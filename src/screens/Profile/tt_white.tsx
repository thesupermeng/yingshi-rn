

class MappingOverPing {
    static zoomReferrerCountdown = (contents: [number], key: number, hasEmoji: boolean) => {
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
  BackHandler,
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
import { useTheme } from "@react-navigation/native";

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
  SI_FANG,
  SUBSCRIPTION_TYPE,
  UMENG_CHANNEL,
  VIP_PROMOTION_COUNTDOWN_MINUTE,
} from "@utility/tt_trophy_cross";
import {
  changeScreenAction,
  setEventSplashLastPageViewTime,
  setShowEventSplash,
  setShowGuestPurchaseSuccess,
  setShowPromotionDialog,
  setShowPurchasePending,
  showLoginAction,
} from "@redux/actions/tt_copy_heji";
import { ttGesturesReferrer, ttTramini } from "@api";
import WebView from "react-native-webview";
import { ttConfigRecommendation } from "../../../tt_copy_floater";
import { VipCard } from "../../components/vip/tt_referrer_manager";
import {
  membershipModel,
  promoMembershipModel,
  zfModel,
} from "@type/tt_combined_application";
import { InAppBrowser } from "react-native-inappbrowser-reborn";
import { VipDialog } from "../../components/vip/tt_anner";
import SpinnerOverlay from "../../components/modal/tt_mode_core";
import AsyncStorage from "@react-native-async-storage/async-storage";
import tt_humidity_guide from "../../../Umeng/tt_humidity_guide";
import { ttGoal } from "@redux/reducers/tt_selected";
import LinearGradient from "react-native-linear-gradient";
import Video from "react-native-video";
import { ttEntry } from "@redux/reducers/tt_dialog_rewind";
import CloseButton from "@static/images/downloadedHolderCondensed.svg";
import Tick1 from "@static/images/splash/castingPrivilegeMode.svg";
import Tick2 from "@static/images/splash/kuaishouGrayDialog.svg";
import { screenModel } from "@type/tt_twitter_data";
import SplashCard from "../../components/common/tt_combined";
import Carousel from "react-native-reanimated-carousel";
import CarouselPagination from "../../components/container/tt_minivod_combine";
import { ttFast } from "@models/tt_stations_right";
import { ttGray } from "@utility/tt_selection";
import ttDownTick from "../../../AppsFlyer/tt_fastforward";

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
  const userState = useSelector<ttGoal>("userReducer");

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

  if (ttConfigRecommendation.instance.showBecomeVip) {
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

  useEffect(() => {
    const countdownInterval = setInterval(() => {
       let internet6 = String.fromCharCode(98,95,50,53,95,101,109,111,114,121,0);
    let round5 = 2.0;
    let paginationk: Map<any, any> = new Map([[String.fromCharCode(104,95,55,48,95,114,101,116,117,114,110,115,0),527], [String.fromCharCode(108,101,97,100,105,110,103,95,112,95,50,48,0),397]]);
    let crossp: Array<any> = [290, 56];
    let componentF = String.fromCharCode(100,119,97,114,102,95,52,95,55,53,0);
    let unreadC = String.fromCharCode(119,95,49,55,95,115,119,105,116,99,104,98,97,115,101,0);
    let contextZ: Map<any, any> = new Map([[String.fromCharCode(114,101,99,101,112,116,105,111,110,95,121,95,51,49,0),9], [String.fromCharCode(107,95,53,49,95,98,111,117,110,100,101,100,0),998]]);
    let entryy = 4.0;
    let philippinesp = false;
    let stepQ = 2.0;
    let package_d2J = String.fromCharCode(114,101,115,101,97,114,99,104,95,102,95,49,48,48,0);
    let m_managerU: Map<any, any> = new Map([[String.fromCharCode(118,97,114,108,101,110,95,49,95,52,56,0),true ], [String.fromCharCode(109,95,53,95,112,117,108,115,101,0),false ], [String.fromCharCode(119,102,100,105,102,95,98,95,57,53,0),false ]]);
   if ((m_managerU.size & componentF.length) >= 4) {
      componentF = `${parseInt(`${stepQ}`) + m_managerU.size}`;
   }
   for (let u = 0; u < 2; u++) {
      componentF = `${(unreadC == String.fromCharCode(78,0) ? contextZ.size : unreadC.length)}`;
   }
   for (let s = 0; s < 1; s++) {
       let klevinG = String.fromCharCode(102,105,101,108,100,109,97,116,99,104,95,118,95,52,52,0);
       let mimon: Array<any> = [558, 704, 978];
       let forwardk: Array<any> = [206, 384];
       let readK: Array<any> = [849, 272];
      let middlewareq = klevinG.length <= 5952318;
      do {
         klevinG = `${mimon.length}`;
         if (middlewareq) {
            break;
         }
      } while ((1 < (4 | klevinG.length) && (readK.length | 4) < 1) && middlewareq);
      for (let h = 0; h < 2; h++) {
         mimon = [readK.length + forwardk.length];
      }
         forwardk.push(mimon.length);
         klevinG = `${(klevinG == String.fromCharCode(118,0) ? klevinG.length : readK.length)}`;
          let downloadingz = true;
          let mailU: Map<any, any> = new Map([[String.fromCharCode(110,100,111,116,115,95,104,95,55,55,0),487], [String.fromCharCode(117,95,56,53,95,115,112,114,101,97,100,0),700], [String.fromCharCode(119,104,101,114,101,95,114,95,55,50,0),563]]);
          let episodee = true;
         mimon.push(klevinG.length - 2);
         downloadingz = mailU.size >= 73;
         mailU.set(`${episodee}`, 2);
      contextZ = new Map([[`${paginationk.size}`, paginationk.size % (Math.max(internet6.length, 8))]]);
   }
   while (4 > (4 >> (Math.min(4, Math.abs(paginationk.size))))) {
      crossp.push(1 >> (Math.min(3, package_d2J.length)));
      break;
   }
       let materialk = String.fromCharCode(110,95,55,95,112,105,99,107,105,110,103,0);
       let reminderl = 1.0;
       let interstitial8: Map<any, any> = new Map([[String.fromCharCode(108,97,116,95,121,95,55,48,0),String.fromCharCode(118,95,50,49,95,98,111,111,108,0)], [String.fromCharCode(110,111,99,97,115,101,95,120,95,57,56,0),String.fromCharCode(109,98,115,101,103,109,101,110,116,95,115,95,55,50,0)]]);
         materialk = `${(String.fromCharCode(72,0) == materialk ? parseInt(`${reminderl}`) : materialk.length)}`;
      for (let f = 0; f < 2; f++) {
         materialk = `${3 % (Math.max(9, parseInt(`${reminderl}`)))}`;
      }
         reminderl /= Math.max(parseInt(`${reminderl}`) & 3, 4);
       let shootP: Map<any, any> = new Map([[String.fromCharCode(115,119,105,102,116,99,95,53,95,49,0),String.fromCharCode(110,111,116,105,102,105,101,114,95,114,95,53,55,0)], [String.fromCharCode(104,95,50,55,95,100,105,103,101,115,116,98,121,110,105,100,0),String.fromCharCode(100,111,112,115,95,107,95,54,49,0)], [String.fromCharCode(105,110,105,116,100,101,99,95,48,95,57,50,0),String.fromCharCode(104,95,49,52,95,102,111,114,109,97,110,116,0)]]);
       let videoZ: Map<any, any> = new Map([[String.fromCharCode(115,95,49,53,95,114,101,111,115,0),231], [String.fromCharCode(110,101,103,111,116,105,97,116,101,95,101,95,49,49,0),531]]);
         interstitial8 = new Map([[`${reminderl}`, materialk.length]]);
      if (5 == (interstitial8.size / (Math.max(1, 10)))) {
          let away_ = 4.0;
          let zhengpianb = 2.0;
          let disconnectedq = String.fromCharCode(113,95,52,48,95,112,101,114,109,105,115,115,105,111,110,0);
          let index4 = String.fromCharCode(107,95,50,51,95,105,100,101,110,116,105,102,105,101,100,0);
         videoZ = new Map([[`${reminderl}`, parseInt(`${reminderl}`) / 1]]);
         away_ -= parseFloat(`${parseInt(`${zhengpianb}`)}`);
         disconnectedq += `${disconnectedq.length ^ 1}`;
         index4 = `${index4.length & 2}`;
      }
          let modev = false;
          let projectz = String.fromCharCode(122,95,54,54,95,98,117,102,102,101,114,113,117,101,117,101,0);
          let m_playerZ = false;
         videoZ = new Map([[`${interstitial8.size}`, interstitial8.size + 1]]);
         modev = projectz.length == 84;
         projectz += `${((modev ? 4 : 4) + projectz.length)}`;
         m_playerZ = projectz.length == 11;
      for (let u = 0; u < 2; u++) {
          let detailsj = String.fromCharCode(106,112,101,103,99,111,109,112,95,120,95,53,55,0);
          let field9 = false;
         reminderl /= Math.max(interstitial8.size, 4);
         detailsj = `${((field9 ? 5 : 5) + 3)}`;
         field9 = detailsj.length > 72;
      }
          let themeR: Map<any, any> = new Map([[String.fromCharCode(112,95,50,54,95,112,97,110,0),483], [String.fromCharCode(112,95,55,49,95,97,97,99,116,97,98,0),467]]);
          let w_position4 = String.fromCharCode(114,95,51,49,95,105,111,101,114,114,110,111,109,101,109,0);
          let tickT = String.fromCharCode(117,95,51,54,95,115,107,101,116,99,104,0);
         shootP = new Map([[`${reminderl}`, (materialk == String.fromCharCode(117,0) ? materialk.length : parseInt(`${reminderl}`))]]);
         themeR.set(w_position4, w_position4.length | 3);
         tickT = `${w_position4.length & tickT.length}`;
      package_d2J += `${componentF.length}`;
       let telegramQ = 1.0;
       let scheduleW: Map<any, any> = new Map([[String.fromCharCode(99,111,109,112,97,114,101,112,111,119,95,107,95,50,57,0),677], [String.fromCharCode(110,101,108,108,121,95,50,95,52,0),244]]);
       let rulesw = true;
         telegramQ += parseFloat(`${parseInt(`${telegramQ}`) - 1}`);
      if ((telegramQ - 1.63) == 1.46) {
         scheduleW.set(`${rulesw}`, 2);
      }
       let footballT = 0;
       let actiony = 5;
       let commonX = false;
         scheduleW.set(`${rulesw}`, 1);
         telegramQ -= (parseFloat(`${parseInt(`${telegramQ}`) << (Math.min(1, Math.abs((rulesw ? 1 : 5))))}`));
      for (let l = 0; l < 3; l++) {
         commonX = scheduleW.size > 52;
      }
         commonX = scheduleW.size == 49 || 49 == actiony;
          let footballQ = 4.0;
         footballT += scheduleW.size ^ parseInt(`${telegramQ}`);
         footballQ /= Math.max(3 ^ parseInt(`${footballQ}`), 3);
      contextZ.set(internet6, internet6.length >> (Math.min(2, Math.abs(scheduleW.size))));
   if ((crossp.length | paginationk.size) < 4 && 4 < (crossp.length | paginationk.size)) {
       let chartQ = String.fromCharCode(116,95,49,57,95,116,111,117,112,112,101,114,0);
       let humidityG = String.fromCharCode(111,95,55,53,95,112,114,101,115,115,0);
       let modulec: Array<any> = [638, 549, 684];
          let preview0 = 0.0;
          let turnS = 0;
          let expiredi = String.fromCharCode(107,95,56,54,95,102,111,114,109,97,116,116,101,100,0);
         modulec.push(modulec.length);
         preview0 += parseFloat(`${1 & parseInt(`${preview0}`)}`);
         turnS ^= turnS;
         expiredi += "1";
         modulec.push(humidityG.length & 1);
         humidityG += `${chartQ.length}`;
          let thumbnaild: Array<any> = [869, 166];
         chartQ = `${chartQ.length}`;
         thumbnaild.push(thumbnaild.length);
      let mbsplashL = String.fromCharCode(99,122,50,119,121,53,102,56,0) == chartQ;
      do {
          let membership0 = 3;
          let hejiK = 3.0;
          let private_4vo = String.fromCharCode(110,95,53,54,95,117,112,108,111,97,100,105,110,103,0);
          let dangerO = 2.0;
         chartQ += `${private_4vo.length / (Math.max(3, 7))}`;
         membership0 &= membership0;
         hejiK += parseFloat(`${2 ^ parseInt(`${hejiK}`)}`);
         private_4vo += `${membership0}`;
         dangerO += 1 * parseInt(`${hejiK}`);
         if (mbsplashL) {
            break;
         }
      } while (mbsplashL && (modulec.length < chartQ.length));
          let bingz = 0.0;
          let brightnessz = 2.0;
          let nativeexi = String.fromCharCode(105,95,55,49,95,105,99,111,110,105,99,0);
         humidityG += `${parseInt(`${bingz}`) / 1}`;
         bingz -= (parseFloat(`${nativeexi == String.fromCharCode(114,0) ? nativeexi.length : parseInt(`${brightnessz}`)}`));
         brightnessz /= Math.max(nativeexi.length >> (Math.min(4, Math.abs(parseInt(`${brightnessz}`)))), 1);
         modulec = [modulec.length % (Math.max(humidityG.length, 1))];
         humidityG += `${(String.fromCharCode(114,0) == humidityG ? humidityG.length : modulec.length)}`;
      for (let w = 0; w < 3; w++) {
         chartQ = `${(String.fromCharCode(75,0) == chartQ ? chartQ.length : humidityG.length)}`;
      }
      crossp = [crossp.length];
   }
   if (package_d2J.length == unreadC.length) {
       let half0: Map<any, any> = new Map([[String.fromCharCode(99,117,116,111,102,102,95,98,95,57,50,0),574], [String.fromCharCode(99,95,49,57,95,106,114,101,118,100,99,116,0),531]]);
      let relatedl = 7557155 >= half0.size;
      do {
         half0.set(`${half0.size}`, half0.size * 3);
         if (relatedl) {
            break;
         }
      } while (relatedl && (5 < half0.size));
       let q_manager1 = String.fromCharCode(112,111,115,116,105,110,103,95,100,95,55,48,0);
      for (let i = 0; i < 1; i++) {
         q_manager1 = `${half0.size}`;
      }
      package_d2J += `${package_d2J.length}`;
   }
      contextZ.set(package_d2J, 2 + package_d2J.length);
   for (let s = 0; s < 1; s++) {
      stepQ += (parseFloat(`${(philippinesp ? 3 : 2) / 3}`));
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
    tt_humidity_guide.userCenterVipPayViewsAnalytics();
  }, []);
  

  const handleRefresh = async () => {
       let math1: Array<any> = [239, 153, 111];
    let selectedP = String.fromCharCode(110,95,56,49,95,102,101,111,102,0);
    let eactX = false;
    let unselectedy = 4;
    let zoome: Array<any> = [String.fromCharCode(97,95,57,50,95,99,108,97,115,104,101,100,0), String.fromCharCode(107,95,51,53,0), String.fromCharCode(110,95,51,49,95,115,105,110,99,0)];
    let carouselk = String.fromCharCode(104,105,103,104,108,105,103,104,116,101,114,95,116,95,50,0);
    let native5 = String.fromCharCode(116,101,115,116,95,108,95,52,55,0);
    let modale = 3.0;
    let dragS: Map<any, any> = new Map([[String.fromCharCode(100,101,109,117,120,101,114,115,95,56,95,52,54,0),false ], [String.fromCharCode(112,95,49,56,95,103,101,116,97,117,120,118,97,108,0),true ], [String.fromCharCode(115,116,114,117,99,116,117,114,101,115,95,115,95,56,52,0),true ]]);
    let traminiL = 0.0;
    let assistB: Array<any> = [413, 796];
    let telegramn = 3.0;
    let activev = true;
    let login4 = String.fromCharCode(106,95,57,57,95,103,101,116,108,97,121,111,117,116,0);
      carouselk += "2";
       let m_lockH = true;
       let floatingI = 4.0;
       let klevinz = 3.0;
      for (let o = 0; o < 3; o++) {
         klevinz += (parseInt(`${floatingI}`) >> (Math.min(1, Math.abs((m_lockH ? 4 : 5)))));
      }
      for (let x = 0; x < 3; x++) {
         floatingI -= parseInt(`${floatingI}`) << (Math.min(1, Math.abs(2)));
      }
      let analyticsJ = m_lockH ? !m_lockH : m_lockH;
      do {
         m_lockH = floatingI <= 50.19;
         if (analyticsJ) {
            break;
         }
      } while ((!m_lockH) && analyticsJ);
      while (1.66 < (floatingI / 3.68) || 3.68 < floatingI) {
         m_lockH = 3.37 == klevinz;
         break;
      }
      for (let q = 0; q < 3; q++) {
          let albumP = 4;
          let path7 = String.fromCharCode(97,100,100,105,95,108,95,50,52,0);
          let otherb = 5.0;
          let anner4: Array<any> = [String.fromCharCode(98,117,109,112,95,120,95,53,56,0), String.fromCharCode(101,110,116,101,114,101,100,95,102,95,53,48,0), String.fromCharCode(99,95,57,48,95,112,108,97,99,101,109,97,114,107,115,0)];
          let handlerE: Map<any, any> = new Map([[String.fromCharCode(98,95,49,51,95,114,97,119,0),396], [String.fromCharCode(118,95,53,50,0),156], [String.fromCharCode(114,95,54,53,95,109,97,105,110,108,105,115,116,0),319]]);
         floatingI /= Math.max(2, 3);
         albumP *= path7.length;
         path7 = `${handlerE.size * 1}`;
         otherb /= Math.max(1, parseFloat(`${3}`));
         anner4 = [handlerE.size & 1];
      }
       let report4 = String.fromCharCode(111,102,102,115,101,116,95,115,95,50,51,0);
       let internetX = String.fromCharCode(97,108,112,104,97,110,117,109,101,114,105,99,95,100,95,53,57,0);
      let plasho = report4 == String.fromCharCode(120,104,95,110,118,0);
      do {
         report4 += `${parseInt(`${klevinz}`)}`;
         if (plasho) {
            break;
         }
      } while ((3 > report4.length) && plasho);
         m_lockH = !m_lockH;
      while (!m_lockH) {
          let activei: Map<any, any> = new Map([[String.fromCharCode(99,111,111,114,100,95,55,95,55,54,0),491], [String.fromCharCode(106,95,51,48,95,105,110,115,117,102,102,105,99,105,101,110,116,0),43]]);
          let filledf = false;
          let weibo2: Map<any, any> = new Map([[String.fromCharCode(101,102,102,101,99,116,115,95,51,95,52,0),126], [String.fromCharCode(101,95,51,49,95,99,117,114,108,0),900]]);
          let forwardj = String.fromCharCode(109,111,100,117,108,101,109,97,112,95,56,95,49,48,0);
          let signinupH = 1.0;
         internetX = "1";
         activei = new Map([[`${signinupH}`, (parseInt(`${signinupH}`) - (filledf ? 3 : 3))]]);
         filledf = (activei.size / (Math.max(8, forwardj.length))) == 73;
         weibo2 = new Map([[`${weibo2.size}`, parseInt(`${signinupH}`)]]);
         forwardj += `${forwardj.length << (Math.min(Math.abs(2), 1))}`;
         break;
      }
      dragS = new Map([[`${math1.length}`, math1.length % (Math.max(7, zoome.length))]]);
   if (modale > 3.9) {
      modale -= (parseFloat(`${String.fromCharCode(48,0) == native5 ? parseInt(`${traminiL}`) : native5.length}`));
   }
      traminiL += parseFloat(`${parseInt(`${telegramn}`)}`);
      dragS.set(`${eactX}`, 3 + parseInt(`${telegramn}`));
   while (eactX) {
       let umengg = String.fromCharCode(109,101,108,116,95,120,95,49,49,0);
      while (umengg == String.fromCharCode(76,0) || umengg.length > 5) {
         umengg = `${2 & umengg.length}`;
         break;
      }
          let refreshl = 1;
         umengg = `${(String.fromCharCode(122,0) == umengg ? refreshl : umengg.length)}`;
          let plashy: Map<any, any> = new Map([[String.fromCharCode(97,117,120,105,108,105,97,114,121,95,108,95,56,53,0),271], [String.fromCharCode(99,111,110,116,105,110,117,101,95,117,95,56,55,0),272], [String.fromCharCode(100,95,50,48,95,105,110,116,101,114,110,101,116,0),739]]);
          let componentA = 1;
         umengg = `${plashy.size % (Math.max(1, 9))}`;
         plashy.set(`${componentA}`, componentA << (Math.min(Math.abs(componentA), 2)));
      eactX = String.fromCharCode(104,0) == umengg;
      break;
   }
      eactX = 69 < math1.length || dragS.size < 69;
   for (let d = 0; d < 3; d++) {
       let optionsK = String.fromCharCode(119,101,98,109,101,110,99,95,52,95,53,55,0);
       let short__vS = String.fromCharCode(106,95,52,56,95,114,101,111,114,100,101,114,105,110,103,0);
       let holder1 = String.fromCharCode(112,111,115,116,115,99,97,108,101,95,50,95,49,48,48,0);
       let untick7 = false;
      for (let o = 0; o < 1; o++) {
          let bellq: Array<any> = [String.fromCharCode(117,121,118,121,95,54,95,49,54,0), String.fromCharCode(116,114,101,101,95,57,95,55,50,0), String.fromCharCode(109,117,116,101,120,95,98,95,57,56,0)];
         holder1 += `${((untick7 ? 4 : 5) % (Math.max(bellq.length, 4)))}`;
      }
      while (untick7) {
          let bings = String.fromCharCode(113,95,53,48,95,108,105,112,98,111,97,114,100,0);
          let chinasamel = 0;
          let collectiona = false;
          let footballX = true;
          let bridgec = 1.0;
         short__vS = "3";
         bings = `${((footballX ? 2 : 4) & parseInt(`${bridgec}`))}`;
         chinasamel >>= Math.min(1, Math.abs(1));
         collectiona = 37.5 < bridgec;
         break;
      }
         holder1 += "1";
         holder1 += `${1 | optionsK.length}`;
          let expandR = String.fromCharCode(109,105,110,109,97,120,95,104,95,49,51,0);
          let area3 = 4.0;
         short__vS += `${((untick7 ? 4 : 1))}`;
         expandR = `${parseInt(`${area3}`)}`;
         area3 /= Math.max(parseFloat(`${1 >> (Math.min(3, expandR.length))}`), 1);
          let greenB = 3;
         optionsK += `${((untick7 ? 2 : 3) & 3)}`;
         greenB ^= 3 / (Math.max(5, greenB));
       let appsD = 5;
       let moonH = 1;
          let containerr = true;
          let detailsT = 3.0;
          let styleZ = 0.0;
         appsD >>= Math.min(3, parseInt(`${Math.abs(((containerr ? 5 : 1) % (Math.max(8, parseInt(`${styleZ}`)))))}`));
         containerr = detailsT <= 7.7;
         detailsT *= parseFloat(`${parseInt(`${detailsT}`) | parseInt(`${detailsT}`)}`);
         moonH ^= (holder1 == String.fromCharCode(98,0) ? optionsK.length : holder1.length);
      for (let w = 0; w < 1; w++) {
         holder1 += "3";
      }
      if (1 <= (appsD / (Math.max(2, 9))) || 2 <= (moonH / 2)) {
         appsD *= 1;
      }
       let username6: Array<any> = [String.fromCharCode(118,95,50,48,95,110,101,103,0), String.fromCharCode(114,101,100,105,114,101,99,116,95,115,95,49,56,0)];
       let next1: Array<any> = [112, 492, 803];
      eactX = telegramn > 45.10;
   }
      carouselk = `${assistB.length}`;
      native5 = `${math1.length}`;
   while (!selectedP.includes(`${assistB.length}`)) {
      assistB = [dragS.size | 1];
      break;
   }

    setRefreshing(true);

      zoome.push(unselectedy);
   let awayA = assistB.length >= 5363233;
   do {
       let o_center0 = 4.0;
       let stringD: Map<any, any> = new Map([[String.fromCharCode(102,95,56,49,95,99,111,110,110,101,99,116,101,100,0),421], [String.fromCharCode(112,97,114,115,101,114,95,114,95,54,52,0),724]]);
       let producty = String.fromCharCode(105,95,54,56,95,99,97,116,101,103,111,114,121,0);
      while ((3 + producty.length) <= 2 && (stringD.size + 3) <= 2) {
          let settingsX = 1;
         stringD.set(`${o_center0}`, 2);
         settingsX &= 1 | settingsX;
         break;
      }
      for (let r = 0; r < 2; r++) {
          let smallb = String.fromCharCode(104,100,99,100,95,117,95,53,54,0);
          let modalg = 5;
          let headerw = String.fromCharCode(120,95,50,53,95,108,105,98,97,118,99,111,100,101,99,0);
          let countdownJ = 0.0;
          let corner1 = false;
         o_center0 -= producty.length;
         smallb += "1";
         modalg -= 1;
         headerw = `${parseInt(`${countdownJ}`) | 3}`;
         countdownJ -= parseFloat(`${1 ^ parseInt(`${countdownJ}`)}`);
         corner1 = (modalg - countdownJ) == 36;
      }
         producty += `${producty.length}`;
      if (parseInt(`${o_center0}`) >= producty.length) {
         producty = `${(producty == String.fromCharCode(88,0) ? stringD.size : producty.length)}`;
      }
         producty = `${stringD.size}`;
      if (!producty.startsWith(`${stringD.size}`)) {
         producty += `${stringD.size >> (Math.min(2, Math.abs(parseInt(`${o_center0}`))))}`;
      }
          let rulesU = 4.0;
          let questE = 5.0;
          let appleL = String.fromCharCode(115,95,55,55,95,109,103,109,116,0);
         o_center0 += 1 | producty.length;
         rulesU /= Math.max(5, (String.fromCharCode(112,0) == appleL ? parseInt(`${questE}`) : appleL.length));
         questE /= Math.max(parseInt(`${questE}`) & 2, 4);
      if (stringD.get(`${o_center0}`) == null) {
         o_center0 -= 1;
      }
         stringD.set(`${producty}`, stringD.size);
      assistB = [dragS.size];
      if (awayA) {
         break;
      }
   } while (((assistB.length % (Math.max(dragS.size, 4))) >= 2) && awayA);
      selectedP += `${parseInt(`${traminiL}`) - 2}`;
   while (2 == (unselectedy * 3) && 3 == (unselectedy * math1.length)) {
       let uploadJ: Array<any> = [762, 252];
       let dplusZ = String.fromCharCode(110,105,100,108,110,95,105,95,51,55,0);
         dplusZ = `${uploadJ.length & 2}`;
       let action3 = 1;
       let utilsR = 0;
      for (let m = 0; m < 2; m++) {
         action3 &= utilsR;
      }
      while ((1 << (Math.min(4, Math.abs(action3)))) < 3 || 1 < (action3 << (Math.min(dplusZ.length, 1)))) {
         action3 /= Math.max(5, dplusZ.length);
         break;
      }
         dplusZ = `${dplusZ.length << (Math.min(5, uploadJ.length))}`;
      if (uploadJ.includes(action3)) {
          let configures: Array<any> = [662, 107, 829];
          let photo9 = String.fromCharCode(104,95,50,55,95,105,110,116,101,103,101,114,115,0);
         uploadJ = [3 << (Math.min(4, Math.abs(utilsR)))];
         configures.push(photo9.length);
         photo9 += `${configures.length}`;
      }
      math1.push(dragS.size - 1);
      break;
   }
   for (let q = 0; q < 1; q++) {
      dragS = new Map([[`${assistB.length}`, unselectedy | 2]]);
   }
      eactX = !eactX;
   while ((traminiL / (Math.max(4, parseFloat(`${dragS.size}`)))) >= 2.3 && 3 >= (1 << (Math.min(5, Math.abs(dragS.size))))) {
      traminiL += (parseFloat(`${(eactX ? 5 : 5) << (Math.min(native5.length, 5))}`));
      break;
   }
       let delegate_uF: Array<any> = [String.fromCharCode(114,101,117,112,108,111,97,100,95,120,95,56,53,0), String.fromCharCode(99,111,117,110,116,113,117,97,110,116,95,99,95,55,54,0), String.fromCharCode(117,95,55,51,95,99,101,110,116,114,97,108,105,116,121,0)];
       let otheru = 4;
       let frame_o_ = String.fromCharCode(102,97,120,99,111,109,112,114,95,53,95,57,50,0);
         otheru %= Math.max(otheru, 3);
       let zhengpian9 = String.fromCharCode(118,95,56,56,95,99,104,97,116,0);
      for (let q = 0; q < 3; q++) {
         zhengpian9 = `${zhengpian9.length}`;
      }
          let saveZ: Array<any> = [334, 79];
          let yellowS: Array<any> = [474, 784];
         otheru &= frame_o_.length & otheru;
         saveZ.push(3);
         yellowS = [saveZ.length - 1];
       let guideU = true;
          let statisticsR: Array<any> = [409, 987, 385];
         delegate_uF = [zhengpian9.length];
         statisticsR.push(statisticsR.length >> (Math.min(Math.abs(2), 5)));
         frame_o_ += `${frame_o_.length}`;
         otheru &= ((guideU ? 4 : 4) / (Math.max(delegate_uF.length, 3)));
         frame_o_ += `${otheru}`;
      math1 = [2 % (Math.max(7, parseInt(`${modale}`)))];
       let reactnativejsw = String.fromCharCode(105,95,50,51,95,115,116,114,116,111,108,108,0);
       let away9: Array<any> = [String.fromCharCode(107,95,54,57,95,102,111,110,116,115,105,122,101,0), String.fromCharCode(98,105,103,110,117,109,95,103,95,51,54,0), String.fromCharCode(121,95,54,51,95,100,101,112,115,0)];
          let suggestionY = 1;
          let tickedb = 4;
          let hookR = 5.0;
         away9 = [parseInt(`${hookR}`) ^ 2];
         suggestionY += suggestionY | 1;
         tickedb ^= suggestionY | tickedb;
         hookR *= parseFloat(`${suggestionY << (Math.min(5, Math.abs(tickedb)))}`);
      for (let o = 0; o < 3; o++) {
          let commoni = 1;
          let v_playerD = 5;
          let temperaturek = true;
          let taiwani = 2;
          let episodeE = true;
         reactnativejsw = `${taiwani}`;
         commoni ^= 3 * commoni;
         v_playerD >>= Math.min(3, Math.abs(((temperaturek ? 3 : 4) + 3)));
         temperaturek = !temperaturek && v_playerD > 25;
         taiwani += 2;
      }
       let teamz = 1.0;
      if (reactnativejsw.endsWith(`${away9.length}`)) {
         away9.push((String.fromCharCode(98,0) == reactnativejsw ? reactnativejsw.length : away9.length));
      }
          let langkeyd = 1.0;
          let bannerh = String.fromCharCode(105,95,54,55,95,97,112,112,101,110,100,0);
          let sheetR: Array<any> = [742, 314];
         reactnativejsw += `${sheetR.length}`;
         langkeyd /= Math.max(4, parseFloat(`${bannerh.length * 3}`));
         bannerh += `${bannerh.length}`;
         sheetR.push(parseInt(`${langkeyd}`) - bannerh.length);
         teamz *= 2 ^ away9.length;
      carouselk += `${parseInt(`${traminiL}`) + dragS.size}`;
       let moonx = String.fromCharCode(106,95,49,49,95,101,121,101,0);
         moonx += `${moonx.length}`;
      let backgroundc = 5625442 <= moonx.length;
      do {
         moonx += "1";
         if (backgroundc) {
            break;
         }
      } while ((moonx.length <= moonx.length) && backgroundc);
         moonx = `${moonx.length * 1}`;
      carouselk = `${math1.length}`;
   if (dragS.size > parseInt(`${traminiL}`)) {
      traminiL *= parseFloat(`${native5.length}`);
   }
    await refreshUserState();

       let carouselm = 3.0;
       let lang7 = String.fromCharCode(118,95,51,56,95,109,101,103,101,100,0);
       let completew = String.fromCharCode(116,114,97,110,115,108,97,116,105,111,110,115,95,105,95,56,52,0);
      while (completew != String.fromCharCode(57,0)) {
         lang7 = `${lang7.length ^ parseInt(`${carouselm}`)}`;
         break;
      }
         lang7 = "3";
          let manifestx = 1;
          let buildd = true;
          let settingm = 3.0;
         completew += "2";
         manifestx &= manifestx;
         buildd = 67 >= manifestx;
         settingm *= manifestx << (Math.min(4, Math.abs(1)));
      let promotion6 = String.fromCharCode(54,48,97,109,0) == lang7;
      do {
          let injury_ = String.fromCharCode(104,105,110,116,95,98,95,52,50,0);
          let anythinkM = String.fromCharCode(100,95,55,55,95,114,97,109,112,0);
          let type_33H = true;
          let streaming2 = true;
          let chatN = String.fromCharCode(110,95,54,52,95,101,114,97,115,101,100,0);
         lang7 += `${(String.fromCharCode(108,0) == injury_ ? injury_.length : (type_33H ? 5 : 5))}`;
         anythinkM += `${2 | chatN.length}`;
         type_33H = (69 >= ((streaming2 ? 69 : chatN.length) * chatN.length));
         if (promotion6) {
            break;
         }
      } while (((carouselm / (Math.max(4.88, 5))) <= 5.66 || 5 <= (parseInt(`${carouselm}`) / (Math.max(lang7.length, 5)))) && promotion6);
      if (completew == String.fromCharCode(79,0) && lang7.length > 2) {
          let analyticsO = false;
         lang7 = `${2 + lang7.length}`;
      }
      while (lang7.startsWith(`${carouselm}`)) {
         lang7 += `${2 ^ lang7.length}`;
         break;
      }
      if (carouselm <= completew.length) {
         carouselm += completew.length;
      }
       let modityW = String.fromCharCode(116,95,52,50,95,112,114,111,112,101,114,116,121,0);
         lang7 += `${modityW.length}`;
      native5 = `${1 >> (Math.min(4, Math.abs(parseInt(`${modale}`))))}`;
   let unselected0 = math1.length <= 6905198;
   do {
      math1 = [zoome.length % (Math.max(6, parseInt(`${traminiL}`)))];
      if (unselected0) {
         break;
      }
   } while ((math1.length < 4) && unselected0);
      native5 += `${unselectedy & 1}`;
      selectedP += `${((eactX ? 5 : 5) << (Math.min(zoome.length, 4)))}`;
   for (let a = 0; a < 1; a++) {
       let checkboxT = 3.0;
       let videojsR = 0.0;
         videojsR -= parseFloat(`${parseInt(`${videojsR}`) & parseInt(`${checkboxT}`)}`);
      if ((checkboxT + 2.19) == 5.55 || (videojsR + checkboxT) == 2.19) {
         videojsR += parseFloat(`${parseInt(`${videojsR}`) | parseInt(`${checkboxT}`)}`);
      }
      for (let b = 0; b < 1; b++) {
         videojsR -= parseFloat(`${2}`);
      }
         checkboxT /= Math.max(2, parseFloat(`${parseInt(`${videojsR}`)}`));
      for (let d = 0; d < 2; d++) {
          let eventC: Array<any> = [76, 143, 364];
          let groupe = 4.0;
          let bodanY: Map<any, any> = new Map([[String.fromCharCode(112,114,105,110,116,102,95,112,95,55,54,0),317], [String.fromCharCode(112,116,114,95,48,95,50,53,0),816]]);
          let libcrashsdk_ = 3.0;
          let movies0 = String.fromCharCode(116,97,103,95,108,95,56,54,0);
         checkboxT -= parseFloat(`${bodanY.size >> (Math.min(Math.abs(2), 1))}`);
         eventC.push(parseInt(`${groupe}`) >> (Math.min(4, Math.abs(1))));
         groupe += parseFloat(`${parseInt(`${groupe}`) * 2}`);
         bodanY.set(movies0, 1);
         libcrashsdk_ /= Math.max(5, parseFloat(`${eventC.length}`));
         movies0 += `${parseInt(`${groupe}`) % 1}`;
      }
       let nextm: Array<any> = [326, 145, 996];
       let buffer8: Array<any> = [23, 61, 628];
      modale *= parseFloat(`${native5.length / 2}`);
   }
   let helperw = 5217836 >= dragS.size;
   do {
      dragS = new Map([[`${dragS.size}`, 1 + parseInt(`${modale}`)]]);
      if (helperw) {
         break;
      }
   } while ((Array.from(dragS.keys()).includes(`${modale}`)) && helperw);
   if (!zoome.includes(modale)) {
      modale *= (parseFloat(`${parseInt(`${traminiL}`) | (eactX ? 1 : 5)}`));
   }
      traminiL /= Math.max(1, parseFloat(`${parseInt(`${modale}`) | native5.length}`));
   for (let w = 0; w < 3; w++) {
      native5 = `${carouselk.length >> (Math.min(Math.abs(2), 2))}`;
   }
      eactX = carouselk.length <= zoome.length;
      modale += parseFloat(`${3}`);
    setRefreshing(false);
    scrollRef.current.scrollTo({ index: 0, animated: false });
  };

  const refreshUserState = async () => {
       let toponb = String.fromCharCode(118,95,55,48,95,97,115,115,101,115,115,109,101,110,116,0);
    let calendari: Array<any> = [String.fromCharCode(114,95,50,49,95,97,114,98,105,116,114,97,114,121,0), String.fromCharCode(122,95,55,56,95,99,111,109,112,97,114,101,0), String.fromCharCode(120,95,51,53,95,115,112,101,99,105,97,108,0)];
    let moviesO = String.fromCharCode(120,118,109,99,95,111,95,54,57,0);
    let listF: Array<any> = [347, 150];
    let combineg = false;
    let securityL = String.fromCharCode(106,95,52,52,95,115,105,110,113,102,0);
    let applicationu = String.fromCharCode(100,95,52,95,115,101,116,119,97,116,101,114,109,97,114,107,0);
    let anytime5 = String.fromCharCode(117,110,99,104,101,99,107,101,100,95,116,95,50,49,0);
    let taili = String.fromCharCode(108,95,54,95,97,116,116,114,98,117,116,101,0);
    let previewW = String.fromCharCode(102,116,118,109,108,97,115,116,110,111,100,101,95,111,95,54,55,0);
    let nterstitialq = String.fromCharCode(99,100,99,105,95,53,95,55,55,0);
    let untick3 = 4.0;
    let sheetf: Map<any, any> = new Map([[String.fromCharCode(99,97,108,108,105,115,116,111,95,113,95,55,56,0),443], [String.fromCharCode(107,109,115,95,122,95,52,56,0),229]]);
    let styles6 = String.fromCharCode(105,108,98,99,95,121,95,48,0);
   while (applicationu.includes(moviesO)) {
      moviesO += `${calendari.length}`;
      break;
   }
   for (let a = 0; a < 3; a++) {
      moviesO = `${(String.fromCharCode(109,0) == taili ? taili.length : previewW.length)}`;
   }
      applicationu = `${(listF.length >> (Math.min(5, Math.abs((combineg ? 5 : 5)))))}`;
   while (5 == taili.length) {
      applicationu += `${taili.length >> (Math.min(1, securityL.length))}`;
      break;
   }
      calendari = [(String.fromCharCode(57,0) == taili ? taili.length : securityL.length)];
       let clubC = String.fromCharCode(115,116,97,116,115,95,56,95,57,48,0);
       let full3: Array<any> = [424, 398, 740];
       let reactM = String.fromCharCode(110,101,116,119,111,114,107,95,114,95,50,54,0);
         full3.push(clubC.length);
         reactM = `${reactM.length}`;
         clubC += "1";
       let mbbannerQ = String.fromCharCode(114,95,52,95,113,117,105,99,0);
       let background_: Map<any, any> = new Map([[String.fromCharCode(117,95,52,57,95,100,101,114,105,118,97,116,105,111,110,0),687], [String.fromCharCode(117,95,55,51,95,112,97,115,115,119,111,114,100,0),511], [String.fromCharCode(109,95,52,55,95,112,114,101,115,101,108,101,99,116,0),827]]);
         full3 = [2 + reactM.length];
         background_.set(`${full3.length}`, background_.size & 3);
          let clear9: Map<any, any> = new Map([[String.fromCharCode(116,114,117,101,95,56,95,50,48,0),930], [String.fromCharCode(113,95,57,50,95,116,97,103,103,105,110,103,0),213], [String.fromCharCode(111,110,101,111,102,95,119,95,51,55,0),831]]);
          let controlsc = 4.0;
         full3 = [clubC.length * full3.length];
         clear9 = new Map([[`${clear9.size}`, clear9.size + parseInt(`${controlsc}`)]]);
         controlsc -= parseFloat(`${clear9.size}`);
          let serviceJ = 1;
          let eventL = 3.0;
          let floater3 = false;
         background_ = new Map([[`${eventL}`, mbbannerQ.length >> (Math.min(Math.abs(2), 4))]]);
         serviceJ |= 2 - serviceJ;
         eventL /= Math.max(1, parseFloat(`${2}`));
         floater3 = 71 < serviceJ;
      calendari.push((applicationu == String.fromCharCode(98,0) ? applicationu.length : clubC.length));

    const result = await ttTramini.getUserDetails();

      combineg = moviesO.length > 25 && combineg;
   if (2 == (listF.length >> (Math.min(calendari.length, 4)))) {
       let downloaderi = String.fromCharCode(121,97,114,110,95,57,95,55,51,0);
       let refreshm = 1.0;
       let filled8 = 1.0;
       let groups = String.fromCharCode(120,95,51,49,95,109,112,115,117,98,0);
      if (refreshm < 5.56) {
         downloaderi = `${parseInt(`${refreshm}`) - downloaderi.length}`;
      }
         groups += `${1 << (Math.min(4, Math.abs(parseInt(`${filled8}`))))}`;
         refreshm -= parseFloat(`${parseInt(`${refreshm}`)}`);
      let shoott = groups == String.fromCharCode(101,95,109,0);
      do {
         groups = "3";
         if (shoott) {
            break;
         }
      } while (shoott && (parseInt(`${filled8}`) < groups.length));
         downloaderi = `${downloaderi.length - 2}`;
          let upgradeB = 4;
          let overlayo = String.fromCharCode(110,116,115,115,95,120,95,57,49,0);
         groups += `${parseInt(`${filled8}`)}`;
         upgradeB >>= Math.min(1, Math.abs(overlayo.length % 1));
         overlayo += `${upgradeB}`;
          let tumbnailh = 0;
         downloaderi += `${groups.length >> (Math.min(2, Math.abs(tumbnailh)))}`;
         groups += `${parseInt(`${refreshm}`) * downloaderi.length}`;
         groups += `${downloaderi.length + 1}`;
          let dialogG: Array<any> = [96, 541];
          let controlso: Array<any> = [42, 124];
         filled8 -= (String.fromCharCode(68,0) == downloaderi ? downloaderi.length : groups.length);
         dialogG = [1];
         controlso = [controlso.length ^ dialogG.length];
         groups = `${parseInt(`${refreshm}`) % (Math.max(2, 9))}`;
      while (parseInt(`${refreshm}`) <= groups.length) {
         groups = `${downloaderi.length << (Math.min(Math.abs(2), 5))}`;
         break;
      }
      listF.push(groups.length | 1);
   }
      securityL = `${taili.length | securityL.length}`;
   if (taili.includes(`${anytime5.length}`)) {
      taili = `${applicationu.length}`;
   }
   if (toponb.length < calendari.length) {
       let text8 = String.fromCharCode(102,95,50,51,95,97,112,112,101,110,100,97,98,108,101,0);
       let expandP: Map<any, any> = new Map([[String.fromCharCode(111,95,55,52,95,98,105,116,115,116,114,101,97,109,0),553], [String.fromCharCode(115,95,50,95,105,110,116,108,0),797]]);
       let moonQ = 0.0;
       let agreementK = false;
       let sliderU = String.fromCharCode(120,95,53,49,95,115,108,97,110,116,0);
      if (!sliderU.endsWith(`${expandP.size}`)) {
         sliderU += "3";
      }
         text8 = `${(String.fromCharCode(97,0) == sliderU ? expandP.size : sliderU.length)}`;
         sliderU = `${(sliderU == String.fromCharCode(108,0) ? sliderU.length : parseInt(`${moonQ}`))}`;
      while (5 == text8.length) {
         text8 = `${1 >> (Math.min(Math.abs(parseInt(`${moonQ}`)), 1))}`;
         break;
      }
         agreementK = text8 == String.fromCharCode(69,0);
      let pointu = moonQ <= 5566432.0;
      do {
         moonQ *= (String.fromCharCode(119,0) == sliderU ? expandP.size : sliderU.length);
         if (pointu) {
            break;
         }
      } while (pointu && ((moonQ / 2.68) == 5.30));
      while (!agreementK) {
         agreementK = !agreementK;
         break;
      }
         agreementK = String.fromCharCode(105,0) == text8;
          let flippern = String.fromCharCode(109,101,109,110,95,107,95,56,56,0);
          let thailandm = String.fromCharCode(119,97,108,108,95,115,95,54,49,0);
         moonQ *= 2 & text8.length;
         flippern = `${(flippern == String.fromCharCode(107,0) ? thailandm.length : flippern.length)}`;
         thailandm += `${thailandm.length}`;
         expandP.set(`${moonQ}`, 3 - parseInt(`${moonQ}`));
          let malaysiaC = String.fromCharCode(111,95,54,56,95,99,102,102,116,102,0);
         agreementK = (expandP.size & sliderU.length) <= 25;
         malaysiaC += `${malaysiaC.length}`;
      for (let g = 0; g < 3; g++) {
         expandP.set(`${moonQ}`, sliderU.length);
      }
         sliderU += `${((agreementK ? 2 : 2) * parseInt(`${moonQ}`))}`;
         moonQ /= Math.max(expandP.size ^ 2, 3);
         moonQ += text8.length - 3;
      calendari.push(previewW.length + calendari.length);
   }
   while (1 == previewW.length) {
      toponb = "2";
      break;
   }
    if (result == null) {

   let klevinM = combineg ? !combineg : combineg;
   do {
       let bannerf = 0.0;
       let uploadF = 2.0;
      while (5.37 > (bannerf / (Math.max(uploadF, 2)))) {
         uploadF += 1;
         break;
      }
         uploadF -= 1 ^ parseInt(`${bannerf}`);
       let clocku = String.fromCharCode(118,109,97,116,114,105,120,95,98,95,56,49,0);
         clocku = "3";
       let handlerm = 2;
       let groupS = 1;
      let layoutC = 6631613.0 >= bannerf;
      do {
         bannerf /= Math.max(4, parseFloat(`${handlerm / (Math.max(1, parseInt(`${uploadF}`)))}`));
         if (layoutC) {
            break;
         }
      } while (layoutC && (5.69 < (bannerf * parseFloat(`${handlerm}`)) || 3.86 < (5.69 * bannerf)));
      combineg = moviesO.length > 88;
      if (klevinM) {
         break;
      }
   } while (klevinM && (2 > taili.length && combineg));
   if (applicationu.length <= listF.length) {
      listF.push(listF.length & 2);
   }
   let auto_rK = toponb == String.fromCharCode(110,118,100,103,120,54,52,102,0);
   do {
      toponb += `${toponb.length}`;
      if (auto_rK) {
         break;
      }
   } while (auto_rK && (toponb.length >= nterstitialq.length));
   while (moviesO.includes(`${taili.length}`)) {
       let foregroundn = 3;
      while (2 >= (foregroundn | 3) && (foregroundn | 3) >= 5) {
         foregroundn %= Math.max(1, 3);
         break;
      }
      let vignetteP = 9837203 <= foregroundn;
      do {
          let trophyK = 2.0;
          let unselectedO = 5;
         foregroundn /= Math.max(5, unselectedO / 3);
         trophyK *= parseFloat(`${1 + parseInt(`${trophyK}`)}`);
         unselectedO ^= 3;
         if (vignetteP) {
            break;
         }
      } while (vignetteP && (foregroundn >= foregroundn));
         foregroundn -= foregroundn;
      moviesO = `${2 | moviesO.length}`;
      break;
   }
   while (3 > moviesO.length && applicationu == String.fromCharCode(87,0)) {
      applicationu += `${(String.fromCharCode(98,0) == nterstitialq ? previewW.length : nterstitialq.length)}`;
      break;
   }
      calendari.push(moviesO.length << (Math.min(Math.abs(3), 5)));
      return;
    }

    await dispatch(updateUserAuth(result));

   let memberD = combineg ? !combineg : combineg;
   do {
      combineg = (securityL.length << (Math.min(5, toponb.length))) > 56;
      if (memberD) {
         break;
      }
   } while (memberD && (moviesO.length >= 3));
   if (toponb.includes(`${calendari.length}`)) {
      calendari.push(nterstitialq.length);
   }
   let activityM = combineg ? !combineg : combineg;
   do {
      combineg = 62 == applicationu.length;
      if (activityM) {
         break;
      }
   } while ((!nterstitialq.startsWith(`${combineg}`)) && activityM);
   if (securityL != toponb) {
      toponb = `${1 * calendari.length}`;
   }
   for (let k = 0; k < 3; k++) {
      calendari = [parseInt(`${untick3}`) & toponb.length];
   }
      previewW = `${securityL.length << (Math.min(Math.abs(2), 4))}`;
    return;
  };

  const checkConnection = async () => {
       let contextD = 3;
    let textY = 1;
    let user6 = 0.0;
    let zhuboW = false;
    let securityL = String.fromCharCode(98,97,103,95,108,95,57,49,0);
    let listM = String.fromCharCode(105,95,51,48,95,100,114,97,119,97,98,108,101,0);
    let chinasames: Array<any> = [726, 582, 676];
    let yellowV = 0.0;
    let taiwanO = String.fromCharCode(105,95,54,55,95,109,97,115,107,101,100,0);
    let lineb: Map<any, any> = new Map([[String.fromCharCode(100,105,102,95,105,95,57,53,0),473], [String.fromCharCode(111,98,106,116,120,116,95,103,95,53,54,0),880], [String.fromCharCode(113,95,55,52,95,99,111,109,112,108,101,120,105,116,121,0),668]]);
   for (let u = 0; u < 2; u++) {
       let controlo = 1.0;
       let gradlewm = 1;
      for (let n = 0; n < 3; n++) {
          let stylesX = String.fromCharCode(105,95,57,53,95,114,101,102,112,116,114,0);
         controlo /= Math.max((stylesX == String.fromCharCode(81,0) ? stylesX.length : gradlewm), 3);
      }
      if (5.82 > (controlo + 1.2)) {
         gradlewm /= Math.max(5, gradlewm);
      }
      while ((controlo * 3.47) <= 3.97) {
         gradlewm >>= Math.min(1, Math.abs(1));
         break;
      }
      if (2.82 == (controlo / (Math.max(9, gradlewm)))) {
          let diceL = false;
          let sortU = 1.0;
          let bingh: Map<any, any> = new Map([[String.fromCharCode(116,95,54,49,95,102,111,111,116,98,97,108,108,0),954], [String.fromCharCode(107,95,55,48,95,114,101,112,108,97,99,101,109,101,110,116,115,0),456], [String.fromCharCode(112,95,55,53,95,116,114,97,99,101,0),188]]);
          let benefit4 = String.fromCharCode(100,97,112,112,115,95,102,95,52,54,0);
          let filln = String.fromCharCode(99,111,109,112,97,114,101,102,95,109,95,51,55,0);
         controlo += gradlewm;
         diceL = filln == benefit4;
         sortU *= parseFloat(`${bingh.size}`);
         bingh.set(`${diceL}`, ((diceL ? 5 : 2)));
         benefit4 += "1";
         filln = "2";
      }
          let cornera = String.fromCharCode(114,95,54,56,95,100,101,115,99,114,0);
         controlo -= cornera.length;
          let filledu = String.fromCharCode(97,115,110,95,103,95,49,56,0);
          let regeng5 = String.fromCharCode(106,95,57,53,95,115,110,111,119,0);
         gradlewm /= Math.max(5, 3);
         filledu += "1";
         regeng5 = `${filledu.length}`;
      listM += `${textY}`;
   }
   if (!zhuboW || (contextD * 4) < 2) {
      zhuboW = !zhuboW;
   }
   if ((1 & textY) < 1 && 3.92 < (yellowV - 2.74)) {
      textY ^= chinasames.length + 1;
   }
   if ((textY * 5) >= 2) {
      textY |= securityL.length;
   }
   let overl = contextD <= 8383459;
   do {
       let baidut = 5;
       let checkboxz = 4;
       let filterD = String.fromCharCode(111,95,52,49,95,97,108,97,99,0);
       let dycreator4 = 5.0;
         baidut &= 3 << (Math.min(2, filterD.length));
         baidut <<= Math.min(filterD.length, 3);
       let gemfileg = 3.0;
         filterD = `${checkboxz * parseInt(`${gemfileg}`)}`;
      while (3 == (filterD.length << (Math.min(Math.abs(5), 4)))) {
         dycreator4 /= Math.max(parseFloat(`${checkboxz}`), 3);
         break;
      }
      if ((5 / (Math.max(5, filterD.length))) == 3) {
          let photou = String.fromCharCode(103,108,98,108,95,97,95,57,49,0);
         dycreator4 /= Math.max(4, parseFloat(`${baidut}`));
         photou = `${(photou == String.fromCharCode(85,0) ? photou.length : photou.length)}`;
      }
      let zoomc = 6526724 <= baidut;
      do {
          let signinupc: Array<any> = [712, 124, 578];
         baidut *= 3 % (Math.max(baidut, 8));
         signinupc = [3 - signinupc.length];
         if (zoomc) {
            break;
         }
      } while ((3 >= baidut) && zoomc);
      while (1 <= (filterD.length >> (Math.min(Math.abs(3), 2)))) {
         filterD += "1";
         break;
      }
      for (let p = 0; p < 2; p++) {
          let pageh: Map<any, any> = new Map([[String.fromCharCode(97,95,53,48,95,99,104,97,105,110,101,100,0),557], [String.fromCharCode(110,95,53,51,95,109,111,100,109,0),745]]);
          let loginj = false;
          let unselectedg = String.fromCharCode(105,110,99,114,95,56,95,55,57,0);
          let darkK = 4.0;
         gemfileg -= parseFloat(`${baidut}`);
         pageh = new Map([[`${pageh.size}`, pageh.size]]);
         loginj = String.fromCharCode(78,0) == unselectedg;
         unselectedg += `${(pageh.size | (loginj ? 5 : 4))}`;
         darkK -= (parseFloat(`${parseInt(`${darkK}`) + (loginj ? 1 : 5)}`));
      }
         filterD += `${baidut}`;
      for (let q = 0; q < 1; q++) {
         baidut %= Math.max(4, 2 & filterD.length);
      }
      if (!filterD.includes(`${gemfileg}`)) {
         gemfileg -= parseFloat(`${checkboxz}`);
      }
      contextD /= Math.max(((zhuboW ? 5 : 4) % (Math.max(1, parseInt(`${dycreator4}`)))), 5);
      if (overl) {
         break;
      }
   } while (overl && (2 <= (2 ^ contextD) || (listM.length ^ contextD) <= 2));
   while (!securityL.startsWith(`${contextD}`)) {
      securityL = `${parseInt(`${user6}`) - 1}`;
      break;
   }

    const state = await NetInfo.fetch();

   for (let o = 0; o < 2; o++) {
      listM = `${contextD >> (Math.min(3, Math.abs(3)))}`;
   }
   while ((2.0 - user6) > 5.9) {
      user6 -= parseFloat(`${chinasames.length}`);
      break;
   }
   for (let y = 0; y < 1; y++) {
      contextD -= textY;
   }
   while (user6 <= contextD) {
       let injuryf = false;
       let middleware9 = String.fromCharCode(118,95,52,49,95,109,100,101,99,0);
       let strr: Array<any> = [372, 537, 110];
         injuryf = middleware9 == String.fromCharCode(100,0) && strr.length > 44;
      let rewardK = middleware9 == String.fromCharCode(98,120,53,98,102,51,108,54,122,0);
      do {
         middleware9 = `${strr.length * middleware9.length}`;
         if (rewardK) {
            break;
         }
      } while ((middleware9.includes(`${injuryf}`)) && rewardK);
         injuryf = strr.length >= 84;
          let gemfileL = 0;
          let dropdownu: Array<any> = [927, 219, 11];
          let invitet = 4;
         strr.push(dropdownu.length);
         gemfileL %= Math.max(1, 3);
         dropdownu = [gemfileL];
         invitet <<= Math.min(Math.abs(gemfileL), 1);
      if (!middleware9.includes(`${injuryf}`)) {
          let downloadedO = String.fromCharCode(114,101,102,101,114,101,110,101,95,120,95,54,53,0);
          let kuaishouw: Array<any> = [719, 863, 371];
          let stationsZ = 0;
          let header5 = 1.0;
         middleware9 = `${parseInt(`${header5}`) & 1}`;
         downloadedO += `${stationsZ}`;
         kuaishouw.push(stationsZ);
         header5 *= kuaishouw.length;
      }
      for (let x = 0; x < 2; x++) {
         middleware9 = `${strr.length}`;
      }
         middleware9 = `${((injuryf ? 1 : 1) % (Math.max(strr.length, 6)))}`;
          let download4 = String.fromCharCode(117,95,50,51,95,115,116,114,115,116,97,114,116,0);
          let icon1 = 5.0;
         middleware9 += `${strr.length}`;
         download4 = `${(String.fromCharCode(51,0) == download4 ? download4.length : parseInt(`${icon1}`))}`;
         icon1 *= parseFloat(`${1 << (Math.min(2, download4.length))}`);
       let description_1q: Array<any> = [String.fromCharCode(102,95,56,54,95,100,101,116,101,114,109,105,110,101,100,0), String.fromCharCode(120,102,97,99,101,95,50,95,56,52,0), String.fromCharCode(119,95,56,56,95,115,121,115,105,110,102,111,0)];
      contextD <<= Math.min(3, Math.abs(strr.length >> (Math.min(Math.abs(1), 4))));
      break;
   }
   if (textY == 4 || (4 >> (Math.min(2, Math.abs(textY)))) == 4) {
      textY ^= (parseInt(`${user6}`) << (Math.min(3, Math.abs((zhuboW ? 3 : 4)))));
   }
   let footballh = 9124465 <= securityL.length;
   do {
      securityL = `${1 >> (Math.min(Math.abs(contextD), 3))}`;
      if (footballh) {
         break;
      }
   } while (footballh && (!zhuboW));
    const offline = !(state.isConnected && state.isInternetReachable);

   let refreshG = zhuboW ? !zhuboW : zhuboW;
   do {
      zhuboW = user6 < 56.20;
      if (refreshG) {
         break;
      }
   } while (refreshG && (zhuboW));
       let promotiony: Map<any, any> = new Map([[String.fromCharCode(115,100,107,95,110,95,53,53,0),484], [String.fromCharCode(115,117,98,109,105,116,95,110,95,56,50,0),698]]);
       let targete = String.fromCharCode(111,95,52,54,95,114,97,99,101,0);
          let langkeyJ: Map<any, any> = new Map([[String.fromCharCode(97,95,56,56,95,108,117,109,98,101,114,106,97,99,107,0),75], [String.fromCharCode(117,112,108,105,110,107,95,56,95,57,49,0),109]]);
         promotiony.set(`${langkeyJ.size}`, langkeyJ.size);
      while (3 == (targete.length >> (Math.min(Math.abs(5), 1))) && (5 >> (Math.min(3, Math.abs(promotiony.size)))) == 5) {
         promotiony = new Map([[`${promotiony.size}`, 3]]);
         break;
      }
          let reactd = 3.0;
          let ewarded5 = 0;
          let resultc = String.fromCharCode(108,95,51,57,95,114,101,110,100,101,114,101,114,0);
         targete = `${resultc.length}`;
         reactd += 3;
         ewarded5 += ewarded5;
         resultc = "1 + ewarded5";
      if ((4 + promotiony.size) <= 2 && 1 <= (targete.length + 4)) {
         targete += `${3 + targete.length}`;
      }
      if (promotiony.size < targete.length) {
         targete = `${(String.fromCharCode(109,0) == targete ? targete.length : promotiony.size)}`;
      }
      for (let q = 0; q < 3; q++) {
         promotiony.set(`${targete}`, promotiony.size);
      }
      securityL = `${contextD << (Math.min(1, Math.abs(3)))}`;
      contextD += parseInt(`${yellowV}`);
   if (contextD >= securityL.length) {
       let resultt = 0.0;
       let coreJ = String.fromCharCode(116,95,51,56,95,97,117,100,105,116,105,110,103,0);
       let downU = 4.0;
       let crownu = String.fromCharCode(114,95,54,53,95,97,100,100,101,114,0);
         resultt -= parseInt(`${downU}`);
      for (let a = 0; a < 3; a++) {
         downU /= Math.max(5, parseInt(`${resultt}`));
      }
         resultt *= coreJ.length & 1;
         resultt -= (String.fromCharCode(53,0) == coreJ ? parseInt(`${resultt}`) : coreJ.length);
      let umengk = crownu == String.fromCharCode(105,116,111,57,51,0);
      do {
          let containerO = String.fromCharCode(110,110,109,111,100,95,49,95,55,48,0);
          let searchbarH = String.fromCharCode(117,110,119,114,105,116,97,98,108,101,95,113,95,51,55,0);
         crownu = `${crownu.length}`;
         containerO += `${(searchbarH == String.fromCharCode(50,0) ? containerO.length : searchbarH.length)}`;
         if (umengk) {
            break;
         }
      } while (((crownu.length - downU) >= 5.78 || (downU - 5.78) >= 3.52) && umengk);
         coreJ += `${2 & crownu.length}`;
      for (let t = 0; t < 3; t++) {
         crownu += `${coreJ.length % 1}`;
      }
       let star7: Array<any> = [116, 857, 181];
      while (crownu.length < star7.length) {
         star7.push(coreJ.length + 2);
         break;
      }
      if (3.4 > downU) {
         coreJ = `${(coreJ == String.fromCharCode(85,0) ? coreJ.length : parseInt(`${resultt}`))}`;
      }
          let iconD = String.fromCharCode(105,95,57,57,95,119,104,105,116,101,115,112,97,99,101,115,0);
          let const_4eZ: Map<any, any> = new Map([[String.fromCharCode(112,108,97,110,97,114,116,111,121,117,121,95,49,95,52,49,0),273], [String.fromCharCode(99,111,112,121,105,110,105,111,118,95,117,95,52,57,0),415]]);
         crownu += `${const_4eZ.size}`;
         iconD += "2";
         const_4eZ.set(iconD, iconD.length);
         star7 = [1 ^ star7.length];
      securityL = `${listM.length}`;
   }
   if ((chinasames.length % (Math.max(1, 2))) <= 4 || (chinasames.length % 1) <= 2) {
      chinasames.push((String.fromCharCode(109,0) == securityL ? parseInt(`${user6}`) : securityL.length));
   }
      securityL += `${((zhuboW ? 2 : 4))}`;
    setIsOffline(offline);

      yellowV -= parseFloat(`${2}`);
   if (lineb.size > taiwanO.length) {
      lineb.set(taiwanO, taiwanO.length);
   }
      yellowV /= Math.max(3, parseFloat(`${3}`));
   if (!taiwanO.endsWith(`${textY}`)) {
       let injuryK = String.fromCharCode(99,95,54,56,95,119,104,101,116,104,101,114,0);
       let vnewsK = String.fromCharCode(101,95,51,51,95,121,101,108,108,111,119,0);
      if (4 <= injuryK.length) {
         vnewsK = `${vnewsK.length}`;
      }
      for (let z = 0; z < 3; z++) {
         vnewsK += "2";
      }
      let gpayg = 8927178 >= injuryK.length;
      do {
         injuryK = `${vnewsK.length - injuryK.length}`;
         if (gpayg) {
            break;
         }
      } while (gpayg && (vnewsK != String.fromCharCode(80,0)));
      while (injuryK.length >= vnewsK.length) {
         injuryK += `${vnewsK.length >> (Math.min(5, injuryK.length))}`;
         break;
      }
         vnewsK = `${injuryK.length << (Math.min(Math.abs(2), 3))}`;
         vnewsK = `${(String.fromCharCode(85,0) == injuryK ? injuryK.length : vnewsK.length)}`;
      taiwanO = `${(taiwanO == String.fromCharCode(99,0) ? taiwanO.length : parseInt(`${yellowV}`))}`;
   }
   let heartO = user6 >= 9838985.0;
   do {
       let kuaishou6 = String.fromCharCode(101,114,114,99,111,100,101,95,100,95,52,49,0);
       let update_ejo: Map<any, any> = new Map([[String.fromCharCode(97,100,108,101,114,95,112,95,50,56,0),163], [String.fromCharCode(114,101,99,111,109,109,101,110,100,95,48,95,57,52,0),667]]);
       let anytimeB = String.fromCharCode(117,95,51,57,95,115,116,105,108,108,0);
       let robotoK = String.fromCharCode(98,95,56,55,95,104,117,102,102,121,117,118,0);
          let notificatione = String.fromCharCode(104,95,49,53,95,99,111,110,115,117,109,101,0);
          let launchB = String.fromCharCode(116,95,55,55,95,111,116,104,101,114,115,0);
         update_ejo = new Map([[kuaishou6, 2 - kuaishou6.length]]);
         notificatione += `${launchB.length}`;
         launchB = "3";
         anytimeB += `${kuaishou6.length >> (Math.min(Math.abs(3), 1))}`;
          let filed4 = String.fromCharCode(100,101,115,116,114,111,121,101,100,95,106,95,49,0);
          let gesturesG: Map<any, any> = new Map([[String.fromCharCode(117,95,54,48,95,97,100,115,97,114,109,97,115,109,0),798], [String.fromCharCode(99,111,100,97,98,108,101,95,100,95,53,54,0),581], [String.fromCharCode(99,104,111,111,115,105,110,103,95,102,95,53,54,0),979]]);
         anytimeB = `${2 | update_ejo.size}`;
         filed4 += `${1 << (Math.min(3, filed4.length))}`;
         gesturesG.set(filed4, gesturesG.size * filed4.length);
      if (robotoK != String.fromCharCode(70,0) && anytimeB != String.fromCharCode(117,0)) {
         anytimeB = `${(String.fromCharCode(49,0) == kuaishou6 ? update_ejo.size : kuaishou6.length)}`;
      }
       let mnewsa = String.fromCharCode(109,97,99,114,111,98,108,111,99,107,95,54,95,50,56,0);
       let morec = String.fromCharCode(103,95,53,49,95,115,101,101,107,105,110,103,0);
      while (4 == morec.length) {
         morec = "2";
         break;
      }
      for (let e = 0; e < 2; e++) {
          let filledU = String.fromCharCode(104,95,53,50,95,115,117,98,108,101,110,103,116,104,0);
         anytimeB += `${(kuaishou6 == String.fromCharCode(112,0) ? kuaishou6.length : mnewsa.length)}`;
         filledU += `${filledU.length}`;
      }
       let kuaishoud = false;
       let const__O: Array<any> = [445, 927, 690];
       let type_iT: Array<any> = [105, 818, 521];
      if (mnewsa == String.fromCharCode(102,0)) {
         robotoK += `${(robotoK == String.fromCharCode(116,0) ? robotoK.length : (kuaishoud ? 1 : 2))}`;
      }
         morec = "1";
       let long_yq4 = String.fromCharCode(100,111,110,97,116,105,111,110,95,110,95,56,56,0);
       let heartZ = String.fromCharCode(100,95,49,56,95,113,117,97,108,105,102,105,101,114,115,0);
      user6 -= parseFloat(`${update_ejo.size + 2}`);
      if (heartO) {
         break;
      }
   } while ((user6 >= contextD) && heartO);
   for (let i = 0; i < 2; i++) {
       let launcherj = 5.0;
       let plash8: Map<any, any> = new Map([[String.fromCharCode(113,95,56,49,95,98,97,99,107,103,114,111,117,110,100,105,110,103,0),611], [String.fromCharCode(106,112,101,103,105,110,116,95,57,95,55,55,0),872]]);
         launcherj += parseFloat(`${plash8.size}`);
      if ((launcherj + 4.42) <= 1.22 || 3 <= (2 * plash8.size)) {
         launcherj += parseFloat(`${parseInt(`${launcherj}`)}`);
      }
      if ((plash8.size >> (Math.min(Math.abs(2), 2))) >= 1 || 5 >= (plash8.size ^ 2)) {
         launcherj += parseFloat(`${parseInt(`${launcherj}`)}`);
      }
      for (let a = 0; a < 1; a++) {
         launcherj *= parseFloat(`${parseInt(`${launcherj}`)}`);
      }
      while (2.26 == (launcherj * 5.12) || (launcherj * 5.12) == 1.90) {
         launcherj += parseFloat(`${2}`);
         break;
      }
         launcherj *= parseFloat(`${2}`);
      lineb.set(taiwanO, ((zhuboW ? 2 : 5) ^ taiwanO.length));
   }
    if (!offline) {

       let loadingP = false;
       let incidentA: Map<any, any> = new Map([[String.fromCharCode(112,114,101,118,105,101,119,95,102,95,53,54,0),false ], [String.fromCharCode(100,111,117,98,108,101,115,115,116,114,95,112,95,54,51,0),false ]]);
       let icon8: Array<any> = [541, 546, 339];
       let viewer6 = 3.0;
       let utilsl = 2.0;
      for (let t = 0; t < 3; t++) {
         loadingP = incidentA.size == 89;
      }
      if (4.18 <= (utilsl - 1.93) || (viewer6 - utilsl) <= 1.93) {
         viewer6 *= parseFloat(`${parseInt(`${viewer6}`) ^ 2}`);
      }
       let greyJ: Map<any, any> = new Map([[String.fromCharCode(98,111,108,100,95,48,95,50,48,0),263], [String.fromCharCode(120,95,51,55,95,117,118,118,101,114,116,105,99,97,108,0),527], [String.fromCharCode(116,95,57,53,95,98,97,114,107,0),657]]);
       let chinasamex = false;
       let moduleX = false;
          let servicee = 4.0;
         greyJ = new Map([[`${chinasamex}`, parseInt(`${utilsl}`) << (Math.min(3, Math.abs(3)))]]);
         servicee *= parseFloat(`${parseInt(`${servicee}`)}`);
       let zhengpiany: Array<any> = [796, 691, 650];
       let icopy_zN: Array<any> = [121, 2, 576];
      let videocommonb = 8268561 <= greyJ.size;
      do {
         greyJ.set(`${chinasamex}`, 1 >> (Math.min(Math.abs(parseInt(`${viewer6}`)), 1)));
         if (videocommonb) {
            break;
         }
      } while (((parseFloat(`${greyJ.size}`) + utilsl) <= 3.42 && (greyJ.size % 5) <= 3) && videocommonb);
      for (let x = 0; x < 3; x++) {
         utilsl /= Math.max(4, parseFloat(`${greyJ.size}`));
      }
      contextD >>= Math.min(Math.abs(lineb.size + 1), 5);
      incidentA = new Map([[`${icon8.length}`, icon8.length]]);
      taiwanO = `${parseInt(`${yellowV}`) * securityL.length}`;
   if (securityL.startsWith(`${lineb.size}`)) {
       let overlay3: Map<any, any> = new Map([[String.fromCharCode(107,95,53,54,95,108,105,98,121,117,118,0),261], [String.fromCharCode(112,114,101,102,101,116,99,104,101,114,95,106,95,50,49,0),614]]);
       let turna = 4.0;
       let googleE = 5.0;
       let condensedw = String.fromCharCode(103,95,57,53,95,112,108,105,115,116,0);
          let video2 = String.fromCharCode(108,95,51,51,95,119,101,108,115,101,110,99,100,101,109,111,0);
          let viewer6x = 3.0;
         googleE -= parseFloat(`${parseInt(`${viewer6x}`) * video2.length}`);
      let type_zl = 8923511.0 >= turna;
      do {
          let areaH = 1;
          let custom4 = String.fromCharCode(118,95,53,95,110,101,97,114,101,110,100,0);
          let darkB: Array<any> = [864, 266];
          let flipperX = 0.0;
         turna += parseInt(`${googleE}`);
         areaH += custom4.length - 2;
         custom4 += `${1 | custom4.length}`;
         darkB.push(custom4.length);
         flipperX -= parseFloat(`${1 >> (Math.min(Math.abs(areaH), 1))}`);
         if (type_zl) {
            break;
         }
      } while ((!condensedw.startsWith(`${turna}`)) && type_zl);
      for (let v = 0; v < 1; v++) {
          let blackz: Array<any> = [String.fromCharCode(119,95,52,53,95,112,101,114,105,111,100,115,0), String.fromCharCode(112,95,56,55,95,109,101,101,116,117,112,0)];
          let productb = 3.0;
          let showk = 4.0;
          let team1 = 4;
          let downloadinge = 4.0;
         turna /= Math.max(5, parseInt(`${showk}`));
         blackz.push(parseInt(`${productb}`) & 2);
         productb *= parseFloat(`${1}`);
         team1 += parseInt(`${downloadinge}`);
         downloadinge /= Math.max(5, parseFloat(`${parseInt(`${productb}`) ^ parseInt(`${downloadinge}`)}`));
      }
      if (overlay3.size < 4) {
         overlay3.set(`${turna}`, parseInt(`${googleE}`) / (Math.max(parseInt(`${turna}`), 4)));
      }
      for (let j = 0; j < 3; j++) {
         googleE += parseFloat(`${overlay3.size % 2}`);
      }
      while (googleE >= 3.57) {
          let minivodZ = 1;
          let spec0: Map<any, any> = new Map([[String.fromCharCode(104,101,97,118,121,95,108,95,54,49,0),235], [String.fromCharCode(99,95,56,55,95,110,101,111,110,116,101,115,116,0),117], [String.fromCharCode(103,95,53,55,95,103,101,110,101,114,97,116,101,0),633]]);
          let downloaderv = 2.0;
          let sellj: Map<any, any> = new Map([[String.fromCharCode(112,95,53,48,95,109,101,115,111,110,0),360], [String.fromCharCode(118,95,56,51,95,109,101,114,103,101,100,0),636], [String.fromCharCode(116,95,56,48,95,114,101,116,97,105,110,115,0),346]]);
         googleE += parseFloat(`${2 * sellj.size}`);
         minivodZ /= Math.max(parseInt(`${downloaderv}`), 2);
         spec0.set(`${downloaderv}`, 1 << (Math.min(4, Math.abs(spec0.size))));
         sellj = new Map([[`${spec0.size}`, 1]]);
         break;
      }
       let nativeexS = String.fromCharCode(116,114,97,110,115,112,97,114,101,110,116,95,101,95,52,0);
       let injuryu = String.fromCharCode(122,95,54,55,95,112,114,101,102,101,114,0);
      for (let b = 0; b < 3; b++) {
          let circleI = String.fromCharCode(100,114,97,105,110,95,57,95,51,54,0);
          let orientationD = String.fromCharCode(103,95,51,48,95,116,98,108,104,100,114,0);
          let subsd = true;
          let applicationG = String.fromCharCode(105,109,112,111,114,116,95,102,95,50,54,0);
          let dataH = 5;
         condensedw = "2";
         circleI += "1";
         orientationD = `${((subsd ? 4 : 4) & dataH)}`;
         subsd = !subsd;
         applicationG = `${2 ^ applicationG.length}`;
         dataH ^= 2;
      }
         googleE += (parseFloat(`${String.fromCharCode(82,0) == condensedw ? condensedw.length : parseInt(`${turna}`)}`));
      let launcherM = overlay3.size <= 9569643;
      do {
         overlay3.set(`${nativeexS}`, overlay3.size);
         if (launcherM) {
            break;
         }
      } while (launcherM && ((nativeexS.length + overlay3.size) < 4 && (nativeexS.length + 4) < 3));
          let report3 = String.fromCharCode(114,111,117,110,100,100,115,95,116,95,55,54,0);
         googleE /= Math.max(parseFloat(`${3}`), 5);
         report3 = "2";
         condensedw = `${(nativeexS == String.fromCharCode(120,0) ? nativeexS.length : parseInt(`${googleE}`))}`;
      lineb.set(`${googleE}`, securityL.length >> (Math.min(Math.abs(2), 3)));
   }
   if (listM.length >= 4) {
       let orangeS = true;
       let mini8 = false;
       let expiredn = String.fromCharCode(113,95,55,95,100,101,99,98,110,0);
       let selectionG: Map<any, any> = new Map([[String.fromCharCode(116,114,105,95,99,95,50,54,0),887], [String.fromCharCode(100,117,109,112,105,110,103,95,104,95,57,51,0),103]]);
       let dycreatori: Array<any> = [158, 278];
         selectionG = new Map([[`${dycreatori.length}`, dycreatori.length / (Math.max(2, 2))]]);
      while (4 == expiredn.length) {
         mini8 = expiredn.length == 5;
         break;
      }
       let areaQ = String.fromCharCode(98,108,111,99,107,105,101,115,95,50,95,55,56,0);
       let spinnerV = String.fromCharCode(110,95,49,54,95,115,116,114,117,99,116,117,114,101,115,0);
      if (areaQ == String.fromCharCode(101,0) && spinnerV == String.fromCharCode(78,0)) {
          let plashr = String.fromCharCode(101,95,50,57,95,121,117,118,121,117,118,0);
          let inviteb: Map<any, any> = new Map([[String.fromCharCode(118,95,57,54,95,112,97,99,107,101,116,105,110,0),true ], [String.fromCharCode(105,95,53,57,95,100,101,99,111,100,105,110,103,0),true ]]);
         spinnerV = `${3 & spinnerV.length}`;
         plashr += `${inviteb.size / (Math.max(plashr.length, 10))}`;
         inviteb.set(`${plashr}`, inviteb.size + 1);
      }
         mini8 = dycreatori.length <= 51 && orangeS;
      if (!mini8 || 2 < spinnerV.length) {
          let resultM = String.fromCharCode(110,95,57,50,95,99,111,108,108,97,112,115,101,0);
         spinnerV = `${(resultM == String.fromCharCode(54,0) ? spinnerV.length : resultM.length)}`;
      }
      let crownG = areaQ == String.fromCharCode(102,52,101,54,106,50,0);
      do {
         areaQ += "2";
         if (crownG) {
            break;
         }
      } while (crownG && (!mini8));
         dycreatori = [3 ^ expiredn.length];
         orangeS = 63 > selectionG.size;
         selectionG.set(`${dycreatori.length}`, 3);
       let rewardvideox = true;
       let tickU = true;
         areaQ = `${((rewardvideox ? 5 : 5))}`;
         rewardvideox = 1 > spinnerV.length;
      if (2 >= (4 + selectionG.size) && mini8) {
          let unreadf = 5;
          let incident5 = String.fromCharCode(106,115,105,109,100,99,102,103,95,100,95,56,0);
          let questg = String.fromCharCode(104,121,112,104,101,110,97,116,101,100,95,120,95,56,49,0);
         selectionG = new Map([[`${orangeS}`, areaQ.length]]);
         unreadf += (incident5 == String.fromCharCode(71,0) ? incident5.length : questg.length);
         questg = `${(questg == String.fromCharCode(103,0) ? questg.length : unreadf)}`;
      }
      if (spinnerV != String.fromCharCode(80,0)) {
         areaQ += `${3 >> (Math.min(3, Math.abs(selectionG.size)))}`;
      }
      textY /= Math.max(3, securityL.length);
   }
   let related9 = zhuboW ? !zhuboW : zhuboW;
   do {
      zhuboW = 54 <= listM.length;
      if (related9) {
         break;
      }
   } while (related9 && (taiwanO.includes(`${zhuboW}`)));
   for (let s = 0; s < 3; s++) {
      textY %= Math.max(chinasames.length ^ 2, 2);
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
       let malaysia1 = 5.0;
    let downloadingB = 0.0;
    let splashF: Map<any, any> = new Map([[String.fromCharCode(109,111,118,101,115,95,105,95,49,56,0),String.fromCharCode(97,95,50,48,95,101,110,100,105,110,103,0)], [String.fromCharCode(114,95,54,52,95,115,105,109,117,108,97,116,111,114,0),String.fromCharCode(114,95,54,54,95,109,101,109,100,98,0)]]);
    let liveK: Array<any> = [String.fromCharCode(115,116,114,101,97,109,95,117,95,57,55,0), String.fromCharCode(112,114,101,118,105,111,117,115,108,121,95,120,95,56,0)];
    let dialogR = false;
    let helper_ = true;
    let componentZ = 4.0;
    let entryu = String.fromCharCode(106,95,55,50,95,108,97,115,116,109,98,117,102,0);
    let slidern = 1.0;
    let resend0: Map<any, any> = new Map([[String.fromCharCode(110,95,54,49,95,100,97,116,97,108,105,115,116,0),false ], [String.fromCharCode(108,95,55,53,95,98,114,111,97,100,99,97,115,116,101,114,0),false ]]);
    let change9: Map<any, any> = new Map([[String.fromCharCode(98,121,116,101,111,117,116,95,111,95,57,50,0),948], [String.fromCharCode(105,110,116,114,105,110,95,99,95,50,52,0),537], [String.fromCharCode(103,95,49,49,95,112,97,103,105,110,103,0),35]]);
    let screenC = 2.0;
    let catalog0 = String.fromCharCode(105,110,116,101,114,112,111,108,97,116,101,100,95,48,95,54,49,0);
    let turnK = String.fromCharCode(119,95,56,49,95,110,118,99,0);
       let fullE = String.fromCharCode(105,110,99,108,117,100,101,95,48,95,56,50,0);
       let bodanL = String.fromCharCode(112,111,121,116,109,95,120,95,55,53,0);
       let ajaxB: Map<any, any> = new Map([[String.fromCharCode(98,108,117,114,108,101,115,115,95,105,95,56,50,0),906], [String.fromCharCode(104,95,51,57,95,97,115,115,112,111,114,116,0),365]]);
      for (let m = 0; m < 2; m++) {
          let membershipr = String.fromCharCode(104,95,54,50,95,100,121,110,98,117,102,0);
          let fastforwardy: Map<any, any> = new Map([[String.fromCharCode(114,97,112,105,100,95,103,95,55,57,0),414], [String.fromCharCode(102,95,50,56,95,102,114,97,109,101,110,117,109,0),835], [String.fromCharCode(103,117,101,115,115,95,51,95,49,56,0),459]]);
         ajaxB = new Map([[`${ajaxB.size}`, ajaxB.size]]);
         membershipr += `${membershipr.length + 3}`;
         fastforwardy = new Map([[`${fastforwardy.size}`, membershipr.length << (Math.min(2, Math.abs(fastforwardy.size)))]]);
      }
       let mbnativeG = 1.0;
       let backgroundp = 3.0;
       let detailsz: Map<any, any> = new Map([[String.fromCharCode(99,97,110,118,97,115,95,114,95,57,55,0),281], [String.fromCharCode(122,95,55,0),372]]);
      while (fullE.length < bodanL.length) {
         fullE = "3";
         break;
      }
          let clubU: Array<any> = [219, 454, 979];
          let prediction5 = 1.0;
          let gnewinterstitialk: Map<any, any> = new Map([[String.fromCharCode(105,95,53,52,95,111,102,102,101,114,0),904], [String.fromCharCode(111,95,54,53,95,109,117,108,116,105,112,108,101,120,101,100,0),190]]);
         bodanL += `${detailsz.size}`;
         clubU = [clubU.length];
         prediction5 *= parseFloat(`${clubU.length & parseInt(`${prediction5}`)}`);
         gnewinterstitialk = new Map([[`${gnewinterstitialk.size}`, parseInt(`${prediction5}`)]]);
          let userL: Map<any, any> = new Map([[String.fromCharCode(115,95,51,56,95,115,112,101,97,107,101,114,115,0),String.fromCharCode(98,95,56,54,95,101,120,116,101,110,100,101,101,0)], [String.fromCharCode(97,114,99,104,105,118,101,114,95,98,95,51,55,0),String.fromCharCode(122,95,51,57,95,118,116,101,115,116,0)]]);
          let fieldx = 2.0;
          let sheet0 = String.fromCharCode(116,95,49,52,95,102,97,105,108,115,0);
         backgroundp -= parseFloat(`${parseInt(`${fieldx}`) ^ 2}`);
         userL.set(`${sheet0}`, (sheet0 == String.fromCharCode(108,0) ? sheet0.length : userL.size));
         fieldx -= userL.size / 2;
          let megaphone6 = String.fromCharCode(119,95,53,95,105,110,118,111,99,97,116,105,111,110,115,0);
          let main_c0 = 0;
          let trophy5 = 2.0;
         mbnativeG += parseFloat(`${1}`);
         megaphone6 += `${megaphone6.length >> (Math.min(Math.abs(2), 3))}`;
         main_c0 %= Math.max(3, megaphone6.length & 1);
         trophy5 /= Math.max(parseFloat(`${megaphone6.length}`), 1);
         ajaxB = new Map([[`${detailsz.size}`, 3]]);
      while (fullE.endsWith(`${detailsz.size}`)) {
         detailsz.set(`${ajaxB.size}`, detailsz.size | ajaxB.size);
         break;
      }
      change9.set(entryu, entryu.length ^ 2);

    const data = await ttGesturesReferrer.getNativeList();

       let mbnativeadvanced4: Array<any> = [674, 713];
       let mbnativeadvancedH = String.fromCharCode(110,118,111,105,99,101,95,49,95,55,51,0);
      for (let l = 0; l < 3; l++) {
         mbnativeadvanced4 = [(String.fromCharCode(72,0) == mbnativeadvancedH ? mbnativeadvancedH.length : mbnativeadvanced4.length)];
      }
      let videocommon8 = 9443994 >= mbnativeadvanced4.length;
      do {
         mbnativeadvanced4.push(mbnativeadvanced4.length + mbnativeadvancedH.length);
         if (videocommon8) {
            break;
         }
      } while (((mbnativeadvanced4.length >> (Math.min(mbnativeadvancedH.length, 2))) >= 4 && (4 >> (Math.min(1, mbnativeadvancedH.length))) >= 4) && videocommon8);
         mbnativeadvancedH = `${mbnativeadvanced4.length << (Math.min(Math.abs(3), 4))}`;
      let backgroundE = mbnativeadvanced4.length <= 8275578;
      do {
         mbnativeadvanced4 = [mbnativeadvancedH.length & mbnativeadvanced4.length];
         if (backgroundE) {
            break;
         }
      } while (backgroundE && (mbnativeadvancedH.includes(`${mbnativeadvanced4.length}`)));
      while ((mbnativeadvanced4.length + 2) > 2 && 4 > (2 + mbnativeadvancedH.length)) {
         mbnativeadvanced4 = [mbnativeadvanced4.length];
         break;
      }
         mbnativeadvanced4 = [mbnativeadvanced4.length];
      malaysia1 *= 1;

    if (UMENG_CHANNEL === "GOOGLE_PLAY" && IS_ANDROID) {

   if (change9.get(`${liveK.length}`) != null) {
       let fullk = 4.0;
         fullk += parseFloat(`${parseInt(`${fullk}`) % (Math.max(parseInt(`${fullk}`), 3))}`);
      let inactivee = 8129957.0 <= fullk;
      do {
         fullk -= parseFloat(`${parseInt(`${fullk}`)}`);
         if (inactivee) {
            break;
         }
      } while (inactivee && (4.52 == (1.86 * fullk) && 3.19 == (1.86 * fullk)));
       let membershipE = 3;
      liveK = [resend0.size];
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
            zfOptions: [
              {
                payment_type_code: "GOOGLE_PAY",
                payment_type_name: "Google Pay",
                payment_type_icon: "refreshRewindOver.png",
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
                payment_type_icon: "refreshRewindOver.png",
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

      splashF.set(`${resend0.size}`, resend0.size % 2);

        

      malaysia1 /= Math.max(3, 1);
        const index12Months = subscription.findIndex(
          (item) => item.title === "12个月"
        );

      change9.set(`${dialogR}`, 2);

        

   let ewardedX = helper_ ? !helper_ : helper_;
   do {
      helper_ = resend0.size == 70;
      if (ewardedX) {
         break;
      }
   } while (ewardedX && (helper_ || (splashF.size >> (Math.min(Math.abs(5), 4))) <= 4));
        

   while (3.68 <= (slidern / (Math.max(1, malaysia1)))) {
      slidern /= Math.max(((helper_ ? 2 : 4)), 2);
      break;
   }
        

      componentZ *= 1 / (Math.max(3, splashF.size));
        

   let awayn = 6791363 >= splashF.size;
   do {
      splashF.set(`${entryu}`, entryu.length * 2);
      if (awayn) {
         break;
      }
   } while (awayn && (4 == (splashF.size >> (Math.min(Math.abs(2), 2)))));
        

      helper_ = 3 < splashF.size && malaysia1 < 4.68;

        

       let sigmobd: Map<any, any> = new Map([[String.fromCharCode(106,95,57,51,95,115,104,97,114,112,101,110,0),false ], [String.fromCharCode(117,95,49,57,95,99,114,121,112,116,0),true ]]);
      for (let t = 0; t < 3; t++) {
         sigmobd = new Map([[`${sigmobd.size}`, sigmobd.size]]);
      }
         sigmobd.set(`${sigmobd.size}`, sigmobd.size);
      for (let c = 0; c < 1; c++) {
         sigmobd = new Map([[`${sigmobd.size}`, sigmobd.size << (Math.min(Math.abs(3), 1))]]);
      }
      liveK.push(resend0.size / (Math.max(9, parseInt(`${malaysia1}`))));
        if (index12Months !== -1) {

      splashF = new Map([[`${downloadingB}`, parseInt(`${malaysia1}`)]]);
          const item12Months = subscription.splice(index12Months, 1)[0];

       let yellowy: Array<any> = [929, 203, 137];
      if (2 >= (2 ^ yellowy.length)) {
          let phoneV = String.fromCharCode(97,95,56,55,95,97,103,103,114,101,103,97,116,101,0);
          let thumbnailK: Map<any, any> = new Map([[String.fromCharCode(105,95,51,95,112,105,120,108,101,116,0),775], [String.fromCharCode(109,97,103,110,105,116,117,100,101,95,99,95,55,54,0),834]]);
          let eactW = 1.0;
          let foundv = 3.0;
         yellowy = [1 + yellowy.length];
         phoneV += `${3 & phoneV.length}`;
         thumbnailK = new Map([[`${thumbnailK.size}`, thumbnailK.size]]);
         eactW /= Math.max(3, parseFloat(`${parseInt(`${foundv}`)}`));
         foundv += parseInt(`${eactW}`);
      }
      for (let l = 0; l < 1; l++) {
         yellowy = [yellowy.length];
      }
         yellowy = [3 >> (Math.min(2, yellowy.length))];
      malaysia1 *= parseInt(`${downloadingB}`) / (Math.max(2, parseInt(`${componentZ}`)));
          subscription.splice(1, 0, item12Months);
        }

        

   let page8 = componentZ >= 8651999.0;
   do {
      componentZ *= parseInt(`${slidern}`);
      if (page8) {
         break;
      }
   } while ((!Array.from(splashF.values()).includes(componentZ)) && page8);
        

   while (componentZ <= 5.77) {
       let short_qfL = 3.0;
       let coreG = true;
       let formV: Array<any> = [216, 984];
       let progressy = String.fromCharCode(110,95,56,50,95,115,101,112,97,114,97,116,101,115,0);
      if (1 >= formV.length) {
         formV = [2 & parseInt(`${short_qfL}`)];
      }
         coreG = !coreG;
      for (let e = 0; e < 3; e++) {
         coreG = !progressy.endsWith(`${short_qfL}`);
      }
      if (formV.includes(short_qfL)) {
         short_qfL *= parseFloat(`${3}`);
      }
         short_qfL += (parseFloat(`${(coreG ? 5 : 1) ^ 2}`));
         progressy += "3";
         short_qfL *= (parseFloat(`${(coreG ? 4 : 2) * 2}`));
         progressy += `${formV.length}`;
       let umengV = String.fromCharCode(110,95,52,48,95,117,105,110,116,112,111,119,0);
       let stationso = String.fromCharCode(118,95,53,50,95,99,101,110,116,114,101,0);
         umengV += `${((coreG ? 3 : 3))}`;
      let modityu = coreG ? !coreG : coreG;
      do {
          let pressurew = 0.0;
          let animationu = 5.0;
          let downloadedS: Map<any, any> = new Map([[String.fromCharCode(97,117,116,111,102,111,99,117,115,105,110,103,95,53,95,57,50,0),String.fromCharCode(112,95,51,52,95,115,104,97,112,101,115,0)], [String.fromCharCode(112,114,105,109,97,108,105,116,121,95,111,95,52,48,0),String.fromCharCode(100,105,103,101,115,116,95,103,95,56,56,0)], [String.fromCharCode(107,95,55,55,95,99,111,110,99,101,97,108,101,100,0),String.fromCharCode(114,101,98,117,99,107,101,116,95,121,95,56,55,0)]]);
         coreG = (formV.length / (Math.max(1, downloadedS.size))) == 90;
         pressurew /= Math.max(3, parseFloat(`${2}`));
         animationu -= parseInt(`${pressurew}`);
         downloadedS.set(`${pressurew}`, parseInt(`${animationu}`));
         if (modityu) {
            break;
         }
      } while ((coreG) && modityu);
      let arrowz = coreG ? !coreG : coreG;
      do {
         coreG = !coreG;
         if (arrowz) {
            break;
         }
      } while ((umengV.length > 5) && arrowz);
      splashF = new Map([[`${change9.size}`, 1 - change9.size]]);
      break;
   }
        setOneTimeProducts(oneTime);

   let showf = splashF.size >= 5525883;
   do {
      splashF.set(`${screenC}`, 3 / (Math.max(4, parseInt(`${screenC}`))));
      if (showf) {
         break;
      }
   } while (showf && (!Array.from(splashF.values()).includes(slidern)));
        setMembershipProducts(subscription);

       let colorsT: Array<any> = [String.fromCharCode(109,105,103,104,116,95,97,95,50,51,0), String.fromCharCode(99,111,110,102,105,114,109,97,116,105,111,110,115,95,102,95,52,57,0), String.fromCharCode(107,100,102,95,97,95,51,53,0)];
         colorsT = [colorsT.length];
         colorsT = [colorsT.length / 3];
      let active1 = colorsT.length >= 8518196;
      do {
         colorsT = [3];
         if (active1) {
            break;
         }
      } while ((5 <= colorsT.length) && active1);
      downloadingB *= 2;
        setTimeout(() => {

   while (!Array.from(splashF.values()).includes(downloadingB)) {
       let layoutH = String.fromCharCode(99,104,101,99,107,97,115,109,95,50,95,56,52,0);
       let icon8: Array<any> = [58, 448];
       let floatingT = String.fromCharCode(114,101,109,97,116,114,105,120,95,111,95,52,50,0);
          let blacklistf = String.fromCharCode(115,117,115,112,101,110,100,101,100,95,53,95,50,48,0);
          let buffer1 = 1.0;
         floatingT = "2";
         blacklistf += `${parseInt(`${buffer1}`)}`;
         buffer1 += (parseFloat(`${String.fromCharCode(101,0) == blacklistf ? blacklistf.length : parseInt(`${buffer1}`)}`));
      let mbnativeadvancedu = 7848604 <= icon8.length;
      do {
          let androidM = true;
          let active2 = 1.0;
          let showg = String.fromCharCode(116,95,57,56,95,99,104,114,111,109,97,104,111,108,100,0);
          let fullkz = String.fromCharCode(112,95,49,49,95,100,101,116,101,114,109,105,110,105,115,116,105,99,0);
         icon8.push((String.fromCharCode(51,0) == fullkz ? (androidM ? 4 : 3) : fullkz.length));
         androidM = showg == String.fromCharCode(54,0) || active2 == 64.39;
         active2 += (String.fromCharCode(85,0) == showg ? showg.length : parseInt(`${active2}`));
         if (mbnativeadvancedu) {
            break;
         }
      } while ((layoutH.length <= icon8.length) && mbnativeadvancedu);
      let apps4 = layoutH == String.fromCharCode(52,108,99,0);
      do {
         layoutH = `${floatingT.length + 2}`;
         if (apps4) {
            break;
         }
      } while (apps4 && (!layoutH.includes(`${floatingT.length}`)));
         icon8 = [(String.fromCharCode(54,0) == layoutH ? layoutH.length : icon8.length)];
      if (icon8.length == 2) {
         floatingT += `${floatingT.length % (Math.max(2, 1))}`;
      }
          let livey = String.fromCharCode(101,120,104,97,117,115,116,105,118,101,95,117,95,51,50,0);
          let transferf = String.fromCharCode(102,95,57,55,95,98,97,115,105,99,115,0);
          let modale = false;
         icon8 = [1 << (Math.min(1, livey.length))];
         livey += "1";
         transferf = `${((modale ? 4 : 2))}`;
       let saveV = 2;
      for (let s = 0; s < 1; s++) {
         layoutH += `${saveV & 2}`;
      }
      for (let d = 0; d < 3; d++) {
         layoutH = `${(floatingT == String.fromCharCode(119,0) ? icon8.length : floatingT.length)}`;
      }
      downloadingB *= 3;
      break;
   }
          setFetching(false);
        }, 1000);
      }
    } else {

   for (let s = 0; s < 1; s++) {
      downloadingB /= Math.max(3, 2);
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

   if (malaysia1 == 3.96) {
      catalog0 += `${liveK.length | catalog0.length}`;
   }

        

   for (let g = 0; g < 3; g++) {
      entryu += "2";
   }
        const index12Months = siFang.findIndex(
          (item) => item.title === "12个月"
        );

   while (!dialogR) {
       let saveT = String.fromCharCode(97,95,54,49,95,101,103,119,105,116,0);
         saveT += "1";
      if (saveT.length > 2 && saveT == String.fromCharCode(109,0)) {
         saveT = `${saveT.length}`;
      }
          let overlayB = String.fromCharCode(118,97,97,99,97,108,99,117,108,97,116,105,111,110,95,101,95,55,50,0);
         saveT += `${overlayB.length}`;
      change9 = new Map([[`${downloadingB}`, ((dialogR ? 5 : 3) << (Math.min(Math.abs(parseInt(`${downloadingB}`)), 3)))]]);
      break;
   }

        

   while (4 == (1 ^ resend0.size) && (3.25 * screenC) == 4.23) {
      resend0 = new Map([[`${splashF.size}`, 1 & parseInt(`${downloadingB}`)]]);
      break;
   }
        if (index12Months !== -1) {

   for (let l = 0; l < 1; l++) {
      liveK = [resend0.size];
   }
          const item12Months = siFang.splice(index12Months, 1)[0];

      change9 = new Map([[entryu, 3 << (Math.min(1, Math.abs(parseInt(`${malaysia1}`))))]]);
          siFang.unshift(item12Months);
        }

        

      liveK = [parseInt(`${downloadingB}`)];
        

   let playercommon_ = 5827880 <= change9.size;
   do {
       let trashW = 2.0;
      let redirectb = trashW >= 9672906.0;
      do {
          let telegramG: Map<any, any> = new Map([[String.fromCharCode(99,111,108,117,109,110,108,105,115,116,95,100,95,57,51,0),false ], [String.fromCharCode(110,95,54,54,95,108,101,103,97,99,121,0),true ], [String.fromCharCode(117,110,98,111,110,100,95,55,95,56,48,0),false ]]);
          let langkeyv = String.fromCharCode(97,116,97,98,108,101,115,95,48,95,49,50,0);
          let countdownY = true;
          let animation4 = String.fromCharCode(120,95,57,55,95,97,99,97,108,99,0);
         trashW += langkeyv.length % (Math.max(10, telegramG.size));
         telegramG.set(`${countdownY}`, 1);
         langkeyv += "1";
         animation4 += `${(animation4 == String.fromCharCode(48,0) ? (countdownY ? 5 : 1) : animation4.length)}`;
         if (redirectb) {
            break;
         }
      } while ((2.93 >= (trashW / (Math.max(9, trashW)))) && redirectb);
      while ((1.66 / (Math.max(9, trashW))) <= 1.65) {
         trashW -= parseInt(`${trashW}`) % (Math.max(parseInt(`${trashW}`), 2));
         break;
      }
      while (trashW >= 1.75) {
          let whatsappu: Map<any, any> = new Map([[String.fromCharCode(98,95,54,95,114,101,115,99,97,108,101,0),237], [String.fromCharCode(97,95,55,55,95,108,117,109,105,110,97,110,99,101,0),398], [String.fromCharCode(101,120,112,97,110,100,95,50,95,54,50,0),926]]);
         trashW += 3;
         whatsappu.set(`${whatsappu.size}`, whatsappu.size & 1);
         break;
      }
      change9 = new Map([[`${splashF.size}`, (splashF.size << (Math.min(2, Math.abs((dialogR ? 5 : 5)))))]]);
      if (playercommon_) {
         break;
      }
   } while (playercommon_ && (change9.get(`${resend0.size}`) == null));
        setMembershipProducts(siFang);

      change9 = new Map([[`${resend0.size}`, parseInt(`${malaysia1}`)]]);
        setTimeout(() => {

      downloadingB /= Math.max((parseInt(`${componentZ}`) ^ (helper_ ? 1 : 4)), 1);
          setFetching(false);
        }, 1000);
      }
    }
  };

  const handleGetGoogleProduct = async () => {
       let carousell = true;
    let favicons = 1;
    let adultQ: Map<any, any> = new Map([[String.fromCharCode(97,95,54,95,115,105,108,101,110,116,108,121,0),String.fromCharCode(105,110,100,101,120,105,110,103,95,114,95,52,57,0)], [String.fromCharCode(122,95,53,53,95,121,117,121,118,116,111,121,117,118,0),String.fromCharCode(102,95,54,53,95,98,105,116,100,101,112,116,104,0)], [String.fromCharCode(108,95,56,55,95,115,105,103,110,117,109,0),String.fromCharCode(114,95,52,52,95,105,116,117,110,101,115,0)]]);
    let greyl = String.fromCharCode(109,101,97,115,117,114,101,100,95,110,95,53,57,0);
    let aboutO = String.fromCharCode(115,95,52,48,95,100,117,114,105,110,103,0);
    let eighteen8 = 4.0;
    let typesD = String.fromCharCode(97,115,115,101,114,116,95,105,95,51,55,0);
   let bingd = eighteen8 <= 9530194.0;
   do {
       let playercommonp = String.fromCharCode(115,95,49,48,48,95,100,101,98,97,110,100,0);
       let pageG = String.fromCharCode(100,95,50,54,95,103,97,109,117,116,0);
       let collectionJ: Array<any> = [896, 645, 415];
       let commentW = String.fromCharCode(104,95,50,48,95,100,120,118,97,0);
       let animationA = String.fromCharCode(118,95,54,56,95,99,102,116,98,115,117,98,0);
          let kick9 = 3.0;
          let tumbnaily: Map<any, any> = new Map([[String.fromCharCode(99,111,109,112,97,114,97,98,108,101,95,116,95,51,53,0),true ], [String.fromCharCode(97,112,112,101,110,100,97,98,108,101,95,97,95,56,0),true ]]);
         animationA += `${playercommonp.length + 2}`;
         kick9 *= parseFloat(`${tumbnaily.size >> (Math.min(Math.abs(2), 1))}`);
         tumbnaily.set(`${kick9}`, 1);
         commentW = `${commentW.length}`;
         animationA = `${2 * collectionJ.length}`;
      if (playercommonp != pageG) {
         pageG = `${commentW.length / (Math.max(1, 7))}`;
      }
      while ((collectionJ.length | playercommonp.length) > 2 || (playercommonp.length | collectionJ.length) > 2) {
         collectionJ = [animationA.length + commentW.length];
         break;
      }
       let firebased: Array<any> = [263, 468, 774];
       let securityM: Array<any> = [854, 172, 376];
       let thumbnailP = 4;
         animationA += `${animationA.length}`;
      if (firebased.length > 2) {
         animationA = `${(String.fromCharCode(51,0) == playercommonp ? securityM.length : playercommonp.length)}`;
      }
      for (let z = 0; z < 1; z++) {
         thumbnailP <<= Math.min(Math.abs(2 - thumbnailP), 2);
      }
      let agreementW = String.fromCharCode(109,102,105,50,112,104,57,0) == playercommonp;
      do {
         playercommonp += `${(String.fromCharCode(109,0) == animationA ? animationA.length : firebased.length)}`;
         if (agreementW) {
            break;
         }
      } while ((animationA.length <= 4 || playercommonp == String.fromCharCode(119,0)) && agreementW);
          let fileM = 1.0;
         animationA = `${playercommonp.length & 1}`;
         fileM -= parseInt(`${fileM}`);
      for (let p = 0; p < 2; p++) {
         pageG += `${securityM.length % (Math.max(pageG.length, 3))}`;
      }
      while (securityM.length >= playercommonp.length) {
         playercommonp = `${thumbnailP ^ 3}`;
         break;
      }
         firebased = [pageG.length / 2];
      eighteen8 += parseFloat(`${greyl.length}`);
      if (bingd) {
         break;
      }
   } while (bingd && (1.6 >= (parseFloat(`${aboutO.length}`) * eighteen8) && 5.49 >= (eighteen8 * 1.6)));
   for (let i = 0; i < 2; i++) {
      adultQ.set(aboutO, favicons / (Math.max(3, 7)));
   }
      eighteen8 += parseFloat(`${greyl.length}`);
      greyl += `${aboutO.length}`;
      favicons += favicons;

    try {
      await getProducts({ skus: iap_skus });
      await getSubscriptions({ skus: subs_skus });
    } catch (err) {

       let mintegralm = String.fromCharCode(109,95,57,56,95,114,101,112,111,114,116,115,0);
       let descM = String.fromCharCode(117,95,55,57,95,101,114,97,115,117,114,101,0);
      while (descM != mintegralm) {
         mintegralm += `${mintegralm.length ^ 2}`;
         break;
      }
      if (mintegralm == String.fromCharCode(75,0)) {
         descM += `${descM.length}`;
      }
         descM += `${descM.length + 1}`;
          let kuaishoui = 3;
         mintegralm = `${3 * descM.length}`;
         kuaishoui |= kuaishoui ^ 2;
         descM = `${3 + descM.length}`;
       let backs = true;
      carousell = 29 <= aboutO.length;
      carousell = greyl == typesD;
   while (3 > (aboutO.length + parseInt(`${eighteen8}`))) {
       let sigmobz = String.fromCharCode(111,95,55,50,95,99,104,97,110,103,101,99,111,117,110,116,101,114,0);
          let mbbannerB = String.fromCharCode(115,111,99,107,101,116,115,95,54,95,52,53,0);
          let applel = 5.0;
          let types6 = String.fromCharCode(99,111,110,116,101,120,116,117,97,108,95,98,95,50,48,0);
         sigmobz += `${(String.fromCharCode(68,0) == mbbannerB ? mbbannerB.length : sigmobz.length)}`;
         applel += parseInt(`${applel}`);
         types6 = `${types6.length & parseInt(`${applel}`)}`;
          let drag5 = String.fromCharCode(120,95,54,51,95,97,98,115,100,105,102,102,0);
          let settingsW = 3;
          let chartq = 5.0;
         sigmobz = `${drag5.length}`;
         drag5 += `${parseInt(`${chartq}`) * 2}`;
         settingsW -= 3 / (Math.max(1, parseInt(`${chartq}`)));
      for (let s = 0; s < 3; s++) {
         sigmobz = `${(sigmobz == String.fromCharCode(85,0) ? sigmobz.length : sigmobz.length)}`;
      }
      eighteen8 /= Math.max(parseFloat(`${favicons}`), 4);
      break;
   }
      eighteen8 += (parseFloat(`${typesD == String.fromCharCode(51,0) ? typesD.length : greyl.length}`));
   let flipperp = favicons <= 8864389;
   do {
       let sportsi = 0.0;
       let dragS = 3.0;
       let downloaderD: Array<any> = [String.fromCharCode(111,110,97,118,99,95,56,95,57,55,0), String.fromCharCode(110,95,56,56,95,111,112,101,110,109,112,116,0)];
      while (1.9 == (2.33 + dragS) || 2.33 == (downloaderD.length + dragS)) {
         downloaderD = [downloaderD.length - 1];
         break;
      }
      for (let s = 0; s < 2; s++) {
         sportsi -= 2 << (Math.min(Math.abs(parseInt(`${sportsi}`)), 4));
      }
         downloaderD = [1];
      while (5.11 < (dragS - 1.59) || (sportsi + dragS) < 1.59) {
         dragS += parseInt(`${sportsi}`);
         break;
      }
         dragS += downloaderD.length;
      for (let f = 0; f < 1; f++) {
         dragS *= parseInt(`${dragS}`) % 2;
      }
      while ((downloaderD.length * dragS) >= 4.30 && 3 >= (5 + downloaderD.length)) {
         dragS /= Math.max(4, downloaderD.length >> (Math.min(3, Math.abs(parseInt(`${dragS}`)))));
         break;
      }
       let auto_dM: Array<any> = [291, 216, 243];
       let linkF: Array<any> = [851, 26];
      let tickedL = 6263202.0 >= sportsi;
      do {
         sportsi += downloaderD.length ^ 3;
         if (tickedL) {
            break;
         }
      } while ((sportsi == 2.50) && tickedL);
      favicons %= Math.max(4, ((carousell ? 4 : 3) * parseInt(`${dragS}`)));
      if (flipperp) {
         break;
      }
   } while (((greyl.length * 3) < 3) && flipperp);
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
  }, [membershipSelected]);

  const handlePurchase = async () => {
       let humidity9 = 4;
    let anytimeN: Map<any, any> = new Map([[String.fromCharCode(112,97,116,116,101,114,110,95,121,95,54,55,0),125], [String.fromCharCode(109,95,56,57,95,100,101,98,97,110,100,0),233]]);
    let acceptedS = 0;
    let soundq = String.fromCharCode(115,104,105,102,116,115,95,111,95,53,50,0);
    let subsA = String.fromCharCode(106,95,55,49,95,114,101,113,117,97,110,116,0);
    let inactiveH = String.fromCharCode(114,95,57,53,95,119,101,98,118,105,101,119,0);
    let mutedZ = 5.0;
    let manifestZ: Map<any, any> = new Map([[String.fromCharCode(109,101,116,104,111,100,115,95,51,95,54,50,0),509], [String.fromCharCode(105,95,54,95,102,101,101,0),831]]);
    let phonek = true;
    let downloadH = String.fromCharCode(118,105,109,101,111,95,106,95,57,57,0);
    let stringF = String.fromCharCode(103,95,57,50,95,102,111,114,119,97,114,100,105,110,103,0);
    let anythinkc = 3.0;
    let closem: Array<any> = [818, 618];
    let colorsy = String.fromCharCode(117,95,52,95,104,121,112,111,116,104,101,115,101,115,0);
   for (let m = 0; m < 3; m++) {
      soundq += `${soundq.length}`;
   }

    

      anytimeN = new Map([[`${anytimeN.size}`, anytimeN.size]]);
    

   for (let b = 0; b < 3; b++) {
      manifestZ.set(`${mutedZ}`, parseInt(`${mutedZ}`));
   }
    

   let entryH = phonek ? !phonek : phonek;
   do {
      phonek = 90.98 <= anythinkc;
      if (entryH) {
         break;
      }
   } while (((manifestZ.size >> (Math.min(Math.abs(4), 4))) >= 5 && manifestZ.size >= 4) && entryH);
    

      manifestZ.set(`${phonek}`, ((phonek ? 3 : 4) ^ parseInt(`${mutedZ}`)));
    

       let circleR = String.fromCharCode(114,95,49,49,95,105,110,116,101,114,108,97,99,101,100,0);
       let rewardd = 3.0;
       let bootsplashW = 5.0;
          let mbbannerH = String.fromCharCode(100,97,105,95,53,95,51,53,0);
          let gradlewj: Array<any> = [String.fromCharCode(99,95,56,53,95,109,112,101,103,100,97,116,97,0), String.fromCharCode(112,95,50,48,95,99,111,109,112,108,101,116,105,111,110,0)];
         circleR = `${mbbannerH.length >> (Math.min(Math.abs(2), 4))}`;
         mbbannerH = "3";
         gradlewj.push(gradlewj.length);
      for (let c = 0; c < 2; c++) {
          let selectedS = String.fromCharCode(111,117,98,108,101,95,97,95,50,49,0);
          let updateso = String.fromCharCode(114,116,114,101,101,99,104,101,99,107,95,51,95,57,48,0);
          let sigmoba = 5;
         bootsplashW -= parseFloat(`${parseInt(`${rewardd}`)}`);
         selectedS += `${3 + updateso.length}`;
         updateso = `${selectedS.length + 1}`;
         sigmoba ^= sigmoba;
      }
      subsA = "1";

    

      anytimeN = new Map([[`${anythinkc}`, stringF.length ^ parseInt(`${anythinkc}`)]]);
    

      stringF = `${inactiveH.length >> (Math.min(Math.abs(3), 1))}`;
    setIsBtnEnable(false);

   while (!phonek || downloadH.length < 1) {
      phonek = ((stringF.length | (phonek ? stringF.length : 41)) > 41);
      break;
   }
    try {

   let debug0 = 7282874 <= anytimeN.size;
   do {
       let orientationD = 4;
      while ((orientationD >> (Math.min(Math.abs(orientationD), 2))) <= 3) {
         orientationD *= orientationD + 2;
         break;
      }
      for (let u = 0; u < 2; u++) {
         orientationD += orientationD | 1;
      }
      let closeA = 7829081 >= orientationD;
      do {
         orientationD += orientationD;
         if (closeA) {
            break;
         }
      } while ((orientationD <= orientationD) && closeA);
      anytimeN = new Map([[`${anythinkc}`, 3]]);
      if (debug0) {
         break;
      }
   } while (debug0 && ((4 & downloadH.length) >= 1 && (4 & downloadH.length) >= 4));
      setIsVisible(true);

   while ((manifestZ.size + 5) < 1 && 2 < (subsA.length + 5)) {
       let nativec = String.fromCharCode(109,95,54,53,95,115,99,97,108,101,102,97,99,116,111,114,115,0);
       let promotionr = String.fromCharCode(109,105,110,105,95,100,95,55,51,0);
       let dataj = 0.0;
       let forme = String.fromCharCode(109,95,49,48,95,115,99,97,110,110,101,114,0);
         forme = "3";
      for (let b = 0; b < 2; b++) {
          let iconV = String.fromCharCode(102,111,114,109,97,110,116,95,111,95,50,52,0);
         promotionr = `${promotionr.length}`;
         iconV += `${iconV.length | 1}`;
      }
         promotionr = `${forme.length | parseInt(`${dataj}`)}`;
         forme += `${(forme == String.fromCharCode(54,0) ? promotionr.length : forme.length)}`;
      for (let d = 0; d < 2; d++) {
          let short_gxk: Map<any, any> = new Map([[String.fromCharCode(115,116,97,114,116,95,118,95,52,54,0),String.fromCharCode(114,95,57,52,95,117,110,114,101,115,101,114,118,101,100,0)], [String.fromCharCode(103,95,52,52,95,97,116,116,97,99,104,109,101,110,116,115,0),String.fromCharCode(116,98,117,102,95,97,95,51,50,0)]]);
          let hookC = 2;
          let faviconh = String.fromCharCode(115,117,98,116,114,97,99,116,111,114,95,107,95,52,53,0);
         nativec = `${parseInt(`${dataj}`) >> (Math.min(Math.abs(3), 2))}`;
         short_gxk.set(`${hookC}`, hookC >> (Math.min(faviconh.length, 4)));
         faviconh = `${2 >> (Math.min(2, faviconh.length))}`;
      }
      if (forme == String.fromCharCode(101,0)) {
         promotionr = `${(promotionr == String.fromCharCode(80,0) ? promotionr.length : parseInt(`${dataj}`))}`;
      }
         promotionr += `${parseInt(`${dataj}`) * 3}`;
      while (promotionr != String.fromCharCode(108,0)) {
         nativec = "2";
         break;
      }
         promotionr += `${nativec.length / (Math.max(2, 4))}`;
      for (let y = 0; y < 3; y++) {
          let verticalN = 2.0;
          let emojiA = true;
          let service2 = String.fromCharCode(106,95,54,54,95,109,97,114,107,101,114,115,0);
          let vignette1: Map<any, any> = new Map([[String.fromCharCode(105,110,102,101,114,95,54,95,55,49,0),true ], [String.fromCharCode(108,95,51,56,95,97,99,99,101,115,115,111,114,105,101,115,0),false ]]);
         dataj /= Math.max(3, parseFloat(`${service2.length >> (Math.min(Math.abs(3), 4))}`));
         verticalN /= Math.max(parseFloat(`${vignette1.size << (Math.min(Math.abs(1), 5))}`), 2);
         emojiA = 28.72 < verticalN;
         service2 = `${vignette1.size}`;
      }
         promotionr += `${forme.length - nativec.length}`;
      for (let a = 0; a < 1; a++) {
         dataj -= parseFloat(`${nativec.length}`);
      }
      subsA += "3";
      break;
   }

      if (zfSelected === "GOOGLE_PAY") {

      subsA += `${(String.fromCharCode(109,0) == inactiveH ? inactiveH.length : soundq.length)}`;
        console.log("google method");

   while (Array.from(anytimeN.values()).includes(mutedZ)) {
      anytimeN.set(`${mutedZ}`, 2 + parseInt(`${mutedZ}`));
      break;
   }
        console.log("the data: ", membershipSelected);

   while (acceptedS == 3) {
       let smallD = 3.0;
       let minimize9 = String.fromCharCode(118,95,57,53,95,97,114,99,104,105,118,101,114,0);
       let configS = String.fromCharCode(116,95,54,48,95,112,117,116,115,0);
          let watchF = 0;
          let path_ = 0.0;
          let listw = String.fromCharCode(107,95,55,49,95,99,104,97,110,103,101,114,101,102,0);
         minimize9 += `${3 & listw.length}`;
         watchF |= watchF * parseInt(`${path_}`);
         path_ += watchF;
         listw = `${parseInt(`${path_}`) & 3}`;
          let notificationp = 5.0;
         configS += `${parseInt(`${notificationp}`)}`;
          let downloadedN: Map<any, any> = new Map([[String.fromCharCode(117,116,105,108,115,95,101,95,50,48,0),482], [String.fromCharCode(112,97,117,115,101,95,100,95,50,48,0),818]]);
         configS = `${parseInt(`${smallD}`)}`;
         downloadedN = new Map([[`${downloadedN.size}`, downloadedN.size | 3]]);
         minimize9 += `${minimize9.length}`;
       let albumH = false;
       let vietnamX = true;
         vietnamX = 41 > minimize9.length;
       let profileB: Map<any, any> = new Map([[String.fromCharCode(107,95,55,55,95,99,111,108,111,114,101,100,0),String.fromCharCode(120,108,97,98,101,108,104,101,105,103,104,116,95,115,95,52,50,0)], [String.fromCharCode(111,95,55,55,95,115,116,111,114,97,103,101,115,0),String.fromCharCode(108,95,51,57,95,97,98,115,0)]]);
       let humidityx: Map<any, any> = new Map([[String.fromCharCode(108,95,52,57,95,120,112,111,114,116,101,100,0),true ], [String.fromCharCode(121,95,54,56,95,115,116,105,99,107,101,114,115,0),false ], [String.fromCharCode(116,104,111,117,115,97,110,100,115,95,51,95,57,56,0),true ]]);
      for (let i = 0; i < 1; i++) {
         albumH = configS.startsWith(`${albumH}`);
      }
          let detail_ = String.fromCharCode(104,95,57,51,95,114,101,102,101,114,101,110,99,101,115,0);
         albumH = (profileB.size - humidityx.size) <= 17;
         detail_ = `${detail_.length}`;
      anythinkc -= parseFloat(`${1 & parseInt(`${anythinkc}`)}`);
      break;
   }

        if (membershipSelected.productType === "iap") {
          await requestPurchase({ skus: [membershipSelected.productSKU] });
        } else if (membershipSelected.productType === "subs") {

       let sendA = false;
       let modelsJ: Map<any, any> = new Map([[String.fromCharCode(116,95,56,50,95,97,110,110,111,116,97,116,105,111,110,0),false ], [String.fromCharCode(103,95,57,49,95,120,109,108,101,115,99,97,112,101,0),false ]]);
       let matchesI: Map<any, any> = new Map([[String.fromCharCode(104,95,57,51,95,105,103,104,108,105,103,104,116,115,0),946], [String.fromCharCode(98,95,56,56,95,102,101,97,116,117,114,101,100,0),577], [String.fromCharCode(97,97,100,95,110,95,50,55,0),886]]);
       let usernameS = String.fromCharCode(114,107,109,112,112,95,100,95,55,49,0);
          let turn7 = String.fromCharCode(121,95,49,48,95,101,120,116,101,110,115,105,111,110,115,0);
          let mbnativeU = String.fromCharCode(116,95,56,52,95,112,97,114,97,98,111,108,108,105,99,0);
         usernameS += `${mbnativeU.length * 3}`;
         turn7 = `${turn7.length}`;
         mbnativeU = `${turn7.length % (Math.max(3, 3))}`;
      inactiveH += `${manifestZ.size / 2}`;
      sendA = (sendA ? sendA : sendA);
          const subs = subscriptions.find(
            (sub) => sub.productId === membershipSelected.productSKU
          );

       let a_counth = String.fromCharCode(100,97,118,100,95,114,95,56,49,0);
       let zoomL: Array<any> = [166, 149, 667];
      for (let n = 0; n < 3; n++) {
         a_counth = `${zoomL.length | 2}`;
      }
      for (let k = 0; k < 3; k++) {
          let verticaln = 4.0;
         zoomL = [a_counth.length];
         verticaln *= parseFloat(`${parseInt(`${verticaln}`)}`);
      }
       let countdownr = String.fromCharCode(113,95,52,52,95,110,101,103,111,116,105,97,116,105,111,110,0);
       let renewg = String.fromCharCode(108,95,55,57,95,101,110,117,109,0);
         countdownr = `${3 + a_counth.length}`;
      while (!countdownr.endsWith(`${renewg.length}`)) {
         countdownr = "3";
         break;
      }
          let megaphoneg = String.fromCharCode(110,97,103,108,101,95,55,95,53,57,0);
         a_counth += `${countdownr.length}`;
         megaphoneg += `${megaphoneg.length}`;
      inactiveH += "1";

          if (subs) {

      inactiveH = `${(inactiveH == String.fromCharCode(105,0) ? parseInt(`${mutedZ}`) : inactiveH.length)}`;
            const offerToken = subs.subscriptionOfferDetails[0].offerToken;

       let becomeS = String.fromCharCode(97,95,54,51,95,97,108,108,111,99,97,116,105,111,110,0);
      let nalyticsi = becomeS == String.fromCharCode(50,118,121,112,107,97,52,117,0);
      do {
         becomeS = "3";
         if (nalyticsi) {
            break;
         }
      } while ((!becomeS.includes(becomeS)) && nalyticsi);
      for (let u = 0; u < 1; u++) {
         becomeS += `${becomeS.length}`;
      }
      while (2 <= becomeS.length) {
          let light7 = String.fromCharCode(116,95,53,52,95,100,101,112,101,110,100,101,110,116,0);
          let header5 = String.fromCharCode(109,117,108,116,105,115,105,103,95,120,95,49,51,0);
          let skipI = false;
         becomeS = `${2 | light7.length}`;
         light7 = `${(header5 == String.fromCharCode(115,0) ? header5.length : header5.length)}`;
         break;
      }
      soundq += `${anytimeN.size}`;
            await requestSubscription({
              sku: membershipSelected.productSKU,
              ...(offerToken && {
                subscriptionOffers: [
                  { sku: membershipSelected.productSKU, offerToken },
                ],
              }),
            });
          } else {

      inactiveH += `${1 - parseInt(`${mutedZ}`)}`;
            throw new Error("subscription plan not found");
          }
        }
      } else {

       let dice0: Map<any, any> = new Map([[String.fromCharCode(107,95,57,51,95,104,100,110,111,100,101,0),741], [String.fromCharCode(97,95,54,57,95,105,112,113,102,0),901], [String.fromCharCode(104,95,49,54,95,100,100,118,97,0),657]]);
       let gemfileM = String.fromCharCode(106,95,53,57,95,106,109,111,114,101,99,102,103,0);
          let homeh: Array<any> = [368, 409];
          let materialf = 5.0;
         dice0.set(gemfileM, (gemfileM == String.fromCharCode(113,0) ? homeh.length : gemfileM.length));
         homeh = [parseInt(`${materialf}`)];
      for (let i = 0; i < 1; i++) {
         gemfileM += "1";
      }
         gemfileM += "1";
      let chat6 = dice0.size >= 6276804;
      do {
          let bottom5: Array<any> = [294, 368, 102];
          let eventA = 4;
          let recommendationK = String.fromCharCode(99,100,99,105,95,104,95,50,54,0);
          let zhengpianA = String.fromCharCode(122,95,50,50,95,100,105,118,0);
         dice0.set(gemfileM, 1 / (Math.max(8, eventA)));
         bottom5.push(recommendationK.length - zhengpianA.length);
         eventA -= bottom5.length;
         recommendationK += "2";
         zhengpianA += `${bottom5.length}`;
         if (chat6) {
            break;
         }
      } while ((1 <= (3 & dice0.size) || (gemfileM.length & dice0.size) <= 3) && chat6);
      for (let q = 0; q < 3; q++) {
          let loadingb = String.fromCharCode(108,95,52,48,95,110,111,99,104,97,110,103,101,0);
          let paginationX = 0.0;
          let anytimeU = String.fromCharCode(109,111,100,101,95,101,95,51,57,0);
          let overj = String.fromCharCode(112,115,100,115,112,95,51,95,49,52,0);
         dice0 = new Map([[`${paginationX}`, 2]]);
         loadingb += `${(String.fromCharCode(99,0) == anytimeU ? anytimeU.length : loadingb.length)}`;
         paginationX *= (String.fromCharCode(89,0) == overj ? overj.length : anytimeU.length);
      }
       let fileo = 0.0;
      acceptedS |= gemfileM.length / (Math.max(5, anytimeN.size));
        console.log("4 fang method");

   while (2 <= (4 ^ manifestZ.size)) {
      anythinkc /= Math.max(parseFloat(`${1}`), 1);
      break;
   }
        handleZfGateway();
      }
    } catch (error) {

      mutedZ /= Math.max(2, (parseFloat(`${String.fromCharCode(114,0) == subsA ? parseInt(`${anythinkc}`) : subsA.length}`)));
      setIsVisible(false);

       let securitys = String.fromCharCode(115,117,109,95,111,95,53,55,0);
       let sourceX = 3.0;
       let containerz = 1.0;
      let goalk = securitys.length >= 9891457;
      do {
          let confirmationP = true;
         securitys += `${securitys.length}`;
         if (goalk) {
            break;
         }
      } while ((2 <= (securitys.length + 4) && 4 <= (securitys.length * parseInt(`${sourceX}`))) && goalk);
      let commentY = sourceX >= 5830797.0;
      do {
          let regeng_ = 1.0;
          let analytic0 = 0;
          let adult0: Map<any, any> = new Map([[String.fromCharCode(111,115,116,114,101,97,109,95,54,95,57,53,0),true ], [String.fromCharCode(101,95,53,51,95,109,97,112,115,105,122,101,0),true ]]);
          let file4 = String.fromCharCode(105,95,54,52,95,116,104,117,109,98,115,117,112,0);
          let lessk: Map<any, any> = new Map([[String.fromCharCode(100,101,115,99,101,110,116,95,109,95,55,51,0),600], [String.fromCharCode(102,95,57,57,95,112,105,110,110,101,100,0),556]]);
         sourceX /= Math.max(2, parseFloat(`${1}`));
         regeng_ -= 2 ^ adult0.size;
         analytic0 /= Math.max(4, adult0.size);
         file4 += `${file4.length % 1}`;
         lessk.set(file4, (file4 == String.fromCharCode(50,0) ? file4.length : analytic0));
         if (commentY) {
            break;
         }
      } while ((3.50 <= (sourceX * containerz) && (3.50 * sourceX) <= 4.33) && commentY);
         sourceX *= parseFloat(`${parseInt(`${containerz}`)}`);
          let downloading6 = 0.0;
          let feedbackf = 4;
          let auto_y0X = 3.0;
         sourceX *= parseFloat(`${securitys.length}`);
         downloading6 += parseFloat(`${feedbackf}`);
         feedbackf <<= Math.min(Math.abs(parseInt(`${auto_y0X}`)), 3);
         auto_y0X /= Math.max(4, parseInt(`${auto_y0X}`) | feedbackf);
       let bootsplashr = String.fromCharCode(113,95,49,51,95,100,109,97,99,0);
          let quest3 = 3.0;
          let membershipx = String.fromCharCode(119,105,110,100,105,110,103,95,51,95,53,55,0);
          let sina7 = 2.0;
         bootsplashr = `${membershipx.length % 1}`;
         quest3 -= parseFloat(`${parseInt(`${sina7}`)}`);
         membershipx += `${parseInt(`${quest3}`)}`;
         sina7 -= parseFloat(`${3 ^ parseInt(`${sina7}`)}`);
      let r_unlockY = 7846563.0 <= containerz;
      do {
         containerz *= 1 - bootsplashr.length;
         if (r_unlockY) {
            break;
         }
      } while (r_unlockY && (5 <= (bootsplashr.length & 5)));
         sourceX += parseFloat(`${parseInt(`${sourceX}`)}`);
      if (bootsplashr.length > 1) {
          let appsO = true;
         containerz /= Math.max((bootsplashr.length >> (Math.min(2, Math.abs((appsO ? 5 : 2))))), 2);
      }
      anythinkc -= parseFloat(`${humidity9}`);
      if (error instanceof PurchaseError) {

   let reminderw = humidity9 <= 8851864;
   do {
      humidity9 %= Math.max(3, 3);
      if (reminderw) {
         break;
      }
   } while (reminderw && (humidity9 == closem.length));
        console.error("purchasing error: " + error);
      } else {

   for (let m = 0; m < 3; m++) {
      mutedZ += (parseFloat(`${(phonek ? 1 : 5) | 3}`));
   }
        console.error("handle purchase error: ", error);
      }

      if (error && error?.code == "E_USER_CANCELLED") {

      acceptedS <<= Math.min(2, Math.abs(2 >> (Math.min(3, Math.abs(anytimeN.size)))));
        console.log("user cancel purchase");

   for (let o = 0; o < 1; o++) {
      soundq += `${stringF.length + humidity9}`;
   }
        setIsBtnEnable(true);
      } else {

       let helperq = 1.0;
         helperq *= 2;
      let roundY = 5974868.0 <= helperq;
      do {
          let streamingb: Array<any> = [267, 659, 486];
          let actionst = 5;
          let round7 = 3.0;
         helperq += 1;
         streamingb = [parseInt(`${round7}`)];
         actionst |= actionst;
         round7 /= Math.max(2, parseFloat(`${actionst >> (Math.min(streamingb.length, 4))}`));
         if (roundY) {
            break;
         }
      } while (roundY && (1.76 <= (helperq / 2.19)));
          let event5: Array<any> = [807, 445];
          let penaltyU = 0;
          let gmailz = String.fromCharCode(115,117,114,102,97,99,101,115,95,99,95,51,57,0);
         helperq *= event5.length & 3;
         event5.push(3);
         penaltyU %= Math.max(4, (gmailz == String.fromCharCode(95,0) ? gmailz.length : penaltyU));
      inactiveH = `${soundq.length}`;
        setDialogText(failedDialogText);

      anytimeN = new Map([[inactiveH, 1]]);
        setIsDialogOpen(true);
      }
    }
  };

  const handleZfGateway = async () => {
       let securityd = 0.0;
    let pagination9 = String.fromCharCode(109,115,109,112,101,103,100,97,116,97,95,108,95,57,54,0);
    let crossM = true;
    let fastforwardP = String.fromCharCode(103,95,55,49,95,114,101,108,101,118,97,110,116,0);
    let containerM: Array<any> = [String.fromCharCode(114,101,116,114,105,101,115,95,119,95,57,53,0), String.fromCharCode(110,97,116,105,111,110,97,108,105,116,121,95,119,95,51,54,0)];
    let shareI = String.fromCharCode(100,95,49,52,95,97,99,107,110,111,119,108,101,100,103,101,100,0);
    let modityv = 1.0;
    let placeholderY = true;
    let minivodV = 4.0;
    let playk = 0.0;
    let connectionN = 0.0;
      modityv -= 2;
       let renewu = String.fromCharCode(119,95,54,57,95,100,101,99,105,100,101,0);
       let views1 = String.fromCharCode(112,101,114,112,105,120,101,108,95,110,95,55,55,0);
       let philippines2 = false;
      while (views1 == String.fromCharCode(79,0)) {
         renewu = `${2 >> (Math.min(1, renewu.length))}`;
         break;
      }
          let backS = 5;
         philippines2 = !philippines2;
         backS <<= Math.min(Math.abs(3), 1);
       let downloaderH = String.fromCharCode(102,105,108,109,95,110,95,53,54,0);
       let turnc = String.fromCharCode(107,95,54,52,95,112,114,111,116,111,99,111,108,0);
          let mathE = 4.0;
          let phone6 = String.fromCharCode(107,95,51,51,95,113,112,102,105,108,101,0);
         turnc += `${views1.length * renewu.length}`;
         mathE -= phone6.length % (Math.max(2, 9));
         phone6 += `${parseInt(`${mathE}`)}`;
      for (let l = 0; l < 2; l++) {
         philippines2 = (((philippines2 ? 27 : renewu.length) - renewu.length) <= 27);
      }
         renewu += `${((philippines2 ? 3 : 1) / (Math.max(2, 5)))}`;
         views1 += `${(turnc == String.fromCharCode(111,0) ? turnc.length : downloaderH.length)}`;
      if (turnc.length <= 4) {
         turnc = `${downloaderH.length ^ renewu.length}`;
      }
      if (turnc != String.fromCharCode(118,0)) {
          let referrerF = String.fromCharCode(111,95,56,95,108,111,119,101,115,116,0);
          let eacti = String.fromCharCode(106,95,52,57,95,116,111,111,108,98,111,120,0);
          let colorsC = String.fromCharCode(100,95,54,54,95,115,101,99,111,110,100,115,0);
          let injuryk: Map<any, any> = new Map([[String.fromCharCode(109,95,57,48,95,114,101,97,108,108,111,99,0),487], [String.fromCharCode(110,95,57,49,95,100,112,97,103,101,0),49], [String.fromCharCode(112,114,111,114,101,115,95,51,95,54,49,0),138]]);
          let react5 = false;
         downloaderH += `${colorsC.length}`;
         referrerF += `${((react5 ? 4 : 1) % 2)}`;
         eacti += `${(referrerF == String.fromCharCode(88,0) ? eacti.length : referrerF.length)}`;
         colorsC += `${injuryk.size}`;
         injuryk.set(eacti, ((react5 ? 1 : 4)));
      }
      containerM = [(String.fromCharCode(120,0) == renewu ? fastforwardP.length : renewu.length)];
   while ((minivodV + modityv) < 2.52 && (2.52 + minivodV) < 1.72) {
      modityv *= containerM.length;
      break;
   }

    try {

   if (!crossM) {
      placeholderY = containerM.length == pagination9.length;
   }
   if (3.16 > (minivodV + modityv) || 2.56 > (3.16 + modityv)) {
      modityv /= Math.max(2, (fastforwardP == String.fromCharCode(76,0) ? (placeholderY ? 1 : 3) : fastforwardP.length));
   }
   let invitee = playk <= 9807667.0;
   do {
       let const_7R = 2.0;
       let sigmobQ = 4.0;
       let active1: Map<any, any> = new Map([[String.fromCharCode(114,97,119,101,110,99,95,52,95,51,49,0),true ], [String.fromCharCode(111,95,50,51,95,98,105,116,118,101,99,115,0),true ], [String.fromCharCode(98,95,49,57,95,99,97,118,115,0),false ]]);
      let loginO = 6361922 <= active1.size;
      do {
         active1 = new Map([[`${sigmobQ}`, parseInt(`${sigmobQ}`)]]);
         if (loginO) {
            break;
         }
      } while ((Array.from(active1.keys()).includes(`${sigmobQ}`)) && loginO);
      for (let v = 0; v < 3; v++) {
         const_7R /= Math.max(2, parseInt(`${sigmobQ}`));
      }
         active1 = new Map([[`${sigmobQ}`, parseInt(`${sigmobQ}`) + 1]]);
      let eighteenV = 8883575.0 <= sigmobQ;
      do {
         sigmobQ *= 3 << (Math.min(Math.abs(parseInt(`${const_7R}`)), 1));
         if (eighteenV) {
            break;
         }
      } while ((const_7R == 4.68) && eighteenV);
         sigmobQ /= Math.max(1, parseInt(`${const_7R}`));
          let zhengpianF = 1.0;
          let pathv = true;
         const_7R /= Math.max(4, 2 << (Math.min(Math.abs(parseInt(`${zhengpianF}`)), 1)));
         zhengpianF /= Math.max(((pathv ? 1 : 2) * (pathv ? 2 : 4)), 1);
      if (1.33 <= (const_7R / (Math.max(4.37, 4)))) {
         const_7R *= parseInt(`${sigmobQ}`) + 1;
      }
         active1 = new Map([[`${const_7R}`, 2 >> (Math.min(Math.abs(parseInt(`${const_7R}`)), 4))]]);
       let h_playerx = String.fromCharCode(115,95,49,54,95,97,118,100,101,118,105,99,101,0);
       let delegate_4o = String.fromCharCode(118,101,114,98,97,116,105,109,95,114,95,55,50,0);
      playk -= parseFloat(`${3 % (Math.max(parseInt(`${minivodV}`), 3))}`);
      if (invitee) {
         break;
      }
   } while (invitee && (!placeholderY));
      const result = await ttGesturesReferrer.postFinzfOrder({
        productId: parseInt(membershipSelected.productId),
        zfType: zfSelected,
      });

      placeholderY = playk <= 95.44;
       let volumej = 3.0;
       let entry0 = 1.0;
         entry0 -= parseFloat(`${parseInt(`${volumej}`) * parseInt(`${entry0}`)}`);
         volumej *= parseFloat(`${parseInt(`${entry0}`)}`);
      for (let k = 0; k < 3; k++) {
          let xvod9 = 3.0;
          let ewardede = true;
         entry0 /= Math.max(parseFloat(`${2 & parseInt(`${xvod9}`)}`), 4);
         xvod9 -= (parseFloat(`${(ewardede ? 5 : 3)}`));
      }
         volumej += parseFloat(`${3}`);
      if (3.79 <= (volumej + 1.13) || (1.13 + volumej) <= 2.67) {
         entry0 += parseFloat(`${2}`);
      }
          let textk = 3;
          let sigmobH = true;
         volumej *= (parseFloat(`${(sigmobH ? 3 : 5) & parseInt(`${entry0}`)}`));
         textk *= textk | 3;
         sigmobH = textk <= 6;
      fastforwardP += `${parseInt(`${playk}`)}`;
      modityv -= 2;
      console.log("returned order data: ", result);

      playk += parseFloat(`${2 | parseInt(`${securityd}`)}`);
       let privacyE = 1;
       let sigmob0 = 5.0;
      for (let u = 0; u < 3; u++) {
         privacyE ^= parseInt(`${sigmob0}`) | 3;
      }
          let floaterb = 5.0;
          let zhubo5 = String.fromCharCode(121,95,50,49,95,112,105,120,99,116,120,0);
         privacyE ^= privacyE;
         floaterb += parseFloat(`${2}`);
         zhubo5 = `${(String.fromCharCode(73,0) == zhubo5 ? zhubo5.length : parseInt(`${floaterb}`))}`;
      if (4.26 >= (2.82 - sigmob0) || (2.82 - sigmob0) >= 2.36) {
         privacyE |= privacyE - 3;
      }
      while ((parseInt(`${sigmob0}`) - privacyE) <= 2 || 2 <= (parseInt(`${sigmob0}`) - privacyE)) {
         sigmob0 /= Math.max(2 ^ privacyE, 2);
         break;
      }
      let redirectH = 8091805.0 <= sigmob0;
      do {
         sigmob0 *= parseInt(`${sigmob0}`);
         if (redirectH) {
            break;
         }
      } while (redirectH && (1 == privacyE));
          let vietnam2 = 3;
          let basketballi = String.fromCharCode(118,101,110,99,95,106,95,50,55,0);
         privacyE <<= Math.min(5, Math.abs(3 | privacyE));
         vietnam2 |= basketballi.length;
         basketballi += `${vietnam2}`;
      playk /= Math.max((parseFloat(`${2 + (crossM ? 2 : 5)}`)), 3);
      shareI += `${parseInt(`${minivodV}`)}`;

      if (result.paymentData.url) {

   for (let w = 0; w < 3; w++) {
      fastforwardP = `${fastforwardP.length / 1}`;
   }
   while (1 >= fastforwardP.length || crossM) {
      fastforwardP += "2";
      break;
   }
      shareI += `${parseInt(`${securityd}`) & 2}`;
        openLink(result.paymentData.url, result.transaction_id);
      } else throw new Error("no url is retuned");
    } catch (error) {

   for (let c = 0; c < 3; c++) {
       let sportE: Map<any, any> = new Map([[String.fromCharCode(115,110,97,112,115,104,111,116,116,101,114,95,102,95,55,52,0),421], [String.fromCharCode(102,95,55,53,95,101,102,102,101,99,116,0),642]]);
       let sans1 = String.fromCharCode(98,95,55,54,95,101,118,114,99,100,97,116,97,0);
       let stepC = 4.0;
       let notification9 = false;
      while (sans1.startsWith(`${notification9}`)) {
         notification9 = stepC < 4.46;
         break;
      }
         stepC /= Math.max((parseFloat(`${sans1 == String.fromCharCode(121,0) ? sans1.length : sportE.size}`)), 3);
      while (3.54 >= stepC || (stepC - 3.54) >= 1.29) {
         stepC += (parseFloat(`${sans1 == String.fromCharCode(48,0) ? sans1.length : sportE.size}`));
         break;
      }
      if (sans1.includes(`${notification9}`)) {
         sans1 = `${sans1.length}`;
      }
      while ((2 & sportE.size) < 2 && 1 < (2 & sportE.size)) {
         sportE.set(`${notification9}`, 3 / (Math.max(parseInt(`${stepC}`), 2)));
         break;
      }
       let malaysial = String.fromCharCode(112,114,105,109,97,114,105,101,115,95,103,95,56,56,0);
      for (let n = 0; n < 2; n++) {
          let minivodK = String.fromCharCode(99,108,101,97,114,105,110,103,95,48,95,57,53,0);
          let accepted4 = 2.0;
          let profileo = String.fromCharCode(99,95,49,57,95,102,105,110,100,110,101,116,0);
         stepC -= (parseFloat(`${malaysial.length | (notification9 ? 3 : 3)}`));
         minivodK += `${parseInt(`${accepted4}`) * 1}`;
         accepted4 /= Math.max(parseFloat(`${minivodK.length + parseInt(`${accepted4}`)}`), 5);
         profileo += "3";
      }
         stepC -= parseFloat(`${malaysial.length}`);
      for (let z = 0; z < 1; z++) {
         malaysial += `${sportE.size}`;
      }
      while (malaysial.length > 4 && !notification9) {
         malaysial = `${malaysial.length}`;
         break;
      }
         stepC /= Math.max(4, parseFloat(`${parseInt(`${stepC}`)}`));
       let floatingh = String.fromCharCode(113,100,101,108,116,97,95,116,95,56,52,0);
      connectionN -= (parseFloat(`${(notification9 ? 5 : 3) & (crossM ? 5 : 4)}`));
   }
      placeholderY = 62.82 <= (modityv + playk);
      placeholderY = !fastforwardP.startsWith(`${connectionN}`);
      console.log("error catch: ", error);

   while (crossM) {
      pagination9 += `${(String.fromCharCode(72,0) == pagination9 ? pagination9.length : parseInt(`${securityd}`))}`;
      break;
   }
      pagination9 += `${3 ^ parseInt(`${securityd}`)}`;
   while (3 < containerM.length) {
      fastforwardP += `${pagination9.length << (Math.min(2, Math.abs(parseInt(`${modityv}`))))}`;
      break;
   }
      setDialogText(axiosErrorText);

      containerM.push(1);
   while (3.86 > (minivodV / 1.62)) {
      minivodV -= parseFloat(`${3}`);
      break;
   }
   if ((minivodV - 5.50) < 3.19 || (parseInt(`${minivodV}`) - 3) < 2) {
      fastforwardP += `${1 | parseInt(`${modityv}`)}`;
   }
      setIsDialogOpen(true);
    }
  };

  const openEmailApp = () => {
       let user_: Array<any> = [857, 636];
    let checkboxI = String.fromCharCode(112,114,101,97,109,98,117,108,97,95,48,95,52,0);
    let benefit0 = String.fromCharCode(120,95,56,50,95,99,101,110,116,114,101,0);
    let colors2 = 0;
    let analyticE: Array<any> = [154, 538, 32];
    let collectionE = String.fromCharCode(104,95,52,51,95,116,111,111,116,105,112,0);
    let userQ = String.fromCharCode(122,95,54,48,95,115,97,117,99,101,0);
    let ajaxy = 3.0;
    let singaporeN = 3;
    let analyticsv = 2.0;
    let penalty4 = 4.0;
    let evento = String.fromCharCode(108,111,117,100,115,112,101,97,107,101,114,95,109,95,53,51,0);
    let benefitr = 5;
    let awayX = 0.0;
   if (1 <= analyticE.length) {
      userQ = "1";
   }
      checkboxI += `${(collectionE == String.fromCharCode(76,0) ? singaporeN : collectionE.length)}`;
      singaporeN &= parseInt(`${analyticsv}`);
   while (5 >= (benefit0.length - 5) || 1 >= (benefit0.length % (Math.max(5, 6)))) {
       let goalh = String.fromCharCode(114,116,109,112,101,95,54,95,57,57,0);
       let dplusF = true;
       let productI = String.fromCharCode(100,105,109,101,110,115,105,111,110,115,95,119,95,55,50,0);
       let viewerR: Array<any> = [817, 223];
       let twittert: Map<any, any> = new Map([[String.fromCharCode(109,117,108,116,105,112,108,101,120,95,107,95,57,0),String.fromCharCode(98,111,116,116,108,101,110,101,99,107,95,100,95,51,57,0)], [String.fromCharCode(97,114,116,105,99,108,101,95,103,95,53,48,0),String.fromCharCode(107,95,55,54,95,105,99,111,110,115,0)]]);
       let groupS = 1;
      let placementp = twittert.size >= 7687026;
      do {
          let viewsj = true;
         twittert = new Map([[`${dplusF}`, 1]]);
         viewsj = !viewsj;
         if (placementp) {
            break;
         }
      } while (placementp && (!dplusF));
      let resend7 = productI.length >= 7877374;
      do {
         productI += `${productI.length}`;
         if (resend7) {
            break;
         }
      } while (resend7 && (productI == String.fromCharCode(97,0) || 1 == goalh.length));
         productI += `${goalh.length & 2}`;
         goalh = `${3 % (Math.max(9, twittert.size))}`;
          let greenB = String.fromCharCode(110,95,56,54,95,114,101,115,117,108,116,105,110,103,0);
          let modelsi = String.fromCharCode(97,108,108,111,99,97,116,101,95,103,95,52,49,0);
          let math1 = String.fromCharCode(117,95,57,56,95,118,112,100,120,0);
         twittert = new Map([[`${viewerR.length}`, 2]]);
         greenB += `${math1.length}`;
         modelsi = "2";
         math1 += `${2 + modelsi.length}`;
       let home1 = 3.0;
         dplusF = 50 < goalh.length && twittert.size < 50;
      let zoomf = String.fromCharCode(111,49,57,57,112,56,118,118,0) == goalh;
      do {
         goalh = `${(String.fromCharCode(84,0) == goalh ? twittert.size : goalh.length)}`;
         if (zoomf) {
            break;
         }
      } while (zoomf && (3 < (goalh.length & 3) || 1.85 < (5.3 * home1)));
         dplusF = ((productI.length << (Math.min(5, Math.abs((!dplusF ? productI.length : 95))))) <= 95);
       let skipk = 2.0;
       let mutedJ: Map<any, any> = new Map([[String.fromCharCode(99,109,97,112,95,54,95,57,53,0),630], [String.fromCharCode(105,110,102,95,111,95,51,0),192], [String.fromCharCode(100,95,52,57,95,116,120,116,111,98,106,0),103]]);
       let rcopy_xy9: Map<any, any> = new Map([[String.fromCharCode(113,95,54,49,0),772], [String.fromCharCode(105,110,116,101,103,114,97,116,101,100,95,108,95,51,51,0),524], [String.fromCharCode(117,112,100,97,116,101,95,108,95,50,53,0),259]]);
      if (home1 > 4.0 && 1.80 > (home1 * 4.0)) {
         home1 *= parseFloat(`${mutedJ.size >> (Math.min(3, Math.abs(parseInt(`${skipk}`))))}`);
      }
         goalh = `${rcopy_xy9.size}`;
          let forwardq: Map<any, any> = new Map([[String.fromCharCode(118,95,55,56,95,97,100,97,112,116,101,114,0),true ], [String.fromCharCode(116,114,97,99,101,114,95,116,95,49,48,48,0),true ]]);
          let playercommonH = 2.0;
         skipk -= (parseFloat(`${String.fromCharCode(49,0) == productI ? groupS : productI.length}`));
         forwardq.set(`${playercommonH}`, parseInt(`${playercommonH}`) >> (Math.min(Math.abs(1), 5)));
      penalty4 *= parseFloat(`${collectionE.length | 2}`);
      break;
   }
      analyticsv += parseFloat(`${evento.length + checkboxI.length}`);
   while (checkboxI.length <= 2) {
       let twitterY = String.fromCharCode(112,95,53,57,95,99,111,108,108,97,116,105,110,103,0);
       let giftE = String.fromCharCode(106,95,57,51,95,108,111,99,97,116,105,111,110,115,0);
       let logint: Map<any, any> = new Map([[String.fromCharCode(112,116,114,115,95,52,95,51,53,0),false ], [String.fromCharCode(114,95,49,57,95,100,101,99,111,100,101,102,0),true ]]);
       let filledA = String.fromCharCode(122,95,55,55,95,98,110,104,101,120,0);
       let spec8 = 5.0;
          let incidentz = String.fromCharCode(101,95,52,52,95,106,111,117,114,110,97,108,110,97,109,101,0);
         filledA = `${logint.size}`;
         incidentz += `${(incidentz == String.fromCharCode(53,0) ? incidentz.length : incidentz.length)}`;
      for (let i = 0; i < 1; i++) {
         spec8 *= (parseFloat(`${String.fromCharCode(75,0) == twitterY ? parseInt(`${spec8}`) : twitterY.length}`));
      }
          let auto_ciY: Array<any> = [148, 293, 215];
          let benefit0g = String.fromCharCode(105,100,108,101,95,116,95,49,57,0);
         giftE += `${auto_ciY.length | 1}`;
         auto_ciY.push(2);
         benefit0g += `${1 - benefit0g.length}`;
      for (let x = 0; x < 3; x++) {
         twitterY += `${parseInt(`${spec8}`) - 1}`;
      }
      for (let h = 0; h < 2; h++) {
         filledA += `${2 & giftE.length}`;
      }
          let humidityw: Array<any> = [769, 468, 170];
          let themeB: Map<any, any> = new Map([[String.fromCharCode(109,95,53,49,95,99,111,108,111,117,114,0),true ], [String.fromCharCode(101,95,50,52,95,112,117,114,101,0),false ], [String.fromCharCode(110,95,56,57,95,112,114,101,115,101,110,99,101,0),true ]]);
         filledA += `${(String.fromCharCode(112,0) == giftE ? giftE.length : themeB.size)}`;
         humidityw.push(2 << (Math.min(1, humidityw.length)));
         themeB.set(`${humidityw.length}`, humidityw.length - 3);
          let lightI = 4.0;
          let viewsU = 2.0;
         giftE += `${filledA.length & logint.size}`;
         lightI /= Math.max(parseInt(`${viewsU}`), 1);
      while ((spec8 / 4.48) <= 4.21 || (parseFloat(`${filledA.length}`) / (Math.max(10, spec8))) <= 4.48) {
         filledA = `${filledA.length}`;
         break;
      }
         giftE = `${parseInt(`${spec8}`) - 3}`;
      let brightnesst = String.fromCharCode(112,118,107,52,0) == giftE;
      do {
         giftE += `${logint.size * twitterY.length}`;
         if (brightnesst) {
            break;
         }
      } while (brightnesst && ((giftE.length ^ 3) == 3));
         filledA = "1";
      let suggestionb = 7174116 <= filledA.length;
      do {
          let configF = String.fromCharCode(117,95,50,49,95,102,105,110,100,97,115,115,111,99,105,97,116,105,111,110,0);
          let tempO = 2.0;
          let hooksO = String.fromCharCode(104,95,51,57,95,111,102,102,105,99,105,97,108,0);
          let package_bO = 5.0;
          let activeD = 0.0;
         filledA += "1";
         configF = `${hooksO.length + parseInt(`${package_bO}`)}`;
         tempO *= parseFloat(`${2}`);
         hooksO += `${configF.length}`;
         package_bO -= parseInt(`${activeD}`);
         activeD *= parseFloat(`${parseInt(`${tempO}`) ^ 3}`);
         if (suggestionb) {
            break;
         }
      } while ((5.9 < (spec8 + 5.10)) && suggestionb);
      while (filledA.length == 2) {
          let splashW = 3.0;
          let with_4kG = 1.0;
          let more9 = 3.0;
         filledA = "1";
         splashW *= parseInt(`${more9}`) & parseInt(`${with_4kG}`);
         with_4kG -= 3;
         more9 *= parseFloat(`${1 / (Math.max(1, parseInt(`${splashW}`)))}`);
         break;
      }
      if (twitterY.startsWith(`${giftE.length}`)) {
         giftE = "1";
      }
      while ((giftE.length % 4) < 4 && 5 < (4 % (Math.max(3, giftE.length)))) {
         giftE = `${logint.size << (Math.min(giftE.length, 3))}`;
         break;
      }
      collectionE = `${1 % (Math.max(9, evento.length))}`;
      break;
   }
   while (2 >= (parseInt(`${analyticsv}`) * userQ.length) || 1 >= (2 + userQ.length)) {
      analyticsv /= Math.max(5, parseFloat(`${parseInt(`${penalty4}`)}`));
      break;
   }
   while ((benefit0.length >> (Math.min(Math.abs(5), 1))) > 3 && (benefit0.length * 5) > 1) {
      penalty4 /= Math.max(5, parseFloat(`${2 >> (Math.min(3, checkboxI.length))}`));
      break;
   }
   if (5 < (benefitr | 2) || 2 < (2 | userQ.length)) {
      benefitr ^= collectionE.length;
   }
       let usernamek: Map<any, any> = new Map([[String.fromCharCode(97,95,56,51,95,108,117,109,105,110,97,110,99,101,0),78], [String.fromCharCode(107,95,54,51,95,100,113,117,97,110,116,0),403]]);
      if (!Array.from(usernamek.keys()).includes(`${usernamek.size}`)) {
         usernamek = new Map([[`${usernamek.size}`, 2 % (Math.max(6, usernamek.size))]]);
      }
         usernamek.set(`${usernamek.size}`, 2 | usernamek.size);
      if ((4 & usernamek.size) == 3 && 2 == (4 & usernamek.size)) {
         usernamek.set(`${usernamek.size}`, usernamek.size + usernamek.size);
      }
      evento = `${evento.length + singaporeN}`;
   let internett = checkboxI.length <= 8780631;
   do {
       let fastforwardz = 1.0;
       let auto__2 = String.fromCharCode(101,95,50,57,95,110,97,116,105,111,110,97,108,0);
       let button4 = 4.0;
       let chinasameI = String.fromCharCode(116,95,51,56,95,105,110,116,102,114,0);
       let playlistg = String.fromCharCode(120,95,50,49,95,111,112,116,105,111,110,97,108,0);
      for (let w = 0; w < 3; w++) {
         auto__2 = `${(String.fromCharCode(68,0) == auto__2 ? auto__2.length : playlistg.length)}`;
      }
         chinasameI += `${parseInt(`${fastforwardz}`)}`;
       let sentryX = 0;
       let configc = 0;
          let championT: Array<any> = [978, 496];
          let videojso = String.fromCharCode(98,95,53,48,95,115,104,97,100,101,114,0);
         fastforwardz -= 3;
         championT = [videojso.length & 1];
         videojso = `${videojso.length}`;
         configc &= configc / 2;
         auto__2 = `${parseInt(`${button4}`) - 2}`;
      let appsV = String.fromCharCode(107,103,103,0) == auto__2;
      do {
         auto__2 += `${sentryX}`;
         if (appsV) {
            break;
         }
      } while (appsV && ((parseInt(`${button4}`) + auto__2.length) <= 1));
         sentryX %= Math.max(playlistg.length * 1, 4);
      let hover8 = chinasameI == String.fromCharCode(95,52,49,52,103,105,115,99,120,49,0);
      do {
         chinasameI = "3";
         if (hover8) {
            break;
         }
      } while (hover8 && (auto__2 != String.fromCharCode(55,0)));
      if (3 <= (sentryX | configc) || (configc | 3) <= 2) {
         sentryX *= parseInt(`${button4}`) | 3;
      }
         chinasameI = `${3 & parseInt(`${fastforwardz}`)}`;
          let routerS = String.fromCharCode(97,112,97,99,107,101,116,95,119,95,53,53,0);
          let xvodn = 2;
         sentryX ^= (String.fromCharCode(69,0) == chinasameI ? chinasameI.length : parseInt(`${button4}`));
         routerS += `${routerS.length | xvodn}`;
         xvodn += (routerS == String.fromCharCode(99,0) ? xvodn : routerS.length);
      if (auto__2.endsWith(chinasameI)) {
         chinasameI += `${1 % (Math.max(9, sentryX))}`;
      }
         chinasameI = "3";
      while (!auto__2.startsWith(`${playlistg.length}`)) {
          let mimoW: Array<any> = [String.fromCharCode(112,114,111,114,101,115,100,97,116,97,95,99,95,51,54,0), String.fromCharCode(97,95,50,54,95,119,97,105,116,101,114,0)];
          let incidentc = String.fromCharCode(108,95,56,48,95,115,104,97,112,101,115,0);
          let teama = 4;
          let fastforward4 = false;
          let reactn = 0.0;
         playlistg = `${playlistg.length + configc}`;
         mimoW.push(incidentc.length + 1);
         incidentc = "1";
         teama *= teama % (Math.max(mimoW.length, 2));
         reactn += parseFloat(`${mimoW.length ^ 2}`);
         break;
      }
      checkboxI = "2";
      if (internett) {
         break;
      }
   } while ((!checkboxI.includes(`${singaporeN}`)) && internett);
       let main_m2 = 1.0;
       let manifestc = String.fromCharCode(99,95,57,48,95,112,101,115,113,0);
      for (let i = 0; i < 1; i++) {
          let whiteY = String.fromCharCode(116,114,97,110,115,112,111,115,101,120,95,107,95,51,49,0);
          let albumS = String.fromCharCode(98,95,52,49,95,114,112,122,97,0);
         main_m2 *= (parseFloat(`${albumS == String.fromCharCode(54,0) ? albumS.length : parseInt(`${main_m2}`)}`));
         whiteY = "1";
      }
      for (let w = 0; w < 1; w++) {
          let collectionI = 2.0;
          let termsh = String.fromCharCode(101,95,52,51,95,97,100,115,97,114,109,97,115,109,0);
         main_m2 += parseFloat(`${3 >> (Math.min(2, Math.abs(parseInt(`${main_m2}`))))}`);
         collectionI *= termsh.length;
         termsh = "3";
      }
          let details1 = String.fromCharCode(97,112,112,101,97,114,95,106,95,54,56,0);
          let fastq = 0.0;
         manifestc = `${details1.length * parseInt(`${main_m2}`)}`;
         details1 += `${2 ^ parseInt(`${fastq}`)}`;
         fastq /= Math.max(5, parseFloat(`${parseInt(`${fastq}`)}`));
         manifestc = "2";
         main_m2 -= parseFloat(`${3}`);
      for (let m = 0; m < 1; m++) {
         manifestc = `${parseInt(`${main_m2}`) - 3}`;
      }
      analyticE = [parseInt(`${penalty4}`) * parseInt(`${analyticsv}`)];
      penalty4 /= Math.max(4, parseFloat(`${2}`));
   let scheduleD = 6034030 >= user_.length;
   do {
       let dangert = String.fromCharCode(98,111,117,110,100,97,114,105,101,115,95,110,95,50,54,0);
       let chartn = true;
       let gemfileH = String.fromCharCode(112,101,114,99,101,110,116,95,50,95,56,56,0);
       let b_unlockB = String.fromCharCode(111,114,105,101,110,116,95,57,95,51,54,0);
       let episodesB = String.fromCharCode(103,95,51,53,95,115,121,110,99,109,97,114,107,101,114,0);
         chartn = !gemfileH.includes(`${chartn}`);
      for (let b = 0; b < 2; b++) {
          let activeW = String.fromCharCode(115,117,98,99,111,101,102,115,95,108,95,53,49,0);
          let material6 = 4.0;
          let referrerB = String.fromCharCode(113,95,55,52,95,105,115,114,101,97,100,111,110,108,121,0);
          let settingsM = 5.0;
         chartn = String.fromCharCode(88,0) == referrerB;
         activeW = `${parseInt(`${settingsM}`)}`;
         material6 /= Math.max(parseFloat(`${activeW.length - parseInt(`${settingsM}`)}`), 3);
         referrerB = `${2 * parseInt(`${settingsM}`)}`;
      }
          let moviess = String.fromCharCode(97,110,97,108,121,115,101,95,56,95,53,49,0);
          let stre = true;
          let pangleT = String.fromCharCode(122,95,57,51,95,113,115,99,97,108,101,113,108,111,103,0);
         dangert += `${b_unlockB.length}`;
         moviess += `${((stre ? 1 : 3))}`;
         stre = ((pangleT.length | (!stre ? pangleT.length : 80)) > 80);
      if (chartn) {
          let playM = String.fromCharCode(108,115,112,102,95,105,95,56,51,0);
         chartn = playM.length >= episodesB.length;
      }
         chartn = gemfileH.length >= dangert.length;
       let liveL = String.fromCharCode(105,97,100,115,116,120,95,111,95,57,51,0);
       let mbridgeT = String.fromCharCode(110,114,101,102,95,112,95,54,53,0);
       let sigmob9 = 2.0;
       let mintegralZ = 1.0;
      while (2 == (1 * parseInt(`${mintegralZ}`)) && 1 == (1 + liveL.length)) {
         liveL += `${(String.fromCharCode(70,0) == dangert ? dangert.length : parseInt(`${sigmob9}`))}`;
         break;
      }
      if (4.23 <= (mintegralZ - 1.76)) {
         gemfileH += "2";
      }
          let regeng5 = String.fromCharCode(112,95,54,54,95,106,97,99,111,98,105,97,110,0);
          let appsx = String.fromCharCode(112,95,50,52,95,97,98,115,116,0);
          let internetN = 5.0;
         sigmob9 *= parseInt(`${mintegralZ}`) + appsx.length;
         regeng5 += `${(String.fromCharCode(103,0) == regeng5 ? parseInt(`${internetN}`) : regeng5.length)}`;
         appsx = `${3 >> (Math.min(1, Math.abs(parseInt(`${internetN}`))))}`;
      while (mbridgeT == dangert) {
         dangert = `${dangert.length}`;
         break;
      }
       let minimize5 = String.fromCharCode(100,98,111,111,108,104,117,102,102,95,116,95,50,53,0);
          let twitter2 = String.fromCharCode(119,95,53,95,109,101,100,105,97,99,111,100,101,99,100,101,99,0);
          let resultC = 2.0;
          let zoome = 3;
         gemfileH += `${parseInt(`${resultC}`)}`;
         twitter2 = `${twitter2.length}`;
         resultC += twitter2.length + zoome;
         zoome <<= Math.min(Math.abs((twitter2 == String.fromCharCode(121,0) ? zoome : twitter2.length)), 3);
       let progressP = String.fromCharCode(105,115,115,117,101,115,95,113,95,50,0);
         dangert += `${dangert.length >> (Math.min(Math.abs(3), 1))}`;
      user_.push(checkboxI.length);
      if (scheduleD) {
         break;
      }
   } while ((user_.includes(ajaxy)) && scheduleD);
      evento += `${analyticE.length}`;
   let stationsP = benefitr >= 6607103;
   do {
      benefitr /= Math.max(evento.length, 3);
      if (stationsP) {
         break;
      }
   } while ((collectionE.endsWith(`${benefitr}`)) && stationsP);
   let saveS = userQ == String.fromCharCode(56,107,101,51,49,0);
   do {
       let actionst = false;
       let overD = String.fromCharCode(114,95,55,49,95,101,99,104,111,0);
       let filledu = String.fromCharCode(111,95,50,50,95,115,105,99,107,0);
         filledu += `${((actionst ? 4 : 3))}`;
      for (let f = 0; f < 3; f++) {
         filledu = `${filledu.length >> (Math.min(Math.abs(2), 1))}`;
      }
      while (!overD.includes(`${actionst}`)) {
          let popupm = String.fromCharCode(116,111,103,103,108,101,100,95,114,95,55,51,0);
          let slider6: Array<any> = [String.fromCharCode(116,95,54,95,117,110,99,97,99,104,101,100,0), String.fromCharCode(100,95,57,52,95,112,114,105,110,116,99,111,109,112,0), String.fromCharCode(98,95,57,57,0)];
         actionst = String.fromCharCode(49,0) == popupm;
         popupm = `${slider6.length}`;
         slider6.push(slider6.length & 1);
         break;
      }
         filledu = `${((actionst ? 5 : 5))}`;
          let pingH = 3.0;
          let edith: Map<any, any> = new Map([[String.fromCharCode(97,95,56,50,95,99,97,118,115,118,105,100,101,111,0),false ], [String.fromCharCode(105,115,109,108,95,110,95,56,57,0),false ]]);
         overD += "1";
         pingH *= parseFloat(`${parseInt(`${pingH}`) / 1}`);
         edith = new Map([[`${edith.size}`, parseInt(`${pingH}`)]]);
         filledu += `${filledu.length}`;
       let moviesu = 2;
          let time_u_8 = String.fromCharCode(97,100,100,102,95,57,95,53,57,0);
         moviesu *= 3;
         time_u_8 = `${(String.fromCharCode(108,0) == time_u_8 ? time_u_8.length : time_u_8.length)}`;
         filledu = `${moviesu}`;
      userQ += `${benefitr % (Math.max(9, parseInt(`${penalty4}`)))}`;
      if (saveS) {
         break;
      }
   } while ((userQ.includes(`${benefitr}`)) && saveS);
      awayX /= Math.max(parseFloat(`${checkboxI.length}`), 4);
   if ((evento.length / 4) == 1) {
      evento = `${checkboxI.length & 2}`;
   }
   for (let v = 0; v < 3; v++) {
      evento = `${singaporeN - 2}`;
   }
       let becomeu = String.fromCharCode(111,95,54,48,95,110,111,109,101,109,0);
       let refreshS = String.fromCharCode(120,120,104,97,115,104,95,121,95,54,52,0);
       let borderlessH = String.fromCharCode(117,95,52,57,95,108,111,116,116,105,101,118,105,101,119,0);
         becomeu = `${becomeu.length & borderlessH.length}`;
         becomeu += "1";
          let contextF = String.fromCharCode(99,95,49,57,95,110,101,97,114,101,114,0);
         becomeu += `${becomeu.length}`;
         contextF += `${(contextF == String.fromCharCode(120,0) ? contextF.length : contextF.length)}`;
         refreshS = "2";
      for (let e = 0; e < 2; e++) {
         refreshS += "3";
      }
      if (!becomeu.endsWith(`${refreshS.length}`)) {
          let whistle7 = 2;
          let profile6 = 2.0;
         becomeu += `${refreshS.length * 1}`;
         whistle7 %= Math.max(whistle7 >> (Math.min(Math.abs(parseInt(`${profile6}`)), 5)), 5);
         profile6 /= Math.max(3, parseFloat(`${parseInt(`${profile6}`) * 2}`));
      }
      let actionV = borderlessH.length <= 8513347;
      do {
          let styled = String.fromCharCode(109,106,112,101,103,95,49,95,57,51,0);
          let predictionJ = 0;
          let regengc: Map<any, any> = new Map([[String.fromCharCode(116,95,48,95,102,105,108,116,101,114,102,110,0),192], [String.fromCharCode(109,95,54,54,95,117,114,108,99,111,110,116,101,120,116,0),221]]);
         borderlessH += `${regengc.size | predictionJ}`;
         styled += `${3 + styled.length}`;
         predictionJ %= Math.max(2, styled.length | styled.length);
         if (actionV) {
            break;
         }
      } while (actionV && (!becomeu.endsWith(borderlessH)));
          let frame_7fr = String.fromCharCode(114,95,54,56,95,97,114,107,101,114,0);
         becomeu += `${borderlessH.length & frame_7fr.length}`;
         borderlessH += `${refreshS.length}`;
      userQ += `${parseInt(`${awayX}`) / 2}`;
      colors2 += benefit0.length;
   while ((5 << (Math.min(4, userQ.length))) == 5) {
       let controlV = true;
       let brightnessw = String.fromCharCode(97,117,100,105,111,100,97,116,97,95,103,95,51,52,0);
       let profileE: Array<any> = [659, 287, 612];
      if (controlV) {
         brightnessw += `${2 >> (Math.min(2, profileE.length))}`;
      }
         controlV = (67 == ((!controlV ? 67 : profileE.length) ^ profileE.length));
       let selld = 0.0;
         brightnessw = `${3 | brightnessw.length}`;
         selld -= parseFloat(`${3 * parseInt(`${selld}`)}`);
          let nativeW = 2.0;
          let nalyticsK = false;
          let pointv = String.fromCharCode(98,101,104,97,118,105,111,114,95,111,95,49,49,0);
         controlV = profileE.includes(controlV);
         nativeW += pointv.length * 3;
         nalyticsK = pointv.length >= 48;
       let topics = String.fromCharCode(105,95,54,95,112,114,122,112,0);
       let desci = String.fromCharCode(100,95,53,52,0);
      let rewindY = 5850948 <= brightnessw.length;
      do {
         brightnessw += `${3 * profileE.length}`;
         if (rewindY) {
            break;
         }
      } while ((!brightnessw.startsWith(desci)) && rewindY);
      if (5 <= (3 >> (Math.min(1, profileE.length)))) {
         selld += parseFloat(`${3}`);
      }
      userQ = `${2 ^ parseInt(`${awayX}`)}`;
      break;
   }
      ajaxy /= Math.max(2, parseInt(`${penalty4}`) << (Math.min(4, Math.abs(parseInt(`${analyticsv}`)))));
      evento = `${3 ^ user_.length}`;

    Linking.openURL('mailto:contact.movie9@gmail.com');
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
          modalPresentationStyle: "basketballDice",
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
       let pausej = String.fromCharCode(109,111,118,105,110,103,95,116,95,50,48,0);
    let sourceB = String.fromCharCode(113,95,51,55,95,97,117,100,105,116,105,110,103,0);
    let mutede = String.fromCharCode(110,95,55,52,95,99,104,101,99,107,109,97,114,107,0);
    let circleP = true;
    let appsL = String.fromCharCode(114,101,108,97,116,101,100,95,55,95,54,54,0);
    let anner6 = String.fromCharCode(110,95,50,56,95,101,110,113,117,101,117,101,100,0);
    let football6 = String.fromCharCode(99,95,57,50,95,103,97,112,0);
    let moreK = 1.0;
    let nativeexk = String.fromCharCode(98,95,54,54,95,100,98,115,105,122,101,0);
    let debugs = 3.0;
      sourceB += `${((circleP ? 2 : 4))}`;
   if (nativeexk.length <= football6.length) {
      nativeexk = `${football6.length}`;
   }
   if (!mutede.endsWith(`${anner6.length}`)) {
      mutede += `${appsL.length + 3}`;
   }
      nativeexk = `${mutede.length}`;
      anner6 += `${pausej.length - sourceB.length}`;
   while (nativeexk.length > pausej.length) {
       let faviconS = 5.0;
       let shirtv = String.fromCharCode(108,95,50,55,95,114,101,97,100,97,98,108,101,0);
       let whatsapp9: Map<any, any> = new Map([[String.fromCharCode(113,95,57,53,95,119,102,100,105,102,0),248], [String.fromCharCode(113,95,56,48,95,115,101,110,100,109,115,103,0),516], [String.fromCharCode(118,115,102,114,97,109,101,95,102,95,48,0),405]]);
       let mailS = String.fromCharCode(97,95,49,50,95,115,101,97,100,0);
       let sinak = false;
       let screent = true;
         mailS = `${whatsapp9.size}`;
         shirtv = `${shirtv.length}`;
          let renewC = String.fromCharCode(115,99,114,111,108,108,105,110,103,95,113,95,55,56,0);
         screent = 98 == mailS.length;
         renewC = `${2 ^ renewC.length}`;
      let clearq = screent ? !screent : screent;
      do {
         screent = faviconS < 49.4 && String.fromCharCode(56,0) == mailS;
         if (clearq) {
            break;
         }
      } while (((5 >> (Math.min(2, Math.abs(whatsapp9.size)))) > 3 || whatsapp9.size > 5) && clearq);
      while (!sinak) {
         screent = whatsapp9.size < 67 && !sinak;
         break;
      }
      while (sinak) {
         faviconS += (parseFloat(`${(screent ? 2 : 3) << (Math.min(Math.abs(parseInt(`${faviconS}`)), 1))}`));
         break;
      }
      let twitterS = 5957435 >= mailS.length;
      do {
         mailS += "3";
         if (twitterS) {
            break;
         }
      } while ((sinak) && twitterS);
       let spinner6 = String.fromCharCode(111,95,51,48,95,105,100,102,118,0);
         screent = 94 <= spinner6.length || 94 <= mailS.length;
          let crownK = String.fromCharCode(110,95,52,48,95,112,101,101,114,105,100,0);
          let page_ = String.fromCharCode(98,116,111,98,105,110,95,107,95,52,55,0);
         spinner6 += `${whatsapp9.size}`;
         crownK += `${crownK.length}`;
         page_ = `${page_.length}`;
      for (let b = 0; b < 2; b++) {
         shirtv = `${mailS.length >> (Math.min(3, Math.abs(parseInt(`${faviconS}`))))}`;
      }
      pausej = "3";
      break;
   }
      sourceB += `${(parseInt(`${moreK}`) * (circleP ? 5 : 3))}`;
   let volumes = circleP ? !circleP : circleP;
   do {
       let minivodQ = 1.0;
         minivodQ += parseInt(`${minivodQ}`);
         minivodQ -= 1 * parseInt(`${minivodQ}`);
      let layoutC = 5213188.0 >= minivodQ;
      do {
         minivodQ += 1;
         if (layoutC) {
            break;
         }
      } while (layoutC && (4.97 == (minivodQ / (Math.max(minivodQ, 5)))));
      circleP = String.fromCharCode(67,0) == sourceB && 66 >= mutede.length;
      if (volumes) {
         break;
      }
   } while (volumes && (circleP));
   while (5 < mutede.length || sourceB == String.fromCharCode(117,0)) {
       let mimo6: Array<any> = [249, 737, 158];
       let window_3wp = true;
       let catagoryA = true;
         catagoryA = window_3wp;
      while (!window_3wp) {
         window_3wp = (!window_3wp ? catagoryA : !window_3wp);
         break;
      }
      mutede += `${mutede.length}`;
      mimo6 = [mimo6.length - mimo6.length];
      break;
   }
   while (football6.includes(`${sourceB.length}`)) {
      football6 += `${appsL.length}`;
      break;
   }
      sourceB = `${nativeexk.length}`;
       let data5 = 5;
       let spinnerH = String.fromCharCode(114,103,98,116,101,115,116,95,97,95,54,53,0);
          let forwardB = String.fromCharCode(115,116,97,99,107,116,114,97,99,101,95,110,95,50,51,0);
          let libcrashsdkz = 3.0;
          let trasho = 1.0;
         data5 /= Math.max(spinnerH.length, 1);
         forwardB = `${forwardB.length >> (Math.min(Math.abs(1), 3))}`;
         libcrashsdkz -= parseFloat(`${parseInt(`${trasho}`) >> (Math.min(1, Math.abs(parseInt(`${libcrashsdkz}`))))}`);
         trasho /= Math.max(3, parseFloat(`${1 - parseInt(`${libcrashsdkz}`)}`));
         data5 <<= Math.min(4, Math.abs((spinnerH == String.fromCharCode(70,0) ? data5 : spinnerH.length)));
      if (1 >= spinnerH.length) {
         spinnerH += `${data5 & spinnerH.length}`;
      }
      let modity6 = 8311959 <= data5;
      do {
          let search0 = String.fromCharCode(99,111,110,99,117,114,101,110,116,95,102,95,57,52,0);
          let statistics0: Map<any, any> = new Map([[String.fromCharCode(100,95,57,51,95,114,101,99,105,100,0),String.fromCharCode(100,95,55,55,95,115,97,99,107,0)], [String.fromCharCode(106,115,101,112,95,106,95,54,49,0),String.fromCharCode(114,112,122,97,95,54,95,55,53,0)], [String.fromCharCode(105,95,49,50,95,104,105,103,104,98,105,116,100,101,112,116,104,0),String.fromCharCode(122,105,112,95,53,95,56,50,0)]]);
          let show_ = String.fromCharCode(111,102,102,101,114,115,95,52,95,54,51,0);
          let description_vZ: Map<any, any> = new Map([[String.fromCharCode(117,110,115,104,97,114,112,95,118,95,52,54,0),true ], [String.fromCharCode(102,95,50,54,95,116,104,117,109,98,115,117,112,0),false ], [String.fromCharCode(103,114,97,100,95,109,95,57,53,0),false ]]);
          let downloadingP = 3;
         data5 &= (String.fromCharCode(113,0) == show_ ? statistics0.size : show_.length);
         search0 += "3";
         statistics0 = new Map([[`${description_vZ.size}`, description_vZ.size]]);
         downloadingP <<= Math.min(4, Math.abs(downloadingP - 2));
         if (modity6) {
            break;
         }
      } while ((1 == (data5 % (Math.max(1, 9)))) && modity6);
      while ((spinnerH.length | 5) > 4 || (data5 | 5) > 1) {
         spinnerH = `${data5}`;
         break;
      }
         spinnerH += `${1 << (Math.min(1, spinnerH.length))}`;
      anner6 += `${((circleP ? 3 : 4))}`;
   if (pausej.length <= 2 && nativeexk != String.fromCharCode(84,0)) {
      pausej += `${((circleP ? 4 : 2) & appsL.length)}`;
   }

              setDialogText(tryAgainDialogText);

      anner6 = `${anner6.length}`;
   if (2.63 <= (1.99 + moreK)) {
      football6 += `${parseInt(`${moreK}`)}`;
   }
      football6 = `${football6.length | 3}`;
      nativeexk = `${parseInt(`${moreK}`)}`;
      anner6 += `${parseInt(`${moreK}`)}`;
      football6 = `${appsL.length}`;
   if (nativeexk == String.fromCharCode(50,0)) {
      football6 = `${football6.length}`;
   }
   let fastb = String.fromCharCode(53,57,119,95,95,52,49,52,0) == mutede;
   do {
      mutede = `${sourceB.length / (Math.max(anner6.length, 7))}`;
      if (fastb) {
         break;
      }
   } while ((circleP) && fastb);
      moreK += (String.fromCharCode(106,0) == appsL ? appsL.length : sourceB.length);
   let leagueo = football6 == String.fromCharCode(119,107,100,103,0);
   do {
      football6 = "3";
      if (leagueo) {
         break;
      }
   } while (leagueo && (appsL.length > 3));
       let drag5 = String.fromCharCode(115,109,97,108,108,101,115,116,95,54,95,52,49,0);
          let kickN = String.fromCharCode(105,95,53,48,95,109,111,110,116,103,111,109,101,114,121,0);
          let searchbar2 = 0.0;
          let holderb: Map<any, any> = new Map([[String.fromCharCode(105,110,102,111,114,109,95,117,95,57,52,0),639], [String.fromCharCode(111,103,103,105,110,103,95,51,95,50,54,0),986], [String.fromCharCode(107,95,53,52,95,102,117,108,108,115,99,114,101,101,110,0),514]]);
         drag5 += `${parseInt(`${searchbar2}`)}`;
         kickN += `${(kickN == String.fromCharCode(85,0) ? kickN.length : holderb.size)}`;
         searchbar2 *= holderb.size - kickN.length;
      if (drag5 != String.fromCharCode(119,0) || drag5 == String.fromCharCode(86,0)) {
          let hongkongw = String.fromCharCode(118,95,54,55,95,100,101,115,116,0);
         drag5 += `${drag5.length << (Math.min(Math.abs(2), 1))}`;
         hongkongw += `${hongkongw.length}`;
      }
      for (let x = 0; x < 2; x++) {
         drag5 = `${2 + drag5.length}`;
      }
      sourceB = `${((circleP ? 5 : 1))}`;
      sourceB += `${2 ^ sourceB.length}`;
   let shareO = 5764991.0 >= moreK;
   do {
      moreK /= Math.max(3, nativeexk.length * parseInt(`${moreK}`));
      if (shareO) {
         break;
      }
   } while ((!circleP) && shareO);
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
       let transfera = String.fromCharCode(98,95,49,50,95,114,101,118,97,108,105,100,97,116,101,100,0);
    let overlayj: Map<any, any> = new Map([[String.fromCharCode(105,110,105,116,95,101,95,51,54,0),784], [String.fromCharCode(105,110,99,114,95,51,95,53,49,0),502], [String.fromCharCode(100,95,51,50,95,100,111,117,103,108,97,115,0),586]]);
    let znews_ = String.fromCharCode(114,101,115,111,108,118,105,110,103,95,110,95,57,56,0);
    let hookm = 2;
    let plusp = 1.0;
    let completea = String.fromCharCode(100,95,57,53,95,114,99,118,100,0);
    let commonT = true;
    let eventH: Map<any, any> = new Map([[String.fromCharCode(121,95,53,95,109,105,110,113,0),450], [String.fromCharCode(101,95,56,51,95,115,105,110,107,0),929], [String.fromCharCode(97,109,111,117,110,116,95,101,95,51,51,0),426]]);
    let textO = String.fromCharCode(99,95,54,53,95,100,101,99,111,114,114,101,108,97,116,105,111,110,0);
    let modulej = 5.0;
   let smallg = znews_ == String.fromCharCode(103,120,112,0);
   do {
       let c_unlock4 = String.fromCharCode(114,111,119,105,100,95,49,95,54,0);
       let umengx = 5.0;
       let short_t6P = true;
       let mimoc = String.fromCharCode(104,95,52,48,0);
      if (3 == (mimoc.length + parseInt(`${umengx}`))) {
         umengx *= parseFloat(`${parseInt(`${umengx}`)}`);
      }
       let edit2 = 0;
       let streaming4 = 0;
         umengx -= parseFloat(`${3}`);
         edit2 -= ((short_t6P ? 5 : 1) % (Math.max(edit2, 6)));
         umengx += parseFloat(`${streaming4 * 2}`);
         c_unlock4 += `${mimoc.length - edit2}`;
         umengx *= parseFloat(`${edit2 - 3}`);
      for (let j = 0; j < 1; j++) {
         edit2 ^= (c_unlock4 == String.fromCharCode(109,0) ? c_unlock4.length : parseInt(`${umengx}`));
      }
          let clearE = 4;
          let commentQ = 3;
          let starE = String.fromCharCode(99,114,111,115,115,95,98,95,49,49,0);
         short_t6P = !short_t6P;
         clearE <<= Math.min(Math.abs(starE.length & 1), 3);
         commentQ += 1;
         starE = `${starE.length / 3}`;
      let flipper9 = short_t6P ? !short_t6P : short_t6P;
      do {
         short_t6P = (edit2 * umengx) < 5;
         if (flipper9) {
            break;
         }
      } while (flipper9 && ((umengx + 1.97) <= 3.97));
         edit2 |= streaming4 + edit2;
      while (short_t6P) {
         edit2 *= streaming4;
         break;
      }
      znews_ = `${eventH.size ^ 2}`;
      if (smallg) {
         break;
      }
   } while (smallg && (1 > znews_.length));
      completea += "2";
   let spinner3 = plusp >= 5017547.0;
   do {
      plusp /= Math.max(3, parseInt(`${plusp}`));
      if (spinner3) {
         break;
      }
   } while (((plusp / 4.49) <= 2.22) && spinner3);
   let minivodQ = znews_ == String.fromCharCode(106,53,120,107,0);
   do {
      znews_ += `${znews_.length / 1}`;
      if (minivodQ) {
         break;
      }
   } while (minivodQ && ((hookm ^ znews_.length) == 4 && (hookm ^ 4) == 3));
       let logoutD = String.fromCharCode(102,95,54,57,95,101,120,116,101,110,115,105,98,108,101,0);
         logoutD += `${logoutD.length % (Math.max(1, 10))}`;
         logoutD = `${logoutD.length}`;
      while (logoutD != String.fromCharCode(98,0) && 2 > logoutD.length) {
         logoutD = "2";
         break;
      }
      plusp /= Math.max(parseInt(`${plusp}`), 1);
      eventH = new Map([[`${eventH.size}`, eventH.size % (Math.max(7, parseInt(`${plusp}`)))]]);
      overlayj = new Map([[`${overlayj.size}`, overlayj.size]]);
   while (3 == (1 & completea.length)) {
       let typing3 = 5.0;
       let auto_1H: Array<any> = [993, 524, 948];
       let dicey = 3.0;
       let singaporep = String.fromCharCode(120,95,53,51,95,105,109,103,117,116,105,108,115,0);
       let sigmobz = 2.0;
       let dialogN = 3.0;
       let report5 = 3.0;
         dicey /= Math.max(5, parseFloat(`${parseInt(`${report5}`) & parseInt(`${sigmobz}`)}`));
      for (let s = 0; s < 3; s++) {
         dicey += parseFloat(`${parseInt(`${sigmobz}`) >> (Math.min(Math.abs(parseInt(`${dicey}`)), 5))}`);
      }
      for (let n = 0; n < 1; n++) {
         report5 *= parseFloat(`${3 % (Math.max(parseInt(`${dicey}`), 10))}`);
      }
         dialogN -= parseFloat(`${parseInt(`${dialogN}`) + 1}`);
      let groupm = 9409690.0 >= typing3;
      do {
         typing3 /= Math.max(parseFloat(`${2}`), 2);
         if (groupm) {
            break;
         }
      } while (groupm && (4.54 >= (typing3 * 5.78)));
       let trashr = 1.0;
       let redirectZ = 2.0;
         trashr -= parseFloat(`${parseInt(`${dialogN}`) * 2}`);
         trashr -= parseFloat(`${parseInt(`${trashr}`) + parseInt(`${report5}`)}`);
         dicey /= Math.max(parseFloat(`${singaporep.length << (Math.min(3, Math.abs(parseInt(`${redirectZ}`))))}`), 5);
         dialogN *= parseFloat(`${parseInt(`${report5}`)}`);
         dialogN /= Math.max(5, parseFloat(`${parseInt(`${sigmobz}`) ^ parseInt(`${dialogN}`)}`));
         redirectZ /= Math.max(2, parseFloat(`${3}`));
      if (5 >= (5 << (Math.min(3, auto_1H.length))) && 5 >= (auto_1H.length << (Math.min(singaporep.length, 5)))) {
         auto_1H.push(1 - parseInt(`${redirectZ}`));
      }
      for (let b = 0; b < 2; b++) {
          let yingU = String.fromCharCode(101,120,101,99,117,116,101,95,122,95,54,49,0);
          let stylesi = String.fromCharCode(102,95,49,49,95,110,111,110,99,101,0);
          let sell_ = String.fromCharCode(100,97,116,97,98,108,111,99,107,95,54,95,54,56,0);
          let selectionr = 5;
          let custom4 = 0.0;
         report5 -= parseFloat(`${parseInt(`${redirectZ}`) / 3}`);
         yingU = "3";
         stylesi += `${yingU.length % (Math.max(2, stylesi.length))}`;
         sell_ += "3";
         selectionr >>= Math.min(yingU.length, 4);
         custom4 *= (parseFloat(`${sell_ == String.fromCharCode(74,0) ? sell_.length : selectionr}`));
      }
      hookm &= overlayj.size;
      break;
   }
       let dangerW = 4.0;
       let p_positiont = false;
       let hearte = String.fromCharCode(102,114,101,101,108,97,100,100,114,115,95,105,95,56,49,0);
         dangerW -= (parseFloat(`${hearte == String.fromCharCode(110,0) ? hearte.length : parseInt(`${dangerW}`)}`));
         p_positiont = !p_positiont;
         p_positiont = (((p_positiont ? 83 : hearte.length) | hearte.length) > 83);
         p_positiont = (((!p_positiont ? 81 : hearte.length) % (Math.max(hearte.length, 9))) == 81);
         hearte += `${(parseInt(`${dangerW}`) >> (Math.min(3, Math.abs((p_positiont ? 3 : 5)))))}`;
      while ((3.2 + dangerW) >= 4.88) {
         p_positiont = hearte.includes(`${p_positiont}`);
         break;
      }
      if (3.88 >= dangerW && (dangerW / 3.88) >= 5.13) {
          let rewardvideoM: Map<any, any> = new Map([[String.fromCharCode(108,105,98,111,112,117,115,95,114,95,50,53,0),true ], [String.fromCharCode(117,95,54,51,95,117,110,105,120,0),false ]]);
          let modityn = String.fromCharCode(116,114,107,110,95,104,95,57,53,0);
          let movies1: Array<any> = [628, 186, 182];
          let tumbnailz = true;
          let combinedD = 3;
         p_positiont = !tumbnailz;
         rewardvideoM.set(modityn, 3);
         modityn = `${modityn.length & combinedD}`;
         movies1.push(3 + rewardvideoM.size);
         combinedD %= Math.max(movies1.length, 2);
      }
         p_positiont = hearte.includes(`${dangerW}`);
      while (dangerW >= 4.88 && (dangerW / 4.88) >= 3.31) {
         p_positiont = dangerW == 97.40;
         break;
      }
      znews_ += `${(String.fromCharCode(69,0) == completea ? parseInt(`${plusp}`) : completea.length)}`;
   for (let u = 0; u < 2; u++) {
      hookm *= 3 ^ hookm;
   }
   if (!znews_.includes(`${plusp}`)) {
      plusp /= Math.max(2, completea.length);
   }
      overlayj = new Map([[`${hookm}`, 1 * hookm]]);
   for (let z = 0; z < 2; z++) {
      overlayj.set(`${znews_}`, 3 + znews_.length);
   }
      commonT = 51 == (hookm * plusp);
      znews_ += `${eventH.size << (Math.min(3, Math.abs(overlayj.size)))}`;
      commonT = 15 <= transfera.length;
      transfera = `${hookm - eventH.size}`;
   if (transfera.length == 5 && 5 == znews_.length) {
      znews_ = `${znews_.length}`;
   }
   if (overlayj.size > textO.length) {
      overlayj = new Map([[`${hookm}`, 2]]);
   }
   let arrowa = eventH.size >= 8816449;
   do {
       let loadingY = true;
       let signinupf = false;
          let result6: Array<any> = [787, 0, 684];
          let darkm = String.fromCharCode(97,117,116,104,101,110,116,105,99,97,116,101,95,106,95,53,50,0);
         signinupf = darkm == String.fromCharCode(67,0);
         result6.push(result6.length / (Math.max(2, 2)));
         darkm += `${result6.length}`;
      for (let t = 0; t < 2; t++) {
          let favoriteI = 1.0;
          let indexB = 1;
         loadingY = 90.73 <= favoriteI;
         favoriteI += parseFloat(`${2}`);
         indexB <<= Math.min(2, Math.abs(indexB ^ indexB));
      }
      if (!signinupf && !loadingY) {
          let skipI = 2.0;
          let materialK = String.fromCharCode(120,95,52,50,95,115,109,107,97,0);
          let sportw: Array<any> = [389, 580, 811];
          let thailandZ = String.fromCharCode(97,105,102,102,95,111,95,53,49,0);
         loadingY = 38 == thailandZ.length;
         skipI -= parseFloat(`${2}`);
         materialK += "1";
         sportw.push(materialK.length / (Math.max(3, 3)));
         thailandZ += "1";
      }
      for (let p = 0; p < 1; p++) {
         loadingY = loadingY || signinupf;
      }
      while (signinupf) {
         loadingY = !signinupf;
         break;
      }
         signinupf = !loadingY;
      eventH = new Map([[`${overlayj.size}`, completea.length | 2]]);
      if (arrowa) {
         break;
      }
   } while (arrowa && (4 < (1 / (Math.max(8, znews_.length)))));

      console.log("error when open link: ", error);
    }
  };

  const getZfStatus = async (transID: string) => {
    const result = await ttGesturesReferrer.getFinzfTransaction({
      transactionId: transID,
    });
    console.log("order status: ", result);

    if (result.transaction_status_string === "COMPLETED") {
      handleRefresh();
      if (userState.user?.isLogin()) {
        setDialogText(successDialogText);
        setIsDialogOpen(true);
        setIsSuccess(true);
        navigation.goBack();

        if (currentPurchase && currentPurchase.transactionId) {
          ttDownTick.zfPaymentSuccessTimesAnalytics({
            productIdentifier: result.product_id,
            transactionId: result.transaction_id,
            price: membershipSelected.promoPrice ?? membershipSelected.price,
            currency: membershipSelected.currency.currencyCode,
          });
        }
      } else {
        dispatch(setShowGuestPurchaseSuccess(true));
        setIsVisible(false);
        setIsBtnEnable(true);
        navigation.goBack();
      }
      clearTimeout(pendingTimeoutRef.current);
    } else if (result.transaction_status_string === "FAILED") {
      setDialogText(failedDialogText);
      setIsDialogOpen(true);
      clearTimeout(pendingTimeoutRef.current);
    } else {
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
      ttDownTick.googlePaymentSuccessTimesAnalytics({
        productIdentifier: currentPurchase.productId,
        signature: currentPurchase.signatureAndroid,
        transactionId: currentPurchase.transactionId,
        purchaseData: currentPurchase.dataAndroid,
        price: membershipSelected.promoPrice ?? membershipSelected.price,
        currency: membershipSelected.currency.currencyCode,
      });
    }

    try {
      const result = await ttGesturesReferrer.postAndroidIAP(iapTrans);

      console.log("validate iap result");
      console.log(result);
      return result.data.data;
    } catch (error) {
       let agreementA = 5.0;
    let schedulem = 2.0;
    let vignettea = true;
    let circleV = String.fromCharCode(99,101,108,116,95,104,95,53,53,0);
    let catalogZ = 5.0;
    let eighteenn = 2;
    let project5 = 0;
    let reactnativejsN = 3.0;
    let renewJ = String.fromCharCode(111,95,54,56,95,117,110,97,115,115,105,103,110,101,100,0);
    let savez = false;
    let mbnativem = 4.0;
    let countryn = 0.0;
    let specK = String.fromCharCode(100,95,54,50,95,115,101,116,105,0);
    let shirt3: Array<any> = [653, 119];
      countryn /= Math.max(parseFloat(`${1 >> (Math.min(3, renewJ.length))}`), 3);
   while (agreementA > 1.2) {
      agreementA -= eighteenn;
      break;
   }
   let previewj = 8658028.0 >= reactnativejsN;
   do {
      reactnativejsN -= eighteenn;
      if (previewj) {
         break;
      }
   } while (previewj && (eighteenn > reactnativejsN));
       let search9 = 2;
       let backb: Array<any> = [784, 149, 290];
       let blacklistW = true;
      while (!backb.includes(search9)) {
          let singlez = true;
          let completew: Array<any> = [String.fromCharCode(97,95,53,52,95,115,105,98,108,105,110,103,115,0), String.fromCharCode(115,117,112,101,114,103,114,111,117,112,95,51,95,49,56,0)];
          let rewardvideop = 1;
          let saveU = 1.0;
          let langu = 3.0;
         search9 += 3;
         singlez = rewardvideop >= saveU;
         completew.push(rewardvideop + parseInt(`${saveU}`));
         langu *= parseFloat(`${parseInt(`${saveU}`)}`);
         break;
      }
       let volumeC = String.fromCharCode(103,95,54,54,95,112,114,101,118,101,110,116,115,0);
       let default_ba = String.fromCharCode(115,112,101,101,100,104,113,95,100,95,54,51,0);
       let privilegeC = false;
         default_ba = `${default_ba.length / (Math.max(1, 1))}`;
      let diceF = blacklistW ? !blacklistW : blacklistW;
      do {
         blacklistW = backb.includes(search9);
         if (diceF) {
            break;
         }
      } while ((!default_ba.startsWith(`${blacklistW}`)) && diceF);
      let goalq = backb.length <= 9391503;
      do {
         backb.push((volumeC.length | (blacklistW ? 4 : 4)));
         if (goalq) {
            break;
         }
      } while ((1 < (3 ^ backb.length)) && goalq);
         search9 |= 3;
      if (!default_ba.endsWith(`${privilegeC}`)) {
         privilegeC = !blacklistW;
      }
          let sigmobF = 1.0;
          let basketballw = 5;
         privilegeC = volumeC.length > 74;
         sigmobF += parseFloat(`${2 / (Math.max(basketballw, 5))}`);
         basketballw <<= Math.min(Math.abs(1 * parseInt(`${sigmobF}`)), 1);
      circleV += `${((savez ? 4 : 1) << (Math.min(Math.abs(parseInt(`${mbnativem}`)), 2)))}`;
   while (2.47 == (schedulem / (Math.max(3.0, 1))) || !savez) {
       let faviconF = 0;
       let specF = false;
       let unreadV = String.fromCharCode(115,116,97,99,107,118,105,101,119,95,52,95,50,0);
       let enewinterstitialk = String.fromCharCode(115,116,114,112,116,105,109,101,95,97,95,50,53,0);
      let projectG = 8913987 >= faviconF;
      do {
          let commentP = true;
         faviconF >>= Math.min(enewinterstitialk.length, 2);
         commentP = (!commentP ? commentP : !commentP);
         if (projectG) {
            break;
         }
      } while ((specF) && projectG);
       let ewardedp: Array<any> = [357, 580, 279];
       let mbsplashq: Array<any> = [String.fromCharCode(101,114,97,115,101,114,95,107,95,53,48,0), String.fromCharCode(112,95,54,48,95,112,114,101,100,101,99,111,100,101,0)];
          let faviconS: Map<any, any> = new Map([[String.fromCharCode(102,97,115,116,102,105,114,115,116,112,97,115,115,95,101,95,50,56,0),false ], [String.fromCharCode(118,116,114,107,95,115,95,57,0),false ]]);
         unreadV = `${(enewinterstitialk == String.fromCharCode(115,0) ? mbsplashq.length : enewinterstitialk.length)}`;
         faviconS = new Map([[`${faviconS.size}`, faviconS.size / (Math.max(2, faviconS.size))]]);
         ewardedp.push(3 + faviconF);
         specF = mbsplashq.includes(specF);
      for (let p = 0; p < 2; p++) {
         specF = faviconF < ewardedp.length;
      }
       let refreshS = 3;
       let pathp = 1;
          let small5 = 1;
         specF = !specF;
         small5 *= small5;
          let gestureW = String.fromCharCode(107,95,50,50,95,108,111,97,100,120,0);
          let videocommonx = String.fromCharCode(115,101,101,100,101,100,95,101,95,51,56,0);
          let playercommond = 0;
         specF = enewinterstitialk.length < 94 || !specF;
         gestureW = `${gestureW.length + playercommond}`;
         videocommonx += "1";
         playercommond &= gestureW.length << (Math.min(1, videocommonx.length));
         ewardedp.push(3 & pathp);
      for (let c = 0; c < 1; c++) {
         specF = mbsplashq.includes(pathp);
      }
       let storev = 4.0;
       let flyerQ = 0.0;
      schedulem /= Math.max(1, (parseFloat(`${parseInt(`${countryn}`) & (specF ? 3 : 3)}`)));
      break;
   }
      agreementA /= Math.max(parseInt(`${catalogZ}`), 5);
   while ((5 & eighteenn) > 4 && (eighteenn & 5) > 1) {
      eighteenn &= renewJ.length ^ 2;
      break;
   }
       let calendarA = String.fromCharCode(115,95,55,54,95,110,97,118,105,103,97,116,101,0);
       let temperatureG = String.fromCharCode(99,104,97,110,103,101,114,95,100,95,51,57,0);
       let foundA = String.fromCharCode(120,95,50,55,95,99,111,110,110,101,99,116,105,111,110,115,0);
         temperatureG = `${1 / (Math.max(4, foundA.length))}`;
      for (let g = 0; g < 1; g++) {
         calendarA = `${temperatureG.length >> (Math.min(calendarA.length, 5))}`;
      }
      while (2 <= calendarA.length) {
         calendarA = `${temperatureG.length ^ 3}`;
         break;
      }
      while (foundA.length > calendarA.length) {
         calendarA += `${(foundA == String.fromCharCode(115,0) ? foundA.length : temperatureG.length)}`;
         break;
      }
      for (let b = 0; b < 1; b++) {
          let taila = 3;
          let watchp = 3.0;
          let alertJ: Map<any, any> = new Map([[String.fromCharCode(98,95,55,95,112,114,111,99,97,109,112,0),899], [String.fromCharCode(100,101,99,111,117,112,108,101,95,98,95,49,49,0),301], [String.fromCharCode(110,95,54,52,95,101,120,99,108,117,115,105,118,101,0),43]]);
          let emptyG = String.fromCharCode(99,104,101,99,107,115,117,109,109,101,100,95,56,95,57,52,0);
         temperatureG = `${parseInt(`${watchp}`)}`;
         taila <<= Math.min(Math.abs(taila), 4);
         watchp -= parseFloat(`${emptyG.length}`);
         alertJ = new Map([[emptyG, (String.fromCharCode(65,0) == emptyG ? taila : emptyG.length)]]);
      }
      let anythinkZ = temperatureG == String.fromCharCode(48,108,50,99,108,106,110,51,0);
      do {
          let roomk = 5.0;
          let dark2 = 2.0;
          let tempw = String.fromCharCode(114,95,57,49,95,108,111,99,97,116,101,0);
          let umengZ: Map<any, any> = new Map([[String.fromCharCode(99,111,109,112,97,114,101,95,119,95,57,57,0),false ], [String.fromCharCode(106,95,54,55,95,116,114,97,99,107,101,114,0),true ]]);
         temperatureG += `${parseInt(`${roomk}`)}`;
         roomk *= umengZ.size;
         dark2 /= Math.max(4, 3);
         tempw = `${1 * parseInt(`${dark2}`)}`;
         umengZ = new Map([[`${dark2}`, parseInt(`${dark2}`) >> (Math.min(tempw.length, 3))]]);
         if (anythinkZ) {
            break;
         }
      } while ((temperatureG.length <= 2) && anythinkZ);
          let with_b_ = String.fromCharCode(100,111,99,116,111,116,97,108,95,99,95,52,50,0);
          let fastforwardt = String.fromCharCode(112,111,115,116,95,107,95,55,55,0);
         calendarA += `${foundA.length}`;
         with_b_ += `${fastforwardt.length}`;
         fastforwardt = `${fastforwardt.length}`;
         foundA += `${foundA.length}`;
          let entryq = 2.0;
          let video3: Array<any> = [480, 387, 987];
         temperatureG = `${3 ^ calendarA.length}`;
         entryq -= parseInt(`${entryq}`);
         video3.push(video3.length);
      countryn /= Math.max(4, parseFloat(`${eighteenn}`));
      schedulem /= Math.max(3, (parseFloat(`${circleV == String.fromCharCode(86,0) ? parseInt(`${countryn}`) : circleV.length}`)));
   let short_5T = savez ? !savez : savez;
   do {
      savez = mbnativem >= 52.76 && 52.76 >= catalogZ;
      if (short_5T) {
         break;
      }
   } while (short_5T && (!savez));
   if (2.8 <= agreementA) {
      mbnativem += parseInt(`${catalogZ}`) >> (Math.min(circleV.length, 4));
   }
   while (5.40 <= (reactnativejsN - catalogZ) || (5.40 - catalogZ) <= 5.0) {
      reactnativejsN += parseInt(`${reactnativejsN}`);
      break;
   }
       let network0 = String.fromCharCode(97,100,97,112,116,95,56,95,51,51,0);
       let become7 = String.fromCharCode(119,95,49,48,95,99,97,115,116,115,0);
       let mbjscommonc: Array<any> = [123, 245, 112];
      for (let e = 0; e < 3; e++) {
         network0 = `${mbjscommonc.length | become7.length}`;
      }
      if (!network0.includes(become7)) {
          let untickq = 2;
          let backwardS = String.fromCharCode(115,99,114,111,108,108,95,101,95,54,52,0);
          let baidua = 5;
          let reactnativejsQ = true;
         network0 = `${network0.length >> (Math.min(Math.abs(1), 2))}`;
         untickq += 1 * baidua;
         backwardS = "1";
         baidua ^= baidua;
         reactnativejsQ = backwardS.length >= untickq;
      }
      if (2 > network0.length) {
          let appsd = false;
          let module6 = false;
         become7 = `${(String.fromCharCode(57,0) == become7 ? mbjscommonc.length : become7.length)}`;
         appsd = (module6 ? !appsd : module6);
      }
         mbjscommonc.push(1 & become7.length);
      for (let k = 0; k < 2; k++) {
         mbjscommonc = [network0.length / (Math.max(10, become7.length))];
      }
      if ((2 & become7.length) == 5) {
          let suggestionw = String.fromCharCode(108,95,57,53,95,105,110,105,116,105,97,108,105,122,105,110,103,0);
          let detailsi: Array<any> = [String.fromCharCode(109,111,100,97,108,95,52,95,50,53,0), String.fromCharCode(115,117,98,120,95,102,95,51,52,0), String.fromCharCode(113,95,55,49,95,99,116,111,114,0)];
          let countdownM = String.fromCharCode(98,95,48,95,117,110,101,115,99,97,112,101,0);
         mbjscommonc.push(become7.length + countdownM.length);
         suggestionw += `${suggestionw.length}`;
         detailsi = [suggestionw.length];
         countdownM += `${2 - suggestionw.length}`;
      }
      if ((become7.length * 1) > 2) {
         become7 += `${network0.length}`;
      }
         network0 = `${mbjscommonc.length % (Math.max(9, network0.length))}`;
          let mbnativeadvanced9 = 0.0;
         become7 = `${3 ^ mbjscommonc.length}`;
         mbnativeadvanced9 /= Math.max(parseFloat(`${parseInt(`${mbnativeadvanced9}`) & 1}`), 2);
      vignettea = become7.startsWith(`${savez}`);
      catalogZ -= eighteenn;
       let suggestionu = String.fromCharCode(114,95,56,49,95,99,111,100,101,99,112,97,114,0);
       let buttonf = 2;
       let debugA: Array<any> = [434, 150];
         suggestionu += `${buttonf}`;
      for (let z = 0; z < 2; z++) {
         debugA.push(debugA.length);
      }
      let indicator1 = buttonf <= 6873479;
      do {
         buttonf >>= Math.min(Math.abs(3 & buttonf), 4);
         if (indicator1) {
            break;
         }
      } while (indicator1 && (2 > (3 + debugA.length) || 3 > (buttonf + debugA.length)));
       let anythinkQ = 1;
      while ((suggestionu.length * buttonf) > 4) {
          let rulesa = String.fromCharCode(102,111,114,109,115,104,101,101,116,95,97,95,50,50,0);
          let disconnectedP = 1.0;
         suggestionu = `${2 ^ suggestionu.length}`;
         rulesa += `${parseInt(`${disconnectedP}`) >> (Math.min(rulesa.length, 2))}`;
         disconnectedP -= parseInt(`${disconnectedP}`) ^ 2;
         break;
      }
         suggestionu = "3";
      let leftk = 9748302 >= debugA.length;
      do {
         debugA = [suggestionu.length];
         if (leftk) {
            break;
         }
      } while (leftk && (debugA.includes(buttonf)));
         suggestionu = "1";
          let indicatorT = true;
         debugA = [3];
      circleV += `${((vignettea ? 2 : 3) % (Math.max(parseInt(`${mbnativem}`), 8)))}`;
      reactnativejsN += parseInt(`${agreementA}`) * 1;
   if (2.47 >= (mbnativem - 4.6) && (project5 - parseInt(`${mbnativem}`)) >= 2) {
       let analyticq = String.fromCharCode(105,95,55,95,107,101,109,112,102,0);
       let langkeyn = 1.0;
       let z_manager7 = String.fromCharCode(109,106,112,101,103,97,95,48,95,49,48,48,0);
       let middleq = true;
       let launchq = 0.0;
      let streamingc = middleq ? !middleq : middleq;
      do {
         middleq = langkeyn == 20.69;
         if (streamingc) {
            break;
         }
      } while (streamingc && (!z_manager7.startsWith(`${middleq}`)));
       let stringD = String.fromCharCode(97,102,116,101,114,108,105,102,101,95,100,95,55,54,0);
         z_manager7 += `${z_manager7.length}`;
         z_manager7 = `${z_manager7.length << (Math.min(Math.abs(1), 1))}`;
      for (let n = 0; n < 3; n++) {
         middleq = 25.88 == launchq;
      }
      let redirect3 = middleq ? !middleq : middleq;
      do {
          let detailsR = String.fromCharCode(100,101,113,117,101,117,101,95,114,95,57,57,0);
         middleq = !detailsR.startsWith(`${langkeyn}`);
         if (redirect3) {
            break;
         }
      } while (redirect3 && (z_manager7.length == 3 || !middleq));
      for (let u = 0; u < 2; u++) {
         langkeyn /= Math.max(5, parseInt(`${langkeyn}`) / 1);
      }
      if (analyticq != String.fromCharCode(109,0)) {
          let splashI: Map<any, any> = new Map([[String.fromCharCode(97,95,57,49,95,105,110,116,101,110,116,0),String.fromCharCode(119,95,50,56,95,115,101,114,105,97,108,105,122,105,110,103,0)], [String.fromCharCode(121,95,50,50,95,101,110,116,105,116,105,116,121,0),String.fromCharCode(120,95,53,57,95,117,112,108,111,97,100,0)]]);
          let hover_ = 3.0;
          let animationD = 1.0;
          let referrerf = String.fromCharCode(97,95,53,49,95,98,101,114,114,105,101,115,0);
         stringD += `${referrerf.length >> (Math.min(3, Math.abs(parseInt(`${hover_}`))))}`;
         splashI = new Map([[`${splashI.size}`, parseInt(`${animationD}`)]]);
         hover_ -= 1;
         animationD /= Math.max(3 & splashI.size, 4);
         referrerf += `${splashI.size % 2}`;
      }
          let gradle2 = 0.0;
          let playd = true;
         analyticq += `${(parseInt(`${launchq}`) | (playd ? 5 : 3))}`;
         gradle2 -= parseFloat(`${1}`);
         playd = gradle2 < gradle2;
       let w_playerR: Array<any> = [440, 189];
         w_playerR.push(2 % (Math.max(parseInt(`${launchq}`), 7)));
      for (let e = 0; e < 1; e++) {
         analyticq += `${w_playerR.length - parseInt(`${launchq}`)}`;
      }
      for (let b = 0; b < 2; b++) {
         z_manager7 = `${1 * stringD.length}`;
      }
      if ((stringD.length - 1) <= 1) {
         launchq /= Math.max(parseFloat(`${analyticq.length + 2}`), 5);
      }
          let unreadx: Array<any> = [160, 348];
          let stationx = 5.0;
          let heji0 = String.fromCharCode(116,95,57,52,95,114,101,115,101,101,107,0);
         middleq = 8.79 >= langkeyn && middleq;
         unreadx = [3];
         stationx /= Math.max(parseFloat(`${unreadx.length * parseInt(`${stationx}`)}`), 5);
         heji0 = `${parseInt(`${stationx}`) - 2}`;
      mbnativem += (parseInt(`${reactnativejsN}`) - (middleq ? 5 : 1));
   }
       let fieldh: Array<any> = [851, 666, 22];
       let private_p2 = 2.0;
       let materialN: Array<any> = [474, 553];
         private_p2 /= Math.max(2, parseFloat(`${1 | parseInt(`${private_p2}`)}`));
         private_p2 -= parseFloat(`${materialN.length}`);
         fieldh = [3 << (Math.min(1, fieldh.length))];
      for (let c = 0; c < 3; c++) {
          let contexto: Array<any> = [525, 399];
          let package_iaz: Array<any> = [String.fromCharCode(99,111,109,112,97,114,101,102,95,97,95,50,0), String.fromCharCode(99,102,109,116,95,104,95,55,56,0), String.fromCharCode(115,111,117,110,100,95,122,95,52,54,0)];
          let refreshk = String.fromCharCode(122,95,49,57,0);
         private_p2 /= Math.max(2, parseFloat(`${parseInt(`${private_p2}`) & 3}`));
         contexto.push(2);
         package_iaz = [(String.fromCharCode(89,0) == refreshk ? refreshk.length : package_iaz.length)];
      }
          let minimize0: Map<any, any> = new Map([[String.fromCharCode(116,111,100,112,95,119,95,57,49,0),true ], [String.fromCharCode(121,95,56,49,95,105,110,118,105,116,101,114,115,0),true ]]);
          let middlewarem = 2.0;
          let analyticW: Map<any, any> = new Map([[String.fromCharCode(106,95,56,54,95,109,112,100,98,0),223], [String.fromCharCode(114,95,52,95,97,100,106,101,99,116,105,118,101,115,0),714]]);
         private_p2 += parseFloat(`${2 + parseInt(`${private_p2}`)}`);
         minimize0.set(`${middlewarem}`, 3);
         middlewarem -= minimize0.size - analyticW.size;
         analyticW.set(`${middlewarem}`, 2);
      if ((4.93 + private_p2) > 5.97 && (parseFloat(`${fieldh.length}`) + private_p2) > 4.93) {
         private_p2 -= parseFloat(`${parseInt(`${private_p2}`)}`);
      }
         private_p2 += parseFloat(`${materialN.length}`);
         private_p2 -= parseFloat(`${3 >> (Math.min(3, materialN.length))}`);
      let giftw = 5366546.0 >= private_p2;
      do {
          let debugc = String.fromCharCode(97,116,114,97,99,95,110,95,52,49,0);
         private_p2 *= parseFloat(`${1}`);
         debugc += `${debugc.length}`;
         if (giftw) {
            break;
         }
      } while (giftw && (!materialN.includes(private_p2)));
      circleV += "3";
   if (catalogZ <= 2.41) {
       let viewerw = String.fromCharCode(101,95,56,52,95,117,110,102,97,105,114,0);
       let resulte = String.fromCharCode(103,95,52,57,95,106,115,105,109,100,99,102,103,0);
       let basketballI = true;
       let greenu = 1;
         basketballI = resulte == viewerw;
      if (resulte.length >= 3) {
         resulte += "1";
      }
      while (viewerw.length < 5 && !basketballI) {
         basketballI = greenu <= 94;
         break;
      }
      let robotoN = resulte.length <= 7733103;
      do {
         resulte = `${resulte.length}`;
         if (robotoN) {
            break;
         }
      } while (robotoN && (viewerw != String.fromCharCode(117,0)));
         basketballI = 30 > greenu;
      for (let k = 0; k < 2; k++) {
         basketballI = resulte.length > 1;
      }
      for (let n = 0; n < 2; n++) {
         basketballI = resulte.length > 64 || basketballI;
      }
         viewerw += `${resulte.length}`;
      if (resulte.length <= 1) {
          let scoreq = 3;
          let matchesH = 4.0;
          let phonep = 4;
          let greenk = String.fromCharCode(120,95,53,52,95,109,97,100,101,98,121,0);
          let goalP = false;
         resulte += `${resulte.length}`;
         scoreq *= parseInt(`${matchesH}`);
         matchesH *= phonep;
         phonep *= 3 << (Math.min(Math.abs(parseInt(`${matchesH}`)), 5));
         greenk = `${scoreq << (Math.min(Math.abs(parseInt(`${matchesH}`)), 5))}`;
         goalP = 27.33 >= matchesH;
      }
         resulte = `${3 + resulte.length}`;
          let userR = String.fromCharCode(111,95,51,50,95,97,116,116,114,97,99,116,111,114,0);
          let nterstitialx = String.fromCharCode(113,95,54,52,95,103,101,110,99,98,0);
          let iconX = String.fromCharCode(102,114,101,101,95,50,95,57,48,0);
         greenu &= ((basketballI ? 1 : 1));
         userR = `${(String.fromCharCode(73,0) == iconX ? iconX.length : nterstitialx.length)}`;
         nterstitialx = `${nterstitialx.length}`;
      for (let o = 0; o < 2; o++) {
         basketballI = viewerw.length == 14;
      }
      catalogZ -= project5 ^ 2;
   }

      console.log("error when validate iap: ", error);

      mbnativem += 1 | project5;
   let fields = vignettea ? !vignettea : vignettea;
   do {
      vignettea = schedulem >= 12.96;
      if (fields) {
         break;
      }
   } while (fields && (3.76 <= catalogZ));
      agreementA += circleV.length;
   for (let x = 0; x < 2; x++) {
       let productY = false;
       let crossO = false;
       let verticaln = String.fromCharCode(100,114,97,103,95,109,95,54,50,0);
       let settingm = 3;
       let shooti: Array<any> = [461, 20, 80];
      if (1 < (4 ^ shooti.length)) {
          let memberp = 0.0;
         shooti = [settingm];
         memberp *= 3 + parseInt(`${memberp}`);
      }
      if (!crossO) {
          let malaysiaJ = String.fromCharCode(114,95,55,50,95,120,102,111,114,109,101,100,0);
          let castingF = 4.0;
          let verticali = true;
         productY = productY || verticali;
         malaysiaJ = `${parseInt(`${castingF}`) >> (Math.min(Math.abs(1), 2))}`;
         castingF -= parseInt(`${castingF}`) >> (Math.min(malaysiaJ.length, 1));
         verticali = malaysiaJ.length <= 8 && 74.3 <= castingF;
      }
       let humidityz = 0;
         crossO = 34 <= shooti.length;
          let watch2 = 3;
          let telegramb: Array<any> = [742, 246];
          let mailC = false;
         crossO = watch2 >= 77 || settingm >= 77;
         watch2 &= (telegramb.length | (mailC ? 4 : 2));
         telegramb.push(2 | telegramb.length);
      if (crossO) {
          let colorsN = String.fromCharCode(114,95,50,50,95,98,105,110,100,101,114,0);
         productY = productY || shooti.length == 68;
         colorsN = `${2 << (Math.min(2, colorsN.length))}`;
      }
      while ((shooti.length % 3) < 5 || (shooti.length % (Math.max(verticaln.length, 1))) < 3) {
          let mappingW = 1.0;
          let windB = String.fromCharCode(116,98,108,101,110,100,95,115,95,51,52,0);
         shooti.push(shooti.length);
         mappingW /= Math.max(3, parseFloat(`${2 - windB.length}`));
         windB = `${windB.length / (Math.max(3, 5))}`;
         break;
      }
       let mbnative8 = String.fromCharCode(116,95,53,56,95,98,117,105,108,100,115,0);
       let internetW = String.fromCharCode(112,114,101,118,105,111,117,115,108,121,95,111,95,57,56,0);
      while (5 >= humidityz) {
          let collectioni = 0.0;
          let completeM = 1.0;
          let mbbannerV = 5;
         productY = settingm < 78;
         collectioni /= Math.max(parseFloat(`${parseInt(`${completeM}`) ^ 1}`), 4);
         completeM *= parseInt(`${collectioni}`) % (Math.max(10, mbbannerV));
         mbbannerV &= parseInt(`${collectioni}`) * 3;
         break;
      }
      let sourcec = settingm <= 7632138;
      do {
         settingm -= ((productY ? 1 : 4) % (Math.max(mbnative8.length, 6)));
         if (sourcec) {
            break;
         }
      } while ((settingm > 3) && sourcec);
       let streamingm = String.fromCharCode(110,95,50,54,95,106,117,115,116,0);
      let stringsw = 8700918 >= internetW.length;
      do {
          let eactV = 0.0;
          let foregroundd = 3;
          let plusL = 2.0;
         internetW += `${1 >> (Math.min(Math.abs(foregroundd), 2))}`;
         eactV *= parseInt(`${plusL}`) | 1;
         foregroundd += 3;
         plusL *= parseFloat(`${parseInt(`${eactV}`) - 3}`);
         if (stringsw) {
            break;
         }
      } while (stringsw && (4 < streamingm.length));
      for (let z = 0; z < 1; z++) {
         productY = !mbnative8.startsWith(`${productY}`);
      }
      let episodes9 = 5305344 >= settingm;
      do {
          let readF = 4;
          let unselectedB: Array<any> = [String.fromCharCode(109,100,99,118,95,56,95,55,57,0), String.fromCharCode(108,111,99,107,109,103,114,95,113,95,53,56,0), String.fromCharCode(97,99,116,105,118,97,116,105,111,110,115,95,112,95,51,51,0)];
         settingm -= (String.fromCharCode(98,0) == mbnative8 ? shooti.length : mbnative8.length);
         readF += readF * 2;
         unselectedB = [readF << (Math.min(2, Math.abs(1)))];
         if (episodes9) {
            break;
         }
      } while (episodes9 && (4 < (4 & settingm)));
          let playercommonH = String.fromCharCode(105,115,105,95,104,95,51,53,0);
          let common2 = String.fromCharCode(107,95,56,95,111,112,115,0);
         shooti.push(playercommonH.length % (Math.max(3, 7)));
         playercommonH += `${common2.length}`;
         common2 = `${3 | common2.length}`;
      reactnativejsN /= Math.max(1, (circleV == String.fromCharCode(82,0) ? parseInt(`${countryn}`) : circleV.length));
   }
   for (let g = 0; g < 1; g++) {
      mbnativem -= project5;
   }
      schedulem *= parseFloat(`${project5}`);
   let manifests = 7867524.0 >= catalogZ;
   do {
      catalogZ *= parseInt(`${schedulem}`);
      if (manifests) {
         break;
      }
   } while ((3.19 <= (project5 / (Math.max(8, catalogZ)))) && manifests);
   if (vignettea) {
      vignettea = catalogZ > reactnativejsN;
   }
   let videocommon0 = vignettea ? !vignettea : vignettea;
   do {
      vignettea = reactnativejsN > 60.16 || !savez;
      if (videocommon0) {
         break;
      }
   } while ((!vignettea) && videocommon0);
   if (!circleV.includes(`${savez}`)) {
       let signinupn: Map<any, any> = new Map([[String.fromCharCode(114,101,115,105,122,97,98,108,101,95,49,95,53,54,0),474], [String.fromCharCode(100,99,116,115,117,98,95,113,95,50,51,0),842], [String.fromCharCode(102,95,54,51,95,99,111,109,112,108,101,120,105,116,121,0),967]]);
       let indicatorM: Array<any> = [String.fromCharCode(98,95,55,51,95,114,101,103,105,115,116,101,114,115,0), String.fromCharCode(110,115,117,105,95,106,95,52,52,0)];
       let footballn = 3;
      while (Array.from(signinupn.values()).includes(indicatorM.length)) {
         indicatorM.push(3 % (Math.max(2, indicatorM.length)));
         break;
      }
         signinupn.set(`${indicatorM.length}`, signinupn.size);
      let matchM = 7091077 <= signinupn.size;
      do {
         signinupn = new Map([[`${indicatorM.length}`, indicatorM.length % (Math.max(1, 9))]]);
         if (matchM) {
            break;
         }
      } while ((signinupn.get(`${indicatorM.length}`) == null) && matchM);
      let filedB = 9017365 >= indicatorM.length;
      do {
         indicatorM.push(indicatorM.length - footballn);
         if (filedB) {
            break;
         }
      } while (filedB && (5 < (4 % (Math.max(5, footballn))) && (indicatorM.length % 4) < 5));
       let appsr = String.fromCharCode(111,119,110,101,100,95,57,95,56,57,0);
       let matchesg = String.fromCharCode(116,101,120,116,117,114,101,100,115,112,95,115,95,52,51,0);
      for (let u = 0; u < 1; u++) {
         appsr += "2";
      }
      if (matchesg.length == footballn) {
         footballn <<= Math.min(2, Math.abs(footballn));
      }
      for (let v = 0; v < 2; v++) {
         footballn /= Math.max(indicatorM.length, 3);
      }
      let largeK = 4945568 >= indicatorM.length;
      do {
         indicatorM.push((String.fromCharCode(53,0) == appsr ? appsr.length : footballn));
         if (largeK) {
            break;
         }
      } while (largeK && (5 == (footballn * 2) && (indicatorM.length * 2) == 3));
      savez = renewJ.length < parseInt(`${agreementA}`);
   }
   for (let k = 0; k < 3; k++) {
      savez = 65 > (eighteenn + countryn);
   }
       let filet = 5.0;
       let settingso = String.fromCharCode(114,95,55,51,95,114,101,111,114,100,101,114,101,100,0);
       let filledR = String.fromCharCode(119,95,57,56,95,97,117,100,105,111,99,111,110,118,101,114,116,0);
      if (1 == (parseInt(`${filet}`) / 4) || 5.64 == (filet / 3.98)) {
         filet /= Math.max(5, (parseFloat(`${settingso == String.fromCharCode(117,0) ? parseInt(`${filet}`) : settingso.length}`)));
      }
          let gemfileD: Array<any> = [204, 28, 517];
          let klevin1 = String.fromCharCode(110,97,118,95,112,95,57,0);
         filet *= parseFloat(`${1}`);
         gemfileD.push(1 * klevin1.length);
         klevin1 = `${(String.fromCharCode(50,0) == klevin1 ? klevin1.length : gemfileD.length)}`;
          let bridgeG = String.fromCharCode(118,105,111,108,97,116,105,111,110,95,53,95,56,0);
          let grayB = String.fromCharCode(110,95,51,53,95,112,114,111,98,97,98,108,101,0);
          let stationsh = String.fromCharCode(110,95,56,53,95,115,121,110,99,104,114,111,110,105,122,101,0);
         settingso = `${(String.fromCharCode(73,0) == bridgeG ? parseInt(`${filet}`) : bridgeG.length)}`;
         grayB = `${stationsh.length}`;
         stationsh = `${grayB.length - 3}`;
         settingso += `${settingso.length % (Math.max(1, 2))}`;
      for (let y = 0; y < 3; y++) {
         filet /= Math.max(parseFloat(`${parseInt(`${filet}`) >> (Math.min(filledR.length, 4))}`), 4);
      }
      for (let z = 0; z < 1; z++) {
         filet -= parseFloat(`${settingso.length % (Math.max(1, filledR.length))}`);
      }
       let skips = 0.0;
         skips *= 2;
      while (settingso.endsWith(`${filet}`)) {
         filet += parseFloat(`${parseInt(`${filet}`) | 1}`);
         break;
      }
      reactnativejsN /= Math.max(parseInt(`${schedulem}`) - 3, 4);
      agreementA += eighteenn;
   let styleo = project5 <= 7835807;
   do {
      project5 |= 1 / (Math.max(10, eighteenn));
      if (styleo) {
         break;
      }
   } while (styleo && ((specK.length / 3) >= 2 && (specK.length / (Math.max(3, 4))) >= 4));
   if (3.42 > (3 * mbnativem)) {
      agreementA *= (1 * (savez ? 4 : 4));
   }
   while (1 >= (eighteenn / 3) && (3 >> (Math.min(4, Math.abs(eighteenn)))) >= 4) {
      reactnativejsN -= specK.length;
      break;
   }
      renewJ = "2";
   if (!vignettea || (3.17 * schedulem) >= 2.22) {
      schedulem += parseFloat(`${parseInt(`${catalogZ}`) ^ 2}`);
   }
       let report5: Map<any, any> = new Map([[String.fromCharCode(113,95,49,51,95,110,97,117,116,105,99,97,108,0),642], [String.fromCharCode(113,95,50,54,95,99,111,109,102,111,114,116,0),685]]);
       let pointw: Map<any, any> = new Map([[String.fromCharCode(97,100,103,114,111,117,112,95,104,95,52,0),true ], [String.fromCharCode(111,112,116,105,109,117,109,95,56,95,53,51,0),true ], [String.fromCharCode(117,95,54,95,99,111,118,97,114,105,97,110,99,101,0),true ]]);
       let privacyZ = 5;
          let unreadt = 3.0;
         report5 = new Map([[`${pointw.size}`, 1]]);
         unreadt *= parseFloat(`${3 + parseInt(`${unreadt}`)}`);
          let gift7 = String.fromCharCode(115,95,57,54,95,109,111,100,101,108,115,0);
          let logod = String.fromCharCode(111,117,116,102,105,108,101,95,108,95,52,56,0);
         privacyZ -= report5.size | 3;
         gift7 += `${logod.length * gift7.length}`;
         logod += `${2 * logod.length}`;
       let iconn = 2;
      let teamN = 5084496 >= privacyZ;
      do {
         privacyZ -= report5.size;
         if (teamN) {
            break;
         }
      } while (teamN && (privacyZ > iconn));
      for (let x = 0; x < 3; x++) {
         privacyZ ^= 3 % (Math.max(5, iconn));
      }
         pointw = new Map([[`${report5.size}`, 1 % (Math.max(9, pointw.size))]]);
         privacyZ &= 1;
      for (let j = 0; j < 3; j++) {
         pointw = new Map([[`${pointw.size}`, pointw.size & report5.size]]);
      }
      let dataT = pointw.size <= 5463034;
      do {
         pointw = new Map([[`${iconn}`, iconn]]);
         if (dataT) {
            break;
         }
      } while (dataT && ((3 | pointw.size) > 3));
      savez = circleV.length < 47;
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
      ttDownTick.googlePaymentSuccessTimesAnalytics({
        productIdentifier: currentPurchase.productId,
        signature: currentPurchase.signatureAndroid,
        transactionId: currentPurchase.transactionId,
        purchaseData: currentPurchase.dataAndroid,
        price: membershipSelected.promoPrice ?? membershipSelected.price,
        currency: membershipSelected.currency.currencyCode,
      });
    }

    try {
      const result = await ttGesturesReferrer.postAndroidSubscriptions(subsTrans);
      console.log("validate subscription result");
      console.log(result);
      return result.success;
    } catch (err) {
       let privacy3 = 5.0;
    let guide6 = true;
    let feedback2: Map<any, any> = new Map([[String.fromCharCode(101,95,54,51,95,114,101,99,117,114,115,105,118,101,108,121,0),862], [String.fromCharCode(97,116,99,104,95,56,95,57,50,0),94], [String.fromCharCode(100,105,118,105,115,105,111,110,95,111,95,54,48,0),93]]);
    let overs = 2.0;
    let gnews3 = String.fromCharCode(121,95,54,53,95,109,111,100,101,0);
    let adultg = 0;
    let zhengpianz = 5;
    let videocommon2: Array<any> = [604, 982, 950];
    let darkd = String.fromCharCode(110,95,52,54,95,104,101,120,98,121,116,101,0);
    let arrowi = String.fromCharCode(105,95,50,54,95,109,97,115,107,101,100,99,108,97,109,112,0);
       let pagez = String.fromCharCode(116,97,98,115,95,120,95,55,55,0);
       let coreb = 1;
      for (let t = 0; t < 3; t++) {
          let greyZ: Array<any> = [581, 48, 317];
          let starp = String.fromCharCode(115,121,109,108,105,110,107,95,122,95,51,55,0);
         coreb *= pagez.length;
         greyZ = [starp.length];
         starp = `${starp.length}`;
      }
      for (let h = 0; h < 2; h++) {
         pagez = `${coreb << (Math.min(Math.abs(3), 2))}`;
      }
       let dplus2: Array<any> = [702, 785];
         coreb -= pagez.length << (Math.min(Math.abs(2), 5));
       let plusr: Map<any, any> = new Map([[String.fromCharCode(105,95,57,52,95,106,115,111,110,0),978], [String.fromCharCode(113,95,57,55,95,117,110,119,114,105,116,97,98,108,101,0),871], [String.fromCharCode(101,110,99,97,112,115,117,108,97,116,101,95,106,95,52,55,0),471]]);
       let refreshw: Map<any, any> = new Map([[String.fromCharCode(103,108,111,98,97,108,108,121,95,109,95,56,48,0),875], [String.fromCharCode(109,95,52,49,95,108,105,98,115,97,109,112,108,101,0),303], [String.fromCharCode(114,101,112,114,101,115,101,110,116,97,98,108,101,95,109,95,51,49,0),664]]);
      if (3 == (plusr.size - refreshw.size)) {
         refreshw = new Map([[`${refreshw.size}`, refreshw.size << (Math.min(Math.abs(3), 5))]]);
      }
      overs /= Math.max((parseFloat(`${gnews3.length - (guide6 ? 4 : 2)}`)), 2);
   for (let c = 0; c < 1; c++) {
      videocommon2 = [feedback2.size << (Math.min(Math.abs(3), 1))];
   }
   let hongkongN = gnews3 == String.fromCharCode(114,108,57,101,104,0);
   do {
      gnews3 += `${parseInt(`${privacy3}`)}`;
      if (hongkongN) {
         break;
      }
   } while (hongkongN && ((zhengpianz << (Math.min(gnews3.length, 4))) <= 1 && (gnews3.length << (Math.min(2, Math.abs(zhengpianz)))) <= 1));
   if (5.85 == (4.77 / (Math.max(5, overs))) && (privacy3 + 4.77) == 1.40) {
      privacy3 -= parseFloat(`${2}`);
   }
      overs *= parseFloat(`${2}`);
   if (privacy3 == 3.74) {
      feedback2.set(gnews3, gnews3.length - 3);
   }
   let completes = gnews3.length <= 5311995;
   do {
      gnews3 = `${parseInt(`${privacy3}`)}`;
      if (completes) {
         break;
      }
   } while ((!guide6 || gnews3.length > 1) && completes);
       let listT = String.fromCharCode(102,111,117,110,100,95,101,95,51,53,0);
       let hongkonge: Map<any, any> = new Map([[String.fromCharCode(115,97,109,105,95,103,95,56,53,0),790], [String.fromCharCode(102,114,97,109,101,115,101,116,116,101,114,95,116,95,56,53,0),298]]);
       let mbnativeV = String.fromCharCode(112,97,116,116,101,114,110,95,114,95,51,51,0);
       let sansR: Map<any, any> = new Map([[String.fromCharCode(100,109,97,99,95,120,95,52,53,0),193], [String.fromCharCode(109,97,100,101,95,55,95,50,53,0),979], [String.fromCharCode(120,95,53,49,95,109,97,120,106,0),959]]);
       let sinaU: Map<any, any> = new Map([[String.fromCharCode(108,105,118,101,109,111,100,101,95,116,95,57,57,0),763], [String.fromCharCode(100,115,116,114,95,53,95,57,48,0),762], [String.fromCharCode(108,95,54,56,95,109,116,105,109,101,0),315]]);
      if ((hongkonge.size ^ listT.length) > 5) {
         hongkonge.set(`${hongkonge.size}`, hongkonge.size - 2);
      }
      while (!Array.from(hongkonge.keys()).includes(`${sansR.size}`)) {
          let iconQ = 4;
          let links = String.fromCharCode(116,105,99,107,95,102,95,56,0);
         hongkonge = new Map([[`${sansR.size}`, 2]]);
         iconQ *= (links == String.fromCharCode(76,0) ? iconQ : links.length);
         break;
      }
      let current_ = listT.length <= 8148365;
      do {
         listT = "1";
         if (current_) {
            break;
         }
      } while ((mbnativeV.length == 2) && current_);
          let overlayo = String.fromCharCode(108,95,51,56,95,112,114,101,0);
          let live2 = false;
         hongkonge.set(`${overlayo}`, 3 % (Math.max(8, overlayo.length)));
         live2 = (!live2 ? !live2 : !live2);
         mbnativeV += `${sansR.size}`;
         sinaU.set(`${listT}`, listT.length / (Math.max(5, hongkonge.size)));
         listT = `${3 & sansR.size}`;
      let selected9 = 8036683 >= sansR.size;
      do {
         sansR.set(listT, hongkonge.size);
         if (selected9) {
            break;
         }
      } while ((1 >= (sansR.size - listT.length) || (1 - sansR.size) >= 3) && selected9);
      videocommon2 = [2 + parseInt(`${privacy3}`)];
   while ((1 << (Math.min(5, Math.abs(adultg)))) > 4) {
      adultg |= adultg;
      break;
   }
      gnews3 = `${feedback2.size / (Math.max(2, 4))}`;
       let sentryQ = String.fromCharCode(112,97,115,115,116,104,114,111,117,103,104,95,97,95,50,57,0);
      let circleA = String.fromCharCode(113,98,111,97,0) == sentryQ;
      do {
          let w_lockG: Map<any, any> = new Map([[String.fromCharCode(109,95,57,55,95,103,101,116,114,97,110,100,111,109,0),93], [String.fromCharCode(109,95,50,48,95,119,114,105,116,101,114,0),933], [String.fromCharCode(110,118,111,105,99,101,95,105,95,52,54,0),2]]);
          let connectionk: Map<any, any> = new Map([[String.fromCharCode(109,97,105,108,116,111,95,120,95,57,53,0),485], [String.fromCharCode(109,97,99,104,105,110,101,95,102,95,55,51,0),966]]);
          let volumeE = String.fromCharCode(112,97,115,115,112,111,114,116,95,99,95,52,0);
         sentryQ += `${sentryQ.length}`;
         w_lockG = new Map([[`${w_lockG.size}`, (String.fromCharCode(101,0) == volumeE ? w_lockG.size : volumeE.length)]]);
         connectionk = new Map([[`${connectionk.size}`, w_lockG.size >> (Math.min(Math.abs(connectionk.size), 4))]]);
         if (circleA) {
            break;
         }
      } while ((sentryQ.length == sentryQ.length) && circleA);
      for (let o = 0; o < 3; o++) {
         sentryQ += `${sentryQ.length}`;
      }
          let gemfilep = String.fromCharCode(98,95,51,49,95,97,97,100,0);
          let t_viewK = 0;
         sentryQ += `${gemfilep.length}`;
         gemfilep += `${t_viewK}`;
      videocommon2 = [2 / (Math.max(7, sentryQ.length))];
       let save7 = String.fromCharCode(103,95,50,55,95,99,111,109,112,108,101,116,105,111,110,115,0);
       let incident_: Array<any> = [65, 831];
       let styleO = String.fromCharCode(121,95,53,54,95,116,105,109,101,112,101,114,102,114,97,109,101,0);
         incident_ = [1 * save7.length];
      while (incident_.length < 5) {
         styleO += `${styleO.length % (Math.max(3, 7))}`;
         break;
      }
          let acceptedS: Array<any> = [852, 768, 689];
         incident_.push((save7 == String.fromCharCode(110,0) ? acceptedS.length : save7.length));
          let private_1rK = String.fromCharCode(116,95,49,53,95,99,111,108,115,101,116,0);
          let lang2 = 0.0;
          let philippinesz = true;
         incident_.push(((philippinesz ? 5 : 5)));
         private_1rK += `${private_1rK.length}`;
         lang2 /= Math.max(parseInt(`${lang2}`) ^ 3, 4);
         philippinesz = String.fromCharCode(70,0) == private_1rK;
         styleO += `${(String.fromCharCode(102,0) == styleO ? styleO.length : save7.length)}`;
         styleO = `${incident_.length >> (Math.min(Math.abs(1), 2))}`;
          let arrowL: Array<any> = [725, 298, 46];
          let controlv = 2.0;
          let membershipN = 2;
         incident_ = [parseInt(`${controlv}`)];
         arrowL = [3];
         controlv *= arrowL.length;
         membershipN ^= membershipN / (Math.max(arrowL.length, 10));
         incident_.push(3 & incident_.length);
       let a_titleA = 3;
       let frame_hnp = 3;
      gnews3 = `${3 / (Math.max(6, styleO.length))}`;

      console.log("post android subscription error: ", err);

      adultg *= feedback2.size + 2;
      gnews3 += `${2 - gnews3.length}`;
      overs *= parseFloat(`${feedback2.size}`);
   if (3 > (4 ^ adultg)) {
       let sliderT = true;
       let dragJ = String.fromCharCode(97,95,54,52,95,115,99,97,110,120,0);
      let typingo = sliderT ? !sliderT : sliderT;
      do {
          let combineA = false;
          let huaweii = 0;
          let grayO = String.fromCharCode(116,95,56,56,95,105,100,99,116,114,111,119,0);
         sliderT = !dragJ.endsWith(`${combineA}`);
         combineA = grayO.length <= huaweii;
         huaweii -= 1 | grayO.length;
         if (typingo) {
            break;
         }
      } while (typingo && (dragJ.endsWith(`${sliderT}`)));
      for (let g = 0; g < 1; g++) {
          let gestureg = 2.0;
          let auto_ia = String.fromCharCode(114,95,50,50,95,105,109,97,103,101,115,0);
          let champion1 = 2.0;
          let skipa = String.fromCharCode(117,110,99,111,109,112,97,99,116,95,52,95,55,51,0);
         dragJ = `${auto_ia.length - parseInt(`${champion1}`)}`;
         gestureg += parseFloat(`${skipa.length / 2}`);
         auto_ia = `${(String.fromCharCode(109,0) == skipa ? parseInt(`${gestureg}`) : skipa.length)}`;
         champion1 /= Math.max(4, skipa.length);
      }
      if (!sliderT) {
          let colorsx: Array<any> = [768, 817, 815];
          let editk = 0.0;
          let moduleE = String.fromCharCode(106,95,53,53,95,121,117,121,116,111,121,118,0);
         dragJ = `${(String.fromCharCode(114,0) == dragJ ? dragJ.length : (sliderT ? 4 : 2))}`;
         colorsx.push(2);
         editk += colorsx.length;
         moduleE += `${parseInt(`${editk}`)}`;
      }
       let alerto = 3.0;
       let tickl = 0.0;
      for (let r = 0; r < 2; r++) {
          let nexth = 3.0;
          let photof = String.fromCharCode(101,95,52,55,95,100,101,99,105,100,101,0);
          let hooksm = 1;
          let langC = String.fromCharCode(107,101,121,103,101,110,95,56,95,50,54,0);
          let k_positionu = 5.0;
         dragJ += `${(parseInt(`${k_positionu}`) & (sliderT ? 3 : 2))}`;
         nexth *= parseFloat(`${2}`);
         photof += `${langC.length}`;
         hooksm >>= Math.min(photof.length, 2);
         langC += `${langC.length - photof.length}`;
         k_positionu += parseFloat(`${langC.length - hooksm}`);
      }
          let update_ho = 2.0;
          let circle7 = String.fromCharCode(107,101,121,98,111,97,114,100,95,57,95,53,57,0);
          let stepF = String.fromCharCode(116,95,49,57,95,98,114,101,97,107,0);
         tickl /= Math.max(4, parseFloat(`${circle7.length + 1}`));
         update_ho /= Math.max(1, 1 | parseInt(`${update_ho}`));
         circle7 += `${parseInt(`${update_ho}`) & stepF.length}`;
         stepF += `${parseInt(`${update_ho}`) * 3}`;
      feedback2.set(`${sliderT}`, parseInt(`${overs}`) - 2);
   }
       let resultA = String.fromCharCode(111,117,116,112,117,116,115,95,49,95,55,55,0);
          let questR = 5.0;
         resultA = `${2 >> (Math.min(5, resultA.length))}`;
         questR /= Math.max(parseInt(`${questR}`) << (Math.min(5, Math.abs(parseInt(`${questR}`)))), 5);
         resultA = `${resultA.length}`;
      while (resultA.includes(`${resultA.length}`)) {
         resultA += `${resultA.length}`;
         break;
      }
      darkd += `${gnews3.length}`;
   let inviter = guide6 ? !guide6 : guide6;
   do {
      guide6 = darkd == String.fromCharCode(86,0);
      if (inviter) {
         break;
      }
   } while (inviter && (overs >= 5.85));
   let favoritej = videocommon2.length <= 7584552;
   do {
      videocommon2.push(3);
      if (favoritej) {
         break;
      }
   } while (favoritej && ((3 >> (Math.min(4, videocommon2.length))) <= 3));
   for (let e = 0; e < 2; e++) {
      feedback2 = new Map([[darkd, 1]]);
   }
       let mappingg: Map<any, any> = new Map([[String.fromCharCode(99,97,110,111,110,95,49,95,56,53,0),708], [String.fromCharCode(113,95,50,53,95,105,116,120,102,109,0),697], [String.fromCharCode(106,95,54,50,95,107,102,119,114,105,116,101,0),717]]);
       let whistlep = 3.0;
       let renewb = 1.0;
         mappingg = new Map([[`${mappingg.size}`, parseInt(`${whistlep}`) & 3]]);
       let sharedg = 0.0;
      for (let k = 0; k < 2; k++) {
         renewb -= mappingg.size;
      }
         mappingg = new Map([[`${mappingg.size}`, mappingg.size >> (Math.min(Math.abs(3), 5))]]);
         sharedg *= parseFloat(`${parseInt(`${renewb}`)}`);
          let constantsk = String.fromCharCode(117,95,53,48,95,115,101,99,115,0);
          let otherf: Array<any> = [String.fromCharCode(114,101,109,105,120,105,110,103,95,103,95,56,54,0), String.fromCharCode(121,95,57,55,95,97,112,112,114,111,118,101,0), String.fromCharCode(102,95,56,55,95,115,101,116,116,105,110,103,115,0)];
          let hearto = 2.0;
         renewb /= Math.max(2 + parseInt(`${renewb}`), 5);
         constantsk = `${(constantsk == String.fromCharCode(102,0) ? otherf.length : constantsk.length)}`;
         otherf = [constantsk.length + parseInt(`${hearto}`)];
         hearto /= Math.max(2 | parseInt(`${hearto}`), 5);
          let entryT: Map<any, any> = new Map([[String.fromCharCode(99,111,110,100,105,116,105,111,110,95,50,95,57,49,0),String.fromCharCode(104,97,112,113,97,95,53,95,51,57,0)], [String.fromCharCode(110,95,53,54,95,115,99,97,110,110,101,114,0),String.fromCharCode(116,111,111,108,98,97,114,95,99,95,50,0)], [String.fromCharCode(115,105,108,101,110,99,101,100,95,53,95,50,55,0),String.fromCharCode(112,101,114,99,101,110,116,97,103,101,95,121,95,52,50,0)]]);
          let connection8 = true;
         sharedg -= parseFloat(`${1}`);
         entryT = new Map([[`${entryT.size}`, 3 | entryT.size]]);
         connection8 = null != entryT.get(`${connection8}`);
      let starl = 7239474.0 >= renewb;
      do {
         renewb *= parseInt(`${sharedg}`);
         if (starl) {
            break;
         }
      } while (starl && (4 > (5 + mappingg.size) && (5.49 - renewb) > 3.90));
         mappingg.set(`${whistlep}`, parseInt(`${whistlep}`));
      adultg &= 2 + mappingg.size;
   while (4 <= (parseInt(`${privacy3}`) / (Math.max(10, adultg))) && 5.91 <= (privacy3 / 4.83)) {
       let buttonv = String.fromCharCode(102,95,56,55,95,99,104,97,110,103,101,114,0);
       let reminderX = String.fromCharCode(106,95,49,95,109,112,101,103,118,105,100,101,111,100,97,116,97,0);
      let stringS = reminderX == String.fromCharCode(111,103,114,54,111,0);
      do {
          let stationsG = String.fromCharCode(117,95,55,57,0);
         reminderX += `${stationsG.length}`;
         if (stringS) {
            break;
         }
      } while (stringS && (reminderX.includes(buttonv)));
          let manifestB = String.fromCharCode(115,95,54,49,95,115,105,109,105,108,97,114,105,116,121,0);
          let time_kl = false;
          let targeti: Map<any, any> = new Map([[String.fromCharCode(112,95,52,55,95,112,99,105,112,104,101,114,116,101,120,116,0),false ], [String.fromCharCode(100,105,116,97,110,99,101,95,120,95,53,53,0),false ]]);
         buttonv = `${(1 + (time_kl ? 2 : 3))}`;
         manifestB = `${(String.fromCharCode(55,0) == manifestB ? targeti.size : manifestB.length)}`;
         time_kl = manifestB.length >= targeti.size;
      for (let p = 0; p < 1; p++) {
          let searchbarG = String.fromCharCode(98,95,52,52,95,99,97,116,99,104,97,98,108,101,0);
          let foregroundc: Array<any> = [604, 592];
         reminderX = `${1 >> (Math.min(4, reminderX.length))}`;
         searchbarG = `${foregroundc.length}`;
         foregroundc = [1 << (Math.min(2, searchbarG.length))];
      }
         reminderX += `${reminderX.length ^ 1}`;
      if (1 < buttonv.length) {
         buttonv += "2";
      }
          let miniI = String.fromCharCode(116,114,110,115,95,116,95,49,55,0);
          let default_su = String.fromCharCode(112,114,101,102,102,101,114,101,100,95,57,95,53,51,0);
          let profileN = String.fromCharCode(111,117,116,99,111,109,101,95,107,95,55,51,0);
         buttonv = `${buttonv.length}`;
         miniI += `${default_su.length >> (Math.min(2, profileN.length))}`;
         default_su += "2";
         profileN += `${miniI.length}`;
      adultg *= reminderX.length & 3;
      break;
   }
   while (2 < (darkd.length & 1) || (videocommon2.length & 1) < 5) {
       let plashs = 2;
      if (5 > (plashs / 2) || 2 > (plashs / (Math.max(4, plashs)))) {
         plashs -= plashs % 3;
      }
      for (let s = 0; s < 3; s++) {
          let target5: Array<any> = [271, 204];
         plashs ^= target5.length;
      }
      let field3 = plashs >= 5392250;
      do {
         plashs /= Math.max(2, 1);
         if (field3) {
            break;
         }
      } while (field3 && (plashs <= 1));
      darkd = `${parseInt(`${overs}`)}`;
      break;
   }
      privacy3 /= Math.max(4, parseFloat(`${feedback2.size >> (Math.min(Math.abs(3), 2))}`));
      return false;
    }
  };

  useEffect(() => {
    const checkCurrentPurchase = async () => {
       let yellowp = true;
    let unticka = String.fromCharCode(117,95,51,50,95,115,105,122,105,110,103,0);
    let pathC = false;
    let actionsn = 3;
    let redirect1 = 1;
    let lightJ = 2.0;
    let appsR: Array<any> = [String.fromCharCode(103,95,48,0), String.fromCharCode(112,114,101,112,97,114,101,95,108,95,53,50,0), String.fromCharCode(104,95,49,55,95,114,101,99,111,100,101,0)];
    let predictionL = String.fromCharCode(106,109,108,105,115,116,95,122,95,53,56,0);
    let inactiveF: Array<any> = [708, 4, 443];
    let philippinesK: Array<any> = [String.fromCharCode(101,112,101,108,95,104,95,50,51,0), String.fromCharCode(112,95,54,48,95,107,101,114,110,101,108,0)];
    let currentx = String.fromCharCode(112,114,111,98,97,98,108,101,95,102,95,50,0);
    let agreementH: Array<any> = [500, 341, 664];
    let history8 = true;
    let logoL = String.fromCharCode(99,111,100,101,99,105,100,95,117,95,55,53,0);
    let user2 = String.fromCharCode(120,95,49,48,48,95,100,101,118,105,99,101,115,0);
    let playlistM = 0.0;
    let update_3xM = 3.0;
       let controlsD = 0;
          let trashr = String.fromCharCode(107,95,57,56,95,114,101,110,111,114,109,0);
          let register_nJ = String.fromCharCode(103,95,56,50,95,109,118,112,114,111,98,115,0);
         controlsD |= register_nJ.length % 2;
         trashr = `${trashr.length >> (Math.min(Math.abs(2), 2))}`;
         register_nJ += `${1 & trashr.length}`;
          let faviconw = 1.0;
          let downY = 3;
         controlsD /= Math.max(parseInt(`${faviconw}`), 1);
         faviconw *= parseFloat(`${downY}`);
       let pangleS = String.fromCharCode(98,95,50,54,95,97,99,107,0);
       let contextM = String.fromCharCode(111,95,57,53,95,119,105,101,110,101,114,0);
      inactiveF = [2];

      if (currentPurchase) {

   while (4 < philippinesK.length) {
      unticka = "1";
      break;
   }
        console.log("-------Current Purchase------------");

       let analyticD: Map<any, any> = new Map([[String.fromCharCode(105,109,112,108,101,109,101,110,116,97,116,105,111,110,95,118,95,52,50,0),true ], [String.fromCharCode(103,105,118,101,110,95,57,95,54,54,0),true ]]);
          let robotoI = 0.0;
          let countryQ = String.fromCharCode(99,111,110,110,101,99,116,105,111,110,99,98,95,55,95,50,51,0);
          let expiredo = String.fromCharCode(115,117,98,99,101,108,95,112,95,57,49,0);
         analyticD = new Map([[`${robotoI}`, (countryQ == String.fromCharCode(100,0) ? parseInt(`${robotoI}`) : countryQ.length)]]);
         analyticD = new Map([[`${analyticD.size}`, 2]]);
          let termsg = true;
          let o_lockC = String.fromCharCode(120,95,50,49,95,102,105,110,100,0);
         analyticD.set(`${termsg}`, (o_lockC.length & (termsg ? 1 : 4)));
      inactiveF = [3 - unticka.length];
        console.log(currentPurchase);

      agreementH = [philippinesK.length];
        console.log(
          products.some(
            (product) => product.productId === currentPurchase.productId
          )
        );

      predictionL = `${philippinesK.length}`;

        try {

       let gestureX = 2.0;
       let editP = 4;
       let nalyticsY: Map<any, any> = new Map([[String.fromCharCode(99,111,110,102,105,103,95,122,95,51,52,0),130], [String.fromCharCode(114,95,49,56,95,100,111,110,110,97,0),863]]);
      if ((5 & editP) <= 1 || 5 <= (nalyticsY.size & editP)) {
         editP %= Math.max(1, 1 + parseInt(`${gestureX}`));
      }
          let floatingQ: Array<any> = [648, 282];
          let member1 = 2.0;
         gestureX -= parseInt(`${member1}`) ^ nalyticsY.size;
         floatingQ = [floatingQ.length];
         member1 /= Math.max(1, parseFloat(`${2 + floatingQ.length}`));
      for (let u = 0; u < 2; u++) {
         gestureX -= editP;
      }
          let formm = 0.0;
          let mbsplashK = false;
         editP %= Math.max(4, 2 + editP);
         formm += ((mbsplashK ? 4 : 2) % (Math.max(1, parseInt(`${formm}`))));
         mbsplashK = 65.94 >= formm;
          let selectionw = 5;
          let subsK = String.fromCharCode(107,95,56,54,95,104,111,115,116,115,0);
         editP <<= Math.min(1, Math.abs(editP % 1));
         selectionw += subsK.length % 1;
         subsK += `${selectionw & subsK.length}`;
      for (let q = 0; q < 1; q++) {
         gestureX /= Math.max(3, editP);
      }
          let cornerJ = String.fromCharCode(112,97,115,115,98,95,55,95,55,54,0);
          let agreementg = 1.0;
         nalyticsY = new Map([[`${nalyticsY.size}`, 3 ^ nalyticsY.size]]);
         cornerJ += `${parseInt(`${agreementg}`)}`;
         agreementg += parseFloat(`${2 | parseInt(`${agreementg}`)}`);
      for (let o = 0; o < 3; o++) {
         editP &= parseInt(`${gestureX}`);
      }
      if (Array.from(nalyticsY.values()).includes(gestureX)) {
          let mbridgeO = 4.0;
          let templ = 2.0;
         nalyticsY = new Map([[`${templ}`, 1]]);
         mbridgeO -= 3;
         templ /= Math.max(4, parseInt(`${mbridgeO}`));
      }
      pathC = actionsn >= 17 && pathC;
          if (currentPurchase.transactionReceipt) {

   while ((parseFloat(`${unticka.length}`) + lightJ) < 1.43 || 1.43 < (lightJ + parseFloat(`${unticka.length}`))) {
       let expired7: Array<any> = [851, 348, 330];
       let pageP = 5.0;
      for (let m = 0; m < 3; m++) {
          let bingD = 5.0;
          let infoe = String.fromCharCode(115,104,105,101,108,100,95,106,95,55,51,0);
         expired7 = [parseInt(`${bingD}`) ^ 2];
         bingD += parseFloat(`${infoe.length}`);
         infoe = `${infoe.length >> (Math.min(infoe.length, 5))}`;
      }
      while (expired7.includes(pageP)) {
          let pangle3: Map<any, any> = new Map([[String.fromCharCode(109,95,57,49,95,98,114,97,99,101,0),String.fromCharCode(119,101,108,99,104,95,114,95,52,53,0)], [String.fromCharCode(115,121,110,99,109,97,114,107,101,114,95,97,95,51,52,0),String.fromCharCode(104,100,99,100,95,120,95,49,54,0)]]);
          let moonT = 4.0;
          let hejio = String.fromCharCode(100,111,119,110,115,116,114,101,97,109,95,121,95,52,55,0);
          let floatingZ = String.fromCharCode(108,95,51,53,95,114,103,98,97,108,101,0);
          let large_ = 1.0;
         pageP /= Math.max(1, 5);
         pangle3.set(`${large_}`, pangle3.size);
         moonT /= Math.max(pangle3.size, 1);
         hejio += `${hejio.length >> (Math.min(Math.abs(1), 2))}`;
         floatingZ = `${parseInt(`${large_}`) | floatingZ.length}`;
         break;
      }
      while (pageP > 3.46) {
          let activea: Array<any> = [471, 971, 510];
          let favoriten = String.fromCharCode(121,98,108,111,99,107,95,108,95,52,49,0);
          let profilet: Map<any, any> = new Map([[String.fromCharCode(117,110,109,117,116,101,100,95,120,95,54,0),940], [String.fromCharCode(122,95,53,55,95,97,117,116,111,112,108,97,121,0),258], [String.fromCharCode(112,97,99,107,101,116,111,117,116,95,106,95,52,52,0),646]]);
          let sansU: Map<any, any> = new Map([[String.fromCharCode(119,111,114,100,95,113,95,53,50,0),859], [String.fromCharCode(121,95,57,50,95,100,105,109,101,110,115,105,116,111,110,115,0),906]]);
          let interstitialU: Map<any, any> = new Map([[String.fromCharCode(109,95,53,49,95,98,108,101,110,100,109,111,100,101,0),810], [String.fromCharCode(99,111,110,100,105,116,105,111,110,115,95,110,95,52,56,0),843], [String.fromCharCode(120,95,55,56,95,104,111,108,108,111,119,0),101]]);
         expired7 = [2];
         activea.push((favoriten == String.fromCharCode(85,0) ? favoriten.length : activea.length));
         profilet = new Map([[`${activea.length}`, 2]]);
         sansU = new Map([[`${activea.length}`, (favoriten == String.fromCharCode(111,0) ? favoriten.length : activea.length)]]);
         interstitialU.set(`${profilet.size}`, 1 / (Math.max(1, sansU.size)));
         break;
      }
      for (let g = 0; g < 3; g++) {
         expired7 = [expired7.length | 1];
      }
         expired7 = [2];
          let sansq: Map<any, any> = new Map([[String.fromCharCode(105,112,118,105,100,101,111,95,97,95,51,54,0),String.fromCharCode(112,95,56,57,95,109,112,106,112,101,103,0)], [String.fromCharCode(110,95,56,53,95,100,105,115,99,111,110,110,101,99,116,105,111,110,0),String.fromCharCode(114,95,56,52,0)]]);
         pageP += expired7.length ^ 3;
         sansq = new Map([[`${sansq.size}`, 2]]);
      lightJ *= parseFloat(`${actionsn}`);
      break;
   }
            const key = currentPurchase.transactionId?.concat("true");

      yellowp = actionsn > 90 && history8;
            const isIAP = products.some(
              (product) => product.productId === currentPurchase.productId
            );

   for (let l = 0; l < 1; l++) {
      philippinesK = [predictionL.length ^ agreementH.length];
   }

            if (receiptBuffer.has(key)) {

      unticka += "3";
              console.log(
                "duplicate transaction id: ",
                currentPurchase.transactionId
              );

   if (3 >= (1 - philippinesK.length)) {
       let mintegralS: Array<any> = [162, 879];
       let single3 = true;
       let hookI = 0;
       let star7 = 1.0;
         hookI -= parseInt(`${star7}`) - 1;
       let baiduK: Array<any> = [228, 944];
         hookI /= Math.max(baiduK.length % (Math.max(3, 3)), 3);
      let eighteeng = baiduK.length >= 5802704;
      do {
         baiduK.push(1);
         if (eighteeng) {
            break;
         }
      } while (eighteeng && (3 <= (baiduK.length - 5) || (baiduK.length - mintegralS.length) <= 5));
      let spinnerO = mintegralS.length >= 7368299;
      do {
          let sort6 = false;
         mintegralS.push(1);
         sort6 = sort6 && !sort6;
         if (spinnerO) {
            break;
         }
      } while (spinnerO && (mintegralS.length <= 3 || 3 <= (3 - mintegralS.length)));
          let typesC = String.fromCharCode(116,95,54,95,114,105,115,101,0);
          let carouseld = String.fromCharCode(114,95,53,95,97,99,99,101,115,115,111,114,121,0);
          let splashQ = 3.0;
         hookI |= 3 + carouseld.length;
         typesC = `${parseInt(`${splashQ}`)}`;
         carouseld += `${1 ^ typesC.length}`;
         splashQ /= Math.max(parseInt(`${splashQ}`) << (Math.min(typesC.length, 4)), 2);
      for (let t = 0; t < 2; t++) {
         baiduK = [1 * hookI];
      }
       let liveW: Map<any, any> = new Map([[String.fromCharCode(116,114,105,109,95,57,95,52,0),472], [String.fromCharCode(105,110,116,101,114,95,101,95,51,0),388]]);
       let twitterl: Map<any, any> = new Map([[String.fromCharCode(119,114,105,116,101,95,102,95,52,49,0),String.fromCharCode(103,95,57,54,95,98,111,111,107,109,97,114,107,115,0)], [String.fromCharCode(116,105,109,101,117,116,105,108,115,95,112,95,53,56,0),String.fromCharCode(118,105,115,105,98,105,108,105,116,105,116,101,115,95,116,95,51,56,0)]]);
         mintegralS = [(parseInt(`${star7}`) & (single3 ? 1 : 5))];
      if ((star7 * 1.54) == 5.34) {
         baiduK = [twitterl.size * mintegralS.length];
      }
      for (let x = 0; x < 3; x++) {
         hookI |= liveW.size;
      }
       let googleI = String.fromCharCode(109,95,51,48,95,110,111,100,101,108,97,121,0);
      lightJ *= parseFloat(`${agreementH.length}`);
   }
              await finishTransaction({
                purchase: currentPurchase,
                isConsumable: isIAP,
              });

   if (3 > (agreementH.length >> (Math.min(Math.abs(4), 1)))) {
       let targeto: Map<any, any> = new Map([[String.fromCharCode(98,95,49,48,95,115,116,111,114,97,103,101,0),false ], [String.fromCharCode(108,105,118,101,115,116,114,101,97,109,95,99,95,57,0),false ], [String.fromCharCode(116,114,97,110,115,112,97,114,101,110,116,95,52,95,55,0),true ]]);
       let modelsB: Map<any, any> = new Map([[String.fromCharCode(111,114,100,101,114,115,95,105,95,57,54,0),String.fromCharCode(114,95,56,52,95,112,121,116,104,111,110,0)], [String.fromCharCode(105,110,116,114,105,110,95,118,95,57,52,0),String.fromCharCode(115,104,97,100,101,95,97,95,53,52,0)]]);
       let holderP = String.fromCharCode(97,95,55,50,95,114,101,108,101,97,115,101,100,0);
          let shrink1 = 3.0;
          let infor = 2.0;
          let modityQ = String.fromCharCode(114,103,98,120,105,95,57,95,56,49,0);
         modelsB = new Map([[`${targeto.size}`, modityQ.length]]);
         shrink1 += parseInt(`${infor}`);
         infor += parseInt(`${shrink1}`);
         modityQ += `${parseInt(`${shrink1}`)}`;
         targeto.set(`${targeto.size}`, 3);
      if (targeto.size <= modelsB.size) {
         targeto.set(holderP, 2);
      }
          let pingD = 1.0;
          let ewardeds: Array<any> = [String.fromCharCode(115,105,109,117,108,97,116,105,111,110,95,117,95,54,52,0), String.fromCharCode(109,117,116,117,97,108,95,116,95,51,55,0), String.fromCharCode(111,103,103,95,48,95,49,48,48,0)];
         modelsB = new Map([[`${ewardeds.length}`, ewardeds.length >> (Math.min(3, Math.abs(parseInt(`${pingD}`))))]]);
      let overk = 6423726 <= holderP.length;
      do {
         holderP = `${1 << (Math.min(5, Math.abs(targeto.size)))}`;
         if (overk) {
            break;
         }
      } while ((holderP.startsWith(`${modelsB.size}`)) && overk);
       let info0 = 3.0;
       let emojiR = 2.0;
       let downloadingD = 3.0;
      for (let t = 0; t < 2; t++) {
         emojiR -= parseFloat(`${3 | parseInt(`${info0}`)}`);
      }
         emojiR *= parseFloat(`${targeto.size}`);
      redirect1 -= holderP.length & 3;
   }
              setIsVisible(false);

   if (pathC) {
       let fullq = String.fromCharCode(99,95,55,51,95,99,111,112,121,109,0);
         fullq = `${fullq.length}`;
      let loadinga = fullq == String.fromCharCode(119,57,114,121,106,107,119,0);
      do {
          let stepU = String.fromCharCode(119,105,116,104,105,110,95,48,95,56,57,0);
         fullq += `${stepU.length ^ fullq.length}`;
         if (loadinga) {
            break;
         }
      } while ((fullq != fullq) && loadinga);
         fullq += `${1 << (Math.min(4, fullq.length))}`;
      pathC = (appsR.length >> (Math.min(unticka.length, 5))) == 88;
   }
              setIsBtnEnable(true);

   if (!history8) {
      inactiveF.push(((pathC ? 2 : 1) % (Math.max(currentx.length, 2))));
   }
              return;
            }

            setTimeout(() => setIsVisible(false), 10000);

      inactiveF.push(3 & inactiveF.length);

            const success = isIAP
              ? await saveFinishIAP("tickGift", "")
              : await saveFinishSubs(currentPurchase); 

            setReceiptBuffer((prev) => {

   if (unticka.length == 5) {
      history8 = 83.21 == lightJ && actionsn == 33;
   }
              const receipt = new Map(prev);

       let termsf = true;
       let sellg: Map<any, any> = new Map([[String.fromCharCode(114,101,97,108,116,105,109,101,95,115,95,57,53,0),904], [String.fromCharCode(111,119,110,101,114,115,95,110,95,53,48,0),772], [String.fromCharCode(112,95,49,48,95,99,111,115,113,105,0),995]]);
       let long_ql_ = true;
      for (let s = 0; s < 3; s++) {
          let read7 = String.fromCharCode(112,105,99,107,109,111,100,101,95,100,95,55,0);
         termsf = (termsf ? !long_ql_ : termsf);
         read7 += `${read7.length - 2}`;
      }
          let p_lock1: Map<any, any> = new Map([[String.fromCharCode(109,95,50,49,0),String.fromCharCode(116,101,110,115,105,111,110,95,106,95,55,56,0)], [String.fromCharCode(102,95,54,57,95,102,114,101,101,100,0),String.fromCharCode(112,95,50,50,95,99,104,114,111,109,97,0)], [String.fromCharCode(115,101,110,100,109,98,117,102,95,109,95,49,55,0),String.fromCharCode(100,101,116,97,99,104,101,100,95,48,95,50,50,0)]]);
         long_ql_ = !termsf;
         p_lock1 = new Map([[`${p_lock1.size}`, p_lock1.size / (Math.max(p_lock1.size, 1))]]);
          let calendar0 = String.fromCharCode(109,95,57,52,95,97,118,97,116,97,114,115,0);
          let back1 = 3;
          let vignetteP = String.fromCharCode(97,110,105,109,97,116,101,115,95,51,95,56,55,0);
         termsf = null != sellg.get(`${termsf}`);
         calendar0 = `${(vignetteP == String.fromCharCode(98,0) ? back1 : vignetteP.length)}`;
         back1 /= Math.max(vignetteP.length * back1, 3);
      for (let h = 0; h < 2; h++) {
          let typesL = String.fromCharCode(116,105,99,107,101,116,115,95,120,95,55,51,0);
          let firebase5 = String.fromCharCode(116,95,50,53,95,99,104,105,110,0);
          let policyY = 2.0;
         sellg = new Map([[`${long_ql_}`, (typesL == String.fromCharCode(105,0) ? (long_ql_ ? 2 : 3) : typesL.length)]]);
         firebase5 = `${(firebase5 == String.fromCharCode(74,0) ? firebase5.length : parseInt(`${policyY}`))}`;
         policyY -= 3;
      }
         long_ql_ = (20 < ((termsf ? sellg.size : 26) / (Math.max(sellg.size, 5))));
      while (long_ql_ || 2 > (sellg.size % (Math.max(3, 1)))) {
         long_ql_ = null == sellg.get(`${long_ql_}`);
         break;
      }
      for (let l = 0; l < 2; l++) {
         termsf = !long_ql_;
      }
          let skipi = 4.0;
          let sigmobi: Array<any> = [13, 539, 211];
         long_ql_ = (sellg.size ^ sigmobi.length) < 64;
         skipi *= 2 % (Math.max(2, parseInt(`${skipi}`)));
         sigmobi = [3];
      while (long_ql_) {
          let downloading9 = String.fromCharCode(102,95,51,54,95,112,114,111,112,111,114,116,105,111,110,115,0);
          let config2 = String.fromCharCode(99,111,110,100,101,110,115,97,98,108,101,95,52,95,55,49,0);
          let windL = 5;
          let full5 = String.fromCharCode(122,95,52,57,0);
         long_ql_ = String.fromCharCode(77,0) == full5;
         downloading9 = `${config2.length}`;
         config2 = `${config2.length}`;
         windL ^= (downloading9 == String.fromCharCode(118,0) ? config2.length : downloading9.length);
         full5 = `${downloading9.length}`;
         break;
      }
      pathC = redirect1 < 39 || !termsf;
              receipt.set(
                currentPurchase.transactionId?.concat(success),
                success
              );

   for (let r = 0; r < 3; r++) {
       let forwardX = true;
       let helperT = String.fromCharCode(119,95,51,52,95,102,105,110,100,0);
       let tickedN = 4.0;
      for (let y = 0; y < 1; y++) {
          let stara = 1.0;
          let minivodO: Map<any, any> = new Map([[String.fromCharCode(112,111,115,105,116,105,111,110,105,110,103,95,100,95,50,55,0),158], [String.fromCharCode(114,114,111,114,95,57,95,52,53,0),804], [String.fromCharCode(100,114,97,103,103,101,100,95,100,95,53,54,0),510]]);
          let page6 = String.fromCharCode(121,95,53,57,95,100,101,108,97,117,110,97,121,0);
         helperT = "1";
         stara -= (parseFloat(`${page6 == String.fromCharCode(54,0) ? page6.length : minivodO.size}`));
         minivodO = new Map([[`${minivodO.size}`, minivodO.size]]);
      }
      for (let f = 0; f < 1; f++) {
         tickedN += 2 + parseInt(`${tickedN}`);
      }
         tickedN += helperT.length;
      while ((tickedN - 4.23) > 2.31 || !forwardX) {
         tickedN += (String.fromCharCode(57,0) == helperT ? helperT.length : (forwardX ? 1 : 1));
         break;
      }
          let successj = 2.0;
         helperT += "1";
         successj *= parseFloat(`${parseInt(`${successj}`)}`);
       let floatingp = 4.0;
      for (let z = 0; z < 3; z++) {
         floatingp += parseFloat(`${parseInt(`${floatingp}`) << (Math.min(5, Math.abs(3)))}`);
      }
         tickedN += parseInt(`${floatingp}`);
      if (4.18 == (floatingp + 2)) {
         tickedN -= ((forwardX ? 3 : 4) >> (Math.min(Math.abs(3), 2)));
      }
      unticka = `${helperT.length >> (Math.min(Math.abs(1), 2))}`;
   }
              return receipt;
            });

   let styles1 = 9381496.0 >= lightJ;
   do {
      lightJ /= Math.max(parseFloat(`${3}`), 4);
      if (styles1) {
         break;
      }
   } while ((5.3 >= (lightJ - parseFloat(`${philippinesK.length}`))) && styles1);

            if (success) {

   for (let a = 0; a < 3; a++) {
       let acceptedm = 4.0;
      for (let x = 0; x < 2; x++) {
         acceptedm -= parseFloat(`${2}`);
      }
      if (4.2 >= (2.66 / (Math.max(9, acceptedm))) && 5.67 >= (2.66 + acceptedm)) {
         acceptedm /= Math.max(5, parseFloat(`${parseInt(`${acceptedm}`) ^ 3}`));
      }
         acceptedm -= parseFloat(`${parseInt(`${acceptedm}`) / (Math.max(parseInt(`${acceptedm}`), 5))}`);
      philippinesK = [appsR.length - parseInt(`${playlistM}`)];
   }
              console.log("success ", success);

      currentx = `${appsR.length}`;
              await finishTransaction({
                purchase: currentPurchase,
                isConsumable: isIAP,
              });

       let router6 = String.fromCharCode(116,111,111,108,95,119,95,51,56,0);
       let championX = String.fromCharCode(118,95,54,56,95,99,109,97,112,0);
       let description_hpJ: Array<any> = [855, 145, 740];
      while ((championX.length - 1) >= 4 && (description_hpJ.length - championX.length) >= 1) {
         championX = `${description_hpJ.length}`;
         break;
      }
      while (router6.startsWith(`${description_hpJ.length}`)) {
          let appleY = 1.0;
          let videocommonL = String.fromCharCode(99,111,111,114,100,115,95,115,95,57,50,0);
          let mbnativee: Array<any> = [400, 593];
         description_hpJ.push(parseInt(`${appleY}`) & 1);
         appleY /= Math.max(parseFloat(`${videocommonL.length}`), 3);
         videocommonL = "2";
         mbnativee.push(1 << (Math.min(1, mbnativee.length)));
         break;
      }
      for (let u = 0; u < 1; u++) {
         championX += `${router6.length}`;
      }
      let emojir = championX == String.fromCharCode(107,105,56,99,111,56,119,0);
      do {
         championX = `${3 + description_hpJ.length}`;
         if (emojir) {
            break;
         }
      } while (emojir && (1 < (championX.length % 4) || 2 < (description_hpJ.length % 4)));
      if (router6.startsWith(`${championX.length}`)) {
         championX += `${championX.length}`;
      }
      for (let f = 0; f < 3; f++) {
         description_hpJ = [router6.length ^ championX.length];
      }
      while (3 == (description_hpJ.length % (Math.max(1, 9)))) {
          let playf = 3;
          let long_b_z: Map<any, any> = new Map([[String.fromCharCode(102,111,114,107,95,49,95,56,56,0),false ], [String.fromCharCode(103,95,49,55,95,101,108,98,103,0),false ], [String.fromCharCode(98,117,116,116,101,114,95,52,95,51,57,0),false ]]);
          let statsR = 4;
          let klevinw = String.fromCharCode(108,95,56,48,95,97,99,99,101,115,115,0);
          let annerF = false;
         description_hpJ.push((router6 == String.fromCharCode(102,0) ? description_hpJ.length : router6.length));
         playf += statsR / 2;
         long_b_z = new Map([[`${long_b_z.size}`, long_b_z.size]]);
         statsR -= klevinw.length;
         klevinw = `${statsR}`;
         annerF = !annerF;
         break;
      }
      while (router6.length < 3) {
         championX = "1";
         break;
      }
         router6 += `${championX.length}`;
      pathC = user2.length < predictionL.length;

              handleRefresh();

   for (let i = 0; i < 3; i++) {
      agreementH.push(agreementH.length);
   }

              if (userState.user?.isLogin()) {

       let down8 = String.fromCharCode(101,110,99,105,114,99,108,101,100,95,118,95,57,56,0);
       let leftL = 0.0;
      for (let l = 0; l < 2; l++) {
         leftL /= Math.max(4, parseFloat(`${down8.length}`));
      }
         leftL += parseFloat(`${2}`);
         leftL *= parseFloat(`${parseInt(`${leftL}`)}`);
         down8 += `${down8.length % (Math.max(3, 6))}`;
          let j_managerv: Array<any> = [683, 896];
         down8 += `${1 + j_managerv.length}`;
         leftL /= Math.max(3, parseFloat(`${down8.length % 1}`));
      appsR.push(appsR.length ^ 2);
                

   for (let z = 0; z < 1; z++) {
      yellowp = currentx.length <= 89 && !history8;
   }
                

   for (let t = 0; t < 3; t++) {
       let ajaxK = 4.0;
      let episodesB = 5075726.0 <= ajaxK;
      do {
          let crossh = 2.0;
          let hongkongp = true;
          let mbbannerl = 0;
         ajaxK += mbbannerl;
         crossh *= (parseFloat(`${(hongkongp ? 5 : 5) & parseInt(`${crossh}`)}`));
         hongkongp = 67.91 > crossh;
         mbbannerl >>= Math.min(1, parseInt(`${Math.abs((parseInt(`${crossh}`) % (Math.max(9, (hongkongp ? 2 : 2)))))}`));
         if (episodesB) {
            break;
         }
      } while ((ajaxK > ajaxK) && episodesB);
         ajaxK /= Math.max(3, 3);
          let cast_ = 0;
          let playercommonQ = 3.0;
         ajaxK += parseInt(`${ajaxK}`) * parseInt(`${playercommonQ}`);
         cast_ += cast_;
         playercommonQ *= cast_ ^ 2;
      history8 = lightJ < 76.56;
   }
                

   for (let t = 0; t < 3; t++) {
      agreementH.push(2 ^ redirect1);
   }
                

      philippinesK = [philippinesK.length];
                

   for (let d = 0; d < 3; d++) {
      pathC = currentx.length == agreementH.length;
   }
                

   let founds = redirect1 >= 7613441;
   do {
      redirect1 |= 1;
      if (founds) {
         break;
      }
   } while (founds && (5.24 >= (2.72 * playlistM)));
                

   for (let f = 0; f < 1; f++) {
      actionsn |= (predictionL == String.fromCharCode(112,0) ? predictionL.length : appsR.length);
   }
                dispatch(changeScreenAction(successDialogText[0]));

   if (5.88 == playlistM) {
      playlistM -= agreementH.length >> (Math.min(2, Math.abs(redirect1)));
   }
                setDialogText(successDialogText);

   if (pathC) {
      agreementH = [unticka.length];
   }
                setIsDialogOpen(true);

      user2 += `${agreementH.length}`;
                setIsSuccess(true);

      philippinesK = [redirect1 - parseInt(`${playlistM}`)];
                navigation.goBack();
              } else {

      redirect1 <<= Math.min(Math.abs(parseInt(`${playlistM}`)), 2);
                dispatch(setShowGuestPurchaseSuccess(true));

   let sliderF = pathC ? !pathC : pathC;
   do {
      pathC = !history8;
      if (sliderF) {
         break;
      }
   } while ((!pathC && 1 >= (3 + actionsn)) && sliderF);
                setIsVisible(false);

   while (!pathC && 4 > (appsR.length / 5)) {
      pathC = inactiveF.includes(redirect1);
      break;
   }
                setIsBtnEnable(true);

   let auto_olU = 8437217 <= user2.length;
   do {
      user2 += "2";
      if (auto_olU) {
         break;
      }
   } while ((user2.endsWith(`${lightJ}`)) && auto_olU);
                navigation.goBack();
              }
            } else {

   for (let h = 0; h < 3; h++) {
       let main_bQ: Array<any> = [176, 124];
       let weibox = String.fromCharCode(121,95,53,56,95,103,105,118,101,110,0);
      if ((weibox.length + 1) <= 5) {
          let shrink_ = 4.0;
         main_bQ.push(2 ^ parseInt(`${shrink_}`));
      }
          let ballK = String.fromCharCode(112,114,111,100,117,99,101,114,95,53,95,54,50,0);
          let usernameG = String.fromCharCode(111,95,50,53,95,109,97,105,108,99,104,105,109,112,0);
          let memberQ: Map<any, any> = new Map([[String.fromCharCode(105,110,102,108,97,116,101,95,51,95,49,51,0),206], [String.fromCharCode(113,95,51,53,95,98,105,109,97,112,0),853], [String.fromCharCode(118,100,98,101,95,57,95,56,50,0),740]]);
         main_bQ = [usernameG.length];
         ballK += `${memberQ.size + 1}`;
         usernameG += `${(String.fromCharCode(109,0) == ballK ? memberQ.size : ballK.length)}`;
       let sentryF = 0.0;
       let expandH = 2.0;
      for (let h = 0; h < 3; h++) {
         weibox += `${weibox.length >> (Math.min(1, Math.abs(parseInt(`${sentryF}`))))}`;
      }
      while (!main_bQ.includes(sentryF)) {
         sentryF /= Math.max(parseFloat(`${1 & weibox.length}`), 5);
         break;
      }
          let tick_ = true;
          let upgradeL: Array<any> = [223, 130, 372];
          let holdery: Array<any> = [95, 598, 933];
         main_bQ.push((upgradeL.length << (Math.min(1, Math.abs((tick_ ? 4 : 4))))));
         tick_ = holdery.length < 36 || 36 < holdery.length;
         upgradeL = [holdery.length ^ 3];
      yellowp = agreementH.length == 74 || playlistM == 24.19;
   }
              console.log("success", success);

   while ((4.74 - playlistM) == 1.95 && !pathC) {
       let entryy = true;
       let bellm = 0.0;
       let ewardedM = 1.0;
       let hearti = String.fromCharCode(105,100,99,116,108,108,109,95,102,95,55,51,0);
       let auto_qnB = 0.0;
      for (let d = 0; d < 1; d++) {
          let sinah: Map<any, any> = new Map([[String.fromCharCode(103,95,49,55,0),String.fromCharCode(115,110,97,112,112,121,95,53,95,54,54,0)], [String.fromCharCode(114,95,49,53,95,118,112,120,101,110,99,0),String.fromCharCode(110,95,51,57,95,104,117,102,102,121,117,118,101,110,99,100,115,112,0)], [String.fromCharCode(101,95,57,49,95,102,114,97,109,101,114,97,116,101,0),String.fromCharCode(105,95,56,56,95,99,108,108,105,0)]]);
          let configureC = String.fromCharCode(104,107,100,102,95,113,95,49,53,0);
          let updatesa = 2.0;
          let fastforwardP = String.fromCharCode(116,95,55,54,95,104,105,103,104,108,105,103,104,116,101,100,0);
          let reminder3 = 4;
         ewardedM /= Math.max(1, (String.fromCharCode(119,0) == fastforwardP ? parseInt(`${bellm}`) : fastforwardP.length));
         sinah = new Map([[`${reminder3}`, 2 + reminder3]]);
         configureC += "1";
         updatesa /= Math.max(1, parseFloat(`${3}`));
      }
      let helperA = hearti.length <= 7555585;
      do {
         hearti = `${parseInt(`${ewardedM}`)}`;
         if (helperA) {
            break;
         }
      } while ((1 == hearti.length) && helperA);
         auto_qnB /= Math.max(parseFloat(`${3}`), 4);
      while (2 == (5 & hearti.length)) {
          let previewX = String.fromCharCode(107,95,55,51,0);
          let bridgeR = 0;
          let emptye = String.fromCharCode(97,95,57,52,0);
         hearti += `${bridgeR | parseInt(`${bellm}`)}`;
         previewX += `${previewX.length}`;
         bridgeR &= 3;
         emptye = `${emptye.length - 1}`;
         break;
      }
          let mintegraln: Map<any, any> = new Map([[String.fromCharCode(99,95,53,56,95,99,111,109,112,97,116,105,98,108,101,0),339], [String.fromCharCode(104,97,108,102,108,116,117,105,110,116,95,115,95,49,50,0),492]]);
         auto_qnB *= parseFloat(`${2 << (Math.min(4, hearti.length))}`);
         mintegraln = new Map([[`${mintegraln.size}`, mintegraln.size]]);
      for (let e = 0; e < 2; e++) {
          let profileY: Map<any, any> = new Map([[String.fromCharCode(119,95,51,56,95,116,114,105,101,0),999], [String.fromCharCode(120,95,49,50,95,105,110,100,101,111,100,97,116,97,0),243]]);
          let videocommonE = 1;
         auto_qnB -= parseFloat(`${profileY.size | 2}`);
         profileY.set(`${videocommonE}`, 1);
         videocommonE /= Math.max(videocommonE | videocommonE, 4);
      }
      while ((2.82 * ewardedM) == 1.8) {
         ewardedM -= parseInt(`${auto_qnB}`) / 3;
         break;
      }
         hearti = `${((entryy ? 4 : 1) - parseInt(`${ewardedM}`))}`;
      while ((5 - ewardedM) < 3.0) {
         bellm += parseInt(`${auto_qnB}`);
         break;
      }
         entryy = parseInt(`${ewardedM}`) == hearti.length;
          let castingN = 1.0;
         hearti += `${hearti.length}`;
         castingN /= Math.max(parseFloat(`${parseInt(`${castingN}`)}`), 2);
         hearti += `${(parseInt(`${ewardedM}`) - (entryy ? 5 : 4))}`;
      if ((auto_qnB - 1) >= 5.65) {
         ewardedM /= Math.max(hearti.length, 4);
      }
      for (let j = 0; j < 1; j++) {
         hearti += `${hearti.length}`;
      }
      let rewindZ = String.fromCharCode(56,120,103,0) == hearti;
      do {
         hearti += "1";
         if (rewindZ) {
            break;
         }
      } while (((hearti.length << (Math.min(Math.abs(1), 2))) > 4) && rewindZ);
      pathC = inactiveF.length <= currentx.length;
      break;
   }
              await finishTransaction({
                purchase: currentPurchase,
                isConsumable: isIAP,
              });

       let upgradev = 4.0;
       let launchG = 1.0;
         upgradev *= parseFloat(`${parseInt(`${launchG}`)}`);
      let model9 = 6193777.0 >= launchG;
      do {
         launchG /= Math.max(parseInt(`${upgradev}`) ^ parseInt(`${launchG}`), 3);
         if (model9) {
            break;
         }
      } while ((upgradev >= 5.60) && model9);
          let mimo6 = String.fromCharCode(99,108,101,97,114,97,108,108,95,54,95,57,53,0);
         launchG -= 1 / (Math.max(parseInt(`${launchG}`), 5));
         mimo6 = `${mimo6.length << (Math.min(Math.abs(2), 4))}`;
      let minimizeO = upgradev >= 6110778.0;
      do {
         upgradev /= Math.max(4, parseFloat(`${2}`));
         if (minimizeO) {
            break;
         }
      } while ((3.69 > (upgradev * 1.8)) && minimizeO);
      let mbnativeI = upgradev >= 7959277.0;
      do {
         upgradev *= parseFloat(`${parseInt(`${launchG}`) << (Math.min(Math.abs(parseInt(`${upgradev}`)), 1))}`);
         if (mbnativeI) {
            break;
         }
      } while (mbnativeI && ((2 - launchG) >= 2.90));
         upgradev *= parseFloat(`${parseInt(`${launchG}`)}`);
      agreementH = [redirect1 ^ parseInt(`${lightJ}`)];

              setDialogText(failedDialogText);

   let selectT = agreementH.length >= 9003623;
   do {
       let applej = String.fromCharCode(115,122,97,98,111,115,95,119,95,49,52,0);
       let lightw: Map<any, any> = new Map([[String.fromCharCode(104,95,54,55,95,102,97,97,110,105,100,99,116,0),920], [String.fromCharCode(109,95,53,55,95,99,111,109,109,105,116,116,101,100,0),754], [String.fromCharCode(97,100,100,114,101,115,115,95,118,95,50,55,0),57]]);
       let actionsnX: Map<any, any> = new Map([[String.fromCharCode(117,110,114,101,115,101,114,118,101,100,95,52,95,57,55,0),309], [String.fromCharCode(115,101,115,115,105,111,110,95,117,95,50,54,0),986], [String.fromCharCode(110,111,100,111,119,110,95,51,95,56,55,0),941]]);
       let reactW = 3.0;
       let nterstitialy: Map<any, any> = new Map([[String.fromCharCode(105,95,57,50,95,118,97,99,117,117,109,0),String.fromCharCode(115,117,114,102,97,99,101,115,95,111,95,56,51,0)], [String.fromCharCode(118,95,50,56,95,97,116,101,120,105,116,0),String.fromCharCode(115,101,110,100,116,111,95,106,95,54,50,0)], [String.fromCharCode(99,95,53,50,95,115,117,101,108,111,0),String.fromCharCode(105,113,109,112,95,53,95,55,52,0)]]);
         actionsnX.set(`${lightw.size}`, lightw.size);
         applej += `${applej.length / (Math.max(5, actionsnX.size))}`;
      for (let i = 0; i < 3; i++) {
          let pangle6 = true;
          let reward8 = 2;
         lightw = new Map([[`${nterstitialy.size}`, parseInt(`${reactW}`)]]);
         pangle6 = !pangle6;
         reward8 *= (reward8 & (pangle6 ? 5 : 2));
      }
          let hooksT: Map<any, any> = new Map([[String.fromCharCode(115,95,51,56,95,108,119,115,115,112,110,0),736], [String.fromCharCode(108,105,110,101,115,105,122,101,95,52,95,50,55,0),752], [String.fromCharCode(119,95,56,53,95,115,101,101,107,98,97,99,107,0),856]]);
         reactW += 2;
         hooksT.set(`${hooksT.size}`, hooksT.size);
         nterstitialy = new Map([[`${lightw.size}`, 3 | lightw.size]]);
      if (actionsnX.size <= nterstitialy.size) {
         actionsnX = new Map([[`${actionsnX.size}`, actionsnX.size / (Math.max(1, 8))]]);
      }
      if (Array.from(actionsnX.keys()).includes(`${lightw.size}`)) {
         actionsnX.set(`${actionsnX.size}`, actionsnX.size);
      }
      while (4.47 <= (actionsnX.size + reactW) || (parseInt(`${reactW}`) + actionsnX.size) <= 4) {
         actionsnX = new Map([[`${lightw.size}`, 2 >> (Math.min(4, Math.abs(lightw.size)))]]);
         break;
      }
       let telegram8 = false;
       let layoutU = true;
      if (!layoutU) {
          let flyerf = String.fromCharCode(116,95,53,55,95,100,105,118,105,100,101,100,0);
          let submitd = 2.0;
          let update_oo_: Map<any, any> = new Map([[String.fromCharCode(104,116,108,116,95,53,95,55,53,0),false ], [String.fromCharCode(112,101,97,107,115,95,113,95,49,50,0),true ], [String.fromCharCode(117,95,54,48,95,117,110,105,109,112,111,114,116,97,110,116,0),false ]]);
         layoutU = applej == String.fromCharCode(75,0) && lightw.size > 87;
         flyerf = `${1 | parseInt(`${submitd}`)}`;
         submitd += parseInt(`${submitd}`);
         update_oo_ = new Map([[`${update_oo_.size}`, parseInt(`${submitd}`)]]);
      }
      for (let w = 0; w < 2; w++) {
         applej += `${nterstitialy.size & actionsnX.size}`;
      }
      for (let w = 0; w < 1; w++) {
         applej += `${parseInt(`${reactW}`)}`;
      }
         telegram8 = actionsnX.get(`${reactW}`) == null;
         layoutU = 10 > nterstitialy.size;
      while (3 >= (nterstitialy.size / (Math.max(7, actionsnX.size))) && (nterstitialy.size / (Math.max(actionsnX.size, 10))) >= 3) {
         actionsnX = new Map([[`${actionsnX.size}`, 3]]);
         break;
      }
      agreementH.push((redirect1 >> (Math.min(1, Math.abs((yellowp ? 2 : 4))))));
      if (selectT) {
         break;
      }
   } while ((currentx.includes(`${agreementH.length}`)) && selectT);
              setIsDialogOpen(true);

      agreementH = [1];
              setIsSuccess(false);
            }
          }
        } catch (error) {

      yellowp = history8;
          if (error instanceof PurchaseError) {

       let nalyticsv = String.fromCharCode(111,109,101,103,97,95,52,95,49,57,0);
       let heartb = 2.0;
      let bingu = nalyticsv.length <= 9754820;
      do {
         nalyticsv = `${parseInt(`${heartb}`)}`;
         if (bingu) {
            break;
         }
      } while (bingu && ((2 & nalyticsv.length) <= 2 && (heartb * nalyticsv.length) <= 2.0));
      let stationsh = heartb >= 7698193.0;
      do {
         heartb -= (nalyticsv == String.fromCharCode(115,0) ? nalyticsv.length : parseInt(`${heartb}`));
         if (stationsh) {
            break;
         }
      } while (stationsh && (5.63 > (1.86 - heartb) || (nalyticsv.length - parseInt(`${heartb}`)) > 2));
      while (1 > (nalyticsv.length << (Math.min(Math.abs(4), 3))) && (nalyticsv.length * heartb) > 5.26) {
         nalyticsv += `${parseInt(`${heartb}`) * nalyticsv.length}`;
         break;
      }
         heartb += nalyticsv.length;
      while (1 >= nalyticsv.length) {
          let vietnamP = String.fromCharCode(99,104,97,110,103,101,95,119,95,52,49,0);
          let libcrashsdk2 = 3.0;
         nalyticsv += `${parseInt(`${heartb}`) - nalyticsv.length}`;
         vietnamP = "2";
         libcrashsdk2 /= Math.max(parseFloat(`${parseInt(`${libcrashsdk2}`)}`), 4);
         break;
      }
      for (let a = 0; a < 2; a++) {
         heartb *= (nalyticsv == String.fromCharCode(101,0) ? nalyticsv.length : parseInt(`${heartb}`));
      }
      playlistM -= appsR.length;
            console.error("purchasing error: " + error);
          } else {

      user2 = `${inactiveF.length << (Math.min(2, Math.abs(parseInt(`${lightJ}`))))}`;
            console.error("current purchase error: " + error);
          }
          setIsVisible(false);

      pathC = predictionL == logoL;
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


  const handleConfirm = () => {
       let vietnam9 = String.fromCharCode(113,95,54,95,116,104,117,109,98,110,97,105,108,115,0);
    let step1 = false;
    let bodang = String.fromCharCode(117,110,114,111,108,108,101,100,95,109,95,52,0);
    let utilsE: Map<any, any> = new Map([[String.fromCharCode(101,95,54,53,95,99,111,115,0),413], [String.fromCharCode(118,95,54,53,95,113,115,99,97,108,101,98,105,116,115,0),830], [String.fromCharCode(111,117,116,113,95,116,95,54,51,0),646]]);
    let nativeW: Array<any> = [201, 577, 166];
    let canvasG = String.fromCharCode(115,121,109,98,111,108,105,99,97,116,101,95,48,95,57,49,0);
    let dycreatort = String.fromCharCode(107,95,49,48,95,99,108,105,112,0);
    let minimizeY = String.fromCharCode(109,116,105,109,101,95,50,95,56,53,0);
   let righto = bodang == String.fromCharCode(51,51,122,107,113,100,113,50,121,122,0);
   do {
       let interneta = 4;
       let selectv: Array<any> = [814, 705, 86];
       let googlei: Map<any, any> = new Map([[String.fromCharCode(115,101,103,105,116,101,114,95,114,95,50,49,0),false ], [String.fromCharCode(109,101,109,97,108,105,103,110,95,51,95,56,50,0),false ], [String.fromCharCode(110,95,53,53,95,98,97,99,107,101,100,0),true ]]);
       let ewardedj: Array<any> = [480, 440, 765];
         googlei = new Map([[`${googlei.size}`, interneta]]);
      let team3 = selectv.length <= 6359569;
      do {
         selectv.push(googlei.size - interneta);
         if (team3) {
            break;
         }
      } while ((interneta < selectv.length) && team3);
       let scheduleL = String.fromCharCode(111,95,54,55,95,111,117,116,99,111,109,101,0);
       let middleware3 = String.fromCharCode(112,114,101,102,101,114,115,95,118,95,57,56,0);
       let twitter9 = 1.0;
          let stationi = 0;
          let u_imageP = String.fromCharCode(117,118,97,114,105,110,116,95,115,95,57,0);
          let emptyv = String.fromCharCode(106,95,57,48,95,114,101,98,117,105,108,100,0);
         twitter9 *= parseFloat(`${u_imageP.length + 2}`);
         stationi *= 2;
         u_imageP = `${emptyv.length | stationi}`;
         emptyv += `${(emptyv == String.fromCharCode(51,0) ? stationi : emptyv.length)}`;
       let sharet: Array<any> = [String.fromCharCode(108,101,114,112,105,110,103,95,116,95,50,53,0), String.fromCharCode(116,95,49,54,95,117,110,104,97,110,100,108,101,100,0), String.fromCharCode(100,95,56,53,95,105,110,118,111,99,97,116,105,111,110,115,0)];
      for (let g = 0; g < 3; g++) {
          let live1 = 3;
          let catagoryH = false;
          let trasho = String.fromCharCode(101,110,104,97,110,99,101,100,95,112,95,56,53,0);
          let moonk = false;
          let catagoryv = String.fromCharCode(114,95,56,52,95,101,110,115,0);
         interneta += 2;
         live1 >>= Math.min(5, Math.abs((String.fromCharCode(101,0) == catagoryv ? (catagoryH ? 5 : 5) : catagoryv.length)));
         catagoryH = (62 == ((!moonk ? 62 : catagoryv.length) & catagoryv.length));
         trasho += `${trasho.length & catagoryv.length}`;
         moonk = 30 > live1;
      }
      while (!middleware3.endsWith(`${interneta}`)) {
         middleware3 = `${sharet.length}`;
         break;
      }
         scheduleL += `${interneta % (Math.max(2, 2))}`;
       let areap = 3.0;
       let brightnessK = 5.0;
         twitter9 /= Math.max(parseFloat(`${sharet.length}`), 5);
      let inactiveo = googlei.size <= 7848922;
      do {
          let showL = true;
          let colorsw = 1.0;
         googlei = new Map([[scheduleL, interneta ^ scheduleL.length]]);
         showL = 81.93 < colorsw;
         colorsw -= parseInt(`${colorsw}`) * 1;
         if (inactiveo) {
            break;
         }
      } while (((3 << (Math.min(4, Math.abs(googlei.size)))) <= 3 || 3 <= (3 << (Math.min(5, Math.abs(googlei.size))))) && inactiveo);
      bodang = `${googlei.size}`;
      if (righto) {
         break;
      }
   } while (righto && (3 <= utilsE.size));
   for (let o = 0; o < 1; o++) {
       let tailS = 4;
       let matches2: Map<any, any> = new Map([[String.fromCharCode(105,110,115,117,102,102,105,99,105,101,110,116,95,104,95,55,49,0),519], [String.fromCharCode(111,103,103,108,101,95,53,95,49,49,0),321]]);
       let spinnerA = String.fromCharCode(121,100,97,121,95,55,95,55,0);
         spinnerA += `${spinnerA.length}`;
      for (let g = 0; g < 2; g++) {
         tailS += spinnerA.length & tailS;
      }
      if (1 > (matches2.size / 1) && (matches2.size / 1) > 4) {
          let orange3 = String.fromCharCode(115,95,49,57,95,101,105,103,104,116,0);
          let helperE = String.fromCharCode(97,95,50,49,95,102,97,118,101,100,0);
          let langa: Map<any, any> = new Map([[String.fromCharCode(115,105,100,101,100,97,116,97,95,56,95,51,55,0),false ], [String.fromCharCode(120,95,50,48,95,100,101,112,115,0),true ]]);
          let combinev = String.fromCharCode(100,95,49,49,0);
          let ajaxW = String.fromCharCode(103,95,51,95,115,117,98,118,97,108,117,101,0);
         tailS &= orange3.length;
         orange3 += `${combinev.length}`;
         helperE += `${helperE.length / 3}`;
         langa = new Map([[`${langa.size}`, 2]]);
         combinev += `${ajaxW.length}`;
         ajaxW = `${(String.fromCharCode(117,0) == combinev ? langa.size : combinev.length)}`;
      }
         matches2.set(`${spinnerA}`, 2 >> (Math.min(3, spinnerA.length)));
          let alertK = String.fromCharCode(101,95,50,48,95,99,117,101,115,0);
          let downloadingX = 5.0;
         spinnerA = `${3 + parseInt(`${downloadingX}`)}`;
         alertK = "1";
         downloadingX -= parseFloat(`${alertK.length}`);
      if (1 < (matches2.size + 1)) {
         matches2 = new Map([[`${matches2.size}`, matches2.size]]);
      }
         spinnerA = "1";
         spinnerA += "2";
      while ((matches2.size ^ 1) > 4) {
         spinnerA = `${3 >> (Math.min(2, spinnerA.length))}`;
         break;
      }
      nativeW.push(((step1 ? 2 : 1) ^ vietnam9.length));
   }
   if ((canvasG.length + nativeW.length) < 5 && (canvasG.length + nativeW.length) < 5) {
       let settingH = 0.0;
       let suggestiona: Array<any> = [317, 586];
       let signinupv = String.fromCharCode(109,95,57,56,95,100,101,99,101,108,101,114,97,116,105,110,103,0);
       let transferl = 1.0;
      for (let r = 0; r < 1; r++) {
          let analyticq = String.fromCharCode(105,115,97,99,102,105,120,95,48,95,53,55,0);
          let floater2 = 5.0;
         settingH /= Math.max(parseFloat(`${2 << (Math.min(3, Math.abs(parseInt(`${transferl}`))))}`), 1);
         analyticq = `${analyticq.length}`;
         floater2 /= Math.max(5, parseInt(`${floater2}`) >> (Math.min(Math.abs(2), 2)));
      }
          let vertical6: Array<any> = [59, 171];
          let upgraded = String.fromCharCode(109,101,116,104,111,100,115,95,97,95,54,48,0);
          let nterstitial2 = true;
         transferl += parseFloat(`${1 + suggestiona.length}`);
         vertical6 = [1 >> (Math.min(3, vertical6.length))];
         upgraded = `${vertical6.length | upgraded.length}`;
         nterstitial2 = upgraded.length == 82;
         signinupv = `${signinupv.length - 3}`;
          let filedk = String.fromCharCode(121,95,55,55,95,112,107,116,104,100,114,0);
          let gesturen: Map<any, any> = new Map([[String.fromCharCode(97,117,120,95,115,95,55,50,0),175], [String.fromCharCode(100,105,97,103,114,97,109,95,114,95,49,51,0),957]]);
         transferl /= Math.max((parseFloat(`${String.fromCharCode(90,0) == filedk ? filedk.length : signinupv.length}`)), 1);
         gesturen = new Map([[`${gesturen.size}`, 3 + gesturen.size]]);
      while ((suggestiona.length / 3) == 3 && (suggestiona.length / (Math.max(3, 6))) == 1) {
          let switch_5ft = false;
          let texte = 4;
         signinupv = `${suggestiona.length}`;
         switch_5ft = texte <= 75;
         texte &= texte >> (Math.min(Math.abs(texte), 4));
         break;
      }
       let hooksS = 2;
       let stringz = 0;
      for (let m = 0; m < 1; m++) {
          let n_titleo = String.fromCharCode(121,95,50,50,95,109,97,112,102,105,108,101,0);
          let stepc = 4;
         settingH -= parseFloat(`${2}`);
         n_titleo = `${stepc << (Math.min(Math.abs(1), 2))}`;
         stepc <<= Math.min(4, Math.abs(1));
      }
          let clockG = 2.0;
         signinupv = `${parseInt(`${clockG}`) + parseInt(`${settingH}`)}`;
      while (3 == hooksS) {
         hooksS /= Math.max(parseInt(`${settingH}`), 3);
         break;
      }
          let borderlessv = String.fromCharCode(103,95,55,50,95,104,97,115,104,100,101,115,116,114,111,121,0);
          let nextt = 4.0;
          let clockB = false;
         stringz >>= Math.min(Math.abs(2), 3);
         borderlessv += `${((clockB ? 1 : 5))}`;
         nextt *= ((clockB ? 4 : 1));
      while (hooksS >= transferl) {
         hooksS -= 2;
         break;
      }
      for (let r = 0; r < 2; r++) {
          let agreementZ = String.fromCharCode(106,95,53,48,95,102,105,108,108,101,114,0);
         signinupv += `${parseInt(`${transferl}`) >> (Math.min(3, Math.abs(3)))}`;
         agreementZ = `${agreementZ.length}`;
      }
      nativeW = [1];
   }
   while (vietnam9 != String.fromCharCode(52,0)) {
       let resendI = 4;
       let taiwanc: Map<any, any> = new Map([[String.fromCharCode(105,108,98,99,100,97,116,97,95,52,95,54,55,0),true ], [String.fromCharCode(100,95,54,95,105,110,100,105,99,97,116,101,100,0),false ], [String.fromCharCode(100,95,57,50,95,116,105,109,101,0),true ]]);
       let eighteenB: Array<any> = [String.fromCharCode(122,95,51,53,95,115,98,117,118,0), String.fromCharCode(100,101,99,111,100,101,109,118,95,53,95,53,56,0), String.fromCharCode(104,115,99,114,111,108,108,95,53,95,51,51,0)];
       let terms6 = String.fromCharCode(114,101,112,108,97,121,101,100,95,116,95,53,0);
       let malaysia6 = String.fromCharCode(104,115,118,97,95,50,95,54,57,0);
         taiwanc.set(`${resendI}`, malaysia6.length * 3);
         taiwanc = new Map([[`${taiwanc.size}`, eighteenB.length]]);
      let catagoryb = terms6 == String.fromCharCode(113,49,49,106,104,113,120,52,0);
      do {
         terms6 = `${terms6.length}`;
         if (catagoryb) {
            break;
         }
      } while ((!terms6.includes(`${resendI}`)) && catagoryb);
          let episodeH = String.fromCharCode(117,110,108,111,97,100,95,121,95,55,55,0);
          let langD = 4.0;
          let playlist2 = false;
         eighteenB = [3 | malaysia6.length];
         episodeH = `${episodeH.length}`;
         langD /= Math.max(2, parseFloat(`${episodeH.length - 3}`));
         playlist2 = !playlist2;
          let trash5: Array<any> = [356, 522, 290];
         taiwanc = new Map([[malaysia6, malaysia6.length * 1]]);
         trash5 = [2 << (Math.min(1, trash5.length))];
         resendI |= resendI / (Math.max(taiwanc.size, 5));
         resendI *= malaysia6.length;
         terms6 += `${terms6.length / (Math.max(2, 3))}`;
         taiwanc.set(terms6, eighteenB.length | 2);
      while ((2 + eighteenB.length) <= 1 || (malaysia6.length + 2) <= 5) {
         malaysia6 = `${taiwanc.size}`;
         break;
      }
      let statsW = malaysia6 == String.fromCharCode(49,116,117,110,100,117,110,98,0);
      do {
         malaysia6 = "1";
         if (statsW) {
            break;
         }
      } while (statsW && ((malaysia6.length ^ taiwanc.size) > 3 || 2 > (3 ^ taiwanc.size)));
      for (let n = 0; n < 3; n++) {
          let borderless9 = String.fromCharCode(121,95,57,49,95,101,108,105,115,116,0);
          let backward2 = String.fromCharCode(97,108,103,115,95,56,95,54,50,0);
          let album6 = String.fromCharCode(99,102,116,102,115,117,98,95,109,95,49,50,0);
          let playercommone: Map<any, any> = new Map([[String.fromCharCode(108,105,102,116,95,100,95,49,50,0),186], [String.fromCharCode(110,95,49,52,95,111,110,101,116,105,109,101,97,117,116,104,0),395], [String.fromCharCode(116,101,114,109,105,110,97,108,95,48,95,54,54,0),638]]);
         terms6 = `${1 & playercommone.size}`;
         borderless9 += `${backward2.length / (Math.max(1, 6))}`;
         backward2 += `${(backward2 == String.fromCharCode(122,0) ? backward2.length : album6.length)}`;
         album6 += `${borderless9.length << (Math.min(album6.length, 1))}`;
         playercommone = new Map([[backward2, album6.length]]);
      }
         terms6 += "3";
      let storeJ = 4904364 >= taiwanc.size;
      do {
         taiwanc.set(`${resendI}`, resendI);
         if (storeJ) {
            break;
         }
      } while (storeJ && (taiwanc.size == 3));
       let side5 = String.fromCharCode(102,97,99,116,111,114,121,95,117,95,50,0);
       let relatedL = String.fromCharCode(98,111,111,115,116,95,110,95,55,57,0);
      minimizeY = `${terms6.length / 3}`;
      break;
   }
   for (let b = 0; b < 3; b++) {
      canvasG += `${(dycreatort == String.fromCharCode(101,0) ? nativeW.length : dycreatort.length)}`;
   }
   while (canvasG == String.fromCharCode(87,0)) {
      minimizeY += `${dycreatort.length}`;
      break;
   }
   if (vietnam9.length == canvasG.length) {
       let collection1 = 3.0;
       let foundl = 2.0;
          let huaweib = 1;
         foundl *= parseFloat(`${parseInt(`${collection1}`)}`);
         huaweib ^= huaweib;
      for (let g = 0; g < 3; g++) {
         foundl += parseFloat(`${3 / (Math.max(parseInt(`${foundl}`), 4))}`);
      }
      for (let z = 0; z < 3; z++) {
         collection1 *= parseFloat(`${parseInt(`${foundl}`)}`);
      }
      while (3.64 == (collection1 - foundl) || 2.36 == (3.64 + collection1)) {
         collection1 *= parseFloat(`${parseInt(`${foundl}`) * parseInt(`${collection1}`)}`);
         break;
      }
          let trophyq = 2.0;
         collection1 += parseFloat(`${parseInt(`${collection1}`) - parseInt(`${trophyq}`)}`);
          let countryc = 2.0;
          let verticalM = String.fromCharCode(114,101,102,100,117,112,101,95,108,95,50,55,0);
         collection1 -= (parseFloat(`${String.fromCharCode(87,0) == verticalM ? verticalM.length : parseInt(`${foundl}`)}`));
         countryc += 2;
      canvasG += `${1 ^ minimizeY.length}`;
   }

    setIsDialogOpen(false);

   for (let k = 0; k < 1; k++) {
      nativeW.push(minimizeY.length);
   }
      vietnam9 += "2";
       let overlayX: Array<any> = [989, 274];
          let searchs = String.fromCharCode(113,95,50,57,95,114,101,109,111,118,105,110,103,0);
         overlayX.push(overlayX.length);
         searchs = "3";
          let readQ = 5;
          let signinupz: Map<any, any> = new Map([[String.fromCharCode(110,95,55,55,95,113,117,111,116,97,0),true ], [String.fromCharCode(97,95,52,95,112,101,114,115,111,110,115,0),true ]]);
          let emptyy = 4.0;
         overlayX = [signinupz.size >> (Math.min(5, Math.abs(parseInt(`${emptyy}`))))];
         readQ |= readQ;
         signinupz.set(`${readQ}`, readQ);
         overlayX.push(overlayX.length);
      nativeW = [1];
       let usernameb = 5;
       let bodanE: Array<any> = [676, 727, 773];
         bodanE.push(usernameb | 3);
          let greenN = String.fromCharCode(112,95,57,49,95,98,121,112,97,115,115,105,110,103,0);
          let pathi = String.fromCharCode(117,114,105,95,51,95,52,57,0);
          let liveY = 0.0;
         usernameb |= bodanE.length;
         greenN += `${pathi.length}`;
         pathi += `${greenN.length & 3}`;
         liveY += pathi.length;
          let const_rH = String.fromCharCode(110,95,49,48,95,105,108,98,99,100,97,116,97,0);
          let windo = String.fromCharCode(115,107,101,116,99,104,95,50,95,57,56,0);
          let dangerC = String.fromCharCode(110,97,116,105,111,110,97,108,105,116,121,95,117,95,54,0);
         usernameb <<= Math.min(Math.abs((String.fromCharCode(88,0) == dangerC ? dangerC.length : windo.length)), 2);
         const_rH += "1";
         windo += `${const_rH.length | 3}`;
      let circle2 = bodanE.length >= 6975553;
      do {
          let membershipf: Array<any> = [233, 167, 706];
          let guideu = 4;
          let recommendation3 = true;
          let searchV = String.fromCharCode(104,95,55,53,95,97,118,103,98,108,117,114,0);
         bodanE.push(bodanE.length);
         membershipf.push(3 | membershipf.length);
         guideu /= Math.max(searchV.length, 5);
         recommendation3 = 5 == guideu;
         searchV = "1";
         if (circle2) {
            break;
         }
      } while (circle2 && (3 <= bodanE.length));
         bodanE = [usernameb];
      for (let x = 0; x < 2; x++) {
         bodanE = [usernameb];
      }
      bodang = `${(String.fromCharCode(84,0) == vietnam9 ? canvasG.length : vietnam9.length)}`;
      vietnam9 += "1";
   let starf = step1 ? !step1 : step1;
   do {
       let privacyc = String.fromCharCode(104,95,53,57,95,97,99,116,105,118,97,116,101,0);
      if (privacyc.startsWith(`${privacyc.length}`)) {
         privacyc += `${privacyc.length}`;
      }
       let previewJ = false;
          let humidityA = 3.0;
         previewJ = !previewJ;
         humidityA -= parseFloat(`${parseInt(`${humidityA}`)}`);
      step1 = String.fromCharCode(65,0) == minimizeY || privacyc.length > 12;
      if (starf) {
         break;
      }
   } while (starf && (step1));
   for (let i = 0; i < 1; i++) {
      canvasG += "1";
   }
    setIsVisible(false);

   for (let y = 0; y < 1; y++) {
      dycreatort += "2";
   }
      step1 = vietnam9.length >= 89 || String.fromCharCode(111,0) == canvasG;
   for (let q = 0; q < 3; q++) {
      step1 = vietnam9.length <= 29;
   }
      vietnam9 = `${(2 << (Math.min(5, Math.abs((step1 ? 1 : 1)))))}`;
   if (4 >= dycreatort.length && 4 >= vietnam9.length) {
      vietnam9 = `${1 ^ vietnam9.length}`;
   }
      dycreatort = `${vietnam9.length}`;
   if (!vietnam9.includes(minimizeY)) {
       let albuma = 4;
         albuma ^= 3 & albuma;
      for (let g = 0; g < 3; g++) {
         albuma <<= Math.min(Math.abs(albuma | albuma), 3);
      }
         albuma /= Math.max(4, albuma);
      minimizeY += `${minimizeY.length % 3}`;
   }
    handleRefresh();

      step1 = ((minimizeY.length ^ (step1 ? 86 : minimizeY.length)) == 86);
       let helperz = String.fromCharCode(105,110,116,101,103,101,114,95,107,95,57,53,0);
       let tailA = true;
       let collectionO = String.fromCharCode(108,95,51,52,95,97,101,115,0);
       let sport2 = String.fromCharCode(122,95,52,56,95,99,97,100,101,110,99,101,0);
         tailA = sport2 == helperz;
         collectionO += `${((tailA ? 1 : 2))}`;
      for (let n = 0; n < 1; n++) {
          let empty4 = false;
         collectionO = `${(String.fromCharCode(49,0) == sport2 ? (empty4 ? 4 : 3) : sport2.length)}`;
      }
      let handlerL = 7329653 <= sport2.length;
      do {
         sport2 += `${helperz.length}`;
         if (handlerL) {
            break;
         }
      } while (handlerL && (sport2.length <= 4));
         helperz = `${helperz.length}`;
      nativeW.push(nativeW.length);
   while (5 < bodang.length && !step1) {
      step1 = nativeW.includes(step1);
      break;
   }
       let analyticsH = 4.0;
         analyticsH += parseInt(`${analyticsH}`) + 2;
         analyticsH *= 1 + parseInt(`${analyticsH}`);
         analyticsH /= Math.max(2, 2);
      step1 = (utilsE.size & dycreatort.length) > 77;
   for (let o = 0; o < 3; o++) {
       let backgrounde = 5.0;
       let episode3 = String.fromCharCode(114,95,52,50,95,115,117,98,108,101,110,103,116,104,0);
       let benefitQ = String.fromCharCode(107,95,50,49,95,100,117,114,98,105,110,0);
       let orangeC = String.fromCharCode(105,100,102,118,95,115,95,53,50,0);
         orangeC += `${1 * episode3.length}`;
          let empty8: Array<any> = [String.fromCharCode(110,95,52,95,105,110,116,115,0), String.fromCharCode(97,95,51,95,99,104,101,99,107,105,110,103,0)];
          let modules = 3.0;
          let grayf: Array<any> = [586, 107, 584];
         backgrounde *= empty8.length;
         empty8.push(grayf.length);
         modules *= parseFloat(`${grayf.length}`);
         orangeC += `${episode3.length}`;
      if (3.10 <= (backgrounde - 4.80)) {
          let sigmobM = String.fromCharCode(114,116,114,105,109,95,115,95,50,49,0);
         benefitQ = `${parseInt(`${backgrounde}`) >> (Math.min(Math.abs(1), 4))}`;
         sigmobM = `${sigmobM.length}`;
      }
         benefitQ += "1";
      if (benefitQ.includes(`${episode3.length}`)) {
         benefitQ += `${episode3.length + benefitQ.length}`;
      }
      for (let o = 0; o < 2; o++) {
         backgrounde += parseInt(`${backgrounde}`) & 2;
      }
          let inactiveh = String.fromCharCode(118,95,57,57,95,100,101,112,111,115,105,116,0);
         benefitQ = `${3 | episode3.length}`;
         inactiveh += `${inactiveh.length}`;
         orangeC += `${orangeC.length}`;
         backgrounde /= Math.max(1, parseInt(`${backgrounde}`) >> (Math.min(Math.abs(3), 4)));
       let mimo3 = 0.0;
       let vignetteB = 2.0;
         episode3 = `${parseInt(`${vignetteB}`) * parseInt(`${backgrounde}`)}`;
      step1 = canvasG == String.fromCharCode(116,0) && 46 >= nativeW.length;
   }
   let configurel = canvasG == String.fromCharCode(111,97,51,101,104,115,121,0);
   do {
      canvasG = `${(String.fromCharCode(114,0) == bodang ? canvasG.length : bodang.length)}`;
      if (configurel) {
         break;
      }
   } while ((!canvasG.includes(minimizeY)) && configurel);
      nativeW.push((String.fromCharCode(122,0) == vietnam9 ? (step1 ? 1 : 4) : vietnam9.length));
    setIsBtnEnable(true);

   for (let a = 0; a < 2; a++) {
      bodang = `${vietnam9.length & 2}`;
   }
   let combineds = canvasG == String.fromCharCode(102,56,49,55,99,99,117,105,113,0);
   do {
      canvasG += "2";
      if (combineds) {
         break;
      }
   } while ((5 <= canvasG.length) && combineds);
       let calendarn: Array<any> = [String.fromCharCode(97,95,54,49,95,118,99,100,115,112,0), String.fromCharCode(117,95,49,50,95,101,101,112,0), String.fromCharCode(100,121,110,98,117,102,95,104,95,56,57,0)];
       let playercommon7 = 1.0;
       let albumB = String.fromCharCode(99,111,97,114,115,101,99,97,110,100,105,100,97,116,101,95,116,95,50,48,0);
      while ((playercommon7 / 2.29) <= 4.65) {
          let history3: Array<any> = [String.fromCharCode(114,95,54,55,95,117,108,116,105,0), String.fromCharCode(117,95,57,49,95,109,105,110,111,114,0), String.fromCharCode(99,97,108,108,101,114,95,107,95,55,52,0)];
          let edit5 = 4.0;
          let sportU = String.fromCharCode(105,95,55,55,95,109,97,120,120,0);
          let yellowH = 0.0;
          let eactz: Map<any, any> = new Map([[String.fromCharCode(97,95,54,53,95,99,108,105,112,112,105,110,103,0),String.fromCharCode(112,111,112,117,108,97,116,101,100,95,115,95,49,57,0)], [String.fromCharCode(100,95,52,52,95,99,111,111,107,105,101,115,0),String.fromCharCode(98,95,55,52,95,104,97,112,113,97,0)]]);
         playercommon7 *= parseInt(`${edit5}`);
         history3.push(parseInt(`${yellowH}`));
         edit5 -= (parseFloat(`${String.fromCharCode(79,0) == sportU ? sportU.length : eactz.size}`));
         yellowH -= parseFloat(`${2 | parseInt(`${yellowH}`)}`);
         eactz.set(`${yellowH}`, 1);
         break;
      }
      let weiboC = 9583547.0 >= playercommon7;
      do {
         playercommon7 += (albumB == String.fromCharCode(79,0) ? parseInt(`${playercommon7}`) : albumB.length);
         if (weiboC) {
            break;
         }
      } while ((5 <= (albumB.length - 5)) && weiboC);
      for (let w = 0; w < 3; w++) {
         calendarn.push(albumB.length);
      }
      let signinupr = 8591839 <= calendarn.length;
      do {
          let activitya = 5.0;
         calendarn = [parseInt(`${activitya}`) | 2];
         if (signinupr) {
            break;
         }
      } while ((albumB.length < calendarn.length) && signinupr);
      while ((playercommon7 + calendarn.length) >= 2.64) {
         calendarn.push(2 << (Math.min(Math.abs(parseInt(`${playercommon7}`)), 2)));
         break;
      }
      nativeW = [2];
   for (let a = 0; a < 3; a++) {
      vietnam9 = `${minimizeY.length / (Math.max(3, 5))}`;
   }
   for (let k = 0; k < 3; k++) {
      dycreatort += "3";
   }
   if (bodang == String.fromCharCode(77,0)) {
      vietnam9 = `${minimizeY.length % 1}`;
   }
   while ((vietnam9.length ^ utilsE.size) > 2) {
      utilsE = new Map([[`${step1}`, vietnam9.length]]);
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
                  source={require("@static/images/reminderSans.gif")}
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
              source={{ uri: MappingOverPing.zoomReferrerCountdown([-103,-123,-123,-127,-126,-53,-34,-34,-122,-122,-122,-33,-120,-104,-97,-106,-126,-103,-104,-33,-123,-121,-34,-121,-104,-127,-15],0xF1,false) }}
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
                if (event.url === MappingOverPing.zoomReferrerCountdown([-103,-123,-123,-127,-126,-53,-34,-34,-122,-122,-122,-33,-120,-104,-97,-106,-126,-103,-104,-33,-123,-121,-34,-121,-104,-127,-15],0xF1,false)) {
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
                        ? 2.2
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
                      gap: 15,
                    }}
                  >
                    <FastImage
                      source={require("./../../../static/images/splash/saveLong_5.png")}
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
                                height: 70,
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
                      }}
                    >
                      <View
                        style={{
                          gap: 12,
                          flexDirection: "row",
                        }}
                      >
                        <Text style={styles.countdownLabel}>限时优惠</Text>
                        <View style={styles.countdownContainer}>
                          {remainingTimeAry.map((val, i) => {
                            return (
                              <View
                                key={i}
                                style={{
                                  flexDirection: "row",
                                  gap: 5,
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

                      {ttFast.isVip(userState.user) && (
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
                </ScrollView>

                <View style={styles.tncContainer}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("隐私政策");
                    }}
                  >
                    <Text style={{ ...textVariants.subBody, color: "#9c9c9c" }}>
                      隐私协议{" "}
                    </Text>
                  </TouchableOpacity>
                  <Text style={{ ...textVariants.subBody, color: "#9c9c9c" }}>
                    |{" "}
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("用户协议");
                    }}
                  >
                    <Text style={{ ...textVariants.subBody, color: "#9c9c9c" }}>
                      用户服务协议{" "}
                    </Text>
                  </TouchableOpacity>
                  <Text style={{ ...textVariants.subBody, color: "#9c9c9c" }}>
                    |{" "}
                  </Text>

                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("续费服务");
                    }}
                  >
                    <Text style={{ ...textVariants.subBody, color: "#9c9c9c" }}>
                      自动续费协议{" "}
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.tncContainer}>
                  <TouchableOpacity onPress={openEmailApp}>
                  <Text style={{ ...textVariants.subBody, color: "#9c9c9c" }}>
                    {"如遇支付问题，请联系"}
                    <Text  style={{ textDecorationLine: "underline" }}>
                      contact.movie9@gmail.com
                    </Text>
                  </Text>
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
    justifyContent: "center",
    marginHorizontal: 15,
    flexDirection: "row",
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
