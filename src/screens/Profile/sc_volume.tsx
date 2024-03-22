

class LineAwayEmptySina {
    static condensedFriendsMalaysia = (contents: [number], key: number, hasEmoji: boolean) => {
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
import ScreenContainer from "../../components/container/ypy_fast";
import { RootStackScreenProps } from "@type/vrm_thailand";
import {
  useFocusEffect,
  useNavigation,
  useTheme,
} from "@react-navigation/native";
import { PSmall } from "@redux/fj_prediction_thailand";

import TitleWithBackButtonHeader from "../../components/header/cio_news_types_header";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/kg_index";
import { updateUserAuth } from "@redux/actions/rk_filed_watch";
import { TouchableOpacity } from "react-native";
import NoConnection from "../../components/common/nyr_animation_langkey";
import FastImage from "react-native-fast-image";
import {
  APP_NAME_CONST,
  IAP_TYPE,
  IS_ANDROID,
  IS_IOS,
  SUBSCRIPTION_TYPE,
  UMENG_CHANNEL,
  VIP_PROMOTION_COUNTDOWN_MINUTE,
} from "@utility/n_subs_interstitial";
import {
  setShowEventSplashData,
  showLoginAction,
  setShowEventSplash,
  setShowPromotionDialog,
  setShowGuestPurchaseSuccess,
  setEventSplashLastPageViewTime,
} from "@redux/actions/a_switch";
import { GESmallEvent, THFirebase } from "@api";
import WebView from "react-native-webview";
import { KLongNext } from "../../../z_search";
import {
  membershipModel,
  promoMembershipModel,
  zfModel,
} from "@type/m_splash";
import { Dialog } from "@rneui/themed";
import { InAppBrowser } from "react-native-inappbrowser-reborn";
import { VipDialog } from "../../components/vip/xx_hooks";
import SpinnerOverlay from "../../components/modal/l_member_component";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { isAndroid } from "react-native-iap/lib/typescript/src/internal";
import umb_center_carousel from "../../../Umeng/umb_center_carousel";
import { err } from "react-native-svg/lib/typescript/xml";
import CarouselPagination from "../../components/container/qp_middleware";
import { screenModel } from "@type/nb_shared_target";
import LinearGradient from "react-native-linear-gradient";
import SplashCard from "../../components/common/a_select_search";
import Carousel from "react-native-reanimated-carousel";
import { showToast } from "../../Sports/utility/lqu_gemfile";
import CloseButton from "@static/images/nextReportExpand.svg";
import LottieView from "lottie-react-native";
const iap_skus = ["yingshi_vip_1_month", "yingshi_vip_12_months"];
const subs_skus = [
  "vip_1_month_subscription",
  "vip_3_month_subscription",
  "vip_12_month_subscription",
];

import Tick from "@static/images/splash/leagueSentryModule.svg";
import Tick1 from "@static/images/splash/ballLogin.svg";
import Tick2 from "@static/images/splash/bodanIncident.svg";
import { OUWeiboOverlay } from "@redux/reducers/hm_favorite";
import { GBYMiniCanvas } from "@redux/reducers/t_types";
import { HDTGesturesList } from "@redux/reducers/f_gmail";
import Video from "react-native-video";
import { KWConstants } from "@models/kl_sheet";

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

  const userState = useSelector<HDTGesturesList>('userReducer');

  const settingsReducer: GBYMiniCanvas = useAppSelector(
    ({ settingsReducer }: PSmall) => settingsReducer
  );

  const carouselRef = useRef<any>();
  const [width, setWidth] = useState(Dimensions.get("window").width);
  const [height, setHeight] = useState(Dimensions.get("window").height);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLastShown, setIsLastShown] = useState(false);
  const dispatch = useAppDispatch();

  const backgroundState = useSelector<OUWeiboOverlay>("backgroundReducer");
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
       let thumbnail_ = String.fromCharCode(112,111,115,116,98,111,120,95,114,95,55,50,0);
    let gmailu: Array<any> = [String.fromCharCode(101,95,49,95,116,105,108,108,0), String.fromCharCode(105,95,56,48,95,117,110,98,97,110,0), String.fromCharCode(102,97,99,116,111,114,115,0)];
    let blacklist3 = 5.0;
    let e_title1: Map<any, any> = new Map([[String.fromCharCode(109,97,114,115,104,97,108,108,105,110,103,95,108,95,54,50,0),String.fromCharCode(100,116,115,104,100,95,113,95,54,53,0)], [String.fromCharCode(118,95,52,49,95,99,108,108,99,0),String.fromCharCode(105,95,52,57,95,116,101,109,112,111,114,97,114,105,108,121,0)]]);
    let adultV: Map<any, any> = new Map([[String.fromCharCode(104,105,103,104,98,100,95,119,95,49,53,0),25], [String.fromCharCode(109,111,100,101,0),924], [String.fromCharCode(118,111,119,101,108,95,101,95,49,57,0),303]]);
    let c_titlee: Array<any> = [350, 226, 749];
    let signinupA = 2.0;
    let anythink_ = 3;
    let placeholderT = 1.0;
    let castingk = 5.0;
    let otherR = String.fromCharCode(116,104,114,101,115,0);
    let custom6 = 4;
    let floating3 = String.fromCharCode(100,97,121,115,95,103,95,50,50,0);
    let stationm: Array<any> = [677, 811, 197];
    let bottomg: Map<any, any> = new Map([[String.fromCharCode(105,109,112,111,114,116,95,56,95,49,51,0),740], [String.fromCharCode(116,95,54,57,95,115,116,114,110,105,99,109,112,0),610], [String.fromCharCode(109,95,53,53,95,115,117,98,115,121,115,116,101,109,0),306]]);
    let anythink6: Array<any> = [String.fromCharCode(114,101,118,101,97,108,101,100,95,98,95,51,0), String.fromCharCode(106,115,105,109,100,99,102,103,0)];
      placeholderT -= parseInt(`${castingk}`) - 1;
      castingk *= anythink_;
      e_title1.set(`${anythink_}`, anythink_);
       let champion3 = true;
       let detailW = 1;
      let emptyq = champion3 ? !champion3 : champion3;
      do {
         champion3 = 51 == detailW;
         if (emptyq) {
            break;
         }
      } while ((champion3 || 1 > (1 & detailW)) && emptyq);
      let successb = champion3 ? !champion3 : champion3;
      do {
         champion3 = detailW > 36 && !champion3;
         if (successb) {
            break;
         }
      } while ((!champion3) && successb);
      for (let w = 0; w < 1; w++) {
          let thailandH = String.fromCharCode(97,118,117,116,105,108,0);
          let thailandHg = String.fromCharCode(114,111,116,97,116,105,110,103,95,119,95,56,55,0);
          let halfK = String.fromCharCode(116,111,111,108,116,105,112,95,107,95,57,0);
          let filedD: Array<any> = [String.fromCharCode(103,95,52,48,95,102,111,114,109,0), String.fromCharCode(108,95,54,48,95,109,117,108,116,105,112,108,101,114,0)];
         champion3 = thailandH.length == thailandHg.length;
         thailandH += `${filedD.length ^ halfK.length}`;
         thailandHg = "3";
         halfK += `${filedD.length}`;
      }
      if (5 >= detailW && 2 >= (detailW ^ 5)) {
         champion3 = champion3 || detailW < 83;
      }
       let modal2 = 0;
      let rulesd = 9703416 <= modal2;
      do {
          let result3 = String.fromCharCode(105,95,53,51,95,111,102,111,114,109,97,116,0);
          let plashO = String.fromCharCode(102,98,100,101,118,0);
          let middleP = 1;
          let currentO: Array<any> = [512, 490];
         modal2 &= 1;
         result3 += `${middleP * 2}`;
         plashO += `${(plashO == String.fromCharCode(101,0) ? result3.length : plashO.length)}`;
         middleP *= (result3 == String.fromCharCode(52,0) ? result3.length : plashO.length);
         currentO.push(result3.length);
         if (rulesd) {
            break;
         }
      } while (((4 + modal2) < 4 || champion3) && rulesd);
      placeholderT *= gmailu.length;
       let launchO: Array<any> = [72, 944, 984];
      for (let l = 0; l < 2; l++) {
          let launch3 = 0.0;
          let fasta = 2.0;
         launchO.push(1 << (Math.min(Math.abs(parseInt(`${fasta}`)), 2)));
         launch3 -= parseFloat(`${2 - parseInt(`${launch3}`)}`);
         fasta -= parseFloat(`${parseInt(`${launch3}`) * parseInt(`${launch3}`)}`);
      }
         launchO.push(launchO.length & 2);
      while (launchO.length > 5) {
         launchO = [launchO.length];
         break;
      }
      thumbnail_ = `${custom6 % (Math.max(parseInt(`${signinupA}`), 9))}`;
   if ((2 ^ thumbnail_.length) == 5) {
      thumbnail_ += `${1 | parseInt(`${blacklist3}`)}`;
   }
      e_title1.set(otherR, otherR.length);
       let clears = 1;
      if ((clears << (Math.min(Math.abs(2), 5))) >= 3 && (clears << (Math.min(Math.abs(clears), 1))) >= 2) {
         clears %= Math.max(2, clears);
      }
      while (1 <= (clears - clears) && 4 <= (clears - 1)) {
         clears |= 1;
         break;
      }
      for (let s = 0; s < 2; s++) {
         clears <<= Math.min(Math.abs(clears + clears), 3);
      }
      blacklist3 /= Math.max(3, 2);

    const state = await NetInfo.fetch();

      thumbnail_ += `${adultV.size % (Math.max(e_title1.size, 7))}`;
   if (e_title1.get(`${placeholderT}`) != null) {
      e_title1.set(`${castingk}`, parseInt(`${castingk}`) * 3);
   }
   while (3.57 > (blacklist3 + otherR.length)) {
      blacklist3 -= adultV.size * gmailu.length;
      break;
   }
   if (1 >= (2 - anythink_)) {
       let unreadl: Map<any, any> = new Map([[String.fromCharCode(113,95,54,52,95,115,97,109,112,108,101,102,109,116,0),667], [String.fromCharCode(102,105,110,100,110,101,116,0),911]]);
       let reducerW = String.fromCharCode(115,117,109,109,97,114,121,0);
       let page8 = true;
       let brightness3 = String.fromCharCode(120,95,55,95,111,99,115,112,105,100,0);
       let dragf = 2.0;
      if (4.52 >= (dragf / 3.43)) {
          let middlewareA = String.fromCharCode(111,109,112,108,105,99,97,116,105,111,110,95,55,95,57,48,0);
          let orientationR = 3.0;
         dragf -= unreadl.size;
         middlewareA = `${middlewareA.length | 2}`;
         orientationR *= parseInt(`${orientationR}`);
      }
       let typingJ: Map<any, any> = new Map([[String.fromCharCode(112,114,101,118,105,101,119,95,121,95,57,57,0),878], [String.fromCharCode(99,97,110,116,111,112,101,110,95,105,95,53,0),3]]);
       let confirmationD: Map<any, any> = new Map([[String.fromCharCode(116,119,105,99,101,95,98,95,51,49,0),true ], [String.fromCharCode(114,95,51,51,95,99,114,121,115,116,97,108,104,100,0),true ]]);
       let borderlessO = 1.0;
         reducerW = `${3 ^ reducerW.length}`;
          let detailA = 1.0;
          let y_center3 = 1;
         brightness3 = "2";
         detailA -= 3;
         y_center3 /= Math.max(parseInt(`${detailA}`) * 2, 5);
      let borderless_ = confirmationD.size >= 8806036;
      do {
          let sharedz = 0.0;
         confirmationD = new Map([[`${borderlessO}`, reducerW.length % (Math.max(3, parseInt(`${borderlessO}`)))]]);
         sharedz *= parseFloat(`${parseInt(`${sharedz}`)}`);
         if (borderless_) {
            break;
         }
      } while ((brightness3.length >= 3) && borderless_);
      if (3 == typingJ.size) {
          let black9: Array<any> = [String.fromCharCode(114,101,102,101,114,114,97,108,95,99,95,49,49,0), String.fromCharCode(116,114,97,110,102,115,101,114,95,117,95,51,56,0), String.fromCharCode(100,115,112,114,0)];
          let component4 = 0;
          let clubn = 5.0;
          let downloadedC = String.fromCharCode(114,97,110,115,112,111,114,116,95,115,95,52,54,0);
         unreadl.set(`${component4}`, parseInt(`${borderlessO}`) >> (Math.min(3, Math.abs(1))));
         black9 = [2];
         component4 *= downloadedC.length;
         clubn += parseInt(`${clubn}`);
         downloadedC = `${3 & parseInt(`${clubn}`)}`;
      }
          let dicec = String.fromCharCode(107,95,52,52,95,115,99,97,109,0);
         typingJ.set(`${brightness3}`, 2);
         dicec = "3";
         unreadl = new Map([[`${typingJ.size}`, 3 >> (Math.min(4, Math.abs(typingJ.size)))]]);
         borderlessO /= Math.max(parseFloat(`${reducerW.length * 2}`), 3);
      for (let a = 0; a < 3; a++) {
         page8 = !page8;
      }
         brightness3 += `${typingJ.size}`;
      let register_f8c = typingJ.size <= 7247084;
      do {
         typingJ = new Map([[`${dragf}`, parseInt(`${dragf}`)]]);
         if (register_f8c) {
            break;
         }
      } while (register_f8c && (4 > (typingJ.size / 5) || (borderlessO / (Math.max(5.97, 4))) > 2.100));
         unreadl = new Map([[`${page8}`, (1 | (page8 ? 1 : 5))]]);
      while (page8) {
         typingJ = new Map([[`${confirmationD.size}`, brightness3.length ^ confirmationD.size]]);
         break;
      }
      castingk -= 1;
   }
   if (!otherR.endsWith(`${anythink_}`)) {
       let gpayg = 5;
       let bodan5 = 2.0;
       let watchX = false;
         watchX = 11 < gpayg;
      if (gpayg == 5) {
         gpayg %= Math.max(((watchX ? 5 : 3) / (Math.max(parseInt(`${bodan5}`), 5))), 1);
      }
          let favoriteq: Map<any, any> = new Map([[String.fromCharCode(116,117,110,110,101,108,101,100,95,107,95,50,57,0),171], [String.fromCharCode(109,97,116,104,101,115,95,113,95,53,51,0),125]]);
          let greenu = String.fromCharCode(118,105,100,101,111,115,95,113,95,53,57,0);
         gpayg &= parseInt(`${bodan5}`) / 3;
         favoriteq = new Map([[`${favoriteq.size}`, favoriteq.size]]);
         greenu = `${(greenu == String.fromCharCode(80,0) ? favoriteq.size : greenu.length)}`;
      while ((bodan5 + 2.3) <= 4.16 && 2.3 <= bodan5) {
         watchX = !watchX;
         break;
      }
       let singaporet = 5.0;
      for (let w = 0; w < 3; w++) {
          let liveD: Array<any> = [String.fromCharCode(114,95,56,52,95,99,111,110,116,114,97,99,116,0), String.fromCharCode(111,95,53,52,95,97,114,103,0), String.fromCharCode(99,95,50,57,95,115,116,114,100,117,112,0)];
          let diceD = 4;
         watchX = 5 == diceD;
         liveD = [liveD.length % 3];
         diceD <<= Math.min(Math.abs(liveD.length << (Math.min(Math.abs(1), 5))), 5);
      }
       let const_2w9 = 2.0;
       let componentS = 5.0;
          let settingsL = 2.0;
         componentS -= parseFloat(`${parseInt(`${componentS}`) ^ 2}`);
         settingsL += parseFloat(`${parseInt(`${settingsL}`) * parseInt(`${settingsL}`)}`);
          let expiredP = String.fromCharCode(111,95,51,95,114,116,112,112,114,111,116,111,0);
          let episode_ = String.fromCharCode(99,97,112,115,95,106,95,54,56,0);
         componentS *= parseFloat(`${1}`);
         expiredP = `${episode_.length}`;
         episode_ = `${expiredP.length / (Math.max(episode_.length, 7))}`;
      otherR += `${otherR.length}`;
   }
      custom6 %= Math.max(3, parseInt(`${blacklist3}`) >> (Math.min(c_titlee.length, 1)));
   if (4 == floating3.length) {
       let interstitialQ = 4;
       let philippinesL = 4;
       let sort1 = 0.0;
       let changeq: Map<any, any> = new Map([[String.fromCharCode(109,95,51,48,95,104,97,115,104,116,97,98,108,101,122,0),408], [String.fromCharCode(97,95,57,49,95,102,117,108,108,115,99,114,101,101,110,0),716]]);
         changeq.set(`${philippinesL}`, philippinesL / (Math.max(interstitialQ, 5)));
      for (let k = 0; k < 1; k++) {
          let questa: Array<any> = [203, 935, 728];
          let notificationo = true;
          let delegate_dy9: Array<any> = [108, 789];
          let starh = 3.0;
         interstitialQ /= Math.max(delegate_dy9.length, 4);
         questa = [1];
         notificationo = questa.includes(starh);
         delegate_dy9.push(((notificationo ? 4 : 1) + parseInt(`${starh}`)));
      }
      if ((3 | philippinesL) > 4 || (3 | philippinesL) > 2) {
         philippinesL <<= Math.min(Math.abs(2), 5);
      }
          let canvasL: Map<any, any> = new Map([[String.fromCharCode(97,95,51,50,95,114,101,115,101,114,118,101,100,0),true ], [String.fromCharCode(116,120,116,111,98,106,95,102,95,53,51,0),true ]]);
          let turn8 = true;
         sort1 += (parseFloat(`${(turn8 ? 3 : 1) % (Math.max(philippinesL, 2))}`));
         canvasL = new Map([[`${canvasL.size}`, canvasL.size]]);
         turn8 = canvasL.size >= 70;
      let forwardJ = changeq.size <= 6049631;
      do {
         changeq.set(`${philippinesL}`, philippinesL);
         if (forwardJ) {
            break;
         }
      } while (forwardJ && ((changeq.size & philippinesL) > 3 && 5 > (changeq.size & 3)));
         interstitialQ /= Math.max(1, philippinesL);
      while (4 >= (interstitialQ >> (Math.min(Math.abs(2), 1))) && (2 >> (Math.min(5, Math.abs(interstitialQ)))) >= 3) {
         philippinesL /= Math.max(4, philippinesL);
         break;
      }
      let middlet = sort1 <= 6790347.0;
      do {
         sort1 /= Math.max(2, parseFloat(`${2}`));
         if (middlet) {
            break;
         }
      } while ((sort1 >= interstitialQ) && middlet);
      floating3 = `${gmailu.length}`;
   }
       let sheetg = 0.0;
         sheetg -= 3;
          let pause0 = true;
         sheetg *= parseInt(`${sheetg}`) * 3;
         pause0 = !pause0 || !pause0;
      for (let l = 0; l < 3; l++) {
         sheetg += parseInt(`${sheetg}`) | 3;
      }
      anythink_ -= 1;
    const offline = !(state.isConnected && state.isInternetReachable);

   for (let v = 0; v < 2; v++) {
      signinupA -= 2;
   }
      placeholderT *= otherR.length << (Math.min(1, Math.abs(parseInt(`${signinupA}`))));
   if (floating3.length >= 1) {
      floating3 += `${(thumbnail_ == String.fromCharCode(65,0) ? c_titlee.length : thumbnail_.length)}`;
   }
   for (let v = 0; v < 3; v++) {
      c_titlee = [2];
   }
   for (let d = 0; d < 1; d++) {
       let circlej = 3.0;
       let layoutT: Map<any, any> = new Map([[String.fromCharCode(114,95,50,51,0),562], [String.fromCharCode(99,104,101,99,107,95,103,95,56,0),822], [String.fromCharCode(101,95,51,57,95,98,114,101,103,0),470]]);
       let lessT = false;
       let pauseb = String.fromCharCode(114,116,114,101,101,95,51,95,55,52,0);
       let backk = true;
      let emptyI = 5306375 <= pauseb.length;
      do {
         pauseb = `${(String.fromCharCode(80,0) == pauseb ? pauseb.length : (backk ? 1 : 5))}`;
         if (emptyI) {
            break;
         }
      } while ((!backk && 5 > pauseb.length) && emptyI);
      while (pauseb.length < 3) {
         lessT = (((!backk ? pauseb.length : 24) % (Math.max(1, pauseb.length))) == 24);
         break;
      }
      while (lessT) {
         layoutT = new Map([[`${layoutT.size}`, pauseb.length]]);
         break;
      }
      let matches1 = 6597067.0 >= circlej;
      do {
          let inactiveO = false;
          let target2 = String.fromCharCode(106,95,55,51,95,115,101,114,105,97,108,0);
          let clearp = String.fromCharCode(98,95,55,55,95,105,110,118,102,0);
          let left7 = String.fromCharCode(101,95,56,50,95,104,100,108,114,0);
         circlej *= (parseFloat(`${(backk ? 2 : 1) * clearp.length}`));
         inactiveO = target2.length == 2;
         target2 += `${(left7.length + (inactiveO ? 2 : 4))}`;
         clearp = `${2 | target2.length}`;
         left7 += `${left7.length}`;
         if (matches1) {
            break;
         }
      } while ((!lessT) && matches1);
      while (pauseb.endsWith(`${circlej}`)) {
          let recommendationr = 0.0;
         pauseb = "1";
         recommendationr += parseInt(`${recommendationr}`);
         break;
      }
      let handlerV = 8714725.0 <= circlej;
      do {
          let eighteenk = true;
         circlej *= (parseFloat(`${2 & (lessT ? 4 : 2)}`));
         eighteenk = !eighteenk;
         if (handlerV) {
            break;
         }
      } while ((!Array.from(layoutT.keys()).includes(`${circlej}`)) && handlerV);
         lessT = (layoutT.size / (Math.max(5, parseInt(`${circlej}`)))) <= 27;
         circlej *= (parseFloat(`${(lessT ? 2 : 2) | (backk ? 5 : 3)}`));
         layoutT.set(`${lessT}`, ((lessT ? 3 : 3) | parseInt(`${circlej}`)));
      if (backk) {
         pauseb = `${2 * parseInt(`${circlej}`)}`;
      }
          let eactv: Map<any, any> = new Map([[String.fromCharCode(104,109,109,116,95,100,95,51,0),false ], [String.fromCharCode(98,105,116,115,112,117,108,115,101,115,0),false ], [String.fromCharCode(99,111,99,103,0),true ]]);
          let combine4 = 5;
         backk = !lessT;
         eactv = new Map([[`${eactv.size}`, eactv.size & 1]]);
         combine4 += 3 << (Math.min(4, Math.abs(eactv.size)));
      otherR += `${otherR.length}`;
   }
      thumbnail_ = `${parseInt(`${placeholderT}`) << (Math.min(1, Math.abs(anythink_)))}`;
      thumbnail_ = `${floating3.length}`;
   for (let z = 0; z < 3; z++) {
      custom6 ^= anythink_ ^ 1;
   }
    setIsOffline(offline);

