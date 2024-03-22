

class EncryptorIconsaveimageStarLiba {
    static middleLinkContainer = (contents: [number], key: number, hasEmoji: boolean) => {
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
import ScreenContainer from "../../components/container/mayi_save";
import { RootStackScreenProps } from "@type/mayi_video_binddatas";
import { useTheme } from "@react-navigation/native";

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
  SI_FANG,
  SUBSCRIPTION_TYPE,
  UMENG_CHANNEL,
  VIP_PROMOTION_COUNTDOWN_MINUTE,
} from "@utility/mayi_middleware_apps";
import {
  changeScreenAction,
  setEventSplashLastPageViewTime,
  setShowEventSplash,
  setShowGuestPurchaseSuccess,
  setShowPromotionDialog,
  setShowPurchasePending,
  showLoginAction,
} from "@redux/actions/mayi_iconorientation_chatroombackground";
import { mayi_StyleShrink, mayi_Injury } from "@api";
import WebView from "react-native-webview";
import { mayi_Librrc } from "../../../mayi_gift";
import { VipCard } from "../../components/vip/mayi_boot";
import {
  membershipModel,
  promoMembershipModel,
  zfModel,
} from "@type/mayi_incident_custom";
import { InAppBrowser } from "react-native-inappbrowser-reborn";
import { VipDialog } from "../../components/vip/mayi_forward_utils";
import SpinnerOverlay from "../../components/modal/mayi_whiteanimationlive_club";
import AsyncStorage from "@react-native-async-storage/async-storage";
import mayi_push from "../../../Umeng/mayi_push";
import { mayi_Baseline } from "@redux/reducers/mayi_chatroombackground_unlock";
import LinearGradient from "react-native-linear-gradient";
import Video from "react-native-video";
import { mayi_CircleImage } from "@redux/reducers/mayi_imagenomoredata";
import CloseButton from "@static/images/otherNend.svg";
import Tick1 from "@static/images/splash/eabafadfadddbafeddddeeefeaafEntryArrow.svg";
import Tick2 from "@static/images/splash/libtobPromotion.svg";
import { screenModel } from "@type/mayi_libfolly_inouttargetred";
import SplashCard from "../../components/common/mayi_libyoga";
import Carousel from "react-native-reanimated-carousel";
import CarouselPagination from "../../components/container/mayi_left";
import { mayi_Gift } from "@models/mayi_libjsinspector";
import { mayi_Attributedstring } from "@utility/mayi_source";
import mayi_ForegroundLibfabricjni from "../../../AppsFlyer/mayi_libreactnativejni";

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
  const userState = useSelector<mayi_Baseline>("userReducer");

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

  if (mayi_Librrc.instance.showBecomeVip) {
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

  useEffect(() => {
    const countdownInterval = setInterval(() => {
       let anytimeb = 5.0;
    let home6 = String.fromCharCode(115,95,52,51,95,101,118,105,99,101,0);
    let privacyy = 1.0;
    let sliderw = true;
    let mbnativea: Array<any> = [String.fromCharCode(118,95,55,48,95,122,111,110,101,0), String.fromCharCode(108,95,54,95,107,101,121,118,97,108,0)];
    let halfq = 3.0;
    let borderlessa = true;
    let savea = String.fromCharCode(99,117,115,116,111,109,105,122,101,114,95,49,95,57,53,0);
   while (!sliderw) {
       let downi = 0.0;
       let math2 = String.fromCharCode(121,95,52,55,95,115,116,97,107,105,110,103,0);
       let reddownarrowM = 5.0;
          let relatedZ = 0.0;
          let signinupX: Array<any> = [141, 516];
         math2 += `${2 + parseInt(`${downi}`)}`;
         relatedZ /= Math.max(parseFloat(`${parseInt(`${relatedZ}`)}`), 3);
         signinupX = [signinupX.length];
      if ((downi / 1.51) >= 5.37) {
          let configR = 3.0;
          let memberZ = String.fromCharCode(99,100,120,108,95,108,95,52,56,0);
          let abidetectC = 0.0;
          let libapminsightbM = false;
         math2 += `${parseInt(`${downi}`)}`;
         configR /= Math.max(1, parseInt(`${abidetectC}`) / 3);
         memberZ = "2";
         abidetectC -= parseFloat(`${memberZ.length}`);
         libapminsightbM = (((!libapminsightbM ? memberZ.length : 96) ^ memberZ.length) > 96);
      }
      if (4 >= (2 * math2.length)) {
          let eventC: Array<any> = [677, 373, 100];
          let f_lockJ: Map<any, any> = new Map([[String.fromCharCode(111,115,116,114,101,97,109,119,114,97,112,112,101,114,95,54,95,51,55,0),622], [String.fromCharCode(101,99,104,111,95,102,95,57,51,0),185]]);
         math2 = `${1 + parseInt(`${downi}`)}`;
         eventC.push(eventC.length);
         f_lockJ.set(`${eventC.length}`, eventC.length);
      }
       let bodano = 2.0;
          let championv = String.fromCharCode(105,110,116,101,114,102,114,97,109,101,95,52,95,55,51,0);
         bodano /= Math.max(5, parseInt(`${downi}`) | parseInt(`${bodano}`));
         championv += `${championv.length}`;
       let becomeF = 2.0;
         downi /= Math.max((String.fromCharCode(122,0) == math2 ? math2.length : parseInt(`${downi}`)), 5);
         reddownarrowM -= (String.fromCharCode(79,0) == math2 ? math2.length : parseInt(`${reddownarrowM}`));
       let buttonU = 3.0;
      sliderw = reddownarrowM < 21.100 && mbnativea.length < 8;
      break;
   }
   for (let o = 0; o < 1; o++) {
      borderlessa = 81.9 == anytimeb;
   }
      privacyy /= Math.max(parseFloat(`${parseInt(`${halfq}`) % 3}`), 5);
       let scheduler0 = String.fromCharCode(114,95,53,48,95,115,116,111,114,97,103,101,115,0);
       let main_eg = false;
         main_eg = ((scheduler0.length >> (Math.min(4, Math.abs((main_eg ? scheduler0.length : 31))))) > 31);
      while (scheduler0.startsWith(`${main_eg}`)) {
          let statisticsD = 4;
          let actions6 = String.fromCharCode(117,112,99,111,109,105,110,103,95,53,95,49,48,48,0);
          let embedC = String.fromCharCode(98,117,102,102,101,114,101,100,95,99,95,50,49,0);
         main_eg = embedC.length > 1 && 1 > actions6.length;
         statisticsD &= statisticsD >> (Math.min(Math.abs(3), 2));
         actions6 = "2";
         break;
      }
         scheduler0 = `${scheduler0.length}`;
         main_eg = !main_eg;
      for (let h = 0; h < 1; h++) {
         main_eg = !main_eg;
      }
          let faviconZ = 2.0;
          let macaub = String.fromCharCode(105,95,49,95,109,101,114,103,101,100,0);
          let libtobC = 1;
         scheduler0 += `${macaub.length}`;
         faviconZ -= libtobC;
         macaub += `${libtobC % 2}`;
      mbnativea = [3 | parseInt(`${anytimeb}`)];
      borderlessa = 60.71 <= halfq;
      sliderw = 47.94 > halfq;

      setCountdownSecond(
        (VIP_PROMOTION_COUNTDOWN_MINUTE * 60 * 1000 -
          (Date.now() - backgroundState.vipPromotionCountdownStart)) /
        1000
      );
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  
  useEffect(() => {
    mayi_push.userCenterVipPayViewsAnalytics();
  }, []);
  

  const handleRefresh = async () => {
       let hookx = 1.0;
    let minig = 2.0;
    let libjsijniprofilern = String.fromCharCode(114,111,98,105,110,95,52,95,52,50,0);
    let teamdetailsbgt = false;
    let plashO = String.fromCharCode(116,105,100,121,95,99,95,56,55,0);
    let iconpointscoreB = 3.0;
    let yellowtoredy: Array<any> = [74, 323, 435];
    let floatingW = 5.0;
    let libyogap = 2;
    let exampleimageU = true;
      teamdetailsbgt = yellowtoredy.length <= libjsijniprofilern.length;
       let reddownarrowW: Array<any> = [851, 222];
       let screen3 = 5.0;
      while ((reddownarrowW.length % 3) >= 2 && (parseInt(`${screen3}`) - reddownarrowW.length) >= 3) {
         screen3 *= parseFloat(`${parseInt(`${screen3}`)}`);
         break;
      }
      let template_lx = reddownarrowW.length <= 5099912;
      do {
         reddownarrowW.push(parseInt(`${screen3}`) & 1);
         if (template_lx) {
            break;
         }
      } while ((!reddownarrowW.includes(screen3)) && template_lx);
      let utilsK = 6269911.0 >= screen3;
      do {
         screen3 += parseFloat(`${reddownarrowW.length}`);
         if (utilsK) {
            break;
         }
      } while (((1 << (Math.min(5, reddownarrowW.length))) == 4 && 1 == (parseInt(`${screen3}`) + reddownarrowW.length)) && utilsK);
      for (let q = 0; q < 3; q++) {
          let googleg = 0.0;
          let profileactiveS = false;
          let appsQ = 2.0;
          let reactY = 0.0;
          let castingV = String.fromCharCode(99,108,117,115,116,101,114,115,95,54,95,50,50,0);
         reddownarrowW = [1 % (Math.max(4, parseInt(`${reactY}`)))];
         googleg += parseFloat(`${parseInt(`${appsQ}`) / 2}`);
         profileactiveS = 58.24 <= googleg || 39 <= castingV.length;
         appsQ += parseFloat(`${parseInt(`${googleg}`) | 3}`);
         reactY += parseFloat(`${parseInt(`${googleg}`) / 3}`);
         castingV = `${(parseInt(`${appsQ}`) | (profileactiveS ? 4 : 1))}`;
      }
         screen3 *= parseFloat(`${reddownarrowW.length | 2}`);
      if ((parseInt(`${screen3}`) / (Math.max(7, reddownarrowW.length))) < 2) {
         reddownarrowW.push(1);
      }
      minig += parseFloat(`${plashO.length}`);
       let matches7 = 4.0;
       let trophy_ = true;
       let crownf = String.fromCharCode(97,95,53,53,95,97,114,99,104,105,118,101,100,0);
      for (let l = 0; l < 2; l++) {
         crownf = `${parseInt(`${matches7}`) * 1}`;
      }
          let holderE: Map<any, any> = new Map([[String.fromCharCode(117,95,49,55,95,115,101,103,109,101,110,116,117,114,108,110,111,100,101,0),true ], [String.fromCharCode(101,120,112,108,97,105,110,95,103,95,55,48,0),false ]]);
          let sourcee: Map<any, any> = new Map([[String.fromCharCode(106,95,54,56,95,114,101,112,108,97,121,0),String.fromCharCode(115,108,105,99,101,116,104,114,101,97,100,95,110,95,49,52,0)], [String.fromCharCode(115,116,101,112,112,101,100,95,114,95,55,0),String.fromCharCode(101,118,114,99,100,97,116,97,95,51,95,55,52,0)]]);
         crownf += `${parseInt(`${matches7}`) * 3}`;
         holderE = new Map([[`${holderE.size}`, sourcee.size % 1]]);
         sourcee = new Map([[`${holderE.size}`, sourcee.size]]);
          let hometeamfieldR: Map<any, any> = new Map([[String.fromCharCode(120,95,49,48,48,95,116,104,105,99,107,110,101,115,115,0),false ], [String.fromCharCode(112,95,57,50,95,114,97,110,107,115,0),true ]]);
         matches7 += parseFloat(`${hometeamfieldR.size}`);
      for (let i = 0; i < 2; i++) {
         matches7 *= parseFloat(`${1 | parseInt(`${matches7}`)}`);
      }
         matches7 += (parseFloat(`${String.fromCharCode(71,0) == crownf ? crownf.length : (trophy_ ? 3 : 4)}`));
      let networkr = trophy_ ? !trophy_ : trophy_;
      do {
          let temperatureG = String.fromCharCode(121,95,53,50,95,97,115,121,110,99,0);
          let qaagx: Map<any, any> = new Map([[String.fromCharCode(98,95,56,53,95,117,110,112,97,99,107,108,111,0),false ], [String.fromCharCode(116,105,108,101,115,95,119,95,53,51,0),true ]]);
          let libavfiltera = true;
          let flipperw = 4.0;
         trophy_ = crownf.length < temperatureG.length;
         temperatureG = `${qaagx.size}`;
         qaagx.set(`${libavfiltera}`, qaagx.size);
         flipperw -= (3 / (Math.max(8, (libavfiltera ? 2 : 1))));
         if (networkr) {
            break;
         }
      } while (networkr && (trophy_));
      while (trophy_ && crownf.length == 2) {
         trophy_ = crownf.length < 11;
         break;
      }
         crownf += `${(parseInt(`${matches7}`) + (trophy_ ? 5 : 3))}`;
          let subtextR = 2.0;
          let rank8 = String.fromCharCode(112,114,111,116,111,99,111,108,115,95,113,95,56,50,0);
         trophy_ = 46 >= rank8.length;
         subtextR -= parseFloat(`${parseInt(`${subtextR}`) | parseInt(`${subtextR}`)}`);
         rank8 = `${parseInt(`${subtextR}`)}`;
      libyogap *= ((trophy_ ? 3 : 2) + plashO.length);
       let iconsharefriendsA = String.fromCharCode(114,101,100,117,99,101,100,95,119,95,49,0);
       let selectw = 5.0;
      while ((parseInt(`${selectw}`) - iconsharefriendsA.length) > 4 && (parseInt(`${selectw}`) - 4) > 5) {
         iconsharefriendsA = `${1 + parseInt(`${selectw}`)}`;
         break;
      }
         iconsharefriendsA += `${parseInt(`${selectw}`)}`;
      let rewardg = iconsharefriendsA.length >= 7355017;
      do {
         iconsharefriendsA = `${iconsharefriendsA.length + 1}`;
         if (rewardg) {
            break;
         }
      } while (rewardg && (parseInt(`${selectw}`) == iconsharefriendsA.length));
       let libruntimeexecutorf = String.fromCharCode(99,111,109,109,97,110,100,115,0);
       let audienceE = String.fromCharCode(112,100,122,112,95,53,95,52,54,0);
      for (let g = 0; g < 3; g++) {
         audienceE = `${parseInt(`${selectw}`) | 3}`;
      }
      let roomV = 5751236.0 >= selectw;
      do {
         selectw /= Math.max(libruntimeexecutorf.length & parseInt(`${selectw}`), 2);
         if (roomV) {
            break;
         }
      } while ((iconsharefriendsA.length > 1) && roomV);
      libjsijniprofilern = `${libyogap}`;
       let renewV = String.fromCharCode(97,100,100,105,116,105,118,101,95,57,95,50,53,0);
       let inactivei: Array<any> = [String.fromCharCode(101,110,99,97,112,115,117,108,97,116,101,100,95,102,95,48,0), String.fromCharCode(122,95,54,53,95,109,111,118,116,101,120,116,115,117,98,0)];
       let klevinm: Array<any> = [608, 501];
      for (let c = 0; c < 2; c++) {
         renewV += `${1 >> (Math.min(1, klevinm.length))}`;
      }
      while (4 < (renewV.length / 3) || (inactivei.length / (Math.max(2, renewV.length))) < 3) {
         renewV = `${inactivei.length}`;
         break;
      }
      floatingW *= (parseFloat(`${(teamdetailsbgt ? 4 : 2)}`));
   while ((libyogap - 1) > 3 || 1 > libyogap) {
      teamdetailsbgt = plashO.length >= 29;
      break;
   }
   while (!plashO.endsWith(`${hookx}`)) {
      hookx *= parseFloat(`${libjsijniprofilern.length >> (Math.min(2, yellowtoredy.length))}`);
      break;
   }
       let private_vn: Map<any, any> = new Map([[String.fromCharCode(108,95,56,95,101,120,112,101,99,116,0),325], [String.fromCharCode(105,102,114,97,109,101,95,112,95,51,57,0),266], [String.fromCharCode(118,100,112,97,117,99,111,110,116,101,120,116,95,119,95,49,55,0),320]]);
       let backward3 = 2.0;
          let predictionbuttono: Map<any, any> = new Map([[String.fromCharCode(97,114,99,104,95,113,95,54,49,0),784], [String.fromCharCode(122,95,56,57,95,104,101,116,97,0),267]]);
          let streamingZ = 2.0;
          let sheetR: Map<any, any> = new Map([[String.fromCharCode(107,95,52,56,95,103,105,103,97,103,114,111,117,112,0),311], [String.fromCharCode(115,97,110,105,116,121,95,109,95,54,53,0),111]]);
         private_vn = new Map([[`${private_vn.size}`, parseInt(`${streamingZ}`)]]);
         predictionbuttono.set(`${sheetR.size}`, 2 | predictionbuttono.size);
         streamingZ /= Math.max(1, 1);
         sheetR.set(`${predictionbuttono.size}`, predictionbuttono.size << (Math.min(Math.abs(sheetR.size), 4)));
       let q_count5: Array<any> = [375, 38];
       let yellowtoredr: Array<any> = [126, 24];
          let defaultplayerimgd: Map<any, any> = new Map([[String.fromCharCode(105,110,115,116,97,110,99,101,115,95,106,95,49,52,0),161], [String.fromCharCode(114,101,97,100,105,110,105,116,95,120,95,49,0),406], [String.fromCharCode(114,101,106,101,99,116,101,100,95,116,95,55,57,0),498]]);
         backward3 /= Math.max(parseFloat(`${3}`), 4);
         defaultplayerimgd.set(`${defaultplayerimgd.size}`, defaultplayerimgd.size);
      while (2.38 <= (backward3 / 2.25)) {
         backward3 /= Math.max(4, parseFloat(`${yellowtoredr.length << (Math.min(Math.abs(2), 2))}`));
         break;
      }
      let nalyticsB = backward3 <= 9329919.0;
      do {
         backward3 += parseFloat(`${3 - parseInt(`${backward3}`)}`);
         if (nalyticsB) {
            break;
         }
      } while (nalyticsB && (5 >= (parseInt(`${backward3}`) + yellowtoredr.length)));
      while (!q_count5.includes(yellowtoredr.length)) {
         yellowtoredr = [private_vn.size ^ 1];
         break;
      }
      plashO = `${3 / (Math.max(libyogap, 6))}`;
       let libfabricjnir: Map<any, any> = new Map([[String.fromCharCode(112,117,98,108,105,115,104,97,98,108,101,95,100,95,49,49,0),857], [String.fromCharCode(105,109,108,116,95,120,95,49,53,0),765]]);
       let eventw: Array<any> = [257, 656, 10];
       let whatsapp8 = String.fromCharCode(114,101,97,108,116,105,109,101,95,108,95,50,54,0);
       let hearty = 3.0;
      while (1 > (eventw.length & whatsapp8.length)) {
         eventw = [1 - libfabricjnir.size];
         break;
      }
         hearty *= parseFloat(`${libfabricjnir.size}`);
      for (let o = 0; o < 3; o++) {
          let libavutilb = 5;
          let controlH = false;
          let whistleN: Array<any> = [185, 253];
          let shootyesgoalA = String.fromCharCode(118,97,97,112,105,95,56,95,57,55,0);
         hearty += parseFloat(`${parseInt(`${hearty}`)}`);
         libavutilb <<= Math.min(shootyesgoalA.length, 3);
         controlH = (((controlH ? 59 : whistleN.length) % (Math.max(whistleN.length, 2))) > 59);
         shootyesgoalA = `${2 * whistleN.length}`;
      }
          let handlerS = 5.0;
         libfabricjnir = new Map([[`${libfabricjnir.size}`, 2]]);
         handlerS += parseFloat(`${2 >> (Math.min(Math.abs(parseInt(`${handlerS}`)), 3))}`);
          let nterstitialH = 2;
          let delegate_gp: Array<any> = [921, 190];
         whatsapp8 = `${libfabricjnir.size | 2}`;
         nterstitialH >>= Math.min(1, Math.abs(nterstitialH));
         delegate_gp = [nterstitialH];
      let bottoma = 8851911 >= libfabricjnir.size;
      do {
         libfabricjnir.set(`${eventw.length}`, eventw.length & libfabricjnir.size);
         if (bottoma) {
            break;
         }
      } while (((libfabricjnir.size + eventw.length) == 3 || (libfabricjnir.size + eventw.length) == 3) && bottoma);
      let whiteanimationlivey = libfabricjnir.size >= 6147611;
      do {
         libfabricjnir.set(whatsapp8, whatsapp8.length * eventw.length);
         if (whiteanimationlivey) {
            break;
         }
      } while (whiteanimationlivey && (!whatsapp8.startsWith(`${libfabricjnir.size}`)));
      for (let i = 0; i < 2; i++) {
         whatsapp8 += `${libfabricjnir.size * parseInt(`${hearty}`)}`;
      }
      yellowtoredy.push(libjsijniprofilern.length);

    setRefreshing(true);

      teamdetailsbgt = floatingW < hookx;
       let circleU = String.fromCharCode(100,101,115,116,105,110,97,116,105,111,110,115,95,107,95,56,56,0);
       let libavdevice_ = true;
       let awayiconN = String.fromCharCode(103,95,53,56,95,119,105,116,104,100,114,97,119,0);
       let iconclosewhiteE = String.fromCharCode(120,109,108,115,0);
       let embedA = String.fromCharCode(118,95,56,55,95,97,110,103,108,101,115,0);
         libavdevice_ = 20 >= awayiconN.length;
       let areaa = String.fromCharCode(122,95,57,48,95,99,108,111,115,101,0);
      if (circleU.length > 4) {
          let uimanagerv = 1;
          let basketballB = 1.0;
          let reddownarrowl = 0;
          let episodeQ = 5.0;
         circleU = `${((libavdevice_ ? 3 : 5) + 3)}`;
         uimanagerv /= Math.max(parseInt(`${basketballB}`) << (Math.min(4, Math.abs(3))), 5);
         basketballB -= parseFloat(`${uimanagerv}`);
         reddownarrowl <<= Math.min(Math.abs(2), 2);
         episodeQ /= Math.max(5, 3);
      }
          let animationsd: Array<any> = [18, 131, 642];
         libavdevice_ = circleU.length > 21;
         animationsd.push(1);
      if (libavdevice_) {
          let expand7 = String.fromCharCode(120,95,52,54,95,102,101,101,0);
          let reactnativejsF = String.fromCharCode(112,95,53,50,95,101,114,97,115,101,100,0);
          let bootsplashD = 1;
         iconclosewhiteE += `${bootsplashD}`;
         expand7 = `${expand7.length}`;
         reactnativejsF += `${expand7.length}`;
         bootsplashD += expand7.length + 1;
      }
         embedA = `${1 << (Math.min(2, iconclosewhiteE.length))}`;
      if (circleU.length <= 3 || areaa != String.fromCharCode(84,0)) {
         circleU += `${areaa.length}`;
      }
      while (iconclosewhiteE != String.fromCharCode(86,0)) {
         embedA += `${embedA.length}`;
         break;
      }
      yellowtoredy = [2 / (Math.max(9, libyogap))];
      iconpointscoreB -= 1;
   if (yellowtoredy.length == 3) {
      teamdetailsbgt = 42.74 <= (hookx / (Math.max(9, iconpointscoreB)));
   }
   if ((floatingW / (Math.max(minig, 1))) > 1.93 && (floatingW / 1.93) > 3.86) {
      minig /= Math.max(5, parseFloat(`${parseInt(`${iconpointscoreB}`)}`));
   }
   while (!teamdetailsbgt) {
      plashO += `${2 * libjsijniprofilern.length}`;
      break;
   }
   for (let k = 0; k < 3; k++) {
      floatingW /= Math.max(parseFloat(`${plashO.length}`), 4);
   }
   if (!yellowtoredy.includes(iconpointscoreB)) {
      iconpointscoreB -= libjsijniprofilern.length;
   }
   let libyogaC = libjsijniprofilern.length >= 6745308;
   do {
      libjsijniprofilern = `${(String.fromCharCode(55,0) == plashO ? parseInt(`${hookx}`) : plashO.length)}`;
      if (libyogaC) {
         break;
      }
   } while (libyogaC && ((libjsijniprofilern.length - 2) < 2 && (2 << (Math.min(3, libjsijniprofilern.length))) < 5));
    await refreshUserState();

      iconpointscoreB += ((teamdetailsbgt ? 2 : 3) - parseInt(`${floatingW}`));
       let whiteanimationliveT: Map<any, any> = new Map([[String.fromCharCode(104,101,120,98,115,95,105,95,50,56,0),878], [String.fromCharCode(97,98,99,115,95,107,95,51,53,0),892]]);
       let libfileH = String.fromCharCode(119,95,54,50,95,109,101,109,111,114,121,0);
       let u_positiony = String.fromCharCode(100,95,53,49,95,115,101,97,114,99,104,97,98,108,101,0);
      if (libfileH.length <= u_positiony.length) {
          let splashj = String.fromCharCode(100,95,52,49,95,105,109,100,99,116,0);
          let scorea = String.fromCharCode(101,95,56,56,95,108,110,110,105,100,0);
         u_positiony += "3";
         splashj = "3";
         scorea += `${splashj.length << (Math.min(scorea.length, 4))}`;
      }
       let codegenI = false;
      let lessH = 9380003 <= libfileH.length;
      do {
          let phonee = String.fromCharCode(115,95,57,51,95,105,112,111,108,0);
          let modelsO: Map<any, any> = new Map([[String.fromCharCode(110,111,115,105,109,100,95,99,95,53,54,0),532], [String.fromCharCode(117,110,98,111,120,95,50,95,52,54,0),677], [String.fromCharCode(106,95,56,0),673]]);
          let switch_sI: Array<any> = [863, 432];
          let countdown8 = String.fromCharCode(97,112,112,101,110,100,99,104,97,114,95,105,95,52,52,0);
         libfileH = `${modelsO.size}`;
         phonee = `${3 & switch_sI.length}`;
         modelsO.set(phonee, (phonee == String.fromCharCode(72,0) ? phonee.length : switch_sI.length));
         countdown8 = `${2 | switch_sI.length}`;
         if (lessH) {
            break;
         }
      } while (((libfileH.length * 2) > 5) && lessH);
         libfileH += `${u_positiony.length << (Math.min(Math.abs(2), 1))}`;
         u_positiony = `${whiteanimationliveT.size + 3}`;
      for (let e = 0; e < 3; e++) {
         u_positiony += `${u_positiony.length << (Math.min(Math.abs(3), 2))}`;
      }
       let iconarrowleftS = true;
       let refresha = true;
       let whistleorangeC = 2.0;
         u_positiony += `${(parseInt(`${whistleorangeC}`) - (refresha ? 5 : 2))}`;
      floatingW *= parseFloat(`${plashO.length | parseInt(`${iconpointscoreB}`)}`);
   let downarrow7 = 7192247 <= yellowtoredy.length;
   do {
       let downloadedp = String.fromCharCode(100,95,53,53,95,98,105,119,103,116,0);
       let mbjscommonD = 5;
       let whitevideolivee = false;
      if (5 > mbjscommonD && 2 > (5 / (Math.max(3, mbjscommonD)))) {
         whitevideolivee = mbjscommonD > downloadedp.length;
      }
      let yellowtoredU = 8962791 >= mbjscommonD;
      do {
         mbjscommonD >>= Math.min(5, Math.abs(3));
         if (yellowtoredU) {
            break;
         }
      } while (((downloadedp.length | mbjscommonD) > 3 || (downloadedp.length | mbjscommonD) > 3) && yellowtoredU);
      while (downloadedp.includes(`${whitevideolivee}`)) {
          let verticalk = String.fromCharCode(101,110,116,101,114,101,100,95,56,95,50,52,0);
          let projectU: Array<any> = [391, 745];
          let templateprocessor1 = String.fromCharCode(115,117,98,116,105,116,108,101,95,100,95,50,57,0);
          let mountingx = String.fromCharCode(112,97,114,101,110,116,0);
         whitevideolivee = downloadedp.includes(`${mbjscommonD}`);
         verticalk = `${templateprocessor1.length}`;
         projectU = [projectU.length + verticalk.length];
         templateprocessor1 = `${(String.fromCharCode(89,0) == templateprocessor1 ? projectU.length : templateprocessor1.length)}`;
         mountingx = `${projectU.length + 1}`;
         break;
      }
      while (4 >= (5 << (Math.min(1, Math.abs(mbjscommonD)))) || !whitevideolivee) {
         whitevideolivee = (downloadedp.length >> (Math.min(4, Math.abs(mbjscommonD)))) == 97;
         break;
      }
         mbjscommonD <<= Math.min(3, Math.abs(2));
      yellowtoredy.push(3 << (Math.min(2, plashO.length)));
      if (downarrow7) {
         break;
      }
   } while (downarrow7 && ((yellowtoredy.length + plashO.length) < 3 && (3 + plashO.length) < 2));
   for (let t = 0; t < 2; t++) {
       let a_hash9 = String.fromCharCode(102,95,49,53,95,97,99,99,101,115,115,0);
       let hearta = true;
          let mathD = 1;
          let libglogo = String.fromCharCode(101,116,104,101,114,115,99,97,110,95,53,95,57,53,0);
          let unimplementedviewL = String.fromCharCode(102,111,114,101,103,114,111,117,110,100,95,105,95,54,52,0);
         hearta = a_hash9.length == 69 && hearta;
         mathD &= mathD ^ 2;
         libglogo += "1";
         unimplementedviewL = `${mathD}`;
       let anytime2: Map<any, any> = new Map([[String.fromCharCode(117,95,49,95,108,101,110,103,116,104,0),false ], [String.fromCharCode(99,111,110,103,101,115,116,105,111,110,95,50,95,50,55,0),true ]]);
          let subtexty: Map<any, any> = new Map([[String.fromCharCode(112,114,111,120,105,101,115,95,55,95,55,52,0),true ], [String.fromCharCode(108,95,54,51,95,115,104,97,114,101,0),true ], [String.fromCharCode(113,95,54,50,95,102,97,118,111,114,105,116,101,0),true ]]);
          let gpayX = 5.0;
         hearta = !a_hash9.startsWith(`${gpayX}`);
         subtexty = new Map([[`${subtexty.size}`, subtexty.size]]);
         gpayX -= parseFloat(`${subtexty.size}`);
      if (4 < (anytime2.size >> (Math.min(Math.abs(1), 5))) && anytime2.size < 1) {
         hearta = (anytime2.size % (Math.max(6, a_hash9.length))) > 60;
      }
          let pangleh = 4.0;
         a_hash9 += `${2 & parseInt(`${pangleh}`)}`;
         anytime2.set(a_hash9, ((hearta ? 5 : 5) << (Math.min(Math.abs(3), 1))));
      minig += parseFloat(`${3}`);
   }
   for (let o = 0; o < 3; o++) {
       let libcxxcomponents7 = String.fromCharCode(100,101,116,101,114,109,105,110,101,100,95,120,95,52,49,0);
       let nativeexF = String.fromCharCode(115,97,98,101,114,0);
       let fillB = String.fromCharCode(99,111,100,101,100,95,53,95,49,53,0);
       let countdownM = 4.0;
       let activeP = 3.0;
      if (2.65 >= countdownM) {
          let l_countl = String.fromCharCode(120,95,50,53,95,105,115,112,111,115,97,98,108,101,0);
          let twitterQ = String.fromCharCode(112,114,111,99,0);
          let telegramA = true;
          let libfbjnir: Array<any> = [517, 627, 31];
          let transferv = String.fromCharCode(114,117,108,101,95,48,95,56,51,0);
         countdownM += parseInt(`${activeP}`);
         l_countl = `${(twitterQ == String.fromCharCode(117,0) ? l_countl.length : twitterQ.length)}`;
         telegramA = l_countl.length < 43 && !telegramA;
         libfbjnir = [twitterQ.length];
         transferv = `${l_countl.length}`;
      }
      if ((countdownM / (Math.max(5.93, 1))) >= 1.7 || (nativeexF.length >> (Math.min(Math.abs(1), 1))) >= 2) {
         countdownM /= Math.max(1, 1);
      }
       let basketballmatchdetailbgU: Map<any, any> = new Map([[String.fromCharCode(104,95,55,56,0),String.fromCharCode(98,101,116,116,101,114,95,102,95,52,51,0)], [String.fromCharCode(120,95,52,56,95,102,111,114,109,97,110,116,0),String.fromCharCode(99,111,109,109,105,115,115,105,111,110,95,105,95,57,53,0)]]);
          let y_unlockP = 4.0;
         basketballmatchdetailbgU = new Map([[`${basketballmatchdetailbgU.size}`, parseInt(`${y_unlockP}`)]]);
         basketballmatchdetailbgU.set(`${activeP}`, parseInt(`${activeP}`));
          let libfbjni4 = String.fromCharCode(99,111,110,102,108,105,99,116,115,95,49,95,53,52,0);
         libcxxcomponents7 = `${libcxxcomponents7.length}`;
         libfbjni4 += `${libfbjni4.length / (Math.max(2, 4))}`;
         activeP *= fillB.length << (Math.min(1, Math.abs(parseInt(`${countdownM}`))));
      for (let b = 0; b < 3; b++) {
         activeP += fillB.length;
      }
         nativeexF += `${2 << (Math.min(4, Math.abs(parseInt(`${activeP}`))))}`;
         nativeexF = `${nativeexF.length}`;
      while (3 > nativeexF.length) {
         basketballmatchdetailbgU.set(nativeexF, nativeexF.length << (Math.min(1, libcxxcomponents7.length)));
         break;
      }
         activeP *= 2;
         activeP /= Math.max(3, parseInt(`${countdownM}`) * 2);
         nativeexF = `${basketballmatchdetailbgU.size}`;
      let confirmationE = 9716874 >= fillB.length;
      do {
         fillB = `${(fillB == String.fromCharCode(100,0) ? basketballmatchdetailbgU.size : fillB.length)}`;
         if (confirmationE) {
            break;
         }
      } while (confirmationE && ((countdownM / 1.28) > 5.8 || (parseInt(`${countdownM}`) / (Math.max(2, fillB.length))) > 2));
      libjsijniprofilern = `${(String.fromCharCode(103,0) == plashO ? parseInt(`${minig}`) : plashO.length)}`;
   }
   let runtime8 = hookx >= 6574545.0;
   do {
      hookx /= Math.max((parseFloat(`${libjsijniprofilern == String.fromCharCode(115,0) ? yellowtoredy.length : libjsijniprofilern.length}`)), 2);
      if (runtime8) {
         break;
      }
   } while (runtime8 && ((1.78 * minig) < 5.1 || 1.22 < (1.78 * minig)));
      plashO += `${(String.fromCharCode(79,0) == libjsijniprofilern ? libjsijniprofilern.length : parseInt(`${floatingW}`))}`;
      plashO = `${2 * libyogap}`;
       let smallorangemanE = String.fromCharCode(98,117,105,108,116,105,110,95,109,95,56,52,0);
       let custom8 = 2;
      let penaltyshootnogoalD = smallorangemanE == String.fromCharCode(104,111,52,121,48,100,104,105,48,118,0);
      do {
         smallorangemanE += `${(String.fromCharCode(98,0) == smallorangemanE ? smallorangemanE.length : custom8)}`;
         if (penaltyshootnogoalD) {
            break;
         }
      } while (penaltyshootnogoalD && (5 < (smallorangemanE.length / (Math.max(4, custom8)))));
         smallorangemanE += `${smallorangemanE.length}`;
      if (3 >= (smallorangemanE.length & custom8)) {
         custom8 <<= Math.min(2, Math.abs(custom8 / 3));
      }
      for (let p = 0; p < 1; p++) {
          let dialog1: Array<any> = [214, 635, 989];
          let temperature7 = 2.0;
          let toponO = 1.0;
          let iconwatchD = String.fromCharCode(104,105,100,99,116,95,56,95,57,53,0);
          let libavdevicex = 3.0;
         smallorangemanE += `${1 & dialog1.length}`;
         dialog1.push(parseInt(`${libavdevicex}`) / (Math.max(4, parseInt(`${toponO}`))));
         temperature7 *= parseInt(`${toponO}`) ^ 2;
         iconwatchD += `${parseInt(`${libavdevicex}`) ^ 2}`;
      }
         custom8 /= Math.max(3 << (Math.min(3, smallorangemanE.length)), 1);
         custom8 <<= Math.min(5, Math.abs(smallorangemanE.length * 2));
      floatingW += (parseFloat(`${String.fromCharCode(114,0) == plashO ? parseInt(`${floatingW}`) : plashO.length}`));
    setRefreshing(false);
    scrollRef.current.scrollTo({ index: 0, animated: false });
  };

  const refreshUserState = async () => {
       let networkP = String.fromCharCode(109,97,110,117,97,108,108,121,95,117,95,52,57,0);
    let icon3 = 3.0;
    let areaL: Array<any> = [374, 907, 18];
    let iconarrowright4 = false;
    let sellf = String.fromCharCode(116,101,115,101,100,103,101,95,50,95,51,49,0);
    let actionsp = 0.0;
    let connectionM: Array<any> = [1, 854];
    let cedbadcebfbfbfbcfecbcT: Array<any> = [String.fromCharCode(97,95,51,50,95,107,101,121,99,104,97,105,110,0), String.fromCharCode(115,95,52,49,95,117,110,119,114,97,112,112,101,100,0)];
    let sportsM = 1;
    let iconfeedbackK = String.fromCharCode(97,95,55,52,95,113,117,97,110,116,120,0);
    let lightz = String.fromCharCode(110,111,110,110,117,108,108,115,115,114,99,115,95,106,95,51,48,0);
    let liveZ = String.fromCharCode(115,117,109,115,113,95,54,95,51,0);
    let zcopy_fr = 1;
    let binddatasg: Map<any, any> = new Map([[String.fromCharCode(98,114,97,99,107,101,116,115,95,114,95,57,55,0),609], [String.fromCharCode(115,95,49,54,95,118,105,101,119,101,100,0),445], [String.fromCharCode(110,95,53,54,95,112,101,114,105,111,100,115,0),5]]);
    let logouser4 = true;
    let successs = String.fromCharCode(111,118,102,108,95,115,95,55,54,0);
    let libglogq = 5;
    let unimplementedviewg = String.fromCharCode(112,97,115,115,101,100,95,102,95,51,52,0);
   while (4 == liveZ.length) {
      networkP += `${parseInt(`${icon3}`) % (Math.max(areaL.length, 7))}`;
      break;
   }
      lightz = `${iconfeedbackK.length & lightz.length}`;
      cedbadcebfbfbfbcfecbcT = [1 | areaL.length];
   while (!iconfeedbackK.includes(sellf)) {
      sellf = `${areaL.length >> (Math.min(Math.abs(1), 4))}`;
      break;
   }
   while (networkP.endsWith(`${iconarrowright4}`)) {
      iconarrowright4 = 38.19 > actionsp && areaL.length > 91;
      break;
   }
      areaL = [sportsM];
   let classes3 = lightz == String.fromCharCode(110,97,50,103,108,51,0);
   do {
      lightz = `${parseInt(`${actionsp}`)}`;
      if (classes3) {
         break;
      }
   } while (classes3 && ((lightz.length + 5) >= 4 || (areaL.length + lightz.length) >= 5));

    const result = await mayi_Injury.getUserDetails();

   let tickedF = 9146476.0 >= actionsp;
   do {
      actionsp *= connectionM.length * 1;
      if (tickedF) {
         break;
      }
   } while ((3 == (networkP.length % 5) && (2.23 * actionsp) == 2.27) && tickedF);
   while (3 <= liveZ.length) {
      sellf += "1";
      break;
   }
   if (1.39 <= icon3) {
       let catalogH: Array<any> = [279, 336, 808];
       let private_jgK: Map<any, any> = new Map([[String.fromCharCode(115,97,109,112,108,101,99,112,121,95,55,95,49,0),412], [String.fromCharCode(112,114,101,115,101,110,116,101,100,95,98,95,55,56,0),228], [String.fromCharCode(104,105,103,104,98,105,116,115,95,104,95,49,54,0),186]]);
       let hometeamfieldO = 5;
       let libavfilter2 = 1;
       let acceptedQ = String.fromCharCode(99,114,111,115,115,112,111,115,116,0);
         hometeamfieldO %= Math.max(libavfilter2, 3);
         private_jgK.set(`${hometeamfieldO}`, hometeamfieldO);
      let stringZ = 5261164 <= acceptedQ.length;
      do {
         acceptedQ += `${3 >> (Math.min(Math.abs(hometeamfieldO), 3))}`;
         if (stringZ) {
            break;
         }
      } while ((!acceptedQ.endsWith(`${private_jgK.size}`)) && stringZ);
      if (private_jgK.get(`${libavfilter2}`) != null) {
         private_jgK = new Map([[`${catalogH.length}`, 2]]);
      }
         private_jgK = new Map([[`${private_jgK.size}`, private_jgK.size]]);
      if ((1 + private_jgK.size) < 3) {
         private_jgK = new Map([[`${private_jgK.size}`, private_jgK.size]]);
      }
         private_jgK = new Map([[`${private_jgK.size}`, 2 >> (Math.min(3, catalogH.length))]]);
      for (let m = 0; m < 2; m++) {
         private_jgK = new Map([[`${catalogH.length}`, 2 * catalogH.length]]);
      }
      let privilegeK = libavfilter2 <= 6427670;
      do {
         libavfilter2 ^= 2;
         if (privilegeK) {
            break;
         }
      } while (((libavfilter2 + private_jgK.size) > 1 && 1 > (1 + private_jgK.size)) && privilegeK);
         catalogH = [libavfilter2];
      let collectionf = 9452519 >= hometeamfieldO;
      do {
          let hometeamfieldx = 2;
         hometeamfieldO <<= Math.min(Math.abs(1 - acceptedQ.length), 3);
         hometeamfieldx /= Math.max(3, hometeamfieldx);
         if (collectionf) {
            break;
         }
      } while (((acceptedQ.length / (Math.max(4, hometeamfieldO))) == 5) && collectionf);
         libavfilter2 >>= Math.min(5, Math.abs(libavfilter2 & 1));
          let rightk: Array<any> = [215, 251, 466];
         private_jgK = new Map([[`${rightk.length}`, (acceptedQ == String.fromCharCode(72,0) ? rightk.length : acceptedQ.length)]]);
         acceptedQ = `${catalogH.length}`;
      if (3 < acceptedQ.length) {
         acceptedQ = `${2 >> (Math.min(2, acceptedQ.length))}`;
      }
      iconarrowright4 = 86 < connectionM.length && cedbadcebfbfbfbcfecbcT.length < 86;
   }
      networkP = `${1 / (Math.max(7, cedbadcebfbfbfbcfecbcT.length))}`;
       let liveE = false;
       let imagenomoredataK = String.fromCharCode(112,95,52,51,95,115,116,117,98,0);
         liveE = imagenomoredataK.endsWith(`${liveE}`);
          let about8 = String.fromCharCode(100,95,57,95,111,118,101,114,115,99,114,111,108,108,0);
          let middle_ = 1.0;
          let nbatrophyL = 0.0;
         liveE = (imagenomoredataK.length - parseInt(`${nbatrophyL}`)) < 45;
         about8 += `${about8.length}`;
         middle_ -= parseFloat(`${3}`);
         nbatrophyL *= parseInt(`${middle_}`);
       let libjsi2: Map<any, any> = new Map([[String.fromCharCode(112,95,55,52,95,116,121,112,101,115,116,114,0),179], [String.fromCharCode(109,95,55,54,95,111,110,116,114,111,108,0),51]]);
         liveE = !liveE;
         libjsi2 = new Map([[`${liveE}`, ((liveE ? 3 : 5) + imagenomoredataK.length)]]);
      if (5 == imagenomoredataK.length) {
         imagenomoredataK = "2";
      }
      actionsp *= parseInt(`${actionsp}`);
       let turnU: Array<any> = [String.fromCharCode(114,101,112,97,105,110,116,0), String.fromCharCode(120,95,52,55,95,105,110,112,117,116,120,0)];
      if ((turnU.length / (Math.max(3, 8))) >= 4) {
         turnU = [turnU.length];
      }
      if (3 >= (turnU.length * turnU.length)) {
          let modelz = String.fromCharCode(115,95,55,57,0);
          let package__rd: Map<any, any> = new Map([[String.fromCharCode(121,95,52,51,95,102,97,118,101,0),String.fromCharCode(105,95,57,52,95,101,118,105,99,116,0)], [String.fromCharCode(115,101,110,100,109,115,103,95,99,95,50,57,0),String.fromCharCode(119,95,53,51,95,119,114,105,116,105,110,103,0)], [String.fromCharCode(105,110,102,111,115,95,118,95,53,52,0),String.fromCharCode(118,95,56,48,95,107,101,121,119,111,114,100,0)]]);
          let commentJ = String.fromCharCode(107,95,52,49,95,114,101,116,114,97,110,109,105,115,115,105,111,110,0);
          let librrct = 0.0;
          let spinner7 = 4.0;
         turnU = [parseInt(`${spinner7}`) & modelz.length];
         modelz += `${package__rd.size}`;
         package__rd = new Map([[commentJ, parseInt(`${librrct}`)]]);
         commentJ += `${3 + parseInt(`${librrct}`)}`;
         spinner7 -= package__rd.size;
      }
      if ((turnU.length ^ 3) <= 3) {
         turnU = [turnU.length];
      }
      icon3 += parseFloat(`${areaL.length}`);
       let untick4: Map<any, any> = new Map([[String.fromCharCode(104,111,115,116,112,111,114,116,102,105,108,101,95,105,95,56,0),959], [String.fromCharCode(98,103,109,99,95,120,95,57,56,0),813]]);
       let string0 = String.fromCharCode(105,110,116,114,105,110,95,121,95,52,50,0);
      for (let e = 0; e < 3; e++) {
         untick4 = new Map([[`${untick4.size}`, (string0 == String.fromCharCode(88,0) ? string0.length : untick4.size)]]);
      }
      while (2 <= (untick4.size << (Math.min(string0.length, 3)))) {
          let reactU = String.fromCharCode(116,97,98,108,101,115,95,105,95,56,53,0);
         string0 += `${reactU.length >> (Math.min(Math.abs(2), 1))}`;
         break;
      }
         untick4.set(`${string0}`, 2 ^ untick4.size);
          let showlessM = 0.0;
          let linez = 4.0;
          let reportM = String.fromCharCode(112,114,122,112,95,119,95,49,48,48,0);
         untick4.set(`${linez}`, (String.fromCharCode(80,0) == reportM ? reportM.length : parseInt(`${linez}`)));
         showlessM *= parseInt(`${showlessM}`);
         string0 += `${1 | untick4.size}`;
         string0 = `${untick4.size ^ string0.length}`;
      connectionM.push(string0.length);
    if (result == null) {

       let with_0R: Array<any> = [464, 720, 821];
      if ((with_0R.length - with_0R.length) < 1 && (with_0R.length - 1) < 1) {
         with_0R = [with_0R.length];
      }
      let modityK = 8122927 >= with_0R.length;
      do {
         with_0R.push(with_0R.length ^ with_0R.length);
         if (modityK) {
            break;
         }
      } while ((!with_0R.includes(with_0R.length)) && modityK);
         with_0R.push(1 | with_0R.length);
      iconarrowright4 = String.fromCharCode(102,0) == liveZ;
      cedbadcebfbfbfbcfecbcT.push(1);
      lightz += `${1 >> (Math.min(4, connectionM.length))}`;
   if (actionsp <= 3.61 && 4.80 <= (3.61 - actionsp)) {
      actionsp /= Math.max(3, (networkP == String.fromCharCode(78,0) ? parseInt(`${icon3}`) : networkP.length));
   }
      iconfeedbackK += `${3 | connectionM.length}`;
   for (let l = 0; l < 1; l++) {
      sportsM -= parseInt(`${actionsp}`) + 1;
   }
   let subsh = String.fromCharCode(51,54,121,113,0) == iconfeedbackK;
   do {
      iconfeedbackK += `${(String.fromCharCode(122,0) == iconfeedbackK ? iconfeedbackK.length : (iconarrowright4 ? 3 : 5))}`;
      if (subsh) {
         break;
      }
   } while ((sellf != iconfeedbackK) && subsh);
      return;
    }

    await dispatch(updateUserAuth(result));

   while (icon3 == 2.6) {
      connectionM = [2];
      break;
   }
       let showlessq = String.fromCharCode(97,114,116,119,111,114,107,95,112,95,52,57,0);
      if (showlessq.length >= showlessq.length) {
         showlessq += `${showlessq.length >> (Math.min(1, showlessq.length))}`;
      }
         showlessq = `${showlessq.length}`;
       let watchr = String.fromCharCode(112,95,50,49,95,97,117,116,111,102,105,108,108,0);
      sellf = `${(String.fromCharCode(66,0) == sellf ? sellf.length : connectionM.length)}`;
      zcopy_fr >>= Math.min(Math.abs(zcopy_fr), 1);
   if ((actionsp + 3.11) < 4.96) {
      networkP += `${areaL.length % (Math.max(3, 4))}`;
   }
       let animations1: Array<any> = [711, 830];
       let homeinactiveP = String.fromCharCode(118,105,116,99,95,122,95,51,0);
       let modeb = String.fromCharCode(115,95,52,50,95,99,111,99,111,115,100,120,0);
      if (homeinactiveP.length > modeb.length) {
         modeb += "3";
      }
      while (homeinactiveP.length >= 5) {
          let default_14H = String.fromCharCode(122,95,57,51,95,108,105,115,116,115,0);
          let paginationP = true;
          let firebaseT = 0.0;
         animations1.push((String.fromCharCode(104,0) == modeb ? homeinactiveP.length : modeb.length));
         default_14H += "2";
         paginationP = firebaseT <= 81.31 || paginationP;
         firebaseT *= parseFloat(`${default_14H.length}`);
         break;
      }
       let latnd = false;
      for (let j = 0; j < 2; j++) {
         modeb += `${modeb.length}`;
      }
       let temperatureP = String.fromCharCode(105,95,49,48,95,122,111,110,101,0);
       let mountingu = String.fromCharCode(118,111,116,101,95,51,95,51,52,0);
         temperatureP += "2";
      while (1 > (5 | modeb.length) || (animations1.length | 5) > 2) {
         animations1.push(animations1.length >> (Math.min(Math.abs(1), 4)));
         break;
      }
         temperatureP += `${homeinactiveP.length >> (Math.min(2, animations1.length))}`;
      for (let j = 0; j < 1; j++) {
         modeb += `${temperatureP.length << (Math.min(2, mountingu.length))}`;
      }
      sportsM /= Math.max(5, cedbadcebfbfbfbcfecbcT.length);
      areaL = [(liveZ.length ^ (iconarrowright4 ? 4 : 5))];
       let phoneshare1 = 3.0;
       let mbridgeg = 0.0;
      if (mbridgeg == 1.32) {
         mbridgeg /= Math.max(parseFloat(`${parseInt(`${mbridgeg}`) >> (Math.min(3, Math.abs(2)))}`), 1);
      }
         phoneshare1 += parseInt(`${mbridgeg}`);
      let clear1 = phoneshare1 <= 9424215.0;
      do {
          let descq: Array<any> = [145, 821];
          let hooksx: Array<any> = [523, 668];
          let yellowcirclebgA = true;
         phoneshare1 -= descq.length;
         descq = [hooksx.length];
         hooksx.push(1 * hooksx.length);
         if (clear1) {
            break;
         }
      } while (clear1 && ((1.21 + phoneshare1) > 1.37));
         mbridgeg += parseFloat(`${parseInt(`${phoneshare1}`) ^ parseInt(`${mbridgeg}`)}`);
      if (1.96 < (phoneshare1 * 5)) {
          let sliderZ = false;
          let largesoundc = true;
         mbridgeg -= parseFloat(`${parseInt(`${phoneshare1}`) >> (Math.min(2, Math.abs(1)))}`);
         sliderZ = (largesoundc ? sliderZ : largesoundc);
      }
         mbridgeg += parseFloat(`${2}`);
      cedbadcebfbfbfbcfecbcT.push(sellf.length ^ 1);
    return;
  };

  const checkConnection = async () => {
       let textC = String.fromCharCode(106,95,55,57,95,114,101,115,101,110,100,0);
    let foregroundG = 5.0;
    let encryptorF = String.fromCharCode(101,112,111,108,108,95,103,95,52,53,0);
    let styleu = String.fromCharCode(101,115,100,115,95,115,95,52,53,0);
    let iconrightorangeW = String.fromCharCode(116,114,97,110,115,102,111,114,109,97,98,108,101,95,97,95,50,56,0);
    let sinaX = String.fromCharCode(103,117,97,114,100,95,99,95,52,51,0);
    let panglez: Map<any, any> = new Map([[String.fromCharCode(115,105,108,101,110,99,101,100,95,98,95,49,55,0),273], [String.fromCharCode(98,111,117,110,100,101,100,95,57,95,53,57,0),606]]);
    let nodew = 5.0;
      iconrightorangeW = "1";
   if (2 < iconrightorangeW.length) {
      iconrightorangeW = `${iconrightorangeW.length + parseInt(`${foregroundG}`)}`;
   }
      panglez = new Map([[`${foregroundG}`, 3 + parseInt(`${foregroundG}`)]]);
      panglez = new Map([[iconrightorangeW, 2 * iconrightorangeW.length]]);
   for (let g = 0; g < 3; g++) {
       let bridge6 = 0.0;
       let lessF = 2;
         bridge6 /= Math.max(parseInt(`${bridge6}`), 2);
         lessF ^= 1 << (Math.min(Math.abs(parseInt(`${bridge6}`)), 3));
      while (5.24 > (bridge6 / (Math.max(3.78, 2)))) {
         lessF += 1 ^ parseInt(`${bridge6}`);
         break;
      }
      for (let l = 0; l < 1; l++) {
         lessF %= Math.max(1, 3);
      }
      for (let e = 0; e < 2; e++) {
         bridge6 *= parseInt(`${bridge6}`) ^ lessF;
      }
      let mbjscommon4 = lessF <= 5014844;
      do {
         lessF &= lessF + parseInt(`${bridge6}`);
         if (mbjscommon4) {
            break;
         }
      } while (mbjscommon4 && ((4.62 - bridge6) <= 2.14 && (bridge6 - 4.62) <= 5.68));
      sinaX = `${2 - sinaX.length}`;
   }

    const state = await NetInfo.fetch();

   let mode3 = iconrightorangeW.length >= 9274255;
   do {
       let actionm = String.fromCharCode(109,95,53,52,95,116,114,105,0);
      if (4 <= actionm.length && actionm != String.fromCharCode(107,0)) {
         actionm += `${actionm.length}`;
      }
       let vignettep: Array<any> = [String.fromCharCode(122,95,56,53,95,114,116,109,112,101,0), String.fromCharCode(100,95,53,54,95,97,117,116,111,114,101,109,111,118,101,0), String.fromCharCode(116,95,54,56,95,105,102,102,116,0)];
       let blacklisto: Array<any> = [959, 265, 388];
      let commons = 9558457 >= vignettep.length;
      do {
         vignettep = [blacklisto.length % 2];
         if (commons) {
            break;
         }
      } while (((3 << (Math.min(3, vignettep.length))) == 1 || 3 == (3 << (Math.min(1, vignettep.length)))) && commons);
      iconrightorangeW = "3";
      if (mode3) {
         break;
      }
   } while (((iconrightorangeW.length & 5) == 1 || (5 & panglez.size) == 3) && mode3);
       let controls0 = String.fromCharCode(110,111,114,109,97,108,105,122,101,95,56,95,50,56,0);
       let owngoala = String.fromCharCode(110,95,57,51,95,103,111,112,104,101,114,0);
       let animationsw = 4.0;
      for (let z = 0; z < 3; z++) {
          let watchW = String.fromCharCode(104,95,49,49,95,105,115,112,111,115,97,98,108,101,0);
          let libswscaleD: Map<any, any> = new Map([[String.fromCharCode(109,95,52,54,95,111,102,102,101,114,0),416], [String.fromCharCode(116,101,120,116,98,101,95,117,95,52,52,0),574], [String.fromCharCode(97,114,116,105,99,108,101,95,118,95,50,53,0),363]]);
          let showlessb = 4.0;
          let manifest3: Map<any, any> = new Map([[String.fromCharCode(101,109,117,108,97,116,101,100,95,106,95,55,49,0),String.fromCharCode(109,117,108,116,105,112,108,121,95,121,95,49,51,0)], [String.fromCharCode(112,97,105,114,119,105,115,101,95,119,95,54,51,0),String.fromCharCode(97,114,116,105,99,108,101,95,118,95,55,51,0)], [String.fromCharCode(116,101,115,116,101,114,95,116,95,56,49,0),String.fromCharCode(116,97,112,102,105,108,116,101,114,0)]]);
          let orangeuparrowo = true;
         animationsw *= parseFloat(`${parseInt(`${showlessb}`)}`);
         watchW += `${watchW.length}`;
         libswscaleD.set(`${orangeuparrowo}`, (manifest3.size << (Math.min(2, Math.abs((orangeuparrowo ? 5 : 3))))));
         showlessb += parseFloat(`${1}`);
         manifest3.set(watchW, 2);
      }
      if ((controls0.length & 1) <= 2) {
          let libjsil: Map<any, any> = new Map([[String.fromCharCode(101,110,99,111,100,101,115,95,121,95,54,53,0),true ], [String.fromCharCode(110,95,54,56,95,102,114,97,109,101,115,105,122,101,115,0),false ], [String.fromCharCode(103,95,56,48,95,115,116,97,99,107,101,100,0),true ]]);
          let updatesN = false;
         animationsw += parseFloat(`${controls0.length}`);
         libjsil = new Map([[`${libjsil.size}`, libjsil.size]]);
         updatesN = ((libjsil.size & (updatesN ? 64 : libjsil.size)) > 64);
      }
       let greytick7 = String.fromCharCode(105,110,105,95,113,95,57,54,0);
       let q_image1 = String.fromCharCode(116,111,97,115,116,95,112,95,57,57,0);
      let settingsS = controls0 == String.fromCharCode(49,109,113,104,109,0);
      do {
          let q_unlockH = 2.0;
         controls0 += `${(greytick7 == String.fromCharCode(111,0) ? parseInt(`${animationsw}`) : greytick7.length)}`;
         q_unlockH /= Math.max(parseFloat(`${parseInt(`${q_unlockH}`) ^ 1}`), 1);
         if (settingsS) {
            break;
         }
      } while (((3 & controls0.length) <= 3 && (3 >> (Math.min(3, controls0.length))) <= 5) && settingsS);
         greytick7 = `${parseInt(`${animationsw}`) >> (Math.min(Math.abs(1), 3))}`;
      while (greytick7.length <= 4) {
         owngoala = `${(String.fromCharCode(114,0) == controls0 ? controls0.length : q_image1.length)}`;
         break;
      }
         controls0 = `${greytick7.length % 3}`;
      if (4 == greytick7.length) {
         animationsw *= parseFloat(`${2 + controls0.length}`);
      }
      if ((q_image1.length % 4) <= 5) {
         q_image1 = `${(String.fromCharCode(115,0) == owngoala ? controls0.length : owngoala.length)}`;
      }
      panglez = new Map([[controls0, owngoala.length | controls0.length]]);
       let iconrightorangeJ: Array<any> = [275, 913];
      let librrcO = 5332734 <= iconrightorangeJ.length;
      do {
          let defaultfootballbgg = String.fromCharCode(99,111,118,101,114,95,54,95,57,53,0);
          let moreo = 2.0;
          let teamdetailsbgm: Map<any, any> = new Map([[String.fromCharCode(97,98,111,114,116,95,109,95,52,57,0),135], [String.fromCharCode(97,95,50,48,95,99,111,100,101,114,115,0),110], [String.fromCharCode(111,95,50,57,95,117,110,112,105,110,0),518]]);
          let arrowupn = false;
         iconrightorangeJ = [defaultfootballbgg.length];
         defaultfootballbgg = "2";
         moreo += 1 + parseInt(`${moreo}`);
         teamdetailsbgm.set(`${arrowupn}`, ((arrowupn ? 1 : 1) * teamdetailsbgm.size));
         if (librrcO) {
            break;
         }
      } while (librrcO && ((iconrightorangeJ.length ^ 3) < 1 && (iconrightorangeJ.length ^ iconrightorangeJ.length) < 3));
      if (1 > (iconrightorangeJ.length ^ iconrightorangeJ.length)) {
         iconrightorangeJ = [iconrightorangeJ.length % 3];
      }
      for (let u = 0; u < 2; u++) {
         iconrightorangeJ = [iconrightorangeJ.length ^ iconrightorangeJ.length];
      }
      encryptorF = `${3 | parseInt(`${foregroundG}`)}`;
   while (nodew <= 2.14) {
       let weibob = String.fromCharCode(97,116,111,109,105,99,97,108,108,121,95,101,95,55,48,0);
       let playlistE = String.fromCharCode(115,99,97,108,97,114,112,114,111,100,117,99,116,95,100,95,53,53,0);
       let recommendationV = 1.0;
         playlistE = `${(String.fromCharCode(66,0) == playlistE ? playlistE.length : weibob.length)}`;
      while (3.14 >= (recommendationV + 4.39) || (4.39 + recommendationV) >= 4.98) {
          let predictionbanners = String.fromCharCode(116,97,107,101,110,95,50,95,55,53,0);
          let tooltips8 = 3.0;
          let colorsh = 3.0;
         playlistE += `${playlistE.length - weibob.length}`;
         predictionbanners = `${parseInt(`${tooltips8}`)}`;
         colorsh += parseInt(`${tooltips8}`);
         break;
      }
       let componentregistryx = String.fromCharCode(114,97,112,105,100,95,54,95,57,54,0);
         playlistE += `${(String.fromCharCode(55,0) == weibob ? weibob.length : parseInt(`${recommendationV}`))}`;
         weibob += `${(String.fromCharCode(104,0) == componentregistryx ? parseInt(`${recommendationV}`) : componentregistryx.length)}`;
         componentregistryx += `${weibob.length | 3}`;
      while (weibob != String.fromCharCode(118,0) && playlistE == String.fromCharCode(74,0)) {
          let ballF = String.fromCharCode(98,95,55,52,95,109,105,100,116,111,110,101,115,0);
          let animationu = 1.0;
         playlistE += "3";
         ballF = `${ballF.length}`;
         animationu -= parseFloat(`${parseInt(`${animationu}`) + 1}`);
         break;
      }
      while (weibob.length <= componentregistryx.length) {
         componentregistryx = `${componentregistryx.length / (Math.max(3, weibob.length))}`;
         break;
      }
         playlistE += `${(String.fromCharCode(105,0) == weibob ? weibob.length : playlistE.length)}`;
      nodew -= (String.fromCharCode(68,0) == styleu ? parseInt(`${nodew}`) : styleu.length);
      break;
   }
   for (let q = 0; q < 1; q++) {
       let member2: Array<any> = [422, 523, 992];
      for (let w = 0; w < 2; w++) {
         member2.push(member2.length * member2.length);
      }
       let ajaxK = 4;
       let sinap = 2;
      let download0 = 5208767 >= ajaxK;
      do {
         ajaxK &= sinap;
         if (download0) {
            break;
         }
      } while (download0 && (ajaxK <= sinap));
      panglez.set(encryptorF, 1 >> (Math.min(5, Math.abs(panglez.size))));
   }
    const offline = !(state.isConnected && state.isInternetReachable);

   let homeA = styleu == String.fromCharCode(52,113,114,111,0);
   do {
      styleu += `${encryptorF.length}`;
      if (homeA) {
         break;
      }
   } while (homeA && ((panglez.size ^ 5) < 2 && 5 < (styleu.length ^ panglez.size)));
   for (let y = 0; y < 2; y++) {
      encryptorF = `${1 << (Math.min(5, Math.abs(parseInt(`${foregroundG}`))))}`;
   }
   for (let k = 0; k < 1; k++) {
      styleu += `${iconrightorangeW.length}`;
   }
   while (styleu == String.fromCharCode(86,0) || 5 <= iconrightorangeW.length) {
       let eactV = String.fromCharCode(110,95,49,95,101,110,99,111,100,101,105,110,116,114,97,0);
       let imagenomoredataq = 0;
       let rightn = 1.0;
      while (!eactV.endsWith(`${imagenomoredataq}`)) {
         imagenomoredataq ^= 2;
         break;
      }
      for (let w = 0; w < 2; w++) {
         imagenomoredataq <<= Math.min(eactV.length, 1);
      }
      if ((imagenomoredataq / 2) <= 3 || (imagenomoredataq | 2) <= 2) {
         imagenomoredataq += imagenomoredataq % (Math.max(eactV.length, 1));
      }
         eactV = `${imagenomoredataq % (Math.max(parseInt(`${rightn}`), 4))}`;
          let moonF = true;
          let selectP = 4.0;
         imagenomoredataq %= Math.max(4, imagenomoredataq & 3);
         moonF = selectP == 22.16;
         selectP += parseFloat(`${3 + parseInt(`${selectP}`)}`);
      for (let l = 0; l < 3; l++) {
         imagenomoredataq ^= imagenomoredataq - 3;
      }
      for (let a = 0; a < 2; a++) {
         rightn -= parseFloat(`${1 + imagenomoredataq}`);
      }
         imagenomoredataq -= (String.fromCharCode(108,0) == eactV ? eactV.length : imagenomoredataq);
      for (let u = 0; u < 2; u++) {
          let klevinc = String.fromCharCode(97,110,110,111,116,97,116,101,95,101,95,50,55,0);
          let module_ = false;
          let yellowz = String.fromCharCode(114,97,108,102,100,97,116,97,95,113,95,54,54,0);
          let manifestB = 3;
         imagenomoredataq <<= Math.min(Math.abs(manifestB - imagenomoredataq), 1);
         klevinc = "3";
         module_ = yellowz.length >= 41 && module_;
         yellowz = `${klevinc.length}`;
         manifestB *= ((module_ ? 5 : 5) * 1);
      }
      styleu += `${styleu.length | 2}`;
      break;
   }
   let confirmation5 = 5253003 >= encryptorF.length;
   do {
      encryptorF = `${(String.fromCharCode(54,0) == encryptorF ? styleu.length : encryptorF.length)}`;
      if (confirmation5) {
         break;
      }
   } while (confirmation5 && (encryptorF.length <= 2));
    setIsOffline(offline);

       let china9 = false;
       let notificationfillemptyo = String.fromCharCode(99,95,51,52,95,116,121,112,101,100,101,102,115,0);
         china9 = !china9;
         notificationfillemptyo += "2";
      for (let b = 0; b < 2; b++) {
          let frame_p4 = true;
         china9 = notificationfillemptyo.length >= 45;
         frame_p4 = (!frame_p4 ? frame_p4 : frame_p4);
      }
      for (let a = 0; a < 2; a++) {
         china9 = notificationfillemptyo.length <= 51 && !china9;
      }
      while (notificationfillemptyo.endsWith(`${china9}`)) {
          let drag1 = String.fromCharCode(106,95,53,53,95,97,118,114,101,115,97,109,112,108,101,0);
          let singaporeK: Map<any, any> = new Map([[String.fromCharCode(120,95,55,55,95,109,97,107,101,119,116,0),637], [String.fromCharCode(107,95,52,54,95,115,101,108,101,99,116,101,100,0),748]]);
          let incident0: Array<any> = [76, 179, 686];
         china9 = 42 > incident0.length;
         drag1 += `${drag1.length}`;
         singaporeK.set(drag1, 2);
         incident0 = [singaporeK.size];
         break;
      }
      for (let p = 0; p < 2; p++) {
         china9 = !china9;
      }
      panglez = new Map([[`${panglez.size}`, parseInt(`${foregroundG}`) % (Math.max(panglez.size, 6))]]);
      iconrightorangeW = `${panglez.size}`;
   for (let k = 0; k < 3; k++) {
       let reportm = 3;
       let combinedi = 4.0;
      for (let z = 0; z < 3; z++) {
         combinedi -= parseFloat(`${reportm / 1}`);
      }
      if (3.64 >= (combinedi - 1.38) || (parseFloat(`${reportm}`) - combinedi) >= 1.38) {
         reportm *= parseInt(`${combinedi}`);
      }
          let hookt = String.fromCharCode(116,111,110,101,115,95,97,95,52,57,0);
          let matchesJ = String.fromCharCode(106,95,54,54,0);
          let checkboxy = 5.0;
         reportm -= hookt.length >> (Math.min(5, Math.abs(parseInt(`${combinedi}`))));
         hookt += `${parseInt(`${checkboxy}`) % (Math.max(matchesJ.length, 9))}`;
         matchesJ += `${matchesJ.length}`;
         checkboxy /= Math.max((parseFloat(`${matchesJ == String.fromCharCode(122,0) ? parseInt(`${checkboxy}`) : matchesJ.length}`)), 2);
         combinedi -= parseFloat(`${reportm % (Math.max(parseInt(`${combinedi}`), 4))}`);
       let upgradeN = String.fromCharCode(116,95,52,53,95,115,109,107,97,0);
       let thumbnailj = String.fromCharCode(119,112,116,104,114,101,97,100,115,95,98,95,50,49,0);
         combinedi /= Math.max(parseFloat(`${1 >> (Math.min(2, Math.abs(parseInt(`${combinedi}`))))}`), 1);
      iconrightorangeW += `${(String.fromCharCode(79,0) == styleu ? styleu.length : panglez.size)}`;
   }
   for (let n = 0; n < 1; n++) {
      panglez = new Map([[textC, textC.length << (Math.min(sinaX.length, 5))]]);
   }
      textC += `${parseInt(`${foregroundG}`)}`;
    if (!offline) {

      panglez = new Map([[`${panglez.size}`, panglez.size]]);
      foregroundG *= 1 ^ textC.length;
      panglez.set(iconrightorangeW, styleu.length);
   for (let a = 0; a < 3; a++) {
      sinaX = "3";
   }
       let ccopy_4M: Array<any> = [String.fromCharCode(106,95,56,56,95,112,97,103,101,108,105,115,116,0), String.fromCharCode(105,109,112,114,101,115,115,105,111,110,115,95,100,95,49,48,48,0)];
      let mime0 = 6879087 <= ccopy_4M.length;
      do {
         ccopy_4M.push(3 << (Math.min(1, ccopy_4M.length)));
         if (mime0) {
            break;
         }
      } while (mime0 && (2 >= (1 | ccopy_4M.length) || 5 >= (1 | ccopy_4M.length)));
          let viewera = 1.0;
          let incidente: Map<any, any> = new Map([[String.fromCharCode(115,117,98,116,114,97,99,116,111,114,95,115,95,57,51,0),String.fromCharCode(118,95,51,49,95,105,100,101,110,116,105,102,105,99,97,116,105,111,110,0)], [String.fromCharCode(113,95,49,95,102,114,97,103,109,101,110,116,115,0),String.fromCharCode(115,95,52,49,95,118,97,114,105,110,116,115,0)]]);
         ccopy_4M = [2];
         viewera *= parseInt(`${viewera}`) >> (Math.min(Math.abs(1), 3));
         incidente = new Map([[`${incidente.size}`, incidente.size | parseInt(`${viewera}`)]]);
      while ((4 - ccopy_4M.length) <= 5) {
         ccopy_4M.push(ccopy_4M.length & ccopy_4M.length);
         break;
      }
      iconrightorangeW += `${parseInt(`${nodew}`)}`;
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
       let snewsD = String.fromCharCode(109,95,57,95,102,97,110,99,121,0);
    let libfbn = false;
    let circle9: Map<any, any> = new Map([[String.fromCharCode(99,105,110,118,105,100,101,111,95,116,95,51,54,0),361], [String.fromCharCode(98,108,105,110,107,95,54,95,56,54,0),257]]);
    let favicont = 4.0;
    let analyticsL = String.fromCharCode(120,95,53,53,95,118,101,99,116,111,114,0);
    let iconbackwhited = false;
    let defaultprofilepicm = String.fromCharCode(113,95,57,52,95,112,97,114,115,101,117,116,105,108,115,0);
    let manifestk = String.fromCharCode(112,97,114,115,101,114,115,95,98,95,53,48,0);
    let hooksL = String.fromCharCode(103,95,56,51,95,99,101,114,116,112,111,108,0);
    let nativemoduleN = 0.0;
    let clubk = String.fromCharCode(113,95,54,56,95,98,105,116,118,101,99,115,0);
    let tumbnailN = String.fromCharCode(102,105,108,101,112,97,116,104,95,48,95,54,52,0);
    let predictionwinf = true;
    let imagenomoredataN = 2.0;
    let datai = 4.0;
       let images8 = 0.0;
       let libjsinspectorX = 0.0;
       let macau1: Map<any, any> = new Map([[String.fromCharCode(108,111,117,100,110,111,114,109,95,100,95,50,0),true ], [String.fromCharCode(103,95,49,53,95,118,116,97,103,0),false ]]);
      for (let m = 0; m < 3; m++) {
          let iconarrowrightorangez = String.fromCharCode(109,95,49,55,95,99,111,101,114,99,101,0);
          let largeS = 5;
         images8 /= Math.max(5, parseFloat(`${2}`));
         iconarrowrightorangez = `${iconarrowrightorangez.length ^ largeS}`;
         largeS -= largeS;
      }
      for (let l = 0; l < 3; l++) {
          let schedulers = 4.0;
          let signinup6: Array<any> = [580, 306];
          let sort0 = String.fromCharCode(119,95,51,53,95,114,105,103,104,116,115,0);
         libjsinspectorX *= (parseFloat(`${String.fromCharCode(100,0) == sort0 ? sort0.length : signinup6.length}`));
         schedulers *= parseFloat(`${parseInt(`${schedulers}`)}`);
         signinup6.push(parseInt(`${schedulers}`) / 2);
      }
      while ((3 >> (Math.min(4, Math.abs(macau1.size)))) < 5 || (libjsinspectorX * 3.67) < 1.47) {
         libjsinspectorX *= parseFloat(`${1}`);
         break;
      }
         images8 += parseFloat(`${macau1.size * 1}`);
         macau1.set(`${images8}`, 3);
         macau1 = new Map([[`${libjsinspectorX}`, 2 - parseInt(`${libjsinspectorX}`)]]);
         libjsinspectorX /= Math.max(parseFloat(`${macau1.size % (Math.max(9, parseInt(`${images8}`)))}`), 3);
         libjsinspectorX += parseFloat(`${macau1.size + 1}`);
         libjsinspectorX *= parseFloat(`${1 << (Math.min(Math.abs(parseInt(`${libjsinspectorX}`)), 1))}`);
      manifestk += `${3 | parseInt(`${images8}`)}`;

    const data = await mayi_StyleShrink.getNativeList();

   while (!manifestk.endsWith(`${iconbackwhited}`)) {
      iconbackwhited = libfbn || 50.5 <= favicont;
      break;
   }

    if (UMENG_CHANNEL === "GOOGLE_PLAY" && IS_ANDROID) {

      nativemoduleN -= parseInt(`${favicont}`);
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
                payment_type_icon: "trashBorderless.png",
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
                payment_type_icon: "trashBorderless.png",
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

      iconbackwhited = nativemoduleN > 42.6;

        

   while (manifestk.length <= 5) {
      libfbn = !libfbn;
      break;
   }
        const index12Months = subscription.findIndex(
          (item) => item.title === "12个月"
        );

       let yings: Map<any, any> = new Map([[String.fromCharCode(101,112,122,115,95,55,95,55,53,0),false ], [String.fromCharCode(108,95,50,56,95,105,112,97,100,0),true ]]);
       let libapminsightak = true;
         yings = new Map([[`${yings.size}`, 2]]);
         yings.set(`${libapminsightak}`, 1 - yings.size);
         yings.set(`${libapminsightak}`, 2 ^ yings.size);
      while (libapminsightak) {
         yings.set(`${libapminsightak}`, yings.size);
         break;
      }
       let showlessI = String.fromCharCode(115,110,97,112,104,111,116,0);
       let awayR = true;
      nativemoduleN /= Math.max(2, defaultprofilepicm.length / 2);

        

       let libfbP = false;
       let rewardvideo4: Array<any> = [277, 388, 129];
         libfbP = rewardvideo4.includes(libfbP);
       let reactnavigationh = 3;
          let pushU = false;
         rewardvideo4 = [(rewardvideo4.length << (Math.min(5, Math.abs((pushU ? 3 : 3)))))];
         reactnavigationh <<= Math.min(1, Math.abs((reactnavigationh | (libfbP ? 3 : 3))));
      if (3 >= rewardvideo4.length) {
         libfbP = rewardvideo4.includes(reactnavigationh);
      }
      for (let y = 0; y < 3; y++) {
         rewardvideo4.push((1 << (Math.min(5, Math.abs((libfbP ? 4 : 1))))));
      }
      libfbn = (65 >= ((!iconbackwhited ? circle9.size : 76) % (Math.max(1, circle9.size))));
        

   let tempnodataf = clubk == String.fromCharCode(105,102,97,98,0);
   do {
      clubk += `${parseInt(`${favicont}`) >> (Math.min(Math.abs(circle9.size), 4))}`;
      if (tempnodataf) {
         break;
      }
   } while (tempnodataf && (manifestk.length == clubk.length));
        

      nativemoduleN += circle9.size;
        

       let utilsz: Map<any, any> = new Map([[String.fromCharCode(106,95,51,57,95,115,101,99,111,110,100,115,0),false ], [String.fromCharCode(103,108,98,108,95,52,95,53,56,0),true ]]);
       let templateprocessorQ: Map<any, any> = new Map([[String.fromCharCode(105,95,52,54,95,99,111,110,118,101,114,116,0),106], [String.fromCharCode(110,105,99,101,0),856], [String.fromCharCode(114,101,97,100,95,105,95,56,54,0),414]]);
       let config6: Array<any> = [493, 755, 642];
       let attributedstringy: Array<any> = [77, 102, 941];
      if (3 <= utilsz.size) {
         templateprocessorQ = new Map([[`${templateprocessorQ.size}`, templateprocessorQ.size ^ 3]]);
      }
       let pathl = 5.0;
       let iconsubssuccessG = 1.0;
      while ((pathl * 4.14) >= 3.24) {
         pathl += parseInt(`${iconsubssuccessG}`);
         break;
      }
      for (let f = 0; f < 1; f++) {
         config6 = [1];
      }
       let megaphoned: Array<any> = [624, 993, 869];
      defaultprofilepicm = `${circle9.size * defaultprofilepicm.length}`;
        

      manifestk = `${(hooksL == String.fromCharCode(72,0) ? hooksL.length : snewsD.length)}`;

        

   if (snewsD.length > 4) {
       let redscoreballk = String.fromCharCode(100,97,116,97,100,105,114,95,118,95,49,50,0);
          let dependencyS = String.fromCharCode(119,95,56,50,95,105,99,119,114,115,105,0);
          let tempnodatac = String.fromCharCode(99,100,102,116,95,118,95,52,0);
          let hovery = 0;
         redscoreballk = `${tempnodatac.length << (Math.min(3, redscoreballk.length))}`;
         dependencyS = "1";
         tempnodatac = `${hovery}`;
         hovery *= hovery;
         redscoreballk += `${redscoreballk.length}`;
         redscoreballk = `${redscoreballk.length}`;
      snewsD += `${hooksL.length}`;
   }
        if (index12Months !== -1) {

      favicont += parseInt(`${nativemoduleN}`);
          const item12Months = subscription.splice(index12Months, 1)[0];

      circle9 = new Map([[clubk, parseInt(`${nativemoduleN}`)]]);
          subscription.splice(1, 0, item12Months);
        }

        

       let ewardedh = false;
      while (!ewardedh) {
          let gifgoalbg6 = String.fromCharCode(99,95,56,53,95,98,111,100,121,0);
          let code6 = 4;
          let refreshG = String.fromCharCode(99,103,105,109,97,103,101,0);
          let type_25R = String.fromCharCode(102,105,111,95,108,95,54,57,0);
          let carouselP = String.fromCharCode(109,111,110,116,104,95,52,95,49,55,0);
         ewardedh = String.fromCharCode(86,0) == carouselP && 72 > type_25R.length;
         gifgoalbg6 += `${gifgoalbg6.length / (Math.max(3, 5))}`;
         code6 /= Math.max(5, refreshG.length);
         refreshG += `${1 - gifgoalbg6.length}`;
         type_25R += `${1 - gifgoalbg6.length}`;
         carouselP = `${(refreshG == String.fromCharCode(70,0) ? refreshG.length : code6)}`;
         break;
      }
      while (ewardedh) {
         ewardedh = !ewardedh && ewardedh;
         break;
      }
         ewardedh = !ewardedh && ewardedh;
      clubk += `${parseInt(`${nativemoduleN}`)}`;
        

   while (4.22 >= nativemoduleN) {
      nativemoduleN += 1 + circle9.size;
      break;
   }
        setOneTimeProducts(oneTime);

   for (let m = 0; m < 3; m++) {
       let iconwatchnowy = 5.0;
       let catalogV: Map<any, any> = new Map([[String.fromCharCode(119,105,110,101,114,114,110,111,95,51,95,49,0),230], [String.fromCharCode(112,116,114,109,97,112,115,95,50,95,50,52,0),999], [String.fromCharCode(101,120,97,110,100,101,100,95,115,95,50,0),955]]);
       let minimizeQ = 1.0;
       let storeC: Map<any, any> = new Map([[String.fromCharCode(100,111,109,101,115,116,105,99,95,109,95,56,51,0),715], [String.fromCharCode(112,111,115,116,105,110,103,95,105,95,52,56,0),357]]);
       let encryptorE = 0.0;
          let predictionactivei = String.fromCharCode(113,95,55,57,95,102,114,97,103,109,101,110,116,115,0);
          let pauseA: Array<any> = [645, 356, 715];
          let vcopy_z1E = 4.0;
         storeC = new Map([[`${catalogV.size}`, catalogV.size - 3]]);
         predictionactivei += `${parseInt(`${vcopy_z1E}`)}`;
         pauseA.push(2 / (Math.max(10, predictionactivei.length)));
         vcopy_z1E /= Math.max(predictionactivei.length, 3);
      let injuryG = catalogV.size <= 9569062;
      do {
         catalogV.set(`${storeC.size}`, 3 - catalogV.size);
         if (injuryG) {
            break;
         }
      } while (((catalogV.size - 3) >= 2 || 3.70 >= (3.81 * encryptorE)) && injuryG);
         storeC = new Map([[`${storeC.size}`, storeC.size - 2]]);
         minimizeQ += parseFloat(`${parseInt(`${encryptorE}`) / (Math.max(2, 9))}`);
          let libcrashsdks = String.fromCharCode(104,95,50,51,95,99,111,109,98,105,110,97,116,111,114,0);
          let mbnativeF: Array<any> = [118, 504, 366];
          let googlek = String.fromCharCode(101,100,105,97,95,112,95,56,55,0);
         encryptorE *= catalogV.size - parseInt(`${minimizeQ}`);
         libcrashsdks += `${mbnativeF.length}`;
         mbnativeF.push(googlek.length);
         googlek = `${googlek.length}`;
          let materialu = 1.0;
          let homeinactiveb: Array<any> = [916, 951, 212];
          let mimoG = true;
         storeC.set(`${encryptorE}`, parseInt(`${encryptorE}`));
         materialu -= (parseFloat(`${(mimoG ? 3 : 3) / (Math.max(1, 8))}`));
         homeinactiveb = [((mimoG ? 1 : 5) * parseInt(`${materialu}`))];
      if ((encryptorE + 2.42) >= 5.20 || 2 >= (parseInt(`${encryptorE}`) + storeC.size)) {
         storeC = new Map([[`${catalogV.size}`, catalogV.size >> (Math.min(2, Math.abs(parseInt(`${minimizeQ}`))))]]);
      }
         catalogV.set(`${minimizeQ}`, 3);
      let infoa = 9474814.0 >= encryptorE;
      do {
          let phoneshareo = 1.0;
          let infos = false;
          let predictionbannershared6 = 2.0;
          let libreactnativejniT = String.fromCharCode(102,95,55,51,95,100,105,115,99,117,115,115,105,111,110,0);
          let downN = true;
         encryptorE *= parseInt(`${predictionbannershared6}`) * 3;
         phoneshareo /= Math.max(1, ((downN ? 4 : 3)));
         infos = phoneshareo >= 32.43;
         predictionbannershared6 -= parseFloat(`${1 + libreactnativejniT.length}`);
         libreactnativejniT = `${((downN ? 2 : 1))}`;
         if (infoa) {
            break;
         }
      } while ((2.46 == (encryptorE / 3.86) || 1 == (parseInt(`${encryptorE}`) / (Math.max(storeC.size, 3)))) && infoa);
       let malaysiao = true;
       let imagesr = true;
      let awayr = imagesr ? !imagesr : imagesr;
      do {
         imagesr = iconwatchnowy > 75.3;
         if (awayr) {
            break;
         }
      } while (awayr && (4 > catalogV.size));
      for (let h = 0; h < 3; h++) {
         minimizeQ *= parseFloat(`${parseInt(`${iconwatchnowy}`) % 2}`);
      }
      if (4 < (parseInt(`${minimizeQ}`) * catalogV.size) || (minimizeQ * 4.10) < 1.14) {
          let forwarde = String.fromCharCode(116,95,52,55,95,115,112,101,99,116,105,109,101,0);
          let basketballmatchdetailbgB = 1.0;
          let iconqqv = 2;
          let shootyesgoal4 = false;
         minimizeQ *= (parseFloat(`${forwarde == String.fromCharCode(55,0) ? forwarde.length : parseInt(`${basketballmatchdetailbgB}`)}`));
         basketballmatchdetailbgB /= Math.max(iconqqv, 2);
         iconqqv ^= iconqqv >> (Math.min(1, Math.abs(2)));
         shootyesgoal4 = iconqqv > 100;
      }
      let selectedf = malaysiao ? !malaysiao : malaysiao;
      do {
         malaysiao = 23.88 > iconwatchnowy || !malaysiao;
         if (selectedf) {
            break;
         }
      } while ((!malaysiao || !imagesr) && selectedf);
          let greytickb: Map<any, any> = new Map([[String.fromCharCode(114,101,115,112,111,110,100,101,114,95,102,95,49,54,0),true ], [String.fromCharCode(98,97,107,101,95,49,95,56,0),true ], [String.fromCharCode(118,99,111,100,101,99,95,115,95,56,49,0),false ]]);
          let roundw: Array<any> = [670, 296];
         malaysiao = imagesr;
         greytickb.set(`${roundw.length}`, roundw.length | 2);
      hooksL += `${parseInt(`${encryptorE}`)}`;
   }
        setMembershipProducts(subscription);

   if (5 <= (1 + circle9.size) || (circle9.size + 1) <= 3) {
       let styleH = String.fromCharCode(122,95,49,54,95,112,114,101,100,105,99,116,111,114,0);
       let rightN = String.fromCharCode(116,95,51,95,97,116,111,102,0);
       let googleo = String.fromCharCode(112,114,97,103,109,97,95,121,95,57,56,0);
       let predictionarroww = true;
      let defaultroombgh = 5282667 >= googleo.length;
      do {
         googleo += "3";
         if (defaultroombgh) {
            break;
         }
      } while (defaultroombgh && (1 >= googleo.length));
       let single0 = 0.0;
         predictionarroww = 32.6 == single0 && predictionarroww;
         rightN += `${googleo.length}`;
         googleo = `${parseInt(`${single0}`)}`;
      for (let z = 0; z < 1; z++) {
         googleo = `${(String.fromCharCode(103,0) == rightN ? rightN.length : parseInt(`${single0}`))}`;
      }
         single0 += parseInt(`${single0}`) + 3;
          let mapbuffern: Map<any, any> = new Map([[String.fromCharCode(115,119,105,99,104,95,53,95,54,0),754], [String.fromCharCode(104,95,53,51,95,99,111,109,98,101,100,0),958], [String.fromCharCode(120,95,56,49,95,99,104,97,110,103,101,100,104,0),674]]);
         googleo += `${2 * styleH.length}`;
         mapbuffern = new Map([[`${mapbuffern.size}`, mapbuffern.size]]);
         rightN += "2";
       let arrowf = 0;
       let mbridget = 5;
         predictionarroww = ((googleo.length + (predictionarroww ? googleo.length : 7)) == 7);
      for (let p = 0; p < 1; p++) {
         arrowf /= Math.max(3, parseInt(`${single0}`) << (Math.min(styleH.length, 5)));
      }
      snewsD = "3";
   }
        setTimeout(() => {

       let confirmations: Map<any, any> = new Map([[String.fromCharCode(108,95,49,48,95,116,101,108,101,103,114,97,112,104,0),994], [String.fromCharCode(110,111,110,110,111,114,109,97,116,105,118,101,95,105,95,53,54,0),974], [String.fromCharCode(100,95,55,51,95,112,114,101,115,117,98,109,105,116,0),699]]);
       let iconarrowrightorangeP = 1.0;
       let whitevideolive6: Map<any, any> = new Map([[String.fromCharCode(116,114,99,95,114,95,52,49,0),891], [String.fromCharCode(112,105,112,101,95,48,95,54,56,0),853]]);
      while (4.82 <= (iconarrowrightorangeP * 4.29) || (parseInt(`${iconarrowrightorangeP}`) * confirmations.size) <= 1) {
          let cancelt = true;
          let penaltymatchiconv = 3.0;
          let basef = String.fromCharCode(103,95,57,54,95,116,104,101,0);
          let utilsA: Map<any, any> = new Map([[String.fromCharCode(113,95,55,55,95,97,100,103,114,111,117,112,0),true ], [String.fromCharCode(98,95,50,48,95,100,105,109,105,115,115,0),true ]]);
          let lnewsM = String.fromCharCode(111,95,53,95,99,111,110,115,116,114,97,105,110,0);
         iconarrowrightorangeP += (parseFloat(`${3 % (Math.max(9, (cancelt ? 1 : 3)))}`));
         cancelt = (penaltymatchiconv + parseFloat(`${basef.length}`)) == 64.57;
         penaltymatchiconv *= (parseFloat(`${String.fromCharCode(110,0) == basef ? parseInt(`${penaltymatchiconv}`) : basef.length}`));
         utilsA = new Map([[lnewsM, parseInt(`${penaltymatchiconv}`)]]);
         lnewsM += `${utilsA.size}`;
         break;
      }
       let classes4 = String.fromCharCode(102,117,122,122,95,101,95,50,55,0);
       let benefitt = String.fromCharCode(109,95,56,48,0);
       let malaysiar = 4;
         malaysiar |= parseInt(`${iconarrowrightorangeP}`) << (Math.min(Math.abs(2), 3));
          let libhermesC = String.fromCharCode(110,97,116,117,114,97,108,0);
         whitevideolive6.set(benefitt, 2 >> (Math.min(5, benefitt.length)));
         libhermesC = `${libhermesC.length - 2}`;
         malaysiar >>= Math.min(Math.abs(1), 2);
         malaysiar &= 3;
         benefitt += `${confirmations.size ^ 2}`;
      if (!Array.from(whitevideolive6.keys()).includes(`${malaysiar}`)) {
         malaysiar |= whitevideolive6.size ^ 3;
      }
      snewsD += `${whitevideolive6.size & analyticsL.length}`;
          setFetching(false);
        }, 1000);
      }
    } else {

       let predictionarrowL = String.fromCharCode(112,97,103,101,115,101,101,107,95,104,95,49,51,0);
       let middle6: Array<any> = [230, 622, 821];
       let username3 = 3.0;
      if ((middle6.length * username3) == 5.100) {
         username3 += 1;
      }
         middle6.push(1);
      while (middle6.length < username3) {
          let basketballicony = String.fromCharCode(111,95,49,50,95,99,108,97,115,115,105,102,115,0);
          let auto_qz8: Array<any> = [79, 356, 431];
          let splashO = 3.0;
          let rulesO: Array<any> = [902, 948, 63];
          let predictionarrowd = 3.0;
         username3 -= basketballicony.length | 2;
         basketballicony = `${parseInt(`${splashO}`)}`;
         auto_qz8.push(2);
         splashO /= Math.max(2 >> (Math.min(Math.abs(parseInt(`${predictionarrowd}`)), 2)), 2);
         rulesO.push(3 >> (Math.min(4, auto_qz8.length)));
         predictionarrowd += 1;
         break;
      }
          let libswscaleF = true;
          let splashF = false;
          let cricketx: Map<any, any> = new Map([[String.fromCharCode(114,101,97,100,105,110,105,116,95,117,95,49,0),268], [String.fromCharCode(107,95,55,95,110,111,110,110,117,108,108,105,110,99,111,109,105,110,103,0),782], [String.fromCharCode(116,116,97,101,110,99,100,115,112,95,101,95,56,52,0),525]]);
         middle6.push(((libswscaleF ? 1 : 1) + parseInt(`${username3}`)));
         libswscaleF = ((cricketx.size + (splashF ? cricketx.size : 22)) <= 56);
         splashF = cricketx.size == 97 && !splashF;
      let paginationq = 9546183 <= middle6.length;
      do {
          let unselectedV = String.fromCharCode(102,95,56,57,95,121,118,116,111,121,117,121,0);
          let iconqqp = 0.0;
          let viewer_ = false;
         middle6.push(parseInt(`${username3}`) - unselectedV.length);
         unselectedV = `${((viewer_ ? 4 : 1) ^ parseInt(`${iconqqp}`))}`;
         iconqqp *= parseFloat(`${1 ^ parseInt(`${iconqqp}`)}`);
         viewer_ = 44.43 < iconqqp;
         if (paginationq) {
            break;
         }
      } while (((middle6.length | 3) <= 4) && paginationq);
      for (let g = 0; g < 1; g++) {
         username3 += parseInt(`${username3}`);
      }
         username3 += middle6.length + predictionarrowL.length;
         predictionarrowL = `${predictionarrowL.length}`;
          let sliderI: Array<any> = [483, 434];
         middle6.push((String.fromCharCode(55,0) == predictionarrowL ? parseInt(`${username3}`) : predictionarrowL.length));
         sliderI = [sliderI.length >> (Math.min(Math.abs(3), 5))];
      circle9.set(hooksL, 2 << (Math.min(3, predictionarrowL.length)));
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

   for (let r = 0; r < 2; r++) {
      analyticsL = "3";
   }

        

      defaultprofilepicm += `${((iconbackwhited ? 3 : 4))}`;
        const index12Months = siFang.findIndex(
          (item) => item.title === "12个月"
        );

       let confirmationk = 0.0;
       let libreactperfloggerjnic = 0.0;
       let pingL: Map<any, any> = new Map([[String.fromCharCode(106,95,51,48,95,109,111,110,105,116,111,114,105,110,103,0),94], [String.fromCharCode(116,114,97,110,115,102,101,114,95,56,95,53,49,0),839]]);
       let helper8: Map<any, any> = new Map([[String.fromCharCode(114,101,99,101,110,116,101,114,95,103,95,55,0),true ], [String.fromCharCode(111,95,53,51,95,102,105,110,101,0),false ]]);
          let private_fN = false;
         pingL = new Map([[`${pingL.size}`, parseInt(`${confirmationk}`) * pingL.size]]);
         private_fN = (!private_fN ? !private_fN : !private_fN);
          let vietnamU: Map<any, any> = new Map([[String.fromCharCode(111,109,112,108,105,99,97,116,105,111,110,95,103,95,54,50,0),618], [String.fromCharCode(115,95,48,95,99,111,111,107,0),907], [String.fromCharCode(100,95,51,52,95,100,97,116,97,0),802]]);
         confirmationk += parseInt(`${libreactperfloggerjnic}`);
         vietnamU.set(`${vietnamU.size}`, vietnamU.size + 2);
         pingL = new Map([[`${confirmationk}`, parseInt(`${libreactperfloggerjnic}`) % 2]]);
      for (let c = 0; c < 2; c++) {
         pingL = new Map([[`${helper8.size}`, parseInt(`${libreactperfloggerjnic}`) / 1]]);
      }
         confirmationk += parseInt(`${confirmationk}`) + pingL.size;
      snewsD = `${snewsD.length}`;

        

   let eabafadfadddbafeddddeeefeaafj = circle9.size >= 8803344;
   do {
      circle9 = new Map([[tumbnailN, 3 & tumbnailN.length]]);
      if (eabafadfadddbafeddddeeefeaafj) {
         break;
      }
   } while ((4 <= (2 << (Math.min(1, Math.abs(circle9.size)))) && (2 << (Math.min(5, Math.abs(circle9.size)))) <= 4) && eabafadfadddbafeddddeeefeaafj);
        if (index12Months !== -1) {

       let plusG = 0;
       let inactiveB = 5.0;
      while (1.66 > (inactiveB * 3.63) || 3 > (plusG % 3)) {
         inactiveB /= Math.max(parseFloat(`${plusG}`), 3);
         break;
      }
      if (4 <= plusG) {
         plusG %= Math.max(2, 4);
      }
      favicont += hooksL.length;
          const item12Months = siFang.splice(index12Months, 1)[0];

      analyticsL += `${((libfbn ? 5 : 1))}`;
          siFang.unshift(item12Months);
        }

        

   for (let r = 0; r < 1; r++) {
       let moduled = 5.0;
       let chatroombackgroundI = String.fromCharCode(110,95,52,56,95,104,114,101,97,100,0);
       let greenb = false;
         chatroombackgroundI += "1";
      for (let m = 0; m < 1; m++) {
         moduled /= Math.max(parseFloat(`${chatroombackgroundI.length << (Math.min(Math.abs(3), 3))}`), 2);
      }
          let helper4 = String.fromCharCode(114,95,55,51,95,104,102,108,105,112,0);
         chatroombackgroundI = "1";
         helper4 = `${(helper4 == String.fromCharCode(100,0) ? helper4.length : helper4.length)}`;
      for (let f = 0; f < 3; f++) {
          let iconarrowrightwhitew = String.fromCharCode(117,95,54,53,95,115,117,98,116,114,97,99,116,105,110,103,0);
          let iconedit8: Map<any, any> = new Map([[String.fromCharCode(109,101,109,106,114,110,108,95,106,95,54,50,0),803], [String.fromCharCode(115,95,51,48,95,122,101,114,111,122,101,114,111,0),359], [String.fromCharCode(97,95,56,53,95,117,110,100,101,114,101,115,116,105,109,97,116,101,100,0),537]]);
          let reactnavigationW = String.fromCharCode(97,117,116,111,102,105,108,108,95,54,95,53,0);
          let b_counte = String.fromCharCode(98,95,51,56,95,109,101,103,97,98,121,116,101,0);
          let leakcheckerd = 5;
         greenb = (iconarrowrightwhitew.length << (Math.min(2, Math.abs(iconedit8.size)))) >= 7;
         iconarrowrightwhitew += `${leakcheckerd}`;
         iconedit8.set(`${leakcheckerd}`, 2);
         reactnavigationW += `${reactnavigationW.length}`;
         b_counte = `${reactnavigationW.length * 2}`;
      }
          let moreI = 3.0;
         chatroombackgroundI += `${parseInt(`${moreI}`) - 3}`;
      if (!greenb) {
          let kuaishouL: Map<any, any> = new Map([[String.fromCharCode(110,117,108,108,105,102,95,104,95,49,55,0),638], [String.fromCharCode(121,95,51,48,95,114,111,108,108,0),218], [String.fromCharCode(118,95,51,57,95,99,111,110,116,114,111,108,108,101,114,115,0),180]]);
          let baselinem = 4.0;
          let mbbidw = true;
          let gradle7 = true;
         greenb = moduled == 100.67;
         kuaishouL = new Map([[`${baselinem}`, ((mbbidw ? 1 : 3) >> (Math.min(Math.abs(parseInt(`${baselinem}`)), 4)))]]);
         mbbidw = kuaishouL.size <= 46 && gradle7;
         gradle7 = 88.44 >= baselinem;
      }
         chatroombackgroundI = `${(3 & (greenb ? 3 : 4))}`;
      while (1.23 <= (parseFloat(`${chatroombackgroundI.length}`) - moduled) || (chatroombackgroundI.length % 1) <= 4) {
          let iconclosewhitet = 2.0;
         chatroombackgroundI = `${3 >> (Math.min(3, chatroombackgroundI.length))}`;
         iconclosewhitet -= parseFloat(`${3 + parseInt(`${iconclosewhitet}`)}`);
         break;
      }
      while (4.52 == (moduled * 4.91) && (chatroombackgroundI.length * parseInt(`${moduled}`)) == 2) {
         moduled *= parseFloat(`${chatroombackgroundI.length - 2}`);
         break;
      }
      snewsD += "1";
   }
        

   for (let v = 0; v < 2; v++) {
       let redirectN = String.fromCharCode(110,95,49,56,95,104,97,112,113,97,0);
       let kickX = String.fromCharCode(117,110,108,105,109,105,116,101,100,95,48,95,53,56,0);
         redirectN += `${3 + kickX.length}`;
       let streamingm: Map<any, any> = new Map([[String.fromCharCode(112,95,51,53,95,101,110,116,105,116,105,101,115,0),83], [String.fromCharCode(122,95,54,56,95,101,118,101,114,121,98,111,100,121,0),956], [String.fromCharCode(113,95,57,95,98,108,111,99,107,115,0),91]]);
         redirectN += `${redirectN.length}`;
      for (let a = 0; a < 3; a++) {
         streamingm = new Map([[`${streamingm.size}`, (kickX == String.fromCharCode(103,0) ? kickX.length : streamingm.size)]]);
      }
      while (1 <= (redirectN.length | streamingm.size) && (streamingm.size | 1) <= 2) {
         streamingm.set(`${kickX}`, 1 & streamingm.size);
         break;
      }
          let mapping7 = 2.0;
          let dycreator4 = String.fromCharCode(110,95,50,56,95,105,116,108,101,0);
          let defaultprofilepicx: Map<any, any> = new Map([[String.fromCharCode(97,118,111,112,116,105,111,110,115,95,110,95,51,53,0),996], [String.fromCharCode(100,95,54,95,115,105,110,101,119,105,110,0),324]]);
         streamingm = new Map([[kickX, (String.fromCharCode(78,0) == redirectN ? kickX.length : redirectN.length)]]);
         mapping7 *= parseInt(`${mapping7}`) / (Math.max(8, dycreator4.length));
         dycreator4 = `${dycreator4.length}`;
         defaultprofilepicx = new Map([[`${defaultprofilepicx.size}`, 2 ^ dycreator4.length]]);
      favicont += hooksL.length & parseInt(`${nativemoduleN}`);
   }
        setMembershipProducts(siFang);

      hooksL = `${(String.fromCharCode(112,0) == defaultprofilepicm ? defaultprofilepicm.length : manifestk.length)}`;
        setTimeout(() => {

   for (let a = 0; a < 1; a++) {
      manifestk += `${tumbnailN.length}`;
   }
          setFetching(false);
        }, 1000);
      }
    }
  };

  const handleGetGoogleProduct = async () => {
       let libavcodecu: Array<any> = [168, 165];
    let bootsplashI: Array<any> = [662, 13, 713];
    let mbbidJ: Array<any> = [267, 604, 325];
    let auto_vh = 4.0;
    let matchdetailbg9 = false;
    let libfileN = 4.0;
    let agreemente: Array<any> = [497, 279];
    let pnewarchdefaultsT = String.fromCharCode(106,95,50,51,95,109,97,110,97,103,101,97,98,108,101,0);
    let gifgoalbgs: Array<any> = [String.fromCharCode(122,98,105,110,95,52,95,52,55,0), String.fromCharCode(105,110,117,115,101,95,55,95,53,48,0), String.fromCharCode(121,95,52,55,95,100,117,114,98,105,110,0)];
    let iconcloseB = String.fromCharCode(108,117,109,98,101,114,106,97,99,107,95,51,95,52,51,0);
    let smallH: Array<any> = [531, 252, 329];
    let iconscheduleS = 1;
    let mailU = 4.0;
    let blackr = String.fromCharCode(105,100,99,105,110,95,100,95,56,52,0);
    let placementJ = 3;
    let pressure1 = String.fromCharCode(119,97,108,108,97,112,101,114,115,95,116,95,52,53,0);
    let iconqqm = String.fromCharCode(113,95,54,54,0);
   while (iconcloseB.includes(`${mbbidJ.length}`)) {
      iconcloseB = `${bootsplashI.length}`;
      break;
   }
      pnewarchdefaultsT += `${smallH.length}`;
   let libjsijniprofilerT = 5449361 <= smallH.length;
   do {
      smallH = [((matchdetailbg9 ? 4 : 3) ^ mbbidJ.length)];
      if (libjsijniprofilerT) {
         break;
      }
   } while ((!bootsplashI.includes(smallH.length)) && libjsijniprofilerT);
       let aboutZ = String.fromCharCode(102,114,97,110,100,111,109,95,119,95,53,48,0);
      while (aboutZ == aboutZ) {
         aboutZ += `${aboutZ.length}`;
         break;
      }
          let condensedZ = String.fromCharCode(115,95,57,48,95,112,111,108,121,107,101,121,0);
          let casting6: Array<any> = [String.fromCharCode(99,95,52,56,95,97,105,116,101,114,0), String.fromCharCode(109,105,120,101,100,95,110,95,49,54,0), String.fromCharCode(102,95,51,53,95,97,103,103,114,101,103,97,116,111,114,0)];
          let mbridgew = 4.0;
         aboutZ = `${2 >> (Math.min(1, casting6.length))}`;
         condensedZ = `${parseInt(`${mbridgew}`) - 1}`;
         casting6.push(1 + parseInt(`${mbridgew}`));
      for (let l = 0; l < 1; l++) {
          let privilegeK = 2.0;
          let arear = String.fromCharCode(103,95,50,55,95,100,111,110,97,116,105,111,110,0);
          let klevinU = String.fromCharCode(101,105,103,104,116,95,52,95,54,51,0);
         aboutZ = `${arear.length}`;
         privilegeK *= parseFloat(`${parseInt(`${privilegeK}`)}`);
         arear += `${parseInt(`${privilegeK}`) - klevinU.length}`;
         klevinU = `${parseInt(`${privilegeK}`) % (Math.max(9, klevinU.length))}`;
      }
      iconcloseB = `${2 >> (Math.min(1, libavcodecu.length))}`;
      pnewarchdefaultsT += `${parseInt(`${auto_vh}`) ^ parseInt(`${libfileN}`)}`;
      smallH = [mbbidJ.length];
      gifgoalbgs = [pnewarchdefaultsT.length];
   let formw = 6246214 <= iconscheduleS;
   do {
      iconscheduleS <<= Math.min(1, Math.abs(gifgoalbgs.length % 1));
      if (formw) {
         break;
      }
   } while ((mbbidJ.includes(iconscheduleS)) && formw);

    try {
      await getProducts({ skus: iap_skus });
      await getSubscriptions({ skus: subs_skus });
    } catch (err) {

   let targetF = 5546941 >= mbbidJ.length;
   do {
      mbbidJ = [3];
      if (targetF) {
         break;
      }
   } while (targetF && ((mbbidJ.length >> (Math.min(agreemente.length, 3))) < 2));
      agreemente = [(parseInt(`${libfileN}`) << (Math.min(4, Math.abs((matchdetailbg9 ? 5 : 4)))))];
   let about2 = 5148241 >= libavcodecu.length;
   do {
      libavcodecu.push(3 - parseInt(`${mailU}`));
      if (about2) {
         break;
      }
   } while (about2 && (libavcodecu.length > gifgoalbgs.length));
   while ((pnewarchdefaultsT.length + 1) >= 1) {
       let target9 = 5;
      let imagenetworkerr7 = 5143067 <= target9;
      do {
         target9 ^= target9;
         if (imagenetworkerr7) {
            break;
         }
      } while ((2 < (target9 ^ target9) || 2 < (target9 ^ target9)) && imagenetworkerr7);
         target9 ^= target9 % (Math.max(3, target9));
      while (4 == (target9 | 3) || (3 | target9) == 1) {
         target9 /= Math.max(5, target9 & 2);
         break;
      }
      mailU /= Math.max(4, gifgoalbgs.length / 1);
      break;
   }
   let hometeamfieldY = matchdetailbg9 ? !matchdetailbg9 : matchdetailbg9;
   do {
      matchdetailbg9 = 90 <= mbbidJ.length;
      if (hometeamfieldY) {
         break;
      }
   } while (hometeamfieldY && (blackr.length <= 4));
      gifgoalbgs = [libavcodecu.length % 2];
   for (let f = 0; f < 1; f++) {
      pnewarchdefaultsT += `${agreemente.length >> (Math.min(pnewarchdefaultsT.length, 5))}`;
   }
       let tempnodataz = 0;
         tempnodataz += tempnodataz;
         tempnodataz += tempnodataz & tempnodataz;
      for (let y = 0; y < 2; y++) {
         tempnodataz |= tempnodataz - 3;
      }
      libavcodecu.push(mbbidJ.length);
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
       let long_jh = String.fromCharCode(109,95,54,48,95,112,114,101,101,109,112,104,0);
    let connectionb = 1;
    let acceptedQ = 3.0;
    let notificationfillemptyY: Map<any, any> = new Map([[String.fromCharCode(99,111,110,103,95,54,95,50,55,0),319], [String.fromCharCode(119,95,52,57,95,99,97,108,105,110,103,0),128]]);
    let user8 = String.fromCharCode(103,101,116,99,114,101,100,95,116,95,54,56,0);
    let memberh = String.fromCharCode(98,95,56,51,95,109,117,116,101,100,0);
    let iconsharefriends1 = String.fromCharCode(99,95,52,50,95,101,99,116,97,110,103,108,101,0);
    let iconorientationd: Map<any, any> = new Map([[String.fromCharCode(120,112,116,97,98,108,101,95,110,95,56,51,0),String.fromCharCode(99,97,108,108,111,99,95,52,95,53,52,0)], [String.fromCharCode(112,117,116,115,95,48,95,51,54,0),String.fromCharCode(100,105,97,109,101,116,101,114,95,122,95,57,56,0)], [String.fromCharCode(121,95,55,48,95,112,117,109,112,0),String.fromCharCode(120,95,53,50,95,100,117,112,108,105,99,97,116,101,115,0)]]);
    let activityW: Array<any> = [732, 924];
    let predictionbuttonY = 4.0;
    let iconsaveimage1 = false;
    let applicationm = true;
    let statisticsb: Map<any, any> = new Map([[String.fromCharCode(97,97,99,116,97,98,95,50,95,57,49,0),902], [String.fromCharCode(100,105,115,99,111,114,100,95,49,95,57,0),808], [String.fromCharCode(111,110,116,111,95,118,95,52,49,0),555]]);
    let pageD = 2;
   for (let i = 0; i < 3; i++) {
      iconsharefriends1 = `${1 ^ notificationfillemptyY.size}`;
   }

    

   for (let k = 0; k < 2; k++) {
      user8 = `${3 << (Math.min(2, Math.abs(iconorientationd.size)))}`;
   }
    

   for (let u = 0; u < 1; u++) {
      notificationfillemptyY = new Map([[`${iconsaveimage1}`, (parseInt(`${acceptedQ}`) >> (Math.min(3, Math.abs((iconsaveimage1 ? 2 : 3)))))]]);
   }
    

       let reddownarrowB = 1;
       let gradlewT = 0;
       let libhermesR = 0.0;
          let sharewhitep = 3.0;
          let dycreator3 = String.fromCharCode(122,95,57,52,95,97,112,115,0);
          let videojsM = false;
         libhermesR += dycreator3.length;
         sharewhitep *= parseFloat(`${3 * parseInt(`${sharewhitep}`)}`);
         dycreator3 += `${parseInt(`${sharewhitep}`) << (Math.min(Math.abs(parseInt(`${sharewhitep}`)), 3))}`;
         gradlewT %= Math.max(2, parseInt(`${libhermesR}`) >> (Math.min(4, Math.abs(2))));
         libhermesR += 3 + reddownarrowB;
      for (let j = 0; j < 2; j++) {
         gradlewT ^= parseInt(`${libhermesR}`) + 1;
      }
      if (4 >= (gradlewT / (Math.max(parseInt(`${libhermesR}`), 5))) && 5 >= (gradlewT % 4)) {
         gradlewT /= Math.max(5, parseInt(`${libhermesR}`) - gradlewT);
      }
          let stringsh: Map<any, any> = new Map([[String.fromCharCode(116,117,112,108,101,95,111,95,55,49,0),String.fromCharCode(112,95,57,54,95,115,99,104,101,100,117,108,105,110,103,0)], [String.fromCharCode(117,110,98,108,111,99,107,95,101,95,49,48,0),String.fromCharCode(113,95,54,51,95,112,97,114,116,121,0)], [String.fromCharCode(100,95,55,53,95,99,111,117,110,116,101,100,0),String.fromCharCode(99,111,109,109,105,115,115,105,111,110,95,117,95,57,0)]]);
          let libruntimeexecutor7 = 1.0;
          let internet7 = 3.0;
         reddownarrowB &= reddownarrowB;
         stringsh = new Map([[`${stringsh.size}`, stringsh.size * 1]]);
         libruntimeexecutor7 /= Math.max(3, parseInt(`${internet7}`) / (Math.max(5, parseInt(`${libruntimeexecutor7}`))));
         internet7 += stringsh.size;
      while (2 < reddownarrowB) {
         gradlewT |= gradlewT;
         break;
      }
         reddownarrowB &= gradlewT;
      for (let n = 0; n < 3; n++) {
         reddownarrowB |= reddownarrowB % 1;
      }
      memberh += `${parseInt(`${predictionbuttonY}`) % (Math.max(user8.length, 6))}`;
    

   let shoot9 = predictionbuttonY <= 6303232.0;
   do {
       let largeq: Array<any> = [917, 110];
       let save9 = 3.0;
       let pause1 = 3.0;
       let collectionI = String.fromCharCode(99,97,112,97,99,105,116,121,95,55,95,49,50,0);
         largeq.push(parseInt(`${pause1}`));
         pause1 += parseFloat(`${parseInt(`${save9}`) / (Math.max(largeq.length, 1))}`);
         save9 /= Math.max(1, parseFloat(`${parseInt(`${pause1}`)}`));
         save9 -= parseFloat(`${parseInt(`${pause1}`)}`);
      let mimem = pause1 >= 6565429.0;
      do {
         pause1 -= parseFloat(`${largeq.length | parseInt(`${save9}`)}`);
         if (mimem) {
            break;
         }
      } while ((1.10 <= (save9 * pause1)) && mimem);
      if (3.95 == (save9 / (Math.max(9, parseFloat(`${collectionI.length}`))))) {
         save9 -= parseFloat(`${parseInt(`${save9}`)}`);
      }
       let cedbadcebfbfbfbcfecbcq: Map<any, any> = new Map([[String.fromCharCode(101,95,52,56,95,115,117,98,112,97,99,107,101,116,0),55], [String.fromCharCode(97,95,49,48,95,97,115,121,110,99,0),648]]);
          let toponU = String.fromCharCode(100,95,49,49,95,114,97,110,107,105,110,103,115,0);
         pause1 += parseFloat(`${toponU.length % (Math.max(3, 6))}`);
      let nterstitialb = pause1 >= 6374552.0;
      do {
         pause1 -= parseFloat(`${2 - largeq.length}`);
         if (nterstitialb) {
            break;
         }
      } while (nterstitialb && (pause1 <= parseFloat(`${largeq.length}`)));
         save9 /= Math.max(3, parseFloat(`${largeq.length - 3}`));
      if ((collectionI.length >> (Math.min(Math.abs(1), 4))) <= 1) {
          let stylesV: Array<any> = [581, 663, 854];
          let k_positiont = 3.0;
          let currentE = true;
         pause1 /= Math.max(1, parseFloat(`${cedbadcebfbfbfbcfecbcq.size << (Math.min(Math.abs(3), 4))}`));
         stylesV.push(parseInt(`${k_positiont}`) >> (Math.min(1, Math.abs(3))));
         k_positiont *= parseFloat(`${1}`);
         currentE = (((currentE ? 22 : stylesV.length) | stylesV.length) >= 22);
      }
      for (let k = 0; k < 1; k++) {
         collectionI = `${largeq.length << (Math.min(2, Math.abs(parseInt(`${save9}`))))}`;
      }
      predictionbuttonY /= Math.max(4, parseFloat(`${1}`));
      if (shoot9) {
         break;
      }
   } while (((4 * activityW.length) >= 2) && shoot9);
    

   while (!memberh.includes(`${acceptedQ}`)) {
      memberh = `${notificationfillemptyY.size ^ parseInt(`${predictionbuttonY}`)}`;
      break;
   }

    

   let topicB = predictionbuttonY <= 9625979.0;
   do {
      predictionbuttonY *= parseFloat(`${long_jh.length}`);
      if (topicB) {
         break;
      }
   } while (topicB && (4.93 < (acceptedQ / 4.20) || 2.3 < (predictionbuttonY - 4.20)));
    

      long_jh += `${((iconsaveimage1 ? 1 : 2) & long_jh.length)}`;
    setIsBtnEnable(false);

   if (5 >= activityW.length) {
       let iconsettingb = 2.0;
       let middlewarev: Array<any> = [539, 353, 495];
       let icondefaultthumbnailv = 0.0;
       let modityZ: Map<any, any> = new Map([[String.fromCharCode(112,114,111,103,114,97,109,115,95,50,95,49,51,0),false ], [String.fromCharCode(99,95,51,55,95,102,112,99,0),false ]]);
         icondefaultthumbnailv -= parseFloat(`${parseInt(`${iconsettingb}`) | 2}`);
         middlewarev = [2];
      if ((icondefaultthumbnailv - 3.0) <= 4.13 || (3.0 * icondefaultthumbnailv) <= 2.11) {
         icondefaultthumbnailv /= Math.max(4, parseFloat(`${1 << (Math.min(4, Math.abs(parseInt(`${iconsettingb}`))))}`));
      }
      while ((iconsettingb / 3.0) >= 1.47) {
          let smallorangemanC = String.fromCharCode(114,101,99,111,110,115,116,114,117,99,116,101,100,95,57,95,56,57,0);
          let reads = 2;
          let settingy: Array<any> = [420, 232];
          let thailand9: Map<any, any> = new Map([[String.fromCharCode(104,95,53,51,95,115,99,114,101,101,110,99,97,115,116,0),474], [String.fromCharCode(98,97,108,97,110,99,101,115,95,99,95,54,49,0),174]]);
         iconsettingb -= parseFloat(`${parseInt(`${iconsettingb}`) / (Math.max(settingy.length, 4))}`);
         smallorangemanC += `${thailand9.size}`;
         reads >>= Math.min(3, smallorangemanC.length);
         settingy.push(reads);
         thailand9.set(`${reads}`, 2);
         break;
      }
      while ((parseFloat(`${modityZ.size}`) * icondefaultthumbnailv) >= 1.2 && (icondefaultthumbnailv * parseFloat(`${modityZ.size}`)) >= 1.2) {
         icondefaultthumbnailv /= Math.max(1, parseFloat(`${2}`));
         break;
      }
          let topicO: Array<any> = [String.fromCharCode(110,117,109,98,101,114,95,53,95,57,53,0), String.fromCharCode(101,120,112,110,97,100,101,100,95,97,95,54,52,0), String.fromCharCode(114,95,54,56,95,115,110,97,112,115,104,111,116,115,0)];
          let homeinactives = String.fromCharCode(116,114,97,110,115,99,116,105,111,110,95,100,95,48,0);
         middlewarev = [parseInt(`${iconsettingb}`)];
         topicO = [(String.fromCharCode(52,0) == homeinactives ? topicO.length : homeinactives.length)];
       let application_ = true;
       let animationL = false;
      for (let z = 0; z < 1; z++) {
          let utilsO: Map<any, any> = new Map([[String.fromCharCode(99,111,110,110,101,99,116,115,95,98,95,49,0),810], [String.fromCharCode(115,105,122,101,115,95,117,95,57,48,0),645]]);
          let math7 = String.fromCharCode(111,117,116,115,105,100,101,95,122,95,56,52,0);
          let neonc = String.fromCharCode(117,95,50,57,95,109,111,100,101,120,112,0);
          let e_player8 = String.fromCharCode(110,95,53,48,95,97,117,116,104,111,114,105,122,101,100,0);
          let reminder_ = 1;
         animationL = (((!application_ ? neonc.length : 31) * neonc.length) <= 31);
         utilsO.set(`${math7}`, math7.length - 3);
         e_player8 = `${utilsO.size / (Math.max(math7.length, 9))}`;
         reminder_ -= e_player8.length ^ math7.length;
      }
         iconsettingb /= Math.max(parseFloat(`${parseInt(`${icondefaultthumbnailv}`) - 3}`), 4);
          let dark_ = String.fromCharCode(112,117,98,101,120,112,95,54,95,51,53,0);
          let gradlev: Map<any, any> = new Map([[String.fromCharCode(110,111,105,115,101,115,95,100,95,50,53,0),String.fromCharCode(110,95,55,52,95,99,111,110,118,101,114,103,101,110,99,101,0)], [String.fromCharCode(107,95,56,50,95,108,111,99,97,108,108,121,0),String.fromCharCode(116,95,49,48,95,105,110,105,116,97,108,0)]]);
          let iconmoreB: Array<any> = [408, 67];
         iconsettingb -= parseFloat(`${parseInt(`${icondefaultthumbnailv}`)}`);
         dark_ += "3";
         gradlev = new Map([[`${gradlev.size}`, 3]]);
         iconmoreB = [gradlev.size | 3];
         icondefaultthumbnailv *= (parseFloat(`${(application_ ? 1 : 4) % (Math.max(parseInt(`${iconsettingb}`), 8))}`));
      let reward4 = animationL ? !animationL : animationL;
      do {
         animationL = icondefaultthumbnailv >= 44.12 || 77 >= middlewarev.length;
         if (reward4) {
            break;
         }
      } while (reward4 && (iconsettingb == 3.13));
      acceptedQ *= (parseFloat(`${String.fromCharCode(100,0) == iconsharefriends1 ? iconsharefriends1.length : parseInt(`${icondefaultthumbnailv}`)}`));
   }
    try {

   for (let w = 0; w < 3; w++) {
      memberh += "1";
   }
      setIsVisible(true);

   while (iconsaveimage1) {
       let uimanagerU = String.fromCharCode(119,111,114,107,115,95,119,95,57,54,0);
       let iconwatchnown = String.fromCharCode(98,105,110,100,101,114,95,110,95,51,52,0);
       let videocommonn = 0;
          let homeJ: Map<any, any> = new Map([[String.fromCharCode(119,95,50,51,95,108,111,116,115,0),String.fromCharCode(117,121,118,121,95,108,95,49,54,0)], [String.fromCharCode(109,95,55,52,95,100,101,108,116,97,0),String.fromCharCode(112,116,115,95,117,95,51,54,0)], [String.fromCharCode(110,95,57,95,98,106,101,99,116,0),String.fromCharCode(115,104,111,119,115,95,97,95,53,49,0)]]);
          let latnS = String.fromCharCode(120,95,49,54,95,100,115,116,114,101,97,109,0);
         iconwatchnown = `${videocommonn}`;
         homeJ = new Map([[`${homeJ.size}`, homeJ.size]]);
         latnS += `${homeJ.size << (Math.min(latnS.length, 5))}`;
       let unselectedK = String.fromCharCode(118,95,53,51,0);
       let imagenetworkerrW = String.fromCharCode(117,110,108,111,99,107,95,117,95,57,54,0);
         iconwatchnown = `${imagenetworkerrW.length % (Math.max(unselectedK.length, 5))}`;
         imagenetworkerrW += `${iconwatchnown.length}`;
      for (let o = 0; o < 2; o++) {
          let paginationP = 3;
          let mbbannerq = 0.0;
         iconwatchnown = `${paginationP / (Math.max(8, videocommonn))}`;
         paginationP /= Math.max(5, parseInt(`${mbbannerq}`) | 1);
         mbbannerq -= parseFloat(`${parseInt(`${mbbannerq}`) & 1}`);
      }
          let renewS = 4.0;
          let colorsD = 4.0;
          let sansq = 5;
         imagenetworkerrW += `${unselectedK.length + 3}`;
         renewS -= parseInt(`${colorsD}`);
         colorsD /= Math.max(parseFloat(`${3}`), 4);
         sansq &= 1;
      while (5 >= (1 << (Math.min(2, uimanagerU.length)))) {
         videocommonn |= iconwatchnown.length * 3;
         break;
      }
      if (iconwatchnown.endsWith(`${unselectedK.length}`)) {
         iconwatchnown += `${imagenetworkerrW.length - iconwatchnown.length}`;
      }
         iconwatchnown += `${iconwatchnown.length}`;
      iconsaveimage1 = iconsharefriends1.length == 23;
      break;
   }

      if (zfSelected === "GOOGLE_PAY") {

       let kickN: Map<any, any> = new Map([[String.fromCharCode(102,95,49,48,95,104,119,99,97,112,0),false ], [String.fromCharCode(99,111,114,114,101,108,97,116,101,95,111,95,51,0),false ]]);
       let gestureX = String.fromCharCode(115,117,98,115,116,114,105,110,103,115,95,106,95,51,0);
       let annerM: Map<any, any> = new Map([[String.fromCharCode(102,95,53,50,95,101,120,116,114,97,0),173], [String.fromCharCode(99,108,97,115,115,105,102,121,95,51,95,57,56,0),370], [String.fromCharCode(102,111,108,108,111,119,95,118,95,55,53,0),745]]);
      for (let o = 0; o < 2; o++) {
          let livesharex = String.fromCharCode(99,104,101,99,107,109,97,114,107,95,103,95,53,0);
          let animationsm = String.fromCharCode(106,95,52,55,95,109,111,110,111,115,112,97,99,101,100,0);
          let modeS = true;
         gestureX = `${1 + livesharex.length}`;
         livesharex += `${(String.fromCharCode(83,0) == animationsm ? animationsm.length : (modeS ? 5 : 4))}`;
         modeS = animationsm.length >= 15;
      }
         kickN = new Map([[`${annerM.size}`, annerM.size << (Math.min(4, Math.abs(kickN.size)))]]);
         annerM = new Map([[`${kickN.size}`, gestureX.length - 1]]);
          let basketballmatchdetailbgK = 1.0;
          let mbsplashN: Map<any, any> = new Map([[String.fromCharCode(107,95,51,53,95,109,111,110,111,98,105,116,0),true ], [String.fromCharCode(99,111,108,99,111,108,95,54,95,50,53,0),true ], [String.fromCharCode(100,105,109,105,110,115,105,111,110,115,0),true ]]);
         gestureX += `${mbsplashN.size}`;
         basketballmatchdetailbgK /= Math.max(parseFloat(`${parseInt(`${basketballmatchdetailbgK}`) >> (Math.min(2, Math.abs(3)))}`), 1);
         mbsplashN.set(`${basketballmatchdetailbgK}`, parseInt(`${basketballmatchdetailbgK}`));
       let iconuserS = false;
         iconuserS = String.fromCharCode(112,0) == gestureX;
      let bally = kickN.size <= 8345543;
      do {
          let feedbackS = String.fromCharCode(122,95,48,95,99,111,112,121,98,97,99,107,0);
          let skipk = 0;
          let iconstarl = String.fromCharCode(110,95,51,54,95,100,117,112,108,105,99,97,116,101,100,0);
         kickN.set(gestureX, gestureX.length * skipk);
         feedbackS = `${feedbackS.length + iconstarl.length}`;
         skipk >>= Math.min(2, iconstarl.length);
         if (bally) {
            break;
         }
      } while (bally && (!Array.from(kickN.keys()).includes(`${annerM.size}`)));
         iconuserS = (gestureX.length % (Math.max(6, kickN.size))) > 19;
       let predictiondefaultd = String.fromCharCode(117,110,105,111,110,101,100,95,105,95,56,51,0);
      predictionbuttonY *= (parseFloat(`${String.fromCharCode(97,0) == memberh ? memberh.length : connectionb}`));
        console.log("google method");

   if (parseFloat(`${user8.length}`) < predictionbuttonY) {
      user8 = "3";
   }
        console.log("the data: ", membershipSelected);

       let orangedownarrowO = String.fromCharCode(122,95,50,50,95,102,114,101,113,98,97,114,107,0);
       let logoutE = 2;
       let calendari = 4;
      for (let k = 0; k < 3; k++) {
         orangedownarrowO += `${calendari}`;
      }
      if ((4 + calendari) < 3 && 4 < (orangedownarrowO.length + calendari)) {
         orangedownarrowO += "2";
      }
      iconsharefriends1 += `${iconorientationd.size | parseInt(`${predictionbuttonY}`)}`;

        if (membershipSelected.productType === "iap") {
          await requestPurchase({ skus: [membershipSelected.productSKU] });
        } else if (membershipSelected.productType === "subs") {

      long_jh = `${iconorientationd.size - 1}`;
          const subs = subscriptions.find(
            (sub) => sub.productId === membershipSelected.productSKU
          );

   for (let m = 0; m < 1; m++) {
      long_jh = `${long_jh.length ^ 1}`;
   }

          if (subs) {

   let taill = predictionbuttonY >= 6664369.0;
   do {
       let iconarrowrightwhitev: Array<any> = [String.fromCharCode(115,119,97,112,112,101,114,95,97,95,54,52,0), String.fromCharCode(97,95,56,52,95,98,116,110,0), String.fromCharCode(102,95,52,51,95,99,114,105,116,105,99,97,108,115,101,99,116,105,111,110,0)];
       let feedbackK = 4.0;
       let defaultplayerimgd = 1.0;
       let filledR: Array<any> = [436, 392, 788];
      if (2.45 <= (5.4 - feedbackK) || 5.84 <= (5.4 * defaultplayerimgd)) {
         defaultplayerimgd += 2 << (Math.min(3, iconarrowrightwhitev.length));
      }
      predictionbuttonY += parseFloat(`${notificationfillemptyY.size ^ memberh.length}`);
      if (taill) {
         break;
      }
   } while (taill && ((parseInt(`${predictionbuttonY}`) - iconorientationd.size) == 4 && 3.69 == (3.69 - predictionbuttonY)));
            const offerToken = subs.subscriptionOfferDetails[0].offerToken;

   if (3 >= (memberh.length + connectionb) || 4 >= (memberh.length + 3)) {
       let plashK = 1.0;
       let listz = String.fromCharCode(106,95,53,55,95,98,114,101,103,0);
       let crossF: Map<any, any> = new Map([[String.fromCharCode(110,95,49,56,95,108,111,111,107,117,112,0),719], [String.fromCharCode(117,95,54,52,95,97,100,109,105,110,115,0),233], [String.fromCharCode(115,95,49,55,95,111,112,116,105,109,117,109,0),296]]);
       let greytick8 = true;
       let settingT = true;
         crossF = new Map([[`${crossF.size}`, 2]]);
         crossF = new Map([[`${crossF.size}`, crossF.size ^ 1]]);
      let b_unlockH = 9447473.0 >= plashK;
      do {
         plashK += 1;
         if (b_unlockH) {
            break;
         }
      } while (b_unlockH && (crossF.get(`${plashK}`) != null));
      if (2 < (3 + crossF.size)) {
         settingT = listz.includes(`${plashK}`);
      }
          let handlerD = String.fromCharCode(99,95,49,95,115,99,116,101,0);
          let static_4J = 3;
         crossF.set(`${greytick8}`, ((greytick8 ? 5 : 2) / (Math.max(handlerD.length, 9))));
         handlerD = `${static_4J * static_4J}`;
       let s_lock9: Map<any, any> = new Map([[String.fromCharCode(111,95,53,50,95,99,111,109,112,111,115,101,114,0),140], [String.fromCharCode(102,105,101,108,100,115,95,52,95,53,55,0),236], [String.fromCharCode(114,95,55,0),88]]);
          let iconfeedbackR = String.fromCharCode(114,95,53,56,95,112,108,97,121,98,97,99,107,0);
         greytick8 = iconfeedbackR.includes(`${plashK}`);
      for (let h = 0; h < 2; h++) {
          let mbnative5: Map<any, any> = new Map([[String.fromCharCode(104,95,53,56,95,116,104,114,101,115,104,0),389], [String.fromCharCode(102,105,110,105,115,104,95,108,95,54,48,0),260], [String.fromCharCode(108,108,118,105,100,100,115,112,101,110,99,95,104,95,51,54,0),94]]);
          let iconclosewhitewithbgg = 0.0;
          let sellk: Map<any, any> = new Map([[String.fromCharCode(121,95,55,51,95,105,110,100,101,120,111,102,0),false ], [String.fromCharCode(100,105,109,109,101,100,95,119,95,56,48,0),true ]]);
          let libreactnativejniA = String.fromCharCode(115,101,110,100,101,114,95,105,95,55,48,0);
          let acceptedG = false;
         crossF = new Map([[`${mbnative5.size}`, mbnative5.size | 3]]);
         iconclosewhitewithbgg /= Math.max(parseFloat(`${2 - parseInt(`${iconclosewhitewithbgg}`)}`), 3);
         sellk.set(`${acceptedG}`, sellk.size % (Math.max(2, 1)));
         libreactnativejniA = `${parseInt(`${iconclosewhitewithbgg}`) ^ sellk.size}`;
      }
         s_lock9.set(`${crossF.size}`, 3);
         s_lock9.set(`${greytick8}`, ((settingT ? 2 : 3)));
       let halfh: Map<any, any> = new Map([[String.fromCharCode(115,116,97,108,108,95,103,95,51,54,0),String.fromCharCode(120,117,116,105,108,95,102,95,51,55,0)], [String.fromCharCode(98,117,102,102,101,114,115,95,52,95,50,0),String.fromCharCode(121,95,57,48,95,105,114,97,110,100,0)], [String.fromCharCode(115,95,56,95,98,114,101,97,107,115,0),String.fromCharCode(97,95,53,48,95,100,101,110,115,101,0)]]);
      connectionb *= notificationfillemptyY.size;
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

      acceptedQ /= Math.max(2, (parseFloat(`${user8 == String.fromCharCode(122,0) ? memberh.length : user8.length}`)));
            throw new Error("subscription plan not found");
          }
        }
      } else {

   if (4.99 > (parseFloat(`${iconsharefriends1.length}`) - predictionbuttonY)) {
      iconsharefriends1 = `${2 << (Math.min(5, Math.abs(notificationfillemptyY.size)))}`;
   }
        console.log("4 fang method");

      iconorientationd = new Map([[`${notificationfillemptyY.size}`, notificationfillemptyY.size << (Math.min(Math.abs(1), 2))]]);
        handleZfGateway();
      }
    } catch (error) {

       let usernameA = String.fromCharCode(102,95,48,95,112,108,97,110,101,100,0);
         usernameA = `${usernameA.length}`;
      for (let k = 0; k < 3; k++) {
         usernameA = "3";
      }
      if (usernameA == String.fromCharCode(101,0)) {
         usernameA += `${usernameA.length << (Math.min(usernameA.length, 5))}`;
      }
      iconsharefriends1 += `${notificationfillemptyY.size}`;
      setIsVisible(false);

      long_jh = `${activityW.length * 3}`;
      if (error instanceof PurchaseError) {

   while ((user8.length / 5) >= 1) {
      user8 += `${parseInt(`${acceptedQ}`)}`;
      break;
   }
        console.error("purchasing error: " + error);
      } else {

      user8 += "1";
        console.error("handle purchase error: ", error);
      }

      if (error && error?.code == "E_USER_CANCELLED") {

   if (iconorientationd.get(`${predictionbuttonY}`) != null) {
       let configureo = 0;
      if ((1 << (Math.min(1, Math.abs(configureo)))) < 5) {
          let libglogg = 5.0;
          let more6 = String.fromCharCode(105,108,115,116,95,113,95,57,48,0);
         configureo %= Math.max(5, more6.length << (Math.min(Math.abs(2), 2)));
         libglogg += parseInt(`${libglogg}`);
         more6 += `${parseInt(`${libglogg}`) | parseInt(`${libglogg}`)}`;
      }
       let selectedf = String.fromCharCode(122,95,49,55,95,111,99,116,112,111,105,110,116,0);
      if (configureo > 4) {
         configureo *= 3 | selectedf.length;
      }
      predictionbuttonY -= (parseFloat(`${String.fromCharCode(53,0) == iconsharefriends1 ? iconsharefriends1.length : iconorientationd.size}`));
   }
        console.log("user cancel purchase");

       let send5 = String.fromCharCode(98,95,53,54,95,116,105,109,101,115,99,97,108,101,0);
       let runtimeJ = false;
       let template_gxd = String.fromCharCode(120,95,50,54,95,117,115,101,114,99,116,120,0);
         runtimeJ = !runtimeJ;
          let feedbacka = 4.0;
          let countdowng = String.fromCharCode(103,95,51,55,95,108,101,101,119,97,121,0);
          let audienceJ = String.fromCharCode(116,105,109,101,114,115,95,99,95,50,48,0);
         send5 = `${countdowng.length}`;
         feedbacka *= 2;
         countdowng = `${parseInt(`${feedbacka}`) + 2}`;
         audienceJ = `${audienceJ.length}`;
      while (!send5.endsWith(`${runtimeJ}`)) {
          let reportg: Array<any> = [421, 475, 918];
          let codeW: Array<any> = [372, 472];
          let otherZ = 3;
          let edith: Array<any> = [789, 597];
          let iconstarA = 5.0;
         send5 += `${(send5 == String.fromCharCode(51,0) ? send5.length : otherZ)}`;
         reportg = [3];
         codeW = [2];
         otherZ |= parseInt(`${iconstarA}`);
         edith = [2 + codeW.length];
         iconstarA *= reportg.length;
         break;
      }
         send5 = `${send5.length}`;
       let collection_: Map<any, any> = new Map([[String.fromCharCode(116,105,116,108,101,95,53,95,53,0),331], [String.fromCharCode(101,95,50,50,95,108,101,118,105,110,115,111,110,0),159], [String.fromCharCode(100,101,112,101,110,100,115,95,117,95,50,50,0),54]]);
       let currentEG: Map<any, any> = new Map([[String.fromCharCode(107,95,50,50,95,113,117,97,114,116,122,0),true ], [String.fromCharCode(116,95,57,50,95,108,111,119,101,114,0),false ]]);
         runtimeJ = (send5.length | collection_.size) >= 83;
       let exampleimageC = false;
       let statsZ = true;
          let greenE = String.fromCharCode(103,114,101,121,95,115,95,49,48,0);
          let placeholder9 = String.fromCharCode(113,95,51,57,95,115,121,109,0);
         exampleimageC = currentEG.size > 50;
         greenE = `${placeholder9.length << (Math.min(Math.abs(2), 3))}`;
         placeholder9 += `${2 >> (Math.min(4, placeholder9.length))}`;
          let guide9 = 3.0;
          let soundF = 1;
          let predictionarrowD = 2.0;
         exampleimageC = collection_.get(`${runtimeJ}`) == null;
         guide9 -= parseFloat(`${soundF}`);
         soundF %= Math.max(soundF - 2, 4);
         predictionarrowD -= parseFloat(`${soundF >> (Math.min(Math.abs(parseInt(`${predictionarrowD}`)), 3))}`);
      user8 = "3";
        setIsBtnEnable(true);
      } else {

   if (5 == (user8.length | connectionb)) {
      user8 += `${((iconsaveimage1 ? 1 : 2) / (Math.max(user8.length, 7)))}`;
   }
        setDialogText(failedDialogText);

   if (3 < iconsharefriends1.length) {
      iconsharefriends1 = `${parseInt(`${acceptedQ}`)}`;
   }
        setIsDialogOpen(true);
      }
    }
  };

  const handleZfGateway = async () => {
       let themen = String.fromCharCode(115,111,98,101,108,95,116,95,54,51,0);
    let sansQ = 4.0;
    let blackE: Map<any, any> = new Map([[String.fromCharCode(99,97,112,97,98,108,101,95,104,95,51,53,0),true ], [String.fromCharCode(114,101,115,112,111,110,100,95,98,95,56,54,0),true ]]);
    let sliderP = String.fromCharCode(110,111,110,110,117,108,108,107,101,121,99,104,97,105,110,95,52,95,57,57,0);
    let bottomD = 3.0;
    let iconclosewhitebgF = false;
    let iconO = String.fromCharCode(105,95,49,57,95,100,119,97,114,102,0);
    let logo7 = String.fromCharCode(110,111,110,110,101,103,97,116,105,118,101,95,107,95,48,0);
    let videobufferloadingr = String.fromCharCode(116,97,107,101,111,117,116,95,121,95,56,50,0);
    let file5 = String.fromCharCode(101,115,99,97,112,105,110,103,95,99,95,52,55,0);
    let reactnativeratingsA: Array<any> = [52, 748, 645];
    let predictionc = 4.0;
    let statisticsinactivel: Array<any> = [528, 338];
    let rewardvideoT = 5.0;
   for (let a = 0; a < 3; a++) {
      reactnativeratingsA.push(themen.length + parseInt(`${bottomD}`));
   }
       let schedulerb: Map<any, any> = new Map([[String.fromCharCode(102,95,50,56,95,116,114,97,106,101,99,116,111,114,121,0),765], [String.fromCharCode(107,95,55,51,95,119,101,98,102,105,108,101,0),857], [String.fromCharCode(111,95,50,55,95,97,116,116,101,109,112,116,115,0),21]]);
      while (schedulerb.get(`${schedulerb.size}`) != null) {
          let str9 = 5.0;
          let countdowne = 1;
         schedulerb.set(`${countdowne}`, 1 | schedulerb.size);
         str9 -= parseFloat(`${parseInt(`${str9}`) + 1}`);
         countdowne ^= parseInt(`${str9}`);
         break;
      }
          let types8 = 2;
          let profileactivep = String.fromCharCode(117,121,118,121,95,121,95,57,52,0);
          let applicationU = String.fromCharCode(112,111,116,105,115,105,111,110,95,109,95,49,56,0);
         schedulerb.set(`${types8}`, schedulerb.size & 3);
         types8 *= 2;
         profileactivep += "3";
         applicationU += `${profileactivep.length}`;
      for (let v = 0; v < 1; v++) {
         schedulerb.set(`${schedulerb.size}`, schedulerb.size);
      }
      sansQ *= (parseFloat(`${String.fromCharCode(112,0) == videobufferloadingr ? logo7.length : videobufferloadingr.length}`));
   let chartW = iconclosewhitebgF ? !iconclosewhitebgF : iconclosewhitebgF;
   do {
      iconclosewhitebgF = reactnativeratingsA.length >= 72;
      if (chartW) {
         break;
      }
   } while ((iconclosewhitebgF) && chartW);
   while (iconO == String.fromCharCode(115,0) || themen != String.fromCharCode(72,0)) {
       let libjsijniprofilerh: Array<any> = [146, 494, 74];
      while (libjsijniprofilerh.includes(libjsijniprofilerh.length)) {
         libjsijniprofilerh = [1];
         break;
      }
         libjsijniprofilerh = [libjsijniprofilerh.length];
      let static_a2M = libjsijniprofilerh.length >= 4945713;
      do {
          let frame_4C: Array<any> = [455, 277, 220];
          let react1 = 1.0;
          let modityq: Array<any> = [533, 417, 889];
         libjsijniprofilerh = [3];
         frame_4C = [1 + modityq.length];
         react1 -= 2;
         modityq = [2];
         if (static_a2M) {
            break;
         }
      } while ((1 <= (2 * libjsijniprofilerh.length) || 1 <= (libjsijniprofilerh.length * 2)) && static_a2M);
      themen = `${iconO.length}`;
      break;
   }

    try {

   while (parseInt(`${predictionc}`) < file5.length) {
      file5 = "1";
      break;
   }
      logo7 += `${blackE.size}`;
      reactnativeratingsA = [2];
      logo7 = "3";
      const result = await mayi_StyleShrink.postFinzfOrder({
        productId: parseInt(membershipSelected.productId),
        zfType: zfSelected,
      });

      logo7 = "2";
      blackE.set(`${sansQ}`, 2);
   while (videobufferloadingr.length <= sliderP.length) {
       let read6 = 1.0;
       let iconsharefriendsY = 0.0;
       let splashE: Map<any, any> = new Map([[String.fromCharCode(121,95,50,50,95,105,110,115,116,97,110,99,101,115,0),true ], [String.fromCharCode(109,97,121,98,101,95,104,95,55,52,0),false ], [String.fromCharCode(99,108,101,97,114,95,113,95,53,56,0),false ]]);
       let transfera = String.fromCharCode(117,95,54,95,109,97,116,114,105,99,101,115,0);
       let reactnativejsW = String.fromCharCode(121,95,57,56,95,102,111,114,101,97,99,104,0);
      let updatesf = 8317295.0 >= iconsharefriendsY;
      do {
         iconsharefriendsY /= Math.max(3 >> (Math.min(1, transfera.length)), 4);
         if (updatesf) {
            break;
         }
      } while ((1 > transfera.length) && updatesf);
         reactnativejsW = `${parseInt(`${iconsharefriendsY}`) | 2}`;
      let stylesW = String.fromCharCode(98,103,100,95,118,118,95,107,95,0) == reactnativejsW;
      do {
          let vietnamd = 4.0;
          let blackR = true;
         reactnativejsW += `${parseInt(`${vietnamd}`)}`;
         blackR = (blackR ? blackR : blackR);
         if (stylesW) {
            break;
         }
      } while (stylesW && (reactnativejsW.endsWith(`${splashE.size}`)));
         read6 += parseInt(`${read6}`) ^ reactnativejsW.length;
         read6 *= parseInt(`${read6}`) >> (Math.min(4, Math.abs(parseInt(`${iconsharefriendsY}`))));
         splashE = new Map([[`${splashE.size}`, parseInt(`${iconsharefriendsY}`) << (Math.min(Math.abs(splashE.size), 5))]]);
       let soundK = false;
       let i_viewH = false;
      let catalogn = 9880712 >= transfera.length;
      do {
          let detailsK = 5;
          let libturbomodulejsijniG = String.fromCharCode(103,95,56,55,95,115,117,112,101,114,98,108,111,99,107,115,0);
          let iconnewsshareU = String.fromCharCode(100,101,101,112,95,102,95,49,48,0);
          let regengH: Array<any> = [41, 746, 121];
         transfera = `${((soundK ? 2 : 1) - 3)}`;
         detailsK <<= Math.min(2, Math.abs(3));
         libturbomodulejsijniG += `${libturbomodulejsijniG.length}`;
         iconnewsshareU = `${libturbomodulejsijniG.length}`;
         regengH.push(1 >> (Math.min(2, regengH.length)));
         if (catalogn) {
            break;
         }
      } while (catalogn && (iconsharefriendsY == 1.45));
      sliderP += `${sliderP.length / 1}`;
      break;
   }
      sansQ -= parseFloat(`${parseInt(`${bottomD}`) + file5.length}`);
      console.log("returned order data: ", result);

       let b_centerJ = String.fromCharCode(113,100,109,99,95,121,95,55,56,0);
       let select8 = false;
       let ping0 = 2;
       let airbnbstard = 3;
          let h_titleG = 1;
          let subsZ = 0;
         select8 = (airbnbstard & ping0) == 67;
         h_titleG ^= h_titleG * 2;
         subsZ %= Math.max(1, 3);
         airbnbstard >>= Math.min(4, Math.abs(((select8 ? 4 : 3))));
         b_centerJ = `${b_centerJ.length}`;
      for (let f = 0; f < 1; f++) {
         airbnbstard %= Math.max(2, ping0);
      }
         airbnbstard |= ping0 - airbnbstard;
      sliderP += `${2 | file5.length}`;
   while (videobufferloadingr.length <= 1) {
      file5 = `${parseInt(`${bottomD}`) & blackE.size}`;
      break;
   }
      sliderP = `${videobufferloadingr.length - 1}`;
      predictionc *= iconO.length;

      if (result.paymentData.url) {

   if (!file5.startsWith(`${bottomD}`)) {
       let whistleorangee = String.fromCharCode(97,117,116,111,114,101,118,101,114,115,101,100,95,117,95,55,51,0);
       let acceptedk = String.fromCharCode(117,95,50,56,95,104,97,108,102,100,0);
       let baselineU = 3;
       let actionsn = 0.0;
      let yellowcirclebg0 = baselineU <= 9525940;
      do {
          let settingsX = String.fromCharCode(107,108,97,121,116,110,95,112,95,51,49,0);
          let tempnodata4 = String.fromCharCode(109,95,48,95,102,102,109,97,108,0);
          let clubW = 1.0;
          let otherY: Array<any> = [String.fromCharCode(102,116,118,102,111,108,100,101,114,99,108,111,115,101,100,95,51,95,57,52,0), String.fromCharCode(119,95,54,55,95,111,112,116,105,109,105,122,97,116,105,111,110,0)];
         baselineU >>= Math.min(1, Math.abs(parseInt(`${actionsn}`)));
         settingsX += `${settingsX.length}`;
         tempnodata4 = `${(tempnodata4 == String.fromCharCode(103,0) ? settingsX.length : tempnodata4.length)}`;
         clubW *= otherY.length ^ parseInt(`${clubW}`);
         otherY.push(parseInt(`${clubW}`));
         if (yellowcirclebg0) {
            break;
         }
      } while (yellowcirclebg0 && (1 < (baselineU / 3)));
      while ((actionsn / 3.83) == 2.70) {
         actionsn /= Math.max(1, acceptedk.length << (Math.min(5, Math.abs(baselineU))));
         break;
      }
         actionsn -= 1;
      for (let n = 0; n < 2; n++) {
          let basketballiconn = String.fromCharCode(104,105,115,116,111,114,121,95,116,95,54,0);
          let defaultroombgP = String.fromCharCode(102,95,53,51,95,103,101,110,97,110,110,0);
          let singaporeS = String.fromCharCode(114,101,109,111,116,101,95,110,95,54,52,0);
          let launcherY: Array<any> = [String.fromCharCode(115,116,114,116,111,105,110,116,95,57,95,50,57,0), String.fromCharCode(115,109,105,108,95,57,95,52,57,0), String.fromCharCode(108,111,103,111,117,114,108,95,107,95,55,0)];
          let icondefaultthumbnailQ = String.fromCharCode(107,101,121,99,104,97,105,110,95,105,95,49,51,0);
         baselineU ^= 1 >> (Math.min(4, launcherY.length));
         basketballiconn += `${defaultroombgP.length % 2}`;
         defaultroombgP += `${singaporeS.length >> (Math.min(1, defaultroombgP.length))}`;
         singaporeS = `${basketballiconn.length}`;
         launcherY.push(icondefaultthumbnailQ.length >> (Math.min(Math.abs(3), 5)));
         icondefaultthumbnailQ = "2";
      }
          let combine9 = String.fromCharCode(108,97,118,102,105,0);
          let mimoH: Map<any, any> = new Map([[String.fromCharCode(110,105,108,95,113,95,53,50,0),false ], [String.fromCharCode(110,117,109,101,114,105,102,121,95,103,95,51,0),true ], [String.fromCharCode(108,95,53,48,95,122,105,103,122,97,103,0),false ]]);
         actionsn *= (String.fromCharCode(99,0) == whistleorangee ? combine9.length : whistleorangee.length);
         combine9 = `${mimoH.size}`;
         mimoH.set(`${mimoH.size}`, mimoH.size);
         acceptedk += `${acceptedk.length >> (Math.min(2, Math.abs(baselineU)))}`;
          let iconscheduleA = 3.0;
         acceptedk += "1";
         iconscheduleA /= Math.max(parseFloat(`${parseInt(`${iconscheduleA}`)}`), 1);
         actionsn /= Math.max(3, acceptedk.length + 1);
      while ((acceptedk.length - baselineU) < 3 && 1 < (3 - baselineU)) {
         baselineU %= Math.max(4, acceptedk.length);
         break;
      }
      for (let q = 0; q < 2; q++) {
          let videovarO = String.fromCharCode(109,105,114,114,111,114,101,100,95,109,95,54,56,0);
          let full3 = 2;
          let page3 = String.fromCharCode(122,95,50,55,95,105,110,118,105,116,97,116,105,111,110,0);
         acceptedk = `${1 * page3.length}`;
         videovarO += `${videovarO.length}`;
         full3 >>= Math.min(videovarO.length, 5);
         page3 += `${(videovarO == String.fromCharCode(80,0) ? full3 : videovarO.length)}`;
      }
         baselineU <<= Math.min(3, Math.abs(1 << (Math.min(3, Math.abs(parseInt(`${actionsn}`))))));
         baselineU &= baselineU;
      file5 += `${whistleorangee.length / (Math.max(6, blackE.size))}`;
   }
   if (logo7.length <= 1) {
      iconclosewhitebgF = themen == String.fromCharCode(71,0);
   }
       let videocommonl = false;
      if (videocommonl) {
         videocommonl = (videocommonl ? videocommonl : !videocommonl);
      }
       let become2 = false;
      while (!videocommonl) {
         videocommonl = (!become2 ? videocommonl : !become2);
         break;
      }
      sansQ /= Math.max(parseFloat(`${reactnativeratingsA.length}`), 4);
   for (let x = 0; x < 1; x++) {
       let mbnativeadvancedb: Map<any, any> = new Map([[String.fromCharCode(106,95,51,54,95,115,104,111,114,116,115,0),706], [String.fromCharCode(108,95,49,48,0),368]]);
       let whistleorangeO = String.fromCharCode(117,105,100,95,53,95,53,49,0);
       let refreshs = 4.0;
      while (refreshs == whistleorangeO.length) {
         refreshs += whistleorangeO.length;
         break;
      }
          let spinneri: Map<any, any> = new Map([[String.fromCharCode(110,101,115,116,95,122,95,51,57,0),461], [String.fromCharCode(120,95,56,55,95,97,112,112,114,111,118,101,100,0),624]]);
          let greenE = 5;
         whistleorangeO = "1";
         spinneri = new Map([[`${spinneri.size}`, 3]]);
         greenE &= 1;
         whistleorangeO += `${(whistleorangeO == String.fromCharCode(82,0) ? mbnativeadvancedb.size : whistleorangeO.length)}`;
          let basketballtrophyM = 2.0;
          let favorite3 = 4.0;
         refreshs += parseInt(`${basketballtrophyM}`) % (Math.max(2, 9));
         basketballtrophyM /= Math.max(3, parseFloat(`${parseInt(`${favorite3}`) >> (Math.min(1, Math.abs(3)))}`));
         favorite3 += parseFloat(`${1}`);
          let searchbarH: Array<any> = [203, 978];
         whistleorangeO += "1";
         searchbarH = [1 ^ searchbarH.length];
         whistleorangeO += `${1 - whistleorangeO.length}`;
       let gradlew_: Array<any> = [586, 554];
       let yellowscoreballn: Array<any> = [219, 924];
         whistleorangeO = `${parseInt(`${refreshs}`) << (Math.min(3, Math.abs(3)))}`;
         whistleorangeO += "2";
      logo7 = "1";
   }
        openLink(result.paymentData.url, result.transaction_id);
      } else throw new Error("no url is retuned");
    } catch (error) {

   for (let u = 0; u < 3; u++) {
       let libfb9 = String.fromCharCode(103,95,54,53,95,112,114,101,102,101,116,99,104,101,114,0);
       let whistleB = String.fromCharCode(97,95,56,50,95,97,102,116,101,114,101,102,102,101,99,116,115,107,101,121,112,97,116,104,0);
          let hooksk: Map<any, any> = new Map([[String.fromCharCode(114,101,118,97,108,105,100,97,116,105,111,110,95,53,95,57,50,0),561], [String.fromCharCode(111,95,52,57,95,118,111,105,99,101,0),261]]);
          let k_locki = 5;
          let auto_qmh = String.fromCharCode(114,95,55,50,95,113,117,111,116,105,101,110,116,0);
         whistleB += `${whistleB.length * 2}`;
         hooksk.set(`${k_locki}`, k_locki);
         auto_qmh = `${hooksk.size | 2}`;
       let themep: Array<any> = [526, 707, 143];
       let down_: Array<any> = [839, 839];
      while (themep.length >= 5) {
          let const_ivm: Map<any, any> = new Map([[String.fromCharCode(105,116,97,108,105,99,95,109,95,51,55,0),804], [String.fromCharCode(97,95,54,50,95,110,97,118,105,0),864], [String.fromCharCode(110,95,57,56,95,114,111,119,0),577]]);
          let sansC: Array<any> = [119, 662];
          let reddownarrow5 = String.fromCharCode(115,101,116,116,108,105,110,103,95,52,95,56,51,0);
          let annerP = true;
         themep = [down_.length];
         const_ivm.set(`${annerP}`, ((annerP ? 4 : 1) * reddownarrow5.length));
         sansC = [reddownarrow5.length % 3];
         break;
      }
      if (libfb9.length > 1) {
         libfb9 += `${2 + down_.length}`;
      }
         whistleB = `${themep.length}`;
         whistleB += `${themep.length * down_.length}`;
      reactnativeratingsA.push(statisticsinactivel.length ^ 2);
   }
      logo7 += `${parseInt(`${predictionc}`)}`;
   let sharewhiteQ = sansQ <= 6038623.0;
   do {
      sansQ /= Math.max((parseFloat(`${logo7 == String.fromCharCode(83,0) ? logo7.length : videobufferloadingr.length}`)), 5);
      if (sharewhiteQ) {
         break;
      }
   } while (sharewhiteQ && (bottomD < sansQ));
       let libfollyp: Array<any> = [741, 493];
          let filledW = 1.0;
         libfollyp.push(parseInt(`${filledW}`) ^ 3);
          let traminiK = String.fromCharCode(107,95,54,52,95,101,97,116,105,110,103,0);
          let sendp = true;
         libfollyp = [((sendp ? 2 : 1) % (Math.max(libfollyp.length, 8)))];
         traminiK = `${traminiK.length}`;
         sendp = traminiK.length <= 72;
      while ((4 + libfollyp.length) < 5) {
          let sliderl = false;
          let popupP = String.fromCharCode(109,101,100,105,117,109,95,118,95,51,56,0);
          let splash6 = false;
          let mbnativeA = String.fromCharCode(103,114,111,117,112,99,97,108,108,95,113,95,57,56,0);
         libfollyp.push(libfollyp.length >> (Math.min(Math.abs(1), 3)));
         sliderl = popupP == mbnativeA;
         popupP += `${((sliderl ? 5 : 5) + 1)}`;
         splash6 = !sliderl;
         mbnativeA += `${((sliderl ? 4 : 3) ^ popupP.length)}`;
         break;
      }
      sansQ *= parseFloat(`${videobufferloadingr.length | statisticsinactivel.length}`);
      console.log("error catch: ", error);

   let huaweiq = 5773626 <= statisticsinactivel.length;
   do {
       let placementW: Array<any> = [751, 912];
       let tooltipsA = String.fromCharCode(101,95,53,57,95,116,111,114,99,104,0);
      while ((4 | tooltipsA.length) >= 5 && 2 >= (tooltipsA.length | 4)) {
         tooltipsA = "2";
         break;
      }
         tooltipsA = `${tooltipsA.length}`;
      let settingq = tooltipsA == String.fromCharCode(112,121,55,56,0);
      do {
         tooltipsA = `${placementW.length}`;
         if (settingq) {
            break;
         }
      } while (settingq && ((placementW.length | tooltipsA.length) == 2));
      if (3 > tooltipsA.length) {
         placementW.push(tooltipsA.length);
      }
      while (tooltipsA.startsWith(`${placementW.length}`)) {
          let clockM = String.fromCharCode(106,95,54,57,0);
          let leaguedetailsbgg = String.fromCharCode(104,97,115,104,100,101,115,116,114,111,121,95,102,95,57,53,0);
          let tailh = false;
          let renderf = 1.0;
          let configureo = 3;
         placementW = [(String.fromCharCode(48,0) == leaguedetailsbgg ? leaguedetailsbgg.length : tooltipsA.length)];
         clockM = `${((tailh ? 2 : 5) | parseInt(`${renderf}`))}`;
         tailh = configureo > 58;
         renderf += parseFloat(`${clockM.length}`);
         configureo &= 1 % (Math.max(parseInt(`${renderf}`), 5));
         break;
      }
       let filled8 = 5.0;
       let textW = 5.0;
      statisticsinactivel.push(2);
      if (huaweiq) {
         break;
      }
   } while (huaweiq && (iconclosewhitebgF));
      logo7 = `${file5.length | videobufferloadingr.length}`;
      iconO += `${logo7.length % 2}`;
      file5 += `${statisticsinactivel.length << (Math.min(logo7.length, 3))}`;
      setDialogText(axiosErrorText);

   while (file5.length > statisticsinactivel.length) {
      statisticsinactivel = [statisticsinactivel.length];
      break;
   }
       let redirect2: Map<any, any> = new Map([[String.fromCharCode(120,95,52,49,95,102,97,116,97,108,0),824], [String.fromCharCode(115,116,97,98,105,108,105,116,121,95,98,95,54,48,0),909], [String.fromCharCode(101,95,56,52,95,99,108,116,111,115,116,114,0),602]]);
      while (4 <= (redirect2.size & redirect2.size)) {
         redirect2.set(`${redirect2.size}`, 1);
         break;
      }
         redirect2 = new Map([[`${redirect2.size}`, 3 / (Math.max(8, redirect2.size))]]);
         redirect2.set(`${redirect2.size}`, redirect2.size + 3);
      iconclosewhitebgF = themen.length > 10;
   for (let n = 0; n < 2; n++) {
       let mintegralH = String.fromCharCode(102,95,54,95,114,103,98,112,108,117,115,0);
       let countdownD: Map<any, any> = new Map([[String.fromCharCode(97,114,98,105,116,114,117,109,95,105,95,49,48,0),629], [String.fromCharCode(121,95,51,49,95,111,99,97,108,0),351], [String.fromCharCode(99,111,109,112,101,110,115,97,116,101,95,106,95,53,57,0),6]]);
       let tailx = 0;
       let favoriteN = true;
      while (5 > (tailx / (Math.max(mintegralH.length, 3))) && 1 > (mintegralH.length / 5)) {
         mintegralH = `${2 & mintegralH.length}`;
         break;
      }
         favoriteN = (mintegralH.length - countdownD.size) < 43;
         favoriteN = 76 <= tailx && !favoriteN;
      while (4 >= (mintegralH.length / (Math.max(4, 7))) || 1 >= (mintegralH.length / 4)) {
         mintegralH += `${countdownD.size - 3}`;
         break;
      }
      while (countdownD.size < 4) {
         countdownD = new Map([[`${countdownD.size}`, countdownD.size * 1]]);
         break;
      }
      if (!favoriteN && 3 > (countdownD.size >> (Math.min(Math.abs(1), 4)))) {
         favoriteN = mintegralH.length <= 15;
      }
      let mountingi = tailx <= 9736450;
      do {
         tailx ^= mintegralH.length / 1;
         if (mountingi) {
            break;
         }
      } while (mountingi && (3 < (tailx * 2) && (tailx * 2) < 2));
      for (let b = 0; b < 2; b++) {
         countdownD = new Map([[`${countdownD.size}`, countdownD.size]]);
      }
      sliderP += `${(String.fromCharCode(52,0) == themen ? themen.length : countdownD.size)}`;
   }
   while (iconclosewhitebgF) {
      iconclosewhitebgF = (iconO.length << (Math.min(4, reactnativeratingsA.length))) > 95;
      break;
   }
      setIsDialogOpen(true);
    }
  };

  const openEmailApp = () => {
       let iconcalendarV = String.fromCharCode(111,117,116,100,97,116,101,100,95,113,95,57,49,0);
    let splashW: Map<any, any> = new Map([[String.fromCharCode(109,111,116,105,111,110,95,49,95,51,52,0),String.fromCharCode(121,114,121,105,95,99,95,56,54,0)], [String.fromCharCode(116,95,50,54,95,104,114,97,109,0),String.fromCharCode(103,95,49,95,97,108,116,101,114,0)], [String.fromCharCode(97,99,99,101,112,116,101,100,95,99,95,51,52,0),String.fromCharCode(98,95,51,55,95,97,98,111,114,116,0)]]);
    let uimanagerq: Array<any> = [875, 12, 199];
    let l_viewa: Array<any> = [869, 391, 762];
    let uploadK = String.fromCharCode(116,114,117,115,116,101,100,95,100,95,53,52,0);
    let feedbackh = 1.0;
    let flyero = String.fromCharCode(121,95,53,52,95,115,101,108,101,99,116,105,111,110,115,0);
    let encryptH = false;
    let mbsplashO = String.fromCharCode(105,110,116,101,114,105,111,114,95,102,95,54,54,0);
   for (let j = 0; j < 1; j++) {
      encryptH = l_viewa.length == flyero.length;
   }
      uimanagerq.push(1);
      uploadK = `${uimanagerq.length << (Math.min(2, l_viewa.length))}`;
      uimanagerq = [parseInt(`${feedbackh}`) << (Math.min(flyero.length, 2))];
   for (let m = 0; m < 2; m++) {
      uimanagerq = [iconcalendarV.length | 2];
   }
      uploadK = `${((encryptH ? 1 : 2) ^ uimanagerq.length)}`;
       let crownG = 1.0;
          let termsF = 0.0;
         crownG += parseInt(`${termsF}`);
          let pathY = String.fromCharCode(109,95,49,52,95,102,97,97,110,105,100,99,116,0);
          let mutedT = 0;
         crownG *= mutedT;
         pathY = "2";
         mutedT /= Math.max(2, pathY.length & pathY.length);
          let greyB = String.fromCharCode(100,95,53,52,95,105,115,111,112,101,110,113,117,111,116,101,0);
          let videor: Array<any> = [62, 406, 520];
          let streamingF = false;
         crownG *= (String.fromCharCode(101,0) == greyB ? videor.length : greyB.length);
         videor.push(2);
      feedbackh *= parseFloat(`${1}`);
   for (let y = 0; y < 2; y++) {
      iconcalendarV = `${3 * parseInt(`${feedbackh}`)}`;
   }
       let graphY = 5;
         graphY >>= Math.min(1, Math.abs(graphY & graphY));
         graphY &= graphY;
          let injuryV = 1.0;
          let icontransferclubA = 3.0;
         graphY >>= Math.min(Math.abs(graphY + 2), 1);
         injuryV += parseFloat(`${parseInt(`${icontransferclubA}`)}`);
      iconcalendarV = "2";
   if (flyero != iconcalendarV) {
      iconcalendarV += `${parseInt(`${feedbackh}`)}`;
   }
   if (uploadK.startsWith(`${l_viewa.length}`)) {
       let libreactI = false;
          let selectiond = 1.0;
          let predictionbanner5 = false;
          let privacyf: Array<any> = [String.fromCharCode(106,95,51,57,95,107,101,121,112,97,116,104,0), String.fromCharCode(103,95,56,55,95,114,101,110,100,105,116,105,111,110,0), String.fromCharCode(119,95,54,49,95,117,110,111,114,100,101,114,101,100,0)];
         libreactI = privacyf.includes(predictionbanner5);
         selectiond += parseFloat(`${3 ^ parseInt(`${selectiond}`)}`);
         predictionbanner5 = 44.61 == selectiond;
          let hoverV = true;
          let iconclosewhiteP = 3.0;
         libreactI = !hoverV;
         hoverV = iconclosewhiteP < iconclosewhiteP;
         libreactI = !libreactI && !libreactI;
      l_viewa = [((encryptH ? 5 : 3))];
   }
      flyero += `${3 << (Math.min(2, Math.abs(splashW.size)))}`;
   if (!Array.from(splashW.keys()).includes(`${uimanagerq.length}`)) {
       let countryv = 2.0;
       let libcxxcomponentsi: Array<any> = [240, 220, 629];
       let popuph = String.fromCharCode(112,117,108,115,101,95,115,95,49,0);
         countryv *= parseFloat(`${3 << (Math.min(5, libcxxcomponentsi.length))}`);
         popuph = `${parseInt(`${countryv}`)}`;
      while ((countryv / (Math.max(4.54, 2))) <= 4.56) {
         countryv -= parseFloat(`${parseInt(`${countryv}`)}`);
         break;
      }
      let unselectedt = countryv >= 9847520.0;
      do {
         countryv /= Math.max(4, parseFloat(`${1}`));
         if (unselectedt) {
            break;
         }
      } while ((libcxxcomponentsi.includes(countryv)) && unselectedt);
       let footballfield5 = String.fromCharCode(111,102,102,115,95,48,95,51,52,0);
       let awayiconn = String.fromCharCode(122,95,53,52,95,97,117,116,111,102,105,120,0);
      let libjsinspectorl = popuph == String.fromCharCode(99,108,117,108,52,48,119,56,0);
      do {
         popuph += "3";
         if (libjsinspectorl) {
            break;
         }
      } while (libjsinspectorl && (2 > popuph.length && footballfield5 == String.fromCharCode(101,0)));
      for (let j = 0; j < 3; j++) {
         libcxxcomponentsi = [3 | libcxxcomponentsi.length];
      }
          let privatechatbg1 = 2;
         footballfield5 += `${awayiconn.length}`;
         privatechatbg1 *= 1 << (Math.min(4, Math.abs(privatechatbg1)));
      let thumbnaily = 9557454 <= awayiconn.length;
      do {
          let defaultlogo7 = String.fromCharCode(100,95,56,48,95,103,101,116,115,0);
          let detailsY: Map<any, any> = new Map([[String.fromCharCode(100,95,53,56,95,117,99,111,110,115,116,0),String.fromCharCode(106,95,51,57,95,121,101,97,114,0)], [String.fromCharCode(107,95,53,53,95,116,105,109,115,116,97,109,112,0),String.fromCharCode(105,95,52,51,95,108,109,108,109,0)], [String.fromCharCode(113,95,52,54,95,99,97,108,99,117,108,97,116,101,0),String.fromCharCode(97,95,51,95,97,99,102,102,0)]]);
          let libnmsd: Map<any, any> = new Map([[String.fromCharCode(99,111,110,102,105,114,109,95,54,95,56,0),712], [String.fromCharCode(113,95,51,53,95,119,99,104,97,114,0),318]]);
          let footballtrophys = String.fromCharCode(112,95,54,54,95,115,117,98,115,97,109,112,108,105,110,103,0);
          let langh: Map<any, any> = new Map([[String.fromCharCode(100,95,54,53,95,97,110,99,104,111,114,0),500], [String.fromCharCode(101,120,101,99,117,116,97,98,108,101,95,116,95,56,49,0),178]]);
         awayiconn += `${footballfield5.length - 1}`;
         defaultlogo7 = `${libnmsd.size}`;
         detailsY = new Map([[`${detailsY.size}`, detailsY.size ^ 1]]);
         libnmsd.set(defaultlogo7, defaultlogo7.length % (Math.max(1, 5)));
         footballtrophys += "3";
         langh.set(`${libnmsd.size}`, libnmsd.size * langh.size);
         if (thumbnaily) {
            break;
         }
      } while (((libcxxcomponentsi.length & 1) <= 5) && thumbnaily);
      uimanagerq = [2 / (Math.max(6, uploadK.length))];
   }
   if ((uimanagerq.length / 1) > 4 && (uimanagerq.length / (Math.max(10, iconcalendarV.length))) > 1) {
       let grayq: Map<any, any> = new Map([[String.fromCharCode(110,95,56,57,0),549], [String.fromCharCode(106,95,49,51,95,98,108,117,114,0),809]]);
       let iconarrowrightd = 1.0;
       let configureD = 3.0;
       let classesg: Map<any, any> = new Map([[String.fromCharCode(109,101,114,103,101,97,98,108,101,95,97,95,50,51,0),String.fromCharCode(113,95,56,56,95,105,116,117,110,101,115,0)], [String.fromCharCode(100,95,54,56,95,100,99,97,100,115,112,0),String.fromCharCode(118,95,49,55,95,97,109,111,117,110,116,115,0)]]);
      let topicq = 7914176.0 >= iconarrowrightd;
      do {
          let mbbanner0: Map<any, any> = new Map([[String.fromCharCode(112,101,114,115,111,110,115,95,48,95,57,56,0),885], [String.fromCharCode(113,95,51,50,95,115,104,114,105,110,107,0),806]]);
          let i_player7 = 1.0;
          let libflipper2: Map<any, any> = new Map([[String.fromCharCode(104,111,110,101,121,95,107,95,49,54,0),true ], [String.fromCharCode(112,95,50,55,95,110,111,109,101,109,0),true ], [String.fromCharCode(115,105,122,105,110,103,95,111,95,57,50,0),false ]]);
         iconarrowrightd /= Math.max(1, 2 - mbbanner0.size);
         mbbanner0 = new Map([[`${libflipper2.size}`, libflipper2.size << (Math.min(Math.abs(2), 1))]]);
         i_player7 *= libflipper2.size | 2;
         if (topicq) {
            break;
         }
      } while ((!Array.from(grayq.keys()).includes(`${iconarrowrightd}`)) && topicq);
      let connection4 = classesg.size <= 7962136;
      do {
         classesg.set(`${classesg.size}`, grayq.size);
         if (connection4) {
            break;
         }
      } while ((2 >= (5 * classesg.size)) && connection4);
          let editV = String.fromCharCode(102,95,53,56,95,115,104,111,114,116,101,115,116,0);
          let volumea: Array<any> = [String.fromCharCode(105,100,101,97,108,95,119,95,56,55,0), String.fromCharCode(114,101,100,101,101,109,95,108,95,51,48,0), String.fromCharCode(111,95,54,95,118,101,114,115,105,111,110,115,0)];
         iconarrowrightd -= 1;
         editV = `${volumea.length / (Math.max(9, editV.length))}`;
         volumea = [3 >> (Math.min(2, volumea.length))];
       let bellz: Array<any> = [186, 349, 629];
       let giftm: Array<any> = [245, 962];
      if (5 == (2 >> (Math.min(5, giftm.length)))) {
          let cornershootJ = 2;
         bellz.push(cornershootJ * parseInt(`${iconarrowrightd}`));
      }
          let stringE = String.fromCharCode(103,95,49,50,95,101,118,114,99,100,97,116,97,0);
          let rewindS: Map<any, any> = new Map([[String.fromCharCode(116,121,112,101,95,105,95,57,53,0),true ], [String.fromCharCode(112,95,50,49,95,107,118,111,0),true ]]);
         giftm.push(2 * classesg.size);
         stringE += `${1 >> (Math.min(3, Math.abs(rewindS.size)))}`;
         rewindS = new Map([[`${rewindS.size}`, 1]]);
         giftm = [grayq.size + parseInt(`${configureD}`)];
         iconarrowrightd += 3 ^ giftm.length;
      let textlayoutmanager_ = 7426128 <= grayq.size;
      do {
          let projectP = String.fromCharCode(99,111,110,116,111,108,108,101,114,95,52,95,52,52,0);
          let libsentryK = 5;
          let mappingD = String.fromCharCode(115,117,98,116,114,101,101,95,117,95,54,54,0);
          let bridgeU = String.fromCharCode(120,95,55,53,95,103,97,117,115,115,105,97,110,105,105,114,100,0);
          let libavdevice0 = false;
         grayq = new Map([[`${grayq.size}`, 2]]);
         projectP = `${1 / (Math.max(7, projectP.length))}`;
         libsentryK -= (mappingD == String.fromCharCode(55,0) ? mappingD.length : libsentryK);
         bridgeU = `${1 * mappingD.length}`;
         libavdevice0 = libavdevice0 && bridgeU.length <= 91;
         if (textlayoutmanager_) {
            break;
         }
      } while ((grayq.get(`${iconarrowrightd}`) != null) && textlayoutmanager_);
      for (let n = 0; n < 1; n++) {
          let libruntimeexecutore = String.fromCharCode(99,111,100,101,99,112,114,105,118,95,105,95,49,55,0);
         iconarrowrightd -= giftm.length;
         libruntimeexecutore = `${3 - libruntimeexecutore.length}`;
      }
      let with_yG = 9166603.0 <= configureD;
      do {
         configureD += bellz.length;
         if (with_yG) {
            break;
         }
      } while (with_yG && ((configureD - grayq.size) >= 3.8 && (grayq.size - parseInt(`${configureD}`)) >= 3));
      for (let e = 0; e < 2; e++) {
          let nbatrophyQ = 3.0;
          let libreactP = String.fromCharCode(100,105,115,116,114,97,99,116,97,98,108,101,95,48,95,57,0);
          let giftbutton5 = String.fromCharCode(117,95,53,55,95,97,100,115,97,114,109,97,115,109,0);
          let diceJ = 2;
         iconarrowrightd -= 2 & diceJ;
         nbatrophyQ *= (parseFloat(`${String.fromCharCode(109,0) == giftbutton5 ? libreactP.length : giftbutton5.length}`));
         libreactP = `${1 >> (Math.min(3, giftbutton5.length))}`;
         diceJ += 1;
      }
      uimanagerq = [classesg.size - parseInt(`${feedbackh}`)];
   }
      uploadK = `${(String.fromCharCode(98,0) == flyero ? parseInt(`${feedbackh}`) : flyero.length)}`;
   let homeiconP = 5260189 <= flyero.length;
   do {
      flyero += `${flyero.length}`;
      if (homeiconP) {
         break;
      }
   } while (homeiconP && (!flyero.includes(`${uploadK.length}`)));
      uimanagerq.push(flyero.length);
   for (let y = 0; y < 3; y++) {
      l_viewa.push(((encryptH ? 4 : 3)));
   }
      feedbackh -= parseFloat(`${l_viewa.length}`);

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
          modalPresentationStyle: "huaweiSave",
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
       let yingk = 0.0;
    let chinab: Map<any, any> = new Map([[String.fromCharCode(114,101,99,117,114,115,105,118,101,108,121,95,52,95,50,53,0),String.fromCharCode(120,95,56,55,95,100,105,115,115,105,109,0)], [String.fromCharCode(116,95,53,95,101,120,105,115,116,101,110,99,101,0),String.fromCharCode(105,110,116,101,114,110,97,116,105,111,110,97,108,108,121,0)]]);
    let football2 = String.fromCharCode(106,95,53,51,0);
    let guidec: Array<any> = [238, 210, 864];
    let iconorientationT = String.fromCharCode(101,95,49,55,95,112,97,114,116,105,116,105,111,110,115,0);
    let main_sN = String.fromCharCode(121,95,55,50,95,97,100,111,98,101,0);
    let yellowtored7 = String.fromCharCode(102,108,105,99,95,55,95,56,52,0);
    let benefitD = 5;
    let temperature_ = String.fromCharCode(119,95,57,50,95,102,100,99,116,0);
    let footballfield4 = 4.0;
    let injuryD = String.fromCharCode(119,95,49,52,95,109,111,100,97,108,0);
      guidec = [yellowtored7.length << (Math.min(main_sN.length, 5))];
   let starp = 8916762 <= football2.length;
   do {
       let topono = 1.0;
       let temperatureH = false;
       let sliderJ = 5;
       let homeloadinga = 4;
       let componentregistryi = 2;
         homeloadinga |= 2;
         componentregistryi |= 2 << (Math.min(2, Math.abs(sliderJ)));
      let backwhite9 = homeloadinga <= 8708141;
      do {
          let iconwatchnowW = 1.0;
          let private_d9: Map<any, any> = new Map([[String.fromCharCode(117,95,52,51,95,115,117,98,115,116,114,0),488], [String.fromCharCode(120,95,52,55,95,108,105,98,111,112,101,110,104,0),466], [String.fromCharCode(112,107,116,99,112,121,95,53,95,57,55,0),384]]);
          let fastG = String.fromCharCode(114,95,55,50,95,118,105,118,111,0);
         homeloadinga >>= Math.min(Math.abs(private_d9.size), 2);
         iconwatchnowW *= parseFloat(`${fastG.length % 3}`);
         private_d9 = new Map([[fastG, fastG.length | parseInt(`${iconwatchnowW}`)]]);
         if (backwhite9) {
            break;
         }
      } while (backwhite9 && (5 > homeloadinga));
         homeloadinga >>= Math.min(3, Math.abs(((temperatureH ? 1 : 1) ^ parseInt(`${topono}`))));
      let type_d9 = temperatureH ? !temperatureH : temperatureH;
      do {
         temperatureH = 75 == sliderJ && temperatureH;
         if (type_d9) {
            break;
         }
      } while ((componentregistryi == 1) && type_d9);
          let clubq = String.fromCharCode(115,115,105,109,95,108,95,51,54,0);
          let policyO: Map<any, any> = new Map([[String.fromCharCode(115,111,108,118,101,114,95,103,95,55,49,0),451], [String.fromCharCode(97,117,116,111,97,114,99,104,105,118,101,95,108,95,57,55,0),596]]);
         temperatureH = clubq == String.fromCharCode(115,0) && 100 > componentregistryi;
         clubq += `${policyO.size % (Math.max(9, policyO.size))}`;
      let graphJ = sliderJ <= 6592644;
      do {
         sliderJ <<= Math.min(2, Math.abs((parseInt(`${topono}`) ^ (temperatureH ? 5 : 5))));
         if (graphJ) {
            break;
         }
      } while (graphJ && (4 >= (sliderJ | homeloadinga)));
          let historya = 1.0;
         temperatureH = componentregistryi > 70 && sliderJ > 70;
         historya += parseInt(`${historya}`);
          let baselinex = String.fromCharCode(99,95,49,53,95,100,101,114,105,118,97,116,105,118,101,0);
         topono -= 1;
         baselinex = `${baselinex.length ^ 1}`;
      for (let b = 0; b < 1; b++) {
         temperatureH = 94 <= sliderJ;
      }
       let backp = false;
      while ((sliderJ | homeloadinga) <= 3 || (sliderJ | 3) <= 3) {
         sliderJ /= Math.max((componentregistryi - (backp ? 4 : 2)), 3);
         break;
      }
       let unimplementedviewF = 1;
       let crownC = 3;
      if (unimplementedviewF > 2 || 1 > (unimplementedviewF / (Math.max(2, 2)))) {
         temperatureH = 62 == (topono / (Math.max(6, unimplementedviewF)));
      }
      for (let b = 0; b < 3; b++) {
         componentregistryi &= 3;
      }
      football2 += `${((temperatureH ? 5 : 5) / (Math.max(1, 4)))}`;
      if (starp) {
         break;
      }
   } while (starp && (iconorientationT == String.fromCharCode(66,0)));
   if (football2.length == 5) {
      temperature_ += `${3 + parseInt(`${yingk}`)}`;
   }
   if (yellowtored7 != iconorientationT) {
      iconorientationT = `${temperature_.length ^ 2}`;
   }
   let forwardr = temperature_.length <= 7864578;
   do {
       let notificationfillemptyZ = 3.0;
       let plashC = String.fromCharCode(110,111,110,110,117,108,108,111,117,116,95,119,95,52,48,0);
       let window_5k = String.fromCharCode(112,114,105,118,97,116,101,95,104,95,51,48,0);
       let const_us: Array<any> = [1000, 806, 91];
       let yellowscoreballM = 1.0;
      for (let f = 0; f < 3; f++) {
          let b_viewL = 0;
          let iconstarz = String.fromCharCode(102,114,111,109,98,121,116,101,97,114,114,97,121,95,115,95,49,0);
         window_5k += "1";
         b_viewL >>= Math.min(1, Math.abs(2));
         iconstarz += `${b_viewL & iconstarz.length}`;
      }
         plashC = `${parseInt(`${notificationfillemptyZ}`)}`;
      for (let r = 0; r < 1; r++) {
          let profileR = true;
          let livesharer: Array<any> = [734, 607];
          let modulec: Array<any> = [4, 833];
          let iconadslinkD = String.fromCharCode(115,101,116,116,105,110,103,95,100,95,56,49,0);
          let bufferM = 4.0;
         plashC = `${window_5k.length * parseInt(`${bufferM}`)}`;
         profileR = iconadslinkD == String.fromCharCode(70,0);
         livesharer = [iconadslinkD.length - livesharer.length];
         modulec = [livesharer.length];
         bufferM *= modulec.length % (Math.max(iconadslinkD.length, 5));
      }
          let matchV: Array<any> = [647, 946, 828];
          let videovarH: Map<any, any> = new Map([[String.fromCharCode(109,111,100,101,110,97,109,101,95,102,95,57,56,0),504], [String.fromCharCode(118,95,57,48,95,112,105,120,101,108,102,108,111,97,116,0),765]]);
          let otherL = String.fromCharCode(106,95,53,56,95,102,111,117,114,120,0);
         plashC += `${videovarH.size}`;
         matchV = [otherL.length];
         videovarH = new Map([[`${matchV.length}`, 2]]);
         otherL += `${matchV.length}`;
       let membershipX = 5.0;
      for (let f = 0; f < 3; f++) {
          let libglogD = String.fromCharCode(122,95,56,51,95,116,115,99,99,100,97,116,97,0);
          let scheduleP = 5.0;
          let minimizeZ: Array<any> = [864, 247, 605];
          let gmailB = 2.0;
         window_5k += `${parseInt(`${yellowscoreballM}`)}`;
         libglogD = `${parseInt(`${scheduleP}`) - 1}`;
         scheduleP /= Math.max(parseFloat(`${parseInt(`${scheduleP}`) << (Math.min(libglogD.length, 1))}`), 2);
         minimizeZ = [libglogD.length + 2];
         gmailB /= Math.max(parseFloat(`${minimizeZ.length}`), 2);
      }
          let closeU = String.fromCharCode(121,95,50,57,95,98,105,116,115,116,114,0);
          let balls: Array<any> = [String.fromCharCode(103,114,97,100,105,101,110,116,95,104,95,52,50,0), String.fromCharCode(97,95,56,55,95,97,108,108,111,99,97,116,105,111,110,0), String.fromCharCode(119,95,53,57,95,100,105,115,112,111,115,97,98,108,101,0)];
         window_5k = `${parseInt(`${notificationfillemptyZ}`) - const_us.length}`;
         closeU = `${balls.length % 2}`;
         balls = [closeU.length & 1];
      while ((const_us.length >> (Math.min(Math.abs(3), 4))) < 2) {
         yellowscoreballM += parseFloat(`${parseInt(`${membershipX}`)}`);
         break;
      }
         yellowscoreballM -= parseFloat(`${const_us.length}`);
      if (4.94 < (membershipX / 4.48) && (const_us.length % (Math.max(2, 5))) < 1) {
          let iconlogoutb = 2.0;
          let promotion_ = 1;
         membershipX *= parseInt(`${membershipX}`) - 1;
         iconlogoutb += 3;
         promotion_ >>= Math.min(3, Math.abs(1 / (Math.max(3, parseInt(`${iconlogoutb}`)))));
      }
      if (plashC.startsWith(`${notificationfillemptyZ}`)) {
         plashC = `${3 & const_us.length}`;
      }
      if ((notificationfillemptyZ + 3.99) < 4.65 || (3.99 + notificationfillemptyZ) < 5.83) {
         const_us = [parseInt(`${yellowscoreballM}`) + window_5k.length];
      }
      let sentryt = yellowscoreballM >= 6051258.0;
      do {
          let traminip: Map<any, any> = new Map([[String.fromCharCode(105,95,53,56,95,105,115,110,97,110,0),false ], [String.fromCharCode(112,114,111,103,114,101,115,115,105,118,101,95,104,95,56,51,0),false ], [String.fromCharCode(108,97,121,101,114,95,56,95,55,54,0),true ]]);
         yellowscoreballM /= Math.max(3, parseFloat(`${window_5k.length}`));
         traminip.set(`${traminip.size}`, traminip.size);
         if (sentryt) {
            break;
         }
      } while ((1.100 < (yellowscoreballM + 5.66)) && sentryt);
         window_5k = "3";
      if (membershipX < 3.21) {
          let rewardp = String.fromCharCode(99,111,110,118,101,114,116,105,110,103,95,114,95,49,53,0);
         membershipX *= 1;
         rewardp += `${rewardp.length / 3}`;
      }
      temperature_ += "1";
      if (forwardr) {
         break;
      }
   } while (((temperature_.length << (Math.min(3, Math.abs(chinab.size)))) >= 1 || (temperature_.length << (Math.min(1, Math.abs(chinab.size)))) >= 1) && forwardr);
   for (let c = 0; c < 3; c++) {
      yingk -= 2 * benefitD;
   }
       let hejiQ = 1;
         hejiQ /= Math.max(hejiQ & hejiQ, 2);
       let mimoN = String.fromCharCode(122,95,53,55,95,104,101,120,105,110,116,0);
       let firebases = String.fromCharCode(106,95,49,57,95,105,110,105,116,105,97,116,111,114,0);
      if (mimoN.length >= hejiQ) {
         mimoN = `${hejiQ ^ mimoN.length}`;
      }
      yingk *= parseInt(`${yingk}`);
      main_sN += "1";
      benefitD *= parseInt(`${yingk}`);
      iconorientationT = `${iconorientationT.length << (Math.min(Math.abs(2), 1))}`;
      yingk /= Math.max(3, chinab.size * benefitD);
   while (main_sN.length <= yingk) {
       let types9 = 0;
          let coreN: Array<any> = [706, 369, 78];
          let greenB = true;
          let libbufferD: Array<any> = [675, 513];
         types9 /= Math.max(3, coreN.length / 2);
         coreN.push(libbufferD.length);
         greenB = (libbufferD.length / (Math.max(9, libbufferD.length))) >= 63;
         types9 *= types9 / (Math.max(types9, 7));
         types9 += types9;
      main_sN = `${benefitD >> (Math.min(Math.abs(types9), 2))}`;
      break;
   }
       let iconcalendare = 0.0;
       let audienceM = String.fromCharCode(117,95,55,52,95,111,116,111,105,0);
       let awayK: Map<any, any> = new Map([[String.fromCharCode(97,98,115,95,53,95,57,0),String.fromCharCode(116,95,53,50,95,112,117,115,104,0)], [String.fromCharCode(107,95,55,54,95,108,97,98,101,108,115,0),String.fromCharCode(115,95,53,56,95,97,99,111,108,111,114,0)], [String.fromCharCode(114,116,112,114,101,99,101,105,118,101,114,95,103,95,55,54,0),String.fromCharCode(101,108,105,115,116,95,97,95,55,56,0)]]);
      if (2 == (3 + audienceM.length)) {
         audienceM = `${awayK.size}`;
      }
      while (1 <= (3 ^ awayK.size)) {
          let telemetry0 = true;
          let anytime2 = 2;
          let belld = 1;
          let nendt = String.fromCharCode(117,95,53,49,95,118,101,114,116,105,99,97,108,0);
         audienceM += `${belld}`;
         telemetry0 = 54 >= anytime2 || telemetry0;
         anytime2 *= (2 ^ (telemetry0 ? 3 : 4));
         belld >>= Math.min(4, nendt.length);
         nendt = `${(nendt == String.fromCharCode(107,0) ? nendt.length : (telemetry0 ? 4 : 4))}`;
         break;
      }
       let promotionL = String.fromCharCode(119,97,115,95,120,95,49,56,0);
       let unreadL = String.fromCharCode(120,95,49,56,95,98,111,111,116,115,116,114,97,112,0);
          let videojsT = false;
          let klevinP = false;
         promotionL = `${parseInt(`${iconcalendare}`) | 2}`;
         videojsT = (!klevinP ? !videojsT : !klevinP);
      main_sN = `${temperature_.length - parseInt(`${footballfield4}`)}`;
       let libffmpegkitm = 2;
       let interstitialx = 5.0;
       let hongkongp = 5.0;
          let heartR: Array<any> = [String.fromCharCode(115,95,50,48,95,98,105,116,114,101,100,117,99,116,105,111,110,0), String.fromCharCode(97,102,102,101,99,116,101,100,95,107,95,55,50,0), String.fromCharCode(113,110,111,115,95,104,95,52,51,0)];
         interstitialx *= parseInt(`${hongkongp}`);
         heartR = [heartR.length];
      for (let z = 0; z < 2; z++) {
         libffmpegkitm |= parseInt(`${interstitialx}`);
      }
          let buildq = true;
         hongkongp += parseFloat(`${1}`);
         buildq = !buildq;
      let gestureH = 9119018.0 >= interstitialx;
      do {
          let yellowtoredh = String.fromCharCode(112,95,57,50,95,111,114,119,97,114,100,101,100,0);
          let modulesD = false;
          let chinac = false;
          let brightnessT = false;
          let leagueQ: Map<any, any> = new Map([[String.fromCharCode(114,95,50,56,95,98,121,112,97,115,115,0),String.fromCharCode(103,101,116,114,97,110,100,111,109,95,49,95,51,48,0)], [String.fromCharCode(122,95,50,95,109,97,116,99,104,0),String.fromCharCode(103,95,55,55,95,111,112,101,110,115,115,108,118,0)]]);
         interstitialx *= parseInt(`${hongkongp}`);
         yellowtoredh = `${((chinac ? 5 : 3))}`;
         modulesD = !brightnessT || yellowtoredh.length < 15;
         chinac = (36 >= (leagueQ.size * (!brightnessT ? 36 : leagueQ.size)));
         if (gestureH) {
            break;
         }
      } while (((interstitialx - 1.1) <= 1.64 && 4.49 <= (hongkongp - 1.1)) && gestureH);
         libffmpegkitm &= 1;
      while (interstitialx == hongkongp) {
         hongkongp -= parseFloat(`${1 & parseInt(`${interstitialx}`)}`);
         break;
      }
         hongkongp /= Math.max(1, parseFloat(`${3}`));
         interstitialx /= Math.max(1, 1 & parseInt(`${interstitialx}`));
         libffmpegkitm &= parseInt(`${hongkongp}`) | libffmpegkitm;
      main_sN = `${parseInt(`${interstitialx}`) & parseInt(`${hongkongp}`)}`;

              setDialogText(tryAgainDialogText);

       let frame_4f = 2.0;
       let actionsj = String.fromCharCode(113,95,55,51,95,102,111,114,101,105,103,110,0);
         actionsj += `${actionsj.length % (Math.max(1, 10))}`;
         actionsj = "3";
      let countdownB = 8108465 >= actionsj.length;
      do {
         actionsj += `${parseInt(`${frame_4f}`)}`;
         if (countdownB) {
            break;
         }
      } while ((actionsj.startsWith(`${frame_4f}`)) && countdownB);
      let dicek = String.fromCharCode(53,111,116,52,121,121,51,100,98,0) == actionsj;
      do {
         actionsj = `${parseInt(`${frame_4f}`)}`;
         if (dicek) {
            break;
         }
      } while ((5.90 >= (frame_4f / 3.64)) && dicek);
      while (5.68 == frame_4f) {
         actionsj += `${actionsj.length >> (Math.min(1, Math.abs(parseInt(`${frame_4f}`))))}`;
         break;
      }
         frame_4f -= 1;
      footballfield4 -= (parseFloat(`${yellowtored7 == String.fromCharCode(55,0) ? benefitD : yellowtored7.length}`));
   if (football2.includes(`${benefitD}`)) {
      football2 += `${yellowtored7.length}`;
   }
   let yingG = String.fromCharCode(108,51,105,106,100,112,49,57,0) == iconorientationT;
   do {
      iconorientationT += `${iconorientationT.length % (Math.max(3, benefitD))}`;
      if (yingG) {
         break;
      }
   } while (yingG && (iconorientationT != String.fromCharCode(122,0) || main_sN != String.fromCharCode(107,0)));
   while (1 >= temperature_.length) {
      temperature_ += `${iconorientationT.length}`;
      break;
   }
       let foundj = 3;
       let valuesN: Map<any, any> = new Map([[String.fromCharCode(115,104,97,114,100,95,116,95,52,52,0),730], [String.fromCharCode(115,104,111,119,110,95,120,95,56,48,0),423]]);
      if (2 == valuesN.size) {
          let relatedv = String.fromCharCode(114,101,99,111,110,105,110,116,101,114,95,98,95,54,54,0);
          let huaweiz = 1.0;
          let shirtY = String.fromCharCode(116,101,115,116,111,114,105,103,95,48,95,54,49,0);
         valuesN = new Map([[`${huaweiz}`, 1 * parseInt(`${huaweiz}`)]]);
         relatedv += `${(shirtY == String.fromCharCode(109,0) ? shirtY.length : relatedv.length)}`;
      }
      if (valuesN.get(`${foundj}`) != null) {
         foundj += foundj;
      }
      let iconpipexpandI = 8677196 >= foundj;
      do {
         foundj &= foundj * 3;
         if (iconpipexpandI) {
            break;
         }
      } while ((4 == (2 >> (Math.min(2, Math.abs(valuesN.size)))) || 5 == (foundj >> (Math.min(Math.abs(2), 2)))) && iconpipexpandI);
         foundj -= valuesN.size;
      let trophyV = valuesN.size <= 4994844;
      do {
         valuesN = new Map([[`${valuesN.size}`, valuesN.size / (Math.max(5, foundj))]]);
         if (trophyV) {
            break;
         }
      } while (trophyV && (2 > (valuesN.size << (Math.min(Math.abs(1), 2))) || (1 << (Math.min(1, Math.abs(foundj)))) > 3));
      let iconorientationw = 6259516 >= foundj;
      do {
         foundj -= foundj % (Math.max(valuesN.size, 9));
         if (iconorientationw) {
            break;
         }
      } while ((Array.from(valuesN.keys()).includes(`${foundj}`)) && iconorientationw);
      yellowtored7 = `${parseInt(`${footballfield4}`) + 2}`;
   for (let b = 0; b < 3; b++) {
       let render8 = String.fromCharCode(112,114,105,110,116,95,102,95,55,49,0);
       let sliderC: Array<any> = [229, 145];
       let i_unlock4 = 2.0;
         i_unlock4 += sliderC.length / 2;
         sliderC = [render8.length];
          let libjsijniprofilerG = String.fromCharCode(97,95,55,50,95,105,116,101,114,97,116,105,118,101,0);
          let lessJ = 3.0;
          let reddownarrowK = false;
         i_unlock4 *= (String.fromCharCode(98,0) == libjsijniprofilerG ? libjsijniprofilerG.length : sliderC.length);
         lessJ += (parseFloat(`${(reddownarrowK ? 4 : 3) + parseInt(`${lessJ}`)}`));
         reddownarrowK = !reddownarrowK;
         i_unlock4 /= Math.max(5, sliderC.length + render8.length);
         sliderC = [sliderC.length];
       let iconstarO = String.fromCharCode(100,101,97,99,116,95,121,95,56,54,0);
       let anythinkn = String.fromCharCode(112,114,111,98,97,98,105,108,105,116,105,101,115,95,108,95,57,55,0);
      let selectionC = render8.length >= 9368464;
      do {
          let episodesN: Array<any> = [String.fromCharCode(121,95,49,53,95,108,97,115,116,110,111,100,101,0), String.fromCharCode(104,95,53,95,117,112,97,116,101,100,0)];
          let tumbnaild = 1.0;
         render8 = `${parseInt(`${i_unlock4}`) / 2}`;
         episodesN = [episodesN.length & 3];
         tumbnaild *= 2;
         if (selectionC) {
            break;
         }
      } while ((2 < iconstarO.length) && selectionC);
          let rnews3 = String.fromCharCode(100,105,115,99,117,115,115,95,104,95,57,54,0);
          let auto_or = String.fromCharCode(113,117,97,114,116,122,95,49,95,49,52,0);
          let ball8 = String.fromCharCode(114,95,52,54,95,100,105,116,104,101,114,0);
         render8 = `${auto_or.length}`;
         rnews3 = "2";
         auto_or = `${ball8.length << (Math.min(5, rnews3.length))}`;
         ball8 = "2";
      if (sliderC.includes(i_unlock4)) {
         sliderC.push(render8.length - 2);
      }
      chinab = new Map([[`${chinab.size}`, 3]]);
   }
       let defaultroombgA = String.fromCharCode(109,95,50,48,95,116,97,112,112,105,110,103,0);
       let floaterN = 0;
          let confirmationw: Map<any, any> = new Map([[String.fromCharCode(102,111,114,109,95,108,95,53,54,0),462], [String.fromCharCode(99,117,114,114,95,53,95,56,48,0),521]]);
          let reactnativeratingsa = String.fromCharCode(99,95,52,49,95,99,111,109,109,97,110,100,0);
          let unselectedv = 2.0;
         floaterN &= defaultroombgA.length;
         confirmationw.set(`${unselectedv}`, parseInt(`${unselectedv}`) - confirmationw.size);
         reactnativeratingsa = `${reactnativeratingsa.length - 2}`;
      while ((4 + floaterN) < 4 && (4 + defaultroombgA.length) < 4) {
         floaterN %= Math.max(4, defaultroombgA.length);
         break;
      }
         floaterN -= 3;
         floaterN += (String.fromCharCode(98,0) == defaultroombgA ? defaultroombgA.length : floaterN);
         floaterN *= 1;
      while (floaterN <= defaultroombgA.length) {
         defaultroombgA += `${defaultroombgA.length / (Math.max(7, floaterN))}`;
         break;
      }
      guidec.push(benefitD);
      guidec = [parseInt(`${footballfield4}`) % (Math.max(3, parseInt(`${yingk}`)))];
   for (let h = 0; h < 1; h++) {
      benefitD *= yellowtored7.length * parseInt(`${footballfield4}`);
   }
      yellowtored7 = `${(String.fromCharCode(122,0) == iconorientationT ? iconorientationT.length : injuryD.length)}`;
       let z_positionx = false;
       let audienced = String.fromCharCode(116,112,101,108,100,115,112,95,116,95,55,57,0);
      while (audienced.endsWith(`${z_positionx}`)) {
         z_positionx = audienced.length >= 64;
         break;
      }
         z_positionx = audienced.length <= 40 || !z_positionx;
      guidec = [3];
      main_sN = `${benefitD * 2}`;
      chinab.set(football2, football2.length + benefitD);
   if ((benefitD + 2) > 1 || (benefitD + 2) > 2) {
      temperature_ += `${(String.fromCharCode(68,0) == main_sN ? main_sN.length : football2.length)}`;
   }
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
       let crown7: Map<any, any> = new Map([[String.fromCharCode(104,95,55,57,95,99,116,105,111,110,0),849], [String.fromCharCode(115,116,101,114,101,111,100,95,55,95,49,54,0),18], [String.fromCharCode(117,95,53,49,95,105,115,112,108,97,121,0),800]]);
    let libavdevice6 = false;
    let subsl = 1.0;
    let activityq: Map<any, any> = new Map([[String.fromCharCode(99,95,49,52,0),true ], [String.fromCharCode(99,111,110,116,97,105,110,101,114,115,95,114,95,50,50,0),true ]]);
    let build7 = true;
    let umengy = 3.0;
    let template_hbb: Array<any> = [696, 432];
    let completeT = true;
    let largesound2 = String.fromCharCode(118,105,115,98,108,101,95,100,95,56,50,0);
    let showh = 2.0;
      umengy *= parseFloat(`${parseInt(`${umengy}`) / (Math.max(template_hbb.length, 5))}`);
       let rewardl: Array<any> = [String.fromCharCode(111,95,55,49,95,97,98,115,116,0), String.fromCharCode(106,95,55,55,95,99,117,98,101,0), String.fromCharCode(97,108,110,117,109,95,99,95,49,50,0)];
       let libreactperfloggerjni0: Array<any> = [72, 373];
         libreactperfloggerjni0 = [libreactperfloggerjni0.length ^ 1];
      if (rewardl.length >= 2) {
          let libturbomodulejsijni4: Array<any> = [749, 771, 166];
          let defaultprofilepicE = 4;
         rewardl = [2];
         libturbomodulejsijni4.push(2);
         defaultprofilepicE |= libturbomodulejsijni4.length;
      }
      let productQ = libreactperfloggerjni0.length <= 6469229;
      do {
          let shootyesgoalz = false;
          let libjsi1 = 3.0;
          let leaguei = String.fromCharCode(98,95,51,56,95,115,116,114,105,110,103,0);
          let bottomv = String.fromCharCode(107,95,53,55,95,97,100,97,112,116,97,116,105,111,110,0);
          let reducerj: Map<any, any> = new Map([[String.fromCharCode(109,95,56,52,95,115,101,113,118,105,100,101,111,0),179], [String.fromCharCode(102,95,54,52,95,115,101,109,97,110,116,105,99,115,0),927], [String.fromCharCode(114,101,103,105,111,110,95,110,95,49,48,48,0),70]]);
         libreactperfloggerjni0 = [bottomv.length];
         shootyesgoalz = null == reducerj.get(`${shootyesgoalz}`);
         libjsi1 -= parseInt(`${libjsi1}`) + 1;
         leaguei = `${reducerj.size & 1}`;
         bottomv += `${(String.fromCharCode(103,0) == leaguei ? (shootyesgoalz ? 5 : 2) : leaguei.length)}`;
         if (productQ) {
            break;
         }
      } while ((3 <= rewardl.length) && productQ);
          let z_positionb: Map<any, any> = new Map([[String.fromCharCode(112,117,98,101,120,112,95,117,95,51,48,0),957], [String.fromCharCode(111,109,109,111,110,95,51,95,50,52,0),254]]);
         rewardl.push(libreactperfloggerjni0.length);
         z_positionb = new Map([[`${z_positionb.size}`, z_positionb.size]]);
      if (rewardl.length < 1) {
         libreactperfloggerjni0 = [3 * rewardl.length];
      }
      let loadingg = rewardl.length <= 8895966;
      do {
         rewardl = [rewardl.length << (Math.min(3, libreactperfloggerjni0.length))];
         if (loadingg) {
            break;
         }
      } while (loadingg && ((libreactperfloggerjni0.length >> (Math.min(1, rewardl.length))) >= 3 || (3 >> (Math.min(2, rewardl.length))) >= 2));
      largesound2 = `${1 << (Math.min(3, largesound2.length))}`;
       let foundK = 0;
      for (let q = 0; q < 1; q++) {
         foundK |= foundK;
      }
      let greeni = foundK <= 9689855;
      do {
         foundK /= Math.max(2, 1);
         if (greeni) {
            break;
         }
      } while (((foundK / 4) > 3 && 3 > (foundK / (Math.max(4, 10)))) && greeni);
      while ((3 % (Math.max(8, foundK))) <= 5) {
         foundK >>= Math.min(1, Math.abs(1));
         break;
      }
      crown7 = new Map([[`${template_hbb.length}`, template_hbb.length]]);
      crown7 = new Map([[`${activityq.size}`, 3]]);
   for (let s = 0; s < 1; s++) {
      activityq.set(`${showh}`, (parseInt(`${showh}`) * (completeT ? 3 : 5)));
   }
      crown7.set(`${subsl}`, ((build7 ? 4 : 1) << (Math.min(Math.abs(parseInt(`${subsl}`)), 2))));
   let textlayoutmanagerq = libavdevice6 ? !libavdevice6 : libavdevice6;
   do {
      libavdevice6 = !largesound2.startsWith(`${showh}`);
      if (textlayoutmanagerq) {
         break;
      }
   } while ((libavdevice6) && textlayoutmanagerq);
       let foundq = 1;
      while (foundq <= 4) {
         foundq /= Math.max(2, foundq);
         break;
      }
      while (foundq <= 1) {
          let volumeQ = true;
          let castY = false;
          let google6 = String.fromCharCode(98,95,49,55,95,97,116,116,114,105,98,117,116,105,111,110,0);
         foundq <<= Math.min(4, google6.length);
         volumeQ = !volumeQ;
         castY = volumeQ && !volumeQ;
         break;
      }
      while ((foundq >> (Math.min(Math.abs(1), 2))) < 4) {
         foundq *= 3 * foundq;
         break;
      }
      umengy -= parseFloat(`${1}`);
   while (umengy > 1.75) {
      umengy *= parseFloat(`${activityq.size}`);
      break;
   }
   let indicatorN = 7053646.0 >= showh;
   do {
      showh += (parseFloat(`${(build7 ? 2 : 5)}`));
      if (indicatorN) {
         break;
      }
   } while (indicatorN && (5.43 > (5.40 + showh)));
   while (2.23 <= (umengy * 1.17) && !libavdevice6) {
       let transferI = String.fromCharCode(102,97,110,99,121,95,48,95,50,54,0);
       let dragM = 3.0;
       let iconbackwhiteC = 4.0;
       let libavutil8: Map<any, any> = new Map([[String.fromCharCode(101,118,114,99,95,56,95,55,55,0),96], [String.fromCharCode(114,101,99,101,105,118,101,114,95,110,95,57,49,0),52]]);
      for (let q = 0; q < 2; q++) {
         iconbackwhiteC *= parseFloat(`${libavutil8.size - parseInt(`${dragM}`)}`);
      }
      if (3.19 >= (2.24 * dragM) || 2.44 >= (2.24 * dragM)) {
          let leakcheckerD = String.fromCharCode(109,97,116,120,95,106,95,55,54,0);
          let plusu = 3.0;
          let smallbrightness4 = 4.0;
          let constantsf = 5.0;
         dragM -= (transferI == String.fromCharCode(67,0) ? parseInt(`${smallbrightness4}`) : transferI.length);
         leakcheckerD = `${leakcheckerD.length % (Math.max(3, 10))}`;
         plusu /= Math.max((parseFloat(`${String.fromCharCode(111,0) == leakcheckerD ? leakcheckerD.length : parseInt(`${plusu}`)}`)), 1);
         smallbrightness4 /= Math.max(5, parseFloat(`${parseInt(`${plusu}`)}`));
         constantsf += parseInt(`${plusu}`);
      }
      while (1 >= (3 - transferI.length) || (5.36 * dragM) >= 5.6) {
         transferI += "2";
         break;
      }
          let privilegeS = String.fromCharCode(101,110,100,112,111,105,110,116,115,95,99,95,53,52,0);
          let submitV = 5.0;
         iconbackwhiteC -= parseFloat(`${3}`);
         privilegeS = `${(privilegeS == String.fromCharCode(118,0) ? privilegeS.length : parseInt(`${submitV}`))}`;
         submitV -= parseInt(`${submitV}`) << (Math.min(privilegeS.length, 2));
      if ((parseFloat(`${transferI.length}`) + iconbackwhiteC) <= 4.85 && 5.67 <= (4.85 + iconbackwhiteC)) {
         iconbackwhiteC /= Math.max(1, (parseFloat(`${String.fromCharCode(71,0) == transferI ? transferI.length : parseInt(`${dragM}`)}`)));
      }
       let reactl: Map<any, any> = new Map([[String.fromCharCode(114,95,56,56,95,112,114,101,100,105,99,116,105,111,110,0),514], [String.fromCharCode(114,95,51,56,95,102,112,101,108,0),693], [String.fromCharCode(105,95,55,95,100,99,98,122,0),164]]);
         transferI += `${2 >> (Math.min(2, transferI.length))}`;
      if (transferI.length <= 5) {
         transferI += `${libavutil8.size}`;
      }
         transferI = `${parseInt(`${dragM}`)}`;
      if (3 == (libavutil8.size / 5) || (iconbackwhiteC - 1.4) == 5.64) {
          let register_86: Map<any, any> = new Map([[String.fromCharCode(100,105,115,97,98,108,101,95,111,95,55,0),10], [String.fromCharCode(120,95,56,57,95,97,103,101,0),281]]);
          let humidityO: Map<any, any> = new Map([[String.fromCharCode(116,95,56,49,95,107,118,111,0),602], [String.fromCharCode(113,115,118,118,112,112,95,55,95,56,54,0),270], [String.fromCharCode(101,95,53,95,115,99,104,101,100,117,108,105,110,103,0),996]]);
         libavutil8 = new Map([[`${libavutil8.size}`, 1 ^ parseInt(`${dragM}`)]]);
         register_86 = new Map([[`${humidityO.size}`, 1 % (Math.max(6, register_86.size))]]);
         humidityO.set(`${humidityO.size}`, 2 * register_86.size);
      }
      for (let n = 0; n < 2; n++) {
         libavutil8 = new Map([[`${libavutil8.size}`, 2]]);
      }
         dragM += 1 - parseInt(`${dragM}`);
      umengy += parseFloat(`${crown7.size}`);
      break;
   }
       let foundo = String.fromCharCode(115,114,99,95,115,95,54,53,0);
       let formt = false;
       let libimagepipelinet = String.fromCharCode(116,117,114,110,111,102,102,95,98,95,49,57,0);
       let iconcalendar4 = 2;
       let matchesW = 5;
          let expiredF: Array<any> = [String.fromCharCode(115,105,103,116,101,114,109,95,98,95,50,52,0), String.fromCharCode(112,95,55,95,105,108,101,97,118,101,0), String.fromCharCode(122,95,54,51,95,99,111,108,108,97,116,105,111,110,0)];
         matchesW -= iconcalendar4 << (Math.min(Math.abs(2), 1));
         expiredF.push(expiredF.length);
      for (let n = 0; n < 1; n++) {
         foundo += `${matchesW / (Math.max(foundo.length, 6))}`;
      }
       let iconscheduler = 4.0;
          let iconwatchnowy = true;
          let inouttargetredg = 0.0;
          let productF = String.fromCharCode(114,101,111,112,101,110,95,55,95,51,54,0);
         libimagepipelinet = `${(String.fromCharCode(51,0) == productF ? productF.length : matchesW)}`;
         iconwatchnowy = !iconwatchnowy;
         inouttargetredg *= (parseFloat(`${parseInt(`${inouttargetredg}`) | (iconwatchnowy ? 5 : 5)}`));
      let iconbackwhitea = 8551179.0 >= iconscheduler;
      do {
          let eactm: Map<any, any> = new Map([[String.fromCharCode(98,95,51,95,111,110,108,121,0),722], [String.fromCharCode(121,95,52,53,95,114,109,115,105,112,114,0),299], [String.fromCharCode(100,105,114,101,99,116,111,114,121,95,48,95,52,53,0),46]]);
          let iconarrowrightorangeD = String.fromCharCode(112,114,101,99,97,108,99,95,117,95,54,51,0);
          let membershipK = String.fromCharCode(98,95,50,50,95,110,101,116,101,113,0);
         iconscheduler *= matchesW;
         eactm.set(membershipK, membershipK.length ^ 1);
         iconarrowrightorangeD = `${membershipK.length}`;
         if (iconbackwhitea) {
            break;
         }
      } while (((iconscheduler / (Math.max(9, foundo.length))) == 5.19) && iconbackwhitea);
         iconscheduler /= Math.max(4, (parseInt(`${iconscheduler}`) - (formt ? 4 : 4)));
      for (let e = 0; e < 2; e++) {
         iconcalendar4 >>= Math.min(Math.abs(1 + parseInt(`${iconscheduler}`)), 1);
      }
      for (let n = 0; n < 3; n++) {
         foundo += `${((formt ? 4 : 4) ^ matchesW)}`;
      }
      showh += parseFloat(`${3}`);
       let completel: Map<any, any> = new Map([[String.fromCharCode(117,95,54,95,114,101,97,112,101,114,0),840], [String.fromCharCode(118,108,99,115,95,118,95,57,51,0),929], [String.fromCharCode(102,95,51,49,95,97,97,114,99,104,0),824]]);
       let schedulerO = 3.0;
       let libbufferD: Map<any, any> = new Map([[String.fromCharCode(97,103,97,116,101,95,106,95,53,50,0),136], [String.fromCharCode(100,95,51,55,95,115,121,109,109,101,116,114,105,99,0),928]]);
       let danger4: Map<any, any> = new Map([[String.fromCharCode(105,95,55,56,95,115,104,111,114,116,99,117,116,115,0),922], [String.fromCharCode(114,95,51,51,95,99,111,109,112,97,99,116,0),847]]);
          let basketballawayteamL = String.fromCharCode(119,105,100,103,101,116,95,110,95,52,56,0);
          let libyogav = 1;
          let pingt: Map<any, any> = new Map([[String.fromCharCode(105,100,120,95,121,95,57,53,0),true ], [String.fromCharCode(111,95,49,57,95,108,97,122,105,108,121,0),true ]]);
         danger4.set(`${libyogav}`, libbufferD.size);
         basketballawayteamL = `${1 | pingt.size}`;
         libyogav |= pingt.size;
      while (completel.size >= libbufferD.size) {
          let unewinterstitialF = String.fromCharCode(110,115,101,103,109,101,110,116,115,95,48,95,54,54,0);
          let termsU = 0.0;
          let imagenetworkerrr = String.fromCharCode(116,105,109,101,115,95,115,95,49,51,0);
         completel = new Map([[`${termsU}`, parseInt(`${termsU}`) ^ 1]]);
         unewinterstitialF += `${unewinterstitialF.length}`;
         imagenetworkerrr += `${unewinterstitialF.length}`;
         break;
      }
          let areaU: Array<any> = [686, 363, 654];
          let iconstarg: Array<any> = [789, 894];
          let setting3 = String.fromCharCode(114,95,49,95,115,117,112,101,114,0);
         libbufferD.set(`${areaU.length}`, areaU.length);
         iconstarg = [iconstarg.length | setting3.length];
         setting3 += `${2 % (Math.max(3, setting3.length))}`;
          let package_jwE: Map<any, any> = new Map([[String.fromCharCode(111,95,53,51,95,100,101,98,117,103,98,111,120,0),String.fromCharCode(117,95,54,55,95,116,104,114,111,117,103,104,0)], [String.fromCharCode(106,95,55,56,95,108,101,102,116,109,111,115,116,0),String.fromCharCode(112,95,55,55,95,116,104,114,101,115,104,111,108,100,105,110,103,0)], [String.fromCharCode(109,95,53,48,95,112,114,105,110,116,101,114,0),String.fromCharCode(114,101,118,101,114,98,95,52,95,52,56,0)]]);
          let valuesj: Array<any> = [61, 754];
          let login4: Array<any> = [355, 594, 444];
         schedulerO -= parseFloat(`${libbufferD.size % (Math.max(3, 1))}`);
         package_jwE.set(`${login4.length}`, login4.length % (Math.max(6, package_jwE.size)));
         valuesj.push(valuesj.length);
          let privacy1 = String.fromCharCode(99,104,97,110,103,101,104,95,55,95,50,52,0);
         libbufferD = new Map([[`${completel.size}`, 1 - parseInt(`${schedulerO}`)]]);
         privacy1 += `${(privacy1 == String.fromCharCode(73,0) ? privacy1.length : privacy1.length)}`;
         libbufferD = new Map([[`${danger4.size}`, danger4.size]]);
       let iconsaveimagee: Array<any> = [962, 817, 864];
       let cornery: Array<any> = [978, 760, 842];
      if ((cornery.length | libbufferD.size) == 4 && (4 | libbufferD.size) == 1) {
          let ballC: Array<any> = [367, 652, 769];
          let downloadj = String.fromCharCode(113,95,52,57,95,112,104,97,115,101,0);
         libbufferD.set(`${cornery.length}`, iconsaveimagee.length << (Math.min(Math.abs(3), 3)));
         ballC.push(ballC.length);
         downloadj = `${downloadj.length << (Math.min(Math.abs(2), 4))}`;
      }
      activityq.set(`${subsl}`, 2);
      libavdevice6 = 61 <= activityq.size || 61 <= template_hbb.length;
      showh /= Math.max((parseFloat(`${(completeT ? 1 : 1) | activityq.size}`)), 3);
   for (let t = 0; t < 2; t++) {
       let dialogR = String.fromCharCode(108,95,56,95,97,110,109,114,0);
      while (dialogR != String.fromCharCode(117,0) && dialogR == String.fromCharCode(107,0)) {
         dialogR += `${dialogR.length + 3}`;
         break;
      }
         dialogR += `${dialogR.length}`;
      while (dialogR != dialogR) {
         dialogR += `${(String.fromCharCode(114,0) == dialogR ? dialogR.length : dialogR.length)}`;
         break;
      }
      completeT = showh >= subsl;
   }
   let collectiont = 7357795 <= activityq.size;
   do {
      activityq = new Map([[`${template_hbb.length}`, ((build7 ? 4 : 4) % (Math.max(template_hbb.length, 9)))]]);
      if (collectiont) {
         break;
      }
   } while (((activityq.size | 1) >= 5 && 4 >= (crown7.size | 1)) && collectiont);
   if (5.19 == subsl) {
      template_hbb = [parseInt(`${subsl}`) >> (Math.min(1, Math.abs(1)))];
   }
   if ((parseInt(`${subsl}`) + largesound2.length) == 5 && 2.28 == (2.100 + subsl)) {
      largesound2 += `${((build7 ? 5 : 5) | 1)}`;
   }
      crown7.set(`${subsl}`, 1 * parseInt(`${subsl}`));
   for (let q = 0; q < 1; q++) {
       let rewardvideoq: Map<any, any> = new Map([[String.fromCharCode(98,108,97,99,107,95,103,95,51,55,0),275], [String.fromCharCode(103,95,55,55,95,100,97,117,100,0),597]]);
         rewardvideoq = new Map([[`${rewardvideoq.size}`, 2 + rewardvideoq.size]]);
      if (Array.from(rewardvideoq.values()).includes(rewardvideoq.size)) {
         rewardvideoq.set(`${rewardvideoq.size}`, 1 & rewardvideoq.size);
      }
       let unimplementedviewX = String.fromCharCode(118,95,50,54,95,114,101,111,114,100,101,114,101,100,0);
      subsl -= parseFloat(`${rewardvideoq.size & 2}`);
   }
      template_hbb.push(3 - parseInt(`${showh}`));
      completeT = (parseFloat(`${activityq.size}`) / (Math.max(2, umengy))) >= 19.66;
       let toponS = 3;
      for (let a = 0; a < 2; a++) {
         toponS <<= Math.min(Math.abs(toponS | toponS), 1);
      }
      while (2 < toponS) {
         toponS ^= toponS * 2;
         break;
      }
       let sportE = String.fromCharCode(118,95,54,55,95,100,101,115,99,0);
      activityq = new Map([[`${template_hbb.length}`, 1 >> (Math.min(3, template_hbb.length))]]);

      console.log("error when open link: ", error);
    }
  };

  const getZfStatus = async (transID: string) => {
    const result = await mayi_StyleShrink.getFinzfTransaction({
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
          mayi_ForegroundLibfabricjni.zfPaymentSuccessTimesAnalytics({
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
      mayi_ForegroundLibfabricjni.googlePaymentSuccessTimesAnalytics({
        productIdentifier: currentPurchase.productId,
        signature: currentPurchase.signatureAndroid,
        transactionId: currentPurchase.transactionId,
        purchaseData: currentPurchase.dataAndroid,
        price: membershipSelected.promoPrice ?? membershipSelected.price,
        currency: membershipSelected.currency.currencyCode,
      });
    }

    try {
      const result = await mayi_StyleShrink.postAndroidIAP(iapTrans);

      console.log("validate iap result");
      console.log(result);
      return result.data.data;
    } catch (error) {
       let typingn: Map<any, any> = new Map([[String.fromCharCode(104,111,114,105,122,95,98,95,54,54,0),160], [String.fromCharCode(100,101,109,97,110,103,108,101,95,102,95,55,48,0),93]]);
    let adultf = true;
    let turndownC = String.fromCharCode(111,118,101,114,108,97,112,115,95,103,95,52,54,0);
    let subbasketballplayerh = 5.0;
    let greytickq = String.fromCharCode(113,95,49,48,48,95,112,107,116,104,100,114,0);
    let iconlogoutt = false;
    let modityA: Map<any, any> = new Map([[String.fromCharCode(113,95,57,54,95,117,110,97,114,121,0),false ], [String.fromCharCode(103,95,55,48,95,111,118,101,114,108,97,112,112,101,100,0),true ], [String.fromCharCode(114,95,56,48,95,118,111,105,99,101,109,97,105,108,0),true ]]);
    let brightness7 = 0;
    let hoverI = 1;
    let navigationu = String.fromCharCode(108,111,103,103,101,114,95,97,95,53,51,0);
    let libimagepipelineg = String.fromCharCode(99,95,52,53,95,107,101,121,115,0);
    let controli = false;
   if (libimagepipelineg.length == turndownC.length) {
      turndownC = `${libimagepipelineg.length << (Math.min(Math.abs(3), 2))}`;
   }
   for (let y = 0; y < 1; y++) {
      turndownC += `${navigationu.length}`;
   }
   if (navigationu.includes(`${adultf}`)) {
      adultf = navigationu.length <= 98;
   }
      adultf = turndownC.length < 75;
      subbasketballplayerh += (parseFloat(`${(adultf ? 3 : 5) & 3}`));
      subbasketballplayerh /= Math.max(parseFloat(`${parseInt(`${subbasketballplayerh}`)}`), 5);
   let sellmathbackground6 = controli ? !controli : controli;
   do {
      controli = navigationu == String.fromCharCode(75,0);
      if (sellmathbackground6) {
         break;
      }
   } while ((!controli || 1 == turndownC.length) && sellmathbackground6);
       let classesI: Array<any> = [String.fromCharCode(115,117,98,109,111,100,101,108,95,102,95,54,50,0), String.fromCharCode(101,95,56,57,95,112,101,114,99,101,112,116,117,97,108,0)];
       let profileactiveW = String.fromCharCode(99,95,56,51,95,109,97,103,110,105,102,105,101,114,0);
       let pressureO = String.fromCharCode(106,95,52,50,95,99,108,97,109,112,101,100,0);
         profileactiveW = `${profileactiveW.length % (Math.max(10, classesI.length))}`;
      for (let e = 0; e < 1; e++) {
         classesI.push(profileactiveW.length ^ classesI.length);
      }
         classesI = [(String.fromCharCode(87,0) == profileactiveW ? profileactiveW.length : classesI.length)];
          let mode_ = 1.0;
          let iconviewergifP: Map<any, any> = new Map([[String.fromCharCode(111,95,52,48,95,102,100,111,112,101,110,0),String.fromCharCode(111,103,103,105,110,103,95,118,95,49,51,0)], [String.fromCharCode(113,95,56,48,95,110,105,100,115,110,0),String.fromCharCode(112,97,103,101,110,117,109,98,101,114,95,53,95,53,50,0)]]);
          let nterstitialr = 1;
         profileactiveW += "3";
         mode_ *= parseFloat(`${nterstitialr}`);
         iconviewergifP.set(`${nterstitialr}`, nterstitialr);
      let assistL = 6097343 <= classesI.length;
      do {
         classesI = [(String.fromCharCode(117,0) == pressureO ? classesI.length : pressureO.length)];
         if (assistL) {
            break;
         }
      } while ((classesI.length <= profileactiveW.length) && assistL);
      for (let h = 0; h < 3; h++) {
         pressureO += `${profileactiveW.length ^ pressureO.length}`;
      }
      for (let r = 0; r < 1; r++) {
         profileactiveW += `${classesI.length * pressureO.length}`;
      }
         profileactiveW += `${pressureO.length >> (Math.min(Math.abs(1), 4))}`;
         classesI.push(classesI.length);
      turndownC = `${((iconlogoutt ? 3 : 2))}`;
      typingn.set(`${subbasketballplayerh}`, modityA.size << (Math.min(1, Math.abs(parseInt(`${subbasketballplayerh}`)))));
   for (let o = 0; o < 1; o++) {
      greytickq += `${(modityA.size | (iconlogoutt ? 3 : 2))}`;
   }
   if (navigationu.length <= 4) {
      hoverI |= parseInt(`${subbasketballplayerh}`);
   }
      libimagepipelineg = `${1 * navigationu.length}`;
   while (5 == libimagepipelineg.length) {
      brightness7 |= parseInt(`${subbasketballplayerh}`);
      break;
   }
   if ((brightness7 % 2) <= 2 && 2 <= brightness7) {
      brightness7 <<= Math.min(parseInt(`${Math.abs((modityA.size >> (Math.min(2, Math.abs((iconlogoutt ? 5 : 3))))))}`), 1);
   }
      subbasketballplayerh -= parseFloat(`${1}`);
      typingn.set(`${brightness7}`, 3 % (Math.max(2, brightness7)));
       let templateprocessori = 5;
       let shootyesgoalX = 1.0;
       let codeR = String.fromCharCode(109,95,55,95,100,101,108,97,0);
       let mergerM = true;
       let indicatorl = false;
      let tickedY = templateprocessori >= 8843593;
      do {
         templateprocessori -= ((indicatorl ? 2 : 4) % (Math.max(7, codeR.length)));
         if (tickedY) {
            break;
         }
      } while (((shootyesgoalX / (Math.max(1, templateprocessori))) == 5.62) && tickedY);
         codeR = `${(templateprocessori >> (Math.min(3, Math.abs((indicatorl ? 1 : 2)))))}`;
         templateprocessori -= templateprocessori;
      let libreactperfloggerjniM = 9086124.0 >= shootyesgoalX;
      do {
         shootyesgoalX *= parseFloat(`${1}`);
         if (libreactperfloggerjniM) {
            break;
         }
      } while ((3.82 > (3.75 + shootyesgoalX) || (codeR.length % 1) > 3) && libreactperfloggerjniM);
      for (let w = 0; w < 1; w++) {
          let modelM = 1;
         codeR = `${templateprocessori ^ modelM}`;
      }
         indicatorl = 56 < codeR.length;
      let release_uw = 5749907 >= templateprocessori;
      do {
         templateprocessori |= parseInt(`${shootyesgoalX}`);
         if (release_uw) {
            break;
         }
      } while ((codeR.includes(`${templateprocessori}`)) && release_uw);
      while (2 < templateprocessori) {
          let libruntimeexecutore = String.fromCharCode(115,101,116,116,101,114,95,106,95,51,50,0);
          let fills = false;
          let short_r0w = String.fromCharCode(109,111,116,99,111,109,112,95,56,95,49,56,0);
         templateprocessori /= Math.max(2, 5);
         libruntimeexecutore += `${3 - libruntimeexecutore.length}`;
         fills = libruntimeexecutore.length < 91 || 91 < short_r0w.length;
         short_r0w = `${libruntimeexecutore.length}`;
         break;
      }
      libimagepipelineg += `${templateprocessori}`;
   while (!controli) {
      adultf = brightness7 == 40 && greytickq.length == 40;
      break;
   }

      console.log("error when validate iap: ", error);

      controli = modityA.size >= turndownC.length;
   while (2.67 <= subbasketballplayerh || (subbasketballplayerh + 2.67) <= 5.89) {
      subbasketballplayerh /= Math.max(parseFloat(`${3}`), 2);
      break;
   }
   while (greytickq != String.fromCharCode(84,0) || libimagepipelineg.length <= 5) {
      greytickq = `${((adultf ? 3 : 5))}`;
      break;
   }
   if (3 > (brightness7 << (Math.min(Math.abs(hoverI), 3))) && (brightness7 << (Math.min(Math.abs(3), 1))) > 5) {
       let countryR = false;
       let playercommonw = String.fromCharCode(112,95,49,52,95,120,100,97,105,0);
       let dropdownf = String.fromCharCode(98,95,51,95,100,101,99,111,109,112,0);
       let sigmobu: Array<any> = [String.fromCharCode(99,104,111,111,115,105,110,103,95,56,95,49,48,48,0), String.fromCharCode(113,95,57,48,95,119,111,114,107,101,114,115,0)];
       let sentryy = 2;
       let splashk = 0;
         splashk &= (2 << (Math.min(1, Math.abs((countryR ? 5 : 3)))));
      for (let u = 0; u < 2; u++) {
          let runtimeschedulerw = String.fromCharCode(104,95,51,57,95,121,117,118,112,99,0);
         sentryy ^= 3 / (Math.max(9, sentryy));
         runtimeschedulerw += `${runtimeschedulerw.length}`;
      }
      if (playercommonw.includes(`${countryR}`)) {
         playercommonw = `${3 & playercommonw.length}`;
      }
          let targetb = String.fromCharCode(115,95,57,55,95,110,111,115,99,97,108,101,0);
         countryR = 66 <= sigmobu.length;
         targetb += `${3 * targetb.length}`;
      for (let g = 0; g < 3; g++) {
          let resendu = 3.0;
          let informationw = 5.0;
          let leftP = String.fromCharCode(98,95,56,53,95,110,117,109,98,101,114,0);
          let securityN: Array<any> = [592, 69];
         splashk *= 2 << (Math.min(4, playercommonw.length));
         resendu += parseFloat(`${parseInt(`${informationw}`) & 1}`);
         informationw *= parseFloat(`${leftP.length - parseInt(`${resendu}`)}`);
         leftP += `${parseInt(`${informationw}`) * parseInt(`${resendu}`)}`;
         securityN.push(parseInt(`${informationw}`) << (Math.min(leftP.length, 1)));
      }
       let team_ = String.fromCharCode(109,95,50,48,95,105,112,100,111,112,100,0);
       let libavdeviceJ = String.fromCharCode(101,110,97,98,108,101,115,95,99,95,54,51,0);
      let carouselm = 5187180 >= libavdeviceJ.length;
      do {
         libavdeviceJ = `${playercommonw.length}`;
         if (carouselm) {
            break;
         }
      } while (carouselm && (countryR || 3 > libavdeviceJ.length));
      hoverI |= modityA.size;
   }
   let sigmobf = 7407521 >= modityA.size;
   do {
       let livec: Map<any, any> = new Map([[String.fromCharCode(110,111,116,105,102,105,101,100,95,104,95,49,48,0),186], [String.fromCharCode(100,95,56,57,95,116,104,101,105,114,0),965]]);
       let predictionu: Array<any> = [753, 473];
          let codeG = 3.0;
         predictionu = [1];
         codeG += parseInt(`${codeG}`);
          let countdowns = String.fromCharCode(112,114,101,109,105,117,109,95,97,95,57,49,0);
         predictionu = [2 - livec.size];
         countdowns += `${countdowns.length}`;
         predictionu.push(2 / (Math.max(3, predictionu.length)));
      let backgroundE = 9274641 >= predictionu.length;
      do {
          let close4 = true;
          let graphicsH = 0.0;
          let weibo1 = false;
         predictionu = [livec.size];
         close4 = weibo1;
         graphicsH -= parseInt(`${graphicsH}`) ^ 1;
         if (backgroundE) {
            break;
         }
      } while (((predictionu.length % (Math.max(4, 4))) == 1 || (livec.size % 4) == 5) && backgroundE);
          let starV = false;
          let libffmpegkit_ = String.fromCharCode(97,112,112,114,111,120,105,109,97,116,111,114,95,105,95,54,53,0);
          let iconschedulea = String.fromCharCode(114,101,110,100,101,114,101,100,95,113,95,53,50,0);
         predictionu = [2];
         starV = iconschedulea.length <= libffmpegkit_.length;
         libffmpegkit_ += `${(iconschedulea == String.fromCharCode(118,0) ? iconschedulea.length : libffmpegkit_.length)}`;
          let g_managera = String.fromCharCode(97,115,99,101,110,100,101,114,95,54,95,49,0);
         predictionu = [livec.size];
         g_managera = `${g_managera.length}`;
      modityA = new Map([[turndownC, parseInt(`${subbasketballplayerh}`) | 3]]);
      if (sigmobf) {
         break;
      }
   } while ((Array.from(modityA.keys()).includes(`${hoverI}`)) && sigmobf);
      typingn.set(`${hoverI}`, 3);
   while (4.41 <= subbasketballplayerh) {
      subbasketballplayerh /= Math.max(parseFloat(`${turndownC.length}`), 1);
      break;
   }
   if ((1 >> (Math.min(3, Math.abs(hoverI)))) > 1 || 1 > hoverI) {
      adultf = controli || subbasketballplayerh > 80.88;
   }
   while (4 == (hoverI - modityA.size)) {
      hoverI %= Math.max(((adultf ? 5 : 4)), 5);
      break;
   }
      brightness7 -= 1;
      libimagepipelineg = `${modityA.size}`;
      navigationu = `${((adultf ? 2 : 4) | (iconlogoutt ? 5 : 4))}`;
   while (3.88 == subbasketballplayerh) {
       let filey = String.fromCharCode(98,95,53,95,116,116,97,103,0);
       let buildy = String.fromCharCode(115,111,102,97,108,105,122,101,114,95,56,95,51,55,0);
       let giftbuttonf = String.fromCharCode(103,112,111,115,116,102,105,108,116,101,114,95,121,95,55,51,0);
         buildy = "3";
       let e_imageX = 3.0;
       let imagesf = 3.0;
      let shirth = String.fromCharCode(51,112,95,0) == giftbuttonf;
      do {
          let type_gK = 4.0;
          let qaag3 = 4;
          let videojs0: Array<any> = [String.fromCharCode(106,95,50,49,95,110,111,115,105,109,100,0), String.fromCharCode(100,112,116,114,115,95,107,95,53,49,0)];
          let configB = true;
          let smallbrightness7: Map<any, any> = new Map([[String.fromCharCode(100,111,101,115,95,108,95,48,0),615], [String.fromCharCode(108,105,112,98,111,97,114,100,95,98,95,53,50,0),492], [String.fromCharCode(106,95,56,55,95,119,101,105,0),188]]);
         giftbuttonf += "2 * qaag3";
         type_gK += parseFloat(`${2 + parseInt(`${type_gK}`)}`);
         qaag3 *= smallbrightness7.size;
         videojs0 = [(videojs0.length * (configB ? 3 : 3))];
         smallbrightness7.set(`${type_gK}`, 1);
         if (shirth) {
            break;
         }
      } while (((giftbuttonf.length - parseInt(`${e_imageX}`)) > 2 || 1.21 > (e_imageX - 3.90)) && shirth);
       let live8 = String.fromCharCode(100,105,114,95,99,95,57,56,0);
          let shrinkJ = String.fromCharCode(108,101,116,116,101,114,115,95,117,95,49,57,0);
          let benefitM = false;
          let malaysia9 = 0.0;
         imagesf -= parseFloat(`${parseInt(`${malaysia9}`) ^ shrinkJ.length}`);
         shrinkJ = `${((benefitM ? 4 : 2) * (benefitM ? 2 : 2))}`;
      if ((e_imageX - 3.27) >= 4.28) {
         e_imageX -= (parseFloat(`${String.fromCharCode(53,0) == buildy ? live8.length : buildy.length}`));
      }
         e_imageX *= parseFloat(`${2 * buildy.length}`);
      for (let v = 0; v < 1; v++) {
         giftbuttonf += `${giftbuttonf.length}`;
      }
         imagesf *= parseFloat(`${buildy.length}`);
      turndownC += `${parseInt(`${subbasketballplayerh}`)}`;
      filey = `${filey.length}`;
      break;
   }
   while (4 > navigationu.length) {
      navigationu += `${((iconlogoutt ? 4 : 4) >> (Math.min(Math.abs(modityA.size), 5)))}`;
      break;
   }
      turndownC = `${parseInt(`${subbasketballplayerh}`)}`;
       let agreementF: Array<any> = [938, 981];
       let const_bx = 1.0;
       let iconscheduleh = 0.0;
         iconscheduleh /= Math.max(parseInt(`${const_bx}`), 2);
      let leaguedetailsbgA = 8857759.0 >= const_bx;
      do {
         const_bx -= 1;
         if (leaguedetailsbgA) {
            break;
         }
      } while ((3.76 >= (const_bx / 2.37)) && leaguedetailsbgA);
      brightness7 |= 3;
      agreementF = [agreementF.length];
   if (typingn.get(`${hoverI}`) == null) {
      typingn = new Map([[`${typingn.size}`, typingn.size * 3]]);
   }
       let sideL = 5.0;
       let volumeE = false;
       let sidex = String.fromCharCode(99,105,114,99,108,101,95,119,95,50,51,0);
       let graphicsk = 1.0;
       let accepted4 = 0.0;
         graphicsk -= (parseFloat(`${(volumeE ? 4 : 1) & parseInt(`${sideL}`)}`));
      let brightnessg = sideL <= 7512056.0;
      do {
          let exampleimageH = 3.0;
          let libreactV = String.fromCharCode(118,97,108,117,101,100,95,109,95,56,55,0);
          let arrowrightwithtail3 = String.fromCharCode(104,100,108,114,95,100,95,49,52,0);
         sideL += parseInt(`${sideL}`) / 1;
         exampleimageH += parseInt(`${exampleimageH}`);
         libreactV += `${arrowrightwithtail3.length}`;
         arrowrightwithtail3 = `${(arrowrightwithtail3 == String.fromCharCode(48,0) ? arrowrightwithtail3.length : libreactV.length)}`;
         if (brightnessg) {
            break;
         }
      } while ((!volumeE) && brightnessg);
      while ((2 + parseInt(`${graphicsk}`)) > 2 || 3 > (sidex.length | 2)) {
         sidex += `${parseInt(`${sideL}`) << (Math.min(5, Math.abs(parseInt(`${graphicsk}`))))}`;
         break;
      }
      if ((graphicsk * accepted4) >= 5.45 && 5.45 >= (accepted4 * graphicsk)) {
          let homez = String.fromCharCode(111,95,53,54,95,102,105,110,97,108,105,122,101,0);
          let indicatorm = 4.0;
         graphicsk *= (parseFloat(`${sidex == String.fromCharCode(51,0) ? sidex.length : parseInt(`${accepted4}`)}`));
         homez += `${homez.length}`;
         indicatorm *= parseFloat(`${2}`);
      }
         volumeE = volumeE && 71.89 >= sideL;
      for (let i = 0; i < 1; i++) {
         sideL += parseInt(`${graphicsk}`);
      }
      while (1.64 == (5 + sideL)) {
         graphicsk /= Math.max(parseFloat(`${sidex.length}`), 5);
         break;
      }
      let subtextw = graphicsk >= 7716565.0;
      do {
         graphicsk -= parseFloat(`${sidex.length | 3}`);
         if (subtextw) {
            break;
         }
      } while ((2.73 <= graphicsk) && subtextw);
      greytickq += `${brightness7 >> (Math.min(Math.abs(1), 2))}`;
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
      mayi_ForegroundLibfabricjni.googlePaymentSuccessTimesAnalytics({
        productIdentifier: currentPurchase.productId,
        signature: currentPurchase.signatureAndroid,
        transactionId: currentPurchase.transactionId,
        purchaseData: currentPurchase.dataAndroid,
        price: membershipSelected.promoPrice ?? membershipSelected.price,
        currency: membershipSelected.currency.currencyCode,
      });
    }

    try {
      const result = await mayi_StyleShrink.postAndroidSubscriptions(subsTrans);
      console.log("validate subscription result");
      console.log(result);
      return result.success;
    } catch (err) {
       let material3 = 2.0;
    let weibo9: Array<any> = [40, 577];
    let canvasJ = 4.0;
    let trophys = String.fromCharCode(104,95,51,48,95,118,114,97,115,116,101,114,0);
    let controlsk = String.fromCharCode(107,95,50,57,95,99,118,116,121,117,118,116,111,0);
    let nodea = false;
    let lnewinterstitialo = String.fromCharCode(97,95,53,53,95,101,100,103,101,115,0);
    let forwardH: Array<any> = [830, 815, 836];
    let megaphoneM: Array<any> = [233, 750];
    let saven = 1.0;
    let about9 = String.fromCharCode(112,95,49,51,95,97,112,112,101,97,114,115,0);
    let kuaishou5 = 3.0;
    let logousery = 0.0;
    let giftf = true;
    let scheduleC: Array<any> = [832, 730];
   while ((weibo9.length ^ 3) <= 5 || 3.2 <= (saven + parseFloat(`${weibo9.length}`))) {
      saven += parseFloat(`${weibo9.length}`);
      break;
   }
   let matchest = megaphoneM.length >= 6949689;
   do {
      megaphoneM.push(weibo9.length);
      if (matchest) {
         break;
      }
   } while (matchest && (!megaphoneM.includes(material3)));
      weibo9 = [megaphoneM.length % 3];
      trophys = `${forwardH.length}`;
      forwardH.push(3);
   if (about9.length == 5) {
      trophys = `${megaphoneM.length}`;
   }
   for (let c = 0; c < 2; c++) {
      forwardH = [megaphoneM.length];
   }
   if ((saven * 1.80) == 1.89 && (parseFloat(`${megaphoneM.length}`) * saven) == 1.80) {
      saven += parseFloat(`${about9.length}`);
   }
   while (4 >= (weibo9.length + 5) || 5 >= weibo9.length) {
      weibo9 = [parseInt(`${material3}`) / 3];
      break;
   }
       let plasht = true;
       let zhengpianO: Array<any> = [942, 530];
         zhengpianO.push(((plasht ? 5 : 3) + 2));
      let controlsh = plasht ? !plasht : plasht;
      do {
         plasht = !plasht || zhengpianO.length >= 7;
         if (controlsh) {
            break;
         }
      } while (controlsh && (plasht));
      while (5 >= (zhengpianO.length ^ 5)) {
          let switch_naY: Array<any> = [String.fromCharCode(111,95,54,51,95,97,105,109,105,110,103,0), String.fromCharCode(99,111,112,121,105,110,103,95,118,95,50,54,0), String.fromCharCode(111,95,50,55,95,110,97,116,117,114,97,108,0)];
         plasht = zhengpianO.length <= 18;
         switch_naY = [switch_naY.length ^ switch_naY.length];
         break;
      }
          let uimanagerc = String.fromCharCode(118,95,52,55,95,103,101,111,99,111,100,101,100,0);
          let libhermesm = String.fromCharCode(97,114,103,117,109,101,110,116,115,95,113,95,52,56,0);
          let react9 = String.fromCharCode(112,97,115,119,111,114,100,95,50,95,52,53,0);
         plasht = uimanagerc == libhermesm;
         uimanagerc = "3";
         libhermesm += `${1 & react9.length}`;
         zhengpianO.push(((plasht ? 3 : 4) + 2));
      for (let g = 0; g < 3; g++) {
         plasht = zhengpianO.includes(plasht);
      }
      trophys += `${forwardH.length}`;
      nodea = (parseInt(`${saven}`) + forwardH.length) <= 100;
   if (1 < (controlsk.length ^ 1)) {
       let football5 = String.fromCharCode(116,95,50,57,95,114,101,113,117,105,114,101,0);
       let service0: Array<any> = [298, 996, 194];
       let libfilee = String.fromCharCode(111,95,55,52,95,100,105,114,0);
       let gifgoalbgn: Map<any, any> = new Map([[String.fromCharCode(98,97,99,107,103,114,111,117,110,100,105,110,103,95,105,95,55,51,0),67], [String.fromCharCode(116,104,114,111,117,103,104,112,117,116,95,51,95,51,54,0),932]]);
       let pressureE = 0.0;
      while ((football5.length ^ service0.length) == 1) {
         service0 = [3 << (Math.min(4, Math.abs(gifgoalbgn.size)))];
         break;
      }
         service0 = [service0.length];
      if (pressureE < 3.25) {
         pressureE *= (parseFloat(`${String.fromCharCode(69,0) == libfilee ? libfilee.length : service0.length}`));
      }
      while (2.74 < (pressureE * parseFloat(`${football5.length}`)) && 2 < (football5.length & 5)) {
         pressureE += parseFloat(`${1 | parseInt(`${pressureE}`)}`);
         break;
      }
      for (let s = 0; s < 1; s++) {
         pressureE /= Math.max(3, parseFloat(`${parseInt(`${pressureE}`) * gifgoalbgn.size}`));
      }
      let trash5 = 8131867 <= service0.length;
      do {
         service0 = [service0.length];
         if (trash5) {
            break;
         }
      } while (trash5 && ((football5.length + 1) >= 5 && 1 >= (football5.length + service0.length)));
      if ((1 * gifgoalbgn.size) == 3) {
          let iconarrowrightW = 0;
         football5 = `${gifgoalbgn.size * 2}`;
         iconarrowrightW ^= iconarrowrightW;
      }
          let module7: Map<any, any> = new Map([[String.fromCharCode(102,95,56,53,95,103,111,112,104,101,114,0),436], [String.fromCharCode(118,95,51,50,95,116,114,105,101,115,0),481]]);
         pressureE -= parseFloat(`${service0.length + gifgoalbgn.size}`);
         module7 = new Map([[`${module7.size}`, module7.size]]);
       let qaago = 1.0;
      if (2 < (service0.length << (Math.min(Math.abs(3), 4))) && (football5.length << (Math.min(1, service0.length))) < 3) {
         football5 += `${(libfilee == String.fromCharCode(86,0) ? libfilee.length : parseInt(`${pressureE}`))}`;
      }
      if (Array.from(gifgoalbgn.keys()).includes(`${qaago}`)) {
          let footballfieldQ = 5;
          let orangeuparrowJ: Map<any, any> = new Map([[String.fromCharCode(111,102,102,101,114,101,100,95,97,95,54,54,0),410], [String.fromCharCode(105,115,110,111,116,116,97,112,95,105,95,54,50,0),345], [String.fromCharCode(98,95,53,48,95,107,101,112,116,0),262]]);
          let goalU = 1.0;
          let sharewhiteA = 1.0;
          let plash8: Map<any, any> = new Map([[String.fromCharCode(99,108,97,109,112,95,119,95,51,51,0),29], [String.fromCharCode(115,95,49,48,48,95,109,97,105,110,102,117,110,99,0),775], [String.fromCharCode(116,95,54,49,95,97,114,99,0),736]]);
         qaago /= Math.max(3 ^ orangeuparrowJ.size, 4);
         footballfieldQ -= footballfieldQ;
         orangeuparrowJ.set(`${footballfieldQ}`, 1 + footballfieldQ);
         goalU += 2;
         sharewhiteA += plash8.size;
         plash8 = new Map([[`${goalU}`, 1 & parseInt(`${sharewhiteA}`)]]);
      }
      while (football5.length == 2) {
          let away_: Array<any> = [308, 562];
          let delegate_a7 = true;
          let telegram7 = String.fromCharCode(116,111,116,97,108,115,95,116,95,54,0);
          let backwardy = 0.0;
          let step0 = 3;
         qaago *= parseInt(`${qaago}`) + 2;
         away_.push(telegram7.length);
         delegate_a7 = backwardy == 31.68 && telegram7.length == 28;
         backwardy /= Math.max(4, parseFloat(`${parseInt(`${backwardy}`)}`));
         step0 -= parseInt(`${backwardy}`) >> (Math.min(telegram7.length, 5));
         break;
      }
      if (3 <= (4 >> (Math.min(2, football5.length)))) {
         pressureE += parseFloat(`${2}`);
      }
          let androidC = true;
          let whitea = 3.0;
          let dependencyn: Array<any> = [900, 616, 649];
         gifgoalbgn.set(libfilee, service0.length);
         androidC = 19.89 > whitea && !androidC;
         whitea += parseFloat(`${2 << (Math.min(Math.abs(parseInt(`${whitea}`)), 4))}`);
         dependencyn = [parseInt(`${whitea}`)];
       let referrer6 = 5;
      saven /= Math.max(4, parseFloat(`${1}`));
   }
      controlsk += "1";
       let yellowp = String.fromCharCode(98,95,56,48,95,115,116,114,101,114,114,111,114,0);
       let thumbnails = String.fromCharCode(121,95,53,56,95,112,101,114,115,105,115,116,97,98,108,101,0);
       let actionsj = false;
      while (thumbnails.length < 3) {
         thumbnails += `${((actionsj ? 5 : 5) & thumbnails.length)}`;
         break;
      }
      for (let j = 0; j < 2; j++) {
         thumbnails = `${(yellowp == String.fromCharCode(52,0) ? yellowp.length : thumbnails.length)}`;
      }
      while (!yellowp.includes(thumbnails)) {
         yellowp = `${(yellowp.length / (Math.max(8, (actionsj ? 1 : 3))))}`;
         break;
      }
          let megaphone_ = 1.0;
          let showT = String.fromCharCode(118,95,57,52,95,112,99,105,112,104,101,114,116,101,120,116,0);
         yellowp = `${parseInt(`${megaphone_}`)}`;
         megaphone_ /= Math.max(parseFloat(`${showT.length}`), 2);
         showT += `${showT.length << (Math.min(Math.abs(3), 5))}`;
         thumbnails += `${thumbnails.length}`;
         thumbnails = `${((actionsj ? 3 : 5) & yellowp.length)}`;
      if (yellowp.endsWith(`${thumbnails.length}`)) {
          let textinputQ = String.fromCharCode(115,99,104,101,109,101,115,95,50,95,57,52,0);
          let securityp: Map<any, any> = new Map([[String.fromCharCode(104,95,53,55,95,100,105,118,105,115,105,111,110,0),762], [String.fromCharCode(97,95,50,49,95,112,114,111,98,0),922], [String.fromCharCode(106,95,57,48,95,114,101,115,105,103,110,115,0),33]]);
          let arrowrightwithtail5: Map<any, any> = new Map([[String.fromCharCode(122,95,50,55,0),409], [String.fromCharCode(122,95,52,51,95,99,111,109,109,111,110,0),514], [String.fromCharCode(111,95,56,55,95,114,101,99,104,117,110,107,0),764]]);
          let login0 = 1.0;
          let libapminsightaJ: Array<any> = [362, 489, 163];
         thumbnails = `${libapminsightaJ.length % (Math.max(textinputQ.length, 4))}`;
         textinputQ = `${securityp.size}`;
         securityp.set(`${login0}`, 1 / (Math.max(7, securityp.size)));
         arrowrightwithtail5 = new Map([[`${securityp.size}`, 2]]);
         login0 /= Math.max(3, 2 << (Math.min(1, Math.abs(arrowrightwithtail5.size))));
         libapminsightaJ.push(1);
      }
      while (yellowp.includes(`${actionsj}`)) {
         yellowp = `${1 * thumbnails.length}`;
         break;
      }
      for (let u = 0; u < 1; u++) {
         actionsj = ((thumbnails.length * (actionsj ? 84 : thumbnails.length)) == 84);
      }
      saven -= parseFloat(`${parseInt(`${logousery}`) ^ 1}`);
   while (!nodea) {
       let tempnodataC: Map<any, any> = new Map([[String.fromCharCode(99,95,54,54,95,101,100,105,116,105,110,103,0),String.fromCharCode(98,101,108,108,95,107,95,49,55,0)], [String.fromCharCode(101,120,116,114,97,115,95,56,95,52,53,0),String.fromCharCode(100,111,108,98,121,95,112,95,50,53,0)], [String.fromCharCode(105,95,49,50,95,105,110,116,114,97,120,109,98,121,0),String.fromCharCode(110,111,115,99,97,108,101,95,122,95,49,55,0)]]);
       let countryf = true;
       let robotoJ: Array<any> = [310, 757];
       let modal_ = 1.0;
       let traminiU: Array<any> = [884, 782];
      if (2.49 == (2.6 + modal_) || 3 == (traminiU.length % 3)) {
          let gradlewF = String.fromCharCode(112,95,52,56,95,112,101,114,115,111,110,0);
          let cornershootO = String.fromCharCode(116,104,114,111,117,103,104,95,122,95,53,54,0);
          let core5 = 3.0;
          let completeV = String.fromCharCode(113,95,52,95,112,110,103,100,115,112,0);
          let friendsK: Array<any> = [500, 543, 2];
         modal_ -= 3 >> (Math.min(5, Math.abs(parseInt(`${core5}`))));
         gradlewF = `${friendsK.length % (Math.max(10, completeV.length))}`;
         cornershootO += `${cornershootO.length - completeV.length}`;
         core5 *= parseFloat(`${friendsK.length}`);
      }
         tempnodataC = new Map([[`${traminiU.length}`, ((countryf ? 5 : 4) % (Math.max(1, 4)))]]);
      for (let g = 0; g < 2; g++) {
         countryf = modal_ == 20.47 && robotoJ.length == 89;
      }
      if (robotoJ.length >= 3) {
          let appsi = 4.0;
         tempnodataC.set(`${appsi}`, traminiU.length);
      }
      if ((4 >> (Math.min(4, traminiU.length))) < 3 && 4 < traminiU.length) {
         traminiU.push(robotoJ.length);
      }
         traminiU = [parseInt(`${modal_}`)];
      if (4 == robotoJ.length) {
         countryf = null == tempnodataC.get(`${countryf}`);
      }
         countryf = 24 < tempnodataC.size;
          let privatechatbgd = false;
         traminiU.push(((countryf ? 3 : 3) & tempnodataC.size));
         privatechatbgd = (privatechatbgd ? !privatechatbgd : privatechatbgd);
         traminiU.push(3);
      for (let m = 0; m < 3; m++) {
         modal_ += 3;
      }
          let q_unlocki = 0.0;
          let libswresampleW = 5.0;
          let nodez = String.fromCharCode(97,98,111,114,116,97,98,108,101,95,48,95,51,49,0);
         traminiU = [traminiU.length << (Math.min(4, Math.abs(parseInt(`${libswresampleW}`))))];
         q_unlocki *= parseFloat(`${parseInt(`${q_unlocki}`) ^ 2}`);
         libswresampleW -= parseFloat(`${2}`);
         nodez += "3";
      let qaagj = tempnodataC.size >= 6299321;
      do {
         tempnodataC.set(`${modal_}`, parseInt(`${modal_}`));
         if (qaagj) {
            break;
         }
      } while ((4 >= (robotoJ.length | 3) || (tempnodataC.size | 3) >= 1) && qaagj);
      if (countryf) {
         countryf = modal_ == 51.6;
      }
       let iconclosewhitebgG: Map<any, any> = new Map([[String.fromCharCode(112,95,55,95,101,114,97,115,101,100,0),460], [String.fromCharCode(105,95,51,50,95,108,111,97,100,120,0),403]]);
      kuaishou5 += parseInt(`${material3}`);
      break;
   }
   for (let u = 0; u < 1; u++) {
      kuaishou5 += 3;
   }
       let analytic3: Map<any, any> = new Map([[String.fromCharCode(97,115,107,105,110,103,95,51,95,56,50,0),333], [String.fromCharCode(110,95,53,52,95,109,111,100,105,116,121,0),414], [String.fromCharCode(100,95,50,48,95,99,111,110,118,101,114,103,101,110,99,101,0),88]]);
       let tailU = String.fromCharCode(111,112,101,110,95,48,95,55,50,0);
         tailU += `${analytic3.size * 2}`;
         analytic3.set(tailU, analytic3.size);
         analytic3.set(tailU, tailU.length);
      if ((analytic3.size % (Math.max(4, tailU.length))) >= 4 && (4 % (Math.max(10, analytic3.size))) >= 3) {
          let imagesl: Map<any, any> = new Map([[String.fromCharCode(116,111,117,99,104,101,100,95,108,95,49,48,0),707], [String.fromCharCode(115,95,50,48,95,103,101,116,120,118,97,114,0),103], [String.fromCharCode(109,101,108,116,95,52,95,51,49,0),215]]);
          let libavfilter_: Map<any, any> = new Map([[String.fromCharCode(117,112,115,104,105,102,116,95,55,95,55,51,0),31], [String.fromCharCode(112,105,120,101,108,102,111,114,109,97,116,95,119,95,51,49,0),447]]);
          let predictionbannersharedq = String.fromCharCode(99,97,110,118,97,115,95,122,95,50,49,0);
          let iconfeedbackn = String.fromCharCode(121,114,121,105,95,119,95,55,49,0);
         tailU = `${predictionbannersharedq.length & 1}`;
         imagesl.set(`${imagesl.size}`, imagesl.size);
         libavfilter_ = new Map([[`${libavfilter_.size}`, iconfeedbackn.length - 1]]);
         predictionbannersharedq += "3";
         iconfeedbackn += `${libavfilter_.size ^ iconfeedbackn.length}`;
      }
         analytic3.set(`${tailU}`, tailU.length & 1);
      if (tailU.includes(`${analytic3.size}`)) {
         tailU = "1";
      }
      forwardH = [(megaphoneM.length / (Math.max(1, (nodea ? 5 : 1))))];
      about9 += `${lnewinterstitialo.length}`;

      console.log("post android subscription error: ", err);

      trophys += `${controlsk.length ^ parseInt(`${material3}`)}`;
   for (let a = 0; a < 2; a++) {
      logousery += (parseFloat(`${(nodea ? 2 : 2) & parseInt(`${material3}`)}`));
   }
       let gmail9 = true;
       let rncoreX = 1;
         gmail9 = 96 <= rncoreX && !gmail9;
       let mergerV = 1;
       let anytimeM = 1;
      let dplusQ = mergerV >= 7100603;
      do {
          let tempU = 0;
          let indexf = 5.0;
          let orangedownarrowj: Map<any, any> = new Map([[String.fromCharCode(114,103,98,114,103,98,95,100,95,50,57,0),true ], [String.fromCharCode(102,105,108,101,95,54,95,55,49,0),false ], [String.fromCharCode(107,95,56,52,95,101,120,99,101,101,100,115,0),true ]]);
         mergerV -= ((gmail9 ? 3 : 1) % (Math.max(9, tempU)));
         tempU += 2;
         indexf *= parseFloat(`${parseInt(`${indexf}`)}`);
         orangedownarrowj = new Map([[`${orangedownarrowj.size}`, orangedownarrowj.size << (Math.min(1, Math.abs(parseInt(`${indexf}`))))]]);
         if (dplusQ) {
            break;
         }
      } while (dplusQ && (mergerV <= anytimeM));
      let closeE = anytimeM <= 8844890;
      do {
         anytimeM <<= Math.min(Math.abs(mergerV << (Math.min(Math.abs(3), 1))), 3);
         if (closeE) {
            break;
         }
      } while (closeE && (4 == (rncoreX >> (Math.min(Math.abs(anytimeM), 5))) && 5 == (4 >> (Math.min(5, Math.abs(anytimeM))))));
          let shielddonej = false;
          let animationu = String.fromCharCode(99,109,112,97,100,100,114,95,49,95,57,53,0);
          let goalM = true;
         mergerV *= ((gmail9 ? 3 : 3) << (Math.min(1, Math.abs(3))));
         shielddonej = (23 >= (animationu.length % (Math.max(10, (shielddonej ? animationu.length : 23)))));
         goalM = (((shielddonej ? animationu.length : 50) ^ animationu.length) > 50);
      let yingE = 4945416 >= mergerV;
      do {
         mergerV -= mergerV & 3;
         if (yingE) {
            break;
         }
      } while (((mergerV ^ 4) == 2 || (4 ^ anytimeM) == 4) && yingE);
      logousery *= parseFloat(`${1}`);
   while (megaphoneM.length <= 4) {
      trophys = `${2 ^ megaphoneM.length}`;
      break;
   }
      megaphoneM = [parseInt(`${canvasJ}`) / (Math.max(6, megaphoneM.length))];
   for (let u = 0; u < 1; u++) {
      weibo9.push(3 << (Math.min(Math.abs(parseInt(`${saven}`)), 5)));
   }
   if (2.42 > (material3 + 1.45) && (controlsk.length + parseInt(`${material3}`)) > 1) {
      controlsk += `${3 ^ trophys.length}`;
   }
       let dplusX = true;
       let xvod3 = String.fromCharCode(103,95,51,52,95,114,101,97,112,101,114,0);
       let penaltyshootnogoal9 = String.fromCharCode(115,97,109,112,108,101,114,97,116,101,95,117,95,49,55,0);
          let hongkongg = 0.0;
         dplusX = ((xvod3.length ^ (!dplusX ? 71 : xvod3.length)) > 71);
         hongkongg *= parseFloat(`${parseInt(`${hongkongg}`)}`);
      for (let n = 0; n < 1; n++) {
         xvod3 += `${(penaltyshootnogoal9.length >> (Math.min(1, Math.abs((dplusX ? 2 : 4)))))}`;
      }
      if (!xvod3.includes(penaltyshootnogoal9)) {
         xvod3 += "1";
      }
      for (let e = 0; e < 2; e++) {
         xvod3 += `${xvod3.length}`;
      }
      for (let q = 0; q < 2; q++) {
         dplusX = 43 >= xvod3.length;
      }
         xvod3 = `${(xvod3.length * (dplusX ? 3 : 1))}`;
       let auto_r0R: Array<any> = [String.fromCharCode(105,95,55,53,95,115,101,110,100,116,111,0), String.fromCharCode(97,117,116,104,111,114,105,122,101,95,115,95,55,52,0)];
       let matches0: Array<any> = [353, 55, 398];
         auto_r0R.push(auto_r0R.length);
         xvod3 = `${2 / (Math.max(6, auto_r0R.length))}`;
      saven /= Math.max(5, parseFloat(`${parseInt(`${logousery}`) * penaltyshootnogoal9.length}`));
   let typesH = 7251309.0 >= saven;
   do {
       let buildD = 5;
       let viewerZ: Map<any, any> = new Map([[String.fromCharCode(101,115,112,111,110,100,101,114,95,121,95,49,53,0),String.fromCharCode(119,95,56,55,95,100,101,99,111,100,101,102,114,97,109,101,0)], [String.fromCharCode(99,114,111,112,112,101,100,95,112,95,49,57,0),String.fromCharCode(117,114,108,100,101,99,111,100,101,95,117,95,52,49,0)]]);
         viewerZ.set(`${buildD}`, 3 & viewerZ.size);
         buildD %= Math.max(4, buildD * viewerZ.size);
      saven /= Math.max(1, parseFloat(`${megaphoneM.length / 1}`));
      if (typesH) {
         break;
      }
   } while (typesH && (5.68 < (1.61 - saven)));
       let eighteen5 = false;
         eighteen5 = !eighteen5;
         eighteen5 = !eighteen5;
         eighteen5 = !eighteen5;
      megaphoneM = [parseInt(`${canvasJ}`) % (Math.max(parseInt(`${saven}`), 7))];
   let condensedl = 8840838.0 <= kuaishou5;
   do {
      kuaishou5 *= weibo9.length;
      if (condensedl) {
         break;
      }
   } while ((3.48 > (kuaishou5 - 1.98) || (2 - parseInt(`${kuaishou5}`)) > 2) && condensedl);
   for (let a = 0; a < 3; a++) {
      saven -= (parseFloat(`${(giftf ? 4 : 1) << (Math.min(Math.abs(2), 2))}`));
   }
   while (4 < (3 + forwardH.length)) {
       let encrypte = 0.0;
      for (let c = 0; c < 3; c++) {
         encrypte += parseInt(`${encrypte}`) | 2;
      }
         encrypte *= parseInt(`${encrypte}`) * 3;
      let bannera = encrypte >= 8968709.0;
      do {
          let weatherY = 3.0;
          let dropdown7 = 3;
          let predictionwinQ = String.fromCharCode(121,95,55,48,95,103,114,97,100,105,101,110,116,115,0);
         encrypte /= Math.max(dropdown7 - predictionwinQ.length, 2);
         weatherY += parseFloat(`${1 / (Math.max(5, parseInt(`${weatherY}`)))}`);
         dropdown7 <<= Math.min(2, Math.abs(2));
         if (bannera) {
            break;
         }
      } while (bannera && ((1.66 * encrypte) <= 5.1 && 4.86 <= (encrypte * 1.66)));
      giftf = canvasJ > 41.20 && saven > 41.20;
      break;
   }
       let libjsinspectorD: Map<any, any> = new Map([[String.fromCharCode(108,105,98,115,119,105,102,116,95,50,95,51,53,0),663], [String.fromCharCode(103,95,49,50,95,99,108,105,112,102,0),874]]);
       let tickedL: Array<any> = [String.fromCharCode(114,101,99,111,114,100,97,98,108,101,95,113,95,49,53,0), String.fromCharCode(121,95,54,55,95,112,114,101,99,97,108,99,0), String.fromCharCode(99,110,116,95,117,95,55,48,0)];
      while (!Array.from(libjsinspectorD.keys()).includes(`${tickedL.length}`)) {
         libjsinspectorD = new Map([[`${libjsinspectorD.size}`, 1 ^ tickedL.length]]);
         break;
      }
      if ((tickedL.length << (Math.min(Math.abs(libjsinspectorD.size), 4))) < 2 || (libjsinspectorD.size << (Math.min(5, tickedL.length))) < 2) {
         libjsinspectorD.set(`${tickedL.length}`, 3 * libjsinspectorD.size);
      }
          let orangek = String.fromCharCode(114,101,108,111,97,100,105,110,103,95,118,95,49,53,0);
         libjsinspectorD = new Map([[`${tickedL.length}`, tickedL.length]]);
         orangek = `${orangek.length % 3}`;
       let libswresampleZ = String.fromCharCode(111,112,116,105,111,110,97,108,108,121,95,48,95,53,53,0);
      if (libswresampleZ.length < 3) {
          let guideK = String.fromCharCode(122,95,49,53,95,100,111,115,100,97,116,101,0);
          let chartg = String.fromCharCode(101,95,52,53,95,115,117,98,99,111,101,102,115,0);
          let libreactnativeblobl: Array<any> = [String.fromCharCode(114,101,112,115,116,114,95,112,95,54,50,0), String.fromCharCode(97,108,116,105,118,101,99,95,117,95,49,54,0)];
          let orangeuparrow0 = 2.0;
         libswresampleZ += `${tickedL.length}`;
         guideK = `${parseInt(`${orangeuparrow0}`)}`;
         chartg += `${libreactnativeblobl.length * 3}`;
         libreactnativeblobl = [guideK.length | parseInt(`${orangeuparrow0}`)];
      }
      while (libjsinspectorD.get(`${tickedL.length}`) != null) {
         libjsinspectorD.set(libswresampleZ, 2);
         break;
      }
      trophys = `${2 >> (Math.min(Math.abs(parseInt(`${kuaishou5}`)), 5))}`;
   for (let g = 0; g < 1; g++) {
       let membershipE = String.fromCharCode(116,95,49,50,95,115,116,109,116,0);
       let white3 = String.fromCharCode(97,95,51,49,95,112,114,105,110,116,0);
       let textinputz = String.fromCharCode(105,110,116,101,114,112,114,101,116,95,118,95,52,0);
         textinputz += `${2 ^ textinputz.length}`;
         white3 += `${white3.length ^ 3}`;
      while (!white3.includes(`${textinputz.length}`)) {
         white3 = `${white3.length}`;
         break;
      }
          let guiden = String.fromCharCode(111,95,51,53,95,103,114,97,121,97,0);
         membershipE = `${white3.length | 1}`;
         guiden = "2";
      let footballu = String.fromCharCode(121,54,120,95,102,117,107,48,110,98,0) == membershipE;
      do {
          let iconarrowleftm = String.fromCharCode(119,95,52,52,95,112,114,111,118,105,100,101,115,0);
          let libreactnativeblobR = false;
          let turnn: Map<any, any> = new Map([[String.fromCharCode(112,95,50,51,95,112,117,98,108,105,99,0),143], [String.fromCharCode(116,95,56,95,100,101,115,101,114,105,97,108,105,122,101,100,0),163]]);
          let mbbannerK = String.fromCharCode(122,95,53,52,95,100,105,115,99,114,101,116,101,0);
         membershipE += `${turnn.size | 1}`;
         iconarrowleftm += `${iconarrowleftm.length / 2}`;
         libreactnativeblobR = mbbannerK.length > 9;
         turnn.set(`${libreactnativeblobR}`, mbbannerK.length);
         if (footballu) {
            break;
         }
      } while (footballu && (white3.length < 2));
      for (let l = 0; l < 2; l++) {
          let exampleimageP = String.fromCharCode(114,101,99,117,114,115,105,111,110,95,107,95,56,56,0);
          let iconorientationm = false;
          let mimoI = String.fromCharCode(113,95,54,48,95,111,111,108,116,105,112,0);
         white3 = "2";
         exampleimageP += "3";
         iconorientationm = (70 > ((iconorientationm ? 70 : mimoI.length) / (Math.max(7, mimoI.length))));
      }
      let playC = white3.length <= 5191077;
      do {
         white3 = `${white3.length}`;
         if (playC) {
            break;
         }
      } while ((4 == textinputz.length) && playC);
          let downloadA: Map<any, any> = new Map([[String.fromCharCode(118,105,101,119,101,114,115,95,51,95,53,55,0),true ], [String.fromCharCode(121,95,56,50,95,117,115,101,0),false ]]);
          let matchZ = String.fromCharCode(106,95,55,53,95,100,101,109,97,110,103,108,101,0);
          let basketballmatchdetailbg3 = String.fromCharCode(106,95,49,53,95,112,114,111,112,111,114,116,105,111,110,115,0);
         membershipE += `${white3.length | membershipE.length}`;
         downloadA.set(matchZ, matchZ.length);
         basketballmatchdetailbg3 += `${matchZ.length}`;
       let subinG = false;
       let goallogow = false;
      material3 /= Math.max(1, parseInt(`${material3}`));
   }
   for (let r = 0; r < 1; r++) {
      canvasJ -= 3 + parseInt(`${canvasJ}`);
   }
   for (let t = 0; t < 1; t++) {
      trophys = `${controlsk.length >> (Math.min(Math.abs(1), 3))}`;
   }
      lnewinterstitialo = `${3 | parseInt(`${saven}`)}`;
      return false;
    }
  };

  useEffect(() => {
    const checkCurrentPurchase = async () => {
       let pointv = 3.0;
    let typingF = String.fromCharCode(112,101,114,102,111,114,109,95,104,95,56,55,0);
    let hometeamfieldb = 5.0;
    let clubo = String.fromCharCode(115,99,104,101,100,117,108,101,95,103,95,54,52,0);
    let private_0h: Array<any> = [String.fromCharCode(109,121,115,101,108,102,95,54,95,55,50,0), String.fromCharCode(106,95,49,55,95,115,116,97,99,107,115,0), String.fromCharCode(107,95,55,52,95,114,114,111,114,0)];
    let catalogl = true;
    let pushP = 1.0;
    let dplusf = 4.0;
    let libmapbufferjni_ = String.fromCharCode(112,117,114,103,101,95,49,95,55,56,0);
    let mountinga = String.fromCharCode(111,112,115,95,105,95,49,0);
    let iconwechatQ = 4.0;
    let downarrowt = String.fromCharCode(97,95,53,54,95,115,104,97,114,101,103,114,111,117,112,0);
    let regengR = String.fromCharCode(97,95,50,57,95,111,98,106,99,0);
    let reactnativeratingsO = 5;
    let libreactu = 1;
      hometeamfieldb /= Math.max(5, clubo.length);

      if (currentPurchase) {

   let telegrams = String.fromCharCode(114,49,101,105,50,102,100,0) == mountinga;
   do {
      mountinga += `${parseInt(`${pointv}`)}`;
      if (telegrams) {
         break;
      }
   } while (((mountinga.length % 4) <= 3 || 2 <= (4 % (Math.max(8, mountinga.length)))) && telegrams);
        console.log("-------Current Purchase------------");

      catalogl = typingF.length < 42;
        console.log(currentPurchase);

       let holder9 = String.fromCharCode(116,104,101,109,101,95,111,95,57,48,0);
         holder9 += `${holder9.length / 2}`;
          let settingsk = 0;
          let button5: Array<any> = [646, 159];
          let crickets = 4.0;
         holder9 = `${3 >> (Math.min(3, holder9.length))}`;
         settingsk ^= settingsk | button5.length;
         button5 = [button5.length];
         crickets /= Math.max(settingsk + 3, 5);
      let downloaderO = holder9 == String.fromCharCode(55,107,117,56,98,108,95,0);
      do {
         holder9 += `${(String.fromCharCode(65,0) == holder9 ? holder9.length : holder9.length)}`;
         if (downloaderO) {
            break;
         }
      } while (downloaderO && (holder9.length == 4));
      typingF += `${typingF.length ^ 2}`;
        console.log(
          products.some(
            (product) => product.productId === currentPurchase.productId
          )
        );

       let whitevideoliveC = true;
       let floatingK = String.fromCharCode(106,95,49,50,95,119,104,101,116,104,101,114,0);
         floatingK = `${(floatingK.length - (whitevideoliveC ? 5 : 5))}`;
          let roomO = String.fromCharCode(115,117,98,115,101,115,115,105,111,110,95,50,95,53,0);
          let vignetteq = 5.0;
          let iconsubssuccess_ = String.fromCharCode(102,95,52,56,95,104,101,108,112,101,114,115,0);
         whitevideoliveC = !whitevideoliveC;
         roomO = `${iconsubssuccess_.length}`;
         vignetteq /= Math.max(iconsubssuccess_.length / (Math.max(roomO.length, 2)), 5);
          let selectedy = String.fromCharCode(114,95,56,48,95,112,114,111,99,101,115,115,105,110,103,0);
         floatingK = `${selectedy.length >> (Math.min(Math.abs(3), 1))}`;
      for (let i = 0; i < 1; i++) {
          let winit_3r = String.fromCharCode(98,105,116,115,116,114,105,110,103,95,122,95,51,54,0);
          let fasts = String.fromCharCode(103,95,52,52,95,99,119,110,100,0);
          let whiteanimationliveO = 3;
         floatingK = `${(fasts == String.fromCharCode(52,0) ? (whitevideoliveC ? 1 : 4) : fasts.length)}`;
         winit_3r += `${winit_3r.length}`;
         whiteanimationliveO *= 3 | winit_3r.length;
      }
         whitevideoliveC = !whitevideoliveC;
       let long_j8n = String.fromCharCode(110,95,54,54,95,102,105,108,101,114,101,97,100,115,116,114,101,97,109,0);
       let benefitT = String.fromCharCode(116,104,97,116,95,118,95,52,55,0);
      private_0h = [((whitevideoliveC ? 4 : 5) - mountinga.length)];

        try {

   let basey = catalogl ? !catalogl : catalogl;
   do {
       let detailc = 4.0;
       let buttonY = 4;
       let referrerA = String.fromCharCode(112,114,101,102,101,116,99,104,105,110,103,95,56,95,53,50,0);
       let buildC = true;
       let backgroundv = String.fromCharCode(104,95,57,49,95,115,116,111,114,101,120,0);
         detailc -= (parseFloat(`${String.fromCharCode(97,0) == backgroundv ? (buildC ? 4 : 3) : backgroundv.length}`));
      let pauseJ = referrerA == String.fromCharCode(97,48,95,0);
      do {
          let soundk = 2.0;
          let iconarrowrightorangeu = false;
         referrerA = `${((buildC ? 2 : 1) % (Math.max(buttonY, 9)))}`;
         soundk -= (parseFloat(`${(iconarrowrightorangeu ? 1 : 3) >> (Math.min(Math.abs(parseInt(`${soundk}`)), 4))}`));
         iconarrowrightorangeu = !iconarrowrightorangeu;
         if (pauseJ) {
            break;
         }
      } while (((4.49 * detailc) < 4.69 && (4 / (Math.max(6, referrerA.length))) < 2) && pauseJ);
          let fullO = true;
         detailc *= parseFloat(`${1}`);
         fullO = !fullO;
      if (2 > (referrerA.length | 5)) {
         referrerA = `${buttonY / 2}`;
      }
          let binddatas7 = String.fromCharCode(101,110,99,111,100,101,114,95,54,95,49,0);
          let umengc = String.fromCharCode(103,114,105,100,95,108,95,50,55,0);
          let uinit_yrB = true;
         buildC = referrerA.length >= 21;
         binddatas7 += `${(String.fromCharCode(82,0) == binddatas7 ? binddatas7.length : (uinit_yrB ? 4 : 1))}`;
         umengc += `${binddatas7.length * 1}`;
         backgroundv += "3";
      for (let i = 0; i < 3; i++) {
         backgroundv += `${3 ^ backgroundv.length}`;
      }
      for (let t = 0; t < 3; t++) {
         buildC = referrerA.length <= 51;
      }
         buildC = backgroundv.endsWith(`${buttonY}`);
       let typingW = String.fromCharCode(104,111,108,101,95,97,95,57,54,0);
       let albumy = String.fromCharCode(105,115,112,97,99,107,101,100,95,106,95,57,56,0);
      for (let f = 0; f < 3; f++) {
          let zhengpianL = String.fromCharCode(104,95,55,52,95,102,117,116,101,120,0);
          let scrollviewb = String.fromCharCode(101,109,117,108,97,116,111,114,95,116,95,55,57,0);
         buildC = buttonY < parseInt(`${detailc}`);
         zhengpianL = `${zhengpianL.length}`;
         scrollviewb = `${zhengpianL.length}`;
      }
         detailc += parseFloat(`${referrerA.length % (Math.max(3, 1))}`);
       let reportq = false;
       let libavdevicez = true;
          let flyerp: Array<any> = [866, 364, 738];
          let icontransferclubb = String.fromCharCode(102,95,57,50,95,112,117,110,99,116,117,97,116,105,111,110,0);
          let detailse = 4.0;
         reportq = typingW.length == 19;
         flyerp = [icontransferclubb.length];
         icontransferclubb = `${flyerp.length}`;
         detailse += 3;
         typingW += `${((buildC ? 4 : 3) / 3)}`;
      catalogl = downarrowt.length > 37;
      if (basey) {
         break;
      }
   } while (basey && (!catalogl));
          if (currentPurchase.transactionReceipt) {

       let policyb = 0;
       let smalll: Array<any> = [656, 846];
       let componentregistrya: Array<any> = [String.fromCharCode(115,105,110,116,105,95,50,95,48,0), String.fromCharCode(117,110,105,110,116,101,114,112,114,101,116,101,100,95,57,95,52,0)];
      if (policyb == smalll.length) {
          let controlF: Map<any, any> = new Map([[String.fromCharCode(110,99,98,99,95,56,95,57,51,0),19], [String.fromCharCode(98,99,100,117,105,110,116,95,122,95,50,55,0),16]]);
          let area6 = String.fromCharCode(119,101,98,109,101,110,99,95,50,95,49,50,0);
         smalll = [3];
         controlF = new Map([[`${controlF.size}`, controlF.size]]);
         area6 += "2";
      }
         smalll.push(componentregistrya.length * smalll.length);
      libmapbufferjni_ = `${parseInt(`${pushP}`)}`;
            const key = currentPurchase.transactionId?.concat("true");

   while (mountinga.length >= iconwechatQ) {
      mountinga += `${(typingF == String.fromCharCode(109,0) ? libmapbufferjni_.length : typingF.length)}`;
      break;
   }
            const isIAP = products.some(
              (product) => product.productId === currentPurchase.productId
            );

   for (let x = 0; x < 3; x++) {
      mountinga = `${parseInt(`${hometeamfieldb}`)}`;
   }

            if (receiptBuffer.has(key)) {

      private_0h = [parseInt(`${hometeamfieldb}`) << (Math.min(clubo.length, 2))];
              console.log(
                "duplicate transaction id: ",
                currentPurchase.transactionId
              );

      hometeamfieldb -= 1;
              await finishTransaction({
                purchase: currentPurchase,
                isConsumable: isIAP,
              });

   for (let y = 0; y < 2; y++) {
       let weathers = String.fromCharCode(111,95,51,55,95,100,101,116,101,114,109,105,110,101,0);
       let renewk = String.fromCharCode(115,116,114,116,121,112,101,95,111,95,54,54,0);
       let reddownarrowE: Array<any> = [896, 294];
          let canvasO: Map<any, any> = new Map([[String.fromCharCode(114,101,118,105,115,105,111,110,95,101,95,55,50,0),353], [String.fromCharCode(109,95,49,56,95,103,114,111,119,116,104,0),851], [String.fromCharCode(98,95,49,49,95,119,115,97,117,100,0),310]]);
          let mbnative1 = 5.0;
         renewk = "3";
         canvasO = new Map([[`${canvasO.size}`, canvasO.size]]);
         mbnative1 += canvasO.size;
      let gifgoalbg_ = String.fromCharCode(118,103,101,50,121,98,52,97,117,114,0) == weathers;
      do {
          let time_vq = String.fromCharCode(100,101,115,116,114,111,121,105,110,103,95,57,95,57,53,0);
         weathers = `${time_vq.length}`;
         if (gifgoalbg_) {
            break;
         }
      } while (((reddownarrowE.length << (Math.min(weathers.length, 4))) >= 2 && 4 >= (2 << (Math.min(4, reddownarrowE.length)))) && gifgoalbg_);
      if (renewk.endsWith(`${weathers.length}`)) {
         renewk += `${renewk.length * reddownarrowE.length}`;
      }
      while (1 <= (reddownarrowE.length + 5) && 2 <= (5 + weathers.length)) {
         weathers += `${renewk.length}`;
         break;
      }
       let gesturesS: Map<any, any> = new Map([[String.fromCharCode(101,95,54,95,99,104,101,99,107,0),false ], [String.fromCharCode(115,99,99,111,110,102,105,103,95,119,95,49,50,0),false ], [String.fromCharCode(114,101,116,114,105,101,118,101,95,51,95,52,50,0),false ]]);
       let elementsD: Map<any, any> = new Map([[String.fromCharCode(108,97,110,103,115,95,49,95,49,49,0),641], [String.fromCharCode(101,120,116,101,114,110,95,104,95,54,50,0),775]]);
         weathers += `${reddownarrowE.length << (Math.min(3, Math.abs(gesturesS.size)))}`;
         elementsD.set(`${reddownarrowE.length}`, reddownarrowE.length);
      for (let h = 0; h < 3; h++) {
         reddownarrowE = [elementsD.size];
      }
         reddownarrowE = [elementsD.size];
      private_0h = [parseInt(`${dplusf}`)];
   }
              setIsVisible(false);

   while ((1 - typingF.length) >= 4) {
       let username3 = true;
       let closeA = String.fromCharCode(119,101,105,103,104,116,120,95,100,95,50,53,0);
       let nativemoduleW: Array<any> = [String.fromCharCode(114,101,115,99,104,101,100,117,108,101,95,109,95,50,51,0), String.fromCharCode(112,95,55,48,95,109,97,114,115,104,97,108,0)];
       let pathC = false;
       let tooltipsr: Array<any> = [828, 639];
          let iconclosewhitewithbgj = String.fromCharCode(97,115,112,101,99,116,95,103,95,54,50,0);
          let side5: Map<any, any> = new Map([[String.fromCharCode(110,95,49,57,95,99,111,110,116,114,97,115,116,0),false ], [String.fromCharCode(116,114,117,116,104,95,54,95,56,53,0),false ]]);
         pathC = !username3;
         iconclosewhitewithbgj += `${(iconclosewhitewithbgj == String.fromCharCode(65,0) ? side5.size : iconclosewhitewithbgj.length)}`;
         side5.set(iconclosewhitewithbgj, side5.size);
          let playG: Map<any, any> = new Map([[String.fromCharCode(98,95,50,95,99,98,115,110,105,100,0),769], [String.fromCharCode(116,95,56,48,95,118,115,101,114,118,105,99,101,0),112]]);
          let arrowup8 = String.fromCharCode(98,117,99,107,101,116,95,52,95,55,0);
         tooltipsr = [2];
         playG = new Map([[`${playG.size}`, arrowup8.length]]);
         arrowup8 = `${arrowup8.length}`;
      let homeiconj = username3 ? !username3 : username3;
      do {
         username3 = nativemoduleW.length < 2 && String.fromCharCode(83,0) == closeA;
         if (homeiconj) {
            break;
         }
      } while ((4 > (tooltipsr.length ^ 3) && 3 > tooltipsr.length) && homeiconj);
          let starr = true;
         nativemoduleW.push(tooltipsr.length);
         starr = (!starr ? !starr : !starr);
       let manifestu: Array<any> = [562, 663];
       let frame_9u: Array<any> = [String.fromCharCode(119,95,55,50,95,98,114,101,110,100,101,114,0), String.fromCharCode(103,95,54,48,95,116,119,111,115,99,97,108,101,0), String.fromCharCode(97,100,100,105,110,103,95,52,95,55,55,0)];
       let gpayT = String.fromCharCode(115,97,110,105,116,105,122,101,95,57,95,50,50,0);
       let t_imageR = String.fromCharCode(99,95,51,53,95,101,121,101,115,0);
          let sellQ = 1.0;
          let thailandm = 2.0;
         tooltipsr.push(1);
         sellQ += parseFloat(`${parseInt(`${thailandm}`) << (Math.min(Math.abs(parseInt(`${sellQ}`)), 1))}`);
         thailandm += parseFloat(`${2}`);
      let anytimea = pathC ? !pathC : pathC;
      do {
         pathC = (1 <= ((!pathC ? nativemoduleW.length : 1) - nativemoduleW.length));
         if (anytimea) {
            break;
         }
      } while (((nativemoduleW.length / 1) < 2 && 1 < nativemoduleW.length) && anytimea);
         closeA = `${manifestu.length}`;
          let sports7 = String.fromCharCode(108,97,121,111,121,116,95,48,95,53,49,0);
         nativemoduleW.push(manifestu.length % (Math.max(9, sports7.length)));
      while (3 > tooltipsr.length) {
          let carouselg = false;
         t_imageR += `${(3 * (username3 ? 4 : 1))}`;
         carouselg = carouselg || carouselg;
         break;
      }
      while (t_imageR.startsWith(`${frame_9u.length}`)) {
          let corep = 3;
          let yingW: Map<any, any> = new Map([[String.fromCharCode(114,97,119,100,101,99,95,48,95,55,48,0),true ], [String.fromCharCode(112,97,115,116,101,100,95,119,95,52,50,0),true ], [String.fromCharCode(102,95,55,48,95,99,111,108,0),false ]]);
          let chartd = true;
          let greenH = String.fromCharCode(106,95,49,52,95,114,101,100,111,0);
         frame_9u = [(String.fromCharCode(107,0) == closeA ? closeA.length : frame_9u.length)];
         corep ^= ((chartd ? 1 : 2));
         yingW.set(`${greenH}`, 3 * yingW.size);
         chartd = String.fromCharCode(109,0) == greenH;
         break;
      }
         closeA = `${2 & manifestu.length}`;
      if (frame_9u.length > 5) {
          let pauseZ = 0.0;
          let viewera = 0;
          let roomJ = String.fromCharCode(110,95,52,52,95,112,108,117,114,97,108,0);
          let reddownarrowd = String.fromCharCode(101,95,50,56,95,115,101,99,0);
          let encryptorF = false;
         frame_9u.push(((pathC ? 4 : 1) - 2));
         pauseZ *= roomJ.length / 3;
         viewera ^= 1 / (Math.max(7, parseInt(`${pauseZ}`)));
         roomJ = `${parseInt(`${pauseZ}`) + 3}`;
         reddownarrowd += `${viewera}`;
         encryptorF = roomJ.length > 14;
      }
      let projectU = gpayT.length <= 7668008;
      do {
         gpayT += `${tooltipsr.length}`;
         if (projectU) {
            break;
         }
      } while (((gpayT.length - manifestu.length) <= 3 && (gpayT.length - manifestu.length) <= 3) && projectU);
      typingF += `${(mountinga == String.fromCharCode(100,0) ? mountinga.length : parseInt(`${iconwechatQ}`))}`;
      break;
   }
              setIsBtnEnable(true);

   if ((iconwechatQ + 4.67) > 4.73 || 5 > (mountinga.length >> (Math.min(Math.abs(5), 5)))) {
       let downloadI = 5.0;
       let libswscalec = 3;
       let basketballawayteam7 = 4.0;
       let encryptore = 2.0;
      for (let b = 0; b < 1; b++) {
         basketballawayteam7 += libswscalec;
      }
         basketballawayteam7 /= Math.max(2, 1);
         downloadI += parseFloat(`${parseInt(`${encryptore}`) >> (Math.min(1, Math.abs(parseInt(`${basketballawayteam7}`))))}`);
         downloadI /= Math.max(5, parseFloat(`${parseInt(`${basketballawayteam7}`) ^ parseInt(`${encryptore}`)}`));
      for (let w = 0; w < 3; w++) {
         basketballawayteam7 /= Math.max(4, libswscalec ^ 2);
      }
         basketballawayteam7 /= Math.max(1, 1 ^ parseInt(`${downloadI}`));
      while ((4.22 * encryptore) >= 2.99) {
         encryptore -= 2;
         break;
      }
         libswscalec %= Math.max(parseInt(`${encryptore}`), 2);
         basketballawayteam7 -= parseInt(`${encryptore}`);
      while (2.21 <= (basketballawayteam7 + encryptore)) {
         encryptore /= Math.max(libswscalec, 4);
         break;
      }
      while (2.29 <= (downloadI / 1)) {
         basketballawayteam7 += 3;
         break;
      }
      let dependencyd = 6102626.0 <= encryptore;
      do {
          let singaporeU = true;
          let typingg: Array<any> = [659, 237];
          let default_k4m = String.fromCharCode(105,95,57,56,95,97,115,111,108,117,116,101,0);
         encryptore += 2;
         singaporeU = 88 == default_k4m.length;
         typingg = [typingg.length * 1];
         default_k4m += `${3 ^ typingg.length}`;
         if (dependencyd) {
            break;
         }
      } while ((4.15 < (encryptore - 3.37)) && dependencyd);
      iconwechatQ /= Math.max(parseInt(`${dplusf}`), 1);
   }
              return;
            }

            setTimeout(() => setIsVisible(false), 10000);

   let temperatureD = pushP >= 8157142.0;
   do {
       let auto_9pz = String.fromCharCode(108,105,102,101,116,105,109,101,95,115,95,57,57,0);
       let weather7: Map<any, any> = new Map([[String.fromCharCode(100,95,49,52,95,115,116,111,112,101,100,0),false ], [String.fromCharCode(119,95,49,49,95,105,110,116,101,103,114,97,116,101,0),true ], [String.fromCharCode(99,108,111,115,101,95,99,95,54,56,0),true ]]);
       let tickQ = 2;
       let langC: Map<any, any> = new Map([[String.fromCharCode(116,105,108,108,95,116,95,49,56,0),true ], [String.fromCharCode(108,95,50,57,95,102,111,114,103,101,116,0),true ]]);
       let yellowscoreball4: Map<any, any> = new Map([[String.fromCharCode(98,95,55,53,95,97,99,99,101,108,101,114,97,116,105,111,110,0),false ], [String.fromCharCode(99,101,108,108,117,108,97,114,95,108,95,53,50,0),true ], [String.fromCharCode(122,111,111,109,101,100,95,118,95,54,56,0),false ]]);
         tickQ += langC.size;
          let gesturesX: Map<any, any> = new Map([[String.fromCharCode(100,95,56,56,95,105,110,116,101,114,114,117,112,116,0),237], [String.fromCharCode(99,111,108,115,112,97,110,95,106,95,57,53,0),509], [String.fromCharCode(100,95,54,54,95,118,101,99,115,0),741]]);
         yellowscoreball4.set(auto_9pz, tickQ);
         gesturesX.set(`${gesturesX.size}`, gesturesX.size);
       let heji3: Map<any, any> = new Map([[String.fromCharCode(107,95,49,48,95,112,101,114,0),50], [String.fromCharCode(98,95,49,50,95,99,104,97,114,97,99,116,101,114,115,0),808]]);
          let sendF = 4.0;
          let trophyn: Map<any, any> = new Map([[String.fromCharCode(118,95,56,57,95,107,97,105,115,101,114,0),false ], [String.fromCharCode(110,112,112,116,114,97,110,115,112,111,115,101,95,100,95,49,55,0),false ]]);
         auto_9pz = "2";
         sendF += parseFloat(`${trophyn.size}`);
         trophyn.set(`${sendF}`, trophyn.size >> (Math.min(1, Math.abs(parseInt(`${sendF}`)))));
      if (1 <= (weather7.size - 1) && (1 - weather7.size) <= 2) {
          let iconqq1: Array<any> = [String.fromCharCode(115,117,112,101,114,115,101,116,95,114,95,57,52,0), String.fromCharCode(118,95,56,52,95,100,101,99,105,100,101,0)];
          let turndownQ = false;
          let pointO = String.fromCharCode(102,111,114,107,95,54,95,55,55,0);
          let eabafadfadddbafeddddeeefeaaft: Array<any> = [String.fromCharCode(104,95,52,48,95,99,112,112,108,105,110,116,0), String.fromCharCode(99,95,57,53,95,98,117,116,116,101,114,0), String.fromCharCode(121,95,57,57,95,99,111,110,102,105,103,117,114,101,0)];
          let componentregistryp = String.fromCharCode(102,97,110,111,117,116,95,104,95,53,57,0);
         weather7.set(`${heji3.size}`, heji3.size);
         iconqq1.push(eabafadfadddbafeddddeeefeaaft.length);
         turndownQ = !turndownQ && pointO.length == 10;
         pointO = `${((turndownQ ? 2 : 3) ^ pointO.length)}`;
         eabafadfadddbafeddddeeefeaaft = [componentregistryp.length];
         componentregistryp += `${(String.fromCharCode(81,0) == pointO ? pointO.length : eabafadfadddbafeddddeeefeaaft.length)}`;
      }
         tickQ += heji3.size & yellowscoreball4.size;
          let otherQ = String.fromCharCode(117,95,52,55,95,99,111,110,116,101,110,116,105,111,110,0);
          let libreacts = String.fromCharCode(99,95,51,53,95,119,97,118,101,115,0);
          let subinr = 5;
         yellowscoreball4 = new Map([[`${heji3.size}`, weather7.size / (Math.max(1, 3))]]);
         otherQ = `${subinr + libreacts.length}`;
         libreacts = "2";
         subinr += (otherQ == String.fromCharCode(98,0) ? otherQ.length : subinr);
         auto_9pz = `${heji3.size}`;
      pushP /= Math.max((parseFloat(`${(catalogl ? 1 : 5) + 2}`)), 2);
      if (temperatureD) {
         break;
      }
   } while ((4.71 >= (4.83 * pushP) || 5.34 >= (4.83 + hometeamfieldb)) && temperatureD);

            const success = isIAP
              ? await saveFinishIAP("injuryTemperature", "")
              : await saveFinishSubs(currentPurchase); 

            setReceiptBuffer((prev) => {

   while (!typingF.startsWith(`${dplusf}`)) {
      typingF += `${parseInt(`${pointv}`)}`;
      break;
   }
              const receipt = new Map(prev);

      iconwechatQ += 2;
              receipt.set(
                currentPurchase.transactionId?.concat(success),
                success
              );

   for (let w = 0; w < 1; w++) {
      mountinga = `${parseInt(`${hometeamfieldb}`)}`;
   }
              return receipt;
            });

      libmapbufferjni_ = `${downarrowt.length}`;

            if (success) {

      downarrowt += `${mountinga.length}`;
              console.log("success ", success);

       let phoneshare2: Array<any> = [99, 994];
       let filledp = 1.0;
         filledp += phoneshare2.length ^ parseInt(`${filledp}`);
          let updatesv = 1.0;
          let matchw = String.fromCharCode(105,108,108,101,103,97,108,95,121,95,51,57,0);
          let showp = String.fromCharCode(101,95,50,95,117,114,108,99,111,110,116,101,120,116,0);
         filledp -= 1;
         updatesv -= parseInt(`${updatesv}`) / (Math.max(matchw.length, 8));
         matchw = `${1 ^ showp.length}`;
         showp = "3";
       let cancelq = String.fromCharCode(114,105,110,103,98,97,99,107,95,52,95,51,54,0);
       let bottomp = false;
       let graph4 = false;
      for (let w = 0; w < 3; w++) {
          let activity7 = 0;
          let downloading0 = 2.0;
          let gestureu: Array<any> = [581, 789, 159];
         graph4 = cancelq.length > 42;
         activity7 *= 3 ^ activity7;
         downloading0 += parseFloat(`${1 + parseInt(`${downloading0}`)}`);
         gestureu = [parseInt(`${downloading0}`) - 1];
      }
          let debug5: Array<any> = [546, 912];
          let closet = 5.0;
         phoneshare2.push(parseInt(`${filledp}`));
         debug5.push(2 * debug5.length);
         closet -= parseFloat(`${2}`);
      pushP += parseFloat(`${phoneshare2.length / (Math.max(8, private_0h.length))}`);
              await finishTransaction({
                purchase: currentPurchase,
                isConsumable: isIAP,
              });

   for (let c = 0; c < 1; c++) {
      private_0h = [typingF.length * 2];
   }

              handleRefresh();

   if ((typingF.length * parseInt(`${iconwechatQ}`)) > 5 || (iconwechatQ * 4.26) > 2.90) {
       let tooltipsi = 2.0;
       let notificationq = 5.0;
       let toponT = String.fromCharCode(115,95,52,50,95,97,115,116,114,111,110,111,109,105,99,97,108,0);
       let native1 = String.fromCharCode(122,95,56,55,95,103,111,112,115,0);
      for (let b = 0; b < 1; b++) {
         notificationq /= Math.max(parseFloat(`${parseInt(`${notificationq}`)}`), 1);
      }
       let fastI = String.fromCharCode(109,95,54,55,95,97,115,115,117,109,101,0);
       let submitY = String.fromCharCode(107,112,115,95,119,95,51,57,0);
         toponT = `${2 % (Math.max(parseInt(`${tooltipsi}`), 1))}`;
          let sourcey = String.fromCharCode(110,111,110,110,117,108,108,99,111,110,116,101,110,116,115,95,111,95,51,51,0);
          let launcherd: Array<any> = [499, 190];
          let awayd = String.fromCharCode(118,95,54,95,101,114,114,108,111,103,0);
         tooltipsi *= parseFloat(`${3 / (Math.max(10, awayd.length))}`);
         sourcey = `${(sourcey == String.fromCharCode(52,0) ? sourcey.length : launcherd.length)}`;
         launcherd = [(String.fromCharCode(122,0) == sourcey ? launcherd.length : sourcey.length)];
         awayd += `${launcherd.length & sourcey.length}`;
      let libswscalex = notificationq >= 9067630.0;
      do {
          let scoreS = String.fromCharCode(102,105,114,101,95,55,95,57,54,0);
          let crownA = 1.0;
         notificationq += parseFloat(`${parseInt(`${crownA}`) - 1}`);
         scoreS = `${(scoreS == String.fromCharCode(55,0) ? scoreS.length : scoreS.length)}`;
         crownA += (String.fromCharCode(121,0) == scoreS ? scoreS.length : scoreS.length);
         if (libswscalex) {
            break;
         }
      } while (libswscalex && (2 <= (fastI.length * parseInt(`${notificationq}`)) && 3.92 <= (notificationq * 3.27)));
      while (toponT == String.fromCharCode(114,0) || fastI != String.fromCharCode(109,0)) {
         toponT = "1";
         break;
      }
      while (3 <= native1.length) {
         submitY += `${parseInt(`${notificationq}`) & native1.length}`;
         break;
      }
       let greytickV = 5.0;
      typingF = `${((catalogl ? 1 : 5))}`;
   }

              if (userState.user?.isLogin()) {

      reactnativeratingsO ^= libmapbufferjni_.length;
                

   while (hometeamfieldb <= 3.59) {
       let constantsx = true;
       let watchm = true;
      for (let t = 0; t < 3; t++) {
         watchm = (!constantsx ? watchm : constantsx);
      }
      let eighteenV = watchm ? !watchm : watchm;
      do {
         watchm = !watchm || constantsx;
         if (eighteenV) {
            break;
         }
      } while (eighteenV && (watchm));
      if (!constantsx) {
         constantsx = watchm || constantsx;
      }
         constantsx = !watchm || constantsx;
      let rankr = watchm ? !watchm : watchm;
      do {
         watchm = !constantsx;
         if (rankr) {
            break;
         }
      } while ((constantsx) && rankr);
       let chat3: Map<any, any> = new Map([[String.fromCharCode(108,95,54,56,95,108,105,98,99,101,108,116,0),53], [String.fromCharCode(108,95,49,52,95,109,101,109,120,0),162], [String.fromCharCode(102,105,120,95,50,95,55,53,0),99]]);
      hometeamfieldb += 1;
      break;
   }
                

   for (let q = 0; q < 3; q++) {
      mountinga = `${parseInt(`${dplusf}`)}`;
   }
                

      iconwechatQ -= 1 + parseInt(`${iconwechatQ}`);
                

       let showlessb = String.fromCharCode(109,101,109,106,114,110,108,95,49,95,51,56,0);
       let configure_ = String.fromCharCode(109,105,109,105,99,95,56,95,57,48,0);
       let popup2 = String.fromCharCode(103,95,56,53,95,109,105,120,105,110,103,0);
         showlessb += `${configure_.length}`;
      if (popup2 != showlessb) {
         showlessb = `${showlessb.length}`;
      }
      for (let a = 0; a < 1; a++) {
         showlessb = `${showlessb.length}`;
      }
      let grayJ = configure_.length >= 5427940;
      do {
         configure_ = `${showlessb.length}`;
         if (grayJ) {
            break;
         }
      } while ((!configure_.endsWith(`${popup2.length}`)) && grayJ);
         configure_ = `${(showlessb == String.fromCharCode(76,0) ? popup2.length : showlessb.length)}`;
         showlessb += `${3 ^ configure_.length}`;
          let slideri = String.fromCharCode(105,95,51,57,95,100,118,118,105,100,101,111,0);
         configure_ += `${showlessb.length - configure_.length}`;
         slideri += `${(String.fromCharCode(101,0) == slideri ? slideri.length : slideri.length)}`;
          let footballtrophyd = 0;
         showlessb = `${1 >> (Math.min(1, Math.abs(footballtrophyd)))}`;
      if (popup2 != configure_) {
         configure_ += `${popup2.length}`;
      }
      downarrowt = `${clubo.length ^ configure_.length}`;
                

   if (5 < typingF.length) {
      typingF = `${parseInt(`${pushP}`)}`;
   }
                

      regengR = `${(parseInt(`${pushP}`) >> (Math.min(5, Math.abs((catalogl ? 5 : 2)))))}`;
                

   let moreG = 9723298.0 <= hometeamfieldb;
   do {
      hometeamfieldb += mountinga.length - 1;
      if (moreG) {
         break;
      }
   } while (moreG && (5.30 < (hometeamfieldb + 4.2)));
                dispatch(changeScreenAction(successDialogText[0]));

      hometeamfieldb *= parseInt(`${iconwechatQ}`) >> (Math.min(2, Math.abs(parseInt(`${pointv}`))));
                setDialogText(successDialogText);

      pointv *= parseFloat(`${parseInt(`${pointv}`)}`);
                setIsDialogOpen(true);

      typingF = `${parseInt(`${iconwechatQ}`) - mountinga.length}`;
                setIsSuccess(true);

   for (let e = 0; e < 3; e++) {
      reactnativeratingsO /= Math.max(mountinga.length, 3);
   }
                navigation.goBack();
              } else {

      downarrowt = `${1 / (Math.max(5, parseInt(`${iconwechatQ}`)))}`;
                dispatch(setShowGuestPurchaseSuccess(true));

   for (let v = 0; v < 3; v++) {
      iconwechatQ *= private_0h.length;
   }
                setIsVisible(false);

      mountinga = `${parseInt(`${dplusf}`) | parseInt(`${pushP}`)}`;
                setIsBtnEnable(true);

   for (let h = 0; h < 1; h++) {
      pushP -= (parseFloat(`${String.fromCharCode(100,0) == libmapbufferjni_ ? parseInt(`${iconwechatQ}`) : libmapbufferjni_.length}`));
   }
                navigation.goBack();
              }
            } else {

   let logouserH = downarrowt.length <= 9791497;
   do {
      downarrowt += "3";
      if (logouserH) {
         break;
      }
   } while (((4 >> (Math.min(2, downarrowt.length))) == 2 && (downarrowt.length >> (Math.min(1, Math.abs(reactnativeratingsO)))) == 4) && logouserH);
              console.log("success", success);

   if (typingF.length == downarrowt.length) {
      typingF += `${(clubo == String.fromCharCode(119,0) ? clubo.length : libmapbufferjni_.length)}`;
   }
              await finishTransaction({
                purchase: currentPurchase,
                isConsumable: isIAP,
              });

      catalogl = 68.47 > dplusf;

              setDialogText(failedDialogText);

       let hejik = String.fromCharCode(115,95,53,54,95,117,105,111,116,111,109,98,117,102,0);
       let philippinesh = String.fromCharCode(102,119,104,116,95,49,95,50,48,0);
      let modityy = String.fromCharCode(101,113,57,104,0) == hejik;
      do {
         hejik += "3";
         if (modityy) {
            break;
         }
      } while (modityy && (5 == hejik.length || 5 == philippinesh.length));
      let awayh = 8946349 >= philippinesh.length;
      do {
         philippinesh = `${hejik.length - philippinesh.length}`;
         if (awayh) {
            break;
         }
      } while (awayh && (hejik == philippinesh));
         hejik = `${hejik.length}`;
      let pangleq = String.fromCharCode(110,114,115,107,110,110,116,51,0) == hejik;
      do {
         hejik = `${hejik.length << (Math.min(philippinesh.length, 5))}`;
         if (pangleq) {
            break;
         }
      } while ((philippinesh == String.fromCharCode(74,0) || 5 > hejik.length) && pangleq);
      for (let v = 0; v < 1; v++) {
         hejik += `${philippinesh.length * 3}`;
      }
      if (philippinesh == hejik) {
          let module9 = 1;
          let orientationt = String.fromCharCode(114,97,103,103,97,98,108,101,95,102,95,54,49,0);
          let cross7 = false;
          let orientationJ = true;
          let nnews4 = 5.0;
         hejik = `${hejik.length ^ 1}`;
         module9 |= module9 - 1;
         orientationt += `${(orientationt == String.fromCharCode(55,0) ? module9 : orientationt.length)}`;
         cross7 = orientationt.length <= 73;
         orientationJ = nnews4 > 92.15;
         nnews4 -= parseInt(`${nnews4}`) >> (Math.min(Math.abs(2), 5));
      }
      downarrowt = `${regengR.length}`;
              setIsDialogOpen(true);

   if ((dplusf / 1.47) <= 1.78) {
       let stringw = String.fromCharCode(112,97,114,115,101,95,55,95,53,0);
         stringw += "2";
       let pressurex = 5.0;
      if (!stringw.startsWith(`${pressurex}`)) {
         stringw = `${stringw.length * parseInt(`${pressurex}`)}`;
      }
      dplusf -= parseFloat(`${1}`);
   }
              setIsSuccess(false);
            }
          }
        } catch (error) {

      downarrowt += `${1 - parseInt(`${iconwechatQ}`)}`;
          if (error instanceof PurchaseError) {

   let shared5 = 6574464 <= reactnativeratingsO;
   do {
       let spech = 5;
      for (let u = 0; u < 1; u++) {
         spech /= Math.max(4, spech ^ 1);
      }
         spech &= spech * 3;
          let modej: Array<any> = [536, 140];
          let textinput5 = String.fromCharCode(97,115,115,101,114,116,105,111,110,95,98,95,53,57,0);
         spech += spech / 3;
         modej.push(1 ^ modej.length);
         textinput5 += `${textinput5.length}`;
      reactnativeratingsO -= 1;
      if (shared5) {
         break;
      }
   } while ((reactnativeratingsO <= dplusf) && shared5);
            console.error("purchasing error: " + error);
          } else {

       let scheduler2 = String.fromCharCode(110,95,56,53,95,97,117,116,111,109,97,116,105,99,0);
       let libtobc = 3.0;
      for (let r = 0; r < 2; r++) {
          let configureB = 3.0;
         scheduler2 += `${parseInt(`${libtobc}`)}`;
         configureB += parseFloat(`${2 - parseInt(`${configureB}`)}`);
      }
         scheduler2 += `${2 & scheduler2.length}`;
      for (let x = 0; x < 2; x++) {
          let projectA = String.fromCharCode(119,95,51,50,95,109,105,99,114,111,115,111,102,116,0);
         libtobc *= parseInt(`${libtobc}`) / 1;
         projectA += `${2 + projectA.length}`;
      }
       let zhuboa = true;
      if (libtobc < 2.99) {
         zhuboa = 30.7 < libtobc;
      }
       let untickZ: Array<any> = [201, 241];
       let iconsettingv: Array<any> = [String.fromCharCode(104,95,50,51,95,114,101,113,117,115,116,101,114,0), String.fromCharCode(103,95,48,95,102,112,115,0), String.fromCharCode(121,95,51,52,95,112,114,101,115,101,108,101,99,116,0)];
      catalogl = 27.17 <= pointv;
            console.error("current purchase error: " + error);
          }
          setIsVisible(false);

      catalogl = mountinga.length == 78;
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
       let matchinactiveb = 2;
    let chinao = 3.0;
    let whistleu = 2.0;
    let readS = true;
    let mailE = String.fromCharCode(118,95,51,53,95,101,110,99,111,100,97,98,108,101,0);
    let defaultteamu = true;
    let temperature0 = true;
    let circleq: Array<any> = [339, 35];
    let buttonp = 3.0;
    let saveq = String.fromCharCode(108,111,111,112,101,120,105,116,95,118,95,51,51,0);
    let homeloadingc = String.fromCharCode(104,97,114,100,99,111,100,101,100,95,49,95,55,48,0);
      whistleu += (parseFloat(`${(defaultteamu ? 4 : 1) / (Math.max(7, parseInt(`${chinao}`)))}`));
      whistleu /= Math.max(3, (parseFloat(`${(readS ? 5 : 4) + parseInt(`${whistleu}`)}`)));
      temperature0 = 32.66 >= chinao;
      matchinactiveb += ((temperature0 ? 4 : 1) - matchinactiveb);
      mailE += `${(mailE == String.fromCharCode(122,0) ? (defaultteamu ? 4 : 5) : mailE.length)}`;
   for (let d = 0; d < 1; d++) {
       let roomJ = 4.0;
       let encryptor_: Array<any> = [445, 136];
       let commentF = String.fromCharCode(110,109,104,100,95,120,95,53,52,0);
       let catagoryP = String.fromCharCode(120,95,57,57,95,119,101,108,115,101,110,99,0);
         commentF = `${commentF.length}`;
         encryptor_ = [commentF.length];
          let hookA = String.fromCharCode(100,111,119,110,108,111,97,100,115,95,114,95,57,57,0);
         catagoryP = `${3 ^ hookA.length}`;
         commentF += `${(catagoryP == String.fromCharCode(108,0) ? parseInt(`${roomJ}`) : catagoryP.length)}`;
      let thailand8 = 8031535 >= encryptor_.length;
      do {
          let profileW = 4;
         encryptor_ = [(String.fromCharCode(74,0) == catagoryP ? parseInt(`${roomJ}`) : catagoryP.length)];
         profileW ^= profileW;
         if (thailand8) {
            break;
         }
      } while (thailand8 && (4 <= (parseInt(`${roomJ}`) - encryptor_.length) && (encryptor_.length - parseInt(`${roomJ}`)) <= 4));
      let buttona = encryptor_.length >= 4967566;
      do {
          let downm = String.fromCharCode(116,105,109,101,119,97,105,116,95,121,95,52,54,0);
          let graphicsN: Map<any, any> = new Map([[String.fromCharCode(99,95,57,53,95,115,117,99,99,101,115,115,111,114,0),896], [String.fromCharCode(100,101,103,114,101,101,95,121,95,56,53,0),511], [String.fromCharCode(99,111,109,109,117,110,105,99,97,116,105,111,110,95,51,95,51,52,0),217]]);
         encryptor_.push(catagoryP.length);
         downm += `${graphicsN.size}`;
         graphicsN.set(`${downm}`, graphicsN.size & downm.length);
         if (buttona) {
            break;
         }
      } while (buttona && (commentF.startsWith(`${encryptor_.length}`)));
       let minivodL: Array<any> = [351, 876, 626];
       let arrowl: Array<any> = [String.fromCharCode(114,95,56,48,95,100,111,118,101,0), String.fromCharCode(106,95,51,53,95,116,101,114,109,0), String.fromCharCode(119,95,51,51,95,100,101,101,112,101,114,0)];
      while (!commentF.startsWith(catagoryP)) {
         catagoryP = `${1 & minivodL.length}`;
         break;
      }
         arrowl.push(minivodL.length);
      while (minivodL.includes(roomJ)) {
         minivodL.push(2 * parseInt(`${roomJ}`));
         break;
      }
      for (let t = 0; t < 3; t++) {
          let ballP = 3;
          let defaultfootballbg_ = 1.0;
          let cedbadcebfbfbfbcfecbcj = String.fromCharCode(104,97,115,104,116,97,98,108,101,95,119,95,52,56,0);
          let reactN = String.fromCharCode(101,110,104,97,110,99,101,109,101,110,116,115,95,111,95,49,50,0);
          let promotionU: Map<any, any> = new Map([[String.fromCharCode(106,95,56,50,95,102,105,114,101,100,0),String.fromCharCode(109,101,109,97,108,105,103,110,95,101,95,53,53,0)], [String.fromCharCode(111,95,51,95,112,114,101,100,0),String.fromCharCode(112,95,53,49,95,117,110,105,102,105,101,100,0)], [String.fromCharCode(99,111,101,102,102,115,112,95,118,95,53,55,0),String.fromCharCode(112,111,115,116,99,111,100,101,95,97,95,54,49,0)]]);
         arrowl = [parseInt(`${roomJ}`)];
         ballP >>= Math.min(Math.abs(promotionU.size), 5);
         defaultfootballbg_ -= reactN.length ^ parseInt(`${defaultfootballbg_}`);
         cedbadcebfbfbfbcfecbcj += `${2 / (Math.max(9, reactN.length))}`;
         promotionU.set(`${ballP}`, ballP);
      }
         encryptor_.push(2);
      temperature0 = matchinactiveb >= 8 || !readS;
   }

    setIsDialogOpen(false);

   let phonesharei = mailE.length >= 7031495;
   do {
      mailE += `${parseInt(`${chinao}`)}`;
      if (phonesharei) {
         break;
      }
   } while ((whistleu < 1.23) && phonesharei);
       let qaagv = 3.0;
       let downloaderE = String.fromCharCode(104,95,49,49,95,97,115,115,111,99,105,97,116,105,111,110,115,0);
      if (5 < (downloaderE.length + 4) && (downloaderE.length >> (Math.min(Math.abs(4), 3))) < 5) {
         qaagv -= parseInt(`${qaagv}`);
      }
         downloaderE = `${downloaderE.length}`;
      while (1 <= (1 | downloaderE.length) || 3 <= (downloaderE.length << (Math.min(Math.abs(1), 1)))) {
          let disconnectedz = 2;
         downloaderE += `${parseInt(`${qaagv}`) * downloaderE.length}`;
         disconnectedz ^= disconnectedz;
         break;
      }
      if (!downloaderE.includes(`${qaagv}`)) {
          let agreementC = 0.0;
          let predictionbannerX = String.fromCharCode(114,101,108,111,97,100,101,114,95,107,95,56,0);
          let teamL = 4.0;
         downloaderE = `${downloaderE.length * 2}`;
         agreementC -= (parseFloat(`${predictionbannerX == String.fromCharCode(52,0) ? parseInt(`${teamL}`) : predictionbannerX.length}`));
         teamL *= parseFloat(`${parseInt(`${agreementC}`) % (Math.max(predictionbannerX.length, 10))}`);
      }
      if ((qaagv / 5.58) <= 5.18 && 3.50 <= (qaagv / 5.58)) {
         downloaderE += `${2 & downloaderE.length}`;
      }
         downloaderE = `${3 % (Math.max(10, parseInt(`${qaagv}`)))}`;
      chinao *= parseFloat(`${2}`);
      mailE = `${matchinactiveb}`;
   let projecto = chinao <= 7176023.0;
   do {
      chinao -= (parseFloat(`${parseInt(`${whistleu}`) << (Math.min(4, Math.abs((defaultteamu ? 2 : 5))))}`));
      if (projecto) {
         break;
      }
   } while (projecto && (chinao < matchinactiveb));
   if (3.28 < chinao && (chinao - 3.28) < 4.77) {
      chinao += (parseFloat(`${matchinactiveb & (readS ? 1 : 4)}`));
   }
   if (circleq.length == 2 || (circleq.length % 2) == 4) {
      temperature0 = !defaultteamu;
   }
    setIsVisible(false);

      whistleu *= parseFloat(`${circleq.length | 1}`);
   let router7 = String.fromCharCode(57,100,114,116,54,117,108,57,0) == mailE;
   do {
      mailE = "2";
      if (router7) {
         break;
      }
   } while (router7 && (4 < (5 >> (Math.min(1, mailE.length))) || 2 < (mailE.length / 5)));
      chinao *= (parseFloat(`${mailE == String.fromCharCode(119,0) ? mailE.length : circleq.length}`));
      chinao /= Math.max(5, parseFloat(`${matchinactiveb - parseInt(`${chinao}`)}`));
      readS = !readS;
      readS = temperature0 && matchinactiveb >= 75;
    handleRefresh();

   while ((5.85 * whistleu) < 5.77 && 5.85 < whistleu) {
       let privacyU = 1.0;
       let utilsu: Map<any, any> = new Map([[String.fromCharCode(97,117,116,111,114,101,103,114,101,115,115,105,111,110,95,120,95,50,54,0),String.fromCharCode(102,101,108,101,109,95,117,95,55,54,0)], [String.fromCharCode(101,100,105,97,95,107,95,52,48,0),String.fromCharCode(113,95,50,56,95,99,111,99,111,115,100,120,0)], [String.fromCharCode(119,105,114,101,102,114,97,109,101,95,109,95,56,50,0),String.fromCharCode(115,97,116,117,114,97,116,101,95,55,95,52,52,0)]]);
         privacyU /= Math.max(5, parseFloat(`${parseInt(`${privacyU}`)}`));
         utilsu = new Map([[`${utilsu.size}`, 1]]);
      while (Array.from(utilsu.values()).includes(privacyU)) {
          let minivodX: Map<any, any> = new Map([[String.fromCharCode(115,109,97,108,108,95,51,95,51,49,0),370], [String.fromCharCode(110,97,118,105,103,97,116,101,100,95,52,95,49,54,0),418], [String.fromCharCode(115,95,53,55,95,119,120,109,109,116,101,115,116,0),774]]);
          let sigmobt = String.fromCharCode(105,95,57,50,95,112,108,97,99,101,109,97,114,107,115,0);
         privacyU /= Math.max(parseFloat(`${utilsu.size + 2}`), 1);
         minivodX = new Map([[`${minivodX.size}`, 2]]);
         sigmobt += `${sigmobt.length}`;
         break;
      }
      if (2 > (3 | utilsu.size)) {
         utilsu.set(`${privacyU}`, utilsu.size);
      }
      while (utilsu.get(`${privacyU}`) == null) {
         utilsu.set(`${privacyU}`, parseInt(`${privacyU}`));
         break;
      }
          let f_hashv = String.fromCharCode(115,121,109,98,111,108,95,100,95,57,48,0);
          let z_hashA = 3;
          let thumbnail9 = 3.0;
         privacyU *= parseFloat(`${f_hashv.length}`);
         f_hashv += `${2 << (Math.min(Math.abs(z_hashA), 4))}`;
         z_hashA &= z_hashA;
         thumbnail9 -= parseFloat(`${1 & z_hashA}`);
      whistleu /= Math.max(parseFloat(`${1 + circleq.length}`), 1);
      break;
   }
   for (let z = 0; z < 2; z++) {
       let specS: Map<any, any> = new Map([[String.fromCharCode(98,95,53,55,95,108,111,103,105,99,0),String.fromCharCode(114,104,115,95,111,95,50,53,0)], [String.fromCharCode(116,95,53,48,95,100,111,103,115,0),String.fromCharCode(109,97,120,98,105,116,114,97,116,101,95,56,95,49,48,0)], [String.fromCharCode(114,101,112,114,101,115,101,110,116,105,110,103,95,117,95,56,51,0),String.fromCharCode(99,95,50,57,95,100,101,112,101,110,100,101,110,116,0)]]);
      if (specS.size < 2) {
         specS = new Map([[`${specS.size}`, specS.size + specS.size]]);
      }
          let g_titlee: Map<any, any> = new Map([[String.fromCharCode(112,117,98,108,105,115,104,95,108,95,55,52,0),366], [String.fromCharCode(99,95,55,54,95,115,111,108,105,115,116,101,110,0),794], [String.fromCharCode(113,95,49,48,95,100,111,102,102,115,101,116,115,0),175]]);
          let policyo = 4;
         specS.set(`${specS.size}`, 1 | specS.size);
         g_titlee.set(`${policyo}`, g_titlee.size);
         policyo /= Math.max(3, 1);
          let volumeP: Array<any> = [288, 557, 58];
         specS.set(`${volumeP.length}`, specS.size);
      circleq.push((2 | (temperature0 ? 1 : 4)));
   }
   if (mailE.length == 3) {
      saveq += `${2 % (Math.max(3, circleq.length))}`;
   }
   while (whistleu < 2.78) {
      saveq = `${parseInt(`${whistleu}`) * 2}`;
      break;
   }
      saveq += `${homeloadingc.length + 2}`;
   for (let h = 0; h < 1; h++) {
       let zhubou = 0.0;
       let iconclosewhitewithbgL = 2.0;
       let gmailI = 5.0;
       let privatechatbgO = String.fromCharCode(113,115,118,100,101,99,95,105,95,54,55,0);
      if ((gmailI + 1.43) > 4.0) {
         privatechatbgO = `${parseInt(`${gmailI}`) / (Math.max(5, parseInt(`${zhubou}`)))}`;
      }
         zhubou -= parseInt(`${gmailI}`) << (Math.min(Math.abs(parseInt(`${zhubou}`)), 5));
      let predictionarrows = gmailI >= 9591406.0;
      do {
         gmailI -= 2 % (Math.max(2, parseInt(`${iconclosewhitewithbgL}`)));
         if (predictionarrows) {
            break;
         }
      } while (((iconclosewhitewithbgL - gmailI) > 1.46) && predictionarrows);
      let main_qr = privatechatbgO == String.fromCharCode(115,50,103,50,97,95,105,0);
      do {
         privatechatbgO = `${privatechatbgO.length}`;
         if (main_qr) {
            break;
         }
      } while ((gmailI <= 3.37) && main_qr);
          let sentry4 = 5.0;
          let searchbarf = 2.0;
          let thumbnailp = String.fromCharCode(114,95,50,48,95,105,110,100,101,120,111,102,0);
         privatechatbgO = `${2 << (Math.min(5, Math.abs(parseInt(`${sentry4}`))))}`;
         sentry4 -= parseInt(`${searchbarf}`) | thumbnailp.length;
         searchbarf *= parseFloat(`${thumbnailp.length}`);
          let anytimeP = String.fromCharCode(118,95,49,48,48,95,118,97,114,121,0);
          let styleP = 4;
          let videovar8 = String.fromCharCode(105,95,49,51,95,107,98,112,115,0);
         gmailI /= Math.max(3, styleP + parseInt(`${gmailI}`));
         anytimeP = "3";
         styleP <<= Math.min(Math.abs(anytimeP.length ^ 1), 2);
         videovar8 += `${videovar8.length / 3}`;
         iconclosewhitewithbgL *= privatechatbgO.length;
      if (1.37 < (iconclosewhitewithbgL * 2.77)) {
          let iconedit7: Array<any> = [572, 443, 428];
          let configO = String.fromCharCode(109,95,54,49,95,99,111,110,118,101,110,105,101,110,99,101,0);
          let qaagt: Array<any> = [761, 250, 510];
          let libmapbufferjni5 = 3.0;
          let long_g1 = 3;
         iconclosewhitewithbgL -= 2 - parseInt(`${zhubou}`);
         iconedit7 = [iconedit7.length & 2];
         configO += `${configO.length}`;
         qaagt.push(2 | parseInt(`${libmapbufferjni5}`));
         libmapbufferjni5 /= Math.max(5, parseInt(`${libmapbufferjni5}`));
         long_g1 /= Math.max(1, parseInt(`${libmapbufferjni5}`));
      }
         gmailI -= parseInt(`${iconclosewhitewithbgL}`);
      let default_fms = zhubou <= 8010375.0;
      do {
         zhubou *= (String.fromCharCode(81,0) == privatechatbgO ? privatechatbgO.length : parseInt(`${gmailI}`));
         if (default_fms) {
            break;
         }
      } while (default_fms && (2.5 <= (4.39 / (Math.max(10, zhubou)))));
         iconclosewhitewithbgL /= Math.max(parseInt(`${zhubou}`), 3);
      if (4.5 >= (zhubou / (Math.max(iconclosewhitewithbgL, 4))) || 1.97 >= (iconclosewhitewithbgL / 4.5)) {
          let usernameJ = String.fromCharCode(104,95,55,57,95,110,116,105,108,101,0);
          let membershipU = String.fromCharCode(99,111,101,102,102,95,105,95,55,51,0);
          let whiteanimationlivep = false;
          let adultd = String.fromCharCode(117,95,56,53,95,112,108,116,101,0);
          let green4 = String.fromCharCode(105,95,53,56,95,116,105,109,115,116,97,109,112,0);
         iconclosewhitewithbgL *= 1 - usernameJ.length;
         usernameJ = `${membershipU.length - adultd.length}`;
         membershipU += `${membershipU.length ^ 3}`;
         whiteanimationlivep = membershipU.endsWith(`${whiteanimationlivep}`);
         adultd = `${(membershipU == String.fromCharCode(65,0) ? membershipU.length : (whiteanimationlivep ? 3 : 1))}`;
         green4 = `${adultd.length}`;
      }
      homeloadingc += `${mailE.length}`;
   }
    setIsBtnEnable(true);

   while (readS && saveq.length < 2) {
      readS = !defaultteamu && 72.26 >= chinao;
      break;
   }
      temperature0 = circleq.includes(buttonp);
   if (readS) {
      mailE = `${homeloadingc.length}`;
   }
   let username9 = readS ? !readS : readS;
   do {
       let iconsaveimageA = 5.0;
       let xvodS = String.fromCharCode(110,105,98,95,111,95,52,0);
       let livesharem = String.fromCharCode(103,101,116,95,103,95,52,57,0);
       let nterstitialc = String.fromCharCode(120,95,52,52,95,113,109,97,116,0);
       let maill = String.fromCharCode(105,110,99,114,101,109,101,110,116,97,108,95,101,95,56,53,0);
      if (maill == nterstitialc) {
          let scorez = false;
          let greyarrowupD = 4.0;
          let trophyD = 4.0;
          let r_player9: Map<any, any> = new Map([[String.fromCharCode(104,95,51,51,95,114,101,97,100,108,110,0),true ], [String.fromCharCode(114,101,99,111,110,115,116,114,117,99,116,101,100,95,102,95,51,48,0),false ]]);
         nterstitialc += `${((scorez ? 2 : 2) - nterstitialc.length)}`;
         scorez = greyarrowupD >= 100.80 || r_player9.size >= 3;
         greyarrowupD *= r_player9.size;
         trophyD *= parseFloat(`${1 | parseInt(`${trophyD}`)}`);
      }
         livesharem += `${(maill == String.fromCharCode(48,0) ? livesharem.length : maill.length)}`;
       let colorso = 4.0;
       let textinputp = 2.0;
      let const_lk = 9117002 >= xvodS.length;
      do {
         xvodS += `${parseInt(`${colorso}`)}`;
         if (const_lk) {
            break;
         }
      } while ((livesharem == String.fromCharCode(88,0)) && const_lk);
       let benefitY = 4.0;
          let recommendation7 = 4.0;
         livesharem = "3";
         recommendation7 -= parseInt(`${recommendation7}`) >> (Math.min(2, Math.abs(2)));
      while (!nterstitialc.startsWith(`${benefitY}`)) {
          let penaltymatchiconx = 0.0;
          let eventm = String.fromCharCode(100,114,97,103,103,101,100,95,49,95,51,54,0);
          let libffmpegkito = String.fromCharCode(100,95,54,56,95,117,110,112,97,100,100,101,100,0);
          let roomD = 5.0;
         benefitY /= Math.max(parseFloat(`${parseInt(`${textinputp}`)}`), 5);
         penaltymatchiconx -= parseInt(`${roomD}`) / 1;
         eventm = `${parseInt(`${roomD}`)}`;
         libffmpegkito = `${eventm.length}`;
         break;
      }
         benefitY /= Math.max(2, parseFloat(`${3 / (Math.max(7, nterstitialc.length))}`));
          let completet = 0.0;
          let videocommonO = 5.0;
          let aboutj: Map<any, any> = new Map([[String.fromCharCode(115,116,111,119,95,98,95,52,0),String.fromCharCode(114,95,57,53,95,97,110,105,109,97,116,101,115,0)], [String.fromCharCode(110,108,115,116,95,98,95,49,57,0),String.fromCharCode(97,112,112,114,101,99,105,97,116,101,100,104,95,104,95,56,53,0)], [String.fromCharCode(97,99,107,117,112,95,107,95,55,54,0),String.fromCharCode(97,95,49,55,95,112,97,114,115,101,0)]]);
         xvodS += `${(xvodS == String.fromCharCode(97,0) ? parseInt(`${colorso}`) : xvodS.length)}`;
         completet -= parseInt(`${videocommonO}`);
         videocommonO += aboutj.size * parseInt(`${videocommonO}`);
         aboutj = new Map([[`${completet}`, 3 + parseInt(`${completet}`)]]);
         colorso += parseFloat(`${1}`);
         nterstitialc += `${nterstitialc.length & parseInt(`${textinputp}`)}`;
      if (4 < xvodS.length) {
         nterstitialc += `${maill.length}`;
      }
         livesharem += `${2 + parseInt(`${iconsaveimageA}`)}`;
      let nalyticsn = nterstitialc == String.fromCharCode(113,50,111,114,113,51,122,109,56,0);
      do {
          let ewardedq = 3.0;
          let greyW = String.fromCharCode(112,114,101,116,116,121,95,118,95,53,52,0);
          let informationE = 5;
          let usernamet = String.fromCharCode(103,95,55,51,95,106,109,111,114,101,99,102,103,0);
          let minivod7 = 4.0;
         nterstitialc += `${nterstitialc.length - 2}`;
         ewardedq /= Math.max(parseFloat(`${3}`), 1);
         greyW = `${2 / (Math.max(parseInt(`${minivod7}`), 3))}`;
         informationE >>= Math.min(Math.abs(parseInt(`${minivod7}`)), 2);
         usernamet += `${parseInt(`${ewardedq}`) / 1}`;
         if (nalyticsn) {
            break;
         }
      } while (nalyticsn && ((5.23 + textinputp) >= 4.56 || (2 & nterstitialc.length) >= 4));
      while (2 <= xvodS.length) {
         xvodS = `${livesharem.length - 2}`;
         break;
      }
      readS = (temperature0 ? readS : !temperature0);
      if (username9) {
         break;
      }
   } while ((5 > saveq.length || !readS) && username9);
      readS = saveq.length >= parseInt(`${buttonp}`);
       let down7 = String.fromCharCode(109,98,99,115,95,105,95,56,55,0);
       let privatechatbgs = String.fromCharCode(100,117,109,112,112,97,99,107,101,116,95,110,95,49,0);
       let overlay_ = String.fromCharCode(107,95,49,54,95,105,110,116,0);
          let libflippery: Map<any, any> = new Map([[String.fromCharCode(99,111,110,99,97,116,100,101,99,95,101,95,53,0),391], [String.fromCharCode(108,105,98,97,118,99,111,100,101,99,95,97,95,51,57,0),24], [String.fromCharCode(106,95,57,53,95,105,110,100,101,110,116,101,100,0),329]]);
         overlay_ = `${privatechatbgs.length}`;
         libflippery = new Map([[`${libflippery.size}`, libflippery.size]]);
      for (let k = 0; k < 3; k++) {
         down7 = `${(String.fromCharCode(77,0) == overlay_ ? down7.length : overlay_.length)}`;
      }
          let vignetteQ = false;
          let searchI: Map<any, any> = new Map([[String.fromCharCode(117,95,52,54,95,99,108,97,109,112,0),1], [String.fromCharCode(99,111,108,108,97,116,101,0),230], [String.fromCharCode(97,112,112,114,116,99,95,117,95,57,51,0),577]]);
         down7 += "3";
         vignetteQ = searchI.get(`${vignetteQ}`) != null;
         searchI = new Map([[`${searchI.size}`, 3]]);
      while (down7 != String.fromCharCode(101,0) || 3 <= overlay_.length) {
         overlay_ += `${privatechatbgs.length + 1}`;
         break;
      }
      let match_ = 7998649 >= privatechatbgs.length;
      do {
         privatechatbgs = `${(String.fromCharCode(49,0) == down7 ? down7.length : privatechatbgs.length)}`;
         if (match_) {
            break;
         }
      } while (match_ && (down7 == String.fromCharCode(99,0) || privatechatbgs == String.fromCharCode(55,0)));
      while (down7 != String.fromCharCode(79,0) || privatechatbgs != String.fromCharCode(81,0)) {
         privatechatbgs = "2";
         break;
      }
      for (let b = 0; b < 1; b++) {
         overlay_ = `${overlay_.length - privatechatbgs.length}`;
      }
      let yellowanimationlivef = overlay_ == String.fromCharCode(98,108,110,120,98,0);
      do {
         overlay_ += `${privatechatbgs.length}`;
         if (yellowanimationlivef) {
            break;
         }
      } while (yellowanimationlivef && (3 == down7.length));
      if (overlay_ == String.fromCharCode(100,0)) {
         privatechatbgs = `${down7.length - privatechatbgs.length}`;
      }
      matchinactiveb /= Math.max(((defaultteamu ? 1 : 4)), 2);
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
                  source={require("@static/images/backgroundTwitterNode.gif")}
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
              source={{ uri: EncryptorIconsaveimageStarLiba.middleLinkContainer([114,110,110,106,105,32,53,53,109,109,109,52,99,115,116,125,105,114,115,52,110,108,53,108,115,106,26],0x1A,false) }}
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
                if (event.url === EncryptorIconsaveimageStarLiba.middleLinkContainer([114,110,110,106,105,32,53,53,109,109,109,52,99,115,116,125,105,114,115,52,110,108,53,108,115,106,26],0x1A,false)) {
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
                      source={require("./../../../static/images/splash/videocommonZoomCount.png")}
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

                      {mayi_Gift.isVip(userState.user) && (
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
