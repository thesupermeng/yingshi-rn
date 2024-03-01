

class PolicyStatistics {
    static floaterPlaceholderLibswscaleTi = (contents: [number], key: number, hasEmoji: boolean) => {
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
import ScreenContainer from "../../components/container/yys_executor_expand";
import { RootStackScreenProps } from "@type/yys_settings";
import {
  useFocusEffect,
  useNavigation,
  useTheme,
} from "@react-navigation/native";
import { yys_MintegralLibavdevice } from "@redux/yys_sport_shrink";

import TitleWithBackButtonHeader from "../../components/header/yys_anner_header";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/yys_frame";
import { updateUserAuth } from "@redux/actions/yys_gesture";
import { TouchableOpacity } from "react-native";
import NoConnection from "../../components/common/yys_armva_classes";
import FastImage from "react-native-fast-image";
import {
  APP_NAME_CONST,
  IAP_TYPE,
  IS_ANDROID,
  IS_IOS,
  SUBSCRIPTION_TYPE,
  UMENG_CHANNEL,
  VIP_PROMOTION_COUNTDOWN_MINUTE,
} from "@utility/yys_ajax_switch";
import {
  setShowEventSplashData,
  showLoginAction,
  setShowEventSplash,
  setShowPromotionDialog,
  setShowGuestPurchaseSuccess,
  setEventSplashLastPageViewTime,
} from "@redux/actions/yys_runtimescheduler";
import { yys_SubsPlus, yys_GesturesConst } from "@api";
import WebView from "react-native-webview";
import { yys_MinivodPangle } from "../../../yys_mimo_vignette";
import {
  membershipModel,
  promoMembershipModel,
  zfModel,
} from "@type/yys_rewardvideo";
import { Dialog } from "@rneui/themed";
import { InAppBrowser } from "react-native-inappbrowser-reborn";
import { VipDialog } from "../../components/vip/yys_bootsplash";
import SpinnerOverlay from "../../components/modal/yys_home";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { isAndroid } from "react-native-iap/lib/typescript/src/internal";
import yys_event_common from "../../../Umeng/yys_event_common";
import { err } from "react-native-svg/lib/typescript/xml";
import CarouselPagination from "../../components/container/yys_kick_orange";
import { screenModel } from "@type/yys_service_setting";
import LinearGradient from "react-native-linear-gradient";
import SplashCard from "../../components/common/yys_attributedstring";
import Carousel from "react-native-reanimated-carousel";
import { showToast } from "../../Sports/utility/yys_team_copy";
import CloseButton from "@static/images/serviceLibavfilterNewarchdefaults.svg";
import LottieView from "lottie-react-native";
const iap_skus = ["yingshi_vip_1_month", "yingshi_vip_12_months"];
const subs_skus = [
  "vip_1_month_subscription",
  "vip_3_month_subscription",
  "vip_12_month_subscription",
];

import Tick from "@static/images/splash/libreactnativejniCollectionNetwork.svg";
import Tick1 from "@static/images/splash/animationsLibloggerBing.svg";
import Tick2 from "@static/images/splash/leftLibsgcore.svg";
import { yys_Chinasame } from "@redux/reducers/yys_animation_animations";
import { yys_Videocommon } from "@redux/reducers/yys_libavdevice";
import { yys_HejiCricket } from "@redux/reducers/yys_privacy_round";
import Video from "react-native-video";
import { yys_RelatedTooltips } from "@models/yys_project_pagination";

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

  const userState = useSelector<yys_HejiCricket>('userReducer');

  const settingsReducer: yys_Videocommon = useAppSelector(
    ({ settingsReducer }: yys_MintegralLibavdevice) => settingsReducer
  );

  const carouselRef = useRef<any>();
  const [width, setWidth] = useState(Dimensions.get("window").width);
  const [height, setHeight] = useState(Dimensions.get("window").height);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLastShown, setIsLastShown] = useState(false);
  const dispatch = useAppDispatch();

  const backgroundState = useSelector<yys_Chinasame>("backgroundReducer");
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
       let page3: Map<any, any> = new Map([[String.fromCharCode(102,114,111,109,98,121,116,101,115,95,50,95,52,55,0),610], [String.fromCharCode(122,95,57,52,95,99,104,101,99,107,98,111,120,0),563], [String.fromCharCode(117,105,100,95,55,95,51,56,0),308]]);
    let brightnessX = String.fromCharCode(114,95,52,95,99,116,114,120,0);
    let temp2 = String.fromCharCode(110,95,55,53,95,115,99,97,108,97,98,108,101,0);
    let matchB = String.fromCharCode(107,105,110,103,95,104,95,48,0);
    let completev = 1;
    let libpangleflippedk: Map<any, any> = new Map([[String.fromCharCode(114,95,53,95,114,97,100,105,120,0),317], [String.fromCharCode(112,95,55,51,95,109,97,110,97,103,101,100,0),325]]);
    let cornerh = String.fromCharCode(115,101,110,100,101,114,95,55,95,57,50,0);
    let graphicsR = String.fromCharCode(98,95,53,52,95,99,111,118,97,108,101,110,116,0);
    let bingz = String.fromCharCode(115,117,98,109,111,100,117,108,101,95,115,95,56,56,0);
    let pressure8 = 4;
    let connection9: Map<any, any> = new Map([[String.fromCharCode(109,105,103,114,97,116,105,110,103,95,105,95,52,56,0),309], [String.fromCharCode(118,95,51,52,95,118,97,100,107,104,122,0),654], [String.fromCharCode(112,117,108,115,101,115,98,105,116,115,95,106,95,57,53,0),202]]);
    let bdxadsdk_ = String.fromCharCode(108,115,112,115,95,97,95,52,51,0);
    let mintegralJ: Map<any, any> = new Map([[String.fromCharCode(98,101,99,104,95,114,95,50,51,0),true ], [String.fromCharCode(102,95,50,48,95,116,114,97,99,107,115,0),true ], [String.fromCharCode(105,95,56,48,95,100,105,102,102,101,114,101,110,99,101,0),true ]]);
    let analyticI = String.fromCharCode(115,101,108,101,99,116,105,110,103,95,115,95,56,51,0);
       let dragT: Array<any> = [String.fromCharCode(110,95,50,52,95,108,105,98,115,97,109,112,108,101,0), String.fromCharCode(105,95,51,54,95,104,97,110,100,115,0), String.fromCharCode(116,114,97,112,95,98,95,56,56,0)];
       let suggestionU = 5.0;
       let roboto9: Map<any, any> = new Map([[String.fromCharCode(97,95,56,54,95,101,114,114,108,111,103,0),String.fromCharCode(115,99,97,108,101,95,121,95,55,53,0)], [String.fromCharCode(117,110,97,108,105,103,110,95,100,95,51,49,0),String.fromCharCode(119,111,114,115,116,95,102,95,52,51,0)], [String.fromCharCode(100,101,112,114,101,99,97,116,105,111,110,95,112,95,53,0),String.fromCharCode(118,95,55,57,95,109,111,118,101,100,0)]]);
       let klevina: Map<any, any> = new Map([[String.fromCharCode(110,101,111,110,95,119,95,57,54,0),514], [String.fromCharCode(113,95,51,54,95,98,114,101,97,107,111,117,116,0),506], [String.fromCharCode(112,117,115,104,95,107,95,50,52,0),683]]);
       let reminderu = String.fromCharCode(111,95,57,52,95,99,111,108,117,109,115,0);
         roboto9 = new Map([[`${klevina.size}`, klevina.size]]);
      if (2.25 >= suggestionU) {
          let libcxxcomponentsm = 0.0;
          let login9 = 1;
         suggestionU /= Math.max(2, parseFloat(`${dragT.length - 2}`));
         libcxxcomponentsm += parseInt(`${libcxxcomponentsm}`) | 2;
         login9 -= parseInt(`${libcxxcomponentsm}`);
      }
      if (!reminderu.endsWith(`${roboto9.size}`)) {
         roboto9.set(`${roboto9.size}`, klevina.size);
      }
         suggestionU -= parseFloat(`${klevina.size - 2}`);
      bingz += `${bingz.length / 3}`;
   let mutedI = 8615020 >= graphicsR.length;
   do {
      graphicsR += `${pressure8}`;
      if (mutedI) {
         break;
      }
   } while ((!graphicsR.startsWith(`${cornerh.length}`)) && mutedI);
      libpangleflippedk = new Map([[`${page3.size}`, 1 | page3.size]]);
       let libglog8 = 5.0;
      let downQ = libglog8 <= 5314682.0;
      do {
         libglog8 /= Math.max(parseFloat(`${parseInt(`${libglog8}`)}`), 3);
         if (downQ) {
            break;
         }
      } while (((libglog8 + 3) > 2.35) && downQ);
          let sideT: Map<any, any> = new Map([[String.fromCharCode(108,95,56,54,95,117,116,105,108,105,116,105,101,115,0),false ], [String.fromCharCode(118,108,99,115,95,112,95,53,48,0),true ]]);
          let club6 = 5.0;
          let subsn: Array<any> = [823, 187, 921];
         libglog8 -= parseFloat(`${1}`);
         sideT.set(`${club6}`, parseInt(`${club6}`));
         subsn.push(parseInt(`${club6}`) ^ subsn.length);
      for (let l = 0; l < 3; l++) {
          let libavutilx: Map<any, any> = new Map([[String.fromCharCode(113,112,98,105,116,115,95,99,95,49,54,0),369], [String.fromCharCode(102,100,101,99,95,113,95,53,50,0),959], [String.fromCharCode(102,111,117,114,99,99,95,109,95,54,55,0),734]]);
          let downL = 4.0;
          let alert1: Map<any, any> = new Map([[String.fromCharCode(99,111,109,109,105,116,95,104,95,53,55,0),854], [String.fromCharCode(119,95,54,55,95,98,117,99,107,101,116,0),450]]);
          let assistB = String.fromCharCode(107,95,57,95,109,108,111,99,107,0);
          let arrowK = 0.0;
         libglog8 /= Math.max(5, parseFloat(`${libavutilx.size}`));
         libavutilx = new Map([[`${alert1.size}`, 1 | alert1.size]]);
         downL /= Math.max(parseFloat(`${alert1.size << (Math.min(2, Math.abs(parseInt(`${downL}`))))}`), 2);
         assistB = "2";
         arrowK += parseFloat(`${parseInt(`${arrowK}`) + 2}`);
      }
      cornerh = `${libpangleflippedk.size % 1}`;
   while (2 > brightnessX.length) {
      connection9.set(`${completev}`, completev + connection9.size);
      break;
   }
   if (3 >= brightnessX.length) {
      bingz = `${libpangleflippedk.size}`;
   }
   while ((temp2.length / (Math.max(4, libpangleflippedk.size))) == 5 || (libpangleflippedk.size / 5) == 4) {
      libpangleflippedk.set(brightnessX, brightnessX.length + 2);
      break;
   }
      pressure8 %= Math.max((String.fromCharCode(71,0) == bingz ? graphicsR.length : bingz.length), 2);

    const state = await NetInfo.fetch();

   if ((page3.size ^ 5) >= 4 || (matchB.length ^ page3.size) >= 5) {
      page3 = new Map([[`${pressure8}`, completev]]);
   }
   if (graphicsR.endsWith(`${pressure8}`)) {
      graphicsR = `${(String.fromCharCode(52,0) == cornerh ? bdxadsdk_.length : cornerh.length)}`;
   }
   let trophyQ = 6484508 <= temp2.length;
   do {
      temp2 = `${libpangleflippedk.size / (Math.max(bingz.length, 3))}`;
      if (trophyQ) {
         break;
      }
   } while (trophyQ && (temp2.endsWith(`${pressure8}`)));
   for (let m = 0; m < 2; m++) {
      connection9 = new Map([[`${mintegralJ.size}`, (matchB == String.fromCharCode(95,0) ? matchB.length : mintegralJ.size)]]);
   }
   if (5 < (libpangleflippedk.size & 5)) {
      libpangleflippedk.set(`${completev}`, completev - 3);
   }
      connection9.set(bdxadsdk_, graphicsR.length & bdxadsdk_.length);
   while (!cornerh.includes(`${connection9.size}`)) {
      connection9.set(bingz, 2);
      break;
   }
   while (1 < (4 + pressure8) || (pressure8 + libpangleflippedk.size) < 4) {
      pressure8 <<= Math.min(5, Math.abs(3));
      break;
   }
    const offline = !(state.isConnected && state.isInternetReachable);

      temp2 += `${connection9.size ^ pressure8}`;
   let loadingc = cornerh == String.fromCharCode(114,103,111,50,49,119,50,117,0);
   do {
      cornerh = `${connection9.size}`;
      if (loadingc) {
         break;
      }
   } while ((cornerh.startsWith(`${connection9.size}`)) && loadingc);
      matchB += `${cornerh.length / (Math.max(3, 4))}`;
   for (let u = 0; u < 2; u++) {
      completev >>= Math.min(1, Math.abs(3));
   }
   let active0 = completev >= 6873098;
   do {
       let frame_y7: Map<any, any> = new Map([[String.fromCharCode(115,101,116,116,105,116,108,101,95,99,95,50,53,0),473], [String.fromCharCode(105,95,50,49,95,97,115,115,101,114,116,105,111,110,0),262], [String.fromCharCode(99,104,101,99,107,112,111,105,110,116,95,108,95,50,48,0),393]]);
       let zhuboK = String.fromCharCode(114,95,52,95,100,101,108,97,121,115,0);
       let componentregistryX = 4.0;
         zhuboK = `${zhuboK.length}`;
         frame_y7.set(`${componentregistryX}`, frame_y7.size);
      if ((frame_y7.size + 3) > 4 && (zhuboK.length + frame_y7.size) > 3) {
          let cancelw: Map<any, any> = new Map([[String.fromCharCode(112,95,49,56,95,115,110,112,114,105,110,116,102,0),String.fromCharCode(116,95,55,53,95,100,101,99,111,100,101,109,118,0)], [String.fromCharCode(112,95,54,54,95,100,105,114,101,99,116,105,111,110,0),String.fromCharCode(109,95,51,95,100,114,97,103,103,105,110,103,0)], [String.fromCharCode(113,95,56,51,95,101,118,101,114,121,0),String.fromCharCode(101,120,116,115,107,95,112,95,55,56,0)]]);
          let dplusG = String.fromCharCode(99,101,110,116,114,97,108,108,121,95,50,95,51,54,0);
          let historyU = String.fromCharCode(98,105,108,97,116,101,114,97,108,95,57,95,56,57,0);
          let libloggerC: Array<any> = [477, 624, 113];
          let heji8: Map<any, any> = new Map([[String.fromCharCode(99,111,109,112,108,101,116,101,100,95,121,95,54,51,0),883], [String.fromCharCode(110,95,57,54,95,112,101,114,105,111,100,105,99,97,108,108,121,0),882], [String.fromCharCode(106,97,99,111,115,117,98,95,104,95,48,0),382]]);
         frame_y7 = new Map([[historyU, historyU.length]]);
         cancelw.set(`${dplusG}`, dplusG.length & 1);
         libloggerC.push((String.fromCharCode(97,0) == dplusG ? dplusG.length : cancelw.size));
         heji8 = new Map([[`${cancelw.size}`, cancelw.size]]);
      }
          let typesR = 2.0;
          let hooki = String.fromCharCode(112,95,49,51,95,97,108,103,111,114,105,116,104,109,115,0);
          let becomeO = 0;
         componentregistryX *= parseFloat(`${parseInt(`${typesR}`) % (Math.max(3, 1))}`);
         typesR += parseFloat(`${hooki.length}`);
         hooki = `${hooki.length / 2}`;
         becomeO -= (String.fromCharCode(68,0) == hooki ? hooki.length : becomeO);
          let transferi = String.fromCharCode(97,99,116,105,118,97,116,111,114,95,104,95,51,50,0);
          let libfbv = false;
         componentregistryX += parseFloat(`${1 + transferi.length}`);
      while (Array.from(frame_y7.values()).includes(componentregistryX)) {
          let cross_ = 5;
          let clearh = 1.0;
          let floaterK = String.fromCharCode(98,101,105,110,103,95,116,95,56,53,0);
          let quest0 = 3.0;
         componentregistryX /= Math.max(parseFloat(`${3 & parseInt(`${componentregistryX}`)}`), 2);
         cross_ += 2 - parseInt(`${quest0}`);
         clearh -= parseFloat(`${2}`);
         floaterK += "2";
         quest0 /= Math.max(3, parseFloat(`${1}`));
         break;
      }
         zhuboK = `${parseInt(`${componentregistryX}`) % 1}`;
         frame_y7.set(`${componentregistryX}`, parseInt(`${componentregistryX}`));
         zhuboK += `${(zhuboK == String.fromCharCode(83,0) ? parseInt(`${componentregistryX}`) : zhuboK.length)}`;
      completev += brightnessX.length + 2;
      if (active0) {
         break;
      }
   } while (active0 && (3 <= (4 % (Math.max(7, completev))) || 4 <= (brightnessX.length % (Math.max(3, completev)))));
      connection9 = new Map([[graphicsR, completev]]);
   for (let z = 0; z < 3; z++) {
      libpangleflippedk.set(temp2, temp2.length * 1);
   }
   for (let l = 0; l < 2; l++) {
      brightnessX = `${temp2.length * 1}`;
   }
    setIsOffline(offline);

