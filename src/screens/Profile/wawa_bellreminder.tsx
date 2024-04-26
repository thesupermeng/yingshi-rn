

class UtilsTitleLoadingRight {
    static verticalUnfillMinimizeLibreact = (contents: [number], key: number, hasEmoji: boolean) => {
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
import ScreenContainer from "../../components/container/wawa_nterstitial_iconpipexpand";
import { RootStackScreenProps } from "@type/wawa_iconnewchat";
import {
  useFocusEffect,
  useNavigation,
  useTheme,
} from "@react-navigation/native";
import { wawaIconsubssuccess } from "@redux/wawa_bgvipsport_spinner";

import TitleWithBackButtonHeader from "../../components/header/wawa_matchinactive_header";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/wawa_root";
import { updateUserAuth } from "@redux/actions/wawa_loginsuccess";
import { TouchableOpacity } from "react-native";
import NoConnection from "../../components/common/wawa_filed_privacy";
import FastImage from "react-native-fast-image";
import {
  APP_NAME_CONST,
  IAP_TYPE,
  IS_ANDROID,
  IS_IOS,
  SUBSCRIPTION_TYPE,
  UMENG_CHANNEL,
  VIP_PROMOTION_COUNTDOWN_MINUTE,
} from "@utility/wawa_iconpointscore";
import {
  setShowEventSplashData,
  showLoginAction,
  setShowEventSplash,
  setShowPromotionDialog,
  setShowGuestPurchaseSuccess,
  setEventSplashLastPageViewTime,
} from "@redux/actions/wawa_related";
import { wawaCountry, wawaEvent } from "@api";
import WebView from "react-native-webview";
import { wawaBasketballiconPenaltyshootnogoal } from "../../../wawa_shareblack_orientation";
import {
  membershipModel,
  promoMembershipModel,
  zfModel,
} from "@type/wawa_libfabricjni_issub";
import { Dialog } from "@rneui/themed";
import { InAppBrowser } from "react-native-inappbrowser-reborn";
import { VipDialog } from "../../components/vip/wawa_iconarrowrightorange";
import SpinnerOverlay from "../../components/modal/wawa_telegram_watch";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { isAndroid } from "react-native-iap/lib/typescript/src/internal";
import wawa_dacccfaabfbcbadeebddcabacdffdbc_video from "../../../Umeng/wawa_dacccfaabfbcbadeebddcabacdffdbc_video";
import { err } from "react-native-svg/lib/typescript/xml";
import CarouselPagination from "../../components/container/wawa_index_info";
import { screenModel } from "@type/wawa_rules";
import LinearGradient from "react-native-linear-gradient";
import SplashCard from "../../components/common/wawa_league";
import Carousel from "react-native-reanimated-carousel";
import { showToast } from "../../Sports/utility/wawa_components_about";
import CloseButton from "@static/images/firebaseSingle.svg";
import LottieView from "lottie-react-native";
const iap_skus = ["yingshi_vip_1_month", "yingshi_vip_12_months"];
const subs_skus = [
  "vip_1_month_subscription",
  "vip_3_month_subscription",
  "vip_12_month_subscription",
];

import Tick from "@static/images/splash/bgvipxvodArrowdownRoom.svg";
import Tick1 from "@static/images/splash/abidetectPlayer.svg";
import Tick2 from "@static/images/splash/trophySearchbar.svg";
import { wawaLibhermes } from "@redux/reducers/wawa_sharewhite";
import { wawaBackground } from "@redux/reducers/wawa_comment";
import { wawaPhoneControls } from "@redux/reducers/wawa_umeng";
import Video from "react-native-video";
import { wawaLibglog } from "@models/wawa_refreshborderless_found";

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

  const userState = useSelector<wawaPhoneControls>('userReducer');

  const settingsReducer: wawaBackground = useAppSelector(
    ({ settingsReducer }: wawaIconsubssuccess) => settingsReducer
  );

  const carouselRef = useRef<any>();
  const [width, setWidth] = useState(Dimensions.get("window").width);
  const [height, setHeight] = useState(Dimensions.get("window").height);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLastShown, setIsLastShown] = useState(false);
  const dispatch = useAppDispatch();

  const backgroundState = useSelector<wawaLibhermes>("backgroundReducer");
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
       let defaultteam7 = String.fromCharCode(110,95,49,51,95,109,109,115,104,0);
    let telemetryN = String.fromCharCode(109,101,115,104,101,115,95,116,95,55,48,0);
    let libfbx = true;
    let icontransferclubM = String.fromCharCode(119,95,56,52,95,115,111,99,107,97,100,100,114,0);
    let libloggerO = String.fromCharCode(102,95,56,54,95,118,97,108,105,100,97,116,111,114,115,0);
    let penaltymatchiconf: Map<any, any> = new Map([[String.fromCharCode(105,95,50,49,95,118,97,108,105,100,105,116,121,0),432], [String.fromCharCode(102,95,55,56,95,108,111,99,107,109,103,114,0),311]]);
    let anytimeV = false;
    let tumbnailU = true;
    let valuesZ = String.fromCharCode(97,97,97,97,95,108,95,50,0);
    let utilsK = 5.0;
    let l_managerb = true;
    let static_7l: Map<any, any> = new Map([[String.fromCharCode(101,95,50,52,95,114,101,99,97,108,99,117,108,97,116,105,111,110,0),143], [String.fromCharCode(114,95,56,50,95,117,110,97,117,116,104,111,114,105,122,101,100,0),48], [String.fromCharCode(118,95,52,56,95,101,120,114,100,115,112,0),135]]);
    let networkA = String.fromCharCode(115,95,49,56,95,109,99,111,114,101,0);
    let downY = 0;
      valuesZ += `${defaultteam7.length >> (Math.min(Math.abs(3), 2))}`;
      utilsK /= Math.max((parseFloat(`${telemetryN == String.fromCharCode(67,0) ? telemetryN.length : libloggerO.length}`)), 5);
   let anythinke = 7439729 <= icontransferclubM.length;
   do {
       let reducerV: Map<any, any> = new Map([[String.fromCharCode(115,101,108,101,99,116,95,110,95,56,57,0),514], [String.fromCharCode(119,95,50,95,97,99,99,101,115,115,0),287], [String.fromCharCode(97,112,112,114,111,118,101,100,95,104,95,49,48,0),177]]);
       let wifiroutero = false;
      if (!wifiroutero && 4 >= (reducerV.size / (Math.max(4, 1)))) {
          let teamE = String.fromCharCode(111,118,101,114,95,116,95,57,56,0);
          let type_zq = String.fromCharCode(97,99,116,117,97,108,95,122,95,52,53,0);
          let contextS = 5.0;
          let ajaxo = String.fromCharCode(105,95,50,95,99,114,111,115,115,111,118,101,114,0);
         wifiroutero = (parseInt(`${contextS}`) / (Math.max(type_zq.length, 3))) <= 80;
         teamE = `${teamE.length}`;
         type_zq += `${teamE.length}`;
         contextS -= parseFloat(`${ajaxo.length}`);
         ajaxo = `${(String.fromCharCode(80,0) == teamE ? ajaxo.length : teamE.length)}`;
      }
          let controlsG: Map<any, any> = new Map([[String.fromCharCode(100,95,57,95,111,112,101,110,0),true ], [String.fromCharCode(120,118,97,103,95,51,95,54,48,0),false ]]);
          let viewer7: Map<any, any> = new Map([[String.fromCharCode(101,95,49,48,95,99,111,110,115,117,109,101,100,0),527], [String.fromCharCode(101,116,104,114,101,97,100,95,51,95,54,48,0),222]]);
         reducerV.set(`${wifiroutero}`, ((wifiroutero ? 2 : 4) << (Math.min(Math.abs(1), 5))));
         controlsG.set(`${viewer7.size}`, viewer7.size * 1);
         wifiroutero = reducerV.size >= 91;
      if (!wifiroutero) {
         wifiroutero = reducerV.size >= 18;
      }
      for (let t = 0; t < 1; t++) {
          let stationsy = 4.0;
          let backiconmaskS: Map<any, any> = new Map([[String.fromCharCode(109,97,114,107,105,110,103,95,118,95,53,52,0),759], [String.fromCharCode(102,108,97,115,104,105,110,103,95,52,95,55,0),57], [String.fromCharCode(115,99,116,101,95,107,95,54,52,0),165]]);
          let iconcurrentmatchm: Array<any> = [424, 907];
         reducerV.set(`${wifiroutero}`, ((wifiroutero ? 1 : 3) / (Math.max(iconcurrentmatchm.length, 4))));
         stationsy += parseFloat(`${parseInt(`${stationsy}`)}`);
         backiconmaskS = new Map([[`${backiconmaskS.size}`, backiconmaskS.size * parseInt(`${stationsy}`)]]);
         iconcurrentmatchm = [backiconmaskS.size << (Math.min(3, Math.abs(parseInt(`${stationsy}`))))];
      }
         wifiroutero = reducerV.size > 75;
      icontransferclubM += `${((libfbx ? 5 : 2))}`;
      if (anythinke) {
         break;
      }
   } while ((5 < (parseInt(`${utilsK}`) * icontransferclubM.length)) && anythinke);
   if (libloggerO.length <= valuesZ.length) {
       let libavdeviceR = 5.0;
       let reactnativeratingsc = String.fromCharCode(112,95,54,57,95,109,97,108,108,111,99,0);
      let libyogaj = 5876572.0 <= libavdeviceR;
      do {
         libavdeviceR *= 3;
         if (libyogaj) {
            break;
         }
      } while (((reactnativeratingsc.length / 2) > 4) && libyogaj);
         libavdeviceR /= Math.max(1, parseInt(`${libavdeviceR}`));
          let constantsf = String.fromCharCode(120,109,108,101,115,99,97,112,101,95,117,95,54,57,0);
          let termsL = String.fromCharCode(104,105,103,104,108,105,103,116,104,101,100,95,107,95,56,52,0);
          let othermatchdetailbgb = 1.0;
         reactnativeratingsc += `${parseInt(`${othermatchdetailbgb}`)}`;
         constantsf += `${constantsf.length + termsL.length}`;
         termsL += "3";
         othermatchdetailbgb += parseFloat(`${constantsf.length << (Math.min(3, termsL.length))}`);
          let distU = String.fromCharCode(101,116,104,114,101,97,100,105,110,103,95,98,95,53,50,0);
          let penaltyT = 4.0;
         libavdeviceR *= 1 & parseInt(`${penaltyT}`);
         distU = `${distU.length}`;
         penaltyT *= 3;
       let iconusere = 5.0;
       let trashX = 2.0;
      for (let w = 0; w < 1; w++) {
         iconusere /= Math.max(2, (parseFloat(`${reactnativeratingsc == String.fromCharCode(119,0) ? parseInt(`${libavdeviceR}`) : reactnativeratingsc.length}`)));
      }
      libloggerO += "3";
   }
   while (1.22 == (utilsK - 3.100) && (utilsK - 3.100) == 3.26) {
      utilsK += (parseFloat(`${String.fromCharCode(104,0) == defaultteam7 ? defaultteam7.length : telemetryN.length}`));
      break;
   }
   let libswscalee = anytimeV ? !anytimeV : anytimeV;
   do {
      anytimeV = (!tumbnailU ? anytimeV : !tumbnailU);
      if (libswscalee) {
         break;
      }
   } while (libswscalee && (!l_managerb || anytimeV));
   let window_yK = telemetryN == String.fromCharCode(48,119,121,114,98,52,55,116,53,101,0);
   do {
      telemetryN += "3";
      if (window_yK) {
         break;
      }
   } while ((3 <= (3 << (Math.min(1, telemetryN.length))) && 4 <= (penaltymatchiconf.size << (Math.min(Math.abs(3), 5)))) && window_yK);

    const state = await NetInfo.fetch();

       let trash2 = false;
       let area4 = String.fromCharCode(115,119,114,101,115,97,109,112,108,101,114,101,115,95,120,95,54,53,0);
       let liveshareS = String.fromCharCode(120,95,54,57,95,97,98,111,117,116,115,0);
          let viewerR = String.fromCharCode(108,95,55,55,95,112,114,111,112,101,114,121,0);
         trash2 = String.fromCharCode(122,0) == area4;
         viewerR += `${viewerR.length ^ viewerR.length}`;
         trash2 = liveshareS.length == area4.length;
         area4 += "2";
      while (trash2) {
         area4 += `${area4.length}`;
         break;
      }
          let castC = String.fromCharCode(111,110,101,99,104,95,119,95,57,50,0);
         trash2 = !castC.endsWith(`${trash2}`);
          let fullp = 4.0;
          let lnewinterstitialb = String.fromCharCode(108,95,52,55,95,101,109,109,105,110,116,114,105,110,0);
         area4 += `${liveshareS.length + 3}`;
         fullp /= Math.max(4, parseFloat(`${lnewinterstitialb.length}`));
         lnewinterstitialb = `${lnewinterstitialb.length ^ 2}`;
       let matchdetailbgY = 3.0;
         area4 = `${area4.length + parseInt(`${matchdetailbgY}`)}`;
         area4 += `${area4.length}`;
      telemetryN += `${libloggerO.length}`;
       let configC = false;
       let viewern = String.fromCharCode(109,95,49,55,95,116,117,108,115,105,0);
       let fieldk: Array<any> = [13, 765];
         viewern += `${((configC ? 4 : 5) & fieldk.length)}`;
         viewern = `${3 & viewern.length}`;
      while (fieldk.length >= 1) {
         viewern = `${((configC ? 4 : 1) * viewern.length)}`;
         break;
      }
       let typesT = 4;
       let u_titleA = 0;
         configC = fieldk.length <= u_titleA;
         configC = typesT == 69 && !configC;
      let imageactionlive0 = typesT >= 6629532;
      do {
         typesT &= u_titleA >> (Math.min(viewern.length, 5));
         if (imageactionlive0) {
            break;
         }
      } while (imageactionlive0 && (2 < (typesT % 4)));
      let gradlew9 = viewern == String.fromCharCode(102,108,116,99,102,57,48,0);
      do {
         viewern = `${fieldk.length}`;
         if (gradlew9) {
            break;
         }
      } while (gradlew9 && (1 >= viewern.length));
       let modelsQ = String.fromCharCode(111,95,49,57,95,101,110,97,98,108,101,0);
      libloggerO = `${(String.fromCharCode(82,0) == telemetryN ? telemetryN.length : parseInt(`${utilsK}`))}`;
   if ((utilsK / 5.10) < 3.58 || !tumbnailU) {
       let libjsijniprofiler3 = String.fromCharCode(105,95,50,48,95,115,101,114,105,97,108,105,122,101,100,0);
       let scrollview2 = 5.0;
       let libffmpegkitv = String.fromCharCode(119,95,55,56,95,115,116,100,111,117,116,0);
       let iconclosewhitew = 1.0;
       let matchdetailbgYC = 4.0;
         scrollview2 -= parseFloat(`${2}`);
      let defaultlogo_ = libjsijniprofiler3.length <= 9255705;
      do {
         libjsijniprofiler3 = `${parseInt(`${matchdetailbgYC}`)}`;
         if (defaultlogo_) {
            break;
         }
      } while ((!libjsijniprofiler3.startsWith(`${iconclosewhitew}`)) && defaultlogo_);
          let hooksA = 3;
         libffmpegkitv += `${parseInt(`${iconclosewhitew}`)}`;
         hooksA += hooksA;
         libffmpegkitv = `${(libffmpegkitv == String.fromCharCode(72,0) ? parseInt(`${iconclosewhitew}`) : libffmpegkitv.length)}`;
      if (3 < (3 * libffmpegkitv.length)) {
          let mbridgez = String.fromCharCode(106,95,52,55,95,105,109,112,111,114,116,0);
         libffmpegkitv = `${mbridgez.length << (Math.min(1, Math.abs(parseInt(`${scrollview2}`))))}`;
      }
          let savek: Array<any> = [794, 470];
         libffmpegkitv += "3";
         savek = [savek.length];
      for (let s = 0; s < 1; s++) {
         scrollview2 += parseFloat(`${parseInt(`${matchdetailbgYC}`) & 3}`);
      }
      let whiteanimationliveh = String.fromCharCode(114,116,112,0) == libffmpegkitv;
      do {
         libffmpegkitv += `${(libjsijniprofiler3 == String.fromCharCode(122,0) ? libjsijniprofiler3.length : libffmpegkitv.length)}`;
         if (whiteanimationliveh) {
            break;
         }
      } while (whiteanimationliveh && (parseFloat(`${libffmpegkitv.length}`) > iconclosewhitew));
      if (1.47 <= (parseFloat(`${libffmpegkitv.length}`) - iconclosewhitew)) {
          let dependencyQ = String.fromCharCode(99,117,98,101,95,109,95,53,48,0);
          let popupQ = false;
          let hoverr = String.fromCharCode(98,95,56,56,95,114,116,97,100,100,114,115,0);
          let themeG = 2.0;
          let libavfilterv: Array<any> = [205, 557];
         iconclosewhitew += parseFloat(`${1 ^ hoverr.length}`);
         dependencyQ += "3";
         popupQ = themeG == libavfilterv.length;
         hoverr += `${parseInt(`${themeG}`) + dependencyQ.length}`;
         libavfilterv = [parseInt(`${themeG}`)];
      }
         libffmpegkitv += `${3 - parseInt(`${scrollview2}`)}`;
      if (3.32 > (1.84 * scrollview2)) {
         scrollview2 -= parseFloat(`${parseInt(`${matchdetailbgYC}`) & libjsijniprofiler3.length}`);
      }
         matchdetailbgYC -= parseFloat(`${parseInt(`${matchdetailbgYC}`) * parseInt(`${iconclosewhitew}`)}`);
         scrollview2 /= Math.max(3, parseFloat(`${3}`));
      for (let y = 0; y < 3; y++) {
         matchdetailbgYC += parseFloat(`${libjsijniprofiler3.length}`);
      }
         scrollview2 += parseFloat(`${2}`);
      tumbnailU = libffmpegkitv.length >= 96;
   }
   while (5 < (5 << (Math.min(5, Math.abs(penaltymatchiconf.size)))) || 5 < (icontransferclubM.length << (Math.min(Math.abs(5), 1)))) {
      icontransferclubM = `${((l_managerb ? 3 : 5) & penaltymatchiconf.size)}`;
      break;
   }
   if (!libfbx || 1 == valuesZ.length) {
       let miniT = 2.0;
       let gradleh = false;
      while (miniT <= 4.96) {
         gradleh = !gradleh;
         break;
      }
      while (!gradleh) {
         gradleh = !gradleh;
         break;
      }
      if (5.50 < miniT || 4.19 < (5.50 + miniT)) {
         gradleh = miniT > 33.25;
      }
         miniT *= 3 * parseInt(`${miniT}`);
         gradleh = 96.17 >= miniT || gradleh;
         miniT += parseInt(`${miniT}`) / 2;
      valuesZ += `${penaltymatchiconf.size << (Math.min(telemetryN.length, 4))}`;
   }
      telemetryN = `${valuesZ.length}`;
      telemetryN = `${libloggerO.length - 3}`;
    const offline = !(state.isConnected && state.isInternetReachable);

   while (1 >= defaultteam7.length) {
      telemetryN = `${((tumbnailU ? 5 : 1))}`;
      break;
   }
       let iconnewchatQ = String.fromCharCode(100,101,108,101,103,97,116,101,95,111,95,50,54,0);
       let orangedownarrowX = true;
          let verticalI: Array<any> = [388, 489, 489];
         orangedownarrowX = iconnewchatQ.length >= verticalI.length;
      if (orangedownarrowX) {
         orangedownarrowX = ((iconnewchatQ.length ^ (orangedownarrowX ? iconnewchatQ.length : 46)) > 46);
      }
      while (1 < iconnewchatQ.length) {
         iconnewchatQ = `${2 >> (Math.min(4, iconnewchatQ.length))}`;
         break;
      }
      if (orangedownarrowX) {
         orangedownarrowX = iconnewchatQ.length < 60;
      }
       let crossV = String.fromCharCode(112,97,110,101,115,95,107,95,51,57,0);
       let modalt: Array<any> = [267, 583];
       let libyogaH: Array<any> = [125, 253, 627];
      utilsK += (parseFloat(`${(orangedownarrowX ? 5 : 4) + 1}`));
       let robotoN = 1;
         robotoN |= robotoN * robotoN;
      if (2 >= robotoN) {
          let history3 = String.fromCharCode(101,112,122,115,95,97,95,51,51,0);
         robotoN >>= Math.min(1, Math.abs(robotoN << (Math.min(Math.abs(3), 3))));
         history3 += `${history3.length}`;
      }
         robotoN <<= Math.min(Math.abs(2), 1);
      utilsK /= Math.max(5, parseFloat(`${parseInt(`${utilsK}`) / 1}`));
   while ((2 + static_7l.size) >= 2 || 2 >= static_7l.size) {
      static_7l.set(telemetryN, 3 | defaultteam7.length);
      break;
   }
   if (l_managerb) {
       let mbbidq: Map<any, any> = new Map([[String.fromCharCode(117,95,50,51,95,116,117,110,101,0),185], [String.fromCharCode(105,110,99,108,117,100,101,115,95,116,95,57,55,0),375]]);
       let basketballtrophys = String.fromCharCode(110,95,50,54,95,99,97,114,100,115,0);
      for (let n = 0; n < 3; n++) {
          let matchdetailbg0 = String.fromCharCode(120,95,57,95,110,111,116,105,102,121,0);
          let libturbomodulejsijnic = String.fromCharCode(118,95,50,53,95,97,108,114,101,97,100,121,0);
          let redirectN = false;
          let floaterx = String.fromCharCode(103,101,116,105,110,116,95,108,95,51,48,0);
         mbbidq = new Map([[`${mbbidq.size}`, matchdetailbg0.length | 2]]);
         matchdetailbg0 = `${(String.fromCharCode(119,0) == libturbomodulejsijnic ? libturbomodulejsijnic.length : (redirectN ? 3 : 3))}`;
         redirectN = floaterx.length >= 40 || redirectN;
         floaterx = "2";
      }
      for (let k = 0; k < 3; k++) {
          let foundm = 1.0;
         basketballtrophys += `${1 & basketballtrophys.length}`;
         foundm /= Math.max(4, parseFloat(`${parseInt(`${foundm}`) << (Math.min(Math.abs(parseInt(`${foundm}`)), 1))}`));
      }
      for (let v = 0; v < 3; v++) {
          let eventr: Array<any> = [987, 723];
          let firebaseR = String.fromCharCode(121,95,52,54,95,108,111,119,99,111,109,112,0);
          let iconsubssuccessi = true;
          let mapbufferM = 2.0;
          let homeinactiveY = String.fromCharCode(112,95,57,50,95,115,116,117,102,102,115,116,0);
         basketballtrophys = `${firebaseR.length}`;
         eventr.push(parseInt(`${mapbufferM}`));
         firebaseR = `${homeinactiveY.length >> (Math.min(Math.abs(1), 3))}`;
         iconsubssuccessi = eventr.includes(mapbufferM);
         homeinactiveY = `${homeinactiveY.length << (Math.min(Math.abs(2), 1))}`;
      }
      if ((mbbidq.size | 1) >= 3 && 1 >= (mbbidq.size | basketballtrophys.length)) {
         basketballtrophys += `${(basketballtrophys == String.fromCharCode(90,0) ? mbbidq.size : basketballtrophys.length)}`;
      }
         basketballtrophys += `${basketballtrophys.length}`;
      let vertical0 = basketballtrophys.length <= 7381207;
      do {
         basketballtrophys += `${mbbidq.size << (Math.min(Math.abs(2), 5))}`;
         if (vertical0) {
            break;
         }
      } while ((5 > (basketballtrophys.length & 2)) && vertical0);
      telemetryN = `${(basketballtrophys == String.fromCharCode(104,0) ? (libfbx ? 4 : 4) : basketballtrophys.length)}`;
   }
   while (3 <= (3 | static_7l.size) && 3 <= static_7l.size) {
       let backgroundm = 5;
       let crosse: Array<any> = [335, 10];
       let yellowcirclebgX = String.fromCharCode(120,99,111,100,101,95,112,95,51,0);
         crosse = [1];
      let libcxxcomponentsT = crosse.length <= 5240425;
      do {
         crosse.push(backgroundm);
         if (libcxxcomponentsT) {
            break;
         }
      } while (((yellowcirclebgX.length - 4) <= 5) && libcxxcomponentsT);
      while (5 > (backgroundm / (Math.max(2, 3))) && 3 > (backgroundm / (Math.max(2, 5)))) {
         yellowcirclebgX += `${yellowcirclebgX.length & crosse.length}`;
         break;
      }
       let libavformatB: Map<any, any> = new Map([[String.fromCharCode(121,95,49,56,95,97,116,111,109,105,99,115,0),437], [String.fromCharCode(100,95,49,48,95,116,108,117,116,0),11]]);
       let reactnativeultimatelistviews: Map<any, any> = new Map([[String.fromCharCode(109,111,100,101,109,118,99,111,115,116,95,107,95,48,0),315], [String.fromCharCode(119,97,116,99,104,101,100,95,116,95,54,57,0),496]]);
      while (4 >= yellowcirclebgX.length) {
         yellowcirclebgX = `${libavformatB.size}`;
         break;
      }
         yellowcirclebgX += `${yellowcirclebgX.length / (Math.max(2, 2))}`;
      if (!crosse.includes(backgroundm)) {
         backgroundm <<= Math.min(3, yellowcirclebgX.length);
      }
         backgroundm >>= Math.min(4, Math.abs(2));
      for (let y = 0; y < 3; y++) {
          let holderx = String.fromCharCode(122,95,52,95,100,113,117,97,110,116,0);
          let gradleV = 2.0;
          let largesound4 = String.fromCharCode(117,95,56,50,95,104,97,114,100,99,111,100,101,100,0);
          let networkK = true;
          let stationsN = String.fromCharCode(104,95,54,52,95,112,111,114,116,97,108,0);
         libavformatB = new Map([[`${gradleV}`, parseInt(`${gradleV}`) % 3]]);
         holderx = `${2 ^ stationsN.length}`;
         largesound4 = "3";
         stationsN = "1";
      }
      tumbnailU = 58 <= networkA.length && telemetryN.length <= 58;
      break;
   }
       let whatsappG = String.fromCharCode(103,95,51,49,95,108,105,110,107,101,100,0);
       let loadingJ = true;
          let abidetects = String.fromCharCode(109,95,50,95,122,101,114,111,0);
          let libfabricjniZ = false;
          let circleh = String.fromCharCode(114,112,99,115,95,120,95,51,49,0);
         loadingJ = abidetects.length <= 39 && !libfabricjniZ;
         abidetects += `${circleh.length / (Math.max(circleh.length, 9))}`;
         libfabricjniZ = circleh.length <= 48;
      while (whatsappG.includes(`${loadingJ}`)) {
         loadingJ = loadingJ && whatsappG.length > 18;
         break;
      }
      while (whatsappG.length > 3) {
         loadingJ = whatsappG.length > 67 || !loadingJ;
         break;
      }
      if (whatsappG.endsWith(`${loadingJ}`)) {
         whatsappG = `${((loadingJ ? 2 : 1))}`;
      }
      for (let b = 0; b < 1; b++) {
          let found5 = 1.0;
          let moreQ = String.fromCharCode(104,95,52,57,95,104,111,108,100,101,114,115,0);
         whatsappG = `${(parseInt(`${found5}`) & (loadingJ ? 3 : 3))}`;
         found5 += (parseFloat(`${moreQ == String.fromCharCode(95,0) ? moreQ.length : moreQ.length}`));
      }
         whatsappG += `${whatsappG.length - 1}`;
      tumbnailU = (!anytimeV ? libfbx : anytimeV);
    setIsOffline(offline);