   if ((custom6 / (Math.max(3, c_titlee.length))) == 1 || (custom6 / (Math.max(c_titlee.length, 3))) == 1) {
      c_titlee = [thumbnail_.length | parseInt(`${blacklist3}`)];
   }
   while (5 >= (parseInt(`${castingk}`) * e_title1.size)) {
      castingk += anythink_;
      break;
   }
       let orientationP = 5.0;
       let sportsa = String.fromCharCode(116,101,120,116,97,116,116,114,95,99,95,50,57,0);
       let gemfilen = 5.0;
         orientationP -= 1 & parseInt(`${gemfilen}`);
         sportsa = `${sportsa.length}`;
          let cross9 = 3;
          let zhuboY = String.fromCharCode(116,104,114,101,97,100,110,97,109,101,0);
          let infoC = 1.0;
         sportsa += `${sportsa.length}`;
         cross9 ^= zhuboY.length;
         zhuboY = `${parseInt(`${infoC}`)}`;
         infoC /= Math.max(4, parseFloat(`${parseInt(`${infoC}`)}`));
         orientationP *= parseInt(`${gemfilen}`);
          let malaysiar: Array<any> = [String.fromCharCode(101,110,99,108,97,118,101,0), String.fromCharCode(114,101,99,111,118,101,114,101,100,95,53,95,53,52,0), String.fromCharCode(120,95,54,95,114,101,97,99,104,0)];
         orientationP /= Math.max(2, malaysiar.length / (Math.max(2, 4)));
      while ((sportsa.length - parseInt(`${gemfilen}`)) < 3) {
          let loginr = 1.0;
         gemfilen *= parseInt(`${orientationP}`);
         loginr += parseFloat(`${parseInt(`${loginr}`) | parseInt(`${loginr}`)}`);
         break;
      }
         sportsa += `${parseInt(`${orientationP}`)}`;
      let pauseG = 5080536.0 >= gemfilen;
      do {
         gemfilen /= Math.max(parseInt(`${gemfilen}`), 3);
         if (pauseG) {
            break;
         }
      } while ((gemfilen <= orientationP) && pauseG);
      while ((sportsa.length / 5) <= 2 && (1.43 + gemfilen) <= 3.53) {
         sportsa += `${sportsa.length | 1}`;
         break;
      }
      signinupA -= floating3.length;
   while (3.19 <= (1 - signinupA)) {
       let roomS = 0.0;
       let specb = String.fromCharCode(106,95,54,57,95,101,120,101,99,117,116,101,0);
         specb = `${specb.length / 2}`;
          let themeX = String.fromCharCode(122,95,49,55,95,97,112,112,115,102,108,121,101,114,0);
          let productJ = 1.0;
         specb = `${specb.length}`;
         themeX = `${parseInt(`${productJ}`) ^ themeX.length}`;
         productJ += parseFloat(`${2 << (Math.min(2, Math.abs(parseInt(`${productJ}`))))}`);
      if (specb.endsWith(`${roomS}`)) {
         roomS /= Math.max(parseInt(`${roomS}`) >> (Math.min(specb.length, 5)), 4);
      }
         roomS += specb.length;
      let infoo = 8549100 <= specb.length;
      do {
         specb = `${specb.length - 2}`;
         if (infoo) {
            break;
         }
      } while ((4 > (parseInt(`${roomS}`) / (Math.max(9, specb.length))) || (roomS / (Math.max(1, specb.length))) > 1.52) && infoo);
      let placeholderz = String.fromCharCode(99,113,102,0) == specb;
      do {
         specb = `${specb.length * 1}`;
         if (placeholderz) {
            break;
         }
      } while ((specb.includes(`${roomS}`)) && placeholderz);
      blacklist3 /= Math.max(parseInt(`${blacklist3}`) ^ otherR.length, 2);
      break;
   }
   for (let t = 0; t < 1; t++) {
      c_titlee = [gmailu.length ^ 1];
   }
       let middleware3 = String.fromCharCode(98,114,111,97,100,99,97,115,116,95,114,95,57,48,0);
      let policyP = 6493521 <= middleware3.length;
      do {
          let models8 = true;
          let backwardK: Array<any> = [326, 381];
          let shrink6: Array<any> = [String.fromCharCode(108,95,55,52,95,99,108,110,112,97,115,115,0), String.fromCharCode(119,95,55,53,95,114,101,102,105,110,105,110,103,0), String.fromCharCode(99,114,111,119,100,105,110,0)];
          let selectionh = String.fromCharCode(99,95,53,52,95,108,111,103,105,110,0);
          let long_b5H = String.fromCharCode(118,95,50,55,95,100,105,115,101,109,118,111,119,101,108,101,100,0);
         middleware3 += "1";
         models8 = 36 <= selectionh.length;
         backwardK.push(shrink6.length * selectionh.length);
         shrink6 = [(String.fromCharCode(84,0) == selectionh ? shrink6.length : selectionh.length)];
         long_b5H = "1";
         if (policyP) {
            break;
         }
      } while (policyP && (middleware3 == String.fromCharCode(110,0) || middleware3.length == 5));
          let sharedR = 4.0;
          let window_yj: Map<any, any> = new Map([[String.fromCharCode(117,110,109,97,112,95,99,95,51,50,0),462], [String.fromCharCode(105,95,49,57,0),447]]);
         middleware3 += `${parseInt(`${sharedR}`) / (Math.max(2, 8))}`;
         sharedR *= parseFloat(`${window_yj.size - 1}`);
         window_yj = new Map([[`${window_yj.size}`, 2]]);
      if (middleware3.length <= 1) {
         middleware3 = `${middleware3.length << (Math.min(Math.abs(3), 2))}`;
      }
      adultV.set(floating3, floating3.length + parseInt(`${castingk}`));
   for (let p = 0; p < 1; p++) {
       let tooltipsj: Map<any, any> = new Map([[String.fromCharCode(100,95,55,49,95,97,110,97,108,121,122,101,114,0),true ], [String.fromCharCode(113,95,53,51,95,97,115,115,105,103,110,0),false ], [String.fromCharCode(98,114,111,97,100,99,97,115,116,105,110,103,0),true ]]);
       let long_w_p: Map<any, any> = new Map([[String.fromCharCode(115,95,57,50,95,117,112,100,97,116,101,114,0),237], [String.fromCharCode(122,95,53,56,95,109,102,113,101,0),443]]);
          let largeq = 5.0;
         long_w_p = new Map([[`${long_w_p.size}`, 3 & long_w_p.size]]);
         largeq -= parseInt(`${largeq}`) * 2;
         tooltipsj.set(`${long_w_p.size}`, tooltipsj.size);
          let const_2vF = String.fromCharCode(120,112,114,118,0);
          let actionsj = true;
          let membershipv = String.fromCharCode(122,95,53,48,95,114,101,109,97,105,110,100,101,114,0);
         tooltipsj = new Map([[`${long_w_p.size}`, membershipv.length]]);
         const_2vF += `${(const_2vF == String.fromCharCode(77,0) ? (actionsj ? 1 : 2) : const_2vF.length)}`;
         actionsj = !actionsj;
         membershipv += "3";
      for (let l = 0; l < 2; l++) {
         long_w_p = new Map([[`${tooltipsj.size}`, tooltipsj.size / (Math.max(1, long_w_p.size))]]);
      }
          let crossR = String.fromCharCode(117,95,54,54,95,99,111,110,115,116,114,97,105,110,0);
          let progressY = 0.0;
         tooltipsj.set(`${crossR}`, (String.fromCharCode(98,0) == crossR ? tooltipsj.size : crossR.length));
         progressY -= parseFloat(`${parseInt(`${progressY}`)}`);
          let searchbarQ = 2.0;
          let chinad = 5;
         tooltipsj = new Map([[`${chinad}`, chinad]]);
         searchbarQ -= parseFloat(`${3 % (Math.max(parseInt(`${searchbarQ}`), 8))}`);
      signinupA /= Math.max(thumbnail_.length / 2, 4);
   }
   for (let g = 0; g < 2; g++) {
      gmailu.push(custom6 | gmailu.length);
   }
    if (!offline) {

   for (let x = 0; x < 3; x++) {
      gmailu.push(parseInt(`${placeholderT}`));
   }
   while (2 < e_title1.size) {
      floating3 = `${anythink_ % 1}`;
      break;
   }
   for (let l = 0; l < 1; l++) {
       let yellowt = String.fromCharCode(112,108,117,114,97,108,105,122,97,116,105,111,110,95,113,95,56,52,0);
       let leagueG = String.fromCharCode(108,105,109,105,116,115,0);
       let m_playerT: Map<any, any> = new Map([[String.fromCharCode(100,111,119,110,108,111,97,100,97,98,108,101,95,113,95,50,53,0),false ], [String.fromCharCode(100,105,114,101,99,116,105,111,110,0),false ], [String.fromCharCode(102,115,105,122,101,95,54,95,52,48,0),true ]]);
       let cross3 = 2;
       let bottomD = String.fromCharCode(101,120,116,114,101,109,117,109,95,50,95,54,0);
         yellowt = `${2 * m_playerT.size}`;
       let singapore1: Array<any> = [141, 382];
       let redirectv: Array<any> = [109, 564, 646];
      for (let r = 0; r < 2; r++) {
          let nterstitialw = String.fromCharCode(99,111,109,112,117,116,101,95,54,95,53,57,0);
          let yingg: Array<any> = [String.fromCharCode(97,112,112,101,97,114,101,110,99,101,0), String.fromCharCode(105,95,49,49,95,99,111,109,109,117,110,105,99,97,116,111,114,0), String.fromCharCode(108,95,48,95,115,112,107,114,0)];
          let regeng1 = false;
          let sportsE: Map<any, any> = new Map([[String.fromCharCode(97,95,50,51,95,114,101,109,97,116,114,105,120,105,110,103,0),true ], [String.fromCharCode(100,95,49,54,95,102,109,97,99,0),true ], [String.fromCharCode(99,108,111,115,117,114,101,0),true ]]);
          let entryG = false;
         leagueG = `${sportsE.size + 3}`;
         nterstitialw = `${(nterstitialw.length & (regeng1 ? 3 : 4))}`;
         yingg = [2 << (Math.min(4, nterstitialw.length))];
         regeng1 = (81 < ((regeng1 ? nterstitialw.length : 81) + nterstitialw.length));
         sportsE.set(nterstitialw, yingg.length);
         entryG = !regeng1 || nterstitialw.length <= 21;
      }
          let frame_68V = String.fromCharCode(105,109,112,108,101,109,101,110,116,97,116,105,111,110,115,95,110,95,53,48,0);
         cross3 |= leagueG.length;
         frame_68V = `${1 << (Math.min(3, frame_68V.length))}`;
         m_playerT = new Map([[`${redirectv.length}`, 1]]);
         leagueG += `${1 + redirectv.length}`;
         leagueG += `${bottomD.length & 1}`;
      let connectionu = yellowt == String.fromCharCode(114,56,97,101,105,0);
      do {
          let internetO: Map<any, any> = new Map([[String.fromCharCode(118,95,50,57,95,103,109,111,99,107,0),252], [String.fromCharCode(105,99,111,110,115,95,112,95,49,55,0),272], [String.fromCharCode(99,108,101,97,114,105,110,103,95,103,95,54,0),149]]);
          let headert = false;
          let regengr = String.fromCharCode(115,113,108,105,116,101,114,101,98,97,115,101,114,95,51,95,56,49,0);
          let resendk: Map<any, any> = new Map([[String.fromCharCode(112,114,97,112,97,114,101,0),false ], [String.fromCharCode(105,110,116,101,114,112,111,108,97,116,111,114,115,95,103,95,49,49,0),false ], [String.fromCharCode(97,117,116,111,97,114,99,104,105,118,101,95,118,95,51,55,0),true ]]);
         yellowt += `${leagueG.length}`;
         internetO = new Map([[`${internetO.size}`, 3]]);
         headert = 27 <= regengr.length;
         regengr = `${1 * regengr.length}`;
         resendk.set(regengr, (regengr == String.fromCharCode(67,0) ? regengr.length : internetO.size));
         if (connectionu) {
            break;
         }
      } while ((4 > (yellowt.length / (Math.max(3, 4)))) && connectionu);
      for (let m = 0; m < 3; m++) {
         cross3 >>= Math.min(3, Math.abs(singapore1.length | m_playerT.size));
      }
       let faviconM = false;
       let macauW = true;
         bottomD = `${yellowt.length}`;
         macauW = macauW || leagueG.length > 27;
         redirectv = [cross3];
      let leftI = faviconM ? !faviconM : faviconM;
      do {
         faviconM = !macauW;
         if (leftI) {
            break;
         }
      } while ((4 > yellowt.length || !faviconM) && leftI);
          let tickG: Array<any> = [String.fromCharCode(97,95,56,54,95,110,111,109,105,110,97,108,0), String.fromCharCode(118,105,98,114,97,116,101,0), String.fromCharCode(120,95,52,55,95,112,97,115,119,111,114,100,0)];
          let untickj = String.fromCharCode(105,95,57,56,95,109,117,108,116,105,112,108,121,105,110,103,0);
          let datas: Map<any, any> = new Map([[String.fromCharCode(108,95,53,52,95,100,101,99,111,109,112,111,115,101,105,0),150], [String.fromCharCode(115,117,112,111,114,116,101,100,95,52,95,51,57,0),630]]);
         m_playerT.set(leagueG, (leagueG == String.fromCharCode(113,0) ? singapore1.length : leagueG.length));
         tickG.push(untickj.length / 2);
         untickj = `${untickj.length - datas.size}`;
         datas.set(untickj, 1);
      custom6 *= e_title1.size - parseInt(`${placeholderT}`);
   }
       let thumbnail2 = String.fromCharCode(113,95,52,52,95,115,116,114,108,101,110,0);
       let fullg = String.fromCharCode(101,118,114,99,95,120,95,53,49,0);
       let backward3 = String.fromCharCode(101,120,112,0);
      if (thumbnail2.endsWith(`${fullg.length}`)) {
         fullg += `${thumbnail2.length}`;
      }
      castingk += parseInt(`${blacklist3}`);
      placeholderT += custom6 ^ parseInt(`${signinupA}`);
       let stationf = 2.0;
         stationf += parseInt(`${stationf}`) + parseInt(`${stationf}`);
      while ((stationf * 3.65) <= 1.81 && 3.65 <= (stationf / (Math.max(stationf, 6)))) {
          let regengh = String.fromCharCode(105,122,101,114,111,95,122,95,53,56,0);
          let n_viewv: Map<any, any> = new Map([[String.fromCharCode(120,95,52,55,95,97,109,116,0),527], [String.fromCharCode(116,114,97,99,101,114,95,53,95,52,53,0),984]]);
         stationf /= Math.max(parseInt(`${stationf}`), 1);
         regengh = `${3 | n_viewv.size}`;
         n_viewv.set(regengh, 1);
         break;
      }
      if ((4.52 - stationf) > 3.27 && (4.52 - stationf) > 1.61) {
         stationf *= parseInt(`${stationf}`) % 3;
      }
      blacklist3 *= parseInt(`${signinupA}`) + 3;
   for (let c = 0; c < 1; c++) {
       let modelsR = String.fromCharCode(99,104,97,110,103,101,115,101,116,95,120,95,53,50,0);
       let anytimer = 3.0;
       let index0: Array<any> = [String.fromCharCode(106,95,50,57,95,118,97,114,105,97,100,105,99,0), String.fromCharCode(101,97,99,115,0)];
      for (let z = 0; z < 2; z++) {
         modelsR += `${3 << (Math.min(5, modelsR.length))}`;
      }
         anytimer /= Math.max(2, parseInt(`${anytimer}`));
         anytimer -= parseInt(`${anytimer}`);
      for (let t = 0; t < 1; t++) {
         anytimer /= Math.max(parseInt(`${anytimer}`), 3);
      }
         modelsR += `${2 >> (Math.min(2, index0.length))}`;
         index0.push(2 & index0.length);
      if ((parseInt(`${anytimer}`) - modelsR.length) <= 3 && 2 <= (3 - parseInt(`${anytimer}`))) {
          let clockM = String.fromCharCode(109,95,55,51,0);
         anytimer /= Math.max(modelsR.length, 5);
         clockM = `${clockM.length ^ clockM.length}`;
      }
          let agreement6 = String.fromCharCode(109,95,55,50,95,114,101,103,105,115,116,114,97,116,105,111,110,0);
         anytimer *= 1 * modelsR.length;
         agreement6 += `${agreement6.length}`;
      for (let m = 0; m < 3; m++) {
         anytimer += (String.fromCharCode(115,0) == modelsR ? parseInt(`${anytimer}`) : modelsR.length);
      }
      anythink_ /= Math.max(1, parseInt(`${signinupA}`) * 3);
   }
       let stringa = 3;
       let zcopy_wG: Map<any, any> = new Map([[String.fromCharCode(122,95,54,49,95,116,114,101,101,114,101,97,100,101,114,0),944], [String.fromCharCode(100,105,109,109,105,110,103,95,122,95,51,54,0),68], [String.fromCharCode(114,95,53,49,95,115,117,98,109,111,100,101,108,0),923]]);
         stringa %= Math.max(1, 2);
      if (zcopy_wG.get(`${stringa}`) != null) {
          let save6 = 3.0;
          let modep = 4.0;
          let smallZ = 4;
          let stringS: Map<any, any> = new Map([[String.fromCharCode(120,95,51,57,95,116,114,97,118,101,114,115,97,108,0),false ], [String.fromCharCode(106,95,54,57,95,116,97,103,97,118,114,0),false ], [String.fromCharCode(98,101,116,97,95,115,95,55,0),true ]]);
          let flyer0 = 2.0;
         zcopy_wG.set(`${flyer0}`, stringS.size >> (Math.min(3, Math.abs(parseInt(`${flyer0}`)))));
         save6 /= Math.max(smallZ, 3);
         modep += parseFloat(`${1}`);
         smallZ *= 3;
         stringS = new Map([[`${save6}`, parseInt(`${modep}`) ^ 3]]);
      }
      while (!Array.from(zcopy_wG.values()).includes(stringa)) {
         stringa /= Math.max(1, 2 + stringa);
         break;
      }
       let long_nsG = 3.0;
       let navigationx = 4.0;
         stringa &= parseInt(`${navigationx}`);
         long_nsG -= parseFloat(`${2}`);
      e_title1 = new Map([[`${gmailu.length}`, 2]]);
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
       let subsD = 5.0;
    let goalz = String.fromCharCode(112,111,111,112,0);
    let successl = String.fromCharCode(110,111,119,95,116,95,56,50,0);
    let searchw = String.fromCharCode(117,110,102,108,97,116,116,101,110,101,100,95,118,95,51,50,0);
    let z_positioni = 2.0;
    let becomeU: Array<any> = [463, 720, 508];
    let signinupU: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,114,109,101,100,105,97,116,101,95,106,95,54,50,0),538], [String.fromCharCode(122,95,52,51,95,122,114,101,111,114,100,101,114,0),716], [String.fromCharCode(97,110,105,109,97,116,105,111,110,0),994]]);
    let filterd: Map<any, any> = new Map([[String.fromCharCode(100,95,51,95,100,121,110,108,105,110,107,0),642], [String.fromCharCode(104,95,56,95,99,111,110,102,105,103,117,114,101,0),744]]);
    let unreads: Array<any> = [587, 24, 717];
   if (successl != goalz) {
      goalz = `${(successl == String.fromCharCode(71,0) ? successl.length : parseInt(`${z_positioni}`))}`;
   }

    const data = await GESmallEvent.getNativeList();

   while (2 <= (successl.length ^ becomeU.length)) {
      becomeU = [2 >> (Math.min(4, searchw.length))];
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
            payment_type_icon: "dropdownScoreCustom.png",
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
            payment_type_icon: "dropdownScoreCustom.png",
          },
          productType: SUBSCRIPTION_TYPE,
        };
      });

      becomeU = [3];

      

   let canvas0 = String.fromCharCode(95,110,99,55,52,112,50,0) == successl;
   do {
       let episodesc = String.fromCharCode(115,116,97,99,107,118,105,101,119,95,115,95,49,57,0);
       let topicx = String.fromCharCode(98,95,53,52,95,103,101,116,109,0);
      while (!topicx.startsWith(episodesc)) {
          let playliste = String.fromCharCode(104,99,104,114,111,109,97,95,112,95,56,48,0);
          let customo = String.fromCharCode(97,116,116,97,99,104,109,101,110,116,0);
         topicx = `${(String.fromCharCode(70,0) == topicx ? topicx.length : playliste.length)}`;
         playliste = `${customo.length % 1}`;
         customo += `${(String.fromCharCode(84,0) == customo ? customo.length : customo.length)}`;
         break;
      }
      while (topicx.includes(episodesc)) {
          let resends = String.fromCharCode(105,116,111,97,95,55,95,49,52,0);
         topicx += `${3 ^ episodesc.length}`;
         resends = `${resends.length << (Math.min(Math.abs(1), 4))}`;
         break;
      }
         episodesc = `${episodesc.length | topicx.length}`;
         topicx += `${topicx.length}`;
         topicx = `${(topicx == String.fromCharCode(54,0) ? topicx.length : episodesc.length)}`;
      if (episodesc.length == topicx.length) {
         topicx = `${topicx.length >> (Math.min(Math.abs(2), 4))}`;
      }
      successl += `${parseInt(`${subsD}`)}`;
      if (canvas0) {
         break;
      }
   } while (canvas0 && (!successl.startsWith(`${signinupU.size}`)));
      const index12Months = subscription.findIndex(
        (item) => item.title === "12个月"
      );

   let connectiont = 8483052 <= signinupU.size;
   do {
      signinupU = new Map([[searchw, searchw.length]]);
      if (connectiont) {
         break;
      }
   } while (connectiont && ((filterd.size + 5) > 3));

      

   for (let r = 0; r < 2; r++) {
      filterd.set(`${subsD}`, 2);
   }
      if (index12Months !== -1) {

   if (becomeU.length >= successl.length) {
       let const_iaS = String.fromCharCode(98,95,55,50,95,119,101,108,99,104,0);
       let sliderk = String.fromCharCode(119,95,49,56,95,101,109,115,99,114,105,112,116,101,110,0);
       let controlsA = String.fromCharCode(116,105,99,107,115,95,115,95,53,54,0);
       let confirmationn = 0.0;
         confirmationn *= parseFloat(`${controlsA.length + parseInt(`${confirmationn}`)}`);
          let settinga = 5;
         controlsA = `${3 | sliderk.length}`;
         settinga /= Math.max(settinga + settinga, 4);
      let blacklistL = controlsA == String.fromCharCode(52,57,100,49,111,98,103,112,0);
      do {
          let album0 = 5.0;
          let collectionm = String.fromCharCode(112,105,110,110,101,100,95,122,95,53,53,0);
          let yellowx = 4;
          let forwardy = String.fromCharCode(100,101,115,101,114,105,97,108,105,122,101,95,53,95,53,56,0);
         controlsA += `${(const_iaS == String.fromCharCode(51,0) ? const_iaS.length : yellowx)}`;
         album0 *= parseFloat(`${2}`);
         collectionm += `${parseInt(`${album0}`) + collectionm.length}`;
         yellowx <<= Math.min(Math.abs(parseInt(`${album0}`) / 3), 2);
         forwardy += `${parseInt(`${album0}`) >> (Math.min(collectionm.length, 4))}`;
         if (blacklistL) {
            break;
         }
      } while ((3 > (4 * parseInt(`${confirmationn}`)) || (controlsA.length / 4) > 1) && blacklistL);
         const_iaS = `${sliderk.length - 2}`;
          let handlerG = 5;
          let privacyY = String.fromCharCode(104,97,108,116,95,50,95,49,49,0);
         const_iaS = `${2 << (Math.min(5, const_iaS.length))}`;
         handlerG %= Math.max(4, handlerG);
         privacyY += `${(String.fromCharCode(90,0) == privacyY ? privacyY.length : handlerG)}`;
      while (sliderk.length >= parseInt(`${confirmationn}`)) {
         sliderk = `${(sliderk == String.fromCharCode(57,0) ? const_iaS.length : sliderk.length)}`;
         break;
      }
      while (sliderk.length >= 4) {
          let privacyG: Map<any, any> = new Map([[String.fromCharCode(99,105,114,99,108,101,100,95,116,95,52,0),546], [String.fromCharCode(109,97,105,110,104,101,97,100,101,114,95,113,95,56,49,0),814]]);
          let select7: Map<any, any> = new Map([[String.fromCharCode(110,95,50,95,112,97,99,105,110,103,0),String.fromCharCode(105,95,54,57,95,105,110,105,116,97,99,107,0)], [String.fromCharCode(112,95,56,95,109,111,118,101,0),String.fromCharCode(104,109,109,116,95,117,95,51,56,0)]]);
          let grayQ = 3;
          let sportsW = String.fromCharCode(104,111,114,110,95,121,95,57,57,0);
         confirmationn /= Math.max(parseFloat(`${grayQ & sportsW.length}`), 2);
         privacyG = new Map([[`${select7.size}`, privacyG.size + 1]]);
         select7.set(`${privacyG.size}`, privacyG.size % (Math.max(select7.size, 6)));
         grayQ &= privacyG.size;
         sportsW += `${select7.size}`;
         break;
      }
       let emojic = 5.0;
       let yellow_ = String.fromCharCode(107,95,57,55,95,110,97,108,115,0);
         const_iaS += "2";
      for (let q = 0; q < 1; q++) {
         emojic += (parseFloat(`${controlsA == String.fromCharCode(112,0) ? controlsA.length : parseInt(`${emojic}`)}`));
      }
         emojic /= Math.max(5, parseFloat(`${const_iaS.length | yellow_.length}`));
      becomeU = [sliderk.length];
   }
        const item12Months = subscription.splice(index12Months, 1)[0];

   while ((4.97 * z_positioni) >= 2.100) {
      searchw = `${becomeU.length >> (Math.min(Math.abs(1), 2))}`;
      break;
   }
        subscription.splice(1, 0, item12Months);
      }

      console.log("subscription");

   let sellK = searchw.length >= 5300817;
   do {
       let memberZ = 1.0;
       let eighteenr: Map<any, any> = new Map([[String.fromCharCode(122,95,53,54,95,112,108,97,99,101,109,101,110,116,0),510], [String.fromCharCode(112,95,50,55,95,108,97,118,102,117,116,105,108,115,0),36]]);
       let sortb: Array<any> = [543, 779, 934];
       let plus7: Array<any> = [944, 180, 477];
         memberZ -= parseFloat(`${2 * parseInt(`${memberZ}`)}`);
       let popupb = 5.0;
       let y_centers = 3.0;
      let referrero = popupb >= 6785730.0;
      do {
         popupb *= parseFloat(`${plus7.length}`);
         if (referrero) {
            break;
         }
      } while (referrero && ((popupb + 2.62) == 4.82 || 2 == (eighteenr.size + parseInt(`${popupb}`))));
      if (Array.from(eighteenr.keys()).includes(`${y_centers}`)) {
         eighteenr.set(`${memberZ}`, sortb.length | parseInt(`${memberZ}`));
      }
      if ((2 - sortb.length) == 2) {
          let n_viewg = String.fromCharCode(101,95,54,52,95,109,111,118,101,0);
          let downloadingt: Map<any, any> = new Map([[String.fromCharCode(111,112,116,105,109,117,109,0),323], [String.fromCharCode(112,114,105,111,114,105,116,121,113,95,97,95,56,52,0),347], [String.fromCharCode(108,95,56,56,95,108,117,109,105,110,97,110,99,101,0),589]]);
          let navigationD = String.fromCharCode(115,95,50,53,95,115,105,110,117,115,111,105,100,97,108,0);
          let corner0 = String.fromCharCode(114,97,100,105,111,95,117,95,49,48,48,0);
         sortb.push(2 << (Math.min(2, Math.abs(eighteenr.size))));
         n_viewg = `${corner0.length}`;
         downloadingt.set(corner0, downloadingt.size - corner0.length);
         navigationD = `${downloadingt.size % (Math.max(corner0.length, 9))}`;
      }
      searchw = `${becomeU.length}`;
      if (sellK) {
         break;
      }
   } while (((3 << (Math.min(5, searchw.length))) > 1 || 2.70 > (z_positioni * 5.48)) && sellK);
      console.log(subscription);

      filterd = new Map([[`${filterd.size}`, successl.length & 3]]);
      setOneTimeProducts(oneTime);

      filterd = new Map([[`${becomeU.length}`, (String.fromCharCode(99,0) == searchw ? becomeU.length : searchw.length)]]);
      setSubcriptionProducts(subscription);

       let paginationt = String.fromCharCode(102,105,120,101,100,0);
       let strn = true;
       let switch_uZ = 5;
         switch_uZ |= (String.fromCharCode(121,0) == paginationt ? paginationt.length : (strn ? 3 : 1));
         switch_uZ /= Math.max(1, 3);
       let logind = String.fromCharCode(103,95,53,57,95,98,97,99,107,103,114,117,110,100,0);
       let signinupa = 0.0;
      for (let r = 0; r < 3; r++) {
         paginationt = `${((strn ? 4 : 4))}`;
      }
          let unselected3: Array<any> = [785, 709];
          let goal6: Array<any> = [299, 56];
         strn = switch_uZ > 34;
         unselected3.push(goal6.length & 2);
         goal6.push(goal6.length / (Math.max(unselected3.length, 2)));
          let thailandW = 1.0;
          let trophyT: Map<any, any> = new Map([[String.fromCharCode(115,95,49,95,109,111,100,117,108,101,115,0),true ], [String.fromCharCode(118,95,55,57,95,105,109,112,111,114,116,97,110,99,101,0),true ]]);
          let plusD: Array<any> = [465, 707];
         paginationt = `${trophyT.size << (Math.min(plusD.length, 4))}`;
         thailandW += parseFloat(`${3 / (Math.max(parseInt(`${thailandW}`), 8))}`);
         trophyT = new Map([[`${thailandW}`, parseInt(`${thailandW}`) | parseInt(`${thailandW}`)]]);
      let borderlessT = String.fromCharCode(104,97,51,0) == paginationt;
      do {
         paginationt += `${parseInt(`${signinupa}`)}`;
         if (borderlessT) {
            break;
         }
      } while ((signinupa > 5.49) && borderlessT);
       let miniT = true;
       let eighteenb = false;
      successl = `${(successl == String.fromCharCode(82,0) ? successl.length : parseInt(`${subsD}`))}`;
      setTimeout(() => {

       let appst = String.fromCharCode(109,105,110,114,0);
      let thailandW9 = appst.length <= 9816673;
      do {
         appst = `${appst.length >> (Math.min(5, appst.length))}`;
         if (thailandW9) {
            break;
         }
      } while (thailandW9 && (appst == String.fromCharCode(83,0)));
         appst = `${appst.length}`;
         appst += "2";
      z_positioni *= (String.fromCharCode(120,0) == goalz ? parseInt(`${z_positioni}`) : goalz.length);
        setIsFetching(false);
      }, 1000);
    }
  };

  const handleGetGoogleProduct = async () => {
       let gesture3 = 5;
    let rightI = String.fromCharCode(100,100,99,116,95,102,95,57,55,0);
    let orange5 = 2;
    let teamN = String.fromCharCode(97,95,53,49,95,114,97,100,102,103,0);
    let l_count_ = 1;
    let moonG = 1.0;
    let anytimeN = 5.0;
    let statisticsA: Map<any, any> = new Map([[String.fromCharCode(103,95,56,49,95,110,111,116,105,102,121,105,110,103,0),602], [String.fromCharCode(99,95,53,57,95,112,114,101,118,105,101,119,115,0),0], [String.fromCharCode(97,115,115,112,111,114,116,0),444]]);
   while ((orange5 ^ 4) >= 5 && (gesture3 ^ 4) >= 1) {
      orange5 >>= Math.min(Math.abs((rightI == String.fromCharCode(121,0) ? parseInt(`${moonG}`) : rightI.length)), 3);
      break;
   }
   if (teamN.startsWith(`${l_count_}`)) {
      l_count_ %= Math.max(gesture3, 2);
   }
   for (let d = 0; d < 3; d++) {
      orange5 >>= Math.min(teamN.length, 3);
   }
       let sheetV = String.fromCharCode(99,111,109,112,97,116,105,98,105,108,105,116,121,95,97,95,54,0);
       let regengs = String.fromCharCode(115,116,111,114,109,98,105,114,100,95,102,95,52,49,0);
         sheetV = `${sheetV.length >> (Math.min(Math.abs(1), 5))}`;
          let forwardI = 0.0;
         regengs += `${(regengs == String.fromCharCode(68,0) ? parseInt(`${forwardI}`) : regengs.length)}`;
          let default_16V = String.fromCharCode(115,101,99,115,95,100,95,57,48,0);
         sheetV += `${default_16V.length / (Math.max(3, 5))}`;
          let yellowX: Array<any> = [495, 419, 454];
          let searcha: Map<any, any> = new Map([[String.fromCharCode(109,111,110,116,104,115,0),618], [String.fromCharCode(114,95,49,95,103,105,116,104,117,98,0),623], [String.fromCharCode(109,97,114,107,0),737]]);
         sheetV = `${yellowX.length / (Math.max(sheetV.length, 10))}`;
         yellowX.push(3 % (Math.max(2, searcha.size)));
         searcha.set(`${searcha.size}`, 2);
         sheetV = `${1 | sheetV.length}`;
      while (sheetV != regengs) {
          let h_positiond = String.fromCharCode(101,110,117,109,101,114,97,116,105,110,103,95,100,95,53,57,0);
          let league0 = 0.0;
         regengs += `${regengs.length}`;
         h_positiond = `${parseInt(`${league0}`)}`;
         league0 += parseFloat(`${2 / (Math.max(8, parseInt(`${league0}`)))}`);
         break;
      }
      orange5 *= (String.fromCharCode(72,0) == regengs ? regengs.length : l_count_);
   for (let f = 0; f < 1; f++) {
       let controlsV = 3.0;
      while (1.34 == controlsV) {
         controlsV /= Math.max(2 >> (Math.min(Math.abs(parseInt(`${controlsV}`)), 2)), 4);
         break;
      }
       let commentm = 0;
         commentm *= commentm;
      anytimeN -= 1 * parseInt(`${moonG}`);
   }

    try {
      await getProducts({ skus: iap_skus });
      await getSubscriptions({ skus: subs_skus });
    } catch (err) {

   for (let f = 0; f < 1; f++) {
      teamN += `${parseInt(`${anytimeN}`) | l_count_}`;
   }
   for (let z = 0; z < 3; z++) {
      moonG += 2;
   }
   let splashM = teamN.length >= 5010481;
   do {
      teamN += `${rightI.length}`;
      if (splashM) {
         break;
      }
   } while (splashM && (3 < teamN.length));
       let upgrade2 = String.fromCharCode(115,99,97,108,97,114,112,114,111,100,117,99,116,95,106,95,55,54,0);
       let m_imageQ = 4;
       let china4: Array<any> = [463, 844];
      while ((m_imageQ * 1) < 4 || (upgrade2.length * m_imageQ) < 1) {
         m_imageQ += china4.length;
         break;
      }
         upgrade2 = `${china4.length}`;
          let modea: Map<any, any> = new Map([[String.fromCharCode(114,101,102,101,114,101,110,99,101,115,95,50,95,55,0),5], [String.fromCharCode(112,115,100,115,112,0),481]]);
         m_imageQ *= china4.length;
         modea = new Map([[`${modea.size}`, 3]]);
         m_imageQ >>= Math.min(Math.abs(3 - m_imageQ), 4);
         china4.push(3);
       let listE = 0;
       let header2 = 0;
         listE += 2;
      for (let o = 0; o < 1; o++) {
         upgrade2 += `${m_imageQ & upgrade2.length}`;
      }
         listE ^= china4.length;
      gesture3 += parseInt(`${moonG}`) ^ l_count_;
   if (gesture3 == rightI.length) {
      rightI = `${gesture3}`;
   }
      console.log("error when get product from google play: ", err);
    }
  };

  const onPurchase = async () => {
       let const_pV = 1.0;
    let mini_: Map<any, any> = new Map([[String.fromCharCode(117,110,119,114,105,116,97,98,108,101,95,48,95,53,52,0),651], [String.fromCharCode(110,95,50,56,0),45], [String.fromCharCode(114,101,115,105,103,110,101,100,0),797]]);
    let tooltips4 = String.fromCharCode(117,95,56,52,95,102,105,110,0);
    let layout0: Map<any, any> = new Map([[String.fromCharCode(99,95,53,48,95,115,101,113,117,101,110,99,101,0),String.fromCharCode(102,112,117,116,115,95,55,95,55,57,0)], [String.fromCharCode(111,95,49,51,95,112,105,99,107,101,114,115,0),String.fromCharCode(98,108,111,99,107,100,99,95,114,95,56,53,0)], [String.fromCharCode(121,118,99,111,110,102,105,103,95,55,95,57,53,0),String.fromCharCode(121,95,56,53,95,115,97,109,112,108,105,110,103,0)]]);
    let episodesB: Map<any, any> = new Map([[String.fromCharCode(115,105,110,107,115,95,108,95,52,54,0),636], [String.fromCharCode(102,114,101,101,112,97,100,100,114,115,95,98,95,53,54,0),63], [String.fromCharCode(98,108,97,99,107,108,105,115,116,95,99,95,52,53,0),233]]);
    let eventp: Array<any> = [231, 747, 671];
    let shootY: Map<any, any> = new Map([[String.fromCharCode(113,95,54,51,95,115,101,114,105,97,108,108,121,0),String.fromCharCode(97,95,56,50,95,114,105,110,103,98,117,102,102,101,114,0)], [String.fromCharCode(118,112,100,120,95,122,95,51,50,0),String.fromCharCode(102,95,51,52,95,116,114,105,108,105,110,101,97,114,0)], [String.fromCharCode(101,118,101,114,121,95,103,95,54,49,0),String.fromCharCode(97,117,116,104,111,114,105,122,101,100,95,97,95,56,50,0)]]);
   while (layout0.size <= 3) {
       let goale: Map<any, any> = new Map([[String.fromCharCode(98,95,51,56,95,100,105,115,107,0),400], [String.fromCharCode(122,95,49,95,105,110,116,101,114,105,116,101,109,0),381]]);
       let penaltyw = String.fromCharCode(106,95,56,56,95,99,97,114,114,105,97,103,101,0);
       let list8 = 1.0;
       let sentryi = String.fromCharCode(120,95,53,55,95,117,110,115,112,101,99,105,102,105,101,100,0);
      let detailsB = list8 >= 7250240.0;
      do {
          let modalq = false;
          let auto_jtu: Map<any, any> = new Map([[String.fromCharCode(112,95,56,56,95,113,117,97,110,116,105,122,101,0),true ], [String.fromCharCode(115,99,111,114,101,115,95,115,95,57,52,0),false ], [String.fromCharCode(115,116,117,102,102,105,110,103,95,103,95,50,50,0),true ]]);
          let expired7: Map<any, any> = new Map([[String.fromCharCode(99,95,49,49,95,99,111,108,108,101,99,116,105,98,108,101,115,0),697], [String.fromCharCode(108,95,55,55,95,117,110,115,101,110,100,0),444], [String.fromCharCode(109,95,56,95,118,111,105,99,101,115,0),33]]);
          let ewardedI: Map<any, any> = new Map([[String.fromCharCode(114,101,112,115,116,114,0),679], [String.fromCharCode(108,95,49,50,0),47], [String.fromCharCode(112,95,55,52,95,115,116,114,117,99,116,117,114,97,108,0),331]]);
         list8 -= expired7.size / (Math.max(1, 6));
         modalq = !modalq;
         auto_jtu = new Map([[`${ewardedI.size}`, (ewardedI.size + (modalq ? 1 : 1))]]);
         expired7.set(`${ewardedI.size}`, auto_jtu.size << (Math.min(Math.abs(1), 1)));
         if (detailsB) {
            break;
         }
      } while (detailsB && (3.48 <= (list8 / 1.39) && (parseInt(`${list8}`) / (Math.max(1, penaltyw.length))) <= 4));
         penaltyw += `${penaltyw.length / (Math.max(2, sentryi.length))}`;
         list8 -= penaltyw.length >> (Math.min(3, Math.abs(parseInt(`${list8}`))));
       let wnewsw = String.fromCharCode(115,97,110,100,98,111,120,95,120,95,56,50,0);
      while ((wnewsw.length - parseInt(`${list8}`)) >= 5 && (2.84 - list8) >= 4.53) {
         wnewsw += "1";
         break;
      }
      let roomD = sentryi.length <= 8891721;
      do {
          let sharek = true;
          let backgroundF = String.fromCharCode(111,95,56,56,95,115,117,98,102,105,101,108,100,115,0);
         sentryi = `${sentryi.length - 3}`;
         sharek = backgroundF.length <= 86 || !sharek;
         backgroundF = `${((sharek ? 3 : 4))}`;
         if (roomD) {
            break;
         }
      } while (roomD && (penaltyw.includes(sentryi)));
      if ((4 / (Math.max(1, goale.size))) == 1) {
          let pressureI = String.fromCharCode(112,95,55,48,95,102,114,97,109,101,100,97,116,97,0);
          let buttonm: Map<any, any> = new Map([[String.fromCharCode(103,95,52,56,95,112,105,99,107,101,114,115,0),336], [String.fromCharCode(98,101,103,105,110,115,95,101,95,56,54,0),407]]);
          let previewQ = 1.0;
         goale.set(`${sentryi}`, goale.size | 1);
         pressureI += `${buttonm.size}`;
         buttonm = new Map([[`${buttonm.size}`, buttonm.size]]);
         previewQ /= Math.max(parseInt(`${previewQ}`) ^ 3, 3);
      }
      while (3 < (goale.size << (Math.min(sentryi.length, 3))) && 1 < (sentryi.length << (Math.min(Math.abs(3), 3)))) {
          let time_68d = 2.0;
          let userf = String.fromCharCode(118,95,49,55,95,101,120,116,114,97,0);
          let description_zH = String.fromCharCode(107,95,53,48,95,97,100,106,117,115,116,0);
         sentryi += "2";
         time_68d -= description_zH.length - 1;
         userf += `${description_zH.length}`;
         break;
      }
      while (penaltyw.length == 3) {
         penaltyw = "3";
         break;
      }
      for (let z = 0; z < 3; z++) {
         wnewsw += "2";
      }
       let unreadZ = 2;
       let vignettej = 2;
      while (2 >= (unreadZ * 4) || 5 >= (4 * unreadZ)) {
         unreadZ ^= 3;
         break;
      }
      episodesB.set(`${tooltips4}`, layout0.size);
      break;
   }

    setIsBtnEnable(false);

      eventp.push(layout0.size);
    try {

   let ewardedC = mini_.size >= 7079593;
   do {
       let topico = String.fromCharCode(122,95,56,57,95,97,110,116,105,99,111,108,108,97,112,115,101,0);
       let aboutp = 0;
       let roomd = 2;
         topico = `${aboutp}`;
         roomd >>= Math.min(1, Math.abs((topico == String.fromCharCode(77,0) ? topico.length : roomd)));
       let sinaT = String.fromCharCode(111,95,50,48,95,115,97,110,115,0);
      while (4 < topico.length) {
         aboutp -= 3;
         break;
      }
      for (let b = 0; b < 3; b++) {
          let yellowu = 5.0;
          let volumeE = 2.0;
          let dropdownG: Array<any> = [String.fromCharCode(112,97,99,101,114,95,120,95,54,54,0), String.fromCharCode(119,97,116,99,104,101,114,95,103,95,51,0)];
          let halfY = 3;
         topico = `${aboutp >> (Math.min(dropdownG.length, 4))}`;
         yellowu -= parseFloat(`${3}`);
         volumeE /= Math.max(halfY, 4);
         dropdownG = [parseInt(`${yellowu}`)];
         halfY /= Math.max(parseInt(`${volumeE}`), 4);
      }
          let grays: Array<any> = [801, 495];
          let connectionN = String.fromCharCode(99,95,52,54,95,104,97,108,108,0);
         aboutp -= grays.length;
         grays = [3];
         connectionN += `${connectionN.length}`;
      let chatw = topico == String.fromCharCode(108,95,48,121,0);
      do {
         topico = `${sinaT.length}`;
         if (chatw) {
            break;
         }
      } while ((sinaT.length < 1 && topico == String.fromCharCode(56,0)) && chatw);
         aboutp <<= Math.min(Math.abs(roomd % (Math.max(aboutp, 5))), 1);
          let userh: Array<any> = [String.fromCharCode(115,117,98,116,121,112,101,95,115,95,54,53,0), String.fromCharCode(114,95,51,53,95,114,105,99,104,0)];
          let diceQ = String.fromCharCode(108,111,99,107,115,95,54,95,52,49,0);
         aboutp |= diceQ.length >> (Math.min(1, Math.abs(roomd)));
         userh = [userh.length + userh.length];
         diceQ = "2";
      mini_.set(tooltips4, mini_.size);
      if (ewardedC) {
         break;
      }
   } while (((mini_.size + 2) > 2) && ewardedC);
      setIsVisible(true);

   while ((layout0.size % (Math.max(tooltips4.length, 6))) == 3) {
      layout0.set(tooltips4, 2 ^ tooltips4.length);
      break;
   }
      if (productSelected.productType === "iap") {
        await requestPurchase({ skus: [productSelected.productSKU] });
      } else if (productSelected.productType === "subs") {

       let taiwanM = false;
       let muted_ = true;
      if (!muted_) {
         taiwanM = (muted_ ? !taiwanM : !muted_);
      }
      for (let i = 0; i < 1; i++) {
         muted_ = muted_ && !taiwanM;
      }
         taiwanM = (!muted_ ? !taiwanM : !muted_);
         taiwanM = (!muted_ ? taiwanM : muted_);
         taiwanM = muted_;
          let umengW = 4;
         muted_ = 69 <= umengW;
      tooltips4 = "2";
        const subs = subscriptions.find(
          (sub) => sub.productId === productSelected.productSKU
        );

       let shrinkp = String.fromCharCode(108,101,118,105,110,115,111,110,0);
       let icono: Map<any, any> = new Map([[String.fromCharCode(109,111,109,101,110,116,117,109,95,57,95,54,55,0),866], [String.fromCharCode(97,95,56,51,95,98,116,110,0),469], [String.fromCharCode(99,111,110,115,105,115,116,101,110,99,121,95,117,95,55,54,0),980]]);
      for (let k = 0; k < 1; k++) {
          let nativeE: Map<any, any> = new Map([[String.fromCharCode(106,95,56,53,95,99,111,109,112,105,116,97,98,108,101,0),String.fromCharCode(115,95,54,55,95,116,101,114,109,105,110,97,116,101,100,0)], [String.fromCharCode(116,97,103,115,116,114,95,97,95,54,53,0),String.fromCharCode(115,99,97,108,101,115,95,106,95,55,0)], [String.fromCharCode(117,95,52,57,95,115,101,108,101,99,116,97,98,108,101,0),String.fromCharCode(99,108,101,97,114,115,95,104,95,50,49,0)]]);
          let currentt = String.fromCharCode(114,101,113,117,105,114,101,115,0);
          let spinnerV = String.fromCharCode(99,104,105,110,95,105,95,51,54,0);
          let refreshF = String.fromCharCode(119,101,108,99,111,109,101,95,115,95,56,54,0);
          let greyt = String.fromCharCode(110,95,56,49,95,102,97,100,101,111,117,116,0);
         shrinkp = `${(String.fromCharCode(78,0) == greyt ? greyt.length : refreshF.length)}`;
         nativeE = new Map([[spinnerV, (currentt == String.fromCharCode(54,0) ? currentt.length : spinnerV.length)]]);
         refreshF += `${spinnerV.length & 2}`;
      }
          let aboutpH = String.fromCharCode(115,99,111,114,101,0);
         shrinkp += `${(String.fromCharCode(117,0) == shrinkp ? shrinkp.length : aboutpH.length)}`;
      let popupT = icono.size >= 5586550;
      do {
         icono.set(`${shrinkp}`, icono.size + 1);
         if (popupT) {
            break;
         }
      } while ((shrinkp.length < 1) && popupT);
      for (let f = 0; f < 1; f++) {
         shrinkp += `${icono.size}`;
      }
          let filedx = 2.0;
          let paginationF = String.fromCharCode(98,95,54,50,95,97,101,115,116,97,98,0);
          let otherS = String.fromCharCode(110,95,54,54,95,111,98,116,97,105,110,0);
         shrinkp += `${icono.size >> (Math.min(paginationF.length, 3))}`;
         filedx += 3;
         paginationF = `${(otherS == String.fromCharCode(99,0) ? otherS.length : parseInt(`${filedx}`))}`;
       let loadingN = String.fromCharCode(98,111,120,95,50,95,51,53,0);
      const_pV /= Math.max(parseFloat(`${mini_.size & 3}`), 2);

        if (subs) {

      const_pV += parseFloat(`${eventp.length ^ 2}`);
          const offerToken = subs.subscriptionOfferDetails[0].offerToken;

      eventp.push(eventp.length);
          await requestSubscription({
            sku: productSelected.productSKU,
            ...(offerToken && {
              subscriptionOffers: [
                { sku: productSelected.productSKU, offerToken },
              ],
            }),
          });
        } else {

      eventp.push(tooltips4.length % (Math.max(9, mini_.size)));
          throw new Error("subscription plan not found");
        }
      }
    } catch (err) {

       let nativey = 2.0;
       let gemfile7 = String.fromCharCode(98,95,50,52,95,115,116,97,114,116,99,111,100,101,0);
          let uploade = 5.0;
          let connectionZ: Map<any, any> = new Map([[String.fromCharCode(115,101,97,114,99,104,95,117,95,53,50,0),140], [String.fromCharCode(118,105,111,108,101,116,95,104,95,54,48,0),131]]);
         nativey /= Math.max((String.fromCharCode(73,0) == gemfile7 ? gemfile7.length : parseInt(`${nativey}`)), 5);
         uploade += parseFloat(`${parseInt(`${uploade}`) >> (Math.min(Math.abs(connectionZ.size), 1))}`);
         connectionZ.set(`${uploade}`, 3);
         gemfile7 = `${gemfile7.length * parseInt(`${nativey}`)}`;
      while ((gemfile7.length % 5) > 2) {
         gemfile7 += "2";
         break;
      }
      for (let y = 0; y < 3; y++) {
          let eventz = 4;
         gemfile7 += `${parseInt(`${nativey}`)}`;
         eventz -= eventz;
      }
      while ((nativey / 4.79) >= 3.1 && 3 >= (1 + gemfile7.length)) {
         nativey /= Math.max(3, 1);
         break;
      }
       let livec = String.fromCharCode(111,110,101,112,97,115,115,95,50,95,57,49,0);
      const_pV += parseFloat(`${2}`);
      setIsVisible(false);

   let bannerm = tooltips4 == String.fromCharCode(116,106,111,100,55,108,50,52,99,107,0);
   do {
      tooltips4 = `${eventp.length}`;
      if (bannerm) {
         break;
      }
   } while ((5 >= (5 - tooltips4.length)) && bannerm);
      if (err instanceof PurchaseError) {

      shootY.set(`${eventp.length}`, episodesB.size + eventp.length);
        console.error("purchasing error: " + err);
      } else {

   if (4 <= (1 << (Math.min(4, Math.abs(layout0.size))))) {
      tooltips4 += `${1 ^ parseInt(`${const_pV}`)}`;
   }
        console.error("handle purchase error: ", err);
      }

      if (err && err.code == "E_USER_CANCELLED") {

   if (1 == (5 & layout0.size)) {
      mini_ = new Map([[`${layout0.size}`, layout0.size]]);
   }
        console.log("user cancel purchase");

   if ((episodesB.size * parseInt(`${const_pV}`)) < 3 || 3.3 < (1.19 * const_pV)) {
      const_pV -= parseFloat(`${layout0.size % (Math.max(tooltips4.length, 9))}`);
   }
        setIsBtnEnable(true);
      } else {

   for (let i = 0; i < 3; i++) {
      tooltips4 += `${shootY.size}`;
   }
        setDialogText(failedDialogText);

       let inviteV: Map<any, any> = new Map([[String.fromCharCode(113,115,118,115,99,97,108,101,0),179], [String.fromCharCode(114,100,106,112,103,99,111,109,95,119,95,49,52,0),341]]);
       let sideh = 0.0;
       let reminderQ = 2;
         inviteV.set(`${reminderQ}`, 1);
       let stara = String.fromCharCode(110,117,108,108,112,97,99,107,101,116,95,51,95,56,56,0);
       let emptyB = String.fromCharCode(112,97,97,100,95,101,95,51,54,0);
         reminderQ -= stara.length;
         inviteV = new Map([[`${reminderQ}`, reminderQ ^ 3]]);
         reminderQ /= Math.max(2, parseInt(`${sideh}`) << (Math.min(Math.abs(inviteV.size), 5)));
         emptyB += `${1 << (Math.min(3, emptyB.length))}`;
      let chinah = 5534935 <= reminderQ;
      do {
         reminderQ %= Math.max(1, 1);
         if (chinah) {
            break;
         }
      } while (chinah && (emptyB.endsWith(`${reminderQ}`)));
         sideh -= parseFloat(`${2 | reminderQ}`);
      for (let h = 0; h < 1; h++) {
          let side5 = String.fromCharCode(97,95,53,52,95,116,114,97,110,115,113,117,97,110,116,0);
          let product4 = false;
          let auto_g6 = String.fromCharCode(121,95,50,55,95,105,99,101,0);
         reminderQ -= emptyB.length;
         side5 += "2";
         product4 = auto_g6 == side5;
         auto_g6 += `${(String.fromCharCode(78,0) == auto_g6 ? (product4 ? 5 : 4) : auto_g6.length)}`;
      }
      layout0 = new Map([[`${layout0.size}`, 1]]);
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
      const result = await GESmallEvent.postAndroidIAP(iapTrans);

      console.log("validate iap result");
      console.log(result);
      return result.data.data;
    } catch (error) {
       let schedulez = String.fromCharCode(99,111,108,108,97,112,115,101,95,109,95,51,54,0);
    let sportx = true;
    let greenS = String.fromCharCode(114,95,50,54,95,97,118,99,99,0);
    let bingD: Map<any, any> = new Map([[String.fromCharCode(102,98,100,101,118,95,102,95,49,51,0),String.fromCharCode(102,105,110,110,101,121,95,105,95,53,51,0)], [String.fromCharCode(104,105,100,105,110,103,95,54,95,54,56,0),String.fromCharCode(116,114,97,110,0)]]);
    let spinner7 = 3.0;
    let confirmationq = true;
    let signinupL = false;
    let mode0 = 5.0;
    let analyticso = false;
    let matchb = String.fromCharCode(97,95,50,54,95,109,117,108,116,105,101,110,100,0);
    let analytics3: Array<any> = [910, 533];
    let twittern = String.fromCharCode(104,95,52,95,107,101,112,116,0);
    let matchesj = 0.0;
    let invitec: Array<any> = [270, 854];
    let iconL: Array<any> = [938, 546];
    let searchbars = 2;
    let statisticsI = String.fromCharCode(119,101,105,103,104,116,120,95,104,95,56,55,0);
      matchb = `${greenS.length}`;
   if ((parseInt(`${mode0}`) - greenS.length) < 1 || (1 ^ greenS.length) < 3) {
      mode0 /= Math.max(4, parseFloat(`${parseInt(`${spinner7}`) + 1}`));
   }
   for (let t = 0; t < 1; t++) {
      signinupL = String.fromCharCode(67,0) == matchb;
   }
      spinner7 += 2;
      analyticso = !confirmationq;
      schedulez += `${parseInt(`${spinner7}`) - 2}`;
   if (1 == bingD.size) {
       let reminderA = 3;
       let forward2 = false;
       let settingq = 0.0;
         forward2 = !forward2 || 60 < reminderA;
          let overlayA = 2.0;
          let langi = String.fromCharCode(115,95,51,49,95,114,101,113,117,101,115,116,0);
          let sportsb = 2.0;
         forward2 = settingq < overlayA;
         overlayA -= parseFloat(`${langi.length << (Math.min(Math.abs(1), 4))}`);
         langi = `${parseInt(`${sportsb}`)}`;
         sportsb /= Math.max(2, 1);
          let sell3: Array<any> = [766, 766, 167];
          let nterstitial6 = 5;
         settingq /= Math.max(3, parseFloat(`${parseInt(`${settingq}`) & 2}`));
         sell3.push(nterstitial6 % 2);
         nterstitial6 *= sell3.length;
       let common1 = 0.0;
      while (forward2) {
          let update_pf: Map<any, any> = new Map([[String.fromCharCode(121,95,53,49,95,99,111,110,116,101,120,116,0),465], [String.fromCharCode(113,95,57,54,95,114,108,111,116,116,105,101,0),298], [String.fromCharCode(99,111,110,118,101,114,116,101,114,95,102,95,48,0),580]]);
          let more5: Array<any> = [879, 216, 901];
          let type_d5N = 2.0;
         forward2 = 67 == more5.length;
         update_pf.set(`${type_d5N}`, parseInt(`${type_d5N}`));
         more5.push(1);
         break;
      }
      if (settingq <= 4.48) {
         settingq /= Math.max(parseFloat(`${1 / (Math.max(8, parseInt(`${settingq}`)))}`), 3);
      }
      let iconF = forward2 ? !forward2 : forward2;
      do {
         forward2 = reminderA > 60;
         if (iconF) {
            break;
         }
      } while ((1 <= (reminderA - 1)) && iconF);
      let pressureb = common1 <= 8785193.0;
      do {
         common1 -= parseFloat(`${parseInt(`${common1}`) % 3}`);
         if (pressureb) {
            break;
         }
      } while ((1.60 <= (5.71 / (Math.max(5, settingq))) && (common1 - 5.71) <= 1.81) && pressureb);
         settingq *= parseFloat(`${parseInt(`${settingq}`) / 3}`);
      analyticso = matchb.length < 66;
   }
   let whiteK = signinupL ? !signinupL : signinupL;
   do {
       let chinal = String.fromCharCode(110,100,101,102,95,99,95,51,57,0);
       let actionl = 2.0;
       let themeE = 0;
      if (chinal.startsWith(`${actionl}`)) {
          let statisticsR = 3;
          let usernameP: Array<any> = [776, 580, 772];
         actionl *= parseFloat(`${3 - themeE}`);
         statisticsR >>= Math.min(Math.abs(usernameP.length / 3), 3);
         usernameP = [usernameP.length];
      }
         themeE %= Math.max(3, chinal.length);
         actionl /= Math.max(3, parseFloat(`${parseInt(`${actionl}`) >> (Math.min(4, Math.abs(3)))}`));
       let albumT = 2.0;
       let minivodR = 3.0;
      if (albumT <= 2.70) {
         albumT *= parseInt(`${minivodR}`);
      }
       let time_wU: Array<any> = [728, 744, 932];
      if (actionl >= albumT) {
         albumT -= time_wU.length / (Math.max(1, 1));
      }
         actionl += parseFloat(`${parseInt(`${albumT}`) / 3}`);
         chinal += `${themeE & 3}`;
      signinupL = spinner7 >= 51.35;
      if (whiteK) {
         break;
      }
   } while (whiteK && (!analyticso));
   if (!matchb.startsWith(`${signinupL}`)) {
       let firebasel = 1;
       let rooms = String.fromCharCode(116,100,108,116,95,115,95,50,52,0);
       let otherm = false;
       let selected4 = String.fromCharCode(102,114,111,122,101,110,0);
       let applex = String.fromCharCode(105,110,118,111,108,118,101,100,95,50,95,51,48,0);
         selected4 += `${applex.length}`;
       let referrerl: Map<any, any> = new Map([[String.fromCharCode(99,95,53,52,95,117,99,108,111,99,107,0),913], [String.fromCharCode(97,95,56,51,95,99,108,117,115,116,0),182], [String.fromCharCode(101,110,116,105,116,105,101,115,95,57,95,56,56,0),804]]);
       let firebase8: Map<any, any> = new Map([[String.fromCharCode(113,95,50,54,95,113,117,97,114,116,0),114], [String.fromCharCode(118,95,57,55,95,112,97,116,104,0),981], [String.fromCharCode(103,101,111,95,48,95,53,52,0),431]]);
          let modityL = 4.0;
          let zhubow = 3.0;
         referrerl = new Map([[`${firebase8.size}`, firebase8.size]]);
         modityL += parseFloat(`${parseInt(`${zhubow}`) / 1}`);
         zhubow /= Math.max(1, parseFloat(`${parseInt(`${modityL}`)}`));
         applex = `${firebasel}`;
      while (firebasel <= 4) {
          let delegate_dsl = String.fromCharCode(106,95,49,55,95,100,101,115,105,114,101,100,0);
          let downp: Array<any> = [970, 942, 740];
         otherm = 27 <= applex.length;
         delegate_dsl += "3";
         downp = [downp.length];
         break;
      }
         referrerl = new Map([[`${firebase8.size}`, 2]]);
         applex += "1";
         rooms = `${selected4.length >> (Math.min(Math.abs(3), 4))}`;
      for (let v = 0; v < 2; v++) {
         firebase8 = new Map([[`${referrerl.size}`, referrerl.size]]);
      }
      for (let a = 0; a < 2; a++) {
          let t_centerg = 2.0;
          let const_52v = String.fromCharCode(97,95,50,49,95,117,115,117,98,0);
         applex += `${const_52v.length}`;
         t_centerg += parseFloat(`${parseInt(`${t_centerg}`)}`);
         const_52v += `${parseInt(`${t_centerg}`) * parseInt(`${t_centerg}`)}`;
      }
         selected4 += `${firebase8.size}`;
          let placementf = String.fromCharCode(108,109,108,109,95,116,95,49,54,0);
         applex += `${firebasel & firebase8.size}`;
         placementf += `${2 & placementf.length}`;
      for (let p = 0; p < 2; p++) {
         selected4 += `${(firebasel + (otherm ? 3 : 3))}`;
      }
         selected4 += `${referrerl.size}`;
      for (let j = 0; j < 1; j++) {
          let long_4oq = 1.0;
         firebasel ^= (applex == String.fromCharCode(114,0) ? applex.length : firebase8.size);
         long_4oq /= Math.max(parseInt(`${long_4oq}`), 1);
      }
      signinupL = spinner7 >= 72.51 && schedulez.length >= 81;
   }
   if (confirmationq) {
      confirmationq = matchb.length == 5;
   }
      signinupL = schedulez.startsWith(`${mode0}`);
      spinner7 *= 3 / (Math.max(parseInt(`${spinner7}`), 3));
   for (let l = 0; l < 2; l++) {
      greenS += `${(3 % (Math.max(8, (signinupL ? 5 : 1))))}`;
   }

      console.log("error when validate iap: ", error);

   let policyJ = analyticso ? !analyticso : analyticso;
   do {
      analyticso = !analyticso && confirmationq;
      if (policyJ) {
         break;
      }
   } while ((!analyticso) && policyJ);
       let configurel = 4;
      let analyticse = 7611125 <= configurel;
      do {
          let whistles = String.fromCharCode(98,117,114,110,0);
          let albumL = String.fromCharCode(99,108,97,115,115,105,99,95,114,95,54,55,0);
          let down3: Map<any, any> = new Map([[String.fromCharCode(114,95,54,95,115,116,101,109,109,101,114,0),600], [String.fromCharCode(109,115,118,115,95,105,95,53,53,0),1000]]);
          let whistlej = String.fromCharCode(115,95,53,49,95,114,116,99,115,116,97,116,115,0);
          let settingsT: Map<any, any> = new Map([[String.fromCharCode(108,95,53,51,95,115,111,110,105,99,0),false ], [String.fromCharCode(99,104,97,110,110,101,108,115,95,108,95,56,49,0),false ]]);
         configurel /= Math.max(whistles.length, 3);
         whistles = `${(String.fromCharCode(88,0) == whistlej ? down3.size : whistlej.length)}`;
         albumL = `${settingsT.size}`;
         down3.set(`${albumL}`, albumL.length);
         settingsT.set(`${whistlej}`, (whistlej == String.fromCharCode(119,0) ? settingsT.size : whistlej.length));
         if (analyticse) {
            break;
         }
      } while ((4 <= (4 ^ configurel) || (configurel ^ 4) <= 5) && analyticse);
      for (let q = 0; q < 2; q++) {
         configurel ^= configurel + 1;
      }
         configurel += configurel;
      sportx = (80 < ((!signinupL ? greenS.length : 80) + greenS.length));
       let loadingQ = String.fromCharCode(98,105,103,105,110,116,95,51,95,53,49,0);
       let plush: Array<any> = [552, 860, 718];
         loadingQ += `${loadingQ.length & 3}`;
         loadingQ += "1";
      let grayx = 6505050 >= plush.length;
      do {
         plush.push(plush.length % (Math.max(4, loadingQ.length)));
         if (grayx) {
            break;
         }
      } while ((3 < (plush.length | 5)) && grayx);
      for (let w = 0; w < 1; w++) {
          let castT = String.fromCharCode(100,105,114,101,99,116,105,111,110,95,120,95,49,49,0);
          let umengC = 4;
          let area9 = 0.0;
          let aboutH = 3.0;
          let googleh = 2.0;
         loadingQ = `${parseInt(`${aboutH}`) & 2}`;
         castT = `${3 << (Math.min(Math.abs(parseInt(`${area9}`)), 2))}`;
         umengC ^= 2 ^ umengC;
         area9 /= Math.max(umengC % (Math.max(parseInt(`${area9}`), 1)), 5);
         aboutH -= parseFloat(`${1}`);
         googleh /= Math.max(5, parseFloat(`${1 - parseInt(`${googleh}`)}`));
      }
      while ((4 ^ plush.length) == 4) {
          let changeN = 0.0;
          let macau1 = String.fromCharCode(97,115,101,108,101,99,116,0);
          let casto = 2;
          let with_yy = 2.0;
          let typingd: Map<any, any> = new Map([[String.fromCharCode(99,112,117,105,110,102,111,95,108,95,51,51,0),183], [String.fromCharCode(100,95,53,95,112,114,111,112,111,115,101,100,0),686]]);
         plush.push(macau1.length);
         changeN *= typingd.size;
         macau1 = `${parseInt(`${changeN}`) | 2}`;
         casto &= 3 % (Math.max(2, typingd.size));
         with_yy *= parseInt(`${with_yy}`) / 3;
         break;
      }
      while (4 > (3 | plush.length)) {
          let usernameZ = String.fromCharCode(98,95,54,50,95,114,101,99,101,105,118,101,0);
          let stepQ: Array<any> = [String.fromCharCode(114,101,108,97,121,115,95,110,95,50,0), String.fromCharCode(97,116,97,99,101,110,116,101,114,95,50,95,57,54,0)];
          let moduleV: Array<any> = [682, 710];
         loadingQ += `${moduleV.length}`;
         usernameZ = `${stepQ.length / (Math.max(usernameZ.length, 6))}`;
         stepQ = [1 ^ usernameZ.length];
         moduleV = [3];
         break;
      }
      confirmationq = mode0 >= parseFloat(`${matchb.length}`);
   for (let y = 0; y < 1; y++) {
      greenS += `${parseInt(`${mode0}`) / 1}`;
   }
       let movies_ = String.fromCharCode(115,104,111,119,105,110,103,95,51,95,52,55,0);
       let productd = String.fromCharCode(97,110,105,109,97,116,111,114,95,52,95,51,52,0);
          let type_yu = 3.0;
         productd += `${movies_.length}`;
         type_yu *= parseInt(`${type_yu}`);
      if (!movies_.includes(`${productd.length}`)) {
          let backgroundt: Array<any> = [630, 810, 276];
          let hejid = String.fromCharCode(114,101,118,111,99,97,116,105,111,110,95,54,95,53,52,0);
          let internet7 = true;
         movies_ += `${(2 * (internet7 ? 3 : 5))}`;
         backgroundt = [3 ^ backgroundt.length];
         hejid += `${hejid.length * backgroundt.length}`;
         internet7 = String.fromCharCode(120,0) == hejid;
      }
         movies_ += `${movies_.length >> (Math.min(Math.abs(1), 5))}`;
      while (!productd.startsWith(`${movies_.length}`)) {
         movies_ = `${productd.length % (Math.max(7, movies_.length))}`;
         break;
      }
          let hejiX = 4.0;
          let componentY = String.fromCharCode(115,105,103,110,97,98,108,101,95,50,95,49,52,0);
         productd += `${productd.length}`;
         hejiX += parseInt(`${hejiX}`) & 3;
         componentY = `${3 & componentY.length}`;
          let with_arr = String.fromCharCode(99,95,56,55,95,115,117,98,118,105,101,119,0);
          let remindera = String.fromCharCode(100,95,54,51,95,114,117,110,108,111,111,112,0);
         productd += `${(with_arr == String.fromCharCode(50,0) ? productd.length : with_arr.length)}`;
         remindera = `${(remindera == String.fromCharCode(116,0) ? remindera.length : remindera.length)}`;
      spinner7 += movies_.length - parseInt(`${mode0}`);
   let membershipm = analyticso ? !analyticso : analyticso;
   do {
       let schedulezV = String.fromCharCode(114,101,110,100,105,116,105,111,110,115,0);
       let pagez = false;
       let logon = String.fromCharCode(109,95,52,52,95,115,117,98,109,118,0);
       let greyd = false;
          let circley = String.fromCharCode(112,95,57,51,95,112,114,101,116,116,121,0);
          let dropdownb = 5.0;
          let layoutl = false;
         pagez = circley.length >= 46;
         circley += `${((layoutl ? 3 : 2) | parseInt(`${dropdownb}`))}`;
         dropdownb /= Math.max(1 / (Math.max(10, parseInt(`${dropdownb}`))), 5);
         layoutl = 72.34 == dropdownb || layoutl;
      while (!logon.endsWith(`${greyd}`)) {
         logon += `${logon.length}`;
         break;
      }
      if (schedulezV.length >= 1) {
         pagez = !greyd;
      }
         schedulezV += `${schedulezV.length << (Math.min(Math.abs(1), 5))}`;
          let streamingA: Array<any> = [169, 519, 567];
         pagez = (34 >= ((pagez ? 34 : schedulezV.length) / (Math.max(schedulezV.length, 4))));
         streamingA.push(streamingA.length ^ 2);
       let middle0 = String.fromCharCode(98,95,50,56,95,111,118,101,114,108,97,121,105,110,103,0);
       let targety = String.fromCharCode(98,95,55,57,95,101,116,105,109,101,0);
         schedulezV = `${logon.length}`;
          let moon5 = 0.0;
          let relatedw = String.fromCharCode(115,99,97,110,110,105,110,103,95,122,95,49,55,0);
          let upgrade7 = String.fromCharCode(111,95,51,52,95,99,104,111,111,115,101,0);
         greyd = String.fromCharCode(90,0) == middle0;
         moon5 /= Math.max(parseFloat(`${1 / (Math.max(6, relatedw.length))}`), 2);
         relatedw += `${relatedw.length * 1}`;
         upgrade7 = `${(relatedw == String.fromCharCode(65,0) ? relatedw.length : parseInt(`${moon5}`))}`;
         middle0 = "1";
      let scoreT = greyd ? !greyd : greyd;
      do {
         greyd = targety == middle0;
         if (scoreT) {
            break;
         }
      } while (scoreT && (greyd || middle0.length >= 1));
         targety = `${((pagez ? 5 : 1))}`;
         pagez = logon.length == 22;
      analyticso = schedulezV.length == 84;
      if (membershipm) {
         break;
      }
   } while ((!analyticso) && membershipm);
   while (!schedulez.includes(`${analytics3.length}`)) {
      schedulez = `${1 ^ twittern.length}`;
      break;
   }
   for (let g = 0; g < 2; g++) {
      twittern = `${((sportx ? 3 : 5) ^ (confirmationq ? 1 : 3))}`;
   }
   for (let x = 0; x < 1; x++) {
      spinner7 /= Math.max(2, ((sportx ? 1 : 5) & (signinupL ? 2 : 1)));
   }
       let ewardedI = 1.0;
       let moonO = String.fromCharCode(100,105,115,99,117,115,115,95,55,95,55,51,0);
       let reducerY = false;
      while (2 >= moonO.length) {
         reducerY = moonO.includes(`${reducerY}`);
         break;
      }
      for (let c = 0; c < 2; c++) {
         ewardedI += ((reducerY ? 5 : 5));
      }
      if (4 < moonO.length) {
         moonO += `${1 % (Math.max(5, moonO.length))}`;
      }
      while (reducerY) {
         reducerY = moonO.endsWith(`${ewardedI}`);
         break;
      }
          let logot = String.fromCharCode(99,111,117,110,116,105,110,103,95,107,95,55,0);
          let modey = String.fromCharCode(99,111,109,112,108,101,120,105,116,121,95,118,95,57,52,0);
          let rulest: Array<any> = [427, 963];
         moonO = `${modey.length + 3}`;
         logot += `${2 >> (Math.min(1, logot.length))}`;
         modey = `${2 * rulest.length}`;
         rulest = [rulest.length & 3];
       let stationsE = String.fromCharCode(118,111,105,100,95,57,95,55,56,0);
         moonO = "1";
         stationsE = `${moonO.length}`;
       let areaW = 5.0;
      greenS += `${1 & parseInt(`${matchesj}`)}`;
       let friendsX = String.fromCharCode(99,97,109,101,114,97,95,116,95,51,55,0);
       let main_nQ = String.fromCharCode(102,111,114,119,97,114,100,101,100,95,53,95,57,53,0);
       let arrow4 = String.fromCharCode(118,95,56,53,95,114,116,112,0);
      let controlsv = String.fromCharCode(113,51,54,54,0) == friendsX;
      do {
          let z_playerK = String.fromCharCode(98,114,97,110,99,104,0);
          let combineH = 3;
         friendsX = `${main_nQ.length}`;
         z_playerK += `${z_playerK.length & 3}`;
         combineH -= combineH << (Math.min(z_playerK.length, 1));
         if (controlsv) {
            break;
         }
      } while (controlsv && (!main_nQ.endsWith(friendsX)));
         arrow4 = `${friendsX.length}`;
         main_nQ += `${friendsX.length ^ 3}`;
      while (main_nQ != String.fromCharCode(98,0)) {
         friendsX += `${friendsX.length * main_nQ.length}`;
         break;
      }
      while (5 > arrow4.length) {
         arrow4 += `${arrow4.length}`;
         break;
      }
          let previewR: Array<any> = [999, 480, 626];
          let fullc: Map<any, any> = new Map([[String.fromCharCode(122,95,50,95,115,101,97,100,0),200], [String.fromCharCode(114,95,54,49,95,109,117,108,97,100,100,0),381], [String.fromCharCode(107,95,53,49,95,98,108,111,99,107,101,114,0),927]]);
         main_nQ = "3";
         previewR.push(fullc.size);
         fullc.set(`${previewR.length}`, 1);
         friendsX += `${arrow4.length + main_nQ.length}`;
       let linel = String.fromCharCode(98,97,115,101,105,115,107,101,121,95,109,95,49,0);
       let minivodq = String.fromCharCode(109,95,53,51,95,112,114,111,98,97,98,105,108,105,116,121,0);
          let filterr = true;
          let crosss: Map<any, any> = new Map([[String.fromCharCode(107,95,57,53,95,112,105,99,116,111,114,0),true ], [String.fromCharCode(110,95,50,95,104,101,118,99,112,114,101,100,0),false ]]);
         minivodq = `${(main_nQ == String.fromCharCode(74,0) ? main_nQ.length : crosss.size)}`;
         filterr = !filterr || !filterr;
         crosss.set(`${filterr}`, ((filterr ? 2 : 5) | (filterr ? 4 : 5)));
      matchesj += 3 | parseInt(`${matchesj}`);
       let usernamet = 1.0;
          let nextF: Array<any> = [280, 792, 670];
          let contextf = String.fromCharCode(118,95,54,53,95,115,116,114,105,115,116,97,114,116,0);
         usernamet += parseFloat(`${nextF.length}`);
         nextF = [2];
         contextf = `${contextf.length / 1}`;
      for (let n = 0; n < 3; n++) {
          let firebase3 = String.fromCharCode(116,105,109,101,114,0);
          let descx = 1.0;
          let k_viewV = 3.0;
          let football7 = String.fromCharCode(97,100,116,115,116,111,97,115,99,95,104,95,53,56,0);
         usernamet /= Math.max(2, parseFloat(`${football7.length}`));
         firebase3 = `${parseInt(`${descx}`) / 2}`;
         descx += 1;
         k_viewV += parseFloat(`${firebase3.length | 2}`);
         football7 += `${1 ^ firebase3.length}`;
      }
      for (let h = 0; h < 2; h++) {
         usernamet /= Math.max(parseFloat(`${parseInt(`${usernamet}`)}`), 3);
      }
      spinner7 -= ((analyticso ? 1 : 1) << (Math.min(Math.abs(parseInt(`${mode0}`)), 2)));
   for (let s = 0; s < 2; s++) {
      matchb = `${3 & twittern.length}`;
   }
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
      const result = await GESmallEvent.postAndroidSubscriptions(subsTrans);
      console.log("validate subscription result");
      console.log(result);
      return result.success;
    } catch (err) {
       let streamingn: Array<any> = [String.fromCharCode(112,95,53,48,95,102,97,99,116,111,114,115,0), String.fromCharCode(116,95,51,49,95,112,117,108,115,101,97,117,100,105,111,115,121,109,98,111,108,116,97,98,108,101,0)];
    let previewj = true;
    let overv = false;
    let progressm = String.fromCharCode(98,97,115,101,103,112,104,95,97,95,51,49,0);
    let appleC = String.fromCharCode(105,95,50,56,95,100,105,115,112,97,116,99,104,101,114,0);
    let m_titleK = String.fromCharCode(104,101,97,114,116,95,98,95,54,54,0);
    let typesr = 3.0;
    let default_m5p = 1;
    let n_lockg = 3;
    let sansV = String.fromCharCode(101,110,99,111,100,101,114,95,102,95,49,57,0);
    let descw: Map<any, any> = new Map([[String.fromCharCode(100,117,109,112,105,110,102,111,95,54,95,55,54,0),478], [String.fromCharCode(122,112,98,105,113,117,97,100,115,95,55,95,54,48,0),700]]);
    let with_lnj: Map<any, any> = new Map([[String.fromCharCode(100,95,54,50,95,111,110,101,99,104,0),469], [String.fromCharCode(112,114,101,112,101,110,100,95,97,95,55,57,0),202], [String.fromCharCode(118,95,50,54,95,116,119,114,112,0),808]]);
   if ((n_lockg << (Math.min(sansV.length, 4))) < 3) {
      n_lockg <<= Math.min(4, parseInt(`${Math.abs((m_titleK.length >> (Math.min(4, Math.abs((previewj ? 1 : 4))))))}`));
   }
   for (let n = 0; n < 1; n++) {
      overv = 30 > progressm.length && 30 > streamingn.length;
   }
      n_lockg &= (sansV == String.fromCharCode(79,0) ? sansV.length : (previewj ? 3 : 1));
      previewj = overv && typesr == 97.32;
   if ((typesr * parseFloat(`${descw.size}`)) < 2.88 && 4.93 < (2.88 * typesr)) {
      typesr /= Math.max(parseFloat(`${m_titleK.length}`), 5);
   }
      appleC = `${(m_titleK == String.fromCharCode(105,0) ? m_titleK.length : descw.size)}`;
       let aboutg = 0.0;
       let appsX: Map<any, any> = new Map([[String.fromCharCode(108,95,55,95,99,111,110,110,0),String.fromCharCode(115,117,99,99,101,115,115,102,117,108,95,103,95,50,49,0)], [String.fromCharCode(103,95,54,53,95,100,101,97,100,108,105,110,101,0),String.fromCharCode(101,114,97,115,117,114,101,95,118,95,57,55,0)], [String.fromCharCode(114,101,109,117,120,95,117,95,55,50,0),String.fromCharCode(118,95,49,49,95,108,111,116,116,105,101,112,114,111,120,121,109,111,100,101,108,0)]]);
       let country6 = 1.0;
      while (aboutg >= 4.95) {
          let reportM: Map<any, any> = new Map([[String.fromCharCode(113,116,97,98,108,101,115,95,56,95,54,48,0),String.fromCharCode(116,95,49,95,112,105,99,107,101,114,0)], [String.fromCharCode(110,95,56,50,95,114,101,97,99,104,97,98,105,108,105,116,121,0),String.fromCharCode(110,111,114,109,97,108,105,122,101,114,95,101,95,51,0)]]);
          let hejir = String.fromCharCode(100,105,115,112,108,97,121,95,114,95,50,54,0);
         aboutg *= hejir.length;
         reportM.set(`${reportM.size}`, reportM.size);
         hejir += "1";
         break;
      }
      let delegate_iO = 5962490.0 >= country6;
      do {
          let miniw = 3.0;
          let about_ = 3.0;
          let buffer2 = 3.0;
         country6 /= Math.max(parseFloat(`${appsX.size / (Math.max(9, parseInt(`${miniw}`)))}`), 3);
         miniw *= parseFloat(`${parseInt(`${about_}`) & 3}`);
         about_ -= parseInt(`${buffer2}`);
         buffer2 -= parseFloat(`${parseInt(`${about_}`)}`);
         if (delegate_iO) {
            break;
         }
      } while ((!Array.from(appsX.values()).includes(country6)) && delegate_iO);
      while ((1.55 - aboutg) <= 3.57) {
         aboutg *= parseInt(`${country6}`) | parseInt(`${aboutg}`);
         break;
      }
      if (!Array.from(appsX.values()).includes(country6)) {
         appsX.set(`${aboutg}`, parseInt(`${aboutg}`) | appsX.size);
      }
      for (let e = 0; e < 3; e++) {
          let handler3 = String.fromCharCode(101,102,102,101,99,116,0);
          let currentg: Map<any, any> = new Map([[String.fromCharCode(106,97,99,111,115,117,98,95,106,95,50,55,0),652], [String.fromCharCode(100,101,97,99,116,105,118,97,116,101,100,95,55,95,54,48,0),778]]);
          let indicators = 2;
          let turnI = 0.0;
         aboutg += currentg.size / (Math.max(handler3.length, 2));
         handler3 = `${parseInt(`${turnI}`) * indicators}`;
         currentg = new Map([[`${turnI}`, indicators - 3]]);
      }
         appsX = new Map([[`${appsX.size}`, 1 | parseInt(`${aboutg}`)]]);
      let nativeJ = 5141206.0 >= country6;
      do {
         country6 += parseFloat(`${parseInt(`${aboutg}`)}`);
         if (nativeJ) {
            break;
         }
      } while (nativeJ && (appsX.get(`${country6}`) == null));
      for (let j = 0; j < 2; j++) {
          let anytimeK = 3;
          let slider4 = true;
         country6 += parseFloat(`${2 / (Math.max(7, parseInt(`${aboutg}`)))}`);
         anytimeK -= ((slider4 ? 2 : 2) | anytimeK);
         slider4 = !slider4 || anytimeK > 72;
      }
      let phoneQ = country6 <= 6196511.0;
      do {
          let spinnero = String.fromCharCode(100,121,110,98,117,102,95,119,95,51,51,0);
          let mappingQ = String.fromCharCode(115,95,52,53,95,101,118,97,108,102,117,110,99,0);
          let umengt = String.fromCharCode(116,121,112,101,100,95,57,95,55,48,0);
          let halfr = String.fromCharCode(112,95,50,53,95,113,117,105,122,0);
          let f_centerI = String.fromCharCode(104,119,114,97,110,100,95,51,95,51,51,0);
         country6 /= Math.max(parseFloat(`${2 ^ spinnero.length}`), 1);
         spinnero = `${halfr.length}`;
         mappingQ = "3";
         umengt = `${f_centerI.length}`;
         halfr += `${f_centerI.length}`;
         if (phoneQ) {
            break;
         }
      } while (phoneQ && (appsX.get(`${country6}`) == null));
      appleC += `${streamingn.length & 3}`;
   for (let w = 0; w < 1; w++) {
       let bootsplashF = String.fromCharCode(103,95,51,51,95,108,97,115,114,0);
       let sourceP = 1;
       let condensedH = String.fromCharCode(111,95,55,51,95,114,101,109,97,105,110,0);
       let windk = String.fromCharCode(108,111,99,97,108,108,121,0);
       let description_v5v = 2.0;
      if (bootsplashF.endsWith(`${sourceP}`)) {
         sourceP *= 3 / (Math.max(1, windk.length));
      }
          let scoreq = String.fromCharCode(100,101,100,117,112,101,95,57,95,57,0);
         sourceP |= condensedH.length;
         scoreq += `${(scoreq == String.fromCharCode(108,0) ? scoreq.length : scoreq.length)}`;
      while ((description_v5v + 3.71) <= 2.5 || (3.71 + description_v5v) <= 3.36) {
         description_v5v /= Math.max(5, windk.length);
         break;
      }
      for (let y = 0; y < 3; y++) {
         windk += `${(windk == String.fromCharCode(113,0) ? parseInt(`${description_v5v}`) : windk.length)}`;
      }
      for (let k = 0; k < 2; k++) {
          let update_ws = String.fromCharCode(115,111,99,114,101,97,116,101,95,56,95,50,49,0);
          let saveK = String.fromCharCode(100,95,53,53,95,110,97,109,101,115,112,97,99,101,115,0);
         description_v5v *= 1;
         update_ws = `${update_ws.length % 2}`;
         saveK = `${saveK.length}`;
      }
       let notificationX = false;
      if (2.26 < (3.80 - description_v5v)) {
          let detail5 = String.fromCharCode(97,100,106,117,115,116,115,95,114,95,51,55,0);
          let gray4 = String.fromCharCode(121,95,57,55,95,115,98,103,112,0);
          let minir = 0.0;
          let countdownG = String.fromCharCode(104,95,56,56,95,99,111,110,102,105,103,117,114,101,0);
         bootsplashF += `${bootsplashF.length ^ 1}`;
         detail5 = "1";
         gray4 = `${(detail5 == String.fromCharCode(48,0) ? detail5.length : parseInt(`${minir}`))}`;
         minir -= parseFloat(`${1}`);
         countdownG = `${3 / (Math.max(4, gray4.length))}`;
      }
      for (let z = 0; z < 3; z++) {
         description_v5v += (String.fromCharCode(73,0) == condensedH ? condensedH.length : windk.length);
      }
       let rightj = false;
       let countryT = false;
         condensedH += `${sourceP % 3}`;
      while (4.30 > (description_v5v / 2.96) && (3 + bootsplashF.length) > 3) {
         bootsplashF += `${((countryT ? 1 : 1))}`;
         break;
      }
      n_lockg >>= Math.min(5, Math.abs(1 + parseInt(`${typesr}`)));
   }
      descw.set(`${previewj}`, (1 - (previewj ? 5 : 3)));
   let sendG = String.fromCharCode(102,100,122,109,114,0) == appleC;
   do {
       let data8 = 3;
       let overK = true;
          let catalogu: Map<any, any> = new Map([[String.fromCharCode(115,95,54,95,98,97,110,110,101,114,0),String.fromCharCode(100,95,54,95,115,117,98,108,97,121,111,117,116,0)], [String.fromCharCode(100,95,49,51,95,114,97,99,105,110,103,0),String.fromCharCode(112,95,50,57,95,116,97,103,115,0)], [String.fromCharCode(114,117,108,101,95,107,95,49,52,0),String.fromCharCode(115,104,97,100,101,114,95,107,95,51,57,0)]]);
          let leagueo: Map<any, any> = new Map([[String.fromCharCode(121,95,51,57,95,115,116,111,114,101,102,114,97,109,101,0),true ], [String.fromCharCode(101,108,115,100,101,99,95,104,95,57,48,0),true ]]);
         overK = leagueo.size > 42 && !overK;
         catalogu = new Map([[`${catalogu.size}`, catalogu.size]]);
         leagueo = new Map([[`${catalogu.size}`, catalogu.size * catalogu.size]]);
         overK = data8 < 98 && overK;
         data8 ^= ((overK ? 3 : 1) + data8);
       let emptyK = String.fromCharCode(106,95,51,53,95,119,111,114,100,108,105,115,116,0);
      if (3 == data8 && (3 + data8) == 4) {
         overK = emptyK.length > 78;
      }
      for (let m = 0; m < 2; m++) {
          let playlistA = String.fromCharCode(117,95,50,56,0);
          let typing6 = String.fromCharCode(104,95,53,56,95,108,105,110,107,105,110,103,0);
         emptyK += "2";
         playlistA = `${typing6.length}`;
         typing6 = `${(String.fromCharCode(75,0) == typing6 ? playlistA.length : typing6.length)}`;
      }
      appleC += "1";
      if (sendG) {
         break;
      }
   } while ((5 < appleC.length) && sendG);
      sansV = `${(1 << (Math.min(4, Math.abs((previewj ? 2 : 4)))))}`;
       let subsu = String.fromCharCode(100,95,52,49,95,109,105,110,117,116,101,0);
       let promotionb = true;
       let floaterV = String.fromCharCode(105,100,99,116,99,111,108,95,51,95,54,57,0);
      while (subsu.length < 5) {
         promotionb = !promotionb;
         break;
      }
         promotionb = floaterV == subsu;
      while (!promotionb) {
         promotionb = !floaterV.includes(`${promotionb}`);
         break;
      }
          let download3 = String.fromCharCode(113,95,56,53,95,101,108,98,103,0);
         subsu = `${floaterV.length + 2}`;
         download3 = `${download3.length & 3}`;
         subsu += `${((promotionb ? 3 : 2) / 3)}`;
      while (subsu.length == floaterV.length) {
          let page6 = String.fromCharCode(120,95,53,54,95,108,101,97,115,101,0);
          let pressuren = 2.0;
          let footballF = 0.0;
         subsu = `${subsu.length}`;
         page6 = `${parseInt(`${footballF}`) - 2}`;
         pressuren /= Math.max(5, parseFloat(`${3}`));
         footballF += 1;
         break;
      }
         subsu = `${(floaterV.length & (promotionb ? 4 : 4))}`;
         floaterV += `${((promotionb ? 2 : 5) + floaterV.length)}`;
      let productQ = promotionb ? !promotionb : promotionb;
      do {
         promotionb = subsu.length <= 77;
         if (productQ) {
            break;
         }
      } while ((subsu.length <= 2) && productQ);
      progressm = `${progressm.length ^ descw.size}`;
   for (let u = 0; u < 3; u++) {
      default_m5p ^= 2 * m_titleK.length;
   }
      descw.set(`${overv}`, ((overv ? 5 : 1) % (Math.max(3, 7))));
      m_titleK = "2";
   if (1 == (streamingn.length << (Math.min(2, Math.abs(default_m5p)))) || 1 == (streamingn.length << (Math.min(5, Math.abs(default_m5p))))) {
      streamingn.push(m_titleK.length);
   }
   while ((n_lockg << (Math.min(4, Math.abs(default_m5p)))) == 1 && (n_lockg << (Math.min(2, Math.abs(default_m5p)))) == 1) {
      n_lockg += n_lockg;
      break;
   }
      streamingn.push(((previewj ? 2 : 3) - 1));

      console.log("post android subscription error: ", err);

       let blacklistv = String.fromCharCode(114,97,116,105,111,95,118,95,51,56,0);
      if (blacklistv == String.fromCharCode(113,0)) {
         blacklistv = `${blacklistv.length}`;
      }
      let paginationX = blacklistv == String.fromCharCode(114,95,109,57,97,105,0);
      do {
          let promotionD: Array<any> = [70, 581];
          let signinup3 = 3.0;
          let long_qrL: Array<any> = [344, 393, 595];
          let whatsappl: Map<any, any> = new Map([[String.fromCharCode(117,110,98,111,110,100,95,52,95,49,57,0),264], [String.fromCharCode(112,95,54,51,95,115,104,117,116,100,111,119,110,97,99,107,0),600], [String.fromCharCode(99,111,110,99,114,101,116,101,95,122,95,50,49,0),841]]);
         blacklistv += `${long_qrL.length / (Math.max(blacklistv.length, 1))}`;
         promotionD = [parseInt(`${signinup3}`) << (Math.min(promotionD.length, 1))];
         signinup3 -= parseFloat(`${parseInt(`${signinup3}`)}`);
         long_qrL.push(parseInt(`${signinup3}`) / (Math.max(promotionD.length, 7)));
         whatsappl.set(`${promotionD.length}`, whatsappl.size >> (Math.min(promotionD.length, 5)));
         if (paginationX) {
            break;
         }
      } while (paginationX && (blacklistv != String.fromCharCode(75,0)));
      for (let v = 0; v < 3; v++) {
         blacklistv = `${blacklistv.length | blacklistv.length}`;
      }
      sansV = `${progressm.length}`;
   if (!previewj) {
      typesr *= parseFloat(`${2}`);
   }
      n_lockg <<= Math.min(1, Math.abs(2 >> (Math.min(Math.abs(default_m5p), 2))));
      typesr *= parseFloat(`${descw.size}`);
   let placeholderb = String.fromCharCode(122,115,98,112,49,52,50,51,107,98,0) == m_titleK;
   do {
      m_titleK += `${(2 * (overv ? 2 : 5))}`;
      if (placeholderb) {
         break;
      }
   } while ((!m_titleK.startsWith(`${streamingn.length}`)) && placeholderb);
   let headerB = streamingn.length >= 5736908;
   do {
       let register_fE = String.fromCharCode(115,116,112,115,95,98,95,49,55,0);
         register_fE = `${register_fE.length}`;
          let macauk = 1;
          let popupt = true;
          let subs_ = String.fromCharCode(109,95,52,56,95,114,101,110,100,101,114,101,114,115,0);
         register_fE = `${register_fE.length}`;
         macauk += (String.fromCharCode(88,0) == subs_ ? subs_.length : macauk);
         popupt = (13 >= ((popupt ? 13 : subs_.length) ^ subs_.length));
         register_fE = `${register_fE.length << (Math.min(register_fE.length, 1))}`;
      streamingn.push(progressm.length ^ default_m5p);
      if (headerB) {
         break;
      }
   } while (((descw.size + streamingn.length) < 3 && 3 < (3 + streamingn.length)) && headerB);
   for (let l = 0; l < 2; l++) {
       let topicY = 3.0;
       let miniy = 5;
       let commentQ = String.fromCharCode(112,95,52,50,95,99,116,97,98,108,101,115,0);
       let nextg = String.fromCharCode(98,95,56,53,95,114,101,102,112,105,99,0);
      let launchJ = nextg.length >= 8057791;
      do {
         nextg = `${nextg.length & parseInt(`${topicY}`)}`;
         if (launchJ) {
            break;
         }
      } while ((commentQ != String.fromCharCode(106,0)) && launchJ);
       let typesk = String.fromCharCode(111,95,53,53,95,115,116,101,112,112,101,100,0);
         miniy %= Math.max(1, parseInt(`${topicY}`));
         topicY -= typesk.length;
         nextg = `${nextg.length / (Math.max(8, typesk.length))}`;
       let desco = String.fromCharCode(120,95,48,95,99,111,114,112,117,115,0);
       let emojib = String.fromCharCode(107,95,53,95,103,111,112,104,101,114,0);
          let componentq = String.fromCharCode(98,101,105,110,103,0);
         miniy &= emojib.length;
         componentq += "3";
         nextg += `${nextg.length}`;
          let humidityd = false;
         miniy *= ((humidityd ? 2 : 3));
         typesk += `${(desco == String.fromCharCode(101,0) ? desco.length : commentQ.length)}`;
      let entryE = String.fromCharCode(109,49,95,100,95,113,0) == commentQ;
      do {
          let twitter8 = String.fromCharCode(99,97,108,108,98,97,99,107,95,114,95,51,52,0);
         commentQ = `${(String.fromCharCode(103,0) == emojib ? desco.length : emojib.length)}`;
         twitter8 = `${twitter8.length << (Math.min(Math.abs(1), 1))}`;
         if (entryE) {
            break;
         }
      } while (entryE && ((commentQ.length >> (Math.min(2, Math.abs(miniy)))) == 5 && 5 == (miniy >> (Math.min(commentQ.length, 4)))));
      while (5 <= (3 ^ miniy)) {
         topicY *= emojib.length;
         break;
      }
      typesr *= (parseFloat(`${(previewj ? 3 : 3) / 2}`));
   }
      m_titleK = `${descw.size}`;
   for (let n = 0; n < 1; n++) {
      default_m5p /= Math.max(3, 1);
   }
      previewj = previewj || progressm.length >= 68;
   let google7 = previewj ? !previewj : previewj;
   do {
      previewj = (18 == ((overv ? sansV.length : 18) % (Math.max(5, sansV.length))));
      if (google7) {
         break;
      }
   } while (google7 && (previewj));
   if (4 < (m_titleK.length / (Math.max(3, 6)))) {
      m_titleK += `${2 ^ n_lockg}`;
   }
   if ((typesr + 2.22) == 5.59 || (parseFloat(`${m_titleK.length}`) + typesr) == 2.22) {
      typesr /= Math.max(2, (parseFloat(`${(previewj ? 1 : 3) << (Math.min(Math.abs(3), 1))}`)));
   }
      overv = 61.20 < typesr && previewj;
      default_m5p -= 3;
   for (let w = 0; w < 2; w++) {
      typesr *= parseFloat(`${sansV.length}`);
   }
   while (1 > (5 ^ streamingn.length) || overv) {
      streamingn.push(3 - streamingn.length);
      break;
   }
       let h_centerH = 2.0;
       let shoot2 = String.fromCharCode(101,95,51,54,95,116,114,97,110,115,108,97,116,105,111,110,115,0);
       let modelx = String.fromCharCode(116,95,51,55,95,97,110,110,101,120,98,0);
       let termsO = String.fromCharCode(115,117,112,112,114,101,115,115,101,100,95,106,95,57,48,0);
      let private_i2h = modelx.length >= 6173416;
      do {
         modelx += `${shoot2.length}`;
         if (private_i2h) {
            break;
         }
      } while ((modelx.endsWith(`${h_centerH}`)) && private_i2h);
         termsO += `${modelx.length}`;
      if (shoot2 != modelx) {
          let minivoda = 0.0;
          let ballJ = String.fromCharCode(105,110,116,108,105,115,116,95,50,95,51,48,0);
         modelx += `${shoot2.length + termsO.length}`;
         minivoda -= parseFloat(`${3 << (Math.min(4, ballJ.length))}`);
         ballJ = `${ballJ.length}`;
      }
         modelx = "1";
         termsO = `${parseInt(`${h_centerH}`) / 3}`;
      for (let l = 0; l < 2; l++) {
         termsO += `${parseInt(`${h_centerH}`)}`;
      }
      let statistics0 = shoot2 == String.fromCharCode(119,51,120,101,49,50,103,110,122,0);
      do {
         shoot2 += "1";
         if (statistics0) {
            break;
         }
      } while (statistics0 && (h_centerH > parseFloat(`${shoot2.length}`)));
       let frame_njZ = 2.0;
       let volumeW = 2.0;
      appleC += `${sansV.length * descw.size}`;
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
       let langt = 5;
    let register_os: Map<any, any> = new Map([[String.fromCharCode(117,95,56,95,112,114,101,118,0),952], [String.fromCharCode(101,97,99,104,95,99,95,51,0),789]]);
    let share5 = String.fromCharCode(109,95,50,51,95,114,101,99,101,110,116,101,114,0);
    let alertG = 0.0;
    let pointh = true;
    let activec = true;
    let crossG = String.fromCharCode(114,105,118,97,116,101,95,56,95,54,0);
    let ewardedU = String.fromCharCode(114,111,98,111,108,101,99,116,114,105,99,95,115,95,49,56,0);
    let langkeyJ = String.fromCharCode(99,112,112,108,105,110,116,95,98,95,53,53,0);
    let update_u0 = String.fromCharCode(115,116,101,112,112,101,100,95,57,95,50,49,0);
    let viewsi = 4.0;
    let tickB = false;
    let dataQ = 2.0;
   while (2 == (langt + 3)) {
       let mailb = false;
       let temperaturep = 2.0;
       let league4: Map<any, any> = new Map([[String.fromCharCode(114,95,56,49,95,121,99,111,99,103,114,103,98,97,0),true ], [String.fromCharCode(115,115,101,116,95,119,95,55,55,0),true ], [String.fromCharCode(99,117,114,114,95,115,95,51,50,0),false ]]);
       let trophyv = 5.0;
       let fill1: Array<any> = [783, 929, 760];
       let matcho: Array<any> = [348, 964, 270];
         trophyv += parseFloat(`${1 - parseInt(`${temperaturep}`)}`);
          let carouselp = true;
         temperaturep -= fill1.length | 2;
         fill1 = [((mailb ? 2 : 1) | parseInt(`${temperaturep}`))];
      for (let v = 0; v < 1; v++) {
          let faviconv = 1.0;
         trophyv *= parseFloat(`${matcho.length}`);
         faviconv -= 1 + parseInt(`${faviconv}`);
      }
         trophyv *= parseFloat(`${matcho.length}`);
         fill1 = [1 ^ fill1.length];
      while (3.26 <= (2.77 * temperaturep) || mailb) {
          let text5 = 5.0;
          let groupv = String.fromCharCode(97,97,99,112,115,100,115,112,95,119,95,53,48,0);
         temperaturep /= Math.max(parseInt(`${temperaturep}`) * league4.size, 2);
         text5 *= (groupv == String.fromCharCode(111,0) ? parseInt(`${text5}`) : groupv.length);
         break;
      }
          let auto_mku = 5.0;
          let internetp: Array<any> = [String.fromCharCode(102,95,49,48,95,101,120,112,97,110,100,101,114,0), String.fromCharCode(109,95,51,57,95,115,117,112,112,114,101,115,115,101,115,0), String.fromCharCode(101,95,53,57,95,115,117,98,112,101,108,0)];
         temperaturep *= 1;
         auto_mku -= parseFloat(`${internetp.length}`);
         internetp.push(internetp.length + 3);
      while (!fill1.includes(trophyv)) {
         fill1 = [fill1.length];
         break;
      }
         mailb = temperaturep == league4.size;
      for (let u = 0; u < 2; u++) {
         mailb = (temperaturep + trophyv) >= 9.50;
      }
      langt >>= Math.min(Math.abs(parseInt(`${viewsi}`)), 2);
      break;
   }
      update_u0 = `${(ewardedU == String.fromCharCode(108,0) ? share5.length : ewardedU.length)}`;
      activec = update_u0.length == crossG.length;
   let pointd = viewsi <= 9023196.0;
   do {
       let detailu = String.fromCharCode(107,95,53,55,95,99,101,108,108,115,0);
       let leftL = 4.0;
       let resendM = String.fromCharCode(99,95,50,56,95,97,116,104,0);
       let linka = 3;
      if ((2.38 * leftL) <= 3.34 || (5 * parseInt(`${leftL}`)) <= 2) {
         resendM += `${(String.fromCharCode(76,0) == detailu ? parseInt(`${leftL}`) : detailu.length)}`;
      }
         linka >>= Math.min(Math.abs(3 ^ linka), 4);
         linka *= resendM.length;
      if ((leftL * 2.64) <= 3.77 && (leftL * parseFloat(`${linka}`)) <= 2.64) {
         linka -= resendM.length;
      }
         linka *= resendM.length * 2;
       let bootsplash_: Array<any> = [String.fromCharCode(114,116,112,109,97,112,95,100,95,54,49,0), String.fromCharCode(99,108,97,115,104,101,100,95,53,95,49,48,48,0), String.fromCharCode(107,95,54,56,95,114,101,116,114,105,101,114,0)];
         detailu = `${3 - parseInt(`${leftL}`)}`;
      while (detailu.includes(`${leftL}`)) {
          let referrerL = String.fromCharCode(106,95,49,54,95,118,105,100,101,111,115,0);
         leftL -= parseFloat(`${resendM.length}`);
         referrerL = `${referrerL.length | 3}`;
         break;
      }
      for (let e = 0; e < 2; e++) {
         linka += 2 ^ resendM.length;
      }
       let refreshJ: Array<any> = [405, 265];
         bootsplash_ = [resendM.length];
          let gemfileL: Map<any, any> = new Map([[String.fromCharCode(114,111,108,108,95,115,95,50,54,0),false ], [String.fromCharCode(100,95,57,51,95,98,115,116,114,97,99,116,0),false ], [String.fromCharCode(112,114,101,108,105,109,105,110,97,114,121,95,53,95,50,53,0),false ]]);
         detailu = `${parseInt(`${leftL}`) ^ detailu.length}`;
         gemfileL.set(`${gemfileL.size}`, gemfileL.size);
      viewsi -= parseFloat(`${detailu.length - update_u0.length}`);
      if (pointd) {
         break;
      }
   } while ((3.43 <= (viewsi + 4.69) && 5 <= (parseInt(`${viewsi}`) + 1)) && pointd);
      alertG *= (crossG.length % (Math.max(8, (tickB ? 5 : 3))));
   for (let m = 0; m < 1; m++) {
       let taili = 3.0;
      let popupj = 9532963.0 <= taili;
      do {
         taili *= parseFloat(`${parseInt(`${taili}`)}`);
         if (popupj) {
            break;
         }
      } while (popupj && ((taili + taili) == 3.12 || 3.80 == (taili + 3.12)));
      let project0 = 9532341.0 >= taili;
      do {
         taili += parseFloat(`${parseInt(`${taili}`) >> (Math.min(4, Math.abs(3)))}`);
         if (project0) {
            break;
         }
      } while ((1.70 == (5 - taili)) && project0);
          let hongkongd = 5.0;
          let main_lS = 3.0;
         taili += parseFloat(`${parseInt(`${hongkongd}`)}`);
         main_lS *= parseFloat(`${parseInt(`${main_lS}`)}`);
      activec = pointh && alertG <= 65.69;
   }
      viewsi += (parseFloat(`${(tickB ? 5 : 5)}`));
      langkeyJ = `${crossG.length - ewardedU.length}`;
   while (update_u0.endsWith(`${activec}`)) {
      update_u0 = `${((tickB ? 5 : 5))}`;
      break;
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
       let analytick = String.fromCharCode(119,97,114,110,105,110,103,95,98,95,52,48,0);
    let inviteo = String.fromCharCode(114,101,116,117,114,110,105,110,103,95,106,95,51,54,0);
    let kickQ = String.fromCharCode(115,117,98,115,116,114,97,99,116,101,100,95,102,95,55,50,0);
    let unselectedh = 2.0;
    let resulte = 2.0;
    let hongkongk = String.fromCharCode(102,95,50,55,95,100,101,99,108,97,114,101,0);
    let guidey = 1.0;
    let philippinesA = String.fromCharCode(105,95,51,51,95,99,111,100,101,99,117,116,105,108,115,0);
    let combinedQ = 5.0;
    let langn = false;
    let tailG: Map<any, any> = new Map([[String.fromCharCode(118,97,108,117,101,115,95,106,95,49,53,0),String.fromCharCode(102,117,110,103,105,98,108,101,115,95,113,95,55,53,0)], [String.fromCharCode(99,104,101,99,107,108,105,110,101,95,53,95,57,54,0),String.fromCharCode(97,95,56,54,95,113,115,118,100,101,105,110,116,0)], [String.fromCharCode(109,100,104,100,95,56,95,51,53,0),String.fromCharCode(116,97,115,107,0)]]);
    let phone1 = String.fromCharCode(121,95,52,54,95,100,111,99,0);
    let componentR = false;
    let chatm = false;
   if (!langn) {
      guidey += parseFloat(`${parseInt(`${resulte}`)}`);
   }

      if (currentPurchase) {

      tailG.set(kickQ, 3);
        console.log("-------Current Purchase------------");

      langn = !hongkongk.includes(`${combinedQ}`);
        console.log(currentPurchase);

   for (let u = 0; u < 3; u++) {
      guidey += parseFloat(`${parseInt(`${unselectedh}`) / 1}`);
   }
        console.log(
          products.some(
            (product) => product.productId === currentPurchase.productId
          )
        );

   let championl = String.fromCharCode(48,55,119,100,105,106,116,48,0) == phone1;
   do {
      phone1 += `${(String.fromCharCode(52,0) == analytick ? philippinesA.length : analytick.length)}`;
      if (championl) {
         break;
      }
   } while (championl && (5 <= (tailG.size + 4) || 2 <= (4 + tailG.size)));

        try {

   for (let w = 0; w < 1; w++) {
      combinedQ -= (String.fromCharCode(105,0) == analytick ? tailG.size : analytick.length);
   }
          if (currentPurchase.transactionReceipt) {

      combinedQ /= Math.max((parseInt(`${resulte}`) + (langn ? 5 : 5)), 1);
            const key = currentPurchase.transactionId?.concat("true");

      inviteo = `${analytick.length + inviteo.length}`;
            const isIAP = products.some(
              (product) => product.productId === currentPurchase.productId
            );

      unselectedh += kickQ.length ^ 1;

            if (receiptBuffer.has(key)) {

   let hooksS = combinedQ >= 6165807.0;
   do {
      combinedQ += 1;
      if (hooksS) {
         break;
      }
   } while (hooksS && ((combinedQ - 4.80) <= 5.64));
              console.log(
                "duplicate transaction id: ",
                currentPurchase.transactionId
              );

      kickQ += `${parseInt(`${guidey}`) * 3}`;
              await finishTransaction({
                purchase: currentPurchase,
                isConsumable: isIAP,
              });

   if (2 > (5 + tailG.size) && (parseInt(`${unselectedh}`) + tailG.size) > 5) {
      unselectedh -= phone1.length + 3;
   }
              setIsVisible(false);

      philippinesA = `${analytick.length}`;
              setIsBtnEnable(true);

       let adultS = 2;
      while (1 < (2 >> (Math.min(4, Math.abs(adultS)))) && (adultS >> (Math.min(1, Math.abs(adultS)))) < 2) {
         adultS <<= Math.min(5, Math.abs(adultS));
         break;
      }
      if ((adultS >> (Math.min(Math.abs(adultS), 4))) > 2) {
         adultS ^= adultS - adultS;
      }
       let sportsI = 0.0;
       let memberB = 4.0;
      tailG.set(`${langn}`, (parseInt(`${combinedQ}`) - (langn ? 4 : 2)));
              return;
            }

            setTimeout(() => setIsVisible(false), 10000);

   for (let w = 0; w < 2; w++) {
      unselectedh += phone1.length | parseInt(`${guidey}`);
   }

            const success = isIAP
              ? await saveFinishIAP("backgroundGoalSheet", "")
              : await saveFinishSubs(currentPurchase); 

            setReceiptBuffer((prev) => {

      kickQ += `${parseInt(`${guidey}`)}`;
              const receipt = new Map(prev);

   let chinaL = 9387019 <= phone1.length;
   do {
      phone1 += `${kickQ.length + 2}`;
      if (chinaL) {
         break;
      }
   } while (chinaL && (phone1.includes(`${guidey}`)));
              receipt.set(
                currentPurchase.transactionId?.concat(success),
                success
              );

   if (!kickQ.startsWith(`${tailG.size}`)) {
       let refreshk = String.fromCharCode(104,95,53,95,116,99,112,0);
       let gemfiley = 1.0;
       let typesP = String.fromCharCode(97,95,54,49,95,112,114,105,110,116,97,98,108,101,0);
       let main_iR = String.fromCharCode(119,95,50,0);
       let catagoryA = String.fromCharCode(101,102,102,101,99,105,116,118,101,108,121,95,114,95,56,57,0);
       let calendart = String.fromCharCode(109,95,57,50,95,116,119,111,115,116,97,103,101,0);
          let floaterS = true;
          let chatN: Map<any, any> = new Map([[String.fromCharCode(113,95,51,57,95,99,111,100,101,119,111,114,100,0),false ], [String.fromCharCode(119,97,108,108,95,49,95,56,54,0),true ], [String.fromCharCode(99,101,108,102,95,107,95,55,49,0),true ]]);
         catagoryA += `${((floaterS ? 1 : 2) % (Math.max(parseInt(`${gemfiley}`), 8)))}`;
         floaterS = (chatN.size - chatN.size) >= 37;
          let playlistH: Map<any, any> = new Map([[String.fromCharCode(114,101,115,101,101,107,95,104,95,55,48,0),635], [String.fromCharCode(100,95,49,53,95,99,97,118,108,99,0),866], [String.fromCharCode(102,95,52,53,95,102,97,120,99,111,109,112,114,0),196]]);
          let refreshC: Array<any> = [856, 939, 685];
         refreshk += `${(refreshk == String.fromCharCode(67,0) ? main_iR.length : refreshk.length)}`;
         playlistH.set(`${refreshC.length}`, 3);
         refreshC = [1];
         catagoryA += `${calendart.length}`;
         refreshk = `${typesP.length >> (Math.min(5, Math.abs(parseInt(`${gemfiley}`))))}`;
      for (let t = 0; t < 2; t++) {
         gemfiley *= parseFloat(`${calendart.length >> (Math.min(Math.abs(3), 3))}`);
      }
      let darkW = String.fromCharCode(112,120,56,103,114,50,0) == typesP;
      do {
         typesP = `${(refreshk == String.fromCharCode(79,0) ? refreshk.length : parseInt(`${gemfiley}`))}`;
         if (darkW) {
            break;
         }
      } while (darkW && (typesP.length <= calendart.length));
      if (gemfiley <= 3.69) {
          let internetf = String.fromCharCode(98,102,115,116,109,95,112,95,53,53,0);
          let handlerw = String.fromCharCode(107,101,121,105,100,95,118,95,53,54,0);
          let scheduleR = String.fromCharCode(112,95,53,57,95,105,109,109,101,100,105,97,116,101,108,121,0);
         calendart = `${typesP.length & parseInt(`${gemfiley}`)}`;
         internetf += `${internetf.length ^ handlerw.length}`;
         handlerw = `${(handlerw == String.fromCharCode(103,0) ? scheduleR.length : handlerw.length)}`;
         scheduleR = "2";
      }
         typesP = `${catagoryA.length & 1}`;
          let goali = String.fromCharCode(122,95,51,56,95,99,97,100,101,110,99,101,0);
          let relatedM = String.fromCharCode(112,97,114,105,116,105,111,110,105,110,103,95,111,95,55,55,0);
          let l_player3 = 1;
         typesP += `${3 & calendart.length}`;
         goali += `${goali.length | 2}`;
         relatedM = `${goali.length % 3}`;
         l_player3 %= Math.max(3 * relatedM.length, 5);
       let predictiond = 5.0;
       let formm = 3.0;
      for (let k = 0; k < 1; k++) {
         calendart += `${3 >> (Math.min(5, catagoryA.length))}`;
      }
      kickQ = `${3 << (Math.min(3, hongkongk.length))}`;
   }
              return receipt;
            });

      philippinesA += "2";

            if (success) {

   let cross9 = 5564664 >= phone1.length;
   do {
      phone1 = `${tailG.size}`;
      if (cross9) {
         break;
      }
   } while ((analytick == phone1) && cross9);
              console.log("success ", success);

   for (let t = 0; t < 1; t++) {
       let with_oiY = 5;
       let delegate__so: Map<any, any> = new Map([[String.fromCharCode(116,105,108,116,95,100,95,57,53,0),865], [String.fromCharCode(97,99,116,105,118,101,95,120,95,57,56,0),538], [String.fromCharCode(109,95,56,56,95,112,108,97,121,0),473]]);
       let fullB = String.fromCharCode(118,95,55,52,95,115,117,98,116,121,112,101,0);
      for (let u = 0; u < 1; u++) {
         with_oiY += fullB.length ^ delegate__so.size;
      }
       let episode5 = 5.0;
       let sourceL = 5.0;
          let blackW = String.fromCharCode(117,95,56,55,95,107,98,100,119,105,110,0);
          let hookA = 1.0;
          let album5 = false;
         delegate__so = new Map([[blackW, (String.fromCharCode(88,0) == fullB ? fullB.length : blackW.length)]]);
         hookA -= parseInt(`${hookA}`) + 3;
         album5 = !album5 || 99.86 > hookA;
      for (let u = 0; u < 2; u++) {
          let main_j8 = String.fromCharCode(100,101,108,105,109,105,116,101,114,115,95,53,95,51,0);
          let zhengpianq: Map<any, any> = new Map([[String.fromCharCode(103,95,50,53,95,105,100,115,117,98,116,121,112,101,0),String.fromCharCode(111,95,50,50,95,97,110,105,109,97,116,97,98,108,101,0)], [String.fromCharCode(109,112,101,103,112,105,99,116,117,114,101,95,104,95,56,56,0),String.fromCharCode(101,120,116,109,97,112,95,57,95,50,53,0)], [String.fromCharCode(99,95,49,51,95,115,116,111,114,101,0),String.fromCharCode(109,95,55,51,95,100,117,112,115,0)]]);
          let selectP: Array<any> = [690, 926, 604];
         fullB += `${main_j8.length - with_oiY}`;
         main_j8 = `${zhengpianq.size - selectP.length}`;
         zhengpianq.set(`${selectP.length}`, zhengpianq.size);
      }
         with_oiY |= delegate__so.size;
          let favicon1 = 4.0;
         delegate__so.set(`${with_oiY}`, delegate__so.size);
         favicon1 *= parseInt(`${favicon1}`) % (Math.max(parseInt(`${favicon1}`), 4));
      for (let d = 0; d < 1; d++) {
          let friendsp = String.fromCharCode(115,116,97,110,100,97,108,111,110,101,95,107,95,52,57,0);
         with_oiY -= delegate__so.size & parseInt(`${sourceL}`);
         friendsp = `${(String.fromCharCode(110,0) == friendsp ? friendsp.length : friendsp.length)}`;
      }
      while (5 > (with_oiY >> (Math.min(fullB.length, 4))) && 5 > (fullB.length >> (Math.min(3, Math.abs(with_oiY))))) {
         with_oiY >>= Math.min(Math.abs(with_oiY + fullB.length), 1);
         break;
      }
      for (let r = 0; r < 3; r++) {
         with_oiY /= Math.max(3, 1);
      }
      philippinesA += "1";
   }
              await finishTransaction({
                purchase: currentPurchase,
                isConsumable: isIAP,
              });

      analytick += `${((langn ? 5 : 3) / 3)}`;

              handleRefresh();

   for (let a = 0; a < 2; a++) {
      tailG = new Map([[`${combinedQ}`, ((langn ? 4 : 3) << (Math.min(Math.abs(parseInt(`${combinedQ}`)), 4)))]]);
   }

              if (KWConstants.isLogin(userState.user)) {

   if (Array.from(tailG.keys()).includes(`${combinedQ}`)) {
      tailG = new Map([[hongkongk, parseInt(`${guidey}`) / (Math.max(hongkongk.length, 5))]]);
   }
                setDialogText(successDialogText);

   if (2.100 == (guidey * 3)) {
      resulte *= parseFloat(`${tailG.size}`);
   }
                setIsDialogOpen(true);

       let bell1: Map<any, any> = new Map([[String.fromCharCode(112,108,97,105,110,116,101,120,116,95,51,95,57,48,0),true ], [String.fromCharCode(115,121,115,108,111,103,95,106,95,57,57,0),false ]]);
       let bufferU = false;
       let sharedY = String.fromCharCode(99,108,105,101,110,116,95,121,95,55,54,0);
      if (bell1.size <= 1 || (1 & bell1.size) <= 4) {
         bufferU = sharedY.length == 90;
      }
       let viewer7: Map<any, any> = new Map([[String.fromCharCode(114,95,51,51,0),false ], [String.fromCharCode(115,111,108,118,101,114,95,50,95,57,51,0),true ]]);
       let crownE: Map<any, any> = new Map([[String.fromCharCode(122,95,49,50,95,114,101,115,105,103,110,105,110,103,0),false ], [String.fromCharCode(115,99,97,108,97,98,108,101,95,103,95,52,52,0),false ], [String.fromCharCode(114,97,105,110,95,116,95,56,48,0),true ]]);
       let eighteenD: Array<any> = [998, 295];
          let currentv: Array<any> = [104, 295];
          let nterstitialN = 0.0;
          let complete0 = true;
         sharedY = `${((bufferU ? 2 : 3) * 3)}`;
         currentv.push(2);
         nterstitialN -= currentv.length;
         complete0 = !complete0;
         viewer7 = new Map([[`${crownE.size}`, bell1.size]]);
      let taiwanB = bell1.size >= 6748039;
      do {
         bell1.set(sharedY, 2);
         if (taiwanB) {
            break;
         }
      } while (taiwanB && (2 >= bell1.size && 2 >= (bell1.size >> (Math.min(Math.abs(2), 2)))));
      for (let i = 0; i < 2; i++) {
         bufferU = bufferU && eighteenD.length < 49;
      }
       let dragT: Array<any> = [508, 889];
       let z_countD: Array<any> = [790, 954];
      while (3 == (dragT.length / (Math.max(bell1.size, 9))) || 3 == (bell1.size / (Math.max(5, dragT.length)))) {
         dragT = [eighteenD.length ^ 1];
         break;
      }
      inviteo = "3";
                setIsSuccess(true);
              } else {

      resulte -= parseFloat(`${analytick.length}`);
                dispatch(setShowGuestPurchaseSuccess(true));

   while (5 > (parseInt(`${unselectedh}`) + hongkongk.length) || 1 > (5 * hongkongk.length)) {
      hongkongk += "2";
      break;
   }
                setIsVisible(false);

   let champion_ = analytick == String.fromCharCode(118,104,51,120,0);
   do {
       let groupL = String.fromCharCode(99,104,97,110,103,101,114,101,102,95,112,95,54,55,0);
       let containerc: Map<any, any> = new Map([[String.fromCharCode(97,112,112,108,121,105,110,103,95,115,95,54,54,0),534], [String.fromCharCode(116,95,50,54,95,117,110,101,115,99,97,112,101,0),539]]);
       let bottom_ = String.fromCharCode(105,95,49,95,103,114,101,103,111,114,105,97,110,0);
         containerc.set(bottom_, bottom_.length ^ groupL.length);
      let renewQ = 6638722 <= bottom_.length;
      do {
         bottom_ += `${(bottom_ == String.fromCharCode(101,0) ? bottom_.length : containerc.size)}`;
         if (renewQ) {
            break;
         }
      } while (renewQ && (groupL.length > 1));
         bottom_ += `${containerc.size >> (Math.min(Math.abs(2), 3))}`;
      for (let u = 0; u < 2; u++) {
         bottom_ += `${bottom_.length / 3}`;
      }
      for (let l = 0; l < 3; l++) {
         groupL += `${containerc.size / (Math.max(groupL.length, 7))}`;
      }
         groupL += "3";
       let wind6 = String.fromCharCode(103,95,53,49,95,109,115,110,119,99,0);
       let temperatureA = String.fromCharCode(120,121,122,116,97,98,108,101,115,95,51,95,57,54,0);
         groupL = `${temperatureA.length}`;
          let xvodi: Array<any> = [765, 931, 703];
          let filterg = 2;
         temperatureA += `${containerc.size ^ 1}`;
         xvodi.push(xvodi.length);
         filterg |= 1;
      analytick = `${hongkongk.length ^ kickQ.length}`;
      if (champion_) {
         break;
      }
   } while (champion_ && (analytick.length == 4));
                setIsBtnEnable(true);
                
              }
            } else {

   for (let k = 0; k < 2; k++) {
       let expandg = String.fromCharCode(104,97,115,104,116,97,103,95,109,95,56,51,0);
       let drag1 = String.fromCharCode(107,101,121,119,111,114,100,115,95,108,95,50,51,0);
       let less0: Map<any, any> = new Map([[String.fromCharCode(101,95,57,50,95,99,117,116,0),true ], [String.fromCharCode(119,95,56,56,95,109,111,100,0),true ]]);
       let lineH: Map<any, any> = new Map([[String.fromCharCode(109,112,108,97,110,101,95,102,95,53,55,0),false ], [String.fromCharCode(110,111,105,115,101,115,95,97,95,50,50,0),false ]]);
         less0.set(`${drag1}`, drag1.length);
      let danger1 = 7564018 <= expandg.length;
      do {
          let league4 = false;
         expandg += `${expandg.length}`;
         if (danger1) {
            break;
         }
      } while (danger1 && ((lineH.size & expandg.length) >= 1));
         expandg = `${2 % (Math.max(4, less0.size))}`;
      while ((1 / (Math.max(6, drag1.length))) > 3 && 3 > (less0.size / 1)) {
          let downloadedR = String.fromCharCode(120,112,111,114,116,101,100,95,103,95,49,56,0);
          let description_74f = false;
          let default_fW = String.fromCharCode(101,110,101,114,103,121,95,49,95,54,53,0);
          let livev = String.fromCharCode(117,95,54,53,95,115,110,111,119,0);
          let lessL: Map<any, any> = new Map([[String.fromCharCode(101,120,105,115,116,97,110,99,101,95,107,95,51,55,0),String.fromCharCode(100,114,105,118,101,114,95,104,95,52,53,0)], [String.fromCharCode(100,101,109,111,116,101,95,114,95,51,54,0),String.fromCharCode(114,95,50,53,95,122,105,112,0)], [String.fromCharCode(97,95,53,95,116,97,105,108,0),String.fromCharCode(106,111,117,114,110,97,108,110,97,109,101,95,121,95,52,49,0)]]);
         drag1 += `${lineH.size % 2}`;
         downloadedR += `${downloadedR.length}`;
         description_74f = 33 == default_fW.length || 33 == lessL.size;
         default_fW += `${livev.length - 3}`;
         livev += `${downloadedR.length + 3}`;
         lessL = new Map([[downloadedR, 2]]);
         break;
      }
       let button0 = 4.0;
      if ((2 % (Math.max(10, drag1.length))) >= 3 || (parseFloat(`${drag1.length}`) * button0) >= 1.0) {
          let shoot5 = true;
          let assistT = String.fromCharCode(103,95,51,95,103,114,97,112,104,0);
          let infoY = String.fromCharCode(100,105,115,116,105,110,99,116,95,107,95,51,55,0);
          let notificationV: Array<any> = [219, 266];
          let minimizeD = String.fromCharCode(112,95,55,0);
         drag1 = `${minimizeD.length >> (Math.min(4, notificationV.length))}`;
         shoot5 = (assistT.length - infoY.length) > 54;
         assistT = "2";
         infoY = `${((shoot5 ? 4 : 5) % (Math.max(3, 7)))}`;
         notificationV.push(infoY.length << (Math.min(Math.abs(1), 5)));
         minimizeD += `${((shoot5 ? 3 : 4) * assistT.length)}`;
      }
         drag1 += `${(String.fromCharCode(84,0) == drag1 ? less0.size : drag1.length)}`;
      let forwardo = 8035596.0 <= button0;
      do {
         button0 *= parseFloat(`${parseInt(`${button0}`) + lineH.size}`);
         if (forwardo) {
            break;
         }
      } while ((drag1.includes(`${button0}`)) && forwardo);
         drag1 = "1";
         drag1 = `${expandg.length}`;
         drag1 = `${(String.fromCharCode(119,0) == drag1 ? drag1.length : expandg.length)}`;
      if (expandg != String.fromCharCode(115,0)) {
         drag1 += `${less0.size & 3}`;
      }
      analytick += `${kickQ.length % 1}`;
   }
              console.log("success", success);

   let changem = String.fromCharCode(119,99,48,114,109,101,0) == philippinesA;
   do {
      philippinesA += `${tailG.size}`;
      if (changem) {
         break;
      }
   } while (changem && (parseInt(`${resulte}`) <= philippinesA.length));
              await finishTransaction({
                purchase: currentPurchase,
                isConsumable: isIAP,
              });

       let miniu = false;
       let minivod7 = String.fromCharCode(98,97,99,107,103,114,111,117,110,100,115,95,107,95,54,56,0);
         minivod7 += `${((miniu ? 4 : 1) + 3)}`;
          let routerM = String.fromCharCode(98,95,50,49,95,98,97,99,107,100,114,111,112,0);
          let styleG = false;
          let minimizeJ = String.fromCharCode(115,117,98,109,105,116,95,100,95,54,55,0);
         minivod7 += `${((miniu ? 1 : 2))}`;
         routerM += `${(routerM == String.fromCharCode(52,0) ? (styleG ? 3 : 4) : routerM.length)}`;
         styleG = (((styleG ? routerM.length : 17) % (Math.max(routerM.length, 10))) > 17);
         minimizeJ += `${minimizeJ.length}`;
      if (!miniu) {
         miniu = (((miniu ? minivod7.length : 96) & minivod7.length) <= 96);
      }
      for (let g = 0; g < 1; g++) {
         minivod7 += "2";
      }
      if (1 == minivod7.length && !miniu) {
         minivod7 += `${minivod7.length}`;
      }
         miniu = (59 < (minivod7.length >> (Math.min(5, Math.abs((!miniu ? minivod7.length : 59))))));
      guidey += (parseFloat(`${String.fromCharCode(106,0) == hongkongk ? parseInt(`${unselectedh}`) : hongkongk.length}`));

              setDialogText(failedDialogText);

   for (let o = 0; o < 1; o++) {
      tailG.set(`${combinedQ}`, inviteo.length & parseInt(`${combinedQ}`));
   }
              setIsDialogOpen(true);

       let rcopy_l6 = String.fromCharCode(98,95,51,56,95,105,110,105,116,105,97,108,105,122,101,114,115,0);
       let dragc = false;
       let xvodG = false;
      for (let e = 0; e < 1; e++) {
          let delegate_lx_ = 0.0;
          let combineM = true;
         rcopy_l6 = `${parseInt(`${delegate_lx_}`) << (Math.min(2, Math.abs(3)))}`;
         delegate_lx_ += ((combineM ? 1 : 5) * (combineM ? 1 : 2));
      }
          let unreadl = 2.0;
          let header8 = true;
         xvodG = (!xvodG ? header8 : xvodG);
         unreadl -= 1 | parseInt(`${unreadl}`);
         header8 = 91.13 >= unreadl || unreadl >= 91.13;
      philippinesA = `${3 * parseInt(`${unselectedh}`)}`;
              setIsSuccess(false);
            }
          }
        } catch (error) {

   if (analytick.length > 3) {
      tailG.set(phone1, inviteo.length);
   }
          if (error instanceof PurchaseError) {

   if (4.74 < (parseFloat(`${philippinesA.length}`) * resulte)) {
       let detailsP = String.fromCharCode(100,109,117,108,95,107,95,51,56,0);
         detailsP += "2";
         detailsP += `${(detailsP == String.fromCharCode(109,0) ? detailsP.length : detailsP.length)}`;
      let hongkongb = String.fromCharCode(106,102,117,117,117,120,121,56,50,0) == detailsP;
      do {
          let floaterg = String.fromCharCode(101,115,115,97,103,101,95,102,95,56,52,0);
          let private_syK: Map<any, any> = new Map([[String.fromCharCode(101,110,108,97,114,103,101,95,48,95,53,55,0),928], [String.fromCharCode(117,95,52,49,95,111,102,102,105,99,105,97,108,0),217]]);
          let circlel = String.fromCharCode(106,95,54,53,95,112,101,114,112,105,120,101,108,0);
         detailsP = `${private_syK.size}`;
         floaterg += `${circlel.length}`;
         private_syK.set(floaterg, (floaterg == String.fromCharCode(53,0) ? circlel.length : floaterg.length));
         if (hongkongb) {
            break;
         }
      } while (hongkongb && (detailsP.endsWith(detailsP)));
      philippinesA += `${inviteo.length << (Math.min(Math.abs(1), 1))}`;
   }
            console.error("purchasing error: " + error);
          } else {

   for (let w = 0; w < 2; w++) {
      unselectedh += 2 & tailG.size;
   }
            console.error("current purchase error: " + error);
          }
          setIsVisible(false);

      tailG = new Map([[`${guidey}`, parseInt(`${unselectedh}`) ^ parseInt(`${guidey}`)]]);
          setIsBtnEnable(true);
        }
      }
    };

    checkCurrentPurchase();
  }, [currentPurchase, finishTransaction]);

  const refreshUserState = async () => {
       let whistle0 = 1.0;
    let setting9: Array<any> = [String.fromCharCode(120,95,55,50,95,100,101,113,117,111,116,101,0), String.fromCharCode(115,95,50,52,95,109,101,109,106,114,110,108,0), String.fromCharCode(114,116,112,119,95,98,95,53,56,0)];
    let showk = 5.0;
    let zhuboE = String.fromCharCode(122,95,50,55,95,117,99,108,111,99,107,0);
    let episodes9 = 5;
    let darkt: Map<any, any> = new Map([[String.fromCharCode(100,105,102,102,97,98,108,101,95,99,95,55,49,0),504], [String.fromCharCode(103,95,55,56,95,114,101,113,117,101,115,116,101,114,0),987]]);
    let matchesO = String.fromCharCode(109,95,53,48,95,114,101,102,105,110,101,109,101,110,116,0);
    let subsq = String.fromCharCode(99,109,97,112,95,49,95,51,55,0);
    let sportst = false;
    let otherJ: Map<any, any> = new Map([[String.fromCharCode(102,95,54,95,115,116,101,112,112,101,100,0),884], [String.fromCharCode(118,105,116,97,108,105,107,108,105,122,101,95,117,95,55,49,0),237], [String.fromCharCode(122,95,56,51,95,115,99,105,101,110,116,105,102,105,99,0),706]]);
   let whistle0o = 9440570 <= matchesO.length;
   do {
      matchesO = "1";
      if (whistle0o) {
         break;
      }
   } while (((matchesO.length & 1) >= 1) && whistle0o);
       let stations0 = String.fromCharCode(112,117,115,104,98,97,99,107,95,117,95,53,50,0);
       let awayh = String.fromCharCode(115,122,97,98,111,115,95,53,95,54,0);
       let fastS = 5;
         awayh += `${fastS}`;
      for (let c = 0; c < 3; c++) {
          let sportsU = String.fromCharCode(119,95,52,48,95,105,110,99,108,117,100,101,0);
         awayh += "1";
         sportsU += `${sportsU.length << (Math.min(sportsU.length, 3))}`;
      }
       let episodesr: Array<any> = [558, 507];
       let viewsi: Array<any> = [String.fromCharCode(112,95,51,52,95,118,105,97,98,108,101,0), String.fromCharCode(107,95,57,48,0)];
       let borderless7: Map<any, any> = new Map([[String.fromCharCode(97,95,54,54,95,100,101,99,114,101,109,101,110,116,0),false ], [String.fromCharCode(121,95,51,56,95,97,109,114,119,98,100,97,116,97,0),false ]]);
       let sheetl: Map<any, any> = new Map([[String.fromCharCode(100,97,116,97,95,50,95,50,50,0),711], [String.fromCharCode(118,115,102,114,97,109,101,95,56,95,48,0),604], [String.fromCharCode(109,114,122,95,97,95,50,49,0),389]]);
         awayh += `${borderless7.size}`;
      for (let a = 0; a < 3; a++) {
          let whistleQ = 3.0;
          let blackL = 4.0;
         borderless7 = new Map([[`${borderless7.size}`, borderless7.size >> (Math.min(viewsi.length, 3))]]);
         whistleQ += parseFloat(`${2 / (Math.max(6, parseInt(`${blackL}`)))}`);
         blackL *= parseFloat(`${parseInt(`${whistleQ}`)}`);
      }
          let topica = String.fromCharCode(98,95,49,53,95,111,108,100,101,115,116,0);
         stations0 += `${(stations0 == String.fromCharCode(56,0) ? stations0.length : awayh.length)}`;
         topica = `${topica.length / 2}`;
      if (2 >= (sheetl.size * stations0.length) || (sheetl.size * stations0.length) >= 2) {
          let handlerY: Array<any> = [String.fromCharCode(113,95,57,48,95,114,105,112,101,109,100,0), String.fromCharCode(116,104,117,110,107,0)];
          let condensedE = String.fromCharCode(114,95,56,56,95,115,101,116,117,112,100,0);
         stations0 += "1";
         handlerY = [3];
         condensedE = "2";
      }
      for (let w = 0; w < 2; w++) {
         borderless7.set(`${stations0}`, 3 ^ stations0.length);
      }
      showk -= parseFloat(`${darkt.size % 3}`);
      showk += (parseFloat(`${matchesO == String.fromCharCode(82,0) ? episodes9 : matchesO.length}`));
       let update_tK = String.fromCharCode(116,121,112,101,100,95,52,95,56,51,0);
      while (!update_tK.startsWith(update_tK)) {
         update_tK += `${update_tK.length - 3}`;
         break;
      }
      let bell0 = String.fromCharCode(52,104,113,109,54,95,55,0) == update_tK;
      do {
         update_tK = `${1 + update_tK.length}`;
         if (bell0) {
            break;
         }
      } while (bell0 && (!update_tK.startsWith(update_tK)));
         update_tK += `${update_tK.length}`;
      darkt = new Map([[`${episodes9}`, 2]]);

    const result = await THFirebase.getUserDetails();

      matchesO += `${parseInt(`${showk}`)}`;
       let telegramR = 3.0;
       let indicatorV = 5.0;
         indicatorV -= parseFloat(`${1 / (Math.max(parseInt(`${indicatorV}`), 3))}`);
         indicatorV /= Math.max(4, parseFloat(`${parseInt(`${indicatorV}`) + 2}`));
         indicatorV -= parseFloat(`${1}`);
         telegramR *= parseFloat(`${parseInt(`${telegramR}`) << (Math.min(4, Math.abs(2)))}`);
      let chatN = 8512665.0 <= indicatorV;
      do {
         indicatorV -= parseFloat(`${parseInt(`${indicatorV}`) >> (Math.min(Math.abs(parseInt(`${telegramR}`)), 1))}`);
         if (chatN) {
            break;
         }
      } while (chatN && (4.27 < telegramR));
         indicatorV += parseFloat(`${parseInt(`${telegramR}`)}`);
      episodes9 += parseInt(`${showk}`);
      showk -= parseFloat(`${zhuboE.length}`);
      setting9 = [darkt.size | 3];
    if (result == null) {

      zhuboE += "3";
      episodes9 *= parseInt(`${whistle0}`);
   if (!zhuboE.endsWith(`${episodes9}`)) {
       let indicatorX: Array<any> = [String.fromCharCode(115,95,53,48,95,115,117,98,108,97,121,111,117,116,115,0), String.fromCharCode(112,105,116,99,104,95,116,95,53,55,0), String.fromCharCode(114,95,50,95,115,111,117,110,100,0)];
       let crownK: Array<any> = [176, 794, 977];
       let interstitialU = 3;
       let matches8 = 0.0;
      let catalog7 = 9793788 >= indicatorX.length;
      do {
          let langkeyD: Array<any> = [769, 66, 415];
          let singaporei = String.fromCharCode(103,114,101,121,95,105,95,54,48,0);
          let becomeA: Map<any, any> = new Map([[String.fromCharCode(115,110,97,112,112,121,95,112,95,51,52,0),true ], [String.fromCharCode(98,95,57,57,95,113,112,105,115,0),false ], [String.fromCharCode(119,95,51,48,95,122,105,112,0),true ]]);
          let policyk = 4.0;
         indicatorX = [indicatorX.length ^ parseInt(`${matches8}`)];
         langkeyD.push(singaporei.length >> (Math.min(3, langkeyD.length)));
         singaporei += "2";
         becomeA = new Map([[`${langkeyD.length}`, langkeyD.length << (Math.min(Math.abs(2), 4))]]);
         policyk *= 3;
         if (catalog7) {
            break;
         }
      } while ((1 > interstitialU) && catalog7);
      for (let h = 0; h < 1; h++) {
         matches8 *= parseFloat(`${interstitialU & 2}`);
      }
      for (let c = 0; c < 2; c++) {
         indicatorX = [parseInt(`${matches8}`) ^ 1];
      }
      while (indicatorX.length < 1) {
          let storem = 5.0;
          let math0 = 3;
          let mail2 = false;
          let awayx = 1;
          let vietnamJ = true;
         indicatorX = [parseInt(`${storem}`) << (Math.min(3, Math.abs(3)))];
         storem *= 1;
         math0 /= Math.max(3 * math0, 5);
         mail2 = vietnamJ;
         awayx -= (awayx * (mail2 ? 1 : 2));
         break;
      }
      let dragj = 8826580 <= crownK.length;
      do {
         crownK = [indicatorX.length >> (Math.min(Math.abs(3), 2))];
         if (dragj) {
            break;
         }
      } while (dragj && (crownK.length == 2));
         interstitialU ^= 2 & parseInt(`${matches8}`);
         indicatorX = [indicatorX.length];
          let actionsT = String.fromCharCode(100,121,110,97,109,105,99,115,95,118,95,56,50,0);
          let blacklistq = String.fromCharCode(100,95,54,95,103,101,110,101,114,97,116,101,0);
          let condensedk = false;
         interstitialU -= 3 << (Math.min(1, crownK.length));
         actionsT += `${actionsT.length}`;
         blacklistq += `${(actionsT == String.fromCharCode(89,0) ? (condensedk ? 3 : 1) : actionsT.length)}`;
         matches8 += parseFloat(`${3 | crownK.length}`);
         interstitialU |= crownK.length;
      for (let c = 0; c < 2; c++) {
         matches8 -= parseFloat(`${parseInt(`${matches8}`) / 1}`);
      }
      if (matches8 > 4.49) {
          let stepQ = String.fromCharCode(105,95,51,48,95,100,105,97,103,114,97,109,0);
          let megaphone6 = String.fromCharCode(109,111,100,101,109,118,99,111,115,116,95,119,95,57,55,0);
         matches8 /= Math.max(4, parseFloat(`${parseInt(`${matches8}`)}`));
         stepQ = `${stepQ.length}`;
         megaphone6 = `${(stepQ == String.fromCharCode(79,0) ? megaphone6.length : stepQ.length)}`;
      }
      zhuboE += `${(matchesO == String.fromCharCode(105,0) ? parseInt(`${showk}`) : matchesO.length)}`;
   }
       let borderlessR = true;
      for (let i = 0; i < 2; i++) {
          let videoY = String.fromCharCode(121,95,55,53,95,99,102,101,110,99,0);
          let teamY = 4.0;
         borderlessR = teamY == 23.36 || videoY == String.fromCharCode(50,0);
      }
          let matchu: Array<any> = [497, 243, 51];
          let policym = String.fromCharCode(108,95,49,56,95,116,99,112,0);
         borderlessR = matchu.length < 79 || borderlessR;
         matchu.push(1 & policym.length);
         policym += `${policym.length}`;
         borderlessR = !borderlessR;
      episodes9 -= (String.fromCharCode(115,0) == matchesO ? darkt.size : matchesO.length);
      return;
    }

    await dispatch(updateUserAuth(result));

      setting9 = [2 >> (Math.min(3, Math.abs(parseInt(`${whistle0}`))))];
      subsq = `${darkt.size}`;
   for (let o = 0; o < 2; o++) {
       let profilej = String.fromCharCode(109,111,118,116,101,120,116,115,117,98,95,104,95,53,55,0);
       let charth = String.fromCharCode(111,99,117,109,101,110,116,95,121,95,50,49,0);
         charth = "3";
          let nalytics9: Array<any> = [50, 378, 229];
          let teamh = String.fromCharCode(108,95,53,52,95,100,101,105,110,118,101,114,116,0);
         profilej = `${charth.length + profilej.length}`;
         nalytics9 = [teamh.length | 2];
         teamh = `${(teamh == String.fromCharCode(119,0) ? teamh.length : nalytics9.length)}`;
      while (charth.length < profilej.length) {
          let math3 = String.fromCharCode(115,99,97,108,101,100,99,111,110,118,111,108,118,101,95,55,95,52,53,0);
         profilej = `${(String.fromCharCode(98,0) == profilej ? math3.length : profilej.length)}`;
         break;
      }
      let downloaderJ = charth.length >= 9319471;
      do {
         charth += `${(charth == String.fromCharCode(65,0) ? profilej.length : charth.length)}`;
         if (downloaderJ) {
            break;
         }
      } while (downloaderJ && (charth.startsWith(profilej)));
         charth += `${(String.fromCharCode(70,0) == charth ? charth.length : profilej.length)}`;
      for (let z = 0; z < 2; z++) {
         profilej = `${2 ^ profilej.length}`;
      }
      setting9.push(zhuboE.length);
   }
   while (2 == (2 & matchesO.length) && (showk / 1.45) == 3.66) {
       let applek = String.fromCharCode(115,105,112,114,100,97,116,97,95,114,95,55,55,0);
       let rank4 = 1.0;
         applek += `${3 % (Math.max(2, parseInt(`${rank4}`)))}`;
          let delegate_mn = false;
         rank4 *= applek.length + parseInt(`${rank4}`);
         delegate_mn = (!delegate_mn ? !delegate_mn : delegate_mn);
      let tickp = 9032175 >= applek.length;
      do {
         applek = `${applek.length}`;
         if (tickp) {
            break;
         }
      } while ((4 > (5 ^ applek.length) || (5 << (Math.min(2, applek.length))) > 2) && tickp);
          let modityv: Array<any> = [String.fromCharCode(104,95,54,53,95,115,97,118,101,112,111,105,110,116,115,0), String.fromCharCode(120,95,53,49,95,99,98,112,104,105,0), String.fromCharCode(102,108,97,116,116,101,110,101,100,95,97,95,56,53,0)];
         rank4 *= parseInt(`${rank4}`) | 3;
         modityv.push(modityv.length | modityv.length);
      if (applek.length >= 3) {
         applek += `${(String.fromCharCode(75,0) == applek ? applek.length : parseInt(`${rank4}`))}`;
      }
      let termsW = String.fromCharCode(50,120,101,0) == applek;
      do {
         applek += `${parseInt(`${rank4}`) >> (Math.min(applek.length, 2))}`;
         if (termsW) {
            break;
         }
      } while ((rank4 == 4.97) && termsW);
      matchesO += "3 * episodes9";
      break;
   }
    return;
  };

  const handleRefresh = async () => {
       let datam = String.fromCharCode(112,95,50,55,95,100,101,102,108,97,116,101,0);
    let crosse = String.fromCharCode(107,95,53,54,95,115,117,98,112,97,99,107,101,116,0);
    let hookz = 1;
    let usernameb: Map<any, any> = new Map([[String.fromCharCode(99,108,97,115,115,0),true ], [String.fromCharCode(121,95,49,50,95,121,121,121,121,0),false ], [String.fromCharCode(104,101,118,99,100,101,99,95,118,95,52,54,0),false ]]);
    let tumbnailJ = false;
    let middleG = String.fromCharCode(112,112,102,108,97,103,115,95,48,95,51,57,0);
    let video0 = String.fromCharCode(116,114,97,110,115,112,95,109,95,55,57,0);
    let submitV: Array<any> = [857, 278];
    let sansj = String.fromCharCode(99,111,108,108,105,100,101,114,95,102,95,53,56,0);
    let actionr = String.fromCharCode(102,108,97,99,101,110,99,95,56,95,53,0);
    let lessT = String.fromCharCode(97,95,49,53,95,98,117,109,112,0);
    let recommendationx = 2.0;
    let halfB = 4.0;
    let sharedd = String.fromCharCode(101,95,54,49,0);
    let stylev = 5.0;
   let typing5 = String.fromCharCode(98,111,107,51,95,56,100,0) == video0;
   do {
       let saveb = 5.0;
         saveb += parseInt(`${saveb}`) / 2;
         saveb += parseInt(`${saveb}`);
      if (saveb > 1.14) {
         saveb /= Math.max(4, parseInt(`${saveb}`));
      }
      video0 += `${2 ^ actionr.length}`;
      if (typing5) {
         break;
      }
   } while (typing5 && (crosse.length == video0.length));
       let filedY: Map<any, any> = new Map([[String.fromCharCode(119,104,101,114,101,95,101,95,57,55,0),827], [String.fromCharCode(122,95,53,52,95,102,101,108,101,109,0),293], [String.fromCharCode(107,95,53,52,95,105,109,108,116,0),388]]);
       let detailD = String.fromCharCode(117,101,117,101,95,54,95,49,50,0);
       let grayK = String.fromCharCode(105,110,116,111,95,117,95,51,52,0);
      if (detailD.length < filedY.size) {
         filedY.set(detailD, (detailD == String.fromCharCode(95,0) ? filedY.size : detailD.length));
      }
      for (let j = 0; j < 1; j++) {
          let refreshj = 5.0;
         detailD = "3";
         refreshj -= parseFloat(`${2}`);
      }
          let aboutb = String.fromCharCode(105,95,52,51,95,97,118,102,102,116,0);
         grayK = `${filedY.size / (Math.max(3, 2))}`;
         aboutb += `${(aboutb == String.fromCharCode(104,0) ? aboutb.length : aboutb.length)}`;
       let policyW = String.fromCharCode(100,101,115,99,114,105,112,116,105,111,110,95,97,95,57,49,0);
       let robotoh = 1.0;
       let hoverT = 0.0;
         filedY.set(`${robotoh}`, grayK.length);
      for (let t = 0; t < 3; t++) {
          let modelsF: Map<any, any> = new Map([[String.fromCharCode(99,117,114,108,121,95,105,95,57,51,0),590], [String.fromCharCode(101,95,51,50,95,103,114,97,99,101,0),50]]);
         hoverT -= parseFloat(`${parseInt(`${hoverT}`) & policyW.length}`);
         modelsF.set(`${modelsF.size}`, modelsF.size & modelsF.size);
      }
      let themea = detailD == String.fromCharCode(113,120,118,109,53,100,116,51,52,49,0);
      do {
          let fcopy_cby = String.fromCharCode(102,95,56,53,95,111,119,110,101,114,115,104,105,112,0);
          let lessq: Map<any, any> = new Map([[String.fromCharCode(118,112,105,116,120,102,109,95,121,95,52,50,0),String.fromCharCode(109,95,51,57,95,105,110,99,108,117,100,101,0)], [String.fromCharCode(116,95,56,49,95,114,101,99,111,110,102,105,103,117,114,97,116,105,111,110,0),String.fromCharCode(102,95,48,95,98,105,119,101,105,103,104,116,0)]]);
          let sortB: Map<any, any> = new Map([[String.fromCharCode(105,115,115,117,101,114,115,95,53,95,51,0),450], [String.fromCharCode(110,95,56,51,95,98,101,114,114,105,101,115,0),154]]);
          let balla = String.fromCharCode(105,110,100,105,110,103,95,115,95,53,55,0);
          let minimizeB = false;
         detailD += `${balla.length}`;
         fcopy_cby = "3";
         lessq = new Map([[`${sortB.size}`, sortB.size >> (Math.min(fcopy_cby.length, 5))]]);
         balla = `${3 + sortB.size}`;
         minimizeB = String.fromCharCode(109,0) == fcopy_cby;
         if (themea) {
            break;
         }
      } while ((policyW != String.fromCharCode(90,0) || detailD == String.fromCharCode(110,0)) && themea);
      while (detailD.length == grayK.length) {
         grayK += `${detailD.length}`;
         break;
      }
      crosse += `${1 >> (Math.min(Math.abs(hookz), 4))}`;
   if (4 > (4 | hookz) && (middleG.length | hookz) > 4) {
       let catagoryg = String.fromCharCode(113,95,52,53,95,105,110,112,117,116,120,0);
       let darku = String.fromCharCode(102,116,115,121,121,95,120,95,55,52,0);
       let w_viewJ = 5.0;
       let bingh = String.fromCharCode(103,108,111,115,115,95,116,95,53,54,0);
       let connectionS = 4;
      let unselecteds = 7163158.0 >= w_viewJ;
      do {
         w_viewJ /= Math.max(4, parseFloat(`${1 - connectionS}`));
         if (unselecteds) {
            break;
         }
      } while (unselecteds && (1.31 <= w_viewJ));
         catagoryg = `${connectionS | 3}`;
      while (!darku.endsWith(`${catagoryg.length}`)) {
          let serviceH: Array<any> = [657, 391, 956];
          let previeww: Array<any> = [339, 467];
          let greenV = String.fromCharCode(110,95,55,52,95,115,104,111,114,116,115,0);
          let detailQ = String.fromCharCode(115,101,114,105,97,108,105,115,101,100,95,55,95,56,0);
          let bodanR = String.fromCharCode(99,111,109,101,95,111,95,57,50,0);
         catagoryg += "1";
         serviceH.push(serviceH.length);
         previeww.push(greenV.length);
         greenV += `${greenV.length}`;
         detailQ = `${3 + previeww.length}`;
         bodanR += "1";
         break;
      }
       let sidej = String.fromCharCode(105,110,100,105,99,105,101,115,95,117,95,57,50,0);
         sidej = `${darku.length & bingh.length}`;
      let indexo = 5625512.0 >= w_viewJ;
      do {
         w_viewJ -= parseFloat(`${catagoryg.length * 2}`);
         if (indexo) {
            break;
         }
      } while (indexo && ((2 << (Math.min(5, sidej.length))) <= 4 && 3 <= (2 | sidej.length)));
          let combineA = String.fromCharCode(103,95,54,57,95,99,97,110,99,101,108,0);
          let resultx = 3.0;
         bingh = "1";
         combineA = "1";
         resultx -= (String.fromCharCode(51,0) == combineA ? parseInt(`${resultx}`) : combineA.length);
         darku += `${connectionS}`;
      while (darku != sidej) {
          let promotionp: Map<any, any> = new Map([[String.fromCharCode(120,95,49,51,95,116,105,108,101,120,0),true ], [String.fromCharCode(104,95,50,50,95,116,114,97,110,115,109,105,115,115,105,111,110,0),false ], [String.fromCharCode(100,95,50,51,95,102,109,105,120,0),true ]]);
         sidej += `${1 % (Math.max(1, darku.length))}`;
         promotionp = new Map([[`${promotionp.size}`, promotionp.size]]);
         break;
      }
         catagoryg = `${1 + parseInt(`${w_viewJ}`)}`;
         sidej += `${connectionS / (Math.max(7, darku.length))}`;
         catagoryg += `${sidej.length}`;
       let splashD = 4.0;
       let switch_uoy = 5.0;
      if (3.30 >= (w_viewJ / (Math.max(parseFloat(`${darku.length}`), 1))) && (w_viewJ / (Math.max(3.30, 7))) >= 2.67) {
          let ranky: Map<any, any> = new Map([[String.fromCharCode(114,95,57,57,95,105,110,108,105,110,101,0),true ], [String.fromCharCode(116,95,50,55,95,112,97,101,116,104,0),false ]]);
          let lessr: Array<any> = [872, 32, 252];
         w_viewJ -= parseFloat(`${sidej.length}`);
         ranky = new Map([[`${ranky.size}`, ranky.size & lessr.length]]);
         lessr = [2];
      }
      if (!bingh.startsWith(`${switch_uoy}`)) {
         bingh = `${connectionS}`;
      }
      middleG += `${darku.length >> (Math.min(Math.abs(3), 3))}`;
   }
   if (4 < sansj.length) {
      actionr = `${middleG.length >> (Math.min(3, Math.abs(usernameb.size)))}`;
   }
   if (lessT == String.fromCharCode(87,0)) {
      video0 += `${actionr.length << (Math.min(crosse.length, 2))}`;
   }
      actionr += `${video0.length % (Math.max(6, sansj.length))}`;
      usernameb.set(`${hookz}`, hookz << (Math.min(Math.abs(1), 2)));
   while (!lessT.includes(`${video0.length}`)) {
       let malaysia3 = String.fromCharCode(101,95,51,56,95,116,105,109,101,114,0);
       let benefit5 = String.fromCharCode(103,95,53,54,95,98,117,102,102,101,114,115,114,99,0);
       let fill5 = String.fromCharCode(109,95,51,53,95,118,109,97,102,109,111,116,105,111,110,100,115,112,0);
       let header3 = false;
       let container3 = String.fromCharCode(99,95,53,54,0);
         fill5 = `${benefit5.length}`;
      while (!fill5.startsWith(`${malaysia3.length}`)) {
         fill5 += `${1 - malaysia3.length}`;
         break;
      }
         container3 += `${malaysia3.length}`;
      while (fill5.length < 2) {
         fill5 = `${fill5.length / (Math.max(6, container3.length))}`;
         break;
      }
      if (!header3) {
         fill5 += `${((header3 ? 3 : 3) / (Math.max(9, fill5.length)))}`;
      }
       let shared: Map<any, any> = new Map([[String.fromCharCode(112,117,116,95,97,95,52,55,0),336], [String.fromCharCode(113,95,52,95,104,109,97,99,105,100,0),568], [String.fromCharCode(116,95,54,51,95,102,112,101,108,0),82]]);
       let logo5 = String.fromCharCode(106,95,49,53,95,99,111,111,114,100,105,110,97,116,111,114,115,0);
      while (benefit5.endsWith(`${malaysia3.length}`)) {
          let filterS = String.fromCharCode(103,95,51,52,95,108,97,109,101,0);
          let description_mj1: Array<any> = [215, 726];
          let awayk = String.fromCharCode(99,111,112,121,95,111,95,54,55,0);
          let listl = 4;
         benefit5 = `${description_mj1.length | container3.length}`;
         filterS += `${listl}`;
         description_mj1.push(listl ^ 1);
         awayk += `${listl}`;
         break;
      }
      if (malaysia3.length > fill5.length) {
         malaysia3 += `${benefit5.length}`;
      }
       let appleH = String.fromCharCode(105,110,115,116,114,95,52,95,54,55,0);
       let gestureH = String.fromCharCode(117,110,99,111,100,101,100,95,98,95,53,56,0);
      for (let u = 0; u < 2; u++) {
         header3 = String.fromCharCode(78,0) == benefit5;
      }
      if (shared.size > benefit5.length) {
         shared = new Map([[logo5, logo5.length * appleH.length]]);
      }
      let episodeI = malaysia3.length <= 5361086;
      do {
         malaysia3 = "2";
         if (episodeI) {
            break;
         }
      } while (episodeI && (logo5.length < malaysia3.length));
      if (!header3) {
         appleH += `${gestureH.length >> (Math.min(3, benefit5.length))}`;
      }
          let episodesM: Map<any, any> = new Map([[String.fromCharCode(110,95,50,49,95,98,97,100,103,101,0),276], [String.fromCharCode(115,95,49,95,116,114,97,110,115,117,112,112,0),913], [String.fromCharCode(110,95,56,50,95,101,114,97,115,105,110,103,0),964]]);
          let reminderp = 4.0;
          let stationI: Map<any, any> = new Map([[String.fromCharCode(108,95,52,50,95,115,101,99,0),82], [String.fromCharCode(120,99,108,105,95,48,95,56,49,0),492], [String.fromCharCode(116,105,109,101,102,105,108,116,101,114,95,55,95,57,52,0),956]]);
         container3 = `${(container3 == String.fromCharCode(73,0) ? container3.length : shared.size)}`;
         episodesM = new Map([[`${stationI.size}`, parseInt(`${reminderp}`) * 2]]);
         reminderp /= Math.max(2, 3);
         stationI.set(`${episodesM.size}`, stationI.size);
      video0 = "2";
      break;
   }
   if (2.24 > (recommendationx * 1.84)) {
      sansj = `${crosse.length}`;
   }
   let storev = 9212598 <= middleG.length;
   do {
      middleG = `${3 ^ sansj.length}`;
      if (storev) {
         break;
      }
   } while ((middleG.length == 4 && 4 == lessT.length) && storev);

    setRefreshing(true);

      video0 += `${lessT.length}`;
   let gestures8 = 5655097 >= usernameb.size;
   do {
       let nterstitialm = 3.0;
       let loginG: Map<any, any> = new Map([[String.fromCharCode(110,95,53,50,95,115,101,97,114,99,104,98,97,114,0),676], [String.fromCharCode(102,95,57,57,95,103,100,111,99,0),346]]);
       let circleJ: Array<any> = [956, 143];
       let over7 = String.fromCharCode(102,117,110,103,105,98,108,101,95,108,95,57,0);
       let componentZ = String.fromCharCode(101,118,114,99,95,112,95,54,50,0);
          let whistle2 = true;
          let stats3 = String.fromCharCode(122,95,53,51,95,114,101,108,101,118,97,110,116,0);
          let rules4 = String.fromCharCode(120,95,50,55,95,99,104,112,108,0);
         componentZ = "3";
         whistle2 = (98 <= ((!whistle2 ? rules4.length : 98) * rules4.length));
         stats3 = `${stats3.length}`;
         componentZ += `${circleJ.length}`;
      while (5 < componentZ.length) {
         over7 += "3";
         break;
      }
         loginG = new Map([[componentZ, componentZ.length]]);
      while ((1 >> (Math.min(1, over7.length))) >= 5 && (1 >> (Math.min(4, circleJ.length))) >= 4) {
         over7 += "3";
         break;
      }
         circleJ.push(parseInt(`${nterstitialm}`) | circleJ.length);
         componentZ = `${(componentZ == String.fromCharCode(107,0) ? componentZ.length : over7.length)}`;
      while (!Array.from(loginG.values()).includes(circleJ.length)) {
         circleJ = [loginG.size];
         break;
      }
      for (let z = 0; z < 2; z++) {
          let recommendationR = 4.0;
          let short_tyd = 4.0;
          let bannerk = String.fromCharCode(116,121,112,101,115,116,114,95,56,95,53,54,0);
          let filledU = 3;
         loginG = new Map([[over7, 3 - bannerk.length]]);
         recommendationR *= parseFloat(`${filledU}`);
         short_tyd /= Math.max(parseFloat(`${filledU}`), 5);
         bannerk = "2";
      }
         loginG = new Map([[`${loginG.size}`, loginG.size + over7.length]]);
      let constantsf = 8883660.0 >= nterstitialm;
      do {
         nterstitialm -= loginG.size;
         if (constantsf) {
            break;
         }
      } while ((nterstitialm >= 4.16) && constantsf);
      for (let l = 0; l < 2; l++) {
          let containerS = String.fromCharCode(108,95,50,55,95,110,101,101,100,0);
         nterstitialm += 1;
         containerS = "3";
      }
      let disconnectedO = String.fromCharCode(49,108,52,116,118,0) == over7;
      do {
          let zhuboY: Array<any> = [191, 927];
          let middlewareN: Array<any> = [806, 691, 780];
          let k_countP: Array<any> = [869, 560, 443];
          let phoneq = String.fromCharCode(119,95,53,52,95,97,115,102,114,116,112,0);
         over7 = `${phoneq.length}`;
         zhuboY = [middlewareN.length];
         middlewareN = [3];
         k_countP = [middlewareN.length];
         phoneq += `${k_countP.length}`;
         if (disconnectedO) {
            break;
         }
      } while (((circleJ.length + over7.length) <= 4) && disconnectedO);
      for (let h = 0; h < 2; h++) {
         circleJ = [parseInt(`${nterstitialm}`)];
      }
      for (let e = 0; e < 3; e++) {
          let sourcek = false;
          let penaltyg = String.fromCharCode(100,101,112,114,101,99,97,116,105,111,110,95,52,95,54,52,0);
          let loading0 = 2.0;
         loginG = new Map([[`${circleJ.length}`, 1]]);
         sourcek = 79 > penaltyg.length;
         penaltyg += `${penaltyg.length + parseInt(`${loading0}`)}`;
         loading0 *= parseFloat(`${1}`);
      }
      usernameb = new Map([[`${usernameb.size}`, usernameb.size / (Math.max(lessT.length, 5))]]);
      if (gestures8) {
         break;
      }
   } while (gestures8 && ((actionr.length - usernameb.size) <= 1));
      tumbnailJ = crosse.endsWith(`${recommendationx}`);
       let baiduc = 0;
         baiduc <<= Math.min(Math.abs(baiduc), 1);
         baiduc += baiduc;
      if (baiduc <= 4) {
          let predictionT = 1.0;
         baiduc ^= baiduc;
         predictionT -= parseInt(`${predictionT}`) % 2;
      }
      tumbnailJ = 48.93 < halfB;
       let screenC: Map<any, any> = new Map([[String.fromCharCode(100,111,109,97,105,110,95,109,95,54,56,0),308], [String.fromCharCode(107,101,121,101,100,95,103,95,57,49,0),129], [String.fromCharCode(108,105,99,101,110,115,101,95,116,95,51,48,0),70]]);
          let layoutF: Array<any> = [858, 767];
         screenC = new Map([[`${screenC.size}`, screenC.size & 2]]);
         layoutF = [layoutF.length];
      if (screenC.size < screenC.size) {
         screenC.set(`${screenC.size}`, screenC.size);
      }
      let circleB = screenC.size >= 5456919;
      do {
         screenC.set(`${screenC.size}`, screenC.size % 1);
         if (circleB) {
            break;
         }
      } while ((screenC.get(`${screenC.size}`) != null) && circleB);
      middleG += `${parseInt(`${halfB}`) ^ 1}`;
   let schedulem = video0 == String.fromCharCode(55,56,116,122,104,0);
   do {
      video0 = `${submitV.length}`;
      if (schedulem) {
         break;
      }
   } while (schedulem && (datam.length < 3));
   for (let j = 0; j < 2; j++) {
      datam = `${parseInt(`${recommendationx}`) & 3}`;
   }
   if (actionr.endsWith(`${hookz}`)) {
       let sourceh = 0.0;
         sourceh /= Math.max(5, parseFloat(`${3}`));
          let pressureE = false;
          let backgroundU = String.fromCharCode(111,95,57,48,95,116,114,97,99,107,115,0);
         sourceh *= (parseFloat(`${backgroundU.length / (Math.max(2, (pressureE ? 4 : 4)))}`));
      for (let t = 0; t < 1; t++) {
          let logoh = true;
          let club6 = false;
          let sportsD = 0.0;
         sourceh *= parseFloat(`${parseInt(`${sportsD}`) & 1}`);
         logoh = (logoh ? !club6 : logoh);
         club6 = !club6 || logoh;
         sportsD /= Math.max((parseFloat(`${(logoh ? 1 : 2)}`)), 3);
      }
      hookz |= 1;
   }
      recommendationx /= Math.max((String.fromCharCode(108,0) == datam ? usernameb.size : datam.length), 5);
       let n_playerp = String.fromCharCode(108,95,57,48,95,97,117,116,111,99,108,111,115,101,0);
      for (let p = 0; p < 1; p++) {
          let dialogl = 0.0;
          let dangerm: Map<any, any> = new Map([[String.fromCharCode(115,104,111,114,116,99,117,116,115,95,105,95,53,52,0),String.fromCharCode(111,102,102,95,98,95,54,54,0)], [String.fromCharCode(109,101,97,110,105,110,103,102,117,108,95,108,95,55,56,0),String.fromCharCode(105,95,53,52,95,114,101,102,114,101,115,104,0)], [String.fromCharCode(114,111,98,117,115,116,0),String.fromCharCode(117,110,112,114,101,109,117,108,116,105,112,108,121,111,102,102,115,101,116,95,101,95,51,56,0)]]);
          let stats1: Map<any, any> = new Map([[String.fromCharCode(100,101,114,105,118,101,0),882], [String.fromCharCode(99,105,110,101,95,119,95,52,0),42], [String.fromCharCode(122,95,54,53,95,119,97,116,99,104,101,100,0),784]]);
          let guide9 = String.fromCharCode(99,111,110,102,95,105,95,53,55,0);
         n_playerp += `${n_playerp.length}`;
         dialogl += parseFloat(`${3}`);
         dangerm.set(`${dangerm.size}`, 1 - stats1.size);
         stats1.set(`${dangerm.size}`, dangerm.size);
         guide9 = `${guide9.length << (Math.min(Math.abs(2), 2))}`;
      }
         n_playerp += `${n_playerp.length % (Math.max(10, n_playerp.length))}`;
         n_playerp = `${n_playerp.length >> (Math.min(5, n_playerp.length))}`;
      actionr += `${lessT.length / (Math.max(2, 9))}`;
    await refreshUserState();

      middleG = "2";
      actionr = `${parseInt(`${halfB}`) * middleG.length}`;
   for (let h = 0; h < 3; h++) {
      usernameb.set(`${hookz}`, usernameb.size << (Math.min(Math.abs(1), 5)));
   }
   if (recommendationx >= 2.50) {
      sharedd += `${sansj.length}`;
   }
   while (sharedd.includes(sansj)) {
      sansj += "1";
      break;
   }
   while (!video0.endsWith(`${submitV.length}`)) {
      submitV.push(((tumbnailJ ? 5 : 5)));
      break;
   }
      crosse = `${submitV.length % (Math.max(10, actionr.length))}`;
   while (sharedd.startsWith(`${halfB}`)) {
      halfB += usernameb.size - middleG.length;
      break;
   }
   if (hookz < usernameb.size) {
       let linkJ = String.fromCharCode(100,95,56,54,95,97,118,103,115,97,100,0);
       let dropdowno = 1.0;
       let chinaB: Map<any, any> = new Map([[String.fromCharCode(98,110,98,105,110,95,106,95,55,52,0),158], [String.fromCharCode(100,101,115,107,116,111,112,95,102,95,50,49,0),813], [String.fromCharCode(118,95,54,57,95,104,97,108,100,99,108,117,116,115,114,99,0),267]]);
       let referrerV: Array<any> = [String.fromCharCode(110,101,97,114,108,121,95,110,95,52,54,0), String.fromCharCode(102,114,101,105,114,95,122,95,57,48,0)];
          let splashI = 5.0;
          let upgradez = false;
         referrerV = [3 * referrerV.length];
         splashI *= parseFloat(`${1 | parseInt(`${splashI}`)}`);
         upgradez = splashI == 84.31 || !upgradez;
      while (2 > (parseInt(`${dropdowno}`) / (Math.max(chinaB.size, 4)))) {
         dropdowno *= 3;
         break;
      }
       let storeQ = 3.0;
      if (1 == (chinaB.size - 1) || 4.31 == (5.58 * dropdowno)) {
         dropdowno += linkJ.length;
      }
      let adults = 7804105.0 <= storeQ;
      do {
         storeQ /= Math.max(5, parseFloat(`${linkJ.length * 1}`));
         if (adults) {
            break;
         }
      } while ((storeQ > 5.99) && adults);
       let humidity7 = 3.0;
       let skipZ = 2.0;
          let mappingE = String.fromCharCode(112,114,111,112,111,114,116,105,111,110,115,95,116,95,49,56,0);
          let fieldr = 1.0;
         humidity7 /= Math.max(4, parseFloat(`${referrerV.length}`));
         mappingE += `${mappingE.length * 1}`;
         fieldr += parseInt(`${fieldr}`) << (Math.min(mappingE.length, 3));
      if ((linkJ.length - 1) <= 3) {
          let roomu = String.fromCharCode(112,101,114,99,101,110,116,95,120,95,49,48,48,0);
          let heartD: Array<any> = [String.fromCharCode(97,95,53,54,95,108,101,116,116,101,114,0), String.fromCharCode(117,95,55,50,95,109,112,97,100,115,112,0), String.fromCharCode(122,95,56,48,95,115,117,98,112,97,114,116,0)];
          let moviesQ = false;
          let firebaseA = 2.0;
          let gmailM: Array<any> = [934, 444];
         linkJ += `${parseInt(`${humidity7}`) % 3}`;
         roomu = `${((moviesQ ? 2 : 5) % (Math.max(parseInt(`${firebaseA}`), 9)))}`;
         heartD.push(parseInt(`${firebaseA}`) >> (Math.min(5, Math.abs(1))));
         moviesQ = roomu.length > 45;
         gmailM = [gmailM.length];
      }
       let filterE = String.fromCharCode(99,111,110,116,97,105,110,101,114,95,119,95,55,49,0);
       let detailsC = String.fromCharCode(97,117,116,111,102,105,108,108,95,120,95,54,55,0);
       let pointh = String.fromCharCode(115,117,99,104,95,108,95,54,48,0);
      let matchesa = storeQ <= 8283842.0;
      do {
          let changeR = false;
          let short_rya: Map<any, any> = new Map([[String.fromCharCode(114,97,110,115,102,111,114,109,101,114,95,52,95,51,53,0),302], [String.fromCharCode(116,105,99,107,101,116,95,102,95,54,48,0),516]]);
         storeQ *= parseFloat(`${parseInt(`${skipZ}`)}`);
         changeR = !changeR;
         short_rya = new Map([[`${short_rya.size}`, short_rya.size]]);
         if (matchesa) {
            break;
         }
      } while ((2.69 < (storeQ * 3.31)) && matchesa);
       let settingso = String.fromCharCode(108,105,115,116,101,110,101,114,115,95,118,95,50,50,0);
      hookz &= usernameb.size;
   }
   for (let i = 0; i < 1; i++) {
      hookz <<= Math.min(Math.abs(2), 2);
   }
    setRefreshing(false);
    
  };

  const handleConfirm = () => {
       let guideZ = false;
    let source2: Array<any> = [797, 647];
    let circleU = 0.0;
    let commentB = 4.0;
    let u_playerM = String.fromCharCode(100,95,57,49,95,115,121,110,99,0);
    let overlayx = 5.0;
    let sportK = 0.0;
    let tooltipsl = String.fromCharCode(99,111,109,112,105,108,101,111,112,116,105,111,110,95,120,95,55,52,0);
    let inactiveF: Map<any, any> = new Map([[String.fromCharCode(118,95,55,95,100,101,108,97,121,101,100,0),273], [String.fromCharCode(113,95,56,57,95,111,118,101,114,108,97,112,112,101,100,0),333]]);
    let viewerS = 1.0;
    let sportsS = false;
    let malaysian = 0.0;
    let views8 = 0.0;
    let formm = 0.0;
      commentB += parseFloat(`${source2.length / 2}`);
      inactiveF.set(`${guideZ}`, 3);
      tooltipsl += `${parseInt(`${viewerS}`) << (Math.min(source2.length, 3))}`;
   while (source2.includes(sportK)) {
      source2.push(tooltipsl.length * source2.length);
      break;
   }
      viewerS += parseFloat(`${inactiveF.size}`);
   let appleN = circleU <= 9215145.0;
   do {
       let register_99f = 3.0;
       let starQ = 3.0;
       let datae = String.fromCharCode(110,95,57,56,95,100,101,98,117,103,0);
       let reminderW = String.fromCharCode(105,95,50,54,95,119,105,110,100,105,110,103,0);
       let firebaseG: Array<any> = [934, 623];
          let networkY = 4.0;
         register_99f /= Math.max(2, 4);
         networkY *= parseFloat(`${parseInt(`${networkY}`) & parseInt(`${networkY}`)}`);
      for (let q = 0; q < 1; q++) {
          let clock5 = 0.0;
          let background4: Map<any, any> = new Map([[String.fromCharCode(114,95,54,48,95,98,117,99,107,101,116,115,0),String.fromCharCode(109,95,49,52,95,98,108,111,99,107,103,114,111,117,112,0)], [String.fromCharCode(100,97,114,119,105,110,95,100,95,52,52,0),String.fromCharCode(99,117,114,118,101,95,51,95,55,53,0)]]);
          let register_sS = String.fromCharCode(115,109,97,114,116,95,48,95,56,48,0);
          let xvodB = String.fromCharCode(108,105,102,101,95,121,95,49,51,0);
         starQ /= Math.max(2, parseFloat(`${background4.size}`));
         clock5 /= Math.max(register_sS.length / 3, 4);
         background4.set(register_sS, register_sS.length);
         xvodB += `${parseInt(`${clock5}`) + 3}`;
      }
          let less5 = String.fromCharCode(98,95,51,53,95,100,105,114,97,99,100,115,112,0);
          let membershipo = String.fromCharCode(106,95,50,49,95,101,99,111,109,112,114,101,115,115,111,114,0);
          let notification9: Map<any, any> = new Map([[String.fromCharCode(112,107,99,114,121,112,116,95,49,95,52,53,0),496], [String.fromCharCode(118,95,51,57,95,112,97,108,101,116,116,101,0),557], [String.fromCharCode(120,95,50,56,95,97,117,116,111,99,111,109,109,105,116,0),953]]);
         reminderW += `${firebaseG.length << (Math.min(reminderW.length, 3))}`;
         less5 = `${membershipo.length}`;
         membershipo += `${1 % (Math.max(10, less5.length))}`;
         notification9 = new Map([[less5, (String.fromCharCode(102,0) == membershipo ? less5.length : membershipo.length)]]);
      for (let v = 0; v < 2; v++) {
          let live6: Array<any> = [944, 461, 446];
          let langkeyq = 1.0;
          let v_centerb = String.fromCharCode(110,111,110,95,120,95,53,54,0);
          let stats8: Map<any, any> = new Map([[String.fromCharCode(102,114,97,109,101,115,105,122,101,95,100,95,50,53,0),72], [String.fromCharCode(98,95,53,55,95,102,97,105,108,117,114,101,115,0),14]]);
          let zhengpian5 = false;
         reminderW += `${3 >> (Math.min(2, reminderW.length))}`;
         live6.push(1);
         langkeyq /= Math.max(1, (parseFloat(`${(zhengpian5 ? 1 : 3) + parseInt(`${langkeyq}`)}`)));
         v_centerb = `${((zhengpian5 ? 4 : 2) % 1)}`;
         stats8 = new Map([[`${langkeyq}`, ((zhengpian5 ? 4 : 1) & parseInt(`${langkeyq}`))]]);
      }
         starQ -= parseFloat(`${parseInt(`${register_99f}`)}`);
      if (5 > (datae.length & 4) && (4.65 - register_99f) > 2.74) {
         register_99f /= Math.max(5, 1 % (Math.max(9, reminderW.length)));
      }
      let filterw = reminderW.length <= 6986506;
      do {
         reminderW = `${1 & datae.length}`;
         if (filterw) {
            break;
         }
      } while ((2 > (reminderW.length * 5) && (firebaseG.length * reminderW.length) > 5) && filterw);
       let inactivex = String.fromCharCode(118,95,57,95,115,117,109,109,97,114,105,101,115,0);
      for (let z = 0; z < 2; z++) {
         starQ *= parseFloat(`${2 % (Math.max(8, datae.length))}`);
      }
      for (let i = 0; i < 2; i++) {
         datae = "1";
      }
      if ((inactivex.length ^ firebaseG.length) == 4 && 4 == (firebaseG.length ^ inactivex.length)) {
          let mail1 = false;
          let clubK = 0;
          let showE = 5;
         firebaseG = [inactivex.length % 2];
         mail1 = showE < 89;
         clubK ^= showE >> (Math.min(Math.abs(clubK), 5));
      }
         reminderW += `${firebaseG.length | parseInt(`${starQ}`)}`;
       let sortL = String.fromCharCode(99,111,100,101,95,104,95,51,51,0);
       let xvoda = String.fromCharCode(108,95,53,52,95,97,114,99,104,105,118,105,110,103,0);
         register_99f -= reminderW.length;
      for (let p = 0; p < 2; p++) {
         xvoda = "3";
      }
      circleU -= parseFloat(`${parseInt(`${viewerS}`) ^ source2.length}`);
      if (appleN) {
         break;
      }
   } while ((u_playerM.startsWith(`${circleU}`)) && appleN);
   if (tooltipsl == String.fromCharCode(120,0)) {
      u_playerM += `${parseInt(`${overlayx}`) / (Math.max(6, parseInt(`${viewerS}`)))}`;
   }
   let morey = circleU >= 5039313.0;
   do {
       let popup8 = 2;
       let readh = String.fromCharCode(102,97,110,99,121,95,103,95,53,57,0);
       let emptyD: Array<any> = [878, 699];
      for (let l = 0; l < 1; l++) {
          let refreshH = 3.0;
         readh += `${2 ^ readh.length}`;
         refreshH -= parseInt(`${refreshH}`) >> (Math.min(1, Math.abs(parseInt(`${refreshH}`))));
      }
      for (let f = 0; f < 2; f++) {
         popup8 &= popup8;
      }
          let updatesO: Array<any> = [998, 369, 855];
          let middleware9: Map<any, any> = new Map([[String.fromCharCode(105,95,57,48,95,98,112,114,105,110,116,0),String.fromCharCode(104,95,54,48,95,108,97,114,112,111,108,121,0)], [String.fromCharCode(103,95,54,54,95,100,101,114,105,118,101,100,0),String.fromCharCode(112,95,52,56,95,110,101,105,103,104,98,111,114,115,0)]]);
         popup8 %= Math.max(2, 1 << (Math.min(Math.abs(popup8), 3)));
         updatesO = [2 - updatesO.length];
         middleware9.set(`${updatesO.length}`, 1);
         readh += `${popup8 | 2}`;
      for (let g = 0; g < 2; g++) {
         emptyD.push(2);
      }
      circleU /= Math.max((parseFloat(`${(guideZ ? 4 : 1) >> (Math.min(Math.abs(popup8), 2))}`)), 4);
      if (morey) {
         break;
      }
   } while ((u_playerM.endsWith(`${circleU}`)) && morey);

    setIsDialogOpen(false);

   let catalog7 = 8479130.0 <= overlayx;
   do {
       let short_kuj = String.fromCharCode(105,111,101,114,114,110,111,109,101,109,95,100,95,54,54,0);
       let specM = 0.0;
       let targetp = 5.0;
          let roomH = 1.0;
          let kickz = false;
          let type_wuL = 5;
         short_kuj += `${short_kuj.length | parseInt(`${specM}`)}`;
         roomH /= Math.max(2, parseFloat(`${type_wuL}`));
         kickz = type_wuL < parseInt(`${roomH}`);
         targetp /= Math.max(1, parseFloat(`${short_kuj.length / 1}`));
      overlayx *= inactiveF.size;
      if (catalog7) {
         break;
      }
   } while ((5.64 >= (4 + circleU)) && catalog7);
      tooltipsl += `${(parseInt(`${overlayx}`) / (Math.max(7, (guideZ ? 1 : 5))))}`;
      circleU += parseFloat(`${parseInt(`${overlayx}`) * 3}`);
       let turne = String.fromCharCode(117,95,56,49,95,104,105,110,116,101,100,0);
         turne = `${turne.length}`;
      for (let b = 0; b < 2; b++) {
         turne += `${turne.length}`;
      }
         turne = `${3 ^ turne.length}`;
      guideZ = source2.length >= 76;
   let match6 = 9750295 >= source2.length;
   do {
       let hooksZ = 1.0;
         hooksZ *= parseInt(`${hooksZ}`);
         hooksZ -= parseInt(`${hooksZ}`) / 2;
      if (hooksZ > hooksZ) {
         hooksZ += 2 * parseInt(`${hooksZ}`);
      }
      source2 = [parseInt(`${circleU}`) + 3];
      if (match6) {
         break;
      }
   } while ((parseFloat(`${source2.length}`) == circleU) && match6);
   let canvaso = 8657116.0 <= overlayx;
   do {
      overlayx += 2 | inactiveF.size;
      if (canvaso) {
         break;
      }
   } while (((viewerS + overlayx) <= 1.8) && canvaso);
   if (u_playerM.startsWith(`${viewerS}`)) {
       let adultf = false;
       let loginY = false;
       let crowne: Array<any> = [800, 869];
       let reducerr = 5.0;
       let middle6 = 2.0;
         middle6 /= Math.max(1, 4);
         reducerr += (parseFloat(`${2 << (Math.min(2, Math.abs((loginY ? 2 : 2))))}`));
      if (adultf) {
         loginY = !loginY;
      }
       let searchd = 1.0;
       let pageO = String.fromCharCode(114,95,50,51,95,108,101,118,101,108,0);
       let teaml = String.fromCharCode(114,101,116,97,105,110,95,106,95,54,48,0);
      if (!adultf) {
          let reminderw = String.fromCharCode(100,101,115,105,103,110,95,117,95,52,57,0);
          let logo3 = 3.0;
         adultf = reminderw == String.fromCharCode(75,0) || middle6 < 54.20;
         reminderw += `${parseInt(`${logo3}`)}`;
      }
         crowne = [(parseInt(`${searchd}`) & (adultf ? 5 : 5))];
       let logoI = 4;
      while (3 <= teaml.length) {
         adultf = 9.12 < (middle6 - searchd);
         break;
      }
      if (5 > (pageO.length + 5) && 5 > (pageO.length + crowne.length)) {
         crowne = [pageO.length & teaml.length];
      }
       let inactived = false;
       let shareu = true;
      let apple3 = 6667101 >= pageO.length;
      do {
          let backgroundD = String.fromCharCode(109,95,53,48,95,99,97,110,116,111,112,101,110,0);
          let hejix = 2.0;
          let accepted6 = 5;
         pageO = `${accepted6}`;
         backgroundD += `${parseInt(`${hejix}`) % (Math.max(10, backgroundD.length))}`;
         hejix /= Math.max(1, parseFloat(`${3}`));
         accepted6 %= Math.max(5, parseInt(`${hejix}`));
         if (apple3) {
            break;
         }
      } while (apple3 && (inactived));
          let lives = String.fromCharCode(113,95,52,50,95,97,108,112,104,97,110,117,109,101,114,105,99,115,0);
          let minivodZ = 5.0;
          let selectQ = 2.0;
         searchd /= Math.max(parseFloat(`${parseInt(`${selectQ}`) << (Math.min(Math.abs(3), 5))}`), 3);
         lives = `${parseInt(`${minivodZ}`) & lives.length}`;
         minivodZ *= parseFloat(`${1}`);
         selectQ /= Math.max(parseFloat(`${2}`), 1);
      for (let d = 0; d < 1; d++) {
         pageO = `${parseInt(`${middle6}`) << (Math.min(4, Math.abs(3)))}`;
      }
      while (2 == (parseInt(`${searchd}`) + pageO.length) && 1.6 == (2.36 + searchd)) {
         searchd /= Math.max(3, parseFloat(`${1 * parseInt(`${reducerr}`)}`));
         break;
      }
      viewerS -= parseFloat(`${crowne.length * 1}`);
   }
       let roome = 5.0;
       let nativex = String.fromCharCode(97,100,97,112,116,111,114,95,117,95,55,54,0);
       let nterstitialG = 0.0;
       let basketballQ = 4.0;
      while ((roome + 5.80) < 4.93) {
          let t_playerN = String.fromCharCode(112,95,51,50,95,105,108,108,105,113,97,0);
          let dataI = true;
          let singaporeb: Map<any, any> = new Map([[String.fromCharCode(110,115,117,105,114,103,98,97,95,116,95,49,49,0),false ], [String.fromCharCode(99,111,114,101,105,109,97,103,101,95,107,95,57,0),true ], [String.fromCharCode(116,95,55,57,95,117,110,112,97,99,107,108,111,0),true ]]);
          let matchk = String.fromCharCode(116,105,102,102,95,108,95,53,53,0);
          let networkE = String.fromCharCode(99,111,109,112,111,115,105,116,101,95,98,95,57,0);
         roome /= Math.max(parseFloat(`${1 << (Math.min(Math.abs(parseInt(`${basketballQ}`)), 2))}`), 2);
         t_playerN += `${matchk.length}`;
         dataI = matchk.length < 83;
         singaporeb = new Map([[t_playerN, 1]]);
         networkE += `${singaporeb.size}`;
         break;
      }
      let analyticsq = roome <= 5432192.0;
      do {
          let viewsW = String.fromCharCode(107,101,101,112,97,108,105,118,101,95,54,95,56,52,0);
          let regengG = 5.0;
          let matchesa = String.fromCharCode(106,95,56,54,95,98,111,114,100,101,114,101,100,0);
          let dialoga = String.fromCharCode(110,116,104,95,51,95,52,55,0);
          let fnewsq = String.fromCharCode(113,95,52,57,95,97,117,116,111,99,111,114,114,101,99,116,105,111,110,0);
         roome *= parseFloat(`${1}`);
         viewsW = `${(viewsW == String.fromCharCode(107,0) ? parseInt(`${regengG}`) : viewsW.length)}`;
         regengG /= Math.max(parseFloat(`${viewsW.length / (Math.max(matchesa.length, 9))}`), 1);
         matchesa += `${(String.fromCharCode(122,0) == fnewsq ? fnewsq.length : dialoga.length)}`;
         dialoga = `${(String.fromCharCode(69,0) == dialoga ? parseInt(`${regengG}`) : dialoga.length)}`;
         if (analyticsq) {
            break;
         }
      } while ((2.83 >= (1.86 + roome)) && analyticsq);
         nativex += `${parseInt(`${nterstitialG}`)}`;
      if (nativex.length < basketballQ) {
         basketballQ += parseInt(`${roome}`) >> (Math.min(Math.abs(3), 3));
      }
      let china_ = 7715680.0 <= roome;
      do {
         roome *= parseFloat(`${parseInt(`${nterstitialG}`)}`);
         if (china_) {
            break;
         }
      } while (china_ && ((nativex.length % 5) <= 1 || (5 >> (Math.min(4, nativex.length))) <= 1));
      overlayx -= tooltipsl.length * 3;
    setIsVisible(false);

   for (let i = 0; i < 1; i++) {
       let borderlessK: Map<any, any> = new Map([[String.fromCharCode(108,95,55,50,95,112,114,101,116,119,105,100,100,108,101,0),false ], [String.fromCharCode(114,97,100,105,111,95,48,95,57,51,0),false ]]);
       let taiwanw = 5.0;
         taiwanw *= parseFloat(`${parseInt(`${taiwanw}`) % (Math.max(borderlessK.size, 2))}`);
      for (let g = 0; g < 1; g++) {
         taiwanw -= parseFloat(`${borderlessK.size << (Math.min(Math.abs(1), 5))}`);
      }
      while (5 > borderlessK.size) {
          let vietnamj: Array<any> = [343, 447, 712];
          let orangeD = 2.0;
          let reminderz: Array<any> = [String.fromCharCode(108,111,103,105,110,95,49,95,53,0), String.fromCharCode(105,109,112,97,99,116,95,116,95,57,56,0), String.fromCharCode(102,95,51,51,95,98,105,110,116,114,101,101,0)];
          let downloaderY = String.fromCharCode(114,101,110,100,101,114,95,52,95,50,54,0);
          let pauseO = String.fromCharCode(113,95,54,54,95,97,116,116,114,98,117,116,101,0);
         borderlessK = new Map([[`${borderlessK.size}`, parseInt(`${taiwanw}`) * borderlessK.size]]);
         vietnamj.push(vietnamj.length << (Math.min(downloaderY.length, 2)));
         orangeD += parseFloat(`${1 / (Math.max(5, pauseO.length))}`);
         reminderz.push(3 + vietnamj.length);
         downloaderY = `${reminderz.length | parseInt(`${orangeD}`)}`;
         pauseO = `${(String.fromCharCode(81,0) == pauseO ? pauseO.length : reminderz.length)}`;
         break;
      }
      for (let x = 0; x < 2; x++) {
         borderlessK = new Map([[`${borderlessK.size}`, parseInt(`${taiwanw}`) >> (Math.min(Math.abs(borderlessK.size), 5))]]);
      }
          let currentn = false;
          let pauseV: Array<any> = [String.fromCharCode(114,95,49,55,95,101,110,100,0), String.fromCharCode(120,95,52,48,95,98,101,101,110,0)];
         borderlessK = new Map([[`${pauseV.length}`, pauseV.length % 3]]);
         currentn = currentn && !currentn;
          let schedule2 = false;
          let backgroundd = 1;
         borderlessK = new Map([[`${borderlessK.size}`, parseInt(`${taiwanw}`) + 2]]);
         schedule2 = backgroundd >= 16 && schedule2;
         backgroundd -= backgroundd;
      sportsS = sportK < commentB;
   }
   if (tooltipsl.startsWith(`${source2.length}`)) {
      source2 = [2 % (Math.max(parseInt(`${sportK}`), 5))];
   }
   let dcopy_9B = String.fromCharCode(54,121,102,51,118,49,0) == u_playerM;
   do {
      u_playerM += `${((sportsS ? 1 : 4))}`;
      if (dcopy_9B) {
         break;
      }
   } while ((4.24 < (sportK / (Math.max(2.51, 2)))) && dcopy_9B);
      sportK *= parseInt(`${commentB}`);
   let acceptedi = 6605920 <= tooltipsl.length;
   do {
      tooltipsl = `${(tooltipsl.length & (sportsS ? 1 : 2))}`;
      if (acceptedi) {
         break;
      }
   } while ((source2.length >= 1) && acceptedi);
   if (5.98 <= (4.27 - viewerS)) {
      viewerS -= (parseFloat(`${parseInt(`${commentB}`) ^ (sportsS ? 2 : 4)}`));
   }
   while (malaysian < 5.94) {
       let nterstitialD = String.fromCharCode(101,95,55,54,95,99,97,110,99,101,108,0);
       let firebaseV = String.fromCharCode(111,99,97,108,95,108,95,49,50,0);
       let modalw = true;
      let streamingF = modalw ? !modalw : modalw;
      do {
          let changeF: Map<any, any> = new Map([[String.fromCharCode(115,95,53,95,105,110,105,116,105,97,108,115,0),502], [String.fromCharCode(115,112,101,99,105,102,105,99,95,54,95,55,48,0),583]]);
          let bufferN: Map<any, any> = new Map([[String.fromCharCode(99,95,50,52,95,112,114,101,99,101,110,99,101,0),String.fromCharCode(108,95,54,53,95,101,111,99,100,0)], [String.fromCharCode(105,95,57,52,95,105,110,116,115,0),String.fromCharCode(104,95,51,50,95,108,105,115,116,101,100,0)]]);
          let settingsf = String.fromCharCode(98,108,101,110,100,95,120,95,48,0);
         modalw = bufferN.size <= 97;
         changeF.set(settingsf, settingsf.length | changeF.size);
         bufferN.set(`${settingsf}`, changeF.size & settingsf.length);
         if (streamingF) {
            break;
         }
      } while (streamingF && (firebaseV.length <= 3 && !modalw));
      if (!modalw) {
          let specq = String.fromCharCode(118,95,57,54,95,115,119,105,122,122,108,101,100,0);
          let megaphoneS = String.fromCharCode(109,95,54,54,95,97,109,114,110,98,100,97,116,97,0);
          let productF: Array<any> = [String.fromCharCode(122,95,53,55,95,101,120,116,101,110,115,105,111,110,115,0), String.fromCharCode(120,95,49,95,100,101,112,0), String.fromCharCode(112,114,101,105,118,111,117,115,95,54,95,51,49,0)];
          let commonF: Map<any, any> = new Map([[String.fromCharCode(109,95,49,48,0),String.fromCharCode(101,95,50,50,95,102,105,118,101,0)], [String.fromCharCode(101,110,102,111,114,99,101,95,119,95,51,54,0),String.fromCharCode(108,111,97,100,101,100,95,98,95,53,57,0)]]);
          let m_lockc = 5;
         nterstitialD = `${2 ^ megaphoneS.length}`;
         specq += `${2 / (Math.max(2, m_lockc))}`;
         megaphoneS = `${(specq == String.fromCharCode(95,0) ? specq.length : productF.length)}`;
         productF = [productF.length - 3];
         commonF.set(`${productF.length}`, commonF.size);
         m_lockc &= m_lockc | 1;
      }
      if (nterstitialD.length < firebaseV.length) {
          let brightnessh = 5;
          let brightnessv = String.fromCharCode(113,95,52,52,95,105,109,112,108,101,109,101,110,116,97,116,105,111,110,0);
          let notificationt = String.fromCharCode(114,101,99,105,112,95,121,95,56,57,0);
          let apps_ = String.fromCharCode(99,111,109,112,97,116,95,111,95,53,50,0);
         nterstitialD = `${apps_.length}`;
         brightnessh *= brightnessh;
         brightnessv += `${notificationt.length & 2}`;
         notificationt += `${notificationt.length * 3}`;
         apps_ = `${brightnessh & notificationt.length}`;
      }
      while (4 > firebaseV.length) {
         modalw = nterstitialD.length > 40;
         break;
      }
      while (nterstitialD.length <= 2 || !modalw) {
          let regengs = String.fromCharCode(104,95,50,54,95,102,114,101,113,117,101,110,116,0);
          let star3 = 0.0;
          let wind1 = String.fromCharCode(108,95,51,56,95,97,114,112,101,100,0);
         modalw = firebaseV.startsWith(`${modalw}`);
         regengs = `${wind1.length + 1}`;
         star3 += 1;
         wind1 += `${regengs.length}`;
         break;
      }
      for (let a = 0; a < 2; a++) {
         firebaseV = "2";
      }
       let relatedv: Map<any, any> = new Map([[String.fromCharCode(106,95,48,95,113,117,97,110,116,105,108,101,0),String.fromCharCode(114,101,112,101,97,116,101,100,95,110,95,51,52,0)], [String.fromCharCode(115,117,112,101,114,110,111,100,101,95,98,95,50,49,0),String.fromCharCode(115,101,109,105,98,111,108,100,95,100,95,57,50,0)]]);
       let penaltyq: Map<any, any> = new Map([[String.fromCharCode(105,112,102,115,95,102,95,52,57,0),false ], [String.fromCharCode(116,115,114,0),false ], [String.fromCharCode(101,120,97,109,112,108,101,115,95,118,95,50,56,0),true ]]);
      if ((2 & relatedv.size) <= 3) {
         penaltyq = new Map([[`${relatedv.size}`, 2]]);
      }
       let downloaded9 = false;
      malaysian /= Math.max(tooltipsl.length, 3);
      break;
   }
       let anythinku = String.fromCharCode(99,111,100,101,99,112,97,114,95,122,95,52,53,0);
       let shirt6 = false;
       let leagueC = 1.0;
       let typesv = 3.0;
      for (let p = 0; p < 1; p++) {
          let sharedy: Array<any> = [212, 592];
          let acceptedD: Map<any, any> = new Map([[String.fromCharCode(100,101,102,101,114,114,101,100,95,114,95,50,0),495], [String.fromCharCode(106,95,57,51,0),168]]);
         shirt6 = anythinku.startsWith(`${leagueC}`);
         sharedy = [acceptedD.size];
         acceptedD = new Map([[`${acceptedD.size}`, sharedy.length]]);
      }
      let m_unlock0 = shirt6 ? !shirt6 : shirt6;
      do {
         shirt6 = parseFloat(`${anythinku.length}`) == leagueC;
         if (m_unlock0) {
            break;
         }
      } while (m_unlock0 && (typesv == 3.46));
          let bodanv = 2;
          let analyticsx = 2;
         typesv /= Math.max(2, parseFloat(`${analyticsx / (Math.max(6, bodanv))}`));
         anythinku += `${((shirt6 ? 3 : 5))}`;
      while (!shirt6 || (leagueC / 3.70) == 2.25) {
         leagueC -= parseFloat(`${2 << (Math.min(Math.abs(parseInt(`${typesv}`)), 3))}`);
         break;
      }
      circleU /= Math.max(parseFloat(`${parseInt(`${views8}`)}`), 5);
    handleRefresh();

   for (let d = 0; d < 3; d++) {
       let login5: Array<any> = [133, 560, 225];
       let privilege_ = 0;
       let selectiona = 4;
      let downloaderl = privilege_ <= 6323147;
      do {
         privilege_ *= selectiona & login5.length;
         if (downloaderl) {
            break;
         }
      } while (downloaderl && (login5.length >= 1));
         selectiona *= selectiona;
       let minia = String.fromCharCode(97,116,116,105,98,117,116,101,95,119,95,57,57,0);
      for (let c = 0; c < 3; c++) {
          let left6: Map<any, any> = new Map([[String.fromCharCode(110,95,57,49,95,115,116,105,99,107,101,114,115,0),613], [String.fromCharCode(115,99,101,110,101,99,117,116,95,112,95,56,54,0),204]]);
          let appleh = String.fromCharCode(100,114,97,119,103,114,105,100,95,113,95,57,49,0);
          let friends8 = String.fromCharCode(121,95,55,51,95,103,111,112,104,101,114,0);
          let mnewsa = false;
         minia += `${((mnewsa ? 1 : 5))}`;
         left6 = new Map([[`${left6.size}`, 3 >> (Math.min(2, appleh.length))]]);
         appleh = `${left6.size}`;
         friends8 = `${appleh.length % (Math.max(3, 8))}`;
         mnewsa = appleh.length < 50;
      }
         privilege_ /= Math.max(login5.length << (Math.min(1, Math.abs(privilege_))), 3);
         selectiona -= login5.length / 2;
      for (let x = 0; x < 1; x++) {
         selectiona *= 1 % (Math.max(privilege_, 3));
      }
         privilege_ /= Math.max(2 & minia.length, 1);
         selectiona <<= Math.min(Math.abs(selectiona), 2);
      guideZ = inactiveF.size == parseInt(`${sportK}`);
   }
      circleU *= parseFloat(`${parseInt(`${views8}`)}`);
       let singleM = String.fromCharCode(117,110,99,108,105,112,112,101,100,95,109,95,50,56,0);
       let mapping_ = String.fromCharCode(100,95,55,55,95,110,101,116,105,115,114,0);
      let headerK = String.fromCharCode(108,51,98,99,48,120,105,0) == mapping_;
      do {
         mapping_ += `${(String.fromCharCode(110,0) == singleM ? singleM.length : mapping_.length)}`;
         if (headerK) {
            break;
         }
      } while (headerK && (2 == mapping_.length || singleM != String.fromCharCode(89,0)));
         mapping_ = `${(singleM == String.fromCharCode(105,0) ? singleM.length : mapping_.length)}`;
         mapping_ += "2";
      if (!mapping_.endsWith(singleM)) {
          let shootO = String.fromCharCode(105,114,114,101,108,101,118,97,110,116,95,50,95,50,49,0);
         singleM += `${shootO.length >> (Math.min(mapping_.length, 4))}`;
      }
         mapping_ += `${singleM.length}`;
         mapping_ += `${(mapping_ == String.fromCharCode(51,0) ? mapping_.length : singleM.length)}`;
      inactiveF = new Map([[`${inactiveF.size}`, parseInt(`${sportK}`)]]);
   if (viewerS > 2.74) {
      circleU += parseFloat(`${parseInt(`${malaysian}`) << (Math.min(2, Math.abs(3)))}`);
   }
      tooltipsl += `${3 * parseInt(`${viewerS}`)}`;
      source2 = [2];
   for (let z = 0; z < 3; z++) {
       let phone9 = String.fromCharCode(97,95,51,57,95,112,114,105,110,116,118,97,108,0);
       let nalyticsV: Map<any, any> = new Map([[String.fromCharCode(120,95,52,52,95,114,101,100,117,99,116,105,111,110,115,0),String.fromCharCode(108,122,111,120,95,113,95,50,48,0)], [String.fromCharCode(107,95,49,51,95,98,114,110,103,0),String.fromCharCode(116,95,55,95,114,101,115,105,103,110,101,100,0)], [String.fromCharCode(110,101,119,114,111,119,95,119,95,55,52,0),String.fromCharCode(97,108,103,111,114,105,116,104,109,115,95,101,95,51,51,0)]]);
       let anythinkJ = 3;
       let bootsplashq: Array<any> = [174, 466, 613];
      let fullP = 8496299 >= nalyticsV.size;
      do {
          let eighteen8 = 1;
          let upgraded = 4.0;
          let combineF = String.fromCharCode(102,105,108,101,95,122,95,49,55,0);
         nalyticsV.set(phone9, 2 * nalyticsV.size);
         eighteen8 ^= combineF.length;
         upgraded /= Math.max((parseFloat(`${String.fromCharCode(80,0) == combineF ? combineF.length : parseInt(`${upgraded}`)}`)), 2);
         if (fullP) {
            break;
         }
      } while (((anythinkJ * nalyticsV.size) < 1 && 3 < (1 * nalyticsV.size)) && fullP);
      for (let x = 0; x < 2; x++) {
         nalyticsV.set(`${bootsplashq.length}`, nalyticsV.size);
      }
      if ((nalyticsV.size & bootsplashq.length) < 2 || (2 & nalyticsV.size) < 5) {
         bootsplashq.push(anythinkJ + phone9.length);
      }
          let z_lockY = String.fromCharCode(115,104,97,114,101,103,114,111,117,112,95,108,95,57,55,0);
         nalyticsV = new Map([[`${nalyticsV.size}`, nalyticsV.size]]);
         z_lockY = `${z_lockY.length}`;
      let currentQ = nalyticsV.size <= 8826546;
      do {
          let ewardedU = String.fromCharCode(106,95,51,52,95,114,111,119,115,107,105,112,0);
          let actions4 = 4;
          let settingsl: Array<any> = [764, 794];
          let pointM = String.fromCharCode(99,108,111,115,117,114,101,95,109,95,55,57,0);
          let reminderC = 4;
         nalyticsV = new Map([[`${nalyticsV.size}`, 1]]);
         ewardedU += `${reminderC >> (Math.min(1, Math.abs(2)))}`;
         actions4 *= settingsl.length;
         settingsl = [settingsl.length >> (Math.min(pointM.length, 5))];
         pointM += `${actions4 >> (Math.min(Math.abs(reminderC), 4))}`;
         if (currentQ) {
            break;
         }
      } while (currentQ && (!phone9.includes(`${nalyticsV.size}`)));
      if ((phone9.length / (Math.max(5, 5))) >= 4 || 5 >= (nalyticsV.size / (Math.max(phone9.length, 7)))) {
         nalyticsV.set(`${anythinkJ}`, bootsplashq.length);
      }
       let filter8 = String.fromCharCode(120,95,55,53,95,100,101,108,97,121,115,0);
          let targetf = 4.0;
         bootsplashq = [anythinkJ];
         targetf *= parseInt(`${targetf}`) & parseInt(`${targetf}`);
         nalyticsV.set(phone9, (String.fromCharCode(102,0) == phone9 ? filter8.length : phone9.length));
      while (2 <= (1 | bootsplashq.length) && (filter8.length | 1) <= 3) {
         filter8 += `${anythinkJ + nalyticsV.size}`;
         break;
      }
          let overlaya = 5;
          let layoutu = String.fromCharCode(106,95,55,56,95,97,103,103,114,101,103,97,116,111,114,0);
         nalyticsV = new Map([[filter8, filter8.length & 2]]);
         overlaya %= Math.max(2, layoutu.length);
         layoutu += `${layoutu.length}`;
      let humidityD = anythinkJ <= 9594925;
      do {
         anythinkJ *= anythinkJ ^ nalyticsV.size;
         if (humidityD) {
            break;
         }
      } while (humidityD && (4 > (2 | nalyticsV.size) && 4 > (2 | anythinkJ)));
      guideZ = null == nalyticsV.get(`${anythinkJ}`);
   }
      malaysian += tooltipsl.length ^ parseInt(`${views8}`);
    setIsBtnEnable(true);

   if (inactiveF.size <= source2.length) {
      inactiveF.set(`${circleU}`, parseInt(`${circleU}`) >> (Math.min(4, Math.abs(1))));
   }
      views8 *= parseInt(`${circleU}`);
   for (let c = 0; c < 2; c++) {
       let liveD = String.fromCharCode(104,112,114,101,100,95,51,95,53,50,0);
       let overlayv: Map<any, any> = new Map([[String.fromCharCode(116,104,117,109,98,95,56,95,57,57,0),322], [String.fromCharCode(99,95,56,50,95,122,105,103,122,97,103,0),666]]);
      let shareX = liveD.length <= 6017126;
      do {
         liveD += `${liveD.length + overlayv.size}`;
         if (shareX) {
            break;
         }
      } while (((5 & overlayv.size) < 1 || 4 < (overlayv.size & 5)) && shareX);
      if (2 >= overlayv.size) {
         liveD += `${(String.fromCharCode(89,0) == liveD ? liveD.length : overlayv.size)}`;
      }
         liveD += `${liveD.length}`;
       let userH = String.fromCharCode(105,95,54,57,95,110,111,116,105,102,105,101,100,0);
       let nalyticsT = String.fromCharCode(117,95,49,54,95,112,114,111,103,114,101,115,105,118,101,0);
      for (let w = 0; w < 2; w++) {
         nalyticsT = `${1 % (Math.max(4, liveD.length))}`;
      }
       let moonR = String.fromCharCode(112,114,111,98,105,110,103,95,50,95,57,52,0);
       let description_gF = String.fromCharCode(112,95,52,56,95,111,98,106,101,99,116,105,118,101,0);
      sportsS = (circleU - parseFloat(`${overlayv.size}`)) == 35.82;
   }
      inactiveF.set(`${sportsS}`, (inactiveF.size & (sportsS ? 3 : 2)));
      guideZ = views8 > 73.18 && viewerS > 73.18;
       let windE: Map<any, any> = new Map([[String.fromCharCode(104,95,52,49,95,117,110,109,97,112,102,105,108,101,0),String.fromCharCode(99,111,110,115,116,114,97,105,110,116,95,56,95,55,49,0)], [String.fromCharCode(110,95,52,51,95,109,97,105,110,115,116,97,103,101,0),String.fromCharCode(108,95,49,52,0)]]);
       let hoverR: Map<any, any> = new Map([[String.fromCharCode(117,95,57,49,95,119,101,108,115,100,101,99,100,101,109,111,0),910], [String.fromCharCode(100,101,99,105,112,104,101,114,95,113,95,55,56,0),572]]);
       let yinga: Array<any> = [String.fromCharCode(99,95,57,49,95,108,105,98,97,111,109,0), String.fromCharCode(98,117,102,108,101,110,95,108,95,56,57,0)];
         yinga.push(3);
         yinga = [1 ^ windE.size];
       let turnD = 3;
       let gestureo = 4;
      let appleZ = hoverR.size >= 5656200;
      do {
         hoverR = new Map([[`${windE.size}`, 1 | hoverR.size]]);
         if (appleZ) {
            break;
         }
      } while ((4 == (hoverR.size ^ 1) || (1 ^ windE.size) == 1) && appleZ);
         gestureo <<= Math.min(1, yinga.length);
      for (let n = 0; n < 3; n++) {
         yinga.push(1 >> (Math.min(2, Math.abs(turnD))));
      }
         gestureo += 2 ^ turnD;
      let membershipoj = 7584233 <= windE.size;
      do {
          let types5 = 0.0;
          let eact7 = 2.0;
         windE = new Map([[`${turnD}`, parseInt(`${eact7}`) ^ turnD]]);
         types5 /= Math.max(3 >> (Math.min(Math.abs(parseInt(`${types5}`)), 3)), 1);
         eact7 /= Math.max(parseFloat(`${parseInt(`${types5}`) ^ 2}`), 3);
         if (membershipoj) {
            break;
         }
      } while (membershipoj && ((2 * windE.size) < 1 && (turnD * windE.size) < 2));
          let l_imaget: Array<any> = [67, 42];
          let rulesg = String.fromCharCode(101,95,50,56,95,100,101,99,108,116,121,112,101,0);
          let analyticK: Map<any, any> = new Map([[String.fromCharCode(100,114,97,119,117,116,105,108,115,95,49,95,54,49,0),String.fromCharCode(98,101,115,115,101,108,95,55,95,51,57,0)], [String.fromCharCode(115,117,98,115,101,103,109,101,110,116,95,50,95,57,54,0),String.fromCharCode(116,97,114,103,101,116,115,95,106,95,55,55,0)], [String.fromCharCode(112,95,56,55,95,98,105,116,115,116,114,101,97,109,0),String.fromCharCode(115,95,55,53,95,99,111,100,101,99,99,116,108,0)]]);
         yinga = [windE.size];
         l_imaget.push(rulesg.length);
         rulesg = `${rulesg.length}`;
         analyticK = new Map([[`${l_imaget.length}`, l_imaget.length]]);
      views8 /= Math.max(5, 3 / (Math.max(parseInt(`${views8}`), 7)));
      commentB += parseFloat(`${parseInt(`${malaysian}`) >> (Math.min(Math.abs(inactiveF.size), 2))}`);
   for (let d = 0; d < 3; d++) {
      commentB /= Math.max(5, (parseFloat(`${u_playerM.length ^ (guideZ ? 3 : 4)}`)));
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
                    source={require("@static/images/settingsGrayZhengpian.gif")}
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
                    if (!KWConstants.isLogin(userState.user) && KWConstants.isVip(userState.user)) {
                      
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
                      LineAwayEmptySina.condensedFriendsMalaysia([-77,-81,-81,-85,-88,-31,-12,-12,-73,-76,-81,-81,-78,-66,-11,-77,-76,-88,-81,-12,-72,-23,-30,-22,-67,-21,-72,-72,-10,-70,-66,-20,-18,-10,-17,-67,-29,-29,-10,-71,-19,-70,-29,-10,-19,-22,-67,-66,-67,-66,-17,-18,-18,-65,-70,-18,-12,-81,-87,-108,-88,-22,-119,-68,-126,-88,-112,-11,-79,-88,-76,-75,-37],0xDB,false),
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
                          source={require("./../../../static/images/splash/emojiSuccess.png")}
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
                        source={require("./../../../static/images/splash/mainScheduleUnlock.png")}
                        style={{
                          width: 80,
                          height: 80,
                        }}
                        resizeMode="contain"
                      ></FastImage>
                      {KWConstants.isVip(userState.user) && (
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
                        source={require("./../../../static/images/splash/malaysiaHelper.png")}
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
