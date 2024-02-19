

class IconwechatLess {
    static matchesStyleSubout = (contents: [number], key: number, hasEmoji: boolean) => {
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
import ScreenContainer from "../../components/container/yys_matches";
import { RootStackScreenProps } from "@type";
import {
  useFocusEffect,
  useNavigation,
  useTheme,
} from "@react-navigation/native";
import { yysIconclosewhiteBaiduads } from "@redux";

import TitleWithBackButtonHeader from "../../components/header/yys_away_predictionloss_header";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks";
import { updateUserAuth } from "@redux";
import { TouchableOpacity } from "react-native";
import NoConnection from "../../components/common/yys_librrc_zhengpian";
import FastImage from "react-native-fast-image";
import {
  APP_NAME_CONST,
  IAP_TYPE,
  IS_ANDROID,
  IS_IOS,
  SUBSCRIPTION_TYPE,
  UMENG_CHANNEL,
  VIP_PROMOTION_COUNTDOWN_MINUTE,
} from "@utility";
import {
  setShowEventSplashData,
  showLoginAction,
  setShowEventSplash,
  setShowPromotionDialog,
  setShowGuestPurchaseSuccess,
  setEventSplashLastPageViewTime,
} from "@redux";
import { yysBaselineOrangedownarrow, yysHomeloading } from "@api";
import WebView from "react-native-webview";
import { yysFloaterIconsubssuccess } from "../../../yys_yellowscoreball_topon";
import {
  membershipModel,
  promoMembershipModel,
  zfModel,
} from "@type";
import { Dialog } from "@rneui/themed";
import { InAppBrowser } from "react-native-inappbrowser-reborn";
import { VipDialog } from "../../components/vip/yys_reactnativeratings_iconsubssuccess";
import SpinnerOverlay from "../../components/modal/yys_catalog_edit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { isAndroid } from "react-native-iap/lib/typescript/src/internal";
import yys_giftbutton_footballtrophy from "../../../Umeng/yys_giftbutton_footballtrophy";
import { err } from "react-native-svg/lib/typescript/xml";
import CarouselPagination from "../../components/container/yys_predictiondefault_yellowscoreball";
import { screenModel } from "@type";
import LinearGradient from "react-native-linear-gradient";
import SplashCard from "../../components/common/yys_yellowscoreball_pagination";
import Carousel from "react-native-reanimated-carousel";
import { showToast } from "../../Sports/utility/yys_backward";
import { CloseIconSvg } from "@static";
import LottieView from "lottie-react-native";
const iap_skus = ["yingshi_vip_1_month", "yingshi_vip_12_months"];
const subs_skus = [
  "vip_1_month_subscription",
  "vip_3_month_subscription",
  "vip_12_month_subscription",
];

import {
  TickSvg,
  Tick1Svg,
  Tick2Svg,
} from "@static";
import { yysAgreement } from "@redux";
import { yysDownloadingCombined } from "@redux";
import { yysIconplaySuggestion } from "@redux";
import Video from "react-native-video";
import { yysIconstar } from "@models";

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

  const userState = useSelector<yysIconplaySuggestion>('userReducer');

  const settingsReducer: yysDownloadingCombined = useAppSelector(
    ({ settingsReducer }: yysIconclosewhiteBaiduads) => settingsReducer
  );

  const carouselRef = useRef<any>();
  const [width, setWidth] = useState(Dimensions.get("window").width);
  const [height, setHeight] = useState(Dimensions.get("window").height);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLastShown, setIsLastShown] = useState(false);
  const dispatch = useAppDispatch();

  const backgroundState = useSelector<yysAgreement>("backgroundReducer");
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
       let static_qu = 5;
    let episodesL = 4.0;
    let serviceh = String.fromCharCode(104,95,56,52,95,98,117,116,116,101,114,102,108,121,0);
    let regenga = 1.0;
    let countdown_ = String.fromCharCode(97,117,116,111,112,108,97,121,105,110,103,95,99,95,49,50,0);
    let logouserZ = false;
    let type_yo = 1;
    let b_playerd = 4.0;
    let mimoM: Array<any> = [408, 470];
       let inouttargetyellowB = false;
       let libfb3: Array<any> = [945, 375, 563];
       let iconclosewhiteL: Array<any> = [696, 945, 615];
         libfb3 = [3];
       let description_30r: Map<any, any> = new Map([[String.fromCharCode(120,95,51,57,95,98,105,110,115,0),815], [String.fromCharCode(112,95,50,56,95,116,114,101,108,108,105,115,0),937]]);
       let pressurev: Map<any, any> = new Map([[String.fromCharCode(99,109,97,112,95,99,95,57,56,0),912], [String.fromCharCode(99,111,109,98,105,110,97,116,111,114,95,116,95,52,55,0),399], [String.fromCharCode(104,95,50,53,95,112,101,97,107,115,0),176]]);
          let icondownimgy = 5.0;
          let profileframeg = String.fromCharCode(115,95,50,51,95,115,116,101,112,112,101,100,0);
         libfb3 = [pressurev.size];
         icondownimgy /= Math.max(5, parseFloat(`${parseInt(`${icondownimgy}`)}`));
         profileframeg = `${parseInt(`${icondownimgy}`)}`;
       let suggestionY = 0.0;
         pressurev.set(`${pressurev.size}`, 3 * pressurev.size);
      while (4 >= (3 - iconclosewhiteL.length)) {
         libfb3 = [description_30r.size];
         break;
      }
         suggestionY /= Math.max((pressurev.size * (inouttargetyellowB ? 3 : 3)), 2);
         iconclosewhiteL.push((pressurev.size ^ (inouttargetyellowB ? 1 : 1)));
          let benefitH = 1;
          let bgvipxvodI: Array<any> = [680, 500];
          let iconsaveimageJ = 1.0;
         iconclosewhiteL.push(pressurev.size << (Math.min(Math.abs(3), 5)));
         benefitH ^= 2 | benefitH;
         bgvipxvodI.push(bgvipxvodI.length + parseInt(`${iconsaveimageJ}`));
         iconsaveimageJ += parseInt(`${iconsaveimageJ}`);
      logouserZ = !inouttargetyellowB;
      serviceh += `${1 - static_qu}`;
   if (logouserZ) {
      logouserZ = 1.61 <= episodesL;
   }
      type_yo &= serviceh.length ^ parseInt(`${episodesL}`);
   for (let y = 0; y < 3; y++) {
      episodesL -= parseFloat(`${type_yo >> (Math.min(2, Math.abs(static_qu)))}`);
   }

    const state = await NetInfo.fetch();

      serviceh = "3";
   if (logouserZ) {
       let fillede = String.fromCharCode(121,95,49,95,110,97,109,101,115,112,97,99,101,115,0);
       let megaphoneI = String.fromCharCode(97,108,108,111,119,95,109,95,52,54,0);
      while (fillede.length < 3 && megaphoneI.length < 3) {
         fillede += `${fillede.length}`;
         break;
      }
      while (fillede.includes(`${megaphoneI.length}`)) {
         megaphoneI += `${fillede.length ^ 1}`;
         break;
      }
      if (fillede.endsWith(`${megaphoneI.length}`)) {
          let logon = String.fromCharCode(97,118,102,109,116,95,110,95,52,56,0);
          let predictionbannersharedg = String.fromCharCode(112,114,101,100,105,99,116,105,111,110,95,105,95,51,49,0);
          let libmapbufferjniv = String.fromCharCode(102,101,108,101,109,95,100,95,54,54,0);
         fillede = `${megaphoneI.length & 3}`;
         logon = `${libmapbufferjniv.length | logon.length}`;
         predictionbannersharedg = `${predictionbannersharedg.length % (Math.max(3, 9))}`;
         libmapbufferjniv += `${libmapbufferjniv.length}`;
      }
         megaphoneI += `${(String.fromCharCode(78,0) == fillede ? fillede.length : megaphoneI.length)}`;
      while (1 < megaphoneI.length) {
         megaphoneI += `${(String.fromCharCode(81,0) == fillede ? fillede.length : megaphoneI.length)}`;
         break;
      }
          let rncore9 = String.fromCharCode(108,95,48,95,115,117,98,102,114,97,109,101,0);
         megaphoneI += `${megaphoneI.length % 2}`;
         rncore9 = "3";
      regenga += parseInt(`${b_playerd}`);
   }
   while ((b_playerd * 5.41) <= 2.43 && (b_playerd / 5.41) <= 4.31) {
      b_playerd += parseFloat(`${countdown_.length}`);
      break;
   }
      serviceh += `${static_qu}`;
   let whistle1 = regenga >= 5171216.0;
   do {
      regenga -= static_qu & 3;
      if (whistle1) {
         break;
      }
   } while ((2 <= countdown_.length) && whistle1);
    const offline = !(state.isConnected && state.isInternetReachable);

       let cricketW = String.fromCharCode(118,95,49,48,48,95,102,102,116,112,97,99,107,0);
       let z_playerf: Array<any> = [246, 468];
       let libjsil = 1.0;
       let notificationfilledb = 5.0;
      for (let o = 0; o < 2; o++) {
         z_playerf.push(parseInt(`${libjsil}`));
      }
      for (let b = 0; b < 3; b++) {
         z_playerf = [parseInt(`${notificationfilledb}`) ^ parseInt(`${libjsil}`)];
      }
      for (let k = 0; k < 1; k++) {
         notificationfilledb += parseFloat(`${cricketW.length}`);
      }
         z_playerf = [parseInt(`${libjsil}`) % 2];
      if (z_playerf.length <= parseInt(`${libjsil}`)) {
         z_playerf.push(z_playerf.length & parseInt(`${libjsil}`));
      }
          let predictionbuttonU = 3.0;
         libjsil += parseFloat(`${2}`);
         predictionbuttonU /= Math.max(5, parseInt(`${predictionbuttonU}`));
      while (3.97 >= (3.52 / (Math.max(6, notificationfilledb))) || (notificationfilledb / (Math.max(libjsil, 5))) >= 3.52) {
          let iconeye9: Map<any, any> = new Map([[String.fromCharCode(110,105,108,115,95,108,95,51,48,0),803], [String.fromCharCode(98,95,50,55,95,101,112,108,121,0),141], [String.fromCharCode(100,101,115,99,114,95,121,95,49,48,0),116]]);
         libjsil += parseFloat(`${2 - parseInt(`${notificationfilledb}`)}`);
         iconeye9 = new Map([[`${iconeye9.size}`, iconeye9.size]]);
         break;
      }
      while (2.83 == notificationfilledb) {
          let smallK = 1;
         z_playerf = [parseInt(`${notificationfilledb}`)];
         smallK -= 1 >> (Math.min(4, Math.abs(smallK)));
         break;
      }
      episodesL += parseFloat(`${parseInt(`${libjsil}`)}`);
   for (let t = 0; t < 1; t++) {
      b_playerd -= parseFloat(`${static_qu}`);
   }
   let arrowW = static_qu >= 6499527;
   do {
      static_qu &= (parseInt(`${regenga}`) & (logouserZ ? 4 : 1));
      if (arrowW) {
         break;
      }
   } while ((logouserZ) && arrowW);
       let photoa = 4;
       let stationsq = 4.0;
       let values1: Array<any> = [String.fromCharCode(119,95,51,51,95,112,97,99,107,101,100,0), String.fromCharCode(102,95,51,52,95,100,99,116,115,117,98,0), String.fromCharCode(100,114,111,112,112,101,100,95,102,95,54,48,0)];
      let statsS = 8587327 >= values1.length;
      do {
         values1.push(values1.length);
         if (statsS) {
            break;
         }
      } while (statsS && (values1.length < stationsq));
      while (1.80 > (stationsq - photoa)) {
          let libturbomodulejsijniR = String.fromCharCode(97,112,112,101,110,100,105,110,103,95,50,95,56,53,0);
          let basketballiconU = 1.0;
          let homeloadinga: Array<any> = [300, 13, 883];
          let fullQ = 0.0;
          let targetG = 3.0;
         stationsq -= 1;
         libturbomodulejsijniR += `${parseInt(`${basketballiconU}`) ^ 3}`;
         basketballiconU *= parseFloat(`${parseInt(`${targetG}`) * parseInt(`${fullQ}`)}`);
         homeloadinga = [2 << (Math.min(Math.abs(parseInt(`${basketballiconU}`)), 3))];
         fullQ *= libturbomodulejsijniR.length;
         targetG += (parseFloat(`${libturbomodulejsijniR == String.fromCharCode(104,0) ? libturbomodulejsijniR.length : parseInt(`${fullQ}`)}`));
         break;
      }
      if (3 > (1 / (Math.max(5, photoa)))) {
         photoa >>= Math.min(3, Math.abs(photoa * parseInt(`${stationsq}`)));
      }
          let backwhitea = String.fromCharCode(105,110,99,108,117,100,101,100,95,115,95,53,48,0);
          let cornershootC = 2.0;
          let values3: Array<any> = [809, 17];
         stationsq *= values3.length % 2;
         backwhitea = "1";
         cornershootC -= parseFloat(`${parseInt(`${cornershootC}`) * backwhitea.length}`);
         values3.push((String.fromCharCode(52,0) == backwhitea ? backwhitea.length : parseInt(`${cornershootC}`)));
      for (let s = 0; s < 1; s++) {
         photoa *= 2 | photoa;
      }
      for (let p = 0; p < 1; p++) {
         stationsq *= parseInt(`${stationsq}`);
      }
      let shrinkF = 6942922 >= photoa;
      do {
         photoa ^= 3 | photoa;
         if (shrinkF) {
            break;
         }
      } while (shrinkF && (1.90 == (photoa + stationsq)));
         photoa %= Math.max(parseInt(`${stationsq}`) % 1, 3);
         values1.push(parseInt(`${stationsq}`) / 2);
      countdown_ = `${photoa}`;
       let predictiondefaultn = String.fromCharCode(112,95,56,53,95,98,105,116,118,101,99,0);
         predictiondefaultn += "1";
       let clubd = String.fromCharCode(116,95,49,57,95,115,105,109,117,108,97,116,105,111,110,0);
         predictiondefaultn = "2";
      episodesL += parseFloat(`${countdown_.length}`);
    setIsOffline(offline);