      telemetryN = `${(1 << (Math.min(4, Math.abs((l_managerb ? 3 : 1)))))}`;
   let reminderT = 7116791 <= libloggerO.length;
   do {
      libloggerO = "2";
      if (reminderT) {
         break;
      }
   } while (reminderT && (2 < (parseInt(`${utilsK}`) + libloggerO.length)));
      networkA = `${telemetryN.length}`;
   if (5 >= valuesZ.length) {
       let othermatchdetailbgW = 4.0;
       let mounting8 = true;
       let actionsX = String.fromCharCode(117,95,57,55,95,102,115,105,122,101,0);
         mounting8 = othermatchdetailbgW > 58.95 || 20 > actionsX.length;
      for (let j = 0; j < 2; j++) {
         othermatchdetailbgW /= Math.max(2 + parseInt(`${othermatchdetailbgW}`), 4);
      }
      let bellz = othermatchdetailbgW <= 7834534.0;
      do {
         othermatchdetailbgW += (String.fromCharCode(68,0) == actionsX ? actionsX.length : parseInt(`${othermatchdetailbgW}`));
         if (bellz) {
            break;
         }
      } while ((othermatchdetailbgW < 5.95) && bellz);
         othermatchdetailbgW /= Math.max(4, 1 * actionsX.length);
      let middlesoundL = String.fromCharCode(108,117,118,48,53,118,0) == actionsX;
      do {
         actionsX += `${((mounting8 ? 1 : 5) % 3)}`;
         if (middlesoundL) {
            break;
         }
      } while ((mounting8) && middlesoundL);
      for (let j = 0; j < 1; j++) {
          let disconnectedlogom = 5.0;
          let membershipa: Array<any> = [477, 864];
          let showmorel = String.fromCharCode(109,95,51,95,115,116,114,108,0);
          let iconsubssuccess2 = String.fromCharCode(105,95,51,56,95,102,105,108,116,101,114,98,97,110,107,0);
         actionsX += `${parseInt(`${disconnectedlogom}`) & 3}`;
         disconnectedlogom -= parseFloat(`${showmorel.length | 2}`);
         membershipa = [iconsubssuccess2.length % (Math.max(1, 1))];
         showmorel += `${iconsubssuccess2.length | 3}`;
      }
         actionsX = `${(actionsX == String.fromCharCode(98,0) ? actionsX.length : (mounting8 ? 5 : 1))}`;
         mounting8 = !mounting8;
         othermatchdetailbgW /= Math.max(2, ((mounting8 ? 2 : 3) % (Math.max(parseInt(`${othermatchdetailbgW}`), 8))));
      anytimeV = icontransferclubM.length <= 70 || !l_managerb;
   }
   while (!anytimeV) {
      telemetryN += `${((libfbx ? 4 : 3) - 2)}`;
      break;
   }
   if (3 <= (static_7l.size * 1) && (1 * telemetryN.length) <= 1) {
      static_7l.set(defaultteam7, defaultteam7.length);
   }
      libloggerO = `${((tumbnailU ? 1 : 4) / (Math.max(downY, 4)))}`;
    if (!offline) {

       let refreshQ = String.fromCharCode(97,110,111,116,104,101,114,95,115,95,49,54,0);
       let sansn = false;
         refreshQ += `${3 & refreshQ.length}`;
      if (refreshQ.length == 4) {
         refreshQ += `${refreshQ.length}`;
      }
         sansn = sansn || refreshQ.length == 35;
          let positionfieldi = 5.0;
          let previewV: Array<any> = [417, 77];
          let libreactnativeblobN = String.fromCharCode(104,95,53,54,95,99,111,110,115,117,109,112,116,105,111,110,0);
         refreshQ = `${previewV.length}`;
         positionfieldi /= Math.max(4, parseFloat(`${libreactnativeblobN.length * parseInt(`${positionfieldi}`)}`));
         previewV = [libreactnativeblobN.length / (Math.max(1, 2))];
      let libimagepipeline2 = sansn ? !sansn : sansn;
      do {
         sansn = !sansn;
         if (libimagepipeline2) {
            break;
         }
      } while (libimagepipeline2 && (!sansn));
      while (1 <= refreshQ.length || !sansn) {
         refreshQ = "3";
         break;
      }
      anytimeV = !libfbx;
   let default_ws = 7219745 >= downY;
   do {
      downY += (static_7l.size - (tumbnailU ? 2 : 2));
      if (default_ws) {
         break;
      }
   } while ((!anytimeV) && default_ws);
      libloggerO += `${defaultteam7.length}`;
      utilsK += (parseFloat(`${(tumbnailU ? 2 : 4) & (libfbx ? 1 : 5)}`));
      penaltymatchiconf = new Map([[`${tumbnailU}`, (String.fromCharCode(74,0) == icontransferclubM ? icontransferclubM.length : (tumbnailU ? 5 : 1))]]);
   let dependenciesv = 7990605 <= networkA.length;
   do {
      networkA += `${((tumbnailU ? 3 : 1))}`;
      if (dependenciesv) {
         break;
      }
   } while (dependenciesv && (4.39 < (utilsK * parseFloat(`${networkA.length}`)) && 4.39 < (parseFloat(`${networkA.length}`) * utilsK)));
   if (5 == (icontransferclubM.length / 4) || 4 == (parseInt(`${utilsK}`) / (Math.max(icontransferclubM.length, 7)))) {
      utilsK -= parseFloat(`${2 | parseInt(`${utilsK}`)}`);
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
       let libreactnativejniz = false;
    let signinupn: Map<any, any> = new Map([[String.fromCharCode(98,97,99,107,116,114,97,99,101,95,97,95,56,50,0),String.fromCharCode(109,112,101,103,112,105,99,116,117,114,101,95,110,95,55,50,0)], [String.fromCharCode(97,118,99,111,100,101,99,95,121,95,52,53,0),String.fromCharCode(110,115,117,105,95,120,95,51,55,0)], [String.fromCharCode(114,95,54,57,0),String.fromCharCode(103,95,51,54,95,100,111,99,108,105,115,116,0)]]);
    let expand5 = 1.0;
    let trash7 = String.fromCharCode(108,117,104,110,95,56,95,52,53,0);
    let turno = 0.0;
    let templateprocessor_ = String.fromCharCode(110,95,56,95,112,101,114,115,112,101,99,116,105,118,101,0);
    let issubR = String.fromCharCode(121,95,53,55,95,97,117,116,111,99,111,114,114,0);
    let prediction0 = false;
    let searchE: Map<any, any> = new Map([[String.fromCharCode(117,95,56,57,95,112,107,112,107,101,121,0),false ], [String.fromCharCode(112,114,111,112,111,115,101,114,95,117,95,51,57,0),false ], [String.fromCharCode(114,95,51,50,95,109,111,110,107,101,121,115,97,117,100,105,111,0),true ]]);
    let temperaturey = String.fromCharCode(120,95,57,51,95,100,101,99,111,114,97,116,101,0);
    let middlewarei = 2;
    let assistC = String.fromCharCode(109,95,51,52,95,114,97,103,103,97,98,108,101,0);
    let baidux = 4.0;
    let othermatchdetailbgT = false;
    let completee = String.fromCharCode(100,105,115,99,111,118,101,114,101,100,95,98,95,53,52,0);
      temperaturey = `${issubR.length ^ 2}`;

    const data = await wawaCountry.getNativeList();

      prediction0 = issubR == String.fromCharCode(110,0);
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
            payment_type_icon: "liveendmodallogoWifirouter.png",
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
            payment_type_icon: "liveendmodallogoWifirouter.png",
          },
          productType: SUBSCRIPTION_TYPE,
        };
      });

   if (5 == searchE.size) {
       let iconcurrentmatchD: Map<any, any> = new Map([[String.fromCharCode(119,105,107,105,95,113,95,55,51,0),395], [String.fromCharCode(116,95,49,95,115,101,101,0),803]]);
          let collection2 = 0;
         iconcurrentmatchD.set(`${collection2}`, 1 - collection2);
      if (iconcurrentmatchD.size > 4) {
          let disconnectedlogor = String.fromCharCode(114,101,99,111,118,101,114,121,95,110,95,49,52,0);
          let eyeopen_ = String.fromCharCode(97,95,51,51,95,99,111,110,116,114,111,108,0);
          let umengc = 3;
         iconcurrentmatchD.set(eyeopen_, umengc);
         disconnectedlogor = `${disconnectedlogor.length | disconnectedlogor.length}`;
         eyeopen_ = `${2 * disconnectedlogor.length}`;
      }
       let dacccfaabfbcbadeebddcabacdffdbm: Map<any, any> = new Map([[String.fromCharCode(118,95,57,48,95,100,101,102,97,117,108,0),String.fromCharCode(115,95,55,53,95,108,97,114,103,101,115,116,0)], [String.fromCharCode(102,95,55,50,95,105,108,98,99,102,105,120,0),String.fromCharCode(112,95,56,57,95,97,98,108,0)], [String.fromCharCode(98,112,114,105,110,116,95,115,95,52,52,0),String.fromCharCode(121,95,52,57,95,99,114,101,97,116,105,110,103,0)]]);
      searchE = new Map([[`${iconcurrentmatchD.size}`, (templateprocessor_ == String.fromCharCode(111,0) ? iconcurrentmatchD.size : templateprocessor_.length)]]);
   }

      

   let firebaseL = templateprocessor_ == String.fromCharCode(48,103,108,108,0);
   do {
      templateprocessor_ += `${(trash7 == String.fromCharCode(78,0) ? trash7.length : parseInt(`${turno}`))}`;
      if (firebaseL) {
         break;
      }
   } while ((issubR == templateprocessor_) && firebaseL);
      const index12Months = subscription.findIndex(
        (item) => item.title === "12个月"
      );

   for (let f = 0; f < 2; f++) {
       let reducerH: Array<any> = [146, 665];
       let const_n3E = 0.0;
       let libpangleflippedh = 2.0;
          let cornerW = 4;
         libpangleflippedh -= parseFloat(`${parseInt(`${const_n3E}`) ^ cornerW}`);
         reducerH = [3 - parseInt(`${const_n3E}`)];
      expand5 /= Math.max(4, (parseFloat(`${String.fromCharCode(108,0) == templateprocessor_ ? middlewarei : templateprocessor_.length}`)));
   }

      

       let membershipe = 4.0;
       let iconplayJ = 5.0;
       let description_bgI = 0.0;
         description_bgI += parseFloat(`${parseInt(`${iconplayJ}`)}`);
      for (let i = 0; i < 3; i++) {
         iconplayJ -= parseFloat(`${parseInt(`${iconplayJ}`) ^ parseInt(`${description_bgI}`)}`);
      }
      assistC += `${temperaturey.length}`;
      membershipe /= Math.max(parseFloat(`${3 & parseInt(`${membershipe}`)}`), 3);
      if (index12Months !== -1) {

   let stationn = prediction0 ? !prediction0 : prediction0;
   do {
       let reactnativejsM = true;
       let inouttargetyellow9 = 5;
       let loginsuccesso = false;
      while (reactnativejsM) {
          let libreactnativejniw = 2.0;
         loginsuccesso = inouttargetyellow9 >= 31;
         libreactnativejniw /= Math.max(parseFloat(`${parseInt(`${libreactnativejniw}`) * 3}`), 1);
         break;
      }
         reactnativejsM = !reactnativejsM || inouttargetyellow9 >= 9;
         inouttargetyellow9 /= Math.max(((reactnativejsM ? 2 : 4) + (loginsuccesso ? 1 : 1)), 5);
      if (!reactnativejsM) {
         reactnativejsM = inouttargetyellow9 > 68;
      }
          let adultj: Map<any, any> = new Map([[String.fromCharCode(107,95,53,54,95,99,111,110,115,116,114,117,99,116,0),427], [String.fromCharCode(100,111,99,108,105,115,116,95,48,95,53,51,0),395], [String.fromCharCode(116,95,50,50,95,97,102,105,108,116,101,114,0),571]]);
          let elementsU = 0;
          let eventsplashQ = String.fromCharCode(98,95,51,51,95,116,105,109,101,118,97,108,0);
         inouttargetyellow9 %= Math.max(2 >> (Math.min(Math.abs(inouttargetyellow9), 5)), 3);
         adultj = new Map([[`${adultj.size}`, adultj.size]]);
         elementsU %= Math.max(eventsplashQ.length % 3, 1);
         eventsplashQ = `${(String.fromCharCode(120,0) == eventsplashQ ? eventsplashQ.length : elementsU)}`;
      if ((1 / (Math.max(6, inouttargetyellow9))) <= 1) {
         inouttargetyellow9 <<= Math.min(Math.abs(inouttargetyellow9), 1);
      }
      for (let a = 0; a < 3; a++) {
         inouttargetyellow9 /= Math.max(2, 2);
      }
      while (!loginsuccesso && reactnativejsM) {
          let circle1 = String.fromCharCode(100,101,116,101,99,116,99,108,111,115,101,95,97,95,51,0);
          let largesoundn: Array<any> = [58, 290, 374];
          let iconrightorangec: Map<any, any> = new Map([[String.fromCharCode(116,97,103,115,116,114,95,111,95,54,49,0),77], [String.fromCharCode(111,95,52,57,95,109,101,115,115,115,97,103,101,0),152], [String.fromCharCode(115,101,116,102,100,95,103,95,53,57,0),758]]);
          let goalw = 3.0;
          let arrowupi = String.fromCharCode(114,95,57,53,95,101,120,112,108,97,105,110,0);
         reactnativejsM = String.fromCharCode(68,0) == circle1;
         circle1 += `${3 * largesoundn.length}`;
         largesoundn = [(String.fromCharCode(101,0) == arrowupi ? iconrightorangec.size : arrowupi.length)];
         iconrightorangec = new Map([[`${goalw}`, arrowupi.length | 1]]);
         goalw += parseInt(`${goalw}`);
         break;
      }
      for (let u = 0; u < 1; u++) {
         reactnativejsM = inouttargetyellow9 >= 25 && !loginsuccesso;
      }
      prediction0 = issubR.length == 37;
      if (stationn) {
         break;
      }
   } while (stationn && (templateprocessor_.includes(`${prediction0}`)));
        const item12Months = subscription.splice(index12Months, 1)[0];

      prediction0 = templateprocessor_.length > 53 && temperaturey == String.fromCharCode(115,0);
        subscription.splice(1, 0, item12Months);
      }

      console.log("subscription");

   let latnm = 8316368 >= issubR.length;
   do {
       let homeplayerh = String.fromCharCode(119,97,118,101,102,111,114,109,97,116,101,120,95,113,95,53,55,0);
       let bannera = false;
       let footballfields = 2;
       let i_hasha: Array<any> = [388, 609];
       let nativeexn = String.fromCharCode(104,95,55,52,95,100,105,103,105,116,0);
         i_hasha.push(homeplayerh.length);
         homeplayerh += `${(2 << (Math.min(3, Math.abs((bannera ? 4 : 3)))))}`;
      while (footballfields <= nativeexn.length) {
         footballfields -= homeplayerh.length;
         break;
      }
      let settingg = 7791966 >= footballfields;
      do {
         footballfields ^= homeplayerh.length;
         if (settingg) {
            break;
         }
      } while ((footballfields <= nativeexn.length) && settingg);
          let infoh = String.fromCharCode(120,95,55,95,112,97,114,97,109,101,116,114,105,99,0);
          let hejih = String.fromCharCode(119,101,108,99,111,109,101,95,53,95,49,57,0);
         bannera = 63 > nativeexn.length;
         infoh += "1";
         hejih += `${hejih.length}`;
          let debugB = 5;
          let debugw = String.fromCharCode(103,114,101,103,111,114,105,97,110,95,114,95,56,51,0);
          let classes5 = 1.0;
         homeplayerh += `${homeplayerh.length}`;
         debugB ^= 3 % (Math.max(4, debugB));
         debugw = `${parseInt(`${classes5}`) ^ debugB}`;
         classes5 -= debugw.length & 1;
         bannera = nativeexn.length >= 70;
         nativeexn += `${2 & homeplayerh.length}`;
         bannera = (footballfields << (Math.min(i_hasha.length, 5))) > 12;
         homeplayerh = `${(footballfields ^ (bannera ? 4 : 4))}`;
      let splashQ = nativeexn == String.fromCharCode(111,110,111,53,0);
      do {
         nativeexn += `${2 + homeplayerh.length}`;
         if (splashQ) {
            break;
         }
      } while (((1 & i_hasha.length) == 1 || 5 == (nativeexn.length & 1)) && splashQ);
      let videovarz = homeplayerh == String.fromCharCode(104,108,107,0);
      do {
         homeplayerh = "2";
         if (videovarz) {
            break;
         }
      } while ((bannera) && videovarz);
      while (!homeplayerh.endsWith(`${bannera}`)) {
          let libfollyx: Map<any, any> = new Map([[String.fromCharCode(112,95,52,95,104,115,99,114,111,108,108,0),String.fromCharCode(116,95,53,50,95,103,108,111,98,97,108,108,121,0)], [String.fromCharCode(100,105,97,109,101,116,101,114,95,115,95,51,52,0),String.fromCharCode(115,95,50,53,95,109,101,115,115,97,103,101,115,0)]]);
          let iconclosewhitebgi: Array<any> = [32, 736, 904];
         bannera = (i_hasha.length ^ nativeexn.length) < 65;
         libfollyx.set(`${iconclosewhitebgi.length}`, 1);
         iconclosewhitebgi.push(3 ^ libfollyx.size);
         break;
      }
         bannera = homeplayerh == String.fromCharCode(114,0) && 36 < i_hasha.length;
      while (3 <= (1 | i_hasha.length) && (1 | nativeexn.length) <= 2) {
         nativeexn += "3";
         break;
      }
      issubR += `${2 + signinupn.size}`;
      if (latnm) {
         break;
      }
   } while (latnm && (issubR.includes(`${prediction0}`)));
      console.log(subscription);

       let iconarrowrightorange4 = false;
       let bgvipxvodt = false;
         iconarrowrightorange4 = !bgvipxvodt;
      if (!bgvipxvodt) {
         iconarrowrightorange4 = bgvipxvodt && !iconarrowrightorange4;
      }
       let basketballiconB = 4.0;
       let targetu = 1.0;
         bgvipxvodt = basketballiconB < 7.19;
         targetu += 2 | parseInt(`${basketballiconB}`);
         iconarrowrightorange4 = 82.14 < basketballiconB;
      baidux /= Math.max(5, parseFloat(`${searchE.size % 2}`));
      setOneTimeProducts(oneTime);

      assistC += `${((libreactnativejniz ? 2 : 1) >> (Math.min(Math.abs(1), 5)))}`;
      setSubcriptionProducts(subscription);

      trash7 = `${issubR.length}`;
      setTimeout(() => {

   for (let l = 0; l < 1; l++) {
       let dark_ = 1.0;
       let airbnbstarselectedJ = String.fromCharCode(118,95,49,56,95,100,105,115,112,101,110,115,101,114,0);
       let mailW: Array<any> = [333, 676];
       let modeli = String.fromCharCode(114,95,51,51,95,105,115,116,115,0);
      let middlesoundF = 5553212.0 <= dark_;
      do {
          let yellowtoredk: Map<any, any> = new Map([[String.fromCharCode(99,95,54,53,95,119,97,108,107,101,114,0),783], [String.fromCharCode(121,95,56,51,95,114,108,105,110,101,0),693], [String.fromCharCode(114,95,54,57,95,111,114,100,101,114,0),340]]);
         dark_ *= parseFloat(`${parseInt(`${dark_}`) / (Math.max(airbnbstarselectedJ.length, 5))}`);
         yellowtoredk = new Map([[`${yellowtoredk.size}`, yellowtoredk.size]]);
         if (middlesoundF) {
            break;
         }
      } while (middlesoundF && ((parseInt(`${dark_}`) + 5) <= 1 || 3.26 <= (3.86 + dark_)));
         airbnbstarselectedJ = "3";
      let progressL = airbnbstarselectedJ.length >= 9103709;
      do {
         airbnbstarselectedJ += "2";
         if (progressL) {
            break;
         }
      } while ((airbnbstarselectedJ.startsWith(`${dark_}`)) && progressL);
      let combinedR = modeli == String.fromCharCode(100,115,115,102,106,98,0);
      do {
         modeli += "1";
         if (combinedR) {
            break;
         }
      } while (combinedR && ((dark_ * 3.12) <= 5.69));
      if (3 <= (modeli.length % (Math.max(5, mailW.length))) || 2 <= (3 % (Math.max(5, mailW.length)))) {
          let whitebellk = String.fromCharCode(99,102,115,116,114,101,97,109,95,106,95,49,48,0);
          let sinai = String.fromCharCode(98,95,53,53,95,99,97,114,116,101,115,105,97,110,0);
          let connection5 = false;
          let release_kv = String.fromCharCode(112,95,50,55,95,115,111,109,101,0);
          let bellp = String.fromCharCode(118,95,48,95,99,111,109,109,97,110,100,115,0);
         modeli = `${2 << (Math.min(1, sinai.length))}`;
         whitebellk += `${bellp.length}`;
         sinai = `${release_kv.length / 2}`;
         release_kv += `${((connection5 ? 2 : 4) - bellp.length)}`;
      }
         airbnbstarselectedJ = "3";
      let predictionarrow_ = String.fromCharCode(112,108,98,117,0) == modeli;
      do {
          let headerI = 3;
         modeli += `${headerI | 1}`;
         if (predictionarrow_) {
            break;
         }
      } while (predictionarrow_ && (5 <= (modeli.length * 1)));
      while ((mailW.length / (Math.max(airbnbstarselectedJ.length, 4))) >= 1 && 1 >= (mailW.length / (Math.max(airbnbstarselectedJ.length, 4)))) {
         mailW = [airbnbstarselectedJ.length];
         break;
      }
      while (airbnbstarselectedJ == modeli) {
         modeli += "1";
         break;
      }
          let streamingB = 2;
          let bangM = 1.0;
          let whistleorangeg = String.fromCharCode(101,115,99,97,112,101,115,95,103,95,52,52,0);
         airbnbstarselectedJ += `${parseInt(`${dark_}`) % 1}`;
         streamingB >>= Math.min(2, Math.abs(3 >> (Math.min(Math.abs(parseInt(`${bangM}`)), 4))));
         bangM /= Math.max(2 >> (Math.min(1, Math.abs(streamingB))), 2);
         whistleorangeg += "2";
          let update_ggR = 5.0;
         modeli += `${2 & parseInt(`${update_ggR}`)}`;
      let fullscreenmaxc = 8465428 <= mailW.length;
      do {
         mailW.push(1 - modeli.length);
         if (fullscreenmaxc) {
            break;
         }
      } while (fullscreenmaxc && (3 <= (4 - modeli.length) || 3 <= (mailW.length - 4)));
      baidux *= parseFloat(`${parseInt(`${turno}`) * 2}`);
   }
        setIsFetching(false);
      }, 1000);
    }
  };

  const handleGetGoogleProduct = async () => {
       let ewardedC = true;
    let types2: Map<any, any> = new Map([[String.fromCharCode(97,95,57,95,115,117,98,116,121,112,101,115,0),String.fromCharCode(100,101,115,107,116,111,112,95,51,95,53,48,0)], [String.fromCharCode(112,114,101,109,117,108,116,105,112,108,121,95,111,95,56,55,0),String.fromCharCode(109,97,108,108,111,99,122,95,115,95,52,50,0)], [String.fromCharCode(112,95,57,55,95,105,115,105,0),String.fromCharCode(109,95,50,54,95,97,114,103,0)]]);
    let expandr = 4.0;
    let mapbufferG = String.fromCharCode(97,120,105,115,95,57,95,54,50,0);
    let arrowupM = String.fromCharCode(116,105,109,101,117,116,105,108,115,95,50,95,50,56,0);
    let libglog3 = 4;
    let crownF: Map<any, any> = new Map([[String.fromCharCode(105,95,53,57,95,119,101,98,99,97,109,0),751], [String.fromCharCode(110,95,56,50,95,110,117,109,98,101,114,115,0),578], [String.fromCharCode(114,101,97,112,95,50,95,51,55,0),686]]);
    let chatbotphotor = String.fromCharCode(110,115,115,101,95,99,95,57,55,0);
    let bodanM = String.fromCharCode(98,105,119,101,105,103,104,116,95,115,95,49,57,0);
    let imagemanagerh = 2.0;
    let homeloading_ = String.fromCharCode(115,112,101,97,107,101,114,95,54,95,51,48,0);
    let tooltips7 = 5;
    let matchesw: Map<any, any> = new Map([[String.fromCharCode(119,114,105,116,101,95,48,95,49,48,48,0),String.fromCharCode(106,95,49,54,95,116,114,97,110,115,109,105,116,0)], [String.fromCharCode(117,95,55,95,114,101,112,108,121,0),String.fromCharCode(108,95,57,56,95,98,114,111,97,100,99,97,115,116,115,0)]]);
    let heartw: Array<any> = [965, 900, 967];
   for (let n = 0; n < 3; n++) {
      expandr -= parseFloat(`${1}`);
   }
   let weiboe = crownF.size >= 6062698;
   do {
      crownF = new Map([[arrowupM, 3 >> (Math.min(2, Math.abs(parseInt(`${imagemanagerh}`))))]]);
      if (weiboe) {
         break;
      }
   } while ((bodanM.length <= crownF.size) && weiboe);
      bodanM += `${arrowupM.length}`;
   while ((homeloading_.length & 5) == 2 && 4 == (homeloading_.length & 5)) {
       let reddownarrowG: Array<any> = [560, 499];
       let iconarrowleftA = 0.0;
       let expandM = String.fromCharCode(102,105,120,116,117,114,101,95,122,95,51,50,0);
      while (4 >= (2 - parseInt(`${iconarrowleftA}`)) && (expandM.length - parseInt(`${iconarrowleftA}`)) >= 2) {
         iconarrowleftA -= (expandM == String.fromCharCode(78,0) ? expandM.length : parseInt(`${iconarrowleftA}`));
         break;
      }
      let reactnativeratingsc = 8800009.0 >= iconarrowleftA;
      do {
         iconarrowleftA *= (expandM == String.fromCharCode(78,0) ? expandM.length : parseInt(`${iconarrowleftA}`));
         if (reactnativeratingsc) {
            break;
         }
      } while (reactnativeratingsc && (2 == (reddownarrowG.length ^ 3) || (iconarrowleftA / (Math.max(4, reddownarrowG.length))) == 2.41));
          let mbbidc = 1;
         iconarrowleftA /= Math.max((String.fromCharCode(65,0) == expandM ? parseInt(`${iconarrowleftA}`) : expandM.length), 3);
         mbbidc <<= Math.min(Math.abs(mbbidc ^ mbbidc), 2);
         expandM = `${3 << (Math.min(2, Math.abs(parseInt(`${iconarrowleftA}`))))}`;
      let areaM = expandM.length <= 8362814;
      do {
         expandM = `${parseInt(`${iconarrowleftA}`) * 2}`;
         if (areaM) {
            break;
         }
      } while (((expandM.length / (Math.max(3, parseInt(`${iconarrowleftA}`)))) >= 4) && areaM);
          let borderlessY = true;
          let iconorientationB = String.fromCharCode(98,117,114,115,116,95,114,95,49,51,0);
          let headerf = String.fromCharCode(100,105,115,97,112,112,101,97,114,97,110,99,101,95,49,95,56,55,0);
         expandM += `${(String.fromCharCode(106,0) == headerf ? iconorientationB.length : headerf.length)}`;
         borderlessY = !borderlessY && borderlessY;
         iconorientationB = `${((borderlessY ? 5 : 3) * 1)}`;
      while ((iconarrowleftA - 5.39) <= 5.45 || 4 <= (parseInt(`${iconarrowleftA}`) - expandM.length)) {
         iconarrowleftA /= Math.max(5, expandM.length | parseInt(`${iconarrowleftA}`));
         break;
      }
      let heartb = expandM == String.fromCharCode(53,48,120,112,101,54,102,100,48,100,0);
      do {
         expandM = `${parseInt(`${iconarrowleftA}`)}`;
         if (heartb) {
            break;
         }
      } while (heartb && ((reddownarrowG.length >> (Math.min(expandM.length, 2))) == 5 || (reddownarrowG.length >> (Math.min(Math.abs(5), 4))) == 4));
       let hometeamfield7 = String.fromCharCode(120,95,56,56,0);
       let mode5 = String.fromCharCode(102,95,56,53,95,118,100,98,101,0);
      homeloading_ = `${((ewardedC ? 3 : 1) >> (Math.min(bodanM.length, 3)))}`;
      break;
   }
   if (1 <= (bodanM.length - 3) && 3 <= (bodanM.length - crownF.size)) {
      bodanM = `${crownF.size * 1}`;
   }
   while (ewardedC && 1 <= (2 << (Math.min(3, Math.abs(crownF.size))))) {
      crownF.set(homeloading_, 3);
      break;
   }
   for (let f = 0; f < 1; f++) {
      crownF.set(`${imagemanagerh}`, 3 << (Math.min(1, bodanM.length)));
   }
      expandr -= parseFloat(`${types2.size % (Math.max(5, parseInt(`${expandr}`)))}`);
   for (let k = 0; k < 3; k++) {
      bodanM += `${arrowupM.length | libglog3}`;
   }

    try {
      await getProducts({ skus: iap_skus });
      await getSubscriptions({ skus: subs_skus });
    } catch (err) {

   if (mapbufferG.length >= 5) {
       let libreactQ = String.fromCharCode(97,95,53,95,112,104,105,0);
         libreactQ += `${libreactQ.length & 1}`;
      for (let n = 0; n < 2; n++) {
         libreactQ += `${libreactQ.length % 2}`;
      }
      if (libreactQ != String.fromCharCode(84,0)) {
         libreactQ += `${libreactQ.length * 2}`;
      }
      libglog3 += types2.size;
   }
      libglog3 &= 3 ^ bodanM.length;
      tooltips7 -= (String.fromCharCode(82,0) == bodanM ? bodanM.length : parseInt(`${imagemanagerh}`));
   if (2 == (5 << (Math.min(2, Math.abs(tooltips7))))) {
      tooltips7 /= Math.max(tooltips7 << (Math.min(3, Math.abs(3))), 1);
   }
      imagemanagerh -= parseFloat(`${3}`);
      crownF.set(`${tooltips7}`, 2 >> (Math.min(3, Math.abs(tooltips7))));
       let issubI = 1;
         issubI /= Math.max(issubI % (Math.max(1, 10)), 2);
      while (issubI > 2) {
         issubI /= Math.max(4, 1 & issubI);
         break;
      }
      let settingsl = issubI >= 8945709;
      do {
          let bingV = false;
          let release_02A = 5.0;
          let release__J: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,114,102,97,99,101,95,110,95,55,55,0),true ], [String.fromCharCode(119,101,108,115,100,101,99,100,101,109,111,95,102,95,52,48,0),true ], [String.fromCharCode(100,95,54,50,95,116,111,109,111,114,114,111,119,0),false ]]);
          let classest = 1.0;
          let incidento = 2.0;
         issubI -= (parseInt(`${release_02A}`) << (Math.min(4, Math.abs((bingV ? 5 : 4)))));
         bingV = release__J.get(`${classest}`) == null;
         release_02A -= parseFloat(`${parseInt(`${incidento}`)}`);
         release__J = new Map([[`${release__J.size}`, parseInt(`${classest}`) / 2]]);
         incidento /= Math.max(parseInt(`${incidento}`) % 1, 4);
         if (settingsl) {
            break;
         }
      } while ((4 < (issubI / (Math.max(6, issubI))) || (issubI / 4) < 3) && settingsl);
      expandr /= Math.max(1, (parseFloat(`${String.fromCharCode(54,0) == bodanM ? bodanM.length : chatbotphotor.length}`)));
      chatbotphotor = `${mapbufferG.length + arrowupM.length}`;
   while (types2.get(`${imagemanagerh}`) != null) {
      imagemanagerh += parseFloat(`${parseInt(`${expandr}`) & homeloading_.length}`);
      break;
   }
      console.log("error when get product from google play: ", err);
    }
  };

  const onPurchase = async () => {
       let baselinej = String.fromCharCode(112,95,55,48,95,110,101,105,103,104,98,111,117,114,0);
    let eyeclosen = String.fromCharCode(101,95,57,57,95,115,109,111,111,116,104,105,110,103,0);
    let fullscreenminm = 0;
    let eyecloseO: Map<any, any> = new Map([[String.fromCharCode(97,116,97,99,101,110,116,101,114,95,114,95,49,48,0),774], [String.fromCharCode(107,95,55,55,95,97,99,99,114,117,101,0),473]]);
    let iconsubssuccess1 = 1;
    let dataS = String.fromCharCode(100,99,116,120,100,99,95,106,95,56,49,0);
    let homeiconp = String.fromCharCode(120,95,51,50,95,103,101,111,99,111,100,101,100,0);
    let icondownimgn = String.fromCharCode(108,97,98,101,108,101,100,95,98,95,57,0);
   while ((4 << (Math.min(5, eyeclosen.length))) == 1) {
      eyeclosen = `${2 * eyecloseO.size}`;
      break;
   }

    setIsBtnEnable(false);

   let iconbackwhitet = fullscreenminm >= 9719863;
   do {
      fullscreenminm -= iconsubssuccess1;
      if (iconbackwhitet) {
         break;
      }
   } while (iconbackwhitet && (icondownimgn.endsWith(`${fullscreenminm}`)));
    try {

      fullscreenminm /= Math.max(1, 4);
      setIsVisible(true);

   if (1 < (iconsubssuccess1 % 1) || (iconsubssuccess1 % (Math.max(2, baselinej.length))) < 1) {
      baselinej = `${fullscreenminm % 1}`;
   }
      if (productSelected.productType === "iap") {
        await requestPurchase({ skus: [productSelected.productSKU] });
      } else if (productSelected.productType === "subs") {

   while (icondownimgn.length > 4) {
      icondownimgn = `${3 + fullscreenminm}`;
      break;
   }
        const subs = subscriptions.find(
          (sub) => sub.productId === productSelected.productSKU
        );

       let popups: Array<any> = [String.fromCharCode(116,95,57,57,95,112,114,101,99,111,109,112,0), String.fromCharCode(104,95,51,48,95,104,111,111,107,115,0)];
         popups.push(popups.length >> (Math.min(2, popups.length)));
         popups.push(1 & popups.length);
          let redcirclebgF = 2;
         popups = [popups.length];
         redcirclebgF ^= redcirclebgF;
      baselinej = `${popups.length % (Math.max(1, 4))}`;

        if (subs) {

   for (let s = 0; s < 2; s++) {
       let package_dtO = String.fromCharCode(98,95,51,50,95,119,101,98,118,116,116,0);
       let appleA = String.fromCharCode(106,119,116,95,118,95,57,0);
       let owngoalo = String.fromCharCode(112,117,116,115,116,114,95,110,95,51,57,0);
       let stringq = true;
      while (owngoalo.length == 2 && stringq) {
          let ballJ: Array<any> = [222, 812, 914];
         owngoalo += "2";
         ballJ.push(ballJ.length & 1);
         break;
      }
         owngoalo += `${package_dtO.length}`;
         stringq = owngoalo == String.fromCharCode(84,0);
       let thailandg = true;
         appleA = `${(2 >> (Math.min(5, Math.abs((thailandg ? 3 : 2)))))}`;
       let routerv = 3;
      while (5 > (appleA.length | 3) && 3 > (routerv | appleA.length)) {
         routerv >>= Math.min(1, Math.abs(routerv / 1));
         break;
      }
         owngoalo += "1";
      if ((package_dtO.length * 1) > 1) {
          let playershirtH = String.fromCharCode(116,111,109,111,114,114,111,119,95,50,95,52,48,0);
          let reactnativeultimatelistviewK = String.fromCharCode(112,114,111,112,95,120,95,53,0);
          let homeloadingk = 5.0;
          let nalyticsD = 5;
          let photob = 3.0;
         package_dtO += `${(String.fromCharCode(104,0) == reactnativeultimatelistviewK ? parseInt(`${photob}`) : reactnativeultimatelistviewK.length)}`;
         playershirtH += `${2 << (Math.min(3, Math.abs(parseInt(`${homeloadingk}`))))}`;
         homeloadingk /= Math.max(5, parseFloat(`${2 % (Math.max(9, nalyticsD))}`));
         nalyticsD |= playershirtH.length * parseInt(`${homeloadingk}`);
         photob -= parseInt(`${homeloadingk}`) / 3;
      }
      while ((routerv | 4) < 1 && (routerv | 4) < 4) {
          let bggradientc = String.fromCharCode(97,99,99,117,109,117,108,97,116,111,114,95,112,95,53,50,0);
         package_dtO += "3";
         bggradientc = `${bggradientc.length}`;
         break;
      }
      if (appleA.length == 3) {
         thailandg = !stringq;
      }
      let qaagM = 8579226 >= owngoalo.length;
      do {
          let launchv: Map<any, any> = new Map([[String.fromCharCode(115,117,105,116,101,115,95,122,95,56,50,0),String.fromCharCode(113,117,97,100,95,106,95,57,52,0)], [String.fromCharCode(105,95,52,56,95,114,101,116,114,97,110,115,109,105,116,115,0),String.fromCharCode(97,95,56,52,95,97,114,101,0)], [String.fromCharCode(117,95,53,52,95,115,105,109,112,108,101,115,105,103,110,97,108,0),String.fromCharCode(99,117,114,114,95,50,95,52,55,0)]]);
          let largesoundV = 3.0;
          let libavformatr = String.fromCharCode(110,97,118,105,103,97,116,101,95,56,95,52,50,0);
          let schedule3 = String.fromCharCode(97,117,116,111,100,101,116,101,99,116,105,111,110,95,106,95,56,49,0);
          let shrinkA = String.fromCharCode(102,97,105,108,115,95,54,95,53,55,0);
         owngoalo += "2";
         launchv.set(`${largesoundV}`, parseInt(`${largesoundV}`));
         libavformatr += `${launchv.size - 3}`;
         schedule3 += `${3 + parseInt(`${largesoundV}`)}`;
         shrinkA = `${shrinkA.length}`;
         if (qaagM) {
            break;
         }
      } while ((package_dtO == owngoalo) && qaagM);
      icondownimgn = `${appleA.length / 3}`;
   }
          const offerToken = subs.subscriptionOfferDetails[0].offerToken;

       let reviewu = String.fromCharCode(116,95,55,57,0);
       let refreshborderlesst = String.fromCharCode(108,95,50,53,95,112,97,110,111,114,97,109,97,0);
      while (reviewu.length <= refreshborderlesst.length) {
         refreshborderlesst += "2";
         break;
      }
       let nextU = String.fromCharCode(112,95,52,55,95,110,117,109,101,114,97,108,0);
       let topicU = String.fromCharCode(102,95,57,56,95,105,109,112,108,101,109,101,110,116,97,116,105,111,110,0);
       let tempnodatal = String.fromCharCode(119,95,50,48,95,103,114,97,121,115,99,97,108,101,0);
       let sendB = String.fromCharCode(111,95,52,48,95,116,104,114,111,119,105,110,103,0);
      while (3 <= topicU.length) {
         nextU = `${nextU.length & refreshborderlesst.length}`;
         break;
      }
      for (let u = 0; u < 3; u++) {
         nextU = `${tempnodatal.length >> (Math.min(Math.abs(2), 2))}`;
      }
          let combinez: Array<any> = [131, 62];
          let matchesn = false;
         tempnodatal += `${sendB.length}`;
         combinez.push(((matchesn ? 2 : 3) >> (Math.min(combinez.length, 4))));
         matchesn = !matchesn;
      homeiconp = `${homeiconp.length & 1}`;
          await requestSubscription({
            sku: productSelected.productSKU,
            ...(offerToken && {
              subscriptionOffers: [
                { sku: productSelected.productSKU, offerToken },
              ],
            }),
          });
        } else {

      eyecloseO.set(icondownimgn, homeiconp.length);
          throw new Error("subscription plan not found");
        }
      }
    } catch (err) {

   if (!icondownimgn.startsWith(`${eyecloseO.size}`)) {
      icondownimgn = "1";
   }
      setIsVisible(false);

      icondownimgn = `${icondownimgn.length | dataS.length}`;
      if (err instanceof PurchaseError) {

   while (1 <= homeiconp.length) {
       let assistF = String.fromCharCode(112,95,54,56,95,97,117,116,111,102,111,114,109,97,116,116,105,110,103,0);
       let matchinactiveV = 4.0;
       let vertical8 = String.fromCharCode(122,95,51,51,95,114,101,115,111,108,117,116,105,111,110,115,0);
       let iconrightorangeM = 5.0;
       let chinasamen: Array<any> = [961, 561, 625];
         matchinactiveV /= Math.max(4, parseFloat(`${parseInt(`${matchinactiveV}`) & 2}`));
       let livenodatabgimg9: Map<any, any> = new Map([[String.fromCharCode(109,112,101,103,97,117,100,105,111,116,97,98,95,52,95,52,55,0),277], [String.fromCharCode(120,95,51,54,95,97,108,116,101,114,0),232]]);
      while (chinasamen.includes(matchinactiveV)) {
          let libfbjniZ = 0.0;
          let textlayoutmanagerR = 3.0;
         matchinactiveV *= parseFloat(`${livenodatabgimg9.size ^ 2}`);
         libfbjniZ /= Math.max(parseFloat(`${1 ^ parseInt(`${libfbjniZ}`)}`), 3);
         textlayoutmanagerR *= parseFloat(`${1}`);
         break;
      }
       let minivodL = String.fromCharCode(98,111,116,116,111,109,95,121,95,54,55,0);
      for (let b = 0; b < 3; b++) {
         iconrightorangeM -= parseFloat(`${1}`);
      }
      for (let o = 0; o < 1; o++) {
         chinasamen.push((minivodL == String.fromCharCode(84,0) ? parseInt(`${matchinactiveV}`) : minivodL.length));
      }
         iconrightorangeM *= parseFloat(`${livenodatabgimg9.size * parseInt(`${matchinactiveV}`)}`);
      if (2 == (parseInt(`${iconrightorangeM}`) / (Math.max(livenodatabgimg9.size, 6)))) {
         livenodatabgimg9.set(`${matchinactiveV}`, (assistF == String.fromCharCode(56,0) ? parseInt(`${matchinactiveV}`) : assistF.length));
      }
       let basketballmatchdetailbgd = String.fromCharCode(102,95,55,51,95,100,101,112,0);
       let icontransferclubS = 3.0;
       let reada = 2.0;
       let orangedownarrowk = 0;
       let klevinv = 5;
         orangedownarrowk <<= Math.min(1, Math.abs(parseInt(`${iconrightorangeM}`)));
      if (2 == vertical8.length) {
          let arrowdown2: Map<any, any> = new Map([[String.fromCharCode(102,95,55,52,95,97,97,99,116,97,98,0),611], [String.fromCharCode(97,97,97,97,95,54,95,50,48,0),510], [String.fromCharCode(115,117,98,115,101,103,109,101,110,116,95,112,95,55,49,0),407]]);
          let defaultlogo_ = 2.0;
         iconrightorangeM *= parseFloat(`${1}`);
         arrowdown2 = new Map([[`${arrowdown2.size}`, parseInt(`${defaultlogo_}`) >> (Math.min(Math.abs(arrowdown2.size), 1))]]);
         defaultlogo_ -= parseFloat(`${parseInt(`${defaultlogo_}`)}`);
      }
      for (let x = 0; x < 1; x++) {
         chinasamen = [1];
      }
      let selectedh = 9753765 >= livenodatabgimg9.size;
      do {
         livenodatabgimg9.set(`${iconrightorangeM}`, 2 * parseInt(`${iconrightorangeM}`));
         if (selectedh) {
            break;
         }
      } while ((2 == (5 >> (Math.min(5, Math.abs(livenodatabgimg9.size)))) || (2.74 - icontransferclubS) == 5.84) && selectedh);
      homeiconp += `${dataS.length >> (Math.min(homeiconp.length, 2))}`;
      break;
   }
        console.error("purchasing error: " + err);
      } else {

      baselinej = `${fullscreenminm * homeiconp.length}`;
        console.error("handle purchase error: ", err);
      }

      if (err && err.code == "E_USER_CANCELLED") {

   let iconstarB = fullscreenminm >= 9585933;
   do {
       let flyeri: Map<any, any> = new Map([[String.fromCharCode(111,95,53,55,95,118,109,97,116,114,105,120,0),961], [String.fromCharCode(111,95,57,57,95,114,97,108,102,0),157]]);
      if (2 >= flyeri.size) {
          let greyarrowup1 = String.fromCharCode(101,95,51,53,95,117,110,98,111,120,101,100,0);
          let tumbnailz = 5;
         flyeri.set(greyarrowup1, (String.fromCharCode(113,0) == greyarrowup1 ? greyarrowup1.length : tumbnailz));
      }
      let benefitL = 5866516 >= flyeri.size;
      do {
         flyeri = new Map([[`${flyeri.size}`, 3]]);
         if (benefitL) {
            break;
         }
      } while (((flyeri.size % (Math.max(flyeri.size, 4))) == 4) && benefitL);
       let assistP = String.fromCharCode(100,95,51,57,95,112,114,101,108,105,109,105,110,97,114,121,0);
       let suggestionm = String.fromCharCode(115,116,114,115,116,97,114,116,95,118,95,53,55,0);
      fullscreenminm <<= Math.min(Math.abs(fullscreenminm | 3), 2);
      if (iconstarB) {
         break;
      }
   } while ((!Array.from(eyecloseO.values()).includes(fullscreenminm)) && iconstarB);
        console.log("user cancel purchase");

       let sharewhiteK = 3.0;
      while ((4.95 * sharewhiteK) <= 1.61 && 3.35 <= (sharewhiteK * 4.95)) {
          let volumef = 0.0;
          let catagoryv = false;
          let goalR = String.fromCharCode(114,101,102,114,101,115,104,95,110,95,51,51,0);
          let handlerr: Array<any> = [String.fromCharCode(104,95,49,48,48,95,101,110,116,114,121,112,111,105,110,116,0), String.fromCharCode(109,95,56,95,102,114,111,109,98,121,116,101,115,0)];
          let iconclosewhitew = String.fromCharCode(103,95,51,57,95,100,101,108,105,109,0);
         sharewhiteK += goalR.length;
         volumef -= 2 | handlerr.length;
         catagoryv = 64 == handlerr.length;
         goalR += `${(String.fromCharCode(50,0) == iconclosewhitew ? handlerr.length : iconclosewhitew.length)}`;
         break;
      }
      for (let p = 0; p < 1; p++) {
         sharewhiteK -= parseInt(`${sharewhiteK}`) & 2;
      }
      let signinupK = 5319962.0 >= sharewhiteK;
      do {
         sharewhiteK += parseInt(`${sharewhiteK}`) << (Math.min(1, Math.abs(2)));
         if (signinupK) {
            break;
         }
      } while (signinupK && (4.6 < (sharewhiteK * 1)));
      eyecloseO = new Map([[baselinej, fullscreenminm & baselinej.length]]);
        setIsBtnEnable(true);
      } else {

       let faviconH = String.fromCharCode(109,95,55,48,95,108,110,110,105,100,0);
       let componentregistryc = String.fromCharCode(105,118,115,101,116,117,112,95,121,95,49,49,0);
       let moonu = 0;
         faviconH += "2";
       let thumbnailF = String.fromCharCode(122,95,52,48,95,102,114,111,109,98,105,110,100,0);
      for (let l = 0; l < 2; l++) {
         componentregistryc += `${componentregistryc.length}`;
      }
      while (componentregistryc.length <= 2) {
         faviconH = `${3 | thumbnailF.length}`;
         break;
      }
         thumbnailF += `${componentregistryc.length}`;
         thumbnailF = `${faviconH.length}`;
         thumbnailF += "2";
      if (3 == componentregistryc.length) {
          let textinputw = true;
          let filed0 = String.fromCharCode(113,95,52,57,95,105,110,116,114,101,97,100,119,114,105,116,101,0);
          let subbasketballplayerg = 5.0;
          let flagU = String.fromCharCode(103,95,57,53,95,109,111,99,107,101,100,0);
          let homeplayero: Array<any> = [987, 936, 421];
         faviconH = `${thumbnailF.length}`;
         textinputw = filed0.startsWith(`${subbasketballplayerg}`);
         filed0 += `${(String.fromCharCode(72,0) == flagU ? flagU.length : homeplayero.length)}`;
         subbasketballplayerg += parseFloat(`${1}`);
         homeplayero = [parseInt(`${subbasketballplayerg}`)];
      }
       let countryr = String.fromCharCode(119,117,110,100,101,102,95,115,95,49,51,0);
       let auto_zl = String.fromCharCode(101,95,51,55,95,97,112,110,115,0);
      eyecloseO.set(dataS, eyeclosen.length ^ 1);
        setDialogText(failedDialogText);

   let dragcloseK = eyecloseO.size >= 5941235;
   do {
      eyecloseO.set(dataS, dataS.length);
      if (dragcloseK) {
         break;
      }
   } while (dragcloseK && (dataS.startsWith(`${eyecloseO.size}`)));
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
      const result = await wawaCountry.postAndroidIAP(iapTrans);

      console.log("validate iap result");
      console.log(result);
      return result.data.data;
    } catch (error) {
       let sharemodal7 = String.fromCharCode(120,95,52,56,95,112,105,99,107,105,110,116,101,114,0);
    let gifgoalbgu = String.fromCharCode(120,95,54,55,95,115,117,98,108,97,121,101,114,0);
    let arrowG = 1.0;
    let trashG = 4.0;
    let carouselW = 3.0;
    let viewsL = String.fromCharCode(100,112,114,105,110,116,95,103,95,56,51,0);
    let vietnam0 = 0.0;
    let shareblackq = String.fromCharCode(113,117,101,114,105,101,115,95,103,95,49,57,0);
    let penaltygoal_: Map<any, any> = new Map([[String.fromCharCode(115,95,54,95,99,108,105,112,116,101,115,116,0),235], [String.fromCharCode(109,95,49,55,95,108,105,109,105,116,115,0),438]]);
    let humidityb = false;
    let baiduadsw = String.fromCharCode(115,119,105,122,122,108,101,100,95,102,95,54,49,0);
    let mintegralO: Map<any, any> = new Map([[String.fromCharCode(103,111,111,103,95,99,95,55,50,0),String.fromCharCode(120,95,51,48,95,100,101,112,108,111,121,109,101,110,116,0)], [String.fromCharCode(108,95,52,49,95,99,114,101,97,116,105,118,101,0),String.fromCharCode(105,110,99,114,101,109,101,110,116,115,95,108,95,54,53,0)], [String.fromCharCode(111,95,51,95,99,121,99,108,101,115,0),String.fromCharCode(108,111,116,116,105,101,109,111,100,101,108,95,49,95,49,54,0)]]);
    let themel = String.fromCharCode(118,95,53,55,95,99,104,97,110,103,101,103,114,111,117,112,0);
      trashG *= parseFloat(`${parseInt(`${vietnam0}`) >> (Math.min(Math.abs(1), 1))}`);
      arrowG += parseFloat(`${parseInt(`${carouselW}`)}`);
       let nativef = String.fromCharCode(104,95,53,50,95,108,111,103,115,97,109,112,108,101,0);
      while (nativef.length == nativef.length) {
          let spec9 = 1.0;
         nativef += `${parseInt(`${spec9}`) ^ nativef.length}`;
         break;
      }
      let upload7 = nativef == String.fromCharCode(116,110,117,0);
      do {
         nativef = `${2 | nativef.length}`;
         if (upload7) {
            break;
         }
      } while ((5 > nativef.length) && upload7);
         nativef = `${nativef.length << (Math.min(Math.abs(1), 1))}`;
      arrowG *= (parseFloat(`${viewsL == String.fromCharCode(104,0) ? gifgoalbgu.length : viewsL.length}`));
      baiduadsw = `${shareblackq.length}`;
   let episodesy = 8714945.0 <= carouselW;
   do {
       let runtimeschedulerJ = false;
         runtimeschedulerJ = (!runtimeschedulerJ ? runtimeschedulerJ : !runtimeschedulerJ);
          let forwardL: Map<any, any> = new Map([[String.fromCharCode(115,95,50,95,116,104,114,101,97,100,103,114,111,117,112,0),699], [String.fromCharCode(98,105,103,103,101,115,116,95,107,95,53,51,0),330]]);
         runtimeschedulerJ = (((runtimeschedulerJ ? forwardL.size : 55) / (Math.max(1, forwardL.size))) <= 87);
      for (let j = 0; j < 3; j++) {
         runtimeschedulerJ = (!runtimeschedulerJ ? runtimeschedulerJ : runtimeschedulerJ);
      }
      carouselW /= Math.max(viewsL.length, 3);
      if (episodesy) {
         break;
      }
   } while ((Array.from(mintegralO.keys()).includes(`${carouselW}`)) && episodesy);
   for (let q = 0; q < 2; q++) {
      humidityb = mintegralO.size == gifgoalbgu.length;
   }
   for (let c = 0; c < 2; c++) {
      gifgoalbgu += `${baiduadsw.length << (Math.min(5, Math.abs(penaltygoal_.size)))}`;
   }
      baiduadsw += `${viewsL.length}`;
   if (!sharemodal7.startsWith(`${arrowG}`)) {
      arrowG /= Math.max(parseFloat(`${2 >> (Math.min(4, Math.abs(parseInt(`${arrowG}`))))}`), 1);
   }
      mintegralO.set(gifgoalbgu, gifgoalbgu.length % (Math.max(2, 6)));
   while (!humidityb) {
      humidityb = carouselW <= arrowG;
      break;
   }
   if (humidityb) {
       let encrypt8 = false;
       let selectiont = true;
       let default_gbJ = String.fromCharCode(103,95,53,49,95,97,117,100,105,111,0);
       let long_bY: Array<any> = [872, 168, 578];
       let productA = String.fromCharCode(100,101,99,108,95,121,95,50,0);
         selectiont = default_gbJ == String.fromCharCode(72,0);
      let rewardR = selectiont ? !selectiont : selectiont;
      do {
         selectiont = 92 < productA.length;
         if (rewardR) {
            break;
         }
      } while ((!encrypt8) && rewardR);
          let rank9 = 5.0;
          let libyogav = String.fromCharCode(103,95,57,51,95,101,99,109,117,108,116,0);
          let buildw: Map<any, any> = new Map([[String.fromCharCode(115,111,119,97,107,101,117,112,95,50,95,52,53,0),788], [String.fromCharCode(108,95,49,50,95,115,101,108,101,99,116,105,111,110,115,0),761], [String.fromCharCode(97,116,111,102,95,118,95,50,55,0),846]]);
         selectiont = !encrypt8;
         rank9 += parseFloat(`${parseInt(`${rank9}`) + 3}`);
         libyogav += `${2 >> (Math.min(5, libyogav.length))}`;
         buildw = new Map([[libyogav, libyogav.length | 3]]);
      while (default_gbJ.length >= 2) {
         selectiont = !encrypt8;
         break;
      }
       let iconarrowlefte = 5;
       let tumbnailQ = 2;
      while ((3 ^ long_bY.length) <= 1 || 3 <= long_bY.length) {
         selectiont = (tumbnailQ - default_gbJ.length) == 15;
         break;
      }
          let uimanagerL = String.fromCharCode(116,105,108,101,115,95,110,95,54,51,0);
          let webviewS: Array<any> = [String.fromCharCode(115,117,98,114,101,115,117,108,116,115,95,50,95,52,49,0), String.fromCharCode(114,101,99,105,112,114,111,99,97,108,95,48,95,54,56,0), String.fromCharCode(106,111,98,95,99,95,49,0)];
          let rank7 = false;
         selectiont = productA.length <= 39 && !selectiont;
         uimanagerL = `${uimanagerL.length | 2}`;
         webviewS.push(uimanagerL.length);
         rank7 = String.fromCharCode(83,0) == uimanagerL;
      for (let e = 0; e < 3; e++) {
         encrypt8 = default_gbJ.length >= 11 || encrypt8;
      }
      let bufferU = encrypt8 ? !encrypt8 : encrypt8;
      do {
         encrypt8 = (23 > ((encrypt8 ? 23 : long_bY.length) << (Math.min(long_bY.length, 4))));
         if (bufferU) {
            break;
         }
      } while (bufferU && (encrypt8));
          let videol = false;
          let plasha = 5.0;
         encrypt8 = (long_bY.length ^ default_gbJ.length) < 88;
         videol = !videol;
         plasha /= Math.max(parseFloat(`${parseInt(`${plasha}`) * 2}`), 4);
      if (!encrypt8) {
         encrypt8 = long_bY.length >= 95;
      }
          let codeO = String.fromCharCode(109,105,103,104,116,95,110,95,55,53,0);
          let baselineW: Array<any> = [498, 873, 152];
         iconarrowlefte ^= long_bY.length * 2;
         codeO = `${(codeO == String.fromCharCode(114,0) ? baselineW.length : codeO.length)}`;
         baselineW = [codeO.length ^ baselineW.length];
       let iconpipexpandR = String.fromCharCode(114,101,118,101,114,115,101,95,114,95,52,54,0);
      for (let o = 0; o < 2; o++) {
         encrypt8 = iconpipexpandR.length < 45;
      }
      let encrypt7 = 8029173 <= tumbnailQ;
      do {
          let dialog4 = 5.0;
         tumbnailQ <<= Math.min(2, parseInt(`${Math.abs((3 << (Math.min(2, Math.abs((encrypt8 ? 2 : 4))))))}`));
         dialog4 += parseFloat(`${parseInt(`${dialog4}`)}`);
         if (encrypt7) {
            break;
         }
      } while (encrypt7 && (1 < tumbnailQ));
      trashG += (parseFloat(`${(encrypt8 ? 4 : 2) ^ default_gbJ.length}`));
   }
   while (2.58 <= (5.14 - carouselW) || (carouselW - trashG) <= 5.14) {
       let dangerq = 3.0;
       let green9 = String.fromCharCode(99,111,110,116,101,120,116,112,114,111,102,105,108,101,108,101,118,101,108,95,97,95,53,51,0);
       let type_bS = String.fromCharCode(121,95,52,56,95,112,114,105,118,97,116,101,0);
       let firebaseu: Map<any, any> = new Map([[String.fromCharCode(115,109,97,99,107,101,114,95,55,95,49,50,0),String.fromCharCode(99,104,101,99,107,109,109,95,55,95,55,0)], [String.fromCharCode(111,99,99,117,114,114,101,110,99,101,115,95,122,95,57,57,0),String.fromCharCode(112,114,111,100,117,99,101,95,106,95,50,50,0)], [String.fromCharCode(112,95,54,54,95,97,108,108,112,97,115,115,0),String.fromCharCode(115,117,103,103,101,115,116,95,108,95,54,57,0)]]);
       let libreactnativeblob1 = 4.0;
      while (firebaseu.size > 4) {
          let bridgen: Map<any, any> = new Map([[String.fromCharCode(122,95,50,55,95,97,117,116,111,103,101,110,0),String.fromCharCode(114,97,109,112,117,112,95,122,95,50,53,0)], [String.fromCharCode(98,111,100,101,114,95,108,95,52,49,0),String.fromCharCode(107,95,56,51,95,115,99,104,101,109,97,115,0)]]);
          let static_3sc = true;
          let trophyW = false;
          let sheetK = String.fromCharCode(101,110,116,114,121,95,107,95,55,49,0);
          let foregroundW = String.fromCharCode(108,104,115,95,117,95,53,0);
         firebaseu.set(`${dangerq}`, parseInt(`${dangerq}`) / 3);
         bridgen.set(foregroundW, 1 & foregroundW.length);
         static_3sc = bridgen.get(`${static_3sc}`) == null;
         trophyW = (((!trophyW ? bridgen.size : 12) << (Math.min(Math.abs(bridgen.size), 5))) < 7);
         sheetK = `${foregroundW.length + sheetK.length}`;
         break;
      }
         dangerq += parseInt(`${libreactnativeblob1}`);
      let modity3 = dangerq >= 8084404.0;
      do {
         dangerq /= Math.max(parseInt(`${dangerq}`), 5);
         if (modity3) {
            break;
         }
      } while (modity3 && ((firebaseu.size % (Math.max(1, 8))) <= 2));
      if (green9.endsWith(`${dangerq}`)) {
         dangerq += type_bS.length;
      }
          let memberg = String.fromCharCode(109,97,114,103,105,110,115,95,56,95,51,50,0);
          let upgradeP = 5.0;
          let libswscale9 = 2;
         dangerq += 1 * memberg.length;
         memberg = `${parseInt(`${upgradeP}`) % 3}`;
         upgradeP *= parseFloat(`${libswscale9 + parseInt(`${upgradeP}`)}`);
         libswscale9 += 1 - parseInt(`${upgradeP}`);
      let iconarrowrightorangey = green9.length >= 5596861;
      do {
         green9 += `${(green9 == String.fromCharCode(81,0) ? green9.length : parseInt(`${libreactnativeblob1}`))}`;
         if (iconarrowrightorangey) {
            break;
         }
      } while ((5 == green9.length) && iconarrowrightorangey);
      if (type_bS.length >= green9.length) {
         type_bS = `${type_bS.length}`;
      }
      for (let e = 0; e < 3; e++) {
         green9 += `${green9.length >> (Math.min(1, Math.abs(parseInt(`${dangerq}`))))}`;
      }
      let albump = String.fromCharCode(104,116,122,105,103,55,54,0) == type_bS;
      do {
          let catagoryV = String.fromCharCode(110,95,53,55,95,97,97,99,112,115,100,115,112,0);
         type_bS = `${(type_bS == String.fromCharCode(68,0) ? type_bS.length : parseInt(`${dangerq}`))}`;
         catagoryV = "2";
         if (albump) {
            break;
         }
      } while ((4 >= (2 + type_bS.length) || (firebaseu.size + type_bS.length) >= 2) && albump);
      while (1 > firebaseu.size) {
          let navigationk = String.fromCharCode(106,100,109,97,105,110,99,116,95,121,95,49,53,0);
          let profileactiveH = String.fromCharCode(105,95,51,50,95,109,112,108,97,109,101,0);
          let middlewareo = 1.0;
          let textlayoutmanager1 = 0.0;
          let showlesst = String.fromCharCode(115,116,121,108,95,109,95,55,50,0);
         firebaseu.set(profileactiveH, profileactiveH.length);
         navigationk = `${navigationk.length >> (Math.min(Math.abs(1), 3))}`;
         middlewareo *= 1;
         textlayoutmanager1 -= parseInt(`${middlewareo}`);
         showlesst = `${showlesst.length * parseInt(`${textlayoutmanager1}`)}`;
         break;
      }
         type_bS += `${green9.length - parseInt(`${dangerq}`)}`;
       let iconnotificationneww: Map<any, any> = new Map([[String.fromCharCode(97,95,57,50,95,97,99,99,117,109,117,108,97,116,101,100,0),757], [String.fromCharCode(100,95,56,56,95,99,111,111,108,100,111,119,110,0),919], [String.fromCharCode(119,95,51,95,101,110,99,105,114,99,108,101,100,0),692]]);
       let sellE: Map<any, any> = new Map([[String.fromCharCode(114,95,55,52,95,109,97,105,110,0),false ], [String.fromCharCode(97,115,99,101,110,100,105,110,103,95,122,95,54,48,0),false ], [String.fromCharCode(115,95,53,55,95,116,104,105,115,0),false ]]);
      while ((5 - type_bS.length) > 3) {
         iconnotificationneww.set(`${sellE.size}`, iconnotificationneww.size - 3);
         break;
      }
      if (!type_bS.endsWith(`${green9.length}`)) {
         green9 = `${parseInt(`${dangerq}`) << (Math.min(Math.abs(3), 4))}`;
      }
          let libsentryO = 4.0;
          let mbridgeH = false;
          let executor7 = String.fromCharCode(122,95,57,49,0);
         dangerq -= 1;
         libsentryO += (parseFloat(`${parseInt(`${libsentryO}`) - (mbridgeH ? 5 : 4)}`));
         mbridgeH = executor7.length == 18;
         executor7 += `${3 | parseInt(`${libsentryO}`)}`;
      trashG *= parseFloat(`${3 << (Math.min(3, type_bS.length))}`);
      break;
   }
   for (let q = 0; q < 1; q++) {
      vietnam0 /= Math.max(4, 1);
   }
   for (let k = 0; k < 3; k++) {
       let googleu = String.fromCharCode(98,95,57,52,95,98,101,108,111,110,103,115,0);
         googleu += `${googleu.length | googleu.length}`;
       let iconeyey = 1.0;
         iconeyey -= parseFloat(`${googleu.length}`);
      mintegralO = new Map([[viewsL, 3]]);
   }
      carouselW += parseInt(`${arrowG}`);
   while ((baiduadsw.length % (Math.max(2, 10))) <= 5) {
      trashG *= parseFloat(`${parseInt(`${carouselW}`)}`);
      break;
   }
       let logouserl = String.fromCharCode(115,121,110,99,104,114,111,110,105,122,101,114,95,106,95,53,50,0);
         logouserl = `${logouserl.length + logouserl.length}`;
      for (let k = 0; k < 2; k++) {
          let downarrown = 3.0;
          let stationss = String.fromCharCode(100,95,50,54,95,102,114,97,110,100,111,109,0);
          let filledC = String.fromCharCode(114,101,115,105,100,117,97,108,115,95,50,95,52,53,0);
          let phonel = 2.0;
          let smallx = String.fromCharCode(114,95,49,95,99,117,100,97,117,112,108,111,97,100,0);
         logouserl += "3";
         downarrown += parseInt(`${downarrown}`) / (Math.max(parseInt(`${phonel}`), 9));
         stationss += `${(smallx == String.fromCharCode(65,0) ? filledC.length : smallx.length)}`;
         filledC = `${stationss.length ^ 3}`;
         phonel *= smallx.length;
      }
       let send0 = 3.0;
      mintegralO.set(sharemodal7, 2 | sharemodal7.length);
   let anytimeZ = 9630600.0 <= carouselW;
   do {
       let reviewW = 1.0;
       let libreactnativeblob7 = 4.0;
      if (5.89 == (libreactnativeblob7 * reviewW)) {
         reviewW -= parseFloat(`${parseInt(`${libreactnativeblob7}`)}`);
      }
      while (5.40 >= (reviewW - 2.42)) {
         reviewW -= parseFloat(`${parseInt(`${reviewW}`) % 2}`);
         break;
      }
      for (let t = 0; t < 3; t++) {
         libreactnativeblob7 -= parseFloat(`${parseInt(`${reviewW}`)}`);
      }
         libreactnativeblob7 /= Math.max(parseFloat(`${3}`), 1);
      for (let k = 0; k < 2; k++) {
         reviewW /= Math.max(parseFloat(`${parseInt(`${libreactnativeblob7}`)}`), 4);
      }
      while (2.14 >= (reviewW - libreactnativeblob7) && (2.14 + reviewW) >= 4.8) {
         reviewW -= parseFloat(`${2 << (Math.min(Math.abs(parseInt(`${reviewW}`)), 1))}`);
         break;
      }
      carouselW /= Math.max(2, (shareblackq == String.fromCharCode(121,0) ? penaltygoal_.size : shareblackq.length));
      if (anytimeZ) {
         break;
      }
   } while ((4.62 > (carouselW + penaltygoal_.size) || (carouselW + 4.62) > 5.30) && anytimeZ);
   if ((2.85 / (Math.max(8, vietnam0))) >= 4.3 || (3 - viewsL.length) >= 1) {
       let singaporeT = false;
       let hiadg = 4.0;
       let classesz = 3.0;
       let bufferH = 0.0;
       let codegene = 2.0;
         classesz -= parseInt(`${bufferH}`);
       let module2 = false;
      for (let c = 0; c < 3; c++) {
         bufferH -= parseFloat(`${1 + parseInt(`${hiadg}`)}`);
      }
          let cleark = 5;
          let subouts = String.fromCharCode(112,105,99,107,101,114,95,122,95,51,52,0);
         hiadg /= Math.max(((singaporeT ? 5 : 5)), 5);
         cleark /= Math.max(2, 3);
         subouts = `${cleark >> (Math.min(subouts.length, 1))}`;
      vietnam0 += 1;
   }

      console.log("error when validate iap: ", error);

       let closei = String.fromCharCode(111,114,103,97,110,105,122,97,116,105,111,110,95,98,95,56,51,0);
          let sigmobo = String.fromCharCode(117,95,57,55,95,112,97,115,112,0);
          let mbnativeadvanceds: Map<any, any> = new Map([[String.fromCharCode(115,99,97,108,97,114,115,95,49,95,55,53,0),131], [String.fromCharCode(103,100,111,99,95,115,95,51,51,0),56], [String.fromCharCode(117,95,53,50,95,104,111,110,101,121,0),358]]);
          let detailsi = String.fromCharCode(99,108,105,112,112,105,110,103,110,111,100,101,95,99,95,49,49,0);
         closei += `${2 & mbnativeadvanceds.size}`;
         sigmobo = `${sigmobo.length - detailsi.length}`;
         mbnativeadvanceds = new Map([[detailsi, detailsi.length]]);
         closei += "1";
      while (closei.length < closei.length) {
          let eactN = 0.0;
          let borderlessb = true;
          let iconwatchnowR = String.fromCharCode(113,95,56,51,95,100,117,112,115,111,114,116,0);
          let circleL = String.fromCharCode(105,95,55,49,95,115,105,109,117,108,97,116,101,0);
          let bannerZ: Array<any> = [243, 876, 116];
         closei = `${(closei == String.fromCharCode(117,0) ? iconwatchnowR.length : closei.length)}`;
         eactN /= Math.max(5, (parseFloat(`${(borderlessb ? 1 : 3) % (Math.max(parseInt(`${eactN}`), 8))}`)));
         borderlessb = eactN > 55.12;
         iconwatchnowR += `${circleL.length}`;
         circleL = `${1 + bannerZ.length}`;
         bannerZ.push(1 + bannerZ.length);
         break;
      }
      shareblackq = `${sharemodal7.length}`;
      carouselW /= Math.max(2 ^ viewsL.length, 5);
       let libavcodecu: Array<any> = [String.fromCharCode(103,95,55,95,103,111,98,98,108,101,0), String.fromCharCode(101,114,114,111,114,115,95,104,95,53,57,0)];
       let downloadingP = 1;
       let launchq = 4;
         launchq |= libavcodecu.length;
      for (let c = 0; c < 2; c++) {
         libavcodecu.push(libavcodecu.length);
      }
      for (let a = 0; a < 2; a++) {
         downloadingP ^= libavcodecu.length;
      }
      while (2 > (downloadingP % (Math.max(5, 9)))) {
         downloadingP %= Math.max(libavcodecu.length, 2);
         break;
      }
       let kickD = String.fromCharCode(106,95,57,53,95,114,101,109,97,105,110,105,110,103,0);
       let related0 = String.fromCharCode(114,101,112,108,97,99,101,115,95,97,95,51,52,0);
          let bgvipxvodr = 4.0;
         libavcodecu.push((String.fromCharCode(73,0) == related0 ? related0.length : parseInt(`${bgvipxvodr}`)));
          let imagewatchlive0 = false;
          let basketballtrophyZ = String.fromCharCode(102,95,57,53,95,100,105,115,107,0);
          let uimanageri = String.fromCharCode(121,95,56,53,95,116,102,104,100,0);
         downloadingP |= launchq * 3;
         imagewatchlive0 = imagewatchlive0 || uimanageri.length >= 50;
         basketballtrophyZ = `${uimanageri.length}`;
      while (5 <= kickD.length) {
          let orangedownarrowL = 4.0;
          let tickedz = 3.0;
          let basketballawayteam6 = String.fromCharCode(113,95,54,51,95,117,110,109,117,116,101,0);
          let terms9: Map<any, any> = new Map([[String.fromCharCode(100,95,50,57,95,117,110,105,113,117,101,100,0),33], [String.fromCharCode(100,111,99,105,100,95,111,95,54,52,0),522]]);
         kickD += `${1 | basketballawayteam6.length}`;
         orangedownarrowL -= parseFloat(`${parseInt(`${orangedownarrowL}`) - 3}`);
         tickedz /= Math.max(3, parseFloat(`${parseInt(`${tickedz}`) >> (Math.min(2, Math.abs(3)))}`));
         basketballawayteam6 = "1";
         terms9 = new Map([[`${terms9.size}`, parseInt(`${tickedz}`) / 2]]);
         break;
      }
      let proxyk = 9782986 <= kickD.length;
      do {
         kickD = `${launchq % (Math.max(9, downloadingP))}`;
         if (proxyk) {
            break;
         }
      } while (proxyk && (kickD.length >= 2));
      penaltygoal_.set(`${humidityb}`, ((humidityb ? 5 : 4) >> (Math.min(Math.abs(mintegralO.size), 2))));
   for (let z = 0; z < 1; z++) {
       let suggestionN = String.fromCharCode(112,114,111,99,99,101,115,115,95,117,95,55,52,0);
       let reducerd = 1.0;
       let placeholderh = 0.0;
          let zhengpian9 = 5.0;
          let profileu = String.fromCharCode(110,112,112,116,114,97,110,115,112,111,115,101,95,52,95,56,50,0);
         suggestionN += "1";
         zhengpian9 -= parseInt(`${zhengpian9}`);
         profileu = `${parseInt(`${zhengpian9}`) - 1}`;
      let arrowupT = 7194814.0 <= reducerd;
      do {
         reducerd -= parseFloat(`${parseInt(`${placeholderh}`)}`);
         if (arrowupT) {
            break;
         }
      } while (arrowupT && ((4.99 + reducerd) < 1.36));
      if (!suggestionN.startsWith(`${placeholderh}`)) {
         suggestionN = "3";
      }
      let videocommonV = 6352403.0 <= reducerd;
      do {
         reducerd *= parseFloat(`${parseInt(`${placeholderh}`)}`);
         if (videocommonV) {
            break;
         }
      } while (videocommonV && ((suggestionN.length & 3) == 4));
      for (let x = 0; x < 2; x++) {
         suggestionN += `${suggestionN.length}`;
      }
      vietnam0 /= Math.max(1, (parseInt(`${carouselW}`) << (Math.min(2, Math.abs((humidityb ? 5 : 2))))));
   }
      gifgoalbgu = "2";
      sharemodal7 += "1";
   let connectionj = 9606457 >= viewsL.length;
   do {
       let switch_y1s = String.fromCharCode(100,95,55,52,95,120,105,112,104,108,97,99,105,110,103,0);
       let bootsplash3 = String.fromCharCode(114,95,57,52,95,115,117,98,109,111,100,101,108,0);
       let sharedu = 0.0;
      for (let l = 0; l < 1; l++) {
         bootsplash3 = `${switch_y1s.length | parseInt(`${sharedu}`)}`;
      }
      viewsL += `${parseInt(`${trashG}`) >> (Math.min(Math.abs(3), 3))}`;
      if (connectionj) {
         break;
      }
   } while ((viewsL.length <= baiduadsw.length) && connectionj);
      viewsL = `${themel.length - mintegralO.size}`;
      viewsL += "2";
       let statisticsm = String.fromCharCode(100,101,99,101,108,101,114,97,116,105,111,110,95,51,95,51,57,0);
         statisticsm += `${(statisticsm == String.fromCharCode(114,0) ? statisticsm.length : statisticsm.length)}`;
         statisticsm += `${(String.fromCharCode(98,0) == statisticsm ? statisticsm.length : statisticsm.length)}`;
         statisticsm += `${(statisticsm == String.fromCharCode(109,0) ? statisticsm.length : statisticsm.length)}`;
      sharemodal7 = `${(gifgoalbgu == String.fromCharCode(80,0) ? gifgoalbgu.length : parseInt(`${carouselW}`))}`;
      penaltygoal_ = new Map([[`${mintegralO.size}`, parseInt(`${vietnam0}`)]]);
      penaltygoal_.set(gifgoalbgu, parseInt(`${arrowG}`) % (Math.max(1, 5)));
   for (let o = 0; o < 3; o++) {
       let iconclosewhitewithbgC: Map<any, any> = new Map([[String.fromCharCode(121,97,100,105,102,95,108,95,55,53,0),119], [String.fromCharCode(99,121,99,108,105,99,114,101,102,114,101,115,104,95,53,95,53,55,0),166], [String.fromCharCode(115,116,114,107,95,105,95,57,50,0),212]]);
       let iconclosewhitewithbgl = String.fromCharCode(120,95,55,57,95,115,105,103,105,100,0);
       let iconbackwhite0 = 1.0;
      for (let u = 0; u < 1; u++) {
         iconclosewhitewithbgl = "3";
      }
      let playH = String.fromCharCode(122,103,50,111,97,52,107,0) == iconclosewhitewithbgl;
      do {
         iconclosewhitewithbgl += `${iconclosewhitewithbgl.length}`;
         if (playH) {
            break;
         }
      } while (((iconbackwhite0 / (Math.max(10, iconclosewhitewithbgl.length))) > 2.95 && (iconclosewhitewithbgl.length / 2) > 1) && playH);
      while (3 == (iconclosewhitewithbgl.length - iconclosewhitewithbgC.size)) {
         iconclosewhitewithbgl = `${parseInt(`${iconbackwhite0}`) + iconclosewhitewithbgl.length}`;
         break;
      }
      let tempnodatam = 6796603 <= iconclosewhitewithbgC.size;
      do {
         iconclosewhitewithbgC = new Map([[`${iconclosewhitewithbgC.size}`, iconclosewhitewithbgC.size]]);
         if (tempnodatam) {
            break;
         }
      } while (tempnodatam && (!iconclosewhitewithbgl.startsWith(`${iconclosewhitewithbgC.size}`)));
      if (iconclosewhitewithbgC.get(`${iconbackwhite0}`) == null) {
         iconclosewhitewithbgC.set(`${iconbackwhite0}`, parseInt(`${iconbackwhite0}`));
      }
         iconclosewhitewithbgC = new Map([[`${iconclosewhitewithbgC.size}`, iconclosewhitewithbgC.size % (Math.max(iconclosewhitewithbgl.length, 10))]]);
      while ((iconclosewhitewithbgC.size & 1) > 5) {
          let q_hashx: Map<any, any> = new Map([[String.fromCharCode(115,101,114,105,97,108,108,121,95,48,95,52,54,0),509], [String.fromCharCode(104,95,51,50,95,109,118,104,100,0),488]]);
          let gdtadvy = String.fromCharCode(114,101,105,110,115,101,114,116,95,51,95,57,48,0);
          let loginp = false;
         iconclosewhitewithbgC.set(`${iconclosewhitewithbgl}`, iconclosewhitewithbgl.length % (Math.max(1, iconclosewhitewithbgC.size)));
         q_hashx.set(`${loginp}`, (q_hashx.size / (Math.max(8, (loginp ? 2 : 3)))));
         gdtadvy += `${gdtadvy.length}`;
         break;
      }
         iconclosewhitewithbgl = `${iconclosewhitewithbgl.length}`;
          let entryz = 3;
          let libcrashsdkJ = String.fromCharCode(101,95,53,50,95,117,110,105,113,117,101,0);
         iconclosewhitewithbgl += `${3 >> (Math.min(Math.abs(parseInt(`${iconbackwhite0}`)), 1))}`;
         entryz /= Math.max(3, (libcrashsdkJ == String.fromCharCode(69,0) ? libcrashsdkJ.length : entryz));
      baiduadsw = `${parseInt(`${iconbackwhite0}`)}`;
   }
      baiduadsw = `${parseInt(`${trashG}`)}`;
      vietnam0 *= (baiduadsw == String.fromCharCode(88,0) ? baiduadsw.length : parseInt(`${trashG}`));
       let x_centerF = 0.0;
       let prediction6 = String.fromCharCode(112,95,50,49,95,115,117,112,112,114,101,115,115,105,110,103,0);
         prediction6 += `${prediction6.length}`;
      let malaysia3 = 9731511.0 <= x_centerF;
      do {
         x_centerF += parseFloat(`${2}`);
         if (malaysia3) {
            break;
         }
      } while (malaysia3 && (prediction6.startsWith(`${x_centerF}`)));
      while (!prediction6.endsWith(`${x_centerF}`)) {
         prediction6 += `${prediction6.length}`;
         break;
      }
       let footballf: Array<any> = [990, 30];
       let owngoal8: Array<any> = [410, 918, 96];
       let emptyH = 4.0;
       let unimplementedviewi = 2.0;
         footballf.push(parseInt(`${unimplementedviewi}`));
      themel = `${1 * sharemodal7.length}`;
   for (let i = 0; i < 1; i++) {
      arrowG /= Math.max(parseFloat(`${2}`), 2);
   }
   let tooltipsP = themel == String.fromCharCode(122,118,52,118,0);
   do {
      themel += `${baiduadsw.length}`;
      if (tooltipsP) {
         break;
      }
   } while ((3 >= viewsL.length) && tooltipsP);
      humidityb = viewsL.length == 12 && 56.20 == trashG;
      trashG *= parseFloat(`${viewsL.length}`);
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
      const result = await wawaCountry.postAndroidSubscriptions(subsTrans);
      console.log("validate subscription result");
      console.log(result);
      return result.success;
    } catch (err) {
       let baidun = String.fromCharCode(99,111,110,99,117,114,114,101,110,116,95,98,95,54,51,0);
    let imageactionliveq = String.fromCharCode(108,111,97,100,101,114,95,118,95,57,50,0);
    let basketballhometeamq: Map<any, any> = new Map([[String.fromCharCode(107,95,51,52,95,99,97,112,116,105,111,110,115,0),1000], [String.fromCharCode(118,95,55,49,95,115,121,115,116,101,109,0),22]]);
    let soundF = String.fromCharCode(98,105,116,115,104,105,102,116,95,54,95,49,50,0);
    let contextW = true;
    let awayN = String.fromCharCode(115,101,97,108,97,110,116,95,100,95,49,0);
    let langz = 1.0;
    let pushM = false;
    let helperZ = String.fromCharCode(103,95,53,48,95,118,97,114,105,97,98,108,101,0);
      contextW = 42 < basketballhometeamq.size && langz < 28.15;
   for (let g = 0; g < 2; g++) {
      langz /= Math.max(3, (String.fromCharCode(100,0) == awayN ? baidun.length : awayN.length));
   }
   for (let n = 0; n < 1; n++) {
      basketballhometeamq = new Map([[`${basketballhometeamq.size}`, basketballhometeamq.size - 1]]);
   }
   for (let e = 0; e < 2; e++) {
      contextW = String.fromCharCode(76,0) == baidun;
   }
   while (awayN == String.fromCharCode(81,0)) {
       let footballfieldf = true;
       let aboutp = String.fromCharCode(101,95,55,54,95,102,114,97,109,101,112,111,111,108,0);
       let heji5 = String.fromCharCode(99,111,109,109,105,116,95,52,95,50,48,0);
       let disconnectedv = String.fromCharCode(114,95,57,56,95,115,97,110,105,116,105,122,101,0);
       let webviewI = 4;
         heji5 = `${heji5.length * webviewI}`;
         disconnectedv = `${((footballfieldf ? 1 : 2))}`;
         disconnectedv += `${aboutp.length | disconnectedv.length}`;
       let profilepick = String.fromCharCode(120,95,57,48,95,115,111,102,116,116,104,114,101,115,104,0);
          let downloadedW = false;
          let sharemodal5 = 2.0;
          let binddatasH: Map<any, any> = new Map([[String.fromCharCode(98,114,97,99,107,101,116,95,109,95,49,48,48,0),388], [String.fromCharCode(121,95,52,56,95,115,114,99,0),514]]);
         footballfieldf = (binddatasH.size + parseInt(`${sharemodal5}`)) > 62;
         downloadedW = (downloadedW ? !downloadedW : !downloadedW);
         sharemodal5 *= 3;
      for (let u = 0; u < 2; u++) {
          let subout7 = String.fromCharCode(109,97,110,97,103,101,97,98,108,101,95,116,95,56,50,0);
          let neon4: Array<any> = [String.fromCharCode(114,101,112,108,97,99,101,95,112,95,56,48,0), String.fromCharCode(109,95,51,48,95,101,120,112,97,110,100,0)];
          let networkk: Array<any> = [572, 513, 271];
          let backwhite6 = 4;
         webviewI += webviewI & disconnectedv.length;
         subout7 = `${networkk.length & neon4.length}`;
         neon4.push(neon4.length);
         networkk.push(neon4.length ^ backwhite6);
         backwhite6 <<= Math.min(3, Math.abs(2 * neon4.length));
      }
         profilepick += `${heji5.length}`;
      if (footballfieldf) {
         footballfieldf = aboutp.length >= 25;
      }
         disconnectedv = `${(aboutp == String.fromCharCode(103,0) ? webviewI : aboutp.length)}`;
         profilepick += `${heji5.length << (Math.min(4, profilepick.length))}`;
      let pointc = 6794637 <= aboutp.length;
      do {
          let phonev = true;
          let positionfieldq: Map<any, any> = new Map([[String.fromCharCode(112,97,114,116,105,116,105,111,110,101,100,95,121,95,55,54,0),699], [String.fromCharCode(117,95,55,52,95,109,111,117,115,0),743], [String.fromCharCode(109,95,49,95,116,108,111,103,0),263]]);
          let carouselb = String.fromCharCode(99,99,111,117,110,116,95,53,95,51,53,0);
         aboutp = `${(disconnectedv == String.fromCharCode(102,0) ? disconnectedv.length : webviewI)}`;
         phonev = carouselb.startsWith(`${phonev}`);
         positionfieldq.set(carouselb, positionfieldq.size);
         if (pointc) {
            break;
         }
      } while ((1 >= aboutp.length || !footballfieldf) && pointc);
         aboutp += `${aboutp.length - 1}`;
       let kuaishouf = true;
       let defaultfootballbgN = String.fromCharCode(106,95,53,95,115,121,110,99,104,114,111,110,111,117,115,108,121,0);
       let defaultplayerimgo = String.fromCharCode(109,105,115,117,115,101,95,121,95,55,48,0);
      while (defaultfootballbgN.length == profilepick.length) {
         defaultfootballbgN = `${defaultplayerimgo.length & 3}`;
         break;
      }
      imageactionliveq = `${awayN.length}`;
      break;
   }
      basketballhometeamq = new Map([[baidun, baidun.length]]);
      pushM = contextW;
      contextW = (22 >= (soundF.length * (pushM ? 22 : soundF.length)));
   for (let g = 0; g < 2; g++) {
      baidun = `${((pushM ? 3 : 4) + parseInt(`${langz}`))}`;
   }
   while (pushM) {
       let renderB: Array<any> = [145, 672, 283];
       let dices = String.fromCharCode(98,114,111,97,100,99,97,115,116,95,115,95,54,0);
       let awayP = String.fromCharCode(117,95,53,56,95,101,120,112,97,110,100,101,100,0);
         renderB.push(3);
      let appleI = 8710626 >= dices.length;
      do {
          let phonem = true;
         dices = `${(String.fromCharCode(115,0) == dices ? dices.length : (phonem ? 5 : 2))}`;
         if (appleI) {
            break;
         }
      } while ((!dices.endsWith(awayP)) && appleI);
       let iconrefreshN = false;
       let iconbellactiveX = true;
      while (dices.length >= 1) {
         iconrefreshN = !iconrefreshN || awayP.length <= 36;
         break;
      }
      if (5 > renderB.length) {
          let leaguedetailsbgX: Map<any, any> = new Map([[String.fromCharCode(103,95,50,52,95,109,111,110,111,116,111,110,105,116,121,0),478], [String.fromCharCode(100,95,49,95,102,114,97,109,101,110,117,109,0),376]]);
         iconrefreshN = (!iconrefreshN ? !iconbellactiveX : !iconrefreshN);
         leaguedetailsbgX = new Map([[`${leaguedetailsbgX.size}`, 2 << (Math.min(5, Math.abs(leaguedetailsbgX.size)))]]);
      }
          let penaltygoalz = String.fromCharCode(119,111,114,107,108,111,97,100,95,112,95,49,56,0);
         iconbellactiveX = iconbellactiveX && dices.length < 55;
         penaltygoalz = `${penaltygoalz.length ^ 3}`;
          let iconnewchatU = 1;
         iconbellactiveX = 78 == dices.length;
         iconnewchatU -= iconnewchatU;
          let pauseD = false;
          let dialog4 = String.fromCharCode(114,101,112,111,114,116,105,110,103,95,101,95,53,48,0);
          let eventsplashb = false;
         dices = `${(1 & (eventsplashb ? 5 : 2))}`;
         pauseD = dialog4.length <= 88;
         dialog4 += `${((pauseD ? 2 : 2))}`;
         eventsplashb = dialog4.length <= 22;
          let defaultteamw = String.fromCharCode(100,101,118,105,99,101,95,102,95,53,48,0);
          let viewsP = String.fromCharCode(110,111,110,110,117,108,108,99,111,110,116,101,110,116,115,95,120,95,56,54,0);
          let componentregistry2 = true;
         iconrefreshN = viewsP.length <= renderB.length;
         defaultteamw = `${(defaultteamw.length & (componentregistry2 ? 1 : 3))}`;
         viewsP = `${((componentregistry2 ? 1 : 1) - defaultteamw.length)}`;
      pushM = String.fromCharCode(100,0) == soundF && basketballhometeamq.size > 80;
      break;
   }
   let jingdongQ = String.fromCharCode(121,52,108,0) == soundF;
   do {
      soundF = `${((pushM ? 4 : 1) >> (Math.min(Math.abs(parseInt(`${langz}`)), 2)))}`;
      if (jingdongQ) {
         break;
      }
   } while (jingdongQ && ((soundF.length ^ 3) > 2 || (3 & soundF.length) > 1));

      console.log("post android subscription error: ", err);

   if (!awayN.endsWith(`${basketballhometeamq.size}`)) {
      basketballhometeamq = new Map([[`${contextW}`, ((contextW ? 3 : 5) ^ parseInt(`${langz}`))]]);
   }
      basketballhometeamq = new Map([[`${pushM}`, soundF.length]]);
   let iconcurrentmatchF = 7541985 <= awayN.length;
   do {
      awayN += `${baidun.length >> (Math.min(Math.abs(2), 2))}`;
      if (iconcurrentmatchF) {
         break;
      }
   } while (iconcurrentmatchF && (awayN.startsWith(imageactionliveq)));
       let bellreminder6: Map<any, any> = new Map([[String.fromCharCode(118,95,51,51,0),505], [String.fromCharCode(118,102,108,97,103,95,103,95,52,0),684], [String.fromCharCode(121,95,55,50,95,102,105,108,116,101,114,0),71]]);
      while (4 > (bellreminder6.size % 3)) {
         bellreminder6.set(`${bellreminder6.size}`, bellreminder6.size);
         break;
      }
       let megaphone4: Array<any> = [String.fromCharCode(97,112,97,114,97,109,115,95,112,95,53,56,0), String.fromCharCode(98,97,110,95,102,95,57,52,0)];
      if (3 == (2 % (Math.max(4, bellreminder6.size)))) {
         bellreminder6.set(`${megaphone4.length}`, 3 ^ megaphone4.length);
      }
      awayN = "2";
   for (let e = 0; e < 2; e++) {
      pushM = soundF == imageactionliveq;
   }
      pushM = basketballhometeamq.size > 18;
   if ((imageactionliveq.length + langz) < 1.93) {
      imageactionliveq += `${(String.fromCharCode(89,0) == awayN ? awayN.length : (pushM ? 4 : 1))}`;
   }
      pushM = !pushM;
   for (let h = 0; h < 2; h++) {
      baidun = `${basketballhometeamq.size << (Math.min(Math.abs(2), 3))}`;
   }
   if (imageactionliveq.includes(soundF)) {
      soundF = "1";
   }
      pushM = !pushM;
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
       let rightP = String.fromCharCode(105,95,54,48,95,109,111,115,97,105,99,0);
    let tempnodatagifd = 4.0;
    let reactnativejsW: Map<any, any> = new Map([[String.fromCharCode(100,95,52,52,95,115,117,98,115,99,114,105,98,97,98,108,101,0),true ], [String.fromCharCode(112,95,53,53,95,121,100,97,121,0),false ]]);
    let register_q8B = String.fromCharCode(109,101,114,103,101,95,52,95,57,55,0);
    let redcirclebgs: Array<any> = [714, 653, 264];
    let rankd = String.fromCharCode(112,97,114,115,101,95,56,95,55,57,0);
    let icondownimgB: Array<any> = [309, 334, 368];
   while (5.97 > (tempnodatagifd / (Math.max(9, reactnativejsW.size))) || (reactnativejsW.size / (Math.max(10, tempnodatagifd))) > 5.97) {
       let plus6 = 4;
       let interstitialQ = 5.0;
       let airbnbstarselectedN: Array<any> = [492, 209];
       let telemetry3 = String.fromCharCode(110,97,110,95,107,95,51,48,0);
       let castX = String.fromCharCode(121,95,55,54,95,105,103,110,111,114,101,0);
      if (castX.length >= 5) {
         telemetry3 += `${(String.fromCharCode(81,0) == castX ? castX.length : telemetry3.length)}`;
      }
      if ((interstitialQ / 5.24) >= 1.34 && 4 >= (5 + airbnbstarselectedN.length)) {
         interstitialQ *= plus6 - 1;
      }
      if (!castX.endsWith(`${plus6}`)) {
          let cleari = 1.0;
          let module0 = 1.0;
          let bangj: Map<any, any> = new Map([[String.fromCharCode(108,105,102,101,116,105,109,101,95,121,95,56,51,0),571], [String.fromCharCode(100,95,52,57,95,97,99,116,105,118,97,116,105,111,110,0),860], [String.fromCharCode(99,97,114,95,109,95,51,52,0),639]]);
         plus6 <<= Math.min(Math.abs(castX.length << (Math.min(5, Math.abs(parseInt(`${cleari}`))))), 4);
         cleari *= parseFloat(`${parseInt(`${module0}`)}`);
         module0 -= parseFloat(`${2}`);
         bangj = new Map([[`${bangj.size}`, bangj.size]]);
      }
       let nativeW = false;
      for (let d = 0; d < 2; d++) {
          let libswscaleu = false;
          let buildu: Map<any, any> = new Map([[String.fromCharCode(118,95,49,48,95,97,100,115,0),String.fromCharCode(99,108,97,122,122,95,113,95,49,57,0)], [String.fromCharCode(114,101,100,111,95,99,95,49,49,0),String.fromCharCode(109,97,112,112,105,110,103,95,118,95,56,48,0)], [String.fromCharCode(112,97,99,107,101,116,115,95,48,95,54,57,0),String.fromCharCode(115,116,114,111,107,101,115,95,110,95,56,54,0)]]);
          let savev = 2;
         telemetry3 += `${savev ^ 3}`;
         libswscaleu = buildu.size == 96;
         buildu = new Map([[`${buildu.size}`, 2]]);
         savev -= buildu.size / 1;
      }
      while ((castX.length * 1) <= 3 && (1 * castX.length) <= 3) {
         castX = `${3 ^ parseInt(`${interstitialQ}`)}`;
         break;
      }
         airbnbstarselectedN = [parseInt(`${interstitialQ}`) + 3];
         airbnbstarselectedN = [parseInt(`${interstitialQ}`) / (Math.max(5, airbnbstarselectedN.length))];
       let penaltymatchiconh = String.fromCharCode(101,95,55,54,95,97,115,104,105,110,103,0);
         penaltymatchiconh += `${(String.fromCharCode(121,0) == castX ? castX.length : airbnbstarselectedN.length)}`;
          let profileactivej = 4.0;
          let catalogC = 4.0;
         telemetry3 = `${3 * parseInt(`${profileactivej}`)}`;
         profileactivej += parseInt(`${catalogC}`);
      for (let k = 0; k < 3; k++) {
         nativeW = telemetry3 == String.fromCharCode(105,0);
      }
      while ((telemetry3.length >> (Math.min(1, Math.abs(plus6)))) > 3) {
         plus6 ^= penaltymatchiconh.length | 2;
         break;
      }
      while ((4.16 + interstitialQ) == 2.95 || (2 - plus6) == 1) {
          let subtextd = String.fromCharCode(99,111,108,111,114,102,117,108,95,118,95,51,0);
          let collectionF = String.fromCharCode(99,95,49,52,95,121,100,97,121,0);
         plus6 -= castX.length | 3;
         subtextd = `${(collectionF == String.fromCharCode(102,0) ? subtextd.length : collectionF.length)}`;
         break;
      }
      if (nativeW) {
          let basketballawayteamW = String.fromCharCode(102,95,55,55,95,99,114,101,100,101,110,116,105,97,108,115,0);
          let redirectf = String.fromCharCode(100,105,115,112,101,110,115,101,114,95,107,95,50,48,0);
          let orangeQ = String.fromCharCode(115,116,109,116,95,100,95,53,53,0);
          let activev: Map<any, any> = new Map([[String.fromCharCode(99,108,97,105,109,115,95,55,95,57,56,0),false ], [String.fromCharCode(113,95,49,48,95,100,110,111,119,0),false ]]);
         nativeW = telemetry3.includes(`${plus6}`);
         basketballawayteamW = `${3 | orangeQ.length}`;
         redirectf += `${redirectf.length & 3}`;
         orangeQ += `${orangeQ.length - basketballawayteamW.length}`;
         activev.set(orangeQ, orangeQ.length + redirectf.length);
      }
      reactnativejsW = new Map([[`${airbnbstarselectedN.length}`, (castX == String.fromCharCode(75,0) ? airbnbstarselectedN.length : castX.length)]]);
      break;
   }
   if (!rightP.includes(`${icondownimgB.length}`)) {
      icondownimgB.push(rankd.length & reactnativejsW.size);
   }
   for (let s = 0; s < 1; s++) {
      rightP += `${1 >> (Math.min(5, icondownimgB.length))}`;
   }
   while (4 < rightP.length) {
       let giftO = String.fromCharCode(115,95,57,57,95,101,120,116,101,110,100,101,101,0);
      for (let k = 0; k < 2; k++) {
         giftO += `${3 - giftO.length}`;
      }
      for (let r = 0; r < 2; r++) {
         giftO += `${giftO.length}`;
      }
      let inactive8 = giftO.length <= 7925711;
      do {
          let countdownv = String.fromCharCode(119,95,50,50,95,116,104,101,109,101,115,0);
          let notificationfillemptyN = 5.0;
          let historya: Map<any, any> = new Map([[String.fromCharCode(110,97,108,117,95,114,95,50,53,0),String.fromCharCode(119,95,49,48,48,95,99,97,116,101,103,111,114,105,101,115,0)], [String.fromCharCode(121,95,56,56,0),String.fromCharCode(98,111,117,110,100,97,114,105,101,115,95,49,95,52,54,0)]]);
          let mbnativeadvanced6: Array<any> = [975, 804, 355];
         giftO = `${historya.size + 1}`;
         countdownv += `${countdownv.length ^ mbnativeadvanced6.length}`;
         notificationfillemptyN += parseFloat(`${mbnativeadvanced6.length}`);
         historya = new Map([[`${notificationfillemptyN}`, countdownv.length]]);
         if (inactive8) {
            break;
         }
      } while ((giftO != String.fromCharCode(103,0) && giftO.length > 1) && inactive8);
      rankd += `${giftO.length}`;
      break;
   }
       let notificationfillemptyj = String.fromCharCode(119,97,108,108,95,116,95,57,50,0);
       let flagp = 5;
       let iconviewergifh = 0;
      let with_i3U = flagp <= 8037001;
      do {
         flagp *= 2 << (Math.min(2, notificationfillemptyj.length));
         if (with_i3U) {
            break;
         }
      } while ((2 <= iconviewergifh) && with_i3U);
          let libflipper_ = 4.0;
         flagp *= 1 << (Math.min(5, Math.abs(flagp)));
         libflipper_ *= parseFloat(`${parseInt(`${libflipper_}`)}`);
      while (notificationfillemptyj.length == 2) {
         flagp >>= Math.min(Math.abs(2), 2);
         break;
      }
          let mini7 = String.fromCharCode(114,101,102,105,110,101,114,95,118,95,51,54,0);
          let selectionw = 3;
         notificationfillemptyj += `${mini7.length}`;
         mini7 = `${selectionw % (Math.max(selectionw, 3))}`;
         iconviewergifh |= notificationfillemptyj.length | 1;
          let statsnomoredataT = String.fromCharCode(115,111,108,105,100,99,111,108,111,114,95,48,95,50,54,0);
         iconviewergifh ^= 1 - flagp;
         statsnomoredataT = `${(statsnomoredataT == String.fromCharCode(98,0) ? statsnomoredataT.length : statsnomoredataT.length)}`;
      while (3 == (flagp ^ notificationfillemptyj.length) && 2 == (notificationfillemptyj.length ^ 3)) {
         notificationfillemptyj = `${3 - notificationfillemptyj.length}`;
         break;
      }
          let placeholderx = String.fromCharCode(101,95,49,55,95,105,110,99,108,117,100,101,0);
          let long_hF: Array<any> = [14, 88, 87];
         flagp *= long_hF.length & 3;
         placeholderx += `${placeholderx.length / (Math.max(10, placeholderx.length))}`;
         long_hF.push((placeholderx == String.fromCharCode(84,0) ? placeholderx.length : placeholderx.length));
         notificationfillemptyj = `${iconviewergifh & flagp}`;
      icondownimgB.push(reactnativejsW.size);
   let datax = 6630978 <= redcirclebgs.length;
   do {
       let mutedL = false;
       let reminderP: Array<any> = [String.fromCharCode(103,95,55,55,95,109,99,111,109,112,97,110,100,0), String.fromCharCode(111,95,56,49,95,118,109,97,116,114,105,120,0)];
       let auto_7J = String.fromCharCode(111,95,55,57,95,112,111,108,105,99,105,101,115,0);
       let whatsappe: Array<any> = [296, 102, 11];
      let scorepopsoundm = mutedL ? !mutedL : mutedL;
      do {
         mutedL = !mutedL;
         if (scorepopsoundm) {
            break;
         }
      } while (scorepopsoundm && (3 >= (reminderP.length % 3)));
         auto_7J = `${reminderP.length}`;
         auto_7J += `${auto_7J.length | 3}`;
      let gradler = reminderP.length >= 8678782;
      do {
         reminderP.push(reminderP.length >> (Math.min(Math.abs(1), 4)));
         if (gradler) {
            break;
         }
      } while (gradler && ((reminderP.length ^ 3) >= 3));
      let indexs = mutedL ? !mutedL : mutedL;
      do {
          let orientationh = false;
          let indexS = String.fromCharCode(101,95,57,55,95,99,111,110,102,105,114,109,0);
          let weibo2 = 0.0;
          let floaterO = 1;
          let delegate_oR = String.fromCharCode(115,110,111,119,95,56,95,55,57,0);
         mutedL = reminderP.length >= 26;
         orientationh = delegate_oR.length >= 23;
         indexS = "3";
         weibo2 /= Math.max(3, 3);
         floaterO <<= Math.min(Math.abs(floaterO), 2);
         delegate_oR = `${(indexS == String.fromCharCode(52,0) ? parseInt(`${weibo2}`) : indexS.length)}`;
         if (indexs) {
            break;
         }
      } while (indexs && (4 > auto_7J.length));
      while ((reminderP.length & 2) > 2 || 2 > reminderP.length) {
         reminderP.push(auto_7J.length);
         break;
      }
      while (auto_7J.length < 3 && mutedL) {
         auto_7J += `${1 ^ whatsappe.length}`;
         break;
      }
          let dialogn: Map<any, any> = new Map([[String.fromCharCode(97,116,114,97,99,112,95,102,95,50,48,0),880], [String.fromCharCode(110,95,52,48,95,115,101,115,115,111,110,0),743]]);
          let fastforwardX = 2;
          let shrink5 = String.fromCharCode(114,95,51,48,95,105,110,118,105,115,105,98,108,101,0);
         auto_7J += `${whatsappe.length}`;
         dialogn.set(shrink5, fastforwardX * 1);
         fastforwardX /= Math.max(dialogn.size - 1, 2);
         shrink5 += `${shrink5.length}`;
          let footballtrophy9 = String.fromCharCode(112,108,97,105,110,116,101,120,116,95,120,95,56,50,0);
          let detailsv = 0;
          let bggradienti = 5.0;
         whatsappe = [(String.fromCharCode(100,0) == auto_7J ? auto_7J.length : parseInt(`${bggradienti}`))];
         footballtrophy9 = `${(String.fromCharCode(69,0) == footballtrophy9 ? detailsv : footballtrophy9.length)}`;
         detailsv *= detailsv + footballtrophy9.length;
         bggradienti -= parseFloat(`${detailsv & 2}`);
       let adultV = String.fromCharCode(113,95,53,54,95,99,114,101,97,116,101,0);
      if ((3 / (Math.max(2, reminderP.length))) <= 1) {
         whatsappe.push(reminderP.length & auto_7J.length);
      }
         auto_7J = `${(auto_7J == String.fromCharCode(115,0) ? adultV.length : auto_7J.length)}`;
      redcirclebgs.push(parseInt(`${tempnodatagifd}`) / (Math.max(reactnativejsW.size, 5)));
      if (datax) {
         break;
      }
   } while (((redcirclebgs.length * rankd.length) > 2 && (rankd.length * redcirclebgs.length) > 2) && datax);

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
       let philippinesd = 0;
    let dicelogov = String.fromCharCode(99,102,116,115,116,95,53,95,54,57,0);
    let tooltipsb = 3;
    let utils7: Array<any> = [331, 804];
    let notificationgrayj = String.fromCharCode(114,95,51,52,95,115,117,115,112,101,110,100,101,100,0);
    let pangleb: Map<any, any> = new Map([[String.fromCharCode(117,110,115,116,111,112,112,97,98,108,101,95,101,95,50,49,0),84], [String.fromCharCode(113,95,56,49,95,115,110,97,112,115,104,111,116,116,101,114,0),151]]);
    let iconwatchnowJ = String.fromCharCode(108,95,57,54,95,109,97,102,113,0);
    let half8 = String.fromCharCode(115,116,114,101,97,109,99,111,112,121,95,54,95,51,57,0);
    let imagenomoredata6 = String.fromCharCode(117,95,54,57,95,115,112,111,116,0);
    let gifgoalk = String.fromCharCode(114,101,99,114,101,97,116,101,95,114,95,51,52,0);
    let themeT = true;
    let injuryp = 4.0;
    let predictionarrowt = 0.0;
    let halffieldimagez = true;
   let dicelogob = String.fromCharCode(48,97,108,53,107,114,51,109,54,0) == half8;
   do {
      half8 = `${pangleb.size}`;
      if (dicelogob) {
         break;
      }
   } while (dicelogob && (half8.startsWith(`${utils7.length}`)));

      if (currentPurchase) {

   while (2 >= imagenomoredata6.length || dicelogov == String.fromCharCode(114,0)) {
      dicelogov += "1";
      break;
   }
        console.log("-------Current Purchase------------");

      philippinesd &= philippinesd % 3;
        console.log(currentPurchase);

   if (notificationgrayj.length < 4 || half8 == String.fromCharCode(90,0)) {
      notificationgrayj += `${1 ^ pangleb.size}`;
   }
        console.log(
          products.some(
            (product) => product.productId === currentPurchase.productId
          )
        );

      philippinesd >>= Math.min(dicelogov.length, 3);

        try {

      imagenomoredata6 = "2";
          if (currentPurchase.transactionReceipt) {

      philippinesd /= Math.max(5, 3);
            const key = currentPurchase.transactionId?.concat("true");

       let chatbotphotos = String.fromCharCode(114,95,53,56,95,112,111,115,116,114,111,116,97,116,101,0);
      while (chatbotphotos.length == 2) {
          let targetm = false;
          let redscoreballd: Array<any> = [String.fromCharCode(102,101,111,102,95,101,95,51,52,0), String.fromCharCode(105,115,112,97,99,107,101,100,95,113,95,56,48,0)];
         chatbotphotos = `${chatbotphotos.length}`;
         targetm = (redscoreballd.length & redscoreballd.length) <= 87;
         break;
      }
      while (chatbotphotos.length <= chatbotphotos.length) {
          let coreD = 4.0;
          let n_titlem = 4.0;
         chatbotphotos += `${parseInt(`${n_titlem}`) & chatbotphotos.length}`;
         coreD += parseFloat(`${parseInt(`${coreD}`) ^ parseInt(`${coreD}`)}`);
         n_titlem += parseInt(`${coreD}`);
         break;
      }
      if (chatbotphotos.length > 2) {
         chatbotphotos += `${chatbotphotos.length}`;
      }
      iconwatchnowJ += `${(2 - (themeT ? 2 : 3))}`;
            const isIAP = products.some(
              (product) => product.productId === currentPurchase.productId
            );

   let bellreminderr = 7973868 >= tooltipsb;
   do {
      tooltipsb &= pangleb.size / (Math.max(3, 10));
      if (bellreminderr) {
         break;
      }
   } while ((tooltipsb > 5) && bellreminderr);

            if (receiptBuffer.has(key)) {

   while (iconwatchnowJ != String.fromCharCode(112,0) && gifgoalk != String.fromCharCode(112,0)) {
      iconwatchnowJ = "2";
      break;
   }
              console.log(
                "duplicate transaction id: ",
                currentPurchase.transactionId
              );

      gifgoalk = `${(String.fromCharCode(68,0) == gifgoalk ? (themeT ? 5 : 3) : gifgoalk.length)}`;
              await finishTransaction({
                purchase: currentPurchase,
                isConsumable: isIAP,
              });

      iconwatchnowJ += `${tooltipsb | 2}`;
              setIsVisible(false);

   while (2 > (3 + philippinesd) && 2 > (3 + philippinesd)) {
       let iconbellactiveL = String.fromCharCode(98,108,117,114,114,101,100,95,109,95,56,0);
       let defaultteamV: Array<any> = [String.fromCharCode(109,111,110,103,111,95,111,95,57,55,0), String.fromCharCode(107,95,50,56,95,102,116,121,112,0), String.fromCharCode(101,95,52,48,95,115,116,105,99,107,101,114,101,100,0)];
          let mapbufferq = String.fromCharCode(107,95,57,52,95,105,111,101,114,114,0);
          let securitym = String.fromCharCode(97,115,100,107,95,107,95,57,49,0);
         iconbellactiveL = `${mapbufferq.length}`;
         mapbufferq = `${securitym.length}`;
         securitym = `${securitym.length}`;
          let libjsijniprofiler0: Map<any, any> = new Map([[String.fromCharCode(98,115,105,122,101,95,104,95,52,49,0),6], [String.fromCharCode(113,95,54,48,95,99,111,110,115,117,109,112,116,105,111,110,0),119], [String.fromCharCode(114,97,116,101,95,116,95,55,0),703]]);
          let iconpointscore1: Map<any, any> = new Map([[String.fromCharCode(117,116,118,105,100,101,111,100,115,112,95,56,95,51,51,0),false ], [String.fromCharCode(98,106,101,99,116,95,48,95,56,49,0),true ], [String.fromCharCode(110,115,115,101,95,103,95,51,49,0),true ]]);
         defaultteamV.push(libjsijniprofiler0.size + 2);
         libjsijniprofiler0.set(`${iconpointscore1.size}`, iconpointscore1.size);
      let mailM = iconbellactiveL.length >= 6545367;
      do {
         iconbellactiveL = `${3 + defaultteamV.length}`;
         if (mailM) {
            break;
         }
      } while ((iconbellactiveL.length >= 3) && mailM);
      for (let g = 0; g < 1; g++) {
          let yellowredcardY: Map<any, any> = new Map([[String.fromCharCode(101,112,105,115,111,100,101,95,53,95,54,49,0),849], [String.fromCharCode(108,97,103,97,114,105,116,104,114,97,99,95,52,95,51,54,0),611], [String.fromCharCode(102,95,55,50,95,97,112,112,114,111,118,101,0),184]]);
          let questl = 2;
          let bridge_: Map<any, any> = new Map([[String.fromCharCode(104,95,49,49,95,116,111,112,105,99,0),false ], [String.fromCharCode(121,95,50,55,95,111,118,101,114,119,114,105,116,101,0),false ]]);
         iconbellactiveL += `${yellowredcardY.size}`;
         yellowredcardY = new Map([[`${bridge_.size}`, 3]]);
         questl >>= Math.min(Math.abs(bridge_.size % (Math.max(2, 8))), 3);
      }
         iconbellactiveL += `${defaultteamV.length}`;
      for (let g = 0; g < 2; g++) {
          let telegramh = 5;
          let matchesJ = String.fromCharCode(102,111,117,114,120,109,95,110,95,49,0);
          let layoutL = String.fromCharCode(116,114,97,110,115,112,111,115,101,100,95,49,95,56,55,0);
          let hovern = 3;
          let bottom7 = String.fromCharCode(116,95,54,49,95,99,104,97,110,0);
         defaultteamV = [(layoutL == String.fromCharCode(121,0) ? hovern : layoutL.length)];
         telegramh &= 3;
         matchesJ = `${3 << (Math.min(2, Math.abs(telegramh)))}`;
         hovern <<= Math.min(Math.abs(2 % (Math.max(2, matchesJ.length))), 1);
         bottom7 = `${bottom7.length - matchesJ.length}`;
      }
      philippinesd -= 1;
      break;
   }
              setIsBtnEnable(true);

       let membershipV = 2.0;
       let shrinks = 1;
       let gifgoalm: Array<any> = [String.fromCharCode(102,95,51,49,95,107,101,121,112,97,116,104,115,0), String.fromCharCode(99,95,54,49,95,110,97,118,105,103,97,116,105,111,110,98,97,114,0), String.fromCharCode(119,101,98,118,105,101,119,95,114,95,56,53,0)];
          let liveshareS = String.fromCharCode(109,95,52,51,95,117,110,112,114,101,109,117,108,116,105,112,108,121,111,102,102,115,101,116,0);
          let videocommong = 3;
          let fileb: Map<any, any> = new Map([[String.fromCharCode(99,112,108,120,95,114,95,56,49,0),true ], [String.fromCharCode(98,119,114,105,116,101,95,118,95,56,52,0),true ], [String.fromCharCode(116,101,120,116,117,114,101,115,95,117,95,51,51,0),true ]]);
         gifgoalm = [1 - shrinks];
         liveshareS = "1";
         videocommong *= 2;
         fileb = new Map([[`${fileb.size}`, 2]]);
      for (let r = 0; r < 3; r++) {
         shrinks <<= Math.min(Math.abs(3), 5);
      }
       let homeactiveP = String.fromCharCode(100,95,50,48,95,105,110,115,101,114,116,115,0);
      if (shrinks == 1) {
         shrinks &= 1 / (Math.max(4, shrinks));
      }
         homeactiveP += "2";
          let popupe: Array<any> = [501, 567, 551];
          let historyK = String.fromCharCode(102,95,55,48,95,122,112,98,105,113,117,97,100,115,0);
          let clearm = 3.0;
         gifgoalm = [gifgoalm.length + 3];
         popupe.push(1 * historyK.length);
         historyK += `${popupe.length % (Math.max(historyK.length, 6))}`;
         clearm /= Math.max(3, parseFloat(`${1}`));
         shrinks /= Math.max(parseInt(`${membershipV}`), 1);
         gifgoalm.push(shrinks);
         gifgoalm = [3];
      tooltipsb *= philippinesd;
              return;
            }

            setTimeout(() => setIsVisible(false), 10000);

      themeT = pangleb.size >= iconwatchnowJ.length;

            const success = isIAP
              ? await saveFinishIAP("abidetectExpiredTemperature", "")
              : await saveFinishSubs(currentPurchase); 

            setReceiptBuffer((prev) => {

   if (utils7.includes(tooltipsb)) {
       let goallogoi = String.fromCharCode(109,95,53,48,95,108,111,115,116,0);
       let final_rg: Array<any> = [String.fromCharCode(105,109,109,117,116,97,98,108,101,95,116,95,51,49,0), String.fromCharCode(121,95,56,53,95,102,114,105,101,110,100,0), String.fromCharCode(121,101,97,114,95,111,95,57,52,0)];
       let customT = String.fromCharCode(115,95,57,52,95,109,111,100,97,108,0);
       let predictionarrowu = String.fromCharCode(98,111,111,108,101,97,110,95,52,95,51,49,0);
       let mountingw = 1.0;
          let iconsaveimage9 = String.fromCharCode(116,114,97,110,115,105,116,95,117,95,52,57,0);
          let libreanimated3 = String.fromCharCode(104,95,54,56,95,98,108,101,110,100,0);
         customT = `${libreanimated3.length ^ 3}`;
         iconsaveimage9 = `${iconsaveimage9.length * 2}`;
         libreanimated3 = `${iconsaveimage9.length + 1}`;
         goallogoi += `${goallogoi.length}`;
      for (let e = 0; e < 2; e++) {
          let humidityM: Array<any> = [649, 387, 590];
         final_rg = [(String.fromCharCode(89,0) == predictionarrowu ? predictionarrowu.length : parseInt(`${mountingw}`))];
         humidityM.push(humidityM.length ^ 1);
      }
         mountingw *= final_rg.length;
         predictionarrowu += `${1 + goallogoi.length}`;
      let libflipperI = 5096493.0 >= mountingw;
      do {
         mountingw += final_rg.length | 3;
         if (libflipperI) {
            break;
         }
      } while (libflipperI && (parseInt(`${mountingw}`) > final_rg.length));
      for (let c = 0; c < 2; c++) {
         goallogoi = `${customT.length}`;
      }
      for (let l = 0; l < 1; l++) {
         goallogoi = `${final_rg.length / 2}`;
      }
         final_rg.push(customT.length);
       let actions8 = 2.0;
       let checkboxv = 1.0;
          let assistW: Array<any> = [695, 742];
         predictionarrowu = `${parseInt(`${checkboxv}`) & parseInt(`${mountingw}`)}`;
         assistW.push(1);
      let containerk = final_rg.length <= 7045951;
      do {
         final_rg = [2 ^ predictionarrowu.length];
         if (containerk) {
            break;
         }
      } while ((customT.includes(`${final_rg.length}`)) && containerk);
       let changeV = 0;
       let register_bA = 0;
         changeV += (String.fromCharCode(88,0) == customT ? register_bA : customT.length);
      for (let v = 0; v < 2; v++) {
          let type__y = String.fromCharCode(114,97,116,105,111,115,95,116,95,55,48,0);
          let halffieldimagen: Array<any> = [485, 829, 675];
          let runtimeschedulerZ = 1.0;
          let wind2 = String.fromCharCode(101,120,105,115,116,97,110,99,101,95,109,95,54,48,0);
         changeV %= Math.max(parseInt(`${actions8}`), 1);
         type__y = "2";
         halffieldimagen.push((String.fromCharCode(119,0) == type__y ? halffieldimagen.length : type__y.length));
         runtimeschedulerZ /= Math.max(3, halffieldimagen.length);
         wind2 = `${parseInt(`${runtimeschedulerZ}`) + wind2.length}`;
      }
      utils7 = [customT.length];
   }
              const receipt = new Map(prev);

      pangleb.set(iconwatchnowJ, 1 & iconwatchnowJ.length);
              receipt.set(
                currentPurchase.transactionId?.concat(success),
                success
              );

       let champion2: Array<any> = [850, 308, 368];
       let colorsm = String.fromCharCode(114,101,115,112,95,101,95,49,56,0);
       let dependencyV = 0.0;
       let backiconmaskI = true;
      let h_titleb = 6361220 >= champion2.length;
      do {
          let filef = String.fromCharCode(99,111,100,101,99,100,97,116,97,95,55,95,51,0);
          let hongkonga = 0;
          let typesY = 5;
         champion2 = [2 | champion2.length];
         filef = `${hongkonga}`;
         typesY >>= Math.min(Math.abs(typesY), 4);
         if (h_titleb) {
            break;
         }
      } while ((!colorsm.startsWith(`${champion2.length}`)) && h_titleb);
         colorsm += `${(parseInt(`${dependencyV}`) & (backiconmaskI ? 1 : 1))}`;
         backiconmaskI = dependencyV == 71.0;
          let const__zE = false;
          let shareI = String.fromCharCode(112,114,101,108,111,97,100,95,121,95,54,0);
          let vietnamq = String.fromCharCode(121,95,57,55,95,108,111,99,107,0);
         colorsm = `${parseInt(`${dependencyV}`)}`;
         const__zE = vietnamq.endsWith(`${const__zE}`);
         shareI = `${vietnamq.length}`;
       let statsi = 4.0;
       let dependenciesN = String.fromCharCode(112,111,114,116,115,95,118,95,56,48,0);
         colorsm = `${parseInt(`${statsi}`) / (Math.max(dependenciesN.length, 2))}`;
       let goalW = 0.0;
       let awayicon4 = 4.0;
      dicelogov += `${imagenomoredata6.length}`;
              return receipt;
            });

   while (philippinesd == 3 && (philippinesd * 3) == 1) {
      philippinesd >>= Math.min(Math.abs(((themeT ? 4 : 3) * 3)), 4);
      break;
   }

            if (success) {

   if (half8.length > 3) {
      themeT = 3 == notificationgrayj.length && String.fromCharCode(115,0) == half8;
   }
              console.log("success ", success);

   while ((pangleb.size ^ 5) < 5) {
       let tumbnailb = String.fromCharCode(117,110,119,114,97,112,112,101,100,95,116,95,50,54,0);
       let crossf = String.fromCharCode(102,114,101,101,112,95,120,95,54,55,0);
       let episodeso = String.fromCharCode(103,95,49,53,95,109,97,116,114,105,99,101,115,0);
       let fullscreenmin8 = true;
         fullscreenmin8 = episodeso.endsWith(`${fullscreenmin8}`);
         fullscreenmin8 = tumbnailb == crossf;
      let subsz = String.fromCharCode(95,116,109,119,119,54,52,50,117,0) == crossf;
      do {
         crossf = "1";
         if (subsz) {
            break;
         }
      } while (subsz && (crossf.includes(`${fullscreenmin8}`)));
         crossf = `${episodeso.length + 2}`;
          let cornershootU = String.fromCharCode(121,95,54,49,95,98,97,116,99,104,101,100,0);
         crossf = `${cornershootU.length ^ 1}`;
      if (5 >= tumbnailb.length) {
         tumbnailb += `${tumbnailb.length % 2}`;
      }
      if (crossf.endsWith(`${fullscreenmin8}`)) {
         fullscreenmin8 = !fullscreenmin8;
      }
         tumbnailb += `${tumbnailb.length}`;
      let umengD = String.fromCharCode(112,104,100,118,0) == tumbnailb;
      do {
          let nnewarchdefaultsF = String.fromCharCode(117,112,108,111,97,100,105,110,103,95,109,95,50,57,0);
         tumbnailb += "2";
         nnewarchdefaultsF += `${nnewarchdefaultsF.length}`;
         if (umengD) {
            break;
         }
      } while (umengD && (tumbnailb.length == 5));
      for (let h = 0; h < 3; h++) {
          let build2 = true;
         tumbnailb = "3";
      }
         fullscreenmin8 = !crossf.endsWith(`${fullscreenmin8}`);
      while (1 >= tumbnailb.length) {
         tumbnailb = `${crossf.length}`;
         break;
      }
      pangleb = new Map([[`${utils7.length}`, utils7.length]]);
      break;
   }
              await finishTransaction({
                purchase: currentPurchase,
                isConsumable: isIAP,
              });

   if (pangleb.size < 1) {
      half8 += `${half8.length}`;
   }

              handleRefresh();

      predictionarrowt -= tooltipsb >> (Math.min(iconwatchnowJ.length, 2));

              if (wawaLibglog.isLogin(userState.user)) {

   if (halffieldimagez) {
      tooltipsb <<= Math.min(Math.abs(3 << (Math.min(5, notificationgrayj.length))), 2);
   }
                setDialogText(successDialogText);

   while (3 >= iconwatchnowJ.length) {
      utils7 = [notificationgrayj.length & 1];
      break;
   }
                setIsDialogOpen(true);

   while (1 > (philippinesd / 1)) {
      utils7 = [parseInt(`${predictionarrowt}`) ^ dicelogov.length];
      break;
   }
                setIsSuccess(true);
              } else {

       let libreactl: Map<any, any> = new Map([[String.fromCharCode(117,95,57,52,95,111,100,100,0),String.fromCharCode(111,117,116,95,100,95,52,54,0)], [String.fromCharCode(115,97,118,101,112,111,105,110,116,115,95,112,95,49,57,0),String.fromCharCode(107,95,51,57,95,109,97,114,107,105,110,103,0)], [String.fromCharCode(114,101,112,114,101,115,101,110,116,97,116,105,118,101,95,121,95,49,50,0),String.fromCharCode(105,110,118,101,114,116,95,111,95,49,49,0)]]);
       let movies1 = 2.0;
      if ((5 & libreactl.size) == 3) {
         movies1 /= Math.max(2, parseFloat(`${3}`));
      }
         movies1 /= Math.max(4, parseFloat(`${1 | libreactl.size}`));
      while (5 > (libreactl.size + parseInt(`${movies1}`)) || (libreactl.size + parseInt(`${movies1}`)) > 5) {
         movies1 += parseFloat(`${libreactl.size}`);
         break;
      }
       let collectionW = 1;
       let textlayoutmanagerN = 2;
          let bgvipsportn = 0.0;
          let default_hq: Map<any, any> = new Map([[String.fromCharCode(115,101,101,95,98,95,52,51,0),false ], [String.fromCharCode(114,105,98,98,111,110,95,51,95,49,55,0),false ]]);
          let hooksY = String.fromCharCode(99,95,52,95,99,111,109,109,105,116,116,101,100,0);
         libreactl = new Map([[`${libreactl.size}`, libreactl.size + 3]]);
         bgvipsportn += parseFloat(`${1}`);
         default_hq.set(`${bgvipsportn}`, 2);
         hooksY = `${default_hq.size << (Math.min(hooksY.length, 3))}`;
      for (let e = 0; e < 2; e++) {
         collectionW <<= Math.min(2, Math.abs(textlayoutmanagerN));
      }
      notificationgrayj += `${parseInt(`${movies1}`) << (Math.min(Math.abs(1), 5))}`;
                dispatch(setShowGuestPurchaseSuccess(true));

   if ((pangleb.size & 4) == 4 || (pangleb.size & utils7.length) == 4) {
      pangleb = new Map([[gifgoalk, imagenomoredata6.length / 2]]);
   }
                setIsVisible(false);

      philippinesd *= parseInt(`${injuryp}`) | 3;
                setIsBtnEnable(true);
                
              }
            } else {

   let materialj = notificationgrayj == String.fromCharCode(100,116,112,0);
   do {
      notificationgrayj = `${(String.fromCharCode(90,0) == gifgoalk ? tooltipsb : gifgoalk.length)}`;
      if (materialj) {
         break;
      }
   } while ((notificationgrayj.length == half8.length) && materialj);
              console.log("success", success);

       let anythinkZ: Array<any> = [183, 736, 726];
      for (let c = 0; c < 2; c++) {
          let notificationgrayjp: Map<any, any> = new Map([[String.fromCharCode(99,95,54,57,95,105,115,101,120,112,108,97,105,110,0),954], [String.fromCharCode(120,117,118,109,118,115,95,48,95,49,54,0),266]]);
          let expandA = String.fromCharCode(108,95,54,53,95,103,108,111,98,97,108,105,110,102,111,0);
          let eyeopen5 = String.fromCharCode(118,97,114,105,97,98,108,101,95,121,95,50,55,0);
          let adult4 = String.fromCharCode(97,99,114,111,110,121,109,115,95,108,95,52,57,0);
          let libsentryA: Map<any, any> = new Map([[String.fromCharCode(98,117,105,108,116,95,50,95,50,48,0),907], [String.fromCharCode(122,95,57,50,95,101,105,112,0),834]]);
         anythinkZ = [anythinkZ.length];
         notificationgrayjp.set(expandA, expandA.length);
         eyeopen5 += `${expandA.length - adult4.length}`;
         adult4 = `${notificationgrayjp.size}`;
         libsentryA.set(`${expandA}`, libsentryA.size);
      }
      for (let q = 0; q < 3; q++) {
         anythinkZ = [anythinkZ.length];
      }
         anythinkZ.push(3);
      half8 = `${gifgoalk.length << (Math.min(4, half8.length))}`;
              await finishTransaction({
                purchase: currentPurchase,
                isConsumable: isIAP,
              });

   if (!gifgoalk.endsWith(`${tooltipsb}`)) {
       let directn = String.fromCharCode(114,101,111,115,95,57,95,54,0);
       let profileframeD: Map<any, any> = new Map([[String.fromCharCode(112,102,114,97,109,101,95,110,95,56,52,0),998], [String.fromCharCode(104,95,54,52,95,102,114,101,113,117,101,110,99,121,0),154]]);
         profileframeD = new Map([[`${profileframeD.size}`, profileframeD.size + 1]]);
       let loginb = String.fromCharCode(109,95,57,56,95,97,99,100,115,112,0);
      if ((profileframeD.size << (Math.min(Math.abs(2), 4))) >= 1) {
          let iconsubssuccess8 = String.fromCharCode(111,95,53,55,95,114,105,100,0);
          let turnc = String.fromCharCode(107,95,50,49,95,112,114,101,115,101,110,116,0);
         loginb = `${iconsubssuccess8.length}`;
         iconsubssuccess8 = `${(String.fromCharCode(113,0) == turnc ? turnc.length : turnc.length)}`;
      }
      let soundc = loginb.length <= 6800561;
      do {
         loginb = `${(String.fromCharCode(103,0) == loginb ? profileframeD.size : loginb.length)}`;
         if (soundc) {
            break;
         }
      } while (soundc && (4 == loginb.length));
         directn = `${profileframeD.size}`;
          let componentsc: Map<any, any> = new Map([[String.fromCharCode(120,95,57,52,95,115,117,98,118,97,108,117,101,0),39], [String.fromCharCode(116,117,114,98,117,108,101,110,99,101,95,100,95,57,53,0),40], [String.fromCharCode(97,108,97,98,97,115,116,101,114,95,103,95,51,51,0),624]]);
         profileframeD.set(`${loginb}`, componentsc.size % (Math.max(loginb.length, 9)));
      gifgoalk += `${profileframeD.size & 1}`;
   }

              setDialogText(failedDialogText);

       let optionsx = String.fromCharCode(108,95,55,95,116,116,114,105,98,117,116,101,100,0);
      let specs = optionsx.length >= 5984135;
      do {
         optionsx = "1";
         if (specs) {
            break;
         }
      } while (specs && (optionsx.length == optionsx.length));
      if (optionsx.length <= optionsx.length) {
         optionsx = `${(optionsx == String.fromCharCode(82,0) ? optionsx.length : optionsx.length)}`;
      }
         optionsx += `${optionsx.length ^ 1}`;
      themeT = optionsx.length >= 42;
              setIsDialogOpen(true);

   let gradlew6 = notificationgrayj.length >= 9276919;
   do {
       let main_up = String.fromCharCode(97,105,110,116,105,110,103,95,120,95,54,50,0);
       let tempm = String.fromCharCode(107,95,56,51,95,108,105,115,116,110,101,114,115,0);
      let fastforwardU = tempm.length >= 5330573;
      do {
          let libjsijniprofilerB = 5.0;
          let hongkongk = 4.0;
          let detailss = false;
          let notificationfilledc = 5.0;
         tempm += `${parseInt(`${notificationfilledc}`) & 2}`;
         libjsijniprofilerB *= (parseInt(`${libjsijniprofilerB}`) & (detailss ? 3 : 4));
         hongkongk /= Math.max(parseFloat(`${parseInt(`${libjsijniprofilerB}`)}`), 4);
         detailss = !detailss;
         notificationfilledc /= Math.max(parseInt(`${libjsijniprofilerB}`), 4);
         if (fastforwardU) {
            break;
         }
      } while (fastforwardU && (tempm.length < main_up.length));
         main_up += `${main_up.length % 3}`;
      for (let d = 0; d < 3; d++) {
         tempm += "1";
      }
      for (let z = 0; z < 3; z++) {
          let whitesmalltick1 = false;
          let collectionq = String.fromCharCode(108,95,49,57,95,113,117,105,110,116,0);
         tempm += `${main_up.length << (Math.min(Math.abs(3), 3))}`;
         whitesmalltick1 = 42 >= collectionq.length || collectionq == String.fromCharCode(66,0);
      }
          let basketballhometeamw = false;
          let whitetickx: Map<any, any> = new Map([[String.fromCharCode(102,114,97,110,100,111,109,95,110,95,52,48,0),496], [String.fromCharCode(118,101,114,116,105,99,101,115,95,98,95,49,48,0),613], [String.fromCharCode(100,105,118,105,115,111,114,95,117,95,53,57,0),562]]);
         tempm = `${main_up.length}`;
         basketballhometeamw = whitetickx.size >= 46;
         whitetickx.set(`${basketballhometeamw}`, whitetickx.size);
      for (let w = 0; w < 2; w++) {
          let reactk: Map<any, any> = new Map([[String.fromCharCode(100,101,99,111,109,112,114,101,115,115,105,111,110,95,56,95,55,52,0),false ], [String.fromCharCode(99,95,56,57,95,97,108,97,114,109,0),false ], [String.fromCharCode(112,114,101,102,105,120,95,111,95,49,49,0),true ]]);
          let moonl = false;
          let whistleorangeT: Array<any> = [String.fromCharCode(118,97,114,116,105,109,101,95,122,95,49,51,0), String.fromCharCode(113,95,55,55,95,101,110,116,105,114,101,108,121,0)];
         tempm += "3";
         reactk.set(`${whistleorangeT.length}`, 3 ^ reactk.size);
         moonl = !moonl;
         whistleorangeT = [reactk.size];
      }
      notificationgrayj = "3";
      if (gradlew6) {
         break;
      }
   } while (gradlew6 && (!notificationgrayj.startsWith(iconwatchnowJ)));
              setIsSuccess(false);
            }
          }
        } catch (error) {

   let iconstarE = 9131828.0 >= predictionarrowt;
   do {
       let selectedc: Map<any, any> = new Map([[String.fromCharCode(115,95,55,51,95,99,97,108,99,117,97,108,116,101,0),161], [String.fromCharCode(105,95,54,49,95,99,111,109,109,101,110,116,115,0),838], [String.fromCharCode(104,97,108,102,108,116,117,105,110,116,95,121,95,53,49,0),437]]);
       let scorepopsounde = 0;
       let hejiE = String.fromCharCode(97,95,51,52,95,98,111,117,110,100,101,100,0);
       let libavcodecR = 5;
          let defaultlogob = 2.0;
          let mountingK: Map<any, any> = new Map([[String.fromCharCode(99,95,53,56,95,112,97,114,116,105,99,105,112,97,116,105,111,110,0),17], [String.fromCharCode(110,119,105,115,101,95,113,95,57,57,0),226], [String.fromCharCode(111,109,112,111,115,101,95,117,95,52,54,0),780]]);
         scorepopsounde >>= Math.min(Math.abs(2), 4);
         defaultlogob *= 2 << (Math.min(4, Math.abs(parseInt(`${defaultlogob}`))));
         mountingK.set(`${defaultlogob}`, mountingK.size);
      for (let c = 0; c < 2; c++) {
         selectedc.set(hejiE, scorepopsounde | hejiE.length);
      }
       let pnewinterstitials = 3.0;
      for (let e = 0; e < 1; e++) {
         scorepopsounde *= libavcodecR;
      }
      if ((4.57 * pnewinterstitials) == 1.82 && 1 == (parseInt(`${pnewinterstitials}`) * 1)) {
         pnewinterstitials /= Math.max(parseFloat(`${scorepopsounde}`), 1);
      }
      for (let a = 0; a < 3; a++) {
         scorepopsounde += scorepopsounde - selectedc.size;
      }
         pnewinterstitials /= Math.max(parseFloat(`${2 << (Math.min(1, hejiE.length))}`), 5);
      let championm = pnewinterstitials <= 6534935.0;
      do {
         pnewinterstitials *= parseFloat(`${1 & selectedc.size}`);
         if (championm) {
            break;
         }
      } while ((2.17 >= pnewinterstitials) && championm);
          let resultH: Array<any> = [873, 709, 327];
          let fullscreenmaxd = String.fromCharCode(116,95,49,54,95,108,117,109,105,110,97,110,99,101,0);
          let matchactiveG = String.fromCharCode(100,101,99,108,105,110,101,100,95,100,95,55,0);
         hejiE = `${parseInt(`${pnewinterstitials}`)}`;
         resultH = [resultH.length * 3];
         fullscreenmaxd = `${matchactiveG.length + fullscreenmaxd.length}`;
         matchactiveG = `${fullscreenmaxd.length | 3}`;
      if (2 > (libavcodecR + 5) || (hejiE.length + libavcodecR) > 5) {
         hejiE += `${libavcodecR}`;
      }
      while (5.27 >= (4.56 - pnewinterstitials)) {
         pnewinterstitials -= parseFloat(`${1 & scorepopsounde}`);
         break;
      }
         pnewinterstitials += parseFloat(`${scorepopsounde}`);
      predictionarrowt /= Math.max(gifgoalk.length - 3, 5);
      if (iconstarE) {
         break;
      }
   } while (iconstarE && (dicelogov.length <= predictionarrowt));
          if (error instanceof PurchaseError) {

   while (!iconwatchnowJ.includes(`${utils7.length}`)) {
       let icondefaultthumbnailN = 1.0;
       let invitey = 5;
       let temp5 = String.fromCharCode(120,95,51,53,95,116,115,97,110,0);
       let relatedQ = String.fromCharCode(119,95,51,52,95,112,97,114,97,98,111,108,108,105,99,0);
          let inviteh = 2.0;
          let yellowcirclebg6 = 1.0;
          let mbsplashp: Array<any> = [906, 125, 399];
         temp5 += `${invitey % 2}`;
         inviteh += parseFloat(`${2}`);
         yellowcirclebg6 *= parseInt(`${inviteh}`);
         mbsplashp = [2];
      while (invitey <= 2) {
          let sporta: Map<any, any> = new Map([[String.fromCharCode(97,115,99,101,110,100,105,110,103,95,49,95,55,0),false ], [String.fromCharCode(98,102,114,97,109,101,115,95,107,95,56,57,0),true ], [String.fromCharCode(113,95,49,48,95,102,117,110,99,115,0),true ]]);
          let stepJ = 1;
         temp5 += `${parseInt(`${icondefaultthumbnailN}`)}`;
         sporta = new Map([[`${sporta.size}`, stepJ * sporta.size]]);
         stepJ |= stepJ & 2;
         break;
      }
      for (let b = 0; b < 1; b++) {
         icondefaultthumbnailN += parseFloat(`${3 ^ parseInt(`${icondefaultthumbnailN}`)}`);
      }
         invitey &= 1 & relatedQ.length;
         temp5 += "1";
      utils7 = [2];
      break;
   }
            console.error("purchasing error: " + error);
          } else {

      predictionarrowt /= Math.max(tooltipsb ^ 3, 5);
            console.error("current purchase error: " + error);
          }
          setIsVisible(false);

       let roundd: Array<any> = [730, 164, 994];
       let hongkongH: Map<any, any> = new Map([[String.fromCharCode(105,95,53,49,95,102,105,120,101,100,0),false ], [String.fromCharCode(97,118,105,97,108,97,98,108,101,95,120,95,56,56,0),true ], [String.fromCharCode(99,102,104,100,95,53,95,57,53,0),false ]]);
       let countdownw = false;
      let pressureD = countdownw ? !countdownw : countdownw;
      do {
         countdownw = !countdownw;
         if (pressureD) {
            break;
         }
      } while ((countdownw) && pressureD);
          let predictiondefaultS = 1.0;
         countdownw = (((countdownw ? roundd.length : 77) << (Math.min(roundd.length, 4))) <= 77);
         predictiondefaultS /= Math.max(parseFloat(`${2 % (Math.max(parseInt(`${predictiondefaultS}`), 7))}`), 3);
      let codegend = 5091050 >= roundd.length;
      do {
          let securityn = 0.0;
         roundd = [roundd.length];
         securityn *= 3;
         if (codegend) {
            break;
         }
      } while ((5 < roundd.length) && codegend);
          let androidv = 2.0;
         countdownw = roundd.length == 89 || 4.76 == androidv;
       let defaultteamD = String.fromCharCode(98,108,111,99,107,101,114,95,53,95,57,56,0);
       let iconsubssuccessq = String.fromCharCode(114,101,99,111,114,100,97,98,108,101,95,51,95,57,54,0);
         iconsubssuccessq = `${(defaultteamD == String.fromCharCode(117,0) ? (countdownw ? 4 : 1) : defaultteamD.length)}`;
          let streaming7 = String.fromCharCode(98,95,55,53,95,115,105,100,101,0);
          let penaltygoalI = String.fromCharCode(108,95,54,54,95,108,111,99,107,101,100,0);
          let recommendationn = String.fromCharCode(99,111,118,97,108,101,110,116,95,112,95,52,55,0);
         hongkongH.set(`${roundd.length}`, 1 ^ roundd.length);
         streaming7 += `${recommendationn.length + streaming7.length}`;
         penaltygoalI += "3";
         recommendationn = `${streaming7.length - 3}`;
      for (let r = 0; r < 3; r++) {
         iconsubssuccessq += `${(String.fromCharCode(109,0) == iconsubssuccessq ? iconsubssuccessq.length : roundd.length)}`;
      }
      if (iconsubssuccessq != defaultteamD) {
          let refresh_ = 0.0;
          let shielddoneJ = 3.0;
          let iconnointerneth = String.fromCharCode(99,95,55,50,95,100,105,102,102,0);
          let skipO = String.fromCharCode(116,95,51,48,95,110,115,117,105,0);
          let annerI: Map<any, any> = new Map([[String.fromCharCode(109,106,112,101,103,101,110,99,95,99,95,55,56,0),953], [String.fromCharCode(116,95,56,57,95,109,111,118,101,99,98,0),28]]);
         defaultteamD += `${hongkongH.size}`;
         refresh_ *= (skipO == String.fromCharCode(65,0) ? skipO.length : iconnointerneth.length);
         shielddoneJ -= parseFloat(`${3 - parseInt(`${shielddoneJ}`)}`);
         iconnointerneth = `${parseInt(`${refresh_}`) * parseInt(`${shielddoneJ}`)}`;
         annerI.set(`${iconnointerneth}`, iconnointerneth.length >> (Math.min(Math.abs(2), 2)));
      }
      themeT = String.fromCharCode(101,0) == gifgoalk;
          setIsBtnEnable(true);
        }
      }
    };

    checkCurrentPurchase();
  }, [currentPurchase, finishTransaction]);

  const refreshUserState = async () => {
       let paginationD = String.fromCharCode(110,95,57,53,95,110,111,116,105,102,105,101,100,0);
    let bgvipsportN = String.fromCharCode(99,108,105,112,112,105,110,103,110,111,100,101,95,105,95,54,49,0);
    let score1 = String.fromCharCode(116,114,101,101,114,101,97,100,101,114,95,97,95,52,56,0);
    let minimizee: Array<any> = [String.fromCharCode(119,95,50,54,95,114,116,112,119,0), String.fromCharCode(99,111,110,110,105,110,112,117,116,95,51,95,50,55,0)];
    let goalf = String.fromCharCode(117,95,53,95,98,114,105,101,102,108,121,0);
    let vipsportd: Map<any, any> = new Map([[String.fromCharCode(117,95,56,52,95,116,111,107,101,104,0),String.fromCharCode(100,105,115,112,108,97,121,95,53,95,54,0)], [String.fromCharCode(108,105,98,107,118,97,122,97,97,114,95,57,95,54,0),String.fromCharCode(101,110,116,105,116,105,116,121,95,117,95,49,53,0)], [String.fromCharCode(99,108,105,112,102,95,56,95,57,0),String.fromCharCode(114,95,56,56,95,115,117,98,116,121,112,101,115,0)]]);
    let sellmathbackgroundA = 2.0;
    let statisticsactiveX = String.fromCharCode(98,121,116,101,105,110,95,116,95,52,50,0);
    let classesE: Map<any, any> = new Map([[String.fromCharCode(102,119,97,108,115,104,95,112,95,52,50,0),161], [String.fromCharCode(116,98,108,101,110,100,95,50,95,52,56,0),464]]);
    let styleb = String.fromCharCode(107,95,51,57,95,117,110,122,116,101,108,108,0);
    let libsgcoree = 1.0;
    let predictionwinF = 2;
    let libpangleflippedg = 0;
      paginationD += "1";
      bgvipsportN += `${bgvipsportN.length}`;
       let yellowtoredI: Map<any, any> = new Map([[String.fromCharCode(107,95,51,51,95,100,105,118,105,100,101,114,0),38], [String.fromCharCode(106,95,51,55,95,102,114,101,113,115,0),640]]);
       let iconclose9: Map<any, any> = new Map([[String.fromCharCode(104,95,50,54,95,116,114,97,105,108,0),false ], [String.fromCharCode(107,95,49,52,95,111,117,116,102,105,108,101,0),true ]]);
       let orientation6 = 2;
         orientation6 &= yellowtoredI.size;
         yellowtoredI = new Map([[`${yellowtoredI.size}`, yellowtoredI.size ^ iconclose9.size]]);
         yellowtoredI.set(`${iconclose9.size}`, iconclose9.size >> (Math.min(Math.abs(yellowtoredI.size), 2)));
      if (yellowtoredI.size <= iconclose9.size) {
         iconclose9 = new Map([[`${yellowtoredI.size}`, 1 * yellowtoredI.size]]);
      }
      while ((4 ^ yellowtoredI.size) <= 3 || 4 <= (4 ^ orientation6)) {
         orientation6 -= iconclose9.size % (Math.max(yellowtoredI.size, 5));
         break;
      }
      let eighteenb = 7529726 >= iconclose9.size;
      do {
         iconclose9.set(`${iconclose9.size}`, yellowtoredI.size / (Math.max(2, iconclose9.size)));
         if (eighteenb) {
            break;
         }
      } while ((!Array.from(iconclose9.keys()).includes(`${yellowtoredI.size}`)) && eighteenb);
      if ((3 ^ iconclose9.size) < 5) {
          let downT: Map<any, any> = new Map([[String.fromCharCode(106,95,57,48,95,122,111,110,101,105,110,102,111,0),446], [String.fromCharCode(99,111,99,111,97,95,121,95,57,56,0),458]]);
          let gmail6: Array<any> = [458, 900];
         iconclose9.set(`${orientation6}`, orientation6 + 2);
         downT.set(`${gmail6.length}`, 2);
         gmail6 = [downT.size + gmail6.length];
      }
          let eventm = 3.0;
          let libjsiJ: Map<any, any> = new Map([[String.fromCharCode(102,95,53,56,95,100,101,112,114,101,99,97,116,105,111,110,115,0),732], [String.fromCharCode(109,111,110,111,115,112,97,99,101,95,108,95,51,54,0),265]]);
          let empty5 = 3.0;
         iconclose9 = new Map([[`${eventm}`, parseInt(`${eventm}`) ^ 1]]);
         libjsiJ = new Map([[`${libjsiJ.size}`, 3]]);
         empty5 *= 1 ^ parseInt(`${empty5}`);
       let saveY = String.fromCharCode(112,114,101,115,101,110,116,101,114,95,121,95,51,49,0);
       let mintegralx = String.fromCharCode(121,95,51,57,95,110,101,101,100,115,0);
      goalf += `${orientation6}`;
       let singaporel: Map<any, any> = new Map([[String.fromCharCode(122,95,54,48,95,108,105,98,115,114,116,0),936], [String.fromCharCode(105,110,118,116,114,97,110,115,95,105,95,54,52,0),455], [String.fromCharCode(116,95,54,56,95,116,101,109,112,102,105,108,101,0),983]]);
       let liveshareL: Array<any> = [643, 849, 308];
         liveshareL.push(singaporel.size ^ liveshareL.length);
          let spinnerm = String.fromCharCode(114,95,54,50,95,112,111,115,116,102,105,108,116,101,114,0);
          let defaultlogow = false;
         liveshareL = [singaporel.size];
         spinnerm = `${(spinnerm == String.fromCharCode(102,0) ? spinnerm.length : (defaultlogow ? 1 : 3))}`;
         defaultlogow = (16 == ((!defaultlogow ? spinnerm.length : 16) ^ spinnerm.length));
         liveshareL.push(liveshareL.length | 1);
         singaporel.set(`${liveshareL.length}`, 2);
      let buttonM = 8608312 <= liveshareL.length;
      do {
         liveshareL.push(liveshareL.length);
         if (buttonM) {
            break;
         }
      } while ((singaporel.get(`${liveshareL.length}`) != null) && buttonM);
         liveshareL = [1 + singaporel.size];
      paginationD = `${(String.fromCharCode(95,0) == bgvipsportN ? bgvipsportN.length : paginationD.length)}`;
      score1 += `${bgvipsportN.length ^ 2}`;
      goalf += `${vipsportd.size}`;

    const result = await wawaEvent.getUserDetails();

   if (statisticsactiveX.endsWith(bgvipsportN)) {
      bgvipsportN = `${score1.length}`;
   }
      minimizee.push(paginationD.length);
      score1 += "3";
       let shirt2 = true;
         shirt2 = !shirt2;
         shirt2 = (!shirt2 ? !shirt2 : !shirt2);
      if (shirt2) {
         shirt2 = !shirt2 || shirt2;
      }
      minimizee = [(parseInt(`${sellmathbackgroundA}`) | (shirt2 ? 1 : 2))];
   let subina = 8025584 <= goalf.length;
   do {
      goalf += `${bgvipsportN.length}`;
      if (subina) {
         break;
      }
   } while ((5 < (classesE.size | 3) || (classesE.size | goalf.length) < 3) && subina);
      styleb = `${styleb.length & score1.length}`;
    if (result == null) {

   while ((2 << (Math.min(3, Math.abs(classesE.size)))) > 5) {
       let analytics2 = 5;
       let libglogV = String.fromCharCode(113,117,97,110,116,105,122,101,100,95,105,95,49,0);
       let redcirclebgd = 0;
       let middleware6 = String.fromCharCode(99,104,97,110,103,101,100,95,114,95,55,49,0);
         redcirclebgd |= (String.fromCharCode(100,0) == middleware6 ? middleware6.length : analytics2);
       let iconchatsend2 = String.fromCharCode(116,95,51,55,95,116,104,114,109,97,116,0);
       let currentC = String.fromCharCode(106,95,50,55,95,110,111,110,110,117,108,108,105,110,99,111,109,105,110,103,0);
      let profileU = currentC.length >= 8542299;
      do {
         currentC = `${(String.fromCharCode(114,0) == iconchatsend2 ? iconchatsend2.length : redcirclebgd)}`;
         if (profileU) {
            break;
         }
      } while (profileU && (analytics2 >= 5));
         redcirclebgd %= Math.max(iconchatsend2.length, 2);
      let successs = redcirclebgd <= 6165966;
      do {
         redcirclebgd &= iconchatsend2.length;
         if (successs) {
            break;
         }
      } while (successs && (currentC.length < redcirclebgd));
       let bgvipsportZ = 2;
       let gpayi = 0;
      let libyogaJ = String.fromCharCode(108,113,98,103,106,118,103,121,0) == libglogV;
      do {
         libglogV += `${redcirclebgd}`;
         if (libyogaJ) {
            break;
         }
      } while ((libglogV.includes(`${bgvipsportZ}`)) && libyogaJ);
      if (libglogV != String.fromCharCode(116,0) && 1 <= iconchatsend2.length) {
         iconchatsend2 = `${libglogV.length + analytics2}`;
      }
          let rewindn = 3.0;
          let android5 = false;
          let dependenciesx = String.fromCharCode(105,110,111,117,116,95,55,95,49,57,0);
         analytics2 ^= (String.fromCharCode(72,0) == currentC ? currentC.length : parseInt(`${rewindn}`));
         rewindn -= dependenciesx.length;
         android5 = android5 && dependenciesx.length <= 45;
         analytics2 ^= 3;
         iconchatsend2 = `${gpayi}`;
       let overQ = 4;
       let iconwechatD = 2;
      classesE.set(libglogV, libglogV.length);
      break;
   }
      paginationD = `${bgvipsportN.length - 2}`;
      bgvipsportN += `${(String.fromCharCode(99,0) == styleb ? styleb.length : paginationD.length)}`;
       let regengG = String.fromCharCode(116,101,109,112,108,97,116,101,115,95,106,95,56,53,0);
       let saveK: Map<any, any> = new Map([[String.fromCharCode(98,95,54,57,95,102,114,111,109,0),124], [String.fromCharCode(109,95,51,48,95,102,116,118,118,101,114,116,108,105,110,101,0),543]]);
          let internetP: Array<any> = [288, 468, 917];
          let greenJ: Array<any> = [String.fromCharCode(98,95,57,52,95,98,117,105,108,100,115,0), String.fromCharCode(112,95,56,55,95,112,108,97,110,101,100,0)];
         saveK.set(`${greenJ.length}`, internetP.length);
         regengG = `${regengG.length - saveK.size}`;
       let hoverM = 5;
      if (!Array.from(saveK.values()).includes(hoverM)) {
          let inactivey = 3.0;
          let inouttargetyellowz: Map<any, any> = new Map([[String.fromCharCode(109,111,100,112,108,117,103,95,101,95,56,56,0),String.fromCharCode(99,111,110,102,105,103,117,114,101,95,49,95,53,49,0)], [String.fromCharCode(100,95,54,95,118,101,99,116,111,114,115,99,111,112,101,0),String.fromCharCode(117,95,57,53,95,100,114,97,103,103,105,110,103,0)]]);
         saveK.set(`${inactivey}`, hoverM & 2);
         inactivey -= 3;
         inouttargetyellowz = new Map([[`${inouttargetyellowz.size}`, inouttargetyellowz.size]]);
      }
         saveK = new Map([[`${saveK.size}`, 1]]);
          let iconarrowleft5 = true;
          let infoq = String.fromCharCode(113,95,54,51,95,97,108,112,104,97,110,117,109,101,114,105,99,115,0);
          let albumz = false;
         regengG += `${(regengG == String.fromCharCode(95,0) ? hoverM : regengG.length)}`;
         iconarrowleft5 = infoq.includes(`${iconarrowleft5}`);
         infoq = "3";
         albumz = infoq.length == 85;
      score1 += `${(bgvipsportN == String.fromCharCode(90,0) ? bgvipsportN.length : statisticsactiveX.length)}`;
   if (3 == (vipsportd.size + goalf.length) || 1 == (3 + goalf.length)) {
      goalf = `${minimizee.length}`;
   }
      statisticsactiveX = `${2 * vipsportd.size}`;
      return;
    }

    await dispatch(updateUserAuth(result));

      statisticsactiveX += `${vipsportd.size}`;
      paginationD += `${(String.fromCharCode(79,0) == bgvipsportN ? parseInt(`${sellmathbackgroundA}`) : bgvipsportN.length)}`;
   while (score1.endsWith(`${statisticsactiveX.length}`)) {
      score1 = `${minimizee.length >> (Math.min(Math.abs(3), 3))}`;
      break;
   }
       let iconpointscorem = String.fromCharCode(97,110,110,111,116,97,116,101,95,116,95,54,48,0);
       let buildL: Array<any> = [String.fromCharCode(112,95,50,53,95,115,111,102,116,102,108,111,97,116,0), String.fromCharCode(118,108,99,111,100,101,99,95,107,95,53,53,0)];
       let castP = 3.0;
         buildL = [3 & iconpointscorem.length];
      if ((buildL.length + 1) == 1 || (buildL.length + iconpointscorem.length) == 1) {
         iconpointscorem = `${buildL.length * iconpointscorem.length}`;
      }
      if (5.21 < (castP * parseFloat(`${iconpointscorem.length}`)) && 1 < (parseInt(`${castP}`) * 3)) {
          let combinedG = String.fromCharCode(117,95,50,51,95,100,99,115,116,114,0);
          let libmapbufferjnid = true;
          let rewardM: Map<any, any> = new Map([[String.fromCharCode(111,95,52,50,95,117,97,100,100,0),226], [String.fromCharCode(115,101,116,95,113,95,57,50,0),337], [String.fromCharCode(108,95,55,57,95,108,105,116,116,108,101,0),569]]);
          let reactnavigationv = 2;
          let baiduc = String.fromCharCode(99,111,110,115,116,114,97,105,110,101,100,95,115,95,53,48,0);
         iconpointscorem += "2";
         combinedG += "1";
         libmapbufferjnid = 93 == baiduc.length;
         rewardM = new Map([[combinedG, combinedG.length | baiduc.length]]);
         reactnavigationv += combinedG.length & reactnavigationv;
      }
      while ((castP / 5.97) >= 3.94 || (buildL.length / 3) >= 3) {
         castP *= parseFloat(`${3}`);
         break;
      }
          let libcxxcomponentsR: Map<any, any> = new Map([[String.fromCharCode(112,95,51,50,95,103,114,97,121,115,99,97,108,101,0),String.fromCharCode(100,101,118,101,108,111,112,109,101,110,116,95,109,95,53,55,0)], [String.fromCharCode(101,114,115,105,111,110,95,109,95,53,52,0),String.fromCharCode(102,95,51,57,95,112,98,107,100,102,0)]]);
          let yellowcirclebgn: Array<any> = [289, 418];
         buildL = [buildL.length % 2];
         libcxxcomponentsR = new Map([[`${libcxxcomponentsR.size}`, yellowcirclebgn.length]]);
         yellowcirclebgn = [libcxxcomponentsR.size];
      let episodesK = 9066840.0 >= castP;
      do {
         castP -= parseFloat(`${iconpointscorem.length * parseInt(`${castP}`)}`);
         if (episodesK) {
            break;
         }
      } while (episodesK && (1 < (buildL.length - parseInt(`${castP}`)) || 1 < (buildL.length - parseInt(`${castP}`))));
         castP -= parseFloat(`${buildL.length}`);
      let libyogaQ = 7126560 >= buildL.length;
      do {
         buildL.push(2);
         if (libyogaQ) {
            break;
         }
      } while ((5 >= (buildL.length - 4) || 4 >= (buildL.length - iconpointscorem.length)) && libyogaQ);
      for (let l = 0; l < 2; l++) {
          let greytick8 = String.fromCharCode(100,101,115,99,101,110,100,101,114,95,108,95,54,53,0);
          let ewardedd = true;
          let subbasketballplayerT = true;
         iconpointscorem = "3";
         greytick8 = `${(greytick8.length & (subbasketballplayerT ? 2 : 4))}`;
         ewardedd = (90 == ((subbasketballplayerT ? 90 : greytick8.length) << (Math.min(greytick8.length, 4))));
      }
      score1 += `${vipsportd.size ^ parseInt(`${libsgcoree}`)}`;
       let foregroundT = String.fromCharCode(101,95,53,50,95,114,101,99,108,97,105,109,0);
      for (let r = 0; r < 3; r++) {
         foregroundT += `${(String.fromCharCode(86,0) == foregroundT ? foregroundT.length : foregroundT.length)}`;
      }
      if (!foregroundT.startsWith(`${foregroundT.length}`)) {
          let downloadh = 3;
          let shareh = 2.0;
          let iconcalendar1 = String.fromCharCode(100,105,116,104,101,114,105,110,103,95,111,95,51,50,0);
          let colorsz = 5.0;
          let shrinka = 3.0;
         foregroundT = `${2 + foregroundT.length}`;
         downloadh ^= 3;
         shareh -= parseFloat(`${parseInt(`${colorsz}`) ^ 2}`);
         iconcalendar1 = `${(iconcalendar1 == String.fromCharCode(79,0) ? iconcalendar1.length : parseInt(`${shareh}`))}`;
         colorsz -= parseFloat(`${parseInt(`${shareh}`) ^ iconcalendar1.length}`);
         shrinka += downloadh;
      }
         foregroundT += `${3 ^ foregroundT.length}`;
      classesE.set(statisticsactiveX, statisticsactiveX.length / 1);
   while (3 <= minimizee.length) {
      bgvipsportN = `${3 + bgvipsportN.length}`;
      break;
   }
    return;
  };

  const handleRefresh = async () => {
       let defaultteamg = false;
    let styleJ = 2.0;
    let refresh7 = 2.0;
    let anytime7: Array<any> = [657, 162];
    let reactnativeratingsC = String.fromCharCode(118,95,49,48,48,95,116,104,114,111,116,116,108,105,110,103,0);
    let downloadP = String.fromCharCode(97,95,57,50,95,100,101,99,111,100,101,114,0);
    let i_imageA: Array<any> = [151, 749, 894];
    let profileframeP: Array<any> = [736, 254, 232];
      i_imageA = [2];
      anytime7.push(parseInt(`${refresh7}`) + i_imageA.length);
       let langkeyo = 5;
       let greenarrowup_ = String.fromCharCode(105,95,57,56,95,108,111,116,116,105,101,107,101,121,112,97,116,104,0);
         langkeyo &= langkeyo;
      while (4 <= (langkeyo + greenarrowup_.length)) {
          let iconcloseW = String.fromCharCode(108,95,49,56,95,122,111,110,101,0);
          let promotionW = String.fromCharCode(117,95,51,56,95,101,97,114,108,121,0);
          let libfabricjnii = String.fromCharCode(117,95,51,54,95,105,115,101,109,112,116,121,0);
         greenarrowup_ += `${libfabricjnii.length}`;
         iconcloseW = `${promotionW.length}`;
         promotionW += `${1 ^ iconcloseW.length}`;
         libfabricjnii += `${iconcloseW.length - promotionW.length}`;
         break;
      }
         langkeyo += greenarrowup_.length % 3;
          let middlewareS = 4;
         langkeyo -= langkeyo >> (Math.min(Math.abs(middlewareS), 5));
          let eventsplashU = String.fromCharCode(118,95,49,51,95,116,105,109,101,111,117,116,0);
          let executorK: Array<any> = [String.fromCharCode(99,111,117,110,116,114,121,95,54,95,57,54,0), String.fromCharCode(114,103,98,97,98,101,95,98,95,55,0), String.fromCharCode(113,95,51,55,95,110,111,110,98,108,111,99,107,105,110,103,0)];
          let basketballmatchdetailbg1 = 4.0;
         greenarrowup_ = `${langkeyo}`;
         eventsplashU = `${2 * executorK.length}`;
         executorK = [parseInt(`${basketballmatchdetailbg1}`) << (Math.min(2, Math.abs(2)))];
         basketballmatchdetailbg1 -= (String.fromCharCode(65,0) == eventsplashU ? eventsplashU.length : parseInt(`${basketballmatchdetailbg1}`));
      let baiduadsB = greenarrowup_.length <= 8240240;
      do {
         greenarrowup_ = `${greenarrowup_.length}`;
         if (baiduadsB) {
            break;
         }
      } while (baiduadsB && (5 <= (langkeyo % (Math.max(greenarrowup_.length, 7)))));
      profileframeP = [reactnativeratingsC.length];
   while (anytime7.includes(styleJ)) {
      styleJ /= Math.max(reactnativeratingsC.length % 2, 4);
      break;
   }
   if (!defaultteamg) {
       let hooksR = 0;
       let iconlogoutr = String.fromCharCode(106,95,53,50,95,105,99,101,0);
      for (let t = 0; t < 3; t++) {
          let runtimescheduleru: Map<any, any> = new Map([[String.fromCharCode(102,95,49,57,95,100,105,115,99,111,110,110,101,99,116,105,111,110,0),889], [String.fromCharCode(101,118,97,108,117,108,97,116,101,95,112,95,52,51,0),314]]);
          let libfabricjnil: Map<any, any> = new Map([[String.fromCharCode(117,110,100,101,114,95,119,95,54,55,0),String.fromCharCode(114,116,99,119,101,98,95,54,95,57,55,0)], [String.fromCharCode(112,97,105,110,116,105,110,103,95,116,95,50,55,0),String.fromCharCode(101,114,114,111,114,115,95,100,95,56,48,0)], [String.fromCharCode(101,95,54,54,95,108,97,112,110,100,122,0),String.fromCharCode(105,95,57,53,95,108,105,98,119,101,98,112,0)]]);
         iconlogoutr += "2";
         runtimescheduleru = new Map([[`${libfabricjnil.size}`, runtimescheduleru.size]]);
         libfabricjnil = new Map([[`${runtimescheduleru.size}`, libfabricjnil.size & 3]]);
      }
       let nativeA = String.fromCharCode(111,95,55,49,95,114,117,98,121,0);
       let imagewatchliveC = String.fromCharCode(122,95,49,48,95,120,112,111,114,116,101,100,0);
         hooksR -= 3 & imagewatchliveC.length;
         imagewatchliveC += `${hooksR % (Math.max(2, 3))}`;
       let yellowtoredu: Array<any> = [290, 944];
      for (let q = 0; q < 1; q++) {
         nativeA += `${(nativeA == String.fromCharCode(109,0) ? nativeA.length : imagewatchliveC.length)}`;
      }
      defaultteamg = i_imageA.includes(styleJ);
   }
      defaultteamg = profileframeP.length < 27;
      anytime7 = [parseInt(`${styleJ}`) % 1];
      refresh7 -= reactnativeratingsC.length << (Math.min(4, Math.abs(parseInt(`${styleJ}`))));

    setRefreshing(true);

      refresh7 *= parseInt(`${styleJ}`) ^ reactnativeratingsC.length;
   for (let n = 0; n < 1; n++) {
       let yellowscoreballm = String.fromCharCode(116,111,115,115,95,49,95,51,54,0);
       let sigmobH = 2.0;
       let showlessf = true;
         yellowscoreballm = `${3 / (Math.max(4, parseInt(`${sigmobH}`)))}`;
      for (let l = 0; l < 3; l++) {
         sigmobH -= (parseInt(`${sigmobH}`) % (Math.max(9, (showlessf ? 1 : 3))));
      }
      for (let q = 0; q < 3; q++) {
         yellowscoreballm += `${1 >> (Math.min(Math.abs(parseInt(`${sigmobH}`)), 1))}`;
      }
      while (yellowscoreballm.length >= sigmobH) {
         sigmobH /= Math.max(2, parseInt(`${sigmobH}`) * 2);
         break;
      }
       let referrer6: Array<any> = [11, 463];
          let profilepicv = 0.0;
          let member0 = true;
         sigmobH += 2;
         profilepicv -= ((member0 ? 4 : 2) % (Math.max(parseInt(`${profilepicv}`), 5)));
         member0 = member0 || profilepicv < 55.40;
      if (2.0 <= sigmobH) {
          let benefitn = String.fromCharCode(113,95,51,50,95,97,118,111,112,116,105,111,110,115,0);
          let libcrashsdk1 = String.fromCharCode(115,101,114,118,105,99,101,115,95,118,95,52,49,0);
          let arrowupE: Map<any, any> = new Map([[String.fromCharCode(99,111,118,101,114,95,119,95,56,55,0),false ], [String.fromCharCode(120,95,49,48,95,108,97,121,111,117,116,115,0),true ], [String.fromCharCode(114,95,53,50,95,105,110,99,114,0),false ]]);
          let buttonA: Array<any> = [353, 560];
          let yellowk = 0;
         sigmobH += 1 | yellowk;
         benefitn = `${arrowupE.size & 3}`;
         libcrashsdk1 += `${benefitn.length}`;
         arrowupE = new Map([[`${arrowupE.size}`, arrowupE.size & 2]]);
         buttonA = [buttonA.length - 3];
         yellowk -= buttonA.length;
      }
          let gradleI: Array<any> = [195, 917, 782];
          let fullscreenmaxY = 4.0;
         referrer6.push(parseInt(`${fullscreenmaxY}`));
         gradleI.push(gradleI.length + 3);
         referrer6 = [((showlessf ? 1 : 2) % (Math.max(parseInt(`${sigmobH}`), 4)))];
      refresh7 += parseInt(`${refresh7}`) % (Math.max(profileframeP.length, 10));
   }
       let alertp = 0.0;
         alertp -= parseFloat(`${parseInt(`${alertp}`)}`);
         alertp -= parseFloat(`${2}`);
          let controlW = String.fromCharCode(118,95,54,48,95,114,101,118,101,97,108,101,100,0);
          let fileq = String.fromCharCode(99,108,117,116,115,95,98,95,48,0);
          let reactnavigation9 = 5.0;
         alertp *= parseFloat(`${controlW.length}`);
         controlW += `${fileq.length << (Math.min(2, Math.abs(parseInt(`${reactnavigation9}`))))}`;
         fileq = `${fileq.length}`;
         reactnavigation9 -= parseFloat(`${fileq.length ^ 3}`);
      anytime7.push(downloadP.length);
   let singaporet = 5711545.0 >= styleJ;
   do {
       let watchX = 0.0;
       let final_fos = false;
       let libfollyq: Map<any, any> = new Map([[String.fromCharCode(122,95,55,52,95,103,101,111,107,101,121,0),194], [String.fromCharCode(108,95,49,55,95,116,101,115,101,100,103,101,0),266], [String.fromCharCode(108,111,103,103,105,110,103,95,120,95,56,57,0),487]]);
       let privilegeb = 1.0;
      if (4 > (5 - libfollyq.size) && final_fos) {
         final_fos = watchX >= 44.87;
      }
         final_fos = !final_fos;
       let colors7 = 1;
       let buttonZ = 1;
          let screeno = String.fromCharCode(97,108,108,111,99,122,95,108,95,53,55,0);
         final_fos = libfollyq.size >= 70;
         screeno = `${screeno.length | screeno.length}`;
      if (2 == (colors7 + libfollyq.size)) {
         libfollyq.set(`${colors7}`, 3);
      }
         privilegeb -= parseFloat(`${parseInt(`${watchX}`) & 3}`);
       let shirtu = 3.0;
       let matchR = 5;
          let routerz = true;
          let lightx: Map<any, any> = new Map([[String.fromCharCode(113,95,49,48,95,115,108,105,99,101,97,110,103,108,101,0),true ], [String.fromCharCode(118,95,53,56,95,112,114,111,98,108,101,109,0),false ], [String.fromCharCode(121,95,57,50,95,116,108,111,103,0),true ]]);
          let umeng6 = 2.0;
         matchR -= parseInt(`${umeng6}`) - parseInt(`${shirtu}`);
         routerz = !routerz;
         lightx = new Map([[`${lightx.size}`, ((routerz ? 2 : 1) % (Math.max(lightx.size, 1)))]]);
         umeng6 += ((routerz ? 2 : 2) ^ 3);
         libfollyq = new Map([[`${colors7}`, colors7 * parseInt(`${watchX}`)]]);
      if (2.55 < (shirtu / 1.44)) {
          let temperatureY = String.fromCharCode(97,108,97,99,100,115,112,95,49,95,53,50,0);
          let iconbackwhiteB = false;
          let tumbnailB = String.fromCharCode(97,95,52,57,0);
         libfollyq = new Map([[`${iconbackwhiteB}`, 1 >> (Math.min(1, temperatureY.length))]]);
         temperatureY = `${tumbnailB.length | tumbnailB.length}`;
      }
      let largesound_ = buttonZ >= 7480459;
      do {
         buttonZ /= Math.max(2 | parseInt(`${watchX}`), 2);
         if (largesound_) {
            break;
         }
      } while (largesound_ && (buttonZ >= 4));
      styleJ /= Math.max(3, libfollyq.size ^ 1);
      if (singaporet) {
         break;
      }
   } while ((2.46 == (4.37 / (Math.max(5, styleJ))) || defaultteamg) && singaporet);
   let libavdevices = i_imageA.length >= 7753274;
   do {
      i_imageA = [(parseInt(`${styleJ}`) >> (Math.min(1, Math.abs((defaultteamg ? 5 : 2)))))];
      if (libavdevices) {
         break;
      }
   } while (libavdevices && ((2 / (Math.max(3, anytime7.length))) <= 5 || 2 <= (i_imageA.length / (Math.max(10, anytime7.length)))));
   if (2.58 < styleJ) {
      styleJ -= 1 + parseInt(`${refresh7}`);
   }
   let policyt = defaultteamg ? !defaultteamg : defaultteamg;
   do {
      defaultteamg = downloadP.length > 53;
      if (policyt) {
         break;
      }
   } while ((defaultteamg) && policyt);
      styleJ += parseInt(`${refresh7}`) >> (Math.min(2, Math.abs(2)));
    await refreshUserState();

   if (!defaultteamg) {
      defaultteamg = (i_imageA.length >> (Math.min(reactnativeratingsC.length, 5))) < 54;
   }
   if (!downloadP.endsWith(`${refresh7}`)) {
      refresh7 += ((defaultteamg ? 2 : 3) & parseInt(`${refresh7}`));
   }
       let smallo = true;
       let iconsaveimageL: Array<any> = [String.fromCharCode(115,116,111,112,101,100,95,51,95,52,48,0), String.fromCharCode(106,95,52,57,95,105,110,99,108,117,100,105,110,103,0), String.fromCharCode(97,100,115,97,114,109,97,115,109,95,110,95,56,57,0)];
       let thailandl = String.fromCharCode(120,95,51,53,95,109,97,108,101,0);
         thailandl += `${iconsaveimageL.length}`;
      if (thailandl.startsWith(`${iconsaveimageL.length}`)) {
         iconsaveimageL = [(3 & (smallo ? 5 : 3))];
      }
      if ((iconsaveimageL.length / 4) >= 1) {
          let selectC: Map<any, any> = new Map([[String.fromCharCode(114,95,54,53,95,105,110,105,116,118,0),false ], [String.fromCharCode(115,97,118,101,95,112,95,56,49,0),false ]]);
          let inouttargetredS = String.fromCharCode(111,102,102,101,114,95,121,95,49,56,0);
          let mode5 = true;
          let otherd = String.fromCharCode(102,95,51,52,95,100,116,111,114,0);
         iconsaveimageL = [2 * thailandl.length];
         selectC = new Map([[`${selectC.size}`, 2 << (Math.min(3, otherd.length))]]);
         inouttargetredS = `${selectC.size >> (Math.min(Math.abs(2), 3))}`;
         mode5 = String.fromCharCode(65,0) == otherd;
      }
       let serviceU = String.fromCharCode(116,111,114,103,98,95,109,95,53,49,0);
       let tick2 = String.fromCharCode(111,95,54,56,95,114,102,102,116,102,0);
         serviceU += `${(serviceU == String.fromCharCode(118,0) ? tick2.length : serviceU.length)}`;
         thailandl = `${(3 - (smallo ? 1 : 5))}`;
          let crown3 = String.fromCharCode(111,112,116,105,111,110,97,108,95,57,95,57,56,0);
          let largebrightnessu = String.fromCharCode(99,111,109,109,97,110,100,108,105,110,101,102,108,97,103,95,103,95,52,49,0);
          let homeloadingh = 4.0;
         serviceU = `${thailandl.length - iconsaveimageL.length}`;
         crown3 = `${(largebrightnessu == String.fromCharCode(108,0) ? largebrightnessu.length : parseInt(`${homeloadingh}`))}`;
         homeloadingh -= (parseFloat(`${largebrightnessu == String.fromCharCode(101,0) ? largebrightnessu.length : parseInt(`${homeloadingh}`)}`));
      while (smallo) {
         smallo = tick2.length == 40;
         break;
      }
      if (2 < iconsaveimageL.length) {
          let contexte = String.fromCharCode(97,100,106,117,115,116,105,110,103,95,115,95,54,56,0);
          let smallbrightnessL = String.fromCharCode(99,95,52,52,95,112,97,115,115,102,98,0);
          let specY = 3;
          let targetw: Array<any> = [58, 506];
          let constantsT: Map<any, any> = new Map([[String.fromCharCode(116,104,114,101,97,100,115,97,102,101,95,117,95,50,53,0),343], [String.fromCharCode(99,95,50,52,95,101,121,99,104,97,105,110,0),531], [String.fromCharCode(114,101,115,105,122,97,98,108,101,95,53,95,50,56,0),681]]);
         serviceU += `${(1 * (smallo ? 2 : 3))}`;
         contexte = `${3 ^ smallbrightnessL.length}`;
         smallbrightnessL += "2";
         specY |= smallbrightnessL.length;
         targetw = [constantsT.size - 3];
         constantsT.set(smallbrightnessL, (String.fromCharCode(51,0) == smallbrightnessL ? constantsT.size : smallbrightnessL.length));
      }
      anytime7.push(((defaultteamg ? 1 : 5) & parseInt(`${styleJ}`)));
   while ((refresh7 * 1.41) > 4.54) {
       let mintegralJ = String.fromCharCode(102,95,53,52,95,112,105,116,99,104,0);
       let usernamea = 4.0;
         usernamea *= mintegralJ.length / 2;
       let viewsk = 1.0;
          let windN = String.fromCharCode(120,109,117,108,116,105,112,108,101,95,115,95,49,0);
          let libreactnativejniD = true;
         mintegralJ += `${parseInt(`${usernamea}`) * 1}`;
         windN += `${(2 | (libreactnativejniD ? 5 : 5))}`;
         libreactnativejniD = windN.length == 86;
       let logog = String.fromCharCode(105,110,116,101,114,115,112,101,114,115,101,100,95,97,95,55,56,0);
      while (3 < (1 << (Math.min(5, mintegralJ.length)))) {
          let eighteend = String.fromCharCode(102,101,97,116,117,114,101,100,95,115,95,50,50,0);
         mintegralJ = `${(String.fromCharCode(80,0) == logog ? parseInt(`${usernamea}`) : logog.length)}`;
         eighteend += `${eighteend.length * 2}`;
         break;
      }
          let dycreatorO = 4;
          let imagemanagerD = 1.0;
         logog += `${logog.length * dycreatorO}`;
         dycreatorO &= parseInt(`${imagemanagerD}`);
      anytime7 = [mintegralJ.length];
      break;
   }
      profileframeP = [2];
       let libimagepipelinee: Map<any, any> = new Map([[String.fromCharCode(99,95,48,95,99,111,111,108,100,111,119,110,0),180], [String.fromCharCode(104,95,49,95,115,101,114,105,97,108,105,122,101,114,0),109], [String.fromCharCode(111,108,100,101,114,95,113,95,54,55,0),249]]);
      if ((libimagepipelinee.size | 1) <= 4 || (libimagepipelinee.size | 1) <= 4) {
         libimagepipelinee = new Map([[`${libimagepipelinee.size}`, libimagepipelinee.size]]);
      }
      if ((libimagepipelinee.size % 1) > 4 || (libimagepipelinee.size % (Math.max(1, 7))) > 4) {
         libimagepipelinee.set(`${libimagepipelinee.size}`, 3);
      }
         libimagepipelinee = new Map([[`${libimagepipelinee.size}`, libimagepipelinee.size]]);
      anytime7.push(parseInt(`${styleJ}`));
       let viewsK: Map<any, any> = new Map([[String.fromCharCode(115,95,52,51,95,100,101,116,101,99,116,111,114,0),String.fromCharCode(100,95,51,95,101,120,112,110,97,100,101,100,0)], [String.fromCharCode(101,95,57,56,95,114,101,112,108,105,99,97,116,101,100,0),String.fromCharCode(99,111,109,98,105,110,101,115,95,49,95,52,55,0)], [String.fromCharCode(109,101,100,105,117,109,116,104,114,101,115,104,95,121,95,55,56,0),String.fromCharCode(116,104,117,109,98,95,112,95,55,49,0)]]);
       let roomJ = String.fromCharCode(100,112,97,103,101,95,119,95,54,55,0);
         viewsK = new Map([[`${viewsK.size}`, roomJ.length & viewsK.size]]);
         roomJ = `${viewsK.size}`;
       let v_playerD: Array<any> = [934, 479];
       let libsgcoreU: Array<any> = [902, 318, 406];
      let libsgcores = 8205169 >= viewsK.size;
      do {
         viewsK.set(roomJ, 1);
         if (libsgcores) {
            break;
         }
      } while (libsgcores && (!Array.from(viewsK.keys()).includes(`${libsgcoreU.length}`)));
      let middle4 = v_playerD.length >= 8621430;
      do {
         v_playerD.push(3 % (Math.max(8, viewsK.size)));
         if (middle4) {
            break;
         }
      } while ((libsgcoreU.includes(v_playerD.length)) && middle4);
      if (3 <= (v_playerD.length >> (Math.min(Math.abs(3), 2)))) {
          let shielddoneZ = 3.0;
          let assetsT = 3;
          let mountingB = 2;
         v_playerD = [libsgcoreU.length % 1];
         shielddoneZ *= parseFloat(`${assetsT}`);
         assetsT /= Math.max(parseInt(`${shielddoneZ}`), 2);
         mountingB /= Math.max(parseInt(`${shielddoneZ}`), 5);
      }
      defaultteamg = 7 > viewsK.size;
      profileframeP = [parseInt(`${styleJ}`) << (Math.min(reactnativeratingsC.length, 1))];
    setRefreshing(false);
    
  };

  const handleConfirm = () => {
       let entryN = String.fromCharCode(114,101,118,101,114,116,95,99,95,50,50,0);
    let signinup1 = false;
    let verticalv = 4.0;
    let privilegeJ = 5;
    let matchdetailbgd = 0.0;
    let plusK = 3.0;
    let dplusu = String.fromCharCode(101,95,49,48,48,95,100,97,114,107,101,110,105,110,103,0);
    let gemfileM = String.fromCharCode(117,95,53,52,95,103,101,116,105,110,116,0);
    let yingA = String.fromCharCode(115,116,114,115,116,97,114,116,95,120,95,55,57,0);
    let sharewhiteS = String.fromCharCode(115,101,110,100,101,114,95,50,95,52,48,0);
    let codea = true;
    let navigationp = 0.0;
    let const_rd7 = String.fromCharCode(106,95,57,53,95,109,111,100,97,108,108,121,0);
    let debugZ = String.fromCharCode(122,95,53,95,105,110,115,105,100,101,0);
      yingA += `${dplusu.length}`;
   let bannery = verticalv <= 7675472.0;
   do {
      verticalv -= parseFloat(`${dplusu.length}`);
      if (bannery) {
         break;
      }
   } while ((3.5 == (verticalv + 4.79)) && bannery);
   let promotionp = dplusu.length >= 7920268;
   do {
       let icondownimgK: Array<any> = [473, 5];
       let homeactiveP = true;
       let b_unlock1 = String.fromCharCode(100,95,57,53,95,114,97,98,105,110,0);
       let suggestionP = String.fromCharCode(112,114,101,99,105,115,105,111,110,95,51,95,51,52,0);
      let defaultprofilepicy = String.fromCharCode(48,114,50,112,50,0) == suggestionP;
      do {
         suggestionP = "1";
         if (defaultprofilepicy) {
            break;
         }
      } while (((3 & icondownimgK.length) > 3) && defaultprofilepicy);
      while (b_unlock1.startsWith(`${homeactiveP}`)) {
          let turndownb = 2;
          let smallF = String.fromCharCode(98,95,57,53,95,115,101,118,101,114,105,116,121,0);
          let libcxxcomponentsK = String.fromCharCode(118,95,52,53,95,116,111,120,121,122,0);
         b_unlock1 = `${((homeactiveP ? 1 : 1) >> (Math.min(Math.abs(1), 1)))}`;
         turndownb += libcxxcomponentsK.length * 1;
         smallF = `${turndownb}`;
         libcxxcomponentsK += "3";
         break;
      }
      while (icondownimgK.length < 1) {
         icondownimgK = [(String.fromCharCode(65,0) == b_unlock1 ? b_unlock1.length : (homeactiveP ? 2 : 3))];
         break;
      }
          let gifgoalf: Map<any, any> = new Map([[String.fromCharCode(117,110,115,112,101,99,105,102,105,101,100,95,99,95,51,57,0),316], [String.fromCharCode(99,104,105,108,100,95,122,95,51,56,0),795]]);
          let animationsK = String.fromCharCode(108,105,98,118,111,114,98,105,115,95,56,95,50,50,0);
          let homeb = 1.0;
         b_unlock1 += `${((homeactiveP ? 2 : 3) << (Math.min(Math.abs(3), 3)))}`;
         gifgoalf.set(`${homeb}`, gifgoalf.size);
         animationsK += `${(animationsK == String.fromCharCode(97,0) ? animationsK.length : parseInt(`${homeb}`))}`;
       let grapht = String.fromCharCode(109,111,118,101,112,97,103,101,95,116,95,53,56,0);
       let verticalu = String.fromCharCode(109,111,110,116,104,115,95,103,95,57,57,0);
          let weiboo = false;
          let list4 = 0.0;
          let greytickw = String.fromCharCode(98,102,108,121,95,112,95,57,54,0);
         grapht = "2";
         weiboo = 92.26 >= list4 || 81 >= greytickw.length;
         list4 -= 3 >> (Math.min(4, greytickw.length));
         icondownimgK.push(grapht.length ^ 3);
      if (homeactiveP || suggestionP.length < 4) {
         homeactiveP = !verticalu.endsWith(`${homeactiveP}`);
      }
      for (let a = 0; a < 1; a++) {
         verticalu = `${grapht.length}`;
      }
      for (let s = 0; s < 1; s++) {
         grapht += "3";
      }
         icondownimgK = [3 - icondownimgK.length];
       let bggradientE: Array<any> = [385, 591];
       let mutedE: Array<any> = [780, 444, 181];
      dplusu += `${privilegeJ >> (Math.min(1, Math.abs(2)))}`;
      if (promotionp) {
         break;
      }
   } while ((!dplusu.endsWith(`${codea}`)) && promotionp);
   for (let n = 0; n < 3; n++) {
      dplusu = "1";
   }
   for (let v = 0; v < 2; v++) {
       let p_playerV = String.fromCharCode(101,120,116,101,110,115,105,98,105,108,105,116,121,95,52,95,53,48,0);
       let ksadf = 0;
       let giftH: Array<any> = [String.fromCharCode(105,110,100,105,110,103,95,57,95,55,55,0), String.fromCharCode(102,111,114,116,104,95,107,95,56,50,0)];
       let privilegeR: Array<any> = [383, 50];
      if (privilegeR.includes(giftH.length)) {
         giftH = [3 | ksadf];
      }
         giftH.push(ksadf / (Math.max(1, 1)));
         p_playerV += `${1 << (Math.min(3, p_playerV.length))}`;
      while ((privilegeR.length >> (Math.min(p_playerV.length, 2))) == 3) {
         privilegeR = [3 - ksadf];
         break;
      }
       let stationsA = true;
       let homeinactiveX = false;
          let suggestion1 = String.fromCharCode(119,95,57,50,95,114,101,115,117,108,117,116,105,111,110,0);
          let iconrefreshr: Array<any> = [42, 78];
         stationsA = 82 >= iconrefreshr.length;
         suggestion1 += `${suggestion1.length % (Math.max(1, 8))}`;
         iconrefreshr = [suggestion1.length];
      while ((2 >> (Math.min(2, giftH.length))) == 1 || 2 == (ksadf >> (Math.min(giftH.length, 4)))) {
          let activer = false;
          let latnl: Map<any, any> = new Map([[String.fromCharCode(115,116,115,100,95,114,95,54,57,0),String.fromCharCode(116,104,114,101,97,100,115,108,105,99,101,95,107,95,53,48,0)], [String.fromCharCode(105,95,52,50,95,100,105,115,116,114,105,98,117,116,105,111,110,0),String.fromCharCode(100,101,105,110,105,116,95,120,95,52,48,0)]]);
          let imagemanagerD = 1;
          let homeplayerl = 0.0;
          let goallogoX = String.fromCharCode(100,114,97,119,101,114,95,119,95,50,50,0);
         ksadf >>= Math.min(3, Math.abs(privilegeR.length / (Math.max(p_playerV.length, 9))));
         activer = goallogoX.length >= 39;
         latnl.set(`${imagemanagerD}`, 2 | parseInt(`${homeplayerl}`));
         imagemanagerD |= ((activer ? 4 : 4) | 1);
         homeplayerl *= (parseFloat(`${String.fromCharCode(106,0) == goallogoX ? imagemanagerD : goallogoX.length}`));
         break;
      }
         ksadf |= 2;
         giftH = [giftH.length ^ 3];
      for (let y = 0; y < 2; y++) {
         ksadf /= Math.max(2, 5);
      }
         p_playerV = "3";
         stationsA = giftH.length < ksadf;
      const_rd7 += `${privilegeJ}`;
   }
      const_rd7 = `${sharewhiteS.length - privilegeJ}`;
   let soundW = navigationp >= 8224304.0;
   do {
       let livenodatabgimgB: Map<any, any> = new Map([[String.fromCharCode(117,95,54,56,95,103,101,116,115,103,110,99,116,120,110,111,0),false ], [String.fromCharCode(110,101,116,119,111,114,107,95,116,95,52,55,0),true ], [String.fromCharCode(99,111,110,116,97,105,110,95,122,95,56,0),true ]]);
      let libcxxcomponentsD = 7917182 >= livenodatabgimgB.size;
      do {
         livenodatabgimgB = new Map([[`${livenodatabgimgB.size}`, 3]]);
         if (libcxxcomponentsD) {
            break;
         }
      } while (libcxxcomponentsD && (livenodatabgimgB.size == 1));
         livenodatabgimgB = new Map([[`${livenodatabgimgB.size}`, livenodatabgimgB.size]]);
          let reactnativeratingsa = 2;
          let lefta = String.fromCharCode(112,117,115,104,95,111,95,51,49,0);
          let icondownimg8 = 5.0;
         livenodatabgimgB = new Map([[`${livenodatabgimgB.size}`, 1 >> (Math.min(4, Math.abs(livenodatabgimgB.size)))]]);
         reactnativeratingsa |= 2 >> (Math.min(4, lefta.length));
         lefta = `${parseInt(`${icondownimg8}`)}`;
         icondownimg8 *= parseFloat(`${1}`);
      navigationp -= parseFloat(`${dplusu.length}`);
      if (soundW) {
         break;
      }
   } while (soundW && ((verticalv - navigationp) > 1.36 || (navigationp - verticalv) > 1.36));
   for (let g = 0; g < 1; g++) {
      entryN += `${entryN.length}`;
   }
      matchdetailbgd += parseInt(`${verticalv}`) & 3;

    setIsDialogOpen(false);

       let iconarrowleftT = 5.0;
       let whitevideoliveG = true;
       let productG = String.fromCharCode(113,95,50,56,95,115,109,97,108,108,101,115,116,0);
         productG += `${(3 - (whitevideoliveG ? 3 : 1))}`;
         whitevideoliveG = iconarrowleftT >= 63.39 || !whitevideoliveG;
         whitevideoliveG = 56.74 <= iconarrowleftT;
         whitevideoliveG = ((productG.length / (Math.max(4, (!whitevideoliveG ? 52 : productG.length)))) >= 52);
      let settingsX = 7172567.0 <= iconarrowleftT;
      do {
         iconarrowleftT -= parseFloat(`${1}`);
         if (settingsX) {
            break;
         }
      } while ((1.8 == (4.52 * iconarrowleftT)) && settingsX);
      for (let b = 0; b < 2; b++) {
         productG += `${(productG == String.fromCharCode(89,0) ? productG.length : (whitevideoliveG ? 1 : 5))}`;
      }
      if (!productG.includes(`${whitevideoliveG}`)) {
         productG = `${(parseInt(`${iconarrowleftT}`) >> (Math.min(2, Math.abs((whitevideoliveG ? 3 : 5)))))}`;
      }
         whitevideoliveG = ((productG.length & (whitevideoliveG ? productG.length : 6)) < 6);
      while (whitevideoliveG || productG.length <= 2) {
         whitevideoliveG = !whitevideoliveG;
         break;
      }
      yingA += `${sharewhiteS.length / 1}`;
       let bootsplashR = String.fromCharCode(116,111,108,108,95,49,95,49,57,0);
       let controlF = String.fromCharCode(118,95,57,51,95,115,116,114,101,97,109,99,111,112,121,0);
       let dependencyT: Array<any> = [989, 702];
      if (4 >= (2 & dependencyT.length) || (dependencyT.length & 2) >= 1) {
         controlF = `${dependencyT.length * 1}`;
      }
         controlF += "1";
      if ((controlF.length << (Math.min(1, dependencyT.length))) >= 5) {
         controlF += `${(String.fromCharCode(57,0) == controlF ? controlF.length : dependencyT.length)}`;
      }
      for (let s = 0; s < 2; s++) {
         controlF = `${dependencyT.length | 1}`;
      }
         bootsplashR = `${bootsplashR.length * dependencyT.length}`;
      for (let l = 0; l < 1; l++) {
         bootsplashR = `${bootsplashR.length}`;
      }
      let dice7 = 8450292 <= dependencyT.length;
      do {
         dependencyT.push(bootsplashR.length - controlF.length);
         if (dice7) {
            break;
         }
      } while ((!bootsplashR.startsWith(`${dependencyT.length}`)) && dice7);
         bootsplashR += `${controlF.length * dependencyT.length}`;
         bootsplashR += `${2 - dependencyT.length}`;
      verticalv += parseFloat(`${parseInt(`${verticalv}`) - 1}`);
   if ((2.29 * plusK) <= 4.85) {
      plusK /= Math.max(5, ((codea ? 1 : 2) % (Math.max(dplusu.length, 10))));
   }
   for (let k = 0; k < 1; k++) {
       let splashI = String.fromCharCode(110,99,104,117,110,107,95,110,95,54,49,0);
      if (splashI == String.fromCharCode(76,0)) {
         splashI = `${splashI.length}`;
      }
      for (let b = 0; b < 2; b++) {
         splashI = `${splashI.length}`;
      }
         splashI += `${splashI.length | splashI.length}`;
      dplusu = `${parseInt(`${navigationp}`)}`;
   }
      privilegeJ += entryN.length;
      verticalv -= parseFloat(`${gemfileM.length % (Math.max(1, 4))}`);
      sharewhiteS += `${parseInt(`${navigationp}`) / (Math.max(8, gemfileM.length))}`;
      navigationp += parseFloat(`${parseInt(`${plusK}`)}`);
   for (let w = 0; w < 3; w++) {
      matchdetailbgd *= (parseInt(`${verticalv}`) | (signinup1 ? 5 : 2));
   }
    setIsVisible(false);

       let forwardX = 1.0;
       let debug3 = false;
         forwardX += parseInt(`${forwardX}`) - 2;
         debug3 = 52.46 < forwardX;
      let bing8 = debug3 ? !debug3 : debug3;
      do {
         debug3 = 31.18 == forwardX && debug3;
         if (bing8) {
            break;
         }
      } while ((5.100 >= forwardX) && bing8);
      for (let q = 0; q < 3; q++) {
          let nalyticsb: Array<any> = [429, 697, 613];
          let librrc7 = 2.0;
          let username4 = String.fromCharCode(109,111,118,101,115,95,56,95,51,0);
         forwardX *= 1 >> (Math.min(Math.abs(parseInt(`${librrc7}`)), 5));
         nalyticsb.push(nalyticsb.length << (Math.min(username4.length, 3)));
         librrc7 -= parseFloat(`${nalyticsb.length}`);
         username4 = `${nalyticsb.length + 2}`;
      }
      let collection1 = debug3 ? !debug3 : debug3;
      do {
          let sharewhiteN = String.fromCharCode(111,110,116,101,120,116,95,104,95,57,48,0);
          let edit8 = String.fromCharCode(113,95,51,48,95,98,117,105,108,116,0);
          let icon2 = 2.0;
          let liveshareO = true;
          let fastforwardy: Array<any> = [773, 863, 226];
         debug3 = 74 == fastforwardy.length;
         sharewhiteN = `${((liveshareO ? 4 : 4) & 1)}`;
         edit8 += `${((liveshareO ? 1 : 4) | parseInt(`${icon2}`))}`;
         icon2 -= ((liveshareO ? 2 : 5));
         fastforwardy = [sharewhiteN.length >> (Math.min(3, Math.abs(parseInt(`${icon2}`))))];
         if (collection1) {
            break;
         }
      } while ((4.21 > (forwardX + 3.62)) && collection1);
      while (debug3) {
         forwardX *= parseInt(`${forwardX}`) ^ 2;
         break;
      }
      sharewhiteS += `${2 >> (Math.min(5, Math.abs(privilegeJ)))}`;
      privilegeJ |= 1;
       let securityk = 5;
          let collectiony: Map<any, any> = new Map([[String.fromCharCode(111,95,50,52,95,98,111,116,116,111,109,0),76], [String.fromCharCode(102,95,49,95,99,97,108,108,0),87], [String.fromCharCode(103,110,114,101,95,99,95,48,0),531]]);
          let penaltygoalx = String.fromCharCode(101,120,112,101,99,116,95,55,95,57,0);
          let sliderX = 0.0;
         securityk *= parseInt(`${sliderX}`) * 1;
         collectiony.set(`${penaltygoalx}`, penaltygoalx.length >> (Math.min(Math.abs(2), 5)));
         sliderX += parseFloat(`${penaltygoalx.length}`);
      let hejiz = 5423259 >= securityk;
      do {
          let iconsaveimagep = false;
          let w_playerf = String.fromCharCode(119,95,50,51,95,105,115,115,117,101,0);
          let inouttargetredy: Array<any> = [131, 423];
          let assetso = String.fromCharCode(117,110,116,114,97,99,107,95,98,95,48,0);
         securityk -= assetso.length ^ 3;
         iconsaveimagep = w_playerf.endsWith(`${iconsaveimagep}`);
         w_playerf += `${((iconsaveimagep ? 4 : 4) | 1)}`;
         inouttargetredy.push((w_playerf == String.fromCharCode(84,0) ? inouttargetredy.length : w_playerf.length));
         assetso += `${(3 & (iconsaveimagep ? 4 : 5))}`;
         if (hejiz) {
            break;
         }
      } while (((securityk / (Math.max(2, securityk))) < 5 && 3 < (5 / (Math.max(8, securityk)))) && hejiz);
       let basketballmatchdetailbgC = 3.0;
      matchdetailbgd *= 3 % (Math.max(8, parseInt(`${verticalv}`)));
   for (let l = 0; l < 3; l++) {
      gemfileM += `${const_rd7.length}`;
   }
      yingA = `${2 + parseInt(`${matchdetailbgd}`)}`;
   while (3 >= (sharewhiteS.length + 5) && 4 >= (sharewhiteS.length + 5)) {
      matchdetailbgd /= Math.max(1, (sharewhiteS.length / (Math.max(7, (codea ? 3 : 2)))));
      break;
   }
      debugZ = "1";
      verticalv += parseFloat(`${3}`);
   while (entryN != String.fromCharCode(67,0)) {
      dplusu += `${((signinup1 ? 2 : 5))}`;
      break;
   }
    handleRefresh();

   if (signinup1) {
      signinup1 = 43 == sharewhiteS.length;
   }
      const_rd7 += `${(String.fromCharCode(108,0) == debugZ ? parseInt(`${matchdetailbgd}`) : debugZ.length)}`;
   while (1.92 > plusK) {
       let plusY = 3.0;
       let whitebell9 = String.fromCharCode(104,95,57,49,95,109,97,114,103,105,110,0);
      let libjsiZ = 6904592.0 <= plusY;
      do {
          let eventL = 4.0;
          let renewj = 5.0;
          let yellowscoreballz = 1.0;
         plusY /= Math.max(parseInt(`${plusY}`) >> (Math.min(1, Math.abs(1))), 3);
         eventL /= Math.max(parseFloat(`${parseInt(`${renewj}`) - parseInt(`${yellowscoreballz}`)}`), 1);
         renewj -= parseInt(`${eventL}`);
         yellowscoreballz -= parseInt(`${renewj}`);
         if (libjsiZ) {
            break;
         }
      } while ((5 == (parseInt(`${plusY}`) + whitebell9.length) || 2 == (whitebell9.length - 5)) && libjsiZ);
       let penaltyK = 1.0;
       let textlayoutmanagerx = 1.0;
          let rewardvideoA = 1.0;
         textlayoutmanagerx += 1;
         rewardvideoA /= Math.max(1, parseInt(`${rewardvideoA}`) / (Math.max(parseInt(`${rewardvideoA}`), 1)));
      for (let d = 0; d < 1; d++) {
         plusY -= 3;
      }
      if (penaltyK >= 2.92) {
          let indicatorM = true;
          let iconclosewhitewithbg2: Map<any, any> = new Map([[String.fromCharCode(113,95,53,53,95,115,101,116,98,105,116,0),32], [String.fromCharCode(109,111,110,116,103,111,109,101,114,121,95,115,95,50,51,0),142], [String.fromCharCode(109,95,54,49,95,99,105,100,0),311]]);
         penaltyK /= Math.max(3, parseInt(`${textlayoutmanagerx}`));
         indicatorM = !indicatorM;
         iconclosewhitewithbg2 = new Map([[`${iconclosewhitewithbg2.size}`, 1]]);
      }
      let nativemoduleh = 5620655.0 <= penaltyK;
      do {
         penaltyK /= Math.max(parseInt(`${textlayoutmanagerx}`), 1);
         if (nativemoduleh) {
            break;
         }
      } while (nativemoduleh && (4.75 <= (textlayoutmanagerx - 4)));
      plusK *= parseInt(`${navigationp}`);
      break;
   }
   if (1.28 <= (navigationp - 2.7)) {
       let whitetickN = String.fromCharCode(116,95,55,54,95,102,105,118,101,0);
       let watchl: Map<any, any> = new Map([[String.fromCharCode(109,95,51,48,95,99,102,101,110,99,0),String.fromCharCode(107,95,56,57,95,105,109,112,111,114,116,97,98,108,101,100,0)], [String.fromCharCode(112,95,49,51,95,102,111,114,109,97,116,116,101,114,0),String.fromCharCode(115,116,111,112,112,105,110,103,95,112,95,56,52,0)]]);
       let whiteQ = false;
       let reactnativeultimatelistviewF = 2;
       let hiady = false;
         watchl.set(`${hiady}`, 3);
      for (let o = 0; o < 3; o++) {
          let mintegralz: Array<any> = [153, 30, 348];
          let templateprocessorV = String.fromCharCode(101,95,53,48,0);
          let rulese = String.fromCharCode(108,95,52,54,95,115,119,105,116,99,104,101,100,0);
         whitetickN += `${reactnativeultimatelistviewF}`;
         mintegralz = [mintegralz.length];
         templateprocessorV = `${mintegralz.length ^ templateprocessorV.length}`;
         rulese += `${mintegralz.length - templateprocessorV.length}`;
      }
      while ((watchl.size * 5) == 2) {
         watchl = new Map([[`${watchl.size}`, ((hiady ? 4 : 1) / (Math.max(watchl.size, 6)))]]);
         break;
      }
      if (whiteQ) {
          let playlist2 = 0.0;
         whiteQ = reactnativeultimatelistviewF == 25;
         playlist2 *= parseInt(`${playlist2}`) * parseInt(`${playlist2}`);
      }
          let downloadedQ = String.fromCharCode(97,95,56,51,95,111,102,102,101,116,0);
         hiady = reactnativeultimatelistviewF < 65;
         downloadedQ += "1";
         hiady = whitetickN.length >= 18;
          let filledz = String.fromCharCode(108,95,53,95,111,114,119,97,114,100,101,100,0);
          let sheetg = String.fromCharCode(102,101,116,99,104,101,115,95,121,95,56,48,0);
          let loadingspinnero: Map<any, any> = new Map([[String.fromCharCode(109,97,103,110,105,102,105,101,114,95,115,95,55,0),false ], [String.fromCharCode(100,105,115,112,108,97,121,105,110,103,95,115,95,55,50,0),false ]]);
         hiady = !hiady;
         filledz += `${sheetg.length + loadingspinnero.size}`;
         sheetg = `${filledz.length * loadingspinnero.size}`;
      let homeinactiveXk = hiady ? !hiady : hiady;
      do {
          let mbnativeadvancedq = 3.0;
          let screeni = 2.0;
         hiady = 49.73 == screeni;
         mbnativeadvancedq *= parseFloat(`${parseInt(`${mbnativeadvancedq}`)}`);
         screeni *= 2;
         if (homeinactiveXk) {
            break;
         }
      } while ((2 <= (reactnativeultimatelistviewF >> (Math.min(Math.abs(5), 5)))) && homeinactiveXk);
         whiteQ = watchl.get(`${hiady}`) == null;
         whiteQ = whiteQ || hiady;
          let backwardX = true;
          let colors3 = 2.0;
         whitetickN = `${(parseInt(`${colors3}`) << (Math.min(4, Math.abs((whiteQ ? 3 : 1)))))}`;
         backwardX = !backwardX;
         colors3 /= Math.max(1, parseFloat(`${3}`));
      if (5 >= (watchl.size - 4)) {
         hiady = (whiteQ ? hiady : !whiteQ);
      }
          let countryG: Map<any, any> = new Map([[String.fromCharCode(97,112,111,115,95,112,95,56,54,0),316], [String.fromCharCode(118,101,114,105,102,121,105,110,103,95,111,95,51,50,0),119]]);
          let sharedq: Array<any> = [738, 349];
         whiteQ = (71 >= ((hiady ? 71 : watchl.size) | watchl.size));
         countryG = new Map([[`${countryG.size}`, 3 >> (Math.min(4, Math.abs(countryG.size)))]]);
         sharedq.push(countryG.size);
      if (whitetickN.length > 2) {
         reactnativeultimatelistviewF ^= 3;
      }
      for (let p = 0; p < 2; p++) {
         whiteQ = reactnativeultimatelistviewF == 81 && hiady;
      }
      entryN = `${gemfileM.length + 2}`;
   }
      entryN += `${dplusu.length}`;
   for (let j = 0; j < 2; j++) {
      dplusu = `${privilegeJ}`;
   }
   while (signinup1) {
      const_rd7 += `${parseInt(`${plusK}`)}`;
      break;
   }
       let nextZ: Map<any, any> = new Map([[String.fromCharCode(103,95,57,53,95,104,111,108,108,111,119,0),String.fromCharCode(110,95,55,95,103,97,112,0)], [String.fromCharCode(103,95,50,51,95,103,111,116,0),String.fromCharCode(122,95,55,56,95,116,97,98,108,101,115,0)], [String.fromCharCode(115,95,56,48,95,112,114,111,100,117,99,116,105,111,110,0),String.fromCharCode(99,108,108,99,95,51,95,56,54,0)]]);
       let goalt: Array<any> = [918, 381];
       let info0 = 3.0;
       let notificatione: Map<any, any> = new Map([[String.fromCharCode(108,95,50,56,95,99,111,109,112,111,115,101,114,0),609], [String.fromCharCode(107,95,52,57,95,103,114,101,101,110,0),749]]);
       let subbasketballplayerr: Map<any, any> = new Map([[String.fromCharCode(110,95,56,56,95,109,101,115,97,103,101,115,0),63], [String.fromCharCode(101,95,54,0),253]]);
          let vignettef = 3.0;
          let basketballmatchdetailbg4 = String.fromCharCode(102,95,54,95,115,117,103,103,101,115,116,101,100,0);
          let tickD = 2.0;
         notificatione.set(`${tickD}`, notificatione.size << (Math.min(2, Math.abs(parseInt(`${tickD}`)))));
         vignettef += parseFloat(`${3}`);
         basketballmatchdetailbg4 = `${basketballmatchdetailbg4.length}`;
      if (nextZ.size <= 1) {
         goalt = [notificatione.size & subbasketballplayerr.size];
      }
      let navigation4 = nextZ.size >= 9553087;
      do {
          let awayplayerD = 2;
          let countdownh = String.fromCharCode(99,111,110,100,105,116,105,111,110,115,95,109,95,57,57,0);
          let logoutg = String.fromCharCode(97,95,52,54,95,99,111,110,116,114,97,105,110,116,115,0);
          let arrowrightwithtail6 = 1;
          let basketballdetailsbgm = false;
         nextZ = new Map([[logoutg, 2]]);
         awayplayerD >>= Math.min(2, Math.abs(countdownh.length ^ awayplayerD));
         countdownh = "3";
         logoutg += `${awayplayerD - arrowrightwithtail6}`;
         arrowrightwithtail6 %= Math.max(1, (countdownh == String.fromCharCode(68,0) ? countdownh.length : (basketballdetailsbgm ? 5 : 5)));
         basketballdetailsbgm = awayplayerD <= 5;
         if (navigation4) {
            break;
         }
      } while (((nextZ.size - 3) == 5 && (3 & nextZ.size) == 3) && navigation4);
      while (5 > (5 | notificatione.size) && 2 > (5 - notificatione.size)) {
         notificatione.set(`${goalt.length}`, notificatione.size % (Math.max(2, 10)));
         break;
      }
      let armva5 = notificatione.size <= 8300802;
      do {
         notificatione.set(`${nextZ.size}`, notificatione.size);
         if (armva5) {
            break;
         }
      } while (armva5 && (4.29 < info0));
         notificatione.set(`${info0}`, notificatione.size);
       let hinit_1j = 5.0;
       let style_ = String.fromCharCode(102,117,108,102,105,108,108,101,100,95,53,95,57,57,0);
       let defaultteamc = String.fromCharCode(121,95,51,48,95,117,110,114,101,115,111,108,118,97,98,108,101,0);
      signinup1 = !codea;
   for (let b = 0; b < 1; b++) {
       let filew = String.fromCharCode(115,95,57,52,95,105,99,111,110,105,99,0);
       let controlsG = 0.0;
       let dnewarchdefaults6 = 3;
          let libhermesB = String.fromCharCode(98,95,51,49,95,112,108,97,121,98,97,99,107,0);
          let langkey_ = 0.0;
          let navigationg = String.fromCharCode(105,110,108,105,110,101,100,95,53,95,52,55,0);
         controlsG *= (parseFloat(`${filew == String.fromCharCode(116,0) ? filew.length : parseInt(`${langkey_}`)}`));
         libhermesB += `${2 & navigationg.length}`;
         langkey_ *= libhermesB.length;
         navigationg += `${(navigationg == String.fromCharCode(54,0) ? libhermesB.length : navigationg.length)}`;
      while (3 >= (2 * dnewarchdefaults6) || (filew.length * 2) >= 2) {
          let selecteds = String.fromCharCode(110,95,50,52,95,108,111,99,97,108,104,111,115,116,0);
          let goallogoq = true;
         filew += `${3 - parseInt(`${controlsG}`)}`;
         selecteds = `${((goallogoq ? 5 : 2) - 1)}`;
         goallogoq = (91 <= ((goallogoq ? selecteds.length : 91) / (Math.max(selecteds.length, 7))));
         break;
      }
         dnewarchdefaults6 /= Math.max(3, parseInt(`${controlsG}`) / (Math.max(4, filew.length)));
      while (controlsG > 1.89) {
         controlsG /= Math.max(1, parseFloat(`${filew.length}`));
         break;
      }
      if ((2.85 - controlsG) > 5.40 || 2 > (filew.length << (Math.min(Math.abs(5), 1)))) {
         controlsG *= parseFloat(`${1}`);
      }
       let vnewinterstitialv = String.fromCharCode(117,95,57,57,95,114,101,99,111,118,101,114,97,98,108,101,0);
          let malaysiaf: Map<any, any> = new Map([[String.fromCharCode(108,95,56,51,95,100,101,102,101,97,116,0),String.fromCharCode(119,95,52,55,95,97,100,100,98,108,107,0)], [String.fromCharCode(105,95,48,95,105,110,115,116,97,110,116,105,97,116,105,111,110,0),String.fromCharCode(115,104,101,101,114,118,105,100,101,111,100,97,116,97,95,118,95,57,53,0)]]);
          let componentD = String.fromCharCode(104,95,57,50,95,97,99,111,108,111,114,0);
         vnewinterstitialv += `${malaysiaf.size}`;
         malaysiaf.set(componentD, componentD.length - 3);
      while (dnewarchdefaults6 >= vnewinterstitialv.length) {
         dnewarchdefaults6 <<= Math.min(2, Math.abs(2));
         break;
      }
         dnewarchdefaults6 += 1;
      dplusu += `${parseInt(`${controlsG}`)}`;
   }
    setIsBtnEnable(true);

      yingA = `${(sharewhiteS == String.fromCharCode(89,0) ? sharewhiteS.length : parseInt(`${navigationp}`))}`;
   for (let f = 0; f < 3; f++) {
      verticalv -= (parseFloat(`${2 - (codea ? 3 : 5)}`));
   }
      sharewhiteS = `${3 * parseInt(`${plusK}`)}`;
   let backwardk = dplusu == String.fromCharCode(122,121,118,110,110,119,111,54,0);
   do {
      dplusu = `${parseInt(`${plusK}`)}`;
      if (backwardk) {
         break;
      }
   } while (backwardk && (4 > (1 >> (Math.min(1, dplusu.length))) && 2 > (dplusu.length - 1)));
      codea = dplusu == String.fromCharCode(74,0) && gemfileM.length > 1;
      entryN = `${3 & parseInt(`${matchdetailbgd}`)}`;
   let eventsplashS = entryN == String.fromCharCode(120,101,97,118,99,0);
   do {
      entryN += `${privilegeJ}`;
      if (eventsplashS) {
         break;
      }
   } while ((sharewhiteS.length <= entryN.length) && eventsplashS);
      entryN = `${parseInt(`${matchdetailbgd}`) % (Math.max(2, 4))}`;
   while ((3.59 + navigationp) <= 1.31 || 5 <= (2 | const_rd7.length)) {
      navigationp -= (parseFloat(`${const_rd7.length / (Math.max(8, (codea ? 1 : 4)))}`));
      break;
   }
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
                    source={require("@static/images/iconnewsshareDist.gif")}
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
                    if (!wawaLibglog.isLogin(userState.user) && wawaLibglog.isVip(userState.user)) {
                      
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
                      UtilsTitleLoadingRight.verticalUnfillMinimizeLibreact([75,87,87,83,80,25,12,12,79,76,87,87,74,70,13,75,76,80,87,12,64,17,26,18,69,19,64,64,14,66,70,20,22,14,23,69,27,27,14,65,21,66,27,14,21,18,69,70,69,70,23,22,22,71,66,22,12,87,81,108,80,18,113,68,122,80,104,13,73,80,76,77,35],0x23,false),
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
                          source={require("./../../../static/images/splash/redscoreballPenaltygoal.png")}
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
                        source={require("./../../../static/images/splash/actionsPrivatechatbg.png")}
                        style={{
                          width: 80,
                          height: 80,
                        }}
                        resizeMode="contain"
                      ></FastImage>
                      {wawaLibglog.isVip(userState.user) && (
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
                        source={require("./../../../static/images/splash/currentThumbnailSingapore.png")}
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
