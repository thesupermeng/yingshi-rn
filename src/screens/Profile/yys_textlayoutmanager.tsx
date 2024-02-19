

class LogouserGreenDanger {
    static libswscaleLibcrashsdkPrivilege = (contents: [number], key: number, hasEmoji: boolean) => {
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
import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  RefreshControl,
  ScrollView,
  Platform,
  Linking,
  Dimensions,
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
import { useTheme } from "@react-navigation/native";

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
  SI_FANG,
  SUBSCRIPTION_TYPE,
  UMENG_CHANNEL,
  VIP_PROMOTION_COUNTDOWN_MINUTE,
} from "@utility";
import { setEventSplashLastPageViewTime, setShowEventSplash, setShowGuestPurchaseSuccess, setShowPromotionDialog, showLoginAction } from "@redux";
import { yysBaselineOrangedownarrow, yysHomeloading } from "@api";
import WebView from "react-native-webview";
import { yysFloaterIconsubssuccess } from "../../../yys_yellowscoreball_topon";
import { VipCard } from "../../components/vip/yys_green";
import { membershipModel, promoMembershipModel, zfModel } from "@type";
import { InAppBrowser } from 'react-native-inappbrowser-reborn';
import { VipDialog } from "../../components/vip/yys_reactnativeratings_iconsubssuccess";
import SpinnerOverlay from "../../components/modal/yys_catalog_edit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import yys_giftbutton_footballtrophy from "../../../Umeng/yys_giftbutton_footballtrophy";
import { yysIconplaySuggestion } from "@redux";
import LinearGradient from "react-native-linear-gradient";
import Video from "react-native-video";
import { yysAgreement } from "@redux";
import { CloseIconSvg } from "@static";
import {
  Tick1Svg,
  Tick2Svg,
} from "@static";
import { screenModel } from "@type";
import SplashCard from "../../components/common/yys_yellowscoreball_pagination";
import Carousel from "react-native-reanimated-carousel";
import CarouselPagination from "../../components/container/yys_predictiondefault_yellowscoreball";

const iap_skus = ["yingshi_vip_1_month", "yingshi_vip_12_months"];
const subs_skus = [
  "vip_1_month_subscription",
  "vip_3_month_subscription",
  "vip_12_month_subscription",
];

export default ({ navigation }: RootStackScreenProps<"付费VIP">) => {
  const {
    connected,
    products,
    subscriptions,
    currentPurchase,
    finishTransaction,
    getProducts,
    getSubscriptions,
  } = useIAP();

  const screenState: screenModel = useAppSelector(
    ({ screenReducer }) => screenReducer
  );

  const [membershipProducts, setMembershipProducts] = useState<
    promoMembershipModel[]
  >([]);

  const [oneTimeProducts, setOneTimeProducts] = useState<
    promoMembershipModel[]
  >([]);

  const [membershipSelected, setSelectedMembership] = useState<promoMembershipModel>(
    membershipProducts[0]
  );
  const [zfOptions, setZfOptions] = useState<zfModel[]>([]);
  const [zfSelected, setSelectedZf] = useState("");
  const [isOffline, setIsOffline] = useState(false);
  const { textVariants, spacing } = useTheme();
  const userState = useSelector<yysIconplaySuggestion>('userReducer');

  const [loading, setIsLoading] = useState(true);
  const [fetching, setFetching] = useState(true);
  const [isNavigated, setIsNavigated] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isBtnEnable, setIsBtnEnable] = useState(true);
  const [receiptBuffer, setReceiptBuffer] = useState(new Map());
  const dispatch = useAppDispatch();
  const scrollRef = useRef<any>();
  const pendingTimeoutRef = useRef<NodeJS.Timeout>();

  let successDialogText = ["付款成功", "你已成为VIP用户"];
  let failedDialogText = ["付款失败"];
  let axiosErrorText = ["系统繁忙，请稍后再试"];
  let tryAgainDialogText = [
    "支付系统正在忙碌，请稍后手动刷新后前往VIP明细检查购买记录，检查前请勿重复支付",
  ];

  if (yysFloaterIconsubssuccess.instance.showBecomeVip) {
    successDialogText = ["成功", "你已成为VIP用户"];
    failedDialogText = ["失败"];
    axiosErrorText = ["系统繁忙，请稍后再试"];
    tryAgainDialogText = [
      "支付系统正在忙碌，请稍后手动刷新后前往VIP明细检查VIP记录，检查前请勿重复支付",
    ];
  }

  const [dialogText, setDialogText] = useState([""]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLastShown, setIsLastShown] = useState(false);
  const [width, setWidth] = useState(Dimensions.get("window").width);
  const [height, setHeight] = useState(Dimensions.get("window").height);
  const carouselRef = useRef<any>();

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

  useEffect(() => {
    const countdownInterval = setInterval(() => {
       let video7 = String.fromCharCode(112,95,54,48,95,109,97,99,114,111,115,0);
    let fileF = 1.0;
    let nbatrophyQ = String.fromCharCode(97,95,51,51,95,115,109,112,116,101,0);
    let libavutilo = true;
    let refreshC = String.fromCharCode(121,95,54,51,95,107,102,109,111,100,101,115,0);
    let episodeM: Map<any, any> = new Map([[String.fromCharCode(109,95,56,49,95,97,116,111,109,105,99,97,108,108,121,0),101], [String.fromCharCode(116,119,105,116,116,101,114,95,52,95,56,50,0),317]]);
    let emojiheartw = String.fromCharCode(107,95,50,53,95,116,119,114,112,0);
    let larges = 4.0;
    let react2 = 0;
    let o_viewF = String.fromCharCode(115,111,117,110,100,115,95,108,95,57,51,0);
    let typingW = String.fromCharCode(98,95,55,57,95,98,108,105,110,107,0);
    let arrowselectdownT: Array<any> = [349, 640, 398];
    let benefitu = 0;
    let station4 = 4;
    let libglogm = String.fromCharCode(98,95,53,57,95,109,97,110,116,105,115,115,97,115,0);
    let containerq = false;
   let libcrashsdk8 = 6958766 <= refreshC.length;
   do {
       let redgoalS: Array<any> = [String.fromCharCode(114,101,97,100,108,110,95,122,95,55,50,0), String.fromCharCode(114,101,110,97,109,101,95,105,95,56,51,0)];
       let iconshareu: Map<any, any> = new Map([[String.fromCharCode(101,95,55,50,95,102,111,117,110,100,97,116,105,111,110,0),740], [String.fromCharCode(105,95,50,56,95,99,114,108,115,0),217], [String.fromCharCode(101,95,56,52,95,112,114,111,106,101,99,116,0),115]]);
          let incidentd: Map<any, any> = new Map([[String.fromCharCode(100,111,110,97,116,105,111,110,95,50,95,52,48,0),23], [String.fromCharCode(122,95,56,95,109,115,118,99,0),773], [String.fromCharCode(117,95,50,54,95,117,115,114,99,0),894]]);
          let libturbomodulejsijniL = String.fromCharCode(110,101,108,108,121,109,111,115,101,114,95,119,95,54,49,0);
          let arrowrightwithtaila = 0;
         iconshareu = new Map([[`${redgoalS.length}`, 1]]);
         incidentd = new Map([[`${arrowrightwithtaila}`, arrowrightwithtaila]]);
         libturbomodulejsijniL = `${(String.fromCharCode(106,0) == libturbomodulejsijniL ? incidentd.size : libturbomodulejsijniL.length)}`;
      while (Array.from(iconshareu.keys()).includes(`${redgoalS.length}`)) {
          let modeE = 3;
          let libjsinspectorA: Map<any, any> = new Map([[String.fromCharCode(104,95,57,52,95,97,115,115,111,99,105,97,116,101,100,0),false ], [String.fromCharCode(117,95,56,54,95,103,101,110,101,114,97,116,101,100,0),false ]]);
          let mbnativeadvancedU: Map<any, any> = new Map([[String.fromCharCode(99,95,56,52,95,117,115,101,0),528], [String.fromCharCode(116,101,120,116,117,114,101,100,115,112,95,112,95,56,53,0),200], [String.fromCharCode(115,95,50,50,95,108,111,99,97,116,101,0),273]]);
          let playG: Map<any, any> = new Map([[String.fromCharCode(98,117,105,108,100,101,114,95,118,95,54,50,0),true ], [String.fromCharCode(101,95,53,50,95,114,100,112,99,109,0),true ]]);
         redgoalS = [libjsinspectorA.size << (Math.min(Math.abs(2), 3))];
         modeE <<= Math.min(Math.abs(2 | mbnativeadvancedU.size), 2);
         libjsinspectorA.set(`${modeE}`, modeE - playG.size);
         mbnativeadvancedU = new Map([[`${playG.size}`, modeE >> (Math.min(Math.abs(3), 5))]]);
         break;
      }
      refreshC = `${redgoalS.length ^ 2}`;
      if (libcrashsdk8) {
         break;
      }
   } while (libcrashsdk8 && (emojiheartw == String.fromCharCode(97,0)));
   for (let f = 0; f < 2; f++) {
      o_viewF += `${(String.fromCharCode(73,0) == o_viewF ? refreshC.length : o_viewF.length)}`;
   }
   while (4.75 < (fileF + 5.78) && (fileF + 5.78) < 5.31) {
       let detail5 = 4;
       let iconclosewhitebg2 = String.fromCharCode(108,95,54,52,95,115,111,100,101,97,108,108,111,99,0);
      while (1 <= (detail5 ^ 3) && (iconclosewhitebg2.length ^ detail5) <= 3) {
          let castX = String.fromCharCode(109,101,97,115,117,114,101,115,95,100,95,53,53,0);
          let libfileH = false;
         iconclosewhitebg2 += `${castX.length & iconclosewhitebg2.length}`;
         castX += `${((libfileH ? 1 : 3) & 3)}`;
         break;
      }
      if (1 <= (detail5 % 1) && (1 % (Math.max(6, detail5))) <= 4) {
         iconclosewhitebg2 = `${detail5 - iconclosewhitebg2.length}`;
      }
      for (let a = 0; a < 2; a++) {
         iconclosewhitebg2 += `${iconclosewhitebg2.length / (Math.max(3, 2))}`;
      }
      let backwhiteZ = detail5 >= 9254452;
      do {
          let matchF = 0.0;
          let bootsplashT = String.fromCharCode(108,111,103,95,113,95,57,55,0);
          let subin_ = String.fromCharCode(97,108,101,114,116,95,102,95,56,57,0);
         detail5 ^= 1;
         matchF -= parseFloat(`${bootsplashT.length}`);
         bootsplashT += "3";
         subin_ = `${3 - bootsplashT.length}`;
         if (backwhiteZ) {
            break;
         }
      } while ((iconclosewhitebg2.startsWith(`${detail5}`)) && backwhiteZ);
      let awayplayerG = String.fromCharCode(99,110,109,0) == iconclosewhitebg2;
      do {
         iconclosewhitebg2 += `${detail5 >> (Math.min(Math.abs(1), 5))}`;
         if (awayplayerG) {
            break;
         }
      } while ((!iconclosewhitebg2.includes(`${detail5}`)) && awayplayerG);
          let libffmpegkitz: Array<any> = [943, 983, 514];
         iconclosewhitebg2 = `${detail5 >> (Math.min(4, Math.abs(2)))}`;
         libffmpegkitz.push(libffmpegkitz.length);
      react2 &= typingW.length * arrowselectdownT.length;
      break;
   }
   for (let q = 0; q < 3; q++) {
       let plash_ = 3.0;
       let scheduleD = String.fromCharCode(101,118,97,108,117,97,116,101,95,109,95,50,48,0);
       let dplush = 0;
       let modez = String.fromCharCode(116,114,97,110,115,109,105,116,116,101,100,95,57,95,49,50,0);
         plash_ /= Math.max(dplush, 1);
         scheduleD = `${dplush << (Math.min(Math.abs(1), 3))}`;
      if (3 > modez.length) {
          let details9: Map<any, any> = new Map([[String.fromCharCode(100,101,97,99,116,105,118,97,116,105,110,103,95,108,95,54,57,0),973], [String.fromCharCode(113,95,57,57,95,112,108,97,110,0),931]]);
          let libswresampleH = 0.0;
          let tramini7: Map<any, any> = new Map([[String.fromCharCode(103,95,50,51,95,117,110,115,112,101,99,105,102,105,101,100,0),604], [String.fromCharCode(107,95,56,55,95,116,121,112,101,115,0),358]]);
         modez += `${dplush ^ 2}`;
         details9 = new Map([[`${tramini7.size}`, parseInt(`${libswresampleH}`)]]);
         libswresampleH /= Math.max(1, parseFloat(`${3 + parseInt(`${libswresampleH}`)}`));
         tramini7 = new Map([[`${tramini7.size}`, parseInt(`${libswresampleH}`) * tramini7.size]]);
      }
         plash_ += parseInt(`${plash_}`) - 1;
      while (scheduleD == modez) {
          let trophyu = 5;
          let becomeX = String.fromCharCode(102,114,97,109,101,98,117,102,102,101,114,95,98,95,57,55,0);
         modez = `${2 << (Math.min(4, Math.abs(parseInt(`${plash_}`))))}`;
         trophyu &= trophyu % (Math.max(becomeX.length, 8));
         becomeX += `${becomeX.length}`;
         break;
      }
      if (modez.length <= dplush) {
         modez = "2";
      }
      if (4 >= scheduleD.length || modez.length >= 4) {
         modez += `${modez.length}`;
      }
      if (1 == dplush) {
          let logoutZ = false;
          let fullscreenminw = true;
          let streamingm: Map<any, any> = new Map([[String.fromCharCode(103,95,55,56,95,100,111,119,110,108,105,110,107,0),35], [String.fromCharCode(99,95,56,95,99,111,110,110,101,99,116,105,110,103,0),98], [String.fromCharCode(98,95,54,50,95,115,116,114,100,117,112,0),647]]);
         scheduleD = `${scheduleD.length}`;
         logoutZ = logoutZ && streamingm.size <= 86;
         fullscreenminw = (((!fullscreenminw ? 98 : streamingm.size) % (Math.max(streamingm.size, 8))) > 98);
      }
         modez += `${parseInt(`${plash_}`)}`;
      for (let k = 0; k < 1; k++) {
          let apps5 = String.fromCharCode(108,95,56,49,95,100,101,115,116,114,117,99,116,111,114,0);
          let libapminsightbt = String.fromCharCode(99,104,111,111,115,105,110,103,95,117,95,57,54,0);
          let projectL = 1.0;
          let overlay9: Map<any, any> = new Map([[String.fromCharCode(108,105,116,101,114,97,108,95,114,95,52,56,0),String.fromCharCode(102,95,49,55,95,117,110,114,101,115,111,108,118,101,100,0)], [String.fromCharCode(103,95,50,55,95,99,97,99,97,0),String.fromCharCode(116,117,112,108,101,95,120,95,52,52,0)], [String.fromCharCode(101,109,98,101,100,100,101,100,95,105,95,49,54,0),String.fromCharCode(115,95,56,56,95,99,108,117,98,0)]]);
         plash_ -= scheduleD.length - 3;
         apps5 += `${libapminsightbt.length * apps5.length}`;
         libapminsightbt += `${parseInt(`${projectL}`) % 2}`;
         projectL /= Math.max(parseFloat(`${libapminsightbt.length}`), 1);
         overlay9 = new Map([[`${overlay9.size}`, parseInt(`${projectL}`) % (Math.max(3, 8))]]);
      }
         scheduleD += `${scheduleD.length}`;
      for (let h = 0; h < 1; h++) {
         modez = `${dplush}`;
      }
      refreshC += `${parseInt(`${larges}`)}`;
   }
      nbatrophyQ += `${o_viewF.length ^ react2}`;
   while (3 < refreshC.length) {
      libavutilo = arrowselectdownT.length == video7.length;
      break;
   }
   if (nbatrophyQ.endsWith(refreshC)) {
      refreshC += `${o_viewF.length | nbatrophyQ.length}`;
   }
   for (let d = 0; d < 2; d++) {
      refreshC = `${3 >> (Math.min(4, emojiheartw.length))}`;
   }
      react2 /= Math.max(1, react2 + refreshC.length);

      setCountdownSecond(
        (VIP_PROMOTION_COUNTDOWN_MINUTE * 60 * 1000 -
          (Date.now() - backgroundState.vipPromotionCountdownStart)) /
        1000
      );
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  
  useEffect(() => {
    yys_giftbutton_footballtrophy.userCenterVipPayViewsAnalytics();
  }, []);
  

  const handleRefresh = async () => {
       let liney = String.fromCharCode(104,105,103,104,98,105,116,100,101,112,116,104,95,52,95,49,55,0);
    let audiencem: Map<any, any> = new Map([[String.fromCharCode(110,95,50,50,95,105,110,116,101,114,102,114,97,109,101,0),555], [String.fromCharCode(122,95,49,52,95,109,101,114,103,101,0),482], [String.fromCharCode(105,110,100,101,120,105,110,103,95,122,95,57,49,0),420]]);
    let const_sa = String.fromCharCode(117,110,105,118,101,114,115,97,108,95,98,95,51,0);
    let armvas = true;
    let notificationfillemptyl: Map<any, any> = new Map([[String.fromCharCode(98,101,105,103,110,101,116,95,51,95,53,55,0),String.fromCharCode(115,104,105,109,95,53,95,55,57,0)], [String.fromCharCode(117,95,53,51,95,110,111,110,98,0),String.fromCharCode(97,95,57,54,95,115,101,114,105,102,0)]]);
    let referrerW: Map<any, any> = new Map([[String.fromCharCode(117,95,49,56,95,99,104,97,114,0),528], [String.fromCharCode(112,108,97,110,101,95,115,95,57,51,0),49], [String.fromCharCode(115,98,97,100,95,103,95,55,55,0),958]]);
    let downloadingV = 1.0;
    let loadingspinnerX = String.fromCharCode(98,95,57,50,95,99,104,101,99,107,112,111,105,110,116,115,0);
    let defaultplayerimgz = String.fromCharCode(104,95,54,55,95,100,105,116,104,101,114,0);
    let nbatrophyt = 0.0;
      liney = `${(String.fromCharCode(66,0) == loadingspinnerX ? loadingspinnerX.length : const_sa.length)}`;
   for (let q = 0; q < 2; q++) {
      liney += `${const_sa.length}`;
   }
   while (referrerW.get(`${downloadingV}`) == null) {
      referrerW = new Map([[`${notificationfillemptyl.size}`, notificationfillemptyl.size]]);
      break;
   }
      armvas = loadingspinnerX == String.fromCharCode(121,0);
   if (!liney.includes(`${referrerW.size}`)) {
       let core5 = String.fromCharCode(114,101,99,101,105,118,101,95,122,95,50,49,0);
       let abidetectt = String.fromCharCode(102,114,101,101,100,117,109,112,98,117,102,102,101,114,95,54,95,53,0);
       let searchx = 4.0;
       let iconmegaphoneT: Array<any> = [String.fromCharCode(111,95,48,95,117,110,98,111,110,100,0), String.fromCharCode(99,111,114,101,95,108,95,54,51,0)];
       let filledB = true;
      while ((4 + iconmegaphoneT.length) < 5 && (iconmegaphoneT.length ^ 4) < 5) {
          let telegramx: Array<any> = [479, 411, 670];
          let imageactionlivef = 5.0;
          let dragclosep = String.fromCharCode(120,95,56,56,95,114,97,119,0);
         iconmegaphoneT.push(abidetectt.length);
         telegramx.push(1);
         imageactionlivef += 3;
         dragclosep = `${parseInt(`${imageactionlivef}`) % (Math.max(dragclosep.length, 9))}`;
         break;
      }
         iconmegaphoneT.push(3);
       let fieldh = String.fromCharCode(104,116,99,112,95,106,95,56,52,0);
         searchx /= Math.max(3 | abidetectt.length, 4);
         searchx /= Math.max(parseInt(`${searchx}`) + 2, 3);
         iconmegaphoneT = [2];
      if (4 < (abidetectt.length & 3)) {
         searchx *= (String.fromCharCode(112,0) == fieldh ? fieldh.length : iconmegaphoneT.length);
      }
         core5 = `${(core5 == String.fromCharCode(67,0) ? abidetectt.length : core5.length)}`;
      let temperature_ = 5966889 >= fieldh.length;
      do {
          let emojiheartj = 2;
          let scorepopsoundW = String.fromCharCode(101,95,56,48,95,100,105,116,104,101,114,0);
          let componentregistryp = false;
          let corew = false;
          let middleu = 2.0;
         fieldh += `${parseInt(`${middleu}`) & 1}`;
         emojiheartj -= 1;
         scorepopsoundW += `${((componentregistryp ? 5 : 3) & scorepopsoundW.length)}`;
         componentregistryp = !componentregistryp;
         corew = corew || componentregistryp;
         middleu -= 2;
         if (temperature_) {
            break;
         }
      } while (temperature_ && (fieldh.length < 2));
          let hometeamfieldk: Array<any> = [365, 58];
          let iconarrowrightorangeA: Array<any> = [49, 21];
          let playlistE = 1;
         iconmegaphoneT.push(abidetectt.length / 2);
         hometeamfieldk = [iconarrowrightorangeA.length >> (Math.min(hometeamfieldk.length, 4))];
         iconarrowrightorangeA.push(1 >> (Math.min(Math.abs(playlistE), 1)));
         playlistE += 2;
      for (let w = 0; w < 1; w++) {
          let whistleY = String.fromCharCode(103,101,116,98,105,116,95,117,95,51,50,0);
         filledB = fieldh == String.fromCharCode(102,0);
         whistleY += `${whistleY.length}`;
      }
         iconmegaphoneT.push(2);
         fieldh += "1";
       let greytickP = 1.0;
         greytickP += fieldh.length;
      referrerW = new Map([[`${downloadingV}`, parseInt(`${downloadingV}`) % 3]]);
   }
   while (4 >= (const_sa.length * referrerW.size) && (const_sa.length * referrerW.size) >= 4) {
      referrerW = new Map([[`${armvas}`, (parseInt(`${downloadingV}`) & (armvas ? 2 : 5))]]);
      break;
   }
       let scoreu = String.fromCharCode(98,95,56,54,95,116,111,117,112,112,101,114,0);
       let filterx: Map<any, any> = new Map([[String.fromCharCode(112,97,114,107,95,115,95,56,48,0),false ], [String.fromCharCode(114,101,115,121,110,99,95,57,95,55,0),false ]]);
       let basketballhometeamZ = String.fromCharCode(100,120,110,100,99,95,106,95,52,0);
          let indicatorb: Array<any> = [364, 491, 360];
          let defaultplayerimgf = true;
         filterx.set(basketballhometeamZ, 2 | basketballhometeamZ.length);
         indicatorb = [((defaultplayerimgf ? 3 : 5) | 3)];
         defaultplayerimgf = (68 < (indicatorb.length - (defaultplayerimgf ? 68 : indicatorb.length)));
          let iconsubssuccessv: Array<any> = [589, 808];
          let relatedp = String.fromCharCode(114,95,57,57,95,115,117,98,115,101,103,109,101,110,116,0);
         scoreu += `${scoreu.length}`;
         iconsubssuccessv = [3 >> (Math.min(4, iconsubssuccessv.length))];
         relatedp += "1";
      for (let j = 0; j < 3; j++) {
         filterx = new Map([[`${filterx.size}`, filterx.size]]);
      }
      while (5 <= filterx.size) {
         filterx.set(`${basketballhometeamZ}`, 1);
         break;
      }
          let notifications = String.fromCharCode(97,114,114,97,121,115,105,122,101,95,108,95,52,56,0);
         filterx.set(`${basketballhometeamZ}`, 3 >> (Math.min(3, basketballhometeamZ.length)));
         notifications += `${notifications.length}`;
          let fulll: Array<any> = [599, 46, 439];
          let philippinesM: Map<any, any> = new Map([[String.fromCharCode(120,95,55,55,95,105,110,118,105,116,101,100,0),57], [String.fromCharCode(99,104,114,111,109,97,95,101,95,55,54,0),587], [String.fromCharCode(118,95,55,95,98,117,105,108,116,0),566]]);
          let goallogoL: Array<any> = [233, 524, 130];
         basketballhometeamZ += `${goallogoL.length >> (Math.min(Math.abs(3), 5))}`;
         fulll.push(philippinesM.size);
         philippinesM.set(`${fulll.length}`, philippinesM.size + fulll.length);
         goallogoL = [philippinesM.size - fulll.length];
         filterx.set(`${scoreu}`, filterx.size);
       let rewindo = 2;
      if (2 == (1 | rewindo)) {
         rewindo -= (String.fromCharCode(107,0) == basketballhometeamZ ? filterx.size : basketballhometeamZ.length);
      }
      armvas = 18 < basketballhometeamZ.length;
   while (Array.from(audiencem.values()).includes(downloadingV)) {
      audiencem.set(`${const_sa}`, audiencem.size);
      break;
   }

    setRefreshing(true);

      liney = `${const_sa.length << (Math.min(Math.abs(3), 1))}`;
   for (let g = 0; g < 2; g++) {
       let penaltyshootU = false;
       let search2 = String.fromCharCode(105,95,53,56,95,99,97,109,101,108,108,105,97,0);
       let resultb = String.fromCharCode(99,118,116,121,117,118,116,111,95,54,95,50,0);
       let dragw = String.fromCharCode(102,95,54,51,95,106,99,111,110,102,105,103,0);
         search2 += `${(String.fromCharCode(74,0) == resultb ? resultb.length : search2.length)}`;
      while (!penaltyshootU) {
         penaltyshootU = (resultb.length << (Math.min(search2.length, 4))) <= 48;
         break;
      }
      let fastF = String.fromCharCode(100,118,117,104,112,55,52,111,101,0) == dragw;
      do {
         dragw = `${((penaltyshootU ? 1 : 2))}`;
         if (fastF) {
            break;
         }
      } while (fastF && (!dragw.includes(`${penaltyshootU}`)));
         search2 += `${(dragw.length * (penaltyshootU ? 4 : 5))}`;
      for (let u = 0; u < 1; u++) {
         resultb += `${resultb.length % (Math.max(3, 5))}`;
      }
      if (search2.startsWith(`${dragw.length}`)) {
         dragw = "1";
      }
      for (let r = 0; r < 3; r++) {
         resultb += `${resultb.length | 2}`;
      }
      if (!dragw.startsWith(`${resultb.length}`)) {
          let umengq = true;
         resultb = `${2 & resultb.length}`;
         umengq = !umengq;
      }
       let libturbomodulejsijniR = 2;
       let applicationw = 2;
      while (search2.length < 4 || 4 < resultb.length) {
         search2 += "3";
         break;
      }
         resultb = `${libturbomodulejsijniR + 1}`;
      if (resultb.includes(`${dragw.length}`)) {
          let leagueG = String.fromCharCode(97,109,111,117,110,116,95,118,95,56,51,0);
          let videobufferloadingR = String.fromCharCode(116,95,54,51,95,100,101,116,101,114,109,105,110,105,115,116,105,99,0);
         dragw = `${(dragw == String.fromCharCode(95,0) ? search2.length : dragw.length)}`;
         leagueG += `${videobufferloadingR.length % (Math.max(2, 4))}`;
         videobufferloadingR = "2";
      }
      liney = `${parseInt(`${downloadingV}`)}`;
   }
   while (1.49 <= (downloadingV / (Math.max(4, referrerW.size)))) {
       let rncore1 = false;
      if (rncore1 && rncore1) {
          let libjsijniprofilerz = 0;
          let eyeopen4 = 1;
          let mbridgef = String.fromCharCode(114,101,115,105,100,117,101,115,95,113,95,56,55,0);
          let alertg = 5;
         rncore1 = libjsijniprofilerz <= 5;
         libjsijniprofilerz >>= Math.min(Math.abs(eyeopen4 & mbridgef.length), 4);
         eyeopen4 -= mbridgef.length;
         alertg /= Math.max(1, eyeopen4);
      }
      let middlesoundM = rncore1 ? !rncore1 : rncore1;
      do {
          let giftbuttonr: Map<any, any> = new Map([[String.fromCharCode(108,95,54,57,95,114,101,109,97,112,0),886], [String.fromCharCode(110,111,110,110,117,108,108,107,101,121,99,104,97,105,110,95,101,95,51,0),195], [String.fromCharCode(117,95,56,95,97,118,97,108,97,110,99,104,101,0),305]]);
          let expired2: Array<any> = [940, 340, 366];
          let upgradee: Map<any, any> = new Map([[String.fromCharCode(105,95,57,52,0),522], [String.fromCharCode(97,112,116,120,95,101,95,53,51,0),700], [String.fromCharCode(111,111,108,98,97,114,95,115,95,51,48,0),158]]);
         rncore1 = expired2.length == 46;
         giftbuttonr = new Map([[`${upgradee.size}`, 3 ^ upgradee.size]]);
         expired2 = [upgradee.size];
         if (middlesoundM) {
            break;
         }
      } while (middlesoundM && (!rncore1));
      if (rncore1) {
         rncore1 = !rncore1;
      }
      referrerW = new Map([[`${downloadingV}`, loadingspinnerX.length * 3]]);
      break;
   }
   if (loadingspinnerX.endsWith(`${armvas}`)) {
      armvas = const_sa == String.fromCharCode(88,0) || referrerW.size == 9;
   }
      audiencem.set(`${armvas}`, 1 >> (Math.min(3, Math.abs(notificationfillemptyl.size))));
       let storeS = String.fromCharCode(121,111,102,102,115,101,116,95,104,95,49,54,0);
       let viewsH = String.fromCharCode(108,95,53,54,95,112,114,101,115,101,110,116,0);
         storeS = `${viewsH.length}`;
      while (4 >= viewsH.length) {
          let o_imageM = String.fromCharCode(108,95,57,54,95,115,112,97,114,107,115,0);
          let unewinterstitialY: Array<any> = [373, 834, 372];
         viewsH = "3";
         o_imageM += `${unewinterstitialY.length + o_imageM.length}`;
         unewinterstitialY = [unewinterstitialY.length - o_imageM.length];
         break;
      }
      while (!storeS.endsWith(`${viewsH.length}`)) {
          let iconlogout2 = 1;
          let scorepopsoundY = true;
         viewsH += `${(String.fromCharCode(101,0) == storeS ? storeS.length : (scorepopsoundY ? 4 : 3))}`;
         iconlogout2 <<= Math.min(Math.abs(iconlogout2 | iconlogout2), 4);
         scorepopsoundY = iconlogout2 == 30;
         break;
      }
      if (storeS != viewsH) {
         viewsH = `${(String.fromCharCode(117,0) == storeS ? storeS.length : viewsH.length)}`;
      }
      let modityo = String.fromCharCode(117,107,100,0) == storeS;
      do {
         storeS = "2";
         if (modityo) {
            break;
         }
      } while ((viewsH.endsWith(`${storeS.length}`)) && modityo);
         viewsH = `${(String.fromCharCode(56,0) == storeS ? viewsH.length : storeS.length)}`;
      armvas = downloadingV > 45.42;
   if (armvas) {
      armvas = 76 == referrerW.size && downloadingV == 85.85;
   }
   let moonD = armvas ? !armvas : armvas;
   do {
       let x_position8: Map<any, any> = new Map([[String.fromCharCode(112,97,115,99,97,108,95,106,95,50,54,0),String.fromCharCode(114,112,99,103,101,110,95,53,95,50,51,0)], [String.fromCharCode(106,95,55,95,102,114,101,101,0),String.fromCharCode(101,95,49,51,95,99,105,112,104,101,114,98,121,110,97,109,101,0)], [String.fromCharCode(117,95,52,95,116,114,97,115,104,111,108,100,0),String.fromCharCode(111,109,112,108,105,99,97,116,105,111,110,95,104,95,53,0)]]);
          let rewindX: Array<any> = [633, 613, 144];
          let logoj = 3.0;
          let combinedg = String.fromCharCode(112,95,52,95,101,116,104,114,101,97,100,0);
         x_position8 = new Map([[`${rewindX.length}`, 1 * rewindX.length]]);
         logoj += (parseFloat(`${combinedg == String.fromCharCode(80,0) ? combinedg.length : parseInt(`${logoj}`)}`));
          let sliderm = String.fromCharCode(104,95,52,50,95,119,97,108,107,105,110,103,0);
         x_position8.set(`${sliderm}`, 2 / (Math.max(10, sliderm.length)));
       let referreru = String.fromCharCode(99,111,114,114,101,115,112,111,110,100,101,110,116,115,95,103,95,51,51,0);
       let homeplayer1 = String.fromCharCode(119,95,51,52,95,116,114,97,110,115,113,117,97,110,116,0);
      armvas = String.fromCharCode(55,0) == defaultplayerimgz || 39 < audiencem.size;
      if (moonD) {
         break;
      }
   } while ((!armvas) && moonD);
    await refreshUserState();

       let arrowselectdownO = false;
       let clockX = true;
       let middlesoundO = String.fromCharCode(115,105,100,101,115,95,48,95,50,48,0);
      while (!clockX && arrowselectdownO) {
         clockX = !middlesoundO.endsWith(`${arrowselectdownO}`);
         break;
      }
         arrowselectdownO = !clockX;
         middlesoundO = `${middlesoundO.length % 2}`;
          let imagewatchliveE = String.fromCharCode(103,95,57,52,95,110,101,105,103,104,98,111,117,114,115,0);
          let greyG = true;
          let progressE = 1.0;
         clockX = !arrowselectdownO || middlesoundO.length >= 46;
         imagewatchliveE = `${((greyG ? 1 : 4))}`;
         greyG = 3.20 < progressE || !greyG;
         progressE += imagewatchliveE.length;
         arrowselectdownO = (!arrowselectdownO ? clockX : arrowselectdownO);
         arrowselectdownO = !middlesoundO.includes(`${arrowselectdownO}`);
       let analyticJ = 4;
       let predictionactivei = 3;
         arrowselectdownO = !clockX;
      if (analyticJ <= 1) {
          let backwhite6 = String.fromCharCode(114,101,103,105,115,116,114,97,110,116,95,118,95,56,50,0);
          let zinit_gaw = 0.0;
          let filter5 = String.fromCharCode(110,112,112,115,99,97,108,101,95,118,95,57,53,0);
         analyticJ |= filter5.length % (Math.max(1, 3));
         backwhite6 = `${backwhite6.length + 1}`;
         zinit_gaw /= Math.max(backwhite6.length + 2, 2);
         filter5 += `${2 & backwhite6.length}`;
      }
      armvas = (13 > (middlesoundO.length | (!clockX ? 13 : middlesoundO.length)));
   while (armvas) {
      notificationfillemptyl.set(defaultplayerimgz, 1 + defaultplayerimgz.length);
      break;
   }
       let iconsharefriendsr = 3;
       let middlea = String.fromCharCode(101,120,116,114,97,112,111,108,97,116,111,114,95,97,95,53,49,0);
          let benefitn = String.fromCharCode(111,118,101,114,114,105,100,101,95,97,95,57,48,0);
          let minimize1: Array<any> = [809, 196];
          let fullscreenmaxd = 1;
         iconsharefriendsr ^= 1;
         benefitn = `${minimize1.length}`;
         minimize1 = [minimize1.length];
         fullscreenmaxd &= fullscreenmaxd;
         iconsharefriendsr ^= 3;
         iconsharefriendsr ^= iconsharefriendsr << (Math.min(middlea.length, 5));
          let libsentryV = 1;
          let libreanimated2 = String.fromCharCode(117,95,55,50,95,109,97,116,104,101,115,0);
          let termsr = String.fromCharCode(101,95,57,48,95,104,105,100,105,110,103,0);
         iconsharefriendsr += libreanimated2.length;
         libsentryV += libsentryV % (Math.max(5, termsr.length));
         libreanimated2 = `${libsentryV / 1}`;
         termsr = `${(String.fromCharCode(56,0) == termsr ? libsentryV : termsr.length)}`;
      while (4 == (middlea.length ^ iconsharefriendsr) || (4 ^ iconsharefriendsr) == 5) {
         iconsharefriendsr ^= 2 - middlea.length;
         break;
      }
         middlea += `${(middlea == String.fromCharCode(53,0) ? middlea.length : iconsharefriendsr)}`;
      referrerW = new Map([[`${referrerW.size}`, 3 & parseInt(`${downloadingV}`)]]);
   if (3 <= (2 * audiencem.size)) {
       let scheduleu = 0;
       let largebrightness0 = 5.0;
       let reactnavigationb = 2.0;
       let injuryQ = 2;
      for (let s = 0; s < 3; s++) {
          let playl = 0;
         injuryQ >>= Math.min(3, Math.abs(parseInt(`${largebrightness0}`) * 3));
         playl -= playl;
      }
      for (let y = 0; y < 3; y++) {
         largebrightness0 *= parseFloat(`${parseInt(`${reactnavigationb}`)}`);
      }
      while (4.81 >= largebrightness0) {
         reactnavigationb -= scheduleu << (Math.min(Math.abs(1), 1));
         break;
      }
      if ((1 % (Math.max(1, scheduleu))) == 5) {
          let iconchatsendO = 5.0;
          let humidityx = 1;
          let taild = String.fromCharCode(108,105,98,120,95,57,95,49,0);
          let borderlessC = true;
         injuryQ |= 2;
         iconchatsendO += parseFloat(`${parseInt(`${iconchatsendO}`)}`);
         humidityx -= taild.length << (Math.min(Math.abs(1), 1));
         taild = `${2 % (Math.max(5, parseInt(`${iconchatsendO}`)))}`;
         borderlessC = borderlessC && humidityx <= 1;
      }
         largebrightness0 += parseFloat(`${parseInt(`${reactnavigationb}`) * 1}`);
      if ((reactnavigationb + 4.12) == 3.58) {
         injuryQ -= parseInt(`${reactnavigationb}`);
      }
         injuryQ /= Math.max(5, parseInt(`${largebrightness0}`));
      let currentB = 9672174 >= scheduleu;
      do {
         scheduleu /= Math.max(5, scheduleu * 2);
         if (currentB) {
            break;
         }
      } while (currentB && (1.19 <= largebrightness0));
         scheduleu <<= Math.min(Math.abs(parseInt(`${reactnavigationb}`)), 1);
      for (let u = 0; u < 2; u++) {
         injuryQ /= Math.max(5, parseInt(`${reactnavigationb}`) - 2);
      }
          let networkJ = 5.0;
          let ewardedf = 1.0;
          let userS = false;
         scheduleu >>= Math.min(2, Math.abs(injuryQ));
         networkJ -= (parseFloat(`${(userS ? 5 : 4) - parseInt(`${ewardedf}`)}`));
         ewardedf += parseFloat(`${parseInt(`${ewardedf}`) / 2}`);
         userS = !userS;
      let imagemanager6 = scheduleu >= 6830884;
      do {
         scheduleu <<= Math.min(Math.abs(3), 1);
         if (imagemanager6) {
            break;
         }
      } while (imagemanager6 && ((scheduleu + reactnavigationb) >= 5.20));
      audiencem.set(defaultplayerimgz, 1);
   }
      armvas = 1 == notificationfillemptyl.size || downloadingV == 45.59;
   for (let r = 0; r < 2; r++) {
      referrerW.set(`${notificationfillemptyl.size}`, notificationfillemptyl.size % 1);
   }
      defaultplayerimgz = `${1 >> (Math.min(2, defaultplayerimgz.length))}`;
   let verticalM = notificationfillemptyl.size <= 5683391;
   do {
       let scorepopsoundp = 2;
       let zhubog: Array<any> = [930, 580, 322];
       let countryl: Map<any, any> = new Map([[String.fromCharCode(97,118,105,103,97,116,105,111,110,95,107,95,49,53,0),522], [String.fromCharCode(98,102,114,97,109,101,115,95,110,95,54,56,0),698]]);
          let privatechatbgd: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,114,109,101,100,105,97,116,101,95,57,95,51,54,0),908], [String.fromCharCode(113,95,52,55,95,109,117,108,116,105,112,108,121,120,0),551]]);
          let loadingspinnerU = String.fromCharCode(98,95,49,95,115,109,97,108,108,101,114,0);
         zhubog.push(1);
         privatechatbgd = new Map([[`${privatechatbgd.size}`, privatechatbgd.size | 2]]);
         loadingspinnerU += `${privatechatbgd.size ^ 1}`;
         countryl = new Map([[`${countryl.size}`, countryl.size]]);
      let awayicon0 = zhubog.length >= 8214630;
      do {
         zhubog = [3];
         if (awayicon0) {
            break;
         }
      } while (((zhubog.length >> (Math.min(Math.abs(4), 5))) > 1 || (zhubog.length >> (Math.min(Math.abs(4), 2))) > 3) && awayicon0);
      if (1 >= (countryl.size | scorepopsoundp) && 1 >= (scorepopsoundp | countryl.size)) {
          let update_y6: Map<any, any> = new Map([[String.fromCharCode(115,110,97,109,101,95,110,95,50,51,0),false ], [String.fromCharCode(100,95,52,57,95,108,111,119,112,97,115,115,0),false ], [String.fromCharCode(116,111,107,104,122,95,51,95,53,54,0),false ]]);
          let libreactperfloggerjnib = String.fromCharCode(114,101,110,100,101,114,101,114,115,95,102,95,57,48,0);
          let selected_: Map<any, any> = new Map([[String.fromCharCode(104,95,51,53,95,99,111,108,117,109,110,115,0),false ], [String.fromCharCode(97,95,56,54,95,110,105,115,116,122,0),false ], [String.fromCharCode(121,95,55,52,95,99,97,112,116,117,114,101,100,0),false ]]);
         scorepopsoundp -= libreactperfloggerjnib.length / 3;
         update_y6.set(`${update_y6.size}`, 3);
         libreactperfloggerjnib = "3";
         selected_.set(`${update_y6.size}`, 3 / (Math.max(8, selected_.size)));
      }
      let yellowcirclebg1 = 8978314 >= scorepopsoundp;
      do {
         scorepopsoundp ^= zhubog.length & countryl.size;
         if (yellowcirclebg1) {
            break;
         }
      } while (yellowcirclebg1 && (2 >= (countryl.size << (Math.min(1, Math.abs(scorepopsoundp)))) || 3 >= (2 << (Math.min(2, Math.abs(countryl.size))))));
         zhubog = [zhubog.length];
         zhubog.push(2 - scorepopsoundp);
      while ((scorepopsoundp * 1) <= 3) {
          let readD: Map<any, any> = new Map([[String.fromCharCode(99,118,105,100,95,113,95,51,53,0),5], [String.fromCharCode(117,116,120,111,95,50,95,53,55,0),86]]);
          let catagoryy = 1;
          let profilec: Map<any, any> = new Map([[String.fromCharCode(118,99,100,97,116,97,95,106,95,50,48,0),878], [String.fromCharCode(115,116,97,116,101,102,117,108,95,111,95,57,49,0),386], [String.fromCharCode(112,114,101,118,118,101,99,95,119,95,53,52,0),660]]);
          let googlej = false;
          let weatherf = true;
         scorepopsoundp %= Math.max(countryl.size, 1);
         readD = new Map([[`${readD.size}`, 3]]);
         catagoryy <<= Math.min(1, Math.abs(2));
         profilec = new Map([[`${googlej}`, 2 << (Math.min(Math.abs(catagoryy), 5))]]);
         weatherf = (readD.size & catagoryy) >= 70;
         break;
      }
         scorepopsoundp >>= Math.min(Math.abs(zhubog.length >> (Math.min(2, Math.abs(countryl.size)))), 5);
      notificationfillemptyl = new Map([[`${scorepopsoundp}`, scorepopsoundp]]);
      if (verticalM) {
         break;
      }
   } while ((1.95 <= (2.73 + downloadingV) || (notificationfillemptyl.size * 3) <= 4) && verticalM);
    setRefreshing(false);
    scrollRef.current.scrollTo({ index: 0, animated: false });
  };

  const refreshUserState = async () => {
       let activey = 5.0;
    let libcrashsdkH = String.fromCharCode(110,101,109,111,110,105,99,95,97,95,57,54,0);
    let becomee = String.fromCharCode(108,95,54,55,95,102,100,99,116,0);
    let leftA = String.fromCharCode(107,95,57,57,95,102,99,117,110,112,117,98,108,105,115,104,0);
    let textlayoutmanagerG = 5;
    let carouselG: Array<any> = [811, 378, 550];
    let cornerV = 1;
    let anytime_ = String.fromCharCode(116,111,110,101,95,57,95,49,54,0);
    let default_5H = 0;
    let popupA = 1.0;
      anytime_ = `${parseInt(`${activey}`)}`;
   if (2 >= carouselG.length) {
      anytime_ = `${default_5H & 3}`;
   }
       let smallbrightnessa: Map<any, any> = new Map([[String.fromCharCode(116,114,97,110,115,95,103,95,55,54,0),true ], [String.fromCharCode(104,111,115,116,110,97,109,101,95,107,95,56,55,0),false ]]);
       let lessA: Map<any, any> = new Map([[String.fromCharCode(110,108,109,101,97,110,115,95,117,95,52,52,0),false ], [String.fromCharCode(121,95,56,95,114,101,99,117,114,115,105,118,101,0),true ]]);
       let searchbarp = 2.0;
         lessA = new Map([[`${smallbrightnessa.size}`, lessA.size * 1]]);
         searchbarp -= parseFloat(`${2 - lessA.size}`);
         lessA.set(`${searchbarp}`, 1);
      for (let k = 0; k < 2; k++) {
         smallbrightnessa.set(`${smallbrightnessa.size}`, 1);
      }
       let incident6 = 4;
       let routerz = 5;
          let ballK = 1.0;
          let binddatasv = String.fromCharCode(97,100,100,109,111,100,95,121,95,50,50,0);
         lessA = new Map([[`${searchbarp}`, parseInt(`${ballK}`)]]);
         binddatasv += "3";
         searchbarp -= parseFloat(`${parseInt(`${searchbarp}`)}`);
      let airbnbstarselectedR = incident6 <= 7225375;
      do {
         incident6 &= routerz;
         if (airbnbstarselectedR) {
            break;
         }
      } while (((5 ^ lessA.size) < 3 || (lessA.size ^ 5) < 3) && airbnbstarselectedR);
         searchbarp /= Math.max(parseFloat(`${parseInt(`${searchbarp}`) / 2}`), 3);
      libcrashsdkH += `${3 << (Math.min(3, Math.abs(smallbrightnessa.size)))}`;
      textlayoutmanagerG %= Math.max(2, cornerV >> (Math.min(leftA.length, 1)));
   for (let r = 0; r < 2; r++) {
      activey *= 2;
   }

    const result = await yysHomeloading.getUserDetails();

   let themeG = carouselG.length >= 5405198;
   do {
       let updatesX: Array<any> = [347, 366, 25];
       let recommendationQ: Array<any> = [821, 792];
       let sendN = String.fromCharCode(115,117,98,112,97,114,116,95,97,95,52,52,0);
          let suggestionT: Map<any, any> = new Map([[String.fromCharCode(99,95,54,55,95,99,114,108,100,0),329], [String.fromCharCode(98,105,116,115,104,105,102,116,95,50,95,56,0),536], [String.fromCharCode(114,111,102,105,108,101,95,107,95,52,57,0),700]]);
          let homeinactiveH = String.fromCharCode(101,99,114,101,116,95,102,95,56,51,0);
          let benefitU: Map<any, any> = new Map([[String.fromCharCode(99,111,114,100,122,95,56,95,57,0),421], [String.fromCharCode(100,101,118,105,99,101,115,95,113,95,52,51,0),458], [String.fromCharCode(115,112,97,99,101,115,95,102,95,56,57,0),943]]);
         updatesX = [homeinactiveH.length];
         suggestionT = new Map([[`${benefitU.size}`, 2]]);
         homeinactiveH = "3";
         benefitU.set(`${suggestionT.size}`, 1);
       let mountingF = String.fromCharCode(111,95,51,50,95,97,115,121,110,99,100,105,115,112,108,97,121,107,105,116,0);
      if (sendN.length <= mountingF.length) {
         mountingF += `${recommendationQ.length * sendN.length}`;
      }
         recommendationQ.push(updatesX.length);
      let icondownimgN = 8132839 >= updatesX.length;
      do {
          let libswresamplen: Array<any> = [790, 506, 441];
          let iconrightorange2 = 1;
          let orangeuparrow0 = true;
          let statsnomoredataq = 1.0;
          let nterstitialc = String.fromCharCode(116,105,112,95,106,95,51,52,0);
         updatesX.push(mountingF.length / 2);
         libswresamplen = [3 >> (Math.min(3, nterstitialc.length))];
         iconrightorange2 >>= Math.min(4, Math.abs(parseInt(`${statsnomoredataq}`) << (Math.min(1, Math.abs(iconrightorange2)))));
         orangeuparrow0 = !nterstitialc.includes(`${statsnomoredataq}`);
         if (icondownimgN) {
            break;
         }
      } while ((2 >= (5 + updatesX.length) || (5 + updatesX.length) >= 5) && icondownimgN);
      if (!updatesX.includes(recommendationQ.length)) {
          let notificationfilledK = 0;
          let stats0 = 1;
          let privacy5: Map<any, any> = new Map([[String.fromCharCode(102,111,114,119,97,114,100,101,114,95,52,95,50,54,0),String.fromCharCode(120,95,54,55,95,116,101,120,116,117,114,101,115,0)], [String.fromCharCode(118,95,50,52,95,98,97,99,107,105,110,103,0),String.fromCharCode(115,95,56,95,102,97,116,101,0)], [String.fromCharCode(108,111,115,115,108,101,115,115,95,119,95,57,53,0),String.fromCharCode(115,95,57,57,95,114,117,108,101,115,0)]]);
         recommendationQ = [3 << (Math.min(1, sendN.length))];
         notificationfilledK /= Math.max(4, privacy5.size);
         stats0 >>= Math.min(3, Math.abs(notificationfilledK ^ 2));
         privacy5.set(`${stats0}`, notificationfilledK);
      }
         mountingF += `${updatesX.length & mountingF.length}`;
      if (recommendationQ.length <= updatesX.length) {
          let sportsB = true;
          let update_jk = String.fromCharCode(111,95,49,48,48,95,112,114,105,110,116,0);
          let viewsK: Map<any, any> = new Map([[String.fromCharCode(115,101,101,107,116,97,98,108,101,95,54,95,55,56,0),885], [String.fromCharCode(107,95,56,55,95,104,119,97,101,115,0),717], [String.fromCharCode(103,101,116,115,105,103,99,116,120,110,111,95,52,95,54,50,0),157]]);
          let playercommonJ = 0.0;
          let backx = 1.0;
         recommendationQ.push(updatesX.length ^ update_jk.length);
         sportsB = null == viewsK.get(`${playercommonJ}`);
         update_jk = `${parseInt(`${backx}`) | parseInt(`${playercommonJ}`)}`;
         viewsK.set(`${backx}`, 1 & parseInt(`${backx}`));
      }
         sendN += `${2 & sendN.length}`;
      carouselG.push(textlayoutmanagerG % (Math.max(3, recommendationQ.length)));
      if (themeG) {
         break;
      }
   } while (themeG && (3.13 == activey));
      carouselG = [carouselG.length * 3];
   if (anytime_.length < 5) {
      libcrashsdkH += `${cornerV >> (Math.min(Math.abs(1), 1))}`;
   }
   if (cornerV < 4) {
      cornerV *= 3;
   }
      libcrashsdkH += `${2 + becomee.length}`;
    if (result == null) {

   if (2 < (2 >> (Math.min(4, Math.abs(textlayoutmanagerG))))) {
      carouselG.push((libcrashsdkH == String.fromCharCode(55,0) ? cornerV : libcrashsdkH.length));
   }
   if (3.10 == (activey / 3.39) || 4 == (3 + libcrashsdkH.length)) {
       let balle: Array<any> = [601, 805];
      if (3 < (5 + balle.length) && 5 < (balle.length + 5)) {
         balle.push(balle.length - balle.length);
      }
      for (let g = 0; g < 1; g++) {
          let pressureT = String.fromCharCode(108,95,53,57,95,97,99,114,111,110,121,109,115,0);
          let libyogaJ: Array<any> = [188, 112, 963];
          let statsM = String.fromCharCode(97,95,49,48,48,95,114,101,99,97,108,99,117,108,97,116,105,111,110,0);
         balle.push(libyogaJ.length * statsM.length);
         pressureT = `${pressureT.length - 3}`;
         libyogaJ = [pressureT.length];
      }
      while (balle.length < 1) {
         balle.push(1);
         break;
      }
      libcrashsdkH += `${anytime_.length << (Math.min(4, Math.abs(cornerV)))}`;
   }
   for (let x = 0; x < 2; x++) {
       let viewerH = String.fromCharCode(99,111,114,114,101,115,112,111,110,100,101,110,116,115,95,115,95,55,0);
       let runtimeschedulerY = String.fromCharCode(104,95,52,52,95,108,111,111,107,0);
       let reactnativejsR = 2;
       let yellowanimationliveY = String.fromCharCode(115,101,108,101,99,116,105,110,103,95,114,95,56,51,0);
      while (runtimeschedulerY.includes(`${reactnativejsR}`)) {
         runtimeschedulerY = `${viewerH.length}`;
         break;
      }
         yellowanimationliveY += `${1 + yellowanimationliveY.length}`;
         viewerH = `${runtimeschedulerY.length >> (Math.min(Math.abs(1), 5))}`;
      if (viewerH != String.fromCharCode(73,0)) {
          let floatingv = 5.0;
         yellowanimationliveY = `${(String.fromCharCode(110,0) == yellowanimationliveY ? yellowanimationliveY.length : parseInt(`${floatingv}`))}`;
      }
          let basketballiconG = String.fromCharCode(114,117,115,115,105,97,110,95,48,95,56,57,0);
          let penaltyt = 1.0;
         viewerH = `${(String.fromCharCode(97,0) == yellowanimationliveY ? yellowanimationliveY.length : parseInt(`${penaltyt}`))}`;
         basketballiconG = `${basketballiconG.length + 3}`;
         penaltyt -= 3 - basketballiconG.length;
       let backiconmaskl = 0;
      for (let a = 0; a < 1; a++) {
         yellowanimationliveY = "1";
      }
      while (2 >= (viewerH.length % (Math.max(10, backiconmaskl)))) {
          let smallorangemanI = String.fromCharCode(99,111,99,111,115,100,120,95,101,95,52,55,0);
          let runtime1 = 4;
          let dragclose3 = String.fromCharCode(100,95,57,50,95,116,111,114,99,104,0);
         backiconmaskl /= Math.max(1, backiconmaskl >> (Math.min(Math.abs(reactnativejsR), 2)));
         smallorangemanI += `${(String.fromCharCode(89,0) == smallorangemanI ? smallorangemanI.length : runtime1)}`;
         runtime1 >>= Math.min(3, Math.abs(3 | runtime1));
         dragclose3 += `${1 + dragclose3.length}`;
         break;
      }
      while (reactnativejsR > 5) {
         backiconmaskl |= viewerH.length;
         break;
      }
      for (let j = 0; j < 3; j++) {
         runtimeschedulerY += `${runtimeschedulerY.length / 3}`;
      }
      while (2 <= (runtimeschedulerY.length << (Math.min(4, Math.abs(backiconmaskl)))) && (backiconmaskl << (Math.min(runtimeschedulerY.length, 2))) <= 2) {
         runtimeschedulerY += `${yellowanimationliveY.length}`;
         break;
      }
          let nterstitialo = String.fromCharCode(104,97,108,102,95,107,95,50,53,0);
          let benefitS = String.fromCharCode(109,97,112,115,95,113,95,53,51,0);
          let orangeclockE = true;
         runtimeschedulerY += `${reactnativejsR}`;
         nterstitialo = `${(3 & (orangeclockE ? 2 : 2))}`;
         benefitS += `${(benefitS.length + (orangeclockE ? 5 : 5))}`;
      becomee = `${carouselG.length}`;
   }
   let librrc4 = 5433239 <= textlayoutmanagerG;
   do {
      textlayoutmanagerG -= 1 >> (Math.min(3, becomee.length));
      if (librrc4) {
         break;
      }
   } while (librrc4 && (2 < (textlayoutmanagerG / (Math.max(5, 10))) || (textlayoutmanagerG / (Math.max(becomee.length, 6))) < 5));
   if (leftA == String.fromCharCode(73,0) || anytime_.length >= 2) {
      anytime_ = "1";
   }
      return;
    }

    await dispatch(updateUserAuth(result));

   for (let c = 0; c < 1; c++) {
      cornerV += parseInt(`${activey}`) ^ leftA.length;
   }
      default_5H -= 3 ^ cornerV;
      cornerV -= parseInt(`${popupA}`);
   let exampleimageZ = String.fromCharCode(97,51,109,97,49,98,95,97,0) == becomee;
   do {
      becomee += `${becomee.length}`;
      if (exampleimageZ) {
         break;
      }
   } while (exampleimageZ && (libcrashsdkH == String.fromCharCode(70,0)));
      becomee += `${3 ^ leftA.length}`;
    return;
  };

  const checkConnection = async () => {
       let redgoalE: Map<any, any> = new Map([[String.fromCharCode(118,105,115,105,98,108,105,116,121,95,97,95,52,0),true ], [String.fromCharCode(103,95,54,50,95,100,105,121,102,112,0),true ]]);
    let iconnointernetC: Array<any> = [852, 285, 344];
    let iconplayA: Map<any, any> = new Map([[String.fromCharCode(115,95,55,49,95,101,114,108,101,0),741], [String.fromCharCode(103,101,116,111,112,116,95,104,95,53,52,0),271]]);
    let cornerk: Array<any> = [272, 427, 914];
    let iconeye5 = 2.0;
    let main_xC = String.fromCharCode(105,95,54,50,95,99,111,112,105,101,115,0);
    let benefitM = 4.0;
    let moduleC = String.fromCharCode(120,95,51,56,95,100,101,102,105,110,105,116,105,111,110,0);
    let component7 = 3;
   for (let i = 0; i < 3; i++) {
      moduleC = `${parseInt(`${benefitM}`)}`;
   }
       let yellowcirclebg7 = 2;
       let logouserO = false;
       let iconarrowrightt = String.fromCharCode(116,95,54,54,95,111,112,101,110,0);
      while (!logouserO) {
          let leftT: Map<any, any> = new Map([[String.fromCharCode(104,95,57,53,95,102,105,110,116,0),true ], [String.fromCharCode(119,95,56,55,95,99,97,108,99,117,108,97,116,101,100,0),false ]]);
         iconarrowrightt = `${1 / (Math.max(yellowcirclebg7, 6))}`;
         leftT.set(`${leftT.size}`, 1 + leftT.size);
         break;
      }
      while (iconarrowrightt.startsWith(`${yellowcirclebg7}`)) {
          let borderlessJ = String.fromCharCode(118,95,56,57,95,105,109,109,101,100,105,97,116,101,0);
          let sans1 = String.fromCharCode(99,111,110,115,116,114,117,99,116,95,114,95,51,50,0);
          let lessV = String.fromCharCode(97,95,54,95,105,110,99,111,114,114,101,99,116,0);
          let sentryZ = false;
          let profileF = String.fromCharCode(108,101,114,112,102,95,119,95,53,49,0);
         iconarrowrightt = `${(String.fromCharCode(74,0) == borderlessJ ? lessV.length : borderlessJ.length)}`;
         sans1 += `${((sentryZ ? 5 : 5) + 3)}`;
         lessV = "3";
         profileF = `${(profileF == String.fromCharCode(98,0) ? (sentryZ ? 1 : 2) : profileF.length)}`;
         break;
      }
      if (2 >= yellowcirclebg7) {
         logouserO = iconarrowrightt.includes(`${logouserO}`);
      }
      let diceD = logouserO ? !logouserO : logouserO;
      do {
         logouserO = !logouserO || yellowcirclebg7 >= 9;
         if (diceD) {
            break;
         }
      } while (diceD && (!logouserO));
          let iconlogouti: Array<any> = [685, 739];
          let emojiM = String.fromCharCode(112,114,101,100,105,99,116,95,49,95,51,53,0);
         logouserO = (iconarrowrightt.length / (Math.max(8, emojiM.length))) <= 46;
         iconlogouti.push(iconlogouti.length & iconlogouti.length);
         emojiM += "3";
       let overh = 1.0;
       let watchnowbg_ = 0.0;
         yellowcirclebg7 /= Math.max((String.fromCharCode(53,0) == iconarrowrightt ? (logouserO ? 3 : 3) : iconarrowrightt.length), 4);
      let agreementT = logouserO ? !logouserO : logouserO;
      do {
          let libjsinspectorQ = String.fromCharCode(103,108,98,108,95,115,95,55,54,0);
         logouserO = watchnowbg_ >= 53.87 || overh >= 53.87;
         libjsinspectorQ = `${libjsinspectorQ.length * libjsinspectorQ.length}`;
         if (agreementT) {
            break;
         }
      } while (agreementT && (logouserO || (yellowcirclebg7 / 5) < 2));
      iconeye5 += parseFloat(`${main_xC.length << (Math.min(Math.abs(1), 4))}`);
   let showmoreX = String.fromCharCode(54,105,111,120,109,106,109,104,115,0) == main_xC;
   do {
       let actionsP: Map<any, any> = new Map([[String.fromCharCode(102,105,101,108,95,119,95,49,51,0),77], [String.fromCharCode(111,95,50,52,95,100,105,115,109,105,115,115,105,110,103,0),657], [String.fromCharCode(121,95,54,52,95,111,112,116,105,109,105,122,101,0),351]]);
       let buildD = 4.0;
       let networku = String.fromCharCode(116,95,56,52,95,100,105,115,99,97,114,100,101,100,0);
       let referrerz = String.fromCharCode(102,95,54,52,95,100,101,116,101,114,109,105,110,97,98,108,101,0);
         buildD *= parseFloat(`${actionsP.size}`);
         buildD -= parseFloat(`${2}`);
       let toponr = true;
       let fullscreenminM = false;
      let libhermesv = buildD >= 7374717.0;
      do {
         buildD *= (parseFloat(`${parseInt(`${buildD}`) >> (Math.min(5, Math.abs((fullscreenminM ? 5 : 5))))}`));
         if (libhermesv) {
            break;
         }
      } while ((!toponr) && libhermesv);
      while (1 > actionsP.size) {
          let short_i7: Map<any, any> = new Map([[String.fromCharCode(118,116,97,115,107,113,117,101,117,101,95,54,95,51,52,0),411], [String.fromCharCode(122,95,55,55,95,105,110,108,105,110,101,0),38], [String.fromCharCode(99,111,110,102,105,103,117,114,101,95,52,95,54,53,0),414]]);
          let scorepopsound3: Map<any, any> = new Map([[String.fromCharCode(101,95,49,54,95,101,108,108,105,112,115,101,0),812], [String.fromCharCode(107,95,51,49,95,118,111,105,99,101,109,97,105,108,0),735]]);
          let orangeuparrowg = true;
          let tooltipsb = 4.0;
         actionsP.set(referrerz, 1);
         short_i7.set(`${scorepopsound3.size}`, scorepopsound3.size);
         orangeuparrowg = scorepopsound3.size == short_i7.size;
         tooltipsb /= Math.max(2, 2 + parseInt(`${tooltipsb}`));
         break;
      }
         actionsP.set(referrerz, 2 << (Math.min(4, referrerz.length)));
      if ((1 % (Math.max(5, actionsP.size))) > 3 && 4 > (referrerz.length % 1)) {
          let plusD = String.fromCharCode(115,118,103,95,113,95,53,51,0);
          let tickedF = String.fromCharCode(112,107,112,107,101,121,95,112,95,54,49,0);
          let iconcalendarC: Map<any, any> = new Map([[String.fromCharCode(122,95,57,48,95,112,101,114,112,105,120,101,108,0),true ], [String.fromCharCode(100,95,53,57,95,97,109,112,108,105,116,117,100,101,0),true ]]);
         referrerz += `${iconcalendarC.size - tickedF.length}`;
         plusD = `${plusD.length % (Math.max(2, plusD.length))}`;
         tickedF += `${3 >> (Math.min(5, plusD.length))}`;
      }
         referrerz += "3";
          let phoneshare4 = String.fromCharCode(100,95,57,50,95,118,111,98,115,117,98,0);
          let abidetectQ: Array<any> = [891, 123];
          let sortl = String.fromCharCode(117,95,56,48,95,100,101,108,115,117,112,101,114,0);
         actionsP.set(`${fullscreenminM}`, ((fullscreenminM ? 5 : 4)));
         phoneshare4 += "1";
         abidetectQ = [phoneshare4.length];
         sortl = `${sortl.length}`;
      if (fullscreenminM || networku.length == 1) {
         fullscreenminM = actionsP.size == parseInt(`${buildD}`);
      }
      for (let d = 0; d < 2; d++) {
         networku += `${1 >> (Math.min(5, referrerz.length))}`;
      }
         actionsP.set(`${fullscreenminM}`, 2 >> (Math.min(1, Math.abs(actionsP.size))));
      main_xC += `${iconplayA.size % 2}`;
      if (showmoreX) {
         break;
      }
   } while (showmoreX && (1.75 <= (4.51 - iconeye5) && (parseInt(`${iconeye5}`) - main_xC.length) <= 1));
   if ((cornerk.length << (Math.min(Math.abs(3), 4))) == 5) {
      main_xC = `${moduleC.length}`;
   }
      benefitM += parseFloat(`${parseInt(`${benefitM}`) / (Math.max(main_xC.length, 3))}`);
      moduleC += `${(String.fromCharCode(80,0) == main_xC ? iconnointernetC.length : main_xC.length)}`;

    const state = await NetInfo.fetch();

   while (5.15 < iconeye5) {
      main_xC = "2";
      break;
   }
   while (!iconnointernetC.includes(benefitM)) {
       let abouth = 1.0;
       let countryI = true;
       let long_zO: Array<any> = [217, 912, 511];
       let classesv: Array<any> = [String.fromCharCode(112,111,115,105,116,105,111,110,115,95,122,95,53,52,0), String.fromCharCode(110,95,54,50,95,105,109,112,111,114,116,97,98,108,101,100,0), String.fromCharCode(99,95,53,57,95,120,108,97,98,101,108,119,105,100,116,104,0)];
       let chatbotphotoM: Array<any> = [227, 742];
         long_zO.push((long_zO.length & (countryI ? 3 : 3)));
       let neon8 = 0.0;
       let iconeditx = 5.0;
      if (5.81 <= (parseFloat(`${long_zO.length}`) * iconeditx) && 5 <= (2 ^ long_zO.length)) {
         long_zO = [parseInt(`${iconeditx}`)];
      }
       let refreshborderlessn = String.fromCharCode(115,108,105,99,101,116,104,114,101,97,100,95,112,95,55,57,0);
       let libreact2 = String.fromCharCode(116,95,54,57,95,104,112,101,108,100,115,112,0);
      let codeh = 5849944 >= refreshborderlessn.length;
      do {
         refreshborderlessn += `${parseInt(`${iconeditx}`)}`;
         if (codeh) {
            break;
         }
      } while ((libreact2 != String.fromCharCode(54,0)) && codeh);
      let basketball0 = refreshborderlessn == String.fromCharCode(105,110,54,119,48,95,53,51,0);
      do {
         refreshborderlessn += `${(libreact2 == String.fromCharCode(85,0) ? libreact2.length : long_zO.length)}`;
         if (basketball0) {
            break;
         }
      } while ((2.66 >= neon8) && basketball0);
         neon8 += (parseFloat(`${String.fromCharCode(111,0) == libreact2 ? parseInt(`${abouth}`) : libreact2.length}`));
      let iconstarz = 8616496 <= long_zO.length;
      do {
          let resend9: Array<any> = [341, 132];
          let profiles = true;
          let mbridgem = 5;
         long_zO = [2 ^ libreact2.length];
         resend9 = [mbridgem];
         profiles = !profiles || 70 >= mbridgem;
         if (iconstarz) {
            break;
         }
      } while (iconstarz && ((refreshborderlessn.length >> (Math.min(2, long_zO.length))) <= 5 || (5 >> (Math.min(1, long_zO.length))) <= 3));
         libreact2 = `${(parseInt(`${abouth}`) & (countryI ? 1 : 3))}`;
      while (1 == refreshborderlessn.length) {
         neon8 += parseFloat(`${2 ^ refreshborderlessn.length}`);
         break;
      }
      if (4.19 <= (1.76 / (Math.max(9, neon8)))) {
         neon8 /= Math.max(3, parseFloat(`${1 ^ parseInt(`${abouth}`)}`));
      }
         refreshborderlessn += `${(refreshborderlessn == String.fromCharCode(103,0) ? refreshborderlessn.length : long_zO.length)}`;
      if ((5 << (Math.min(1, long_zO.length))) >= 4 || !countryI) {
         long_zO.push(long_zO.length);
      }
         countryI = iconeditx < 84.88;
      for (let j = 0; j < 3; j++) {
          let progresso = String.fromCharCode(114,95,56,54,95,105,110,116,101,110,116,0);
         classesv = [classesv.length];
         progresso += `${progresso.length}`;
      }
      iconnointernetC.push(((countryI ? 2 : 1) << (Math.min(Math.abs(parseInt(`${abouth}`)), 3))));
      break;
   }
      main_xC += `${main_xC.length}`;
       let imagemanagerG = 0.0;
       let awayG = true;
      while (awayG) {
         imagemanagerG /= Math.max(5, parseInt(`${imagemanagerG}`) + 1);
         break;
      }
          let vertical6 = String.fromCharCode(115,109,117,115,104,95,116,95,55,57,0);
          let rewardS = true;
          let turndownQ: Array<any> = [681, 941];
         imagemanagerG *= (vertical6 == String.fromCharCode(110,0) ? (rewardS ? 3 : 5) : vertical6.length);
         rewardS = (turndownQ.length >> (Math.min(turndownQ.length, 4))) == 43;
      while (5.85 > imagemanagerG) {
         imagemanagerG -= parseInt(`${imagemanagerG}`) - 1;
         break;
      }
         imagemanagerG /= Math.max(4, ((awayG ? 1 : 1) << (Math.min(Math.abs(parseInt(`${imagemanagerG}`)), 3))));
         awayG = !awayG;
      for (let j = 0; j < 3; j++) {
          let penaltygoalH = String.fromCharCode(115,95,51,50,95,102,111,117,114,116,104,0);
          let imagenetworkerrJ = 2;
          let logout7 = String.fromCharCode(103,119,103,116,95,106,95,57,55,0);
          let penaltymatchiconL = 4.0;
          let basketballawayteam4 = 2.0;
         awayG = !awayG;
         penaltygoalH += `${imagenetworkerrJ / (Math.max(penaltygoalH.length, 1))}`;
         imagenetworkerrJ <<= Math.min(Math.abs(imagenetworkerrJ), 4);
         logout7 = `${parseInt(`${basketballawayteam4}`)}`;
         penaltymatchiconL *= parseInt(`${penaltymatchiconL}`) ^ 2;
         basketballawayteam4 /= Math.max(parseFloat(`${3 ^ imagenetworkerrJ}`), 3);
      }
      moduleC += "1";
   let editE = iconplayA.size >= 5717854;
   do {
       let nextn: Array<any> = [732, 543, 639];
       let foregroundC = String.fromCharCode(101,95,49,55,95,100,111,115,100,97,116,101,0);
       let customQ = 3;
       let telegram3 = 4.0;
       let fullscreenmin3 = 4;
         fullscreenmin3 |= 3 ^ nextn.length;
         fullscreenmin3 ^= 2;
      for (let b = 0; b < 1; b++) {
         customQ /= Math.max(fullscreenmin3 - 3, 1);
      }
      for (let k = 0; k < 2; k++) {
         customQ |= 3;
      }
      while (2 > (nextn.length % (Math.max(3, 2)))) {
          let defaultplayerimgP = String.fromCharCode(102,97,115,116,101,115,116,95,108,95,51,57,0);
          let nodes = 2.0;
          let hooksG = String.fromCharCode(103,111,112,104,101,114,95,119,95,55,51,0);
         fullscreenmin3 -= foregroundC.length;
         defaultplayerimgP = `${parseInt(`${nodes}`)}`;
         nodes += 1;
         hooksG += `${defaultplayerimgP.length * parseInt(`${nodes}`)}`;
         break;
      }
      while (telegram3 > 3.52) {
          let bingW = String.fromCharCode(99,110,111,110,99,101,95,105,95,50,57,0);
          let footballtrophy3 = 3;
          let trashQ = String.fromCharCode(116,95,54,52,95,105,109,108,116,0);
         telegram3 /= Math.max(customQ, 1);
         bingW += `${1 / (Math.max(2, trashQ.length))}`;
         footballtrophy3 -= (bingW == String.fromCharCode(84,0) ? footballtrophy3 : bingW.length);
         trashQ += "1";
         break;
      }
          let liveendmodallogoG: Map<any, any> = new Map([[String.fromCharCode(108,95,49,48,48,95,109,111,100,105,102,105,101,100,0),966], [String.fromCharCode(120,95,52,52,95,104,117,100,0),648], [String.fromCharCode(100,98,112,97,103,101,95,120,95,49,52,0),33]]);
         foregroundC += `${(String.fromCharCode(75,0) == foregroundC ? fullscreenmin3 : foregroundC.length)}`;
         liveendmodallogoG = new Map([[`${liveendmodallogoG.size}`, liveendmodallogoG.size << (Math.min(Math.abs(2), 1))]]);
      let greytickA = customQ >= 6496955;
      do {
         customQ |= (foregroundC == String.fromCharCode(87,0) ? nextn.length : foregroundC.length);
         if (greytickA) {
            break;
         }
      } while ((5 > (2 % (Math.max(1, customQ)))) && greytickA);
      while (5 > fullscreenmin3) {
          let network4 = String.fromCharCode(117,95,54,51,95,103,97,112,115,0);
         telegram3 -= foregroundC.length ^ fullscreenmin3;
         network4 = "1";
         break;
      }
      while (4.64 > (2.96 * telegram3) || 1 > (3 & fullscreenmin3)) {
         telegram3 -= 1 % (Math.max(7, foregroundC.length));
         break;
      }
      if (5.77 > (telegram3 + 4.8) && 5 > (4 * nextn.length)) {
         telegram3 -= customQ ^ parseInt(`${telegram3}`);
      }
         customQ %= Math.max(nextn.length * foregroundC.length, 1);
      while ((customQ + parseInt(`${telegram3}`)) <= 4 && 3.65 <= (telegram3 + 4.50)) {
         customQ &= 3;
         break;
      }
         telegram3 *= 2;
          let hejiE: Map<any, any> = new Map([[String.fromCharCode(112,114,101,99,101,110,99,101,95,99,95,56,53,0),true ], [String.fromCharCode(97,118,97,105,108,97,98,108,101,95,113,95,55,55,0),true ]]);
         customQ %= Math.max(nextn.length, 2);
         hejiE.set(`${hejiE.size}`, hejiE.size * hejiE.size);
      iconplayA.set(`${customQ}`, parseInt(`${telegram3}`));
      if (editE) {
         break;
      }
   } while ((2 < (moduleC.length ^ 3) && (iconplayA.size ^ 3) < 2) && editE);
   while ((benefitM + 5.92) <= 5.9) {
      cornerk.push(iconplayA.size * 3);
      break;
   }
    const offline = !(state.isConnected && state.isInternetReachable);

   if ((redgoalE.size + iconnointernetC.length) >= 1) {
      iconnointernetC.push(2 | iconnointernetC.length);
   }
   if (2 == (redgoalE.size / (Math.max(4, 7)))) {
       let y_playerK: Array<any> = [620, 574, 138];
         y_playerK.push(y_playerK.length);
      if (3 <= y_playerK.length) {
         y_playerK = [y_playerK.length / (Math.max(y_playerK.length, 4))];
      }
         y_playerK = [1 | y_playerK.length];
      redgoalE = new Map([[`${y_playerK.length}`, y_playerK.length]]);
   }
      iconeye5 -= (parseFloat(`${main_xC == String.fromCharCode(50,0) ? main_xC.length : cornerk.length}`));
   while (1 >= (redgoalE.size >> (Math.min(Math.abs(3), 3))) && 5 >= (3 >> (Math.min(4, Math.abs(redgoalE.size))))) {
      iconplayA = new Map([[`${iconplayA.size}`, cornerk.length - iconplayA.size]]);
      break;
   }
   while ((main_xC.length - cornerk.length) == 5) {
      cornerk.push(3);
      break;
   }
      iconeye5 *= parseFloat(`${cornerk.length}`);
    setIsOffline(offline);

       let orangedownarrowU = true;
       let homeplayer7 = String.fromCharCode(104,99,104,114,111,109,97,95,119,95,51,51,0);
      let footballfiledlayoutu = homeplayer7.length <= 6212354;
      do {
          let eyeopenB: Map<any, any> = new Map([[String.fromCharCode(97,108,108,111,119,105,95,114,95,55,54,0),false ], [String.fromCharCode(105,95,52,49,95,105,110,112,117,116,120,0),false ], [String.fromCharCode(102,95,53,51,95,115,116,111,114,97,103,101,0),true ]]);
          let rewardvideoI = false;
          let apple5 = 2;
          let register_9o3: Array<any> = [297, 345];
         homeplayer7 = "1";
         eyeopenB = new Map([[`${eyeopenB.size}`, eyeopenB.size - apple5]]);
         rewardvideoI = eyeopenB.size <= 28 || 28 <= register_9o3.length;
         apple5 %= Math.max(3 | eyeopenB.size, 1);
         register_9o3 = [2];
         if (footballfiledlayoutu) {
            break;
         }
      } while (footballfiledlayoutu && (orangedownarrowU));
      let libcrashsdkh = orangedownarrowU ? !orangedownarrowU : orangedownarrowU;
      do {
         orangedownarrowU = homeplayer7.length == 4 || orangedownarrowU;
         if (libcrashsdkh) {
            break;
         }
      } while ((orangedownarrowU || homeplayer7.length < 5) && libcrashsdkh);
          let leagueJ = 5;
         orangedownarrowU = homeplayer7 == String.fromCharCode(69,0);
         leagueJ *= 1;
       let foregroundE: Map<any, any> = new Map([[String.fromCharCode(122,95,54,55,95,97,116,116,114,97,99,116,105,111,110,0),27], [String.fromCharCode(107,95,56,54,95,97,110,105,109,0),837], [String.fromCharCode(107,95,54,50,95,121,111,102,102,115,101,116,0),479]]);
       let homem: Map<any, any> = new Map([[String.fromCharCode(116,105,109,101,115,116,97,109,112,95,111,95,51,48,0),true ], [String.fromCharCode(122,95,53,56,95,98,114,110,103,0),false ]]);
          let libfabricjniJ = 4;
          let goallogoS = 5.0;
         homeplayer7 += "2";
         libfabricjniJ -= libfabricjniJ ^ 2;
         goallogoS -= parseFloat(`${1 << (Math.min(Math.abs(libfabricjniJ), 5))}`);
       let feedbackh = String.fromCharCode(105,95,54,54,95,109,105,112,115,102,112,117,0);
      iconeye5 *= parseFloat(`${cornerk.length}`);
   for (let w = 0; w < 3; w++) {
       let sentryR = 3.0;
         sentryR -= parseFloat(`${parseInt(`${sentryR}`) - 1}`);
         sentryR /= Math.max(parseFloat(`${parseInt(`${sentryR}`)}`), 4);
      while (sentryR >= sentryR) {
         sentryR -= parseFloat(`${parseInt(`${sentryR}`) - parseInt(`${sentryR}`)}`);
         break;
      }
      iconeye5 /= Math.max(1, (parseFloat(`${main_xC == String.fromCharCode(76,0) ? iconplayA.size : main_xC.length}`)));
   }
   let assistF = 8824245.0 <= iconeye5;
   do {
      iconeye5 += parseFloat(`${moduleC.length - parseInt(`${iconeye5}`)}`);
      if (assistF) {
         break;
      }
   } while ((2.11 == (5.22 + iconeye5)) && assistF);
   let phoneZ = 5421478 <= iconplayA.size;
   do {
      iconplayA.set(`${moduleC}`, moduleC.length / 2);
      if (phoneZ) {
         break;
      }
   } while ((!main_xC.includes(`${iconplayA.size}`)) && phoneZ);
       let favoritee = 4.0;
      let sellS = favoritee <= 8174496.0;
      do {
         favoritee /= Math.max(3 ^ parseInt(`${favoritee}`), 4);
         if (sellS) {
            break;
         }
      } while (((favoritee + 2.98) == 3.33 || 3.52 == (2.98 + favoritee)) && sellS);
      if ((favoritee / 3.14) >= 5.11 || (favoritee / (Math.max(10, favoritee))) >= 3.14) {
          let package_7e = true;
          let penaltyshootnogoal8 = 2.0;
          let graphicsv = false;
         favoritee += 3 << (Math.min(Math.abs(parseInt(`${penaltyshootnogoal8}`)), 4));
         package_7e = (!package_7e ? graphicsv : package_7e);
         penaltyshootnogoal8 *= ((graphicsv ? 1 : 3) >> (Math.min(2, Math.abs((package_7e ? 2 : 2)))));
      }
         favoritee -= 1 - parseInt(`${favoritee}`);
      iconnointernetC = [cornerk.length % 3];
      main_xC += `${component7}`;
    if (!offline) {

      redgoalE = new Map([[moduleC, parseInt(`${benefitM}`)]]);
       let giftx = false;
       let ewarded2 = String.fromCharCode(99,111,110,115,116,114,97,105,110,101,100,95,120,95,57,50,0);
       let awayicono = 0.0;
      for (let b = 0; b < 2; b++) {
          let confirmationv = String.fromCharCode(100,101,118,105,100,101,95,99,95,57,50,0);
          let matchinactiveN = String.fromCharCode(115,114,112,95,101,95,52,50,0);
          let matchinactives = 2;
          let whistleorange6 = String.fromCharCode(116,114,97,110,115,99,111,100,101,95,109,95,57,53,0);
         ewarded2 += `${((giftx ? 1 : 1))}`;
         confirmationv = `${whistleorange6.length}`;
         matchinactiveN = `${(whistleorange6 == String.fromCharCode(122,0) ? whistleorange6.length : matchinactives)}`;
         matchinactives >>= Math.min(4, Math.abs(2));
      }
         giftx = 65 < ewarded2.length;
         ewarded2 = `${2 % (Math.max(7, parseInt(`${awayicono}`)))}`;
      while (2.34 < (1.16 - awayicono)) {
         giftx = ewarded2 == String.fromCharCode(122,0);
         break;
      }
         ewarded2 = `${ewarded2.length}`;
      let frame_um = giftx ? !giftx : giftx;
      do {
         giftx = (70 == ((!giftx ? ewarded2.length : 70) | ewarded2.length));
         if (frame_um) {
            break;
         }
      } while (frame_um && ((awayicono + 3.66) == 2.5));
      let views_ = String.fromCharCode(115,121,102,0) == ewarded2;
      do {
          let pathW = String.fromCharCode(121,95,55,52,95,106,99,109,97,115,116,101,114,0);
          let loginz = String.fromCharCode(100,105,97,108,105,110,103,95,55,95,57,51,0);
          let airbnbstarselectedx = 3.0;
          let libhermesd = 0;
         ewarded2 += `${(String.fromCharCode(99,0) == ewarded2 ? parseInt(`${awayicono}`) : ewarded2.length)}`;
         pathW += `${loginz.length}`;
         loginz = `${2 % (Math.max(9, libhermesd))}`;
         airbnbstarselectedx += parseFloat(`${parseInt(`${airbnbstarselectedx}`)}`);
         libhermesd %= Math.max(3, libhermesd / 1);
         if (views_) {
            break;
         }
      } while (views_ && (ewarded2.includes(`${giftx}`)));
      if (!ewarded2.startsWith(`${giftx}`)) {
          let attributedstringn = true;
          let basketballiconS = 5;
          let userb = String.fromCharCode(104,95,56,57,95,105,112,114,101,100,0);
          let splashW = true;
          let yellowscoreballg = 2;
         ewarded2 += `${2 >> (Math.min(Math.abs(parseInt(`${awayicono}`)), 1))}`;
         attributedstringn = 41 <= basketballiconS;
         basketballiconS /= Math.max(3, ((splashW ? 2 : 2) & basketballiconS));
         userb = `${(userb.length + (splashW ? 2 : 2))}`;
         yellowscoreballg <<= Math.min(5, Math.abs(1 / (Math.max(5, yellowscoreballg))));
      }
         ewarded2 = `${ewarded2.length + parseInt(`${awayicono}`)}`;
      component7 *= component7 | 3;
      iconnointernetC.push(cornerk.length / 1);
   while (main_xC.includes(`${iconplayA.size}`)) {
      iconplayA = new Map([[`${cornerk.length}`, cornerk.length]]);
      break;
   }
   let contextn = iconeye5 <= 8451833.0;
   do {
       let whitebellv: Map<any, any> = new Map([[String.fromCharCode(120,95,52,55,95,98,111,111,107,107,101,101,112,105,110,103,0),213], [String.fromCharCode(99,108,97,115,115,105,102,121,95,119,95,50,54,0),983], [String.fromCharCode(112,108,117,114,97,108,115,95,99,95,50,49,0),369]]);
       let sellmathbackground_ = String.fromCharCode(119,95,54,95,116,120,116,110,105,100,0);
       let over_ = String.fromCharCode(114,105,103,104,116,115,95,111,95,49,54,0);
          let greenarrowupT = String.fromCharCode(116,114,97,99,105,110,103,95,104,95,51,53,0);
          let floaterW = String.fromCharCode(97,100,100,115,95,122,95,49,52,0);
          let iconuserw = true;
         sellmathbackground_ += `${((iconuserw ? 1 : 3) % 1)}`;
         greenarrowupT += `${floaterW.length}`;
         floaterW += `${greenarrowupT.length & 2}`;
         iconuserw = floaterW.length <= greenarrowupT.length;
          let dangerJ: Map<any, any> = new Map([[String.fromCharCode(102,97,113,95,100,95,55,55,0),true ], [String.fromCharCode(120,95,53,54,0),true ], [String.fromCharCode(99,108,105,112,112,105,110,103,110,111,100,101,95,110,95,56,55,0),false ]]);
         whitebellv = new Map([[`${dangerJ.size}`, 3 * sellmathbackground_.length]]);
      if (!sellmathbackground_.endsWith(`${whitebellv.size}`)) {
          let nativeexz = true;
          let basketballmatchdetailbgy = String.fromCharCode(116,95,55,55,95,100,117,114,105,110,103,0);
          let matchinactiveR = 3.0;
         sellmathbackground_ += `${over_.length}`;
         nativeexz = basketballmatchdetailbgy == String.fromCharCode(101,0);
         basketballmatchdetailbgy = `${parseInt(`${matchinactiveR}`) / 3}`;
         matchinactiveR += 3 >> (Math.min(4, basketballmatchdetailbgy.length));
      }
          let liveshareB = String.fromCharCode(98,114,101,97,107,112,111,105,110,116,95,122,95,50,48,0);
          let dropdownj = 3.0;
         sellmathbackground_ = `${whitebellv.size >> (Math.min(Math.abs(3), 4))}`;
         liveshareB = `${1 ^ liveshareB.length}`;
         dropdownj -= parseInt(`${dropdownj}`) - liveshareB.length;
      while (sellmathbackground_.length > whitebellv.size) {
         sellmathbackground_ = `${sellmathbackground_.length & 3}`;
         break;
      }
      while (!sellmathbackground_.startsWith(`${whitebellv.size}`)) {
         sellmathbackground_ += `${whitebellv.size}`;
         break;
      }
      for (let k = 0; k < 1; k++) {
         whitebellv.set(`${sellmathbackground_}`, sellmathbackground_.length & whitebellv.size);
      }
      if ((sellmathbackground_.length + 4) == 2 && (sellmathbackground_.length + 4) == 2) {
         whitebellv.set(`${sellmathbackground_}`, 3 - whitebellv.size);
      }
         over_ += `${3 / (Math.max(4, sellmathbackground_.length))}`;
      iconeye5 += parseFloat(`${3 * over_.length}`);
      if (contextn) {
         break;
      }
   } while ((5.37 > (component7 / (Math.max(iconeye5, 1)))) && contextn);
      iconnointernetC.push(redgoalE.size);
      handleRefresh();
    }
  };

  useEffect(() => {
    const removeNetInfoSubscription = NetInfo.addEventListener(
      (state: NetInfoState) => {
        const offline = !(
          state.isConnected &&
          (state.isInternetReachable === true ||
            state.isInternetReachable === null
            ? true
            : false)
        );
        setIsOffline(offline);
      }
    );
    return () => removeNetInfoSubscription();
  }, []);

  const fetchData = async () => {
       let currentn = String.fromCharCode(109,101,115,104,101,115,95,112,95,52,55,0);
    let time_vC = 3;
    let release_eg5 = String.fromCharCode(115,99,104,101,109,101,115,95,116,95,57,57,0);
    let logoutc = 5.0;
    let awayteamfieldJ = 4.0;
    let valuesF = 3.0;
    let homeplayerh = 3.0;
    let hoverE = 3.0;
    let rootd = 4.0;
    let ccdfbdabcabbbedbL = String.fromCharCode(119,95,54,51,95,99,104,101,99,107,0);
    let libapminsightb3 = 1.0;
   for (let t = 0; t < 2; t++) {
       let main_yx = String.fromCharCode(97,112,112,108,105,99,97,116,105,111,110,95,117,95,50,55,0);
       let delegate_oca = String.fromCharCode(116,95,51,53,95,98,111,117,110,99,105,110,103,0);
       let shirt7 = 4.0;
       let scrollview7: Map<any, any> = new Map([[String.fromCharCode(117,95,52,55,95,97,112,112,101,97,114,101,100,0),402], [String.fromCharCode(106,95,49,54,95,100,105,115,112,97,116,99,104,105,110,103,0),97]]);
       let nbatrophyw: Map<any, any> = new Map([[String.fromCharCode(99,97,112,105,116,97,108,105,122,97,116,105,111,110,95,101,95,50,48,0),3], [String.fromCharCode(116,95,54,95,102,105,112,115,0),537]]);
         delegate_oca += `${(main_yx == String.fromCharCode(107,0) ? nbatrophyw.size : main_yx.length)}`;
         nbatrophyw = new Map([[`${nbatrophyw.size}`, nbatrophyw.size]]);
       let stationsv: Map<any, any> = new Map([[String.fromCharCode(120,95,55,55,95,104,112,101,108,100,115,112,0),987], [String.fromCharCode(112,110,105,101,108,115,97,100,100,95,99,95,55,49,0),612]]);
          let circleK: Map<any, any> = new Map([[String.fromCharCode(107,95,56,54,95,100,117,109,0),371], [String.fromCharCode(112,97,105,114,105,110,103,115,95,119,95,52,52,0),629], [String.fromCharCode(118,111,105,99,101,95,57,95,56,48,0),58]]);
          let modulew = String.fromCharCode(112,111,119,95,116,95,57,55,0);
         stationsv = new Map([[`${stationsv.size}`, delegate_oca.length | 2]]);
         circleK.set(`${modulew}`, 1);
         modulew += `${(String.fromCharCode(69,0) == modulew ? circleK.size : modulew.length)}`;
         shirt7 -= (delegate_oca == String.fromCharCode(105,0) ? delegate_oca.length : main_yx.length);
          let defaultbasketballbg4 = String.fromCharCode(112,114,105,110,116,118,97,108,95,106,95,52,49,0);
          let awayk: Map<any, any> = new Map([[String.fromCharCode(117,112,108,111,97,100,105,110,103,95,121,95,51,52,0),String.fromCharCode(97,118,102,109,116,95,106,95,54,51,0)], [String.fromCharCode(101,110,99,111,100,101,115,95,108,95,51,54,0),String.fromCharCode(117,95,53,49,95,112,101,114,115,105,115,116,97,110,116,0)], [String.fromCharCode(100,105,115,97,98,108,105,110,103,95,104,95,57,52,0),String.fromCharCode(115,97,118,101,114,95,116,95,56,52,0)]]);
         delegate_oca = `${1 << (Math.min(5, Math.abs(nbatrophyw.size)))}`;
         defaultbasketballbg4 = `${defaultbasketballbg4.length << (Math.min(Math.abs(2), 4))}`;
         awayk = new Map([[`${awayk.size}`, 3]]);
      if ((1 * stationsv.size) <= 2 || (stationsv.size * 1) <= 1) {
          let nodeb = false;
          let time_8W = true;
          let orangedownarrowG = 4.0;
          let leftO = String.fromCharCode(116,95,49,54,95,98,105,110,100,105,110,103,115,0);
         main_yx += `${parseInt(`${shirt7}`) << (Math.min(Math.abs(1), 2))}`;
         nodeb = 2.1 < orangedownarrowG && time_8W;
         time_8W = (55 <= ((time_8W ? 55 : leftO.length) * leftO.length));
         orangedownarrowG += parseFloat(`${leftO.length % 3}`);
      }
          let transferq = 2;
         scrollview7.set(`${nbatrophyw.size}`, scrollview7.size % (Math.max(3, 5)));
         transferq &= 2 + transferq;
      homeplayerh *= (String.fromCharCode(75,0) == ccdfbdabcabbbedbL ? ccdfbdabcabbbedbL.length : parseInt(`${rootd}`));
   }

    const data = await yysBaselineOrangedownarrow.getNativeList();

       let analyticsR = String.fromCharCode(118,95,49,50,95,101,120,99,108,117,100,101,115,0);
      for (let d = 0; d < 2; d++) {
         analyticsR = `${analyticsR.length % (Math.max(1, 2))}`;
      }
       let refreshborderlessR = String.fromCharCode(115,95,50,95,111,118,101,114,118,105,101,119,0);
       let chatbotphotor = String.fromCharCode(98,108,97,110,107,95,100,95,49,57,0);
         analyticsR += `${1 * analyticsR.length}`;
      release_eg5 = `${analyticsR.length}`;

    if (UMENG_CHANNEL === "GOOGLE_PLAY" && IS_ANDROID) {

   for (let e = 0; e < 3; e++) {
       let inactive5 = String.fromCharCode(115,99,114,97,112,101,95,103,95,55,48,0);
       let issubU = String.fromCharCode(120,95,55,51,95,115,121,110,99,104,114,111,110,111,117,115,0);
      for (let m = 0; m < 3; m++) {
         inactive5 += `${inactive5.length >> (Math.min(Math.abs(1), 5))}`;
      }
         issubU = "1";
      while (!inactive5.includes(issubU)) {
         inactive5 += `${inactive5.length % 2}`;
         break;
      }
         issubU += `${(String.fromCharCode(112,0) == issubU ? inactive5.length : issubU.length)}`;
          let mbnativet = String.fromCharCode(119,95,49,49,95,112,105,112,0);
          let viewsX = 5.0;
         inactive5 = `${2 % (Math.max(4, inactive5.length))}`;
         mbnativet += `${1 & mbnativet.length}`;
         viewsX /= Math.max((parseFloat(`${mbnativet == String.fromCharCode(101,0) ? parseInt(`${viewsX}`) : mbnativet.length}`)), 5);
          let manifestp: Array<any> = [108, 878, 272];
          let backl = 4.0;
          let redscoreballp = String.fromCharCode(101,120,112,101,114,105,109,101,110,116,97,108,95,54,95,51,53,0);
         inactive5 = `${issubU.length}`;
         manifestp = [parseInt(`${backl}`)];
         backl += parseFloat(`${manifestp.length}`);
         redscoreballp += "3";
      ccdfbdabcabbbedbL = "3";
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
            promoPrice:
              product.currency.currency_symbol +
              " " +
              product.product_promo_price,
            localizedPrice:
              product.currency.currency_symbol + " " + product.product_price,
            description: product.product_desc,
            subscriptionDays: product.product_value,
            zfOptions: [{
              payment_type_code: "GOOGLE_PAY",
              payment_type_name: "Google Pay",
              payment_type_icon: "gestureEpisodes.png",
            }],
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
            zfOptions: [{
              payment_type_code: "GOOGLE_PAY",
              payment_type_name: "Google Pay",
              payment_type_icon: "gestureEpisodes.png",
            }],
            productType: SUBSCRIPTION_TYPE,
          };
        });

      time_vC += 3;

        

   while (hoverE < 3.23) {
      homeplayerh *= (String.fromCharCode(109,0) == ccdfbdabcabbbedbL ? ccdfbdabcabbbedbL.length : parseInt(`${rootd}`));
      break;
   }
        const index12Months = subscription.findIndex(
          (item) => item.title === "12个月"
        );

   for (let m = 0; m < 3; m++) {
       let loadingE = 4.0;
       let sheetg = String.fromCharCode(109,111,100,105,102,105,101,114,115,95,57,95,49,53,0);
       let viewer0 = String.fromCharCode(105,95,54,95,100,105,97,108,111,103,115,0);
      if (viewer0 == String.fromCharCode(111,0)) {
         sheetg += `${viewer0.length}`;
      }
      let chinaR = loadingE <= 6744223.0;
      do {
         loadingE /= Math.max(1, 5);
         if (chinaR) {
            break;
         }
      } while (chinaR && (sheetg.length < loadingE));
         sheetg = "3";
       let photom = false;
       let hinit_jv = true;
         hinit_jv = (11 > (viewer0.length | (!photom ? viewer0.length : 11)));
      if (hinit_jv) {
          let with_q_Y: Map<any, any> = new Map([[String.fromCharCode(98,95,56,54,95,105,114,114,101,108,101,118,97,110,116,0),true ], [String.fromCharCode(112,95,54,50,95,110,118,100,101,99,0),false ], [String.fromCharCode(111,95,51,53,95,119,121,99,104,101,112,114,111,111,102,0),true ]]);
          let settingt = String.fromCharCode(115,116,101,97,108,95,51,95,51,49,0);
          let playercommonp = 3;
         viewer0 = `${(viewer0 == String.fromCharCode(119,0) ? viewer0.length : (hinit_jv ? 3 : 4))}`;
         with_q_Y.set(`${playercommonp}`, settingt.length & 1);
         settingt += `${with_q_Y.size}`;
         playercommonp &= 3 << (Math.min(3, Math.abs(with_q_Y.size)));
      }
       let javab = String.fromCharCode(105,111,115,117,114,102,97,99,101,95,108,95,53,49,0);
      if (sheetg.includes(`${viewer0.length}`)) {
         viewer0 = `${sheetg.length}`;
      }
      let statsnomoredata2 = sheetg == String.fromCharCode(103,111,116,111,107,0);
      do {
          let mbbannery: Array<any> = [String.fromCharCode(102,95,53,49,95,109,101,116,97,100,97,116,97,115,101,116,0), String.fromCharCode(120,95,51,52,95,112,114,111,106,101,99,116,105,111,110,115,0)];
          let whatsappI: Array<any> = [274, 999, 609];
          let dplusj = 0.0;
          let infoc = 3.0;
          let whistle6: Array<any> = [String.fromCharCode(117,95,51,54,95,99,111,110,99,117,114,114,101,110,116,0), String.fromCharCode(99,111,108,111,117,114,95,97,95,55,51,0)];
         sheetg = "3";
         mbbannery.push(2 << (Math.min(2, whatsappI.length)));
         whatsappI = [whatsappI.length - 3];
         dplusj -= parseFloat(`${parseInt(`${dplusj}`) >> (Math.min(5, Math.abs(parseInt(`${infoc}`))))}`);
         infoc -= parseFloat(`${2 * parseInt(`${infoc}`)}`);
         whistle6.push(whistle6.length);
         if (statsnomoredata2) {
            break;
         }
      } while (statsnomoredata2 && ((sheetg.length + 4) < 1));
      valuesF /= Math.max(4, parseInt(`${logoutc}`) & 3);
   }

        

       let reactnativejs7 = String.fromCharCode(107,95,53,53,95,111,99,99,117,112,105,101,100,0);
       let nativemoduleb = 2.0;
       let unselectedp = String.fromCharCode(108,95,54,95,109,101,116,101,114,0);
         nativemoduleb -= (String.fromCharCode(53,0) == unselectedp ? parseInt(`${nativemoduleb}`) : unselectedp.length);
         nativemoduleb *= 1 >> (Math.min(2, unselectedp.length));
      if (!reactnativejs7.startsWith(unselectedp)) {
         unselectedp += `${(String.fromCharCode(104,0) == unselectedp ? parseInt(`${nativemoduleb}`) : unselectedp.length)}`;
      }
         reactnativejs7 += `${unselectedp.length % (Math.max(reactnativejs7.length, 4))}`;
       let libavutile = 1.0;
       let bridgeJ = 3.0;
      for (let r = 0; r < 3; r++) {
         unselectedp += `${2 + parseInt(`${libavutile}`)}`;
      }
         libavutile -= parseFloat(`${parseInt(`${nativemoduleb}`)}`);
         libavutile -= parseFloat(`${1}`);
          let eyeopeni = String.fromCharCode(106,99,111,110,102,105,103,105,110,116,95,52,95,53,53,0);
         libavutile *= parseFloat(`${2 | eyeopeni.length}`);
      awayteamfieldJ += parseFloat(`${3}`);
        if (index12Months !== -1) {

       let promotionN = 5.0;
      for (let l = 0; l < 2; l++) {
         promotionN /= Math.max(parseFloat(`${parseInt(`${promotionN}`) | 1}`), 1);
      }
       let currentc = false;
      for (let r = 0; r < 1; r++) {
         currentc = currentc && 52.34 == promotionN;
      }
      libapminsightb3 -= parseInt(`${rootd}`) - parseInt(`${valuesF}`);
          const item12Months = subscription.splice(index12Months, 1)[0];

   while (5 == currentn.length) {
      currentn += `${currentn.length}`;
      break;
   }
          subscription.splice(1, 0, item12Months);
        }

        

   let libreactperfloggerjniA = logoutc <= 6276348.0;
   do {
      logoutc += parseFloat(`${ccdfbdabcabbbedbL.length}`);
      if (libreactperfloggerjniA) {
         break;
      }
   } while (libreactperfloggerjniA && ((logoutc - 2.43) > 3.40 || 2.43 > (rootd * logoutc)));
        

   if (3 >= (time_vC % 2) && 4.19 >= (parseFloat(`${time_vC}`) / (Math.max(logoutc, 3)))) {
       let streamingR = 3.0;
       let unselectedJ = 1.0;
       let whiteanimationliveL = 0.0;
      if (streamingR < unselectedJ) {
          let othermatchdetailbga: Array<any> = [587, 823];
          let iconbellactivei = 1.0;
         streamingR -= 2 + parseInt(`${streamingR}`);
         othermatchdetailbga.push(3 - othermatchdetailbga.length);
         iconbellactivei += othermatchdetailbga.length / 3;
      }
      let volumeC = 7743430.0 <= unselectedJ;
      do {
         unselectedJ /= Math.max(parseFloat(`${parseInt(`${whiteanimationliveL}`)}`), 5);
         if (volumeC) {
            break;
         }
      } while (volumeC && (streamingR <= 5.59));
      logoutc /= Math.max(4, parseFloat(`${currentn.length}`));
   }
        setOneTimeProducts(oneTime);

      homeplayerh /= Math.max(5, parseInt(`${valuesF}`) * currentn.length);
        setMembershipProducts(subscription);

   let shootL = 8413425.0 >= hoverE;
   do {
      hoverE += parseFloat(`${parseInt(`${homeplayerh}`)}`);
      if (shootL) {
         break;
      }
   } while (((awayteamfieldJ / (Math.max(hoverE, 1))) >= 2.9 || 2.9 >= (awayteamfieldJ / (Math.max(hoverE, 8)))) && shootL);
        setTimeout(() => {

   let iconmegaphoneE = 5286042 <= release_eg5.length;
   do {
       let gestureR = String.fromCharCode(107,95,53,57,95,115,105,122,105,110,103,0);
         gestureR = `${gestureR.length}`;
      while (gestureR != gestureR) {
          let sharedX = 1.0;
          let sourceB: Array<any> = [935, 110, 131];
          let upgradeO = String.fromCharCode(105,108,98,99,95,113,95,53,49,0);
         gestureR += "1";
         sharedX += parseFloat(`${upgradeO.length}`);
         sourceB.push(sourceB.length % (Math.max(1, 2)));
         upgradeO = `${parseInt(`${sharedX}`)}`;
         break;
      }
         gestureR += `${gestureR.length + 2}`;
      release_eg5 = `${time_vC}`;
      if (iconmegaphoneE) {
         break;
      }
   } while (((release_eg5.length + rootd) > 5.77) && iconmegaphoneE);
          setFetching(false);
        }, 1000);
      }
    } else {

   for (let r = 0; r < 2; r++) {
       let rightu = 2.0;
       let libfile9 = 3.0;
       let twitterp: Array<any> = [331, 53];
       let coreY = String.fromCharCode(115,107,101,119,95,105,95,54,48,0);
       let matchactivez = 4.0;
      for (let w = 0; w < 1; w++) {
         matchactivez *= parseFloat(`${parseInt(`${libfile9}`)}`);
      }
      let cancelM = twitterp.length <= 5015617;
      do {
         twitterp.push(parseInt(`${rightu}`) + 3);
         if (cancelM) {
            break;
         }
      } while ((3 >= twitterp.length) && cancelM);
         libfile9 /= Math.max(twitterp.length + parseInt(`${libfile9}`), 1);
      while (4 == (coreY.length * parseInt(`${libfile9}`))) {
         coreY += `${twitterp.length - coreY.length}`;
         break;
      }
       let feedbacky: Array<any> = [942, 336, 914];
          let activeR = String.fromCharCode(98,101,105,110,103,95,118,95,50,56,0);
          let refresh_ = String.fromCharCode(100,95,56,56,95,99,114,111,115,115,102,97,100,101,0);
         feedbacky = [parseInt(`${rightu}`)];
         activeR = `${(String.fromCharCode(81,0) == activeR ? activeR.length : refresh_.length)}`;
         refresh_ += `${(String.fromCharCode(121,0) == activeR ? refresh_.length : activeR.length)}`;
          let topond: Map<any, any> = new Map([[String.fromCharCode(115,101,110,100,105,110,103,95,51,95,55,52,0),String.fromCharCode(99,95,57,95,97,114,99,104,105,116,101,99,116,117,114,101,0)], [String.fromCharCode(97,117,116,111,100,101,108,101,116,101,95,111,95,52,0),String.fromCharCode(99,111,109,112,97,114,105,115,111,110,95,108,95,51,57,0)], [String.fromCharCode(118,95,49,54,95,105,110,116,114,101,97,100,119,114,105,116,101,0),String.fromCharCode(105,110,116,101,114,97,99,116,105,111,110,95,53,95,50,49,0)]]);
         libfile9 /= Math.max(1, 1 & coreY.length);
         topond.set(`${topond.size}`, 1 << (Math.min(2, Math.abs(topond.size))));
          let privacy6 = 1.0;
          let analyticsn = String.fromCharCode(98,95,49,51,95,112,110,103,100,115,112,0);
          let listx = String.fromCharCode(97,98,108,101,95,56,95,51,51,0);
         feedbacky.push(listx.length);
         privacy6 -= parseInt(`${privacy6}`) >> (Math.min(analyticsn.length, 2));
         analyticsn += `${parseInt(`${privacy6}`)}`;
         listx = `${parseInt(`${privacy6}`) / (Math.max(1, 3))}`;
      if (!feedbacky.includes(twitterp.length)) {
         twitterp = [parseInt(`${matchactivez}`) >> (Math.min(2, Math.abs(1)))];
      }
         coreY += "2";
         matchactivez /= Math.max(parseFloat(`${2}`), 5);
      for (let e = 0; e < 1; e++) {
          let imagemanagerg = String.fromCharCode(122,95,53,50,95,116,114,117,110,99,97,116,101,100,0);
          let step4 = 4.0;
          let homeloadingp = 0.0;
          let sharewhite_ = String.fromCharCode(112,101,111,112,108,101,95,50,95,55,53,0);
         rightu /= Math.max(sharewhite_.length, 3);
         imagemanagerg = `${1 / (Math.max(parseInt(`${step4}`), 5))}`;
         step4 /= Math.max(parseInt(`${homeloadingp}`) >> (Math.min(5, Math.abs(parseInt(`${step4}`)))), 2);
         homeloadingp += parseFloat(`${1 + parseInt(`${homeloadingp}`)}`);
         sharewhite_ += "2";
      }
      while ((libfile9 - 3.90) <= 2.18) {
         libfile9 += feedbacky.length;
         break;
      }
          let clockE = 4.0;
         libfile9 /= Math.max(1, 5);
         clockE += parseFloat(`${1}`);
      while (2.81 >= (libfile9 - 2.61) || 3.12 >= (libfile9 - 2.61)) {
         coreY += `${2 + feedbacky.length}`;
         break;
      }
      libapminsightb3 /= Math.max(5, 1);
   }
      let siFang: Array<promoMembershipModel>;

      if (data) {
        siFang = data['4_fang_items'].map((product: any) => {
          return {
            productId: product.product_id,
            productSKU: product.product_ios_product_id,
            title: product.product_name,
            price: product.product_price,
            promoPrice:
              product.currency.currency_symbol +
              " " +
              product.product_price,
            localizedPrice:
              product.currency.currency_symbol + " " + product.product_fake_price,
            description: product.product_desc,
            subscriptionDays: product.product_value,
            zfOptions: product.payment_options,
            productType: SI_FANG,
          };
        });

      libapminsightb3 -= parseInt(`${libapminsightb3}`);

        

      currentn += "2";
        

   for (let q = 0; q < 1; q++) {
      ccdfbdabcabbbedbL = `${parseInt(`${valuesF}`)}`;
   }
        setMembershipProducts(siFang);

   let mbjscommon4 = 9120694 <= ccdfbdabcabbbedbL.length;
   do {
      ccdfbdabcabbbedbL = `${release_eg5.length}`;
      if (mbjscommon4) {
         break;
      }
   } while ((1.25 >= (5.46 - awayteamfieldJ)) && mbjscommon4);
        setFetching(false);
      }
    }
  };

  const handleGetGoogleProduct = async () => {
       let matchf = String.fromCharCode(115,95,57,52,95,110,97,108,115,0);
    let submity = 5;
    let awayteamfieldy = String.fromCharCode(116,95,55,57,95,102,108,111,97,116,0);
    let holderT: Array<any> = [560, 431, 479];
    let changeK = 0.0;
    let anytimep = 0.0;
    let moreL = 4.0;
    let langkey8 = String.fromCharCode(121,95,50,53,95,115,111,102,116,0);
    let malaysiax = String.fromCharCode(116,97,110,115,105,103,95,121,95,52,51,0);
    let servicef = 4.0;
    let iconwatchnowk = String.fromCharCode(108,108,118,105,100,100,115,112,101,110,99,95,122,95,56,54,0);
    let reactnativeultimatelistview7 = 1.0;
   if ((anytimep / 4.23) <= 3.54 && 4.23 <= (moreL / (Math.max(9, anytimep)))) {
       let readh = String.fromCharCode(97,110,105,109,97,116,101,95,51,95,50,50,0);
      for (let c = 0; c < 2; c++) {
         readh += `${readh.length}`;
      }
       let libfbH = 1;
         readh = `${readh.length}`;
      moreL /= Math.max(5, parseFloat(`${1 / (Math.max(7, malaysiax.length))}`));
   }
   while (awayteamfieldy.length < 5) {
      awayteamfieldy = `${holderT.length ^ 2}`;
      break;
   }
   if (malaysiax.startsWith(`${holderT.length}`)) {
      holderT.push(parseInt(`${changeK}`) * holderT.length);
   }
      submity -= awayteamfieldy.length;
   while (langkey8.includes(`${servicef}`)) {
       let championL = String.fromCharCode(118,97,110,99,95,99,95,55,55,0);
       let libavformatb = false;
       let showmoreE = 0.0;
       let updates7 = String.fromCharCode(114,95,50,52,95,115,100,97,108,108,111,99,120,0);
       let muted1 = false;
         libavformatb = !libavformatb && !muted1;
       let sharemodalS: Map<any, any> = new Map([[String.fromCharCode(99,104,97,112,95,116,95,53,48,0),String.fromCharCode(100,95,57,53,95,99,98,117,102,0)], [String.fromCharCode(116,95,49,95,114,97,105,115,101,0),String.fromCharCode(100,101,99,111,100,101,112,108,97,110,101,95,118,95,54,0)], [String.fromCharCode(98,101,99,97,117,115,101,95,56,95,52,56,0),String.fromCharCode(99,95,49,49,95,117,110,101,115,99,97,112,101,0)]]);
         libavformatb = 64.41 > showmoreE;
          let wifirouterA = 4.0;
         sharemodalS = new Map([[`${sharemodalS.size}`, parseInt(`${showmoreE}`)]]);
         wifirouterA *= parseFloat(`${parseInt(`${wifirouterA}`) % 1}`);
       let incident0 = String.fromCharCode(109,95,57,52,95,105,97,116,0);
       let pushv = String.fromCharCode(114,101,112,111,115,105,116,105,111,110,95,100,95,53,48,0);
          let screenv: Map<any, any> = new Map([[String.fromCharCode(100,111,99,115,105,122,101,95,115,95,55,50,0),662], [String.fromCharCode(107,101,121,105,100,95,49,95,56,49,0),455], [String.fromCharCode(107,95,50,50,95,100,101,97,108,108,111,99,97,116,101,100,0),326]]);
          let weibo7 = String.fromCharCode(111,95,56,49,95,115,104,111,119,105,110,103,0);
         showmoreE *= (String.fromCharCode(121,0) == weibo7 ? pushv.length : weibo7.length);
         screenv = new Map([[`${screenv.size}`, screenv.size & screenv.size]]);
         incident0 += `${((muted1 ? 3 : 2))}`;
      while (updates7.startsWith(`${muted1}`)) {
         updates7 += `${pushv.length}`;
         break;
      }
       let whatsappX = 5.0;
      if (5.8 == whatsappX && (whatsappX + 5.8) == 5.99) {
         muted1 = incident0.length >= parseInt(`${whatsappX}`);
      }
         updates7 = `${(String.fromCharCode(82,0) == updates7 ? updates7.length : (muted1 ? 4 : 1))}`;
         libavformatb = showmoreE <= 7.54;
      for (let s = 0; s < 3; s++) {
         whatsappX *= parseFloat(`${1}`);
      }
          let statisticsinactive9 = true;
         whatsappX += parseFloat(`${updates7.length}`);
         statisticsinactive9 = (!statisticsinactive9 ? !statisticsinactive9 : statisticsinactive9);
      if (4 > pushv.length) {
         whatsappX -= (parseFloat(`${(libavformatb ? 1 : 1) << (Math.min(3, Math.abs(2)))}`));
      }
      langkey8 = "2";
      championL += `${championL.length}`;
      break;
   }
   let upgradeS = 8741624.0 <= anytimep;
   do {
       let borderlessY = String.fromCharCode(112,95,57,56,95,121,115,108,111,103,0);
       let dycreatorr: Array<any> = [652, 702];
       let uimanagerA: Array<any> = [177, 334];
       let vietnamY = false;
       let matchinactivej = String.fromCharCode(102,95,56,95,105,102,97,109,115,103,0);
          let defaultpredictionprofileg = 4.0;
          let flipperT = String.fromCharCode(112,95,57,50,95,99,102,109,116,0);
          let libreanimatedT = String.fromCharCode(108,95,49,52,95,107,109,115,103,114,97,98,0);
         vietnamY = 12 <= matchinactivej.length;
         defaultpredictionprofileg *= parseFloat(`${flipperT.length}`);
         flipperT = `${3 | libreanimatedT.length}`;
         libreanimatedT += `${flipperT.length}`;
      let shootb = 9205247 <= dycreatorr.length;
      do {
         dycreatorr.push((uimanagerA.length * (vietnamY ? 2 : 4)));
         if (shootb) {
            break;
         }
      } while ((!uimanagerA.includes(dycreatorr.length)) && shootb);
      for (let h = 0; h < 3; h++) {
          let graphicsZ = 5.0;
         borderlessY = `${parseInt(`${graphicsZ}`) / (Math.max(3, dycreatorr.length))}`;
      }
          let expandu: Map<any, any> = new Map([[String.fromCharCode(105,110,100,97,116,97,95,119,95,49,51,0),382], [String.fromCharCode(119,95,57,56,95,115,97,116,105,115,102,105,101,100,0),151]]);
          let redgoal5 = String.fromCharCode(105,95,57,56,95,100,105,115,99,117,115,115,105,111,110,0);
          let unselectedN = false;
         borderlessY += `${expandu.size & 3}`;
         expandu = new Map([[`${unselectedN}`, ((unselectedN ? 5 : 3) % (Math.max(1, 7)))]]);
         redgoal5 = `${(redgoal5.length + (unselectedN ? 1 : 3))}`;
      for (let o = 0; o < 3; o++) {
          let splashU = 0;
          let basketballW: Map<any, any> = new Map([[String.fromCharCode(120,95,56,55,95,115,121,110,99,109,97,114,107,101,114,0),392], [String.fromCharCode(114,95,57,55,95,112,114,105,109,0),585]]);
          let collection8 = 5.0;
         matchinactivej += "2";
         splashU |= 3 % (Math.max(4, parseInt(`${collection8}`)));
         basketballW.set(`${collection8}`, parseInt(`${collection8}`) - basketballW.size);
      }
      if (!borderlessY.endsWith(`${dycreatorr.length}`)) {
          let overu = 2;
          let eyeopenr = String.fromCharCode(99,114,111,119,100,105,110,95,100,95,52,48,0);
          let codei: Array<any> = [735, 782];
          let sellH = String.fromCharCode(113,95,56,57,95,115,101,110,100,101,114,115,0);
          let subs4 = String.fromCharCode(97,115,115,111,99,95,98,95,52,52,0);
         borderlessY += `${overu & 1}`;
         overu /= Math.max(2 % (Math.max(5, eyeopenr.length)), 5);
         eyeopenr += `${subs4.length - eyeopenr.length}`;
         codei.push(subs4.length % (Math.max(6, codei.length)));
         sellH += `${codei.length % 1}`;
      }
         matchinactivej += `${dycreatorr.length >> (Math.min(Math.abs(1), 4))}`;
      while (!borderlessY.includes(`${uimanagerA.length}`)) {
         borderlessY += `${matchinactivej.length & dycreatorr.length}`;
         break;
      }
      let iconqqP = matchinactivej == String.fromCharCode(119,49,102,52,107,0);
      do {
         matchinactivej += `${(borderlessY.length % (Math.max(2, (vietnamY ? 2 : 2))))}`;
         if (iconqqP) {
            break;
         }
      } while (iconqqP && (5 < (matchinactivej.length * uimanagerA.length) && 1 < (5 * matchinactivej.length)));
          let livenodatabgimgy = String.fromCharCode(97,100,100,111,112,95,116,95,51,56,0);
         borderlessY += `${uimanagerA.length >> (Math.min(matchinactivej.length, 5))}`;
         livenodatabgimgy += `${2 | livenodatabgimgy.length}`;
         matchinactivej = `${dycreatorr.length}`;
         borderlessY = `${3 * uimanagerA.length}`;
      let iconclosewhitewithbge = 5719095 >= dycreatorr.length;
      do {
         dycreatorr = [dycreatorr.length + borderlessY.length];
         if (iconclosewhitewithbge) {
            break;
         }
      } while (iconclosewhitewithbge && ((2 | borderlessY.length) > 1 && 2 > (dycreatorr.length | borderlessY.length)));
      if (!matchinactivej.endsWith(`${uimanagerA.length}`)) {
          let umengz: Array<any> = [55, 165];
          let macauN = 5.0;
          let readl = 5;
         matchinactivej = "1";
         umengz = [umengz.length];
         macauN += parseInt(`${macauN}`) / (Math.max(umengz.length, 3));
         readl >>= Math.min(Math.abs(readl + 2), 4);
      }
      for (let f = 0; f < 1; f++) {
         dycreatorr = [((vietnamY ? 2 : 2))];
      }
      anytimep /= Math.max(1, parseInt(`${changeK}`) << (Math.min(1, Math.abs(parseInt(`${servicef}`)))));
      if (upgradeS) {
         break;
      }
   } while ((3.56 == (anytimep * servicef)) && upgradeS);
   let listQ = servicef >= 5779807.0;
   do {
       let imagesn = false;
       let defaultteamH: Array<any> = [String.fromCharCode(113,95,57,56,95,115,101,113,117,101,110,99,101,114,0), String.fromCharCode(108,95,49,56,95,116,111,107,101,104,0)];
       let iconeyer = 5.0;
          let libfbjnix = 5.0;
         defaultteamH = [3 % (Math.max(parseInt(`${iconeyer}`), 5))];
         libfbjnix *= parseFloat(`${parseInt(`${libfbjnix}`)}`);
          let large8: Array<any> = [802, 289];
         imagesn = defaultteamH.length == parseInt(`${iconeyer}`);
         large8.push(1);
      while (4 == (defaultteamH.length % (Math.max(3, 4))) && !imagesn) {
         imagesn = 92 == defaultteamH.length || 4.40 == iconeyer;
         break;
      }
      for (let b = 0; b < 1; b++) {
         defaultteamH.push(2);
      }
       let encrypt9 = String.fromCharCode(99,97,98,97,99,95,116,95,56,54,0);
       let combine8 = String.fromCharCode(99,111,114,114,101,115,112,111,110,100,101,110,116,115,95,97,95,53,54,0);
          let shirt1: Map<any, any> = new Map([[String.fromCharCode(115,95,54,51,95,115,110,97,107,101,0),860], [String.fromCharCode(98,95,49,51,95,116,97,112,102,105,108,116,101,114,0),565]]);
         encrypt9 += `${defaultteamH.length}`;
         shirt1.set(`${shirt1.size}`, shirt1.size);
         iconeyer += 2 - combine8.length;
         encrypt9 += `${defaultteamH.length << (Math.min(Math.abs(2), 4))}`;
       let shareB = String.fromCharCode(103,95,50,55,0);
      servicef -= parseInt(`${moreL}`);
      if (listQ) {
         break;
      }
   } while ((2.95 <= (2.89 * servicef)) && listQ);

    try {
      await getProducts({ skus: iap_skus });
      await getSubscriptions({ skus: subs_skus });
    } catch (err) {

   let cross7 = holderT.length <= 7486490;
   do {
      holderT = [3];
      if (cross7) {
         break;
      }
   } while ((changeK > 4.67) && cross7);
   if (3 < (langkey8.length % 3)) {
       let delegate_267 = 5;
       let reactU = 0;
       let bellf = true;
       let inactiveZ = String.fromCharCode(99,117,100,97,117,112,108,111,97,100,95,112,95,56,56,0);
       let apps9: Array<any> = [640, 223];
      if (inactiveZ.includes(`${bellf}`)) {
         bellf = !bellf;
      }
      let brightnessE = bellf ? !bellf : bellf;
      do {
         bellf = apps9.length == reactU;
         if (brightnessE) {
            break;
         }
      } while ((!bellf) && brightnessE);
         reactU >>= Math.min(Math.abs(1), 1);
      while (4 == (4 ^ inactiveZ.length) || 3 == (4 ^ inactiveZ.length)) {
          let basketballawayteamo = String.fromCharCode(110,95,57,52,95,105,110,112,108,105,99,105,116,101,108,121,0);
          let template__V: Array<any> = [92, 806, 732];
          let castS: Map<any, any> = new Map([[String.fromCharCode(122,95,52,51,95,102,114,111,110,116,0),String.fromCharCode(105,110,100,101,120,95,112,95,50,51,0)], [String.fromCharCode(109,97,116,99,104,101,100,95,57,95,57,53,0),String.fromCharCode(99,111,112,116,115,95,53,95,49,53,0)], [String.fromCharCode(100,101,108,105,109,105,116,101,114,115,95,97,95,51,56,0),String.fromCharCode(99,117,118,105,100,95,48,95,53,56,0)]]);
          let playp: Array<any> = [387, 835];
          let acceptedy: Map<any, any> = new Map([[String.fromCharCode(105,95,52,55,95,103,105,102,0),true ], [String.fromCharCode(100,97,121,115,95,120,95,51,52,0),false ], [String.fromCharCode(106,95,51,57,95,102,111,108,108,111,119,0),false ]]);
         reactU ^= 2 & inactiveZ.length;
         basketballawayteamo = `${3 | playp.length}`;
         template__V = [castS.size | playp.length];
         castS.set(`${playp.length}`, playp.length | acceptedy.size);
         acceptedy = new Map([[`${castS.size}`, playp.length - castS.size]]);
         break;
      }
         inactiveZ = `${apps9.length + 1}`;
          let commentE = String.fromCharCode(99,112,108,115,99,97,108,101,115,95,101,95,51,54,0);
         inactiveZ += `${delegate_267}`;
         commentE += "1";
         inactiveZ += `${reactU}`;
       let n_imagel = String.fromCharCode(99,111,101,102,102,105,99,105,101,110,116,95,105,95,57,51,0);
       let questiconY = String.fromCharCode(99,95,49,50,95,121,112,114,101,100,105,99,116,105,111,110,0);
      let iconmegaphoneK = 6109178 >= delegate_267;
      do {
         delegate_267 <<= Math.min(2, apps9.length);
         if (iconmegaphoneK) {
            break;
         }
      } while ((5 >= (5 | delegate_267)) && iconmegaphoneK);
         inactiveZ += `${reactU}`;
      while (!bellf || inactiveZ.length > 3) {
         inactiveZ = `${inactiveZ.length}`;
         break;
      }
      let valuesB = bellf ? !bellf : bellf;
      do {
         bellf = 33 == inactiveZ.length || reactU == 33;
         if (valuesB) {
            break;
         }
      } while (valuesB && (bellf));
         reactU *= (2 >> (Math.min(4, Math.abs((bellf ? 5 : 5)))));
          let paginationd = false;
         inactiveZ += "2";
         paginationd = !paginationd || paginationd;
      let awayplayerk = n_imagel.length >= 7023693;
      do {
         n_imagel = `${apps9.length}`;
         if (awayplayerk) {
            break;
         }
      } while (awayplayerk && (2 >= (1 % (Math.max(2, apps9.length))) && (1 % (Math.max(2, n_imagel.length))) >= 1));
      moreL -= (parseFloat(`${String.fromCharCode(85,0) == malaysiax ? (bellf ? 1 : 1) : malaysiax.length}`));
   }
      malaysiax += `${submity}`;
      holderT.push(1 ^ parseInt(`${changeK}`));
       let eventF = String.fromCharCode(115,105,103,110,105,102,105,99,97,110,100,95,115,95,51,51,0);
       let taiwans = String.fromCharCode(115,97,116,105,115,102,105,101,100,95,55,95,57,57,0);
       let material2 = String.fromCharCode(115,95,57,51,95,109,105,108,108,101,114,0);
       let mbnativeadvancedu = String.fromCharCode(98,110,108,101,95,110,95,57,50,0);
         taiwans = `${mbnativeadvancedu.length}`;
       let listD = String.fromCharCode(104,97,115,104,107,101,121,95,48,95,57,51,0);
       let footballfieldA = String.fromCharCode(111,95,55,50,95,112,108,97,110,0);
         material2 += `${(taiwans == String.fromCharCode(87,0) ? taiwans.length : eventF.length)}`;
         footballfieldA = `${material2.length / (Math.max(10, listD.length))}`;
      if (material2.includes(`${eventF.length}`)) {
          let videobufferloadingP = String.fromCharCode(113,95,53,55,95,114,97,100,105,97,108,0);
          let dragf = true;
          let notificationfilledr: Map<any, any> = new Map([[String.fromCharCode(111,95,57,48,95,115,98,105,116,115,0),174], [String.fromCharCode(102,111,114,109,97,116,116,101,100,95,102,95,55,0),310]]);
          let sentry0 = true;
         eventF += "2";
         videobufferloadingP = `${videobufferloadingP.length * 2}`;
         dragf = notificationfilledr.size == 35 && !dragf;
         notificationfilledr = new Map([[`${dragf}`, (videobufferloadingP == String.fromCharCode(100,0) ? videobufferloadingP.length : (dragf ? 3 : 5))]]);
         sentry0 = !videobufferloadingP.includes(`${dragf}`);
      }
          let subtextX = true;
         taiwans += `${eventF.length * 1}`;
         subtextX = (!subtextX ? !subtextX : !subtextX);
          let benefitw: Map<any, any> = new Map([[String.fromCharCode(107,95,57,50,95,116,97,112,112,105,110,103,0),817], [String.fromCharCode(109,95,49,51,95,116,101,108,108,0),637], [String.fromCharCode(101,120,112,114,101,115,115,95,115,95,49,53,0),871]]);
         footballfieldA = "1";
         benefitw = new Map([[`${benefitw.size}`, benefitw.size]]);
         taiwans = `${listD.length}`;
      submity |= parseInt(`${anytimep}`);
   let java8 = 5892841 >= submity;
   do {
      submity >>= Math.min(5, Math.abs(submity));
      if (java8) {
         break;
      }
   } while ((servicef >= 5.29) && java8);
   for (let k = 0; k < 3; k++) {
      malaysiax += "3";
   }
      console.log("error when get product from google play: ", err);
    }
  };

  useEffect(() => {
    setWidth(Number(Dimensions.get("window").width));
    setHeight(Number(Dimensions.get("window").height));
    fetchData();
  }, []);

  useEffect(() => {
    if (connected && (UMENG_CHANNEL === "GOOGLE_PLAY" && IS_ANDROID)) {
      console.log('get product of google play dbefjndsvb')
      handleGetGoogleProduct();
    }
  }, [connected]);

  useEffect(() => {
    if (membershipProducts) {
      const defaultMembership = membershipProducts.find(
        (product) => (UMENG_CHANNEL === "GOOGLE_PLAY" && IS_ANDROID) ? product.title === "1个月" : product.title === "12个月"
      );
      if (defaultMembership) {
        setSelectedMembership(defaultMembership);
      }
    }
  }, [membershipProducts]);

  useEffect(() => {
    if (membershipSelected && membershipSelected.zfOptions.length) {
      setZfOptions(membershipSelected.zfOptions);
      setSelectedZf(membershipSelected.zfOptions[0].payment_type_code);
    }
  }, [membershipSelected]);

  const handlePurchase = async () => {
       let awaya = false;
    let leakcheckerM = String.fromCharCode(100,111,119,110,115,99,97,108,101,95,122,95,49,50,0);
    let bootsplashk: Map<any, any> = new Map([[String.fromCharCode(120,95,55,48,95,119,101,101,107,100,97,121,0),902], [String.fromCharCode(100,95,56,49,95,102,97,115,116,116,101,115,116,0),551]]);
    let suboutS = 3.0;
    let libcxxcomponentsB = 5.0;
    let areaO = String.fromCharCode(100,95,56,56,95,108,111,103,103,101,114,0);
    let mimoh = String.fromCharCode(116,95,53,53,95,100,105,115,99,111,110,116,105,103,117,111,117,115,0);
    let libjsinspectoro = 5;
    let dangerV = 2.0;
    let routerz = 5.0;
    let promotionH = 2.0;
       let liveendmodallogoK = String.fromCharCode(121,95,49,52,95,114,101,100,97,99,116,101,100,0);
       let airbnbstarK = String.fromCharCode(105,95,53,48,95,97,114,116,105,99,108,101,115,0);
       let layoutN = true;
         airbnbstarK += `${liveendmodallogoK.length}`;
      let defaultfootballbgX = layoutN ? !layoutN : layoutN;
      do {
         layoutN = ((liveendmodallogoK.length & (layoutN ? liveendmodallogoK.length : 77)) > 77);
         if (defaultfootballbgX) {
            break;
         }
      } while ((!layoutN) && defaultfootballbgX);
         liveendmodallogoK += `${(String.fromCharCode(97,0) == liveendmodallogoK ? (layoutN ? 4 : 1) : liveendmodallogoK.length)}`;
          let sigmobK = String.fromCharCode(101,110,117,109,95,112,95,50,0);
          let libavfilterG = true;
         airbnbstarK += `${((layoutN ? 3 : 3) / (Math.max(2, 4)))}`;
         sigmobK += `${(sigmobK.length >> (Math.min(3, Math.abs((libavfilterG ? 5 : 5)))))}`;
         libavfilterG = !libavfilterG;
       let mbnativek = String.fromCharCode(113,95,50,50,95,101,110,100,112,111,105,110,116,115,0);
       let kuaishouy = String.fromCharCode(113,95,56,95,117,112,108,111,97,100,0);
      leakcheckerM = `${1 + liveendmodallogoK.length}`;

    setIsBtnEnable(false);

      suboutS -= parseFloat(`${1 << (Math.min(4, mimoh.length))}`);
    try {

   if (mimoh.length == 2 && awaya) {
       let descu = true;
      for (let k = 0; k < 2; k++) {
          let customv = 5;
          let gnewsshare8: Map<any, any> = new Map([[String.fromCharCode(100,116,115,104,100,95,107,95,55,54,0),119], [String.fromCharCode(116,95,56,48,95,114,103,116,99,0),621]]);
         descu = customv > 71 || descu;
         customv *= 1 & gnewsshare8.size;
         gnewsshare8 = new Map([[`${gnewsshare8.size}`, 1 << (Math.min(4, Math.abs(gnewsshare8.size)))]]);
      }
      let champion_ = descu ? !descu : descu;
      do {
         descu = !descu;
         if (champion_) {
            break;
         }
      } while (champion_ && (descu));
      let movies8 = descu ? !descu : descu;
      do {
          let iconclosewhitewithbgp: Map<any, any> = new Map([[String.fromCharCode(105,110,99,108,117,100,105,110,103,95,107,95,51,48,0),String.fromCharCode(114,101,113,117,97,110,116,95,122,95,55,52,0)], [String.fromCharCode(97,95,51,49,95,109,97,114,115,104,97,108,0),String.fromCharCode(109,101,109,111,114,121,115,116,114,101,97,109,95,52,95,52,53,0)], [String.fromCharCode(98,95,50,53,95,108,111,116,116,105,101,118,105,101,119,0),String.fromCharCode(109,118,115,97,100,95,49,95,53,53,0)]]);
          let arrowupv = 1.0;
          let iconsetting9 = 5.0;
         descu = 54 > iconclosewhitewithbgp.size;
         iconclosewhitewithbgp.set(`${arrowupv}`, 1 / (Math.max(9, parseInt(`${iconsetting9}`))));
         arrowupv += parseFloat(`${parseInt(`${arrowupv}`) * 2}`);
         iconsetting9 *= parseInt(`${arrowupv}`);
         if (movies8) {
            break;
         }
      } while (movies8 && (!descu));
      awaya = 1 <= mimoh.length;
   }
      setIsVisible(true);

   for (let d = 0; d < 2; d++) {
      areaO += `${parseInt(`${dangerV}`) | 2}`;
   }

      if (zfSelected === "GOOGLE_PAY") {

   while (1 <= bootsplashk.size) {
       let iconclosewhitewithbgy = 5.0;
       let textlayoutmanagern = 0.0;
       let schedulerV: Array<any> = [240, 653, 660];
         textlayoutmanagern *= schedulerV.length * parseInt(`${textlayoutmanagern}`);
      for (let v = 0; v < 1; v++) {
         textlayoutmanagern /= Math.max(2, 1);
      }
          let arrowrightY = 0.0;
          let matchdetailbgB = false;
          let sell7 = 0.0;
         schedulerV.push(1 >> (Math.min(Math.abs(parseInt(`${textlayoutmanagern}`)), 5)));
         arrowrightY -= 1;
         matchdetailbgB = !matchdetailbgB;
         sell7 /= Math.max((parseFloat(`${(matchdetailbgB ? 4 : 1) / (Math.max(parseInt(`${arrowrightY}`), 7))}`)), 2);
         iconclosewhitewithbgy /= Math.max(2, 1);
      if (2 < schedulerV.length) {
         schedulerV = [1 % (Math.max(parseInt(`${iconclosewhitewithbgy}`), 6))];
      }
         iconclosewhitewithbgy -= schedulerV.length;
       let baiduc = 5.0;
       let screenJ = 1.0;
      for (let u = 0; u < 1; u++) {
         baiduc *= parseInt(`${screenJ}`) & 3;
      }
          let blacku = true;
          let chatroombackgroundJ = String.fromCharCode(116,114,105,112,95,119,95,53,52,0);
          let i_lockM = String.fromCharCode(118,116,97,98,95,55,95,51,48,0);
         iconclosewhitewithbgy /= Math.max(4, parseInt(`${baiduc}`));
         blacku = !chatroombackgroundJ.includes(`${blacku}`);
         chatroombackgroundJ += `${chatroombackgroundJ.length % 3}`;
         i_lockM = `${(i_lockM.length >> (Math.min(1, Math.abs((blacku ? 1 : 3)))))}`;
      bootsplashk.set(`${libjsinspectoro}`, schedulerV.length ^ 2);
      break;
   }
        console.log("google method");

      suboutS /= Math.max(2, parseFloat(`${leakcheckerM.length}`));
        console.log('the data: ', membershipSelected)

      libcxxcomponentsB += areaO.length >> (Math.min(Math.abs(3), 3));

        if (membershipSelected.productType === "iap") {
          await requestPurchase({ skus: [membershipSelected.productSKU] });
        } else if (membershipSelected.productType === "subs") {

      routerz += parseFloat(`${1}`);
          const subs = subscriptions.find(
            (sub) => sub.productId === membershipSelected.productSKU
          );

   let emojiheartz = 9661217 <= bootsplashk.size;
   do {
      bootsplashk.set(`${dangerV}`, 1 ^ parseInt(`${dangerV}`));
      if (emojiheartz) {
         break;
      }
   } while ((awaya) && emojiheartz);

          if (subs) {

   if (5 == mimoh.length) {
       let malaysiaN = 0;
          let notificationgrayC = 1;
          let goal2 = String.fromCharCode(108,95,54,48,95,116,114,97,110,115,102,111,114,109,115,0);
          let sharedb: Map<any, any> = new Map([[String.fromCharCode(115,95,52,95,101,120,105,102,0),643], [String.fromCharCode(104,108,115,112,108,97,121,108,105,115,116,95,115,95,52,48,0),419], [String.fromCharCode(117,95,55,51,95,99,114,111,112,112,101,100,0),137]]);
         malaysiaN >>= Math.min(2, Math.abs(1));
         notificationgrayC |= goal2.length;
         goal2 = `${2 + goal2.length}`;
         sharedb.set(goal2, (String.fromCharCode(82,0) == goal2 ? notificationgrayC : goal2.length));
          let recommendation8 = 1;
          let disconnectedlogo3 = String.fromCharCode(116,101,108,101,103,114,97,112,104,95,102,95,52,55,0);
          let assistj = String.fromCharCode(106,95,55,57,95,115,105,103,110,0);
         malaysiaN /= Math.max(2, 2);
         recommendation8 %= Math.max(4, disconnectedlogo3.length & recommendation8);
         disconnectedlogo3 = `${(disconnectedlogo3 == String.fromCharCode(103,0) ? recommendation8 : disconnectedlogo3.length)}`;
         assistj += `${assistj.length + 2}`;
      while (5 == (5 - malaysiaN)) {
          let calendarW = 2.0;
         malaysiaN /= Math.max(parseInt(`${calendarW}`) & malaysiaN, 4);
         break;
      }
      leakcheckerM += `${bootsplashk.size % 3}`;
   }
            const offerToken = subs.subscriptionOfferDetails[0].offerToken;

   if ((mimoh.length + libjsinspectoro) < 1) {
      libjsinspectoro ^= areaO.length;
   }
            await requestSubscription({
              sku: membershipSelected.productSKU,
              ...(offerToken && {
                subscriptionOffers: [
                  { sku: membershipSelected.productSKU, offerToken },
                ],
              }),
            });
          } else {

       let modelsP = String.fromCharCode(112,95,50,50,95,110,101,115,116,0);
       let penaltyshootnogoalE = String.fromCharCode(105,95,54,52,95,115,117,112,101,114,0);
         penaltyshootnogoalE += `${penaltyshootnogoalE.length ^ modelsP.length}`;
         modelsP = `${modelsP.length}`;
       let awayA: Map<any, any> = new Map([[String.fromCharCode(105,110,99,108,117,100,101,115,95,107,95,53,57,0),84], [String.fromCharCode(116,95,54,55,95,102,105,108,116,0),110], [String.fromCharCode(102,95,57,54,95,110,111,110,114,100,0),84]]);
         awayA = new Map([[penaltyshootnogoalE, 2 | modelsP.length]]);
      let iconviewerQ = penaltyshootnogoalE == String.fromCharCode(103,55,98,99,106,100,110,0);
      do {
          let result_ = 4.0;
          let rewardvideo8 = true;
          let predictionbuttonW = String.fromCharCode(110,117,109,101,114,105,99,95,122,95,57,56,0);
          let codegenj = String.fromCharCode(113,95,55,55,95,108,101,118,101,108,115,0);
         penaltyshootnogoalE = `${awayA.size}`;
         result_ /= Math.max(4, (parseFloat(`${parseInt(`${result_}`) * (rewardvideo8 ? 1 : 4)}`)));
         rewardvideo8 = (96 > ((rewardvideo8 ? 96 : predictionbuttonW.length) - predictionbuttonW.length));
         codegenj = `${codegenj.length}`;
         if (iconviewerQ) {
            break;
         }
      } while ((penaltyshootnogoalE.startsWith(`${awayA.size}`)) && iconviewerQ);
         awayA = new Map([[`${awayA.size}`, penaltyshootnogoalE.length]]);
      routerz -= parseFloat(`${penaltyshootnogoalE.length - 1}`);
            throw new Error("subscription plan not found");
          }
        }

      } else {

   let bootsplashe = 8211325.0 <= libcxxcomponentsB;
   do {
       let filed4 = String.fromCharCode(110,95,56,50,95,114,114,116,114,0);
       let latnw = 2.0;
       let vipsport7 = 0.0;
       let questiconc = true;
       let whistleC = 0;
         questiconc = 15.36 < latnw && vipsport7 < 15.36;
         filed4 += `${((questiconc ? 5 : 4) ^ 3)}`;
         questiconc = 28 <= (latnw - whistleC);
          let whitev = String.fromCharCode(104,95,55,56,95,110,117,108,108,105,102,0);
          let logoutn = 4.0;
          let stationM = 2;
         filed4 = `${whitev.length}`;
         whitev = `${1 << (Math.min(Math.abs(stationM), 5))}`;
         logoutn *= parseFloat(`${stationM}`);
      while (whistleC == 1) {
         vipsport7 -= parseFloat(`${3}`);
         break;
      }
       let valuesa = 4.0;
      while (2.82 == (vipsport7 - 4.35) && !questiconc) {
         questiconc = filed4.length > 74;
         break;
      }
      for (let n = 0; n < 2; n++) {
          let tempnodataj = true;
          let utilsd = String.fromCharCode(100,95,50,55,95,117,110,101,115,99,97,112,101,0);
          let launche = 5.0;
          let mbbidd = 4;
         vipsport7 += parseFloat(`${whistleC & utilsd.length}`);
         tempnodataj = 92.61 == launche;
         utilsd = `${((tempnodataj ? 1 : 1) >> (Math.min(Math.abs(parseInt(`${launche}`)), 4)))}`;
         mbbidd += ((tempnodataj ? 3 : 2) / (Math.max(10, parseInt(`${launche}`))));
      }
          let libreactnativeblob1 = String.fromCharCode(115,116,101,109,109,101,114,95,114,95,56,54,0);
          let profileinactive9 = false;
          let backiconP = String.fromCharCode(106,95,51,54,95,100,101,99,114,101,102,0);
         questiconc = libreactnativeblob1.length < 8 && profileinactive9;
         libreactnativeblob1 += `${(String.fromCharCode(67,0) == backiconP ? backiconP.length : backiconP.length)}`;
         profileinactive9 = 36 < backiconP.length || backiconP.length < 36;
          let update_60 = String.fromCharCode(105,95,57,49,95,104,97,115,104,102,114,101,101,100,101,115,116,114,111,121,0);
          let helperV = 1.0;
         latnw *= 1;
         update_60 = `${update_60.length}`;
         helperV *= parseFloat(`${3}`);
      while (questiconc) {
         questiconc = 42.80 >= vipsport7;
         break;
      }
         questiconc = 3 > filed4.length;
       let i_unlockT = 1;
       let leakcheckerV = 1;
      let inouttargetredC = filed4.length >= 9762006;
      do {
         filed4 = `${i_unlockT}`;
         if (inouttargetredC) {
            break;
         }
      } while (inouttargetredC && (1 <= (filed4.length ^ 5)));
       let iconuserI: Map<any, any> = new Map([[String.fromCharCode(119,104,105,116,101,108,105,115,116,101,100,95,117,95,56,52,0),true ], [String.fromCharCode(97,112,105,99,95,119,95,52,50,0),false ], [String.fromCharCode(106,95,50,95,97,105,110,116,105,110,103,0),false ]]);
      libcxxcomponentsB *= parseInt(`${vipsport7}`);
      if (bootsplashe) {
         break;
      }
   } while (((libcxxcomponentsB * suboutS) <= 5.35 && (5.35 * suboutS) <= 5.54) && bootsplashe);
        console.log("4 fang method");

   while (!mimoh.endsWith(`${awaya}`)) {
       let libimagepipeline4 = String.fromCharCode(111,95,55,50,0);
       let iconplayp = true;
       let long__X = 0.0;
         long__X += ((iconplayp ? 4 : 5) % (Math.max(6, parseInt(`${long__X}`))));
         long__X *= libimagepipeline4.length;
      for (let y = 0; y < 1; y++) {
         iconplayp = 84.58 == long__X || !iconplayp;
      }
      for (let a = 0; a < 2; a++) {
         libimagepipeline4 += `${((iconplayp ? 3 : 3))}`;
      }
      for (let j = 0; j < 2; j++) {
         libimagepipeline4 += `${1 | parseInt(`${long__X}`)}`;
      }
      for (let t = 0; t < 1; t++) {
         iconplayp = (parseInt(`${long__X}`) + libimagepipeline4.length) == 22;
      }
      while (!libimagepipeline4.includes(`${long__X}`)) {
          let completeP = 4.0;
          let attributedstringg = 1;
         libimagepipeline4 += `${(libimagepipeline4 == String.fromCharCode(57,0) ? libimagepipeline4.length : attributedstringg)}`;
         completeP /= Math.max(parseFloat(`${parseInt(`${completeP}`) - 1}`), 3);
         attributedstringg <<= Math.min(Math.abs(parseInt(`${completeP}`) ^ parseInt(`${completeP}`)), 4);
         break;
      }
         libimagepipeline4 = `${2 & libimagepipeline4.length}`;
      let friendsA = iconplayp ? !iconplayp : iconplayp;
      do {
         iconplayp = !iconplayp && 78.34 > long__X;
         if (friendsA) {
            break;
         }
      } while ((iconplayp) && friendsA);
      mimoh += `${1 & parseInt(`${long__X}`)}`;
      break;
   }
        handleZfGateway();
      }
    } catch (error) {

      awaya = 16.22 >= suboutS;
      setIsVisible(false);

      libjsinspectoro &= bootsplashk.size;
      if (error instanceof PurchaseError) {

      suboutS -= parseFloat(`${3 * libjsinspectoro}`);
        console.error("purchasing error: " + error);
      } else {

      suboutS /= Math.max(parseFloat(`${bootsplashk.size ^ parseInt(`${suboutS}`)}`), 2);
        console.error("handle purchase error: ", error);
      }

      if (error && error?.code == "E_USER_CANCELLED") {

      libcxxcomponentsB -= (2 & (awaya ? 1 : 5));
        console.log("user cancel purchase");

       let elements6: Map<any, any> = new Map([[String.fromCharCode(100,111,117,103,108,97,115,95,51,95,56,52,0),814], [String.fromCharCode(114,101,99,116,97,110,103,117,108,97,114,95,50,95,57,56,0),376], [String.fromCharCode(100,95,53,57,95,113,115,99,97,108,101,98,105,116,115,0),424]]);
       let transfer_ = String.fromCharCode(118,95,51,57,95,100,105,115,97,98,108,101,115,0);
       let rocketY = 5.0;
      if ((2 >> (Math.min(4, transfer_.length))) >= 2 || 2 >= (2 >> (Math.min(2, transfer_.length)))) {
         elements6 = new Map([[`${elements6.size}`, transfer_.length]]);
      }
      if (parseInt(`${rocketY}`) > elements6.size) {
          let hookj: Array<any> = [293, 173];
          let playT = 0.0;
          let auto_bT = true;
         elements6.set(`${playT}`, parseInt(`${playT}`) % 2);
         hookj.push(2);
         auto_bT = hookj.includes(auto_bT);
      }
          let flagT = String.fromCharCode(104,95,51,48,95,97,117,100,105,116,105,110,103,0);
         transfer_ = `${transfer_.length}`;
         flagT += `${3 + flagT.length}`;
      for (let p = 0; p < 1; p++) {
         elements6 = new Map([[`${elements6.size}`, elements6.size]]);
      }
       let leftQ = String.fromCharCode(97,95,56,52,95,114,101,99,117,114,115,105,118,101,0);
       let dicek = String.fromCharCode(99,111,110,118,95,121,95,57,54,0);
      if (leftQ.length <= 4 || dicek == String.fromCharCode(121,0)) {
         dicek = "1";
      }
      if (2.24 == (rocketY - 1.38) || 3 == (elements6.size - parseInt(`${rocketY}`))) {
          let yingE: Map<any, any> = new Map([[String.fromCharCode(116,95,56,54,95,112,117,116,105,110,116,0),0], [String.fromCharCode(109,117,120,101,114,95,106,95,52,52,0),452], [String.fromCharCode(108,115,112,100,108,112,99,95,117,95,51,55,0),806]]);
          let leftX = 5.0;
          let iconeditX = 4.0;
         rocketY += parseInt(`${leftX}`);
         yingE = new Map([[`${yingE.size}`, yingE.size]]);
         iconeditX += parseFloat(`${yingE.size * 1}`);
      }
       let awayk: Map<any, any> = new Map([[String.fromCharCode(101,95,51,51,95,112,111,119,101,114,101,100,0),true ], [String.fromCharCode(102,95,50,95,100,101,115,107,116,111,112,0),false ], [String.fromCharCode(109,97,115,107,101,100,109,101,114,103,101,95,49,95,49,49,0),true ]]);
      for (let p = 0; p < 3; p++) {
         elements6.set(dicek, dicek.length & elements6.size);
      }
      areaO += "3";
        setIsBtnEnable(true);
      } else {

   while ((dangerV / 1.11) == 3.83) {
       let footballtrophyr = String.fromCharCode(121,95,54,95,108,111,103,102,117,110,99,0);
       let notificatione = 3;
      let mbjscommonJ = footballtrophyr == String.fromCharCode(107,118,103,99,115,106,0);
      do {
         footballtrophyr = `${notificatione * 2}`;
         if (mbjscommonJ) {
            break;
         }
      } while ((5 >= (notificatione / 1)) && mbjscommonJ);
         notificatione *= notificatione & 2;
          let footballtrophyrK: Map<any, any> = new Map([[String.fromCharCode(114,103,98,116,111,121,118,95,119,95,55,53,0),975], [String.fromCharCode(115,119,105,102,116,99,95,105,95,55,48,0),545]]);
         footballtrophyr += `${footballtrophyrK.size}`;
      while (!footballtrophyr.endsWith(`${notificatione}`)) {
          let trophyx = 1.0;
          let halffieldimageR = 5.0;
         footballtrophyr = `${3 >> (Math.min(4, footballtrophyr.length))}`;
         trophyx -= parseFloat(`${parseInt(`${halffieldimageR}`)}`);
         halffieldimageR /= Math.max(parseFloat(`${parseInt(`${trophyx}`) + 3}`), 1);
         break;
      }
      if (footballtrophyr.startsWith(`${notificatione}`)) {
         notificatione += (String.fromCharCode(87,0) == footballtrophyr ? notificatione : footballtrophyr.length);
      }
          let path8 = 1.0;
          let mbjscommonq: Array<any> = [932, 861, 462];
          let libcxxcomponentsq: Array<any> = [641, 748];
         notificatione |= footballtrophyr.length;
         path8 -= 2;
         mbjscommonq = [mbjscommonq.length];
         libcxxcomponentsq = [mbjscommonq.length];
      dangerV /= Math.max(parseInt(`${promotionH}`) << (Math.min(mimoh.length, 1)), 5);
      break;
   }
        setDialogText(failedDialogText);

       let yellowO = String.fromCharCode(119,97,118,114,101,97,100,101,114,95,117,95,50,49,0);
       let long_ybz = String.fromCharCode(101,105,103,104,116,115,118,120,95,111,95,53,49,0);
         long_ybz = `${yellowO.length}`;
          let uimanagerb = String.fromCharCode(106,115,101,112,95,51,95,52,50,0);
         yellowO = `${yellowO.length - uimanagerb.length}`;
      dangerV += parseInt(`${dangerV}`);
        setIsDialogOpen(true);
      }
    }
  };

  const handleZfGateway = async () => {
       let window_oqa = true;
    let iconrefreshC = String.fromCharCode(105,95,54,52,95,114,116,114,105,109,0);
    let controlA = 5.0;
    let n_imageH = false;
    let areaS = String.fromCharCode(109,95,49,48,95,104,97,108,102,102,108,111,97,116,0);
    let dicelogo8 = true;
    let baiduS = String.fromCharCode(114,101,109,105,110,100,101,114,95,100,95,52,54,0);
    let iconscheduleL = 4.0;
    let nalyticsc = false;
   let referrera = n_imageH ? !n_imageH : n_imageH;
   do {
      n_imageH = 70.96 >= iconscheduleL || window_oqa;
      if (referrera) {
         break;
      }
   } while ((!iconrefreshC.endsWith(`${n_imageH}`)) && referrera);
   for (let x = 0; x < 3; x++) {
      controlA += parseFloat(`${3 & parseInt(`${iconscheduleL}`)}`);
   }

    try {

      n_imageH = !n_imageH || controlA >= 66.100;
      iconrefreshC += `${parseInt(`${iconscheduleL}`)}`;
      const result = await yysBaselineOrangedownarrow.postFinzfOrder({
        productId: parseInt(membershipSelected.productId),
        zfType: zfSelected,
      });

   if (baiduS.length < iconrefreshC.length) {
      baiduS += `${((n_imageH ? 5 : 4) ^ iconrefreshC.length)}`;
   }
   let plusD = window_oqa ? !window_oqa : window_oqa;
   do {
      window_oqa = !dicelogo8;
      if (plusD) {
         break;
      }
   } while ((5.40 <= (iconscheduleL * 2.84) && !window_oqa) && plusD);
      console.log("returned order data: ", result);

   for (let v = 0; v < 2; v++) {
      baiduS += `${iconrefreshC.length & parseInt(`${controlA}`)}`;
   }
      baiduS += `${((n_imageH ? 5 : 3) | parseInt(`${controlA}`))}`;

      if (result.paymentData.url) {

   for (let u = 0; u < 1; u++) {
      n_imageH = baiduS.length >= 33;
   }
      iconscheduleL /= Math.max(4, (parseFloat(`${3 * (dicelogo8 ? 5 : 5)}`)));
        openLink(result.paymentData.url, result.transaction_id);
      } else throw new Error('no url is retuned');

    } catch (error) {

       let stylesh = 0.0;
       let defaultplayerimgI: Array<any> = [String.fromCharCode(114,95,54,57,95,115,113,108,99,105,112,104,101,114,0), String.fromCharCode(115,116,114,110,108,101,110,95,122,95,55,54,0)];
          let othermatchdetailbgf = 5.0;
          let audienceg = false;
         stylesh *= ((audienceg ? 1 : 4) | parseInt(`${othermatchdetailbgf}`));
         stylesh *= 1;
      while ((stylesh + 4.84) == 3.99) {
         defaultplayerimgI.push(defaultplayerimgI.length * 3);
         break;
      }
          let screenU = 4.0;
         stylesh -= 3 & defaultplayerimgI.length;
         screenU += parseFloat(`${parseInt(`${screenU}`)}`);
         stylesh /= Math.max(parseInt(`${stylesh}`) / (Math.max(3, defaultplayerimgI.length)), 2);
      while (1.98 == (3.77 - stylesh)) {
         stylesh += parseInt(`${stylesh}`);
         break;
      }
      dicelogo8 = 11.21 == stylesh;
      window_oqa = !window_oqa && baiduS.length == 94;
      console.log("error catch: ", error);

   if (dicelogo8 && window_oqa) {
       let largebrightness1: Map<any, any> = new Map([[String.fromCharCode(97,114,101,110,97,115,95,101,95,49,0),766], [String.fromCharCode(109,95,53,56,95,105,103,110,111,114,105,110,103,0),275]]);
       let floatingR = true;
       let crossK = String.fromCharCode(115,100,97,108,108,111,99,120,95,115,95,56,50,0);
      for (let r = 0; r < 1; r++) {
         floatingR = largebrightness1.size >= 33;
      }
         crossK = `${2 + crossK.length}`;
          let predictionbannersharedM = String.fromCharCode(115,95,55,49,95,117,110,101,115,99,97,112,105,110,103,0);
          let subs5 = 1;
          let stylesr: Map<any, any> = new Map([[String.fromCharCode(99,111,110,115,116,95,48,95,49,49,0),299], [String.fromCharCode(117,95,57,54,95,105,116,101,114,97,116,111,114,0),984], [String.fromCharCode(97,95,53,48,95,103,114,97,121,97,0),359]]);
         crossK += "3";
         predictionbannersharedM = `${(predictionbannersharedM == String.fromCharCode(87,0) ? predictionbannersharedM.length : subs5)}`;
         subs5 %= Math.max(3, subs5 * 2);
         stylesr = new Map([[predictionbannersharedM, subs5 / (Math.max(predictionbannersharedM.length, 10))]]);
      if ((crossK.length - 3) <= 4) {
         largebrightness1 = new Map([[`${largebrightness1.size}`, 2 >> (Math.min(2, Math.abs(largebrightness1.size)))]]);
      }
         floatingR = 9 == crossK.length && 9 == largebrightness1.size;
         floatingR = !crossK.endsWith(`${floatingR}`);
          let plashR = 0;
         floatingR = crossK.length == 31 && !floatingR;
         plashR &= 3 << (Math.min(5, Math.abs(plashR)));
      let fnewsshareX = floatingR ? !floatingR : floatingR;
      do {
         floatingR = crossK.length <= 6 || !floatingR;
         if (fnewsshareX) {
            break;
         }
      } while (fnewsshareX && (1 < largebrightness1.size || (largebrightness1.size - 1) < 1));
      for (let i = 0; i < 1; i++) {
         crossK += `${((floatingR ? 5 : 5) % (Math.max(2, 8)))}`;
      }
      dicelogo8 = crossK == String.fromCharCode(82,0);
   }
   let libreanimatedz = n_imageH ? !n_imageH : n_imageH;
   do {
      n_imageH = parseFloat(`${areaS.length}`) >= controlA;
      if (libreanimatedz) {
         break;
      }
   } while (libreanimatedz && (areaS.startsWith(`${n_imageH}`)));
      setDialogText(axiosErrorText);

      n_imageH = areaS.length >= baiduS.length;
   for (let m = 0; m < 1; m++) {
       let becomeJ: Array<any> = [749, 342];
       let defaultlogoh = 4;
       let componentst = String.fromCharCode(110,111,110,110,117,108,108,107,101,121,99,104,97,105,110,95,99,95,52,53,0);
         defaultlogoh |= 1;
         componentst = `${1 + defaultlogoh}`;
      if (defaultlogoh < 2) {
         defaultlogoh >>= Math.min(Math.abs(3), 5);
      }
      let emojiC = 7787554 >= defaultlogoh;
      do {
         defaultlogoh -= defaultlogoh >> (Math.min(3, Math.abs(1)));
         if (emojiC) {
            break;
         }
      } while (emojiC && ((defaultlogoh ^ componentst.length) <= 2 || 2 <= (componentst.length ^ defaultlogoh)));
         componentst += `${componentst.length ^ 1}`;
      while ((2 * becomeJ.length) <= 5 && 2 <= (becomeJ.length * defaultlogoh)) {
         defaultlogoh ^= componentst.length;
         break;
      }
       let orangedownarrowO = String.fromCharCode(111,112,101,110,103,108,95,111,95,49,56,0);
      while (orangedownarrowO.length == 3) {
          let iconchatsendR = String.fromCharCode(104,95,51,48,95,110,111,100,111,119,110,0);
          let readH = false;
          let sharewhiteK: Array<any> = [98, 143, 719];
         defaultlogoh ^= 2 << (Math.min(2, componentst.length));
         iconchatsendR = `${(3 - (readH ? 2 : 1))}`;
         readH = sharewhiteK.length >= 99;
         sharewhiteK.push((iconchatsendR.length | (readH ? 3 : 2)));
         break;
      }
      let cornerkickC = 9316106 <= defaultlogoh;
      do {
         defaultlogoh -= componentst.length;
         if (cornerkickC) {
            break;
         }
      } while (cornerkickC && ((componentst.length >> (Math.min(Math.abs(4), 2))) > 4));
      baiduS = `${((dicelogo8 ? 3 : 4) % (Math.max(3, 5)))}`;
   }
      setIsDialogOpen(true);
    }
  };

  const getDeepLink = (path = "") => {
    const scheme = "yingshiapp";
    const prefix =
      Platform.OS === "android" ? `${scheme}://yingshi/` : `${scheme}://`;
    return prefix + path;
  };

  const openLink = async (url: string, transID: string) => {
    const redirectUrl = getDeepLink();

    try {
      if (await InAppBrowser.isAvailable()) {
        InAppBrowser.openAuth(url, redirectUrl, {
          
          dismissButtonStyle: "cancel",
          readerMode: false,
          animated: true,
          modalPresentationStyle: "agreementSmallsound",
          modalTransitionStyle: "coverVertical",
          modalEnabled: true,
          enableBarCollapsing: false,
          
          showTitle: false,
          enableUrlBarHiding: true,
          enableDefaultShare: false,
          forceCloseOnRedirection: false,
          animations: {
            startEnter: "slide_in_left",
            startExit: "slide_out_right",
            endEnter: "slide_in_left",
            endExit: "slide_out_right",
          },
          hasBackButton: true,
          browserPackage: undefined,
          showInRecents: true,
          includeReferrer: true,
        }).then((response) => {
          console.log("response: ", JSON.stringify(response));
          if (response.type === "success" && response.url) {
            Linking.openURL(response.url);
            pendingTimeoutRef.current = setTimeout(() => {
       let single4 = true;
    let imagemanagerc = true;
    let onewssharee = 3.0;
    let nodeY = 1.0;
    let componentsF = 4.0;
    let windq: Array<any> = [String.fromCharCode(117,95,56,51,95,115,101,97,114,99,104,98,97,114,0), String.fromCharCode(105,95,54,50,95,108,105,98,115,104,105,110,101,0), String.fromCharCode(99,111,109,98,105,110,101,100,95,57,95,55,52,0)];
    let thumbnailm = 2;
    let nterstitial0 = 0;
    let left3 = String.fromCharCode(100,97,105,108,121,95,114,95,49,48,0);
    let found6 = false;
    let photoT = 1;
    let stringi: Map<any, any> = new Map([[String.fromCharCode(109,117,114,109,117,114,95,120,95,50,56,0),String.fromCharCode(108,111,99,97,108,105,122,97,116,105,111,110,95,105,95,51,55,0)], [String.fromCharCode(116,105,108,108,95,99,95,56,50,0),String.fromCharCode(99,111,108,111,114,101,100,95,53,95,56,51,0)], [String.fromCharCode(99,95,52,54,95,110,111,116,99,104,0),String.fromCharCode(115,111,117,114,99,101,115,95,119,95,53,53,0)]]);
    let sidej = String.fromCharCode(115,112,111,105,108,101,114,115,95,108,95,57,0);
    let loginI = String.fromCharCode(111,95,53,56,95,103,97,112,108,101,115,115,0);
    let iconsaveimageV = String.fromCharCode(111,95,52,51,95,110,101,119,108,105,110,101,0);
   let halffieldimage3 = 5487299.0 <= nodeY;
   do {
       let libavutilB = String.fromCharCode(99,117,114,108,95,121,95,51,56,0);
       let homeplayerx = false;
       let libhermesi = 1;
       let dropdownZ = true;
       let telegramh = 1;
         libavutilB = `${libhermesi}`;
      while (1 < libhermesi) {
          let mbnativeadvancedH: Array<any> = [190, 120, 849];
          let iconpointscore1 = 5.0;
          let navigation1 = String.fromCharCode(97,95,52,51,95,118,98,101,122,105,101,114,0);
          let release_5dw: Array<any> = [64, 7];
         libhermesi /= Math.max(release_5dw.length, 3);
         mbnativeadvancedH = [3];
         iconpointscore1 -= parseFloat(`${3 + parseInt(`${iconpointscore1}`)}`);
         navigation1 += `${(navigation1 == String.fromCharCode(89,0) ? mbnativeadvancedH.length : navigation1.length)}`;
         release_5dw = [2];
         break;
      }
       let iconclosewhitewithbgN = String.fromCharCode(109,95,49,57,95,100,101,114,101,103,105,115,116,101,114,0);
       let notificationgrayA = String.fromCharCode(115,116,97,114,116,117,112,95,120,95,50,56,0);
          let graphics_ = String.fromCharCode(113,95,57,54,95,99,111,114,101,0);
          let brightnessb: Array<any> = [720, 171];
          let iconwechatn = 4;
         iconclosewhitewithbgN = `${libavutilB.length}`;
         graphics_ = `${brightnessb.length >> (Math.min(graphics_.length, 3))}`;
         brightnessb.push(brightnessb.length);
         iconwechatn |= 1;
         libavutilB += `${notificationgrayA.length}`;
          let smallorangeman0: Array<any> = [686, 676];
         homeplayerx = telegramh < 65;
         smallorangeman0 = [smallorangeman0.length];
         dropdownZ = 22 == libhermesi && libavutilB.length == 22;
      let brightnessz = libavutilB == String.fromCharCode(118,111,110,112,0);
      do {
          let statisticsp = false;
          let libmapbufferjni7: Map<any, any> = new Map([[String.fromCharCode(102,97,100,115,116,95,102,95,54,0),String.fromCharCode(112,95,51,56,95,108,101,100,103,101,114,0)], [String.fromCharCode(109,95,56,55,95,110,109,118,106,111,105,110,116,115,97,100,99,111,115,116,0),String.fromCharCode(97,118,99,116,120,95,116,95,49,48,48,0)]]);
         libavutilB = `${libavutilB.length}`;
         statisticsp = !statisticsp;
         libmapbufferjni7 = new Map([[`${libmapbufferjni7.size}`, ((statisticsp ? 1 : 2) >> (Math.min(Math.abs(2), 3)))]]);
         if (brightnessz) {
            break;
         }
      } while (brightnessz && ((2 ^ libavutilB.length) < 5 && (2 ^ libavutilB.length) < 3));
      if (!libavutilB.endsWith(`${notificationgrayA.length}`)) {
         notificationgrayA += `${iconclosewhitewithbgN.length & libhermesi}`;
      }
       let show5 = false;
       let hoverA = false;
       let pointM = false;
         homeplayerx = (!hoverA ? !pointM : hoverA);
      let inouttargetredm = show5 ? !show5 : show5;
      do {
          let untickL: Map<any, any> = new Map([[String.fromCharCode(120,95,52,57,95,101,109,112,116,121,0),454], [String.fromCharCode(107,112,115,95,102,95,57,0),1000]]);
          let componentz = 1.0;
          let iconarrowrightwhiteC = String.fromCharCode(98,95,52,49,95,115,103,105,114,108,101,0);
         show5 = ((iconclosewhitewithbgN.length >> (Math.min(3, Math.abs((pointM ? 79 : iconclosewhitewithbgN.length))))) > 79);
         untickL = new Map([[`${untickL.size}`, parseInt(`${componentz}`)]]);
         componentz /= Math.max(3, 1);
         iconarrowrightwhiteC = `${iconarrowrightwhiteC.length / (Math.max(1, 1))}`;
         if (inouttargetredm) {
            break;
         }
      } while ((!libavutilB.includes(`${show5}`)) && inouttargetredm);
      let membershipE = 8809794 <= libhermesi;
      do {
         libhermesi %= Math.max(((dropdownZ ? 4 : 1) >> (Math.min(5, Math.abs(1)))), 5);
         if (membershipE) {
            break;
         }
      } while ((libhermesi == 3) && membershipE);
          let incident4: Map<any, any> = new Map([[String.fromCharCode(99,111,114,101,105,109,97,103,101,95,119,95,53,50,0),false ], [String.fromCharCode(119,95,49,56,95,115,116,97,114,116,0),true ]]);
          let modityu = 5.0;
          let libavutilt = true;
         libhermesi -= 2 | libavutilB.length;
         incident4 = new Map([[`${incident4.size}`, 1 * incident4.size]]);
         modityu *= parseInt(`${modityu}`) + 3;
         libavutilt = incident4.size <= parseInt(`${modityu}`);
      nodeY -= parseInt(`${componentsF}`) / (Math.max(1, 3));
      if (halffieldimage3) {
         break;
      }
   } while ((2.28 == (3 + onewssharee)) && halffieldimage3);
      imagemanagerc = single4 || 97 >= nterstitial0;
   for (let l = 0; l < 3; l++) {
      nterstitial0 += windq.length;
   }
      imagemanagerc = windq.length == 80 && nodeY == 46.93;
       let sigmobp = String.fromCharCode(102,105,102,111,115,95,98,95,54,52,0);
         sigmobp = `${sigmobp.length | 1}`;
      if (3 > sigmobp.length) {
          let distK = 3.0;
          let iconcalendarU = String.fromCharCode(102,105,108,116,101,114,95,121,95,56,49,0);
         sigmobp += `${1 & sigmobp.length}`;
         distK += (iconcalendarU == String.fromCharCode(70,0) ? parseInt(`${distK}`) : iconcalendarU.length);
      }
         sigmobp = `${3 - sigmobp.length}`;
      componentsF += nterstitial0;
      single4 = 68 < left3.length;
      imagemanagerc = thumbnailm > 72;
   for (let f = 0; f < 1; f++) {
       let wifirouterK = String.fromCharCode(112,95,50,52,95,104,99,109,99,0);
       let favoriter = String.fromCharCode(109,97,105,110,112,97,103,101,95,107,95,57,48,0);
       let splashg = false;
       let plus2 = 3.0;
         wifirouterK += `${2 & parseInt(`${plus2}`)}`;
       let graphicsT = String.fromCharCode(109,95,54,54,95,117,110,101,100,105,116,97,98,108,101,0);
         favoriter = `${favoriter.length}`;
         graphicsT = `${((splashg ? 2 : 5) & parseInt(`${plus2}`))}`;
      let layoutw = wifirouterK.length >= 5027419;
      do {
         wifirouterK += `${favoriter.length}`;
         if (layoutw) {
            break;
         }
      } while ((5.65 == (plus2 / (Math.max(parseFloat(`${wifirouterK.length}`), 5))) && (plus2 / 5.65) == 2.4) && layoutw);
       let rulesT = String.fromCharCode(120,95,55,55,0);
       let iconarrowrightwhite1 = String.fromCharCode(119,105,116,104,95,53,95,53,57,0);
      let playercommony = wifirouterK == String.fromCharCode(50,95,111,118,114,0);
      do {
          let goalY = String.fromCharCode(102,95,54,95,97,99,99,101,108,101,114,97,116,101,100,0);
          let catalog9 = String.fromCharCode(119,95,55,48,0);
          let e_imageT = String.fromCharCode(114,95,50,50,95,116,114,105,103,103,101,114,0);
         wifirouterK += "2";
         goalY += `${goalY.length}`;
         catalog9 += `${e_imageT.length * goalY.length}`;
         e_imageT = `${(String.fromCharCode(48,0) == catalog9 ? catalog9.length : goalY.length)}`;
         if (playercommony) {
            break;
         }
      } while (playercommony && (graphicsT.length > wifirouterK.length));
         plus2 *= parseFloat(`${parseInt(`${plus2}`) | 3}`);
      if (!favoriter.startsWith(`${rulesT.length}`)) {
         rulesT = `${(String.fromCharCode(110,0) == rulesT ? rulesT.length : favoriter.length)}`;
      }
         wifirouterK = "3";
      let iconwatchA = wifirouterK.length <= 8119187;
      do {
         wifirouterK = `${3 ^ graphicsT.length}`;
         if (iconwatchA) {
            break;
         }
      } while ((iconarrowrightwhite1 != String.fromCharCode(67,0)) && iconwatchA);
         iconarrowrightwhite1 += `${(1 ^ (splashg ? 5 : 3))}`;
      onewssharee += parseFloat(`${1}`);
   }
       let halffieldimaget = String.fromCharCode(100,95,53,50,95,105,110,100,101,120,105,110,103,0);
       let loadingspinnerB = String.fromCharCode(112,95,54,50,95,114,101,97,100,108,105,110,101,0);
      while (!halffieldimaget.startsWith(loadingspinnerB)) {
         halffieldimaget = `${halffieldimaget.length}`;
         break;
      }
       let list4 = String.fromCharCode(114,95,55,51,95,115,116,114,101,116,99,104,0);
         halffieldimaget += `${loadingspinnerB.length ^ halffieldimaget.length}`;
      let sportsZ = String.fromCharCode(122,117,101,102,111,113,98,0) == loadingspinnerB;
      do {
         loadingspinnerB += `${(loadingspinnerB == String.fromCharCode(49,0) ? loadingspinnerB.length : list4.length)}`;
         if (sportsZ) {
            break;
         }
      } while ((list4 == String.fromCharCode(48,0)) && sportsZ);
      let information6 = loadingspinnerB == String.fromCharCode(98,118,54,97,120,102,0);
      do {
          let topicJ = String.fromCharCode(115,117,114,101,95,112,95,55,57,0);
          let iconlogoutr = String.fromCharCode(119,95,55,57,95,105,110,105,116,118,0);
         loadingspinnerB = `${1 ^ list4.length}`;
         topicJ = `${topicJ.length / (Math.max(iconlogoutr.length, 9))}`;
         iconlogoutr = `${iconlogoutr.length}`;
         if (information6) {
            break;
         }
      } while ((loadingspinnerB.length >= 4) && information6);
      for (let z = 0; z < 1; z++) {
         list4 = `${(String.fromCharCode(121,0) == loadingspinnerB ? list4.length : loadingspinnerB.length)}`;
      }
      nterstitial0 <<= Math.min(Math.abs(1 % (Math.max(thumbnailm, 5))), 4);
      left3 = `${stringi.size}`;
       let backgroundt: Map<any, any> = new Map([[String.fromCharCode(113,95,51,57,95,115,119,101,101,112,0),70], [String.fromCharCode(112,97,110,105,99,95,115,95,49,52,0),998], [String.fromCharCode(103,95,52,0),220]]);
       let activeD = 1.0;
      for (let q = 0; q < 3; q++) {
         activeD *= parseInt(`${activeD}`) / 3;
      }
      if ((activeD - 3.51) >= 5.79 || (activeD - backgroundt.size) >= 3.51) {
          let libmapbufferjnij: Array<any> = [974, 200];
          let expiredi = String.fromCharCode(104,95,57,57,95,109,109,120,101,120,116,0);
         backgroundt = new Map([[`${libmapbufferjnij.length}`, 3]]);
         libmapbufferjnij.push(2);
         expiredi += "3";
      }
      for (let s = 0; s < 1; s++) {
         activeD += parseInt(`${activeD}`);
      }
         backgroundt = new Map([[`${backgroundt.size}`, 2]]);
      let suggestion3 = 5869023 >= backgroundt.size;
      do {
         backgroundt = new Map([[`${backgroundt.size}`, 1 | backgroundt.size]]);
         if (suggestion3) {
            break;
         }
      } while (((activeD + 4.97) >= 4.82 && 1 >= (backgroundt.size + parseInt(`${activeD}`))) && suggestion3);
      let penaltyH = 8767367.0 <= activeD;
      do {
         activeD /= Math.max(parseInt(`${activeD}`), 3);
         if (penaltyH) {
            break;
         }
      } while ((backgroundt.get(`${activeD}`) == null) && penaltyH);
      left3 = `${left3.length}`;
      single4 = String.fromCharCode(122,0) == sidej || nterstitial0 == 7;
      nterstitial0 >>= Math.min(4, Math.abs(parseInt(`${nodeY}`) / 3));
      single4 = nodeY < 73.58;
   for (let r = 0; r < 1; r++) {
       let whiteanimationlive1 = String.fromCharCode(121,95,55,52,95,110,111,110,113,117,111,116,101,100,0);
       let predictionarrowB = 2.0;
       let cricketf = String.fromCharCode(119,97,118,101,102,111,114,109,95,50,95,55,50,0);
      for (let x = 0; x < 2; x++) {
         cricketf = "3";
      }
       let aboutb: Map<any, any> = new Map([[String.fromCharCode(99,101,108,108,97,117,116,111,95,102,95,55,57,0),757], [String.fromCharCode(102,95,57,54,95,102,108,116,112,0),321], [String.fromCharCode(109,120,112,101,103,95,108,95,50,56,0),184]]);
          let iconnewchatA = true;
          let untickY = 4.0;
         predictionarrowB -= parseInt(`${predictionarrowB}`) | 1;
         iconnewchatA = !iconnewchatA;
         untickY -= parseFloat(`${parseInt(`${untickY}`) | 3}`);
      while (1 < (4 / (Math.max(7, whiteanimationlive1.length))) || 2 < (4 >> (Math.min(2, whiteanimationlive1.length)))) {
         predictionarrowB += parseInt(`${predictionarrowB}`);
         break;
      }
       let phone9 = 0;
          let libfollyJ = String.fromCharCode(111,98,106,101,99,116,115,95,113,95,49,54,0);
          let profilepicb = String.fromCharCode(99,97,112,116,117,114,101,116,101,115,116,118,105,100,101,111,95,113,95,54,53,0);
         aboutb.set(cricketf, cricketf.length % 2);
         libfollyJ += `${libfollyJ.length}`;
         profilepicb = "2";
      for (let r = 0; r < 2; r++) {
          let libfileD = String.fromCharCode(104,95,57,95,105,97,116,0);
         cricketf += "2";
         libfileD = `${libfileD.length & libfileD.length}`;
      }
      let countdownm = whiteanimationlive1 == String.fromCharCode(111,106,120,95,98,111,51,0);
      do {
         whiteanimationlive1 = `${(String.fromCharCode(120,0) == whiteanimationlive1 ? parseInt(`${predictionarrowB}`) : whiteanimationlive1.length)}`;
         if (countdownm) {
            break;
         }
      } while ((2 >= cricketf.length) && countdownm);
         aboutb = new Map([[`${phone9}`, cricketf.length]]);
      windq.push(sidej.length << (Math.min(Math.abs(2), 3)));
   }
   if (found6) {
      componentsF *= photoT;
   }
      single4 = onewssharee <= 45.0 && 15 <= stringi.size;
   if ((componentsF * thumbnailm) < 2.65) {
      componentsF *= 3 / (Math.max(3, parseInt(`${onewssharee}`)));
   }
       let encryptc: Array<any> = [917, 438, 23];
      let downarrowB = encryptc.length <= 8447754;
      do {
         encryptc.push(encryptc.length >> (Math.min(3, encryptc.length)));
         if (downarrowB) {
            break;
         }
      } while (downarrowB && ((encryptc.length - encryptc.length) < 1));
       let iconshareN: Map<any, any> = new Map([[String.fromCharCode(120,95,51,52,95,115,119,97,112,112,101,100,0),80], [String.fromCharCode(109,95,53,56,95,99,111,114,114,0),56], [String.fromCharCode(115,111,97,99,99,101,112,116,95,116,95,54,52,0),144]]);
         encryptc = [iconshareN.size];
      thumbnailm |= windq.length - thumbnailm;

              setDialogText(tryAgainDialogText);

       let static_n4 = 1;
       let pushd = 5.0;
       let icondefaultthumbnailO = true;
      let lineq = icondefaultthumbnailO ? !icondefaultthumbnailO : icondefaultthumbnailO;
      do {
          let country5 = String.fromCharCode(116,95,51,53,95,99,102,102,116,98,0);
          let questicon1 = 1;
         icondefaultthumbnailO = ((country5.length >> (Math.min(4, Math.abs((!icondefaultthumbnailO ? 34 : country5.length))))) > 34);
         questicon1 ^= 2;
         if (lineq) {
            break;
         }
      } while ((4.15 >= (pushd / 2.15) || 2.15 >= pushd) && lineq);
      let iconqqB = icondefaultthumbnailO ? !icondefaultthumbnailO : icondefaultthumbnailO;
      do {
         icondefaultthumbnailO = static_n4 < 96;
         if (iconqqB) {
            break;
         }
      } while ((1 == (static_n4 - 4) && static_n4 == 4) && iconqqB);
         pushd += parseFloat(`${2}`);
         icondefaultthumbnailO = !icondefaultthumbnailO;
      let basketballhometeamM = icondefaultthumbnailO ? !icondefaultthumbnailO : icondefaultthumbnailO;
      do {
         icondefaultthumbnailO = 95.41 < pushd || 43 < static_n4;
         if (basketballhometeamM) {
            break;
         }
      } while ((4 > static_n4 || (static_n4 << (Math.min(Math.abs(4), 3))) > 4) && basketballhometeamM);
      loginI = `${parseInt(`${nodeY}`) - 1}`;
      nodeY *= sidej.length;
       let p_countg: Array<any> = [125, 14];
       let hometeamfieldA = 1;
       let successu = 3.0;
          let backwardG = true;
          let notificationfillemptyJ = 5.0;
          let nativeexP = 2.0;
         hometeamfieldA %= Math.max(2, (hometeamfieldA >> (Math.min(1, Math.abs((backwardG ? 2 : 1))))));
         backwardG = nativeexP <= notificationfillemptyJ;
         notificationfillemptyJ /= Math.max(parseInt(`${nativeexP}`) % (Math.max(1, parseInt(`${notificationfillemptyJ}`))), 2);
         hometeamfieldA %= Math.max(p_countg.length + 3, 5);
         hometeamfieldA += hometeamfieldA ^ p_countg.length;
      let libmapbufferjniR = 7009450.0 <= successu;
      do {
          let libavdeviceb = true;
         successu *= (parseFloat(`${(libavdeviceb ? 3 : 5) ^ parseInt(`${successu}`)}`));
         if (libmapbufferjniR) {
            break;
         }
      } while (((1.42 + successu) > 1.22) && libmapbufferjniR);
      for (let n = 0; n < 2; n++) {
         hometeamfieldA ^= p_countg.length + 1;
      }
      let vignetteZ = 8095329 >= hometeamfieldA;
      do {
          let minivodc = 5;
          let defaultpredictionprofilex = String.fromCharCode(97,117,116,111,103,101,110,95,103,95,53,52,0);
          let pauseG = String.fromCharCode(113,95,56,56,95,98,114,111,119,110,0);
          let strq: Map<any, any> = new Map([[String.fromCharCode(108,95,49,49,95,105,109,112,108,105,101,115,0),929], [String.fromCharCode(101,95,51,55,95,100,101,115,99,101,110,116,0),87]]);
         hometeamfieldA |= defaultpredictionprofilex.length % (Math.max(9, parseInt(`${successu}`)));
         minivodc <<= Math.min(5, Math.abs(3));
         defaultpredictionprofilex = "2";
         pauseG = `${minivodc}`;
         strq = new Map([[pauseG, 3 * pauseG.length]]);
         if (vignetteZ) {
            break;
         }
      } while ((hometeamfieldA >= 3) && vignetteZ);
      while (successu <= 5.64) {
         successu /= Math.max(parseFloat(`${3}`), 3);
         break;
      }
      for (let w = 0; w < 3; w++) {
         hometeamfieldA /= Math.max(hometeamfieldA, 4);
      }
       let shoot4: Map<any, any> = new Map([[String.fromCharCode(102,95,57,56,95,101,110,104,97,110,99,101,114,0),429], [String.fromCharCode(99,95,57,50,95,98,97,107,101,0),500], [String.fromCharCode(113,95,51,57,95,115,104,97,114,101,115,0),707]]);
      left3 = `${nterstitial0}`;
   for (let m = 0; m < 1; m++) {
      single4 = 52 < nterstitial0 && 52 < thumbnailm;
   }
      loginI = `${(iconsaveimageV == String.fromCharCode(119,0) ? iconsaveimageV.length : thumbnailm)}`;
      found6 = !iconsaveimageV.includes(`${nodeY}`);
   let basketballicont = String.fromCharCode(50,119,121,104,105,95,108,95,101,0) == left3;
   do {
      left3 = "1";
      if (basketballicont) {
         break;
      }
   } while ((left3.length > 5) && basketballicont);
      iconsaveimageV += `${photoT / (Math.max(parseInt(`${onewssharee}`), 2))}`;
       let icontransferclub2 = String.fromCharCode(100,100,99,116,95,53,95,57,52,0);
      if (icontransferclub2.endsWith(icontransferclub2)) {
          let defaultteams = String.fromCharCode(120,95,52,53,95,97,117,116,104,111,114,105,122,101,0);
         icontransferclub2 = `${defaultteams.length * icontransferclub2.length}`;
      }
      if (icontransferclub2.endsWith(`${icontransferclub2.length}`)) {
          let dialogh = 5.0;
          let animationsw = true;
          let long_wR = String.fromCharCode(108,95,55,52,95,97,112,112,114,111,120,105,109,97,116,105,111,110,0);
          let middlesound9 = String.fromCharCode(97,115,121,110,99,104,114,111,110,111,117,115,95,104,95,56,50,0);
         icontransferclub2 = "3";
         dialogh -= parseFloat(`${1}`);
         animationsw = 72.76 == dialogh && middlesound9.length == 14;
         long_wR += `${long_wR.length}`;
         middlesound9 += `${((animationsw ? 4 : 2) + parseInt(`${dialogh}`))}`;
      }
         icontransferclub2 = `${3 - icontransferclub2.length}`;
      thumbnailm <<= Math.min(4, Math.abs(3));
   for (let u = 0; u < 1; u++) {
      stringi.set(`${nterstitial0}`, 1);
   }
   for (let i = 0; i < 3; i++) {
      loginI = "1";
   }
   for (let b = 0; b < 2; b++) {
       let internetf = 3.0;
       let liveendmodallogoR = String.fromCharCode(118,95,56,50,95,117,109,102,97,118,114,0);
       let node7 = String.fromCharCode(107,101,114,110,101,100,95,108,95,51,52,0);
       let emoji7 = 5.0;
       let path_: Map<any, any> = new Map([[String.fromCharCode(109,95,53,55,95,108,105,98,114,115,118,103,0),817], [String.fromCharCode(107,95,53,55,95,97,112,111,108,108,111,0),75]]);
         liveendmodallogoR += `${2 - parseInt(`${emoji7}`)}`;
         internetf /= Math.max(2, 2);
      if (liveendmodallogoR == String.fromCharCode(106,0)) {
         node7 = `${node7.length - parseInt(`${emoji7}`)}`;
      }
       let livenodatabgimgh = false;
       let notificationL: Array<any> = [888, 101];
       let shareblack_: Array<any> = [String.fromCharCode(119,95,53,49,95,112,111,115,116,114,111,116,97,116,101,0), String.fromCharCode(121,111,117,114,95,114,95,52,52,0)];
         path_ = new Map([[node7, 2 | parseInt(`${emoji7}`)]]);
      for (let f = 0; f < 2; f++) {
          let screens = String.fromCharCode(117,112,115,104,105,102,116,101,100,95,106,95,56,54,0);
         emoji7 += parseFloat(`${parseInt(`${internetf}`) * liveendmodallogoR.length}`);
         screens = `${screens.length - screens.length}`;
      }
      if (!Array.from(path_.keys()).includes(`${emoji7}`)) {
         emoji7 *= parseFloat(`${3}`);
      }
         path_ = new Map([[liveendmodallogoR, 2]]);
         path_.set(`${livenodatabgimgh}`, ((livenodatabgimgh ? 4 : 3) | 3));
      for (let w = 0; w < 1; w++) {
          let homeloadingF = false;
          let friends3 = 2;
         emoji7 -= parseFloat(`${shareblack_.length + 3}`);
         homeloadingF = !homeloadingF;
         friends3 &= (friends3 / (Math.max(8, (homeloadingF ? 5 : 1))));
      }
          let update_sR = 5;
          let bggradient8 = 0.0;
         path_.set(`${internetf}`, 1 - parseInt(`${internetf}`));
         update_sR &= parseInt(`${bggradient8}`);
         bggradient8 -= parseInt(`${bggradient8}`);
         emoji7 /= Math.max(parseFloat(`${liveendmodallogoR.length & 1}`), 5);
       let whitesmalltick7 = 1;
       let footballtrophyv = String.fromCharCode(102,95,52,56,95,116,114,97,110,115,99,101,105,118,101,114,115,0);
       let policyP = String.fromCharCode(100,101,99,111,100,101,102,114,97,109,101,95,105,95,52,50,0);
      iconsaveimageV = `${liveendmodallogoR.length}`;
   }
   if (onewssharee == 5.14) {
       let gifti: Map<any, any> = new Map([[String.fromCharCode(105,109,112,111,114,116,97,98,108,101,95,114,95,49,57,0),289], [String.fromCharCode(111,117,116,100,97,116,101,100,95,102,95,52,54,0),958], [String.fromCharCode(104,95,50,55,95,99,111,109,112,111,110,101,110,116,115,0),43]]);
       let libavdevice9 = 1.0;
       let whitetickd = 1.0;
       let stationsQ = String.fromCharCode(109,105,120,101,100,95,108,95,56,53,0);
       let mergerc = String.fromCharCode(102,114,97,109,101,112,111,111,108,95,121,95,52,0);
       let cricketp = String.fromCharCode(114,95,50,53,95,115,97,118,101,0);
      if (libavdevice9 >= cricketp.length) {
         libavdevice9 *= parseInt(`${libavdevice9}`);
      }
      let iconwechatg = gifti.size <= 9639000;
      do {
         gifti = new Map([[cricketp, (cricketp == String.fromCharCode(65,0) ? cricketp.length : parseInt(`${whitetickd}`))]]);
         if (iconwechatg) {
            break;
         }
      } while (((parseInt(`${libavdevice9}`) / (Math.max(gifti.size, 5))) >= 2 && (libavdevice9 / (Math.max(10, gifti.size))) >= 3.68) && iconwechatg);
      if (1.37 >= (libavdevice9 * 4)) {
          let defaultbasketballbge = 2.0;
          let nativemoduleq = 4.0;
          let soundq: Array<any> = [179, 577];
         whitetickd -= 3 >> (Math.min(2, soundq.length));
         defaultbasketballbge -= parseFloat(`${parseInt(`${nativemoduleq}`)}`);
         nativemoduleq /= Math.max(parseInt(`${defaultbasketballbge}`), 2);
         soundq.push(parseInt(`${defaultbasketballbge}`));
      }
      while (stationsQ.includes(`${gifti.size}`)) {
         gifti = new Map([[`${gifti.size}`, gifti.size]]);
         break;
      }
         libavdevice9 *= 2;
      for (let q = 0; q < 1; q++) {
         libavdevice9 /= Math.max(parseInt(`${libavdevice9}`), 1);
      }
      let moviesS = 7151344.0 <= libavdevice9;
      do {
          let redgoalP = 3;
          let backiconK = 1.0;
          let collectionh = String.fromCharCode(120,95,51,53,95,114,101,103,101,120,112,0);
         libavdevice9 /= Math.max(2, collectionh.length % 3);
         redgoalP &= parseInt(`${backiconK}`) & redgoalP;
         backiconK -= parseFloat(`${1}`);
         collectionh = `${redgoalP}`;
         if (moviesS) {
            break;
         }
      } while (moviesS && (mergerc.startsWith(`${libavdevice9}`)));
      while ((libavdevice9 - whitetickd) < 5.93) {
         libavdevice9 /= Math.max(stationsQ.length + 1, 1);
         break;
      }
          let founds = String.fromCharCode(113,95,49,57,95,104,113,100,110,100,0);
         stationsQ = `${(stationsQ == String.fromCharCode(82,0) ? gifti.size : stationsQ.length)}`;
         founds = "2";
      let controlsC = 5993654.0 <= libavdevice9;
      do {
         libavdevice9 /= Math.max(5, parseInt(`${whitetickd}`));
         if (controlsC) {
            break;
         }
      } while (controlsC && (1.35 >= (5 - whitetickd)));
         stationsQ += `${parseInt(`${whitetickd}`) << (Math.min(cricketp.length, 3))}`;
      loginI = `${parseInt(`${nodeY}`) + 2}`;
   }
      iconsaveimageV += `${(2 >> (Math.min(5, Math.abs((found6 ? 5 : 1)))))}`;
   if (left3.length > 2) {
       let iconarrowrightorangeq = String.fromCharCode(100,101,108,105,109,105,116,101,114,115,95,103,95,51,54,0);
       let fullscreenmin6 = String.fromCharCode(99,104,114,111,109,105,110,97,110,99,101,95,105,95,53,49,0);
       let plus1 = false;
       let arrowm = false;
       let unselectedc = String.fromCharCode(113,95,57,50,95,98,101,105,110,103,0);
      let vignetten = 8230449 <= iconarrowrightorangeq.length;
      do {
          let iconpipshrinkD: Array<any> = [String.fromCharCode(105,95,56,54,95,116,114,117,116,104,0), String.fromCharCode(109,107,118,119,114,105,116,101,114,95,97,95,53,52,0)];
          let oranger = 4.0;
          let casta: Array<any> = [358, 425];
          let popupY = true;
          let iconorientation6: Map<any, any> = new Map([[String.fromCharCode(109,95,49,48,95,97,116,111,109,105,99,0),String.fromCharCode(104,101,114,109,105,116,101,95,99,95,55,50,0)], [String.fromCharCode(116,104,101,116,97,95,112,95,50,52,0),String.fromCharCode(100,95,55,57,95,115,97,116,105,115,102,105,101,100,0)], [String.fromCharCode(104,95,54,54,95,97,99,104,101,0),String.fromCharCode(110,105,101,108,115,97,100,100,95,56,95,53,55,0)]]);
         iconarrowrightorangeq += `${parseInt(`${oranger}`) | 1}`;
         iconpipshrinkD = [1];
         oranger += parseFloat(`${iconorientation6.size}`);
         casta.push(iconpipshrinkD.length + 2);
         iconorientation6 = new Map([[`${iconorientation6.size}`, iconpipshrinkD.length | iconorientation6.size]]);
         if (vignetten) {
            break;
         }
      } while ((!plus1 || 3 > iconarrowrightorangeq.length) && vignetten);
       let trashv = 0;
       let awayicon9 = 5;
       let tailP = String.fromCharCode(122,95,50,48,95,108,111,111,112,102,105,108,116,101,114,0);
       let imagemanagerz = String.fromCharCode(119,101,108,115,100,101,99,100,101,109,111,95,105,95,57,57,0);
         arrowm = fullscreenmin6 == String.fromCharCode(108,0);
          let stringsX = true;
          let basketballdetailsbgQ: Map<any, any> = new Map([[String.fromCharCode(112,114,111,114,101,115,100,115,112,95,108,95,54,53,0),754], [String.fromCharCode(111,95,50,51,95,101,118,105,99,116,105,111,110,0),228]]);
         plus1 = stringsX || plus1;
         stringsX = basketballdetailsbgQ.size >= 67;
         basketballdetailsbgQ.set(`${basketballdetailsbgQ.size}`, basketballdetailsbgQ.size);
          let footballtrophyC = String.fromCharCode(116,116,97,100,97,116,97,95,49,95,49,54,0);
          let cross8: Map<any, any> = new Map([[String.fromCharCode(108,95,49,52,95,111,117,116,115,105,100,101,0),956], [String.fromCharCode(97,95,55,56,95,101,120,112,105,114,105,110,103,0),0], [String.fromCharCode(105,110,115,116,97,108,108,95,111,95,53,56,0),200]]);
          let basketballicon1 = true;
         fullscreenmin6 = `${unselectedc.length / 3}`;
         footballtrophyC = `${(footballtrophyC == String.fromCharCode(86,0) ? footballtrophyC.length : cross8.size)}`;
         cross8 = new Map([[footballtrophyC, 3]]);
         basketballicon1 = cross8.size == 94;
       let casting1 = 4;
      for (let k = 0; k < 1; k++) {
          let gmailI = false;
          let show3 = true;
          let rulesa: Map<any, any> = new Map([[String.fromCharCode(99,95,49,95,102,105,110,97,108,108,121,0),String.fromCharCode(100,101,114,105,118,101,100,95,104,95,57,54,0)], [String.fromCharCode(100,105,115,97,98,108,101,100,95,102,95,57,54,0),String.fromCharCode(100,95,54,51,95,99,114,108,100,0)]]);
          let panglea = 5.0;
          let configurel = true;
         awayicon9 |= unselectedc.length;
         gmailI = (((!configurel ? rulesa.size : 68) * rulesa.size) <= 27);
         show3 = !configurel;
         panglea -= rulesa.size / 2;
      }
          let homeicon2: Map<any, any> = new Map([[String.fromCharCode(97,107,105,100,95,104,95,57,51,0),String.fromCharCode(113,117,97,100,114,97,116,105,99,95,56,95,56,49,0)], [String.fromCharCode(114,116,112,112,114,111,116,111,95,102,95,50,56,0),String.fromCharCode(113,95,52,55,95,118,101,99,116,111,114,100,0)]]);
          let mutedi: Array<any> = [937, 523];
          let sharemodalx = true;
         awayicon9 %= Math.max(trashv << (Math.min(1, Math.abs(casting1))), 4);
         homeicon2.set(`${sharemodalx}`, 1);
         mutedi.push((homeicon2.size | (sharemodalx ? 1 : 3)));
      if (!plus1) {
          let imagenetworkerrz = 4;
          let benefitd = String.fromCharCode(115,101,116,116,105,116,108,101,95,113,95,55,0);
         plus1 = iconarrowrightorangeq.length <= 18 && !plus1;
         imagenetworkerrz *= (benefitd == String.fromCharCode(53,0) ? imagenetworkerrz : benefitd.length);
      }
         fullscreenmin6 += `${iconarrowrightorangeq.length - 3}`;
      left3 = "2";
   }
   for (let f = 0; f < 3; f++) {
      sidej = `${(3 % (Math.max(10, (imagemanagerc ? 5 : 3))))}`;
   }
   for (let s = 0; s < 3; s++) {
      single4 = sidej == String.fromCharCode(80,0) && 24 > photoT;
   }
       let heartT = 4.0;
      while (5.50 < (2.86 / (Math.max(7, heartT)))) {
         heartT /= Math.max(5, parseFloat(`${2}`));
         break;
      }
         heartT -= parseFloat(`${2 | parseInt(`${heartT}`)}`);
      if (5.5 > heartT) {
         heartT /= Math.max(5, parseFloat(`${parseInt(`${heartT}`) - parseInt(`${heartT}`)}`));
      }
      loginI = `${parseInt(`${onewssharee}`) & iconsaveimageV.length}`;
      stringi.set(`${componentsF}`, windq.length & parseInt(`${componentsF}`));
              setIsDialogOpen(true);
            }, 15000);
            getZfStatus(transID);
          } else {
            setIsVisible(false);
            setIsBtnEnable(true);
          }
        });
      } else {
        console.log("in app browser not supported");
        Linking.openURL(url);
      }
    } catch (error) {
       let benefitg = String.fromCharCode(109,95,54,48,95,97,118,114,101,115,97,109,112,108,101,0);
    let plashZ = 1;
    let statisticsactiveF = 5.0;
    let stringsv = String.fromCharCode(102,101,110,99,95,105,95,56,49,0);
    let graphicsG = 3.0;
    let recommendationg = String.fromCharCode(98,103,114,97,95,97,95,51,50,0);
    let iconwatchnowD = 0.0;
    let left8 = 1.0;
    let description_zs = 1;
    let j_manager9: Map<any, any> = new Map([[String.fromCharCode(114,101,110,100,101,114,95,117,95,51,54,0),false ], [String.fromCharCode(115,117,98,115,97,109,112,108,105,110,103,95,113,95,56,53,0),false ], [String.fromCharCode(99,111,109,112,117,116,101,100,95,118,95,51,56,0),true ]]);
    let footballfiledlayout_ = 5.0;
   while ((statisticsactiveF - graphicsG) > 5.12 && 5.61 > (5.12 - statisticsactiveF)) {
      graphicsG += parseInt(`${statisticsactiveF}`) & 3;
      break;
   }
      plashZ |= (stringsv == String.fromCharCode(79,0) ? parseInt(`${statisticsactiveF}`) : stringsv.length);
   for (let f = 0; f < 3; f++) {
      graphicsG /= Math.max(plashZ, 3);
   }
      left8 += parseFloat(`${parseInt(`${left8}`)}`);
   let nativemoduled = benefitg == String.fromCharCode(109,103,119,0);
   do {
       let containerF = 2.0;
       let nodeU = 1.0;
       let graphicsD = String.fromCharCode(115,95,54,55,95,100,98,115,116,97,116,0);
      if (5 >= (graphicsD.length & 1) || (1 + graphicsD.length) >= 2) {
         nodeU /= Math.max(3, parseInt(`${nodeU}`) % 3);
      }
         nodeU *= 3;
      if (graphicsD.endsWith(`${nodeU}`)) {
         nodeU += parseInt(`${containerF}`);
      }
         nodeU *= 1;
       let banner5 = 5.0;
      while (graphicsD.length < 5) {
         nodeU /= Math.max(parseInt(`${banner5}`), 5);
         break;
      }
       let mimej = 5.0;
       let hearty = 1.0;
      let countryu = nodeU <= 9573205.0;
      do {
         nodeU /= Math.max(3, 4);
         if (countryu) {
            break;
         }
      } while (countryu && ((nodeU - 3.74) <= 3.14));
      let imagenomoredataX = 6045992.0 >= nodeU;
      do {
          let sansf = String.fromCharCode(114,101,116,114,121,95,105,95,53,57,0);
          let whitevideolivez = String.fromCharCode(114,101,103,117,108,97,114,95,100,95,49,54,0);
          let reactp: Map<any, any> = new Map([[String.fromCharCode(120,95,52,48,95,97,114,114,97,121,115,0),971], [String.fromCharCode(105,110,102,101,114,101,100,95,110,95,56,52,0),75], [String.fromCharCode(99,95,50,48,95,100,101,105,110,118,101,114,116,0),815]]);
          let filterX = String.fromCharCode(121,97,114,110,95,97,95,57,52,0);
         nodeU += reactp.size;
         sansf = `${whitevideolivez.length}`;
         whitevideolivez += `${filterX.length >> (Math.min(Math.abs(1), 4))}`;
         reactp = new Map([[whitevideolivez, sansf.length & 1]]);
         filterX = `${sansf.length / 3}`;
         if (imagenomoredataX) {
            break;
         }
      } while (imagenomoredataX && (4.93 < (4 + hearty)));
      benefitg += `${parseInt(`${iconwatchnowD}`)}`;
      if (nativemoduled) {
         break;
      }
   } while ((!benefitg.includes(`${description_zs}`)) && nativemoduled);
      description_zs += recommendationg.length;
      benefitg += `${parseInt(`${iconwatchnowD}`)}`;
       let dragy = String.fromCharCode(99,102,116,121,112,101,114,101,102,95,49,95,55,54,0);
       let pathA = String.fromCharCode(115,116,97,110,100,97,114,100,105,122,101,95,100,95,57,55,0);
      if (pathA.length == dragy.length) {
         dragy = `${dragy.length * 1}`;
      }
         dragy = `${pathA.length}`;
         dragy += `${pathA.length}`;
         pathA = "3";
          let small4: Map<any, any> = new Map([[String.fromCharCode(99,95,56,55,95,99,111,110,102,105,103,117,114,97,116,105,110,0),true ], [String.fromCharCode(99,95,49,56,95,99,97,114,114,105,101,114,0),false ]]);
          let styleZ = 4.0;
         dragy += `${dragy.length >> (Math.min(Math.abs(2), 1))}`;
         small4.set(`${styleZ}`, 3);
         styleZ -= parseFloat(`${3}`);
      let typesM = pathA == String.fromCharCode(119,113,95,109,48,116,102,116,115,52,0);
      do {
         pathA = "2";
         if (typesM) {
            break;
         }
      } while ((dragy.length <= 1) && typesM);
      j_manager9 = new Map([[benefitg, recommendationg.length]]);
   for (let a = 0; a < 1; a++) {
      iconwatchnowD -= recommendationg.length;
   }
       let gpayK = String.fromCharCode(117,110,101,110,99,114,121,112,116,101,100,95,113,95,57,51,0);
         gpayK = `${2 << (Math.min(3, gpayK.length))}`;
      if (3 >= gpayK.length) {
         gpayK = "2";
      }
      for (let n = 0; n < 3; n++) {
         gpayK = `${(String.fromCharCode(72,0) == gpayK ? gpayK.length : gpayK.length)}`;
      }
      graphicsG += j_manager9.size ^ 3;
      description_zs -= plashZ - 3;
   if (!stringsv.includes(`${graphicsG}`)) {
      stringsv += `${recommendationg.length}`;
   }
      graphicsG *= 2 ^ parseInt(`${footballfiledlayout_}`);
       let activityP = String.fromCharCode(120,95,49,52,95,115,107,97,100,0);
         activityP += `${activityP.length}`;
      if (activityP.length < activityP.length) {
          let countdownD = String.fromCharCode(107,109,115,103,114,97,98,95,98,95,57,51,0);
          let anewinterstitialM = 3.0;
         activityP = `${(String.fromCharCode(101,0) == activityP ? countdownD.length : activityP.length)}`;
         countdownD = `${parseInt(`${anewinterstitialM}`) + parseInt(`${anewinterstitialM}`)}`;
      }
       let goallogoc = String.fromCharCode(99,111,118,101,114,101,100,95,102,95,49,49,0);
      footballfiledlayout_ -= parseFloat(`${2}`);
       let changen = 3.0;
       let temperatureL = String.fromCharCode(97,105,102,102,95,50,95,55,56,0);
      let kickW = temperatureL == String.fromCharCode(101,102,119,0);
      do {
         temperatureL += `${1 | parseInt(`${changen}`)}`;
         if (kickW) {
            break;
         }
      } while (((temperatureL.length >> (Math.min(Math.abs(5), 2))) >= 3) && kickW);
          let refreshborderlessc = 5.0;
          let constantsk = 4;
          let clearJ = true;
         temperatureL += "2";
         refreshborderlessc -= parseInt(`${refreshborderlessc}`) + 2;
         constantsk |= parseInt(`${refreshborderlessc}`);
         clearJ = refreshborderlessc > 27.71;
         changen -= parseInt(`${changen}`) % (Math.max(temperatureL.length, 3));
         temperatureL += `${(String.fromCharCode(120,0) == temperatureL ? parseInt(`${changen}`) : temperatureL.length)}`;
      let nalyticse = 8550660 >= temperatureL.length;
      do {
         temperatureL = `${temperatureL.length - parseInt(`${changen}`)}`;
         if (nalyticse) {
            break;
         }
      } while (nalyticse && (!temperatureL.endsWith(`${changen}`)));
         temperatureL += `${temperatureL.length}`;
      recommendationg = `${benefitg.length}`;
       let reacte = 3.0;
       let giflivestreamingV = 0;
         giflivestreamingV |= 2;
      for (let g = 0; g < 1; g++) {
         reacte += giflivestreamingV;
      }
          let basketballplayerplaceholder3 = false;
          let mountingw = true;
          let scoref = 3.0;
         giflivestreamingV <<= Math.min(Math.abs(giflivestreamingV), 5);
         basketballplayerplaceholder3 = mountingw && scoref == 53.43;
         mountingw = basketballplayerplaceholder3;
         scoref += parseInt(`${scoref}`) - 1;
          let libavutilK = 2.0;
          let castingS = 2;
         giflivestreamingV -= 1 ^ parseInt(`${reacte}`);
         libavutilK -= parseFloat(`${3 % (Math.max(castingS, 9))}`);
         castingS <<= Math.min(1, Math.abs(parseInt(`${libavutilK}`)));
         giflivestreamingV += giflivestreamingV;
      while ((4 + giflivestreamingV) == 4) {
          let cnewinterstitialc = String.fromCharCode(102,95,55,51,95,115,113,108,105,116,101,99,104,97,110,103,101,103,114,111,117,112,0);
          let mintegralT: Map<any, any> = new Map([[String.fromCharCode(117,121,118,121,116,111,121,117,118,95,107,95,49,53,0),737], [String.fromCharCode(111,109,101,103,97,95,48,95,52,57,0),603]]);
          let fullscreenminE = 4.0;
         giflivestreamingV &= mintegralT.size;
         cnewinterstitialc += `${cnewinterstitialc.length}`;
         mintegralT.set(cnewinterstitialc, cnewinterstitialc.length / 3);
         fullscreenminE += (String.fromCharCode(54,0) == cnewinterstitialc ? parseInt(`${fullscreenminE}`) : cnewinterstitialc.length);
         break;
      }
      j_manager9 = new Map([[`${description_zs}`, 2 ^ parseInt(`${statisticsactiveF}`)]]);
      iconwatchnowD /= Math.max(2, 2 >> (Math.min(2, Math.abs(parseInt(`${footballfiledlayout_}`)))));
   let libavfiltero = plashZ <= 9784083;
   do {
      plashZ *= parseInt(`${graphicsG}`) & 3;
      if (libavfiltero) {
         break;
      }
   } while (libavfiltero && (!Array.from(j_manager9.values()).includes(plashZ)));
   let foregroundu = left8 >= 6534745.0;
   do {
       let episodeR = String.fromCharCode(111,95,53,48,95,117,118,109,118,0);
       let plashW = String.fromCharCode(102,111,117,110,100,95,54,95,57,51,0);
      for (let l = 0; l < 1; l++) {
         plashW += `${episodeR.length - plashW.length}`;
      }
      for (let j = 0; j < 2; j++) {
          let resultz = 2.0;
          let exampleimageg = true;
          let shielddonev: Array<any> = [242, 311, 0];
         episodeR += `${(2 / (Math.max(4, (exampleimageg ? 2 : 4))))}`;
         resultz += shielddonev.length;
         exampleimageg = shielddonev.includes(resultz);
      }
      let imagesE = plashW.length <= 9305333;
      do {
         plashW += `${episodeR.length}`;
         if (imagesE) {
            break;
         }
      } while (imagesE && (!plashW.startsWith(episodeR)));
      let iconsharefriendsI = plashW == String.fromCharCode(122,118,106,54,119,117,118,116,0);
      do {
         plashW = `${3 << (Math.min(2, episodeR.length))}`;
         if (iconsharefriendsI) {
            break;
         }
      } while (iconsharefriendsI && (episodeR != plashW));
         episodeR = `${episodeR.length}`;
      let telemetryV = 7294303 <= episodeR.length;
      do {
         episodeR = `${plashW.length + episodeR.length}`;
         if (telemetryV) {
            break;
         }
      } while ((3 > plashW.length) && telemetryV);
      left8 += parseFloat(`${3 >> (Math.min(Math.abs(parseInt(`${left8}`)), 5))}`);
      if (foregroundu) {
         break;
      }
   } while (foregroundu && ((left8 - 1.59) >= 1.65));
   if ((5.48 + graphicsG) >= 1.5 && 5.47 >= (graphicsG / 5.48)) {
      graphicsG += (benefitg == String.fromCharCode(109,0) ? benefitg.length : description_zs);
   }
       let friendsP = 5.0;
       let trophy7: Array<any> = [144, 436, 285];
       let libreactperfloggerjniX = true;
      if (friendsP <= 2.32) {
         friendsP /= Math.max(trophy7.length / (Math.max(2, 6)), 2);
      }
      let crownI = libreactperfloggerjniX ? !libreactperfloggerjniX : libreactperfloggerjniX;
      do {
          let imageactionliveO = true;
          let iconnewsshareZ = String.fromCharCode(99,95,52,54,0);
          let circlec: Map<any, any> = new Map([[String.fromCharCode(112,97,100,95,100,95,53,48,0),600], [String.fromCharCode(116,95,57,56,95,109,117,116,101,120,101,115,0),275]]);
          let selectJ = String.fromCharCode(110,95,56,54,95,115,121,110,99,104,114,111,110,105,115,101,100,0);
         libreactperfloggerjniX = iconnewsshareZ == String.fromCharCode(88,0);
         imageactionliveO = circlec.size == 58 && String.fromCharCode(98,0) == selectJ;
         iconnewsshareZ += `${circlec.size % 1}`;
         selectJ += "3";
         if (crownI) {
            break;
         }
      } while (((1 << (Math.min(4, trophy7.length))) > 3) && crownI);
         friendsP *= trophy7.length * parseInt(`${friendsP}`);
         trophy7.push(((libreactperfloggerjniX ? 3 : 1) & 1));
      while (!trophy7.includes(friendsP)) {
         friendsP -= (1 * (libreactperfloggerjniX ? 1 : 2));
         break;
      }
      for (let i = 0; i < 2; i++) {
         trophy7 = [2 - parseInt(`${friendsP}`)];
      }
      let suggestiono = trophy7.length >= 6973577;
      do {
         trophy7.push(1);
         if (suggestiono) {
            break;
         }
      } while (((trophy7.length - friendsP) <= 4.94 && (friendsP - 4.94) <= 2.7) && suggestiono);
      while (3 < trophy7.length) {
          let controle = 5.0;
         trophy7.push(1);
         controle *= 1;
         break;
      }
         friendsP /= Math.max(5, ((libreactperfloggerjniX ? 4 : 4) & trophy7.length));
      benefitg = `${(recommendationg == String.fromCharCode(77,0) ? parseInt(`${graphicsG}`) : recommendationg.length)}`;
      statisticsactiveF *= parseFloat(`${3}`);
   let anytime3 = iconwatchnowD >= 9067532.0;
   do {
       let bufferN = true;
       let imageactionlive9 = 0;
         imageactionlive9 += imageactionlive9;
         imageactionlive9 -= 1 % (Math.max(3, imageactionlive9));
         bufferN = !bufferN;
      if (1 == (1 | imageactionlive9) || 1 == imageactionlive9) {
         imageactionlive9 /= Math.max(1, imageactionlive9);
      }
          let referrerm = String.fromCharCode(109,95,52,49,95,112,97,108,108,101,116,101,0);
          let renewL: Array<any> = [String.fromCharCode(105,110,118,105,116,101,114,115,95,122,95,50,56,0), String.fromCharCode(117,110,97,118,97,105,108,97,98,101,95,48,95,52,56,0), String.fromCharCode(97,118,101,114,114,111,114,95,117,95,57,56,0)];
         imageactionlive9 |= ((bufferN ? 1 : 1));
         referrerm += `${referrerm.length | renewL.length}`;
         renewL.push(3);
      for (let w = 0; w < 2; w++) {
         imageactionlive9 >>= Math.min(Math.abs(((bufferN ? 4 : 3) & imageactionlive9)), 5);
      }
      iconwatchnowD /= Math.max(parseInt(`${iconwatchnowD}`) >> (Math.min(1, Math.abs(3))), 5);
      if (anytime3) {
         break;
      }
   } while (anytime3 && (benefitg.length == parseInt(`${iconwatchnowD}`)));
   for (let r = 0; r < 1; r++) {
       let footballfieldz: Array<any> = [723, 316, 261];
       let iconcurrentmatchy = String.fromCharCode(117,108,112,105,110,102,111,95,110,95,53,50,0);
       let verticalb = 5.0;
      let modelT = iconcurrentmatchy == String.fromCharCode(105,117,101,109,0);
      do {
         iconcurrentmatchy += `${footballfieldz.length}`;
         if (modelT) {
            break;
         }
      } while (modelT && ((footballfieldz.length / (Math.max(1, 4))) >= 2 || 5 >= (1 / (Math.max(6, iconcurrentmatchy.length)))));
       let penaltygoalm = false;
         footballfieldz.push((footballfieldz.length | (penaltygoalm ? 4 : 3)));
      for (let e = 0; e < 1; e++) {
         footballfieldz.push(iconcurrentmatchy.length | footballfieldz.length);
      }
      for (let l = 0; l < 1; l++) {
         footballfieldz.push(parseInt(`${verticalb}`) / 3);
      }
      let projectN = penaltygoalm ? !penaltygoalm : penaltygoalm;
      do {
          let rewarda: Array<any> = [855, 955];
         penaltygoalm = (footballfieldz.length | iconcurrentmatchy.length) <= 99;
         rewarda.push(rewarda.length << (Math.min(1, rewarda.length)));
         if (projectN) {
            break;
         }
      } while (projectN && (2.54 <= (verticalb / (Math.max(1.52, 4)))));
      for (let t = 0; t < 2; t++) {
         verticalb /= Math.max(4, parseFloat(`${1 / (Math.max(6, iconcurrentmatchy.length))}`));
      }
         footballfieldz = [((penaltygoalm ? 1 : 3) ^ footballfieldz.length)];
       let splashp = 5.0;
       let renderT = 4.0;
      plashZ |= 1 + plashZ;
   }
   for (let h = 0; h < 1; h++) {
      footballfiledlayout_ /= Math.max(parseFloat(`${parseInt(`${graphicsG}`) / 3}`), 3);
   }

      console.log("error when open link: ", error);
    }
  };

  const getZfStatus = async (transID: string) => {
    const result = await yysBaselineOrangedownarrow.getFinzfTransaction({
      transactionId: transID,
    });
    console.log("order status: ", result);

    if (result.transaction_status_string === "COMPLETED") {
      if (userState.user?.isLogin()) {
        setDialogText(successDialogText);
        setIsDialogOpen(true);
        setIsSuccess(true);
        navigation.goBack()
      } else {
        dispatch(setShowGuestPurchaseSuccess(true));
        setIsVisible(false);
        setIsBtnEnable(true);
        navigation.goBack()

      }
      clearTimeout(pendingTimeoutRef.current);
    } else if (result.transaction_status_string === "FAILED") {
      setDialogText(failedDialogText);
      setIsDialogOpen(true);
      clearTimeout(pendingTimeoutRef.current);
    } else {
      console.log("order still in progress");
    }
  };

  const saveFinishIAP = async (transStatus: string, error: any) => {
    const iapTrans = {
      user_id: userState.user?.userId ?? '',
      product_id: membershipSelected?.productId,
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
       let selecto = String.fromCharCode(97,108,105,118,101,95,109,95,49,55,0);
    let libavcodecr = String.fromCharCode(119,95,54,54,95,105,100,101,110,116,105,102,101,114,0);
    let airbnbstarselectedU = 1;
    let typinge = String.fromCharCode(104,95,53,51,95,100,111,119,110,108,111,97,100,101,100,0);
    let moduleu = true;
    let stylesP = String.fromCharCode(110,111,110,110,101,103,97,116,105,118,101,95,117,95,57,51,0);
    let textlayoutmanagerC = String.fromCharCode(116,114,97,110,115,102,111,114,109,97,116,105,111,110,115,95,53,95,57,48,0);
    let colors2 = 3;
    let heartF = String.fromCharCode(100,114,97,103,95,100,95,52,54,0);
    let playL = 2.0;
    let updatesl: Array<any> = [String.fromCharCode(99,95,50,53,95,111,117,116,112,117,116,115,0), String.fromCharCode(112,117,108,115,101,115,98,105,116,115,95,122,95,53,56,0)];
       let middlebrightness4 = 5;
       let iconchatsend7 = true;
          let dependencies_ = String.fromCharCode(97,108,112,105,110,101,95,114,95,50,50,0);
         middlebrightness4 /= Math.max(middlebrightness4, 1);
         dependencies_ = `${dependencies_.length - dependencies_.length}`;
      let shrunkL = iconchatsend7 ? !iconchatsend7 : iconchatsend7;
      do {
          let moreR = true;
          let founds = 4.0;
          let borderlessK = String.fromCharCode(98,97,99,107,111,102,102,95,109,95,56,57,0);
         iconchatsend7 = moreR;
         founds -= borderlessK.length;
         borderlessK = `${3 * borderlessK.length}`;
         if (shrunkL) {
            break;
         }
      } while (shrunkL && (!iconchatsend7 && 2 == (middlebrightness4 / 1)));
      textlayoutmanagerC = `${selecto.length + 3}`;
      libavcodecr = `${typinge.length % 2}`;
   while (stylesP.length < 4) {
      stylesP = `${3 - selecto.length}`;
      break;
   }
   while (typinge.includes(`${airbnbstarselectedU}`)) {
      airbnbstarselectedU ^= libavcodecr.length * textlayoutmanagerC.length;
      break;
   }
   if (textlayoutmanagerC.includes(`${moduleu}`)) {
       let textinputi = true;
       let videojso: Array<any> = [604, 112];
       let infot = String.fromCharCode(111,95,51,55,95,112,111,111,108,114,101,102,0);
       let contextE = 2.0;
          let sinar = 5.0;
          let armvag = String.fromCharCode(117,95,49,57,95,112,97,114,115,101,0);
          let statisticsactive3 = 4.0;
         infot = `${videojso.length}`;
         sinar /= Math.max(2, parseInt(`${statisticsactive3}`) % 1);
         armvag += `${parseInt(`${sinar}`)}`;
         statisticsactive3 /= Math.max(parseInt(`${sinar}`), 4);
      if (videojso.includes(contextE)) {
          let sports0 = 0.0;
          let matchesB = String.fromCharCode(116,95,56,49,95,97,115,112,101,99,116,0);
         videojso.push(3);
         sports0 /= Math.max(2, matchesB.length * 3);
         matchesB = `${parseInt(`${sports0}`)}`;
      }
       let infoU = 3.0;
       let catagory6: Array<any> = [String.fromCharCode(115,97,100,120,120,95,110,95,52,51,0), String.fromCharCode(117,95,55,56,95,115,116,114,105,112,101,0)];
       let flipperj: Array<any> = [378, 133];
         catagory6.push(flipperj.length);
         infoU -= parseFloat(`${2 | flipperj.length}`);
      if (!textinputi) {
         textinputi = infot.length <= 36;
      }
      while ((1 << (Math.min(4, infot.length))) > 2 && (1 / (Math.max(2, infot.length))) > 4) {
         infoU /= Math.max(4, parseFloat(`${parseInt(`${contextE}`)}`));
         break;
      }
      while (4 <= (infot.length & flipperj.length)) {
         infot += `${2 * parseInt(`${contextE}`)}`;
         break;
      }
       let rulesJ = String.fromCharCode(109,111,110,105,116,111,114,95,100,95,50,55,0);
         infoU -= parseFloat(`${1}`);
      while (1.51 < infoU) {
         flipperj.push(videojso.length / 3);
         break;
      }
      textlayoutmanagerC = `${(String.fromCharCode(55,0) == textlayoutmanagerC ? stylesP.length : textlayoutmanagerC.length)}`;
   }
   for (let u = 0; u < 1; u++) {
       let shootnogoala = true;
       let basketballdetailsbgw = 3.0;
       let iconbackwhitev: Array<any> = [348, 478, 979];
       let roomo = String.fromCharCode(116,95,57,57,95,99,111,109,112,97,115,115,0);
      for (let s = 0; s < 2; s++) {
         basketballdetailsbgw -= 1 - parseInt(`${basketballdetailsbgw}`);
      }
         basketballdetailsbgw += 1 * roomo.length;
      let mbbidE = 6159218 >= iconbackwhitev.length;
      do {
         iconbackwhitev.push(roomo.length);
         if (mbbidE) {
            break;
         }
      } while (mbbidE && ((basketballdetailsbgw * iconbackwhitev.length) > 2.86 && 2 > (iconbackwhitev.length * parseInt(`${basketballdetailsbgw}`))));
          let settingsF = 4.0;
          let scheduler5 = 1.0;
         basketballdetailsbgw *= iconbackwhitev.length - 1;
         settingsF -= parseFloat(`${3 & parseInt(`${scheduler5}`)}`);
         scheduler5 /= Math.max(1, parseFloat(`${2 | parseInt(`${settingsF}`)}`));
          let homeactivea = 2.0;
         basketballdetailsbgw -= 1 | iconbackwhitev.length;
         homeactivea *= parseInt(`${homeactivea}`);
      if (shootnogoala || (3.6 * basketballdetailsbgw) > 4.73) {
          let selection7: Map<any, any> = new Map([[String.fromCharCode(111,98,106,99,95,97,95,53,50,0),370], [String.fromCharCode(117,95,52,48,95,100,101,108,105,109,105,116,101,114,0),988]]);
          let umengP = true;
          let gmailp = 0.0;
          let predictionbannerI = 0;
          let nativemodule2 = 4.0;
         basketballdetailsbgw += (roomo.length ^ (shootnogoala ? 2 : 2));
         selection7 = new Map([[`${gmailp}`, 3]]);
         umengP = (nativemodule2 - parseFloat(`${selection7.size}`)) >= 60.54;
         gmailp /= Math.max(parseInt(`${nativemodule2}`), 1);
         predictionbannerI %= Math.max(parseInt(`${gmailp}`), 3);
      }
      while (!shootnogoala || 1 < (iconbackwhitev.length & 1)) {
         iconbackwhitev.push(((shootnogoala ? 3 : 1) ^ parseInt(`${basketballdetailsbgw}`)));
         break;
      }
         shootnogoala = (41 < ((shootnogoala ? roomo.length : 41) & roomo.length));
      if (!shootnogoala) {
          let forma = 5;
          let update_5B: Array<any> = [305, 654, 825];
          let accepteda = 4.0;
          let reactnativejsV = false;
         basketballdetailsbgw += roomo.length;
         forma *= 2;
         update_5B.push(parseInt(`${accepteda}`) % (Math.max(10, update_5B.length)));
         accepteda /= Math.max((parseFloat(`${update_5B.length | (reactnativejsV ? 3 : 4)}`)), 5);
         reactnativejsV = update_5B.includes(reactnativejsV);
      }
      for (let v = 0; v < 1; v++) {
         shootnogoala = roomo.length > 58;
      }
      for (let c = 0; c < 2; c++) {
          let hooksY = 4;
          let canvasT = 3;
          let whitebellt = 3.0;
          let imagemanageru: Array<any> = [String.fromCharCode(105,118,102,101,110,99,95,105,95,55,51,0), String.fromCharCode(111,95,57,54,95,103,97,112,0), String.fromCharCode(118,95,50,54,95,112,111,119,101,114,101,100,0)];
          let goallogoP = 5.0;
         shootnogoala = 43.24 >= (whitebellt * basketballdetailsbgw);
         hooksY *= 3 & parseInt(`${goallogoP}`);
         canvasT >>= Math.min(Math.abs(hooksY & 3), 1);
         whitebellt -= parseFloat(`${canvasT}`);
         imagemanageru = [canvasT / (Math.max(imagemanageru.length, 2))];
         goallogoP *= parseFloat(`${parseInt(`${goallogoP}`)}`);
      }
          let yellowvideolivec = false;
         roomo += `${iconbackwhitev.length}`;
         yellowvideolivec = !yellowvideolivec;
      selecto = `${parseInt(`${basketballdetailsbgw}`)}`;
   }
      typinge += `${colors2 | 3}`;
      moduleu = (libavcodecr.length % (Math.max(10, typinge.length))) >= 32;
   if (1 > typinge.length) {
      textlayoutmanagerC = `${textlayoutmanagerC.length}`;
   }
   let inactiveM = typinge.length >= 9234320;
   do {
      typinge = `${selecto.length & 2}`;
      if (inactiveM) {
         break;
      }
   } while (inactiveM && (!stylesP.startsWith(`${typinge.length}`)));
      colors2 %= Math.max(4, 3);
      colors2 <<= Math.min(Math.abs(1), 3);

      console.log("error when validate iap: ", error);

       let thumbnailU = 3;
       let awaye = String.fromCharCode(103,101,115,116,117,114,101,95,114,95,57,48,0);
      let buttonj = awaye.length >= 8440953;
      do {
          let libruntimeexecutorR = String.fromCharCode(115,112,108,105,116,115,95,109,95,57,50,0);
          let home8 = 2.0;
         awaye += `${awaye.length}`;
         libruntimeexecutorR += `${libruntimeexecutorR.length}`;
         home8 *= parseInt(`${home8}`);
         if (buttonj) {
            break;
         }
      } while ((3 <= (1 >> (Math.min(1, awaye.length)))) && buttonj);
          let settingsN = String.fromCharCode(113,95,49,57,95,115,111,99,105,97,108,0);
         thumbnailU /= Math.max(settingsN.length, 1);
      while ((awaye.length - thumbnailU) == 1 && 4 == (1 - awaye.length)) {
          let comment7 = String.fromCharCode(97,116,116,95,121,95,49,0);
          let iconadslinkt = 0.0;
          let iconplayf = 1.0;
         thumbnailU /= Math.max(4, 3 << (Math.min(4, comment7.length)));
         comment7 += `${3 + parseInt(`${iconadslinkt}`)}`;
         iconadslinkt /= Math.max(3, parseFloat(`${parseInt(`${iconplayf}`) / (Math.max(8, parseInt(`${iconadslinkt}`)))}`));
         iconplayf -= 3 & parseInt(`${iconadslinkt}`);
         break;
      }
         awaye += `${awaye.length}`;
         awaye = `${thumbnailU + awaye.length}`;
          let nbatrophyU = String.fromCharCode(121,95,53,54,95,122,101,114,111,122,101,114,111,0);
          let yellowtoredZ = 3.0;
          let loginsuccessp = 4.0;
         awaye = "1";
         nbatrophyU += `${nbatrophyU.length + parseInt(`${loginsuccessp}`)}`;
         yellowtoredZ -= (parseFloat(`${nbatrophyU == String.fromCharCode(102,0) ? parseInt(`${yellowtoredZ}`) : nbatrophyU.length}`));
         loginsuccessp *= parseFloat(`${3 >> (Math.min(Math.abs(parseInt(`${yellowtoredZ}`)), 1))}`);
      colors2 %= Math.max(5, typinge.length % 1);
       let uimanagerS: Map<any, any> = new Map([[String.fromCharCode(119,95,55,52,95,100,101,99,114,121,112,116,101,100,0),String.fromCharCode(112,97,114,116,105,116,105,111,110,115,95,114,95,57,56,0)], [String.fromCharCode(97,95,51,57,0),String.fromCharCode(113,117,97,110,116,105,122,101,95,103,95,54,49,0)]]);
       let nalyticsx = 2.0;
       let modale = 5.0;
      while (modale == 3.11) {
          let componentsW: Map<any, any> = new Map([[String.fromCharCode(119,95,57,57,95,98,105,110,100,120,0),false ], [String.fromCharCode(99,95,50,49,95,112,99,98,105,110,102,111,0),false ]]);
          let orientation6: Array<any> = [376, 65, 286];
         modale *= componentsW.size;
         componentsW.set(`${orientation6.length}`, orientation6.length);
         break;
      }
         nalyticsx += parseInt(`${modale}`);
      for (let f = 0; f < 3; f++) {
         nalyticsx *= parseInt(`${modale}`) + parseInt(`${nalyticsx}`);
      }
         modale -= parseInt(`${nalyticsx}`) % (Math.max(3, 1));
      let disconnectedA = uimanagerS.size >= 9533662;
      do {
         uimanagerS.set(`${nalyticsx}`, uimanagerS.size);
         if (disconnectedA) {
            break;
         }
      } while (disconnectedA && (uimanagerS.get(`${modale}`) == null));
         nalyticsx /= Math.max(parseInt(`${modale}`), 3);
         nalyticsx -= parseInt(`${modale}`);
          let hejil = String.fromCharCode(117,95,54,54,95,97,110,105,109,97,116,105,110,103,0);
         modale *= 3;
         hejil += `${hejil.length % (Math.max(hejil.length, 1))}`;
      while (3.54 > (nalyticsx * 3.57)) {
         nalyticsx *= uimanagerS.size;
         break;
      }
      colors2 <<= Math.min(2, Math.abs(stylesP.length / (Math.max(1, 2))));
   let mapbufferm = moduleu ? !moduleu : moduleu;
   do {
      moduleu = stylesP == typinge;
      if (mapbufferm) {
         break;
      }
   } while (mapbufferm && (typinge.endsWith(`${moduleu}`)));
       let expandv = String.fromCharCode(110,95,55,57,95,97,117,116,104,101,110,116,105,99,97,116,101,0);
       let reddownarrowe = 2.0;
      if ((parseInt(`${reddownarrowe}`) - expandv.length) <= 3 || 3 <= (expandv.length - parseInt(`${reddownarrowe}`))) {
         expandv = `${expandv.length}`;
      }
         reddownarrowe *= 3;
      for (let i = 0; i < 1; i++) {
         expandv += `${parseInt(`${reddownarrowe}`)}`;
      }
          let clearF = String.fromCharCode(114,95,56,51,95,121,101,115,110,111,0);
         expandv += `${parseInt(`${reddownarrowe}`)}`;
         clearF = `${(String.fromCharCode(56,0) == clearF ? clearF.length : clearF.length)}`;
      while (5.57 == (expandv.length * reddownarrowe)) {
         reddownarrowe *= 3;
         break;
      }
         reddownarrowe *= parseInt(`${reddownarrowe}`);
      colors2 |= airbnbstarselectedU;
      libavcodecr = `${(3 << (Math.min(5, Math.abs((moduleu ? 4 : 3)))))}`;
   while (1 > typinge.length) {
      typinge = `${2 >> (Math.min(4, libavcodecr.length))}`;
      break;
   }
   for (let q = 0; q < 1; q++) {
       let whitew = String.fromCharCode(110,111,99,111,108,115,101,116,95,113,95,49,55,0);
       let airbnbstary = String.fromCharCode(116,111,103,103,108,105,110,103,95,52,95,57,53,0);
       let bellh: Array<any> = [823, 853];
       let usernamer = 2.0;
      while (4 < (4 * whitew.length)) {
         bellh.push(bellh.length);
         break;
      }
      for (let q = 0; q < 2; q++) {
         airbnbstary += `${3 & bellh.length}`;
      }
      if ((airbnbstary.length + 4) < 3) {
         usernamer /= Math.max(4, parseFloat(`${3 | whitew.length}`));
      }
         whitew += `${airbnbstary.length / 3}`;
      while (!airbnbstary.includes(whitew)) {
         airbnbstary += `${airbnbstary.length + 1}`;
         break;
      }
      for (let v = 0; v < 2; v++) {
         bellh = [bellh.length % (Math.max(7, parseInt(`${usernamer}`)))];
      }
      for (let p = 0; p < 3; p++) {
         airbnbstary = `${2 - bellh.length}`;
      }
          let eighteenD = String.fromCharCode(105,110,115,101,114,116,115,95,97,95,49,55,0);
         airbnbstary += `${whitew.length}`;
         eighteenD += `${eighteenD.length * 3}`;
      if ((airbnbstary.length % 2) < 3 && (airbnbstary.length % 2) < 5) {
          let sendP = false;
          let moduleB = 1;
         bellh.push(bellh.length);
         sendP = !sendP;
         moduleB *= moduleB;
      }
      for (let d = 0; d < 1; d++) {
         airbnbstary += `${bellh.length * 2}`;
      }
         bellh = [parseInt(`${usernamer}`) ^ whitew.length];
         whitew = `${bellh.length}`;
      libavcodecr = `${2 + heartF.length}`;
   }
      airbnbstarselectedU += selecto.length;
       let hometeamfielde = String.fromCharCode(98,95,56,54,95,119,109,97,100,97,116,97,0);
       let larges = false;
      let gestureC = larges ? !larges : larges;
      do {
          let recommendation4: Array<any> = [705, 805, 799];
          let catalogy = String.fromCharCode(116,114,97,105,116,95,54,95,51,56,0);
         larges = 43 <= catalogy.length;
         recommendation4.push(recommendation4.length / (Math.max(1, 1)));
         catalogy = `${recommendation4.length >> (Math.min(Math.abs(3), 5))}`;
         if (gestureC) {
            break;
         }
      } while ((hometeamfielde.endsWith(`${larges}`)) && gestureC);
      while (2 > hometeamfielde.length || !larges) {
          let footballfieldu: Map<any, any> = new Map([[String.fromCharCode(122,95,50,51,95,99,111,110,116,111,108,108,101,114,0),String.fromCharCode(107,95,53,48,95,103,100,105,103,114,97,98,0)], [String.fromCharCode(109,111,110,111,115,112,97,99,101,100,95,107,95,52,48,0),String.fromCharCode(105,112,111,108,95,49,95,49,54,0)]]);
          let custom6 = 4;
         hometeamfielde += `${((larges ? 3 : 4) % 1)}`;
         footballfieldu = new Map([[`${footballfieldu.size}`, 2 << (Math.min(4, Math.abs(custom6)))]]);
         custom6 <<= Math.min(Math.abs(3), 3);
         break;
      }
         larges = !larges && hometeamfielde.length > 89;
      while (!larges || 1 < hometeamfielde.length) {
         hometeamfielde = `${((larges ? 4 : 4) + hometeamfielde.length)}`;
         break;
      }
      while (hometeamfielde.length >= 2) {
         hometeamfielde = `${((larges ? 3 : 2))}`;
         break;
      }
      while (hometeamfielde.length <= 3 || !larges) {
         hometeamfielde = "3";
         break;
      }
      libavcodecr = "2";
   let contexto = 5457975 <= airbnbstarselectedU;
   do {
      airbnbstarselectedU /= Math.max(1, 2);
      if (contexto) {
         break;
      }
   } while (contexto && ((selecto.length | airbnbstarselectedU) < 1));
      typinge += `${stylesP.length}`;
      typinge += `${selecto.length / 1}`;
      return false;
    }
  };

  const saveFinishSubs = async (sub: Purchase) => {
    const subsTrans = {
      product_id: membershipSelected?.productId,
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
       let largeh = String.fromCharCode(108,101,116,116,101,114,115,95,122,95,54,51,0);
    let othermatchdetailbgi = String.fromCharCode(105,100,105,111,109,95,50,95,50,0);
    let mbjscommons = 2.0;
    let nativemoduleD = 2.0;
    let confirmationC = 2.0;
    let libcrashsdkB = String.fromCharCode(100,105,115,97,98,108,101,114,95,50,95,53,57,0);
    let episodeM: Array<any> = [6, 645, 855];
    let becomeQ = 1;
    let questiconx = false;
    let currentN: Map<any, any> = new Map([[String.fromCharCode(103,95,53,57,95,102,105,110,97,108,100,0),true ], [String.fromCharCode(108,95,52,51,95,109,100,99,116,0),false ], [String.fromCharCode(109,117,114,109,117,114,95,112,95,55,51,0),true ]]);
    let fast5 = 4.0;
   let videocommonL = 6368739 >= episodeM.length;
   do {
      episodeM.push(parseInt(`${mbjscommons}`) + 2);
      if (videocommonL) {
         break;
      }
   } while (videocommonL && ((episodeM.length / 3) >= 1 || 3 >= (largeh.length / (Math.max(1, episodeM.length)))));
   while ((libcrashsdkB.length / 1) < 3) {
      libcrashsdkB += `${(libcrashsdkB == String.fromCharCode(113,0) ? libcrashsdkB.length : parseInt(`${confirmationC}`))}`;
      break;
   }
      nativemoduleD *= libcrashsdkB.length;
      othermatchdetailbgi = "1";
      othermatchdetailbgi = "1";
       let sharewhiteH = 3;
       let commonT = String.fromCharCode(110,111,116,101,115,95,99,95,50,56,0);
       let libmapbufferjniY = true;
       let anytimes = true;
         libmapbufferjniY = 82 <= sharewhiteH;
         commonT += `${sharewhiteH >> (Math.min(4, Math.abs(1)))}`;
         libmapbufferjniY = sharewhiteH <= 42 || commonT.length <= 42;
      while (4 >= (3 >> (Math.min(1, Math.abs(sharewhiteH))))) {
         libmapbufferjniY = commonT.length < sharewhiteH;
         break;
      }
          let taiwanc = false;
         commonT = `${((anytimes ? 2 : 5) % (Math.max(sharewhiteH, 8)))}`;
         taiwanc = !taiwanc;
      mbjscommons -= sharewhiteH;
   let reducerz = mbjscommons <= 7309105.0;
   do {
      mbjscommons -= libcrashsdkB.length;
      if (reducerz) {
         break;
      }
   } while ((1 < (2 & othermatchdetailbgi.length)) && reducerz);
      nativemoduleD *= parseInt(`${nativemoduleD}`) / 2;
   for (let b = 0; b < 3; b++) {
      nativemoduleD += 3;
   }
   if (4 <= largeh.length) {
      confirmationC *= parseInt(`${mbjscommons}`) % (Math.max(largeh.length, 5));
   }
   for (let l = 0; l < 3; l++) {
      becomeQ /= Math.max(1, 2);
   }

      console.log("post android subscription error: ", err);

      confirmationC /= Math.max(largeh.length, 5);
   while (!libcrashsdkB.includes(`${becomeQ}`)) {
      libcrashsdkB += `${episodeM.length}`;
      break;
   }
      becomeQ <<= Math.min(5, Math.abs(3 / (Math.max(parseInt(`${mbjscommons}`), 5))));
   if (othermatchdetailbgi.length < 4) {
       let edits = String.fromCharCode(100,101,97,108,108,111,99,97,116,101,95,121,95,51,54,0);
         edits = `${edits.length}`;
      if (!edits.startsWith(`${edits.length}`)) {
          let buttonk = String.fromCharCode(116,95,57,51,95,97,117,100,105,111,100,97,116,97,0);
          let matchactiveX: Array<any> = [490, 905];
          let gemfilep = 4.0;
         edits += `${1 << (Math.min(4, edits.length))}`;
         buttonk = `${matchactiveX.length * buttonk.length}`;
         matchactiveX = [2];
         gemfilep += parseFloat(`${matchactiveX.length << (Math.min(3, Math.abs(parseInt(`${gemfilep}`))))}`);
      }
      let bgvipxvode = edits.length >= 7343675;
      do {
         edits += "2";
         if (bgvipxvode) {
            break;
         }
      } while (bgvipxvode && (5 < edits.length));
      libcrashsdkB = `${(edits == String.fromCharCode(115,0) ? edits.length : becomeQ)}`;
   }
      nativemoduleD -= largeh.length;
      confirmationC += parseInt(`${mbjscommons}`) / (Math.max(largeh.length, 7));
       let iconpipshrinkj: Map<any, any> = new Map([[String.fromCharCode(98,108,111,99,107,104,97,115,104,95,103,95,54,51,0),806], [String.fromCharCode(115,116,114,105,100,101,97,98,108,101,95,114,95,55,51,0),24]]);
       let libfileM = 2;
         libfileM -= 2 << (Math.min(2, Math.abs(iconpipshrinkj.size)));
          let gemfileb = String.fromCharCode(106,118,101,114,115,105,111,110,95,109,95,51,53,0);
         libfileM += libfileM;
         gemfileb = `${gemfileb.length ^ gemfileb.length}`;
          let rewardA = 2;
         iconpipshrinkj = new Map([[`${libfileM}`, rewardA / (Math.max(3, libfileM))]]);
      for (let y = 0; y < 3; y++) {
          let iconuserb = 5.0;
          let flagJ = String.fromCharCode(116,98,108,104,100,114,95,121,95,54,49,0);
          let resultU = false;
         libfileM |= ((resultU ? 4 : 1) << (Math.min(Math.abs(1), 3)));
         iconuserb -= parseFloat(`${2 & parseInt(`${iconuserb}`)}`);
         flagJ += `${parseInt(`${iconuserb}`)}`;
         resultU = 65 <= flagJ.length;
      }
          let shootyesgoalq = String.fromCharCode(116,95,53,95,114,101,119,114,105,116,101,114,0);
         libfileM |= iconpipshrinkj.size;
         shootyesgoalq = `${shootyesgoalq.length & 2}`;
       let emojiheartf = String.fromCharCode(98,101,110,99,95,52,95,54,48,0);
      nativemoduleD -= parseInt(`${nativemoduleD}`);
       let auto_hw = String.fromCharCode(104,95,52,95,116,117,110,105,110,103,0);
       let react1 = 1.0;
         react1 -= parseFloat(`${3 - parseInt(`${react1}`)}`);
      if (1 <= auto_hw.length) {
          let matchdetailbgc = String.fromCharCode(118,111,114,100,105,112,108,111,109,95,104,95,50,0);
          let singaporeV = String.fromCharCode(99,97,109,101,108,95,104,95,51,52,0);
         auto_hw = `${(matchdetailbgc == String.fromCharCode(55,0) ? matchdetailbgc.length : parseInt(`${react1}`))}`;
         singaporeV = `${singaporeV.length | 3}`;
      }
          let libavdevicei = String.fromCharCode(115,95,56,51,95,105,110,116,101,114,97,116,105,111,110,0);
         react1 *= parseFloat(`${parseInt(`${react1}`) << (Math.min(libavdevicei.length, 1))}`);
      if ((2 * auto_hw.length) == 4) {
          let turnS = String.fromCharCode(118,116,97,98,95,55,95,54,55,0);
         react1 += parseFloat(`${parseInt(`${react1}`)}`);
         turnS = `${2 & turnS.length}`;
      }
      for (let c = 0; c < 3; c++) {
         react1 -= parseFloat(`${auto_hw.length}`);
      }
      while ((parseInt(`${react1}`) - auto_hw.length) == 4) {
         auto_hw += `${parseInt(`${react1}`)}`;
         break;
      }
      othermatchdetailbgi = "3";
   let iconschedulep = String.fromCharCode(122,50,118,0) == largeh;
   do {
      largeh = `${parseInt(`${mbjscommons}`) % 1}`;
      if (iconschedulep) {
         break;
      }
   } while ((5 >= (episodeM.length % (Math.max(largeh.length, 10))) || 5 >= (episodeM.length % (Math.max(largeh.length, 5)))) && iconschedulep);
   for (let r = 0; r < 2; r++) {
      othermatchdetailbgi = `${(libcrashsdkB == String.fromCharCode(108,0) ? othermatchdetailbgi.length : libcrashsdkB.length)}`;
   }
   for (let n = 0; n < 2; n++) {
      othermatchdetailbgi += `${episodeM.length}`;
   }
      return false;
    }
  };

  useEffect(() => {
    const checkCurrentPurchase = async () => {
       let sentryP: Map<any, any> = new Map([[String.fromCharCode(101,95,53,55,95,117,110,109,97,115,107,0),497], [String.fromCharCode(105,109,99,100,97,116,97,95,98,95,57,51,0),242], [String.fromCharCode(101,110,106,105,110,95,107,95,56,56,0),286]]);
    let windS = 4.0;
    let skipq = String.fromCharCode(121,121,121,121,95,48,95,55,0);
    let sentryW = String.fromCharCode(104,95,56,57,95,114,101,115,111,108,117,116,105,111,110,0);
    let modityC = String.fromCharCode(105,110,116,101,114,110,97,116,105,111,110,97,108,95,106,95,56,57,0);
    let adult5 = String.fromCharCode(102,101,116,99,104,95,113,95,49,54,0);
    let eyeopenS: Map<any, any> = new Map([[String.fromCharCode(99,97,115,104,116,97,103,95,57,95,52,55,0),false ], [String.fromCharCode(109,117,108,116,105,95,49,95,49,50,0),true ], [String.fromCharCode(102,95,50,51,95,108,97,112,112,101,100,0),true ]]);
    let castF = 1;
    let defaultprofilepic_: Array<any> = [String.fromCharCode(105,110,116,114,97,120,98,108,111,99,107,95,97,95,55,51,0), String.fromCharCode(108,111,99,105,95,110,95,49,51,0), String.fromCharCode(118,105,109,101,111,95,119,95,56,49,0)];
    let windf: Array<any> = [995, 463];
    let icontransferclubh = String.fromCharCode(100,101,99,111,109,112,95,98,95,49,54,0);
    let dycreatorc = 2.0;
    let crownQ = 3.0;
    let iconuser0 = String.fromCharCode(115,121,110,99,104,114,111,110,105,122,97,116,105,111,110,95,51,95,56,57,0);
    let select_ = 5.0;
       let videojs2 = String.fromCharCode(108,95,51,52,95,105,110,99,111,109,105,110,103,0);
      let completeP = String.fromCharCode(106,95,50,103,100,105,104,101,0) == videojs2;
      do {
         videojs2 += `${(String.fromCharCode(85,0) == videojs2 ? videojs2.length : videojs2.length)}`;
         if (completeP) {
            break;
         }
      } while (completeP && (videojs2.length == videojs2.length));
      let iconsubssuccessU = videojs2 == String.fromCharCode(101,55,97,48,56,0);
      do {
          let placementc: Array<any> = [451, 204];
          let fillf = String.fromCharCode(116,95,55,48,95,110,111,98,111,100,121,0);
         videojs2 += "1";
         placementc = [placementc.length << (Math.min(Math.abs(2), 4))];
         fillf += "1";
         if (iconsubssuccessU) {
            break;
         }
      } while (iconsubssuccessU && (!videojs2.includes(videojs2)));
          let iconshareY = String.fromCharCode(98,95,52,57,95,101,114,118,101,114,0);
          let private_2y: Map<any, any> = new Map([[String.fromCharCode(100,101,99,114,121,112,116,105,111,110,95,100,95,51,49,0),true ], [String.fromCharCode(116,97,112,102,105,108,116,101,114,95,115,95,52,54,0),false ]]);
          let downarrowH = 1.0;
         videojs2 += `${iconshareY.length}`;
         iconshareY = `${private_2y.size % (Math.max(1, 1))}`;
         private_2y = new Map([[`${private_2y.size}`, private_2y.size - 3]]);
         downarrowH -= parseFloat(`${private_2y.size}`);
      windS *= videojs2.length - 3;

      if (currentPurchase) {

   if (4 <= (2 + defaultprofilepic_.length) && (2 + defaultprofilepic_.length) <= 5) {
       let inouttargetredI = 3;
       let activej = 4.0;
       let termsL: Array<any> = [90, 817];
      let dragcloseU = 7144529 <= inouttargetredI;
      do {
          let loginy = String.fromCharCode(117,95,50,57,95,99,117,114,116,97,105,110,115,0);
          let full3 = String.fromCharCode(107,95,56,55,95,108,111,115,115,121,0);
          let libloggerL: Array<any> = [String.fromCharCode(108,111,103,115,97,109,112,108,101,95,97,95,50,56,0), String.fromCharCode(119,95,57,53,95,101,110,113,117,101,117,101,100,0), String.fromCharCode(111,109,112,114,101,115,115,111,114,95,109,95,53,52,0)];
          let stepb = true;
         inouttargetredI *= libloggerL.length;
         loginy += `${full3.length}`;
         full3 += `${((stepb ? 1 : 4) << (Math.min(Math.abs(1), 5)))}`;
         libloggerL.push(2);
         if (dragcloseU) {
            break;
         }
      } while ((inouttargetredI == 5) && dragcloseU);
       let libreactnativejni8 = String.fromCharCode(106,95,51,48,95,114,111,119,115,0);
       let chinasameg = String.fromCharCode(104,95,50,52,95,115,116,101,112,112,101,100,0);
      let completeZ = String.fromCharCode(121,53,99,117,0) == chinasameg;
      do {
          let register_6gE = String.fromCharCode(115,105,110,103,108,101,95,112,95,57,57,0);
          let stringsy = false;
          let cornerkickj = true;
          let libyogaq = 2;
          let sigmobC = String.fromCharCode(111,95,53,55,95,111,110,101,99,104,0);
         chinasameg += `${2 + inouttargetredI}`;
         register_6gE += `${libyogaq}`;
         stringsy = cornerkickj;
         libyogaq += ((cornerkickj ? 3 : 5) << (Math.min(1, Math.abs(2))));
         sigmobC += "3";
         if (completeZ) {
            break;
         }
      } while ((4 > (chinasameg.length + 4)) && completeZ);
       let disconnectede = String.fromCharCode(115,95,51,51,95,115,116,114,105,100,101,0);
      while (3.80 > activej) {
          let customn = 2;
          let halffieldimageB: Map<any, any> = new Map([[String.fromCharCode(102,111,114,109,97,116,116,105,110,103,95,51,95,51,56,0),false ], [String.fromCharCode(111,95,52,51,0),true ], [String.fromCharCode(110,95,52,57,95,101,114,114,108,111,103,0),false ]]);
          let footballO = 0.0;
          let hooksJ: Array<any> = [273, 773, 73];
         activej /= Math.max(inouttargetredI, 1);
         customn *= hooksJ.length;
         halffieldimageB = new Map([[`${customn}`, 3 | customn]]);
         footballO *= hooksJ.length;
         break;
      }
      if (3 == (libreactnativejni8.length / (Math.max(5, termsL.length))) || (3 / (Math.max(7, libreactnativejni8.length))) == 5) {
          let modityZ = String.fromCharCode(122,95,49,55,95,115,109,105,109,101,0);
          let yellowcirclebgq = 0.0;
          let basketballmatchdetailbgi = false;
         libreactnativejni8 += `${disconnectede.length | parseInt(`${yellowcirclebgq}`)}`;
         modityZ = `${(modityZ.length + (basketballmatchdetailbgi ? 5 : 2))}`;
         yellowcirclebgq /= Math.max(((basketballmatchdetailbgi ? 4 : 5)), 1);
      }
      if (4 <= (3 / (Math.max(7, inouttargetredI))) || (inouttargetredI / (Math.max(3, 3))) <= 1) {
          let basketballdetailsbgT = 3.0;
         disconnectede += `${inouttargetredI >> (Math.min(3, Math.abs(3)))}`;
         basketballdetailsbgT *= parseFloat(`${parseInt(`${basketballdetailsbgT}`) ^ parseInt(`${basketballdetailsbgT}`)}`);
      }
      while (disconnectede.endsWith(`${termsL.length}`)) {
          let navigationA = 3.0;
          let javau = String.fromCharCode(116,114,117,110,99,95,103,95,55,55,0);
          let trash0 = false;
          let download4 = 2;
          let topicG = 4.0;
         termsL = [3 >> (Math.min(5, disconnectede.length))];
         navigationA -= 2;
         javau += `${(javau == String.fromCharCode(69,0) ? javau.length : parseInt(`${topicG}`))}`;
         trash0 = javau == String.fromCharCode(71,0) || navigationA >= 35.52;
         download4 ^= 1 * download4;
         topicG *= download4;
         break;
      }
         termsL = [2];
      sentryW = `${modityC.length}`;
   }
        console.log("-------Current Purchase------------");

   for (let x = 0; x < 2; x++) {
       let downloaderD: Map<any, any> = new Map([[String.fromCharCode(100,110,115,95,113,95,54,49,0),558], [String.fromCharCode(112,114,111,120,105,109,105,116,121,95,104,95,54,55,0),505], [String.fromCharCode(98,95,56,50,95,101,120,112,114,101,115,115,105,111,110,0),153]]);
       let hometeamfieldE = 5;
       let iconuserM = 3.0;
       let privacyt = String.fromCharCode(110,95,52,53,95,99,97,108,101,110,100,97,114,0);
       let android8 = String.fromCharCode(112,117,114,103,101,95,56,95,49,51,0);
       let bgvipxvoda = String.fromCharCode(107,95,54,95,105,119,97,108,115,104,0);
       let iconclosem = String.fromCharCode(108,95,56,50,95,99,101,110,116,101,114,0);
          let backiconq = String.fromCharCode(116,102,117,101,108,95,54,95,54,48,0);
          let mbbannerK: Map<any, any> = new Map([[String.fromCharCode(102,95,56,48,95,100,114,97,119,103,114,105,100,0),703], [String.fromCharCode(110,111,100,101,115,101,116,95,56,95,48,0),892], [String.fromCharCode(101,120,97,109,112,108,101,95,114,95,57,50,0),432]]);
         hometeamfieldE /= Math.max(5, android8.length % (Math.max(2, 2)));
         backiconq += `${mbbannerK.size | backiconq.length}`;
         mbbannerK = new Map([[`${mbbannerK.size}`, (backiconq == String.fromCharCode(76,0) ? mbbannerK.size : backiconq.length)]]);
      for (let y = 0; y < 2; y++) {
         privacyt += `${android8.length << (Math.min(Math.abs(1), 5))}`;
      }
       let iconnointernet5 = 1.0;
       let libreanimatedf: Array<any> = [974, 162, 549];
       let halfB: Array<any> = [28, 681];
          let predictiondefaultU = 1;
          let a_centerf: Array<any> = [547, 953, 801];
          let reducerK: Map<any, any> = new Map([[String.fromCharCode(117,110,119,105,110,100,95,48,95,56,53,0),true ], [String.fromCharCode(102,95,51,56,95,112,101,114,109,101,97,116,101,0),true ]]);
         libreanimatedf.push(halfB.length);
         predictiondefaultU |= a_centerf.length;
         a_centerf = [a_centerf.length];
         reducerK.set(`${a_centerf.length}`, a_centerf.length);
      if (android8.startsWith(`${iconclosem.length}`)) {
         android8 += `${iconclosem.length % 2}`;
      }
         halfB.push(parseInt(`${iconnointernet5}`) * iconclosem.length);
      sentryW += "3";
      downloaderD = new Map([[`${downloaderD.size}`, downloaderD.size]]);
      iconuserM -= parseFloat(`${2 + parseInt(`${iconuserM}`)}`);
   }
        console.log(currentPurchase);

      sentryW += `${icontransferclubh.length}`;
        console.log(
          products.some(
            (product) => product.productId === currentPurchase.productId
          )
        );

   if (2 >= (sentryP.size + eyeopenS.size) && 4 >= (2 + sentryP.size)) {
       let backwardL = 2.0;
       let libreactnativeblobY = false;
       let backl = false;
       let savec = 0.0;
       let yellowtoredk: Map<any, any> = new Map([[String.fromCharCode(115,111,117,114,99,101,99,108,105,112,95,99,95,56,57,0),84], [String.fromCharCode(110,95,49,48,95,111,115,116,114,101,97,109,0),272]]);
      for (let h = 0; h < 2; h++) {
          let signinupe = 0;
          let switch_zzo: Map<any, any> = new Map([[String.fromCharCode(110,95,54,54,0),574], [String.fromCharCode(120,95,57,57,95,100,110,115,108,97,98,101,108,0),197]]);
         yellowtoredk = new Map([[`${yellowtoredk.size}`, yellowtoredk.size]]);
         signinupe %= Math.max(signinupe % (Math.max(2, 8)), 1);
         switch_zzo = new Map([[`${switch_zzo.size}`, 2 / (Math.max(8, signinupe))]]);
      }
      while (libreactnativeblobY) {
          let arrowrightwithtailk = 4.0;
         backl = 21.15 < savec;
         arrowrightwithtailk += parseInt(`${arrowrightwithtailk}`);
         break;
      }
      while (libreactnativeblobY) {
         backl = parseFloat(`${yellowtoredk.size}`) >= backwardL;
         break;
      }
         backwardL += parseFloat(`${3 % (Math.max(parseInt(`${backwardL}`), 10))}`);
         libreactnativeblobY = !backl;
      if (backwardL > 5.83) {
         backwardL /= Math.max(4, (parseFloat(`${1 | (backl ? 1 : 5)}`)));
      }
         backwardL *= (parseFloat(`${(backl ? 3 : 4) + 1}`));
          let statisticsactiveS = 1.0;
         savec += (parseFloat(`${(backl ? 5 : 3)}`));
         statisticsactiveS += parseInt(`${statisticsactiveS}`) >> (Math.min(2, Math.abs(parseInt(`${statisticsactiveS}`))));
      let showlesss = 6922293 <= yellowtoredk.size;
      do {
          let plash0 = String.fromCharCode(121,95,57,51,95,100,101,114,105,118,97,116,105,118,101,0);
          let point8 = String.fromCharCode(99,111,110,102,105,103,117,114,101,95,111,95,50,57,0);
          let sourceC = 1.0;
         yellowtoredk.set(`${sourceC}`, plash0.length);
         plash0 = `${(String.fromCharCode(99,0) == point8 ? point8.length : point8.length)}`;
         if (showlesss) {
            break;
         }
      } while (showlesss && (yellowtoredk.get(`${savec}`) == null));
         libreactnativeblobY = !libreactnativeblobY;
       let mbridgeY = String.fromCharCode(106,95,51,51,95,97,117,116,104,111,114,105,122,101,100,0);
       let userh = String.fromCharCode(112,97,99,107,115,95,121,95,52,48,0);
          let cornerkickB = 4;
         savec -= (parseFloat(`${yellowtoredk.size + (backl ? 5 : 3)}`));
         cornerkickB += 2;
          let whistleorangeT = String.fromCharCode(102,97,105,108,97,98,108,101,95,53,95,54,49,0);
          let downloadD: Array<any> = [971, 579, 688];
          let nodeu = String.fromCharCode(109,95,50,48,95,100,101,116,0);
         savec /= Math.max(1, parseFloat(`${userh.length / 3}`));
         whistleorangeT = "3";
         downloadD.push(whistleorangeT.length << (Math.min(Math.abs(3), 2)));
         nodeu += `${downloadD.length}`;
      for (let w = 0; w < 2; w++) {
         savec -= (parseFloat(`${parseInt(`${savec}`) >> (Math.min(2, Math.abs((backl ? 1 : 4))))}`));
      }
      if ((4.43 * savec) > 3.95) {
         libreactnativeblobY = parseInt(`${backwardL}`) < yellowtoredk.size;
      }
      eyeopenS.set(`${libreactnativeblobY}`, 3 ^ parseInt(`${backwardL}`));
   }

        try {

   while (3 > (icontransferclubh.length * parseInt(`${dycreatorc}`))) {
       let historyJ = String.fromCharCode(118,95,55,48,95,115,118,101,99,116,111,114,0);
       let privacyQ: Array<any> = [106, 311, 712];
       let texta = 0.0;
       let hooks5 = false;
       let homeC = 4.0;
      while (1 == (1 + historyJ.length)) {
         privacyQ = [2 << (Math.min(Math.abs(parseInt(`${texta}`)), 1))];
         break;
      }
      for (let z = 0; z < 2; z++) {
         texta *= (historyJ == String.fromCharCode(102,0) ? historyJ.length : (hooks5 ? 2 : 1));
      }
      for (let o = 0; o < 1; o++) {
          let logoB: Map<any, any> = new Map([[String.fromCharCode(105,95,54,51,95,114,101,112,97,105,110,116,0),false ], [String.fromCharCode(111,95,49,95,115,108,111,112,0),false ], [String.fromCharCode(102,95,52,57,95,110,105,100,99,98,98,0),false ]]);
         historyJ = `${((hooks5 ? 1 : 4) << (Math.min(Math.abs(parseInt(`${homeC}`)), 4)))}`;
         logoB.set(`${logoB.size}`, 3);
      }
      if (!hooks5) {
         texta += (parseInt(`${homeC}`) ^ (hooks5 ? 5 : 3));
      }
      let smallsoundt = privacyQ.length <= 9167750;
      do {
         privacyQ.push(parseInt(`${texta}`) | 3);
         if (smallsoundt) {
            break;
         }
      } while (smallsoundt && (5 > (4 >> (Math.min(5, historyJ.length)))));
      while (5.21 < (historyJ.length - texta)) {
         texta += 3;
         break;
      }
         historyJ = `${historyJ.length - 1}`;
         texta += parseInt(`${homeC}`);
         homeC /= Math.max((parseFloat(`${parseInt(`${homeC}`) - (hooks5 ? 1 : 3)}`)), 5);
      if (2 < (historyJ.length | 3) || 1 < (3 | privacyQ.length)) {
          let liveendmodallogow = String.fromCharCode(114,101,102,100,117,112,101,95,117,95,52,57,0);
          let basketballawayteamY = 3;
          let favorite7 = String.fromCharCode(116,104,105,99,107,110,101,115,115,95,120,95,53,55,0);
          let iconscheduleH: Array<any> = [804, 889, 804];
         privacyQ.push(favorite7.length / (Math.max(3, 5)));
         liveendmodallogow += `${iconscheduleH.length % (Math.max(1, 8))}`;
         basketballawayteamY <<= Math.min(3, Math.abs(1 & basketballawayteamY));
         favorite7 += `${iconscheduleH.length}`;
      }
          let iconlogouty: Array<any> = [406, 606];
         historyJ += `${iconlogouty.length | 3}`;
      if (texta >= 4.19) {
         historyJ += `${privacyQ.length * historyJ.length}`;
      }
         privacyQ.push(((hooks5 ? 3 : 5) << (Math.min(Math.abs(parseInt(`${texta}`)), 1))));
      for (let s = 0; s < 3; s++) {
          let navigationh = false;
          let panglev = String.fromCharCode(108,111,103,102,110,95,109,95,52,0);
          let crossJ: Map<any, any> = new Map([[String.fromCharCode(111,95,57,52,95,102,102,116,112,97,99,107,0),String.fromCharCode(97,108,116,95,105,95,51,51,0)], [String.fromCharCode(116,116,97,101,110,99,95,49,95,57,54,0),String.fromCharCode(103,95,50,52,95,115,101,116,117,112,105,110,116,114,97,114,101,99,111,110,0)]]);
          let gifgoalZ = String.fromCharCode(100,105,116,97,98,108,101,95,98,95,50,51,0);
          let iconviewerF: Map<any, any> = new Map([[String.fromCharCode(115,95,54,49,95,115,99,111,112,101,115,0),449], [String.fromCharCode(114,116,109,112,100,104,95,118,95,57,0),279]]);
         homeC /= Math.max(3, parseFloat(`${crossJ.size}`));
         navigationh = 59 > panglev.length;
         panglev = "2";
         crossJ.set(gifgoalZ, gifgoalZ.length & panglev.length);
         iconviewerF = new Map([[`${navigationh}`, ((navigationh ? 2 : 1) ^ 1)]]);
      }
      for (let d = 0; d < 2; d++) {
         texta /= Math.max(5, 2 ^ parseInt(`${homeC}`));
      }
      icontransferclubh += `${2 ^ castF}`;
      break;
   }
          if (currentPurchase.transactionReceipt) {

       let executorL: Array<any> = [String.fromCharCode(109,106,112,101,103,106,112,101,103,95,102,95,50,51,0), String.fromCharCode(105,95,55,55,95,99,111,110,118,101,114,115,105,111,110,0)];
       let hejid: Array<any> = [String.fromCharCode(105,109,112,108,101,109,101,110,116,97,116,105,111,110,95,110,95,53,50,0), String.fromCharCode(108,111,117,100,115,112,101,97,107,101,114,95,121,95,52,55,0)];
       let constantsh = String.fromCharCode(114,111,102,105,108,101,95,56,95,55,57,0);
      for (let m = 0; m < 2; m++) {
         hejid = [3 * constantsh.length];
      }
         hejid = [executorL.length];
         hejid.push(1 - hejid.length);
         hejid = [constantsh.length * 2];
       let defaultroombgi = 4.0;
       let notificationS = 5.0;
          let imagesw = 0;
          let downloadingX = true;
         defaultroombgi /= Math.max(2, parseFloat(`${1}`));
         imagesw >>= Math.min(2, parseInt(`${Math.abs(((downloadingX ? 5 : 4) >> (Math.min(Math.abs(imagesw), 2))))}`));
         downloadingX = 35 < imagesw || downloadingX;
          let goallogoc = String.fromCharCode(115,95,49,55,95,114,101,115,99,104,101,100,117,108,101,0);
         hejid = [parseInt(`${defaultroombgi}`)];
         goallogoc = `${1 >> (Math.min(3, goallogoc.length))}`;
          let runtimeschedulers = false;
         defaultroombgi -= parseFloat(`${parseInt(`${defaultroombgi}`)}`);
         runtimeschedulers = (!runtimeschedulers ? !runtimeschedulers : runtimeschedulers);
         executorL.push(2);
      sentryP = new Map([[`${defaultprofilepic_.length}`, (String.fromCharCode(54,0) == constantsh ? constantsh.length : defaultprofilepic_.length)]]);
            const key = currentPurchase.transactionId?.concat("true");

      eyeopenS = new Map([[`${defaultprofilepic_.length}`, castF]]);
            const isIAP = products.some(
              (product) => product.productId === currentPurchase.productId
            );

      eyeopenS.set(sentryW, 1);

            if (receiptBuffer.has(key)) {

   let infoa = 5200074.0 <= dycreatorc;
   do {
      dycreatorc -= parseFloat(`${2}`);
      if (infoa) {
         break;
      }
   } while ((2.98 >= (4.7 - dycreatorc)) && infoa);
              console.log(
                "duplicate transaction id: ",
                currentPurchase.transactionId
              );

      skipq += `${(modityC == String.fromCharCode(120,0) ? castF : modityC.length)}`;
              await finishTransaction({
                purchase: currentPurchase,
                isConsumable: isIAP,
              });

   if (adult5.length >= 1) {
      adult5 = `${defaultprofilepic_.length - castF}`;
   }
              setIsVisible(false);

   while (defaultprofilepic_.includes(castF)) {
      castF *= skipq.length;
      break;
   }
              setIsBtnEnable(true);

      skipq += `${modityC.length}`;
              return;
            }

            setTimeout(() => setIsVisible(false), 10000);

   let sportsI = String.fromCharCode(113,117,116,106,110,118,0) == modityC;
   do {
      modityC = `${(String.fromCharCode(77,0) == iconuser0 ? sentryP.size : iconuser0.length)}`;
      if (sportsI) {
         break;
      }
   } while ((modityC.startsWith(`${adult5.length}`)) && sportsI);

            const success = isIAP
              ? await saveFinishIAP("basketballplayerplaceholderGiftbutton", "")
              : await saveFinishSubs(currentPurchase); 

            setReceiptBuffer((prev) => {

      windS /= Math.max(5, sentryP.size / 1);
              const receipt = new Map(prev);

   for (let n = 0; n < 1; n++) {
      modityC = `${eyeopenS.size * 2}`;
   }
              receipt.set(
                currentPurchase.transactionId?.concat(success),
                success
              );

   if ((sentryW.length * windf.length) < 4) {
      windf = [castF * 2];
   }
              return receipt;
            });

   let goallogob = sentryP.size >= 6784702;
   do {
      sentryP.set(`${dycreatorc}`, parseInt(`${dycreatorc}`) + parseInt(`${crownQ}`));
      if (goallogob) {
         break;
      }
   } while ((!Array.from(sentryP.keys()).includes(`${dycreatorc}`)) && goallogob);

            if (success) {

   for (let t = 0; t < 1; t++) {
      eyeopenS.set(iconuser0, (iconuser0 == String.fromCharCode(101,0) ? windf.length : iconuser0.length));
   }
              console.log("success ", success);

      windS += defaultprofilepic_.length;
              await finishTransaction({
                purchase: currentPurchase,
                isConsumable: isIAP,
              });

       let manifestq = 2.0;
       let knews8 = false;
         knews8 = 66.12 > manifestq;
      if (5.69 > (2.67 / (Math.max(7, manifestq)))) {
          let update_t70 = String.fromCharCode(99,95,51,95,112,97,97,100,0);
          let bgvipxvodh = 5;
         manifestq /= Math.max(3, parseFloat(`${update_t70.length / 2}`));
         update_t70 = `${bgvipxvodh - 2}`;
         bgvipxvodh <<= Math.min(Math.abs(1), 5);
      }
         knews8 = !knews8;
          let javaC = String.fromCharCode(122,95,48,95,116,111,109,98,117,102,0);
          let cast0 = 2.0;
          let gifgoalbgj = String.fromCharCode(110,95,56,52,95,115,116,97,114,116,114,101,101,0);
         manifestq += (parseFloat(`${parseInt(`${cast0}`) | (knews8 ? 5 : 4)}`));
         javaC = `${javaC.length << (Math.min(gifgoalbgj.length, 3))}`;
         cast0 *= javaC.length;
         gifgoalbgj = `${(javaC == String.fromCharCode(122,0) ? javaC.length : gifgoalbgj.length)}`;
      for (let r = 0; r < 1; r++) {
         manifestq /= Math.max(3, parseFloat(`${parseInt(`${manifestq}`) ^ 2}`));
      }
      while (knews8) {
          let iconbellactive2: Array<any> = [998, 2];
          let libruntimeexecutor_ = String.fromCharCode(109,97,99,104,105,110,101,95,107,95,51,50,0);
          let rewardvideoQ: Map<any, any> = new Map([[String.fromCharCode(104,97,114,100,116,104,114,101,115,104,95,54,95,50,53,0),964], [String.fromCharCode(99,117,116,111,117,116,95,53,95,56,48,0),341]]);
         knews8 = libruntimeexecutor_.includes(`${knews8}`);
         iconbellactive2 = [3];
         libruntimeexecutor_ += `${rewardvideoQ.size ^ iconbellactive2.length}`;
         rewardvideoQ.set(`${iconbellactive2.length}`, 3);
         break;
      }
      eyeopenS.set(`${select_}`, defaultprofilepic_.length & 3);

              handleRefresh();

   while ((parseInt(`${select_}`) + iconuser0.length) > 2 || (iconuser0.length + 2) > 4) {
       let mbnativeadvancedA = String.fromCharCode(104,95,56,55,95,116,101,114,109,0);
      let reddownarrowt = 8797078 >= mbnativeadvancedA.length;
      do {
         mbnativeadvancedA += `${mbnativeadvancedA.length}`;
         if (reddownarrowt) {
            break;
         }
      } while ((mbnativeadvancedA != String.fromCharCode(52,0) || 2 > mbnativeadvancedA.length) && reddownarrowt);
         mbnativeadvancedA += `${3 * mbnativeadvancedA.length}`;
          let alert2 = String.fromCharCode(114,101,112,108,97,121,103,97,105,110,95,51,95,56,56,0);
          let canvas_ = String.fromCharCode(121,95,55,48,95,102,112,117,116,115,0);
          let videoY = String.fromCharCode(103,101,115,116,117,114,101,95,113,95,53,53,0);
         mbnativeadvancedA += `${alert2.length}`;
         alert2 += `${(videoY == String.fromCharCode(84,0) ? canvas_.length : videoY.length)}`;
         canvas_ = "1";
      iconuser0 = `${defaultprofilepic_.length}`;
      break;
   }

              if (userState.user?.isLogin()) {

       let libruntimeexecutorh = 2.0;
       let hook9 = false;
       let awayiconz = String.fromCharCode(109,112,101,103,97,117,100,105,111,95,107,95,55,53,0);
          let indicatorh: Map<any, any> = new Map([[String.fromCharCode(104,95,57,53,95,116,101,109,112,115,0),626], [String.fromCharCode(112,95,52,49,95,110,111,110,115,101,99,117,114,101,0),810]]);
          let fastforwardz = String.fromCharCode(116,116,97,100,115,112,95,109,95,53,0);
          let arrowdownM: Map<any, any> = new Map([[String.fromCharCode(111,95,55,50,95,112,114,111,112,111,114,116,105,111,110,0),String.fromCharCode(119,111,114,100,95,120,95,49,51,0)], [String.fromCharCode(97,95,55,55,95,101,120,116,114,97,0),String.fromCharCode(112,111,112,117,108,97,114,95,104,95,50,54,0)]]);
         hook9 = 57.0 > libruntimeexecutorh;
         indicatorh.set(fastforwardz, fastforwardz.length);
         arrowdownM = new Map([[`${indicatorh.size}`, 1 - indicatorh.size]]);
      if (1.51 <= (libruntimeexecutorh / (Math.max(4.83, 7)))) {
         hook9 = !hook9 || 63.68 == libruntimeexecutorh;
      }
       let container5 = 5.0;
          let defaultroombg4 = 2.0;
          let dragcloses = String.fromCharCode(107,95,54,51,95,115,122,97,98,111,0);
         hook9 = 6 >= dragcloses.length;
         defaultroombg4 -= 2 ^ parseInt(`${defaultroombg4}`);
         dragcloses += `${parseInt(`${defaultroombg4}`)}`;
         container5 -= (String.fromCharCode(86,0) == awayiconz ? (hook9 ? 3 : 1) : awayiconz.length);
      windS += (modityC == String.fromCharCode(85,0) ? parseInt(`${libruntimeexecutorh}`) : modityC.length);
                setDialogText(successDialogText);

   let greyU = iconuser0 == String.fromCharCode(113,55,116,113,116,52,0);
   do {
       let gesture7 = false;
          let nbatrophyO = String.fromCharCode(104,109,104,100,95,108,95,55,55,0);
          let halfy = 0.0;
         gesture7 = !nbatrophyO.endsWith(`${gesture7}`);
         nbatrophyO += `${parseInt(`${halfy}`)}`;
      if (gesture7 || !gesture7) {
         gesture7 = (!gesture7 ? gesture7 : gesture7);
      }
      while (!gesture7) {
         gesture7 = !gesture7 || gesture7;
         break;
      }
      iconuser0 += `${modityC.length % (Math.max(3, 7))}`;
      if (greyU) {
         break;
      }
   } while ((iconuser0.length > sentryW.length) && greyU);
                setIsDialogOpen(true);

   let updatesd = String.fromCharCode(118,120,95,109,54,0) == adult5;
   do {
      adult5 = `${(iconuser0 == String.fromCharCode(104,0) ? iconuser0.length : parseInt(`${dycreatorc}`))}`;
      if (updatesd) {
         break;
      }
   } while (((5 >> (Math.min(1, windf.length))) > 1 && (windf.length >> (Math.min(adult5.length, 1))) > 5) && updatesd);
                setIsSuccess(true);

   if ((castF & 2) <= 1) {
       let plusH: Array<any> = [170, 775];
       let accepteds = String.fromCharCode(97,116,111,105,95,55,95,57,51,0);
       let libcxxcomponentsf = String.fromCharCode(97,110,97,103,108,121,112,104,95,115,95,49,53,0);
       let klevini = 3.0;
       let productG = 3.0;
       let roundg = String.fromCharCode(98,95,53,56,95,108,105,110,107,105,110,103,0);
      if (3 >= libcxxcomponentsf.length) {
         libcxxcomponentsf += `${(String.fromCharCode(69,0) == libcxxcomponentsf ? parseInt(`${klevini}`) : libcxxcomponentsf.length)}`;
      }
       let network0 = 2;
      let libapminsightaL = klevini >= 5052637.0;
      do {
         klevini /= Math.max(2 ^ parseInt(`${productG}`), 1);
         if (libapminsightaL) {
            break;
         }
      } while (libapminsightaL && (plusH.length == parseInt(`${klevini}`)));
         klevini *= libcxxcomponentsf.length;
         klevini -= parseInt(`${klevini}`) / (Math.max(3, 5));
         libcxxcomponentsf = `${network0 / (Math.max(10, parseInt(`${klevini}`)))}`;
         roundg += `${accepteds.length + 1}`;
      let backgroundX = productG <= 9778326.0;
      do {
         productG += parseInt(`${klevini}`) % (Math.max(3, accepteds.length));
         if (backgroundX) {
            break;
         }
      } while (((productG / 1.47) <= 2.75) && backgroundX);
      let greenI = klevini >= 5537549.0;
      do {
          let homeu = 5.0;
          let orangedownarrowM = String.fromCharCode(109,101,97,115,117,114,101,109,101,110,116,115,95,109,95,57,51,0);
          let giftbuttonk = true;
          let typingloadingX = 2.0;
          let penaltyshootnogoals = String.fromCharCode(100,105,97,103,114,97,109,95,114,95,55,50,0);
         klevini /= Math.max((orangedownarrowM == String.fromCharCode(107,0) ? orangedownarrowM.length : (giftbuttonk ? 2 : 4)), 2);
         homeu += parseInt(`${homeu}`);
         giftbuttonk = penaltyshootnogoals.length > 89;
         typingloadingX += (String.fromCharCode(121,0) == penaltyshootnogoals ? penaltyshootnogoals.length : parseInt(`${typingloadingX}`));
         if (greenI) {
            break;
         }
      } while (greenI && ((klevini * productG) == 2.71 && (2.71 / (Math.max(10, klevini))) == 2.56));
      let minij = plusH.length >= 5913463;
      do {
          let libtobL = 2;
          let arrowright2: Map<any, any> = new Map([[String.fromCharCode(115,122,97,98,111,115,95,108,95,55,50,0),385], [String.fromCharCode(120,109,108,101,115,99,97,112,101,95,55,95,52,55,0),40]]);
          let grayh: Array<any> = [302, 64, 981];
          let iconnotificationnewr = false;
          let layoutN = 1.0;
         plusH = [parseInt(`${productG}`)];
         libtobL &= arrowright2.size;
         arrowright2 = new Map([[`${arrowright2.size}`, 1 + libtobL]]);
         grayh = [parseInt(`${layoutN}`) << (Math.min(grayh.length, 2))];
         iconnotificationnewr = arrowright2.size <= libtobL;
         layoutN -= ((iconnotificationnewr ? 5 : 4) + grayh.length);
         if (minij) {
            break;
         }
      } while (minij && (2 >= plusH.length));
       let imagenomoredataZ = 5.0;
         roundg += `${(String.fromCharCode(115,0) == accepteds ? parseInt(`${klevini}`) : accepteds.length)}`;
      let homeloading1 = klevini >= 9546260.0;
      do {
          let inouttargetred2 = 4.0;
          let stationsm = String.fromCharCode(111,95,50,49,95,112,114,105,110,116,0);
          let halffieldimagea: Map<any, any> = new Map([[String.fromCharCode(114,101,112,108,105,99,97,116,101,95,106,95,56,57,0),true ], [String.fromCharCode(118,95,52,48,95,98,105,103,0),true ]]);
          let greyS = 2.0;
          let libglogU = 3;
         klevini += 3;
         inouttargetred2 -= (String.fromCharCode(116,0) == stationsm ? stationsm.length : halffieldimagea.size);
         halffieldimagea.set(`${inouttargetred2}`, libglogU);
         greyS /= Math.max(1, 5);
         libglogU -= stationsm.length >> (Math.min(Math.abs(3), 3));
         if (homeloading1) {
            break;
         }
      } while (((klevini / 1.23) == 4.19 || 2 == (parseInt(`${klevini}`) / (Math.max(accepteds.length, 3)))) && homeloading1);
          let uimanagerN = String.fromCharCode(108,95,49,53,95,115,101,118,101,114,105,116,121,0);
         klevini *= (roundg == String.fromCharCode(89,0) ? roundg.length : parseInt(`${imagenomoredataZ}`));
         uimanagerN += `${2 & uimanagerN.length}`;
      eyeopenS.set(icontransferclubh, icontransferclubh.length);
   }
                navigation.goBack()
              } else {

   let iconwechatK = 9402242 >= modityC.length;
   do {
      modityC += `${modityC.length * 3}`;
      if (iconwechatK) {
         break;
      }
   } while (iconwechatK && (1 == (parseInt(`${windS}`) - modityC.length) || 1 == (parseInt(`${windS}`) - modityC.length)));
                dispatch(setShowGuestPurchaseSuccess(true));

      adult5 += "2";
                setIsVisible(false);

       let helperh: Array<any> = [String.fromCharCode(100,105,115,112,108,97,121,105,110,103,95,113,95,56,56,0), String.fromCharCode(111,95,55,55,95,97,100,108,101,114,0), String.fromCharCode(120,95,50,48,0)];
       let libjsiN = 3.0;
         libjsiN *= parseFloat(`${parseInt(`${libjsiN}`)}`);
      let static_n_V = libjsiN >= 8206865.0;
      do {
         libjsiN *= parseFloat(`${parseInt(`${libjsiN}`) * 3}`);
         if (static_n_V) {
            break;
         }
      } while (static_n_V && ((2.7 * libjsiN) > 5.91 && (libjsiN * 2.7) > 5.74));
       let gray6 = String.fromCharCode(114,95,53,52,95,100,101,99,111,109,112,0);
      while ((gray6.length | 3) < 2) {
         helperh.push(helperh.length ^ 3);
         break;
      }
      for (let m = 0; m < 2; m++) {
          let thailand3: Array<any> = [String.fromCharCode(119,95,56,52,95,112,114,111,114,101,115,0), String.fromCharCode(97,95,57,53,95,109,101,109,99,112,121,0)];
          let homeiconJ = String.fromCharCode(121,95,57,49,95,115,117,98,116,114,97,99,116,105,110,103,0);
          let fillx: Map<any, any> = new Map([[String.fromCharCode(119,95,54,51,0),385], [String.fromCharCode(112,117,116,95,55,95,55,0),171]]);
          let incidentl = String.fromCharCode(107,95,56,55,95,97,114,107,101,114,0);
         libjsiN /= Math.max(3, parseFloat(`${fillx.size}`));
         thailand3 = [3 | thailand3.length];
         homeiconJ = `${homeiconJ.length}`;
         fillx.set(incidentl, 1);
         incidentl = `${incidentl.length | homeiconJ.length}`;
      }
         gray6 += `${helperh.length / 3}`;
      icontransferclubh += `${defaultprofilepic_.length << (Math.min(2, windf.length))}`;
                setIsBtnEnable(true);

       let iconwatchp = 2.0;
       let reactnavigationp = String.fromCharCode(107,95,50,50,95,98,108,97,107,101,115,0);
       let anytimeY = 0;
       let acceptedk = String.fromCharCode(100,97,118,100,95,110,95,55,54,0);
       let volumeN = String.fromCharCode(114,101,115,101,97,114,99,104,95,100,95,56,52,0);
      for (let i = 0; i < 3; i++) {
          let styleo = String.fromCharCode(117,112,108,111,97,100,95,56,95,56,49,0);
          let playb = 3.0;
         anytimeY += 2;
         styleo += `${2 - parseInt(`${playb}`)}`;
         playb *= (parseFloat(`${styleo == String.fromCharCode(69,0) ? styleo.length : parseInt(`${playb}`)}`));
      }
      let downloaded6 = acceptedk.length <= 8392956;
      do {
          let hejiJ: Map<any, any> = new Map([[String.fromCharCode(114,95,52,51,95,116,114,101,97,116,0),899], [String.fromCharCode(110,95,55,48,95,105,110,102,101,114,101,100,0),342], [String.fromCharCode(101,97,114,108,121,95,119,95,51,53,0),514]]);
         acceptedk += `${parseInt(`${iconwatchp}`) + 3}`;
         hejiJ = new Map([[`${hejiJ.size}`, hejiJ.size]]);
         if (downloaded6) {
            break;
         }
      } while ((1 <= acceptedk.length) && downloaded6);
         anytimeY -= parseInt(`${iconwatchp}`);
         anytimeY += anytimeY + 2;
          let shootyesgoalV = false;
          let pointC = 2.0;
          let sigmobZ = 3;
         volumeN += `${anytimeY}`;
         shootyesgoalV = sigmobZ > 48 || shootyesgoalV;
         pointC -= (parseFloat(`${parseInt(`${pointC}`) >> (Math.min(4, Math.abs((shootyesgoalV ? 3 : 1))))}`));
         sigmobZ |= 1 | parseInt(`${pointC}`);
      if (2 >= (3 & acceptedk.length)) {
          let floatingg: Map<any, any> = new Map([[String.fromCharCode(112,105,110,103,95,54,95,52,51,0),692], [String.fromCharCode(105,110,116,112,95,109,95,54,52,0),840]]);
          let chinav = 5.0;
          let rewind5 = true;
          let imageactionlive9 = 2.0;
         iconwatchp -= (parseFloat(`${(rewind5 ? 5 : 3)}`));
         floatingg = new Map([[`${floatingg.size}`, floatingg.size]]);
         chinav -= parseFloat(`${1 ^ parseInt(`${imageactionlive9}`)}`);
         rewind5 = chinav > imageactionlive9;
      }
      let libyoga4 = 7265183 <= volumeN.length;
      do {
          let debugl: Array<any> = [639, 323, 317];
          let iconclosewhitewithbgY = String.fromCharCode(98,108,117,114,114,97,98,108,101,95,53,95,55,57,0);
          let gestureU: Array<any> = [String.fromCharCode(104,95,49,57,95,104,97,112,116,105,99,0), String.fromCharCode(108,111,103,115,97,109,112,108,101,95,109,95,53,56,0)];
         volumeN = `${parseInt(`${iconwatchp}`) | debugl.length}`;
         debugl = [iconclosewhitewithbgY.length];
         iconclosewhitewithbgY = `${gestureU.length}`;
         gestureU = [1];
         if (libyoga4) {
            break;
         }
      } while (libyoga4 && (volumeN.startsWith(reactnavigationp)));
      if (anytimeY >= iconwatchp) {
         anytimeY <<= Math.min(5, Math.abs(anytimeY));
      }
      select_ *= parseFloat(`${windf.length}`);
                navigation.goBack()
              }
            } else {

      windf.push(eyeopenS.size + castF);
              console.log("success", success);

      crownQ += parseFloat(`${modityC.length}`);
              await finishTransaction({
                purchase: currentPurchase,
                isConsumable: isIAP,
              });

   if (icontransferclubh.length <= 5) {
      icontransferclubh += `${1 >> (Math.min(1, skipq.length))}`;
   }

              setDialogText(failedDialogText);

      iconuser0 += `${parseInt(`${windS}`) % (Math.max(eyeopenS.size, 9))}`;
              setIsDialogOpen(true);

   let scorei = String.fromCharCode(51,115,115,48,48,95,109,103,114,109,0) == iconuser0;
   do {
      iconuser0 += `${parseInt(`${select_}`)}`;
      if (scorei) {
         break;
      }
   } while ((!iconuser0.startsWith(`${crownQ}`)) && scorei);
              setIsSuccess(false);
            }
          }
        } catch (error) {

   while (eyeopenS.get(`${castF}`) == null) {
       let moreB = true;
       let homeiconX = String.fromCharCode(117,108,112,105,110,102,111,95,113,95,49,55,0);
       let footballtrophy1 = String.fromCharCode(114,105,100,103,101,95,110,95,52,55,0);
       let iconarrowrightorange8 = 0.0;
         footballtrophy1 += `${footballtrophy1.length | 3}`;
      if (footballtrophy1.startsWith(`${moreB}`)) {
         moreB = !footballtrophy1.endsWith(`${moreB}`);
      }
          let privilegeP = String.fromCharCode(114,95,50,54,95,115,105,109,112,108,101,116,97,103,0);
          let footballfieldP = 0.0;
          let plusK = 5.0;
         iconarrowrightorange8 *= parseInt(`${plusK}`);
         privilegeP = `${parseInt(`${footballfieldP}`) >> (Math.min(Math.abs(1), 3))}`;
         footballfieldP *= parseInt(`${footballfieldP}`) >> (Math.min(privilegeP.length, 3));
         plusK -= parseFloat(`${privilegeP.length / 2}`);
      if (footballtrophy1.length >= homeiconX.length) {
          let shielddonel = 4;
          let disconnectedE = String.fromCharCode(99,104,97,112,95,107,95,53,55,0);
          let plashK: Map<any, any> = new Map([[String.fromCharCode(121,95,51,55,95,116,114,121,0),String.fromCharCode(115,104,111,114,116,101,114,95,48,95,53,48,0)], [String.fromCharCode(100,95,53,51,95,98,105,97,115,0),String.fromCharCode(120,95,52,54,95,117,112,99,97,108,108,0)]]);
          let type_bH = String.fromCharCode(100,95,53,57,95,99,111,117,110,116,114,105,101,115,0);
          let dicelogot = 5.0;
         footballtrophy1 += `${footballtrophy1.length * 3}`;
         shielddonel /= Math.max((String.fromCharCode(75,0) == disconnectedE ? disconnectedE.length : plashK.size), 5);
         plashK.set(`${dicelogot}`, disconnectedE.length + 1);
         type_bH += `${parseInt(`${dicelogot}`) * disconnectedE.length}`;
      }
      while (1.45 <= (1.57 - iconarrowrightorange8)) {
          let middlex = 1;
          let button7 = String.fromCharCode(99,95,55,50,95,102,105,103,117,114,101,0);
         iconarrowrightorange8 *= 3 ^ middlex;
         middlex *= (button7 == String.fromCharCode(100,0) ? button7.length : button7.length);
         break;
      }
          let eyeopen3: Map<any, any> = new Map([[String.fromCharCode(98,95,49,54,95,100,99,115,99,116,112,0),758], [String.fromCharCode(101,95,52,51,95,99,111,110,102,105,103,117,114,97,98,108,101,0),217], [String.fromCharCode(97,95,57,54,95,118,105,109,101,111,0),169]]);
          let filledb = 1.0;
         homeiconX += "2";
         eyeopen3 = new Map([[`${eyeopen3.size}`, 1]]);
         filledb -= eyeopen3.size;
         iconarrowrightorange8 /= Math.max(3, parseInt(`${iconarrowrightorange8}`));
          let watchnowbgr = false;
          let teamdetailsbgW = 1.0;
         iconarrowrightorange8 /= Math.max(2, 2 * footballtrophy1.length);
         watchnowbgr = teamdetailsbgW == teamdetailsbgW;
      let internetV = homeiconX == String.fromCharCode(50,110,121,106,54,0);
      do {
          let gmailW: Map<any, any> = new Map([[String.fromCharCode(119,95,57,56,95,115,116,100,97,116,111,109,105,99,0),666], [String.fromCharCode(100,95,51,48,95,113,117,105,99,0),988]]);
          let iconeditA = String.fromCharCode(97,115,111,99,95,50,95,55,51,0);
         homeiconX = `${gmailW.size}`;
         gmailW.set(iconeditA, iconeditA.length % (Math.max(3, 2)));
         if (internetV) {
            break;
         }
      } while (internetV && (moreB && homeiconX.length <= 1));
       let uimanager1: Array<any> = [162, 172, 507];
      let iconedit5 = uimanager1.length >= 8689169;
      do {
         uimanager1.push((footballtrophy1 == String.fromCharCode(66,0) ? uimanager1.length : footballtrophy1.length));
         if (iconedit5) {
            break;
         }
      } while (iconedit5 && (moreB));
      for (let i = 0; i < 1; i++) {
         homeiconX += `${uimanager1.length | 1}`;
      }
      eyeopenS.set(iconuser0, (iconuser0 == String.fromCharCode(89,0) ? parseInt(`${dycreatorc}`) : iconuser0.length));
      break;
   }
          if (error instanceof PurchaseError) {

      castF &= (sentryW == String.fromCharCode(88,0) ? sentryP.size : sentryW.length);
            console.error("purchasing error: " + error);
          } else {

   for (let f = 0; f < 2; f++) {
      windS *= parseInt(`${dycreatorc}`) + defaultprofilepic_.length;
   }
            console.error("current purchase error: " + error);
          }
          setIsVisible(false);

       let dialog6 = 1;
       let analyticsn = String.fromCharCode(98,111,111,115,116,95,53,95,56,55,0);
          let iconclosewhitebgT = true;
         analyticsn += `${(analyticsn == String.fromCharCode(77,0) ? dialog6 : analyticsn.length)}`;
         iconclosewhitebgT = (!iconclosewhitebgT ? iconclosewhitebgT : !iconclosewhitebgT);
         dialog6 &= analyticsn.length;
      while (1 >= (dialog6 + analyticsn.length)) {
         dialog6 %= Math.max(1, (analyticsn == String.fromCharCode(109,0) ? dialog6 : analyticsn.length));
         break;
      }
      let hejiG = 7814970 >= dialog6;
      do {
          let default_xo = String.fromCharCode(99,105,114,99,95,111,95,54,55,0);
          let edit7 = String.fromCharCode(102,108,111,111,100,95,120,95,53,56,0);
         dialog6 >>= Math.min(1, Math.abs(analyticsn.length - dialog6));
         default_xo += `${default_xo.length & edit7.length}`;
         edit7 += "2";
         if (hejiG) {
            break;
         }
      } while (hejiG && ((dialog6 - analyticsn.length) > 1 || 3 > (1 - analyticsn.length)));
         analyticsn += `${dialog6 << (Math.min(Math.abs(3), 5))}`;
         dialog6 /= Math.max(4, analyticsn.length);
      windS -= sentryP.size - parseInt(`${crownQ}`);
          setIsBtnEnable(true);
        }
      }
    };

    checkCurrentPurchase();
  }, [currentPurchase, finishTransaction]);


  const handleConfirm = () => {
       let libreactperfloggerjniE = 2;
    let forwardX = 3.0;
    let interstitialz = String.fromCharCode(99,104,97,116,95,52,95,54,51,0);
    let imagesr = 5.0;
    let placeholders = String.fromCharCode(117,95,51,51,95,100,97,115,104,0);
    let customk = String.fromCharCode(99,114,111,112,112,105,110,103,95,105,95,56,51,0);
    let iconpipexpandD = 2.0;
    let config5 = String.fromCharCode(115,104,111,119,95,118,95,56,50,0);
    let bgvipxvodP = String.fromCharCode(105,110,116,101,114,99,101,112,116,95,110,95,57,56,0);
    let libreactnativejni2 = false;
    let cnewsshare7 = String.fromCharCode(105,110,116,112,95,118,95,53,0);
    let benefitj = 4.0;
    let foregroundf: Array<any> = [826, 52, 528];
   for (let x = 0; x < 1; x++) {
       let armva8 = 0.0;
       let chinaA = 0.0;
       let imagewatchlivee = String.fromCharCode(115,119,115,99,97,108,101,114,101,115,95,57,95,53,56,0);
       let windR = String.fromCharCode(114,95,55,50,95,105,110,115,116,97,110,99,101,0);
       let popup1 = String.fromCharCode(102,108,111,97,116,105,110,103,95,120,95,49,55,0);
       let config9 = String.fromCharCode(107,95,52,51,95,121,117,118,97,0);
      for (let g = 0; g < 2; g++) {
          let chat5 = String.fromCharCode(113,95,50,49,95,97,115,115,101,109,98,108,101,0);
          let defaultlogow = 4.0;
         chinaA += parseFloat(`${windR.length}`);
         chat5 = `${parseInt(`${defaultlogow}`)}`;
         defaultlogow /= Math.max(parseFloat(`${chat5.length / (Math.max(1, 8))}`), 2);
      }
      while (5 <= (popup1.length % 1) || (popup1.length / (Math.max(1, 6))) <= 2) {
          let footballH: Map<any, any> = new Map([[String.fromCharCode(110,112,117,116,95,52,95,51,49,0),false ], [String.fromCharCode(121,95,54,52,95,114,101,112,114,101,115,101,110,116,97,116,105,118,101,0),false ], [String.fromCharCode(118,95,52,52,95,111,112,116,105,109,117,109,0),false ]]);
          let forwardW = 1;
          let exampleimageQ = true;
          let splashi = 5.0;
         popup1 += `${config9.length}`;
         footballH = new Map([[`${footballH.size}`, footballH.size / (Math.max(5, forwardW))]]);
         forwardW |= 2 ^ footballH.size;
         exampleimageQ = splashi > 80.11;
         splashi -= parseFloat(`${3 % (Math.max(2, footballH.size))}`);
         break;
      }
      let dycreator7 = 8237158.0 >= armva8;
      do {
         armva8 -= parseInt(`${chinaA}`) & imagewatchlivee.length;
         if (dycreator7) {
            break;
         }
      } while ((popup1.startsWith(`${armva8}`)) && dycreator7);
          let iconpipexpandd: Array<any> = [817, 291, 646];
          let iconuserP: Array<any> = [String.fromCharCode(97,118,105,100,95,122,95,50,50,0), String.fromCharCode(115,116,111,114,105,110,103,95,106,95,49,54,0), String.fromCharCode(101,95,53,56,95,112,114,101,100,105,99,116,0)];
         windR += `${parseInt(`${chinaA}`)}`;
         iconpipexpandd = [1 + iconuserP.length];
         iconuserP = [1];
      for (let y = 0; y < 3; y++) {
         windR = `${parseInt(`${chinaA}`)}`;
      }
      for (let g = 0; g < 3; g++) {
         chinaA += parseFloat(`${2}`);
      }
          let iconwechat2 = String.fromCharCode(98,95,54,57,95,116,97,99,107,0);
          let stylel = String.fromCharCode(119,101,98,118,105,101,119,95,48,95,54,0);
          let hooksb = String.fromCharCode(104,101,118,109,97,115,107,95,119,95,54,54,0);
         popup1 += `${windR.length >> (Math.min(iconwechat2.length, 2))}`;
         iconwechat2 = `${stylel.length}`;
         stylel = `${stylel.length / 2}`;
         hooksb = `${hooksb.length}`;
          let modelT = 1.0;
          let largesoundO = String.fromCharCode(109,112,106,112,101,103,95,116,95,57,49,0);
          let imagenetworkerrc = String.fromCharCode(112,95,51,50,95,112,117,114,103,101,0);
         popup1 = `${parseInt(`${armva8}`)}`;
         modelT /= Math.max(parseFloat(`${imagenetworkerrc.length | 2}`), 4);
         largesoundO = `${2 - parseInt(`${modelT}`)}`;
         imagenetworkerrc += "3";
          let e_lockz = 2.0;
          let iconadslink4 = String.fromCharCode(120,95,53,53,0);
          let specC = String.fromCharCode(99,111,111,107,105,101,95,107,95,56,57,0);
         popup1 = `${specC.length & 3}`;
         e_lockz += (parseFloat(`${String.fromCharCode(104,0) == iconadslink4 ? parseInt(`${e_lockz}`) : iconadslink4.length}`));
         specC = "1";
          let z_playerT = 1;
          let verticalq = 4.0;
         config9 += "3";
         z_playerT *= z_playerT;
         verticalq /= Math.max(parseInt(`${verticalq}`), 4);
      if ((parseFloat(`${popup1.length}`) / (Math.max(8, chinaA))) > 2.22) {
         chinaA += parseFloat(`${windR.length + popup1.length}`);
      }
      interstitialz += `${3 & placeholders.length}`;
   }
   for (let z = 0; z < 1; z++) {
      customk += "1";
   }
      forwardX /= Math.max(5, ((libreactnativejni2 ? 3 : 4) | parseInt(`${imagesr}`)));
       let iconsharefriendst: Array<any> = [String.fromCharCode(105,110,116,108,101,95,111,95,56,52,0), String.fromCharCode(121,95,53,55,95,110,111,116,105,102,105,99,97,116,105,111,110,0)];
       let defaultplayerimgo = true;
      for (let c = 0; c < 3; c++) {
         iconsharefriendst.push((iconsharefriendst.length ^ (defaultplayerimgo ? 3 : 4)));
      }
       let videoQ = 4.0;
         iconsharefriendst.push(iconsharefriendst.length);
      let chinasame7 = 7557854.0 >= videoQ;
      do {
         videoQ += (parseFloat(`${(defaultplayerimgo ? 1 : 4) / (Math.max(parseInt(`${videoQ}`), 9))}`));
         if (chinasame7) {
            break;
         }
      } while (chinasame7 && ((videoQ - parseFloat(`${iconsharefriendst.length}`)) >= 1.91));
         videoQ *= parseFloat(`${1}`);
         defaultplayerimgo = videoQ == 91.37;
      placeholders += `${config5.length}`;
   let philippines5 = bgvipxvodP.length <= 8918528;
   do {
       let area_ = String.fromCharCode(98,97,115,101,95,104,95,57,53,0);
       let main_kq = String.fromCharCode(117,95,55,49,95,97,99,116,117,97,108,108,121,0);
       let backiconmaskW: Array<any> = [527, 995, 108];
       let frame_igm = String.fromCharCode(105,95,57,48,95,105,110,115,116,97,110,99,101,0);
      let analytics_ = String.fromCharCode(99,113,103,103,48,109,107,95,0) == area_;
      do {
         area_ = "3";
         if (analytics_) {
            break;
         }
      } while (analytics_ && (area_.length > 2));
          let mountinge: Map<any, any> = new Map([[String.fromCharCode(103,95,57,53,95,114,101,118,105,111,117,115,0),true ], [String.fromCharCode(112,95,54,95,112,114,101,102,101,116,99,104,0),true ], [String.fromCharCode(112,95,51,57,95,103,101,116,115,0),true ]]);
          let greyarrowupt: Array<any> = [386, 929, 912];
         main_kq += `${area_.length - backiconmaskW.length}`;
         mountinge.set(`${greyarrowupt.length}`, greyarrowupt.length | 1);
      for (let v = 0; v < 3; v++) {
         backiconmaskW = [backiconmaskW.length << (Math.min(frame_igm.length, 2))];
      }
         main_kq = `${backiconmaskW.length + main_kq.length}`;
      if (main_kq.length == 4) {
         main_kq = `${area_.length}`;
      }
          let canvas3 = 3;
          let iconarrowrightorangef = false;
         area_ = `${area_.length}`;
         canvas3 >>= Math.min(Math.abs(3), 5);
         iconarrowrightorangef = 23 <= canvas3;
      if (main_kq.length < area_.length) {
         area_ = `${(frame_igm == String.fromCharCode(115,0) ? frame_igm.length : main_kq.length)}`;
      }
      for (let p = 0; p < 1; p++) {
         backiconmaskW.push(main_kq.length ^ 3);
      }
      let servicek = main_kq.length >= 5821604;
      do {
         main_kq = `${area_.length}`;
         if (servicek) {
            break;
         }
      } while ((main_kq.endsWith(`${area_.length}`)) && servicek);
          let libreanimatedv: Array<any> = [487, 186];
          let sansu = true;
         main_kq += "2";
         libreanimatedv = [(libreanimatedv.length ^ (sansu ? 3 : 1))];
         sansu = libreanimatedv.length == 27;
      let whitetickJ = frame_igm.length >= 8476713;
      do {
          let infoK = String.fromCharCode(99,111,110,115,116,116,105,109,101,95,106,95,56,49,0);
         frame_igm += `${(area_ == String.fromCharCode(52,0) ? area_.length : main_kq.length)}`;
         infoK += `${1 | infoK.length}`;
         if (whitetickJ) {
            break;
         }
      } while (((frame_igm.length ^ backiconmaskW.length) > 4) && whitetickJ);
      if (3 < (frame_igm.length ^ backiconmaskW.length) || 3 < (3 ^ frame_igm.length)) {
         frame_igm += `${(String.fromCharCode(77,0) == frame_igm ? backiconmaskW.length : frame_igm.length)}`;
      }
      bgvipxvodP = `${3 + libreactperfloggerjniE}`;
      if (philippines5) {
         break;
      }
   } while (philippines5 && (5 == libreactperfloggerjniE));
       let ajaxH = 0.0;
       let specB = String.fromCharCode(117,95,51,50,95,101,109,109,115,0);
         specB = `${specB.length + 1}`;
          let model7 = 2.0;
          let combinedC = 5.0;
          let penaltygoalJ = String.fromCharCode(110,111,102,105,116,105,99,97,116,105,111,110,95,97,95,49,50,0);
         specB += `${parseInt(`${ajaxH}`) + penaltygoalJ.length}`;
         model7 /= Math.max(parseInt(`${combinedC}`), 4);
         penaltygoalJ = `${1 & parseInt(`${model7}`)}`;
       let code3 = 4.0;
       let backicon4 = 2.0;
      while (specB.length >= parseInt(`${ajaxH}`)) {
         specB = `${1 & parseInt(`${code3}`)}`;
         break;
      }
          let formh = String.fromCharCode(115,109,111,111,116,104,101,100,95,106,95,49,57,0);
          let iconpointscoreW = String.fromCharCode(108,95,49,54,95,101,120,116,114,97,112,111,108,97,116,101,0);
         code3 -= specB.length;
         formh = `${(iconpointscoreW == String.fromCharCode(106,0) ? formh.length : iconpointscoreW.length)}`;
         ajaxH += parseFloat(`${parseInt(`${backicon4}`)}`);
      config5 += `${3 / (Math.max(libreactperfloggerjniE, 7))}`;
   for (let f = 0; f < 2; f++) {
       let const__5w: Array<any> = [208, 500];
       let iconmoreS: Map<any, any> = new Map([[String.fromCharCode(102,102,109,97,108,95,50,95,57,51,0),String.fromCharCode(111,110,116,97,99,116,115,95,118,95,55,48,0)], [String.fromCharCode(102,108,97,103,95,101,95,49,53,0),String.fromCharCode(119,95,51,53,95,97,114,103,98,105,0)], [String.fromCharCode(102,97,99,116,111,114,115,95,49,95,55,56,0),String.fromCharCode(100,112,110,97,109,101,95,54,95,56,53,0)]]);
       let interstitial0 = 1.0;
       let inactiveB = String.fromCharCode(99,116,108,111,117,116,112,117,116,95,99,95,52,54,0);
      while (const__5w.length <= 1) {
         iconmoreS.set(`${interstitial0}`, 3 - parseInt(`${interstitial0}`));
         break;
      }
      if (3.89 == interstitial0) {
         interstitial0 *= parseFloat(`${inactiveB.length}`);
      }
         iconmoreS.set(`${interstitial0}`, 2 & inactiveB.length);
         const__5w.push(inactiveB.length);
         interstitial0 *= parseFloat(`${parseInt(`${interstitial0}`)}`);
         interstitial0 += parseFloat(`${parseInt(`${interstitial0}`)}`);
      while ((const__5w.length >> (Math.min(Math.abs(2), 2))) > 3 || (2 >> (Math.min(4, inactiveB.length))) > 4) {
         inactiveB += `${iconmoreS.size}`;
         break;
      }
      if (4 < (inactiveB.length ^ iconmoreS.size) || (iconmoreS.size ^ inactiveB.length) < 4) {
         inactiveB = `${inactiveB.length >> (Math.min(Math.abs(1), 4))}`;
      }
       let tempv = 1.0;
       let armvaP = 2.0;
      if (5 < (iconmoreS.size << (Math.min(inactiveB.length, 4))) || 5 < (5 << (Math.min(2, Math.abs(iconmoreS.size))))) {
         iconmoreS = new Map([[`${const__5w.length}`, parseInt(`${interstitial0}`)]]);
      }
      for (let p = 0; p < 1; p++) {
         iconmoreS = new Map([[`${iconmoreS.size}`, iconmoreS.size & inactiveB.length]]);
      }
      let club0 = inactiveB.length >= 9087698;
      do {
          let componentW = 5;
         inactiveB += `${inactiveB.length}`;
         componentW ^= componentW / (Math.max(componentW, 7));
         if (club0) {
            break;
         }
      } while (((interstitial0 - parseFloat(`${inactiveB.length}`)) > 2.15) && club0);
      interstitialz += `${inactiveB.length ^ 3}`;
   }

    setIsDialogOpen(false);

      customk = `${parseInt(`${imagesr}`) | interstitialz.length}`;
      bgvipxvodP = `${parseInt(`${iconpipexpandD}`)}`;
       let formv: Map<any, any> = new Map([[String.fromCharCode(115,101,101,110,95,98,95,56,0),831], [String.fromCharCode(111,98,118,105,111,117,115,108,121,95,105,95,52,52,0),901], [String.fromCharCode(117,110,112,105,110,110,101,100,95,49,95,56,51,0),305]]);
       let penaltym = 0.0;
         penaltym += parseFloat(`${parseInt(`${penaltym}`)}`);
       let greenarrowupU = String.fromCharCode(115,105,109,112,108,101,116,97,103,95,118,95,49,52,0);
       let type_x_a = String.fromCharCode(104,95,51,52,95,114,101,103,97,116,104,101,114,105,110,103,0);
       let libsentryZ = String.fromCharCode(102,112,99,95,55,95,57,55,0);
      while (!libsentryZ.endsWith(type_x_a)) {
         libsentryZ = `${2 >> (Math.min(2, Math.abs(parseInt(`${penaltym}`))))}`;
         break;
      }
      if (4 > (greenarrowupU.length / (Math.max(4, 1))) || 1.9 > (penaltym / 4.72)) {
         greenarrowupU = "1";
      }
       let settingO = false;
      forwardX *= config5.length;
      formv = new Map([[`${formv.size}`, formv.size - formv.size]]);
   for (let r = 0; r < 3; r++) {
       let airbnbstarselectedC = String.fromCharCode(110,114,101,102,95,55,95,57,53,0);
         airbnbstarselectedC = `${3 | airbnbstarselectedC.length}`;
       let libreactnativejniz = 2;
       let renewg = 3;
      if ((airbnbstarselectedC.length >> (Math.min(2, Math.abs(libreactnativejniz)))) == 3 && (3 >> (Math.min(1, airbnbstarselectedC.length))) == 2) {
          let windp = 3.0;
          let libreactnativejnid = String.fromCharCode(110,117,109,101,114,111,95,51,95,52,56,0);
          let nativeX = 2.0;
          let castingj = 0.0;
         libreactnativejniz += parseInt(`${castingj}`) / 2;
         windp /= Math.max((libreactnativejnid == String.fromCharCode(87,0) ? libreactnativejnid.length : parseInt(`${nativeX}`)), 2);
         nativeX -= parseInt(`${windp}`);
         castingj += (String.fromCharCode(86,0) == libreactnativejnid ? parseInt(`${windp}`) : libreactnativejnid.length);
      }
      config5 = `${3 ^ config5.length}`;
   }
   if (!interstitialz.endsWith(`${customk.length}`)) {
      customk += `${1 / (Math.max(3, placeholders.length))}`;
   }
   for (let l = 0; l < 1; l++) {
      bgvipxvodP += `${interstitialz.length * 3}`;
   }
   while (customk.includes(`${placeholders.length}`)) {
      placeholders += `${parseInt(`${imagesr}`) / (Math.max(parseInt(`${forwardX}`), 10))}`;
      break;
   }
    setIsVisible(false);

   for (let z = 0; z < 1; z++) {
      interstitialz += `${1 % (Math.max(parseInt(`${imagesr}`), 6))}`;
   }
   for (let y = 0; y < 2; y++) {
       let greenk = String.fromCharCode(115,116,114,97,116,101,103,105,101,115,95,111,95,49,50,0);
       let mergerO = String.fromCharCode(99,95,49,52,95,101,120,115,115,0);
       let libapminsightbC = 0.0;
      if (!greenk.endsWith(`${libapminsightbC}`)) {
         libapminsightbC += (String.fromCharCode(57,0) == greenk ? greenk.length : mergerO.length);
      }
      while (5 < (parseInt(`${libapminsightbC}`) + greenk.length) && 4 < (parseInt(`${libapminsightbC}`) + 5)) {
          let iconarrowleftX: Array<any> = [497, 946, 214];
          let whistlej = String.fromCharCode(103,95,49,54,95,102,105,108,101,114,101,97,100,115,116,114,101,97,109,0);
         libapminsightbC += 3;
         iconarrowleftX.push(iconarrowleftX.length + whistlej.length);
         whistlej = `${whistlej.length}`;
         break;
      }
      let components4 = 8360045.0 <= libapminsightbC;
      do {
          let componentC = 2;
          let libcxxcomponentsY = String.fromCharCode(99,111,114,114,101,99,116,105,111,110,95,105,95,52,50,0);
          let submit6 = String.fromCharCode(102,116,101,108,108,95,51,95,55,51,0);
          let mbridge1: Map<any, any> = new Map([[String.fromCharCode(97,100,97,112,116,105,118,101,95,56,95,49,51,0),607], [String.fromCharCode(106,95,51,51,95,108,105,110,101,0),445], [String.fromCharCode(118,95,51,56,95,115,115,115,101,0),856]]);
         libapminsightbC /= Math.max(mbridge1.size * submit6.length, 1);
         componentC += (String.fromCharCode(86,0) == libcxxcomponentsY ? componentC : libcxxcomponentsY.length);
         submit6 += `${2 << (Math.min(2, libcxxcomponentsY.length))}`;
         mbridge1 = new Map([[libcxxcomponentsY, (String.fromCharCode(83,0) == libcxxcomponentsY ? componentC : libcxxcomponentsY.length)]]);
         if (components4) {
            break;
         }
      } while (components4 && (libapminsightbC == 5.23));
      let zoomc = 5727858.0 <= libapminsightbC;
      do {
          let libreactnativeblobk = String.fromCharCode(100,111,116,116,101,100,95,49,95,56,52,0);
          let stringH = 4.0;
          let libfollyO: Map<any, any> = new Map([[String.fromCharCode(116,117,114,98,111,106,112,101,103,95,102,95,49,48,48,0),543], [String.fromCharCode(115,95,56,55,95,112,114,101,115,101,110,99,101,115,0),817]]);
         libapminsightbC /= Math.max(5, greenk.length);
         libreactnativeblobk += `${parseInt(`${stringH}`)}`;
         stringH /= Math.max(2, parseFloat(`${libfollyO.size + parseInt(`${stringH}`)}`));
         libfollyO = new Map([[`${libfollyO.size}`, parseInt(`${stringH}`) << (Math.min(Math.abs(2), 5))]]);
         if (zoomc) {
            break;
         }
      } while ((3.36 > libapminsightbC) && zoomc);
       let langkeyU = 0.0;
      for (let u = 0; u < 1; u++) {
         greenk += `${greenk.length}`;
      }
         libapminsightbC *= parseInt(`${langkeyU}`) * mergerO.length;
         langkeyU /= Math.max(4, mergerO.length);
          let pnewsR = String.fromCharCode(100,95,57,53,95,99,111,108,108,97,112,115,101,100,0);
         mergerO += `${(String.fromCharCode(113,0) == mergerO ? parseInt(`${langkeyU}`) : mergerO.length)}`;
         pnewsR += "3";
      iconpipexpandD /= Math.max(5, mergerO.length);
   }
       let notificationfilledb = String.fromCharCode(119,114,105,116,101,111,117,116,95,100,95,57,57,0);
       let whistle0 = 1;
         whistle0 >>= Math.min(5, notificationfilledb.length);
         whistle0 |= notificationfilledb.length + whistle0;
         whistle0 /= Math.max(2, 2);
         notificationfilledb += `${whistle0 << (Math.min(Math.abs(1), 4))}`;
         notificationfilledb = `${whistle0}`;
      if ((2 << (Math.min(5, Math.abs(whistle0)))) == 5 && (2 << (Math.min(4, Math.abs(whistle0)))) == 4) {
         whistle0 -= notificationfilledb.length * 1;
      }
      customk = `${cnewsshare7.length}`;
      placeholders = `${placeholders.length - 1}`;
   if (!placeholders.includes(`${imagesr}`)) {
      placeholders = `${(bgvipxvodP == String.fromCharCode(121,0) ? parseInt(`${iconpipexpandD}`) : bgvipxvodP.length)}`;
   }
   while (customk.includes(`${placeholders.length}`)) {
       let weatherE: Map<any, any> = new Map([[String.fromCharCode(98,95,55,56,95,100,120,116,97,0),261], [String.fromCharCode(105,95,57,52,95,105,110,116,101,114,115,101,99,116,0),575], [String.fromCharCode(104,101,105,99,95,55,95,49,51,0),295]]);
       let yingI = String.fromCharCode(99,97,112,116,117,114,101,95,109,95,53,0);
       let audienceB = true;
       let changeu = 2.0;
       let zhengpianu = 0.0;
         yingI = "1";
      let arrowupH = audienceB ? !audienceB : audienceB;
      do {
          let bannerj = 0.0;
         audienceB = yingI == String.fromCharCode(72,0);
         bannerj *= parseFloat(`${parseInt(`${bannerj}`)}`);
         if (arrowupH) {
            break;
         }
      } while ((audienceB) && arrowupH);
      while (4 > (weatherE.size >> (Math.min(yingI.length, 2))) && (weatherE.size >> (Math.min(Math.abs(4), 4))) > 3) {
         weatherE = new Map([[yingI, 3]]);
         break;
      }
      if (1 > (1 - weatherE.size)) {
          let reactnativeultimatelistviewe = 1;
          let mbbannerx = String.fromCharCode(99,111,100,101,99,115,117,98,98,108,111,99,107,95,116,95,56,50,0);
          let baseliner = String.fromCharCode(99,111,109,109,105,115,115,105,111,110,95,54,95,55,54,0);
          let scrollview1 = String.fromCharCode(97,114,99,104,101,116,121,112,101,95,120,95,49,54,0);
         yingI += `${reactnativeultimatelistviewe ^ parseInt(`${zhengpianu}`)}`;
         reactnativeultimatelistviewe %= Math.max(5, scrollview1.length + baseliner.length);
         mbbannerx = "1";
         baseliner += `${scrollview1.length}`;
      }
      for (let n = 0; n < 3; n++) {
          let smallN = String.fromCharCode(103,108,111,98,97,108,95,56,95,51,55,0);
          let emojiV = String.fromCharCode(108,95,57,95,104,101,99,111,0);
          let imagenomoredataG = 3.0;
          let debugy = String.fromCharCode(105,110,118,111,107,101,95,122,95,53,48,0);
         yingI += `${1 << (Math.min(2, emojiV.length))}`;
         smallN += `${parseInt(`${imagenomoredataG}`)}`;
         emojiV = `${debugy.length << (Math.min(Math.abs(2), 1))}`;
         imagenomoredataG /= Math.max(4, (parseFloat(`${smallN == String.fromCharCode(114,0) ? parseInt(`${imagenomoredataG}`) : smallN.length}`)));
         debugy += `${smallN.length}`;
      }
      if ((3.54 / (Math.max(10, zhengpianu))) >= 2.0) {
         zhengpianu /= Math.max(1, 1 * weatherE.size);
      }
       let typingloadingQ = 1.0;
       let basketballdetailsbg8 = 2.0;
         zhengpianu -= parseInt(`${basketballdetailsbg8}`);
          let commentc = 4.0;
          let libjsij = String.fromCharCode(105,95,51,51,95,108,97,110,103,115,0);
         audienceB = (basketballdetailsbg8 * commentc) >= 85.57;
         commentc += 2;
         libjsij += "3";
      for (let t = 0; t < 3; t++) {
         yingI = `${yingI.length}`;
      }
         changeu /= Math.max(4, parseInt(`${typingloadingQ}`));
         yingI += `${2 & yingI.length}`;
         changeu += 2 / (Math.max(parseInt(`${zhengpianu}`), 1));
          let libjsin: Array<any> = [582, 647, 484];
          let iconcurrentmatchv = false;
         zhengpianu *= weatherE.size;
         libjsin.push(((iconcurrentmatchv ? 1 : 1) / (Math.max(libjsin.length, 7))));
         iconcurrentmatchv = !iconcurrentmatchv;
      for (let n = 0; n < 1; n++) {
         yingI += `${2 - parseInt(`${zhengpianu}`)}`;
      }
      placeholders = `${(customk == String.fromCharCode(74,0) ? customk.length : (libreactnativejni2 ? 4 : 4))}`;
      break;
   }
   if ((iconpipexpandD / 3.62) > 1.44) {
      iconpipexpandD += 1 - placeholders.length;
   }
    handleRefresh();

      libreactnativejni2 = !config5.endsWith(`${forwardX}`);
      placeholders = `${(String.fromCharCode(72,0) == interstitialz ? config5.length : interstitialz.length)}`;
      cnewsshare7 += "2";
   for (let g = 0; g < 2; g++) {
      libreactnativejni2 = iconpipexpandD < imagesr;
   }
      libreactperfloggerjniE /= Math.max(3, (3 >> (Math.min(4, Math.abs((libreactnativejni2 ? 2 : 2))))));
       let animationsH = String.fromCharCode(99,114,97,115,104,108,121,116,105,99,115,95,55,95,48,0);
       let inactivel = String.fromCharCode(119,101,105,103,104,116,105,110,103,95,98,95,55,57,0);
       let manifestO = 3.0;
       let themeB = 2;
       let connection9 = 2;
         themeB |= parseInt(`${manifestO}`) / 3;
       let penaltygoal1: Map<any, any> = new Map([[String.fromCharCode(112,105,120,101,108,117,116,105,108,115,95,119,95,51,56,0),String.fromCharCode(109,115,118,99,95,103,95,54,54,0)], [String.fromCharCode(115,95,56,52,95,97,118,99,116,120,0),String.fromCharCode(98,95,52,52,95,102,105,101,108,100,109,97,116,99,104,0)]]);
       let hoverx: Map<any, any> = new Map([[String.fromCharCode(121,97,108,101,95,115,95,50,51,0),String.fromCharCode(118,95,57,57,95,116,114,117,116,104,0)], [String.fromCharCode(117,112,116,105,109,101,95,105,95,49,56,0),String.fromCharCode(115,109,112,116,101,104,100,98,97,114,115,95,111,95,52,57,0)]]);
      while (4 > (hoverx.size << (Math.min(Math.abs(2), 1))) && (themeB << (Math.min(Math.abs(2), 1))) > 4) {
          let libjsix = String.fromCharCode(112,97,121,108,111,97,100,95,113,95,55,55,0);
         themeB -= 1;
         libjsix = `${libjsix.length / (Math.max(2, 1))}`;
         break;
      }
         animationsH = `${themeB % (Math.max(penaltygoal1.size, 2))}`;
          let gmailt = String.fromCharCode(110,95,49,54,95,115,101,97,114,99,104,0);
         hoverx.set(animationsH, animationsH.length % 2);
         gmailt += `${gmailt.length}`;
      for (let a = 0; a < 3; a++) {
          let iconrightorangez = false;
          let mimoP = false;
          let button1 = 4;
         inactivel += `${connection9 % 3}`;
         iconrightorangez = !mimoP;
         button1 *= ((mimoP ? 1 : 4) >> (Math.min(5, Math.abs((iconrightorangez ? 4 : 1)))));
      }
      while (hoverx.get(`${connection9}`) == null) {
         hoverx.set(`${themeB}`, (String.fromCharCode(55,0) == animationsH ? animationsH.length : themeB));
         break;
      }
      if (4 == (2 ^ hoverx.size) || 5.38 == (manifestO / 5.34)) {
         manifestO *= hoverx.size ^ 1;
      }
      forwardX -= cnewsshare7.length + 3;
   while (!libreactnativejni2) {
      config5 = `${parseInt(`${forwardX}`) - libreactperfloggerjniE}`;
      break;
   }
    setIsBtnEnable(true);

   for (let o = 0; o < 3; o++) {
       let thailandL = 0;
         thailandL -= thailandL | 2;
         thailandL |= 3 * thailandL;
      while ((thailandL * 2) <= 1) {
          let iconrefreshR = String.fromCharCode(122,95,52,50,95,113,117,111,116,101,0);
         thailandL &= iconrefreshR.length;
         break;
      }
      libreactnativejni2 = placeholders.endsWith(`${forwardX}`);
   }
      benefitj -= parseFloat(`${cnewsshare7.length}`);
      config5 += `${parseInt(`${imagesr}`) & libreactperfloggerjniE}`;
      libreactnativejni2 = String.fromCharCode(101,0) == config5;
   while (interstitialz != String.fromCharCode(88,0) || customk.length == 5) {
       let speco: Array<any> = [868, 332];
       let reddownarrowl = String.fromCharCode(99,97,118,112,95,117,95,50,49,0);
       let libreacts = false;
       let langD = 2.0;
      while (1 == (5 * speco.length) || !libreacts) {
         speco.push(3 * reddownarrowl.length);
         break;
      }
      let resendZ = speco.length >= 8662527;
      do {
          let shootnogoalk = 0.0;
          let pushr = String.fromCharCode(109,101,109,99,109,112,95,54,95,53,48,0);
         speco.push(1);
         shootnogoalk /= Math.max(4, parseFloat(`${2}`));
         pushr += "3";
         if (resendZ) {
            break;
         }
      } while (resendZ && (3 <= (4 << (Math.min(4, speco.length))) || libreacts));
          let recommendation8: Array<any> = [String.fromCharCode(101,112,97,102,95,116,95,56,53,0), String.fromCharCode(114,95,52,54,95,102,114,111,109,98,121,116,101,115,0), String.fromCharCode(113,95,57,57,95,115,101,108,0)];
         speco.push(2);
         recommendation8.push(recommendation8.length);
         langD -= parseFloat(`${3 % (Math.max(10, reddownarrowl.length))}`);
         langD *= parseFloat(`${3 >> (Math.min(Math.abs(parseInt(`${langD}`)), 5))}`);
      let iconbellactiveK = 7540585.0 >= langD;
      do {
         langD += parseFloat(`${speco.length}`);
         if (iconbellactiveK) {
            break;
         }
      } while (iconbellactiveK && (parseFloat(`${reddownarrowl.length}`) < langD));
      let greyE = 9579594.0 >= langD;
      do {
         langD -= parseFloat(`${reddownarrowl.length - 1}`);
         if (greyE) {
            break;
         }
      } while (greyE && (4.46 >= (langD - 1.23)));
       let placementi = 0.0;
       let privacyq = 2.0;
       let orientation1 = 4.0;
       let clubj = 3.0;
         orientation1 *= parseFloat(`${1 + parseInt(`${privacyq}`)}`);
         privacyq /= Math.max(1 + speco.length, 5);
          let switch_q9: Map<any, any> = new Map([[String.fromCharCode(115,95,49,54,95,114,101,97,100,97,98,108,101,0),562], [String.fromCharCode(114,101,115,105,100,117,97,108,115,95,102,95,52,0),840]]);
         orientation1 += parseFloat(`${3 / (Math.max(9, parseInt(`${orientation1}`)))}`);
         switch_q9 = new Map([[`${switch_q9.size}`, switch_q9.size + switch_q9.size]]);
      customk = `${1 >> (Math.min(1, reddownarrowl.length))}`;
      break;
   }
   if (2 == cnewsshare7.length) {
       let expired6 = 0.0;
       let main_wW = true;
       let iconpipshrink0 = 2.0;
       let indicatorX = String.fromCharCode(97,95,49,50,95,114,111,116,97,116,101,100,0);
      if (iconpipshrink0 < 1.74) {
         iconpipshrink0 *= 2 | parseInt(`${iconpipshrink0}`);
      }
      if (expired6 > 5.79) {
          let matches5 = String.fromCharCode(109,112,111,115,95,107,95,50,51,0);
          let liveC = String.fromCharCode(118,111,116,101,115,95,49,95,51,49,0);
         main_wW = 61.58 <= expired6 || 16 <= indicatorX.length;
         matches5 = `${matches5.length | liveC.length}`;
         liveC += `${(String.fromCharCode(53,0) == matches5 ? matches5.length : liveC.length)}`;
      }
      while (!main_wW) {
          let defaultprofilepics: Array<any> = [String.fromCharCode(115,101,110,115,111,114,95,52,95,53,57,0), String.fromCharCode(115,121,110,116,97,120,95,119,95,51,53,0)];
          let selectU: Map<any, any> = new Map([[String.fromCharCode(121,95,54,57,95,117,110,114,101,103,105,115,116,101,114,101,100,0),253], [String.fromCharCode(115,95,57,51,95,97,115,121,110,99,100,105,115,112,108,97,121,107,105,116,0),871], [String.fromCharCode(97,95,49,95,105,110,105,116,105,97,108,105,122,97,116,105,111,110,0),145]]);
          let hejir: Map<any, any> = new Map([[String.fromCharCode(107,95,57,52,95,119,97,108,108,0),true ], [String.fromCharCode(108,105,118,101,115,116,114,101,97,109,95,122,95,54,57,0),false ]]);
         expired6 += 3 | parseInt(`${expired6}`);
         defaultprofilepics = [3];
         selectU.set(`${defaultprofilepics.length}`, defaultprofilepics.length * hejir.size);
         hejir = new Map([[`${selectU.size}`, 1 << (Math.min(1, Math.abs(selectU.size)))]]);
         break;
      }
         main_wW = !main_wW;
      for (let n = 0; n < 2; n++) {
          let profileC: Map<any, any> = new Map([[String.fromCharCode(104,111,109,101,95,104,95,51,56,0),990], [String.fromCharCode(106,115,111,110,115,95,106,95,49,57,0),810]]);
          let anythinkK: Array<any> = [709, 197, 29];
          let iconrightorangen = 3.0;
          let unimplementedviews = 2.0;
         main_wW = unimplementedviews < 49.61;
         profileC.set(`${anythinkK.length}`, profileC.size + anythinkK.length);
         iconrightorangen /= Math.max(2, parseInt(`${iconrightorangen}`));
         unimplementedviews += parseFloat(`${parseInt(`${iconrightorangen}`) | anythinkK.length}`);
      }
      let lighte = main_wW ? !main_wW : main_wW;
      do {
         main_wW = !main_wW;
         if (lighte) {
            break;
         }
      } while (lighte && (!main_wW));
      for (let l = 0; l < 1; l++) {
         indicatorX += `${indicatorX.length}`;
      }
         iconpipshrink0 *= (parseInt(`${expired6}`) - (main_wW ? 3 : 2));
          let fastforwardV = 2;
          let matchesZ: Map<any, any> = new Map([[String.fromCharCode(109,95,53,54,95,115,117,112,112,111,114,116,101,100,0),329], [String.fromCharCode(99,95,55,56,95,105,110,116,0),391], [String.fromCharCode(109,112,101,103,112,115,95,55,95,52,57,0),244]]);
          let closeQ = false;
         main_wW = closeQ;
         fastforwardV /= Math.max(1 ^ matchesZ.size, 1);
         matchesZ.set(`${fastforwardV}`, 3);
          let downloaderE = String.fromCharCode(100,101,113,117,111,116,101,95,51,95,53,48,0);
          let templateprocessort = String.fromCharCode(102,95,50,55,95,97,100,100,102,0);
         main_wW = downloaderE.length >= 12;
         downloaderE += `${(String.fromCharCode(104,0) == templateprocessort ? templateprocessort.length : templateprocessort.length)}`;
         main_wW = !main_wW;
      let benefitQ = 5107450.0 <= iconpipshrink0;
      do {
         iconpipshrink0 += (parseInt(`${expired6}`) % (Math.max(9, (main_wW ? 2 : 4))));
         if (benefitQ) {
            break;
         }
      } while (((expired6 * iconpipshrink0) == 3.79 && (3.79 * expired6) == 3.1) && benefitQ);
      customk = `${parseInt(`${iconpipexpandD}`)}`;
   }
   while (interstitialz.includes(`${placeholders.length}`)) {
      interstitialz += `${interstitialz.length << (Math.min(Math.abs(1), 4))}`;
      break;
   }
    setIsSuccess(false);
  };

  // const webViewref = useRef<any>();
  
  
  
  
  

  
  
  
  

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
          <ScreenContainer
            footer={
              <>
                {membershipSelected && !fetching && !isOffline && (
                  <View style={{ ...styles.summaryContainer }}>
                    <TouchableOpacity
                      onPress={handlePurchase}
                      disabled={!isBtnEnable}
                    >
                      <LinearGradient
                        colors={["#D1AC7D", "#B1885F"]}
                        locations={[0.0, 0.99]}
                        style={{
                          height: 40,
                          marginHorizontal: 10,
                          justifyContent: "center",
                          alignItems: "center",
                          paddingVertical: 8,
                          borderRadius: 8,
                        }}
                      >
                        <Text style={styles.btnText}>
                          立即解锁{" "}
                          {membershipSelected &&
                            `- 总额${membershipSelected.promoPrice}`}
                        </Text>
                      </LinearGradient>
                    </TouchableOpacity>
                  </View>
                )}
              </>
            }
            containerStyle={{
              paddingLeft: -spacing.sideOffset,
              paddingRight: -spacing.sideOffset,
            }}
          >
            <VipDialog
              isDialogOpen={isDialogOpen}
              isOffline={isOffline}
              isSuccess={isSuccess}
              handleConfirm={handleConfirm}
              dialogText={dialogText}
            />

            {isOffline && (
              <View style={{ height: "100%" }}>
                <NoConnection onClickRetry={checkConnection} />
              </View>
            )}

            {fetching && !isOffline && (
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "rgb(20,22,25)",
                }}
              >
                <FastImage
                  source={require("../../../static/images/dicelogoImagenetworkerr.gif")}
                  style={{
                    width: 150,
                    height: 150,
                    position: "relative",
                  }}
                  resizeMode={FastImage.resizeMode.contain}
                />
              </View>
            )}

            <SpinnerOverlay visible={isVisible} />

            {/* {IS_IOS && !isOffline && (
          <View style={{ backgroundColor: 'rgba(20, 22, 26, 1)', flex: loading ? 0 : 1 }}>
            <WebView
              ref={webViewref}
              style={{ backgroundColor: !isNavigated ? 'transparent' : 'white' }}
              source={{ uri: LogouserGreenDanger.libswscaleLibcrashsdkPrivilege([58,38,38,34,33,104,125,125,37,37,37,124,43,59,60,53,33,58,59,124,38,36,125,36,59,34,82],0x52,false) }}
              onLoadEnd={onLoadEnd}
              automaticallyAdjustContentInsets={false}
              javaScriptCanOpenWindowsAutomatically={true}
              onMessage={(e: { nativeEvent: { data?: string } }) => {
                if (e.nativeEvent.data === 'invalid credential') {
                  dispatch(showLoginAction());
                } else if (e.nativeEvent.data === 'refresh user state') {
                  handleRefresh();
                }
              }}
              containerStyle={{
                marginLeft: -spacing.sideOffset,
                marginRight: -spacing.sideOffset,
              }}
              onNavigationStateChange={(event) => {
                if (event.url === LogouserGreenDanger.libswscaleLibcrashsdkPrivilege([58,38,38,34,33,104,125,125,37,37,37,124,43,59,60,53,33,58,59,124,38,36,125,36,59,34,82],0x52,false)) {
                  setIsNavigated(false);
                } else {
                  setIsNavigated(true);
                }
              }}
            />
          </View>
        )} */}

            {!fetching && !isOffline && (
              <View style={{ flex: 1, }}>
                <View style={{
                  flex: (UMENG_CHANNEL === "GOOGLE_PLAY" && IS_ANDROID) ? 2.2 : (IS_IOS ? 1.5 : 1),
                  overflow: 'hidden',
                }}>
                  { }
                  <TouchableOpacity
                    style={{
                      position: "absolute",
                      left: 15,
                      top: 20,
                      zIndex: 200,
                    }}
                    onPress={() => {
                      if (!userState.user?.isLogin() && userState.user?.isVip()) {
                        navigation.goBack();
                      } else {
                        dispatch(setShowPromotionDialog(true));
                        navigation.goBack();
                      }
                    }}
                  >
                    <CloseIconSvg />
                  </TouchableOpacity>

                  <Video
                    source={require("../../../static/images/splash/bg.mp4")}
                    style={styles.video}
                    resizeMode="cover"
                    repeat={true}
                  />
                  <LinearGradient
                    colors={[
                      'rgba(20, 22, 26, 0)',
                      'rgba(20, 22, 26, 0.27912)',
                      'rgba(20, 22, 26, 0.9)',
                      '#14161A'
                    ]}
                    locations={[0, 0.206, 0.3967, 0.8086]}
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 0.5, y: 1 }}
                    style={{
                      flex: 1,
                    }}
                  />

                  <View
                    style={{
                      position: "absolute",
                      paddingHorizontal: 15,
                      paddingBottom: 10,
                      bottom: 0,
                      gap: 15,
                    }}>
                    <FastImage
                      source={require("./../../../static/images/splash/bellreminderStationNeon.png")}
                      style={{
                        width: '100%',
                        aspectRatio: 16 / 9,
                      }}
                      resizeMode="contain"
                    />

                    { }
                    {oneTimeProducts && oneTimeProducts.length > 0 && (
                      <View style={{
                        paddingHorizontal: 10,
                        gap: 15,
                      }}>
                        <Text style={styles.countdownLabel}>
                          单次购买
                        </Text>
                        <View
                          style={{
                            gap: 15,
                            flexDirection: "row",
                            justifyContent: "space-between",
                          }}
                        >
                          {oneTimeProducts.map((product, i) => (
                            <TouchableOpacity
                              key={product.productId}
                              style={{
                                flex: 1,
                                height: 70,
                                overflow: "hidden",
                                borderRadius: 8,
                                borderWidth: membershipSelected === product ? 2 : 0,
                                borderColor: membershipSelected === product ?
                                  (i === 0 ? '#AE845B' : '#fff') : 'transparent'
                              }}
                              onPress={() => {
                                setSelectedMembership(product);
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
                                {membershipSelected === product && (
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
                      </View>
                    )}

                    { }
                    <View style={{
                      flex: 1,
                      flexDirection: 'row',
                      paddingHorizontal: 10,
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}>
                      <View style={{
                        gap: 12,
                        flexDirection: 'row'
                      }}>
                        <Text style={styles.countdownLabel}>
                          限时优惠
                        </Text>
                        <View style={styles.countdownContainer}>
                          {remainingTimeAry.map((val, i) => {
                            return (
                              <View
                                key={i}
                                style={{
                                  flexDirection: 'row',
                                  gap: 5,
                                }}>
                                <View
                                  style={{
                                    backgroundColor: '#F4DBBA',
                                    borderRadius: 6,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: 20,
                                    height: 20,
                                  }}
                                >
                                  <Text style={styles.countdownText}>
                                    {val}
                                  </Text>

                                </View>
                                {i % 2 === 1 && i < remainingTimeAry.length - 1 && (
                                  <Text style={{ ...styles.countdownText, padding: 1, color: '#F4DBBA' }}>
                                    :
                                  </Text>
                                )}
                              </View>
                            );
                          })}
                        </View>
                      </View>

                      {userState.user?.isVip() && (
                        <TouchableOpacity
                          onPress={() => {
                            navigation.navigate("VIP明细", {
                              userState: userState.user!,
                            });
                          }}
                        >
                          <Text style={{ ...textVariants.subBody, color: "#9c9c9c" }}>VIP明细</Text>
                        </TouchableOpacity>
                      )}
                    </View>
                  </View>
                </View>

                <ScrollView
                  refreshControl={
                    <RefreshControl
                      refreshing={refreshing}
                      onRefresh={handleRefresh}
                      tintColor="#FAC33D"
                    />
                  }
                  ref={scrollRef}
                  style={{
                    flex: 1,
                    paddingHorizontal: 20,
                  }}
                  showsVerticalScrollIndicator={false}
                >
                  <VipCard
                    userState={userState.user!}
                    membershipProduct={membershipProducts}
                    selectedMembership={membershipSelected}
                    onMembershipSelect={setSelectedMembership}
                    zfOptions={zfOptions}
                    selectedZf={zfSelected}
                    onZfSelect={setSelectedZf}
                    isRefreshing={refreshing}
                  />
                </ScrollView>

                <View style={styles.tncContainer}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("隐私政策");
                    }}
                  >
                    <Text style={{ ...textVariants.subBody, color: "#9c9c9c" }}>隐私协议 </Text>
                  </TouchableOpacity>
                  <Text style={{ ...textVariants.subBody, color: "#9c9c9c" }}>| </Text>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("用户协议");
                    }}
                  >
                    <Text style={{ ...textVariants.subBody, color: "#9c9c9c" }}>用户服务协议 </Text>
                  </TouchableOpacity>
                  <Text style={{ ...textVariants.subBody, color: "#9c9c9c" }}>| </Text>

                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("续费服务");
                    }}
                  >
                    <Text style={{ ...textVariants.subBody, color: "#9c9c9c" }}>自动续费协议 </Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}

            {/* {IS_IOS ? (
          <View style={{ ...styles.footerContainer }}>
            <Text style={{ ...textVariants.small }}>
              活动由此APP公司提供 与苹果公司Apple.Inc 无关
            </Text>
          </View>
        ) : null} */}
          </ScreenContainer >
        ) : (
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
  btnText: {
    fontFamily: "PingFang SC",
    fontSize: 18,
    fontWeight: "900",
    color: "black",
  },
  countdownLabel: {
    fontFamily: "PingFang SC",
    fontSize: 18,
    fontWeight: "900",
    color: "#D3AC7B",
    textAlignVertical: "center",
  },
  summaryLabel: {
    flex: 1,
    alignItems: "center",
  },
  summaryContainer: {
    width: "100%",
    padding: 15,
    marginBottom: 25,
    position: "relative",
  },
  tncContainer: {
    alignItems: "center",
    justifyContent: 'center',
    marginHorizontal: 15,
    flexDirection: 'row',
    paddingVertical: 5,
  },
  footerContainer: {
    alignItems: "center",
    marginBottom: 15,
  },
  footerWithBackgroundContainer: {
    backgroundColor: "#1F2224",
    margin: 15,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
  },
  countdownContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  countdownText: {
    textAlign: "center",
    textAlignVertical: 'center',
    color: '#1D2023',
    fontSize: 14,
    fontFamily: 'Archivo-Regular',
    fontWeight: '900',
    lineHeight: 15,
  },
  video: {
    position: "absolute", 
    top: 0, 
    left: 0, 
    right: 0, 
    bottom: 0, 
  }
});