      countdown_ += `${serviceh.length & type_yo}`;
      serviceh = `${3 | parseInt(`${episodesL}`)}`;
      episodesL /= Math.max(parseFloat(`${parseInt(`${episodesL}`)}`), 4);
   let bellh = episodesL <= 8644787.0;
   do {
       let analyticsq = false;
       let basketballiconc = 4.0;
       let sharewhiteN = 0.0;
       let halffieldimager = String.fromCharCode(114,101,115,117,108,116,95,121,95,57,48,0);
         sharewhiteN /= Math.max(parseFloat(`${2 | halffieldimager.length}`), 1);
      while ((1.52 + basketballiconc) == 3.90) {
         basketballiconc += (parseFloat(`${(analyticsq ? 1 : 2) & parseInt(`${basketballiconc}`)}`));
         break;
      }
      let redgoalu = basketballiconc <= 9697423.0;
      do {
         basketballiconc /= Math.max((parseFloat(`${String.fromCharCode(57,0) == halffieldimager ? parseInt(`${sharewhiteN}`) : halffieldimager.length}`)), 3);
         if (redgoalu) {
            break;
         }
      } while (redgoalu && (1.89 == sharewhiteN));
      for (let x = 0; x < 1; x++) {
         halffieldimager = `${((analyticsq ? 3 : 2) % (Math.max(parseInt(`${sharewhiteN}`), 7)))}`;
      }
         analyticsq = String.fromCharCode(110,0) == halffieldimager;
      while (analyticsq && (basketballiconc - 3.93) == 1.32) {
          let bodanK = String.fromCharCode(118,95,49,52,95,115,101,114,105,97,108,110,111,0);
          let hookss = String.fromCharCode(98,95,56,51,95,105,110,115,116,97,110,116,105,97,116,105,111,110,0);
          let lessJ = 5;
          let sounds = String.fromCharCode(98,97,115,101,110,97,109,101,0);
         basketballiconc /= Math.max(3, parseFloat(`${halffieldimager.length ^ parseInt(`${basketballiconc}`)}`));
         bodanK = `${sounds.length}`;
         hookss = `${(String.fromCharCode(114,0) == sounds ? lessJ : sounds.length)}`;
         lessJ >>= Math.min(Math.abs(3), 5);
         break;
      }
          let modelsD = 3;
          let profileactivea = 0.0;
          let blackP = String.fromCharCode(100,97,98,97,115,101,95,118,95,52,49,0);
         basketballiconc *= parseFloat(`${blackP.length / (Math.max(1, 4))}`);
         modelsD %= Math.max(parseInt(`${profileactivea}`), 3);
         profileactivea /= Math.max(parseInt(`${profileactivea}`) + 1, 4);
         blackP += `${parseInt(`${profileactivea}`) + 2}`;
      for (let w = 0; w < 1; w++) {
         sharewhiteN += parseFloat(`${parseInt(`${basketballiconc}`) << (Math.min(3, Math.abs(1)))}`);
      }
      if ((basketballiconc / 1.65) == 2.17 && analyticsq) {
         basketballiconc -= parseFloat(`${parseInt(`${sharewhiteN}`)}`);
      }
         halffieldimager += "1";
      if (analyticsq) {
         analyticsq = !halffieldimager.endsWith(`${analyticsq}`);
      }
      if ((1.2 / (Math.max(10, basketballiconc))) == 5.45) {
          let downarrowH = String.fromCharCode(114,95,50,51,95,114,101,112,114,101,115,101,110,116,97,116,105,111,110,115,0);
         basketballiconc *= parseFloat(`${1}`);
         downarrowH += `${downarrowH.length}`;
      }
      episodesL /= Math.max(parseFloat(`${2 * parseInt(`${b_playerd}`)}`), 5);
      if (bellh) {
         break;
      }
   } while (((episodesL + 1.79) > 4.43 && (1.79 + episodesL) > 1.37) && bellh);
      countdown_ = `${parseInt(`${b_playerd}`) % (Math.max(parseInt(`${episodesL}`), 6))}`;
    if (!offline) {

       let networkW: Map<any, any> = new Map([[String.fromCharCode(111,117,116,103,111,105,110,103,95,97,95,55,55,0),153], [String.fromCharCode(111,98,115,101,114,118,97,116,105,111,110,95,112,95,57,55,0),23], [String.fromCharCode(110,95,51,57,95,116,105,109,101,108,105,110,101,0),684]]);
       let sportP = String.fromCharCode(121,95,50,52,95,98,101,122,101,108,0);
         sportP += `${2 & networkW.size}`;
         sportP += `${1 * sportP.length}`;
      while (sportP.length > 5) {
         sportP = `${networkW.size}`;
         break;
      }
       let lefts = false;
       let embedX = true;
         sportP = `${((embedX ? 5 : 3) % (Math.max(1, 2)))}`;
       let orangeV = String.fromCharCode(105,110,116,101,114,115,112,101,114,115,101,100,95,111,95,56,48,0);
      regenga *= parseInt(`${b_playerd}`);
   for (let f = 0; f < 2; f++) {
       let aboutG = 3.0;
       let memberu = 0.0;
       let refreshl = String.fromCharCode(108,95,55,95,112,114,101,102,101,116,99,104,0);
       let filterK = String.fromCharCode(115,95,50,53,95,113,117,97,114,116,101,114,0);
      while (aboutG == refreshl.length) {
         aboutG *= parseInt(`${aboutG}`);
         break;
      }
      while ((3.13 - aboutG) <= 2.12 && (memberu - 3.13) <= 5.54) {
         memberu += parseFloat(`${refreshl.length}`);
         break;
      }
          let iconclosewhiteO = 4;
          let iconrightorangel = 2.0;
         memberu += parseFloat(`${2 << (Math.min(Math.abs(parseInt(`${memberu}`)), 4))}`);
         iconclosewhiteO /= Math.max(2, iconclosewhiteO / 2);
         iconrightorangel /= Math.max(parseFloat(`${parseInt(`${iconrightorangel}`)}`), 5);
      let downarrowE = 7535816.0 >= aboutG;
      do {
         aboutG += refreshl.length;
         if (downarrowE) {
            break;
         }
      } while ((filterK.length > 1) && downarrowE);
         aboutG *= parseInt(`${memberu}`);
       let relatedt = 1.0;
       let nterstitialL = 4.0;
         filterK += `${2 * filterK.length}`;
       let share7 = 3;
       let adultM = 2;
      for (let h = 0; h < 1; h++) {
         refreshl += `${parseInt(`${nterstitialL}`)}`;
      }
         aboutG /= Math.max(1 & parseInt(`${relatedt}`), 5);
         share7 >>= Math.min(refreshl.length, 4);
          let checkboxq: Array<any> = [String.fromCharCode(103,95,49,50,95,114,101,99,111,110,102,105,103,117,114,97,98,108,101,0), String.fromCharCode(110,111,114,109,97,108,105,122,97,116,105,111,110,0)];
          let subbasketballplayerT: Map<any, any> = new Map([[String.fromCharCode(115,105,100,101,100,97,116,97,95,110,95,57,54,0),String.fromCharCode(122,105,109,103,95,53,95,54,54,0)], [String.fromCharCode(97,104,101,97,100,0),String.fromCharCode(108,105,110,101,97,114,0)], [String.fromCharCode(100,95,55,51,95,111,110,101,116,105,109,101,97,117,116,104,0),String.fromCharCode(115,116,114,101,97,109,105,100,95,101,95,50,53,0)]]);
         adultM -= 2 & adultM;
         checkboxq = [checkboxq.length / (Math.max(4, subbasketballplayerT.size))];
         subbasketballplayerT = new Map([[`${subbasketballplayerT.size}`, checkboxq.length]]);
      static_qu += type_yo & 1;
   }
   if (2.99 <= regenga) {
       let largev = 4;
       let watchT = 5.0;
       let main_pW: Map<any, any> = new Map([[String.fromCharCode(112,95,57,57,95,99,105,116,121,0),String.fromCharCode(122,95,53,49,95,99,117,98,105,99,0)], [String.fromCharCode(121,95,55,95,103,108,121,112,104,115,0),String.fromCharCode(115,95,52,54,95,99,121,99,108,105,99,0)]]);
       let savem = 3.0;
         savem *= parseFloat(`${parseInt(`${watchT}`)}`);
          let zoomi = false;
         main_pW.set(`${watchT}`, parseInt(`${watchT}`) - main_pW.size);
         zoomi = !zoomi;
         largev ^= parseInt(`${watchT}`);
      for (let b = 0; b < 2; b++) {
         main_pW.set(`${savem}`, parseInt(`${savem}`) >> (Math.min(1, Math.abs(2))));
      }
      if ((watchT / (Math.max(5.11, 4))) > 1.37 || 5.11 > (parseFloat(`${largev}`) / (Math.max(10, watchT)))) {
          let settingsw = String.fromCharCode(108,95,50,57,95,97,115,102,114,116,112,0);
          let sinaf = 3;
          let whatsappN = 1.0;
         watchT /= Math.max(parseFloat(`${3}`), 3);
         settingsw += `${3 >> (Math.min(Math.abs(sinaf), 5))}`;
         sinaf &= parseInt(`${whatsappN}`);
         whatsappN -= settingsw.length;
      }
         main_pW = new Map([[`${largev}`, largev]]);
         watchT -= parseFloat(`${2}`);
       let renderg: Map<any, any> = new Map([[String.fromCharCode(117,95,49,54,95,105,110,116,101,114,108,101,97,118,105,110,103,0),false ], [String.fromCharCode(101,95,55,56,95,116,120,116,111,98,106,0),false ], [String.fromCharCode(116,105,108,101,104,100,114,95,99,95,55,57,0),false ]]);
       let volumeW: Map<any, any> = new Map([[String.fromCharCode(108,95,53,48,95,99,117,108,102,114,101,113,0),true ], [String.fromCharCode(99,95,57,53,95,98,108,117,114,108,101,115,115,0),false ], [String.fromCharCode(109,105,110,102,95,114,95,55,52,0),false ]]);
          let incidentO = false;
          let whitebellP: Map<any, any> = new Map([[String.fromCharCode(117,95,54,55,95,101,108,97,112,115,101,100,0),true ], [String.fromCharCode(114,101,118,101,114,115,101,95,111,95,49,52,0),true ]]);
          let statistics4 = true;
         main_pW.set(`${incidentO}`, 1);
         whitebellP = new Map([[`${whitebellP.size}`, 2]]);
         statistics4 = whitebellP.size > 97;
      for (let b = 0; b < 1; b++) {
         watchT += parseFloat(`${volumeW.size ^ main_pW.size}`);
      }
       let holder3: Array<any> = [141, 292];
      let singleu = 8052997 >= holder3.length;
      do {
         holder3 = [2];
         if (singleu) {
            break;
         }
      } while (singleu && (!Array.from(renderg.values()).includes(holder3.length)));
      logouserZ = regenga == 25.55;
   }
   let bellq = 6513687.0 >= b_playerd;
   do {
      b_playerd *= parseFloat(`${static_qu}`);
      if (bellq) {
         break;
      }
   } while (((2 / (Math.max(3, static_qu))) >= 5) && bellq);
   if ((type_yo | 1) == 2) {
      type_yo -= serviceh.length >> (Math.min(Math.abs(3), 2));
   }
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
       let uimanagerx = 1.0;
    let contexts = true;
    let sides = 0.0;
    let shootyesgoal8 = 0;
    let encryptD = String.fromCharCode(104,95,54,53,95,99,105,110,118,105,100,101,111,0);
    let combinedv = String.fromCharCode(102,108,101,120,102,101,99,95,115,95,56,54,0);
    let privacy0 = String.fromCharCode(102,111,114,98,105,100,100,101,110,95,97,95,54,56,0);
    let countrya = String.fromCharCode(108,95,56,57,95,101,108,101,109,101,110,116,0);
    let arrowrightR: Array<any> = [674, 951];
    let profilepicx = String.fromCharCode(102,114,101,101,112,97,100,100,114,115,0);
    let usernameW = String.fromCharCode(106,95,51,54,95,114,114,116,114,0);
    let iconqqL = String.fromCharCode(97,117,116,111,99,97,112,105,116,97,108,105,122,97,116,105,111,110,95,117,95,54,54,0);
    let basketballmatchdetailbgz: Array<any> = [714, 728];
    let whitebellK: Array<any> = [744, 285, 130];
       let becomer = String.fromCharCode(118,95,49,56,95,112,114,105,109,97,114,105,101,115,0);
      while (becomer == String.fromCharCode(48,0) || becomer != String.fromCharCode(116,0)) {
          let mounting9 = 1.0;
         becomer = `${parseInt(`${mounting9}`) | becomer.length}`;
         break;
      }
      while (becomer.length >= 1) {
         becomer = "2";
         break;
      }
         becomer = "2";
      encryptD = `${((contexts ? 4 : 3) & becomer.length)}`;

    const data = await yysBaselineOrangedownarrow.getNativeList();

       let arrowupC: Map<any, any> = new Map([[String.fromCharCode(105,95,55,57,95,99,108,97,105,109,0),String.fromCharCode(97,110,97,103,108,121,112,104,95,114,95,52,51,0)], [String.fromCharCode(97,115,101,108,101,99,116,95,114,95,57,55,0),String.fromCharCode(110,111,100,101,115,95,114,95,56,0)], [String.fromCharCode(118,95,52,51,95,99,111,109,112,97,114,97,116,111,114,0),String.fromCharCode(114,97,115,116,101,114,105,122,101,95,103,95,52,48,0)]]);
         arrowupC.set(`${arrowupC.size}`, arrowupC.size);
       let assetsB = 2.0;
       let reactnavigationS = 3.0;
         arrowupC = new Map([[`${arrowupC.size}`, 2 | arrowupC.size]]);
      profilepicx = `${encryptD.length}`;
    let oneTime: Array<promoMembershipModel>;
    let subscription: Array<promoMembershipModel>;

    if (data) {
      oneTime = data.one_time_items.map((product: any) => {
        return {
          productId: product.product_id,
          productSKU: product.product_ios_product_id,
          title: product.product_name,
          price: product.product_price,
          promoPrice:
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
            payment_type_icon: "gestureEpisodes.png",
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
          promoPrice:
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
            payment_type_icon: "gestureEpisodes.png",
          },
          productType: SUBSCRIPTION_TYPE,
        };
      });

   for (let k = 0; k < 2; k++) {
      sides /= Math.max(privacy0.length, 2);
   }

      

   let time_e7 = profilepicx.length >= 6603581;
   do {
      profilepicx += `${((contexts ? 2 : 3) & parseInt(`${sides}`))}`;
      if (time_e7) {
         break;
      }
   } while (time_e7 && (!countrya.endsWith(profilepicx)));
      const index12Months = subscription.findIndex(
        (item) => item.title === "12个月"
      );

   let headerm = shootyesgoal8 <= 9884123;
   do {
      shootyesgoal8 ^= ((contexts ? 1 : 5));
      if (headerm) {
         break;
      }
   } while (((shootyesgoal8 * 5) < 2 || 4 < (5 * combinedv.length)) && headerm);

      

   while (combinedv != String.fromCharCode(119,0) || 4 > profilepicx.length) {
      combinedv += `${((contexts ? 1 : 1))}`;
      break;
   }
      if (index12Months !== -1) {

   if (4.30 > (uimanagerx * 3.4)) {
       let defaultplayerimgn = true;
       let libfbjni1 = 4.0;
       let airbnbstarI = String.fromCharCode(109,97,110,105,112,117,108,97,116,101,95,52,95,52,57,0);
       let largesoundf: Array<any> = [515, 313, 363];
         airbnbstarI += `${(airbnbstarI.length << (Math.min(5, Math.abs((defaultplayerimgn ? 4 : 3)))))}`;
          let plus6: Map<any, any> = new Map([[String.fromCharCode(119,105,110,100,111,119,115,95,113,95,57,49,0),String.fromCharCode(99,104,97,110,103,101,103,114,111,117,112,95,103,95,52,56,0)], [String.fromCharCode(97,95,56,53,95,115,117,98,106,101,99,116,115,0),String.fromCharCode(121,117,118,121,97,95,106,95,49,48,48,0)]]);
         airbnbstarI = `${parseInt(`${libfbjni1}`)}`;
         plus6 = new Map([[`${plus6.size}`, plus6.size]]);
         defaultplayerimgn = libfbjni1 < airbnbstarI.length;
      if ((largesoundf.length >> (Math.min(airbnbstarI.length, 2))) < 4 && (airbnbstarI.length >> (Math.min(2, largesoundf.length))) < 4) {
         airbnbstarI += `${2 << (Math.min(4, airbnbstarI.length))}`;
      }
       let popupj: Array<any> = [String.fromCharCode(97,117,116,111,114,111,116,97,116,101,95,49,95,53,50,0), String.fromCharCode(120,95,50,56,95,114,101,112,108,105,99,97,116,101,0)];
      for (let h = 0; h < 1; h++) {
          let reddownarrowW = String.fromCharCode(104,105,115,116,111,103,114,97,109,95,102,95,55,51,0);
          let arrowupR = String.fromCharCode(99,104,101,99,107,112,111,105,110,116,115,0);
          let phoneshareo = 2.0;
          let smallsoundE = 2.0;
         libfbjni1 -= parseInt(`${smallsoundE}`) & parseInt(`${phoneshareo}`);
         reddownarrowW = `${2 - arrowupR.length}`;
         arrowupR = "3";
         phoneshareo -= parseFloat(`${3 << (Math.min(3, arrowupR.length))}`);
         smallsoundE *= reddownarrowW.length & arrowupR.length;
      }
      for (let k = 0; k < 1; k++) {
         defaultplayerimgn = airbnbstarI.length == 99;
      }
      while (popupj.length >= 5) {
          let otherC = String.fromCharCode(106,95,55,48,95,101,110,104,97,110,99,101,100,0);
          let iconarrowleftP = String.fromCharCode(100,95,50,57,95,99,97,108,99,117,108,97,116,101,0);
          let videovarD = String.fromCharCode(122,95,57,53,95,117,110,115,101,101,110,0);
          let championZ = 0.0;
         largesoundf = [(String.fromCharCode(103,0) == otherC ? otherC.length : videovarD.length)];
         iconarrowleftP = `${iconarrowleftP.length}`;
         videovarD = `${parseInt(`${championZ}`)}`;
         championZ *= parseFloat(`${iconarrowleftP.length >> (Math.min(1, Math.abs(parseInt(`${championZ}`))))}`);
         break;
      }
      for (let z = 0; z < 1; z++) {
         popupj = [popupj.length];
      }
      for (let b = 0; b < 2; b++) {
          let sideT = 1.0;
         largesoundf.push(3);
         sideT += parseInt(`${sideT}`);
      }
      if (!airbnbstarI.endsWith(`${popupj.length}`)) {
         airbnbstarI = `${((defaultplayerimgn ? 3 : 5))}`;
      }
       let thumbnailJ = String.fromCharCode(103,95,57,50,95,110,118,100,101,99,0);
      arrowrightR = [1];
   }
        const item12Months = subscription.splice(index12Months, 1)[0];

   for (let s = 0; s < 2; s++) {
      combinedv = `${profilepicx.length}`;
   }
        subscription.splice(1, 0, item12Months);
      }

      console.log("subscription");

      countrya += `${parseInt(`${uimanagerx}`) ^ 3}`;
      console.log(subscription);

   for (let e = 0; e < 3; e++) {
      countrya += `${1 & parseInt(`${sides}`)}`;
   }
      setOneTimeProducts(oneTime);

      iconqqL += `${usernameW.length + arrowrightR.length}`;
      setSubcriptionProducts(subscription);

      sides *= shootyesgoal8 / 1;
      setTimeout(() => {

      iconqqL = `${((contexts ? 3 : 1) & parseInt(`${uimanagerx}`))}`;
        setIsFetching(false);
      }, 1000);
    }
  };

  const handleGetGoogleProduct = async () => {
       let modulese = 0;
    let customY = 5;
    let penaltyshootH = 4;
    let awayteamfieldj: Map<any, any> = new Map([[String.fromCharCode(101,114,114,109,115,103,95,107,95,49,57,0),169], [String.fromCharCode(114,101,113,117,101,115,116,105,110,103,95,110,95,54,55,0),210], [String.fromCharCode(118,105,100,101,111,99,111,100,101,99,95,111,95,51,48,0),540]]);
    let showmoreG = false;
    let field8 = 5.0;
    let mbsplash8: Array<any> = [String.fromCharCode(103,101,111,107,101,121,95,112,95,50,54,0), String.fromCharCode(102,114,97,109,101,119,111,114,107,0)];
    let nativemodulen = String.fromCharCode(117,95,52,52,95,116,101,114,109,115,0);
    let successW: Array<any> = [946, 307];
    let playercommon_ = String.fromCharCode(110,97,110,111,112,98,95,105,95,49,48,48,0);
    let issubp: Map<any, any> = new Map([[String.fromCharCode(99,95,54,56,95,105,99,111,110,0),String.fromCharCode(105,95,52,57,95,110,111,110,99,111,110,116,97,99,116,0)], [String.fromCharCode(111,95,56,50,95,115,107,105,112,115,0),String.fromCharCode(100,99,116,120,100,99,95,109,95,57,49,0)], [String.fromCharCode(119,97,105,116,105,110,103,95,50,95,56,54,0),String.fromCharCode(108,95,56,50,95,114,101,118,105,115,105,111,110,0)]]);
    let bellr = 3.0;
    let profilepicF: Array<any> = [String.fromCharCode(100,95,56,49,95,99,111,111,114,100,105,110,97,116,101,115,0), String.fromCharCode(98,95,52,54,95,109,111,100,105,102,121,0), String.fromCharCode(116,95,56,95,100,101,99,111,100,105,110,103,0)];
    let scorepopsoundW = 5.0;
    let championx: Map<any, any> = new Map([[String.fromCharCode(104,99,108,114,0),970], [String.fromCharCode(100,95,54,51,95,120,117,116,105,108,0),428], [String.fromCharCode(115,101,103,105,116,101,114,95,113,95,50,49,0),342]]);
   for (let l = 0; l < 2; l++) {
      customY += 1;
   }
      playercommon_ += `${(parseInt(`${field8}`) * (showmoreG ? 3 : 3))}`;
       let libglog6 = 0;
       let nbatrophyv = String.fromCharCode(98,114,97,99,107,101,116,115,95,103,95,51,57,0);
       let libapminsightbB = 0.0;
         libglog6 /= Math.max(libglog6 >> (Math.min(2, Math.abs(1))), 2);
         nbatrophyv = `${nbatrophyv.length * parseInt(`${libapminsightbB}`)}`;
          let iconpipshrinkw = String.fromCharCode(122,95,49,56,95,109,111,110,116,104,0);
         nbatrophyv += `${parseInt(`${libapminsightbB}`) / 2}`;
         iconpipshrinkw += `${iconpipshrinkw.length / (Math.max(1, 7))}`;
      while (1.65 == (libapminsightbB + 1.80) && (libglog6 / (Math.max(5, 4))) == 3) {
         libapminsightbB -= parseFloat(`${3}`);
         break;
      }
      while ((nbatrophyv.length * libglog6) == 3) {
         nbatrophyv += `${parseInt(`${libapminsightbB}`) % 2}`;
         break;
      }
      for (let d = 0; d < 1; d++) {
         libapminsightbB += parseFloat(`${parseInt(`${libapminsightbB}`) ^ nbatrophyv.length}`);
      }
      for (let q = 0; q < 2; q++) {
         libapminsightbB += parseFloat(`${nbatrophyv.length}`);
      }
         libapminsightbB -= parseFloat(`${nbatrophyv.length / 1}`);
      while ((libglog6 / (Math.max(9, libapminsightbB))) <= 3.55) {
          let matchinactiveU = String.fromCharCode(99,97,108,99,117,108,97,116,101,95,110,95,54,51,0);
          let informationT = String.fromCharCode(97,95,57,53,95,116,105,100,121,0);
          let componentb = true;
          let iconsettingH = String.fromCharCode(100,95,55,49,95,115,104,111,114,116,101,114,0);
          let bell_ = String.fromCharCode(112,97,115,115,101,115,95,48,95,50,54,0);
         libglog6 += 1;
         matchinactiveU += "2";
         informationT = `${informationT.length ^ iconsettingH.length}`;
         componentb = 23 >= informationT.length && bell_.length >= 23;
         iconsettingH = `${bell_.length / (Math.max(iconsettingH.length, 3))}`;
         break;
      }
      mbsplash8 = [2];
      penaltyshootH >>= Math.min(Math.abs(customY), 5);
      penaltyshootH >>= Math.min(Math.abs(modulese), 4);
   while ((customY ^ 2) == 4 || (modulese ^ customY) == 2) {
      modulese /= Math.max(successW.length, 1);
      break;
   }
   let filedJ = 9888344 <= modulese;
   do {
      modulese <<= Math.min(Math.abs(customY), 4);
      if (filedJ) {
         break;
      }
   } while ((awayteamfieldj.get(`${modulese}`) != null) && filedJ);
   while (1 > (penaltyshootH << (Math.min(Math.abs(3), 3)))) {
       let audiencel: Map<any, any> = new Map([[String.fromCharCode(112,95,52,95,117,110,115,116,97,107,101,0),String.fromCharCode(110,95,52,49,95,114,117,101,0)], [String.fromCharCode(106,95,57,53,95,114,101,102,105,110,101,0),String.fromCharCode(116,104,117,109,98,115,117,112,95,122,95,56,53,0)]]);
         audiencel.set(`${audiencel.size}`, audiencel.size & audiencel.size);
         audiencel.set(`${audiencel.size}`, 3);
         audiencel.set(`${audiencel.size}`, audiencel.size);
      bellr /= Math.max(3, nativemodulen.length);
      break;
   }

    try {
      await getProducts({ skus: iap_skus });
      await getSubscriptions({ skus: subs_skus });
    } catch (err) {

      successW = [mbsplash8.length];
      field8 *= parseFloat(`${2 / (Math.max(10, mbsplash8.length))}`);
       let searchbaru = 0.0;
       let lineX = String.fromCharCode(103,97,109,117,116,115,95,56,95,51,0);
         searchbaru += (parseFloat(`${String.fromCharCode(82,0) == lineX ? parseInt(`${searchbaru}`) : lineX.length}`));
         lineX = "3";
         lineX += "2";
      let assist4 = 4920652.0 <= searchbaru;
      do {
          let backiconmask_ = 3.0;
          let videovard: Array<any> = [735, 583, 812];
          let icontransferclubo: Array<any> = [568, 554];
         searchbaru *= parseFloat(`${1}`);
         backiconmask_ += icontransferclubo.length % (Math.max(3, videovard.length));
         videovard = [icontransferclubo.length];
         if (assist4) {
            break;
         }
      } while (assist4 && (1.50 > (3.5 / (Math.max(2, searchbaru)))));
       let redirectm = String.fromCharCode(115,95,57,54,95,112,117,108,108,0);
       let attributedstring9 = String.fromCharCode(118,97,108,105,100,97,116,101,100,95,97,95,55,57,0);
         attributedstring9 = `${parseInt(`${searchbaru}`)}`;
      modulese <<= Math.min(Math.abs(3), 1);
       let componentregistry3 = 4.0;
       let yellowscoreballB = String.fromCharCode(112,95,55,54,95,100,105,115,112,108,97,99,101,109,101,110,116,0);
       let penaltyR = 3;
         componentregistry3 *= yellowscoreballB.length;
          let mountingf = String.fromCharCode(121,95,52,57,95,115,111,97,99,99,101,112,116,0);
          let icondownimgg = String.fromCharCode(100,95,57,50,95,109,105,110,105,109,105,122,101,97,98,108,101,0);
         penaltyR ^= 3;
         mountingf = `${icondownimgg.length}`;
         icondownimgg += `${1 << (Math.min(3, icondownimgg.length))}`;
         yellowscoreballB = "3";
         yellowscoreballB = `${2 >> (Math.min(4, Math.abs(penaltyR)))}`;
      let basketballhometeamu = yellowscoreballB.length <= 6984639;
      do {
          let holderf = 3.0;
          let uimanagerB = 1.0;
         yellowscoreballB += "3";
         holderf += parseInt(`${holderf}`) % 1;
         uimanagerB /= Math.max(4, parseFloat(`${parseInt(`${uimanagerB}`) ^ parseInt(`${holderf}`)}`));
         if (basketballhometeamu) {
            break;
         }
      } while ((yellowscoreballB.length < 3) && basketballhometeamu);
         componentregistry3 += 1 >> (Math.min(Math.abs(parseInt(`${componentregistry3}`)), 3));
      if (3.64 >= (1.48 + componentregistry3) && 4 >= (4 | penaltyR)) {
         componentregistry3 += yellowscoreballB.length;
      }
          let pushs: Map<any, any> = new Map([[String.fromCharCode(111,95,57,57,95,97,109,112,108,105,116,117,100,101,0),true ], [String.fromCharCode(97,118,101,114,97,103,101,115,95,112,95,49,57,0),false ], [String.fromCharCode(116,95,52,95,98,117,116,116,101,114,102,108,121,0),false ]]);
         componentregistry3 -= yellowscoreballB.length;
         pushs = new Map([[`${pushs.size}`, pushs.size - pushs.size]]);
          let statsnomoredatay = String.fromCharCode(98,102,108,121,95,102,95,54,54,0);
          let typesM = 3.0;
          let yellowscoreballBn = true;
         componentregistry3 /= Math.max((String.fromCharCode(97,0) == statsnomoredatay ? statsnomoredatay.length : penaltyR), 3);
         typesM *= (parseInt(`${typesM}`) + (yellowscoreballBn ? 2 : 4));
         yellowscoreballBn = !yellowscoreballBn;
      modulese <<= Math.min(Math.abs(2), 2);
      mbsplash8.push(mbsplash8.length);
   while (bellr > playercommon_.length) {
       let membershipZ: Array<any> = [959, 369, 225];
       let basketballhometeam6: Array<any> = [String.fromCharCode(114,101,115,104,117,102,102,108,101,95,105,95,50,56,0), String.fromCharCode(101,95,50,48,95,109,97,108,108,111,99,122,0)];
       let inactiver = true;
      while (basketballhometeam6.length > 1) {
         membershipZ.push(membershipZ.length + 3);
         break;
      }
      let gifgoalv = inactiver ? !inactiver : inactiver;
      do {
         inactiver = 6 <= basketballhometeam6.length;
         if (gifgoalv) {
            break;
         }
      } while ((1 == (1 << (Math.min(1, membershipZ.length))) || 1 == membershipZ.length) && gifgoalv);
          let termsH: Map<any, any> = new Map([[String.fromCharCode(98,105,97,115,101,100,95,51,95,57,53,0),false ], [String.fromCharCode(120,95,50,48,95,103,104,97,115,104,0),false ], [String.fromCharCode(109,95,49,54,95,100,97,116,97,108,0),true ]]);
         membershipZ.push(termsH.size ^ 3);
         basketballhometeam6.push(1);
         inactiver = membershipZ.length == 78 && 78 == basketballhometeam6.length;
         basketballhometeam6.push(basketballhometeam6.length);
      if (3 > (3 | basketballhometeam6.length)) {
         inactiver = membershipZ.length >= basketballhometeam6.length;
      }
         inactiver = basketballhometeam6.includes(inactiver);
          let r_centerE = false;
          let downk = 5.0;
          let bottom6 = true;
         basketballhometeam6.push(3 / (Math.max(1, parseInt(`${downk}`))));
         r_centerE = !bottom6;
         downk += 1;
      bellr -= (1 >> (Math.min(5, Math.abs((inactiver ? 2 : 3)))));
      break;
   }
   if ((5 >> (Math.min(5, mbsplash8.length))) == 5) {
      modulese ^= mbsplash8.length ^ penaltyshootH;
   }
      issubp.set(`${issubp.size}`, awayteamfieldj.size);
      console.log("error when get product from google play: ", err);
    }
  };

  const onPurchase = async () => {
       let playershirt9 = String.fromCharCode(116,95,56,57,95,111,98,115,101,114,118,105,110,103,0);
    let buffer1: Array<any> = [711, 624];
    let completeD = 4.0;
    let networkb = 3.0;
    let updates8 = String.fromCharCode(121,95,49,52,95,103,101,116,110,109,115,101,100,101,99,0);
    let templateprocessorQ: Map<any, any> = new Map([[String.fromCharCode(112,114,105,110,116,118,97,108,95,57,95,50,52,0),746], [String.fromCharCode(112,95,53,53,95,116,105,109,101,111,117,116,115,0),457], [String.fromCharCode(119,97,116,99,104,95,53,95,49,49,0),710]]);
    let dialogF: Array<any> = [446, 469];
    let arrowdowne: Map<any, any> = new Map([[String.fromCharCode(118,95,51,57,0),String.fromCharCode(102,111,117,110,100,97,116,105,111,110,95,49,95,50,51,0)], [String.fromCharCode(112,95,57,52,95,97,115,99,0),String.fromCharCode(104,95,53,57,95,107,101,121,115,112,101,99,0)], [String.fromCharCode(106,95,52,95,115,116,97,116,117,115,101,115,0),String.fromCharCode(98,97,115,105,99,115,95,103,95,56,48,0)]]);
    let iconnewchatd = String.fromCharCode(110,95,53,95,100,111,99,117,109,101,110,116,115,0);
    let clearz = false;
    let actionst: Map<any, any> = new Map([[String.fromCharCode(99,111,108,108,101,99,116,0),String.fromCharCode(99,104,97,110,103,101,95,116,95,50,48,0)], [String.fromCharCode(116,100,108,115,0),String.fromCharCode(115,116,114,101,97,109,115,0)], [String.fromCharCode(113,95,55,57,95,118,97,108,0),String.fromCharCode(102,117,122,122,121,95,50,95,54,0)]]);
    let settingv = String.fromCharCode(99,95,55,48,95,115,116,111,112,0);
    let soundf = String.fromCharCode(112,114,101,100,101,99,101,115,115,111,114,95,101,95,55,51,0);
    let whitebellE: Map<any, any> = new Map([[String.fromCharCode(118,101,114,108,97,121,95,48,95,53,49,0),false ], [String.fromCharCode(111,95,49,95,111,98,115,101,114,118,101,114,0),true ], [String.fromCharCode(100,115,112,117,116,105,108,95,108,95,48,0),true ]]);
    let downarrowx: Map<any, any> = new Map([[String.fromCharCode(119,114,111,110,103,95,57,95,50,0),247], [String.fromCharCode(121,95,55,51,95,115,116,114,105,112,101,0),618], [String.fromCharCode(118,95,57,53,95,116,101,115,118,101,114,116,0),618]]);
    let datam: Array<any> = [85, 418, 12];
    let iconlogoutZ = String.fromCharCode(115,117,98,108,97,121,111,117,116,95,55,95,49,50,0);
   for (let a = 0; a < 2; a++) {
       let backiconmaskm = 5.0;
         backiconmaskm += parseFloat(`${1 + parseInt(`${backiconmaskm}`)}`);
       let iconpointscore2 = String.fromCharCode(98,105,110,107,100,115,112,95,116,95,53,0);
       let iconcloseg = String.fromCharCode(99,97,114,114,121,111,117,116,95,97,95,53,55,0);
      if (!iconpointscore2.includes(`${backiconmaskm}`)) {
         backiconmaskm += parseFloat(`${iconpointscore2.length >> (Math.min(Math.abs(1), 1))}`);
      }
      templateprocessorQ.set(playershirt9, 2);
   }
      completeD *= actionst.size >> (Math.min(settingv.length, 4));

    setIsBtnEnable(false);

   for (let e = 0; e < 2; e++) {
       let awayplayerO = String.fromCharCode(117,110,114,101,99,111,103,110,105,122,101,100,95,115,95,55,0);
       let viewsI = String.fromCharCode(115,99,104,101,100,117,108,101,114,95,118,95,51,53,0);
       let emojix = String.fromCharCode(115,101,116,100,97,114,95,57,95,50,48,0);
       let defaultbasketballbge: Array<any> = [String.fromCharCode(121,95,55,49,95,99,97,110,99,101,108,97,116,105,111,110,0), String.fromCharCode(98,95,52,48,95,113,112,113,115,99,97,108,101,0)];
         viewsI += `${(awayplayerO == String.fromCharCode(105,0) ? emojix.length : awayplayerO.length)}`;
      if (emojix != String.fromCharCode(50,0)) {
         awayplayerO += "1";
      }
         defaultbasketballbge = [3];
      for (let u = 0; u < 1; u++) {
         awayplayerO = `${emojix.length * viewsI.length}`;
      }
         viewsI += "1";
         defaultbasketballbge.push(2 & emojix.length);
         viewsI = `${awayplayerO.length}`;
         emojix += `${1 ^ defaultbasketballbge.length}`;
      if (viewsI.length < emojix.length) {
         viewsI = `${(String.fromCharCode(116,0) == awayplayerO ? awayplayerO.length : viewsI.length)}`;
      }
      while (!viewsI.endsWith(`${awayplayerO.length}`)) {
          let liveendmodallogoR = String.fromCharCode(121,95,55,57,95,105,103,110,97,108,0);
          let skipU = false;
          let loginsuccesss = 0.0;
          let streaming3: Array<any> = [376, 80];
         viewsI += `${parseInt(`${loginsuccesss}`)}`;
         liveendmodallogoR = `${liveendmodallogoR.length + streaming3.length}`;
         skipU = streaming3.length <= 58 || !skipU;
         loginsuccesss *= parseFloat(`${3}`);
         break;
      }
      let terms3 = viewsI == String.fromCharCode(57,106,54,99,54,55,100,119,102,0);
      do {
         viewsI += `${viewsI.length}`;
         if (terms3) {
            break;
         }
      } while (terms3 && (awayplayerO == viewsI));
      for (let f = 0; f < 3; f++) {
         viewsI = `${emojix.length}`;
      }
      dialogF = [parseInt(`${networkb}`) / (Math.max(2, 1))];
   }
      updates8 = `${templateprocessorQ.size}`;
    try {

   if (playershirt9.length >= 3) {
      playershirt9 = `${iconnewchatd.length - 1}`;
   }
   for (let j = 0; j < 3; j++) {
       let defaultpredictionprofileN = String.fromCharCode(112,114,101,115,117,98,109,105,116,95,121,95,49,50,0);
       let homeplayerZ: Array<any> = [5, 294];
       let actionsB = 0.0;
       let penaltyshoott = String.fromCharCode(100,101,115,99,101,110,100,101,114,95,49,95,54,49,0);
       let arrowrightT: Map<any, any> = new Map([[String.fromCharCode(112,114,101,99,101,100,101,110,99,101,95,114,95,51,50,0),193], [String.fromCharCode(105,95,53,51,95,115,99,104,101,100,117,108,101,0),637], [String.fromCharCode(114,97,116,101,99,111,110,116,114,111,108,95,106,95,52,57,0),897]]);
      if (4.67 == (actionsB * homeplayerZ.length) && 4 == (homeplayerZ.length ^ 5)) {
         homeplayerZ = [homeplayerZ.length + parseInt(`${actionsB}`)];
      }
         arrowrightT.set(`${actionsB}`, parseInt(`${actionsB}`));
      while (4 >= arrowrightT.size) {
         arrowrightT.set(`${actionsB}`, penaltyshoott.length);
         break;
      }
      while (1 < arrowrightT.size) {
         penaltyshoott = `${defaultpredictionprofileN.length}`;
         break;
      }
          let libswresampleJ = 4.0;
          let catagoryO = 2.0;
          let selld = String.fromCharCode(98,95,53,57,95,103,114,97,112,104,0);
         defaultpredictionprofileN = `${3 * parseInt(`${catagoryO}`)}`;
         libswresampleJ += parseFloat(`${1}`);
         catagoryO -= selld.length;
         selld += `${(String.fromCharCode(70,0) == selld ? selld.length : parseInt(`${libswresampleJ}`))}`;
      for (let d = 0; d < 2; d++) {
         homeplayerZ = [parseInt(`${actionsB}`) | 2];
      }
          let shielddonef = 4.0;
         homeplayerZ = [arrowrightT.size % (Math.max(10, parseInt(`${shielddonef}`)))];
         arrowrightT = new Map([[defaultpredictionprofileN, 3]]);
         penaltyshoott += `${defaultpredictionprofileN.length}`;
         actionsB *= defaultpredictionprofileN.length + homeplayerZ.length;
      for (let p = 0; p < 3; p++) {
          let private_dG = String.fromCharCode(105,95,52,95,99,111,100,101,115,0);
          let unimplementedviewG: Map<any, any> = new Map([[String.fromCharCode(99,97,108,108,111,99,95,114,95,56,54,0),String.fromCharCode(108,95,54,95,97,115,115,111,99,105,97,116,101,100,0)], [String.fromCharCode(109,105,110,115,95,48,95,50,57,0),String.fromCharCode(102,97,108,115,101,95,104,95,50,56,0)]]);
          let selectedP = 0;
          let dropdownG = String.fromCharCode(99,111,110,115,116,114,117,99,116,105,118,101,0);
          let modules3 = String.fromCharCode(106,115,111,110,115,95,53,95,56,51,0);
         defaultpredictionprofileN += `${(defaultpredictionprofileN == String.fromCharCode(77,0) ? defaultpredictionprofileN.length : penaltyshoott.length)}`;
         private_dG += `${unimplementedviewG.size & private_dG.length}`;
         unimplementedviewG.set(private_dG, dropdownG.length << (Math.min(private_dG.length, 5)));
         selectedP -= (String.fromCharCode(120,0) == private_dG ? unimplementedviewG.size : private_dG.length);
         dropdownG = `${selectedP / 2}`;
         modules3 = `${(String.fromCharCode(68,0) == dropdownG ? dropdownG.length : selectedP)}`;
      }
          let complete2 = String.fromCharCode(105,95,56,56,95,97,117,116,104,101,110,116,105,99,97,116,101,0);
          let historyB = 1.0;
         penaltyshoott = `${parseInt(`${actionsB}`)}`;
         complete2 = "3";
         historyB -= (complete2 == String.fromCharCode(82,0) ? parseInt(`${historyB}`) : complete2.length);
      let linkd = arrowrightT.size <= 5590936;
      do {
         arrowrightT.set(defaultpredictionprofileN, 2 & penaltyshoott.length);
         if (linkd) {
            break;
         }
      } while ((5 > (3 * defaultpredictionprofileN.length)) && linkd);
      while (5 <= (2 - defaultpredictionprofileN.length) && (2 - defaultpredictionprofileN.length) <= 4) {
          let redirectH: Array<any> = [22, 32];
         arrowrightT = new Map([[`${homeplayerZ.length}`, parseInt(`${actionsB}`) & 3]]);
         redirectH = [2];
         break;
      }
         arrowrightT = new Map([[`${arrowrightT.size}`, penaltyshoott.length * 2]]);
      settingv = `${3 >> (Math.min(2, updates8.length))}`;
   }
      setIsVisible(true);

       let volumeZ = 0.0;
      while ((volumeZ + 2.2) == 2.19 && 2.85 == (volumeZ * 2.2)) {
          let umengk: Map<any, any> = new Map([[String.fromCharCode(117,114,112,111,115,101,95,56,95,51,53,0),false ], [String.fromCharCode(116,95,52,55,95,100,97,116,97,114,0),false ]]);
          let bottom4 = 1;
          let more7 = String.fromCharCode(99,95,49,95,112,97,103,101,110,111,0);
         volumeZ -= parseInt(`${volumeZ}`);
         umengk.set(`${bottom4}`, bottom4 | more7.length);
         more7 = `${more7.length}`;
         break;
      }
         volumeZ /= Math.max(1, 1);
          let icontransferclubJ: Map<any, any> = new Map([[String.fromCharCode(115,105,109,112,108,101,119,114,105,116,101,95,114,95,54,56,0),true ], [String.fromCharCode(117,114,108,99,111,110,116,101,120,116,95,103,95,55,50,0),false ]]);
         volumeZ += icontransferclubJ.size >> (Math.min(Math.abs(3), 5));
      networkb *= parseInt(`${networkb}`) | 2;
      templateprocessorQ.set(`${clearz}`, 1);
      if (productSelected.productType === "iap") {
        await requestPurchase({ skus: [productSelected.productSKU] });
      } else if (productSelected.productType === "subs") {

   let plus5 = templateprocessorQ.size >= 8663479;
   do {
       let toponU = 2;
       let homev = 3;
       let cornershootP = 4.0;
         toponU %= Math.max(5, homev);
      while ((homev << (Math.min(Math.abs(5), 5))) >= 3 && (5 << (Math.min(2, Math.abs(toponU)))) >= 5) {
         homev &= 1 % (Math.max(parseInt(`${cornershootP}`), 8));
         break;
      }
      while (homev == 5) {
         cornershootP *= homev ^ 1;
         break;
      }
          let leftP = String.fromCharCode(121,95,57,54,95,115,112,101,97,107,0);
          let backwhitej = 3.0;
          let release_n87 = 4;
         toponU -= 2;
         leftP += `${release_n87}`;
         backwhitej /= Math.max(release_n87 * 2, 5);
      if (2.35 < (cornershootP * 3.17)) {
         cornershootP /= Math.max(1, 2);
      }
          let iconpointscorex = 1;
         toponU &= toponU - 3;
         iconpointscorex <<= Math.min(3, Math.abs(iconpointscorex - iconpointscorex));
         toponU *= 1 % (Math.max(toponU, 7));
         cornershootP -= toponU >> (Math.min(Math.abs(homev), 1));
      while (2 <= toponU) {
          let activej = 5;
          let philippinesh = String.fromCharCode(107,95,53,51,95,109,112,101,103,118,108,99,0);
         cornershootP /= Math.max(activej, 1);
         philippinesh += `${philippinesh.length}`;
         break;
      }
      templateprocessorQ = new Map([[`${whitebellE.size}`, 2]]);
      if (plus5) {
         break;
      }
   } while (plus5 && (!settingv.startsWith(`${templateprocessorQ.size}`)));
      templateprocessorQ = new Map([[`${arrowdowne.size}`, 1 + arrowdowne.size]]);
        const subs = subscriptions.find(
          (sub) => sub.productId === productSelected.productSKU
        );

      networkb /= Math.max(5, templateprocessorQ.size - actionst.size);
      completeD *= 2;

        if (subs) {

   let componentregistryB = playershirt9.length >= 5813726;
   do {
       let libfbjnip = 4.0;
       let floatingh = String.fromCharCode(105,110,118,97,108,105,100,97,116,101,95,53,95,56,52,0);
       let unticka: Map<any, any> = new Map([[String.fromCharCode(98,97,99,107,115,105,100,101,0),254], [String.fromCharCode(114,101,112,114,101,115,101,110,116,115,95,112,95,57,50,0),911], [String.fromCharCode(115,117,112,101,114,120,115,97,105,95,119,95,50,54,0),502]]);
       let arrowselectdown5: Array<any> = [571, 212, 457];
      let reactnativejsm = floatingh.length <= 8908853;
      do {
         floatingh += `${parseInt(`${libfbjnip}`) + 3}`;
         if (reactnativejsm) {
            break;
         }
      } while (reactnativejsm && (3 < (unticka.size + floatingh.length)));
         libfbjnip -= 3;
      if (arrowselectdown5.length <= unticka.size) {
         unticka = new Map([[`${unticka.size}`, unticka.size]]);
      }
      if (1.31 < (arrowselectdown5.length + libfbjnip) || (arrowselectdown5.length ^ 1) < 5) {
         libfbjnip *= 3;
      }
         libfbjnip -= floatingh.length * parseInt(`${libfbjnip}`);
      for (let i = 0; i < 3; i++) {
         floatingh = `${floatingh.length & 3}`;
      }
          let register_7j_ = 3.0;
          let iconarrowright1: Array<any> = [String.fromCharCode(120,95,53,56,95,119,105,110,115,111,99,107,0), String.fromCharCode(121,95,53,52,95,116,104,114,101,97,100,115,97,102,101,0), String.fromCharCode(117,95,54,51,95,101,110,99,111,100,97,98,108,101,0)];
         unticka = new Map([[floatingh, 2]]);
         register_7j_ += iconarrowright1.length;
         iconarrowright1.push(parseInt(`${register_7j_}`));
         unticka.set(`${libfbjnip}`, parseInt(`${libfbjnip}`));
         unticka.set(`${arrowselectdown5.length}`, unticka.size ^ arrowselectdown5.length);
          let gifgoalbge: Map<any, any> = new Map([[String.fromCharCode(106,109,101,109,115,121,115,0),470], [String.fromCharCode(99,111,109,112,97,114,101,114,115,0),348]]);
          let codegenk = String.fromCharCode(121,95,52,57,95,99,111,111,107,100,97,116,97,0);
          let zhubob = false;
         floatingh = `${(3 / (Math.max(3, (zhubob ? 2 : 4))))}`;
         gifgoalbge.set(`${codegenk}`, gifgoalbge.size << (Math.min(Math.abs(3), 3)));
         codegenk += `${gifgoalbge.size ^ 2}`;
         zhubob = 58 == gifgoalbge.size;
      if ((4 >> (Math.min(3, floatingh.length))) < 3) {
          let baiduadsd = String.fromCharCode(99,95,51,49,95,115,97,105,122,0);
          let collectionI = 5.0;
          let iconwatchnowE = String.fromCharCode(103,95,49,48,95,105,110,116,101,114,108,101,97,118,105,110,103,0);
          let core0 = String.fromCharCode(98,97,99,107,103,114,111,117,110,100,95,48,95,49,48,0);
         unticka = new Map([[`${libfbjnip}`, floatingh.length & 1]]);
         baiduadsd = "3";
         collectionI *= 1 ^ iconwatchnowE.length;
         iconwatchnowE = `${(String.fromCharCode(89,0) == baiduadsd ? iconwatchnowE.length : baiduadsd.length)}`;
         core0 += `${baiduadsd.length ^ 1}`;
      }
          let thumbnailG = 5;
          let icondefaultthumbnailg = String.fromCharCode(109,95,54,55,95,114,101,115,99,97,108,101,0);
          let ewardedc: Map<any, any> = new Map([[String.fromCharCode(122,95,54,49,95,116,104,117,109,98,110,97,105,108,115,0),383], [String.fromCharCode(114,95,54,56,95,111,110,116,97,99,116,115,0),971], [String.fromCharCode(97,114,103,98,105,95,56,95,52,51,0),934]]);
         arrowselectdown5.push(parseInt(`${libfbjnip}`));
         thumbnailG ^= 2 % (Math.max(8, icondefaultthumbnailg.length));
         icondefaultthumbnailg += `${thumbnailG}`;
         ewardedc = new Map([[icondefaultthumbnailg, icondefaultthumbnailg.length]]);
      playershirt9 = `${3 & updates8.length}`;
      if (componentregistryB) {
         break;
      }
   } while (componentregistryB && (iconnewchatd.startsWith(`${playershirt9.length}`)));
   for (let p = 0; p < 2; p++) {
       let notificationfillemptyJ = 4;
       let iconrefreshJ = String.fromCharCode(111,95,53,53,95,98,117,98,98,108,101,0);
       let embedw = String.fromCharCode(97,114,99,104,105,118,101,114,95,121,95,50,54,0);
       let statsN = String.fromCharCode(101,95,51,55,0);
         notificationfillemptyJ *= statsN.length;
      let encryptf = statsN == String.fromCharCode(48,108,98,109,0);
      do {
         statsN = `${(iconrefreshJ == String.fromCharCode(67,0) ? notificationfillemptyJ : iconrefreshJ.length)}`;
         if (encryptf) {
            break;
         }
      } while (encryptf && (statsN.length < 2));
      if (embedw != String.fromCharCode(84,0)) {
         statsN += `${(String.fromCharCode(88,0) == embedw ? notificationfillemptyJ : embedw.length)}`;
      }
       let graphR: Array<any> = [String.fromCharCode(118,95,54,56,95,118,101,114,108,97,121,0), String.fromCharCode(113,117,97,110,116,105,122,101,95,102,95,52,49,0)];
      if (2 >= embedw.length) {
         embedw = `${graphR.length}`;
      }
      let notification3 = statsN.length <= 6689036;
      do {
         statsN += `${notificationfillemptyJ / (Math.max(embedw.length, 1))}`;
         if (notification3) {
            break;
         }
      } while (notification3 && (!iconrefreshJ.startsWith(`${statsN.length}`)));
      if (!embedw.includes(`${iconrefreshJ.length}`)) {
         embedw = `${1 - statsN.length}`;
      }
      for (let l = 0; l < 2; l++) {
         graphR.push(embedw.length >> (Math.min(1, graphR.length)));
      }
      while (2 < iconrefreshJ.length) {
         statsN += `${(String.fromCharCode(54,0) == statsN ? iconrefreshJ.length : statsN.length)}`;
         break;
      }
         notificationfillemptyJ &= iconrefreshJ.length | 2;
      while (iconrefreshJ.endsWith(`${notificationfillemptyJ}`)) {
         notificationfillemptyJ &= graphR.length % (Math.max(8, iconrefreshJ.length));
         break;
      }
         statsN += `${embedw.length}`;
      soundf = `${(soundf == String.fromCharCode(90,0) ? soundf.length : embedw.length)}`;
   }
          const offerToken = subs.subscriptionOfferDetails[0].offerToken;

      templateprocessorQ.set(`${buffer1.length}`, whitebellE.size >> (Math.min(Math.abs(3), 4)));
      soundf += `${settingv.length * 1}`;
          await requestSubscription({
            sku: productSelected.productSKU,
            ...(offerToken && {
              subscriptionOffers: [
                { sku: productSelected.productSKU, offerToken },
              ],
            }),
          });
        } else {

   if (iconnewchatd != settingv) {
      settingv += `${updates8.length}`;
   }
       let klevinl = String.fromCharCode(100,114,97,119,103,114,105,100,95,101,95,52,51,0);
       let suggestionC = false;
          let holderu: Map<any, any> = new Map([[String.fromCharCode(100,95,55,95,114,101,110,101,119,97,98,108,101,0),779], [String.fromCharCode(115,116,111,112,112,105,110,103,95,56,95,57,49,0),167], [String.fromCharCode(118,95,56,53,95,113,100,114,97,119,0),417]]);
          let pageL = String.fromCharCode(114,101,109,111,118,101,95,51,95,57,51,0);
          let librrcJ: Map<any, any> = new Map([[String.fromCharCode(116,111,112,105,99,115,95,100,95,57,51,0),989], [String.fromCharCode(101,95,57,55,95,100,105,114,0),714]]);
         suggestionC = !suggestionC;
         holderu.set(pageL, holderu.size);
         pageL += `${pageL.length * holderu.size}`;
         librrcJ = new Map([[`${holderu.size}`, holderu.size / (Math.max(4, pageL.length))]]);
         suggestionC = !suggestionC && klevinl.length == 62;
      for (let m = 0; m < 2; m++) {
         suggestionC = klevinl.length > 40 && !suggestionC;
      }
         klevinl = `${((suggestionC ? 4 : 1) ^ 1)}`;
       let statisticsactivej = 4.0;
       let homeplayerR = 0.0;
       let iconnotificationnewk = false;
       let agreementA = false;
      soundf += `${3 | whitebellE.size}`;
          throw new Error("subscription plan not found");
        }
      }
    } catch (err) {

      actionst = new Map([[`${templateprocessorQ.size}`, settingv.length / (Math.max(6, templateprocessorQ.size))]]);
      updates8 += `${(String.fromCharCode(50,0) == updates8 ? updates8.length : parseInt(`${completeD}`))}`;
      setIsVisible(false);

      clearz = whitebellE.size == 35;
   let spinnerf = 6701792 <= actionst.size;
   do {
       let stations6 = String.fromCharCode(104,97,110,100,108,101,115,95,103,95,54,57,0);
       let defaultroombgS = String.fromCharCode(98,115,116,114,97,99,116,95,57,95,55,57,0);
       let clockF: Map<any, any> = new Map([[String.fromCharCode(105,95,50,51,95,100,117,114,103,101,114,0),65], [String.fromCharCode(99,112,120,95,105,95,49,50,0),634]]);
       let mergerB: Array<any> = [346, 449, 545];
      let iconnewchatX = String.fromCharCode(104,115,98,110,48,101,111,0) == defaultroombgS;
      do {
         defaultroombgS += `${defaultroombgS.length}`;
         if (iconnewchatX) {
            break;
         }
      } while ((!defaultroombgS.includes(`${mergerB.length}`)) && iconnewchatX);
      while (4 <= stations6.length) {
          let template_1p = String.fromCharCode(97,95,50,54,95,100,105,115,112,111,115,97,98,108,101,0);
          let dplusU = true;
         defaultroombgS += `${template_1p.length + 1}`;
         template_1p += `${(3 << (Math.min(Math.abs((dplusU ? 1 : 5)), 2)))}`;
         break;
      }
       let libreactperfloggerjniI = 5;
       let resultn = 2;
         resultn += defaultroombgS.length;
      while ((libreactperfloggerjniI + stations6.length) > 1 && (1 + stations6.length) > 1) {
         stations6 = `${mergerB.length << (Math.min(Math.abs(1), 5))}`;
         break;
      }
       let gifgoalJ = String.fromCharCode(113,95,52,50,95,114,101,109,101,109,98,101,114,101,100,0);
       let goallogo2 = String.fromCharCode(97,110,109,114,95,122,95,53,56,0);
          let clearZ = String.fromCharCode(114,97,110,103,101,99,111,100,101,114,95,115,95,56,56,0);
         gifgoalJ = "3";
         clearZ += `${2 * clearZ.length}`;
       let rightZ = String.fromCharCode(105,95,52,54,95,111,110,116,114,111,108,115,0);
      for (let s = 0; s < 2; s++) {
         goallogo2 += `${goallogo2.length}`;
      }
         defaultroombgS = `${(rightZ == String.fromCharCode(78,0) ? libreactperfloggerjniI : rightZ.length)}`;
          let downloaderF = false;
         defaultroombgS += `${(String.fromCharCode(71,0) == gifgoalJ ? stations6.length : gifgoalJ.length)}`;
         downloaderF = !downloaderF;
         stations6 = `${defaultroombgS.length >> (Math.min(Math.abs(1), 1))}`;
      actionst = new Map([[`${clearz}`, ((clearz ? 2 : 1) ^ 1)]]);
      if (spinnerf) {
         break;
      }
   } while ((settingv.startsWith(`${actionst.size}`)) && spinnerf);
      if (err instanceof PurchaseError) {

       let vignettet = String.fromCharCode(97,95,56,95,101,110,99,111,100,101,109,118,0);
       let aboutw = false;
       let dicelogoy = 1.0;
          let graphics0 = 2.0;
         aboutw = !vignettet.startsWith(`${aboutw}`);
         graphics0 *= parseFloat(`${parseInt(`${graphics0}`) & 3}`);
      for (let c = 0; c < 1; c++) {
         aboutw = (vignettet.length - dicelogoy) <= 1.84;
      }
       let selectA = String.fromCharCode(118,95,55,52,95,98,114,107,116,105,109,101,103,109,0);
      for (let c = 0; c < 2; c++) {
         vignettet = `${((aboutw ? 4 : 4) | parseInt(`${dicelogoy}`))}`;
      }
          let singaporej = String.fromCharCode(107,101,114,110,101,100,95,121,95,56,51,0);
          let disconnectedlogoc = 5.0;
         aboutw = singaporej == selectA;
         singaporej += `${3 % (Math.max(3, parseInt(`${disconnectedlogoc}`)))}`;
         disconnectedlogoc += parseFloat(`${parseInt(`${disconnectedlogoc}`)}`);
         aboutw = !aboutw;
       let untickL = 0;
      for (let f = 0; f < 3; f++) {
         selectA = `${((aboutw ? 4 : 4) ^ parseInt(`${dicelogoy}`))}`;
      }
      if (!selectA.startsWith(`${aboutw}`)) {
          let valuesg = String.fromCharCode(97,112,112,101,97,114,105,110,103,95,103,95,49,48,48,0);
          let awayteamfieldW: Array<any> = [String.fromCharCode(97,108,112,104,97,110,117,109,101,114,105,99,95,100,95,49,48,0), String.fromCharCode(116,95,52,51,0)];
          let showlessg = String.fromCharCode(119,95,53,54,95,109,112,97,100,115,112,0);
          let profiles = 1.0;
         aboutw = vignettet.length >= awayteamfieldW.length;
         valuesg = `${showlessg.length}`;
         awayteamfieldW.push(1 * parseInt(`${profiles}`));
         showlessg += `${(valuesg == String.fromCharCode(110,0) ? showlessg.length : valuesg.length)}`;
         profiles -= parseFloat(`${valuesg.length}`);
      }
      buffer1 = [arrowdowne.size];
   let loginw = dialogF.length <= 7468191;
   do {
       let iconarrowrightblackc = 5;
       let profileinactiveB: Array<any> = [744, 698, 883];
       let canvass = 1;
      if (2 > profileinactiveB.length) {
          let mime8: Map<any, any> = new Map([[String.fromCharCode(114,95,56,57,95,119,101,108,108,0),10], [String.fromCharCode(97,100,106,117,115,116,101,114,95,100,95,53,55,0),389], [String.fromCharCode(111,95,49,53,95,99,111,109,98,105,110,101,114,0),371]]);
          let starm = 4.0;
          let reactnativeultimatelistviewV = 0.0;
          let notificationfillemptyB: Map<any, any> = new Map([[String.fromCharCode(98,117,98,98,108,101,115,0),false ], [String.fromCharCode(101,116,104,114,101,97,100,95,112,95,53,48,0),true ], [String.fromCharCode(105,95,49,53,95,115,105,110,99,0),true ]]);
         profileinactiveB.push(notificationfillemptyB.size);
         mime8 = new Map([[`${mime8.size}`, mime8.size & parseInt(`${starm}`)]]);
         starm += 2;
         reactnativeultimatelistviewV -= 2;
         notificationfillemptyB.set(`${reactnativeultimatelistviewV}`, parseInt(`${reactnativeultimatelistviewV}`));
      }
      if (iconarrowrightblackc >= 2) {
          let blackA = String.fromCharCode(102,109,116,99,111,110,118,101,114,116,95,49,95,51,50,0);
          let downloaded8: Map<any, any> = new Map([[String.fromCharCode(109,95,52,48,95,116,101,114,109,105,110,97,116,101,0),916], [String.fromCharCode(111,118,101,114,108,97,121,115,95,53,95,52,50,0),225], [String.fromCharCode(116,95,52,56,95,115,116,117,98,98,101,100,0),300]]);
          let backiconW = 5.0;
          let libcxxcomponentsC = String.fromCharCode(121,95,56,50,95,104,101,99,111,0);
         iconarrowrightblackc /= Math.max(2, iconarrowrightblackc);
         blackA += "2";
         downloaded8.set(`${libcxxcomponentsC}`, downloaded8.size % 3);
         backiconW -= parseFloat(`${downloaded8.size}`);
         libcxxcomponentsC += `${libcxxcomponentsC.length}`;
      }
      let native5 = 6282738 <= profileinactiveB.length;
      do {
         profileinactiveB.push(iconarrowrightblackc);
         if (native5) {
            break;
         }
      } while ((4 <= (profileinactiveB.length + canvass) && 2 <= (canvass + 4)) && native5);
      for (let j = 0; j < 2; j++) {
         canvass *= 3 + canvass;
      }
         canvass |= canvass;
         iconarrowrightblackc -= canvass & 2;
          let positionfielde = String.fromCharCode(97,100,97,112,116,101,100,95,99,95,51,55,0);
         canvass |= iconarrowrightblackc;
         positionfielde = `${positionfielde.length ^ 3}`;
      if (5 <= (canvass + iconarrowrightblackc)) {
         canvass >>= Math.min(3, Math.abs(2));
      }
      while (1 == (profileinactiveB.length | 3) || 1 == (3 | canvass)) {
          let libsentryI = 4.0;
          let basketballmatchdetailbgl = String.fromCharCode(117,95,56,55,95,103,101,110,101,114,97,116,101,0);
          let relatedb: Array<any> = [815, 951, 817];
         profileinactiveB = [relatedb.length];
         libsentryI += basketballmatchdetailbgl.length;
         basketballmatchdetailbgl += `${(basketballmatchdetailbgl == String.fromCharCode(112,0) ? parseInt(`${libsentryI}`) : basketballmatchdetailbgl.length)}`;
         relatedb = [2];
         break;
      }
      dialogF = [dialogF.length];
      if (loginw) {
         break;
      }
   } while ((1 <= (2 + dialogF.length) || 5.62 <= (completeD / (Math.max(8, dialogF.length)))) && loginw);
        console.error("purchasing error: " + err);
      } else {

       let imageactionlivea = String.fromCharCode(99,111,110,100,105,116,105,111,110,115,95,107,95,52,55,0);
       let kuaishouT = String.fromCharCode(116,114,97,110,115,102,101,114,101,100,0);
          let whitetickT = String.fromCharCode(108,112,99,101,110,118,95,102,95,49,50,0);
         kuaishouT += `${imageactionlivea.length}`;
         whitetickT += `${1 / (Math.max(3, whitetickT.length))}`;
       let baseh = String.fromCharCode(108,111,111,112,115,95,51,95,54,48,0);
       let imagemanagera = String.fromCharCode(122,95,55,57,95,99,116,114,120,0);
      let nalyticst = 6519717 >= baseh.length;
      do {
         baseh += `${kuaishouT.length | 2}`;
         if (nalyticst) {
            break;
         }
      } while (nalyticst && (imagemanagera.length < 5 && 5 < baseh.length));
      while (5 >= imagemanagera.length || baseh != String.fromCharCode(83,0)) {
         baseh = `${kuaishouT.length - imageactionlivea.length}`;
         break;
      }
         baseh = `${kuaishouT.length}`;
      if (kuaishouT.endsWith(baseh)) {
         baseh += `${imagemanagera.length}`;
      }
      dialogF = [(String.fromCharCode(113,0) == playershirt9 ? playershirt9.length : downarrowx.size)];
      updates8 = `${buffer1.length}`;
        console.error("handle purchase error: ", err);
      }

      if (err && err.code == "E_USER_CANCELLED") {

   while ((whitebellE.size | 4) < 4 || (whitebellE.size | 4) < 5) {
      soundf = "2";
      break;
   }
       let plus6: Map<any, any> = new Map([[String.fromCharCode(108,95,51,52,95,101,114,112,105,99,0),447], [String.fromCharCode(115,117,98,116,114,97,99,116,105,110,103,95,49,95,49,56,0),359], [String.fromCharCode(115,95,57,51,95,116,104,101,114,101,117,109,0),169]]);
       let stepr: Map<any, any> = new Map([[String.fromCharCode(101,95,51,48,95,116,105,108,108,0),String.fromCharCode(99,108,117,116,95,115,95,54,56,0)], [String.fromCharCode(117,110,115,111,114,116,101,100,95,120,95,49,52,0),String.fromCharCode(100,95,50,57,95,117,110,114,101,103,105,115,116,101,114,0)], [String.fromCharCode(97,95,51,50,95,100,101,110,111,114,109,97,108,105,122,101,0),String.fromCharCode(112,95,53,51,95,116,114,97,110,115,109,105,115,115,105,111,110,0)]]);
       let combinev: Map<any, any> = new Map([[String.fromCharCode(104,95,52,95,118,115,110,112,114,105,110,116,102,0),774], [String.fromCharCode(109,117,115,105,99,95,117,95,55,57,0),837], [String.fromCharCode(107,95,55,55,95,115,101,99,117,114,101,0),135]]);
      while (stepr.size > 3) {
         plus6 = new Map([[`${stepr.size}`, plus6.size]]);
         break;
      }
      if (stepr.get(`${combinev.size}`) != null) {
         stepr.set(`${stepr.size}`, stepr.size * 3);
      }
      datam = [1];
        console.log("user cancel purchase");

   for (let h = 0; h < 3; h++) {
      buffer1 = [settingv.length];
   }
      actionst = new Map([[`${datam.length}`, 3]]);
        setIsBtnEnable(true);
      } else {

      soundf = `${buffer1.length % 2}`;
   while (5 == (actionst.size + 5) || (5 + arrowdowne.size) == 2) {
      actionst.set(`${clearz}`, 2 / (Math.max(2, parseInt(`${networkb}`))));
      break;
   }
        setDialogText(failedDialogText);

       let dycreatorp = String.fromCharCode(115,101,110,115,105,116,105,118,101,0);
       let homeiconC = String.fromCharCode(116,114,97,110,115,108,97,116,101,95,116,95,57,55,0);
       let profilepicT = 4.0;
      if (1 < dycreatorp.length) {
          let hover5 = 1;
          let promotion4 = 4;
         homeiconC = "1 * promotion4";
         hover5 |= hover5 + hover5;
         promotion4 %= Math.max(2, hover5);
      }
       let turny = String.fromCharCode(114,117,98,121,95,57,95,57,51,0);
       let fastforwardU = String.fromCharCode(99,117,114,114,101,110,100,95,54,95,50,0);
          let videovarG = String.fromCharCode(115,95,56,52,95,114,101,97,115,115,101,109,98,108,121,0);
          let arrowrightwithtailY = 0;
         profilepicT *= parseFloat(`${2 + dycreatorp.length}`);
         videovarG += `${arrowrightwithtailY * 2}`;
         arrowrightwithtailY += arrowrightwithtailY / (Math.max(2, 2));
          let heartz: Array<any> = [117, 324];
          let defaultroombgb = String.fromCharCode(100,105,102,102,105,110,103,95,117,95,57,51,0);
          let componentC: Array<any> = [763, 676];
         fastforwardU += `${heartz.length}`;
         heartz = [(String.fromCharCode(56,0) == defaultroombgb ? componentC.length : defaultroombgb.length)];
         componentC.push(componentC.length);
      let iconbelly = turny == String.fromCharCode(99,112,110,0);
      do {
         turny += `${homeiconC.length & 2}`;
         if (iconbelly) {
            break;
         }
      } while (iconbelly && ((3.80 - profilepicT) < 4.67 || 3 < (1 >> (Math.min(4, turny.length)))));
         homeiconC += `${homeiconC.length / 1}`;
      if (4.36 >= profilepicT) {
         profilepicT += parseFloat(`${parseInt(`${profilepicT}`) + 1}`);
      }
         turny = `${(dycreatorp == String.fromCharCode(85,0) ? parseInt(`${profilepicT}`) : dycreatorp.length)}`;
         turny += `${(String.fromCharCode(69,0) == homeiconC ? parseInt(`${profilepicT}`) : homeiconC.length)}`;
      playershirt9 += `${soundf.length}`;
   let greyarrowupy = 8916460 >= iconnewchatd.length;
   do {
      iconnewchatd += `${playershirt9.length}`;
      if (greyarrowupy) {
         break;
      }
   } while ((iconnewchatd.startsWith(`${downarrowx.size}`)) && greyarrowupy);
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
      const result = await yysBaselineOrangedownarrow.postAndroidIAP(iapTrans);

      console.log("validate iap result");
      console.log(result);
      return result.data.data;
    } catch (error) {
       let dicelogoz = String.fromCharCode(112,114,111,114,101,115,100,101,99,95,118,95,56,51,0);
    let annert = 4;
    let imageactionliveO: Map<any, any> = new Map([[String.fromCharCode(117,112,100,97,116,105,110,103,95,122,95,49,52,0),79], [String.fromCharCode(112,114,101,102,105,120,101,115,95,121,95,52,54,0),986], [String.fromCharCode(99,114,101,97,116,101,95,120,95,57,53,0),92]]);
    let release_v1_: Array<any> = [String.fromCharCode(107,95,53,54,95,116,101,108,101,103,114,97,109,0), String.fromCharCode(119,95,50,50,95,111,103,103,0), String.fromCharCode(101,120,112,111,95,121,95,52,48,0)];
    let yellowvideoliveB = String.fromCharCode(112,95,51,54,95,99,107,112,116,0);
    let predictionbuttonn: Array<any> = [526, 846];
    let championD = String.fromCharCode(114,95,50,55,95,122,109,98,118,0);
    let placeholderH = String.fromCharCode(115,95,57,56,95,108,105,115,116,101,100,0);
    let round7 = true;
    let confirmationB: Map<any, any> = new Map([[String.fromCharCode(115,101,99,95,55,95,51,53,0),426], [String.fromCharCode(100,95,49,52,95,109,105,100,100,108,101,0),719], [String.fromCharCode(122,101,114,111,101,115,95,102,95,55,0),436]]);
    let a_hashv: Map<any, any> = new Map([[String.fromCharCode(119,95,48,95,114,101,97,108,108,111,99,0),249], [String.fromCharCode(111,112,116,105,109,105,122,101,100,95,111,95,56,56,0),83], [String.fromCharCode(118,115,116,97,116,115,95,121,95,54,54,0),408]]);
    let circley = String.fromCharCode(117,110,116,105,108,95,119,95,52,52,0);
       let indicatorV = 2.0;
         indicatorV -= parseFloat(`${parseInt(`${indicatorV}`)}`);
      if (3.15 <= (indicatorV * 3.44)) {
         indicatorV /= Math.max(parseFloat(`${2 | parseInt(`${indicatorV}`)}`), 2);
      }
          let sigmobL = String.fromCharCode(100,101,115,116,114,117,99,116,111,114,95,97,95,50,50,0);
          let xvodw: Array<any> = [String.fromCharCode(103,95,53,55,95,115,105,109,112,108,101,115,105,103,110,97,108,0), String.fromCharCode(109,95,55,95,100,105,118,105,115,111,114,0), String.fromCharCode(98,95,55,95,114,101,99,111,100,101,0)];
         indicatorV /= Math.max(2, parseFloat(`${xvodw.length ^ parseInt(`${indicatorV}`)}`));
         sigmobL += `${sigmobL.length}`;
         xvodw = [sigmobL.length ^ sigmobL.length];
      championD = `${parseInt(`${indicatorV}`) % (Math.max(10, placeholderH.length))}`;
   if (2 >= (predictionbuttonn.length << (Math.min(Math.abs(2), 1))) || predictionbuttonn.length >= 2) {
       let crownW = String.fromCharCode(98,108,111,99,107,100,95,120,95,52,52,0);
       let untickV: Map<any, any> = new Map([[String.fromCharCode(116,95,57,50,95,114,101,118,111,99,97,116,105,111,110,0),392], [String.fromCharCode(122,95,57,52,95,112,114,101,115,115,101,100,0),264], [String.fromCharCode(103,95,57,55,95,99,100,108,109,115,0),202]]);
       let iconadslinko: Map<any, any> = new Map([[String.fromCharCode(120,95,50,52,95,100,101,102,101,114,114,101,100,0),91], [String.fromCharCode(100,95,50,49,95,114,97,115,116,101,114,0),463], [String.fromCharCode(97,118,99,99,95,116,95,57,0),36]]);
       let gmailt = String.fromCharCode(98,95,50,54,95,120,108,97,98,101,108,104,101,105,103,104,116,0);
       let bgvipxvodB: Array<any> = [805, 6, 509];
       let auto_9w = 4;
       let unimplementedviewo = 2;
      let feedbacku = 5717959 <= bgvipxvodB.length;
      do {
         bgvipxvodB.push(iconadslinko.size);
         if (feedbacku) {
            break;
         }
      } while (feedbacku && ((gmailt.length % 3) > 2));
       let subin2 = 3.0;
         unimplementedviewo *= untickV.size;
         untickV.set(`${unimplementedviewo}`, unimplementedviewo ^ 3);
         unimplementedviewo <<= Math.min(1, Math.abs((String.fromCharCode(55,0) == gmailt ? gmailt.length : bgvipxvodB.length)));
      for (let r = 0; r < 1; r++) {
          let mbjscommonu = 1.0;
          let questiconR = 1.0;
          let orangeU = String.fromCharCode(113,100,109,100,97,116,97,95,49,95,53,51,0);
          let largep: Map<any, any> = new Map([[String.fromCharCode(110,95,49,55,95,99,111,110,118,115,97,109,112,0),true ], [String.fromCharCode(106,112,101,103,116,114,97,110,95,111,95,55,50,0),false ], [String.fromCharCode(104,101,97,100,115,95,53,95,53,0),true ]]);
         unimplementedviewo <<= Math.min(1, Math.abs(iconadslinko.size % (Math.max(10, untickV.size))));
         mbjscommonu /= Math.max(4, (parseFloat(`${orangeU == String.fromCharCode(117,0) ? orangeU.length : largep.size}`)));
         questiconR += orangeU.length - 2;
         largep.set(`${questiconR}`, 2 ^ parseInt(`${questiconR}`));
      }
      let catagory9 = untickV.size <= 8828471;
      do {
          let whistleorangeQ = 3;
          let downloadingn = String.fromCharCode(101,120,105,115,116,115,95,118,95,57,56,0);
          let package_zx = false;
          let thailandF = 2.0;
         untickV = new Map([[gmailt, parseInt(`${subin2}`) % 1]]);
         whistleorangeQ <<= Math.min(1, Math.abs(parseInt(`${thailandF}`) + 2));
         downloadingn = `${(downloadingn.length - (package_zx ? 3 : 1))}`;
         package_zx = !package_zx;
         thailandF += (parseFloat(`${(package_zx ? 3 : 4) & 3}`));
         if (catagory9) {
            break;
         }
      } while ((gmailt.length <= untickV.size) && catagory9);
      let regenga = 5952876 >= unimplementedviewo;
      do {
          let xvodg = String.fromCharCode(119,95,49,56,95,97,117,100,105,111,100,97,116,97,0);
          let castingK = String.fromCharCode(117,95,54,95,98,117,105,108,116,0);
          let nendA: Map<any, any> = new Map([[String.fromCharCode(100,95,51,55,95,99,111,117,110,116,114,121,0),String.fromCharCode(98,95,53,52,95,101,120,112,0)], [String.fromCharCode(98,95,54,52,95,102,114,101,113,115,0),String.fromCharCode(110,101,97,114,101,110,100,95,105,95,56,55,0)], [String.fromCharCode(107,95,51,95,104,111,110,101,121,0),String.fromCharCode(108,97,110,99,122,111,115,95,111,95,50,51,0)]]);
          let helper4 = String.fromCharCode(114,95,49,57,95,116,104,114,101,101,100,111,115,116,114,0);
          let iconuserS = false;
         unimplementedviewo >>= Math.min(Math.abs(gmailt.length & 1), 5);
         xvodg = `${xvodg.length << (Math.min(4, castingK.length))}`;
         castingK = `${(helper4 == String.fromCharCode(55,0) ? helper4.length : (iconuserS ? 5 : 2))}`;
         nendA = new Map([[`${nendA.size}`, (castingK == String.fromCharCode(104,0) ? nendA.size : castingK.length)]]);
         iconuserS = !iconuserS;
         if (regenga) {
            break;
         }
      } while (((5 & untickV.size) >= 5 || 5 >= (unimplementedviewo & untickV.size)) && regenga);
      while (!Array.from(iconadslinko.values()).includes(unimplementedviewo)) {
         unimplementedviewo *= (String.fromCharCode(108,0) == gmailt ? unimplementedviewo : gmailt.length);
         break;
      }
         crownW += `${parseInt(`${subin2}`) ^ unimplementedviewo}`;
      predictionbuttonn = [predictionbuttonn.length];
   }
      a_hashv.set(`${placeholderH}`, placeholderH.length);
      predictionbuttonn.push(dicelogoz.length);
   while (placeholderH.includes(`${release_v1_.length}`)) {
       let circleP = String.fromCharCode(109,110,101,109,111,110,105,99,95,55,95,49,48,48,0);
       let notificationgray1 = String.fromCharCode(97,95,50,54,95,99,111,108,111,110,115,0);
       let defaultpredictionprofileu = 1.0;
       let playercommonk = 1.0;
         playercommonk /= Math.max(5, 3 * parseInt(`${playercommonk}`));
      for (let w = 0; w < 2; w++) {
          let predictionactiveb = 2;
         defaultpredictionprofileu -= parseInt(`${defaultpredictionprofileu}`);
         predictionactiveb *= predictionactiveb;
      }
      while (circleP.includes(`${playercommonk}`)) {
          let yellowscoreballZ = String.fromCharCode(105,115,111,112,101,110,113,117,111,116,101,95,121,95,55,57,0);
          let dialogI: Map<any, any> = new Map([[String.fromCharCode(104,97,110,100,108,101,115,95,52,95,51,52,0),659], [String.fromCharCode(122,95,52,56,95,111,118,101,114,105,100,100,101,110,0),405]]);
          let invite6 = 2.0;
         circleP += "3";
         yellowscoreballZ += "1";
         dialogI.set(`${invite6}`, parseInt(`${invite6}`));
         break;
      }
      if (notificationgray1.includes(circleP)) {
          let statisticsinactiveG = true;
         notificationgray1 = `${notificationgray1.length}`;
         statisticsinactiveG = (statisticsinactiveG ? statisticsinactiveG : !statisticsinactiveG);
      }
       let tempnodataq = 0.0;
       let overo = 0.0;
          let predictionwinC = 1.0;
         defaultpredictionprofileu -= parseInt(`${tempnodataq}`) << (Math.min(Math.abs(parseInt(`${overo}`)), 5));
         predictionwinC *= parseFloat(`${3 ^ parseInt(`${predictionwinC}`)}`);
          let becomeq = String.fromCharCode(112,105,99,116,95,120,95,51,50,0);
         overo *= parseFloat(`${notificationgray1.length & 2}`);
         becomeq = `${(becomeq == String.fromCharCode(72,0) ? becomeq.length : becomeq.length)}`;
          let airbnbstar1 = String.fromCharCode(104,95,54,51,95,109,97,116,104,101,109,97,116,105,99,115,0);
         playercommonk *= 1 ^ parseInt(`${defaultpredictionprofileu}`);
         airbnbstar1 = `${airbnbstar1.length - 1}`;
      let defaultplayerimgv = tempnodataq >= 6964568.0;
      do {
         tempnodataq *= parseFloat(`${2}`);
         if (defaultplayerimgv) {
            break;
         }
      } while ((overo < tempnodataq) && defaultplayerimgv);
      let whistleorangex = 7204532.0 <= overo;
      do {
          let rulesw = 1.0;
          let nodeJ = String.fromCharCode(104,111,114,105,122,111,110,116,97,108,108,121,95,56,95,52,54,0);
          let libavdeviceJ = String.fromCharCode(119,95,51,55,95,114,101,117,115,97,98,108,101,0);
          let pathk = String.fromCharCode(114,111,119,115,107,105,112,95,114,95,54,52,0);
         overo += parseFloat(`${parseInt(`${rulesw}`)}`);
         rulesw += parseFloat(`${pathk.length & 1}`);
         nodeJ += `${2 * nodeJ.length}`;
         libavdeviceJ += `${pathk.length}`;
         if (whistleorangex) {
            break;
         }
      } while ((2.71 > (playercommonk / (Math.max(8, overo)))) && whistleorangex);
      while (notificationgray1.startsWith(`${defaultpredictionprofileu}`)) {
         notificationgray1 = `${parseInt(`${defaultpredictionprofileu}`)}`;
         break;
      }
         notificationgray1 += `${(String.fromCharCode(50,0) == notificationgray1 ? notificationgray1.length : parseInt(`${tempnodataq}`))}`;
      release_v1_ = [circley.length & 2];
      break;
   }
      yellowvideoliveB += `${1 >> (Math.min(1, Math.abs(annert)))}`;
   while (1 <= (dicelogoz.length % 3) && (dicelogoz.length % (Math.max(3, 7))) <= 1) {
       let z_positionF = String.fromCharCode(110,115,117,105,95,119,95,55,48,0);
       let iconcalendarR = 2.0;
       let turndownz = String.fromCharCode(110,95,53,54,95,105,110,116,101,114,110,97,108,0);
       let downloaderd = 3;
       let libjsijniprofileru: Map<any, any> = new Map([[String.fromCharCode(109,95,53,51,95,115,107,101,121,108,105,115,116,0),906], [String.fromCharCode(101,95,53,56,95,101,103,119,105,116,0),112]]);
      for (let v = 0; v < 2; v++) {
         turndownz = "1";
      }
      while (3 == (turndownz.length << (Math.min(Math.abs(1), 3)))) {
         downloaderd >>= Math.min(Math.abs(3), 1);
         break;
      }
         downloaderd &= turndownz.length;
         turndownz += "3";
      while (3 == (3 ^ downloaderd) || (z_positionF.length ^ 3) == 5) {
          let eyeopen5: Map<any, any> = new Map([[String.fromCharCode(100,105,118,105,100,105,110,103,95,102,95,49,56,0),397], [String.fromCharCode(101,120,105,115,116,105,110,103,0),849]]);
         downloaderd += turndownz.length;
         eyeopen5 = new Map([[`${eyeopen5.size}`, eyeopen5.size & eyeopen5.size]]);
         break;
      }
         z_positionF += `${downloaderd}`;
       let bang9: Map<any, any> = new Map([[String.fromCharCode(110,101,103,111,116,105,97,116,105,111,110,95,111,95,51,54,0),false ], [String.fromCharCode(106,95,54,57,95,99,114,101,97,116,111,114,0),false ], [String.fromCharCode(117,115,116,111,109,95,110,95,51,49,0),true ]]);
         downloaderd &= parseInt(`${iconcalendarR}`) + 3;
      let floaterF = turndownz.length >= 6213340;
      do {
          let buttoni: Array<any> = [350, 926, 648];
          let hooks5 = String.fromCharCode(106,95,54,56,95,99,111,110,115,116,113,112,0);
          let turn_ = 3.0;
          let privacyO = String.fromCharCode(115,97,116,100,120,95,55,95,50,52,0);
         turndownz = `${downloaderd & libjsijniprofileru.size}`;
         buttoni = [1 | parseInt(`${turn_}`)];
         hooks5 += `${hooks5.length}`;
         turn_ /= Math.max(4, parseFloat(`${parseInt(`${turn_}`)}`));
         privacyO += `${privacyO.length >> (Math.min(Math.abs(2), 1))}`;
         if (floaterF) {
            break;
         }
      } while (floaterF && (5 < downloaderd));
      for (let g = 0; g < 3; g++) {
          let iconsettingc = 0.0;
         turndownz += `${parseInt(`${iconsettingc}`) >> (Math.min(Math.abs(2), 3))}`;
      }
          let loginsuccessr = 3;
          let signinup6: Map<any, any> = new Map([[String.fromCharCode(105,95,49,49,95,99,111,108,111,117,114,0),417], [String.fromCharCode(106,95,55,53,95,102,97,113,0),120], [String.fromCharCode(115,109,112,116,101,104,100,98,97,114,115,95,116,95,57,56,0),142]]);
          let weatherv = 1.0;
         bang9 = new Map([[`${libjsijniprofileru.size}`, loginsuccessr | libjsijniprofileru.size]]);
         loginsuccessr &= signinup6.size >> (Math.min(Math.abs(2), 4));
         signinup6.set(`${weatherv}`, 2);
         weatherv *= signinup6.size;
      if ((libjsijniprofileru.size | turndownz.length) <= 2) {
          let cancelV = String.fromCharCode(121,95,57,54,95,115,116,100,0);
         libjsijniprofileru.set(`${iconcalendarR}`, libjsijniprofileru.size - 2);
         cancelV = `${2 ^ cancelV.length}`;
      }
         bang9.set(turndownz, 2 - bang9.size);
      let interstitialV = String.fromCharCode(55,117,97,50,117,101,106,115,0) == turndownz;
      do {
         turndownz = `${libjsijniprofileru.size}`;
         if (interstitialV) {
            break;
         }
      } while (interstitialV && ((turndownz.length ^ 1) <= 2 || 4 <= (1 ^ downloaderd)));
      if (turndownz != z_positionF) {
          let pathB = String.fromCharCode(109,111,118,101,109,101,110,116,95,108,95,50,54,0);
          let traminiV = 3;
         z_positionF = `${z_positionF.length ^ 1}`;
         pathB = `${(pathB == String.fromCharCode(77,0) ? traminiV : pathB.length)}`;
         traminiV ^= 2 & pathB.length;
      }
      dicelogoz = `${a_hashv.size}`;
      break;
   }
      confirmationB = new Map([[`${confirmationB.size}`, confirmationB.size]]);
      imageactionliveO = new Map([[`${a_hashv.size}`, a_hashv.size + imageactionliveO.size]]);
   let iconchatsenda = String.fromCharCode(48,48,115,122,0) == placeholderH;
   do {
      placeholderH += `${a_hashv.size / (Math.max(predictionbuttonn.length, 7))}`;
      if (iconchatsenda) {
         break;
      }
   } while ((5 >= placeholderH.length) && iconchatsenda);
      yellowvideoliveB += `${yellowvideoliveB.length + imageactionliveO.size}`;
      championD += "1";
   let shrunkX = 6989077 >= release_v1_.length;
   do {
      release_v1_.push(imageactionliveO.size);
      if (shrunkX) {
         break;
      }
   } while (shrunkX && (3 >= (dicelogoz.length ^ release_v1_.length) && (release_v1_.length ^ dicelogoz.length) >= 3));
       let type_yt2 = 3;
       let favicon_ = String.fromCharCode(106,100,104,117,102,102,95,122,95,54,56,0);
       let updateso = false;
      while ((4 - type_yt2) == 3 || (favicon_.length - 4) == 3) {
          let r_player3 = 5;
          let libavdevicez = 4.0;
          let libcxxcomponentsV = 2.0;
          let libfollyk = String.fromCharCode(115,99,97,108,97,114,115,95,122,95,56,57,0);
         type_yt2 += r_player3 & 2;
         r_player3 |= libfollyk.length;
         libavdevicez *= 3;
         libcxxcomponentsV += parseFloat(`${libfollyk.length}`);
         break;
      }
      if ((1 ^ type_yt2) > 3) {
         favicon_ = `${1 - favicon_.length}`;
      }
      while ((5 ^ type_yt2) < 4) {
          let imagenetworkerr6: Array<any> = [219, 348];
         updateso = type_yt2 == 37 || 37 == favicon_.length;
         imagenetworkerr6.push(1 % (Math.max(3, imagenetworkerr6.length)));
         break;
      }
      while (1 < (type_yt2 & 4)) {
         favicon_ = `${((updateso ? 2 : 4) + 2)}`;
         break;
      }
         favicon_ = `${favicon_.length}`;
      if ((type_yt2 << (Math.min(favicon_.length, 2))) == 2) {
         type_yt2 &= (type_yt2 | (updateso ? 5 : 1));
      }
       let libglog5 = 1.0;
      if (5.56 >= (4.29 - libglog5)) {
         updateso = favicon_.includes(`${type_yt2}`);
      }
      while (!favicon_.endsWith(`${updateso}`)) {
         updateso = favicon_.startsWith(`${type_yt2}`);
         break;
      }
      predictionbuttonn = [placeholderH.length];
       let country1: Map<any, any> = new Map([[String.fromCharCode(110,97,109,101,115,112,97,99,101,95,54,95,56,52,0),319], [String.fromCharCode(104,105,115,116,111,114,105,101,115,95,50,95,54,49,0),113], [String.fromCharCode(102,95,51,55,95,98,111,111,108,101,97,110,0),399]]);
         country1.set(`${country1.size}`, 2 * country1.size);
         country1 = new Map([[`${country1.size}`, 1 & country1.size]]);
          let minivod6 = false;
          let livesharef = 1.0;
         country1.set(`${livesharef}`, 2 & country1.size);
         minivod6 = (minivod6 ? !minivod6 : !minivod6);
         livesharef *= ((minivod6 ? 2 : 1) | (minivod6 ? 2 : 3));
      dicelogoz += `${a_hashv.size % 1}`;
       let libglog8: Array<any> = [188, 581, 262];
       let eact9 = 4.0;
       let phoneA = String.fromCharCode(98,95,56,53,95,97,117,120,100,97,116,97,0);
      for (let l = 0; l < 3; l++) {
         eact9 -= parseFloat(`${libglog8.length}`);
      }
      for (let i = 0; i < 2; i++) {
         phoneA = "3";
      }
       let window_wrA = 0.0;
         window_wrA += 2 & parseInt(`${window_wrA}`);
      while ((phoneA.length * 1) > 1) {
         phoneA += `${parseInt(`${window_wrA}`) - phoneA.length}`;
         break;
      }
      while ((1 >> (Math.min(5, phoneA.length))) < 2) {
          let trashR: Map<any, any> = new Map([[String.fromCharCode(108,95,57,50,95,116,114,107,110,0),829], [String.fromCharCode(99,111,101,114,99,101,95,56,95,53,54,0),375], [String.fromCharCode(115,117,110,118,101,114,95,121,95,51,49,0),915]]);
         window_wrA += parseInt(`${eact9}`);
         trashR.set(`${trashR.size}`, trashR.size);
         break;
      }
      if ((2 / (Math.max(3, parseInt(`${window_wrA}`)))) >= 1 || 3.36 >= (window_wrA / (Math.max(phoneA.length, 6)))) {
         window_wrA += phoneA.length;
      }
      while (1 > (phoneA.length * 2) && (2 - phoneA.length) > 2) {
         window_wrA /= Math.max(5, libglog8.length ^ 3);
         break;
      }
         phoneA = `${libglog8.length}`;
      a_hashv = new Map([[`${imageactionliveO.size}`, 3]]);
      placeholderH += "3";

      console.log("error when validate iap: ", error);

      release_v1_.push(2 >> (Math.min(5, Math.abs(annert))));
   let videovarw = String.fromCharCode(101,102,56,0) == championD;
   do {
      championD = "3";
      if (videovarw) {
         break;
      }
   } while ((placeholderH.includes(championD)) && videovarw);
   let defaultpredictionprofile3 = imageactionliveO.size <= 6670359;
   do {
      imageactionliveO.set(`${round7}`, 2 + confirmationB.size);
      if (defaultpredictionprofile3) {
         break;
      }
   } while (defaultpredictionprofile3 && ((imageactionliveO.size / (Math.max(5, 3))) > 4));
      release_v1_ = [imageactionliveO.size];
   while ((dicelogoz.length >> (Math.min(4, Math.abs(annert)))) <= 3 && 2 <= (3 >> (Math.min(2, dicelogoz.length)))) {
       let untickS = 1;
       let const_mgT = String.fromCharCode(100,102,108,97,95,115,95,53,0);
       let matchesQ = String.fromCharCode(98,97,99,107,111,102,102,95,103,95,53,55,0);
       let gifgoal_ = 2;
       let backiconr = String.fromCharCode(120,95,48,95,99,111,109,112,114,101,115,115,111,114,0);
          let containerc = 5.0;
          let configA = String.fromCharCode(97,114,114,105,118,97,108,95,56,95,49,50,0);
         untickS >>= Math.min(Math.abs(2), 3);
         containerc += parseFloat(`${configA.length}`);
         configA = `${parseInt(`${containerc}`) ^ 1}`;
      let viewerp = backiconr == String.fromCharCode(57,122,57,98,121,54,112,0);
      do {
         backiconr += `${const_mgT.length | 3}`;
         if (viewerp) {
            break;
         }
      } while (viewerp && (3 <= (1 ^ gifgoal_) && 4 <= (1 ^ backiconr.length)));
      while (5 >= (3 / (Math.max(3, const_mgT.length))) || (untickS / (Math.max(const_mgT.length, 3))) >= 3) {
         untickS /= Math.max(3 ^ matchesQ.length, 5);
         break;
      }
      while (2 <= (untickS >> (Math.min(Math.abs(5), 3))) && 5 <= (5 >> (Math.min(2, Math.abs(untickS))))) {
         const_mgT += `${(String.fromCharCode(75,0) == matchesQ ? matchesQ.length : untickS)}`;
         break;
      }
      for (let u = 0; u < 1; u++) {
         backiconr = `${backiconr.length & 1}`;
      }
         backiconr += `${gifgoal_}`;
      if (2 <= (3 ^ gifgoal_) || (matchesQ.length ^ gifgoal_) <= 3) {
         matchesQ += `${3 + backiconr.length}`;
      }
         const_mgT += `${2 | backiconr.length}`;
         gifgoal_ &= backiconr.length >> (Math.min(matchesQ.length, 5));
          let favicon1: Map<any, any> = new Map([[String.fromCharCode(118,101,108,111,99,105,116,121,95,97,95,50,49,0),892], [String.fromCharCode(109,95,52,48,95,115,117,98,115,116,114,97,99,116,101,100,0),392], [String.fromCharCode(111,98,116,97,105,110,95,54,95,57,54,0),763]]);
          let appleN: Array<any> = [902, 559, 819];
          let downd = 4.0;
         untickS /= Math.max(backiconr.length, 5);
         favicon1 = new Map([[`${favicon1.size}`, 2 ^ appleN.length]]);
         appleN.push(1);
         downd -= parseFloat(`${1}`);
      let searchX = untickS <= 8988066;
      do {
          let settingj: Map<any, any> = new Map([[String.fromCharCode(106,112,101,103,105,110,116,0),369], [String.fromCharCode(101,95,53,57,95,97,116,114,0),287]]);
          let typingP = String.fromCharCode(116,105,109,101,118,97,108,95,117,95,51,56,0);
          let matchZ = String.fromCharCode(105,110,116,108,101,95,53,95,51,48,0);
          let middlesounds = String.fromCharCode(115,95,53,48,95,116,111,111,108,99,104,97,105,110,0);
          let materialv = 2.0;
         untickS -= matchZ.length | 3;
         settingj.set(`${typingP}`, (String.fromCharCode(74,0) == typingP ? settingj.size : typingP.length));
         matchZ = `${settingj.size}`;
         middlesounds += `${1 / (Math.max(8, settingj.size))}`;
         materialv += 2 - middlesounds.length;
         if (searchX) {
            break;
         }
      } while (searchX && (!backiconr.endsWith(`${untickS}`)));
       let sharew = 4.0;
         untickS -= backiconr.length;
         matchesQ += `${backiconr.length % 2}`;
      let sharemodalZ = 5096601 >= untickS;
      do {
         untickS <<= Math.min(1, Math.abs(matchesQ.length * const_mgT.length));
         if (sharemodalZ) {
            break;
         }
      } while (sharemodalZ && ((untickS * 4) == 2 && 3 == (untickS * 4)));
      annert %= Math.max(4, 1 << (Math.min(4, matchesQ.length)));
      break;
   }
      placeholderH += `${circley.length - placeholderH.length}`;
      placeholderH = `${annert}`;
      annert *= 3;
      round7 = (yellowvideoliveB.length - dicelogoz.length) <= 99;
      circley += `${championD.length << (Math.min(2, Math.abs(a_hashv.size)))}`;
      championD += `${confirmationB.size}`;
       let spinnerQ = String.fromCharCode(117,95,50,50,95,103,114,97,99,101,0);
      while (3 < spinnerQ.length) {
         spinnerQ += `${(spinnerQ == String.fromCharCode(101,0) ? spinnerQ.length : spinnerQ.length)}`;
         break;
      }
         spinnerQ += `${(String.fromCharCode(74,0) == spinnerQ ? spinnerQ.length : spinnerQ.length)}`;
      while (spinnerQ.length > 4) {
         spinnerQ = `${spinnerQ.length + 2}`;
         break;
      }
      imageactionliveO = new Map([[`${confirmationB.size}`, (1 | (round7 ? 2 : 2))]]);
       let memberN = false;
         memberN = !memberN && !memberN;
      if (memberN && memberN) {
          let bellreminder9 = true;
          let middleg = 4.0;
          let weathert = String.fromCharCode(100,101,113,117,97,110,116,95,112,95,49,57,0);
         memberN = parseFloat(`${weathert.length}`) > middleg;
         bellreminder9 = !bellreminder9;
         middleg /= Math.max(1, (parseFloat(`${(bellreminder9 ? 5 : 5) - 2}`)));
      }
      while (!memberN) {
         memberN = !memberN && !memberN;
         break;
      }
      round7 = championD.length > 81;
       let downD = String.fromCharCode(115,116,114,101,97,109,99,111,112,121,95,55,95,52,53,0);
       let iconclosewhitebgw = 4.0;
       let viewer9 = String.fromCharCode(118,95,55,55,95,119,104,105,99,104,0);
       let editd = String.fromCharCode(103,95,56,54,95,118,101,114,116,105,99,97,108,108,121,0);
         downD = `${viewer9.length - 1}`;
      yellowvideoliveB = `${championD.length}`;
   if (4 >= a_hashv.size) {
      a_hashv = new Map([[placeholderH, 3]]);
   }
   let starh = 7310295 >= release_v1_.length;
   do {
      release_v1_.push(annert << (Math.min(release_v1_.length, 1)));
      if (starh) {
         break;
      }
   } while (starh && (release_v1_.length <= 3));
       let iconbellJ = 4.0;
       let constantsQ = 0.0;
         constantsQ -= parseFloat(`${3 + parseInt(`${iconbellJ}`)}`);
          let detailsx = String.fromCharCode(105,100,99,116,95,104,95,50,0);
          let statistics6 = String.fromCharCode(114,95,50,95,100,102,115,116,0);
          let pointI: Array<any> = [62, 557, 159];
         iconbellJ -= parseInt(`${iconbellJ}`);
         detailsx += `${detailsx.length}`;
         statistics6 += "1";
         pointI = [3 >> (Math.min(4, pointI.length))];
       let typesX: Map<any, any> = new Map([[String.fromCharCode(120,103,101,116,98,118,95,57,95,57,56,0),String.fromCharCode(107,95,56,57,95,115,107,101,119,0)], [String.fromCharCode(97,117,116,104,111,114,105,122,101,95,115,95,52,49,0),String.fromCharCode(105,109,112,97,99,116,95,55,95,56,50,0)], [String.fromCharCode(99,95,55,53,95,101,110,116,101,114,105,110,103,0),String.fromCharCode(120,112,114,118,95,113,95,50,49,0)]]);
       let langz: Map<any, any> = new Map([[String.fromCharCode(115,116,111,112,95,99,95,50,0),491], [String.fromCharCode(99,111,110,116,105,110,117,97,108,95,120,95,48,0),446]]);
      if ((constantsQ - 2.92) < 3.42 || 1.6 < (2.92 - iconbellJ)) {
         iconbellJ /= Math.max(parseInt(`${constantsQ}`) << (Math.min(5, Math.abs(parseInt(`${iconbellJ}`)))), 5);
      }
       let hometeamfieldK = String.fromCharCode(106,95,56,48,95,112,114,101,118,0);
      for (let q = 0; q < 1; q++) {
         hometeamfieldK = `${langz.size + hometeamfieldK.length}`;
      }
      dicelogoz = `${parseInt(`${constantsQ}`) ^ placeholderH.length}`;
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
      const result = await yysBaselineOrangedownarrow.postAndroidSubscriptions(subsTrans);
      console.log("validate subscription result");
      console.log(result);
      return result.success;
    } catch (err) {
       let iconbackwhiteT = String.fromCharCode(100,116,115,109,95,107,95,49,0);
    let inviteC = String.fromCharCode(121,111,102,102,115,101,116,0);
    let changeb = 2.0;
    let phoneshareQ: Map<any, any> = new Map([[String.fromCharCode(101,95,49,52,95,116,114,97,110,115,105,116,0),String.fromCharCode(105,95,56,51,95,98,98,111,120,0)], [String.fromCharCode(114,105,110,103,116,111,110,101,115,95,51,95,50,51,0),String.fromCharCode(105,99,111,110,105,99,95,52,95,52,57,0)]]);
    let templateprocessorf = String.fromCharCode(101,120,99,101,101,100,105,110,103,95,50,95,51,56,0);
    let tooltipsp = 1.0;
    let iconorientationT = String.fromCharCode(97,112,112,101,97,114,101,100,95,106,95,49,50,0);
    let iconsettingu = false;
    let fieldE: Map<any, any> = new Map([[String.fromCharCode(99,95,55,57,95,115,117,98,115,116,114,0),String.fromCharCode(121,95,49,54,95,117,110,99,111,109,112,114,101,115,115,101,100,0)], [String.fromCharCode(101,112,101,108,95,109,95,49,56,0),String.fromCharCode(99,111,109,112,108,101,116,105,111,110,115,95,121,95,51,54,0)], [String.fromCharCode(97,117,116,111,114,101,118,101,114,115,101,115,0),String.fromCharCode(99,97,112,112,101,100,95,108,95,57,53,0)]]);
    let imagenomoredata1: Array<any> = [223, 440];
    let iconarrowrightO = 1.0;
   let list6 = 5143886 >= fieldE.size;
   do {
       let iconchatsends = String.fromCharCode(117,95,52,51,95,97,99,116,105,118,97,116,105,111,110,0);
       let desct = 3;
       let libreactnativejniR = 2.0;
         libreactnativejniR *= 3;
      while ((desct - 4) <= 3 && 4 <= (iconchatsends.length - desct)) {
          let hooksx = String.fromCharCode(119,95,49,51,95,105,115,115,117,101,115,0);
         desct += 1;
         hooksx = `${hooksx.length}`;
         break;
      }
          let transfer7 = false;
          let inewsY = String.fromCharCode(112,101,114,99,101,110,116,105,108,101,95,51,95,53,0);
         desct &= 3 << (Math.min(Math.abs(parseInt(`${libreactnativejniR}`)), 2));
         transfer7 = inewsY.length < 74;
         inewsY += `${(String.fromCharCode(120,0) == inewsY ? (transfer7 ? 5 : 3) : inewsY.length)}`;
         desct %= Math.max(3, 2);
      for (let u = 0; u < 1; u++) {
          let notificationfillemptya: Map<any, any> = new Map([[String.fromCharCode(112,116,111,110,95,103,95,52,54,0),312], [String.fromCharCode(100,95,54,51,95,98,111,114,100,101,114,108,101,115,115,0),534], [String.fromCharCode(120,95,56,56,95,100,101,102,97,117,108,116,115,0),928]]);
          let nativeexW = String.fromCharCode(111,95,49,48,95,101,122,111,115,0);
         desct %= Math.max(desct % (Math.max(1, nativeexW.length)), 5);
         notificationfillemptya.set(`${notificationfillemptya.size}`, notificationfillemptya.size);
         nativeexW = "2";
      }
      let dycreatorp = desct >= 6228533;
      do {
         desct ^= desct;
         if (dycreatorp) {
            break;
         }
      } while (dycreatorp && ((libreactnativejniR * 3.19) == 3.75));
       let stringsh = 1.0;
       let trophyO = 0.0;
      if (5.69 <= (stringsh / (Math.max(2.33, 9))) || (stringsh / (Math.max(iconchatsends.length, 6))) <= 2.33) {
         iconchatsends += `${desct}`;
      }
         desct /= Math.max(3, 3);
      fieldE.set(iconbackwhiteT, iconbackwhiteT.length >> (Math.min(3, Math.abs(parseInt(`${libreactnativejniR}`)))));
      if (list6) {
         break;
      }
   } while ((5 > fieldE.size) && list6);
      iconbackwhiteT += `${1 + iconbackwhiteT.length}`;
   if (inviteC.length > iconorientationT.length) {
      iconorientationT = `${iconbackwhiteT.length ^ 1}`;
   }
      changeb /= Math.max((iconorientationT == String.fromCharCode(49,0) ? iconorientationT.length : (iconsettingu ? 2 : 4)), 4);
   if (4 >= iconorientationT.length) {
       let mbnativeS = false;
       let router7 = false;
       let iconlogoutJ: Map<any, any> = new Map([[String.fromCharCode(102,95,51,56,95,111,98,115,101,114,118,97,116,105,111,110,0),String.fromCharCode(102,95,50,55,95,97,98,115,0)], [String.fromCharCode(97,109,114,110,98,100,97,116,97,95,99,95,49,57,0),String.fromCharCode(107,95,56,51,95,114,111,117,116,101,114,0)], [String.fromCharCode(111,95,49,51,95,109,105,114,114,111,114,105,110,103,0),String.fromCharCode(102,95,50,55,95,117,110,100,101,108,101,103,97,116,101,0)]]);
       let ccdfbdabcabbbedbq = 2.0;
          let rewind8: Array<any> = [680, 215, 571];
          let imagenetworkerry: Array<any> = [811, 688];
         ccdfbdabcabbbedbq /= Math.max((parseFloat(`${(router7 ? 4 : 3) | imagenetworkerry.length}`)), 5);
         rewind8 = [rewind8.length % (Math.max(2, rewind8.length))];
         imagenetworkerry.push(rewind8.length);
      let iconrightorangey = 9673693 <= iconlogoutJ.size;
      do {
         iconlogoutJ = new Map([[`${mbnativeS}`, 2]]);
         if (iconrightorangey) {
            break;
         }
      } while (iconrightorangey && (iconlogoutJ.size > 4 && (iconlogoutJ.size * 4) > 4));
         router7 = ((iconlogoutJ.size ^ (mbnativeS ? 95 : iconlogoutJ.size)) == 95);
      if (iconlogoutJ.size > 2) {
         ccdfbdabcabbbedbq += (parseFloat(`${(mbnativeS ? 1 : 5) >> (Math.min(Math.abs(2), 3))}`));
      }
         mbnativeS = iconlogoutJ.get(`${ccdfbdabcabbbedbq}`) == null;
      for (let x = 0; x < 1; x++) {
          let unselected2 = String.fromCharCode(112,111,114,116,115,95,54,95,57,56,0);
          let videojsq: Array<any> = [964, 612];
          let point4 = String.fromCharCode(115,112,101,99,105,102,105,99,95,57,95,50,0);
          let t_unlocki: Map<any, any> = new Map([[String.fromCharCode(101,95,51,52,95,114,105,99,101,0),472], [String.fromCharCode(112,95,55,54,95,97,112,111,115,0),853], [String.fromCharCode(99,111,114,110,101,114,115,95,49,95,57,50,0),400]]);
         router7 = point4.length <= 85 && ccdfbdabcabbbedbq <= 96.28;
         unselected2 += "1";
         videojsq.push(2 * videojsq.length);
         point4 += `${t_unlocki.size | unselected2.length}`;
         t_unlocki.set(unselected2, t_unlocki.size % (Math.max(5, unselected2.length)));
      }
      for (let e = 0; e < 2; e++) {
          let closeZ = 0;
          let bggradientZ = 4.0;
         iconlogoutJ = new Map([[`${iconlogoutJ.size}`, iconlogoutJ.size >> (Math.min(Math.abs(1), 1))]]);
         closeZ *= 1;
         bggradientZ += parseFloat(`${parseInt(`${bggradientZ}`) & closeZ}`);
      }
      if (router7) {
          let zoomU = String.fromCharCode(122,95,56,55,95,100,101,112,101,110,100,101,110,116,0);
          let customK: Array<any> = [String.fromCharCode(105,95,50,57,95,115,116,114,117,99,116,117,114,97,108,0), String.fromCharCode(113,95,50,57,95,101,110,99,114,121,112,116,105,111,110,0)];
          let carouselm = String.fromCharCode(109,95,53,51,95,115,99,104,105,0);
         mbnativeS = zoomU.length < 96;
         zoomU += `${customK.length}`;
         customK.push(1);
         carouselm = `${carouselm.length + 2}`;
      }
          let iconsaveimageC: Map<any, any> = new Map([[String.fromCharCode(118,95,57,56,95,100,101,108,101,103,97,116,105,111,110,0),403], [String.fromCharCode(105,110,116,101,114,109,101,100,105,97,116,101,95,105,95,54,54,0),641], [String.fromCharCode(121,117,118,109,112,101,103,95,55,95,53,49,0),430]]);
          let mapbuffer1 = String.fromCharCode(100,98,108,112,95,97,95,53,52,0);
         router7 = 29 >= iconsaveimageC.size || ccdfbdabcabbbedbq >= 1.34;
         iconsaveimageC.set(mapbuffer1, (mapbuffer1 == String.fromCharCode(98,0) ? mapbuffer1.length : mapbuffer1.length));
         ccdfbdabcabbbedbq -= (parseFloat(`${3 * (router7 ? 2 : 3)}`));
         iconlogoutJ.set(`${mbnativeS}`, ((mbnativeS ? 2 : 3) | (router7 ? 5 : 2)));
      while (2 < iconlogoutJ.size) {
         iconlogoutJ.set(`${ccdfbdabcabbbedbq}`, parseInt(`${ccdfbdabcabbbedbq}`) >> (Math.min(1, Math.abs(2))));
         break;
      }
      iconorientationT = `${iconorientationT.length}`;
   }
       let profilej: Array<any> = [4, 54];
       let stringM = String.fromCharCode(104,119,117,112,108,111,97,100,95,122,95,57,53,0);
      for (let x = 0; x < 3; x++) {
          let room8 = 4.0;
          let analyticsf = String.fromCharCode(102,108,117,115,104,95,52,95,54,48,0);
          let crossW = 0.0;
          let yingU = String.fromCharCode(100,95,48,95,108,111,119,101,114,0);
         stringM = `${parseInt(`${crossW}`) | profilej.length}`;
         room8 /= Math.max(2, parseInt(`${room8}`) & analyticsf.length);
         analyticsf += `${(String.fromCharCode(77,0) == yingU ? yingU.length : analyticsf.length)}`;
         crossW /= Math.max(3, 1);
      }
      if ((stringM.length / 4) > 3 || (profilej.length / (Math.max(stringM.length, 7))) > 4) {
         profilej = [profilej.length + 1];
      }
      if (4 >= stringM.length) {
         stringM = `${profilej.length | stringM.length}`;
      }
      if (stringM.length == profilej.length) {
         stringM += `${stringM.length / (Math.max(2, 5))}`;
      }
      let form6 = 6363040 <= profilej.length;
      do {
         profilej.push((stringM == String.fromCharCode(53,0) ? profilej.length : stringM.length));
         if (form6) {
            break;
         }
      } while ((profilej.length < stringM.length) && form6);
      let defaultlogoJ = 7483200 <= profilej.length;
      do {
         profilej = [profilej.length];
         if (defaultlogoJ) {
            break;
         }
      } while ((2 < (stringM.length + profilej.length) || 5 < (2 + profilej.length)) && defaultlogoJ);
      iconbackwhiteT += `${((iconsettingu ? 2 : 4) + parseInt(`${tooltipsp}`))}`;
   let ewardedu = 6917601 >= templateprocessorf.length;
   do {
       let baselineY = String.fromCharCode(120,95,49,48,48,95,115,116,114,105,100,101,98,0);
       let arrowup3: Array<any> = [String.fromCharCode(107,101,121,118,97,108,95,117,95,53,57,0), String.fromCharCode(103,95,48,95,105,111,115,98,117,105,108,100,0)];
         baselineY += `${arrowup3.length}`;
      while ((baselineY.length << (Math.min(Math.abs(3), 1))) == 4 && (arrowup3.length << (Math.min(baselineY.length, 4))) == 3) {
         baselineY += `${arrowup3.length}`;
         break;
      }
       let default_f0 = String.fromCharCode(102,95,57,48,95,114,101,102,105,110,101,100,0);
       let long_qJ = String.fromCharCode(102,115,105,122,101,95,99,95,51,0);
          let star0 = String.fromCharCode(119,109,118,100,97,116,97,95,116,95,53,56,0);
         default_f0 = `${(baselineY == String.fromCharCode(80,0) ? baselineY.length : arrowup3.length)}`;
         star0 += `${star0.length % (Math.max(3, star0.length))}`;
       let tickedI = 3;
       let iconP = 5;
         arrowup3 = [baselineY.length ^ 1];
      templateprocessorf = `${iconorientationT.length}`;
      if (ewardedu) {
         break;
      }
   } while (ewardedu && ((fieldE.size - templateprocessorf.length) > 2 || (templateprocessorf.length - fieldE.size) > 2));
   let notificationfilledc = inviteC.length <= 7686057;
   do {
      inviteC += `${parseInt(`${changeb}`) & 1}`;
      if (notificationfilledc) {
         break;
      }
   } while (notificationfilledc && ((5 - phoneshareQ.size) >= 2 && 2 >= (5 - phoneshareQ.size)));
   let backwhiteh = fieldE.size >= 8696757;
   do {
      fieldE = new Map([[`${fieldE.size}`, parseInt(`${tooltipsp}`)]]);
      if (backwhiteh) {
         break;
      }
   } while (backwhiteh && (4 >= (3 >> (Math.min(4, Math.abs(fieldE.size)))) || 3 >= (inviteC.length >> (Math.min(5, Math.abs(fieldE.size))))));
   if ((fieldE.size * 5) <= 3 && 3 <= (5 ^ fieldE.size)) {
      changeb *= (String.fromCharCode(84,0) == templateprocessorf ? templateprocessorf.length : phoneshareQ.size);
   }
   let codef = iconbackwhiteT == String.fromCharCode(110,102,107,112,0);
   do {
       let matchw = String.fromCharCode(116,104,101,110,95,118,95,51,0);
       let largebrightnessU = String.fromCharCode(106,119,116,0);
       let ballX = false;
          let sellk = 1.0;
          let libruntimeexecutora = 0;
         matchw = `${parseInt(`${sellk}`)}`;
         sellk *= 2;
         libruntimeexecutora >>= Math.min(5, Math.abs(libruntimeexecutora % 1));
          let modalP: Map<any, any> = new Map([[String.fromCharCode(104,95,53,56,95,108,97,121,101,114,105,110,103,0),138], [String.fromCharCode(99,111,110,118,101,114,116,101,114,95,102,95,50,55,0),595], [String.fromCharCode(101,95,56,0),451]]);
          let pressureZ: Array<any> = [String.fromCharCode(117,110,109,117,116,101,95,50,95,55,57,0), String.fromCharCode(122,95,55,50,95,114,101,100,117,99,101,114,0), String.fromCharCode(104,95,51,52,95,105,110,111,117,116,115,0)];
         largebrightnessU = `${3 << (Math.min(4, largebrightnessU.length))}`;
         modalP = new Map([[`${modalP.size}`, modalP.size >> (Math.min(pressureZ.length, 4))]]);
         pressureZ.push(modalP.size);
      while (!ballX) {
          let m_unlock0 = 0;
         largebrightnessU += "1 | m_unlock0";
         break;
      }
      while (matchw.length < largebrightnessU.length) {
         matchw = `${largebrightnessU.length}`;
         break;
      }
      while (4 < matchw.length) {
         ballX = matchw == largebrightnessU;
         break;
      }
          let subinn: Map<any, any> = new Map([[String.fromCharCode(100,95,56,54,95,115,112,101,101,100,117,112,0),466], [String.fromCharCode(122,95,54,52,95,100,105,115,99,117,115,115,0),231]]);
          let middleH: Array<any> = [132, 550, 902];
         matchw = `${(String.fromCharCode(121,0) == largebrightnessU ? largebrightnessU.length : middleH.length)}`;
         subinn = new Map([[`${subinn.size}`, subinn.size]]);
         middleH = [subinn.size];
          let iconmegaphoneW = 5;
          let disconnectedlogoe = String.fromCharCode(106,95,57,55,95,97,108,116,101,114,0);
         largebrightnessU = `${(String.fromCharCode(74,0) == matchw ? matchw.length : iconmegaphoneW)}`;
         iconmegaphoneW -= disconnectedlogoe.length;
         disconnectedlogoe = `${disconnectedlogoe.length & disconnectedlogoe.length}`;
         ballX = matchw.length >= 73 && largebrightnessU.length >= 73;
      let interstitialy = 9661067 >= largebrightnessU.length;
      do {
         largebrightnessU += "2";
         if (interstitialy) {
            break;
         }
      } while (interstitialy && (!largebrightnessU.endsWith(`${matchw.length}`)));
      iconbackwhiteT = `${(iconbackwhiteT == String.fromCharCode(77,0) ? iconbackwhiteT.length : (iconsettingu ? 2 : 5))}`;
      if (codef) {
         break;
      }
   } while (codef && (iconbackwhiteT.length < 3));
       let whitesmalltick6 = String.fromCharCode(97,115,99,98,110,95,110,95,54,48,0);
       let basea = String.fromCharCode(104,95,52,57,95,99,111,112,121,118,0);
         whitesmalltick6 += `${whitesmalltick6.length}`;
         basea = `${(basea == String.fromCharCode(54,0) ? whitesmalltick6.length : basea.length)}`;
      if (basea == String.fromCharCode(84,0)) {
          let umengZ = String.fromCharCode(100,101,108,111,99,97,116,101,95,106,95,53,48,0);
         whitesmalltick6 = "2";
         umengZ += `${umengZ.length}`;
      }
      let calendarJ = String.fromCharCode(95,95,119,116,102,110,98,51,99,109,0) == basea;
      do {
          let wifirouterY: Map<any, any> = new Map([[String.fromCharCode(100,105,115,112,108,97,121,105,110,103,95,120,95,53,56,0),905], [String.fromCharCode(112,97,115,112,95,107,95,56,49,0),650]]);
          let phoneshares: Map<any, any> = new Map([[String.fromCharCode(122,95,51,51,95,99,111,110,110,101,99,116,105,111,110,115,0),840], [String.fromCharCode(98,95,52,53,0),708], [String.fromCharCode(112,95,57,54,95,116,111,109,99,114,121,112,116,0),998]]);
          let eyeopenK = 2.0;
          let componentregistryi = String.fromCharCode(103,95,55,56,95,118,101,114,116,105,99,97,108,0);
          let libimagepipelinep = false;
         basea = `${2 + componentregistryi.length}`;
         wifirouterY.set(`${libimagepipelinep}`, (2 >> (Math.min(3, Math.abs((libimagepipelinep ? 1 : 3))))));
         phoneshares.set(`${libimagepipelinep}`, ((libimagepipelinep ? 3 : 1) % (Math.max(2, 5))));
         eyeopenK += parseInt(`${eyeopenK}`) ^ 1;
         componentregistryi += `${((libimagepipelinep ? 4 : 2) % 2)}`;
         if (calendarJ) {
            break;
         }
      } while ((basea.length >= 3) && calendarJ);
         basea = "2";
      let circlef = basea.length >= 5953529;
      do {
         basea = `${basea.length >> (Math.min(whitesmalltick6.length, 5))}`;
         if (circlef) {
            break;
         }
      } while (circlef && (5 > whitesmalltick6.length && 5 > basea.length));
      iconbackwhiteT = `${basea.length + 1}`;
   while (!iconsettingu) {
       let t_locko: Map<any, any> = new Map([[String.fromCharCode(102,95,54,50,95,115,99,97,108,97,98,108,101,0),296], [String.fromCharCode(119,97,105,116,95,112,95,57,52,0),358]]);
      for (let q = 0; q < 3; q++) {
         t_locko = new Map([[`${t_locko.size}`, t_locko.size / 3]]);
      }
      for (let i = 0; i < 1; i++) {
         t_locko = new Map([[`${t_locko.size}`, t_locko.size]]);
      }
          let iconschedule8 = 4.0;
          let dplusk = 3;
          let stations4 = 1;
         t_locko = new Map([[`${t_locko.size}`, parseInt(`${iconschedule8}`) << (Math.min(Math.abs(1), 5))]]);
         iconschedule8 += parseFloat(`${stations4}`);
         dplusk /= Math.max(1 << (Math.min(2, Math.abs(stations4))), 2);
      iconsettingu = !iconsettingu;
      break;
   }
      iconorientationT += "3";

      console.log("post android subscription error: ", err);

      inviteC += `${(String.fromCharCode(114,0) == iconbackwhiteT ? iconbackwhiteT.length : inviteC.length)}`;
      templateprocessorf = "1";
      changeb /= Math.max((String.fromCharCode(101,0) == iconorientationT ? iconorientationT.length : (iconsettingu ? 2 : 3)), 2);
   for (let s = 0; s < 1; s++) {
      fieldE.set(iconorientationT, 3);
   }
   let modalo = 8290877 <= iconorientationT.length;
   do {
      iconorientationT = `${parseInt(`${changeb}`) & 2}`;
      if (modalo) {
         break;
      }
   } while ((!iconorientationT.includes(`${inviteC.length}`)) && modalo);
   while (2 <= phoneshareQ.size) {
      iconbackwhiteT += `${parseInt(`${tooltipsp}`)}`;
      break;
   }
       let whistleorangez = true;
      for (let j = 0; j < 1; j++) {
         whistleorangez = (whistleorangez ? whistleorangez : !whistleorangez);
      }
      while (!whistleorangez) {
         whistleorangez = (!whistleorangez ? whistleorangez : whistleorangez);
         break;
      }
         whistleorangez = !whistleorangez;
      changeb -= inviteC.length * 2;
      tooltipsp /= Math.max(2 + inviteC.length, 4);
   if (!iconsettingu || inviteC.length >= 1) {
       let java7: Map<any, any> = new Map([[String.fromCharCode(97,95,56,48,95,109,111,100,110,112,102,0),false ], [String.fromCharCode(111,95,54,57,95,98,117,99,107,101,116,0),true ], [String.fromCharCode(109,97,105,110,115,116,97,103,101,95,110,95,53,53,0),true ]]);
       let resultL = 1.0;
       let taiwanG = String.fromCharCode(101,112,111,108,108,95,106,95,54,48,0);
       let questiconb = String.fromCharCode(118,105,100,101,111,114,101,110,100,101,114,101,114,95,105,95,54,48,0);
         java7.set(`${resultL}`, java7.size);
      while (questiconb.endsWith(`${java7.size}`)) {
         java7.set(taiwanG, questiconb.length & taiwanG.length);
         break;
      }
      for (let k = 0; k < 2; k++) {
         java7 = new Map([[`${java7.size}`, 1 * questiconb.length]]);
      }
      for (let q = 0; q < 2; q++) {
          let default_oy = String.fromCharCode(108,111,119,99,111,109,112,95,48,95,52,54,0);
         java7 = new Map([[`${java7.size}`, java7.size | taiwanG.length]]);
         default_oy += `${default_oy.length << (Math.min(2, default_oy.length))}`;
      }
         java7 = new Map([[questiconb, taiwanG.length]]);
      for (let j = 0; j < 1; j++) {
          let predictionbannerZ = true;
          let inactivet = String.fromCharCode(104,114,116,102,95,112,95,49,0);
         questiconb = "2";
         predictionbannerZ = inactivet == inactivet;
      }
      if (5 > java7.size) {
         questiconb = "2";
      }
       let next5 = String.fromCharCode(112,101,114,115,105,115,116,101,110,116,95,50,95,56,52,0);
         taiwanG += `${questiconb.length * next5.length}`;
         questiconb += `${java7.size}`;
         java7 = new Map([[`${java7.size}`, java7.size]]);
       let playlistN = 5.0;
       let whiteG = 0.0;
      iconsettingu = !iconbackwhiteT.endsWith(`${tooltipsp}`);
   }
       let footballfiledlayouta: Map<any, any> = new Map([[String.fromCharCode(111,95,51,55,95,97,118,102,109,116,0),String.fromCharCode(114,95,53,56,0)], [String.fromCharCode(101,113,117,97,108,105,122,101,114,95,104,95,49,52,0),String.fromCharCode(116,114,110,115,95,105,95,56,55,0)]]);
       let disconnectedlogoF = 1.0;
       let sharewhite_ = String.fromCharCode(105,99,111,110,95,104,95,49,53,0);
       let defaultpredictionprofileq = String.fromCharCode(115,105,109,117,108,97,116,105,111,110,95,101,95,54,55,0);
          let nendO = String.fromCharCode(112,95,51,95,114,116,99,100,0);
          let imagenomoredataJ = 5.0;
         disconnectedlogoF -= parseFloat(`${sharewhite_.length - 3}`);
         nendO += `${nendO.length}`;
         imagenomoredataJ += 1;
       let animationsa = true;
          let libffmpegkitr = 4;
         sharewhite_ += `${defaultpredictionprofileq.length / (Math.max(4, libffmpegkitr))}`;
       let whatsappp = String.fromCharCode(110,111,116,105,102,105,101,115,95,103,95,48,0);
          let javaf = 5;
         footballfiledlayouta = new Map([[`${disconnectedlogoF}`, 1 | parseInt(`${disconnectedlogoF}`)]]);
         javaf *= javaf;
      templateprocessorf += `${(String.fromCharCode(118,0) == templateprocessorf ? templateprocessorf.length : (iconsettingu ? 2 : 1))}`;
   while (4.64 < (changeb + iconbackwhiteT.length) || (changeb + iconbackwhiteT.length) < 4.64) {
       let yellowcirclebgQ = 3;
       let modelsB = String.fromCharCode(109,101,100,105,117,109,95,100,95,53,51,0);
       let layoutm = 1.0;
       let manifestl = String.fromCharCode(112,114,111,100,117,99,116,95,55,95,51,52,0);
       let codegenW = String.fromCharCode(103,95,49,55,95,115,116,105,99,107,101,114,115,101,116,0);
         layoutm += 3 ^ codegenW.length;
         yellowcirclebgQ *= manifestl.length;
         manifestl = `${modelsB.length}`;
          let chinasameN = 2.0;
          let fullscreenminB = 2.0;
          let patho: Map<any, any> = new Map([[String.fromCharCode(122,95,52,95,103,97,109,101,115,0),274], [String.fromCharCode(105,110,99,108,117,100,101,95,53,95,49,49,0),683]]);
         layoutm *= 2 % (Math.max(8, modelsB.length));
         chinasameN -= parseFloat(`${parseInt(`${chinasameN}`) - patho.size}`);
         fullscreenminB += 2 % (Math.max(parseInt(`${fullscreenminB}`), 8));
         patho = new Map([[`${fullscreenminB}`, parseInt(`${fullscreenminB}`)]]);
         layoutm -= 2;
      for (let i = 0; i < 3; i++) {
         yellowcirclebgQ /= Math.max(manifestl.length & 1, 1);
      }
      if (manifestl.includes(`${codegenW.length}`)) {
          let bufferH: Array<any> = [291, 989, 467];
          let diceB = String.fromCharCode(100,95,54,95,102,105,108,108,105,110,0);
          let mini7 = String.fromCharCode(115,117,109,95,122,95,51,48,0);
         codegenW = `${(String.fromCharCode(75,0) == codegenW ? codegenW.length : yellowcirclebgQ)}`;
         bufferH.push((mini7 == String.fromCharCode(73,0) ? mini7.length : bufferH.length));
         diceB = `${bufferH.length / (Math.max(mini7.length, 6))}`;
      }
         modelsB = `${manifestl.length >> (Math.min(Math.abs(3), 3))}`;
          let profileV = String.fromCharCode(109,105,120,105,110,103,95,110,95,51,56,0);
         yellowcirclebgQ += 3 + codegenW.length;
         profileV = `${(profileV == String.fromCharCode(78,0) ? profileV.length : profileV.length)}`;
      let gesturesG = 6376364.0 <= layoutm;
      do {
         layoutm -= 3;
         if (gesturesG) {
            break;
         }
      } while (gesturesG && (5.99 == layoutm));
         modelsB = `${manifestl.length * 3}`;
          let sellD = String.fromCharCode(98,97,116,99,104,105,110,103,95,50,95,56,51,0);
          let crown6 = String.fromCharCode(112,111,108,121,108,105,110,101,95,56,95,53,54,0);
          let iconviewerr: Array<any> = [523, 464];
         manifestl += `${3 + sellD.length}`;
         sellD += `${iconviewerr.length}`;
         crown6 += `${iconviewerr.length >> (Math.min(crown6.length, 1))}`;
      while (3.12 >= (yellowcirclebgQ * layoutm)) {
         yellowcirclebgQ ^= 1;
         break;
      }
      while ((yellowcirclebgQ * 2) == 5) {
          let read6 = false;
          let iconuser3 = String.fromCharCode(119,114,105,116,101,111,117,116,95,54,95,51,48,0);
          let watchW: Map<any, any> = new Map([[String.fromCharCode(105,95,54,52,95,112,97,112,101,114,0),451], [String.fromCharCode(114,95,49,52,95,112,105,110,110,101,100,0),426]]);
          let acceptedR = 2.0;
          let libyoga8 = 3.0;
         yellowcirclebgQ <<= Math.min(1, Math.abs(2));
         read6 = 36.52 > libyoga8;
         iconuser3 += `${parseInt(`${libyoga8}`) - 3}`;
         watchW.set(`${acceptedR}`, watchW.size);
         acceptedR /= Math.max((parseFloat(`${(read6 ? 3 : 5) >> (Math.min(Math.abs(parseInt(`${acceptedR}`)), 5))}`)), 2);
         break;
      }
          let template_jnE = 3.0;
          let interstitialU = String.fromCharCode(118,112,108,97,121,101,114,95,122,95,53,56,0);
         codegenW += `${parseInt(`${template_jnE}`)}`;
         template_jnE /= Math.max(3, (interstitialU == String.fromCharCode(85,0) ? interstitialU.length : interstitialU.length));
      changeb /= Math.max(3, ((iconsettingu ? 3 : 5) % (Math.max(1, parseInt(`${tooltipsp}`)))));
      break;
   }
      phoneshareQ.set(templateprocessorf, 2 | phoneshareQ.size);
   let whitevideoliveh = changeb >= 5983128.0;
   do {
      changeb /= Math.max(1, ((iconsettingu ? 3 : 3) << (Math.min(Math.abs(1), 5))));
      if (whitevideoliveh) {
         break;
      }
   } while (whitevideoliveh && ((3.34 + changeb) > 4.48));
   if ((imagenomoredata1.length * iconbackwhiteT.length) < 2 && (imagenomoredata1.length * 2) < 1) {
      iconbackwhiteT += `${templateprocessorf.length % (Math.max(2, fieldE.size))}`;
   }
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
       let recommendationJ: Array<any> = [452, 272, 487];
    let select4 = String.fromCharCode(116,101,109,112,115,95,100,95,49,0);
    let turndownF = String.fromCharCode(101,103,97,99,121,95,100,95,51,50,0);
    let emojia = String.fromCharCode(99,95,51,95,99,97,115,104,116,97,103,0);
    let mimoX = 2.0;
    let libyogaN = 2;
    let dycreator7: Array<any> = [String.fromCharCode(107,95,57,56,95,108,111,99,97,108,105,116,121,0), String.fromCharCode(115,105,108,101,110,99,101,100,95,102,95,57,54,0), String.fromCharCode(115,104,97,100,101,114,95,51,95,54,0)];
    let private_it = String.fromCharCode(108,95,52,95,97,110,105,109,97,116,105,111,110,0);
    let emptyj = String.fromCharCode(107,95,53,57,95,115,117,98,104,101,97,100,101,114,0);
    let alertc = String.fromCharCode(119,97,105,116,101,114,95,54,95,56,57,0);
      emojia += `${libyogaN >> (Math.min(Math.abs(2), 4))}`;
   let areaa = String.fromCharCode(120,57,117,113,107,0) == select4;
   do {
      select4 = "2";
      if (areaa) {
         break;
      }
   } while (areaa && (5 < (select4.length - 1) && (select4.length - 1) < 1));
   for (let f = 0; f < 1; f++) {
      private_it = `${libyogaN - 2}`;
   }
   let elementsK = dycreator7.length >= 7944581;
   do {
       let emojiheartG = 4;
       let animationsH: Map<any, any> = new Map([[String.fromCharCode(102,95,57,54,0),false ], [String.fromCharCode(109,95,53,55,95,115,105,108,101,110,116,108,121,0),false ], [String.fromCharCode(115,116,114,101,101,116,95,108,95,57,55,0),true ]]);
         animationsH.set(`${emojiheartG}`, animationsH.size ^ 2);
      while ((3 >> (Math.min(2, Math.abs(animationsH.size)))) >= 1) {
          let overx = String.fromCharCode(102,105,108,101,110,97,109,101,115,95,105,95,51,0);
         animationsH = new Map([[`${emojiheartG}`, emojiheartG]]);
         overx = `${(overx == String.fromCharCode(79,0) ? overx.length : overx.length)}`;
         break;
      }
         animationsH.set(`${emojiheartG}`, animationsH.size + emojiheartG);
       let yellow6: Map<any, any> = new Map([[String.fromCharCode(117,110,100,101,114,115,99,111,114,101,95,121,95,49,52,0),true ], [String.fromCharCode(115,107,105,112,105,110,116,114,97,95,116,95,56,49,0),true ]]);
       let schedulew = false;
      for (let a = 0; a < 3; a++) {
         yellow6 = new Map([[`${animationsH.size}`, 3 % (Math.max(7, animationsH.size))]]);
      }
      dycreator7 = [2 & select4.length];
      if (elementsK) {
         break;
      }
   } while ((3 < (dycreator7.length * emojia.length)) && elementsK);
      emojia += `${private_it.length % 1}`;
   if (recommendationJ.length > 5) {
      private_it += "3";
   }
   if ((4 & private_it.length) >= 4) {
      dycreator7 = [recommendationJ.length];
   }

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
       let friendsO = 4.0;
    let progresso = 5.0;
    let renderv = String.fromCharCode(113,95,51,56,95,114,101,108,97,121,115,0);
    let viewer3 = String.fromCharCode(111,95,52,53,95,99,111,110,110,101,99,116,0);
    let airbnbstarselected1 = String.fromCharCode(118,95,49,48,48,95,105,109,109,101,100,105,97,116,101,0);
    let inouttargetyellowV = 1;
    let bodanp: Map<any, any> = new Map([[String.fromCharCode(116,101,114,109,115,95,110,95,53,54,0),675], [String.fromCharCode(111,95,52,51,95,101,118,97,108,0),312]]);
    let regenga: Array<any> = [723, 921, 733];
    let customf = false;
    let sharewhiteq = 3.0;
    let currentn: Array<any> = [String.fromCharCode(115,101,101,100,101,100,95,122,95,52,57,0), String.fromCharCode(97,95,53,48,95,98,97,99,107,115,105,100,101,0), String.fromCharCode(114,95,56,48,95,104,97,110,100,111,118,101,114,0)];
    let libjsijniprofilero = 0;
    let largeA = 0.0;
    let leakchecker0: Map<any, any> = new Map([[String.fromCharCode(117,95,53,51,95,118,97,114,119,105,100,116,104,0),919], [String.fromCharCode(122,95,49,56,0),375]]);
    let shared8 = 3.0;
    let predictiondefault7 = 3.0;
       let vignetteR = String.fromCharCode(98,108,97,107,101,98,95,112,95,56,55,0);
      for (let e = 0; e < 2; e++) {
          let notificationgrayq: Array<any> = [735, 255];
          let injuryJ = false;
          let selectiony = 4.0;
          let librrc2 = 3;
          let becomeq = 1;
         vignetteR = `${librrc2 ^ 1}`;
         notificationgrayq.push((parseInt(`${selectiony}`) - (injuryJ ? 5 : 1)));
         injuryJ = 69 > (becomeq + selectiony);
         librrc2 |= ((injuryJ ? 1 : 5) >> (Math.min(Math.abs(parseInt(`${selectiony}`)), 3)));
         becomeq |= notificationgrayq.length;
      }
      if (!vignetteR.includes(`${vignetteR.length}`)) {
          let viewsg = 0.0;
          let template_hL = 1.0;
          let watchnowbgT = 0;
          let awayplayerq: Array<any> = [223, 78];
         vignetteR = `${watchnowbgT}`;
         viewsg *= parseFloat(`${1 | parseInt(`${template_hL}`)}`);
         template_hL *= parseFloat(`${awayplayerq.length << (Math.min(Math.abs(3), 4))}`);
         watchnowbgT /= Math.max(2, parseInt(`${template_hL}`));
         awayplayerq.push(parseInt(`${viewsg}`));
      }
         vignetteR = `${(String.fromCharCode(118,0) == vignetteR ? vignetteR.length : vignetteR.length)}`;
      viewer3 += "2";

      if (currentPurchase) {

   for (let v = 0; v < 2; v++) {
       let logoK: Array<any> = [687, 373, 794];
      if (3 >= logoK.length) {
         logoK = [logoK.length / 2];
      }
      if (!logoK.includes(logoK.length)) {
         logoK.push(logoK.length);
      }
      let anytimeG = 8752624 >= logoK.length;
      do {
         logoK = [logoK.length | 3];
         if (anytimeG) {
            break;
         }
      } while ((logoK.includes(logoK.length)) && anytimeG);
      libjsijniprofilero /= Math.max(inouttargetyellowV, 5);
   }
        console.log("-------Current Purchase------------");

       let iconcloseJ: Map<any, any> = new Map([[String.fromCharCode(103,95,50,57,95,98,111,117,110,100,115,0),String.fromCharCode(116,95,51,95,115,122,97,98,111,0)], [String.fromCharCode(104,95,56,54,95,103,114,111,119,0),String.fromCharCode(102,111,114,101,105,103,110,95,102,95,53,56,0)]]);
       let feedbackx = true;
       let homeinactive1 = 2.0;
          let iconclosewhitebgy = String.fromCharCode(112,114,101,115,101,110,116,95,97,95,50,54,0);
          let privacyV: Array<any> = [829, 353, 643];
         homeinactive1 -= (1 ^ (feedbackx ? 4 : 2));
         iconclosewhitebgy = `${privacyV.length << (Math.min(Math.abs(1), 3))}`;
         privacyV.push((iconclosewhitebgy == String.fromCharCode(122,0) ? iconclosewhitebgy.length : privacyV.length));
      let executora = 5028758.0 >= homeinactive1;
      do {
         homeinactive1 /= Math.max(2, parseInt(`${homeinactive1}`) / 1);
         if (executora) {
            break;
         }
      } while (((iconcloseJ.size - 1) > 1) && executora);
          let chinasames = String.fromCharCode(110,112,112,115,99,97,108,101,95,100,95,52,55,0);
          let themew = String.fromCharCode(103,95,56,57,95,102,105,114,101,119,97,108,108,0);
          let reducerS = 2.0;
         feedbackx = homeinactive1 < 59.83;
         chinasames += `${themew.length}`;
         themew = "1";
         reducerS -= parseFloat(`${themew.length}`);
      if (Array.from(iconcloseJ.values()).includes(homeinactive1)) {
         iconcloseJ = new Map([[`${homeinactive1}`, (parseInt(`${homeinactive1}`) >> (Math.min(2, Math.abs((feedbackx ? 5 : 4)))))]]);
      }
      let humidityL = 7713242 >= iconcloseJ.size;
      do {
         iconcloseJ.set(`${feedbackx}`, (parseInt(`${homeinactive1}`) * (feedbackx ? 2 : 3)));
         if (humidityL) {
            break;
         }
      } while (humidityL && ((iconcloseJ.size | 3) < 1 || 2.25 < (homeinactive1 * 2.15)));
      for (let k = 0; k < 2; k++) {
          let downloaderS = String.fromCharCode(115,95,52,57,95,102,102,109,101,116,97,0);
          let penaltymatchiconU: Map<any, any> = new Map([[String.fromCharCode(110,95,51,57,95,110,111,110,110,117,108,108,0),625], [String.fromCharCode(114,97,110,115,105,116,105,111,110,95,116,95,56,53,0),471], [String.fromCharCode(108,111,111,107,95,105,95,50,0),549]]);
          let with_jc = 4;
         feedbackx = penaltymatchiconU.size < parseInt(`${homeinactive1}`);
         downloaderS = "2";
         penaltymatchiconU = new Map([[downloaderS, 1]]);
         with_jc ^= (String.fromCharCode(50,0) == downloaderS ? with_jc : downloaderS.length);
      }
      let textlayoutmanagerX = feedbackx ? !feedbackx : feedbackx;
      do {
         feedbackx = (((feedbackx ? 45 : iconcloseJ.size) / (Math.max(iconcloseJ.size, 10))) > 45);
         if (textlayoutmanagerX) {
            break;
         }
      } while ((feedbackx) && textlayoutmanagerX);
      while ((iconcloseJ.size << (Math.min(Math.abs(2), 2))) >= 3) {
         iconcloseJ = new Map([[`${feedbackx}`, ((feedbackx ? 1 : 1) % (Math.max(6, parseInt(`${homeinactive1}`))))]]);
         break;
      }
         homeinactive1 *= parseInt(`${homeinactive1}`);
      currentn.push(viewer3.length);
        console.log(currentPurchase);

   while (4 >= (bodanp.size ^ renderv.length)) {
       let profilez = String.fromCharCode(117,95,52,50,95,99,97,108,108,105,110,103,0);
       let gemfileq = String.fromCharCode(112,114,111,103,114,101,115,115,101,115,95,99,95,56,50,0);
       let fastforwardL: Map<any, any> = new Map([[String.fromCharCode(97,114,116,105,115,116,0),634], [String.fromCharCode(105,110,118,101,114,118,97,108,95,109,95,56,53,0),262]]);
          let tramini2 = 3;
          let gift6: Map<any, any> = new Map([[String.fromCharCode(99,111,110,102,101,116,116,105,95,119,95,55,55,0),775], [String.fromCharCode(101,95,54,48,95,118,101,114,116,105,99,97,108,108,121,0),257], [String.fromCharCode(116,111,111,108,116,105,112,95,98,95,52,56,0),618]]);
          let videocommonC = String.fromCharCode(115,101,114,105,102,95,116,95,52,57,0);
         gemfileq = "3";
         tramini2 %= Math.max(2, (String.fromCharCode(114,0) == videocommonC ? videocommonC.length : gift6.size));
         gift6 = new Map([[`${gift6.size}`, videocommonC.length]]);
      for (let l = 0; l < 2; l++) {
         gemfileq += `${2 / (Math.max(1, gemfileq.length))}`;
      }
      let basketballiconu = gemfileq == String.fromCharCode(114,120,54,0);
      do {
         gemfileq = `${fastforwardL.size}`;
         if (basketballiconu) {
            break;
         }
      } while (((fastforwardL.size - gemfileq.length) > 5) && basketballiconu);
      let kuaishoui = 8917375 <= profilez.length;
      do {
         profilez = `${1 - gemfileq.length}`;
         if (kuaishoui) {
            break;
         }
      } while ((profilez.length <= gemfileq.length) && kuaishoui);
      for (let f = 0; f < 2; f++) {
         gemfileq = `${fastforwardL.size}`;
      }
      bodanp.set(airbnbstarselected1, gemfileq.length);
      break;
   }
        console.log(
          products.some(
            (product) => product.productId === currentPurchase.productId
          )
        );

   if (bodanp.get(`${regenga.length}`) == null) {
      regenga = [viewer3.length & libjsijniprofilero];
   }

        try {

   let tick6 = 9817052 >= bodanp.size;
   do {
       let renderu: Map<any, any> = new Map([[String.fromCharCode(97,115,111,99,95,100,95,49,50,0),373], [String.fromCharCode(98,95,51,52,0),347]]);
       let formh = String.fromCharCode(115,95,55,50,95,105,110,99,108,117,100,105,110,103,0);
       let incidentr = 1.0;
      let photo5 = incidentr <= 5916913.0;
      do {
         incidentr *= formh.length;
         if (photo5) {
            break;
         }
      } while ((4.20 > (2.60 / (Math.max(2, incidentr)))) && photo5);
          let sideY = 4;
         renderu.set(`${sideY}`, renderu.size);
      while ((renderu.size * 3) > 3) {
          let enewinterstitialG: Array<any> = [525, 852, 100];
         incidentr += formh.length;
         enewinterstitialG.push(3 >> (Math.min(5, enewinterstitialG.length)));
         break;
      }
      while (renderu.size > incidentr) {
          let brightnessn = String.fromCharCode(99,111,114,101,105,109,97,103,101,95,99,95,54,53,0);
         incidentr /= Math.max(3, formh.length & 2);
         brightnessn += `${brightnessn.length << (Math.min(brightnessn.length, 4))}`;
         break;
      }
      if ((formh.length >> (Math.min(Math.abs(4), 4))) > 3 || 4 > (formh.length >> (Math.min(1, Math.abs(renderu.size))))) {
         renderu.set(formh, formh.length);
      }
      let long_yk = renderu.size <= 6384984;
      do {
         renderu = new Map([[`${incidentr}`, 3 * parseInt(`${incidentr}`)]]);
         if (long_yk) {
            break;
         }
      } while ((formh.length == 1) && long_yk);
         formh += `${renderu.size}`;
       let yellowtoredD = true;
      if (formh.length < 1) {
         yellowtoredD = formh.length < 79;
      }
      bodanp = new Map([[`${currentn.length}`, currentn.length]]);
      if (tick6) {
         break;
      }
   } while (((1 - inouttargetyellowV) < 2 && 1 < (1 - bodanp.size)) && tick6);
          if (currentPurchase.transactionReceipt) {

   while (5 >= (4 * currentn.length)) {
      currentn = [((customf ? 1 : 4))];
      break;
   }
            const key = currentPurchase.transactionId?.concat("true");

   if ((5 * renderv.length) > 3 && 1 > (inouttargetyellowV * 5)) {
       let libfileB = String.fromCharCode(102,111,117,110,100,95,98,95,49,49,0);
       let rewardvideoh: Map<any, any> = new Map([[String.fromCharCode(97,117,116,111,99,111,114,114,101,108,97,116,105,111,110,95,55,95,56,49,0),683], [String.fromCharCode(119,95,49,53,95,110,111,118,101,99,0),328]]);
       let expired8 = String.fromCharCode(120,102,105,120,101,115,95,99,95,51,53,0);
      while (libfileB.startsWith(`${rewardvideoh.size}`)) {
         rewardvideoh = new Map([[`${rewardvideoh.size}`, libfileB.length << (Math.min(Math.abs(3), 5))]]);
         break;
      }
         rewardvideoh.set(`${libfileB}`, (libfileB == String.fromCharCode(87,0) ? rewardvideoh.size : libfileB.length));
          let editE = 1;
          let trashn = String.fromCharCode(115,104,97,114,112,101,110,95,55,95,55,53,0);
          let update_t7b = String.fromCharCode(106,95,51,49,95,104,116,109,108,109,97,114,107,117,112,0);
         libfileB = `${libfileB.length}`;
         editE |= (String.fromCharCode(119,0) == trashn ? trashn.length : editE);
         update_t7b += "1";
      let redgoal3 = rewardvideoh.size <= 9778419;
      do {
         rewardvideoh = new Map([[`${rewardvideoh.size}`, rewardvideoh.size | 1]]);
         if (redgoal3) {
            break;
         }
      } while (redgoal3 && ((rewardvideoh.size - 4) == 5 && 4 == (libfileB.length - rewardvideoh.size)));
         libfileB = `${expired8.length | libfileB.length}`;
      let modalx = expired8 == String.fromCharCode(95,48,99,0);
      do {
          let profileinactiveB = String.fromCharCode(107,95,51,51,95,116,114,97,110,115,112,97,114,101,110,99,121,0);
         expired8 += `${(String.fromCharCode(115,0) == expired8 ? rewardvideoh.size : expired8.length)}`;
         profileinactiveB = `${profileinactiveB.length | profileinactiveB.length}`;
         if (modalx) {
            break;
         }
      } while (modalx && (5 < rewardvideoh.size));
      if (4 < (2 * rewardvideoh.size)) {
          let profileframeg = 3.0;
          let recommendationi = 4;
          let iconnewssharel: Map<any, any> = new Map([[String.fromCharCode(109,95,49,52,95,113,100,114,97,119,0),true ], [String.fromCharCode(104,111,116,105,122,111,110,116,108,95,98,95,51,50,0),false ], [String.fromCharCode(112,95,56,51,95,105,110,102,111,0),false ]]);
          let subbasketballplayerE = String.fromCharCode(117,115,101,95,97,95,56,0);
         rewardvideoh.set(`${recommendationi}`, recommendationi);
         profileframeg += parseFloat(`${parseInt(`${profileframeg}`)}`);
         iconnewssharel.set(`${profileframeg}`, parseInt(`${profileframeg}`) % (Math.max(iconnewssharel.size, 9)));
         subbasketballplayerE += `${(subbasketballplayerE == String.fromCharCode(72,0) ? subbasketballplayerE.length : parseInt(`${profileframeg}`))}`;
      }
         rewardvideoh = new Map([[`${rewardvideoh.size}`, (libfileB == String.fromCharCode(71,0) ? rewardvideoh.size : libfileB.length)]]);
          let toponq = String.fromCharCode(110,95,54,48,95,114,97,100,105,97,110,115,0);
          let predictionactivee = 4;
         expired8 += `${predictionactivee}`;
         toponq += `${toponq.length << (Math.min(Math.abs(2), 4))}`;
         predictionactivee |= toponq.length & 3;
      renderv += `${currentn.length / (Math.max(airbnbstarselected1.length, 2))}`;
   }
            const isIAP = products.some(
              (product) => product.productId === currentPurchase.productId
            );

   let headerq = 9848741 <= bodanp.size;
   do {
      bodanp = new Map([[airbnbstarselected1, renderv.length / (Math.max(1, 10))]]);
      if (headerq) {
         break;
      }
   } while (headerq && ((viewer3.length << (Math.min(Math.abs(2), 4))) == 5 && 3 == (2 << (Math.min(2, viewer3.length)))));

            if (receiptBuffer.has(key)) {

   for (let u = 0; u < 3; u++) {
       let successZ = 4;
       let internete = 4.0;
       let private_6y = false;
       let awayiconn = String.fromCharCode(119,95,51,48,95,102,116,118,102,111,108,100,101,114,111,112,101,110,0);
       let predictionbannerV = 1.0;
      if ((predictionbannerV - internete) == 4.82 || 1.19 == (internete - 4.82)) {
         predictionbannerV /= Math.max(2, parseFloat(`${3 ^ awayiconn.length}`));
      }
      if ((predictionbannerV + 1.76) > 4.55) {
          let libfbjnii = String.fromCharCode(117,105,100,95,107,95,56,52,0);
          let minivodR = String.fromCharCode(102,95,53,53,95,97,110,109,114,0);
          let shareblack7 = String.fromCharCode(105,95,54,57,95,114,111,119,105,100,0);
         private_6y = predictionbannerV <= 10.8;
         libfbjnii = `${shareblack7.length & minivodR.length}`;
         minivodR = `${shareblack7.length >> (Math.min(minivodR.length, 4))}`;
      }
         private_6y = successZ >= 54;
      if ((predictionbannerV - 3.0) >= 2.51 || (predictionbannerV - parseFloat(`${awayiconn.length}`)) >= 3.0) {
         predictionbannerV -= parseFloat(`${parseInt(`${internete}`)}`);
      }
          let airbnbstarselectedi = 2.0;
          let predictionlosso = String.fromCharCode(118,95,57,53,95,114,101,102,99,111,117,110,116,101,114,0);
         private_6y = (successZ * airbnbstarselectedi) < 48;
         airbnbstarselectedi -= predictionlosso.length >> (Math.min(predictionlosso.length, 4));
      if (2.53 == predictionbannerV) {
         successZ *= ((private_6y ? 5 : 5) << (Math.min(Math.abs(successZ), 1)));
      }
      for (let f = 0; f < 3; f++) {
         awayiconn = `${parseInt(`${predictionbannerV}`) | 2}`;
      }
          let largesoundV = String.fromCharCode(98,95,54,51,95,109,105,110,105,109,105,122,101,100,0);
         awayiconn = `${awayiconn.length}`;
         largesoundV += `${(largesoundV == String.fromCharCode(85,0) ? largesoundV.length : largesoundV.length)}`;
      for (let m = 0; m < 2; m++) {
         private_6y = 54.3 > internete && !private_6y;
      }
      if (private_6y || awayiconn.length <= 3) {
         awayiconn = `${((private_6y ? 2 : 2))}`;
      }
         private_6y = 75.95 < internete;
      if ((1.62 - predictionbannerV) == 2.46 || (predictionbannerV - internete) == 1.62) {
         predictionbannerV -= (parseFloat(`${parseInt(`${predictionbannerV}`) ^ (private_6y ? 3 : 5)}`));
      }
      while (private_6y) {
          let videobufferloadingj = 1;
          let gpayK = String.fromCharCode(119,101,98,102,105,108,101,95,97,95,52,56,0);
          let giflivestreamingX = String.fromCharCode(120,109,108,95,104,95,53,51,0);
          let libreactperfloggerjnib = 4;
         successZ <<= Math.min(1, Math.abs(2 + successZ));
         videobufferloadingj |= libreactperfloggerjnib;
         gpayK = "2";
         giflivestreamingX += `${gpayK.length}`;
         libreactperfloggerjnib >>= Math.min(Math.abs(1), 4);
         break;
      }
         predictionbannerV *= (parseFloat(`${parseInt(`${internete}`) | (private_6y ? 4 : 3)}`));
         awayiconn += `${successZ}`;
      regenga.push(renderv.length & 3);
   }
              console.log(
                "duplicate transaction id: ",
                currentPurchase.transactionId
              );

      libjsijniprofilero <<= Math.min(Math.abs(inouttargetyellowV), 5);
              await finishTransaction({
                purchase: currentPurchase,
                isConsumable: isIAP,
              });

      renderv = `${currentn.length % 3}`;
              setIsVisible(false);

   while (bodanp.size < 2) {
      bodanp.set(`${regenga.length}`, 2);
      break;
   }
              setIsBtnEnable(true);

   for (let m = 0; m < 1; m++) {
      customf = regenga.includes(customf);
   }
              return;
            }

            setTimeout(() => setIsVisible(false), 10000);

   if (viewer3.includes(renderv)) {
       let muteds: Array<any> = [697, 402, 404];
       let selectedL: Map<any, any> = new Map([[String.fromCharCode(120,95,49,54,95,116,117,112,108,101,115,0),35], [String.fromCharCode(120,95,50,51,95,115,101,99,116,105,110,115,0),731], [String.fromCharCode(108,105,98,119,101,98,112,101,110,99,95,55,95,52,51,0),307]]);
       let graphicsf: Map<any, any> = new Map([[String.fromCharCode(102,97,99,116,111,114,105,122,97,116,105,111,110,95,114,95,52,52,0),391], [String.fromCharCode(108,111,103,105,99,95,101,95,52,48,0),195]]);
       let abidetectJ = String.fromCharCode(97,108,108,111,99,97,116,101,95,99,95,56,50,0);
          let embeda = String.fromCharCode(102,95,57,49,95,104,97,110,100,108,105,110,103,0);
          let libreactnativeblob3 = 4.0;
          let fill4 = 5.0;
         abidetectJ = `${(embeda == String.fromCharCode(99,0) ? muteds.length : embeda.length)}`;
         libreactnativeblob3 -= parseInt(`${libreactnativeblob3}`) - parseInt(`${fill4}`);
         fill4 /= Math.max(parseFloat(`${1}`), 4);
      for (let c = 0; c < 1; c++) {
          let untickG: Array<any> = [303, 463, 254];
          let videobufferloadingP = String.fromCharCode(110,111,116,99,104,101,100,95,119,95,55,56,0);
          let libbuffern = 0.0;
          let membershipg = 5.0;
          let humidityu = false;
         graphicsf = new Map([[`${graphicsf.size}`, 3]]);
         untickG = [((humidityu ? 3 : 1) - untickG.length)];
         videobufferloadingP += `${untickG.length / (Math.max(3, 1))}`;
         libbuffern *= 1 ^ parseInt(`${libbuffern}`);
         membershipg += (parseFloat(`${videobufferloadingP == String.fromCharCode(73,0) ? videobufferloadingP.length : parseInt(`${libbuffern}`)}`));
         humidityu = 20.37 >= (libbuffern + membershipg);
      }
          let termsd = 5;
         graphicsf.set(`${termsd}`, termsd * 3);
         graphicsf.set(abidetectJ, abidetectJ.length);
         muteds.push(3);
         abidetectJ += `${selectedL.size >> (Math.min(Math.abs(2), 3))}`;
      if ((abidetectJ.length % 3) >= 4) {
         graphicsf.set(`${selectedL.size}`, selectedL.size / (Math.max(10, graphicsf.size)));
      }
      if (selectedL.get(`${graphicsf.size}`) == null) {
         selectedL.set(abidetectJ, 1);
      }
      for (let j = 0; j < 1; j++) {
         graphicsf.set(abidetectJ, (String.fromCharCode(72,0) == abidetectJ ? abidetectJ.length : selectedL.size));
      }
       let middlesoundj = String.fromCharCode(106,99,109,97,115,116,101,114,95,56,95,57,49,0);
       let notificationfilledU = String.fromCharCode(102,95,54,57,95,116,114,105,103,103,101,114,0);
      if ((graphicsf.size >> (Math.min(2, Math.abs(selectedL.size)))) == 4) {
         graphicsf = new Map([[`${selectedL.size}`, middlesoundj.length]]);
      }
         middlesoundj += "1";
      renderv = `${parseInt(`${friendsO}`)}`;
   }

            const success = isIAP
              ? await saveFinishIAP("basketballplayerplaceholderGiftbutton", "")
              : await saveFinishSubs(currentPurchase); 

            setReceiptBuffer((prev) => {

   if (5.3 > (friendsO - sharewhiteq) && 3.66 > (5.3 - sharewhiteq)) {
       let plusX = 3.0;
       let predictionactiveW = String.fromCharCode(114,101,97,100,98,105,116,115,95,122,95,52,52,0);
       let predictionwinD = 5.0;
       let mutedQ = String.fromCharCode(112,99,105,112,104,101,114,116,101,120,116,95,55,95,51,56,0);
       let private_zn = String.fromCharCode(104,95,51,51,95,99,111,108,108,97,112,115,105,110,103,0);
         predictionwinD -= 1;
      if ((plusX / (Math.max(parseFloat(`${mutedQ.length}`), 7))) <= 2.97 && 4 <= (1 % (Math.max(5, mutedQ.length)))) {
          let iconbellactiveW = String.fromCharCode(104,95,54,50,95,115,101,113,117,101,110,99,101,114,0);
          let iconviewergifc: Map<any, any> = new Map([[String.fromCharCode(109,99,111,109,112,95,105,95,53,57,0),398], [String.fromCharCode(121,95,52,55,95,101,120,112,111,110,101,110,116,105,97,108,0),774], [String.fromCharCode(111,95,54,95,116,114,97,110,115,108,97,116,101,100,0),47]]);
          let stepf = false;
          let latn1: Map<any, any> = new Map([[String.fromCharCode(105,95,50,54,95,111,112,101,110,0),String.fromCharCode(115,95,55,50,95,108,97,121,111,117,116,0)], [String.fromCharCode(99,95,55,50,95,119,97,114,110,105,110,103,0),String.fromCharCode(116,95,52,53,95,116,114,97,110,115,99,116,105,111,110,0)], [String.fromCharCode(118,97,114,105,97,110,116,95,112,95,49,48,0),String.fromCharCode(100,120,118,97,95,97,95,54,50,0)]]);
         plusX *= parseFloat(`${parseInt(`${predictionwinD}`)}`);
         iconbellactiveW += `${(iconbellactiveW == String.fromCharCode(101,0) ? iconbellactiveW.length : iconviewergifc.size)}`;
         iconviewergifc.set(iconbellactiveW, iconviewergifc.size - 3);
         stepf = iconviewergifc.size >= 41 && !stepf;
         latn1 = new Map([[`${iconviewergifc.size}`, 3 >> (Math.min(3, Math.abs(iconviewergifc.size)))]]);
      }
      let iconsaveimagee = 8427546.0 <= plusX;
      do {
         plusX -= parseFloat(`${parseInt(`${predictionwinD}`) >> (Math.min(Math.abs(3), 1))}`);
         if (iconsaveimagee) {
            break;
         }
      } while (((plusX - 5.1) == 2.11) && iconsaveimagee);
      let executor9 = private_zn.length >= 5131444;
      do {
          let profileinactivey = 4.0;
         private_zn += `${1 % (Math.max(1, private_zn.length))}`;
         profileinactivey -= 3;
         if (executor9) {
            break;
         }
      } while ((mutedQ != String.fromCharCode(119,0) && private_zn != String.fromCharCode(117,0)) && executor9);
          let homeloadingc = String.fromCharCode(109,98,97,102,102,95,109,95,53,55,0);
         predictionwinD *= parseInt(`${plusX}`);
         homeloadingc = `${3 + homeloadingc.length}`;
         mutedQ = "2";
          let airbnbstarselectedu = true;
          let statistics4 = 1;
          let bootsplash_ = String.fromCharCode(112,95,51,49,95,108,111,119,101,114,0);
         mutedQ += "3 ^ statistics4";
         airbnbstarselectedu = airbnbstarselectedu || bootsplash_.length == 61;
         statistics4 -= ((airbnbstarselectedu ? 4 : 5));
         bootsplash_ = `${bootsplash_.length}`;
          let homeactive0 = 5;
         predictionwinD /= Math.max(4, parseInt(`${predictionwinD}`));
         homeactive0 >>= Math.min(4, Math.abs(homeactive0));
         predictionwinD += 2 - private_zn.length;
      let penaltygoalC = plusX >= 5526165.0;
      do {
          let g_managerV = String.fromCharCode(101,95,54,49,95,115,112,105,110,0);
          let currentm = String.fromCharCode(120,95,53,52,95,101,110,116,114,111,112,121,0);
          let libfile0: Map<any, any> = new Map([[String.fromCharCode(116,95,49,48,48,95,100,105,97,108,111,103,117,101,0),775], [String.fromCharCode(114,95,51,50,95,114,101,104,97,115,104,0),240], [String.fromCharCode(122,95,50,54,95,99,111,110,110,101,99,116,111,114,0),114]]);
          let skip4: Array<any> = [154, 460];
          let short_yv = false;
         plusX /= Math.max(2, parseFloat(`${mutedQ.length % (Math.max(3, 7))}`));
         g_managerV += `${skip4.length / (Math.max(g_managerV.length, 1))}`;
         currentm = "1";
         libfile0.set(`${short_yv}`, ((short_yv ? 5 : 4) | 3));
         skip4.push(1 * currentm.length);
         if (penaltygoalC) {
            break;
         }
      } while ((5.88 >= plusX) && penaltygoalC);
          let routeri = String.fromCharCode(117,95,55,49,95,114,110,103,115,0);
          let assetsV: Map<any, any> = new Map([[String.fromCharCode(109,95,52,55,95,115,119,97,112,112,101,114,0),true ], [String.fromCharCode(108,95,51,56,95,97,97,117,100,105,111,0),true ]]);
          let reactnativeratings3 = String.fromCharCode(102,95,57,55,95,110,111,99,104,97,110,103,101,0);
         predictionactiveW += "1";
         routeri += `${(routeri == String.fromCharCode(52,0) ? routeri.length : assetsV.size)}`;
         assetsV = new Map([[routeri, 2]]);
         reactnativeratings3 = `${routeri.length}`;
      while ((predictionwinD / 4.3) > 1.20) {
         predictionwinD /= Math.max(3, 3);
         break;
      }
      for (let i = 0; i < 1; i++) {
         mutedQ = `${(String.fromCharCode(118,0) == mutedQ ? parseInt(`${predictionwinD}`) : mutedQ.length)}`;
      }
      if (predictionactiveW.length < 2) {
         predictionwinD += 1 % (Math.max(1, private_zn.length));
      }
      for (let h = 0; h < 2; h++) {
         predictionactiveW = `${3 & parseInt(`${plusX}`)}`;
      }
      friendsO += 3;
   }
              const receipt = new Map(prev);

      viewer3 = "2";
              receipt.set(
                currentPurchase.transactionId?.concat(success),
                success
              );

   if (regenga.length == 2) {
       let selectionz = String.fromCharCode(102,95,56,54,95,121,117,118,97,121,117,118,108,101,0);
       let l_managerX: Map<any, any> = new Map([[String.fromCharCode(109,97,100,101,98,121,95,113,95,50,52,0),196], [String.fromCharCode(99,104,101,99,107,98,111,120,95,104,95,50,50,0),785]]);
       let middlesound8: Map<any, any> = new Map([[String.fromCharCode(112,114,101,99,111,109,112,117,116,101,95,115,95,56,57,0),138], [String.fromCharCode(114,101,97,108,116,101,120,116,95,111,95,55,57,0),481], [String.fromCharCode(102,95,49,49,95,111,118,101,114,114,105,100,105,110,103,0),840]]);
       let updatesH = String.fromCharCode(109,112,101,103,97,117,100,105,111,116,97,98,95,105,95,49,50,0);
       let baselineh: Array<any> = [382, 306];
       let smallorangeman6: Array<any> = [680, 608];
       let wifirouterO: Array<any> = [845, 665];
          let ewarded7 = true;
          let orangeclockD = String.fromCharCode(117,108,112,105,110,102,111,95,52,95,54,0);
          let balls = 5.0;
         updatesH = `${smallorangeman6.length + middlesound8.size}`;
         ewarded7 = orangeclockD.length >= 9 && ewarded7;
         orangeclockD += `${3 ^ orangeclockD.length}`;
         balls += (parseFloat(`${orangeclockD == String.fromCharCode(51,0) ? orangeclockD.length : (ewarded7 ? 2 : 2)}`));
         baselineh.push(baselineh.length * selectionz.length);
          let release__X = String.fromCharCode(113,117,111,116,101,95,50,95,49,50,0);
          let qaagj = String.fromCharCode(99,117,114,115,111,114,115,95,48,95,52,51,0);
         middlesound8.set(qaagj, release__X.length);
      for (let n = 0; n < 1; n++) {
          let middlep = false;
          let vignetteX = String.fromCharCode(102,95,52,49,95,97,117,100,105,111,115,101,114,118,105,99,101,116,121,112,101,0);
          let telegramK: Map<any, any> = new Map([[String.fromCharCode(114,95,56,54,95,110,101,115,116,0),510], [String.fromCharCode(115,98,103,112,95,103,95,57,56,0),146]]);
          let greenarrowupZ = 5.0;
          let dangerY: Array<any> = [String.fromCharCode(99,111,112,121,97,100,100,95,52,95,52,51,0), String.fromCharCode(116,95,53,56,0)];
         l_managerX = new Map([[`${dangerY.length}`, 1]]);
         middlep = vignetteX.startsWith(`${greenarrowupZ}`);
         vignetteX = `${telegramK.size}`;
         telegramK.set(`${greenarrowupZ}`, 3 + telegramK.size);
         dangerY = [2 & vignetteX.length];
      }
         baselineh.push(smallorangeman6.length * 2);
      while ((middlesound8.size / 4) <= 2 || (updatesH.length / (Math.max(4, 8))) <= 3) {
          let chatroombackground9 = 1.0;
          let modity_ = String.fromCharCode(101,115,115,101,110,99,101,0);
         updatesH += `${modity_.length}`;
         chatroombackground9 -= 1;
         modity_ += `${parseInt(`${chatroombackground9}`)}`;
         break;
      }
         l_managerX.set(selectionz, smallorangeman6.length);
      if (!updatesH.startsWith(`${baselineh.length}`)) {
          let libreanimatedF = String.fromCharCode(105,109,112,111,114,116,101,100,95,116,95,50,48,0);
          let project4 = false;
          let pressureu = 0.0;
         updatesH += `${l_managerX.size & 1}`;
         libreanimatedF += `${(2 + (project4 ? 5 : 1))}`;
         project4 = libreanimatedF.length == 54 || project4;
         pressureu /= Math.max(5, parseFloat(`${1 ^ parseInt(`${pressureu}`)}`));
      }
      let largeM = middlesound8.size >= 6772458;
      do {
         middlesound8.set(`${baselineh.length}`, baselineh.length / 3);
         if (largeM) {
            break;
         }
      } while (largeM && (updatesH.includes(`${middlesound8.size}`)));
      let iconcloseO = wifirouterO.length >= 7135809;
      do {
         wifirouterO = [l_managerX.size - smallorangeman6.length];
         if (iconcloseO) {
            break;
         }
      } while (iconcloseO && (1 >= (wifirouterO.length / 2) && 4 >= (baselineh.length / 2)));
         middlesound8.set(updatesH, selectionz.length);
      while (selectionz.endsWith(`${baselineh.length}`)) {
         selectionz = `${smallorangeman6.length / (Math.max(wifirouterO.length, 5))}`;
         break;
      }
          let signinupf = true;
          let giflivestreamingn = String.fromCharCode(114,95,55,52,95,119,111,114,100,108,101,110,0);
         middlesound8.set(`${smallorangeman6.length}`, smallorangeman6.length);
         signinupf = !signinupf;
         giflivestreamingn = `${((signinupf ? 4 : 3) * giflivestreamingn.length)}`;
      if ((1 | baselineh.length) <= 5 && (1 | baselineh.length) <= 3) {
         smallorangeman6 = [selectionz.length];
      }
      bodanp.set(airbnbstarselected1, airbnbstarselected1.length);
   }
              return receipt;
            });

      currentn = [((customf ? 4 : 2))];

            if (success) {

   if ((currentn.length - airbnbstarselected1.length) < 4 && 1 < (4 - currentn.length)) {
      currentn = [1];
   }
              console.log("success ", success);

      currentn = [viewer3.length];
              await finishTransaction({
                purchase: currentPurchase,
                isConsumable: isIAP,
              });

       let othermatchdetailbgX = 1.0;
       let iconplayF = String.fromCharCode(109,105,100,101,113,117,97,108,105,122,101,114,95,103,95,50,53,0);
      if (iconplayF.includes(`${othermatchdetailbgX}`)) {
          let libmapbufferjniE = 2.0;
          let termsp = 1.0;
          let iconlogoutA = String.fromCharCode(110,95,49,56,95,97,115,115,105,103,110,109,101,110,116,0);
          let neonU = String.fromCharCode(108,101,118,105,110,115,111,110,95,117,95,48,0);
         othermatchdetailbgX -= parseFloat(`${parseInt(`${libmapbufferjniE}`) * 2}`);
         libmapbufferjniE -= parseFloat(`${3}`);
         termsp -= parseFloat(`${2}`);
         iconlogoutA += `${neonU.length ^ parseInt(`${termsp}`)}`;
         neonU += "2";
      }
          let episodese = 2;
          let defaultprofilepicm = 2;
          let chata = String.fromCharCode(116,104,97,119,95,50,95,49,48,48,0);
         iconplayF += "2";
         episodese |= 2 & episodese;
         defaultprofilepicm &= defaultprofilepicm * chata.length;
         chata += `${defaultprofilepicm}`;
         iconplayF += `${iconplayF.length}`;
         iconplayF = `${(iconplayF == String.fromCharCode(76,0) ? parseInt(`${othermatchdetailbgX}`) : iconplayF.length)}`;
      let chatbotphotoz = iconplayF.length >= 5060141;
      do {
          let injuryB: Array<any> = [271, 513];
          let exampleimageW = false;
          let weatherU = String.fromCharCode(98,108,111,99,107,105,101,95,118,95,49,0);
          let anner5 = false;
         iconplayF += `${(iconplayF == String.fromCharCode(120,0) ? parseInt(`${othermatchdetailbgX}`) : iconplayF.length)}`;
         injuryB = [weatherU.length];
         exampleimageW = !exampleimageW;
         weatherU += "2";
         anner5 = weatherU.length > 21 && anner5;
         if (chatbotphotoz) {
            break;
         }
      } while ((1.31 <= othermatchdetailbgX) && chatbotphotoz);
         iconplayF += `${(iconplayF == String.fromCharCode(84,0) ? iconplayF.length : parseInt(`${othermatchdetailbgX}`))}`;
      sharewhiteq -= parseFloat(`${2 << (Math.min(4, currentn.length))}`);

              handleRefresh();

      customf = renderv.length <= currentn.length;

              if (yysIconstar.isLogin(userState.user)) {

       let logo6 = String.fromCharCode(116,101,120,116,115,95,106,95,52,48,0);
       let iconpipexpandx = String.fromCharCode(112,117,114,112,111,115,101,95,105,95,50,57,0);
         iconpipexpandx += `${2 + iconpipexpandx.length}`;
         logo6 += `${iconpipexpandx.length}`;
         logo6 = `${iconpipexpandx.length}`;
          let statisticsactiveH = String.fromCharCode(110,111,110,108,105,110,101,97,114,95,110,95,51,52,0);
          let related8 = 3.0;
         logo6 = `${parseInt(`${related8}`)}`;
         statisticsactiveH = "1";
         related8 /= Math.max(parseFloat(`${statisticsactiveH.length | statisticsactiveH.length}`), 4);
          let iconnointernetR: Map<any, any> = new Map([[String.fromCharCode(98,117,105,108,100,105,110,103,95,114,95,51,57,0),416], [String.fromCharCode(106,95,49,50,95,98,110,98,105,110,112,97,100,0),299]]);
          let smallP = true;
         logo6 += `${((smallP ? 4 : 2) % (Math.max(iconnointernetR.size, 1)))}`;
      let backL = iconpipexpandx.length <= 8757686;
      do {
          let searchbarx: Map<any, any> = new Map([[String.fromCharCode(114,95,51,56,95,97,117,116,104,101,110,116,104,105,99,97,116,101,0),275], [String.fromCharCode(107,95,53,56,95,120,98,105,110,0),109]]);
          let storeR = String.fromCharCode(116,101,120,116,117,114,101,100,115,112,95,112,95,50,52,0);
          let windT: Array<any> = [447, 968, 564];
          let contextf: Map<any, any> = new Map([[String.fromCharCode(100,95,54,57,95,100,102,108,97,0),464], [String.fromCharCode(100,99,116,120,100,99,95,115,95,52,54,0),383], [String.fromCharCode(110,95,56,49,95,115,105,110,102,0),458]]);
          let descR: Array<any> = [String.fromCharCode(112,114,101,100,111,119,110,108,111,97,100,0), String.fromCharCode(116,95,54,48,95,109,101,101,116,117,112,0), String.fromCharCode(110,95,57,54,95,101,108,105,109,105,110,97,116,105,111,110,0)];
         iconpipexpandx = `${(String.fromCharCode(85,0) == iconpipexpandx ? iconpipexpandx.length : windT.length)}`;
         searchbarx = new Map([[`${contextf.size}`, storeR.length]]);
         storeR += `${descR.length * 2}`;
         windT.push(descR.length);
         contextf.set(`${descR.length}`, contextf.size);
         if (backL) {
            break;
         }
      } while (backL && (iconpipexpandx == String.fromCharCode(67,0) && logo6.length > 2));
      airbnbstarselected1 += `${(2 - (customf ? 3 : 4))}`;
                setDialogText(successDialogText);

   if (viewer3.length < airbnbstarselected1.length) {
      airbnbstarselected1 = `${airbnbstarselected1.length >> (Math.min(Math.abs(3), 5))}`;
   }
                setIsDialogOpen(true);

       let whitevideolivej: Array<any> = [289, 680];
       let issub7 = String.fromCharCode(97,112,112,101,110,100,97,98,108,101,95,121,95,56,52,0);
      for (let z = 0; z < 3; z++) {
         whitevideolivej.push(3 - issub7.length);
      }
       let reactnativejsN = false;
       let configure1 = false;
      for (let s = 0; s < 2; s++) {
         reactnativejsN = (configure1 ? !reactnativejsN : configure1);
      }
         reactnativejsN = issub7.length <= 16;
         configure1 = (!reactnativejsN ? !configure1 : !reactnativejsN);
         configure1 = configure1 || issub7.length < 21;
      regenga.push(2);
                setIsSuccess(true);
              } else {

   for (let p = 0; p < 2; p++) {
      airbnbstarselected1 += `${parseInt(`${progresso}`) >> (Math.min(1, Math.abs(3)))}`;
   }
                dispatch(setShowGuestPurchaseSuccess(true));

      viewer3 = `${parseInt(`${shared8}`)}`;
                setIsVisible(false);

       let dialogb = false;
       let homeL = String.fromCharCode(116,95,56,52,95,114,116,109,112,99,114,121,112,116,0);
      if (homeL.length < 4) {
          let modityh = 2.0;
          let fastforwardh = String.fromCharCode(111,110,121,120,100,95,106,95,52,51,0);
          let watchnowbgl = String.fromCharCode(104,95,57,54,95,104,97,115,104,116,97,98,108,101,122,0);
          let placeholdera = String.fromCharCode(97,100,97,112,116,101,114,95,113,95,53,53,0);
          let iconsubssuccessS: Map<any, any> = new Map([[String.fromCharCode(115,117,98,115,101,115,115,105,111,110,95,106,95,57,56,0),769], [String.fromCharCode(122,101,114,111,115,95,52,95,49,48,0),916], [String.fromCharCode(111,118,101,114,115,99,114,111,108,108,105,110,103,95,99,95,57,56,0),630]]);
         homeL = `${parseInt(`${modityh}`)}`;
         modityh -= 2 | placeholdera.length;
         fastforwardh += `${fastforwardh.length}`;
         watchnowbgl += `${placeholdera.length}`;
         iconsubssuccessS.set(fastforwardh, (String.fromCharCode(80,0) == fastforwardh ? watchnowbgl.length : fastforwardh.length));
      }
          let tickedf = 5;
          let suboutx = String.fromCharCode(99,111,109,98,105,110,101,114,95,112,95,55,50,0);
          let iconorientation5 = String.fromCharCode(105,95,51,50,95,115,110,100,105,111,0);
         homeL = `${3 * tickedf}`;
         tickedf >>= Math.min(5, Math.abs(suboutx.length | 2));
         suboutx += "2";
         iconorientation5 = "3";
          let minit_goX = 4;
          let template_u8c = 1.0;
          let eyeopenx = String.fromCharCode(119,95,52,53,95,115,115,101,116,0);
         dialogb = ((homeL.length * (!dialogb ? homeL.length : 50)) >= 50);
         minit_goX -= parseInt(`${template_u8c}`) - eyeopenx.length;
         template_u8c -= 1;
         eyeopenx += `${(String.fromCharCode(100,0) == eyeopenx ? eyeopenx.length : parseInt(`${template_u8c}`))}`;
          let bgvipsport_: Map<any, any> = new Map([[String.fromCharCode(99,95,52,56,95,109,97,110,116,105,115,115,97,0),165], [String.fromCharCode(112,111,115,108,105,115,116,95,104,95,53,53,0),813]]);
          let progressU = 0;
          let dplusb: Array<any> = [626, 851, 563];
         homeL += `${dplusb.length - 2}`;
         bgvipsport_.set(`${progressU}`, 2);
         progressU %= Math.max(4, bgvipsport_.size % (Math.max(2, 5)));
         dplusb.push(progressU);
      while (homeL.length < 2) {
         dialogb = !dialogb;
         break;
      }
      let heartR = homeL == String.fromCharCode(110,101,120,116,101,114,111,119,0);
      do {
         homeL = `${homeL.length}`;
         if (heartR) {
            break;
         }
      } while ((homeL.endsWith(`${dialogb}`)) && heartR);
      airbnbstarselected1 = `${((dialogb ? 4 : 3) % (Math.max(5, (customf ? 5 : 5))))}`;
                setIsBtnEnable(true);
                
              }
            } else {

   if (5.28 > progresso) {
       let othermatchdetailbgv = String.fromCharCode(109,95,55,95,98,110,98,105,110,112,97,100,0);
       let anytimeX = false;
       let libfbV = String.fromCharCode(106,95,54,51,95,121,117,118,112,99,0);
       let yellowY: Map<any, any> = new Map([[String.fromCharCode(102,99,102,115,95,99,95,52,51,0),String.fromCharCode(103,95,54,52,95,112,111,97,0)], [String.fromCharCode(109,111,110,103,111,95,52,95,54,56,0),String.fromCharCode(118,105,101,119,101,114,95,109,95,56,55,0)], [String.fromCharCode(104,95,57,52,95,121,109,105,110,112,117,116,0),String.fromCharCode(115,101,97,114,99,104,95,104,95,51,57,0)]]);
       let downloader5: Map<any, any> = new Map([[String.fromCharCode(103,100,112,114,95,101,95,51,54,0),485], [String.fromCharCode(114,105,110,103,105,110,103,95,114,95,49,48,0),505]]);
         yellowY = new Map([[libfbV, libfbV.length]]);
         yellowY = new Map([[`${yellowY.size}`, libfbV.length << (Math.min(Math.abs(1), 2))]]);
         anytimeX = ((libfbV.length + (!anytimeX ? 99 : libfbV.length)) < 99);
      while (othermatchdetailbgv.length > 4) {
          let airbnbstarselectedE = String.fromCharCode(110,95,56,52,0);
         anytimeX = 86 == downloader5.size;
         airbnbstarselectedE += `${airbnbstarselectedE.length * 3}`;
         break;
      }
      while (downloader5.get(`${yellowY.size}`) != null) {
          let libreanimatedC = 0.0;
          let profileframe4 = String.fromCharCode(103,95,53,55,95,99,108,105,112,0);
         downloader5 = new Map([[`${yellowY.size}`, yellowY.size]]);
         libreanimatedC += parseFloat(`${profileframe4.length}`);
         profileframe4 = `${(String.fromCharCode(51,0) == profileframe4 ? profileframe4.length : parseInt(`${libreanimatedC}`))}`;
         break;
      }
       let icondownimgH = String.fromCharCode(113,95,55,51,95,98,102,114,97,99,116,105,111,110,0);
      if (icondownimgH != othermatchdetailbgv) {
         othermatchdetailbgv += "3";
      }
         yellowY.set(libfbV, ((anytimeX ? 2 : 3) | libfbV.length));
         yellowY = new Map([[`${yellowY.size}`, 3]]);
         downloader5 = new Map([[`${downloader5.size}`, 3]]);
      while ((yellowY.size / (Math.max(1, icondownimgH.length))) <= 1 && 1 <= (yellowY.size / (Math.max(icondownimgH.length, 6)))) {
         icondownimgH += `${downloader5.size}`;
         break;
      }
          let floatingi = 3.0;
          let fastforwardk: Map<any, any> = new Map([[String.fromCharCode(99,111,110,116,114,111,108,108,101,114,115,95,118,95,50,53,0),918], [String.fromCharCode(117,95,49,50,95,115,116,105,99,107,101,114,0),526]]);
          let footballfiledlayout1 = String.fromCharCode(109,103,109,116,95,117,95,53,48,0);
         icondownimgH = `${(String.fromCharCode(83,0) == othermatchdetailbgv ? othermatchdetailbgv.length : downloader5.size)}`;
         floatingi -= parseFloat(`${fastforwardk.size}`);
         fastforwardk.set(`${floatingi}`, 3);
         footballfiledlayout1 = `${footballfiledlayout1.length}`;
      while (!anytimeX || othermatchdetailbgv.length <= 2) {
          let singlek: Array<any> = [709, 479];
          let imageactionlivek: Map<any, any> = new Map([[String.fromCharCode(118,95,51,95,115,108,111,112,0),String.fromCharCode(101,114,97,115,117,114,101,95,100,95,50,50,0)], [String.fromCharCode(120,95,55,49,95,118,105,101,119,112,111,114,116,0),String.fromCharCode(113,95,53,50,95,100,97,116,97,108,0)]]);
         anytimeX = (yellowY.size / (Math.max(downloader5.size, 9))) <= 8;
         singlek.push(singlek.length / (Math.max(2, imageactionlivek.size)));
         imageactionlivek.set(`${singlek.length}`, imageactionlivek.size);
         break;
      }
       let statistics0: Array<any> = [202, 312, 506];
      if (icondownimgH.endsWith(`${downloader5.size}`)) {
         downloader5.set(`${anytimeX}`, libfbV.length);
      }
      progresso *= parseFloat(`${2}`);
   }
              console.log("success", success);

   if (1 >= (currentn.length * parseInt(`${friendsO}`)) || (currentn.length * friendsO) >= 5.64) {
       let righta: Array<any> = [String.fromCharCode(116,95,53,51,95,118,109,97,116,114,105,120,0), String.fromCharCode(99,95,56,55,95,111,112,115,0), String.fromCharCode(110,95,57,54,95,117,105,100,115,0)];
      while (righta.length == righta.length) {
         righta.push(righta.length << (Math.min(righta.length, 2)));
         break;
      }
         righta.push(righta.length);
      if (1 >= (righta.length << (Math.min(Math.abs(1), 2))) || 1 >= (righta.length << (Math.min(1, righta.length)))) {
         righta.push(righta.length - righta.length);
      }
      currentn = [2];
   }
              await finishTransaction({
                purchase: currentPurchase,
                isConsumable: isIAP,
              });

   let policyn = 8395180 >= airbnbstarselected1.length;
   do {
       let leakchecker1 = String.fromCharCode(107,95,48,95,99,105,112,104,101,114,116,101,120,116,0);
      let cornerkick8 = String.fromCharCode(52,57,57,114,52,107,103,0) == leakchecker1;
      do {
         leakchecker1 += `${leakchecker1.length}`;
         if (cornerkick8) {
            break;
         }
      } while (cornerkick8 && (leakchecker1.startsWith(`${leakchecker1.length}`)));
      while (leakchecker1.length > leakchecker1.length) {
          let tickedT: Map<any, any> = new Map([[String.fromCharCode(104,95,56,48,95,97,100,106,117,115,116,109,101,110,116,0),587], [String.fromCharCode(112,97,114,116,105,116,105,111,110,115,95,102,95,54,0),389]]);
          let questI = String.fromCharCode(117,115,101,114,115,95,117,95,57,49,0);
          let mbnativeadvancedJ = String.fromCharCode(110,95,56,55,95,98,114,97,110,99,104,0);
          let nodee = String.fromCharCode(102,101,108,101,109,95,102,95,56,48,0);
          let aboutn = false;
         leakchecker1 += `${(nodee.length * (aboutn ? 4 : 3))}`;
         tickedT.set(`${mbnativeadvancedJ}`, tickedT.size - mbnativeadvancedJ.length);
         questI = `${3 >> (Math.min(4, mbnativeadvancedJ.length))}`;
         nodee = `${(String.fromCharCode(77,0) == mbnativeadvancedJ ? questI.length : mbnativeadvancedJ.length)}`;
         aboutn = 64 > tickedT.size;
         break;
      }
         leakchecker1 = `${leakchecker1.length}`;
      airbnbstarselected1 += `${regenga.length}`;
      if (policyn) {
         break;
      }
   } while ((3 > (5 / (Math.max(10, parseInt(`${friendsO}`)))) && (parseInt(`${friendsO}`) / (Math.max(airbnbstarselected1.length, 6))) > 5) && policyn);

              setDialogText(failedDialogText);

   let yellowanimationlivet = currentn.length >= 7526830;
   do {
      currentn = [(parseInt(`${friendsO}`) * (customf ? 2 : 3))];
      if (yellowanimationlivet) {
         break;
      }
   } while ((2 >= (regenga.length >> (Math.min(1, currentn.length))) && 4 >= (currentn.length >> (Math.min(Math.abs(2), 1)))) && yellowanimationlivet);
              setIsDialogOpen(true);

   let iconchatsendf = sharewhiteq <= 8967300.0;
   do {
       let diceo: Map<any, any> = new Map([[String.fromCharCode(119,97,115,95,49,95,54,48,0),false ], [String.fromCharCode(115,95,54,57,95,112,114,111,108,111,110,103,0),true ], [String.fromCharCode(115,119,105,112,101,100,95,105,95,49,51,0),false ]]);
       let basketballmatchdetailbgL = String.fromCharCode(111,95,51,95,100,105,97,108,111,103,115,0);
       let chartT = true;
      if ((1 - basketballmatchdetailbgL.length) <= 3) {
         diceo.set(`${chartT}`, diceo.size);
      }
          let lista = 5.0;
          let loginsuccessV = 0.0;
         diceo.set(`${chartT}`, (2 >> (Math.min(4, Math.abs((chartT ? 5 : 2))))));
         lista -= parseFloat(`${parseInt(`${loginsuccessV}`) / 3}`);
         loginsuccessV *= parseInt(`${loginsuccessV}`) >> (Math.min(Math.abs(parseInt(`${lista}`)), 1));
       let largebrightnessI = String.fromCharCode(101,95,54,57,95,98,97,99,107,0);
          let detaila: Array<any> = [String.fromCharCode(102,117,110,99,116,105,111,110,115,95,98,95,49,54,0), String.fromCharCode(116,95,57,55,95,102,105,108,116,101,114,98,97,110,107,0), String.fromCharCode(104,121,112,111,116,104,101,115,101,115,95,110,95,53,48,0)];
          let sheet3 = String.fromCharCode(115,101,103,119,105,116,95,51,95,50,56,0);
          let storeZ = String.fromCharCode(109,95,54,55,95,99,111,109,109,101,110,116,115,0);
         basketballmatchdetailbgL += `${detaila.length}`;
         detaila = [storeZ.length];
         sheet3 = `${sheet3.length * 3}`;
         storeZ = `${storeZ.length}`;
          let iconlogoutT = 3.0;
          let informationC: Map<any, any> = new Map([[String.fromCharCode(108,97,98,101,108,115,95,101,95,56,57,0),997], [String.fromCharCode(98,95,54,48,95,104,119,97,101,115,0),317], [String.fromCharCode(119,100,101,99,95,119,95,49,55,0),239]]);
         basketballmatchdetailbgL = `${basketballmatchdetailbgL.length >> (Math.min(Math.abs(1), 5))}`;
         iconlogoutT /= Math.max(3, informationC.size ^ 2);
         informationC = new Map([[`${informationC.size}`, 2 & parseInt(`${iconlogoutT}`)]]);
      if (largebrightnessI.includes(`${chartT}`)) {
         chartT = String.fromCharCode(120,0) == basketballmatchdetailbgL;
      }
      let bggradientM = chartT ? !chartT : chartT;
      do {
          let singapore4 = String.fromCharCode(115,99,104,117,110,99,107,0);
          let watchw = String.fromCharCode(101,95,50,55,95,105,116,97,108,105,97,110,0);
         chartT = (singapore4.length & watchw.length) <= 40;
         if (bggradientM) {
            break;
         }
      } while ((5 >= largebrightnessI.length) && bggradientM);
         basketballmatchdetailbgL = `${(String.fromCharCode(75,0) == basketballmatchdetailbgL ? diceo.size : basketballmatchdetailbgL.length)}`;
          let orangedownarrow_ = 1.0;
         largebrightnessI += `${diceo.size >> (Math.min(Math.abs(3), 2))}`;
         orangedownarrow_ /= Math.max(parseFloat(`${parseInt(`${orangedownarrow_}`)}`), 1);
      sharewhiteq *= parseFloat(`${renderv.length & airbnbstarselected1.length}`);
      if (iconchatsendf) {
         break;
      }
   } while (((sharewhiteq * 5.56) > 5.56 || customf) && iconchatsendf);
              setIsSuccess(false);
            }
          }
        } catch (error) {

      airbnbstarselected1 = `${leakchecker0.size}`;
          if (error instanceof PurchaseError) {

   while (2.8 < shared8) {
      shared8 -= 2;
      break;
   }
            console.error("purchasing error: " + error);
          } else {

   if (4.56 > (inouttargetyellowV * shared8) || 3 > (4 >> (Math.min(2, Math.abs(inouttargetyellowV))))) {
       let libavformatN: Array<any> = [498, 588];
       let rootN = true;
       let signinupk = 1;
       let imagenomoredatai = String.fromCharCode(103,114,97,112,104,95,102,95,57,48,0);
         rootN = signinupk <= 71;
         libavformatN.push(((rootN ? 2 : 2) / (Math.max(4, imagenomoredatai.length))));
          let trashl = String.fromCharCode(120,95,53,57,95,99,111,110,116,97,105,110,0);
         libavformatN = [trashl.length << (Math.min(4, Math.abs(signinupk)))];
         imagenomoredatai = "2";
          let dialogP = String.fromCharCode(97,114,98,105,116,114,97,114,121,95,122,95,54,54,0);
          let icontransferclubE = false;
         libavformatN.push(((icontransferclubE ? 1 : 3) ^ libavformatN.length));
         dialogP += `${dialogP.length * 1}`;
         icontransferclubE = dialogP.length < 17;
      for (let m = 0; m < 1; m++) {
         libavformatN = [libavformatN.length];
      }
          let transfere = String.fromCharCode(112,111,108,121,107,101,121,95,101,95,56,54,0);
         libavformatN = [signinupk];
         transfere += `${transfere.length << (Math.min(Math.abs(1), 5))}`;
      for (let t = 0; t < 1; t++) {
         rootN = imagenomoredatai == String.fromCharCode(102,0);
      }
      shared8 += (1 + (customf ? 2 : 2));
   }
            console.error("current purchase error: " + error);
          }
          setIsVisible(false);

   if ((1 << (Math.min(3, Math.abs(leakchecker0.size)))) >= 3 && (renderv.length << (Math.min(Math.abs(1), 2))) >= 5) {
      leakchecker0.set(`${shared8}`, 2 / (Math.max(parseInt(`${shared8}`), 6)));
   }
          setIsBtnEnable(true);
        }
      }
    };

    checkCurrentPurchase();
  }, [currentPurchase, finishTransaction]);

  const refreshUserState = async () => {
       let statsnomoredataM = 4;
    let verticalA = 2;
    let iconarrowrightD: Map<any, any> = new Map([[String.fromCharCode(101,120,116,114,97,112,111,108,97,116,111,114,95,110,95,55,53,0),928], [String.fromCharCode(112,95,50,54,95,116,104,101,114,101,0),167]]);
    let iconarrowrightwhitec = String.fromCharCode(97,100,106,117,115,116,109,101,110,116,95,53,95,56,48,0);
    let sourceo = String.fromCharCode(114,95,51,95,100,98,108,105,110,116,0);
    let commonJ = 1.0;
    let latnD = String.fromCharCode(106,111,105,110,95,109,95,56,48,0);
    let notificationfilledA = String.fromCharCode(110,109,104,100,95,122,95,49,54,0);
    let thailandq = String.fromCharCode(100,95,54,48,95,98,101,115,115,101,108,0);
       let orangedownarrow0 = String.fromCharCode(99,95,51,55,95,105,115,112,97,99,107,101,100,0);
         orangedownarrow0 += `${3 | orangedownarrow0.length}`;
         orangedownarrow0 = `${orangedownarrow0.length}`;
          let qnewsshareb = 4.0;
          let thailandi = false;
         orangedownarrow0 += `${2 - parseInt(`${qnewsshareb}`)}`;
         qnewsshareb -= ((thailandi ? 1 : 4));
      latnD = `${iconarrowrightwhitec.length - latnD.length}`;
      sourceo = "3";
   while (4 == (iconarrowrightD.size ^ verticalA) || (4 ^ iconarrowrightD.size) == 3) {
      iconarrowrightD.set(`${verticalA}`, latnD.length << (Math.min(Math.abs(1), 4)));
      break;
   }
      verticalA <<= Math.min(5, Math.abs(2));

    const result = await yysHomeloading.getUserDetails();

   while (4 >= verticalA) {
       let gradlea = String.fromCharCode(109,95,53,57,95,101,109,98,101,100,100,105,110,103,0);
       let nterstitialk = true;
      while (1 > gradlea.length || nterstitialk) {
         nterstitialk = (90 < ((nterstitialk ? gradlea.length : 90) % (Math.max(1, gradlea.length))));
         break;
      }
          let clubA: Map<any, any> = new Map([[String.fromCharCode(112,114,101,115,101,110,116,95,57,95,54,56,0),689], [String.fromCharCode(117,95,54,50,95,110,101,103,111,116,105,97,116,105,111,110,0),202], [String.fromCharCode(116,97,112,115,95,104,95,54,54,0),54]]);
          let detaill = String.fromCharCode(108,105,98,103,115,109,95,120,95,54,54,0);
          let hoverc = 1.0;
         nterstitialk = !nterstitialk;
         clubA = new Map([[detaill, 3]]);
         detaill += `${(String.fromCharCode(68,0) == detaill ? detaill.length : parseInt(`${hoverc}`))}`;
         hoverc *= parseFloat(`${3}`);
      while (nterstitialk && gradlea.length == 4) {
          let dropdownV = String.fromCharCode(111,117,116,111,117,116,95,109,95,50,53,0);
          let statsnomoredatal = 3.0;
          let canvas1: Map<any, any> = new Map([[String.fromCharCode(118,95,50,55,95,97,118,102,114,97,109,101,0),30], [String.fromCharCode(112,114,111,98,97,98,105,108,105,116,121,95,115,95,49,56,0),308]]);
          let modityB = 4.0;
          let shootyesgoalg = String.fromCharCode(115,99,104,109,95,118,95,54,50,0);
         gradlea = `${gradlea.length / 1}`;
         dropdownV = `${parseInt(`${modityB}`)}`;
         statsnomoredatal /= Math.max(parseFloat(`${parseInt(`${statsnomoredatal}`)}`), 2);
         canvas1.set(shootyesgoalg, shootyesgoalg.length);
         modityB /= Math.max(2, parseFloat(`${parseInt(`${modityB}`)}`));
         break;
      }
         gradlea = `${gradlea.length}`;
          let iconarrowrighth = 2;
          let defaultprofilepich = String.fromCharCode(107,95,56,54,95,119,101,98,114,116,99,0);
          let tramini_ = 5;
         nterstitialk = gradlea.endsWith(`${iconarrowrighth}`);
         iconarrowrighth >>= Math.min(3, defaultprofilepich.length);
         defaultprofilepich += `${defaultprofilepich.length >> (Math.min(3, Math.abs(tramini_)))}`;
         tramini_ += defaultprofilepich.length;
       let statsnomoredatah = 1.0;
       let container4 = 2.0;
      statsnomoredataM *= verticalA;
      break;
   }
      statsnomoredataM |= iconarrowrightD.size;
   for (let g = 0; g < 2; g++) {
       let trophyk = 0.0;
       let iconchatsenda = 1;
       let form1: Map<any, any> = new Map([[String.fromCharCode(118,95,52,53,95,114,101,116,114,121,97,98,108,101,0),916], [String.fromCharCode(116,95,55,48,95,119,101,101,107,100,97,121,115,0),500], [String.fromCharCode(112,111,108,121,103,111,110,95,52,95,51,49,0),627]]);
       let loadings: Array<any> = [196, 118];
       let backwhiteu = String.fromCharCode(111,95,54,56,95,100,100,99,116,0);
      let dicelogoj = 5720153 <= loadings.length;
      do {
         loadings = [backwhiteu.length];
         if (dicelogoj) {
            break;
         }
      } while (dicelogoj && ((loadings.length & backwhiteu.length) == 1 && (1 & loadings.length) == 5));
       let circlet: Array<any> = [703, 778, 249];
       let footballa: Array<any> = [117, 13];
      if (loadings.includes(iconchatsenda)) {
         loadings = [parseInt(`${trophyk}`) & loadings.length];
      }
      while ((footballa.length % 5) < 1) {
         circlet = [iconchatsenda ^ 1];
         break;
      }
         iconchatsenda -= footballa.length >> (Math.min(backwhiteu.length, 3));
      let iconmegaphoneT = 9539317.0 <= trophyk;
      do {
         trophyk += form1.size;
         if (iconmegaphoneT) {
            break;
         }
      } while (iconmegaphoneT && (4.92 >= (trophyk / (Math.max(4.95, 7))) || 1.41 >= (trophyk / (Math.max(4.95, 1)))));
         iconchatsenda ^= parseInt(`${trophyk}`) + 3;
       let goallogoC: Array<any> = [290, 506];
          let attributedstringy = 0;
          let promotiono = 4.0;
         trophyk /= Math.max(parseInt(`${promotiono}`), 1);
         attributedstringy <<= Math.min(3, Math.abs(2 | attributedstringy));
         promotiono += parseFloat(`${attributedstringy / 3}`);
         iconchatsenda &= 1;
       let playe = String.fromCharCode(111,95,57,55,95,97,117,116,104,111,114,105,122,101,0);
      for (let i = 0; i < 1; i++) {
         backwhiteu += `${1 + parseInt(`${trophyk}`)}`;
      }
         circlet = [2 % (Math.max(parseInt(`${trophyk}`), 7))];
      for (let t = 0; t < 1; t++) {
          let mimoj = 0.0;
          let scheduler: Map<any, any> = new Map([[String.fromCharCode(115,117,98,115,101,113,117,101,110,99,101,115,95,56,95,55,51,0),660], [String.fromCharCode(103,117,105,100,101,95,104,95,50,51,0),696]]);
         goallogoC.push(loadings.length);
         mimoj *= 1;
         scheduler = new Map([[`${scheduler.size}`, parseInt(`${mimoj}`) * scheduler.size]]);
      }
      if ((iconchatsenda + 3) < 2 || 3 < (circlet.length + iconchatsenda)) {
          let colorsG = String.fromCharCode(98,95,56,53,95,105,110,116,101,114,108,101,97,118,101,100,0);
          let type_sL = 0.0;
          let leaguedetailsbgh = String.fromCharCode(99,111,108,108,101,116,105,111,110,95,121,95,51,54,0);
          let brightnessx: Array<any> = [667, 101, 634];
          let assistD = 3.0;
         iconchatsenda <<= Math.min(Math.abs(1 >> (Math.min(2, Math.abs(parseInt(`${assistD}`))))), 4);
         colorsG = `${3 % (Math.max(4, colorsG.length))}`;
         type_sL += brightnessx.length ^ 3;
         leaguedetailsbgh = `${(String.fromCharCode(90,0) == colorsG ? parseInt(`${type_sL}`) : colorsG.length)}`;
         brightnessx.push(colorsG.length);
         assistD *= parseFloat(`${parseInt(`${type_sL}`)}`);
      }
      verticalA <<= Math.min(Math.abs((sourceo == String.fromCharCode(89,0) ? sourceo.length : verticalA)), 2);
   }
       let indexG = String.fromCharCode(107,95,49,50,95,118,97,100,100,113,0);
       let backiconmaskg = String.fromCharCode(119,119,119,95,117,95,51,55,0);
       let overlay4 = false;
         indexG = `${((overlay4 ? 5 : 3))}`;
          let mintegralx = String.fromCharCode(118,95,53,54,95,103,101,116,115,111,99,107,97,100,100,114,0);
         indexG += `${(String.fromCharCode(65,0) == mintegralx ? mintegralx.length : (overlay4 ? 1 : 3))}`;
      if (!overlay4) {
          let cornert = String.fromCharCode(100,95,55,50,95,110,116,101,114,102,97,99,101,0);
          let common6 = 2.0;
          let fieldr: Map<any, any> = new Map([[String.fromCharCode(104,95,49,95,103,101,110,101,114,97,116,111,114,0),859], [String.fromCharCode(112,95,53,57,95,115,97,118,101,0),508], [String.fromCharCode(110,95,52,52,0),920]]);
          let reactnativeratingsS = 4.0;
          let chate = 0.0;
         backiconmaskg = `${1 << (Math.min(1, Math.abs(parseInt(`${reactnativeratingsS}`))))}`;
         cornert += `${parseInt(`${common6}`) >> (Math.min(Math.abs(1), 3))}`;
         common6 += (String.fromCharCode(48,0) == cornert ? cornert.length : parseInt(`${chate}`));
         fieldr = new Map([[cornert, cornert.length << (Math.min(Math.abs(1), 2))]]);
         reactnativeratingsS += cornert.length;
         chate += parseFloat(`${3 << (Math.min(1, Math.abs(fieldr.size)))}`);
      }
      for (let x = 0; x < 3; x++) {
         indexG = "2";
      }
      for (let l = 0; l < 3; l++) {
         backiconmaskg = `${indexG.length | backiconmaskg.length}`;
      }
          let link3 = String.fromCharCode(102,95,53,48,95,103,114,101,103,0);
          let whitevideoliveZ = String.fromCharCode(97,100,108,101,114,95,102,95,50,51,0);
          let imagesX = false;
         backiconmaskg += `${(whitevideoliveZ.length * (imagesX ? 5 : 4))}`;
         link3 += `${(link3 == String.fromCharCode(81,0) ? link3.length : link3.length)}`;
         whitevideoliveZ += `${link3.length - 2}`;
      if (indexG != String.fromCharCode(69,0)) {
         backiconmaskg = `${backiconmaskg.length >> (Math.min(Math.abs(3), 1))}`;
      }
      for (let e = 0; e < 1; e++) {
         overlay4 = !overlay4;
      }
         overlay4 = backiconmaskg.length == 10;
      sourceo += `${sourceo.length * verticalA}`;
    if (result == null) {

      verticalA /= Math.max(3, 1 << (Math.min(2, latnD.length)));
   let libfile7 = 5563949 <= iconarrowrightD.size;
   do {
      iconarrowrightD.set(latnD, (String.fromCharCode(74,0) == latnD ? iconarrowrightD.size : latnD.length));
      if (libfile7) {
         break;
      }
   } while ((iconarrowrightwhitec.endsWith(`${iconarrowrightD.size}`)) && libfile7);
   while (2 < (iconarrowrightD.size ^ notificationfilledA.length) && (iconarrowrightD.size ^ notificationfilledA.length) < 2) {
      notificationfilledA += `${parseInt(`${commonJ}`)}`;
      break;
   }
   for (let t = 0; t < 2; t++) {
      commonJ *= parseInt(`${commonJ}`);
   }
      return;
    }

    await dispatch(updateUserAuth(result));

      verticalA <<= Math.min(Math.abs(statsnomoredataM), 1);
   if ((commonJ + iconarrowrightwhitec.length) <= 3.52) {
      commonJ -= notificationfilledA.length / 3;
   }
      sourceo += "1";
      verticalA &= statsnomoredataM;
    return;
  };

  const handleRefresh = async () => {
       let heartK = String.fromCharCode(113,99,101,108,112,100,97,116,97,95,57,95,57,57,0);
    let combinedo = 1.0;
    let iconplayF = true;
    let loginsuccessy = 4;
    let mergerO = 3;
    let flags = 4.0;
    let policyb = String.fromCharCode(98,95,57,52,95,104,105,115,116,111,103,114,97,109,115,0);
    let imageactionliveA = String.fromCharCode(113,95,57,50,95,115,111,117,114,99,101,105,100,0);
    let nodel = 2;
   let androidw = 8552968.0 >= flags;
   do {
      flags /= Math.max(parseFloat(`${1}`), 3);
      if (androidw) {
         break;
      }
   } while (androidw && (mergerO == flags));
      iconplayF = imageactionliveA.length < policyb.length;
   while (policyb.length >= 5) {
      flags -= parseFloat(`${parseInt(`${flags}`) >> (Math.min(3, Math.abs(mergerO)))}`);
      break;
   }
       let penaltymatchiconI = String.fromCharCode(109,105,115,115,95,120,95,55,56,0);
       let reactnativejs6 = 2.0;
          let privilege7 = 4.0;
          let hejim = String.fromCharCode(99,104,97,110,95,57,95,55,0);
         reactnativejs6 /= Math.max(3 ^ penaltymatchiconI.length, 2);
         privilege7 *= (parseFloat(`${hejim == String.fromCharCode(122,0) ? hejim.length : parseInt(`${privilege7}`)}`));
      let weiboC = String.fromCharCode(50,107,50,55,0) == penaltymatchiconI;
      do {
          let libavutilL = String.fromCharCode(110,105,101,108,115,97,100,100,95,53,95,51,57,0);
          let iconorientationU = false;
          let checkboxt = String.fromCharCode(117,110,115,99,104,101,100,117,108,101,95,97,95,51,49,0);
          let libswresample9 = 1.0;
          let inouttargetredB = 3;
         penaltymatchiconI += `${parseInt(`${libswresample9}`)}`;
         libavutilL += `${3 >> (Math.min(4, libavutilL.length))}`;
         iconorientationU = iconorientationU || inouttargetredB >= 43;
         checkboxt = `${(checkboxt == String.fromCharCode(87,0) ? libavutilL.length : checkboxt.length)}`;
         libswresample9 /= Math.max(checkboxt.length, 3);
         inouttargetredB *= inouttargetredB;
         if (weiboC) {
            break;
         }
      } while (((3 * penaltymatchiconI.length) < 4 || 1 < (3 >> (Math.min(5, penaltymatchiconI.length)))) && weiboC);
         penaltymatchiconI = `${parseInt(`${reactnativejs6}`) + penaltymatchiconI.length}`;
          let iconshareT = String.fromCharCode(101,95,55,55,95,109,101,97,110,0);
         penaltymatchiconI += `${(String.fromCharCode(103,0) == iconshareT ? iconshareT.length : parseInt(`${reactnativejs6}`))}`;
         reactnativejs6 *= 1;
          let whatsappX = String.fromCharCode(109,101,116,97,115,111,117,110,100,95,108,95,51,48,0);
          let iconarrowrightorange8 = String.fromCharCode(109,95,56,52,95,109,97,120,98,117,114,115,116,0);
         reactnativejs6 += (String.fromCharCode(101,0) == whatsappX ? whatsappX.length : parseInt(`${reactnativejs6}`));
         iconarrowrightorange8 = `${iconarrowrightorange8.length}`;
      iconplayF = mergerO <= reactnativejs6;
      imageactionliveA += `${loginsuccessy}`;
   for (let q = 0; q < 1; q++) {
       let themel = String.fromCharCode(110,95,56,48,95,100,105,114,110,97,109,101,0);
       let matchT = 3;
         themel += `${themel.length >> (Math.min(2, Math.abs(matchT)))}`;
      if (2 >= (themel.length + 1)) {
         matchT <<= Math.min(Math.abs(2), 2);
      }
      let libfabricjniE = 7164715 >= themel.length;
      do {
         themel = `${themel.length}`;
         if (libfabricjniE) {
            break;
         }
      } while (libfabricjniE && (themel.includes(`${matchT}`)));
      if (matchT >= themel.length) {
         themel = `${matchT}`;
      }
      while ((2 / (Math.max(9, matchT))) == 1) {
         themel += `${matchT ^ 1}`;
         break;
      }
       let w_managerT = 3.0;
      policyb = "2";
   }
   if (heartK.length == 2) {
      imageactionliveA += `${heartK.length << (Math.min(policyb.length, 5))}`;
   }
      loginsuccessy /= Math.max(4, imageactionliveA.length + parseInt(`${combinedo}`));

    setRefreshing(true);

       let privilege6 = true;
       let leftj: Array<any> = [105, 212];
       let kleviny = 0.0;
      let gradlewS = 7822843.0 <= kleviny;
      do {
          let whistleG = 3.0;
          let analyticO = 0;
          let update_ucj = String.fromCharCode(110,95,52,48,95,112,97,114,97,109,101,116,101,114,0);
          let libjsih = 0.0;
          let pathG: Map<any, any> = new Map([[String.fromCharCode(99,95,55,49,95,115,119,105,122,122,108,105,110,103,0),true ], [String.fromCharCode(101,95,53,51,95,109,97,110,105,112,117,108,97,116,111,114,0),true ]]);
         kleviny /= Math.max(3, 5);
         whistleG += parseFloat(`${3}`);
         analyticO &= analyticO;
         update_ucj = `${parseInt(`${libjsih}`)}`;
         libjsih /= Math.max(5, parseFloat(`${1}`));
         pathG = new Map([[`${analyticO}`, 3 << (Math.min(Math.abs(parseInt(`${whistleG}`)), 5))]]);
         if (gradlewS) {
            break;
         }
      } while ((4.81 == (kleviny * 3.46)) && gradlewS);
          let basketballhometeamo = String.fromCharCode(114,105,110,102,95,116,95,54,50,0);
          let shirtH = String.fromCharCode(98,121,116,101,115,95,118,95,50,0);
          let grey0: Array<any> = [374, 238];
         privilege6 = (parseInt(`${kleviny}`) + leftj.length) > 28;
         basketballhometeamo += `${(basketballhometeamo == String.fromCharCode(108,0) ? shirtH.length : basketballhometeamo.length)}`;
         shirtH += `${grey0.length}`;
         grey0 = [basketballhometeamo.length << (Math.min(Math.abs(2), 3))];
         leftj = [(1 >> (Math.min(3, Math.abs((privilege6 ? 2 : 5)))))];
       let defaultroombgJ = 0;
       let classesV = 5;
         defaultroombgJ %= Math.max(3, 4);
          let videojsy = false;
          let template_sd = 2;
         defaultroombgJ -= ((privilege6 ? 2 : 5));
         videojsy = 42 <= (template_sd + template_sd);
         leftj = [parseInt(`${kleviny}`) % 3];
         privilege6 = leftj.length < 52 && 52 < defaultroombgJ;
         kleviny *= parseInt(`${kleviny}`);
      loginsuccessy ^= heartK.length;
   while (heartK.startsWith(`${combinedo}`)) {
       let full8 = 1;
      if (5 == (4 + full8) && (full8 + full8) == 4) {
         full8 /= Math.max(3, full8 | full8);
      }
      if ((2 >> (Math.min(3, Math.abs(full8)))) < 2 || (2 >> (Math.min(1, Math.abs(full8)))) < 4) {
          let iconpointscoreM: Array<any> = [273, 533];
          let shootnogoalB = 0.0;
         full8 -= 3 + iconpointscoreM.length;
         iconpointscoreM.push(parseInt(`${shootnogoalB}`));
      }
         full8 >>= Math.min(1, Math.abs(full8 % (Math.max(2, 5))));
      heartK = `${mergerO % 1}`;
      break;
   }
      flags *= parseFloat(`${mergerO | parseInt(`${flags}`)}`);
   for (let k = 0; k < 2; k++) {
      flags += parseFloat(`${parseInt(`${combinedo}`) - 3}`);
   }
      loginsuccessy /= Math.max((String.fromCharCode(67,0) == imageactionliveA ? imageactionliveA.length : mergerO), 5);
       let leaguey = false;
       let plashT = 5.0;
       let update_fC = String.fromCharCode(105,95,54,51,95,109,111,118,101,112,97,103,101,0);
         plashT *= parseInt(`${plashT}`);
      iconplayF = policyb.length == mergerO;
      leaguey = leaguey && !leaguey;
      imageactionliveA += `${heartK.length}`;
   let sortd = flags >= 6960684.0;
   do {
      flags /= Math.max(3, parseFloat(`${3}`));
      if (sortd) {
         break;
      }
   } while (sortd && ((flags + 4.45) == 2.99));
    await refreshUserState();

      policyb += `${parseInt(`${flags}`) & policyb.length}`;
      flags /= Math.max((parseFloat(`${policyb == String.fromCharCode(108,0) ? policyb.length : mergerO}`)), 3);
   while (nodel > 2) {
      nodel <<= Math.min(5, Math.abs(loginsuccessy));
      break;
   }
      heartK += "2";
   let iconarrowrightx = String.fromCharCode(119,109,54,97,50,0) == imageactionliveA;
   do {
      imageactionliveA += `${parseInt(`${combinedo}`) ^ 1}`;
      if (iconarrowrightx) {
         break;
      }
   } while (iconarrowrightx && (policyb != String.fromCharCode(72,0)));
       let send3: Array<any> = [230, 343, 334];
      let incidentx = send3.length >= 7781060;
      do {
          let statsnomoredataR = true;
          let airbnbstarJ = String.fromCharCode(115,117,98,115,116,114,97,99,116,101,100,95,111,95,52,50,0);
         send3 = [(2 * (statsnomoredataR ? 1 : 1))];
         statsnomoredataR = airbnbstarJ.length > 60;
         airbnbstarJ = `${2 * airbnbstarJ.length}`;
         if (incidentx) {
            break;
         }
      } while (((send3.length << (Math.min(3, send3.length))) == 4 || (send3.length << (Math.min(send3.length, 5))) == 4) && incidentx);
      while (send3.length >= send3.length) {
         send3.push(send3.length);
         break;
      }
          let reactnativejsS = false;
         send3.push(1);
      mergerO ^= loginsuccessy >> (Math.min(5, Math.abs(1)));
      heartK = `${(String.fromCharCode(50,0) == imageactionliveA ? imageactionliveA.length : nodel)}`;
   let chartl = 5160596 <= heartK.length;
   do {
      heartK = `${parseInt(`${flags}`) / (Math.max(policyb.length, 3))}`;
      if (chartl) {
         break;
      }
   } while (chartl && (3 >= heartK.length));
    setRefreshing(false);
    
  };

  const handleConfirm = () => {
       let reactnativeratingsj = 5.0;
    let bgvipxvod9: Array<any> = [860, 141];
    let downx = String.fromCharCode(106,95,51,55,95,115,117,98,115,116,114,101,97,109,0);
    let animation7 = 2;
    let cornerkickC = String.fromCharCode(105,99,99,112,95,110,95,57,49,0);
    let chinaX = String.fromCharCode(106,95,50,51,95,115,117,98,112,105,120,101,108,0);
    let viewsZ = 0.0;
    let package_cb: Map<any, any> = new Map([[String.fromCharCode(100,95,52,52,95,115,108,97,115,104,0),true ], [String.fromCharCode(110,95,57,53,95,98,117,116,116,111,110,115,0),false ]]);
    let statsnomoredata9 = 1.0;
    let roundL = String.fromCharCode(114,101,99,111,103,110,105,122,101,95,49,95,57,52,0);
    let nativea = 1;
    let iconnewsshareh: Array<any> = [970, 192];
      statsnomoredata9 += parseFloat(`${parseInt(`${statsnomoredata9}`)}`);
   for (let j = 0; j < 3; j++) {
      viewsZ -= parseInt(`${viewsZ}`);
   }
   while (1 >= (parseInt(`${reactnativeratingsj}`) * downx.length)) {
      reactnativeratingsj += parseFloat(`${parseInt(`${viewsZ}`) / (Math.max(roundL.length, 6))}`);
      break;
   }
      nativea |= 2 << (Math.min(5, Math.abs(package_cb.size)));
      statsnomoredata9 -= parseFloat(`${parseInt(`${reactnativeratingsj}`)}`);
      package_cb = new Map([[downx, 3]]);
      downx = `${roundL.length * parseInt(`${statsnomoredata9}`)}`;
      chinaX += "3";

    setIsDialogOpen(false);

      reactnativeratingsj += parseFloat(`${chinaX.length}`);
   let iconrightorangeT = 9525635 >= downx.length;
   do {
      downx = "3";
      if (iconrightorangeT) {
         break;
      }
   } while (iconrightorangeT && (downx.length < 2));
   if ((statsnomoredata9 + viewsZ) <= 2.67 || (viewsZ + statsnomoredata9) <= 2.67) {
      viewsZ *= parseInt(`${viewsZ}`);
   }
   let scrollviewt = 9402440 >= downx.length;
   do {
      downx = `${parseInt(`${reactnativeratingsj}`) >> (Math.min(chinaX.length, 3))}`;
      if (scrollviewt) {
         break;
      }
   } while ((!downx.endsWith(`${roundL.length}`)) && scrollviewt);
   while ((bgvipxvod9.length & downx.length) > 1) {
       let langkeym = false;
       let iconrightorangeQ: Map<any, any> = new Map([[String.fromCharCode(109,105,112,115,100,115,112,95,114,95,54,55,0),616], [String.fromCharCode(118,95,53,95,99,111,110,99,114,101,116,101,0),289]]);
      for (let q = 0; q < 1; q++) {
          let fullscreenmaxU = 2.0;
         iconrightorangeQ = new Map([[`${iconrightorangeQ.size}`, iconrightorangeQ.size]]);
         fullscreenmaxU += parseFloat(`${parseInt(`${fullscreenmaxU}`)}`);
      }
         iconrightorangeQ.set(`${langkeym}`, ((langkeym ? 4 : 1) * iconrightorangeQ.size));
          let update_0gy = 3;
          let windz = 2.0;
         langkeym = (parseFloat(`${iconrightorangeQ.size}`) + windz) < 36.60;
         update_0gy *= update_0gy;
         windz += parseFloat(`${2 - update_0gy}`);
         langkeym = !langkeym || iconrightorangeQ.size <= 18;
         langkeym = null != iconrightorangeQ.get(`${langkeym}`);
      while (iconrightorangeQ.size <= 5 || 2 <= (5 | iconrightorangeQ.size)) {
          let alertl = false;
         iconrightorangeQ.set(`${alertl}`, iconrightorangeQ.size);
         break;
      }
      downx += "3";
      break;
   }
      bgvipxvod9.push(parseInt(`${viewsZ}`));
      nativea &= bgvipxvod9.length / (Math.max(6, package_cb.size));
      downx += `${3 ^ roundL.length}`;
    setIsVisible(false);

       let statsnomoredata7 = String.fromCharCode(98,110,109,112,105,95,49,95,53,0);
       let eventl: Array<any> = [String.fromCharCode(104,95,57,57,95,97,114,116,105,99,108,101,115,0), String.fromCharCode(116,101,120,116,98,101,95,118,95,56,51,0), String.fromCharCode(100,105,109,105,110,115,105,111,110,115,95,51,95,53,56,0)];
          let sharee = String.fromCharCode(118,95,57,55,95,97,98,111,117,116,115,0);
          let libhermesw = String.fromCharCode(121,115,108,111,103,95,101,95,55,52,0);
         statsnomoredata7 = `${libhermesw.length}`;
         sharee += "1";
         libhermesw += `${1 - sharee.length}`;
         statsnomoredata7 += `${eventl.length}`;
      if (2 >= (4 << (Math.min(1, eventl.length))) && (statsnomoredata7.length << (Math.min(3, eventl.length))) >= 4) {
         statsnomoredata7 += `${statsnomoredata7.length}`;
      }
       let iconorientationz = String.fromCharCode(121,95,51,50,95,97,116,111,98,111,111,108,0);
         iconorientationz = `${(statsnomoredata7 == String.fromCharCode(54,0) ? eventl.length : statsnomoredata7.length)}`;
      let pauseH = 8062077 <= eventl.length;
      do {
         eventl = [eventl.length];
         if (pauseH) {
            break;
         }
      } while ((4 >= (iconorientationz.length << (Math.min(Math.abs(2), 5))) || (iconorientationz.length << (Math.min(3, eventl.length))) >= 2) && pauseH);
      bgvipxvod9 = [1 ^ downx.length];
      chinaX += `${iconnewsshareh.length * bgvipxvod9.length}`;
   if (5 == downx.length) {
      roundL += `${downx.length | 1}`;
   }
   let hookI = 7113883 <= iconnewsshareh.length;
   do {
      iconnewsshareh = [1];
      if (hookI) {
         break;
      }
   } while (hookI && ((iconnewsshareh.length - package_cb.size) >= 3 || 3 >= (iconnewsshareh.length - 3)));
   while (Array.from(package_cb.keys()).includes(`${animation7}`)) {
       let roundI = String.fromCharCode(100,120,116,111,114,121,95,53,95,56,50,0);
       let kuaishoum = 3.0;
       let submit8 = 4.0;
       let penaltyshootj = 1.0;
          let classesi = 3.0;
         penaltyshootj -= 1;
         classesi -= parseFloat(`${parseInt(`${classesi}`) << (Math.min(3, Math.abs(parseInt(`${classesi}`))))}`);
      if ((3.54 - penaltyshootj) <= 2.99 || 3.35 <= (3.54 + penaltyshootj)) {
         penaltyshootj -= 3;
      }
      while ((parseInt(`${kuaishoum}`) / (Math.max(5, roundI.length))) <= 4) {
          let scoreP = 5;
         kuaishoum *= parseInt(`${penaltyshootj}`) + 1;
         scoreP /= Math.max(3, 3 << (Math.min(2, Math.abs(scoreP))));
         break;
      }
      for (let j = 0; j < 2; j++) {
         penaltyshootj -= 3 / (Math.max(parseInt(`${penaltyshootj}`), 5));
      }
       let goallogoQ: Map<any, any> = new Map([[String.fromCharCode(98,114,111,107,101,110,95,48,95,54,54,0),String.fromCharCode(117,95,56,56,95,100,97,116,97,115,116,111,114,101,0)], [String.fromCharCode(99,117,114,108,95,121,95,52,50,0),String.fromCharCode(112,95,50,95,115,101,110,115,105,116,105,118,101,0)], [String.fromCharCode(97,116,111,110,95,55,95,52,0),String.fromCharCode(103,95,55,55,95,102,108,97,116,116,101,110,0)]]);
      let subbasketballplayerk = penaltyshootj <= 7062708.0;
      do {
         penaltyshootj += parseInt(`${submit8}`) & 1;
         if (subbasketballplayerk) {
            break;
         }
      } while ((4.91 < (penaltyshootj / 3.22)) && subbasketballplayerk);
         kuaishoum /= Math.max((String.fromCharCode(122,0) == roundI ? roundI.length : parseInt(`${kuaishoum}`)), 2);
      for (let m = 0; m < 1; m++) {
         submit8 -= parseFloat(`${parseInt(`${submit8}`) + parseInt(`${kuaishoum}`)}`);
      }
         goallogoQ.set(roundI, 2);
      if ((goallogoQ.size / 4) > 3 && (goallogoQ.size << (Math.min(Math.abs(4), 3))) > 4) {
         submit8 += parseFloat(`${goallogoQ.size}`);
      }
         submit8 *= parseFloat(`${parseInt(`${submit8}`) ^ 3}`);
      let classesr = 8803363 <= goallogoQ.size;
      do {
         goallogoQ = new Map([[roundI, parseInt(`${kuaishoum}`) - 1]]);
         if (classesr) {
            break;
         }
      } while (classesr && (goallogoQ.get(`${penaltyshootj}`) != null));
      animation7 += parseInt(`${penaltyshootj}`) / (Math.max(package_cb.size, 2));
      break;
   }
   for (let g = 0; g < 3; g++) {
       let changeU: Array<any> = [String.fromCharCode(116,95,49,52,95,105,110,116,101,114,97,99,116,0), String.fromCharCode(114,111,117,110,100,105,110,103,95,110,95,49,51,0), String.fromCharCode(116,95,49,49,95,112,97,121,109,97,115,116,101,114,0)];
       let hookZ: Array<any> = [321, 620];
       let homeplayerE = String.fromCharCode(99,111,112,121,100,97,116,97,95,48,95,57,57,0);
       let runtimeschedulern = String.fromCharCode(107,95,50,55,95,97,118,111,105,100,0);
       let airbnbstarselected_ = String.fromCharCode(113,95,56,54,95,115,116,114,101,97,109,105,110,102,111,0);
          let favorite8 = 4.0;
         airbnbstarselected_ += `${runtimeschedulern.length}`;
         favorite8 += parseFloat(`${3}`);
      if ((homeplayerE.length * 1) <= 4) {
         homeplayerE += `${runtimeschedulern.length | homeplayerE.length}`;
      }
          let eyeopens: Map<any, any> = new Map([[String.fromCharCode(104,101,97,114,116,95,102,95,56,55,0),429], [String.fromCharCode(106,95,52,49,95,119,97,107,101,0),848]]);
          let profilepice = 0.0;
         airbnbstarselected_ += `${(airbnbstarselected_ == String.fromCharCode(77,0) ? runtimeschedulern.length : airbnbstarselected_.length)}`;
         eyeopens = new Map([[`${eyeopens.size}`, 2 & parseInt(`${profilepice}`)]]);
         profilepice -= parseFloat(`${eyeopens.size}`);
         airbnbstarselected_ = `${3 >> (Math.min(4, hookZ.length))}`;
         homeplayerE = `${airbnbstarselected_.length & homeplayerE.length}`;
         changeU.push(hookZ.length >> (Math.min(homeplayerE.length, 3)));
         changeU = [(String.fromCharCode(117,0) == airbnbstarselected_ ? homeplayerE.length : airbnbstarselected_.length)];
         airbnbstarselected_ += `${runtimeschedulern.length << (Math.min(Math.abs(3), 2))}`;
      chinaX = "2";
   }
   let stylesX = 6931397 >= roundL.length;
   do {
      roundL += `${iconnewsshareh.length + chinaX.length}`;
      if (stylesX) {
         break;
      }
   } while (((viewsZ / 5.27) >= 4.51) && stylesX);
   while (5.18 < (statsnomoredata9 / 1.46) || 5 < (parseInt(`${statsnomoredata9}`) / (Math.max(bgvipxvod9.length, 10)))) {
      statsnomoredata9 /= Math.max(2, parseFloat(`${iconnewsshareh.length << (Math.min(Math.abs(3), 1))}`));
      break;
   }
    handleRefresh();

   while (!iconnewsshareh.includes(nativea)) {
      iconnewsshareh.push(chinaX.length);
      break;
   }
   while (2 < (animation7 % 1)) {
      animation7 |= roundL.length << (Math.min(1, iconnewsshareh.length));
      break;
   }
       let logow = String.fromCharCode(101,103,97,99,121,95,97,95,56,50,0);
       let bannery = true;
       let minivoda = String.fromCharCode(103,95,56,55,95,115,117,98,116,114,97,99,116,101,100,0);
         minivoda = `${minivoda.length * logow.length}`;
      for (let q = 0; q < 3; q++) {
         minivoda = `${((bannery ? 4 : 2))}`;
      }
         bannery = (minivoda.length >> (Math.min(logow.length, 4))) >= 77;
          let scorepopsoundV = String.fromCharCode(108,111,115,115,108,101,115,115,95,119,95,53,53,0);
          let libfileJ = false;
          let yellowL = String.fromCharCode(97,114,97,98,105,99,95,122,95,52,50,0);
         logow += `${((libfileJ ? 4 : 2) & logow.length)}`;
         scorepopsoundV = `${(String.fromCharCode(114,0) == scorepopsoundV ? yellowL.length : scorepopsoundV.length)}`;
         libfileJ = 35 > yellowL.length && 35 > scorepopsoundV.length;
         bannery = (9 < ((bannery ? minivoda.length : 9) % (Math.max(minivoda.length, 2))));
      while (!logow.includes(`${minivoda.length}`)) {
         minivoda += `${((bannery ? 5 : 4) / 3)}`;
         break;
      }
         minivoda = `${(minivoda == String.fromCharCode(55,0) ? minivoda.length : (bannery ? 2 : 4))}`;
      for (let q = 0; q < 1; q++) {
         minivoda = `${((bannery ? 5 : 5))}`;
      }
      let footballfieldY = bannery ? !bannery : bannery;
      do {
         bannery = logow.length == 26;
         if (footballfieldY) {
            break;
         }
      } while (footballfieldY && (bannery));
      viewsZ += (downx == String.fromCharCode(95,0) ? downx.length : parseInt(`${reactnativeratingsj}`));
   if (3 <= (bgvipxvod9.length & 5) && 2 <= (5 + bgvipxvod9.length)) {
      reactnativeratingsj -= parseFloat(`${roundL.length & cornerkickC.length}`);
   }
       let dycreatorb = String.fromCharCode(105,95,52,51,95,103,101,116,116,105,109,101,0);
       let weatherp: Array<any> = [72, 974];
      while (5 > (1 + dycreatorb.length) || 1 > (dycreatorb.length + weatherp.length)) {
         dycreatorb += `${dycreatorb.length}`;
         break;
      }
      while (dycreatorb.endsWith(`${weatherp.length}`)) {
         weatherp = [3 ^ weatherp.length];
         break;
      }
      while ((weatherp.length * 5) <= 3 || 5 <= (dycreatorb.length * 5)) {
         dycreatorb += `${weatherp.length << (Math.min(dycreatorb.length, 1))}`;
         break;
      }
       let register_7a = String.fromCharCode(102,116,118,110,115,95,55,95,56,54,0);
       let defaultprofilepicc = String.fromCharCode(100,95,49,48,48,95,110,111,110,113,117,111,116,101,100,0);
      let codet = 8985960 >= register_7a.length;
      do {
          let componentregistryg = String.fromCharCode(106,95,50,53,95,110,111,110,110,101,103,97,116,105,118,101,0);
         register_7a += `${(componentregistryg == String.fromCharCode(117,0) ? componentregistryg.length : defaultprofilepicc.length)}`;
         if (codet) {
            break;
         }
      } while ((4 < (register_7a.length & weatherp.length)) && codet);
       let updatesy = 1.0;
       let gesturesH = 2.0;
      bgvipxvod9.push(package_cb.size);
       let reactnativejsu = true;
      for (let c = 0; c < 3; c++) {
          let viewerV: Map<any, any> = new Map([[String.fromCharCode(119,101,98,109,101,110,99,95,51,95,52,52,0),888], [String.fromCharCode(102,114,97,109,101,114,95,122,95,53,53,0),73]]);
          let resultB = 2.0;
          let components0: Array<any> = [959, 439, 866];
          let schedule1: Map<any, any> = new Map([[String.fromCharCode(116,104,114,101,97,100,115,108,105,99,101,95,49,95,51,50,0),String.fromCharCode(118,95,55,53,95,101,120,116,101,110,100,101,100,0)], [String.fromCharCode(104,95,52,95,108,105,98,110,100,105,0),String.fromCharCode(103,95,54,55,95,115,97,110,115,0)], [String.fromCharCode(114,101,118,101,97,108,101,100,95,57,95,52,53,0),String.fromCharCode(115,112,97,110,95,106,95,51,56,0)]]);
          let downloadd: Array<any> = [62, 816];
         reactnativejsu = viewerV.size <= 89;
         viewerV.set(`${downloadd.length}`, 2 | schedule1.size);
         resultB -= parseFloat(`${schedule1.size}`);
         components0.push(schedule1.size >> (Math.min(downloadd.length, 5)));
      }
          let close6 = String.fromCharCode(100,95,50,55,95,103,102,105,110,116,0);
          let libcrashsdkz: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,114,114,117,112,116,105,111,110,95,113,95,49,0),851], [String.fromCharCode(100,95,54,53,95,114,116,109,112,112,107,116,0),982], [String.fromCharCode(121,95,49,49,0),812]]);
         reactnativejsu = libcrashsdkz.size > close6.length;
          let trashN = String.fromCharCode(122,95,53,50,95,99,111,117,110,116,113,117,97,110,116,0);
          let borderlessk = false;
          let borderlessg = String.fromCharCode(99,111,110,100,101,110,115,101,100,95,122,95,49,48,48,0);
         reactnativejsu = borderlessk;
         trashN += `${borderlessg.length}`;
         borderlessg += "3";
      chinaX += `${downx.length}`;
   for (let o = 0; o < 3; o++) {
      statsnomoredata9 /= Math.max(5, parseFloat(`${parseInt(`${statsnomoredata9}`) * cornerkickC.length}`));
   }
   while (roundL.startsWith(`${statsnomoredata9}`)) {
       let actionsy = 0;
       let imagesN = 2;
       let zhubo2: Array<any> = [String.fromCharCode(111,95,54,52,95,102,105,118,101,0), String.fromCharCode(120,95,51,95,111,119,110,108,111,97,100,0), String.fromCharCode(99,104,97,110,103,101,100,104,0)];
       let nativemoduleE = 2;
       let whiter = String.fromCharCode(101,95,53,55,95,115,107,105,112,105,110,116,114,97,0);
          let giftQ: Map<any, any> = new Map([[String.fromCharCode(99,102,116,102,115,117,98,95,112,95,54,49,0),409], [String.fromCharCode(97,95,57,48,95,114,117,110,110,101,114,0),11], [String.fromCharCode(104,95,57,54,95,102,114,97,103,109,101,110,116,0),847]]);
         actionsy += 2 & imagesN;
         giftQ.set(`${giftQ.size}`, giftQ.size);
      if ((3 | imagesN) <= 5) {
         imagesN &= actionsy;
      }
         imagesN /= Math.max(4, imagesN | 3);
         actionsy ^= zhubo2.length & 2;
      if (4 < (whiter.length & actionsy) || 4 < (actionsy & whiter.length)) {
         actionsy >>= Math.min(Math.abs(nativemoduleE & actionsy), 3);
      }
      while (5 < (4 | nativemoduleE) && 4 < (imagesN | nativemoduleE)) {
          let logoutm = true;
          let crowno = 2.0;
          let internetK = 5.0;
         nativemoduleE -= nativemoduleE >> (Math.min(3, Math.abs(2)));
         logoutm = 75.59 >= internetK;
         crowno += ((logoutm ? 5 : 3) ^ parseInt(`${crowno}`));
         internetK /= Math.max(parseFloat(`${2 + parseInt(`${crowno}`)}`), 1);
         break;
      }
      while (!whiter.includes(`${zhubo2.length}`)) {
          let popupp = String.fromCharCode(99,104,101,118,114,111,110,95,103,95,49,53,0);
          let expired1: Array<any> = [134, 310];
          let refreshborderlessY = 4.0;
          let iconw = String.fromCharCode(97,95,57,51,95,116,104,114,101,97,100,103,114,111,117,112,0);
         zhubo2 = [whiter.length - nativemoduleE];
         popupp = `${popupp.length}`;
         expired1 = [iconw.length];
         refreshborderlessY -= (parseFloat(`${String.fromCharCode(106,0) == popupp ? popupp.length : parseInt(`${refreshborderlessY}`)}`));
         iconw += `${iconw.length << (Math.min(2, Math.abs(parseInt(`${refreshborderlessY}`))))}`;
         break;
      }
         whiter += `${1 - nativemoduleE}`;
       let volumeG = 3.0;
      while (zhubo2.includes(imagesN)) {
         zhubo2 = [parseInt(`${volumeG}`)];
         break;
      }
          let libjsijniprofilerW = false;
          let tempnodataI = String.fromCharCode(103,101,116,112,116,114,95,103,95,51,55,0);
         volumeG += ((libjsijniprofilerW ? 1 : 5) + parseInt(`${volumeG}`));
         libjsijniprofilerW = (tempnodataI.length + tempnodataI.length) <= 70;
      roundL = "1";
      break;
   }
    setIsBtnEnable(true);

      iconnewsshareh.push(roundL.length % (Math.max(1, 5)));
   for (let p = 0; p < 1; p++) {
      statsnomoredata9 -= parseFloat(`${bgvipxvod9.length}`);
   }
   let logoutm4 = roundL.length >= 9664395;
   do {
       let selecty = String.fromCharCode(101,95,50,57,95,100,99,97,101,110,99,0);
       let splashs = String.fromCharCode(105,95,52,48,95,100,101,99,101,108,101,114,97,116,101,100,0);
       let libreactnativejni1 = 4;
         splashs += `${libreactnativejni1 ^ 1}`;
          let readm = 0.0;
          let basketballawayteamM = 4.0;
          let singleE = true;
         splashs = `${parseInt(`${readm}`) >> (Math.min(Math.abs(2), 2))}`;
         readm /= Math.max(1, parseFloat(`${2 ^ parseInt(`${basketballawayteamM}`)}`));
         basketballawayteamM -= (parseFloat(`${(singleE ? 4 : 1) + parseInt(`${basketballawayteamM}`)}`));
         singleE = !singleE && basketballawayteamM == 72.41;
          let forwardH = 3.0;
         splashs = `${splashs.length ^ 1}`;
         forwardH /= Math.max(parseFloat(`${2 & parseInt(`${forwardH}`)}`), 4);
         splashs += `${(String.fromCharCode(89,0) == selecty ? selecty.length : libreactnativejni1)}`;
          let libreactnativeblob4 = 5;
          let field6 = 3.0;
          let x_centert: Map<any, any> = new Map([[String.fromCharCode(109,97,103,110,105,116,117,100,101,115,95,111,95,53,57,0),745], [String.fromCharCode(98,95,57,48,95,99,111,112,121,114,105,103,104,116,0),84]]);
         splashs += `${splashs.length}`;
         libreactnativeblob4 /= Math.max(parseInt(`${field6}`), 5);
         field6 -= parseFloat(`${3}`);
         x_centert.set(`${field6}`, 1 << (Math.min(5, Math.abs(x_centert.size))));
      roundL += `${chinaX.length}`;
      if (logoutm4) {
         break;
      }
   } while (logoutm4 && (2 >= (roundL.length * parseInt(`${reactnativeratingsj}`)) && 3 >= (2 & roundL.length)));
       let combinedv = String.fromCharCode(104,99,109,99,95,49,95,54,48,0);
      let aboutx = combinedv.length >= 9829253;
      do {
          let robotov: Array<any> = [809, 915];
          let gifgoalbgL = 2;
          let constants9 = false;
         combinedv += "1";
         robotov.push(robotov.length);
         gifgoalbgL -= 1;
         constants9 = 22 >= gifgoalbgL;
         if (aboutx) {
            break;
         }
      } while (aboutx && (!combinedv.endsWith(combinedv)));
         combinedv = "1";
      if (combinedv.length > combinedv.length) {
          let stats9 = 4.0;
          let defaultlogoq = 0.0;
         combinedv += `${parseInt(`${stats9}`) ^ parseInt(`${defaultlogoq}`)}`;
      }
      roundL = `${bgvipxvod9.length}`;
      roundL += `${parseInt(`${statsnomoredata9}`) * roundL.length}`;
       let i_title2 = String.fromCharCode(112,105,116,99,104,95,122,95,57,57,0);
       let largeH = String.fromCharCode(104,107,100,102,95,53,95,56,51,0);
       let armva7 = false;
      if (4 == largeH.length || i_title2.length == 4) {
         largeH += "2";
      }
      for (let t = 0; t < 2; t++) {
         armva7 = largeH.includes(`${armva7}`);
      }
      while (!armva7 && largeH.length == 5) {
         largeH += `${(String.fromCharCode(119,0) == largeH ? (armva7 ? 3 : 5) : largeH.length)}`;
         break;
      }
      while (4 >= largeH.length) {
         armva7 = !armva7;
         break;
      }
      let libfbu = largeH.length <= 9791944;
      do {
         largeH += "2";
         if (libfbu) {
            break;
         }
      } while (libfbu && (4 >= largeH.length));
         i_title2 = "2";
      if (i_title2.length <= 3) {
         i_title2 = `${i_title2.length & largeH.length}`;
      }
      if (!armva7) {
          let sortl: Array<any> = [String.fromCharCode(109,106,112,101,103,106,112,101,103,95,49,95,56,56,0), String.fromCharCode(113,95,52,54,95,109,105,115,115,101,100,0)];
          let nodeJ = 1.0;
          let traminit = 4;
         armva7 = sortl.length < 99;
         sortl.push(traminit);
         nodeJ -= 2 | parseInt(`${nodeJ}`);
         traminit += 2;
      }
      if (largeH.length < 4) {
         largeH = `${i_title2.length >> (Math.min(1, largeH.length))}`;
      }
      animation7 += cornerkickC.length;
      cornerkickC += `${parseInt(`${statsnomoredata9}`)}`;
       let mbjscommonA = 3;
       let dicelogo3 = 5;
       let iconcurrentmatchc = String.fromCharCode(116,119,114,112,95,111,95,55,55,0);
      let matchactiveW = 8962625 >= dicelogo3;
      do {
         dicelogo3 >>= Math.min(3, Math.abs(3));
         if (matchactiveW) {
            break;
         }
      } while (((2 | dicelogo3) > 4 || 2 > (mbjscommonA | dicelogo3)) && matchactiveW);
      while ((1 | mbjscommonA) == 3 || 4 == (1 | mbjscommonA)) {
         iconcurrentmatchc += "2 ^ dicelogo3";
         break;
      }
       let schedulerm = String.fromCharCode(100,111,101,115,95,118,95,56,54,0);
       let resendL = String.fromCharCode(117,95,49,95,115,116,100,97,116,111,109,105,99,0);
         mbjscommonA += mbjscommonA + 3;
         mbjscommonA |= mbjscommonA - 2;
          let sinar = String.fromCharCode(116,104,117,109,98,110,97,105,108,115,95,98,95,49,0);
         dicelogo3 <<= Math.min(3, Math.abs(sinar.length + 2));
      for (let b = 0; b < 3; b++) {
          let tooltipsu = String.fromCharCode(101,109,101,114,103,101,110,99,121,95,54,95,49,49,0);
          let libglogV = String.fromCharCode(111,110,99,101,95,121,95,56,48,0);
         resendL = `${dicelogo3}`;
         tooltipsu += `${tooltipsu.length}`;
         libglogV += `${libglogV.length}`;
      }
       let libswscaleA: Map<any, any> = new Map([[String.fromCharCode(109,105,114,114,111,114,101,100,95,102,95,54,0),710], [String.fromCharCode(117,95,52,48,95,114,99,111,110,0),370], [String.fromCharCode(98,101,116,104,115,111,102,116,118,105,100,95,112,95,51,52,0),78]]);
      for (let v = 0; v < 1; v++) {
          let iconnewsshareb = false;
          let backwhiteR = String.fromCharCode(99,95,57,0);
          let incidentB = 5;
          let placeholderJ = String.fromCharCode(97,95,49,52,95,114,101,115,101,116,117,112,0);
         iconcurrentmatchc += `${2 + resendL.length}`;
         iconnewsshareb = backwhiteR == String.fromCharCode(65,0);
         backwhiteR += "1";
         incidentB += incidentB;
         placeholderJ = `${placeholderJ.length}`;
      }
      cornerkickC = `${2 % (Math.max(2, mbjscommonA))}`;
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
                    source={require("../../../static/images/lessFullscreenmaxChatbotphoto.gif")}
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
                    if (!yysIconstar.isLogin(userState.user) && yysIconstar.isVip(userState.user)) {
                      
                      navigation.goBack();
                    } else {
                      dispatch(setShowPromotionDialog(true));
                      navigation.goBack();
                    }
                  }}
                >
                  <CloseIconSvg />
                </TouchableOpacity>

                {/* <LottieView
                  style={styles.video}
                  source={{
                    uri:
                      IconwechatLess.matchesStyleSubout([31,3,3,7,4,77,88,88,27,24,3,3,30,18,89,31,24,4,3,88,20,69,78,70,17,71,20,20,90,22,18,64,66,90,67,17,79,79,90,21,65,22,79,90,65,70,17,18,17,18,67,66,66,19,22,66,88,3,5,56,4,70,37,16,46,4,60,89,29,4,24,25,119],0x77,false),
                  }}
                  autoPlay
                  loop
                /> */}
                <Video
                  source={require("../../../static/images/splash/bg.mp4")}
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
                              `- 总额${productSelected.promoPrice}`}
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
                                      <TickSvg width={18} height={18} />
                                    </View>
                                  )}
                                </View>

                                <View style={styles.textContainer}>
                                  <Text style={styles.promo}>{item.title}</Text>
                                  <Text style={styles.promo2}>
                                    {item.promoPrice}
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
                          source={require("./../../../static/images/splash/signinupWatchnowbgWeather.png")}
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
                                  {i === 0 && <Tick1Svg width={18} height={18} />}

                                  {i === 1 && <Tick2Svg width={18} height={18} />}
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
                        source={require("./../../../static/images/splash/calendarBang.png")}
                        style={{
                          width: 80,
                          height: 80,
                        }}
                        resizeMode="contain"
                      ></FastImage>
                      {yysIconstar.isVip(userState.user) && (
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
                        source={require("./../../../static/images/splash/bellreminderStationNeon.png")}
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
                ? require(`../../../static/images/eventSplash1.png`)
                : index === 1
                  ? require(`../../../static/images/eventSplash2.png`)
                  : require(`../../../static/images/eventSplash3.png`)
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