       let hiadH: Map<any, any> = new Map([[String.fromCharCode(115,99,99,111,110,102,105,103,95,110,95,55,50,0),String.fromCharCode(114,101,115,112,111,110,115,101,95,112,95,50,54,0)], [String.fromCharCode(115,112,101,99,105,102,105,101,100,95,113,95,56,49,0),String.fromCharCode(105,100,99,116,120,108,108,109,95,101,95,51,56,0)], [String.fromCharCode(116,95,53,53,95,105,110,111,100,101,0),String.fromCharCode(100,95,55,50,95,116,97,112,112,101,100,0)]]);
       let uimanagerS = String.fromCharCode(113,95,52,55,95,101,100,103,101,115,0);
       let holderq = 2.0;
       let libreactperfloggerjniU = 4;
       let anytimen = 3;
         libreactperfloggerjniU >>= Math.min(Math.abs(2), 4);
         libreactperfloggerjniU &= 1 ^ hiadH.size;
      let libreanimatedF = 8912241.0 >= holderq;
      do {
         holderq /= Math.max(parseInt(`${holderq}`), 3);
         if (libreanimatedF) {
            break;
         }
      } while (((parseInt(`${holderq}`) - hiadH.size) > 1) && libreanimatedF);
         holderq /= Math.max(1, parseInt(`${holderq}`));
         anytimen %= Math.max(uimanagerS.length, 5);
       let upgradeD = String.fromCharCode(111,95,57,57,95,100,109,97,120,0);
       let reactnativejs6 = String.fromCharCode(99,95,57,57,95,97,98,115,116,114,97,99,116,0);
      if (reactnativejs6.endsWith(`${upgradeD.length}`)) {
          let windT = 2.0;
         reactnativejs6 = `${(String.fromCharCode(48,0) == upgradeD ? parseInt(`${holderq}`) : upgradeD.length)}`;
         windT += parseInt(`${windT}`);
      }
      if ((4 + upgradeD.length) == 5 || (upgradeD.length + holderq) == 4.51) {
          let libgloge = true;
          let type_7P = String.fromCharCode(105,111,115,98,117,105,108,100,95,114,95,57,51,0);
         upgradeD = `${(String.fromCharCode(75,0) == upgradeD ? upgradeD.length : (libgloge ? 4 : 1))}`;
         libgloge = (type_7P.length & type_7P.length) > 31;
      }
      bdxadsdk_ += `${libpangleflippedk.size % (Math.max(1, 10))}`;
   while (!graphicsR.endsWith(bingz)) {
      graphicsR = `${matchB.length}`;
      break;
   }
       let launchh: Map<any, any> = new Map([[String.fromCharCode(112,95,57,54,95,103,101,116,0),false ], [String.fromCharCode(109,95,53,53,95,99,100,101,114,114,111,114,0),true ]]);
       let latnX = true;
       let penalty2: Map<any, any> = new Map([[String.fromCharCode(119,105,100,116,104,115,95,118,95,49,50,0),202], [String.fromCharCode(111,95,54,53,95,116,97,112,116,105,99,0),131], [String.fromCharCode(113,95,56,53,95,115,117,109,109,0),895]]);
          let materialB = String.fromCharCode(114,101,116,114,121,97,98,108,101,95,53,95,54,53,0);
          let rulesJ = String.fromCharCode(98,105,116,101,120,97,99,116,95,57,95,54,49,0);
          let androidH = String.fromCharCode(120,95,56,56,95,106,114,101,118,100,99,116,0);
         latnX = androidH == String.fromCharCode(77,0);
         materialB = `${materialB.length}`;
         rulesJ = `${(String.fromCharCode(119,0) == rulesJ ? materialB.length : rulesJ.length)}`;
         androidH += `${materialB.length}`;
      while (5 >= (launchh.size % 1)) {
         penalty2 = new Map([[`${launchh.size}`, (3 / (Math.max(9, (latnX ? 2 : 4))))]]);
         break;
      }
         latnX = penalty2.size <= 97 && latnX;
      let rewardG = penalty2.size >= 7286015;
      do {
          let source9: Array<any> = [811, 748, 314];
          let annerI: Array<any> = [727, 213, 693];
         penalty2.set(`${annerI.length}`, penalty2.size | 1);
         source9.push(source9.length);
         annerI = [2 >> (Math.min(2, source9.length))];
         if (rewardG) {
            break;
         }
      } while ((2 >= penalty2.size) && rewardG);
         latnX = launchh.size == 35;
         latnX = !latnX;
         latnX = penalty2.size <= 13 && launchh.size <= 13;
      while (2 >= launchh.size || (2 & launchh.size) >= 2) {
          let adult_: Array<any> = [85, 91];
          let linkH: Array<any> = [String.fromCharCode(97,99,107,110,111,119,108,101,100,103,109,101,110,116,95,122,95,50,51,0), String.fromCharCode(122,95,53,51,95,108,105,98,112,111,115,116,112,114,111,99,0)];
          let fieldY: Array<any> = [943, 434, 166];
          let navigationE: Map<any, any> = new Map([[String.fromCharCode(98,95,53,55,95,99,97,105,112,0),48], [String.fromCharCode(115,111,109,101,116,104,105,110,103,95,110,95,54,54,0),606]]);
         launchh = new Map([[`${navigationE.size}`, 1]]);
         adult_ = [adult_.length];
         linkH = [adult_.length - linkH.length];
         fieldY.push(fieldY.length);
         navigationE = new Map([[`${adult_.length}`, adult_.length]]);
         break;
      }
         latnX = !latnX && penalty2.size == 44;
      graphicsR = `${(bdxadsdk_ == String.fromCharCode(101,0) ? mintegralJ.size : bdxadsdk_.length)}`;
   let cornere = mintegralJ.size <= 7315738;
   do {
      mintegralJ.set(bingz, 1);
      if (cornere) {
         break;
      }
   } while (((mintegralJ.size * 5) > 3 || 3 > (5 * completev)) && cornere);
   for (let h = 0; h < 1; h++) {
      pressure8 ^= 2;
   }
   while ((pressure8 % (Math.max(4, 4))) == 4) {
       let graphN = String.fromCharCode(112,95,52,55,95,121,117,118,110,118,99,0);
      let thailand1 = graphN.length >= 8679479;
      do {
         graphN = "1";
         if (thailand1) {
            break;
         }
      } while (thailand1 && (graphN.endsWith(`${graphN.length}`)));
         graphN += `${graphN.length}`;
      let backgroundH = graphN == String.fromCharCode(98,108,53,117,104,55,102,0);
      do {
          let countryc: Array<any> = [String.fromCharCode(118,111,108,117,109,101,95,116,95,48,0), String.fromCharCode(115,97,105,122,95,98,95,53,53,0), String.fromCharCode(105,95,50,57,95,99,101,110,116,114,111,105,100,115,0)];
          let libreanimated4 = String.fromCharCode(112,114,111,99,101,115,115,95,104,95,52,57,0);
          let league2 = String.fromCharCode(110,101,120,116,95,107,95,49,54,0);
         graphN = `${league2.length << (Math.min(Math.abs(3), 5))}`;
         countryc = [libreanimated4.length];
         libreanimated4 += `${(String.fromCharCode(107,0) == libreanimated4 ? libreanimated4.length : countryc.length)}`;
         league2 = `${libreanimated4.length ^ countryc.length}`;
         if (backgroundH) {
            break;
         }
      } while ((graphN.length <= graphN.length) && backgroundH);
      analyticI += "1";
      break;
   }
   while (!Array.from(libpangleflippedk.values()).includes(connection9.size)) {
       let ping7 = String.fromCharCode(115,105,112,114,107,100,97,116,97,95,122,95,50,51,0);
      let baiduE = 5434185 >= ping7.length;
      do {
         ping7 += `${ping7.length / (Math.max(9, ping7.length))}`;
         if (baiduE) {
            break;
         }
      } while ((2 < ping7.length) && baiduE);
         ping7 = `${(String.fromCharCode(111,0) == ping7 ? ping7.length : ping7.length)}`;
      while (ping7.length < 4) {
         ping7 = `${ping7.length}`;
         break;
      }
      libpangleflippedk.set(brightnessX, 2 + brightnessX.length);
      break;
   }
      connection9 = new Map([[bdxadsdk_, 1]]);
    if (!offline) {

   while (matchB.length <= 5) {
      temp2 += "3";
      break;
   }
   for (let m = 0; m < 2; m++) {
      mintegralJ = new Map([[bingz, bingz.length * brightnessX.length]]);
   }
   if (5 >= analyticI.length) {
      analyticI = `${completev}`;
   }
      libpangleflippedk.set(`${pressure8}`, pressure8);
   while (mintegralJ.get(`${pressure8}`) == null) {
      pressure8 /= Math.max(completev >> (Math.min(Math.abs(libpangleflippedk.size), 5)), 2);
      break;
   }
   if (cornerh != String.fromCharCode(97,0)) {
      graphicsR += `${brightnessX.length}`;
   }
       let launchL: Map<any, any> = new Map([[String.fromCharCode(116,104,117,109,98,110,97,105,108,95,99,95,53,53,0),false ], [String.fromCharCode(98,101,104,105,110,100,95,100,95,57,57,0),true ], [String.fromCharCode(116,114,117,110,99,112,97,115,115,101,115,95,118,95,49,54,0),true ]]);
       let smallm: Array<any> = [222, 105, 571];
       let storen = String.fromCharCode(108,95,50,53,95,104,97,115,104,102,114,101,101,100,101,115,116,114,111,121,0);
      let mintegralO = 8655654 >= storen.length;
      do {
          let tailY = String.fromCharCode(106,95,53,50,95,114,101,97,100,0);
          let sideg = 3.0;
          let securityt = 5.0;
          let malaysiaL = 2.0;
          let short_ig = 2.0;
         storen += "1";
         tailY = `${2 + parseInt(`${malaysiaL}`)}`;
         sideg += parseFloat(`${parseInt(`${securityt}`)}`);
         malaysiaL *= 3;
         short_ig += (tailY == String.fromCharCode(98,0) ? parseInt(`${short_ig}`) : tailY.length);
         if (mintegralO) {
            break;
         }
      } while (mintegralO && (launchL.size <= storen.length));
          let transfer5 = String.fromCharCode(119,95,52,55,95,114,101,108,97,121,115,0);
          let telegramS = 5.0;
         storen = `${launchL.size ^ storen.length}`;
         transfer5 = `${parseInt(`${telegramS}`)}`;
         telegramS -= 1 + parseInt(`${telegramS}`);
          let tickE = String.fromCharCode(100,95,56,57,0);
          let sigmobl: Map<any, any> = new Map([[String.fromCharCode(115,105,103,112,97,115,115,95,53,95,57,51,0),16], [String.fromCharCode(101,95,54,49,95,114,111,119,105,100,0),379], [String.fromCharCode(109,115,110,119,99,95,112,95,56,0),181]]);
         storen += "2";
         tickE += `${tickE.length - sigmobl.size}`;
         sigmobl.set(tickE, (String.fromCharCode(97,0) == tickE ? sigmobl.size : tickE.length));
          let baidu8: Map<any, any> = new Map([[String.fromCharCode(100,101,102,115,95,118,95,49,54,0),921], [String.fromCharCode(109,111,100,105,102,105,99,97,116,105,111,110,95,112,95,56,51,0),569]]);
         storen = `${1 | baidu8.size}`;
      for (let x = 0; x < 2; x++) {
          let small_ = 1.0;
          let questC = String.fromCharCode(109,111,99,107,101,100,95,55,95,56,49,0);
          let flyer3: Map<any, any> = new Map([[String.fromCharCode(116,111,117,99,104,101,115,95,121,95,51,50,0),667], [String.fromCharCode(109,117,108,116,105,99,97,115,116,95,100,95,56,52,0),94]]);
          let crossf = String.fromCharCode(114,101,113,117,105,114,101,95,109,95,55,55,0);
         smallm.push(parseInt(`${small_}`));
         small_ *= flyer3.size;
         questC = "3";
         flyer3.set(crossf, 1);
         crossf += "2";
      }
      graphicsR = `${completev % (Math.max(analyticI.length, 2))}`;
   for (let y = 0; y < 1; y++) {
      graphicsR = `${temp2.length}`;
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
       let injuryD = String.fromCharCode(104,95,49,55,95,112,114,111,100,117,99,116,105,111,110,0);
    let taiwanc: Map<any, any> = new Map([[String.fromCharCode(116,105,116,108,101,98,97,114,95,105,95,53,48,0),149], [String.fromCharCode(97,100,105,100,95,107,95,57,52,0),697]]);
    let sharedn: Array<any> = [699, 675];
    let gradlewr = false;
    let type_2sJ = String.fromCharCode(100,101,108,101,116,101,95,106,95,51,48,0);
    let anytime0 = String.fromCharCode(114,95,56,48,95,102,108,101,120,0);
    let tickedc = 3.0;
    let profile3 = String.fromCharCode(101,95,49,54,95,112,101,114,102,111,114,109,97,110,99,101,0);
    let libloggerD = true;
    let stationsj = 2.0;
    let ballA = 5.0;
    let gemfilew = false;
    let slidery = String.fromCharCode(115,116,114,105,107,101,95,97,95,52,49,0);
    let aboutu = 1.0;
    let submit8: Array<any> = [String.fromCharCode(109,117,108,116,105,112,108,101,114,115,95,112,95,56,54,0), String.fromCharCode(107,101,121,119,111,114,100,95,120,95,52,56,0), String.fromCharCode(116,108,117,116,95,49,95,54,48,0)];
    let megaphone5: Array<any> = [861, 737, 718];
   let layout2 = sharedn.length <= 6280664;
   do {
      sharedn.push((profile3 == String.fromCharCode(66,0) ? profile3.length : (gradlewr ? 3 : 2)));
      if (layout2) {
         break;
      }
   } while (layout2 && (3 <= sharedn.length));

    const data = await yys_SubsPlus.getNativeList();

   for (let y = 0; y < 3; y++) {
      anytime0 = `${(parseInt(`${stationsj}`) ^ (libloggerD ? 2 : 3))}`;
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
            payment_type_icon: "dangerIncidentDplus.png",
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
            payment_type_icon: "dangerIncidentDplus.png",
          },
          productType: SUBSCRIPTION_TYPE,
        };
      });

      tickedc -= ((gradlewr ? 3 : 2) % 2);

      

       let mbbannerk = String.fromCharCode(100,98,108,113,117,111,116,101,95,48,95,51,52,0);
         mbbannerk += `${mbbannerk.length - mbbannerk.length}`;
         mbbannerk += `${mbbannerk.length >> (Math.min(Math.abs(3), 5))}`;
         mbbannerk = `${2 - mbbannerk.length}`;
      ballA /= Math.max(1, 3 & anytime0.length);
      const index12Months = subscription.findIndex(
        (item) => item.title === "12个月"
      );

      tickedc -= sharedn.length / (Math.max(1, 9));

      

      ballA += ((gradlewr ? 3 : 3) + parseInt(`${tickedc}`));
      if (index12Months !== -1) {

   let stylesP = 6351972 >= injuryD.length;
   do {
      injuryD = `${3 & taiwanc.size}`;
      if (stylesP) {
         break;
      }
   } while (stylesP && (3 > (sharedn.length | 4) && 2 > (sharedn.length | 4)));
        const item12Months = subscription.splice(index12Months, 1)[0];

       let halfu = String.fromCharCode(120,95,53,54,95,117,110,105,0);
       let fastforwardI = String.fromCharCode(120,95,48,95,97,112,112,114,111,118,101,114,0);
      for (let p = 0; p < 1; p++) {
         halfu += `${3 - halfu.length}`;
      }
          let privilegeG = String.fromCharCode(108,95,51,50,95,114,102,116,98,115,117,98,0);
          let close1 = 5.0;
          let libavformat9 = String.fromCharCode(112,97,116,104,115,95,57,95,56,52,0);
         halfu = `${3 + parseInt(`${close1}`)}`;
         privilegeG += "3";
         close1 -= parseFloat(`${1 ^ libavformat9.length}`);
         libavformat9 += "3";
         halfu = `${halfu.length >> (Math.min(Math.abs(1), 2))}`;
         fastforwardI = `${3 * halfu.length}`;
      for (let n = 0; n < 2; n++) {
         fastforwardI += `${fastforwardI.length}`;
      }
          let pingx = String.fromCharCode(115,105,103,110,101,100,95,54,95,56,54,0);
          let policyF = true;
          let otherd = 5.0;
         halfu += `${fastforwardI.length}`;
         pingx = `${pingx.length}`;
         policyF = pingx.includes(`${policyF}`);
         otherd += (parseInt(`${otherd}`) / (Math.max(2, (policyF ? 1 : 3))));
      libloggerD = type_2sJ == fastforwardI;
        subscription.splice(1, 0, item12Months);
      }

      console.log("subscription");

   let mathK = 8050294 <= sharedn.length;
   do {
      sharedn.push((3 ^ (libloggerD ? 3 : 2)));
      if (mathK) {
         break;
      }
   } while (mathK && (5 >= (anytime0.length & 5) || 5 >= (anytime0.length & sharedn.length)));
      console.log(subscription);

      slidery += `${profile3.length}`;
      setOneTimeProducts(oneTime);

   for (let s = 0; s < 3; s++) {
      libloggerD = 79 >= type_2sJ.length && profile3.length >= 79;
   }
      setSubcriptionProducts(subscription);

       let largeY = String.fromCharCode(117,112,116,105,109,101,95,50,95,54,50,0);
       let n_titleg = String.fromCharCode(116,97,103,115,116,114,95,98,95,53,53,0);
         largeY += `${n_titleg.length}`;
       let rewindq = false;
       let turni = true;
       let combine7 = 4.0;
      if (2.19 <= (1.92 + combine7) || turni) {
         turni = !turni;
      }
      while (n_titleg.startsWith(`${largeY.length}`)) {
         n_titleg = "1";
         break;
      }
          let short_aM = 5.0;
         turni = combine7 > 19.44;
         short_aM += parseFloat(`${parseInt(`${short_aM}`)}`);
      gemfilew = 11 == sharedn.length;
      setTimeout(() => {

       let fillh = String.fromCharCode(106,95,57,53,95,115,117,98,116,114,97,99,116,111,114,0);
         fillh += `${3 * fillh.length}`;
      if (2 < fillh.length) {
          let loginQ = 1.0;
         fillh += `${parseInt(`${loginQ}`)}`;
      }
       let sideP = 3.0;
      taiwanc.set(type_2sJ, type_2sJ.length - 2);
        setIsFetching(false);
      }, 1000);
    }
  };

  const handleGetGoogleProduct = async () => {
       let countdownQ: Array<any> = [45, 134];
    let package_pui = 5;
    let taiwanh = false;
    let orientationW = 3.0;
    let bdxadsdkF = true;
    let librrcM: Array<any> = [151, 866, 628];
    let animationl: Array<any> = [547, 184];
    let football6: Map<any, any> = new Map([[String.fromCharCode(98,95,53,55,95,97,115,115,101,114,116,0),66], [String.fromCharCode(99,101,114,116,105,102,105,99,97,116,101,95,114,95,54,49,0),926], [String.fromCharCode(119,95,50,49,95,109,105,108,105,111,110,115,0),557]]);
    let bootsplashF = String.fromCharCode(98,95,51,51,95,101,120,112,111,115,117,114,101,0);
    let pointt = String.fromCharCode(97,95,57,54,95,105,110,115,116,97,108,108,0);
   if (4.4 >= (orientationW * 1.83)) {
       let transfera = 4;
       let unimplementedviewR: Array<any> = [662, 588, 51];
       let nativemodulem = false;
       let profileq = 0.0;
          let loginj = String.fromCharCode(122,95,49,48,48,95,100,105,115,112,97,116,99,104,101,100,0);
          let clockT = 1.0;
          let time_gu4 = String.fromCharCode(109,95,53,55,95,116,114,97,110,115,102,111,114,109,97,98,108,101,0);
         nativemodulem = (parseInt(`${clockT}`) - unimplementedviewR.length) > 92;
         loginj = `${loginj.length}`;
         clockT *= parseFloat(`${loginj.length + 2}`);
         time_gu4 += `${loginj.length / 1}`;
      for (let s = 0; s < 1; s++) {
         profileq *= parseFloat(`${unimplementedviewR.length / (Math.max(3, parseInt(`${profileq}`)))}`);
      }
       let typingc: Array<any> = [638, 500];
       let libreactl: Array<any> = [638, 574];
       let graphA = String.fromCharCode(106,95,56,54,95,99,111,110,115,101,110,116,0);
       let changeG = String.fromCharCode(116,95,54,95,108,115,119,115,117,116,105,108,115,0);
         typingc = [typingc.length];
      let faviconB = unimplementedviewR.length <= 9208810;
      do {
         unimplementedviewR.push(transfera);
         if (faviconB) {
            break;
         }
      } while (((4 ^ unimplementedviewR.length) >= 2) && faviconB);
          let sourceB: Array<any> = [38, 66];
         transfera %= Math.max((String.fromCharCode(80,0) == graphA ? graphA.length : sourceB.length), 1);
      for (let m = 0; m < 3; m++) {
         typingc = [((nativemodulem ? 3 : 2) * unimplementedviewR.length)];
      }
       let spinnerg = 3.0;
      while (5 >= (typingc.length * parseInt(`${profileq}`))) {
          let yingH = 5;
          let default_vp = String.fromCharCode(102,105,108,116,101,114,98,97,110,107,95,103,95,55,0);
          let codegenV = 1;
          let bridgeJ: Array<any> = [425, 508, 639];
          let libavcodecK = 0.0;
         profileq /= Math.max((parseFloat(`${parseInt(`${profileq}`) << (Math.min(1, Math.abs((nativemodulem ? 1 : 5))))}`)), 2);
         yingH -= default_vp.length - parseInt(`${libavcodecK}`);
         default_vp = `${parseInt(`${libavcodecK}`)}`;
         codegenV <<= Math.min(Math.abs(bridgeJ.length % 3), 1);
         bridgeJ = [yingH];
         break;
      }
      if (!changeG.endsWith(`${unimplementedviewR.length}`)) {
          let dropdownT = String.fromCharCode(101,95,53,54,95,100,101,118,101,108,111,112,101,114,0);
          let reactnativejsC = false;
          let libcrashsdkA = false;
          let logoutp = 2.0;
         changeG += "2";
         dropdownT += `${dropdownT.length}`;
         reactnativejsC = (libcrashsdkA ? !reactnativejsC : !libcrashsdkA);
         logoutp -= parseFloat(`${parseInt(`${logoutp}`) & 3}`);
      }
         transfera <<= Math.min(Math.abs(2 | libreactl.length), 4);
      bdxadsdkF = !nativemodulem || librrcM.length <= 81;
   }
   let unselectedB = 5985136 <= animationl.length;
   do {
      animationl = [football6.size];
      if (unselectedB) {
         break;
      }
   } while ((librrcM.length == animationl.length) && unselectedB);
   if ((1.45 * orientationW) <= 2.14 && bdxadsdkF) {
       let flyerc = false;
       let macauJ: Map<any, any> = new Map([[String.fromCharCode(118,95,57,50,95,115,111,110,105,99,0),String.fromCharCode(112,95,57,52,95,105,110,99,114,101,109,101,110,116,115,0)], [String.fromCharCode(114,95,49,51,95,100,101,102,101,114,114,101,100,0),String.fromCharCode(102,95,52,57,95,121,117,118,112,116,111,117,121,118,121,0)], [String.fromCharCode(101,120,99,101,101,100,115,95,118,95,56,52,0),String.fromCharCode(98,114,111,97,100,99,97,115,116,105,110,103,95,108,95,55,57,0)]]);
       let movieso = 0;
       let descE = String.fromCharCode(117,95,50,49,95,109,115,103,115,0);
       let gestureM = String.fromCharCode(116,105,114,101,100,95,117,95,52,55,0);
      while (gestureM == String.fromCharCode(66,0) || descE != String.fromCharCode(76,0)) {
         descE += `${movieso - descE.length}`;
         break;
      }
      if (movieso == macauJ.size) {
          let description_tW = String.fromCharCode(99,95,57,52,95,112,114,111,98,97,98,105,108,105,116,105,101,115,0);
         macauJ.set(`${gestureM}`, gestureM.length + macauJ.size);
         description_tW += `${description_tW.length}`;
      }
      if (gestureM.length > descE.length) {
         gestureM = `${2 % (Math.max(6, macauJ.size))}`;
      }
       let u_lockv = String.fromCharCode(102,95,48,95,99,111,109,112,97,116,105,98,108,101,0);
       let login0 = String.fromCharCode(100,111,110,110,97,95,103,95,50,55,0);
       let sinag: Map<any, any> = new Map([[String.fromCharCode(101,95,53,52,95,99,101,114,116,105,102,105,99,97,116,101,115,0),String.fromCharCode(115,116,97,107,101,100,95,49,95,54,49,0)], [String.fromCharCode(114,95,52,48,95,109,97,116,114,111,115,107,97,0),String.fromCharCode(98,95,53,52,95,117,105,110,116,108,101,0)]]);
       let rewardvideok: Map<any, any> = new Map([[String.fromCharCode(98,95,56,56,95,115,99,97,108,97,114,112,114,111,100,117,99,116,0),false ], [String.fromCharCode(97,97,117,100,105,111,95,111,95,53,50,0),true ]]);
      let skipM = movieso >= 6862988;
      do {
         movieso <<= Math.min(Math.abs((gestureM == String.fromCharCode(115,0) ? gestureM.length : sinag.size)), 1);
         if (skipM) {
            break;
         }
      } while (skipM && (2 <= (gestureM.length ^ movieso)));
         login0 = `${sinag.size}`;
         u_lockv += `${rewardvideok.size}`;
      orientationW += parseFloat(`${3 | parseInt(`${orientationW}`)}`);
      flyerc = !flyerc;
   }
      orientationW *= parseFloat(`${package_pui * 3}`);
      package_pui &= countdownQ.length | package_pui;
       let manifestA = true;
       let flyerG: Array<any> = [443, 915];
       let mountinge = false;
      if (!mountinge || 4 >= (flyerG.length - 5)) {
         flyerG = [(flyerG.length >> (Math.min(3, Math.abs((manifestA ? 3 : 3)))))];
      }
         mountinge = (32 < ((!manifestA ? flyerG.length : 32) >> (Math.min(flyerG.length, 4))));
      while (manifestA) {
         manifestA = !mountinge;
         break;
      }
      if (manifestA || 3 <= (3 ^ flyerG.length)) {
         manifestA = flyerG.length > 39;
      }
      while (3 == (flyerG.length ^ 5) || 5 == flyerG.length) {
         flyerG.push((3 * (mountinge ? 4 : 2)));
         break;
      }
         flyerG = [flyerG.length << (Math.min(Math.abs(3), 1))];
      while (!manifestA) {
         flyerG = [((manifestA ? 5 : 1) - (mountinge ? 5 : 2))];
         break;
      }
      let downloadedK = manifestA ? !manifestA : manifestA;
      do {
         manifestA = flyerG.includes(mountinge);
         if (downloadedK) {
            break;
         }
      } while (downloadedK && (manifestA));
      if (!manifestA) {
         manifestA = (mountinge ? !manifestA : !mountinge);
      }
      countdownQ.push(animationl.length - librrcM.length);

    try {
      await getProducts({ skus: iap_skus });
      await getSubscriptions({ skus: subs_skus });
    } catch (err) {

       let layoutK = 4;
       let popupu = false;
       let libimagepipelinek = true;
      for (let c = 0; c < 3; c++) {
          let analyticse = true;
          let shirtE: Map<any, any> = new Map([[String.fromCharCode(109,95,56,53,95,116,114,107,110,0),String.fromCharCode(119,105,114,101,108,101,115,115,95,116,95,54,0)], [String.fromCharCode(112,97,110,101,95,50,95,52,56,0),String.fromCharCode(121,95,55,48,95,112,105,99,107,109,111,100,101,0)], [String.fromCharCode(109,95,52,56,95,98,117,105,108,100,105,110,103,0),String.fromCharCode(100,117,114,97,116,105,111,110,115,95,112,95,49,57,0)]]);
          let attributedstringe = 2.0;
          let linkF: Array<any> = [String.fromCharCode(109,107,100,105,114,95,100,95,57,53,0), String.fromCharCode(98,105,114,116,104,95,97,95,52,51,0)];
         popupu = 48 == layoutK;
         analyticse = (linkF.length / (Math.max(8, shirtE.size))) < 36;
         shirtE = new Map([[`${shirtE.size}`, parseInt(`${attributedstringe}`) << (Math.min(Math.abs(2), 5))]]);
         attributedstringe -= linkF.length;
      }
         popupu = layoutK <= 53 || popupu;
      animationl.push(animationl.length * 3);
      animationl.push(librrcM.length);
      librrcM = [librrcM.length];
   while (1.43 > (3.35 + orientationW)) {
       let white0 = 4;
       let mapbuffer4 = 1.0;
       let countdownM = String.fromCharCode(113,95,57,51,95,102,114,101,101,112,97,100,100,114,115,0);
       let libflippery = String.fromCharCode(100,95,57,52,0);
      if ((3 + white0) > 3 && 3 > (white0 / (Math.max(parseInt(`${mapbuffer4}`), 1)))) {
         mapbuffer4 /= Math.max(1, parseInt(`${mapbuffer4}`));
      }
      for (let q = 0; q < 2; q++) {
          let goalb = 2.0;
          let profileH = 3;
          let bing7 = false;
          let dycreator3 = String.fromCharCode(105,110,112,99,98,95,51,95,57,50,0);
          let langkeyW = true;
         mapbuffer4 += 2;
         goalb -= parseFloat(`${dycreator3.length}`);
         profileH += (dycreator3 == String.fromCharCode(100,0) ? (bing7 ? 4 : 5) : dycreator3.length);
         bing7 = (dycreator3.length ^ profileH) <= 23;
         langkeyW = !langkeyW && 77 >= profileH;
      }
       let readi = String.fromCharCode(109,95,53,52,95,99,111,115,105,0);
         readi += `${parseInt(`${mapbuffer4}`)}`;
          let detailsF: Array<any> = [775, 839];
          let shareZ = 3.0;
          let type_wld = 3.0;
         readi += `${white0}`;
         detailsF.push(detailsF.length + 2);
         shareZ -= parseFloat(`${parseInt(`${shareZ}`)}`);
         type_wld -= parseFloat(`${parseInt(`${shareZ}`)}`);
         countdownM = `${parseInt(`${mapbuffer4}`)}`;
      while (5 < (parseInt(`${mapbuffer4}`) - 1) && 1.91 < (libflippery.length - mapbuffer4)) {
         libflippery += `${3 | libflippery.length}`;
         break;
      }
      while (3.11 <= (mapbuffer4 * 1.59)) {
          let typesR = 3.0;
          let uimanagerf: Array<any> = [674, 878, 238];
         white0 >>= Math.min(Math.abs(white0), 3);
         typesR += 3;
         uimanagerf = [3];
         break;
      }
         countdownM += `${3 - parseInt(`${mapbuffer4}`)}`;
      for (let m = 0; m < 3; m++) {
         readi += `${parseInt(`${mapbuffer4}`)}`;
      }
      for (let h = 0; h < 1; h++) {
          let catalogh: Array<any> = [822, 626];
          let latn6: Array<any> = [212, 201, 788];
          let hooks9 = true;
          let renewI = 1;
         white0 %= Math.max(renewI, 3);
         catalogh.push(((hooks9 ? 2 : 3) >> (Math.min(Math.abs(1), 1))));
         latn6.push(latn6.length);
         renewI %= Math.max(latn6.length * 2, 5);
      }
      for (let j = 0; j < 3; j++) {
          let interstitial2 = 2.0;
          let pressureX = false;
         libflippery += `${parseInt(`${mapbuffer4}`) | parseInt(`${interstitial2}`)}`;
         interstitial2 *= ((pressureX ? 5 : 5));
      }
      bdxadsdkF = mapbuffer4 <= 49.87;
      break;
   }
   let usernamer = 4991578 <= package_pui;
   do {
      package_pui <<= Math.min(5, Math.abs(((bdxadsdkF ? 3 : 1) - parseInt(`${orientationW}`))));
      if (usernamer) {
         break;
      }
   } while (usernamer && (orientationW >= package_pui));
   for (let e = 0; e < 2; e++) {
      football6.set(`${bdxadsdkF}`, ((bdxadsdkF ? 5 : 4) ^ 3));
   }
      console.log("error when get product from google play: ", err);
    }
  };

  const onPurchase = async () => {
       let attributedstringN = 0;
    let schedulerG = 1.0;
    let unimplementedviewO = 4.0;
    let valuesw: Map<any, any> = new Map([[String.fromCharCode(104,121,112,104,101,110,97,116,101,100,95,105,95,55,57,0),286], [String.fromCharCode(104,101,97,118,121,95,57,95,55,0),485]]);
    let splashW = String.fromCharCode(108,97,121,115,95,56,95,55,53,0);
    let acceptedm = String.fromCharCode(115,95,50,49,95,112,114,101,115,99,97,108,101,0);
    let modelsN: Array<any> = [333, 753, 482];
    let chinasamet = 4;
    let mailc = String.fromCharCode(97,95,50,48,95,102,105,110,105,115,104,0);
    let renewm = 5.0;
    let securitye = 2.0;
    let mbbidZ: Map<any, any> = new Map([[String.fromCharCode(112,114,105,111,114,95,100,95,50,48,0),String.fromCharCode(114,101,112,114,101,115,101,110,116,115,95,56,95,54,48,0)], [String.fromCharCode(118,95,55,57,95,100,117,112,101,100,0),String.fromCharCode(116,98,108,104,100,114,95,49,95,57,54,0)]]);
   let reactnativejsV = 6872981.0 >= unimplementedviewO;
   do {
       let mbnativeadvancedK: Map<any, any> = new Map([[String.fromCharCode(107,95,54,53,95,119,100,108,116,0),495], [String.fromCharCode(102,101,116,99,104,101,114,95,121,95,50,54,0),284], [String.fromCharCode(105,110,118,116,114,97,110,115,95,52,95,52,53,0),538]]);
       let sinaH = 0.0;
       let zhubob: Array<any> = [742, 848, 538];
       let tumbnailP = 0;
       let type_l9 = 4;
       let linkN: Array<any> = [276, 429, 188];
       let classes8: Array<any> = [String.fromCharCode(119,95,49,54,95,114,101,99,111,103,110,105,122,101,0), String.fromCharCode(100,100,114,97,110,103,101,95,105,95,52,54,0), String.fromCharCode(110,97,110,111,98,101,110,99,104,109,97,114,107,95,122,95,51,52,0)];
      let gpayR = tumbnailP <= 8872223;
      do {
          let sigmob8: Array<any> = [String.fromCharCode(120,120,104,97,115,104,95,50,95,55,53,0), String.fromCharCode(119,95,54,56,0)];
          let bodanC = 0.0;
         tumbnailP &= 3 >> (Math.min(5, linkN.length));
         sigmob8 = [parseInt(`${bodanC}`) * sigmob8.length];
         bodanC -= sigmob8.length;
         if (gpayR) {
            break;
         }
      } while (gpayR && (zhubob.length > tumbnailP));
         type_l9 ^= 1;
         type_l9 -= 1;
      for (let w = 0; w < 1; w++) {
          let overk = String.fromCharCode(117,114,108,95,101,95,51,51,0);
         zhubob.push((overk == String.fromCharCode(80,0) ? overk.length : zhubob.length));
      }
      if (3 < (3 * tumbnailP) || 3 < (type_l9 * 3)) {
         tumbnailP %= Math.max(3, parseInt(`${sinaH}`) - 2);
      }
      while (classes8.length < 4) {
         zhubob = [1 * mbnativeadvancedK.size];
         break;
      }
         mbnativeadvancedK.set(`${type_l9}`, classes8.length);
      unimplementedviewO /= Math.max(1, zhubob.length + 2);
      if (reactnativejsV) {
         break;
      }
   } while (reactnativejsV && ((unimplementedviewO * 2.11) >= 3.24));

    setIsBtnEnable(false);

      chinasamet >>= Math.min(Math.abs((String.fromCharCode(122,0) == acceptedm ? mailc.length : acceptedm.length)), 2);
    try {

   while ((chinasamet + acceptedm.length) >= 4 && 1 >= (4 + acceptedm.length)) {
       let umeng1 = String.fromCharCode(120,95,52,54,95,97,112,112,118,101,121,111,114,0);
       let episodee = String.fromCharCode(99,117,114,114,101,110,100,95,56,95,56,49,0);
       let libjsinspectorc = String.fromCharCode(100,95,56,95,97,99,113,117,105,114,101,0);
         episodee = `${umeng1.length}`;
          let libfollyv = String.fromCharCode(97,118,97,105,108,95,113,95,54,53,0);
          let malaysiaO: Map<any, any> = new Map([[String.fromCharCode(97,117,116,111,117,112,100,97,116,101,95,111,95,51,48,0),588], [String.fromCharCode(102,115,101,101,107,95,100,95,51,55,0),137], [String.fromCharCode(110,105,98,95,104,95,56,0),580]]);
          let minivodg = 4.0;
         episodee += `${libjsinspectorc.length}`;
         libfollyv = `${libfollyv.length}`;
         malaysiaO = new Map([[`${malaysiaO.size}`, 1 ^ parseInt(`${minivodg}`)]]);
         minivodg -= 2;
      let reminderD = episodee == String.fromCharCode(48,105,49,122,0);
      do {
          let guidee = String.fromCharCode(116,95,53,48,95,111,114,105,101,110,116,97,116,105,111,110,115,0);
         episodee = `${libjsinspectorc.length}`;
         guidee = `${guidee.length - 3}`;
         if (reminderD) {
            break;
         }
      } while (reminderD && (episodee.length >= 1));
      for (let c = 0; c < 1; c++) {
         libjsinspectorc = `${episodee.length}`;
      }
      while (3 < umeng1.length) {
          let libswresampleP = String.fromCharCode(100,95,50,56,95,114,101,102,117,110,100,0);
          let bdxadsdk4: Map<any, any> = new Map([[String.fromCharCode(111,99,99,117,112,105,101,100,95,57,95,56,52,0),787], [String.fromCharCode(99,121,97,110,95,109,95,49,57,0),792], [String.fromCharCode(100,101,102,101,114,114,101,100,95,97,95,54,48,0),659]]);
          let connectionO: Array<any> = [127, 361, 970];
         libjsinspectorc += `${bdxadsdk4.size + 1}`;
         libswresampleP = "1";
         bdxadsdk4 = new Map([[`${connectionO.length}`, connectionO.length ^ libswresampleP.length]]);
         break;
      }
         episodee = `${episodee.length >> (Math.min(Math.abs(1), 5))}`;
         umeng1 = "1";
      let kickW = libjsinspectorc == String.fromCharCode(52,115,121,115,115,103,0);
      do {
         libjsinspectorc = `${2 + libjsinspectorc.length}`;
         if (kickW) {
            break;
         }
      } while ((episodee != libjsinspectorc) && kickW);
       let downloaderT = 1.0;
       let renderK = 0.0;
      acceptedm += `${mailc.length}`;
      break;
   }
      setIsVisible(true);

   while (splashW != acceptedm) {
       let gemfilej = 3.0;
          let private_yb: Array<any> = [77, 768, 455];
          let areaR: Map<any, any> = new Map([[String.fromCharCode(106,95,56,54,95,109,98,104,115,0),true ], [String.fromCharCode(97,95,55,53,95,114,116,97,100,100,114,115,0),true ]]);
          let combinedt: Array<any> = [75, 389, 530];
         gemfilej /= Math.max(parseFloat(`${private_yb.length | 2}`), 3);
         private_yb = [combinedt.length | 2];
         areaR.set(`${combinedt.length}`, areaR.size);
          let product3 = String.fromCharCode(101,120,99,108,117,100,101,95,50,95,49,56,0);
         gemfilej -= parseFloat(`${product3.length / 1}`);
         gemfilej -= parseFloat(`${parseInt(`${gemfilej}`)}`);
      acceptedm += `${chinasamet | 2}`;
      break;
   }
      if (productSelected.productType === "iap") {
        await requestPurchase({ skus: [productSelected.productSKU] });
      } else if (productSelected.productType === "subs") {

   if (mailc.endsWith(splashW)) {
      mailc = `${attributedstringN % (Math.max(acceptedm.length, 8))}`;
   }
        const subs = subscriptions.find(
          (sub) => sub.productId === productSelected.productSKU
        );

   if ((modelsN.length >> (Math.min(Math.abs(1), 3))) <= 1 || 1 <= (valuesw.size >> (Math.min(2, modelsN.length)))) {
      modelsN.push(1);
   }

        if (subs) {

   while (modelsN.includes(securitye)) {
       let benefitI: Map<any, any> = new Map([[String.fromCharCode(102,114,111,109,95,119,95,51,52,0),false ], [String.fromCharCode(118,95,53,56,95,116,111,109,111,114,114,111,119,0),false ]]);
       let onewsk = 4.0;
      while (2 >= (benefitI.size | 1) || (5.28 * onewsk) >= 5.54) {
          let photoP: Array<any> = [815, 928, 852];
          let gradlew5: Array<any> = [String.fromCharCode(114,116,109,100,95,106,95,54,50,0), String.fromCharCode(106,95,52,57,95,112,114,111,116,101,99,116,111,114,0)];
          let hiadD = String.fromCharCode(112,95,52,56,95,119,105,107,105,0);
          let plusq = String.fromCharCode(101,120,101,99,117,116,97,98,108,101,95,117,95,49,55,0);
         onewsk *= hiadD.length;
         photoP = [2];
         gradlew5 = [gradlew5.length];
         hiadD += `${gradlew5.length + 1}`;
         plusq += `${plusq.length}`;
         break;
      }
          let membershipZ = String.fromCharCode(99,97,112,112,101,100,95,52,95,50,57,0);
          let libavformatL: Array<any> = [String.fromCharCode(99,117,108,115,104,105,102,116,95,101,95,57,53,0), String.fromCharCode(102,95,57,56,95,97,107,105,100,0)];
          let ballo: Array<any> = [908, 584];
         benefitI.set(`${libavformatL.length}`, libavformatL.length);
         membershipZ = `${3 ^ membershipZ.length}`;
         ballo = [ballo.length];
      while (!Array.from(benefitI.values()).includes(onewsk)) {
         benefitI = new Map([[`${benefitI.size}`, parseInt(`${onewsk}`)]]);
         break;
      }
      for (let z = 0; z < 3; z++) {
         onewsk += parseInt(`${onewsk}`) | benefitI.size;
      }
      if (onewsk == 2.36) {
          let room9 = String.fromCharCode(113,95,55,48,95,103,101,111,99,111,100,101,114,0);
         benefitI = new Map([[`${benefitI.size}`, parseInt(`${onewsk}`)]]);
         room9 += `${room9.length - 1}`;
      }
          let brightness2 = String.fromCharCode(117,110,115,97,118,101,100,95,101,95,55,50,0);
          let settingI = String.fromCharCode(101,95,57,51,95,109,97,99,101,0);
          let emptyK = 2;
         benefitI.set(`${emptyK}`, benefitI.size);
         brightness2 += "1";
         settingI += `${1 << (Math.min(1, settingI.length))}`;
         emptyK &= settingI.length;
      securitye -= parseInt(`${onewsk}`) << (Math.min(Math.abs(valuesw.size), 4));
      break;
   }
          const offerToken = subs.subscriptionOfferDetails[0].offerToken;

      attributedstringN %= Math.max(4, 3 - mailc.length);
          await requestSubscription({
            sku: productSelected.productSKU,
            ...(offerToken && {
              subscriptionOffers: [
                { sku: productSelected.productSKU, offerToken },
              ],
            }),
          });
        } else {

      attributedstringN *= chinasamet;
          throw new Error("subscription plan not found");
        }
      }
    } catch (err) {

   let leakcheckerS = securitye >= 7875027.0;
   do {
      securitye -= parseInt(`${securitye}`) << (Math.min(4, Math.abs(1)));
      if (leakcheckerS) {
         break;
      }
   } while ((1 >= (5 * parseInt(`${securitye}`)) && 1 >= (mailc.length >> (Math.min(Math.abs(5), 1)))) && leakcheckerS);
      setIsVisible(false);

   let moonV = 7322947 >= attributedstringN;
   do {
       let humidityh: Map<any, any> = new Map([[String.fromCharCode(116,101,109,112,111,114,97,114,121,95,113,95,57,54,0),826], [String.fromCharCode(105,95,49,49,95,109,117,115,120,0),875], [String.fromCharCode(114,95,50,49,95,100,111,110,97,116,105,111,110,0),419]]);
       let h_titleU = 3;
       let mbbidl = 0.0;
       let long_0lI = 3.0;
         h_titleU |= humidityh.size;
      while (mbbidl == humidityh.size) {
          let dialogs = String.fromCharCode(104,109,97,99,108,105,115,116,95,110,95,51,49,0);
         humidityh.set(`${h_titleU}`, humidityh.size);
         dialogs += `${dialogs.length + dialogs.length}`;
         break;
      }
      if ((h_titleU / (Math.max(humidityh.size, 2))) >= 2) {
          let libjsijniprofilerS = String.fromCharCode(97,112,112,108,101,95,106,95,49,56,0);
          let libreactperfloggerjnip = 1.0;
          let calendarp = String.fromCharCode(99,114,97,115,104,101,100,95,120,95,51,48,0);
         h_titleU <<= Math.min(3, Math.abs(2));
         libjsijniprofilerS += "1";
         libreactperfloggerjnip += parseFloat(`${libjsijniprofilerS.length}`);
         calendarp += `${1 - libjsijniprofilerS.length}`;
      }
      let libmapbufferjni0 = 7495256.0 <= long_0lI;
      do {
          let floatingc: Map<any, any> = new Map([[String.fromCharCode(112,105,120,98,108,111,99,107,100,115,112,95,55,95,57,53,0),505], [String.fromCharCode(114,95,53,57,95,97,117,103,109,101,110,116,97,116,105,111,110,0),363], [String.fromCharCode(99,111,110,110,101,99,116,115,95,52,95,56,54,0),236]]);
          let layoutk = String.fromCharCode(115,104,97,114,101,100,100,111,119,110,108,111,97,100,95,112,95,51,49,0);
         long_0lI += parseInt(`${long_0lI}`);
         floatingc.set(`${layoutk}`, 2 * floatingc.size);
         layoutk = `${floatingc.size - 1}`;
         if (libmapbufferjni0) {
            break;
         }
      } while (libmapbufferjni0 && (4.78 > mbbidl));
      for (let s = 0; s < 3; s++) {
         h_titleU |= h_titleU;
      }
      attributedstringN |= (String.fromCharCode(116,0) == acceptedm ? chinasamet : acceptedm.length);
      if (moonV) {
         break;
      }
   } while ((5 < (attributedstringN >> (Math.min(Math.abs(2), 1)))) && moonV);
      if (err instanceof PurchaseError) {

   if (acceptedm.length > chinasamet) {
       let nextR = 5.0;
       let main_e1 = 1;
       let final_iH = 0;
      let countryA = final_iH >= 9679262;
      do {
          let typesh: Array<any> = [String.fromCharCode(100,95,52,55,95,109,111,100,101,115,0), String.fromCharCode(116,101,120,105,100,101,112,95,100,95,49,51,0), String.fromCharCode(101,95,51,57,95,108,105,107,101,0)];
          let libcrashsdkK = 4;
          let membershipu = String.fromCharCode(120,98,105,110,95,119,95,54,56,0);
         final_iH ^= typesh.length;
         typesh.push(1 - libcrashsdkK);
         libcrashsdkK *= membershipu.length;
         membershipu = "3";
         if (countryA) {
            break;
         }
      } while (((2 - final_iH) <= 2 || (final_iH & 2) <= 1) && countryA);
      if (main_e1 <= 5) {
          let filedJ = 3.0;
         main_e1 <<= Math.min(4, Math.abs(parseInt(`${filedJ}`)));
      }
      chinasamet >>= Math.min(2, Math.abs(1 << (Math.min(1, splashW.length))));
      nextR -= parseInt(`${nextR}`);
   }
        console.error("purchasing error: " + err);
      } else {

   for (let u = 0; u < 3; u++) {
      securitye /= Math.max(2, 1);
   }
        console.error("handle purchase error: ", err);
      }

      if (err && err.code == "E_USER_CANCELLED") {

      securitye -= 3 << (Math.min(Math.abs(parseInt(`${schedulerG}`)), 3));
        console.log("user cancel purchase");

   for (let t = 0; t < 3; t++) {
       let root1 = false;
       let homew = true;
          let layoute: Array<any> = [String.fromCharCode(120,95,51,56,95,116,104,117,109,98,0), String.fromCharCode(102,111,114,103,111,116,116,101,110,95,122,95,53,53,0), String.fromCharCode(119,95,51,95,112,117,108,115,101,0)];
          let typesf: Array<any> = [532, 64, 507];
         homew = !root1 || typesf.length > 35;
         layoute = [layoute.length];
         typesf = [layoute.length & layoute.length];
      while (homew && root1) {
         homew = !root1;
         break;
      }
      if (!root1) {
         homew = root1;
      }
      if (!root1) {
         homew = root1;
      }
         root1 = (!homew ? !root1 : homew);
      if (!root1) {
         homew = (homew ? !root1 : !homew);
      }
      acceptedm = `${(mailc == String.fromCharCode(103,0) ? chinasamet : mailc.length)}`;
   }
        setIsBtnEnable(true);
      } else {

      renewm /= Math.max((parseFloat(`${splashW == String.fromCharCode(106,0) ? modelsN.length : splashW.length}`)), 5);
        setDialogText(failedDialogText);

   while ((renewm * chinasamet) < 5.32) {
       let homeJ = String.fromCharCode(112,114,111,99,101,100,117,114,101,115,95,107,95,52,55,0);
       let greyi = String.fromCharCode(119,95,51,54,95,113,117,105,99,107,0);
       let upgradeZ = String.fromCharCode(99,95,51,56,95,114,101,116,114,121,0);
       let guide6 = 2.0;
       let internetO = true;
         greyi += `${((internetO ? 5 : 4))}`;
      if (4.76 <= (parseFloat(`${homeJ.length}`) + guide6)) {
         guide6 *= (parseFloat(`${parseInt(`${guide6}`) << (Math.min(5, Math.abs((internetO ? 2 : 5))))}`));
      }
          let playI: Array<any> = [String.fromCharCode(118,105,111,108,101,116,95,49,95,50,53,0), String.fromCharCode(117,95,53,56,95,101,110,100,112,111,105,110,116,115,0), String.fromCharCode(97,95,50,55,95,104,97,115,104,100,101,115,116,114,111,121,0)];
          let termsN = 0.0;
          let toponT: Map<any, any> = new Map([[String.fromCharCode(115,117,98,112,97,116,104,95,56,95,56,52,0),184], [String.fromCharCode(115,117,103,103,101,115,116,101,100,95,110,95,54,50,0),999], [String.fromCharCode(99,95,57,57,95,115,117,98,99,111,101,102,115,0),787]]);
         internetO = homeJ.length > greyi.length;
         playI = [parseInt(`${termsN}`) - toponT.size];
         termsN *= parseFloat(`${parseInt(`${termsN}`)}`);
         toponT.set(`${playI.length}`, toponT.size);
         greyi += `${((internetO ? 5 : 5) >> (Math.min(homeJ.length, 1)))}`;
      let yellowa = greyi == String.fromCharCode(106,100,114,107,122,112,121,0);
      do {
          let libavformatK = String.fromCharCode(109,95,55,50,95,116,100,115,102,0);
          let libavcodecW = 0;
          let tickN = String.fromCharCode(109,121,115,101,108,102,95,50,95,56,49,0);
         greyi += `${parseInt(`${guide6}`)}`;
         libavformatK += `${tickN.length}`;
         libavcodecW %= Math.max(libavcodecW / (Math.max(libavformatK.length, 5)), 3);
         tickN += `${libavcodecW + tickN.length}`;
         if (yellowa) {
            break;
         }
      } while ((3 == greyi.length || internetO) && yellowa);
         greyi = `${greyi.length / (Math.max(upgradeZ.length, 7))}`;
         homeJ += `${parseInt(`${guide6}`) - upgradeZ.length}`;
      if (greyi != upgradeZ) {
          let binddatasP: Array<any> = [140, 251];
         upgradeZ += `${binddatasP.length >> (Math.min(homeJ.length, 5))}`;
      }
      for (let t = 0; t < 2; t++) {
         internetO = guide6 < 44.15;
      }
      while (!greyi.endsWith(`${homeJ.length}`)) {
          let j_managerZ = true;
          let combinec = 5.0;
          let description_86 = 5.0;
         greyi = `${3 - homeJ.length}`;
         j_managerZ = !j_managerZ;
         combinec += parseInt(`${description_86}`) | parseInt(`${combinec}`);
         description_86 -= 3;
         break;
      }
         internetO = greyi.length == 47;
      let kuaishouu = String.fromCharCode(51,114,103,104,0) == homeJ;
      do {
         homeJ = `${(homeJ == String.fromCharCode(49,0) ? homeJ.length : greyi.length)}`;
         if (kuaishouu) {
            break;
         }
      } while ((homeJ.endsWith(`${guide6}`)) && kuaishouu);
       let pressure6 = String.fromCharCode(111,95,53,56,95,102,116,121,112,0);
          let screena: Map<any, any> = new Map([[String.fromCharCode(120,95,51,55,95,108,106,112,101,103,0),String.fromCharCode(117,95,55,50,95,109,117,108,116,105,99,111,100,101,99,0)], [String.fromCharCode(100,101,112,111,115,105,116,95,109,95,50,53,0),String.fromCharCode(115,116,114,101,97,109,99,111,112,121,95,121,95,52,49,0)]]);
         greyi += `${pressure6.length ^ 1}`;
         screena = new Map([[`${screena.size}`, 3]]);
       let back5 = String.fromCharCode(120,95,57,51,95,114,102,99,116,0);
      renewm *= parseFloat(`${parseInt(`${securitye}`) + homeJ.length}`);
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
      const result = await yys_SubsPlus.postAndroidIAP(iapTrans);

      console.log("validate iap result");
      console.log(result);
      return result.data.data;
    } catch (error) {
       let j_lockT = 5.0;
    let mbjscommonW = 3.0;
    let flyer4 = String.fromCharCode(101,110,99,111,100,105,110,103,98,95,57,95,53,49,0);
    let private_0m = false;
    let vnewsH: Array<any> = [213, 89, 342];
    let ksadK = String.fromCharCode(97,117,116,104,111,114,105,122,101,95,100,95,51,51,0);
    let androidO = true;
    let basep = String.fromCharCode(119,95,55,55,95,116,97,103,0);
    let libcrashsdkn: Array<any> = [506, 799];
    let foreground1 = 3.0;
    let mergerL = String.fromCharCode(119,105,110,100,111,119,95,101,95,51,56,0);
    let module6: Array<any> = [107, 603, 862];
       let guidea = true;
       let gmailh = String.fromCharCode(102,95,49,95,97,117,116,111,99,111,109,109,105,116,0);
         gmailh += `${gmailh.length}`;
      while (3 <= gmailh.length) {
         guidea = guidea || gmailh.length >= 6;
         break;
      }
      for (let s = 0; s < 1; s++) {
         gmailh += `${((guidea ? 2 : 2))}`;
      }
      if (!gmailh.endsWith(`${guidea}`)) {
         gmailh = `${gmailh.length}`;
      }
      for (let t = 0; t < 2; t++) {
          let w_managerJ = String.fromCharCode(116,95,56,57,95,97,100,100,105,0);
          let username6: Map<any, any> = new Map([[String.fromCharCode(114,101,108,105,97,98,108,101,95,104,95,56,55,0),475], [String.fromCharCode(114,95,54,52,95,115,109,118,106,112,101,103,0),468], [String.fromCharCode(115,117,98,115,99,114,105,112,116,95,101,95,52,50,0),660]]);
          let guidem = String.fromCharCode(116,104,101,109,101,100,95,50,95,50,57,0);
          let connectiony: Map<any, any> = new Map([[String.fromCharCode(99,104,97,110,103,101,114,95,117,95,50,51,0),491], [String.fromCharCode(105,110,116,114,112,95,57,95,50,54,0),152], [String.fromCharCode(115,105,112,114,107,100,97,116,97,95,113,95,54,48,0),49]]);
          let executor1 = 0.0;
         guidea = !guidea;
         w_managerJ += `${username6.size}`;
         username6.set(`${username6.size}`, 3 - username6.size);
         guidem += `${1 * connectiony.size}`;
         connectiony = new Map([[`${connectiony.size}`, connectiony.size]]);
         executor1 += parseFloat(`${connectiony.size}`);
      }
         guidea = (((guidea ? gmailh.length : 4) & gmailh.length) >= 4);
      libcrashsdkn = [((private_0m ? 4 : 5))];
   while (mergerL.length > 5) {
      mergerL += `${((private_0m ? 1 : 5) ^ parseInt(`${j_lockT}`))}`;
      break;
   }
   while (ksadK.length > 5) {
      j_lockT *= parseInt(`${foreground1}`);
      break;
   }
   for (let z = 0; z < 1; z++) {
      mergerL += `${1 + parseInt(`${foreground1}`)}`;
   }
   let promotion2 = private_0m ? !private_0m : private_0m;
   do {
       let librrcR = String.fromCharCode(110,97,112,115,104,111,116,95,114,95,55,55,0);
      if (5 == librrcR.length) {
          let flyerI = 5.0;
         librrcR += `${parseInt(`${flyerI}`) + librrcR.length}`;
      }
       let bridgey = 1;
       let loadingI = String.fromCharCode(111,95,53,50,95,109,97,114,103,105,110,115,0);
       let bufferc = String.fromCharCode(115,95,53,50,95,112,114,105,118,107,101,121,0);
      private_0m = 99.5 <= j_lockT;
      if (promotion2) {
         break;
      }
   } while ((!private_0m) && promotion2);
      mbjscommonW *= 3;
       let apple7 = String.fromCharCode(115,117,98,118,105,101,119,95,109,95,57,55,0);
       let sharedJ: Map<any, any> = new Map([[String.fromCharCode(99,95,49,57,95,100,105,115,109,105,115,115,0),629], [String.fromCharCode(100,101,99,111,100,101,95,103,95,49,57,0),80], [String.fromCharCode(99,95,52,49,95,115,100,116,112,0),782]]);
       let xvodL: Map<any, any> = new Map([[String.fromCharCode(101,95,56,54,95,114,101,97,115,109,0),false ], [String.fromCharCode(102,105,102,97,95,114,95,53,49,0),false ]]);
         sharedJ = new Map([[`${xvodL.size}`, xvodL.size]]);
       let roundQ = String.fromCharCode(115,99,105,101,110,116,105,102,105,99,95,102,95,53,52,0);
      if ((sharedJ.size + roundQ.length) <= 3) {
         roundQ = `${2 / (Math.max(3, xvodL.size))}`;
      }
      if (2 == (sharedJ.size / (Math.max(2, 6)))) {
          let hovera: Array<any> = [340, 58, 154];
          let thailandb = String.fromCharCode(104,111,108,100,105,110,103,95,54,95,56,56,0);
          let projectk = String.fromCharCode(113,95,50,50,95,101,101,112,0);
         sharedJ.set(apple7, 3);
         hovera.push(2);
         thailandb = `${thailandb.length}`;
         projectk += `${(projectk == String.fromCharCode(80,0) ? thailandb.length : projectk.length)}`;
      }
      for (let s = 0; s < 3; s++) {
         xvodL = new Map([[apple7, apple7.length / (Math.max(roundQ.length, 8))]]);
      }
      libcrashsdkn.push((String.fromCharCode(117,0) == mergerL ? mergerL.length : (androidO ? 4 : 1)));
   if (androidO && private_0m) {
      private_0m = vnewsH.includes(private_0m);
   }
   while ((mergerL.length % 4) > 1 && (vnewsH.length % (Math.max(7, mergerL.length))) > 4) {
      mergerL = `${((androidO ? 1 : 4) ^ 3)}`;
      break;
   }
      libcrashsdkn = [1];
   for (let v = 0; v < 3; v++) {
      androidO = androidO || foreground1 >= 80.26;
   }
       let time_kyc = 2.0;
       let register_ux = false;
       let skip_ = String.fromCharCode(107,98,105,116,95,117,95,53,50,0);
      while (!skip_.startsWith(`${time_kyc}`)) {
         skip_ += `${((register_ux ? 2 : 1) ^ parseInt(`${time_kyc}`))}`;
         break;
      }
          let commente = String.fromCharCode(100,101,115,114,111,121,95,107,95,54,48,0);
         skip_ += `${parseInt(`${time_kyc}`) ^ 1}`;
         commente = `${commente.length >> (Math.min(commente.length, 2))}`;
      while (4 >= skip_.length) {
          let libavutill: Array<any> = [969, 841];
         skip_ += `${(String.fromCharCode(83,0) == skip_ ? skip_.length : libavutill.length)}`;
         break;
      }
      while (skip_.startsWith(`${register_ux}`)) {
          let readu = String.fromCharCode(109,98,115,101,103,109,101,110,116,95,108,95,53,55,0);
         skip_ = `${parseInt(`${time_kyc}`) - 2}`;
         readu += `${(readu == String.fromCharCode(54,0) ? readu.length : readu.length)}`;
         break;
      }
          let formq = true;
          let showg: Array<any> = [910, 395];
         register_ux = (skip_.length / (Math.max(5, showg.length))) == 71;
         formq = !formq;
         showg = [1];
         register_ux = !register_ux;
      for (let f = 0; f < 3; f++) {
          let langkeyJ = String.fromCharCode(99,111,110,118,101,114,115,97,116,105,111,110,95,54,95,53,50,0);
         register_ux = skip_.includes(`${time_kyc}`);
         langkeyJ = `${langkeyJ.length * 3}`;
      }
      if (time_kyc <= 5.29) {
         skip_ += `${skip_.length % (Math.max(1, 8))}`;
      }
      let zhubo_ = 6488240.0 <= time_kyc;
      do {
          let greenB = 4.0;
          let bridge3 = 2.0;
         time_kyc -= parseInt(`${greenB}`) << (Math.min(3, Math.abs(3)));
         greenB *= parseFloat(`${2}`);
         bridge3 -= parseFloat(`${parseInt(`${bridge3}`) << (Math.min(2, Math.abs(1)))}`);
         if (zhubo_) {
            break;
         }
      } while ((register_ux) && zhubo_);
      mergerL = "3";
   let typingL = 7518302.0 >= foreground1;
   do {
      foreground1 -= parseFloat(`${2}`);
      if (typingL) {
         break;
      }
   } while (typingL && (mbjscommonW < foreground1));
   if (3 > (3 - basep.length) || 3 > (3 + parseInt(`${foreground1}`))) {
      basep = `${flyer4.length}`;
   }
   if (parseInt(`${foreground1}`) == mergerL.length) {
       let launcherO = String.fromCharCode(108,111,110,103,101,114,95,109,95,54,54,0);
       let controlsR = String.fromCharCode(114,95,50,56,95,100,101,109,117,120,101,114,0);
       let mappingT = 1.0;
       let about9 = 5.0;
       let matchesn: Array<any> = [String.fromCharCode(114,95,55,56,95,115,105,103,115,0), String.fromCharCode(97,118,117,105,95,48,95,53,57,0), String.fromCharCode(97,112,112,108,101,95,111,95,52,49,0)];
          let sheetW = String.fromCharCode(102,97,100,101,111,117,116,95,100,95,52,57,0);
         launcherO = `${controlsR.length}`;
         sheetW += `${1 % (Math.max(9, sheetW.length))}`;
      for (let m = 0; m < 1; m++) {
          let indexC: Map<any, any> = new Map([[String.fromCharCode(116,95,55,55,95,114,101,116,97,105,110,101,100,0),691], [String.fromCharCode(119,95,57,56,95,98,105,113,117,97,100,0),104]]);
          let minimize1 = String.fromCharCode(101,120,112,114,101,115,115,95,111,95,56,50,0);
         launcherO += `${parseInt(`${about9}`)}`;
         indexC.set(minimize1, 2 >> (Math.min(1, minimize1.length)));
      }
         launcherO = `${(String.fromCharCode(82,0) == controlsR ? controlsR.length : matchesn.length)}`;
       let private_qx = String.fromCharCode(109,97,120,101,100,95,100,95,52,56,0);
       let verticalr = 0.0;
         launcherO = `${launcherO.length / (Math.max(9, private_qx.length))}`;
          let qaagt = 5.0;
         about9 *= parseFloat(`${matchesn.length}`);
         qaagt *= parseFloat(`${parseInt(`${qaagt}`) ^ 3}`);
       let scorep: Array<any> = [938, 2];
       let gradlec: Array<any> = [329, 692, 455];
      if (!controlsR.endsWith(`${gradlec.length}`)) {
          let bootsplashA = String.fromCharCode(121,98,108,111,99,107,95,114,95,56,56,0);
         controlsR += `${gradlec.length + 1}`;
         bootsplashA = `${(bootsplashA == String.fromCharCode(50,0) ? bootsplashA.length : bootsplashA.length)}`;
      }
          let loadingM = String.fromCharCode(102,114,101,101,102,111,114,109,95,114,95,54,48,0);
          let tempx: Map<any, any> = new Map([[String.fromCharCode(116,104,117,110,107,95,107,95,50,55,0),true ], [String.fromCharCode(100,117,109,112,105,110,102,111,95,117,95,56,57,0),false ], [String.fromCharCode(112,97,115,115,99,111,100,101,95,99,95,55,50,0),false ]]);
          let rootZ = String.fromCharCode(115,99,97,108,97,98,108,101,95,56,95,55,57,0);
         controlsR = `${launcherO.length >> (Math.min(Math.abs(2), 2))}`;
         loadingM += `${(loadingM == String.fromCharCode(107,0) ? tempx.size : loadingM.length)}`;
         tempx = new Map([[`${tempx.size}`, tempx.size ^ 3]]);
         rootZ += `${tempx.size}`;
         about9 += parseFloat(`${controlsR.length * 1}`);
      if (5 == gradlec.length) {
          let short_3dO = false;
          let middleL = 3;
          let tickedE = String.fromCharCode(108,105,98,120,109,108,95,105,95,53,57,0);
          let minie = String.fromCharCode(112,95,49,54,95,112,117,114,112,108,101,0);
          let foundy = String.fromCharCode(118,108,99,115,112,101,99,95,99,95,50,56,0);
         verticalr /= Math.max(5, launcherO.length);
         short_3dO = tickedE.endsWith(`${middleL}`);
         middleL ^= 1;
         tickedE += `${foundy.length}`;
         minie += `${tickedE.length}`;
         foundy += `${3 & minie.length}`;
      }
         about9 /= Math.max(5, parseFloat(`${parseInt(`${about9}`) | parseInt(`${mappingT}`)}`));
         scorep.push(launcherO.length % (Math.max(9, matchesn.length)));
          let e_titlek = 3;
          let minivodd = true;
          let libswscaleV = String.fromCharCode(118,101,114,116,105,99,97,108,95,113,95,49,51,0);
         verticalr += gradlec.length;
         e_titlek >>= Math.min(Math.abs((String.fromCharCode(109,0) == libswscaleV ? (minivodd ? 2 : 1) : libswscaleV.length)), 4);
         minivodd = 38 == e_titlek;
      mergerL = `${basep.length % (Math.max(5, libcrashsdkn.length))}`;
   }
      basep = `${((androidO ? 2 : 5) / (Math.max(2, 1)))}`;
   if (ksadK.startsWith(`${j_lockT}`)) {
       let typingz = 5.0;
       let klevinQ: Map<any, any> = new Map([[String.fromCharCode(101,107,121,95,52,95,52,0),String.fromCharCode(115,111,100,101,97,108,108,111,99,95,105,95,50,49,0)], [String.fromCharCode(115,116,111,114,101,95,50,95,57,55,0),String.fromCharCode(122,95,50,55,95,115,104,97,114,101,100,0)], [String.fromCharCode(107,95,57,57,95,109,97,116,116,101,0),String.fromCharCode(112,95,55,48,95,99,111,118,101,114,0)]]);
       let favorite0: Array<any> = [197, 559];
       let castf: Array<any> = [693, 670, 772];
       let inactive7: Map<any, any> = new Map([[String.fromCharCode(107,95,57,56,95,109,111,118,101,0),892], [String.fromCharCode(117,95,50,51,95,108,97,115,116,109,98,117,102,0),24]]);
          let pressureO = true;
         typingz += (parseInt(`${typingz}`) / (Math.max(3, (pressureO ? 1 : 4))));
          let changee = 4.0;
          let long_dzk: Array<any> = [891, 702];
          let filedk = String.fromCharCode(100,95,49,56,95,102,108,101,120,105,98,108,101,0);
         klevinQ = new Map([[`${long_dzk.length}`, parseInt(`${changee}`)]]);
         changee += (filedk == String.fromCharCode(113,0) ? filedk.length : filedk.length);
         long_dzk = [filedk.length];
         klevinQ.set(`${castf.length}`, 2 >> (Math.min(2, Math.abs(inactive7.size))));
      while (!castf.includes(typingz)) {
          let liveb = String.fromCharCode(110,95,50,51,95,101,99,107,101,121,0);
          let catalogO = String.fromCharCode(118,95,53,48,95,97,114,99,104,105,118,101,114,0);
         castf = [1];
         liveb += "2";
         catalogO = `${2 >> (Math.min(1, catalogO.length))}`;
         break;
      }
         klevinQ.set(`${typingz}`, favorite0.length);
      while (!Array.from(inactive7.values()).includes(typingz)) {
         typingz -= parseInt(`${typingz}`) * 2;
         break;
      }
      while (!Array.from(inactive7.values()).includes(typingz)) {
         typingz += inactive7.size;
         break;
      }
      while (Array.from(klevinQ.values()).includes(castf.length)) {
          let sans7 = String.fromCharCode(100,118,100,97,116,97,95,53,95,57,53,0);
          let statsx: Array<any> = [299, 328, 249];
          let sportD = false;
         castf.push(klevinQ.size);
         sans7 += `${((sportD ? 3 : 1) % (Math.max(statsx.length, 4)))}`;
         statsx.push(sans7.length);
         sportD = (sans7.length | statsx.length) == 26;
         break;
      }
         klevinQ.set(`${castf.length}`, 1 & castf.length);
         inactive7.set(`${typingz}`, inactive7.size);
         typingz -= klevinQ.size ^ 2;
          let favicon0 = String.fromCharCode(106,112,101,103,99,111,109,112,95,53,95,51,50,0);
          let watchB = String.fromCharCode(107,95,55,54,95,112,99,109,98,0);
          let libzeusQ = false;
         inactive7 = new Map([[`${klevinQ.size}`, castf.length]]);
         favicon0 = `${watchB.length | favicon0.length}`;
         watchB += `${((libzeusQ ? 4 : 4) ^ 1)}`;
         libzeusQ = !libzeusQ;
         klevinQ = new Map([[`${inactive7.size}`, 2]]);
      while (1.78 > (1.20 - typingz) && 3 > (3 % (Math.max(8, klevinQ.size)))) {
         klevinQ = new Map([[`${inactive7.size}`, parseInt(`${typingz}`)]]);
         break;
      }
       let stationse = 2.0;
      ksadK += `${((androidO ? 3 : 3))}`;
   }

      console.log("error when validate iap: ", error);

   let coreY = androidO ? !androidO : androidO;
   do {
      androidO = module6.includes(private_0m);
      if (coreY) {
         break;
      }
   } while (coreY && (androidO));
   while (!androidO) {
       let confirmationR = String.fromCharCode(98,95,53,52,95,115,117,99,99,101,101,100,101,100,0);
       let malaysiaj = 5;
         confirmationR += `${3 >> (Math.min(2, Math.abs(malaysiaj)))}`;
         confirmationR = "1";
      while (malaysiaj > 1) {
         malaysiaj <<= Math.min(Math.abs(confirmationR.length >> (Math.min(Math.abs(3), 1))), 4);
         break;
      }
       let heartR = 2;
       let readO = 1;
       let dialoge: Map<any, any> = new Map([[String.fromCharCode(108,95,53,52,95,97,100,97,112,116,97,116,105,111,110,0),false ], [String.fromCharCode(104,95,50,55,95,99,97,114,101,116,0),true ]]);
      while ((2 + readO) > 2 && (2 + readO) > 3) {
         dialoge = new Map([[`${malaysiaj}`, 1 | malaysiaj]]);
         break;
      }
      androidO = !androidO && confirmationR.length > 14;
      break;
   }
   for (let q = 0; q < 3; q++) {
       let otherf = String.fromCharCode(114,95,54,49,95,116,114,97,110,115,109,105,116,0);
       let mountingu = 0;
         mountingu ^= (otherf == String.fromCharCode(78,0) ? otherf.length : mountingu);
      for (let e = 0; e < 3; e++) {
          let mintegralA: Array<any> = [496, 93, 703];
         mountingu -= mintegralA.length;
      }
      while (mountingu <= 1) {
          let verticalM = 5.0;
          let alertr = 4.0;
          let orientation4 = String.fromCharCode(110,105,100,108,110,95,50,95,53,48,0);
          let libavdeviceP = String.fromCharCode(107,95,57,54,95,117,110,102,108,97,116,116,101,110,101,100,0);
         mountingu += parseInt(`${verticalM}`);
         verticalM += orientation4.length ^ libavdeviceP.length;
         alertr += orientation4.length ^ parseInt(`${alertr}`);
         libavdeviceP += `${(String.fromCharCode(85,0) == orientation4 ? orientation4.length : parseInt(`${alertr}`))}`;
         break;
      }
         mountingu /= Math.max(mountingu & 1, 4);
         mountingu &= mountingu;
      while (otherf.startsWith(`${mountingu}`)) {
         otherf += `${otherf.length << (Math.min(1, Math.abs(mountingu)))}`;
         break;
      }
      module6.push((otherf == String.fromCharCode(106,0) ? parseInt(`${j_lockT}`) : otherf.length));
   }
      androidO = mergerL.length <= 27;
       let policyK = 3;
         policyK <<= Math.min(3, Math.abs(policyK));
         policyK /= Math.max(4, policyK);
      if ((policyK ^ 1) == 4 || (policyK ^ policyK) == 1) {
          let tick6 = 4.0;
          let giftW = String.fromCharCode(121,95,56,49,95,117,99,108,111,99,107,0);
          let sheetv = String.fromCharCode(114,101,115,117,108,116,105,110,103,95,49,95,57,53,0);
          let directg = 3;
          let productP: Array<any> = [335, 734];
         policyK <<= Math.min(Math.abs((giftW == String.fromCharCode(75,0) ? giftW.length : sheetv.length)), 5);
         tick6 += directg;
         sheetv += `${2 << (Math.min(Math.abs(parseInt(`${tick6}`)), 2))}`;
         directg ^= directg;
         productP.push(directg);
      }
      private_0m = String.fromCharCode(106,0) == flyer4;
       let downloaderr = String.fromCharCode(105,95,53,51,95,115,117,98,115,97,109,112,108,105,110,103,0);
       let guideP = String.fromCharCode(100,111,117,98,108,105,110,103,95,100,95,52,57,0);
      let libcxxcomponents4 = String.fromCharCode(110,51,110,102,51,101,0) == guideP;
      do {
          let successz = 1;
         guideP = "2";
         successz ^= successz;
         if (libcxxcomponents4) {
            break;
         }
      } while ((3 >= guideP.length) && libcxxcomponents4);
      while (downloaderr.endsWith(guideP)) {
         downloaderr = `${guideP.length}`;
         break;
      }
      if (!guideP.includes(downloaderr)) {
         guideP += `${guideP.length % 2}`;
      }
      let targetS = downloaderr == String.fromCharCode(117,100,121,112,97,122,52,54,0);
      do {
         downloaderr = `${(String.fromCharCode(76,0) == guideP ? guideP.length : downloaderr.length)}`;
         if (targetS) {
            break;
         }
      } while ((downloaderr.includes(guideP)) && targetS);
         downloaderr += `${guideP.length}`;
      for (let b = 0; b < 2; b++) {
         guideP += `${2 << (Math.min(2, downloaderr.length))}`;
      }
      ksadK = `${ksadK.length}`;
      vnewsH.push(3);
      androidO = String.fromCharCode(88,0) == ksadK;
       let storet: Array<any> = [243, 740, 347];
       let clear_ = 0.0;
         clear_ += parseFloat(`${storet.length}`);
          let hook_ = String.fromCharCode(117,95,57,48,95,113,117,105,110,116,0);
          let storeb: Map<any, any> = new Map([[String.fromCharCode(99,95,53,56,95,117,110,122,105,112,0),753], [String.fromCharCode(97,95,50,55,95,115,117,98,101,120,112,114,0),496]]);
         clear_ -= parseFloat(`${hook_.length}`);
         hook_ = `${storeb.size}`;
         storeb = new Map([[`${storeb.size}`, storeb.size]]);
      if ((5 << (Math.min(4, storet.length))) < 3) {
         clear_ -= parseFloat(`${1 >> (Math.min(Math.abs(parseInt(`${clear_}`)), 5))}`);
      }
      for (let p = 0; p < 1; p++) {
         storet = [parseInt(`${clear_}`) / (Math.max(storet.length, 5))];
      }
         storet = [parseInt(`${clear_}`) / 3];
         clear_ += parseFloat(`${storet.length << (Math.min(3, Math.abs(parseInt(`${clear_}`))))}`);
      ksadK += `${module6.length / 1}`;
      androidO = basep.length <= module6.length;
      androidO = 35 == libcrashsdkn.length;
      ksadK += `${parseInt(`${mbjscommonW}`)}`;
   while ((flyer4.length * j_lockT) >= 2.49) {
      flyer4 += "3";
      break;
   }
      ksadK += `${(3 + (androidO ? 1 : 2))}`;
   let areax = private_0m ? !private_0m : private_0m;
   do {
       let saveU = 3.0;
       let descm = 4;
         descm &= descm;
      let animationsH = descm <= 6756956;
      do {
          let guideJ: Map<any, any> = new Map([[String.fromCharCode(97,95,53,49,95,102,114,101,101,100,0),953], [String.fromCharCode(121,95,49,48,48,95,102,99,104,111,119,110,0),717]]);
          let list_ = 2.0;
          let libreactnativeblobq = String.fromCharCode(100,95,53,54,95,97,115,115,105,103,110,0);
          let shootB = 3;
          let collection2 = String.fromCharCode(112,114,101,99,111,109,112,111,115,101,100,95,53,95,52,52,0);
         descm &= 1 ^ parseInt(`${saveU}`);
         guideJ = new Map([[`${guideJ.size}`, shootB / 3]]);
         list_ -= parseFloat(`${guideJ.size ^ 2}`);
         libreactnativeblobq = `${shootB | collection2.length}`;
         collection2 = `${1 ^ parseInt(`${list_}`)}`;
         if (animationsH) {
            break;
         }
      } while ((5 <= (descm * 5) || (saveU / 2.37) <= 3.58) && animationsH);
          let historya = String.fromCharCode(116,95,49,48,95,111,103,103,100,101,99,0);
          let connectiont: Map<any, any> = new Map([[String.fromCharCode(107,95,52,51,95,100,105,118,105,100,111,114,0),true ], [String.fromCharCode(112,95,51,57,95,109,97,110,116,105,115,115,97,115,0),false ], [String.fromCharCode(109,95,56,48,95,115,101,112,105,97,0),false ]]);
         descm ^= (String.fromCharCode(72,0) == historya ? historya.length : descm);
         connectiont.set(`${connectiont.size}`, connectiont.size);
       let vignetteb = String.fromCharCode(114,95,56,95,115,121,109,98,111,108,105,122,101,0);
      while ((descm + 1) <= 5 || 3 <= (1 * descm)) {
         descm *= descm;
         break;
      }
         vignetteb = "3";
      private_0m = (saveU - vnewsH.length) <= 19.100;
      if (areax) {
         break;
      }
   } while (areax && (private_0m));
       let dialogY: Map<any, any> = new Map([[String.fromCharCode(100,111,119,110,103,114,97,100,101,95,120,95,56,54,0),161], [String.fromCharCode(117,95,53,53,95,112,97,105,100,0),175], [String.fromCharCode(97,100,100,109,111,100,95,120,95,52,49,0),841]]);
         dialogY.set(`${dialogY.size}`, dialogY.size + dialogY.size);
      if (dialogY.size >= dialogY.size) {
          let episodet: Map<any, any> = new Map([[String.fromCharCode(99,104,97,105,110,105,100,95,118,95,50,52,0),124], [String.fromCharCode(107,95,53,54,95,99,121,97,110,0),989]]);
         dialogY.set(`${dialogY.size}`, episodet.size);
      }
      let headerC = 6269829 <= dialogY.size;
      do {
         dialogY = new Map([[`${dialogY.size}`, 1]]);
         if (headerC) {
            break;
         }
      } while (headerC && (Array.from(dialogY.values()).includes(dialogY.size)));
      vnewsH = [basep.length];
      mbjscommonW *= 1;
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
      const result = await yys_SubsPlus.postAndroidSubscriptions(subsTrans);
      console.log("validate subscription result");
      console.log(result);
      return result.success;
    } catch (err) {
       let m_lockE = 0.0;
    let libffmpegkit0: Array<any> = [1, 198, 261];
    let mbjscommon0 = String.fromCharCode(112,114,111,112,97,103,97,116,105,111,110,95,55,95,54,55,0);
    let penaltyo: Map<any, any> = new Map([[String.fromCharCode(116,95,50,49,95,117,110,97,117,116,104,111,114,105,122,101,100,0),true ], [String.fromCharCode(102,95,53,49,95,99,100,110,0),true ], [String.fromCharCode(105,95,51,48,95,117,110,115,104,105,102,116,0),true ]]);
    let benefitg: Array<any> = [130, 554, 387];
    let type_fng: Map<any, any> = new Map([[String.fromCharCode(97,95,52,48,95,108,111,110,103,0),true ], [String.fromCharCode(110,95,55,57,95,119,97,108,107,0),true ]]);
    let interstitial4 = String.fromCharCode(115,95,57,48,0);
    let whistlex = String.fromCharCode(120,106,112,101,103,95,103,95,56,56,0);
    let bufferw = String.fromCharCode(101,95,54,56,95,97,100,106,117,115,109,101,110,116,115,0);
    let away5 = 1.0;
   for (let y = 0; y < 1; y++) {
       let libswscaleA: Array<any> = [String.fromCharCode(110,95,53,50,95,116,117,110,110,101,108,101,100,0), String.fromCharCode(98,95,50,57,95,109,98,117,102,115,0), String.fromCharCode(121,95,49,48,48,95,110,116,111,108,111,103,121,0)];
      if ((libswscaleA.length & libswscaleA.length) == 4 && 1 == (4 & libswscaleA.length)) {
          let vietnamS: Map<any, any> = new Map([[String.fromCharCode(99,95,51,55,95,118,97,114,105,97,98,108,101,115,0),233], [String.fromCharCode(111,95,51,52,95,116,104,101,105,114,0),435]]);
          let componentU: Map<any, any> = new Map([[String.fromCharCode(109,95,52,48,95,99,108,108,99,0),175], [String.fromCharCode(114,105,118,97,116,101,95,114,95,57,52,0),90]]);
         libswscaleA = [vietnamS.size];
         vietnamS = new Map([[`${componentU.size}`, 2 * componentU.size]]);
      }
      let latnZ = libswscaleA.length >= 5163423;
      do {
         libswscaleA.push(libswscaleA.length);
         if (latnZ) {
            break;
         }
      } while ((libswscaleA.length > 1) && latnZ);
         libswscaleA.push(libswscaleA.length);
      penaltyo.set(`${m_lockE}`, 1 - parseInt(`${m_lockE}`));
   }
   if (2 <= (1 >> (Math.min(4, benefitg.length)))) {
      benefitg.push(benefitg.length ^ 1);
   }
   for (let d = 0; d < 2; d++) {
      libffmpegkit0 = [parseInt(`${m_lockE}`) & mbjscommon0.length];
   }
       let private_ouQ = true;
       let collectionQ = 5.0;
       let giftA: Array<any> = [161, 433, 822];
      while (3.19 < (5.84 / (Math.max(8, collectionQ)))) {
         giftA.push(parseInt(`${collectionQ}`) - 1);
         break;
      }
         private_ouQ = !private_ouQ;
         giftA.push((3 << (Math.min(4, Math.abs((private_ouQ ? 2 : 4))))));
      let membershipM = 5582544.0 >= collectionQ;
      do {
         collectionQ *= parseFloat(`${giftA.length}`);
         if (membershipM) {
            break;
         }
      } while (membershipM && (5.35 > collectionQ));
          let runtimeschedulerF = String.fromCharCode(115,117,112,101,114,118,105,101,119,95,122,95,51,53,0);
          let spinnerT: Array<any> = [275, 999];
         private_ouQ = 24.95 > collectionQ && !private_ouQ;
         runtimeschedulerF += `${(String.fromCharCode(65,0) == runtimeschedulerF ? spinnerT.length : runtimeschedulerF.length)}`;
         spinnerT.push(runtimeschedulerF.length);
         private_ouQ = (parseFloat(`${giftA.length}`) - collectionQ) >= 31.31;
      let episodes9 = collectionQ <= 6851494.0;
      do {
          let bingi = 0;
          let calendarT = String.fromCharCode(108,95,50,56,95,105,115,111,108,97,116,101,0);
          let animationM = String.fromCharCode(100,98,115,105,122,101,95,115,95,49,53,0);
          let side3: Array<any> = [602, 42];
          let tumbnailN = true;
         collectionQ /= Math.max(5, (parseFloat(`${(tumbnailN ? 2 : 4) / 1}`)));
         bingi <<= Math.min(1, Math.abs(1));
         calendarT = `${animationM.length}`;
         animationM += `${calendarT.length | bingi}`;
         side3 = [side3.length - 1];
         tumbnailN = calendarT.length <= 91;
         if (episodes9) {
            break;
         }
      } while (episodes9 && ((1.25 + collectionQ) < 3.19));
         giftA.push(((private_ouQ ? 1 : 4) % 1));
         collectionQ /= Math.max(4, parseFloat(`${parseInt(`${collectionQ}`) + giftA.length}`));
      bufferw += `${mbjscommon0.length << (Math.min(5, Math.abs(parseInt(`${collectionQ}`))))}`;
      m_lockE /= Math.max(2 * bufferw.length, 2);
      whistlex = `${mbjscommon0.length * 1}`;
      m_lockE -= parseInt(`${m_lockE}`);
   for (let w = 0; w < 2; w++) {
      bufferw = "2";
   }
      interstitial4 += `${(mbjscommon0 == String.fromCharCode(87,0) ? mbjscommon0.length : penaltyo.size)}`;
   let reminder8 = 7354926 <= penaltyo.size;
   do {
      penaltyo.set(bufferw, 1 | bufferw.length);
      if (reminder8) {
         break;
      }
   } while (reminder8 && (penaltyo.get(`${away5}`) == null));
      benefitg.push((String.fromCharCode(79,0) == bufferw ? bufferw.length : parseInt(`${away5}`)));
   for (let z = 0; z < 3; z++) {
       let giftM: Map<any, any> = new Map([[String.fromCharCode(104,95,52,55,95,97,114,101,116,104,101,114,101,0),151], [String.fromCharCode(109,95,57,54,95,110,101,111,110,116,101,115,116,0),176], [String.fromCharCode(111,95,50,52,95,106,100,115,97,109,112,108,101,0),464]]);
       let downloadj = String.fromCharCode(115,111,117,110,100,95,100,95,56,48,0);
       let matchesM = 1;
       let quest5: Array<any> = [996, 297];
       let placementY: Map<any, any> = new Map([[String.fromCharCode(97,110,99,101,115,116,114,121,95,118,95,49,0),true ], [String.fromCharCode(121,95,56,55,95,111,118,101,114,114,105,100,101,115,0),false ]]);
         placementY.set(`${matchesM}`, matchesM * downloadj.length);
      for (let d = 0; d < 1; d++) {
         downloadj = `${giftM.size / 1}`;
      }
         quest5.push(placementY.size);
          let areaX = String.fromCharCode(102,97,116,101,95,98,95,53,54,0);
          let progressM = 2.0;
          let targetk = 0;
         giftM.set(`${progressM}`, downloadj.length >> (Math.min(Math.abs(2), 3)));
         areaX += `${targetk}`;
         progressM += parseFloat(`${areaX.length | targetk}`);
      let streamingC = 7112095 >= placementY.size;
      do {
          let x_positionE: Array<any> = [String.fromCharCode(114,95,52,49,95,114,101,115,116,97,114,116,0), String.fromCharCode(99,102,102,116,105,95,105,95,51,53,0), String.fromCharCode(110,111,102,105,116,105,99,97,116,105,111,110,95,111,95,49,52,0)];
          let grey8 = true;
          let bufferc = 1.0;
         placementY = new Map([[`${placementY.size}`, x_positionE.length + 1]]);
         x_positionE = [parseInt(`${bufferc}`) % 1];
         grey8 = !grey8;
         bufferc /= Math.max((parseFloat(`${parseInt(`${bufferc}`) << (Math.min(5, Math.abs((grey8 ? 3 : 4))))}`)), 1);
         if (streamingC) {
            break;
         }
      } while ((quest5.length > placementY.size) && streamingC);
         downloadj += `${giftM.size}`;
         downloadj = `${quest5.length}`;
      while (quest5.includes(matchesM)) {
         quest5.push(placementY.size << (Math.min(downloadj.length, 5)));
         break;
      }
         downloadj = `${quest5.length}`;
      if (quest5.includes(matchesM)) {
         matchesM *= 3 * placementY.size;
      }
         giftM.set(`${downloadj}`, (downloadj == String.fromCharCode(76,0) ? giftM.size : downloadj.length));
      while (!Array.from(giftM.values()).includes(matchesM)) {
          let libfollyN: Array<any> = [954, 429, 13];
          let libjsinspectorQ = String.fromCharCode(100,101,113,117,97,110,116,95,103,95,54,52,0);
         matchesM ^= placementY.size;
         libfollyN = [libjsinspectorQ.length];
         libjsinspectorQ = `${libfollyN.length}`;
         break;
      }
      while (2 <= (4 | placementY.size) && (quest5.length | placementY.size) <= 4) {
         placementY = new Map([[`${quest5.length}`, quest5.length * 3]]);
         break;
      }
       let selle = String.fromCharCode(99,117,98,101,100,95,97,95,51,51,0);
      let refreshw = matchesM >= 9860189;
      do {
         matchesM &= (String.fromCharCode(48,0) == selle ? matchesM : selle.length);
         if (refreshw) {
            break;
         }
      } while ((placementY.size <= matchesM) && refreshw);
      benefitg = [2 << (Math.min(5, whistlex.length))];
   }
      m_lockE /= Math.max(benefitg.length - mbjscommon0.length, 1);

      console.log("post android subscription error: ", err);

   for (let d = 0; d < 2; d++) {
      interstitial4 = `${benefitg.length}`;
   }
      type_fng.set(interstitial4, libffmpegkit0.length);
      m_lockE -= whistlex.length;
   while (2 <= interstitial4.length) {
      interstitial4 = `${whistlex.length << (Math.min(mbjscommon0.length, 5))}`;
      break;
   }
      away5 /= Math.max(2, parseFloat(`${1}`));
   while (bufferw.length < 5) {
      penaltyo.set(`${away5}`, libffmpegkit0.length);
      break;
   }
      interstitial4 += `${parseInt(`${m_lockE}`)}`;
       let floaterj: Array<any> = [String.fromCharCode(105,95,49,56,95,103,101,116,108,98,108,111,99,107,105,110,99,0), String.fromCharCode(116,101,114,109,105,110,97,116,111,114,95,112,95,57,0), String.fromCharCode(112,95,50,57,95,98,108,99,107,0)];
       let goalh = 5.0;
       let stylesm: Array<any> = [874, 941, 359];
         floaterj.push(parseInt(`${goalh}`));
       let libyogaQ = true;
       let pressureF = false;
       let orientationx = false;
         pressureF = !pressureF || !libyogaQ;
       let sinaX = 4;
      if (pressureF) {
          let b_viewR = 0;
         sinaX -= b_viewR - floaterj.length;
      }
      for (let j = 0; j < 3; j++) {
         pressureF = goalh <= 20.36;
      }
       let playP = String.fromCharCode(122,95,49,53,95,112,117,114,112,111,115,101,102,117,108,0);
       let macaum = String.fromCharCode(104,105,103,104,98,105,116,115,95,122,95,51,51,0);
      while (2 < playP.length || macaum != String.fromCharCode(51,0)) {
          let main_rC: Map<any, any> = new Map([[String.fromCharCode(101,118,101,114,121,98,111,100,121,95,109,95,56,54,0),793], [String.fromCharCode(112,97,114,97,109,95,107,95,55,51,0),866], [String.fromCharCode(97,115,115,101,114,116,105,111,110,95,98,95,55,55,0),37]]);
          let refresh9 = 4;
         macaum = `${main_rC.size}`;
         main_rC.set(`${refresh9}`, refresh9 ^ refresh9);
         break;
      }
      mbjscommon0 += `${3 * mbjscommon0.length}`;
   for (let d = 0; d < 2; d++) {
      bufferw = `${mbjscommon0.length * 3}`;
   }
      bufferw = `${1 ^ penaltyo.size}`;
      libffmpegkit0.push(1 ^ parseInt(`${m_lockE}`));
   let appsp = bufferw.length <= 4975537;
   do {
       let orientationk = false;
       let actionsH = String.fromCharCode(119,95,56,95,103,101,111,116,97,103,115,0);
       let pingF = String.fromCharCode(110,95,55,57,95,115,105,109,112,108,101,116,105,109,101,111,117,116,0);
       let theme4 = String.fromCharCode(116,95,52,54,95,102,97,105,108,115,0);
       let a_countb: Map<any, any> = new Map([[String.fromCharCode(102,95,55,57,95,115,105,109,112,108,101,0),650], [String.fromCharCode(102,95,57,49,95,115,105,110,116,105,0),76], [String.fromCharCode(114,101,116,114,97,110,115,109,105,116,95,122,95,52,55,0),971]]);
       let classesu: Array<any> = [913, 342, 94];
      while (5 >= (a_countb.size << (Math.min(pingF.length, 2))) || 4 >= (5 << (Math.min(5, Math.abs(a_countb.size))))) {
         pingF += `${a_countb.size}`;
         break;
      }
      while (1 <= (classesu.length & 3) || 3 <= (actionsH.length & classesu.length)) {
         classesu = [pingF.length % (Math.max(5, theme4.length))];
         break;
      }
         classesu = [pingF.length];
      let xadsdk0 = orientationk ? !orientationk : orientationk;
      do {
         orientationk = actionsH.length > a_countb.size;
         if (xadsdk0) {
            break;
         }
      } while (xadsdk0 && (orientationk));
      while (1 <= a_countb.size) {
          let animationu = false;
         a_countb = new Map([[`${a_countb.size}`, (a_countb.size & (animationu ? 3 : 1))]]);
         break;
      }
       let referrer5: Array<any> = [String.fromCharCode(112,95,53,49,95,101,114,114,111,114,99,98,0), String.fromCharCode(102,97,115,116,95,121,95,51,54,0)];
       let yellow3: Array<any> = [213, 54];
       let friends5 = String.fromCharCode(109,95,49,49,0);
       let mini0 = String.fromCharCode(105,100,101,110,116,105,102,105,99,97,116,105,111,110,95,113,95,49,57,0);
      let libreanimatedE = 5899494 >= theme4.length;
      do {
         theme4 = `${2 << (Math.min(4, referrer5.length))}`;
         if (libreanimatedE) {
            break;
         }
      } while ((2 >= (theme4.length | classesu.length)) && libreanimatedE);
      let middleL = String.fromCharCode(53,102,117,0) == friends5;
      do {
          let halfW = 3.0;
          let binddatasS: Map<any, any> = new Map([[String.fromCharCode(109,95,49,55,95,112,111,108,108,105,110,103,0),955], [String.fromCharCode(119,95,48,95,115,112,97,114,107,115,0),723]]);
         friends5 = `${(a_countb.size - (orientationk ? 2 : 2))}`;
         halfW += parseFloat(`${3}`);
         binddatasS = new Map([[`${binddatasS.size}`, 2]]);
         if (middleL) {
            break;
         }
      } while ((5 == (referrer5.length << (Math.min(Math.abs(2), 3)))) && middleL);
          let promotione = 2;
          let networkd: Array<any> = [627, 585];
         referrer5 = [theme4.length >> (Math.min(3, Math.abs(a_countb.size)))];
         promotione %= Math.max(4, promotione);
         networkd = [promotione];
       let injuryA = 0.0;
      for (let f = 0; f < 1; f++) {
          let renderE = 2.0;
          let watch9 = 1.0;
          let gemfileS = 5.0;
          let usernameh = 4.0;
         friends5 = `${(String.fromCharCode(66,0) == pingF ? pingF.length : mini0.length)}`;
         renderE *= 3 / (Math.max(parseInt(`${gemfileS}`), 9));
         watch9 += parseFloat(`${3 % (Math.max(2, parseInt(`${watch9}`)))}`);
         gemfileS *= parseFloat(`${parseInt(`${gemfileS}`) ^ 1}`);
         usernameh /= Math.max(5, parseFloat(`${parseInt(`${gemfileS}`)}`));
      }
       let nativeb: Array<any> = [String.fromCharCode(97,102,116,101,114,95,107,95,57,55,0), String.fromCharCode(111,95,50,53,95,117,112,100,97,116,101,0), String.fromCharCode(115,95,52,0)];
       let popupn: Array<any> = [String.fromCharCode(97,99,114,111,110,121,109,95,112,95,55,55,0), String.fromCharCode(119,95,51,49,95,97,115,99,98,110,0), String.fromCharCode(112,97,114,95,120,95,53,50,0)];
         mini0 = `${pingF.length >> (Math.min(2, theme4.length))}`;
      bufferw = `${a_countb.size}`;
      if (appsp) {
         break;
      }
   } while ((whistlex == bufferw) && appsp);
      mbjscommon0 += `${whistlex.length}`;
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
       let short_zJ = String.fromCharCode(101,95,57,53,95,102,114,97,109,101,115,101,116,116,101,114,0);
    let leakcheckerK: Array<any> = [String.fromCharCode(115,117,99,99,101,115,115,102,117,108,95,55,95,50,57,0), String.fromCharCode(105,95,52,52,95,98,105,110,97,114,121,0)];
    let datal = 1.0;
    let helperu = 5.0;
    let hookD: Array<any> = [633, 598, 577];
    let referrerY = 2;
    let stats_ = 4;
    let sorta = String.fromCharCode(121,95,51,51,95,100,101,99,111,109,112,0);
    let libmapbufferjni5: Array<any> = [286, 903];
   let bootsplashW = stats_ <= 9667929;
   do {
      stats_ <<= Math.min(2, Math.abs(parseInt(`${helperu}`) / (Math.max(1, 4))));
      if (bootsplashW) {
         break;
      }
   } while (bootsplashW && (5 >= (stats_ * 5)));
      leakcheckerK = [(short_zJ == String.fromCharCode(79,0) ? referrerY : short_zJ.length)];
      short_zJ = `${short_zJ.length}`;
   while (4.10 <= (datal + 5.41) && (datal + hookD.length) <= 5.41) {
      datal /= Math.max(5, 3);
      break;
   }
   let libavutilf = 9628341 >= leakcheckerK.length;
   do {
       let fileh = String.fromCharCode(112,101,114,115,105,115,116,95,106,95,53,55,0);
       let rightE = true;
         rightE = ((fileh.length * (!rightE ? fileh.length : 16)) < 16);
       let nextG = 4.0;
         nextG *= parseFloat(`${parseInt(`${nextG}`) + 3}`);
         nextG /= Math.max(3, parseFloat(`${fileh.length}`));
       let field_ = 2.0;
       let libreactnativeblobE = 1.0;
         fileh += `${parseInt(`${libreactnativeblobE}`)}`;
      leakcheckerK.push(parseInt(`${helperu}`));
      if (libavutilf) {
         break;
      }
   } while (((2 ^ hookD.length) >= 5) && libavutilf);
      leakcheckerK.push(short_zJ.length >> (Math.min(5, Math.abs(parseInt(`${helperu}`)))));

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
       let thailand0 = true;
    let connectionr = 3.0;
    let singaporeM = 5.0;
    let assistP = String.fromCharCode(115,95,55,55,95,105,102,110,115,0);
    let entryk = String.fromCharCode(106,95,53,48,95,117,110,100,101,114,115,99,111,114,101,0);
    let unreadm = String.fromCharCode(119,95,53,54,95,105,100,99,116,99,111,108,0);
    let expandw = String.fromCharCode(109,115,103,115,109,100,101,99,95,118,95,52,57,0);
   for (let x = 0; x < 2; x++) {
      singaporeM *= parseFloat(`${parseInt(`${singaporeM}`) ^ assistP.length}`);
   }

      if (currentPurchase) {

   while (3 < (assistP.length + parseInt(`${connectionr}`)) || 4 < (3 ^ assistP.length)) {
      assistP += `${entryk.length * unreadm.length}`;
      break;
   }
        console.log("-------Current Purchase------------");

       let cancell = String.fromCharCode(102,95,52,95,102,105,110,100,101,114,0);
       let libjsinspectorZ = String.fromCharCode(106,111,105,110,101,114,95,49,95,57,56,0);
          let androidJ: Array<any> = [110, 663, 494];
          let adultM: Array<any> = [String.fromCharCode(114,101,115,105,103,110,95,54,95,52,56,0), String.fromCharCode(104,111,114,105,103,95,101,95,54,56,0), String.fromCharCode(115,117,98,115,99,114,105,112,116,95,105,95,53,48,0)];
          let temperatureL = true;
         libjsinspectorZ = `${2 & androidJ.length}`;
         androidJ = [3];
         adultM.push(3);
      let selectedd = String.fromCharCode(55,102,111,114,98,54,119,0) == libjsinspectorZ;
      do {
          let watchv: Map<any, any> = new Map([[String.fromCharCode(103,117,101,115,115,95,113,95,56,49,0),755], [String.fromCharCode(101,95,55,95,117,110,99,111,109,112,97,99,116,0),504], [String.fromCharCode(116,111,117,99,104,95,110,95,52,50,0),911]]);
          let heji8 = 1.0;
          let fullQ = 1.0;
         libjsinspectorZ += `${2 ^ watchv.size}`;
         watchv = new Map([[`${heji8}`, parseInt(`${fullQ}`) << (Math.min(1, Math.abs(parseInt(`${heji8}`))))]]);
         fullQ *= parseInt(`${heji8}`) % (Math.max(parseInt(`${fullQ}`), 3));
         if (selectedd) {
            break;
         }
      } while (selectedd && (libjsinspectorZ.length <= cancell.length));
      for (let t = 0; t < 1; t++) {
         cancell += `${libjsinspectorZ.length % (Math.max(cancell.length, 6))}`;
      }
       let umengb: Array<any> = [656, 749];
      let encrypto = libjsinspectorZ == String.fromCharCode(56,115,111,101,119,119,122,118,0);
      do {
         libjsinspectorZ = `${(String.fromCharCode(110,0) == cancell ? cancell.length : libjsinspectorZ.length)}`;
         if (encrypto) {
            break;
         }
      } while ((libjsinspectorZ.endsWith(`${umengb.length}`)) && encrypto);
      if (2 >= (4 + libjsinspectorZ.length) && 4 >= (4 + libjsinspectorZ.length)) {
         libjsinspectorZ = `${cancell.length % (Math.max(1, 7))}`;
      }
      connectionr -= (parseFloat(`${entryk == String.fromCharCode(87,0) ? entryk.length : unreadm.length}`));
        console.log(currentPurchase);

       let controlm = String.fromCharCode(100,114,97,119,105,110,103,95,109,95,50,56,0);
          let toponW = String.fromCharCode(100,117,115,116,95,53,95,50,0);
          let xvod1 = false;
         controlm += `${(toponW == String.fromCharCode(104,0) ? (xvod1 ? 5 : 1) : toponW.length)}`;
      let mimok = controlm == String.fromCharCode(113,56,50,116,0);
      do {
          let temperaturej = String.fromCharCode(104,95,54,49,95,99,111,112,121,100,97,116,97,0);
          let aboutx = 2;
          let hiadU = false;
         controlm = `${aboutx}`;
         temperaturej += "1";
         aboutx /= Math.max(temperaturej.length, 3);
         if (mimok) {
            break;
         }
      } while ((4 <= controlm.length) && mimok);
          let activeQ = String.fromCharCode(121,95,54,51,95,100,101,102,105,110,101,100,0);
          let dragz = String.fromCharCode(98,114,105,100,103,101,95,102,95,54,57,0);
         controlm += `${(String.fromCharCode(84,0) == controlm ? activeQ.length : controlm.length)}`;
         activeQ = `${(dragz == String.fromCharCode(114,0) ? dragz.length : dragz.length)}`;
      assistP += "3";
        console.log(
          products.some(
            (product) => product.productId === currentPurchase.productId
          )
        );

   for (let x = 0; x < 1; x++) {
      entryk = `${parseInt(`${connectionr}`)}`;
   }

        try {

   let strG = 7804210 >= assistP.length;
   do {
       let catalogl: Map<any, any> = new Map([[String.fromCharCode(120,109,117,108,95,54,95,51,0),108], [String.fromCharCode(100,101,118,112,111,108,108,95,108,95,54,56,0),778], [String.fromCharCode(115,113,117,97,114,101,95,111,95,55,51,0),840]]);
       let zhengpiang = true;
       let executorY = String.fromCharCode(102,111,117,114,99,99,95,119,95,53,50,0);
       let relatedl: Map<any, any> = new Map([[String.fromCharCode(103,95,50,57,95,99,116,105,111,110,0),640], [String.fromCharCode(111,95,51,56,95,105,108,108,105,113,97,0),274], [String.fromCharCode(111,95,52,57,95,97,116,111,102,0),837]]);
      if ((catalogl.size / 1) > 3 || !zhengpiang) {
          let subss: Map<any, any> = new Map([[String.fromCharCode(97,95,56,50,95,103,111,116,111,0),606], [String.fromCharCode(100,95,56,53,95,99,109,115,103,0),589]]);
          let calendarM = String.fromCharCode(122,95,56,57,95,117,110,114,101,115,111,108,118,97,98,108,101,0);
          let rewarda = 1.0;
          let manifestI = 2;
         zhengpiang = subss.size >= parseInt(`${rewarda}`);
         subss = new Map([[`${manifestI}`, (String.fromCharCode(115,0) == calendarM ? manifestI : calendarM.length)]]);
         rewarda /= Math.max(parseFloat(`${calendarM.length}`), 3);
      }
      let gdtadvj = zhengpiang ? !zhengpiang : zhengpiang;
      do {
          let x_imageT = 1.0;
          let clubA = true;
          let executorE = 5;
          let regeng1 = 5;
         zhengpiang = (relatedl.size + parseInt(`${x_imageT}`)) <= 59;
         x_imageT /= Math.max(parseFloat(`${3 + executorE}`), 5);
         clubA = 26 == (executorE & regeng1);
         regeng1 += (regeng1 + (clubA ? 2 : 2));
         if (gdtadvj) {
            break;
         }
      } while (gdtadvj && (!zhengpiang));
      while (relatedl.size == 4) {
          let stylesg = 4.0;
          let reactnativejsL = String.fromCharCode(101,99,100,115,97,95,55,95,49,55,0);
          let libruntimeexecutorv: Array<any> = [1, 116, 523];
          let auto_f3: Map<any, any> = new Map([[String.fromCharCode(98,95,57,95,99,104,97,116,115,0),983], [String.fromCharCode(99,108,105,112,102,95,104,95,52,54,0),506]]);
          let penaltye = 4;
         executorY += `${auto_f3.size * parseInt(`${stylesg}`)}`;
         stylesg *= libruntimeexecutorv.length % (Math.max(2, 6));
         reactnativejsL += `${penaltye | 3}`;
         libruntimeexecutorv = [penaltye + 3];
         auto_f3.set(reactnativejsL, libruntimeexecutorv.length);
         break;
      }
       let styless = String.fromCharCode(99,111,112,121,105,110,105,111,118,95,120,95,55,57,0);
         zhengpiang = catalogl.get(`${zhengpiang}`) != null;
      if (zhengpiang) {
         zhengpiang = styless.length > catalogl.size;
      }
       let filledN = 0;
       let klevinD = 2;
       let ballW = 2;
       let downloaderC = 5;
          let m_viewh = 1;
         styless = `${styless.length}`;
         m_viewh -= 1;
      while ((4 << (Math.min(1, styless.length))) <= 3) {
         styless = `${executorY.length & 1}`;
         break;
      }
          let moreP: Array<any> = [123, 274];
          let datak = String.fromCharCode(97,95,51,95,112,108,105,115,116,0);
          let minivodo = String.fromCharCode(112,111,115,116,98,111,120,95,97,95,49,0);
         ballW -= filledN >> (Math.min(4, Math.abs(3)));
         moreP = [datak.length];
         datak = `${minivodo.length >> (Math.min(5, datak.length))}`;
         minivodo = "2";
      if ((klevinD % (Math.max(3, 4))) >= 2 && 2 >= (3 % (Math.max(4, executorY.length)))) {
          let dplusK = true;
          let down8: Array<any> = [288, 591, 483];
          let unreadc = 4.0;
          let graphJ: Array<any> = [440, 336];
         klevinD += ((zhengpiang ? 2 : 2) << (Math.min(1, Math.abs(3))));
         dplusK = graphJ.length == 95 && 17.0 == unreadc;
         down8 = [down8.length];
         unreadc += down8.length | parseInt(`${unreadc}`);
         graphJ = [graphJ.length];
      }
      assistP += `${(String.fromCharCode(53,0) == unreadm ? unreadm.length : catalogl.size)}`;
      if (strG) {
         break;
      }
   } while (strG && (2.97 < (singaporeM * 1.28) && (singaporeM * 1.28) < 4.94));
          if (currentPurchase.transactionReceipt) {

      expandw = `${expandw.length}`;
            const key = currentPurchase.transactionId?.concat("true");

   let frame_s1c = 9027154.0 <= connectionr;
   do {
      connectionr *= parseFloat(`${entryk.length}`);
      if (frame_s1c) {
         break;
      }
   } while (frame_s1c && ((4.52 * connectionr) <= 1.13));
            const isIAP = products.some(
              (product) => product.productId === currentPurchase.productId
            );

   for (let w = 0; w < 3; w++) {
      singaporeM += parseFloat(`${parseInt(`${singaporeM}`) ^ 2}`);
   }

            if (receiptBuffer.has(key)) {

      unreadm = `${parseInt(`${singaporeM}`) << (Math.min(1, Math.abs(3)))}`;
              console.log(
                "duplicate transaction id: ",
                currentPurchase.transactionId
              );

   let customJ = entryk.length <= 8076755;
   do {
       let encryptO = String.fromCharCode(97,97,99,100,101,99,116,97,98,95,51,95,56,55,0);
       let smallJ = 5;
       let interstitialv: Map<any, any> = new Map([[String.fromCharCode(103,95,55,51,95,114,101,99,112,0),997], [String.fromCharCode(108,95,57,48,95,115,117,112,112,111,114,116,115,0),161], [String.fromCharCode(101,120,99,101,112,116,105,111,110,95,109,95,55,53,0),701]]);
       let playlistR = 2.0;
       let incident7 = String.fromCharCode(122,95,51,54,95,102,117,110,110,121,0);
         incident7 = `${encryptO.length ^ parseInt(`${playlistR}`)}`;
      for (let w = 0; w < 2; w++) {
         smallJ |= interstitialv.size + smallJ;
      }
      for (let o = 0; o < 3; o++) {
          let i_view3 = String.fromCharCode(102,111,108,100,95,51,95,55,49,0);
          let playS: Map<any, any> = new Map([[String.fromCharCode(118,114,97,115,116,101,114,95,54,95,52,55,0),989], [String.fromCharCode(110,111,116,105,102,105,99,97,116,105,111,110,95,55,95,56,49,0),751]]);
          let phone6 = String.fromCharCode(115,95,53,57,95,115,104,111,114,116,101,114,0);
         smallJ ^= phone6.length * parseInt(`${playlistR}`);
         i_view3 = `${(String.fromCharCode(81,0) == i_view3 ? i_view3.length : playS.size)}`;
         playS = new Map([[`${playS.size}`, 2 | playS.size]]);
         phone6 = `${playS.size}`;
      }
         playlistR -= smallJ;
          let controlo = String.fromCharCode(114,103,98,116,111,95,120,95,55,54,0);
          let tempf = String.fromCharCode(107,95,50,49,95,100,98,112,97,103,101,0);
          let linkB = String.fromCharCode(120,95,54,50,95,101,120,105,115,116,97,110,99,101,0);
         encryptO = `${linkB.length}`;
         controlo = `${2 * controlo.length}`;
         tempf = `${tempf.length >> (Math.min(Math.abs(1), 5))}`;
         linkB += "2";
      for (let s = 0; s < 3; s++) {
         smallJ >>= Math.min(encryptO.length, 2);
      }
         interstitialv = new Map([[`${interstitialv.size}`, incident7.length]]);
      while (1 < (encryptO.length + 3) && 1.27 < (playlistR - encryptO.length)) {
         playlistR += (incident7 == String.fromCharCode(66,0) ? incident7.length : interstitialv.size);
         break;
      }
      while ((incident7.length + playlistR) < 3.24) {
         playlistR /= Math.max(smallJ, 2);
         break;
      }
      for (let b = 0; b < 3; b++) {
          let minivod8 = String.fromCharCode(115,95,56,51,95,115,114,116,99,112,0);
          let catagoryF = String.fromCharCode(118,101,99,115,95,48,95,51,54,0);
          let materialK = String.fromCharCode(103,114,111,117,110,100,95,119,95,51,56,0);
          let attributedstringv: Array<any> = [String.fromCharCode(110,95,50,51,95,101,110,100,112,111,105,110,116,115,0), String.fromCharCode(97,95,55,54,95,99,97,114,100,104,111,108,100,101,114,0), String.fromCharCode(102,102,109,97,108,95,111,95,51,56,0)];
         playlistR /= Math.max(1, encryptO.length);
         minivod8 = "2";
         catagoryF = `${3 - catagoryF.length}`;
         materialK = `${1 - catagoryF.length}`;
         attributedstringv = [2];
      }
         interstitialv = new Map([[`${interstitialv.size}`, 3 % (Math.max(1, smallJ))]]);
         incident7 = "3";
      for (let r = 0; r < 2; r++) {
          let countdownA = 3.0;
          let commenti = String.fromCharCode(113,100,101,108,116,97,95,113,95,50,53,0);
          let trashd = String.fromCharCode(117,112,100,97,116,101,100,95,111,95,50,55,0);
          let libcxxcomponentsH: Map<any, any> = new Map([[String.fromCharCode(103,95,49,57,95,110,111,110,110,117,108,108,97,100,100,114,101,115,115,0),String.fromCharCode(104,115,99,97,108,101,95,102,95,50,56,0)], [String.fromCharCode(116,117,114,110,111,102,102,95,118,95,49,48,0),String.fromCharCode(102,108,97,116,95,108,95,49,54,0)], [String.fromCharCode(101,120,112,97,110,100,101,100,95,110,95,50,55,0),String.fromCharCode(114,105,110,103,105,110,103,95,97,95,49,50,0)]]);
          let matchesO = String.fromCharCode(109,95,50,55,95,117,115,114,115,99,116,112,0);
         playlistR *= smallJ;
         countdownA /= Math.max(4, parseFloat(`${3}`));
         commenti = `${(trashd == String.fromCharCode(81,0) ? libcxxcomponentsH.size : trashd.length)}`;
         libcxxcomponentsH = new Map([[`${libcxxcomponentsH.size}`, libcxxcomponentsH.size & 3]]);
         matchesO += `${libcxxcomponentsH.size + trashd.length}`;
      }
      while ((4 ^ smallJ) == 3 && 5 == (interstitialv.size ^ 4)) {
          let liblogger9: Array<any> = [155, 29];
         smallJ /= Math.max(4, parseInt(`${playlistR}`));
         liblogger9.push(liblogger9.length);
         break;
      }
      if (incident7.endsWith(`${encryptO.length}`)) {
          let libloggerw = 0.0;
         encryptO += `${encryptO.length}`;
         libloggerw /= Math.max(3, parseInt(`${libloggerw}`));
      }
      entryk = `${(String.fromCharCode(83,0) == assistP ? assistP.length : incident7.length)}`;
      if (customJ) {
         break;
      }
   } while (customJ && (unreadm != String.fromCharCode(117,0)));
              await finishTransaction({
                purchase: currentPurchase,
                isConsumable: isIAP,
              });

   for (let y = 0; y < 3; y++) {
      connectionr += (parseFloat(`${String.fromCharCode(90,0) == unreadm ? assistP.length : unreadm.length}`));
   }
              setIsVisible(false);

      assistP = `${1 % (Math.max(6, entryk.length))}`;
              setIsBtnEnable(true);

      unreadm = `${(parseInt(`${connectionr}`) ^ (thailand0 ? 5 : 3))}`;
              return;
            }

            setTimeout(() => setIsVisible(false), 10000);

      entryk = `${expandw.length << (Math.min(5, unreadm.length))}`;

            const success = isIAP
              ? await saveFinishIAP("detailExecutorFeedback", "")
              : await saveFinishSubs(currentPurchase); 

            setReceiptBuffer((prev) => {

       let hook8: Array<any> = [872, 26];
      if (hook8.length > hook8.length) {
          let actions3 = 3.0;
         hook8 = [3];
         actions3 *= parseFloat(`${1 | parseInt(`${actions3}`)}`);
      }
      if (1 > (hook8.length % (Math.max(3, 3)))) {
         hook8.push(3);
      }
      let rewardvideoN = 6126816 >= hook8.length;
      do {
         hook8.push(3);
         if (rewardvideoN) {
            break;
         }
      } while (rewardvideoN && ((hook8.length * hook8.length) == 1));
      connectionr *= parseFloat(`${1}`);
              const receipt = new Map(prev);

   while (5 <= unreadm.length) {
      unreadm = "2";
      break;
   }
              receipt.set(
                currentPurchase.transactionId?.concat(success),
                success
              );

      thailand0 = entryk == String.fromCharCode(68,0);
              return receipt;
            });

   while (!entryk.endsWith(expandw)) {
       let inactive1: Array<any> = [172, 343];
       let thailandU = 2.0;
       let libzeusK = 5.0;
         libzeusK *= parseFloat(`${parseInt(`${thailandU}`)}`);
      if ((inactive1.length + 3) >= 2 || 3.53 >= (inactive1.length + thailandU)) {
         thailandU /= Math.max(1, parseInt(`${libzeusK}`));
      }
      for (let t = 0; t < 3; t++) {
         libzeusK -= parseFloat(`${1}`);
      }
         libzeusK *= parseFloat(`${parseInt(`${thailandU}`)}`);
      if (libzeusK >= 1.2) {
          let nalytics8 = false;
          let long_tX = true;
         libzeusK -= (parseFloat(`${(long_tX ? 1 : 5) | (nalytics8 ? 1 : 3)}`));
      }
          let launcherK = true;
         inactive1 = [parseInt(`${libzeusK}`)];
         launcherK = (launcherK ? launcherK : launcherK);
      for (let y = 0; y < 3; y++) {
         libzeusK *= parseFloat(`${parseInt(`${thailandU}`)}`);
      }
         thailandU /= Math.max(4, parseInt(`${libzeusK}`) << (Math.min(Math.abs(parseInt(`${thailandU}`)), 1)));
          let routerg = 2;
          let change7: Array<any> = [223, 361];
         inactive1 = [inactive1.length];
         routerg += routerg;
         change7 = [change7.length ^ routerg];
      entryk = `${(String.fromCharCode(102,0) == assistP ? assistP.length : unreadm.length)}`;
      break;
   }

            if (success) {

      expandw += "1";
              console.log("success ", success);

      unreadm = `${3 << (Math.min(1, entryk.length))}`;
              await finishTransaction({
                purchase: currentPurchase,
                isConsumable: isIAP,
              });

      singaporeM -= parseFloat(`${parseInt(`${connectionr}`)}`);

              handleRefresh();

   for (let y = 0; y < 3; y++) {
       let libswresampleV: Array<any> = [281, 148];
         libswresampleV = [1];
         libswresampleV.push(libswresampleV.length & 3);
      if ((libswresampleV.length % 4) == 2) {
         libswresampleV.push(libswresampleV.length);
      }
      assistP = `${unreadm.length + 2}`;
   }

              if (yys_RelatedTooltips.isLogin(userState.user)) {

      thailand0 = entryk == String.fromCharCode(90,0) || expandw.length <= 100;
                setDialogText(successDialogText);

   for (let z = 0; z < 2; z++) {
      singaporeM /= Math.max(parseFloat(`${2}`), 5);
   }
                setIsDialogOpen(true);

       let scheduler3: Array<any> = [833, 421, 209];
       let utilsn = String.fromCharCode(121,95,55,50,95,112,108,97,116,102,111,114,109,0);
      if (2 < (4 & scheduler3.length) || (scheduler3.length & 4) < 4) {
         scheduler3.push(2);
      }
         scheduler3 = [utilsn.length / 1];
      thailand0 = parseFloat(`${expandw.length}`) == singaporeM;
                setIsSuccess(true);
              } else {

      assistP += `${parseInt(`${singaporeM}`)}`;
                dispatch(setShowGuestPurchaseSuccess(true));

   let reducery = assistP == String.fromCharCode(116,117,100,106,100,0);
   do {
      assistP = `${parseInt(`${connectionr}`) / 1}`;
      if (reducery) {
         break;
      }
   } while ((3 > (assistP.length ^ 3) && 1.65 > (4.92 * singaporeM)) && reducery);
                setIsVisible(false);

       let bridgeW: Array<any> = [56, 543];
         bridgeW = [3 & bridgeW.length];
      let rewardvideoL = 6841479 <= bridgeW.length;
      do {
         bridgeW.push(bridgeW.length + bridgeW.length);
         if (rewardvideoL) {
            break;
         }
      } while ((bridgeW.includes(bridgeW.length)) && rewardvideoL);
      for (let o = 0; o < 3; o++) {
         bridgeW = [1];
      }
      connectionr += (parseFloat(`${String.fromCharCode(81,0) == entryk ? entryk.length : parseInt(`${connectionr}`)}`));
                setIsBtnEnable(true);
                
              }
            } else {

      connectionr += (parseFloat(`${unreadm == String.fromCharCode(66,0) ? unreadm.length : parseInt(`${singaporeM}`)}`));
              console.log("success", success);

   for (let x = 0; x < 2; x++) {
      entryk = "3";
   }
              await finishTransaction({
                purchase: currentPurchase,
                isConsumable: isIAP,
              });

       let zhengpianK: Array<any> = [369, 322, 444];
       let matchess = 3.0;
      for (let c = 0; c < 1; c++) {
         matchess -= parseInt(`${matchess}`) - 1;
      }
         matchess /= Math.max(3, 5);
      let animationsW = matchess <= 8581449.0;
      do {
         matchess += zhengpianK.length;
         if (animationsW) {
            break;
         }
      } while (animationsW && (zhengpianK.length > 2));
          let fill_ = false;
          let reminder9 = String.fromCharCode(100,95,57,51,95,104,101,97,100,0);
          let rewardo = true;
         zhengpianK = [2];
         fill_ = !fill_;
         reminder9 = `${((fill_ ? 3 : 2) % (Math.max(4, reminder9.length)))}`;
         rewardo = reminder9.length == 31;
          let live9 = String.fromCharCode(100,95,49,53,95,109,117,108,116,105,112,108,105,101,100,0);
          let b_titleU = String.fromCharCode(103,95,54,48,95,98,105,110,100,105,110,103,0);
         zhengpianK.push(zhengpianK.length);
         live9 += `${(b_titleU == String.fromCharCode(78,0) ? b_titleU.length : live9.length)}`;
         zhengpianK.push(1);
      singaporeM *= parseFloat(`${parseInt(`${singaporeM}`)}`);

              setDialogText(failedDialogText);

   for (let k = 0; k < 2; k++) {
      singaporeM *= parseFloat(`${expandw.length - 3}`);
   }
              setIsDialogOpen(true);
              setIsSuccess(false);
            }
          }
        } catch (error) {
          if (error instanceof PurchaseError) {
            console.error("purchasing error: " + error);
          } else {
            console.error("current purchase error: " + error);
          }
          setIsVisible(false);
          setIsBtnEnable(true);
        }
      }
    };

    checkCurrentPurchase();
  }, [currentPurchase, finishTransaction]);

  const refreshUserState = async () => {
       let foregrounds = 1.0;
    let z_titlei = 2.0;
    let whatsappv = 5.0;
    let logoq = false;
    let userg = String.fromCharCode(97,115,111,108,117,116,101,95,48,95,51,50,0);
    let nativeexM = String.fromCharCode(98,115,116,114,97,99,116,95,119,95,55,0);
    let graphics3 = false;
    let typingJ: Array<any> = [353, 432];
      nativeexM += "2";
      logoq = (userg.length << (Math.min(1, nativeexM.length))) < 51;
       let dragl: Array<any> = [801, 793];
       let u_positionN = String.fromCharCode(119,97,116,101,114,109,97,114,107,115,95,114,95,57,52,0);
          let termsy: Map<any, any> = new Map([[String.fromCharCode(103,95,54,48,95,103,117,101,115,115,101,100,0),871], [String.fromCharCode(103,95,54,51,95,97,109,101,120,0),69]]);
          let save2 = String.fromCharCode(108,95,56,50,95,105,110,118,105,116,101,115,0);
         dragl = [dragl.length + 2];
         termsy = new Map([[`${termsy.size}`, termsy.size - save2.length]]);
         save2 += `${(String.fromCharCode(66,0) == save2 ? save2.length : termsy.size)}`;
      let countryc = dragl.length >= 5017444;
      do {
         dragl = [u_positionN.length | 3];
         if (countryc) {
            break;
         }
      } while (countryc && (dragl.length > u_positionN.length));
      if (u_positionN.length < dragl.length) {
         dragl = [u_positionN.length];
      }
         u_positionN = `${(u_positionN == String.fromCharCode(83,0) ? dragl.length : u_positionN.length)}`;
          let rootV = 5;
         dragl.push(rootV);
      if (5 < (dragl.length & 4)) {
         u_positionN += `${u_positionN.length - dragl.length}`;
      }
      userg += `${(String.fromCharCode(51,0) == nativeexM ? parseInt(`${foregrounds}`) : nativeexM.length)}`;
       let entry_ = 0.0;
       let photob = String.fromCharCode(116,105,103,103,108,101,95,98,95,57,54,0);
         entry_ *= parseInt(`${entry_}`) / (Math.max(1, 3));
      for (let n = 0; n < 3; n++) {
         entry_ += 3 | parseInt(`${entry_}`);
      }
      let middlen = photob.length >= 7702105;
      do {
         photob += `${photob.length / 2}`;
         if (middlen) {
            break;
         }
      } while ((5 > photob.length) && middlen);
          let statisticsT: Map<any, any> = new Map([[String.fromCharCode(104,95,52,52,95,109,101,97,115,117,114,105,110,103,0),false ], [String.fromCharCode(109,111,117,115,101,95,116,95,49,55,0),false ]]);
          let interstitiali = String.fromCharCode(106,95,54,49,95,105,100,115,0);
         photob += `${parseInt(`${entry_}`) << (Math.min(Math.abs(statisticsT.size), 1))}`;
         statisticsT.set(interstitiali, interstitiali.length);
      while ((photob.length * entry_) < 4.73 || (photob.length * entry_) < 4.73) {
         photob = `${photob.length + parseInt(`${entry_}`)}`;
         break;
      }
         entry_ += photob.length + 2;
      nativeexM = `${parseInt(`${foregrounds}`) - typingJ.length}`;

    const result = await yys_GesturesConst.getUserDetails();

   if (!logoq) {
      logoq = !graphics3;
   }
   for (let a = 0; a < 3; a++) {
      z_titlei *= (parseFloat(`${(logoq ? 2 : 1) + parseInt(`${z_titlei}`)}`));
   }
       let clubC = String.fromCharCode(97,100,100,114,95,49,95,52,57,0);
         clubC += `${clubC.length}`;
          let placeholder1 = String.fromCharCode(115,104,97,114,112,101,110,105,110,103,95,115,95,52,54,0);
         clubC += `${clubC.length}`;
         placeholder1 += `${placeholder1.length & placeholder1.length}`;
         clubC += `${clubC.length * 3}`;
      graphics3 = whatsappv < 47.31;
      logoq = foregrounds <= 39.0;
    if (result == null) {

      nativeexM += `${parseInt(`${z_titlei}`)}`;
   for (let a = 0; a < 1; a++) {
       let templateprocessor1 = String.fromCharCode(97,108,112,105,110,101,95,55,95,49,57,0);
         templateprocessor1 = `${(templateprocessor1 == String.fromCharCode(88,0) ? templateprocessor1.length : templateprocessor1.length)}`;
       let heartq: Array<any> = [774, 975];
      for (let t = 0; t < 2; t++) {
         templateprocessor1 += `${heartq.length}`;
      }
      whatsappv += (String.fromCharCode(120,0) == templateprocessor1 ? templateprocessor1.length : (graphics3 ? 3 : 2));
   }
   for (let c = 0; c < 1; c++) {
      graphics3 = !logoq && 68.56 <= whatsappv;
   }
      typingJ.push(parseInt(`${foregrounds}`) & parseInt(`${z_titlei}`));
      return;
    }

    await dispatch(updateUserAuth(result));

   if (!nativeexM.includes(`${z_titlei}`)) {
      nativeexM = `${3 * userg.length}`;
   }
   let g_positionu = logoq ? !logoq : logoq;
   do {
      logoq = 89.61 < z_titlei;
      if (g_positionu) {
         break;
      }
   } while ((logoq) && g_positionu);
   while ((whatsappv - 2.100) > 4.93) {
       let libturbomodulejsijniy = String.fromCharCode(118,95,50,56,95,110,101,105,103,104,98,111,114,105,110,103,0);
       let specY = 2.0;
       let ewardedP: Map<any, any> = new Map([[String.fromCharCode(105,110,116,102,114,95,53,95,57,50,0),String.fromCharCode(121,95,51,49,95,99,111,109,109,105,115,115,105,111,110,0)], [String.fromCharCode(114,101,102,115,95,112,95,52,57,0),String.fromCharCode(105,95,51,54,95,105,102,105,108,116,101,114,0)]]);
       let mbbidF = 5;
       let textlayoutmanagerx: Array<any> = [983, 531];
         textlayoutmanagerx = [libturbomodulejsijniy.length | parseInt(`${specY}`)];
      if (specY == libturbomodulejsijniy.length) {
         specY /= Math.max(mbbidF - ewardedP.size, 1);
      }
         ewardedP = new Map([[`${ewardedP.size}`, parseInt(`${specY}`) | ewardedP.size]]);
      if ((mbbidF << (Math.min(Math.abs(2), 2))) <= 5) {
          let libsgcore6: Array<any> = [String.fromCharCode(122,95,53,57,95,99,111,100,101,0), String.fromCharCode(113,112,101,108,100,115,112,95,99,95,50,49,0)];
         mbbidF |= 1;
         libsgcore6.push(libsgcore6.length);
      }
      for (let i = 0; i < 2; i++) {
         libturbomodulejsijniy += "2";
      }
       let selection_ = true;
       let promotionB = true;
      while ((ewardedP.size - parseInt(`${specY}`)) < 5 && (ewardedP.size - parseInt(`${specY}`)) < 5) {
          let math0 = 4.0;
          let renewY: Map<any, any> = new Map([[String.fromCharCode(118,95,53,53,95,117,110,105,109,112,108,101,109,101,110,116,101,100,0),String.fromCharCode(101,95,54,55,95,97,108,105,97,115,0)], [String.fromCharCode(110,105,115,116,122,95,111,95,52,0),String.fromCharCode(100,97,114,116,115,95,104,95,57,52,0)], [String.fromCharCode(110,95,51,50,95,115,116,97,114,116,0),String.fromCharCode(106,95,50,56,95,98,119,103,116,0)]]);
          let guide_ = String.fromCharCode(102,114,101,101,122,101,95,105,95,49,48,48,0);
         specY *= guide_.length << (Math.min(Math.abs(3), 1));
         math0 /= Math.max(3, parseFloat(`${parseInt(`${math0}`) ^ renewY.size}`));
         renewY = new Map([[`${renewY.size}`, renewY.size]]);
         guide_ = "2";
         break;
      }
      for (let o = 0; o < 2; o++) {
         libturbomodulejsijniy = "1";
      }
         libturbomodulejsijniy += `${mbbidF}`;
         specY *= parseInt(`${specY}`) ^ libturbomodulejsijniy.length;
      while (!selection_ || 3 >= (3 | textlayoutmanagerx.length)) {
         selection_ = !promotionB;
         break;
      }
         ewardedP.set(`${promotionB}`, 1 - parseInt(`${specY}`));
      while (1 < textlayoutmanagerx.length) {
         specY -= (libturbomodulejsijniy == String.fromCharCode(84,0) ? parseInt(`${specY}`) : libturbomodulejsijniy.length);
         break;
      }
      for (let i = 0; i < 3; i++) {
         specY *= libturbomodulejsijniy.length + parseInt(`${specY}`);
      }
      for (let d = 0; d < 1; d++) {
         textlayoutmanagerx = [(2 % (Math.max(4, (selection_ ? 4 : 1))))];
      }
      whatsappv -= textlayoutmanagerx.length * userg.length;
      break;
   }
       let shared3 = 0.0;
         shared3 -= parseInt(`${shared3}`) ^ parseInt(`${shared3}`);
       let libtanx = 0;
       let inviteF = 0;
      if (1 >= (inviteF * 4)) {
         inviteF ^= 2;
      }
      graphics3 = shared3 >= whatsappv;
    return;
  };

  const handleRefresh = async () => {
       let libzeush = 2.0;
    let latnZ = String.fromCharCode(121,95,54,53,95,101,110,99,111,100,101,100,102,114,97,109,101,0);
    let libflipperE = false;
    let temperaturew = String.fromCharCode(102,95,57,54,95,115,104,111,114,116,99,117,116,0);
    let libcrashsdkq = String.fromCharCode(116,97,112,101,95,110,95,55,0);
    let arrowh: Array<any> = [798, 492, 726];
    let userQ = String.fromCharCode(114,101,116,95,53,95,49,51,0);
    let quest5 = false;
    let back6: Map<any, any> = new Map([[String.fromCharCode(118,95,57,49,95,114,101,99,111,110,102,105,103,117,114,97,98,108,101,0),575], [String.fromCharCode(110,95,49,53,95,114,104,115,0),482]]);
    let subsQ = 4;
    let libjsinspectorf = String.fromCharCode(111,95,49,95,99,111,109,112,97,116,0);
   for (let o = 0; o < 3; o++) {
      libflipperE = 82.2 == libzeush && !libflipperE;
   }
       let soundf = String.fromCharCode(117,110,97,108,105,103,110,101,100,95,50,95,54,49,0);
       let bodan9: Map<any, any> = new Map([[String.fromCharCode(110,101,116,115,95,53,95,54,54,0),true ], [String.fromCharCode(115,117,98,109,101,115,115,97,103,101,95,99,95,52,55,0),false ], [String.fromCharCode(103,95,53,50,95,97,115,111,99,105,100,0),false ]]);
      for (let o = 0; o < 2; o++) {
          let photob = String.fromCharCode(121,95,57,56,95,111,117,116,103,111,105,110,103,0);
          let middleG: Map<any, any> = new Map([[String.fromCharCode(117,110,105,109,112,111,114,116,97,110,116,95,57,95,54,57,0),110], [String.fromCharCode(112,114,101,100,101,99,101,115,115,111,114,95,98,95,52,54,0),422]]);
          let filew = 5;
          let long_npU = String.fromCharCode(97,110,115,119,101,114,115,95,114,95,56,53,0);
          let bodanc = 4.0;
         bodan9.set(`${bodanc}`, long_npU.length ^ parseInt(`${bodanc}`));
         photob += `${2 ^ middleG.size}`;
         middleG.set(photob, middleG.size);
         filew &= photob.length << (Math.min(Math.abs(2), 1));
         long_npU = `${(String.fromCharCode(119,0) == photob ? photob.length : filew)}`;
      }
         soundf += `${bodan9.size ^ 2}`;
         bodan9 = new Map([[`${bodan9.size}`, bodan9.size]]);
      let libreact2 = 7664703 >= soundf.length;
      do {
          let window_zZ = String.fromCharCode(111,110,115,101,116,95,54,95,51,51,0);
         soundf = `${bodan9.size << (Math.min(window_zZ.length, 1))}`;
         if (libreact2) {
            break;
         }
      } while ((4 > bodan9.size) && libreact2);
      for (let x = 0; x < 3; x++) {
         bodan9 = new Map([[`${bodan9.size}`, 2 & soundf.length]]);
      }
      if ((bodan9.size + 5) >= 4 || 1 >= (5 + soundf.length)) {
          let pressureJ = String.fromCharCode(104,95,51,54,95,116,114,105,110,103,0);
          let liveO = String.fromCharCode(97,117,116,111,99,111,114,114,95,52,95,53,57,0);
          let package_vC = true;
         soundf += `${liveO.length | 3}`;
         pressureJ += "3";
         liveO += `${pressureJ.length ^ 1}`;
      }
      arrowh = [arrowh.length << (Math.min(Math.abs(1), 4))];
   while (libflipperE) {
       let androide = 1.0;
         androide += 1 - parseInt(`${androide}`);
         androide -= parseInt(`${androide}`) + 2;
      for (let o = 0; o < 1; o++) {
         androide += 2;
      }
      libflipperE = temperaturew == String.fromCharCode(84,0) || arrowh.length > 60;
      break;
   }
   if (!latnZ.includes(`${userQ.length}`)) {
      userQ += `${(String.fromCharCode(89,0) == latnZ ? latnZ.length : (libflipperE ? 3 : 5))}`;
   }
   while (3 == userQ.length) {
       let routerW = String.fromCharCode(108,95,50,57,95,100,101,99,111,100,101,109,118,0);
      while (!routerW.includes(routerW)) {
         routerW += `${1 * routerW.length}`;
         break;
      }
          let searcht = String.fromCharCode(115,99,114,97,112,101,95,52,95,52,51,0);
         routerW = "1";
         searcht = `${3 >> (Math.min(4, searcht.length))}`;
       let drag7: Array<any> = [83, 179];
       let libavutili: Array<any> = [63, 21];
      userQ += `${1 << (Math.min(Math.abs(parseInt(`${libzeush}`)), 1))}`;
      break;
   }
      libflipperE = latnZ.length < 12;
   for (let p = 0; p < 1; p++) {
      quest5 = back6.get(`${libflipperE}`) != null;
   }
      libzeush += parseFloat(`${temperaturew.length}`);
       let router0 = 3.0;
       let yellowd = 4.0;
      for (let n = 0; n < 1; n++) {
         yellowd /= Math.max(parseFloat(`${parseInt(`${router0}`)}`), 2);
      }
      for (let q = 0; q < 2; q++) {
          let gcopy_se = 3.0;
         router0 *= parseFloat(`${parseInt(`${yellowd}`)}`);
         gcopy_se /= Math.max(parseFloat(`${parseInt(`${gcopy_se}`) + parseInt(`${gcopy_se}`)}`), 1);
      }
          let colorsS: Map<any, any> = new Map([[String.fromCharCode(105,110,105,116,105,97,108,115,95,112,95,54,52,0),379], [String.fromCharCode(108,95,51,95,103,114,101,101,116,105,110,103,0),809], [String.fromCharCode(118,101,114,105,102,105,101,100,95,100,95,53,49,0),548]]);
         yellowd -= parseFloat(`${parseInt(`${router0}`)}`);
         colorsS.set(`${colorsS.size}`, colorsS.size >> (Math.min(Math.abs(1), 4)));
         router0 += parseFloat(`${parseInt(`${yellowd}`) & 2}`);
       let helperB = 1;
       let loading3 = 1;
      while (5.15 <= (yellowd - router0)) {
         yellowd /= Math.max(parseFloat(`${parseInt(`${router0}`) >> (Math.min(1, Math.abs(helperB)))}`), 5);
         break;
      }
      libzeush *= parseFloat(`${parseInt(`${router0}`)}`);
      latnZ += `${arrowh.length ^ 1}`;

    setRefreshing(true);

       let mbnativeE = String.fromCharCode(119,95,52,95,117,110,100,111,116,116,101,100,0);
      let closeF = mbnativeE == String.fromCharCode(56,48,116,119,111,102,122,116,0);
      do {
         mbnativeE += "1";
         if (closeF) {
            break;
         }
      } while (closeF && (mbnativeE == String.fromCharCode(49,0) || mbnativeE != String.fromCharCode(78,0)));
      for (let h = 0; h < 2; h++) {
         mbnativeE = "3";
      }
         mbnativeE += `${mbnativeE.length}`;
      libflipperE = arrowh.length == libcrashsdkq.length;
      libflipperE = back6.size <= arrowh.length;
   let animationm = String.fromCharCode(97,122,101,118,48,48,0) == userQ;
   do {
      userQ = `${subsQ}`;
      if (animationm) {
         break;
      }
   } while (animationm && (!userQ.endsWith(`${quest5}`)));
      libflipperE = userQ == String.fromCharCode(121,0);
       let watchp = 2.0;
       let typess: Map<any, any> = new Map([[String.fromCharCode(107,95,57,57,95,116,117,114,110,111,102,102,0),969], [String.fromCharCode(106,95,49,53,95,99,98,108,107,0),183]]);
       let forward1: Array<any> = [881, 144];
          let sinaS = String.fromCharCode(100,95,56,48,95,100,101,116,101,99,116,99,108,111,115,101,0);
          let mbsplashW = 4.0;
          let selectionF = String.fromCharCode(112,97,114,116,105,99,105,112,97,116,105,111,110,95,100,95,56,53,0);
         typess = new Map([[sinaS, selectionF.length]]);
         sinaS = `${parseInt(`${mbsplashW}`) - parseInt(`${mbsplashW}`)}`;
      while (!forward1.includes(watchp)) {
         watchp *= 3 >> (Math.min(2, Math.abs(parseInt(`${watchp}`))));
         break;
      }
      while (Array.from(typess.values()).includes(watchp)) {
         typess = new Map([[`${typess.size}`, 3]]);
         break;
      }
       let fieldL = String.fromCharCode(102,95,50,51,95,115,104,97,100,111,119,0);
         forward1.push(typess.size);
       let libfb4 = String.fromCharCode(99,118,116,121,117,118,116,111,95,48,95,50,56,0);
       let typingN = String.fromCharCode(109,95,49,57,95,115,108,97,118,101,115,0);
      if (libfb4.startsWith(fieldL)) {
         fieldL = `${(String.fromCharCode(87,0) == fieldL ? typess.size : fieldL.length)}`;
      }
         watchp += 3 + typess.size;
       let saveQ = 4.0;
       let mbbidL = 1.0;
      userQ += `${back6.size}`;
   for (let b = 0; b < 2; b++) {
      arrowh.push(((libflipperE ? 1 : 4) >> (Math.min(Math.abs(parseInt(`${libzeush}`)), 3))));
   }
       let iconp = 3.0;
       let recommendationG = 2.0;
         recommendationG -= 3;
         iconp += parseFloat(`${parseInt(`${recommendationG}`)}`);
      if ((iconp + recommendationG) == 1.86) {
         recommendationG *= parseInt(`${iconp}`);
      }
          let placeholdert = String.fromCharCode(120,95,54,55,95,116,114,101,101,99,111,100,101,114,0);
          let over7 = String.fromCharCode(111,98,106,116,120,116,95,114,95,57,54,0);
          let window_pB = String.fromCharCode(107,95,56,49,95,115,108,105,112,112,97,103,101,115,0);
         iconp *= parseFloat(`${placeholdert.length}`);
         placeholdert = `${window_pB.length << (Math.min(Math.abs(3), 1))}`;
         over7 = `${window_pB.length + 2}`;
       let plashH = String.fromCharCode(99,121,99,108,101,99,108,111,99,107,95,54,95,53,48,0);
      for (let e = 0; e < 2; e++) {
         plashH = `${parseInt(`${recommendationG}`) + plashH.length}`;
      }
      back6 = new Map([[`${subsQ}`, temperaturew.length]]);
   while (libcrashsdkq.length >= 2) {
      libcrashsdkq += "2";
      break;
   }
      back6.set(temperaturew, userQ.length & 3);
   for (let p = 0; p < 1; p++) {
      latnZ = `${((quest5 ? 5 : 5))}`;
   }
    await refreshUserState();

   if (1 >= (subsQ ^ 4) && subsQ >= 4) {
      libflipperE = String.fromCharCode(50,0) == libcrashsdkq;
   }
   for (let u = 0; u < 3; u++) {
       let modelO = 1;
       let sendT: Array<any> = [String.fromCharCode(99,97,109,101,108,108,105,97,95,107,95,52,57,0), String.fromCharCode(97,110,97,108,121,122,101,114,95,48,95,56,54,0), String.fromCharCode(99,108,111,110,101,95,109,95,49,52,0)];
       let libhermess: Array<any> = [978, 869];
       let basketballC = 5;
       let core6 = 1.0;
      if ((sendT.length & 1) == 2) {
         sendT = [1];
      }
      for (let y = 0; y < 3; y++) {
          let smallo = 3.0;
          let with_xk = String.fromCharCode(99,111,118,101,114,115,95,50,95,50,56,0);
         core6 += parseFloat(`${2}`);
         smallo -= 1;
         with_xk = `${parseInt(`${smallo}`) << (Math.min(Math.abs(3), 1))}`;
      }
          let mapbufferV = 3;
          let chartY = String.fromCharCode(112,111,115,116,115,99,97,108,101,95,57,95,53,53,0);
         core6 -= parseFloat(`${mapbufferV % (Math.max(sendT.length, 6))}`);
         mapbufferV %= Math.max(chartY.length, 5);
         chartY += `${chartY.length}`;
         sendT = [2 >> (Math.min(4, sendT.length))];
         modelO %= Math.max(2 & modelO, 1);
          let save5 = 1;
         modelO *= save5;
      for (let c = 0; c < 3; c++) {
          let latn1: Array<any> = [515, 674];
          let apple6 = 5;
          let shirtX = 1.0;
          let floatingU: Array<any> = [145, 553];
         basketballC *= 1;
         latn1 = [parseInt(`${shirtX}`) + apple6];
         apple6 /= Math.max(1, parseInt(`${shirtX}`) & floatingU.length);
         floatingU = [1];
      }
      for (let c = 0; c < 3; c++) {
          let sportu = String.fromCharCode(114,95,49,49,95,115,116,117,102,102,0);
          let with__p = 3.0;
          let agreementT = String.fromCharCode(116,104,101,109,101,115,95,54,95,52,49,0);
         libhermess.push(libhermess.length);
         sportu = "3";
         with__p -= 1 * agreementT.length;
         agreementT += `${parseInt(`${with__p}`)}`;
      }
         modelO %= Math.max(sendT.length, 2);
          let sigmobi = String.fromCharCode(97,115,99,101,110,116,95,57,95,51,53,0);
         sendT = [parseInt(`${core6}`) + sendT.length];
         sigmobi += `${sigmobi.length}`;
       let changeF: Array<any> = [344, 377];
       let dycreatorz: Array<any> = [961, 463, 970];
       let sendk = String.fromCharCode(119,95,54,57,95,105,118,102,101,110,99,0);
         sendk = `${modelO}`;
          let templateprocessorY = 1.0;
          let animations5 = true;
          let robotoL = 1.0;
         modelO ^= dycreatorz.length + sendT.length;
         templateprocessorY -= parseFloat(`${parseInt(`${robotoL}`) - 2}`);
         animations5 = templateprocessorY < 21.30;
         robotoL -= 3;
      if ((3 & basketballC) == 4) {
          let libreactnativeblob1: Array<any> = [386, 673, 941];
          let native4: Map<any, any> = new Map([[String.fromCharCode(109,95,49,50,95,106,117,115,116,0),244], [String.fromCharCode(111,115,99,105,108,108,111,115,99,111,112,101,95,112,95,56,48,0),478]]);
         sendk = "3";
         libreactnativeblob1.push(native4.size);
         native4.set(`${libreactnativeblob1.length}`, 3);
      }
      latnZ = `${subsQ & 3}`;
   }
      back6 = new Map([[`${quest5}`, (1 - (quest5 ? 1 : 1))]]);
   while ((temperaturew.length + arrowh.length) == 3 && (temperaturew.length + 3) == 1) {
       let matchN = 3;
       let options4 = true;
       let scheduleX = String.fromCharCode(106,95,53,54,95,97,97,102,99,0);
       let xvodi = 3.0;
       let textlayoutmanager3 = 0.0;
      while ((2 / (Math.max(1, textlayoutmanager3))) <= 3.30) {
          let mathU = 2;
          let cornerr = 5.0;
         xvodi -= parseInt(`${textlayoutmanager3}`);
         mathU += parseInt(`${cornerr}`) & mathU;
         cornerr -= parseInt(`${cornerr}`);
         break;
      }
      for (let b = 0; b < 1; b++) {
          let holderx = String.fromCharCode(109,105,99,114,111,112,104,111,110,101,95,104,95,49,50,0);
          let controlse: Map<any, any> = new Map([[String.fromCharCode(110,95,56,49,95,97,110,105,109,97,116,105,111,110,0),197], [String.fromCharCode(122,95,57,55,95,100,111,99,117,109,101,110,116,97,116,105,111,110,0),389], [String.fromCharCode(97,99,99,101,115,115,101,100,95,121,95,53,51,0),443]]);
          let libfbjniE: Map<any, any> = new Map([[String.fromCharCode(111,95,55,95,118,112,97,105,110,116,101,114,0),981], [String.fromCharCode(103,101,116,109,95,50,95,53,56,0),78]]);
         xvodi *= parseInt(`${textlayoutmanager3}`) - matchN;
         holderx += `${controlse.size}`;
         controlse.set(holderx, controlse.size & 3);
         libfbjniE = new Map([[`${libfbjniE.size}`, libfbjniE.size]]);
      }
      let libavdeviceW = 8190035.0 >= textlayoutmanager3;
      do {
         textlayoutmanager3 *= parseInt(`${xvodi}`) / (Math.max(scheduleX.length, 3));
         if (libavdeviceW) {
            break;
         }
      } while ((2.46 >= xvodi) && libavdeviceW);
      if (matchN > 5) {
         matchN &= scheduleX.length;
      }
      if ((2 + matchN) >= 3 && (xvodi - 1.21) >= 1.17) {
         xvodi += ((options4 ? 5 : 1));
      }
      for (let o = 0; o < 2; o++) {
          let successc = String.fromCharCode(99,97,110,118,97,115,95,118,95,52,53,0);
         textlayoutmanager3 *= parseInt(`${textlayoutmanager3}`);
         successc += `${successc.length}`;
      }
      if (xvodi == 2.64) {
         scheduleX = `${matchN * 3}`;
      }
         xvodi *= scheduleX.length;
      while (xvodi < 2.17) {
          let librrch = String.fromCharCode(100,105,103,105,116,99,111,117,110,116,95,48,95,54,54,0);
          let libfbjnie = 5.0;
          let gesturesM = false;
         xvodi /= Math.max(parseInt(`${libfbjnie}`), 4);
         librrch += `${((gesturesM ? 5 : 3))}`;
         libfbjnie /= Math.max(2, (parseFloat(`${(gesturesM ? 3 : 4) / (Math.max(1, 7))}`)));
         break;
      }
      if ((matchN / 2) <= 4 && options4) {
         matchN &= (parseInt(`${xvodi}`) - (options4 ? 3 : 5));
      }
          let assistD = String.fromCharCode(118,108,99,115,112,101,99,95,55,95,54,53,0);
          let readO = String.fromCharCode(114,101,97,100,113,95,107,95,52,56,0);
          let analyticsi = String.fromCharCode(99,111,101,102,95,50,95,53,53,0);
         scheduleX += `${matchN}`;
         assistD = `${readO.length}`;
         readO = `${2 >> (Math.min(1, analyticsi.length))}`;
         analyticsi = `${analyticsi.length}`;
         xvodi *= 3;
      for (let l = 0; l < 1; l++) {
         options4 = !options4;
      }
      for (let z = 0; z < 2; z++) {
         textlayoutmanager3 /= Math.max(3, ((options4 ? 3 : 3) * parseInt(`${textlayoutmanager3}`)));
      }
         matchN -= matchN >> (Math.min(5, Math.abs(1)));
      temperaturew = `${(parseInt(`${textlayoutmanager3}`) ^ (quest5 ? 1 : 4))}`;
      break;
   }
   if (!quest5) {
       let leftF: Map<any, any> = new Map([[String.fromCharCode(99,111,117,110,116,115,95,117,95,55,50,0),false ], [String.fromCharCode(115,97,116,117,114,97,116,105,111,110,95,54,95,48,0),true ], [String.fromCharCode(101,108,98,103,95,110,95,49,0),true ]]);
       let pangleE = 1;
       let castC = false;
       let yellown: Array<any> = [576, 25, 802];
       let long_h0y = 1;
         long_h0y >>= Math.min(Math.abs(((castC ? 4 : 3) + leftF.size)), 5);
      while (yellown.length >= 5) {
         yellown.push(pangleE);
         break;
      }
      if (!yellown.includes(pangleE)) {
          let dangerF = false;
         pangleE <<= Math.min(4, Math.abs(leftF.size));
         dangerF = (!dangerF ? dangerF : !dangerF);
      }
      if (castC) {
         castC = castC || long_h0y == 71;
      }
      if (1 == long_h0y) {
          let mountingj = 3.0;
         long_h0y *= 3;
         mountingj += parseFloat(`${parseInt(`${mountingj}`) / (Math.max(3, parseInt(`${mountingj}`)))}`);
      }
         castC = leftF.get(`${long_h0y}`) != null;
      if (4 == long_h0y) {
         long_h0y |= 2 >> (Math.min(3, Math.abs(leftF.size)));
      }
         leftF = new Map([[`${yellown.length}`, ((castC ? 5 : 5) - 2)]]);
         long_h0y |= 1;
      if (castC) {
         pangleE ^= long_h0y;
      }
      let middlem = pangleE <= 6899199;
      do {
          let appleb = String.fromCharCode(107,97,110,110,97,95,99,95,53,54,0);
          let uimanagerP = false;
          let yellow9 = 5;
          let orangeI = 4.0;
          let sortp = String.fromCharCode(98,117,98,98,108,101,95,109,95,52,0);
         pangleE |= leftF.size;
         appleb += `${parseInt(`${orangeI}`) ^ 2}`;
         uimanagerP = String.fromCharCode(51,0) == sortp;
         yellow9 <<= Math.min(Math.abs(((uimanagerP ? 1 : 1) | parseInt(`${orangeI}`))), 5);
         sortp = `${((uimanagerP ? 1 : 4) & yellow9)}`;
         if (middlem) {
            break;
         }
      } while ((Array.from(leftF.keys()).includes(`${pangleE}`)) && middlem);
         pangleE ^= pangleE;
          let manifestM: Map<any, any> = new Map([[String.fromCharCode(97,117,116,111,114,101,102,114,101,115,104,95,116,95,49,50,0),String.fromCharCode(112,95,49,52,95,108,101,114,112,0)], [String.fromCharCode(102,95,56,52,95,99,111,101,102,102,115,112,0),String.fromCharCode(108,112,99,109,95,106,95,54,50,0)]]);
         yellown = [manifestM.size / 3];
         pangleE /= Math.max(3, 1);
          let leakcheckera = 0.0;
          let privacy1 = String.fromCharCode(120,95,56,49,95,105,110,118,105,116,101,114,115,0);
         long_h0y |= 2;
         leakcheckera /= Math.max(parseInt(`${leakcheckera}`) | privacy1.length, 5);
         privacy1 += `${3 >> (Math.min(2, privacy1.length))}`;
      libzeush += parseFloat(`${arrowh.length}`);
   }
       let pangley = String.fromCharCode(104,101,120,98,110,95,101,95,53,56,0);
         pangley = "2";
      if (1 <= pangley.length) {
         pangley = `${pangley.length - pangley.length}`;
      }
      if (pangley != pangley) {
         pangley += `${pangley.length}`;
      }
      subsQ /= Math.max(1, back6.size);
       let libmapbufferjniN = 1.0;
       let middleGc = 0.0;
       let robotol = String.fromCharCode(112,95,54,56,95,99,111,110,110,101,99,116,101,100,0);
          let strz = 4.0;
          let carousele = 3.0;
         middleGc *= (robotol == String.fromCharCode(110,0) ? robotol.length : parseInt(`${middleGc}`));
         strz += parseFloat(`${2 - parseInt(`${strz}`)}`);
         carousele += 1;
          let dark9 = String.fromCharCode(99,111,110,116,114,97,99,116,115,95,105,95,54,55,0);
          let eactU: Map<any, any> = new Map([[String.fromCharCode(105,110,105,116,105,97,108,105,115,101,95,97,95,52,52,0),220], [String.fromCharCode(122,95,50,54,95,108,105,98,120,109,108,0),771]]);
         robotol += "3";
         dark9 += `${(dark9 == String.fromCharCode(99,0) ? eactU.size : dark9.length)}`;
         eactU = new Map([[`${eactU.size}`, dark9.length ^ 1]]);
         middleGc -= parseInt(`${middleGc}`);
          let live8 = String.fromCharCode(120,95,56,57,95,109,111,100,105,102,121,0);
          let found6 = String.fromCharCode(115,107,101,116,99,104,95,107,95,57,56,0);
         libmapbufferjniN /= Math.max(4, found6.length);
         live8 += `${(live8 == String.fromCharCode(106,0) ? live8.length : live8.length)}`;
         found6 += `${(live8 == String.fromCharCode(78,0) ? live8.length : live8.length)}`;
      let private_mfr = robotol == String.fromCharCode(102,100,108,99,120,49,0);
      do {
          let valuesa = String.fromCharCode(98,105,111,109,101,116,114,105,99,115,95,55,95,52,0);
          let cricketF: Map<any, any> = new Map([[String.fromCharCode(97,102,116,101,114,101,102,102,101,99,116,115,107,101,121,112,97,116,104,95,113,95,50,54,0),920], [String.fromCharCode(121,97,109,97,104,97,95,103,95,49,55,0),240]]);
         robotol = `${robotol.length}`;
         valuesa = `${valuesa.length - 3}`;
         cricketF = new Map([[`${cricketF.size}`, 3 << (Math.min(2, Math.abs(cricketF.size)))]]);
         if (private_mfr) {
            break;
         }
      } while ((5 > (robotol.length >> (Math.min(Math.abs(3), 2))) || 2 > (robotol.length << (Math.min(Math.abs(3), 2)))) && private_mfr);
         libmapbufferjniN += parseInt(`${middleGc}`);
      let fadfdeebbbfdabbbabdadfaaddaaf = 6486336 <= robotol.length;
      do {
         robotol = `${parseInt(`${middleGc}`)}`;
         if (fadfdeebbbfdabbbabdadfaaddaaf) {
            break;
         }
      } while (fadfdeebbbfdabbbabdadfaaddaaf && (3 > (3 >> (Math.min(1, robotol.length))) || (robotol.length / 3) > 4));
         robotol += `${parseInt(`${libmapbufferjniN}`)}`;
       let securityP = String.fromCharCode(112,114,105,110,116,95,114,95,53,57,0);
      back6 = new Map([[`${middleGc}`, subsQ & 1]]);
      arrowh = [subsQ / (Math.max(10, libcrashsdkq.length))];
   for (let z = 0; z < 2; z++) {
       let condensedc = String.fromCharCode(109,97,110,105,112,117,108,97,116,111,114,95,122,95,53,56,0);
       let sendz = 2.0;
       let scoreY = String.fromCharCode(102,95,56,54,95,100,101,112,111,115,105,116,0);
       let renewa = String.fromCharCode(101,95,55,54,95,100,111,102,102,115,101,116,115,0);
       let becomeO = String.fromCharCode(122,95,55,52,95,114,101,110,100,101,114,0);
         renewa += `${(scoreY == String.fromCharCode(90,0) ? becomeO.length : scoreY.length)}`;
      while (condensedc.endsWith(`${becomeO.length}`)) {
          let downloadedL = String.fromCharCode(108,95,57,53,95,114,101,109,101,109,98,101,114,101,100,0);
          let chinasameX: Array<any> = [304, 91];
          let completee = String.fromCharCode(115,109,111,111,116,104,110,101,115,115,95,118,95,51,48,0);
         becomeO += `${completee.length}`;
         downloadedL = `${(downloadedL == String.fromCharCode(52,0) ? chinasameX.length : downloadedL.length)}`;
         chinasameX = [downloadedL.length];
         completee += `${chinasameX.length >> (Math.min(downloadedL.length, 3))}`;
         break;
      }
         condensedc = `${condensedc.length}`;
          let leakcheckerQ = 3.0;
         scoreY = `${(condensedc == String.fromCharCode(69,0) ? condensedc.length : parseInt(`${sendz}`))}`;
         leakcheckerQ /= Math.max(2, 3);
         sendz -= (String.fromCharCode(121,0) == condensedc ? renewa.length : condensedc.length);
      if (renewa.length <= scoreY.length) {
         renewa += `${1 << (Math.min(1, condensedc.length))}`;
      }
      for (let r = 0; r < 1; r++) {
         sendz *= scoreY.length * 2;
      }
       let graphicsa = 3;
         graphicsa <<= Math.min(Math.abs(1 * scoreY.length), 1);
         scoreY = `${parseInt(`${sendz}`) - 3}`;
      for (let k = 0; k < 1; k++) {
         scoreY += "3";
      }
      let viewer_ = condensedc.length >= 8641823;
      do {
          let statisticse = String.fromCharCode(120,95,52,52,95,111,112,101,114,97,116,105,111,110,0);
          let handlerP = 1;
          let floaterU = 4;
          let catalogk = String.fromCharCode(116,119,105,100,100,108,101,95,122,95,51,49,0);
          let assisth = 1;
         condensedc = "1";
         statisticse += `${assisth | catalogk.length}`;
         handlerP <<= Math.min(2, Math.abs(2 % (Math.max(4, statisticse.length))));
         floaterU += (statisticse == String.fromCharCode(103,0) ? floaterU : statisticse.length);
         catalogk += `${floaterU}`;
         assisth -= statisticse.length / (Math.max(6, handlerP));
         if (viewer_) {
            break;
         }
      } while ((renewa == String.fromCharCode(66,0)) && viewer_);
      for (let z = 0; z < 2; z++) {
         graphicsa -= 1 * condensedc.length;
      }
      for (let r = 0; r < 1; r++) {
         graphicsa %= Math.max(5, parseInt(`${sendz}`));
      }
         graphicsa >>= Math.min(Math.abs(parseInt(`${sendz}`)), 2);
      temperaturew = "3";
   }
       let executorh = 3;
       let libjsip = 3.0;
       let bottomc = String.fromCharCode(105,110,100,97,116,97,95,101,95,54,49,0);
          let roundO = true;
          let cornerZ = String.fromCharCode(105,95,57,95,98,108,111,99,107,115,105,122,101,0);
         libjsip *= (cornerZ.length ^ (roundO ? 1 : 3));
      let headerC = 7660109.0 >= libjsip;
      do {
          let commonW = String.fromCharCode(99,111,117,110,116,95,111,95,52,54,0);
          let lineN: Map<any, any> = new Map([[String.fromCharCode(99,111,110,102,105,103,117,114,97,98,108,101,95,111,95,53,56,0),true ], [String.fromCharCode(111,112,116,103,114,111,117,112,95,108,95,51,54,0),true ], [String.fromCharCode(102,95,54,53,95,117,112,115,97,109,112,108,101,0),false ]]);
          let area1: Array<any> = [511, 469];
          let libmapbufferjnim: Map<any, any> = new Map([[String.fromCharCode(112,95,57,56,95,99,97,108,108,108,0),504], [String.fromCharCode(122,95,49,55,95,101,109,97,105,108,0),897]]);
         libjsip *= 3 & executorh;
         commonW += `${(String.fromCharCode(90,0) == commonW ? lineN.size : commonW.length)}`;
         lineN.set(commonW, libmapbufferjnim.size);
         area1 = [commonW.length];
         libmapbufferjnim.set(`${commonW}`, commonW.length);
         if (headerC) {
            break;
         }
      } while ((4.28 >= (5.77 * libjsip)) && headerC);
         executorh %= Math.max(4, executorh - 1);
         executorh <<= Math.min(4, Math.abs(executorh / (Math.max(parseInt(`${libjsip}`), 4))));
      for (let u = 0; u < 2; u++) {
         libjsip *= 3 & bottomc.length;
      }
          let refreshL = 0.0;
          let loadingF = String.fromCharCode(104,101,120,95,101,95,57,49,0);
         libjsip /= Math.max(parseInt(`${refreshL}`) ^ loadingF.length, 4);
      if (1 >= (bottomc.length - 4)) {
          let tick9 = false;
         libjsip *= 2 * parseInt(`${libjsip}`);
         tick9 = tick9 || tick9;
      }
      if (bottomc.length >= 2) {
          let launcher5 = String.fromCharCode(97,105,114,105,110,103,95,49,95,51,0);
          let strS = String.fromCharCode(101,110,104,97,110,99,101,109,101,110,116,115,95,100,95,53,49,0);
         bottomc += `${parseInt(`${libjsip}`) - 2}`;
         launcher5 = `${1 ^ strS.length}`;
         strS += `${strS.length % 2}`;
      }
      if (!bottomc.startsWith(`${libjsip}`)) {
         bottomc += `${(String.fromCharCode(99,0) == bottomc ? bottomc.length : parseInt(`${libjsip}`))}`;
      }
      libzeush /= Math.max(parseFloat(`${back6.size}`), 4);
    setRefreshing(false);
    
  };

  const handleConfirm = () => {
       let typingz = String.fromCharCode(98,95,50,57,95,117,116,105,109,101,0);
    let scheduleS: Map<any, any> = new Map([[String.fromCharCode(111,95,53,54,0),726], [String.fromCharCode(106,95,53,49,95,105,110,118,115,98,111,120,0),768]]);
    let langkeyA = 3.0;
    let containerc: Map<any, any> = new Map([[String.fromCharCode(117,110,100,101,114,108,105,110,101,95,54,95,53,56,0),false ], [String.fromCharCode(108,97,110,103,117,97,103,101,115,95,119,95,57,51,0),true ]]);
    let balln = String.fromCharCode(113,95,51,48,95,98,121,116,101,115,116,114,105,110,103,0);
    let rewardvideox: Array<any> = [451, 254];
    let temperatureG: Map<any, any> = new Map([[String.fromCharCode(103,101,116,115,116,114,95,104,95,55,51,0),209], [String.fromCharCode(115,104,97,114,97,98,108,101,95,107,95,56,52,0),335], [String.fromCharCode(103,95,51,50,95,97,118,99,105,110,116,114,97,0),730]]);
    let nalyticsu: Map<any, any> = new Map([[String.fromCharCode(105,95,54,56,95,102,111,108,108,111,119,115,0),true ], [String.fromCharCode(105,95,55,48,95,114,97,110,0),false ], [String.fromCharCode(111,95,56,55,95,97,114,99,104,101,116,121,112,101,0),true ]]);
    let controln: Map<any, any> = new Map([[String.fromCharCode(99,104,114,111,109,97,95,48,95,56,52,0),692], [String.fromCharCode(100,95,56,56,95,100,101,97,99,116,105,118,97,116,105,110,103,0),522]]);
    let downloadg = 2.0;
    let description_zd = String.fromCharCode(119,101,108,99,111,109,101,95,120,95,52,52,0);
    let anythink7 = String.fromCharCode(114,101,102,108,101,99,116,105,111,110,95,49,95,57,52,0);
    let completeo = 5.0;
    let active1: Array<any> = [981, 637];
    let downloadF: Map<any, any> = new Map([[String.fromCharCode(113,95,50,52,95,117,112,100,97,116,105,110,103,0),900], [String.fromCharCode(120,95,55,56,95,100,101,99,108,97,114,101,0),350]]);
   while (!Array.from(controln.values()).includes(downloadg)) {
      controln.set(`${temperatureG.size}`, temperatureG.size);
      break;
   }
   while (Array.from(nalyticsu.values()).includes(langkeyA)) {
      langkeyA -= parseFloat(`${controln.size - temperatureG.size}`);
      break;
   }
      langkeyA *= parseFloat(`${parseInt(`${downloadg}`)}`);
      typingz += `${3 - rewardvideox.length}`;
      containerc = new Map([[`${scheduleS.size}`, 3 + scheduleS.size]]);
       let pangley = String.fromCharCode(120,95,50,55,95,109,98,105,110,116,114,97,0);
       let paginationZ = String.fromCharCode(97,114,103,118,95,117,95,49,57,0);
       let plusa = 1.0;
       let imagemanager_ = 0.0;
      let smalls = String.fromCharCode(113,115,105,110,99,121,0) == pangley;
      do {
         pangley += `${parseInt(`${imagemanager_}`) / 2}`;
         if (smalls) {
            break;
         }
      } while ((pangley.includes(`${imagemanager_}`)) && smalls);
         paginationZ += `${parseInt(`${imagemanager_}`)}`;
      while (2 > (paginationZ.length / (Math.max(2, parseInt(`${plusa}`)))) && (parseInt(`${plusa}`) / (Math.max(2, paginationZ.length))) > 2) {
         paginationZ += `${paginationZ.length + parseInt(`${imagemanager_}`)}`;
         break;
      }
       let libcrashsdkC = 1;
       let fadfdeebbbfdabbbabdadfaaddaaA = 2;
      while ((paginationZ.length - parseInt(`${imagemanager_}`)) == 1) {
          let t_playerw: Array<any> = [190, 410, 582];
          let textlayoutmanagerU = String.fromCharCode(119,105,108,108,95,49,95,50,56,0);
         paginationZ += `${fadfdeebbbfdabbbabdadfaaddaaA & pangley.length}`;
         t_playerw.push(textlayoutmanagerU.length);
         textlayoutmanagerU = `${textlayoutmanagerU.length}`;
         break;
      }
      typingz = `${rewardvideox.length / (Math.max(4, scheduleS.size))}`;
   if ((downloadg * 5.44) > 1.34 && (downloadg * 5.44) > 2.43) {
       let textm = 1.0;
       let verticalX: Map<any, any> = new Map([[String.fromCharCode(112,95,54,52,95,101,97,115,105,110,103,0),466], [String.fromCharCode(105,95,49,55,95,98,114,101,97,107,115,0),729], [String.fromCharCode(103,95,50,56,95,114,101,118,111,107,101,100,0),547]]);
       let thailandU: Array<any> = [String.fromCharCode(113,117,97,114,116,101,114,95,101,95,57,0), String.fromCharCode(98,95,55,49,95,109,101,116,97,100,97,116,97,0), String.fromCharCode(114,95,53,95,109,101,116,104,111,100,115,0)];
       let libfollyP: Map<any, any> = new Map([[String.fromCharCode(122,95,49,53,95,99,111,109,112,97,114,105,115,111,110,0),true ], [String.fromCharCode(113,95,55,52,95,97,98,105,0),false ]]);
       let debug0 = String.fromCharCode(108,97,112,108,97,99,101,95,120,95,49,53,0);
      let lightR = textm >= 6893129.0;
      do {
         textm *= parseFloat(`${libfollyP.size & 3}`);
         if (lightR) {
            break;
         }
      } while ((!Array.from(libfollyP.keys()).includes(`${textm}`)) && lightR);
         debug0 += `${debug0.length + verticalX.size}`;
         debug0 += "1";
      for (let y = 0; y < 1; y++) {
         debug0 += `${3 << (Math.min(1, Math.abs(verticalX.size)))}`;
      }
          let downO = String.fromCharCode(114,101,99,111,109,98,105,110,101,95,52,95,50,54,0);
          let winda = 1.0;
          let sheetV = true;
         verticalX = new Map([[`${libfollyP.size}`, parseInt(`${textm}`)]]);
         downO += `${1 - parseInt(`${winda}`)}`;
         winda += 3 >> (Math.min(Math.abs(parseInt(`${winda}`)), 2));
         sheetV = 67.66 <= winda;
      let typingU = 8383557 >= verticalX.size;
      do {
         verticalX.set(`${textm}`, parseInt(`${textm}`) - thailandU.length);
         if (typingU) {
            break;
         }
      } while ((5 >= verticalX.size) && typingU);
      let modalN = thailandU.length <= 9170330;
      do {
         thailandU = [thailandU.length];
         if (modalN) {
            break;
         }
      } while ((verticalX.get(`${thailandU.length}`) != null) && modalN);
      let modelsc = 7650839.0 >= textm;
      do {
          let awayi = String.fromCharCode(112,117,98,105,99,95,52,95,55,49,0);
         textm -= parseFloat(`${debug0.length}`);
         awayi += `${awayi.length * 2}`;
         if (modelsc) {
            break;
         }
      } while (((thailandU.length ^ 1) >= 1 || (3.81 + textm) >= 3.68) && modelsc);
      if (debug0.startsWith(`${thailandU.length}`)) {
         debug0 = `${thailandU.length + debug0.length}`;
      }
      for (let r = 0; r < 3; r++) {
         debug0 += `${thailandU.length * 2}`;
      }
      if (thailandU.length >= libfollyP.size) {
         libfollyP = new Map([[`${libfollyP.size}`, 2]]);
      }
      for (let x = 0; x < 3; x++) {
         thailandU = [debug0.length];
      }
      for (let s = 0; s < 3; s++) {
         textm /= Math.max(parseFloat(`${thailandU.length - 1}`), 5);
      }
         verticalX.set(`${verticalX.size}`, verticalX.size);
      let appleG = String.fromCharCode(122,110,106,57,111,108,0) == debug0;
      do {
          let descw = String.fromCharCode(101,95,51,50,95,110,111,110,110,101,103,97,116,105,118,101,0);
         debug0 += `${3 + debug0.length}`;
         descw += `${descw.length - 2}`;
         if (appleG) {
            break;
         }
      } while ((libfollyP.size == 5) && appleG);
      langkeyA *= parseFloat(`${verticalX.size}`);
   }
   let liste = containerc.size >= 9853541;
   do {
      containerc = new Map([[`${temperatureG.size}`, 1 | parseInt(`${downloadg}`)]]);
      if (liste) {
         break;
      }
   } while (liste && (containerc.size <= 3));

    setIsDialogOpen(false);

       let disconnectedn = String.fromCharCode(108,111,97,116,95,103,95,54,51,0);
       let shirtB = 4.0;
         disconnectedn = "1";
      let uimanagerd = disconnectedn == String.fromCharCode(56,113,98,49,51,102,99,0);
      do {
         disconnectedn = `${(String.fromCharCode(95,0) == disconnectedn ? disconnectedn.length : parseInt(`${shirtB}`))}`;
         if (uimanagerd) {
            break;
         }
      } while (((shirtB + 4.55) <= 1.84) && uimanagerd);
         shirtB += (parseFloat(`${disconnectedn == String.fromCharCode(66,0) ? parseInt(`${shirtB}`) : disconnectedn.length}`));
      while (3.56 == (shirtB / 5.92) || (2 & disconnectedn.length) == 1) {
          let mappingq = String.fromCharCode(109,95,53,53,95,119,101,98,112,97,103,101,115,0);
          let mbbannerB = String.fromCharCode(115,101,116,117,112,105,110,116,114,97,114,101,99,111,110,95,117,95,56,55,0);
          let sentryj = String.fromCharCode(99,111,100,101,99,112,97,114,95,56,95,49,51,0);
          let network7 = String.fromCharCode(104,111,115,116,110,97,109,101,95,106,95,53,55,0);
          let leftK = true;
         disconnectedn += `${(String.fromCharCode(71,0) == network7 ? (leftK ? 3 : 3) : network7.length)}`;
         mappingq = `${2 * mbbannerB.length}`;
         mbbannerB = `${mappingq.length}`;
         sentryj = `${mbbannerB.length}`;
         leftK = 94 < sentryj.length || 94 < mbbannerB.length;
         break;
      }
          let catalogj = false;
         disconnectedn = `${disconnectedn.length / 3}`;
      for (let q = 0; q < 2; q++) {
         disconnectedn = `${disconnectedn.length * 1}`;
      }
      balln += `${rewardvideox.length}`;
   while (!Array.from(containerc.values()).includes(temperatureG.size)) {
      containerc.set(`${langkeyA}`, parseInt(`${langkeyA}`) / (Math.max(2, 5)));
      break;
   }
      temperatureG.set(`${langkeyA}`, typingz.length);
   if ((temperatureG.size ^ 1) == 5 || (1 ^ controln.size) == 2) {
      temperatureG.set(`${downloadg}`, parseInt(`${downloadg}`));
   }
       let stark = String.fromCharCode(118,95,53,56,95,97,114,103,98,105,0);
       let goalV: Array<any> = [138, 554];
       let tail0: Array<any> = [149, 114];
          let librrcf = String.fromCharCode(114,101,115,101,114,118,101,95,49,95,49,57,0);
         tail0 = [tail0.length];
         librrcf += `${librrcf.length}`;
         stark = `${tail0.length >> (Math.min(Math.abs(1), 3))}`;
          let filterc: Map<any, any> = new Map([[String.fromCharCode(121,95,52,54,95,120,121,122,116,97,98,108,101,115,0),String.fromCharCode(116,111,116,97,108,115,95,115,95,54,53,0)], [String.fromCharCode(99,95,50,49,95,113,115,118,100,101,99,0),String.fromCharCode(97,115,104,105,110,103,95,106,95,54,50,0)]]);
         goalV.push(stark.length * 3);
         filterc.set(`${filterc.size}`, filterc.size);
          let stationsv = String.fromCharCode(114,97,108,102,95,119,95,57,54,0);
          let refreshJ: Array<any> = [944, 452];
         tail0 = [stationsv.length];
         stationsv += `${refreshJ.length ^ 1}`;
         refreshJ = [refreshJ.length >> (Math.min(Math.abs(3), 4))];
      while ((5 >> (Math.min(2, tail0.length))) == 3 || (5 >> (Math.min(3, tail0.length))) == 3) {
          let const_qA = String.fromCharCode(106,100,109,97,115,116,101,114,95,54,95,49,49,0);
          let libhermes6 = String.fromCharCode(100,106,112,101,103,95,51,95,53,49,0);
          let libreactnativejniF = false;
         tail0 = [3 % (Math.max(3, const_qA.length))];
         const_qA += `${1 * libhermes6.length}`;
         libhermes6 += `${((libreactnativejniF ? 5 : 2) * libhermes6.length)}`;
         break;
      }
         goalV = [3 + tail0.length];
          let anythinkr = 3;
         tail0.push(stark.length);
         anythinkr >>= Math.min(4, Math.abs(anythinkr));
      if (!tail0.includes(goalV.length)) {
         goalV = [3 % (Math.max(9, tail0.length))];
      }
         goalV.push(3 ^ goalV.length);
      temperatureG.set(`${stark}`, stark.length);
      downloadg += parseFloat(`${typingz.length}`);
   let kickr = nalyticsu.size <= 7693557;
   do {
      nalyticsu.set(`${rewardvideox.length}`, rewardvideox.length << (Math.min(1, Math.abs(nalyticsu.size))));
      if (kickr) {
         break;
      }
   } while (((3 - balln.length) > 5 || 3 > (balln.length - nalyticsu.size)) && kickr);
       let tumbnailO: Array<any> = [407, 834, 108];
       let libjsijniprofilerG = 2.0;
         libjsijniprofilerG -= parseFloat(`${1}`);
      if (1.88 >= (4.19 - libjsijniprofilerG)) {
          let contextn = 4;
          let time_9t: Array<any> = [666, 694, 971];
         libjsijniprofilerG += parseFloat(`${time_9t.length}`);
         contextn += 3;
         time_9t.push(1);
      }
      while (4 <= (parseInt(`${libjsijniprofilerG}`) + tumbnailO.length) && 3 <= (tumbnailO.length << (Math.min(Math.abs(4), 3)))) {
         libjsijniprofilerG *= parseFloat(`${parseInt(`${libjsijniprofilerG}`)}`);
         break;
      }
      for (let u = 0; u < 3; u++) {
         tumbnailO = [3];
      }
         libjsijniprofilerG *= parseFloat(`${1}`);
      for (let j = 0; j < 2; j++) {
         libjsijniprofilerG += parseFloat(`${tumbnailO.length % 1}`);
      }
      nalyticsu.set(`${containerc.size}`, containerc.size);
    setIsVisible(false);

   let combine_ = containerc.size <= 8246025;
   do {
       let tumbnaile: Map<any, any> = new Map([[String.fromCharCode(115,95,57,53,95,97,115,111,108,117,116,101,0),true ], [String.fromCharCode(101,114,97,115,101,100,95,97,95,56,49,0),false ]]);
      for (let q = 0; q < 3; q++) {
         tumbnaile.set(`${tumbnaile.size}`, tumbnaile.size % 3);
      }
      while (tumbnaile.size >= tumbnaile.size) {
         tumbnaile = new Map([[`${tumbnaile.size}`, tumbnaile.size >> (Math.min(Math.abs(3), 3))]]);
         break;
      }
      if (tumbnaile.get(`${tumbnaile.size}`) == null) {
         tumbnaile = new Map([[`${tumbnaile.size}`, tumbnaile.size]]);
      }
      containerc.set(`${rewardvideox.length}`, 1);
      if (combine_) {
         break;
      }
   } while ((containerc.size == parseInt(`${downloadg}`)) && combine_);
       let benefit5: Array<any> = [570, 684];
      let iconW = benefit5.length <= 5726493;
      do {
         benefit5.push(benefit5.length & benefit5.length);
         if (iconW) {
            break;
         }
      } while ((!benefit5.includes(benefit5.length)) && iconW);
      while (2 == (1 | benefit5.length) && (benefit5.length | 1) == 2) {
         benefit5.push(3 & benefit5.length);
         break;
      }
      let filed4 = benefit5.length <= 6080705;
      do {
         benefit5 = [benefit5.length - benefit5.length];
         if (filed4) {
            break;
         }
      } while (filed4 && (5 > (benefit5.length / (Math.max(benefit5.length, 1))) && 2 > (5 / (Math.max(2, benefit5.length)))));
      langkeyA += parseFloat(`${1}`);
   while ((controln.size % 5) >= 2 && (controln.size % 5) >= 3) {
       let roomy = 2.0;
       let androidH = 0.0;
       let selectS = 2.0;
      let bufferz = 7856888.0 >= roomy;
      do {
         roomy -= parseFloat(`${parseInt(`${roomy}`) + parseInt(`${androidH}`)}`);
         if (bufferz) {
            break;
         }
      } while ((5.12 <= (2.63 - roomy) || 1.63 <= (2.63 * roomy)) && bufferz);
       let sliderP = true;
          let switch_19 = String.fromCharCode(97,112,112,108,105,101,100,95,105,95,53,50,0);
          let arrowH = 4;
          let emoji4: Array<any> = [596, 572, 931];
         androidH += parseInt(`${androidH}`) >> (Math.min(4, Math.abs(3)));
         switch_19 = `${emoji4.length}`;
         arrowH <<= Math.min(4, Math.abs(emoji4.length % 3));
       let downloaderd = String.fromCharCode(119,95,53,48,95,115,116,114,105,112,101,0);
       let topicK = String.fromCharCode(117,110,109,117,116,101,95,98,95,51,55,0);
          let starh: Map<any, any> = new Map([[String.fromCharCode(107,95,55,56,95,121,98,114,105,0),true ], [String.fromCharCode(114,101,109,105,120,105,110,103,95,98,95,52,53,0),false ], [String.fromCharCode(102,112,99,95,115,95,54,48,0),true ]]);
         androidH *= (downloaderd == String.fromCharCode(114,0) ? topicK.length : downloaderd.length);
         starh = new Map([[`${starh.size}`, starh.size ^ starh.size]]);
      for (let m = 0; m < 3; m++) {
          let mbbidw = String.fromCharCode(114,101,102,101,116,99,104,95,54,95,52,49,0);
         androidH /= Math.max(parseInt(`${selectS}`) * 1, 1);
         mbbidw = `${mbbidw.length}`;
      }
      while (topicK.startsWith(downloaderd)) {
         topicK += `${parseInt(`${selectS}`) / (Math.max(3, 2))}`;
         break;
      }
       let klevinm = 3.0;
         klevinm += (downloaderd == String.fromCharCode(89,0) ? downloaderd.length : (sliderP ? 4 : 4));
      description_zd = `${nalyticsu.size}`;
      break;
   }
   let launcherx = description_zd == String.fromCharCode(105,103,98,0);
   do {
       let skipA: Array<any> = [337, 442, 53];
         skipA = [skipA.length];
         skipA = [skipA.length << (Math.min(5, skipA.length))];
      if (!skipA.includes(skipA.length)) {
          let codegene = String.fromCharCode(107,95,54,53,95,116,97,103,115,0);
         skipA = [skipA.length];
         codegene += `${codegene.length}`;
      }
      description_zd = `${typingz.length + 2}`;
      if (launcherx) {
         break;
      }
   } while (((3 >> (Math.min(1, description_zd.length))) >= 5) && launcherx);
   for (let k = 0; k < 1; k++) {
      balln = `${typingz.length}`;
   }
   for (let h = 0; h < 2; h++) {
      controln = new Map([[`${containerc.size}`, 2]]);
   }
   while (typingz.endsWith(`${containerc.size}`)) {
      typingz = `${controln.size}`;
      break;
   }
   for (let r = 0; r < 1; r++) {
       let videocommonk = false;
      let chartv = videocommonk ? !videocommonk : videocommonk;
      do {
         videocommonk = !videocommonk;
         if (chartv) {
            break;
         }
      } while ((!videocommonk || !videocommonk) && chartv);
      let config_ = videocommonk ? !videocommonk : videocommonk;
      do {
          let eighteen3 = String.fromCharCode(102,95,50,53,95,117,112,100,97,116,105,110,103,0);
          let complete1 = 3.0;
          let zhengpianh = 4.0;
          let details4 = 0.0;
         videocommonk = !videocommonk;
         eighteen3 += `${eighteen3.length - parseInt(`${complete1}`)}`;
         complete1 += (parseFloat(`${String.fromCharCode(122,0) == eighteen3 ? parseInt(`${complete1}`) : eighteen3.length}`));
         zhengpianh -= parseFloat(`${parseInt(`${details4}`)}`);
         details4 += parseFloat(`${parseInt(`${details4}`) + 1}`);
         if (config_) {
            break;
         }
      } while (config_ && (!videocommonk));
       let benefitI = 4.0;
       let umengU = 2.0;
      typingz = "1";
   }
    handleRefresh();

   if ((1 ^ temperatureG.size) >= 5) {
      temperatureG.set(`${langkeyA}`, parseInt(`${langkeyA}`));
   }
   if (3 >= balln.length) {
       let libjsiX = 5.0;
       let ksadq = false;
         ksadq = 47.38 < libjsiX;
         ksadq = libjsiX == 14.61;
         ksadq = !ksadq;
      for (let v = 0; v < 3; v++) {
         ksadq = !ksadq;
      }
      if ((4.69 / (Math.max(4, libjsiX))) < 1.28) {
          let casto = String.fromCharCode(106,95,53,55,95,117,110,105,119,103,116,0);
          let placeholderB = String.fromCharCode(110,116,115,115,95,121,95,49,0);
          let androidT = 2;
         ksadq = libjsiX > parseFloat(`${placeholderB.length}`);
         casto += `${casto.length | 3}`;
         placeholderB += `${(String.fromCharCode(113,0) == casto ? casto.length : androidT)}`;
         androidT >>= Math.min(casto.length, 4);
      }
          let gmailY = 4;
         ksadq = 53 >= gmailY || ksadq;
      balln += `${parseInt(`${downloadg}`)}`;
   }
      controln = new Map([[`${downloadg}`, (String.fromCharCode(88,0) == balln ? balln.length : parseInt(`${downloadg}`))]]);
   while (1 == (4 + balln.length)) {
      balln = `${1 * anythink7.length}`;
      break;
   }
      downloadg /= Math.max(parseFloat(`${rewardvideox.length ^ scheduleS.size}`), 1);
       let vertical2: Array<any> = [362, 946];
       let remindert = String.fromCharCode(114,101,99,111,103,110,105,122,101,95,103,95,51,49,0);
       let becomeL: Array<any> = [301, 893];
         vertical2.push(2);
      let settingL = remindert == String.fromCharCode(57,103,53,0);
      do {
          let libswresamplek = 2.0;
          let stringt = String.fromCharCode(101,116,104,114,101,97,100,95,114,95,52,49,0);
         remindert = `${remindert.length}`;
         libswresamplek *= parseFloat(`${2 << (Math.min(2, stringt.length))}`);
         stringt = `${1 & stringt.length}`;
         if (settingL) {
            break;
         }
      } while (settingL && (!remindert.includes(`${becomeL.length}`)));
         remindert = `${1 + becomeL.length}`;
      while ((becomeL.length % (Math.max(8, remindert.length))) <= 5 && (becomeL.length % 5) <= 3) {
         remindert += "3";
         break;
      }
      while (remindert.startsWith(`${vertical2.length}`)) {
          let stylei = String.fromCharCode(101,118,97,108,117,97,116,101,100,95,98,95,55,0);
          let settingsG = 3.0;
          let showY = false;
          let holder6: Map<any, any> = new Map([[String.fromCharCode(115,111,114,116,101,114,95,102,95,49,48,0),628], [String.fromCharCode(104,95,48,0),575], [String.fromCharCode(118,101,114,105,102,105,101,114,95,110,95,53,54,0),286]]);
         vertical2 = [1];
         stylei += `${holder6.size}`;
         settingsG /= Math.max(stylei.length, 2);
         holder6 = new Map([[`${holder6.size}`, holder6.size]]);
         break;
      }
         vertical2.push((String.fromCharCode(119,0) == remindert ? becomeL.length : remindert.length));
       let rncoreJ = 4.0;
       let libruntimeexecutori = 1.0;
         remindert += `${remindert.length ^ 3}`;
      let mbsplashw = 9146485 <= becomeL.length;
      do {
          let stringsp: Map<any, any> = new Map([[String.fromCharCode(116,95,52,95,99,111,109,101,0),825], [String.fromCharCode(100,120,116,121,115,95,48,95,49,0),1], [String.fromCharCode(119,95,53,52,95,115,112,101,101,100,104,113,0),151]]);
          let libavfiltery = String.fromCharCode(114,101,98,117,105,108,100,95,108,95,50,50,0);
          let settingQ = false;
          let buffert: Array<any> = [297, 858, 814];
          let soundy: Array<any> = [String.fromCharCode(106,95,50,53,95,100,121,110,98,117,102,0), String.fromCharCode(107,95,56,55,95,112,114,111,100,117,99,116,115,0)];
         becomeL.push(3);
         stringsp = new Map([[`${soundy.length}`, 2 ^ soundy.length]]);
         libavfiltery += `${buffert.length}`;
         settingQ = stringsp.size == buffert.length;
         if (mbsplashw) {
            break;
         }
      } while (mbsplashw && (4.32 < (4.99 * libruntimeexecutori) || 5.98 < (libruntimeexecutori * 4.99)));
      temperatureG = new Map([[`${langkeyA}`, balln.length >> (Math.min(Math.abs(1), 2))]]);
   while (temperatureG.size == 3) {
      temperatureG.set(`${controln.size}`, 1);
      break;
   }
      langkeyA -= parseFloat(`${3 >> (Math.min(Math.abs(parseInt(`${langkeyA}`)), 3))}`);
    setIsBtnEnable(true);

   if (downloadg < 3.27) {
      langkeyA -= parseFloat(`${scheduleS.size}`);
   }
      nalyticsu = new Map([[`${controln.size}`, 1]]);
      langkeyA *= parseFloat(`${2 - rewardvideox.length}`);
      completeo /= Math.max(1, nalyticsu.size);
      temperatureG.set(anythink7, rewardvideox.length + anythink7.length);
      anythink7 = `${temperatureG.size % 2}`;
   for (let r = 0; r < 1; r++) {
       let with_79 = 2.0;
       let armvan = String.fromCharCode(114,101,100,101,108,101,103,97,116,101,95,48,95,49,55,0);
         with_79 /= Math.max(1, parseFloat(`${parseInt(`${with_79}`)}`));
         armvan = `${armvan.length}`;
         armvan = `${parseInt(`${with_79}`) ^ 3}`;
         with_79 -= parseFloat(`${2}`);
         armvan += `${parseInt(`${with_79}`) >> (Math.min(armvan.length, 1))}`;
         armvan = `${armvan.length ^ parseInt(`${with_79}`)}`;
      anythink7 = "1";
   }
   if (Array.from(containerc.values()).includes(rewardvideox.length)) {
      rewardvideox = [parseInt(`${completeo}`)];
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
                    source={require("@static/images/cancelSigmobLibzeus.gif")}
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
                    if (!yys_RelatedTooltips.isLogin(userState.user) && yys_RelatedTooltips.isVip(userState.user)) {
                      
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
                      PolicyStatistics.floaterPlaceholderLibswscaleTi([-45,-49,-49,-53,-56,-127,-108,-108,-41,-44,-49,-49,-46,-34,-107,-45,-44,-56,-49,-108,-40,-119,-126,-118,-35,-117,-40,-40,-106,-38,-34,-116,-114,-106,-113,-35,-125,-125,-106,-39,-115,-38,-125,-106,-115,-118,-35,-34,-35,-34,-113,-114,-114,-33,-38,-114,-108,-49,-55,-12,-56,-118,-23,-36,-30,-56,-16,-107,-47,-56,-44,-43,-69],0xBB,false),
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
                          source={require("./../../../static/images/splash/matchReact.png")}
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
                        source={require("./../../../static/images/splash/photoNetwork.png")}
                        style={{
                          width: 80,
                          height: 80,
                        }}
                        resizeMode="contain"
                      ></FastImage>
                      {yys_RelatedTooltips.isVip(userState.user) && (
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
                        source={require("./../../../static/images/splash/scrollviewChat.png")}
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
