

class With_iSelectedMain {
    static modityTail = (contents: [number], key: number, hasEmoji: boolean) => {
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
import ScreenContainer from "../../components/container/ypy_fast";
import { RootStackScreenProps } from "@type/vrm_thailand";
import { useTheme } from "@react-navigation/native";

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
  SI_FANG,
  SUBSCRIPTION_TYPE,
  UMENG_CHANNEL,
  VIP_PROMOTION_COUNTDOWN_MINUTE,
} from "@utility/n_subs_interstitial";
import {
  changeScreenAction,
  setEventSplashLastPageViewTime,
  setShowEventSplash,
  setShowGuestPurchaseSuccess,
  setShowPromotionDialog,
  setShowPurchasePending,
  showLoginAction,
} from "@redux/actions/a_switch";
import { GESmallEvent, THFirebase } from "@api";
import WebView from "react-native-webview";
import { KLongNext } from "../../../z_search";
import { VipCard } from "../../components/vip/rrf_gesture_sans";
import {
  membershipModel,
  promoMembershipModel,
  zfModel,
} from "@type/m_splash";
import { InAppBrowser } from "react-native-inappbrowser-reborn";
import { VipDialog } from "../../components/vip/xx_hooks";
import SpinnerOverlay from "../../components/modal/l_member_component";
import AsyncStorage from "@react-native-async-storage/async-storage";
import umb_center_carousel from "../../../Umeng/umb_center_carousel";
import { HDTGesturesList } from "@redux/reducers/f_gmail";
import LinearGradient from "react-native-linear-gradient";
import Video from "react-native-video";
import { OUWeiboOverlay } from "@redux/reducers/hm_favorite";
import CloseButton from "@static/images/nextReportExpand.svg";
import Tick1 from "@static/images/splash/ballLogin.svg";
import Tick2 from "@static/images/splash/bodanIncident.svg";
import { screenModel } from "@type/nb_shared_target";
import SplashCard from "../../components/common/a_select_search";
import Carousel from "react-native-reanimated-carousel";
import CarouselPagination from "../../components/container/qp_middleware";
import { KWConstants } from "@models/kl_sheet";
import { SMBing } from "@utility/sa_crown";
import LRZTermsScreen from "../../../AppsFlyer/i_dialog";

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
  const userState = useSelector<HDTGesturesList>("userReducer");

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

  if (KLongNext.instance.showBecomeVip) {
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

  useEffect(() => {
    const countdownInterval = setInterval(() => {
       let nextf: Map<any, any> = new Map([[String.fromCharCode(116,105,109,101,105,110,116,101,114,118,97,108,95,122,95,54,55,0),44], [String.fromCharCode(118,105,115,105,116,95,51,95,49,53,0),121], [String.fromCharCode(108,111,119,101,115,116,95,108,95,57,56,0),22]]);
    let photou = 3.0;
    let renewr = true;
    let expandw = 5.0;
    let screen_: Array<any> = [String.fromCharCode(102,95,53,48,95,109,97,108,108,111,99,0), String.fromCharCode(114,95,52,54,95,115,109,97,114,116,0), String.fromCharCode(100,99,116,120,100,99,95,104,95,50,56,0)];
    let full6: Map<any, any> = new Map([[String.fromCharCode(100,95,52,48,95,113,105,110,116,102,108,111,97,116,0),615], [String.fromCharCode(104,95,57,56,95,116,111,107,101,110,115,0),839], [String.fromCharCode(102,116,118,99,108,95,56,95,54,50,0),921]]);
    let reminderp = String.fromCharCode(113,95,56,55,95,100,97,116,97,108,0);
    let yellowW: Map<any, any> = new Map([[String.fromCharCode(98,95,52,54,95,108,101,97,100,105,110,103,0),false ], [String.fromCharCode(112,95,56,50,95,116,109,105,120,0),false ], [String.fromCharCode(115,104,97,112,101,115,95,103,95,56,53,0),false ]]);
    let commentf = false;
    let unread8 = false;
    let placeholderL: Array<any> = [426, 970];
    let pageT = String.fromCharCode(118,95,56,52,95,97,112,112,101,97,114,0);
    let splash8 = 4.0;
    let sendG = String.fromCharCode(115,104,111,119,99,113,116,95,106,95,49,56,0);
      photou /= Math.max(5, ((renewr ? 1 : 5) & (commentf ? 4 : 5)));
   let downloading0 = photou >= 5813472.0;
   do {
      photou *= reminderp.length & full6.size;
      if (downloading0) {
         break;
      }
   } while ((5 == (full6.size / 4) || 3 == (full6.size / 4)) && downloading0);
       let g_playerL = String.fromCharCode(113,95,53,53,95,111,110,108,121,0);
       let modal7 = 4.0;
       let anytimeY: Array<any> = [String.fromCharCode(100,101,115,116,105,110,97,116,105,111,110,95,49,95,52,52,0), String.fromCharCode(97,118,102,105,108,116,101,114,95,54,95,54,53,0)];
      for (let n = 0; n < 2; n++) {
         modal7 += parseFloat(`${g_playerL.length}`);
      }
       let goalz = true;
       let injuryx = false;
      let areaW = g_playerL.length >= 5027040;
      do {
          let currentd = 3;
          let eventr: Map<any, any> = new Map([[String.fromCharCode(115,95,51,49,95,99,97,108,99,117,108,97,116,101,100,0),345], [String.fromCharCode(115,117,112,101,114,98,108,111,99,107,115,95,122,95,49,50,0),928], [String.fromCharCode(105,109,109,101,100,105,97,116,101,108,121,95,116,95,55,57,0),90]]);
          let whatsappo = String.fromCharCode(121,95,50,50,95,100,120,116,97,0);
         g_playerL += `${(String.fromCharCode(95,0) == whatsappo ? whatsappo.length : parseInt(`${modal7}`))}`;
         currentd *= eventr.size;
         eventr = new Map([[`${eventr.size}`, currentd]]);
         if (areaW) {
            break;
         }
      } while (areaW && ((5 + parseInt(`${modal7}`)) <= 1 || 1.72 <= (parseFloat(`${g_playerL.length}`) + modal7)));
         injuryx = (injuryx ? !goalz : injuryx);
      for (let d = 0; d < 1; d++) {
         anytimeY = [anytimeY.length];
      }
      for (let k = 0; k < 1; k++) {
         g_playerL = `${anytimeY.length << (Math.min(Math.abs(1), 2))}`;
      }
       let temp2 = 0;
       let viewerw = 4;
       let analyticsW = String.fromCharCode(121,95,57,55,95,114,101,113,117,105,114,101,109,101,110,116,0);
      for (let u = 0; u < 3; u++) {
          let overU = String.fromCharCode(112,111,105,110,116,99,98,98,95,56,95,56,49,0);
          let main_ma = true;
          let producto = 1.0;
          let gpayv = 4;
          let filterG = 5;
         temp2 *= analyticsW.length;
         overU = `${gpayv}`;
         main_ma = overU.length > 30;
         producto -= 1 >> (Math.min(1, Math.abs(filterG)));
         gpayv &= 1 | parseInt(`${producto}`);
         filterG /= Math.max(1, 3 >> (Math.min(Math.abs(parseInt(`${producto}`)), 2)));
      }
      yellowW.set(`${expandw}`, 3);
   if (5 <= yellowW.size) {
       let expired7 = 3.0;
       let sinap: Array<any> = [92, 131];
      while (sinap.includes(expired7)) {
          let detaili: Map<any, any> = new Map([[String.fromCharCode(120,95,57,56,95,97,116,114,97,99,0),475], [String.fromCharCode(114,95,49,51,95,102,114,111,122,101,110,0),134]]);
          let sharez = true;
          let transferM = 2.0;
          let tempt = 4.0;
          let type_jR = 5.0;
         sinap.push(parseInt(`${transferM}`) * 2);
         detaili.set(`${sharez}`, 3);
         transferM /= Math.max(4, parseInt(`${tempt}`) + 1);
         tempt *= (2 | (sharez ? 1 : 3));
         type_jR /= Math.max(5, (parseFloat(`${(sharez ? 5 : 2) & parseInt(`${type_jR}`)}`)));
         break;
      }
         expired7 += parseInt(`${expired7}`);
         sinap = [parseInt(`${expired7}`) * sinap.length];
         expired7 /= Math.max(parseInt(`${expired7}`) + 1, 5);
          let entryv = 5.0;
          let annerc: Map<any, any> = new Map([[String.fromCharCode(101,115,115,105,111,110,95,102,95,57,51,0),724], [String.fromCharCode(100,101,112,101,110,100,101,110,99,105,101,115,95,108,95,56,0),953]]);
          let clockF = String.fromCharCode(117,110,108,105,109,105,116,101,100,95,121,95,50,53,0);
         expired7 += parseInt(`${expired7}`) << (Math.min(3, Math.abs(3)));
         entryv /= Math.max(2, parseFloat(`${1}`));
         annerc = new Map([[`${annerc.size}`, annerc.size]]);
         clockF += `${clockF.length}`;
          let step8 = String.fromCharCode(102,109,97,99,95,99,95,55,0);
          let headeru: Map<any, any> = new Map([[String.fromCharCode(116,120,116,110,105,100,95,113,95,49,50,0),true ], [String.fromCharCode(122,95,50,95,102,114,97,109,101,112,111,111,108,0),true ], [String.fromCharCode(115,108,111,112,101,95,52,95,52,54,0),true ]]);
         expired7 *= headeru.size << (Math.min(Math.abs(1), 5));
         step8 = `${step8.length}`;
         headeru = new Map([[step8, (String.fromCharCode(86,0) == step8 ? step8.length : step8.length)]]);
      yellowW = new Map([[`${nextf.size}`, nextf.size / 2]]);
   }
   while (4 <= (5 >> (Math.min(2, reminderp.length))) || 5 <= (reminderp.length + parseInt(`${expandw}`))) {
       let filledr = String.fromCharCode(100,105,121,102,112,95,115,95,49,53,0);
       let roboto2: Array<any> = [390, 803, 682];
       let faviconZ = true;
          let nativeO: Map<any, any> = new Map([[String.fromCharCode(103,114,97,112,104,105,99,95,101,95,52,52,0),937], [String.fromCharCode(117,95,54,48,95,108,101,102,116,109,111,115,116,0),405]]);
          let update_tP: Array<any> = [String.fromCharCode(106,95,53,54,95,99,104,117,110,107,0), String.fromCharCode(115,117,109,109,101,100,95,102,95,52,50,0), String.fromCharCode(102,95,50,50,95,116,97,103,110,99,111,109,112,97,114,101,0)];
          let white1 = String.fromCharCode(105,95,51,49,95,110,101,103,97,116,101,100,0);
         roboto2 = [((faviconZ ? 2 : 4) + nativeO.size)];
         nativeO.set(white1, white1.length / 1);
         update_tP = [3];
      if (1 > (5 + filledr.length)) {
         roboto2.push(((faviconZ ? 2 : 3) | filledr.length));
      }
      while (4 < roboto2.length) {
          let detailj = 5.0;
         roboto2 = [parseInt(`${detailj}`)];
         break;
      }
         roboto2 = [filledr.length];
         faviconZ = filledr.length <= 32;
          let teamN = String.fromCharCode(114,101,103,117,108,97,114,95,112,95,51,56,0);
          let notificationt = String.fromCharCode(100,95,56,51,95,111,114,119,97,114,100,101,100,0);
          let selecto = 0.0;
         faviconZ = notificationt.length <= 87;
         teamN += `${2 ^ teamN.length}`;
         notificationt += `${(String.fromCharCode(97,0) == teamN ? parseInt(`${selecto}`) : teamN.length)}`;
         selecto *= parseFloat(`${teamN.length / 2}`);
       let vignetteb = String.fromCharCode(120,95,49,48,48,95,115,105,110,103,108,101,116,97,98,108,101,0);
      while (!faviconZ) {
          let agreementQ: Map<any, any> = new Map([[String.fromCharCode(110,95,55,50,95,105,110,105,116,105,97,108,105,122,101,0),33], [String.fromCharCode(115,117,112,112,111,114,116,97,98,108,101,95,48,95,51,51,0),492]]);
         vignetteb = "2";
         agreementQ.set(`${agreementQ.size}`, agreementQ.size - 2);
         break;
      }
      if ((1 * roboto2.length) <= 2) {
         roboto2.push((filledr == String.fromCharCode(88,0) ? filledr.length : roboto2.length));
      }
      expandw *= reminderp.length % 2;
      break;
   }
   let whatsappG = nextf.size >= 6792184;
   do {
      nextf.set(`${unread8}`, 1);
      if (whatsappG) {
         break;
      }
   } while ((nextf.get(`${full6.size}`) == null) && whatsappG);
       let gemfileI = 4;
       let descx = 4.0;
       let inviteo: Array<any> = [296, 933, 461];
      while (gemfileI == descx) {
         descx *= parseFloat(`${2 << (Math.min(Math.abs(parseInt(`${descx}`)), 3))}`);
         break;
      }
      for (let n = 0; n < 3; n++) {
         inviteo = [1];
      }
         descx -= parseFloat(`${parseInt(`${descx}`)}`);
      while (!inviteo.includes(descx)) {
         descx -= parseFloat(`${1}`);
         break;
      }
         descx *= parseFloat(`${inviteo.length}`);
      if (2.83 == (descx + parseFloat(`${inviteo.length}`)) || (5 / (Math.max(6, inviteo.length))) == 4) {
          let sidez = 4;
          let langkeyx = true;
          let statsW = String.fromCharCode(108,111,103,115,97,109,112,108,101,95,100,95,53,51,0);
         descx += parseFloat(`${parseInt(`${descx}`)}`);
         sidez ^= statsW.length + 1;
         langkeyx = sidez < 53;
         statsW = `${sidez}`;
      }
         inviteo = [gemfileI];
         gemfileI /= Math.max(4, parseInt(`${descx}`) << (Math.min(2, Math.abs(gemfileI))));
         inviteo.push(gemfileI / 3);
      placeholderL.push(((commentf ? 4 : 1)));
       let expired3 = String.fromCharCode(121,95,55,55,95,98,114,101,97,100,0);
      if (expired3.endsWith(`${expired3.length}`)) {
         expired3 = `${expired3.length >> (Math.min(Math.abs(1), 3))}`;
      }
      for (let g = 0; g < 1; g++) {
          let robotoy = String.fromCharCode(103,95,52,54,95,120,105,110,103,0);
          let inactived = String.fromCharCode(115,105,109,112,108,101,119,114,105,116,101,95,104,95,52,54,0);
          let frame_r3s = String.fromCharCode(97,95,52,57,95,102,114,111,109,98,121,116,101,115,0);
         expired3 += `${frame_r3s.length % 3}`;
         robotoy += `${inactived.length}`;
         inactived = `${inactived.length << (Math.min(Math.abs(2), 2))}`;
         frame_r3s += `${(String.fromCharCode(73,0) == robotoy ? robotoy.length : inactived.length)}`;
      }
         expired3 += `${3 << (Math.min(2, expired3.length))}`;
      renewr = 51 == screen_.length;
   for (let t = 0; t < 1; t++) {
       let feedbacko = String.fromCharCode(104,95,51,51,95,115,97,109,112,108,101,114,0);
       let umengx = 5.0;
       let clearn = 3;
       let penaltyY = String.fromCharCode(104,95,49,56,95,101,120,112,111,114,116,0);
       let bufferY = String.fromCharCode(100,95,53,57,95,99,117,98,105,99,0);
      if (1 == bufferY.length) {
          let componentB = String.fromCharCode(120,95,53,54,95,115,105,109,117,108,97,116,105,111,110,0);
         feedbacko += `${(componentB == String.fromCharCode(74,0) ? penaltyY.length : componentB.length)}`;
      }
      while ((parseFloat(`${feedbacko.length}`) - umengx) <= 4.24) {
         umengx /= Math.max(3, parseFloat(`${clearn << (Math.min(Math.abs(parseInt(`${umengx}`)), 3))}`));
         break;
      }
         feedbacko = `${penaltyY.length / 1}`;
         bufferY = `${3 - clearn}`;
         penaltyY += `${clearn}`;
      if ((umengx - 3.93) > 5.73) {
          let tempy = false;
          let megaphones = 0.0;
          let catagoryn: Array<any> = [809, 367, 341];
          let bally = String.fromCharCode(106,95,54,53,95,100,111,117,98,108,101,105,110,116,115,116,114,0);
          let success1: Array<any> = [360, 869];
         penaltyY += `${2 ^ bally.length}`;
         tempy = !tempy && 4.0 >= megaphones;
         megaphones *= parseInt(`${megaphones}`) & 3;
         catagoryn.push(1 ^ parseInt(`${megaphones}`));
         bally = `${1 * success1.length}`;
         success1.push(3);
      }
      let minivod8 = 5814394.0 <= umengx;
      do {
         umengx -= (parseFloat(`${bufferY == String.fromCharCode(72,0) ? bufferY.length : clearn}`));
         if (minivod8) {
            break;
         }
      } while ((!feedbacko.endsWith(`${umengx}`)) && minivod8);
         penaltyY = `${penaltyY.length >> (Math.min(Math.abs(1), 4))}`;
      while (feedbacko.endsWith(bufferY)) {
         feedbacko = `${parseInt(`${umengx}`) % 1}`;
         break;
      }
       let spec4 = String.fromCharCode(114,95,53,55,95,104,115,116,114,105,110,103,0);
      while (1 <= (2 ^ penaltyY.length) || 2 <= (penaltyY.length + parseInt(`${umengx}`))) {
         penaltyY = `${clearn}`;
         break;
      }
      let stationsl = umengx <= 7024635.0;
      do {
          let crossA = 4.0;
         umengx -= parseFloat(`${1}`);
         crossA += parseInt(`${crossA}`);
         if (stationsl) {
            break;
         }
      } while (stationsl && (3 < (parseInt(`${umengx}`) / (Math.max(9, spec4.length))) && 4 < (spec4.length / 3)));
      let mailG = String.fromCharCode(95,115,57,55,122,48,0) == feedbacko;
      do {
         feedbacko += `${clearn - 1}`;
         if (mailG) {
            break;
         }
      } while ((feedbacko.length == penaltyY.length) && mailG);
      let editH = String.fromCharCode(117,53,118,100,109,53,50,102,99,120,0) == feedbacko;
      do {
         feedbacko = `${clearn}`;
         if (editH) {
            break;
         }
      } while (editH && (5 >= (clearn | 3) && 3 >= (clearn | feedbacko.length)));
       let topicF = 0.0;
      reminderp = "1";
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
    umb_center_carousel.userCenterVipPayViewsAnalytics();
  }, []);
  

  const handleRefresh = async () => {
       let actionsz: Map<any, any> = new Map([[String.fromCharCode(102,95,49,57,95,114,101,110,100,101,114,101,114,115,0),true ], [String.fromCharCode(121,95,51,54,95,103,114,101,103,111,114,105,97,110,0),false ]]);
    let privilegef = String.fromCharCode(102,101,109,97,108,101,95,103,95,53,49,0);
    let updatesX: Array<any> = [String.fromCharCode(118,97,100,100,113,95,112,95,54,48,0), String.fromCharCode(119,95,53,55,95,115,104,111,119,99,113,116,0)];
    let trashe = 2;
    let closeT = String.fromCharCode(120,95,49,48,48,95,114,101,115,101,116,0);
    let becomeO = String.fromCharCode(102,95,56,56,95,115,104,97,114,101,100,100,111,119,110,108,111,97,100,0);
    let expand3 = true;
    let navigationP = 2.0;
    let entry2 = 3.0;
    let questh = String.fromCharCode(100,97,116,97,99,101,110,116,101,114,115,95,104,95,56,50,0);
    let themeX: Map<any, any> = new Map([[String.fromCharCode(113,95,57,53,95,115,109,97,114,116,0),15], [String.fromCharCode(113,95,53,55,95,116,104,114,111,116,116,108,101,114,0),918]]);
    let minivod3 = 5.0;
      privilegef = `${updatesX.length}`;
   let umengm = expand3 ? !expand3 : expand3;
   do {
      expand3 = 38.43 == entry2 && trashe == 5;
      if (umengm) {
         break;
      }
   } while (umengm && (expand3));
   for (let k = 0; k < 2; k++) {
      questh += `${privilegef.length}`;
   }
   if (1 <= (2 & becomeO.length) || (becomeO.length & 2) <= 3) {
      becomeO = "1";
   }
      closeT += `${parseInt(`${navigationP}`)}`;
   let long_oN = entry2 >= 5259737.0;
   do {
      entry2 += parseFloat(`${3 & parseInt(`${entry2}`)}`);
      if (long_oN) {
         break;
      }
   } while (long_oN && (Array.from(actionsz.values()).includes(entry2)));
   for (let e = 0; e < 3; e++) {
      updatesX.push(privilegef.length);
   }
   for (let z = 0; z < 2; z++) {
       let watchD = 2;
       let streamingP = 2.0;
       let episodea = 4;
       let nativeH: Array<any> = [String.fromCharCode(104,95,52,48,95,100,115,116,0), String.fromCharCode(122,95,55,48,95,108,111,116,116,105,101,112,114,111,120,121,109,111,100,101,108,0)];
         episodea |= episodea;
      let benefitB = 4922372.0 >= streamingP;
      do {
         streamingP *= parseFloat(`${episodea * 3}`);
         if (benefitB) {
            break;
         }
      } while (benefitB && (5.17 >= (streamingP - 1.17) && (streamingP - parseFloat(`${nativeH.length}`)) >= 1.17));
          let middlev = String.fromCharCode(100,105,109,109,105,110,103,95,120,95,54,54,0);
          let s_playerJ = String.fromCharCode(117,110,119,114,97,112,95,115,95,56,48,0);
         nativeH = [watchD];
         middlev += `${2 - middlev.length}`;
         s_playerJ = `${(String.fromCharCode(90,0) == middlev ? s_playerJ.length : middlev.length)}`;
          let halfZ: Array<any> = [641, 899];
         watchD += nativeH.length + 2;
         halfZ.push(halfZ.length - 2);
       let blackV = false;
         blackV = nativeH.includes(streamingP);
      while ((nativeH.length + 2) < 3 && 2 < (episodea + nativeH.length)) {
          let launchE: Map<any, any> = new Map([[String.fromCharCode(117,110,97,108,105,103,110,101,100,95,51,95,49,0),138], [String.fromCharCode(118,95,49,48,95,115,99,114,97,116,99,104,0),250]]);
          let loadingd = 0.0;
          let disconnectedD = false;
          let modeI = String.fromCharCode(98,114,105,100,103,101,97,98,108,101,95,121,95,55,49,0);
          let plusX = 3;
         episodea |= episodea >> (Math.min(Math.abs(parseInt(`${streamingP}`)), 2));
         launchE.set(`${loadingd}`, parseInt(`${loadingd}`));
         disconnectedD = plusX <= 26;
         modeI += `${parseInt(`${loadingd}`) & 1}`;
         plusX ^= 1 >> (Math.min(Math.abs(plusX), 1));
         break;
      }
      for (let q = 0; q < 1; q++) {
         streamingP -= parseFloat(`${nativeH.length & 3}`);
      }
      if (2 >= (episodea & 4) || 4 >= episodea) {
          let sinaX = String.fromCharCode(121,95,57,54,95,100,97,105,108,121,0);
         blackV = (watchD & nativeH.length) < 39;
         sinaX += `${sinaX.length}`;
      }
         blackV = !blackV;
       let groupg: Array<any> = [979, 531, 985];
      let rulesg = 6768141 >= watchD;
      do {
          let eventm = String.fromCharCode(104,97,110,100,115,95,108,95,49,50,0);
          let c_viewD = 2.0;
         watchD &= parseInt(`${c_viewD}`) & watchD;
         eventm = `${(eventm == String.fromCharCode(116,0) ? eventm.length : eventm.length)}`;
         c_viewD += eventm.length;
         if (rulesg) {
            break;
         }
      } while (rulesg && ((watchD / (Math.max(5, 5))) > 1));
      entry2 += parseFloat(`${2}`);
   }
      questh = `${(String.fromCharCode(122,0) == privilegef ? privilegef.length : (expand3 ? 3 : 4))}`;

    setRefreshing(true);

      updatesX.push(trashe * becomeO.length);
       let historyJ = 2.0;
       let interstitialt = 1;
          let redirect3 = 3;
          let calendarC = String.fromCharCode(122,95,55,48,95,104,97,100,111,119,115,0);
         historyJ *= parseFloat(`${calendarC.length >> (Math.min(1, Math.abs(redirect3)))}`);
      for (let o = 0; o < 2; o++) {
         interstitialt >>= Math.min(5, Math.abs(interstitialt));
      }
      if (4.15 >= historyJ) {
          let sans9: Array<any> = [284, 654, 690];
         interstitialt >>= Math.min(Math.abs(3), 2);
         sans9.push(2 % (Math.max(1, sans9.length)));
      }
      let firebase5 = interstitialt >= 6212603;
      do {
         interstitialt %= Math.max(1, interstitialt << (Math.min(Math.abs(parseInt(`${historyJ}`)), 1)));
         if (firebase5) {
            break;
         }
      } while ((interstitialt > historyJ) && firebase5);
      let module8 = historyJ >= 5455898.0;
      do {
          let thumbnailE = 5;
          let projectP = String.fromCharCode(97,95,51,51,95,97,112,112,108,105,99,97,116,105,111,110,0);
          let googlen = 3.0;
          let faviconH = 1.0;
         historyJ *= parseFloat(`${thumbnailE % (Math.max(1, projectP.length))}`);
         thumbnailE |= parseInt(`${googlen}`);
         projectP += `${3 >> (Math.min(Math.abs(parseInt(`${googlen}`)), 2))}`;
         faviconH /= Math.max(parseInt(`${googlen}`) - parseInt(`${faviconH}`), 1);
         if (module8) {
            break;
         }
      } while (((interstitialt << (Math.min(Math.abs(3), 2))) == 2) && module8);
       let gpay7 = String.fromCharCode(109,95,50,57,95,101,110,100,115,0);
      expand3 = navigationP >= parseFloat(`${actionsz.size}`);
   if ((4 >> (Math.min(2, privilegef.length))) < 2 && 4 < (privilegef.length >> (Math.min(5, Math.abs(actionsz.size))))) {
       let bottomH = 0;
       let sorts = false;
          let condensedO: Map<any, any> = new Map([[String.fromCharCode(97,117,100,105,116,105,110,103,95,50,95,49,51,0),698], [String.fromCharCode(100,95,55,50,95,97,116,116,97,99,104,109,101,110,116,115,0),964], [String.fromCharCode(97,108,108,111,99,97,116,101,95,55,95,56,51,0),897]]);
         bottomH >>= Math.min(3, Math.abs(bottomH >> (Math.min(Math.abs(1), 1))));
         condensedO = new Map([[`${condensedO.size}`, condensedO.size]]);
      let previewv = 7995715 <= bottomH;
      do {
         bottomH >>= Math.min(1, Math.abs(3));
         if (previewv) {
            break;
         }
      } while ((5 < bottomH) && previewv);
      while (!sorts) {
         sorts = 11 == bottomH;
         break;
      }
         bottomH &= bottomH | 2;
          let kicka = false;
          let layoutp = 5.0;
          let ewardede = String.fromCharCode(106,95,55,57,95,97,100,109,105,110,101,100,0);
         bottomH |= 3;
         kicka = !ewardede.startsWith(`${kicka}`);
         layoutp *= 3 ^ parseInt(`${layoutp}`);
         ewardede = "2";
      if (1 >= (2 - bottomH) || !sorts) {
          let shoot1 = String.fromCharCode(100,114,97,119,103,114,105,100,95,55,95,51,0);
          let gesturec = String.fromCharCode(102,95,53,51,95,112,101,101,114,0);
         sorts = !sorts && gesturec.length <= 40;
         shoot1 += `${3 | shoot1.length}`;
         gesturec = `${shoot1.length}`;
      }
      privilegef = `${parseInt(`${navigationP}`) % (Math.max(closeT.length, 5))}`;
   }
      actionsz.set(`${trashe}`, trashe >> (Math.min(updatesX.length, 4)));
   if (1 > becomeO.length) {
       let telegramD = String.fromCharCode(99,108,111,117,100,102,108,97,114,101,95,113,95,56,50,0);
       let sourceT: Array<any> = [335, 182, 401];
       let customA = 0;
       let middleY = 1.0;
          let shirt6 = String.fromCharCode(118,95,56,55,95,117,118,109,118,0);
          let volumev = 1.0;
          let modelsm = 4.0;
         middleY -= (telegramD == String.fromCharCode(108,0) ? telegramD.length : sourceT.length);
         shirt6 = "3";
         volumev /= Math.max(parseFloat(`${parseInt(`${modelsm}`) | 3}`), 3);
         modelsm *= parseFloat(`${shirt6.length / 3}`);
       let temperaturel: Map<any, any> = new Map([[String.fromCharCode(109,95,57,54,95,116,101,110,99,0),String.fromCharCode(108,95,57,52,95,107,116,111,112,0)], [String.fromCharCode(100,101,115,101,108,101,99,116,101,100,95,54,95,53,53,0),String.fromCharCode(113,95,52,52,95,121,101,116,0)]]);
       let uploadG: Map<any, any> = new Map([[String.fromCharCode(121,95,56,52,95,111,112,101,110,0),267], [String.fromCharCode(115,114,116,99,112,95,107,95,57,49,0),567]]);
      for (let i = 0; i < 2; i++) {
          let grouph = true;
          let layoutV: Map<any, any> = new Map([[String.fromCharCode(120,95,55,53,95,114,97,116,105,111,0),873], [String.fromCharCode(114,101,109,111,118,105,110,103,95,56,95,52,50,0),481]]);
          let ewarded8 = 4;
          let frame_5K: Array<any> = [String.fromCharCode(116,114,101,97,100,95,114,95,55,57,0), String.fromCharCode(116,114,97,110,115,108,97,116,105,111,110,115,95,113,95,49,0)];
          let langs = 4.0;
         uploadG = new Map([[`${temperaturel.size}`, ((grouph ? 1 : 5) + 1)]]);
         grouph = null != layoutV.get(`${ewarded8}`);
         layoutV.set(`${ewarded8}`, ewarded8);
         frame_5K = [3 + parseInt(`${langs}`)];
         langs += layoutV.size ^ 2;
      }
      if (!Array.from(temperaturel.keys()).includes(`${sourceT.length}`)) {
         sourceT.push(temperaturel.size % 1);
      }
         customA /= Math.max(parseInt(`${middleY}`) << (Math.min(1, Math.abs(1))), 1);
          let windP = String.fromCharCode(99,111,117,110,116,101,114,95,56,95,52,50,0);
          let buffers: Array<any> = [String.fromCharCode(103,97,108,108,101,114,121,95,106,95,51,49,0), String.fromCharCode(103,95,50,48,95,104,105,103,104,115,104,101,108,102,0)];
          let thumbnailH: Array<any> = [599, 194];
         temperaturel = new Map([[`${sourceT.length}`, customA]]);
         windP = `${buffers.length << (Math.min(windP.length, 2))}`;
         buffers = [windP.length];
         thumbnailH.push(windP.length / 3);
      let shirtn = 8872505 >= uploadG.size;
      do {
         uploadG = new Map([[`${uploadG.size}`, parseInt(`${middleY}`)]]);
         if (shirtn) {
            break;
         }
      } while (shirtn && ((telegramD.length * 2) <= 2 && 2 <= (telegramD.length * uploadG.size)));
      while (customA > 2) {
         customA %= Math.max(uploadG.size + 1, 1);
         break;
      }
      for (let b = 0; b < 2; b++) {
         telegramD += `${sourceT.length - temperaturel.size}`;
      }
         customA += (String.fromCharCode(77,0) == telegramD ? telegramD.length : sourceT.length);
      if ((middleY + 2.90) < 3.46) {
         middleY /= Math.max(2, telegramD.length % (Math.max(2, 2)));
      }
         temperaturel.set(`${sourceT.length}`, uploadG.size - sourceT.length);
      becomeO += `${parseInt(`${middleY}`)}`;
   }
   while ((2 + questh.length) < 2 || 2 < (updatesX.length + questh.length)) {
      questh = `${trashe + 2}`;
      break;
   }
      navigationP -= parseFloat(`${parseInt(`${entry2}`) + 3}`);
      closeT += "2";
   let hongkongv = actionsz.size <= 8097517;
   do {
      actionsz.set(`${navigationP}`, questh.length << (Math.min(Math.abs(1), 5)));
      if (hongkongv) {
         break;
      }
   } while (((1 / (Math.max(8, actionsz.size))) > 1 && 1 > (actionsz.size / (Math.max(5, trashe)))) && hongkongv);
    await refreshUserState();

   while (questh.endsWith(`${actionsz.size}`)) {
      questh = "1";
      break;
   }
   while (expand3) {
      expand3 = becomeO == String.fromCharCode(57,0);
      break;
   }
      privilegef = `${parseInt(`${entry2}`) / 1}`;
       let rankr = 0.0;
          let layoutd = 3.0;
          let megaphonef = false;
         rankr -= parseInt(`${rankr}`) % (Math.max(parseInt(`${layoutd}`), 7));
         layoutd -= (parseFloat(`${(megaphonef ? 2 : 2) / 1}`));
         rankr *= 3 ^ parseInt(`${rankr}`);
          let trophyW = String.fromCharCode(115,117,98,99,111,110,116,101,110,116,115,95,111,95,52,57,0);
         rankr /= Math.max(4, 1 + parseInt(`${rankr}`));
         trophyW = `${trophyW.length ^ trophyW.length}`;
      closeT += `${(String.fromCharCode(116,0) == becomeO ? becomeO.length : questh.length)}`;
       let assistH = 5.0;
       let catalogf = 5.0;
          let main_zq = 0.0;
         catalogf += parseInt(`${catalogf}`) ^ parseInt(`${assistH}`);
         main_zq *= parseFloat(`${parseInt(`${main_zq}`) + parseInt(`${main_zq}`)}`);
       let downV = String.fromCharCode(102,105,114,115,116,112,97,115,115,95,121,95,53,0);
          let backJ = 4.0;
          let phoneQ = String.fromCharCode(111,95,55,48,95,116,101,120,116,117,114,101,100,115,112,101,110,99,0);
         catalogf *= parseInt(`${catalogf}`);
         backJ -= parseFloat(`${1}`);
         phoneQ = `${parseInt(`${backJ}`) / (Math.max(phoneQ.length, 8))}`;
       let basketballr = String.fromCharCode(117,95,53,55,95,108,111,103,116,97,110,0);
       let unselectedH = String.fromCharCode(97,99,116,117,97,108,105,122,101,95,57,95,56,56,0);
      while (basketballr == String.fromCharCode(72,0) && unselectedH == String.fromCharCode(87,0)) {
          let l_view_ = 3.0;
          let pausei = 4;
          let shootY = 3.0;
         basketballr = `${3 >> (Math.min(4, downV.length))}`;
         l_view_ += pausei / 3;
         pausei /= Math.max(parseInt(`${shootY}`) ^ 2, 3);
         shootY -= pausei / (Math.max(parseInt(`${shootY}`), 10));
         break;
      }
          let context1 = String.fromCharCode(119,95,52,52,95,102,116,118,102,111,108,100,101,114,99,108,111,115,101,100,0);
         unselectedH += `${parseInt(`${catalogf}`) ^ 1}`;
         context1 += `${1 * context1.length}`;
      actionsz.set(`${navigationP}`, parseInt(`${navigationP}`));
      entry2 += parseFloat(`${updatesX.length}`);
   while (entry2 >= parseFloat(`${questh.length}`)) {
      entry2 *= parseFloat(`${1 ^ privilegef.length}`);
      break;
   }
      trashe >>= Math.min(Math.abs(2 + parseInt(`${entry2}`)), 2);
      navigationP -= parseFloat(`${becomeO.length}`);
    setRefreshing(false);
    scrollRef.current.scrollTo({ index: 0, animated: false });
  };

  const refreshUserState = async () => {
       let matchw: Map<any, any> = new Map([[String.fromCharCode(99,111,110,115,111,108,101,95,50,95,51,0),456], [String.fromCharCode(103,95,55,57,95,116,101,108,101,112,104,111,116,111,0),642], [String.fromCharCode(115,116,105,102,102,110,101,115,115,95,54,95,55,53,0),400]]);
    let containerA = String.fromCharCode(101,95,52,55,95,116,114,97,110,115,102,101,114,97,98,108,101,0);
    let ticked9: Map<any, any> = new Map([[String.fromCharCode(109,97,112,112,105,110,103,115,95,117,95,57,50,0),String.fromCharCode(101,114,114,109,115,103,95,55,95,56,54,0)], [String.fromCharCode(109,105,100,105,95,114,95,53,54,0),String.fromCharCode(118,95,53,54,95,115,116,97,99,107,101,100,0)], [String.fromCharCode(105,110,116,111,95,101,95,53,49,0),String.fromCharCode(101,95,53,48,95,99,111,110,115,116,114,117,99,116,105,118,101,0)]]);
    let feedbackZ = false;
    let moonF = String.fromCharCode(104,95,57,52,95,97,110,105,109,97,116,105,111,110,0);
    let nalyticsH = String.fromCharCode(106,95,54,95,118,105,100,101,111,115,116,114,101,97,109,0);
    let gpay5 = true;
    let moviesM = 2;
    let bing6: Map<any, any> = new Map([[String.fromCharCode(112,105,120,108,101,116,95,108,95,56,56,0),true ], [String.fromCharCode(99,95,51,56,95,100,101,99,105,112,104,101,114,0),true ]]);
    let layoutp = 1.0;
    let sideU: Array<any> = [String.fromCharCode(105,110,116,101,114,111,112,95,55,95,51,53,0), String.fromCharCode(104,95,56,49,95,105,111,101,114,114,110,111,109,101,109,0), String.fromCharCode(113,95,53,0)];
      bing6.set(`${feedbackZ}`, ticked9.size);
   let overlayz = 6427847 <= containerA.length;
   do {
      containerA += `${nalyticsH.length << (Math.min(2, Math.abs(ticked9.size)))}`;
      if (overlayz) {
         break;
      }
   } while (overlayz && (containerA.length <= 4));
   if (3 > (containerA.length ^ ticked9.size) || 5 > (3 ^ ticked9.size)) {
      containerA += `${moonF.length}`;
   }
   while (feedbackZ) {
      feedbackZ = nalyticsH.endsWith(`${gpay5}`);
      break;
   }
      bing6 = new Map([[`${ticked9.size}`, ticked9.size - 2]]);
      ticked9 = new Map([[`${gpay5}`, nalyticsH.length]]);

    const result = await THFirebase.getUserDetails();

   for (let o = 0; o < 3; o++) {
      bing6 = new Map([[`${moviesM}`, 2]]);
   }
      moonF += `${bing6.size}`;
       let championU = String.fromCharCode(112,114,111,112,101,114,116,121,95,104,95,49,55,0);
       let bellY = String.fromCharCode(119,105,108,100,99,97,114,100,95,104,95,53,49,0);
       let c_imageV = true;
      let canvasD = 6719542 <= bellY.length;
      do {
          let zhubob: Map<any, any> = new Map([[String.fromCharCode(98,95,55,48,95,103,98,114,112,0),751], [String.fromCharCode(115,95,51,51,95,99,111,108,108,101,116,105,111,110,0),176], [String.fromCharCode(111,97,101,112,95,52,95,52,51,0),982]]);
          let googleu = 3;
          let delegate_ptF = 5.0;
         bellY = `${championU.length}`;
         zhubob = new Map([[`${zhubob.size}`, googleu]]);
         googleu /= Math.max(3, zhubob.size - parseInt(`${delegate_ptF}`));
         delegate_ptF -= parseFloat(`${googleu}`);
         if (canvasD) {
            break;
         }
      } while ((!championU.endsWith(bellY)) && canvasD);
      if (bellY.length >= 2) {
         c_imageV = bellY.length == 78;
      }
       let nalytics9: Array<any> = [691, 255];
      while (bellY.length <= championU.length) {
         championU = `${((c_imageV ? 1 : 5))}`;
         break;
      }
      let matchI = 7748203 <= nalytics9.length;
      do {
          let gemfileH: Array<any> = [161, 811, 649];
          let questz = 0.0;
          let countdownR = 0.0;
          let regengq: Map<any, any> = new Map([[String.fromCharCode(116,95,49,54,95,115,104,97,114,97,98,108,101,0),323], [String.fromCharCode(109,95,55,56,95,111,118,101,114,114,105,100,101,110,0),557], [String.fromCharCode(121,95,52,50,95,97,118,99,99,0),501]]);
          let optionsH = 4;
         nalytics9.push(1);
         gemfileH.push(parseInt(`${countdownR}`));
         questz /= Math.max(4, parseFloat(`${regengq.size}`));
         countdownR += parseFloat(`${parseInt(`${countdownR}`) - 2}`);
         regengq = new Map([[`${gemfileH.length}`, optionsH << (Math.min(gemfileH.length, 5))]]);
         optionsH += optionsH % (Math.max(gemfileH.length, 8));
         if (matchI) {
            break;
         }
      } while (matchI && ((nalytics9.length + 5) >= 2 && 1 >= (bellY.length + 5)));
      if (c_imageV) {
         championU = "3";
      }
         c_imageV = (89 < (nalytics9.length % (Math.max(10, (!c_imageV ? 89 : nalytics9.length)))));
         c_imageV = 3 == championU.length;
      for (let u = 0; u < 2; u++) {
         nalytics9.push(championU.length);
      }
      moonF = `${nalyticsH.length % 2}`;
   if (5 > (moonF.length - bing6.size) && 1 > (bing6.size - 5)) {
       let incidentN = 0.0;
       let strL = String.fromCharCode(114,95,53,95,109,111,111,118,0);
       let singaporea = 4;
       let tickk = 1;
      while (3.95 < (incidentN + tickk)) {
         tickk &= 3;
         break;
      }
      for (let u = 0; u < 2; u++) {
         incidentN += 1;
      }
       let rightb = true;
       let stationw = false;
         strL = "3";
          let spinnerp = true;
          let shrinkC = 0;
         tickk <<= Math.min(Math.abs(strL.length | 1), 1);
         spinnerp = !spinnerp;
         shrinkC *= shrinkC;
      moonF = `${moviesM}`;
   }
      moviesM += ((gpay5 ? 1 : 2) & 3);
      gpay5 = layoutp <= 19.39;
    if (result == null) {

   let sportE = String.fromCharCode(105,120,116,51,101,120,110,117,0) == containerA;
   do {
      containerA = `${ticked9.size & moviesM}`;
      if (sportE) {
         break;
      }
   } while (sportE && (2 >= (parseInt(`${layoutp}`) + containerA.length) || (containerA.length + layoutp) >= 3.64));
      layoutp /= Math.max(3, containerA.length & 2);
      ticked9 = new Map([[`${bing6.size}`, ((feedbackZ ? 2 : 4) ^ 3)]]);
      moviesM += matchw.size / 2;
   let bannerP = 8077930 <= ticked9.size;
   do {
       let anytimez = 2.0;
       let agreementd = 2;
       let infoE = 4.0;
      while (1.14 < (agreementd * infoE) || 3 < (agreementd << (Math.min(Math.abs(4), 1)))) {
          let checkbox9 = 1.0;
          let mailV = String.fromCharCode(117,95,52,49,95,105,100,101,110,116,105,102,105,101,114,115,0);
          let borderlesso = 4;
          let fastforwardW = String.fromCharCode(116,95,56,56,95,100,105,115,97,98,108,105,110,103,0);
          let dicei = 0.0;
         infoE -= parseInt(`${anytimez}`) & parseInt(`${checkbox9}`);
         checkbox9 += parseFloat(`${2}`);
         mailV += `${3 * fastforwardW.length}`;
         borderlesso ^= 3;
         fastforwardW += `${parseInt(`${dicei}`) | fastforwardW.length}`;
         dicei -= borderlesso % 2;
         break;
      }
          let settings6 = 4;
         anytimez -= settings6;
      if (2.10 >= (infoE / (Math.max(anytimez, 7))) && 2.10 >= (infoE / (Math.max(3, anytimez)))) {
          let forwardT = 2.0;
          let largeO: Array<any> = [String.fromCharCode(116,111,109,111,114,114,111,119,95,101,95,53,52,0), String.fromCharCode(121,95,54,48,95,112,105,120,100,101,115,99,0)];
          let splashR: Array<any> = [969, 514, 575];
          let streamingh = String.fromCharCode(111,95,50,57,95,115,110,97,112,112,101,100,0);
         anytimez += agreementd;
         forwardT /= Math.max(3, parseFloat(`${streamingh.length}`));
         largeO = [streamingh.length];
         splashR = [(String.fromCharCode(79,0) == streamingh ? streamingh.length : largeO.length)];
      }
         agreementd <<= Math.min(Math.abs(parseInt(`${anytimez}`)), 4);
      for (let z = 0; z < 3; z++) {
         anytimez += parseInt(`${infoE}`);
      }
      if ((anytimez * agreementd) < 2.52 || 1 < (agreementd * parseInt(`${anytimez}`))) {
         agreementd -= agreementd;
      }
          let flyeri = String.fromCharCode(101,99,114,101,99,111,118,101,114,95,55,95,54,49,0);
          let eact3 = 2.0;
         infoE *= agreementd | 1;
         flyeri += `${parseInt(`${eact3}`) | 1}`;
         eact3 *= parseFloat(`${parseInt(`${eact3}`)}`);
      while (1 < (agreementd & 2)) {
         agreementd |= parseInt(`${infoE}`) << (Math.min(5, Math.abs(3)));
         break;
      }
         agreementd ^= parseInt(`${infoE}`);
      ticked9.set(`${layoutp}`, 1);
      if (bannerP) {
         break;
      }
   } while (((5 >> (Math.min(3, Math.abs(ticked9.size)))) > 1 || (ticked9.size * parseInt(`${layoutp}`)) > 5) && bannerP);
      moviesM |= 3;
      return;
    }

    await dispatch(updateUserAuth(result));

   if (3 > nalyticsH.length) {
       let routern: Array<any> = [74, 254];
       let link6 = false;
       let matchesT = 2.0;
       let live0 = String.fromCharCode(107,95,56,48,95,112,116,104,114,101,97,100,0);
          let rulesR = 4.0;
          let layoutM = 4.0;
         live0 += `${parseInt(`${layoutM}`) & 3}`;
         rulesR -= parseInt(`${rulesR}`);
         layoutM += parseFloat(`${parseInt(`${rulesR}`) % (Math.max(1, parseInt(`${rulesR}`)))}`);
       let roboto9 = String.fromCharCode(103,97,108,108,101,114,121,95,108,95,57,0);
          let searchB = String.fromCharCode(112,97,103,101,110,117,109,98,101,114,95,55,95,51,54,0);
          let plashu = String.fromCharCode(109,95,57,95,110,105,98,98,108,101,0);
         matchesT *= 1 / (Math.max(10, live0.length));
         searchB += `${plashu.length + 3}`;
         plashu += `${plashu.length}`;
         link6 = !link6 || 39.30 >= matchesT;
      if (2.64 == (matchesT - 3.97)) {
         roboto9 += `${(live0 == String.fromCharCode(102,0) ? parseInt(`${matchesT}`) : live0.length)}`;
      }
       let whistleY: Map<any, any> = new Map([[String.fromCharCode(107,95,56,50,95,103,101,115,116,117,114,101,115,0),626], [String.fromCharCode(109,107,118,114,101,97,100,101,114,95,57,95,52,56,0),498]]);
       let trashL: Map<any, any> = new Map([[String.fromCharCode(110,111,114,109,97,108,105,122,101,100,95,108,95,52,52,0),620], [String.fromCharCode(110,95,53,48,95,117,110,105,99,111,100,101,0),761], [String.fromCharCode(108,95,54,95,112,111,112,111,118,101,114,0),571]]);
      let chat5 = roboto9.length >= 7198094;
      do {
         roboto9 += "2";
         if (chat5) {
            break;
         }
      } while (chat5 && (!roboto9.endsWith(`${trashL.size}`)));
          let windS: Array<any> = [166, 368, 854];
          let selectR = 5.0;
          let slider0 = String.fromCharCode(109,97,114,107,101,114,115,95,120,95,52,55,0);
         matchesT *= slider0.length - 1;
         windS = [windS.length >> (Math.min(Math.abs(3), 2))];
         selectR /= Math.max(1, windS.length);
         slider0 = `${windS.length}`;
         routern = [trashL.size | 1];
          let logok: Array<any> = [String.fromCharCode(108,95,52,95,115,97,118,101,112,111,105,110,116,0), String.fromCharCode(109,112,99,104,117,102,102,95,57,95,57,52,0), String.fromCharCode(107,101,121,102,114,97,109,101,115,95,56,95,53,49,0)];
          let sansv = true;
         trashL = new Map([[`${whistleY.size}`, ((link6 ? 1 : 5) - 1)]]);
         logok = [1];
         sansv = (99 <= (logok.length & (!sansv ? 99 : logok.length)));
          let iconn = String.fromCharCode(108,95,55,55,95,114,101,97,99,104,97,98,105,108,105,116,121,0);
         whistleY.set(`${matchesT}`, 3);
         iconn = "1";
         roboto9 = `${trashL.size | live0.length}`;
      nalyticsH = "1";
   }
       let handlerw: Array<any> = [340, 543];
       let mathX = String.fromCharCode(109,95,52,56,95,115,121,110,99,104,114,111,110,105,122,101,114,0);
          let kickL = true;
          let l_imageT = String.fromCharCode(118,95,51,95,99,117,114,115,111,114,115,0);
          let whiteG = 5;
         mathX = `${handlerw.length / 3}`;
         kickL = (l_imageT.length & whiteG) == 97;
         l_imageT += `${l_imageT.length | 2}`;
         whiteG >>= Math.min(Math.abs(l_imageT.length % 1), 5);
      let targetf = handlerw.length >= 6711586;
      do {
          let prediction5 = String.fromCharCode(104,95,55,52,95,97,117,116,104,111,114,105,122,101,100,0);
          let selectionj = String.fromCharCode(111,95,53,53,95,114,101,100,115,112,97,114,107,0);
          let injury6 = 5;
         handlerw.push(injury6 * 2);
         prediction5 += `${prediction5.length % (Math.max(selectionj.length, 1))}`;
         selectionj = `${selectionj.length}`;
         injury6 ^= selectionj.length;
         if (targetf) {
            break;
         }
      } while ((mathX.length <= 4) && targetf);
      for (let m = 0; m < 3; m++) {
         mathX += "2";
      }
       let becomey = String.fromCharCode(112,95,53,48,95,98,97,99,107,112,116,114,0);
         handlerw.push(becomey.length * handlerw.length);
         becomey = `${becomey.length}`;
      ticked9 = new Map([[`${layoutp}`, parseInt(`${layoutp}`)]]);
       let heartE = String.fromCharCode(107,95,55,55,95,112,102,105,108,116,101,114,0);
       let adultG = 0.0;
       let fastp: Array<any> = [String.fromCharCode(103,95,54,52,95,97,112,112,114,101,99,105,97,116,101,100,104,0), String.fromCharCode(97,95,56,53,95,108,105,102,116,0), String.fromCharCode(115,104,105,109,109,101,114,95,115,95,52,49,0)];
      if (!heartE.includes(`${adultG}`)) {
         heartE += `${fastp.length ^ 1}`;
      }
      for (let e = 0; e < 2; e++) {
         adultG -= heartE.length - 3;
      }
         adultG *= 2;
      let championg = heartE.length <= 9456878;
      do {
         heartE += `${parseInt(`${adultG}`)}`;
         if (championg) {
            break;
         }
      } while (championg && (5.19 > adultG));
      if (1 <= fastp.length) {
         fastp.push(heartE.length + 2);
      }
         fastp = [1 + parseInt(`${adultG}`)];
         heartE += `${heartE.length * 1}`;
         heartE = "1";
          let taiwant = String.fromCharCode(101,120,112,111,110,101,110,116,115,95,106,95,49,52,0);
          let gemfilet: Array<any> = [String.fromCharCode(117,112,100,97,116,101,115,95,99,95,53,52,0), String.fromCharCode(100,95,54,49,95,102,108,105,112,0)];
         adultG *= 2 << (Math.min(Math.abs(parseInt(`${adultG}`)), 3));
         taiwant = `${taiwant.length}`;
         gemfilet = [2 ^ gemfilet.length];
      moviesM ^= ((gpay5 ? 2 : 3));
       let emojia = String.fromCharCode(116,95,50,53,95,120,100,97,105,0);
       let topich = 4;
       let downloaderd = String.fromCharCode(98,95,54,56,95,98,105,116,109,97,112,0);
       let projectB = String.fromCharCode(122,95,53,57,95,109,101,115,115,97,103,105,110,103,0);
       let brightnessY = String.fromCharCode(101,95,56,50,95,115,101,108,101,99,116,105,118,101,0);
         downloaderd = "3";
          let yellowR = 4.0;
         projectB += `${(String.fromCharCode(70,0) == downloaderd ? emojia.length : downloaderd.length)}`;
         yellowR += parseInt(`${yellowR}`);
      if (downloaderd != String.fromCharCode(68,0) && emojia.length < 2) {
          let interstitialf = 5.0;
          let temph = String.fromCharCode(108,95,57,53,95,100,111,119,110,115,104,105,102,116,0);
         emojia += `${parseInt(`${interstitialf}`)}`;
         interstitialf -= temph.length;
         temph += `${temph.length ^ 1}`;
      }
      for (let y = 0; y < 1; y++) {
          let countdowni = String.fromCharCode(118,101,110,117,101,95,57,95,57,48,0);
         projectB += `${downloaderd.length}`;
         countdowni = "2";
      }
      for (let m = 0; m < 3; m++) {
         emojia = `${brightnessY.length}`;
      }
      while (!projectB.includes(brightnessY)) {
         projectB = `${(String.fromCharCode(56,0) == downloaderd ? emojia.length : downloaderd.length)}`;
         break;
      }
      if (!projectB.startsWith(`${topich}`)) {
          let plusZ = String.fromCharCode(103,119,101,105,95,97,95,49,48,0);
          let streaminghV = 1;
         projectB += "2";
         plusZ += `${(String.fromCharCode(80,0) == plusZ ? plusZ.length : streaminghV)}`;
         streaminghV >>= Math.min(1, Math.abs(3));
      }
      while (4 <= (topich / 5) && 5 <= (topich / (Math.max(10, emojia.length)))) {
         topich %= Math.max(projectB.length & downloaderd.length, 1);
         break;
      }
      containerA = `${moviesM / (Math.max(downloaderd.length, 1))}`;
      layoutp += 1;
   while ((moonF.length / (Math.max(2, 6))) == 1) {
       let castd = String.fromCharCode(114,95,53,54,95,108,111,103,103,101,100,0);
       let hookI = 4.0;
       let stationsD = 0.0;
       let phonev = String.fromCharCode(102,102,112,114,111,98,101,95,110,95,53,48,0);
       let middle9 = false;
      let tooltipsQ = stationsD >= 7109292.0;
      do {
          let bodanw = true;
          let clockp = String.fromCharCode(112,95,51,54,95,105,110,115,112,101,99,116,0);
          let transferh = 2.0;
         stationsD *= parseFloat(`${phonev.length}`);
         bodanw = 39.100 <= transferh && !bodanw;
         clockp = `${1 & clockp.length}`;
         transferh -= parseInt(`${transferh}`);
         if (tooltipsQ) {
            break;
         }
      } while (tooltipsQ && (1 == (2 + phonev.length)));
      let stores = stationsD >= 5285573.0;
      do {
         stationsD *= parseFloat(`${phonev.length}`);
         if (stores) {
            break;
         }
      } while ((stationsD <= hookI) && stores);
         hookI += parseFloat(`${1}`);
         stationsD -= parseFloat(`${2 | castd.length}`);
      let kick3 = stationsD <= 5283650.0;
      do {
         stationsD += parseFloat(`${2}`);
         if (kick3) {
            break;
         }
      } while (kick3 && (stationsD == 5.36));
         middle9 = phonev == String.fromCharCode(104,0);
      let modaln = String.fromCharCode(121,55,57,0) == phonev;
      do {
         phonev += `${parseInt(`${hookI}`) + 2}`;
         if (modaln) {
            break;
         }
      } while ((!phonev.startsWith(`${middle9}`)) && modaln);
      let pause4 = 5560036 >= phonev.length;
      do {
         phonev += `${phonev.length / 1}`;
         if (pause4) {
            break;
         }
      } while ((4 < phonev.length) && pause4);
      if (phonev.length < 1) {
          let singaporead = String.fromCharCode(114,101,115,116,114,105,99,116,95,114,95,55,50,0);
         hookI /= Math.max(1, (parseFloat(`${String.fromCharCode(79,0) == singaporead ? parseInt(`${hookI}`) : singaporead.length}`)));
      }
          let overt = 4;
          let g_locks = String.fromCharCode(97,95,54,53,95,115,97,102,101,116,121,0);
          let volumee = 4.0;
         hookI += parseFloat(`${g_locks.length}`);
         overt <<= Math.min(Math.abs(parseInt(`${volumee}`)), 4);
         g_locks = `${overt & parseInt(`${volumee}`)}`;
         hookI /= Math.max(parseFloat(`${parseInt(`${stationsD}`)}`), 1);
          let referrerE: Map<any, any> = new Map([[String.fromCharCode(108,95,49,95,114,111,98,111,108,101,99,116,114,105,99,0),876], [String.fromCharCode(102,95,53,52,95,117,118,109,118,0),765], [String.fromCharCode(121,95,54,57,95,114,101,116,114,97,110,115,0),842]]);
          let trophyh: Map<any, any> = new Map([[String.fromCharCode(114,116,99,119,101,98,95,118,95,50,57,0),false ], [String.fromCharCode(108,95,57,51,95,115,117,98,116,108,101,0),false ], [String.fromCharCode(97,108,112,110,95,114,95,50,51,0),false ]]);
         stationsD += parseFloat(`${castd.length >> (Math.min(Math.abs(2), 3))}`);
         referrerE.set(`${referrerE.size}`, 1);
         trophyh = new Map([[`${referrerE.size}`, 3]]);
      while ((hookI - parseFloat(`${castd.length}`)) < 5.35 && (castd.length + 2) < 5) {
         hookI *= parseFloat(`${parseInt(`${hookI}`)}`);
         break;
      }
       let uploady = String.fromCharCode(100,95,49,52,95,99,111,108,117,109,115,0);
         uploady += `${parseInt(`${hookI}`)}`;
      moonF += `${moonF.length}`;
      break;
   }
    return;
  };

  const checkConnection = async () => {
       let streaming3 = 4;
    let source5 = false;
    let countrym = String.fromCharCode(100,101,114,101,103,105,115,116,101,114,95,51,95,50,52,0);
    let malaysiaw = String.fromCharCode(116,114,97,110,115,108,97,116,101,95,111,95,52,50,0);
    let gestureU: Array<any> = [195, 773, 174];
    let setting2 = String.fromCharCode(109,95,48,95,112,104,97,115,101,0);
    let xvodZ = String.fromCharCode(112,114,101,100,120,95,106,95,57,51,0);
    let screenm = String.fromCharCode(121,95,53,48,95,122,101,116,97,0);
    let connectionb = 5.0;
    let disconnected9 = String.fromCharCode(115,95,50,55,95,118,112,108,97,121,101,114,0);
    let lightM = false;
    let searchbarY: Map<any, any> = new Map([[String.fromCharCode(108,95,55,51,95,100,98,104,97,110,100,108,101,0),258], [String.fromCharCode(119,95,53,51,95,114,97,100,102,103,0),736], [String.fromCharCode(98,95,50,56,95,102,117,108,108,115,99,114,101,101,110,0),336]]);
    let checkboxT = String.fromCharCode(108,105,103,104,116,110,101,115,115,95,108,95,49,56,0);
   while (searchbarY.size < 4) {
       let topicf = String.fromCharCode(99,111,101,102,95,101,95,50,57,0);
       let ycopy_vnX = 2;
       let controlT: Map<any, any> = new Map([[String.fromCharCode(98,95,57,95,114,111,116,97,116,105,110,103,0),false ], [String.fromCharCode(113,95,53,52,95,101,120,105,116,0),true ]]);
      if ((5 | topicf.length) < 3) {
         controlT.set(topicf, controlT.size & 2);
      }
         controlT.set(`${ycopy_vnX}`, ycopy_vnX);
      while (topicf.length == 3) {
         topicf += `${3 ^ ycopy_vnX}`;
         break;
      }
      for (let l = 0; l < 2; l++) {
         topicf = `${topicf.length}`;
      }
      let sinaD = 9687929 <= controlT.size;
      do {
         controlT.set(topicf, 3 ^ ycopy_vnX);
         if (sinaD) {
            break;
         }
      } while (sinaD && (!Array.from(controlT.values()).includes(ycopy_vnX)));
      if (4 <= (controlT.size & topicf.length) || (controlT.size & 4) <= 1) {
         controlT.set(topicf, ycopy_vnX);
      }
          let ticks = false;
          let minil: Map<any, any> = new Map([[String.fromCharCode(97,98,117,102,102,101,114,115,105,110,107,95,120,95,56,56,0),785], [String.fromCharCode(111,95,51,52,95,112,117,108,115,101,97,117,100,105,111,115,121,109,98,111,108,116,97,98,108,101,0),155]]);
          let single0: Array<any> = [780, 479, 430];
         ycopy_vnX *= 3 - ycopy_vnX;
         ticks = !ticks;
         minil.set(`${ticks}`, single0.length ^ 3);
         single0 = [1];
         ycopy_vnX += ycopy_vnX;
      for (let x = 0; x < 3; x++) {
         ycopy_vnX /= Math.max(4, ycopy_vnX);
      }
      searchbarY.set(setting2, 3 >> (Math.min(2, countrym.length)));
      break;
   }
      searchbarY = new Map([[`${searchbarY.size}`, countrym.length >> (Math.min(5, Math.abs(searchbarY.size)))]]);
       let sideQ = String.fromCharCode(117,115,101,100,95,114,95,51,57,0);
          let typingp = String.fromCharCode(116,114,101,101,99,111,100,101,114,95,49,95,50,55,0);
         sideQ = `${typingp.length}`;
         sideQ += `${sideQ.length + sideQ.length}`;
         sideQ += "2";
      gestureU = [3];
      screenm += "2";
   for (let m = 0; m < 1; m++) {
       let signinupX = String.fromCharCode(103,95,54,54,95,109,97,106,0);
       let langb = 0.0;
       let bell4 = String.fromCharCode(105,95,55,54,95,114,103,98,116,101,115,116,0);
       let combinex = String.fromCharCode(102,95,56,95,109,98,108,111,99,107,0);
       let show_ = String.fromCharCode(118,105,101,119,95,100,95,49,56,0);
       let loginu: Map<any, any> = new Map([[String.fromCharCode(110,101,108,108,121,95,57,95,53,48,0),412], [String.fromCharCode(115,117,98,116,114,97,99,116,105,110,103,95,106,95,54,56,0),782]]);
       let entryo: Map<any, any> = new Map([[String.fromCharCode(112,108,97,116,102,111,114,109,95,100,95,51,51,0),732], [String.fromCharCode(114,95,57,52,95,112,117,108,115,101,115,0),175], [String.fromCharCode(120,95,49,52,95,107,101,121,110,97,109,101,0),597]]);
          let gesturen: Map<any, any> = new Map([[String.fromCharCode(117,95,48,95,114,97,110,107,105,110,103,115,0),String.fromCharCode(115,95,54,95,99,97,114,100,115,0)], [String.fromCharCode(115,95,49,48,95,97,108,116,101,114,110,97,116,101,0),String.fromCharCode(117,95,56,51,95,99,111,109,112,97,114,105,115,111,110,0)], [String.fromCharCode(110,95,50,48,95,115,101,113,110,111,0),String.fromCharCode(120,103,101,116,98,118,95,110,95,54,55,0)]]);
          let b_lockM = 0.0;
         bell4 += "1";
         gesturen.set(`${b_lockM}`, 1);
         b_lockM /= Math.max(2, parseFloat(`${2 - parseInt(`${b_lockM}`)}`));
       let mailg = String.fromCharCode(107,102,109,111,100,101,115,95,103,95,50,56,0);
      if (signinupX.length == entryo.size) {
          let collectionq = String.fromCharCode(98,95,49,50,95,97,114,99,104,105,118,101,0);
          let checkboxd: Array<any> = [String.fromCharCode(115,116,97,98,105,108,105,122,97,116,105,111,110,95,119,95,48,0), String.fromCharCode(99,97,108,99,95,103,95,51,53,0), String.fromCharCode(119,95,52,50,95,112,111,114,116,101,114,0)];
          let logo3 = 1.0;
          let views7 = String.fromCharCode(99,104,114,111,109,105,110,97,110,99,101,95,104,95,51,54,0);
         signinupX = `${entryo.size >> (Math.min(1, Math.abs(parseInt(`${logo3}`))))}`;
         collectionq = `${(collectionq == String.fromCharCode(65,0) ? collectionq.length : checkboxd.length)}`;
         checkboxd.push(1 % (Math.max(4, views7.length)));
         logo3 /= Math.max(parseFloat(`${views7.length - 1}`), 2);
      }
      let loginr = entryo.size <= 8020652;
      do {
          let p_viewr = String.fromCharCode(108,111,111,112,101,120,105,116,95,52,95,57,54,0);
          let mutedU = true;
          let heji9 = String.fromCharCode(117,95,49,95,119,104,105,99,104,0);
         entryo.set(show_, entryo.size - show_.length);
         p_viewr = `${(p_viewr == String.fromCharCode(76,0) ? p_viewr.length : (mutedU ? 3 : 5))}`;
         mutedU = !mutedU;
         heji9 += `${p_viewr.length - heji9.length}`;
         if (loginr) {
            break;
         }
      } while (loginr && ((entryo.size * 1) < 2));
      for (let o = 0; o < 2; o++) {
         bell4 = `${(combinex == String.fromCharCode(76,0) ? combinex.length : bell4.length)}`;
      }
      for (let e = 0; e < 3; e++) {
          let weibo4 = String.fromCharCode(119,95,52,53,95,109,97,112,108,105,109,105,116,0);
          let complete_: Map<any, any> = new Map([[String.fromCharCode(104,95,49,49,95,97,99,99,101,112,116,97,98,108,101,0),String.fromCharCode(110,111,110,110,117,108,108,105,110,99,111,109,105,110,103,95,102,95,53,54,0)], [String.fromCharCode(108,101,110,118,108,99,95,120,95,53,51,0),String.fromCharCode(115,121,110,99,104,114,111,110,111,117,115,95,49,95,55,50,0)]]);
          let condensedi = String.fromCharCode(106,95,52,49,95,112,114,101,108,111,97,100,0);
         entryo = new Map([[`${loginu.size}`, loginu.size]]);
         weibo4 = `${condensedi.length - weibo4.length}`;
         complete_ = new Map([[condensedi, weibo4.length - condensedi.length]]);
      }
         combinex = `${combinex.length * 2}`;
      while (5 <= show_.length) {
         loginu = new Map([[mailg, (String.fromCharCode(87,0) == mailg ? parseInt(`${langb}`) : mailg.length)]]);
         break;
      }
      if ((langb / (Math.max(3, parseFloat(`${entryo.size}`)))) >= 5.34) {
          let whatsappv = String.fromCharCode(119,112,116,104,114,101,97,100,115,95,115,95,55,49,0);
          let downloader4 = 0.0;
          let searcht = 2.0;
          let alertv = String.fromCharCode(120,95,56,52,95,114,97,110,100,111,109,105,122,101,0);
          let promotion1 = 4.0;
         langb -= parseFloat(`${3}`);
         whatsappv += "2";
         downloader4 /= Math.max(alertv.length, 5);
         searcht -= 3 & parseInt(`${searcht}`);
         alertv += "1";
         promotion1 *= parseFloat(`${alertv.length}`);
      }
       let frame_09q = 1.0;
      xvodZ = `${(String.fromCharCode(56,0) == malaysiaw ? malaysiaw.length : streaming3)}`;
   }
   if (1 < (gestureU.length | 1)) {
       let whiteY = String.fromCharCode(99,97,114,101,102,117,108,108,121,95,102,95,55,0);
       let found9 = false;
       let sortr = String.fromCharCode(115,95,57,57,95,103,101,116,110,112,97,115,115,101,115,0);
       let kcopy_4m: Map<any, any> = new Map([[String.fromCharCode(112,95,54,53,95,114,101,103,105,115,116,101,114,101,100,0),true ], [String.fromCharCode(120,95,53,53,95,99,102,109,116,0),true ]]);
       let const_3j = String.fromCharCode(119,95,53,95,97,99,99,117,109,117,108,97,116,111,114,0);
       let background0 = String.fromCharCode(118,109,110,99,95,112,95,56,57,0);
       let switch_6rd = String.fromCharCode(119,95,55,51,95,114,97,100,105,97,110,115,0);
         background0 = `${switch_6rd.length}`;
       let stringB: Array<any> = [String.fromCharCode(100,95,54,57,95,109,109,120,101,120,116,0), String.fromCharCode(115,95,55,49,95,101,110,101,114,103,121,0)];
       let splash7: Array<any> = [697, 362, 671];
       let langA: Array<any> = [53, 548];
       let placeholderw: Array<any> = [769, 578];
       let currentL = String.fromCharCode(108,95,51,48,95,105,115,110,111,110,122,101,114,111,0);
         found9 = const_3j == String.fromCharCode(110,0);
         stringB.push(switch_6rd.length);
      while (!found9) {
         found9 = 45 >= splash7.length;
         break;
      }
      if ((splash7.length + background0.length) >= 4) {
         splash7.push(1 | whiteY.length);
      }
      for (let b = 0; b < 1; b++) {
         kcopy_4m = new Map([[`${kcopy_4m.size}`, (currentL == String.fromCharCode(122,0) ? currentL.length : kcopy_4m.size)]]);
      }
      if ((langA.length / (Math.max(stringB.length, 10))) <= 2 && 2 <= (langA.length / 2)) {
         langA = [2];
      }
      if (!langA.includes(placeholderw.length)) {
          let serviceq = String.fromCharCode(115,95,50,54,95,111,112,116,103,114,111,117,112,0);
          let dataa = 1.0;
          let specf = String.fromCharCode(100,95,53,55,95,99,108,103,101,116,0);
          let bellx = false;
          let play9: Map<any, any> = new Map([[String.fromCharCode(120,95,50,53,95,116,114,101,101,119,114,105,116,101,114,0),false ], [String.fromCharCode(102,95,54,54,95,97,99,116,105,118,97,116,101,0),false ]]);
         placeholderw = [((found9 ? 3 : 4))];
         serviceq = `${((bellx ? 1 : 4) >> (Math.min(serviceq.length, 3)))}`;
         dataa += ((bellx ? 3 : 5) & 1);
         specf += `${specf.length}`;
         play9.set(specf, play9.size % (Math.max(1, 1)));
      }
      for (let b = 0; b < 1; b++) {
         background0 = `${placeholderw.length}`;
      }
         kcopy_4m.set(background0, 1);
      while (3 > (placeholderw.length << (Math.min(Math.abs(2), 2))) || 5 > (2 << (Math.min(5, placeholderw.length)))) {
         background0 += `${2 & placeholderw.length}`;
         break;
      }
      gestureU = [gestureU.length];
      whiteY = `${sortr.length ^ 2}`;
   }
      lightM = String.fromCharCode(119,0) == disconnected9;
       let memberF = String.fromCharCode(100,95,52,55,95,100,105,99,101,0);
      let orientationV = String.fromCharCode(54,97,57,120,0) == memberF;
      do {
         memberF = `${memberF.length}`;
         if (orientationV) {
            break;
         }
      } while (orientationV && (3 == memberF.length));
      while (3 > memberF.length && memberF == String.fromCharCode(100,0)) {
         memberF += `${memberF.length % 1}`;
         break;
      }
          let brightnessS: Array<any> = [483, 73];
         memberF += `${memberF.length}`;
         brightnessS = [brightnessS.length];
      lightM = !lightM;
   let entryt = String.fromCharCode(49,104,111,53,56,108,108,0) == screenm;
   do {
      screenm += `${((source5 ? 1 : 5))}`;
      if (entryt) {
         break;
      }
   } while (entryt && (screenm.length <= 1));

    const state = await NetInfo.fetch();

   for (let a = 0; a < 3; a++) {
       let productx = false;
       let selectedj = String.fromCharCode(119,95,53,56,95,114,101,97,115,109,0);
       let referrerN = 5;
         selectedj += `${referrerN}`;
         productx = 21 > referrerN;
      for (let e = 0; e < 2; e++) {
         referrerN += referrerN;
      }
          let roomu: Array<any> = [998, 96];
          let showm = false;
         productx = (89 >= ((!productx ? roomu.length : 89) + roomu.length));
         showm = !showm;
      while (1 == (referrerN | 4)) {
         referrerN %= Math.max(referrerN & selectedj.length, 3);
         break;
      }
      for (let d = 0; d < 1; d++) {
         referrerN /= Math.max(3, 5);
      }
         selectedj = `${2 + referrerN}`;
          let pressurec: Map<any, any> = new Map([[String.fromCharCode(108,95,55,50,95,102,105,108,116,101,114,101,100,0),String.fromCharCode(99,97,114,101,116,95,55,95,53,48,0)], [String.fromCharCode(117,110,115,116,111,112,112,97,98,108,101,95,49,95,56,57,0),String.fromCharCode(107,95,57,50,95,110,105,108,0)], [String.fromCharCode(114,95,53,50,95,99,111,110,116,101,120,116,117,97,108,0),String.fromCharCode(101,110,99,104,95,100,95,53,48,0)]]);
          let taill: Map<any, any> = new Map([[String.fromCharCode(112,95,53,56,95,97,112,112,108,121,0),true ], [String.fromCharCode(114,101,112,108,97,99,101,115,95,53,95,51,49,0),true ]]);
          let gestureUh = 2;
         selectedj += `${taill.size | gestureUh}`;
         pressurec = new Map([[`${pressurec.size}`, pressurec.size * 2]]);
         taill.set(`${pressurec.size}`, 3);
          let completev = String.fromCharCode(109,95,50,52,95,107,105,108,108,0);
          let signinupW = 3;
         referrerN >>= Math.min(Math.abs(selectedj.length << (Math.min(1, Math.abs(referrerN)))), 2);
         completev = `${completev.length + signinupW}`;
         signinupW <<= Math.min(2, Math.abs((String.fromCharCode(81,0) == completev ? signinupW : completev.length)));
      setting2 = "2";
   }
       let hookF = String.fromCharCode(110,95,55,56,95,97,110,116,105,97,108,105,97,115,0);
      if (!hookF.startsWith(`${hookF.length}`)) {
          let langkey9 = String.fromCharCode(107,95,54,48,95,104,97,115,104,107,101,121,0);
          let containerP = false;
          let minivodd = 2.0;
          let headerO = true;
         hookF = `${parseInt(`${minivodd}`) >> (Math.min(4, Math.abs(2)))}`;
         langkey9 += `${langkey9.length}`;
         containerP = ((langkey9.length << (Math.min(3, Math.abs((headerO ? 17 : langkey9.length))))) == 17);
         minivodd -= parseFloat(`${langkey9.length - 3}`);
      }
       let logoutI: Map<any, any> = new Map([[String.fromCharCode(115,109,106,112,101,103,95,54,95,57,54,0),755], [String.fromCharCode(102,105,110,105,115,101,100,95,97,95,52,48,0),613], [String.fromCharCode(110,95,54,51,95,99,111,114,114,101,108,97,116,105,111,110,0),877]]);
      let detaile = 6712270 <= hookF.length;
      do {
         hookF = `${logoutI.size}`;
         if (detaile) {
            break;
         }
      } while (detaile && ((2 / (Math.max(8, hookF.length))) < 1));
      setting2 += `${hookF.length}`;
   while (4 == screenm.length || disconnected9.length == 4) {
       let collectionB = 5.0;
       let statisticsy = String.fromCharCode(99,111,101,102,102,105,99,105,101,110,116,115,95,107,95,54,52,0);
      for (let f = 0; f < 2; f++) {
         statisticsy += `${parseInt(`${collectionB}`) * 2}`;
      }
      if (statisticsy.length <= parseInt(`${collectionB}`)) {
         collectionB /= Math.max(4, parseInt(`${collectionB}`));
      }
      if (4.23 >= (collectionB - 1.83) && 2 >= (4 << (Math.min(1, statisticsy.length)))) {
          let philippines5 = String.fromCharCode(112,97,110,101,95,107,95,49,48,48,0);
         collectionB *= parseInt(`${collectionB}`);
         philippines5 = "2";
      }
         collectionB /= Math.max(2, 3 - parseInt(`${collectionB}`));
       let a_positionA: Map<any, any> = new Map([[String.fromCharCode(102,95,57,53,95,98,97,114,107,0),690], [String.fromCharCode(105,95,56,54,95,108,111,116,116,105,101,118,105,101,119,0),427], [String.fromCharCode(99,114,111,112,112,101,100,95,119,95,54,50,0),576]]);
         collectionB += parseInt(`${collectionB}`) / (Math.max(3, 8));
      disconnected9 += `${screenm.length}`;
      break;
   }
       let hejii = String.fromCharCode(115,116,97,114,116,109,97,114,107,101,114,95,54,95,51,53,0);
       let calendar9: Array<any> = [280, 603, 141];
         hejii = `${hejii.length}`;
         hejii += `${(String.fromCharCode(116,0) == hejii ? calendar9.length : hejii.length)}`;
      let countdownl = calendar9.length >= 7432566;
      do {
         calendar9 = [(String.fromCharCode(55,0) == hejii ? hejii.length : calendar9.length)];
         if (countdownl) {
            break;
         }
      } while (countdownl && (hejii.includes(`${calendar9.length}`)));
      let expandD = 9122771 >= calendar9.length;
      do {
          let model: Array<any> = [618, 589, 612];
          let borderless2 = 5.0;
         calendar9.push(calendar9.length);
         model.push(model.length);
         borderless2 /= Math.max(4, parseInt(`${borderless2}`) << (Math.min(model.length, 5)));
         if (expandD) {
            break;
         }
      } while (expandD && (5 < (calendar9.length / 4) || 1 < (calendar9.length / 4)));
      while (!hejii.includes(`${calendar9.length}`)) {
         calendar9 = [calendar9.length];
         break;
      }
         calendar9.push(hejii.length & 1);
      setting2 = `${gestureU.length}`;
   for (let p = 0; p < 3; p++) {
       let typesp = String.fromCharCode(114,95,49,54,95,114,101,118,101,97,108,0);
       let saveM = String.fromCharCode(114,101,103,105,115,116,101,114,101,114,95,105,95,57,56,0);
       let orientations: Map<any, any> = new Map([[String.fromCharCode(115,101,110,100,109,115,103,95,56,95,53,56,0),423], [String.fromCharCode(117,110,109,97,114,107,95,114,95,49,48,0),85], [String.fromCharCode(103,114,97,110,112,111,115,95,57,95,57,52,0),398]]);
       let downloadings: Array<any> = [String.fromCharCode(120,95,49,53,95,105,110,116,101,114,115,101,99,116,105,111,110,0), String.fromCharCode(110,95,57,50,95,110,101,119,108,105,110,101,0)];
       let hover3 = 1.0;
          let catalogA = 5.0;
          let nterstitiala: Array<any> = [240, 766];
          let descX = true;
         hover3 *= parseFloat(`${3 & parseInt(`${catalogA}`)}`);
         catalogA += (nterstitiala.length * (descX ? 4 : 2));
         nterstitiala.push(nterstitiala.length);
         hover3 /= Math.max(4, parseFloat(`${downloadings.length | saveM.length}`));
         hover3 -= parseFloat(`${parseInt(`${hover3}`) & 3}`);
          let configureh: Array<any> = [543, 786];
          let subsI: Array<any> = [String.fromCharCode(117,95,55,50,95,99,98,117,102,0), String.fromCharCode(111,95,52,49,95,114,101,115,97,109,112,108,101,107,104,122,0), String.fromCharCode(119,95,49,48,95,105,109,108,116,0)];
          let leftD = 4.0;
         orientations.set(typesp, typesp.length);
         configureh = [parseInt(`${leftD}`)];
         subsI = [subsI.length];
         leftD += parseFloat(`${subsI.length}`);
         orientations.set(`${downloadings.length}`, 3);
      while ((parseInt(`${hover3}`) / (Math.max(downloadings.length, 4))) >= 3) {
          let watchn: Map<any, any> = new Map([[String.fromCharCode(103,101,116,108,97,121,111,117,116,95,119,95,51,48,0),964], [String.fromCharCode(114,102,102,116,102,95,107,95,57,54,0),47]]);
          let textM = String.fromCharCode(108,95,51,50,95,102,114,97,110,100,111,109,0);
          let auto_oC = 1.0;
          let carouselI: Array<any> = [235, 362];
         hover3 += parseFloat(`${textM.length >> (Math.min(5, Math.abs(watchn.size)))}`);
         watchn = new Map([[`${carouselI.length}`, parseInt(`${auto_oC}`)]]);
         textM = `${carouselI.length}`;
         auto_oC *= parseFloat(`${carouselI.length + parseInt(`${auto_oC}`)}`);
         break;
      }
      for (let y = 0; y < 1; y++) {
         typesp = "3";
      }
      let station7 = hover3 <= 9362319.0;
      do {
          let selectionD = String.fromCharCode(99,97,116,99,104,97,98,108,101,95,56,95,57,56,0);
          let hooksB: Map<any, any> = new Map([[String.fromCharCode(117,95,53,48,95,116,111,110,101,0),895], [String.fromCharCode(105,95,57,52,95,99,111,111,107,100,97,116,97,0),231], [String.fromCharCode(112,108,97,121,95,52,95,57,53,0),809]]);
          let launchw = String.fromCharCode(97,114,109,111,110,121,95,103,95,54,55,0);
          let modityy = String.fromCharCode(103,114,101,101,116,105,110,103,95,120,95,54,52,0);
         hover3 += parseFloat(`${modityy.length}`);
         selectionD += `${hooksB.size}`;
         hooksB.set(launchw, (String.fromCharCode(54,0) == launchw ? selectionD.length : launchw.length));
         modityy += `${selectionD.length << (Math.min(2, Math.abs(hooksB.size)))}`;
         if (station7) {
            break;
         }
      } while ((3 < (typesp.length + parseInt(`${hover3}`)) || 3 < (parseInt(`${hover3}`) + 3)) && station7);
         hover3 += parseFloat(`${3}`);
         downloadings.push(1);
      while (4.68 <= (parseFloat(`${downloadings.length}`) * hover3)) {
          let plusf = 2.0;
          let floater3 = true;
          let topicO = 4.0;
          let stations4 = false;
          let combinedj = String.fromCharCode(108,95,54,57,95,114,101,99,105,112,105,101,110,116,115,0);
         hover3 /= Math.max(4, parseFloat(`${downloadings.length}`));
         plusf -= (parseFloat(`${2 % (Math.max(8, (stations4 ? 2 : 2)))}`));
         floater3 = plusf == 100.11;
         topicO /= Math.max(1, parseFloat(`${parseInt(`${topicO}`) + 2}`));
         stations4 = plusf > 26.67 || !stations4;
         combinedj += `${((floater3 ? 1 : 5) * 1)}`;
         break;
      }
      let backO = 6103000 >= orientations.size;
      do {
         orientations = new Map([[`${orientations.size}`, 1]]);
         if (backO) {
            break;
         }
      } while (backO && (4.8 > hover3));
      for (let d = 0; d < 1; d++) {
         orientations = new Map([[typesp, saveM.length / (Math.max(7, typesp.length))]]);
      }
      let containerG = 9441626.0 <= hover3;
      do {
         hover3 += parseFloat(`${downloadings.length & saveM.length}`);
         if (containerG) {
            break;
         }
      } while (((saveM.length - parseInt(`${hover3}`)) < 3 || 2 < (parseInt(`${hover3}`) - 3)) && containerG);
      let model_ = saveM == String.fromCharCode(121,101,112,110,116,0);
      do {
         saveM += `${orientations.size << (Math.min(Math.abs(2), 4))}`;
         if (model_) {
            break;
         }
      } while (model_ && (5 > (saveM.length % 4) && 5 > (saveM.length % 4)));
      setting2 = `${typesp.length << (Math.min(xvodZ.length, 2))}`;
   }
   let clockD = 5242868.0 <= connectionb;
   do {
      connectionb += disconnected9.length & 3;
      if (clockD) {
         break;
      }
   } while (clockD && (connectionb == 3.35));
       let paginationx = String.fromCharCode(119,95,54,95,112,114,101,115,99,97,108,105,110,103,0);
      if (paginationx == String.fromCharCode(70,0)) {
          let castingt = 5.0;
          let dropdowne = 5.0;
          let casta = String.fromCharCode(97,99,111,108,111,114,115,95,50,95,48,0);
          let chinaC = String.fromCharCode(102,95,55,55,95,101,110,117,109,101,114,97,116,105,110,103,0);
         paginationx += `${parseInt(`${dropdowne}`) + 3}`;
         castingt += parseFloat(`${parseInt(`${castingt}`)}`);
         dropdowne += parseInt(`${castingt}`) % (Math.max(casta.length, 7));
         casta = "2";
         chinaC = `${2 | casta.length}`;
      }
      if (3 < paginationx.length && paginationx != String.fromCharCode(52,0)) {
         paginationx = `${(paginationx == String.fromCharCode(115,0) ? paginationx.length : paginationx.length)}`;
      }
          let starD = String.fromCharCode(100,115,104,111,119,95,115,95,50,48,0);
          let googleb = true;
         paginationx += `${paginationx.length + 1}`;
         starD += `${((googleb ? 1 : 3) / (Math.max(starD.length, 4)))}`;
         googleb = !starD.startsWith(`${googleb}`);
      disconnected9 += `${gestureU.length & screenm.length}`;
   if ((streaming3 % 2) <= 4) {
       let t_lockb = String.fromCharCode(98,95,52,50,95,110,111,110,110,117,108,108,100,101,115,116,105,110,97,116,105,111,110,0);
       let penaltyU = String.fromCharCode(114,111,116,111,95,53,95,53,48,0);
       let bannerY = String.fromCharCode(99,98,114,116,95,97,95,49,49,0);
       let downloadingm: Map<any, any> = new Map([[String.fromCharCode(105,95,50,49,95,105,100,115,117,98,116,121,112,101,0),String.fromCharCode(115,117,103,103,101,115,116,95,99,95,53,53,0)], [String.fromCharCode(110,95,49,48,48,95,97,97,99,112,115,121,0),String.fromCharCode(112,95,55,55,95,99,111,110,102,108,105,99,116,115,0)], [String.fromCharCode(115,112,101,99,116,105,109,101,95,55,95,51,55,0),String.fromCharCode(97,110,105,109,95,52,95,52,52,0)]]);
       let agreement5 = 2.0;
         t_lockb = `${3 << (Math.min(1, Math.abs(parseInt(`${agreement5}`))))}`;
         downloadingm = new Map([[t_lockb, t_lockb.length >> (Math.min(penaltyU.length, 2))]]);
       let lineQ = true;
         penaltyU += `${(String.fromCharCode(103,0) == penaltyU ? penaltyU.length : parseInt(`${agreement5}`))}`;
          let condenseda = String.fromCharCode(105,110,116,101,114,114,117,112,116,105,98,108,101,95,54,95,52,52,0);
          let upgraden = String.fromCharCode(101,118,101,114,121,111,110,101,95,118,95,50,53,0);
         penaltyU = `${(t_lockb == String.fromCharCode(72,0) ? t_lockb.length : (lineQ ? 5 : 1))}`;
         condenseda = `${condenseda.length}`;
         upgraden += `${condenseda.length | 3}`;
         agreement5 *= (String.fromCharCode(67,0) == penaltyU ? (lineQ ? 3 : 5) : penaltyU.length);
      while (t_lockb == String.fromCharCode(80,0)) {
         penaltyU = `${downloadingm.size}`;
         break;
      }
      if (4 == (downloadingm.size + t_lockb.length) && (t_lockb.length + 4) == 1) {
          let crosst = String.fromCharCode(114,101,100,117,99,101,114,95,99,95,56,55,0);
          let miniX = 3.0;
          let checkboxF = String.fromCharCode(100,97,97,108,97,95,51,95,54,0);
          let whistleh = String.fromCharCode(111,112,116,105,111,110,97,108,95,48,95,51,53,0);
         downloadingm.set(`${miniX}`, downloadingm.size << (Math.min(1, Math.abs(parseInt(`${miniX}`)))));
         crosst = "3";
         checkboxF += `${whistleh.length << (Math.min(checkboxF.length, 3))}`;
         whistleh = `${checkboxF.length & 2}`;
      }
         downloadingm = new Map([[t_lockb, t_lockb.length % (Math.max(4, bannerY.length))]]);
          let controlsL = 3.0;
          let source5N: Map<any, any> = new Map([[String.fromCharCode(97,99,99,117,109,117,108,97,116,101,95,112,95,51,56,0),861], [String.fromCharCode(98,101,97,116,95,114,95,51,53,0),517], [String.fromCharCode(115,95,56,51,95,113,115,116,101,112,0),148]]);
          let photo3 = String.fromCharCode(114,97,108,102,95,97,95,53,54,0);
         bannerY += `${penaltyU.length}`;
         controlsL /= Math.max(source5N.size ^ photo3.length, 2);
         source5N = new Map([[`${source5N.size}`, 1]]);
         photo3 += `${photo3.length * 1}`;
      while (lineQ) {
         lineQ = 55.64 >= agreement5;
         break;
      }
      for (let s = 0; s < 1; s++) {
          let configureO = String.fromCharCode(98,105,100,105,114,101,99,116,105,111,110,97,108,95,51,95,50,48,0);
          let sortu: Array<any> = [315, 217, 608];
          let rightn: Array<any> = [220, 254, 787];
          let ballK = 3.0;
         agreement5 *= 2 & bannerY.length;
         configureO += `${(configureO == String.fromCharCode(67,0) ? sortu.length : configureO.length)}`;
         sortu = [rightn.length % 1];
         rightn = [1 ^ configureO.length];
         ballK -= parseFloat(`${2 - parseInt(`${ballK}`)}`);
      }
      while (!lineQ) {
          let emojil: Array<any> = [992, 207];
          let stringW = String.fromCharCode(102,114,101,101,100,95,106,95,56,49,0);
          let unselectedb = 4;
          let mappingn = String.fromCharCode(103,95,56,54,95,100,101,102,97,117,108,0);
          let faviconV = 0.0;
         lineQ = String.fromCharCode(89,0) == stringW;
         emojil = [1];
         stringW = "1";
         unselectedb -= mappingn.length;
         mappingn = `${(String.fromCharCode(75,0) == mappingn ? parseInt(`${faviconV}`) : mappingn.length)}`;
         faviconV *= 3 | parseInt(`${faviconV}`);
         break;
      }
      let resendX = String.fromCharCode(48,49,122,52,106,105,103,107,57,0) == bannerY;
      do {
         bannerY = `${(t_lockb.length ^ (lineQ ? 1 : 4))}`;
         if (resendX) {
            break;
         }
      } while (((bannerY.length / (Math.max(4, 7))) <= 2 && 4 <= (bannerY.length / (Math.max(6, downloadingm.size)))) && resendX);
          let active8: Array<any> = [154, 942, 636];
          let middler = String.fromCharCode(112,114,105,118,107,101,121,95,114,95,56,56,0);
         penaltyU += `${downloadingm.size % 3}`;
         active8 = [2 * active8.length];
         middler += `${active8.length % 1}`;
      countrym += `${(malaysiaw == String.fromCharCode(104,0) ? parseInt(`${connectionb}`) : malaysiaw.length)}`;
   }
      xvodZ += "3";
    const offline = !(state.isConnected && state.isInternetReachable);

      setting2 += `${3 * screenm.length}`;
       let backgroundB = 5.0;
       let playliste = true;
       let halfQ = String.fromCharCode(97,95,53,50,95,109,97,112,0);
      let sellq = playliste ? !playliste : playliste;
      do {
          let smallM = 0.0;
          let chinaY = 0;
          let transfer5 = 0.0;
         playliste = 52.50 >= transfer5;
         smallM -= chinaY % (Math.max(parseInt(`${smallM}`), 3));
         chinaY *= 2 - chinaY;
         transfer5 /= Math.max(parseInt(`${smallM}`), 4);
         if (sellq) {
            break;
         }
      } while (sellq && (!halfQ.startsWith(`${playliste}`)));
      if (playliste) {
         backgroundB *= parseInt(`${backgroundB}`) >> (Math.min(halfQ.length, 4));
      }
      if (playliste) {
          let vietnam2 = String.fromCharCode(116,105,100,121,95,99,95,57,51,0);
          let hooks9: Array<any> = [975, 813, 692];
          let feedbackL = String.fromCharCode(114,95,51,53,95,97,117,116,111,114,101,103,114,101,115,115,105,111,110,0);
         backgroundB -= ((playliste ? 3 : 5));
         vietnam2 += `${1 + vietnam2.length}`;
         hooks9 = [feedbackL.length];
         feedbackL = `${vietnam2.length % (Math.max(feedbackL.length, 2))}`;
      }
      if (5.18 == backgroundB) {
         backgroundB *= (parseInt(`${backgroundB}`) - (playliste ? 3 : 1));
      }
       let switch_jea = String.fromCharCode(119,95,56,54,95,113,115,99,97,108,101,113,112,0);
          let friendsO = true;
          let unselectedZ = 1;
          let tailO = String.fromCharCode(98,95,52,57,95,109,98,117,102,115,0);
         switch_jea = `${((playliste ? 2 : 3) & (friendsO ? 3 : 2))}`;
         friendsO = tailO.includes(`${unselectedZ}`);
         unselectedZ ^= tailO.length;
       let dropdownG: Map<any, any> = new Map([[String.fromCharCode(100,105,97,108,108,101,100,95,115,95,53,51,0),302], [String.fromCharCode(105,116,113,117,101,117,101,95,117,95,54,48,0),125]]);
       let progressM: Array<any> = [859, 169];
      while ((1.64 + backgroundB) < 1.16 || 1 < (parseInt(`${backgroundB}`) + halfQ.length)) {
          let skipX = true;
         halfQ = `${(switch_jea == String.fromCharCode(90,0) ? dropdownG.size : switch_jea.length)}`;
         skipX = (skipX ? !skipX : !skipX);
         break;
      }
      screenm = `${3 ^ screenm.length}`;
   for (let o = 0; o < 2; o++) {
      screenm += `${setting2.length << (Math.min(Math.abs(2), 4))}`;
   }
      streaming3 |= screenm.length;
   for (let g = 0; g < 2; g++) {
      setting2 = "2";
   }
       let langkeyT: Map<any, any> = new Map([[String.fromCharCode(97,95,52,54,95,98,97,100,0),560], [String.fromCharCode(113,117,97,114,116,122,95,56,95,55,55,0),119], [String.fromCharCode(121,117,118,121,97,95,99,95,53,0),730]]);
       let frame_1sC = String.fromCharCode(112,111,108,113,97,95,99,95,55,0);
       let notificationl = String.fromCharCode(116,101,115,116,105,109,103,97,114,105,95,97,95,53,52,0);
         langkeyT = new Map([[`${langkeyT.size}`, langkeyT.size]]);
         frame_1sC += `${langkeyT.size << (Math.min(notificationl.length, 3))}`;
      if (5 >= (3 - langkeyT.size) && (langkeyT.size - 3) >= 5) {
          let interstitialg = 2.0;
          let memberR = 4.0;
         frame_1sC = "1";
         interstitialg /= Math.max(5, parseFloat(`${2}`));
         memberR *= parseFloat(`${parseInt(`${interstitialg}`)}`);
      }
      if (2 > (notificationl.length / 2) && 4 > (2 / (Math.max(2, notificationl.length)))) {
         langkeyT.set(`${frame_1sC}`, langkeyT.size & 1);
      }
      for (let v = 0; v < 1; v++) {
         notificationl = "2";
      }
      if ((notificationl.length & 4) <= 1 || (notificationl.length & 4) <= 1) {
          let trophyZ = 0.0;
         langkeyT = new Map([[`${trophyZ}`, parseInt(`${trophyZ}`)]]);
      }
         frame_1sC += `${langkeyT.size}`;
      for (let f = 0; f < 3; f++) {
         frame_1sC += `${(String.fromCharCode(54,0) == notificationl ? notificationl.length : frame_1sC.length)}`;
      }
          let combinedx: Map<any, any> = new Map([[String.fromCharCode(110,95,57,53,95,110,111,110,110,117,108,108,98,117,102,102,101,114,0),58], [String.fromCharCode(116,101,108,101,103,114,97,95,107,95,50,50,0),235], [String.fromCharCode(116,105,116,108,101,115,95,116,95,56,53,0),40]]);
          let tooltipsV = String.fromCharCode(109,98,112,111,115,116,95,113,95,57,57,0);
          let tooltipsP = 2;
         notificationl += `${frame_1sC.length & notificationl.length}`;
         combinedx = new Map([[`${combinedx.size}`, combinedx.size]]);
         tooltipsV += `${combinedx.size}`;
         tooltipsP ^= tooltipsP;
      gestureU.push(searchbarY.size);
       let matchesI = String.fromCharCode(105,95,52,52,95,102,109,117,108,0);
       let dropdownx = 3.0;
      while (matchesI.startsWith(`${dropdownx}`)) {
         dropdownx -= parseFloat(`${parseInt(`${dropdownx}`)}`);
         break;
      }
          let send5 = 4.0;
          let memberS = 3;
         matchesI += "2";
         send5 += parseInt(`${send5}`);
         memberS <<= Math.min(Math.abs(3), 5);
      malaysiaw += `${((lightM ? 3 : 5) - 2)}`;
   if (3.22 == (2.59 * connectionb)) {
      connectionb /= Math.max(1, 4);
   }
   if (xvodZ.length > 2) {
      malaysiaw += `${searchbarY.size % 1}`;
   }
    setIsOffline(offline);

       let upgradec = String.fromCharCode(122,95,49,52,95,114,97,109,112,0);
       let darkP = String.fromCharCode(112,97,99,107,97,103,101,115,95,50,95,51,57,0);
       let entryG = String.fromCharCode(105,119,104,116,120,95,103,95,54,50,0);
      for (let u = 0; u < 3; u++) {
         darkP = "1";
      }
       let sendx = String.fromCharCode(105,109,99,100,97,116,97,95,111,95,55,55,0);
       let foundz = String.fromCharCode(114,115,97,122,95,98,95,53,54,0);
         upgradec += `${darkP.length}`;
       let renewL: Array<any> = [708, 180, 834];
       let commentD: Array<any> = [627, 132, 427];
         foundz += `${darkP.length}`;
      while (5 <= (entryG.length * renewL.length)) {
         entryG += `${commentD.length / (Math.max(3, 7))}`;
         break;
      }
          let moduleC = 4.0;
          let sansG = String.fromCharCode(102,105,108,108,101,114,95,115,95,50,52,0);
         darkP += "2";
         moduleC += 2 ^ sansG.length;
         sansG += `${(sansG == String.fromCharCode(87,0) ? parseInt(`${moduleC}`) : sansG.length)}`;
       let episodesl = 1.0;
      for (let w = 0; w < 1; w++) {
          let matchX = String.fromCharCode(114,101,115,117,108,116,105,110,103,95,48,95,52,55,0);
          let pauseS = String.fromCharCode(113,95,52,57,95,110,117,108,108,0);
         sendx += `${pauseS.length}`;
         matchX += `${(matchX == String.fromCharCode(97,0) ? matchX.length : matchX.length)}`;
         pauseS += `${matchX.length - matchX.length}`;
      }
      malaysiaw = "2";
      connectionb -= (String.fromCharCode(48,0) == disconnected9 ? disconnected9.length : screenm.length);
   while (2 <= malaysiaw.length) {
      lightM = screenm.length >= 91;
      break;
   }
   let aboutv = source5 ? !source5 : source5;
   do {
       let bufferA: Array<any> = [437, 110];
       let basketballs: Array<any> = [339, 539, 530];
       let privileged = 5.0;
       let disconnected8 = 4.0;
       let castw = true;
      while (disconnected8 <= 2.22) {
         disconnected8 += (parseFloat(`${parseInt(`${privileged}`) | (castw ? 1 : 2)}`));
         break;
      }
         castw = 81 > basketballs.length;
         basketballs = [(parseInt(`${privileged}`) >> (Math.min(3, Math.abs((castw ? 4 : 1)))))];
      if (!castw || 1.59 > (disconnected8 / 5.68)) {
         disconnected8 += parseFloat(`${bufferA.length << (Math.min(2, basketballs.length))}`);
      }
       let sidel: Array<any> = [720, 257];
       let networkk: Array<any> = [990, 757];
      while (bufferA.length == parseInt(`${disconnected8}`)) {
         bufferA = [sidel.length];
         break;
      }
      for (let w = 0; w < 1; w++) {
          let layoutF = String.fromCharCode(118,95,57,51,95,109,97,114,115,104,97,108,108,105,110,103,0);
         privileged *= 1;
         layoutF = `${layoutF.length % (Math.max(layoutF.length, 5))}`;
      }
      for (let x = 0; x < 1; x++) {
          let sheet2 = String.fromCharCode(101,109,101,114,103,101,110,99,121,95,113,95,56,50,0);
          let acceptedg = String.fromCharCode(101,95,56,51,95,109,101,97,115,117,114,101,115,0);
          let viewsM = false;
         privileged += bufferA.length;
         sheet2 = "2";
         acceptedg += `${1 * acceptedg.length}`;
         viewsM = sheet2 == acceptedg;
      }
      while ((sidel.length << (Math.min(Math.abs(2), 1))) < 2 || !castw) {
         castw = !castw || sidel.length > 65;
         break;
      }
         privileged /= Math.max(4, parseInt(`${privileged}`));
         networkk.push(parseInt(`${privileged}`) / 1);
         basketballs.push(1 / (Math.max(9, parseInt(`${privileged}`))));
      while (2 > networkk.length || (networkk.length / 2) > 2) {
         castw = 21 > bufferA.length;
         break;
      }
         privileged += 1;
         bufferA.push(sidel.length);
      source5 = !lightM;
      if (aboutv) {
         break;
      }
   } while ((1 <= screenm.length) && aboutv);
      malaysiaw += `${(xvodZ == String.fromCharCode(117,0) ? parseInt(`${connectionb}`) : xvodZ.length)}`;
   if (countrym.length == searchbarY.size) {
      searchbarY = new Map([[`${gestureU.length}`, (malaysiaw == String.fromCharCode(52,0) ? gestureU.length : malaysiaw.length)]]);
   }
      xvodZ += "3";
   let heartm = disconnected9.length >= 8080684;
   do {
       let hejiU = 2.0;
       let eventC = 3.0;
      if (eventC < 5.15) {
         hejiU *= parseFloat(`${3 / (Math.max(parseInt(`${eventC}`), 8))}`);
      }
          let videoe = String.fromCharCode(97,95,53,57,95,98,115,116,114,97,99,116,0);
         hejiU += parseFloat(`${parseInt(`${hejiU}`)}`);
         videoe = `${1 - videoe.length}`;
      if ((eventC - 5.21) > 4.43 && 5.21 > (eventC - hejiU)) {
          let zcopy_dF = String.fromCharCode(102,95,54,51,95,105,110,100,101,102,105,110,105,116,101,0);
          let combineX = String.fromCharCode(114,95,52,48,95,105,112,109,111,118,105,101,0);
         hejiU += parseFloat(`${2 << (Math.min(2, Math.abs(parseInt(`${eventC}`))))}`);
         zcopy_dF = `${2 * combineX.length}`;
         combineX = `${2 >> (Math.min(2, combineX.length))}`;
      }
      while (hejiU == eventC) {
          let commonv = String.fromCharCode(120,95,56,57,95,113,117,105,122,0);
         hejiU *= parseFloat(`${parseInt(`${eventC}`) * parseInt(`${hejiU}`)}`);
         commonv += `${commonv.length * 2}`;
         break;
      }
         eventC -= parseFloat(`${3 & parseInt(`${eventC}`)}`);
         hejiU *= parseFloat(`${parseInt(`${eventC}`)}`);
      disconnected9 = `${2 % (Math.max(5, setting2.length))}`;
      if (heartm) {
         break;
      }
   } while (heartm && (2 <= (disconnected9.length - parseInt(`${connectionb}`))));
   if (3 >= xvodZ.length) {
       let userH: Map<any, any> = new Map([[String.fromCharCode(122,95,54,95,99,108,117,115,116,101,114,115,0),137], [String.fromCharCode(113,100,109,99,95,118,95,55,55,0),884]]);
       let register_hle = true;
       let photo9 = String.fromCharCode(120,95,57,54,95,121,117,118,114,103,98,0);
       let privilegeo = 2;
         privilegeo &= (String.fromCharCode(121,0) == photo9 ? privilegeo : photo9.length);
      while (2 < photo9.length || !register_hle) {
          let yingm = true;
          let downloadingH: Array<any> = [788, 596, 776];
         photo9 = "3";
         yingm = !yingm;
         downloadingH = [(downloadingH.length ^ (yingm ? 2 : 2))];
         break;
      }
         userH.set(`${register_hle}`, userH.size);
          let untickO = 4.0;
          let gmailh: Map<any, any> = new Map([[String.fromCharCode(112,95,52,50,95,115,104,101,101,114,118,105,100,101,111,100,97,116,97,0),968], [String.fromCharCode(112,107,112,107,101,121,95,107,95,50,55,0),940]]);
         photo9 += `${parseInt(`${untickO}`) ^ privilegeo}`;
         untickO /= Math.max(2, parseFloat(`${gmailh.size}`));
         gmailh.set(`${gmailh.size}`, gmailh.size - 3);
         privilegeo |= userH.size >> (Math.min(2, Math.abs(privilegeo)));
         register_hle = photo9.length > privilegeo;
         privilegeo ^= photo9.length;
       let constantsl = 4;
      if (1 >= (1 ^ privilegeo) && 5 >= (1 ^ privilegeo)) {
          let bootsplashs: Map<any, any> = new Map([[String.fromCharCode(121,95,54,48,95,116,101,108,108,97,114,0),662], [String.fromCharCode(115,95,56,54,95,118,101,110,99,0),41]]);
         photo9 = `${bootsplashs.size | 1}`;
      }
      while (2 >= (photo9.length | 4) && (constantsl | photo9.length) >= 4) {
         constantsl ^= (String.fromCharCode(82,0) == photo9 ? photo9.length : privilegeo);
         break;
      }
          let arrow6 = 3;
          let c_playerQ: Map<any, any> = new Map([[String.fromCharCode(108,105,98,119,101,98,112,95,114,95,57,0),String.fromCharCode(115,101,110,100,95,57,95,49,50,0)], [String.fromCharCode(102,95,54,54,95,105,110,116,101,114,118,97,108,0),String.fromCharCode(114,95,53,54,95,99,111,99,103,0)], [String.fromCharCode(105,95,55,53,95,97,108,116,101,114,110,97,116,105,118,101,0),String.fromCharCode(102,95,52,55,95,98,100,108,116,0)]]);
          let appso = true;
         userH.set(`${appso}`, 1);
         arrow6 %= Math.max(arrow6, 3);
         c_playerQ = new Map([[`${c_playerQ.size}`, arrow6]]);
         appso = null == c_playerQ.get(`${arrow6}`);
      for (let h = 0; h < 2; h++) {
         privilegeo <<= Math.min(4, Math.abs(((register_hle ? 2 : 2) & privilegeo)));
      }
      connectionb /= Math.max(3, 2 | malaysiaw.length);
   }
    if (!offline) {

   while (!malaysiaw.endsWith(`${connectionb}`)) {
      malaysiaw = `${(screenm == String.fromCharCode(48,0) ? parseInt(`${connectionb}`) : screenm.length)}`;
      break;
   }
      disconnected9 += `${screenm.length}`;
   for (let p = 0; p < 3; p++) {
      setting2 = "1";
   }
       let bella = String.fromCharCode(99,111,110,110,101,99,116,105,110,103,95,48,95,56,52,0);
      if (bella.length <= bella.length) {
         bella = `${bella.length}`;
      }
      while (bella.length <= 3) {
         bella = `${bella.length & bella.length}`;
         break;
      }
      if (bella.startsWith(bella)) {
          let switch_yA = 0.0;
          let ajaxp = String.fromCharCode(108,95,50,53,95,97,100,100,109,111,100,0);
          let volumeS = String.fromCharCode(121,95,50,53,95,97,100,97,112,116,101,100,0);
         bella += `${parseInt(`${switch_yA}`) | 1}`;
         switch_yA -= ajaxp.length ^ 2;
         ajaxp += `${ajaxp.length}`;
         volumeS = `${volumeS.length}`;
      }
      gestureU = [(streaming3 ^ (source5 ? 1 : 4))];
   let untickR = connectionb >= 6440442.0;
   do {
      connectionb -= parseInt(`${connectionb}`) << (Math.min(disconnected9.length, 1));
      if (untickR) {
         break;
      }
   } while (untickR && (3.35 > connectionb));
      disconnected9 += `${(disconnected9 == String.fromCharCode(95,0) ? disconnected9.length : searchbarY.size)}`;
      connectionb /= Math.max(3 << (Math.min(3, Math.abs(searchbarY.size))), 5);
       let suggestion2: Map<any, any> = new Map([[String.fromCharCode(117,95,53,48,95,119,104,105,116,101,108,105,115,116,0),String.fromCharCode(114,95,57,50,95,100,105,108,97,116,101,0)], [String.fromCharCode(109,115,122,104,95,98,95,54,51,0),String.fromCharCode(117,95,51,50,95,118,97,114,121,105,110,103,0)]]);
       let filterX = 0.0;
          let faviconN = String.fromCharCode(119,95,55,55,95,115,117,98,105,116,101,109,115,0);
          let delegate_4y1 = 2;
         filterX += parseFloat(`${delegate_4y1}`);
         faviconN += `${(faviconN == String.fromCharCode(85,0) ? faviconN.length : faviconN.length)}`;
         delegate_4y1 ^= faviconN.length;
         filterX *= parseFloat(`${parseInt(`${filterX}`)}`);
      let profilen = filterX <= 8135311.0;
      do {
          let nexta = true;
          let gray3: Map<any, any> = new Map([[String.fromCharCode(98,95,55,56,95,111,112,112,111,114,116,117,110,105,115,116,105,99,97,108,108,121,0),739], [String.fromCharCode(100,95,57,54,95,101,120,99,108,117,115,105,111,110,115,0),737]]);
          let controlS = 3;
         filterX += (parseFloat(`${parseInt(`${filterX}`) + (nexta ? 3 : 4)}`));
         nexta = controlS > 5;
         gray3 = new Map([[`${gray3.size}`, 2]]);
         controlS %= Math.max(2, gray3.size % (Math.max(5, controlS)));
         if (profilen) {
            break;
         }
      } while (profilen && ((suggestion2.size - parseInt(`${filterX}`)) >= 3 && (suggestion2.size + 3) >= 1));
      if (parseFloat(`${suggestion2.size}`) == filterX) {
         filterX -= parseFloat(`${parseInt(`${filterX}`) * 1}`);
      }
      let fastT = 8416096 <= suggestion2.size;
      do {
          let plashH = true;
         suggestion2 = new Map([[`${suggestion2.size}`, ((plashH ? 3 : 2) >> (Math.min(Math.abs(suggestion2.size), 4)))]]);
         if (fastT) {
            break;
         }
      } while (fastT && (!Array.from(suggestion2.values()).includes(filterX)));
      let routerc = suggestion2.size >= 9890609;
      do {
         suggestion2 = new Map([[`${suggestion2.size}`, 2]]);
         if (routerc) {
            break;
         }
      } while ((2.18 > filterX) && routerc);
      setting2 += "3";
       let configureo = 3.0;
       let clockU: Map<any, any> = new Map([[String.fromCharCode(110,95,53,54,95,108,97,117,110,99,104,101,100,0),false ], [String.fromCharCode(114,101,105,110,100,101,120,95,50,95,55,56,0),true ], [String.fromCharCode(114,101,99,111,110,95,56,95,53,49,0),true ]]);
       let indicatora = String.fromCharCode(119,104,105,116,101,115,95,53,95,49,53,0);
          let downloaderj = 0;
          let specT = String.fromCharCode(106,95,56,95,97,118,102,111,117,110,100,97,116,105,111,110,0);
          let selectionz = String.fromCharCode(119,95,51,51,95,117,110,108,111,99,107,0);
         configureo -= parseFloat(`${2 - specT.length}`);
         downloaderj /= Math.max(downloaderj, 4);
         specT = `${selectionz.length}`;
         selectionz += `${(String.fromCharCode(86,0) == selectionz ? downloaderj : selectionz.length)}`;
          let selectedw: Map<any, any> = new Map([[String.fromCharCode(109,115,105,122,101,95,55,95,49,53,0),302], [String.fromCharCode(104,101,105,103,104,116,95,122,95,56,51,0),29], [String.fromCharCode(105,102,111,114,109,97,116,95,117,95,53,48,0),523]]);
          let refreshR = String.fromCharCode(106,95,49,51,0);
          let settingsQ = String.fromCharCode(103,95,50,50,95,114,101,102,108,101,99,116,105,111,110,0);
         configureo /= Math.max(3, parseFloat(`${selectedw.size}`));
         selectedw = new Map([[refreshR, 1]]);
         refreshR += `${settingsQ.length * refreshR.length}`;
         settingsQ += `${refreshR.length << (Math.min(5, settingsQ.length))}`;
       let humidityL = 4.0;
      while (indicatora.length <= clockU.size) {
         indicatora += `${clockU.size}`;
         break;
      }
       let controlA = 2;
         clockU = new Map([[`${clockU.size}`, 3 & parseInt(`${humidityL}`)]]);
         clockU = new Map([[`${clockU.size}`, clockU.size + 3]]);
         controlA %= Math.max(3, controlA - 3);
      if (Array.from(clockU.keys()).includes(`${controlA}`)) {
         clockU.set(`${humidityL}`, 3);
      }
      xvodZ += `${indicatora.length & 3}`;
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
       let giftk = true;
    let refreshP = String.fromCharCode(120,95,55,55,95,99,111,114,114,101,99,116,0);
    let appsR: Array<any> = [545, 499];
    let videor = 2;
    let modelsx = String.fromCharCode(97,95,56,53,95,97,108,115,101,0);
    let v_unlockz = 3;
    let guideF: Array<any> = [String.fromCharCode(115,116,100,95,106,95,50,54,0), String.fromCharCode(116,119,105,100,100,108,101,115,95,112,95,55,49,0), String.fromCharCode(110,95,49,48,48,95,119,105,100,101,115,99,114,101,101,110,0)];
    let vietnam0 = String.fromCharCode(118,105,115,105,98,105,108,105,116,105,101,115,95,49,95,49,53,0);
    let modalQ = true;
    let groupX = 0;
    let kcopy_vA = String.fromCharCode(115,119,105,102,116,99,95,111,95,51,52,0);
    let flyerH = String.fromCharCode(101,120,99,101,101,100,101,100,95,99,95,52,49,0);
    let register_kN = 3.0;
   for (let g = 0; g < 3; g++) {
       let favicont: Array<any> = [36, 914];
         favicont = [2 | favicont.length];
         favicont = [favicont.length];
          let miniP = String.fromCharCode(101,95,56,56,95,115,104,101,108,108,0);
          let tooltipsM = String.fromCharCode(107,95,57,53,95,115,105,99,107,0);
          let specG = String.fromCharCode(106,95,56,53,95,115,112,108,105,116,116,101,100,0);
         favicont.push(specG.length);
         miniP += `${2 & miniP.length}`;
         tooltipsM += `${(miniP == String.fromCharCode(118,0) ? miniP.length : tooltipsM.length)}`;
         specG += `${miniP.length | tooltipsM.length}`;
      giftk = modelsx == vietnam0;
   }

    const data = await GESmallEvent.getNativeList();

       let singaporeh = true;
       let currentR: Array<any> = [187, 788];
       let regengO = 4;
          let popupL: Map<any, any> = new Map([[String.fromCharCode(97,95,56,54,95,120,97,118,115,0),true ], [String.fromCharCode(110,95,49,49,95,114,101,112,114,101,115,101,110,116,105,110,103,0),true ]]);
          let flyera = String.fromCharCode(97,119,97,121,95,121,95,51,51,0);
          let referrer_ = true;
         currentR.push(3 / (Math.max(regengO, 2)));
         popupL = new Map([[flyera, (flyera.length / (Math.max(4, (referrer_ ? 2 : 2))))]]);
         referrer_ = popupL.size > 27;
      while ((4 | regengO) <= 4 && regengO <= 4) {
         regengO += currentR.length + 3;
         break;
      }
         regengO &= currentR.length;
      let macauI = regengO <= 6085090;
      do {
          let selection3 = String.fromCharCode(99,111,100,101,99,100,97,116,97,95,98,95,49,53,0);
          let middleK: Map<any, any> = new Map([[String.fromCharCode(101,120,104,97,117,115,116,101,100,95,118,95,50,55,0),987], [String.fromCharCode(116,114,105,97,110,103,108,101,115,95,113,95,50,0),57]]);
         regengO &= 2 / (Math.max(10, middleK.size));
         selection3 = `${selection3.length}`;
         middleK = new Map([[selection3, selection3.length >> (Math.min(2, selection3.length))]]);
         if (macauI) {
            break;
         }
      } while ((regengO < 3) && macauI);
         currentR.push(3 + currentR.length);
       let main_u6 = 4.0;
       let selecte = 3.0;
       let moviesU = 0.0;
         currentR.push(parseInt(`${selecte}`));
      for (let j = 0; j < 3; j++) {
         moviesU *= parseFloat(`${2 << (Math.min(Math.abs(parseInt(`${moviesU}`)), 5))}`);
      }
      appsR.push(((giftk ? 2 : 4) ^ 1));

    if (UMENG_CHANNEL === "GOOGLE_PLAY" && IS_ANDROID) {

   for (let b = 0; b < 1; b++) {
      v_unlockz |= ((modalQ ? 2 : 3));
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
                payment_type_icon: "dropdownScoreCustom.png",
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
                payment_type_icon: "dropdownScoreCustom.png",
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

       let detail4 = String.fromCharCode(104,95,55,49,95,105,114,99,97,109,0);
      if (detail4.length < 2) {
          let linkm = 0;
          let signinupP = 3.0;
          let stationu = String.fromCharCode(97,116,116,114,97,99,116,105,111,110,95,55,95,48,0);
         detail4 = `${stationu.length / (Math.max(4, parseInt(`${signinupP}`)))}`;
         linkm ^= linkm * linkm;
         signinupP /= Math.max(linkm + 3, 3);
      }
         detail4 += `${detail4.length}`;
         detail4 = `${detail4.length / 1}`;
      modalQ = modelsx.length >= groupX;

        

   if (2 < videor) {
       let producto = false;
       let uploadC = 1.0;
       let prediction5 = String.fromCharCode(103,95,56,55,95,99,111,100,101,99,112,114,105,118,0);
       let redirectU = String.fromCharCode(120,95,52,95,97,99,116,105,111,110,115,0);
         producto = redirectU == prediction5;
      for (let a = 0; a < 2; a++) {
          let rulesT = String.fromCharCode(97,114,101,118,101,114,115,101,95,111,95,51,57,0);
          let nextC = String.fromCharCode(118,95,53,49,95,99,111,110,116,97,99,116,115,0);
         redirectU += `${prediction5.length}`;
         rulesT = `${nextC.length % (Math.max(rulesT.length, 3))}`;
         nextC += `${rulesT.length * 3}`;
      }
      while (redirectU.startsWith(`${prediction5.length}`)) {
         prediction5 = `${(parseInt(`${uploadC}`) + (producto ? 3 : 3))}`;
         break;
      }
      let diceU = redirectU.length <= 5497988;
      do {
          let loginC = String.fromCharCode(115,105,103,105,108,108,95,57,95,52,53,0);
         redirectU = `${redirectU.length}`;
         loginC += "1";
         if (diceU) {
            break;
         }
      } while ((2.50 == (parseFloat(`${redirectU.length}`) * uploadC)) && diceU);
         producto = uploadC <= parseFloat(`${prediction5.length}`);
         redirectU += `${prediction5.length}`;
       let lista = String.fromCharCode(116,101,109,112,108,97,116,101,115,95,57,95,50,0);
         prediction5 = `${lista.length / 1}`;
       let type_s_y = true;
         producto = lista.length > 87 || 94.73 > uploadC;
         type_s_y = uploadC <= 55.27;
         prediction5 += `${redirectU.length}`;
      videor >>= Math.min(3, redirectU.length);
   }
        const index12Months = subscription.findIndex(
          (item) => item.title === "12个月"
        );

      groupX >>= Math.min(2, Math.abs(3 - videor));

        

      videor *= guideF.length;
        

   while (5 <= (v_unlockz + 5) || (videor + v_unlockz) <= 5) {
      videor %= Math.max(modelsx.length * 1, 5);
      break;
   }
        

      videor <<= Math.min(4, Math.abs((refreshP.length & (giftk ? 2 : 2))));
        

      videor %= Math.max(groupX % 2, 2);
        

       let linei = String.fromCharCode(115,95,52,49,95,97,110,110,101,120,98,0);
       let s_unlockf = String.fromCharCode(115,117,110,112,111,115,95,120,95,52,0);
       let stations2 = String.fromCharCode(106,95,53,57,95,97,103,103,105,110,102,111,0);
      for (let o = 0; o < 1; o++) {
          let stepl = 5.0;
          let xvodO = true;
          let blacklistm: Map<any, any> = new Map([[String.fromCharCode(120,95,57,57,95,115,116,97,114,0),618], [String.fromCharCode(111,95,52,95,104,97,114,100,116,104,114,101,115,104,0),143], [String.fromCharCode(100,101,112,97,99,107,101,116,105,122,101,114,95,103,95,49,57,0),84]]);
          let playlistR = 2.0;
          let lessc = 3.0;
         s_unlockf += `${s_unlockf.length}`;
         stepl *= parseFloat(`${3}`);
         xvodO = 60.4 > lessc;
         blacklistm.set(`${xvodO}`, blacklistm.size);
         playlistR /= Math.max(5, parseFloat(`${2}`));
         lessc += 2 >> (Math.min(5, Math.abs(parseInt(`${playlistR}`))));
      }
         s_unlockf += `${3 * s_unlockf.length}`;
          let malaysiaw = 2;
          let completet = 5;
          let nterstitialv = String.fromCharCode(112,95,50,52,95,99,111,100,101,115,0);
         linei = `${s_unlockf.length | malaysiaw}`;
         malaysiaw ^= completet;
         completet <<= Math.min(4, Math.abs(completet + nterstitialv.length));
         nterstitialv = `${nterstitialv.length}`;
      let frame_00y = 8734749 >= stations2.length;
      do {
          let episodesU: Array<any> = [String.fromCharCode(110,95,57,57,95,108,101,110,103,116,104,115,0), String.fromCharCode(99,104,97,116,95,118,95,51,54,0)];
          let update_kG = 5.0;
         stations2 = `${linei.length}`;
         episodesU = [episodesU.length];
         update_kG -= parseInt(`${update_kG}`) >> (Math.min(4, Math.abs(1)));
         if (frame_00y) {
            break;
         }
      } while (frame_00y && (!linei.includes(`${stations2.length}`)));
         s_unlockf = `${stations2.length}`;
      let kickt = stations2 == String.fromCharCode(54,121,102,100,54,56,102,0);
      do {
         stations2 += `${stations2.length}`;
         if (kickt) {
            break;
         }
      } while (kickt && (linei == String.fromCharCode(107,0)));
         linei = `${linei.length}`;
      if (s_unlockf.length <= linei.length) {
         s_unlockf = `${(String.fromCharCode(112,0) == stations2 ? linei.length : stations2.length)}`;
      }
      while (linei.length <= 4) {
         s_unlockf += `${linei.length}`;
         break;
      }
      modalQ = appsR.length == 47 || stations2.length == 47;

        

       let controlsU = String.fromCharCode(109,111,110,116,104,95,118,95,52,0);
          let whistlez = 0.0;
          let combined_ = 5;
          let result0 = 5.0;
         controlsU += `${parseInt(`${whistlez}`)}`;
         whistlez += combined_ * parseInt(`${result0}`);
         combined_ /= Math.max(1, 2);
         result0 /= Math.max(3, parseFloat(`${combined_ | 3}`));
       let componentu = String.fromCharCode(102,95,49,50,0);
       let resendr = String.fromCharCode(109,97,105,108,116,111,95,119,95,51,57,0);
         componentu += `${3 | controlsU.length}`;
      giftk = 14 >= v_unlockz || guideF.length >= 14;
        if (index12Months !== -1) {

   for (let a = 0; a < 1; a++) {
      refreshP += `${vietnam0.length << (Math.min(Math.abs(2), 4))}`;
   }
          const item12Months = subscription.splice(index12Months, 1)[0];

      giftk = guideF.length <= 64;
          subscription.splice(1, 0, item12Months);
        }

        

      giftk = !modalQ;
        

      modelsx = "2";
        setOneTimeProducts(oneTime);

   let sinaC = giftk ? !giftk : giftk;
   do {
       let chart5 = false;
      let crownx = chart5 ? !chart5 : chart5;
      do {
         chart5 = !chart5 || chart5;
         if (crownx) {
            break;
         }
      } while (crownx && (!chart5));
       let star3 = String.fromCharCode(111,95,57,50,95,101,120,116,114,97,115,0);
       let plashS = String.fromCharCode(113,95,54,51,95,114,101,99,111,118,101,114,0);
      while (3 <= star3.length) {
         star3 += `${(star3 == String.fromCharCode(53,0) ? star3.length : (chart5 ? 4 : 4))}`;
         break;
      }
      giftk = appsR.length >= 64;
      if (sinaC) {
         break;
      }
   } while ((!refreshP.startsWith(`${giftk}`)) && sinaC);
        setMembershipProducts(subscription);

      vietnam0 = `${((giftk ? 2 : 2))}`;
        setTimeout(() => {

      videor >>= Math.min(3, vietnam0.length);
          setFetching(false);
        }, 1000);
      }
    } else {

   let floateru = modalQ ? !modalQ : modalQ;
   do {
       let analyticB: Array<any> = [708, 992, 924];
       let gnews6 = String.fromCharCode(103,101,111,103,114,97,112,104,105,99,97,108,95,51,95,52,54,0);
       let basketballW = 0;
       let entryR = 2;
      if (entryR <= gnews6.length) {
         gnews6 = `${analyticB.length}`;
      }
      if ((basketballW / (Math.max(2, entryR))) == 3) {
          let heartn = String.fromCharCode(99,97,114,114,105,97,103,101,95,52,95,53,0);
          let megaphone4 = String.fromCharCode(121,95,56,55,95,111,116,111,105,0);
         basketballW /= Math.max(4, gnews6.length / (Math.max(1, 7)));
         heartn = `${2 + heartn.length}`;
         megaphone4 = `${megaphone4.length % 3}`;
      }
       let styleL: Map<any, any> = new Map([[String.fromCharCode(118,95,51,54,95,97,118,97,105,108,97,98,105,108,105,116,121,0),true ], [String.fromCharCode(106,95,57,56,95,115,105,103,110,97,98,108,101,0),false ]]);
      for (let a = 0; a < 3; a++) {
         basketballW += analyticB.length ^ 1;
      }
          let minivodW = String.fromCharCode(114,95,50,56,95,98,105,103,110,117,109,0);
          let sansb: Array<any> = [String.fromCharCode(104,95,51,48,95,99,108,97,110,103,0), String.fromCharCode(102,105,116,122,95,115,95,49,53,0), String.fromCharCode(114,95,49,52,95,100,111,119,110,108,101,102,116,0)];
         basketballW ^= 3;
         minivodW += `${sansb.length}`;
         sansb = [1];
         entryR ^= 2 % (Math.max(1, styleL.size));
      for (let x = 0; x < 1; x++) {
         entryR /= Math.max(entryR >> (Math.min(Math.abs(1), 1)), 4);
      }
         basketballW %= Math.max(1 ^ entryR, 4);
       let guideR = String.fromCharCode(114,116,112,95,102,95,50,53,0);
          let schedulez = true;
          let taiwanj = String.fromCharCode(98,95,50,54,95,118,112,100,115,112,0);
          let bootsplashX = String.fromCharCode(117,110,122,116,101,108,108,95,104,95,55,56,0);
         entryR += gnews6.length;
         schedulez = !schedulez;
         taiwanj = `${bootsplashX.length}`;
         bootsplashX = "2";
      let anytime5 = 5504055 <= entryR;
      do {
         entryR += 1;
         if (anytime5) {
            break;
         }
      } while ((!Array.from(styleL.values()).includes(entryR)) && anytime5);
       let dangerE = String.fromCharCode(122,95,53,95,105,116,120,102,109,0);
       let arrowQ = String.fromCharCode(103,95,50,50,95,110,117,109,101,114,97,108,0);
      modalQ = groupX >= 68;
      if (floateru) {
         break;
      }
   } while (floateru && (!modalQ));
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

      appsR = [((giftk ? 2 : 3) ^ v_unlockz)];

        

      modalQ = (74 >= (refreshP.length & (giftk ? 74 : refreshP.length)));
        const index12Months = siFang.findIndex(
          (item) => item.title === "12个月"
        );

      videor -= v_unlockz >> (Math.min(modelsx.length, 2));

        

   for (let c = 0; c < 2; c++) {
      modelsx += `${(String.fromCharCode(90,0) == kcopy_vA ? kcopy_vA.length : (giftk ? 3 : 4))}`;
   }
        if (index12Months !== -1) {

      groupX &= appsR.length + 1;
          const item12Months = siFang.splice(index12Months, 1)[0];

       let comments = String.fromCharCode(115,116,114,105,114,101,112,108,97,99,101,95,57,95,49,48,0);
       let rewindA = true;
       let emptyb = String.fromCharCode(111,95,52,57,95,122,105,103,122,97,103,0);
       let rewindv: Array<any> = [413, 934, 560];
          let indexN = 0;
          let sidex = String.fromCharCode(99,111,109,112,108,105,97,110,116,95,102,95,50,0);
          let actionE = 5.0;
         rewindA = (94 <= (emptyb.length & (rewindA ? 94 : emptyb.length)));
         indexN *= sidex.length / 3;
         sidex += `${sidex.length}`;
         actionE -= parseFloat(`${indexN ^ 2}`);
      for (let o = 0; o < 1; o++) {
         rewindv = [(String.fromCharCode(52,0) == comments ? rewindv.length : comments.length)];
      }
      while (2 >= emptyb.length) {
          let largex = 4.0;
         emptyb = `${comments.length}`;
         largex *= 3;
         break;
      }
         emptyb = `${(3 | (rewindA ? 5 : 3))}`;
      groupX |= appsR.length & 3;
          siFang.unshift(item12Months);
        }

        

       let commonU = false;
      while (!commonU) {
          let shootp: Array<any> = [235, 785, 204];
         commonU = !commonU;
         shootp.push(2);
         break;
      }
      if (commonU) {
         commonU = !commonU;
      }
       let searchA: Array<any> = [524, 606];
       let helper2: Array<any> = [504, 550, 684];
      groupX *= vietnam0.length;
        

   if (v_unlockz > 2) {
      modelsx += `${refreshP.length}`;
   }
        setMembershipProducts(siFang);

   let data2 = groupX >= 6446190;
   do {
       let serviceA = String.fromCharCode(108,95,51,51,95,97,112,111,115,0);
       let homet: Array<any> = [621, 4, 648];
       let transfer9 = String.fromCharCode(115,117,112,101,114,120,115,97,105,95,57,95,52,49,0);
         homet = [(String.fromCharCode(109,0) == transfer9 ? transfer9.length : homet.length)];
         homet = [transfer9.length ^ serviceA.length];
      let giftU = 6613896 >= homet.length;
      do {
         homet = [1 << (Math.min(2, serviceA.length))];
         if (giftU) {
            break;
         }
      } while (giftU && (2 > (serviceA.length & 5)));
          let mode3 = String.fromCharCode(121,95,56,52,95,121,111,102,102,115,101,116,0);
          let routerJ = 3;
         homet = [homet.length % (Math.max(mode3.length, 2))];
         mode3 = `${routerJ}`;
      for (let p = 0; p < 3; p++) {
         homet = [serviceA.length];
      }
         homet.push(serviceA.length << (Math.min(2, homet.length)));
       let mappingr = 2.0;
       let windK = 3.0;
      while ((3.46 * windK) > 4.86 || (windK / (Math.max(3.46, 5))) > 3.15) {
         windK *= parseFloat(`${homet.length}`);
         break;
      }
      if (serviceA == transfer9) {
         transfer9 += `${parseInt(`${windK}`) & homet.length}`;
      }
      groupX >>= Math.min(transfer9.length, 3);
      if (data2) {
         break;
      }
   } while (((groupX - 4) == 1 && 4 == (vietnam0.length - groupX)) && data2);
        setTimeout(() => {

   if (3 <= (kcopy_vA.length / 4)) {
      kcopy_vA = "1";
   }
          setFetching(false);
        }, 1000);
      }
    }
  };

  const handleGetGoogleProduct = async () => {
       let modityl = 0.0;
    let benefitP: Map<any, any> = new Map([[String.fromCharCode(122,95,55,48,95,115,117,98,118,105,101,119,101,114,0),260], [String.fromCharCode(118,95,54,55,95,104,97,110,100,108,101,0),875], [String.fromCharCode(97,108,108,101,116,95,57,95,50,57,0),713]]);
    let episodeR = String.fromCharCode(120,95,51,53,95,97,98,111,114,116,0);
    let agreementS = 5.0;
    let pingk: Map<any, any> = new Map([[String.fromCharCode(121,95,50,53,95,100,105,115,116,105,110,99,116,0),990], [String.fromCharCode(115,95,56,54,95,114,101,115,105,122,97,98,108,101,0),554]]);
    let rightD = 3;
    let closex = 0;
    let goal6 = false;
    let point7: Map<any, any> = new Map([[String.fromCharCode(113,95,57,51,95,99,108,111,115,101,100,0),String.fromCharCode(102,108,97,99,100,115,112,95,99,95,55,56,0)], [String.fromCharCode(114,101,101,110,97,98,108,101,95,48,95,51,51,0),String.fromCharCode(102,95,54,52,95,109,100,97,121,0)]]);
    let unselectedx = false;
    let appleO = 3.0;
    let bodanh = 2.0;
    let chinaS = 4.0;
    let macauQ: Map<any, any> = new Map([[String.fromCharCode(100,101,99,114,101,109,101,110,116,95,114,95,51,51,0),165], [String.fromCharCode(117,95,54,95,103,110,111,115,105,115,0),271], [String.fromCharCode(97,100,97,112,116,95,98,95,55,49,0),756]]);
    let dropdownn: Array<any> = [763, 469];
    let vertical_ = String.fromCharCode(99,111,110,118,101,114,116,105,98,108,101,95,55,95,51,49,0);
   while (benefitP.size > 3 || 4 > (3 / (Math.max(10, benefitP.size)))) {
      unselectedx = modityl < 80.72 && unselectedx;
      break;
   }
      pingk.set(`${appleO}`, (parseInt(`${appleO}`) * (unselectedx ? 1 : 1)));
   for (let w = 0; w < 3; w++) {
      closex *= ((unselectedx ? 3 : 5) | 3);
   }
   let leftH = closex >= 6423923;
   do {
      closex *= parseInt(`${appleO}`) << (Math.min(1, Math.abs(1)));
      if (leftH) {
         break;
      }
   } while ((5.85 < agreementS) && leftH);
      agreementS /= Math.max(3, 5);
      pingk = new Map([[`${benefitP.size}`, 2 >> (Math.min(2, Math.abs(benefitP.size)))]]);
       let searchs = String.fromCharCode(120,95,52,55,0);
      while (searchs.endsWith(searchs)) {
         searchs += `${searchs.length & 3}`;
         break;
      }
       let mailp = 4.0;
       let annerR = 2.0;
      if (searchs.length > 4) {
         annerR -= parseFloat(`${searchs.length / (Math.max(3, 10))}`);
      }
      benefitP = new Map([[`${appleO}`, parseInt(`${appleO}`)]]);
      point7 = new Map([[`${pingk.size}`, 2 & parseInt(`${agreementS}`)]]);

    try {
      await getProducts({ skus: iap_skus });
      await getSubscriptions({ skus: subs_skus });
    } catch (err) {

      appleO -= ((goal6 ? 4 : 5) ^ 1);
   let goalF = 8154677 >= benefitP.size;
   do {
       let rules_ = 3.0;
       let scoref = 3.0;
       let dangerf = String.fromCharCode(110,95,50,49,95,100,101,99,111,100,101,114,115,0);
       let sendl = String.fromCharCode(109,95,50,51,95,100,101,99,111,109,112,114,101,115,115,101,100,0);
       let langa: Map<any, any> = new Map([[String.fromCharCode(112,114,101,117,112,108,111,97,100,95,119,95,52,51,0),true ], [String.fromCharCode(109,95,57,95,119,101,120,112,97,110,100,0),false ]]);
      while (langa.size <= parseInt(`${scoref}`)) {
         langa.set(sendl, parseInt(`${scoref}`));
         break;
      }
      if ((sendl.length / (Math.max(6, langa.size))) >= 4) {
         sendl += `${sendl.length - 3}`;
      }
          let contextl = String.fromCharCode(118,115,101,114,118,105,99,101,95,100,95,56,48,0);
          let areak = 3.0;
          let pageg: Array<any> = [636, 899];
         sendl = "2";
         contextl += `${(String.fromCharCode(53,0) == contextl ? contextl.length : parseInt(`${areak}`))}`;
         areak -= parseFloat(`${contextl.length * pageg.length}`);
         pageg.push(parseInt(`${areak}`) * pageg.length);
         dangerf += `${(String.fromCharCode(116,0) == sendl ? langa.size : sendl.length)}`;
         sendl = `${parseInt(`${rules_}`) << (Math.min(Math.abs(3), 5))}`;
      let sideU = 7856005.0 <= scoref;
      do {
          let time_ufy: Array<any> = [719, 857];
          let thailandz = String.fromCharCode(112,101,114,109,117,116,101,115,95,53,95,52,51,0);
         scoref -= time_ufy.length + dangerf.length;
         time_ufy.push(thailandz.length / (Math.max(1, 10)));
         thailandz = `${thailandz.length >> (Math.min(Math.abs(2), 5))}`;
         if (sideU) {
            break;
         }
      } while (sideU && (rules_ <= 1.32));
       let calendari = String.fromCharCode(114,101,99,104,101,99,107,95,100,95,53,52,0);
       let macauF = String.fromCharCode(105,95,55,52,95,97,116,111,109,105,99,97,108,108,121,0);
         rules_ /= Math.max(parseFloat(`${dangerf.length / 1}`), 4);
       let trashS: Map<any, any> = new Map([[String.fromCharCode(118,111,116,101,115,95,50,95,54,50,0),false ], [String.fromCharCode(115,95,51,51,95,115,119,105,116,99,104,98,97,115,101,0),false ]]);
       let backO = 1;
       let typingm = 0;
          let playu = String.fromCharCode(115,117,98,102,114,97,109,101,95,114,95,57,54,0);
          let stationR = false;
         dangerf = `${playu.length}`;
         playu += `${(3 | (stationR ? 2 : 2))}`;
         calendari = `${parseInt(`${scoref}`) | 2}`;
         scoref -= 1 % (Math.max(4, langa.size));
      while (3 >= (1 << (Math.min(3, Math.abs(backO))))) {
         backO |= calendari.length;
         break;
      }
      if (1 == macauF.length) {
         macauF = "3";
      }
      benefitP.set(sendl, benefitP.size);
      if (goalF) {
         break;
      }
   } while ((benefitP.get(`${point7.size}`) != null) && goalF);
       let weiboz = String.fromCharCode(120,118,97,103,95,102,95,52,49,0);
       let promotionN = 5.0;
       let phonet = false;
          let targetB: Map<any, any> = new Map([[String.fromCharCode(99,111,108,105,110,101,97,114,95,57,95,53,50,0),762], [String.fromCharCode(114,101,109,117,120,101,114,95,114,95,55,48,0),511], [String.fromCharCode(105,95,56,95,105,110,116,101,114,112,111,108,97,116,111,114,115,0),930]]);
          let handler1 = 3.0;
         promotionN -= 3 / (Math.max(7, parseInt(`${promotionN}`)));
         targetB = new Map([[`${targetB.size}`, parseInt(`${handler1}`)]]);
         handler1 += parseFloat(`${parseInt(`${handler1}`) ^ targetB.size}`);
         promotionN *= parseInt(`${promotionN}`);
         phonet = weiboz.length >= 95;
         weiboz = `${(parseInt(`${promotionN}`) & (phonet ? 2 : 2))}`;
      let t_lockV = phonet ? !phonet : phonet;
      do {
          let controlsO = String.fromCharCode(101,120,116,101,116,110,100,101,100,95,104,95,49,54,0);
          let pointa: Map<any, any> = new Map([[String.fromCharCode(109,105,116,101,114,95,108,95,51,56,0),921], [String.fromCharCode(107,95,49,51,95,97,114,109,108,105,110,107,0),315]]);
          let loginS = false;
          let modityC: Map<any, any> = new Map([[String.fromCharCode(101,95,49,51,95,100,111,119,110,115,99,97,108,101,0),String.fromCharCode(99,121,99,108,101,100,95,107,95,54,0)], [String.fromCharCode(108,95,57,48,95,98,97,110,0),String.fromCharCode(102,95,52,57,95,98,101,97,116,105,110,103,0)], [String.fromCharCode(108,95,54,55,95,118,97,108,117,101,115,0),String.fromCharCode(99,95,52,51,95,106,112,103,0)]]);
         phonet = (weiboz.length * parseInt(`${promotionN}`)) < 18;
         controlsO = `${2 + modityC.size}`;
         pointa = new Map([[`${modityC.size}`, (String.fromCharCode(67,0) == controlsO ? modityC.size : controlsO.length)]]);
         loginS = (pointa.size | controlsO.length) <= 10;
         if (t_lockV) {
            break;
         }
      } while (t_lockV && (weiboz.length < 3 && !phonet));
          let group5 = String.fromCharCode(114,101,99,108,97,105,109,95,100,95,55,0);
          let favicon7 = 4;
         promotionN /= Math.max(favicon7, 2);
         group5 += "3";
         favicon7 -= (String.fromCharCode(83,0) == group5 ? group5.length : group5.length);
          let baidue = 1.0;
          let fulll = 0;
         promotionN *= fulll;
         baidue -= parseInt(`${baidue}`) ^ parseInt(`${baidue}`);
         fulll %= Math.max(2 - parseInt(`${baidue}`), 1);
      if ((promotionN - 3.18) == 3.21 || promotionN == 3.18) {
         promotionN *= parseInt(`${promotionN}`) << (Math.min(Math.abs(1), 4));
      }
          let reducers = String.fromCharCode(105,95,49,49,95,109,117,108,116,105,112,108,101,120,0);
         promotionN *= parseInt(`${promotionN}`) * weiboz.length;
         reducers = `${1 - reducers.length}`;
      modityl *= rightD * 1;
   for (let t = 0; t < 2; t++) {
      pingk = new Map([[`${benefitP.size}`, 2]]);
   }
       let successX = 0;
       let foundU = 1.0;
      if (4 >= successX) {
          let emojiL: Map<any, any> = new Map([[String.fromCharCode(116,97,108,108,95,110,95,49,53,0),91], [String.fromCharCode(110,116,101,114,102,97,99,101,95,53,95,52,52,0),182], [String.fromCharCode(115,113,114,116,110,101,103,95,109,95,54,55,0),495]]);
          let favicon6: Map<any, any> = new Map([[String.fromCharCode(108,95,52,52,95,99,97,108,99,117,108,97,116,101,0),323], [String.fromCharCode(102,95,55,50,0),165], [String.fromCharCode(122,95,54,54,95,99,97,112,0),875]]);
          let mappingO: Array<any> = [362, 962, 453];
          let assist6 = 3.0;
         foundU -= mappingO.length * parseInt(`${assist6}`);
         emojiL = new Map([[`${favicon6.size}`, emojiL.size]]);
         favicon6 = new Map([[`${favicon6.size}`, emojiL.size & 2]]);
         mappingO = [emojiL.size ^ 1];
         assist6 *= parseFloat(`${emojiL.size >> (Math.min(Math.abs(1), 3))}`);
      }
          let handlerV = false;
          let injury1 = 0;
          let promotionV = String.fromCharCode(116,105,109,101,118,97,108,95,53,95,57,55,0);
         successX += promotionV.length;
         handlerV = 20 < injury1;
         injury1 |= injury1 >> (Math.min(5, Math.abs(1)));
         promotionV += `${((handlerV ? 3 : 3) | injury1)}`;
      while (3.94 < (5.14 - foundU)) {
         successX &= parseInt(`${foundU}`);
         break;
      }
          let hooksT = String.fromCharCode(99,97,116,101,103,111,114,121,95,52,95,57,49,0);
          let tooltipsq = 2.0;
         successX >>= Math.min(3, Math.abs(2));
         hooksT = `${parseInt(`${tooltipsq}`) << (Math.min(hooksT.length, 3))}`;
         tooltipsq += parseFloat(`${2}`);
         foundU -= parseInt(`${foundU}`) | successX;
       let sansX = 0;
       let handlerv = 5;
      benefitP = new Map([[`${foundU}`, 1 / (Math.max(parseInt(`${bodanh}`), 8))]]);
      modityl += 3;
   let fullg = pingk.size <= 8308872;
   do {
      pingk.set(episodeR, episodeR.length * 2);
      if (fullg) {
         break;
      }
   } while (fullg && (3 <= (parseInt(`${bodanh}`) / (Math.max(pingk.size, 4))) || (bodanh / (Math.max(2, parseFloat(`${pingk.size}`)))) <= 5.83));
   if (episodeR.endsWith(`${unselectedx}`)) {
      unselectedx = 66 == pingk.size;
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
  }, [membershipSelected]);

  const handlePurchase = async () => {
       let modityC: Map<any, any> = new Map([[String.fromCharCode(112,108,97,121,108,105,115,116,95,104,95,52,56,0),String.fromCharCode(113,95,51,57,95,99,108,101,97,114,0)], [String.fromCharCode(97,95,55,56,95,97,108,108,111,99,97,116,105,111,110,0),String.fromCharCode(118,95,53,51,95,102,101,101,0)]]);
    let lessX = String.fromCharCode(105,114,100,102,116,95,57,95,57,50,0);
    let ballx = 1;
    let apps7 = 4.0;
    let mappingu = String.fromCharCode(111,95,52,51,95,116,114,101,101,116,111,107,0);
    let nalyticsB: Array<any> = [820, 775];
    let index0 = 3.0;
    let rankp = false;
    let appleb = String.fromCharCode(111,98,106,95,113,95,49,56,0);
    let transfers: Array<any> = [798, 88, 693];
    let y_count9 = 3;
    let championd = String.fromCharCode(106,95,54,50,95,100,114,105,118,101,0);
    let placeholdero = false;
    let moony: Map<any, any> = new Map([[String.fromCharCode(116,95,54,49,95,99,97,108,99,117,108,97,116,111,114,0),false ], [String.fromCharCode(101,120,97,109,112,108,101,95,55,95,56,57,0),true ]]);
    let downloaderL: Array<any> = [576, 610, 534];
    let otherC = String.fromCharCode(105,105,114,102,105,108,116,101,114,95,110,95,55,52,0);
   let penaltyS = rankp ? !rankp : rankp;
   do {
      rankp = !rankp;
      if (penaltyS) {
         break;
      }
   } while ((ballx < 3) && penaltyS);

    

   let flyer4 = 9053174 <= y_count9;
   do {
      y_count9 <<= Math.min(4, Math.abs(2));
      if (flyer4) {
         break;
      }
   } while ((!lessX.endsWith(`${y_count9}`)) && flyer4);
    

      mappingu += `${(appleb == String.fromCharCode(119,0) ? transfers.length : appleb.length)}`;
    

   while (1.59 == (parseFloat(`${y_count9}`) - apps7) || 3 == (2 % (Math.max(1, y_count9)))) {
       let windt = 5;
       let matches4 = 0.0;
       let memberM = String.fromCharCode(100,101,99,111,109,112,114,101,115,115,105,111,110,95,119,95,53,56,0);
       let calendarH: Map<any, any> = new Map([[String.fromCharCode(113,95,54,95,104,111,114,105,122,111,110,116,97,108,0),817], [String.fromCharCode(100,105,105,110,95,56,95,54,50,0),997], [String.fromCharCode(113,95,51,57,95,115,116,97,116,117,115,0),657]]);
       let watch0: Array<any> = [862, 732, 216];
         calendarH.set(`${windt}`, windt);
          let q_playerq = String.fromCharCode(119,95,55,95,103,97,116,101,100,0);
          let umengJ: Map<any, any> = new Map([[String.fromCharCode(100,111,119,110,114,105,103,104,116,95,110,95,53,50,0),971], [String.fromCharCode(102,116,118,99,108,95,56,95,53,52,0),154]]);
          let stationX = String.fromCharCode(111,95,50,95,98,121,116,101,108,101,110,0);
         calendarH = new Map([[`${watch0.length}`, (memberM == String.fromCharCode(52,0) ? watch0.length : memberM.length)]]);
         q_playerq += `${q_playerq.length}`;
         umengJ = new Map([[q_playerq, q_playerq.length - stationX.length]]);
         stationX += `${1 * q_playerq.length}`;
         watch0 = [1 << (Math.min(1, memberM.length))];
          let pressureZ = true;
          let updatesQ = String.fromCharCode(112,95,56,51,95,98,114,111,97,100,99,97,115,116,105,110,103,0);
         matches4 += 3 % (Math.max(9, memberM.length));
         pressureZ = updatesQ.length == 14 && !pressureZ;
         updatesQ = `${3 * updatesQ.length}`;
      while (2 > (windt << (Math.min(Math.abs(1), 4)))) {
          let short_zhR: Array<any> = [872, 989];
         matches4 += memberM.length;
         short_zhR = [short_zhR.length - short_zhR.length];
         break;
      }
         memberM = "1";
         memberM += `${2 % (Math.max(parseInt(`${matches4}`), 8))}`;
       let bodanh = String.fromCharCode(103,95,51,57,95,100,105,115,115,105,109,105,108,97,114,105,116,121,0);
       let anytimej = String.fromCharCode(105,95,49,52,95,105,100,101,110,116,105,102,105,101,114,115,0);
      for (let t = 0; t < 3; t++) {
         memberM = `${2 - calendarH.size}`;
      }
         memberM += "1";
      for (let i = 0; i < 1; i++) {
         calendarH = new Map([[`${calendarH.size}`, bodanh.length * 1]]);
      }
      while ((matches4 + 4.34) < 3.86) {
         matches4 /= Math.max(watch0.length, 1);
         break;
      }
          let loadingo = String.fromCharCode(115,95,51,53,95,110,97,109,101,115,0);
         windt <<= Math.min(3, memberM.length);
         loadingo += `${3 & loadingo.length}`;
          let layoutM = 1;
         anytimej += `${calendarH.size}`;
         layoutM %= Math.max(layoutM, 1);
       let iconM = 5;
      apps7 -= parseFloat(`${parseInt(`${matches4}`) << (Math.min(lessX.length, 3))}`);
      break;
   }
    

   for (let j = 0; j < 2; j++) {
       let analyticJ: Map<any, any> = new Map([[String.fromCharCode(100,95,49,95,115,108,105,99,101,115,0),String.fromCharCode(121,95,51,57,95,98,108,117,114,114,97,98,108,101,0)], [String.fromCharCode(100,95,50,54,95,111,102,102,101,116,0),String.fromCharCode(110,97,109,101,115,101,114,118,101,114,115,95,108,95,53,55,0)]]);
       let relatedV: Array<any> = [776, 585];
       let appleI = 5.0;
       let acceptedS = String.fromCharCode(118,105,111,108,101,116,95,120,95,57,50,0);
       let injuryW = false;
      if (!Array.from(analyticJ.values()).includes(appleI)) {
          let popup6 = false;
          let orangeb = String.fromCharCode(97,108,112,105,110,101,95,120,95,54,54,0);
          let refresh1 = String.fromCharCode(98,95,50,53,95,112,101,114,109,101,97,116,101,0);
          let tickedm = String.fromCharCode(109,95,48,95,112,116,115,101,115,0);
         appleI -= parseFloat(`${refresh1.length % (Math.max(2, acceptedS.length))}`);
         popup6 = orangeb.length < 19;
         orangeb += `${((popup6 ? 5 : 2))}`;
         refresh1 += `${(tickedm == String.fromCharCode(101,0) ? tickedm.length : (popup6 ? 2 : 3))}`;
      }
       let change1 = String.fromCharCode(122,95,53,56,95,102,102,109,112,101,103,0);
       let form4 = true;
         injuryW = !injuryW;
         appleI += parseFloat(`${3 ^ analyticJ.size}`);
          let danger9 = 5.0;
         form4 = danger9 < 82.58 && form4;
          let bannerV = String.fromCharCode(112,95,56,52,95,115,116,97,108,108,0);
          let matcho = false;
          let matchese = 3;
         change1 = `${relatedV.length}`;
         bannerV += `${1 ^ bannerV.length}`;
         matcho = bannerV.length < 75;
         matchese |= matchese / 1;
       let sliderN = false;
      let infoB = sliderN ? !sliderN : sliderN;
      do {
         sliderN = (change1.length >> (Math.min(4, Math.abs(analyticJ.size)))) == 90;
         if (infoB) {
            break;
         }
      } while (infoB && (1.82 > appleI && (appleI * 1.82) > 2.55));
      let smallS = sliderN ? !sliderN : sliderN;
      do {
         sliderN = relatedV.length == 72;
         if (smallS) {
            break;
         }
      } while ((sliderN) && smallS);
       let long_gb8: Map<any, any> = new Map([[String.fromCharCode(99,114,101,97,116,101,95,98,95,53,55,0),String.fromCharCode(101,121,101,95,111,95,54,56,0)], [String.fromCharCode(101,95,49,53,95,103,97,117,115,115,0),String.fromCharCode(120,95,53,54,95,110,97,110,111,115,0)], [String.fromCharCode(115,119,105,99,104,95,53,95,54,48,0),String.fromCharCode(108,101,97,100,105,110,103,95,117,95,55,50,0)]]);
       let umengq: Map<any, any> = new Map([[String.fromCharCode(108,95,57,55,95,99,97,112,0),false ], [String.fromCharCode(112,95,55,54,95,100,105,114,97,99,116,97,98,0),false ]]);
         form4 = long_gb8.size > 70;
      while (2 <= (umengq.size >> (Math.min(Math.abs(2), 3))) || (appleI / 2.100) <= 4.67) {
         umengq.set(`${injuryW}`, ((injuryW ? 5 : 5) | long_gb8.size));
         break;
      }
         acceptedS = `${long_gb8.size}`;
         injuryW = (sliderN ? form4 : sliderN);
      championd = "1";
   }
    

      championd += `${3 | lessX.length}`;

    

   for (let w = 0; w < 1; w++) {
      nalyticsB = [1];
   }
    

       let lightU = String.fromCharCode(106,95,54,54,95,112,97,115,115,98,0);
       let xvodN = String.fromCharCode(115,113,108,99,105,112,104,101,114,95,102,95,52,54,0);
      let paginationm = 8214351 >= lightU.length;
      do {
         lightU += `${(xvodN == String.fromCharCode(84,0) ? lightU.length : xvodN.length)}`;
         if (paginationm) {
            break;
         }
      } while (paginationm && (xvodN.length <= lightU.length));
         lightU += `${lightU.length * 2}`;
      if (lightU.length == xvodN.length) {
         xvodN = `${(String.fromCharCode(70,0) == lightU ? xvodN.length : lightU.length)}`;
      }
      while (lightU != xvodN) {
          let combineF = 1.0;
          let eacto = 1.0;
          let taiwanv = String.fromCharCode(97,95,57,95,104,102,108,105,112,0);
         xvodN += `${1 >> (Math.min(3, Math.abs(parseInt(`${combineF}`))))}`;
         combineF /= Math.max((parseFloat(`${String.fromCharCode(49,0) == taiwanv ? taiwanv.length : parseInt(`${eacto}`)}`)), 2);
         eacto += 1;
         break;
      }
          let unselectedB = 5.0;
         lightU = `${xvodN.length}`;
         unselectedB += parseFloat(`${parseInt(`${unselectedB}`) & 1}`);
         lightU += `${2 % (Math.max(6, xvodN.length))}`;
      apps7 += parseFloat(`${mappingu.length - ballx}`);
    setIsBtnEnable(false);

   if (!transfers.includes(apps7)) {
       let football9 = 3.0;
      if ((football9 / (Math.max(7, football9))) <= 2.22 && (football9 / (Math.max(football9, 7))) <= 2.22) {
          let window_tJ = 3.0;
         football9 *= parseInt(`${football9}`) & parseInt(`${window_tJ}`);
      }
       let window_78 = 2;
       let register__yD = 4;
      while (1 > (window_78 / (Math.max(parseInt(`${football9}`), 1))) || 1 > (window_78 / (Math.max(parseInt(`${football9}`), 10)))) {
          let serviceT: Map<any, any> = new Map([[String.fromCharCode(119,95,52,55,95,99,105,114,99,117,108,97,116,105,110,103,0),String.fromCharCode(97,118,101,114,97,103,101,95,116,95,53,52,0)], [String.fromCharCode(115,95,49,48,48,95,104,121,98,114,105,100,0),String.fromCharCode(100,95,56,56,95,115,117,98,116,105,116,108,101,0)]]);
          let fully = String.fromCharCode(97,95,56,51,95,98,117,108,108,101,116,0);
         football9 *= window_78 + serviceT.size;
         serviceT.set(fully, fully.length | fully.length);
         break;
      }
      apps7 -= parseFloat(`${2 >> (Math.min(1, appleb.length))}`);
   }
    try {

      nalyticsB.push(nalyticsB.length);
      setIsVisible(true);

      rankp = 84 > nalyticsB.length || 84 > transfers.length;

      if (zfSelected === "GOOGLE_PAY") {

      championd = `${(lessX == String.fromCharCode(83,0) ? parseInt(`${index0}`) : lessX.length)}`;
        console.log("google method");

       let infoa = 3.0;
       let singaporet: Map<any, any> = new Map([[String.fromCharCode(99,114,108,102,95,48,95,55,56,0),194], [String.fromCharCode(118,97,114,105,97,100,105,99,95,50,95,49,48,0),564], [String.fromCharCode(121,95,52,49,95,99,112,117,102,108,97,103,115,0),37]]);
       let turnx = String.fromCharCode(101,102,102,101,99,116,105,118,101,95,100,95,49,51,0);
          let logoX: Map<any, any> = new Map([[String.fromCharCode(118,95,52,51,95,112,114,101,102,105,120,0),649], [String.fromCharCode(99,111,110,115,105,115,116,101,110,99,121,95,113,95,50,53,0),345]]);
          let const_5Y = String.fromCharCode(99,95,57,56,95,115,117,109,120,0);
         singaporet.set(`${infoa}`, parseInt(`${infoa}`) + singaporet.size);
         logoX.set(const_5Y, 2);
         const_5Y += `${const_5Y.length}`;
      for (let g = 0; g < 1; g++) {
         infoa += parseFloat(`${turnx.length}`);
      }
      while (3 <= (3 + singaporet.size)) {
          let privacyM = String.fromCharCode(115,121,109,98,111,108,105,99,95,99,95,56,0);
          let logoutP = String.fromCharCode(117,95,50,51,95,108,105,98,114,97,114,105,101,115,0);
          let malaysiaF: Map<any, any> = new Map([[String.fromCharCode(119,95,57,52,95,116,114,97,105,116,0),383], [String.fromCharCode(98,105,116,105,122,101,110,95,55,95,57,55,0),491], [String.fromCharCode(116,101,120,116,108,101,95,111,95,53,56,0),802]]);
          let paginationQ = 4.0;
          let dropdowny: Map<any, any> = new Map([[String.fromCharCode(115,111,114,116,101,100,95,55,95,53,53,0),350], [String.fromCharCode(114,95,49,55,95,102,112,109,98,0),531]]);
         singaporet = new Map([[logoutP, logoutP.length]]);
         privacyM += `${parseInt(`${paginationQ}`) | dropdowny.size}`;
         malaysiaF.set(`${paginationQ}`, privacyM.length ^ parseInt(`${paginationQ}`));
         dropdowny = new Map([[`${dropdowny.size}`, parseInt(`${paginationQ}`)]]);
         break;
      }
       let heartr = 3;
       let navigationF = 4;
       let modalE = false;
       let episodesq = false;
         episodesq = heartr < navigationF;
      for (let a = 0; a < 1; a++) {
          let sidef = 0.0;
         episodesq = heartr >= parseInt(`${infoa}`);
         sidef -= parseFloat(`${3 >> (Math.min(Math.abs(parseInt(`${sidef}`)), 4))}`);
      }
         turnx = `${navigationF ^ 2}`;
         turnx = `${singaporet.size / (Math.max(1, 5))}`;
      moony = new Map([[`${nalyticsB.length}`, 1 ^ parseInt(`${apps7}`)]]);
        console.log("the data: ", membershipSelected);

       let crowns = 0.0;
         crowns /= Math.max(3, parseFloat(`${parseInt(`${crowns}`)}`));
      for (let h = 0; h < 2; h++) {
          let floater1 = 4.0;
         crowns /= Math.max(1, parseFloat(`${parseInt(`${crowns}`) % (Math.max(8, parseInt(`${floater1}`)))}`));
      }
      if (crowns <= crowns) {
          let resend8 = 1.0;
          let time_3g6 = String.fromCharCode(103,114,97,112,104,99,121,99,108,101,115,95,97,95,53,56,0);
          let mappingj = false;
         crowns -= parseFloat(`${1 * time_3g6.length}`);
         resend8 -= parseFloat(`${parseInt(`${resend8}`) * 2}`);
         time_3g6 = `${(parseInt(`${resend8}`) - (mappingj ? 4 : 1))}`;
         mappingj = 70.63 > resend8 && mappingj;
      }
      appleb = `${nalyticsB.length ^ 2}`;

        if (membershipSelected.productType === "iap") {
          await requestPurchase({ skus: [membershipSelected.productSKU] });
        } else if (membershipSelected.productType === "subs") {

      apps7 /= Math.max(4, parseFloat(`${transfers.length}`));
          const subs = subscriptions.find(
            (sub) => sub.productId === membershipSelected.productSKU
          );

   if ((parseFloat(`${y_count9}`) * index0) > 4.65 && (index0 * 4.65) > 2.90) {
      index0 /= Math.max(parseFloat(`${3 ^ nalyticsB.length}`), 1);
   }

          if (subs) {

   if (lessX.length >= championd.length) {
       let modeR = String.fromCharCode(120,95,55,52,95,105,102,110,115,0);
       let backwardt = 1.0;
       let settingU = 1.0;
       let styleI = true;
      while ((5.97 - backwardt) > 5.63) {
         backwardt *= ((styleI ? 5 : 4) * parseInt(`${settingU}`));
         break;
      }
      for (let n = 0; n < 3; n++) {
          let stationsQ = String.fromCharCode(115,99,113,117,101,114,121,95,107,95,50,0);
          let dataO = 4.0;
          let guideE = String.fromCharCode(109,118,114,101,102,95,118,95,52,51,0);
         modeR += `${guideE.length - parseInt(`${dataO}`)}`;
         stationsQ += `${stationsQ.length}`;
         dataO -= (parseFloat(`${String.fromCharCode(55,0) == stationsQ ? stationsQ.length : stationsQ.length}`));
      }
      while ((backwardt / (Math.max(3, 3))) <= 2.55) {
         settingU += (parseFloat(`${(styleI ? 1 : 3) ^ parseInt(`${settingU}`)}`));
         break;
      }
      let popupO = String.fromCharCode(100,119,102,110,0) == modeR;
      do {
          let nextC = 3.0;
         modeR += `${(parseInt(`${settingU}`) - (styleI ? 3 : 2))}`;
         nextC /= Math.max(parseInt(`${nextC}`), 1);
         if (popupO) {
            break;
         }
      } while ((modeR.length >= backwardt) && popupO);
         settingU += parseFloat(`${3 >> (Math.min(Math.abs(parseInt(`${settingU}`)), 3))}`);
         modeR = `${parseInt(`${settingU}`) / 3}`;
      for (let o = 0; o < 3; o++) {
          let viewers = 4.0;
          let less6 = String.fromCharCode(107,95,52,57,95,98,117,102,115,0);
          let chinaV = String.fromCharCode(99,111,110,116,97,105,110,95,113,95,53,52,0);
         styleI = settingU < backwardt;
         viewers /= Math.max(parseFloat(`${less6.length}`), 5);
         less6 = `${(String.fromCharCode(99,0) == less6 ? less6.length : chinaV.length)}`;
         chinaV += `${parseInt(`${viewers}`)}`;
      }
      if (5 < (1 | modeR.length) || 1.32 < (backwardt + 2.38)) {
         modeR = "3";
      }
      championd += `${transfers.length * modityC.size}`;
   }
            const offerToken = subs.subscriptionOfferDetails[0].offerToken;

       let vignette8 = String.fromCharCode(114,97,115,116,101,114,95,116,95,54,57,0);
      let stationY = vignette8.length >= 8951664;
      do {
         vignette8 = "1";
         if (stationY) {
            break;
         }
      } while ((!vignette8.endsWith(vignette8)) && stationY);
          let handlerv = String.fromCharCode(110,95,55,48,95,105,110,115,116,97,110,99,101,0);
          let targetw = 5.0;
         vignette8 = `${1 ^ vignette8.length}`;
         handlerv += "1";
         targetw /= Math.max(5, 3);
      for (let n = 0; n < 3; n++) {
         vignette8 = `${vignette8.length}`;
      }
      apps7 += parseFloat(`${mappingu.length & 2}`);
            await requestSubscription({
              sku: membershipSelected.productSKU,
              ...(offerToken && {
                subscriptionOffers: [
                  { sku: membershipSelected.productSKU, offerToken },
                ],
              }),
            });
          } else {

      ballx >>= Math.min(Math.abs(parseInt(`${apps7}`) & championd.length), 1);
            throw new Error("subscription plan not found");
          }
        }
      } else {

   for (let y = 0; y < 1; y++) {
      apps7 *= parseFloat(`${1}`);
   }
        console.log("4 fang method");

      index0 *= parseFloat(`${nalyticsB.length + 1}`);
        handleZfGateway();
      }
    } catch (error) {

       let scheduleV = 3.0;
       let pauseX: Map<any, any> = new Map([[String.fromCharCode(111,112,97,99,105,116,121,95,97,95,51,57,0),String.fromCharCode(109,95,57,49,95,112,114,101,112,114,111,103,114,97,109,109,101,100,0)], [String.fromCharCode(109,95,49,48,95,98,117,102,102,101,114,101,100,0),String.fromCharCode(99,95,57,48,95,101,110,99,111,100,101,100,102,114,97,109,101,0)], [String.fromCharCode(99,95,51,51,95,117,112,100,97,116,101,114,0),String.fromCharCode(115,117,98,115,101,113,117,101,110,99,101,95,122,95,51,51,0)]]);
       let feedbackk = 2.0;
      for (let b = 0; b < 2; b++) {
         feedbackk /= Math.max(pauseX.size << (Math.min(3, Math.abs(parseInt(`${feedbackk}`)))), 1);
      }
      for (let z = 0; z < 3; z++) {
         pauseX.set(`${scheduleV}`, pauseX.size << (Math.min(Math.abs(3), 2)));
      }
      for (let u = 0; u < 1; u++) {
         pauseX.set(`${feedbackk}`, pauseX.size);
      }
          let userG = 3;
          let appsL = false;
         pauseX = new Map([[`${scheduleV}`, (parseInt(`${scheduleV}`) + (appsL ? 1 : 3))]]);
         userG += userG;
         appsL = 64 >= userG;
         feedbackk /= Math.max(3 * parseInt(`${feedbackk}`), 2);
      if (2.71 <= (pauseX.size * feedbackk) || (parseInt(`${feedbackk}`) * pauseX.size) <= 3) {
         pauseX.set(`${scheduleV}`, 2);
      }
          let weiboB = String.fromCharCode(115,116,114,101,97,109,105,100,95,110,95,54,53,0);
         pauseX = new Map([[`${feedbackk}`, parseInt(`${feedbackk}`) - weiboB.length]]);
       let linef = String.fromCharCode(99,116,114,120,95,117,95,52,51,0);
         scheduleV *= parseInt(`${feedbackk}`) >> (Math.min(3, Math.abs(3)));
      mappingu += `${(mappingu.length + (placeholdero ? 1 : 3))}`;
      setIsVisible(false);

      ballx /= Math.max(1, 5);
      if (error instanceof PurchaseError) {

   let guideu = rankp ? !rankp : rankp;
   do {
      rankp = (apps7 + ballx) < 13;
      if (guideu) {
         break;
      }
   } while (guideu && (rankp && (apps7 / (Math.max(3.55, 4))) >= 4.75));
        console.error("purchasing error: " + error);
      } else {

   let userP = rankp ? !rankp : rankp;
   do {
      rankp = 73.11 < index0 || transfers.length < 89;
      if (userP) {
         break;
      }
   } while ((3 == ballx) && userP);
        console.error("handle purchase error: ", error);
      }

      if (error && error?.code == "E_USER_CANCELLED") {

   if ((4 & ballx) >= 3 || 4 >= (championd.length & 4)) {
      ballx += 1;
   }
        console.log("user cancel purchase");

   if ((2 / (Math.max(9, nalyticsB.length))) >= 5) {
       let champion2 = 3.0;
       let floatingk: Map<any, any> = new Map([[String.fromCharCode(103,114,97,109,115,95,109,95,51,49,0),709], [String.fromCharCode(120,109,117,108,116,105,112,108,101,95,107,95,55,49,0),404], [String.fromCharCode(118,95,57,57,95,99,104,101,99,107,115,117,109,115,0),562]]);
      while (floatingk.get(`${champion2}`) != null) {
          let downW = String.fromCharCode(120,95,54,53,95,110,101,97,114,101,110,100,0);
          let yellowl = 2;
          let statistics4: Array<any> = [145, 277, 867];
          let homeL = String.fromCharCode(105,110,99,111,109,105,110,103,95,50,95,51,56,0);
         champion2 /= Math.max(2, 1);
         downW += `${3 & downW.length}`;
         yellowl ^= 1 / (Math.max(3, yellowl));
         statistics4 = [3 << (Math.min(5, statistics4.length))];
         homeL += `${statistics4.length >> (Math.min(downW.length, 5))}`;
         break;
      }
      let connectionr = 8690610.0 <= champion2;
      do {
         champion2 /= Math.max(parseInt(`${champion2}`), 1);
         if (connectionr) {
            break;
         }
      } while ((3 == (floatingk.size + 5)) && connectionr);
         champion2 -= 1;
          let buttond = String.fromCharCode(100,95,49,48,0);
         champion2 *= buttond.length ^ floatingk.size;
      while ((4 / (Math.max(10, floatingk.size))) == 3) {
          let pressure3: Array<any> = [306, 747, 117];
         floatingk.set(`${champion2}`, pressure3.length + parseInt(`${champion2}`));
         break;
      }
      let const_9j8 = 8088570 <= floatingk.size;
      do {
         floatingk.set(`${champion2}`, parseInt(`${champion2}`) % 1);
         if (const_9j8) {
            break;
         }
      } while ((3.84 == (champion2 / (Math.max(floatingk.size, 2))) && 3.84 == (champion2 / (Math.max(floatingk.size, 4)))) && const_9j8);
      nalyticsB = [parseInt(`${champion2}`) - 3];
   }
        setIsBtnEnable(true);
      } else {

      y_count9 %= Math.max(1, (3 & (placeholdero ? 2 : 3)));
        setDialogText(failedDialogText);

       let privilege0 = 0.0;
         privilege0 -= parseInt(`${privilege0}`);
      let upload3 = 5592777.0 >= privilege0;
      do {
         privilege0 -= parseInt(`${privilege0}`) & 1;
         if (upload3) {
            break;
         }
      } while ((2.12 >= (privilege0 - 5.91)) && upload3);
          let down2 = false;
          let telegram5 = String.fromCharCode(121,95,56,48,95,99,101,114,116,115,0);
          let readk: Array<any> = [68, 585, 729];
         privilege0 += readk.length;
         down2 = telegram5.length < 9 && down2;
         telegram5 = `${((down2 ? 1 : 1) * telegram5.length)}`;
         readk = [((down2 ? 2 : 2))];
      modityC.set(`${y_count9}`, 3 | nalyticsB.length);
        setIsDialogOpen(true);
      }
    }
  };

  const handleZfGateway = async () => {
       let orange1 = 1.0;
    let privilege6 = 3.0;
    let componentG: Array<any> = [128, 256, 317];
    let confirmationJ = 5.0;
    let whistlef: Map<any, any> = new Map([[String.fromCharCode(112,114,101,100,105,99,116,111,114,95,50,95,50,0),true ], [String.fromCharCode(112,95,55,54,95,105,105,110,116,0),true ]]);
    let edit4 = 5.0;
    let emptyn = String.fromCharCode(104,95,54,56,95,97,117,116,111,97,114,99,104,105,118,101,0);
    let description_v1J = 2;
    let f_playerh = String.fromCharCode(115,105,110,102,95,109,95,56,50,0);
    let countdownI: Map<any, any> = new Map([[String.fromCharCode(109,111,100,101,114,110,95,102,95,56,0),831], [String.fromCharCode(103,95,56,95,101,120,112,101,99,116,0),603]]);
    let down0: Array<any> = [991, 342, 279];
    let philippinesV = 1;
    let expandF = String.fromCharCode(101,112,101,108,95,56,95,54,50,0);
       let tempJ: Map<any, any> = new Map([[String.fromCharCode(103,95,53,53,95,108,117,116,100,0),true ], [String.fromCharCode(117,95,57,95,109,100,97,116,0),false ], [String.fromCharCode(111,95,50,57,95,118,116,97,98,0),false ]]);
       let robotoa = 2.0;
          let emptyQ = true;
          let playlistC: Array<any> = [String.fromCharCode(120,95,54,57,95,109,117,108,116,105,112,108,121,105,110,103,0), String.fromCharCode(114,95,52,53,95,104,97,115,104,107,101,121,0), String.fromCharCode(97,112,112,108,105,99,97,116,105,111,110,95,115,95,53,56,0)];
          let streamingi = String.fromCharCode(111,98,115,101,114,118,101,95,104,95,56,49,0);
         tempJ.set(`${robotoa}`, parseInt(`${robotoa}`));
         emptyQ = String.fromCharCode(95,0) == streamingi;
         playlistC = [playlistC.length];
         streamingi += `${((emptyQ ? 1 : 1) / (Math.max(8, playlistC.length)))}`;
       let changeG = String.fromCharCode(112,97,114,97,109,115,95,99,95,56,54,0);
       let robotoo = String.fromCharCode(113,95,55,50,95,97,99,97,108,99,0);
       let controlT = 3.0;
         robotoo = `${robotoo.length}`;
         changeG += `${tempJ.size & parseInt(`${robotoa}`)}`;
         robotoo += `${tempJ.size}`;
      componentG.push(emptyn.length);
   let selectedl = 6428085.0 <= orange1;
   do {
      orange1 *= 1 + parseInt(`${confirmationJ}`);
      if (selectedl) {
         break;
      }
   } while (selectedl && (5.30 >= (orange1 * 3.50) || 3.90 >= (3.50 + confirmationJ)));
      orange1 += 2 << (Math.min(5, Math.abs(parseInt(`${privilege6}`))));

    try {

   while ((privilege6 * description_v1J) > 1.52 && 4.56 > (privilege6 * 1.52)) {
      privilege6 += whistlef.size;
      break;
   }
       let storeh = String.fromCharCode(121,95,51,51,95,97,105,109,105,110,103,0);
       let fastforwardQ: Map<any, any> = new Map([[String.fromCharCode(112,97,115,115,102,95,113,95,55,54,0),68], [String.fromCharCode(117,95,57,51,95,99,111,110,102,105,114,109,97,116,105,111,110,0),310], [String.fromCharCode(100,95,49,48,48,0),330]]);
       let appsr = String.fromCharCode(108,111,99,105,95,118,95,56,54,0);
      while (storeh.startsWith(`${appsr.length}`)) {
          let appleL = String.fromCharCode(99,111,110,102,105,103,117,114,101,95,116,95,49,51,0);
          let logoutA = 0.0;
         appsr += `${storeh.length}`;
         appleL += `${2 >> (Math.min(4, Math.abs(parseInt(`${logoutA}`))))}`;
         logoutA /= Math.max(5, parseFloat(`${parseInt(`${logoutA}`)}`));
         break;
      }
          let y_playerY = 5.0;
          let trashp = 1.0;
          let macauk = false;
         appsr = `${((macauk ? 2 : 1) - 1)}`;
         y_playerY += parseFloat(`${3 % (Math.max(parseInt(`${trashp}`), 4))}`);
         trashp -= parseFloat(`${parseInt(`${y_playerY}`)}`);
         macauk = 17.2 <= trashp;
       let photop = String.fromCharCode(104,109,104,100,95,116,95,51,50,0);
         fastforwardQ = new Map([[storeh, appsr.length]]);
      if (fastforwardQ.size >= appsr.length) {
         fastforwardQ.set(`${storeh}`, 2);
      }
          let whatsappV = true;
          let launchT = String.fromCharCode(97,99,99,101,112,116,101,100,95,57,95,56,56,0);
          let nativem: Array<any> = [String.fromCharCode(102,95,55,54,95,100,108,105,100,120,0), String.fromCharCode(109,115,110,119,99,95,54,95,54,48,0), String.fromCharCode(111,95,56,54,95,99,97,112,97,98,105,108,105,116,121,0)];
         photop += "1";
         whatsappV = nativem.length < 44;
         launchT += `${((whatsappV ? 5 : 3) >> (Math.min(nativem.length, 2)))}`;
      let thumbnailf = photop.length >= 6576225;
      do {
         photop = "2";
         if (thumbnailf) {
            break;
         }
      } while ((photop.length >= 3) && thumbnailf);
         fastforwardQ = new Map([[`${fastforwardQ.size}`, (String.fromCharCode(105,0) == appsr ? appsr.length : fastforwardQ.size)]]);
         photop = `${storeh.length % (Math.max(1, 4))}`;
      privilege6 += parseInt(`${edit4}`);
       let nextT = String.fromCharCode(103,95,49,54,95,104,101,97,100,112,104,111,110,101,115,0);
      for (let d = 0; d < 3; d++) {
         nextT = "3";
      }
          let v_unlockU = String.fromCharCode(105,100,101,110,116,105,102,105,101,114,115,95,56,95,55,51,0);
          let left8 = false;
          let tickedM = String.fromCharCode(110,95,54,52,95,100,101,108,97,116,101,100,0);
         nextT = `${tickedM.length}`;
         v_unlockU = `${v_unlockU.length / (Math.max(6, v_unlockU.length))}`;
         left8 = v_unlockU.length > 8;
      let xvodE = String.fromCharCode(108,98,102,117,108,120,53,48,100,102,0) == nextT;
      do {
          let crossB: Map<any, any> = new Map([[String.fromCharCode(120,95,53,48,95,99,111,109,112,108,101,120,0),false ], [String.fromCharCode(99,111,114,101,95,119,95,51,55,0),true ], [String.fromCharCode(120,95,54,56,95,114,116,99,99,0),true ]]);
          let eventi = 5.0;
          let blacklistT = 1.0;
          let kickR = 1;
          let annerD = 1.0;
         nextT += `${parseInt(`${blacklistT}`)}`;
         crossB = new Map([[`${crossB.size}`, 3]]);
         eventi += 2;
         blacklistT -= kickR;
         kickR |= crossB.size << (Math.min(3, Math.abs(kickR)));
         annerD -= 3 * parseInt(`${eventi}`);
         if (xvodE) {
            break;
         }
      } while (xvodE && (nextT.length < 5));
      whistlef.set(f_playerh, parseInt(`${privilege6}`) + 3);
      const result = await GESmallEvent.postFinzfOrder({
        productId: parseInt(membershipSelected.productId),
        zfType: zfSelected,
      });

   let china9 = 7323312.0 <= confirmationJ;
   do {
      confirmationJ *= 1;
      if (china9) {
         break;
      }
   } while ((2.23 <= (edit4 + confirmationJ) || 2.23 <= (edit4 + confirmationJ)) && china9);
       let loginf = String.fromCharCode(99,95,53,50,95,112,114,101,118,105,101,119,112,112,0);
       let gpayU = String.fromCharCode(99,95,49,50,95,114,101,103,105,115,116,101,114,0);
       let pause5 = String.fromCharCode(111,95,54,57,95,100,105,115,116,105,110,99,116,0);
          let interstitialp = String.fromCharCode(119,97,108,107,116,104,114,111,117,103,104,95,99,95,51,55,0);
          let x_countf = true;
          let update_7yD = String.fromCharCode(118,101,114,115,105,111,110,101,100,95,52,95,50,54,0);
         gpayU = `${update_7yD.length ^ 2}`;
         interstitialp += `${2 & interstitialp.length}`;
         x_countf = 72 < interstitialp.length;
      for (let e = 0; e < 2; e++) {
         loginf += `${gpayU.length}`;
      }
         gpayU += `${loginf.length / (Math.max(pause5.length, 10))}`;
       let linkf: Map<any, any> = new Map([[String.fromCharCode(115,101,110,100,95,49,95,53,0),406], [String.fromCharCode(98,95,56,53,95,118,111,119,101,108,115,0),214]]);
      if (pause5.length == loginf.length) {
         loginf += `${pause5.length - linkf.size}`;
      }
      let logoz = 8883690 >= loginf.length;
      do {
          let telegramj: Array<any> = [664, 195, 992];
         loginf += `${(String.fromCharCode(103,0) == loginf ? loginf.length : telegramj.length)}`;
         if (logoz) {
            break;
         }
      } while ((gpayU.length < 1) && logoz);
      while (loginf != String.fromCharCode(106,0)) {
         gpayU += `${linkf.size}`;
         break;
      }
          let gemfilet: Map<any, any> = new Map([[String.fromCharCode(104,95,52,49,95,107,101,114,110,101,114,0),String.fromCharCode(122,111,110,101,95,57,95,50,52,0)], [String.fromCharCode(107,95,57,54,95,100,105,115,97,98,108,101,115,0),String.fromCharCode(116,101,108,101,103,114,97,95,52,95,55,57,0)]]);
          let regengp: Map<any, any> = new Map([[String.fromCharCode(103,95,53,95,119,109,97,112,114,111,100,97,116,97,0),487], [String.fromCharCode(103,95,56,56,95,103,101,116,99,117,116,0),358]]);
         pause5 = "3";
         gemfilet = new Map([[`${regengp.size}`, gemfilet.size]]);
         regengp.set(`${regengp.size}`, regengp.size / (Math.max(gemfilet.size, 6)));
          let trashQ = String.fromCharCode(109,97,116,104,101,115,95,57,95,54,53,0);
          let nativeD = 5.0;
          let gemfileM = 5.0;
         linkf = new Map([[trashQ, 3 >> (Math.min(3, loginf.length))]]);
         trashQ = `${parseInt(`${gemfileM}`)}`;
         nativeD *= parseFloat(`${3 & parseInt(`${nativeD}`)}`);
      description_v1J ^= 3;
       let privilegec = String.fromCharCode(102,95,56,57,95,115,121,110,99,104,114,111,110,105,122,101,97,98,108,101,0);
      let checkboxQ = privilegec.length <= 9838838;
      do {
         privilegec += `${privilegec.length ^ 2}`;
         if (checkboxQ) {
            break;
         }
      } while (checkboxQ && (privilegec.length == privilegec.length));
          let readr = 3.0;
          let bootsplashe = String.fromCharCode(121,95,56,56,95,115,116,114,105,110,103,115,0);
          let selectU: Array<any> = [String.fromCharCode(105,115,108,111,119,95,97,95,51,53,0), String.fromCharCode(115,119,105,116,99,104,101,100,95,98,95,53,51,0)];
         privilegec = `${selectU.length}`;
         readr -= parseFloat(`${3}`);
         bootsplashe = `${bootsplashe.length * parseInt(`${readr}`)}`;
         selectU = [bootsplashe.length];
       let connection0 = true;
       let searchbarU = false;
      f_playerh += `${countdownI.size}`;
      console.log("returned order data: ", result);

   if (4 <= f_playerh.length) {
      f_playerh = `${countdownI.size + 1}`;
   }
   let awayl = confirmationJ >= 9594435.0;
   do {
      confirmationJ -= whistlef.size;
      if (awayl) {
         break;
      }
   } while (awayl && (!f_playerh.includes(`${confirmationJ}`)));
      countdownI.set(`${confirmationJ}`, whistlef.size ^ parseInt(`${confirmationJ}`));

      if (result.paymentData.url) {

   let fullI = countdownI.size >= 8937405;
   do {
       let specm: Array<any> = [83, 466];
       let successe = 1;
       let acopy_pw: Array<any> = [862, 252];
       let switch__dD: Array<any> = [String.fromCharCode(98,117,102,102,101,114,105,110,103,95,117,95,49,48,48,0), String.fromCharCode(105,95,50,57,95,115,116,97,99,107,0), String.fromCharCode(106,105,116,116,101,114,95,54,95,51,51,0)];
      while (acopy_pw.includes(successe)) {
          let turnw = String.fromCharCode(97,108,101,114,116,95,120,95,57,57,0);
          let playlistN = 5.0;
          let found1 = false;
          let injuryJ = 2;
         acopy_pw = [(parseInt(`${playlistN}`) * (found1 ? 5 : 1))];
         turnw += `${injuryJ / (Math.max(3, 8))}`;
         playlistN += injuryJ;
         found1 = turnw.length < injuryJ;
         break;
      }
      let sharedp = 9363470 <= acopy_pw.length;
      do {
         acopy_pw.push(1 ^ successe);
         if (sharedp) {
            break;
         }
      } while (((5 * specm.length) < 5) && sharedp);
       let loginm = String.fromCharCode(114,95,54,49,95,110,111,115,99,97,108,101,0);
      let iconq = loginm.length <= 6332405;
      do {
         loginm += `${specm.length | 3}`;
         if (iconq) {
            break;
         }
      } while ((switch__dD.length < 4) && iconq);
      while ((1 ^ switch__dD.length) < 5) {
         switch__dD.push(switch__dD.length);
         break;
      }
      if (!loginm.includes(`${successe}`)) {
         successe &= loginm.length;
      }
      if (5 < loginm.length) {
         loginm = `${specm.length}`;
      }
         switch__dD = [specm.length * acopy_pw.length];
         loginm += `${specm.length * successe}`;
         successe /= Math.max(3, 3);
      for (let f = 0; f < 1; f++) {
         successe %= Math.max(switch__dD.length + loginm.length, 5);
      }
         successe &= 2 + successe;
      countdownI.set(emptyn, 1);
      if (fullI) {
         break;
      }
   } while (fullI && (emptyn.startsWith(`${countdownI.size}`)));
   if (2 <= f_playerh.length) {
      privilege6 /= Math.max(parseInt(`${privilege6}`), 1);
   }
   if (description_v1J >= 5) {
       let handlerr = 2;
       let downo = String.fromCharCode(116,95,57,52,95,115,104,97,100,101,0);
       let header2 = String.fromCharCode(114,95,53,51,95,111,110,118,101,114,115,97,116,105,111,110,0);
       let projectX = 4;
         downo += `${header2.length % 2}`;
         header2 = `${downo.length}`;
      while (!downo.startsWith(`${projectX}`)) {
         downo = `${handlerr}`;
         break;
      }
      for (let n = 0; n < 1; n++) {
          let floaterK = String.fromCharCode(99,95,49,95,116,121,112,105,110,103,0);
         downo = `${(String.fromCharCode(74,0) == downo ? handlerr : downo.length)}`;
         floaterK = `${floaterK.length | floaterK.length}`;
      }
         downo = `${projectX % 1}`;
       let minid = false;
         downo += `${downo.length ^ header2.length}`;
          let scoreY: Array<any> = [725, 796, 552];
         projectX |= scoreY.length;
      for (let u = 0; u < 2; u++) {
         minid = (handlerr | downo.length) >= 80;
      }
         projectX += 2;
         header2 = `${(String.fromCharCode(107,0) == header2 ? header2.length : (minid ? 4 : 4))}`;
      for (let e = 0; e < 3; e++) {
         minid = downo.length > 12;
      }
      description_v1J <<= Math.min(5, Math.abs(3));
   }
        openLink(result.paymentData.url, result.transaction_id);
      } else throw new Error("no url is retuned");
    } catch (error) {

   let logoutt = 4941141 <= componentG.length;
   do {
      componentG.push(countdownI.size);
      if (logoutt) {
         break;
      }
   } while ((confirmationJ <= 4.38) && logoutt);
   for (let f = 0; f < 3; f++) {
      privilege6 /= Math.max(1, 3);
   }
   while (4.43 >= (edit4 * 2.47) || (countdownI.size << (Math.min(Math.abs(4), 2))) >= 3) {
       let selectionW = 5.0;
       let auto_xh = String.fromCharCode(112,108,117,114,97,108,105,122,97,116,105,111,110,95,97,95,51,57,0);
       let launcht: Array<any> = [String.fromCharCode(102,100,99,116,100,115,112,95,122,95,56,52,0), String.fromCharCode(103,95,53,57,95,115,117,98,106,101,99,116,115,0)];
       let yellow9 = String.fromCharCode(114,101,116,114,105,101,114,95,48,95,51,49,0);
       let result4 = String.fromCharCode(115,95,55,0);
      for (let y = 0; y < 3; y++) {
         result4 += `${(String.fromCharCode(88,0) == result4 ? yellow9.length : result4.length)}`;
      }
          let controlM: Array<any> = [335, 613];
         yellow9 += `${(String.fromCharCode(73,0) == auto_xh ? launcht.length : auto_xh.length)}`;
         controlM.push(controlM.length / (Math.max(2, 1)));
       let tailr = 5.0;
       let rnewsg = 1.0;
      for (let u = 0; u < 2; u++) {
         result4 = `${result4.length >> (Math.min(2, Math.abs(parseInt(`${tailr}`))))}`;
      }
      if ((tailr + parseFloat(`${auto_xh.length}`)) < 5.73 || (auto_xh.length % 2) < 4) {
         tailr /= Math.max(2, parseFloat(`${result4.length}`));
      }
         rnewsg -= parseFloat(`${2 | parseInt(`${rnewsg}`)}`);
      let anytimeH = 6254779.0 <= selectionW;
      do {
         selectionW *= parseFloat(`${result4.length & 2}`);
         if (anytimeH) {
            break;
         }
      } while ((parseInt(`${selectionW}`) >= auto_xh.length) && anytimeH);
          let formC = 5;
         selectionW -= parseFloat(`${1 ^ formC}`);
       let regeng_: Map<any, any> = new Map([[String.fromCharCode(115,117,109,97,114,121,95,53,95,56,48,0),true ], [String.fromCharCode(111,95,52,52,95,108,101,110,0),true ], [String.fromCharCode(101,114,114,95,97,95,50,50,0),false ]]);
      for (let d = 0; d < 2; d++) {
          let volume2 = true;
         launcht.push(3);
      }
      if (3.95 >= (3.71 - tailr) || (parseFloat(`${result4.length}`) - tailr) >= 3.71) {
         result4 = `${(String.fromCharCode(69,0) == result4 ? parseInt(`${tailr}`) : result4.length)}`;
      }
       let giftv = String.fromCharCode(116,114,97,110,115,108,97,116,105,111,110,95,110,95,55,55,0);
       let modityY = String.fromCharCode(101,95,50,52,95,109,112,101,103,97,117,100,105,111,100,115,112,0);
      while (yellow9.startsWith(`${launcht.length}`)) {
          let vietnamI = String.fromCharCode(112,95,52,53,95,109,112,115,117,98,0);
          let macau9 = false;
          let basketball9 = String.fromCharCode(98,105,116,100,101,112,116,104,95,112,95,57,49,0);
          let slidera = 5.0;
          let configy = 3.0;
         yellow9 += `${2 | auto_xh.length}`;
         vietnamI = `${3 / (Math.max(parseInt(`${slidera}`), 9))}`;
         macau9 = 94.29 < (configy + slidera);
         basketball9 = `${vietnamI.length}`;
         configy -= vietnamI.length;
         break;
      }
          let aboutO: Array<any> = [548, 471, 481];
          let gemfilea: Array<any> = [924, 214, 771];
         giftv = `${regeng_.size * result4.length}`;
         aboutO = [aboutO.length + 2];
         gemfilea.push(2);
       let headerQ = String.fromCharCode(105,115,116,115,95,106,95,56,49,0);
       let tailry = String.fromCharCode(99,95,56,50,95,102,105,110,103,101,114,112,114,105,110,116,0);
      edit4 -= launcht.length % (Math.max(emptyn.length, 8));
      break;
   }
      console.log("error catch: ", error);

   let previewD = description_v1J >= 7748578;
   do {
      description_v1J ^= 1;
      if (previewD) {
         break;
      }
   } while (((f_playerh.length << (Math.min(Math.abs(3), 4))) >= 5 && (3 << (Math.min(1, f_playerh.length))) >= 1) && previewD);
      orange1 /= Math.max(3, componentG.length);
      orange1 *= 2;
      setDialogText(axiosErrorText);

   while (1 <= (1 / (Math.max(8, whistlef.size)))) {
      whistlef = new Map([[`${whistlef.size}`, 1 & whistlef.size]]);
      break;
   }
   for (let v = 0; v < 3; v++) {
      description_v1J |= parseInt(`${edit4}`) << (Math.min(4, Math.abs(2)));
   }
       let analyticsT = String.fromCharCode(101,95,53,49,95,103,97,117,103,101,0);
         analyticsT += `${analyticsT.length}`;
      for (let b = 0; b < 3; b++) {
         analyticsT = `${analyticsT.length - 3}`;
      }
          let predictionC = String.fromCharCode(104,111,114,110,95,107,95,55,49,0);
          let j_centerz = String.fromCharCode(97,103,103,105,110,102,111,95,54,95,54,52,0);
         analyticsT = `${(predictionC == String.fromCharCode(116,0) ? j_centerz.length : predictionC.length)}`;
      description_v1J += philippinesV & 1;
      setIsDialogOpen(true);
    }
  };

  const openEmailApp = () => {
       let collectiona: Map<any, any> = new Map([[String.fromCharCode(108,97,110,103,95,98,95,57,49,0),617], [String.fromCharCode(108,97,116,101,98,105,110,100,105,110,103,115,121,109,98,111,108,116,97,98,108,101,95,117,95,56,56,0),345], [String.fromCharCode(97,110,111,110,121,109,111,117,115,95,100,95,52,52,0),952]]);
    let tickm = false;
    let side3 = 4;
    let stations_ = String.fromCharCode(99,95,51,51,95,99,101,110,116,114,97,108,0);
    let filterE = 3;
    let long_bi: Array<any> = [890, 445];
    let backC = String.fromCharCode(103,95,53,56,95,97,108,97,114,109,0);
    let shareS = 1.0;
    let suggestionY = 1.0;
    let profileL: Map<any, any> = new Map([[String.fromCharCode(117,110,112,97,99,107,104,105,95,119,95,56,55,0),70], [String.fromCharCode(99,114,111,115,115,102,97,100,101,95,111,95,54,48,0),73], [String.fromCharCode(105,95,56,54,95,114,101,108,111,99,107,0),204]]);
   if (stations_.includes(`${side3}`)) {
      stations_ += `${parseInt(`${shareS}`)}`;
   }
      shareS /= Math.max(3, parseFloat(`${2 << (Math.min(1, stations_.length))}`));
   while ((4 & profileL.size) > 4) {
      profileL.set(backC, (backC == String.fromCharCode(107,0) ? backC.length : collectiona.size));
      break;
   }
      shareS /= Math.max(1, (parseFloat(`${String.fromCharCode(65,0) == backC ? backC.length : parseInt(`${suggestionY}`)}`)));
   let containerA = 5198404 <= backC.length;
   do {
      backC += `${2 & parseInt(`${suggestionY}`)}`;
      if (containerA) {
         break;
      }
   } while (containerA && (4.97 == (shareS + 4.63)));
   for (let c = 0; c < 3; c++) {
      long_bi.push(1);
   }
   let cast1 = 7893422 >= filterE;
   do {
       let heji4: Array<any> = [700, 277];
       let baiduc: Array<any> = [String.fromCharCode(115,119,97,112,95,115,95,53,48,0), String.fromCharCode(98,105,116,120,95,108,95,50,55,0)];
       let transferr = String.fromCharCode(100,101,99,111,109,112,111,115,101,95,53,95,57,50,0);
       let mail8: Array<any> = [String.fromCharCode(119,95,49,54,95,99,114,101,97,116,105,111,110,0), String.fromCharCode(101,110,99,111,100,101,109,98,95,100,95,52,50,0), String.fromCharCode(104,95,57,49,95,99,108,97,115,115,105,102,121,0)];
      for (let s = 0; s < 1; s++) {
          let heartw = 4.0;
          let tail_ = String.fromCharCode(100,105,115,97,98,108,101,95,112,95,56,50,0);
          let roomU = 0;
          let sound6 = String.fromCharCode(98,111,108,100,95,51,95,57,54,0);
          let fastforward1: Map<any, any> = new Map([[String.fromCharCode(99,95,50,49,95,97,108,116,101,114,110,97,116,105,118,101,115,0),true ], [String.fromCharCode(119,95,53,53,95,118,98,112,114,105,110,116,102,0),false ]]);
         mail8.push(1);
         heartw += roomU % 3;
         tail_ += `${tail_.length - 3}`;
         roomU -= roomU;
         sound6 += `${parseInt(`${heartw}`) & tail_.length}`;
         fastforward1.set(sound6, tail_.length);
      }
      let dataV = transferr.length <= 6858925;
      do {
         transferr = `${heji4.length - baiduc.length}`;
         if (dataV) {
            break;
         }
      } while (((1 ^ transferr.length) >= 4 && 1 >= (heji4.length ^ transferr.length)) && dataV);
      if (2 < (baiduc.length * 2) && 3 < (transferr.length * 2)) {
         transferr = `${(String.fromCharCode(65,0) == transferr ? transferr.length : mail8.length)}`;
      }
         baiduc.push(heji4.length);
          let e_titleW = 0.0;
         transferr += `${mail8.length}`;
         e_titleW *= parseInt(`${e_titleW}`) | 3;
      if ((transferr.length + mail8.length) == 1 && (transferr.length + 1) == 5) {
         mail8.push(heji4.length);
      }
         baiduc = [transferr.length & mail8.length];
      while ((baiduc.length << (Math.min(Math.abs(2), 2))) < 5) {
         baiduc.push(mail8.length >> (Math.min(Math.abs(3), 1)));
         break;
      }
      while ((transferr.length - 3) == 4) {
         transferr += `${heji4.length}`;
         break;
      }
      for (let j = 0; j < 2; j++) {
         baiduc.push(transferr.length + mail8.length);
      }
      let sportsc = 8096827 <= heji4.length;
      do {
          let gemfileA = 0;
          let q_titleW: Map<any, any> = new Map([[String.fromCharCode(117,110,102,111,114,109,97,116,116,101,100,95,117,95,50,52,0),String.fromCharCode(115,95,55,49,95,114,118,118,108,99,0)], [String.fromCharCode(115,112,111,110,115,111,114,101,100,95,49,95,56,57,0),String.fromCharCode(101,95,52,52,95,104,119,97,99,99,101,108,0)]]);
         heji4.push(heji4.length);
         gemfileA ^= q_titleW.size << (Math.min(Math.abs(3), 5));
         q_titleW = new Map([[`${q_titleW.size}`, q_titleW.size / (Math.max(2, 2))]]);
         if (sportsc) {
            break;
         }
      } while (sportsc && ((heji4.length / (Math.max(mail8.length, 4))) <= 3 || (heji4.length / (Math.max(mail8.length, 1))) <= 3));
         mail8.push(transferr.length / (Math.max(3, heji4.length)));
      filterE /= Math.max(stations_.length, 3);
      if (cast1) {
         break;
      }
   } while ((collectiona.size >= 1) && cast1);
   let statisticsQ = 9225853 >= collectiona.size;
   do {
       let lightZ: Array<any> = [925, 820, 943];
      while (lightZ.length >= lightZ.length) {
         lightZ.push(lightZ.length);
         break;
      }
      let minivodV = 6397646 >= lightZ.length;
      do {
         lightZ = [lightZ.length];
         if (minivodV) {
            break;
         }
      } while (minivodV && ((lightZ.length | lightZ.length) >= 4 && 2 >= (4 | lightZ.length)));
      if (lightZ.includes(lightZ.length)) {
         lightZ.push(lightZ.length);
      }
      collectiona.set(`${shareS}`, parseInt(`${shareS}`) / (Math.max(1, 10)));
      if (statisticsQ) {
         break;
      }
   } while (statisticsQ && (collectiona.size <= backC.length));
   while ((suggestionY + 3.45) == 5.13) {
       let taiwanv = String.fromCharCode(103,95,50,95,102,105,120,117,112,0);
       let episodesu = 3.0;
       let auto_fne = false;
          let native1: Map<any, any> = new Map([[String.fromCharCode(115,95,57,51,95,100,101,118,105,99,101,115,0),852], [String.fromCharCode(98,95,48,95,111,118,101,114,97,108,108,0),885], [String.fromCharCode(103,117,105,100,115,95,107,95,49,57,0),780]]);
         auto_fne = !auto_fne;
         native1.set(`${native1.size}`, native1.size);
      for (let d = 0; d < 1; d++) {
          let gmailp = 5.0;
          let scorev: Array<any> = [946, 10, 56];
          let save0: Array<any> = [String.fromCharCode(97,117,116,104,101,110,116,105,99,97,116,105,111,110,95,119,95,51,49,0), String.fromCharCode(100,95,54,55,95,99,111,109,112,105,108,101,111,112,116,105,111,110,103,101,116,0), String.fromCharCode(103,95,49,95,116,101,120,116,102,105,108,101,0)];
          let acceptede = String.fromCharCode(115,117,114,102,95,102,95,49,48,48,0);
         episodesu /= Math.max(parseInt(`${episodesu}`), 2);
         gmailp /= Math.max(1, parseFloat(`${scorev.length}`));
         scorev = [1 / (Math.max(7, scorev.length))];
         save0.push(parseInt(`${gmailp}`));
         acceptede = `${save0.length | 2}`;
      }
      if (!taiwanv.endsWith(`${auto_fne}`)) {
          let n_countf = 3.0;
          let combinedt = String.fromCharCode(102,97,115,116,102,105,114,115,116,112,97,115,115,95,113,95,52,49,0);
          let whiteh: Array<any> = [229, 984, 862];
          let o_unlockH: Map<any, any> = new Map([[String.fromCharCode(102,95,56,55,95,100,101,99,111,114,97,116,111,114,115,0),570], [String.fromCharCode(108,95,52,50,95,102,102,112,108,97,121,0),922], [String.fromCharCode(120,95,53,51,95,115,108,111,116,0),888]]);
         auto_fne = combinedt.length == 15;
         n_countf /= Math.max(parseFloat(`${o_unlockH.size}`), 1);
         combinedt = `${whiteh.length}`;
         whiteh = [parseInt(`${n_countf}`)];
         o_unlockH = new Map([[`${o_unlockH.size}`, whiteh.length >> (Math.min(Math.abs(1), 1))]]);
      }
         auto_fne = taiwanv.length >= 68;
      let storek = String.fromCharCode(97,55,112,50,0) == taiwanv;
      do {
         taiwanv += "2";
         if (storek) {
            break;
         }
      } while (storek && (4 == taiwanv.length));
         episodesu += 3 + taiwanv.length;
          let catagoryT = true;
          let fille = 5.0;
         taiwanv += `${2 / (Math.max(parseInt(`${episodesu}`), 5))}`;
         catagoryT = !catagoryT;
         fille *= 3 << (Math.min(Math.abs(parseInt(`${fille}`)), 1));
      while (5 < (taiwanv.length / (Math.max(7, parseInt(`${episodesu}`)))) && (taiwanv.length / (Math.max(1, episodesu))) < 3.49) {
         episodesu -= (taiwanv == String.fromCharCode(77,0) ? parseInt(`${episodesu}`) : taiwanv.length);
         break;
      }
      while (!taiwanv.includes(`${auto_fne}`)) {
         auto_fne = !auto_fne;
         break;
      }
      suggestionY *= parseFloat(`${parseInt(`${shareS}`)}`);
      break;
   }
       let appleJ: Map<any, any> = new Map([[String.fromCharCode(115,95,52,55,95,114,108,118,108,99,0),127], [String.fromCharCode(120,107,101,101,112,95,116,95,50,0),197], [String.fromCharCode(105,109,112,97,99,116,95,48,95,50,52,0),644]]);
       let serviceg = String.fromCharCode(122,95,52,95,117,121,118,121,116,111,121,117,118,0);
       let annerO = String.fromCharCode(107,95,53,50,95,114,97,112,105,100,0);
       let stationsF = String.fromCharCode(100,101,105,110,116,95,121,95,49,53,0);
       let taiwanH = String.fromCharCode(108,95,52,49,95,100,111,99,105,100,0);
          let matchesY = 1.0;
          let readE: Map<any, any> = new Map([[String.fromCharCode(102,95,55,48,95,104,101,120,0),654], [String.fromCharCode(101,110,103,105,110,101,115,95,98,95,52,53,0),697], [String.fromCharCode(118,95,56,50,95,117,110,105,0),746]]);
         serviceg = `${appleJ.size}`;
         matchesY *= parseInt(`${matchesY}`) / 2;
         readE = new Map([[`${readE.size}`, 3]]);
         taiwanH += `${(serviceg == String.fromCharCode(105,0) ? serviceg.length : annerO.length)}`;
      let rewindL = appleJ.size <= 6619454;
      do {
         appleJ = new Map([[annerO, (String.fromCharCode(114,0) == taiwanH ? annerO.length : taiwanH.length)]]);
         if (rewindL) {
            break;
         }
      } while (((4 ^ taiwanH.length) < 2 || (appleJ.size ^ taiwanH.length) < 4) && rewindL);
          let notificationr = String.fromCharCode(99,111,100,101,99,105,100,95,113,95,52,54,0);
         taiwanH += `${(taiwanH == String.fromCharCode(89,0) ? taiwanH.length : appleJ.size)}`;
         notificationr = `${3 & notificationr.length}`;
         taiwanH += `${2 << (Math.min(4, stationsF.length))}`;
          let castj = false;
         appleJ.set(taiwanH, 3 - stationsF.length);
         castj = (!castj ? !castj : castj);
          let forma = String.fromCharCode(113,95,49,52,95,110,111,116,101,0);
         taiwanH += `${serviceg.length * annerO.length}`;
         forma = `${forma.length}`;
         appleJ.set(stationsF, stationsF.length);
      collectiona = new Map([[`${appleJ.size}`, appleJ.size & 3]]);
      profileL.set(stations_, 3);
   while (backC.length <= profileL.size) {
      backC += `${profileL.size}`;
      break;
   }
   while (filterE < 4 && 1 < (4 >> (Math.min(4, Math.abs(filterE))))) {
      tickm = backC == String.fromCharCode(111,0);
      break;
   }
   let turnm = 7836148 <= long_bi.length;
   do {
       let sansT = true;
       let kick5 = String.fromCharCode(97,95,56,50,95,104,101,105,103,104,116,115,0);
       let sell3 = String.fromCharCode(115,104,105,109,109,101,114,105,110,103,95,109,95,55,53,0);
         sell3 += `${kick5.length << (Math.min(3, sell3.length))}`;
         kick5 += `${(String.fromCharCode(50,0) == kick5 ? kick5.length : sell3.length)}`;
      for (let m = 0; m < 3; m++) {
         sell3 += "3";
      }
       let default_7O = 4.0;
          let photo4 = 0;
          let descw = 3.0;
         sansT = photo4 <= 34;
         photo4 %= Math.max(2, 2);
         descw += 2;
          let constantsJ = 2.0;
         sell3 = `${2 & sell3.length}`;
         constantsJ += parseInt(`${constantsJ}`) & parseInt(`${constantsJ}`);
      while (2 <= (sell3.length + 5) || 3.27 <= (sell3.length - default_7O)) {
          let submito = true;
          let borderlessv: Map<any, any> = new Map([[String.fromCharCode(110,101,101,100,115,95,102,95,51,51,0),String.fromCharCode(113,99,111,109,95,104,95,54,55,0)], [String.fromCharCode(119,95,53,49,95,108,105,98,111,112,101,110,104,0),String.fromCharCode(116,95,57,49,95,99,111,110,116,97,105,110,101,114,0)]]);
         sell3 += `${2 * parseInt(`${default_7O}`)}`;
         submito = (67 <= (borderlessv.size << (Math.min(2, Math.abs((submito ? 67 : borderlessv.size))))));
         break;
      }
      while (sansT || kick5.length <= 3) {
         kick5 = `${parseInt(`${default_7O}`)}`;
         break;
      }
          let k_countL = String.fromCharCode(109,111,100,105,102,105,101,100,95,110,95,51,48,0);
         sansT = !sansT;
         k_countL += `${2 >> (Math.min(5, k_countL.length))}`;
      long_bi = [stations_.length / (Math.max(1, 5))];
      if (turnm) {
         break;
      }
   } while ((backC.length >= long_bi.length) && turnm);
      suggestionY += parseFloat(`${2}`);
       let thailandC = true;
          let firebaset = 5.0;
          let stylex = 5;
         thailandC = 37.69 <= firebaset || thailandC;
         firebaset -= parseFloat(`${stylex << (Math.min(5, Math.abs(stylex)))}`);
      if (thailandC) {
         thailandC = (!thailandC ? thailandC : !thailandC);
      }
         thailandC = !thailandC;
      collectiona = new Map([[`${tickm}`, filterE]]);
      filterE &= collectiona.size;
   while ((1 | backC.length) == 5 && 1 == (long_bi.length | backC.length)) {
      backC += `${backC.length / 1}`;
      break;
   }
   if (collectiona.get(`${long_bi.length}`) == null) {
      collectiona = new Map([[`${filterE}`, filterE % (Math.max(1, parseInt(`${shareS}`)))]]);
   }
   while (profileL.get(`${side3}`) == null) {
      profileL.set(`${suggestionY}`, parseInt(`${suggestionY}`));
      break;
   }
   let gestureN = filterE <= 6145559;
   do {
      filterE &= ((tickm ? 1 : 1) % (Math.max(collectiona.size, 3)));
      if (gestureN) {
         break;
      }
   } while (gestureN && (long_bi.includes(filterE)));

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
          modalPresentationStyle: "bootsplashGuide",
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
       let indexR: Array<any> = [49, 410, 842];
    let match4 = String.fromCharCode(103,101,110,101,114,97,116,101,95,48,95,51,49,0);
    let ticked4 = String.fromCharCode(114,101,112,108,97,121,101,114,95,101,95,53,48,0);
    let sinaw = 5.0;
    let report2 = String.fromCharCode(109,97,103,121,95,117,95,57,0);
    let referrerw = 2.0;
    let giftB = String.fromCharCode(102,114,97,112,115,95,110,95,52,48,0);
    let langY = String.fromCharCode(112,95,50,54,95,98,121,112,97,115,115,0);
    let setting9 = 4.0;
    let notificationG = 0.0;
    let soundv = 4.0;
    let gmailr = String.fromCharCode(114,115,116,110,95,104,95,56,57,0);
   while (4.76 > (5.80 / (Math.max(7, sinaw)))) {
      sinaw -= ticked4.length | giftB.length;
      break;
   }
      giftB = `${langY.length}`;
      ticked4 += `${3 | ticked4.length}`;
   while (5.88 >= (setting9 - notificationG) && (setting9 - 5.88) >= 2.31) {
      setting9 += giftB.length / (Math.max(4, parseInt(`${setting9}`)));
      break;
   }
   while (giftB.endsWith(`${sinaw}`)) {
      sinaw *= 3 * match4.length;
      break;
   }
       let volumeN: Array<any> = [981, 804];
       let chartx = 4.0;
          let sorti = String.fromCharCode(114,101,113,117,115,116,101,114,95,118,95,50,51,0);
         volumeN.push(parseInt(`${chartx}`));
         sorti += `${sorti.length}`;
      let phoneY = 7499700.0 >= chartx;
      do {
          let ajaxt = String.fromCharCode(112,95,52,54,95,114,101,99,111,110,115,116,114,117,99,116,0);
          let catagoryY = false;
         chartx += parseFloat(`${1 & parseInt(`${chartx}`)}`);
         ajaxt = `${(String.fromCharCode(120,0) == ajaxt ? ajaxt.length : (catagoryY ? 5 : 4))}`;
         catagoryY = (12 > ((catagoryY ? 12 : ajaxt.length) + ajaxt.length));
         if (phoneY) {
            break;
         }
      } while ((2.35 == (chartx + parseFloat(`${volumeN.length}`)) && (volumeN.length & 4) == 3) && phoneY);
      for (let r = 0; r < 2; r++) {
         volumeN = [parseInt(`${chartx}`)];
      }
         chartx *= parseFloat(`${1 ^ parseInt(`${chartx}`)}`);
      let member_ = 8435329 <= volumeN.length;
      do {
         volumeN.push(volumeN.length & parseInt(`${chartx}`));
         if (member_) {
            break;
         }
      } while (member_ && (2 >= volumeN.length));
      if ((chartx * 4.80) <= 2.15 && 4 <= (2 << (Math.min(2, volumeN.length)))) {
          let phone3 = 2;
         volumeN.push(parseInt(`${chartx}`));
         phone3 <<= Math.min(1, Math.abs(phone3));
      }
      ticked4 = "2";
   if ((1 ^ indexR.length) == 1) {
      indexR.push(ticked4.length >> (Math.min(Math.abs(2), 5)));
   }
   if (!giftB.endsWith(match4)) {
      match4 = `${parseInt(`${referrerw}`) & 3}`;
   }
      sinaw *= parseInt(`${referrerw}`);
       let volumeH = String.fromCharCode(104,95,57,56,95,101,120,112,108,105,99,105,116,0);
       let modeC = 2.0;
       let confirmationQ = false;
          let dangerB = String.fromCharCode(107,95,51,51,95,116,111,117,99,104,0);
          let actionh = String.fromCharCode(118,95,52,54,95,105,116,97,108,105,99,0);
         modeC -= ((confirmationQ ? 5 : 1));
         dangerB += `${actionh.length - dangerB.length}`;
         actionh += `${actionh.length << (Math.min(Math.abs(3), 4))}`;
      if (modeC <= 4.50) {
         modeC *= parseInt(`${modeC}`) - 2;
      }
      if (!confirmationQ && 5.47 == (3.7 + modeC)) {
         confirmationQ = modeC < 71.94;
      }
         modeC *= volumeH.length;
      while (!volumeH.endsWith(`${modeC}`)) {
          let selectionh = true;
          let short_ck = 1;
          let brightnessj: Array<any> = [String.fromCharCode(116,95,57,49,95,114,97,100,105,117,115,0), String.fromCharCode(114,101,103,97,116,104,101,114,105,110,103,95,100,95,51,48,0)];
          let areaK = 1.0;
         modeC -= parseInt(`${modeC}`) ^ 2;
         selectionh = brightnessj.length < areaK;
         short_ck |= parseInt(`${areaK}`) / 3;
         brightnessj.push(parseInt(`${areaK}`) * 3);
         break;
      }
      let emptyl = volumeH == String.fromCharCode(116,55,117,50,56,113,100,95,0);
      do {
          let descq = String.fromCharCode(119,95,50,52,95,121,117,118,114,103,98,0);
         volumeH += `${parseInt(`${modeC}`) ^ 2}`;
         descq = `${descq.length}`;
         if (emptyl) {
            break;
         }
      } while (emptyl && ((modeC - 3.57) >= 2.42 && (parseInt(`${modeC}`) - volumeH.length) >= 3));
       let philippinesk: Array<any> = [259, 418, 732];
      while (!confirmationQ && 2 >= (philippinesk.length >> (Math.min(Math.abs(4), 3)))) {
         confirmationQ = 63.37 <= modeC && confirmationQ;
         break;
      }
      for (let n = 0; n < 1; n++) {
          let verticalc = String.fromCharCode(99,95,56,56,95,119,105,114,101,102,114,97,109,101,0);
          let settingsd = String.fromCharCode(109,95,52,95,110,114,101,102,0);
          let gpayQ: Map<any, any> = new Map([[String.fromCharCode(114,95,50,57,95,98,105,111,109,101,116,114,105,99,115,0),828], [String.fromCharCode(109,100,101,99,95,121,95,49,48,48,0),298], [String.fromCharCode(98,95,55,95,115,111,110,111,0),491]]);
         modeC *= gpayQ.size;
         verticalc = `${settingsd.length}`;
         settingsd += "3";
         gpayQ = new Map([[settingsd, 3]]);
      }
      match4 = "2";
      referrerw *= (String.fromCharCode(104,0) == match4 ? parseInt(`${notificationG}`) : match4.length);
   let suggestiond = String.fromCharCode(99,104,48,102,0) == match4;
   do {
      match4 = `${parseInt(`${notificationG}`) << (Math.min(Math.abs(3), 1))}`;
      if (suggestiond) {
         break;
      }
   } while ((report2 != match4) && suggestiond);
       let castinga = 2;
         castinga *= castinga & castinga;
      while (3 < (3 + castinga)) {
         castinga %= Math.max(3, castinga);
         break;
      }
      if ((5 | castinga) == 4) {
         castinga *= castinga / 2;
      }
      setting9 -= 1 / (Math.max(4, parseInt(`${notificationG}`)));
   if (1.5 == (ticked4.length / (Math.max(5, referrerw)))) {
       let incidentl = false;
       let cross1: Array<any> = [112, 773, 189];
       let recommendationm: Array<any> = [817, 15, 622];
       let pointt = 2.0;
       let countdowng = String.fromCharCode(113,95,56,50,95,112,114,105,118,97,99,121,0);
      if (1 < countdowng.length) {
         countdowng = "3";
      }
      for (let x = 0; x < 3; x++) {
         incidentl = 80.98 >= pointt;
      }
         countdowng += `${parseInt(`${pointt}`) & recommendationm.length}`;
          let combinedj = String.fromCharCode(113,95,50,95,114,101,115,101,97,114,99,104,0);
          let usernamei = false;
         countdowng = "2";
         combinedj = `${(combinedj == String.fromCharCode(86,0) ? combinedj.length : (usernamei ? 1 : 3))}`;
         usernamei = combinedj.endsWith(`${usernamei}`);
         recommendationm.push(2 ^ parseInt(`${pointt}`));
          let spinnerx = String.fromCharCode(117,110,119,114,97,112,112,101,100,95,99,95,49,52,0);
         cross1 = [cross1.length << (Math.min(Math.abs(3), 5))];
         spinnerx = `${spinnerx.length ^ spinnerx.length}`;
      let private_vL = pointt <= 5858653.0;
      do {
         pointt *= parseInt(`${pointt}`);
         if (private_vL) {
            break;
         }
      } while (((recommendationm.length & 3) > 3 && 3.48 > (pointt + 2.35)) && private_vL);
         countdowng = `${cross1.length}`;
      for (let o = 0; o < 2; o++) {
          let bodan3 = true;
          let configw = String.fromCharCode(101,109,115,99,114,105,112,116,101,110,95,111,95,57,48,0);
          let zhuboT = 1.0;
          let rulesz: Map<any, any> = new Map([[String.fromCharCode(112,97,121,109,97,115,116,101,114,95,119,95,49,56,0),545], [String.fromCharCode(98,111,111,116,104,95,54,95,51,48,0),508]]);
          let launchw = String.fromCharCode(102,95,49,95,100,101,99,101,108,101,114,97,116,105,110,103,0);
         recommendationm = [rulesz.size % (Math.max(launchw.length, 10))];
         bodan3 = !configw.endsWith(`${bodan3}`);
         configw += `${configw.length}`;
         zhuboT += parseInt(`${zhuboT}`) + 2;
         rulesz.set(`${zhuboT}`, 3);
         launchw += "3";
      }
      for (let j = 0; j < 3; j++) {
         cross1.push(2);
      }
      let wind3 = cross1.length >= 8793746;
      do {
          let xnews6 = 4.0;
         cross1 = [((incidentl ? 1 : 5) ^ recommendationm.length)];
         xnews6 += 1 / (Math.max(parseInt(`${xnews6}`), 7));
         if (wind3) {
            break;
         }
      } while (wind3 && (parseInt(`${pointt}`) > cross1.length));
      if ((1 & cross1.length) == 1) {
         recommendationm.push(recommendationm.length);
      }
      if (1 >= countdowng.length) {
          let accepted0 = 2.0;
          let areae = 5.0;
          let successU = 4.0;
          let selectione: Array<any> = [750, 28, 62];
         incidentl = 17.18 == areae;
         accepted0 *= parseFloat(`${parseInt(`${accepted0}`) | 2}`);
         areae *= parseFloat(`${1}`);
         successU -= 2;
         selectione.push(parseInt(`${successU}`) << (Math.min(selectione.length, 4)));
      }
      for (let y = 0; y < 3; y++) {
          let loginv: Map<any, any> = new Map([[String.fromCharCode(119,97,108,107,101,114,95,55,95,49,53,0),false ], [String.fromCharCode(109,105,108,105,111,110,115,95,106,95,55,55,0),false ], [String.fromCharCode(100,95,56,53,95,114,101,108,105,97,98,108,101,0),true ]]);
          let moond = 3.0;
          let foundF = 0.0;
          let fullR = String.fromCharCode(115,97,118,101,115,116,97,116,101,95,100,95,57,54,0);
         recommendationm = [cross1.length];
         loginv = new Map([[`${foundF}`, fullR.length * 2]]);
         moond += (parseFloat(`${fullR == String.fromCharCode(55,0) ? fullR.length : loginv.size}`));
         foundF -= 2 * parseInt(`${foundF}`);
      }
         pointt += (countdowng == String.fromCharCode(83,0) ? countdowng.length : (incidentl ? 5 : 2));
      referrerw -= recommendationm.length;
   }
      report2 += `${langY.length & parseInt(`${setting9}`)}`;
      langY += `${langY.length | 1}`;

              setDialogText(tryAgainDialogText);

   if ((1 - ticked4.length) <= 3 && 2.77 <= (4.84 - sinaw)) {
      sinaw /= Math.max(4, parseInt(`${setting9}`) % 3);
   }
   for (let m = 0; m < 3; m++) {
      setting9 += giftB.length + 1;
   }
       let f_lockz = String.fromCharCode(115,99,97,110,110,101,114,95,55,95,54,54,0);
      while (f_lockz == String.fromCharCode(112,0) || 5 >= f_lockz.length) {
         f_lockz += "2";
         break;
      }
          let blacklistp = String.fromCharCode(98,95,52,95,97,98,98,114,0);
         f_lockz += `${2 | f_lockz.length}`;
         blacklistp = `${blacklistp.length / 3}`;
      if (f_lockz.includes(f_lockz)) {
         f_lockz += `${f_lockz.length + f_lockz.length}`;
      }
      setting9 -= parseInt(`${setting9}`);
   let bootsplashI = 6811034.0 >= notificationG;
   do {
       let matchi: Map<any, any> = new Map([[String.fromCharCode(102,95,51,50,95,115,108,105,100,101,0),676], [String.fromCharCode(119,95,49,52,95,114,101,103,105,115,116,114,121,0),33], [String.fromCharCode(102,95,54,54,95,118,111,114,100,105,112,108,111,109,0),1]]);
       let type_re: Array<any> = [404, 874, 840];
       let selectiona: Map<any, any> = new Map([[String.fromCharCode(99,111,110,100,95,56,95,51,0),42], [String.fromCharCode(116,101,114,109,105,110,97,116,101,95,106,95,50,52,0),792]]);
          let actionP: Array<any> = [443, 439, 403];
          let mathH = 0.0;
          let next4 = 0.0;
         matchi.set(`${actionP.length}`, actionP.length >> (Math.min(Math.abs(3), 2)));
         mathH /= Math.max(3 - parseInt(`${next4}`), 4);
         next4 += parseFloat(`${parseInt(`${mathH}`)}`);
       let vignetteb = String.fromCharCode(118,97,114,109,97,115,107,95,119,95,51,57,0);
       let becomeB = String.fromCharCode(115,95,54,50,95,100,101,108,101,116,101,0);
      if (!vignetteb.startsWith(`${type_re.length}`)) {
         vignetteb = `${3 / (Math.max(8, type_re.length))}`;
      }
      if (becomeB != String.fromCharCode(102,0) || vignetteb.length < 3) {
         becomeB = `${2 - vignetteb.length}`;
      }
         becomeB += `${vignetteb.length - 2}`;
         selectiona.set(becomeB, vignetteb.length ^ 2);
      while (matchi.get(`${type_re.length}`) != null) {
         type_re = [matchi.size];
         break;
      }
      for (let r = 0; r < 1; r++) {
         selectiona.set(vignetteb, 1);
      }
         type_re = [2];
      notificationG += parseFloat(`${match4.length | 1}`);
      if (bootsplashI) {
         break;
      }
   } while ((1.52 == (notificationG + 5.42) && 1 == (5 ^ giftB.length)) && bootsplashI);
       let hongkong2 = 2.0;
         hongkong2 -= parseInt(`${hongkong2}`) ^ 3;
      if ((hongkong2 / (Math.max(8, hongkong2))) > 4.52) {
          let videoe = String.fromCharCode(98,95,55,50,95,105,115,115,112,97,99,101,0);
          let lessD = 1;
          let faviconj = 4;
          let userq = String.fromCharCode(104,95,51,57,95,110,111,110,110,117,108,108,111,117,116,0);
         hongkong2 -= 2 >> (Math.min(Math.abs(faviconj), 2));
         videoe += "1";
         lessD >>= Math.min(Math.abs(lessD | userq.length), 5);
         faviconj &= videoe.length;
         userq = "1";
      }
      if ((hongkong2 * 1.50) <= 2.42 && 1.50 <= (hongkong2 - hongkong2)) {
          let modulez = true;
         hongkong2 *= parseInt(`${hongkong2}`) / 1;
         modulez = !modulez;
      }
      ticked4 += `${ticked4.length << (Math.min(4, giftB.length))}`;
       let typingH = String.fromCharCode(105,95,56,57,95,115,101,110,100,101,114,0);
       let vignetter = String.fromCharCode(114,95,57,54,95,115,117,112,112,111,114,116,105,110,103,0);
      if (vignetter != String.fromCharCode(73,0) && 5 > typingH.length) {
          let handlert = 5;
          let nativeX = String.fromCharCode(116,111,107,101,95,102,95,52,0);
          let r_imageb = 4.0;
         vignetter = "3";
         handlert -= handlert;
         nativeX += `${nativeX.length}`;
         r_imageb -= parseFloat(`${1 >> (Math.min(2, Math.abs(handlert)))}`);
      }
      if (vignetter == String.fromCharCode(49,0)) {
         typingH = `${3 | vignetter.length}`;
      }
          let with_xn = 3;
         typingH += `${vignetter.length / (Math.max(4, typingH.length))}`;
         with_xn -= 2;
         typingH = "3";
          let backW = false;
          let actionsU = 4;
          let selectX: Map<any, any> = new Map([[String.fromCharCode(118,95,55,49,95,115,101,114,105,97,108,110,111,0),17], [String.fromCharCode(117,95,50,52,95,108,105,98,115,119,114,101,115,97,109,112,108,101,0),946]]);
         typingH = `${1 << (Math.min(1, Math.abs(selectX.size)))}`;
         backW = backW || actionsU < 13;
         actionsU += actionsU ^ 3;
         selectX = new Map([[`${backW}`, actionsU << (Math.min(4, Math.abs(1)))]]);
          let eighteen6 = 4;
          let roomQ = String.fromCharCode(104,95,57,55,95,115,99,117,98,98,101,114,0);
          let textU = true;
         typingH += `${roomQ.length ^ 1}`;
         eighteen6 /= Math.max(5, 2 >> (Math.min(Math.abs(eighteen6), 3)));
         roomQ += "2 - eighteen6";
         textU = eighteen6 == 32;
      ticked4 += `${langY.length | 1}`;
      notificationG /= Math.max(parseFloat(`${parseInt(`${setting9}`)}`), 2);
      langY = `${parseInt(`${notificationG}`) << (Math.min(ticked4.length, 4))}`;
      langY = `${langY.length}`;
   if (langY.length <= giftB.length) {
      langY = `${1 / (Math.max(9, langY.length))}`;
   }
      langY = "2";
   while ((sinaw + 5.51) > 4.52 || 4 > (match4.length ^ 2)) {
      sinaw /= Math.max((String.fromCharCode(103,0) == langY ? match4.length : langY.length), 3);
      break;
   }
   for (let m = 0; m < 2; m++) {
      langY = `${indexR.length + 2}`;
   }
       let detailsF = 5;
       let customA = String.fromCharCode(115,97,118,101,115,116,97,116,101,95,112,95,52,54,0);
         detailsF >>= Math.min(3, Math.abs(customA.length - detailsF));
      let countdownm = detailsF <= 5230655;
      do {
         detailsF /= Math.max(3, 3 ^ customA.length);
         if (countdownm) {
            break;
         }
      } while (countdownm && ((customA.length ^ detailsF) <= 5));
       let desck = false;
       let selectionO = String.fromCharCode(114,103,98,97,108,101,95,49,95,56,51,0);
       let mailI = String.fromCharCode(113,95,57,55,95,119,111,114,107,115,0);
      if (1 >= detailsF) {
          let moduleX = true;
          let private_g4 = String.fromCharCode(114,101,108,101,97,115,101,100,95,51,95,49,51,0);
          let connectionD = String.fromCharCode(103,112,116,111,112,116,115,95,99,95,50,0);
         mailI += `${connectionD.length}`;
         moduleX = (((!moduleX ? 32 : private_g4.length) / (Math.max(private_g4.length, 7))) <= 32);
         connectionD = `${(private_g4 == String.fromCharCode(52,0) ? (moduleX ? 4 : 1) : private_g4.length)}`;
      }
      for (let s = 0; s < 1; s++) {
         mailI = `${(1 | (desck ? 2 : 1))}`;
      }
      sinaw -= report2.length;
   for (let w = 0; w < 1; w++) {
      ticked4 = `${giftB.length}`;
   }
      ticked4 += `${parseInt(`${referrerw}`)}`;
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
       let tail0 = String.fromCharCode(105,110,102,111,115,95,119,95,50,51,0);
    let modalf = String.fromCharCode(119,95,49,52,95,115,111,117,110,100,101,120,0);
    let renewI = String.fromCharCode(115,105,120,95,48,95,57,48,0);
    let inviteR = String.fromCharCode(110,95,49,48,95,115,101,97,114,99,104,0);
    let carouselI: Map<any, any> = new Map([[String.fromCharCode(108,105,103,104,116,110,101,115,115,95,108,95,52,53,0),String.fromCharCode(117,95,50,48,95,101,118,111,108,118,101,0)], [String.fromCharCode(102,108,97,116,95,99,95,52,50,0),String.fromCharCode(101,120,112,97,110,100,95,121,95,52,57,0)], [String.fromCharCode(97,95,54,52,95,114,101,102,101,114,114,97,108,0),String.fromCharCode(119,101,114,101,95,107,95,51,53,0)]]);
    let profiley = 1.0;
    let agreementm = String.fromCharCode(110,95,56,51,95,99,97,108,108,101,114,0);
    let statsj = false;
    let trophyj = 5.0;
    let soundX = 2;
    let disconnectedS: Map<any, any> = new Map([[String.fromCharCode(107,97,116,95,98,95,56,53,0),String.fromCharCode(110,97,118,105,103,97,116,101,95,100,95,54,51,0)], [String.fromCharCode(97,97,97,97,95,120,95,57,55,0),String.fromCharCode(98,121,116,101,99,111,100,101,118,116,97,98,95,52,95,53,54,0)], [String.fromCharCode(111,95,56,56,95,115,112,108,105,116,109,118,115,0),String.fromCharCode(117,95,51,56,95,105,110,116,101,114,102,97,99,101,0)]]);
    let lightn: Array<any> = [541, 531, 718];
      profiley *= parseFloat(`${agreementm.length >> (Math.min(5, Math.abs(parseInt(`${trophyj}`))))}`);
      tail0 = `${renewI.length - carouselI.size}`;
   while (soundX <= 2 && (soundX | 2) <= 3) {
       let questn = String.fromCharCode(99,102,116,98,115,117,98,95,57,95,55,52,0);
      if (questn != String.fromCharCode(54,0)) {
          let photos = true;
          let pressureF = 5;
         questn += `${pressureF}`;
         photos = !photos;
         pressureF <<= Math.min(parseInt(`${Math.abs((3 << (Math.min(Math.abs((photos ? 3 : 4)), 5))))}`), 2);
      }
          let gesturesQ = 4.0;
         questn += "1";
         gesturesQ += parseInt(`${gesturesQ}`);
         questn = `${questn.length}`;
      statsj = inviteR == String.fromCharCode(69,0);
      break;
   }
   while (inviteR.includes(`${profiley}`)) {
      profiley *= parseFloat(`${3}`);
      break;
   }
      modalf += `${(renewI == String.fromCharCode(51,0) ? renewI.length : disconnectedS.size)}`;
      tail0 += `${inviteR.length + 2}`;
   while (carouselI.size == 5) {
       let halfL: Array<any> = [String.fromCharCode(97,116,116,95,99,95,52,51,0), String.fromCharCode(110,97,117,116,105,99,97,108,95,119,95,51,49,0), String.fromCharCode(100,95,56,95,111,98,106,101,99,116,115,0)];
         halfL = [halfL.length];
          let sellW = String.fromCharCode(100,101,99,111,109,112,114,101,115,115,105,111,110,95,120,95,51,48,0);
         halfL = [(sellW == String.fromCharCode(95,0) ? sellW.length : halfL.length)];
      while (2 <= (halfL.length ^ 2) || (2 ^ halfL.length) <= 5) {
         halfL.push(halfL.length);
         break;
      }
      profiley *= parseFloat(`${2 ^ soundX}`);
      break;
   }
   if ((carouselI.size / 2) > 2) {
      carouselI = new Map([[`${soundX}`, 2 - soundX]]);
   }
      inviteR = "3";
   let phoneA = String.fromCharCode(121,100,54,108,121,114,0) == modalf;
   do {
      modalf += `${inviteR.length / (Math.max(9, modalf.length))}`;
      if (phoneA) {
         break;
      }
   } while (((5.47 + trophyj) < 4.56 || 1 < (modalf.length * 3)) && phoneA);
       let successa = true;
      if (successa || !successa) {
         successa = !successa;
      }
         successa = successa && !successa;
         successa = !successa;
      carouselI.set(modalf, (String.fromCharCode(107,0) == modalf ? disconnectedS.size : modalf.length));
      inviteR = `${carouselI.size}`;
   if (modalf != String.fromCharCode(90,0)) {
      renewI = `${2 << (Math.min(4, Math.abs(parseInt(`${profiley}`))))}`;
   }
      disconnectedS.set(`${trophyj}`, 2 * parseInt(`${trophyj}`));
   for (let j = 0; j < 1; j++) {
       let gemfile2 = 2.0;
       let emojiG: Map<any, any> = new Map([[String.fromCharCode(98,101,105,110,103,95,112,95,54,52,0),910], [String.fromCharCode(115,104,117,102,102,108,101,112,108,97,110,101,115,95,118,95,50,0),974], [String.fromCharCode(97,109,102,101,110,99,95,109,95,55,51,0),429]]);
       let progressT = String.fromCharCode(109,95,51,55,95,112,111,114,116,114,97,105,116,0);
       let heartg: Map<any, any> = new Map([[String.fromCharCode(104,101,118,99,112,114,101,100,95,104,95,51,52,0),125], [String.fromCharCode(118,101,114,116,105,99,97,108,95,53,95,57,55,0),204], [String.fromCharCode(109,95,48,95,99,111,109,112,105,108,101,111,112,116,105,111,110,0),285]]);
       let list2 = false;
         emojiG.set(progressT, parseInt(`${gemfile2}`) ^ 1);
      while (5 > (heartg.size / (Math.max(2, 8)))) {
         heartg = new Map([[`${emojiG.size}`, emojiG.size]]);
         break;
      }
      let share6 = gemfile2 <= 9128532.0;
      do {
          let volumeN = true;
          let nterstitialV = String.fromCharCode(102,95,52,56,95,97,108,114,101,97,100,121,0);
         gemfile2 += parseFloat(`${nterstitialV.length / 1}`);
         volumeN = !volumeN;
         nterstitialV = "1";
         if (share6) {
            break;
         }
      } while (share6 && (progressT.length > 5));
          let clockf: Map<any, any> = new Map([[String.fromCharCode(119,97,116,101,114,95,118,95,54,54,0),863], [String.fromCharCode(112,95,55,57,95,99,121,99,108,101,100,0),782]]);
          let langkeyD = 0.0;
         list2 = (parseFloat(`${clockf.size}`) + langkeyD) <= 54.43;
         emojiG = new Map([[`${heartg.size}`, (progressT == String.fromCharCode(73,0) ? heartg.size : progressT.length)]]);
      for (let j = 0; j < 1; j++) {
         gemfile2 *= parseFloat(`${heartg.size + 1}`);
      }
          let greenz = 1.0;
          let layoutS: Map<any, any> = new Map([[String.fromCharCode(115,101,110,115,105,116,105,118,101,95,105,95,49,48,48,0),767], [String.fromCharCode(107,95,57,54,0),800], [String.fromCharCode(112,111,108,101,95,52,95,49,57,0),25]]);
         progressT = `${2 * heartg.size}`;
         greenz *= layoutS.size;
         layoutS.set(`${greenz}`, 2);
          let darkR = false;
          let plashF = 5;
          let stationG = String.fromCharCode(120,95,51,53,95,105,109,112,111,114,116,97,110,99,101,0);
         heartg.set(`${plashF}`, plashF % 3);
         darkR = !darkR;
         stationG = `${stationG.length & 1}`;
      if ((heartg.size >> (Math.min(Math.abs(2), 4))) == 1 || 5 == (heartg.size >> (Math.min(Math.abs(2), 4)))) {
          let modalL = String.fromCharCode(97,105,102,102,95,104,95,51,0);
          let styleH: Array<any> = [630, 45, 659];
          let robotoM = String.fromCharCode(108,111,99,107,97,98,108,101,95,97,95,56,50,0);
          let trophyE = String.fromCharCode(107,95,57,49,95,110,101,103,97,116,105,118,101,0);
          let blacklistS = 1.0;
         progressT = "3";
         modalL += `${styleH.length << (Math.min(Math.abs(2), 4))}`;
         styleH = [(robotoM == String.fromCharCode(119,0) ? robotoM.length : styleH.length)];
         trophyE = `${trophyE.length >> (Math.min(Math.abs(1), 5))}`;
         blacklistS *= parseFloat(`${trophyE.length % (Math.max(2, 2))}`);
      }
      for (let j = 0; j < 2; j++) {
         gemfile2 += parseFloat(`${2}`);
      }
         emojiG = new Map([[`${gemfile2}`, ((list2 ? 5 : 4) - parseInt(`${gemfile2}`))]]);
       let searchbarc = 1.0;
       let rulesG = 4.0;
      if ((1.34 + searchbarc) <= 3.72 && 4 <= (progressT.length + parseInt(`${searchbarc}`))) {
         searchbarc += parseFloat(`${3}`);
      }
       let guideI = 2;
      for (let x = 0; x < 2; x++) {
          let inactive7: Map<any, any> = new Map([[String.fromCharCode(122,95,51,57,95,121,121,121,121,0),831], [String.fromCharCode(120,95,51,53,95,100,97,105,108,121,0),73], [String.fromCharCode(103,95,53,53,95,99,102,101,110,99,0),552]]);
          let eighteenD = String.fromCharCode(114,95,49,48,95,117,112,97,116,101,100,0);
          let analyticsG: Map<any, any> = new Map([[String.fromCharCode(97,105,114,105,110,103,95,54,95,49,55,0),303], [String.fromCharCode(98,95,57,56,95,110,116,111,108,111,103,121,0),905], [String.fromCharCode(121,95,55,57,95,97,110,121,0),618]]);
         progressT = `${heartg.size << (Math.min(Math.abs(1), 2))}`;
         inactive7.set(`${eighteenD}`, 1 ^ inactive7.size);
         eighteenD = `${inactive7.size & eighteenD.length}`;
         analyticsG = new Map([[`${inactive7.size}`, analyticsG.size]]);
      }
      carouselI = new Map([[`${disconnectedS.size}`, disconnectedS.size]]);
   }
      modalf = `${2 * renewI.length}`;
   if (!Array.from(disconnectedS.keys()).includes(`${soundX}`)) {
      disconnectedS = new Map([[`${disconnectedS.size}`, disconnectedS.size / 3]]);
   }
      carouselI = new Map([[`${disconnectedS.size}`, 3]]);
      carouselI.set(agreementm, 1);
      profiley *= parseFloat(`${3}`);
      statsj = (tail0.length << (Math.min(renewI.length, 2))) <= 92;
   for (let e = 0; e < 1; e++) {
      soundX >>= Math.min(3, Math.abs(2));
   }
      lightn.push(parseInt(`${profiley}`) >> (Math.min(Math.abs(3), 1)));

      console.log("error when open link: ", error);
    }
  };

  const getZfStatus = async (transID: string) => {
    const result = await GESmallEvent.getFinzfTransaction({
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
          LRZTermsScreen.zfPaymentSuccessTimesAnalytics({
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
      LRZTermsScreen.googlePaymentSuccessTimesAnalytics({
        productIdentifier: currentPurchase.productId,
        signature: currentPurchase.signatureAndroid,
        transactionId: currentPurchase.transactionId,
        purchaseData: currentPurchase.dataAndroid,
        price: membershipSelected.promoPrice ?? membershipSelected.price,
        currency: membershipSelected.currency.currencyCode,
      });
    }

    try {
      const result = await GESmallEvent.postAndroidIAP(iapTrans);

      console.log("validate iap result");
      console.log(result);
      return result.data.data;
    } catch (error) {
       let transferg = String.fromCharCode(97,117,116,111,99,111,114,114,101,108,97,116,101,95,106,95,54,49,0);
    let eventd = String.fromCharCode(104,97,114,100,101,110,101,100,95,109,95,54,48,0);
    let checkboxG = 0;
    let handlerD: Map<any, any> = new Map([[String.fromCharCode(100,111,117,98,108,101,115,95,100,95,50,56,0),false ], [String.fromCharCode(112,114,111,114,101,115,100,97,116,97,95,107,95,49,51,0),true ], [String.fromCharCode(104,95,50,49,95,109,112,101,103,97,117,100,105,111,100,115,112,0),false ]]);
    let eactf: Array<any> = [290, 96];
    let humidityT = String.fromCharCode(106,117,115,116,105,102,105,99,97,116,105,111,110,95,113,95,50,51,0);
    let rightz: Array<any> = [String.fromCharCode(113,95,52,51,95,115,116,97,116,105,111,110,97,114,105,116,121,0), String.fromCharCode(99,112,111,115,95,101,95,57,57,0)];
    let predictionz = 1.0;
    let x_unlockM = String.fromCharCode(105,95,55,55,95,104,101,120,98,110,0);
    let calendarG = String.fromCharCode(99,104,97,114,109,97,112,95,121,95,55,51,0);
   while ((3 + handlerD.size) == 1 || (3 + eactf.length) == 5) {
      eactf = [transferg.length];
      break;
   }
      predictionz += parseFloat(`${checkboxG}`);
      eventd += "1";
   for (let t = 0; t < 1; t++) {
      handlerD.set(transferg, (String.fromCharCode(78,0) == transferg ? parseInt(`${predictionz}`) : transferg.length));
   }
   if ((transferg.length * rightz.length) < 2) {
      rightz.push(eactf.length);
   }
   for (let f = 0; f < 1; f++) {
      eactf.push(checkboxG + 3);
   }
   while (!rightz.includes(predictionz)) {
       let appss = String.fromCharCode(108,115,112,100,108,112,99,95,49,95,51,49,0);
       let temperaturer = String.fromCharCode(105,108,108,101,103,97,108,95,118,95,57,54,0);
       let team1 = String.fromCharCode(110,95,54,52,95,104,117,102,102,0);
      while (!temperaturer.endsWith(team1)) {
         temperaturer += "1";
         break;
      }
      let searchg = team1 == String.fromCharCode(107,105,106,112,51,115,105,0);
      do {
         team1 = `${appss.length % (Math.max(7, temperaturer.length))}`;
         if (searchg) {
            break;
         }
      } while ((appss.length >= 4) && searchg);
          let editn: Map<any, any> = new Map([[String.fromCharCode(104,95,51,52,95,112,114,111,109,112,116,0),614], [String.fromCharCode(100,111,117,98,108,101,115,115,116,114,95,48,95,50,48,0),100], [String.fromCharCode(105,95,50,56,95,117,110,113,117,97,110,116,0),496]]);
          let actionst = 2;
         appss += `${3 + team1.length}`;
         editn = new Map([[`${editn.size}`, actionst]]);
         actionst >>= Math.min(3, Math.abs(editn.size));
       let moviesh = 5.0;
       let info8 = 4.0;
         temperaturer += "2";
      if ((1 / (Math.max(4, moviesh))) >= 5.46) {
          let moviesn = 1;
          let strR = 4.0;
          let o_countv: Map<any, any> = new Map([[String.fromCharCode(114,117,110,116,101,114,109,95,122,95,49,56,0),135], [String.fromCharCode(101,95,51,50,95,105,115,109,108,0),512]]);
          let floaterB = 0;
          let userf: Array<any> = [String.fromCharCode(108,105,98,115,112,101,101,120,95,114,95,51,54,0), String.fromCharCode(120,95,49,51,95,115,116,98,108,0), String.fromCharCode(109,117,108,120,95,53,95,50,55,0)];
         info8 -= parseInt(`${info8}`) << (Math.min(3, Math.abs(1)));
         moviesn /= Math.max(1, 1);
         strR *= parseFloat(`${o_countv.size}`);
         o_countv = new Map([[`${userf.length}`, parseInt(`${strR}`)]]);
         floaterB <<= Math.min(Math.abs(3 / (Math.max(3, o_countv.size))), 2);
         userf = [o_countv.size];
      }
      if ((team1.length + parseInt(`${moviesh}`)) <= 4 && 4 <= (team1.length - 4)) {
         moviesh += 3;
      }
      while (temperaturer.length == appss.length) {
         temperaturer = "3";
         break;
      }
         moviesh += (temperaturer == String.fromCharCode(71,0) ? temperaturer.length : parseInt(`${info8}`));
      rightz = [3 - transferg.length];
      break;
   }
   while (!transferg.startsWith(`${rightz.length}`)) {
      rightz.push(eventd.length & parseInt(`${predictionz}`));
      break;
   }
   for (let n = 0; n < 1; n++) {
      eventd += `${eactf.length}`;
   }
      eactf.push((String.fromCharCode(113,0) == eventd ? parseInt(`${predictionz}`) : eventd.length));
   while (!transferg.endsWith(`${handlerD.size}`)) {
       let blacklistn = 1.0;
       let soundd = false;
       let viewerd = 2.0;
       let half0: Array<any> = [93, 562, 53];
         viewerd += parseInt(`${blacklistn}`) << (Math.min(half0.length, 5));
      while (half0.includes(blacklistn)) {
          let chinak: Map<any, any> = new Map([[String.fromCharCode(109,95,57,49,95,114,97,116,101,99,116,114,108,0),353], [String.fromCharCode(100,101,99,114,121,112,116,105,111,110,95,100,95,54,56,0),593]]);
          let downloadV = 4.0;
          let update_ftf: Map<any, any> = new Map([[String.fromCharCode(98,114,111,97,100,99,97,115,116,105,110,103,95,118,95,49,53,0),487], [String.fromCharCode(112,95,51,52,95,119,112,116,104,114,101,97,100,115,0),577], [String.fromCharCode(105,95,52,49,95,100,101,102,114,97,103,109,101,110,116,0),617]]);
         blacklistn -= 3 | update_ftf.size;
         chinak.set(`${downloadV}`, chinak.size);
         downloadV /= Math.max(parseFloat(`${2 % (Math.max(3, parseInt(`${downloadV}`)))}`), 3);
         update_ftf = new Map([[`${chinak.size}`, 3]]);
         break;
      }
      for (let h = 0; h < 1; h++) {
          let collection4 = String.fromCharCode(108,95,54,56,95,109,98,112,97,105,114,0);
          let middleb = 2.0;
          let zhubop = String.fromCharCode(104,111,111,107,115,95,113,95,51,56,0);
          let window_1Z = String.fromCharCode(108,111,99,97,108,101,95,102,95,56,51,0);
          let gestureK = String.fromCharCode(104,119,102,114,97,109,101,95,52,95,49,53,0);
         blacklistn -= zhubop.length;
         collection4 = `${window_1Z.length << (Math.min(5, Math.abs(parseInt(`${middleb}`))))}`;
         middleb /= Math.max(2, 3);
         zhubop += `${gestureK.length}`;
         window_1Z = `${1 & gestureK.length}`;
      }
      let expandG = soundd ? !soundd : soundd;
      do {
         soundd = blacklistn > 65.29;
         if (expandG) {
            break;
         }
      } while (expandG && ((half0.length * 1) >= 1 || half0.length >= 1));
         viewerd /= Math.max(1, half0.length + parseInt(`${blacklistn}`));
      while (4.28 <= viewerd) {
          let referrerX = String.fromCharCode(114,101,97,100,109,101,95,56,95,55,52,0);
          let sendW = 4.0;
          let confirmationG = 0.0;
          let r_lockH = 2.0;
          let hongkongy = String.fromCharCode(109,117,120,95,56,95,52,49,0);
         blacklistn *= parseInt(`${blacklistn}`) << (Math.min(4, Math.abs(parseInt(`${sendW}`))));
         referrerX += `${referrerX.length >> (Math.min(Math.abs(3), 1))}`;
         sendW /= Math.max(2 * referrerX.length, 2);
         confirmationG -= (parseFloat(`${String.fromCharCode(114,0) == referrerX ? parseInt(`${confirmationG}`) : referrerX.length}`));
         r_lockH -= parseFloat(`${3 >> (Math.min(2, referrerX.length))}`);
         hongkongy = `${(referrerX == String.fromCharCode(51,0) ? parseInt(`${confirmationG}`) : referrerX.length)}`;
         break;
      }
      for (let l = 0; l < 2; l++) {
         blacklistn += 3 | parseInt(`${blacklistn}`);
      }
         blacklistn += parseInt(`${blacklistn}`) + 2;
         blacklistn -= half0.length;
      let otherA = soundd ? !soundd : soundd;
      do {
         soundd = !soundd;
         if (otherA) {
            break;
         }
      } while (otherA && (4.17 > (4.10 - blacklistn)));
      let detaill = 7680279.0 <= blacklistn;
      do {
          let select2 = 0.0;
          let nterstitialW = false;
          let connectionC: Map<any, any> = new Map([[String.fromCharCode(109,112,101,103,118,105,100,101,111,100,101,99,95,55,95,50,50,0),70], [String.fromCharCode(103,95,50,51,95,112,97,110,105,99,0),723]]);
          let rewindM = 3.0;
          let fcopy_bD: Array<any> = [603, 365];
         blacklistn *= (fcopy_bD.length | (soundd ? 1 : 4));
         select2 -= connectionC.size * parseInt(`${rewindM}`);
         nterstitialW = connectionC.size <= 70 && !nterstitialW;
         rewindM -= 3;
         fcopy_bD = [connectionC.size];
         if (detaill) {
            break;
         }
      } while (((parseInt(`${blacklistn}`) / (Math.max(half0.length, 10))) >= 4 || 1 >= (half0.length / 4)) && detaill);
      if (viewerd == 3.27) {
         blacklistn /= Math.max(2, parseInt(`${blacklistn}`) / 2);
      }
      handlerD = new Map([[`${rightz.length}`, rightz.length * eventd.length]]);
      break;
   }

      console.log("error when validate iap: ", error);

      checkboxG >>= Math.min(1, Math.abs(handlerD.size / 3));
   for (let f = 0; f < 2; f++) {
      eactf = [transferg.length];
   }
   for (let m = 0; m < 1; m++) {
      checkboxG ^= checkboxG ^ 2;
   }
   if (eventd.startsWith(transferg)) {
       let eighteenD = 1.0;
       let rank2: Map<any, any> = new Map([[String.fromCharCode(108,95,56,55,95,97,118,103,120,0),true ], [String.fromCharCode(120,95,51,53,95,114,101,115,101,116,117,112,0),false ]]);
      while (4.58 == (eighteenD * 2.7) && (eighteenD * 2.7) == 4.80) {
         eighteenD -= 1 | parseInt(`${eighteenD}`);
         break;
      }
      let bodanb = 6693194.0 <= eighteenD;
      do {
          let hooks7 = 4.0;
          let y_title4 = String.fromCharCode(115,116,117,102,102,110,100,95,97,95,56,0);
          let referrer3 = String.fromCharCode(98,95,50,54,95,119,97,108,107,116,104,114,111,117,103,104,0);
          let blacklistg = true;
          let leagueC = 0.0;
         eighteenD /= Math.max(parseInt(`${hooks7}`) >> (Math.min(5, Math.abs(1))), 2);
         hooks7 -= 2;
         y_title4 = `${parseInt(`${leagueC}`) - 1}`;
         referrer3 += `${y_title4.length >> (Math.min(referrer3.length, 3))}`;
         blacklistg = !blacklistg;
         leagueC -= ((blacklistg ? 1 : 3) + parseInt(`${leagueC}`));
         if (bodanb) {
            break;
         }
      } while (((eighteenD + 3.88) < 3.32 || (3.88 + eighteenD) < 1.44) && bodanb);
      transferg += `${eactf.length}`;
   }
   for (let c = 0; c < 3; c++) {
      humidityT = `${2 ^ parseInt(`${predictionz}`)}`;
   }
      humidityT += `${eventd.length}`;
   while (eactf.length < 1) {
      eactf.push(2);
      break;
   }
   while (eventd != transferg) {
      transferg += `${2 - checkboxG}`;
      break;
   }
      predictionz -= parseFloat(`${2}`);
   while (!eactf.includes(checkboxG)) {
      eactf.push(rightz.length << (Math.min(5, Math.abs(checkboxG))));
      break;
   }
      humidityT = `${3 - handlerD.size}`;
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
      LRZTermsScreen.googlePaymentSuccessTimesAnalytics({
        productIdentifier: currentPurchase.productId,
        signature: currentPurchase.signatureAndroid,
        transactionId: currentPurchase.transactionId,
        purchaseData: currentPurchase.dataAndroid,
        price: membershipSelected.promoPrice ?? membershipSelected.price,
        currency: membershipSelected.currency.currencyCode,
      });
    }

    try {
      const result = await GESmallEvent.postAndroidSubscriptions(subsTrans);
      console.log("validate subscription result");
      console.log(result);
      return result.success;
    } catch (err) {
       let videoO = 5;
    let matches8: Map<any, any> = new Map([[String.fromCharCode(108,115,104,105,102,116,95,99,95,49,51,0),243], [String.fromCharCode(99,104,97,110,103,101,95,106,95,49,50,0),669], [String.fromCharCode(109,95,50,57,95,112,105,110,0),160]]);
    let bootsplash6 = 5.0;
    let windB: Array<any> = [312, 445, 121];
    let ticky = String.fromCharCode(108,95,57,50,95,104,101,97,100,115,101,116,0);
    let adultb = String.fromCharCode(102,95,51,48,95,99,104,97,110,0);
    let tumbnail6 = false;
    let applej = String.fromCharCode(106,95,52,55,95,105,114,99,97,109,0);
    let linkJ = String.fromCharCode(102,95,57,53,95,111,109,109,111,110,0);
    let vietnamy = true;
    let minimized = 1.0;
    let searchb: Array<any> = [String.fromCharCode(116,95,52,55,95,115,101,116,97,99,116,105,118,101,107,101,121,0), String.fromCharCode(105,110,116,101,114,97,99,116,105,110,103,95,50,95,56,0), String.fromCharCode(116,102,117,101,108,95,50,95,54,52,0)];
    let roomWk = String.fromCharCode(116,95,51,49,95,99,111,110,116,105,110,117,101,100,0);
    let albumQ = 1;
    let q_countv = 1.0;
    let nexti = 0.0;
      linkJ = `${videoO - 1}`;
      tumbnail6 = (applej.length << (Math.min(linkJ.length, 1))) > 20;
      bootsplash6 *= 3 * parseInt(`${bootsplash6}`);
      matches8.set(adultb, windB.length ^ 2);
       let entryh = 2.0;
         entryh *= parseFloat(`${parseInt(`${entryh}`)}`);
      let volumec = 5961343.0 <= entryh;
      do {
         entryh *= parseFloat(`${parseInt(`${entryh}`) * 1}`);
         if (volumec) {
            break;
         }
      } while (volumec && (3.69 > (entryh - entryh) || 1.22 > (entryh * 3.69)));
       let robotoJ = String.fromCharCode(117,109,111,116,105,111,110,95,107,95,49,57,0);
      bootsplash6 *= windB.length;
   while (3 == (applej.length & matches8.size)) {
      matches8 = new Map([[linkJ, (String.fromCharCode(76,0) == adultb ? adultb.length : linkJ.length)]]);
      break;
   }
      applej += `${windB.length % (Math.max(ticky.length, 9))}`;
   if (5 == adultb.length) {
      applej = `${parseInt(`${bootsplash6}`) << (Math.min(4, Math.abs(3)))}`;
   }
   if (ticky != applej) {
       let chartj = String.fromCharCode(115,114,116,112,95,109,95,55,51,0);
      let stationsP = String.fromCharCode(100,51,104,111,95,108,121,102,0) == chartj;
      do {
         chartj = "3";
         if (stationsP) {
            break;
         }
      } while ((chartj.length > 5) && stationsP);
      for (let w = 0; w < 1; w++) {
         chartj = `${chartj.length ^ 2}`;
      }
      while (chartj.length == 5) {
         chartj = `${chartj.length & chartj.length}`;
         break;
      }
      applej += `${(parseInt(`${bootsplash6}`) >> (Math.min(2, Math.abs((tumbnail6 ? 2 : 5)))))}`;
   }
   for (let e = 0; e < 1; e++) {
      bootsplash6 *= ((vietnamy ? 2 : 1) | 3);
   }
   if (applej.length == 5) {
      vietnamy = 44 < linkJ.length;
   }
   if (!windB.includes(minimized)) {
      windB = [3];
   }
       let balld = 1.0;
       let scheduleS = 3.0;
       let active0 = String.fromCharCode(102,105,116,95,54,95,53,48,0);
       let detailj = String.fromCharCode(108,95,54,95,104,121,115,116,101,114,101,115,105,115,0);
      while (4 == active0.length) {
         detailj = `${3 * detailj.length}`;
         break;
      }
         active0 += `${2 << (Math.min(4, detailj.length))}`;
         balld /= Math.max(parseInt(`${balld}`) * 3, 4);
         scheduleS *= parseFloat(`${detailj.length}`);
         detailj = `${active0.length}`;
      bootsplash6 /= Math.max(2, 3 << (Math.min(Math.abs(parseInt(`${scheduleS}`)), 5)));
       let trash5 = true;
       let stylei = String.fromCharCode(112,114,117,110,101,95,117,95,49,53,0);
      while (trash5) {
          let overlayH = 4;
          let sorti = 5.0;
         stylei = "1";
         overlayH *= overlayH;
         sorti -= overlayH << (Math.min(1, Math.abs(2)));
         break;
      }
      for (let g = 0; g < 1; g++) {
         trash5 = stylei.includes(`${trash5}`);
      }
      let b_unlockt = 7558495 >= stylei.length;
      do {
          let singleL = String.fromCharCode(103,101,110,101,114,97,116,101,95,120,95,53,48,0);
          let largeX = 0;
          let main_dO: Map<any, any> = new Map([[String.fromCharCode(98,95,52,52,95,99,111,109,98,0),String.fromCharCode(116,95,51,52,95,105,119,104,116,120,0)], [String.fromCharCode(111,95,57,48,95,97,116,116,114,0),String.fromCharCode(117,95,50,57,95,101,109,98,101,100,0)], [String.fromCharCode(103,95,51,55,95,114,101,109,105,120,0),String.fromCharCode(103,95,51,55,95,115,116,114,117,99,116,117,114,101,0)]]);
          let sideU = 3.0;
          let whistleq = String.fromCharCode(105,95,50,57,95,115,111,117,114,99,101,99,108,105,112,0);
         stylei = `${(singleL == String.fromCharCode(75,0) ? singleL.length : parseInt(`${sideU}`))}`;
         largeX &= 1 | main_dO.size;
         main_dO = new Map([[`${main_dO.size}`, main_dO.size << (Math.min(5, Math.abs(largeX)))]]);
         sideU /= Math.max(4, whistleq.length);
         whistleq += "1";
         if (b_unlockt) {
            break;
         }
      } while ((4 >= stylei.length || !trash5) && b_unlockt);
      while (stylei.includes(`${trash5}`)) {
         trash5 = stylei.endsWith(`${trash5}`);
         break;
      }
      if (5 < stylei.length) {
         trash5 = stylei.length >= 39;
      }
       let scoreA = String.fromCharCode(121,118,116,111,121,117,121,95,109,95,55,56,0);
      applej += `${1 | searchb.length}`;
   for (let k = 0; k < 3; k++) {
       let vignetteY = 5.0;
       let blackD = String.fromCharCode(112,95,49,0);
       let resendA = 2.0;
      while ((blackD.length / 4) >= 3 && (4 & blackD.length) >= 1) {
         blackD = `${(String.fromCharCode(110,0) == blackD ? blackD.length : parseInt(`${vignetteY}`))}`;
         break;
      }
          let roomW: Map<any, any> = new Map([[String.fromCharCode(105,95,54,56,95,99,111,109,112,108,101,120,105,116,121,0),String.fromCharCode(97,103,101,110,116,115,95,114,95,49,51,0)], [String.fromCharCode(103,101,116,116,105,110,103,95,110,95,55,51,0),String.fromCharCode(119,105,110,115,111,99,107,95,114,95,57,51,0)], [String.fromCharCode(107,95,53,49,95,118,97,114,105,97,98,108,101,115,0),String.fromCharCode(98,117,116,116,101,114,119,111,114,116,104,95,105,95,56,52,0)]]);
         vignetteY += 1 << (Math.min(Math.abs(parseInt(`${resendA}`)), 4));
         roomW.set(`${roomW.size}`, roomW.size);
      for (let n = 0; n < 2; n++) {
         vignetteY += 3;
      }
         vignetteY /= Math.max(3, blackD.length * parseInt(`${vignetteY}`));
      while (2 < blackD.length) {
          let analyticB = 1.0;
          let yellowv = true;
         resendA -= parseFloat(`${1 * parseInt(`${vignetteY}`)}`);
         analyticB /= Math.max(parseFloat(`${2 * parseInt(`${analyticB}`)}`), 2);
         yellowv = !yellowv;
         break;
      }
       let downloading5 = String.fromCharCode(102,95,55,49,95,115,101,101,100,0);
       let configl = 1.0;
       let h_centerQ = 2.0;
         blackD = `${parseInt(`${h_centerQ}`)}`;
      for (let w = 0; w < 2; w++) {
         resendA += parseFloat(`${downloading5.length}`);
      }
      windB.push(searchb.length);
   }
   if (2 >= linkJ.length && adultb != String.fromCharCode(101,0)) {
      adultb += `${(2 / (Math.max(6, (vietnamy ? 3 : 3))))}`;
   }
   if (searchb.length == 3) {
      searchb.push(2 | windB.length);
   }

      console.log("post android subscription error: ", err);

      videoO |= searchb.length + 3;
   for (let e = 0; e < 2; e++) {
      applej += `${parseInt(`${minimized}`) | searchb.length}`;
   }
   while (roomWk.length == 5) {
       let confirmation1: Array<any> = [301, 597, 654];
       let emojiU = String.fromCharCode(99,111,110,115,116,114,117,99,116,95,117,95,57,57,0);
       let activep = String.fromCharCode(105,95,51,57,95,98,105,116,115,113,112,0);
       let modalg = 3;
       let closej = String.fromCharCode(103,95,52,55,95,102,111,111,116,101,114,0);
       let tailQ = 1.0;
      if (2 >= (modalg << (Math.min(closej.length, 1)))) {
         closej += `${parseInt(`${tailQ}`) << (Math.min(1, Math.abs(modalg)))}`;
      }
       let footballn = 3.0;
       let robotoK = 0.0;
       let related2 = String.fromCharCode(101,120,116,114,101,109,101,95,120,95,54,52,0);
         tailQ += parseFloat(`${modalg}`);
          let successF = false;
         tailQ /= Math.max(2, parseFloat(`${3}`));
         successF = (successF ? successF : successF);
      let historyy = emojiU.length >= 7206322;
      do {
          let models_: Map<any, any> = new Map([[String.fromCharCode(116,115,99,99,95,106,95,55,57,0),false ], [String.fromCharCode(105,110,115,116,95,54,95,52,52,0),false ]]);
         emojiU += `${confirmation1.length}`;
         models_ = new Map([[`${models_.size}`, models_.size | models_.size]]);
         if (historyy) {
            break;
         }
      } while (historyy && (3 > (emojiU.length - parseInt(`${footballn}`)) || (emojiU.length ^ 3) > 5));
      let overlayHD = 6153979 <= modalg;
      do {
         modalg -= 1 + emojiU.length;
         if (overlayHD) {
            break;
         }
      } while (((activep.length >> (Math.min(Math.abs(2), 3))) >= 3) && overlayHD);
      if (2 <= confirmation1.length) {
          let assistH: Map<any, any> = new Map([[String.fromCharCode(108,105,98,115,112,101,101,120,95,55,95,52,48,0),802], [String.fromCharCode(116,105,108,101,104,100,114,95,48,95,55,53,0),565], [String.fromCharCode(97,95,51,51,95,110,111,108,111,99,107,0),253]]);
         related2 = `${(String.fromCharCode(78,0) == closej ? closej.length : parseInt(`${tailQ}`))}`;
         assistH.set(`${assistH.size}`, 2);
      }
          let desc0 = String.fromCharCode(107,95,55,57,95,100,105,118,105,100,101,0);
          let mail2 = String.fromCharCode(102,105,110,97,108,105,122,105,110,103,95,110,95,50,56,0);
          let sell7: Array<any> = [286, 741, 686];
         tailQ += (parseFloat(`${String.fromCharCode(49,0) == related2 ? sell7.length : related2.length}`));
         desc0 = `${(mail2 == String.fromCharCode(53,0) ? mail2.length : desc0.length)}`;
         sell7.push(desc0.length << (Math.min(mail2.length, 4)));
      if (related2.endsWith(`${confirmation1.length}`)) {
          let chate: Array<any> = [String.fromCharCode(105,99,109,112,95,111,95,51,54,0), String.fromCharCode(98,95,52,95,104,97,108,116,0), String.fromCharCode(97,95,54,95,115,101,113,0)];
          let lang_: Map<any, any> = new Map([[String.fromCharCode(110,95,50,56,95,119,114,105,116,101,99,98,0),887], [String.fromCharCode(113,95,57,57,95,109,101,116,114,105,99,0),131]]);
          let carouselG = String.fromCharCode(111,95,52,51,95,109,117,108,115,117,98,0);
          let small6 = String.fromCharCode(102,108,97,116,116,101,110,95,49,95,51,54,0);
         confirmation1 = [3 | related2.length];
         chate = [(String.fromCharCode(76,0) == carouselG ? chate.length : carouselG.length)];
         lang_.set(`${carouselG}`, carouselG.length & 2);
         small6 = "3";
      }
          let historye = 0;
         modalg += 3;
         historye /= Math.max(5, historye);
          let kickp = String.fromCharCode(102,114,97,99,116,105,111,110,95,53,95,54,51,0);
          let module8 = 4.0;
         tailQ -= parseFloat(`${emojiU.length}`);
         kickp += `${parseInt(`${module8}`) | 1}`;
         module8 -= parseFloat(`${parseInt(`${module8}`)}`);
      let viewerT = 9616273 <= emojiU.length;
      do {
         emojiU += `${related2.length & 3}`;
         if (viewerT) {
            break;
         }
      } while (viewerT && (5 < (confirmation1.length & 1) || (1 & confirmation1.length) < 2));
       let guidet = 5.0;
      roomWk = `${videoO}`;
      break;
   }
   for (let u = 0; u < 2; u++) {
      adultb += `${applej.length}`;
   }
   for (let l = 0; l < 3; l++) {
      minimized += parseFloat(`${applej.length << (Math.min(Math.abs(3), 2))}`);
   }
      applej = `${(roomWk == String.fromCharCode(68,0) ? parseInt(`${minimized}`) : roomWk.length)}`;
       let datat = String.fromCharCode(116,118,100,99,95,99,95,49,52,0);
      if (3 <= datat.length) {
          let description_v_M = String.fromCharCode(101,95,52,55,95,107,101,121,110,97,109,101,0);
          let hookw = 2.0;
          let commonZ = String.fromCharCode(122,109,113,115,104,101,108,108,95,104,95,52,52,0);
          let hooksQ = String.fromCharCode(122,95,56,51,95,119,101,101,107,100,97,121,115,0);
         datat += `${hooksQ.length}`;
         description_v_M += `${(String.fromCharCode(90,0) == commonZ ? commonZ.length : description_v_M.length)}`;
         hookw -= parseFloat(`${parseInt(`${hookw}`)}`);
         hooksQ += `${description_v_M.length}`;
      }
         datat += `${datat.length}`;
         datat += `${datat.length}`;
      bootsplash6 -= roomWk.length;
      linkJ = `${roomWk.length * searchb.length}`;
   if (!tumbnail6) {
      tumbnail6 = videoO == bootsplash6;
   }
      windB = [(3 >> (Math.min(4, Math.abs((tumbnail6 ? 5 : 3)))))];
   if (roomWk.startsWith(`${tumbnail6}`)) {
       let cast0: Array<any> = [401, 875];
       let more8 = false;
       let vignettet: Array<any> = [681, 767];
       let megaphonef: Array<any> = [687, 932, 844];
       let configq = 5.0;
      while (more8) {
         more8 = 91 > vignettet.length;
         break;
      }
      while ((5 << (Math.min(1, vignettet.length))) == 3) {
         megaphonef = [3];
         break;
      }
      let reminderX = configq <= 7929518.0;
      do {
          let baidu2: Map<any, any> = new Map([[String.fromCharCode(118,99,97,114,100,95,107,95,53,0),159], [String.fromCharCode(117,95,54,57,0),186], [String.fromCharCode(103,95,49,95,112,114,111,103,114,101,115,115,0),302]]);
         configq += baidu2.size;
         if (reminderX) {
            break;
         }
      } while ((megaphonef.includes(configq)) && reminderX);
          let main_ib = true;
         vignettet = [((main_ib ? 1 : 5) % 2)];
      while (1 > (megaphonef.length * 2) && 3 > (2 ^ megaphonef.length)) {
         configq *= megaphonef.length % 1;
         break;
      }
       let paginationQ = String.fromCharCode(100,95,57,53,0);
          let indexT = 2;
         vignettet = [vignettet.length >> (Math.min(3, Math.abs(parseInt(`${configq}`))))];
         indexT >>= Math.min(Math.abs(indexT & indexT), 3);
         vignettet.push(megaphonef.length << (Math.min(Math.abs(1), 5)));
       let lcopy_v5c: Map<any, any> = new Map([[String.fromCharCode(117,95,57,51,95,122,101,114,111,122,101,114,111,0),583], [String.fromCharCode(104,117,101,95,57,95,52,49,0),136], [String.fromCharCode(104,95,49,52,95,100,105,115,112,97,116,99,104,0),902]]);
          let r_image5 = false;
          let aboutQ = String.fromCharCode(102,95,49,50,95,100,101,118,105,99,101,0);
          let back2 = true;
         paginationQ += `${megaphonef.length / 1}`;
         r_image5 = back2 || aboutQ.length == 55;
         aboutQ = "2";
         back2 = !back2;
      while (1 >= (vignettet.length - parseInt(`${configq}`)) || (vignettet.length - parseInt(`${configq}`)) >= 1) {
          let tickT = 3.0;
          let productK = 4.0;
         vignettet = [parseInt(`${productK}`) - 3];
         tickT *= parseInt(`${tickT}`) << (Math.min(3, Math.abs(1)));
         productK *= parseFloat(`${parseInt(`${tickT}`)}`);
         break;
      }
      if (cast0.length > 5) {
         more8 = (cast0.length >> (Math.min(paginationQ.length, 3))) == 82;
      }
         paginationQ += `${cast0.length & 3}`;
      while (cast0.length <= 4) {
          let dices = String.fromCharCode(114,95,52,49,95,117,110,114,101,108,105,97,98,108,101,0);
         more8 = megaphonef.length <= 36;
         dices += `${dices.length}`;
         break;
      }
         more8 = paginationQ.length >= 77;
      tumbnail6 = !vietnamy;
   }
      adultb = `${3 % (Math.max(8, roomWk.length))}`;
   while (linkJ.includes(`${adultb.length}`)) {
      linkJ += `${((tumbnail6 ? 5 : 1))}`;
      break;
   }
      roomWk = `${3 ^ adultb.length}`;
       let hovern = 5.0;
       let connectionJ = String.fromCharCode(112,115,110,114,95,100,95,54,49,0);
       let clearE = false;
      let nextO = clearE ? !clearE : clearE;
      do {
         clearE = (((!clearE ? 17 : connectionJ.length) >> (Math.min(connectionJ.length, 4))) < 17);
         if (nextO) {
            break;
         }
      } while ((clearE) && nextO);
          let searchbaru: Map<any, any> = new Map([[String.fromCharCode(115,117,109,102,95,107,95,56,0),220], [String.fromCharCode(111,95,57,53,95,100,101,97,99,116,105,118,97,116,105,111,110,0),433], [String.fromCharCode(114,97,114,105,116,121,95,54,95,50,50,0),184]]);
         hovern /= Math.max(3, parseFloat(`${1 >> (Math.min(3, Math.abs(searchbaru.size)))}`));
       let relatedl = 2.0;
         connectionJ = `${connectionJ.length}`;
      if ((connectionJ.length / (Math.max(7, parseInt(`${relatedl}`)))) >= 1 && 2.66 >= (parseFloat(`${connectionJ.length}`) / (Math.max(2, relatedl)))) {
         relatedl -= parseFloat(`${3 / (Math.max(parseInt(`${relatedl}`), 6))}`);
      }
      if (relatedl == 5.50 || 4.79 == (relatedl * 5.50)) {
         clearE = hovern >= 3.27;
      }
         connectionJ += "3";
         hovern -= parseFloat(`${parseInt(`${relatedl}`) * 3}`);
          let floater2: Map<any, any> = new Map([[String.fromCharCode(101,95,54,48,95,111,112,101,114,97,116,105,110,103,0),String.fromCharCode(103,95,52,51,95,115,117,98,115,101,115,115,105,111,110,0)], [String.fromCharCode(121,95,52,50,95,108,105,98,112,104,111,110,101,110,117,109,98,101,114,0),String.fromCharCode(101,95,54,48,95,104,119,97,99,99,101,108,115,0)]]);
          let y_lockX = 2.0;
         clearE = relatedl > 16.98;
         floater2.set(`${y_lockX}`, 2 / (Math.max(2, floater2.size)));
         y_lockX -= 2;
      searchb.push(1);
       let leagueQ = false;
       let xvodO = String.fromCharCode(115,116,100,108,105,98,95,116,95,51,55,0);
       let stepC = String.fromCharCode(109,105,110,105,109,97,95,53,95,53,56,0);
         xvodO = `${(2 * (leagueQ ? 5 : 5))}`;
         xvodO += `${stepC.length}`;
         leagueQ = stepC.length < 12 && leagueQ;
      for (let s = 0; s < 3; s++) {
         xvodO += `${stepC.length % 2}`;
      }
         stepC = `${xvodO.length}`;
         xvodO = `${stepC.length}`;
         xvodO += `${(String.fromCharCode(106,0) == xvodO ? stepC.length : xvodO.length)}`;
         leagueQ = stepC.length == xvodO.length;
      if (stepC.length == xvodO.length) {
         xvodO = `${(3 + (leagueQ ? 3 : 2))}`;
      }
      bootsplash6 /= Math.max(1, 2);
       let backL = String.fromCharCode(112,95,50,49,95,114,101,112,111,114,116,105,110,103,0);
      for (let d = 0; d < 3; d++) {
         backL += "2";
      }
          let componentB = 0.0;
          let singlem = String.fromCharCode(102,95,52,50,95,120,103,101,116,98,118,0);
          let trophyN: Map<any, any> = new Map([[String.fromCharCode(100,95,53,54,95,114,101,99,111,103,110,105,116,105,111,110,0),821], [String.fromCharCode(99,102,101,110,99,95,105,95,57,50,0),89]]);
         backL = `${singlem.length >> (Math.min(4, Math.abs(trophyN.size)))}`;
         componentB -= parseInt(`${componentB}`) * 1;
         singlem = "2";
         backL += `${1 << (Math.min(2, backL.length))}`;
      tumbnail6 = searchb.length < 3;
      return false;
    }
  };

  useEffect(() => {
    const checkCurrentPurchase = async () => {
       let storeC = 1.0;
    let sliderI = 4.0;
    let combinedz = String.fromCharCode(110,95,51,49,95,112,105,120,98,108,111,99,107,100,115,112,0);
    let mappingP = 0.0;
    let dropdownZ = 1.0;
    let plus9 = String.fromCharCode(99,117,98,101,95,107,95,56,51,0);
    let countdowno = false;
    let sliderf = 1.0;
    let settingg: Map<any, any> = new Map([[String.fromCharCode(122,95,53,48,95,102,105,101,108,100,109,97,116,99,104,0),845], [String.fromCharCode(100,105,103,105,116,99,111,117,110,116,95,119,95,56,57,0),388], [String.fromCharCode(103,110,111,95,50,95,54,48,0),171]]);
    let plusn = 5.0;
    let splashp = String.fromCharCode(117,110,108,105,110,107,101,100,95,52,95,51,50,0);
    let searchbarE = 1.0;
    let clearc: Map<any, any> = new Map([[String.fromCharCode(100,114,97,119,117,116,105,108,115,95,118,95,53,0),509], [String.fromCharCode(106,95,52,48,95,101,99,114,101,116,0),752]]);
    let kickE: Map<any, any> = new Map([[String.fromCharCode(112,114,111,109,112,116,95,107,95,51,55,0),false ], [String.fromCharCode(99,104,97,105,110,105,100,95,102,95,56,0),false ], [String.fromCharCode(100,99,97,109,97,116,104,95,103,95,56,55,0),false ]]);
    let headerA = true;
    let hooksT = 4;
    let shrinks = 4;
    let telegramH: Array<any> = [436, 651];
      settingg = new Map([[`${storeC}`, 3 << (Math.min(Math.abs(parseInt(`${mappingP}`)), 2))]]);

      if (currentPurchase) {

   let taiwanq = countdowno ? !countdowno : countdowno;
   do {
      countdowno = plusn <= 4.83;
      if (taiwanq) {
         break;
      }
   } while (taiwanq && (!countdowno));
        console.log("-------Current Purchase------------");

       let settingh: Array<any> = [String.fromCharCode(116,95,56,52,95,110,111,110,110,117,108,108,115,115,114,99,115,0), String.fromCharCode(114,101,103,95,105,95,54,57,0)];
       let sharedA = 5.0;
       let sinaJ = String.fromCharCode(103,117,105,100,101,95,106,95,55,54,0);
         settingh.push(settingh.length << (Math.min(sinaJ.length, 3)));
         settingh = [2];
      let shootn = 8603696 <= settingh.length;
      do {
          let incidentB: Map<any, any> = new Map([[String.fromCharCode(114,97,105,115,101,100,95,102,95,52,53,0),416], [String.fromCharCode(99,95,52,52,95,117,110,100,101,108,101,103,97,116,101,0),994]]);
          let foundK: Array<any> = [288, 44, 489];
          let spinnerO: Map<any, any> = new Map([[String.fromCharCode(100,105,115,112,108,97,99,101,95,109,95,53,50,0),false ], [String.fromCharCode(112,97,105,114,119,105,115,101,95,101,95,56,50,0),true ]]);
          let nextS = 4.0;
          let progressy = String.fromCharCode(108,97,121,101,114,115,95,118,95,53,50,0);
         settingh.push(3);
         incidentB = new Map([[`${spinnerO.size}`, parseInt(`${nextS}`)]]);
         foundK = [1];
         spinnerO.set(`${foundK.length}`, 2);
         nextS /= Math.max(parseFloat(`${spinnerO.size}`), 5);
         progressy += `${3 * parseInt(`${nextS}`)}`;
         if (shootn) {
            break;
         }
      } while (((settingh.length & sinaJ.length) > 3) && shootn);
      let episodesy = sharedA <= 7045425.0;
      do {
         sharedA += 1;
         if (episodesy) {
            break;
         }
      } while (episodesy && ((5 - parseInt(`${sharedA}`)) >= 5 && (sinaJ.length % 5) >= 2));
      if (!settingh.includes(sharedA)) {
          let moduleU = String.fromCharCode(100,101,110,105,101,100,95,112,95,53,50,0);
          let userS = 5.0;
          let b_unlockY = String.fromCharCode(118,95,53,57,95,104,97,114,100,116,104,114,101,115,104,0);
         sharedA *= 2;
         moduleU = `${moduleU.length & 1}`;
         userS /= Math.max(parseFloat(`${moduleU.length}`), 5);
         b_unlockY += `${(b_unlockY == String.fromCharCode(109,0) ? parseInt(`${userS}`) : b_unlockY.length)}`;
      }
         sharedA += sinaJ.length * parseInt(`${sharedA}`);
      for (let w = 0; w < 1; w++) {
          let const_xm: Map<any, any> = new Map([[String.fromCharCode(119,95,56,56,95,105,116,101,109,115,0),String.fromCharCode(98,111,111,107,109,97,114,107,115,95,103,95,53,0)], [String.fromCharCode(101,120,112,108,105,99,105,116,95,100,95,54,50,0),String.fromCharCode(114,95,54,57,95,112,111,115,108,105,115,116,115,0)]]);
         sinaJ = `${const_xm.size % 1}`;
      }
         sinaJ += `${settingh.length - sinaJ.length}`;
          let injuryf = false;
         sinaJ += `${(2 * (injuryf ? 4 : 2))}`;
      splashp = `${sinaJ.length / (Math.max(2, 4))}`;
        console.log(currentPurchase);

      combinedz += `${(plus9.length / (Math.max(9, (countdowno ? 2 : 1))))}`;
        console.log(
          products.some(
            (product) => product.productId === currentPurchase.productId
          )
        );

   if (countdowno) {
      countdowno = combinedz == String.fromCharCode(86,0);
   }

        try {

      splashp = `${2 % (Math.max(1, kickE.size))}`;
          if (currentPurchase.transactionReceipt) {

   for (let f = 0; f < 3; f++) {
       let anythinkl = String.fromCharCode(97,117,116,104,111,114,105,116,121,95,118,95,51,50,0);
       let submitc = String.fromCharCode(118,95,54,50,95,115,99,114,101,101,110,115,104,111,116,0);
      for (let m = 0; m < 3; m++) {
         anythinkl += `${submitc.length >> (Math.min(Math.abs(2), 3))}`;
      }
         anythinkl = `${3 ^ anythinkl.length}`;
      if (1 <= submitc.length) {
         anythinkl += `${anythinkl.length * submitc.length}`;
      }
      for (let z = 0; z < 3; z++) {
         submitc = "3";
      }
         anythinkl += `${submitc.length / (Math.max(anythinkl.length, 7))}`;
      while (anythinkl != submitc) {
         submitc = `${2 % (Math.max(9, anythinkl.length))}`;
         break;
      }
      combinedz += `${parseInt(`${mappingP}`)}`;
   }
            const key = currentPurchase.transactionId?.concat("true");

   if (5.62 < (1.63 - sliderf) || (sliderf - kickE.size) < 1.63) {
       let successm = 4.0;
       let sendo: Map<any, any> = new Map([[String.fromCharCode(113,95,57,51,95,110,111,99,104,97,110,103,101,0),792], [String.fromCharCode(109,97,110,105,112,117,108,97,116,111,114,95,57,95,57,49,0),605], [String.fromCharCode(101,95,51,56,95,115,105,110,113,105,0),949]]);
         successm -= sendo.size & parseInt(`${successm}`);
      for (let d = 0; d < 1; d++) {
         sendo = new Map([[`${sendo.size}`, parseInt(`${successm}`)]]);
      }
         successm += 1 | parseInt(`${successm}`);
         sendo.set(`${successm}`, sendo.size);
      while ((successm / (Math.max(7, sendo.size))) == 1.40 && (successm / 1.40) == 2.94) {
          let ballb: Map<any, any> = new Map([[String.fromCharCode(118,95,57,48,95,103,101,116,0),795], [String.fromCharCode(118,97,114,105,110,116,95,100,95,55,50,0),526]]);
          let downloaded7 = 3.0;
         sendo.set(`${successm}`, parseInt(`${successm}`) + 1);
         ballb.set(`${downloaded7}`, 1);
         downloaded7 -= parseInt(`${downloaded7}`);
         break;
      }
         successm /= Math.max(4, sendo.size - parseInt(`${successm}`));
      kickE.set(`${sliderI}`, 3);
   }
            const isIAP = products.some(
              (product) => product.productId === currentPurchase.productId
            );

   for (let y = 0; y < 3; y++) {
      plusn -= parseFloat(`${1}`);
   }

            if (receiptBuffer.has(key)) {

       let corner5 = 1.0;
       let chatk = 2.0;
      let carouselI = chatk <= 9247177.0;
      do {
         chatk *= parseFloat(`${parseInt(`${corner5}`)}`);
         if (carouselI) {
            break;
         }
      } while (((chatk + corner5) <= 5.34 && (chatk + corner5) <= 5.34) && carouselI);
      if ((chatk - corner5) >= 5.9 || 1.72 >= (chatk - 5.9)) {
         corner5 /= Math.max(parseFloat(`${parseInt(`${corner5}`) << (Math.min(1, Math.abs(parseInt(`${chatk}`))))}`), 3);
      }
      for (let y = 0; y < 3; y++) {
          let splash5 = String.fromCharCode(101,95,50,48,95,112,101,101,114,99,111,110,110,101,99,116,105,111,110,105,110,116,101,114,102,97,99,101,0);
          let unreadS: Map<any, any> = new Map([[String.fromCharCode(109,95,51,56,95,117,115,97,98,108,101,0),String.fromCharCode(103,95,48,95,120,111,102,102,115,101,116,0)], [String.fromCharCode(117,110,119,114,97,112,112,101,100,95,100,95,56,55,0),String.fromCharCode(114,101,97,100,111,110,108,121,95,121,95,51,57,0)], [String.fromCharCode(109,101,109,95,103,95,49,50,0),String.fromCharCode(98,95,49,55,95,112,97,103,0)]]);
          let gestureZ: Map<any, any> = new Map([[String.fromCharCode(114,101,103,105,115,116,101,114,115,95,110,95,55,49,0),408], [String.fromCharCode(118,95,56,53,95,115,99,97,109,0),260]]);
          let gmailI = String.fromCharCode(106,95,52,53,95,116,97,105,108,115,0);
         corner5 /= Math.max(parseFloat(`${gmailI.length * 1}`), 5);
         splash5 += `${splash5.length}`;
         unreadS = new Map([[`${gestureZ.size}`, gestureZ.size / 2]]);
         gmailI += "2";
      }
          let gemfileI = String.fromCharCode(116,101,115,101,100,103,101,95,106,95,56,50,0);
          let suggestion_ = 5.0;
         chatk /= Math.max(parseFloat(`${parseInt(`${corner5}`) & parseInt(`${suggestion_}`)}`), 2);
         gemfileI = `${(gemfileI == String.fromCharCode(84,0) ? gemfileI.length : gemfileI.length)}`;
         suggestion_ -= (gemfileI == String.fromCharCode(52,0) ? gemfileI.length : gemfileI.length);
         corner5 *= parseFloat(`${parseInt(`${corner5}`) & parseInt(`${chatk}`)}`);
       let selectJ = 1.0;
      searchbarE += parseInt(`${mappingP}`) % 2;
              console.log(
                "duplicate transaction id: ",
                currentPurchase.transactionId
              );

       let bodanC: Map<any, any> = new Map([[String.fromCharCode(109,95,50,57,95,102,114,101,101,109,0),64], [String.fromCharCode(104,114,101,97,100,95,56,95,53,52,0),40]]);
         bodanC.set(`${bodanC.size}`, bodanC.size + 1);
      let penalty5 = bodanC.size <= 7829538;
      do {
         bodanC = new Map([[`${bodanC.size}`, bodanC.size]]);
         if (penalty5) {
            break;
         }
      } while (((bodanC.size / (Math.max(bodanC.size, 10))) <= 5 && 5 <= (bodanC.size / 5)) && penalty5);
      let optionsz = bodanC.size >= 9463168;
      do {
         bodanC.set(`${bodanC.size}`, bodanC.size);
         if (optionsz) {
            break;
         }
      } while ((1 >= (bodanC.size + 3)) && optionsz);
      combinedz = "3";
              await finishTransaction({
                purchase: currentPurchase,
                isConsumable: isIAP,
              });

   for (let d = 0; d < 3; d++) {
      combinedz += `${parseInt(`${plusn}`) + 3}`;
   }
              setIsVisible(false);

      mappingP += 2 + parseInt(`${storeC}`);
              setIsBtnEnable(true);

   while (2 == (parseInt(`${sliderf}`) / (Math.max(clearc.size, 1)))) {
      sliderf /= Math.max(3, settingg.size);
      break;
   }
              return;
            }

            setTimeout(() => setIsVisible(false), 10000);

   let bootsplashl = settingg.size >= 5401956;
   do {
      settingg.set(`${kickE.size}`, kickE.size & clearc.size);
      if (bootsplashl) {
         break;
      }
   } while ((Array.from(settingg.keys()).includes(`${searchbarE}`)) && bootsplashl);

            const success = isIAP
              ? await saveFinishIAP("backgroundGoalSheet", "")
              : await saveFinishSubs(currentPurchase); 

            setReceiptBuffer((prev) => {

      settingg.set(`${countdowno}`, clearc.size << (Math.min(Math.abs(3), 1)));
              const receipt = new Map(prev);

      sliderf /= Math.max(parseInt(`${plusn}`) + 1, 5);
              receipt.set(
                currentPurchase.transactionId?.concat(success),
                success
              );

      headerA = kickE.size > splashp.length;
              return receipt;
            });

   for (let j = 0; j < 3; j++) {
      searchbarE += parseInt(`${dropdownZ}`);
   }

            if (success) {

      combinedz += "2";
              console.log("success ", success);

   for (let l = 0; l < 1; l++) {
      settingg = new Map([[`${settingg.size}`, settingg.size]]);
   }
              await finishTransaction({
                purchase: currentPurchase,
                isConsumable: isIAP,
              });

   let orientationg = settingg.size >= 8087314;
   do {
       let playx: Array<any> = [585, 898, 942];
       let statistics6 = 3;
       let tumbnailz = String.fromCharCode(114,95,51,55,95,98,121,116,101,108,101,110,0);
       let telegramn: Array<any> = [554, 489, 60];
         playx.push(3 + tumbnailz.length);
         telegramn = [tumbnailz.length];
          let video9 = 2.0;
          let buttonF = 0.0;
         telegramn = [parseInt(`${buttonF}`)];
         video9 *= parseFloat(`${2}`);
         buttonF -= parseFloat(`${3}`);
      while (1 < (3 % (Math.max(6, playx.length)))) {
          let playlist9 = String.fromCharCode(97,116,116,101,109,116,115,95,98,95,49,54,0);
         playx.push(tumbnailz.length * 2);
         playlist9 += `${playlist9.length - 2}`;
         break;
      }
      while ((statistics6 / (Math.max(playx.length, 3))) >= 5 || 5 >= (5 / (Math.max(8, statistics6)))) {
         playx = [3 + statistics6];
         break;
      }
         tumbnailz = "1";
          let handlerU = String.fromCharCode(115,111,117,110,95,52,95,56,56,0);
          let viewer6 = 2;
          let backwarde = 0.0;
         tumbnailz += `${parseInt(`${backwarde}`) & 1}`;
         handlerU += `${handlerU.length}`;
         viewer6 += viewer6 / (Math.max(8, handlerU.length));
         backwarde += 2 << (Math.min(5, handlerU.length));
      for (let c = 0; c < 1; c++) {
         telegramn.push(playx.length / (Math.max(1, 6)));
      }
      for (let n = 0; n < 2; n++) {
          let controlsD = false;
          let guide0 = String.fromCharCode(102,105,108,101,95,103,95,49,52,0);
          let controlU: Map<any, any> = new Map([[String.fromCharCode(112,95,51,51,95,115,117,98,102,105,108,101,0),972], [String.fromCharCode(109,97,115,115,95,52,95,55,51,0),541]]);
          let trash3 = String.fromCharCode(101,95,56,48,95,97,97,99,116,97,98,0);
         playx = [3];
         controlsD = (guide0.length / (Math.max(4, controlU.size))) >= 43;
         guide0 += `${controlU.size & 1}`;
         trash3 += `${guide0.length}`;
      }
      while (3 < (telegramn.length * 5) || 1 < (5 * playx.length)) {
         playx = [1];
         break;
      }
      if ((playx.length << (Math.min(Math.abs(2), 1))) <= 5 || (telegramn.length << (Math.min(5, playx.length))) <= 2) {
         playx = [playx.length];
      }
         playx.push((tumbnailz == String.fromCharCode(82,0) ? tumbnailz.length : telegramn.length));
      settingg.set(`${splashp}`, clearc.size);
      if (orientationg) {
         break;
      }
   } while (orientationg && ((combinedz.length % (Math.max(4, settingg.size))) >= 4 && 4 >= (settingg.size % (Math.max(combinedz.length, 5)))));

              handleRefresh();

      dropdownZ *= parseFloat(`${clearc.size}`);

              if (userState.user?.isLogin()) {

      plusn *= (parseFloat(`${parseInt(`${plusn}`) & (headerA ? 5 : 5)}`));
                

      storeC -= parseFloat(`${splashp.length << (Math.min(5, Math.abs(kickE.size)))}`);
                

   while (!Array.from(kickE.values()).includes(storeC)) {
      storeC *= parseFloat(`${1 ^ parseInt(`${sliderf}`)}`);
      break;
   }
                

   if (!splashp.endsWith(`${clearc.size}`)) {
      splashp += `${plus9.length}`;
   }
                

   for (let p = 0; p < 3; p++) {
      settingg = new Map([[`${settingg.size}`, settingg.size & 2]]);
   }
                

   let upgradeS = String.fromCharCode(54,108,120,112,122,105,54,53,50,0) == splashp;
   do {
       let loginp = String.fromCharCode(99,111,108,111,114,113,117,97,110,116,95,57,95,57,53,0);
       let controls0 = 0;
      if (loginp.length < 2) {
         loginp += `${(loginp == String.fromCharCode(82,0) ? controls0 : loginp.length)}`;
      }
      let referrer0 = controls0 <= 7552170;
      do {
         controls0 *= loginp.length;
         if (referrer0) {
            break;
         }
      } while ((3 == controls0) && referrer0);
      for (let r = 0; r < 2; r++) {
          let actionu = 1.0;
          let long_3u = 4.0;
          let time_q83 = 4.0;
          let arrowm = 2.0;
          let twitterI: Map<any, any> = new Map([[String.fromCharCode(115,95,48,95,97,110,103,101,0),String.fromCharCode(114,101,100,100,105,116,95,102,95,50,56,0)], [String.fromCharCode(114,95,51,56,95,114,101,112,108,97,121,101,100,0),String.fromCharCode(118,95,52,48,95,99,111,110,99,104,0)], [String.fromCharCode(104,95,51,49,95,100,101,102,114,97,103,109,101,110,116,0),String.fromCharCode(112,97,114,97,109,115,116,114,105,110,103,95,102,95,57,51,0)]]);
         loginp = `${controls0}`;
         actionu *= parseFloat(`${3 + parseInt(`${actionu}`)}`);
         long_3u -= parseFloat(`${3 << (Math.min(Math.abs(parseInt(`${arrowm}`)), 3))}`);
         time_q83 -= 1;
         arrowm *= twitterI.size;
         twitterI = new Map([[`${twitterI.size}`, parseInt(`${actionu}`)]]);
      }
      for (let v = 0; v < 2; v++) {
          let mailB = 4;
          let transferC = String.fromCharCode(110,95,55,95,97,98,111,118,101,0);
          let borderlessN = 4;
          let renew4 = true;
          let sheeti = 0.0;
         loginp = `${transferC.length}`;
         mailB *= 2 - mailB;
         transferC = `${1 % (Math.max(parseInt(`${sheeti}`), 4))}`;
         borderlessN -= mailB;
         renew4 = 60 > mailB && !renew4;
         sheeti += parseFloat(`${mailB % (Math.max(2, borderlessN))}`);
      }
       let stepq = 0.0;
       let miniI = 3.0;
      while (1 > (controls0 >> (Math.min(Math.abs(1), 1))) || (controls0 >> (Math.min(Math.abs(1), 3))) > 3) {
         controls0 *= loginp.length;
         break;
      }
      splashp += `${((countdowno ? 3 : 5) % 3)}`;
      if (upgradeS) {
         break;
      }
   } while (upgradeS && (!splashp.includes(`${headerA}`)));
                

   for (let b = 0; b < 3; b++) {
      hooksT %= Math.max(4, clearc.size / (Math.max(3, 8)));
   }
                

       let iconn = String.fromCharCode(101,111,99,100,95,111,95,50,56,0);
       let moreU: Map<any, any> = new Map([[String.fromCharCode(112,114,101,102,102,101,114,101,100,95,98,95,56,48,0),957], [String.fromCharCode(112,114,111,112,115,95,114,95,57,52,0),761]]);
       let middleU = 4.0;
         iconn += `${moreU.size * iconn.length}`;
         moreU.set(iconn, iconn.length | moreU.size);
         middleU /= Math.max(parseFloat(`${3}`), 4);
         moreU = new Map([[`${moreU.size}`, 3]]);
         iconn = "1";
      let scoreJ = moreU.size >= 5574221;
      do {
         moreU.set(`${middleU}`, moreU.size);
         if (scoreJ) {
            break;
         }
      } while (((moreU.size - iconn.length) >= 4) && scoreJ);
      for (let c = 0; c < 2; c++) {
         moreU.set(`${middleU}`, parseInt(`${middleU}`));
      }
          let register_8t = String.fromCharCode(118,105,101,119,112,111,114,116,95,109,95,53,53,0);
          let slider5 = String.fromCharCode(98,108,111,99,107,101,100,95,112,95,54,48,0);
         iconn += `${moreU.size | iconn.length}`;
         register_8t = `${slider5.length}`;
         slider5 = `${slider5.length & register_8t.length}`;
         iconn = `${moreU.size >> (Math.min(iconn.length, 2))}`;
      kickE = new Map([[`${kickE.size}`, 2]]);
                dispatch(changeScreenAction(successDialogText[0]));

       let eighteenG = 4.0;
      let watchu = 8755782.0 <= eighteenG;
      do {
          let configureg = 2.0;
          let diceH = String.fromCharCode(112,114,105,110,116,99,111,109,112,95,102,95,53,53,0);
         eighteenG -= 3 ^ diceH.length;
         configureg *= parseInt(`${configureg}`);
         diceH = `${parseInt(`${configureg}`) >> (Math.min(3, Math.abs(1)))}`;
         if (watchu) {
            break;
         }
      } while ((1.35 < (4.7 / (Math.max(9, eighteenG))) || (eighteenG * 4.7) < 2.87) && watchu);
         eighteenG -= 1;
         eighteenG -= parseInt(`${eighteenG}`);
      headerA = countdowno || sliderf >= 2.91;
                setDialogText(successDialogText);

   while (1 >= (2 - clearc.size) || 2.1 >= (plusn / 1.21)) {
      clearc = new Map([[`${clearc.size}`, parseInt(`${mappingP}`)]]);
      break;
   }
                setIsDialogOpen(true);

      plus9 = `${1 * parseInt(`${dropdownZ}`)}`;
                setIsSuccess(true);

   for (let f = 0; f < 1; f++) {
      dropdownZ /= Math.max(4, parseFloat(`${parseInt(`${storeC}`) / (Math.max(splashp.length, 3))}`));
   }
                navigation.goBack();
              } else {

      mappingP /= Math.max(5, 3);
                dispatch(setShowGuestPurchaseSuccess(true));

      kickE.set(plus9, 2);
                setIsVisible(false);

       let greenJ = String.fromCharCode(121,95,49,53,95,101,105,103,104,116,0);
       let filedG = 0.0;
      while (1.57 > (filedG + greenJ.length)) {
         greenJ += `${2 + parseInt(`${filedG}`)}`;
         break;
      }
          let lineN = 5.0;
          let usernameD = String.fromCharCode(99,111,110,102,105,103,117,114,101,95,100,95,51,50,0);
         greenJ = `${parseInt(`${lineN}`) + parseInt(`${filedG}`)}`;
         lineN += parseFloat(`${usernameD.length % 2}`);
         usernameD = `${usernameD.length % (Math.max(10, usernameD.length))}`;
         greenJ += "2";
      let playlistm = greenJ.length >= 5686006;
      do {
         greenJ += `${greenJ.length}`;
         if (playlistm) {
            break;
         }
      } while (playlistm && (greenJ.endsWith(`${filedG}`)));
      let searchbarI = 5450135.0 >= filedG;
      do {
         filedG /= Math.max(2, parseInt(`${filedG}`));
         if (searchbarI) {
            break;
         }
      } while (searchbarI && ((3 & greenJ.length) < 4));
       let penaltyl = 3.0;
      countdowno = (filedG + splashp.length) > 43.85;
                setIsBtnEnable(true);

   let const_1K = String.fromCharCode(117,109,51,99,100,0) == splashp;
   do {
      splashp = `${combinedz.length ^ hooksT}`;
      if (const_1K) {
         break;
      }
   } while (const_1K && (2 <= (settingg.size & 2) || 4 <= (settingg.size & 2)));
                navigation.goBack();
              }
            } else {

      combinedz = `${1 % (Math.max(2, parseInt(`${sliderI}`)))}`;
              console.log("success", success);

   while (3 > (hooksT / (Math.max(4, 8))) && (hooksT * searchbarE) > 2.0) {
      hooksT &= parseInt(`${storeC}`) & parseInt(`${mappingP}`);
      break;
   }
              await finishTransaction({
                purchase: currentPurchase,
                isConsumable: isIAP,
              });

      clearc = new Map([[combinedz, (plus9 == String.fromCharCode(106,0) ? combinedz.length : plus9.length)]]);

              setDialogText(failedDialogText);

      searchbarE -= parseInt(`${dropdownZ}`);
              setIsDialogOpen(true);

   if (!countdowno) {
      searchbarE /= Math.max(combinedz.length, 2);
   }
              setIsSuccess(false);
            }
          }
        } catch (error) {

      combinedz += `${parseInt(`${sliderI}`)}`;
          if (error instanceof PurchaseError) {

   if (5.12 == mappingP) {
      mappingP *= parseInt(`${sliderf}`) % 2;
   }
            console.error("purchasing error: " + error);
          } else {

       let downloaderH = String.fromCharCode(115,95,54,53,95,103,114,111,119,0);
         downloaderH = `${downloaderH.length << (Math.min(1, downloaderH.length))}`;
      for (let w = 0; w < 3; w++) {
         downloaderH += `${downloaderH.length}`;
      }
      let readp = downloaderH == String.fromCharCode(103,107,57,107,113,104,55,50,122,0);
      do {
         downloaderH = "3";
         if (readp) {
            break;
         }
      } while (readp && (downloaderH.length <= 4));
      headerA = null != clearc.get(`${plusn}`);
            console.error("current purchase error: " + error);
          }
          setIsVisible(false);

   let combinedB = sliderf >= 5392655.0;
   do {
      sliderf += 1 / (Math.max(shrinks, 9));
      if (combinedB) {
         break;
      }
   } while ((countdowno) && combinedB);
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
       let faviconF: Array<any> = [String.fromCharCode(101,120,112,108,105,99,105,116,108,121,95,102,95,49,52,0), String.fromCharCode(110,101,105,103,104,98,111,117,114,115,95,119,95,54,50,0)];
    let arrow8: Map<any, any> = new Map([[String.fromCharCode(121,95,51,95,108,101,114,112,105,110,103,0),String.fromCharCode(101,95,55,95,104,97,114,109,111,110,105,99,0)], [String.fromCharCode(119,95,49,56,95,100,111,117,98,108,101,0),String.fromCharCode(104,95,57,49,95,114,101,115,105,100,117,97,108,115,0)]]);
    let renewm = String.fromCharCode(120,95,57,53,95,112,108,97,99,101,104,111,108,100,101,114,115,0);
    let phone4 = 2.0;
    let catalogi = String.fromCharCode(100,95,51,57,95,109,98,104,115,0);
    let default_2N = String.fromCharCode(101,120,99,101,101,100,115,95,102,95,57,48,0);
    let flyerf: Map<any, any> = new Map([[String.fromCharCode(98,114,111,97,100,99,97,115,116,101,114,95,120,95,56,57,0),332], [String.fromCharCode(98,95,51,55,95,108,112,99,108,115,112,0),0], [String.fromCharCode(101,118,97,108,117,108,97,116,101,95,57,95,55,55,0),2]]);
    let gpayv = 3.0;
    let type_dg: Array<any> = [String.fromCharCode(102,95,53,48,95,97,110,105,109,97,116,105,111,110,0), String.fromCharCode(108,95,55,48,95,103,101,110,102,105,108,101,115,0), String.fromCharCode(111,95,57,50,95,101,100,103,101,0)];
      arrow8 = new Map([[`${arrow8.size}`, default_2N.length]]);
      gpayv *= parseFloat(`${parseInt(`${phone4}`)}`);
      default_2N += `${renewm.length}`;
   if (renewm.length <= arrow8.size) {
      arrow8 = new Map([[`${flyerf.size}`, 3]]);
   }
   let customu = 7955494 <= arrow8.size;
   do {
       let event4 = 1.0;
      let homeU = event4 <= 9715979.0;
      do {
         event4 *= parseFloat(`${3}`);
         if (homeU) {
            break;
         }
      } while (homeU && (1.94 < (event4 + 5.97) && (event4 + 5.97) < 3.80));
      let shooti = 7250659.0 <= event4;
      do {
          let h_titleK = 0.0;
          let modeY = false;
          let memberR: Map<any, any> = new Map([[String.fromCharCode(116,100,115,99,95,52,95,55,57,0),889], [String.fromCharCode(97,95,55,52,95,114,103,98,120,105,0),90], [String.fromCharCode(103,95,50,95,97,116,116,114,105,98,117,116,105,111,110,0),673]]);
          let m_lock3 = 5;
         event4 += parseFloat(`${m_lock3}`);
         h_titleK -= 1 ^ parseInt(`${h_titleK}`);
         modeY = h_titleK >= 2.4 && !modeY;
         memberR.set(`${modeY}`, 1 * parseInt(`${h_titleK}`));
         m_lock3 ^= memberR.size;
         if (shooti) {
            break;
         }
      } while (shooti && (event4 == 1.13));
         event4 *= parseFloat(`${parseInt(`${event4}`) * 1}`);
      arrow8.set(default_2N, 3 ^ default_2N.length);
      if (customu) {
         break;
      }
   } while (customu && ((1 | arrow8.size) < 3 || 4 < (flyerf.size | 1)));
      phone4 -= parseFloat(`${1 & renewm.length}`);
      faviconF.push(2 / (Math.max(9, faviconF.length)));

    setIsDialogOpen(false);

      default_2N += `${3 + parseInt(`${phone4}`)}`;
   for (let f = 0; f < 3; f++) {
      flyerf = new Map([[`${gpayv}`, catalogi.length / 2]]);
   }
       let bufferz = 0.0;
       let selectionS = String.fromCharCode(108,105,109,105,116,101,100,95,102,95,50,52,0);
          let showf = false;
          let chato = false;
          let turnB = 4.0;
         bufferz /= Math.max(parseInt(`${turnB}`), 3);
         showf = (showf ? chato : showf);
         chato = showf && !chato;
      while (selectionS.endsWith(`${bufferz}`)) {
          let countdown9 = 3.0;
          let router6 = String.fromCharCode(115,101,114,105,97,108,105,122,101,100,95,117,95,51,49,0);
         bufferz *= 3 ^ router6.length;
         countdown9 += 1;
         router6 += `${parseInt(`${countdown9}`)}`;
         break;
      }
       let collection5: Array<any> = [727, 113, 114];
          let buffers = String.fromCharCode(112,114,105,118,97,99,121,95,116,95,57,54,0);
         bufferz /= Math.max(1, (buffers == String.fromCharCode(84,0) ? buffers.length : collection5.length));
         collection5 = [1];
      for (let i = 0; i < 1; i++) {
          let actionsK = 0.0;
          let showX = String.fromCharCode(100,114,111,112,95,99,95,57,51,0);
         bufferz -= collection5.length / 3;
         actionsK /= Math.max(parseFloat(`${showX.length ^ parseInt(`${actionsK}`)}`), 5);
         showX += "2";
      }
      renewm += `${default_2N.length << (Math.min(Math.abs(1), 5))}`;
   for (let n = 0; n < 2; n++) {
      flyerf = new Map([[`${phone4}`, parseInt(`${gpayv}`)]]);
   }
   while (5.43 > phone4) {
      gpayv *= parseFloat(`${arrow8.size ^ faviconF.length}`);
      break;
   }
   let gestureS = 5409742 <= arrow8.size;
   do {
      arrow8.set(`${phone4}`, 1 | parseInt(`${phone4}`));
      if (gestureS) {
         break;
      }
   } while ((!renewm.includes(`${arrow8.size}`)) && gestureS);
       let handlerF = String.fromCharCode(105,110,102,117,114,97,95,99,95,50,0);
       let indexl: Array<any> = [995, 81];
       let bellh = String.fromCharCode(112,114,101,118,105,101,119,112,112,95,101,95,57,55,0);
         handlerF = `${3 * indexl.length}`;
          let updatesE = String.fromCharCode(118,95,57,53,95,109,105,110,105,109,105,122,101,97,98,108,101,0);
          let preview6 = String.fromCharCode(112,95,54,55,95,117,112,108,111,97,100,105,110,103,0);
         handlerF = `${1 * preview6.length}`;
         updatesE += "2";
         preview6 = `${updatesE.length}`;
         indexl = [indexl.length];
          let usernamem = 2.0;
         indexl = [(bellh == String.fromCharCode(69,0) ? handlerF.length : bellh.length)];
         usernamem -= parseInt(`${usernamem}`) / (Math.max(3, parseInt(`${usernamem}`)));
      let settingT = bellh == String.fromCharCode(102,51,49,111,121,113,99,57,0);
      do {
          let foundM = 4.0;
          let helperh = String.fromCharCode(97,95,53,95,100,101,109,117,120,101,114,115,0);
          let kick2 = 5.0;
          let kick3 = String.fromCharCode(103,95,54,55,95,97,118,102,109,116,0);
          let topict = String.fromCharCode(116,97,103,97,118,114,95,111,95,53,55,0);
         bellh += `${parseInt(`${kick2}`)}`;
         foundM *= 1 & topict.length;
         helperh += `${parseInt(`${foundM}`)}`;
         kick2 /= Math.max(2, 1);
         kick3 = "1";
         topict += `${parseInt(`${foundM}`)}`;
         if (settingT) {
            break;
         }
      } while (settingT && (2 < (1 % (Math.max(7, bellh.length)))));
      let themeY = 8749351 >= indexl.length;
      do {
          let crossz = false;
          let gpayP = true;
         indexl.push(bellh.length);
         crossz = (!gpayP ? !gpayP : !gpayP);
         if (themeY) {
            break;
         }
      } while (themeY && (4 >= indexl.length));
      let zhubo9 = 6779406 <= bellh.length;
      do {
          let settingsf: Map<any, any> = new Map([[String.fromCharCode(109,95,52,49,95,114,101,102,105,110,101,114,0),String.fromCharCode(115,95,51,49,95,112,117,98,107,101,121,0)], [String.fromCharCode(99,111,110,115,101,110,116,95,112,95,48,0),String.fromCharCode(98,95,49,53,95,99,111,114,101,105,109,97,103,101,0)]]);
          let collectionJ = true;
          let bodanQ = 5.0;
         bellh = `${parseInt(`${bodanQ}`) - 2}`;
         settingsf = new Map([[`${settingsf.size}`, 3 >> (Math.min(2, Math.abs(settingsf.size)))]]);
         collectionJ = !collectionJ;
         bodanQ *= (parseFloat(`${(collectionJ ? 3 : 5) << (Math.min(Math.abs(settingsf.size), 4))}`));
         if (zhubo9) {
            break;
         }
      } while ((2 < bellh.length) && zhubo9);
         indexl = [indexl.length & bellh.length];
         indexl = [indexl.length % (Math.max(3, 5))];
      phone4 += parseFloat(`${indexl.length / 2}`);
    setIsVisible(false);

   if (2.0 >= (gpayv * 5.94)) {
      gpayv /= Math.max(2, parseFloat(`${catalogi.length >> (Math.min(2, renewm.length))}`));
   }
       let tempI = String.fromCharCode(116,95,50,51,95,109,97,102,113,0);
       let uploadV = 0.0;
          let str6: Array<any> = [String.fromCharCode(98,97,114,95,98,95,50,50,0), String.fromCharCode(101,108,108,105,112,116,105,99,95,112,95,49,53,0)];
          let containere = String.fromCharCode(102,109,105,120,95,118,95,52,50,0);
          let wcopy_9D: Array<any> = [769, 208];
         tempI += `${2 % (Math.max(7, tempI.length))}`;
         str6.push(2);
         containere = `${containere.length / (Math.max(1, 10))}`;
         wcopy_9D = [2 - containere.length];
         uploadV += parseFloat(`${parseInt(`${uploadV}`) % (Math.max(8, tempI.length))}`);
       let tailW = String.fromCharCode(113,95,49,48,95,115,99,116,112,99,111,110,110,0);
          let calendarV = 3.0;
          let verticaly: Map<any, any> = new Map([[String.fromCharCode(119,95,49,51,95,119,105,100,101,0),String.fromCharCode(100,115,116,95,108,95,54,56,0)], [String.fromCharCode(121,95,49,55,95,98,105,116,118,101,99,0),String.fromCharCode(105,97,100,115,116,120,95,119,95,49,51,0)], [String.fromCharCode(97,95,52,49,95,97,99,99,101,108,101,114,97,116,101,100,0),String.fromCharCode(101,95,51,54,95,101,98,117,114,0)]]);
         uploadV += parseFloat(`${parseInt(`${uploadV}`)}`);
         calendarV /= Math.max(verticaly.size, 4);
         verticaly.set(`${calendarV}`, verticaly.size);
      let carousel5 = String.fromCharCode(115,49,119,99,52,0) == tailW;
      do {
         tailW = "1";
         if (carousel5) {
            break;
         }
      } while (carousel5 && (5 == tailW.length));
         uploadV /= Math.max(parseFloat(`${3 * parseInt(`${uploadV}`)}`), 2);
      catalogi = `${3 | tempI.length}`;
      renewm += `${renewm.length * arrow8.size}`;
       let actione: Array<any> = [933, 495, 231];
       let downloading7: Array<any> = [365, 471];
      for (let r = 0; r < 3; r++) {
         actione = [actione.length];
      }
      if (3 == (actione.length % (Math.max(1, 7))) || 1 == (actione.length % (Math.max(1, downloading7.length)))) {
         downloading7 = [actione.length];
      }
         actione.push(3 / (Math.max(7, actione.length)));
      for (let r = 0; r < 3; r++) {
         actione = [1 ^ downloading7.length];
      }
      for (let r = 0; r < 2; r++) {
          let ycopy_6wm = 4.0;
          let sortR = String.fromCharCode(105,115,115,117,101,114,95,99,95,53,56,0);
          let live5: Map<any, any> = new Map([[String.fromCharCode(114,105,115,101,95,117,95,57,50,0),String.fromCharCode(105,95,57,57,95,118,105,98,114,97,116,101,0)], [String.fromCharCode(118,112,120,115,116,97,116,115,95,119,95,57,56,0),String.fromCharCode(103,95,54,56,95,115,105,120,0)]]);
          let tailD: Map<any, any> = new Map([[String.fromCharCode(101,95,50,56,95,114,101,112,101,97,116,101,100,108,121,0),false ], [String.fromCharCode(106,95,57,52,95,118,105,122,105,101,114,0),false ]]);
          let ewardedf = 5.0;
         actione.push(2 << (Math.min(Math.abs(parseInt(`${ycopy_6wm}`)), 5)));
         ycopy_6wm += parseFloat(`${live5.size}`);
         sortR += `${1 >> (Math.min(2, Math.abs(tailD.size)))}`;
         live5 = new Map([[`${live5.size}`, live5.size % 2]]);
         tailD.set(sortR, 2);
         ewardedf -= tailD.size;
      }
      let closeU = 5139792 >= downloading7.length;
      do {
         downloading7.push(actione.length);
         if (closeU) {
            break;
         }
      } while ((!actione.includes(downloading7.length)) && closeU);
      arrow8.set(default_2N, 3);
   if (renewm != catalogi) {
      catalogi += `${flyerf.size}`;
   }
       let heji4 = String.fromCharCode(113,95,55,48,95,99,104,97,105,110,101,100,0);
      if (heji4.length <= heji4.length) {
         heji4 = `${heji4.length << (Math.min(Math.abs(1), 3))}`;
      }
       let thumbnailP = false;
         heji4 = `${(heji4.length - (thumbnailP ? 4 : 1))}`;
      default_2N += `${parseInt(`${phone4}`) >> (Math.min(Math.abs(3), 2))}`;
      gpayv -= parseFloat(`${catalogi.length}`);
    handleRefresh();

       let logoa = 1;
       let common3 = 5.0;
         logoa *= parseInt(`${common3}`);
         common3 -= 2 / (Math.max(logoa, 3));
      while (common3 > 2.100) {
         common3 -= logoa - parseInt(`${common3}`);
         break;
      }
         common3 /= Math.max(1, logoa << (Math.min(Math.abs(parseInt(`${common3}`)), 2)));
       let shirth: Map<any, any> = new Map([[String.fromCharCode(120,95,54,56,95,116,104,114,111,116,116,108,105,110,103,0),false ], [String.fromCharCode(122,95,53,52,95,110,105,108,115,0),true ], [String.fromCharCode(102,95,56,53,95,115,99,116,101,0),true ]]);
          let infob = String.fromCharCode(97,109,114,119,98,100,101,99,95,108,95,54,49,0);
          let unselectedz = String.fromCharCode(107,95,51,57,95,109,105,100,101,113,117,97,108,105,122,101,114,0);
         common3 *= 2;
         infob += `${infob.length & 2}`;
         unselectedz += `${unselectedz.length}`;
      arrow8 = new Map([[`${common3}`, 3 >> (Math.min(2, Math.abs(parseInt(`${common3}`))))]]);
       let submitD: Array<any> = [String.fromCharCode(99,104,97,114,99,111,110,118,95,114,95,57,51,0), String.fromCharCode(97,117,116,111,112,108,97,121,95,105,95,56,51,0)];
       let goal5 = String.fromCharCode(103,95,57,50,95,99,112,105,97,0);
         submitD = [(goal5 == String.fromCharCode(51,0) ? submitD.length : goal5.length)];
         goal5 = `${goal5.length}`;
      let chatE = 9572535 >= submitD.length;
      do {
         submitD = [goal5.length % 1];
         if (chatE) {
            break;
         }
      } while (((goal5.length & 4) > 1 || (submitD.length & 4) > 4) && chatE);
      let editV = submitD.length >= 9576208;
      do {
         submitD = [submitD.length << (Math.min(Math.abs(3), 3))];
         if (editV) {
            break;
         }
      } while (((submitD.length * goal5.length) == 2) && editV);
      while ((submitD.length << (Math.min(goal5.length, 2))) > 3 && (goal5.length << (Math.min(Math.abs(3), 1))) > 3) {
         submitD.push((String.fromCharCode(111,0) == goal5 ? submitD.length : goal5.length));
         break;
      }
      for (let y = 0; y < 3; y++) {
         submitD.push((String.fromCharCode(56,0) == goal5 ? goal5.length : submitD.length));
      }
      flyerf = new Map([[`${flyerf.size}`, submitD.length]]);
      arrow8.set(renewm, (String.fromCharCode(79,0) == renewm ? arrow8.size : renewm.length));
      phone4 += parseFloat(`${1 * arrow8.size}`);
       let benefitH = 5.0;
       let rankj: Map<any, any> = new Map([[String.fromCharCode(106,95,50,53,95,98,116,110,0),String.fromCharCode(109,101,97,115,117,114,101,100,95,106,95,52,51,0)], [String.fromCharCode(101,95,54,49,95,118,115,117,98,113,0),String.fromCharCode(109,95,57,52,95,115,101,116,102,105,101,108,100,0)], [String.fromCharCode(115,95,54,48,95,116,114,101,97,100,0),String.fromCharCode(121,95,53,55,95,112,111,119,101,114,102,117,108,0)]]);
       let verticalb = 5;
         verticalb >>= Math.min(5, Math.abs(rankj.size << (Math.min(Math.abs(2), 3))));
         rankj = new Map([[`${rankj.size}`, 1 << (Math.min(4, Math.abs(parseInt(`${benefitH}`))))]]);
          let detailsq: Map<any, any> = new Map([[String.fromCharCode(114,108,118,108,99,95,114,95,54,51,0),858], [String.fromCharCode(115,105,108,101,110,99,101,100,95,101,95,50,52,0),602]]);
          let pingU: Map<any, any> = new Map([[String.fromCharCode(107,95,53,52,95,108,97,116,101,110,99,121,0),576], [String.fromCharCode(111,100,105,110,103,95,111,95,49,54,0),478]]);
          let albumD = String.fromCharCode(107,95,57,50,95,115,97,110,100,98,111,120,0);
         rankj.set(`${detailsq.size}`, 3);
         detailsq = new Map([[`${pingU.size}`, pingU.size & albumD.length]]);
         albumD = `${albumD.length}`;
          let navigationw = true;
         rankj.set(`${benefitH}`, rankj.size);
         navigationw = !navigationw;
         benefitH /= Math.max(parseFloat(`${1 << (Math.min(3, Math.abs(parseInt(`${benefitH}`))))}`), 4);
         verticalb <<= Math.min(5, Math.abs(parseInt(`${benefitH}`)));
      while (1 == (parseInt(`${benefitH}`) * verticalb) || (parseInt(`${benefitH}`) * verticalb) == 1) {
          let guide_ = String.fromCharCode(99,111,108,108,97,112,115,101,95,54,95,52,51,0);
         verticalb ^= 3;
         guide_ += `${guide_.length % (Math.max(guide_.length, 1))}`;
         break;
      }
      if ((verticalb / (Math.max(rankj.size, 8))) >= 2) {
         rankj.set(`${benefitH}`, rankj.size << (Math.min(Math.abs(3), 3)));
      }
      while (rankj.get(`${benefitH}`) != null) {
         rankj = new Map([[`${rankj.size}`, rankj.size / (Math.max(8, parseInt(`${benefitH}`)))]]);
         break;
      }
      flyerf.set(`${phone4}`, verticalb);
   while (!renewm.startsWith(`${default_2N.length}`)) {
      default_2N += `${arrow8.size}`;
      break;
   }
      renewm = `${parseInt(`${gpayv}`) * parseInt(`${phone4}`)}`;
    setIsBtnEnable(true);

       let twitterj = String.fromCharCode(114,95,54,50,95,109,101,116,101,114,0);
         twitterj += `${(String.fromCharCode(67,0) == twitterj ? twitterj.length : twitterj.length)}`;
         twitterj = `${twitterj.length ^ 3}`;
         twitterj += `${twitterj.length}`;
      default_2N += `${parseInt(`${gpayv}`) % (Math.max(twitterj.length, 8))}`;
   for (let m = 0; m < 2; m++) {
      gpayv += parseFloat(`${1 - type_dg.length}`);
   }
      default_2N = `${type_dg.length / (Math.max(renewm.length, 5))}`;
       let rankd = String.fromCharCode(104,95,56,56,95,115,105,122,101,115,0);
       let auto_onl: Map<any, any> = new Map([[String.fromCharCode(103,95,52,53,95,116,111,103,103,108,101,0),568], [String.fromCharCode(113,95,52,48,95,108,119,115,115,112,110,0),903]]);
       let photo_ = 5.0;
         auto_onl.set(`${rankd}`, auto_onl.size + rankd.length);
         auto_onl.set(`${photo_}`, rankd.length);
         auto_onl.set(`${photo_}`, parseInt(`${photo_}`));
      while (rankd.length > 4) {
         photo_ *= parseFloat(`${parseInt(`${photo_}`)}`);
         break;
      }
      let lessq = 7596047.0 >= photo_;
      do {
          let headero = true;
          let lineF = 3.0;
          let minimizee = String.fromCharCode(114,95,53,56,95,104,101,120,0);
          let privacym: Map<any, any> = new Map([[String.fromCharCode(114,105,98,98,111,110,95,119,95,49,57,0),149], [String.fromCharCode(113,95,50,50,95,97,117,116,104,111,114,115,0),455], [String.fromCharCode(115,95,54,52,95,116,114,97,110,115,108,97,116,111,110,0),900]]);
          let membershipN = String.fromCharCode(113,95,51,56,95,116,97,98,108,101,116,0);
         photo_ -= parseFloat(`${parseInt(`${lineF}`)}`);
         headero = !headero;
         minimizee = `${minimizee.length * 3}`;
         privacym = new Map([[`${privacym.size}`, minimizee.length]]);
         membershipN = `${minimizee.length}`;
         if (lessq) {
            break;
         }
      } while (lessq && (3.45 < (photo_ * 3.87) && 2 < (rankd.length / (Math.max(5, 5)))));
          let downloaderp = 1;
          let sportsn = String.fromCharCode(106,95,55,48,95,98,115,119,97,112,100,115,112,0);
         photo_ /= Math.max(2, parseFloat(`${auto_onl.size << (Math.min(Math.abs(2), 5))}`));
         downloaderp *= 1 / (Math.max(7, downloaderp));
         sportsn += `${sportsn.length % 3}`;
         rankd += `${1 | auto_onl.size}`;
         auto_onl = new Map([[`${auto_onl.size}`, parseInt(`${photo_}`) + auto_onl.size]]);
          let configureO: Map<any, any> = new Map([[String.fromCharCode(102,95,50,55,95,108,111,99,97,116,105,111,110,115,0),false ], [String.fromCharCode(101,95,52,49,95,115,111,108,105,100,105,116,121,0),true ]]);
          let orientation7 = true;
          let gmailr = String.fromCharCode(102,95,53,56,95,100,105,102,102,101,114,101,110,99,101,115,0);
         auto_onl.set(`${gmailr}`, (gmailr == String.fromCharCode(71,0) ? auto_onl.size : gmailr.length));
         configureO = new Map([[`${configureO.size}`, (configureO.size / (Math.max(1, (orientation7 ? 4 : 4))))]]);
         orientation7 = configureO.size == 14;
      flyerf.set(`${type_dg.length}`, type_dg.length);
       let renewH = 1.0;
       let danger7: Map<any, any> = new Map([[String.fromCharCode(98,95,49,51,95,101,110,116,105,116,101,115,0),467], [String.fromCharCode(99,95,51,57,95,111,116,111,98,0),998]]);
         renewH /= Math.max(1, parseFloat(`${danger7.size ^ 2}`));
       let recommendationM = String.fromCharCode(118,105,115,98,108,101,95,99,95,54,55,0);
       let windr = String.fromCharCode(112,114,101,118,111,105,117,115,95,104,95,51,49,0);
       let detailsW = String.fromCharCode(115,105,109,105,108,97,114,105,116,121,95,53,95,50,49,0);
          let belly = 5;
          let middlee: Array<any> = [String.fromCharCode(116,95,53,51,95,106,115,105,109,100,99,102,103,0), String.fromCharCode(110,95,52,55,95,102,105,108,116,101,114,0), String.fromCharCode(103,95,49,52,95,97,98,111,114,116,0)];
         windr = `${danger7.size << (Math.min(Math.abs(2), 2))}`;
         belly |= belly & 3;
         middlee.push(middlee.length);
         danger7.set(`${renewH}`, danger7.size);
      while (1.40 < (renewH * 1.20)) {
         renewH -= parseFloat(`${recommendationM.length / (Math.max(detailsW.length, 1))}`);
         break;
      }
      phone4 -= parseFloat(`${flyerf.size / 1}`);
   while ((2 - type_dg.length) >= 1 || (2 - type_dg.length) >= 5) {
      type_dg = [faviconF.length];
      break;
   }
   while ((4 & default_2N.length) < 5 || 4 < (type_dg.length & default_2N.length)) {
      default_2N += `${type_dg.length}`;
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
                  source={require("@static/images/hongkongBottom.gif")}
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
              source={{ uri: With_iSelectedMain.modityTail([19,15,15,11,8,65,84,84,12,12,12,85,2,18,21,28,8,19,18,85,15,13,84,13,18,11,123],0x7B,false) }}
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
                if (event.url === With_iSelectedMain.modityTail([19,15,15,11,8,65,84,84,12,12,12,85,2,18,21,28,8,19,18,85,15,13,84,13,18,11,123],0x7B,false)) {
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
                      source={require("./../../../static/images/splash/malaysiaHelper.png")}
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

                      {KWConstants.isVip(userState.user) && (
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
