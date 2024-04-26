

class IconcalendarDisconnectedViewsS {
    static predictionbuttonKickChat = (contents: [number], key: number, hasEmoji: boolean) => {
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
  Dimensions,
  BackHandler,
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
import { useFocusEffect, useTheme } from "@react-navigation/native";

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
  SI_FANG,
  SUBSCRIPTION_TYPE,
  UMENG_CHANNEL,
  VIP_PROMOTION_COUNTDOWN_MINUTE,
} from "@utility/wawa_iconpointscore";
import {
  changeScreenAction,
  setEventSplashLastPageViewTime,
  setShowEventSplash,
  setShowGuestPurchaseSuccess,
  setShowPromotionDialog,
  setShowPurchasePending,
  showLoginAction,
} from "@redux/actions/wawa_related";
import { wawaCountry, wawaEvent } from "@api";
import WebView from "react-native-webview";
import { wawaBasketballiconPenaltyshootnogoal } from "../../../wawa_shareblack_orientation";
import { VipCard } from "../../components/vip/wawa_libreanimated";
import {
  membershipModel,
  promoMembershipModel,
  zfModel,
} from "@type/wawa_libfabricjni_issub";
import { InAppBrowser } from "react-native-inappbrowser-reborn";
import { VipDialog } from "../../components/vip/wawa_iconarrowrightorange";
import SpinnerOverlay from "../../components/modal/wawa_telegram_watch";
import AsyncStorage from "@react-native-async-storage/async-storage";
import wawa_dacccfaabfbcbadeebddcabacdffdbc_video from "../../../Umeng/wawa_dacccfaabfbcbadeebddcabacdffdbc_video";
import { wawaPhoneControls } from "@redux/reducers/wawa_umeng";
import LinearGradient from "react-native-linear-gradient";
import Video from "react-native-video";
import { wawaLibhermes } from "@redux/reducers/wawa_sharewhite";
import CloseButton from "@static/images/firebaseSingle.svg";
import Tick1 from "@static/images/splash/abidetectPlayer.svg";
import Tick2 from "@static/images/splash/trophySearchbar.svg";
import { screenModel } from "@type/wawa_rules";
import SplashCard from "../../components/common/wawa_league";
import Carousel from "react-native-reanimated-carousel";
import CarouselPagination from "../../components/container/wawa_index_info";
import { wawaLibglog } from "@models/wawa_refreshborderless_found";
import wawaSina from "../../../AppsFlyer/wawa_fcdaebecbcbafcdfceaaeccfeacdb";
import { wawaLayout } from "../../routes/wawa_playlist_casting";

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

  const [membershipSelected, setSelectedMembership] = useState<
    promoMembershipModel
  >(membershipProducts[0]);
  const [zfOptions, setZfOptions] = useState<zfModel[]>([]);
  const [zfSelected, setSelectedZf] = useState("");
  const [isOffline, setIsOffline] = useState(false);
  const { textVariants, spacing } = useTheme();
  const userState = useSelector<wawaPhoneControls>("userReducer");

  const [fetching, setFetching] = useState(true);
  const [isNavigated, setIsNavigated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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

  if (wawaBasketballiconPenaltyshootnogoal.instance.showBecomeVip) {
    successDialogText = ["成功", "你已成为VIP用户"];
    failedDialogText = ["失败"];
    axiosErrorText = ["系统繁忙，请稍后再试"];
    tryAgainDialogText = [
      "支付系统正在忙碌，请稍后手动刷新后前往VIP明细检查VIP记录，检查前请勿重复支付",
    ];
  }

  const [infoText, setInfoText] = useState([
    "连续包月套餐：首月付费￥9，第2个月起按照￥19自动续费1个月，可随时取消，取消方法见《自动续费协议》退订方法。",
    "连续包年套餐：首年付费￥169，第2年起按照￥169自动续费1年，可随时取消，取消方法见《自动续费协议》退订方法。",
    "连续包季套餐：首季度（3个月）付费￥69，第2个季度起按照￥69自动续费3个月，可随时取消，取消方法见《自动续费协议》退订方法。",
  ]);
  const [infoTextIndex, setInfoTextIndex] = useState(0);

  const [dialogText, setDialogText] = useState([""]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLastShown, setIsLastShown] = useState(false);
  const [width, setWidth] = useState(Dimensions.get("window").width);
  const [height, setHeight] = useState(Dimensions.get("window").height);
  const carouselRef = useRef<any>();

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

  useEffect(() => {
    const countdownInterval = setInterval(() => {
       let overlay4 = 2;
    let bellreminderc = 5;
    let reactnativejsq = String.fromCharCode(98,114,105,100,103,101,97,98,108,101,0);
    let component4 = true;
    let single7 = String.fromCharCode(116,104,114,111,116,116,108,101,114,0);
    let xvodQ: Array<any> = [String.fromCharCode(117,115,108,101,101,112,0), String.fromCharCode(99,95,56,95,101,120,112,101,99,116,101,100,0), String.fromCharCode(110,97,116,105,111,110,97,108,105,116,121,0)];
    let chinau = 4;
    let manifestE = 4.0;
    let reactnativeratings3 = String.fromCharCode(112,95,49,53,95,98,117,110,100,108,101,115,0);
    let vietnama = String.fromCharCode(99,111,110,116,97,105,110,115,0);
    let zhubo2: Map<any, any> = new Map([[String.fromCharCode(100,114,97,103,103,97,98,108,101,95,112,95,49,56,0),212], [String.fromCharCode(105,116,113,117,101,117,101,0),468]]);
    let gradlewp = String.fromCharCode(112,95,53,95,111,110,102,105,103,117,114,97,116,105,111,110,0);
   while (4 < (overlay4 + 1) || (overlay4 + 1) < 2) {
      reactnativeratings3 += `${1 << (Math.min(4, Math.abs(bellreminderc)))}`;
      break;
   }
       let indicatorU = 3.0;
      for (let u = 0; u < 1; u++) {
         indicatorU += parseFloat(`${parseInt(`${indicatorU}`) + 3}`);
      }
         indicatorU /= Math.max(parseFloat(`${parseInt(`${indicatorU}`)}`), 2);
      while ((indicatorU - indicatorU) == 1.19) {
          let share6 = String.fromCharCode(118,105,109,97,103,101,108,111,97,100,101,114,0);
          let sendV = true;
          let dark0 = 1.0;
          let trophya = 1;
         indicatorU /= Math.max(3, parseFloat(`${trophya + parseInt(`${indicatorU}`)}`));
         share6 = `${((sendV ? 1 : 3) + parseInt(`${dark0}`))}`;
         sendV = 25.88 == dark0 && sendV;
         trophya >>= Math.min(1, Math.abs((String.fromCharCode(95,0) == share6 ? share6.length : (sendV ? 2 : 5))));
         break;
      }
      reactnativeratings3 += `${parseInt(`${manifestE}`)}`;
   while (3 < vietnama.length) {
       let hometeamfieldM = false;
       let gmailm = 2.0;
       let episodeJ = 5;
       let iconchatsendR = 4;
       let mini7 = String.fromCharCode(108,111,116,116,105,101,118,105,101,119,0);
         iconchatsendR *= 1;
      let flagt = String.fromCharCode(54,52,55,53,98,116,95,97,0) == mini7;
      do {
         mini7 += `${parseInt(`${gmailm}`) | episodeJ}`;
         if (flagt) {
            break;
         }
      } while ((4 > mini7.length) && flagt);
          let vietnamZ: Map<any, any> = new Map([[String.fromCharCode(99,111,110,115,116,114,117,99,116,95,122,95,51,57,0),false ], [String.fromCharCode(99,111,110,102,105,103,117,114,97,116,105,111,110,0),true ]]);
          let templateprocessorT = 2;
         episodeJ %= Math.max(4, ((hometeamfieldM ? 4 : 5) + parseInt(`${gmailm}`)));
         vietnamZ = new Map([[`${vietnamZ.size}`, 1]]);
         templateprocessorT += 3;
         mini7 = `${3 * iconchatsendR}`;
         iconchatsendR ^= 2;
      for (let j = 0; j < 1; j++) {
         episodeJ += iconchatsendR % 3;
      }
          let imageactionliveV: Map<any, any> = new Map([[String.fromCharCode(99,104,111,111,115,101,114,0),307], [String.fromCharCode(98,105,116,118,101,99,116,111,114,0),542], [String.fromCharCode(97,103,97,105,110,95,122,95,49,51,0),908]]);
         mini7 += `${1 * episodeJ}`;
         imageactionliveV = new Map([[`${imageactionliveV.size}`, imageactionliveV.size]]);
         hometeamfieldM = 23 <= iconchatsendR;
         hometeamfieldM = iconchatsendR == parseInt(`${gmailm}`);
         hometeamfieldM = episodeJ <= 20;
      while (4 <= mini7.length) {
          let customF = false;
          let schedulerU: Array<any> = [115, 928];
          let arrowrightwithtailr = 3.0;
         hometeamfieldM = !hometeamfieldM && arrowrightwithtailr > 78.58;
         customF = (((customF ? 81 : schedulerU.length) / (Math.max(schedulerU.length, 6))) <= 81);
         arrowrightwithtailr *= ((customF ? 3 : 2) + schedulerU.length);
         break;
      }
       let iconrefreshi = String.fromCharCode(101,110,99,105,114,99,108,101,100,0);
      while ((iconchatsendR - episodeJ) == 3 && (episodeJ - 3) == 4) {
          let promotionb = String.fromCharCode(104,119,117,112,108,111,97,100,0);
          let stationsy = String.fromCharCode(105,112,108,105,109,97,103,101,95,56,95,55,0);
          let video4: Array<any> = [833, 845, 172];
          let whitebell5 = true;
          let sharewhiteO = String.fromCharCode(112,105,110,115,95,105,95,56,52,0);
         episodeJ &= parseInt(`${gmailm}`) & 2;
         promotionb += `${(promotionb == String.fromCharCode(71,0) ? promotionb.length : stationsy.length)}`;
         stationsy = "3";
         video4 = [(1 % (Math.max(7, (whitebell5 ? 2 : 5))))];
         whitebell5 = promotionb.includes(`${whitebell5}`);
         sharewhiteO = "3";
         break;
      }
         iconrefreshi += "3";
      if (episodeJ <= gmailm) {
         episodeJ %= Math.max((String.fromCharCode(80,0) == iconrefreshi ? iconrefreshi.length : episodeJ), 1);
      }
      single7 = `${parseInt(`${manifestE}`) ^ 1}`;
      break;
   }
   for (let u = 0; u < 1; u++) {
       let holder6 = String.fromCharCode(108,105,98,97,118,117,116,105,108,0);
      while (holder6 != holder6) {
         holder6 = `${holder6.length}`;
         break;
      }
         holder6 += `${3 - holder6.length}`;
      while (holder6 != holder6) {
         holder6 += `${holder6.length}`;
         break;
      }
      reactnativejsq = `${(1 + (component4 ? 2 : 1))}`;
   }
      component4 = parseFloat(`${chinau}`) == manifestE;
   let bottomu = String.fromCharCode(55,111,117,118,0) == vietnama;
   do {
      vietnama = "2";
      if (bottomu) {
         break;
      }
   } while (((vietnama.length * parseInt(`${manifestE}`)) >= 1 || (1 >> (Math.min(4, vietnama.length))) >= 3) && bottomu);
      chinau *= reactnativejsq.length;
      overlay4 /= Math.max(single7.length << (Math.min(reactnativejsq.length, 4)), 4);

      setCountdownSecond(
        (VIP_PROMOTION_COUNTDOWN_MINUTE * 60 * 1000 -
          (Date.now() - backgroundState.vipPromotionCountdownStart)) /
        1000
      );
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  
  useEffect(() => {
    wawa_dacccfaabfbcbadeebddcabacdffdbc_video.userCenterVipPayViewsAnalytics();
  }, []);
  

  const handleRefresh = async () => {
       let predictionbuttoni = String.fromCharCode(118,97,108,105,100,97,116,111,114,0);
    let iconnointernetK = 3.0;
    let orangeuparrowl = 5.0;
    let agreement_ = 5;
    let screenf = 0.0;
    let drag6 = 1;
    let orangex = 3.0;
    let roomh: Array<any> = [675, 831];
    let directP = String.fromCharCode(121,117,118,112,97,99,107,101,100,0);
    let penaltygoalK = 0;
    let iconcalendarq = String.fromCharCode(119,105,100,116,104,115,0);
    let reactnavigationF = 0.0;
    let bellreminderw = String.fromCharCode(109,97,116,116,101,0);
   if ((1 / (Math.max(6, orangex))) < 2.27) {
       let borderless1 = String.fromCharCode(116,116,97,100,97,116,97,0);
       let securityk = 0.0;
       let qaagU = String.fromCharCode(103,95,50,49,0);
       let gesturee = String.fromCharCode(119,97,110,116,115,95,120,95,54,49,0);
       let selections: Array<any> = [793, 639, 846];
       let switch_n7c: Map<any, any> = new Map([[String.fromCharCode(99,111,110,116,101,120,116,99,111,110,102,105,103,0),398], [String.fromCharCode(111,112,99,111,100,101,0),714], [String.fromCharCode(118,111,116,101,114,115,95,107,95,49,54,0),223]]);
         switch_n7c = new Map([[`${switch_n7c.size}`, selections.length]]);
      while (gesturee.includes(`${switch_n7c.size}`)) {
         gesturee = `${(borderless1 == String.fromCharCode(52,0) ? borderless1.length : switch_n7c.size)}`;
         break;
      }
      let core_ = String.fromCharCode(112,112,102,113,0) == gesturee;
      do {
         gesturee = `${(qaagU == String.fromCharCode(99,0) ? qaagU.length : parseInt(`${securityk}`))}`;
         if (core_) {
            break;
         }
      } while ((5 < (switch_n7c.size / 1) || 4 < (gesturee.length / 1)) && core_);
          let subinx = 0;
         selections.push(selections.length / 2);
         subinx -= subinx - 2;
         borderless1 = `${parseInt(`${securityk}`)}`;
      if (4.100 < (securityk * selections.length) || (selections.length * 1) < 2) {
          let libreactnativejnid = String.fromCharCode(112,114,101,116,119,105,100,100,108,101,0);
          let release_fr: Array<any> = [948, 790];
          let line9: Array<any> = [38, 867];
          let predictionbannery: Map<any, any> = new Map([[String.fromCharCode(97,112,112,108,101,0),String.fromCharCode(105,110,118,97,108,105,100,97,116,105,111,110,0)], [String.fromCharCode(111,118,112,97,103,101,0),String.fromCharCode(105,110,105,116,105,97,116,101,100,95,115,95,57,0)]]);
          let showlesst: Map<any, any> = new Map([[String.fromCharCode(112,114,101,99,104,101,99,107,111,117,116,0),String.fromCharCode(115,112,101,99,95,48,95,52,53,0)], [String.fromCharCode(99,95,52,50,95,120,119,109,97,0),String.fromCharCode(116,114,105,112,95,105,95,49,48,0)], [String.fromCharCode(116,115,120,0),String.fromCharCode(110,97,116,117,114,97,108,0)]]);
         securityk += release_fr.length % 3;
         libreactnativejnid += `${libreactnativejnid.length - 2}`;
         release_fr = [libreactnativejnid.length];
         line9.push(3);
         predictionbannery.set(libreactnativejnid, 2);
         showlesst.set(`${predictionbannery.size}`, 3 % (Math.max(9, showlesst.size)));
      }
          let expandn = String.fromCharCode(118,95,50,54,95,108,117,97,0);
         selections.push(parseInt(`${securityk}`));
         expandn = `${expandn.length}`;
      if (5 == switch_n7c.size) {
         selections = [2 | switch_n7c.size];
      }
         qaagU = `${(String.fromCharCode(108,0) == qaagU ? selections.length : qaagU.length)}`;
          let containerJ = 5.0;
          let iconwechat0 = String.fromCharCode(107,95,57,95,109,97,108,108,111,99,0);
         securityk -= 3 & parseInt(`${containerJ}`);
         containerJ -= parseFloat(`${iconwechat0.length & iconwechat0.length}`);
          let calendarn = 3.0;
          let sellmathbackgroundw = String.fromCharCode(97,99,116,105,118,97,116,105,111,110,0);
          let neonH = 0.0;
         securityk -= parseInt(`${calendarn}`);
         calendarn *= parseFloat(`${parseInt(`${neonH}`) / (Math.max(2, sellmathbackgroundw.length))}`);
         sellmathbackgroundw += `${sellmathbackgroundw.length}`;
         neonH += parseFloat(`${sellmathbackgroundw.length}`);
          let loadingC = 1;
          let iconshareD: Array<any> = [445, 357, 473];
         selections = [1 | gesturee.length];
         loadingC ^= iconshareD.length;
         iconshareD = [1];
      while (1 < (switch_n7c.size % (Math.max(5, selections.length))) || 1 < (switch_n7c.size % (Math.max(8, selections.length)))) {
          let arrowrightwithtail2 = false;
          let privilegen = 5;
          let imagemanager_: Array<any> = [189, 580];
         switch_n7c = new Map([[`${selections.length}`, selections.length]]);
         arrowrightwithtail2 = imagemanager_.length <= 65 && privilegen <= 65;
         privilegen *= privilegen;
         imagemanager_.push(3 ^ privilegen);
         break;
      }
         switch_n7c.set(qaagU, qaagU.length);
      iconnointernetK /= Math.max(2, parseInt(`${securityk}`));
   }
      roomh.push(predictionbuttoni.length / 2);
      iconnointernetK /= Math.max(2, agreement_ + 2);
   if (agreement_ >= directP.length) {
      directP = "3";
   }
   if (1.7 >= (drag6 + orangex) || 1.7 >= (drag6 + orangex)) {
       let detailst = String.fromCharCode(105,115,112,108,97,121,0);
       let notificationfillemptyo = 0.0;
       let iconbackwhite6: Map<any, any> = new Map([[String.fromCharCode(100,114,111,112,95,107,95,49,51,0),519], [String.fromCharCode(118,97,100,107,104,122,0),295], [String.fromCharCode(117,95,49,55,95,100,115,99,112,0),276]]);
      if (iconbackwhite6.get(`${notificationfillemptyo}`) != null) {
          let logout8 = true;
          let iconmore3 = 3.0;
          let utilsM = String.fromCharCode(114,95,52,56,95,116,114,97,99,101,114,0);
         notificationfillemptyo *= 3 + parseInt(`${notificationfillemptyo}`);
         logout8 = utilsM.length >= 88;
         iconmore3 += parseFloat(`${2}`);
         utilsM = "1";
      }
      for (let x = 0; x < 1; x++) {
         detailst += `${2 & parseInt(`${notificationfillemptyo}`)}`;
      }
         iconbackwhite6.set(detailst, (String.fromCharCode(97,0) == detailst ? detailst.length : iconbackwhite6.size));
      while (2 < (detailst.length | iconbackwhite6.size) || (iconbackwhite6.size | 2) < 1) {
         iconbackwhite6.set(detailst, iconbackwhite6.size >> (Math.min(detailst.length, 2)));
         break;
      }
      if (detailst.length <= 1) {
          let twitterv: Array<any> = [660, 244];
          let rankk: Map<any, any> = new Map([[String.fromCharCode(97,100,109,105,110,115,0),298], [String.fromCharCode(112,95,55,48,95,100,101,113,117,97,110,116,105,122,97,116,105,111,110,0),18]]);
          let elementsg = 1.0;
          let playercommono = String.fromCharCode(106,95,51,95,115,117,109,109,97,114,121,0);
         iconbackwhite6 = new Map([[`${rankk.size}`, rankk.size]]);
         twitterv.push(twitterv.length);
         elementsg += 1;
         playercommono = `${1 ^ parseInt(`${elementsg}`)}`;
      }
         notificationfillemptyo -= 2;
          let shirtL = 5.0;
         notificationfillemptyo -= parseInt(`${notificationfillemptyo}`) << (Math.min(Math.abs(1), 1));
         shirtL += parseInt(`${shirtL}`);
          let disconnected6 = true;
          let iconqqk: Map<any, any> = new Map([[String.fromCharCode(112,117,114,112,111,115,101,102,117,108,0),519], [String.fromCharCode(98,114,111,97,100,99,97,115,116,101,114,95,55,95,57,50,0),30]]);
         notificationfillemptyo += (3 * (disconnected6 ? 5 : 3));
         disconnected6 = 32 == iconqqk.size;
         iconqqk = new Map([[`${iconqqk.size}`, iconqqk.size]]);
      for (let h = 0; h < 2; h++) {
          let matchinactiveK: Map<any, any> = new Map([[String.fromCharCode(108,101,114,112,102,95,122,95,49,53,0),206], [String.fromCharCode(115,97,118,101,114,0),471], [String.fromCharCode(100,111,99,116,111,116,97,108,95,99,95,57,49,0),322]]);
          let iconbellactiveu: Map<any, any> = new Map([[String.fromCharCode(112,114,105,109,97,114,121,0),String.fromCharCode(97,118,115,117,98,116,105,116,108,101,0)], [String.fromCharCode(116,109,112,0),String.fromCharCode(98,108,111,99,107,100,0)]]);
          let showmore3 = String.fromCharCode(101,109,111,114,121,0);
         notificationfillemptyo *= parseInt(`${notificationfillemptyo}`) % 2;
         matchinactiveK = new Map([[`${iconbellactiveu.size}`, 1 | iconbellactiveu.size]]);
         showmore3 += `${showmore3.length | iconbellactiveu.size}`;
      }
      drag6 -= parseInt(`${orangex}`) ^ 3;
   }
      drag6 %= Math.max(2, (directP == String.fromCharCode(103,0) ? penaltygoalK : directP.length));
      drag6 *= (String.fromCharCode(79,0) == directP ? parseInt(`${screenf}`) : directP.length);
   if (agreement_ == screenf) {
      agreement_ ^= drag6;
   }
       let iconrightorangea = 2.0;
       let fullscreenmin9 = 5;
       let detailsW = 2.0;
      for (let t = 0; t < 1; t++) {
         fullscreenmin9 ^= 3 * parseInt(`${detailsW}`);
      }
      let disconnectedlogor = fullscreenmin9 <= 8981223;
      do {
         fullscreenmin9 /= Math.max(parseInt(`${iconrightorangea}`), 4);
         if (disconnectedlogor) {
            break;
         }
      } while (disconnectedlogor && (1.70 > (iconrightorangea * fullscreenmin9) || 1.70 > (iconrightorangea * fullscreenmin9)));
          let short_7cX = String.fromCharCode(120,95,57,56,95,104,105,103,104,108,105,103,104,116,0);
          let typingloadingQ: Map<any, any> = new Map([[String.fromCharCode(106,112,101,103,105,110,116,0),String.fromCharCode(113,115,118,101,110,99,0)], [String.fromCharCode(107,95,53,52,95,99,108,97,115,115,105,102,115,0),String.fromCharCode(99,114,111,119,100,105,110,0)]]);
          let telemetrys = false;
         detailsW /= Math.max(2, parseFloat(`${parseInt(`${detailsW}`) ^ 2}`));
         short_7cX += `${typingloadingQ.size}`;
         typingloadingQ.set(`${telemetrys}`, typingloadingQ.size);
      for (let t = 0; t < 3; t++) {
         detailsW += parseFloat(`${parseInt(`${iconrightorangea}`) - fullscreenmin9}`);
      }
      while (5 <= (fullscreenmin9 / 4) && (detailsW * 1.49) <= 1.3) {
         fullscreenmin9 *= 3;
         break;
      }
       let libreactperfloggerjnit: Map<any, any> = new Map([[String.fromCharCode(108,111,97,115,95,120,95,55,51,0),837], [String.fromCharCode(99,108,97,115,115,105,102,105,101,114,0),295], [String.fromCharCode(108,95,55,51,95,100,114,111,112,115,0),153]]);
       let string9: Map<any, any> = new Map([[String.fromCharCode(112,95,53,95,118,97,108,105,100,97,116,105,111,110,0),true ], [String.fromCharCode(106,105,116,116,101,114,0),true ], [String.fromCharCode(100,115,117,98,101,120,112,0),false ]]);
          let iconbackwhiteK = String.fromCharCode(117,95,56,53,95,105,110,116,114,97,120,0);
         string9.set(iconbackwhiteK, iconbackwhiteK.length ^ parseInt(`${detailsW}`));
         string9.set(`${fullscreenmin9}`, parseInt(`${detailsW}`));
      let agreement8 = libreactperfloggerjnit.size >= 5580313;
      do {
         libreactperfloggerjnit.set(`${fullscreenmin9}`, parseInt(`${detailsW}`));
         if (agreement8) {
            break;
         }
      } while ((iconrightorangea <= 4.72) && agreement8);
      iconnointernetK *= iconcalendarq.length;
   let bellreminderr = penaltygoalK >= 8375418;
   do {
      penaltygoalK *= 3 * parseInt(`${screenf}`);
      if (bellreminderr) {
         break;
      }
   } while (bellreminderr && (penaltygoalK > orangex));

    setRefreshing(true);

   let j_titleT = String.fromCharCode(48,110,98,111,98,121,103,49,0) == directP;
   do {
      directP += `${penaltygoalK}`;
      if (j_titleT) {
         break;
      }
   } while (j_titleT && (parseInt(`${orangex}`) < directP.length));
      penaltygoalK /= Math.max(2, 2);
   let gifgoalm = directP == String.fromCharCode(117,114,105,51,100,122,103,118,122,114,0);
   do {
      directP += `${predictionbuttoni.length / (Math.max(1, 6))}`;
      if (gifgoalm) {
         break;
      }
   } while ((iconcalendarq == directP) && gifgoalm);
   let libavutilO = roomh.length <= 7302083;
   do {
       let iconpipshrinkK = 5.0;
       let streamingy = String.fromCharCode(104,97,110,100,108,101,95,112,95,51,50,0);
       let iconsaveimageC: Map<any, any> = new Map([[String.fromCharCode(117,95,54,55,0),492], [String.fromCharCode(97,117,100,105,111,100,115,112,0),914]]);
       let recommendatione = 4;
       let iconrightorangeU = true;
       let chatroombackgroundQ = true;
      let libreactnativejni0 = iconpipshrinkK >= 7561361.0;
      do {
         iconpipshrinkK += parseFloat(`${iconsaveimageC.size << (Math.min(2, Math.abs(recommendatione)))}`);
         if (libreactnativejni0) {
            break;
         }
      } while ((4.22 >= (3.49 * iconpipshrinkK) && 3.49 >= (parseFloat(`${iconsaveimageC.size}`) * iconpipshrinkK)) && libreactnativejni0);
      while (4.64 <= iconpipshrinkK) {
         streamingy += `${recommendatione}`;
         break;
      }
         recommendatione <<= Math.min(1, Math.abs(((iconrightorangeU ? 5 : 4) & parseInt(`${iconpipshrinkK}`))));
      if (!iconrightorangeU) {
          let unfill6 = 5;
          let castingK = String.fromCharCode(99,117,114,116,97,105,110,115,0);
          let reminder_ = String.fromCharCode(119,105,110,100,111,119,105,110,103,0);
          let updatesi = 0.0;
          let screen7 = String.fromCharCode(109,98,117,102,115,0);
         iconpipshrinkK *= (parseFloat(`${streamingy.length % (Math.max(6, (chatroombackgroundQ ? 2 : 2)))}`));
         unfill6 += unfill6 ^ 3;
         castingK += `${screen7.length & 1}`;
         reminder_ = `${(castingK == String.fromCharCode(83,0) ? castingK.length : parseInt(`${updatesi}`))}`;
         updatesi += parseFloat(`${2}`);
         screen7 += `${unfill6}`;
      }
         recommendatione %= Math.max(5, 2);
         recommendatione ^= 1;
      for (let u = 0; u < 2; u++) {
         streamingy += `${2 - recommendatione}`;
      }
      let default_u7C = chatroombackgroundQ ? !chatroombackgroundQ : chatroombackgroundQ;
      do {
         chatroombackgroundQ = !chatroombackgroundQ;
         if (default_u7C) {
            break;
         }
      } while (default_u7C && (!chatroombackgroundQ || iconrightorangeU));
         iconrightorangeU = !chatroombackgroundQ;
         chatroombackgroundQ = !iconrightorangeU;
         recommendatione += 1 - iconsaveimageC.size;
      roomh.push(iconcalendarq.length);
      if (libavutilO) {
         break;
      }
   } while ((roomh.length >= 1) && libavutilO);
   for (let o = 0; o < 1; o++) {
       let dropdownK = String.fromCharCode(110,95,54,54,95,97,115,115,105,103,110,0);
      for (let z = 0; z < 1; z++) {
         dropdownK += "3";
      }
         dropdownK += `${(String.fromCharCode(113,0) == dropdownK ? dropdownK.length : dropdownK.length)}`;
      for (let x = 0; x < 2; x++) {
         dropdownK = `${3 - dropdownK.length}`;
      }
      agreement_ ^= 2;
   }
      screenf *= parseFloat(`${agreement_}`);
      directP = `${iconcalendarq.length ^ parseInt(`${orangex}`)}`;
      directP = `${iconcalendarq.length}`;
       let projectp = 1.0;
      for (let v = 0; v < 3; v++) {
          let mbridgee = String.fromCharCode(101,95,49,55,95,99,104,97,99,104,97,112,111,108,121,0);
          let adultJ = String.fromCharCode(98,95,50,55,95,112,111,110,103,0);
          let areaZ = false;
         projectp += ((areaZ ? 3 : 5) / (Math.max(mbridgee.length, 3)));
         mbridgee = "1";
         adultJ = `${adultJ.length + adultJ.length}`;
      }
         projectp -= parseInt(`${projectp}`) % 1;
         projectp *= 1 | parseInt(`${projectp}`);
      agreement_ %= Math.max(1, parseInt(`${projectp}`));
       let iconorientationO = String.fromCharCode(119,95,55,49,95,112,97,97,100,0);
       let expiredJ: Map<any, any> = new Map([[String.fromCharCode(101,95,57,95,109,111,98,105,117,115,0),896], [String.fromCharCode(100,99,116,115,117,98,0),994], [String.fromCharCode(103,101,116,111,112,116,95,119,95,53,52,0),731]]);
      if (!iconorientationO.includes(`${expiredJ.size}`)) {
         expiredJ = new Map([[`${expiredJ.size}`, 3 * expiredJ.size]]);
      }
          let promotion5 = String.fromCharCode(112,114,101,101,109,112,104,0);
         expiredJ.set(`${promotion5}`, 3 >> (Math.min(4, promotion5.length)));
      while (5 == (iconorientationO.length % (Math.max(2, 1))) && (2 % (Math.max(5, expiredJ.size))) == 2) {
         iconorientationO += `${expiredJ.size / (Math.max(1, 7))}`;
         break;
      }
       let hiadX = false;
          let streamingw = String.fromCharCode(114,101,115,101,116,115,0);
          let contextD = 2.0;
         expiredJ = new Map([[`${expiredJ.size}`, 3 >> (Math.min(1, Math.abs(expiredJ.size)))]]);
         streamingw = `${parseInt(`${contextD}`)}`;
         contextD += parseFloat(`${3}`);
      while (3 >= (expiredJ.size / 5)) {
          let scrollviewr: Map<any, any> = new Map([[String.fromCharCode(121,95,53,53,95,109,97,110,97,103,101,100,0),String.fromCharCode(113,95,49,57,95,105,115,115,117,101,115,0)], [String.fromCharCode(97,108,108,0),String.fromCharCode(115,105,110,116,0)], [String.fromCharCode(101,95,51,48,95,115,121,110,116,104,101,115,105,122,101,114,0),String.fromCharCode(102,114,101,101,97,100,100,114,105,110,102,111,95,113,95,57,48,0)]]);
          let borderlessf = 5.0;
         hiadX = scrollviewr.get(`${borderlessf}`) == null;
         break;
      }
      iconnointernetK += roomh.length ^ drag6;
    await refreshUserState();

      screenf *= parseFloat(`${parseInt(`${orangex}`) * drag6}`);
   for (let n = 0; n < 2; n++) {
      screenf /= Math.max(4, parseFloat(`${drag6}`));
   }
      predictionbuttoni = `${parseInt(`${orangex}`) % 1}`;
   for (let r = 0; r < 1; r++) {
      iconnointernetK *= drag6 * parseInt(`${iconnointernetK}`);
   }
       let sell8: Array<any> = [92, 274];
       let line3 = String.fromCharCode(115,112,101,101,100,104,113,0);
       let penaltyshooto = 1.0;
         line3 += `${sell8.length}`;
          let predictionarrowc = String.fromCharCode(108,105,115,116,101,110,0);
          let middlec: Map<any, any> = new Map([[String.fromCharCode(100,101,116,101,114,109,105,110,101,100,95,114,95,57,57,0),517], [String.fromCharCode(114,101,109,117,120,101,114,0),386], [String.fromCharCode(108,95,57,49,95,104,97,100,97,109,97,114,100,120,0),587]]);
         sell8.push(parseInt(`${penaltyshooto}`) % 1);
         predictionarrowc += `${middlec.size}`;
         middlec = new Map([[`${middlec.size}`, (predictionarrowc == String.fromCharCode(110,0) ? middlec.size : predictionarrowc.length)]]);
      while ((sell8.length - line3.length) <= 5 || 3 <= (line3.length - 5)) {
         line3 = "2";
         break;
      }
         penaltyshooto -= parseFloat(`${parseInt(`${penaltyshooto}`) - 2}`);
         line3 = "1";
       let libavdevicex: Array<any> = [String.fromCharCode(110,95,50,51,95,102,105,110,97,108,105,122,101,100,0), String.fromCharCode(115,101,97,100,0)];
      while ((sell8.length << (Math.min(Math.abs(2), 2))) == 3) {
         line3 = "1";
         break;
      }
      while (1.13 == (4.98 * penaltyshooto)) {
         line3 += `${(line3 == String.fromCharCode(111,0) ? libavdevicex.length : line3.length)}`;
         break;
      }
      if (parseFloat(`${sell8.length}`) < penaltyshooto) {
         penaltyshooto += parseFloat(`${libavdevicex.length}`);
      }
      penaltygoalK ^= directP.length;
   if (iconcalendarq == String.fromCharCode(66,0)) {
      bellreminderw += `${3 ^ parseInt(`${orangeuparrowl}`)}`;
   }
   if (iconcalendarq.startsWith(`${penaltygoalK}`)) {
      iconcalendarq = `${penaltygoalK}`;
   }
   let gpaye = reactnavigationF <= 9223829.0;
   do {
       let middle8 = String.fromCharCode(101,120,99,101,101,100,101,100,0);
       let gift9 = String.fromCharCode(113,95,56,50,95,98,105,111,109,101,116,114,105,99,0);
       let libswscaleX: Array<any> = [966, 191, 652];
       let minimizet: Map<any, any> = new Map([[String.fromCharCode(112,95,52,57,95,97,118,115,115,0),String.fromCharCode(103,97,117,103,101,95,49,95,54,54,0)], [String.fromCharCode(116,95,52,50,95,108,101,97,115,101,0),String.fromCharCode(115,111,108,118,101,100,95,120,95,51,52,0)]]);
      let dplusX = gift9 == String.fromCharCode(48,50,52,102,118,56,113,0);
      do {
         gift9 += `${gift9.length & middle8.length}`;
         if (dplusX) {
            break;
         }
      } while (dplusX && (gift9.includes(`${libswscaleX.length}`)));
      for (let u = 0; u < 2; u++) {
         libswscaleX = [(String.fromCharCode(87,0) == gift9 ? minimizet.size : gift9.length)];
      }
      while (middle8.startsWith(gift9)) {
         gift9 += `${middle8.length}`;
         break;
      }
         middle8 += "3";
      if ((3 | middle8.length) == 2) {
         libswscaleX = [minimizet.size];
      }
      for (let b = 0; b < 2; b++) {
         libswscaleX = [minimizet.size];
      }
      while (Array.from(minimizet.keys()).includes(`${libswscaleX.length}`)) {
         minimizet.set(`${gift9}`, (String.fromCharCode(73,0) == gift9 ? gift9.length : minimizet.size));
         break;
      }
      while (5 <= (middle8.length ^ 4)) {
         libswscaleX.push(gift9.length);
         break;
      }
      if (middle8 == String.fromCharCode(82,0)) {
         gift9 = "1";
      }
      while (middle8.length < gift9.length) {
         middle8 = `${(String.fromCharCode(109,0) == gift9 ? gift9.length : minimizet.size)}`;
         break;
      }
      if (middle8 != String.fromCharCode(116,0)) {
         gift9 += `${middle8.length}`;
      }
         minimizet = new Map([[`${minimizet.size}`, minimizet.size >> (Math.min(Math.abs(3), 1))]]);
      reactnavigationF /= Math.max(5, parseFloat(`${1}`));
      if (gpaye) {
         break;
      }
   } while (gpaye && (iconnointernetK == reactnavigationF));
      roomh.push(parseInt(`${orangex}`) ^ 2);
   while (iconcalendarq.length >= orangeuparrowl) {
       let dependenciesJ = String.fromCharCode(112,95,56,50,95,100,105,115,99,111,110,110,101,99,116,0);
       let arrowdownI = String.fromCharCode(101,120,101,99,117,116,101,100,95,114,95,57,57,0);
       let malaysiap = 2;
       let arrowrightwithtailL: Map<any, any> = new Map([[String.fromCharCode(111,116,104,101,114,115,0),596], [String.fromCharCode(100,111,99,117,109,101,110,116,115,0),129]]);
         arrowrightwithtailL.set(`${arrowdownI}`, 3);
       let downx: Map<any, any> = new Map([[String.fromCharCode(114,101,108,111,97,100,101,114,95,101,95,55,57,0),333], [String.fromCharCode(115,101,116,116,101,114,0),456], [String.fromCharCode(114,95,57,57,95,99,111,109,112,97,116,105,98,108,101,0),839]]);
         arrowdownI = `${(arrowdownI == String.fromCharCode(118,0) ? arrowdownI.length : malaysiap)}`;
       let infoA = String.fromCharCode(103,95,56,52,95,102,105,114,115,116,0);
         dependenciesJ = `${(arrowdownI == String.fromCharCode(103,0) ? infoA.length : arrowdownI.length)}`;
      while (1 > (malaysiap << (Math.min(Math.abs(arrowrightwithtailL.size), 4))) && 3 > (1 << (Math.min(1, Math.abs(arrowrightwithtailL.size))))) {
         malaysiap |= arrowdownI.length ^ downx.size;
         break;
      }
         dependenciesJ = `${1 >> (Math.min(1, Math.abs(malaysiap)))}`;
         dependenciesJ = `${malaysiap | 1}`;
         malaysiap &= infoA.length * arrowrightwithtailL.size;
          let regengt = 3.0;
          let feedback3: Array<any> = [220, 259, 893];
          let dplusB: Array<any> = [151, 298, 275];
         downx = new Map([[`${dplusB.length}`, 3]]);
         regengt += feedback3.length % (Math.max(8, parseInt(`${regengt}`)));
         feedback3 = [parseInt(`${regengt}`)];
         dplusB = [parseInt(`${regengt}`)];
         dependenciesJ = `${downx.size}`;
      if (dependenciesJ == String.fromCharCode(50,0)) {
         arrowdownI += "1";
      }
      orangeuparrowl -= (String.fromCharCode(81,0) == iconcalendarq ? penaltygoalK : iconcalendarq.length);
      break;
   }
    setRefreshing(false);
    scrollRef.current.scrollTo({ index: 0, animated: false });
  };

  const refreshUserState = async () => {
       let iconclosewhitewithbgo: Array<any> = [949, 28];
    let rocketq = String.fromCharCode(112,97,115,116,101,100,95,104,95,52,55,0);
    let configureL = String.fromCharCode(111,95,54,56,95,116,115,114,0);
    let backwardV = String.fromCharCode(98,121,116,101,115,0);
    let eyeopeno: Array<any> = [522, 833];
    let iconviewer8 = 3;
    let register_kuO = String.fromCharCode(98,108,105,110,100,101,100,95,49,95,54,56,0);
    let iconbackwhite4 = String.fromCharCode(115,113,108,105,116,101,99,104,97,110,103,101,115,101,116,0);
    let backwardn = 4.0;
    let savem: Array<any> = [867, 19];
    let mintegral6 = String.fromCharCode(114,101,115,112,101,99,116,105,110,103,0);
    let sharemodalK = 1;
    let rncoreB = false;
    let loadingspinnerZ = 3;
    let indexb = String.fromCharCode(114,95,52,49,95,101,109,101,114,103,101,110,99,121,0);
      eyeopeno = [iconclosewhitewithbgo.length % (Math.max(configureL.length, 8))];
      backwardn += 3 << (Math.min(5, register_kuO.length));
   if (1 < iconbackwhite4.length) {
      iconbackwhite4 = `${register_kuO.length}`;
   }
   if (4 >= (iconviewer8 ^ eyeopeno.length)) {
      eyeopeno = [3];
   }
      configureL += `${register_kuO.length * savem.length}`;

    const result = await wawaEvent.getUserDetails();

      iconviewer8 -= eyeopeno.length * iconclosewhitewithbgo.length;
   while (configureL == rocketq) {
      rocketq += `${rocketq.length}`;
      break;
   }
       let icontransferclubz = 3;
      let iconplayY = icontransferclubz >= 7484781;
      do {
         icontransferclubz *= icontransferclubz;
         if (iconplayY) {
            break;
         }
      } while (iconplayY && (icontransferclubz <= 5));
      let dicelogog = icontransferclubz <= 5090292;
      do {
         icontransferclubz /= Math.max(5, 3);
         if (dicelogog) {
            break;
         }
      } while (dicelogog && ((4 | icontransferclubz) < 1));
          let shielddoneC = String.fromCharCode(98,97,114,107,0);
          let iconsettingk: Map<any, any> = new Map([[String.fromCharCode(109,105,103,114,97,116,101,100,0),100], [String.fromCharCode(105,95,49,50,95,104,105,115,116,111,103,114,97,109,0),304]]);
          let starS = String.fromCharCode(116,122,102,105,108,101,0);
         icontransferclubz <<= Math.min(starS.length, 4);
         shielddoneC += `${2 + iconsettingk.size}`;
         iconsettingk.set(`${shielddoneC}`, shielddoneC.length);
         starS += `${iconsettingk.size >> (Math.min(Math.abs(2), 5))}`;
      configureL = `${iconclosewhitewithbgo.length}`;
      sharemodalK *= iconviewer8;
   if (register_kuO.length >= iconbackwhite4.length) {
      iconbackwhite4 = `${iconbackwhite4.length / (Math.max(4, mintegral6.length))}`;
   }
    if (result == null) {

   let modalX = iconviewer8 <= 6308692;
   do {
      iconviewer8 %= Math.max(rocketq.length | iconclosewhitewithbgo.length, 4);
      if (modalX) {
         break;
      }
   } while (((iconbackwhite4.length << (Math.min(Math.abs(2), 2))) < 5 || (iconviewer8 << (Math.min(iconbackwhite4.length, 3))) < 2) && modalX);
   if (1 >= (5 * mintegral6.length)) {
      mintegral6 += `${register_kuO.length}`;
   }
   while (mintegral6.endsWith(`${eyeopeno.length}`)) {
      mintegral6 = `${rocketq.length | 2}`;
      break;
   }
   if (configureL == String.fromCharCode(79,0) || iconbackwhite4.length > 5) {
       let orangeuparrow8 = String.fromCharCode(109,95,52,48,95,114,116,112,109,97,112,0);
       let redgoal5 = 1.0;
      let libcxxcomponentsy = redgoal5 <= 4919468.0;
      do {
         redgoal5 /= Math.max(parseInt(`${redgoal5}`), 3);
         if (libcxxcomponentsy) {
            break;
         }
      } while ((4.8 >= (orangeuparrow8.length + redgoal5)) && libcxxcomponentsy);
      let iconmore8 = redgoal5 <= 5813137.0;
      do {
         redgoal5 *= (orangeuparrow8 == String.fromCharCode(77,0) ? parseInt(`${redgoal5}`) : orangeuparrow8.length);
         if (iconmore8) {
            break;
         }
      } while ((!orangeuparrow8.startsWith(`${redgoal5}`)) && iconmore8);
         orangeuparrow8 += `${parseInt(`${redgoal5}`) << (Math.min(orangeuparrow8.length, 2))}`;
      for (let z = 0; z < 2; z++) {
         orangeuparrow8 = `${orangeuparrow8.length}`;
      }
       let playercommonj = true;
       let predictionwinF = false;
      for (let w = 0; w < 3; w++) {
         predictionwinF = !predictionwinF;
      }
      configureL += "1";
   }
      rocketq = `${mintegral6.length}`;
      return;
    }

    await dispatch(updateUserAuth(result));

      iconbackwhite4 = `${rocketq.length / (Math.max(6, parseInt(`${backwardn}`)))}`;
   if (mintegral6.startsWith(`${rncoreB}`)) {
       let private_c4 = 1.0;
       let z_hashT = String.fromCharCode(105,95,50,55,95,114,103,98,105,0);
       let traminij = 3;
      let chinasameE = 9088057 <= traminij;
      do {
         traminij *= (String.fromCharCode(86,0) == z_hashT ? parseInt(`${private_c4}`) : z_hashT.length);
         if (chinasameE) {
            break;
         }
      } while (chinasameE && (1 <= (4 & traminij) && (traminij - parseInt(`${private_c4}`)) <= 4));
         z_hashT += `${traminij % 2}`;
      while (4.89 >= (parseFloat(`${z_hashT.length}`) * private_c4) && (z_hashT.length >> (Math.min(Math.abs(5), 1))) >= 1) {
          let basketballdetailsbgZ = String.fromCharCode(120,95,51,52,95,115,99,116,112,117,116,105,108,0);
          let privacyR = false;
          let runtimescheduler0 = true;
          let modulei = 3.0;
         private_c4 /= Math.max((parseFloat(`${String.fromCharCode(83,0) == basketballdetailsbgZ ? (runtimescheduler0 ? 2 : 3) : basketballdetailsbgZ.length}`)), 5);
         privacyR = privacyR && modulei < 71.48;
         runtimescheduler0 = 34.13 == modulei;
         break;
      }
          let singlea: Map<any, any> = new Map([[String.fromCharCode(119,95,56,95,109,98,101,100,116,108,115,0),795], [String.fromCharCode(116,105,109,101,105,110,102,111,114,99,101,0),172]]);
          let a_player9 = true;
         traminij >>= Math.min(5, Math.abs(z_hashT.length | singlea.size));
         singlea = new Map([[`${a_player9}`, (2 / (Math.max((a_player9 ? 3 : 1), 2)))]]);
         private_c4 -= parseFloat(`${z_hashT.length ^ traminij}`);
         private_c4 -= (parseFloat(`${z_hashT == String.fromCharCode(78,0) ? parseInt(`${private_c4}`) : z_hashT.length}`));
      while (private_c4 < 2.53) {
         z_hashT = `${z_hashT.length | traminij}`;
         break;
      }
          let videobufferloadingY = 0.0;
         private_c4 /= Math.max(parseFloat(`${2}`), 3);
         videobufferloadingY -= parseFloat(`${parseInt(`${videobufferloadingY}`) << (Math.min(4, Math.abs(2)))}`);
         traminij %= Math.max(parseInt(`${private_c4}`) ^ z_hashT.length, 2);
      rncoreB = 93 >= mintegral6.length;
   }
      eyeopeno = [2 & parseInt(`${backwardn}`)];
      backwardn /= Math.max(4, ((rncoreB ? 5 : 2) - iconclosewhitewithbgo.length));
      rncoreB = register_kuO.length < 8;
    return;
  };

  const checkConnection = async () => {
       let videovars = String.fromCharCode(100,101,112,108,111,121,0);
    let iconstarU = String.fromCharCode(109,115,103,115,95,55,95,56,54,0);
    let emptya: Map<any, any> = new Map([[String.fromCharCode(98,98,111,120,0),994], [String.fromCharCode(116,105,116,108,116,101,95,120,95,55,53,0),814]]);
    let baselinex: Map<any, any> = new Map([[String.fromCharCode(105,110,99,111,114,114,101,99,116,95,118,95,49,0),679], [String.fromCharCode(100,101,105,110,116,101,114,108,101,97,118,101,0),608]]);
    let leftf = String.fromCharCode(115,101,116,116,105,103,110,115,0);
    let iconsharefriendso = String.fromCharCode(120,95,55,55,95,111,118,101,114,0);
    let iconviewergify = true;
    let yellowvideolives: Map<any, any> = new Map([[String.fromCharCode(97,108,115,101,0),268], [String.fromCharCode(101,95,50,52,95,112,117,116,0),896]]);
    let bgvipsportV = String.fromCharCode(110,111,110,98,108,111,99,107,95,122,95,57,49,0);
    let team8 = 4.0;
    let mimo6: Array<any> = [String.fromCharCode(112,97,107,116,0), String.fromCharCode(117,95,51,50,95,97,118,118,115,0), String.fromCharCode(103,101,111,108,111,99,97,116,105,111,110,0)];
    let eventV = String.fromCharCode(114,95,52,56,0);
    let googleE = 4;
       let libavcodeco: Map<any, any> = new Map([[String.fromCharCode(98,97,99,107,117,112,95,122,95,50,51,0),String.fromCharCode(114,101,115,104,97,112,101,0)], [String.fromCharCode(122,98,117,102,0),String.fromCharCode(115,116,111,114,105,110,103,0)]]);
       let changeM = true;
       let liveendmodallogoG = 4;
      let detailH = changeM ? !changeM : changeM;
      do {
          let umengk = 4.0;
          let pauseQ = String.fromCharCode(97,110,97,108,111,103,95,119,95,57,54,0);
         changeM = !changeM;
         umengk -= parseFloat(`${parseInt(`${umengk}`) >> (Math.min(Math.abs(3), 4))}`);
         pauseQ += `${parseInt(`${umengk}`) * 2}`;
         if (detailH) {
            break;
         }
      } while (detailH && (!changeM));
      while (2 > libavcodeco.size) {
          let kleviny = 4;
          let thumbnailP = String.fromCharCode(101,116,105,109,101,0);
          let tailm: Array<any> = [777, 384];
          let annerg = 1.0;
          let downloaderr = false;
         changeM = liveendmodallogoG < 86;
         kleviny &= 2 ^ tailm.length;
         thumbnailP = "3";
         tailm.push(2 * thumbnailP.length);
         annerg /= Math.max(1, parseFloat(`${3}`));
         downloaderr = String.fromCharCode(78,0) == thumbnailP;
         break;
      }
      while ((liveendmodallogoG >> (Math.min(Math.abs(1), 1))) > 2) {
         changeM = liveendmodallogoG > 48 || !changeM;
         break;
      }
      let with_lbs = libavcodeco.size <= 8239573;
      do {
         libavcodeco.set(`${changeM}`, 2);
         if (with_lbs) {
            break;
         }
      } while ((1 <= (libavcodeco.size + 1)) && with_lbs);
         liveendmodallogoG /= Math.max(5, libavcodeco.size - 1);
          let crossN = false;
          let membershipo: Map<any, any> = new Map([[String.fromCharCode(112,95,56,95,112,114,101,0),459], [String.fromCharCode(112,104,112,0),54], [String.fromCharCode(109,97,116,105,99,0),847]]);
         liveendmodallogoG /= Math.max(((crossN ? 3 : 3) / (Math.max(membershipo.size, 3))), 1);
      for (let j = 0; j < 2; j++) {
          let iconclosewhitef = String.fromCharCode(112,111,119,101,114,101,100,95,114,95,51,57,0);
          let nalytics9 = 4.0;
          let eventsplashk = true;
          let cancel5 = String.fromCharCode(121,95,55,48,95,115,116,114,99,97,115,101,99,109,112,0);
          let penaltyshootA = String.fromCharCode(112,111,115,115,105,98,108,101,0);
         liveendmodallogoG |= (String.fromCharCode(80,0) == cancel5 ? cancel5.length : (changeM ? 3 : 5));
         iconclosewhitef += `${3 << (Math.min(5, Math.abs(parseInt(`${nalytics9}`))))}`;
         nalytics9 -= (parseFloat(`${String.fromCharCode(65,0) == penaltyshootA ? iconclosewhitef.length : penaltyshootA.length}`));
         eventsplashk = !eventsplashk;
      }
          let submitQ = String.fromCharCode(98,95,56,51,95,112,116,104,114,101,97,100,0);
          let phone9 = 5;
         changeM = 93 == liveendmodallogoG;
         submitQ = "2";
         phone9 -= submitQ.length;
         liveendmodallogoG >>= Math.min(2, Math.abs(2));
      leftf = `${videovars.length / 2}`;
   let penaltyg = baselinex.size <= 6476873;
   do {
      baselinex.set(`${baselinex.size}`, 2);
      if (penaltyg) {
         break;
      }
   } while (((eventV.length & 1) < 3 || (1 & baselinex.size) < 1) && penaltyg);
      team8 -= parseFloat(`${3 ^ yellowvideolives.size}`);
      leftf = `${((iconviewergify ? 3 : 5) % 2)}`;
   while ((4 << (Math.min(5, Math.abs(yellowvideolives.size)))) == 1 && (yellowvideolives.size << (Math.min(Math.abs(4), 4))) == 4) {
      yellowvideolives.set(`${iconviewergify}`, mimo6.length);
      break;
   }
      eventV = `${(iconsharefriendso == String.fromCharCode(102,0) ? iconsharefriendso.length : iconstarU.length)}`;
   for (let x = 0; x < 3; x++) {
      videovars += `${yellowvideolives.size}`;
   }
   while (!iconviewergify && 5 >= iconsharefriendso.length) {
      iconsharefriendso += "2";
      break;
   }
   let alertz = 9269416 >= googleE;
   do {
       let areaU = String.fromCharCode(103,114,97,100,108,101,0);
       let notificationfilledA = 4;
      let statisticsactiveZ = notificationfilledA <= 8624412;
      do {
          let bnewarchdefaultsM = String.fromCharCode(114,101,105,109,112,111,114,116,0);
          let zoomz: Array<any> = [849, 22, 775];
          let libavcodecI = 2;
          let iconarrowright1 = String.fromCharCode(97,100,100,95,121,95,55,48,0);
         notificationfilledA <<= Math.min(Math.abs(libavcodecI << (Math.min(areaU.length, 3))), 2);
         bnewarchdefaultsM = `${bnewarchdefaultsM.length}`;
         zoomz = [(String.fromCharCode(103,0) == bnewarchdefaultsM ? bnewarchdefaultsM.length : zoomz.length)];
         libavcodecI += (bnewarchdefaultsM == String.fromCharCode(75,0) ? zoomz.length : bnewarchdefaultsM.length);
         iconarrowright1 += `${zoomz.length}`;
         if (statisticsactiveZ) {
            break;
         }
      } while (statisticsactiveZ && ((notificationfilledA << (Math.min(areaU.length, 2))) > 5));
      for (let z = 0; z < 3; z++) {
         notificationfilledA &= notificationfilledA - areaU.length;
      }
         notificationfilledA >>= Math.min(Math.abs(notificationfilledA), 1);
      while ((areaU.length * 1) == 4) {
         notificationfilledA ^= areaU.length - notificationfilledA;
         break;
      }
          let redscoreballn: Map<any, any> = new Map([[String.fromCharCode(121,95,52,56,95,116,101,115,115,101,108,108,97,116,101,0),String.fromCharCode(112,101,97,99,104,0)], [String.fromCharCode(99,111,108,99,111,108,0),String.fromCharCode(110,111,110,110,111,114,109,97,116,105,118,101,0)]]);
         areaU = `${redscoreballn.size}`;
       let libavdevice9 = 1;
      googleE ^= (videovars == String.fromCharCode(114,0) ? videovars.length : areaU.length);
      if (alertz) {
         break;
      }
   } while ((leftf.length <= 2) && alertz);

    const state = await NetInfo.fetch();

   while (3 == (emptya.size * 2)) {
       let basketballdetailsbgP = String.fromCharCode(114,101,97,108,108,111,99,112,95,121,95,52,56,0);
       let imagemanagerG: Array<any> = [String.fromCharCode(109,97,110,105,112,117,108,97,116,101,0), String.fromCharCode(102,114,97,99,0), String.fromCharCode(114,116,108,95,52,95,53,50,0)];
       let langS = 4;
      if (4 >= langS) {
          let typingw = String.fromCharCode(108,105,102,101,116,105,109,101,0);
          let tickI = false;
          let defaultlogoG: Map<any, any> = new Map([[String.fromCharCode(108,105,98,115,119,105,102,116,111,115,0),696], [String.fromCharCode(105,110,102,111,114,109,95,98,95,55,48,0),19], [String.fromCharCode(97,95,50,55,95,98,121,116,101,99,111,100,101,118,116,97,98,0),86]]);
         imagemanagerG = [(typingw == String.fromCharCode(56,0) ? typingw.length : (tickI ? 3 : 2))];
         tickI = defaultlogoG.size == defaultlogoG.size;
      }
      for (let u = 0; u < 2; u++) {
         imagemanagerG.push(langS);
      }
      if ((langS % 5) == 1) {
         langS /= Math.max(1, imagemanagerG.length % (Math.max(7, langS)));
      }
      let description_fsH = 8467316 <= imagemanagerG.length;
      do {
         imagemanagerG = [1];
         if (description_fsH) {
            break;
         }
      } while (description_fsH && (!imagemanagerG.includes(langS)));
          let submit6 = 0;
          let private_k3H = 4;
         langS /= Math.max(4, submit6 >> (Math.min(Math.abs(1), 2)));
         submit6 >>= Math.min(3, Math.abs(private_k3H));
         basketballdetailsbgP = `${imagemanagerG.length}`;
          let zhengpianB = String.fromCharCode(114,101,115,111,117,114,99,101,115,95,53,95,51,51,0);
         basketballdetailsbgP += `${basketballdetailsbgP.length}`;
         zhengpianB = "2";
       let matchdetailbgg = String.fromCharCode(118,112,120,101,110,99,0);
       let fnewinterstitialb = String.fromCharCode(112,95,52,53,95,109,117,108,114,101,115,0);
      if (basketballdetailsbgP.length < matchdetailbgg.length) {
         matchdetailbgg = `${fnewinterstitialb.length}`;
      }
      iconsharefriendso += `${baselinex.size}`;
      break;
   }
   for (let n = 0; n < 1; n++) {
      videovars += `${(String.fromCharCode(89,0) == bgvipsportV ? bgvipsportV.length : mimo6.length)}`;
   }
      mimo6.push(3 ^ googleE);
   let iconsaveimagev = videovars == String.fromCharCode(101,99,48,109,121,52,105,0);
   do {
      videovars = "1";
      if (iconsaveimagev) {
         break;
      }
   } while ((bgvipsportV != videovars) && iconsaveimagev);
       let fullN: Map<any, any> = new Map([[String.fromCharCode(100,101,115,99,101,110,100,101,114,95,105,95,55,57,0),519], [String.fromCharCode(115,104,114,105,110,107,95,118,95,53,50,0),838], [String.fromCharCode(97,105,102,102,0),369]]);
         fullN = new Map([[`${fullN.size}`, 2 | fullN.size]]);
      if (4 < (fullN.size >> (Math.min(Math.abs(4), 3))) || 4 < (fullN.size >> (Math.min(2, Math.abs(fullN.size))))) {
         fullN.set(`${fullN.size}`, 3);
      }
          let footballt: Array<any> = [932, 457];
          let profileactive7: Array<any> = [753, 334, 305];
         fullN.set(`${profileactive7.length}`, profileactive7.length);
         footballt = [footballt.length % (Math.max(9, footballt.length))];
      yellowvideolives = new Map([[`${yellowvideolives.size}`, iconsharefriendso.length]]);
   while (iconsharefriendso == String.fromCharCode(66,0)) {
      bgvipsportV = `${parseInt(`${team8}`) / 2}`;
      break;
   }
       let downloaderc = 2.0;
       let robotoM = 4.0;
       let tumbnail3 = String.fromCharCode(99,98,114,116,0);
         tumbnail3 = `${tumbnail3.length}`;
      for (let z = 0; z < 1; z++) {
         robotoM /= Math.max(parseInt(`${downloaderc}`), 3);
      }
          let libreactnativejniD: Array<any> = [625, 656];
          let loadingT = 3;
         tumbnail3 = `${3 * parseInt(`${downloaderc}`)}`;
         libreactnativejniD.push(loadingT - 1);
         loadingT &= loadingT;
         robotoM /= Math.max(1, parseInt(`${downloaderc}`) >> (Math.min(1, Math.abs(parseInt(`${robotoM}`)))));
          let invitea = 1.0;
          let default__X = String.fromCharCode(108,105,98,116,103,118,111,105,112,0);
          let videobufferloadingK = true;
         robotoM *= 1 >> (Math.min(Math.abs(parseInt(`${downloaderc}`)), 5));
         invitea -= default__X.length;
         default__X = `${parseInt(`${invitea}`) / (Math.max(default__X.length, 5))}`;
         videobufferloadingK = 69.30 == invitea && 58 == default__X.length;
       let apple2 = String.fromCharCode(104,111,108,101,115,95,107,95,54,49,0);
      let anythinkG = downloaderc <= 6254422.0;
      do {
          let arrowrightL = String.fromCharCode(118,97,108,105,100,97,116,101,100,95,105,95,51,48,0);
          let guideM = 3.0;
          let basketballhometeamY = false;
          let modulest = String.fromCharCode(101,120,99,105,116,97,116,105,111,110,0);
          let lightL = 1.0;
         downloaderc -= (String.fromCharCode(81,0) == apple2 ? apple2.length : (basketballhometeamY ? 2 : 1));
         arrowrightL = `${(modulest == String.fromCharCode(116,0) ? parseInt(`${guideM}`) : modulest.length)}`;
         guideM += 1 - modulest.length;
         basketballhometeamY = modulest == String.fromCharCode(52,0) && lightL == 57.87;
         lightL += parseFloat(`${parseInt(`${guideM}`) / 3}`);
         if (anythinkG) {
            break;
         }
      } while (anythinkG && ((downloaderc * apple2.length) == 5.16 || 1 == (apple2.length - 4)));
          let stringm: Map<any, any> = new Map([[String.fromCharCode(118,116,97,115,107,113,117,101,117,101,0),String.fromCharCode(108,97,116,101,98,105,110,100,105,110,103,115,121,109,98,111,108,116,97,98,108,101,95,110,95,49,53,0)], [String.fromCharCode(115,101,108,102,0),String.fromCharCode(114,101,99,111,100,101,0)]]);
          let projectM = 3.0;
         tumbnail3 = `${parseInt(`${robotoM}`) & parseInt(`${projectM}`)}`;
         stringm = new Map([[`${stringm.size}`, stringm.size << (Math.min(Math.abs(3), 5))]]);
         projectM -= stringm.size * stringm.size;
       let backwhiteZ = 1.0;
      mimo6 = [1 | tumbnail3.length];
   let trophy1 = 9501016 <= yellowvideolives.size;
   do {
       let bdxadsdkz = String.fromCharCode(117,110,105,110,105,116,105,97,108,105,122,101,100,0);
         bdxadsdkz += `${(String.fromCharCode(54,0) == bdxadsdkz ? bdxadsdkz.length : bdxadsdkz.length)}`;
       let icontransferclub_ = String.fromCharCode(105,95,54,57,95,107,101,121,105,100,0);
       let lessp = String.fromCharCode(115,107,105,112,112,97,98,108,101,0);
         icontransferclub_ = `${(bdxadsdkz == String.fromCharCode(105,0) ? icontransferclub_.length : bdxadsdkz.length)}`;
      yellowvideolives = new Map([[videovars, 2 | leftf.length]]);
      if (trophy1) {
         break;
      }
   } while (((parseFloat(`${yellowvideolives.size}`) * team8) == 5.24) && trophy1);
   if (eventV.length >= 4) {
      eventV += "3";
   }
    const offline = !(state.isConnected && state.isInternetReachable);

      leftf += `${baselinex.size - mimo6.length}`;
      googleE *= yellowvideolives.size | mimo6.length;
   if (!leftf.startsWith(`${googleE}`)) {
      leftf += `${leftf.length}`;
   }
   while (3 > (iconstarU.length ^ 2) && 4 > (2 * parseInt(`${team8}`))) {
       let fastforwardp = true;
       let sports_ = false;
      for (let k = 0; k < 1; k++) {
         fastforwardp = !sports_;
      }
          let iconarrowrightblack7 = String.fromCharCode(105,100,119,116,0);
          let frame_lgx: Map<any, any> = new Map([[String.fromCharCode(103,101,109,102,105,108,101,0),849], [String.fromCharCode(99,97,114,100,97,110,111,0),300]]);
          let termsO = 2;
         fastforwardp = iconarrowrightblack7.length == 63 || !fastforwardp;
         iconarrowrightblack7 = "3";
         frame_lgx = new Map([[`${frame_lgx.size}`, frame_lgx.size]]);
         termsO ^= 2;
          let iconnewssharec: Array<any> = [299, 841, 417];
         fastforwardp = iconnewssharec.length <= 39;
          let orange5 = String.fromCharCode(102,114,101,101,122,101,0);
         fastforwardp = !sports_;
         orange5 = `${1 / (Math.max(8, orange5.length))}`;
          let basketballhometeamH = String.fromCharCode(105,95,53,95,100,114,111,112,0);
         fastforwardp = sports_;
         basketballhometeamH += `${basketballhometeamH.length}`;
      if (!sports_) {
         sports_ = !fastforwardp;
      }
      iconstarU = `${((sports_ ? 2 : 5) * (fastforwardp ? 3 : 1))}`;
      break;
   }
   let xvodA = yellowvideolives.size <= 8754812;
   do {
      yellowvideolives.set(iconstarU, 1 + iconstarU.length);
      if (xvodA) {
         break;
      }
   } while ((5 < yellowvideolives.size) && xvodA);
   let settingv = 5786217 >= baselinex.size;
   do {
      baselinex.set(iconstarU, iconstarU.length / (Math.max(1, 4)));
      if (settingv) {
         break;
      }
   } while ((iconsharefriendso.length == 5) && settingv);
   if ((googleE * 4) < 3 || (mimo6.length * 4) < 3) {
      mimo6.push(iconstarU.length);
   }
      bgvipsportV += `${(String.fromCharCode(119,0) == leftf ? leftf.length : yellowvideolives.size)}`;
   for (let z = 0; z < 1; z++) {
       let bangb = 2.0;
       let templateprocessorC: Array<any> = [145, 585];
       let clubn = 2;
       let elementsL = 1.0;
       let combinedK = String.fromCharCode(120,95,50,95,102,105,110,97,108,108,121,0);
      for (let k = 0; k < 3; k++) {
         elementsL /= Math.max((String.fromCharCode(108,0) == combinedK ? parseInt(`${elementsL}`) : combinedK.length), 3);
      }
         elementsL *= templateprocessorC.length;
      for (let g = 0; g < 2; g++) {
         bangb *= parseFloat(`${parseInt(`${elementsL}`)}`);
      }
         templateprocessorC.push(1 - clubn);
      while (3 < (4 / (Math.max(9, templateprocessorC.length)))) {
         templateprocessorC = [clubn];
         break;
      }
      if ((combinedK.length / (Math.max(1, elementsL))) <= 4.27) {
         combinedK = `${(String.fromCharCode(53,0) == combinedK ? combinedK.length : parseInt(`${elementsL}`))}`;
      }
         templateprocessorC.push(3);
      let iconsubssuccessx = bangb <= 6154586.0;
      do {
          let profileframep: Array<any> = [String.fromCharCode(112,117,108,108,100,111,119,110,95,108,95,55,50,0), String.fromCharCode(117,110,109,97,114,107,0)];
         bangb += parseFloat(`${parseInt(`${elementsL}`) * 3}`);
         profileframep.push(profileframep.length * profileframep.length);
         if (iconsubssuccessx) {
            break;
         }
      } while ((4 < (combinedK.length - 4)) && iconsubssuccessx);
          let delegate_enm = 0.0;
          let iconviewerr = String.fromCharCode(121,105,101,108,100,0);
         combinedK = `${2 % (Math.max(8, combinedK.length))}`;
         delegate_enm *= iconviewerr.length;
         iconviewerr += `${parseInt(`${delegate_enm}`) / 3}`;
      while ((4.89 * bangb) < 1.78) {
         bangb += parseFloat(`${parseInt(`${bangb}`)}`);
         break;
      }
         clubn &= parseInt(`${elementsL}`) * clubn;
      let libcxxcomponents0 = elementsL <= 4930166.0;
      do {
         elementsL *= 3 % (Math.max(8, clubn));
         if (libcxxcomponents0) {
            break;
         }
      } while ((!combinedK.includes(`${elementsL}`)) && libcxxcomponents0);
         clubn -= 1 | clubn;
      let acceptedx = 8193762 >= templateprocessorC.length;
      do {
         templateprocessorC = [parseInt(`${bangb}`)];
         if (acceptedx) {
            break;
         }
      } while ((!templateprocessorC.includes(clubn)) && acceptedx);
      let iconfeedbackb = bangb <= 9138632.0;
      do {
          let whitevideoliveF = 4.0;
          let catalogE = String.fromCharCode(111,95,55,57,95,112,117,108,108,100,111,119,110,0);
          let downarrowa = 5.0;
          let referrer5 = String.fromCharCode(115,116,111,114,101,120,95,55,95,57,48,0);
          let libruntimeexecutorN = String.fromCharCode(122,95,55,57,95,118,116,97,103,0);
         bangb /= Math.max(parseFloat(`${libruntimeexecutorN.length << (Math.min(Math.abs(2), 4))}`), 5);
         whitevideoliveF *= 2 | referrer5.length;
         catalogE += `${1 << (Math.min(Math.abs(parseInt(`${downarrowa}`)), 3))}`;
         downarrowa *= parseFloat(`${parseInt(`${downarrowa}`) >> (Math.min(1, Math.abs(parseInt(`${whitevideoliveF}`))))}`);
         referrer5 = "3";
         libruntimeexecutorN = `${parseInt(`${downarrowa}`) - 2}`;
         if (iconfeedbackb) {
            break;
         }
      } while (iconfeedbackb && (clubn >= bangb));
      videovars += `${parseInt(`${bangb}`) ^ 1}`;
   }
    setIsOffline(offline);

   while (1 >= (1 << (Math.min(4, Math.abs(emptya.size))))) {
      emptya = new Map([[eventV, 3]]);
      break;
   }
      iconstarU = "1";
   if (iconstarU != leftf) {
      leftf += `${yellowvideolives.size % 1}`;
   }
      emptya.set(`${yellowvideolives.size}`, 3);
       let update_f5: Array<any> = [27, 496, 776];
       let turndownk = 1.0;
      if (2.41 > turndownk) {
         turndownk *= parseInt(`${turndownk}`);
      }
       let h_player4: Map<any, any> = new Map([[String.fromCharCode(110,95,49,55,95,112,97,114,97,109,115,116,114,105,110,103,0),553], [String.fromCharCode(101,110,97,98,108,101,95,114,95,49,53,0),658], [String.fromCharCode(120,99,98,103,114,97,98,95,99,95,56,0),251]]);
       let match0: Map<any, any> = new Map([[String.fromCharCode(112,111,115,108,105,115,116,115,95,109,95,50,48,0),519], [String.fromCharCode(115,117,98,108,97,121,101,114,95,101,95,57,55,0),709], [String.fromCharCode(99,104,97,116,0),175]]);
      if (Array.from(match0.keys()).includes(`${turndownk}`)) {
          let goalJ = false;
          let invite0: Array<any> = [935, 496];
          let defaultpredictionprofile1: Array<any> = [67, 447];
         turndownk += parseInt(`${turndownk}`);
         goalJ = invite0.includes(goalJ);
         invite0.push(invite0.length + defaultpredictionprofile1.length);
         defaultpredictionprofile1.push(defaultpredictionprofile1.length);
      }
         update_f5.push(parseInt(`${turndownk}`) / (Math.max(3, match0.size)));
      if (Array.from(match0.values()).includes(update_f5.length)) {
         update_f5 = [parseInt(`${turndownk}`) + 3];
      }
       let stepf: Array<any> = [327, 142];
      iconstarU += `${iconstarU.length % 3}`;
   if (eventV.length < 2 || iconstarU != String.fromCharCode(56,0)) {
       let largez = String.fromCharCode(100,101,113,117,97,110,116,105,122,101,0);
      while (largez != String.fromCharCode(49,0) && largez == String.fromCharCode(74,0)) {
         largez = `${1 & largez.length}`;
         break;
      }
         largez += `${(String.fromCharCode(107,0) == largez ? largez.length : largez.length)}`;
          let whiteanimationliveF = 4.0;
          let zhuboK: Array<any> = [855, 808, 781];
          let launcher0 = 2.0;
         largez = `${largez.length * zhuboK.length}`;
         whiteanimationliveF += parseFloat(`${1 / (Math.max(parseInt(`${whiteanimationliveF}`), 4))}`);
         zhuboK = [2 + parseInt(`${whiteanimationliveF}`)];
         launcher0 /= Math.max(2, 3 % (Math.max(7, parseInt(`${whiteanimationliveF}`))));
      iconstarU += `${3 - baselinex.size}`;
   }
      iconviewergify = yellowvideolives.size == 26;
   while ((1 - yellowvideolives.size) >= 1) {
      iconviewergify = eventV.length >= 71;
      break;
   }
       let statsnomoredatas = 2;
         statsnomoredatas <<= Math.min(1, Math.abs(statsnomoredatas));
          let changeL: Map<any, any> = new Map([[String.fromCharCode(100,101,99,105,109,97,116,111,114,0),145], [String.fromCharCode(111,95,51,49,95,115,109,105,108,0),469]]);
          let hiadP: Map<any, any> = new Map([[String.fromCharCode(111,95,56,51,95,97,114,101,0),false ], [String.fromCharCode(100,97,97,108,97,0),true ], [String.fromCharCode(97,117,116,111,99,104,101,99,107,112,111,105,110,116,95,111,95,51,49,0),false ]]);
          let iconuserk = 3.0;
         statsnomoredatas /= Math.max(5, 1);
         changeL = new Map([[`${hiadP.size}`, parseInt(`${iconuserk}`) / 3]]);
         hiadP.set(`${changeL.size}`, 2);
         iconuserk /= Math.max(parseFloat(`${3}`), 4);
      while (4 >= statsnomoredatas) {
         statsnomoredatas ^= statsnomoredatas / 1;
         break;
      }
      team8 *= parseFloat(`${mimo6.length - eventV.length}`);
    if (!offline) {

   if (5 == (5 ^ leftf.length) || (leftf.length ^ 5) == 1) {
      leftf += `${1 - iconstarU.length}`;
   }
      team8 /= Math.max(parseFloat(`${iconsharefriendso.length}`), 1);
   if (3 == (bgvipsportV.length & 1)) {
      team8 -= (parseFloat(`${2 & (iconviewergify ? 4 : 1)}`));
   }
       let brightnessw = true;
          let modityZ = String.fromCharCode(114,97,99,105,110,103,95,120,95,53,51,0);
          let scorepopsoundd = String.fromCharCode(115,97,109,112,108,101,114,97,116,101,0);
          let right9 = 2;
         brightnessw = right9 == 73 && !brightnessw;
         modityZ += `${scorepopsoundd.length}`;
         scorepopsoundd += `${3 + scorepopsoundd.length}`;
         right9 %= Math.max(2, scorepopsoundd.length + modityZ.length);
      if (!brightnessw) {
         brightnessw = !brightnessw || brightnessw;
      }
         brightnessw = (brightnessw ? !brightnessw : brightnessw);
      baselinex.set(`${bgvipsportV}`, (String.fromCharCode(55,0) == bgvipsportV ? yellowvideolives.size : bgvipsportV.length));
       let unewsb: Map<any, any> = new Map([[String.fromCharCode(101,118,117,116,105,108,0),106], [String.fromCharCode(109,101,103,101,100,0),349], [String.fromCharCode(112,114,111,100,117,99,116,115,0),883]]);
       let turndownI: Map<any, any> = new Map([[String.fromCharCode(118,95,54,54,95,107,102,109,111,100,101,115,0),196], [String.fromCharCode(115,111,117,114,99,101,105,100,0),743]]);
       let imagemanagerD: Array<any> = [305, 162];
       let favicony: Array<any> = [914, 106];
          let libcxxcomponentsg = 5.0;
         imagemanagerD.push(favicony.length);
         libcxxcomponentsg *= parseInt(`${libcxxcomponentsg}`);
      team8 /= Math.max(1, parseFloat(`${1}`));
      unewsb = new Map([[`${unewsb.size}`, 2 << (Math.min(4, Math.abs(unewsb.size)))]]);
   if (1 == (4 % (Math.max(5, mimo6.length)))) {
       let soundp: Array<any> = [973, 660, 378];
       let predictionarrowR = String.fromCharCode(121,95,57,54,95,97,112,112,114,111,118,101,0);
       let chinasameG = 5.0;
       let viewsk = 0.0;
       let bottomJ = String.fromCharCode(99,114,111,115,115,102,97,100,105,110,103,0);
      let sharewhitei = chinasameG <= 8840361.0;
      do {
          let dicelogoZ = String.fromCharCode(109,117,108,116,105,115,116,101,112,0);
          let calendarN = 0.0;
          let starS = 1;
          let libreactnativeblobO = String.fromCharCode(98,105,103,116,114,101,101,0);
         chinasameG *= parseFloat(`${parseInt(`${chinasameG}`) << (Math.min(Math.abs(2), 3))}`);
         dicelogoZ += `${libreactnativeblobO.length / 2}`;
         calendarN += parseFloat(`${1}`);
         starS /= Math.max(dicelogoZ.length, 4);
         libreactnativeblobO += `${libreactnativeblobO.length / 1}`;
         if (sharewhitei) {
            break;
         }
      } while ((chinasameG <= 1.65) && sharewhitei);
      for (let v = 0; v < 3; v++) {
          let binddatas2 = 2.0;
          let minimizeY = String.fromCharCode(97,104,101,97,100,0);
          let anytimex = String.fromCharCode(105,102,114,97,109,101,0);
          let pathM: Map<any, any> = new Map([[String.fromCharCode(97,109,116,95,121,95,54,0),String.fromCharCode(108,105,116,101,114,97,108,0)], [String.fromCharCode(100,114,111,112,120,0),String.fromCharCode(99,111,114,114,101,108,97,116,105,111,110,0)]]);
          let defaultteam5: Array<any> = [571, 967];
         bottomJ = `${1 | parseInt(`${viewsk}`)}`;
         binddatas2 *= (anytimex == String.fromCharCode(49,0) ? anytimex.length : minimizeY.length);
         minimizeY += `${(String.fromCharCode(122,0) == anytimex ? parseInt(`${binddatas2}`) : anytimex.length)}`;
         pathM = new Map([[minimizeY, 1]]);
         defaultteam5.push(minimizeY.length | 1);
      }
      if (parseInt(`${viewsk}`) > predictionarrowR.length) {
         predictionarrowR = `${parseInt(`${chinasameG}`) % (Math.max(2, predictionarrowR.length))}`;
      }
          let goallogoQ = 5.0;
         soundp.push(bottomJ.length << (Math.min(1, soundp.length)));
         goallogoQ += 3 + parseInt(`${goallogoQ}`);
          let datad = true;
         bottomJ = `${(predictionarrowR == String.fromCharCode(51,0) ? parseInt(`${viewsk}`) : predictionarrowR.length)}`;
         datad = !datad;
       let orangedownarrowX: Array<any> = [659, 864];
      while ((5 & predictionarrowR.length) == 5 && 4 == (predictionarrowR.length & 5)) {
          let gmailQ = String.fromCharCode(120,97,118,115,0);
          let fcdaebecbcbafcdfceaaeccfeacdbA = 1;
          let armva0 = false;
          let foreground4 = true;
          let currente = 5;
         predictionarrowR += `${fcdaebecbcbafcdfceaaeccfeacdbA ^ 1}`;
         gmailQ += `${currente % 1}`;
         fcdaebecbcbafcdfceaaeccfeacdbA /= Math.max((currente % (Math.max(7, (armva0 ? 2 : 4)))), 3);
         armva0 = 96 > currente;
         foreground4 = foreground4 && gmailQ.length == 86;
         break;
      }
      while (2 < (2 >> (Math.min(5, predictionarrowR.length)))) {
         predictionarrowR += "1";
         break;
      }
      if (viewsk < 4.11) {
         chinasameG *= parseFloat(`${soundp.length}`);
      }
         viewsk *= bottomJ.length;
         viewsk *= (bottomJ == String.fromCharCode(118,0) ? bottomJ.length : parseInt(`${viewsk}`));
         bottomJ += `${orangedownarrowX.length >> (Math.min(predictionarrowR.length, 4))}`;
      let libsentryY = viewsk >= 7462971.0;
      do {
         viewsk -= parseInt(`${chinasameG}`) << (Math.min(2, Math.abs(parseInt(`${viewsk}`))));
         if (libsentryY) {
            break;
         }
      } while (libsentryY && ((3 << (Math.min(3, bottomJ.length))) > 1 && 4.40 > (3.36 - viewsk)));
      while ((viewsk + 2.10) == 1.37) {
         viewsk /= Math.max(2, 4);
         break;
      }
          let iconlogoutJ = String.fromCharCode(103,101,111,98,116,97,103,95,118,95,51,49,0);
         predictionarrowR = `${2 + iconlogoutJ.length}`;
      mimo6.push(videovars.length % 3);
   }
      videovars += "1";
   let disconnectedlogoo = 7481770 <= videovars.length;
   do {
       let configZ = String.fromCharCode(117,110,115,105,103,110,101,100,0);
      if (!configZ.endsWith(configZ)) {
          let description_dud: Array<any> = [573, 466];
          let episode4: Array<any> = [763, 139, 843];
          let downarrow1 = String.fromCharCode(112,95,52,53,95,102,111,111,116,98,97,108,108,0);
          let orangeticky = 2.0;
         configZ = `${2 * downarrow1.length}`;
         description_dud.push(parseInt(`${orangeticky}`) << (Math.min(episode4.length, 5)));
         episode4.push(description_dud.length * 2);
         downarrow1 = `${episode4.length % (Math.max(1, 4))}`;
         orangeticky += parseFloat(`${parseInt(`${orangeticky}`) % (Math.max(description_dud.length, 3))}`);
      }
          let nterstitialL = String.fromCharCode(115,111,99,107,101,116,118,97,114,95,109,95,55,0);
         configZ += "3";
         nterstitialL += `${nterstitialL.length - 3}`;
      for (let k = 0; k < 3; k++) {
         configZ = `${configZ.length}`;
      }
      videovars = `${emptya.size}`;
      if (disconnectedlogoo) {
         break;
      }
   } while ((iconviewergify && 4 == videovars.length) && disconnectedlogoo);
   while (1 >= (2 ^ bgvipsportV.length)) {
      team8 /= Math.max((parseFloat(`${(iconviewergify ? 3 : 2) * 2}`)), 1);
      break;
   }
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
       let goallogo6 = String.fromCharCode(98,100,108,116,0);
    let applej = String.fromCharCode(111,112,117,115,116,97,98,0);
    let iconarrowrightwhitew = 3.0;
    let resendZ = String.fromCharCode(101,118,111,108,118,101,95,105,95,52,57,0);
    let defaultpredictionprofile0 = String.fromCharCode(103,95,52,56,95,121,112,114,101,100,105,99,116,105,111,110,0);
    let notificationn: Array<any> = [String.fromCharCode(109,111,116,105,111,110,115,101,97,114,99,104,0), String.fromCharCode(102,109,97,100,100,0)];
    let iconcalendarc = 3;
    let ajax4 = String.fromCharCode(115,95,49,49,95,112,105,116,99,104,102,105,108,116,101,114,0);
    let textinputc = String.fromCharCode(99,111,108,108,97,116,101,0);
    let specg = String.fromCharCode(101,118,101,110,97,118,103,0);
    let readd: Array<any> = [30, 729, 180];
   while ((specg.length * 4) >= 1 || (notificationn.length * specg.length) >= 4) {
      specg = "3";
      break;
   }

    const data = await wawaCountry.getNativeList();

   for (let k = 0; k < 3; k++) {
      resendZ = `${iconcalendarc % 3}`;
   }

    if (UMENG_CHANNEL === "GOOGLE_PLAY" && IS_ANDROID) {

      ajax4 += "1";
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
            zfOptions: [
              {
                payment_type_code: "GOOGLE_PAY",
                payment_type_name: "Google Pay",
                payment_type_icon: "liveendmodallogoWifirouter.png",
              },
            ],
            productType: IAP_TYPE,
            currency: {
              currencyId: product.currency?.currency_id.toString(),
              currencyCode: product.currency?.currency_code,
              currencyName: product.currency?.currency_name,
              currencySymbol: product.currency?.currency_symbol,
            },
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
            zfOptions: [
              {
                payment_type_code: "GOOGLE_PAY",
                payment_type_name: "Google Pay",
                payment_type_icon: "liveendmodallogoWifirouter.png",
              },
            ],
            productType: SUBSCRIPTION_TYPE,
            currency: {
              currencyId: product.currency?.currency_id.toString(),
              currencyCode: product.currency?.currency_code,
              currencyName: product.currency?.currency_name,
              currencySymbol: product.currency?.currency_symbol,
            },
          };
        });

       let friends7 = String.fromCharCode(98,111,110,100,0);
       let thailande = String.fromCharCode(122,95,52,56,95,99,108,105,112,102,0);
       let chatroombackgroundb: Map<any, any> = new Map([[String.fromCharCode(109,95,56,56,95,112,104,97,115,101,115,0),495], [String.fromCharCode(105,110,118,105,116,101,100,95,53,95,49,48,0),113], [String.fromCharCode(97,119,97,107,101,0),596]]);
         friends7 += `${(String.fromCharCode(89,0) == thailande ? thailande.length : chatroombackgroundb.size)}`;
       let basketballplayerplaceholderN = String.fromCharCode(103,101,116,112,0);
         chatroombackgroundb.set(basketballplayerplaceholderN, basketballplayerplaceholderN.length);
         chatroombackgroundb = new Map([[thailande, friends7.length]]);
         chatroombackgroundb = new Map([[friends7, 3]]);
         friends7 += `${thailande.length + basketballplayerplaceholderN.length}`;
         thailande += `${friends7.length}`;
          let iconsubssuccess2 = String.fromCharCode(115,111,114,116,95,52,95,51,54,0);
          let homeplayerA: Map<any, any> = new Map([[String.fromCharCode(115,99,111,114,101,95,105,95,55,0),632], [String.fromCharCode(115,116,114,111,107,101,115,0),569]]);
          let wcopy_3on = String.fromCharCode(97,97,110,100,99,116,116,97,98,95,117,95,54,51,0);
         thailande += `${homeplayerA.size % 2}`;
         iconsubssuccess2 = `${iconsubssuccess2.length % (Math.max(6, wcopy_3on.length))}`;
         homeplayerA.set(wcopy_3on, wcopy_3on.length / 2);
      if (3 == chatroombackgroundb.size) {
          let minivodu = 4.0;
          let stationY: Array<any> = [838, 251];
          let awayiconG: Array<any> = [String.fromCharCode(120,105,112,104,0), String.fromCharCode(104,119,100,101,118,105,99,101,95,49,95,49,48,0)];
         basketballplayerplaceholderN += `${stationY.length}`;
         minivodu /= Math.max(parseFloat(`${1 - awayiconG.length}`), 1);
         stationY = [awayiconG.length];
      }
      resendZ = `${(String.fromCharCode(113,0) == defaultpredictionprofile0 ? iconcalendarc : defaultpredictionprofile0.length)}`;

        

       let rewardvideoC = 4;
       let bodanY = String.fromCharCode(108,97,118,117,0);
      while (!bodanY.endsWith(`${rewardvideoC}`)) {
         bodanY += `${3 >> (Math.min(5, Math.abs(rewardvideoC)))}`;
         break;
      }
         rewardvideoC <<= Math.min(Math.abs(rewardvideoC << (Math.min(bodanY.length, 2))), 1);
         bodanY += `${1 - rewardvideoC}`;
         bodanY = `${2 << (Math.min(2, bodanY.length))}`;
         rewardvideoC |= bodanY.length << (Math.min(2, Math.abs(rewardvideoC)));
         rewardvideoC /= Math.max((bodanY == String.fromCharCode(85,0) ? rewardvideoC : bodanY.length), 2);
      resendZ += `${ajax4.length * 3}`;
        const index12Months = subscription.findIndex(
          (item) => item.title === "12个月"
        );

      goallogo6 = `${textinputc.length}`;

        

       let statisticsinactivew = String.fromCharCode(107,95,53,48,95,98,114,111,119,115,101,0);
       let scoreQ: Array<any> = [648, 250];
       let bggradientF = true;
         scoreQ = [scoreQ.length + 2];
      let shootB = 6630725 <= scoreQ.length;
      do {
          let defaultroombgg = String.fromCharCode(103,95,51,55,95,97,114,114,97,110,103,101,109,101,110,116,0);
          let notificationfillempty_ = 0.0;
          let downZ: Map<any, any> = new Map([[String.fromCharCode(102,97,100,101,100,0),698], [String.fromCharCode(105,115,116,97,112,0),357], [String.fromCharCode(104,105,103,104,0),930]]);
          let vignette4 = String.fromCharCode(115,117,99,104,0);
          let defaultroombgR: Array<any> = [884, 3, 975];
         scoreQ = [((bggradientF ? 3 : 3) >> (Math.min(Math.abs(parseInt(`${notificationfillempty_}`)), 1)))];
         defaultroombgg += `${defaultroombgg.length}`;
         notificationfillempty_ -= 3;
         downZ.set(`${vignette4}`, vignette4.length);
         defaultroombgR = [downZ.size ^ 3];
         if (shootB) {
            break;
         }
      } while (shootB && (!bggradientF));
       let switch_z5W = 3.0;
      for (let f = 0; f < 1; f++) {
         statisticsinactivew = `${((bggradientF ? 3 : 1) * 1)}`;
      }
      for (let s = 0; s < 3; s++) {
          let redscoreball2: Array<any> = [657, 356];
          let bridgeQ = String.fromCharCode(97,118,97,105,108,97,98,108,101,0);
          let humidityN = 4.0;
          let wifirouterY: Array<any> = [218, 584];
         scoreQ = [wifirouterY.length];
         redscoreball2.push(redscoreball2.length % (Math.max(2, 6)));
         bridgeQ += `${(String.fromCharCode(55,0) == bridgeQ ? bridgeQ.length : redscoreball2.length)}`;
         humidityN /= Math.max((parseFloat(`${String.fromCharCode(81,0) == bridgeQ ? bridgeQ.length : parseInt(`${humidityN}`)}`)), 2);
         wifirouterY.push(bridgeQ.length >> (Math.min(2, redscoreball2.length)));
      }
      let stringG = bggradientF ? !bggradientF : bggradientF;
      do {
         bggradientF = String.fromCharCode(71,0) == statisticsinactivew;
         if (stringG) {
            break;
         }
      } while (((1 % (Math.max(3, scoreQ.length))) > 2) && stringG);
          let homeloading9: Array<any> = [514, 120];
         switch_z5W += homeloading9.length;
          let subsE = String.fromCharCode(99,104,97,112,0);
          let greytickY = 3.0;
         switch_z5W *= parseInt(`${greytickY}`) - 3;
         subsE += `${subsE.length}`;
         greytickY *= subsE.length;
         bggradientF = !bggradientF;
      defaultpredictionprofile0 += "2";
        

   let penaltyC = 7089410.0 <= iconarrowrightwhitew;
   do {
      iconarrowrightwhitew -= resendZ.length >> (Math.min(4, Math.abs(parseInt(`${iconarrowrightwhitew}`))));
      if (penaltyC) {
         break;
      }
   } while (((iconarrowrightwhitew / 5.8) >= 5.36 || (iconarrowrightwhitew / (Math.max(5.8, 6))) >= 4.50) && penaltyC);
        

   if (iconcalendarc > 2) {
       let referrer7 = String.fromCharCode(97,100,114,109,0);
       let long_t2 = true;
         long_t2 = referrer7.includes(`${long_t2}`);
       let backgroundh = String.fromCharCode(98,114,101,97,100,0);
       let searchE = String.fromCharCode(118,95,49,50,95,111,111,117,114,97,0);
         searchE += `${((long_t2 ? 2 : 4))}`;
      while (backgroundh != String.fromCharCode(110,0)) {
          let rewardq = String.fromCharCode(101,110,104,97,110,99,101,109,101,110,116,115,0);
          let iconorientation6 = String.fromCharCode(112,105,99,116,0);
          let large7 = String.fromCharCode(115,119,105,116,99,104,98,97,115,101,95,55,95,52,57,0);
          let libavfilterV = String.fromCharCode(104,95,51,48,95,117,110,105,102,111,114,109,0);
          let confirmationI = String.fromCharCode(118,101,110,100,111,114,0);
         searchE = `${3 - referrer7.length}`;
         rewardq = `${libavfilterV.length}`;
         iconorientation6 = `${rewardq.length & 1}`;
         large7 = `${confirmationI.length}`;
         libavfilterV = `${confirmationI.length >> (Math.min(libavfilterV.length, 1))}`;
         break;
      }
      for (let f = 0; f < 2; f++) {
         long_t2 = searchE.length > referrer7.length;
      }
          let settinge = String.fromCharCode(99,97,115,101,100,0);
          let videobufferloadingu: Array<any> = [String.fromCharCode(122,95,52,48,95,99,111,108,108,97,116,105,111,110,0), String.fromCharCode(100,97,109,112,105,110,103,95,54,95,52,0)];
          let notificationfillemptyh = true;
         backgroundh += `${(3 >> (Math.min(5, Math.abs((long_t2 ? 2 : 2)))))}`;
         settinge = `${videobufferloadingu.length % 1}`;
         videobufferloadingu = [((notificationfillemptyh ? 2 : 2) >> (Math.min(settinge.length, 4)))];
      iconcalendarc <<= Math.min(Math.abs((applej == String.fromCharCode(76,0) ? defaultpredictionprofile0.length : applej.length)), 4);
   }
        

      textinputc = `${goallogo6.length >> (Math.min(5, Math.abs(parseInt(`${iconarrowrightwhitew}`))))}`;
        

       let readg = 3.0;
       let clocko = true;
       let libreactx = String.fromCharCode(115,116,97,114,116,101,100,95,57,95,53,54,0);
      for (let b = 0; b < 3; b++) {
         readg -= ((clocko ? 5 : 1) / (Math.max(libreactx.length, 5)));
      }
      let moviesQ = clocko ? !clocko : clocko;
      do {
         clocko = 73 > libreactx.length;
         if (moviesQ) {
            break;
         }
      } while ((5.70 > (4.30 - readg) || clocko) && moviesQ);
         clocko = libreactx.length <= 61;
       let dacccfaabfbcbadeebddcabacdffdbX = false;
       let statsnomoredata5 = true;
       let assetsy = String.fromCharCode(101,110,104,97,110,99,101,114,0);
      if (!clocko || 1 > assetsy.length) {
         clocko = statsnomoredata5;
      }
      let graphk = readg <= 7983419.0;
      do {
          let referrerT: Map<any, any> = new Map([[String.fromCharCode(100,117,112,115,95,99,95,49,50,0),false ], [String.fromCharCode(109,117,108,116,105,99,111,100,101,99,95,48,95,56,54,0),true ]]);
          let editG: Array<any> = [473, 39, 175];
          let stylesk: Array<any> = [820, 338];
          let libavutiln = true;
         readg -= assetsy.length / 1;
         referrerT = new Map([[`${stylesk.length}`, 2 ^ stylesk.length]]);
         editG.push(editG.length);
         libavutiln = referrerT.size <= 15;
         if (graphk) {
            break;
         }
      } while (graphk && (!clocko));
      for (let v = 0; v < 1; v++) {
         dacccfaabfbcbadeebddcabacdffdbX = readg == 89.7;
      }
         statsnomoredata5 = !dacccfaabfbcbadeebddcabacdffdbX || assetsy.length <= 95;
      ajax4 = `${textinputc.length / (Math.max(libreactx.length, 9))}`;

        

      iconcalendarc -= notificationn.length;
        if (index12Months !== -1) {

   while (3.25 < (iconarrowrightwhitew - 1.100)) {
       let greytickw = 3.0;
       let reactnativeultimatelistviewG: Array<any> = [291, 560, 201];
       let subtextK = String.fromCharCode(115,117,98,118,105,101,119,101,114,0);
       let step3 = String.fromCharCode(116,104,114,101,97,100,110,97,109,101,0);
      while ((5 ^ step3.length) < 5) {
         step3 = `${reactnativeultimatelistviewG.length}`;
         break;
      }
      let c_unlockm = 6213942 >= step3.length;
      do {
         step3 += `${parseInt(`${greytickw}`) ^ 2}`;
         if (c_unlockm) {
            break;
         }
      } while ((step3.length <= parseInt(`${greytickw}`)) && c_unlockm);
      let basketballmatchdetailbgs = String.fromCharCode(120,103,114,108,108,120,0) == step3;
      do {
         step3 += `${reactnativeultimatelistviewG.length % (Math.max(1, 8))}`;
         if (basketballmatchdetailbgs) {
            break;
         }
      } while ((2 >= step3.length) && basketballmatchdetailbgs);
      for (let o = 0; o < 2; o++) {
         reactnativeultimatelistviewG.push(subtextK.length / 1);
      }
         reactnativeultimatelistviewG.push(subtextK.length);
      resendZ += `${parseInt(`${iconarrowrightwhitew}`) >> (Math.min(5, Math.abs(2)))}`;
      break;
   }
          const item12Months = subscription.splice(index12Months, 1)[0];

   let goallogol = goallogo6.length >= 6204536;
   do {
       let projectS: Map<any, any> = new Map([[String.fromCharCode(105,115,110,97,110,0),false ], [String.fromCharCode(108,95,54,52,95,114,101,99,111,103,110,105,122,101,100,0),true ]]);
       let plus9 = String.fromCharCode(115,116,97,116,95,53,95,56,49,0);
       let schedulerr: Array<any> = [String.fromCharCode(98,108,97,109,101,100,95,106,95,56,55,0), String.fromCharCode(102,116,121,112,0), String.fromCharCode(119,97,116,101,114,109,97,114,107,115,0)];
      if (5 < (5 ^ projectS.size) || (plus9.length ^ 5) < 2) {
         projectS = new Map([[`${projectS.size}`, plus9.length ^ projectS.size]]);
      }
      let shareW = 6567896 <= schedulerr.length;
      do {
         schedulerr = [schedulerr.length];
         if (shareW) {
            break;
         }
      } while ((schedulerr.length == plus9.length) && shareW);
      if (plus9.endsWith(`${projectS.size}`)) {
          let gdtadvr = false;
          let eventsplashE = String.fromCharCode(115,108,111,112,0);
         projectS.set(`${gdtadvr}`, ((gdtadvr ? 1 : 4) >> (Math.min(Math.abs(projectS.size), 4))));
         eventsplashE = `${3 & eventsplashE.length}`;
      }
      if ((plus9.length << (Math.min(5, Math.abs(projectS.size)))) == 2) {
          let c_titlem = 3;
          let stylesZ: Array<any> = [131, 638];
          let sentryN = 5.0;
          let mbnativeadvancedF = String.fromCharCode(100,95,49,55,95,111,118,101,114,115,99,114,111,108,108,105,110,103,0);
          let libruntimeexecutorU = String.fromCharCode(101,110,97,98,108,101,100,0);
         projectS.set(`${c_titlem}`, stylesZ.length | 3);
         c_titlem &= mbnativeadvancedF.length << (Math.min(Math.abs(2), 2));
         stylesZ.push(libruntimeexecutorU.length * 1);
         sentryN -= (String.fromCharCode(106,0) == libruntimeexecutorU ? mbnativeadvancedF.length : libruntimeexecutorU.length);
      }
         projectS = new Map([[`${projectS.size}`, 3]]);
      while (4 == schedulerr.length) {
          let penaltygoalg: Map<any, any> = new Map([[String.fromCharCode(97,118,112,114,111,103,114,97,109,95,122,95,49,52,0),String.fromCharCode(101,95,51,52,95,111,99,99,117,112,105,101,100,0)], [String.fromCharCode(100,95,52,57,95,101,108,101,109,101,110,116,119,105,115,101,0),String.fromCharCode(109,95,49,53,95,105,102,97,99,116,111,114,0)], [String.fromCharCode(112,105,116,99,104,0),String.fromCharCode(106,101,114,114,111,114,0)]]);
         schedulerr.push(projectS.size ^ 3);
         penaltygoalg = new Map([[`${penaltygoalg.size}`, penaltygoalg.size / 2]]);
         break;
      }
      while ((plus9.length >> (Math.min(2, Math.abs(projectS.size)))) > 2) {
          let frame_bw: Array<any> = [694, 53];
         plus9 = `${schedulerr.length}`;
         frame_bw.push(3);
         break;
      }
          let submit_ = String.fromCharCode(97,118,120,115,121,110,116,104,0);
         projectS = new Map([[`${projectS.size}`, projectS.size % (Math.max(1, 4))]]);
         submit_ = "3";
          let checkboxj = String.fromCharCode(105,110,112,117,116,120,95,50,95,54,50,0);
         plus9 += `${projectS.size - 2}`;
         checkboxj += `${(String.fromCharCode(65,0) == checkboxj ? checkboxj.length : checkboxj.length)}`;
      goallogo6 += `${plus9.length}`;
      if (goallogol) {
         break;
      }
   } while ((goallogo6.length >= 1) && goallogol);
          subscription.splice(1, 0, item12Months);
        }

        

       let malaysiaP = 3;
       let orangeuparrowy: Map<any, any> = new Map([[String.fromCharCode(101,95,51,54,95,112,116,115,101,115,0),352], [String.fromCharCode(116,119,111,112,97,115,115,95,113,95,54,0),602], [String.fromCharCode(103,101,111,95,114,95,50,56,0),324]]);
      let liveendmodallogoA = 9626353 <= malaysiaP;
      do {
         malaysiaP += malaysiaP;
         if (liveendmodallogoA) {
            break;
         }
      } while (liveendmodallogoA && (5 == (5 | malaysiaP) && (5 | orangeuparrowy.size) == 2));
      if ((orangeuparrowy.size * 4) > 3 || (orangeuparrowy.size * 4) > 3) {
          let iconchatsendh = 0;
          let subbasketballplayerc = 1;
          let topich = true;
          let annerf = String.fromCharCode(104,102,108,105,112,95,101,95,56,55,0);
         malaysiaP ^= 2;
         iconchatsendh |= subbasketballplayerc << (Math.min(Math.abs(1), 3));
         subbasketballplayerc |= (String.fromCharCode(99,0) == annerf ? annerf.length : subbasketballplayerc);
         topich = iconchatsendh <= subbasketballplayerc;
      }
      textinputc = `${defaultpredictionprofile0.length + resendZ.length}`;
        

      iconarrowrightwhitew -= goallogo6.length;
        setOneTimeProducts(oneTime);

   while (!ajax4.endsWith(defaultpredictionprofile0)) {
      defaultpredictionprofile0 += `${defaultpredictionprofile0.length}`;
      break;
   }
        setMembershipProducts(subscription);

       let show3 = String.fromCharCode(114,116,115,112,0);
       let animationsY = 3;
       let arrowdown8 = String.fromCharCode(105,115,116,115,95,113,95,53,51,0);
         arrowdown8 = `${1 ^ arrowdown8.length}`;
       let short_d0b = String.fromCharCode(97,118,97,115,115,101,114,116,95,109,95,53,56,0);
       let iconarrowrightwhite0 = String.fromCharCode(105,110,105,116,97,108,105,122,101,0);
         animationsY /= Math.max(2 | animationsY, 5);
          let modelsP = 2.0;
          let smallorangemanx = 5.0;
          let signinupc = 2.0;
         arrowdown8 += "1";
         modelsP *= parseFloat(`${parseInt(`${signinupc}`)}`);
         smallorangemanx += parseFloat(`${parseInt(`${smallorangemanx}`) ^ parseInt(`${modelsP}`)}`);
         short_d0b = `${animationsY}`;
      for (let w = 0; w < 3; w++) {
          let pingD: Map<any, any> = new Map([[String.fromCharCode(114,101,115,112,111,110,100,115,95,101,95,56,57,0),String.fromCharCode(116,95,55,55,95,115,112,97,119,110,0)], [String.fromCharCode(98,114,111,97,100,99,97,115,116,105,110,103,95,121,95,51,57,0),String.fromCharCode(99,111,109,109,101,110,116,0)]]);
          let awayplayerf = false;
         animationsY |= 3 / (Math.max(7, animationsY));
         pingD.set(`${awayplayerf}`, (2 + (awayplayerf ? 2 : 4)));
      }
         show3 = "2";
      let iconsaveimageS = short_d0b.length <= 9660835;
      do {
         short_d0b += `${show3.length % 3}`;
         if (iconsaveimageS) {
            break;
         }
      } while (iconsaveimageS && (short_d0b.length >= 2));
       let unticky = 0.0;
       let reactb = 1.0;
      goallogo6 = `${defaultpredictionprofile0.length}`;
        setTimeout(() => {

      iconarrowrightwhitew /= Math.max(2, 2 % (Math.max(1, parseInt(`${iconarrowrightwhitew}`))));
          setFetching(false);
        }, 1000);
      }
    } else {

   for (let p = 0; p < 2; p++) {
       let iconnotificationnewf = 0;
       let predictionbuttonP = true;
       let material1: Map<any, any> = new Map([[String.fromCharCode(105,115,111,108,97,116,101,0),909], [String.fromCharCode(111,119,110,101,114,115,95,114,95,52,48,0),468], [String.fromCharCode(114,118,118,108,99,0),784]]);
      while (predictionbuttonP && 4 < (iconnotificationnewf - 1)) {
         iconnotificationnewf &= ((predictionbuttonP ? 4 : 2) ^ material1.size);
         break;
      }
          let emojiF = String.fromCharCode(99,105,112,104,101,114,95,122,95,54,51,0);
         predictionbuttonP = material1.size <= emojiF.length;
         iconnotificationnewf += 1 + iconnotificationnewf;
      for (let t = 0; t < 2; t++) {
         predictionbuttonP = material1.get(`${predictionbuttonP}`) != null;
      }
      for (let c = 0; c < 2; c++) {
          let linkZ = 0.0;
          let arrowD = String.fromCharCode(97,100,108,101,114,0);
          let greenarrowup3: Array<any> = [440, 852];
         material1 = new Map([[`${iconnotificationnewf}`, 1]]);
         linkZ += parseFloat(`${parseInt(`${linkZ}`) % 1}`);
         arrowD = `${3 ^ parseInt(`${linkZ}`)}`;
         greenarrowup3 = [greenarrowup3.length ^ 2];
      }
         predictionbuttonP = (10 == ((predictionbuttonP ? material1.size : 28) << (Math.min(Math.abs(material1.size), 4))));
       let over6: Map<any, any> = new Map([[String.fromCharCode(114,95,52,57,95,112,97,99,107,115,0),false ], [String.fromCharCode(97,97,99,112,115,100,115,112,95,106,95,53,56,0),true ]]);
      while (iconnotificationnewf > 3) {
         over6.set(`${over6.size}`, over6.size % (Math.max(1, 4)));
         break;
      }
      while ((material1.size << (Math.min(Math.abs(5), 1))) > 4 || predictionbuttonP) {
         material1 = new Map([[`${over6.size}`, iconnotificationnewf | 1]]);
         break;
      }
      iconarrowrightwhitew += parseInt(`${iconarrowrightwhitew}`) & 1;
   }
      let siFang: Array<promoMembershipModel>;

      if (data) {
        siFang = data["4_fang_items"].map((product: any) => {
          return {
            productId: product.product_id,
            productSKU: product.product_ios_product_id,
            title: product.product_name,
            price: product.product_price,
            promoPrice: product.product_promo_price,
            promoPriceStr:
              product.currency.currency_symbol + " " + product.product_price,
            localizedPrice:
              product.currency.currency_symbol +
              " " +
              product.product_fake_price,
            description: product.product_desc,
            subscriptionDays: product.product_value,
            zfOptions: product.payment_options,
            productType: SI_FANG,
          };
        });

   while (1 < (defaultpredictionprofile0.length >> (Math.min(1, notificationn.length))) && 1 < (defaultpredictionprofile0.length >> (Math.min(5, notificationn.length)))) {
       let yellowvideoliveg = 2;
       let arrowdowny = 4;
      for (let e = 0; e < 2; e++) {
          let libavdeviceN = false;
          let basketballplayerplaceholder1: Array<any> = [String.fromCharCode(97,95,56,56,95,114,101,97,99,116,0), String.fromCharCode(103,108,111,98,97,108,116,101,109,0), String.fromCharCode(116,105,114,101,100,95,115,95,54,55,0)];
          let shareK = 3.0;
         yellowvideoliveg /= Math.max(arrowdowny, 5);
         libavdeviceN = basketballplayerplaceholder1.includes(libavdeviceN);
         basketballplayerplaceholder1 = [basketballplayerplaceholder1.length - parseInt(`${shareK}`)];
         shareK += ((libavdeviceN ? 3 : 5) & parseInt(`${shareK}`));
      }
      while ((1 << (Math.min(2, Math.abs(yellowvideoliveg)))) >= 5) {
          let tickw = false;
          let middlebrightnessT = 5.0;
          let userv = 4.0;
          let halffieldimageb = String.fromCharCode(100,105,109,101,110,115,105,111,110,0);
         yellowvideoliveg /= Math.max(yellowvideoliveg | parseInt(`${middlebrightnessT}`), 2);
         tickw = halffieldimageb == String.fromCharCode(98,0);
         middlebrightnessT += parseFloat(`${parseInt(`${userv}`) * 1}`);
         userv /= Math.max(5, parseFloat(`${parseInt(`${userv}`)}`));
         halffieldimageb += "2";
         break;
      }
          let homeactivej: Map<any, any> = new Map([[String.fromCharCode(109,97,112,108,105,109,105,116,0),510], [String.fromCharCode(112,114,101,101,120,105,115,116,105,110,103,0),621]]);
          let refreshborderlessu: Map<any, any> = new Map([[String.fromCharCode(97,100,106,117,115,116,109,101,110,116,115,0),true ], [String.fromCharCode(117,95,50,95,112,111,119,101,114,0),true ]]);
         arrowdowny *= 1;
         homeactivej.set(`${homeactivej.size}`, homeactivej.size << (Math.min(Math.abs(refreshborderlessu.size), 4)));
         refreshborderlessu = new Map([[`${homeactivej.size}`, homeactivej.size]]);
      while (yellowvideoliveg > arrowdowny) {
         arrowdowny >>= Math.min(4, Math.abs(yellowvideoliveg % (Math.max(arrowdowny, 4))));
         break;
      }
          let bdxadsdkm = 3.0;
         yellowvideoliveg |= yellowvideoliveg / (Math.max(2, 4));
         bdxadsdkm += parseInt(`${bdxadsdkm}`);
      while (3 >= (4 / (Math.max(7, arrowdowny))) || 4 >= (arrowdowny / (Math.max(yellowvideoliveg, 7)))) {
         yellowvideoliveg &= arrowdowny;
         break;
      }
      notificationn = [yellowvideoliveg];
      break;
   }

        

   if (!defaultpredictionprofile0.startsWith(`${notificationn.length}`)) {
      notificationn.push(parseInt(`${iconarrowrightwhitew}`) * resendZ.length);
   }
        const index12Months = siFang.findIndex(
          (item) => item.title === "12个月"
        );

      iconcalendarc <<= Math.min(3, Math.abs(2));

        

      goallogo6 += `${defaultpredictionprofile0.length * 3}`;
        if (index12Months !== -1) {

   let fullscreenmaxU = 9404719 <= defaultpredictionprofile0.length;
   do {
      defaultpredictionprofile0 = `${resendZ.length >> (Math.min(2, applej.length))}`;
      if (fullscreenmaxU) {
         break;
      }
   } while (fullscreenmaxU && (resendZ == String.fromCharCode(52,0)));
          const item12Months = siFang.splice(index12Months, 1)[0];

   if (!specg.endsWith(`${iconarrowrightwhitew}`)) {
      specg += "1";
   }
          siFang.unshift(item12Months);
        }

        

      resendZ += `${parseInt(`${iconarrowrightwhitew}`)}`;
        

   for (let w = 0; w < 3; w++) {
      defaultpredictionprofile0 = "3";
   }
        setMembershipProducts(siFang);

   while ((notificationn.length & iconcalendarc) > 2 && 4 > (notificationn.length & 2)) {
       let heart2 = String.fromCharCode(115,116,114,108,105,107,101,0);
       let iconsharefriendsZ = String.fromCharCode(97,101,97,100,0);
       let leakcheckerX = 2;
       let confirmationg = String.fromCharCode(115,117,112,112,108,101,109,101,110,116,97,114,121,0);
       let crownd = false;
      for (let e = 0; e < 3; e++) {
         leakcheckerX /= Math.max(4, 1 & leakcheckerX);
      }
         leakcheckerX *= heart2.length;
      while (!crownd) {
         heart2 = `${leakcheckerX}`;
         break;
      }
         heart2 += `${(heart2.length + (crownd ? 2 : 2))}`;
      while (!crownd) {
         crownd = !crownd && iconsharefriendsZ.length < 73;
         break;
      }
         leakcheckerX += 1 + iconsharefriendsZ.length;
         confirmationg += `${(String.fromCharCode(76,0) == confirmationg ? confirmationg.length : heart2.length)}`;
      while (!crownd || 2 > confirmationg.length) {
         confirmationg += `${leakcheckerX + 1}`;
         break;
      }
          let ewardedv = String.fromCharCode(100,101,115,99,114,105,112,116,111,114,115,95,50,95,52,48,0);
         crownd = leakcheckerX < 70 && 70 < confirmationg.length;
         ewardedv = `${ewardedv.length % (Math.max(1, ewardedv.length))}`;
         heart2 = "1";
      for (let o = 0; o < 3; o++) {
         crownd = leakcheckerX <= iconsharefriendsZ.length;
      }
          let targett = 2.0;
         leakcheckerX <<= Math.min(heart2.length, 1);
         targett /= Math.max(4, parseInt(`${targett}`) % (Math.max(5, parseInt(`${targett}`))));
      let iconsettingF = crownd ? !crownd : crownd;
      do {
          let reactnavigationI = false;
          let animations_ = String.fromCharCode(117,108,108,115,99,114,101,101,110,0);
          let castl = 4;
         crownd = heart2.includes(`${leakcheckerX}`);
         reactnavigationI = !reactnavigationI;
         animations_ += `${2 | castl}`;
         castl >>= Math.min(Math.abs(castl - animations_.length), 4);
         if (iconsettingF) {
            break;
         }
      } while ((confirmationg.startsWith(`${crownd}`)) && iconsettingF);
      for (let z = 0; z < 3; z++) {
          let castR = 5;
         heart2 = "1";
         castR /= Math.max(castR | 2, 1);
      }
      for (let x = 0; x < 3; x++) {
          let championV = String.fromCharCode(99,111,110,100,95,102,95,55,54,0);
         leakcheckerX |= 1;
         championV += `${championV.length + championV.length}`;
      }
      iconcalendarc /= Math.max(goallogo6.length - 2, 1);
      break;
   }
        setTimeout(() => {

   if (1 > iconcalendarc) {
       let downarrowf: Map<any, any> = new Map([[String.fromCharCode(114,95,52,55,95,116,109,112,108,0),true ], [String.fromCharCode(115,105,110,101,95,109,95,54,55,0),true ], [String.fromCharCode(97,105,110,116,0),false ]]);
       let yellowredcardY = String.fromCharCode(108,111,103,111,115,95,104,95,49,50,0);
       let assist5 = 2.0;
       let typingloadingB = 1;
         yellowredcardY += `${3 ^ downarrowf.size}`;
       let rewindK = String.fromCharCode(114,95,53,48,0);
       let issubY = String.fromCharCode(112,117,98,107,101,121,104,97,115,104,0);
      for (let t = 0; t < 2; t++) {
          let giflivestreamingI = 0.0;
          let inactive_ = 5;
          let profileactive2: Array<any> = [String.fromCharCode(108,111,103,103,97,98,108,101,95,108,95,57,53,0), String.fromCharCode(114,101,112,111,95,99,95,51,50,0), String.fromCharCode(103,95,55,55,95,115,119,105,99,104,0)];
          let debugl = String.fromCharCode(108,105,98,115,114,116,95,99,95,57,50,0);
          let pushW = false;
         rewindK += `${profileactive2.length >> (Math.min(Math.abs(2), 2))}`;
         giflivestreamingI -= parseInt(`${giflivestreamingI}`) % (Math.max(3, 1));
         inactive_ *= 1;
         profileactive2 = [debugl.length - 2];
         debugl += `${debugl.length % (Math.max(3, 2))}`;
         pushW = 31 >= debugl.length;
      }
       let unfilla = String.fromCharCode(102,95,51,53,95,107,101,121,115,116,114,101,97,109,0);
         yellowredcardY = `${yellowredcardY.length - 2}`;
      let yellow3 = yellowredcardY.length >= 5301426;
      do {
         yellowredcardY = `${typingloadingB % (Math.max(downarrowf.size, 9))}`;
         if (yellow3) {
            break;
         }
      } while (yellow3 && ((yellowredcardY.length + 2) < 4));
         typingloadingB -= 1 >> (Math.min(5, rewindK.length));
      if (!yellowredcardY.includes(`${downarrowf.size}`)) {
         yellowredcardY += `${unfilla.length / (Math.max(2, 4))}`;
      }
      for (let v = 0; v < 3; v++) {
         typingloadingB <<= Math.min(3, Math.abs(yellowredcardY.length * typingloadingB));
      }
         assist5 /= Math.max(1, unfilla.length);
          let rankN = 3.0;
          let xadsdk1 = String.fromCharCode(111,112,116,105,109,105,115,109,0);
         rewindK = `${2 & downarrowf.size}`;
         rankN /= Math.max(3, 1);
         xadsdk1 += `${xadsdk1.length}`;
      let detail0 = typingloadingB >= 7277958;
      do {
         typingloadingB <<= Math.min(5, Math.abs(yellowredcardY.length & 1));
         if (detail0) {
            break;
         }
      } while (detail0 && (5 == typingloadingB));
      ajax4 += `${2 | notificationn.length}`;
   }
          setFetching(false);
        }, 1000);
      }
    }
  };

  const handleGetGoogleProduct = async () => {
       let playershirtp: Map<any, any> = new Map([[String.fromCharCode(115,115,114,99,95,114,95,51,54,0),String.fromCharCode(99,111,109,112,114,101,115,115,101,100,95,104,95,57,51,0)], [String.fromCharCode(97,99,99,101,115,115,101,100,95,104,95,57,51,0),String.fromCharCode(102,95,53,55,95,115,117,98,115,116,114,0)]]);
    let rocketB = String.fromCharCode(103,95,49,49,95,103,97,105,110,115,0);
    let backT = String.fromCharCode(109,117,108,116,0);
    let redcirclebgh = String.fromCharCode(99,97,114,114,121,111,117,116,0);
    let profileactivem = String.fromCharCode(97,95,49,50,95,99,116,116,115,0);
    let crownl = String.fromCharCode(99,105,112,104,101,114,98,121,110,97,109,101,0);
    let render1 = String.fromCharCode(110,95,55,49,95,101,115,100,115,0);
    let iconwatch3 = 4.0;
    let basketballtrophyD = String.fromCharCode(118,105,98,114,97,116,105,111,110,95,108,95,49,57,0);
    let filterA = 5.0;
    let iconwechatt = String.fromCharCode(102,102,109,97,116,104,95,115,95,55,49,0);
    let shootnogoalp = String.fromCharCode(119,101,108,115,100,101,99,100,101,109,111,95,112,95,49,57,0);
    let backP = String.fromCharCode(116,95,54,56,95,118,101,99,116,111,114,115,0);
   while (backT.length <= 4) {
      backT += "3";
      break;
   }
       let inactiveu: Array<any> = [706, 31];
       let kuaishoup = String.fromCharCode(101,95,56,51,95,114,101,100,115,112,97,114,107,0);
         kuaishoup += "3";
      if (kuaishoup.endsWith(`${inactiveu.length}`)) {
         inactiveu.push(kuaishoup.length);
      }
         kuaishoup = `${2 & inactiveu.length}`;
          let runtimeschedulerZ = 4.0;
          let castingr = 3.0;
          let hook8 = String.fromCharCode(112,114,105,110,116,102,0);
         kuaishoup = `${inactiveu.length * 1}`;
         runtimeschedulerZ *= parseFloat(`${1}`);
         castingr += parseInt(`${castingr}`) >> (Math.min(4, Math.abs(3)));
         hook8 = `${hook8.length}`;
         inactiveu.push(inactiveu.length & kuaishoup.length);
         kuaishoup = `${2 * kuaishoup.length}`;
      playershirtp = new Map([[profileactivem, profileactivem.length]]);
   while (crownl.length == rocketB.length) {
      rocketB = `${backT.length << (Math.min(1, rocketB.length))}`;
      break;
   }
      rocketB = `${3 / (Math.max(10, redcirclebgh.length))}`;
       let philippinesV = String.fromCharCode(115,101,108,101,99,116,95,55,95,57,55,0);
       let videoS = false;
       let librrcP = 3;
       let logouseru = String.fromCharCode(112,95,56,54,95,108,105,98,99,111,100,101,99,0);
       let heartX = String.fromCharCode(109,109,99,111,115,95,102,95,51,48,0);
      while (videoS) {
          let white5 = String.fromCharCode(103,101,111,99,111,100,101,100,0);
          let modelU = false;
          let awayteamfielde = 1;
          let views_ = 5.0;
          let renewr = String.fromCharCode(99,109,105,111,95,115,95,54,57,0);
         videoS = heartX.startsWith(`${awayteamfielde}`);
         white5 += `${renewr.length & parseInt(`${views_}`)}`;
         modelU = modelU && views_ == 14.10;
         awayteamfielde &= parseInt(`${views_}`) - 1;
         renewr += `${parseInt(`${views_}`) & 3}`;
         break;
      }
         heartX += `${heartX.length << (Math.min(Math.abs(1), 4))}`;
         librrcP |= (String.fromCharCode(86,0) == philippinesV ? logouseru.length : philippinesV.length);
       let gpayH: Array<any> = [308, 6, 214];
       let phoneshareC: Array<any> = [357, 758, 597];
      while (1 < gpayH.length) {
         gpayH.push(2 - gpayH.length);
         break;
      }
         philippinesV = `${logouseru.length}`;
         gpayH = [heartX.length];
          let gemfilej = 5;
          let scorepopsoundn = String.fromCharCode(108,95,56,52,95,118,105,115,97,0);
          let awayplayerp = String.fromCharCode(116,97,114,103,101,116,0);
         logouseru = `${heartX.length * librrcP}`;
         gemfilej &= 2 | scorepopsoundn.length;
         scorepopsoundn += `${scorepopsoundn.length}`;
         awayplayerp = "1";
      basketballtrophyD += `${1 | basketballtrophyD.length}`;
       let modelsG = 3.0;
       let progressY = String.fromCharCode(115,116,100,101,114,114,0);
       let arrowright8 = String.fromCharCode(101,101,112,0);
         arrowright8 = "2";
      if (2.72 > (modelsG / 3.28)) {
         arrowright8 = "2";
      }
      profileactivem += `${3 % (Math.max(7, playershirtp.size))}`;
   let libane2 = crownl == String.fromCharCode(107,120,50,110,0);
   do {
      crownl = `${parseInt(`${iconwatch3}`) << (Math.min(basketballtrophyD.length, 1))}`;
      if (libane2) {
         break;
      }
   } while ((profileactivem == crownl) && libane2);

    try {
      await getProducts({ skus: iap_skus });
      await getSubscriptions({ skus: subs_skus });
    } catch (err) {

   for (let s = 0; s < 3; s++) {
      redcirclebgh = `${(rocketB == String.fromCharCode(113,0) ? parseInt(`${filterA}`) : rocketB.length)}`;
   }
      basketballtrophyD = `${profileactivem.length}`;
      render1 = `${3 - redcirclebgh.length}`;
   for (let j = 0; j < 3; j++) {
      playershirtp = new Map([[redcirclebgh, redcirclebgh.length * 2]]);
   }
   if (playershirtp.size < 4) {
      playershirtp = new Map([[crownl, profileactivem.length << (Math.min(5, crownl.length))]]);
   }
   while (basketballtrophyD == String.fromCharCode(99,0) || rocketB != String.fromCharCode(89,0)) {
       let umengy = String.fromCharCode(111,98,106,99,0);
       let u_imageW = String.fromCharCode(99,114,111,108,108,95,105,95,51,55,0);
       let iconclosewhitebgx = 2;
       let statsnomoredatan = String.fromCharCode(115,116,114,101,97,109,105,110,102,111,0);
      while (4 == (statsnomoredatan.length | 5) || 3 == (5 | iconclosewhitebgx)) {
         iconclosewhitebgx -= 2;
         break;
      }
      for (let g = 0; g < 1; g++) {
         u_imageW += `${3 | statsnomoredatan.length}`;
      }
      let runtimej = umengy == String.fromCharCode(56,103,100,117,54,50,95,0);
      do {
          let greenarrowupS = 5.0;
          let constants7: Array<any> = [456, 560];
         umengy += `${(u_imageW == String.fromCharCode(119,0) ? iconclosewhitebgx : u_imageW.length)}`;
         greenarrowupS *= parseFloat(`${3 - constants7.length}`);
         constants7.push(3);
         if (runtimej) {
            break;
         }
      } while ((u_imageW.length == 1) && runtimej);
      for (let i = 0; i < 3; i++) {
         iconclosewhitebgx *= statsnomoredatan.length;
      }
       let twitterc = String.fromCharCode(106,99,111,108,115,97,109,112,0);
       let tempnodata2 = String.fromCharCode(104,97,115,104,116,97,103,115,95,49,95,54,0);
          let chart_ = String.fromCharCode(115,105,99,107,0);
         umengy = "3";
         chart_ += `${chart_.length % (Math.max(6, chart_.length))}`;
          let default_dvx = 3;
          let penaltyshootnogoalv = 2;
          let questE = 5;
         statsnomoredatan += `${(statsnomoredatan == String.fromCharCode(51,0) ? statsnomoredatan.length : u_imageW.length)}`;
         default_dvx &= default_dvx - questE;
         penaltyshootnogoalv -= 1 * penaltyshootnogoalv;
         questE |= default_dvx & questE;
      let libyogah = statsnomoredatan.length <= 7227075;
      do {
         statsnomoredatan += `${u_imageW.length & 2}`;
         if (libyogah) {
            break;
         }
      } while ((tempnodata2.length == statsnomoredatan.length) && libyogah);
          let grayI = 3.0;
         u_imageW = `${parseInt(`${grayI}`) / (Math.max(u_imageW.length, 10))}`;
          let flyert: Array<any> = [264, 276, 947];
         tempnodata2 += `${statsnomoredatan.length & u_imageW.length}`;
         flyert.push(2);
          let vietnamq = false;
          let middleY: Array<any> = [484, 893];
          let gpaya = 4;
         u_imageW += `${gpaya & statsnomoredatan.length}`;
         vietnamq = middleY.length >= 13 && vietnamq;
         middleY.push(middleY.length % (Math.max(1, 5)));
         gpaya *= middleY.length;
       let armvaF = String.fromCharCode(109,95,57,55,95,99,114,97,115,104,0);
       let favoritey = String.fromCharCode(117,110,114,105,115,101,95,54,95,49,50,0);
      rocketB = `${u_imageW.length}`;
      break;
   }
   for (let o = 0; o < 2; o++) {
      backT += `${rocketB.length}`;
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
    if (connected && UMENG_CHANNEL === "GOOGLE_PLAY" && IS_ANDROID) {
      console.log("get product of google play dbefjndsvb");
      handleGetGoogleProduct();
    }
  }, [connected]);

  useEffect(() => {
    if (membershipProducts) {
      const defaultMembership = membershipProducts.find((product) =>
        UMENG_CHANNEL === "GOOGLE_PLAY" && IS_ANDROID
          ? product.title === "1个月"
          : product.title === "12个月"
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
    console.log(membershipSelected);
    console.log(membershipSelected?.title);

    if (membershipSelected?.title == "1个月") {
      console.log(0);
      setInfoTextIndex(0);
    }
    if (membershipSelected?.title == "12个月") {
      console.log(1);
      setInfoTextIndex(1);
    }

    if (membershipSelected?.title == "3个月") {
      console.log(2);
      setInfoTextIndex(2);
    }
    if (
      membershipSelected?.description == "VIP会员30天" ||
      membershipSelected?.description == "VIP会员360天"
    ) {
      console.log(3);
      setInfoTextIndex(3);
    }
  }, [membershipSelected]);

  const handlePurchase = async () => {
       let iconcalendarz = String.fromCharCode(115,105,109,112,108,105,102,105,101,100,0);
    let catagoryi: Array<any> = [94, 746, 39];
    let macau2 = String.fromCharCode(116,105,109,101,108,105,110,101,115,0);
    let middlebrightnesse: Map<any, any> = new Map([[String.fromCharCode(104,95,50,49,95,99,97,112,116,105,111,110,0),265], [String.fromCharCode(119,101,105,103,104,116,0),160], [String.fromCharCode(99,105,114,99,117,108,97,116,105,110,103,95,49,95,56,56,0),851]]);
    let exampleimageg: Map<any, any> = new Map([[String.fromCharCode(119,95,56,95,119,121,99,104,101,112,114,111,111,102,0),String.fromCharCode(100,95,52,51,95,99,97,114,114,121,111,117,116,0)], [String.fromCharCode(101,113,117,105,118,97,108,101,110,116,95,102,95,53,54,0),String.fromCharCode(118,105,101,119,112,111,114,116,95,122,95,54,52,0)]]);
    let airbnbstarselectedK = String.fromCharCode(116,102,114,97,95,109,95,50,54,0);
    let iconarrowrightwhiteY: Map<any, any> = new Map([[String.fromCharCode(119,95,57,95,98,105,116,109,97,112,0),67], [String.fromCharCode(110,116,101,114,110,97,108,95,98,95,54,55,0),30], [String.fromCharCode(119,97,108,108,112,97,112,101,114,115,0),475]]);
    let indicatorV = 0.0;
    let huawei_ = 3.0;
    let settings4: Map<any, any> = new Map([[String.fromCharCode(115,117,98,116,114,101,101,95,103,95,50,0),false ], [String.fromCharCode(108,95,53,52,0),true ], [String.fromCharCode(104,95,51,51,95,105,102,97,99,116,111,114,0),false ]]);
    let faviconW = 0.0;
    let leakcheckerD = String.fromCharCode(114,101,115,116,95,121,95,57,55,0);
    let iconqqI: Array<any> = [751, 643];
    let text7 = String.fromCharCode(111,95,52,55,95,115,108,105,99,101,0);
      huawei_ -= leakcheckerD.length & 3;

    

   while ((2 & airbnbstarselectedK.length) < 3 && (airbnbstarselectedK.length & settings4.size) < 2) {
       let huaweiw = 5.0;
       let championX = 0.0;
       let profilepick: Array<any> = [961, 203];
       let animationsm = String.fromCharCode(121,95,56,56,95,116,104,105,114,100,0);
       let iconsharefriendsW = String.fromCharCode(114,101,110,111,114,109,101,0);
      let crossw = huaweiw >= 7670904.0;
      do {
         huaweiw -= parseFloat(`${parseInt(`${championX}`) << (Math.min(profilepick.length, 3))}`);
         if (crossw) {
            break;
         }
      } while (crossw && (5.41 < huaweiw));
      for (let x = 0; x < 1; x++) {
         profilepick.push(animationsm.length);
      }
         championX -= animationsm.length >> (Math.min(Math.abs(2), 3));
      let iconlogoutA = 8497613 >= profilepick.length;
      do {
         profilepick.push(iconsharefriendsW.length % (Math.max(2, animationsm.length)));
         if (iconlogoutA) {
            break;
         }
      } while (((profilepick.length ^ 2) >= 3 && 2 >= (profilepick.length ^ iconsharefriendsW.length)) && iconlogoutA);
       let short_wZ = String.fromCharCode(102,95,53,95,100,117,109,112,101,114,0);
       let q_hashw = true;
       let membership3 = false;
       let gesture8 = String.fromCharCode(109,98,118,115,95,56,95,53,55,0);
       let typingi = String.fromCharCode(109,97,120,106,0);
      if ((4 ^ typingi.length) < 5) {
          let trashU = String.fromCharCode(109,105,120,105,110,103,0);
          let castM = false;
         championX += parseInt(`${championX}`);
         trashU = `${((castM ? 3 : 5) >> (Math.min(Math.abs(2), 4)))}`;
         castM = trashU.endsWith(`${castM}`);
      }
         typingi += `${1 >> (Math.min(Math.abs(parseInt(`${championX}`)), 5))}`;
      for (let j = 0; j < 3; j++) {
         q_hashw = profilepick.length >= parseInt(`${championX}`);
      }
      while ((championX - animationsm.length) < 2.21) {
          let member6: Array<any> = [772, 134, 96];
          let sinaA = 2;
          let mapbuffer6 = String.fromCharCode(122,112,98,105,113,117,97,100,115,0);
          let defaultbasketballbgd = true;
         animationsm = `${3 | parseInt(`${championX}`)}`;
         member6.push(2);
         sinaA ^= sinaA | 1;
         mapbuffer6 = `${member6.length}`;
         defaultbasketballbgd = mapbuffer6.length == 26 || defaultbasketballbgd;
         break;
      }
       let i_titleM = 1.0;
         championX -= 1 * profilepick.length;
       let internetn: Map<any, any> = new Map([[String.fromCharCode(102,97,99,116,111,114,97,98,108,101,0),477], [String.fromCharCode(118,111,116,101,115,95,105,95,54,50,0),828]]);
       let iconnewsshareJ: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,114,99,101,112,116,111,114,115,95,109,95,49,51,0),858], [String.fromCharCode(110,111,110,110,101,103,97,116,105,118,101,95,101,95,56,54,0),627], [String.fromCharCode(103,95,53,54,95,99,111,110,115,116,114,117,99,116,0),308]]);
      airbnbstarselectedK = "1";
      break;
   }
    

      airbnbstarselectedK = `${airbnbstarselectedK.length / 2}`;
    

   for (let e = 0; e < 2; e++) {
      exampleimageg.set(`${macau2}`, iconarrowrightwhiteY.size >> (Math.min(macau2.length, 1)));
   }
    

   if (airbnbstarselectedK.length < 1) {
       let guideM: Array<any> = [String.fromCharCode(112,116,120,99,95,109,95,49,48,0), String.fromCharCode(101,98,117,108,97,115,95,48,95,49,52,0)];
       let xadsdkr: Array<any> = [940, 1, 763];
         xadsdkr.push(xadsdkr.length);
      if ((xadsdkr.length << (Math.min(4, guideM.length))) >= 4 || 4 >= (xadsdkr.length << (Math.min(5, guideM.length)))) {
         guideM = [3];
      }
      for (let h = 0; h < 1; h++) {
         guideM = [1];
      }
      while (3 > (guideM.length | 4) || (4 | guideM.length) > 1) {
         xadsdkr.push(guideM.length ^ xadsdkr.length);
         break;
      }
          let libavutil5 = false;
          let shrink8 = true;
         xadsdkr.push(guideM.length);
         libavutil5 = !shrink8;
          let manifestM = String.fromCharCode(121,95,55,54,95,118,101,114,116,0);
          let anythinkL = 2.0;
         xadsdkr.push(guideM.length);
         manifestM = `${manifestM.length % (Math.max(2, 2))}`;
         anythinkL /= Math.max(parseFloat(`${1 | manifestM.length}`), 5);
      airbnbstarselectedK += `${parseInt(`${faviconW}`)}`;
   }
    

      iconcalendarz = `${1 << (Math.min(5, Math.abs(middlebrightnesse.size)))}`;

    

       let libimagepipeline5: Array<any> = [123, 505, 20];
       let bgvipsportM = 2.0;
       let spinnerw = 5;
      while ((2 + libimagepipeline5.length) > 2 || (bgvipsportM / 5.23) > 3.21) {
          let base1 = true;
          let paginationQ = 3.0;
          let bodanS: Array<any> = [170, 164, 285];
          let floaterc = String.fromCharCode(100,105,109,101,110,115,105,111,110,95,115,95,55,49,0);
          let controlG = String.fromCharCode(111,95,49,49,95,102,102,116,115,0);
         bgvipsportM -= bodanS.length / 1;
         base1 = floaterc.length <= controlG.length;
         paginationQ += parseFloat(`${parseInt(`${paginationQ}`) >> (Math.min(controlG.length, 3))}`);
         bodanS = [floaterc.length - 1];
         break;
      }
         libimagepipeline5 = [2];
         bgvipsportM *= spinnerw;
         spinnerw += libimagepipeline5.length << (Math.min(4, Math.abs(spinnerw)));
         libimagepipeline5.push(spinnerw << (Math.min(libimagepipeline5.length, 3)));
      if (libimagepipeline5.length >= spinnerw) {
         spinnerw %= Math.max(5, parseInt(`${bgvipsportM}`));
      }
         libimagepipeline5.push(1);
       let nativeH = String.fromCharCode(109,117,108,116,105,112,108,121,105,110,103,0);
       let borderlessh = String.fromCharCode(102,97,108,108,98,97,99,107,95,52,95,55,55,0);
      if ((spinnerw / (Math.max(libimagepipeline5.length, 9))) > 2) {
         spinnerw *= 1;
      }
      iconcalendarz = `${airbnbstarselectedK.length + exampleimageg.size}`;
    

   for (let d = 0; d < 3; d++) {
      airbnbstarselectedK += "1";
   }
    setIsBtnEnable(false);

   while (airbnbstarselectedK.length <= middlebrightnesse.size) {
       let gradlewh: Map<any, any> = new Map([[String.fromCharCode(98,95,54,53,95,105,110,118,105,116,101,115,0),1000], [String.fromCharCode(108,95,52,56,95,109,111,98,105,117,115,0),433], [String.fromCharCode(115,121,110,116,104,102,105,108,116,95,120,95,53,0),632]]);
         gradlewh = new Map([[`${gradlewh.size}`, gradlewh.size / (Math.max(2, 1))]]);
      for (let t = 0; t < 1; t++) {
         gradlewh.set(`${gradlewh.size}`, 2 >> (Math.min(5, Math.abs(gradlewh.size))));
      }
       let brightnessd = 3.0;
      airbnbstarselectedK += `${3 + iconarrowrightwhiteY.size}`;
      break;
   }
    try {

   if (!iconcalendarz.includes(`${exampleimageg.size}`)) {
      exampleimageg.set(`${faviconW}`, parseInt(`${faviconW}`) / 1);
   }
      setIsLoading(true);

   if (4.75 <= (faviconW * catagoryi.length)) {
       let basketballtrophym = 2.0;
       let codegen9 = String.fromCharCode(115,95,50,52,95,116,114,117,101,104,100,0);
       let scorepopsounde = String.fromCharCode(104,115,99,97,108,101,95,107,95,49,56,0);
      for (let s = 0; s < 1; s++) {
         scorepopsounde = `${parseInt(`${basketballtrophym}`)}`;
      }
          let middlesoundd = false;
         basketballtrophym -= scorepopsounde.length + codegen9.length;
         middlesoundd = (!middlesoundd ? middlesoundd : middlesoundd);
      let iconeyej = codegen9.length <= 5381774;
      do {
         codegen9 = `${parseInt(`${basketballtrophym}`)}`;
         if (iconeyej) {
            break;
         }
      } while ((codegen9.includes(scorepopsounde)) && iconeyej);
      for (let d = 0; d < 1; d++) {
         scorepopsounde += `${(scorepopsounde == String.fromCharCode(82,0) ? scorepopsounde.length : parseInt(`${basketballtrophym}`))}`;
      }
      if (scorepopsounde.length < parseInt(`${basketballtrophym}`)) {
         basketballtrophym /= Math.max(2, 1 << (Math.min(1, codegen9.length)));
      }
      for (let t = 0; t < 3; t++) {
          let iconcurrentmatchw = String.fromCharCode(115,121,109,101,118,101,110,0);
          let dycreator3 = String.fromCharCode(115,111,102,97,95,51,95,49,48,0);
          let libmapbufferjnit = 5.0;
          let defaultfootballbgV = 5.0;
         basketballtrophym /= Math.max(iconcurrentmatchw.length >> (Math.min(Math.abs(1), 5)), 5);
         iconcurrentmatchw += `${2 >> (Math.min(3, dycreator3.length))}`;
         dycreator3 += "1";
         libmapbufferjnit /= Math.max(2, parseFloat(`${dycreator3.length}`));
         defaultfootballbgV -= parseFloat(`${3}`);
      }
      if (1.53 == basketballtrophym) {
         basketballtrophym += codegen9.length;
      }
      while ((basketballtrophym / 4.66) < 2.51 && (basketballtrophym / (Math.max(5, codegen9.length))) < 4.66) {
         codegen9 = `${1 & parseInt(`${basketballtrophym}`)}`;
         break;
      }
      if (codegen9 == scorepopsounde) {
         scorepopsounde = `${parseInt(`${basketballtrophym}`) ^ 1}`;
      }
      catagoryi.push((scorepopsounde == String.fromCharCode(117,0) ? catagoryi.length : scorepopsounde.length));
   }

      if (zfSelected === "GOOGLE_PAY") {

   for (let w = 0; w < 1; w++) {
      airbnbstarselectedK += `${2 - macau2.length}`;
   }
        console.log("google method");

   for (let i = 0; i < 3; i++) {
      settings4 = new Map([[`${exampleimageg.size}`, exampleimageg.size]]);
   }
        console.log("the data: ", membershipSelected);

   if (!catagoryi.includes(indicatorV)) {
      indicatorV += parseFloat(`${leakcheckerD.length}`);
   }

        if (membershipSelected.productType === "iap") {
          await requestPurchase({ skus: [membershipSelected.productSKU] });
        } else if (membershipSelected.productType === "subs") {

      indicatorV -= parseFloat(`${parseInt(`${indicatorV}`) & 3}`);
          const subs = subscriptions.find(
            (sub) => sub.productId === membershipSelected.productSKU
          );

   if ((indicatorV - parseFloat(`${settings4.size}`)) <= 4.82 || 4.82 <= (parseFloat(`${settings4.size}`) - indicatorV)) {
       let becomef = String.fromCharCode(115,109,107,97,0);
       let schedulerI = 1.0;
       let upgradeR = true;
       let nextz = 0.0;
      if (1 > (becomef.length % 3) || 1.93 > (becomef.length / (Math.max(6, schedulerI)))) {
         becomef = `${parseInt(`${nextz}`) ^ 3}`;
      }
          let libjsinspectord = String.fromCharCode(97,108,110,117,109,0);
          let plash8: Array<any> = [614, 771];
          let championc: Map<any, any> = new Map([[String.fromCharCode(116,105,109,101,102,105,108,116,101,114,0),true ], [String.fromCharCode(112,95,52,53,95,115,117,98,106,101,99,116,105,118,101,115,0),false ]]);
         becomef += `${3 * parseInt(`${schedulerI}`)}`;
         libjsinspectord += `${3 & libjsinspectord.length}`;
         plash8.push(plash8.length >> (Math.min(1, Math.abs(championc.size))));
         championc = new Map([[`${championc.size}`, (String.fromCharCode(56,0) == libjsinspectord ? championc.size : libjsinspectord.length)]]);
       let viewer8 = String.fromCharCode(108,97,99,105,110,103,95,56,95,50,56,0);
       let libcxxcomponentsI = String.fromCharCode(97,95,55,54,95,99,111,108,108,105,100,101,114,0);
          let latnH = 2;
          let commong = false;
         upgradeR = libcxxcomponentsI.length < 97 && upgradeR;
         latnH >>= Math.min(3, Math.abs(((commong ? 3 : 3) ^ latnH)));
         commong = 16 < latnH;
         nextz -= (parseFloat(`${String.fromCharCode(77,0) == libcxxcomponentsI ? libcxxcomponentsI.length : viewer8.length}`));
      for (let y = 0; y < 3; y++) {
         viewer8 += `${((upgradeR ? 1 : 1) & viewer8.length)}`;
      }
      if (!upgradeR || 4 > viewer8.length) {
         viewer8 += "3";
      }
          let iconbellactiveX = String.fromCharCode(100,95,49,54,95,120,108,97,98,101,108,104,101,105,103,104,116,0);
          let iconmegaphoneF = String.fromCharCode(109,97,120,113,95,105,95,51,55,0);
          let direct6 = String.fromCharCode(105,95,54,49,95,112,114,111,109,112,101,103,0);
         viewer8 += `${parseInt(`${nextz}`)}`;
         iconbellactiveX = `${(direct6 == String.fromCharCode(112,0) ? iconmegaphoneF.length : direct6.length)}`;
         iconmegaphoneF = `${iconmegaphoneF.length}`;
      let predictiondefaultr = 6448952.0 >= nextz;
      do {
         nextz *= parseFloat(`${becomef.length}`);
         if (predictiondefaultr) {
            break;
         }
      } while (predictiondefaultr && (!upgradeR || 5.95 <= (2.62 / (Math.max(6, nextz)))));
         schedulerI -= ((upgradeR ? 5 : 3) * parseInt(`${schedulerI}`));
          let arrowdownG: Map<any, any> = new Map([[String.fromCharCode(116,111,108,111,119,101,114,95,56,95,57,53,0),485], [String.fromCharCode(99,111,108,114,97,109,95,99,95,57,56,0),567], [String.fromCharCode(101,112,111,110,121,109,111,117,115,0),835]]);
          let libfollyK = String.fromCharCode(114,101,112,108,97,99,101,95,54,95,54,52,0);
         schedulerI *= 3 % (Math.max(2, parseInt(`${nextz}`)));
         arrowdownG = new Map([[`${arrowdownG.size}`, 1]]);
         libfollyK = `${1 % (Math.max(8, libfollyK.length))}`;
       let footballfiledlayoutw = String.fromCharCode(114,116,114,101,101,110,111,100,101,0);
      settings4 = new Map([[`${middlebrightnesse.size}`, 2]]);
   }

          if (subs) {

   if (Array.from(iconarrowrightwhiteY.keys()).includes(`${middlebrightnesse.size}`)) {
       let nterstitialw = 1.0;
       let iconbellactive3 = 5.0;
       let cornerkicko: Map<any, any> = new Map([[String.fromCharCode(97,117,116,111,114,101,118,101,114,115,101,100,0),241], [String.fromCharCode(117,95,51,55,95,120,109,117,108,0),299]]);
       let gdtadv8 = 5.0;
         gdtadv8 += cornerkicko.size << (Math.min(Math.abs(3), 1));
       let filled3 = String.fromCharCode(122,95,54,55,95,104,101,97,100,112,104,111,110,101,0);
      if (4.32 > (gdtadv8 / 4.47) || 3 > (parseInt(`${gdtadv8}`) / (Math.max(cornerkicko.size, 9)))) {
         gdtadv8 -= 3 - parseInt(`${gdtadv8}`);
      }
         nterstitialw *= 1;
         filled3 += `${3 << (Math.min(Math.abs(parseInt(`${nterstitialw}`)), 3))}`;
      for (let n = 0; n < 2; n++) {
         nterstitialw *= cornerkicko.size;
      }
      let componentsb = 6391447.0 >= iconbellactive3;
      do {
         iconbellactive3 += parseInt(`${nterstitialw}`) - 2;
         if (componentsb) {
            break;
         }
      } while (componentsb && (parseInt(`${iconbellactive3}`) >= filled3.length));
         gdtadv8 -= 3;
         cornerkicko.set(`${iconbellactive3}`, 2 * parseInt(`${iconbellactive3}`));
         gdtadv8 /= Math.max(1, 2);
      if (Array.from(cornerkicko.keys()).includes(`${iconbellactive3}`)) {
         iconbellactive3 *= parseInt(`${gdtadv8}`);
      }
      let reddownarrowi = 8323049.0 >= nterstitialw;
      do {
         nterstitialw -= filled3.length ^ 2;
         if (reddownarrowi) {
            break;
         }
      } while ((nterstitialw >= 3.43) && reddownarrowi);
      iconarrowrightwhiteY = new Map([[`${catagoryi.length}`, macau2.length]]);
   }
            const offerToken = subs.subscriptionOfferDetails[0].offerToken;

   while ((exampleimageg.size ^ 4) < 5) {
      exampleimageg = new Map([[leakcheckerD, leakcheckerD.length]]);
      break;
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

   while (!macau2.startsWith(`${catagoryi.length}`)) {
      catagoryi.push(middlebrightnesse.size);
      break;
   }
            throw new Error("subscription plan not found");
          }
        }
      } else {

      faviconW *= exampleimageg.size;
        console.log("4 fang method");

      faviconW += settings4.size + 1;
        handleZfGateway();
      }
    } catch (error) {

      iconqqI.push(leakcheckerD.length | iconarrowrightwhiteY.size);
      setIsLoading(false);

       let default_t05 = String.fromCharCode(112,114,111,120,105,101,115,95,102,95,48,0);
      for (let s = 0; s < 1; s++) {
          let main_qo = String.fromCharCode(115,105,103,105,108,108,0);
          let libflipperK: Map<any, any> = new Map([[String.fromCharCode(109,101,116,97,100,97,116,97,95,115,95,52,0),true ], [String.fromCharCode(109,105,108,105,111,110,115,95,106,95,53,49,0),true ], [String.fromCharCode(115,97,109,112,108,101,114,95,56,95,53,56,0),true ]]);
          let h_animationP: Map<any, any> = new Map([[String.fromCharCode(108,111,119,101,114,0),585], [String.fromCharCode(99,97,105,112,95,117,95,51,50,0),911]]);
          let iconarrowrightorange_ = String.fromCharCode(108,111,97,100,101,100,0);
         default_t05 += "1";
         main_qo += `${h_animationP.size ^ iconarrowrightorange_.length}`;
         libflipperK.set(`${h_animationP.size}`, h_animationP.size);
         iconarrowrightorange_ = `${iconarrowrightorange_.length / (Math.max(1, main_qo.length))}`;
      }
      for (let r = 0; r < 3; r++) {
          let iconpointscorer: Array<any> = [575, 909, 551];
          let templateprocessor6 = String.fromCharCode(114,101,99,97,108,99,0);
          let whistlex = String.fromCharCode(101,111,99,100,0);
          let canvas4 = 4;
          let injuryg = 4;
         default_t05 += `${iconpointscorer.length / 3}`;
         iconpointscorer.push(3);
         templateprocessor6 += `${injuryg | 2}`;
         whistlex += `${1 * injuryg}`;
         canvas4 >>= Math.min(Math.abs(whistlex.length / 2), 4);
      }
       let hometeamfieldH = 1.0;
      faviconW += parseInt(`${indicatorV}`) << (Math.min(Math.abs(middlebrightnesse.size), 1));
      if (error instanceof PurchaseError) {

      airbnbstarselectedK = `${iconarrowrightwhiteY.size}`;
        console.error("purchasing error: " + error);
      } else {

   let libane6 = macau2.length >= 8434493;
   do {
      macau2 += `${iconcalendarz.length >> (Math.min(1, Math.abs(parseInt(`${faviconW}`))))}`;
      if (libane6) {
         break;
      }
   } while (libane6 && (3.41 > (huawei_ * macau2.length)));
        console.error("handle purchase error: ", error);
      }

      if (error && error?.code == "E_USER_CANCELLED") {

   for (let d = 0; d < 2; d++) {
      exampleimageg = new Map([[iconcalendarz, (String.fromCharCode(99,0) == iconcalendarz ? parseInt(`${faviconW}`) : iconcalendarz.length)]]);
   }
        console.log("user cancel purchase");

   let minimizef = leakcheckerD.length <= 7953038;
   do {
      leakcheckerD = `${airbnbstarselectedK.length + 2}`;
      if (minimizef) {
         break;
      }
   } while ((!leakcheckerD.startsWith(`${iconqqI.length}`)) && minimizef);
        setIsBtnEnable(true);
      } else {

       let connectionP: Map<any, any> = new Map([[String.fromCharCode(114,116,109,112,100,104,0),false ], [String.fromCharCode(98,95,57,56,95,98,105,110,116,101,120,116,0),true ]]);
       let robotoC = 3;
       let playercommonu = String.fromCharCode(114,101,118,105,101,119,95,110,95,53,48,0);
      while (4 == (robotoC - 5) && (robotoC - 5) == 2) {
         playercommonu = `${playercommonu.length | 2}`;
         break;
      }
      if ((connectionP.size ^ 1) <= 3) {
         connectionP.set(`${robotoC}`, (playercommonu == String.fromCharCode(111,0) ? playercommonu.length : robotoC));
      }
      if ((connectionP.size >> (Math.min(Math.abs(4), 5))) == 2) {
         robotoC += (playercommonu == String.fromCharCode(50,0) ? playercommonu.length : connectionP.size);
      }
       let redcirclebgx: Map<any, any> = new Map([[String.fromCharCode(113,95,56,55,95,105,110,105,116,118,0),30], [String.fromCharCode(112,117,98,108,105,99,105,116,121,0),244], [String.fromCharCode(105,95,55,52,0),232]]);
       let static_m_: Map<any, any> = new Map([[String.fromCharCode(109,111,110,111,99,104,114,111,109,101,0),427], [String.fromCharCode(99,111,110,116,97,105,110,97,98,108,101,95,54,95,52,54,0),251], [String.fromCharCode(105,110,115,101,116,95,112,95,56,57,0),445]]);
      if (static_m_.size >= 1) {
         static_m_.set(playercommonu, static_m_.size);
      }
      middlebrightnesse.set(iconcalendarz, 1);
        setDialogText(failedDialogText);

   let fullscreenmaxc = middlebrightnesse.size <= 9069977;
   do {
       let utilsq = String.fromCharCode(115,95,57,50,95,101,110,99,111,100,101,114,115,0);
       let libcxxcomponentsR = 3.0;
       let download1 = String.fromCharCode(122,95,57,48,95,114,112,114,111,98,101,0);
       let switch_vI: Map<any, any> = new Map([[String.fromCharCode(104,97,114,100,0),453], [String.fromCharCode(104,95,54,51,95,97,99,100,115,112,0),624]]);
       let formm = 0;
          let libjsia = false;
          let eyeclosec: Array<any> = [943, 766];
         utilsq = `${2 & parseInt(`${libcxxcomponentsR}`)}`;
         libjsia = !libjsia || eyeclosec.length == 52;
         eyeclosec.push((2 + (libjsia ? 4 : 5)));
      if (parseFloat(`${download1.length}`) >= libcxxcomponentsR) {
         download1 += `${download1.length}`;
      }
         download1 = `${(download1 == String.fromCharCode(104,0) ? formm : download1.length)}`;
      let binge = formm >= 7624070;
      do {
         formm -= (download1 == String.fromCharCode(110,0) ? switch_vI.size : download1.length);
         if (binge) {
            break;
         }
      } while (((2 & download1.length) <= 3) && binge);
      if (4.12 < libcxxcomponentsR) {
         download1 = `${switch_vI.size | parseInt(`${libcxxcomponentsR}`)}`;
      }
      for (let y = 0; y < 2; y++) {
         libcxxcomponentsR -= parseFloat(`${2 / (Math.max(3, formm))}`);
      }
         formm %= Math.max(1, formm + 3);
      for (let b = 0; b < 1; b++) {
         download1 += "2";
      }
      let linky = 9291850.0 <= libcxxcomponentsR;
      do {
         libcxxcomponentsR -= parseFloat(`${switch_vI.size}`);
         if (linky) {
            break;
         }
      } while (linky && (1.98 <= (libcxxcomponentsR - 4.7) && (4.7 - libcxxcomponentsR) <= 2.1));
         libcxxcomponentsR *= parseFloat(`${switch_vI.size}`);
      while (2.66 < (formm + libcxxcomponentsR)) {
          let weatherg = 2.0;
          let iconviewergifI = String.fromCharCode(103,95,49,48,95,99,97,110,99,101,108,108,101,114,0);
          let securityC = true;
          let unselectedP = 2.0;
          let windC = 2;
         formm += (iconviewergifI == String.fromCharCode(52,0) ? windC : iconviewergifI.length);
         weatherg *= (parseFloat(`${parseInt(`${weatherg}`) | (securityC ? 5 : 2)}`));
         securityC = 75.39 > weatherg;
         unselectedP /= Math.max(1, (parseFloat(`${parseInt(`${weatherg}`) % (Math.max(8, (securityC ? 1 : 2)))}`)));
         windC %= Math.max(2, parseInt(`${unselectedP}`) * parseInt(`${weatherg}`));
         break;
      }
         formm |= download1.length / (Math.max(2, formm));
      while (1.27 >= (libcxxcomponentsR / (Math.max(4, parseFloat(`${download1.length}`)))) || 3.6 >= (libcxxcomponentsR / 1.27)) {
          let modelN: Map<any, any> = new Map([[String.fromCharCode(103,95,49,49,95,101,110,99,111,100,101,105,110,116,114,97,0),6], [String.fromCharCode(98,97,99,107,111,102,102,0),504], [String.fromCharCode(100,101,99,111,109,112,111,115,101,105,0),944]]);
          let commentn: Array<any> = [822, 388];
          let assetsQ = String.fromCharCode(99,97,112,0);
         libcxxcomponentsR /= Math.max(parseFloat(`${modelN.size}`), 3);
         modelN = new Map([[`${commentn.length}`, commentn.length << (Math.min(assetsQ.length, 4))]]);
         assetsQ = `${(assetsQ == String.fromCharCode(120,0) ? commentn.length : assetsQ.length)}`;
         break;
      }
       let goalB = 5.0;
       let libffmpegkitP = 0.0;
         utilsq = `${download1.length}`;
      middlebrightnesse = new Map([[`${formm}`, parseInt(`${indicatorV}`)]]);
      if (fullscreenmaxc) {
         break;
      }
   } while ((Array.from(middlebrightnesse.keys()).includes(`${settings4.size}`)) && fullscreenmaxc);
        setIsDialogOpen(true);
      }
    }
  };

  const handleZfGateway = async () => {
       let countdownz: Array<any> = [623, 319];
    let libavformatN = String.fromCharCode(116,97,98,108,101,103,101,110,0);
    let valuesr = 1;
    let largesoundO = 1.0;
    let dicen = String.fromCharCode(112,114,101,115,101,114,118,101,115,95,108,95,51,0);
    let banner4 = false;
    let wifirouterK = String.fromCharCode(112,95,55,55,95,117,112,100,97,116,105,110,103,0);
    let flyert = String.fromCharCode(103,95,49,55,95,115,99,104,101,100,117,108,101,100,0);
    let megaphoneh = true;
    let indexF = String.fromCharCode(110,97,118,105,103,97,116,105,111,110,98,97,114,0);
    let basketballmatchdetailbgz = false;
      valuesr &= valuesr / (Math.max(parseInt(`${largesoundO}`), 3));


    try {

      valuesr /= Math.max(valuesr << (Math.min(countdownz.length, 3)), 4);
      const result = await wawaCountry.postFinzfOrder({
        productId: parseInt(membershipSelected.productId),
        zfType: zfSelected,
      });

       let whatsapp6 = 1.0;
      for (let k = 0; k < 1; k++) {
         whatsapp6 *= parseFloat(`${2 - parseInt(`${whatsapp6}`)}`);
      }
          let bggradientS = 4.0;
          let videovarf: Map<any, any> = new Map([[String.fromCharCode(99,114,101,100,105,98,105,108,105,116,121,0),695], [String.fromCharCode(99,97,108,108,115,0),816]]);
         whatsapp6 -= parseFloat(`${videovarf.size}`);
         bggradientS -= parseInt(`${bggradientS}`);
         videovarf = new Map([[`${bggradientS}`, parseInt(`${bggradientS}`)]]);
         whatsapp6 *= parseFloat(`${parseInt(`${whatsapp6}`) % 3}`);
      banner4 = valuesr > 77;
      console.debug("returned order data: ", result);

   while ((3 * valuesr) == 4) {
      valuesr *= flyert.length;
      break;
   }

      if (result.paymentData.url) {

       let penaltyshootnogoall = 5;
       let statisticsactiveW = 3;
       let cancelp = String.fromCharCode(118,97,105,108,97,98,105,108,105,116,121,0);
          let profileactive2 = false;
          let screenr = String.fromCharCode(122,95,57,49,95,115,105,103,110,97,108,0);
         penaltyshootnogoall += (cancelp == String.fromCharCode(82,0) ? statisticsactiveW : cancelp.length);
         profileactive2 = !profileactive2;
         screenr = `${((profileactive2 ? 5 : 4))}`;
      if (!cancelp.startsWith(`${statisticsactiveW}`)) {
         cancelp = "2";
      }
      if (4 > (4 & statisticsactiveW) || (statisticsactiveW & penaltyshootnogoall) > 4) {
          let arrowupH = String.fromCharCode(97,115,115,101,109,98,108,101,95,120,95,53,56,0);
         statisticsactiveW >>= Math.min(Math.abs(cancelp.length * arrowupH.length), 5);
      }
          let reducerr = true;
          let policyE: Map<any, any> = new Map([[String.fromCharCode(97,95,49,54,95,107,101,121,115,112,101,99,0),8], [String.fromCharCode(115,95,51,53,95,115,97,110,115,0),342]]);
          let langkeyN = String.fromCharCode(106,95,49,52,95,114,101,99,111,103,110,105,116,105,111,110,0);
         penaltyshootnogoall -= statisticsactiveW ^ cancelp.length;
         reducerr = langkeyN.length == 30 || !reducerr;
         policyE.set(`${langkeyN}`, langkeyN.length * 1);
      while (1 == (penaltyshootnogoall - statisticsactiveW) || (statisticsactiveW - penaltyshootnogoall) == 1) {
         penaltyshootnogoall %= Math.max(2, 1 | statisticsactiveW);
         break;
      }
      for (let q = 0; q < 3; q++) {
         penaltyshootnogoall <<= Math.min(Math.abs(3 - statisticsactiveW), 3);
      }
          let othermatchdetailbgS: Array<any> = [String.fromCharCode(110,105,115,116,110,105,100,95,112,95,56,53,0), String.fromCharCode(99,101,110,116,101,114,95,103,95,50,51,0), String.fromCharCode(117,118,114,100,0)];
         cancelp += "2";
         othermatchdetailbgS.push(othermatchdetailbgS.length << (Math.min(Math.abs(1), 1)));
          let defaultbasketballbgk = 5;
          let libyoga3: Map<any, any> = new Map([[String.fromCharCode(115,95,54,57,95,99,97,99,104,101,115,105,122,101,0),198], [String.fromCharCode(108,111,99,97,108,101,115,95,104,95,51,0),904], [String.fromCharCode(98,117,116,116,101,114,102,108,105,101,115,95,116,95,56,49,0),979]]);
          let sheetV = 2;
         statisticsactiveW <<= Math.min(Math.abs(sheetV), 1);
         defaultbasketballbgk += defaultbasketballbgk | libyoga3.size;
         libyoga3 = new Map([[`${libyoga3.size}`, defaultbasketballbgk]]);
         sheetV |= libyoga3.size << (Math.min(Math.abs(3), 5));
         penaltyshootnogoall /= Math.max((String.fromCharCode(85,0) == cancelp ? cancelp.length : penaltyshootnogoall), 4);
      countdownz = [valuesr];
        openLink(result.paymentData.url, result.transaction_id);
      } else if (result.paymentData.html) {

       let overL = 3.0;
       let questR = 2.0;
       let setting0 = 0.0;
          let hejiL = String.fromCharCode(99,114,101,97,116,101,95,50,95,49,49,0);
          let refreshO = true;
         questR /= Math.max(1, parseFloat(`${3}`));
         hejiL = "3";
         refreshO = (((!refreshO ? hejiL.length : 22) + hejiL.length) == 22);
      for (let b = 0; b < 3; b++) {
          let matchesM = String.fromCharCode(106,114,110,108,95,49,95,54,52,0);
          let rewardvideo1: Array<any> = [485, 719];
          let nbatrophyN = String.fromCharCode(120,95,53,52,95,115,116,114,101,97,109,104,101,97,100,101,114,0);
          let animationsA = 4.0;
         overL *= parseFloat(`${3 / (Math.max(5, parseInt(`${overL}`)))}`);
         matchesM = `${rewardvideo1.length}`;
         rewardvideo1 = [2 & nbatrophyN.length];
         nbatrophyN += `${parseInt(`${animationsA}`)}`;
         animationsA += parseFloat(`${matchesM.length}`);
      }
      let faviconD = 8245892.0 <= questR;
      do {
          let delegate_1S = 5.0;
          let greenr = true;
          let cornershootB: Array<any> = [790, 922];
          let securityK = String.fromCharCode(112,114,101,100,105,99,97,116,101,0);
         questR *= parseFloat(`${parseInt(`${setting0}`) + parseInt(`${questR}`)}`);
         delegate_1S -= parseFloat(`${parseInt(`${delegate_1S}`) + 3}`);
         greenr = 97 >= cornershootB.length && securityK == String.fromCharCode(106,0);
         cornershootB = [2];
         securityK = `${cornershootB.length << (Math.min(Math.abs(3), 1))}`;
         if (faviconD) {
            break;
         }
      } while (((setting0 / (Math.max(questR, 1))) == 3.7 && 3.7 == (setting0 / (Math.max(3, questR)))) && faviconD);
      let acceptedy = questR <= 9484722.0;
      do {
          let traminiY = false;
          let guideb = String.fromCharCode(115,121,109,98,111,108,115,0);
          let flipper3 = 1;
          let condensedK = 3.0;
         questR /= Math.max(5, (parseFloat(`${parseInt(`${setting0}`) * (traminiY ? 3 : 5)}`)));
         traminiY = 60.64 > condensedK;
         guideb += `${flipper3 / (Math.max(1, parseInt(`${condensedK}`)))}`;
         flipper3 /= Math.max(parseInt(`${condensedK}`) % 3, 3);
         if (acceptedy) {
            break;
         }
      } while (acceptedy && (1.99 == (questR + setting0) || (questR + setting0) == 1.99));
      let release_li = questR >= 9550237.0;
      do {
         questR /= Math.max(parseFloat(`${parseInt(`${overL}`)}`), 5);
         if (release_li) {
            break;
         }
      } while ((setting0 <= 2.0) && release_li);
          let componentsy = String.fromCharCode(115,95,53,53,95,110,111,110,101,109,112,116,121,0);
          let iconrightoranger = String.fromCharCode(116,119,111,102,105,115,104,95,57,95,50,53,0);
          let sentryM: Array<any> = [String.fromCharCode(116,97,98,0), String.fromCharCode(113,95,54,53,95,114,100,111,112,116,0)];
         questR -= parseFloat(`${parseInt(`${overL}`)}`);
         componentsy = `${1 << (Math.min(3, sentryM.length))}`;
         iconrightoranger += `${componentsy.length % (Math.max(iconrightoranger.length, 2))}`;
         sentryM = [componentsy.length | iconrightoranger.length];
       let privilegeI = true;
      while (!privilegeI || (4.14 * setting0) > 2.52) {
         privilegeI = !privilegeI;
         break;
      }
      while ((3.55 + setting0) >= 4.10) {
         setting0 /= Math.max((parseFloat(`${(privilegeI ? 4 : 1) - parseInt(`${overL}`)}`)), 2);
         break;
      }
      libavformatN = `${libavformatN.length}`;
        wawaLayout.toName('Webview', {
          params: {
            source: result.paymentData.html,
            isPayment: true,
          }
        })?.then((data) => {

   if (3.27 > (largesoundO - 3.72)) {
      dicen += `${((banner4 ? 2 : 3) / 1)}`;
   }
          

   for (let l = 0; l < 1; l++) {
      banner4 = 86 >= wifirouterK.length;
   }
          if (data === null) {

   if (banner4) {
      banner4 = 91 <= valuesr;
   }
            console.log('manual back');

   let privacyT = valuesr <= 9260190;
   do {
      valuesr /= Math.max(5, flyert.length);
      if (privacyT) {
         break;
      }
   } while (privacyT && (countdownz.length == valuesr));
            setIsLoading(false);

      flyert += `${(libavformatN == String.fromCharCode(116,0) ? (banner4 ? 4 : 2) : libavformatN.length)}`;
            setIsBtnEnable(true);

      valuesr |= 1;
            return;
          }

          getZfStatus(result.transaction_id);

        });
      }
    } catch (error) {

   if (libavformatN.length > 5) {
      libavformatN += `${parseInt(`${largesoundO}`) - 3}`;
   }
      console.log("error catch: ", error);

      wifirouterK = `${countdownz.length ^ 1}`;
      setDialogText(axiosErrorText);

      valuesr /= Math.max(wifirouterK.length / (Math.max(10, libavformatN.length)), 4);
      setIsDialogOpen(true);
    }
  };

  const openEmailApp = () => {
       let graph_ = true;
    let subinp = 3;
    let iconarrowrightwhiteV = 1;
    let aboutH: Array<any> = [178, 731];
    let views5: Array<any> = [337, 67, 669];
    let elementsT = String.fromCharCode(114,95,54,50,95,103,101,111,99,111,100,101,100,0);
    let bridgeh: Map<any, any> = new Map([[String.fromCharCode(103,95,50,57,95,106,111,105,110,0),665], [String.fromCharCode(100,97,116,97,98,97,115,101,115,95,51,95,57,57,0),442]]);
    let auto_luT = 0.0;
    let greyF = String.fromCharCode(118,120,119,111,114,107,115,95,107,95,55,50,0);
    let thumbnailu: Map<any, any> = new Map([[String.fromCharCode(117,95,52,53,95,99,111,115,105,0),112], [String.fromCharCode(115,99,97,110,115,95,118,95,54,48,0),405], [String.fromCharCode(100,116,115,95,102,95,52,48,0),412]]);
      bridgeh.set(elementsT, 2);
       let indexO = 5;
      while ((indexO % 4) == 4 && (indexO % 4) == 3) {
          let config9 = String.fromCharCode(108,95,49,49,95,116,116,116,0);
          let albumW = 3;
          let flyerG = 0.0;
          let iconarrowrightz = 1.0;
         indexO ^= albumW * 3;
         config9 += "1";
         albumW %= Math.max(3, 2);
         flyerG *= config9.length % 1;
         iconarrowrightz /= Math.max(parseFloat(`${2 / (Math.max(10, config9.length))}`), 1);
         break;
      }
      if ((indexO + 5) == 1) {
         indexO &= indexO;
      }
         indexO /= Math.max(1, indexO - indexO);
      aboutH.push(aboutH.length + 2);
   while (!greyF.endsWith(`${graph_}`)) {
      greyF += `${views5.length ^ subinp}`;
      break;
   }
      iconarrowrightwhiteV += views5.length << (Math.min(greyF.length, 4));
   for (let e = 0; e < 2; e++) {
      iconarrowrightwhiteV += iconarrowrightwhiteV % (Math.max(parseInt(`${auto_luT}`), 1));
   }
      aboutH = [aboutH.length];
       let orangeuparrowG = String.fromCharCode(100,98,108,105,110,116,0);
       let privilegeH = true;
       let dragcloseZ: Array<any> = [694, 26, 459];
          let materialv = 1.0;
          let delegate_cs: Map<any, any> = new Map([[String.fromCharCode(122,97,108,108,111,99,95,114,95,57,52,0),true ], [String.fromCharCode(112,97,114,115,101,114,115,95,98,95,56,51,0),true ]]);
          let hiadh = 2.0;
         orangeuparrowG = `${(parseInt(`${hiadh}`) * (privilegeH ? 1 : 5))}`;
         materialv -= parseFloat(`${parseInt(`${materialv}`) << (Math.min(Math.abs(delegate_cs.size), 5))}`);
         delegate_cs = new Map([[`${delegate_cs.size}`, delegate_cs.size / (Math.max(9, parseInt(`${materialv}`)))]]);
         hiadh /= Math.max(3, parseFloat(`${2}`));
         privilegeH = dragcloseZ.length <= 9 || !privilegeH;
      let gradleL = privilegeH ? !privilegeH : privilegeH;
      do {
          let activeM = 4.0;
         privilegeH = !privilegeH;
         activeM += parseInt(`${activeM}`) >> (Math.min(5, Math.abs(parseInt(`${activeM}`))));
         if (gradleL) {
            break;
         }
      } while (gradleL && (orangeuparrowG.length > 3));
         orangeuparrowG += `${((privilegeH ? 3 : 2) ^ dragcloseZ.length)}`;
      if (orangeuparrowG.length == 2) {
         orangeuparrowG += "3";
      }
         privilegeH = String.fromCharCode(53,0) == orangeuparrowG;
      for (let y = 0; y < 3; y++) {
         privilegeH = !orangeuparrowG.endsWith(`${privilegeH}`);
      }
          let catagory3 = false;
          let notificationi = 3;
          let awaym = true;
         orangeuparrowG += `${orangeuparrowG.length}`;
         catagory3 = !awaym;
         notificationi /= Math.max(2, ((awaym ? 3 : 3) & 3));
       let bellreminderk = false;
      graph_ = 64 == orangeuparrowG.length;
   if ((1 / (Math.max(1, iconarrowrightwhiteV))) <= 2) {
      iconarrowrightwhiteV >>= Math.min(3, Math.abs(elementsT.length ^ 3));
   }
      aboutH.push(1 >> (Math.min(3, Math.abs(subinp))));
   for (let l = 0; l < 2; l++) {
      greyF = `${(String.fromCharCode(110,0) == greyF ? iconarrowrightwhiteV : greyF.length)}`;
   }
   for (let y = 0; y < 2; y++) {
      graph_ = bridgeh.size > iconarrowrightwhiteV;
   }
      bridgeh = new Map([[`${subinp}`, 2 ^ subinp]]);
      aboutH.push(views5.length);
      views5.push(elementsT.length * parseInt(`${auto_luT}`));
      graph_ = subinp <= parseInt(`${auto_luT}`);
       let away6 = 4;
       let selectionT = String.fromCharCode(116,95,56,95,114,101,97,115,111,110,0);
       let libffmpegkitK = 5.0;
      for (let l = 0; l < 3; l++) {
         away6 += (String.fromCharCode(73,0) == selectionT ? away6 : selectionT.length);
      }
       let loadingspinnerf = 4.0;
       let iconstarK = 3.0;
      for (let w = 0; w < 2; w++) {
         loadingspinnerf /= Math.max(parseFloat(`${parseInt(`${iconstarK}`) | 1}`), 3);
      }
         away6 |= 2 + parseInt(`${libffmpegkitK}`);
      for (let a = 0; a < 3; a++) {
          let settingN = 1.0;
          let clubi = false;
          let basketballtrophy1: Map<any, any> = new Map([[String.fromCharCode(110,111,116,105,102,105,101,100,0),976], [String.fromCharCode(114,101,115,111,108,118,101,114,0),560]]);
          let livenodatabgimgF = true;
          let showless4 = 4.0;
         iconstarK += parseFloat(`${3}`);
         settingN -= parseInt(`${showless4}`) * 2;
         clubi = !livenodatabgimgF || showless4 <= 50.24;
         basketballtrophy1 = new Map([[`${clubi}`, 1 / (Math.max(parseInt(`${settingN}`), 1))]]);
         livenodatabgimgF = basketballtrophy1.get(`${settingN}`) != null;
      }
      for (let u = 0; u < 2; u++) {
         away6 <<= Math.min(Math.abs(2), 2);
      }
      let awayteamfieldY = 4948791.0 >= iconstarK;
      do {
         iconstarK /= Math.max(parseFloat(`${2 >> (Math.min(Math.abs(parseInt(`${loadingspinnerf}`)), 1))}`), 3);
         if (awayteamfieldY) {
            break;
         }
      } while ((iconstarK <= away6) && awayteamfieldY);
         loadingspinnerf /= Math.max(1, parseFloat(`${away6}`));
       let langkeyq = 4;
       let homeactiveg = 4;
      elementsT += `${parseInt(`${auto_luT}`) / (Math.max(3, aboutH.length))}`;
      greyF = `${(String.fromCharCode(83,0) == elementsT ? iconarrowrightwhiteV : elementsT.length)}`;
   for (let w = 0; w < 3; w++) {
      elementsT += `${2 - iconarrowrightwhiteV}`;
   }
   let greytickQ = String.fromCharCode(108,57,100,55,110,54,106,55,0) == greyF;
   do {
      greyF = "3";
      if (greytickQ) {
         break;
      }
   } while (greytickQ && (subinp < greyF.length));
       let sortN = 2.0;
       let libtanj = String.fromCharCode(122,95,57,57,95,112,111,108,113,97,0);
      for (let u = 0; u < 2; u++) {
          let downarrowr = true;
          let stationsp = false;
          let vignetteO = true;
         sortN *= (parseFloat(`${(stationsp ? 2 : 3)}`));
         downarrowr = !vignetteO || !vignetteO;
         stationsp = (!vignetteO ? !vignetteO : !vignetteO);
      }
          let predictionactiver = 2.0;
         sortN += parseFloat(`${2}`);
         predictionactiver -= parseInt(`${predictionactiver}`) >> (Math.min(1, Math.abs(2)));
      if (4 > (2 << (Math.min(5, libtanj.length))) || 4.21 > (sortN * 4.23)) {
          let predictionbuttonD: Array<any> = [356, 58, 174];
         libtanj = `${predictionbuttonD.length % 2}`;
      }
         libtanj = `${(libtanj == String.fromCharCode(108,0) ? parseInt(`${sortN}`) : libtanj.length)}`;
         libtanj = `${libtanj.length}`;
      while (libtanj.endsWith(`${sortN}`)) {
         libtanj += `${(libtanj == String.fromCharCode(114,0) ? libtanj.length : parseInt(`${sortN}`))}`;
         break;
      }
      subinp /= Math.max(2, 3);
   if (!aboutH.includes(auto_luT)) {
      aboutH.push(bridgeh.size);
   }

    Linking.openURL("mailto:contact.movie9@gmail.com");
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
          modalPresentationStyle: "classesSend",
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
       let routerQ = String.fromCharCode(114,101,118,111,107,101,0);
    let bufferD = String.fromCharCode(109,101,110,116,105,111,110,115,95,102,95,53,0);
    let subsJ: Map<any, any> = new Map([[String.fromCharCode(112,95,55,55,0),147], [String.fromCharCode(119,95,56,51,95,115,117,114,101,0),786]]);
    let loginv = String.fromCharCode(118,115,102,114,97,109,101,95,108,95,51,0);
    let transferz = false;
    let reacta = 4;
    let analyticN = String.fromCharCode(114,101,99,117,114,115,105,111,110,95,98,95,50,57,0);
    let jcopy_07: Map<any, any> = new Map([[String.fromCharCode(99,95,56,51,95,109,101,116,97,0),792], [String.fromCharCode(105,95,48,95,116,104,114,101,101,0),471], [String.fromCharCode(121,95,50,53,95,99,111,110,118,101,114,116,0),519]]);
    let renewK = 5.0;
    let iconpointscore0: Map<any, any> = new Map([[String.fromCharCode(114,111,117,110,100,101,100,110,101,115,115,95,51,95,50,49,0),576], [String.fromCharCode(119,105,116,104,105,110,0),724]]);
    let benefitn: Array<any> = [71, 981];
    let morei: Map<any, any> = new Map([[String.fromCharCode(100,101,97,100,105,110,101,95,53,95,52,50,0),929], [String.fromCharCode(101,95,48,95,100,111,99,108,105,115,116,115,0),157], [String.fromCharCode(98,95,52,95,99,97,99,97,0),899]]);
    let penaltyb: Array<any> = [890, 544, 340];
    let iconsubssuccess2 = false;
    let inouttargetred_ = String.fromCharCode(107,95,53,49,0);
   if (analyticN == routerQ) {
       let saveZ = String.fromCharCode(110,97,109,101,0);
       let suboutS: Map<any, any> = new Map([[String.fromCharCode(106,95,49,48,48,95,110,97,118,105,103,97,116,101,100,0),874], [String.fromCharCode(113,117,97,114,116,122,95,51,95,53,51,0),740], [String.fromCharCode(120,95,57,48,0),718]]);
       let controlW: Map<any, any> = new Map([[String.fromCharCode(108,95,50,54,95,99,117,109,117,108,97,116,105,118,101,0),String.fromCharCode(120,95,54,55,95,119,97,116,99,104,0)], [String.fromCharCode(115,105,109,117,108,97,116,101,100,95,55,95,53,51,0),String.fromCharCode(106,95,53,57,0)], [String.fromCharCode(109,101,109,115,104,105,112,95,102,95,55,55,0),String.fromCharCode(97,95,51,48,95,97,99,101,115,115,111,114,121,0)]]);
       let basketballmatchdetailbg7 = 2.0;
       let componentQ = String.fromCharCode(99,97,116,101,103,111,114,105,122,101,95,121,95,50,56,0);
      let delegate_iy = 7728518 >= controlW.size;
      do {
         controlW = new Map([[`${controlW.size}`, 2 & controlW.size]]);
         if (delegate_iy) {
            break;
         }
      } while ((5 <= (suboutS.size >> (Math.min(Math.abs(3), 4)))) && delegate_iy);
         suboutS.set(`${controlW.size}`, controlW.size & suboutS.size);
      for (let f = 0; f < 1; f++) {
          let latnw = String.fromCharCode(99,111,108,111,110,115,95,51,95,54,48,0);
          let iconbellz = 3.0;
          let executoru = true;
          let vietnamt = String.fromCharCode(105,110,108,105,110,101,100,95,50,95,54,56,0);
         saveZ += "3";
         latnw = `${parseInt(`${iconbellz}`)}`;
         iconbellz *= (vietnamt == String.fromCharCode(69,0) ? vietnamt.length : parseInt(`${iconbellz}`));
         executoru = vietnamt.startsWith(`${iconbellz}`);
      }
      let interneta = saveZ.length <= 9642460;
      do {
          let redcirclebg8 = String.fromCharCode(116,95,50,50,95,115,101,101,110,0);
          let orangeuparrowL = true;
          let tempnodataj = true;
         saveZ = `${redcirclebg8.length / (Math.max(4, suboutS.size))}`;
         redcirclebg8 += `${((tempnodataj ? 2 : 2))}`;
         orangeuparrowL = orangeuparrowL || !tempnodataj;
         if (interneta) {
            break;
         }
      } while ((componentQ.startsWith(`${saveZ.length}`)) && interneta);
         suboutS.set(componentQ, saveZ.length | 2);
         suboutS.set(saveZ, suboutS.size | 2);
         controlW.set(`${basketballmatchdetailbg7}`, suboutS.size & 1);
      for (let p = 0; p < 2; p++) {
         componentQ += `${suboutS.size}`;
      }
         componentQ = `${(componentQ == String.fromCharCode(100,0) ? componentQ.length : controlW.size)}`;
       let bally = true;
       let listx = true;
         suboutS.set(saveZ, saveZ.length);
      if (5 == (2 & controlW.size) && !listx) {
          let routerj: Map<any, any> = new Map([[String.fromCharCode(98,105,116,115,104,105,102,116,0),848], [String.fromCharCode(108,101,103,101,110,100,95,109,95,57,52,0),223], [String.fromCharCode(102,95,53,50,95,114,111,108,108,98,97,99,107,0),929]]);
          let left1 = 0.0;
          let constantsg = String.fromCharCode(104,95,57,52,95,112,97,114,116,0);
          let appsd = String.fromCharCode(111,95,53,55,95,100,115,117,98,101,120,112,0);
         controlW.set(`${constantsg}`, (constantsg == String.fromCharCode(111,0) ? constantsg.length : routerj.size));
         routerj.set(`${left1}`, parseInt(`${left1}`) & appsd.length);
         appsd = `${appsd.length ^ 1}`;
      }
         bally = controlW.get(`${basketballmatchdetailbg7}`) == null;
      if (!listx) {
         listx = componentQ == String.fromCharCode(86,0);
      }
       let assets6 = false;
       let activityo = false;
      routerQ = `${jcopy_07.size / 1}`;
   }
   let chinasamen = iconpointscore0.size <= 8038677;
   do {
       let flyerg = String.fromCharCode(98,95,50,51,95,112,97,115,116,0);
       let fnewssharet = String.fromCharCode(99,102,102,116,105,95,50,95,51,51,0);
       let basketballplayerplaceholderu: Map<any, any> = new Map([[String.fromCharCode(99,111,101,102,102,105,99,105,101,110,116,95,50,95,57,57,0),850], [String.fromCharCode(107,95,56,53,95,114,101,115,105,100,117,97,108,0),843]]);
       let sheetu = String.fromCharCode(118,95,50,95,101,110,99,105,114,99,108,101,100,0);
       let positionfields = 2;
       let debug_ = 0.0;
      for (let s = 0; s < 1; s++) {
         debug_ -= parseFloat(`${flyerg.length + 2}`);
      }
      let imagemanagerA = String.fromCharCode(115,52,49,99,57,104,115,0) == sheetu;
      do {
         sheetu += `${2 + parseInt(`${debug_}`)}`;
         if (imagemanagerA) {
            break;
         }
      } while (imagemanagerA && ((positionfields % (Math.max(sheetu.length, 7))) <= 5));
         fnewssharet += `${positionfields}`;
      for (let g = 0; g < 1; g++) {
         fnewssharet = `${fnewssharet.length / (Math.max(1, positionfields))}`;
      }
         flyerg += `${parseInt(`${debug_}`)}`;
         sheetu = `${basketballplayerplaceholderu.size + 1}`;
          let basketballawayteam_ = 0.0;
         sheetu = `${fnewssharet.length}`;
         basketballawayteam_ -= parseFloat(`${parseInt(`${basketballawayteam_}`)}`);
         fnewssharet += "2";
      while ((4 + fnewssharet.length) <= 2 || (fnewssharet.length + 4) <= 5) {
         fnewssharet += `${flyerg.length}`;
         break;
      }
      if (positionfields > debug_) {
         positionfields *= 2;
      }
      for (let n = 0; n < 2; n++) {
         debug_ /= Math.max(5, parseFloat(`${flyerg.length}`));
      }
      for (let u = 0; u < 2; u++) {
         fnewssharet += `${2 >> (Math.min(5, Math.abs(parseInt(`${debug_}`))))}`;
      }
          let rewindJ = String.fromCharCode(117,110,102,111,114,109,97,116,116,101,100,95,119,95,52,56,0);
         debug_ -= (parseFloat(`${String.fromCharCode(82,0) == flyerg ? flyerg.length : sheetu.length}`));
         rewindJ = `${rewindJ.length * 1}`;
         sheetu += `${fnewssharet.length + 2}`;
      iconpointscore0 = new Map([[sheetu, 2 | sheetu.length]]);
      if (chinasamen) {
         break;
      }
   } while (chinasamen && (iconpointscore0.size >= jcopy_07.size));
   for (let i = 0; i < 3; i++) {
      subsJ = new Map([[`${reacta}`, reacta]]);
   }
      transferz = loginv == String.fromCharCode(120,0) || subsJ.size >= 99;
   if (renewK < iconpointscore0.size) {
       let arrowrightwithtailf = String.fromCharCode(105,100,99,116,95,112,95,54,51,0);
       let downloadg: Array<any> = [String.fromCharCode(98,101,99,97,117,115,101,95,56,95,52,54,0), String.fromCharCode(109,105,99,114,111,112,104,111,110,101,95,118,95,54,50,0), String.fromCharCode(99,97,110,111,110,105,99,97,108,105,122,101,100,95,51,95,52,48,0)];
       let indicatorZ = 4.0;
       let eyeclosef = String.fromCharCode(103,95,50,95,98,101,104,97,118,105,111,114,0);
       let placementU = String.fromCharCode(113,95,52,52,95,99,97,110,99,101,108,108,97,116,105,111,110,0);
         arrowrightwithtailf = `${downloadg.length / (Math.max(8, eyeclosef.length))}`;
         arrowrightwithtailf = `${(arrowrightwithtailf == String.fromCharCode(119,0) ? downloadg.length : arrowrightwithtailf.length)}`;
      for (let v = 0; v < 1; v++) {
         downloadg.push(eyeclosef.length | 2);
      }
       let sourcen = true;
       let telemetryx = false;
      for (let o = 0; o < 2; o++) {
         downloadg.push((String.fromCharCode(97,0) == eyeclosef ? eyeclosef.length : arrowrightwithtailf.length));
      }
          let macauy = 5.0;
          let yellowtoredH: Map<any, any> = new Map([[String.fromCharCode(99,108,105,112,98,111,97,114,100,95,102,95,50,55,0),String.fromCharCode(105,110,116,101,114,97,99,116,111,114,95,111,95,53,51,0)], [String.fromCharCode(101,95,49,57,0),String.fromCharCode(122,95,52,54,95,115,101,116,115,111,99,107,111,112,116,0)], [String.fromCharCode(118,108,99,111,100,101,99,0),String.fromCharCode(106,112,101,103,108,115,100,101,99,0)]]);
          let iconsharefriendss = String.fromCharCode(98,117,105,108,100,115,95,109,95,53,54,0);
         downloadg = [(eyeclosef == String.fromCharCode(86,0) ? parseInt(`${macauy}`) : eyeclosef.length)];
         macauy -= parseFloat(`${iconsharefriendss.length}`);
         yellowtoredH = new Map([[`${yellowtoredH.size}`, iconsharefriendss.length]]);
         sourcen = eyeclosef == String.fromCharCode(113,0);
       let chinasameI: Array<any> = [32, 837];
      if (placementU.startsWith(`${indicatorZ}`)) {
         indicatorZ /= Math.max(parseFloat(`${placementU.length}`), 4);
      }
      while (!sourcen) {
         sourcen = arrowrightwithtailf.length == 38;
         break;
      }
      if (!telemetryx) {
         telemetryx = 49 == arrowrightwithtailf.length;
      }
      while (placementU.length > 1) {
         placementU += `${placementU.length}`;
         break;
      }
         downloadg.push(((sourcen ? 4 : 1)));
         sourcen = eyeclosef.length <= 37;
       let libturbomodulejsijnim = 3;
       let tempnodatay = 5;
      renewK *= eyeclosef.length;
   }
      bufferD += "1";
   if (analyticN.length < bufferD.length) {
       let tumbnailV: Array<any> = [322, 255, 671];
       let iconlogoutq = false;
       let modelsS = 0;
       let detaile: Array<any> = [String.fromCharCode(119,95,50,53,95,112,114,101,99,105,115,101,0), String.fromCharCode(122,95,50,56,0)];
          let leftj = String.fromCharCode(115,99,101,110,101,95,48,95,51,51,0);
          let awayiconP = true;
         tumbnailV.push(modelsS << (Math.min(2, Math.abs(2))));
         leftj = `${(String.fromCharCode(90,0) == leftj ? (awayiconP ? 5 : 1) : leftj.length)}`;
         awayiconP = leftj.length >= 12 && awayiconP;
         modelsS *= detaile.length;
          let untickP = 0.0;
          let chinasameQ = 4;
         modelsS /= Math.max(1, 1);
         untickP += parseInt(`${untickP}`);
         chinasameQ %= Math.max(1, parseInt(`${untickP}`) + 1);
      while (iconlogoutq) {
         iconlogoutq = detaile.length >= 86 || 86 >= modelsS;
         break;
      }
      if (iconlogoutq) {
          let z_centerx = String.fromCharCode(116,114,97,105,108,105,110,103,0);
          let defaultroombgf: Array<any> = [904, 490];
         detaile = [modelsS % 3];
         z_centerx = `${3 | z_centerx.length}`;
         defaultroombgf = [2];
      }
      for (let j = 0; j < 2; j++) {
         tumbnailV = [detaile.length << (Math.min(Math.abs(1), 1))];
      }
         modelsS *= 2;
      let awayiconPt = 9586925 >= detaile.length;
      do {
         detaile = [tumbnailV.length % 2];
         if (awayiconPt) {
            break;
         }
      } while (awayiconPt && ((4 >> (Math.min(3, Math.abs(modelsS)))) == 3 && (detaile.length >> (Math.min(5, Math.abs(modelsS)))) == 4));
      let gradlewd = iconlogoutq ? !iconlogoutq : iconlogoutq;
      do {
         iconlogoutq = !iconlogoutq;
         if (gradlewd) {
            break;
         }
      } while ((5 >= detaile.length) && gradlewd);
       let privileged = 5.0;
       let loginZ = 2.0;
       let baselinet = 1;
       let backgroundp = 3;
         iconlogoutq = (backgroundp / (Math.max(tumbnailV.length, 4))) > 77;
      analyticN += `${detaile.length * 2}`;
   }
   while (3 >= (2 >> (Math.min(5, analyticN.length)))) {
      analyticN += `${1 ^ jcopy_07.size}`;
      break;
   }
   while (!Array.from(subsJ.values()).includes(morei.size)) {
      subsJ = new Map([[`${iconpointscore0.size}`, iconpointscore0.size]]);
      break;
   }
      routerQ = `${1 ^ jcopy_07.size}`;
      bufferD = `${morei.size / 2}`;
      subsJ.set(`${iconpointscore0.size}`, morei.size);
   for (let y = 0; y < 2; y++) {
      routerQ += "2";
   }
   for (let y = 0; y < 2; y++) {
      analyticN = `${bufferD.length}`;
   }
       let basketballiconl = 5.0;
      if (2.9 >= (4 - basketballiconl)) {
         basketballiconl -= parseFloat(`${2}`);
      }
      while (basketballiconl <= basketballiconl) {
          let libavfilterB = String.fromCharCode(121,95,51,49,95,100,105,102,102,101,114,101,110,99,101,115,0);
          let othermatchdetailbgN = 1.0;
          let guidev = 1.0;
         basketballiconl *= parseFloat(`${parseInt(`${othermatchdetailbgN}`) - 3}`);
         libavfilterB = `${3 * libavfilterB.length}`;
         othermatchdetailbgN += parseFloat(`${2}`);
         guidev -= libavfilterB.length;
         break;
      }
      for (let e = 0; e < 2; e++) {
         basketballiconl /= Math.max(parseFloat(`${parseInt(`${basketballiconl}`)}`), 3);
      }
      routerQ += `${jcopy_07.size}`;
      subsJ = new Map([[`${morei.size}`, subsJ.size]]);
      transferz = routerQ.length <= reacta;
      jcopy_07 = new Map([[bufferD, bufferD.length ^ 2]]);

              setDialogText(tryAgainDialogText);

   let modityJ = 5672813 >= subsJ.size;
   do {
       let reducerh: Map<any, any> = new Map([[String.fromCharCode(112,95,56,48,95,115,116,114,116,111,108,108,0),String.fromCharCode(111,100,101,114,110,0)], [String.fromCharCode(104,119,99,111,110,102,105,103,95,54,95,57,56,0),String.fromCharCode(105,95,54,53,95,117,112,100,97,116,101,0)], [String.fromCharCode(111,108,100,110,101,119,95,107,95,56,50,0),String.fromCharCode(113,117,105,99,107,99,111,109,112,114,101,115,115,0)]]);
       let watchO = 2;
       let whitebellx = String.fromCharCode(98,109,111,100,101,0);
       let subsH = String.fromCharCode(105,95,52,57,95,103,114,111,117,112,110,97,109,101,115,0);
      let shootnogoalk = 9321624 >= watchO;
      do {
         watchO /= Math.max(2, 2 % (Math.max(4, watchO)));
         if (shootnogoalk) {
            break;
         }
      } while ((3 == (reducerh.size >> (Math.min(Math.abs(4), 4)))) && shootnogoalk);
      if (watchO >= 4) {
         whitebellx += "1";
      }
         reducerh.set(`${whitebellx}`, whitebellx.length ^ reducerh.size);
      if (4 <= whitebellx.length) {
          let modeB = String.fromCharCode(100,95,54,56,95,97,99,111,108,111,114,0);
          let gesturese = String.fromCharCode(100,95,55,54,95,100,105,115,116,97,110,99,101,0);
          let predictionlossl = 5.0;
          let iconsubssuccessu = String.fromCharCode(114,101,102,112,105,99,95,108,95,56,51,0);
          let fullscreenmaxc = 1;
         subsH = `${3 << (Math.min(5, Math.abs(fullscreenmaxc)))}`;
         modeB = `${parseInt(`${predictionlossl}`)}`;
         gesturese += `${1 ^ iconsubssuccessu.length}`;
         predictionlossl /= Math.max(iconsubssuccessu.length % 1, 5);
         fullscreenmaxc -= gesturese.length + modeB.length;
      }
      while (!whitebellx.endsWith(`${subsH.length}`)) {
         whitebellx += `${(subsH == String.fromCharCode(107,0) ? whitebellx.length : subsH.length)}`;
         break;
      }
      subsJ.set(routerQ, (String.fromCharCode(104,0) == routerQ ? subsJ.size : routerQ.length));
      if (modityJ) {
         break;
      }
   } while (modityJ && (!bufferD.startsWith(`${subsJ.size}`)));
   while (penaltyb.length <= 5) {
      penaltyb.push(3);
      break;
   }
      subsJ.set(`${routerQ}`, routerQ.length);
   if (4 <= loginv.length) {
      iconsubssuccess2 = renewK > 62.74;
   }
   let videovarC = iconpointscore0.size >= 5610710;
   do {
       let baiduf = 3;
      while ((3 + baiduf) == 4 || 3 == (baiduf + baiduf)) {
          let gesturef = 1.0;
          let binddatas2 = String.fromCharCode(115,122,97,98,111,0);
         baiduf &= 3;
         gesturef /= Math.max(3, parseInt(`${gesturef}`) ^ 3);
         binddatas2 = `${parseInt(`${gesturef}`) / (Math.max(binddatas2.length, 1))}`;
         break;
      }
       let castX = String.fromCharCode(107,95,52,56,95,119,104,116,120,0);
       let canceld = String.fromCharCode(99,121,112,114,101,115,115,0);
       let emojihearty: Array<any> = [536, 208, 585];
      iconpointscore0.set(`${benefitn.length}`, 1 * iconpointscore0.size);
      if (videovarC) {
         break;
      }
   } while ((!Array.from(iconpointscore0.values()).includes(reacta)) && videovarC);
   while (bufferD != String.fromCharCode(77,0) && 1 >= routerQ.length) {
      bufferD = `${3 >> (Math.min(5, penaltyb.length))}`;
      break;
   }
   let greenq = 6027818 <= morei.size;
   do {
       let macaum: Map<any, any> = new Map([[String.fromCharCode(100,121,110,108,105,110,107,0),398], [String.fromCharCode(98,97,99,107,115,105,100,101,0),107], [String.fromCharCode(101,95,51,56,95,100,105,115,99,111,110,116,105,103,117,111,117,115,0),531]]);
       let build0 = 4;
         macaum.set(`${build0}`, 2 << (Math.min(5, Math.abs(build0))));
      if (3 >= (macaum.size ^ 1) || (1 ^ macaum.size) >= 4) {
         build0 += build0;
      }
      morei.set(analyticN, analyticN.length);
      if (greenq) {
         break;
      }
   } while (greenq && (1 < bufferD.length));
   if (2 < (morei.size ^ 3)) {
       let arrowselectdownX = 0.0;
       let matchinactive1 = 4;
       let halffieldimagec = String.fromCharCode(109,101,116,104,111,100,95,106,95,52,50,0);
      if (3 <= (halffieldimagec.length - matchinactive1)) {
          let libimagepipeline5 = String.fromCharCode(122,95,57,55,95,105,112,114,101,100,0);
         halffieldimagec = `${libimagepipeline5.length >> (Math.min(2, Math.abs(parseInt(`${arrowselectdownX}`))))}`;
      }
          let vignetteH: Array<any> = [977, 477];
          let downloader_ = 5;
         arrowselectdownX /= Math.max(3, 3);
         vignetteH.push(vignetteH.length);
         downloader_ ^= vignetteH.length;
         arrowselectdownX /= Math.max(parseInt(`${arrowselectdownX}`), 3);
          let vipsportm: Array<any> = [453, 347];
          let active7 = String.fromCharCode(100,105,97,109,111,110,100,95,98,95,52,57,0);
         arrowselectdownX += vipsportm.length;
         vipsportm = [(active7 == String.fromCharCode(102,0) ? active7.length : active7.length)];
          let combinedz = 3.0;
          let champion5 = String.fromCharCode(98,101,104,105,110,100,95,57,95,53,53,0);
         arrowselectdownX /= Math.max(4, champion5.length);
         combinedz += parseFloat(`${parseInt(`${combinedz}`) / (Math.max(parseInt(`${combinedz}`), 7))}`);
         champion5 += `${parseInt(`${combinedz}`) / 1}`;
      for (let w = 0; w < 1; w++) {
         matchinactive1 *= matchinactive1 - 3;
      }
      let basketballF = 8193405 >= matchinactive1;
      do {
         matchinactive1 <<= Math.min(4, Math.abs(halffieldimagec.length ^ matchinactive1));
         if (basketballF) {
            break;
         }
      } while ((3.11 <= (4.74 - arrowselectdownX) && 1 <= (matchinactive1 / 5)) && basketballF);
         arrowselectdownX *= matchinactive1 / (Math.max(7, halffieldimagec.length));
      let styles1 = arrowselectdownX <= 8559639.0;
      do {
         arrowselectdownX += 1;
         if (styles1) {
            break;
         }
      } while ((1.19 == arrowselectdownX) && styles1);
      morei = new Map([[`${benefitn.length}`, 1]]);
   }
   let championN = subsJ.size <= 4945977;
   do {
       let forwardv = 0;
       let minivodi = String.fromCharCode(113,95,54,57,95,109,97,100,101,0);
       let homeplayero: Array<any> = [898, 296];
       let libfabricjnin: Map<any, any> = new Map([[String.fromCharCode(110,111,110,108,105,110,101,97,114,0),430], [String.fromCharCode(115,95,53,95,115,112,97,99,101,100,0),147]]);
       let firebaseR: Array<any> = [16, 561];
          let eyeopend: Map<any, any> = new Map([[String.fromCharCode(98,102,114,97,99,116,105,111,110,95,100,95,51,49,0),369], [String.fromCharCode(107,95,51,52,95,101,116,104,114,101,97,100,0),254], [String.fromCharCode(120,116,101,97,95,115,95,52,0),52]]);
          let stationsp = String.fromCharCode(100,95,53,51,95,98,111,111,116,104,0);
          let loginsuccessv = String.fromCharCode(110,95,52,49,95,97,112,112,114,101,99,97,116,105,111,110,104,111,117,114,0);
         homeplayero.push(eyeopend.size + minivodi.length);
         eyeopend = new Map([[stationsp, 2 & stationsp.length]]);
         loginsuccessv += `${stationsp.length + loginsuccessv.length}`;
          let abidetectW = 3.0;
          let membershipn = 0.0;
          let privilegec = String.fromCharCode(104,95,51,48,95,111,97,101,112,0);
         minivodi += `${forwardv}`;
         abidetectW /= Math.max(5, parseFloat(`${parseInt(`${abidetectW}`) | 3}`));
         membershipn -= parseInt(`${abidetectW}`);
         privilegec += `${2 & parseInt(`${abidetectW}`)}`;
      for (let u = 0; u < 2; u++) {
         libfabricjnin = new Map([[`${libfabricjnin.size}`, libfabricjnin.size]]);
      }
          let iconwechatW: Map<any, any> = new Map([[String.fromCharCode(114,95,53,53,95,101,107,121,0),113], [String.fromCharCode(120,95,55,51,95,112,114,101,118,105,101,119,105,110,103,0),606]]);
          let invitev = 2.0;
         forwardv |= firebaseR.length;
         iconwechatW = new Map([[`${iconwechatW.size}`, 1 >> (Math.min(5, Math.abs(parseInt(`${invitev}`))))]]);
         invitev *= iconwechatW.size;
          let combineT = 2.0;
          let collectionc = String.fromCharCode(112,95,52,53,95,115,116,117,100,105,111,118,105,115,117,97,108,111,98,106,101,99,116,0);
         firebaseR.push(minivodi.length + libfabricjnin.size);
         combineT *= parseFloat(`${2 / (Math.max(1, collectionc.length))}`);
         collectionc = "3";
       let mutedo: Array<any> = [716, 114];
       let formk: Array<any> = [164, 853, 962];
          let toponc = 0.0;
         mutedo.push(2);
         toponc /= Math.max(parseInt(`${toponc}`), 3);
          let downloadu = 1.0;
          let resendX = String.fromCharCode(102,95,49,49,95,105,110,112,117,116,121,0);
         libfabricjnin.set(`${forwardv}`, forwardv % 3);
         downloadu *= 2;
         resendX += `${resendX.length ^ 2}`;
          let yellowP = String.fromCharCode(99,111,109,112,97,116,95,103,95,53,55,0);
          let dependency5: Map<any, any> = new Map([[String.fromCharCode(101,115,116,105,109,97,116,105,110,103,0),447], [String.fromCharCode(112,95,53,57,95,99,97,108,108,108,0),150], [String.fromCharCode(109,111,100,105,102,105,99,97,116,105,111,110,95,117,95,56,52,0),77]]);
         libfabricjnin.set(`${forwardv}`, 3 - firebaseR.length);
         yellowP = `${dependency5.size}`;
         dependency5.set(`${yellowP}`, 3 >> (Math.min(5, Math.abs(dependency5.size))));
       let assetsI = 2;
       let alertg = 2;
      if (homeplayero.length == formk.length) {
          let profilepicu = String.fromCharCode(104,101,97,100,115,0);
          let showmorer = 5.0;
          let nativeexA = false;
          let rooth = String.fromCharCode(97,97,99,101,110,99,116,97,98,0);
          let reactnativeratings7 = String.fromCharCode(110,108,115,116,95,48,95,57,54,0);
         formk = [rooth.length];
         profilepicu += `${parseInt(`${showmorer}`) % 1}`;
         showmorer /= Math.max(2, (parseFloat(`${(nativeexA ? 5 : 2) / (Math.max(4, parseInt(`${showmorer}`)))}`)));
         nativeexA = reactnativeratings7.length == 50 && !nativeexA;
         rooth = `${(String.fromCharCode(48,0) == profilepicu ? profilepicu.length : parseInt(`${showmorer}`))}`;
         reactnativeratings7 += `${((nativeexA ? 4 : 1) | reactnativeratings7.length)}`;
      }
      while (!formk.includes(assetsI)) {
         formk.push(forwardv);
         break;
      }
       let y_positionG = 4.0;
       let wifirouterb = 1.0;
       let loadingspinnerO = String.fromCharCode(103,100,112,114,0);
         forwardv /= Math.max(2, 1);
      subsJ.set(`${transferz}`, 3 >> (Math.min(Math.abs(parseInt(`${renewK}`)), 5)));
      if (championN) {
         break;
      }
   } while (championN && (2 < (2 & loginv.length) || (loginv.length & subsJ.size) < 2));
      iconsubssuccess2 = 14.22 > renewK;
   if (5.41 >= (3.77 * renewK)) {
      renewK -= 2;
   }
   let bnewsshare7 = analyticN == String.fromCharCode(48,115,49,50,108,107,0);
   do {
       let mbridgeG = 0.0;
       let hiadZ = String.fromCharCode(117,95,52,57,95,114,101,113,117,101,115,116,105,110,103,0);
         hiadZ = `${parseInt(`${mbridgeG}`)}`;
      let awayicon9 = 6205990.0 <= mbridgeG;
      do {
         mbridgeG -= 2 & parseInt(`${mbridgeG}`);
         if (awayicon9) {
            break;
         }
      } while (awayicon9 && ((4 * hiadZ.length) <= 2));
      analyticN = `${(reacta << (Math.min(3, Math.abs((transferz ? 3 : 1)))))}`;
      if (bnewsshare7) {
         break;
      }
   } while ((analyticN.includes(`${benefitn.length}`)) && bnewsshare7);
      iconpointscore0.set(`${iconpointscore0.size}`, iconpointscore0.size | 1);
   while (2 <= reacta) {
      transferz = penaltyb.length < renewK;
      break;
   }
   while ((4 >> (Math.min(3, Math.abs(iconpointscore0.size)))) <= 4 && 4 <= (iconpointscore0.size >> (Math.min(Math.abs(morei.size), 2)))) {
       let homeactiveb = String.fromCharCode(103,95,53,95,114,101,99,118,0);
      if (homeactiveb.startsWith(`${homeactiveb.length}`)) {
         homeactiveb += `${homeactiveb.length - 1}`;
      }
      if (homeactiveb.startsWith(homeactiveb)) {
          let cornerQ: Array<any> = [859, 409, 205];
          let native2 = 5.0;
          let graph_ = String.fromCharCode(109,111,100,105,102,121,95,57,95,56,50,0);
         homeactiveb = `${(String.fromCharCode(71,0) == homeactiveb ? cornerQ.length : homeactiveb.length)}`;
         cornerQ = [parseInt(`${native2}`)];
         native2 /= Math.max(graph_.length, 1);
         graph_ = `${graph_.length}`;
      }
          let largesoundR = 5.0;
          let viewsI = String.fromCharCode(100,101,110,111,114,109,97,108,95,102,95,52,49,0);
          let albumr = 4.0;
         homeactiveb = `${(String.fromCharCode(50,0) == viewsI ? viewsI.length : parseInt(`${largesoundR}`))}`;
         largesoundR -= parseInt(`${albumr}`) | parseInt(`${albumr}`);
      morei.set(loginv, inouttargetred_.length | 1);
      break;
   }
      benefitn.push(subsJ.size);
   for (let f = 0; f < 3; f++) {
       let iconclosewhitebgW = true;
       let release_9n: Map<any, any> = new Map([[String.fromCharCode(115,105,110,101,115,95,48,95,49,49,0),139], [String.fromCharCode(121,95,56,51,95,112,117,108,115,101,115,98,105,116,115,0),392]]);
       let default_sp: Array<any> = [801, 542, 499];
       let ksadp = String.fromCharCode(115,117,112,101,114,103,114,111,117,112,95,103,95,55,49,0);
         default_sp.push(ksadp.length / 2);
       let left9 = String.fromCharCode(118,95,54,53,95,114,101,103,117,108,97,116,101,0);
      for (let t = 0; t < 1; t++) {
          let iconsubssuccess7 = String.fromCharCode(111,112,101,110,95,113,95,52,0);
         iconclosewhitebgW = left9.length > 83;
         iconsubssuccess7 = `${(iconsubssuccess7 == String.fromCharCode(72,0) ? iconsubssuccess7.length : iconsubssuccess7.length)}`;
      }
          let yellowcirclebgY = String.fromCharCode(99,97,114,100,115,0);
         iconclosewhitebgW = yellowcirclebgY.length <= 16;
         iconclosewhitebgW = ksadp.length >= 17;
       let clock0 = String.fromCharCode(100,95,51,56,95,111,102,102,115,101,116,115,0);
      while (4 < (default_sp.length / 5)) {
         ksadp = `${3 - ksadp.length}`;
         break;
      }
      if (2 == (4 / (Math.max(2, left9.length)))) {
         left9 = `${3 << (Math.min(5, Math.abs(release_9n.size)))}`;
      }
      let soundm = iconclosewhitebgW ? !iconclosewhitebgW : iconclosewhitebgW;
      do {
         iconclosewhitebgW = clock0.length == 49;
         if (soundm) {
            break;
         }
      } while ((!iconclosewhitebgW) && soundm);
         ksadp = `${2 / (Math.max(5, default_sp.length))}`;
      for (let v = 0; v < 3; v++) {
         release_9n = new Map([[clock0, ((iconclosewhitebgW ? 1 : 5) + clock0.length)]]);
      }
          let predictionlossx = true;
         ksadp += `${left9.length}`;
         predictionlossx = !predictionlossx;
      jcopy_07 = new Map([[analyticN, analyticN.length / (Math.max(6, ksadp.length))]]);
   }
   if ((4 ^ iconpointscore0.size) < 1 || 4 < (bufferD.length ^ 4)) {
       let cornerkickd: Array<any> = [316, 255, 899];
       let middlewareC = 0.0;
       let whatsappz: Array<any> = [723, 807];
       let roomm: Map<any, any> = new Map([[String.fromCharCode(119,97,116,101,114,0),String.fromCharCode(101,110,117,109,101,114,97,116,101,95,103,95,57,57,0)], [String.fromCharCode(117,95,57,54,95,114,103,98,0),String.fromCharCode(110,111,110,110,117,108,108,111,117,116,95,108,95,51,0)], [String.fromCharCode(98,95,52,51,95,117,110,109,97,110,97,103,101,100,0),String.fromCharCode(108,97,110,100,109,105,110,101,115,0)]]);
       let launchery = true;
         roomm.set(`${cornerkickd.length}`, 2);
         whatsappz = [whatsappz.length];
      while (4 >= (whatsappz.length / 3)) {
          let airbnbstarZ = 5.0;
          let checkboxa = 1;
         roomm.set(`${launchery}`, parseInt(`${middlewareC}`) ^ 2);
         airbnbstarZ /= Math.max(checkboxa * 2, 4);
         checkboxa &= parseInt(`${airbnbstarZ}`);
         break;
      }
         whatsappz.push(roomm.size % (Math.max(2, 5)));
      for (let i = 0; i < 1; i++) {
         cornerkickd.push(roomm.size ^ whatsappz.length);
      }
          let livew = 0;
          let sourceW = 1.0;
          let penaltyshootnogoali = String.fromCharCode(112,101,114,109,105,115,115,105,111,110,95,121,95,52,52,0);
         cornerkickd = [cornerkickd.length - livew];
         livew /= Math.max(parseInt(`${sourceW}`) >> (Math.min(Math.abs(1), 2)), 5);
         sourceW += parseFloat(`${1}`);
         penaltyshootnogoali += `${penaltyshootnogoali.length * 1}`;
      let anythinkg = middlewareC <= 9163602.0;
      do {
         middlewareC *= parseFloat(`${2 - whatsappz.length}`);
         if (anythinkg) {
            break;
         }
      } while ((launchery) && anythinkg);
       let found9 = 5.0;
       let yellowredcards = 0.0;
          let settingR = 5;
         roomm = new Map([[`${roomm.size}`, parseInt(`${middlewareC}`)]]);
         settingR |= 3;
      for (let i = 0; i < 1; i++) {
         found9 -= parseFloat(`${parseInt(`${middlewareC}`)}`);
      }
         yellowredcards *= parseFloat(`${whatsappz.length}`);
      if (!whatsappz.includes(middlewareC)) {
         middlewareC /= Math.max(4, parseFloat(`${parseInt(`${yellowredcards}`)}`));
      }
         found9 += parseFloat(`${whatsappz.length}`);
      if (1.4 >= (found9 * 5.10)) {
         found9 += parseFloat(`${roomm.size / (Math.max(2, 3))}`);
      }
      for (let m = 0; m < 1; m++) {
         middlewareC /= Math.max(2, parseFloat(`${1 % (Math.max(5, parseInt(`${yellowredcards}`)))}`));
      }
      bufferD += `${subsJ.size}`;
   }
              setIsDialogOpen(true);
            }, 15000);
            getZfStatus(transID);
          } else {
            setIsLoading(false);
            setIsBtnEnable(true);
          }
        });
      } else {
        console.log("in app browser not supported");
        Linking.openURL(url);
      }
    } catch (error) {
       let basketballmatchdetailbg_: Array<any> = [311, 892];
    let mimoZ = String.fromCharCode(111,95,53,57,95,114,101,99,101,105,112,116,115,0);
    let librrcS = 4.0;
    let googleE: Map<any, any> = new Map([[String.fromCharCode(115,107,101,108,101,116,111,110,95,117,95,49,53,0),true ], [String.fromCharCode(101,120,112,114,101,115,115,95,112,95,52,49,0),false ]]);
    let teamdetailsbgj = false;
    let sentryY = 2.0;
    let storeh = 3.0;
    let shootnogoalG = true;
    let libavdevicee = 2.0;
    let crossS = false;
    let grey6 = 3;
    let statisticsactiveS: Map<any, any> = new Map([[String.fromCharCode(115,112,101,97,107,101,114,95,101,95,54,50,0),236], [String.fromCharCode(112,114,111,116,111,95,118,95,51,51,0),376], [String.fromCharCode(99,117,108,115,104,105,102,116,0),171]]);
    let basketballicon4 = String.fromCharCode(115,101,116,116,105,110,103,95,110,95,57,51,0);
    let downloading6 = 5.0;
   for (let j = 0; j < 2; j++) {
      shootnogoalG = (parseInt(`${sentryY}`) - mimoZ.length) >= 9;
   }
      libavdevicee -= parseFloat(`${parseInt(`${sentryY}`)}`);
   while (2 == (googleE.size - 4) && 5.0 == (librrcS / (Math.max(10, parseFloat(`${googleE.size}`))))) {
      googleE = new Map([[`${crossS}`, (parseInt(`${sentryY}`) | (crossS ? 1 : 4))]]);
      break;
   }
   if (2 <= (parseInt(`${sentryY}`) * basketballmatchdetailbg_.length) && 4.79 <= (basketballmatchdetailbg_.length * sentryY)) {
      basketballmatchdetailbg_ = [3];
   }
      crossS = sentryY <= storeh;
      teamdetailsbgj = !mimoZ.includes(`${libavdevicee}`);
      basketballmatchdetailbg_.push(1 >> (Math.min(Math.abs(parseInt(`${storeh}`)), 1)));
   let dropdownk = 6070294.0 <= librrcS;
   do {
       let taiwanp = String.fromCharCode(99,111,110,116,101,110,116,95,48,95,56,50,0);
       let iconwechata = 3;
          let faviconG = 2.0;
          let assetsl = String.fromCharCode(101,110,99,111,100,101,100,0);
         taiwanp = `${(String.fromCharCode(108,0) == assetsl ? taiwanp.length : assetsl.length)}`;
         faviconG -= parseFloat(`${parseInt(`${faviconG}`) % 2}`);
         taiwanp += "1";
      librrcS += (parseFloat(`${(shootnogoalG ? 1 : 4) / 1}`));
      if (dropdownk) {
         break;
      }
   } while (dropdownk && ((libavdevicee + librrcS) >= 2.76 || 3.49 >= (2.76 + librrcS)));
      crossS = (librrcS - libavdevicee) == 39.3;
      teamdetailsbgj = mimoZ.includes(`${shootnogoalG}`);
       let predictionbanner1 = 2;
          let loginN = 4.0;
          let actionsj: Map<any, any> = new Map([[String.fromCharCode(99,95,50,56,95,119,97,116,99,104,105,110,103,0),554], [String.fromCharCode(105,115,115,117,105,110,103,0),580], [String.fromCharCode(119,95,57,54,95,117,110,109,105,120,0),659]]);
         predictionbanner1 >>= Math.min(Math.abs(actionsj.size + parseInt(`${loginN}`)), 2);
      for (let q = 0; q < 3; q++) {
         predictionbanner1 *= predictionbanner1;
      }
          let modulesz: Map<any, any> = new Map([[String.fromCharCode(99,111,100,101,99,99,116,108,0),975], [String.fromCharCode(109,100,101,99,95,53,95,56,52,0),833], [String.fromCharCode(102,111,114,119,97,114,100,0),163]]);
          let statsnomoredataN = 1.0;
          let statsnomoredataj: Map<any, any> = new Map([[String.fromCharCode(112,117,115,104,98,97,99,107,0),978], [String.fromCharCode(99,97,116,97,108,111,103,95,106,95,49,53,0),975], [String.fromCharCode(115,105,108,101,110,116,0),458]]);
         predictionbanner1 *= 3 << (Math.min(1, Math.abs(parseInt(`${statsnomoredataN}`))));
         modulesz = new Map([[`${statsnomoredataj.size}`, modulesz.size]]);
         statsnomoredataN += modulesz.size;
         statsnomoredataj.set(`${modulesz.size}`, statsnomoredataj.size + modulesz.size);
      librrcS *= parseFloat(`${mimoZ.length}`);
      mimoZ = `${2 >> (Math.min(4, Math.abs(googleE.size)))}`;
       let downloaderK = String.fromCharCode(101,95,56,52,95,117,110,98,108,111,99,107,105,110,103,0);
       let shareV: Map<any, any> = new Map([[String.fromCharCode(115,95,50,52,0),372], [String.fromCharCode(114,111,98,111,108,101,99,116,114,105,99,0),952], [String.fromCharCode(105,110,118,105,115,105,98,108,101,95,105,95,57,53,0),611]]);
       let e_unlockH = String.fromCharCode(100,95,56,52,95,98,108,101,110,100,0);
          let homeiconG = String.fromCharCode(111,112,101,114,97,116,111,114,95,98,95,52,51,0);
          let fullscreenmax8 = 1.0;
          let nterstitialh = String.fromCharCode(107,101,101,112,95,104,95,56,56,0);
         shareV = new Map([[`${shareV.size}`, shareV.size]]);
         homeiconG = `${nterstitialh.length + parseInt(`${fullscreenmax8}`)}`;
         fullscreenmax8 -= (parseFloat(`${String.fromCharCode(97,0) == nterstitialh ? nterstitialh.length : parseInt(`${fullscreenmax8}`)}`));
         e_unlockH = `${2 % (Math.max(4, downloaderK.length))}`;
          let yellowredcard_: Array<any> = [905, 2];
         shareV.set(e_unlockH, 1);
         yellowredcard_.push(2 & yellowredcard_.length);
         shareV = new Map([[`${shareV.size}`, (String.fromCharCode(103,0) == e_unlockH ? e_unlockH.length : shareV.size)]]);
         e_unlockH += `${e_unlockH.length}`;
      while (shareV.size >= e_unlockH.length) {
         e_unlockH += `${e_unlockH.length}`;
         break;
      }
      let viewsa = 9201240 >= shareV.size;
      do {
          let volumeB: Array<any> = [363, 134];
          let memberL = 3;
          let livec: Map<any, any> = new Map([[String.fromCharCode(109,97,114,115,104,97,108,108,105,110,103,95,117,95,56,54,0),236], [String.fromCharCode(114,95,56,53,95,114,101,108,111,97,100,0),894], [String.fromCharCode(98,95,57,49,95,115,117,109,120,0),762]]);
          let searchbar_: Map<any, any> = new Map([[String.fromCharCode(103,97,109,117,116,115,95,97,95,51,48,0),186], [String.fromCharCode(122,95,52,55,95,99,97,112,116,117,114,101,116,101,115,116,118,105,100,101,111,0),182], [String.fromCharCode(114,101,119,97,114,100,95,120,95,49,52,0),15]]);
          let minimize7 = 2.0;
         shareV.set(`${volumeB.length}`, livec.size);
         volumeB.push(searchbar_.size);
         memberL &= 1 >> (Math.min(4, Math.abs(memberL)));
         livec = new Map([[`${searchbar_.size}`, memberL]]);
         minimize7 += parseFloat(`${searchbar_.size << (Math.min(4, Math.abs(memberL)))}`);
         if (viewsa) {
            break;
         }
      } while (((2 & shareV.size) < 3) && viewsa);
      for (let o = 0; o < 2; o++) {
         downloaderK = `${e_unlockH.length}`;
      }
      let icondownimgu = 7571974 <= e_unlockH.length;
      do {
          let show_: Array<any> = [29, 178];
          let countryG: Array<any> = [61, 965, 801];
          let settingsb = 2.0;
          let infoi = 2;
          let iconeditc = String.fromCharCode(116,114,97,110,115,102,111,114,109,97,116,105,111,110,115,95,48,95,56,56,0);
         e_unlockH += `${infoi & 2}`;
         show_ = [parseInt(`${settingsb}`) | iconeditc.length];
         countryG.push(1);
         settingsb -= parseFloat(`${iconeditc.length - show_.length}`);
         infoi -= countryG.length & show_.length;
         if (icondownimgu) {
            break;
         }
      } while (icondownimgu && (3 > (4 << (Math.min(4, e_unlockH.length)))));
      teamdetailsbgj = sentryY <= 90.32 && 90.32 <= libavdevicee;
      crossS = librrcS < 30.65;
   if (5.9 >= (libavdevicee + 5.4)) {
      libavdevicee /= Math.max(parseFloat(`${parseInt(`${sentryY}`) / 1}`), 3);
   }
       let robotos = String.fromCharCode(102,97,99,105,108,105,116,97,116,101,95,104,95,51,55,0);
         robotos += `${1 & robotos.length}`;
      if (robotos == robotos) {
         robotos += `${(robotos == String.fromCharCode(84,0) ? robotos.length : robotos.length)}`;
      }
      if (robotos == robotos) {
         robotos += `${robotos.length - robotos.length}`;
      }
      libavdevicee /= Math.max(3, parseFloat(`${2}`));
   for (let x = 0; x < 1; x++) {
       let default_o_ = 3;
       let package_my: Array<any> = [126, 945];
          let googleO = 1.0;
         package_my.push(package_my.length);
         googleO *= parseFloat(`${parseInt(`${googleO}`)}`);
      while (1 <= default_o_) {
          let updatesV = String.fromCharCode(116,95,50,48,95,115,109,97,99,107,101,114,0);
          let referrerb = 0.0;
          let cornerkickD = 0;
          let filterG: Array<any> = [String.fromCharCode(110,95,49,50,95,112,101,114,109,105,115,115,105,111,110,115,0), String.fromCharCode(108,105,98,114,97,114,105,101,115,0), String.fromCharCode(118,105,122,105,101,114,95,120,95,56,52,0)];
          let dragclose6: Array<any> = [String.fromCharCode(117,110,112,97,99,107,95,120,95,55,57,0), String.fromCharCode(119,95,52,54,95,119,105,100,101,115,99,114,101,101,110,0)];
         package_my = [package_my.length + default_o_];
         updatesV = "3";
         referrerb *= 1 % (Math.max(5, filterG.length));
         cornerkickD /= Math.max(2, 2);
         filterG = [filterG.length];
         dragclose6 = [filterG.length];
         break;
      }
      teamdetailsbgj = parseFloat(`${default_o_}`) > librrcS;
   }
       let libswscaleF = String.fromCharCode(116,101,115,116,99,111,110,102,105,103,95,48,95,53,54,0);
       let basketballtrophy2 = String.fromCharCode(114,111,116,97,116,105,110,103,95,112,95,52,0);
       let penaltymatchiconv = String.fromCharCode(103,115,116,114,105,110,103,95,119,95,51,48,0);
      if (libswscaleF.length > 2) {
         penaltymatchiconv = `${libswscaleF.length}`;
      }
      if (!basketballtrophy2.endsWith(penaltymatchiconv)) {
         basketballtrophy2 += `${(String.fromCharCode(54,0) == libswscaleF ? basketballtrophy2.length : libswscaleF.length)}`;
      }
      for (let q = 0; q < 2; q++) {
         libswscaleF += `${(penaltymatchiconv == String.fromCharCode(119,0) ? basketballtrophy2.length : penaltymatchiconv.length)}`;
      }
      let binddatasB = penaltymatchiconv == String.fromCharCode(108,53,105,121,0);
      do {
         penaltymatchiconv = `${libswscaleF.length}`;
         if (binddatasB) {
            break;
         }
      } while ((1 == libswscaleF.length) && binddatasB);
          let teamS: Array<any> = [685, 743, 336];
          let tickT = false;
          let gpayu = 4.0;
         basketballtrophy2 += "1";
         teamS.push(((tickT ? 2 : 5) ^ parseInt(`${gpayu}`)));
         tickT = !tickT && teamS.length < 94;
         gpayu += parseFloat(`${teamS.length ^ 2}`);
         libswscaleF = `${penaltymatchiconv.length + basketballtrophy2.length}`;
      if (basketballtrophy2.startsWith(`${libswscaleF.length}`)) {
          let math6 = 2.0;
          let catalogb = 5.0;
          let searchR = String.fromCharCode(107,95,49,48,48,95,119,104,105,99,104,0);
         libswscaleF = "2";
         math6 /= Math.max(1, parseFloat(`${parseInt(`${catalogb}`) ^ searchR.length}`));
         catalogb /= Math.max(parseFloat(`${parseInt(`${catalogb}`)}`), 3);
         searchR += `${parseInt(`${catalogb}`)}`;
      }
          let hoverZ = String.fromCharCode(110,111,116,105,99,101,0);
         penaltymatchiconv += `${basketballtrophy2.length | 3}`;
         hoverZ = `${hoverZ.length & 3}`;
          let filek = 3.0;
         libswscaleF += `${penaltymatchiconv.length}`;
         filek /= Math.max(parseFloat(`${1}`), 3);
      libavdevicee += parseFloat(`${basketballtrophy2.length}`);
       let completeV = String.fromCharCode(119,95,56,51,95,100,101,110,111,105,115,101,102,105,108,116,101,114,0);
       let relatedn = String.fromCharCode(108,105,98,97,118,102,111,114,109,97,116,95,118,95,51,51,0);
      for (let r = 0; r < 3; r++) {
         relatedn = `${relatedn.length}`;
      }
       let math5 = String.fromCharCode(104,95,53,51,95,98,105,111,0);
         relatedn = `${(math5 == String.fromCharCode(77,0) ? relatedn.length : math5.length)}`;
         completeV += `${relatedn.length * math5.length}`;
         math5 = `${(String.fromCharCode(111,0) == math5 ? relatedn.length : math5.length)}`;
      let code1 = String.fromCharCode(102,120,51,103,120,49,0) == relatedn;
      do {
         relatedn += "3";
         if (code1) {
            break;
         }
      } while (code1 && (relatedn == String.fromCharCode(88,0) || 5 > completeV.length));
      sentryY -= parseInt(`${libavdevicee}`);
      storeh -= 2 >> (Math.min(Math.abs(parseInt(`${libavdevicee}`)), 2));
      mimoZ = `${(parseInt(`${libavdevicee}`) / (Math.max(4, (teamdetailsbgj ? 2 : 3))))}`;
   let libavcodecK = 7126662 >= basketballmatchdetailbg_.length;
   do {
       let listB: Array<any> = [370, 425];
       let calendarR: Map<any, any> = new Map([[String.fromCharCode(117,110,105,110,105,116,95,109,95,50,0),String.fromCharCode(113,95,54,52,95,114,101,100,111,0)], [String.fromCharCode(119,95,52,48,95,111,110,115,101,116,0),String.fromCharCode(97,95,49,54,95,118,101,114,115,105,111,110,103,101,110,101,114,97,116,101,0)], [String.fromCharCode(115,104,97,114,97,98,108,101,95,97,95,54,0),String.fromCharCode(119,104,105,116,101,108,105,115,116,0)]]);
       let arrowS: Array<any> = [309, 440];
      while (!Array.from(calendarR.keys()).includes(`${arrowS.length}`)) {
         arrowS = [3 << (Math.min(3, Math.abs(calendarR.size)))];
         break;
      }
      if ((arrowS.length - 1) < 5 && 1 < (arrowS.length - listB.length)) {
         arrowS.push(arrowS.length);
      }
      while (2 < (arrowS.length % 5) || (arrowS.length % (Math.max(calendarR.size, 10))) < 5) {
          let actionsx = false;
         calendarR = new Map([[`${calendarR.size}`, arrowS.length + calendarR.size]]);
         actionsx = (!actionsx ? !actionsx : actionsx);
         break;
      }
         calendarR = new Map([[`${calendarR.size}`, calendarR.size]]);
      let predictionbannershared3 = 8870949 <= listB.length;
      do {
         listB = [3];
         if (predictionbannershared3) {
            break;
         }
      } while ((5 >= (calendarR.size % (Math.max(9, listB.length))) || (listB.length % 5) >= 4) && predictionbannershared3);
      while ((arrowS.length % (Math.max(calendarR.size, 7))) < 3 || 3 < (arrowS.length % (Math.max(calendarR.size, 3)))) {
         calendarR = new Map([[`${calendarR.size}`, calendarR.size * 2]]);
         break;
      }
      let refreshborderlessH = 5682814 >= calendarR.size;
      do {
         calendarR = new Map([[`${calendarR.size}`, arrowS.length >> (Math.min(3, Math.abs(calendarR.size)))]]);
         if (refreshborderlessH) {
            break;
         }
      } while (((arrowS.length + calendarR.size) <= 4) && refreshborderlessH);
          let homec = 4.0;
          let fillz: Array<any> = [909, 266, 86];
          let hejim: Array<any> = [51, 941, 739];
         arrowS.push(2);
         homec -= 3 | fillz.length;
         fillz.push(fillz.length);
         hejim = [fillz.length];
         listB.push(1);
      basketballmatchdetailbg_ = [1];
      if (libavcodecK) {
         break;
      }
   } while (libavcodecK && (2.51 == (4.20 + librrcS)));

      console.log("error when open link: ", error);
    }
  };

  const getZfStatus = async (transID: string) => {
    let result;

    try {
      result = await wawaCountry.getFinzfTransaction({
        transactionId: transID,
      });

      if (!result) {
        throw 'not found';
      }

    } catch (e) {
       let recommendationM: Map<any, any> = new Map([[String.fromCharCode(97,110,110,101,120,0),992], [String.fromCharCode(107,95,54,52,95,101,120,99,101,112,116,105,111,110,115,0),496], [String.fromCharCode(110,97,116,105,118,101,95,103,95,53,57,0),460]]);
    let index9 = String.fromCharCode(105,95,53,48,95,112,97,115,116,101,108,0);
    let eighteenl = String.fromCharCode(114,101,97,115,115,101,109,98,108,121,0);
    let const__oe = String.fromCharCode(116,95,53,54,95,115,116,114,105,114,101,112,108,97,99,101,0);
    let ewardedR = String.fromCharCode(109,100,97,121,95,55,95,56,50,0);
    let watchQ = 2.0;
    let video1 = String.fromCharCode(114,101,99,104,101,99,107,95,117,95,55,49,0);
    let uploadO: Array<any> = [477, 487, 926];
    let f_unlocke = 4.0;
    let connectione: Array<any> = [827, 91, 349];
    let videojsS = 2.0;
    let langkey9: Map<any, any> = new Map([[String.fromCharCode(116,105,110,121,0),762], [String.fromCharCode(102,95,52,55,95,105,110,108,105,110,101,100,0),357]]);
    let iconadslinkU = 0;
       let smallbrightnessg: Map<any, any> = new Map([[String.fromCharCode(108,95,55,53,95,97,116,114,105,109,0),566], [String.fromCharCode(112,114,111,106,101,99,116,105,111,110,95,122,95,49,48,0),114]]);
       let submitZ = 2;
         smallbrightnessg = new Map([[`${smallbrightnessg.size}`, smallbrightnessg.size / (Math.max(9, submitZ))]]);
      while (smallbrightnessg.get(`${submitZ}`) != null) {
         smallbrightnessg.set(`${submitZ}`, smallbrightnessg.size);
         break;
      }
       let footballfiledlayoutX = String.fromCharCode(117,95,52,51,95,111,112,116,103,114,111,117,112,0);
       let mbsplashq = String.fromCharCode(98,101,103,117,110,0);
      while ((1 >> (Math.min(2, Math.abs(smallbrightnessg.size)))) == 4 || 1 == (mbsplashq.length >> (Math.min(2, Math.abs(smallbrightnessg.size))))) {
         mbsplashq = "2";
         break;
      }
      for (let d = 0; d < 2; d++) {
          let interstitialh = String.fromCharCode(117,116,116,111,110,95,48,95,57,49,0);
          let unfill7 = 5.0;
          let calendarC = 5.0;
         submitZ /= Math.max(mbsplashq.length >> (Math.min(Math.abs(2), 4)), 1);
         interstitialh += `${(interstitialh == String.fromCharCode(112,0) ? parseInt(`${unfill7}`) : interstitialh.length)}`;
         unfill7 -= parseFloat(`${parseInt(`${unfill7}`) ^ interstitialh.length}`);
         calendarC -= 1 ^ interstitialh.length;
      }
      while (4 >= (submitZ << (Math.min(Math.abs(3), 4))) || 2 >= (3 << (Math.min(4, Math.abs(submitZ))))) {
         submitZ ^= submitZ | footballfiledlayoutX.length;
         break;
      }
      watchQ *= parseFloat(`${3 | ewardedR.length}`);
   if (!ewardedR.endsWith(`${f_unlocke}`)) {
      ewardedR = `${video1.length}`;
   }
      index9 += `${eighteenl.length}`;
   for (let n = 0; n < 3; n++) {
       let bridgef = String.fromCharCode(117,110,115,101,116,95,121,95,49,48,48,0);
       let appleo = true;
       let privileget = 4.0;
       let bottomt: Map<any, any> = new Map([[String.fromCharCode(103,95,50,49,95,117,110,105,0),String.fromCharCode(115,117,98,115,116,114,105,110,103,95,54,95,50,56,0)], [String.fromCharCode(120,95,53,51,95,114,97,116,105,111,0),String.fromCharCode(101,95,50,54,95,116,101,115,116,110,101,116,115,0)], [String.fromCharCode(117,95,53,56,95,100,101,108,105,118,101,114,121,0),String.fromCharCode(106,117,115,116,0)]]);
       let short_h0_: Map<any, any> = new Map([[String.fromCharCode(110,111,114,109,0),80], [String.fromCharCode(120,102,105,120,101,115,95,100,95,53,56,0),428], [String.fromCharCode(113,95,49,55,95,99,111,110,116,105,110,117,101,0),404]]);
         bottomt = new Map([[`${bottomt.size}`, 2 ^ bottomt.size]]);
          let crownc = String.fromCharCode(100,117,112,108,105,99,97,116,101,115,95,121,95,53,51,0);
          let sheetC = 1.0;
          let latne = String.fromCharCode(99,111,109,112,105,108,101,111,112,116,105,111,110,117,115,101,100,95,101,95,52,55,0);
         appleo = bottomt.size == crownc.length;
         crownc = `${latne.length}`;
         sheetC += parseInt(`${sheetC}`);
         latne = `${parseInt(`${sheetC}`)}`;
      while (bridgef.length > 1) {
         appleo = bridgef.includes(`${appleo}`);
         break;
      }
         short_h0_.set(`${privileget}`, parseInt(`${privileget}`) + 3);
         privileget -= parseFloat(`${3}`);
      for (let d = 0; d < 1; d++) {
          let dangert = String.fromCharCode(118,97,114,115,95,52,95,57,50,0);
          let hejiK = 3;
         bridgef = `${bridgef.length}`;
         dangert += `${dangert.length + hejiK}`;
         hejiK |= dangert.length;
      }
      while (!appleo) {
          let smallsoundh = 0.0;
          let arrowrightwithtailJ = 1.0;
          let bannerg: Map<any, any> = new Map([[String.fromCharCode(110,101,101,100,108,101,0),796], [String.fromCharCode(115,117,98,111,98,106,101,99,116,95,57,95,54,0),560], [String.fromCharCode(101,112,97,102,95,103,95,55,48,0),786]]);
          let accepteda: Array<any> = [135, 851, 771];
          let movies4: Map<any, any> = new Map([[String.fromCharCode(115,121,110,99,104,114,111,110,105,122,101,95,112,95,51,50,0),612], [String.fromCharCode(112,95,56,49,95,99,111,110,116,97,105,110,97,98,108,101,0),108], [String.fromCharCode(109,95,55,50,95,105,110,116,115,0),20]]);
         appleo = null != short_h0_.get(`${smallsoundh}`);
         smallsoundh *= accepteda.length;
         arrowrightwithtailJ += parseFloat(`${1}`);
         bannerg = new Map([[`${movies4.size}`, movies4.size / 1]]);
         accepteda.push(bannerg.size & movies4.size);
         break;
      }
          let shootB = true;
         appleo = 35 < bottomt.size && short_h0_.size < 35;
         shootB = !shootB;
      let armvaB = appleo ? !appleo : appleo;
      do {
         appleo = !bridgef.includes(`${appleo}`);
         if (armvaB) {
            break;
         }
      } while ((!appleo) && armvaB);
      while (3 > (short_h0_.size + 3) && 3 > (bottomt.size + short_h0_.size)) {
          let anythinkI = 3.0;
          let regengS = true;
          let android4 = String.fromCharCode(120,95,56,52,95,116,111,108,111,119,101,114,0);
         bottomt.set(`${short_h0_.size}`, bottomt.size + 2);
         anythinkI -= 1 | android4.length;
         regengS = android4.includes(`${regengS}`);
         break;
      }
      let launcher3 = privileget <= 7347709.0;
      do {
         privileget += parseFloat(`${bottomt.size & short_h0_.size}`);
         if (launcher3) {
            break;
         }
      } while ((5.67 <= (privileget * 3.9)) && launcher3);
         appleo = null == short_h0_.get(`${privileget}`);
      if (!appleo) {
         short_h0_.set(`${appleo}`, 1);
      }
         privileget += parseFloat(`${3 >> (Math.min(1, Math.abs(bottomt.size)))}`);
      if ((short_h0_.size - bridgef.length) >= 1) {
         short_h0_ = new Map([[`${bottomt.size}`, bottomt.size]]);
      }
      eighteenl = `${ewardedR.length & 3}`;
   }
      eighteenl += `${2 & uploadO.length}`;
   if (ewardedR.includes(`${uploadO.length}`)) {
      uploadO = [3];
   }
   for (let g = 0; g < 1; g++) {
       let borderlessy = false;
       let logousert = String.fromCharCode(117,110,114,111,117,110,100,101,100,95,51,95,56,56,0);
       let predictionwinm = 3;
       let lightt = 3.0;
      let controlY = 6979030 <= predictionwinm;
      do {
         predictionwinm %= Math.max(logousert.length, 1);
         if (controlY) {
            break;
         }
      } while (controlY && (logousert.length == 3));
      let vertical7 = predictionwinm <= 8376973;
      do {
         predictionwinm >>= Math.min(Math.abs(predictionwinm), 3);
         if (vertical7) {
            break;
         }
      } while (vertical7 && (1.77 < lightt));
         predictionwinm <<= Math.min(2, Math.abs(predictionwinm & logousert.length));
         borderlessy = parseFloat(`${predictionwinm}`) < lightt;
          let iconeditD = String.fromCharCode(97,117,116,111,114,111,116,97,116,101,95,119,95,53,54,0);
         logousert += "1";
         iconeditD += `${iconeditD.length & 1}`;
         logousert += `${1 / (Math.max(predictionwinm, 7))}`;
      for (let i = 0; i < 1; i++) {
          let referrerc = String.fromCharCode(109,105,108,108,105,115,95,99,95,57,52,0);
          let thumbnail_: Map<any, any> = new Map([[String.fromCharCode(118,111,98,115,117,98,95,98,95,57,48,0),679], [String.fromCharCode(98,95,49,56,95,109,111,100,105,102,105,99,97,116,105,111,110,115,0),36], [String.fromCharCode(119,95,51,95,112,114,111,109,105,110,101,110,116,0),144]]);
         borderlessy = 2 < logousert.length;
         referrerc += `${referrerc.length | thumbnail_.size}`;
         thumbnail_.set(referrerc, referrerc.length / 1);
      }
         predictionwinm /= Math.max(logousert.length, 3);
      while (3.26 <= lightt || 2.78 <= (3.26 + lightt)) {
          let twitter4 = 5.0;
          let iconrefreshh = 1.0;
          let gmailO = String.fromCharCode(112,114,105,118,97,116,101,95,53,95,51,49,0);
          let libzeusB = 2;
          let notificationfillempty0 = 5.0;
         borderlessy = 37 == (notificationfillempty0 + libzeusB);
         twitter4 /= Math.max(2, parseFloat(`${gmailO.length}`));
         iconrefreshh /= Math.max(2, parseFloat(`${2}`));
         gmailO += `${gmailO.length}`;
         libzeusB /= Math.max(parseInt(`${iconrefreshh}`) * gmailO.length, 5);
         notificationfillempty0 -= parseFloat(`${parseInt(`${iconrefreshh}`)}`);
         break;
      }
      for (let d = 0; d < 3; d++) {
         predictionwinm <<= Math.min(3, logousert.length);
      }
          let defaultprofilepicO = String.fromCharCode(104,100,110,111,100,101,0);
          let mbridgei: Array<any> = [806, 835, 62];
         logousert += `${logousert.length * 3}`;
         defaultprofilepicO += `${defaultprofilepicO.length << (Math.min(1, mbridgei.length))}`;
         mbridgei.push(mbridgei.length);
         predictionwinm += parseInt(`${lightt}`);
      videojsS /= Math.max(3, ewardedR.length);
   }
   let yellowcirclebgQ = langkey9.size >= 8989190;
   do {
      langkey9.set(`${f_unlocke}`, recommendationM.size);
      if (yellowcirclebgQ) {
         break;
      }
   } while ((!Array.from(langkey9.keys()).includes(`${connectione.length}`)) && yellowcirclebgQ);
      watchQ *= parseFloat(`${parseInt(`${videojsS}`)}`);
   while (index9.length <= connectione.length) {
       let fcdaebecbcbafcdfceaaeccfeacdb5 = String.fromCharCode(116,104,114,101,101,100,111,115,116,114,0);
       let leagueB = 3;
       let mintegralk = String.fromCharCode(115,116,105,99,107,101,114,115,101,116,95,51,95,50,54,0);
       let analytics5: Array<any> = [95, 208, 967];
       let anythinkV = true;
          let membershipn = 2.0;
         mintegralk = `${(fcdaebecbcbafcdfceaaeccfeacdb5 == String.fromCharCode(102,0) ? analytics5.length : fcdaebecbcbafcdfceaaeccfeacdb5.length)}`;
         membershipn *= parseFloat(`${parseInt(`${membershipn}`)}`);
      if (fcdaebecbcbafcdfceaaeccfeacdb5.startsWith(`${anythinkV}`)) {
          let baseR = String.fromCharCode(106,95,49,55,95,116,105,108,105,110,103,0);
          let encrypts = 1;
         anythinkV = fcdaebecbcbafcdfceaaeccfeacdb5.startsWith(`${anythinkV}`);
         baseR += `${baseR.length}`;
         encrypts >>= Math.min(2, Math.abs(baseR.length - 2));
      }
      while (anythinkV) {
          let imagesO = 1.0;
          let iconpipexpandE = 0;
         anythinkV = (analytics5.length / (Math.max(10, mintegralk.length))) <= 24;
         imagesO /= Math.max(3, 1 >> (Math.min(Math.abs(iconpipexpandE), 1)));
         iconpipexpandE >>= Math.min(3, Math.abs(3 + iconpipexpandE));
         break;
      }
       let airbnbstarselectedp = String.fromCharCode(99,95,55,51,95,102,114,97,109,101,113,117,101,117,101,0);
      let utilse = anythinkV ? !anythinkV : anythinkV;
      do {
         anythinkV = !airbnbstarselectedp.startsWith(`${anythinkV}`);
         if (utilse) {
            break;
         }
      } while ((fcdaebecbcbafcdfceaaeccfeacdb5.length <= 5) && utilse);
         fcdaebecbcbafcdfceaaeccfeacdb5 += `${mintegralk.length}`;
          let whitez = String.fromCharCode(99,108,109,117,108,95,49,95,52,55,0);
          let componentregistryL: Array<any> = [979, 596];
         anythinkV = whitez.startsWith(`${leagueB}`);
         whitez += `${componentregistryL.length}`;
         componentregistryL.push(componentregistryL.length >> (Math.min(3, componentregistryL.length)));
      if (mintegralk.endsWith(`${analytics5.length}`)) {
         mintegralk = `${analytics5.length}`;
      }
      while (1 > (analytics5.length | airbnbstarselectedp.length) || (analytics5.length | 1) > 4) {
         analytics5.push(((anythinkV ? 4 : 3) % 1));
         break;
      }
      for (let s = 0; s < 2; s++) {
         analytics5.push(analytics5.length * mintegralk.length);
      }
          let proxyV = String.fromCharCode(112,97,114,97,109,101,116,114,105,99,95,55,95,53,51,0);
         leagueB &= (mintegralk.length << (Math.min(1, Math.abs((anythinkV ? 1 : 1)))));
         proxyV = `${1 << (Math.min(2, proxyV.length))}`;
      let yellowredcardj = String.fromCharCode(117,52,119,105,110,0) == airbnbstarselectedp;
      do {
          let gifto = String.fromCharCode(108,95,49,55,95,102,97,117,108,116,0);
          let searchb = 5;
         airbnbstarselectedp += `${(mintegralk == String.fromCharCode(49,0) ? searchb : mintegralk.length)}`;
         gifto += `${gifto.length}`;
         searchb %= Math.max(gifto.length << (Math.min(Math.abs(1), 5)), 4);
         if (yellowredcardj) {
            break;
         }
      } while ((3 >= airbnbstarselectedp.length || mintegralk == String.fromCharCode(48,0)) && yellowredcardj);
       let clockA = String.fromCharCode(98,95,54,48,95,114,97,100,98,103,0);
      let complete1 = 7431854 <= leagueB;
      do {
         leagueB += ((anythinkV ? 2 : 3) << (Math.min(Math.abs(leagueB), 1)));
         if (complete1) {
            break;
         }
      } while (((leagueB * 2) < 4) && complete1);
         airbnbstarselectedp = `${(String.fromCharCode(107,0) == airbnbstarselectedp ? airbnbstarselectedp.length : mintegralk.length)}`;
      index9 = `${parseInt(`${watchQ}`) | 2}`;
      break;
   }
       let sliderh: Map<any, any> = new Map([[String.fromCharCode(100,95,56,49,95,116,117,114,98,117,108,101,110,99,101,0),374], [String.fromCharCode(114,95,52,56,95,97,112,111,108,108,111,0),640]]);
       let renderY = true;
         renderY = sliderh.size <= 9;
         renderY = (((!renderY ? sliderh.size : 14) >> (Math.min(Math.abs(sliderh.size), 5))) >= 21);
      uploadO.push(2);
   let o_centerD = 4912254 >= connectione.length;
   do {
       let jingdongY = String.fromCharCode(104,95,54,53,95,115,111,99,107,0);
       let moonv: Array<any> = [533, 634];
       let collectiont = String.fromCharCode(118,101,108,111,99,105,116,121,0);
       let iconarrowrightR = String.fromCharCode(98,95,50,57,95,104,105,103,104,108,105,103,104,116,97,98,108,101,0);
         jingdongY = `${moonv.length / 2}`;
         jingdongY = `${collectiont.length}`;
      for (let j = 0; j < 3; j++) {
          let libflipperc = 4;
          let tumbnailt = String.fromCharCode(100,97,116,97,104,97,115,104,0);
          let libavdevicef = true;
          let megaphonef = String.fromCharCode(113,117,97,110,116,105,116,121,0);
          let ajaxy: Map<any, any> = new Map([[String.fromCharCode(112,97,114,101,110,116,115,95,110,95,52,57,0),String.fromCharCode(112,95,52,49,95,100,105,115,97,112,112,101,97,114,0)], [String.fromCharCode(109,95,55,51,0),String.fromCharCode(100,101,115,105,103,110,95,100,95,54,51,0)], [String.fromCharCode(97,119,97,105,116,105,110,103,95,99,95,51,51,0),String.fromCharCode(105,112,108,105,109,97,103,101,95,111,95,54,0)]]);
         moonv.push(ajaxy.size % 2);
         libflipperc <<= Math.min(Math.abs(megaphonef.length % (Math.max(3, 5))), 1);
         tumbnailt = `${(tumbnailt.length + (libavdevicef ? 3 : 3))}`;
         libavdevicef = (90 >= ((libavdevicef ? 90 : megaphonef.length) & megaphonef.length));
         ajaxy = new Map([[megaphonef, tumbnailt.length | megaphonef.length]]);
      }
         moonv = [collectiont.length];
      if (iconarrowrightR.endsWith(collectiont)) {
         iconarrowrightR = `${moonv.length}`;
      }
          let ewardedh = 4.0;
          let condensedG = 5.0;
          let anythinkq = String.fromCharCode(98,105,116,114,101,118,95,121,95,52,50,0);
         moonv.push(moonv.length | jingdongY.length);
         ewardedh -= parseInt(`${condensedG}`) & anythinkq.length;
         condensedG *= parseInt(`${ewardedh}`);
         anythinkq += "1";
         jingdongY = `${moonv.length - collectiont.length}`;
         collectiont = `${(String.fromCharCode(48,0) == collectiont ? collectiont.length : moonv.length)}`;
      let animationsx = iconarrowrightR.length <= 5048222;
      do {
         iconarrowrightR += `${moonv.length}`;
         if (animationsx) {
            break;
         }
      } while (animationsx && (5 < iconarrowrightR.length));
      let hoverF = jingdongY == String.fromCharCode(97,118,106,108,95,97,50,0);
      do {
         jingdongY = `${collectiont.length}`;
         if (hoverF) {
            break;
         }
      } while (hoverF && (jingdongY.length < 4));
         iconarrowrightR += `${jingdongY.length - 1}`;
          let targetK = String.fromCharCode(102,95,49,95,97,108,97,99,0);
         iconarrowrightR = "1";
         targetK += `${targetK.length & targetK.length}`;
      connectione = [index9.length];
      if (o_centerD) {
         break;
      }
   } while (o_centerD && (2 < (connectione.length % 5) && 1 < (5 % (Math.max(3, langkey9.size)))));

      setIsLoading(false);

   for (let d = 0; d < 3; d++) {
      index9 = `${uploadO.length | 3}`;
   }
      uploadO = [const__oe.length % (Math.max(1, 10))];
   while (!const__oe.startsWith(`${connectione.length}`)) {
       let readv = 4.0;
       let circleP = String.fromCharCode(119,95,55,53,95,109,101,109,100,98,0);
       let googleF = true;
       let iconfeedback2: Map<any, any> = new Map([[String.fromCharCode(113,95,56,49,95,118,97,97,112,105,0),false ], [String.fromCharCode(101,110,97,98,108,101,95,118,95,57,53,0),false ], [String.fromCharCode(119,95,51,55,95,115,121,109,0),false ]]);
       let iconqqA = String.fromCharCode(107,95,56,48,95,115,97,109,112,108,101,102,109,116,0);
      for (let c = 0; c < 3; c++) {
         readv *= parseInt(`${readv}`) % 1;
      }
      for (let j = 0; j < 2; j++) {
          let phonen = 5;
          let buildp: Map<any, any> = new Map([[String.fromCharCode(98,95,53,50,95,98,110,98,105,110,0),223], [String.fromCharCode(111,112,101,110,105,110,103,0),891], [String.fromCharCode(116,116,97,100,115,112,95,50,95,51,51,0),583]]);
         iconfeedback2 = new Map([[`${iconfeedback2.size}`, (1 << (Math.min(3, Math.abs((googleF ? 5 : 1)))))]]);
         phonen |= phonen;
         buildp = new Map([[`${buildp.size}`, phonen]]);
      }
      for (let d = 0; d < 1; d++) {
          let righti = 1;
         iconqqA += `${((googleF ? 3 : 1) + circleP.length)}`;
         righti &= righti;
      }
      while (iconqqA != String.fromCharCode(81,0)) {
          let libhermes0 = 0.0;
         circleP += `${(String.fromCharCode(114,0) == circleP ? parseInt(`${readv}`) : circleP.length)}`;
         libhermes0 /= Math.max(2, parseFloat(`${2}`));
         break;
      }
      if ((iconqqA.length << (Math.min(Math.abs(3), 4))) >= 3) {
         iconfeedback2 = new Map([[circleP, circleP.length]]);
      }
         circleP += `${iconqqA.length >> (Math.min(1, circleP.length))}`;
          let hejiC = 1.0;
         circleP = `${iconqqA.length}`;
         hejiC -= parseFloat(`${2}`);
      for (let t = 0; t < 2; t++) {
         iconfeedback2.set(circleP, circleP.length);
      }
         googleF = (readv - circleP.length) >= 60.80;
          let libavfilterx = String.fromCharCode(114,101,97,100,102,114,97,109,101,95,54,95,56,48,0);
         googleF = 82 == libavfilterx.length;
         iconqqA = "1";
      while (iconqqA.length > 2) {
         circleP += `${2 + circleP.length}`;
         break;
      }
         googleF = iconfeedback2.get(`${readv}`) == null;
         googleF = ((iconqqA.length << (Math.min(2, Math.abs((googleF ? 46 : iconqqA.length))))) <= 46);
         readv += 3 - circleP.length;
      connectione.push(eighteenl.length | 2);
      break;
   }
      ewardedR += `${index9.length}`;
      f_unlocke /= Math.max((index9 == String.fromCharCode(89,0) ? recommendationM.size : index9.length), 3);
      ewardedR = "1";
   for (let s = 0; s < 3; s++) {
      eighteenl += `${const__oe.length}`;
   }
      uploadO.push(uploadO.length << (Math.min(2, Math.abs(langkey9.size))));
   if ((recommendationM.size << (Math.min(const__oe.length, 2))) < 4 || 5 < (4 << (Math.min(2, const__oe.length)))) {
      const__oe += `${ewardedR.length >> (Math.min(Math.abs(1), 2))}`;
   }
       let unimplementedview7 = 5.0;
       let with_kV: Map<any, any> = new Map([[String.fromCharCode(105,110,112,117,116,95,53,95,54,54,0),String.fromCharCode(114,95,57,95,110,109,104,100,0)], [String.fromCharCode(103,95,49,51,95,118,97,105,108,97,98,105,108,105,116,121,0),String.fromCharCode(99,111,108,111,114,95,56,95,51,55,0)]]);
       let chinaq = 1;
         chinaq %= Math.max(5, 3 << (Math.min(4, Math.abs(chinaq))));
      for (let v = 0; v < 3; v++) {
          let notificationgrayJ = false;
          let yellowredcardV = String.fromCharCode(119,95,56,95,97,115,110,116,0);
         with_kV = new Map([[`${with_kV.size}`, ((notificationgrayJ ? 3 : 1) << (Math.min(Math.abs(2), 1)))]]);
         notificationgrayJ = (yellowredcardV.length >> (Math.min(1, yellowredcardV.length))) <= 45;
      }
      for (let l = 0; l < 2; l++) {
         chinaq <<= Math.min(Math.abs(parseInt(`${unimplementedview7}`) - 2), 1);
      }
         with_kV = new Map([[`${with_kV.size}`, chinaq]]);
      for (let j = 0; j < 1; j++) {
          let containerK = 1.0;
          let rncoreA = 3;
          let mimoZ = String.fromCharCode(114,95,51,54,95,99,108,101,97,110,115,101,0);
         with_kV.set(`${unimplementedview7}`, parseInt(`${unimplementedview7}`));
         containerK /= Math.max(mimoZ.length, 3);
         rncoreA *= 1 + mimoZ.length;
      }
      eighteenl += `${langkey9.size % (Math.max(2, parseInt(`${videojsS}`)))}`;
      ewardedR = `${parseInt(`${f_unlocke}`) << (Math.min(2, Math.abs(parseInt(`${watchQ}`))))}`;
   let reddownarrowL = langkey9.size >= 7104787;
   do {
       let turndownu = 2;
       let iconcalendarz = 5.0;
       let iconarrowleftZ = String.fromCharCode(110,95,50,57,95,103,101,116,0);
         iconcalendarz /= Math.max(3, parseFloat(`${turndownu / 1}`));
         iconcalendarz += parseFloat(`${iconarrowleftZ.length / (Math.max(2, 10))}`);
         turndownu %= Math.max(3, 4);
      while (iconarrowleftZ.length < 1) {
          let basketballdetailsbgL: Map<any, any> = new Map([[String.fromCharCode(107,95,53,50,95,99,97,112,116,117,114,101,100,0),399], [String.fromCharCode(112,114,111,99,101,101,100,95,121,95,57,51,0),743], [String.fromCharCode(101,120,105,116,0),113]]);
          let halffieldimage5: Array<any> = [String.fromCharCode(99,97,114,100,104,111,108,100,101,114,95,120,95,54,54,0), String.fromCharCode(116,121,112,101,100,101,102,115,95,108,95,54,51,0)];
         iconarrowleftZ = `${turndownu}`;
         basketballdetailsbgL = new Map([[`${basketballdetailsbgL.size}`, 2]]);
         halffieldimage5.push(halffieldimage5.length);
         break;
      }
         iconcalendarz /= Math.max(3, parseFloat(`${iconarrowleftZ.length * 1}`));
      for (let u = 0; u < 2; u++) {
         iconcalendarz *= parseFloat(`${iconarrowleftZ.length | 3}`);
      }
      let redscoreballg = 7344666 >= turndownu;
      do {
         turndownu *= turndownu * iconarrowleftZ.length;
         if (redscoreballg) {
            break;
         }
      } while (redscoreballg && (4 <= iconarrowleftZ.length));
          let borderlessL = 1.0;
         iconarrowleftZ = `${iconarrowleftZ.length}`;
         borderlessL *= 1;
      if ((iconcalendarz * 3.35) == 2.23) {
         iconcalendarz *= parseFloat(`${parseInt(`${iconcalendarz}`) >> (Math.min(1, Math.abs(turndownu)))}`);
      }
      langkey9.set(`${f_unlocke}`, 1 / (Math.max(parseInt(`${iconcalendarz}`), 3)));
      if (reddownarrowL) {
         break;
      }
   } while ((langkey9.size == 4) && reddownarrowL);
      setIsBtnEnable(true);

   for (let f = 0; f < 3; f++) {
       let skipj: Array<any> = [677, 306];
       let privacyR = String.fromCharCode(116,95,55,54,95,102,114,97,109,101,105,110,102,111,0);
       let footballtrophyM = 1;
       let baidu6: Array<any> = [329, 711];
       let libreact_ = String.fromCharCode(104,95,49,49,95,99,105,110,101,112,97,107,0);
      if (2 <= privacyR.length) {
          let libglogv: Array<any> = [String.fromCharCode(97,116,111,109,115,95,109,95,53,53,0), String.fromCharCode(112,97,114,105,116,121,95,102,95,49,56,0)];
          let awayo: Array<any> = [664, 831, 178];
         footballtrophyM ^= footballtrophyM - 1;
         libglogv = [awayo.length];
         awayo = [1 << (Math.min(1, libglogv.length))];
      }
      while ((baidu6.length >> (Math.min(Math.abs(2), 2))) == 1) {
         baidu6 = [2];
         break;
      }
         libreact_ = "1";
      while (!privacyR.startsWith(`${baidu6.length}`)) {
         privacyR = `${privacyR.length - 2}`;
         break;
      }
         libreact_ = `${privacyR.length % (Math.max(libreact_.length, 6))}`;
         privacyR = `${2 | footballtrophyM}`;
      let predictionbannersharedT = footballtrophyM <= 6387306;
      do {
          let rocketZ = 2.0;
         footballtrophyM += 1;
         rocketZ -= parseFloat(`${3}`);
         if (predictionbannersharedT) {
            break;
         }
      } while (predictionbannersharedT && ((3 << (Math.min(1, baidu6.length))) >= 5));
      for (let l = 0; l < 2; l++) {
         skipj = [(String.fromCharCode(83,0) == libreact_ ? libreact_.length : skipj.length)];
      }
          let kuaishouI = 1.0;
          let basef = 4;
         footballtrophyM <<= Math.min(4, Math.abs(2));
         kuaishouI /= Math.max(parseInt(`${kuaishouI}`) + basef, 2);
         basef &= 2 - parseInt(`${kuaishouI}`);
      let securityj = 5498862 >= footballtrophyM;
      do {
          let placeholderx = 4.0;
          let google1 = String.fromCharCode(100,101,99,111,109,112,97,110,100,0);
          let internetk = String.fromCharCode(108,95,54,54,95,98,108,105,110,107,0);
          let gesturet = String.fromCharCode(112,95,53,52,95,100,101,115,116,114,117,99,116,105,118,101,0);
         footballtrophyM |= 3;
         placeholderx /= Math.max(internetk.length, 4);
         google1 = `${gesturet.length}`;
         internetk = `${google1.length}`;
         gesturet += `${2 | internetk.length}`;
         if (securityj) {
            break;
         }
      } while ((!baidu6.includes(footballtrophyM)) && securityj);
          let privacyp: Array<any> = [785, 7];
         skipj = [privacyp.length ^ 2];
      if (2 > (skipj.length & libreact_.length) || (libreact_.length & 2) > 4) {
         libreact_ += `${libreact_.length - skipj.length}`;
      }
          let subinW: Array<any> = [138, 264];
          let libavfilterN = 0.0;
          let assetsV = 1.0;
         baidu6 = [privacyR.length - 1];
         subinW = [subinW.length];
         libavfilterN /= Math.max(parseFloat(`${3 << (Math.min(Math.abs(parseInt(`${assetsV}`)), 4))}`), 1);
         assetsV += parseFloat(`${subinW.length - parseInt(`${libavfilterN}`)}`);
         privacyR = `${(String.fromCharCode(101,0) == libreact_ ? baidu6.length : libreact_.length)}`;
         skipj.push(3 - footballtrophyM);
      uploadO.push(3);
   }
      ewardedR += `${ewardedR.length}`;
   let nativemoduleH = uploadO.length >= 7462711;
   do {
      uploadO.push(1);
      if (nativemoduleH) {
         break;
      }
   } while (nativemoduleH && (4 < (const__oe.length + uploadO.length)));
       let bottomg = String.fromCharCode(101,95,57,51,95,104,101,97,100,115,101,116,0);
       let modelsg = true;
       let questicons: Array<any> = [146, 353, 350];
       let footballfield6 = String.fromCharCode(116,121,112,101,99,111,100,101,95,111,95,50,53,0);
      let i_animation2 = modelsg ? !modelsg : modelsg;
      do {
          let stepl: Map<any, any> = new Map([[String.fromCharCode(99,111,109,97,110,100,95,98,95,53,55,0),294], [String.fromCharCode(109,95,56,54,95,111,99,115,112,0),711], [String.fromCharCode(111,114,105,103,110,97,108,95,118,95,52,51,0),372]]);
          let notificationt = 3.0;
          let footballfieldf = String.fromCharCode(99,111,110,100,105,116,105,111,110,95,117,95,55,55,0);
         modelsg = footballfield6.length >= 51;
         stepl = new Map([[`${stepl.size}`, 1 - footballfieldf.length]]);
         notificationt += parseInt(`${notificationt}`);
         footballfieldf += `${parseInt(`${notificationt}`)}`;
         if (i_animation2) {
            break;
         }
      } while (i_animation2 && (1 < questicons.length || (questicons.length % 1) < 1));
      let optionsp = modelsg ? !modelsg : modelsg;
      do {
         modelsg = 92 == bottomg.length;
         if (optionsp) {
            break;
         }
      } while ((3 == bottomg.length) && optionsp);
      let holder3 = bottomg.length <= 9776280;
      do {
         bottomg = `${1 - bottomg.length}`;
         if (holder3) {
            break;
         }
      } while ((1 <= bottomg.length) && holder3);
          let renewy = String.fromCharCode(112,114,111,118,105,100,101,114,115,95,120,95,54,51,0);
          let nativeZ: Array<any> = [754, 233];
          let statione = 5.0;
         footballfield6 = `${nativeZ.length / 3}`;
         renewy += `${parseInt(`${statione}`)}`;
         nativeZ.push(1);
         statione /= Math.max(4, parseFloat(`${parseInt(`${statione}`)}`));
      let iconbackwhites = modelsg ? !modelsg : modelsg;
      do {
         modelsg = modelsg || footballfield6.length >= 55;
         if (iconbackwhites) {
            break;
         }
      } while (iconbackwhites && (bottomg.length == 4));
          let foregroundu = 5.0;
          let zoomV = true;
          let latnS: Array<any> = [579, 32, 249];
         questicons = [parseInt(`${foregroundu}`) | 2];
         foregroundu -= (parseFloat(`${3 ^ (zoomV ? 1 : 1)}`));
         zoomV = !zoomV;
         latnS.push(2);
       let indicatorz = 2.0;
       let playercommona = 0.0;
      while (footballfield6.length <= parseInt(`${playercommona}`)) {
         footballfield6 = `${parseInt(`${indicatorz}`) - footballfield6.length}`;
         break;
      }
      recommendationM.set(`${uploadO.length}`, 2);
   let libavfilterL = 5312235 >= ewardedR.length;
   do {
       let launcherK = 5.0;
      for (let o = 0; o < 2; o++) {
         launcherK /= Math.max(parseFloat(`${1 / (Math.max(7, parseInt(`${launcherK}`)))}`), 5);
      }
       let minimize9 = 3;
       let incidentk = 2;
      if (1 < (minimize9 ^ incidentk) || 1 < (1 ^ incidentk)) {
         incidentk >>= Math.min(Math.abs(minimize9), 3);
      }
      ewardedR = "1";
      if (libavfilterL) {
         break;
      }
   } while (libavfilterL && (1 > (4 + ewardedR.length)));
   while (3.55 >= (3.66 + f_unlocke)) {
      f_unlocke *= 1 + video1.length;
      break;
   }
       let default_xD = 1.0;
      if (1.71 == default_xD) {
         default_xD += parseFloat(`${parseInt(`${default_xD}`) + parseInt(`${default_xD}`)}`);
      }
         default_xD += parseFloat(`${3 % (Math.max(parseInt(`${default_xD}`), 3))}`);
      for (let i = 0; i < 1; i++) {
         default_xD -= parseFloat(`${parseInt(`${default_xD}`)}`);
      }
      ewardedR += `${parseInt(`${watchQ}`) | iconadslinkU}`;
   if (recommendationM.get(`${f_unlocke}`) == null) {
      f_unlocke *= 2 ^ parseInt(`${f_unlocke}`);
   }
   while (video1.length == 4) {
      videojsS *= (String.fromCharCode(79,0) == video1 ? ewardedR.length : video1.length);
      break;
   }
      eighteenl = `${ewardedR.length}`;
      eighteenl = `${recommendationM.size % 2}`;
   let signinup6 = watchQ >= 4975759.0;
   do {
      watchQ *= parseFloat(`${3 - uploadO.length}`);
      if (signinup6) {
         break;
      }
   } while (signinup6 && (3.75 <= (watchQ * 3.65)));
      return;
    }

    console.log("order status: ", result);

    if (result.transaction_status_string === "COMPLETED") {
      handleRefresh();
      if (wawaLibglog.isLogin(userState.user)) {
        setDialogText(successDialogText);
        setIsDialogOpen(true);
        setIsSuccess(true);
        

        if (currentPurchase && currentPurchase.transactionId) {
          wawaSina.zfPaymentSuccessTimesAnalytics({
            productIdentifier: result.product_id,
            transactionId: result.transaction_id,
            price: membershipSelected.promoPrice ?? membershipSelected.price,
            currency: membershipSelected.currency.currencyCode,
          });
        }
      } else {
        dispatch(setShowGuestPurchaseSuccess(true));
        setIsLoading(false);
        setIsBtnEnable(true);
        navigation.goBack();
      }
      clearTimeout(pendingTimeoutRef.current);
    } else if (result.transaction_status_string === "FAILED") {
      setDialogText(failedDialogText);
      setIsDialogOpen(true);
      clearTimeout(pendingTimeoutRef.current);
    }
    
    
    
    
    
    else {
      console.log("order still in progress");
      dispatch(setShowPurchasePending(true));
      navigation.goBack();
    }
  };

  const saveFinishIAP = async (transStatus: string, error: any) => {
    const iapTrans = {
      user_id: userState.user?.userId ?? "",
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

    if (currentPurchase && currentPurchase.transactionId) {
      wawaSina.googlePaymentSuccessTimesAnalytics({
        productIdentifier: currentPurchase.productId,
        signature: currentPurchase.signatureAndroid,
        transactionId: currentPurchase.transactionId,
        purchaseData: currentPurchase.dataAndroid,
        price: membershipSelected.promoPrice ?? membershipSelected.price,
        currency: membershipSelected.currency.currencyCode,
      });
    }

    try {
      const result = await wawaCountry.postAndroidIAP(iapTrans);

      console.log("validate iap result");
      console.log(result);
      return result.data.data;
    } catch (error) {
       let floaterV: Array<any> = [String.fromCharCode(115,111,108,97,110,97,95,109,95,49,48,48,0), String.fromCharCode(100,101,115,101,108,101,99,116,105,111,110,0)];
    let actionsh = String.fromCharCode(99,111,110,116,111,108,108,101,114,0);
    let libavutilH = 5.0;
    let questt: Map<any, any> = new Map([[String.fromCharCode(111,98,106,116,120,116,95,57,95,54,54,0),460], [String.fromCharCode(112,95,49,51,95,111,99,116,101,116,0),922]]);
    let loginE = String.fromCharCode(101,95,55,48,95,119,104,105,108,101,0);
    let statisticsinactivef = String.fromCharCode(118,95,49,48,95,100,105,103,101,115,116,98,121,111,98,106,0);
    let sportsy = String.fromCharCode(117,110,114,101,115,111,108,118,101,100,95,108,95,55,55,0);
    let areaD = 0;
    let downloaded8: Map<any, any> = new Map([[String.fromCharCode(97,108,105,103,110,109,101,110,116,95,103,95,54,54,0),442], [String.fromCharCode(112,115,115,104,0),74], [String.fromCharCode(104,95,53,50,95,99,97,115,101,115,0),884]]);
    let footballfiledlayoutN = String.fromCharCode(121,95,54,50,95,99,111,108,111,117,114,0);
    let statisticsactivea = 3;
    let memberM = 5;
   while (4.66 == (parseFloat(`${statisticsinactivef.length}`) - libavutilH)) {
      libavutilH += parseFloat(`${statisticsinactivef.length}`);
      break;
   }
       let dacccfaabfbcbadeebddcabacdffdbU = true;
       let membership7 = String.fromCharCode(109,117,120,101,114,115,95,120,95,51,53,0);
         membership7 = `${(String.fromCharCode(49,0) == membership7 ? (dacccfaabfbcbadeebddcabacdffdbU ? 2 : 2) : membership7.length)}`;
      let fieldh = membership7 == String.fromCharCode(50,110,112,113,97,0);
      do {
         membership7 = "1";
         if (fieldh) {
            break;
         }
      } while ((!dacccfaabfbcbadeebddcabacdffdbU) && fieldh);
       let shootnogoali = false;
       let iconrightorange1 = true;
         iconrightorange1 = !dacccfaabfbcbadeebddcabacdffdbU;
         iconrightorange1 = !dacccfaabfbcbadeebddcabacdffdbU;
          let whiteb: Map<any, any> = new Map([[String.fromCharCode(111,110,101,95,52,95,57,48,0),false ], [String.fromCharCode(116,105,99,107,101,114,115,95,48,95,57,49,0),true ]]);
          let trophym = String.fromCharCode(119,95,53,54,95,105,116,101,114,97,116,101,0);
         dacccfaabfbcbadeebddcabacdffdbU = membership7.length == 39;
         whiteb = new Map([[`${whiteb.size}`, 2]]);
         trophym = "1";
      sportsy += `${(statisticsinactivef == String.fromCharCode(67,0) ? statisticsinactivef.length : questt.size)}`;
      loginE += `${floaterV.length}`;
      questt = new Map([[actionsh, actionsh.length]]);
      areaD /= Math.max((actionsh == String.fromCharCode(81,0) ? floaterV.length : actionsh.length), 3);
   while (4 > (floaterV.length ^ 3) || (floaterV.length ^ 3) > 2) {
      loginE += `${parseInt(`${libavutilH}`) & questt.size}`;
      break;
   }
       let l_countj = false;
       let directK = 2.0;
         l_countj = !l_countj;
          let reducery = String.fromCharCode(119,105,114,101,102,114,97,109,101,95,114,95,52,48,0);
         directK += parseFloat(`${parseInt(`${directK}`) / 1}`);
         reducery += "2";
      sportsy += `${1 + sportsy.length}`;
   while (questt.size == floaterV.length) {
      questt = new Map([[loginE, loginE.length & actionsh.length]]);
      break;
   }
   if (sportsy.includes(loginE)) {
      loginE += `${(String.fromCharCode(83,0) == sportsy ? areaD : sportsy.length)}`;
   }
      statisticsinactivef = `${2 * questt.size}`;
   while (loginE.length <= 3) {
       let splashV = String.fromCharCode(102,99,102,115,95,55,95,57,53,0);
       let middleM = String.fromCharCode(100,95,54,54,95,112,111,112,117,108,97,114,0);
       let membership4 = String.fromCharCode(113,95,53,56,95,97,103,97,105,110,115,116,0);
         membership4 += `${middleM.length}`;
         splashV = `${(membership4 == String.fromCharCode(57,0) ? membership4.length : splashV.length)}`;
      loginE = "1";
      break;
   }
      loginE = `${(actionsh == String.fromCharCode(116,0) ? actionsh.length : loginE.length)}`;

      console.log("error when validate iap: ", error);

       let smallsoundA = String.fromCharCode(116,105,109,101,115,116,97,109,112,101,100,95,100,95,57,57,0);
       let chinal = String.fromCharCode(114,101,115,116,97,114,116,95,122,95,50,56,0);
       let awayplayer0 = 4.0;
      let usernameu = awayplayer0 >= 5801117.0;
      do {
         awayplayer0 += parseFloat(`${smallsoundA.length - chinal.length}`);
         if (usernameu) {
            break;
         }
      } while (usernameu && (smallsoundA.length <= 3));
         awayplayer0 += parseFloat(`${parseInt(`${awayplayer0}`) ^ chinal.length}`);
         smallsoundA = "2";
         chinal += `${1 - chinal.length}`;
      let pauseB = awayplayer0 >= 8538980.0;
      do {
         awayplayer0 += parseFloat(`${parseInt(`${awayplayer0}`)}`);
         if (pauseB) {
            break;
         }
      } while ((smallsoundA.length <= 3) && pauseB);
      if (2.9 >= (awayplayer0 / (Math.max(5.42, 5)))) {
         awayplayer0 /= Math.max(parseFloat(`${3}`), 2);
      }
      let typing_ = 8322049 >= chinal.length;
      do {
         chinal = `${parseInt(`${awayplayer0}`) * 1}`;
         if (typing_) {
            break;
         }
      } while (typing_ && (chinal.endsWith(`${awayplayer0}`)));
          let downarrow9 = String.fromCharCode(102,95,55,53,95,118,99,100,97,116,97,0);
          let collectione = 4.0;
         chinal += `${smallsoundA.length / 1}`;
         downarrow9 = `${downarrow9.length % (Math.max(5, parseInt(`${collectione}`)))}`;
         collectione += parseInt(`${collectione}`);
          let defaultbasketballbg8 = false;
          let anythinkN = false;
         smallsoundA = `${parseInt(`${awayplayer0}`) / 3}`;
         defaultbasketballbg8 = !anythinkN;
         anythinkN = defaultbasketballbg8;
      areaD %= Math.max((String.fromCharCode(75,0) == chinal ? chinal.length : parseInt(`${awayplayer0}`)), 2);
       let eyecloseK = String.fromCharCode(117,95,52,50,95,115,117,98,118,105,100,101,111,0);
       let emojiheartm: Map<any, any> = new Map([[String.fromCharCode(115,108,105,99,101,95,48,95,55,55,0),191], [String.fromCharCode(102,95,55,50,95,99,111,100,101,115,0),875], [String.fromCharCode(105,110,115,116,97,110,116,105,97,116,101,0),912]]);
       let adultF = String.fromCharCode(101,115,115,101,110,99,101,95,57,95,55,50,0);
         emojiheartm.set(`${adultF}`, emojiheartm.size - adultF.length);
      if (2 >= emojiheartm.size) {
         emojiheartm.set(eyecloseK, (eyecloseK == String.fromCharCode(49,0) ? eyecloseK.length : emojiheartm.size));
      }
         emojiheartm.set(adultF, adultF.length << (Math.min(3, eyecloseK.length)));
      while (2 < (4 ^ eyecloseK.length)) {
         eyecloseK += "3";
         break;
      }
      while (5 >= (3 - eyecloseK.length)) {
         eyecloseK += `${emojiheartm.size | adultF.length}`;
         break;
      }
      let emojiN = adultF == String.fromCharCode(49,98,119,0);
      do {
         adultF = `${(String.fromCharCode(84,0) == adultF ? adultF.length : emojiheartm.size)}`;
         if (emojiN) {
            break;
         }
      } while (emojiN && (3 <= adultF.length));
      if ((1 | emojiheartm.size) <= 5 || 1 <= (emojiheartm.size | eyecloseK.length)) {
          let yellowtoredi: Array<any> = [972, 100, 745];
          let iconqq_ = false;
         eyecloseK += `${((iconqq_ ? 3 : 2) << (Math.min(Math.abs(3), 2)))}`;
         yellowtoredi = [yellowtoredi.length - yellowtoredi.length];
         iconqq_ = yellowtoredi.length == 18 || yellowtoredi.length == 18;
      }
         emojiheartm = new Map([[`${emojiheartm.size}`, 2 << (Math.min(3, adultF.length))]]);
       let backwhiteN = String.fromCharCode(112,105,99,116,95,101,95,52,53,0);
      sportsy = `${sportsy.length}`;
   while (4 <= (floaterV.length * 1) && (loginE.length * 1) <= 1) {
      floaterV = [actionsh.length];
      break;
   }
   while (questt.size >= 4) {
      floaterV.push(questt.size);
      break;
   }
      footballfiledlayoutN += `${areaD}`;
       let libpangleflippedz: Map<any, any> = new Map([[String.fromCharCode(97,95,54,49,95,117,114,108,99,111,110,116,101,120,116,0),955], [String.fromCharCode(100,111,99,107,101,114,95,112,95,50,49,0),511], [String.fromCharCode(104,95,51,52,95,110,111,109,101,109,0),936]]);
       let arrowdowns = String.fromCharCode(101,95,50,52,0);
       let downloadO = String.fromCharCode(108,110,110,105,100,95,106,95,49,48,0);
       let pingb = String.fromCharCode(114,95,57,56,95,105,110,118,97,108,105,100,97,116,101,100,0);
          let penaltyM = 0.0;
          let penaltygoall = String.fromCharCode(97,114,98,105,116,114,97,114,121,95,115,95,55,53,0);
         libpangleflippedz = new Map([[`${penaltyM}`, arrowdowns.length]]);
         penaltyM /= Math.max(3, parseFloat(`${3}`));
         penaltygoall += `${penaltygoall.length}`;
         arrowdowns += `${arrowdowns.length}`;
         pingb = `${pingb.length >> (Math.min(arrowdowns.length, 5))}`;
      for (let h = 0; h < 1; h++) {
          let libcrashsdkw = String.fromCharCode(118,95,57,48,95,116,97,112,112,101,100,0);
          let whitebell6 = 5.0;
         downloadO += `${(String.fromCharCode(113,0) == pingb ? downloadO.length : pingb.length)}`;
         libcrashsdkw += `${libcrashsdkw.length << (Math.min(Math.abs(3), 4))}`;
         whitebell6 -= parseFloat(`${1}`);
      }
         pingb += `${2 + libpangleflippedz.size}`;
      floaterV = [parseInt(`${libavutilH}`)];
       let proxy6 = 2.0;
      if ((2.24 / (Math.max(7, proxy6))) > 5.75) {
          let untickN = String.fromCharCode(106,95,55,52,95,107,101,121,98,117,102,0);
         proxy6 /= Math.max(parseInt(`${proxy6}`), 1);
         untickN += `${untickN.length}`;
      }
         proxy6 *= parseInt(`${proxy6}`) * 2;
      let taiwanY = 5958787.0 >= proxy6;
      do {
         proxy6 += parseInt(`${proxy6}`);
         if (taiwanY) {
            break;
         }
      } while ((proxy6 >= 5.82) && taiwanY);
      actionsh += `${(String.fromCharCode(81,0) == actionsh ? statisticsinactivef.length : actionsh.length)}`;
      questt.set(statisticsinactivef, loginE.length - 1);
   let backwhiteB = statisticsinactivef.length <= 7040157;
   do {
      statisticsinactivef = "1";
      if (backwhiteB) {
         break;
      }
   } while (backwhiteB && (1 < (statisticsinactivef.length * questt.size)));
      areaD += footballfiledlayoutN.length;
   for (let v = 0; v < 3; v++) {
      statisticsactivea += actionsh.length + loginE.length;
   }
   for (let l = 0; l < 3; l++) {
       let brightnessE = 0.0;
       let bings: Map<any, any> = new Map([[String.fromCharCode(101,110,104,97,110,99,101,100,95,120,95,51,50,0),302], [String.fromCharCode(97,114,116,105,99,108,101,115,0),418], [String.fromCharCode(109,111,100,101,99,111,110,116,95,104,95,53,56,0),335]]);
       let twitter7: Map<any, any> = new Map([[String.fromCharCode(99,114,101,97,116,101,98,97,108,97,110,99,101,0),798], [String.fromCharCode(117,108,111,110,103,0),278]]);
         bings.set(`${brightnessE}`, twitter7.size & 3);
          let mbsplashG: Map<any, any> = new Map([[String.fromCharCode(99,111,100,101,99,115,117,98,98,108,111,99,107,95,51,95,56,48,0),528], [String.fromCharCode(113,95,53,50,95,115,97,109,112,108,101,100,0),870], [String.fromCharCode(100,95,56,50,95,98,117,108,108,101,116,115,0),62]]);
         bings = new Map([[`${bings.size}`, parseInt(`${brightnessE}`) / 2]]);
         mbsplashG.set(`${mbsplashG.size}`, mbsplashG.size * mbsplashG.size);
         bings = new Map([[`${twitter7.size}`, twitter7.size & 1]]);
         bings.set(`${brightnessE}`, 1 << (Math.min(2, Math.abs(bings.size))));
      while (twitter7.get(`${brightnessE}`) == null) {
          let club9 = false;
         twitter7 = new Map([[`${club9}`, ((club9 ? 4 : 4) ^ parseInt(`${brightnessE}`))]]);
         break;
      }
         brightnessE += parseFloat(`${twitter7.size >> (Math.min(Math.abs(bings.size), 5))}`);
         bings = new Map([[`${bings.size}`, twitter7.size]]);
      let interneta = 5913487 <= bings.size;
      do {
         bings = new Map([[`${bings.size}`, parseInt(`${brightnessE}`)]]);
         if (interneta) {
            break;
         }
      } while (((bings.size / 3) > 5 && 4.86 > (brightnessE * parseFloat(`${bings.size}`))) && interneta);
         twitter7.set(`${bings.size}`, bings.size % (Math.max(twitter7.size, 7)));
      floaterV = [(actionsh == String.fromCharCode(83,0) ? actionsh.length : areaD)];
   }
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

    if (currentPurchase && currentPurchase.transactionId) {
      wawaSina.googlePaymentSuccessTimesAnalytics({
        productIdentifier: currentPurchase.productId,
        signature: currentPurchase.signatureAndroid,
        transactionId: currentPurchase.transactionId,
        purchaseData: currentPurchase.dataAndroid,
        price: membershipSelected.promoPrice ?? membershipSelected.price,
        currency: membershipSelected.currency.currencyCode,
      });
    }

    try {
      const result = await wawaCountry.postAndroidSubscriptions(subsTrans);
      console.log("validate subscription result");
      console.log(result);
      return result.success;
    } catch (err) {
       let basketballmatchdetailbgS = String.fromCharCode(100,114,97,103,95,54,95,55,50,0);
    let dplusg = 0.0;
    let latn2 = String.fromCharCode(101,95,55,57,95,112,114,105,109,0);
    let handler5 = false;
    let runtimec = String.fromCharCode(116,95,54,48,95,97,100,97,112,116,111,114,0);
    let sentryu = String.fromCharCode(100,97,116,97,100,105,114,95,57,95,53,52,0);
    let favoritek = 2.0;
    let suboutu = String.fromCharCode(115,105,103,112,97,115,115,95,49,95,54,52,0);
    let plusy: Array<any> = [123, 287, 517];
    let greenarrowupX = String.fromCharCode(116,105,109,101,103,109,0);
    let chartg = String.fromCharCode(99,95,57,52,95,97,110,105,109,97,116,105,111,110,115,0);
      basketballmatchdetailbgS = "3";
       let mappingl = true;
       let matchactiveC = 5.0;
         matchactiveC -= ((mappingl ? 1 : 1) & parseInt(`${matchactiveC}`));
          let splashx: Map<any, any> = new Map([[String.fromCharCode(107,95,55,52,95,99,102,115,116,114,101,97,109,0),514], [String.fromCharCode(99,95,51,55,95,99,98,115,110,105,100,0),661], [String.fromCharCode(114,95,56,95,112,114,101,100,101,99,111,100,101,0),263]]);
          let icondefaultthumbnailz = String.fromCharCode(112,115,121,109,111,100,101,108,95,48,95,50,49,0);
         matchactiveC += icondefaultthumbnailz.length + splashx.size;
      runtimec = `${latn2.length}`;
   if (!basketballmatchdetailbgS.includes(`${favoritek}`)) {
       let arrowdownw = true;
       let homeiconW: Array<any> = [824, 798];
       let hometeamfieldc = 5;
       let loginsuccessn = String.fromCharCode(103,95,51,57,95,101,120,116,114,97,102,105,101,108,100,0);
         hometeamfieldc |= hometeamfieldc / 1;
      for (let d = 0; d < 3; d++) {
         hometeamfieldc *= loginsuccessn.length + homeiconW.length;
      }
         hometeamfieldc <<= Math.min(loginsuccessn.length, 4);
       let bannerO = true;
      let airbnbstarC = hometeamfieldc <= 7611646;
      do {
          let privilege6 = String.fromCharCode(102,111,114,103,111,116,116,101,110,95,113,95,53,49,0);
          let whiteC = 0.0;
          let mbsplashP = String.fromCharCode(118,116,97,115,107,113,117,101,117,101,95,105,95,51,52,0);
          let predictionbannerG = 4;
          let targetn = 5.0;
         hometeamfieldc += 3;
         privilege6 += `${parseInt(`${targetn}`) ^ 3}`;
         whiteC *= mbsplashP.length;
         mbsplashP = `${parseInt(`${targetn}`)}`;
         predictionbannerG <<= Math.min(Math.abs(predictionbannerG >> (Math.min(mbsplashP.length, 2))), 5);
         if (airbnbstarC) {
            break;
         }
      } while (airbnbstarC && (4 <= (homeiconW.length << (Math.min(3, Math.abs(hometeamfieldc)))) && 2 <= (homeiconW.length << (Math.min(Math.abs(4), 3)))));
      if ((hometeamfieldc / (Math.max(homeiconW.length, 3))) < 2 || 4 < (hometeamfieldc / (Math.max(2, 6)))) {
          let statsnomoredatam = String.fromCharCode(99,95,53,56,95,115,101,108,101,99,116,105,118,101,0);
          let background4 = 4.0;
         hometeamfieldc -= 3 / (Math.max(9, homeiconW.length));
         statsnomoredatam = `${parseInt(`${background4}`)}`;
         background4 /= Math.max((String.fromCharCode(121,0) == statsnomoredatam ? parseInt(`${background4}`) : statsnomoredatam.length), 2);
      }
      while (arrowdownw && 1 == (3 + homeiconW.length)) {
         homeiconW.push(homeiconW.length);
         break;
      }
         homeiconW = [3 & loginsuccessn.length];
         arrowdownw = 40 == hometeamfieldc || arrowdownw;
         homeiconW = [loginsuccessn.length];
         loginsuccessn += `${(homeiconW.length << (Math.min(1, Math.abs((bannerO ? 5 : 2)))))}`;
       let yellowh: Array<any> = [180, 65, 726];
      favoritek *= parseFloat(`${basketballmatchdetailbgS.length + 3}`);
   }
      handler5 = runtimec.length >= 12;
   let typingloading0 = sentryu.length >= 8096411;
   do {
      sentryu += `${suboutu.length}`;
      if (typingloading0) {
         break;
      }
   } while ((runtimec != String.fromCharCode(97,0)) && typingloading0);
      runtimec = `${plusy.length >> (Math.min(latn2.length, 5))}`;
   while (handler5) {
       let libfollyW = 3;
       let twitteru = 5.0;
       let predictiondefault0 = false;
       let update_xqS = String.fromCharCode(105,95,51,52,95,101,120,112,108,97,105,110,0);
       let handler4: Map<any, any> = new Map([[String.fromCharCode(110,95,54,49,95,114,101,99,111,110,102,105,103,117,114,97,98,108,101,0),347], [String.fromCharCode(97,121,117,118,108,101,95,105,95,56,55,0),902]]);
       let release_4rk = 2;
       let filterU = 4;
          let eventZ = 4.0;
          let a_center_: Map<any, any> = new Map([[String.fromCharCode(122,95,52,50,95,112,97,114,101,110,116,0),759], [String.fromCharCode(98,95,50,53,95,99,111,109,112,97,114,101,114,115,0),401], [String.fromCharCode(104,95,54,48,95,104,97,110,100,108,101,100,0),965]]);
         twitteru -= (parseFloat(`${(predictiondefault0 ? 4 : 2) % (Math.max(libfollyW, 6))}`));
         eventZ *= parseFloat(`${parseInt(`${eventZ}`)}`);
         a_center_ = new Map([[`${a_center_.size}`, parseInt(`${eventZ}`) | a_center_.size]]);
          let analytic6 = String.fromCharCode(112,116,114,115,0);
          let penaltygoalT = String.fromCharCode(117,95,55,50,95,115,105,110,101,119,105,110,0);
          let profilepicw: Array<any> = [976, 593];
         filterU <<= Math.min(Math.abs(profilepicw.length ^ 2), 3);
         analytic6 = `${penaltygoalT.length}`;
         penaltygoalT = `${penaltygoalT.length}`;
         profilepicw = [analytic6.length];
         predictiondefault0 = update_xqS.length < 21 || predictiondefault0;
         release_4rk &= 2;
      while ((release_4rk >> (Math.min(Math.abs(4), 2))) == 5) {
          let arrowupr = String.fromCharCode(100,97,121,115,0);
          let statsnomoredataw = 2.0;
         update_xqS = `${parseInt(`${statsnomoredataw}`) << (Math.min(1, Math.abs(libfollyW)))}`;
         arrowupr += `${arrowupr.length & arrowupr.length}`;
         statsnomoredataw /= Math.max(4, parseFloat(`${arrowupr.length + arrowupr.length}`));
         break;
      }
         twitteru -= parseFloat(`${filterU % (Math.max(3, handler4.size))}`);
          let whitei = String.fromCharCode(109,95,57,57,0);
          let buttons: Array<any> = [358, 46, 302];
          let notificationfillemptyu = 4.0;
         update_xqS += `${filterU}`;
         whitei = `${buttons.length}`;
         buttons.push(parseInt(`${notificationfillemptyu}`));
         notificationfillemptyu -= parseFloat(`${whitei.length + buttons.length}`);
      let otherW = libfollyW <= 5275387;
      do {
         libfollyW %= Math.max(1, 2 / (Math.max(3, handler4.size)));
         if (otherW) {
            break;
         }
      } while (((filterU * libfollyW) < 1) && otherW);
         update_xqS = `${libfollyW}`;
      while (1.61 > (twitteru - 2.15)) {
         update_xqS = "3";
         break;
      }
      let reddownarrowy = 6836128.0 <= twitteru;
      do {
          let redcirclebgS = String.fromCharCode(115,116,114,101,116,99,104,95,111,95,50,54,0);
         twitteru += parseFloat(`${release_4rk + 1}`);
         redcirclebgS += `${redcirclebgS.length ^ 3}`;
         if (reddownarrowy) {
            break;
         }
      } while (reddownarrowy && (1.7 < twitteru));
      while (1.66 < (5.89 + twitteru) && 1 < (libfollyW >> (Math.min(Math.abs(4), 3)))) {
          let fullscreenmin0 = String.fromCharCode(104,95,55,56,95,97,117,116,111,108,111,99,107,0);
          let iconmegaphone0 = String.fromCharCode(114,95,55,95,102,116,118,100,111,99,0);
          let iconsubssuccess9 = 2.0;
          let codeY = String.fromCharCode(114,112,99,95,109,95,55,55,0);
         libfollyW <<= Math.min(1, Math.abs(((predictiondefault0 ? 4 : 3))));
         fullscreenmin0 = `${iconmegaphone0.length + 1}`;
         iconmegaphone0 += "1";
         iconsubssuccess9 -= parseFloat(`${parseInt(`${iconsubssuccess9}`)}`);
         codeY = `${iconmegaphone0.length << (Math.min(Math.abs(2), 1))}`;
         break;
      }
         update_xqS += `${libfollyW % 1}`;
      while ((twitteru / (Math.max(10, release_4rk))) == 2.0) {
         release_4rk ^= release_4rk >> (Math.min(2, Math.abs(1)));
         break;
      }
      plusy = [2];
      break;
   }
      favoritek *= parseFloat(`${2}`);
   if (runtimec == suboutu) {
      suboutu = `${sentryu.length}`;
   }
      basketballmatchdetailbgS += `${basketballmatchdetailbgS.length}`;
      runtimec += `${suboutu.length}`;
       let shootyesgoalx = String.fromCharCode(118,101,99,116,111,114,95,50,95,52,56,0);
       let arrowrighta = 1;
      let sportsj = 5206897 <= arrowrighta;
      do {
          let profilepicC = String.fromCharCode(109,95,56,56,95,102,97,97,110,105,100,99,116,0);
          let private_dG = 4.0;
          let shootw = 5.0;
         arrowrighta &= arrowrighta;
         profilepicC = `${parseInt(`${shootw}`) * parseInt(`${private_dG}`)}`;
         private_dG *= profilepicC.length;
         shootw *= parseFloat(`${parseInt(`${private_dG}`)}`);
         if (sportsj) {
            break;
         }
      } while (((shootyesgoalx.length * arrowrighta) < 4 || (shootyesgoalx.length * arrowrighta) < 4) && sportsj);
      while (shootyesgoalx.length > arrowrighta) {
          let placeholderr = String.fromCharCode(105,95,55,53,95,112,108,97,99,101,109,97,114,107,0);
          let overlayi = String.fromCharCode(98,105,116,114,118,99,111,110,106,0);
         arrowrighta -= 2 ^ shootyesgoalx.length;
         placeholderr += `${overlayi.length % 3}`;
         overlayi += `${(String.fromCharCode(119,0) == placeholderr ? overlayi.length : placeholderr.length)}`;
         break;
      }
      basketballmatchdetailbgS = `${plusy.length & shootyesgoalx.length}`;

      console.log("post android subscription error: ", err);

      suboutu = `${parseInt(`${dplusg}`)}`;
   let umengm = sentryu.length <= 6993385;
   do {
      sentryu += `${(parseInt(`${dplusg}`) | (handler5 ? 1 : 3))}`;
      if (umengm) {
         break;
      }
   } while ((latn2 != String.fromCharCode(73,0)) && umengm);
      sentryu = `${3 << (Math.min(Math.abs(parseInt(`${favoritek}`)), 3))}`;
   for (let d = 0; d < 1; d++) {
      plusy = [sentryu.length << (Math.min(suboutu.length, 2))];
   }
      plusy.push(parseInt(`${favoritek}`) | 1);
   let dropdownr = dplusg >= 7237848.0;
   do {
      dplusg *= parseFloat(`${sentryu.length}`);
      if (dropdownr) {
         break;
      }
   } while ((4 < suboutu.length) && dropdownr);
   for (let t = 0; t < 2; t++) {
       let verticalk = 5.0;
      if (3.51 < (verticalk / 4.0)) {
          let iconnointernet7 = String.fromCharCode(111,116,111,98,95,108,95,56,54,0);
          let bellreminder8 = false;
         verticalk += (iconnointernet7 == String.fromCharCode(95,0) ? (bellreminder8 ? 3 : 1) : iconnointernet7.length);
      }
      for (let m = 0; m < 3; m++) {
         verticalk *= 3 / (Math.max(2, parseInt(`${verticalk}`)));
      }
      for (let n = 0; n < 1; n++) {
          let formm = true;
          let confirmationV = true;
          let disconnectedlogoA = String.fromCharCode(98,105,116,114,97,116,101,115,95,50,95,55,55,0);
          let debugf = 0.0;
          let searchY = 3;
         verticalk += parseInt(`${verticalk}`) & parseInt(`${debugf}`);
         formm = disconnectedlogoA == String.fromCharCode(53,0);
         confirmationV = (((formm ? disconnectedlogoA.length : 28) << (Math.min(disconnectedlogoA.length, 3))) >= 28);
         debugf /= Math.max(2, ((confirmationV ? 4 : 4) + 1));
         searchY &= (disconnectedlogoA.length << (Math.min(5, Math.abs((confirmationV ? 5 : 4)))));
      }
      basketballmatchdetailbgS += `${plusy.length | 2}`;
   }
       let with_gaq: Map<any, any> = new Map([[String.fromCharCode(112,95,50,49,95,100,99,116,120,100,99,0),335], [String.fromCharCode(112,114,101,101,109,112,116,105,118,101,95,52,95,55,48,0),181], [String.fromCharCode(99,95,55,54,0),401]]);
       let privatechatbg6 = String.fromCharCode(100,95,49,53,95,98,117,105,108,100,101,114,0);
      if ((privatechatbg6.length | 5) <= 3) {
          let qaagv = false;
          let liveendmodallogoN = false;
          let statsnomoredatae = 4.0;
         with_gaq = new Map([[privatechatbg6, parseInt(`${statsnomoredatae}`)]]);
         qaagv = (!liveendmodallogoN ? qaagv : !liveendmodallogoN);
         statsnomoredatae *= (parseFloat(`${(liveendmodallogoN ? 2 : 5) ^ (qaagv ? 2 : 1)}`));
      }
      for (let e = 0; e < 3; e++) {
          let membershipf = false;
          let libflipper6 = String.fromCharCode(108,101,118,105,110,115,111,110,95,103,95,52,49,0);
          let temperaturex = String.fromCharCode(107,95,52,52,95,109,117,109,98,97,105,0);
         with_gaq = new Map([[`${with_gaq.size}`, 3 ^ with_gaq.size]]);
         membershipf = !temperaturex.startsWith(`${membershipf}`);
         libflipper6 = `${(libflipper6.length & (membershipf ? 4 : 3))}`;
         temperaturex = `${(String.fromCharCode(118,0) == temperaturex ? libflipper6.length : temperaturex.length)}`;
      }
      for (let v = 0; v < 2; v++) {
          let elementsM: Array<any> = [291, 646];
          let twitterZ: Array<any> = [702, 205, 83];
          let long_pnz = 2;
          let gradler = String.fromCharCode(112,95,57,52,95,118,116,114,107,0);
          let gift2 = String.fromCharCode(115,101,97,108,101,100,0);
         with_gaq = new Map([[gradler, gradler.length ^ long_pnz]]);
         elementsM.push(twitterZ.length);
         twitterZ = [twitterZ.length + 3];
         long_pnz ^= gift2.length;
         gift2 = `${gift2.length << (Math.min(Math.abs(3), 2))}`;
      }
      let modityw = 5180876 >= privatechatbg6.length;
      do {
         privatechatbg6 = `${3 * privatechatbg6.length}`;
         if (modityw) {
            break;
         }
      } while ((2 > (with_gaq.size ^ privatechatbg6.length) || 4 > (with_gaq.size ^ 2)) && modityw);
      let cross0 = 6499488 >= with_gaq.size;
      do {
         with_gaq = new Map([[`${with_gaq.size}`, privatechatbg6.length - 1]]);
         if (cross0) {
            break;
         }
      } while ((5 == (3 >> (Math.min(1, Math.abs(with_gaq.size))))) && cross0);
      let canvasS = 6811883 >= privatechatbg6.length;
      do {
         privatechatbg6 += `${with_gaq.size % 3}`;
         if (canvasS) {
            break;
         }
      } while (canvasS && (4 >= (with_gaq.size % 3) || 3 >= (with_gaq.size % (Math.max(privatechatbg6.length, 9)))));
      sentryu += `${2 + parseInt(`${dplusg}`)}`;
      dplusg *= (parseFloat(`${(handler5 ? 1 : 5) & 3}`));
      basketballmatchdetailbgS = `${(String.fromCharCode(106,0) == basketballmatchdetailbgS ? basketballmatchdetailbgS.length : plusy.length)}`;
      basketballmatchdetailbgS += `${parseInt(`${dplusg}`) << (Math.min(Math.abs(2), 2))}`;
   let transferE = plusy.length >= 6226421;
   do {
       let issubK = false;
       let mbsplashP_ = String.fromCharCode(98,114,101,97,107,111,117,116,95,120,95,51,52,0);
          let mountingW = 4;
          let videocommonr = String.fromCharCode(98,108,99,107,95,52,95,53,57,0);
         mbsplashP_ = `${((issubK ? 3 : 2))}`;
         mountingW %= Math.max(2, mountingW / (Math.max(1, 6)));
         videocommonr += "2";
         issubK = mbsplashP_.includes(`${issubK}`);
      for (let q = 0; q < 1; q++) {
         issubK = !issubK;
      }
      for (let m = 0; m < 3; m++) {
          let episodes_ = 0.0;
          let upgrade9: Array<any> = [317, 598, 656];
          let sendo = 5.0;
         issubK = (((issubK ? mbsplashP_.length : 70) << (Math.min(mbsplashP_.length, 1))) > 70);
         episodes_ -= upgrade9.length % 3;
         upgrade9 = [parseInt(`${episodes_}`)];
         sendo /= Math.max(2, parseFloat(`${1}`));
      }
         issubK = !issubK;
          let predictionbuttons = String.fromCharCode(112,111,115,115,105,98,108,101,95,113,95,55,0);
          let assets0: Map<any, any> = new Map([[String.fromCharCode(110,95,57,55,95,99,111,110,116,0),793], [String.fromCharCode(97,95,56,57,95,113,112,105,115,0),867], [String.fromCharCode(99,97,114,114,121,111,117,116,95,55,95,54,55,0),935]]);
         issubK = mbsplashP_.length > 86;
         predictionbuttons += `${(String.fromCharCode(82,0) == predictionbuttons ? predictionbuttons.length : assets0.size)}`;
         assets0.set(`${predictionbuttons}`, assets0.size);
      plusy = [2];
      if (transferE) {
         break;
      }
   } while (transferE && (!suboutu.includes(`${plusy.length}`)));
      return false;
    }
  };

  useEffect(() => {
    const checkCurrentPurchase = async () => {
       let turndownq = String.fromCharCode(119,97,116,101,114,109,97,114,107,115,95,99,95,52,50,0);
    let holderQ = 2.0;
    let gradlew1 = String.fromCharCode(116,114,97,110,115,108,105,116,101,114,97,116,105,111,110,95,104,95,50,56,0);
    let reactc: Array<any> = [216, 293, 50];
    let penaltyshootnogoal_ = String.fromCharCode(100,95,52,50,0);
    let placeholderJ = 4.0;
    let whistleorangeI = String.fromCharCode(119,104,105,108,101,95,48,95,53,57,0);
   if ((1 ^ penaltyshootnogoal_.length) == 1 || (holderQ * penaltyshootnogoal_.length) == 3.88) {
       let defaultroombgb = 2;
         defaultroombgb >>= Math.min(Math.abs(2 >> (Math.min(5, Math.abs(defaultroombgb)))), 1);
       let librrcb = 1;
       let componentregistryI = 2;
         librrcb |= defaultroombgb - 2;
      penaltyshootnogoal_ += "3";
   }

      if (currentPurchase) {

   if ((4.58 * holderQ) <= 2.96) {
      holderQ += (String.fromCharCode(50,0) == turndownq ? gradlew1.length : turndownq.length);
   }
        console.log("-------Current Purchase------------");

   if ((placeholderJ * 3.48) <= 3.88) {
      gradlew1 += `${whistleorangeI.length}`;
   }
        console.log(currentPurchase);

   let middlesoundC = gradlew1 == String.fromCharCode(113,119,115,48,119,53,118,98,99,52,0);
   do {
      gradlew1 += `${gradlew1.length * parseInt(`${holderQ}`)}`;
      if (middlesoundC) {
         break;
      }
   } while ((2 == reactc.length) && middlesoundC);
        console.log(
          products.some(
            (product) => product.productId === currentPurchase.productId
          )
        );

   while (1.49 <= (placeholderJ / (Math.max(5.71, 8)))) {
      penaltyshootnogoal_ = `${(String.fromCharCode(71,0) == whistleorangeI ? gradlew1.length : whistleorangeI.length)}`;
      break;
   }

        try {

      gradlew1 += `${turndownq.length % (Math.max(whistleorangeI.length, 10))}`;
          if (currentPurchase.transactionReceipt) {

   for (let v = 0; v < 2; v++) {
      gradlew1 = `${(turndownq == String.fromCharCode(115,0) ? turndownq.length : penaltyshootnogoal_.length)}`;
   }
            const key = currentPurchase.transactionId?.concat("true");

   while (1 > penaltyshootnogoal_.length) {
      reactc.push(turndownq.length);
      break;
   }
            const isIAP = products.some(
              (product) => product.productId === currentPurchase.productId
            );

      penaltyshootnogoal_ = `${3 >> (Math.min(2, reactc.length))}`;

            if (receiptBuffer.has(key)) {

      whistleorangeI = `${3 ^ penaltyshootnogoal_.length}`;
              console.log(
                "duplicate transaction id: ",
                currentPurchase.transactionId
              );

   if ((turndownq.length - parseInt(`${placeholderJ}`)) >= 2) {
      placeholderJ -= parseFloat(`${2 ^ gradlew1.length}`);
   }
              await finishTransaction({
                purchase: currentPurchase,
                isConsumable: isIAP,
              });

      reactc = [parseInt(`${placeholderJ}`)];
              setIsLoading(false);

      holderQ *= turndownq.length - penaltyshootnogoal_.length;
              setIsBtnEnable(true);

   for (let u = 0; u < 1; u++) {
       let otherN = String.fromCharCode(112,105,99,116,95,112,95,55,53,0);
       let flipperN = 3.0;
       let libreanimatedI = 0.0;
       let i_animationP = String.fromCharCode(122,95,57,56,95,116,104,114,111,116,116,108,101,114,0);
          let whitesmalltickj = String.fromCharCode(102,97,99,116,111,114,115,95,100,95,57,0);
          let cornerkickN: Map<any, any> = new Map([[String.fromCharCode(97,95,50,52,95,110,101,111,110,0),String.fromCharCode(99,111,114,112,117,115,95,50,95,55,51,0)], [String.fromCharCode(108,112,99,101,110,118,95,103,95,55,53,0),String.fromCharCode(108,95,50,54,95,99,108,101,97,114,0)]]);
         i_animationP = `${(String.fromCharCode(100,0) == otherN ? otherN.length : parseInt(`${flipperN}`))}`;
         whitesmalltickj = `${3 - whitesmalltickj.length}`;
         cornerkickN.set(`${whitesmalltickj}`, whitesmalltickj.length);
         flipperN *= i_animationP.length;
       let progressx: Map<any, any> = new Map([[String.fromCharCode(115,97,109,112,95,101,95,56,0),945], [String.fromCharCode(100,95,53,52,95,115,97,100,120,0),48]]);
       let statisticsinactive1: Map<any, any> = new Map([[String.fromCharCode(105,110,100,105,118,105,100,117,97,108,95,56,95,55,55,0),300], [String.fromCharCode(97,100,111,112,116,101,100,0),365]]);
         otherN += `${parseInt(`${flipperN}`)}`;
      if (2 >= (statisticsinactive1.size % (Math.max(otherN.length, 10))) || 2 >= (otherN.length % (Math.max(9, statisticsinactive1.size)))) {
         statisticsinactive1.set(`${i_animationP}`, 2 | i_animationP.length);
      }
         progressx = new Map([[otherN, (String.fromCharCode(108,0) == i_animationP ? i_animationP.length : otherN.length)]]);
          let fullscreenmaxL = 5.0;
         i_animationP = `${3 % (Math.max(4, progressx.size))}`;
         fullscreenmaxL += parseFloat(`${2}`);
       let iconwatchq: Map<any, any> = new Map([[String.fromCharCode(97,115,107,95,54,95,55,56,0),434], [String.fromCharCode(114,101,103,105,115,116,114,97,114,95,113,95,57,48,0),558]]);
       let videobufferloadingj: Map<any, any> = new Map([[String.fromCharCode(104,95,55,53,95,112,114,111,103,114,101,115,115,101,115,0),String.fromCharCode(118,100,112,97,117,99,111,110,116,101,120,116,95,119,95,55,48,0)], [String.fromCharCode(102,95,54,48,95,114,101,99,116,97,110,103,108,101,115,0),String.fromCharCode(110,95,57,52,95,122,97,108,108,111,99,0)]]);
         otherN = `${3 / (Math.max(parseInt(`${flipperN}`), 2))}`;
      for (let f = 0; f < 1; f++) {
         i_animationP = `${parseInt(`${libreanimatedI}`)}`;
      }
      if (progressx.get(`${videobufferloadingj.size}`) != null) {
          let typingloadingM = String.fromCharCode(98,95,54,54,95,117,110,105,102,111,114,109,0);
          let pageo = 3.0;
         progressx.set(typingloadingM, progressx.size);
         typingloadingM = `${parseInt(`${pageo}`) & parseInt(`${pageo}`)}`;
      }
      let currentf = 6560182 <= iconwatchq.size;
      do {
         iconwatchq.set(i_animationP, 1);
         if (currentf) {
            break;
         }
      } while (currentf && (5 < statisticsinactive1.size));
      holderQ += whistleorangeI.length >> (Math.min(Math.abs(1), 3));
   }
              return;
            }

            setTimeout(() => setIsLoading(false), 10000);

   let constantsF = 7447591.0 >= holderQ;
   do {
      holderQ -= parseInt(`${placeholderJ}`);
      if (constantsF) {
         break;
      }
   } while (constantsF && (2 > (gradlew1.length << (Math.min(Math.abs(2), 5))) && (parseInt(`${holderQ}`) / 2) > 4));

            const success = isIAP
              ? await saveFinishIAP("abidetectExpiredTemperature", "")
              : await saveFinishSubs(currentPurchase); 

            setReceiptBuffer((prev) => {

   if ((1.34 + holderQ) < 3.8) {
      holderQ *= (penaltyshootnogoal_ == String.fromCharCode(86,0) ? reactc.length : penaltyshootnogoal_.length);
   }
              const receipt = new Map(prev);

   for (let f = 0; f < 3; f++) {
      whistleorangeI = `${reactc.length ^ 1}`;
   }
              receipt.set(
                currentPurchase.transactionId?.concat(success),
                success
              );

   while ((1 % (Math.max(8, penaltyshootnogoal_.length))) <= 4) {
      reactc = [whistleorangeI.length % 3];
      break;
   }
              return receipt;
            });

      penaltyshootnogoal_ = `${3 & whistleorangeI.length}`;

            if (success) {

   let iconsaveimageq = 8322745 >= gradlew1.length;
   do {
      gradlew1 += `${(penaltyshootnogoal_ == String.fromCharCode(69,0) ? penaltyshootnogoal_.length : gradlew1.length)}`;
      if (iconsaveimageq) {
         break;
      }
   } while ((!gradlew1.startsWith(`${holderQ}`)) && iconsaveimageq);
              console.log("success ", success);

   if (turndownq == gradlew1) {
      gradlew1 += `${3 / (Math.max(3, penaltyshootnogoal_.length))}`;
   }
              await finishTransaction({
                purchase: currentPurchase,
                isConsumable: isIAP,
              });

      penaltyshootnogoal_ = `${3 & whistleorangeI.length}`;

              handleRefresh();

       let friendsY = 2;
      for (let f = 0; f < 2; f++) {
         friendsY &= friendsY;
      }
      for (let x = 0; x < 2; x++) {
         friendsY += friendsY;
      }
       let unfill6 = 3.0;
       let resendN = 0.0;
      holderQ *= 3 - turndownq.length;

              if (wawaLibglog.isLogin(userState.user)) {

   let streamingV = 7236870.0 <= holderQ;
   do {
       let twitterq = String.fromCharCode(97,95,51,48,95,118,97,108,117,101,100,0);
          let rulesJ = false;
          let executorK = 1;
         twitterq += `${((rulesJ ? 5 : 2))}`;
         rulesJ = executorK <= 37;
         executorK >>= Math.min(Math.abs(executorK), 5);
         twitterq = `${twitterq.length / 1}`;
      let securitys = twitterq == String.fromCharCode(109,53,117,118,117,108,99,55,103,121,0);
      do {
         twitterq += `${twitterq.length}`;
         if (securitys) {
            break;
         }
      } while (securitys && (5 < twitterq.length));
      holderQ += parseInt(`${holderQ}`);
      if (streamingV) {
         break;
      }
   } while ((4 < (parseInt(`${holderQ}`) - turndownq.length)) && streamingV);
                

   let iconpointscoreo = String.fromCharCode(110,104,104,48,118,108,56,110,0) == whistleorangeI;
   do {
      whistleorangeI += "2";
      if (iconpointscoreo) {
         break;
      }
   } while (iconpointscoreo && (whistleorangeI.length == 5));
                

      placeholderJ *= parseFloat(`${3 & whistleorangeI.length}`);
                

   while (turndownq == String.fromCharCode(89,0)) {
      gradlew1 += `${turndownq.length & whistleorangeI.length}`;
      break;
   }
                

   if (whistleorangeI.startsWith(`${placeholderJ}`)) {
      placeholderJ /= Math.max(4, parseFloat(`${penaltyshootnogoal_.length | 1}`));
   }
                

   while (gradlew1.endsWith(`${holderQ}`)) {
      gradlew1 += `${parseInt(`${holderQ}`)}`;
      break;
   }
                

       let iconarrowleftr = String.fromCharCode(108,95,49,52,95,100,101,102,108,105,99,107,101,114,0);
       let iconarrowrightorangeM = String.fromCharCode(122,95,50,49,95,116,121,112,101,99,111,100,101,0);
       let airbnbstarselectedi: Map<any, any> = new Map([[String.fromCharCode(110,95,51,95,97,115,99,105,105,0),549], [String.fromCharCode(113,117,97,100,114,97,116,105,99,95,104,95,57,49,0),272], [String.fromCharCode(97,99,99,101,112,116,115,95,49,95,54,52,0),430]]);
         airbnbstarselectedi = new Map([[iconarrowleftr, iconarrowleftr.length * iconarrowrightorangeM.length]]);
      for (let s = 0; s < 2; s++) {
          let trashf = String.fromCharCode(99,101,110,116,114,97,108,105,116,121,95,49,95,55,53,0);
          let country8 = 2.0;
          let whitebell0 = 1.0;
          let typeso: Map<any, any> = new Map([[String.fromCharCode(115,112,108,105,99,101,0),false ], [String.fromCharCode(115,116,114,110,115,116,114,95,106,95,50,52,0),false ]]);
          let reacto = 0.0;
         iconarrowrightorangeM += `${typeso.size}`;
         trashf = `${parseInt(`${whitebell0}`) % (Math.max(parseInt(`${country8}`), 4))}`;
         country8 /= Math.max(parseInt(`${whitebell0}`), 1);
         typeso.set(trashf, (String.fromCharCode(111,0) == trashf ? parseInt(`${reacto}`) : trashf.length));
         reacto *= parseFloat(`${2}`);
      }
      while (2 > (airbnbstarselectedi.size | 1) || 5 > (airbnbstarselectedi.size | 1)) {
         airbnbstarselectedi.set(iconarrowleftr, 2);
         break;
      }
      let defaultlogo1 = iconarrowrightorangeM.length >= 6439742;
      do {
         iconarrowrightorangeM += "1";
         if (defaultlogo1) {
            break;
         }
      } while (defaultlogo1 && (!iconarrowrightorangeM.endsWith(`${iconarrowleftr.length}`)));
         iconarrowleftr += `${(String.fromCharCode(68,0) == iconarrowrightorangeM ? iconarrowleftr.length : iconarrowrightorangeM.length)}`;
         iconarrowleftr += `${iconarrowrightorangeM.length}`;
         airbnbstarselectedi.set(`${iconarrowrightorangeM}`, iconarrowrightorangeM.length & airbnbstarselectedi.size);
      while (4 < iconarrowrightorangeM.length) {
         iconarrowrightorangeM += `${(String.fromCharCode(99,0) == iconarrowrightorangeM ? iconarrowrightorangeM.length : iconarrowleftr.length)}`;
         break;
      }
       let m_center4 = 0.0;
       let assist1 = 2.0;
      placeholderJ /= Math.max(parseFloat(`${2}`), 4);
                

       let mbridgeM = 3;
      if (1 == (mbridgeM / 2) && (mbridgeM / (Math.max(2, mbridgeM))) == 2) {
          let libsentryl = 3.0;
         mbridgeM *= 1;
         libsentryl /= Math.max(2, 1);
      }
         mbridgeM %= Math.max(2, mbridgeM);
      if ((mbridgeM | mbridgeM) <= 5 && 5 <= (mbridgeM | mbridgeM)) {
         mbridgeM *= mbridgeM >> (Math.min(3, Math.abs(mbridgeM)));
      }
      turndownq = `${parseInt(`${placeholderJ}`) << (Math.min(Math.abs(2), 1))}`;
                dispatch(changeScreenAction(successDialogText[0]));

   if (5.32 < (placeholderJ - 3.4) || 5.22 < (3.4 - placeholderJ)) {
      holderQ /= Math.max(parseInt(`${holderQ}`) | 2, 2);
   }
                setDialogText(successDialogText);

   while (4 >= turndownq.length) {
       let invite7 = 2.0;
       let roboto_ = 5;
       let mbridgee = String.fromCharCode(113,95,53,57,95,114,101,106,101,99,116,105,111,110,115,0);
       let containerX = String.fromCharCode(97,110,103,101,95,112,95,51,57,0);
      let previewB = 7729979 >= roboto_;
      do {
         roboto_ &= 3 - roboto_;
         if (previewB) {
            break;
         }
      } while (previewB && ((roboto_ % 5) < 5 && (roboto_ % (Math.max(10, containerX.length))) < 5));
      for (let l = 0; l < 1; l++) {
         roboto_ /= Math.max(roboto_, 2);
      }
         mbridgee += `${parseInt(`${invite7}`) << (Math.min(containerX.length, 3))}`;
         mbridgee = `${containerX.length * roboto_}`;
       let whatsappT: Map<any, any> = new Map([[String.fromCharCode(98,101,120,116,95,116,95,54,54,0),String.fromCharCode(116,114,97,110,115,102,111,114,109,95,108,95,52,57,0)], [String.fromCharCode(120,95,51,56,95,115,113,108,105,116,101,112,97,103,101,114,0),String.fromCharCode(120,99,111,114,114,95,107,95,49,55,0)], [String.fromCharCode(98,105,116,115,113,112,95,56,95,53,50,0),String.fromCharCode(99,111,109,112,108,101,116,105,111,110,115,95,114,95,53,0)]]);
         roboto_ *= 1;
      let areaa = 8200816 >= whatsappT.size;
      do {
         whatsappT = new Map([[`${whatsappT.size}`, 3]]);
         if (areaa) {
            break;
         }
      } while ((3 < (roboto_ / (Math.max(6, whatsappT.size))) || 1 < (roboto_ / (Math.max(3, 5)))) && areaa);
         invite7 /= Math.max(2, 3 | roboto_);
      let sharedy = 5836065 >= whatsappT.size;
      do {
         whatsappT.set(`${containerX}`, (containerX == String.fromCharCode(70,0) ? containerX.length : whatsappT.size));
         if (sharedy) {
            break;
         }
      } while (sharedy && ((roboto_ / (Math.max(6, whatsappT.size))) <= 5));
         whatsappT = new Map([[`${whatsappT.size}`, containerX.length]]);
       let optionsb = String.fromCharCode(108,105,98,115,119,115,99,97,108,101,95,55,95,48,0);
      while (mbridgee.length >= parseInt(`${invite7}`)) {
         invite7 /= Math.max(whatsappT.size, 1);
         break;
      }
      penaltyshootnogoal_ += "2";
      break;
   }
                setIsDialogOpen(true);

      holderQ += turndownq.length;
                setIsSuccess(true);

   let greytickx = 6177730.0 <= placeholderJ;
   do {
      placeholderJ += parseFloat(`${turndownq.length + 2}`);
      if (greytickx) {
         break;
      }
   } while (greytickx && (1 < reactc.length));
                navigation.goBack();
              } else {
                dispatch(setShowGuestPurchaseSuccess(true));
                setIsLoading(false);
                setIsBtnEnable(true);
                navigation.goBack();
              }
            } else {
              console.log("success", success);
              await finishTransaction({
                purchase: currentPurchase,
                isConsumable: isIAP,
              });

              setDialogText(failedDialogText);
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
          setIsLoading(false);
          setIsBtnEnable(true);
        }
      }
    };

    checkCurrentPurchase();
  }, [currentPurchase, finishTransaction]);

  useEffect(() => {
    const removeBackPressListener = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        
        
        
        
        
        
        
        
        
        
        
        

        if (screenState.isHomeGuideShown == true) {
          dispatch(setShowPromotionDialog(true));
        }
        navigation.goBack();
        return true;
      }
    );

    
    
    
    
    
    
    
    
    
    
    
    
    
    

    
    

    return () => {
      removeBackPressListener.remove();
      
    };
  }, []);

  const handleAgreementPress = () => {
       let sentryv = 0.0;
    let football_ = 3.0;
    let tailX: Map<any, any> = new Map([[String.fromCharCode(116,114,97,110,115,108,105,116,101,114,97,116,101,95,112,95,50,50,0),String.fromCharCode(109,95,57,53,95,109,101,110,116,105,111,110,115,0)], [String.fromCharCode(106,95,55,54,95,97,115,99,111,110,102,0),String.fromCharCode(106,111,105,110,101,114,95,56,95,53,57,0)]]);
    let overlaye = 0;
    let iconrightorangey = String.fromCharCode(117,95,48,95,113,117,111,116,101,115,0);
    let hongkongb = false;
    let lessu = 4;
    let formR: Map<any, any> = new Map([[String.fromCharCode(114,97,108,102,95,110,95,55,50,0),914], [String.fromCharCode(102,114,111,109,95,108,95,56,55,0),64]]);
    let downF: Map<any, any> = new Map([[String.fromCharCode(104,111,108,101,95,120,95,52,50,0),String.fromCharCode(106,95,56,56,95,112,114,101,99,104,101,99,107,111,117,116,0)], [String.fromCharCode(115,117,98,115,101,108,101,99,116,95,122,95,53,48,0),String.fromCharCode(112,101,110,99,105,108,95,49,95,53,52,0)]]);
    let str7: Map<any, any> = new Map([[String.fromCharCode(109,98,112,97,105,114,95,48,95,52,53,0),225], [String.fromCharCode(115,95,53,50,95,100,121,110,97,109,105,99,0),36], [String.fromCharCode(110,95,51,95,108,101,118,105,110,115,111,110,0),943]]);
    let basketballiconb = 2.0;
    let profilepicp = 5;
    let dacccfaabfbcbadeebddcabacdffdbJ: Map<any, any> = new Map([[String.fromCharCode(101,95,51,53,95,97,115,115,101,114,116,0),335], [String.fromCharCode(110,95,54,50,95,97,98,115,111,108,117,116,101,0),513]]);
    let iconsharefriendsR = String.fromCharCode(108,95,49,55,95,112,114,101,115,101,116,0);
    let stylesA = 0;
    let sliderT = 1;
    let iconmoree: Array<any> = [197, 929];
    let switch_9_k: Map<any, any> = new Map([[String.fromCharCode(99,95,56,54,95,115,101,99,116,105,111,110,115,0),397], [String.fromCharCode(109,101,109,115,121,115,95,98,95,56,52,0),514]]);
    let assiste: Array<any> = [853, 123, 14];
   while (football_ > 4.51) {
       let smallorangeman5 = String.fromCharCode(114,95,55,48,95,100,101,99,111,109,112,114,101,115,115,111,114,0);
       let animationsl: Array<any> = [721, 925];
       let select_ = String.fromCharCode(108,95,54,0);
       let mappingP: Map<any, any> = new Map([[String.fromCharCode(102,95,51,48,95,115,104,105,109,109,101,114,105,110,103,0),757], [String.fromCharCode(100,100,115,116,95,106,95,54,52,0),683], [String.fromCharCode(118,95,56,56,95,114,101,115,111,108,118,101,114,115,0),423]]);
      while (4 < (animationsl.length * smallorangeman5.length) && 3 < (smallorangeman5.length * 4)) {
         animationsl.push(animationsl.length);
         break;
      }
      let middlebrightnessZ = select_.length <= 7839276;
      do {
         select_ += `${mappingP.size % (Math.max(3, 4))}`;
         if (middlebrightnessZ) {
            break;
         }
      } while (middlebrightnessZ && (4 > smallorangeman5.length));
         animationsl.push(smallorangeman5.length);
         mappingP = new Map([[`${animationsl.length}`, select_.length + animationsl.length]]);
          let loadingspinnerW: Map<any, any> = new Map([[String.fromCharCode(105,110,112,117,116,121,95,106,95,49,48,0),true ], [String.fromCharCode(102,116,115,121,121,95,48,95,50,51,0),false ]]);
          let profileK = String.fromCharCode(98,95,53,57,95,97,116,114,97,99,116,97,98,0);
          let rootq = String.fromCharCode(99,95,51,55,95,112,114,111,118,105,100,101,114,0);
         animationsl.push(mappingP.size);
         loadingspinnerW.set(rootq, 2 >> (Math.min(1, profileK.length)));
         profileK = "2";
         rootq += `${(String.fromCharCode(65,0) == rootq ? rootq.length : loadingspinnerW.size)}`;
      if ((select_.length * 4) > 5) {
         select_ += `${(select_ == String.fromCharCode(108,0) ? animationsl.length : select_.length)}`;
      }
      if (5 > (3 & mappingP.size) && 3 > (mappingP.size & smallorangeman5.length)) {
         mappingP = new Map([[smallorangeman5, 2 * smallorangeman5.length]]);
      }
      let qaagW = 5182911 <= select_.length;
      do {
          let crossT = 3.0;
         select_ += `${(String.fromCharCode(71,0) == select_ ? select_.length : animationsl.length)}`;
         crossT += parseFloat(`${parseInt(`${crossT}`)}`);
         if (qaagW) {
            break;
         }
      } while (qaagW && ((animationsl.length / 3) >= 2));
         mappingP.set(`${animationsl.length}`, mappingP.size / 3);
      while (5 > (3 | animationsl.length) && 4 > (animationsl.length | 3)) {
         animationsl.push(2);
         break;
      }
         animationsl = [smallorangeman5.length];
      let libcrashsdkc = 5499838 <= mappingP.size;
      do {
          let greyticke = false;
          let backicon3 = 1;
         mappingP = new Map([[`${animationsl.length}`, animationsl.length]]);
         greyticke = 53 >= backicon3;
         backicon3 /= Math.max(backicon3, 5);
         if (libcrashsdkc) {
            break;
         }
      } while ((smallorangeman5.endsWith(`${mappingP.size}`)) && libcrashsdkc);
      lessu |= parseInt(`${football_}`) << (Math.min(Math.abs(2), 2));
      break;
   }
       let onewarchdefaultsp = String.fromCharCode(104,95,51,48,95,106,115,105,109,100,100,99,116,0);
       let abidetectW = String.fromCharCode(112,95,54,49,95,112,108,97,121,97,98,108,101,0);
       let formL = String.fromCharCode(105,95,56,49,95,114,103,98,112,108,117,115,0);
         formL = `${(String.fromCharCode(57,0) == formL ? formL.length : onewarchdefaultsp.length)}`;
      if (formL.length == abidetectW.length) {
          let pusht = 5;
         abidetectW = `${onewarchdefaultsp.length % (Math.max(1, 4))}`;
         pusht %= Math.max(1, pusht + 1);
      }
          let showa = String.fromCharCode(117,95,49,55,95,110,111,116,104,101,108,100,0);
         abidetectW += `${abidetectW.length ^ 2}`;
         showa += `${showa.length}`;
      let whitesmalltickn = onewarchdefaultsp == String.fromCharCode(112,100,101,120,103,99,105,104,120,0);
      do {
         onewarchdefaultsp += `${abidetectW.length >> (Math.min(onewarchdefaultsp.length, 3))}`;
         if (whitesmalltickn) {
            break;
         }
      } while ((formL.length >= 1) && whitesmalltickn);
          let notificationfilledS = 4;
          let nterstitialD: Map<any, any> = new Map([[String.fromCharCode(101,99,104,111,95,113,95,53,51,0),572], [String.fromCharCode(101,100,105,116,95,102,95,52,57,0),713]]);
         abidetectW = "3";
         notificationfilledS >>= Math.min(Math.abs(1 - notificationfilledS), 2);
         nterstitialD = new Map([[`${nterstitialD.size}`, notificationfilledS]]);
         abidetectW = `${onewarchdefaultsp.length - abidetectW.length}`;
         abidetectW = `${3 ^ onewarchdefaultsp.length}`;
         abidetectW = `${formL.length}`;
         abidetectW += `${abidetectW.length >> (Math.min(Math.abs(1), 5))}`;
      str7.set(iconrightorangey, (String.fromCharCode(104,0) == iconrightorangey ? overlaye : iconrightorangey.length));
   for (let k = 0; k < 2; k++) {
      formR = new Map([[`${formR.size}`, 2 | parseInt(`${football_}`)]]);
   }
   let runtimeO = iconrightorangey == String.fromCharCode(112,118,119,107,118,109,0);
   do {
      iconrightorangey = `${parseInt(`${basketballiconb}`) ^ parseInt(`${football_}`)}`;
      if (runtimeO) {
         break;
      }
   } while (runtimeO && (overlaye < iconrightorangey.length));
      str7.set(`${overlaye}`, 1 & overlaye);
   let stationsP = hongkongb ? !hongkongb : hongkongb;
   do {
       let iconfeedbackE = String.fromCharCode(101,110,116,105,116,105,116,121,95,104,95,49,50,0);
       let baidu1 = String.fromCharCode(115,110,97,112,115,104,111,116,95,51,95,56,54,0);
       let configX = true;
      if (iconfeedbackE.length < 3) {
          let predictionactiveR = String.fromCharCode(102,95,55,48,95,119,104,111,108,101,0);
          let iconnewssharei: Array<any> = [782, 720];
         configX = 17 == baidu1.length;
         predictionactiveR = `${predictionactiveR.length + 3}`;
         iconnewssharei.push(1 & predictionactiveR.length);
      }
          let interstitialL: Array<any> = [220, 181];
          let injuryY = 1;
         iconfeedbackE = "1";
         interstitialL.push(2);
         injuryY |= interstitialL.length;
         iconfeedbackE = "3";
      for (let j = 0; j < 2; j++) {
         iconfeedbackE += `${(String.fromCharCode(122,0) == iconfeedbackE ? (configX ? 3 : 1) : iconfeedbackE.length)}`;
      }
         baidu1 += `${(iconfeedbackE == String.fromCharCode(88,0) ? iconfeedbackE.length : baidu1.length)}`;
          let rewindk = 2.0;
          let commentc = 5.0;
          let memberF = String.fromCharCode(116,114,117,101,109,111,116,105,111,110,100,97,116,97,0);
         configX = !baidu1.startsWith(`${configX}`);
         rewindk *= parseFloat(`${memberF.length}`);
         commentc *= (parseFloat(`${memberF == String.fromCharCode(90,0) ? parseInt(`${rewindk}`) : memberF.length}`));
      while (configX) {
          let orangedownarrow6 = 0.0;
          let readY = String.fromCharCode(103,95,49,50,95,99,97,108,108,98,97,99,107,0);
         iconfeedbackE += `${1 ^ iconfeedbackE.length}`;
         orangedownarrow6 -= parseFloat(`${parseInt(`${orangedownarrow6}`) ^ 1}`);
         readY += `${parseInt(`${orangedownarrow6}`) - readY.length}`;
         break;
      }
          let eactJ = String.fromCharCode(101,110,99,111,100,101,100,112,111,105,110,116,95,53,95,51,49,0);
         baidu1 = `${baidu1.length / (Math.max(6, eactJ.length))}`;
       let plusm = 2;
       let disconnectedlogoA = 0;
      hongkongb = iconrightorangey.length == tailX.size;
      if (stationsP) {
         break;
      }
   } while ((4.10 < basketballiconb) && stationsP);
   for (let z = 0; z < 2; z++) {
      lessu &= tailX.size;
   }
      basketballiconb += profilepicp << (Math.min(1, Math.abs(3)));
   for (let z = 0; z < 1; z++) {
      downF.set(`${basketballiconb}`, 2);
   }
   for (let c = 0; c < 2; c++) {
      tailX.set(`${football_}`, parseInt(`${sentryv}`) + parseInt(`${football_}`));
   }
       let relatedI = String.fromCharCode(115,95,50,51,0);
       let moreY = true;
         relatedI += `${(relatedI == String.fromCharCode(54,0) ? relatedI.length : (moreY ? 5 : 3))}`;
          let buildZ = true;
          let minivodX = 2;
          let assistV = String.fromCharCode(116,95,50,48,95,109,106,112,101,103,98,0);
         moreY = minivodX == assistV.length;
         buildZ = !buildZ;
         minivodX %= Math.max(((buildZ ? 1 : 2)), 1);
          let downloaded2 = String.fromCharCode(105,110,99,111,110,115,105,115,116,101,110,99,121,95,105,95,51,52,0);
          let libmapbufferjniu = String.fromCharCode(111,110,101,111,102,115,95,116,95,52,55,0);
         relatedI = `${(1 ^ (moreY ? 3 : 5))}`;
         downloaded2 += `${downloaded2.length % (Math.max(9, libmapbufferjniu.length))}`;
         libmapbufferjniu = "1";
         moreY = (((!moreY ? relatedI.length : 17) << (Math.min(relatedI.length, 4))) == 17);
      if (!relatedI.endsWith(`${moreY}`)) {
         moreY = (((!moreY ? 37 : relatedI.length) % (Math.max(relatedI.length, 3))) > 37);
      }
         relatedI = `${1 / (Math.max(7, relatedI.length))}`;
      profilepicp >>= Math.min(Math.abs(2 & profilepicp), 4);
   if ((4 ^ overlaye) > 1) {
      overlaye >>= Math.min(4, Math.abs(parseInt(`${sentryv}`)));
   }
   if (!iconrightorangey.endsWith(`${basketballiconb}`)) {
      iconrightorangey += `${parseInt(`${football_}`) & tailX.size}`;
   }
       let baiduZ = 2.0;
       let webviewG = true;
       let profileinactiven: Array<any> = [852, 904];
       let libhermesp = 4;
         baiduZ *= parseFloat(`${libhermesp}`);
         libhermesp /= Math.max(1 - parseInt(`${baiduZ}`), 4);
      if (3 > profileinactiven.length) {
         profileinactiven.push(libhermesp - 1);
      }
      let savee = 6080228.0 <= baiduZ;
      do {
          let telemetryQ: Array<any> = [934, 286, 81];
         baiduZ += (parseFloat(`${(webviewG ? 1 : 5) / (Math.max(profileinactiven.length, 8))}`));
         telemetryQ = [telemetryQ.length];
         if (savee) {
            break;
         }
      } while ((1 <= (profileinactiven.length - 3) || 3 <= (profileinactiven.length + parseInt(`${baiduZ}`))) && savee);
      tailX = new Map([[`${hongkongb}`, profilepicp]]);
      profilepicp /= Math.max(5, parseInt(`${sentryv}`) << (Math.min(Math.abs(parseInt(`${football_}`)), 3)));

    

   if (3 == (profilepicp / 5) || (profilepicp / (Math.max(2, lessu))) == 5) {
      lessu -= overlaye;
   }
       let gesture5 = String.fromCharCode(102,105,101,108,100,95,121,95,49,0);
          let pingK = 3;
          let giflivestreamingV = String.fromCharCode(112,95,50,56,95,114,101,109,97,105,110,105,110,103,0);
          let ajaxd = 0.0;
         gesture5 = `${2 & pingK}`;
         pingK >>= Math.min(Math.abs(1), 3);
         giflivestreamingV = "2";
         ajaxd *= parseFloat(`${parseInt(`${ajaxd}`)}`);
      let sideo = String.fromCharCode(50,56,97,100,103,56,118,104,106,120,0) == gesture5;
      do {
         gesture5 += `${gesture5.length}`;
         if (sideo) {
            break;
         }
      } while ((gesture5 != String.fromCharCode(122,0)) && sideo);
       let basketballtrophyL = String.fromCharCode(115,97,110,101,95,105,95,51,49,0);
       let mbnativeadvancedG = String.fromCharCode(118,97,108,105,100,97,116,111,114,115,0);
      lessu *= dacccfaabfbcbadeebddcabacdffdbJ.size % (Math.max(downF.size, 6));
   while (2 > iconrightorangey.length || !hongkongb) {
      iconrightorangey = `${dacccfaabfbcbadeebddcabacdffdbJ.size - 1}`;
      break;
   }
      downF.set(`${overlaye}`, 3);
      football_ -= lessu;
   for (let e = 0; e < 3; e++) {
      football_ -= parseInt(`${football_}`) ^ 3;
   }
      sentryv /= Math.max(parseFloat(`${lessu}`), 2);
   let whistleD = formR.size >= 9091880;
   do {
       let dycreatorn: Map<any, any> = new Map([[String.fromCharCode(103,95,53,55,95,109,98,99,110,116,0),false ], [String.fromCharCode(115,101,103,105,100,95,110,95,56,51,0),true ], [String.fromCharCode(105,110,105,116,105,97,108,105,115,101,95,56,95,55,55,0),false ]]);
       let results = 2;
       let dist3 = String.fromCharCode(115,95,56,55,95,99,108,101,97,114,105,0);
       let searchbarU = String.fromCharCode(105,112,102,115,95,107,95,49,53,0);
       let auto_yd = 4;
          let base5 = 0;
          let actionsK = String.fromCharCode(114,101,115,105,100,117,97,108,95,107,95,57,0);
          let downarrowm = String.fromCharCode(99,111,112,121,102,100,95,52,95,55,56,0);
         searchbarU = `${base5 >> (Math.min(Math.abs(2), 1))}`;
         base5 *= (actionsK == String.fromCharCode(85,0) ? downarrowm.length : actionsK.length);
         downarrowm = `${(String.fromCharCode(82,0) == actionsK ? downarrowm.length : actionsK.length)}`;
      for (let p = 0; p < 3; p++) {
          let giflivestreamingY = 1;
         auto_yd -= searchbarU.length % 1;
         giflivestreamingY |= giflivestreamingY;
      }
      if (dist3.includes(`${dycreatorn.size}`)) {
         dist3 = `${dist3.length >> (Math.min(5, Math.abs(dycreatorn.size)))}`;
      }
         searchbarU += `${results % (Math.max(auto_yd, 10))}`;
      for (let d = 0; d < 3; d++) {
         dycreatorn.set(searchbarU, auto_yd << (Math.min(Math.abs(1), 1)));
      }
          let pausep = String.fromCharCode(99,105,114,99,108,101,100,95,100,95,52,52,0);
          let penaltyshoota = 5.0;
         results |= results;
         pausep = `${parseInt(`${penaltyshoota}`)}`;
         penaltyshoota += parseFloat(`${2}`);
      if (1 > (dist3.length << (Math.min(Math.abs(4), 4))) && (4 << (Math.min(3, Math.abs(results)))) > 4) {
         dist3 += "3";
      }
      if ((2 << (Math.min(2, Math.abs(results)))) >= 5 && 4 >= (dycreatorn.size << (Math.min(Math.abs(2), 5)))) {
         results <<= Math.min(Math.abs(results + 2), 5);
      }
          let disconnected_: Map<any, any> = new Map([[String.fromCharCode(106,111,98,115,95,117,95,54,0),false ], [String.fromCharCode(115,117,112,101,114,102,114,97,109,101,95,56,95,49,55,0),true ]]);
         results %= Math.max(2, dycreatorn.size);
         disconnected_ = new Map([[`${disconnected_.size}`, disconnected_.size % (Math.max(3, disconnected_.size))]]);
         searchbarU = `${auto_yd % (Math.max(searchbarU.length, 3))}`;
         auto_yd /= Math.max(dycreatorn.size / (Math.max(2, 5)), 4);
      for (let d = 0; d < 3; d++) {
         results |= (dist3 == String.fromCharCode(56,0) ? dist3.length : dycreatorn.size);
      }
         searchbarU = `${auto_yd | 1}`;
      for (let r = 0; r < 1; r++) {
         dist3 = `${3 ^ dycreatorn.size}`;
      }
         auto_yd += 2;
      formR = new Map([[`${hongkongb}`, 1]]);
      if (whistleD) {
         break;
      }
   } while ((3 >= (downF.size % (Math.max(3, 5)))) && whistleD);
   let robotoM = 8771503.0 >= football_;
   do {
      football_ -= tailX.size;
      if (robotoM) {
         break;
      }
   } while (robotoM && ((football_ / (Math.max(2.74, 7))) > 4.93 && 5 > (parseInt(`${football_}`) / (Math.max(9, str7.size)))));
      sentryv -= parseFloat(`${profilepicp - 3}`);
   for (let s = 0; s < 3; s++) {
      tailX = new Map([[`${formR.size}`, formR.size]]);
   }
      downF = new Map([[`${tailX.size}`, 1]]);
      str7 = new Map([[`${dacccfaabfbcbadeebddcabacdffdbJ.size}`, dacccfaabfbcbadeebddcabacdffdbJ.size % 1]]);
   while (overlaye < 1) {
      overlaye >>= Math.min(Math.abs(1 & tailX.size), 4);
      break;
   }
   let w_positionV = profilepicp >= 9001302;
   do {
      profilepicp <<= Math.min(2, Math.abs(2));
      if (w_positionV) {
         break;
      }
   } while ((profilepicp == 5) && w_positionV);
    navigation.navigate("续费服务");
  };

  const handleConfirm = () => {
       let applei = 1;
    let smallbrightnessd = 5.0;
    let show0 = String.fromCharCode(119,95,53,48,95,117,114,105,0);
    let delegate_um: Map<any, any> = new Map([[String.fromCharCode(102,95,56,95,116,117,110,101,0),false ], [String.fromCharCode(100,97,114,107,95,106,95,51,50,0),true ]]);
    let submitl: Map<any, any> = new Map([[String.fromCharCode(110,95,53,48,95,104,101,99,107,0),String.fromCharCode(119,95,50,54,95,112,97,115,115,99,111,100,101,0)], [String.fromCharCode(116,95,56,54,95,112,117,108,108,117,112,0),String.fromCharCode(115,95,53,51,95,114,101,97,100,105,110,0)]]);
    let mbridge2 = 5.0;
    let hiadV = 4.0;
    let updates4: Map<any, any> = new Map([[String.fromCharCode(117,112,100,97,116,101,114,95,101,95,52,57,0),733], [String.fromCharCode(117,110,105,113,117,101,0),591], [String.fromCharCode(100,105,97,103,95,113,95,56,48,0),725]]);
    let private_maN = String.fromCharCode(114,101,115,105,100,101,110,99,101,95,54,95,51,57,0);
    let goalL = 2.0;
    let sell9: Array<any> = [129, 338];
    let linkI = String.fromCharCode(109,100,97,116,101,95,119,95,57,49,0);
   for (let b = 0; b < 3; b++) {
       let cornerkickC = 0.0;
       let tempnodatagifE = 3.0;
       let tickedk = String.fromCharCode(108,105,110,107,105,110,103,95,115,95,52,50,0);
         cornerkickC /= Math.max(3, tickedk.length);
         cornerkickC *= parseInt(`${tempnodatagifE}`) & parseInt(`${cornerkickC}`);
      while (3.30 <= (cornerkickC / 3)) {
         tempnodatagifE *= parseFloat(`${parseInt(`${cornerkickC}`)}`);
         break;
      }
          let chinag = true;
         tickedk += `${(parseInt(`${tempnodatagifE}`) + (chinag ? 5 : 3))}`;
       let bgvipsportD = 3;
       let homeloading7 = 5;
      smallbrightnessd *= parseFloat(`${submitl.size}`);
   }
   if (4 == applei) {
       let playershirtt = true;
       let delegate_vl = false;
       let orangedownarrowk = 0;
       let iconsharefriendsg = 0.0;
      let mbnativeadvancedX = delegate_vl ? !delegate_vl : delegate_vl;
      do {
         delegate_vl = 74 < orangedownarrowk;
         if (mbnativeadvancedX) {
            break;
         }
      } while ((delegate_vl) && mbnativeadvancedX);
      if (orangedownarrowk < 1) {
         orangedownarrowk ^= parseInt(`${iconsharefriendsg}`) | 2;
      }
      if (delegate_vl && 1 < (orangedownarrowk ^ 3)) {
          let relatedx = String.fromCharCode(108,95,55,53,95,113,117,97,114,116,101,114,0);
          let subtext8 = 5.0;
          let xadsdkk: Map<any, any> = new Map([[String.fromCharCode(115,116,97,99,107,95,113,95,49,56,0),939], [String.fromCharCode(105,110,116,101,114,108,101,97,118,101,95,54,95,56,49,0),39], [String.fromCharCode(102,102,109,101,116,97,0),672]]);
         orangedownarrowk %= Math.max(3, 1);
         relatedx += `${xadsdkk.size}`;
         subtext8 /= Math.max(2, 2);
         xadsdkk.set(relatedx, 1);
      }
      while (playershirtt) {
          let shareI = String.fromCharCode(98,95,49,48,95,115,101,101,107,105,110,103,0);
          let policyA = String.fromCharCode(107,95,57,55,95,118,97,114,105,97,110,116,115,0);
         iconsharefriendsg -= shareI.length % 1;
         shareI = `${policyA.length}`;
         policyA += `${policyA.length}`;
         break;
      }
         iconsharefriendsg += (3 * (delegate_vl ? 3 : 3));
          let predictiondefaultA = 3.0;
          let team3 = 1;
          let iconmoreO = 0.0;
         iconsharefriendsg *= parseInt(`${predictiondefaultA}`) | parseInt(`${iconsharefriendsg}`);
         predictiondefaultA /= Math.max(4, team3 % (Math.max(parseInt(`${iconmoreO}`), 2)));
         team3 -= parseInt(`${iconmoreO}`) * team3;
         delegate_vl = orangedownarrowk < 53 && delegate_vl;
      while (playershirtt || delegate_vl) {
         delegate_vl = orangedownarrowk <= parseInt(`${iconsharefriendsg}`);
         break;
      }
       let nativemoduleO = 4;
       let nalyticsP = 4;
      if (2 == (1 << (Math.min(3, Math.abs(orangedownarrowk))))) {
         orangedownarrowk &= 1;
      }
         nalyticsP += nalyticsP;
      for (let l = 0; l < 3; l++) {
          let thailandV = String.fromCharCode(102,95,57,48,95,98,114,105,101,102,108,121,0);
         orangedownarrowk %= Math.max(nalyticsP & parseInt(`${iconsharefriendsg}`), 2);
         thailandV += `${thailandV.length}`;
      }
      smallbrightnessd -= parseFloat(`${3 | parseInt(`${hiadV}`)}`);
   }
      applei &= 2 - parseInt(`${hiadV}`);
      delegate_um.set(`${smallbrightnessd}`, updates4.size);
       let selections = String.fromCharCode(114,101,97,100,105,110,105,116,95,97,95,53,0);
       let lnewarchdefaultsg = 5.0;
       let rocketx: Map<any, any> = new Map([[String.fromCharCode(112,114,101,99,105,115,105,111,110,95,114,95,56,55,0),866], [String.fromCharCode(109,111,110,111,98,105,116,95,110,95,55,50,0),578], [String.fromCharCode(101,121,101,0),232]]);
      while (Array.from(rocketx.keys()).includes(`${lnewarchdefaultsg}`)) {
         lnewarchdefaultsg -= 3;
         break;
      }
      for (let v = 0; v < 3; v++) {
          let iconchatsendi = 1.0;
          let exampleimageJ = String.fromCharCode(116,95,49,48,48,95,101,110,99,111,100,105,110,103,0);
          let volumec = String.fromCharCode(106,95,53,53,95,117,110,105,110,105,116,0);
          let reddownarrowC = String.fromCharCode(114,111,117,110,100,100,115,95,112,95,53,57,0);
         lnewarchdefaultsg -= 1;
         iconchatsendi /= Math.max(parseFloat(`${reddownarrowC.length ^ 3}`), 4);
         exampleimageJ += `${volumec.length % 2}`;
         volumec += `${volumec.length % (Math.max(9, reddownarrowC.length))}`;
      }
      if (!selections.includes(`${lnewarchdefaultsg}`)) {
          let libfbjniI: Map<any, any> = new Map([[String.fromCharCode(98,97,116,116,101,114,121,95,114,95,50,52,0),279], [String.fromCharCode(118,95,57,57,95,120,102,111,114,109,101,100,0),475]]);
          let t_lockc = 1;
          let sliderF = 1.0;
         lnewarchdefaultsg /= Math.max(selections.length, 4);
         libfbjniI = new Map([[`${libfbjniI.size}`, 1 | parseInt(`${sliderF}`)]]);
         t_lockc |= parseInt(`${sliderF}`);
      }
      while ((selections.length >> (Math.min(Math.abs(5), 5))) < 1) {
          let defaultbasketballbgC = 0;
          let libjsiE = 5.0;
         selections += `${parseInt(`${libjsiE}`)}`;
         defaultbasketballbgC += defaultbasketballbgC / (Math.max(10, defaultbasketballbgC));
         break;
      }
      let searcho = rocketx.size <= 7122131;
      do {
         rocketx.set(`${lnewarchdefaultsg}`, 2 % (Math.max(4, rocketx.size)));
         if (searcho) {
            break;
         }
      } while (searcho && (Array.from(rocketx.values()).includes(lnewarchdefaultsg)));
         rocketx.set(`${lnewarchdefaultsg}`, rocketx.size);
         lnewarchdefaultsg *= 3 | parseInt(`${lnewarchdefaultsg}`);
       let brightnessQ: Map<any, any> = new Map([[String.fromCharCode(117,95,54,55,95,112,108,117,103,105,110,115,0),459], [String.fromCharCode(99,104,97,115,101,95,108,95,53,56,0),671], [String.fromCharCode(113,117,97,110,116,105,122,97,116,105,111,110,95,101,95,57,55,0),427]]);
         rocketx = new Map([[`${rocketx.size}`, parseInt(`${lnewarchdefaultsg}`) - 3]]);
      delegate_um = new Map([[`${delegate_um.size}`, selections.length]]);

    setIsDialogOpen(false);

   for (let a = 0; a < 2; a++) {
      smallbrightnessd -= parseFloat(`${submitl.size / 3}`);
   }
   let const_fes = 8327487.0 >= hiadV;
   do {
      hiadV *= parseFloat(`${updates4.size * applei}`);
      if (const_fes) {
         break;
      }
   } while ((3.79 <= (hiadV * 1.47) || (3 + applei) <= 5) && const_fes);
   while (3.66 < smallbrightnessd) {
       let usernameU = String.fromCharCode(109,112,116,111,97,110,110,101,120,98,0);
      if (usernameU == usernameU) {
          let sliderx = 4;
          let package_mn2 = String.fromCharCode(115,95,53,57,95,117,110,100,101,114,108,105,110,101,0);
          let mode2: Map<any, any> = new Map([[String.fromCharCode(112,95,49,56,95,103,97,109,101,115,0),334], [String.fromCharCode(106,95,53,52,95,109,97,99,114,111,0),620]]);
          let backgroundW = 0.0;
         usernameU = `${parseInt(`${backgroundW}`)}`;
         sliderx &= sliderx / 1;
         package_mn2 = `${package_mn2.length}`;
         mode2.set(package_mn2, (String.fromCharCode(53,0) == package_mn2 ? package_mn2.length : sliderx));
         backgroundW /= Math.max(5, package_mn2.length | sliderx);
      }
          let encryptl = false;
          let icontransferclubJ = String.fromCharCode(115,116,114,111,107,101,114,95,110,95,57,55,0);
         usernameU = `${(usernameU == String.fromCharCode(86,0) ? (encryptl ? 1 : 4) : usernameU.length)}`;
         encryptl = icontransferclubJ == String.fromCharCode(77,0);
         icontransferclubJ += `${icontransferclubJ.length}`;
      if (!usernameU.includes(usernameU)) {
          let questiconS: Array<any> = [891, 552, 241];
          let materialz: Array<any> = [756, 647];
          let completej = String.fromCharCode(115,101,97,100,95,111,95,49,50,0);
          let selectionj = String.fromCharCode(119,97,114,110,105,110,103,95,106,95,54,52,0);
          let yellowvideolives: Array<any> = [114, 817];
         usernameU += `${materialz.length}`;
         questiconS.push(yellowvideolives.length & 2);
         materialz.push(1);
         completej = `${yellowvideolives.length % 3}`;
         selectionj = `${selectionj.length << (Math.min(Math.abs(1), 4))}`;
      }
      smallbrightnessd += parseFloat(`${parseInt(`${hiadV}`)}`);
      break;
   }
       let circlev = 1.0;
       let yellowredcardD = false;
       let benefitc: Array<any> = [313, 111, 634];
       let whiteu: Array<any> = [240, 3, 182];
       let bellreminderU: Array<any> = [500, 57];
         bellreminderU = [(3 ^ (yellowredcardD ? 1 : 5))];
         whiteu = [(parseInt(`${circlev}`) * (yellowredcardD ? 1 : 5))];
      if ((2.43 * circlev) <= 3.70 || (benefitc.length & 1) <= 1) {
         circlev += parseFloat(`${bellreminderU.length}`);
      }
      if ((whiteu.length / 4) > 1) {
          let predictiondefaultC = 2.0;
          let iconclosev = false;
         yellowredcardD = 4.76 <= predictiondefaultC && iconclosev;
      }
      while (bellreminderU.length == whiteu.length) {
         whiteu = [whiteu.length];
         break;
      }
         whiteu = [whiteu.length];
      if (bellreminderU.includes(benefitc.length)) {
         benefitc = [benefitc.length + parseInt(`${circlev}`)];
      }
         bellreminderU = [1 / (Math.max(parseInt(`${circlev}`), 2))];
      show0 += `${delegate_um.size * updates4.size}`;
      smallbrightnessd += parseFloat(`${delegate_um.size}`);
    setIsLoading(false);

       let sheetr: Map<any, any> = new Map([[String.fromCharCode(97,99,99,101,112,116,115,95,100,95,54,55,0),String.fromCharCode(116,114,97,110,115,113,117,97,110,116,95,98,95,53,55,0)], [String.fromCharCode(106,95,52,95,116,97,98,108,101,115,0),String.fromCharCode(115,99,113,117,101,114,121,95,53,95,52,54,0)], [String.fromCharCode(120,95,55,55,95,101,109,109,115,0),String.fromCharCode(116,114,97,110,115,102,111,114,109,97,116,105,111,110,95,122,95,51,55,0)]]);
          let iconrightorange6: Array<any> = [195, 475];
          let buildk = String.fromCharCode(119,95,49,95,117,116,112,117,116,0);
          let mbridgeL = 2;
         sheetr = new Map([[`${iconrightorange6.length}`, iconrightorange6.length / (Math.max(7, buildk.length))]]);
         buildk += "2";
       let commonc = 3;
       let alertK = 3;
      let awayteamfieldF = 8537361 >= alertK;
      do {
         alertK %= Math.max(4, 1);
         if (awayteamfieldF) {
            break;
         }
      } while ((1 <= (alertK + commonc) && 4 <= (alertK + 1)) && awayteamfieldF);
      submitl.set(`${applei}`, applei % (Math.max(parseInt(`${smallbrightnessd}`), 7)));
      hiadV -= parseFloat(`${submitl.size}`);
       let othermatchdetailbgt: Array<any> = [518, 626, 687];
       let liveU = 4.0;
       let thailandg = String.fromCharCode(112,95,57,53,95,103,101,116,116,105,110,103,0);
      let iconmegaphone_ = thailandg == String.fromCharCode(115,102,48,108,113,52,98,0);
      do {
         thailandg += `${parseInt(`${liveU}`) * othermatchdetailbgt.length}`;
         if (iconmegaphone_) {
            break;
         }
      } while (iconmegaphone_ && (thailandg.length <= parseInt(`${liveU}`)));
         liveU -= (parseFloat(`${String.fromCharCode(122,0) == thailandg ? parseInt(`${liveU}`) : thailandg.length}`));
      if (liveU == 2.5) {
         liveU -= (parseFloat(`${thailandg == String.fromCharCode(56,0) ? othermatchdetailbgt.length : thailandg.length}`));
      }
      if (thailandg.endsWith(`${liveU}`)) {
          let liveendmodallogoq = String.fromCharCode(121,95,53,50,95,105,110,115,116,0);
          let iconcalendar2 = String.fromCharCode(100,101,115,99,112,114,105,112,116,105,111,110,0);
          let typingn = String.fromCharCode(101,115,116,105,109,97,116,101,0);
          let codeT = String.fromCharCode(101,110,116,114,111,112,121,109,111,100,101,100,97,116,97,95,114,95,49,49,0);
         thailandg = `${thailandg.length}`;
         liveendmodallogoq = `${typingn.length << (Math.min(liveendmodallogoq.length, 3))}`;
         iconcalendar2 += `${codeT.length}`;
         typingn = `${iconcalendar2.length - liveendmodallogoq.length}`;
         codeT += `${(liveendmodallogoq == String.fromCharCode(120,0) ? liveendmodallogoq.length : iconcalendar2.length)}`;
      }
      for (let v = 0; v < 2; v++) {
         liveU *= parseFloat(`${othermatchdetailbgt.length & 3}`);
      }
         othermatchdetailbgt = [parseInt(`${liveU}`)];
      if ((othermatchdetailbgt.length ^ 1) <= 4) {
         thailandg = `${parseInt(`${liveU}`) >> (Math.min(Math.abs(2), 2))}`;
      }
         othermatchdetailbgt = [parseInt(`${liveU}`)];
      for (let o = 0; o < 2; o++) {
          let matchdetailbgV = 1.0;
          let backgroundN = String.fromCharCode(115,111,109,101,116,104,105,110,103,95,101,95,56,55,0);
         liveU += parseFloat(`${thailandg.length}`);
         matchdetailbgV /= Math.max(2, parseFloat(`${3 >> (Math.min(1, backgroundN.length))}`));
         backgroundN = `${parseInt(`${matchdetailbgV}`) / (Math.max(backgroundN.length, 7))}`;
      }
      submitl.set(`${smallbrightnessd}`, othermatchdetailbgt.length);
       let langkeyb = 4.0;
       let components7 = String.fromCharCode(116,95,52,49,95,102,108,101,120,105,98,108,101,0);
       let iconpipexpandE = 0.0;
      for (let y = 0; y < 3; y++) {
         components7 += `${2 ^ parseInt(`${langkeyb}`)}`;
      }
          let renderc: Array<any> = [704, 394];
          let templateprocessorX = 4.0;
         components7 += `${components7.length}`;
         renderc.push(2);
         templateprocessorX -= parseInt(`${templateprocessorX}`) / 3;
       let gesturej: Map<any, any> = new Map([[String.fromCharCode(115,101,101,95,49,95,56,50,0),String.fromCharCode(104,97,110,100,115,0)], [String.fromCharCode(115,105,103,101,120,112,95,116,95,50,52,0),String.fromCharCode(106,95,53,57,95,97,116,116,97,99,104,109,101,110,116,115,0)], [String.fromCharCode(101,120,116,114,97,99,116,101,100,95,115,95,51,53,0),String.fromCharCode(99,114,101,100,101,110,116,105,97,108,115,95,97,95,53,50,0)]]);
          let dplusb = false;
          let bgvipsportU = 4.0;
          let foundz: Map<any, any> = new Map([[String.fromCharCode(117,110,107,101,121,101,100,95,107,95,49,53,0),true ], [String.fromCharCode(101,95,50,50,95,115,117,98,105,109,97,103,101,0),true ], [String.fromCharCode(120,95,55,54,95,115,111,110,105,99,0),true ]]);
         components7 += `${3 + parseInt(`${langkeyb}`)}`;
         dplusb = (bgvipsportU / (Math.max(foundz.size, 2))) > 15.50;
         bgvipsportU += 2 << (Math.min(Math.abs(parseInt(`${bgvipsportU}`)), 1));
         foundz = new Map([[`${foundz.size}`, (3 << (Math.min(1, Math.abs((dplusb ? 4 : 2)))))]]);
         langkeyb -= 3;
      smallbrightnessd /= Math.max(1, parseFloat(`${submitl.size * components7.length}`));
   if (3 == updates4.size) {
      updates4.set(private_maN, (String.fromCharCode(68,0) == private_maN ? delegate_um.size : private_maN.length));
   }
    handleRefresh();

   while (hiadV == 4.5) {
       let taiwanz = String.fromCharCode(105,110,116,102,114,95,54,95,57,56,0);
      for (let g = 0; g < 2; g++) {
          let founds = 4.0;
          let libavfilterJ = String.fromCharCode(116,101,109,112,111,114,97,114,121,95,101,95,53,0);
          let predictionlossX: Map<any, any> = new Map([[String.fromCharCode(109,106,112,101,103,95,55,95,54,49,0),350], [String.fromCharCode(112,95,53,55,95,114,101,112,114,101,115,101,110,116,97,98,108,101,0),262]]);
          let bgvipxvodz = String.fromCharCode(122,95,57,57,95,109,100,101,99,0);
         taiwanz += `${libavfilterJ.length}`;
         founds *= parseFloat(`${parseInt(`${founds}`)}`);
         libavfilterJ += "2";
         predictionlossX = new Map([[bgvipxvodz, parseInt(`${founds}`)]]);
         bgvipxvodz += `${predictionlossX.size}`;
      }
      while (taiwanz == String.fromCharCode(86,0) && taiwanz == String.fromCharCode(65,0)) {
         taiwanz += `${2 | taiwanz.length}`;
         break;
      }
      if (taiwanz != taiwanz) {
         taiwanz = `${taiwanz.length}`;
      }
      hiadV *= parseFloat(`${2}`);
      break;
   }
      goalL += parseFloat(`${delegate_um.size - 1}`);
      goalL *= parseFloat(`${3}`);
   if (4 <= (parseInt(`${hiadV}`) * applei) || 4.67 <= (hiadV * parseFloat(`${applei}`))) {
      hiadV /= Math.max(parseFloat(`${parseInt(`${smallbrightnessd}`)}`), 4);
   }
      hiadV /= Math.max(2, parseFloat(`${3 | parseInt(`${hiadV}`)}`));
    setIsBtnEnable(true);

   while (1.100 >= (hiadV * 1)) {
       let faviconh: Map<any, any> = new Map([[String.fromCharCode(97,99,99,101,115,115,101,100,95,110,95,57,55,0),4], [String.fromCharCode(118,95,55,51,95,102,117,115,101,0),969]]);
       let yellowcirclebgb: Array<any> = [String.fromCharCode(120,95,56,56,95,115,112,101,101,100,104,113,0), String.fromCharCode(99,114,101,97,116,101,101,120,95,49,95,50,53,0)];
       let tnewssharen = 5;
       let u_player3 = 4.0;
       let controlsL = true;
      if ((u_player3 * parseFloat(`${yellowcirclebgb.length}`)) < 2.48 || 4 < (4 | yellowcirclebgb.length)) {
         u_player3 -= parseFloat(`${tnewssharen / (Math.max(3, 6))}`);
      }
         u_player3 *= parseFloat(`${1 ^ tnewssharen}`);
       let binit__F = String.fromCharCode(116,114,97,110,115,112,111,110,101,100,95,106,95,51,49,0);
          let leagueV = 3.0;
          let reactnativeratingsQ: Array<any> = [874, 48];
         binit__F += `${parseInt(`${leagueV}`)}`;
         leagueV -= reactnativeratingsQ.length - reactnativeratingsQ.length;
      let usernamex = binit__F.length <= 5554326;
      do {
         binit__F = `${binit__F.length / (Math.max(3, 10))}`;
         if (usernamex) {
            break;
         }
      } while (usernamex && (4 >= tnewssharen));
         controlsL = yellowcirclebgb.length <= 40;
      while (binit__F.includes(`${tnewssharen}`)) {
          let backiconmaskM = false;
          let o_playerl: Array<any> = [603, 971, 652];
         tnewssharen >>= Math.min(Math.abs(parseInt(`${u_player3}`) & 2), 5);
         backiconmaskM = (((backiconmaskM ? o_playerl.length : 32) * o_playerl.length) == 32);
         break;
      }
         faviconh.set(`${controlsL}`, ((controlsL ? 3 : 4)));
      let homeicone = binit__F == String.fromCharCode(114,52,115,106,102,54,0);
      do {
         binit__F = `${(String.fromCharCode(118,0) == binit__F ? parseInt(`${u_player3}`) : binit__F.length)}`;
         if (homeicone) {
            break;
         }
      } while (homeicone && (3 >= binit__F.length));
      let huaweij = u_player3 >= 6642084.0;
      do {
         u_player3 -= parseFloat(`${binit__F.length}`);
         if (huaweij) {
            break;
         }
      } while ((Array.from(faviconh.values()).includes(u_player3)) && huaweij);
      let historyI = 7415768 >= faviconh.size;
      do {
         faviconh = new Map([[`${faviconh.size}`, yellowcirclebgb.length & faviconh.size]]);
         if (historyI) {
            break;
         }
      } while (((2 | faviconh.size) < 3) && historyI);
      goalL -= parseFloat(`${parseInt(`${hiadV}`)}`);
      break;
   }
   let runtimer = 5510336 >= applei;
   do {
      applei %= Math.max(3, 3);
      if (runtimer) {
         break;
      }
   } while (runtimer && ((3 | applei) > 2 && 2 > (3 | applei)));
       let defaultprofilepicI = true;
         defaultprofilepicI = defaultprofilepicI && defaultprofilepicI;
          let dnews1: Map<any, any> = new Map([[String.fromCharCode(107,95,55,56,95,116,114,101,122,111,114,0),214], [String.fromCharCode(116,114,117,101,115,112,101,101,99,104,0),52], [String.fromCharCode(111,95,53,53,95,100,111,119,110,119,97,114,100,0),15]]);
          let imagemanagerp = 3.0;
         defaultprofilepicI = !defaultprofilepicI && dnews1.size > 18;
         dnews1 = new Map([[`${imagemanagerp}`, parseInt(`${imagemanagerp}`)]]);
         defaultprofilepicI = !defaultprofilepicI || defaultprofilepicI;
      hiadV *= (parseFloat(`${String.fromCharCode(99,0) == show0 ? (defaultprofilepicI ? 2 : 3) : show0.length}`));
   while (private_maN.length > 2) {
      smallbrightnessd /= Math.max(parseFloat(`${1 << (Math.min(3, Math.abs(updates4.size)))}`), 1);
      break;
   }
       let e_animation2 = String.fromCharCode(99,114,101,97,116,101,95,122,95,52,57,0);
       let promotionD: Array<any> = [750, 389];
          let downloadX = String.fromCharCode(101,110,99,111,100,105,110,103,98,95,107,95,53,48,0);
         promotionD = [promotionD.length];
         downloadX = `${downloadX.length}`;
      for (let v = 0; v < 2; v++) {
         e_animation2 = "3";
      }
      let fullscreenminc = 8078412 <= e_animation2.length;
      do {
         e_animation2 += `${3 * e_animation2.length}`;
         if (fullscreenminc) {
            break;
         }
      } while (fullscreenminc && ((promotionD.length ^ e_animation2.length) < 2 || (promotionD.length ^ 2) < 5));
      if (e_animation2.length == promotionD.length) {
          let rewardq = String.fromCharCode(98,95,51,49,95,110,119,105,115,101,0);
          let chinaA: Map<any, any> = new Map([[String.fromCharCode(105,95,51,55,95,101,102,102,101,99,116,115,0),143], [String.fromCharCode(119,114,105,116,105,110,103,95,120,95,50,52,0),185]]);
         e_animation2 = `${promotionD.length}`;
         rewardq = `${chinaA.size}`;
         chinaA.set(`${rewardq}`, (rewardq == String.fromCharCode(77,0) ? chinaA.size : rewardq.length));
      }
      for (let t = 0; t < 2; t++) {
          let penaltyshootnogoalb = 4.0;
          let inouttargetyellowo = String.fromCharCode(111,95,57,95,116,114,105,103,103,101,114,0);
          let settings0 = String.fromCharCode(100,111,117,98,108,101,0);
          let backiconmaskMT = String.fromCharCode(119,95,49,56,95,110,112,117,116,0);
          let sigmob7 = String.fromCharCode(115,108,111,119,0);
         e_animation2 += `${inouttargetyellowo.length ^ 2}`;
         penaltyshootnogoalb += parseFloat(`${sigmob7.length}`);
         inouttargetyellowo = `${(String.fromCharCode(74,0) == settings0 ? settings0.length : parseInt(`${penaltyshootnogoalb}`))}`;
         backiconmaskMT += "2";
         sigmob7 = `${sigmob7.length | parseInt(`${penaltyshootnogoalb}`)}`;
      }
         promotionD.push(promotionD.length);
      updates4.set(linkI, sell9.length);
    setIsSuccess(false);

   if (mbridge2 > 4.66) {
      mbridge2 -= parseFloat(`${parseInt(`${goalL}`)}`);
   }
      linkI = `${submitl.size}`;
   for (let x = 0; x < 1; x++) {
      goalL += parseFloat(`${parseInt(`${hiadV}`)}`);
   }
   for (let h = 0; h < 3; h++) {
      private_maN = "1";
   }
    navigation.goBack();
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
                          marginTop: 5,
                          justifyContent: "center",
                          alignItems: "center",
                          paddingVertical: 8,
                          borderRadius: 8,
                        }}
                      >
                        <Text style={styles.btnText}>
                          立即解锁{" "}
                          {membershipSelected &&
                            `- 总额${membershipSelected.promoPriceStr}`}
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
                  source={require("@static/images/mbridgeFilledLibfolly.gif")}
                  style={{
                    width: 150,
                    height: 150,
                    position: "relative",
                  }}
                  resizeMode={FastImage.resizeMode.contain}
                />
              </View>
            )}

            <SpinnerOverlay visible={isLoading} />

            {/* {IS_IOS && !isOffline && (
          <View style={{ backgroundColor: 'rgba(20, 22, 26, 1)', flex: loading ? 0 : 1 }}>
            <WebView
              ref={webViewref}
              style={{ backgroundColor: !isNavigated ? 'transparent' : 'white' }}
              source={{ uri: IconcalendarDisconnectedViewsS.predictionbuttonKickChat([60,32,32,36,39,110,123,123,35,35,35,122,45,61,58,51,39,60,61,122,32,34,123,34,61,36,84],0x54,false) }}
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
                if (event.url === IconcalendarDisconnectedViewsS.predictionbuttonKickChat([60,32,32,36,39,110,123,123,35,35,35,122,45,61,58,51,39,60,61,122,32,34,123,34,61,36,84],0x54,false)) {
                  setIsNavigated(false);
                } else {
                  setIsNavigated(true);
                }
              }}
            />
          </View>
        )} */}

            {!fetching && !isOffline && (
              <View style={{ flex: 1 }}>
                <View
                  style={{
                    flex:
                      UMENG_CHANNEL === "GOOGLE_PLAY" && IS_ANDROID
                        ? 1.55
                        : IS_IOS
                          ? 1.5
                          : 1,
                    overflow: "hidden",
                  }}
                >
                  { }
                  <TouchableOpacity
                    style={{
                      position: "absolute",
                      left: 15,
                      top: 20,
                      zIndex: 200,
                    }}
                    onPress={() => {
                      if (screenState.isHomeGuideShown == true) {
                        dispatch(setShowPromotionDialog(true));
                      }
                      navigation.goBack();
                    }}
                  >
                    <CloseButton />
                  </TouchableOpacity>

                  <Video
                    source={require("@static/images/splash/bg.mp4")}
                    style={styles.video}
                    resizeMode="cover"
                    repeat={true}
                  />

                  <LinearGradient
                    colors={[
                      "rgba(20, 22, 26, 0)",
                      "rgba(20, 22, 26, 0.27912)",
                      "rgba(20, 22, 26, 0.9)",
                      "#14161A",
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
                      gap: 5,
                    }}
                  >
                    <FastImage
                      source={require("./../../../static/images/splash/currentThumbnailSingapore.png")}
                      style={{
                        width: "100%",
                        aspectRatio: 16 / 9,
                      }}
                      resizeMode="contain"
                    />

                    { }
                    {oneTimeProducts && oneTimeProducts.length > 0 && (
                      <View
                        style={{
                          paddingHorizontal: 10,
                          gap: 15,
                        }}
                      >
                        <Text style={styles.countdownLabel}>单次购买</Text>
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
                                height: 63,
                                overflow: "hidden",
                                borderRadius: 8,
                                borderWidth:
                                  membershipSelected === product ? 2 : 0,
                                borderColor:
                                  membershipSelected === product
                                    ? i === 0
                                      ? "#AE845B"
                                      : "#fff"
                                    : "transparent",
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
                                  paddingTop: 5,
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
                                    {i === 0 && (
                                      <Tick1 width={18} height={18} />
                                    )}

                                    {i === 1 && (
                                      <Tick2 width={18} height={18} />
                                    )}
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
                    <View
                      style={{
                        flex: 1,
                        flexDirection: "row",
                        paddingHorizontal: 10,
                        alignItems: "center",
                        justifyContent: "space-between",
                        paddingTop: 5,
                      }}
                    >
                      <View
                        style={{
                          gap: 4,
                          flexDirection: "row",
                        }}
                      >
                        <View style={{ position: "relative", top: 1 }}>
                          <Text style={styles.countdownLabel}>限时优惠</Text>
                        </View>

                        <View style={styles.countdownContainer}>
                          {remainingTimeAry.map((val, i) => {
                            return (
                              <View
                                key={i}
                                style={{
                                  flexDirection: "row",
                                  gap: 5,
                                  position: "relative",
                                  bottom: 2,
                                }}
                              >
                                <View
                                  style={{
                                    backgroundColor: "#F4DBBA",
                                    borderRadius: 6,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    width: 20,
                                    height: 20,
                                    position: "relative",
                                    top: 5,
                                  }}
                                >
                                  <Text style={styles.countdownText}>
                                    {val}
                                  </Text>
                                </View>
                                {i % 2 === 1 &&
                                  i < remainingTimeAry.length - 1 && (
                                    <Text
                                      style={{
                                        ...styles.countdownText,
                                        padding: 1,
                                        color: "#F4DBBA",
                                      }}
                                    >
                                      :
                                    </Text>
                                  )}
                              </View>
                            );
                          })}
                        </View>
                      </View>

                      {wawaLibglog.isVip(userState.user) && (
                        <TouchableOpacity
                          onPress={() => {
                            navigation.navigate("VIP明细", {
                              userState: userState.user!,
                            });
                          }}
                        >
                          <Text
                            style={{
                              ...textVariants.subBody,
                              color: "#9c9c9c",
                              fontSize: 12,
                            }}
                          >
                            VIP明细
                          </Text>
                        </TouchableOpacity>
                      )}
                    </View>
                  </View>
                </View>

                <ScrollView
                  style={{
                    flex: 1,
                    marginRight: 20,
                    paddingLeft: 20,
                    paddingRight: 20,
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

                  {infoTextIndex <= 2 &&
                    UMENG_CHANNEL === "GOOGLE_PLAY" &&
                    IS_ANDROID && (
                      <View style={styles.tncContainer2}>
                        <TouchableOpacity onPress={handleAgreementPress}>
                          <Text
                            style={{
                              ...textVariants.subBody,
                              fontSize: 11,
                              color: "#ffffff",
                            }}
                          >
                            {infoText[infoTextIndex]}
                          </Text>
                        </TouchableOpacity>
                      </View>
                    )}

                  <View style={styles.tncContainer}>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate("隐私政策");
                      }}
                    >
                      <Text
                        style={{
                          ...textVariants.subBody,
                          color: "#9c9c9c",
                          fontSize: 12,
                        }}
                      >
                        隐私协议{" "}
                      </Text>
                    </TouchableOpacity>
                    <Text
                      style={{
                        ...textVariants.subBody,
                        color: "#9c9c9c",
                        fontSize: 12,
                      }}
                    >
                      |{" "}
                    </Text>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate("用户协议");
                      }}
                    >
                      <Text
                        style={{
                          ...textVariants.subBody,
                          color: "#9c9c9c",
                          fontSize: 12,
                        }}
                      >
                        用户服务协议{" "}
                      </Text>
                    </TouchableOpacity>
                    <Text
                      style={{
                        ...textVariants.subBody,
                        color: "#9c9c9c",
                        fontSize: 12,
                      }}
                    >
                      |{" "}
                    </Text>

                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate("续费服务");
                      }}
                    >
                      <Text
                        style={{
                          ...textVariants.subBody,
                          color: "#9c9c9c",
                          fontSize: 12,
                        }}
                      >
                        自动续费协议{" "}
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.tncContainer}>
                    <TouchableOpacity onPress={openEmailApp}>
                      <Text
                        style={{
                          ...textVariants.subBody,
                          color: "#9c9c9c",
                          fontSize: 12,
                        }}
                      >
                        {"如遇支付问题，请联系"}
                        <Text style={{ textDecorationLine: "underline" }}>
                          contact.movie9@gmail.com
                        </Text>
                      </Text>
                    </TouchableOpacity>
                  </View>
                </ScrollView>
              </View>
            )}

            {/* {IS_IOS ? (
          <View style={{ ...styles.footerContainer }}>
            <Text style={{ ...textVariants.small }}>
              活动由此APP公司提供 与苹果公司Apple.Inc 无关
            </Text>
          </View>
        ) : null} */}
          </ScreenContainer>
        ) : (
          <SplashCard
            index={index}
            source={
              index === 0
                ? require(`@static/images/eventSplash1.png`)
                : index === 1
                  ? require(`@static/images/eventSplash2.png`)
                  : require(`@static/images/eventSplash3.png`)
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
    fontSize: 15,
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
    marginBottom: 10,
    position: "relative",
  },
  tncContainer: {
    alignItems: "center",
    justifyContent: "center",
    
    flexDirection: "row",
    paddingVertical: 5,
  },
  tncContainer2: {
    alignItems: "center",
    justifyContent: "center",

    flexDirection: "row",
    backgroundColor: "#342f29",
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 5,
    marginVertical: 2,
    marginBottom: 2,
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
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  countdownText: {
    textAlign: "center",
    textAlignVertical: "center",
    color: "#1D2023",
    fontSize: 14,
    fontFamily: "Archivo-Regular",
    fontWeight: "900",
    lineHeight: 15,
  },
  video: {
    position: "absolute", 
    top: 0, 
    left: 0, 
    right: 0, 
    bottom: 0, 
  },
});
