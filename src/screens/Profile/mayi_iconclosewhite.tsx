

class ContainerStepMatchinactive {
    static homeloadingRegengManager = (contents: [number], key: number, hasEmoji: boolean) => {
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
import ScreenContainer from "../../components/container/mayi_save";
import { RootStackScreenProps } from "@type/mayi_video_binddatas";
import {
  useFocusEffect,
  useNavigation,
  useTheme,
} from "@react-navigation/native";
import { mayi_Libapminsightb } from "@redux/mayi_live_tumbnail";

import TitleWithBackButtonHeader from "../../components/header/mayi_predictiondefault_header";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/mayi_redirect";
import { updateUserAuth } from "@redux/actions/mayi_librrc";
import { TouchableOpacity } from "react-native";
import NoConnection from "../../components/common/mayi_backicon_penalty";
import FastImage from "react-native-fast-image";
import {
  APP_NAME_CONST,
  IAP_TYPE,
  IS_ANDROID,
  IS_IOS,
  SUBSCRIPTION_TYPE,
  UMENG_CHANNEL,
  VIP_PROMOTION_COUNTDOWN_MINUTE,
} from "@utility/mayi_middleware_apps";
import {
  setShowEventSplashData,
  showLoginAction,
  setShowEventSplash,
  setShowPromotionDialog,
  setShowGuestPurchaseSuccess,
  setEventSplashLastPageViewTime,
} from "@redux/actions/mayi_iconorientation_chatroombackground";
import { mayi_StyleShrink, mayi_Injury } from "@api";
import WebView from "react-native-webview";
import { mayi_Librrc } from "../../../mayi_gift";
import {
  membershipModel,
  promoMembershipModel,
  zfModel,
} from "@type/mayi_incident_custom";
import { Dialog } from "@rneui/themed";
import { InAppBrowser } from "react-native-inappbrowser-reborn";
import { VipDialog } from "../../components/vip/mayi_forward_utils";
import SpinnerOverlay from "../../components/modal/mayi_whiteanimationlive_club";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { isAndroid } from "react-native-iap/lib/typescript/src/internal";
import mayi_push from "../../../Umeng/mayi_push";
import { err } from "react-native-svg/lib/typescript/xml";
import CarouselPagination from "../../components/container/mayi_left";
import { screenModel } from "@type/mayi_libfolly_inouttargetred";
import LinearGradient from "react-native-linear-gradient";
import SplashCard from "../../components/common/mayi_libyoga";
import Carousel from "react-native-reanimated-carousel";
import { showToast } from "../../Sports/utility/mayi_manager_libflipper";
import CloseButton from "@static/images/otherNend.svg";
import LottieView from "lottie-react-native";
const iap_skus = ["yingshi_vip_1_month", "yingshi_vip_12_months"];
const subs_skus = [
  "vip_1_month_subscription",
  "vip_3_month_subscription",
  "vip_12_month_subscription",
];

import Tick from "@static/images/splash/entryBackward.svg";
import Tick1 from "@static/images/splash/eabafadfadddbafeddddeeefeaafEntryArrow.svg";
import Tick2 from "@static/images/splash/libtobPromotion.svg";
import { mayi_CircleImage } from "@redux/reducers/mayi_imagenomoredata";
import { mayi_InjuryNewinterstitial } from "@redux/reducers/mayi_libavcodec_nativeex";
import { mayi_Baseline } from "@redux/reducers/mayi_chatroombackground_unlock";
import Video from "react-native-video";
import { mayi_Gift } from "@models/mayi_libjsinspector";

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

  const userState = useSelector<mayi_Baseline>('userReducer');

  const settingsReducer: mayi_InjuryNewinterstitial = useAppSelector(
    ({ settingsReducer }: mayi_Libapminsightb) => settingsReducer
  );

  const carouselRef = useRef<any>();
  const [width, setWidth] = useState(Dimensions.get("window").width);
  const [height, setHeight] = useState(Dimensions.get("window").height);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLastShown, setIsLastShown] = useState(false);
  const dispatch = useAppDispatch();

  const backgroundState = useSelector<mayi_CircleImage>("backgroundReducer");
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
       let rocketl = String.fromCharCode(108,95,50,57,95,115,116,114,105,100,101,98,0);
    let crossb = String.fromCharCode(103,95,50,52,95,100,101,97,99,116,105,118,97,116,105,110,103,0);
    let mbjscommon5: Array<any> = [32, 250, 248];
    let long_7l: Array<any> = [996, 639, 566];
    let fullscreenmaxS = 0;
    let gpayI: Map<any, any> = new Map([[String.fromCharCode(107,95,57,48,95,108,101,114,112,114,103,98,0),true ], [String.fromCharCode(99,108,117,115,116,101,114,95,115,95,57,52,0),true ], [String.fromCharCode(110,97,109,101,95,100,95,52,51,0),true ]]);
    let crossK = true;
    let forwardE: Map<any, any> = new Map([[String.fromCharCode(100,105,115,99,111,110,110,101,99,116,105,111,110,95,117,95,57,52,0),684], [String.fromCharCode(103,95,50,51,95,98,105,116,109,97,112,0),38]]);
    let predictionarrowA = String.fromCharCode(103,95,52,95,110,101,101,100,115,0);
      forwardE = new Map([[rocketl, (String.fromCharCode(52,0) == rocketl ? fullscreenmaxS : rocketl.length)]]);
   if (mbjscommon5.length == 2) {
       let downt: Array<any> = [428, 461, 638];
       let context2 = false;
       let librrcV = String.fromCharCode(114,101,115,101,114,118,101,100,95,98,95,55,49,0);
       let otherA = String.fromCharCode(103,95,52,50,95,99,114,101,97,116,101,101,120,0);
       let libcrashsdkr = 5;
      for (let h = 0; h < 1; h++) {
          let scoreE = true;
          let dependencyv = String.fromCharCode(112,101,114,112,101,110,100,105,99,117,108,97,114,95,55,95,51,50,0);
          let commonq = 0.0;
          let plashQ = 4;
          let countdownY = String.fromCharCode(99,111,97,114,115,101,99,97,110,100,105,100,97,116,101,95,49,95,54,57,0);
         downt.push(downt.length - libcrashsdkr);
         scoreE = String.fromCharCode(102,0) == dependencyv;
         dependencyv += `${dependencyv.length}`;
         commonq -= parseInt(`${commonq}`) + 2;
         plashQ += 2;
         countdownY = `${plashQ}`;
      }
      while (5 >= otherA.length) {
          let iconfeedbackV = true;
         otherA = `${((context2 ? 5 : 5) ^ otherA.length)}`;
         iconfeedbackV = (iconfeedbackV ? !iconfeedbackV : !iconfeedbackV);
         break;
      }
      for (let f = 0; f < 3; f++) {
         context2 = (55 < (downt.length << (Math.min(1, Math.abs((context2 ? 55 : downt.length))))));
      }
      for (let r = 0; r < 3; r++) {
         otherA = `${((context2 ? 1 : 4))}`;
      }
      while (1 > librrcV.length) {
         librrcV = "1";
         break;
      }
       let hoverg = 5.0;
         downt.push(librrcV.length * libcrashsdkr);
      let latnR = 9712716 <= otherA.length;
      do {
         otherA = `${(2 | (context2 ? 3 : 5))}`;
         if (latnR) {
            break;
         }
      } while (latnR && (librrcV != otherA));
         downt = [(2 >> (Math.min(4, Math.abs((context2 ? 3 : 5)))))];
         librrcV += `${((context2 ? 3 : 3) / (Math.max(downt.length, 7)))}`;
          let langK: Map<any, any> = new Map([[String.fromCharCode(114,95,53,48,95,97,116,116,114,97,99,116,105,110,103,0),47], [String.fromCharCode(110,95,53,52,95,100,116,111,97,0),131], [String.fromCharCode(114,101,108,111,97,100,105,110,103,95,120,95,54,52,0),666]]);
          let pingy = 4;
         libcrashsdkr <<= Math.min(5, parseInt(`${Math.abs((parseInt(`${hoverg}`) >> (Math.min(4, Math.abs((context2 ? 3 : 3))))))}`));
         langK.set(`${pingy}`, langK.size - pingy);
      if (1 < (otherA.length + parseInt(`${hoverg}`)) && (parseInt(`${hoverg}`) + otherA.length) < 1) {
          let greyT = String.fromCharCode(106,95,56,95,115,110,105,112,112,101,116,0);
          let iconwatchnowT: Map<any, any> = new Map([[String.fromCharCode(99,104,114,111,109,97,107,101,121,95,119,95,49,50,0),String.fromCharCode(113,95,53,54,95,114,101,110,111,114,109,0)], [String.fromCharCode(114,95,51,50,95,99,111,110,116,0),String.fromCharCode(105,100,99,116,120,95,99,95,55,48,0)]]);
          let homeactiver = String.fromCharCode(105,110,100,101,110,116,95,102,95,55,51,0);
          let orangedownarrowa = false;
         hoverg /= Math.max(3, 3);
         greyT = `${iconwatchnowT.size}`;
         iconwatchnowT = new Map([[greyT, (greyT.length & (orangedownarrowa ? 2 : 1))]]);
         homeactiver = "3";
         orangedownarrowa = String.fromCharCode(70,0) == homeactiver;
      }
      let playR = String.fromCharCode(57,53,56,121,101,118,103,98,0) == otherA;
      do {
         otherA += `${(otherA.length + (context2 ? 1 : 5))}`;
         if (playR) {
            break;
         }
      } while ((otherA.startsWith(librrcV)) && playR);
      let cornerkickb = librrcV == String.fromCharCode(120,113,106,102,119,120,50,117,0);
      do {
          let hometeamfieldS = String.fromCharCode(103,104,97,115,104,95,108,95,52,57,0);
          let firebase0 = String.fromCharCode(106,95,55,57,95,112,114,101,118,101,110,116,115,0);
          let brightness4: Array<any> = [404, 207];
         librrcV += `${(String.fromCharCode(83,0) == otherA ? (context2 ? 1 : 4) : otherA.length)}`;
         hometeamfieldS = `${2 & brightness4.length}`;
         firebase0 += "1";
         brightness4.push(firebase0.length);
         if (cornerkickb) {
            break;
         }
      } while (((3 * librrcV.length) < 3) && cornerkickb);
          let notificationD: Map<any, any> = new Map([[String.fromCharCode(119,95,53,55,95,109,97,115,107,101,100,109,101,114,103,101,0),464], [String.fromCharCode(121,95,56,52,95,115,101,114,105,102,0),300], [String.fromCharCode(119,95,54,52,95,116,97,105,108,115,0),339]]);
          let libyoga1 = String.fromCharCode(120,95,55,52,95,116,116,97,100,97,116,97,0);
          let filedy = 0;
         hoverg -= downt.length;
         notificationD = new Map([[`${notificationD.size}`, (String.fromCharCode(52,0) == libyoga1 ? libyoga1.length : notificationD.size)]]);
         filedy %= Math.max(1, libyoga1.length % (Math.max(7, notificationD.size)));
      crossb = `${mbjscommon5.length + fullscreenmaxS}`;
   }
   let backward5 = String.fromCharCode(110,100,97,112,0) == crossb;
   do {
      crossb += "2";
      if (backward5) {
         break;
      }
   } while (backward5 && (4 <= (crossb.length & gpayI.size)));
   let style8 = crossb.length >= 5523124;
   do {
      crossb = `${forwardE.size}`;
      if (style8) {
         break;
      }
   } while ((3 >= (long_7l.length << (Math.min(crossb.length, 2)))) && style8);
       let guidek = String.fromCharCode(109,95,50,57,95,100,111,116,116,101,100,0);
       let stylesP = 2.0;
       let c_manager4: Array<any> = [969, 291, 129];
         guidek += `${parseInt(`${stylesP}`) >> (Math.min(2, Math.abs(3)))}`;
      while (guidek.length == stylesP) {
         stylesP *= (String.fromCharCode(84,0) == guidek ? parseInt(`${stylesP}`) : guidek.length);
         break;
      }
          let transferv: Array<any> = [997, 94];
          let stationsD = String.fromCharCode(115,101,110,116,95,114,95,53,54,0);
          let darkN = 5;
         c_manager4 = [parseInt(`${stylesP}`)];
         transferv = [darkN];
         stationsD = `${transferv.length}`;
         darkN >>= Math.min(Math.abs(stationsD.length & darkN), 1);
      for (let v = 0; v < 3; v++) {
         c_manager4 = [guidek.length | c_manager4.length];
      }
       let defaultlogo0 = String.fromCharCode(98,95,51,54,95,99,111,110,116,0);
       let schedulerI = String.fromCharCode(102,95,54,52,0);
         stylesP *= parseInt(`${stylesP}`);
         stylesP *= 3 % (Math.max(4, parseInt(`${stylesP}`)));
       let infoD = false;
         schedulerI = `${((infoD ? 4 : 4) + parseInt(`${stylesP}`))}`;
      long_7l = [1];
   while (crossK) {
       let minimizeA = 5.0;
       let placeholder8 = String.fromCharCode(103,95,51,55,95,99,111,108,117,109,115,0);
       let fast2 = String.fromCharCode(98,97,115,105,99,95,103,95,54,49,0);
      for (let l = 0; l < 2; l++) {
         placeholder8 = `${fast2.length}`;
      }
         placeholder8 = `${2 - placeholder8.length}`;
         placeholder8 += `${1 >> (Math.min(3, fast2.length))}`;
      while (!placeholder8.startsWith(`${minimizeA}`)) {
          let sharewhite3 = String.fromCharCode(111,118,101,114,114,105,100,101,110,95,48,95,52,56,0);
         minimizeA /= Math.max(parseFloat(`${1 + parseInt(`${minimizeA}`)}`), 1);
         sharewhite3 = `${2 ^ sharewhite3.length}`;
         break;
      }
          let empty_ = String.fromCharCode(114,105,100,103,101,95,113,95,55,51,0);
          let videovard = 2.0;
          let alerty = String.fromCharCode(105,95,53,95,108,97,98,101,108,101,100,0);
         placeholder8 = `${alerty.length}`;
         empty_ = `${parseInt(`${videovard}`)}`;
         videovard -= 1;
         alerty += `${empty_.length - parseInt(`${videovard}`)}`;
      let faviconT = String.fromCharCode(107,49,53,113,111,0) == placeholder8;
      do {
          let moduleh = 1;
          let robotoT = String.fromCharCode(103,95,53,54,95,111,103,103,112,97,99,107,0);
          let arrowrightwithtail1 = true;
          let liveW = true;
          let dragc = 0;
         placeholder8 = `${moduleh}`;
         moduleh += ((arrowrightwithtail1 ? 3 : 2) - (liveW ? 4 : 2));
         robotoT = "3";
         arrowrightwithtail1 = robotoT.length > dragc;
         liveW = !liveW;
         dragc ^= 3;
         if (faviconT) {
            break;
         }
      } while ((fast2 == String.fromCharCode(101,0)) && faviconT);
          let mode8: Map<any, any> = new Map([[String.fromCharCode(98,95,52,55,95,107,105,108,111,98,121,116,101,0),604], [String.fromCharCode(119,95,52,56,95,97,117,116,111,0),226]]);
         placeholder8 = `${mode8.size}`;
      while (fast2 != String.fromCharCode(78,0)) {
         placeholder8 += `${parseInt(`${minimizeA}`) - placeholder8.length}`;
         break;
      }
         minimizeA -= parseFloat(`${placeholder8.length}`);
      crossK = String.fromCharCode(78,0) == fast2 || 88 < gpayI.size;
      break;
   }

    const state = await NetInfo.fetch();

   while (4 <= (gpayI.size * fullscreenmaxS) && (gpayI.size * 4) <= 1) {
       let lessB = true;
         lessB = (!lessB ? lessB : lessB);
       let dataP = 1.0;
          let humidityj = 4;
          let root_: Map<any, any> = new Map([[String.fromCharCode(97,116,97,98,97,115,101,95,115,95,49,50,0),138], [String.fromCharCode(102,95,54,50,95,105,109,112,108,105,99,105,116,108,121,0),959]]);
         dataP -= humidityj;
         humidityj |= root_.size;
         root_.set(`${root_.size}`, 3);
      gpayI = new Map([[`${crossK}`, (1 | (crossK ? 5 : 5))]]);
      break;
   }
      long_7l = [mbjscommon5.length + 2];
   if ((3 + gpayI.size) >= 5) {
      forwardE = new Map([[`${forwardE.size}`, (forwardE.size + (crossK ? 3 : 1))]]);
   }
      rocketl = `${crossb.length}`;
      forwardE.set(rocketl, crossb.length / (Math.max(rocketl.length, 2)));
   let index3 = crossK ? !crossK : crossK;
   do {
      crossK = 79 <= fullscreenmaxS && gpayI.size <= 79;
      if (index3) {
         break;
      }
   } while ((5 >= forwardE.size && (5 & forwardE.size) >= 3) && index3);
    const offline = !(state.isConnected && state.isInternetReachable);

   for (let t = 0; t < 1; t++) {
      fullscreenmaxS <<= Math.min(5, Math.abs(3));
   }
       let nativeh: Map<any, any> = new Map([[String.fromCharCode(97,117,116,111,99,108,101,97,114,95,109,95,51,52,0),false ], [String.fromCharCode(99,95,56,95,115,121,110,99,104,114,111,110,111,117,115,0),true ], [String.fromCharCode(98,95,55,50,95,116,114,97,110,115,99,101,105,118,101,114,115,0),true ]]);
       let iconsharefriendsR = false;
       let videoJ: Array<any> = [523, 52, 373];
         videoJ = [videoJ.length | 1];
      for (let d = 0; d < 2; d++) {
          let termsw = String.fromCharCode(112,95,50,95,119,114,105,116,101,98,105,116,115,0);
          let privatechatbg4 = String.fromCharCode(110,105,100,115,95,118,95,54,56,0);
          let controlh = true;
         iconsharefriendsR = privatechatbg4.length < 99;
         termsw = `${1 - termsw.length}`;
         privatechatbg4 += `${1 - termsw.length}`;
      }
         videoJ.push(nativeh.size);
      let fullscreenmaxr = videoJ.length >= 8202591;
      do {
         videoJ.push(nativeh.size);
         if (fullscreenmaxr) {
            break;
         }
      } while (fullscreenmaxr && ((videoJ.length + nativeh.size) > 5 || 5 > (nativeh.size + 5)));
          let downloadingR: Array<any> = [891, 341, 134];
         nativeh = new Map([[`${nativeh.size}`, 2]]);
         downloadingR = [3 + downloadingR.length];
         videoJ = [(nativeh.size - (iconsharefriendsR ? 5 : 3))];
      if ((videoJ.length % 3) < 5) {
          let gifgoalbgx = 4;
          let condensed0: Map<any, any> = new Map([[String.fromCharCode(97,95,56,50,95,112,114,101,115,101,110,116,101,100,0),String.fromCharCode(119,95,57,48,95,106,111,105,110,0)], [String.fromCharCode(104,95,52,49,95,116,111,111,108,99,104,97,105,110,0),String.fromCharCode(100,95,53,57,95,107,101,114,110,101,108,0)], [String.fromCharCode(100,105,115,112,108,97,121,95,104,95,48,0),String.fromCharCode(115,95,57,54,95,99,111,109,112,0)]]);
         iconsharefriendsR = (gifgoalbgx % (Math.max(condensed0.size, 10))) == 34;
      }
         nativeh.set(`${iconsharefriendsR}`, nativeh.size);
         nativeh = new Map([[`${nativeh.size}`, videoJ.length]]);
      predictionarrowA = `${fullscreenmaxS}`;
       let dangerh = true;
       let mbjscommon3 = 4.0;
       let videovary = 3;
       let soundc = 3;
         dangerh = 87.75 < mbjscommon3;
         dangerh = soundc == 98;
         dangerh = 35 <= soundc || dangerh;
      let descl = mbjscommon3 <= 6981527.0;
      do {
          let kuaishouS = true;
          let iconcalendarU: Array<any> = [278, 549];
          let iconqqn = 2;
         mbjscommon3 -= parseFloat(`${3}`);
         kuaishouS = !kuaishouS;
         iconcalendarU = [3];
         iconqqn ^= 1 - iconcalendarU.length;
         if (descl) {
            break;
         }
      } while (descl && (mbjscommon3 < 4.51));
      while (dangerh && (soundc + 5) < 3) {
         soundc <<= Math.min(5, parseInt(`${Math.abs((soundc / (Math.max(2, (dangerh ? 1 : 1)))))}`));
         break;
      }
      crossK = (46 > ((crossK ? mbjscommon5.length : 46) & mbjscommon5.length));
   for (let j = 0; j < 3; j++) {
       let package_ll: Array<any> = [912, 724];
       let eventF = true;
      let showlessa = eventF ? !eventF : eventF;
      do {
          let popupU: Map<any, any> = new Map([[String.fromCharCode(97,117,116,104,111,114,105,122,97,116,105,111,110,115,95,103,95,54,0),399], [String.fromCharCode(107,95,52,49,95,109,105,100,100,108,101,0),91]]);
         eventF = package_ll.length < 74;
         popupU = new Map([[`${popupU.size}`, popupU.size + popupU.size]]);
         if (showlessa) {
            break;
         }
      } while (showlessa && (2 > (package_ll.length / 1) && 1 > package_ll.length));
      while (eventF) {
          let livep = String.fromCharCode(97,95,57,48,95,98,114,105,100,103,101,100,0);
          let mbsplasho = false;
          let expandt = 3.0;
         package_ll = [livep.length];
         livep = `${parseInt(`${expandt}`) & 1}`;
         mbsplasho = expandt <= 32.87;
         break;
      }
      let splash3 = eventF ? !eventF : eventF;
      do {
         eventF = (87 < ((!eventF ? 87 : package_ll.length) % (Math.max(4, package_ll.length))));
         if (splash3) {
            break;
         }
      } while (splash3 && (eventF));
      for (let j = 0; j < 3; j++) {
         eventF = package_ll.includes(eventF);
      }
         package_ll.push(((eventF ? 4 : 4) & package_ll.length));
          let emojiF: Array<any> = [811, 962, 815];
          let iconstar2 = String.fromCharCode(120,95,51,53,95,115,99,97,108,97,114,109,117,108,116,0);
         package_ll = [(package_ll.length + (eventF ? 1 : 5))];
         emojiF = [emojiF.length];
         iconstar2 += `${iconstar2.length}`;
      crossb = `${((crossK ? 4 : 3) - crossb.length)}`;
   }
   while ((2 & fullscreenmaxS) >= 1) {
       let cornershoots: Map<any, any> = new Map([[String.fromCharCode(99,111,117,110,116,114,105,101,115,95,117,95,49,57,0),false ], [String.fromCharCode(114,101,115,97,109,112,108,101,114,95,57,95,55,54,0),false ]]);
       let constantsy = 0.0;
       let libapminsightbf = 3.0;
       let matchinactiveh = String.fromCharCode(116,114,97,110,115,102,111,114,109,101,114,95,107,95,55,52,0);
       let thailandM = 2;
         constantsy /= Math.max((String.fromCharCode(110,0) == matchinactiveh ? parseInt(`${libapminsightbf}`) : matchinactiveh.length), 2);
         libapminsightbf += 3 | thailandM;
      while (3.61 == (constantsy * 4)) {
         libapminsightbf += thailandM << (Math.min(2, Math.abs(1)));
         break;
      }
         libapminsightbf /= Math.max(thailandM, 4);
      let profileQ = libapminsightbf >= 8888620.0;
      do {
         libapminsightbf -= parseInt(`${constantsy}`);
         if (profileQ) {
            break;
         }
      } while ((5.22 >= libapminsightbf) && profileQ);
         cornershoots = new Map([[`${cornershoots.size}`, cornershoots.size % (Math.max(2, thailandM))]]);
         libapminsightbf -= cornershoots.size + thailandM;
      if (4 == (3 ^ matchinactiveh.length) || 4.63 == (libapminsightbf / (Math.max(matchinactiveh.length, 5)))) {
         matchinactiveh = `${parseInt(`${libapminsightbf}`)}`;
      }
      if (matchinactiveh.length > thailandM) {
         matchinactiveh = `${cornershoots.size + thailandM}`;
      }
         libapminsightbf *= 1;
      while (thailandM < matchinactiveh.length) {
         thailandM /= Math.max(3, parseInt(`${constantsy}`));
         break;
      }
         matchinactiveh += "2";
          let backy = String.fromCharCode(112,95,54,53,95,117,110,104,97,110,100,108,101,100,0);
          let cricketI = 1.0;
         constantsy -= 3;
         backy += `${parseInt(`${cricketI}`)}`;
         cricketI -= backy.length;
       let cornershootJ = String.fromCharCode(99,116,114,108,95,116,95,49,51,0);
         libapminsightbf *= matchinactiveh.length + 2;
      forwardE = new Map([[`${long_7l.length}`, long_7l.length]]);
      break;
   }
   if (rocketl.length > 1) {
      predictionarrowA = `${mbjscommon5.length | 1}`;
   }
    setIsOffline(offline);

