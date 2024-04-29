

class HomeGemfileBrightness {
    static injuryCheckboxSingaporeCarouse = (contents: [number], key: number, hasEmoji: boolean) => {
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
import ScreenContainer from "../../components/container/tt_backward";
import { RootStackScreenProps } from "@type/tt_temperature";
import {
  useFocusEffect,
  useNavigation,
  useTheme,
} from "@react-navigation/native";
import { ttOrange } from "@redux/tt_updates_bottom";

import TitleWithBackButtonHeader from "../../components/header/tt_typing_tail_header";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/tt_spec_download";
import { updateUserAuth } from "@redux/actions/tt_topon";
import { TouchableOpacity } from "react-native";
import NoConnection from "../../components/common/tt_fast";
import FastImage from "react-native-fast-image";
import {
  APP_NAME_CONST,
  IAP_TYPE,
  IS_ANDROID,
  IS_IOS,
  SUBSCRIPTION_TYPE,
  UMENG_CHANNEL,
  VIP_PROMOTION_COUNTDOWN_MINUTE,
} from "@utility/tt_trophy_cross";
import {
  setShowEventSplashData,
  showLoginAction,
  setShowEventSplash,
  setShowPromotionDialog,
  setShowGuestPurchaseSuccess,
  setEventSplashLastPageViewTime,
} from "@redux/actions/tt_copy_heji";
import { ttGesturesReferrer, ttTramini } from "@api";
import WebView from "react-native-webview";
import { ttConfigRecommendation } from "../../../tt_copy_floater";
import {
  membershipModel,
  promoMembershipModel,
  zfModel,
} from "@type/tt_combined_application";
import { Dialog } from "@rneui/themed";
import { InAppBrowser } from "react-native-inappbrowser-reborn";
import { VipDialog } from "../../components/vip/tt_anner";
import SpinnerOverlay from "../../components/modal/tt_mode_core";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { isAndroid } from "react-native-iap/lib/typescript/src/internal";
import tt_humidity_guide from "../../../Umeng/tt_humidity_guide";
import { err } from "react-native-svg/lib/typescript/xml";
import CarouselPagination from "../../components/container/tt_minivod_combine";
import { screenModel } from "@type/tt_twitter_data";
import LinearGradient from "react-native-linear-gradient";
import SplashCard from "../../components/common/tt_combined";
import Carousel from "react-native-reanimated-carousel";
import { showToast } from "../../Sports/utility/tt_sans";
import CloseButton from "@static/images/downloadedHolderCondensed.svg";
import LottieView from "lottie-react-native";
const iap_skus = ["yingshi_vip_1_month", "yingshi_vip_12_months"];
const subs_skus = [
  "vip_1_month_subscription",
  "vip_3_month_subscription",
  "vip_12_month_subscription",
];

import Tick from "@static/images/splash/progressUnread.svg";
import Tick1 from "@static/images/splash/castingPrivilegeMode.svg";
import Tick2 from "@static/images/splash/kuaishouGrayDialog.svg";
import { ttEntry } from "@redux/reducers/tt_dialog_rewind";
import { ttBaiduNewinterstitial } from "@redux/reducers/tt_center";
import { ttGoal } from "@redux/reducers/tt_selected";
import Video from "react-native-video";
import { ttFast } from "@models/tt_stations_right";

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

  const userState = useSelector<ttGoal>('userReducer');

  const settingsReducer: ttBaiduNewinterstitial = useAppSelector(
    ({ settingsReducer }: ttOrange) => settingsReducer
  );

  const carouselRef = useRef<any>();
  const [width, setWidth] = useState(Dimensions.get("window").width);
  const [height, setHeight] = useState(Dimensions.get("window").height);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLastShown, setIsLastShown] = useState(false);
  const dispatch = useAppDispatch();

  const backgroundState = useSelector<ttEntry>("backgroundReducer");
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
       let analytics5 = String.fromCharCode(107,95,56,50,95,101,115,116,105,109,97,116,101,0);
    let gmail3: Array<any> = [849, 398];
    let catagoryB = 2.0;
    let kick5 = true;
    let shootm = 5.0;
    let nextn = false;
    let searchW: Array<any> = [34, 196, 514];
    let searchE = String.fromCharCode(100,101,99,114,121,112,116,95,49,95,53,57,0);
    let themep = String.fromCharCode(112,114,105,111,114,105,116,105,101,115,95,51,95,49,55,0);
    let orangeC = String.fromCharCode(98,111,116,95,109,95,52,51,0);
    let castU: Map<any, any> = new Map([[String.fromCharCode(115,112,101,99,115,95,56,95,56,55,0),false ], [String.fromCharCode(122,95,50,55,95,101,115,100,115,0),false ], [String.fromCharCode(104,101,97,100,112,104,111,110,101,95,102,95,50,52,0),true ]]);
    let time_qp8 = 4.0;
    let balll = String.fromCharCode(102,105,110,100,95,110,95,50,55,0);
    let chart8 = 1.0;
    let borderlessP: Array<any> = [397, 770, 820];
    let navigationO = String.fromCharCode(99,95,57,56,95,110,101,105,103,104,98,111,117,114,0);
      orangeC += `${gmail3.length}`;
   while (2 > castU.size) {
      castU = new Map([[`${nextn}`, (String.fromCharCode(118,0) == searchE ? searchE.length : (nextn ? 1 : 4))]]);
      break;
   }
      kick5 = gmail3.includes(kick5);
   while (2 > (gmail3.length / 2)) {
      catagoryB /= Math.max(4, parseFloat(`${analytics5.length}`));
      break;
   }
       let usernamee: Map<any, any> = new Map([[String.fromCharCode(98,95,50,57,95,109,101,109,111,114,121,98,117,102,102,101,114,0),440], [String.fromCharCode(108,101,97,115,101,95,51,95,56,53,0),129]]);
      let previewF = 9578397 >= usernamee.size;
      do {
          let analyticsD = 5.0;
          let utilsp = String.fromCharCode(99,95,56,50,95,110,101,105,103,104,98,111,114,0);
          let trophy6 = String.fromCharCode(112,108,97,121,103,114,111,117,110,100,95,103,95,54,0);
         usernamee = new Map([[`${usernamee.size}`, trophy6.length / (Math.max(1, 7))]]);
         analyticsD += parseInt(`${analyticsD}`) % (Math.max(utilsp.length, 6));
         utilsp = `${(utilsp == String.fromCharCode(65,0) ? utilsp.length : parseInt(`${analyticsD}`))}`;
         trophy6 = `${(String.fromCharCode(119,0) == utilsp ? utilsp.length : parseInt(`${analyticsD}`))}`;
         if (previewF) {
            break;
         }
      } while ((Array.from(usernamee.values()).includes(usernamee.size)) && previewF);
         usernamee.set(`${usernamee.size}`, 3 >> (Math.min(3, Math.abs(usernamee.size))));
         usernamee.set(`${usernamee.size}`, usernamee.size | usernamee.size);
      castU = new Map([[`${searchW.length}`, (String.fromCharCode(77,0) == analytics5 ? analytics5.length : searchW.length)]]);
   let recommendationP = 7274818.0 <= shootm;
   do {
      shootm *= searchE.length;
      if (recommendationP) {
         break;
      }
   } while (recommendationP && (!themep.startsWith(`${shootm}`)));
   if (orangeC.length >= searchW.length) {
       let e_viewx = 2.0;
       let traminiZ = 3;
         traminiZ *= parseInt(`${e_viewx}`);
         e_viewx *= parseFloat(`${traminiZ}`);
      let reducerk = 5251707.0 <= e_viewx;
      do {
          let dropdownE = String.fromCharCode(116,105,99,107,101,114,115,95,107,95,51,0);
         e_viewx += parseFloat(`${traminiZ & dropdownE.length}`);
         if (reducerk) {
            break;
         }
      } while (((traminiZ - e_viewx) >= 2.16) && reducerk);
      if (3 <= (traminiZ << (Math.min(Math.abs(2), 1)))) {
         traminiZ -= parseInt(`${e_viewx}`) << (Math.min(1, Math.abs(traminiZ)));
      }
          let scorec = String.fromCharCode(99,95,50,50,95,100,109,97,99,0);
          let videocommonX = String.fromCharCode(100,95,50,51,95,108,111,110,103,110,111,105,115,101,0);
          let klevinX = String.fromCharCode(119,95,55,55,95,118,101,114,105,102,105,97,116,105,111,110,0);
         e_viewx /= Math.max(parseFloat(`${klevinX.length}`), 2);
         scorec += `${2 | videocommonX.length}`;
         videocommonX = `${3 ^ videocommonX.length}`;
         klevinX += "1";
      let greenm = traminiZ >= 8741402;
      do {
         traminiZ %= Math.max(4, 3);
         if (greenm) {
            break;
         }
      } while (greenm && (1.54 > (e_viewx - 2.92)));
      searchW = [parseInt(`${time_qp8}`)];
   }
   while (themep != String.fromCharCode(103,0) && 5 > analytics5.length) {
      analytics5 = `${parseInt(`${time_qp8}`) % (Math.max(gmail3.length, 3))}`;
      break;
   }

    const state = await NetInfo.fetch();

   let gesturesj = 7306570 <= castU.size;
   do {
      castU.set(`${searchE}`, castU.size - searchE.length);
      if (gesturesj) {
         break;
      }
   } while (((5 % (Math.max(2, castU.size))) <= 4) && gesturesj);
   let sportx = 6204937 >= orangeC.length;
   do {
       let dplusN: Map<any, any> = new Map([[String.fromCharCode(115,116,97,108,101,95,53,95,51,48,0),String.fromCharCode(108,95,57,56,95,100,101,113,117,101,117,101,100,0)], [String.fromCharCode(108,111,116,116,105,101,112,97,114,115,101,114,95,118,95,55,57,0),String.fromCharCode(99,95,55,56,95,118,97,114,105,97,110,99,101,0)], [String.fromCharCode(102,97,99,116,95,120,95,50,49,0),String.fromCharCode(101,114,114,108,111,103,95,117,95,57,51,0)]]);
       let current0 = true;
       let crossC = String.fromCharCode(116,105,109,101,105,110,116,101,114,118,97,108,95,99,95,57,51,0);
          let referrerh = 4;
          let whatsappp = String.fromCharCode(101,95,52,95,114,101,110,100,101,114,97,98,108,101,0);
          let pointo: Map<any, any> = new Map([[String.fromCharCode(120,95,57,95,111,110,116,101,120,116,0),true ], [String.fromCharCode(111,95,54,53,95,119,105,110,100,111,119,0),true ], [String.fromCharCode(115,116,111,112,101,100,95,115,95,57,57,0),true ]]);
         dplusN.set(`${referrerh}`, referrerh);
         whatsappp += `${(String.fromCharCode(103,0) == whatsappp ? whatsappp.length : pointo.size)}`;
         pointo.set(whatsappp, 3 % (Math.max(8, pointo.size)));
         current0 = crossC == String.fromCharCode(99,0);
         crossC += `${dplusN.size % (Math.max(2, crossC.length))}`;
      while (!current0 || (dplusN.size & 2) < 4) {
          let hoverr: Map<any, any> = new Map([[String.fromCharCode(97,95,50,51,95,100,121,108,105,98,115,0),159], [String.fromCharCode(112,111,105,110,116,115,95,114,95,52,55,0),947], [String.fromCharCode(105,95,52,51,95,101,109,111,106,105,115,0),954]]);
          let auto__Q: Array<any> = [String.fromCharCode(103,101,110,101,114,97,108,105,122,101,100,116,105,109,101,95,102,95,57,50,0), String.fromCharCode(97,95,56,54,95,103,102,109,117,108,0), String.fromCharCode(97,120,105,120,95,109,95,55,51,0)];
         dplusN = new Map([[`${hoverr.size}`, 3]]);
         hoverr.set(`${auto__Q.length}`, auto__Q.length);
         break;
      }
       let anner9 = String.fromCharCode(122,95,57,49,95,115,117,98,116,97,115,107,0);
       let progressU = String.fromCharCode(107,95,50,49,95,108,105,115,116,101,110,0);
      if (crossC.length >= progressU.length) {
         crossC += "2";
      }
       let paginationW = String.fromCharCode(114,97,116,101,99,111,110,116,114,111,108,95,107,95,51,48,0);
       let applek = String.fromCharCode(116,104,101,110,97,98,108,101,95,106,95,54,56,0);
          let x_county: Map<any, any> = new Map([[String.fromCharCode(105,95,57,56,95,100,101,115,101,108,101,99,116,0),true ], [String.fromCharCode(108,95,53,55,95,112,97,114,101,110,116,104,101,115,101,115,0),true ], [String.fromCharCode(120,95,54,50,95,105,110,104,105,98,105,116,115,0),true ]]);
          let chinasameZ = String.fromCharCode(119,95,55,51,95,102,114,97,109,101,104,97,115,104,0);
         progressU = "3";
         x_county = new Map([[`${x_county.size}`, x_county.size ^ chinasameZ.length]]);
         chinasameZ = `${1 / (Math.max(4, x_county.size))}`;
      let telegramL = anner9 == String.fromCharCode(115,110,115,121,101,0);
      do {
         anner9 += `${progressU.length / (Math.max(applek.length, 6))}`;
         if (telegramL) {
            break;
         }
      } while ((progressU.endsWith(anner9)) && telegramL);
      orangeC = "1";
      if (sportx) {
         break;
      }
   } while ((orangeC.includes(`${kick5}`)) && sportx);
   if (2 > (searchW.length << (Math.min(searchE.length, 5))) && 2 > (searchE.length << (Math.min(1, searchW.length)))) {
      searchE += `${1 | parseInt(`${shootm}`)}`;
   }
      castU.set(`${kick5}`, (2 % (Math.max(9, (kick5 ? 2 : 5)))));
      searchW.push((orangeC == String.fromCharCode(112,0) ? orangeC.length : castU.size));
   let suggestionX = orangeC == String.fromCharCode(107,110,103,108,120,106,114,48,116,0);
   do {
      orangeC += `${gmail3.length}`;
      if (suggestionX) {
         break;
      }
   } while (suggestionX && (5 > analytics5.length));
   if ((catagoryB / (Math.max(5.6, 1))) == 5.51) {
      kick5 = 5 > castU.size && analytics5 == String.fromCharCode(103,0);
   }
   for (let i = 0; i < 1; i++) {
      searchE = `${parseInt(`${catagoryB}`) & 2}`;
   }
    const offline = !(state.isConnected && state.isInternetReachable);

   for (let r = 0; r < 1; r++) {
       let pressurem = true;
       let zoomV: Map<any, any> = new Map([[String.fromCharCode(119,101,101,107,100,97,121,115,95,105,95,54,49,0),875], [String.fromCharCode(99,117,116,95,50,95,50,57,0),13], [String.fromCharCode(116,111,107,101,110,116,120,95,57,95,50,54,0),792]]);
       let filters = 0.0;
       let tooltips8 = String.fromCharCode(101,95,51,49,95,97,117,120,105,108,105,97,114,121,0);
       let screen6: Map<any, any> = new Map([[String.fromCharCode(100,114,97,105,110,95,122,95,57,57,0),235], [String.fromCharCode(114,101,103,95,106,95,50,49,0),927]]);
      if (filters <= 5.34) {
          let string4 = 0.0;
          let windI = String.fromCharCode(112,97,103,95,111,95,53,55,0);
          let privacyT = String.fromCharCode(117,95,55,52,95,110,105,99,101,108,121,0);
          let coreo = 2.0;
         pressurem = 19.36 <= (coreo - filters);
         string4 -= privacyT.length | parseInt(`${string4}`);
         windI += `${3 * privacyT.length}`;
         coreo /= Math.max(parseFloat(`${privacyT.length}`), 3);
      }
      for (let b = 0; b < 2; b++) {
         zoomV = new Map([[`${screen6.size}`, 1 ^ tooltips8.length]]);
      }
      let stations1 = screen6.size <= 8906062;
      do {
         screen6.set(`${filters}`, zoomV.size * parseInt(`${filters}`));
         if (stations1) {
            break;
         }
      } while (((1.89 + filters) <= 3.86 && (4 & screen6.size) <= 1) && stations1);
         zoomV = new Map([[`${pressurem}`, 3 / (Math.max(1, parseInt(`${filters}`)))]]);
      let minivodO = String.fromCharCode(51,54,113,0) == tooltips8;
      do {
         tooltips8 = `${zoomV.size}`;
         if (minivodO) {
            break;
         }
      } while (minivodO && ((parseInt(`${filters}`) + tooltips8.length) == 4 && (4.31 + filters) == 3.37));
          let photo5 = 1.0;
          let langu: Array<any> = [597, 919];
         pressurem = !pressurem;
         photo5 /= Math.max(langu.length & parseInt(`${photo5}`), 1);
         langu = [parseInt(`${photo5}`)];
         filters *= tooltips8.length * 1;
         screen6.set(`${filters}`, parseInt(`${filters}`) & screen6.size);
          let huaweiG: Array<any> = [907, 288, 317];
         filters /= Math.max(5, screen6.size);
         huaweiG = [huaweiG.length - huaweiG.length];
         zoomV = new Map([[`${zoomV.size}`, 1]]);
          let modeli: Array<any> = [27, 31, 220];
          let userB = String.fromCharCode(110,95,51,54,95,99,104,101,99,107,0);
          let customB = String.fromCharCode(114,102,102,116,105,95,104,95,49,48,0);
         zoomV = new Map([[`${screen6.size}`, 3 ^ userB.length]]);
         modeli = [1];
         userB += `${(customB == String.fromCharCode(89,0) ? modeli.length : customB.length)}`;
         pressurem = screen6.size < 82 && zoomV.size < 82;
         pressurem = tooltips8.includes(`${pressurem}`);
         tooltips8 += `${((pressurem ? 5 : 4) - 2)}`;
      for (let f = 0; f < 3; f++) {
          let leagueG = String.fromCharCode(121,95,52,57,95,99,97,99,104,101,115,105,122,101,0);
          let fillN: Map<any, any> = new Map([[String.fromCharCode(112,95,52,50,95,100,105,97,103,111,110,97,108,0),false ], [String.fromCharCode(122,95,53,52,95,99,114,117,110,0),true ]]);
          let plusk: Map<any, any> = new Map([[String.fromCharCode(104,95,53,52,95,115,116,97,114,114,101,100,0),787], [String.fromCharCode(110,111,116,105,99,101,115,95,108,95,53,48,0),782]]);
         tooltips8 += `${zoomV.size}`;
         leagueG += `${leagueG.length - 3}`;
         fillN.set(`${plusk.size}`, fillN.size);
         plusk = new Map([[`${plusk.size}`, fillN.size / (Math.max(1, 3))]]);
      }
      gmail3.push(2 - screen6.size);
   }
   let topicq = orangeC == String.fromCharCode(102,99,100,97,110,108,108,99,119,0);
   do {
      orangeC = `${(parseInt(`${shootm}`) % (Math.max(1, (nextn ? 5 : 1))))}`;
      if (topicq) {
         break;
      }
   } while (topicq && (1 <= orangeC.length));
   let mbnative4 = kick5 ? !kick5 : kick5;
   do {
      kick5 = analytics5.length < 63;
      if (mbnative4) {
         break;
      }
   } while ((2.4 == (1.82 * catagoryB)) && mbnative4);
   for (let g = 0; g < 1; g++) {
      kick5 = !nextn;
   }
   let lightC = 9473045 >= castU.size;
   do {
       let down2 = String.fromCharCode(113,95,49,54,95,102,97,107,101,0);
      while (4 <= down2.length) {
         down2 = `${down2.length / (Math.max(1, 5))}`;
         break;
      }
         down2 = `${down2.length + 1}`;
      for (let y = 0; y < 1; y++) {
         down2 += `${down2.length}`;
      }
      castU.set(`${down2}`, castU.size % (Math.max(5, down2.length)));
      if (lightC) {
         break;
      }
   } while ((4 == (castU.size ^ balll.length) || 3 == (4 ^ castU.size)) && lightC);
       let modalh: Array<any> = [775, 286, 360];
       let playercommonZ = 2.0;
      while ((modalh.length & 1) > 2 || 1 > (parseInt(`${playercommonZ}`) * modalh.length)) {
          let bodanx = String.fromCharCode(98,95,54,53,95,116,114,101,102,0);
          let adulty = String.fromCharCode(114,95,51,48,95,106,111,98,0);
          let bufferw = 5.0;
          let anner5 = String.fromCharCode(104,95,56,52,95,97,117,116,104,101,110,116,105,99,97,116,101,100,0);
          let p_view_: Array<any> = [545, 954, 118];
         modalh.push(modalh.length << (Math.min(Math.abs(2), 5)));
         bodanx += `${bodanx.length}`;
         adulty += `${3 * parseInt(`${bufferw}`)}`;
         bufferw *= (parseFloat(`${adulty == String.fromCharCode(84,0) ? adulty.length : parseInt(`${bufferw}`)}`));
         anner5 += `${p_view_.length + parseInt(`${bufferw}`)}`;
         p_view_ = [2];
         break;
      }
         modalh = [1 ^ parseInt(`${playercommonZ}`)];
      for (let i = 0; i < 2; i++) {
          let statisticsZ = true;
          let e_centerS = String.fromCharCode(100,95,52,48,95,105,110,99,108,117,100,101,0);
         playercommonZ /= Math.max(5, (parseFloat(`${e_centerS == String.fromCharCode(87,0) ? modalh.length : e_centerS.length}`)));
         statisticsZ = (statisticsZ ? !statisticsZ : statisticsZ);
      }
          let bingw = 2.0;
          let viewsj = true;
         modalh.push(modalh.length << (Math.min(Math.abs(1), 3)));
         bingw /= Math.max((parseFloat(`${(viewsj ? 1 : 2) % (Math.max(parseInt(`${bingw}`), 2))}`)), 3);
         viewsj = bingw > 93.28;
         modalh.push(2);
      for (let m = 0; m < 3; m++) {
         modalh = [modalh.length % (Math.max(4, parseInt(`${playercommonZ}`)))];
      }
      searchW.push(themep.length);
   for (let l = 0; l < 3; l++) {
       let telegramR = 4.0;
       let buttony = 2.0;
       let champion_ = 4.0;
       let username6 = true;
          let foregroundX = 2.0;
         username6 = (foregroundX - buttony) <= 99.86;
      while (4.68 == buttony) {
          let thailandD = 2.0;
          let handlerj = String.fromCharCode(109,95,57,56,95,112,97,115,116,101,0);
          let delegate_g3_ = 1;
          let productO = String.fromCharCode(118,105,111,108,101,116,95,114,95,57,51,0);
          let moonb = 0;
         username6 = 32 < (delegate_g3_ - thailandD);
         thailandD /= Math.max(productO.length, 3);
         handlerj = `${moonb}`;
         delegate_g3_ *= handlerj.length;
         productO += `${(productO == String.fromCharCode(113,0) ? moonb : productO.length)}`;
         break;
      }
      let pointb = telegramR >= 6411328.0;
      do {
         telegramR /= Math.max(4, 2 - parseInt(`${buttony}`));
         if (pointb) {
            break;
         }
      } while (pointb && (2.79 >= (5.50 * telegramR) || 5.50 >= (champion_ * telegramR)));
         champion_ -= parseInt(`${buttony}`);
      if ((champion_ / (Math.max(3.22, 8))) == 3.69 && champion_ == 3.22) {
         username6 = 54.78 > champion_;
      }
         buttony /= Math.max(1, (parseFloat(`${(username6 ? 1 : 5) ^ parseInt(`${telegramR}`)}`)));
         username6 = 1.35 == champion_;
      for (let o = 0; o < 2; o++) {
          let dplusQ = false;
          let expired9 = String.fromCharCode(109,95,53,48,95,109,118,99,111,109,112,111,110,101,110,116,0);
          let mappinge: Map<any, any> = new Map([[String.fromCharCode(114,110,110,111,105,115,101,95,53,95,49,56,0),704], [String.fromCharCode(110,111,110,115,101,99,117,114,101,95,109,95,57,50,0),21]]);
          let thumbnailX = 3.0;
          let away7: Array<any> = [956, 964];
         username6 = thumbnailX < 5.54 && 5.54 < buttony;
         dplusQ = dplusQ && away7.length < 35;
         expired9 += `${expired9.length}`;
         mappinge = new Map([[`${mappinge.size}`, mappinge.size]]);
         thumbnailX /= Math.max(2, (parseFloat(`${(dplusQ ? 1 : 2) ^ 3}`)));
         away7 = [(2 << (Math.min(5, Math.abs((dplusQ ? 3 : 4)))))];
      }
       let rewardV: Map<any, any> = new Map([[String.fromCharCode(97,117,116,111,114,111,116,97,116,105,111,110,95,98,95,56,53,0),String.fromCharCode(122,95,56,52,95,112,101,114,109,105,115,115,105,111,110,115,0)], [String.fromCharCode(114,95,54,55,95,98,121,116,101,119,111,114,100,0),String.fromCharCode(110,117,108,108,112,97,99,107,101,116,95,115,95,53,52,0)], [String.fromCharCode(107,95,50,56,95,101,116,101,114,110,105,116,121,0),String.fromCharCode(111,100,100,95,107,95,54,48,0)]]);
       let path9: Map<any, any> = new Map([[String.fromCharCode(109,97,114,103,105,110,95,98,95,56,56,0),true ], [String.fromCharCode(98,105,103,105,110,116,95,105,95,52,51,0),false ], [String.fromCharCode(98,95,50,53,95,101,120,116,101,114,110,97,108,0),true ]]);
          let loadingv = String.fromCharCode(114,95,49,51,95,112,111,115,116,98,111,120,0);
          let taiwanN: Array<any> = [295, 168];
          let leftu = 3;
         telegramR *= parseInt(`${buttony}`) + 3;
         loadingv += "1";
         taiwanN = [taiwanN.length * 3];
         leftu >>= Math.min(Math.abs(taiwanN.length / 2), 1);
      while (username6) {
         telegramR /= Math.max(1, parseInt(`${buttony}`));
         break;
      }
      for (let t = 0; t < 1; t++) {
         buttony /= Math.max(1, parseFloat(`${rewardV.size}`));
      }
      analytics5 += `${(parseInt(`${buttony}`) | (nextn ? 4 : 5))}`;
   }
       let comment7 = String.fromCharCode(97,95,53,48,95,108,105,98,118,111,114,98,105,115,0);
       let favorite2 = String.fromCharCode(110,117,108,108,115,95,104,95,51,52,0);
          let rewardvideo2: Map<any, any> = new Map([[String.fromCharCode(115,104,111,119,95,48,95,54,49,0),String.fromCharCode(110,95,52,50,95,104,97,110,110,101,108,0)], [String.fromCharCode(100,101,103,114,97,100,101,100,95,107,95,51,53,0),String.fromCharCode(109,101,114,103,101,95,50,95,52,56,0)], [String.fromCharCode(116,114,97,105,116,95,121,95,56,56,0),String.fromCharCode(100,95,57,95,112,97,114,101,110,116,97,103,101,0)]]);
         comment7 = `${favorite2.length}`;
         rewardvideo2.set(`${rewardvideo2.size}`, rewardvideo2.size);
      while (comment7 == String.fromCharCode(115,0) || favorite2 != String.fromCharCode(79,0)) {
          let watchx = String.fromCharCode(106,95,54,51,95,99,111,110,116,97,105,110,101,114,0);
          let rightj = true;
         comment7 = `${(favorite2.length + (rightj ? 2 : 1))}`;
         watchx = `${watchx.length}`;
         rightj = 53 == watchx.length && watchx.length == 53;
         break;
      }
      let navigationv = String.fromCharCode(52,49,114,118,106,114,121,0) == comment7;
      do {
         comment7 = `${comment7.length}`;
         if (navigationv) {
            break;
         }
      } while ((comment7.endsWith(favorite2)) && navigationv);
      while (comment7 == String.fromCharCode(79,0)) {
         favorite2 += `${comment7.length % (Math.max(favorite2.length, 7))}`;
         break;
      }
      let controlsu = comment7.length <= 8662569;
      do {
          let report2: Array<any> = [422, 635, 246];
         comment7 += `${favorite2.length / (Math.max(9, comment7.length))}`;
         report2 = [report2.length % 2];
         if (controlsu) {
            break;
         }
      } while (controlsu && (favorite2.length < comment7.length));
         comment7 = `${favorite2.length + comment7.length}`;
      chart8 *= parseFloat(`${themep.length}`);
    setIsOffline(offline);