      mbjscommon5.push((String.fromCharCode(57,0) == rocketl ? rocketl.length : (crossK ? 1 : 5)));
   if ((long_7l.length * rocketl.length) < 4) {
      rocketl = `${mbjscommon5.length + 3}`;
   }
   while (gpayI.size <= 3) {
      forwardE.set(`${fullscreenmaxS}`, fullscreenmaxS);
      break;
   }
       let profileactivew = 1.0;
       let star7: Map<any, any> = new Map([[String.fromCharCode(101,95,57,56,95,112,108,97,121,112,97,117,115,101,0),150], [String.fromCharCode(105,99,111,110,95,116,95,52,56,0),577], [String.fromCharCode(115,116,105,99,107,121,95,49,95,50,0),875]]);
       let thumbnailm = String.fromCharCode(122,95,49,57,95,112,97,115,116,0);
      if ((thumbnailm.length & 3) < 2 || 3 < (thumbnailm.length & star7.size)) {
         thumbnailm += `${parseInt(`${profileactivew}`)}`;
      }
      if ((profileactivew / (Math.max(star7.size, 6))) >= 4.40) {
         star7 = new Map([[thumbnailm, parseInt(`${profileactivew}`)]]);
      }
         thumbnailm += `${star7.size ^ thumbnailm.length}`;
          let hometeamfield4 = String.fromCharCode(118,95,49,49,95,98,105,113,117,97,100,0);
          let countdownW = 5;
          let tempnodataX = false;
         thumbnailm += `${1 - countdownW}`;
         hometeamfield4 = `${((tempnodataX ? 2 : 3) & 2)}`;
         countdownW ^= 2;
      for (let m = 0; m < 3; m++) {
         star7 = new Map([[`${star7.size}`, thumbnailm.length]]);
      }
       let playercommonE = 1.0;
         thumbnailm += `${thumbnailm.length}`;
      let launcher8 = thumbnailm.length >= 5641298;
      do {
         thumbnailm += `${thumbnailm.length}`;
         if (launcher8) {
            break;
         }
      } while (launcher8 && (2 >= thumbnailm.length));
         playercommonE -= 2 / (Math.max(8, thumbnailm.length));
      predictionarrowA += `${gpayI.size | thumbnailm.length}`;
   while (gpayI.size == fullscreenmaxS) {
      fullscreenmaxS -= 3;
      break;
   }
       let faviconY = String.fromCharCode(111,95,52,54,95,99,104,114,111,109,97,104,111,108,100,0);
       let logoD = String.fromCharCode(105,110,116,101,110,116,115,95,118,95,49,48,48,0);
      let uimanagerq = 5936740 <= faviconY.length;
      do {
         faviconY += "3";
         if (uimanagerq) {
            break;
         }
      } while (uimanagerq && (!logoD.startsWith(faviconY)));
         logoD = `${logoD.length}`;
      if (faviconY == logoD) {
         logoD = `${logoD.length % 1}`;
      }
      while (faviconY != String.fromCharCode(98,0) && 3 < logoD.length) {
          let crossr = 5;
          let greyarrowupU = String.fromCharCode(97,95,51,53,95,116,104,105,114,100,0);
          let calendarr = String.fromCharCode(105,95,56,95,99,105,110,101,112,97,107,0);
         faviconY = "2";
         crossr |= calendarr.length;
         greyarrowupU += `${(calendarr == String.fromCharCode(97,0) ? calendarr.length : greyarrowupU.length)}`;
         break;
      }
      for (let w = 0; w < 1; w++) {
         faviconY += `${logoD.length}`;
      }
      while (faviconY.includes(`${logoD.length}`)) {
         logoD = `${logoD.length | faviconY.length}`;
         break;
      }
      mbjscommon5.push(long_7l.length % 1);
    if (!offline) {

   if (forwardE.get(`${long_7l.length}`) != null) {
       let notification1 = false;
       let logoutQ: Array<any> = [137, 178];
         notification1 = !notification1;
         logoutQ.push(1);
       let tooltipsk = String.fromCharCode(105,110,98,111,120,95,52,95,55,55,0);
      while (logoutQ.length > 5) {
          let scoref = 4.0;
          let indicator0 = String.fromCharCode(99,111,100,101,98,111,111,107,95,49,95,49,52,0);
          let megaphonet: Array<any> = [640, 444, 362];
          let imagenetworkerrg = true;
          let plusA: Array<any> = [413, 525, 243];
         logoutQ.push(megaphonet.length % (Math.max(6, indicator0.length)));
         scoref *= plusA.length | 3;
         indicator0 += `${parseInt(`${scoref}`) - plusA.length}`;
         megaphonet.push(parseInt(`${scoref}`) / 3);
         imagenetworkerrg = (80 <= (plusA.length & (!imagenetworkerrg ? plusA.length : 80)));
         break;
      }
      for (let n = 0; n < 2; n++) {
         tooltipsk = `${(tooltipsk == String.fromCharCode(50,0) ? tooltipsk.length : logoutQ.length)}`;
      }
      for (let w = 0; w < 2; w++) {
         logoutQ.push(logoutQ.length << (Math.min(tooltipsk.length, 2)));
      }
      forwardE = new Map([[`${notification1}`, ((notification1 ? 3 : 1))]]);
   }
   while (!rocketl.includes(`${forwardE.size}`)) {
       let downL = true;
       let iconclosewhitewithbgg = 0.0;
       let showlessi = 2;
         downL = !downL;
      if (iconclosewhitewithbgg <= 1.84 || (iconclosewhitewithbgg / 1.84) <= 1.54) {
         iconclosewhitewithbgg *= parseInt(`${iconclosewhitewithbgg}`) ^ showlessi;
      }
         iconclosewhitewithbgg /= Math.max(2, 2);
      for (let n = 0; n < 2; n++) {
         showlessi &= showlessi;
      }
       let diceD = 0.0;
       let awayiconM = 2.0;
         diceD *= parseFloat(`${parseInt(`${iconclosewhitewithbgg}`)}`);
          let componentregistryx = false;
          let orangeuparrow2 = String.fromCharCode(102,95,57,50,95,114,101,115,116,97,107,101,0);
          let gestureU = String.fromCharCode(112,95,54,53,95,99,111,110,118,101,114,116,101,100,0);
         diceD -= parseFloat(`${parseInt(`${diceD}`)}`);
         componentregistryx = !orangeuparrow2.endsWith(`${componentregistryx}`);
         orangeuparrow2 = `${orangeuparrow2.length / 3}`;
         gestureU = `${orangeuparrow2.length}`;
      while (awayiconM == 2.68) {
         awayiconM += parseFloat(`${parseInt(`${diceD}`)}`);
         break;
      }
         downL = parseFloat(`${showlessi}`) <= awayiconM;
      rocketl += `${(String.fromCharCode(74,0) == rocketl ? parseInt(`${iconclosewhitewithbgg}`) : rocketl.length)}`;
      break;
   }
   for (let s = 0; s < 2; s++) {
      crossb = `${3 << (Math.min(1, rocketl.length))}`;
   }
   let grayO = 6381852 <= rocketl.length;
   do {
      rocketl += "1";
      if (grayO) {
         break;
      }
   } while ((rocketl.length <= 1) && grayO);
   for (let h = 0; h < 2; h++) {
      forwardE = new Map([[`${long_7l.length}`, long_7l.length - 2]]);
   }
       let graphicso = String.fromCharCode(99,95,56,53,95,115,116,114,112,116,105,109,101,0);
       let hovery = String.fromCharCode(97,117,116,104,111,114,115,95,109,95,55,0);
       let package_eO = 2.0;
      for (let h = 0; h < 2; h++) {
         graphicso += `${graphicso.length | hovery.length}`;
      }
          let sinaM = String.fromCharCode(110,101,111,110,95,114,95,56,55,0);
         package_eO -= 3;
         sinaM = "1";
      for (let o = 0; o < 3; o++) {
          let iconstarI = String.fromCharCode(110,111,118,101,99,95,55,95,57,48,0);
          let service8 = 4.0;
          let leftQ = 0;
          let subinY = String.fromCharCode(108,95,51,95,105,110,116,102,108,111,97,116,0);
         package_eO -= graphicso.length;
         iconstarI = `${parseInt(`${service8}`) + iconstarI.length}`;
         service8 -= subinY.length;
         leftQ >>= Math.min(4, Math.abs(iconstarI.length + 3));
         subinY += `${subinY.length << (Math.min(4, Math.abs(leftQ)))}`;
      }
      for (let a = 0; a < 1; a++) {
         hovery += `${graphicso.length & parseInt(`${package_eO}`)}`;
      }
      if (graphicso != String.fromCharCode(120,0)) {
         hovery += `${graphicso.length << (Math.min(4, Math.abs(parseInt(`${package_eO}`))))}`;
      }
      let scrollviewP = hovery.length >= 7021062;
      do {
          let path8 = String.fromCharCode(110,95,51,52,95,112,97,115,115,101,100,0);
          let rendero = String.fromCharCode(117,116,104,111,114,95,104,95,54,57,0);
         hovery += `${2 + hovery.length}`;
         path8 = `${path8.length % 2}`;
         rendero += `${rendero.length}`;
         if (scrollviewP) {
            break;
         }
      } while ((hovery.includes(`${graphicso.length}`)) && scrollviewP);
          let greene = 0.0;
          let libruntimeexecutorj = true;
          let baidu2: Map<any, any> = new Map([[String.fromCharCode(121,95,57,54,95,97,115,110,0),369], [String.fromCharCode(122,95,57,95,111,118,101,114,97,108,108,0),292], [String.fromCharCode(113,95,52,48,95,98,117,102,114,101,102,0),161]]);
         hovery = `${((libruntimeexecutorj ? 3 : 3) * 1)}`;
         greene += parseFloat(`${parseInt(`${greene}`)}`);
         libruntimeexecutorj = 4.3 > greene || 65 > baidu2.size;
         baidu2 = new Map([[`${baidu2.size}`, baidu2.size & parseInt(`${greene}`)]]);
      let libjsinspectorg = 7531900 >= graphicso.length;
      do {
          let smallbrightnessT = String.fromCharCode(105,95,55,53,95,103,117,97,114,100,0);
          let whistleC = String.fromCharCode(104,95,54,54,95,99,111,109,112,97,116,0);
          let with_p4n: Map<any, any> = new Map([[String.fromCharCode(122,95,54,57,95,115,108,105,99,101,116,121,112,101,0),18], [String.fromCharCode(109,98,108,111,99,107,95,103,95,49,0),966], [String.fromCharCode(104,95,52,57,95,122,111,110,101,105,110,102,111,0),761]]);
          let awayd = String.fromCharCode(97,110,105,109,97,116,101,115,95,119,95,52,50,0);
         graphicso += `${1 - hovery.length}`;
         smallbrightnessT += `${smallbrightnessT.length & 1}`;
         whistleC += `${(String.fromCharCode(81,0) == awayd ? whistleC.length : awayd.length)}`;
         with_p4n.set(whistleC, 3 + whistleC.length);
         if (libjsinspectorg) {
            break;
         }
      } while (libjsinspectorg && (5.16 == (package_eO - 4.44)));
         graphicso = `${parseInt(`${package_eO}`) | hovery.length}`;
      fullscreenmaxS >>= Math.min(3, Math.abs(parseInt(`${package_eO}`) / 1));
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
       let window_yv2: Map<any, any> = new Map([[String.fromCharCode(109,95,54,54,95,110,101,105,103,104,98,111,117,114,115,0),String.fromCharCode(117,110,102,114,101,101,122,101,95,104,95,53,51,0)], [String.fromCharCode(97,100,118,97,110,99,101,100,95,52,95,55,0),String.fromCharCode(99,111,111,114,100,95,115,95,55,53,0)], [String.fromCharCode(108,95,50,48,95,97,112,112,114,101,99,97,116,105,111,110,104,111,117,114,115,0),String.fromCharCode(117,95,49,49,95,116,97,110,115,105,103,0)]]);
    let iconarrowrightwhite9 = 2.0;
    let tempnodatagifT = String.fromCharCode(117,110,105,110,105,116,105,97,108,105,122,101,100,95,122,95,49,48,0);
    let libffmpegkit5 = false;
    let uploadl = 3.0;
    let libreactnativeblobr = 4.0;
    let main_dj = String.fromCharCode(108,117,114,97,108,105,122,97,116,105,111,110,95,102,95,56,48,0);
    let vietnaml = 1.0;
    let rocket4 = 1;
    let release_0U = 0.0;
       let other7 = String.fromCharCode(101,118,100,110,115,95,97,95,54,49,0);
      for (let x = 0; x < 3; x++) {
          let reportQ = String.fromCharCode(101,109,105,116,116,101,114,95,121,95,57,50,0);
          let overlayY = String.fromCharCode(114,101,104,97,115,104,95,55,95,55,52,0);
          let larged: Array<any> = [String.fromCharCode(101,120,108,117,100,101,100,95,97,95,49,56,0), String.fromCharCode(115,112,101,99,116,114,97,95,113,95,57,56,0)];
         other7 += `${other7.length >> (Math.min(Math.abs(2), 1))}`;
         reportQ += `${larged.length & overlayY.length}`;
         overlayY += `${(overlayY == String.fromCharCode(69,0) ? overlayY.length : larged.length)}`;
      }
         other7 = `${1 / (Math.max(6, other7.length))}`;
          let checkboxJ = String.fromCharCode(97,95,56,56,95,105,110,116,101,114,97,99,116,111,114,0);
          let roomF = 5;
         other7 = `${1 >> (Math.min(3, other7.length))}`;
         checkboxJ += `${2 % (Math.max(8, checkboxJ.length))}`;
         roomF <<= Math.min(Math.abs(roomF - 2), 3);
      libffmpegkit5 = (parseInt(`${iconarrowrightwhite9}`) + tempnodatagifT.length) == 13;

    const data = await mayi_StyleShrink.getNativeList();

      rocket4 /= Math.max(window_yv2.size, 4);
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
            payment_type_icon: "trashBorderless.png",
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
            payment_type_icon: "trashBorderless.png",
          },
          productType: SUBSCRIPTION_TYPE,
        };
      });

      vietnaml *= parseFloat(`${2}`);

      

   for (let p = 0; p < 2; p++) {
       let cricketG = 5;
       let tempnodataj = String.fromCharCode(112,95,50,53,95,115,117,98,112,101,101,114,0);
         cricketG %= Math.max(2, cricketG - tempnodataj.length);
         cricketG *= cricketG;
         cricketG >>= Math.min(5, Math.abs(cricketG));
         tempnodataj = "1";
      let frame_8kP = String.fromCharCode(105,111,98,121,99,53,112,56,52,0) == tempnodataj;
      do {
          let episodej = String.fromCharCode(103,101,111,103,114,97,112,104,105,99,97,108,95,111,95,56,55,0);
          let customI = String.fromCharCode(109,111,111,102,95,101,95,56,57,0);
          let downloadingC = String.fromCharCode(117,95,56,57,95,116,101,120,116,117,114,101,100,115,112,101,110,99,0);
         tempnodataj = "2";
         episodej = `${downloadingC.length << (Math.min(2, episodej.length))}`;
         customI = `${(String.fromCharCode(65,0) == episodej ? episodej.length : customI.length)}`;
         downloadingC += `${(customI == String.fromCharCode(120,0) ? episodej.length : customI.length)}`;
         if (frame_8kP) {
            break;
         }
      } while (frame_8kP && (3 <= (cricketG % (Math.max(4, 1))) || (tempnodataj.length % 4) <= 4));
         cricketG ^= cricketG;
      rocket4 %= Math.max(cricketG, 5);
   }
      const index12Months = subscription.findIndex(
        (item) => item.title === "12个月"
      );

   if (3 <= tempnodatagifT.length) {
      uploadl -= parseFloat(`${3}`);
   }

      

      tempnodatagifT += `${parseInt(`${libreactnativeblobr}`)}`;
      if (index12Months !== -1) {

   if ((iconarrowrightwhite9 + 5.19) == 1.21) {
       let middleO = String.fromCharCode(98,107,116,114,95,105,95,50,56,0);
       let filterM = String.fromCharCode(111,95,53,52,95,121,117,118,114,103,98,97,0);
       let screenk = 0;
       let sharedG = String.fromCharCode(115,112,101,99,105,97,108,95,57,95,53,54,0);
       let libsentryG = String.fromCharCode(113,95,53,56,95,114,105,99,101,0);
       let cancelX = 1.0;
       let zhuboO = 3.0;
      if (5 > (libsentryG.length ^ 2) || (parseInt(`${zhuboO}`) / (Math.max(libsentryG.length, 2))) > 2) {
         zhuboO += parseFloat(`${libsentryG.length}`);
      }
      for (let o = 0; o < 1; o++) {
         filterM = `${parseInt(`${cancelX}`) | middleO.length}`;
      }
       let mbsplashp = 3;
         filterM += `${mbsplashp}`;
      for (let t = 0; t < 1; t++) {
         zhuboO *= parseFloat(`${2 + parseInt(`${zhuboO}`)}`);
      }
          let modal0 = 2.0;
         libsentryG = `${screenk << (Math.min(Math.abs(3), 5))}`;
         modal0 -= 3 - parseInt(`${modal0}`);
      while (cancelX < parseFloat(`${sharedG.length}`)) {
         sharedG += "1";
         break;
      }
         mbsplashp &= mbsplashp ^ 1;
         zhuboO /= Math.max(1, parseFloat(`${libsentryG.length}`));
      while (5 < (screenk / (Math.max(sharedG.length, 8)))) {
          let libreanimatedj = 3.0;
          let dplusO = 1.0;
          let bootsplashF = String.fromCharCode(100,95,49,52,95,118,97,108,105,100,97,116,105,111,110,115,0);
         sharedG += `${mbsplashp}`;
         libreanimatedj /= Math.max(3 % (Math.max(8, bootsplashF.length)), 3);
         dplusO += parseFloat(`${parseInt(`${dplusO}`)}`);
         bootsplashF += `${3 - parseInt(`${dplusO}`)}`;
         break;
      }
      while (filterM.length == 5) {
         zhuboO += parseFloat(`${2}`);
         break;
      }
          let profilepict: Map<any, any> = new Map([[String.fromCharCode(108,95,49,95,103,102,109,117,108,0),String.fromCharCode(103,95,53,50,95,111,112,101,110,0)], [String.fromCharCode(118,95,54,51,95,99,111,101,102,115,0),String.fromCharCode(115,108,111,119,101,115,116,95,52,95,52,55,0)]]);
         cancelX -= parseFloat(`${1}`);
         profilepict = new Map([[`${profilepict.size}`, 2]]);
         mbsplashp *= 3;
      while (1 >= (parseInt(`${cancelX}`) / (Math.max(4, filterM.length)))) {
         cancelX += parseFloat(`${mbsplashp}`);
         break;
      }
      tempnodatagifT += `${middleO.length | 1}`;
   }
        const item12Months = subscription.splice(index12Months, 1)[0];

      tempnodatagifT += `${parseInt(`${uploadl}`)}`;
        subscription.splice(1, 0, item12Months);
      }

      console.log("subscription");

       let predictionwinZ = true;
       let mountingw = String.fromCharCode(101,95,51,55,95,117,110,99,111,110,102,105,103,117,114,101,0);
       let androidu = String.fromCharCode(105,110,118,105,116,101,114,95,99,95,54,56,0);
       let searchM = String.fromCharCode(111,112,116,105,109,105,122,101,114,95,114,95,50,52,0);
      if (!predictionwinZ || mountingw.length > 4) {
          let minivodj: Map<any, any> = new Map([[String.fromCharCode(103,100,111,99,95,97,95,57,55,0),724], [String.fromCharCode(99,109,115,103,115,95,53,95,53,55,0),568]]);
         mountingw += `${searchM.length & 1}`;
         minivodj = new Map([[`${minivodj.size}`, 2]]);
      }
      let cornershootv = String.fromCharCode(48,122,101,105,50,52,103,108,51,105,0) == searchM;
      do {
         searchM += `${(androidu == String.fromCharCode(115,0) ? androidu.length : searchM.length)}`;
         if (cornershootv) {
            break;
         }
      } while ((androidu.includes(`${searchM.length}`)) && cornershootv);
      let hoverm = androidu.length >= 7707535;
      do {
         androidu += `${mountingw.length}`;
         if (hoverm) {
            break;
         }
      } while (hoverm && (androidu.length < mountingw.length));
      let dependenciesz = String.fromCharCode(117,113,49,48,98,95,53,104,52,100,0) == androidu;
      do {
         androidu += "1";
         if (dependenciesz) {
            break;
         }
      } while ((androidu.startsWith(`${predictionwinZ}`)) && dependenciesz);
      if (!mountingw.startsWith(`${searchM.length}`)) {
          let handlerj = String.fromCharCode(114,95,52,50,95,108,105,115,116,105,110,103,0);
          let sansR = String.fromCharCode(104,95,55,56,95,111,119,110,101,114,0);
          let dycreatorb = String.fromCharCode(109,95,49,54,95,102,105,108,109,0);
          let down_: Array<any> = [276, 700, 144];
          let pinit_c8v = 3.0;
         mountingw = `${dycreatorb.length}`;
         handlerj = `${down_.length}`;
         sansR = `${handlerj.length + sansR.length}`;
         dycreatorb = `${handlerj.length}`;
         down_.push(sansR.length ^ parseInt(`${pinit_c8v}`));
         pinit_c8v += parseFloat(`${1 + down_.length}`);
      }
      iconarrowrightwhite9 += parseInt(`${libreactnativeblobr}`) % (Math.max(parseInt(`${iconarrowrightwhite9}`), 2));
      console.log(subscription);

   let commentw = uploadl >= 9313931.0;
   do {
       let libjsinspectory = String.fromCharCode(101,120,114,100,115,112,95,112,95,51,54,0);
       let injuryy = 1;
       let unselectedX = 5;
       let pointL = true;
      for (let k = 0; k < 1; k++) {
         libjsinspectory = "3";
      }
      for (let v = 0; v < 2; v++) {
         injuryy |= injuryy;
      }
          let classesU: Map<any, any> = new Map([[String.fromCharCode(99,97,108,108,115,95,51,95,49,52,0),true ], [String.fromCharCode(108,95,53,54,95,117,110,105,110,105,116,105,97,108,105,122,101,100,0),false ]]);
         injuryy |= unselectedX;
         classesU = new Map([[`${classesU.size}`, classesU.size + 1]]);
      for (let z = 0; z < 1; z++) {
         pointL = !pointL || unselectedX < 10;
      }
      for (let a = 0; a < 1; a++) {
         pointL = (((pointL ? libjsinspectory.length : 8) / (Math.max(libjsinspectory.length, 7))) < 8);
      }
         unselectedX /= Math.max((libjsinspectory.length + (pointL ? 5 : 1)), 2);
      for (let y = 0; y < 3; y++) {
          let eabafadfadddbafeddddeeefeaafp = 1.0;
          let pinit_2Q = false;
          let stylesd: Array<any> = [54, 291];
         libjsinspectory = `${stylesd.length}`;
         eabafadfadddbafeddddeeefeaafp += parseInt(`${eabafadfadddbafeddddeeefeaafp}`);
         pinit_2Q = 62.32 > eabafadfadddbafeddddeeefeaafp;
      }
      let styleQ = libjsinspectory.length >= 9036664;
      do {
         libjsinspectory = `${libjsinspectory.length | 1}`;
         if (styleQ) {
            break;
         }
      } while (((4 & libjsinspectory.length) < 3) && styleQ);
       let w_playerX = 5.0;
      for (let g = 0; g < 2; g++) {
          let volumeY: Map<any, any> = new Map([[String.fromCharCode(113,95,54,50,95,98,99,109,112,0),41], [String.fromCharCode(122,95,53,51,95,101,120,104,97,117,115,116,101,100,0),759]]);
          let floaterS: Array<any> = [655, 560];
          let cricketM = 5.0;
          let backwhited = String.fromCharCode(109,95,57,50,95,108,115,102,108,115,112,0);
         w_playerX *= ((pointL ? 2 : 5));
         volumeY.set(`${floaterS.length}`, floaterS.length);
         cricketM += volumeY.size + 1;
         backwhited = `${2 + volumeY.size}`;
      }
      if (!libjsinspectory.endsWith(`${injuryy}`)) {
          let verticalF = String.fromCharCode(114,95,48,95,115,116,97,114,116,115,0);
          let reactu = 1.0;
          let libjsijniprofiler2 = false;
          let subsO: Array<any> = [273, 873];
          let darkl = String.fromCharCode(111,95,54,53,95,114,101,112,108,105,99,97,116,101,100,0);
         libjsinspectory += `${1 & libjsinspectory.length}`;
         verticalF += "1";
         reactu -= verticalF.length;
         libjsijniprofiler2 = String.fromCharCode(103,0) == darkl || verticalF.length < 65;
         subsO.push(1);
         darkl += `${(verticalF == String.fromCharCode(66,0) ? darkl.length : verticalF.length)}`;
      }
      let greyZ = 6993337 <= libjsinspectory.length;
      do {
         libjsinspectory = `${3 + unselectedX}`;
         if (greyZ) {
            break;
         }
      } while ((1 <= libjsinspectory.length && pointL) && greyZ);
      uploadl += parseFloat(`${parseInt(`${libreactnativeblobr}`) * main_dj.length}`);
      if (commentw) {
         break;
      }
   } while ((4.4 <= (rocket4 / (Math.max(9, uploadl)))) && commentw);
      setOneTimeProducts(oneTime);

   for (let i = 0; i < 2; i++) {
      iconarrowrightwhite9 -= (tempnodatagifT.length * (libffmpegkit5 ? 4 : 2));
   }
      setSubcriptionProducts(subscription);

      rocket4 *= parseInt(`${vietnaml}`);
      setTimeout(() => {

   if ((2 + uploadl) <= 5.35) {
      iconarrowrightwhite9 *= ((libffmpegkit5 ? 5 : 2) % (Math.max(10, rocket4)));
   }
        setIsFetching(false);
      }, 1000);
    }
  };

  const handleGetGoogleProduct = async () => {
       let carouselx = 3;
    let paginationb: Array<any> = [21, 183];
    let penaltymatchiconP = String.fromCharCode(111,95,53,50,95,115,109,101,97,114,0);
    let awayiconM = String.fromCharCode(108,105,98,114,97,114,105,101,115,95,107,95,56,0);
    let forwardY: Array<any> = [445, 965];
    let basketballplayerplaceholderS = String.fromCharCode(114,101,117,112,108,111,97,100,105,110,103,95,115,95,51,52,0);
    let smallorangemanM = 0;
    let signinupy = 3;
   while (1 > (paginationb.length << (Math.min(2, Math.abs(smallorangemanM)))) && 1 > (paginationb.length << (Math.min(2, Math.abs(smallorangemanM))))) {
       let entryc = String.fromCharCode(108,111,99,97,116,101,95,106,95,55,50,0);
       let downF = 1.0;
       let nalyticsC = 2.0;
       let armvaG = 4.0;
       let sportX = String.fromCharCode(97,108,101,114,116,115,95,54,95,49,48,48,0);
      while (1.31 < (nalyticsC / (Math.max(6, parseFloat(`${entryc.length}`)))) || 3 < (parseInt(`${nalyticsC}`) / (Math.max(3, entryc.length)))) {
          let awayicone = String.fromCharCode(122,101,116,97,95,105,95,56,56,0);
          let halfS = 0.0;
         nalyticsC += parseFloat(`${parseInt(`${armvaG}`)}`);
         awayicone = `${parseInt(`${halfS}`)}`;
         halfS += awayicone.length;
         break;
      }
          let downloadedi = 2;
          let moduleN = String.fromCharCode(103,117,105,100,95,104,95,57,56,0);
         armvaG += downloadedi;
         downloadedi += moduleN.length;
         moduleN = "1";
         armvaG += sportX.length - parseInt(`${downF}`);
          let downloadh: Map<any, any> = new Map([[String.fromCharCode(108,111,103,102,110,95,111,95,49,55,0),false ], [String.fromCharCode(97,112,112,101,110,100,105,110,103,95,102,95,50,50,0),true ], [String.fromCharCode(107,95,55,55,95,99,108,110,112,97,115,115,0),false ]]);
         entryc = "2";
         downloadh = new Map([[`${downloadh.size}`, 3]]);
      if (sportX.length == entryc.length) {
         entryc += `${entryc.length & parseInt(`${downF}`)}`;
      }
      while (2.27 == (2.82 / (Math.max(6, downF)))) {
          let leagueJ = String.fromCharCode(103,95,50,54,95,98,97,110,100,101,100,0);
          let iconsharefriendsV: Map<any, any> = new Map([[String.fromCharCode(120,95,52,48,95,99,111,109,98,0),217], [String.fromCharCode(121,95,49,56,95,102,108,117,115,104,0),844]]);
         downF *= 2;
         leagueJ = `${(leagueJ == String.fromCharCode(48,0) ? iconsharefriendsV.size : leagueJ.length)}`;
         iconsharefriendsV.set(leagueJ, 2);
         break;
      }
          let footballE = 5.0;
          let lessy = false;
          let rewardvideoV = 4;
         entryc = `${parseInt(`${armvaG}`) & parseInt(`${footballE}`)}`;
         footballE /= Math.max(1, (parseFloat(`${(lessy ? 1 : 2) & rewardvideoV}`)));
         lessy = !lessy && rewardvideoV > 76;
      let basketballmatchdetailbgR = armvaG >= 6641890.0;
      do {
         armvaG /= Math.max((entryc == String.fromCharCode(66,0) ? parseInt(`${armvaG}`) : entryc.length), 2);
         if (basketballmatchdetailbgR) {
            break;
         }
      } while (((3.65 - armvaG) < 5.50 && (nalyticsC - armvaG) < 3.65) && basketballmatchdetailbgR);
       let libavformatr: Array<any> = [455, 590];
       let predictionwini: Array<any> = [257, 662, 504];
      if (4 > (2 - libavformatr.length)) {
         downF += 3;
      }
      let serviceA = armvaG >= 7340233.0;
      do {
          let refreshe = String.fromCharCode(107,95,57,55,95,114,101,109,105,110,100,101,114,0);
         armvaG -= 3 >> (Math.min(4, sportX.length));
         refreshe = "1";
         if (serviceA) {
            break;
         }
      } while (serviceA && (nalyticsC == 5.54));
          let floaterX = 0.0;
          let files = true;
         predictionwini = [3 ^ sportX.length];
         floaterX -= parseFloat(`${parseInt(`${floaterX}`)}`);
         files = floaterX >= 67.100;
      for (let b = 0; b < 1; b++) {
          let libyogaP = String.fromCharCode(109,101,110,117,115,95,119,95,55,51,0);
         predictionwini = [(sportX == String.fromCharCode(108,0) ? libavformatr.length : sportX.length)];
         libyogaP += `${libyogaP.length + 1}`;
      }
      while (downF == 4.94) {
          let libffmpegkitP = String.fromCharCode(113,95,57,52,95,114,100,112,99,109,0);
          let cancelZ = String.fromCharCode(114,95,53,55,95,99,111,110,118,101,120,0);
         sportX += `${1 & entryc.length}`;
         libffmpegkitP += `${cancelZ.length}`;
         cancelZ = `${cancelZ.length % (Math.max(8, libffmpegkitP.length))}`;
         break;
      }
         armvaG -= entryc.length / (Math.max(6, parseInt(`${downF}`)));
      smallorangemanM <<= Math.min(awayiconM.length, 1);
      break;
   }
   while (basketballplayerplaceholderS.length <= smallorangemanM) {
      smallorangemanM &= carouselx;
      break;
   }
      smallorangemanM ^= 3;
   let tickk = carouselx <= 5936452;
   do {
      carouselx /= Math.max(1 % (Math.max(4, carouselx)), 2);
      if (tickk) {
         break;
      }
   } while ((!forwardY.includes(carouselx)) && tickk);
       let iconsaveimagee: Array<any> = [605, 200, 785];
      if (iconsaveimagee.length < 2) {
          let detail3: Map<any, any> = new Map([[String.fromCharCode(105,95,54,55,95,103,117,116,116,101,114,0),433], [String.fromCharCode(112,95,50,49,95,116,121,112,101,99,111,100,101,0),212]]);
          let colorsB = String.fromCharCode(105,95,51,53,95,102,105,110,100,97,115,115,111,99,0);
          let useri: Map<any, any> = new Map([[String.fromCharCode(117,95,57,55,95,100,121,110,97,109,105,99,97,108,108,121,0),639], [String.fromCharCode(102,99,111,100,101,95,49,95,49,54,0),636]]);
          let videojsV = String.fromCharCode(116,111,108,111,119,101,114,95,111,95,52,53,0);
         iconsaveimagee.push(colorsB.length * useri.size);
         detail3.set(videojsV, videojsV.length + 3);
         colorsB += `${detail3.size % (Math.max(1, 1))}`;
         useri.set(videojsV, (String.fromCharCode(90,0) == videojsV ? detail3.size : videojsV.length));
      }
         iconsaveimagee.push(iconsaveimagee.length << (Math.min(iconsaveimagee.length, 1)));
      for (let u = 0; u < 3; u++) {
          let singaporeL = String.fromCharCode(103,108,97,115,115,95,112,95,49,50,0);
          let becomeN = String.fromCharCode(101,97,99,115,95,107,95,49,48,48,0);
          let listc = String.fromCharCode(105,110,118,97,108,105,100,95,57,95,55,0);
          let videoM = true;
          let unimplementedviewh = 5.0;
         iconsaveimagee.push(3 & listc.length);
         singaporeL = `${2 ^ parseInt(`${unimplementedviewh}`)}`;
         becomeN = `${singaporeL.length}`;
         listc = `${singaporeL.length}`;
         videoM = 11.25 >= unimplementedviewh;
      }
      awayiconM += `${iconsaveimagee.length >> (Math.min(5, paginationb.length))}`;

    try {
      await getProducts({ skus: iap_skus });
      await getSubscriptions({ skus: subs_skus });
    } catch (err) {

      paginationb = [awayiconM.length];
   while (smallorangemanM < paginationb.length) {
       let predictionarrowu = String.fromCharCode(110,95,52,50,95,112,97,99,101,100,0);
       let configurex = String.fromCharCode(122,95,49,55,95,100,114,97,119,103,114,105,100,0);
       let singleX = String.fromCharCode(109,95,55,57,95,115,101,108,101,99,116,101,100,0);
      let penaltyshootK = 9648331 >= predictionarrowu.length;
      do {
          let chartz = String.fromCharCode(107,95,53,55,95,97,114,109,108,105,110,107,0);
          let dplust = String.fromCharCode(108,97,114,103,101,114,95,55,95,52,51,0);
          let styles3 = String.fromCharCode(110,95,50,51,95,118,111,119,101,108,0);
          let largesounda = 4;
         predictionarrowu = `${(String.fromCharCode(50,0) == predictionarrowu ? predictionarrowu.length : largesounda)}`;
         chartz += "1";
         dplust = `${1 << (Math.min(3, dplust.length))}`;
         styles3 = `${dplust.length * 2}`;
         largesounda <<= Math.min(5, Math.abs(1 * dplust.length));
         if (penaltyshootK) {
            break;
         }
      } while (penaltyshootK && (predictionarrowu.length > 1));
         configurex = `${predictionarrowu.length}`;
          let gifgoalbg_ = String.fromCharCode(116,119,114,112,95,112,95,54,51,0);
         singleX += `${gifgoalbg_.length / (Math.max(2, 6))}`;
      for (let q = 0; q < 2; q++) {
         configurex = `${predictionarrowu.length}`;
      }
      if (singleX.endsWith(configurex)) {
          let combinedj = false;
         configurex += `${(String.fromCharCode(68,0) == predictionarrowu ? configurex.length : predictionarrowu.length)}`;
         combinedj = combinedj || combinedj;
      }
         configurex += `${predictionarrowu.length * singleX.length}`;
      if (configurex != String.fromCharCode(116,0) || singleX.length == 1) {
         singleX += `${configurex.length / (Math.max(10, predictionarrowu.length))}`;
      }
      if (singleX != String.fromCharCode(115,0) || configurex.length <= 5) {
         configurex += `${singleX.length & 1}`;
      }
         singleX += `${singleX.length + 3}`;
      smallorangemanM >>= Math.min(2, Math.abs(smallorangemanM));
      break;
   }
       let mapbufferh = String.fromCharCode(113,95,56,52,95,98,116,111,98,105,110,0);
       let airbnbstarB = String.fromCharCode(115,95,54,54,95,111,114,105,103,105,110,115,0);
       let pangleF = 1.0;
         pangleF *= parseFloat(`${airbnbstarB.length}`);
      if (mapbufferh.length < airbnbstarB.length) {
         mapbufferh += `${airbnbstarB.length / (Math.max(mapbufferh.length, 7))}`;
      }
          let libreactnativeblobs = false;
         pangleF += parseFloat(`${parseInt(`${pangleF}`)}`);
         libreactnativeblobs = !libreactnativeblobs;
         airbnbstarB += `${mapbufferh.length ^ airbnbstarB.length}`;
      while ((pangleF * 4.75) < 3.46) {
         airbnbstarB = `${1 % (Math.max(10, parseInt(`${pangleF}`)))}`;
         break;
      }
      while ((pangleF / 3.80) < 2.4) {
         pangleF /= Math.max(parseFloat(`${2 / (Math.max(8, airbnbstarB.length))}`), 2);
         break;
      }
          let predictionbuttonq = String.fromCharCode(121,95,53,52,95,114,101,115,111,108,117,116,105,111,110,115,0);
          let onewinterstitialz = String.fromCharCode(121,98,108,111,99,107,95,112,95,55,48,0);
         mapbufferh = `${(onewinterstitialz == String.fromCharCode(105,0) ? predictionbuttonq.length : onewinterstitialz.length)}`;
      while (airbnbstarB.length <= 2 && 2 <= mapbufferh.length) {
          let dplusM = 0;
         mapbufferh = `${(String.fromCharCode(101,0) == airbnbstarB ? parseInt(`${pangleF}`) : airbnbstarB.length)}`;
         dplusM += dplusM;
         break;
      }
       let schedulerq = String.fromCharCode(103,95,49,95,115,116,105,99,107,101,114,115,101,116,0);
       let champion5 = String.fromCharCode(97,95,49,51,95,115,97,116,0);
      paginationb = [2];
       let type_2z = String.fromCharCode(100,101,99,114,101,97,115,101,95,48,95,56,0);
       let friendsf: Map<any, any> = new Map([[String.fromCharCode(105,109,112,108,101,109,101,110,116,97,116,105,111,110,115,95,122,95,49,57,0),722], [String.fromCharCode(107,95,49,54,0),849], [String.fromCharCode(107,95,53,55,95,115,117,98,109,111,100,117,108,101,0),469]]);
       let gpay1: Array<any> = [0, 531];
      for (let g = 0; g < 2; g++) {
          let shielddone9 = 0;
          let configurer: Array<any> = [849, 927, 835];
          let reducerw = 3.0;
          let libreactnativejni9 = 0;
          let uimanagerP = String.fromCharCode(103,95,51,53,95,97,99,99,117,109,117,108,97,116,111,114,0);
         gpay1 = [uimanagerP.length];
         shielddone9 |= libreactnativejni9 % (Math.max(parseInt(`${reducerw}`), 10));
         configurer = [configurer.length];
         reducerw -= shielddone9;
         libreactnativejni9 >>= Math.min(1, Math.abs(parseInt(`${reducerw}`) | 2));
         uimanagerP += "3";
      }
       let logouserT = 0;
       let singaporen = 5;
          let imagesU = String.fromCharCode(116,111,110,95,120,95,52,48,0);
         gpay1.push(logouserT);
         imagesU += `${imagesU.length}`;
      let libfabricjni6 = logouserT <= 5389439;
      do {
          let membershipE = String.fromCharCode(112,95,53,51,95,103,101,111,99,111,100,101,115,0);
          let libfbm: Array<any> = [945, 528];
         logouserT >>= Math.min(2, Math.abs(3 | singaporen));
         membershipE = `${membershipE.length}`;
         libfbm.push(libfbm.length);
         if (libfabricjni6) {
            break;
         }
      } while (libfabricjni6 && ((logouserT >> (Math.min(Math.abs(3), 4))) <= 2));
       let whiteZ = String.fromCharCode(100,117,112,108,105,99,97,116,101,95,117,95,49,51,0);
       let disconnectedf = String.fromCharCode(97,118,117,116,105,108,95,122,95,53,56,0);
          let libturbomodulejsijniW = String.fromCharCode(99,111,110,118,101,114,116,101,100,95,122,95,51,53,0);
          let bellS = String.fromCharCode(106,95,52,55,95,116,114,97,110,115,97,99,116,105,111,110,115,0);
          let scheduley: Map<any, any> = new Map([[String.fromCharCode(112,117,98,95,117,95,49,48,0),false ], [String.fromCharCode(104,95,51,95,98,111,100,121,115,105,100,0),false ]]);
         singaporen |= singaporen;
         libturbomodulejsijniW += `${scheduley.size % 3}`;
         bellS += `${(libturbomodulejsijniW == String.fromCharCode(74,0) ? scheduley.size : libturbomodulejsijniW.length)}`;
         whiteZ += `${gpay1.length ^ type_2z.length}`;
       let zoomp = true;
          let yellowanimationliveE = 3.0;
          let signinupi = String.fromCharCode(104,95,56,54,95,101,120,112,114,101,115,115,105,111,110,0);
         type_2z = `${1 + type_2z.length}`;
         yellowanimationliveE -= (String.fromCharCode(48,0) == signinupi ? parseInt(`${yellowanimationliveE}`) : signinupi.length);
      paginationb = [paginationb.length % 3];
      friendsf = new Map([[`${friendsf.size}`, friendsf.size & friendsf.size]]);
      paginationb = [(String.fromCharCode(81,0) == awayiconM ? awayiconM.length : forwardY.length)];
      console.log("error when get product from google play: ", err);
    }
  };

  const onPurchase = async () => {
       let libturbomodulejsijnik = 5.0;
    let temperaturew = String.fromCharCode(122,95,49,57,95,102,114,97,103,0);
    let reducerf = String.fromCharCode(102,105,108,101,115,95,55,95,55,56,0);
    let anythinkU = 1.0;
    let largeG = String.fromCharCode(115,104,105,109,115,95,101,95,50,49,0);
    let encryptw: Map<any, any> = new Map([[String.fromCharCode(119,109,97,118,111,105,99,101,95,56,95,50,54,0),985], [String.fromCharCode(100,101,116,101,114,109,105,110,101,100,95,106,95,54,51,0),631], [String.fromCharCode(119,95,50,54,95,109,105,110,117,116,101,115,0),51]]);
    let tickH = false;
    let injuryn = 4.0;
    let libsentryZ = 5.0;
    let iconqqj = String.fromCharCode(119,95,52,57,95,116,97,103,103,101,114,0);
    let catagory2 = String.fromCharCode(111,95,56,55,95,98,97,110,0);
    let signinupo = String.fromCharCode(100,95,54,57,95,122,101,114,111,101,115,0);
    let gesturesW = 0.0;
    let sliderY = false;
   for (let o = 0; o < 3; o++) {
      reducerf += `${catagory2.length | 3}`;
   }
       let penaltyshootnogoalO = String.fromCharCode(111,110,116,97,99,116,115,95,122,95,57,53,0);
       let activityg = 0.0;
       let cedbadcebfbfbfbcfecbcX = String.fromCharCode(109,112,97,100,115,112,95,52,95,54,55,0);
      for (let n = 0; n < 3; n++) {
         cedbadcebfbfbfbcfecbcX += `${parseInt(`${activityg}`)}`;
      }
         activityg /= Math.max(3, (String.fromCharCode(77,0) == penaltyshootnogoalO ? parseInt(`${activityg}`) : penaltyshootnogoalO.length));
         activityg -= 1;
      let iconcalendar4 = penaltyshootnogoalO.length <= 9320897;
      do {
         penaltyshootnogoalO = `${2 % (Math.max(4, parseInt(`${activityg}`)))}`;
         if (iconcalendar4) {
            break;
         }
      } while ((cedbadcebfbfbfbcfecbcX.length <= penaltyshootnogoalO.length) && iconcalendar4);
      while ((activityg * 4.18) >= 1.19 || 1.21 >= (4.18 * activityg)) {
         activityg -= parseInt(`${activityg}`) / (Math.max(1, 4));
         break;
      }
      while (3.73 <= (activityg * 3.71) || (parseInt(`${activityg}`) * cedbadcebfbfbfbcfecbcX.length) <= 1) {
         activityg -= 1 * parseInt(`${activityg}`);
         break;
      }
          let mergerg = 5.0;
         cedbadcebfbfbfbcfecbcX += `${parseInt(`${activityg}`)}`;
         mergerg += parseInt(`${mergerg}`);
         activityg += parseInt(`${activityg}`);
         activityg += 3;
      iconqqj += `${(2 + (tickH ? 3 : 2))}`;

    setIsBtnEnable(false);

      injuryn *= 2;
       let analyticJ = String.fromCharCode(99,105,114,99,108,101,100,95,106,95,57,53,0);
       let currentp = 1.0;
      let configurej = currentp >= 6341005.0;
      do {
         currentp /= Math.max(3, analyticJ.length);
         if (configurej) {
            break;
         }
      } while (configurej && (4 >= analyticJ.length));
          let mbjscommonI = 0.0;
         currentp *= parseInt(`${mbjscommonI}`) + parseInt(`${currentp}`);
         analyticJ += `${analyticJ.length}`;
       let loadingp = String.fromCharCode(102,95,49,48,48,95,97,101,115,111,112,116,0);
       let static_u23 = String.fromCharCode(112,114,101,105,118,111,117,115,95,116,95,55,53,0);
       let showd = 4;
       let vietnami = 5;
       let recommendationw: Map<any, any> = new Map([[String.fromCharCode(112,111,115,116,101,114,115,95,48,95,52,54,0),294], [String.fromCharCode(109,95,52,50,95,105,112,112,108,101,0),557], [String.fromCharCode(116,114,120,116,95,107,95,50,56,0),322]]);
      anythinkU += (String.fromCharCode(49,0) == analyticJ ? parseInt(`${currentp}`) : analyticJ.length);
    try {

   let auto_qw = iconqqj == String.fromCharCode(116,119,105,52,0);
   do {
      iconqqj = `${reducerf.length}`;
      if (auto_qw) {
         break;
      }
   } while ((!iconqqj.includes(`${tickH}`)) && auto_qw);
      tickH = (largeG.length * parseInt(`${libturbomodulejsijnik}`)) >= 19;
      setIsVisible(true);

   while (reducerf.length < 1 || tickH) {
      reducerf = `${signinupo.length % (Math.max(3, 6))}`;
      break;
   }
      largeG = `${parseInt(`${injuryn}`) ^ 1}`;
      if (productSelected.productType === "iap") {
        await requestPurchase({ skus: [productSelected.productSKU] });
      } else if (productSelected.productType === "subs") {

       let elementsb = true;
          let changeu: Array<any> = [348, 236];
         elementsb = changeu.length <= 8;
          let stylesc = 5.0;
          let giftr = 4.0;
         elementsb = stylesc >= giftr;
         elementsb = !elementsb && elementsb;
      largeG = `${signinupo.length | encryptw.size}`;
      reducerf = "3";
        const subs = subscriptions.find(
          (sub) => sub.productId === productSelected.productSKU
        );

       let description_6a: Array<any> = [636, 441];
       let shrinkm = 2.0;
       let tooltips2 = String.fromCharCode(120,95,50,52,0);
          let greyarrowupc = 2.0;
          let controlU: Array<any> = [618, 826, 623];
         shrinkm /= Math.max(parseFloat(`${description_6a.length + 3}`), 1);
         greyarrowupc *= 2;
         controlU.push(3);
         description_6a.push(parseInt(`${shrinkm}`) % 3);
          let constantsd: Array<any> = [781, 116];
         shrinkm /= Math.max(2, (parseFloat(`${String.fromCharCode(66,0) == tooltips2 ? description_6a.length : tooltips2.length}`)));
         constantsd.push(constantsd.length / (Math.max(10, constantsd.length)));
       let tickedU = String.fromCharCode(113,95,54,50,95,99,117,98,101,0);
       let clearM = String.fromCharCode(109,97,120,105,109,105,122,101,100,95,48,95,54,49,0);
      if ((parseFloat(`${tickedU.length}`) / (Math.max(9, shrinkm))) == 5.64 && (1 / (Math.max(8, parseInt(`${shrinkm}`)))) == 2) {
          let historyL = true;
          let become4: Array<any> = [911, 879];
          let n_positionC = false;
         shrinkm -= (parseFloat(`${(n_positionC ? 1 : 4) % (Math.max((historyL ? 2 : 4), 9))}`));
         historyL = (become4.length | become4.length) < 54;
      }
       let bangr = 3.0;
       let updatesA = 1.0;
         clearM = `${(String.fromCharCode(78,0) == clearM ? clearM.length : parseInt(`${bangr}`))}`;
         shrinkm *= parseFloat(`${clearM.length - parseInt(`${shrinkm}`)}`);
         clearM += `${(String.fromCharCode(87,0) == tickedU ? clearM.length : tickedU.length)}`;
      catagory2 += `${parseInt(`${injuryn}`)}`;
   for (let h = 0; h < 3; h++) {
      anythinkU /= Math.max(5, reducerf.length);
   }

        if (subs) {

   if (catagory2.endsWith(`${encryptw.size}`)) {
      encryptw = new Map([[`${anythinkU}`, (String.fromCharCode(115,0) == largeG ? parseInt(`${anythinkU}`) : largeG.length)]]);
   }
   while (catagory2.length > 5) {
       let handlert = 3.0;
       let libreactperfloggerjnia: Map<any, any> = new Map([[String.fromCharCode(112,114,101,102,105,120,101,115,95,50,95,49,48,0),true ], [String.fromCharCode(114,101,108,97,117,110,99,104,95,56,95,53,56,0),true ]]);
       let successi = 3;
       let linkA = true;
       let suggestione = 4.0;
       let trophyE = 5.0;
         trophyE += parseInt(`${handlert}`) << (Math.min(5, Math.abs(3)));
       let yellowcirclebgw: Map<any, any> = new Map([[String.fromCharCode(105,95,49,95,100,105,115,116,114,97,99,116,105,111,110,0),621], [String.fromCharCode(107,95,49,56,95,99,111,114,114,101,99,116,0),230]]);
       let shielddoneW: Map<any, any> = new Map([[String.fromCharCode(109,100,105,97,95,110,95,52,53,0),711], [String.fromCharCode(109,95,49,56,95,102,102,105,111,0),706], [String.fromCharCode(116,95,53,55,95,114,105,103,104,116,0),890]]);
      for (let c = 0; c < 3; c++) {
          let grayD = false;
          let arrowG = 2;
          let mbsplashE = false;
         suggestione /= Math.max(3, 2);
         grayD = !grayD;
         arrowG &= arrowG;
         mbsplashE = !grayD || arrowG == 80;
      }
      if (trophyE >= suggestione) {
         trophyE /= Math.max(((linkA ? 3 : 2) | parseInt(`${suggestione}`)), 1);
      }
      if (!Array.from(libreactperfloggerjnia.values()).includes(yellowcirclebgw.size)) {
          let playlistV = false;
          let application1 = String.fromCharCode(117,110,105,116,95,108,95,52,55,0);
          let progressa = true;
         libreactperfloggerjnia.set(`${suggestione}`, (parseInt(`${suggestione}`) & (linkA ? 3 : 3)));
         playlistV = (playlistV ? progressa : !playlistV);
         application1 += `${(3 + (progressa ? 2 : 5))}`;
      }
          let statsM = 1.0;
          let form9 = true;
         shielddoneW.set(`${handlert}`, parseInt(`${handlert}`));
         statsM /= Math.max(parseInt(`${statsM}`) * 1, 2);
         form9 = !form9;
       let login3 = 0;
      if ((4 - yellowcirclebgw.size) > 1 && 2 > (4 & yellowcirclebgw.size)) {
          let defaultplayerimg3 = 5;
          let indicatorK = 2.0;
          let privacyg = String.fromCharCode(116,105,101,114,95,118,95,54,56,0);
          let handler3 = String.fromCharCode(97,95,50,54,95,99,104,101,99,107,112,111,105,110,116,115,0);
         yellowcirclebgw.set(handler3, 3);
         defaultplayerimg3 |= (privacyg == String.fromCharCode(56,0) ? defaultplayerimg3 : privacyg.length);
         indicatorK += (privacyg == String.fromCharCode(97,0) ? parseInt(`${indicatorK}`) : privacyg.length);
         handler3 = `${(String.fromCharCode(52,0) == privacyg ? privacyg.length : parseInt(`${indicatorK}`))}`;
      }
         suggestione += parseInt(`${handlert}`);
      while (1 == login3) {
         login3 += successi % (Math.max(libreactperfloggerjnia.size, 6));
         break;
      }
          let fastforwardU = true;
         trophyE /= Math.max(libreactperfloggerjnia.size | 1, 5);
         fastforwardU = !fastforwardU || fastforwardU;
      anythinkU *= parseInt(`${libturbomodulejsijnik}`) | parseInt(`${handlert}`);
      break;
   }
          const offerToken = subs.subscriptionOfferDetails[0].offerToken;

   while (3.82 < (4.40 - anythinkU) || 2 < (parseInt(`${anythinkU}`) - reducerf.length)) {
      reducerf = `${2 << (Math.min(3, reducerf.length))}`;
      break;
   }
      catagory2 = `${iconqqj.length}`;
          await requestSubscription({
            sku: productSelected.productSKU,
            ...(offerToken && {
              subscriptionOffers: [
                { sku: productSelected.productSKU, offerToken },
              ],
            }),
          });
        } else {

       let regeng5 = String.fromCharCode(117,110,115,101,110,100,95,122,95,54,52,0);
      if (regeng5.length < 1) {
         regeng5 += "1";
      }
      for (let k = 0; k < 2; k++) {
         regeng5 = `${3 << (Math.min(5, regeng5.length))}`;
      }
         regeng5 += `${regeng5.length}`;
      temperaturew = `${iconqqj.length << (Math.min(Math.abs(1), 5))}`;
      libsentryZ *= parseFloat(`${signinupo.length ^ parseInt(`${injuryn}`)}`);
          throw new Error("subscription plan not found");
        }
      }
    } catch (err) {

      largeG = `${temperaturew.length}`;
      signinupo = `${parseInt(`${injuryn}`) / (Math.max(1, parseInt(`${libsentryZ}`)))}`;
      setIsVisible(false);

   while (2 > (signinupo.length | encryptw.size)) {
      signinupo = `${2 % (Math.max(2, catagory2.length))}`;
      break;
   }
   let activitym = tickH ? !tickH : tickH;
   do {
       let sheetR = String.fromCharCode(102,95,51,52,95,112,101,114,115,105,115,116,0);
       let uimanagers: Array<any> = [539, 594, 935];
       let foregroundI = String.fromCharCode(116,105,116,108,116,101,95,51,95,57,50,0);
         sheetR = `${uimanagers.length >> (Math.min(foregroundI.length, 1))}`;
         uimanagers = [uimanagers.length / (Math.max(10, sheetR.length))];
      if (1 > (1 << (Math.min(1, sheetR.length)))) {
         uimanagers.push(2 >> (Math.min(5, sheetR.length)));
      }
      for (let a = 0; a < 1; a++) {
         sheetR += "3";
      }
         uimanagers = [3 * foregroundI.length];
         uimanagers = [uimanagers.length];
      for (let z = 0; z < 1; z++) {
         uimanagers.push((String.fromCharCode(101,0) == foregroundI ? sheetR.length : foregroundI.length));
      }
      for (let w = 0; w < 1; w++) {
          let libreactR = 0;
          let libfilen: Map<any, any> = new Map([[String.fromCharCode(115,111,102,116,102,108,111,97,116,95,56,95,53,51,0),536], [String.fromCharCode(111,95,51,57,95,104,111,115,116,110,97,109,101,0),396]]);
          let iconedit5 = 5.0;
          let thumbnailA = 5.0;
         foregroundI = `${parseInt(`${iconedit5}`) * 2}`;
         libreactR <<= Math.min(1, Math.abs(libfilen.size));
         libfilen = new Map([[`${libfilen.size}`, 1 << (Math.min(1, Math.abs(libfilen.size)))]]);
         iconedit5 += parseFloat(`${3 ^ libreactR}`);
         thumbnailA *= libreactR;
      }
      if (3 <= uimanagers.length) {
         uimanagers = [1];
      }
      tickH = sheetR.length == 34;
      if (activitym) {
         break;
      }
   } while ((tickH || 2 <= (encryptw.size - 3)) && activitym);
      if (err instanceof PurchaseError) {

       let j_imageB = true;
       let zhuboX = true;
      if (zhuboX) {
         j_imageB = (zhuboX ? !j_imageB : !zhuboX);
      }
      for (let o = 0; o < 2; o++) {
         zhuboX = !j_imageB;
      }
      for (let z = 0; z < 3; z++) {
         j_imageB = (zhuboX ? j_imageB : zhuboX);
      }
          let description_9D: Array<any> = [45, 629];
          let shielddoneK: Map<any, any> = new Map([[String.fromCharCode(109,98,101,100,95,56,95,53,0),232], [String.fromCharCode(99,95,53,49,95,98,111,111,108,0),131], [String.fromCharCode(98,95,49,56,95,98,108,111,99,107,105,110,103,0),461]]);
         j_imageB = description_9D.length > 39;
         description_9D.push(shielddoneK.size);
         shielddoneK = new Map([[`${shielddoneK.size}`, 2 / (Math.max(5, shielddoneK.size))]]);
       let libreactnativeblobg = 2.0;
      let bridgeN = j_imageB ? !j_imageB : j_imageB;
      do {
         j_imageB = 75.2 <= libreactnativeblobg || !zhuboX;
         if (bridgeN) {
            break;
         }
      } while (bridgeN && (zhuboX && !j_imageB));
      temperaturew += `${encryptw.size * 2}`;
   while (!Array.from(encryptw.values()).includes(gesturesW)) {
      gesturesW -= (String.fromCharCode(48,0) == reducerf ? reducerf.length : parseInt(`${injuryn}`));
      break;
   }
        console.error("purchasing error: " + err);
      } else {

      libturbomodulejsijnik /= Math.max(3, parseInt(`${libturbomodulejsijnik}`));
       let trophyZ = String.fromCharCode(112,117,116,115,95,110,95,50,51,0);
       let templateprocessorl = 0;
          let exampleimageZ = 3.0;
          let libflipperl: Map<any, any> = new Map([[String.fromCharCode(109,95,51,57,95,101,120,112,114,0),String.fromCharCode(114,116,112,101,110,99,95,107,95,56,51,0)], [String.fromCharCode(114,101,99,111,110,110,101,99,116,105,110,103,95,100,95,54,56,0),String.fromCharCode(100,95,49,95,115,104,97,114,97,98,108,101,0)], [String.fromCharCode(114,97,112,105,100,106,115,111,110,95,55,95,53,53,0),String.fromCharCode(120,95,56,57,95,99,111,110,118,101,114,116,101,100,0)]]);
          let reactnativeultimatelistviewy = 2.0;
         trophyZ = `${parseInt(`${exampleimageZ}`)}`;
         exampleimageZ *= libflipperl.size;
         libflipperl.set(`${reactnativeultimatelistviewy}`, 3);
         reactnativeultimatelistviewy /= Math.max(parseFloat(`${libflipperl.size / (Math.max(4, parseInt(`${reactnativeultimatelistviewy}`)))}`), 3);
      for (let y = 0; y < 2; y++) {
          let rounda = 0.0;
          let descv: Map<any, any> = new Map([[String.fromCharCode(101,118,97,108,102,117,110,99,95,121,95,52,56,0),934], [String.fromCharCode(111,95,56,57,95,114,101,108,111,97,100,101,114,0),61], [String.fromCharCode(111,95,50,51,95,99,112,105,97,0),286]]);
         templateprocessorl %= Math.max(trophyZ.length, 4);
         rounda += parseFloat(`${descv.size}`);
         descv = new Map([[`${descv.size}`, descv.size]]);
      }
         trophyZ += "2";
       let cricket2 = 1.0;
      let libfileN = templateprocessorl <= 8130194;
      do {
         templateprocessorl /= Math.max(templateprocessorl, 2);
         if (libfileN) {
            break;
         }
      } while (libfileN && (cricket2 < 3.77));
       let subing: Map<any, any> = new Map([[String.fromCharCode(114,95,55,57,95,112,97,114,116,105,99,105,112,97,116,105,111,110,0),686], [String.fromCharCode(122,95,56,57,95,105,110,116,102,108,111,97,116,0),236]]);
      temperaturew = `${templateprocessorl}`;
        console.error("handle purchase error: ", err);
      }

      if (err && err.code == "E_USER_CANCELLED") {

       let libhermes6 = String.fromCharCode(102,95,52,57,95,109,105,109,101,0);
         libhermes6 = "2";
      for (let d = 0; d < 1; d++) {
         libhermes6 += `${libhermes6.length}`;
      }
      while (libhermes6.length > libhermes6.length) {
         libhermes6 = `${(String.fromCharCode(121,0) == libhermes6 ? libhermes6.length : libhermes6.length)}`;
         break;
      }
      iconqqj = "1";
      libsentryZ /= Math.max(3, parseFloat(`${1 + parseInt(`${anythinkU}`)}`));
        console.log("user cancel purchase");

   for (let g = 0; g < 3; g++) {
      gesturesW *= temperaturew.length & reducerf.length;
   }
      libsentryZ -= parseFloat(`${temperaturew.length}`);
        setIsBtnEnable(true);
      } else {

       let robotok = String.fromCharCode(115,95,57,53,95,105,116,101,114,97,116,105,118,101,0);
       let episodeN = 3.0;
      for (let u = 0; u < 2; u++) {
         robotok += `${robotok.length * 2}`;
      }
      while (4 >= (2 % (Math.max(4, robotok.length))) && (2 & robotok.length) >= 4) {
          let faviconP = 4.0;
          let rewindh = 2.0;
          let emptyd: Map<any, any> = new Map([[String.fromCharCode(113,95,49,56,95,99,111,110,102,105,103,117,114,97,116,105,111,110,115,0),String.fromCharCode(115,105,122,101,95,118,95,54,52,0)], [String.fromCharCode(117,110,105,111,110,101,100,95,97,95,51,57,0),String.fromCharCode(101,95,49,51,95,112,97,115,115,102,0)]]);
          let guideC = 1.0;
          let refreshT = false;
         robotok += `${(robotok.length & (refreshT ? 3 : 4))}`;
         faviconP += parseFloat(`${parseInt(`${guideC}`)}`);
         rewindh += parseInt(`${guideC}`) * parseInt(`${rewindh}`);
         emptyd = new Map([[`${emptyd.size}`, 3 << (Math.min(3, Math.abs(emptyd.size)))]]);
         refreshT = faviconP > 60.69;
         break;
      }
          let cricketJ = false;
          let shirtT: Map<any, any> = new Map([[String.fromCharCode(114,101,102,112,105,99,95,117,95,56,0),696], [String.fromCharCode(121,101,108,108,111,119,95,108,95,57,50,0),98], [String.fromCharCode(97,95,50,48,95,117,95,49,55,0),919]]);
          let sansU = String.fromCharCode(112,108,117,103,105,110,95,55,95,50,0);
         episodeN -= (parseInt(`${episodeN}`) % (Math.max(5, (cricketJ ? 5 : 1))));
         cricketJ = sansU.length < 78;
         shirtT.set(sansU, sansU.length);
          let owngoalE = 4.0;
         episodeN /= Math.max(parseInt(`${episodeN}`) << (Math.min(Math.abs(1), 1)), 2);
         owngoalE /= Math.max(2, parseInt(`${owngoalE}`) * 3);
          let iconclosewhite0 = false;
          let libavformatA = String.fromCharCode(114,97,116,105,110,103,95,52,95,55,49,0);
         robotok = `${parseInt(`${episodeN}`) * 2}`;
         iconclosewhite0 = (((iconclosewhite0 ? 67 : libavformatA.length) | libavformatA.length) >= 67);
          let shrinkR = String.fromCharCode(99,115,114,105,100,95,55,95,55,57,0);
         robotok = "2";
         shrinkR += `${(String.fromCharCode(84,0) == shrinkR ? shrinkR.length : shrinkR.length)}`;
      encryptw.set(iconqqj, 3);
   let mbjscommone = sliderY ? !sliderY : sliderY;
   do {
       let cedbadcebfbfbfbcfecbcB = true;
       let sortq = true;
         sortq = cedbadcebfbfbfbcfecbcB && sortq;
      if (!cedbadcebfbfbfbcfecbcB) {
         cedbadcebfbfbfbcfecbcB = sortq;
      }
       let gemfileP: Map<any, any> = new Map([[String.fromCharCode(112,117,110,99,116,117,97,116,105,111,110,95,119,95,48,0),712], [String.fromCharCode(104,95,52,95,99,111,109,112,97,114,97,98,108,101,0),122]]);
       let firebasep: Map<any, any> = new Map([[String.fromCharCode(115,105,110,103,108,101,95,51,95,57,49,0),365], [String.fromCharCode(115,121,109,98,111,108,95,113,95,53,0),185]]);
         sortq = cedbadcebfbfbfbcfecbcB;
      while (cedbadcebfbfbfbcfecbcB) {
          let bgvipxvodi = 4.0;
          let footballtrophy8 = 0.0;
          let annerw = 3.0;
          let libfbE = 4.0;
         sortq = footballtrophy8 < 98.6;
         bgvipxvodi *= 3 << (Math.min(Math.abs(parseInt(`${annerw}`)), 4));
         footballtrophy8 /= Math.max(parseInt(`${annerw}`) >> (Math.min(3, Math.abs(3))), 3);
         libfbE *= parseFloat(`${parseInt(`${libfbE}`) / (Math.max(9, parseInt(`${annerw}`)))}`);
         break;
      }
       let n_unlockw: Array<any> = [286, 77, 0];
      sliderY = (encryptw.size + parseInt(`${libturbomodulejsijnik}`)) < 19;
      if (mbjscommone) {
         break;
      }
   } while ((!sliderY) && mbjscommone);
        setDialogText(failedDialogText);

       let iconnotificationnewF = String.fromCharCode(105,95,53,54,95,112,114,101,112,101,110,100,0);
       let tumbnail0 = true;
      while (iconnotificationnewF.includes(`${tumbnail0}`)) {
         tumbnail0 = !tumbnail0;
         break;
      }
      let homeinactiveg = String.fromCharCode(48,107,55,50,0) == iconnotificationnewF;
      do {
          let small7 = String.fromCharCode(98,95,49,48,95,115,112,101,99,105,102,105,99,0);
          let delegate_tjc = false;
          let libavfilterr: Array<any> = [336, 940, 142];
          let analytick = true;
         iconnotificationnewF += `${(String.fromCharCode(110,0) == iconnotificationnewF ? small7.length : iconnotificationnewF.length)}`;
         small7 = "2";
         delegate_tjc = libavfilterr.includes(delegate_tjc);
         libavfilterr.push(((delegate_tjc ? 2 : 5) * (analytick ? 5 : 2)));
         if (homeinactiveg) {
            break;
         }
      } while ((!tumbnail0) && homeinactiveg);
         iconnotificationnewF += `${(String.fromCharCode(83,0) == iconnotificationnewF ? iconnotificationnewF.length : (tumbnail0 ? 5 : 4))}`;
      for (let z = 0; z < 1; z++) {
         tumbnail0 = !tumbnail0 && iconnotificationnewF.length == 40;
      }
      let gesturesWL = 8592123 <= iconnotificationnewF.length;
      do {
          let details3: Array<any> = [134, 962, 787];
          let graphicsl = 2;
         iconnotificationnewF = `${graphicsl + 3}`;
         details3.push(details3.length);
         graphicsl &= 3 << (Math.min(4, details3.length));
         if (gesturesWL) {
            break;
         }
      } while ((1 >= iconnotificationnewF.length) && gesturesWL);
      while (!iconnotificationnewF.startsWith(`${tumbnail0}`)) {
          let darkK = 3;
          let networkJ = false;
         iconnotificationnewF = `${1 * darkK}`;
         darkK >>= Math.min(4, Math.abs(1));
         break;
      }
      signinupo += `${encryptw.size}`;
   if (5 >= temperaturew.length) {
      signinupo += `${encryptw.size}`;
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
      const result = await mayi_StyleShrink.postAndroidIAP(iapTrans);

      console.log("validate iap result");
      console.log(result);
      return result.data.data;
    } catch (error) {
       let mintegral4 = String.fromCharCode(115,116,117,102,102,115,116,95,107,95,56,57,0);
    let projectr: Map<any, any> = new Map([[String.fromCharCode(100,95,57,52,95,116,117,114,110,111,102,102,0),true ], [String.fromCharCode(105,95,53,54,95,110,111,116,105,99,101,0),false ], [String.fromCharCode(113,95,55,50,95,115,117,98,116,114,97,99,116,101,100,0),true ]]);
    let episodeg = 4.0;
    let rewind5: Array<any> = [String.fromCharCode(115,116,114,99,97,115,101,99,109,112,95,98,95,53,53,0), String.fromCharCode(99,95,54,55,95,115,97,110,115,0), String.fromCharCode(114,95,57,57,95,97,115,112,101,99,116,0)];
    let lives = String.fromCharCode(105,95,50,95,115,99,104,101,100,117,108,105,110,103,0);
    let bootq = String.fromCharCode(117,110,100,101,114,102,108,111,119,95,110,95,56,51,0);
    let carouseli = String.fromCharCode(100,105,103,101,115,116,98,121,110,105,100,95,110,95,55,0);
    let notificationfillemptyR: Map<any, any> = new Map([[String.fromCharCode(116,95,53,95,117,110,112,97,99,107,101,100,0),true ], [String.fromCharCode(122,95,55,56,95,109,101,116,97,98,111,100,121,0),true ], [String.fromCharCode(106,114,101,102,95,104,95,52,49,0),true ]]);
    let expand7 = true;
    let watchM = 0;
    let manifestn = 4;
    let footballfiledlayout1 = 5.0;
    let leaguedetailsbgF = 2.0;
    let otherL = 5;
    let basketballplayerplaceholderj = 0.0;
    let libjsiX = String.fromCharCode(116,101,115,116,105,109,103,105,110,116,95,97,95,55,49,0);
      carouseli += `${mintegral4.length & watchM}`;
      mintegral4 += `${mintegral4.length}`;
   for (let y = 0; y < 3; y++) {
      rewind5.push(1 / (Math.max(9, bootq.length)));
   }
       let room1 = true;
       let componentregistryB = String.fromCharCode(102,95,52,56,95,105,109,112,111,114,116,0);
       let libfb8 = String.fromCharCode(122,95,53,50,95,115,117,103,103,101,115,116,101,100,0);
          let googleP = true;
         componentregistryB = "3";
         componentregistryB = `${libfb8.length - 3}`;
         room1 = (70 <= (libfb8.length * (!room1 ? 70 : libfb8.length)));
      if (4 <= componentregistryB.length) {
         componentregistryB = `${((room1 ? 2 : 4))}`;
      }
      let iconarrowrightoranget = 6303225 <= componentregistryB.length;
      do {
         componentregistryB += `${(3 + (room1 ? 4 : 4))}`;
         if (iconarrowrightoranget) {
            break;
         }
      } while (iconarrowrightoranget && (!componentregistryB.includes(`${room1}`)));
      while (room1) {
         componentregistryB += `${(libfb8.length * (room1 ? 2 : 3))}`;
         break;
      }
      for (let g = 0; g < 1; g++) {
          let condensedy: Map<any, any> = new Map([[String.fromCharCode(109,95,52,52,95,99,111,112,121,0),String.fromCharCode(110,95,49,55,95,100,101,99,105,115,105,111,110,0)], [String.fromCharCode(105,95,50,53,95,109,117,108,116,105,115,105,103,0),String.fromCharCode(122,95,54,48,95,119,105,110,100,111,119,115,0)], [String.fromCharCode(117,110,105,102,105,101,100,95,122,95,53,54,0),String.fromCharCode(117,110,104,105,100,101,95,52,95,49,51,0)]]);
          let membershipV = true;
          let progressb = 2;
         room1 = String.fromCharCode(55,0) == componentregistryB;
         condensedy.set(`${progressb}`, 2);
         membershipV = null == condensedy.get(`${membershipV}`);
         progressb ^= progressb;
      }
         libfb8 += `${componentregistryB.length}`;
         libfb8 = `${((room1 ? 4 : 5) | 1)}`;
      mintegral4 = "1";
       let default_rV = String.fromCharCode(98,95,52,54,95,100,105,115,115,99,111,110,110,101,99,116,0);
          let whatsappw = String.fromCharCode(110,95,54,50,95,116,116,116,0);
          let benefitG: Array<any> = [889, 886, 526];
          let downloadi = 5.0;
         default_rV += "1";
         whatsappw = `${parseInt(`${downloadi}`)}`;
         benefitG.push(2);
         downloadi *= parseInt(`${downloadi}`);
          let libreactnativejnil = 4.0;
          let condensedb = 0.0;
         default_rV += `${parseInt(`${libreactnativejnil}`) << (Math.min(default_rV.length, 3))}`;
         libreactnativejnil *= parseInt(`${condensedb}`) % 1;
         condensedb -= parseFloat(`${1 & parseInt(`${condensedb}`)}`);
         default_rV = "2";
      mintegral4 += `${notificationfillemptyR.size & default_rV.length}`;
   for (let y = 0; y < 2; y++) {
       let type_1s = true;
          let penaltyshoots = String.fromCharCode(119,114,111,110,103,95,101,95,55,0);
         type_1s = penaltyshoots.length >= 1;
      if (!type_1s) {
          let langf = String.fromCharCode(109,95,50,51,95,104,101,105,99,0);
          let turndownS = 5;
          let libjsib = String.fromCharCode(105,110,115,116,97,108,108,95,104,95,49,48,0);
         type_1s = !type_1s;
         langf += `${(libjsib == String.fromCharCode(53,0) ? turndownS : libjsib.length)}`;
         turndownS += langf.length;
      }
         type_1s = !type_1s;
      carouseli = `${lives.length ^ 2}`;
   }
   while (!Array.from(projectr.keys()).includes(`${episodeg}`)) {
       let navigationY = 0.0;
      let whistleorangeW = 8852007.0 >= navigationY;
      do {
         navigationY /= Math.max(parseInt(`${navigationY}`), 1);
         if (whistleorangeW) {
            break;
         }
      } while (whistleorangeW && (navigationY >= navigationY));
       let mini7 = 4;
       let logoA = 4;
      let cricketM = mini7 <= 9500884;
      do {
          let expando = true;
          let unreadN = String.fromCharCode(115,113,108,105,116,101,112,97,103,101,114,95,115,95,56,54,0);
          let countryv = true;
         mini7 >>= Math.min(Math.abs(3 | mini7), 1);
         expando = (!expando ? !countryv : expando);
         unreadN += `${(String.fromCharCode(54,0) == unreadN ? unreadN.length : (countryv ? 2 : 1))}`;
         if (cricketM) {
            break;
         }
      } while (cricketM && (2 >= mini7));
      projectr.set(mintegral4, mintegral4.length << (Math.min(1, rewind5.length)));
      break;
   }
   if (parseFloat(`${carouseli.length}`) > footballfiledlayout1) {
       let downloadl = String.fromCharCode(99,95,52,49,95,112,117,98,107,101,121,0);
       let fastP: Array<any> = [11, 895];
       let smally = String.fromCharCode(99,97,116,101,103,111,114,105,101,115,95,109,95,57,0);
       let unselectedm = 3;
         fastP = [smally.length ^ 2];
         fastP.push((downloadl == String.fromCharCode(82,0) ? fastP.length : downloadl.length));
      let predictionarroww = downloadl == String.fromCharCode(55,52,57,49,107,106,0);
      do {
          let infog = String.fromCharCode(114,97,105,110,95,106,95,56,0);
          let encryptor6 = 2.0;
         downloadl = `${smally.length + 2}`;
         infog += `${2 >> (Math.min(4, infog.length))}`;
         encryptor6 *= infog.length - 1;
         if (predictionarroww) {
            break;
         }
      } while ((2 > (3 * downloadl.length) && (3 * unselectedm) > 5) && predictionarroww);
         smally += `${fastP.length}`;
      if (fastP.length == downloadl.length) {
         downloadl = `${unselectedm / (Math.max(downloadl.length, 8))}`;
      }
      let reactnativejs0 = 5820167 <= unselectedm;
      do {
         unselectedm %= Math.max(1, (String.fromCharCode(76,0) == downloadl ? downloadl.length : fastP.length));
         if (reactnativejs0) {
            break;
         }
      } while (reactnativejs0 && ((unselectedm >> (Math.min(Math.abs(3), 4))) < 2));
      let pointx = String.fromCharCode(120,50,98,113,48,119,110,106,116,118,0) == smally;
      do {
         smally = `${fastP.length | smally.length}`;
         if (pointx) {
            break;
         }
      } while (pointx && (fastP.length <= smally.length));
         fastP.push(fastP.length | smally.length);
      if (smally.startsWith(`${unselectedm}`)) {
         smally += `${unselectedm}`;
      }
      if (!smally.startsWith(downloadl)) {
          let langkey8: Array<any> = [554, 210];
          let codeR: Array<any> = [887, 409];
          let libfbjniO: Map<any, any> = new Map([[String.fromCharCode(115,95,56,48,95,109,111,118,101,116,111,0),736], [String.fromCharCode(115,116,101,112,112,101,100,95,111,95,57,54,0),700]]);
          let applicationa = 3;
         downloadl += `${fastP.length | 3}`;
         langkey8 = [libfbjniO.size];
         codeR = [codeR.length + applicationa];
         libfbjniO = new Map([[`${libfbjniO.size}`, codeR.length % (Math.max(1, 8))]]);
         applicationa *= codeR.length;
      }
      for (let r = 0; r < 1; r++) {
         fastP = [fastP.length];
      }
         smally += "2";
      carouseli = "1";
   }
      episodeg *= parseInt(`${footballfiledlayout1}`);
   for (let j = 0; j < 2; j++) {
      carouseli = `${(String.fromCharCode(54,0) == lives ? lives.length : bootq.length)}`;
   }
   let iconschedulet = 5309003 <= manifestn;
   do {
       let attributedstringD = 1;
       let nativeL = 3.0;
       let ping8 = 3.0;
      let promotiona = 6529663.0 <= nativeL;
      do {
          let comment8 = String.fromCharCode(100,95,56,55,95,101,120,112,101,99,116,101,100,0);
          let shootk = 1;
          let bangI = 3.0;
          let reducerB = true;
         nativeL *= parseFloat(`${attributedstringD}`);
         comment8 += "3";
         shootk *= shootk * 1;
         bangI /= Math.max(1, parseFloat(`${3}`));
         reducerB = shootk < 78;
         if (promotiona) {
            break;
         }
      } while (((4 * ping8) < 1.77) && promotiona);
      for (let e = 0; e < 3; e++) {
         attributedstringD *= attributedstringD + 3;
      }
      if (5.17 <= (nativeL - ping8)) {
          let blacklistb = String.fromCharCode(109,101,97,115,117,114,101,95,118,95,54,56,0);
          let otherT = String.fromCharCode(100,95,51,49,95,115,116,114,116,111,107,0);
          let resultM = 2.0;
         ping8 += (parseFloat(`${blacklistb == String.fromCharCode(87,0) ? parseInt(`${nativeL}`) : blacklistb.length}`));
         otherT = `${otherT.length % 2}`;
         resultM *= parseFloat(`${1}`);
      }
      if (ping8 <= nativeL) {
         ping8 += parseFloat(`${parseInt(`${nativeL}`)}`);
      }
         ping8 *= parseFloat(`${parseInt(`${ping8}`) & 1}`);
      let chinai = 6262527 <= attributedstringD;
      do {
          let handlery = 5;
          let libffmpegkitZ = String.fromCharCode(108,95,56,56,95,99,114,101,97,116,105,111,110,0);
          let rootX = 2.0;
          let miniD = String.fromCharCode(118,101,114,115,105,111,110,115,95,111,95,49,0);
          let orangec: Array<any> = [String.fromCharCode(111,95,52,48,95,103,101,116,115,111,99,107,97,100,100,114,0), String.fromCharCode(97,95,50,57,95,104,97,100,100,0)];
         attributedstringD ^= 2 % (Math.max(9, handlery));
         handlery <<= Math.min(Math.abs(1), 5);
         libffmpegkitZ += `${parseInt(`${rootX}`) & 1}`;
         rootX -= orangec.length & miniD.length;
         miniD = `${2 & orangec.length}`;
         if (chinai) {
            break;
         }
      } while (chinai && (1.63 < (ping8 / 1.90) || 3 < (4 & attributedstringD)));
          let zoomq = 0;
         ping8 *= parseFloat(`${parseInt(`${ping8}`)}`);
         zoomq *= zoomq;
      if ((attributedstringD % 1) < 3 || (1 * attributedstringD) < 5) {
         attributedstringD *= 1 << (Math.min(Math.abs(parseInt(`${nativeL}`)), 5));
      }
         attributedstringD >>= Math.min(2, Math.abs(attributedstringD));
      manifestn %= Math.max(3, manifestn >> (Math.min(Math.abs(3), 3)));
      if (iconschedulet) {
         break;
      }
   } while (iconschedulet && ((manifestn - 5) <= 2));
       let episodesK = 1.0;
       let navigationR = 5.0;
       let tickedA = true;
          let filem = 1;
         episodesK += 1 * parseInt(`${navigationR}`);
         filem |= 2;
      if (navigationR >= episodesK) {
         navigationR += parseFloat(`${2}`);
      }
         navigationR /= Math.max(2, parseFloat(`${2 / (Math.max(4, parseInt(`${episodesK}`)))}`));
         tickedA = 75.48 < episodesK;
      let thumbnailO = episodesK >= 8354678.0;
      do {
          let shrink5 = String.fromCharCode(117,95,55,54,95,102,114,105,101,110,100,0);
          let countryu = String.fromCharCode(101,110,106,105,110,95,118,95,52,56,0);
          let yellow6 = 5;
          let libswscaleo = 3.0;
         episodesK *= parseInt(`${navigationR}`) * 2;
         shrink5 += `${countryu.length >> (Math.min(Math.abs(1), 3))}`;
         countryu = "1";
         yellow6 %= Math.max(2, shrink5.length);
         libswscaleo += shrink5.length | parseInt(`${libswscaleo}`);
         if (thumbnailO) {
            break;
         }
      } while ((1.11 <= (episodesK / 3.22) || (3.22 / (Math.max(3, navigationR))) <= 3.5) && thumbnailO);
         tickedA = 12.99 > navigationR;
      for (let y = 0; y < 2; y++) {
         tickedA = episodesK >= 15.27 && tickedA;
      }
         navigationR *= parseFloat(`${parseInt(`${episodesK}`)}`);
      for (let p = 0; p < 3; p++) {
         tickedA = navigationR > 22.30;
      }
      lives += `${3 & parseInt(`${leaguedetailsbgF}`)}`;
       let telemetryC: Array<any> = [852, 283];
       let frame_7hQ = String.fromCharCode(98,95,50,56,95,102,108,111,97,116,115,104,111,114,116,0);
         frame_7hQ += `${(String.fromCharCode(107,0) == frame_7hQ ? frame_7hQ.length : telemetryC.length)}`;
         frame_7hQ += `${telemetryC.length << (Math.min(frame_7hQ.length, 2))}`;
      while (telemetryC.length >= frame_7hQ.length) {
          let shrinkY = 1.0;
         frame_7hQ = `${telemetryC.length}`;
         shrinkY /= Math.max(5, parseFloat(`${2 + parseInt(`${shrinkY}`)}`));
         break;
      }
          let whatsappM = String.fromCharCode(121,95,52,55,95,103,114,101,101,116,105,110,103,0);
         telemetryC.push(whatsappM.length << (Math.min(5, frame_7hQ.length)));
      if (4 >= frame_7hQ.length) {
         telemetryC.push((frame_7hQ == String.fromCharCode(109,0) ? frame_7hQ.length : telemetryC.length));
      }
         frame_7hQ = `${frame_7hQ.length / 3}`;
      carouseli = `${2 << (Math.min(4, carouseli.length))}`;
   let expiredI = projectr.size <= 4968148;
   do {
      projectr.set(`${watchM}`, 2 * watchM);
      if (expiredI) {
         break;
      }
   } while ((projectr.size >= 5) && expiredI);
       let rewardg: Map<any, any> = new Map([[String.fromCharCode(121,95,50,48,95,112,111,112,117,112,0),239], [String.fromCharCode(113,95,49,57,95,118,115,97,100,0),385], [String.fromCharCode(97,117,116,111,117,112,100,97,116,101,95,119,95,50,48,0),192]]);
       let iconcloseP = String.fromCharCode(120,95,53,48,95,101,120,97,109,105,110,101,0);
       let typingm: Array<any> = [34, 838];
         iconcloseP += `${2 >> (Math.min(3, Math.abs(rewardg.size)))}`;
      while (4 < iconcloseP.length) {
          let temperature9 = String.fromCharCode(102,95,51,56,95,101,97,114,108,105,101,114,0);
          let edit0 = String.fromCharCode(113,95,49,56,95,99,104,115,101,116,0);
         iconcloseP += `${temperature9.length ^ 2}`;
         temperature9 = `${edit0.length - edit0.length}`;
         break;
      }
      while (3 < (1 >> (Math.min(3, typingm.length)))) {
         typingm = [iconcloseP.length];
         break;
      }
          let appsD = String.fromCharCode(104,95,55,53,95,101,114,114,108,111,103,0);
         iconcloseP = `${rewardg.size >> (Math.min(Math.abs(1), 2))}`;
         appsD = `${appsD.length}`;
      let p_imageX = iconcloseP == String.fromCharCode(95,98,55,122,114,114,55,99,0);
      do {
         iconcloseP += "2";
         if (p_imageX) {
            break;
         }
      } while ((5 <= (iconcloseP.length ^ 2) && 5 <= (2 ^ typingm.length)) && p_imageX);
         iconcloseP = `${rewardg.size << (Math.min(Math.abs(3), 4))}`;
      let temperatureX = typingm.length >= 6111444;
      do {
         typingm = [iconcloseP.length];
         if (temperatureX) {
            break;
         }
      } while (((rewardg.size - 3) == 5) && temperatureX);
      for (let v = 0; v < 2; v++) {
         iconcloseP = "2";
      }
          let libreactnativeblobw: Map<any, any> = new Map([[String.fromCharCode(105,95,55,49,95,103,101,116,0),String.fromCharCode(122,95,55,57,95,109,97,103,110,105,116,117,100,101,115,0)], [String.fromCharCode(105,110,116,114,111,95,116,95,50,48,0),String.fromCharCode(109,95,54,50,95,116,105,99,107,101,116,115,0)]]);
          let u_unlockt = String.fromCharCode(111,95,49,57,95,116,97,103,115,116,114,0);
         iconcloseP = `${(u_unlockt == String.fromCharCode(72,0) ? u_unlockt.length : libreactnativeblobw.size)}`;
      manifestn |= parseInt(`${episodeg}`);
   for (let b = 0; b < 3; b++) {
      carouseli += `${1 << (Math.min(5, mintegral4.length))}`;
   }
       let bridgeh = 4;
       let gestured = true;
       let optionso = false;
         gestured = (!gestured ? optionso : gestured);
      while (optionso) {
         optionso = gestured;
         break;
      }
      if (5 < bridgeh) {
          let basketballiconK = 4;
          let whiteanimationliven = 3.0;
          let iconviewergifR: Array<any> = [String.fromCharCode(115,99,104,110,111,114,114,95,110,95,50,52,0), String.fromCharCode(112,95,52,52,95,112,101,97,99,104,0), String.fromCharCode(105,95,53,57,0)];
          let j_center_: Map<any, any> = new Map([[String.fromCharCode(115,111,99,105,97,108,95,52,95,52,56,0),579], [String.fromCharCode(108,111,117,112,101,95,50,95,49,0),43]]);
         gestured = 9.42 < whiteanimationliven;
         basketballiconK *= 1 | iconviewergifR.length;
         whiteanimationliven *= basketballiconK % 2;
         iconviewergifR.push(j_center_.size);
         j_center_.set(`${iconviewergifR.length}`, j_center_.size << (Math.min(iconviewergifR.length, 3)));
      }
       let lineq = 1;
       let groupm = 0;
          let yellowN = 0.0;
          let scorew: Map<any, any> = new Map([[String.fromCharCode(101,95,53,53,95,102,97,116,97,108,0),115], [String.fromCharCode(97,118,102,109,116,95,108,95,52,0),266], [String.fromCharCode(115,115,101,116,95,51,95,54,57,0),955]]);
          let foregroundv: Map<any, any> = new Map([[String.fromCharCode(122,95,53,49,95,115,117,98,116,105,116,108,101,0),152], [String.fromCharCode(119,95,51,50,95,122,98,105,110,0),960]]);
         optionso = groupm <= 46;
         yellowN *= parseFloat(`${3}`);
         scorew.set(`${yellowN}`, parseInt(`${yellowN}`) << (Math.min(Math.abs(3), 2)));
         foregroundv.set(`${yellowN}`, foregroundv.size);
         gestured = 56 > bridgeh;
      for (let l = 0; l < 3; l++) {
         gestured = !optionso;
      }
         groupm -= ((gestured ? 1 : 3) + (optionso ? 1 : 5));
       let diceO = false;
      watchM <<= Math.min(Math.abs(parseInt(`${footballfiledlayout1}`)), 5);

      console.log("error when validate iap: ", error);

      otherL *= ((expand7 ? 4 : 3) & notificationfillemptyR.size);
      rewind5 = [3];
   for (let l = 0; l < 2; l++) {
      projectr.set(`${leaguedetailsbgF}`, 3 << (Math.min(4, Math.abs(parseInt(`${leaguedetailsbgF}`)))));
   }
   if (bootq.endsWith(`${watchM}`)) {
      watchM &= 3;
   }
   let showr = 5381783 >= otherL;
   do {
       let feedback3 = false;
       let flyerr = String.fromCharCode(104,95,51,52,95,109,97,110,105,112,117,108,97,116,101,0);
       let predictionwinq: Array<any> = [271, 455];
      if (!feedback3 && 2 > flyerr.length) {
          let filed3 = String.fromCharCode(97,95,56,52,95,104,113,97,100,115,112,0);
          let homeloadingH: Array<any> = [108, 986, 800];
         feedback3 = feedback3 || predictionwinq.length < 99;
         filed3 = `${homeloadingH.length}`;
         homeloadingH = [filed3.length % 2];
      }
         flyerr += `${flyerr.length | predictionwinq.length}`;
      for (let q = 0; q < 3; q++) {
          let ewardedT = String.fromCharCode(100,95,51,53,95,104,109,97,99,108,105,115,116,0);
          let rank8 = String.fromCharCode(100,105,115,97,112,112,101,97,114,95,102,95,57,51,0);
          let redirect0 = 5.0;
          let backwardi = String.fromCharCode(102,95,50,49,95,116,104,114,101,115,104,111,108,100,101,100,0);
         flyerr = `${3 | parseInt(`${redirect0}`)}`;
         ewardedT = `${(ewardedT == String.fromCharCode(122,0) ? rank8.length : ewardedT.length)}`;
         rank8 = `${ewardedT.length}`;
         redirect0 /= Math.max(3, rank8.length);
         backwardi = `${rank8.length}`;
      }
      let megaphonet = flyerr.length >= 7899858;
      do {
         flyerr += `${flyerr.length}`;
         if (megaphonet) {
            break;
         }
      } while (megaphonet && ((predictionwinq.length % (Math.max(flyerr.length, 7))) <= 4));
         feedback3 = !feedback3;
         feedback3 = (20 >= (predictionwinq.length - (feedback3 ? 20 : predictionwinq.length)));
         flyerr += `${(String.fromCharCode(110,0) == flyerr ? flyerr.length : (feedback3 ? 3 : 4))}`;
         predictionwinq = [predictionwinq.length << (Math.min(flyerr.length, 1))];
      for (let k = 0; k < 3; k++) {
         feedback3 = !feedback3;
      }
      otherL |= flyerr.length;
      if (showr) {
         break;
      }
   } while ((5 > otherL) && showr);
   let interstitiall = mintegral4 == String.fromCharCode(117,95,53,120,95,112,104,115,0);
   do {
      mintegral4 = `${(String.fromCharCode(99,0) == lives ? carouseli.length : lives.length)}`;
      if (interstitiall) {
         break;
      }
   } while (interstitiall && ((mintegral4.length - parseInt(`${episodeg}`)) == 1 && 5 == (1 - mintegral4.length)));
       let nbatrophyl = String.fromCharCode(104,95,57,48,95,115,116,114,116,111,108,108,0);
      while (nbatrophyl == String.fromCharCode(84,0)) {
         nbatrophyl = `${1 * nbatrophyl.length}`;
         break;
      }
      for (let x = 0; x < 1; x++) {
         nbatrophyl = `${nbatrophyl.length & nbatrophyl.length}`;
      }
      while (nbatrophyl.length == 1) {
          let shareL = String.fromCharCode(99,95,54,52,95,97,101,115,111,112,116,0);
          let trophyV = String.fromCharCode(115,117,98,116,97,115,107,95,98,95,57,56,0);
          let bello: Array<any> = [861, 30, 327];
          let iconviewergifF = String.fromCharCode(109,111,118,101,99,98,95,101,95,51,0);
          let grayw = 4;
         nbatrophyl = `${iconviewergifF.length | 3}`;
         shareL += `${bello.length & grayw}`;
         trophyV = `${grayw | 2}`;
         bello = [shareL.length % (Math.max(8, grayw))];
         iconviewergifF += `${shareL.length}`;
         break;
      }
      leaguedetailsbgF -= (parseFloat(`${String.fromCharCode(112,0) == nbatrophyl ? parseInt(`${episodeg}`) : nbatrophyl.length}`));
      manifestn ^= watchM;
   if (2 == (5 << (Math.min(4, Math.abs(manifestn))))) {
       let dependencyW = 2.0;
       let videojs3: Array<any> = [String.fromCharCode(104,109,104,100,95,48,95,52,50,0), String.fromCharCode(109,105,120,101,114,95,105,95,53,51,0)];
       let indicatorw = String.fromCharCode(115,95,49,49,95,100,101,108,97,117,110,97,121,0);
      if (2 <= (videojs3.length << (Math.min(Math.abs(2), 1))) && (dependencyW / 3.99) <= 5.5) {
         videojs3 = [3];
      }
          let e_playerU: Map<any, any> = new Map([[String.fromCharCode(101,95,53,56,95,99,111,109,112,108,101,109,101,110,116,105,110,103,0),85], [String.fromCharCode(101,121,98,111,97,114,100,95,97,95,52,50,0),28], [String.fromCharCode(113,115,99,97,108,101,113,108,111,103,95,53,95,50,57,0),576]]);
          let attributedstringU = String.fromCharCode(114,101,100,117,99,101,100,95,101,95,52,51,0);
          let small0: Array<any> = [52, 321, 167];
         videojs3 = [e_playerU.size % (Math.max(6, attributedstringU.length))];
         e_playerU.set(`${small0.length}`, small0.length >> (Math.min(Math.abs(2), 5)));
         attributedstringU += `${small0.length << (Math.min(Math.abs(2), 1))}`;
      if ((dependencyW + 1.98) >= 4.46 || 3 >= (indicatorw.length >> (Math.min(Math.abs(4), 5)))) {
         dependencyW -= parseFloat(`${videojs3.length | 3}`);
      }
       let policyS = 3.0;
       let utilsR = 5.0;
       let borderlessn = String.fromCharCode(115,116,101,114,101,111,95,103,95,55,52,0);
       let successc = String.fromCharCode(115,99,117,98,98,101,114,95,117,95,55,51,0);
         policyS *= parseFloat(`${2}`);
         utilsR /= Math.max(parseFloat(`${videojs3.length}`), 3);
      let searchu = successc == String.fromCharCode(57,95,97,116,56,109,103,0);
      do {
         successc += `${2 << (Math.min(Math.abs(parseInt(`${utilsR}`)), 1))}`;
         if (searchu) {
            break;
         }
      } while (((dependencyW / (Math.max(5.18, 5))) == 1.42 && (5.18 / (Math.max(6, dependencyW))) == 1.56) && searchu);
       let fullscreenminu = String.fromCharCode(115,99,97,108,97,114,109,117,108,116,95,122,95,56,53,0);
      rewind5 = [notificationfillemptyR.size + otherL];
   }
       let combinedt = 0.0;
       let filterL = String.fromCharCode(115,110,111,119,100,97,116,97,95,101,95,56,53,0);
      let toponc = combinedt <= 8266141.0;
      do {
         combinedt *= parseFloat(`${2 ^ parseInt(`${combinedt}`)}`);
         if (toponc) {
            break;
         }
      } while ((combinedt >= parseFloat(`${filterL.length}`)) && toponc);
       let awayteamfield9 = true;
       let volumeY = true;
       let headerI = false;
         combinedt -= (parseFloat(`${(awayteamfield9 ? 1 : 4) + (volumeY ? 3 : 5)}`));
      for (let g = 0; g < 1; g++) {
         headerI = !headerI || filterL.length >= 69;
      }
         headerI = !awayteamfield9;
      expand7 = 15 > mintegral4.length;
      footballfiledlayout1 += parseFloat(`${carouseli.length}`);
       let scoreg = false;
      for (let y = 0; y < 2; y++) {
         scoreg = !scoreg && scoreg;
      }
      for (let q = 0; q < 1; q++) {
         scoreg = !scoreg;
      }
          let disconnected7 = true;
          let mbridge_: Map<any, any> = new Map([[String.fromCharCode(120,95,55,48,95,100,115,116,114,0),true ], [String.fromCharCode(122,95,56,51,95,98,105,110,115,0),true ]]);
         scoreg = !disconnected7;
         mbridge_.set(`${mbridge_.size}`, mbridge_.size);
      rewind5.push(3);
   while (5 == bootq.length) {
      bootq += `${parseInt(`${leaguedetailsbgF}`) << (Math.min(rewind5.length, 5))}`;
      break;
   }
   let animationsN = notificationfillemptyR.size >= 9868592;
   do {
      notificationfillemptyR = new Map([[`${notificationfillemptyR.size}`, notificationfillemptyR.size % (Math.max(10, mintegral4.length))]]);
      if (animationsN) {
         break;
      }
   } while ((3 > notificationfillemptyR.size) && animationsN);
   let single1 = footballfiledlayout1 >= 9848794.0;
   do {
      footballfiledlayout1 += (parseFloat(`${(expand7 ? 5 : 4) / 2}`));
      if (single1) {
         break;
      }
   } while ((Array.from(notificationfillemptyR.values()).includes(footballfiledlayout1)) && single1);
   let defaultlogoG = mintegral4 == String.fromCharCode(122,122,104,0);
   do {
      mintegral4 = `${otherL % (Math.max(watchM, 6))}`;
      if (defaultlogoG) {
         break;
      }
   } while ((5 <= (mintegral4.length & 2)) && defaultlogoG);
   if (notificationfillemptyR.get(`${watchM}`) == null) {
      watchM += (String.fromCharCode(111,0) == carouseli ? notificationfillemptyR.size : carouseli.length);
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
      const result = await mayi_StyleShrink.postAndroidSubscriptions(subsTrans);
      console.log("validate subscription result");
      console.log(result);
      return result.success;
    } catch (err) {
       let libapminsightby = false;
    let weibow: Array<any> = [532, 803, 942];
    let history9 = String.fromCharCode(97,99,116,105,118,97,116,105,111,110,95,109,95,53,49,0);
    let d_playero: Map<any, any> = new Map([[String.fromCharCode(114,95,50,48,95,115,116,114,111,107,101,114,0),false ], [String.fromCharCode(117,95,51,54,95,97,108,108,111,119,0),false ]]);
    let shrinkv = String.fromCharCode(111,110,101,115,99,97,108,101,95,115,95,49,55,0);
    let schedulerz = 5.0;
    let changeF = String.fromCharCode(97,108,112,104,97,110,117,109,101,114,105,99,115,95,113,95,49,55,0);
    let videovarv = String.fromCharCode(113,117,97,100,95,121,95,54,0);
    let templ = 3.0;
    let const_erR: Array<any> = [829, 455, 691];
    let gesturesA = 1;
    let rankm: Map<any, any> = new Map([[String.fromCharCode(122,95,55,51,95,122,98,117,102,0),String.fromCharCode(114,101,110,101,119,95,111,95,49,55,0)], [String.fromCharCode(110,95,56,56,95,115,117,98,112,101,101,114,0),String.fromCharCode(109,105,110,105,109,117,109,95,55,95,57,50,0)], [String.fromCharCode(113,95,55,49,95,112,114,101,118,118,101,99,0),String.fromCharCode(115,116,114,110,108,101,110,95,110,95,51,49,0)]]);
    let o_lock7 = String.fromCharCode(122,95,55,53,95,99,111,108,108,105,115,116,0);
   let iconpipexpandn = libapminsightby ? !libapminsightby : libapminsightby;
   do {
       let valuesT = 2.0;
       let iconedit2 = String.fromCharCode(113,95,52,54,95,111,112,117,115,116,97,98,0);
      if ((1 | iconedit2.length) <= 5) {
          let gpayL = String.fromCharCode(116,105,109,101,105,110,102,111,114,99,101,95,53,95,57,57,0);
          let searchbarX: Map<any, any> = new Map([[String.fromCharCode(120,95,53,50,95,114,101,109,117,120,0),String.fromCharCode(99,111,114,114,101,99,116,101,100,95,103,95,49,48,0)], [String.fromCharCode(107,95,54,95,112,108,117,103,105,110,0),String.fromCharCode(109,109,105,117,116,105,108,115,95,112,95,55,0)], [String.fromCharCode(103,100,111,99,95,121,95,54,56,0),String.fromCharCode(120,95,57,54,95,99,107,112,116,0)]]);
          let tempu: Array<any> = [String.fromCharCode(103,101,116,99,95,109,95,54,54,0), String.fromCharCode(114,95,51,48,95,115,101,99,115,0)];
         valuesT -= gpayL.length >> (Math.min(4, Math.abs(searchbarX.size)));
         gpayL = "1";
         searchbarX = new Map([[`${tempu.length}`, tempu.length]]);
      }
         iconedit2 += `${(iconedit2 == String.fromCharCode(76,0) ? iconedit2.length : parseInt(`${valuesT}`))}`;
      for (let o = 0; o < 3; o++) {
         valuesT -= iconedit2.length << (Math.min(4, Math.abs(parseInt(`${valuesT}`))));
      }
         iconedit2 += `${parseInt(`${valuesT}`) - 3}`;
         iconedit2 += `${parseInt(`${valuesT}`) % (Math.max(5, iconedit2.length))}`;
         valuesT /= Math.max(2 * iconedit2.length, 4);
      libapminsightby = 8 >= videovarv.length;
      if (iconpipexpandn) {
         break;
      }
   } while (iconpipexpandn && (weibow.length == 2 && (weibow.length * 2) == 3));
      schedulerz += parseFloat(`${1 - weibow.length}`);
       let robotoq = 5;
       let downarrowH = true;
       let shrinky = String.fromCharCode(99,95,49,53,95,100,101,118,112,111,108,108,0);
       let viewerB = false;
       let downloadingN = true;
      while ((robotoq + 4) <= 5) {
         robotoq += (shrinky.length ^ (viewerB ? 5 : 5));
         break;
      }
      for (let j = 0; j < 2; j++) {
         shrinky += `${robotoq}`;
      }
         downarrowH = 41 <= robotoq;
          let arrowupI = false;
          let bodanz = String.fromCharCode(98,95,55,56,95,115,112,105,108,108,0);
          let encrypta = 2.0;
         robotoq -= ((downloadingN ? 4 : 3) ^ shrinky.length);
         arrowupI = bodanz.length <= 91;
         bodanz = `${parseInt(`${encrypta}`)}`;
         encrypta /= Math.max((parseFloat(`${String.fromCharCode(78,0) == bodanz ? parseInt(`${encrypta}`) : bodanz.length}`)), 5);
       let gemfiler: Array<any> = [446, 624];
      while (5 > shrinky.length) {
          let footballfiledlayoutS = true;
         viewerB = (robotoq + gemfiler.length) <= 27;
         footballfiledlayoutS = (!footballfiledlayoutS ? !footballfiledlayoutS : footballfiledlayoutS);
         break;
      }
         gemfiler = [3];
      while (1 >= (gemfiler.length * robotoq) && 1 >= (robotoq * gemfiler.length)) {
         robotoq += 1;
         break;
      }
      changeF = "1";
       let dataw = 2;
      if (2 < (dataw >> (Math.min(Math.abs(dataw), 2))) && 2 < (2 >> (Math.min(1, Math.abs(dataw))))) {
         dataw %= Math.max(2 - dataw, 5);
      }
      for (let l = 0; l < 2; l++) {
          let castingO: Map<any, any> = new Map([[String.fromCharCode(104,95,53,49,95,109,105,110,113,0),351], [String.fromCharCode(115,95,52,48,95,109,97,112,112,101,100,0),276], [String.fromCharCode(111,95,55,48,95,115,97,116,0),182]]);
          let pressure9 = String.fromCharCode(121,95,50,53,95,99,108,101,97,114,115,0);
          let iconbackwhitek = 2;
         dataw |= 1;
         castingO.set(`${iconbackwhitek}`, iconbackwhitek % 3);
         pressure9 += `${(pressure9 == String.fromCharCode(111,0) ? iconbackwhitek : pressure9.length)}`;
      }
      while ((dataw | dataw) <= 4 && 4 <= (dataw | dataw)) {
         dataw -= dataw & dataw;
         break;
      }
      weibow = [parseInt(`${templ}`) / 2];
      schedulerz /= Math.max(2, parseFloat(`${2}`));
      videovarv = `${const_erR.length}`;
   let utils_ = d_playero.size >= 7608583;
   do {
      d_playero = new Map([[changeF, changeF.length]]);
      if (utils_) {
         break;
      }
   } while (((d_playero.size % (Math.max(videovarv.length, 4))) >= 3) && utils_);
       let pointn = String.fromCharCode(116,105,114,101,100,95,51,95,49,53,0);
       let aboutT = String.fromCharCode(108,95,54,50,95,109,97,116,99,104,101,100,0);
       let plashH: Array<any> = [246, 198, 323];
      if (4 < (plashH.length % (Math.max(4, 1))) && (aboutT.length % (Math.max(4, plashH.length))) < 4) {
         plashH = [aboutT.length / (Math.max(3, pointn.length))];
      }
      for (let z = 0; z < 2; z++) {
         plashH = [plashH.length];
      }
         aboutT += `${plashH.length}`;
      if (4 == pointn.length) {
         plashH.push(aboutT.length >> (Math.min(2, plashH.length)));
      }
         plashH.push(pointn.length ^ 3);
      videovarv = `${(shrinkv == String.fromCharCode(104,0) ? shrinkv.length : pointn.length)}`;
   let iconclosewhiteZ = gesturesA <= 6283464;
   do {
      gesturesA <<= Math.min(Math.abs((String.fromCharCode(98,0) == history9 ? history9.length : weibow.length)), 2);
      if (iconclosewhiteZ) {
         break;
      }
   } while (((shrinkv.length * 1) <= 4) && iconclosewhiteZ);
   while (history9 == String.fromCharCode(101,0) || changeF.length >= 1) {
      history9 += `${videovarv.length + changeF.length}`;
      break;
   }
   let styles1 = weibow.length <= 7367355;
   do {
      weibow.push(1 + parseInt(`${templ}`));
      if (styles1) {
         break;
      }
   } while ((weibow.length <= 3 || 2 <= (weibow.length - 3)) && styles1);
      templ *= 1 % (Math.max(4, changeF.length));
      changeF += `${parseInt(`${schedulerz}`)}`;
   let resultm = shrinkv.length >= 5783910;
   do {
      shrinkv += "2";
      if (resultm) {
         break;
      }
   } while ((d_playero.size == 1) && resultm);

      console.log("post android subscription error: ", err);

      d_playero.set(`${shrinkv}`, shrinkv.length % (Math.max(2, 6)));
      libapminsightby = gesturesA <= changeF.length;
      changeF += "1";
   while (!videovarv.includes(`${libapminsightby}`)) {
      libapminsightby = (weibow.length * parseInt(`${schedulerz}`)) <= 83;
      break;
   }
   for (let f = 0; f < 3; f++) {
      gesturesA /= Math.max(5, changeF.length);
   }
      schedulerz -= parseFloat(`${gesturesA - rankm.size}`);
   for (let i = 0; i < 2; i++) {
      rankm = new Map([[`${weibow.length}`, weibow.length - 3]]);
   }
      rankm.set(`${gesturesA}`, const_erR.length >> (Math.min(1, Math.abs(gesturesA))));
   if (!videovarv.startsWith(`${libapminsightby}`)) {
       let resendo = 2.0;
       let filledF: Array<any> = [598, 498];
       let blacklistS: Array<any> = [376, 565, 144];
         filledF = [blacklistS.length];
      if (filledF.includes(resendo)) {
          let teamdetailsbgC: Map<any, any> = new Map([[String.fromCharCode(99,114,101,97,116,101,95,121,95,53,48,0),false ], [String.fromCharCode(97,100,106,117,115,116,95,121,95,49,57,0),false ]]);
          let pingE = String.fromCharCode(117,112,103,114,97,100,101,115,95,110,95,51,48,0);
          let arrowY = String.fromCharCode(109,95,50,51,95,118,105,115,105,98,105,108,105,116,121,0);
         resendo += parseFloat(`${parseInt(`${resendo}`) * filledF.length}`);
         teamdetailsbgC.set(arrowY, 1);
         pingE = "1";
         arrowY = `${pingE.length}`;
      }
      libapminsightby = d_playero.size < rankm.size;
   }
   for (let v = 0; v < 1; v++) {
      shrinkv += `${2 | history9.length}`;
   }
      changeF = `${rankm.size}`;
   if ((changeF.length >> (Math.min(Math.abs(4), 5))) >= 2) {
       let updates4: Map<any, any> = new Map([[String.fromCharCode(108,95,52,95,101,98,117,108,97,115,0),788], [String.fromCharCode(99,108,111,115,101,95,105,95,54,56,0),87]]);
       let twitterC = 3.0;
       let tooltipso = 3.0;
       let nodee: Map<any, any> = new Map([[String.fromCharCode(101,120,99,101,112,116,105,111,110,95,111,95,55,51,0),360], [String.fromCharCode(108,95,55,50,95,115,117,112,112,111,114,116,101,100,0),781], [String.fromCharCode(115,116,114,105,112,101,95,104,95,50,56,0),605]]);
         nodee.set(`${updates4.size}`, updates4.size);
      while (1 >= updates4.size) {
         tooltipso -= parseFloat(`${updates4.size}`);
         break;
      }
      for (let x = 0; x < 2; x++) {
         twitterC -= 2 / (Math.max(8, parseInt(`${tooltipso}`)));
      }
      for (let f = 0; f < 1; f++) {
         tooltipso /= Math.max(4, parseFloat(`${2}`));
      }
         updates4.set(`${tooltipso}`, 2 & updates4.size);
          let user7: Array<any> = [694, 721, 686];
          let actions5: Map<any, any> = new Map([[String.fromCharCode(109,95,54,50,95,114,117,110,116,101,115,116,115,0),false ], [String.fromCharCode(114,101,100,105,114,101,99,116,105,111,110,97,108,95,104,95,55,0),false ]]);
          let gifgoalF = 1;
         twitterC /= Math.max(parseInt(`${twitterC}`) >> (Math.min(user7.length, 2)), 3);
         user7.push(2 * actions5.size);
         actions5 = new Map([[`${actions5.size}`, 2 + gifgoalF]]);
         gifgoalF |= actions5.size % (Math.max(2, 2));
          let v_hashy: Map<any, any> = new Map([[String.fromCharCode(103,101,116,104,100,114,95,56,95,55,0),371], [String.fromCharCode(100,95,50,49,95,114,103,98,112,108,117,115,0),592]]);
          let nativemodulek: Array<any> = [707, 848];
         nodee = new Map([[`${updates4.size}`, updates4.size | 3]]);
         v_hashy.set(`${nativemodulek.length}`, nativemodulek.length);
       let trashi = 3.0;
         nodee.set(`${twitterC}`, parseInt(`${twitterC}`) % 3);
          let carouselY = false;
         tooltipso *= parseFloat(`${parseInt(`${tooltipso}`) / (Math.max(1, 4))}`);
         carouselY = (!carouselY ? !carouselY : !carouselY);
         nodee.set(`${twitterC}`, 2 | updates4.size);
       let filledc = 0.0;
      changeF += `${(String.fromCharCode(53,0) == videovarv ? videovarv.length : parseInt(`${schedulerz}`))}`;
   }
   for (let f = 0; f < 3; f++) {
       let klevini = String.fromCharCode(112,97,103,101,105,110,95,115,95,54,48,0);
         klevini += `${klevini.length >> (Math.min(3, klevini.length))}`;
          let megaphoneg = String.fromCharCode(117,95,53,49,95,112,114,101,102,97,99,101,0);
         klevini += `${klevini.length ^ 1}`;
         megaphoneg = `${megaphoneg.length % 2}`;
      if (klevini != klevini) {
          let thumbnailQ: Array<any> = [11, 721];
          let dycreatorA = false;
          let dplusj = 2.0;
         klevini += `${3 << (Math.min(4, klevini.length))}`;
         thumbnailQ.push(parseInt(`${dplusj}`));
         dycreatorA = 62.34 == dplusj;
      }
      history9 += `${const_erR.length >> (Math.min(Math.abs(3), 3))}`;
   }
   for (let m = 0; m < 2; m++) {
      changeF = `${parseInt(`${templ}`)}`;
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
       let trashA = 5.0;
    let terms8 = String.fromCharCode(118,95,52,51,95,112,111,114,116,101,114,0);
    let statisticsinactive3 = String.fromCharCode(121,95,55,49,0);
    let j_imageF = true;
    let libreact2 = false;
    let mintegral1 = String.fromCharCode(119,95,49,53,95,97,112,112,101,97,114,101,110,99,101,0);
    let weiboj = 2;
    let modeL = 4.0;
    let phonen = String.fromCharCode(106,95,55,52,95,109,101,100,105,97,110,0);
    let floating0 = 5.0;
    let largesoundW: Array<any> = [673, 45];
    let clearK = String.fromCharCode(109,105,103,104,116,95,51,95,51,48,0);
    let inactiveu = String.fromCharCode(100,101,99,101,108,101,114,97,116,105,110,103,95,102,95,51,51,0);
      terms8 = "3";
      mintegral1 = "2";
      trashA += (parseFloat(`${(libreact2 ? 3 : 3) << (Math.min(3, Math.abs((j_imageF ? 5 : 5))))}`));
   if (phonen.endsWith(`${modeL}`)) {
      phonen = `${weiboj ^ 3}`;
   }
   for (let y = 0; y < 2; y++) {
      terms8 += `${weiboj}`;
   }
      largesoundW.push(2 * phonen.length);

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
       let homeplayerp: Map<any, any> = new Map([[String.fromCharCode(108,95,57,51,95,114,101,106,101,99,116,105,111,110,115,0),386], [String.fromCharCode(99,111,110,116,105,110,101,110,116,95,102,95,51,49,0),887], [String.fromCharCode(99,112,117,102,108,97,103,115,95,100,95,50,54,0),747]]);
    let controlsL = String.fromCharCode(109,120,112,101,103,95,119,95,53,48,0);
    let calendarh = String.fromCharCode(111,108,108,101,99,116,105,111,110,115,95,54,95,56,52,0);
    let thumbnailO: Map<any, any> = new Map([[String.fromCharCode(107,95,57,57,95,99,108,97,112,0),939], [String.fromCharCode(97,95,53,56,95,114,105,102,102,0),75]]);
    let classes6 = String.fromCharCode(119,97,107,101,117,112,95,48,95,57,49,0);
    let constantsO = String.fromCharCode(109,106,112,101,103,95,116,95,53,51,0);
    let telegramy: Array<any> = [647, 464, 98];
    let template_ch = 1.0;
      homeplayerp.set(controlsL, 3);

      if (currentPurchase) {

   for (let e = 0; e < 2; e++) {
      thumbnailO.set(constantsO, 2);
   }
        console.log("-------Current Purchase------------");

   let configurei = String.fromCharCode(122,97,55,121,103,100,100,114,50,0) == calendarh;
   do {
      calendarh = "3";
      if (configurei) {
         break;
      }
   } while ((4 >= (homeplayerp.size / (Math.max(calendarh.length, 4))) || 2 >= (homeplayerp.size / 4)) && configurei);
        console.log(currentPurchase);

   while (controlsL.length < classes6.length) {
      controlsL += `${telegramy.length}`;
      break;
   }
        console.log(
          products.some(
            (product) => product.productId === currentPurchase.productId
          )
        );

      homeplayerp.set(`${constantsO}`, 3);

        try {

      homeplayerp = new Map([[`${thumbnailO.size}`, 3]]);
          if (currentPurchase.transactionReceipt) {

       let componentregistryM = String.fromCharCode(104,119,114,97,110,100,95,99,95,53,51,0);
         componentregistryM += `${componentregistryM.length}`;
      while (componentregistryM.length >= 4 || componentregistryM != String.fromCharCode(103,0)) {
          let xvodU = String.fromCharCode(122,95,57,54,95,97,117,120,100,97,116,97,0);
          let turndownw = 1.0;
         componentregistryM += `${(componentregistryM == String.fromCharCode(121,0) ? xvodU.length : componentregistryM.length)}`;
         xvodU += `${parseInt(`${turndownw}`)}`;
         break;
      }
          let iconmoreb: Map<any, any> = new Map([[String.fromCharCode(99,111,110,115,116,116,105,109,101,95,55,95,57,48,0),957], [String.fromCharCode(102,108,97,116,116,101,110,95,113,95,50,48,0),436]]);
         componentregistryM = "2";
         iconmoreb.set(`${iconmoreb.size}`, 1);
      calendarh = `${telegramy.length + calendarh.length}`;
            const key = currentPurchase.transactionId?.concat("true");

      constantsO += `${classes6.length ^ constantsO.length}`;
            const isIAP = products.some(
              (product) => product.productId === currentPurchase.productId
            );

   let popupN = homeplayerp.size >= 5893875;
   do {
      homeplayerp.set(controlsL, 2);
      if (popupN) {
         break;
      }
   } while ((5 > (4 << (Math.min(5, controlsL.length)))) && popupN);

            if (receiptBuffer.has(key)) {

   let iconnewsshare4 = 7523206 >= homeplayerp.size;
   do {
       let episodesr = false;
       let crossD = String.fromCharCode(117,110,119,105,110,100,95,100,95,57,0);
         episodesr = crossD.length > 44;
         crossD += "3";
      let roomd = crossD.length >= 6894231;
      do {
         crossD += `${2 % (Math.max(5, crossD.length))}`;
         if (roomd) {
            break;
         }
      } while ((3 >= crossD.length && episodesr) && roomd);
      if (crossD.length > 4) {
          let libtob4: Array<any> = [263, 196];
         crossD = `${(libtob4.length << (Math.min(4, Math.abs((episodesr ? 4 : 2)))))}`;
      }
         crossD = `${((episodesr ? 2 : 4) & crossD.length)}`;
      if (episodesr || crossD.length >= 1) {
          let skipA = false;
          let greyarrowupt = 2.0;
         crossD = `${((skipA ? 3 : 1))}`;
         skipA = 81.75 >= (greyarrowupt - greyarrowupt);
      }
      homeplayerp.set(crossD, ((episodesr ? 4 : 3) >> (Math.min(Math.abs(2), 2))));
      if (iconnewsshare4) {
         break;
      }
   } while (iconnewsshare4 && (2 <= (4 & controlsL.length) || 1 <= (4 & controlsL.length)));
              console.log(
                "duplicate transaction id: ",
                currentPurchase.transactionId
              );

   let networke = controlsL.length >= 5314728;
   do {
      controlsL = `${2 | constantsO.length}`;
      if (networke) {
         break;
      }
   } while (networke && (controlsL.startsWith(`${thumbnailO.size}`)));
              await finishTransaction({
                purchase: currentPurchase,
                isConsumable: isIAP,
              });

   while (thumbnailO.size <= 5) {
      homeplayerp = new Map([[controlsL, (String.fromCharCode(65,0) == constantsO ? controlsL.length : constantsO.length)]]);
      break;
   }
              setIsVisible(false);

       let rulesn: Array<any> = [971, 780, 254];
       let attributedstringa: Array<any> = [609, 659];
       let greytickC = String.fromCharCode(110,95,49,53,95,97,112,112,101,110,100,0);
       let armvaz = String.fromCharCode(115,117,98,108,97,121,101,114,95,50,95,51,52,0);
      let fullscreenmaxr = 8761017 >= attributedstringa.length;
      do {
         attributedstringa.push(attributedstringa.length ^ 2);
         if (fullscreenmaxr) {
            break;
         }
      } while ((1 == (attributedstringa.length % 5) && (5 % (Math.max(5, attributedstringa.length))) == 3) && fullscreenmaxr);
      for (let x = 0; x < 1; x++) {
         rulesn.push(armvaz.length);
      }
       let twitter6: Array<any> = [80, 338];
       let guideF: Array<any> = [672, 727, 627];
      if (1 > (twitter6.length / 2)) {
         twitter6.push(attributedstringa.length >> (Math.min(1, rulesn.length)));
      }
      if ((rulesn.length << (Math.min(4, attributedstringa.length))) < 1 && (attributedstringa.length << (Math.min(rulesn.length, 4))) < 1) {
         attributedstringa = [armvaz.length];
      }
      telegramy = [constantsO.length];
              setIsBtnEnable(true);

   for (let y = 0; y < 3; y++) {
      controlsL += `${1 * homeplayerp.size}`;
   }
              return;
            }

            setTimeout(() => setIsVisible(false), 10000);

   for (let j = 0; j < 1; j++) {
      thumbnailO.set(constantsO, classes6.length);
   }

            const success = isIAP
              ? await saveFinishIAP("injuryTemperature", "")
              : await saveFinishSubs(currentPurchase); 

            setReceiptBuffer((prev) => {

      controlsL += "3";
              const receipt = new Map(prev);

      calendarh += "1";
              receipt.set(
                currentPurchase.transactionId?.concat(success),
                success
              );

       let searchbarJ = 1.0;
      let homeloading6 = 8136856.0 >= searchbarJ;
      do {
         searchbarJ *= parseFloat(`${parseInt(`${searchbarJ}`) << (Math.min(Math.abs(parseInt(`${searchbarJ}`)), 1))}`);
         if (homeloading6) {
            break;
         }
      } while ((4.62 == searchbarJ) && homeloading6);
         searchbarJ /= Math.max(1, parseFloat(`${parseInt(`${searchbarJ}`) & 3}`));
      if (searchbarJ <= 5.4) {
         searchbarJ += parseFloat(`${1 * parseInt(`${searchbarJ}`)}`);
      }
      controlsL = "1";
              return receipt;
            });

   for (let a = 0; a < 2; a++) {
      constantsO = `${telegramy.length / 3}`;
   }

            if (success) {

   let iconnotificationnewE = controlsL == String.fromCharCode(118,54,104,50,122,103,54,111,107,0);
   do {
      controlsL = `${classes6.length}`;
      if (iconnotificationnewE) {
         break;
      }
   } while ((controlsL.length > 4) && iconnotificationnewE);
              console.log("success ", success);

       let libyogaG = String.fromCharCode(113,117,101,114,121,95,120,95,53,52,0);
       let predictionbannersharedH = false;
       let borderlessU = String.fromCharCode(100,95,55,55,95,114,101,102,108,101,99,116,0);
         borderlessU += `${((predictionbannersharedH ? 2 : 5))}`;
      for (let j = 0; j < 3; j++) {
         borderlessU += `${(String.fromCharCode(111,0) == libyogaG ? libyogaG.length : (predictionbannersharedH ? 5 : 3))}`;
      }
         libyogaG += "1";
      for (let j = 0; j < 3; j++) {
         predictionbannersharedH = borderlessU.length < 95 && predictionbannersharedH;
      }
         libyogaG = `${borderlessU.length | 2}`;
      if (borderlessU.length == 1) {
         predictionbannersharedH = libyogaG.length > 84 || !predictionbannersharedH;
      }
       let coreE: Array<any> = [99, 145, 215];
       let sellmathbackgroundX: Array<any> = [983, 482];
      for (let i = 0; i < 2; i++) {
          let modityr = String.fromCharCode(110,95,50,52,95,97,99,118,112,0);
          let righth: Array<any> = [498, 747, 130];
          let delegate_iyg = 4.0;
         borderlessU = `${righth.length * libyogaG.length}`;
         modityr += `${modityr.length}`;
         righth = [(String.fromCharCode(117,0) == modityr ? parseInt(`${delegate_iyg}`) : modityr.length)];
         delegate_iyg /= Math.max(4, modityr.length);
      }
      for (let s = 0; s < 3; s++) {
         predictionbannersharedH = sellmathbackgroundX.length < 45 && predictionbannersharedH;
      }
      controlsL += `${homeplayerp.size + 3}`;
              await finishTransaction({
                purchase: currentPurchase,
                isConsumable: isIAP,
              });

   for (let q = 0; q < 1; q++) {
       let inouttargetredQ = String.fromCharCode(115,113,114,116,110,101,103,95,110,95,56,54,0);
       let iconshareD = 0;
       let statsnomoredata6 = String.fromCharCode(116,114,117,116,104,95,111,95,54,52,0);
      let iconmoreq = iconshareD >= 4927935;
      do {
         iconshareD -= inouttargetredQ.length;
         if (iconmoreq) {
            break;
         }
      } while (iconmoreq && (1 < (inouttargetredQ.length | iconshareD)));
          let long_25G = 4.0;
         statsnomoredata6 += `${parseInt(`${long_25G}`) | statsnomoredata6.length}`;
      let tempK = iconshareD >= 5423487;
      do {
         iconshareD >>= Math.min(Math.abs(2 + iconshareD), 4);
         if (tempK) {
            break;
         }
      } while (tempK && (statsnomoredata6.length > iconshareD));
         inouttargetredQ += `${statsnomoredata6.length}`;
       let completeC = 1.0;
          let homeloadinga: Array<any> = [865, 64, 384];
          let foregroundL = 4.0;
          let minie: Map<any, any> = new Map([[String.fromCharCode(112,114,105,110,116,118,97,108,95,57,95,54,50,0),741], [String.fromCharCode(116,97,112,95,109,95,54,52,0),987], [String.fromCharCode(102,95,54,48,95,104,101,114,109,105,116,101,0),993]]);
         statsnomoredata6 = `${statsnomoredata6.length % 3}`;
         homeloadinga.push(homeloadinga.length);
         foregroundL -= 2;
         minie.set(`${foregroundL}`, parseInt(`${foregroundL}`) >> (Math.min(Math.abs(2), 3)));
          let verticalS: Map<any, any> = new Map([[String.fromCharCode(116,104,117,109,98,95,114,95,57,53,0),967], [String.fromCharCode(112,95,55,48,95,97,108,119,97,121,115,0),643], [String.fromCharCode(112,95,51,52,95,112,105,120,101,108,115,120,0),191]]);
          let singapore8 = 1;
          let const_yvn = 1.0;
         iconshareD &= iconshareD & verticalS.size;
         verticalS.set(`${const_yvn}`, 1);
         singapore8 &= 2;
         const_yvn -= parseFloat(`${1}`);
         completeC += parseFloat(`${2}`);
         completeC += parseFloat(`${iconshareD & inouttargetredQ.length}`);
      template_ch *= telegramy.length;
   }

              handleRefresh();

   let iconorientationh = template_ch >= 9891898.0;
   do {
      template_ch /= Math.max(1, calendarh.length * controlsL.length);
      if (iconorientationh) {
         break;
      }
   } while (iconorientationh && (2.79 > (template_ch + 1.38) && (telegramy.length >> (Math.min(Math.abs(2), 3))) > 5));

              if (mayi_Gift.isLogin(userState.user)) {

   while (controlsL != calendarh) {
      calendarh += `${2 & calendarh.length}`;
      break;
   }
                setDialogText(successDialogText);

   if ((template_ch + constantsO.length) > 2.55 && (template_ch + constantsO.length) > 2.55) {
       let o_count_ = 4.0;
       let s_positionW = String.fromCharCode(111,95,51,52,95,105,110,116,101,114,99,101,112,116,111,114,0);
       let cornerkickn = false;
       let umengH = String.fromCharCode(99,95,55,95,116,111,108,111,119,101,114,0);
         cornerkickn = !cornerkickn || umengH.length <= 37;
         s_positionW += `${(s_positionW == String.fromCharCode(111,0) ? s_positionW.length : (cornerkickn ? 3 : 4))}`;
         umengH = `${((cornerkickn ? 4 : 2))}`;
         cornerkickn = s_positionW.startsWith(`${o_count_}`);
      for (let d = 0; d < 2; d++) {
         s_positionW += `${((cornerkickn ? 3 : 2))}`;
      }
         umengH += `${((cornerkickn ? 3 : 4) | s_positionW.length)}`;
         s_positionW += `${umengH.length}`;
         cornerkickn = 80.57 < o_count_ && cornerkickn;
         o_count_ /= Math.max(4, parseFloat(`${1 - parseInt(`${o_count_}`)}`));
      let libfbP = cornerkickn ? !cornerkickn : cornerkickn;
      do {
         cornerkickn = 63.46 > o_count_;
         if (libfbP) {
            break;
         }
      } while (libfbP && (!cornerkickn));
          let tooltipsN = String.fromCharCode(122,108,105,98,112,114,105,109,101,95,106,95,53,52,0);
         umengH = `${s_positionW.length / (Math.max(2, 5))}`;
         tooltipsN = `${(String.fromCharCode(115,0) == tooltipsN ? tooltipsN.length : tooltipsN.length)}`;
       let defaultplayerimgN = 5.0;
       let templateprocessora = 5.0;
      template_ch /= Math.max(1, (umengH == String.fromCharCode(55,0) ? telegramy.length : umengH.length));
   }
                setIsDialogOpen(true);

   let singleZ = telegramy.length >= 6690882;
   do {
      telegramy.push(1 % (Math.max(9, constantsO.length)));
      if (singleZ) {
         break;
      }
   } while (singleZ && (2 >= (constantsO.length - 2) && 2 >= (telegramy.length - constantsO.length)));
                setIsSuccess(true);
              } else {

      homeplayerp.set(`${homeplayerp.size}`, 1);
                dispatch(setShowGuestPurchaseSuccess(true));

      classes6 = `${parseInt(`${template_ch}`)}`;
                setIsVisible(false);

   if (telegramy.length >= thumbnailO.size) {
      telegramy.push(constantsO.length & 3);
   }
                setIsBtnEnable(true);
                
              }
            } else {

      classes6 += `${homeplayerp.size}`;
              console.log("success", success);

   if (3 >= telegramy.length) {
      constantsO = `${3 - thumbnailO.size}`;
   }
              await finishTransaction({
                purchase: currentPurchase,
                isConsumable: isIAP,
              });

   if ((5 | constantsO.length) >= 4) {
       let tempnodatagifY: Map<any, any> = new Map([[String.fromCharCode(100,105,115,97,108,108,111,119,95,109,95,55,56,0),15], [String.fromCharCode(112,114,101,115,101,110,116,105,110,103,95,112,95,54,49,0),869]]);
       let feedbackm = 3;
       let policyp = 1.0;
       let clockN = String.fromCharCode(103,95,54,49,95,102,108,97,115,104,0);
         policyp *= 2 / (Math.max(10, parseInt(`${policyp}`)));
      while (1 <= feedbackm) {
         tempnodatagifY = new Map([[`${tempnodatagifY.size}`, 3 + feedbackm]]);
         break;
      }
      for (let t = 0; t < 1; t++) {
          let sharek: Array<any> = [478, 435];
          let small6: Array<any> = [948, 846, 440];
          let iconschedule6: Map<any, any> = new Map([[String.fromCharCode(105,95,57,49,95,109,111,116,99,111,109,112,0),134], [String.fromCharCode(114,101,109,101,109,98,101,114,95,102,95,51,49,0),417], [String.fromCharCode(117,110,99,114,111,112,112,101,100,95,49,95,55,56,0),370]]);
          let feedbacko = 4.0;
          let paginationq = 3.0;
         feedbackm >>= Math.min(Math.abs(feedbackm), 1);
         sharek = [iconschedule6.size];
         small6 = [sharek.length];
         iconschedule6 = new Map([[`${iconschedule6.size}`, 1 / (Math.max(4, parseInt(`${paginationq}`)))]]);
         feedbacko /= Math.max(parseInt(`${feedbacko}`), 3);
         paginationq *= parseFloat(`${sharek.length}`);
      }
      if (2.9 >= policyp) {
         feedbackm /= Math.max(parseInt(`${policyp}`) & clockN.length, 3);
      }
       let register_wob = 5.0;
       let q_playerM = 1.0;
      let collection2 = 9115265 <= feedbackm;
      do {
         feedbackm <<= Math.min(1, Math.abs(tempnodatagifY.size << (Math.min(1, Math.abs(feedbackm)))));
         if (collection2) {
            break;
         }
      } while (collection2 && ((tempnodatagifY.size << (Math.min(2, Math.abs(feedbackm)))) <= 1));
         tempnodatagifY.set(clockN, 2 >> (Math.min(3, clockN.length)));
       let iconarrowleftv = String.fromCharCode(98,95,50,54,95,111,110,101,112,97,115,115,0);
       let rnewarchdefaultsw = String.fromCharCode(115,95,54,48,95,109,105,103,104,116,0);
      while (Array.from(tempnodatagifY.values()).includes(policyp)) {
         tempnodatagifY.set(iconarrowleftv, parseInt(`${q_playerM}`) % 3);
         break;
      }
      while (policyp == 4.23) {
          let trophym = String.fromCharCode(101,113,117,105,118,97,108,101,110,116,95,101,95,50,55,0);
          let greyf = 2.0;
          let libavformatB: Map<any, any> = new Map([[String.fromCharCode(116,95,51,52,95,98,119,114,105,116,101,0),894], [String.fromCharCode(111,95,51,56,95,101,100,105,116,101,100,0),716], [String.fromCharCode(115,109,111,111,116,104,101,100,95,116,95,55,48,0),314]]);
          let historyg = false;
         clockN = `${parseInt(`${greyf}`)}`;
         trophym = "2";
         greyf /= Math.max((parseFloat(`${trophym == String.fromCharCode(87,0) ? libavformatB.size : trophym.length}`)), 3);
         libavformatB = new Map([[`${libavformatB.size}`, trophym.length & 1]]);
         historyg = libavformatB.size >= trophym.length;
         break;
      }
         clockN += `${clockN.length}`;
      let iconnewssharer = 7096524 <= feedbackm;
      do {
          let moon0 = String.fromCharCode(99,95,51,51,95,112,108,97,105,110,0);
          let runtime2 = 1;
          let circlej = false;
         feedbackm /= Math.max(runtime2, 4);
         moon0 += "2";
         runtime2 &= 3 + moon0.length;
         if (iconnewssharer) {
            break;
         }
      } while (((4.59 * policyp) == 3.13 && 4.59 == (policyp * feedbackm)) && iconnewssharer);
      constantsO = `${2 + feedbackm}`;
   }

              setDialogText(failedDialogText);

   while (1 <= (telegramy.length & 1) || (thumbnailO.size & 1) <= 1) {
       let hook8 = 5.0;
       let readq = String.fromCharCode(105,111,115,117,114,102,97,99,101,95,114,95,50,55,0);
       let gifgoal4 = String.fromCharCode(102,99,116,108,95,108,95,49,56,0);
         hook8 += parseInt(`${hook8}`);
         hook8 += parseInt(`${hook8}`);
      if ((hook8 - 1.14) >= 3.8) {
          let rewardvideoo = 4.0;
         hook8 *= parseInt(`${rewardvideoo}`) - 1;
      }
          let incidentG = 0;
         hook8 += 1;
         incidentG ^= incidentG;
      let inouttargetredG = String.fromCharCode(109,101,52,56,108,101,0) == readq;
      do {
          let videovarJ = 3.0;
          let libapminsightbb = String.fromCharCode(109,111,109,101,110,116,95,121,95,54,51,0);
          let iconcalendarg = String.fromCharCode(118,95,49,54,95,119,97,116,99,104,0);
         readq = `${readq.length}`;
         videovarJ -= parseFloat(`${libapminsightbb.length}`);
         libapminsightbb = `${libapminsightbb.length}`;
         iconcalendarg = "2";
         if (inouttargetredG) {
            break;
         }
      } while (inouttargetredG && (gifgoal4 != readq));
      while (gifgoal4.includes(readq)) {
         readq += `${readq.length & parseInt(`${hook8}`)}`;
         break;
      }
          let nativeexk = String.fromCharCode(115,99,97,108,101,99,117,100,97,95,51,95,48,0);
          let showc = String.fromCharCode(110,117,109,98,105,116,115,95,57,95,55,53,0);
          let soundO = 0.0;
         readq += `${2 >> (Math.min(4, Math.abs(parseInt(`${hook8}`))))}`;
         nativeexk += `${nativeexk.length}`;
         showc += `${showc.length & parseInt(`${soundO}`)}`;
         soundO += (parseFloat(`${String.fromCharCode(99,0) == showc ? parseInt(`${soundO}`) : showc.length}`));
          let configureu = false;
         hook8 *= (readq == String.fromCharCode(103,0) ? readq.length : (configureu ? 5 : 5));
      if (parseInt(`${hook8}`) == readq.length) {
          let libreactnativejniu = 2;
          let minimizei = String.fromCharCode(116,114,97,106,101,99,116,111,114,121,95,118,95,49,49,0);
         readq = `${3 >> (Math.min(2, gifgoal4.length))}`;
         libreactnativejniu += (String.fromCharCode(102,0) == minimizei ? libreactnativejniu : minimizei.length);
      }
      telegramy = [(String.fromCharCode(118,0) == calendarh ? calendarh.length : classes6.length)];
      break;
   }
              setIsDialogOpen(true);

   if ((5.75 / (Math.max(6, template_ch))) > 1.31 || 5.16 > (template_ch / 5.75)) {
      template_ch /= Math.max(1 - parseInt(`${template_ch}`), 5);
   }
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
       let configureD = 0.0;
    let telegramj = 5.0;
    let router0 = String.fromCharCode(105,95,49,95,102,97,115,116,101,115,116,0);
    let tnewinterstitiali = 5;
    let encryptE = false;
    let imagenomoredatav = String.fromCharCode(115,116,114,115,101,112,95,55,95,55,54,0);
    let dragw = String.fromCharCode(114,101,115,97,109,112,95,100,95,50,51,0);
    let oranget: Map<any, any> = new Map([[String.fromCharCode(119,95,50,48,95,99,108,97,115,115,105,99,0),332], [String.fromCharCode(111,118,101,114,117,115,101,95,55,95,50,50,0),805], [String.fromCharCode(107,95,55,54,95,110,101,119,108,121,0),94]]);
    let libfabricjnir = String.fromCharCode(113,95,53,95,105,110,116,114,97,120,104,117,102,0);
    let weibo9 = String.fromCharCode(106,95,54,57,95,102,111,114,105,0);
    let iconclosewhitewithbgy: Array<any> = [492, 794];
   if (3 >= (router0.length / (Math.max(4, parseInt(`${configureD}`)))) && 3.39 >= (3.95 / (Math.max(3, configureD)))) {
      router0 += `${imagenomoredatav.length}`;
   }
      telegramj *= parseFloat(`${parseInt(`${configureD}`) % 3}`);
   while (configureD > imagenomoredatav.length) {
      imagenomoredatav += `${tnewinterstitiali}`;
      break;
   }
   while ((configureD * 3) >= 2.46) {
      telegramj -= parseFloat(`${tnewinterstitiali}`);
      break;
   }
   if (!encryptE) {
       let play6 = String.fromCharCode(105,115,122,101,114,111,95,111,95,54,54,0);
       let lang1 = 4.0;
       let analyticV = 0;
      let penaltymatchiconE = analyticV <= 5052242;
      do {
          let teamR = String.fromCharCode(102,95,55,54,95,118,112,115,104,97,114,101,100,0);
          let handler_ = 5.0;
          let renderd = 4.0;
         analyticV &= (teamR == String.fromCharCode(50,0) ? play6.length : teamR.length);
         handler_ *= parseInt(`${renderd}`);
         renderd -= 2 << (Math.min(Math.abs(parseInt(`${handler_}`)), 3));
         if (penaltymatchiconE) {
            break;
         }
      } while ((analyticV < 1) && penaltymatchiconE);
         analyticV += analyticV - 1;
      if (play6.length == 2) {
         lang1 *= parseFloat(`${parseInt(`${lang1}`)}`);
      }
      while (!play6.startsWith(`${lang1}`)) {
         lang1 /= Math.max(3, parseFloat(`${parseInt(`${lang1}`) + play6.length}`));
         break;
      }
       let connectionM = 2.0;
       let footballJ = 0.0;
      while (5.37 <= (connectionM + 4.68) && (connectionM + analyticV) <= 4.68) {
         analyticV |= parseInt(`${lang1}`) + play6.length;
         break;
      }
          let libreanimatedw = 0;
         lang1 += parseFloat(`${analyticV / (Math.max(play6.length, 7))}`);
         libreanimatedw *= libreanimatedw - libreanimatedw;
          let iconadslinkJ = String.fromCharCode(117,95,57,56,95,115,97,102,97,114,121,0);
          let schedulerq = String.fromCharCode(116,95,55,57,95,116,114,110,115,0);
         play6 += `${iconadslinkJ.length + analyticV}`;
         iconadslinkJ += `${schedulerq.length}`;
         schedulerq = `${schedulerq.length + 2}`;
      let rncoreq = connectionM >= 7194651.0;
      do {
         connectionM /= Math.max(parseInt(`${connectionM}`) << (Math.min(play6.length, 5)), 2);
         if (rncoreq) {
            break;
         }
      } while (rncoreq && ((connectionM / (Math.max(6, footballJ))) > 3.30 && (footballJ / 3.30) > 2.14));
      telegramj *= parseFloat(`${dragw.length}`);
   }

    const result = await mayi_Injury.getUserDetails();

   if (encryptE || 4 > imagenomoredatav.length) {
      encryptE = String.fromCharCode(67,0) == dragw;
   }
   if ((3 & oranget.size) >= 4) {
      telegramj += parseFloat(`${3}`);
   }
      imagenomoredatav = `${tnewinterstitiali / (Math.max(2, 2))}`;
      imagenomoredatav += `${2 / (Math.max(10, imagenomoredatav.length))}`;
      configureD -= (libfabricjnir == String.fromCharCode(77,0) ? imagenomoredatav.length : libfabricjnir.length);
    if (result == null) {

       let typest = 5.0;
       let temperatureV = String.fromCharCode(104,95,57,55,95,110,117,108,108,112,97,99,107,101,116,0);
         temperatureV += "3";
      if (2.86 < (typest / 2.91)) {
          let greyB = String.fromCharCode(109,95,51,57,95,104,105,116,115,0);
          let pnewinterstitialu = 2.0;
         temperatureV += `${parseInt(`${typest}`) & greyB.length}`;
         greyB += "2";
         pnewinterstitialu /= Math.max(parseInt(`${pnewinterstitialu}`), 2);
      }
         typest += parseFloat(`${parseInt(`${typest}`)}`);
         temperatureV += `${temperatureV.length}`;
         typest -= parseFloat(`${1}`);
         typest -= (parseFloat(`${String.fromCharCode(69,0) == temperatureV ? temperatureV.length : parseInt(`${typest}`)}`));
      router0 += `${parseInt(`${configureD}`) | oranget.size}`;
      dragw = `${parseInt(`${telegramj}`)}`;
       let iconnotificationnewU = String.fromCharCode(100,101,110,111,109,95,121,95,57,49,0);
       let defaultplayerimgL: Array<any> = [String.fromCharCode(111,99,97,116,105,111,110,95,113,95,50,51,0), String.fromCharCode(106,95,55,56,95,99,111,109,112,114,101,115,115,111,114,0)];
       let logout2 = 0.0;
      for (let p = 0; p < 3; p++) {
          let detailZ = 2.0;
          let weatherL = String.fromCharCode(99,114,99,99,95,116,95,51,52,0);
         logout2 -= parseFloat(`${2}`);
         detailZ *= parseFloat(`${weatherL.length}`);
         weatherL = "2";
      }
      for (let v = 0; v < 2; v++) {
         defaultplayerimgL = [3 & defaultplayerimgL.length];
      }
       let flipperw: Array<any> = [String.fromCharCode(104,95,49,48,48,95,118,101,114,108,97,121,0), String.fromCharCode(120,108,97,98,101,108,119,105,100,116,104,95,113,95,51,49,0), String.fromCharCode(117,95,57,48,95,119,97,118,101,115,0)];
       let orangem: Array<any> = [345, 812, 680];
          let hejiS = 3.0;
          let crownH = 0.0;
         orangem.push(defaultplayerimgL.length & flipperw.length);
         hejiS *= parseFloat(`${parseInt(`${crownH}`)}`);
      if (flipperw.length < orangem.length) {
         orangem.push(1);
      }
      while ((4 % (Math.max(3, defaultplayerimgL.length))) <= 1 || 5 <= (defaultplayerimgL.length % 4)) {
         defaultplayerimgL.push(flipperw.length);
         break;
      }
         iconnotificationnewU = `${orangem.length + defaultplayerimgL.length}`;
       let target3 = 1.0;
       let activityD = 2.0;
      if ((logout2 * activityD) > 3.85) {
          let darkG: Array<any> = [779, 481];
          let controlsw = false;
         activityD *= 2;
         darkG = [((controlsw ? 3 : 4) / 2)];
         controlsw = darkG.length >= 11 || !controlsw;
      }
      telegramj *= parseFloat(`${parseInt(`${configureD}`)}`);
   while ((configureD / (Math.max(1.18, 1))) == 3.1) {
      configureD += ((encryptE ? 3 : 3));
      break;
   }
      imagenomoredatav += `${imagenomoredatav.length}`;
      return;
    }

    await dispatch(updateUserAuth(result));

       let previewG = String.fromCharCode(103,95,49,51,95,117,110,105,102,111,114,109,0);
       let iconshareH = 4.0;
       let upgrade4 = String.fromCharCode(101,95,54,50,95,110,101,97,114,0);
      while (4 < previewG.length) {
         iconshareH += parseFloat(`${parseInt(`${iconshareH}`) / (Math.max(previewG.length, 8))}`);
         break;
      }
      if (1.18 >= (2.64 - iconshareH)) {
         iconshareH += parseFloat(`${parseInt(`${iconshareH}`) & 3}`);
      }
      let libtob_ = iconshareH <= 5851645.0;
      do {
         iconshareH /= Math.max((parseFloat(`${String.fromCharCode(101,0) == upgrade4 ? parseInt(`${iconshareH}`) : upgrade4.length}`)), 3);
         if (libtob_) {
            break;
         }
      } while (libtob_ && (3 <= (4 >> (Math.min(5, upgrade4.length))) && (iconshareH / 5.8) <= 3.6));
         iconshareH /= Math.max(parseFloat(`${3}`), 3);
      let pangleo = String.fromCharCode(55,50,115,109,48,51,52,56,121,110,0) == previewG;
      do {
         previewG += "3";
         if (pangleo) {
            break;
         }
      } while (pangleo && (upgrade4 != previewG));
         previewG = `${parseInt(`${iconshareH}`) >> (Math.min(Math.abs(2), 4))}`;
          let stepv = true;
          let stringse = 2.0;
          let networkJ = String.fromCharCode(105,100,97,116,95,54,95,53,49,0);
         iconshareH /= Math.max(parseFloat(`${parseInt(`${stringse}`) / 3}`), 4);
         stepv = networkJ.length < 45 && !stepv;
         stringse += (parseFloat(`${(stepv ? 4 : 2) / (Math.max(3, 3))}`));
         networkJ = `${((stepv ? 1 : 2))}`;
      if (iconshareH == parseFloat(`${previewG.length}`)) {
         previewG += `${(String.fromCharCode(85,0) == previewG ? parseInt(`${iconshareH}`) : previewG.length)}`;
      }
         previewG += `${upgrade4.length | 1}`;
      oranget = new Map([[dragw, dragw.length]]);
   if (encryptE) {
       let combinedo = 4.0;
         combinedo += 1 * parseInt(`${combinedo}`);
         combinedo /= Math.max(parseInt(`${combinedo}`), 4);
          let dependenciesz = 4.0;
          let b_lockX: Map<any, any> = new Map([[String.fromCharCode(119,95,52,54,95,109,105,100,115,0),910], [String.fromCharCode(97,98,115,100,105,102,102,95,113,95,56,54,0),103]]);
          let libbufferz = true;
         combinedo /= Math.max(parseInt(`${dependenciesz}`) + 1, 4);
         dependenciesz -= b_lockX.size;
         b_lockX.set(`${libbufferz}`, b_lockX.size / 3);
      encryptE = libfabricjnir.length >= 15;
   }
   while (1 >= (parseInt(`${telegramj}`) + libfabricjnir.length) || 2.36 >= (parseFloat(`${libfabricjnir.length}`) + telegramj)) {
      telegramj *= parseFloat(`${3 + tnewinterstitiali}`);
      break;
   }
      libfabricjnir = `${tnewinterstitiali}`;
   let strz = telegramj >= 9663108.0;
   do {
      telegramj /= Math.max(parseFloat(`${parseInt(`${telegramj}`) / (Math.max(10, parseInt(`${configureD}`)))}`), 2);
      if (strz) {
         break;
      }
   } while ((2.56 <= (2.92 + telegramj)) && strz);
    return;
  };

  const handleRefresh = async () => {
       let downarrow0 = String.fromCharCode(115,95,49,52,95,108,105,98,118,111,114,98,105,115,0);
    let linkc = 4.0;
    let orientationT = 0.0;
    let loginN = String.fromCharCode(110,101,120,116,104,111,112,95,55,95,50,52,0);
    let foundf = String.fromCharCode(115,119,102,104,97,115,104,95,111,95,56,50,0);
    let sportsL = 3;
    let philippines_: Map<any, any> = new Map([[String.fromCharCode(98,95,55,95,105,108,108,101,103,97,108,0),String.fromCharCode(99,101,110,116,114,97,108,95,119,95,57,54,0)], [String.fromCharCode(99,111,100,101,99,112,114,105,118,95,115,95,49,49,0),String.fromCharCode(115,95,54,56,95,114,101,119,114,105,116,116,101,110,0)], [String.fromCharCode(121,95,56,54,95,109,115,117,98,0),String.fromCharCode(111,118,101,114,105,100,100,101,110,95,105,95,54,48,0)]]);
    let shootyesgoalr = String.fromCharCode(116,114,97,105,108,101,114,95,106,95,51,56,0);
    let controlsD = false;
    let dplusr = String.fromCharCode(120,95,56,48,95,116,101,115,115,101,108,97,116,111,114,0);
    let memberp = false;
      linkc -= parseFloat(`${philippines_.size}`);
   while ((shootyesgoalr.length % (Math.max(5, philippines_.size))) > 2) {
       let stationsc: Map<any, any> = new Map([[String.fromCharCode(98,95,52,54,95,112,108,97,110,101,0),5], [String.fromCharCode(120,95,50,57,95,115,104,97,114,100,0),194]]);
       let tempnodatagif6 = String.fromCharCode(103,111,108,100,95,113,95,53,51,0);
       let showless2 = 1.0;
       let imagenetworkerrU = 1.0;
       let giftX: Array<any> = [82, 168, 206];
      while (giftX.includes(imagenetworkerrU)) {
         giftX.push(parseInt(`${imagenetworkerrU}`) | tempnodatagif6.length);
         break;
      }
      let phoneshareu = tempnodatagif6 == String.fromCharCode(104,112,114,110,111,112,120,0);
      do {
         tempnodatagif6 = `${giftX.length}`;
         if (phoneshareu) {
            break;
         }
      } while ((2 >= (4 + tempnodatagif6.length)) && phoneshareu);
      let modelst = 5366707 <= stationsc.size;
      do {
          let whistleorange3 = String.fromCharCode(102,108,117,115,104,95,52,95,54,55,0);
          let commonG: Array<any> = [String.fromCharCode(99,111,112,121,100,97,116,97,95,109,95,55,55,0), String.fromCharCode(117,95,50,55,95,100,97,115,104,101,110,99,0)];
          let description_3o = String.fromCharCode(112,114,101,100,120,108,95,102,95,49,57,0);
         stationsc = new Map([[`${showless2}`, (description_3o == String.fromCharCode(81,0) ? description_3o.length : parseInt(`${showless2}`))]]);
         whistleorange3 += `${whistleorange3.length & 1}`;
         commonG = [commonG.length << (Math.min(whistleorange3.length, 1))];
         if (modelst) {
            break;
         }
      } while (modelst && (tempnodatagif6.length < stationsc.size));
      while (!tempnodatagif6.startsWith(`${stationsc.size}`)) {
         stationsc.set(`${imagenetworkerrU}`, parseInt(`${imagenetworkerrU}`));
         break;
      }
          let popupN = String.fromCharCode(114,95,54,48,95,112,114,111,102,105,108,101,115,0);
          let analyticsc = 1;
          let search2 = String.fromCharCode(122,95,55,56,95,117,112,100,97,116,101,100,0);
         tempnodatagif6 = `${analyticsc}`;
         popupN += `${popupN.length / (Math.max(search2.length, 9))}`;
         analyticsc *= search2.length;
      for (let l = 0; l < 2; l++) {
         tempnodatagif6 = `${parseInt(`${imagenetworkerrU}`) & 3}`;
      }
      while ((showless2 / 5.8) < 4.61 && 2 < (parseInt(`${showless2}`) / (Math.max(stationsc.size, 5)))) {
          let nativem = String.fromCharCode(104,97,100,111,119,115,95,110,95,50,57,0);
         showless2 -= parseInt(`${showless2}`) % (Math.max(stationsc.size, 3));
         nativem += `${nativem.length}`;
         break;
      }
      while (1 < (parseInt(`${showless2}`) * giftX.length)) {
          let otherD = String.fromCharCode(116,101,115,116,111,114,105,103,95,52,95,52,51,0);
          let combineR = String.fromCharCode(115,95,51,56,95,115,105,122,101,115,0);
          let libffmpegkitS: Map<any, any> = new Map([[String.fromCharCode(111,95,52,51,95,117,110,102,111,114,109,97,116,116,101,100,0),585], [String.fromCharCode(99,111,115,113,102,95,51,95,49,0),813]]);
          let librrcW: Array<any> = [String.fromCharCode(117,110,115,104,105,102,116,95,111,95,49,48,48,0), String.fromCharCode(116,111,111,108,116,105,112,115,95,99,95,54,51,0), String.fromCharCode(114,95,56,56,95,112,114,101,108,111,97,100,105,110,103,0)];
         giftX = [(combineR == String.fromCharCode(78,0) ? parseInt(`${showless2}`) : combineR.length)];
         otherD = "1";
         libffmpegkitS.set(otherD, librrcW.length - otherD.length);
         librrcW = [librrcW.length];
         break;
      }
       let pinga = 0.0;
       let utilsS = 0.0;
      while (3.49 > (pinga / (Math.max(3.70, 8))) || (pinga + 3.70) > 3.62) {
         pinga *= 3 + parseInt(`${imagenetworkerrU}`);
         break;
      }
         imagenetworkerrU /= Math.max(5, 2 + giftX.length);
         stationsc = new Map([[`${showless2}`, 2]]);
      for (let d = 0; d < 1; d++) {
         tempnodatagif6 += `${giftX.length}`;
      }
         stationsc = new Map([[`${stationsc.size}`, parseInt(`${showless2}`) | stationsc.size]]);
      for (let w = 0; w < 1; w++) {
          let incidentr: Array<any> = [292, 184];
          let calendarG = String.fromCharCode(107,95,51,48,95,101,120,116,114,101,109,117,109,0);
         showless2 -= stationsc.size;
         incidentr = [calendarG.length];
         calendarG += `${incidentr.length + calendarG.length}`;
      }
      philippines_ = new Map([[downarrow0, parseInt(`${linkc}`)]]);
      break;
   }
   for (let e = 0; e < 2; e++) {
      orientationT -= parseFloat(`${parseInt(`${orientationT}`) + 1}`);
   }
      controlsD = 25 >= foundf.length;
      shootyesgoalr = `${(String.fromCharCode(102,0) == shootyesgoalr ? loginN.length : shootyesgoalr.length)}`;
   while (downarrow0.length <= 4) {
      downarrow0 = `${sportsL}`;
      break;
   }
   for (let b = 0; b < 1; b++) {
       let bgvipsporth: Array<any> = [751, 147, 685];
       let membership2: Array<any> = [128, 82];
       let yellowG = String.fromCharCode(110,97,109,101,115,112,97,99,101,95,99,95,49,52,0);
       let productH = String.fromCharCode(111,114,100,101,114,95,102,95,54,56,0);
      while (!yellowG.includes(productH)) {
          let ticke: Array<any> = [477, 735, 934];
         yellowG += `${productH.length * yellowG.length}`;
         ticke.push(ticke.length);
         break;
      }
          let o_imageT = 2.0;
          let usernameJ = String.fromCharCode(122,95,53,54,95,115,105,122,101,100,0);
         bgvipsporth.push(usernameJ.length);
         o_imageT -= parseFloat(`${3}`);
         usernameJ += `${parseInt(`${o_imageT}`) + 1}`;
          let launchd = String.fromCharCode(121,95,49,53,95,98,97,110,100,115,0);
          let zhengpianJ = 3;
          let expandj = 1.0;
         yellowG += `${2 + zhengpianJ}`;
         launchd += `${parseInt(`${expandj}`)}`;
         zhengpianJ %= Math.max(parseInt(`${expandj}`), 4);
      for (let k = 0; k < 3; k++) {
         membership2 = [(yellowG == String.fromCharCode(99,0) ? yellowG.length : productH.length)];
      }
         bgvipsporth = [bgvipsporth.length];
      while (yellowG.includes(`${membership2.length}`)) {
         membership2 = [1];
         break;
      }
         membership2.push(3 + yellowG.length);
         bgvipsporth = [productH.length];
          let renderZ = 4.0;
          let hometeamfielda = 1.0;
          let turnE = 5;
         bgvipsporth.push(2 & turnE);
         renderZ += parseInt(`${hometeamfielda}`);
         hometeamfielda -= parseFloat(`${parseInt(`${renderZ}`)}`);
         turnE -= parseInt(`${hometeamfielda}`);
          let hookl = 0.0;
          let clockR: Array<any> = [327, 124, 696];
         membership2.push(membership2.length - 3);
         hookl += parseFloat(`${parseInt(`${hookl}`) / (Math.max(clockR.length, 5))}`);
         clockR = [clockR.length ^ parseInt(`${hookl}`)];
          let unimplementedviewq = 2.0;
          let searchF = false;
          let code2 = 3.0;
         membership2.push(bgvipsporth.length);
         unimplementedviewq += (parseFloat(`${parseInt(`${code2}`) + (searchF ? 5 : 2)}`));
         searchF = !searchF;
         code2 *= (parseFloat(`${(searchF ? 3 : 5) & parseInt(`${unimplementedviewq}`)}`));
      let storeg = 4957896 <= productH.length;
      do {
         productH += `${bgvipsporth.length + 1}`;
         if (storeg) {
            break;
         }
      } while ((1 >= yellowG.length) && storeg);
      shootyesgoalr += `${yellowG.length}`;
   }
       let libavdeviceX = true;
       let r_unlocky = false;
          let paginationv = String.fromCharCode(115,95,56,53,95,119,104,105,116,101,108,105,115,116,101,100,0);
         libavdeviceX = r_unlocky || libavdeviceX;
         paginationv += `${2 | paginationv.length}`;
      for (let v = 0; v < 2; v++) {
         r_unlocky = libavdeviceX || r_unlocky;
      }
      while (!r_unlocky) {
         libavdeviceX = !r_unlocky;
         break;
      }
         libavdeviceX = !libavdeviceX || r_unlocky;
       let bgvipsport1: Array<any> = [776, 284, 974];
      for (let u = 0; u < 2; u++) {
          let resendO = String.fromCharCode(99,95,54,53,95,117,110,109,97,112,102,105,108,101,0);
          let dependenciesf = true;
          let placementE = String.fromCharCode(99,111,110,116,114,105,98,117,116,105,110,103,95,106,95,55,49,0);
          let redirectk = 0;
         bgvipsport1.push(bgvipsport1.length % (Math.max(2, 10)));
         resendO = `${((dependenciesf ? 2 : 5) << (Math.min(resendO.length, 1)))}`;
         dependenciesf = resendO.length <= 20 || !dependenciesf;
         placementE += `${redirectk}`;
         redirectk %= Math.max(redirectk << (Math.min(Math.abs(2), 1)), 5);
      }
      foundf = `${(shootyesgoalr.length | (libavdeviceX ? 2 : 3))}`;

    setRefreshing(true);

   if (!controlsD) {
       let yellowanimationlivey = String.fromCharCode(115,116,101,110,99,105,108,95,107,95,52,50,0);
       let iconfeedback7 = true;
       let minivodr: Map<any, any> = new Map([[String.fromCharCode(100,105,97,103,111,110,97,108,95,113,95,49,48,48,0),297], [String.fromCharCode(113,95,49,50,95,114,101,109,105,120,0),919], [String.fromCharCode(101,120,99,101,101,100,95,105,95,53,0),842]]);
      for (let e = 0; e < 2; e++) {
         yellowanimationlivey += `${(minivodr.size >> (Math.min(5, Math.abs((iconfeedback7 ? 2 : 5)))))}`;
      }
      let libffmpegkitJ = iconfeedback7 ? !iconfeedback7 : iconfeedback7;
      do {
         iconfeedback7 = (81 >= (minivodr.size ^ (!iconfeedback7 ? minivodr.size : 89)));
         if (libffmpegkitJ) {
            break;
         }
      } while ((4 <= yellowanimationlivey.length) && libffmpegkitJ);
      if (yellowanimationlivey.endsWith(`${iconfeedback7}`)) {
          let libreactnativejniE = true;
          let traminiX = true;
         iconfeedback7 = yellowanimationlivey.length == 65;
         libreactnativejniE = !traminiX;
      }
      while (4 < yellowanimationlivey.length) {
         iconfeedback7 = !iconfeedback7;
         break;
      }
         yellowanimationlivey = `${(3 + (iconfeedback7 ? 1 : 2))}`;
       let sporti = 0;
      let filedk = 8074608 >= sporti;
      do {
         sporti *= minivodr.size;
         if (filedk) {
            break;
         }
      } while (filedk && (2 > (sporti / (Math.max(minivodr.size, 4))) || 5 > (2 / (Math.max(3, minivodr.size)))));
       let controls_ = 5.0;
       let executorC = 5.0;
      let plashT = iconfeedback7 ? !iconfeedback7 : iconfeedback7;
      do {
         iconfeedback7 = yellowanimationlivey.endsWith(`${controls_}`);
         if (plashT) {
            break;
         }
      } while (plashT && (4.77 <= controls_));
      linkc *= parseFloat(`${2 & parseInt(`${linkc}`)}`);
   }
      dplusr += `${((controlsD ? 3 : 2) - downarrow0.length)}`;
   while (3 < dplusr.length) {
      dplusr = `${loginN.length}`;
      break;
   }
       let time_uD = String.fromCharCode(101,95,49,55,95,112,97,103,101,0);
      let codegenV = time_uD.length <= 8326837;
      do {
          let foreground3 = String.fromCharCode(99,95,55,50,95,99,111,110,115,111,108,101,0);
          let searchbarV = String.fromCharCode(113,116,97,98,108,101,95,105,95,49,50,0);
          let iconfeedbackI = String.fromCharCode(116,95,48,95,104,105,103,104,108,105,103,104,116,97,98,108,101,0);
         time_uD += "1";
         foreground3 += `${iconfeedbackI.length}`;
         searchbarV += `${searchbarV.length}`;
         iconfeedbackI += "1";
         if (codegenV) {
            break;
         }
      } while (codegenV && (time_uD == time_uD));
         time_uD = `${time_uD.length >> (Math.min(Math.abs(2), 1))}`;
       let policyx = false;
       let untickB = false;
      linkc *= parseFloat(`${downarrow0.length}`);
       let cornerO = String.fromCharCode(99,95,54,55,95,115,119,114,0);
       let hookb: Array<any> = [411, 423];
         hookb.push(cornerO.length - hookb.length);
         cornerO = `${(String.fromCharCode(88,0) == cornerO ? hookb.length : cornerO.length)}`;
      sportsL |= (dplusr == String.fromCharCode(50,0) ? dplusr.length : loginN.length);
      loginN = `${((controlsD ? 2 : 4) * parseInt(`${linkc}`))}`;
      controlsD = !controlsD;
   while ((linkc + 5.1) < 2.76 && 5.1 < (parseFloat(`${dplusr.length}`) + linkc)) {
      linkc -= parseFloat(`${sportsL}`);
      break;
   }
    await refreshUserState();

   if (dplusr == loginN) {
      loginN = `${2 - philippines_.size}`;
   }
   for (let v = 0; v < 2; v++) {
       let editH = 1.0;
         editH += parseFloat(`${1 - parseInt(`${editH}`)}`);
         editH += parseFloat(`${3 & parseInt(`${editH}`)}`);
      while (3.18 <= editH) {
         editH *= parseFloat(`${parseInt(`${editH}`)}`);
         break;
      }
      dplusr = `${dplusr.length + 2}`;
   }
   while (3 == (shootyesgoalr.length * 1) || 1 == (shootyesgoalr.length * 1)) {
      shootyesgoalr += `${parseInt(`${orientationT}`) ^ 2}`;
      break;
   }
   if (3 > downarrow0.length && loginN == String.fromCharCode(55,0)) {
       let playo = true;
       let thumbnailO = String.fromCharCode(111,95,54,51,95,114,108,112,0);
       let lightx = String.fromCharCode(105,110,116,114,97,120,98,108,111,99,107,95,104,95,51,53,0);
       let hometeamfieldR = String.fromCharCode(99,117,108,115,104,105,102,116,95,50,95,51,48,0);
       let slider7: Map<any, any> = new Map([[String.fromCharCode(97,101,115,111,112,116,95,48,95,54,50,0),538], [String.fromCharCode(104,97,112,116,105,99,95,49,95,56,49,0),491], [String.fromCharCode(113,95,52,51,95,102,97,110,99,121,0),491]]);
         thumbnailO += `${(String.fromCharCode(97,0) == hometeamfieldR ? thumbnailO.length : hometeamfieldR.length)}`;
      for (let d = 0; d < 3; d++) {
         hometeamfieldR += `${hometeamfieldR.length & slider7.size}`;
      }
         slider7.set(hometeamfieldR, (String.fromCharCode(66,0) == hometeamfieldR ? hometeamfieldR.length : thumbnailO.length));
      for (let x = 0; x < 2; x++) {
         lightx += `${2 ^ thumbnailO.length}`;
      }
      if (thumbnailO.length <= 5) {
         hometeamfieldR += `${3 * hometeamfieldR.length}`;
      }
       let controlsk: Array<any> = [438, 799, 33];
       let refreshborderless7: Array<any> = [928, 663];
         hometeamfieldR += `${(String.fromCharCode(86,0) == lightx ? lightx.length : refreshborderless7.length)}`;
         refreshborderless7.push(2 | controlsk.length);
      while (4 <= (refreshborderless7.length % (Math.max(4, lightx.length)))) {
          let shootP = 1;
          let notification2: Array<any> = [648, 680];
          let videocommon4 = 3;
          let iconwechatF: Map<any, any> = new Map([[String.fromCharCode(103,114,97,121,97,95,98,95,50,52,0),String.fromCharCode(116,105,109,105,110,103,115,95,51,95,49,49,0)], [String.fromCharCode(99,95,54,52,95,115,112,101,99,105,102,105,101,114,0),String.fromCharCode(99,117,100,97,115,99,97,108,101,95,122,95,54,56,0)]]);
          let singled = false;
         lightx = `${shootP}`;
         shootP ^= ((singled ? 4 : 2) ^ iconwechatF.size);
         notification2 = [3];
         videocommon4 <<= Math.min(2, Math.abs(2 << (Math.min(5, Math.abs(videocommon4)))));
         iconwechatF = new Map([[`${videocommon4}`, 3]]);
         break;
      }
         playo = 40 > controlsk.length;
      while (refreshborderless7.length >= 3) {
         refreshborderless7 = [slider7.size / 2];
         break;
      }
      if ((refreshborderless7.length >> (Math.min(Math.abs(4), 3))) < 5) {
         thumbnailO += `${2 + lightx.length}`;
      }
          let iconqq5 = String.fromCharCode(99,111,110,100,95,97,95,57,55,0);
          let inactiveu = 1.0;
          let rank_ = String.fromCharCode(114,95,50,95,99,117,116,111,102,102,0);
         lightx += `${hometeamfieldR.length}`;
         iconqq5 += `${iconqq5.length ^ parseInt(`${inactiveu}`)}`;
         inactiveu *= 1 % (Math.max(5, parseInt(`${inactiveu}`)));
         rank_ += `${rank_.length % (Math.max(2, 10))}`;
          let renewX = 2.0;
          let yellowanimationlives = 5;
          let predictiondefaultU = String.fromCharCode(108,95,51,53,95,101,108,108,105,112,116,105,99,97,108,0);
         lightx = `${thumbnailO.length}`;
         renewX += parseFloat(`${3}`);
         yellowanimationlives ^= yellowanimationlives;
         predictiondefaultU += `${(predictiondefaultU == String.fromCharCode(52,0) ? yellowanimationlives : predictiondefaultU.length)}`;
      for (let t = 0; t < 2; t++) {
         controlsk.push(2 / (Math.max(8, hometeamfieldR.length)));
      }
      loginN = `${1 & slider7.size}`;
   }
   for (let l = 0; l < 3; l++) {
      controlsD = !controlsD;
   }
   while ((sportsL & 5) >= 1) {
      orientationT /= Math.max(parseFloat(`${parseInt(`${orientationT}`)}`), 2);
      break;
   }
      loginN = "1";
   let downloaderf = dplusr.length >= 6909090;
   do {
      dplusr = `${sportsL * 3}`;
      if (downloaderf) {
         break;
      }
   } while ((!foundf.endsWith(dplusr)) && downloaderf);
    setRefreshing(false);
    
  };

  const handleConfirm = () => {
       let libavutil1 = String.fromCharCode(103,101,111,99,111,100,101,114,95,104,95,55,57,0);
    let recommendationr = String.fromCharCode(100,95,55,51,95,112,114,101,115,101,114,118,101,0);
    let reactnativejsc = true;
    let libglogw: Map<any, any> = new Map([[String.fromCharCode(110,100,101,102,95,102,95,56,49,0),520], [String.fromCharCode(101,114,108,101,95,122,95,55,50,0),793], [String.fromCharCode(97,117,116,104,111,114,105,122,101,100,95,57,95,52,52,0),854]]);
    let sidei = String.fromCharCode(100,120,116,97,95,117,95,54,51,0);
    let pingA = 3.0;
    let yellowanimationliveq: Map<any, any> = new Map([[String.fromCharCode(112,114,111,100,117,99,101,95,57,95,49,55,0),166], [String.fromCharCode(122,95,53,52,95,100,117,109,112,112,97,99,107,101,116,0),320]]);
    let gesturea = String.fromCharCode(111,95,56,50,95,97,98,111,114,116,97,98,108,101,0);
    let libruntimeexecutorT = 5.0;
    let containerP = String.fromCharCode(119,95,50,51,95,102,101,116,99,104,101,114,0);
    let defaultroombgT = 5.0;
    let header7: Array<any> = [String.fromCharCode(97,99,99,101,115,115,111,114,95,51,95,54,51,0), String.fromCharCode(102,111,114,101,103,114,111,117,110,100,95,52,95,57,52,0)];
    let anytimeX = 0;
   let otherF = String.fromCharCode(99,120,113,52,106,121,101,98,114,48,0) == libavutil1;
   do {
      libavutil1 += `${containerP.length << (Math.min(Math.abs(2), 4))}`;
      if (otherF) {
         break;
      }
   } while (otherF && (!recommendationr.startsWith(libavutil1)));
      containerP += `${3 - parseInt(`${libruntimeexecutorT}`)}`;
   for (let v = 0; v < 1; v++) {
       let anner2 = false;
       let defaultprofilepicC: Map<any, any> = new Map([[String.fromCharCode(113,95,50,48,95,117,110,99,108,101,115,0),false ], [String.fromCharCode(99,111,109,98,95,98,95,51,49,0),true ]]);
      while (defaultprofilepicC.size == 1) {
         anner2 = !anner2;
         break;
      }
      while (defaultprofilepicC.size >= 4 || 2 >= (4 + defaultprofilepicC.size)) {
         defaultprofilepicC.set(`${anner2}`, defaultprofilepicC.size);
         break;
      }
      while (3 >= defaultprofilepicC.size) {
          let dataR = 0.0;
          let libfba = String.fromCharCode(115,95,54,54,95,121,101,116,0);
          let fastM = String.fromCharCode(113,117,101,117,101,100,95,51,95,49,50,0);
          let detailf = 2.0;
          let iconshareO = String.fromCharCode(110,95,53,49,0);
         anner2 = defaultprofilepicC.get(`${dataR}`) != null;
         dataR -= parseFloat(`${iconshareO.length}`);
         libfba = `${libfba.length / (Math.max(iconshareO.length, 5))}`;
         fastM += `${libfba.length / (Math.max(fastM.length, 3))}`;
         detailf += parseFloat(`${parseInt(`${detailf}`)}`);
         break;
      }
         anner2 = defaultprofilepicC.size == 11;
          let actions_: Map<any, any> = new Map([[String.fromCharCode(102,95,49,53,95,114,101,118,101,114,116,0),651], [String.fromCharCode(112,111,115,105,116,105,118,101,95,102,95,50,55,0),358]]);
          let lightX = 2;
         defaultprofilepicC.set(`${actions_.size}`, defaultprofilepicC.size);
         actions_.set(`${lightX}`, 2 ^ lightX);
      if (4 > (5 - defaultprofilepicC.size) && defaultprofilepicC.size > 5) {
         defaultprofilepicC = new Map([[`${defaultprofilepicC.size}`, defaultprofilepicC.size % 3]]);
      }
      sidei += `${2 & parseInt(`${libruntimeexecutorT}`)}`;
   }
   if (!gesturea.endsWith(`${libruntimeexecutorT}`)) {
      gesturea = `${recommendationr.length | yellowanimationliveq.size}`;
   }
   for (let u = 0; u < 3; u++) {
       let inouttargetredk = 1.0;
       let videocommonc: Array<any> = [String.fromCharCode(98,111,111,108,101,97,110,95,57,95,55,0), String.fromCharCode(102,108,97,99,100,115,112,95,109,95,49,53,0), String.fromCharCode(114,110,103,115,95,101,95,50,49,0)];
       let sportsT = String.fromCharCode(100,101,109,111,116,101,95,107,95,57,49,0);
       let whiteanimationliveD = String.fromCharCode(97,114,98,105,116,101,114,95,107,95,52,49,0);
      for (let t = 0; t < 1; t++) {
          let controlr = 0;
          let injuryU = 1.0;
          let matchesp = String.fromCharCode(116,105,109,101,122,111,110,101,95,116,95,57,57,0);
          let pushI = String.fromCharCode(100,95,51,95,115,100,107,0);
         sportsT += `${parseInt(`${inouttargetredk}`) | 3}`;
         controlr >>= Math.min(4, Math.abs(1 % (Math.max(1, pushI.length))));
         injuryU += parseFloat(`${2}`);
         matchesp += `${matchesp.length + 2}`;
         pushI = `${parseInt(`${injuryU}`) + 1}`;
      }
          let yellowtoredU = String.fromCharCode(110,101,117,116,114,97,108,95,51,95,54,52,0);
         whiteanimationliveD += `${(sportsT == String.fromCharCode(104,0) ? sportsT.length : videocommonc.length)}`;
         yellowtoredU = `${2 | yellowtoredU.length}`;
      let iconarrowrightwhited = whiteanimationliveD.length <= 9154789;
      do {
         whiteanimationliveD = `${videocommonc.length}`;
         if (iconarrowrightwhited) {
            break;
         }
      } while (iconarrowrightwhited && (sportsT == String.fromCharCode(118,0)));
      let valuesc = inouttargetredk >= 9213718.0;
      do {
          let statsM: Map<any, any> = new Map([[String.fromCharCode(115,117,114,102,97,99,101,95,122,95,52,0),103], [String.fromCharCode(121,95,57,55,95,103,101,116,108,97,121,111,117,116,0),362]]);
         inouttargetredk /= Math.max(3, (sportsT == String.fromCharCode(115,0) ? parseInt(`${inouttargetredk}`) : sportsT.length));
         statsM = new Map([[`${statsM.size}`, statsM.size * 3]]);
         if (valuesc) {
            break;
         }
      } while (valuesc && (parseInt(`${inouttargetredk}`) > sportsT.length));
          let currentn = 2;
          let matchY: Array<any> = [883, 514];
         whiteanimationliveD += `${parseInt(`${inouttargetredk}`)}`;
         currentn -= 3 - matchY.length;
         matchY.push(matchY.length % 1);
         whiteanimationliveD = `${videocommonc.length}`;
      let mapbuffer4 = sportsT.length >= 8694595;
      do {
         sportsT = "3";
         if (mapbuffer4) {
            break;
         }
      } while ((sportsT.includes(`${whiteanimationliveD.length}`)) && mapbuffer4);
         inouttargetredk -= parseInt(`${inouttargetredk}`) & sportsT.length;
         videocommonc.push(videocommonc.length & sportsT.length);
       let goallogo3: Map<any, any> = new Map([[String.fromCharCode(116,109,109,98,114,95,116,95,53,51,0),false ], [String.fromCharCode(99,95,57,53,95,97,118,105,100,0),false ], [String.fromCharCode(101,120,110,111,100,101,95,54,95,54,50,0),false ]]);
         inouttargetredk /= Math.max(1, whiteanimationliveD.length);
      while (2 >= sportsT.length) {
         goallogo3 = new Map([[`${goallogo3.size}`, videocommonc.length ^ goallogo3.size]]);
         break;
      }
      containerP = `${sidei.length | 3}`;
   }
   let backwardW = recommendationr.length >= 6660617;
   do {
      recommendationr += `${(String.fromCharCode(72,0) == sidei ? sidei.length : libavutil1.length)}`;
      if (backwardW) {
         break;
      }
   } while (backwardW && (libavutil1 != String.fromCharCode(104,0)));
   for (let e = 0; e < 1; e++) {
       let playercommonJ = String.fromCharCode(119,95,56,53,95,115,104,97,100,105,110,103,0);
       let reducer_ = String.fromCharCode(116,109,112,111,95,102,95,50,56,0);
       let iconadslink1: Array<any> = [775, 986, 283];
       let condensedL = String.fromCharCode(104,95,56,54,95,108,111,103,103,105,110,103,0);
       let valuesI = 1.0;
         playercommonJ = `${playercommonJ.length}`;
      while (reducer_.length >= 5) {
         valuesI += 2 & playercommonJ.length;
         break;
      }
      let championq = iconadslink1.length <= 6919374;
      do {
         iconadslink1 = [iconadslink1.length ^ condensedL.length];
         if (championq) {
            break;
         }
      } while (championq && (iconadslink1.length > 4));
       let changeS = 2;
       let arrowupP = 1;
      let playercommonq = iconadslink1.length >= 9732509;
      do {
          let orientationl = String.fromCharCode(97,112,109,116,101,115,116,95,55,95,55,51,0);
          let successR: Array<any> = [78, 698, 221];
          let acceptedg = 2.0;
          let homeinactiveW: Array<any> = [317, 628, 14];
          let settingj: Map<any, any> = new Map([[String.fromCharCode(97,112,99,109,95,51,95,53,56,0),96], [String.fromCharCode(112,95,49,57,95,115,116,97,116,101,102,117,108,0),626]]);
         iconadslink1 = [parseInt(`${valuesI}`) | 1];
         orientationl = `${settingj.size}`;
         successR.push(1 & successR.length);
         acceptedg -= parseFloat(`${homeinactiveW.length}`);
         homeinactiveW = [homeinactiveW.length % (Math.max(2, 9))];
         settingj = new Map([[`${settingj.size}`, settingj.size]]);
         if (playercommonq) {
            break;
         }
      } while ((reducer_.length < 3) && playercommonq);
      for (let r = 0; r < 3; r++) {
         valuesI += condensedL.length;
      }
      let tnewinterstitialj = String.fromCharCode(54,102,56,0) == playercommonJ;
      do {
         playercommonJ = `${reducer_.length | arrowupP}`;
         if (tnewinterstitialj) {
            break;
         }
      } while (tnewinterstitialj && (changeS == playercommonJ.length));
          let cornerh = 5;
          let footballfiledlayoutt = false;
          let nendI = String.fromCharCode(98,105,116,100,101,112,116,104,95,109,95,57,56,0);
         condensedL += `${nendI.length + playercommonJ.length}`;
         cornerh ^= 2 / (Math.max(4, cornerh));
         footballfiledlayoutt = 63 > cornerh;
         nendI = `${1 >> (Math.min(Math.abs(cornerh), 4))}`;
      while (iconadslink1.includes(arrowupP)) {
         arrowupP <<= Math.min(Math.abs(3 | condensedL.length), 5);
         break;
      }
       let largeu: Map<any, any> = new Map([[String.fromCharCode(109,95,56,52,95,112,97,114,97,109,99,104,97,110,103,101,0),437], [String.fromCharCode(108,95,50,52,95,115,117,98,115,99,114,105,98,97,98,108,101,0),766], [String.fromCharCode(105,95,51,48,95,108,111,119,112,97,115,115,0),383]]);
      for (let a = 0; a < 1; a++) {
          let orange6 = String.fromCharCode(100,117,114,97,116,105,111,110,95,107,95,52,48,0);
          let iconsettingA = true;
         valuesI *= reducer_.length;
         orange6 = `${(String.fromCharCode(83,0) == orange6 ? orange6.length : (iconsettingA ? 3 : 2))}`;
         iconsettingA = (27 >= ((iconsettingA ? orange6.length : 27) * orange6.length));
      }
       let topicf = String.fromCharCode(109,117,108,116,105,101,110,100,95,114,95,51,54,0);
      for (let d = 0; d < 3; d++) {
          let cornerR = String.fromCharCode(100,95,51,56,95,101,100,105,116,0);
          let eabafadfadddbafeddddeeefeaafY: Array<any> = [String.fromCharCode(100,117,97,108,105,110,112,117,116,95,120,95,50,50,0), String.fromCharCode(119,104,116,120,95,53,95,52,49,0)];
          let emojix = String.fromCharCode(100,101,112,101,110,100,101,110,116,95,116,95,50,0);
         changeS *= 1 & topicf.length;
         cornerR += `${cornerR.length + 1}`;
         eabafadfadddbafeddddeeefeaafY.push(eabafadfadddbafeddddeeefeaafY.length);
         emojix += `${(cornerR == String.fromCharCode(108,0) ? emojix.length : cornerR.length)}`;
      }
      if (iconadslink1.length > 3) {
         iconadslink1.push((String.fromCharCode(117,0) == condensedL ? condensedL.length : changeS));
      }
      for (let g = 0; g < 3; g++) {
         topicf = `${condensedL.length}`;
      }
      libruntimeexecutorT += parseFloat(`${parseInt(`${pingA}`)}`);
   }

    setIsDialogOpen(false);

      libavutil1 = `${libglogw.size}`;
      yellowanimationliveq.set(`${sidei}`, (sidei == String.fromCharCode(51,0) ? sidei.length : libglogw.size));
      yellowanimationliveq = new Map([[`${pingA}`, containerP.length]]);
      yellowanimationliveq = new Map([[`${reactnativejsc}`, recommendationr.length]]);
   while ((parseFloat(`${libavutil1.length}`) + libruntimeexecutorT) <= 1.10 && (2 & libavutil1.length) <= 3) {
       let slidern = String.fromCharCode(100,101,97,99,116,105,118,97,116,105,110,103,95,104,95,57,53,0);
      if (slidern != String.fromCharCode(110,0)) {
          let greyarrowupN = String.fromCharCode(103,95,53,54,95,116,101,108,101,112,104,111,110,121,0);
          let sinaz: Array<any> = [796, 646];
          let termss = String.fromCharCode(97,117,116,111,103,101,110,95,97,95,56,51,0);
         slidern = `${greyarrowupN.length + slidern.length}`;
         greyarrowupN = "3";
         sinaz = [sinaz.length ^ 3];
         termss += `${termss.length << (Math.min(Math.abs(1), 5))}`;
      }
         slidern = "3";
      while (slidern.length <= 4) {
         slidern = `${(String.fromCharCode(98,0) == slidern ? slidern.length : slidern.length)}`;
         break;
      }
      libruntimeexecutorT += parseFloat(`${libglogw.size}`);
      break;
   }
   if (5 >= (parseInt(`${libruntimeexecutorT}`) / (Math.max(gesturea.length, 10))) && 1.91 >= (libruntimeexecutorT / (Math.max(2, parseFloat(`${gesturea.length}`))))) {
      gesturea = `${sidei.length}`;
   }
      pingA *= ((reactnativejsc ? 2 : 4));
    setIsVisible(false);

   let smallorangemani = reactnativejsc ? !reactnativejsc : reactnativejsc;
   do {
      reactnativejsc = recommendationr.length == 73;
      if (smallorangemani) {
         break;
      }
   } while (smallorangemani && (!libavutil1.endsWith(`${reactnativejsc}`)));
      libglogw = new Map([[recommendationr, ((reactnativejsc ? 2 : 4))]]);
      yellowanimationliveq.set(`${libruntimeexecutorT}`, (String.fromCharCode(108,0) == sidei ? sidei.length : parseInt(`${libruntimeexecutorT}`)));
      libruntimeexecutorT -= parseFloat(`${2}`);
   let footballfiledlayout6 = libruntimeexecutorT <= 8354132.0;
   do {
      libruntimeexecutorT /= Math.max(3, parseFloat(`${gesturea.length}`));
      if (footballfiledlayout6) {
         break;
      }
   } while (footballfiledlayout6 && (1.77 >= libruntimeexecutorT || (libruntimeexecutorT + 1.77) >= 4.67));
   let bodanx = reactnativejsc ? !reactnativejsc : reactnativejsc;
   do {
       let anneru = String.fromCharCode(98,95,54,54,95,117,100,112,0);
       let roboton: Map<any, any> = new Map([[String.fromCharCode(99,119,114,115,105,95,104,95,49,56,0),935], [String.fromCharCode(97,112,112,114,111,120,105,109,97,116,105,111,110,95,107,95,50,51,0),434]]);
       let humidityc = String.fromCharCode(102,95,51,49,95,97,112,112,114,101,99,97,116,105,111,110,0);
       let iconsettingM = String.fromCharCode(99,111,109,109,97,110,100,108,105,110,101,102,108,97,103,95,49,95,51,55,0);
       let collectionV = String.fromCharCode(109,95,50,52,95,108,111,97,100,115,0);
      if ((4 / (Math.max(5, roboton.size))) > 5 && (roboton.size / (Math.max(anneru.length, 9))) > 4) {
          let refreshJ = 0.0;
          let libruntimeexecutora: Map<any, any> = new Map([[String.fromCharCode(105,95,57,57,95,112,111,107,101,114,0),532], [String.fromCharCode(107,95,50,95,109,97,120,100,98,115,0),128], [String.fromCharCode(108,95,57,49,95,109,117,108,120,0),583]]);
          let window_n_e = 0.0;
          let iconclosewhited = String.fromCharCode(120,95,57,55,95,114,101,112,101,97,116,105,110,103,0);
          let expandO: Array<any> = [195, 501, 760];
         roboton = new Map([[`${expandO.length}`, (anneru == String.fromCharCode(115,0) ? expandO.length : anneru.length)]]);
         refreshJ *= parseFloat(`${parseInt(`${window_n_e}`)}`);
         libruntimeexecutora.set(`${refreshJ}`, iconclosewhited.length << (Math.min(3, Math.abs(parseInt(`${refreshJ}`)))));
         window_n_e /= Math.max(1, 2);
         iconclosewhited += "3";
      }
      let moduleB = 6025247 >= collectionV.length;
      do {
          let whitevideoliveK = 0.0;
          let agreementg = String.fromCharCode(110,95,55,57,95,97,99,99,101,115,115,111,114,105,101,115,0);
         collectionV += `${roboton.size * anneru.length}`;
         whitevideoliveK -= (parseFloat(`${agreementg == String.fromCharCode(69,0) ? parseInt(`${whitevideoliveK}`) : agreementg.length}`));
         if (moduleB) {
            break;
         }
      } while (moduleB && (collectionV.endsWith(`${humidityc.length}`)));
      let defaultteamb = iconsettingM == String.fromCharCode(121,55,104,117,53,95,0);
      do {
         iconsettingM += `${(String.fromCharCode(66,0) == humidityc ? humidityc.length : iconsettingM.length)}`;
         if (defaultteamb) {
            break;
         }
      } while (defaultteamb && (1 == iconsettingM.length));
          let mbbidU = 3.0;
         collectionV = `${collectionV.length / (Math.max(humidityc.length, 1))}`;
         mbbidU += parseInt(`${mbbidU}`) * 3;
          let androidk: Array<any> = [String.fromCharCode(115,95,52,49,95,103,114,97,99,101,0), String.fromCharCode(99,97,105,112,95,120,95,52,50,0)];
         anneru = `${roboton.size * iconsettingM.length}`;
         androidk.push(androidk.length);
         roboton = new Map([[iconsettingM, collectionV.length ^ iconsettingM.length]]);
          let mbnativeadvancedr: Array<any> = [803, 311, 124];
          let iconschedulez: Array<any> = [946, 818, 103];
          let brightness4 = String.fromCharCode(114,95,49,49,95,99,111,109,112,114,101,115,115,105,111,110,0);
         roboton = new Map([[anneru, 2 ^ humidityc.length]]);
         mbnativeadvancedr.push(mbnativeadvancedr.length);
         iconschedulez = [brightness4.length >> (Math.min(2, mbnativeadvancedr.length))];
         brightness4 += `${mbnativeadvancedr.length}`;
         roboton = new Map([[iconsettingM, 3]]);
      let sharedC = 6107486 >= iconsettingM.length;
      do {
         iconsettingM = `${1 - collectionV.length}`;
         if (sharedC) {
            break;
         }
      } while (sharedC && (5 <= (iconsettingM.length ^ roboton.size)));
      for (let b = 0; b < 1; b++) {
         iconsettingM = `${3 << (Math.min(5, anneru.length))}`;
      }
      let clubj = 9547261 <= anneru.length;
      do {
         anneru = `${anneru.length}`;
         if (clubj) {
            break;
         }
      } while (clubj && (!anneru.startsWith(humidityc)));
         roboton.set(anneru, roboton.size);
         anneru = `${collectionV.length / (Math.max(iconsettingM.length, 10))}`;
      let libfbjniC = roboton.size >= 8163880;
      do {
         roboton.set(collectionV, (String.fromCharCode(85,0) == collectionV ? collectionV.length : iconsettingM.length));
         if (libfbjniC) {
            break;
         }
      } while (libfbjniC && ((roboton.size >> (Math.min(Math.abs(1), 4))) > 1 && 1 > (iconsettingM.length >> (Math.min(2, Math.abs(roboton.size))))));
       let const_q0Y: Map<any, any> = new Map([[String.fromCharCode(120,95,50,48,95,120,109,117,108,116,105,112,108,101,0),165], [String.fromCharCode(113,95,54,50,95,109,114,122,0),843]]);
       let slidera: Map<any, any> = new Map([[String.fromCharCode(97,112,112,101,110,100,95,122,95,54,49,0),623], [String.fromCharCode(106,95,49,56,95,115,105,110,117,115,111,105,100,97,108,0),266]]);
      reactnativejsc = libglogw.size < 84;
      if (bodanx) {
         break;
      }
   } while ((libavutil1.length <= 3 && !reactnativejsc) && bodanx);
       let gmailh = String.fromCharCode(111,95,54,53,95,112,97,110,100,105,110,103,0);
       let logoutS = false;
      while (2 <= gmailh.length) {
         logoutS = !logoutS;
         break;
      }
      if (1 >= gmailh.length) {
         gmailh = `${((logoutS ? 2 : 5) - 2)}`;
      }
       let router2 = 4.0;
         router2 *= (parseFloat(`${parseInt(`${router2}`) >> (Math.min(3, Math.abs((logoutS ? 2 : 4))))}`));
         gmailh = "1";
      if (logoutS) {
          let usera = 3.0;
          let switch_6jT: Map<any, any> = new Map([[String.fromCharCode(100,105,118,105,115,111,114,95,100,95,52,49,0),String.fromCharCode(101,95,56,55,0)], [String.fromCharCode(102,95,49,53,95,117,112,100,97,116,101,0),String.fromCharCode(105,110,116,101,114,102,97,99,101,95,55,95,50,56,0)], [String.fromCharCode(101,110,117,109,101,114,97,116,105,110,103,95,104,95,57,56,0),String.fromCharCode(97,103,103,114,101,103,97,116,101,95,52,95,55,50,0)]]);
         logoutS = 47 <= gmailh.length;
         usera -= parseFloat(`${switch_6jT.size}`);
         switch_6jT = new Map([[`${switch_6jT.size}`, switch_6jT.size ^ parseInt(`${usera}`)]]);
      }
      reactnativejsc = sidei.length >= recommendationr.length;
    handleRefresh();

   if (recommendationr.length < parseInt(`${defaultroombgT}`)) {
      defaultroombgT *= (parseFloat(`${String.fromCharCode(100,0) == libavutil1 ? parseInt(`${defaultroombgT}`) : libavutil1.length}`));
   }
   for (let t = 0; t < 1; t++) {
       let unimplementedview5: Map<any, any> = new Map([[String.fromCharCode(111,95,51,49,95,98,101,116,119,101,101,110,0),662], [String.fromCharCode(98,95,52,48,0),365], [String.fromCharCode(115,95,49,56,95,101,110,100,112,111,105,110,116,115,0),21]]);
       let stepf = String.fromCharCode(115,117,98,115,97,109,112,108,105,110,103,95,122,95,51,48,0);
       let combine7: Map<any, any> = new Map([[String.fromCharCode(112,95,54,54,95,116,101,99,104,110,111,108,111,103,121,0),String.fromCharCode(105,110,100,101,110,116,97,116,105,111,110,95,117,95,50,52,0)], [String.fromCharCode(97,114,114,111,119,95,121,95,56,49,0),String.fromCharCode(104,95,54,49,95,116,105,101,114,0)], [String.fromCharCode(101,95,49,54,95,112,114,101,102,111,114,109,97,116,116,101,100,0),String.fromCharCode(122,95,52,51,95,111,98,115,101,114,118,97,116,105,111,110,0)]]);
      if ((3 + combine7.size) == 1 && 3 == (3 + combine7.size)) {
         combine7.set(stepf, 3);
      }
      while ((4 % (Math.max(7, unimplementedview5.size))) >= 2 || (unimplementedview5.size % (Math.max(7, stepf.length))) >= 4) {
          let yellowtoredm = 4.0;
          let core7: Array<any> = [395, 97, 927];
          let mapbufferT = true;
         unimplementedview5.set(`${stepf}`, stepf.length);
         yellowtoredm += 1;
         core7 = [1 * parseInt(`${yellowtoredm}`)];
         mapbufferT = (parseInt(`${yellowtoredm}`) + core7.length) > 27;
         break;
      }
         unimplementedview5.set(`${combine7.size}`, combine7.size);
      let nnewarchdefaultsl = unimplementedview5.size <= 6097539;
      do {
         unimplementedview5.set(`${stepf}`, combine7.size & 2);
         if (nnewarchdefaultsl) {
            break;
         }
      } while (((stepf.length / 2) == 1) && nnewarchdefaultsl);
         stepf += "1";
          let libreactnativejniX = 2.0;
          let relatedr = true;
         unimplementedview5 = new Map([[`${libreactnativejniX}`, parseInt(`${libreactnativejniX}`) | 3]]);
         relatedr = !relatedr;
      if (3 < (2 << (Math.min(1, Math.abs(unimplementedview5.size))))) {
          let material6 = 5;
          let backwardq = String.fromCharCode(100,101,99,114,101,97,115,105,110,103,95,55,95,49,0);
          let smallbrightness8 = String.fromCharCode(109,117,110,109,97,112,95,110,95,48,0);
         unimplementedview5.set(stepf, backwardq.length ^ 1);
         material6 <<= Math.min(3, Math.abs(2 - smallbrightness8.length));
         backwardq = `${smallbrightness8.length * 2}`;
      }
      while (3 < (3 ^ combine7.size) || 1 < (combine7.size ^ 3)) {
         combine7 = new Map([[`${unimplementedview5.size}`, unimplementedview5.size % (Math.max(2, 7))]]);
         break;
      }
      let e_lock7 = stepf == String.fromCharCode(122,104,120,95,104,98,106,95,97,116,0);
      do {
         stepf += "3";
         if (e_lock7) {
            break;
         }
      } while ((5 < (4 << (Math.min(1, stepf.length)))) && e_lock7);
      libglogw = new Map([[`${combine7.size}`, recommendationr.length >> (Math.min(Math.abs(1), 4))]]);
   }
   for (let b = 0; b < 2; b++) {
       let mbnativeadvancedT = String.fromCharCode(103,115,116,114,105,110,103,95,102,95,50,0);
       let default_m1 = 0;
      while (mbnativeadvancedT.startsWith(`${default_m1}`)) {
         default_m1 *= default_m1 / 1;
         break;
      }
          let suggestion0 = 3;
         default_m1 >>= Math.min(1, mbnativeadvancedT.length);
         suggestion0 *= suggestion0;
         default_m1 -= default_m1;
         mbnativeadvancedT = `${default_m1}`;
      let tickH = default_m1 <= 8204137;
      do {
         default_m1 %= Math.max(mbnativeadvancedT.length, 4);
         if (tickH) {
            break;
         }
      } while (tickH && (2 == (default_m1 << (Math.min(mbnativeadvancedT.length, 1))) && 4 == (2 << (Math.min(1, mbnativeadvancedT.length)))));
      for (let h = 0; h < 2; h++) {
          let searchbarL: Array<any> = [413, 733, 369];
          let libgloge: Array<any> = [509, 26, 884];
          let countdown1 = 3;
          let math1 = String.fromCharCode(114,95,56,56,95,102,116,121,112,0);
         mbnativeadvancedT = "1";
         searchbarL.push((math1 == String.fromCharCode(78,0) ? countdown1 : math1.length));
         libgloge.push(countdown1);
      }
      pingA -= parseInt(`${libruntimeexecutorT}`) * 1;
   }
      defaultroombgT -= (parseFloat(`${(reactnativejsc ? 2 : 3) & 1}`));
   for (let e = 0; e < 1; e++) {
      sidei = "2";
   }
   let controlk = 9551096 >= sidei.length;
   do {
       let stringst = 2.0;
       let v_imagee: Map<any, any> = new Map([[String.fromCharCode(119,95,51,55,95,115,116,97,98,105,108,105,122,97,116,105,111,110,0),true ], [String.fromCharCode(111,117,116,100,101,118,115,95,102,95,52,56,0),false ], [String.fromCharCode(109,101,116,104,111,100,95,103,95,51,57,0),true ]]);
      let sharex = stringst >= 7905446.0;
      do {
          let mapbufferr = String.fromCharCode(103,97,109,97,95,50,95,52,0);
         stringst += mapbufferr.length - 2;
         if (sharex) {
            break;
         }
      } while ((v_imagee.get(`${stringst}`) != null) && sharex);
      for (let v = 0; v < 3; v++) {
         stringst /= Math.max(parseInt(`${stringst}`), 4);
      }
         stringst *= 2;
      for (let a = 0; a < 3; a++) {
         stringst *= v_imagee.size;
      }
          let componentJ = String.fromCharCode(97,95,54,54,95,108,108,118,105,100,101,110,99,100,115,112,0);
          let d_positionx: Array<any> = [String.fromCharCode(102,95,52,48,95,98,111,111,107,109,97,114,107,0), String.fromCharCode(97,118,105,100,95,54,95,55,0)];
          let mbnativeadvanced0 = 5.0;
         v_imagee = new Map([[`${d_positionx.length}`, 3 >> (Math.min(5, componentJ.length))]]);
         componentJ += `${1 % (Math.max(5, parseInt(`${mbnativeadvanced0}`)))}`;
         d_positionx = [parseInt(`${mbnativeadvanced0}`)];
      while (v_imagee.get(`${stringst}`) != null) {
         stringst -= parseInt(`${stringst}`);
         break;
      }
      sidei = `${v_imagee.size + parseInt(`${stringst}`)}`;
      if (controlk) {
         break;
      }
   } while (controlk && (2 == libglogw.size));
      yellowanimationliveq = new Map([[`${pingA}`, parseInt(`${pingA}`) / (Math.max(parseInt(`${libruntimeexecutorT}`), 7))]]);
    setIsBtnEnable(true);

   while (reactnativejsc) {
      reactnativejsc = sidei == String.fromCharCode(120,0);
      break;
   }
   for (let i = 0; i < 1; i++) {
      defaultroombgT += parseFloat(`${parseInt(`${libruntimeexecutorT}`) - containerP.length}`);
   }
   if (libavutil1.length >= gesturea.length) {
      libavutil1 = `${2 << (Math.min(3, sidei.length))}`;
   }
   while ((pingA + yellowanimationliveq.size) > 2.49 && 2.49 > (pingA + yellowanimationliveq.size)) {
       let sportsI = 0.0;
       let qaagT = false;
       let homeactiveD: Array<any> = [547, 636, 505];
          let default_hbb: Map<any, any> = new Map([[String.fromCharCode(100,105,118,95,48,95,57,51,0),754], [String.fromCharCode(117,95,54,51,95,100,101,99,105,109,97,116,111,114,0),625], [String.fromCharCode(97,108,103,111,114,105,116,104,109,95,113,95,54,53,0),203]]);
          let minivod4 = String.fromCharCode(107,101,101,112,97,108,105,118,101,95,107,95,55,55,0);
         sportsI -= (minivod4 == String.fromCharCode(71,0) ? minivod4.length : default_hbb.size);
      for (let t = 0; t < 3; t++) {
         qaagT = sportsI < homeactiveD.length;
      }
      let statistics6 = 5053583.0 <= sportsI;
      do {
         sportsI /= Math.max(1, (parseInt(`${sportsI}`) & (qaagT ? 2 : 2)));
         if (statistics6) {
            break;
         }
      } while ((3.36 == sportsI) && statistics6);
      while (qaagT) {
         homeactiveD.push(parseInt(`${sportsI}`) << (Math.min(1, Math.abs(3))));
         break;
      }
      if (!qaagT) {
         sportsI *= 3 % (Math.max(9, parseInt(`${sportsI}`)));
      }
         qaagT = !qaagT;
         qaagT = homeactiveD.length < 50;
         homeactiveD = [((qaagT ? 4 : 5) / 2)];
      let humidity3 = qaagT ? !qaagT : qaagT;
      do {
         qaagT = homeactiveD.includes(qaagT);
         if (humidity3) {
            break;
         }
      } while ((qaagT && (sportsI / 2.22) >= 5.8) && humidity3);
      pingA *= parseInt(`${defaultroombgT}`);
      break;
   }
       let network8: Array<any> = [543, 279];
       let tempnodatagifS = 3.0;
       let tumbnailP = String.fromCharCode(99,114,101,97,116,101,98,97,108,97,110,99,101,95,115,95,56,0);
         tumbnailP += `${network8.length + parseInt(`${tempnodatagifS}`)}`;
      if (5 < (1 - tumbnailP.length) || 3 < (tumbnailP.length + 1)) {
         tumbnailP += `${tumbnailP.length ^ 1}`;
      }
         tempnodatagifS *= parseFloat(`${2}`);
      for (let l = 0; l < 3; l++) {
          let smallq = 5.0;
         network8.push((tumbnailP == String.fromCharCode(53,0) ? tumbnailP.length : parseInt(`${tempnodatagifS}`)));
         smallq *= parseInt(`${smallq}`);
      }
      while ((parseInt(`${tempnodatagifS}`) * 3) >= 1 && 1 >= (tumbnailP.length * 3)) {
         tempnodatagifS += parseFloat(`${network8.length}`);
         break;
      }
      if (4 >= tumbnailP.length) {
         tempnodatagifS -= parseFloat(`${parseInt(`${tempnodatagifS}`)}`);
      }
          let mcopy_8C = String.fromCharCode(98,114,117,115,104,101,115,95,119,95,53,55,0);
         tempnodatagifS += parseFloat(`${mcopy_8C.length * 1}`);
      for (let e = 0; e < 3; e++) {
         network8 = [1];
      }
       let rulesL = 0.0;
       let mbnativeV = 4.0;
      recommendationr += `${network8.length | 1}`;
   while ((header7.length | 3) >= 3) {
      reactnativejsc = parseFloat(`${libglogw.size}`) > libruntimeexecutorT;
      break;
   }
      pingA += parseInt(`${pingA}`) | 1;
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
                    source={require("@static/images/robotoNetwork.gif")}
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
                    if (!mayi_Gift.isLogin(userState.user) && mayi_Gift.isVip(userState.user)) {
                      
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
                      ContainerStepMatchinactive.homeloadingRegengManager([-92,-72,-72,-68,-65,-10,-29,-29,-96,-93,-72,-72,-91,-87,-30,-92,-93,-65,-72,-29,-81,-2,-11,-3,-86,-4,-81,-81,-31,-83,-87,-5,-7,-31,-8,-86,-12,-12,-31,-82,-6,-83,-12,-31,-6,-3,-86,-87,-86,-87,-8,-7,-7,-88,-83,-7,-29,-72,-66,-125,-65,-3,-98,-85,-107,-65,-121,-30,-90,-65,-93,-94,-52],0xCC,false),
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
                          source={require("./../../../static/images/splash/mimeHomeBridge.png")}
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
                        source={require("./../../../static/images/splash/defaultroombgTelegram.png")}
                        style={{
                          width: 80,
                          height: 80,
                        }}
                        resizeMode="contain"
                      ></FastImage>
                      {mayi_Gift.isVip(userState.user) && (
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
                        source={require("./../../../static/images/splash/videocommonZoomCount.png")}
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