   let infol = shootm >= 5571655.0;
   do {
      shootm += (searchW.length ^ (nextn ? 4 : 4));
      if (infol) {
         break;
      }
   } while (infol && ((5.57 + shootm) < 4.48));
      themep = "2";
       let l_viewd = 0;
       let loadingu = String.fromCharCode(110,95,49,49,95,105,115,105,0);
      if (1 <= (loadingu.length * 1) || 4 <= (1 * l_viewd)) {
         loadingu += "1";
      }
       let bellB = 4;
       let volumez = 5;
      while (4 <= loadingu.length) {
          let championG = String.fromCharCode(110,105,101,108,115,97,100,100,95,117,95,49,55,0);
         bellB *= (String.fromCharCode(121,0) == loadingu ? loadingu.length : bellB);
         championG = `${championG.length / (Math.max(6, championG.length))}`;
         break;
      }
       let championN = String.fromCharCode(109,98,117,118,95,115,95,56,55,0);
         l_viewd |= (String.fromCharCode(115,0) == championN ? volumez : championN.length);
         volumez *= 1 | volumez;
      searchE = "3";
      themep = `${(parseInt(`${chart8}`) + (kick5 ? 3 : 3))}`;
      orangeC = `${2 ^ parseInt(`${shootm}`)}`;
   if (themep == searchE) {
      searchE = `${parseInt(`${shootm}`) << (Math.min(Math.abs(2), 2))}`;
   }
      time_qp8 /= Math.max(5, 3);
      nextn = 58 <= searchW.length && balll.length <= 58;
    if (!offline) {

   let largeS = analytics5 == String.fromCharCode(121,122,116,55,0);
   do {
      analytics5 = "1";
      if (largeS) {
         break;
      }
   } while ((3.44 == (analytics5.length - time_qp8)) && largeS);
   if (balll.length > orangeC.length) {
      orangeC = `${1 - parseInt(`${time_qp8}`)}`;
   }
   while (parseInt(`${chart8}`) <= themep.length) {
      themep = `${3 << (Math.min(Math.abs(parseInt(`${catagoryB}`)), 4))}`;
      break;
   }
      kick5 = chart8 > 13.85 || 91 > searchE.length;
   let debugc = 9603863 >= searchW.length;
   do {
      searchW = [orangeC.length];
      if (debugc) {
         break;
      }
   } while (debugc && (!kick5));
   if (3 > (gmail3.length & balll.length)) {
      gmail3.push(parseInt(`${catagoryB}`) / 2);
   }
   let unread6 = analytics5 == String.fromCharCode(113,113,110,0);
   do {
      analytics5 = `${1 + searchW.length}`;
      if (unread6) {
         break;
      }
   } while (unread6 && (!analytics5.includes(`${chart8}`)));
       let round4 = String.fromCharCode(97,102,102,105,110,105,116,121,95,103,95,52,50,0);
         round4 = `${round4.length}`;
         round4 += `${round4.length}`;
         round4 += `${round4.length}`;
      balll = `${parseInt(`${catagoryB}`) % 2}`;
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
       let rightW = false;
    let rewardvideoF = true;
    let filterz = 3;
    let trophyM = String.fromCharCode(107,105,110,103,95,115,95,52,50,0);
    let grayk = String.fromCharCode(97,109,101,120,95,116,95,57,57,0);
    let brightnessu: Array<any> = [837, 171];
    let videocommond = String.fromCharCode(114,101,113,117,101,115,116,95,110,95,56,0);
    let minivodV = String.fromCharCode(99,111,109,112,97,114,101,95,52,95,52,54,0);
    let scheduleu = String.fromCharCode(116,95,52,48,95,112,105,110,115,0);
    let windL = 2;
    let rightd = String.fromCharCode(121,95,51,48,95,97,109,101,120,0);
    let lineG = String.fromCharCode(116,105,109,101,114,95,107,95,56,56,0);
    let incidentU: Array<any> = [665, 298, 106];
    let serviceE = String.fromCharCode(104,97,114,100,95,51,95,50,49,0);
   while (minivodV.length >= brightnessu.length) {
       let styleI: Array<any> = [String.fromCharCode(109,95,57,50,95,108,97,116,101,110,99,121,0), String.fromCharCode(108,111,110,103,95,106,95,56,52,0)];
       let reminderI = String.fromCharCode(116,95,49,48,48,95,99,111,100,97,98,108,101,0);
       let subsx = 5;
          let holderm = 5.0;
          let infod = false;
          let launchero = 1;
         reminderI = `${parseInt(`${holderm}`) % (Math.max(6, subsx))}`;
         holderm /= Math.max(5, launchero / 2);
         infod = !infod;
         launchero /= Math.max(3, launchero);
         styleI = [styleI.length];
       let crownv = 1.0;
       let gradlewy = 5.0;
      while (1 >= (subsx | 2)) {
          let fullV = true;
          let foregroundw = String.fromCharCode(103,112,111,115,116,102,105,108,116,101,114,95,50,95,51,55,0);
         subsx /= Math.max(styleI.length << (Math.min(foregroundw.length, 3)), 3);
         fullV = !fullV;
         foregroundw += `${((fullV ? 3 : 2) % (Math.max(10, (fullV ? 1 : 2))))}`;
         break;
      }
          let phoneK: Map<any, any> = new Map([[String.fromCharCode(115,104,97,108,108,111,119,95,102,95,55,51,0),170], [String.fromCharCode(116,104,114,111,117,103,104,95,57,95,50,48,0),144], [String.fromCharCode(103,95,52,54,0),687]]);
          let downloaderK = String.fromCharCode(118,95,56,53,95,97,108,97,99,100,115,112,0);
          let photoH = 2;
         gradlewy -= phoneK.size;
         phoneK.set(`${photoH}`, photoH - 2);
         downloaderK = `${2 | downloaderK.length}`;
          let ewardedp = true;
          let sharedd = String.fromCharCode(116,114,117,110,99,112,97,115,115,101,115,95,98,95,54,50,0);
          let shirt4 = String.fromCharCode(117,100,105,111,95,50,95,56,48,0);
         reminderI = "2";
         ewardedp = sharedd.length == 89;
         sharedd += "3";
         shirt4 += `${((ewardedp ? 1 : 4) << (Math.min(sharedd.length, 3)))}`;
         gradlewy -= subsx;
      if (subsx <= crownv) {
         crownv *= parseInt(`${crownv}`);
      }
         subsx %= Math.max(styleI.length, 1);
      minivodV += `${(String.fromCharCode(51,0) == scheduleu ? grayk.length : scheduleu.length)}`;
      break;
   }

    const data = await ttGesturesReferrer.getNativeList();

   while (minivodV == scheduleu) {
      scheduleu += `${grayk.length % 1}`;
      break;
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
            payment_type_icon: "refreshRewindOver.png",
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
            payment_type_icon: "refreshRewindOver.png",
          },
          productType: SUBSCRIPTION_TYPE,
        };
      });

      rewardvideoF = 6 < grayk.length || 6 < windL;

      

      windL -= windL ^ 2;
      const index12Months = subscription.findIndex(
        (item) => item.title === "12个月"
      );

   for (let a = 0; a < 1; a++) {
      minivodV += `${trophyM.length / (Math.max(3, 2))}`;
   }

      

      grayk += `${scheduleu.length}`;
      if (index12Months !== -1) {

   if (videocommond.includes(`${grayk.length}`)) {
      grayk += `${1 ^ grayk.length}`;
   }
        const item12Months = subscription.splice(index12Months, 1)[0];

      trophyM = `${filterz ^ 1}`;
        subscription.splice(1, 0, item12Months);
      }

      console.log("subscription");

   let castZ = rewardvideoF ? !rewardvideoF : rewardvideoF;
   do {
       let constantsj: Array<any> = [171, 345, 953];
       let androidP = 1.0;
       let sportsS: Map<any, any> = new Map([[String.fromCharCode(117,95,52,56,95,97,114,101,118,101,114,115,101,0),String.fromCharCode(116,101,108,108,97,114,95,98,95,55,55,0)], [String.fromCharCode(116,95,52,57,95,99,97,108,108,0),String.fromCharCode(100,95,53,53,95,115,101,110,115,105,116,105,118,105,116,121,0)]]);
       let internetK: Map<any, any> = new Map([[String.fromCharCode(108,95,53,51,95,98,101,108,111,110,103,115,0),false ], [String.fromCharCode(117,95,49,57,95,115,105,122,101,108,101,115,115,0),true ]]);
       let episodeL: Array<any> = [38, 672];
         constantsj.push(3);
       let entryy = String.fromCharCode(115,101,110,100,95,105,95,57,55,0);
       let feedbacku: Array<any> = [711, 935];
       let expiredZ: Array<any> = [803, 922];
         sportsS = new Map([[`${sportsS.size}`, constantsj.length]]);
       let whistleP = 0;
          let middlewareV: Map<any, any> = new Map([[String.fromCharCode(122,95,54,49,95,115,117,112,101,114,115,99,114,105,112,116,0),698], [String.fromCharCode(116,95,50,54,95,119,114,105,116,105,110,103,0),694], [String.fromCharCode(108,95,53,52,95,97,108,116,114,101,102,0),129]]);
          let upgradeh = String.fromCharCode(110,95,55,50,95,116,111,98,105,116,0);
          let disconnectedg = 3.0;
         episodeL.push(3);
         middlewareV.set(`${upgradeh}`, upgradeh.length);
         disconnectedg /= Math.max(parseFloat(`${upgradeh.length / 2}`), 1);
         internetK = new Map([[`${feedbacku.length}`, whistleP]]);
       let navigationv = 2.0;
       let analyticsE = 1.0;
         navigationv *= parseFloat(`${3 * sportsS.size}`);
         constantsj.push(sportsS.size * 2);
       let sliderO: Array<any> = [686, 520, 662];
         androidP /= Math.max(5, 1 & sliderO.length);
         expiredZ = [parseInt(`${navigationv}`)];
          let linkA: Map<any, any> = new Map([[String.fromCharCode(107,95,53,55,95,100,101,102,97,117,108,116,115,0),411], [String.fromCharCode(118,95,49,50,95,112,115,121,109,111,100,101,108,0),47], [String.fromCharCode(104,95,53,95,112,111,115,115,105,98,108,101,0),596]]);
         sportsS = new Map([[`${internetK.size}`, internetK.size << (Math.min(1, Math.abs(parseInt(`${navigationv}`))))]]);
         linkA.set(`${linkA.size}`, 3);
      if (1.39 >= (internetK.size / (Math.max(7, androidP))) || 5 >= (internetK.size % 5)) {
         androidP *= parseInt(`${navigationv}`);
      }
      rewardvideoF = String.fromCharCode(71,0) == minivodV || brightnessu.length <= 34;
      if (castZ) {
         break;
      }
   } while (castZ && (!rightW));
      console.log(subscription);

   let emojir = scheduleu == String.fromCharCode(111,53,49,101,103,114,56,101,49,117,0);
   do {
      scheduleu = "3";
      if (emojir) {
         break;
      }
   } while ((rewardvideoF) && emojir);
      setOneTimeProducts(oneTime);

      rightW = 12 == brightnessu.length || 12 == grayk.length;
      setSubcriptionProducts(subscription);

       let miniM = false;
       let thailandO = String.fromCharCode(111,100,101,114,110,95,50,95,51,56,0);
       let utilsj = String.fromCharCode(100,101,99,114,121,112,116,95,52,95,57,50,0);
         utilsj += `${utilsj.length + thailandO.length}`;
         miniM = !miniM || utilsj.length >= 84;
      while (!miniM) {
         utilsj = `${(thailandO.length >> (Math.min(4, Math.abs((miniM ? 4 : 3)))))}`;
         break;
      }
       let nexto = 5;
       let short_sX = 2;
          let cornerC: Array<any> = [161, 227, 403];
          let sinaL = 3.0;
          let signinupb = String.fromCharCode(107,95,56,95,118,105,100,101,111,116,111,111,108,98,111,120,0);
         nexto &= 2 | parseInt(`${sinaL}`);
         cornerC = [3];
         sinaL /= Math.max(4, (signinupb == String.fromCharCode(101,0) ? cornerC.length : signinupb.length));
          let activef = String.fromCharCode(112,101,114,109,105,116,116,101,100,95,49,95,50,52,0);
         utilsj = `${thailandO.length}`;
         activef = `${(activef == String.fromCharCode(68,0) ? activef.length : activef.length)}`;
      for (let m = 0; m < 2; m++) {
          let bellx = String.fromCharCode(98,105,111,109,101,116,114,105,99,95,115,95,56,0);
          let mimoZ = 3.0;
          let rightH = String.fromCharCode(97,95,53,51,95,112,103,109,120,0);
          let kuaishouG = String.fromCharCode(115,111,114,116,101,100,95,121,95,53,56,0);
         thailandO += `${parseInt(`${mimoZ}`)}`;
         bellx = "3";
         mimoZ -= 3 / (Math.max(5, rightH.length));
         rightH += `${rightH.length >> (Math.min(bellx.length, 3))}`;
         kuaishouG += `${kuaishouG.length}`;
      }
      let nalyticsP = utilsj == String.fromCharCode(117,99,111,0);
      do {
         utilsj = "1";
         if (nalyticsP) {
            break;
         }
      } while ((thailandO == utilsj) && nalyticsP);
      for (let g = 0; g < 3; g++) {
          let traminiL: Array<any> = [String.fromCharCode(116,121,112,101,115,95,53,95,57,52,0), String.fromCharCode(109,115,118,115,100,101,112,101,110,100,95,97,95,50,48,0), String.fromCharCode(97,114,99,104,105,118,101,95,49,95,49,0)];
         thailandO += `${(String.fromCharCode(111,0) == utilsj ? nexto : utilsj.length)}`;
         traminiL.push(3);
      }
      rightW = scheduleu.length < 8;
      setTimeout(() => {

   for (let l = 0; l < 2; l++) {
      rightW = 8 > minivodV.length && 8 > windL;
   }
        setIsFetching(false);
      }, 1000);
    }
  };

  const handleGetGoogleProduct = async () => {
       let unreadV = String.fromCharCode(97,110,103,101,95,115,95,52,53,0);
    let package_ii1: Array<any> = [282, 134];
    let detailsi = String.fromCharCode(112,95,52,50,95,108,111,99,0);
    let mbjscommon3 = String.fromCharCode(102,95,50,48,95,115,99,97,110,105,110,100,101,120,0);
    let googleZ = 1.0;
    let dialogz: Map<any, any> = new Map([[String.fromCharCode(104,95,49,48,48,95,103,101,111,0),2], [String.fromCharCode(112,95,50,51,95,114,103,98,116,111,98,103,114,0),867], [String.fromCharCode(109,105,120,105,110,103,95,107,95,52,54,0),134]]);
    let filterS = true;
    let connection8 = String.fromCharCode(99,95,57,53,95,101,110,99,114,121,112,116,105,111,110,0);
    let verticalV = 0;
    let flipperE = 2;
    let down0 = String.fromCharCode(122,112,98,105,113,117,97,100,115,95,51,95,51,48,0);
    let savey: Map<any, any> = new Map([[String.fromCharCode(97,115,111,99,95,106,95,57,49,0),613], [String.fromCharCode(105,95,57,53,95,114,101,108,97,116,101,100,0),794]]);
    let videocommonL: Map<any, any> = new Map([[String.fromCharCode(108,105,99,101,110,115,101,115,95,98,95,56,48,0),543], [String.fromCharCode(120,95,55,95,101,118,101,114,121,119,104,101,114,101,0),791]]);
    let gpayI = 1.0;
    let stepw: Array<any> = [String.fromCharCode(103,95,51,52,95,98,97,114,114,97,121,0), String.fromCharCode(115,97,116,117,114,97,116,101,95,55,95,49,48,0), String.fromCharCode(102,95,52,52,95,109,115,103,115,0)];
    let emojih = String.fromCharCode(112,95,52,53,95,112,114,117,110,105,110,103,0);
    let profiles = String.fromCharCode(110,95,54,95,115,111,98,101,108,0);
    let tempT = true;
      googleZ /= Math.max(3, parseFloat(`${verticalV - 2}`));
       let vertical5: Array<any> = [287, 24];
       let actionsd = String.fromCharCode(103,95,55,50,95,112,107,99,114,121,112,116,0);
       let updatesQ: Array<any> = [939, 630];
      if ((actionsd.length % 5) >= 3) {
          let sinaD = 3.0;
          let whatsapp1 = 2;
          let sideh = false;
          let trophyw = false;
          let dialogM = String.fromCharCode(98,95,55,52,95,99,104,97,110,103,101,0);
         actionsd += `${dialogM.length}`;
         sinaD *= whatsapp1;
         whatsapp1 <<= Math.min(1, Math.abs(3));
         sideh = whatsapp1 <= 70;
         trophyw = 95.37 > sinaD;
         dialogM += "2";
      }
      let backgroundr = 8214581 >= actionsd.length;
      do {
          let stylesS = 2;
         actionsd += `${stylesS / (Math.max(updatesQ.length, 3))}`;
         if (backgroundr) {
            break;
         }
      } while (((updatesQ.length / 1) < 3) && backgroundr);
      while (2 >= vertical5.length) {
         updatesQ.push(actionsd.length | updatesQ.length);
         break;
      }
          let suggestionC: Map<any, any> = new Map([[String.fromCharCode(97,99,101,110,99,95,55,95,53,48,0),996], [String.fromCharCode(99,111,110,102,105,100,101,110,116,105,97,108,95,100,95,51,0),685]]);
         updatesQ = [2 << (Math.min(3, Math.abs(suggestionC.size)))];
      for (let e = 0; e < 3; e++) {
         vertical5 = [1 << (Math.min(2, actionsd.length))];
      }
      let catagory9 = actionsd == String.fromCharCode(116,116,105,53,105,121,106,122,97,117,0);
      do {
          let moviesM = 0;
          let delegate_vo_: Map<any, any> = new Map([[String.fromCharCode(104,114,116,102,95,106,95,52,56,0),629], [String.fromCharCode(100,101,115,99,114,105,112,116,111,114,115,95,111,95,52,53,0),407]]);
          let friendsf = 4.0;
          let nterstitiald = String.fromCharCode(114,101,99,111,110,115,116,114,117,99,116,105,111,110,95,52,95,50,49,0);
         actionsd += `${moviesM & nterstitiald.length}`;
         moviesM %= Math.max(delegate_vo_.size << (Math.min(Math.abs(1), 2)), 5);
         delegate_vo_ = new Map([[`${delegate_vo_.size}`, delegate_vo_.size ^ parseInt(`${friendsf}`)]]);
         friendsf -= delegate_vo_.size;
         nterstitiald = `${parseInt(`${friendsf}`)}`;
         if (catagory9) {
            break;
         }
      } while (catagory9 && (vertical5.length > 3));
      for (let o = 0; o < 3; o++) {
          let appsa = String.fromCharCode(100,95,54,54,95,115,104,97,112,101,115,0);
          let currenti: Map<any, any> = new Map([[String.fromCharCode(115,95,51,48,95,99,111,110,118,111,108,117,116,101,0),937], [String.fromCharCode(108,95,57,95,114,98,115,112,0),339], [String.fromCharCode(112,114,101,100,105,99,116,111,114,115,98,95,97,95,57,0),477]]);
          let incidentQ: Array<any> = [517, 757];
         actionsd += `${actionsd.length & 3}`;
         appsa = `${appsa.length + 2}`;
         currenti.set(`${appsa}`, 2);
         incidentQ.push(currenti.size >> (Math.min(appsa.length, 2)));
      }
          let sansY = 5.0;
         actionsd = `${updatesQ.length & 3}`;
         sansY -= parseInt(`${sansY}`);
          let tnewsH = true;
         vertical5.push(2 & actionsd.length);
         tnewsH = !tnewsH;
      verticalV *= 2;
   let homeA = filterS ? !filterS : filterS;
   do {
       let chinaK = String.fromCharCode(102,95,56,48,95,116,101,115,115,101,108,97,116,111,114,0);
       let previewa = 1.0;
       let klevinp = true;
       let sendO = false;
      for (let k = 0; k < 2; k++) {
         klevinp = chinaK.endsWith(`${previewa}`);
      }
      while (3.27 < previewa && (previewa / 3.27) < 5.60) {
         sendO = klevinp;
         break;
      }
      let register_4u = chinaK == String.fromCharCode(121,51,48,104,119,107,57,0);
      do {
         chinaK += `${((sendO ? 2 : 1) & 2)}`;
         if (register_4u) {
            break;
         }
      } while ((chinaK.startsWith(`${sendO}`)) && register_4u);
         chinaK += `${(chinaK == String.fromCharCode(81,0) ? chinaK.length : (sendO ? 5 : 1))}`;
         previewa += parseInt(`${previewa}`) & chinaK.length;
      for (let i = 0; i < 2; i++) {
          let suggestionj = String.fromCharCode(116,95,55,48,95,114,116,99,115,116,97,116,115,0);
          let temperaturem: Map<any, any> = new Map([[String.fromCharCode(106,95,52,49,95,102,99,104,111,119,110,0),420], [String.fromCharCode(99,97,108,108,115,95,100,95,55,49,0),298]]);
          let groupz = String.fromCharCode(117,95,52,48,95,118,97,114,105,97,98,108,101,0);
          let userT = 5.0;
          let activej = 1.0;
         klevinp = (67 <= ((sendO ? temperaturem.size : 89) % (Math.max(temperaturem.size, 5))));
         suggestionj += "2";
         groupz += `${1 + parseInt(`${userT}`)}`;
         userT += parseFloat(`${parseInt(`${userT}`) - parseInt(`${activej}`)}`);
         activej -= parseInt(`${userT}`) - parseInt(`${activej}`);
      }
      if (klevinp) {
         klevinp = sendO;
      }
       let vietnam8 = 0;
       let moreb = 3;
      if ((moreb - 5) >= 2 && 5 >= (chinaK.length - moreb)) {
         chinaK += `${vietnam8}`;
      }
          let register_7z = 3.0;
          let chinasamez = String.fromCharCode(119,101,105,103,104,116,101,100,95,57,95,54,55,0);
          let actionD = false;
         klevinp = !klevinp || moreb >= 72;
         register_7z *= parseFloat(`${1}`);
         chinasamez += `${parseInt(`${register_7z}`)}`;
         actionD = !chinasamez.startsWith(`${actionD}`);
      if (4.14 <= (3.34 + previewa)) {
         vietnam8 >>= Math.min(4, Math.abs(vietnam8 / (Math.max(7, parseInt(`${previewa}`)))));
      }
         sendO = sendO && 7 < vietnam8;
      filterS = 11 == down0.length;
      if (homeA) {
         break;
      }
   } while (homeA && ((flipperE ^ 4) >= 4));
   if (!filterS && 2 == (savey.size + 3)) {
       let photop = String.fromCharCode(99,95,55,54,95,115,105,103,105,108,108,0);
          let minin = 1;
          let starj: Map<any, any> = new Map([[String.fromCharCode(100,95,50,95,116,101,115,116,114,101,115,117,108,116,0),91], [String.fromCharCode(109,115,118,115,100,101,112,101,110,100,95,55,95,49,56,0),781]]);
          let security3 = String.fromCharCode(103,95,51,95,120,115,117,98,0);
         photop = `${minin}`;
         minin &= 3 | starj.size;
         starj.set(`${security3}`, starj.size << (Math.min(security3.length, 2)));
      for (let l = 0; l < 1; l++) {
         photop = `${(String.fromCharCode(55,0) == photop ? photop.length : photop.length)}`;
      }
         photop += `${photop.length << (Math.min(photop.length, 4))}`;
      filterS = String.fromCharCode(65,0) == connection8;
   }
      package_ii1 = [unreadV.length * flipperE];
       let settingi = String.fromCharCode(111,95,54,51,95,118,116,101,110,99,0);
       let editv = String.fromCharCode(103,95,56,54,95,109,97,107,101,99,116,0);
      while (settingi.length == editv.length) {
         editv = `${(String.fromCharCode(120,0) == editv ? editv.length : settingi.length)}`;
         break;
      }
         editv += `${1 >> (Math.min(4, settingi.length))}`;
      for (let d = 0; d < 2; d++) {
          let zhuboH: Map<any, any> = new Map([[String.fromCharCode(115,122,97,98,111,115,95,120,95,53,54,0),2], [String.fromCharCode(113,95,56,54,95,97,119,97,107,101,0),493]]);
          let downloadern = true;
          let actionp = 4;
          let dangerT = String.fromCharCode(118,97,105,108,97,98,105,108,105,116,121,95,57,95,57,55,0);
         editv += `${actionp - editv.length}`;
         zhuboH.set(`${downloadern}`, 1);
         actionp >>= Math.min(Math.abs(2 << (Math.min(5, Math.abs(zhuboH.size)))), 3);
         dangerT += "3";
      }
      if (editv == settingi) {
          let chinaP = String.fromCharCode(101,95,55,54,0);
          let confirmationy = 2.0;
          let cornern: Map<any, any> = new Map([[String.fromCharCode(107,95,52,49,95,101,120,99,101,101,100,0),String.fromCharCode(116,95,49,55,95,109,107,118,109,117,120,101,114,0)], [String.fromCharCode(108,95,54,57,95,115,105,109,117,108,99,97,115,116,0),String.fromCharCode(122,95,53,49,95,117,110,98,111,120,0)], [String.fromCharCode(97,112,112,101,97,114,101,110,99,101,95,117,95,55,49,0),String.fromCharCode(103,114,101,121,115,95,103,95,48,0)]]);
          let manifestm = String.fromCharCode(103,95,53,52,95,97,114,98,105,116,114,97,114,121,0);
         settingi = `${(editv == String.fromCharCode(99,0) ? editv.length : cornern.size)}`;
         chinaP += `${(String.fromCharCode(109,0) == manifestm ? parseInt(`${confirmationy}`) : manifestm.length)}`;
         confirmationy *= parseFloat(`${parseInt(`${confirmationy}`)}`);
         cornern.set(manifestm, manifestm.length + 3);
      }
         editv += `${settingi.length % (Math.max(6, editv.length))}`;
       let minis = String.fromCharCode(111,95,51,95,116,114,97,102,102,105,99,0);
      down0 += `${detailsi.length % (Math.max(settingi.length, 10))}`;
      detailsi = `${flipperE >> (Math.min(Math.abs(savey.size), 2))}`;
   for (let z = 0; z < 2; z++) {
      verticalV *= down0.length >> (Math.min(Math.abs(2), 4));
   }

    try {
      await getProducts({ skus: iap_skus });
      await getSubscriptions({ skus: subs_skus });
    } catch (err) {

   if (3 <= package_ii1.length) {
      package_ii1.push((connection8 == String.fromCharCode(52,0) ? connection8.length : dialogz.size));
   }
   let temperatureX = 7810370 >= flipperE;
   do {
       let lightM = 0;
          let vignetteU = String.fromCharCode(99,111,110,115,116,114,117,99,116,111,114,109,97,103,105,99,95,101,95,55,56,0);
         lightM <<= Math.min(Math.abs(2 & vignetteU.length), 3);
       let mathQ = String.fromCharCode(114,101,97,108,108,111,99,97,116,101,95,109,95,51,50,0);
       let related8: Array<any> = [824, 764, 257];
      flipperE *= parseInt(`${googleZ}`);
      if (temperatureX) {
         break;
      }
   } while (temperatureX && (1 >= (flipperE / 2)));
      googleZ += parseFloat(`${mbjscommon3.length | 3}`);
       let leftC: Map<any, any> = new Map([[String.fromCharCode(109,95,57,57,95,97,99,116,117,97,108,108,121,0),false ], [String.fromCharCode(97,95,52,53,95,120,100,97,105,0),true ], [String.fromCharCode(116,95,50,53,95,114,101,98,97,108,97,110,99,101,0),false ]]);
       let profilet = String.fromCharCode(115,112,108,105,116,109,118,115,95,97,95,57,0);
         profilet += `${(profilet == String.fromCharCode(89,0) ? profilet.length : leftC.size)}`;
      if ((leftC.size >> (Math.min(Math.abs(5), 1))) > 1) {
          let plus0 = 0;
          let mappingR = String.fromCharCode(115,121,115,105,110,102,111,95,119,95,52,52,0);
          let animationL = 1.0;
          let register_jI = String.fromCharCode(97,95,50,49,95,114,101,113,117,101,115,116,105,110,103,0);
          let thumbnail6 = 5;
         profilet += `${(String.fromCharCode(49,0) == register_jI ? register_jI.length : parseInt(`${animationL}`))}`;
         plus0 |= thumbnail6;
         mappingR += "3";
         animationL /= Math.max(parseFloat(`${mappingR.length ^ plus0}`), 2);
         thumbnail6 ^= plus0 >> (Math.min(4, Math.abs(thumbnail6)));
      }
       let homen = String.fromCharCode(122,95,50,95,109,97,114,107,100,111,119,110,0);
       let selectionm = String.fromCharCode(100,101,115,116,114,117,99,116,105,118,101,95,103,95,57,52,0);
         selectionm += `${(selectionm == String.fromCharCode(57,0) ? profilet.length : selectionm.length)}`;
      let turng = 8823964 <= leftC.size;
      do {
         leftC = new Map([[homen, homen.length - 1]]);
         if (turng) {
            break;
         }
      } while ((selectionm.length >= leftC.size) && turng);
          let round9 = String.fromCharCode(98,95,52,95,99,111,110,110,101,99,116,111,114,0);
          let animationv = true;
          let update_b5: Map<any, any> = new Map([[String.fromCharCode(105,100,101,110,116,105,116,121,95,57,95,52,56,0),82], [String.fromCharCode(115,101,108,101,99,116,95,109,95,56,56,0),338]]);
         homen += `${(round9 == String.fromCharCode(54,0) ? selectionm.length : round9.length)}`;
         animationv = update_b5.get(`${animationv}`) == null;
         update_b5 = new Map([[`${update_b5.size}`, (2 << (Math.min(1, Math.abs((animationv ? 5 : 3)))))]]);
      down0 = `${((filterS ? 4 : 5) ^ 3)}`;
      detailsi += `${detailsi.length}`;
      down0 = `${detailsi.length}`;
      unreadV += `${parseInt(`${googleZ}`) * 2}`;
       let dialogc = String.fromCharCode(99,111,108,108,97,103,101,95,51,95,50,50,0);
       let singleb: Array<any> = [35, 310, 874];
       let related2 = 4.0;
      for (let i = 0; i < 2; i++) {
         singleb.push(dialogc.length);
      }
      for (let d = 0; d < 2; d++) {
         singleb = [parseInt(`${related2}`) ^ singleb.length];
      }
      if (1 > (2 / (Math.max(7, singleb.length))) || (2 & singleb.length) > 1) {
          let source2 = 5;
          let hoverd = String.fromCharCode(114,105,99,101,95,51,95,52,49,0);
          let index6: Map<any, any> = new Map([[String.fromCharCode(106,95,53,48,95,98,97,99,107,114,111,117,110,100,0),739], [String.fromCharCode(119,111,114,100,95,113,95,49,57,0),136]]);
          let mail7 = String.fromCharCode(105,115,119,114,105,116,101,97,98,108,101,95,116,95,56,52,0);
          let roomZ: Array<any> = [String.fromCharCode(120,99,116,101,115,116,95,55,95,56,54,0), String.fromCharCode(119,95,54,57,95,118,115,101,114,118,105,99,101,0), String.fromCharCode(101,95,50,48,95,108,105,98,109,0)];
         singleb.push(singleb.length ^ 2);
         source2 -= hoverd.length + 2;
         hoverd += `${index6.size}`;
         index6 = new Map([[hoverd, 1 & source2]]);
         mail7 = `${source2 % 1}`;
         roomZ.push(2 + source2);
      }
          let description_l6g = String.fromCharCode(119,95,51,55,0);
         dialogc = `${(dialogc == String.fromCharCode(100,0) ? singleb.length : dialogc.length)}`;
         description_l6g += `${description_l6g.length + description_l6g.length}`;
      while (3.69 == related2) {
          let bannerA = String.fromCharCode(118,97,108,105,100,97,116,105,110,103,95,52,95,52,0);
         singleb = [parseInt(`${related2}`) / (Math.max(9, singleb.length))];
         bannerA = `${bannerA.length % 3}`;
         break;
      }
      for (let b = 0; b < 2; b++) {
         dialogc += "2";
      }
       let taiwanX: Array<any> = [677, 649, 264];
       let gmailP: Array<any> = [String.fromCharCode(117,95,57,95,117,110,114,101,103,105,115,116,101,114,101,100,0), String.fromCharCode(115,117,112,101,114,102,114,97,109,101,95,113,95,54,55,0)];
      if (dialogc.startsWith(`${gmailP.length}`)) {
          let shrink8 = String.fromCharCode(99,116,120,112,95,117,95,53,52,0);
          let bootsplashM = 1.0;
          let actionsJ = String.fromCharCode(100,101,112,101,110,100,101,110,99,121,95,102,95,53,53,0);
          let chat6 = 2;
         gmailP = [actionsJ.length];
         shrink8 += `${chat6 + 2}`;
         bootsplashM -= 1 / (Math.max(chat6, 5));
         actionsJ += "2 ^ chat6";
      }
      let with_tA = taiwanX.length >= 9069224;
      do {
          let sideI = 4.0;
          let borderless7 = String.fromCharCode(106,95,53,54,95,112,101,97,107,115,0);
         taiwanX = [2];
         sideI /= Math.max(4, parseFloat(`${borderless7.length + parseInt(`${sideI}`)}`));
         borderless7 += `${parseInt(`${sideI}`) >> (Math.min(Math.abs(3), 5))}`;
         if (with_tA) {
            break;
         }
      } while (with_tA && (5 < (gmailP.length << (Math.min(Math.abs(4), 3)))));
      down0 = `${verticalV ^ 1}`;
      console.log("error when get product from google play: ", err);
    }
  };

  const onPurchase = async () => {
       let twittera = 0.0;
    let chinav = String.fromCharCode(104,95,56,55,95,102,102,109,97,108,0);
    let bellh = String.fromCharCode(114,95,52,55,95,115,111,102,97,108,105,122,101,114,0);
    let rewardy: Map<any, any> = new Map([[String.fromCharCode(110,111,116,105,102,121,95,115,95,57,48,0),784], [String.fromCharCode(100,118,100,115,117,98,95,100,95,51,50,0),805], [String.fromCharCode(115,104,111,119,99,113,116,95,113,95,50,57,0),727]]);
    let selectedo = 1;
    let minio = 0.0;
    let animation7 = String.fromCharCode(103,95,55,95,116,114,97,110,115,117,112,112,0);
    let mbridgem = String.fromCharCode(119,95,53,50,95,112,114,105,110,116,99,111,109,112,0);
    let countryU = String.fromCharCode(103,101,111,99,111,100,101,114,95,121,95,54,50,0);
    let brightnessV = 0;
    let dataS = String.fromCharCode(109,115,103,115,109,95,99,95,50,48,0);
    let previewj = 5.0;
    let package_o87 = String.fromCharCode(112,116,114,115,95,105,95,51,48,0);
    let tailZ: Map<any, any> = new Map([[String.fromCharCode(121,95,53,56,95,112,108,117,103,105,110,0),307], [String.fromCharCode(112,95,56,57,95,97,99,99,101,115,115,101,100,0),920]]);
   if (chinav.length >= mbridgem.length) {
       let lessj: Map<any, any> = new Map([[String.fromCharCode(117,95,55,56,95,112,114,101,115,101,108,101,99,116,0),true ], [String.fromCharCode(102,95,55,55,95,103,97,109,109,97,102,105,108,116,101,114,0),true ]]);
       let productT = String.fromCharCode(112,95,51,51,95,118,105,101,119,101,114,0);
       let moduleo = String.fromCharCode(112,111,112,111,118,101,114,95,112,95,50,49,0);
       let shootx = 2;
      let round4 = lessj.size >= 6154568;
      do {
         lessj.set(moduleo, moduleo.length * shootx);
         if (round4) {
            break;
         }
      } while ((5 < (productT.length >> (Math.min(3, Math.abs(lessj.size))))) && round4);
         lessj.set(`${shootx}`, lessj.size ^ shootx);
       let balle = false;
       let tumbnailt = false;
      let zhuboq = 8109427 >= lessj.size;
      do {
         lessj = new Map([[productT, productT.length]]);
         if (zhuboq) {
            break;
         }
      } while (zhuboq && (productT.length < 2));
          let mbnativeg = true;
          let anewinterstitial_ = 0;
          let playI = String.fromCharCode(109,112,101,103,118,108,99,95,118,95,54,52,0);
         tumbnailt = playI.length == 46 && !balle;
         mbnativeg = mbnativeg && 11 < anewinterstitial_;
         anewinterstitial_ >>= Math.min(4, Math.abs(3));
         playI = `${((mbnativeg ? 3 : 3) * anewinterstitial_)}`;
         moduleo += `${lessj.size & 2}`;
      while (lessj.get(`${shootx}`) == null) {
          let reducerx = String.fromCharCode(103,95,55,52,95,108,117,109,105,110,97,110,99,101,0);
          let nativeexh = String.fromCharCode(97,98,115,120,95,116,95,56,53,0);
         lessj = new Map([[nativeexh, ((balle ? 5 : 2) >> (Math.min(nativeexh.length, 3)))]]);
         reducerx += `${reducerx.length / 3}`;
         break;
      }
         lessj.set(`${tumbnailt}`, ((tumbnailt ? 3 : 2) ^ 1));
      if (moduleo != String.fromCharCode(85,0)) {
          let contextY = String.fromCharCode(100,101,99,114,121,112,116,105,111,110,95,106,95,51,54,0);
          let stationc = 4;
          let catalogp = String.fromCharCode(112,105,99,107,108,112,102,95,48,95,50,53,0);
          let commoni = 3.0;
         productT += "3";
         contextY = `${(String.fromCharCode(89,0) == catalogp ? parseInt(`${commoni}`) : catalogp.length)}`;
         stationc -= 1;
         commoni *= parseFloat(`${parseInt(`${commoni}`)}`);
      }
         shootx *= ((tumbnailt ? 4 : 3) / (Math.max((balle ? 2 : 3), 3)));
         balle = shootx < 99 && !tumbnailt;
         balle = 50 < shootx && !tumbnailt;
      chinav = `${parseInt(`${twittera}`)}`;
   }

    setIsBtnEnable(false);

   let descb = chinav.length <= 9457012;
   do {
      chinav = `${brightnessV & selectedo}`;
      if (descb) {
         break;
      }
   } while ((1 > (chinav.length / 5)) && descb);
    try {

      bellh = `${selectedo}`;
      setIsVisible(true);

   while (1.38 < (minio * bellh.length)) {
       let switch_aR = String.fromCharCode(106,112,103,95,111,95,49,55,0);
       let diceN = String.fromCharCode(108,105,99,101,110,115,101,115,95,48,95,55,55,0);
       let listf: Array<any> = [994, 521];
       let h_centere = 5;
       let entrys = String.fromCharCode(109,95,49,54,95,109,106,112,101,103,0);
         diceN += `${(String.fromCharCode(105,0) == entrys ? diceN.length : entrys.length)}`;
          let typesV = 0.0;
          let switch_1mi = 4.0;
          let reada = 2.0;
         diceN = "3";
         typesV -= parseFloat(`${parseInt(`${reada}`) / 1}`);
         switch_1mi -= parseFloat(`${parseInt(`${reada}`) / (Math.max(10, parseInt(`${switch_1mi}`)))}`);
         switch_aR += `${(String.fromCharCode(118,0) == entrys ? entrys.length : h_centere)}`;
          let backK = 0.0;
         listf = [(String.fromCharCode(97,0) == entrys ? entrys.length : diceN.length)];
         backK *= parseFloat(`${parseInt(`${backK}`)}`);
      let blackn = 6420925 >= h_centere;
      do {
         h_centere *= diceN.length - 1;
         if (blackn) {
            break;
         }
      } while (blackn && (entrys.endsWith(`${h_centere}`)));
         h_centere *= 3;
      if (!entrys.includes(`${h_centere}`)) {
          let benefit9: Array<any> = [317, 412, 61];
         h_centere &= benefit9.length * 3;
      }
         listf.push(3 | listf.length);
          let sentry9 = String.fromCharCode(100,101,110,111,105,115,101,95,111,95,52,56,0);
          let hejig = 2.0;
          let mode7 = String.fromCharCode(98,95,49,49,95,114,101,108,99,116,120,0);
         diceN = "1";
         sentry9 = "3";
         hejig /= Math.max(1, parseFloat(`${3 << (Math.min(3, Math.abs(parseInt(`${hejig}`))))}`));
         mode7 += "1";
      let refreshj = entrys.length >= 5559090;
      do {
          let memberL: Array<any> = [String.fromCharCode(99,108,97,105,109,115,95,57,95,50,50,0), String.fromCharCode(106,95,50,50,95,115,105,98,108,105,110,103,0), String.fromCharCode(115,112,97,114,115,101,110,101,115,115,95,112,95,51,53,0)];
          let detailsL = 5.0;
          let sansN = 4.0;
         entrys += `${(String.fromCharCode(70,0) == diceN ? diceN.length : switch_aR.length)}`;
         memberL = [parseInt(`${sansN}`) + parseInt(`${detailsL}`)];
         detailsL /= Math.max(2 | memberL.length, 4);
         sansN *= 1;
         if (refreshj) {
            break;
         }
      } while (refreshj && ((2 + entrys.length) < 4 || (entrys.length + 2) < 5));
         entrys = `${(entrys == String.fromCharCode(76,0) ? diceN.length : entrys.length)}`;
         diceN = `${switch_aR.length ^ 2}`;
         switch_aR += `${(entrys == String.fromCharCode(88,0) ? switch_aR.length : entrys.length)}`;
      for (let k = 0; k < 1; k++) {
          let sports1 = 1.0;
         h_centere *= (diceN == String.fromCharCode(83,0) ? diceN.length : switch_aR.length);
         sports1 += parseFloat(`${parseInt(`${sports1}`)}`);
      }
         h_centere += diceN.length ^ 2;
      minio /= Math.max(1 >> (Math.min(Math.abs(h_centere), 3)), 3);
      break;
   }
      if (productSelected.productType === "iap") {
        await requestPurchase({ skus: [productSelected.productSKU] });
      } else if (productSelected.productType === "subs") {

   let descU = 8282904 >= brightnessV;
   do {
      brightnessV ^= parseInt(`${minio}`);
      if (descU) {
         break;
      }
   } while (((2 >> (Math.min(3, mbridgem.length))) < 2) && descU);
        const subs = subscriptions.find(
          (sub) => sub.productId === productSelected.productSKU
        );

   for (let u = 0; u < 1; u++) {
      rewardy = new Map([[animation7, 3]]);
   }

        if (subs) {

   for (let d = 0; d < 2; d++) {
      twittera *= brightnessV + selectedo;
   }
          const offerToken = subs.subscriptionOfferDetails[0].offerToken;

      bellh += "1";
          await requestSubscription({
            sku: productSelected.productSKU,
            ...(offerToken && {
              subscriptionOffers: [
                { sku: productSelected.productSKU, offerToken },
              ],
            }),
          });
        } else {

      selectedo -= bellh.length;
          throw new Error("subscription plan not found");
        }
      }
    } catch (err) {

   for (let y = 0; y < 2; y++) {
      rewardy.set(`${minio}`, 2);
   }
      setIsVisible(false);

      twittera /= Math.max(2, (animation7 == String.fromCharCode(54,0) ? animation7.length : brightnessV));
      if (err instanceof PurchaseError) {

       let orangeI = false;
       let sigmoba: Array<any> = [811, 368, 503];
       let rightJ = String.fromCharCode(121,95,53,50,95,118,105,115,105,98,105,108,105,116,121,0);
      while (!orangeI || rightJ.length < 2) {
         orangeI = rightJ.length == 24 || sigmoba.length == 24;
         break;
      }
      for (let n = 0; n < 1; n++) {
          let searchbar6: Array<any> = [593, 353];
          let gpayY = String.fromCharCode(115,116,114,105,110,103,98,117,102,102,101,114,95,100,95,51,51,0);
          let selectS: Map<any, any> = new Map([[String.fromCharCode(120,95,56,95,105,110,105,116,105,97,108,105,122,97,116,105,111,110,0),false ], [String.fromCharCode(115,99,97,109,95,113,95,55,52,0),false ], [String.fromCharCode(108,95,57,53,95,102,108,111,111,100,0),false ]]);
         sigmoba.push(2);
         searchbar6.push((String.fromCharCode(49,0) == gpayY ? gpayY.length : searchbar6.length));
         selectS = new Map([[`${selectS.size}`, gpayY.length]]);
      }
         sigmoba.push(((orangeI ? 1 : 3) + sigmoba.length));
      let nativeexC = 5522061 >= sigmoba.length;
      do {
         sigmoba.push(((orangeI ? 4 : 4) << (Math.min(sigmoba.length, 2))));
         if (nativeexC) {
            break;
         }
      } while ((!orangeI && (1 | sigmoba.length) < 1) && nativeexC);
      for (let c = 0; c < 2; c++) {
         orangeI = rightJ.endsWith(`${orangeI}`);
      }
         orangeI = (42 >= ((orangeI ? 42 : sigmoba.length) * sigmoba.length));
         rightJ = `${rightJ.length}`;
         rightJ += "3";
          let clubs: Map<any, any> = new Map([[String.fromCharCode(114,95,51,53,95,97,97,99,112,115,0),String.fromCharCode(98,114,101,103,95,106,95,52,49,0)], [String.fromCharCode(116,95,50,56,0),String.fromCharCode(115,95,54,54,95,109,101,109,115,101,116,0)], [String.fromCharCode(98,114,101,97,107,111,117,116,95,109,95,53,54,0),String.fromCharCode(107,95,56,52,95,108,97,116,105,116,117,100,101,0)]]);
          let collectionV: Map<any, any> = new Map([[String.fromCharCode(116,119,105,100,100,108,101,95,49,95,57,53,0),false ], [String.fromCharCode(99,114,111,115,115,104,97,105,114,115,95,111,95,57,51,0),true ]]);
          let config9 = 0;
         orangeI = sigmoba.length < 19;
         clubs.set(`${clubs.size}`, collectionV.size ^ clubs.size);
         collectionV.set(`${config9}`, config9);
      brightnessV &= bellh.length >> (Math.min(Math.abs(2), 1));
        console.error("purchasing error: " + err);
      } else {

       let loginT = true;
         loginT = (loginT ? !loginT : loginT);
       let viewerm = true;
       let bridgeC = false;
      for (let v = 0; v < 1; v++) {
         viewerm = (!loginT ? !bridgeC : !loginT);
      }
      bellh += `${animation7.length >> (Math.min(3, chinav.length))}`;
        console.error("handle purchase error: ", err);
      }

      if (err && err.code == "E_USER_CANCELLED") {

       let projectV: Array<any> = [337, 79, 801];
       let launchu = String.fromCharCode(104,95,56,95,115,103,105,114,108,101,0);
         launchu = `${(launchu == String.fromCharCode(74,0) ? projectV.length : launchu.length)}`;
          let infoC = String.fromCharCode(114,95,57,52,95,111,99,117,109,101,110,116,0);
         projectV = [(launchu == String.fromCharCode(81,0) ? launchu.length : projectV.length)];
         infoC += `${infoC.length / 1}`;
          let matchesa: Array<any> = [574, 356, 842];
          let scoreR = 0;
         projectV = [1];
         matchesa.push(scoreR - 1);
         scoreR &= matchesa.length << (Math.min(2, Math.abs(scoreR)));
      let lessF = 5524689 <= launchu.length;
      do {
          let collectionT = String.fromCharCode(101,110,101,114,103,121,95,117,95,54,0);
          let statistics5 = 0.0;
          let wnewsk = String.fromCharCode(115,116,114,105,110,103,105,102,121,95,114,95,56,54,0);
          let streaming8 = 5.0;
         launchu = `${parseInt(`${streaming8}`) >> (Math.min(Math.abs(2), 2))}`;
         collectionT += `${2 - collectionT.length}`;
         statistics5 /= Math.max(5, (collectionT == String.fromCharCode(104,0) ? collectionT.length : wnewsk.length));
         wnewsk = `${wnewsk.length - 3}`;
         streaming8 /= Math.max(3, parseFloat(`${3}`));
         if (lessF) {
            break;
         }
      } while (lessF && (5 <= (4 | launchu.length) || 4 <= (projectV.length | launchu.length)));
      while ((2 * launchu.length) > 3 && 5 > (2 * launchu.length)) {
          let about3 = false;
          let g_titlen = String.fromCharCode(115,109,111,111,116,104,101,100,95,57,95,49,57,0);
          let filled0 = String.fromCharCode(101,95,56,52,95,105,110,102,105,110,105,116,101,0);
         launchu = `${launchu.length}`;
         about3 = filled0.length >= 22 && !about3;
         g_titlen += `${((about3 ? 1 : 2) ^ 2)}`;
         filled0 += `${((about3 ? 4 : 3) & filled0.length)}`;
         break;
      }
         projectV.push(launchu.length << (Math.min(Math.abs(2), 5)));
      chinav = `${(String.fromCharCode(115,0) == chinav ? mbridgem.length : chinav.length)}`;
        console.log("user cancel purchase");

      previewj -= parseFloat(`${brightnessV}`);
        setIsBtnEnable(true);
      } else {

   let goalv = mbridgem.length >= 7729808;
   do {
      mbridgem += `${parseInt(`${minio}`)}`;
      if (goalv) {
         break;
      }
   } while ((3 >= mbridgem.length) && goalv);
        setDialogText(failedDialogText);

      brightnessV *= 1;
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
      const result = await ttGesturesReferrer.postAndroidIAP(iapTrans);

      console.log("validate iap result");
      console.log(result);
      return result.data.data;
    } catch (error) {
       let m_unlockj = false;
    let telegramc = String.fromCharCode(111,112,101,110,99,108,95,118,95,55,0);
    let aboutf = String.fromCharCode(105,95,53,56,95,120,117,116,105,108,0);
    let streamingb = 3.0;
    let philippinesW = String.fromCharCode(99,105,112,104,101,114,98,121,110,105,100,95,116,95,49,52,0);
    let signinupd = 3.0;
    let home9 = String.fromCharCode(112,114,101,102,105,120,95,122,95,57,57,0);
    let foundt = String.fromCharCode(110,95,55,53,95,103,114,101,121,0);
    let signinupV: Array<any> = [40, 804];
    let yingA = true;
    let headerZ = true;
    let filex: Array<any> = [420, 569, 170];
    let bottomV = String.fromCharCode(109,105,109,101,95,118,95,54,48,0);
      philippinesW = `${signinupV.length}`;
   while (!yingA) {
      m_unlockj = (philippinesW.length + parseInt(`${streamingb}`)) <= 69;
      break;
   }
   for (let i = 0; i < 2; i++) {
       let mbbidM: Array<any> = [773, 12, 520];
       let backu: Map<any, any> = new Map([[String.fromCharCode(115,99,105,101,110,116,105,102,105,99,95,112,95,55,0),String.fromCharCode(116,117,110,110,101,108,105,110,103,95,56,95,57,51,0)], [String.fromCharCode(98,99,109,112,95,49,95,51,57,0),String.fromCharCode(113,95,54,55,95,102,108,105,112,0)], [String.fromCharCode(117,110,102,101,116,99,104,95,120,95,51,51,0),String.fromCharCode(109,101,100,105,97,99,111,100,101,99,100,101,99,95,104,95,56,0)]]);
       let footballJ = 2;
       let connectionD = 3.0;
       let orientation7 = String.fromCharCode(115,117,112,101,114,103,114,111,117,112,95,118,95,49,54,0);
         connectionD -= parseFloat(`${footballJ & parseInt(`${connectionD}`)}`);
         connectionD /= Math.max(4, parseFloat(`${footballJ >> (Math.min(Math.abs(backu.size), 3))}`));
          let panglel: Map<any, any> = new Map([[String.fromCharCode(113,95,53,52,95,112,97,116,116,101,114,110,115,0),572], [String.fromCharCode(114,101,97,99,104,97,98,108,101,95,122,95,55,50,0),483], [String.fromCharCode(100,95,55,48,95,114,101,99,111,110,110,101,99,116,0),943]]);
         footballJ *= 3;
         panglel = new Map([[`${panglel.size}`, panglel.size]]);
      for (let f = 0; f < 1; f++) {
          let submitx: Map<any, any> = new Map([[String.fromCharCode(115,117,98,102,105,101,108,100,115,95,103,95,57,57,0),771], [String.fromCharCode(102,97,115,116,95,54,95,54,56,0),314]]);
          let fastp = 5.0;
         connectionD -= parseFloat(`${mbbidM.length}`);
         submitx = new Map([[`${submitx.size}`, submitx.size << (Math.min(1, Math.abs(parseInt(`${fastp}`))))]]);
         fastp -= parseFloat(`${1 * submitx.size}`);
      }
      while ((orientation7.length << (Math.min(Math.abs(1), 4))) < 5) {
         orientation7 += "3";
         break;
      }
         backu = new Map([[`${backu.size}`, 2]]);
          let confirmationf = String.fromCharCode(120,95,56,57,95,100,105,102,0);
          let ycopy_zj = 1;
         connectionD /= Math.max(3, (parseFloat(`${String.fromCharCode(78,0) == confirmationf ? backu.size : confirmationf.length}`)));
         ycopy_zj += 3 - ycopy_zj;
         backu.set(`${connectionD}`, mbbidM.length ^ parseInt(`${connectionD}`));
         orientation7 = `${footballJ}`;
      let sortf = 6311790.0 <= connectionD;
      do {
          let flipperw: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,114,97,99,116,111,114,95,97,95,57,54,0),String.fromCharCode(112,101,114,115,111,110,115,95,98,95,49,50,0)], [String.fromCharCode(112,114,101,95,55,95,50,55,0),String.fromCharCode(99,95,54,57,95,117,112,100,97,116,101,0)]]);
         connectionD /= Math.max(parseFloat(`${footballJ & 3}`), 3);
         flipperw.set(`${flipperw.size}`, 3);
         if (sortf) {
            break;
         }
      } while (sortf && (connectionD >= 5.59));
         connectionD -= parseFloat(`${orientation7.length}`);
      while ((connectionD + parseFloat(`${footballJ}`)) > 3.9 || (connectionD + 3.9) > 5.41) {
         footballJ /= Math.max(2, 3);
         break;
      }
         connectionD -= parseFloat(`${parseInt(`${connectionD}`)}`);
      while (4 >= (backu.size << (Math.min(2, mbbidM.length)))) {
         backu.set(`${mbbidM.length}`, 2 << (Math.min(5, Math.abs(backu.size))));
         break;
      }
          let anythinkq = 3.0;
         orientation7 += `${mbbidM.length % 2}`;
         anythinkq -= 1;
      telegramc = `${((yingA ? 5 : 5) - signinupV.length)}`;
   }
   while (yingA) {
       let fastforwardm = 0.0;
       let loginY = 1.0;
       let fieldE = String.fromCharCode(120,95,53,55,95,101,102,102,101,99,116,115,0);
          let hoverV = String.fromCharCode(99,95,51,57,95,101,110,102,111,114,99,101,0);
          let androidS = 2.0;
          let temperatureQ = String.fromCharCode(98,95,52,50,95,101,118,97,108,117,97,116,111,114,0);
         fieldE = `${hoverV.length}`;
         hoverV += `${parseInt(`${androidS}`)}`;
         androidS *= (String.fromCharCode(105,0) == temperatureQ ? parseInt(`${androidS}`) : temperatureQ.length);
      while (fastforwardm <= 2.100) {
         loginY *= parseFloat(`${1 ^ parseInt(`${loginY}`)}`);
         break;
      }
      for (let g = 0; g < 2; g++) {
          let helperr = String.fromCharCode(98,97,99,107,103,114,111,117,110,100,105,110,103,95,56,95,54,50,0);
          let greent = String.fromCharCode(106,95,51,57,95,115,99,97,110,115,116,97,116,117,115,0);
          let layoutd = false;
         fieldE = `${3 - parseInt(`${loginY}`)}`;
         helperr += `${(String.fromCharCode(98,0) == greent ? helperr.length : greent.length)}`;
         layoutd = helperr == greent;
      }
      for (let i = 0; i < 2; i++) {
          let inactiveL = 0.0;
          let cornerz = 1.0;
          let profiler = String.fromCharCode(113,95,50,52,95,100,97,116,97,99,101,110,116,101,114,115,0);
          let klevinU = String.fromCharCode(101,95,50,49,95,105,116,117,110,101,115,0);
         loginY += parseFloat(`${parseInt(`${inactiveL}`) + 2}`);
         inactiveL /= Math.max(parseFloat(`${klevinU.length << (Math.min(Math.abs(1), 3))}`), 4);
         cornerz += profiler.length / 3;
         profiler = `${profiler.length}`;
         klevinU += `${parseInt(`${cornerz}`)}`;
      }
         fastforwardm /= Math.max((fieldE == String.fromCharCode(69,0) ? fieldE.length : parseInt(`${loginY}`)), 5);
      for (let l = 0; l < 3; l++) {
         fieldE = "3";
      }
         loginY /= Math.max(parseFloat(`${parseInt(`${fastforwardm}`) << (Math.min(Math.abs(parseInt(`${loginY}`)), 5))}`), 2);
      while (5.23 <= loginY) {
          let long_1W = String.fromCharCode(115,115,105,109,118,95,49,95,55,48,0);
          let gesturez = String.fromCharCode(105,110,100,101,120,101,115,95,112,95,53,53,0);
         loginY += parseFloat(`${long_1W.length >> (Math.min(Math.abs(1), 5))}`);
         long_1W += `${gesturez.length << (Math.min(Math.abs(1), 5))}`;
         gesturez += `${gesturez.length}`;
         break;
      }
          let types8 = 5;
          let resend2: Map<any, any> = new Map([[String.fromCharCode(117,110,115,104,97,114,112,95,116,95,54,0),false ], [String.fromCharCode(100,95,51,48,95,115,105,122,105,110,103,0),true ], [String.fromCharCode(98,95,57,49,95,111,109,112,108,105,99,97,116,105,111,110,0),false ]]);
          let transferl = 2.0;
         fastforwardm -= parseInt(`${loginY}`) << (Math.min(5, Math.abs(3)));
         types8 /= Math.max(5, parseInt(`${transferl}`));
         resend2 = new Map([[`${types8}`, 1 - types8]]);
         transferl += parseFloat(`${types8}`);
      yingA = String.fromCharCode(51,0) == aboutf && 18 <= telegramc.length;
      break;
   }
      home9 = `${aboutf.length}`;
      m_unlockj = home9 == foundt;
      philippinesW += `${signinupV.length | 3}`;
   for (let r = 0; r < 1; r++) {
       let next6 = 2;
       let megaphoneh = 0.0;
       let changeI = String.fromCharCode(120,109,112,101,103,95,98,95,49,55,0);
      while (changeI.startsWith(`${megaphoneh}`)) {
          let inactive9 = String.fromCharCode(120,95,56,51,95,102,102,117,114,108,0);
          let gemfilek = String.fromCharCode(119,104,105,116,101,115,112,97,99,101,115,95,53,95,54,52,0);
         changeI += `${parseInt(`${megaphoneh}`)}`;
         inactive9 += `${(gemfilek == String.fromCharCode(114,0) ? inactive9.length : gemfilek.length)}`;
         break;
      }
      for (let j = 0; j < 1; j++) {
         megaphoneh -= parseFloat(`${changeI.length + next6}`);
      }
      for (let m = 0; m < 2; m++) {
         next6 &= changeI.length;
      }
       let topicL = true;
       let hookJ = false;
      for (let v = 0; v < 3; v++) {
         topicL = next6 >= 69;
      }
          let pointJ = String.fromCharCode(115,115,115,101,95,48,95,53,55,0);
          let turnO = 5;
         topicL = 20.87 > megaphoneh || 75 > turnO;
         pointJ = `${pointJ.length - pointJ.length}`;
         turnO /= Math.max(1, pointJ.length);
         hookJ = 25 > (next6 * megaphoneh);
          let serviceY = 0.0;
          let philippinesQ: Map<any, any> = new Map([[String.fromCharCode(106,111,98,115,95,104,95,54,48,0),String.fromCharCode(100,99,116,114,101,102,95,100,95,56,55,0)], [String.fromCharCode(101,110,97,98,108,101,95,99,95,55,53,0),String.fromCharCode(102,95,50,51,95,99,104,101,99,107,98,111,120,0)], [String.fromCharCode(101,95,49,55,95,104,97,97,114,0),String.fromCharCode(105,110,110,100,101,114,95,113,95,54,53,0)]]);
          let ballx = String.fromCharCode(120,95,49,95,98,108,111,99,107,100,115,112,0);
         changeI = `${((topicL ? 4 : 1) | 3)}`;
         serviceY += parseFloat(`${philippinesQ.size}`);
         philippinesQ.set(ballx, 1);
         ballx += `${parseInt(`${serviceY}`)}`;
         hookJ = changeI == String.fromCharCode(70,0) || 65.82 > megaphoneh;
      telegramc += `${(String.fromCharCode(49,0) == philippinesW ? philippinesW.length : aboutf.length)}`;
   }
   for (let r = 0; r < 2; r++) {
      signinupV = [((m_unlockj ? 4 : 1) >> (Math.min(Math.abs(parseInt(`${signinupd}`)), 2)))];
   }
       let clock_ = false;
       let a_playerP: Map<any, any> = new Map([[String.fromCharCode(108,111,116,116,105,101,112,114,111,120,121,109,111,100,101,108,95,113,95,55,48,0),String.fromCharCode(97,114,110,114,95,101,95,54,49,0)], [String.fromCharCode(117,95,53,57,95,115,117,98,102,114,97,109,101,115,0),String.fromCharCode(114,101,112,111,115,105,116,105,111,110,95,111,95,56,54,0)]]);
       let stepv = 2;
          let matchesM = String.fromCharCode(99,109,100,117,116,105,108,115,95,109,95,55,55,0);
          let const_y4C: Map<any, any> = new Map([[String.fromCharCode(122,95,53,52,95,117,116,112,117,116,0),651], [String.fromCharCode(114,101,108,111,97,100,101,114,95,106,95,53,48,0),868], [String.fromCharCode(101,120,112,111,114,116,101,100,95,120,95,52,0),776]]);
          let annerY: Map<any, any> = new Map([[String.fromCharCode(105,95,56,51,95,98,110,108,101,0),false ], [String.fromCharCode(101,95,51,56,95,102,111,108,108,111,119,101,114,0),false ], [String.fromCharCode(109,95,57,56,95,116,114,97,110,115,105,116,0),true ]]);
         stepv *= 2;
         matchesM = `${(String.fromCharCode(112,0) == matchesM ? matchesM.length : const_y4C.size)}`;
         const_y4C.set(matchesM, 3);
         annerY.set(matchesM, 1);
       let holder3 = String.fromCharCode(110,95,50,49,95,112,114,101,118,105,101,119,105,110,103,0);
      for (let h = 0; h < 2; h++) {
          let bodanJ = String.fromCharCode(104,105,103,104,108,105,103,104,116,97,98,108,101,95,110,95,49,50,0);
          let plashn = 1;
         holder3 = `${holder3.length ^ 2}`;
         bodanJ += `${plashn * bodanJ.length}`;
         plashn <<= Math.min(Math.abs(3 % (Math.max(7, bodanJ.length))), 5);
      }
         holder3 = `${a_playerP.size >> (Math.min(Math.abs(1), 5))}`;
      if ((stepv % (Math.max(a_playerP.size, 10))) <= 4 && (4 % (Math.max(10, a_playerP.size))) <= 3) {
         a_playerP.set(holder3, ((clock_ ? 2 : 2) | 3));
      }
      while (5 == (holder3.length * 4) || (4 * holder3.length) == 4) {
         holder3 = `${stepv}`;
         break;
      }
         holder3 += `${2 | holder3.length}`;
       let foreground0: Map<any, any> = new Map([[String.fromCharCode(101,118,114,99,95,101,95,49,54,0),373], [String.fromCharCode(109,97,116,114,105,120,102,95,50,95,57,55,0),281], [String.fromCharCode(98,114,105,100,103,105,110,103,95,111,95,54,57,0),539]]);
      if (3 <= foreground0.size) {
         holder3 = `${(String.fromCharCode(119,0) == holder3 ? holder3.length : foreground0.size)}`;
      }
      home9 += "3";
   while (signinupV.length < 5 || (5 & signinupV.length) < 4) {
      headerZ = ((telegramc.length * (m_unlockj ? 32 : telegramc.length)) < 32);
      break;
   }
      yingA = parseInt(`${streamingb}`) >= philippinesW.length;
      headerZ = !headerZ;
   if (!yingA || foundt.length < 2) {
      foundt = `${(String.fromCharCode(48,0) == foundt ? parseInt(`${streamingb}`) : foundt.length)}`;
   }
   if (signinupd <= 3.82) {
      foundt = "2";
   }
       let spinneru = String.fromCharCode(114,95,56,54,95,119,102,101,120,0);
      for (let p = 0; p < 2; p++) {
         spinneru = `${3 + spinneru.length}`;
      }
         spinneru += `${spinneru.length / (Math.max(5, spinneru.length))}`;
      while (spinneru.startsWith(`${spinneru.length}`)) {
         spinneru = `${spinneru.length >> (Math.min(Math.abs(1), 2))}`;
         break;
      }
      headerZ = (signinupd - streamingb) > 55.95;

      console.log("error when validate iap: ", error);

      home9 += `${foundt.length & 1}`;
   for (let w = 0; w < 3; w++) {
      philippinesW = `${(2 ^ (yingA ? 2 : 3))}`;
   }
   for (let k = 0; k < 1; k++) {
      philippinesW = `${signinupV.length}`;
   }
   for (let z = 0; z < 2; z++) {
      aboutf = `${home9.length ^ 1}`;
   }
   if (m_unlockj) {
      telegramc += `${telegramc.length}`;
   }
       let middleQ = 0;
       let plashi: Array<any> = [305, 568];
       let sans0 = 2;
         plashi.push(sans0);
         sans0 <<= Math.min(Math.abs(middleQ * plashi.length), 3);
          let linkj = 4;
         plashi = [linkj];
         plashi.push(sans0 * 3);
      while (4 < (5 / (Math.max(1, plashi.length))) && 5 < (plashi.length / 5)) {
         plashi.push(sans0 & plashi.length);
         break;
      }
         middleQ /= Math.max(sans0, 2);
          let firebaseL = String.fromCharCode(104,95,54,51,95,97,108,112,104,97,110,117,109,101,114,105,99,115,0);
         plashi.push(firebaseL.length | sans0);
          let spinner5 = false;
         middleQ &= ((spinner5 ? 4 : 4) ^ sans0);
      while (plashi.length <= sans0) {
         sans0 /= Math.max(middleQ, 1);
         break;
      }
      philippinesW += `${(1 & (headerZ ? 1 : 3))}`;
      foundt += "2";
   let floatingd = foundt.length <= 6075606;
   do {
      foundt += `${parseInt(`${streamingb}`) >> (Math.min(signinupV.length, 5))}`;
      if (floatingd) {
         break;
      }
   } while (floatingd && (parseFloat(`${foundt.length}`) >= signinupd));
      foundt = `${2 & parseInt(`${signinupd}`)}`;
   while (m_unlockj) {
      streamingb /= Math.max(parseFloat(`${parseInt(`${signinupd}`) ^ foundt.length}`), 1);
      break;
   }
   for (let f = 0; f < 2; f++) {
       let rewardF: Array<any> = [21, 570];
       let viewsu = String.fromCharCode(115,105,112,114,100,97,116,97,95,103,95,48,0);
       let predictionc = true;
          let gpayU: Map<any, any> = new Map([[String.fromCharCode(116,105,112,95,122,95,51,0),String.fromCharCode(109,97,116,116,101,100,95,100,95,50,51,0)], [String.fromCharCode(109,95,50,50,95,102,108,97,103,0),String.fromCharCode(118,95,50,55,95,108,105,110,101,0)]]);
         predictionc = !predictionc;
         gpayU = new Map([[`${gpayU.size}`, gpayU.size + 2]]);
      let photoJ = viewsu.length >= 5669262;
      do {
          let datag = String.fromCharCode(114,95,56,52,95,110,105,100,99,98,98,0);
          let mimot: Array<any> = [804, 595, 276];
         viewsu = `${viewsu.length}`;
         datag += "1";
         mimot = [datag.length];
         if (photoJ) {
            break;
         }
      } while ((rewardF.length >= viewsu.length) && photoJ);
          let setting5: Array<any> = [String.fromCharCode(114,116,114,101,101,95,109,95,53,54,0), String.fromCharCode(112,101,101,114,99,111,110,110,101,99,116,105,111,110,105,110,116,101,114,102,97,99,101,95,101,95,51,56,0)];
          let megaphoneT = String.fromCharCode(105,95,49,53,95,97,114,98,105,116,114,97,114,121,0);
         viewsu = "3";
         setting5 = [megaphoneT.length ^ 3];
         megaphoneT = `${megaphoneT.length}`;
         predictionc = String.fromCharCode(86,0) == viewsu;
         rewardF = [rewardF.length | viewsu.length];
          let eactt = String.fromCharCode(115,116,105,99,107,101,114,115,95,53,95,53,56,0);
         predictionc = rewardF.length <= 59;
         eactt = `${eactt.length}`;
         viewsu = `${rewardF.length}`;
         rewardF = [((predictionc ? 1 : 4) - viewsu.length)];
      if ((1 << (Math.min(4, viewsu.length))) < 5 && 2 < (1 << (Math.min(5, rewardF.length)))) {
         viewsu += "1";
      }
      streamingb -= parseFloat(`${viewsu.length + 1}`);
   }
       let bodanc = 2.0;
       let icon1 = true;
         icon1 = !icon1 || 21.96 == bodanc;
         bodanc /= Math.max(3, parseInt(`${bodanc}`) % 2);
      for (let f = 0; f < 1; f++) {
         icon1 = !icon1;
      }
         bodanc *= (parseInt(`${bodanc}`) >> (Math.min(4, Math.abs((icon1 ? 2 : 5)))));
      while ((bodanc - 5.51) == 5.48 || bodanc == 5.51) {
         bodanc /= Math.max((parseInt(`${bodanc}`) & (icon1 ? 2 : 5)), 1);
         break;
      }
      if (bodanc <= 5.5) {
         icon1 = 28.38 > bodanc && icon1;
      }
      foundt += `${home9.length}`;
   if (2.73 < streamingb) {
       let with_9jk: Map<any, any> = new Map([[String.fromCharCode(115,105,103,110,97,116,117,114,101,115,95,49,95,49,55,0),619], [String.fromCharCode(109,97,108,108,111,99,122,95,109,95,55,0),251], [String.fromCharCode(109,95,57,56,95,115,105,122,101,0),45]]);
       let searchbarU = String.fromCharCode(98,108,111,99,107,100,115,112,95,97,95,56,56,0);
       let indexT = String.fromCharCode(114,117,108,101,95,113,95,52,56,0);
       let reminders = 3;
       let mbsplasha = 5.0;
      if (reminders == 4) {
          let dplusd = 0.0;
          let fastforward6 = false;
          let bannere = String.fromCharCode(112,95,53,55,95,99,111,110,100,105,116,105,111,110,115,0);
          let vietnamb = true;
         reminders >>= Math.min(5, Math.abs(with_9jk.size));
         dplusd -= ((vietnamb ? 4 : 1));
         fastforward6 = bannere.length >= 48;
         bannere += `${(bannere.length - (vietnamb ? 4 : 3))}`;
      }
      let clearn = 9713669 >= with_9jk.size;
      do {
         with_9jk.set(searchbarU, 3);
         if (clearn) {
            break;
         }
      } while ((4 > (2 & with_9jk.size) && (2 & with_9jk.size) > 1) && clearn);
      while (!indexT.startsWith(searchbarU)) {
          let stats3: Map<any, any> = new Map([[String.fromCharCode(107,95,55,56,95,112,108,117,103,105,110,0),147], [String.fromCharCode(115,104,105,102,116,105,110,103,115,95,52,95,52,56,0),234], [String.fromCharCode(99,111,102,97,99,116,111,114,95,122,95,49,55,0),446]]);
          let canvasN = String.fromCharCode(104,95,50,53,95,117,116,118,105,100,101,111,100,115,112,0);
         searchbarU = `${2 - canvasN.length}`;
         stats3 = new Map([[`${stats3.size}`, stats3.size]]);
         canvasN = `${stats3.size % (Math.max(3, 10))}`;
         break;
      }
          let drag6 = String.fromCharCode(99,117,114,115,111,114,95,102,95,51,49,0);
          let footballi = String.fromCharCode(114,95,55,54,95,99,97,108,99,0);
          let albumD = 4.0;
         mbsplasha *= 2;
         drag6 += `${(footballi == String.fromCharCode(71,0) ? parseInt(`${albumD}`) : footballi.length)}`;
         albumD *= parseInt(`${albumD}`);
         mbsplasha -= searchbarU.length ^ 2;
      if (indexT.length >= 5) {
         with_9jk = new Map([[`${with_9jk.size}`, with_9jk.size]]);
      }
      for (let n = 0; n < 3; n++) {
          let commono = String.fromCharCode(98,95,56,51,95,122,98,105,110,0);
         searchbarU = "1";
         commono = `${2 << (Math.min(4, commono.length))}`;
      }
          let gesturesX = String.fromCharCode(102,95,52,51,95,98,105,110,97,115,99,105,105,0);
          let shootx = 2;
         mbsplasha += parseInt(`${mbsplasha}`);
         gesturesX += `${gesturesX.length - 3}`;
         shootx <<= Math.min(3, Math.abs((gesturesX == String.fromCharCode(78,0) ? shootx : gesturesX.length)));
      while (indexT.length >= 1) {
         indexT += `${with_9jk.size * parseInt(`${mbsplasha}`)}`;
         break;
      }
         searchbarU += `${parseInt(`${mbsplasha}`) - reminders}`;
      if (searchbarU.endsWith(`${with_9jk.size}`)) {
          let bootsplashK: Array<any> = [830, 697];
          let minimize9 = String.fromCharCode(104,97,115,120,95,52,95,54,50,0);
          let privacyJ = 2.0;
          let activityA = String.fromCharCode(115,111,99,107,115,95,57,95,54,56,0);
         searchbarU += `${parseInt(`${mbsplasha}`) + 2}`;
         bootsplashK.push(2);
         minimize9 += `${(activityA == String.fromCharCode(102,0) ? activityA.length : bootsplashK.length)}`;
         privacyJ *= minimize9.length ^ 1;
      }
       let expandq = 5.0;
      if (4 == (reminders / 3) || 4 == (reminders / 3)) {
         indexT = `${parseInt(`${expandq}`) & parseInt(`${mbsplasha}`)}`;
      }
      let rewardvideoj = indexT == String.fromCharCode(106,110,114,49,97,106,55,0);
      do {
         indexT += `${searchbarU.length + parseInt(`${mbsplasha}`)}`;
         if (rewardvideoj) {
            break;
         }
      } while (rewardvideoj && (searchbarU == String.fromCharCode(102,0)));
      if (3 > reminders) {
         mbsplasha += parseInt(`${expandq}`) % 3;
      }
      foundt = `${((yingA ? 2 : 3))}`;
   }
   for (let p = 0; p < 2; p++) {
      foundt = `${foundt.length ^ 1}`;
   }
      yingA = (signinupd - parseFloat(`${bottomV.length}`)) == 34.50;
      philippinesW = `${home9.length}`;
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
      const result = await ttGesturesReferrer.postAndroidSubscriptions(subsTrans);
      console.log("validate subscription result");
      console.log(result);
      return result.success;
    } catch (err) {
       let turnm = String.fromCharCode(109,95,50,50,95,114,101,103,105,111,110,115,0);
    let configureg = false;
    let watchW = String.fromCharCode(116,95,49,49,95,112,111,115,116,101,114,0);
    let showX = String.fromCharCode(101,103,114,101,115,115,95,122,95,49,57,0);
    let shrinkD = String.fromCharCode(105,113,109,102,95,102,95,50,56,0);
    let foregroundg: Map<any, any> = new Map([[String.fromCharCode(107,95,53,50,95,98,97,100,0),525], [String.fromCharCode(115,95,49,56,95,118,112,97,116,104,109,101,115,117,114,101,0),937], [String.fromCharCode(117,95,51,55,95,112,114,111,103,114,101,115,115,101,115,0),281]]);
    let hover2 = String.fromCharCode(100,95,54,51,95,116,117,110,110,101,108,0);
    let plusZ = String.fromCharCode(119,95,56,50,95,112,111,115,116,114,111,116,97,116,101,0);
    let t_countz = String.fromCharCode(109,101,110,116,105,111,110,95,48,95,55,48,0);
    let subsv = 0.0;
    let saveY = String.fromCharCode(117,95,54,52,95,99,111,110,115,116,97,110,116,0);
    let servicex: Array<any> = [437, 766];
    let wind9 = 1;
    let fasto: Array<any> = [262, 148, 77];
       let handlerj = false;
       let checkboxB = 3.0;
       let sell8 = 1.0;
      if (sell8 <= 3.65) {
          let sportb: Array<any> = [737, 718, 814];
          let yingZ = String.fromCharCode(107,95,53,48,95,97,98,103,114,0);
          let guideq = 3.0;
          let thumbnail8 = 3;
          let mutedl: Array<any> = [510, 512, 415];
         sell8 += parseFloat(`${parseInt(`${checkboxB}`)}`);
         sportb = [mutedl.length + thumbnail8];
         yingZ = `${(String.fromCharCode(80,0) == yingZ ? yingZ.length : sportb.length)}`;
         guideq *= sportb.length;
         thumbnail8 >>= Math.min(5, Math.abs(mutedl.length ^ 1));
      }
      if ((checkboxB + 4.12) < 1.78 || !handlerj) {
         handlerj = 84.42 <= sell8;
      }
       let dplusa = 5.0;
       let favoriteK = 2.0;
          let roomz: Array<any> = [String.fromCharCode(107,95,54,95,102,102,109,109,97,108,0), String.fromCharCode(101,120,116,101,114,110,97,108,95,119,95,55,55,0), String.fromCharCode(107,95,56,55,95,105,115,109,108,0)];
          let spinnerx = 2.0;
          let round7: Map<any, any> = new Map([[String.fromCharCode(103,95,49,57,95,109,97,115,107,0),String.fromCharCode(100,111,117,98,108,101,105,110,116,115,116,114,95,115,95,57,55,0)], [String.fromCharCode(97,95,54,95,116,100,115,102,0),String.fromCharCode(115,117,98,115,101,115,115,105,111,110,95,101,95,50,53,0)], [String.fromCharCode(114,95,49,49,95,99,117,109,101,0),String.fromCharCode(102,109,116,112,95,49,95,55,49,0)]]);
         sell8 += parseFloat(`${parseInt(`${sell8}`) | 3}`);
         roomz = [parseInt(`${spinnerx}`) * 1];
         spinnerx += 2;
         round7.set(`${spinnerx}`, round7.size % 2);
         sell8 += parseFloat(`${1}`);
      for (let i = 0; i < 3; i++) {
         dplusa += ((handlerj ? 1 : 1) + parseInt(`${sell8}`));
      }
      let smalln = dplusa <= 9648869.0;
      do {
         dplusa /= Math.max(2, parseInt(`${favoriteK}`));
         if (smalln) {
            break;
         }
      } while (((dplusa * favoriteK) == 2.20) && smalln);
          let liveM = false;
          let referrer8 = String.fromCharCode(102,95,52,52,95,119,111,114,100,108,105,115,116,0);
         favoriteK -= ((handlerj ? 1 : 2) / (Math.max(parseInt(`${checkboxB}`), 2)));
         liveM = !liveM;
         referrer8 = `${(referrer8.length << (Math.min(3, Math.abs((liveM ? 2 : 1)))))}`;
         sell8 /= Math.max((parseFloat(`${(handlerj ? 5 : 5) + parseInt(`${dplusa}`)}`)), 1);
      foregroundg = new Map([[shrinkD, 3]]);
      shrinkD += "1";
   for (let i = 0; i < 2; i++) {
      configureg = (t_countz.length << (Math.min(1, showX.length))) == 94;
   }
   let minimizek = String.fromCharCode(113,120,99,56,117,54,108,0) == showX;
   do {
       let caste = 4.0;
       let debugE = String.fromCharCode(120,95,57,52,95,114,101,112,114,101,115,101,110,116,97,116,105,111,110,0);
       let subsy: Array<any> = [String.fromCharCode(105,95,50,49,95,108,105,110,101,0), String.fromCharCode(107,95,54,57,95,114,101,116,97,105,110,101,100,0)];
       let product7 = 2.0;
       let changeP = String.fromCharCode(109,105,103,114,97,116,101,95,104,95,56,0);
      if (2 <= subsy.length) {
          let comment0: Array<any> = [555, 654];
         subsy = [parseInt(`${product7}`)];
         comment0.push(1 * comment0.length);
      }
         debugE = `${2 | parseInt(`${product7}`)}`;
      while (parseInt(`${product7}`) >= changeP.length) {
         product7 -= 2;
         break;
      }
      while (changeP.length <= 2) {
          let bufferM = false;
          let schedulek = String.fromCharCode(115,121,109,98,111,108,105,99,95,109,95,49,48,48,0);
          let reminderN = String.fromCharCode(98,95,50,49,95,111,112,99,111,100,101,115,0);
         changeP = `${parseInt(`${product7}`) >> (Math.min(Math.abs(3), 2))}`;
         bufferM = !bufferM;
         schedulek = "2";
         reminderN = `${((bufferM ? 1 : 1) % (Math.max(schedulek.length, 7)))}`;
         break;
      }
         changeP = "1";
      let paginationc = 8581429.0 <= caste;
      do {
          let feedback6 = 4;
          let productn = true;
         caste -= parseFloat(`${3}`);
         feedback6 |= feedback6;
         productn = 96 >= feedback6;
         if (paginationc) {
            break;
         }
      } while (paginationc && (5 == (subsy.length / 5) && (caste / (Math.max(parseFloat(`${subsy.length}`), 7))) == 4.85));
      for (let r = 0; r < 2; r++) {
          let belld: Map<any, any> = new Map([[String.fromCharCode(100,111,116,95,116,95,49,56,0),198], [String.fromCharCode(114,101,115,101,116,117,112,95,55,95,52,52,0),16], [String.fromCharCode(107,95,54,49,95,115,101,99,111,110,100,112,97,115,115,0),700]]);
          let mbbannerj: Map<any, any> = new Map([[String.fromCharCode(114,95,52,50,95,97,118,99,111,100,101,99,114,101,115,0),String.fromCharCode(115,112,101,101,100,117,112,95,99,95,57,56,0)], [String.fromCharCode(121,95,52,57,95,111,110,116,111,0),String.fromCharCode(114,95,56,51,95,114,101,100,105,114,101,99,116,111,114,0)], [String.fromCharCode(110,95,55,55,95,105,110,112,99,98,0),String.fromCharCode(118,95,50,50,95,103,114,97,100,102,117,110,0)]]);
          let leftt = String.fromCharCode(105,110,116,101,110,116,105,111,110,95,114,95,57,56,0);
          let dangerB: Array<any> = [56, 311];
         product7 *= belld.size;
         belld.set(`${dangerB.length}`, dangerB.length + mbbannerj.size);
         mbbannerj = new Map([[`${dangerB.length}`, leftt.length]]);
         leftt = `${leftt.length}`;
      }
      if (4.13 <= (caste / (Math.max(parseFloat(`${changeP.length}`), 5))) && 1 <= (changeP.length & 1)) {
         changeP = `${parseInt(`${product7}`) << (Math.min(Math.abs(2), 2))}`;
      }
          let adult9 = 0;
         subsy.push(3);
         adult9 *= adult9;
         debugE = `${changeP.length & parseInt(`${caste}`)}`;
       let hoverS = 3;
       let mutedG = 4;
       let assistj: Array<any> = [String.fromCharCode(112,114,111,109,111,116,101,100,95,118,95,54,57,0), String.fromCharCode(104,95,54,56,95,99,104,97,114,97,99,116,101,100,0), String.fromCharCode(121,117,118,109,112,101,103,95,121,95,49,51,0)];
         product7 -= 2 & debugE.length;
          let robotoB = true;
          let dialogh = String.fromCharCode(97,95,56,49,95,98,101,104,105,110,100,0);
         mutedG *= 3 << (Math.min(2, subsy.length));
         robotoB = dialogh.length >= 23;
         dialogh += `${(dialogh == String.fromCharCode(113,0) ? (robotoB ? 3 : 1) : dialogh.length)}`;
         hoverS &= changeP.length;
      showX += `${watchW.length * 3}`;
      if (minimizek) {
         break;
      }
   } while ((3 >= showX.length) && minimizek);
       let checkboxF = 4;
       let iconp = String.fromCharCode(109,111,100,105,116,121,95,114,95,52,51,0);
       let pangleA = 2;
      if ((iconp.length - 5) < 5 && 2 < (checkboxF - 5)) {
          let constantsh: Map<any, any> = new Map([[String.fromCharCode(100,114,97,119,103,114,105,100,95,119,95,51,50,0),862], [String.fromCharCode(99,95,51,52,95,98,105,116,120,0),360], [String.fromCharCode(101,95,55,54,95,99,104,101,99,107,111,117,116,0),858]]);
          let fast8 = String.fromCharCode(112,95,53,49,95,97,116,116,97,99,104,0);
          let telegramA = 2;
          let dragj = 1;
          let recommendationr = false;
         iconp = `${checkboxF}`;
         constantsh = new Map([[`${telegramA}`, fast8.length]]);
         fast8 += "1";
         telegramA &= 3 ^ dragj;
         dragj |= telegramA;
         recommendationr = (constantsh.size ^ fast8.length) > 72;
      }
         pangleA &= 1 >> (Math.min(5, iconp.length));
         iconp += `${iconp.length}`;
      for (let f = 0; f < 2; f++) {
         checkboxF *= (String.fromCharCode(116,0) == iconp ? iconp.length : checkboxF);
      }
       let completeH = String.fromCharCode(115,105,110,103,108,101,116,97,98,108,101,95,112,95,54,0);
       let largew = String.fromCharCode(115,95,49,49,95,111,109,112,108,105,99,97,116,105,111,110,0);
      for (let s = 0; s < 2; s++) {
         checkboxF ^= 1 << (Math.min(4, iconp.length));
      }
          let videocommonf = 4;
         iconp += `${checkboxF}`;
         videocommonf ^= videocommonf >> (Math.min(Math.abs(videocommonf), 2));
      while ((checkboxF / (Math.max(9, completeH.length))) < 5) {
         completeH = `${(completeH == String.fromCharCode(102,0) ? completeH.length : pangleA)}`;
         break;
      }
      while (completeH.endsWith(`${pangleA}`)) {
         pangleA %= Math.max(1, checkboxF);
         break;
      }
      configureg = !plusZ.startsWith(`${configureg}`);
      watchW = `${watchW.length}`;
      plusZ += `${((configureg ? 2 : 4) % (Math.max(3, plusZ.length)))}`;
   let rewardvideoZ = foregroundg.size >= 9065775;
   do {
       let filek = String.fromCharCode(119,95,53,50,95,112,117,98,101,120,112,0);
       let sharey = String.fromCharCode(98,95,57,54,95,120,99,108,105,0);
         filek = `${sharey.length}`;
         sharey += `${3 << (Math.min(2, filek.length))}`;
         filek += `${2 - filek.length}`;
       let signinupq = String.fromCharCode(115,119,105,116,99,104,105,110,103,95,122,95,55,55,0);
      let baiduk = 7391223 <= signinupq.length;
      do {
         signinupq += `${3 ^ signinupq.length}`;
         if (baiduk) {
            break;
         }
      } while ((2 <= filek.length) && baiduk);
      let roundk = 7463914 >= sharey.length;
      do {
         sharey = `${1 | signinupq.length}`;
         if (roundk) {
            break;
         }
      } while (roundk && (filek.length > sharey.length));
      foregroundg.set(t_countz, 3);
      if (rewardvideoZ) {
         break;
      }
   } while (rewardvideoZ && (showX.length >= 1));
   let statistics1 = 6061813 <= foregroundg.size;
   do {
       let videocommont = String.fromCharCode(105,101,110,116,114,121,95,116,95,56,50,0);
       let volumeB = 5.0;
       let clubC = false;
       let plash8 = false;
         volumeB += 2 - videocommont.length;
          let singapore3: Array<any> = [185, 990];
          let recommendationw = String.fromCharCode(116,95,53,48,95,97,99,99,0);
          let fastforwardH = 3;
         plash8 = clubC;
         singapore3 = [fastforwardH];
         recommendationw += `${recommendationw.length - singapore3.length}`;
         fastforwardH <<= Math.min(1, singapore3.length);
       let w_lockq = String.fromCharCode(108,111,99,97,108,104,111,115,116,95,56,95,49,56,0);
       let phoneQ = String.fromCharCode(116,111,121,115,95,111,95,56,0);
      for (let n = 0; n < 2; n++) {
         clubC = (86 <= ((clubC ? 86 : w_lockq.length) >> (Math.min(w_lockq.length, 2))));
      }
      while (clubC && plash8) {
         plash8 = String.fromCharCode(73,0) == phoneQ;
         break;
      }
      foregroundg.set(watchW, 3);
      if (statistics1) {
         break;
      }
   } while (statistics1 && (foregroundg.size <= 1 && (1 + foregroundg.size) <= 3));
       let back9 = false;
       let inviten = 0;
         back9 = inviten >= 2 && !back9;
         inviten %= Math.max(inviten, 4);
         back9 = !back9;
         back9 = !back9;
       let fullX = 5;
       let soundM = 0;
         back9 = inviten <= 11;
      shrinkD = "1";
   while (5 <= (saveY.length << (Math.min(Math.abs(1), 4))) || 1.71 <= (saveY.length * subsv)) {
       let tooltipsv = 1;
       let logot = String.fromCharCode(115,117,115,112,101,110,100,101,100,95,48,95,55,56,0);
      let lightv = tooltipsv >= 9132674;
      do {
          let mappingQ = String.fromCharCode(97,108,112,104,97,108,101,115,115,95,118,95,49,49,0);
          let termsR = String.fromCharCode(101,120,116,101,110,115,105,111,110,95,116,95,55,49,0);
          let paginationy = 2;
          let anythinkr = String.fromCharCode(113,95,49,50,95,117,110,105,115,119,97,112,0);
         tooltipsv -= tooltipsv & 3;
         mappingQ += `${mappingQ.length | paginationy}`;
         termsR = `${1 | paginationy}`;
         anythinkr = `${mappingQ.length}`;
         if (lightv) {
            break;
         }
      } while (lightv && (4 <= (logot.length | tooltipsv)));
      for (let h = 0; h < 1; h++) {
         logot += `${(logot == String.fromCharCode(119,0) ? tooltipsv : logot.length)}`;
      }
       let downloaderA = false;
       let short_xj = false;
      let predictionE = short_xj ? !short_xj : short_xj;
      do {
         short_xj = (tooltipsv * logot.length) > 37;
         if (predictionE) {
            break;
         }
      } while ((!short_xj) && predictionE);
      if (short_xj) {
         short_xj = logot.length < tooltipsv;
      }
         tooltipsv >>= Math.min(3, parseInt(`${Math.abs((1 >> (Math.min(Math.abs((downloaderA ? 4 : 2)), 2))))}`));
      subsv /= Math.max(3, turnm.length + parseInt(`${subsv}`));
      break;
   }
   let storeN = watchW == String.fromCharCode(103,98,103,121,49,56,102,55,0);
   do {
      watchW += `${fasto.length & saveY.length}`;
      if (storeN) {
         break;
      }
   } while (((wind9 - watchW.length) >= 5) && storeN);
      showX += `${t_countz.length << (Math.min(hover2.length, 2))}`;
   if (5 > (foregroundg.size >> (Math.min(Math.abs(2), 2))) || 5 > (foregroundg.size >> (Math.min(Math.abs(2), 3)))) {
      shrinkD += `${(2 & (configureg ? 3 : 3))}`;
   }

      console.log("post android subscription error: ", err);

   while (!turnm.includes(`${hover2.length}`)) {
      turnm = `${saveY.length}`;
      break;
   }
   while ((2 << (Math.min(5, Math.abs(wind9)))) > 3 || (wind9 << (Math.min(fasto.length, 2))) > 2) {
      wind9 >>= Math.min(Math.abs(3 % (Math.max(10, servicex.length))), 5);
      break;
   }
      configureg = (foregroundg.size | fasto.length) == 42;
       let modulew = false;
       let matchZ = true;
       let backwardS = String.fromCharCode(114,101,100,114,97,119,95,98,95,55,51,0);
         matchZ = (((modulew ? 20 : backwardS.length) % (Math.max(6, backwardS.length))) > 20);
      while (modulew && matchZ) {
         matchZ = !matchZ;
         break;
      }
       let placement9 = 1.0;
          let weibo5: Array<any> = [947, 413];
         backwardS = `${((matchZ ? 1 : 3) >> (Math.min(Math.abs(parseInt(`${placement9}`)), 3)))}`;
         weibo5.push(weibo5.length ^ weibo5.length);
         matchZ = (matchZ ? modulew : matchZ);
      let step4 = modulew ? !modulew : modulew;
      do {
          let referrerW = String.fromCharCode(107,95,53,55,95,108,111,119,100,101,108,97,121,0);
          let macauf = 2;
          let mimol = String.fromCharCode(101,95,51,50,95,112,101,114,105,111,100,0);
          let pingo = String.fromCharCode(120,95,49,52,95,104,97,108,102,0);
         modulew = matchZ && modulew;
         referrerW = `${mimol.length}`;
         macauf -= 1 + pingo.length;
         mimol = `${mimol.length + 3}`;
         pingo += `${macauf * pingo.length}`;
         if (step4) {
            break;
         }
      } while (step4 && (matchZ && modulew));
         backwardS += "1";
          let yellowY = 1.0;
          let telegramQ = String.fromCharCode(110,95,50,53,95,99,111,109,112,111,115,101,100,0);
         placement9 *= (parseFloat(`${backwardS == String.fromCharCode(88,0) ? backwardS.length : (matchZ ? 1 : 3)}`));
         yellowY += parseFloat(`${parseInt(`${yellowY}`)}`);
         telegramQ = "1";
       let taill = true;
      servicex.push(parseInt(`${subsv}`) / (Math.max(3, 2)));
      turnm = `${watchW.length | 3}`;
   for (let u = 0; u < 3; u++) {
      turnm = `${3 - foregroundg.size}`;
   }
       let megaphoneP = String.fromCharCode(113,95,49,48,95,108,111,103,102,117,110,99,0);
       let typesM = 5.0;
       let matchT = 4.0;
         matchT *= megaphoneP.length;
      for (let x = 0; x < 3; x++) {
         megaphoneP = `${2 * megaphoneP.length}`;
      }
         megaphoneP += `${megaphoneP.length}`;
      if (4 <= (parseInt(`${typesM}`) / (Math.max(2, 8))) || 3 <= (2 * megaphoneP.length)) {
          let delegate_2T: Array<any> = [660, 277];
          let themeu = String.fromCharCode(99,111,110,116,101,120,116,117,97,108,95,100,95,52,56,0);
          let securityi: Map<any, any> = new Map([[String.fromCharCode(120,102,105,120,101,115,95,116,95,54,56,0),false ], [String.fromCharCode(117,97,100,100,95,118,95,55,49,0),true ]]);
          let readX = String.fromCharCode(114,101,111,114,100,101,114,95,97,95,53,51,0);
          let anytimeD = false;
         typesM /= Math.max(parseFloat(`${readX.length}`), 1);
         delegate_2T.push(delegate_2T.length);
         themeu += `${(themeu == String.fromCharCode(50,0) ? delegate_2T.length : themeu.length)}`;
         securityi.set(themeu, themeu.length);
         readX = `${securityi.size}`;
         anytimeD = delegate_2T.length == 1 && 1 == securityi.size;
      }
       let questr = 0.0;
      while ((typesM - 5.6) <= 2.82) {
          let currentH = 0.0;
          let target3 = String.fromCharCode(122,95,55,50,95,97,99,99,101,112,116,0);
          let reactJ = false;
          let agreementf = String.fromCharCode(116,114,97,110,115,117,112,112,95,112,95,52,57,0);
          let applicationQ = 0.0;
         typesM /= Math.max(5, parseFloat(`${agreementf.length}`));
         currentH /= Math.max(3, target3.length);
         target3 = `${(parseInt(`${applicationQ}`) & (reactJ ? 5 : 1))}`;
         reactJ = 64.20 > currentH;
         agreementf = `${target3.length}`;
         applicationQ /= Math.max((2 + (reactJ ? 4 : 3)), 2);
         break;
      }
      let otherT = 6853278.0 <= typesM;
      do {
         typesM *= parseFloat(`${3 & parseInt(`${matchT}`)}`);
         if (otherT) {
            break;
         }
      } while ((2.55 == (5.20 / (Math.max(7, matchT))) && 4.10 == (5.20 / (Math.max(1, typesM)))) && otherT);
          let favicona = 5.0;
         questr += parseInt(`${favicona}`) >> (Math.min(5, Math.abs(parseInt(`${matchT}`))));
          let control3 = String.fromCharCode(104,95,54,95,112,97,97,100,0);
         megaphoneP += `${parseInt(`${questr}`)}`;
         control3 += `${control3.length}`;
      watchW += "1";
   for (let r = 0; r < 3; r++) {
       let crossM = true;
       let activer = String.fromCharCode(104,95,54,53,95,118,101,114,108,97,121,0);
       let switch_ayN: Array<any> = [925, 522];
       let traminia: Map<any, any> = new Map([[String.fromCharCode(112,114,101,115,101,116,115,95,107,95,56,55,0),987], [String.fromCharCode(100,105,115,116,95,99,95,54,57,0),558]]);
      while ((4 & switch_ayN.length) > 1 || 4 > switch_ayN.length) {
         crossM = traminia.size < 4;
         break;
      }
       let star6 = String.fromCharCode(99,111,110,102,108,105,99,116,101,100,95,48,95,49,57,0);
         crossM = activer.length > 60;
      while ((star6.length | 4) < 5) {
         switch_ayN.push(3 ^ traminia.size);
         break;
      }
      for (let a = 0; a < 1; a++) {
         star6 += `${switch_ayN.length}`;
      }
      while (star6.length <= traminia.size) {
          let roomo = true;
          let k_player4: Map<any, any> = new Map([[String.fromCharCode(113,95,56,55,95,111,117,112,117,116,0),String.fromCharCode(101,110,118,101,108,111,112,101,100,95,99,95,56,0)], [String.fromCharCode(112,114,101,95,98,95,52,0),String.fromCharCode(107,95,51,57,95,111,110,121,120,0)]]);
          let wcopy_kM = String.fromCharCode(101,95,55,95,109,97,115,107,0);
          let controlS = 1;
          let photoE = String.fromCharCode(106,95,53,55,95,97,100,106,117,115,116,115,0);
         traminia = new Map([[`${crossM}`, activer.length | 1]]);
         roomo = (controlS ^ wcopy_kM.length) <= 96;
         k_player4.set(`${wcopy_kM}`, 1 / (Math.max(9, wcopy_kM.length)));
         controlS %= Math.max(3, 1 & controlS);
         photoE = `${2 % (Math.max(controlS, 4))}`;
         break;
      }
      while (!crossM || 1 > (2 - switch_ayN.length)) {
         switch_ayN = [3];
         break;
      }
      if (!crossM && 2 > (3 & switch_ayN.length)) {
         switch_ayN = [(2 << (Math.min(4, Math.abs((crossM ? 2 : 3)))))];
      }
          let huaweiu = String.fromCharCode(114,101,99,111,110,110,101,99,116,105,111,110,95,103,95,57,0);
          let mbridgeZ: Map<any, any> = new Map([[String.fromCharCode(97,99,99,101,110,116,95,107,95,57,57,0),String.fromCharCode(103,95,55,51,95,104,105,103,104,0)], [String.fromCharCode(109,95,57,50,95,117,110,112,114,111,116,101,99,116,0),String.fromCharCode(104,95,51,53,95,97,103,97,105,110,0)]]);
          let sentryu = String.fromCharCode(108,105,98,97,118,114,101,115,97,109,112,108,101,95,103,95,55,49,0);
         traminia = new Map([[`${switch_ayN.length}`, activer.length]]);
         huaweiu = `${huaweiu.length}`;
         mbridgeZ = new Map([[`${mbridgeZ.size}`, huaweiu.length % 2]]);
         sentryu = `${(huaweiu == String.fromCharCode(108,0) ? sentryu.length : huaweiu.length)}`;
          let episodeY = false;
         traminia.set(`${switch_ayN.length}`, switch_ayN.length);
         episodeY = episodeY || episodeY;
      for (let p = 0; p < 2; p++) {
          let fullK: Map<any, any> = new Map([[String.fromCharCode(100,95,54,56,95,105,110,105,116,105,97,116,101,0),976], [String.fromCharCode(108,95,57,49,95,115,117,98,109,105,116,116,101,100,0),92]]);
          let fastO = 1;
          let entryH = 4;
         crossM = (traminia.size ^ activer.length) >= 100;
         fullK.set(`${fastO}`, fastO + 2);
         entryH -= 2;
      }
          let playlistH = String.fromCharCode(116,114,97,110,115,102,101,114,97,98,108,101,95,111,95,54,0);
          let modelsW = 2.0;
          let infod = String.fromCharCode(97,117,116,111,108,111,99,107,95,99,95,52,48,0);
         activer += `${1 & playlistH.length}`;
         playlistH = `${infod.length}`;
         modelsW *= parseFloat(`${parseInt(`${modelsW}`) + 1}`);
         infod = `${infod.length / 1}`;
      hover2 += `${activer.length / 1}`;
   }
   if ((fasto.length ^ 2) <= 4 || (wind9 ^ fasto.length) <= 2) {
      fasto.push(showX.length % (Math.max(1, 4)));
   }
   if (!configureg) {
      shrinkD += `${(turnm == String.fromCharCode(83,0) ? turnm.length : wind9)}`;
   }
   let traminiu = configureg ? !configureg : configureg;
   do {
       let minivod5: Array<any> = [279, 288];
       let recommendationL = false;
       let confirmationh = 2.0;
       let rulesS = false;
       let listV: Map<any, any> = new Map([[String.fromCharCode(116,95,50,56,95,111,103,103,105,110,103,0),String.fromCharCode(106,111,105,110,105,110,103,95,104,95,51,51,0)], [String.fromCharCode(114,101,101,110,116,114,97,110,116,95,122,95,50,0),String.fromCharCode(108,95,53,50,95,118,111,116,101,100,0)], [String.fromCharCode(97,99,116,117,97,108,108,121,95,110,95,56,49,0),String.fromCharCode(111,95,56,54,95,98,117,114,115,116,121,0)]]);
         recommendationL = confirmationh >= 98.96;
      for (let d = 0; d < 2; d++) {
         rulesS = minivod5.length < parseInt(`${confirmationh}`);
      }
         minivod5.push((3 / (Math.max(9, (rulesS ? 5 : 4)))));
       let sportd = 0;
       let single7 = 2;
          let recommendationh = String.fromCharCode(97,118,102,105,108,116,101,114,114,101,115,95,122,95,55,53,0);
          let expandw = String.fromCharCode(111,95,55,53,95,112,97,115,115,112,104,114,97,115,101,0);
          let taiwanE = 5;
         minivod5 = [single7];
         recommendationh += `${3 >> (Math.min(4, expandw.length))}`;
         expandw += `${recommendationh.length}`;
         taiwanE <<= Math.min(Math.abs((String.fromCharCode(109,0) == recommendationh ? recommendationh.length : taiwanE)), 5);
      let vignette_ = rulesS ? !rulesS : rulesS;
      do {
         rulesS = minivod5.length >= sportd;
         if (vignette_) {
            break;
         }
      } while (((4 << (Math.min(4, Math.abs(listV.size)))) > 4) && vignette_);
      let filterP = recommendationL ? !recommendationL : recommendationL;
      do {
         recommendationL = rulesS || 62 < single7;
         if (filterP) {
            break;
         }
      } while (filterP && ((minivod5.length + 1) == 1 || !recommendationL));
      if ((1.8 + confirmationh) >= 3.61 || 1.8 >= confirmationh) {
          let modelsL = false;
          let animation7 = String.fromCharCode(101,120,116,101,110,100,101,100,95,106,95,57,52,0);
         confirmationh *= (parseFloat(`${parseInt(`${confirmationh}`) | (recommendationL ? 5 : 2)}`));
         modelsL = animation7.length < 12 && modelsL;
         animation7 = `${(String.fromCharCode(122,0) == animation7 ? (modelsL ? 2 : 2) : animation7.length)}`;
      }
      for (let y = 0; y < 1; y++) {
         recommendationL = (sportd / (Math.max(3, confirmationh))) > 68;
      }
         listV.set(`${single7}`, sportd);
      for (let m = 0; m < 2; m++) {
          let checkboxm: Array<any> = [String.fromCharCode(115,95,51,54,95,102,105,120,116,117,114,101,0), String.fromCharCode(116,95,52,51,95,118,97,108,105,100,97,116,111,114,115,0)];
          let albumd = 4.0;
          let stylesw = String.fromCharCode(105,95,53,49,95,119,101,98,109,100,101,99,0);
         confirmationh += parseFloat(`${stylesw.length}`);
         checkboxm = [3 & parseInt(`${albumd}`)];
         albumd -= parseFloat(`${1 << (Math.min(5, checkboxm.length))}`);
         stylesw = `${1 + parseInt(`${albumd}`)}`;
      }
          let pressurej: Array<any> = [49, 511, 229];
          let clockG = 5;
          let iconz = String.fromCharCode(101,118,97,108,117,97,116,105,111,110,95,117,95,56,56,0);
         confirmationh /= Math.max(parseFloat(`${2}`), 5);
         pressurej = [iconz.length * 1];
         clockG /= Math.max(clockG, 5);
         iconz = `${clockG * 1}`;
          let regengM = 4;
          let string5 = String.fromCharCode(97,99,107,110,111,119,108,101,100,103,109,101,110,116,95,114,95,49,53,0);
         listV.set(`${single7}`, sportd);
         regengM %= Math.max(2, 2);
         string5 = `${(string5 == String.fromCharCode(78,0) ? regengM : string5.length)}`;
      while (4 <= sportd) {
          let privilege2 = 3.0;
          let castingL = String.fromCharCode(106,95,55,49,95,105,100,99,105,110,0);
          let bridgeu = 4;
          let streaming0 = 1.0;
          let downloadP = 2;
         single7 /= Math.max(5, 3);
         privilege2 *= 2 % (Math.max(5, parseInt(`${streaming0}`)));
         castingL += "3";
         bridgeu %= Math.max((castingL == String.fromCharCode(112,0) ? castingL.length : parseInt(`${streaming0}`)), 3);
         downloadP %= Math.max(castingL.length, 1);
         break;
      }
         single7 <<= Math.min(3, Math.abs(single7 * parseInt(`${confirmationh}`)));
      configureg = (showX.length << (Math.min(4, fasto.length))) == 57;
      if (traminiu) {
         break;
      }
   } while (traminiu && (!configureg && 5 > saveY.length));
   if (Array.from(foregroundg.values()).includes(subsv)) {
      foregroundg = new Map([[`${fasto.length}`, t_countz.length]]);
   }
      watchW += `${foregroundg.size * 1}`;
      subsv -= showX.length;
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
       let sell6 = String.fromCharCode(117,95,51,52,95,108,105,98,101,118,101,110,116,0);
    let contextB = true;
    let analyticw: Array<any> = [639, 117, 71];
    let pageR = String.fromCharCode(108,95,49,50,95,112,114,101,118,105,101,119,105,110,103,0);
    let kcopy_u84 = String.fromCharCode(122,95,54,57,95,112,112,107,104,0);
    let moonB = 5.0;
    let singleq = true;
    let emptyL: Map<any, any> = new Map([[String.fromCharCode(107,95,50,49,95,113,116,115,0),739], [String.fromCharCode(99,111,117,110,116,114,121,95,110,95,49,55,0),406], [String.fromCharCode(99,105,110,118,105,100,101,111,95,100,95,49,55,0),172]]);
    let vignetteQ = String.fromCharCode(116,100,115,102,95,112,95,53,49,0);
      pageR += "3";
   for (let p = 0; p < 2; p++) {
      emptyL.set(`${moonB}`, ((contextB ? 2 : 3) >> (Math.min(Math.abs(parseInt(`${moonB}`)), 4))));
   }
   let mbnativeadvancedl = String.fromCharCode(53,120,98,51,97,51,52,50,112,0) == pageR;
   do {
       let watcha = String.fromCharCode(114,95,55,53,95,97,116,116,114,97,99,116,105,110,103,0);
       let sansU: Array<any> = [321, 848];
          let middlel = String.fromCharCode(115,95,55,50,95,99,108,99,112,0);
         sansU.push(middlel.length);
      for (let n = 0; n < 3; n++) {
         watcha = "1";
      }
      while ((watcha.length & 1) == 3 && (sansU.length & 1) == 5) {
          let f_titleN = 3.0;
          let with_bg = String.fromCharCode(108,95,53,52,95,100,101,115,99,101,110,100,101,114,0);
          let stylesr = 2.0;
         watcha = `${parseInt(`${f_titleN}`)}`;
         f_titleN /= Math.max(5, parseFloat(`${3 & parseInt(`${stylesr}`)}`));
         with_bg = `${with_bg.length}`;
         stylesr += parseFloat(`${3 | with_bg.length}`);
         break;
      }
      for (let n = 0; n < 2; n++) {
          let plashS = String.fromCharCode(115,111,114,101,99,101,105,118,101,95,100,95,49,49,0);
          let q_unlockO = String.fromCharCode(112,97,114,97,109,115,95,103,95,53,50,0);
          let mbridgen = String.fromCharCode(121,95,52,54,95,111,117,98,108,101,0);
          let profilej = 4.0;
          let nalyticsl = String.fromCharCode(98,95,54,50,95,112,117,98,108,105,115,104,97,98,108,101,0);
         watcha += `${nalyticsl.length}`;
         plashS = `${parseInt(`${profilej}`) & 2}`;
         q_unlockO = `${plashS.length * parseInt(`${profilej}`)}`;
         mbridgen = "2";
         nalyticsl += `${(String.fromCharCode(87,0) == plashS ? parseInt(`${profilej}`) : plashS.length)}`;
      }
          let whistleG = String.fromCharCode(103,95,56,53,95,112,114,111,114,101,115,0);
          let soundw = String.fromCharCode(116,114,105,101,95,115,95,54,50,0);
         sansU = [sansU.length];
         whistleG += `${3 << (Math.min(1, soundw.length))}`;
         soundw = `${(String.fromCharCode(97,0) == soundw ? whistleG.length : soundw.length)}`;
       let bingp = true;
       let auto_73 = false;
      pageR += `${(2 | (contextB ? 4 : 3))}`;
      if (mbnativeadvancedl) {
         break;
      }
   } while ((1 == (1 + pageR.length) || (1 + pageR.length) == 5) && mbnativeadvancedl);
      sell6 += "3";
      sell6 = `${emptyL.size}`;
      emptyL.set(`${moonB}`, ((contextB ? 3 : 5) % (Math.max(9, parseInt(`${moonB}`)))));
      singleq = 64.57 > moonB;

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
       let megaphoney: Array<any> = [697, 725, 812];
    let e_titleA = 4.0;
    let frame_ll = true;
    let themeN = 0.0;
    let live5 = 5.0;
    let sendd = 5.0;
    let agreementV = String.fromCharCode(105,110,110,100,101,114,95,115,95,52,56,0);
    let dataL: Array<any> = [String.fromCharCode(98,95,56,52,95,102,105,110,103,101,114,0), String.fromCharCode(118,95,55,52,95,112,101,114,99,101,110,116,0)];
    let promotionc = String.fromCharCode(112,111,111,108,115,95,116,95,51,55,0);
    let episodesy = 0;
    let philippinesk = 4.0;
      live5 -= parseInt(`${live5}`);

      if (currentPurchase) {

   let detail3 = 8963666.0 >= themeN;
   do {
      themeN -= parseInt(`${live5}`);
      if (detail3) {
         break;
      }
   } while (detail3 && ((megaphoney.length >> (Math.min(Math.abs(4), 5))) <= 4));
        console.log("-------Current Purchase------------");

      frame_ll = 1.52 <= live5 && sendd <= 1.52;
        console.log(currentPurchase);

       let googlem = true;
       let buildO = String.fromCharCode(114,101,119,105,110,100,95,101,95,53,56,0);
       let windc = String.fromCharCode(120,95,51,49,95,108,97,110,103,117,97,103,101,115,0);
          let topon4 = String.fromCharCode(99,102,116,109,100,108,95,106,95,57,51,0);
          let usernameO = String.fromCharCode(105,95,49,51,95,99,105,116,121,0);
          let register_c9X = String.fromCharCode(116,95,49,49,95,115,105,103,102,105,103,0);
         windc += `${(String.fromCharCode(66,0) == register_c9X ? topon4.length : register_c9X.length)}`;
         topon4 += `${3 >> (Math.min(1, usernameO.length))}`;
         usernameO += `${usernameO.length % (Math.max(usernameO.length, 1))}`;
         buildO += `${((googlem ? 3 : 5) * buildO.length)}`;
         googlem = !buildO.includes(`${googlem}`);
       let sliderk = String.fromCharCode(122,95,51,55,95,109,115,109,112,101,103,118,0);
         windc = `${1 + windc.length}`;
          let bodanS = 0;
          let colorse = 1;
          let danger9: Array<any> = [188, 924, 656];
         sliderk += `${danger9.length}`;
         bodanS -= colorse;
         danger9 = [bodanS];
         googlem = buildO.endsWith(`${googlem}`);
         sliderk += `${(buildO.length * (googlem ? 2 : 4))}`;
      while (sliderk.length <= 2) {
         sliderk = `${((googlem ? 3 : 2) | windc.length)}`;
         break;
      }
      sendd /= Math.max(parseFloat(`${dataL.length >> (Math.min(Math.abs(3), 3))}`), 2);
        console.log(
          products.some(
            (product) => product.productId === currentPurchase.productId
          )
        );

      sendd *= parseFloat(`${parseInt(`${live5}`) / 3}`);

        try {

      megaphoney.push(2 - parseInt(`${sendd}`));
          if (currentPurchase.transactionReceipt) {

       let colorsL: Array<any> = [599, 590];
       let nativeex3 = String.fromCharCode(99,95,50,49,95,97,105,102,102,0);
       let nextx = 5.0;
          let filedI = 4.0;
          let bodang: Map<any, any> = new Map([[String.fromCharCode(101,109,105,116,116,101,114,95,119,95,49,53,0),false ], [String.fromCharCode(111,95,54,49,95,102,115,121,110,99,0),true ], [String.fromCharCode(100,101,106,117,100,100,101,114,95,115,95,50,52,0),true ]]);
          let utilsf = 5.0;
         nativeex3 += `${parseInt(`${filedI}`)}`;
         bodang = new Map([[`${bodang.size}`, parseInt(`${utilsf}`) / (Math.max(2, 8))]]);
         utilsf *= parseFloat(`${bodang.size}`);
         colorsL = [(nativeex3 == String.fromCharCode(49,0) ? nativeex3.length : parseInt(`${nextx}`))];
         nextx /= Math.max(4, 2 * nativeex3.length);
         nativeex3 += `${nativeex3.length}`;
          let floaterU = 4.0;
          let basketballB = 0;
         nativeex3 = `${parseInt(`${floaterU}`) / 1}`;
         floaterU *= basketballB * basketballB;
         nativeex3 = `${parseInt(`${nextx}`)}`;
      for (let l = 0; l < 3; l++) {
         nativeex3 = `${colorsL.length << (Math.min(Math.abs(1), 1))}`;
      }
         nativeex3 = `${colorsL.length}`;
          let loadingd = String.fromCharCode(116,114,105,109,95,116,95,51,53,0);
          let clockm = 5;
         nextx += colorsL.length;
         loadingd += `${clockm}`;
         clockm <<= Math.min(1, Math.abs((loadingd == String.fromCharCode(105,0) ? loadingd.length : clockm)));
      dataL.push(megaphoney.length);
            const key = currentPurchase.transactionId?.concat("true");

      sendd += (parseFloat(`${parseInt(`${e_titleA}`) | (frame_ll ? 1 : 1)}`));
            const isIAP = products.some(
              (product) => product.productId === currentPurchase.productId
            );

   while ((themeN / (Math.max(3, 10))) >= 4.42) {
       let pangleW = String.fromCharCode(98,105,110,100,120,95,113,95,52,57,0);
       let cornerC = String.fromCharCode(109,110,99,95,99,95,52,56,0);
       let injurym = 0;
      let inactiveA = String.fromCharCode(98,102,57,0) == cornerC;
      do {
          let injuryb = String.fromCharCode(116,95,54,49,95,112,101,114,109,105,116,116,101,100,0);
         cornerC += `${cornerC.length}`;
         injuryb += `${(String.fromCharCode(48,0) == injuryb ? injuryb.length : injuryb.length)}`;
         if (inactiveA) {
            break;
         }
      } while (inactiveA && ((injurym + 3) <= 3));
       let yingJ = String.fromCharCode(105,95,51,53,95,100,101,99,111,109,112,114,101,115,115,0);
         yingJ = `${yingJ.length}`;
      for (let b = 0; b < 3; b++) {
          let kickL: Array<any> = [338, 662];
          let contextD = String.fromCharCode(118,97,100,100,113,95,114,95,52,56,0);
          let refreshX = 0;
         injurym ^= (String.fromCharCode(53,0) == cornerC ? injurym : cornerC.length);
         kickL = [1];
         contextD += `${contextD.length % 2}`;
         refreshX &= (contextD == String.fromCharCode(115,0) ? contextD.length : refreshX);
      }
          let manifestV = String.fromCharCode(115,101,97,114,99,104,105,110,103,95,114,95,52,56,0);
          let castingy = 4.0;
          let memberv: Array<any> = [263, 519];
         injurym &= injurym;
         manifestV += `${manifestV.length}`;
         castingy /= Math.max(1, 1);
         memberv.push(parseInt(`${castingy}`));
         pangleW += `${injurym}`;
      for (let r = 0; r < 3; r++) {
         cornerC = `${injurym | yingJ.length}`;
      }
      if ((injurym & 3) <= 3 && 3 <= (pangleW.length & injurym)) {
         injurym |= yingJ.length;
      }
       let topicF = String.fromCharCode(121,95,52,49,95,117,110,107,105,99,107,0);
       let mbbidv = String.fromCharCode(99,95,52,50,95,101,120,116,114,101,109,117,109,0);
      sendd += parseFloat(`${dataL.length}`);
      break;
   }

            if (receiptBuffer.has(key)) {

       let configC: Array<any> = [347, 682, 454];
      for (let i = 0; i < 1; i++) {
         configC.push(configC.length << (Math.min(Math.abs(1), 3)));
      }
         configC = [configC.length];
         configC.push(1);
      live5 /= Math.max(4, promotionc.length ^ megaphoney.length);
              console.log(
                "duplicate transaction id: ",
                currentPurchase.transactionId
              );

      episodesy *= agreementV.length;
              await finishTransaction({
                purchase: currentPurchase,
                isConsumable: isIAP,
              });

   if (5.93 == (e_titleA * 4.28) || e_titleA == 4.28) {
      frame_ll = agreementV == String.fromCharCode(102,0);
   }
              setIsVisible(false);

   if (2.23 < (1 * themeN)) {
       let membershipY = true;
       let manifest1: Array<any> = [638, 340];
       let popupo: Array<any> = [286, 799];
       let mimox: Map<any, any> = new Map([[String.fromCharCode(109,95,48,95,116,101,114,109,0),String.fromCharCode(98,105,103,105,110,116,101,103,101,114,95,117,95,57,0)], [String.fromCharCode(100,95,49,50,95,115,98,111,120,0),String.fromCharCode(102,95,57,49,95,116,115,97,110,0)], [String.fromCharCode(112,97,114,115,101,95,114,95,53,0),String.fromCharCode(100,121,110,97,109,105,99,115,95,121,95,54,52,0)]]);
       let activityK = 1.0;
         mimox.set(`${popupo.length}`, popupo.length & mimox.size);
      if ((popupo.length - 2) < 4 && (2 - manifest1.length) < 4) {
         manifest1 = [popupo.length | 2];
      }
      for (let a = 0; a < 2; a++) {
         popupo.push(3);
      }
      if (!Array.from(mimox.keys()).includes(`${manifest1.length}`)) {
          let twitterd = 1.0;
         manifest1 = [((membershipY ? 4 : 5) * 3)];
         twitterd /= Math.max(parseInt(`${twitterd}`) >> (Math.min(5, Math.abs(parseInt(`${twitterd}`)))), 5);
      }
      for (let x = 0; x < 3; x++) {
          let macauI = String.fromCharCode(115,95,55,57,95,115,116,111,112,0);
          let animationv = 4.0;
         manifest1.push(3);
         macauI += `${macauI.length}`;
         animationv *= 2;
      }
       let gemfile9 = String.fromCharCode(119,95,51,54,95,112,114,122,112,0);
      let background2 = membershipY ? !membershipY : membershipY;
      do {
         membershipY = (activityK - manifest1.length) < 87.42;
         if (background2) {
            break;
         }
      } while ((membershipY) && background2);
         gemfile9 = `${gemfile9.length}`;
          let with_d09 = true;
          let form6 = true;
         manifest1 = [((with_d09 ? 2 : 1) - parseInt(`${activityK}`))];
         with_d09 = !form6;
          let controlse: Array<any> = [508, 995, 458];
          let rightK = String.fromCharCode(113,95,55,56,95,97,117,116,111,114,101,109,111,118,101,0);
          let megaphonek = 3;
         popupo = [3 - rightK.length];
         controlse.push(controlse.length);
         rightK = `${megaphonek}`;
         megaphonek |= controlse.length;
      while ((4 * popupo.length) <= 1) {
         mimox.set(`${membershipY}`, ((membershipY ? 2 : 3) ^ 3));
         break;
      }
      if (3 == (manifest1.length - 1)) {
          let clubX = String.fromCharCode(98,95,56,56,95,100,97,116,101,115,0);
          let orientationE: Array<any> = [265, 856];
          let target2 = String.fromCharCode(101,107,121,95,115,95,52,54,0);
          let internetp = String.fromCharCode(97,100,100,99,111,110,115,116,95,55,95,51,48,0);
          let pangley = 0;
         manifest1.push(1 & internetp.length);
         clubX = `${target2.length & pangley}`;
         orientationE.push((clubX == String.fromCharCode(95,0) ? target2.length : clubX.length));
         internetp = "3";
         pangley -= pangley;
      }
         popupo.push(popupo.length);
         activityK *= ((membershipY ? 5 : 3) - parseInt(`${activityK}`));
      while (!manifest1.includes(activityK)) {
          let reactnativejsa = String.fromCharCode(118,95,56,51,95,106,111,98,0);
          let bridgeM = 3.0;
          let scorei = 1.0;
         manifest1.push(popupo.length & 2);
         reactnativejsa = `${parseInt(`${bridgeM}`) - 3}`;
         bridgeM /= Math.max(parseFloat(`${reactnativejsa.length >> (Math.min(Math.abs(1), 1))}`), 4);
         scorei *= reactnativejsa.length;
         break;
      }
      sendd += (parseFloat(`${promotionc == String.fromCharCode(49,0) ? promotionc.length : parseInt(`${sendd}`)}`));
   }
              setIsBtnEnable(true);

      dataL.push(parseInt(`${sendd}`) * parseInt(`${themeN}`));
              return;
            }

            setTimeout(() => setIsVisible(false), 10000);

   let fileA = 8352222.0 >= themeN;
   do {
       let live6 = String.fromCharCode(106,95,56,53,95,109,117,109,98,97,105,0);
       let trashm = 5.0;
         live6 = `${parseInt(`${trashm}`)}`;
      while (!live6.startsWith(`${trashm}`)) {
         live6 += `${parseInt(`${trashm}`)}`;
         break;
      }
       let telegramN = String.fromCharCode(103,95,50,95,100,101,99,111,100,101,0);
      let rewindI = 7127601.0 <= trashm;
      do {
          let klevin2 = 5;
          let register_f1M = 5.0;
          let textp = 4;
         trashm -= parseFloat(`${parseInt(`${register_f1M}`) / 1}`);
         klevin2 -= textp % (Math.max(klevin2, 7));
         register_f1M /= Math.max(3, klevin2);
         textp <<= Math.min(Math.abs(2 / (Math.max(2, klevin2))), 1);
         if (rewindI) {
            break;
         }
      } while (rewindI && (3.89 == trashm));
          let sentryz: Map<any, any> = new Map([[String.fromCharCode(104,117,102,102,121,117,118,95,49,95,53,56,0),String.fromCharCode(97,97,97,97,95,52,95,52,54,0)], [String.fromCharCode(106,95,52,51,95,100,101,99,111,100,101,0),String.fromCharCode(115,101,101,107,116,97,98,108,101,95,117,95,57,52,0)], [String.fromCharCode(109,97,110,100,101,108,98,114,111,116,95,102,95,52,51,0),String.fromCharCode(99,95,49,48,95,108,105,115,116,101,110,101,114,115,0)]]);
          let footballz = 5;
         telegramN = `${1 - telegramN.length}`;
         sentryz = new Map([[`${sentryz.size}`, 3]]);
         footballz &= sentryz.size + 1;
         telegramN += `${parseInt(`${trashm}`) | 1}`;
      themeN /= Math.max(1 >> (Math.min(Math.abs(parseInt(`${sendd}`)), 4)), 3);
      if (fileA) {
         break;
      }
   } while (((megaphoney.length * themeN) > 1.13) && fileA);

            const success = isIAP
              ? await saveFinishIAP("tickGift", "")
              : await saveFinishSubs(currentPurchase); 

            setReceiptBuffer((prev) => {

      episodesy ^= agreementV.length + 3;
              const receipt = new Map(prev);

   while (1.86 == live5) {
      live5 *= promotionc.length;
      break;
   }
              receipt.set(
                currentPurchase.transactionId?.concat(success),
                success
              );

      dataL.push(parseInt(`${philippinesk}`));
              return receipt;
            });

       let short_dx: Map<any, any> = new Map([[String.fromCharCode(119,95,52,48,95,108,97,121,101,114,0),907], [String.fromCharCode(115,117,112,101,114,120,115,97,105,95,119,95,51,49,0),633]]);
       let with_ijc = String.fromCharCode(106,95,52,51,95,97,110,110,111,117,110,99,101,0);
       let gray_ = true;
      for (let c = 0; c < 2; c++) {
         gray_ = with_ijc.length >= short_dx.size;
      }
         with_ijc += `${short_dx.size}`;
      while (2 > with_ijc.length) {
         with_ijc += `${(with_ijc == String.fromCharCode(104,0) ? short_dx.size : with_ijc.length)}`;
         break;
      }
         gray_ = (45 > ((gray_ ? short_dx.size : 48) & short_dx.size));
         with_ijc = `${with_ijc.length << (Math.min(Math.abs(1), 4))}`;
      let shoot0 = with_ijc.length <= 5023110;
      do {
         with_ijc = `${with_ijc.length}`;
         if (shoot0) {
            break;
         }
      } while (shoot0 && (with_ijc.length >= 1));
          let gestures1 = 4;
          let icopy_tj: Array<any> = [929, 327, 587];
         with_ijc = "2";
         gestures1 &= gestures1 - 3;
         icopy_tj = [gestures1 << (Math.min(5, Math.abs(3)))];
         gray_ = with_ijc.length == short_dx.size;
          let annerT = 1;
         gray_ = 15 >= annerT || gray_;
      agreementV = `${promotionc.length}`;

            if (success) {

   for (let p = 0; p < 3; p++) {
      episodesy += parseInt(`${themeN}`);
   }
              console.log("success ", success);

   for (let a = 0; a < 2; a++) {
      agreementV += `${((frame_ll ? 2 : 1) >> (Math.min(dataL.length, 4)))}`;
   }
              await finishTransaction({
                purchase: currentPurchase,
                isConsumable: isIAP,
              });

   for (let m = 0; m < 1; m++) {
       let usernameI = String.fromCharCode(115,113,108,105,116,101,114,98,117,95,57,95,51,51,0);
       let sporto: Map<any, any> = new Map([[String.fromCharCode(101,95,54,57,0),73], [String.fromCharCode(112,95,55,48,95,110,118,99,0),56], [String.fromCharCode(97,114,103,115,95,111,95,53,57,0),155]]);
       let castingY = true;
       let sendn = String.fromCharCode(116,101,120,116,97,116,116,114,95,98,95,50,55,0);
      if (sendn.length <= 2) {
         sendn = `${(sporto.size * (castingY ? 1 : 1))}`;
      }
      let taiwanA = sporto.size >= 5370582;
      do {
         sporto = new Map([[`${sporto.size}`, ((castingY ? 4 : 3) / (Math.max(1, 8)))]]);
         if (taiwanA) {
            break;
         }
      } while (taiwanA && (2 > (usernameI.length ^ 5)));
      if (usernameI.startsWith(`${castingY}`)) {
          let materialY = true;
         usernameI = `${usernameI.length}`;
         materialY = !materialY;
      }
      let handlerh = String.fromCharCode(122,99,104,107,0) == usernameI;
      do {
          let spinnerU = 0.0;
          let currentJ = String.fromCharCode(101,120,116,114,97,100,97,116,97,112,115,101,116,115,95,57,95,53,55,0);
          let pointO = String.fromCharCode(111,98,106,101,99,116,105,118,101,95,104,95,56,55,0);
          let holderN = 3;
         usernameI += "2";
         spinnerU /= Math.max(4, parseFloat(`${parseInt(`${spinnerU}`) << (Math.min(currentJ.length, 4))}`));
         currentJ += `${3 << (Math.min(3, currentJ.length))}`;
         pointO = `${holderN * parseInt(`${spinnerU}`)}`;
         holderN *= currentJ.length ^ parseInt(`${spinnerU}`);
         if (handlerh) {
            break;
         }
      } while ((!castingY) && handlerh);
      let onewsA = sporto.size <= 8730452;
      do {
         sporto = new Map([[`${sporto.size}`, (String.fromCharCode(113,0) == usernameI ? usernameI.length : sporto.size)]]);
         if (onewsA) {
            break;
         }
      } while (((4 & sporto.size) <= 2) && onewsA);
         sendn += `${usernameI.length / (Math.max(2, sporto.size))}`;
         castingY = sendn.length == 57;
          let foundB = String.fromCharCode(100,97,112,95,119,95,51,0);
          let reducer9: Map<any, any> = new Map([[String.fromCharCode(115,104,97,114,100,95,108,95,50,56,0),402], [String.fromCharCode(118,95,53,56,95,100,105,114,101,99,116,111,114,121,0),782]]);
         sendn = `${reducer9.size ^ foundB.length}`;
         sporto.set(`${castingY}`, (usernameI == String.fromCharCode(95,0) ? (castingY ? 1 : 2) : usernameI.length));
      let viewer3 = 8735779 <= usernameI.length;
      do {
         usernameI += `${sporto.size}`;
         if (viewer3) {
            break;
         }
      } while (viewer3 && (usernameI.length >= 2));
          let playlistY = 5.0;
         sporto.set(sendn, (String.fromCharCode(100,0) == sendn ? sendn.length : parseInt(`${playlistY}`)));
         castingY = sporto.size >= 33;
      philippinesk *= megaphoney.length * 3;
   }

              handleRefresh();

   if ((parseInt(`${e_titleA}`) + megaphoney.length) < 3) {
       let darki = 3.0;
       let flyer1 = 1;
       let recommendationj = true;
       let mimog: Map<any, any> = new Map([[String.fromCharCode(99,95,55,49,95,102,114,101,113,0),String.fromCharCode(114,111,111,116,95,51,95,57,50,0)], [String.fromCharCode(119,95,52,49,95,99,111,110,116,114,111,108,101,114,115,0),String.fromCharCode(116,95,50,95,105,110,105,116,100,101,99,0)], [String.fromCharCode(104,95,50,55,95,104,101,118,99,112,114,101,100,0),String.fromCharCode(112,95,50,50,95,112,114,101,115,101,114,118,101,0)]]);
      for (let t = 0; t < 2; t++) {
          let checkboxl = String.fromCharCode(105,95,53,54,95,109,101,97,115,117,114,101,114,0);
          let download7 = 1;
          let search0 = String.fromCharCode(113,95,53,53,95,108,111,99,97,116,105,111,110,115,0);
          let downloaded2 = 5;
         mimog = new Map([[`${mimog.size}`, checkboxl.length & 3]]);
         checkboxl = `${downloaded2 | download7}`;
         download7 -= download7 | search0.length;
         search0 += "2 | downloaded2";
      }
      while (!recommendationj) {
         darki += mimog.size;
         break;
      }
      for (let s = 0; s < 3; s++) {
          let security4 = String.fromCharCode(109,95,52,55,95,112,114,97,103,109,97,0);
          let chinaz = 5;
          let rewindB = 3;
         recommendationj = darki <= 79.76 && 67 <= mimog.size;
         security4 += `${chinaz | 3}`;
         chinaz %= Math.max(1, rewindB);
         rewindB %= Math.max(3, 1);
      }
      let description_mj = 9203095 <= flyer1;
      do {
         flyer1 /= Math.max(4, parseInt(`${darki}`) ^ mimog.size);
         if (description_mj) {
            break;
         }
      } while ((darki > 1.97) && description_mj);
      let next7 = 6011486.0 <= darki;
      do {
         darki -= mimog.size ^ parseInt(`${darki}`);
         if (next7) {
            break;
         }
      } while (((parseInt(`${darki}`) * mimog.size) <= 4 && (2.38 * darki) <= 4.30) && next7);
      for (let s = 0; s < 2; s++) {
         flyer1 %= Math.max(mimog.size + 1, 3);
      }
      if (2.43 > darki && (darki + 2.43) > 1.61) {
          let dplusl = String.fromCharCode(100,114,97,119,105,110,103,95,49,95,56,56,0);
          let gestureS = String.fromCharCode(97,99,99,101,115,115,111,114,95,98,95,51,52,0);
          let countdown_ = 3;
          let settingS = String.fromCharCode(119,95,56,95,100,97,116,97,114,0);
         darki /= Math.max(settingS.length | 3, 1);
         dplusl += `${dplusl.length / (Math.max(10, countdown_))}`;
         gestureS = "2";
         countdown_ /= Math.max(countdown_, 2);
         settingS = `${gestureS.length}`;
      }
       let downloadl = 5.0;
      for (let f = 0; f < 1; f++) {
         recommendationj = flyer1 > mimog.size;
      }
      for (let u = 0; u < 3; u++) {
         mimog.set(`${flyer1}`, mimog.size);
      }
          let gradlews: Map<any, any> = new Map([[String.fromCharCode(115,95,50,51,95,104,117,109,97,110,0),String.fromCharCode(102,105,108,116,101,114,95,118,95,52,52,0)], [String.fromCharCode(99,111,118,101,114,105,110,103,95,115,95,55,52,0),String.fromCharCode(105,95,56,56,95,102,111,114,119,97,114,100,0)]]);
          let e_imageu = String.fromCharCode(97,114,116,105,99,108,101,95,122,95,51,51,0);
         darki *= ((recommendationj ? 3 : 3) - parseInt(`${downloadl}`));
         gradlews = new Map([[`${gradlews.size}`, e_imageu.length]]);
         e_imageu = `${gradlews.size}`;
       let sportsy: Array<any> = [String.fromCharCode(110,95,53,49,95,113,117,97,108,105,102,121,0), String.fromCharCode(109,115,101,99,115,95,118,95,49,51,0)];
       let sharedx: Array<any> = [91, 191, 930];
      megaphoney = [3 & parseInt(`${themeN}`)];
   }

              if (ttFast.isLogin(userState.user)) {

   while ((promotionc.length - parseInt(`${philippinesk}`)) < 1) {
       let giftk = 2.0;
       let bootsplashI = String.fromCharCode(102,95,52,55,95,97,118,101,114,114,111,114,0);
       let editf = String.fromCharCode(115,99,114,97,112,101,95,52,95,50,52,0);
      if (4 > bootsplashI.length) {
          let filedm: Map<any, any> = new Map([[String.fromCharCode(117,95,51,48,95,111,112,116,105,109,105,122,101,114,0),354], [String.fromCharCode(99,95,56,49,95,110,111,116,99,104,101,100,0),669]]);
          let modulei = String.fromCharCode(105,110,116,101,103,101,114,95,54,95,52,50,0);
          let internet5 = String.fromCharCode(115,101,101,110,95,53,95,53,52,0);
          let largeV = 1.0;
         giftk *= parseFloat(`${bootsplashI.length >> (Math.min(3, modulei.length))}`);
         filedm.set(`${largeV}`, 3);
         modulei += `${internet5.length >> (Math.min(Math.abs(3), 2))}`;
         internet5 = `${parseInt(`${largeV}`)}`;
      }
          let flipperd = 1.0;
          let questv: Map<any, any> = new Map([[String.fromCharCode(113,95,55,57,95,111,108,107,97,100,111,116,0),323], [String.fromCharCode(97,99,116,105,118,101,109,97,112,95,116,95,52,57,0),482], [String.fromCharCode(118,95,55,56,95,115,99,97,110,0),946]]);
         bootsplashI += `${bootsplashI.length * questv.size}`;
         flipperd /= Math.max(parseFloat(`${parseInt(`${flipperd}`) >> (Math.min(4, Math.abs(2)))}`), 1);
         questv = new Map([[`${flipperd}`, 3]]);
          let x_centery = String.fromCharCode(115,116,101,109,109,101,114,95,105,95,57,57,0);
          let stationsJ = String.fromCharCode(109,95,53,49,95,113,112,105,115,0);
          let sinaa = 1;
         giftk += parseFloat(`${3 >> (Math.min(4, x_centery.length))}`);
         x_centery += `${3 * stationsJ.length}`;
         stationsJ += "1";
         sinaa -= (stationsJ == String.fromCharCode(104,0) ? sinaa : stationsJ.length);
         giftk += parseFloat(`${editf.length / 1}`);
         editf = "1";
         giftk -= parseFloat(`${bootsplashI.length + 2}`);
      for (let l = 0; l < 2; l++) {
         bootsplashI += `${parseInt(`${giftk}`)}`;
      }
      let black0 = giftk >= 7253790.0;
      do {
         giftk *= parseFloat(`${bootsplashI.length * 2}`);
         if (black0) {
            break;
         }
      } while (black0 && ((parseInt(`${giftk}`) / (Math.max(bootsplashI.length, 1))) > 1));
      for (let y = 0; y < 2; y++) {
         bootsplashI = `${parseInt(`${giftk}`)}`;
      }
      philippinesk += 1 / (Math.max(9, parseInt(`${giftk}`)));
      break;
   }
                setDialogText(successDialogText);

   while (megaphoney.length < dataL.length) {
       let footballl = true;
          let pointR = 2.0;
          let floaterC = true;
          let bridgeO = 2.0;
         footballl = !footballl;
         pointR *= (parseFloat(`${(floaterC ? 2 : 3) | parseInt(`${bridgeO}`)}`));
         floaterC = floaterC && 17.33 == pointR;
         bridgeO /= Math.max(2, 1 << (Math.min(Math.abs(parseInt(`${pointR}`)), 4)));
          let selectU = String.fromCharCode(108,111,103,95,98,95,55,0);
          let resultw = String.fromCharCode(117,110,115,97,102,101,95,109,95,56,49,0);
          let utilsl = false;
         footballl = selectU.endsWith(`${footballl}`);
         selectU = `${(3 ^ (utilsl ? 4 : 4))}`;
         resultw += "3";
         footballl = (!footballl ? !footballl : footballl);
      megaphoney = [2];
      break;
   }
                setIsDialogOpen(true);

   while ((philippinesk / 5.30) < 5.90 || 5.30 < (philippinesk / (Math.max(2, live5)))) {
      philippinesk *= megaphoney.length ^ 3;
      break;
   }
                setIsSuccess(true);
              } else {

   for (let l = 0; l < 2; l++) {
      agreementV = `${((frame_ll ? 4 : 5) + 1)}`;
   }
                dispatch(setShowGuestPurchaseSuccess(true));

      frame_ll = 39.1 > e_titleA;
                setIsVisible(false);

       let currentM: Map<any, any> = new Map([[String.fromCharCode(103,95,56,48,95,115,121,109,98,111,108,105,99,0),85], [String.fromCharCode(109,115,105,122,101,95,55,95,54,48,0),681], [String.fromCharCode(105,95,53,95,116,97,103,97,118,114,0),368]]);
       let short_cB = 4.0;
      if (currentM.get(`${short_cB}`) != null) {
          let collectionu: Array<any> = [719, 354, 535];
          let configuref: Map<any, any> = new Map([[String.fromCharCode(118,95,50,56,95,114,97,116,105,111,115,0),771], [String.fromCharCode(101,95,52,51,95,97,99,114,111,115,115,102,97,100,101,0),969]]);
          let chartQ = String.fromCharCode(115,105,103,110,97,108,115,95,53,95,50,52,0);
          let currents = 4.0;
         short_cB += parseFloat(`${currentM.size & configuref.size}`);
         collectionu = [parseInt(`${currents}`) - 3];
         configuref.set(`${currents}`, 3);
         chartQ = `${chartQ.length}`;
      }
      let apps_ = short_cB >= 6525651.0;
      do {
          let register_iiN = String.fromCharCode(114,101,113,117,101,115,116,101,114,115,95,104,95,54,53,0);
          let roomJ: Array<any> = [439, 660];
          let backwardJ = true;
         short_cB += (parseFloat(`${String.fromCharCode(83,0) == register_iiN ? register_iiN.length : parseInt(`${short_cB}`)}`));
         roomJ.push(((backwardJ ? 2 : 5) | 3));
         backwardJ = roomJ.length > 17 && backwardJ;
         if (apps_) {
            break;
         }
      } while ((short_cB <= parseFloat(`${currentM.size}`)) && apps_);
         currentM.set(`${short_cB}`, parseInt(`${short_cB}`));
         currentM = new Map([[`${currentM.size}`, parseInt(`${short_cB}`)]]);
         currentM.set(`${short_cB}`, 2 ^ currentM.size);
      for (let x = 0; x < 3; x++) {
          let unread1 = 1;
          let baidua = String.fromCharCode(100,95,50,54,95,112,101,114,105,111,100,0);
          let vietnamX: Array<any> = [546, 892];
          let redirectX: Map<any, any> = new Map([[String.fromCharCode(114,101,112,111,115,105,116,105,111,110,95,48,95,49,48,48,0),String.fromCharCode(117,114,118,101,115,95,57,95,57,57,0)], [String.fromCharCode(98,108,117,114,114,101,100,95,113,95,54,51,0),String.fromCharCode(99,111,110,110,101,99,116,105,111,110,95,98,95,55,49,0)], [String.fromCharCode(109,97,110,97,103,101,97,98,108,101,95,53,95,50,54,0),String.fromCharCode(99,95,56,50,95,110,111,110,110,117,108,108,97,100,100,114,101,115,115,0)]]);
          let privacyD: Array<any> = [449, 592];
         currentM.set(baidua, currentM.size >> (Math.min(baidua.length, 2)));
         unread1 |= unread1;
         vietnamX.push(2 & unread1);
         redirectX = new Map([[`${vietnamX.length}`, 2 % (Math.max(8, unread1))]]);
         privacyD = [unread1];
      }
      dataL.push(dataL.length);
                setIsBtnEnable(true);
                
              }
            } else {

      promotionc += `${parseInt(`${philippinesk}`) % 2}`;
              console.log("success", success);

      live5 /= Math.max(4, agreementV.length & promotionc.length);
              await finishTransaction({
                purchase: currentPurchase,
                isConsumable: isIAP,
              });

       let firebaseW = String.fromCharCode(118,99,111,119,112,116,114,95,107,95,53,54,0);
       let statisticsx = String.fromCharCode(97,95,54,49,95,101,110,97,98,108,101,100,0);
       let utilsA = false;
      if (statisticsx.endsWith(`${utilsA}`)) {
          let loginR = 4;
          let turnC = 5;
          let context5 = true;
         utilsA = !context5;
         loginR -= turnC;
      }
       let becomep: Array<any> = [369, 162];
       let countdowno = 1;
          let commonL = String.fromCharCode(115,101,109,97,110,116,105,99,95,55,95,53,48,0);
         utilsA = commonL.length <= 30;
         statisticsx += `${countdowno / (Math.max(1, becomep.length))}`;
         statisticsx += `${countdowno + 3}`;
      let catalogb = utilsA ? !utilsA : utilsA;
      do {
         utilsA = firebaseW.length < 19 && 19 < statisticsx.length;
         if (catalogb) {
            break;
         }
      } while ((!utilsA) && catalogb);
       let productz: Map<any, any> = new Map([[String.fromCharCode(100,111,109,97,105,110,115,95,117,95,50,51,0),String.fromCharCode(122,111,111,109,97,98,108,101,95,50,95,53,55,0)], [String.fromCharCode(117,95,52,52,95,114,101,100,117,99,101,114,0),String.fromCharCode(108,105,98,115,97,109,112,108,101,95,100,95,49,52,0)]]);
       let confirmationY: Map<any, any> = new Map([[String.fromCharCode(102,95,57,55,95,115,117,112,112,111,114,116,97,98,108,101,0),String.fromCharCode(122,95,56,56,95,99,104,97,114,97,99,116,101,114,0)], [String.fromCharCode(111,95,53,48,95,99,97,112,105,116,97,108,115,0),String.fromCharCode(107,95,50,53,95,115,111,105,115,99,111,110,110,101,99,116,105,110,103,0)], [String.fromCharCode(116,111,110,97,108,95,115,95,52,51,0),String.fromCharCode(99,95,49,54,95,115,116,101,110,99,105,108,0)]]);
         countdowno %= Math.max(2, 3);
      agreementV = "3";

              setDialogText(failedDialogText);

   let gradleF = 6861504.0 <= themeN;
   do {
      themeN -= parseInt(`${sendd}`) * 2;
      if (gradleF) {
         break;
      }
   } while (((promotionc.length << (Math.min(Math.abs(3), 5))) == 1 && 2 == (3 * parseInt(`${themeN}`))) && gradleF);
              setIsDialogOpen(true);

       let views1 = 4;
       let contexty = 2.0;
       let suggestionO = 4.0;
      let heartT = 8580973 <= views1;
      do {
          let frame_jJ = 4.0;
          let megaphoneu = String.fromCharCode(100,95,49,53,95,102,99,116,108,0);
          let traminix = String.fromCharCode(97,95,51,48,95,113,112,105,115,0);
          let whistlec = String.fromCharCode(113,95,54,49,95,117,112,103,114,97,100,101,115,0);
         views1 &= parseInt(`${contexty}`) ^ 3;
         frame_jJ /= Math.max((megaphoneu == String.fromCharCode(98,0) ? parseInt(`${frame_jJ}`) : megaphoneu.length), 4);
         traminix = `${parseInt(`${frame_jJ}`)}`;
         whistlec = `${parseInt(`${frame_jJ}`) >> (Math.min(Math.abs(2), 2))}`;
         if (heartT) {
            break;
         }
      } while (((views1 ^ 5) == 4 && (5 + views1) == 4) && heartT);
          let logout3 = 4.0;
          let singaporee = 3;
         views1 *= parseInt(`${contexty}`) + parseInt(`${suggestionO}`);
         logout3 += parseFloat(`${1}`);
         singaporee %= Math.max(3, 3);
          let mintegralD = 1.0;
          let short_k6 = String.fromCharCode(101,100,105,116,95,101,95,50,55,0);
         views1 |= parseInt(`${contexty}`);
         mintegralD -= parseFloat(`${short_k6.length / (Math.max(9, parseInt(`${mintegralD}`)))}`);
         short_k6 = `${parseInt(`${mintegralD}`)}`;
      if (2.17 > (suggestionO + contexty)) {
         contexty += parseFloat(`${views1}`);
      }
      if (contexty < 2.72) {
          let backgroundx: Map<any, any> = new Map([[String.fromCharCode(99,104,117,110,107,121,99,104,117,110,107,121,95,120,95,51,54,0),550], [String.fromCharCode(120,95,51,50,95,99,120,100,97,116,97,0),618], [String.fromCharCode(97,95,51,55,95,115,101,103,102,101,97,116,117,114,101,0),60]]);
          let typesV: Map<any, any> = new Map([[String.fromCharCode(122,95,55,50,95,98,111,117,110,100,105,110,103,0),471], [String.fromCharCode(116,114,101,101,115,95,54,95,51,56,0),378]]);
          let liveq = String.fromCharCode(98,95,49,50,95,112,114,105,110,116,118,97,108,0);
          let bellI: Array<any> = [891, 337, 878];
          let modalu = String.fromCharCode(108,105,98,115,119,105,102,116,111,115,95,49,95,49,56,0);
         views1 %= Math.max(2, 1);
         backgroundx.set(liveq, liveq.length);
         typesV = new Map([[`${typesV.size}`, typesV.size]]);
         bellI.push((String.fromCharCode(79,0) == liveq ? liveq.length : typesV.size));
         modalu = `${liveq.length}`;
      }
          let roomv = String.fromCharCode(121,95,54,51,95,114,103,98,120,105,0);
          let recommendationo = String.fromCharCode(111,98,106,101,99,116,115,95,55,95,54,53,0);
          let streamingP = 4;
         suggestionO -= 3 ^ parseInt(`${contexty}`);
         roomv = "1";
         recommendationo += `${recommendationo.length & 2}`;
         streamingP |= recommendationo.length;
          let strings3 = 5.0;
         views1 += parseInt(`${suggestionO}`);
         strings3 *= parseFloat(`${1 << (Math.min(Math.abs(parseInt(`${strings3}`)), 2))}`);
      if (1.62 >= (contexty * suggestionO) && 1.62 >= (contexty * suggestionO)) {
         suggestionO += 1;
      }
         contexty += parseFloat(`${parseInt(`${suggestionO}`)}`);
      themeN /= Math.max(parseInt(`${contexty}`) | 1, 3);
              setIsSuccess(false);
            }
          }
        } catch (error) {

   if (2.24 >= (sendd - e_titleA)) {
      e_titleA += 3 - promotionc.length;
   }
          if (error instanceof PurchaseError) {

   if ((episodesy << (Math.min(Math.abs(3), 4))) <= 2 && 3 <= (promotionc.length << (Math.min(3, Math.abs(episodesy))))) {
      promotionc += `${agreementV.length}`;
   }
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
       let injury9 = true;
    let thumbnailQ = false;
    let renewm = 0.0;
    let mode1: Array<any> = [555, 28, 294];
    let huawei4 = String.fromCharCode(97,115,115,101,114,116,115,95,98,95,56,56,0);
    let analytic_ = 5.0;
    let showo: Array<any> = [514, 466, 626];
      injury9 = huawei4.includes(`${analytic_}`);
      injury9 = 16.57 < renewm;
   let activeA = analytic_ >= 8402991.0;
   do {
       let guidet: Array<any> = [252, 902, 846];
       let borderlessC = 0.0;
       let gpayk = false;
       let sides = 5.0;
       let anner6 = 1.0;
      while (!gpayk) {
         gpayk = borderlessC <= 66.95 && gpayk;
         break;
      }
      if (gpayk) {
         borderlessC *= (parseInt(`${borderlessC}`) * (gpayk ? 4 : 2));
      }
         sides += parseFloat(`${parseInt(`${borderlessC}`)}`);
         gpayk = anner6 == 26.83 && guidet.length == 20;
      for (let v = 0; v < 1; v++) {
         guidet = [parseInt(`${anner6}`)];
      }
      while (!gpayk) {
          let favoriteC = String.fromCharCode(115,97,110,105,116,121,95,48,95,52,57,0);
          let infoJ: Map<any, any> = new Map([[String.fromCharCode(103,95,48,95,108,111,99,97,108,101,0),453], [String.fromCharCode(115,95,51,55,95,107,101,121,99,104,97,105,110,0),807], [String.fromCharCode(120,95,49,51,95,105,110,116,112,0),157]]);
          let chartk = 4;
         anner6 /= Math.max(5, parseFloat(`${chartk}`));
         favoriteC = `${(favoriteC == String.fromCharCode(78,0) ? favoriteC.length : infoJ.size)}`;
         infoJ = new Map([[`${infoJ.size}`, infoJ.size]]);
         chartk += favoriteC.length - infoJ.size;
         break;
      }
          let middlewarek = 2.0;
         guidet = [parseInt(`${middlewarek}`)];
          let privacyD = true;
          let mbridgex = String.fromCharCode(116,105,108,101,100,95,113,95,52,53,0);
          let logoU = 1.0;
         gpayk = !gpayk || guidet.length == 83;
         privacyD = String.fromCharCode(109,0) == mbridgex;
         mbridgex = `${2 | mbridgex.length}`;
         logoU *= 3;
      if (sides <= 5.93) {
         gpayk = !gpayk;
      }
      while ((borderlessC / 1.67) == 3.17) {
         borderlessC += parseInt(`${anner6}`);
         break;
      }
      for (let r = 0; r < 2; r++) {
          let nextk = true;
          let taiwanr = String.fromCharCode(118,112,114,105,110,116,102,95,52,95,51,51,0);
          let sportsV = 4.0;
         anner6 /= Math.max((parseFloat(`${parseInt(`${sides}`) | (gpayk ? 4 : 2)}`)), 5);
         nextk = sportsV > 41.67;
         taiwanr = "3";
         sportsV /= Math.max((parseFloat(`${parseInt(`${sportsV}`) >> (Math.min(5, Math.abs((nextk ? 5 : 3))))}`)), 2);
      }
         anner6 /= Math.max(4, parseFloat(`${parseInt(`${borderlessC}`) | 2}`));
         guidet.push(2);
      let become3 = gpayk ? !gpayk : gpayk;
      do {
         gpayk = (sides / (Math.max(parseFloat(`${guidet.length}`), 2))) == 40.90;
         if (become3) {
            break;
         }
      } while ((2.78 >= (anner6 - 1.37) || 1.37 >= anner6) && become3);
      while (sides == anner6) {
          let videojsx = String.fromCharCode(114,95,55,48,95,99,108,105,101,110,116,0);
          let modelw = true;
          let apple0 = 1.0;
          let androidj = 4;
          let incidentK = true;
         anner6 -= (parseFloat(`${parseInt(`${apple0}`) / (Math.max(4, (modelw ? 2 : 1)))}`));
         videojsx = `${(videojsx == String.fromCharCode(112,0) ? androidj : videojsx.length)}`;
         modelw = !incidentK;
         apple0 *= 3 ^ androidj;
         break;
      }
      analytic_ -= parseFloat(`${parseInt(`${anner6}`)}`);
      if (activeA) {
         break;
      }
   } while (activeA && (1.40 > (5.100 / (Math.max(9, analytic_))) && analytic_ > 5.100));
   for (let t = 0; t < 2; t++) {
      showo.push(showo.length % (Math.max(1, 3)));
   }
       let liveO = 0.0;
          let episodeR: Map<any, any> = new Map([[String.fromCharCode(112,114,111,104,105,98,105,116,95,119,95,51,52,0),String.fromCharCode(117,110,114,101,99,111,103,95,51,95,53,54,0)], [String.fromCharCode(102,95,54,52,95,109,101,115,111,110,0),String.fromCharCode(112,95,57,54,95,100,101,115,116,105,110,97,116,105,111,110,0)], [String.fromCharCode(117,95,51,52,95,118,101,99,116,111,114,100,0),String.fromCharCode(119,95,57,52,95,111,117,116,100,97,116,101,100,0)]]);
          let internetD = true;
         liveO -= parseInt(`${liveO}`) % (Math.max(episodeR.size, 8));
         episodeR = new Map([[`${internetD}`, ((internetD ? 5 : 5))]]);
      if (liveO > 2.6) {
          let soundm: Array<any> = [646, 11, 349];
          let minivodH: Array<any> = [239, 303, 534];
          let sideV = String.fromCharCode(116,97,115,107,95,107,95,51,54,0);
          let downloaded6: Map<any, any> = new Map([[String.fromCharCode(108,97,121,101,114,115,95,111,95,52,55,0),String.fromCharCode(114,101,103,101,116,95,101,95,51,53,0)], [String.fromCharCode(97,103,103,114,101,103,97,116,111,114,95,112,95,50,55,0),String.fromCharCode(115,112,108,105,116,95,55,95,50,51,0)]]);
         liveO -= 3;
         soundm = [1];
         minivodH = [(sideV == String.fromCharCode(111,0) ? sideV.length : minivodH.length)];
         downloaded6.set(`${minivodH.length}`, minivodH.length);
      }
      for (let p = 0; p < 1; p++) {
         liveO /= Math.max(3, 3);
      }
      renewm += 1 >> (Math.min(4, Math.abs(parseInt(`${liveO}`))));

    const result = await ttTramini.getUserDetails();

   for (let k = 0; k < 3; k++) {
      mode1.push((huawei4 == String.fromCharCode(120,0) ? huawei4.length : parseInt(`${analytic_}`)));
   }
      renewm += ((injury9 ? 3 : 4) << (Math.min(Math.abs(parseInt(`${renewm}`)), 3)));
   for (let n = 0; n < 1; n++) {
       let catalog0 = String.fromCharCode(120,95,55,51,95,117,110,113,117,97,110,116,0);
      while (5 == catalog0.length) {
          let overlayz: Map<any, any> = new Map([[String.fromCharCode(100,95,56,95,115,119,97,112,112,101,114,0),true ], [String.fromCharCode(101,95,56,50,95,97,118,102,109,116,0),true ]]);
          let langkeyJ = String.fromCharCode(111,95,53,48,95,118,105,97,98,108,101,0);
         catalog0 = `${overlayz.size ^ 3}`;
         overlayz = new Map([[langkeyJ, 1]]);
         langkeyJ += "1";
         break;
      }
         catalog0 += `${catalog0.length}`;
      let indicatorm = 8582877 >= catalog0.length;
      do {
          let dragc = 0.0;
          let traminiD = 4.0;
          let mbsplash3 = 4.0;
         catalog0 = `${(catalog0 == String.fromCharCode(122,0) ? parseInt(`${dragc}`) : catalog0.length)}`;
         dragc *= 2 & parseInt(`${mbsplash3}`);
         traminiD *= parseFloat(`${parseInt(`${mbsplash3}`)}`);
         if (indicatorm) {
            break;
         }
      } while ((catalog0.endsWith(`${catalog0.length}`)) && indicatorm);
      mode1.push(((injury9 ? 4 : 3) - huawei4.length));
   }
       let favoriteX = String.fromCharCode(97,117,116,104,111,114,115,95,117,95,57,54,0);
       let indicatorv = 1.0;
      while ((favoriteX.length * parseInt(`${indicatorv}`)) <= 1 || 4 <= (1 * favoriteX.length)) {
         indicatorv -= favoriteX.length << (Math.min(Math.abs(2), 1));
         break;
      }
      let mbnativeb = String.fromCharCode(115,99,57,106,51,122,113,122,113,0) == favoriteX;
      do {
         favoriteX = `${2 + parseInt(`${indicatorv}`)}`;
         if (mbnativeb) {
            break;
         }
      } while (mbnativeb && (indicatorv > favoriteX.length));
          let ewardedr = 4.0;
         favoriteX += `${parseInt(`${ewardedr}`) - parseInt(`${indicatorv}`)}`;
      while (favoriteX.length <= 3) {
          let signinups = String.fromCharCode(99,95,54,55,95,105,110,99,111,110,115,105,115,116,101,110,99,121,0);
          let roomV = 3;
          let formu = 2;
         favoriteX = `${roomV % (Math.max(1, 7))}`;
         signinups += `${signinups.length - formu}`;
         roomV <<= Math.min(1, signinups.length);
         formu += 3 >> (Math.min(4, Math.abs(formu)));
         break;
      }
         indicatorv /= Math.max(3, 3);
      if ((2.82 * indicatorv) < 1.60 && (favoriteX.length * parseInt(`${indicatorv}`)) < 5) {
         indicatorv += parseInt(`${indicatorv}`) % 2;
      }
      showo.push(((thumbnailQ ? 2 : 3) + (injury9 ? 1 : 4)));
      renewm *= huawei4.length;
    if (result == null) {

   for (let e = 0; e < 3; e++) {
      mode1.push(showo.length);
   }
   while (!thumbnailQ) {
      analytic_ -= (parseFloat(`${huawei4 == String.fromCharCode(68,0) ? (injury9 ? 3 : 3) : huawei4.length}`));
      break;
   }
       let description_am = true;
       let mailJ: Map<any, any> = new Map([[String.fromCharCode(105,115,101,120,112,108,97,105,110,95,116,95,50,0),614], [String.fromCharCode(99,95,53,48,95,110,100,101,102,0),953], [String.fromCharCode(108,97,117,110,99,104,101,114,95,108,95,55,54,0),778]]);
       let bannerM = 3;
       let targetC = 4;
         targetC -= targetC;
       let videocommona = String.fromCharCode(116,95,49,57,95,108,101,116,115,0);
       let frame_bw = String.fromCharCode(115,108,97,115,104,95,109,95,55,50,0);
      let filterq = 6176422 >= bannerM;
      do {
         bannerM <<= Math.min(Math.abs(bannerM + 3), 4);
         if (filterq) {
            break;
         }
      } while (filterq && (4 < (bannerM % (Math.max(2, 10))) && 2 < bannerM));
         mailJ.set(`${description_am}`, videocommona.length << (Math.min(Math.abs(1), 2)));
          let charth = String.fromCharCode(109,95,51,48,95,99,111,110,118,111,108,118,101,0);
          let sigmobU: Map<any, any> = new Map([[String.fromCharCode(115,95,51,49,95,121,117,118,114,103,98,0),String.fromCharCode(104,95,54,53,95,115,116,121,108,0)], [String.fromCharCode(109,95,52,51,95,101,114,111,100,101,0),String.fromCharCode(117,112,115,101,114,116,95,54,95,53,52,0)], [String.fromCharCode(101,115,116,105,109,97,116,101,100,95,120,95,51,0),String.fromCharCode(120,95,55,57,95,97,116,117,114,97,116,105,111,110,0)]]);
         frame_bw = `${charth.length}`;
         charth = `${sigmobU.size | 2}`;
         sigmobU = new Map([[`${sigmobU.size}`, 1 << (Math.min(3, Math.abs(sigmobU.size)))]]);
      thumbnailQ = 91 > showo.length && 91 > mailJ.size;
       let drag9: Array<any> = [489, 363];
      for (let g = 0; g < 1; g++) {
         drag9 = [1];
      }
      while (drag9.length <= 2) {
         drag9 = [3];
         break;
      }
       let rewindS = true;
       let full5 = false;
      analytic_ *= (parseFloat(`${(injury9 ? 1 : 2) - showo.length}`));
       let crown3 = String.fromCharCode(121,95,57,49,0);
       let paginationr: Array<any> = [String.fromCharCode(113,95,54,57,95,109,117,108,116,105,101,110,100,0), String.fromCharCode(97,108,112,104,97,95,121,95,51,49,0)];
          let bufferO = 5.0;
         crown3 += `${parseInt(`${bufferO}`)}`;
         paginationr = [2 - paginationr.length];
      for (let z = 0; z < 2; z++) {
         paginationr.push(1);
      }
          let sellJ = String.fromCharCode(115,97,110,100,98,111,120,95,101,95,56,55,0);
          let lined: Map<any, any> = new Map([[String.fromCharCode(116,95,53,55,95,115,116,97,114,116,115,0),808], [String.fromCharCode(99,95,54,54,0),698]]);
          let morew = String.fromCharCode(121,95,53,52,0);
         paginationr.push(lined.size * 2);
         sellJ += `${morew.length}`;
         lined = new Map([[sellJ, 2 - sellJ.length]]);
         morew = `${morew.length / 2}`;
          let singleP = true;
          let carouselt = 4.0;
         crown3 = "2";
         singleP = !singleP;
         carouselt /= Math.max(4, (parseFloat(`${parseInt(`${carouselt}`) - (singleP ? 1 : 4)}`)));
         paginationr.push(3);
      showo = [((thumbnailQ ? 5 : 2) % 2)];
      return;
    }

    await dispatch(updateUserAuth(result));

   if (injury9) {
      renewm /= Math.max(showo.length, 5);
   }
   let ball5 = huawei4 == String.fromCharCode(55,50,95,49,0);
   do {
       let nalyticsP = String.fromCharCode(113,95,54,57,95,109,99,108,109,115,0);
         nalyticsP = "1";
          let anythinky = 4.0;
          let adultW = String.fromCharCode(116,97,98,108,101,116,95,56,95,52,0);
          let blacklistP = 1.0;
         nalyticsP = `${parseInt(`${blacklistP}`) << (Math.min(Math.abs(3), 3))}`;
         anythinky /= Math.max(adultW.length | 1, 1);
         adultW += "3";
         blacklistP *= parseFloat(`${2 / (Math.max(10, parseInt(`${anythinky}`)))}`);
         nalyticsP = `${nalyticsP.length / (Math.max(nalyticsP.length, 2))}`;
      huawei4 = `${(showo.length & (thumbnailQ ? 5 : 5))}`;
      if (ball5) {
         break;
      }
   } while (ball5 && (2 <= (1 ^ huawei4.length) && 3 <= (huawei4.length ^ 1)));
       let carousels: Map<any, any> = new Map([[String.fromCharCode(109,99,108,109,115,95,50,95,50,54,0),679], [String.fromCharCode(112,105,99,116,95,122,95,52,57,0),300]]);
       let detailsq = 5;
      if (3 > (carousels.size | 1)) {
          let mappingX = true;
          let temperature0: Map<any, any> = new Map([[String.fromCharCode(99,111,112,121,116,101,115,116,95,101,95,52,0),957], [String.fromCharCode(117,95,57,54,95,101,118,101,110,0),735], [String.fromCharCode(105,110,116,101,114,97,99,116,105,118,101,108,121,95,107,95,49,53,0),337]]);
          let appleX: Array<any> = [711, 129];
          let switch_86f = true;
         detailsq <<= Math.min(4, parseInt(`${Math.abs((appleX.length % (Math.max(3, (switch_86f ? 3 : 1)))))}`));
         mappingX = temperature0.get(`${mappingX}`) != null;
         temperature0 = new Map([[`${temperature0.size}`, ((mappingX ? 1 : 3) * temperature0.size)]]);
         appleX.push(temperature0.size ^ 1);
         switch_86f = !mappingX || temperature0.size >= 94;
      }
         carousels.set(`${detailsq}`, carousels.size);
         detailsq |= carousels.size;
         carousels = new Map([[`${carousels.size}`, detailsq | carousels.size]]);
       let macauJ = String.fromCharCode(103,95,53,52,95,109,101,100,105,97,99,111,100,101,99,100,101,99,0);
      for (let p = 0; p < 1; p++) {
         detailsq &= carousels.size;
      }
      renewm *= huawei4.length * parseInt(`${analytic_}`);
   if ((parseInt(`${renewm}`) * mode1.length) >= 3) {
       let plus4 = 2.0;
      if (2.59 <= (plus4 - 2.81) && 4.0 <= (plus4 / 2.81)) {
          let group7 = true;
          let with_79G = String.fromCharCode(110,95,49,52,95,97,117,116,111,112,108,97,121,105,110,103,0);
          let short_eri = String.fromCharCode(119,95,56,48,95,104,101,97,100,112,104,111,110,101,115,0);
          let datab = 1.0;
         plus4 /= Math.max(short_eri.length, 5);
         group7 = !group7;
         with_79G = `${parseInt(`${datab}`) % 1}`;
         short_eri = `${with_79G.length}`;
         datab *= parseFloat(`${with_79G.length}`);
      }
       let fastB = 3.0;
       let materialL = 3.0;
       let heartK = 1;
       let androidc = 3;
      renewm += mode1.length;
   }
      injury9 = (parseInt(`${renewm}`) * mode1.length) == 91;
    return;
  };

  const handleRefresh = async () => {
       let largeJ: Map<any, any> = new Map([[String.fromCharCode(99,95,50,51,95,97,112,112,108,121,0),false ], [String.fromCharCode(115,109,112,116,101,104,100,98,97,114,115,95,104,95,56,57,0),true ], [String.fromCharCode(100,121,110,97,114,114,97,121,95,54,95,48,0),false ]]);
    let formR = false;
    let sourceu = String.fromCharCode(118,95,54,53,0);
    let photoQ = 1.0;
    let combinew: Map<any, any> = new Map([[String.fromCharCode(99,111,110,118,101,114,115,105,111,110,95,118,95,50,0),String.fromCharCode(115,117,98,112,105,120,101,108,95,50,95,55,49,0)], [String.fromCharCode(109,120,112,101,103,95,114,95,49,48,48,0),String.fromCharCode(104,95,54,95,98,97,99,107,114,111,117,110,100,0)], [String.fromCharCode(102,108,105,112,95,57,95,57,52,0),String.fromCharCode(97,116,111,109,105,99,111,112,115,95,49,95,51,55,0)]]);
    let matchesz = false;
    let china1 = false;
    let sound9: Map<any, any> = new Map([[String.fromCharCode(98,95,56,50,95,105,108,111,103,0),109], [String.fromCharCode(102,114,105,101,110,100,108,121,95,54,95,51,49,0),216]]);
    let productX = 5;
    let stepF = 3.0;
    let whatsapp1 = String.fromCharCode(115,111,114,116,101,100,95,122,95,53,48,0);
      matchesz = combinew.size == 50;
   if (matchesz || formR) {
      matchesz = !china1;
   }
      combinew = new Map([[`${sound9.size}`, sourceu.length << (Math.min(1, Math.abs(sound9.size)))]]);
   while (!china1 || (5 << (Math.min(5, Math.abs(sound9.size)))) <= 3) {
       let fill2: Array<any> = [717, 249];
         fill2.push(2);
      while (!fill2.includes(fill2.length)) {
          let memberH: Map<any, any> = new Map([[String.fromCharCode(119,95,49,51,95,115,105,103,110,105,102,105,99,97,110,116,0),false ], [String.fromCharCode(117,95,55,53,95,114,111,119,115,112,97,110,0),false ]]);
          let fieldB = false;
         fill2 = [fill2.length << (Math.min(Math.abs(2), 4))];
         memberH.set(`${memberH.size}`, 1 + memberH.size);
         fieldB = memberH.size >= 43;
         break;
      }
          let relateda = false;
          let mbsplash1 = 4.0;
          let switch_pea = 3.0;
         fill2 = [(fill2.length - (relateda ? 5 : 5))];
         relateda = switch_pea <= 3.86 && 3.86 <= mbsplash1;
         mbsplash1 += parseFloat(`${parseInt(`${switch_pea}`)}`);
      china1 = !formR;
      break;
   }
      formR = !sourceu.startsWith(`${matchesz}`);
      combinew.set(`${sound9.size}`, combinew.size * sound9.size);
   let awayJ = sourceu.length >= 8501055;
   do {
       let clearp = String.fromCharCode(102,95,51,53,95,98,111,100,101,114,0);
       let pauses = false;
       let zhengpianw = String.fromCharCode(115,95,52,57,95,112,117,114,101,0);
       let modalj: Map<any, any> = new Map([[String.fromCharCode(112,114,111,98,105,110,103,95,110,95,51,55,0),51], [String.fromCharCode(110,95,54,57,95,99,101,108,108,0),269], [String.fromCharCode(97,95,49,51,95,108,105,107,101,108,121,0),977]]);
      while (2 <= clearp.length) {
         zhengpianw = "2";
         break;
      }
          let project4 = 5.0;
          let internetU = String.fromCharCode(105,112,118,95,48,95,53,57,0);
          let flyerm = 1;
         zhengpianw += "3";
         project4 += parseFloat(`${parseInt(`${project4}`)}`);
         internetU += `${internetU.length}`;
         flyerm &= 2 / (Math.max(10, flyerm));
      if (!clearp.startsWith(zhengpianw)) {
          let circleL = 2.0;
          let pageY: Array<any> = [46, 412, 720];
          let filedC = 3.0;
         zhengpianw += "2";
         circleL /= Math.max(parseFloat(`${parseInt(`${filedC}`)}`), 4);
         pageY = [parseInt(`${circleL}`)];
      }
      for (let i = 0; i < 1; i++) {
          let membershipk: Array<any> = [736, 823, 971];
         pauses = 90 < clearp.length;
         membershipk = [2 * membershipk.length];
      }
      let temperatureZ = 6764386 <= modalj.size;
      do {
         modalj = new Map([[`${modalj.size}`, clearp.length | 1]]);
         if (temperatureZ) {
            break;
         }
      } while (temperatureZ && (zhengpianw.length == 4));
         zhengpianw += `${clearp.length % 2}`;
         zhengpianw = `${(zhengpianw == String.fromCharCode(71,0) ? zhengpianw.length : modalj.size)}`;
          let championL = String.fromCharCode(110,95,50,49,95,117,121,118,121,116,111,121,117,118,0);
          let foregroundT: Map<any, any> = new Map([[String.fromCharCode(117,114,108,115,95,103,95,56,56,0),String.fromCharCode(114,95,49,51,95,97,105,114,105,110,103,0)], [String.fromCharCode(103,101,116,119,105,110,116,105,109,101,111,102,100,97,121,95,110,95,57,54,0),String.fromCharCode(118,99,111,109,98,105,110,101,95,55,95,50,49,0)]]);
          let styleE: Map<any, any> = new Map([[String.fromCharCode(117,110,100,101,114,115,99,111,114,101,95,121,95,54,56,0),true ], [String.fromCharCode(101,95,53,51,95,115,111,108,105,100,105,116,121,0),false ]]);
         clearp = `${1 - foregroundT.size}`;
         championL += `${(String.fromCharCode(98,0) == championL ? championL.length : styleE.size)}`;
         foregroundT.set(championL, championL.length);
         styleE = new Map([[`${styleE.size}`, championL.length]]);
      if (5 <= (modalj.size / (Math.max(10, clearp.length))) && (modalj.size / (Math.max(clearp.length, 10))) <= 5) {
          let footballS: Array<any> = [928, 983, 257];
          let gmailH = String.fromCharCode(104,100,115,112,95,98,95,51,0);
          let videojsB = true;
          let dicex: Array<any> = [String.fromCharCode(121,95,49,48,48,95,114,101,115,105,122,97,98,108,101,0), String.fromCharCode(115,117,98,109,111,100,117,108,101,95,54,95,54,54,0), String.fromCharCode(97,108,97,99,100,115,112,95,101,95,49,53,0)];
          let pressurex = String.fromCharCode(116,101,114,109,105,110,97,116,105,111,110,95,115,95,57,49,0);
         clearp = "2";
         footballS = [footballS.length];
         gmailH += `${gmailH.length}`;
         videojsB = gmailH.length <= 37 || 37 <= footballS.length;
         dicex.push(dicex.length);
         pressurex += `${(gmailH == String.fromCharCode(77,0) ? dicex.length : gmailH.length)}`;
      }
      while (pauses) {
         clearp += `${(zhengpianw == String.fromCharCode(73,0) ? zhengpianw.length : (pauses ? 3 : 1))}`;
         break;
      }
         clearp += `${zhengpianw.length << (Math.min(Math.abs(1), 3))}`;
      while (pauses) {
         pauses = clearp == String.fromCharCode(57,0);
         break;
      }
      sourceu += `${((pauses ? 2 : 1) << (Math.min(clearp.length, 1)))}`;
      if (awayJ) {
         break;
      }
   } while ((!sourceu.endsWith(`${matchesz}`)) && awayJ);
      matchesz = sourceu.length < 71;

    setRefreshing(true);

   if (!china1 && (2 + productX) >= 4) {
      productX += ((china1 ? 5 : 3) % 2);
   }
   for (let h = 0; h < 1; h++) {
      sound9.set(`${productX}`, productX);
   }
   let reportH = sound9.size <= 7128372;
   do {
      sound9.set(`${china1}`, 3);
      if (reportH) {
         break;
      }
   } while (reportH && (2 == (sound9.size - 4) || (4 - sound9.size) == 1));
   let minir = formR ? !formR : formR;
   do {
      formR = combinew.size > 95;
      if (minir) {
         break;
      }
   } while (minir && (formR));
   while (!matchesz || sourceu.length == 2) {
      matchesz = 49 > productX && !formR;
      break;
   }
      combinew.set(sourceu, ((formR ? 1 : 1) ^ sourceu.length));
   for (let y = 0; y < 3; y++) {
      sourceu = `${((formR ? 2 : 5) | parseInt(`${photoQ}`))}`;
   }
   let paginationd = sound9.size <= 5431725;
   do {
      sound9.set(`${sound9.size}`, combinew.size >> (Math.min(1, Math.abs(sound9.size))));
      if (paginationd) {
         break;
      }
   } while ((4 > sound9.size && (sound9.size << (Math.min(Math.abs(4), 5))) > 1) && paginationd);
    await refreshUserState();

   let reminderN = matchesz ? !matchesz : matchesz;
   do {
      matchesz = 7 > sourceu.length;
      if (reminderN) {
         break;
      }
   } while ((matchesz && (sound9.size >> (Math.min(Math.abs(4), 5))) < 1) && reminderN);
   for (let p = 0; p < 3; p++) {
       let privacyb: Map<any, any> = new Map([[String.fromCharCode(121,95,50,95,101,120,116,114,97,99,102,103,0),774], [String.fromCharCode(100,114,97,119,97,98,108,101,95,108,95,51,54,0),130]]);
       let t_count0 = String.fromCharCode(115,95,50,48,95,100,101,115,107,116,111,112,0);
       let detailn: Array<any> = [5, 569];
       let incidentU = String.fromCharCode(114,101,104,97,115,104,95,113,95,51,51,0);
       let leftV = 2;
      if (incidentU.includes(`${privacyb.size}`)) {
         privacyb = new Map([[`${privacyb.size}`, 1 << (Math.min(3, detailn.length))]]);
      }
      for (let u = 0; u < 3; u++) {
         t_count0 = `${leftV << (Math.min(Math.abs(privacyb.size), 5))}`;
      }
      let detailJ = privacyb.size >= 9747795;
      do {
         privacyb.set(t_count0, detailn.length * 3);
         if (detailJ) {
            break;
         }
      } while ((incidentU.length < privacyb.size) && detailJ);
      if (4 == (4 + privacyb.size) || (privacyb.size + incidentU.length) == 4) {
         incidentU += `${t_count0.length}`;
      }
      if ((leftV + 1) > 3 && (leftV + 1) > 5) {
         detailn = [t_count0.length];
      }
      while ((2 - leftV) == 4 && (leftV - 2) == 3) {
         incidentU = `${t_count0.length >> (Math.min(Math.abs(3), 1))}`;
         break;
      }
         t_count0 = `${detailn.length}`;
          let textk: Array<any> = [411, 558, 47];
         t_count0 = `${incidentU.length * 3}`;
         textk.push(1);
       let sound3 = false;
       let slidern = false;
          let tickedu = 3.0;
         incidentU = "1";
         tickedu /= Math.max(4, 3);
       let minivodC = String.fromCharCode(100,101,108,101,116,101,95,103,95,57,51,0);
         incidentU += `${t_count0.length}`;
         incidentU += `${(leftV ^ (sound3 ? 4 : 1))}`;
      let brightnessR = 5715345 <= leftV;
      do {
          let borderlessk = String.fromCharCode(98,95,57,57,95,119,101,98,112,97,103,101,115,0);
         leftV >>= Math.min(1, Math.abs(((sound3 ? 4 : 5) + 2)));
         borderlessk = `${(String.fromCharCode(70,0) == borderlessk ? borderlessk.length : borderlessk.length)}`;
         if (brightnessR) {
            break;
         }
      } while (brightnessR && ((leftV ^ minivodC.length) <= 2 && 1 <= (leftV ^ 2)));
       let mbnativeadvancedw = String.fromCharCode(116,101,115,115,101,108,108,97,116,101,95,113,95,55,55,0);
       let anner0 = String.fromCharCode(116,95,51,53,95,112,107,103,99,111,110,102,105,103,0);
      sourceu = "2";
   }
       let redirectG = String.fromCharCode(115,116,114,105,110,103,98,117,102,102,101,114,95,122,95,51,56,0);
       let commentG = 0.0;
       let redirect6 = String.fromCharCode(112,97,114,116,105,99,108,101,95,97,95,57,49,0);
      let pointf = commentG <= 7141511.0;
      do {
         commentG /= Math.max((parseFloat(`${String.fromCharCode(85,0) == redirect6 ? redirect6.length : parseInt(`${commentG}`)}`)), 3);
         if (pointf) {
            break;
         }
      } while (((parseInt(`${commentG}`) / 4) >= 5 || (commentG / (Math.max(parseFloat(`${redirect6.length}`), 5))) >= 4.9) && pointf);
      for (let k = 0; k < 3; k++) {
          let leagueE = 3.0;
          let ycopy_tqv = String.fromCharCode(105,95,53,57,95,98,97,115,101,110,97,109,101,0);
         commentG /= Math.max(4, parseFloat(`${3}`));
         leagueE += parseInt(`${leagueE}`);
         ycopy_tqv = `${(String.fromCharCode(86,0) == ycopy_tqv ? parseInt(`${leagueE}`) : ycopy_tqv.length)}`;
      }
          let ewarded1: Map<any, any> = new Map([[String.fromCharCode(109,101,110,117,115,95,51,95,51,51,0),163], [String.fromCharCode(114,95,50,56,95,119,105,100,103,101,116,0),162], [String.fromCharCode(101,118,97,108,117,108,97,116,101,95,102,95,50,53,0),392]]);
         redirectG = `${parseInt(`${commentG}`) | redirectG.length}`;
         ewarded1 = new Map([[`${ewarded1.size}`, 1]]);
      while ((2.57 + commentG) >= 2.62 || (commentG + 2.57) >= 2.81) {
         commentG *= parseFloat(`${redirectG.length}`);
         break;
      }
      for (let q = 0; q < 1; q++) {
          let teamj = String.fromCharCode(99,111,108,111,114,102,117,108,95,106,95,54,57,0);
          let vignettex = 0.0;
          let shrinkB = false;
          let qnewso = 1;
         commentG += parseFloat(`${qnewso}`);
         teamj = `${(teamj == String.fromCharCode(50,0) ? parseInt(`${vignettex}`) : teamj.length)}`;
         vignettex /= Math.max((parseFloat(`${3 >> (Math.min(4, Math.abs((shrinkB ? 4 : 4))))}`)), 1);
         shrinkB = 31.8 <= vignettex && !shrinkB;
         qnewso *= parseInt(`${vignettex}`);
      }
          let animation9 = String.fromCharCode(100,99,97,101,110,99,95,116,95,51,49,0);
         commentG -= parseFloat(`${2}`);
         animation9 = `${animation9.length}`;
       let eighteen_ = 5;
       let trophyK = 5;
      while ((eighteen_ ^ 4) <= 1) {
         eighteen_ /= Math.max(1, redirectG.length >> (Math.min(2, Math.abs(eighteen_))));
         break;
      }
      let default_edl = 7559559 <= trophyK;
      do {
          let upgrade0: Map<any, any> = new Map([[String.fromCharCode(112,100,122,112,95,105,95,50,50,0),String.fromCharCode(99,95,54,48,95,115,116,97,107,101,0)], [String.fromCharCode(108,95,51,55,95,110,111,114,109,97,108,105,122,101,100,0),String.fromCharCode(98,101,116,116,101,114,95,110,95,52,55,0)], [String.fromCharCode(122,95,53,54,95,99,111,109,98,105,110,101,114,0),String.fromCharCode(110,95,53,56,95,112,114,101,109,117,108,116,115,116,114,97,105,103,104,116,0)]]);
          let downJ = String.fromCharCode(122,95,49,48,95,114,101,112,111,114,116,0);
          let gesturesG = true;
          let mbnativeadvancedN = 2.0;
          let greenZ = String.fromCharCode(109,95,54,51,95,118,105,101,119,101,114,115,0);
         trophyK >>= Math.min(2, Math.abs(2));
         upgrade0 = new Map([[`${mbnativeadvancedN}`, 2 * parseInt(`${mbnativeadvancedN}`)]]);
         downJ = `${(downJ == String.fromCharCode(108,0) ? (gesturesG ? 1 : 5) : downJ.length)}`;
         gesturesG = null != upgrade0.get(`${mbnativeadvancedN}`);
         greenZ += `${1 + upgrade0.size}`;
         if (default_edl) {
            break;
         }
      } while (((trophyK * redirectG.length) < 2 || 2 < (redirectG.length * 2)) && default_edl);
      matchesz = (((!formR ? 17 : redirectG.length) / (Math.max(9, redirectG.length))) == 17);
       let loginE: Map<any, any> = new Map([[String.fromCharCode(107,95,56,57,95,97,114,116,105,102,97,99,116,0),true ], [String.fromCharCode(99,95,49,52,95,99,111,109,112,111,117,110,100,0),false ], [String.fromCharCode(109,112,101,103,97,117,100,105,111,100,101,99,104,101,97,100,101,114,95,120,95,50,50,0),true ]]);
       let collectionp = 3.0;
      let type_k5Z = 5127001 >= loginE.size;
      do {
         loginE = new Map([[`${loginE.size}`, parseInt(`${collectionp}`)]]);
         if (type_k5Z) {
            break;
         }
      } while ((2 >= (loginE.size ^ 1) || (1 ^ loginE.size) >= 4) && type_k5Z);
          let thumbnailV: Array<any> = [57, 254, 405];
         collectionp += parseInt(`${collectionp}`) & 1;
         thumbnailV = [thumbnailV.length & thumbnailV.length];
      for (let i = 0; i < 1; i++) {
         loginE.set(`${collectionp}`, parseInt(`${collectionp}`));
      }
       let file_ = false;
       let sellp = false;
          let quest6 = String.fromCharCode(103,95,51,49,95,104,101,120,0);
         sellp = !sellp;
         quest6 += `${quest6.length + quest6.length}`;
         file_ = loginE.size > parseInt(`${collectionp}`);
      sound9.set(`${formR}`, 2);
   if (1 < combinew.size) {
       let logoc = 1.0;
       let active9: Array<any> = [445, 131];
       let settingp = 5.0;
       let dangerE = String.fromCharCode(109,97,115,116,101,114,105,110,103,95,98,95,54,57,0);
         logoc *= parseFloat(`${active9.length}`);
          let phonea = 3;
         active9 = [2 % (Math.max(7, dangerE.length))];
         phonea += 2;
      while (1.15 > (5.74 * logoc)) {
          let floating3 = 5.0;
          let floaterc: Map<any, any> = new Map([[String.fromCharCode(112,95,55,50,95,114,116,99,115,116,97,116,115,0),591], [String.fromCharCode(105,109,112,95,49,95,52,49,0),119], [String.fromCharCode(102,115,121,110,99,95,102,95,54,50,0),503]]);
          let expandj = 0.0;
         logoc *= parseFloat(`${2}`);
         floating3 /= Math.max(parseFloat(`${parseInt(`${expandj}`)}`), 5);
         floaterc = new Map([[`${floaterc.size}`, parseInt(`${floating3}`)]]);
         break;
      }
         settingp += parseFloat(`${parseInt(`${logoc}`)}`);
       let textu = String.fromCharCode(99,121,99,108,101,95,50,95,55,53,0);
      if ((parseFloat(`${dangerE.length}`) * settingp) >= 2.56) {
          let router8 = String.fromCharCode(112,115,97,95,115,95,51,51,0);
          let whiteL = 0.0;
          let catalogU: Map<any, any> = new Map([[String.fromCharCode(112,114,101,115,117,109,101,95,109,95,50,50,0),false ], [String.fromCharCode(113,95,55,95,115,116,114,101,101,116,0),false ], [String.fromCharCode(118,95,57,56,95,119,114,106,112,103,99,111,109,0),true ]]);
         dangerE += `${parseInt(`${settingp}`) * parseInt(`${logoc}`)}`;
         router8 += `${catalogU.size * parseInt(`${whiteL}`)}`;
         whiteL -= parseFloat(`${catalogU.size | 2}`);
      }
      let membershipz = active9.length <= 7466802;
      do {
          let gesturesy = String.fromCharCode(110,101,109,111,110,105,99,95,55,95,50,48,0);
          let awayq = 0;
          let handlerK = 2.0;
          let indexF: Array<any> = [900, 534, 706];
          let temperatureM: Map<any, any> = new Map([[String.fromCharCode(105,110,100,105,99,97,116,101,100,95,117,95,52,52,0),true ], [String.fromCharCode(110,95,55,49,95,115,119,97,116,99,104,0),false ], [String.fromCharCode(98,105,116,111,112,115,95,103,95,51,49,0),true ]]);
         active9 = [parseInt(`${logoc}`) * 1];
         gesturesy += `${2 - parseInt(`${handlerK}`)}`;
         awayq &= awayq;
         handlerK += parseInt(`${handlerK}`);
         indexF.push(indexF.length);
         temperatureM.set(gesturesy, gesturesy.length ^ indexF.length);
         if (membershipz) {
            break;
         }
      } while (membershipz && ((active9.length - parseInt(`${settingp}`)) >= 5));
      for (let i = 0; i < 2; i++) {
         settingp -= (parseFloat(`${dangerE == String.fromCharCode(69,0) ? parseInt(`${logoc}`) : dangerE.length}`));
      }
      for (let w = 0; w < 1; w++) {
          let assistv = String.fromCharCode(121,95,54,57,95,99,100,120,108,0);
          let anytimeX = String.fromCharCode(102,95,51,51,95,98,111,120,112,108,111,116,0);
          let eactt = 5.0;
         textu = `${parseInt(`${logoc}`) | parseInt(`${settingp}`)}`;
         assistv += `${(anytimeX == String.fromCharCode(49,0) ? anytimeX.length : parseInt(`${eactt}`))}`;
         eactt /= Math.max(5, anytimeX.length & assistv.length);
      }
      while ((logoc - 3.53) >= 2.62 || 3.0 >= (settingp - 3.53)) {
          let onewinterstitial3 = String.fromCharCode(109,95,50,56,95,110,101,101,100,115,0);
          let flipperz = 3.0;
         settingp *= (parseFloat(`${String.fromCharCode(115,0) == textu ? textu.length : parseInt(`${flipperz}`)}`));
         onewinterstitial3 = "3";
         flipperz += parseFloat(`${1}`);
         break;
      }
      for (let l = 0; l < 3; l++) {
         settingp *= parseFloat(`${active9.length}`);
      }
         textu += `${parseInt(`${logoc}`)}`;
      combinew = new Map([[`${active9.length}`, active9.length]]);
   }
      stepF *= ((formR ? 4 : 1) - parseInt(`${photoQ}`));
       let package_4bm = String.fromCharCode(121,95,49,56,95,98,115,116,114,97,99,116,0);
       let auto_68i = String.fromCharCode(117,95,56,53,95,119,104,111,108,101,0);
      if (package_4bm.length < 4) {
          let zoomi = String.fromCharCode(114,95,52,51,95,101,97,103,101,114,0);
          let countdowna = String.fromCharCode(118,105,100,101,111,115,95,103,95,55,54,0);
         package_4bm = `${auto_68i.length}`;
         zoomi += `${3 * zoomi.length}`;
         countdowna = `${countdowna.length}`;
      }
      let countdownj = 6698711 <= package_4bm.length;
      do {
          let nterstitialg: Array<any> = [String.fromCharCode(98,95,56,48,95,97,115,115,101,114,116,0), String.fromCharCode(114,95,49,56,95,116,104,101,114,101,117,109,0)];
          let applicationS = 4.0;
          let previewp = 2.0;
          let country_ = 2.0;
          let favicon6 = String.fromCharCode(110,95,49,48,48,95,97,110,99,104,111,114,0);
         package_4bm += `${favicon6.length % (Math.max(5, package_4bm.length))}`;
         nterstitialg = [2 / (Math.max(6, parseInt(`${applicationS}`)))];
         applicationS /= Math.max(parseFloat(`${parseInt(`${country_}`) << (Math.min(Math.abs(parseInt(`${applicationS}`)), 4))}`), 1);
         previewp /= Math.max(2, parseInt(`${previewp}`) << (Math.min(nterstitialg.length, 4)));
         country_ *= parseFloat(`${parseInt(`${previewp}`) + parseInt(`${applicationS}`)}`);
         favicon6 += "2";
         if (countdownj) {
            break;
         }
      } while (countdownj && (auto_68i == package_4bm));
      let areaM = 5611198 >= auto_68i.length;
      do {
          let blackH = String.fromCharCode(112,95,53,56,95,109,111,109,101,110,116,115,0);
         auto_68i += `${(auto_68i == String.fromCharCode(73,0) ? package_4bm.length : auto_68i.length)}`;
         blackH += "3";
         if (areaM) {
            break;
         }
      } while ((package_4bm != auto_68i) && areaM);
      let suggestionq = package_4bm.length >= 7878842;
      do {
         package_4bm += `${(package_4bm == String.fromCharCode(120,0) ? auto_68i.length : package_4bm.length)}`;
         if (suggestionq) {
            break;
         }
      } while ((2 >= auto_68i.length) && suggestionq);
       let baidu_: Array<any> = [415, 59, 180];
      if (4 >= package_4bm.length) {
         auto_68i += `${3 << (Math.min(4, baidu_.length))}`;
      }
      china1 = String.fromCharCode(79,0) == auto_68i;
   while (4 < (1 % (Math.max(1, combinew.size))) && (combinew.size + photoQ) < 5.81) {
      photoQ += largeJ.size;
      break;
   }
    setRefreshing(false);
    
  };

  const handleConfirm = () => {
       let headeru = String.fromCharCode(116,95,52,57,95,114,117,98,98,101,114,0);
    let native9 = true;
    let corner3 = 3.0;
    let acceptedE = String.fromCharCode(99,111,110,102,101,116,116,105,95,114,95,55,48,0);
    let themeJ = 1.0;
    let sliderd = 2;
    let register__sw: Map<any, any> = new Map([[String.fromCharCode(108,97,121,111,117,116,95,118,95,56,50,0),552], [String.fromCharCode(98,97,115,105,99,95,50,95,51,53,0),43]]);
    let starx = String.fromCharCode(114,95,55,48,95,112,114,111,112,97,103,97,116,101,0);
    let otherB: Map<any, any> = new Map([[String.fromCharCode(98,95,51,57,95,116,105,99,107,101,114,0),false ], [String.fromCharCode(97,117,120,105,108,105,97,114,121,95,113,95,52,52,0),false ]]);
    let auto_0d9 = 3.0;
    let progressQ = 5.0;
      starx = `${register__sw.size}`;
       let inewsC = String.fromCharCode(117,110,102,101,116,99,104,95,52,95,53,48,0);
       let predictionV = 3.0;
      for (let n = 0; n < 2; n++) {
          let bufferu = String.fromCharCode(112,102,102,102,116,95,49,95,52,53,0);
          let corer = 5.0;
          let f_viewI = String.fromCharCode(108,95,50,95,111,112,97,99,105,116,121,0);
          let selection7 = 4.0;
          let more8 = String.fromCharCode(113,115,99,97,108,101,113,108,111,103,95,57,95,55,48,0);
         predictionV /= Math.max(5, more8.length);
         bufferu += `${3 << (Math.min(5, f_viewI.length))}`;
         corer *= parseFloat(`${bufferu.length}`);
         f_viewI += `${bufferu.length}`;
         selection7 -= parseFloat(`${bufferu.length + 2}`);
         more8 = "3";
      }
         inewsC = `${parseInt(`${predictionV}`) / (Math.max(2, 6))}`;
         predictionV += 2;
      while (1 > (1 + inewsC.length)) {
          let nalytics4 = String.fromCharCode(122,95,54,49,95,109,111,109,101,110,116,0);
          let strings3 = String.fromCharCode(102,95,52,50,95,105,109,112,117,108,115,101,0);
          let selected_ = String.fromCharCode(119,95,54,51,95,101,108,108,105,112,116,105,99,0);
          let libcrashsdk5 = String.fromCharCode(117,95,54,55,95,102,114,97,109,101,115,105,122,101,115,0);
          let combine3 = 5.0;
         predictionV /= Math.max(4, 3 >> (Math.min(1, Math.abs(parseInt(`${combine3}`)))));
         nalytics4 = `${(strings3 == String.fromCharCode(50,0) ? selected_.length : strings3.length)}`;
         selected_ = `${strings3.length << (Math.min(4, selected_.length))}`;
         libcrashsdk5 += `${(String.fromCharCode(83,0) == libcrashsdk5 ? selected_.length : libcrashsdk5.length)}`;
         combine3 -= parseFloat(`${libcrashsdk5.length}`);
         break;
      }
         predictionV -= 3;
          let bootsplashm = 0.0;
          let gestures4: Array<any> = [String.fromCharCode(100,95,57,48,95,114,105,110,103,116,111,110,101,115,0), String.fromCharCode(101,120,112,111,95,103,95,49,53,0)];
          let otheri = String.fromCharCode(108,111,99,107,95,53,95,56,48,0);
         predictionV -= parseInt(`${bootsplashm}`) >> (Math.min(gestures4.length, 3));
         bootsplashm -= parseFloat(`${otheri.length / 2}`);
         gestures4 = [otheri.length / (Math.max(2, 1))];
      acceptedE += `${register__sw.size & 2}`;
      register__sw.set(headeru, (headeru == String.fromCharCode(66,0) ? parseInt(`${themeJ}`) : headeru.length));
   let huawei3 = 7284336 >= starx.length;
   do {
       let configurew = 0.0;
       let moont = String.fromCharCode(118,97,108,105,100,97,116,111,114,95,117,95,49,53,0);
       let whatsapp9 = 1;
       let selectedL = String.fromCharCode(103,95,51,50,95,100,117,114,105,110,103,0);
      let applicationg = String.fromCharCode(119,53,114,103,53,54,55,0) == moont;
      do {
         moont += `${(String.fromCharCode(88,0) == moont ? moont.length : whatsapp9)}`;
         if (applicationg) {
            break;
         }
      } while (applicationg && (3 >= whatsapp9));
      while (4 == (whatsapp9 / 4) && (whatsapp9 / 4) == 5) {
          let carousel6 = String.fromCharCode(112,117,110,99,104,95,119,95,55,48,0);
          let middlei = String.fromCharCode(97,114,101,116,104,101,114,101,95,51,95,53,57,0);
          let linkf: Map<any, any> = new Map([[String.fromCharCode(101,95,57,52,95,112,101,97,107,115,0),559], [String.fromCharCode(119,95,56,53,95,97,108,116,101,114,0),592], [String.fromCharCode(115,101,108,102,105,101,95,97,95,57,56,0),168]]);
         selectedL = `${whatsapp9}`;
         carousel6 += "2";
         middlei += `${(middlei == String.fromCharCode(104,0) ? linkf.size : middlei.length)}`;
         linkf.set(middlei, 2);
         break;
      }
          let reactnativejsA: Array<any> = [128, 388, 576];
          let starh = 3;
          let mbjscommonw = 2;
         selectedL = `${mbjscommonw << (Math.min(Math.abs(1), 2))}`;
         reactnativejsA.push(reactnativejsA.length - starh);
         starh *= reactnativejsA.length ^ 2;
         mbjscommonw %= Math.max(3, 4);
      if (2 > (2 % (Math.max(5, whatsapp9)))) {
         configurew *= moont.length;
      }
      let brightnessX = 6304936 >= whatsapp9;
      do {
         whatsapp9 -= 3;
         if (brightnessX) {
            break;
         }
      } while (brightnessX && (!selectedL.startsWith(`${whatsapp9}`)));
       let sansS = String.fromCharCode(116,97,103,99,111,109,112,97,114,101,95,109,95,53,57,0);
       let phone4 = String.fromCharCode(98,101,116,116,101,114,95,101,95,50,57,0);
      let recommendationG = sansS == String.fromCharCode(112,119,112,118,0);
      do {
         sansS = `${parseInt(`${configurew}`) * selectedL.length}`;
         if (recommendationG) {
            break;
         }
      } while ((4 > phone4.length) && recommendationG);
      let colorsR = 8534967 >= whatsapp9;
      do {
          let placeholder1 = 2.0;
         whatsapp9 &= 3;
         placeholder1 /= Math.max(parseFloat(`${parseInt(`${placeholder1}`) ^ 2}`), 3);
         if (colorsR) {
            break;
         }
      } while ((!phone4.includes(`${whatsapp9}`)) && colorsR);
         moont = `${selectedL.length}`;
      let bufferU = moont.length <= 7289864;
      do {
          let chinasameM: Map<any, any> = new Map([[String.fromCharCode(115,111,114,116,95,100,95,55,50,0),352], [String.fromCharCode(98,95,57,56,95,111,110,101,108,105,110,101,0),529], [String.fromCharCode(100,105,97,103,114,97,109,95,104,95,56,48,0),552]]);
         moont += "3";
         chinasameM = new Map([[`${chinasameM.size}`, chinasameM.size | 1]]);
         if (bufferU) {
            break;
         }
      } while (((configurew * 3.49) >= 3.98) && bufferU);
      while (sansS == String.fromCharCode(75,0)) {
          let nativeexz = true;
          let whistleO: Map<any, any> = new Map([[String.fromCharCode(112,95,55,50,95,114,101,100,101,101,109,0),true ], [String.fromCharCode(118,112,100,97,116,97,95,55,95,50,48,0),true ], [String.fromCharCode(115,101,116,116,105,103,110,115,95,120,95,52,50,0),true ]]);
         phone4 = `${selectedL.length}`;
         nativeexz = whistleO.size <= 13;
         whistleO.set(`${nativeexz}`, 1);
         break;
      }
       let ewardedw = String.fromCharCode(99,117,114,116,97,105,110,115,95,49,95,51,49,0);
      starx = `${3 & parseInt(`${corner3}`)}`;
      if (huawei3) {
         break;
      }
   } while (huawei3 && (!starx.startsWith(`${native9}`)));
       let liveP = 4.0;
       let combinede = 4;
       let sheetX: Array<any> = [205, 559];
      while (sheetX.includes(liveP)) {
          let holderE = false;
          let description_d_N: Map<any, any> = new Map([[String.fromCharCode(99,97,108,99,117,108,97,116,101,95,54,95,52,53,0),76], [String.fromCharCode(112,95,51,52,95,110,111,109,105,110,97,116,101,0),496], [String.fromCharCode(99,111,109,112,114,101,115,115,111,114,95,114,95,56,48,0),894]]);
         sheetX = [((holderE ? 1 : 5) * sheetX.length)];
         holderE = description_d_N.size < 28;
         description_d_N.set(`${description_d_N.size}`, description_d_N.size);
         break;
      }
          let dicep = 0;
          let description_35 = String.fromCharCode(105,116,101,114,97,116,101,95,109,95,54,52,0);
          let edito = String.fromCharCode(101,95,53,54,95,119,104,105,108,101,0);
         liveP *= parseFloat(`${sheetX.length}`);
         dicep ^= description_35.length % 2;
         description_35 = `${(String.fromCharCode(49,0) == description_35 ? edito.length : description_35.length)}`;
         edito += `${2 | edito.length}`;
      while (combinede == 3) {
          let controlW = 5.0;
          let aboutE = 5.0;
          let short_t7t = String.fromCharCode(122,95,50,48,95,117,115,101,115,0);
         combinede %= Math.max(1, combinede);
         controlW *= parseInt(`${aboutE}`);
         short_t7t = `${parseInt(`${controlW}`)}`;
         break;
      }
      if (combinede > sheetX.length) {
         sheetX.push(combinede & 3);
      }
      let umengg = 5888523 >= sheetX.length;
      do {
         sheetX.push(parseInt(`${liveP}`));
         if (umengg) {
            break;
         }
      } while (umengg && (4.14 < (liveP / (Math.max(parseFloat(`${sheetX.length}`), 1))) && 4.0 < (liveP / 4.14)));
          let mbridge_: Array<any> = [190, 373];
         sheetX = [mbridge_.length];
      let usernameN = sheetX.length >= 8999814;
      do {
          let thumbnailU = false;
          let const_i5 = 0;
          let sound6 = String.fromCharCode(105,95,52,57,0);
          let subsG: Map<any, any> = new Map([[String.fromCharCode(98,95,54,57,95,111,119,110,101,100,0),false ], [String.fromCharCode(107,95,49,95,115,109,97,108,108,101,114,0),true ]]);
         sheetX = [((thumbnailU ? 4 : 4) * parseInt(`${liveP}`))];
         thumbnailU = 60 < subsG.size;
         const_i5 %= Math.max(4, sound6.length);
         sound6 += "1 & const_i5";
         subsG.set(sound6, (String.fromCharCode(83,0) == sound6 ? subsG.size : sound6.length));
         if (usernameN) {
            break;
         }
      } while ((sheetX.includes(combinede)) && usernameN);
      while ((liveP - 1.65) >= 5.34 || 5 >= (parseInt(`${liveP}`) - sheetX.length)) {
          let championj = String.fromCharCode(119,97,107,101,117,112,95,116,95,52,49,0);
         sheetX = [parseInt(`${liveP}`)];
         championj = `${(championj == String.fromCharCode(103,0) ? championj.length : championj.length)}`;
         break;
      }
         combinede |= combinede;
      headeru = `${((native9 ? 4 : 4))}`;
       let twittera = String.fromCharCode(99,111,100,97,98,108,101,95,55,95,49,52,0);
       let alertJ = 5;
          let expandS = true;
         twittera = `${alertJ + 3}`;
         expandS = expandS && expandS;
         alertJ >>= Math.min(1, Math.abs(alertJ - twittera.length));
         alertJ *= twittera.length;
      for (let k = 0; k < 1; k++) {
          let stationsY = String.fromCharCode(118,95,56,57,95,116,121,111,101,0);
          let arrowb = String.fromCharCode(110,116,105,108,101,95,103,95,49,51,0);
          let skipQ = String.fromCharCode(101,95,51,52,95,114,101,115,112,111,110,115,101,0);
          let pressureb = 2.0;
         alertJ &= arrowb.length;
         stationsY = `${skipQ.length}`;
         arrowb = `${skipQ.length << (Math.min(2, Math.abs(parseInt(`${pressureb}`))))}`;
         pressureb -= parseFloat(`${parseInt(`${pressureb}`) ^ stationsY.length}`);
      }
      if ((twittera.length ^ 1) >= 5 && 1 >= (alertJ ^ twittera.length)) {
         alertJ *= twittera.length + alertJ;
      }
         twittera += `${alertJ / (Math.max(twittera.length, 6))}`;
      headeru = `${starx.length}`;

    setIsDialogOpen(false);

   let buildJ = sliderd <= 6057552;
   do {
      sliderd |= register__sw.size;
      if (buildJ) {
         break;
      }
   } while (buildJ && ((headeru.length - 4) <= 5));
      themeJ *= parseFloat(`${acceptedE.length}`);
   if (2.30 > themeJ) {
      register__sw = new Map([[`${register__sw.size}`, 3 ^ parseInt(`${themeJ}`)]]);
   }
   if (!headeru.endsWith(`${native9}`)) {
       let custom4: Array<any> = [670, 793];
       let bridgez: Array<any> = [159, 718, 96];
      for (let g = 0; g < 2; g++) {
          let bnewinterstitialZ: Map<any, any> = new Map([[String.fromCharCode(103,114,101,97,116,101,114,95,53,95,56,49,0),54], [String.fromCharCode(97,108,112,104,97,110,117,109,101,114,105,99,115,95,50,95,56,56,0),362]]);
          let filed1 = 2.0;
         bridgez = [parseInt(`${filed1}`) >> (Math.min(Math.abs(1), 4))];
         bnewinterstitialZ.set(`${bnewinterstitialZ.size}`, bnewinterstitialZ.size);
         filed1 /= Math.max(parseFloat(`${bnewinterstitialZ.size / (Math.max(9, bnewinterstitialZ.size))}`), 3);
      }
          let statisticsC = String.fromCharCode(100,105,103,101,115,116,98,121,111,98,106,95,55,95,56,49,0);
         custom4.push(custom4.length);
         statisticsC = "1";
         custom4 = [bridgez.length / (Math.max(custom4.length, 9))];
      while (2 < (bridgez.length % 4)) {
         bridgez.push(1);
         break;
      }
      for (let j = 0; j < 3; j++) {
         custom4 = [custom4.length];
      }
      for (let i = 0; i < 3; i++) {
          let leaguem = String.fromCharCode(115,95,52,49,95,119,111,114,107,101,114,115,0);
          let sentryL = String.fromCharCode(99,104,101,99,107,95,116,95,52,53,0);
          let referrerA = String.fromCharCode(122,95,55,51,95,105,110,100,101,118,115,0);
          let dycreatord = String.fromCharCode(115,113,117,97,114,101,115,95,117,95,56,55,0);
         custom4.push(dycreatord.length);
         leaguem = `${referrerA.length - 3}`;
         sentryL = `${3 << (Math.min(2, sentryL.length))}`;
         referrerA += `${2 - leaguem.length}`;
         dycreatord += `${leaguem.length ^ sentryL.length}`;
      }
      headeru += `${sliderd / (Math.max(9, custom4.length))}`;
   }
   while (starx.length > register__sw.size) {
       let debug0: Map<any, any> = new Map([[String.fromCharCode(98,95,51,52,95,115,104,97,114,101,103,114,111,117,112,0),String.fromCharCode(107,95,48,95,112,111,105,110,116,101,114,0)], [String.fromCharCode(102,97,108,108,111,102,102,95,117,95,57,56,0),String.fromCharCode(116,111,103,103,108,101,95,111,95,56,56,0)], [String.fromCharCode(98,114,101,97,107,105,110,103,95,118,95,56,55,0),String.fromCharCode(109,101,114,103,101,95,100,95,50,50,0)]]);
      for (let g = 0; g < 2; g++) {
         debug0.set(`${debug0.size}`, debug0.size ^ 3);
      }
      let singaporeZ = 9888821 >= debug0.size;
      do {
         debug0.set(`${debug0.size}`, debug0.size * debug0.size);
         if (singaporeZ) {
            break;
         }
      } while ((debug0.get(`${debug0.size}`) == null) && singaporeZ);
      for (let p = 0; p < 2; p++) {
          let commentx = String.fromCharCode(111,95,54,95,115,101,103,116,114,101,101,0);
          let penaltyV: Map<any, any> = new Map([[String.fromCharCode(116,95,49,57,95,111,100,100,97,118,103,0),false ], [String.fromCharCode(119,95,55,53,95,115,117,98,115,99,114,105,98,97,98,108,101,0),false ], [String.fromCharCode(99,104,97,110,103,101,95,55,95,56,50,0),true ]]);
          let tickedv = String.fromCharCode(99,109,112,97,100,100,114,95,48,95,53,56,0);
          let sharedI = 4;
         debug0 = new Map([[commentx, sharedI + commentx.length]]);
         penaltyV = new Map([[`${penaltyV.size}`, tickedv.length << (Math.min(5, Math.abs(penaltyV.size)))]]);
         tickedv += `${2 % (Math.max(2, tickedv.length))}`;
         sharedI /= Math.max(1, tickedv.length / (Math.max(8, penaltyV.size)));
      }
      starx = `${starx.length - 2}`;
      break;
   }
      register__sw = new Map([[acceptedE, 2]]);
    setIsVisible(false);

       let theme3 = String.fromCharCode(102,95,57,48,95,99,111,108,108,97,112,115,105,110,103,0);
       let greyY: Map<any, any> = new Map([[String.fromCharCode(97,95,53,51,95,108,111,99,107,109,103,114,0),878], [String.fromCharCode(101,95,57,52,95,102,100,111,112,101,110,0),459]]);
       let controlA = String.fromCharCode(105,100,97,116,97,95,106,95,51,49,0);
          let homej = 1.0;
          let subsU = 4.0;
         theme3 += `${theme3.length | parseInt(`${homej}`)}`;
         homej /= Math.max(parseInt(`${subsU}`) ^ parseInt(`${subsU}`), 5);
      let expandl = 7716844 <= greyY.size;
      do {
         greyY = new Map([[`${greyY.size}`, 3]]);
         if (expandl) {
            break;
         }
      } while ((greyY.size > 1) && expandl);
         greyY.set(theme3, 2);
      let malaysia8 = controlA.length <= 5826185;
      do {
          let mbridgeI = 0.0;
         controlA += `${(String.fromCharCode(67,0) == controlA ? controlA.length : theme3.length)}`;
         mbridgeI *= 1 >> (Math.min(Math.abs(parseInt(`${mbridgeI}`)), 5));
         if (malaysia8) {
            break;
         }
      } while (malaysia8 && (5 <= (greyY.size ^ controlA.length)));
       let awayX = 2.0;
       let feedbackG = 1.0;
      while (Array.from(greyY.keys()).includes(`${feedbackG}`)) {
         greyY.set(theme3, 3);
         break;
      }
       let mathR = 4.0;
      if (!Array.from(greyY.keys()).includes(`${awayX}`)) {
          let playercommon_: Map<any, any> = new Map([[String.fromCharCode(116,114,97,105,108,95,109,95,53,54,0),839], [String.fromCharCode(106,95,51,57,95,115,99,114,101,101,110,99,97,115,116,0),704], [String.fromCharCode(101,95,53,49,95,97,101,115,111,112,116,0),469]]);
         greyY = new Map([[`${mathR}`, parseInt(`${mathR}`) % 2]]);
         playercommon_.set(`${playercommon_.size}`, 2);
      }
         theme3 += `${3 - parseInt(`${awayX}`)}`;
      acceptedE = `${parseInt(`${corner3}`)}`;
   let context_ = 4944413.0 <= themeJ;
   do {
       let hearto: Array<any> = [998, 833, 797];
       let stats1 = String.fromCharCode(104,111,114,105,103,95,101,95,51,51,0);
       let mbnativeadvancedz = String.fromCharCode(115,116,105,99,107,101,114,115,95,115,95,53,53,0);
       let bannerf: Map<any, any> = new Map([[String.fromCharCode(115,95,56,57,95,116,111,111,108,115,0),false ], [String.fromCharCode(119,95,53,53,95,98,111,119,108,105,110,103,0),true ]]);
       let stylesx = 0;
         stats1 = `${(String.fromCharCode(95,0) == stats1 ? stats1.length : stylesx)}`;
         stats1 = `${mbnativeadvancedz.length >> (Math.min(Math.abs(3), 3))}`;
      if ((hearto.length * mbnativeadvancedz.length) <= 1) {
         hearto.push(bannerf.size * stylesx);
      }
         stylesx >>= Math.min(1, Math.abs((String.fromCharCode(86,0) == mbnativeadvancedz ? mbnativeadvancedz.length : hearto.length)));
      for (let e = 0; e < 2; e++) {
         stylesx ^= stylesx;
      }
          let prediction9: Map<any, any> = new Map([[String.fromCharCode(97,95,53,53,95,109,101,100,105,97,110,0),608], [String.fromCharCode(119,95,57,54,95,108,111,103,103,97,98,108,101,0),759], [String.fromCharCode(98,95,57,56,95,115,117,112,112,114,101,115,115,105,110,103,0),165]]);
          let modalW = String.fromCharCode(115,95,50,57,95,104,97,110,100,108,101,0);
          let black2 = true;
         bannerf = new Map([[`${black2}`, stylesx & 1]]);
         prediction9.set(`${modalW}`, prediction9.size);
         modalW = `${(String.fromCharCode(119,0) == modalW ? prediction9.size : modalW.length)}`;
         black2 = modalW == String.fromCharCode(111,0);
      let matcho = String.fromCharCode(54,50,51,115,95,106,49,0) == stats1;
      do {
          let expandi = 0.0;
          let alert8 = String.fromCharCode(98,114,105,100,103,101,95,119,95,53,49,0);
         stats1 += `${(String.fromCharCode(87,0) == stats1 ? stats1.length : hearto.length)}`;
         expandi -= parseFloat(`${parseInt(`${expandi}`) % (Math.max(2, 1))}`);
         alert8 += `${alert8.length}`;
         if (matcho) {
            break;
         }
      } while (matcho && ((stats1.length << (Math.min(Math.abs(2), 4))) == 5));
      while ((3 << (Math.min(3, hearto.length))) > 4 || 2 > (3 << (Math.min(5, hearto.length)))) {
         hearto.push(mbnativeadvancedz.length);
         break;
      }
         stats1 = `${bannerf.size % (Math.max(1, 1))}`;
      let expiredN = stylesx <= 9846053;
      do {
         stylesx &= 2 - hearto.length;
         if (expiredN) {
            break;
         }
      } while (expiredN && ((stylesx & stats1.length) < 2));
      for (let a = 0; a < 3; a++) {
         hearto.push(hearto.length);
      }
         bannerf = new Map([[`${hearto.length}`, 2 | hearto.length]]);
      for (let y = 0; y < 1; y++) {
         bannerf = new Map([[`${bannerf.size}`, 3 ^ bannerf.size]]);
      }
         mbnativeadvancedz = `${(mbnativeadvancedz == String.fromCharCode(83,0) ? mbnativeadvancedz.length : stylesx)}`;
          let robotos: Map<any, any> = new Map([[String.fromCharCode(106,95,49,52,95,102,105,108,101,115,0),306], [String.fromCharCode(99,111,110,116,97,105,110,115,95,54,95,49,55,0),288], [String.fromCharCode(98,95,55,53,95,116,101,115,116,111,114,105,103,0),39]]);
         bannerf = new Map([[`${robotos.size}`, robotos.size / 1]]);
      themeJ += parseFloat(`${3 * hearto.length}`);
      if (context_) {
         break;
      }
   } while ((!native9) && context_);
   if (acceptedE.length < 2) {
      acceptedE += `${(String.fromCharCode(82,0) == starx ? starx.length : parseInt(`${corner3}`))}`;
   }
   while (!native9) {
      native9 = acceptedE == starx;
      break;
   }
      sliderd *= (starx.length / (Math.max(4, (native9 ? 4 : 5))));
   let bridgeW = sliderd >= 9404760;
   do {
      sliderd *= ((native9 ? 1 : 3));
      if (bridgeW) {
         break;
      }
   } while ((1 >= (3 << (Math.min(4, Math.abs(sliderd)))) && 3 >= (3 ^ sliderd)) && bridgeW);
    handleRefresh();

   if (4.57 < (corner3 / (Math.max(5.84, 2))) || 4 < (acceptedE.length / (Math.max(2, 8)))) {
      acceptedE += `${headeru.length}`;
   }
   let gesturesh = native9 ? !native9 : native9;
   do {
       let userq = 3;
       let private_7im = 1.0;
      if ((4.26 + private_7im) < 2.80) {
         userq /= Math.max(5, userq | parseInt(`${private_7im}`));
      }
      while (1.68 < private_7im) {
         userq %= Math.max(parseInt(`${private_7im}`) | 1, 1);
         break;
      }
          let playercommon6 = String.fromCharCode(110,95,53,54,95,114,103,98,105,0);
          let collection6 = String.fromCharCode(99,97,117,116,101,114,105,122,101,95,114,95,50,0);
          let materialK = 1.0;
         userq ^= parseInt(`${materialK}`) * playercommon6.length;
         playercommon6 = `${1 | collection6.length}`;
         collection6 = `${collection6.length}`;
      let mbsplashD = userq >= 4962879;
      do {
         userq &= 3 | parseInt(`${private_7im}`);
         if (mbsplashD) {
            break;
         }
      } while (((private_7im * userq) >= 1.66) && mbsplashD);
      let aboutg = private_7im >= 8571090.0;
      do {
         private_7im += parseInt(`${private_7im}`) / 1;
         if (aboutg) {
            break;
         }
      } while (aboutg && (userq >= 3));
         private_7im *= parseInt(`${private_7im}`) + userq;
      native9 = headeru == String.fromCharCode(103,0);
      if (gesturesh) {
         break;
      }
   } while (gesturesh && (!native9));
   while ((1 * sliderd) >= 5) {
       let foregroundp = 2.0;
       let diceo = String.fromCharCode(98,97,108,97,110,99,101,100,95,49,95,49,0);
       let long_yq = true;
       let goalX = 1;
          let launchA: Map<any, any> = new Map([[String.fromCharCode(98,95,56,48,95,109,101,116,104,111,100,115,0),636], [String.fromCharCode(118,95,55,53,0),525]]);
          let singleD: Map<any, any> = new Map([[String.fromCharCode(122,95,57,52,95,101,110,99,111,100,101,100,0),96], [String.fromCharCode(98,108,117,114,114,97,98,108,101,95,104,95,54,49,0),892], [String.fromCharCode(115,117,110,114,97,115,116,95,107,95,49,54,0),425]]);
         diceo = `${3 | goalX}`;
         launchA = new Map([[`${launchA.size}`, 2 | singleD.size]]);
         singleD.set(`${launchA.size}`, 3 & launchA.size);
      while (!long_yq || 3 < diceo.length) {
          let coreU = String.fromCharCode(112,108,97,121,95,50,95,54,51,0);
         diceo = `${diceo.length >> (Math.min(Math.abs(3), 3))}`;
         coreU = `${coreU.length}`;
         break;
      }
         goalX ^= 1;
      while ((5.13 - foregroundp) == 1.26 && 1 == (parseInt(`${foregroundp}`) - goalX)) {
          let gradleA = String.fromCharCode(114,95,49,49,95,112,114,101,118,105,101,119,115,0);
          let mintegral2 = 2;
          let untickk = false;
          let referrerj = String.fromCharCode(118,111,116,101,100,95,107,95,50,49,0);
          let sansm = 4;
         foregroundp *= parseFloat(`${3}`);
         gradleA = `${referrerj.length}`;
         mintegral2 &= referrerj.length;
         sansm %= Math.max((referrerj.length | (untickk ? 1 : 3)), 4);
         break;
      }
      let minie = diceo.length >= 5328141;
      do {
         diceo = `${diceo.length}`;
         if (minie) {
            break;
         }
      } while (minie && (diceo.length >= 2));
         long_yq = !long_yq;
       let register_z11 = 1.0;
      let submitP = register_z11 <= 9430589.0;
      do {
          let mbnativel = 4.0;
          let lightX = 4;
          let castD: Array<any> = [726, 348];
         register_z11 /= Math.max(2, parseFloat(`${3 ^ diceo.length}`));
         mbnativel -= 3;
         lightX -= castD.length;
         castD.push(parseInt(`${mbnativel}`) | 1);
         if (submitP) {
            break;
         }
      } while (submitP && (foregroundp == 1.86));
         register_z11 *= parseFloat(`${diceo.length}`);
          let vignetteQ = 2.0;
          let screenu = 3.0;
         long_yq = foregroundp > vignetteQ;
         vignetteQ *= parseFloat(`${parseInt(`${screenu}`) / (Math.max(parseInt(`${screenu}`), 10))}`);
          let targetC: Array<any> = [794, 193];
         foregroundp -= (parseFloat(`${(long_yq ? 2 : 3) + parseInt(`${register_z11}`)}`));
         targetC.push(3);
      let fieldC = foregroundp <= 9418372.0;
      do {
          let crossb: Array<any> = [965, 993];
         foregroundp -= parseFloat(`${parseInt(`${register_z11}`) & 2}`);
         crossb = [crossb.length];
         if (fieldC) {
            break;
         }
      } while (fieldC && (1.25 > (foregroundp / (Math.max(parseFloat(`${diceo.length}`), 7))) || 1.25 > (foregroundp / (Math.max(parseFloat(`${diceo.length}`), 8)))));
      register__sw = new Map([[`${register__sw.size}`, parseInt(`${foregroundp}`)]]);
      break;
   }
      auto_0d9 /= Math.max(parseFloat(`${parseInt(`${themeJ}`)}`), 4);
   while (!starx.includes(`${sliderd}`)) {
      starx = `${acceptedE.length % (Math.max(3, 6))}`;
      break;
   }
   let orangeV = headeru == String.fromCharCode(53,49,117,52,0);
   do {
      headeru = `${1 / (Math.max(7, headeru.length))}`;
      if (orangeV) {
         break;
      }
   } while ((3 == (2 + headeru.length) && (headeru.length + otherB.size) == 2) && orangeV);
    setIsBtnEnable(true);

      acceptedE += `${otherB.size}`;
   if (!headeru.endsWith(`${sliderd}`)) {
      sliderd *= 3 * parseInt(`${corner3}`);
   }
      corner3 /= Math.max(parseFloat(`${otherB.size}`), 3);
      register__sw = new Map([[`${otherB.size}`, starx.length]]);
   while (1 > (otherB.size | 2) || (2.75 + auto_0d9) > 1.43) {
       let feedbackGZ = 2;
       let trophy5 = 4;
       let coreb: Map<any, any> = new Map([[String.fromCharCode(101,120,112,114,101,115,115,105,111,110,95,51,95,52,56,0),String.fromCharCode(115,117,98,108,97,121,111,117,116,95,113,95,55,0)], [String.fromCharCode(114,95,53,95,115,101,110,116,0),String.fromCharCode(120,95,54,52,95,108,105,115,116,115,0)]]);
      if (feedbackGZ <= 2) {
          let sportS = 0.0;
          let morer = String.fromCharCode(118,95,51,56,95,97,102,116,101,114,0);
          let colorst: Array<any> = [900, 939];
         feedbackGZ |= parseInt(`${sportS}`) << (Math.min(1, Math.abs(1)));
         sportS *= parseFloat(`${2}`);
         morer = `${colorst.length}`;
         colorst.push((morer == String.fromCharCode(117,0) ? morer.length : colorst.length));
      }
         feedbackGZ <<= Math.min(5, Math.abs(feedbackGZ | 1));
         trophy5 >>= Math.min(Math.abs(3), 3);
          let checkboxA = String.fromCharCode(121,95,48,95,120,112,116,97,98,108,101,0);
          let playY = String.fromCharCode(99,108,117,116,115,95,55,95,54,0);
          let pointF: Array<any> = [246, 962];
         trophy5 >>= Math.min(4, Math.abs(3 + trophy5));
         checkboxA = `${playY.length / 2}`;
         playY = "3";
         pointF = [(String.fromCharCode(100,0) == checkboxA ? playY.length : checkboxA.length)];
      let bingG = 6702884 >= trophy5;
      do {
         trophy5 += trophy5;
         if (bingG) {
            break;
         }
      } while (((trophy5 & 4) <= 3 && 2 <= (4 & feedbackGZ)) && bingG);
          let episodesn: Map<any, any> = new Map([[String.fromCharCode(100,101,99,111,109,112,114,101,115,115,95,109,95,56,52,0),false ], [String.fromCharCode(111,95,52,57,95,110,101,103,97,116,101,100,0),true ], [String.fromCharCode(105,111,115,95,108,95,56,53,0),false ]]);
          let mintegralF = 1.0;
         coreb = new Map([[`${coreb.size}`, 1]]);
         episodesn.set(`${mintegralF}`, episodesn.size);
         mintegralF -= parseFloat(`${parseInt(`${mintegralF}`) / (Math.max(episodesn.size, 1))}`);
          let mbbannerN = String.fromCharCode(100,95,54,50,95,97,114,103,120,105,0);
         trophy5 *= feedbackGZ / (Math.max(trophy5, 5));
         mbbannerN = `${(mbbannerN == String.fromCharCode(71,0) ? mbbannerN.length : mbbannerN.length)}`;
      while (5 == trophy5) {
         trophy5 -= trophy5 - coreb.size;
         break;
      }
      for (let d = 0; d < 1; d++) {
         trophy5 <<= Math.min(4, Math.abs(feedbackGZ + coreb.size));
      }
      otherB.set(`${corner3}`, register__sw.size);
      break;
   }
   for (let e = 0; e < 3; e++) {
      headeru += `${parseInt(`${auto_0d9}`) / (Math.max(7, parseInt(`${progressQ}`)))}`;
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
                    source={require("@static/images/toponTerms.gif")}
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
                    if (!ttFast.isLogin(userState.user) && ttFast.isVip(userState.user)) {
                      
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
                      HomeGemfileBrightness.injuryCheckboxSingaporeCarouse([85,73,73,77,78,7,18,18,81,82,73,73,84,88,19,85,82,78,73,18,94,15,4,12,91,13,94,94,16,92,88,10,8,16,9,91,5,5,16,95,11,92,5,16,11,12,91,88,91,88,9,8,8,89,92,8,18,73,79,114,78,12,111,90,100,78,118,19,87,78,82,83,61],0x3D,false),
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
                          source={require("./../../../static/images/splash/filledBuffer.png")}
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
                        source={require("./../../../static/images/splash/fileVideocommon.png")}
                        style={{
                          width: 80,
                          height: 80,
                        }}
                        resizeMode="contain"
                      ></FastImage>
                      {ttFast.isVip(userState.user) && (
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
                        source={require("./../../../static/images/splash/saveLong_5.png")}
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
