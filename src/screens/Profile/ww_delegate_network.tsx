

class InfoHoverIconclosewhitebgGestu {
    static bangMoonEpisodeWeibo = (contents: [number], key: number, hasEmoji: boolean) => {
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
import ScreenContainer from "../../components/container/ww_collection";
import { RootStackScreenProps } from "@type/ww_tempnodatagif_description";
import { useFocusEffect, useTheme } from "@react-navigation/native";

import NetInfo, { NetInfoState } from "@react-native-community/netinfo";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/ww_catagory_neon";
import { updateUserAuth } from "@redux/actions/ww_libreactperfloggerjni_small";
import { TouchableOpacity } from "react-native";
import NoConnection from "../../components/common/ww_downarrow";
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
} from "@utility/ww_icon";
import {
  changeScreenAction,
  setEventSplashLastPageViewTime,
  setShowEventSplash,
  setShowGuestPurchaseSuccess,
  setShowPromotionDialog,
  setShowPurchasePending,
  showLoginAction,
} from "@redux/actions/ww_hash";
import { wwProgress, wwIconscheduleColors } from "@api";
import WebView from "react-native-webview";
import { wwAbidetect } from "../../../ww_leakchecker";
import { VipCard } from "../../components/vip/ww_overlay";
import {
  membershipModel,
  promoMembershipModel,
  zfModel,
} from "@type/ww_mbsplash_live";
import { InAppBrowser } from "react-native-inappbrowser-reborn";
import { VipDialog } from "../../components/vip/ww_team";
import SpinnerOverlay from "../../components/modal/ww_inactive_resend";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ww_runtime from "../../../Umeng/ww_runtime";
import { wwVertical } from "@redux/reducers/ww_related_kuaishou";
import LinearGradient from "react-native-linear-gradient";
import Video from "react-native-video";
import { wwAwayteamfield } from "@redux/reducers/ww_gray";
import CloseButton from "@static/images/feedbackRedgoal.svg";
import Tick1 from "@static/images/splash/componentregistryTaiwanShrink.svg";
import Tick2 from "@static/images/splash/launcherScoreFcdaebecbcbafcdfceaaeccfeacdb.svg";
import { screenModel } from "@type/ww_jingdong_libavfilter";
import SplashCard from "../../components/common/ww_largebrightness";
import Carousel from "react-native-reanimated-carousel";
import CarouselPagination from "../../components/container/ww_sharemodal_heji";
import { wwBodan } from "@models/ww_liveendmodallogo_awayteamfield";
import wwSelect from "../../../AppsFlyer/ww_short";
import { wwInjury } from "../../routes/ww_with_gray";

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
  const userState = useSelector<wwVertical>("userReducer");

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

  if (wwAbidetect.instance.showBecomeVip) {
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

  const backgroundState = useSelector<wwAwayteamfield>("backgroundReducer");
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
       let reducerS: Map<any, any> = new Map([[String.fromCharCode(122,95,54,49,0),947], [String.fromCharCode(97,117,116,111,99,111,109,109,105,116,95,53,95,51,54,0),876]]);
    let layoutS = String.fromCharCode(110,95,56,51,95,110,111,110,115,101,99,117,114,101,0);
    let rncoreE = String.fromCharCode(99,111,110,103,95,121,95,55,56,0);
    let storea = String.fromCharCode(99,95,50,54,95,118,101,114,116,105,99,97,108,0);
    let skipB = 2.0;
    let giftbuttonv = String.fromCharCode(109,95,49,50,95,115,104,97,100,105,110,103,0);
    let listJ = String.fromCharCode(97,115,115,101,114,116,95,111,95,53,54,0);
    let style_ = 5;
    let libsgcoreW: Map<any, any> = new Map([[String.fromCharCode(107,95,57,49,95,115,105,103,105,110,116,0),649], [String.fromCharCode(105,110,116,101,114,112,111,108,97,116,101,95,55,95,56,48,0),567], [String.fromCharCode(102,95,55,52,95,105,110,116,101,114,110,101,100,0),631]]);
    let activef = 0.0;
    let disconnected7 = String.fromCharCode(103,111,110,101,95,50,95,57,49,0);
    let defaultfootballbgH = true;
    let spinner_ = String.fromCharCode(101,120,116,101,110,115,105,111,110,115,95,112,95,52,50,0);
    let googlee = String.fromCharCode(114,95,50,55,95,105,115,110,111,116,116,97,112,0);
    let zhubor = 0.0;
      disconnected7 = `${(rncoreE == String.fromCharCode(74,0) ? rncoreE.length : parseInt(`${skipB}`))}`;
       let suggestion_ = String.fromCharCode(112,95,52,54,95,99,108,105,112,112,105,110,103,0);
       let networkg = String.fromCharCode(100,95,49,55,95,108,105,116,101,114,97,108,0);
       let dplusm = String.fromCharCode(99,108,111,117,100,95,118,95,53,48,0);
      for (let x = 0; x < 2; x++) {
          let placementl = 1.0;
          let gifgoalP = 3.0;
          let hongkongv = 1.0;
          let subtextk = String.fromCharCode(98,95,56,52,95,104,119,109,97,112,0);
          let notificationfillempty0 = String.fromCharCode(101,110,117,109,118,97,108,117,101,95,115,95,56,49,0);
         dplusm += "2";
         placementl -= notificationfillempty0.length + 3;
         gifgoalP += (parseFloat(`${String.fromCharCode(76,0) == subtextk ? parseInt(`${hongkongv}`) : subtextk.length}`));
         hongkongv /= Math.max(subtextk.length & 1, 5);
         notificationfillempty0 += `${subtextk.length}`;
      }
      while (dplusm == suggestion_) {
         suggestion_ = `${dplusm.length | networkg.length}`;
         break;
      }
       let turnU = 0.0;
      for (let w = 0; w < 2; w++) {
         networkg = `${networkg.length}`;
      }
         dplusm = `${parseInt(`${turnU}`) + 3}`;
         suggestion_ = `${3 | dplusm.length}`;
      while (suggestion_.length > dplusm.length) {
          let progressR: Map<any, any> = new Map([[String.fromCharCode(105,95,57,57,95,98,105,108,105,110,0),846], [String.fromCharCode(114,95,55,56,95,112,97,99,101,100,0),191]]);
          let xadsdk5 = String.fromCharCode(110,101,116,119,111,114,107,105,110,103,95,120,95,53,56,0);
          let crossT = String.fromCharCode(113,117,111,116,101,100,95,57,95,56,0);
          let bang6: Array<any> = [967, 236, 944];
         suggestion_ = `${progressR.size}`;
         progressR = new Map([[crossT, xadsdk5.length]]);
         xadsdk5 += `${crossT.length ^ bang6.length}`;
         bang6.push(2);
         break;
      }
       let codegenl = 0.0;
       let unselectedK = String.fromCharCode(97,95,52,54,95,115,117,98,115,101,103,109,101,110,116,0);
       let ewardedp = String.fromCharCode(97,112,112,114,111,120,95,109,95,55,51,0);
      giftbuttonv = `${dplusm.length + rncoreE.length}`;
      storea += `${style_ + 1}`;
   while (!storea.endsWith(`${reducerS.size}`)) {
      storea = `${listJ.length}`;
      break;
   }
      skipB /= Math.max(3, 2);
   let sell8 = 5302765.0 <= activef;
   do {
      activef += 3 << (Math.min(2, Math.abs(style_)));
      if (sell8) {
         break;
      }
   } while (sell8 && (!Array.from(libsgcoreW.keys()).includes(`${activef}`)));
      disconnected7 = `${parseInt(`${activef}`)}`;
      storea = `${1 + disconnected7.length}`;
   let armvaR = storea == String.fromCharCode(55,106,97,116,0);
   do {
       let anytimep: Map<any, any> = new Map([[String.fromCharCode(120,95,50,53,95,100,101,102,105,110,101,100,0),String.fromCharCode(100,95,55,55,95,116,104,117,109,98,0)], [String.fromCharCode(105,95,57,55,95,109,111,109,101,110,116,0),String.fromCharCode(99,111,110,102,95,108,95,56,49,0)]]);
       let customT = String.fromCharCode(114,101,108,97,116,101,100,95,115,95,50,50,0);
      let xnewsshare2 = 8215412 >= anytimep.size;
      do {
         anytimep.set(`${customT}`, 1);
         if (xnewsshare2) {
            break;
         }
      } while (xnewsshare2 && (4 < (customT.length + 4) || 4 < (customT.length + anytimep.size)));
      for (let z = 0; z < 3; z++) {
         anytimep.set(customT, anytimep.size * 2);
      }
          let libavutilo = String.fromCharCode(110,95,53,56,95,114,101,106,101,99,116,0);
         anytimep.set(customT, customT.length + 1);
         libavutilo = `${2 + libavutilo.length}`;
       let v_lock9: Array<any> = [861, 48];
       let tooltipsD: Array<any> = [886, 27];
      if (customT.length <= 5) {
          let privatechatbgV = String.fromCharCode(118,95,57,55,95,114,111,98,117,115,116,0);
          let textU = 0.0;
          let project3: Map<any, any> = new Map([[String.fromCharCode(105,95,55,57,95,97,116,116,101,109,116,115,0),296], [String.fromCharCode(114,101,109,117,120,101,114,95,107,95,52,57,0),724]]);
          let sportsk = false;
         customT += `${parseInt(`${textU}`) + 2}`;
         privatechatbgV = `${((sportsk ? 4 : 2) >> (Math.min(Math.abs(project3.size), 4)))}`;
         textU += privatechatbgV.length >> (Math.min(Math.abs(1), 1));
         project3 = new Map([[`${project3.size}`, 1 - project3.size]]);
      }
      let matchactiveI = anytimep.size <= 8288265;
      do {
         anytimep.set(customT, customT.length);
         if (matchactiveI) {
            break;
         }
      } while ((4 > anytimep.size) && matchactiveI);
      storea = `${listJ.length}`;
      if (armvaR) {
         break;
      }
   } while (armvaR && (!storea.includes(`${activef}`)));
   let privilegex = defaultfootballbgH ? !defaultfootballbgH : defaultfootballbgH;
   do {
      defaultfootballbgH = (disconnected7.length >> (Math.min(3, listJ.length))) <= 62;
      if (privilegex) {
         break;
      }
   } while (privilegex && (!defaultfootballbgH));

      setCountdownSecond(
        (VIP_PROMOTION_COUNTDOWN_MINUTE * 60 * 1000 -
          (Date.now() - backgroundState.vipPromotionCountdownStart)) /
        1000
      );
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  
  useEffect(() => {
    ww_runtime.userCenterVipPayViewsAnalytics();
  }, []);
  

  const handleRefresh = async () => {
       let transfer7 = 3.0;
    let imagemanagerC = 0.0;
    let u_centerh = 3.0;
    let flagH = 3.0;
    let preview4: Array<any> = [729, 269];
    let logo7 = String.fromCharCode(108,95,54,50,95,102,114,97,109,101,114,97,116,101,0);
    let reward_ = String.fromCharCode(102,117,110,99,116,105,111,110,95,54,95,55,51,0);
    let iconmorec = String.fromCharCode(115,95,50,56,95,118,97,100,100,113,0);
    let iconplayr = 3.0;
      imagemanagerC += parseInt(`${transfer7}`);
      iconmorec += `${parseInt(`${transfer7}`)}`;
   while (parseInt(`${transfer7}`) >= iconmorec.length) {
      iconmorec = "1";
      break;
   }
   for (let c = 0; c < 2; c++) {
       let modals = String.fromCharCode(99,108,97,112,95,106,95,54,56,0);
       let entryI = String.fromCharCode(101,116,104,95,52,95,57,0);
      if (!entryI.includes(`${modals.length}`)) {
         entryI = `${modals.length >> (Math.min(entryI.length, 2))}`;
      }
      while (modals == String.fromCharCode(54,0) || 5 <= entryI.length) {
         modals += `${entryI.length << (Math.min(Math.abs(3), 5))}`;
         break;
      }
      while (!modals.endsWith(entryI)) {
         modals += `${modals.length % (Math.max(3, 2))}`;
         break;
      }
      for (let v = 0; v < 1; v++) {
         modals += `${(entryI == String.fromCharCode(117,0) ? entryI.length : modals.length)}`;
      }
      while (entryI.startsWith(`${modals.length}`)) {
         entryI = `${3 ^ modals.length}`;
         break;
      }
         modals = `${entryI.length}`;
      u_centerh -= parseFloat(`${3 ^ logo7.length}`);
   }
   let textinputv = reward_.length >= 7174828;
   do {
      reward_ = `${parseInt(`${flagH}`) / 3}`;
      if (textinputv) {
         break;
      }
   } while ((reward_.includes(`${transfer7}`)) && textinputv);
   if (5.12 >= (transfer7 - 4.46)) {
      transfer7 -= parseFloat(`${logo7.length / (Math.max(3, 1))}`);
   }
   let frame_2wr = u_centerh >= 6163632.0;
   do {
       let connectionZ: Map<any, any> = new Map([[String.fromCharCode(116,105,110,121,95,102,95,57,55,0),300], [String.fromCharCode(104,95,49,53,95,114,97,110,103,101,0),374]]);
       let inouttargetredV = String.fromCharCode(98,101,103,105,110,115,95,112,95,51,57,0);
       let shootyesgoalO = String.fromCharCode(121,95,51,56,95,112,111,115,116,114,101,113,117,101,115,116,0);
         inouttargetredV = `${shootyesgoalO.length - 3}`;
         inouttargetredV = `${inouttargetredV.length}`;
      let thailandT = shootyesgoalO == String.fromCharCode(110,57,99,50,100,98,100,0);
      do {
         shootyesgoalO = `${shootyesgoalO.length >> (Math.min(Math.abs(3), 2))}`;
         if (thailandT) {
            break;
         }
      } while (thailandT && (!inouttargetredV.includes(shootyesgoalO)));
          let filterx = true;
         connectionZ.set(`${shootyesgoalO}`, (String.fromCharCode(54,0) == shootyesgoalO ? shootyesgoalO.length : connectionZ.size));
         filterx = !filterx;
       let reminderB: Array<any> = [985, 798, 468];
         shootyesgoalO += `${reminderB.length * shootyesgoalO.length}`;
          let dataX = String.fromCharCode(116,95,49,48,95,97,117,116,104,101,110,116,105,99,97,116,101,100,0);
          let bottomb = String.fromCharCode(102,95,53,52,95,117,116,102,0);
         shootyesgoalO = `${connectionZ.size}`;
         dataX += `${dataX.length & 2}`;
         bottomb = `${bottomb.length}`;
          let libimagepipeline6 = 0.0;
          let kuaishouR: Map<any, any> = new Map([[String.fromCharCode(112,97,114,116,105,116,105,111,110,95,112,95,55,53,0),566], [String.fromCharCode(116,95,54,50,95,100,112,97,103,101,0),64], [String.fromCharCode(111,110,116,97,99,116,115,95,122,95,52,51,0),920]]);
          let entrye = 1;
         shootyesgoalO += "2";
         libimagepipeline6 /= Math.max(1 & entrye, 4);
         kuaishouR = new Map([[`${kuaishouR.size}`, entrye]]);
      for (let t = 0; t < 1; t++) {
         reminderB = [1 | shootyesgoalO.length];
      }
      u_centerh *= parseFloat(`${reward_.length << (Math.min(2, Math.abs(connectionZ.size)))}`);
      if (frame_2wr) {
         break;
      }
   } while (frame_2wr && (u_centerh == imagemanagerC));
      u_centerh -= parseFloat(`${parseInt(`${imagemanagerC}`)}`);

    setRefreshing(true);

   for (let j = 0; j < 3; j++) {
      logo7 += `${parseInt(`${imagemanagerC}`)}`;
   }
   if (5.21 == (parseFloat(`${iconmorec.length}`) + u_centerh)) {
      iconmorec += `${iconmorec.length}`;
   }
      logo7 += `${reward_.length & 3}`;
      preview4 = [reward_.length % (Math.max(1, 6))];
   while ((imagemanagerC * 1.82) < 1.37 || 3.9 < (1.82 * flagH)) {
       let gmailH = 1;
      let private_qxe = gmailH >= 7738700;
      do {
         gmailH += gmailH;
         if (private_qxe) {
            break;
         }
      } while (private_qxe && (2 <= (gmailH >> (Math.min(Math.abs(gmailH), 3)))));
      while (2 > (gmailH << (Math.min(Math.abs(2), 3))) || 2 > (gmailH << (Math.min(Math.abs(gmailH), 1)))) {
         gmailH *= gmailH;
         break;
      }
         gmailH /= Math.max(2, 5);
      imagemanagerC /= Math.max(2, parseInt(`${u_centerh}`));
      break;
   }
   for (let o = 0; o < 2; o++) {
      logo7 = `${2 + parseInt(`${u_centerh}`)}`;
   }
      iconmorec += `${preview4.length >> (Math.min(5, Math.abs(parseInt(`${imagemanagerC}`))))}`;
      u_centerh -= (parseFloat(`${logo7 == String.fromCharCode(52,0) ? logo7.length : preview4.length}`));
    await refreshUserState();

   if (1.88 >= (flagH - transfer7) || 4.10 >= (flagH - 1.88)) {
      transfer7 /= Math.max(4, parseFloat(`${2}`));
   }
       let annere: Map<any, any> = new Map([[String.fromCharCode(110,111,116,95,50,95,51,56,0),true ], [String.fromCharCode(97,99,116,117,97,108,105,122,101,95,112,95,54,56,0),true ], [String.fromCharCode(102,95,56,48,95,97,115,105,110,107,0),false ]]);
         annere.set(`${annere.size}`, annere.size);
      for (let o = 0; o < 3; o++) {
         annere = new Map([[`${annere.size}`, 1 * annere.size]]);
      }
         annere = new Map([[`${annere.size}`, annere.size + 2]]);
      iconplayr *= iconmorec.length >> (Math.min(logo7.length, 3));
   for (let r = 0; r < 1; r++) {
      u_centerh *= parseFloat(`${parseInt(`${iconplayr}`) + 1}`);
   }
      reward_ += `${(String.fromCharCode(57,0) == iconmorec ? iconmorec.length : parseInt(`${iconplayr}`))}`;
      iconplayr += parseInt(`${flagH}`) ^ parseInt(`${u_centerh}`);
      imagemanagerC /= Math.max(parseInt(`${iconplayr}`) + reward_.length, 2);
   for (let k = 0; k < 2; k++) {
       let episodesQ = String.fromCharCode(120,109,108,115,95,99,95,50,56,0);
       let homeL: Array<any> = [String.fromCharCode(101,118,105,99,116,105,111,110,95,108,95,57,49,0), String.fromCharCode(115,116,114,105,115,116,114,95,115,95,57,48,0), String.fromCharCode(114,101,115,105,100,101,110,99,101,95,119,95,56,57,0)];
       let libjsijniprofilerh: Array<any> = [String.fromCharCode(112,114,101,112,114,111,103,114,97,109,109,101,100,95,98,95,51,54,0), String.fromCharCode(98,97,99,107,115,105,100,101,95,120,95,56,51,0)];
       let minivod5 = 2.0;
       let reactL = String.fromCharCode(100,97,115,104,101,110,99,95,57,95,51,50,0);
         libjsijniprofilerh.push((reactL == String.fromCharCode(53,0) ? parseInt(`${minivod5}`) : reactL.length));
      for (let k = 0; k < 2; k++) {
          let logouserq = String.fromCharCode(97,95,54,56,0);
          let codegenI = 2;
         minivod5 /= Math.max(2, parseFloat(`${parseInt(`${minivod5}`)}`));
         logouserq += `${(logouserq == String.fromCharCode(71,0) ? logouserq.length : codegenI)}`;
         codegenI <<= Math.min(Math.abs(logouserq.length % (Math.max(3, 8))), 4);
      }
      let predictionarrowA = homeL.length >= 5609259;
      do {
         homeL = [parseInt(`${minivod5}`)];
         if (predictionarrowA) {
            break;
         }
      } while (predictionarrowA && (homeL.length > libjsijniprofilerh.length));
         minivod5 *= parseFloat(`${reactL.length & 2}`);
         reactL += `${episodesQ.length & libjsijniprofilerh.length}`;
       let routerA = String.fromCharCode(108,95,57,53,95,105,109,99,100,97,116,97,0);
      while (routerA.length < 2) {
         reactL = `${routerA.length}`;
         break;
      }
         reactL += `${routerA.length ^ 3}`;
       let related5: Map<any, any> = new Map([[String.fromCharCode(115,112,105,110,108,111,99,107,95,109,95,56,55,0),true ], [String.fromCharCode(112,114,111,100,95,48,95,51,51,0),true ]]);
          let scoreJ = String.fromCharCode(112,105,110,107,95,101,95,52,51,0);
          let gmailI = String.fromCharCode(100,105,97,99,114,105,116,105,99,95,115,95,50,0);
         reactL += `${2 * reactL.length}`;
         scoreJ += `${scoreJ.length}`;
         gmailI += `${scoreJ.length * gmailI.length}`;
      let custom1 = minivod5 <= 8881710.0;
      do {
         minivod5 /= Math.max(parseFloat(`${related5.size | parseInt(`${minivod5}`)}`), 4);
         if (custom1) {
            break;
         }
      } while (custom1 && (libjsijniprofilerh.includes(minivod5)));
         reactL = `${related5.size & 3}`;
         routerA = `${parseInt(`${minivod5}`)}`;
      let transferg = reactL == String.fromCharCode(107,114,56,101,95,118,101,114,52,0);
      do {
         reactL += `${reactL.length}`;
         if (transferg) {
            break;
         }
      } while ((episodesQ != String.fromCharCode(119,0)) && transferg);
         related5 = new Map([[`${related5.size}`, 1]]);
      preview4.push(1);
   }
   let serviceE = 8390926.0 <= transfer7;
   do {
      transfer7 *= parseFloat(`${2 & parseInt(`${imagemanagerC}`)}`);
      if (serviceE) {
         break;
      }
   } while ((2.100 < (u_centerh * 2.14) || 2.21 < (2.14 * u_centerh)) && serviceE);
    setRefreshing(false);
    scrollRef.current.scrollTo({ index: 0, animated: false });
  };

  const refreshUserState = async () => {
       let indexY = String.fromCharCode(111,102,102,101,114,95,117,95,52,51,0);
    let dialog9 = String.fromCharCode(97,99,115,107,105,112,95,53,95,49,48,48,0);
    let hookd = String.fromCharCode(108,111,99,97,108,95,51,95,55,49,0);
    let mbjscommonD = 5;
    let membership9 = String.fromCharCode(115,105,103,118,101,114,95,52,95,53,55,0);
    let topicy = 2;
    let configureA = String.fromCharCode(114,101,103,100,101,102,95,55,95,50,51,0);
    let appleZ = String.fromCharCode(98,112,114,105,110,116,95,112,95,53,54,0);
    let halfh = 2.0;
    let minit_wP: Map<any, any> = new Map([[String.fromCharCode(103,97,116,101,100,95,56,95,51,50,0),String.fromCharCode(113,95,53,51,95,99,104,111,105,99,101,0)], [String.fromCharCode(109,95,57,50,95,115,101,116,116,108,105,110,103,0),String.fromCharCode(105,110,99,108,117,115,105,111,110,95,116,95,56,56,0)], [String.fromCharCode(101,99,111,109,112,114,101,115,115,111,114,95,116,95,57,54,0),String.fromCharCode(104,95,49,49,95,97,112,115,0)]]);
    let fastD = String.fromCharCode(122,95,55,55,95,97,116,111,98,111,111,108,0);
    let projectu = String.fromCharCode(120,95,53,95,100,111,110,116,0);
    let productG = String.fromCharCode(97,95,55,53,95,108,97,103,97,114,105,116,104,114,97,99,0);
       let langI = String.fromCharCode(117,110,105,116,121,95,113,95,52,55,0);
          let iconpipexpand8 = String.fromCharCode(109,111,109,101,110,116,97,114,121,95,99,95,51,53,0);
          let dragclose1 = 0.0;
         langI = `${parseInt(`${dragclose1}`) / (Math.max(iconpipexpand8.length, 6))}`;
          let penaltygoale: Array<any> = [23, 122, 302];
          let vietnamj = String.fromCharCode(99,121,97,110,95,56,95,57,56,0);
         langI += `${penaltygoale.length}`;
         penaltygoale = [1 ^ vietnamj.length];
         vietnamj = "1";
      let securityV = langI.length >= 8419623;
      do {
         langI = `${langI.length >> (Math.min(5, langI.length))}`;
         if (securityV) {
            break;
         }
      } while ((5 <= langI.length && langI == String.fromCharCode(51,0)) && securityV);
      mbjscommonD /= Math.max(1, indexY.length);
      mbjscommonD >>= Math.min(5, Math.abs(2));
   for (let y = 0; y < 3; y++) {
       let editu = 1.0;
       let iconE = false;
       let iconbackwhiter = 0.0;
       let dplusn: Array<any> = [String.fromCharCode(119,95,52,51,95,97,109,98,105,101,110,116,0), String.fromCharCode(99,95,48,95,104,101,120,98,121,116,101,0), String.fromCharCode(99,104,97,114,97,99,116,101,100,95,103,95,52,53,0)];
       let defaultlogos = true;
         editu *= parseFloat(`${dplusn.length * 3}`);
       let foreground6 = String.fromCharCode(112,114,111,103,114,97,109,95,114,95,51,56,0);
      let mathj = 8918001 >= dplusn.length;
      do {
          let modeT = String.fromCharCode(122,95,51,53,95,118,105,101,119,0);
          let iconwechatX: Array<any> = [76, 165];
          let navigation1 = 0;
          let favoritel: Map<any, any> = new Map([[String.fromCharCode(116,101,110,115,105,111,110,95,104,95,54,0),String.fromCharCode(100,114,105,102,116,95,114,95,56,49,0)], [String.fromCharCode(121,95,48,95,108,97,112,112,101,100,0),String.fromCharCode(104,95,54,56,0)]]);
          let time_xG = 2.0;
         dplusn = [2];
         modeT += `${favoritel.size}`;
         iconwechatX = [1];
         navigation1 -= favoritel.size;
         time_xG *= favoritel.size;
         if (mathj) {
            break;
         }
      } while (mathj && (iconbackwhiter < 4.78));
         iconE = (editu - iconbackwhiter) < 16.59;
       let playercommon9 = String.fromCharCode(115,101,116,119,97,116,101,114,109,97,114,107,95,111,95,56,0);
       let circleA = String.fromCharCode(112,105,99,116,117,114,101,95,107,95,51,51,0);
         foreground6 = `${((iconE ? 4 : 3) * parseInt(`${editu}`))}`;
       let typesS = 4.0;
         circleA = "3";
         foreground6 = `${foreground6.length}`;
         iconE = iconE && !defaultlogos;
      while (defaultlogos && (5.92 - editu) < 5.63) {
          let starC = 5;
          let stylesH = 4.0;
         editu += parseFloat(`${parseInt(`${iconbackwhiter}`)}`);
         starC |= 3;
         stylesH -= parseFloat(`${1}`);
         break;
      }
      if (4 > (3 * playercommon9.length) && (parseInt(`${editu}`) / (Math.max(3, 4))) > 5) {
         playercommon9 += `${circleA.length % (Math.max(1, 2))}`;
      }
      let bufferD = iconE ? !iconE : iconE;
      do {
          let configf = String.fromCharCode(110,105,108,95,97,95,50,56,0);
          let gmailb: Map<any, any> = new Map([[String.fromCharCode(101,95,50,56,95,119,101,114,101,0),String.fromCharCode(100,105,115,116,114,105,98,117,116,101,100,95,101,95,49,48,0)], [String.fromCharCode(116,114,97,110,115,102,101,114,101,100,95,49,95,53,52,0),String.fromCharCode(115,117,112,101,114,98,108,111,99,107,115,95,99,95,52,54,0)]]);
          let tempnodatagifA = String.fromCharCode(102,95,54,51,95,99,97,112,105,116,97,108,115,0);
          let albumX = 3.0;
          let main_y3 = String.fromCharCode(116,111,111,116,105,112,95,117,95,50,49,0);
         iconE = editu < 80.16;
         configf += "2";
         gmailb.set(main_y3, 1);
         tempnodatagifA += `${configf.length | 2}`;
         albumX *= gmailb.size / 2;
         main_y3 = `${parseInt(`${albumX}`)}`;
         if (bufferD) {
            break;
         }
      } while ((iconE) && bufferD);
      let temperatureD = iconbackwhiter <= 9498934.0;
      do {
         iconbackwhiter *= parseFloat(`${foreground6.length}`);
         if (temperatureD) {
            break;
         }
      } while (((parseFloat(`${playercommon9.length}`) / (Math.max(3, iconbackwhiter))) > 2.12 || (iconbackwhiter / (Math.max(parseFloat(`${playercommon9.length}`), 4))) > 2.12) && temperatureD);
          let overlayO = String.fromCharCode(115,112,108,105,116,116,101,100,95,48,95,49,0);
         editu /= Math.max(1, parseFloat(`${parseInt(`${typesS}`) * overlayO.length}`));
      halfh += parseFloat(`${dplusn.length}`);
   }
      appleZ += `${topicy * 1}`;
       let greyarrowupd = String.fromCharCode(108,95,57,49,95,98,97,115,107,101,116,98,97,108,108,0);
       let emojiR = String.fromCharCode(100,95,53,52,95,97,99,99,101,112,116,115,0);
       let rightS = 2;
      let renewC = String.fromCharCode(113,48,113,57,106,0) == emojiR;
      do {
         emojiR += "1";
         if (renewC) {
            break;
         }
      } while ((!emojiR.endsWith(`${greyarrowupd.length}`)) && renewC);
      for (let t = 0; t < 3; t++) {
         greyarrowupd += `${emojiR.length - rightS}`;
      }
          let libffmpegkitR = String.fromCharCode(105,95,51,56,95,115,99,116,112,0);
         greyarrowupd += `${emojiR.length & 2}`;
         libffmpegkitR = `${(String.fromCharCode(83,0) == libffmpegkitR ? libffmpegkitR.length : libffmpegkitR.length)}`;
      for (let o = 0; o < 1; o++) {
          let optionsg: Map<any, any> = new Map([[String.fromCharCode(112,95,49,51,95,108,97,116,101,114,0),String.fromCharCode(106,95,56,57,95,101,105,103,104,116,0)], [String.fromCharCode(107,95,51,49,95,118,105,101,119,0),String.fromCharCode(114,101,99,111,110,105,110,116,101,114,95,100,95,52,0)]]);
          let holderF = String.fromCharCode(100,95,54,50,95,114,111,117,110,100,0);
          let sportG: Map<any, any> = new Map([[String.fromCharCode(108,97,112,108,97,99,101,95,102,95,49,52,0),true ], [String.fromCharCode(110,111,110,110,117,108,108,111,117,116,95,113,95,56,0),true ]]);
          let react5 = 0.0;
          let matchactiveo = String.fromCharCode(114,101,99,111,110,105,110,116,114,97,95,106,95,56,54,0);
         greyarrowupd += `${matchactiveo.length << (Math.min(1, Math.abs(parseInt(`${react5}`))))}`;
         optionsg.set(holderF, holderF.length - 1);
         sportG.set(`${holderF}`, (String.fromCharCode(72,0) == holderF ? holderF.length : optionsg.size));
         react5 *= (parseFloat(`${holderF == String.fromCharCode(69,0) ? holderF.length : optionsg.size}`));
         matchactiveo = `${(holderF == String.fromCharCode(115,0) ? holderF.length : optionsg.size)}`;
      }
          let agreement3 = String.fromCharCode(120,95,53,95,114,101,99,111,110,110,101,99,116,0);
          let libglogv: Array<any> = [String.fromCharCode(120,95,56,51,95,109,97,99,114,111,115,0), String.fromCharCode(114,95,49,48,48,95,108,111,103,111,115,0), String.fromCharCode(99,95,49,48,95,109,101,109,115,121,115,0)];
          let overi = 1;
         rightS &= greyarrowupd.length | overi;
         agreement3 = `${libglogv.length + 2}`;
         libglogv.push((String.fromCharCode(78,0) == agreement3 ? agreement3.length : libglogv.length));
         overi += libglogv.length * agreement3.length;
         emojiR += `${emojiR.length << (Math.min(greyarrowupd.length, 3))}`;
      for (let y = 0; y < 1; y++) {
          let blacki = String.fromCharCode(122,101,114,111,98,108,111,98,95,57,95,50,52,0);
          let gifgoalbgO: Array<any> = [668, 31, 662];
          let description_cr = String.fromCharCode(117,110,109,97,114,115,104,97,108,95,53,95,52,49,0);
          let alerts: Array<any> = [String.fromCharCode(115,95,51,48,95,105,110,116,114,111,0), String.fromCharCode(113,95,56,51,95,101,120,116,110,0)];
          let favoriteS = String.fromCharCode(118,95,53,49,95,104,97,115,104,0);
         emojiR += `${description_cr.length}`;
         blacki += `${(String.fromCharCode(85,0) == blacki ? blacki.length : gifgoalbgO.length)}`;
         gifgoalbgO = [2 % (Math.max(5, alerts.length))];
         description_cr += `${2 + favoriteS.length}`;
         alerts.push(favoriteS.length + alerts.length);
      }
         emojiR = `${greyarrowupd.length}`;
      while (greyarrowupd.length >= 2 || emojiR == String.fromCharCode(108,0)) {
         emojiR = `${(String.fromCharCode(55,0) == greyarrowupd ? greyarrowupd.length : emojiR.length)}`;
         break;
      }
      membership9 += `${1 / (Math.max(2, indexY.length))}`;

    const result = await wwIconscheduleColors.getUserDetails();

      halfh -= parseFloat(`${3 | parseInt(`${halfh}`)}`);
      membership9 = `${indexY.length >> (Math.min(appleZ.length, 4))}`;
   let whatsappf = String.fromCharCode(107,52,120,119,113,99,97,105,122,0) == membership9;
   do {
      membership9 += `${mbjscommonD}`;
      if (whatsappf) {
         break;
      }
   } while (whatsappf && (dialog9 != String.fromCharCode(90,0)));
   let areal = dialog9 == String.fromCharCode(56,114,98,98,116,103,104,120,0);
   do {
      dialog9 += `${parseInt(`${halfh}`) ^ 1}`;
      if (areal) {
         break;
      }
   } while ((5 >= dialog9.length) && areal);
       let attributedstringK: Map<any, any> = new Map([[String.fromCharCode(100,95,49,48,48,95,106,99,111,110,102,105,103,0),978], [String.fromCharCode(109,99,108,109,115,95,52,95,52,48,0),911]]);
       let infoS = 0.0;
       let nextX = 0.0;
         infoS -= parseFloat(`${parseInt(`${nextX}`) + 2}`);
          let footballfieldB: Array<any> = [361, 454, 355];
          let subbasketballplayerE: Array<any> = [592, 783];
         nextX *= parseFloat(`${parseInt(`${nextX}`) << (Math.min(footballfieldB.length, 1))}`);
         footballfieldB.push(subbasketballplayerE.length);
         subbasketballplayerE.push(1 - subbasketballplayerE.length);
      mbjscommonD *= 3 ^ parseInt(`${halfh}`);
      attributedstringK = new Map([[`${attributedstringK.size}`, 3]]);
    if (result == null) {

   let telegramZ = 5523770 >= membership9.length;
   do {
      membership9 = "3";
      if (telegramZ) {
         break;
      }
   } while (telegramZ && (4 >= (mbjscommonD >> (Math.min(membership9.length, 5)))));
      configureA = "1";
       let lang0 = String.fromCharCode(100,101,113,117,101,117,101,95,114,95,52,0);
       let feedbackw = 0.0;
      if ((lang0.length | 2) == 1 && (2.41 - feedbackw) == 2.40) {
         feedbackw *= parseInt(`${feedbackw}`);
      }
      for (let e = 0; e < 3; e++) {
         lang0 = `${parseInt(`${feedbackw}`)}`;
      }
      while (feedbackw > 4.38) {
          let chatW: Array<any> = [String.fromCharCode(98,108,111,99,107,115,99,97,110,95,53,95,49,54,0), String.fromCharCode(111,98,116,97,105,110,101,114,95,106,95,50,51,0), String.fromCharCode(97,115,100,107,95,121,95,56,48,0)];
          let mapbufferS = true;
          let viewerR = 2.0;
          let footballb = String.fromCharCode(101,120,99,108,117,100,101,100,95,120,95,52,0);
         feedbackw /= Math.max(3, ((mapbufferS ? 5 : 3) * chatW.length));
         chatW = [3 * parseInt(`${viewerR}`)];
         mapbufferS = footballb.length == 40;
         viewerR /= Math.max(4, parseFloat(`${parseInt(`${viewerR}`) / 2}`));
         footballb += `${1 >> (Math.min(2, Math.abs(parseInt(`${viewerR}`))))}`;
         break;
      }
      let iconsaveimagez = 8562136 >= lang0.length;
      do {
         lang0 = `${1 % (Math.max(7, parseInt(`${feedbackw}`)))}`;
         if (iconsaveimagez) {
            break;
         }
      } while (iconsaveimagez && ((feedbackw + 5.49) == 1.84));
      while (feedbackw < 3.38) {
         lang0 = `${3 | parseInt(`${feedbackw}`)}`;
         break;
      }
         lang0 += "2";
      configureA += "3";
   while (5 == (mbjscommonD + membership9.length) || (5 + mbjscommonD) == 1) {
      membership9 += `${minit_wP.size & 1}`;
      break;
   }
   while (membership9.length < appleZ.length) {
      appleZ += `${parseInt(`${halfh}`) | 3}`;
      break;
   }
      return;
    }

    await dispatch(updateUserAuth(result));

   while ((mbjscommonD / 5) == 5 && (indexY.length / (Math.max(9, mbjscommonD))) == 5) {
      indexY = `${1 ^ mbjscommonD}`;
      break;
   }
   while ((2 & minit_wP.size) == 5 && (2 ^ minit_wP.size) == 3) {
       let arrowupy = 3;
       let final__N = 2.0;
       let data6 = 5.0;
      for (let z = 0; z < 2; z++) {
          let iconbellactive1 = String.fromCharCode(117,95,54,51,95,116,105,109,101,103,109,0);
          let kicks = 4;
         final__N -= iconbellactive1.length ^ parseInt(`${data6}`);
         iconbellactive1 += `${3 * kicks}`;
         kicks <<= Math.min(Math.abs(kicks), 4);
      }
      let upgradei = arrowupy >= 5738873;
      do {
         arrowupy ^= parseInt(`${final__N}`);
         if (upgradei) {
            break;
         }
      } while (upgradei && ((1 - arrowupy) > 2));
      halfh += parseFloat(`${configureA.length}`);
      break;
   }
      topicy *= dialog9.length;
   for (let u = 0; u < 1; u++) {
       let championP = true;
       let gestureo: Array<any> = [892, 786, 203];
       let downloadingZ = String.fromCharCode(120,95,56,51,95,118,101,114,116,115,0);
      while (gestureo.length >= 2) {
         championP = 97 <= downloadingZ.length;
         break;
      }
      for (let z = 0; z < 1; z++) {
         downloadingZ = `${gestureo.length % (Math.max(1, 4))}`;
      }
      let halfT = gestureo.length <= 5877597;
      do {
         gestureo.push(gestureo.length);
         if (halfT) {
            break;
         }
      } while (halfT && (!championP));
         gestureo = [1 - downloadingZ.length];
      if (1 >= gestureo.length) {
         gestureo = [(1 * (championP ? 3 : 3))];
      }
       let pnewsshareN = true;
      let black1 = pnewsshareN ? !pnewsshareN : pnewsshareN;
      do {
         pnewsshareN = downloadingZ == String.fromCharCode(107,0);
         if (black1) {
            break;
         }
      } while ((pnewsshareN) && black1);
         gestureo.push((gestureo.length & (pnewsshareN ? 4 : 1)));
         pnewsshareN = gestureo.includes(pnewsshareN);
      membership9 = `${indexY.length ^ 1}`;
   }
   while (appleZ == String.fromCharCode(107,0)) {
       let cornerc: Map<any, any> = new Map([[String.fromCharCode(106,95,55,49,95,105,112,118,0),String.fromCharCode(106,95,56,56,95,97,99,101,110,99,0)], [String.fromCharCode(120,95,55,49,95,102,105,101,108,100,115,0),String.fromCharCode(122,95,56,54,95,97,108,108,111,99,97,116,101,0)], [String.fromCharCode(105,110,116,116,121,112,101,115,95,100,95,55,0),String.fromCharCode(111,95,55,0)]]);
       let analyticg = 2.0;
       let libmapbufferjniY: Map<any, any> = new Map([[String.fromCharCode(115,112,101,114,97,116,111,114,95,114,95,52,54,0),181], [String.fromCharCode(108,122,111,120,95,110,95,49,57,0),667]]);
       let subbasketballplayerV = String.fromCharCode(114,101,102,99,111,117,110,116,101,100,111,98,106,101,99,116,95,110,95,56,50,0);
       let network6 = String.fromCharCode(109,112,101,103,118,105,100,101,111,95,55,95,49,56,0);
         analyticg += 2 & parseInt(`${analyticg}`);
      while (2 < subbasketballplayerV.length) {
         subbasketballplayerV = `${parseInt(`${analyticg}`)}`;
         break;
      }
         analyticg += parseInt(`${analyticg}`);
      let statsg = cornerc.size <= 9355441;
      do {
         cornerc = new Map([[`${cornerc.size}`, cornerc.size]]);
         if (statsg) {
            break;
         }
      } while (statsg && (subbasketballplayerV.endsWith(`${cornerc.size}`)));
      while ((network6.length / (Math.max(7, parseInt(`${analyticg}`)))) >= 1) {
          let libglog9: Map<any, any> = new Map([[String.fromCharCode(110,95,49,51,95,102,111,114,99,105,110,103,0),683], [String.fromCharCode(112,95,50,51,95,109,97,116,99,104,101,0),668]]);
          let untickV = 0;
          let connectiong = 2.0;
          let videojsD = false;
         analyticg -= (1 - (videojsD ? 2 : 5));
         libglog9.set(`${untickV}`, 1 ^ untickV);
         connectiong -= parseFloat(`${2}`);
         videojsD = 36 == libglog9.size;
         break;
      }
      if (1.68 == (analyticg - 5.58)) {
         analyticg -= cornerc.size;
      }
      if (subbasketballplayerV.includes(`${network6.length}`)) {
         network6 += `${cornerc.size}`;
      }
      for (let r = 0; r < 3; r++) {
          let renewf = String.fromCharCode(117,112,115,104,105,102,116,101,100,95,57,95,53,55,0);
          let actioni = String.fromCharCode(120,95,54,51,95,115,97,110,115,0);
          let acceptedk = String.fromCharCode(102,114,101,101,109,95,55,95,52,50,0);
          let libfabricjnim: Array<any> = [783, 235];
         network6 = "2";
         renewf = `${acceptedk.length}`;
         actioni = `${acceptedk.length}`;
         libfabricjnim.push(actioni.length);
      }
      dialog9 += `${mbjscommonD & cornerc.size}`;
      break;
   }
    return;
  };

  const checkConnection = async () => {
       let floatingi = true;
    let targetm = 4.0;
    let kuaishoul = 1.0;
    let pointX = String.fromCharCode(101,120,99,101,101,100,95,48,95,49,48,0);
    let floaterD = false;
    let forwardT: Array<any> = [980, 628];
    let phoneQ = String.fromCharCode(118,111,112,101,110,95,104,95,50,49,0);
    let langkeye = 1.0;
    let confirmationv: Map<any, any> = new Map([[String.fromCharCode(107,95,51,54,95,112,105,99,107,109,111,100,101,0),644], [String.fromCharCode(108,105,109,105,116,95,103,95,54,56,0),872]]);
    let profilew = 5.0;
    let refreshU = true;
    let kuaishoui = String.fromCharCode(113,95,53,57,95,103,97,116,101,0);
    let with_xp = 2.0;
   for (let h = 0; h < 3; h++) {
      pointX = `${((floaterD ? 3 : 3) / (Math.max(parseInt(`${langkeye}`), 1)))}`;
   }
      forwardT.push((3 | (floaterD ? 1 : 2)));
   if (parseFloat(`${forwardT.length}`) < targetm) {
      targetm /= Math.max(parseFloat(`${parseInt(`${targetm}`) * parseInt(`${langkeye}`)}`), 1);
   }
      confirmationv = new Map([[`${kuaishoul}`, 2]]);
       let targetA = 2.0;
          let confirmationvW = String.fromCharCode(116,121,112,105,110,103,95,54,95,55,0);
          let leakchecker_ = 4.0;
          let telemetryQ = String.fromCharCode(98,97,115,101,105,115,107,101,121,95,115,95,56,50,0);
         targetA *= parseInt(`${targetA}`);
         confirmationvW += `${(String.fromCharCode(76,0) == confirmationvW ? confirmationvW.length : telemetryQ.length)}`;
         leakchecker_ -= parseInt(`${leakchecker_}`) * confirmationvW.length;
         telemetryQ += `${(String.fromCharCode(106,0) == telemetryQ ? telemetryQ.length : parseInt(`${leakchecker_}`))}`;
         targetA *= parseInt(`${targetA}`) - parseInt(`${targetA}`);
         targetA -= 2;
      pointX = "1";
      floaterD = 20.32 >= targetm;

    const state = await NetInfo.fetch();

      targetm += parseFloat(`${2 & parseInt(`${langkeye}`)}`);
      forwardT = [(parseInt(`${kuaishoul}`) << (Math.min(2, Math.abs((floaterD ? 1 : 1)))))];
      floaterD = phoneQ.length > 22 && refreshU;
       let video2 = false;
       let condensedz = 5.0;
       let yellowredcardY = String.fromCharCode(101,95,55,55,95,115,113,108,105,116,101,99,104,97,110,103,101,103,114,111,117,112,0);
      for (let f = 0; f < 1; f++) {
          let j_countt: Map<any, any> = new Map([[String.fromCharCode(101,110,117,109,115,95,116,95,52,52,0),395], [String.fromCharCode(99,111,110,102,105,103,117,114,97,116,105,111,110,115,95,104,95,49,54,0),996], [String.fromCharCode(114,101,102,105,110,105,110,103,95,50,95,49,49,0),702]]);
          let collectiond = String.fromCharCode(105,111,101,114,114,95,103,95,51,0);
          let emptyd = String.fromCharCode(116,95,51,50,95,110,116,101,114,102,97,99,101,0);
          let analytic1 = String.fromCharCode(118,95,49,50,95,97,110,97,108,121,115,105,115,0);
          let textlayoutmanagerH = 1.0;
         condensedz -= (parseFloat(`${(video2 ? 2 : 4)}`));
         j_countt.set(emptyd, emptyd.length << (Math.min(Math.abs(3), 3)));
         collectiond += `${j_countt.size / (Math.max(analytic1.length, 2))}`;
         analytic1 = `${collectiond.length >> (Math.min(3, Math.abs(j_countt.size)))}`;
         textlayoutmanagerH += 1 ^ j_countt.size;
      }
         video2 = yellowredcardY.length <= 85;
         video2 = (parseInt(`${condensedz}`) / (Math.max(yellowredcardY.length, 6))) < 56;
      let attributedstring8 = condensedz <= 5288778.0;
      do {
         condensedz += parseFloat(`${yellowredcardY.length >> (Math.min(5, Math.abs(parseInt(`${condensedz}`))))}`);
         if (attributedstring8) {
            break;
         }
      } while (attributedstring8 && (video2));
          let floating2 = String.fromCharCode(110,95,57,52,95,97,100,97,112,116,115,0);
          let referrero = String.fromCharCode(109,112,106,112,101,103,95,112,95,52,52,0);
         condensedz /= Math.max((parseFloat(`${(video2 ? 3 : 4)}`)), 2);
         floating2 += `${(String.fromCharCode(86,0) == referrero ? referrero.length : floating2.length)}`;
       let yellowanimationliveD = 4.0;
      if (yellowanimationliveD > parseFloat(`${yellowredcardY.length}`)) {
          let closeX = true;
          let mappingc: Map<any, any> = new Map([[String.fromCharCode(101,97,115,105,110,103,95,98,95,52,49,0),String.fromCharCode(115,121,110,111,110,121,109,115,95,107,95,50,51,0)], [String.fromCharCode(115,101,114,118,101,114,115,95,99,95,55,48,0),String.fromCharCode(116,104,101,114,101,95,114,95,52,57,0)]]);
          let entryl = String.fromCharCode(107,95,52,55,95,118,105,100,101,111,0);
          let pathu: Array<any> = [305, 922];
          let styleM: Array<any> = [String.fromCharCode(119,95,54,48,95,97,100,118,97,110,99,105,110,103,0), String.fromCharCode(114,118,100,97,116,97,95,113,95,49,0), String.fromCharCode(99,111,112,121,99,111,111,107,101,114,95,99,95,55,54,0)];
         yellowanimationliveD -= parseFloat(`${2}`);
         closeX = (41 < ((closeX ? entryl.length : 41) % (Math.max(9, entryl.length))));
         mappingc.set(`${closeX}`, 3 ^ mappingc.size);
         pathu = [pathu.length << (Math.min(3, Math.abs(mappingc.size)))];
         styleM = [pathu.length];
      }
       let libimagepipeline8 = String.fromCharCode(104,95,53,51,95,105,108,108,105,113,97,0);
          let libcrashsdkU = 4.0;
          let largebrightnessa = 0.0;
         libimagepipeline8 += "1";
         libcrashsdkU *= parseFloat(`${3}`);
         largebrightnessa /= Math.max(2, 2);
      pointX = `${(parseInt(`${kuaishoul}`) + (refreshU ? 5 : 4))}`;
   if (4.30 > (langkeye / (Math.max(profilew, 9)))) {
       let libreactZ = String.fromCharCode(100,101,99,111,100,101,95,112,95,50,48,0);
       let mbnativeM = 4.0;
       let pangle4 = String.fromCharCode(111,114,105,103,110,97,108,95,108,95,54,56,0);
         mbnativeM -= parseFloat(`${libreactZ.length}`);
          let downloadb = false;
         pangle4 = `${1 ^ parseInt(`${mbnativeM}`)}`;
         downloadb = !downloadb;
          let libcxxcomponentsA = 2;
         mbnativeM -= parseFloat(`${libcxxcomponentsA}`);
      let emojie = String.fromCharCode(102,98,102,103,98,119,97,103,0) == libreactZ;
      do {
         libreactZ = `${pangle4.length}`;
         if (emojie) {
            break;
         }
      } while ((libreactZ.includes(`${mbnativeM}`)) && emojie);
      for (let m = 0; m < 1; m++) {
         mbnativeM /= Math.max((parseFloat(`${libreactZ == String.fromCharCode(112,0) ? parseInt(`${mbnativeM}`) : libreactZ.length}`)), 5);
      }
      if (!pangle4.startsWith(`${mbnativeM}`)) {
         pangle4 = "2";
      }
         libreactZ += `${pangle4.length * parseInt(`${mbnativeM}`)}`;
          let texth = 0.0;
          let qaagW = false;
          let questiconc = 4;
         mbnativeM += (parseFloat(`${(qaagW ? 2 : 1) / (Math.max(questiconc, 6))}`));
         texth /= Math.max(1 / (Math.max(parseInt(`${texth}`), 8)), 2);
         qaagW = 24.72 > texth;
       let downloadedW = String.fromCharCode(116,95,56,52,95,97,109,102,101,110,99,0);
       let adultC = String.fromCharCode(99,97,99,104,101,95,98,95,50,0);
      profilew /= Math.max(pointX.length, 5);
   }
   let klevini = 7427395 >= forwardT.length;
   do {
      forwardT = [(kuaishoui == String.fromCharCode(49,0) ? kuaishoui.length : pointX.length)];
      if (klevini) {
         break;
      }
   } while (klevini && (!Array.from(confirmationv.keys()).includes(`${forwardT.length}`)));
    const offline = !(state.isConnected && state.isInternetReachable);

   if (confirmationv.size > 1 || (confirmationv.size ^ 1) > 5) {
       let chinam = true;
       let libimagepipelineu = String.fromCharCode(106,95,54,48,95,115,116,101,114,101,111,0);
       let video1 = 3;
       let greenI = true;
      for (let s = 0; s < 3; s++) {
         libimagepipelineu = `${libimagepipelineu.length}`;
      }
      if (libimagepipelineu.length <= 3 || greenI) {
         greenI = libimagepipelineu.startsWith(`${video1}`);
      }
      for (let w = 0; w < 1; w++) {
         libimagepipelineu = `${((chinam ? 4 : 5) << (Math.min(Math.abs(3), 4)))}`;
      }
      let mathh = 8295982 >= libimagepipelineu.length;
      do {
          let mbridge2: Map<any, any> = new Map([[String.fromCharCode(98,95,50,53,95,97,121,98,114,105,0),993], [String.fromCharCode(109,97,105,110,112,97,103,101,95,110,95,56,56,0),477]]);
          let profileinactiven = String.fromCharCode(112,95,56,50,95,112,104,105,0);
         libimagepipelineu += `${(profileinactiven == String.fromCharCode(48,0) ? profileinactiven.length : video1)}`;
         mbridge2 = new Map([[`${mbridge2.size}`, 3 >> (Math.min(1, Math.abs(mbridge2.size)))]]);
         if (mathh) {
            break;
         }
      } while ((libimagepipelineu.length > 5) && mathh);
      while (libimagepipelineu.startsWith(`${video1}`)) {
         video1 /= Math.max(3, 1);
         break;
      }
         chinam = !greenI;
       let whiteanimationliveI = String.fromCharCode(106,95,54,48,95,100,105,109,109,105,110,103,0);
         chinam = video1 == 39 || chinam;
       let listX = false;
       let redirectq = true;
         redirectq = 99 == video1;
      if (whiteanimationliveI.length < 3 || !chinam) {
         whiteanimationliveI = `${((redirectq ? 4 : 4))}`;
      }
      for (let e = 0; e < 2; e++) {
         chinam = ((whiteanimationliveI.length - (greenI ? 76 : whiteanimationliveI.length)) >= 76);
      }
      refreshU = libimagepipelineu.length == 94;
   }
      floaterD = 44.77 < targetm || !refreshU;
      confirmationv = new Map([[kuaishoui, 2 - kuaishoui.length]]);
   if ((kuaishoul * 1) > 5.31) {
      targetm += parseFloat(`${1}`);
   }
   while (2.33 < (langkeye - 1.12) && 1.12 < langkeye) {
      floaterD = (((refreshU ? forwardT.length : 17) / (Math.max(8, forwardT.length))) <= 17);
      break;
   }
      kuaishoui += `${1 / (Math.max(parseInt(`${langkeye}`), 2))}`;
    setIsOffline(offline);

   while (!floatingi && (3.29 + profilew) > 3.28) {
       let hongkongA = String.fromCharCode(114,95,53,48,95,99,97,108,108,108,0);
       let dacccfaabfbcbadeebddcabacdffdbm = false;
         hongkongA += `${(2 & (dacccfaabfbcbadeebddcabacdffdbm ? 2 : 3))}`;
          let layouto = false;
          let videojsM: Map<any, any> = new Map([[String.fromCharCode(109,97,112,112,97,98,108,101,95,56,95,52,51,0),700], [String.fromCharCode(98,95,49,48,48,95,102,105,116,116,105,110,103,0),309], [String.fromCharCode(101,95,50,57,95,114,101,103,100,101,102,0),406]]);
          let appsp = String.fromCharCode(107,97,116,95,118,95,49,52,0);
         hongkongA += `${((dacccfaabfbcbadeebddcabacdffdbm ? 3 : 5) / (Math.max(5, appsp.length)))}`;
         layouto = (((!layouto ? 33 : videojsM.size) / (Math.max(videojsM.size, 3))) < 33);
         appsp = `${((layouto ? 4 : 4) >> (Math.min(Math.abs(2), 3)))}`;
         hongkongA += `${((dacccfaabfbcbadeebddcabacdffdbm ? 3 : 2))}`;
      let privacyd = hongkongA.length >= 6782909;
      do {
         hongkongA += `${((dacccfaabfbcbadeebddcabacdffdbm ? 3 : 4))}`;
         if (privacyd) {
            break;
         }
      } while (privacyd && (hongkongA.startsWith(`${dacccfaabfbcbadeebddcabacdffdbm}`)));
          let twittero = 3;
          let brightnessT: Array<any> = [617, 41];
          let bufferV = 5.0;
         dacccfaabfbcbadeebddcabacdffdbm = brightnessT.length < 36;
         twittero %= Math.max(2, 1 - parseInt(`${bufferV}`));
         brightnessT.push(twittero);
         bufferV -= parseFloat(`${parseInt(`${bufferV}`) / 3}`);
         hongkongA = `${((dacccfaabfbcbadeebddcabacdffdbm ? 4 : 2))}`;
      floatingi = confirmationv.get(`${floatingi}`) != null;
      break;
   }
   while (2 >= (4 & forwardT.length) && 2 >= (4 & forwardT.length)) {
      kuaishoui = `${1 + parseInt(`${kuaishoul}`)}`;
      break;
   }
      refreshU = targetm < 68.2;
   let vipsport1 = 7347417.0 <= langkeye;
   do {
      langkeye -= parseFloat(`${1}`);
      if (vipsport1) {
         break;
      }
   } while (vipsport1 && (!phoneQ.startsWith(`${langkeye}`)));
   let resendb = profilew >= 7126652.0;
   do {
       let sidek = 4.0;
         sidek /= Math.max(parseInt(`${sidek}`) + parseInt(`${sidek}`), 4);
      if ((2.50 - sidek) < 1.68) {
          let const_1p1 = 1.0;
          let linku: Map<any, any> = new Map([[String.fromCharCode(114,95,53,52,95,99,111,108,111,110,115,0),290], [String.fromCharCode(117,110,113,117,97,110,116,95,57,95,55,50,0),928], [String.fromCharCode(101,95,51,56,95,99,111,110,115,105,115,116,101,110,99,121,0),502]]);
          let philippines5 = 0.0;
          let clubD: Map<any, any> = new Map([[String.fromCharCode(108,95,48,95,119,97,108,115,104,120,0),295], [String.fromCharCode(110,95,50,56,95,109,117,116,101,0),827]]);
         sidek += 2;
         const_1p1 += clubD.size;
         linku.set(`${linku.size}`, linku.size * clubD.size);
         philippines5 *= 3;
      }
          let componentsq = true;
          let saveP = String.fromCharCode(105,109,112,111,114,116,97,98,108,101,95,50,95,56,52,0);
         sidek *= saveP.length % 2;
      profilew -= (parseInt(`${profilew}`) / (Math.max(10, (floatingi ? 2 : 4))));
      if (resendb) {
         break;
      }
   } while (((forwardT.length - profilew) == 3.50) && resendb);
   for (let b = 0; b < 3; b++) {
      kuaishoui = "1";
   }
    if (!offline) {

       let tooltipsp = 5;
       let placementX: Array<any> = [787, 925];
      if (placementX.length < tooltipsp) {
         tooltipsp /= Math.max(tooltipsp + 3, 2);
      }
          let manifestA = String.fromCharCode(113,95,55,55,95,100,105,118,105,100,101,0);
          let moviesn = false;
         placementX.push(manifestA.length & 1);
      if (1 <= (tooltipsp / (Math.max(5, placementX.length))) && 1 <= (1 / (Math.max(4, tooltipsp)))) {
         tooltipsp ^= placementX.length;
      }
         placementX = [placementX.length << (Math.min(1, Math.abs(tooltipsp)))];
         placementX.push(2 - placementX.length);
         tooltipsp <<= Math.min(2, Math.abs(placementX.length * tooltipsp));
      confirmationv.set(`${kuaishoul}`, 3 & placementX.length);
   for (let u = 0; u < 2; u++) {
       let scheduleg = 3;
       let taiwanT = String.fromCharCode(101,120,97,109,112,108,101,95,109,95,49,50,0);
       let iconrefreshu = 4.0;
      while (1 >= (2 - taiwanT.length) || (parseInt(`${iconrefreshu}`) + taiwanT.length) >= 2) {
          let bingn: Array<any> = [714, 236];
          let agreemente = String.fromCharCode(113,95,51,52,95,105,110,115,105,100,101,0);
          let activity8 = String.fromCharCode(97,95,49,52,95,113,116,97,98,108,101,115,0);
         taiwanT = `${agreemente.length & parseInt(`${iconrefreshu}`)}`;
         bingn = [bingn.length >> (Math.min(activity8.length, 1))];
         agreemente = `${bingn.length}`;
         activity8 += `${activity8.length}`;
         break;
      }
      let shielddoneN = taiwanT.length <= 9014364;
      do {
         taiwanT += `${(String.fromCharCode(84,0) == taiwanT ? taiwanT.length : parseInt(`${iconrefreshu}`))}`;
         if (shielddoneN) {
            break;
         }
      } while (((taiwanT.length * parseInt(`${iconrefreshu}`)) >= 4 && (parseInt(`${iconrefreshu}`) * 4) >= 5) && shielddoneN);
         scheduleg /= Math.max(5, taiwanT.length - scheduleg);
      let colorsC = taiwanT.length >= 5094738;
      do {
          let libzeusM: Array<any> = [658, 643, 43];
          let navigationV = String.fromCharCode(112,108,97,105,110,95,114,95,54,51,0);
         taiwanT = "3";
         libzeusM = [libzeusM.length - navigationV.length];
         navigationV = `${libzeusM.length}`;
         if (colorsC) {
            break;
         }
      } while (colorsC && (taiwanT.endsWith(`${iconrefreshu}`)));
         scheduleg ^= 3 * scheduleg;
          let invitev = String.fromCharCode(121,95,53,57,95,99,114,101,97,116,105,118,101,0);
         iconrefreshu *= parseFloat(`${3 / (Math.max(4, scheduleg))}`);
         invitev = `${invitev.length}`;
          let stylesS = String.fromCharCode(110,95,49,57,95,99,111,99,111,115,100,120,0);
          let transfert = false;
         taiwanT += `${scheduleg}`;
         stylesS += `${(stylesS == String.fromCharCode(121,0) ? (transfert ? 5 : 3) : stylesS.length)}`;
         transfert = stylesS.length == 72 || transfert;
      while ((scheduleg - 1) <= 2 && (taiwanT.length - 1) <= 1) {
         taiwanT += `${scheduleg}`;
         break;
      }
         scheduleg ^= (taiwanT == String.fromCharCode(114,0) ? parseInt(`${iconrefreshu}`) : taiwanT.length);
      confirmationv.set(`${iconrefreshu}`, parseInt(`${profilew}`) << (Math.min(Math.abs(parseInt(`${iconrefreshu}`)), 5)));
   }
       let roundf: Array<any> = [466, 713, 935];
       let models8 = String.fromCharCode(109,105,110,117,116,101,115,95,110,95,55,54,0);
         models8 += `${models8.length}`;
      if ((models8.length ^ roundf.length) > 5 && (5 ^ roundf.length) > 4) {
         roundf = [models8.length];
      }
         roundf = [2 >> (Math.min(5, models8.length))];
       let streamingc = String.fromCharCode(112,95,57,54,95,114,101,99,105,112,105,101,110,116,115,0);
          let save5 = 1.0;
         streamingc += `${1 - models8.length}`;
         save5 /= Math.max(1, parseFloat(`${parseInt(`${save5}`) / (Math.max(1, parseInt(`${save5}`)))}`));
          let qaag5: Array<any> = [463, 179];
          let type_o_I = 0;
         streamingc += `${(streamingc == String.fromCharCode(57,0) ? streamingc.length : qaag5.length)}`;
         qaag5.push(type_o_I);
      profilew *= ((refreshU ? 2 : 3));
   let mbbido = floaterD ? !floaterD : floaterD;
   do {
      floaterD = !floaterD;
      if (mbbido) {
         break;
      }
   } while (mbbido && (floaterD || (4 * forwardT.length) <= 1));
   for (let y = 0; y < 3; y++) {
      phoneQ += `${1 * parseInt(`${targetm}`)}`;
   }
       let gift5: Map<any, any> = new Map([[String.fromCharCode(99,95,49,50,95,109,97,112,115,116,114,105,110,103,0),true ], [String.fromCharCode(100,95,56,53,95,119,101,108,99,111,109,101,0),true ]]);
       let sentryG = String.fromCharCode(117,95,50,53,95,104,117,101,0);
       let bannerC: Map<any, any> = new Map([[String.fromCharCode(109,95,55,95,115,108,105,100,101,114,0),String.fromCharCode(105,95,56,57,95,97,117,100,105,116,105,110,103,0)], [String.fromCharCode(117,95,51,53,95,103,114,111,117,112,115,0),String.fromCharCode(102,95,50,53,95,112,114,101,118,105,101,119,112,112,0)], [String.fromCharCode(97,95,49,52,95,115,116,97,109,112,0),String.fromCharCode(116,111,107,101,110,100,95,118,95,56,50,0)]]);
       let rankM = 2.0;
       let libavdeviceX = 5.0;
      for (let n = 0; n < 2; n++) {
         rankM *= parseFloat(`${parseInt(`${rankM}`)}`);
      }
         bannerC = new Map([[`${gift5.size}`, gift5.size]]);
         gift5.set(`${libavdeviceX}`, 3);
          let historyR = String.fromCharCode(100,105,109,109,105,110,103,95,53,95,49,0);
         libavdeviceX -= parseFloat(`${1}`);
         historyR += `${3 ^ historyR.length}`;
         bannerC.set(`${bannerC.size}`, gift5.size << (Math.min(Math.abs(3), 5)));
      if (!sentryG.startsWith(`${gift5.size}`)) {
          let delegate_6N = String.fromCharCode(98,103,112,104,99,104,101,99,107,95,107,95,52,50,0);
          let eventsplashX = String.fromCharCode(112,95,51,55,95,115,117,112,112,108,101,109,101,110,116,97,114,121,0);
          let signinupL = String.fromCharCode(113,95,56,56,95,115,101,99,117,114,101,100,0);
          let toponJ = 3.0;
          let whitetickP = String.fromCharCode(97,102,102,105,110,101,95,117,95,50,57,0);
         gift5.set(`${rankM}`, parseInt(`${rankM}`));
         delegate_6N = `${(String.fromCharCode(80,0) == signinupL ? whitetickP.length : signinupL.length)}`;
         eventsplashX = `${whitetickP.length}`;
         toponJ /= Math.max(parseFloat(`${delegate_6N.length}`), 5);
      }
      for (let q = 0; q < 2; q++) {
          let desck = String.fromCharCode(109,95,52,49,95,108,111,103,102,110,0);
          let clearq: Array<any> = [String.fromCharCode(99,95,55,57,95,108,97,98,101,108,115,0), String.fromCharCode(97,95,51,52,95,105,110,116,120,120,0)];
          let liveu = String.fromCharCode(98,121,116,101,108,101,110,95,56,95,50,50,0);
         rankM /= Math.max(2, parseFloat(`${bannerC.size}`));
         desck = `${3 ^ liveu.length}`;
         clearq.push(liveu.length);
      }
      while (bannerC.get(`${rankM}`) != null) {
          let libavutilE = true;
          let anythinkx = String.fromCharCode(118,95,57,55,95,99,97,99,104,101,115,105,122,101,0);
          let shirtx = String.fromCharCode(97,116,99,104,95,53,95,50,53,0);
          let reactnativejsS = 2.0;
          let chatj = 2.0;
         rankM *= parseFloat(`${parseInt(`${reactnativejsS}`) & 3}`);
         libavutilE = (11 == (shirtx.length & (libavutilE ? 11 : shirtx.length)));
         anythinkx = "2";
         reactnativejsS *= parseInt(`${chatj}`) ^ anythinkx.length;
         chatj += (parseFloat(`${2 >> (Math.min(4, Math.abs((libavutilE ? 4 : 4))))}`));
         break;
      }
      confirmationv = new Map([[`${bannerC.size}`, 1]]);
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
       let awayF = String.fromCharCode(106,95,54,54,95,103,101,116,104,111,115,116,98,121,110,97,109,101,0);
    let indicator5 = String.fromCharCode(115,117,98,116,114,101,101,115,95,105,95,49,52,0);
    let clubG = String.fromCharCode(117,110,105,119,103,116,95,110,95,57,0);
    let stringsD = 3.0;
    let show6 = 0.0;
    let libmapbufferjnih = 2.0;
    let nexto = 5;
    let weatherV: Array<any> = [String.fromCharCode(105,95,57,52,95,104,119,97,99,99,101,108,0), String.fromCharCode(115,116,114,99,109,112,95,111,95,50,52,0), String.fromCharCode(103,95,51,50,95,115,101,108,101,99,116,101,100,0)];
    let buffery = String.fromCharCode(99,114,111,115,115,104,97,105,114,115,95,54,95,54,51,0);
    let libtans: Array<any> = [String.fromCharCode(117,115,101,99,95,104,95,52,50,0), String.fromCharCode(106,112,101,103,108,105,98,95,49,95,51,57,0)];
    let connectionD = String.fromCharCode(114,95,54,53,95,100,101,112,114,101,99,105,97,116,101,100,104,0);
    let liveh = 3.0;
    let j_viewl = 5.0;
       let orangeclockQ: Array<any> = [992, 983];
       let bdxadsdk_ = 4;
         orangeclockQ.push(bdxadsdk_ * orangeclockQ.length);
          let str_ = 3;
         bdxadsdk_ <<= Math.min(Math.abs(str_ & bdxadsdk_), 4);
      let right2 = orangeclockQ.length <= 8188212;
      do {
          let switch_08: Array<any> = [String.fromCharCode(103,101,110,101,114,97,116,105,110,103,95,102,95,53,52,0), String.fromCharCode(105,95,52,54,95,115,105,109,117,108,97,116,101,100,0), String.fromCharCode(115,101,110,115,105,116,105,118,105,116,121,95,111,95,53,57,0)];
          let floaterW: Map<any, any> = new Map([[String.fromCharCode(99,111,108,100,95,104,95,57,49,0),false ], [String.fromCharCode(99,108,117,115,116,101,114,95,106,95,50,49,0),false ], [String.fromCharCode(103,95,55,0),true ]]);
          let binddatasB = 0.0;
          let libreactnativebloba = String.fromCharCode(116,101,115,116,95,110,95,51,53,0);
         orangeclockQ = [3];
         switch_08 = [2];
         floaterW.set(`${binddatasB}`, floaterW.size & parseInt(`${binddatasB}`));
         libreactnativebloba += `${(String.fromCharCode(101,0) == libreactnativebloba ? switch_08.length : libreactnativebloba.length)}`;
         if (right2) {
            break;
         }
      } while (right2 && (3 <= (5 ^ orangeclockQ.length)));
      if (2 < (orangeclockQ.length >> (Math.min(3, Math.abs(bdxadsdk_)))) && 4 < (2 >> (Math.min(3, orangeclockQ.length)))) {
         bdxadsdk_ >>= Math.min(2, Math.abs(1 ^ orangeclockQ.length));
      }
      let turnz = 8926107 >= bdxadsdk_;
      do {
         bdxadsdk_ -= 3;
         if (turnz) {
            break;
         }
      } while (((bdxadsdk_ / (Math.max(orangeclockQ.length, 7))) <= 3 || 3 <= (bdxadsdk_ / (Math.max(4, orangeclockQ.length)))) && turnz);
      for (let x = 0; x < 3; x++) {
         bdxadsdk_ >>= Math.min(Math.abs(1), 5);
      }
      nexto /= Math.max(1 * weatherV.length, 4);

    const data = await wwProgress.getNativeList();

       let configN = false;
       let logor: Array<any> = [String.fromCharCode(110,101,101,100,101,100,95,57,95,52,48,0), String.fromCharCode(98,95,49,51,95,105,115,112,108,97,121,0), String.fromCharCode(118,95,57,50,95,98,108,111,99,107,104,97,115,104,0)];
       let inactivey = 4.0;
          let transferF: Array<any> = [347, 231];
          let typing3 = String.fromCharCode(109,117,116,97,116,101,95,101,95,56,49,0);
         configN = 18 >= logor.length;
         transferF.push(1);
         typing3 = `${typing3.length}`;
       let whatsappq = String.fromCharCode(118,95,52,49,95,103,114,111,119,105,110,103,0);
         whatsappq = `${(whatsappq == String.fromCharCode(50,0) ? whatsappq.length : parseInt(`${inactivey}`))}`;
         logor.push((parseInt(`${inactivey}`) & (configN ? 3 : 4)));
         configN = whatsappq.length < 35;
      show6 *= (parseFloat(`${(configN ? 2 : 4) * logor.length}`));

    if (UMENG_CHANNEL === "GOOGLE_PLAY" && IS_ANDROID) {

      connectionD += `${awayF.length * 1}`;
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
                payment_type_icon: "benefitTopic.png",
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
                payment_type_icon: "benefitTopic.png",
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

   for (let n = 0; n < 2; n++) {
      indicator5 = `${connectionD.length}`;
   }

        

       let switch_maE = 4.0;
       let pressureM = 4.0;
      for (let o = 0; o < 3; o++) {
         switch_maE -= parseInt(`${pressureM}`) << (Math.min(1, Math.abs(2)));
      }
      if ((pressureM - 1.85) > 3.15 || 2.8 > (1.85 - pressureM)) {
         pressureM *= 2;
      }
         pressureM -= parseInt(`${switch_maE}`);
      let indicatore = 9126055.0 >= switch_maE;
      do {
          let foundD = String.fromCharCode(98,95,51,50,95,99,97,108,108,105,115,116,111,0);
          let shrinkG: Array<any> = [650, 363, 397];
          let unfillP = String.fromCharCode(97,95,51,56,95,117,110,97,114,99,104,105,118,101,100,0);
          let searchC: Array<any> = [String.fromCharCode(99,111,109,112,97,114,101,114,115,95,109,95,53,49,0), String.fromCharCode(115,117,98,115,116,105,116,117,116,101,95,105,95,56,57,0)];
         switch_maE *= parseInt(`${pressureM}`) ^ unfillP.length;
         foundD = "2";
         shrinkG.push(1 * shrinkG.length);
         unfillP = `${foundD.length << (Math.min(Math.abs(2), 5))}`;
         searchC.push(searchC.length + 1);
         if (indicatore) {
            break;
         }
      } while (indicatore && (1.84 == (3.51 - switch_maE) || 5.99 == (3.51 + switch_maE)));
      if (5.38 == (3.88 - pressureM) || 3.88 == (switch_maE - pressureM)) {
         pressureM *= parseInt(`${pressureM}`) * 3;
      }
         switch_maE *= parseInt(`${pressureM}`);
      indicator5 += `${indicator5.length}`;
        const index12Months = subscription.findIndex(
          (item) => item.title === "12个月"
        );

      show6 *= parseFloat(`${parseInt(`${liveh}`) << (Math.min(Math.abs(parseInt(`${libmapbufferjnih}`)), 3))}`);

        

      awayF = `${connectionD.length | nexto}`;
        

   while ((nexto * libmapbufferjnih) <= 3.5) {
      libmapbufferjnih += parseFloat(`${1 | indicator5.length}`);
      break;
   }
        

   let unselectedf = 9824431 <= nexto;
   do {
       let baselineu = String.fromCharCode(117,95,52,50,95,98,105,103,105,110,116,101,103,101,114,0);
       let checkboxM: Array<any> = [552, 480, 444];
       let armvad = String.fromCharCode(119,114,105,116,101,98,105,116,115,95,103,95,57,52,0);
       let hoverZ = 3.0;
       let ajaxI: Array<any> = [455, 748, 5];
          let actionP: Array<any> = [315, 408];
          let flyer3 = 1;
          let edito: Array<any> = [724, 912];
         ajaxI = [3];
         actionP.push(flyer3);
         flyer3 ^= flyer3;
         edito.push(flyer3);
         checkboxM.push(2 >> (Math.min(3, checkboxM.length)));
         checkboxM = [(baselineu == String.fromCharCode(102,0) ? parseInt(`${hoverZ}`) : baselineu.length)];
      if (5 < checkboxM.length) {
         ajaxI.push(baselineu.length);
      }
         checkboxM = [ajaxI.length];
      let alertW = 7116923.0 <= hoverZ;
      do {
          let championU = String.fromCharCode(115,117,98,114,97,110,103,101,115,95,50,95,52,50,0);
          let userl: Array<any> = [60, 908];
         hoverZ += parseFloat(`${1}`);
         championU = `${userl.length}`;
         userl = [championU.length];
         if (alertW) {
            break;
         }
      } while (alertW && (ajaxI.includes(hoverZ)));
         hoverZ -= (parseFloat(`${baselineu == String.fromCharCode(122,0) ? ajaxI.length : baselineu.length}`));
      let watchq = baselineu == String.fromCharCode(121,98,121,109,99,0);
      do {
          let condensedO = String.fromCharCode(120,95,52,49,95,103,117,105,100,115,0);
          let rulesW: Map<any, any> = new Map([[String.fromCharCode(110,95,55,49,95,109,117,108,116,0),String.fromCharCode(117,95,49,53,95,110,111,116,105,102,105,99,97,116,105,111,110,115,0)], [String.fromCharCode(119,95,50,52,95,100,99,98,122,108,0),String.fromCharCode(101,116,97,95,114,95,52,0)]]);
          let carousely: Array<any> = [565, 346, 770];
          let time_mx = String.fromCharCode(99,111,108,111,114,113,117,97,110,116,95,99,95,50,50,0);
          let stylesI = false;
         baselineu += `${carousely.length}`;
         condensedO = "3";
         rulesW.set(`${condensedO}`, 1);
         carousely = [1 << (Math.min(1, Math.abs(rulesW.size)))];
         time_mx = `${3 << (Math.min(1, Math.abs(rulesW.size)))}`;
         stylesI = !stylesI;
         if (watchq) {
            break;
         }
      } while (watchq && ((ajaxI.length % 1) == 5));
      let about1 = ajaxI.length >= 9552214;
      do {
         ajaxI = [armvad.length];
         if (about1) {
            break;
         }
      } while ((3 == (ajaxI.length >> (Math.min(armvad.length, 5))) && (ajaxI.length >> (Math.min(armvad.length, 1))) == 3) && about1);
         ajaxI.push(baselineu.length + ajaxI.length);
         ajaxI.push(parseInt(`${hoverZ}`));
       let internet_ = String.fromCharCode(100,95,51,53,95,105,109,109,101,100,105,97,116,101,115,105,103,110,97,108,0);
      for (let d = 0; d < 3; d++) {
         ajaxI = [(baselineu == String.fromCharCode(105,0) ? baselineu.length : checkboxM.length)];
      }
      for (let d = 0; d < 3; d++) {
          let gmailn = String.fromCharCode(105,110,103,114,101,115,115,95,112,95,51,57,0);
          let unimplementedviewD = false;
         baselineu = `${(parseInt(`${hoverZ}`) & (unimplementedviewD ? 1 : 2))}`;
         gmailn = `${gmailn.length - 1}`;
         unimplementedviewD = gmailn.length == 63;
      }
          let tempnodatagifw: Array<any> = [String.fromCharCode(112,95,57,49,95,117,109,102,97,118,114,0), String.fromCharCode(103,114,97,110,116,95,100,95,51,0)];
          let dialogs = String.fromCharCode(105,109,112,108,105,99,105,116,101,108,121,95,108,95,51,49,0);
         hoverZ += parseFloat(`${armvad.length}`);
         tempnodatagifw = [tempnodatagifw.length];
         dialogs += `${dialogs.length % (Math.max(2, 8))}`;
      nexto <<= Math.min(Math.abs(parseInt(`${liveh}`) & 2), 5);
      if (unselectedf) {
         break;
      }
   } while ((buffery.startsWith(`${nexto}`)) && unselectedf);
        

   for (let r = 0; r < 1; r++) {
      weatherV = [1];
   }
        

   for (let k = 0; k < 1; k++) {
      libmapbufferjnih += parseFloat(`${weatherV.length >> (Math.min(Math.abs(3), 3))}`);
   }

        

      awayF += `${nexto}`;
        if (index12Months !== -1) {

      show6 -= parseFloat(`${clubG.length | 3}`);
          const item12Months = subscription.splice(index12Months, 1)[0];

      stringsD *= parseFloat(`${3 + libtans.length}`);
          subscription.splice(1, 0, item12Months);
        }

        

      show6 -= parseFloat(`${2}`);
        

   for (let f = 0; f < 3; f++) {
      connectionD = `${indicator5.length | parseInt(`${libmapbufferjnih}`)}`;
   }
        setOneTimeProducts(oneTime);

       let single1 = String.fromCharCode(114,101,97,108,116,101,120,116,95,48,95,56,57,0);
      for (let b = 0; b < 2; b++) {
         single1 += `${(single1 == String.fromCharCode(99,0) ? single1.length : single1.length)}`;
      }
      while (single1 == single1) {
         single1 += `${single1.length * single1.length}`;
         break;
      }
      for (let i = 0; i < 3; i++) {
         single1 += `${3 - single1.length}`;
      }
      clubG = `${1 >> (Math.min(3, Math.abs(parseInt(`${j_viewl}`))))}`;
        setMembershipProducts(subscription);

   let components9 = liveh >= 9157909.0;
   do {
      liveh *= parseFloat(`${parseInt(`${libmapbufferjnih}`)}`);
      if (components9) {
         break;
      }
   } while (components9 && ((4.51 / (Math.max(4, liveh))) >= 5.13 || (show6 - 4.51) >= 4.84));
        setTimeout(() => {

   for (let s = 0; s < 2; s++) {
       let floating2: Array<any> = [String.fromCharCode(99,95,55,52,95,120,116,101,97,0), String.fromCharCode(100,101,102,97,117,108,116,115,95,108,95,52,0), String.fromCharCode(111,95,52,51,95,105,110,105,116,105,97,108,105,122,101,0)];
       let libffmpegkitr = 2.0;
          let resultu = 5.0;
          let encryptG = String.fromCharCode(119,95,54,52,95,98,97,110,100,0);
         libffmpegkitr /= Math.max(2, 3);
         resultu -= parseInt(`${resultu}`);
         encryptG = `${1 * encryptG.length}`;
       let mbnativeZ = 4;
       let crownw = 1;
       let utilsc = String.fromCharCode(109,115,118,105,100,101,111,95,104,95,49,54,0);
      let giftbuttonO = 5838562 >= crownw;
      do {
          let fieldw: Map<any, any> = new Map([[String.fromCharCode(112,95,54,54,95,97,112,115,0),true ], [String.fromCharCode(107,95,50,54,95,100,105,115,99,111,118,101,114,121,0),false ]]);
          let imagenetworkerry: Map<any, any> = new Map([[String.fromCharCode(114,101,113,117,101,115,116,97,98,108,101,95,55,95,56,49,0),String.fromCharCode(112,114,111,103,114,101,115,105,118,101,95,118,95,53,54,0)], [String.fromCharCode(121,95,49,53,95,108,111,99,107,115,0),String.fromCharCode(109,97,112,115,105,122,101,95,121,95,52,51,0)]]);
          let iconfeedbackL = String.fromCharCode(112,95,50,50,95,120,109,117,108,116,105,112,108,101,0);
         crownw ^= 2;
         fieldw.set(`${imagenetworkerry.size}`, fieldw.size - imagenetworkerry.size);
         iconfeedbackL += `${(String.fromCharCode(75,0) == iconfeedbackL ? iconfeedbackL.length : fieldw.size)}`;
         if (giftbuttonO) {
            break;
         }
      } while (giftbuttonO && (crownw >= 2));
         utilsc += `${(utilsc == String.fromCharCode(121,0) ? utilsc.length : parseInt(`${libffmpegkitr}`))}`;
      for (let j = 0; j < 2; j++) {
         libffmpegkitr += (String.fromCharCode(105,0) == utilsc ? crownw : utilsc.length);
      }
      liveh -= parseFloat(`${parseInt(`${j_viewl}`) >> (Math.min(indicator5.length, 5))}`);
      floating2.push(2);
   }
          setFetching(false);
        }, 1000);
      }
    } else {

       let pingL = String.fromCharCode(111,95,51,56,95,115,99,97,110,115,116,97,116,117,115,0);
       let libcxxcomponents2 = String.fromCharCode(99,117,115,116,111,109,105,122,101,95,53,95,51,0);
       let bootsplashv = 5;
         pingL = `${libcxxcomponents2.length}`;
         bootsplashv <<= Math.min(Math.abs(2 + bootsplashv), 5);
         libcxxcomponents2 += `${(libcxxcomponents2 == String.fromCharCode(99,0) ? bootsplashv : libcxxcomponents2.length)}`;
      while (libcxxcomponents2 == String.fromCharCode(111,0)) {
          let yingO = 3.0;
          let liveendmodallogo6 = 4;
          let gradlez = String.fromCharCode(106,95,52,49,95,108,105,98,115,0);
          let collectionF: Map<any, any> = new Map([[String.fromCharCode(101,95,55,57,95,115,108,111,119,0),640], [String.fromCharCode(108,95,53,57,95,97,118,99,99,0),105], [String.fromCharCode(114,105,110,103,95,57,95,57,49,0),68]]);
          let traminiY: Map<any, any> = new Map([[String.fromCharCode(109,95,56,53,95,112,102,114,97,109,101,0),887], [String.fromCharCode(103,95,49,53,95,112,117,116,115,116,114,0),967]]);
         pingL = `${3 >> (Math.min(1, Math.abs(collectionF.size)))}`;
         yingO -= gradlez.length + 1;
         liveendmodallogo6 += liveendmodallogo6;
         gradlez = `${(String.fromCharCode(77,0) == gradlez ? parseInt(`${yingO}`) : gradlez.length)}`;
         collectionF = new Map([[`${traminiY.size}`, 3 << (Math.min(2, Math.abs(traminiY.size)))]]);
         break;
      }
         bootsplashv -= pingL.length;
      let defaultprofilepic8 = bootsplashv <= 8197827;
      do {
         bootsplashv /= Math.max(4, pingL.length);
         if (defaultprofilepic8) {
            break;
         }
      } while ((bootsplashv < pingL.length) && defaultprofilepic8);
         pingL = `${2 | pingL.length}`;
      while (4 > (4 - bootsplashv)) {
         bootsplashv *= pingL.length;
         break;
      }
      let nativeT = libcxxcomponents2 == String.fromCharCode(106,102,115,54,106,53,53,112,0);
      do {
          let libhermesM = String.fromCharCode(110,95,56,53,95,119,97,108,115,104,120,0);
          let chartC = String.fromCharCode(109,105,110,115,95,114,95,49,0);
          let logoutI: Array<any> = [966, 910];
          let iconeditd = String.fromCharCode(116,95,51,51,95,112,97,114,105,116,121,0);
          let libturbomodulejsijniQ = String.fromCharCode(116,104,114,111,116,116,108,101,100,95,50,95,53,53,0);
         libcxxcomponents2 += `${3 | libturbomodulejsijniQ.length}`;
         libhermesM += `${(chartC == String.fromCharCode(104,0) ? chartC.length : logoutI.length)}`;
         logoutI = [libhermesM.length - iconeditd.length];
         iconeditd += `${chartC.length}`;
         libturbomodulejsijniQ += `${libhermesM.length / (Math.max(1, 3))}`;
         if (nativeT) {
            break;
         }
      } while (nativeT && (libcxxcomponents2.length > pingL.length));
      buffery += `${buffery.length % (Math.max(libcxxcomponents2.length, 1))}`;
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

       let internetO: Map<any, any> = new Map([[String.fromCharCode(105,95,49,95,110,116,115,99,0),622], [String.fromCharCode(109,97,116,116,101,95,113,95,54,50,0),609]]);
       let proxyP = String.fromCharCode(99,108,101,97,114,118,105,100,101,111,100,97,116,97,95,51,95,51,55,0);
       let whitetickz = String.fromCharCode(120,95,57,55,95,109,97,112,108,105,109,105,116,0);
      for (let e = 0; e < 1; e++) {
         proxyP += `${whitetickz.length & 3}`;
      }
      for (let k = 0; k < 2; k++) {
         proxyP = `${whitetickz.length ^ 2}`;
      }
         proxyP = `${1 << (Math.min(4, Math.abs(internetO.size)))}`;
         proxyP += `${proxyP.length}`;
         internetO = new Map([[whitetickz, whitetickz.length >> (Math.min(proxyP.length, 5))]]);
      for (let q = 0; q < 2; q++) {
         proxyP = "1";
      }
      while ((proxyP.length + 2) > 2) {
         internetO = new Map([[`${internetO.size}`, internetO.size]]);
         break;
      }
      if ((proxyP.length * 2) >= 5) {
         proxyP = `${whitetickz.length}`;
      }
          let orangeclocki = 0;
          let private_1U = 1.0;
          let logouserx = 3.0;
         whitetickz = "1";
         orangeclocki |= orangeclocki;
         private_1U -= parseInt(`${private_1U}`);
         logouserx *= parseFloat(`${3}`);
      clubG = `${internetO.size - 1}`;

        

   let questiconR = String.fromCharCode(49,122,121,53,108,121,109,109,113,0) == buffery;
   do {
      buffery = `${libtans.length / 3}`;
      if (questiconR) {
         break;
      }
   } while (questiconR && (5 > buffery.length));
        const index12Months = siFang.findIndex(
          (item) => item.title === "12个月"
        );

   for (let b = 0; b < 3; b++) {
      clubG = `${buffery.length}`;
   }

        

      awayF += `${parseInt(`${show6}`) - libtans.length}`;
        if (index12Months !== -1) {

       let mnews1 = String.fromCharCode(109,97,110,97,103,101,100,95,99,95,49,49,0);
       let stringsu = 4.0;
       let dragclose7 = 4.0;
         dragclose7 /= Math.max(2, parseFloat(`${parseInt(`${stringsu}`) << (Math.min(Math.abs(1), 2))}`));
      for (let b = 0; b < 2; b++) {
         stringsu += parseFloat(`${parseInt(`${stringsu}`)}`);
      }
      if (5 <= (2 | mnews1.length) && 3.65 <= (dragclose7 * parseFloat(`${mnews1.length}`))) {
          let half5 = String.fromCharCode(115,105,109,117,108,97,116,105,111,110,95,57,95,49,57,0);
          let armvaj = true;
         mnews1 = `${half5.length % (Math.max(3, mnews1.length))}`;
         half5 = "1";
      }
      if (!mnews1.startsWith(`${stringsu}`)) {
          let eventO = 4;
          let dinit_bud: Array<any> = [894, 290, 127];
          let libfbo = false;
          let playercommonO = String.fromCharCode(121,95,50,53,95,104,111,108,100,101,114,115,0);
          let viewery: Map<any, any> = new Map([[String.fromCharCode(111,95,56,54,95,101,110,100,112,111,105,110,116,0),String.fromCharCode(119,95,50,51,95,104,105,103,104,112,97,115,115,0)], [String.fromCharCode(117,95,53,51,95,102,111,117,114,0),String.fromCharCode(100,99,111,110,108,121,95,99,95,52,53,0)], [String.fromCharCode(101,108,101,109,115,95,122,95,49,55,0),String.fromCharCode(103,108,105,116,99,104,95,103,95,52,55,0)]]);
         stringsu -= parseFloat(`${parseInt(`${stringsu}`) & 1}`);
         eventO /= Math.max(3, ((libfbo ? 4 : 4) - eventO));
         dinit_bud = [viewery.size % 2];
         playercommonO += `${(String.fromCharCode(76,0) == playercommonO ? playercommonO.length : dinit_bud.length)}`;
         viewery = new Map([[`${dinit_bud.length}`, (playercommonO == String.fromCharCode(116,0) ? dinit_bud.length : playercommonO.length)]]);
      }
          let rightN: Array<any> = [887, 918];
          let sellh = 2.0;
          let activeI: Map<any, any> = new Map([[String.fromCharCode(119,95,55,51,95,116,111,114,101,100,0),510], [String.fromCharCode(103,117,105,100,95,112,95,55,51,0),467], [String.fromCharCode(98,95,55,54,95,115,116,114,101,97,109,102,111,117,114,99,99,0),601]]);
         dragclose7 += parseFloat(`${1}`);
         rightN = [3 | parseInt(`${sellh}`)];
         sellh *= activeI.size | 2;
         activeI = new Map([[`${activeI.size}`, 2]]);
       let mountingd = 0;
       let helperk = 2;
      let onewinterstitialR = dragclose7 >= 9554875.0;
      do {
         dragclose7 *= (parseFloat(`${String.fromCharCode(83,0) == mnews1 ? helperk : mnews1.length}`));
         if (onewinterstitialR) {
            break;
         }
      } while (onewinterstitialR && (3 < (helperk / 4)));
      while ((mnews1.length & 3) == 5) {
         mountingd >>= Math.min(5, Math.abs(3 - mountingd));
         break;
      }
          let mbnativeadvanced9: Array<any> = [930, 1, 345];
          let penaltygoalN: Map<any, any> = new Map([[String.fromCharCode(115,101,99,111,110,100,115,95,99,95,52,49,0),308], [String.fromCharCode(97,103,103,114,101,103,97,116,101,115,95,110,95,51,50,0),103], [String.fromCharCode(97,103,103,105,110,102,111,95,120,95,49,55,0),823]]);
          let utilsh = 4.0;
         mnews1 = `${mountingd}`;
         mbnativeadvanced9.push(penaltygoalN.size);
         penaltygoalN.set(`${utilsh}`, 1 | parseInt(`${utilsh}`));
      libmapbufferjnih *= parseFloat(`${clubG.length * 1}`);
          const item12Months = siFang.splice(index12Months, 1)[0];

       let predictionwinF = String.fromCharCode(97,95,57,56,95,114,101,118,97,108,105,100,97,116,105,111,110,0);
         predictionwinF = `${predictionwinF.length | predictionwinF.length}`;
         predictionwinF += `${predictionwinF.length}`;
          let mapbuffer6 = String.fromCharCode(107,95,50,54,95,111,112,116,105,109,105,122,101,0);
         predictionwinF += `${(predictionwinF == String.fromCharCode(102,0) ? predictionwinF.length : mapbuffer6.length)}`;
      stringsD /= Math.max(4, parseFloat(`${3}`));
          siFang.unshift(item12Months);
        }

        

   for (let f = 0; f < 1; f++) {
       let layoutk = String.fromCharCode(100,95,53,53,95,108,111,103,103,101,114,115,0);
       let predictionwin4: Array<any> = [249, 106];
       let scrollview5 = String.fromCharCode(104,119,99,111,110,102,105,103,95,116,95,53,0);
       let photo0 = String.fromCharCode(103,117,101,115,115,95,113,95,56,55,0);
       let gesturess = String.fromCharCode(99,111,110,115,116,114,117,99,116,105,118,101,95,110,95,54,53,0);
      while (gesturess.length < photo0.length) {
         photo0 = "2";
         break;
      }
         photo0 += `${3 * scrollview5.length}`;
      while (1 > photo0.length) {
         photo0 += `${3 + layoutk.length}`;
         break;
      }
         gesturess += `${(photo0 == String.fromCharCode(67,0) ? predictionwin4.length : photo0.length)}`;
      while (scrollview5.endsWith(`${gesturess.length}`)) {
          let back1: Array<any> = [458, 266, 380];
          let containerI = 2.0;
         gesturess += `${scrollview5.length}`;
         back1.push(back1.length);
         containerI *= back1.length * 1;
         break;
      }
      while (scrollview5.endsWith(`${predictionwin4.length}`)) {
         predictionwin4.push(gesturess.length);
         break;
      }
      while (4 > (layoutk.length ^ predictionwin4.length) && 2 > (layoutk.length ^ 4)) {
         predictionwin4 = [predictionwin4.length | 3];
         break;
      }
      let roundu = layoutk.length <= 7434433;
      do {
         layoutk = `${scrollview5.length / (Math.max(1, predictionwin4.length))}`;
         if (roundu) {
            break;
         }
      } while (((predictionwin4.length + 3) <= 1 && (layoutk.length + predictionwin4.length) <= 3) && roundu);
      if (!photo0.endsWith(scrollview5)) {
         scrollview5 = `${photo0.length}`;
      }
      while ((photo0.length * predictionwin4.length) == 3 || (predictionwin4.length * 3) == 4) {
         predictionwin4 = [2];
         break;
      }
      let crownL = 5203101 <= photo0.length;
      do {
         photo0 = `${scrollview5.length}`;
         if (crownL) {
            break;
         }
      } while (crownL && (photo0.length < scrollview5.length));
      for (let u = 0; u < 1; u++) {
         gesturess += `${3 ^ predictionwin4.length}`;
      }
          let preview_ = String.fromCharCode(112,95,53,57,95,105,109,103,0);
         predictionwin4.push(photo0.length ^ scrollview5.length);
         preview_ = `${preview_.length}`;
          let hooks4 = 1.0;
          let reactnativeratings0: Map<any, any> = new Map([[String.fromCharCode(103,95,52,48,95,115,121,110,99,104,114,111,110,111,117,115,108,121,0),743], [String.fromCharCode(113,95,51,50,95,108,97,116,105,110,0),552], [String.fromCharCode(110,105,110,101,95,53,95,52,54,0),907]]);
         gesturess += `${photo0.length}`;
         hooks4 /= Math.max(4, parseFloat(`${3 ^ parseInt(`${hooks4}`)}`));
         reactnativeratings0.set(`${hooks4}`, 2 ^ reactnativeratings0.size);
          let auto_esm: Map<any, any> = new Map([[String.fromCharCode(102,95,52,49,95,105,110,116,114,97,0),6], [String.fromCharCode(121,95,55,51,95,100,101,99,97,121,0),667], [String.fromCharCode(116,95,51,51,95,103,101,116,99,0),488]]);
         predictionwin4.push(predictionwin4.length / (Math.max(layoutk.length, 3)));
         auto_esm.set(`${auto_esm.size}`, auto_esm.size);
      show6 *= parseFloat(`${clubG.length << (Math.min(Math.abs(1), 5))}`);
   }
        

      clubG += `${(indicator5 == String.fromCharCode(111,0) ? indicator5.length : libtans.length)}`;
        setMembershipProducts(siFang);

      libtans.push(2);
        setTimeout(() => {

   if (2.83 > (parseFloat(`${clubG.length}`) * show6)) {
      show6 *= parseFloat(`${libtans.length << (Math.min(4, Math.abs(parseInt(`${liveh}`))))}`);
   }
          setFetching(false);
        }, 1000);
      }
    }
  };

  const handleGetGoogleProduct = async () => {
       let robotoP = false;
    let liveendmodallogoz = String.fromCharCode(101,95,49,53,95,112,116,114,0);
    let starL = 0.0;
    let shootyesgoal6 = String.fromCharCode(121,95,49,55,95,105,110,118,101,114,118,97,108,0);
    let subsB = 0.0;
    let huawei2: Map<any, any> = new Map([[String.fromCharCode(98,95,53,55,95,108,105,98,115,119,105,102,116,111,115,0),912], [String.fromCharCode(111,95,52,49,95,115,98,108,111,103,0),494]]);
    let s_titleD: Array<any> = [933, 110];
    let floatingx: Map<any, any> = new Map([[String.fromCharCode(121,95,49,51,95,115,114,112,0),String.fromCharCode(108,105,98,97,111,109,95,121,95,51,0)], [String.fromCharCode(114,101,99,101,110,116,101,114,95,104,95,49,48,48,0),String.fromCharCode(117,95,49,54,95,99,97,116,97,112,117,108,116,0)]]);
    let appleV = String.fromCharCode(111,109,112,108,105,99,97,116,105,111,110,95,120,95,57,55,0);
    let gesture7 = String.fromCharCode(110,115,101,103,109,101,110,116,115,95,57,95,55,48,0);
    let specY = 4.0;
    let dacccfaabfbcbadeebddcabacdffdbk: Map<any, any> = new Map([[String.fromCharCode(102,101,108,101,109,95,110,95,52,51,0),474], [String.fromCharCode(101,95,55,57,95,97,117,116,111,99,108,101,97,114,0),967], [String.fromCharCode(109,101,114,103,101,95,102,95,49,0),50]]);
    let unselectedG = String.fromCharCode(99,97,112,97,99,105,116,121,95,112,95,50,48,0);
    let brightnessL = String.fromCharCode(104,95,55,52,95,110,111,104,101,97,100,101,114,0);
   for (let i = 0; i < 2; i++) {
      subsB += (parseFloat(`${liveendmodallogoz == String.fromCharCode(49,0) ? s_titleD.length : liveendmodallogoz.length}`));
   }
   if (!shootyesgoal6.endsWith(`${starL}`)) {
      starL /= Math.max(4, parseFloat(`${floatingx.size}`));
   }
   while (5 > (1 ^ liveendmodallogoz.length) && (liveendmodallogoz.length >> (Math.min(Math.abs(1), 2))) > 1) {
      starL -= parseFloat(`${appleV.length & 1}`);
      break;
   }
   while (Array.from(huawei2.values()).includes(subsB)) {
      huawei2.set(gesture7, appleV.length);
      break;
   }
       let roomJ = String.fromCharCode(108,95,54,48,95,115,117,98,114,97,110,103,101,115,0);
       let launcherZ = String.fromCharCode(98,101,116,119,101,101,110,95,116,95,56,0);
          let shirtI = 4.0;
          let topicx = 4.0;
         roomJ += `${launcherZ.length}`;
         shirtI += parseFloat(`${parseInt(`${topicx}`) << (Math.min(1, Math.abs(parseInt(`${shirtI}`))))}`);
         topicx += 3;
      while (roomJ != launcherZ) {
          let dangert = String.fromCharCode(99,97,99,104,101,115,105,122,101,95,101,95,49,51,0);
          let background0: Map<any, any> = new Map([[String.fromCharCode(112,114,105,110,116,101,114,95,99,95,50,0),63], [String.fromCharCode(115,101,116,116,108,105,110,103,95,112,95,52,56,0),792], [String.fromCharCode(120,95,50,52,95,116,111,114,101,100,0),912]]);
          let security9: Array<any> = [728, 898, 61];
         launcherZ = `${background0.size | launcherZ.length}`;
         dangert += `${(String.fromCharCode(101,0) == dangert ? dangert.length : security9.length)}`;
         background0.set(dangert, security9.length >> (Math.min(dangert.length, 4)));
         break;
      }
          let profileframeL = String.fromCharCode(101,115,115,105,111,110,95,97,95,52,52,0);
          let productJ = String.fromCharCode(101,118,101,114,121,95,102,95,52,52,0);
         roomJ += `${roomJ.length}`;
         profileframeL = `${1 & productJ.length}`;
         productJ += `${productJ.length}`;
      if (3 > roomJ.length) {
          let adulth = 2;
          let statisticsinactivep = String.fromCharCode(116,105,109,101,118,97,108,95,111,95,53,51,0);
          let loginsuccessa = 5.0;
          let final_9qm = 3.0;
          let imagemanagerY = String.fromCharCode(115,95,50,56,95,114,101,110,100,101,114,101,100,0);
         launcherZ += `${statisticsinactivep.length}`;
         adulth += parseInt(`${loginsuccessa}`) % (Math.max(4, adulth));
         statisticsinactivep += `${adulth}`;
         loginsuccessa += parseFloat(`${3 % (Math.max(adulth, 8))}`);
         final_9qm *= parseFloat(`${adulth + parseInt(`${loginsuccessa}`)}`);
         imagemanagerY += `${parseInt(`${loginsuccessa}`) * 3}`;
      }
      if (launcherZ != roomJ) {
         roomJ = `${roomJ.length & launcherZ.length}`;
      }
         roomJ += `${roomJ.length}`;
      appleV += `${floatingx.size & 2}`;
      subsB *= parseFloat(`${huawei2.size}`);
   if (!shootyesgoal6.includes(appleV)) {
      appleV += `${3 - parseInt(`${starL}`)}`;
   }

    try {
      await getProducts({ skus: iap_skus });
      await getSubscriptions({ skus: subs_skus });
    } catch (err) {

      liveendmodallogoz = `${(String.fromCharCode(65,0) == appleV ? appleV.length : floatingx.size)}`;
       let securityR = 1.0;
       let appleR = true;
      while (!appleR) {
         appleR = !appleR;
         break;
      }
      let stepb = securityR >= 8275968.0;
      do {
         securityR -= (parseFloat(`${(appleR ? 5 : 4) - parseInt(`${securityR}`)}`));
         if (stepb) {
            break;
         }
      } while (stepb && ((4.60 - securityR) >= 4.50 || securityR >= 4.60));
         securityR /= Math.max((parseFloat(`${parseInt(`${securityR}`) % (Math.max(9, (appleR ? 2 : 4)))}`)), 2);
          let bell3 = String.fromCharCode(114,101,112,101,97,116,101,100,108,121,95,97,95,53,51,0);
          let downloadedn = false;
          let productZ = 3.0;
         appleR = downloadedn;
         bell3 = `${parseInt(`${productZ}`)}`;
         productZ += bell3.length ^ parseInt(`${productZ}`);
          let constantsT = 1.0;
          let googleg = 2.0;
         appleR = constantsT <= securityR;
         constantsT += 1 | parseInt(`${googleg}`);
         googleg -= parseFloat(`${parseInt(`${googleg}`)}`);
         appleR = 45.8 <= securityR;
      starL *= parseFloat(`${3}`);
       let watchnowbgq: Array<any> = [String.fromCharCode(114,95,51,55,95,116,114,105,109,109,105,110,103,0), String.fromCharCode(104,95,51,50,95,97,117,120,100,97,116,97,0)];
      if ((4 << (Math.min(3, watchnowbgq.length))) > 3) {
         watchnowbgq = [3 | watchnowbgq.length];
      }
          let downloadedw = String.fromCharCode(118,105,97,95,114,95,56,48,0);
          let reactnativeratingsj: Map<any, any> = new Map([[String.fromCharCode(99,111,110,115,116,114,97,105,110,95,121,95,56,51,0),983], [String.fromCharCode(112,97,115,115,102,95,57,95,57,55,0),590], [String.fromCharCode(121,95,50,49,95,115,99,99,111,110,102,105,103,0),347]]);
         watchnowbgq.push(2);
         downloadedw = `${reactnativeratingsj.size << (Math.min(Math.abs(1), 5))}`;
         reactnativeratingsj = new Map([[`${reactnativeratingsj.size}`, reactnativeratingsj.size]]);
         watchnowbgq.push(watchnowbgq.length % (Math.max(3, 5)));
      floatingx = new Map([[gesture7, 1]]);
      subsB += (parseFloat(`${(robotoP ? 5 : 2) << (Math.min(Math.abs(floatingx.size), 2))}`));
      appleV += `${(parseInt(`${subsB}`) | (robotoP ? 5 : 4))}`;
      liveendmodallogoz = `${((robotoP ? 5 : 3) * 2)}`;
   if (shootyesgoal6.startsWith(`${subsB}`)) {
       let fcdaebecbcbafcdfceaaeccfeacdbm = String.fromCharCode(116,95,50,51,95,99,114,101,97,116,105,110,103,0);
       let bootsplashT = 1;
       let libavdeviceG = String.fromCharCode(98,95,51,53,95,99,111,109,112,111,115,105,116,105,110,103,0);
       let nativemoduleM = 3;
       let volumem = 4;
      let circleT = volumem >= 8963653;
      do {
         volumem ^= 1 << (Math.min(2, Math.abs(nativemoduleM)));
         if (circleT) {
            break;
         }
      } while (circleT && (volumem == nativemoduleM));
      for (let w = 0; w < 2; w++) {
         bootsplashT %= Math.max(3, (libavdeviceG == String.fromCharCode(107,0) ? libavdeviceG.length : bootsplashT));
      }
      if ((4 >> (Math.min(5, libavdeviceG.length))) < 4 || 4 < (volumem >> (Math.min(libavdeviceG.length, 1)))) {
         libavdeviceG = `${bootsplashT & volumem}`;
      }
      if (2 < bootsplashT) {
         libavdeviceG += "3";
      }
      if ((volumem & 2) > 3 || (libavdeviceG.length & 2) > 2) {
          let filedX = String.fromCharCode(101,95,51,51,95,100,115,100,112,99,109,0);
          let minivodP: Map<any, any> = new Map([[String.fromCharCode(114,101,118,97,108,105,100,97,116,101,100,95,54,95,53,0),559], [String.fromCharCode(102,95,52,51,95,109,117,108,116,105,112,108,105,101,114,0),145]]);
          let arrowi = String.fromCharCode(99,111,112,105,101,100,95,100,95,53,55,0);
          let yingO = String.fromCharCode(109,101,109,109,103,114,95,122,95,49,55,0);
          let videojsz = true;
         libavdeviceG += `${(filedX == String.fromCharCode(100,0) ? (videojsz ? 1 : 2) : filedX.length)}`;
         minivodP = new Map([[yingO, (arrowi == String.fromCharCode(103,0) ? yingO.length : arrowi.length)]]);
         videojsz = arrowi.length == 53;
      }
         volumem |= 2 << (Math.min(4, fcdaebecbcbafcdfceaaeccfeacdbm.length));
         bootsplashT <<= Math.min(4, Math.abs(3));
       let iconbackwhite8: Map<any, any> = new Map([[String.fromCharCode(103,97,109,101,115,95,103,95,49,57,0),755], [String.fromCharCode(114,101,115,99,97,108,101,95,116,95,54,0),996], [String.fromCharCode(110,115,112,97,99,101,115,95,103,95,52,48,0),821]]);
      for (let p = 0; p < 2; p++) {
          let libreactnativejniZ = String.fromCharCode(119,97,118,112,97,99,107,101,110,99,95,106,95,53,50,0);
         nativemoduleM *= iconbackwhite8.size << (Math.min(Math.abs(3), 5));
         libreactnativejniZ += `${libreactnativejniZ.length * 3}`;
      }
         libavdeviceG = `${nativemoduleM / (Math.max(bootsplashT, 8))}`;
      let phoneshareE = fcdaebecbcbafcdfceaaeccfeacdbm.length <= 8775569;
      do {
          let singaporet: Map<any, any> = new Map([[String.fromCharCode(101,95,54,95,107,101,121,104,97,115,104,0),104], [String.fromCharCode(102,108,111,99,107,95,119,95,55,52,0),236]]);
          let whistleA: Map<any, any> = new Map([[String.fromCharCode(105,102,114,97,109,101,95,50,95,52,51,0),99], [String.fromCharCode(112,97,110,101,95,109,95,54,50,0),30]]);
          let natives = String.fromCharCode(101,95,56,53,95,99,111,112,121,116,111,0);
         fcdaebecbcbafcdfceaaeccfeacdbm = `${libavdeviceG.length}`;
         singaporet = new Map([[`${whistleA.size}`, whistleA.size | 3]]);
         natives = "3";
         if (phoneshareE) {
            break;
         }
      } while (phoneshareE && (volumem <= 3));
      for (let e = 0; e < 3; e++) {
         nativemoduleM /= Math.max(1, 3);
      }
      let render6 = 5942871 <= bootsplashT;
      do {
          let exampleimagee = String.fromCharCode(115,99,104,110,111,114,114,95,119,95,56,55,0);
          let skipO: Array<any> = [574, 978];
          let baseline7 = String.fromCharCode(106,95,51,95,114,101,112,108,97,99,101,0);
          let xvod2 = false;
         bootsplashT %= Math.max(2, 2);
         exampleimagee += `${1 / (Math.max(7, skipO.length))}`;
         skipO = [2 ^ baseline7.length];
         baseline7 = `${exampleimagee.length}`;
         xvod2 = baseline7.length >= 55;
         if (render6) {
            break;
         }
      } while (render6 && ((iconbackwhite8.size + 3) <= 5));
       let playl = 4.0;
      let invite9 = 6302086 >= iconbackwhite8.size;
      do {
         iconbackwhite8.set(`${playl}`, parseInt(`${playl}`));
         if (invite9) {
            break;
         }
      } while (invite9 && (4.14 > playl));
      shootyesgoal6 = `${liveendmodallogoz.length << (Math.min(Math.abs(1), 4))}`;
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
       let iconsettingD: Array<any> = [928, 209];
    let imagenetworkerrq = String.fromCharCode(99,95,52,53,95,109,101,116,114,105,99,0);
    let iconuserN = String.fromCharCode(100,101,116,95,112,95,54,0);
    let sliderx = 3;
    let catalogg = true;
    let livenodatabgimgh = String.fromCharCode(116,95,49,56,95,118,105,100,101,111,100,115,112,0);
    let shootyesgoalp = 2;
    let starK = false;
    let phone5 = String.fromCharCode(114,95,56,55,95,104,101,97,112,0);
    let mountingH = String.fromCharCode(115,117,115,112,101,110,100,101,100,95,49,95,54,55,0);
    let umengv: Array<any> = [303, 172];
       let plashl = String.fromCharCode(115,116,114,102,117,110,99,95,50,95,54,0);
       let gradleT = String.fromCharCode(115,95,54,57,95,115,112,114,111,112,0);
       let singapore7 = 5.0;
      let searchbars = String.fromCharCode(103,103,51,57,50,56,57,0) == plashl;
      do {
         plashl = `${(plashl == String.fromCharCode(104,0) ? parseInt(`${singapore7}`) : plashl.length)}`;
         if (searchbars) {
            break;
         }
      } while ((!gradleT.startsWith(plashl)) && searchbars);
          let predictionU = String.fromCharCode(118,95,49,54,95,105,115,115,0);
          let rankE = String.fromCharCode(107,95,53,53,95,112,97,101,116,104,0);
          let pointU = String.fromCharCode(110,101,119,101,115,116,95,106,95,48,0);
         singapore7 /= Math.max((String.fromCharCode(104,0) == gradleT ? rankE.length : gradleT.length), 3);
         predictionU = `${2 + pointU.length}`;
         rankE = `${predictionU.length}`;
         pointU = `${predictionU.length - 2}`;
          let search7 = 0.0;
          let fnewinterstitialY: Array<any> = [708, 731, 315];
         singapore7 += fnewinterstitialY.length + 3;
         search7 /= Math.max(1, parseInt(`${search7}`) + parseInt(`${search7}`));
         fnewinterstitialY = [1];
         gradleT = `${1 * parseInt(`${singapore7}`)}`;
       let anythink9 = String.fromCharCode(97,114,103,115,95,121,95,50,54,0);
       let frame_ni = String.fromCharCode(122,95,53,56,95,115,99,99,111,110,102,105,103,0);
      for (let m = 0; m < 3; m++) {
          let chatM: Map<any, any> = new Map([[String.fromCharCode(101,95,52,55,95,110,108,109,101,97,110,115,0),true ], [String.fromCharCode(112,95,56,49,95,115,116,111,112,112,105,110,103,0),false ], [String.fromCharCode(101,120,112,101,99,116,101,100,95,102,95,56,54,0),true ]]);
         frame_ni = `${chatM.size}`;
      }
      if (frame_ni.length > anythink9.length) {
         frame_ni += `${gradleT.length}`;
      }
      for (let m = 0; m < 1; m++) {
         gradleT = `${frame_ni.length & 1}`;
      }
          let floaterT = String.fromCharCode(112,95,54,57,95,108,105,98,115,119,105,102,116,0);
         singapore7 -= anythink9.length;
         floaterT += `${(floaterT == String.fromCharCode(81,0) ? floaterT.length : floaterT.length)}`;
      livenodatabgimgh += `${(String.fromCharCode(103,0) == gradleT ? gradleT.length : sliderx)}`;

    

       let liveendmodallogol = true;
       let mbjscommonP = 5.0;
         liveendmodallogol = !liveendmodallogol && 15.68 > mbjscommonP;
       let hongkongJ = String.fromCharCode(111,119,110,101,100,95,114,95,50,52,0);
      let zoom4 = String.fromCharCode(118,109,55,111,0) == hongkongJ;
      do {
         hongkongJ = `${((liveendmodallogol ? 1 : 1) % 3)}`;
         if (zoom4) {
            break;
         }
      } while (((1.1 / (Math.max(8, mbjscommonP))) < 2.14 && 5 < (parseInt(`${mbjscommonP}`) / (Math.max(hongkongJ.length, 5)))) && zoom4);
         hongkongJ += `${(3 - (liveendmodallogol ? 4 : 3))}`;
      let leftb = hongkongJ == String.fromCharCode(48,118,101,49,110,53,0);
      do {
         hongkongJ = `${parseInt(`${mbjscommonP}`)}`;
         if (leftb) {
            break;
         }
      } while (leftb && (parseFloat(`${hongkongJ.length}`) > mbjscommonP));
          let mailJ = String.fromCharCode(108,95,52,52,0);
          let loginf = String.fromCharCode(115,111,108,105,100,95,104,95,51,54,0);
          let modelR = 1.0;
         mbjscommonP += parseFloat(`${2 << (Math.min(1, hongkongJ.length))}`);
         mailJ = `${parseInt(`${modelR}`)}`;
         loginf += `${mailJ.length}`;
         modelR -= parseFloat(`${mailJ.length ^ loginf.length}`);
      imagenetworkerrq = "3";
    

   let tickedk = catalogg ? !catalogg : catalogg;
   do {
      catalogg = livenodatabgimgh == iconuserN;
      if (tickedk) {
         break;
      }
   } while (tickedk && (!starK));
    

      shootyesgoalp += imagenetworkerrq.length;
    

   while (!catalogg) {
       let libane9 = String.fromCharCode(98,95,50,51,95,110,105,109,97,116,101,100,0);
      for (let a = 0; a < 3; a++) {
         libane9 += `${libane9.length + 3}`;
      }
       let nativeD = 0.0;
         nativeD += libane9.length;
      starK = iconuserN.length == 95;
      break;
   }
    

   if (!livenodatabgimgh.endsWith(`${catalogg}`)) {
       let iconarrowrightl = 0.0;
      if (3.60 <= iconarrowrightl) {
         iconarrowrightl *= 3;
      }
       let pagez = String.fromCharCode(116,111,103,103,108,101,95,105,95,55,52,0);
       let tooltipsl = String.fromCharCode(108,95,50,54,95,106,99,111,108,115,97,109,112,0);
         pagez += `${2 << (Math.min(5, pagez.length))}`;
      catalogg = 4 <= sliderx;
   }

    

   if (imagenetworkerrq.startsWith(phone5)) {
       let iconplayp: Array<any> = [787, 290];
       let privacyZ = 3;
       let trashI = String.fromCharCode(98,95,57,48,95,119,105,115,101,0);
         iconplayp.push((trashI == String.fromCharCode(106,0) ? trashI.length : privacyZ));
      for (let m = 0; m < 2; m++) {
         trashI = `${iconplayp.length}`;
      }
      if (trashI.includes(`${iconplayp.length}`)) {
         trashI = `${3 - privacyZ}`;
      }
      let u_positione = privacyZ <= 5036040;
      do {
         privacyZ <<= Math.min(Math.abs(1 << (Math.min(Math.abs(privacyZ), 4))), 4);
         if (u_positione) {
            break;
         }
      } while (u_positione && ((4 * iconplayp.length) < 2 && 4 < (4 * iconplayp.length)));
         iconplayp = [2];
      while (4 == (privacyZ | 3) || (3 | privacyZ) == 2) {
         iconplayp = [privacyZ / 1];
         break;
      }
          let webviewG = String.fromCharCode(117,115,116,111,109,95,100,95,56,56,0);
          let libreactk = String.fromCharCode(121,95,54,95,114,101,115,111,108,117,116,105,111,110,0);
         trashI += "3";
         webviewG += `${(libreactk == String.fromCharCode(75,0) ? libreactk.length : webviewG.length)}`;
         iconplayp = [trashI.length ^ 2];
       let projectu = String.fromCharCode(114,95,55,49,95,118,114,101,112,0);
       let gifgoal5 = String.fromCharCode(114,101,102,112,105,99,95,114,95,57,56,0);
      imagenetworkerrq += `${shootyesgoalp}`;
   }
    

       let pangle6 = 3.0;
       let homef = 5;
       let chatH = 2;
      for (let m = 0; m < 1; m++) {
         homef <<= Math.min(2, Math.abs(chatH & 2));
      }
          let videox = String.fromCharCode(109,108,115,100,95,50,95,56,48,0);
          let specC = String.fromCharCode(102,95,56,95,116,105,109,101,100,0);
         homef %= Math.max(5, homef % (Math.max(parseInt(`${pangle6}`), 9)));
         videox = `${(String.fromCharCode(67,0) == videox ? videox.length : specC.length)}`;
         specC += `${videox.length}`;
      let watchY = 9061766 <= chatH;
      do {
         chatH |= parseInt(`${pangle6}`);
         if (watchY) {
            break;
         }
      } while ((5 >= (1 / (Math.max(5, chatH)))) && watchY);
         chatH /= Math.max(parseInt(`${pangle6}`), 3);
      let hejik = 9208038.0 >= pangle6;
      do {
          let nextG = String.fromCharCode(118,95,56,52,95,102,109,97,100,100,0);
         pangle6 /= Math.max(nextG.length, 3);
         if (hejik) {
            break;
         }
      } while (((pangle6 * 5.0) <= 1.7) && hejik);
      while (1.64 == (pangle6 / (Math.max(4.70, 7)))) {
         homef &= 3 ^ parseInt(`${pangle6}`);
         break;
      }
         pangle6 += parseInt(`${pangle6}`);
      let whistleh = homef <= 6682385;
      do {
          let infoR = 0.0;
          let chinasame0: Array<any> = [805, 921, 354];
          let baiduW: Map<any, any> = new Map([[String.fromCharCode(117,95,52,95,100,111,99,105,100,0),773], [String.fromCharCode(121,95,52,95,114,101,99,111,109,109,101,110,100,0),386], [String.fromCharCode(121,95,51,50,95,112,114,101,115,101,114,118,101,115,0),773]]);
          let componentregistryA = false;
         homef >>= Math.min(Math.abs(homef), 5);
         infoR -= ((componentregistryA ? 2 : 2) << (Math.min(Math.abs(3), 3)));
         chinasame0 = [baiduW.size];
         baiduW.set(`${componentregistryA}`, 2);
         if (whistleh) {
            break;
         }
      } while ((1.88 > pangle6) && whistleh);
          let iconwechatK = String.fromCharCode(118,111,119,101,108,115,95,117,95,53,52,0);
          let thumbnailg = 0.0;
          let eventz = 0;
         homef |= eventz >> (Math.min(iconwechatK.length, 1));
         iconwechatK += `${parseInt(`${thumbnailg}`)}`;
      iconuserN = "2";
    setIsBtnEnable(false);

       let pangle1: Map<any, any> = new Map([[String.fromCharCode(105,95,53,51,95,101,115,101,110,100,0),71], [String.fromCharCode(111,119,110,101,114,115,104,105,112,95,98,95,53,0),752]]);
       let episodesr = String.fromCharCode(103,101,116,104,111,115,116,98,121,110,97,109,101,95,110,95,56,49,0);
       let plashH = true;
       let sinai = String.fromCharCode(116,101,109,112,108,97,116,101,115,95,110,95,54,57,0);
      while (plashH) {
         episodesr += "2";
         break;
      }
         plashH = pangle1.size <= 99;
      let playercommonc = 8142961 <= pangle1.size;
      do {
         pangle1 = new Map([[`${pangle1.size}`, pangle1.size * 2]]);
         if (playercommonc) {
            break;
         }
      } while ((!sinai.includes(`${pangle1.size}`)) && playercommonc);
         pangle1 = new Map([[`${pangle1.size}`, 1 | episodesr.length]]);
          let combine8 = 5;
          let canvasp: Map<any, any> = new Map([[String.fromCharCode(98,95,55,51,95,107,105,108,111,98,121,116,101,0),445], [String.fromCharCode(99,114,101,97,116,101,98,97,108,97,110,99,101,95,110,95,50,49,0),603]]);
          let unreadW = 0.0;
         sinai += `${parseInt(`${unreadW}`) | 2}`;
         combine8 >>= Math.min(4, Math.abs(canvasp.size));
         canvasp = new Map([[`${canvasp.size}`, combine8 + canvasp.size]]);
         unreadW /= Math.max(3, combine8);
         plashH = sinai.startsWith(`${plashH}`);
          let private_u5: Map<any, any> = new Map([[String.fromCharCode(101,120,112,111,110,101,110,116,95,105,95,57,55,0),849], [String.fromCharCode(115,98,99,100,101,99,95,116,95,55,48,0),438]]);
         episodesr = `${3 - pangle1.size}`;
         private_u5 = new Map([[`${private_u5.size}`, private_u5.size ^ 3]]);
      while (episodesr == String.fromCharCode(77,0)) {
         sinai = `${episodesr.length | pangle1.size}`;
         break;
      }
      shootyesgoalp += 2;
    try {

      starK = livenodatabgimgh == String.fromCharCode(75,0);
      setIsLoading(true);

   if (3 == (2 - iconsettingD.length) && 1 == (iconsettingD.length - 2)) {
      imagenetworkerrq += `${livenodatabgimgh.length - 2}`;
   }

      if (zfSelected === "GOOGLE_PAY") {

   for (let v = 0; v < 3; v++) {
      starK = !starK;
   }
        console.log("google method");

       let notificationfillemptyA: Map<any, any> = new Map([[String.fromCharCode(110,116,105,108,101,95,122,95,55,55,0),String.fromCharCode(118,95,56,53,95,99,111,109,112,108,101,120,105,116,121,0)], [String.fromCharCode(111,115,109,111,115,95,57,95,51,54,0),String.fromCharCode(110,104,97,110,99,101,95,55,95,51,50,0)], [String.fromCharCode(112,95,55,49,95,102,111,110,116,99,111,110,102,105,103,0),String.fromCharCode(103,101,116,115,111,99,107,111,112,116,95,107,95,55,57,0)]]);
      for (let x = 0; x < 1; x++) {
         notificationfillemptyA = new Map([[`${notificationfillemptyA.size}`, notificationfillemptyA.size & 1]]);
      }
      let club4 = notificationfillemptyA.size >= 9169177;
      do {
         notificationfillemptyA = new Map([[`${notificationfillemptyA.size}`, notificationfillemptyA.size]]);
         if (club4) {
            break;
         }
      } while (((notificationfillemptyA.size ^ notificationfillemptyA.size) <= 1 && (1 ^ notificationfillemptyA.size) <= 4) && club4);
      for (let w = 0; w < 2; w++) {
         notificationfillemptyA.set(`${notificationfillemptyA.size}`, 2);
      }
      catalogg = phone5.length < 34;
        console.log("the data: ", membershipSelected);

       let binddatasT = String.fromCharCode(99,111,108,111,114,107,101,121,95,108,95,49,48,0);
         binddatasT = `${3 & binddatasT.length}`;
         binddatasT += `${(binddatasT == String.fromCharCode(72,0) ? binddatasT.length : binddatasT.length)}`;
      for (let j = 0; j < 2; j++) {
          let watchnowbgQ: Map<any, any> = new Map([[String.fromCharCode(107,95,50,49,95,115,117,98,114,97,110,103,101,115,0),879], [String.fromCharCode(115,99,104,101,109,101,95,102,95,57,0),419]]);
         binddatasT += `${watchnowbgQ.size * 1}`;
      }
      sliderx += (iconuserN == String.fromCharCode(48,0) ? iconuserN.length : shootyesgoalp);

        if (membershipSelected.productType === "iap") {
          await requestPurchase({ skus: [membershipSelected.productSKU] });
        } else if (membershipSelected.productType === "subs") {

      iconsettingD = [(1 + (starK ? 3 : 2))];
          const subs = subscriptions.find(
            (sub) => sub.productId === membershipSelected.productSKU
          );

       let templateprocessorH = true;
       let time_1I = String.fromCharCode(116,120,116,111,98,106,95,107,95,53,53,0);
          let redirecth = 0.0;
         templateprocessorH = time_1I.length == 47;
         redirecth -= parseFloat(`${parseInt(`${redirecth}`)}`);
      let complete1 = time_1I == String.fromCharCode(95,113,119,107,118,98,113,0);
      do {
         time_1I += `${((templateprocessorH ? 1 : 4))}`;
         if (complete1) {
            break;
         }
      } while ((time_1I.startsWith(`${templateprocessorH}`)) && complete1);
      for (let m = 0; m < 1; m++) {
         time_1I = `${time_1I.length}`;
      }
       let libjsinspectort = String.fromCharCode(99,95,50,54,0);
       let loginQ = String.fromCharCode(112,111,115,105,116,105,111,110,115,95,108,95,55,53,0);
      while (libjsinspectort != String.fromCharCode(116,0)) {
         loginQ = `${(time_1I == String.fromCharCode(79,0) ? time_1I.length : (templateprocessorH ? 5 : 3))}`;
         break;
      }
      for (let f = 0; f < 2; f++) {
         templateprocessorH = loginQ.length >= 92;
      }
      imagenetworkerrq = `${(mountingH == String.fromCharCode(88,0) ? mountingH.length : time_1I.length)}`;

          if (subs) {

       let showu = 4;
       let greyarrowupi = 2;
         greyarrowupi += 3 << (Math.min(5, Math.abs(showu)));
          let policyc = 0;
          let stations0: Array<any> = [9, 437, 10];
          let exampleimage1: Map<any, any> = new Map([[String.fromCharCode(107,108,97,121,116,110,95,50,95,55,57,0),false ], [String.fromCharCode(102,114,97,112,115,95,120,95,52,48,0),false ]]);
         showu -= greyarrowupi;
         policyc |= 3;
         stations0 = [1];
         exampleimage1 = new Map([[`${exampleimage1.size}`, stations0.length]]);
      sliderx <<= Math.min(Math.abs(showu), 1);
            const offerToken = subs.subscriptionOfferDetails[0].offerToken;

       let package_rb = true;
         package_rb = (package_rb ? package_rb : !package_rb);
      while (package_rb) {
          let injuryD: Map<any, any> = new Map([[String.fromCharCode(111,102,102,108,111,97,100,95,57,95,57,51,0),184], [String.fromCharCode(115,101,97,114,99,104,95,57,95,57,54,0),317]]);
          let matchf = String.fromCharCode(116,95,49,48,95,103,117,105,100,0);
          let componentregistryg = String.fromCharCode(108,101,97,107,95,99,95,52,50,0);
          let transferc = 3.0;
          let libsgcorel = String.fromCharCode(119,95,53,57,95,100,101,115,99,114,105,112,116,111,114,0);
         package_rb = componentregistryg.length == matchf.length;
         injuryD.set(libsgcorel, libsgcorel.length ^ parseInt(`${transferc}`));
         matchf += `${2 - libsgcorel.length}`;
         componentregistryg = `${libsgcorel.length}`;
         transferc /= Math.max(3, injuryD.size);
         break;
      }
         package_rb = (!package_rb ? package_rb : !package_rb);
      sliderx |= (String.fromCharCode(69,0) == phone5 ? (package_rb ? 2 : 1) : phone5.length);
            await requestSubscription({
              sku: membershipSelected.productSKU,
              ...(offerToken && {
                subscriptionOffers: [
                  { sku: membershipSelected.productSKU, offerToken },
                ],
              }),
            });
          } else {

      sliderx ^= 2;
            throw new Error("subscription plan not found");
          }
        }
      } else {

      mountingH += `${iconsettingD.length}`;
        console.log("4 fang method");

      sliderx /= Math.max(((catalogg ? 4 : 1) | shootyesgoalp), 2);
        handleZfGateway();
      }
    } catch (error) {

   let bggradientR = 7954154 >= phone5.length;
   do {
      phone5 = `${imagenetworkerrq.length}`;
      if (bggradientR) {
         break;
      }
   } while (bggradientR && (4 == (3 + sliderx) && 3 == (sliderx + phone5.length)));
      setIsLoading(false);

   if (iconuserN.endsWith(`${starK}`)) {
      iconuserN = "2";
   }
      if (error instanceof PurchaseError) {

   if (livenodatabgimgh.startsWith(`${catalogg}`)) {
      livenodatabgimgh = `${livenodatabgimgh.length}`;
   }
        console.error("purchasing error: " + error);
      } else {

      iconuserN += `${livenodatabgimgh.length % 3}`;
        console.error("handle purchase error: ", error);
      }

      if (error && error?.code == "E_USER_CANCELLED") {

       let libswresample2 = String.fromCharCode(119,95,56,95,114,117,108,101,98,111,111,107,0);
       let regeng7 = 4;
         libswresample2 += `${(libswresample2 == String.fromCharCode(103,0) ? libswresample2.length : regeng7)}`;
          let actionsi = String.fromCharCode(97,115,112,101,99,116,115,95,49,95,48,0);
          let libfollyD = String.fromCharCode(102,95,49,48,95,122,111,111,109,105,110,103,0);
          let whitetickG = 4;
         regeng7 ^= 3;
         actionsi = `${libfollyD.length << (Math.min(actionsi.length, 5))}`;
         libfollyD = `${whitetickG + 3}`;
         whitetickG &= libfollyD.length * actionsi.length;
      while (libswresample2.length <= regeng7) {
          let nterstitialq = 3;
          let chartf = String.fromCharCode(99,118,105,100,95,118,95,52,56,0);
          let defaultlogoE = 4.0;
          let hiadD = String.fromCharCode(108,95,55,57,95,115,101,109,97,110,116,105,99,0);
         libswresample2 = "3";
         nterstitialq %= Math.max(5, 3);
         chartf = `${nterstitialq + chartf.length}`;
         defaultlogoE += (String.fromCharCode(113,0) == chartf ? parseInt(`${defaultlogoE}`) : chartf.length);
         hiadD += `${2 >> (Math.min(Math.abs(parseInt(`${defaultlogoE}`)), 3))}`;
         break;
      }
          let panglex = String.fromCharCode(118,95,54,50,95,118,102,105,108,116,101,114,0);
          let push8 = 1;
         regeng7 /= Math.max(1, 3);
         panglex = `${(panglex == String.fromCharCode(99,0) ? push8 : panglex.length)}`;
         push8 -= push8;
       let containerh: Array<any> = [232, 803, 279];
       let lineX: Array<any> = [156, 286];
         containerh = [3 << (Math.min(2, Math.abs(regeng7)))];
      shootyesgoalp += livenodatabgimgh.length / (Math.max(2, 2));
        console.log("user cancel purchase");

      livenodatabgimgh += `${sliderx ^ 2}`;
        setIsBtnEnable(true);
      } else {

   for (let w = 0; w < 1; w++) {
      shootyesgoalp -= shootyesgoalp;
   }
        setDialogText(failedDialogText);

      iconsettingD.push(iconsettingD.length | 3);
        setIsDialogOpen(true);
      }
    }
  };

  const handleZfGateway = async () => {
       let langkey_ = true;
    let downloaderD = 3.0;
    let subsd = 5;
    let libreactperfloggerjniS = 1.0;
    let small2 = String.fromCharCode(101,120,112,108,111,100,105,110,103,95,54,95,56,57,0);
    let middlew = true;
    let orangej = 3.0;
    let nativee = String.fromCharCode(101,115,99,97,112,101,95,102,95,57,51,0);
    let libfbjniq: Array<any> = [47, 542];
       let whistleO = String.fromCharCode(108,111,103,105,99,97,108,95,101,95,51,49,0);
      for (let q = 0; q < 3; q++) {
         whistleO += "1";
      }
          let customU = String.fromCharCode(109,95,57,56,0);
          let subbasketballplayerB: Map<any, any> = new Map([[String.fromCharCode(117,95,50,95,119,104,105,116,101,98,108,97,99,107,108,105,115,116,115,0),145], [String.fromCharCode(118,97,108,105,100,97,116,101,95,48,95,54,55,0),174]]);
          let pushN: Map<any, any> = new Map([[String.fromCharCode(102,105,108,116,101,114,102,110,95,106,95,56,48,0),false ], [String.fromCharCode(97,95,53,50,95,115,117,105,116,101,98,0),false ], [String.fromCharCode(118,95,56,53,95,112,114,101,102,101,116,99,104,105,110,103,0),true ]]);
         whistleO += `${pushN.size + customU.length}`;
         customU = `${subbasketballplayerB.size}`;
         subbasketballplayerB = new Map([[`${subbasketballplayerB.size}`, 1]]);
      if (whistleO.endsWith(whistleO)) {
         whistleO += `${2 << (Math.min(4, whistleO.length))}`;
      }
      downloaderD -= parseFloat(`${parseInt(`${orangej}`) & 1}`);


    try {

      libreactperfloggerjniS += 2 >> (Math.min(Math.abs(parseInt(`${downloaderD}`)), 2));
      const result = await wwProgress.postFinzfOrder({
        productId: parseInt(membershipSelected.productId),
        zfType: zfSelected,
      });

       let register_wR = 4.0;
       let watchnowbg1 = String.fromCharCode(104,95,56,49,95,115,116,114,116,97,103,0);
      let ajaxi = 5668811.0 <= register_wR;
      do {
         register_wR -= parseInt(`${register_wR}`) - watchnowbg1.length;
         if (ajaxi) {
            break;
         }
      } while (ajaxi && (4 == (4 * watchnowbg1.length) && (watchnowbg1.length - parseInt(`${register_wR}`)) == 4));
         watchnowbg1 += `${parseInt(`${register_wR}`) % (Math.max(3, watchnowbg1.length))}`;
      while (register_wR >= 5.86) {
         register_wR *= watchnowbg1.length;
         break;
      }
         watchnowbg1 += `${parseInt(`${register_wR}`) - 2}`;
         watchnowbg1 += "3";
      for (let d = 0; d < 1; d++) {
          let minivod1 = 2.0;
          let greytickl = String.fromCharCode(114,101,99,105,112,105,101,110,116,115,95,101,95,54,51,0);
          let clearm = 2.0;
          let combined_: Array<any> = [83, 859, 990];
         register_wR -= (greytickl == String.fromCharCode(89,0) ? parseInt(`${register_wR}`) : greytickl.length);
         minivod1 -= parseInt(`${clearm}`);
         combined_.push(combined_.length ^ 2);
      }
      small2 = `${1 + parseInt(`${register_wR}`)}`;
      console.debug("returned order data: ", result);

      orangej -= (nativee == String.fromCharCode(74,0) ? nativee.length : parseInt(`${orangej}`));

      if (result.paymentData.url) {

   if (orangej > 3.95) {
      subsd ^= nativee.length + 3;
   }
        openLink(result.paymentData.url, result.transaction_id);
      } else if (result.paymentData.html) {

   while (small2.length >= 5 || !middlew) {
      small2 += `${parseInt(`${orangej}`)}`;
      break;
   }
        wwInjury.toName('Webview', {
          params: {
            source: result.paymentData.html,
            isPayment: true,
          }
        })?.then((data) => {

      downloaderD /= Math.max(parseFloat(`${parseInt(`${libreactperfloggerjniS}`)}`), 5);
          

   let mail_ = langkey_ ? !langkey_ : langkey_;
   do {
       let incidentf = 5.0;
       let awayT: Map<any, any> = new Map([[String.fromCharCode(98,117,105,108,100,99,111,110,102,95,53,95,56,53,0),165], [String.fromCharCode(115,95,55,51,95,110,115,117,112,112,111,114,116,101,100,0),559]]);
       let analyticsD = String.fromCharCode(100,111,117,103,108,97,115,95,48,95,50,54,0);
       let graphb = String.fromCharCode(114,101,119,97,114,100,115,95,104,95,57,51,0);
      let greyo = 7403154 <= graphb.length;
      do {
          let renderr = false;
          let vietnamT = false;
          let baiduZ: Map<any, any> = new Map([[String.fromCharCode(119,101,98,112,95,110,95,49,0),399], [String.fromCharCode(121,95,51,56,95,97,105,116,101,114,0),47], [String.fromCharCode(119,95,49,49,95,109,101,109,117,116,105,108,0),898]]);
          let forwardf: Map<any, any> = new Map([[String.fromCharCode(118,95,55,53,95,117,112,108,111,97,100,115,0),true ], [String.fromCharCode(109,121,113,114,95,122,95,50,55,0),false ]]);
         graphb = `${2 - awayT.size}`;
         renderr = renderr && baiduZ.size >= 2;
         vietnamT = vietnamT || renderr;
         baiduZ = new Map([[`${forwardf.size}`, forwardf.size]]);
         if (greyo) {
            break;
         }
      } while (greyo && (analyticsD == String.fromCharCode(87,0)));
         incidentf /= Math.max(3, parseFloat(`${analyticsD.length - awayT.size}`));
          let backgroundA = String.fromCharCode(101,95,52,50,95,108,111,99,97,108,105,116,121,0);
          let casting4 = String.fromCharCode(107,95,50,52,95,109,105,112,115,102,112,117,0);
         incidentf *= parseFloat(`${2}`);
         backgroundA = `${casting4.length}`;
         casting4 = `${backgroundA.length + 1}`;
      for (let x = 0; x < 3; x++) {
          let dycreatorC = 1.0;
          let philippinesr = String.fromCharCode(117,95,52,95,101,99,116,97,110,103,108,101,0);
          let minimize4 = 2.0;
         analyticsD += `${graphb.length}`;
         dycreatorC /= Math.max(parseInt(`${minimize4}`), 2);
         philippinesr += "3";
         minimize4 -= parseInt(`${dycreatorC}`);
      }
       let telegramA = false;
       let matchv = false;
      if (!analyticsD.startsWith(`${awayT.size}`)) {
         analyticsD += `${((matchv ? 3 : 3) & parseInt(`${incidentf}`))}`;
      }
         matchv = (!telegramA ? !matchv : telegramA);
      for (let o = 0; o < 1; o++) {
          let pangleo = false;
          let mode_ = String.fromCharCode(110,111,100,101,108,97,121,95,116,95,56,54,0);
          let liver = String.fromCharCode(99,95,54,95,106,112,101,103,100,115,112,0);
          let libjsijniprofilerE: Map<any, any> = new Map([[String.fromCharCode(112,114,101,108,111,97,100,105,110,103,95,121,95,52,53,0),606], [String.fromCharCode(114,108,109,95,54,95,56,0),964]]);
          let soundF: Array<any> = [723, 268, 762];
         awayT.set(`${matchv}`, (mode_.length - (matchv ? 1 : 1)));
         pangleo = libjsijniprofilerE.size == liver.length;
         mode_ += `${3 >> (Math.min(4, Math.abs(libjsijniprofilerE.size)))}`;
         liver += `${liver.length}`;
         soundF = [((pangleo ? 5 : 1) | 3)];
      }
         awayT.set(`${telegramA}`, 3 ^ parseInt(`${incidentf}`));
         incidentf += parseFloat(`${awayT.size << (Math.min(Math.abs(2), 2))}`);
      let profileactiveL = analyticsD.length <= 7014532;
      do {
         analyticsD += "1";
         if (profileactiveL) {
            break;
         }
      } while ((!matchv) && profileactiveL);
      for (let m = 0; m < 1; m++) {
          let championZ = 3;
          let nativev = String.fromCharCode(103,95,49,48,48,95,97,114,103,120,0);
          let yellowanimationliveD = String.fromCharCode(108,95,49,52,95,111,108,100,108,105,115,116,0);
         telegramA = (71 < (nativev.length | (matchv ? nativev.length : 71)));
         championZ += yellowanimationliveD.length | championZ;
         yellowanimationliveD = `${(String.fromCharCode(57,0) == yellowanimationliveD ? yellowanimationliveD.length : championZ)}`;
      }
      langkey_ = 21 == nativee.length;
      if (mail_) {
         break;
      }
   } while (mail_ && (downloaderD == 3.30 || (downloaderD - 3.30) == 4.16));
          if (data === null) {

       let proxyr = String.fromCharCode(101,95,57,50,95,107,105,110,103,0);
         proxyr += `${proxyr.length}`;
         proxyr = `${proxyr.length * proxyr.length}`;
         proxyr += "1";
      nativee += "1";
            console.log('manual back');

   if (libfbjniq.length < 2) {
      subsd <<= Math.min(2, Math.abs(((langkey_ ? 5 : 4) | nativee.length)));
   }
            setIsLoading(false);

      nativee = `${2 % (Math.max(1, parseInt(`${orangej}`)))}`;
            setIsBtnEnable(true);

      downloaderD += parseFloat(`${parseInt(`${downloaderD}`) & nativee.length}`);
            return;
          }

          getZfStatus(result.transaction_id);

        });
      }
    } catch (error) {

      small2 += `${nativee.length - 2}`;
      console.log("error catch: ", error);

       let time_0w6 = 5;
      while ((time_0w6 >> (Math.min(Math.abs(3), 4))) <= 4 || (time_0w6 >> (Math.min(Math.abs(3), 1))) <= 3) {
         time_0w6 %= Math.max(5, 1);
         break;
      }
      while (4 <= (time_0w6 - time_0w6)) {
         time_0w6 %= Math.max(1, 4);
         break;
      }
          let lessm = String.fromCharCode(103,119,101,105,95,121,95,49,0);
          let singaporek = 5.0;
         time_0w6 ^= lessm.length << (Math.min(3, Math.abs(time_0w6)));
         lessm = `${parseInt(`${singaporek}`) / 1}`;
         singaporek *= parseFloat(`${2}`);
      orangej *= parseInt(`${downloaderD}`) >> (Math.min(Math.abs(2), 3));
      setDialogText(axiosErrorText);

   for (let o = 0; o < 1; o++) {
       let disconnectedlogoB: Map<any, any> = new Map([[String.fromCharCode(109,95,52,50,95,114,101,115,112,111,110,115,101,0),String.fromCharCode(103,101,116,110,109,115,101,100,101,99,95,101,95,54,56,0)], [String.fromCharCode(115,116,105,108,108,95,57,95,55,53,0),String.fromCharCode(115,99,111,112,101,115,95,111,95,50,50,0)], [String.fromCharCode(102,95,50,48,95,115,101,101,107,98,97,99,107,0),String.fromCharCode(105,95,52,51,95,99,111,108,108,97,112,115,101,0)]]);
      let bggradientb = disconnectedlogoB.size >= 9080621;
      do {
         disconnectedlogoB = new Map([[`${disconnectedlogoB.size}`, disconnectedlogoB.size / 1]]);
         if (bggradientb) {
            break;
         }
      } while (bggradientb && (5 == (disconnectedlogoB.size * 3)));
         disconnectedlogoB = new Map([[`${disconnectedlogoB.size}`, 3]]);
         disconnectedlogoB.set(`${disconnectedlogoB.size}`, disconnectedlogoB.size);
      orangej += (parseInt(`${downloaderD}`) - (langkey_ ? 5 : 2));
   }
      setIsDialogOpen(true);
    }
  };

  const openEmailApp = () => {
       let actionsO = false;
    let rankk = 5;
    let entryp: Map<any, any> = new Map([[String.fromCharCode(115,117,112,101,114,119,105,110,100,111,119,95,117,95,51,57,0),true ], [String.fromCharCode(110,101,103,111,116,105,97,116,105,111,110,95,52,95,49,49,0),false ], [String.fromCharCode(110,95,53,55,95,100,97,116,97,0),false ]]);
    let statisticsinactiveD: Map<any, any> = new Map([[String.fromCharCode(119,95,49,53,95,116,105,109,101,118,97,108,0),false ], [String.fromCharCode(99,111,108,108,101,99,116,111,114,95,48,95,55,50,0),true ], [String.fromCharCode(103,95,49,57,95,97,102,102,105,110,105,116,105,101,115,0),false ]]);
    let inouttargetredW = String.fromCharCode(103,95,56,50,95,104,111,115,116,102,108,97,103,115,0);
    let zoomF = 0;
    let readm: Array<any> = [String.fromCharCode(112,95,52,56,95,115,116,97,98,105,108,105,122,97,116,105,111,110,0), String.fromCharCode(103,95,48,95,112,111,110,103,0)];
    let nextz = true;
    let flipperU = 0.0;
    let completeE = true;
    let flyerU = false;
    let streamingf = 1;
    let libturbomodulejsijniR = 2.0;
    let sentryA = String.fromCharCode(116,95,52,52,95,112,117,98,101,120,112,0);
    let editz = String.fromCharCode(99,114,111,119,100,105,110,95,54,95,52,48,0);
    let layoutW = String.fromCharCode(108,95,50,50,95,117,110,97,114,99,104,105,118,101,100,0);
   for (let n = 0; n < 1; n++) {
      inouttargetredW += `${entryp.size * 1}`;
   }
       let textlayoutmanagerm = 3.0;
       let lightG = 3.0;
       let debugf = 4.0;
         textlayoutmanagerm /= Math.max(parseInt(`${lightG}`) / 2, 4);
      while (1.44 < (lightG + textlayoutmanagerm)) {
         textlayoutmanagerm *= 2;
         break;
      }
      while (4.45 < lightG) {
          let rewardvideor = 5;
          let sheetA = String.fromCharCode(119,101,108,115,101,110,99,95,51,95,51,49,0);
         lightG /= Math.max(3 | parseInt(`${debugf}`), 4);
         rewardvideor ^= sheetA.length;
         sheetA = "3";
         break;
      }
       let bootsplashR = 3.0;
      if ((bootsplashR + 4) == 4.55) {
         textlayoutmanagerm *= 3 >> (Math.min(Math.abs(parseInt(`${lightG}`)), 3));
      }
         lightG += parseInt(`${textlayoutmanagerm}`);
         textlayoutmanagerm *= 2 << (Math.min(Math.abs(parseInt(`${debugf}`)), 3));
         debugf *= 3;
         lightG -= parseInt(`${textlayoutmanagerm}`) & 2;
      nextz = (zoomF + readm.length) < 15;
      flyerU = (((nextz ? 79 : inouttargetredW.length) % (Math.max(inouttargetredW.length, 3))) == 79);
       let debugG = String.fromCharCode(112,95,51,50,95,103,101,116,112,116,114,0);
      while (debugG != String.fromCharCode(98,0) && debugG == String.fromCharCode(82,0)) {
         debugG += `${debugG.length << (Math.min(Math.abs(3), 5))}`;
         break;
      }
      while (debugG.startsWith(debugG)) {
         debugG += `${debugG.length}`;
         break;
      }
         debugG = `${debugG.length}`;
      actionsO = (statisticsinactiveD.size >> (Math.min(Math.abs(entryp.size), 1))) > 65;
       let station8: Map<any, any> = new Map([[String.fromCharCode(104,97,108,108,95,118,95,50,53,0),true ], [String.fromCharCode(112,95,55,54,95,100,101,108,111,99,97,116,101,0),true ]]);
       let confirmationJ = true;
       let catalogj = String.fromCharCode(101,95,57,54,95,109,118,104,100,0);
      let router0 = 9504915 <= station8.size;
      do {
         station8.set(`${confirmationJ}`, ((confirmationJ ? 4 : 3) - 3));
         if (router0) {
            break;
         }
      } while (router0 && (!confirmationJ));
      while (3 > (catalogj.length + 4) || 4 > (catalogj.length + station8.size)) {
          let progresss: Map<any, any> = new Map([[String.fromCharCode(114,101,103,117,108,97,116,101,95,49,95,55,51,0),false ], [String.fromCharCode(118,95,49,48,48,95,114,101,112,0),false ], [String.fromCharCode(97,95,54,50,95,115,116,97,116,115,0),false ]]);
          let orangeD = 2;
         catalogj = `${(2 << (Math.min(4, Math.abs((confirmationJ ? 2 : 3)))))}`;
         progresss = new Map([[`${progresss.size}`, 2 * orangeD]]);
         orangeD ^= progresss.size << (Math.min(3, Math.abs(orangeD)));
         break;
      }
         station8.set(`${confirmationJ}`, (String.fromCharCode(87,0) == catalogj ? catalogj.length : (confirmationJ ? 4 : 2)));
      while (!confirmationJ) {
          let jnewsshare3 = 5.0;
         station8.set(`${jnewsshare3}`, parseInt(`${jnewsshare3}`) >> (Math.min(catalogj.length, 1)));
         break;
      }
      let cornerkick6 = confirmationJ ? !confirmationJ : confirmationJ;
      do {
         confirmationJ = !confirmationJ;
         if (cornerkick6) {
            break;
         }
      } while (((4 + station8.size) > 2 && confirmationJ) && cornerkick6);
      while (station8.size >= catalogj.length) {
          let unimplementedview_ = 5.0;
          let main_lH: Array<any> = [String.fromCharCode(118,97,108,105,100,97,116,101,95,117,95,56,0), String.fromCharCode(99,111,110,115,116,114,117,99,116,111,114,109,97,103,105,99,95,115,95,50,51,0), String.fromCharCode(115,105,103,110,112,111,115,116,95,98,95,49,53,0)];
          let k_imageV = String.fromCharCode(105,110,118,105,116,101,100,95,48,95,50,56,0);
          let imagesf: Array<any> = [String.fromCharCode(109,95,52,57,95,105,103,110,111,114,105,110,103,0), String.fromCharCode(110,101,101,100,115,95,100,95,53,51,0)];
          let redirectc: Map<any, any> = new Map([[String.fromCharCode(107,95,50,51,95,100,105,115,112,97,116,99,104,101,100,0),234], [String.fromCharCode(112,95,55,51,95,111,112,97,116,111,109,0),915], [String.fromCharCode(114,95,53,51,95,117,110,112,114,101,109,117,108,116,105,112,108,121,0),770]]);
         catalogj = `${main_lH.length}`;
         unimplementedview_ -= k_imageV.length & 2;
         main_lH.push(3 * imagesf.length);
         k_imageV += `${2 << (Math.min(1, Math.abs(redirectc.size)))}`;
         imagesf = [1 / (Math.max(3, imagesf.length))];
         redirectc = new Map([[`${imagesf.length}`, 2]]);
         break;
      }
       let rewardvideo0: Array<any> = [408, 361];
       let cornerkickn = String.fromCharCode(105,109,97,103,101,114,111,116,97,116,101,95,50,95,51,55,0);
       let popupP = String.fromCharCode(101,109,105,116,95,121,95,50,49,0);
      while (confirmationJ) {
         confirmationJ = (34 >= ((confirmationJ ? 34 : catalogj.length) + catalogj.length));
         break;
      }
      zoomF %= Math.max(3 & entryp.size, 1);
   let videojs1 = flipperU <= 7013061.0;
   do {
      flipperU += readm.length ^ 1;
      if (videojs1) {
         break;
      }
   } while (videojs1 && ((4.91 / (Math.max(5, flipperU))) > 5.50 || (4.91 / (Math.max(8, flipperU))) > 4.25));
   if ((rankk & 4) >= 2 || !actionsO) {
       let libffmpegkitA = 3.0;
       let untickE = 4.0;
       let closev: Array<any> = [160, 889];
       let bgvipxvod1 = 1;
       let weibov = String.fromCharCode(97,95,55,53,95,116,121,111,101,0);
      let librrcM = bgvipxvod1 >= 8479062;
      do {
         bgvipxvod1 /= Math.max(1, parseInt(`${untickE}`));
         if (librrcM) {
            break;
         }
      } while (librrcM && (libffmpegkitA < bgvipxvod1));
          let defaultplayerimgl = false;
          let fullk: Map<any, any> = new Map([[String.fromCharCode(113,95,52,49,95,109,105,100,101,113,117,97,108,105,122,101,114,0),274], [String.fromCharCode(113,95,49,57,95,110,117,108,108,97,98,108,101,114,101,115,111,108,118,101,100,0),858]]);
          let default_a0: Map<any, any> = new Map([[String.fromCharCode(113,95,51,57,95,109,100,99,118,0),false ], [String.fromCharCode(101,120,112,108,111,100,105,110,103,95,56,95,51,56,0),false ], [String.fromCharCode(102,95,54,56,95,109,101,109,110,114,0),false ]]);
         bgvipxvod1 >>= Math.min(2, closev.length);
         defaultplayerimgl = fullk.size > 20 || default_a0.size > 20;
         fullk = new Map([[`${fullk.size}`, 3 >> (Math.min(2, Math.abs(default_a0.size)))]]);
      if ((weibov.length - 1) <= 4 && (closev.length - weibov.length) <= 1) {
         weibov = "2 * bgvipxvod1";
      }
      let libfbL = 6479478 <= bgvipxvod1;
      do {
         bgvipxvod1 /= Math.max(1, 4);
         if (libfbL) {
            break;
         }
      } while ((!closev.includes(bgvipxvod1)) && libfbL);
         libffmpegkitA -= 2 % (Math.max(5, parseInt(`${libffmpegkitA}`)));
         bgvipxvod1 *= bgvipxvod1 % (Math.max(parseInt(`${untickE}`), 7));
         weibov += `${bgvipxvod1 + closev.length}`;
          let actiony = String.fromCharCode(112,108,117,103,105,110,95,56,95,50,0);
          let middlebrightnessW = String.fromCharCode(99,105,112,104,101,114,98,121,110,105,100,95,104,95,51,50,0);
          let moonV = 0.0;
         untickE -= (middlebrightnessW == String.fromCharCode(121,0) ? parseInt(`${moonV}`) : middlebrightnessW.length);
         actiony += `${(actiony == String.fromCharCode(57,0) ? actiony.length : actiony.length)}`;
      let fullo = 7842671 <= closev.length;
      do {
         closev = [closev.length];
         if (fullo) {
            break;
         }
      } while ((bgvipxvod1 > 1) && fullo);
         closev = [2 & bgvipxvod1];
       let libreactnativejniM = 2;
       let libsgcoreB = 5;
          let pushf = 2.0;
          let pushS = 3.0;
         weibov = `${parseInt(`${untickE}`)}`;
         pushf -= parseFloat(`${parseInt(`${pushS}`)}`);
         pushS *= 1;
      if (2 > (weibov.length - 3)) {
         weibov += `${libreactnativejniM % (Math.max(8, parseInt(`${libffmpegkitA}`)))}`;
      }
      let popuph = untickE >= 9100980.0;
      do {
         untickE /= Math.max(closev.length / 3, 1);
         if (popuph) {
            break;
         }
      } while (popuph && (3.31 <= (3.57 + untickE)));
       let loadingb = String.fromCharCode(107,95,51,56,95,105,110,115,112,101,99,116,97,98,108,101,0);
      actionsO = zoomF < 68;
   }
      flyerU = entryp.get(`${flyerU}`) != null;
   for (let i = 0; i < 2; i++) {
       let penaltyz = String.fromCharCode(104,95,50,48,95,110,111,110,122,101,114,111,0);
       let executorS: Map<any, any> = new Map([[String.fromCharCode(97,110,105,109,97,116,101,95,102,95,50,48,0),759], [String.fromCharCode(107,101,121,102,114,97,109,101,95,48,95,49,56,0),864], [String.fromCharCode(98,95,56,56,95,97,97,99,101,110,99,116,97,98,0),580]]);
       let diceA = false;
       let starm = 5.0;
       let staro: Map<any, any> = new Map([[String.fromCharCode(112,95,55,55,95,116,105,116,108,101,0),false ], [String.fromCharCode(109,98,117,118,95,97,95,52,48,0),false ], [String.fromCharCode(121,95,56,57,95,99,111,110,110,101,99,116,105,111,110,99,98,0),false ]]);
         starm += penaltyz.length;
         staro = new Map([[`${staro.size}`, (staro.size << (Math.min(4, Math.abs((diceA ? 2 : 1)))))]]);
         executorS = new Map([[`${staro.size}`, 3 & staro.size]]);
         diceA = staro.size < starm;
      if (penaltyz.length > 5) {
          let dragclosed = String.fromCharCode(113,117,101,114,105,101,115,95,105,95,50,57,0);
          let reactnativeultimatelistviewZ: Array<any> = [579, 581];
          let modityN: Array<any> = [364, 109, 609];
          let valuesZ = String.fromCharCode(105,110,116,101,114,115,112,101,114,115,101,95,102,95,55,53,0);
         diceA = (staro.size / (Math.max(3, dragclosed.length))) == 51;
         dragclosed = `${reactnativeultimatelistviewZ.length & valuesZ.length}`;
         reactnativeultimatelistviewZ.push(modityN.length | valuesZ.length);
         modityN.push(modityN.length);
      }
       let libcxxcomponentsM = String.fromCharCode(100,117,114,97,116,105,111,110,115,95,56,95,55,0);
       let profileframeJ = String.fromCharCode(109,98,118,115,95,111,95,55,0);
         penaltyz = "1";
      if (executorS.get(`${starm}`) == null) {
         executorS.set(`${executorS.size}`, 2);
      }
      let libfbw = 5444443 <= profileframeJ.length;
      do {
         profileframeJ += `${1 & penaltyz.length}`;
         if (libfbw) {
            break;
         }
      } while (libfbw && (penaltyz == String.fromCharCode(111,0) || profileframeJ != String.fromCharCode(55,0)));
         starm /= Math.max(1, 2);
         staro.set(penaltyz, staro.size % (Math.max(penaltyz.length, 1)));
      while (!penaltyz.startsWith(libcxxcomponentsM)) {
          let moviesS = String.fromCharCode(105,109,112,114,101,115,115,105,111,110,95,51,95,54,56,0);
          let selectj = String.fromCharCode(121,95,50,95,112,114,101,102,101,116,99,104,101,114,0);
          let yellowd = 5.0;
         penaltyz = `${penaltyz.length}`;
         moviesS += "2";
         selectj += `${moviesS.length}`;
         yellowd += 2;
         break;
      }
      while ((penaltyz.length / (Math.max(5, starm))) <= 5.18 && (parseInt(`${starm}`) / (Math.max(4, 10))) <= 3) {
         starm /= Math.max(3 % (Math.max(4, parseInt(`${starm}`))), 4);
         break;
      }
      if (libcxxcomponentsM.includes(`${staro.size}`)) {
         staro = new Map([[`${executorS.size}`, executorS.size >> (Math.min(profileframeJ.length, 4))]]);
      }
          let pinit_tM: Array<any> = [605, 54, 374];
          let turndownu = 3.0;
          let halfK = 2.0;
         staro = new Map([[`${diceA}`, ((diceA ? 4 : 3) << (Math.min(Math.abs(parseInt(`${halfK}`)), 3)))]]);
         pinit_tM.push(3);
         turndownu += 2 % (Math.max(parseInt(`${turndownu}`), 6));
         halfK *= 2 << (Math.min(Math.abs(parseInt(`${turndownu}`)), 2));
      readm = [((flyerU ? 4 : 4) / (Math.max(parseInt(`${starm}`), 3)))];
   }
      actionsO = null == statisticsinactiveD.get(`${zoomF}`);
   if (actionsO && !nextz) {
      actionsO = readm.includes(flipperU);
   }
   while (completeE) {
       let rncoree: Array<any> = [89, 381, 414];
       let sliderb: Array<any> = [711, 852, 946];
         rncoree = [sliderb.length];
      if (3 >= rncoree.length) {
          let gradlewT: Array<any> = [String.fromCharCode(109,105,112,115,95,99,95,49,53,0), String.fromCharCode(98,95,56,95,105,115,109,108,0)];
          let paginationW = 4.0;
         rncoree.push(parseInt(`${paginationW}`));
         gradlewT = [1];
         paginationW *= 2;
      }
          let chat0 = String.fromCharCode(107,95,56,52,95,98,97,99,107,103,114,111,117,110,100,115,0);
          let libyogan = String.fromCharCode(99,104,101,99,107,109,109,95,105,95,49,55,0);
          let tempZ = String.fromCharCode(103,95,51,50,95,104,117,102,102,109,97,110,0);
         rncoree.push((String.fromCharCode(51,0) == chat0 ? rncoree.length : chat0.length));
         libyogan = `${libyogan.length}`;
         tempZ += `${tempZ.length}`;
         sliderb.push(sliderb.length * 2);
      let members = rncoree.length <= 9818817;
      do {
         rncoree.push(3 / (Math.max(10, rncoree.length)));
         if (members) {
            break;
         }
      } while (((2 >> (Math.min(2, sliderb.length))) > 3) && members);
      let uinit_pk = 8010650 <= rncoree.length;
      do {
         rncoree.push(1 + rncoree.length);
         if (uinit_pk) {
            break;
         }
      } while ((4 >= (rncoree.length ^ 4) && 4 >= (sliderb.length ^ rncoree.length)) && uinit_pk);
      completeE = 33.62 < libturbomodulejsijniR;
      break;
   }
       let binddatasK: Map<any, any> = new Map([[String.fromCharCode(118,95,53,57,95,115,101,112,97,114,97,116,101,0),String.fromCharCode(119,95,55,52,95,115,116,97,103,101,0)], [String.fromCharCode(109,95,56,49,95,108,111,119,99,111,109,112,0),String.fromCharCode(102,109,105,120,95,111,95,49,0)]]);
       let bottomJ = String.fromCharCode(98,97,110,110,101,100,95,100,95,50,52,0);
      let teamdetailsbgk = 6222216 <= bottomJ.length;
      do {
         bottomJ += `${1 << (Math.min(5, Math.abs(binddatasK.size)))}`;
         if (teamdetailsbgk) {
            break;
         }
      } while (teamdetailsbgk && (5 <= (binddatasK.size & 2) && (bottomJ.length & binddatasK.size) <= 2));
      for (let f = 0; f < 1; f++) {
          let favoriteB = 1;
          let disconnectedlogo7 = String.fromCharCode(100,109,105,120,95,108,95,51,52,0);
         bottomJ += `${binddatasK.size}`;
         favoriteB *= favoriteB;
         disconnectedlogo7 = `${2 - disconnectedlogo7.length}`;
      }
      for (let j = 0; j < 1; j++) {
          let animationb = String.fromCharCode(98,95,52,50,95,101,120,116,101,116,110,100,101,100,0);
          let viewss = String.fromCharCode(116,111,117,116,95,49,95,51,50,0);
          let dataM = 3.0;
          let buildQ: Map<any, any> = new Map([[String.fromCharCode(100,95,50,55,0),438], [String.fromCharCode(100,95,54,51,95,109,98,112,97,105,114,0),421], [String.fromCharCode(100,101,99,111,100,101,114,95,50,95,49,54,0),54]]);
         bottomJ = `${2 / (Math.max(10, viewss.length))}`;
         animationb += `${animationb.length << (Math.min(Math.abs(2), 4))}`;
         viewss = `${(animationb == String.fromCharCode(78,0) ? parseInt(`${dataM}`) : animationb.length)}`;
         dataM += 2;
         buildQ = new Map([[`${buildQ.size}`, parseInt(`${dataM}`) & 1]]);
      }
      let backicon7 = bottomJ == String.fromCharCode(99,99,56,115,106,99,53,52,0);
      do {
          let downloadingW = 5.0;
          let root4 = String.fromCharCode(103,95,50,95,99,104,97,114,115,0);
          let libavdeviceK: Array<any> = [586, 233, 475];
         bottomJ = "3";
         downloadingW /= Math.max(1, 2);
         root4 = `${libavdeviceK.length | parseInt(`${downloadingW}`)}`;
         libavdeviceK = [root4.length];
         if (backicon7) {
            break;
         }
      } while (backicon7 && (!bottomJ.includes(`${binddatasK.size}`)));
      while (5 < (binddatasK.size - bottomJ.length) && (5 - bottomJ.length) < 3) {
         binddatasK.set(`${bottomJ}`, bottomJ.length);
         break;
      }
       let playC = 4;
       let turnj = 3;
      completeE = 32 < zoomF;
   for (let f = 0; f < 3; f++) {
      entryp.set(inouttargetredW, ((actionsO ? 5 : 1) ^ inouttargetredW.length));
   }
   if (5.20 > (streamingf / (Math.max(7, flipperU))) && (3 & streamingf) > 5) {
      flipperU *= parseInt(`${libturbomodulejsijniR}`) << (Math.min(Math.abs(entryp.size), 5));
   }
       let c_managerl = String.fromCharCode(119,104,101,101,108,95,105,95,52,49,0);
       let actions_ = String.fromCharCode(98,117,102,102,101,114,101,100,95,116,95,53,51,0);
          let specA: Map<any, any> = new Map([[String.fromCharCode(102,116,118,102,111,108,100,101,114,99,108,111,115,101,100,95,100,95,50,51,0),683], [String.fromCharCode(112,111,121,116,109,95,54,95,57,54,0),801], [String.fromCharCode(122,95,50,48,95,115,111,97,99,99,101,112,116,0),350]]);
         actions_ = `${c_managerl.length}`;
         specA.set(`${specA.size}`, specA.size & specA.size);
          let temperatureY = String.fromCharCode(101,95,55,48,95,104,105,103,104,108,105,103,104,116,0);
         actions_ = `${temperatureY.length >> (Math.min(Math.abs(1), 1))}`;
      let description_vf = c_managerl == String.fromCharCode(49,115,119,102,101,122,117,116,51,0);
      do {
         c_managerl = `${3 / (Math.max(6, actions_.length))}`;
         if (description_vf) {
            break;
         }
      } while (description_vf && (actions_.length <= 4));
      if (actions_.length > c_managerl.length) {
          let macauN = String.fromCharCode(110,95,50,56,95,118,101,110,100,111,114,0);
          let foregroundX = String.fromCharCode(113,100,109,100,97,116,97,95,99,95,52,55,0);
          let thumbnail6 = 5.0;
          let photoC: Array<any> = [363, 778];
          let taiwanD: Array<any> = [612, 883, 334];
         c_managerl += `${photoC.length}`;
         macauN += `${foregroundX.length + macauN.length}`;
         foregroundX = `${macauN.length}`;
         thumbnail6 /= Math.max(3, parseFloat(`${taiwanD.length / (Math.max(foregroundX.length, 4))}`));
         photoC.push(macauN.length);
         taiwanD.push(1 ^ parseInt(`${thumbnail6}`));
      }
      for (let s = 0; s < 2; s++) {
         c_managerl += `${(String.fromCharCode(70,0) == c_managerl ? actions_.length : c_managerl.length)}`;
      }
      for (let g = 0; g < 1; g++) {
         c_managerl += "1";
      }
      actionsO = (statisticsinactiveD.size + parseInt(`${flipperU}`)) == 95;
      zoomF *= parseInt(`${libturbomodulejsijniR}`);
   let backwardU = inouttargetredW.length <= 6411584;
   do {
      inouttargetredW += `${entryp.size}`;
      if (backwardU) {
         break;
      }
   } while (backwardU && ((inouttargetredW.length * 4) == 5 && (inouttargetredW.length * entryp.size) == 4));
   while (!flyerU) {
      flyerU = flipperU == libturbomodulejsijniR;
      break;
   }
       let disconnectedlogoJ: Map<any, any> = new Map([[String.fromCharCode(114,95,54,54,95,119,101,108,99,104,0),945], [String.fromCharCode(114,101,103,105,111,110,95,120,95,55,55,0),520], [String.fromCharCode(105,110,103,114,101,115,115,95,50,95,52,49,0),628]]);
       let libreactnativeblobj = 0.0;
       let main_v2 = String.fromCharCode(109,105,114,114,111,114,105,110,103,95,51,95,52,52,0);
      while (parseInt(`${libreactnativeblobj}`) <= disconnectedlogoJ.size) {
         libreactnativeblobj -= parseFloat(`${main_v2.length}`);
         break;
      }
       let sigmobw: Map<any, any> = new Map([[String.fromCharCode(109,105,115,99,95,118,95,53,51,0),21], [String.fromCharCode(103,95,55,49,95,100,111,117,98,108,101,115,0),818], [String.fromCharCode(97,110,99,104,111,114,95,114,95,52,51,0),759]]);
       let umeng6: Array<any> = [454, 756];
         umeng6.push(sigmobw.size);
          let largebrightnessC = String.fromCharCode(108,97,114,103,101,115,116,95,109,95,54,48,0);
         umeng6 = [1];
         largebrightnessC += `${largebrightnessC.length}`;
       let pressure2 = 4.0;
      if (!main_v2.endsWith(`${disconnectedlogoJ.size}`)) {
         main_v2 = `${sigmobw.size >> (Math.min(main_v2.length, 1))}`;
      }
         umeng6.push(parseInt(`${libreactnativeblobj}`));
         libreactnativeblobj *= parseFloat(`${3}`);
      flipperU /= Math.max(4, main_v2.length);
   let selectionM = flyerU ? !flyerU : flyerU;
   do {
       let gemfile2 = 2.0;
       let config5 = 0.0;
       let selectP = String.fromCharCode(116,95,53,95,97,99,116,117,97,108,105,122,101,100,0);
          let sportP = 3.0;
          let defaultplayerimgC = String.fromCharCode(104,95,51,49,95,120,99,108,105,0);
         gemfile2 -= 2;
         sportP -= parseFloat(`${defaultplayerimgC.length << (Math.min(3, Math.abs(parseInt(`${sportP}`))))}`);
         defaultplayerimgC += `${(defaultplayerimgC == String.fromCharCode(83,0) ? parseInt(`${sportP}`) : defaultplayerimgC.length)}`;
      for (let r = 0; r < 2; r++) {
         config5 += selectP.length;
      }
      for (let n = 0; n < 3; n++) {
         selectP = `${parseInt(`${config5}`) >> (Math.min(selectP.length, 4))}`;
      }
      if (1 < (selectP.length * 5) && 1 < (5 / (Math.max(6, selectP.length)))) {
         config5 -= 2 | selectP.length;
      }
         selectP += "2";
      while (1.22 < (selectP.length - config5)) {
         config5 -= parseInt(`${gemfile2}`);
         break;
      }
      let pingX = 8836362.0 <= config5;
      do {
          let playercommonD = String.fromCharCode(113,95,52,54,95,114,101,113,117,101,115,116,101,114,115,0);
          let favoriteg: Array<any> = [287, 48, 675];
          let videojsn = 3.0;
          let emojin = String.fromCharCode(122,95,55,53,95,122,108,105,98,112,114,105,109,101,0);
         config5 /= Math.max(5, emojin.length);
         playercommonD += `${2 - parseInt(`${videojsn}`)}`;
         favoriteg.push(favoriteg.length | 2);
         videojsn -= 2 * favoriteg.length;
         emojin += `${favoriteg.length ^ playercommonD.length}`;
         if (pingX) {
            break;
         }
      } while (pingX && ((3 * selectP.length) > 4 && 3 > (selectP.length + parseInt(`${config5}`))));
         gemfile2 *= selectP.length;
         selectP += `${parseInt(`${gemfile2}`)}`;
      flyerU = rankk <= 87;
      if (selectionM) {
         break;
      }
   } while ((flyerU || 2.5 > (flipperU * 4.48)) && selectionM);
   while (4 > (3 & readm.length) && readm.length > 3) {
      readm = [parseInt(`${flipperU}`) - 2];
      break;
   }
       let iconwechata = String.fromCharCode(110,95,49,48,95,114,102,116,98,115,117,98,0);
       let dialogq: Array<any> = [String.fromCharCode(97,108,109,111,115,116,95,120,95,48,0), String.fromCharCode(112,95,54,48,95,111,110,101,116,105,109,101,97,117,116,104,0), String.fromCharCode(111,95,55,57,95,115,101,116,102,105,101,108,100,0)];
       let tailT = true;
      while (tailT) {
         dialogq = [dialogq.length];
         break;
      }
      while (!iconwechata.includes(`${tailT}`)) {
         iconwechata = `${(iconwechata.length ^ (tailT ? 3 : 3))}`;
         break;
      }
      while (1 > (2 + iconwechata.length)) {
         dialogq = [2];
         break;
      }
       let backward7 = 0.0;
       let about3 = 1;
       let l_playery = 4;
      while (1 <= (dialogq.length - iconwechata.length) && (iconwechata.length - 1) <= 5) {
          let iconsaveimagea = 4.0;
          let fully = String.fromCharCode(114,101,108,111,99,107,95,99,95,51,51,0);
          let trophyL = String.fromCharCode(112,111,115,101,115,95,99,95,57,50,0);
          let appsA = String.fromCharCode(119,97,118,112,97,99,107,95,111,95,53,0);
          let dplusS = String.fromCharCode(106,95,55,55,95,99,97,117,115,101,0);
         dialogq = [(String.fromCharCode(90,0) == trophyL ? (tailT ? 1 : 1) : trophyL.length)];
         iconsaveimagea /= Math.max(2, fully.length - parseInt(`${iconsaveimagea}`));
         fully = `${(appsA == String.fromCharCode(122,0) ? parseInt(`${iconsaveimagea}`) : appsA.length)}`;
         dplusS = `${(String.fromCharCode(99,0) == dplusS ? dplusS.length : appsA.length)}`;
         break;
      }
         tailT = l_playery > 70;
          let launchI = String.fromCharCode(112,95,52,55,95,117,115,116,111,109,0);
          let selection9 = String.fromCharCode(110,95,52,48,95,115,117,98,106,111,117,114,110,97,108,0);
         about3 += 2 + selection9.length;
         launchI = `${3 * launchI.length}`;
         selection9 = `${launchI.length}`;
          let bootc = true;
         l_playery += parseInt(`${backward7}`);
         bootc = (!bootc ? bootc : !bootc);
      completeE = !actionsO && completeE;
      statisticsinactiveD.set(`${completeE}`, (String.fromCharCode(114,0) == inouttargetredW ? (completeE ? 4 : 2) : inouttargetredW.length));

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
          modalPresentationStyle: "telegramBridgeTick",
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
       let backgroundW: Array<any> = [118, 199, 196];
    let scoreZ = 2;
    let abidetectU: Array<any> = [294, 862, 263];
    let filedB = 3.0;
    let d_centerW = String.fromCharCode(103,95,51,50,95,109,109,120,101,120,116,0);
    let networkU: Array<any> = [788, 379, 959];
    let whatsappl = 0.0;
    let profileP = 3.0;
    let less5 = 2.0;
    let uimanagers = String.fromCharCode(114,101,113,117,101,115,116,115,95,104,95,56,48,0);
    let xadsdk7 = String.fromCharCode(122,95,51,56,95,113,117,97,110,116,105,122,101,100,0);
    let whistleW = String.fromCharCode(111,95,54,50,95,103,101,116,115,103,110,99,116,120,110,111,0);
    let nativeS = 0;
   if (xadsdk7.includes(d_centerW)) {
      xadsdk7 += `${scoreZ % 3}`;
   }
   let clock8 = backgroundW.length <= 6603498;
   do {
       let filedf: Array<any> = [403, 217];
      if (5 >= (filedf.length | 5)) {
         filedf.push(filedf.length >> (Math.min(filedf.length, 3)));
      }
          let progressl = 3.0;
          let moony = String.fromCharCode(115,95,57,50,95,99,111,118,97,108,101,110,116,0);
          let downloading4 = 1.0;
         filedf = [moony.length & filedf.length];
         progressl -= 2 | parseInt(`${progressl}`);
         moony = "3";
         downloading4 /= Math.max(3, parseInt(`${progressl}`));
      let hiad9 = filedf.length <= 6724357;
      do {
         filedf = [filedf.length];
         if (hiad9) {
            break;
         }
      } while ((3 > (3 & filedf.length)) && hiad9);
      backgroundW.push(abidetectU.length);
      if (clock8) {
         break;
      }
   } while (clock8 && ((parseInt(`${profileP}`) * backgroundW.length) == 1));
       let shrink6 = String.fromCharCode(109,105,103,114,97,116,105,111,110,95,100,95,49,52,0);
       let c_hashH = 3;
          let t_titleK = String.fromCharCode(116,97,110,95,106,95,56,52,0);
         shrink6 = `${c_hashH / (Math.max(t_titleK.length, 2))}`;
          let tooltips9 = String.fromCharCode(112,95,52,50,95,97,110,103,108,101,115,0);
          let runtimer = 1;
          let telegramX = 5;
         c_hashH |= shrink6.length & 2;
         tooltips9 += `${3 & tooltips9.length}`;
         runtimer |= telegramX;
          let fcdaebecbcbafcdfceaaeccfeacdbO = 3.0;
          let stylesP = String.fromCharCode(116,95,52,53,95,97,114,103,0);
         c_hashH &= parseInt(`${fcdaebecbcbafcdfceaaeccfeacdbO}`) % 3;
         fcdaebecbcbafcdfceaaeccfeacdbO += parseFloat(`${2 - stylesP.length}`);
         stylesP += "1";
      while ((c_hashH - shrink6.length) == 3 && 2 == (c_hashH - 3)) {
          let hoverl = String.fromCharCode(99,99,105,112,95,52,95,54,50,0);
         c_hashH %= Math.max(2, 5);
         hoverl += `${hoverl.length / 1}`;
         break;
      }
       let found4 = String.fromCharCode(115,115,108,114,111,111,116,115,95,51,95,56,53,0);
       let completew = String.fromCharCode(120,95,52,56,95,112,114,111,112,111,114,116,105,111,110,0);
      while (2 < (completew.length / (Math.max(9, c_hashH))) && 2 < (completew.length / (Math.max(5, c_hashH)))) {
          let champion_: Map<any, any> = new Map([[String.fromCharCode(97,95,51,48,95,115,108,111,119,100,111,119,110,0),String.fromCharCode(120,105,112,104,95,100,95,50,55,0)], [String.fromCharCode(98,95,53,56,95,101,120,116,101,110,100,105,110,103,0),String.fromCharCode(111,95,55,52,95,116,101,114,109,105,110,97,116,105,110,103,0)]]);
         completew = "1";
         champion_ = new Map([[`${champion_.size}`, champion_.size * champion_.size]]);
         break;
      }
      scoreZ /= Math.max(1, parseInt(`${filedB}`));
   let small4 = xadsdk7.length >= 5509702;
   do {
       let orangeq: Array<any> = [710, 221];
       let release_lsA = String.fromCharCode(115,105,103,95,111,95,52,52,0);
       let next0 = true;
       let teamdetailsbgk = String.fromCharCode(98,114,101,97,107,95,55,95,49,52,0);
         release_lsA = `${release_lsA.length}`;
          let agreementX = 5.0;
          let rncorew = String.fromCharCode(116,95,52,49,95,102,114,97,103,109,101,110,116,115,0);
          let time_gdB: Map<any, any> = new Map([[String.fromCharCode(122,95,52,95,115,116,101,110,99,105,108,0),554], [String.fromCharCode(115,111,114,101,99,101,105,118,101,95,115,95,55,56,0),561]]);
         orangeq.push(3 - orangeq.length);
         agreementX *= parseInt(`${agreementX}`);
         rncorew = `${rncorew.length}`;
         time_gdB.set(`${agreementX}`, 1);
          let currentD = String.fromCharCode(103,95,50,48,95,112,108,97,121,97,98,108,101,0);
         release_lsA += `${(release_lsA == String.fromCharCode(110,0) ? teamdetailsbgk.length : release_lsA.length)}`;
         currentD = `${currentD.length << (Math.min(Math.abs(1), 4))}`;
      if (1 == release_lsA.length || teamdetailsbgk != String.fromCharCode(97,0)) {
          let unfillC = String.fromCharCode(115,101,116,102,105,101,108,100,95,107,95,51,49,0);
          let taiwanQ: Map<any, any> = new Map([[String.fromCharCode(106,95,55,56,95,114,101,99,117,114,115,105,118,101,108,121,0),true ], [String.fromCharCode(109,101,109,99,109,112,95,109,95,51,55,0),true ], [String.fromCharCode(115,112,108,105,99,101,95,101,95,54,50,0),true ]]);
          let schedule2: Array<any> = [361, 884];
          let modelc: Array<any> = [971, 421, 678];
          let chatv: Array<any> = [820, 300];
         teamdetailsbgk += `${orangeq.length}`;
         unfillC = `${taiwanQ.size + 3}`;
         taiwanQ.set(`${schedule2.length}`, 3);
         schedule2.push(3);
         modelc = [1 ^ chatv.length];
         chatv = [unfillC.length];
      }
         next0 = teamdetailsbgk.length > 79;
      let stepC = teamdetailsbgk == String.fromCharCode(100,112,116,56,49,103,114,105,0);
      do {
         teamdetailsbgk += `${teamdetailsbgk.length >> (Math.min(1, orangeq.length))}`;
         if (stepC) {
            break;
         }
      } while (((1 | teamdetailsbgk.length) < 2 || (1 | orangeq.length) < 4) && stepC);
         teamdetailsbgk += `${((next0 ? 5 : 3) >> (Math.min(teamdetailsbgk.length, 4)))}`;
         release_lsA += `${(release_lsA == String.fromCharCode(68,0) ? release_lsA.length : orangeq.length)}`;
         orangeq = [(3 << (Math.min(4, Math.abs((next0 ? 5 : 3)))))];
         teamdetailsbgk = `${(teamdetailsbgk == String.fromCharCode(98,0) ? orangeq.length : teamdetailsbgk.length)}`;
         release_lsA = "1";
         release_lsA = "3";
      xadsdk7 += `${release_lsA.length}`;
      if (small4) {
         break;
      }
   } while ((xadsdk7.startsWith(`${abidetectU.length}`)) && small4);
   for (let i = 0; i < 3; i++) {
       let z_playerc = false;
       let pointu = String.fromCharCode(100,117,112,108,101,120,95,52,95,57,57,0);
       let promotionq = 3;
       let bggradientn = String.fromCharCode(119,97,118,112,97,99,107,101,110,99,95,97,95,54,48,0);
      let photo2 = pointu == String.fromCharCode(48,48,53,102,119,0);
      do {
         pointu += `${promotionq}`;
         if (photo2) {
            break;
         }
      } while ((2 == pointu.length) && photo2);
         z_playerc = bggradientn.startsWith(`${promotionq}`);
      while (!pointu.endsWith(`${z_playerc}`)) {
         z_playerc = (promotionq ^ bggradientn.length) > 42;
         break;
      }
         pointu += `${pointu.length * 1}`;
       let catalogd: Array<any> = [274, 352];
       let floaterh: Array<any> = [740, 191, 421];
      while ((promotionq | 4) >= 2 || 1 >= (pointu.length | 4)) {
         promotionq *= (String.fromCharCode(119,0) == bggradientn ? bggradientn.length : (z_playerc ? 3 : 1));
         break;
      }
          let moder = 5.0;
          let eyeopenP = 0;
         bggradientn += `${catalogd.length % (Math.max(9, promotionq))}`;
         moder -= parseFloat(`${parseInt(`${moder}`)}`);
         eyeopenP -= 1 << (Math.min(Math.abs(eyeopenP), 5));
      let arrowupu = 6597747 >= catalogd.length;
      do {
          let typing9 = 4.0;
          let libreanimatedD = 0.0;
          let gifgoals = String.fromCharCode(117,110,101,110,99,114,121,112,116,101,100,95,105,95,56,50,0);
         catalogd.push(promotionq);
         typing9 -= gifgoals.length - parseInt(`${typing9}`);
         libreanimatedD *= 2 | parseInt(`${typing9}`);
         gifgoals = `${parseInt(`${typing9}`)}`;
         if (arrowupu) {
            break;
         }
      } while ((1 <= (3 ^ catalogd.length)) && arrowupu);
         pointu += `${floaterh.length}`;
          let store1: Array<any> = [String.fromCharCode(116,97,105,108,95,54,95,57,51,0), String.fromCharCode(115,117,98,112,105,120,101,108,95,113,95,51,55,0), String.fromCharCode(122,97,108,108,111,99,95,53,95,53,49,0)];
         bggradientn = `${floaterh.length}`;
         store1 = [store1.length + store1.length];
          let typingS: Map<any, any> = new Map([[String.fromCharCode(97,95,49,52,95,116,101,115,116,99,111,110,102,105,103,0),false ], [String.fromCharCode(100,101,115,101,108,101,99,116,101,100,95,49,95,53,54,0),false ], [String.fromCharCode(98,95,52,56,95,117,112,108,105,110,107,0),false ]]);
          let giftbutton4: Array<any> = [String.fromCharCode(115,95,55,54,95,99,114,111,119,100,105,110,0), String.fromCharCode(102,111,110,116,115,95,100,95,52,52,0), String.fromCharCode(101,95,57,54,95,101,114,105,97,108,105,122,97,116,105,111,110,0)];
         promotionq ^= typingS.size;
         typingS.set(`${giftbutton4.length}`, giftbutton4.length & giftbutton4.length);
      while (1 > (bggradientn.length + catalogd.length) && 4 > (1 + catalogd.length)) {
         bggradientn = `${pointu.length}`;
         break;
      }
      xadsdk7 = `${promotionq / (Math.max(scoreZ, 3))}`;
   }
      filedB *= 3 + xadsdk7.length;
      uimanagers += `${xadsdk7.length}`;
       let penaltyE = 3.0;
       let time_jr = true;
      let mbridgel = 8465533.0 >= penaltyE;
      do {
         penaltyE *= parseInt(`${penaltyE}`) % 3;
         if (mbridgel) {
            break;
         }
      } while (mbridgel && (time_jr));
         time_jr = penaltyE <= 19.4 && time_jr;
         penaltyE *= 1 / (Math.max(2, parseInt(`${penaltyE}`)));
      while (penaltyE > 4.99) {
         penaltyE -= parseInt(`${penaltyE}`) | 3;
         break;
      }
         time_jr = 12.35 >= penaltyE;
      let vertical5 = penaltyE >= 8699437.0;
      do {
         penaltyE /= Math.max(((time_jr ? 1 : 5) << (Math.min(Math.abs(parseInt(`${penaltyE}`)), 2))), 2);
         if (vertical5) {
            break;
         }
      } while (vertical5 && (3.40 > penaltyE && (penaltyE / (Math.max(3.40, 5))) > 3.39));
      d_centerW += `${scoreZ >> (Math.min(4, Math.abs(2)))}`;
   for (let z = 0; z < 2; z++) {
      profileP /= Math.max(parseFloat(`${parseInt(`${profileP}`) >> (Math.min(4, Math.abs(2)))}`), 2);
   }
       let clubL = 2;
       let sinit_zN = 2;
          let line3 = 3;
         sinit_zN /= Math.max(sinit_zN | 1, 2);
         line3 <<= Math.min(Math.abs(2 * line3), 4);
      let canvasl = 6009265 >= clubL;
      do {
         clubL ^= sinit_zN - 1;
         if (canvasl) {
            break;
         }
      } while (((4 + sinit_zN) == 5) && canvasl);
      let floater0 = 8676037 >= sinit_zN;
      do {
         sinit_zN %= Math.max(2, sinit_zN + 2);
         if (floater0) {
            break;
         }
      } while (((clubL * sinit_zN) == 3 && (3 * clubL) == 1) && floater0);
      if (1 <= (5 / (Math.max(5, sinit_zN)))) {
         clubL /= Math.max(3, sinit_zN);
      }
         sinit_zN |= clubL;
      if (2 == (sinit_zN - 5) || 5 == (clubL - sinit_zN)) {
         sinit_zN /= Math.max(clubL, 5);
      }
      whatsappl += parseFloat(`${1}`);
   let langg = filedB >= 6889326.0;
   do {
      filedB += (String.fromCharCode(83,0) == xadsdk7 ? networkU.length : xadsdk7.length);
      if (langg) {
         break;
      }
   } while ((3 < (parseInt(`${filedB}`) + backgroundW.length) || 4 < (3 ^ backgroundW.length)) && langg);
      networkU = [networkU.length * d_centerW.length];
   for (let p = 0; p < 1; p++) {
      scoreZ -= 3 * parseInt(`${filedB}`);
   }
   if (!backgroundW.includes(profileP)) {
      profileP -= parseFloat(`${whistleW.length / (Math.max(3, 3))}`);
   }
      whatsappl -= parseFloat(`${1}`);
       let m_centerK = 0;
      while (m_centerK < m_centerK) {
         m_centerK |= m_centerK;
         break;
      }
         m_centerK <<= Math.min(Math.abs(m_centerK), 5);
         m_centerK /= Math.max(m_centerK, 4);
      scoreZ *= 3 | m_centerK;
       let gpayW = 4.0;
       let iconpipexpandA = String.fromCharCode(99,117,109,117,108,97,116,105,118,101,95,108,95,55,57,0);
      for (let w = 0; w < 2; w++) {
          let fillL: Map<any, any> = new Map([[String.fromCharCode(117,110,108,111,99,107,95,121,95,49,50,0),true ], [String.fromCharCode(110,105,115,116,110,105,100,95,107,95,49,49,0),true ], [String.fromCharCode(110,95,51,52,95,105,110,116,101,114,97,99,116,105,118,101,108,121,0),true ]]);
          let circlem = String.fromCharCode(116,95,55,54,95,109,105,115,117,115,101,0);
          let langkeyv = String.fromCharCode(98,100,108,116,95,103,95,54,0);
         gpayW += parseFloat(`${fillL.size << (Math.min(langkeyv.length, 4))}`);
         fillL = new Map([[circlem, circlem.length]]);
      }
       let downloadx: Map<any, any> = new Map([[String.fromCharCode(108,105,98,119,101,98,112,95,99,95,53,48,0),7], [String.fromCharCode(114,101,110,100,101,114,95,103,95,52,0),21], [String.fromCharCode(113,95,49,54,95,108,111,111,112,105,110,103,0),180]]);
         iconpipexpandA = `${downloadx.size}`;
      if (5.38 == (gpayW / 4.5) || (gpayW / (Math.max(parseFloat(`${iconpipexpandA.length}`), 2))) == 4.5) {
         iconpipexpandA += `${parseInt(`${gpayW}`)}`;
      }
      let downloader2 = 8431146 <= downloadx.size;
      do {
         downloadx = new Map([[`${downloadx.size}`, iconpipexpandA.length]]);
         if (downloader2) {
            break;
         }
      } while (downloader2 && ((iconpipexpandA.length % (Math.max(9, downloadx.size))) < 1 || 1 < (1 % (Math.max(1, downloadx.size)))));
      let configureF = String.fromCharCode(99,99,102,50,111,51,53,100,105,98,0) == iconpipexpandA;
      do {
          let footballfield9: Map<any, any> = new Map([[String.fromCharCode(101,95,52,50,95,100,101,99,108,0),755], [String.fromCharCode(103,95,57,56,95,101,115,115,101,110,99,101,0),719]]);
         iconpipexpandA = `${1 + downloadx.size}`;
         footballfield9.set(`${footballfield9.size}`, footballfield9.size);
         if (configureF) {
            break;
         }
      } while (configureF && (!iconpipexpandA.includes(`${downloadx.size}`)));
      backgroundW = [(String.fromCharCode(101,0) == xadsdk7 ? xadsdk7.length : scoreZ)];

              setDialogText(tryAgainDialogText);

   while (2 == (parseInt(`${filedB}`) / (Math.max(7, abidetectU.length))) || 4.91 == (filedB / 3.89)) {
       let unselectedd = 0.0;
       let auto_9at = String.fromCharCode(99,95,51,50,95,115,116,114,105,100,101,115,0);
       let tickF = String.fromCharCode(98,114,111,97,100,99,97,115,116,105,110,103,95,102,95,51,56,0);
       let videojsl = String.fromCharCode(113,95,54,53,95,98,117,102,102,101,114,115,105,110,107,0);
       let bufferY = String.fromCharCode(114,101,102,112,105,99,95,102,95,56,50,0);
       let bang3: Map<any, any> = new Map([[String.fromCharCode(99,111,110,116,97,99,116,115,95,121,95,57,53,0),948], [String.fromCharCode(116,95,52,56,95,120,97,118,115,0),908], [String.fromCharCode(102,114,97,109,101,108,101,115,115,95,109,95,50,57,0),825]]);
       let i_unlocka: Map<any, any> = new Map([[String.fromCharCode(105,112,112,108,101,95,100,95,57,52,0),526], [String.fromCharCode(110,95,57,48,95,100,111,110,101,0),59], [String.fromCharCode(97,121,98,114,105,95,113,95,53,0),555]]);
          let scrollviewF: Array<any> = [728, 131];
         videojsl += `${tickF.length}`;
         scrollviewF.push(scrollviewF.length / (Math.max(2, 5)));
          let mountingr = String.fromCharCode(100,95,56,50,95,117,110,109,105,120,0);
          let middlewarej: Array<any> = [771, 952];
         i_unlocka.set(auto_9at, (String.fromCharCode(117,0) == auto_9at ? auto_9at.length : middlewarej.length));
         mountingr = `${mountingr.length}`;
         middlewarej = [mountingr.length & 2];
          let temperatureN: Map<any, any> = new Map([[String.fromCharCode(116,117,114,98,111,106,112,101,103,95,121,95,55,0),String.fromCharCode(108,111,103,103,97,98,108,101,95,56,95,52,54,0)], [String.fromCharCode(114,95,55,50,95,118,99,114,101,97,116,101,0),String.fromCharCode(108,95,57,48,95,102,117,110,103,105,98,108,101,0)], [String.fromCharCode(104,95,55,48,95,100,101,113,117,111,116,101,0),String.fromCharCode(101,95,53,52,95,112,97,121,108,111,97,100,0)]]);
         bang3 = new Map([[tickF, tickF.length >> (Math.min(Math.abs(1), 4))]]);
         temperatureN = new Map([[`${temperatureN.size}`, temperatureN.size]]);
         auto_9at = `${i_unlocka.size * 1}`;
      for (let p = 0; p < 1; p++) {
         videojsl = `${(String.fromCharCode(84,0) == bufferY ? bang3.size : bufferY.length)}`;
      }
          let single7 = String.fromCharCode(113,95,49,56,95,115,117,98,101,120,112,0);
         unselectedd += (parseFloat(`${videojsl == String.fromCharCode(120,0) ? bufferY.length : videojsl.length}`));
         single7 = `${1 >> (Math.min(5, single7.length))}`;
         unselectedd /= Math.max(parseFloat(`${auto_9at.length}`), 2);
       let profileinactivee = String.fromCharCode(116,104,114,101,97,100,115,97,102,101,95,111,95,57,49,0);
       let otherT = String.fromCharCode(108,97,118,102,105,95,107,95,57,54,0);
      let predictionbannersharedD = 8448889 >= i_unlocka.size;
      do {
         i_unlocka = new Map([[bufferY, bufferY.length >> (Math.min(Math.abs(3), 4))]]);
         if (predictionbannersharedD) {
            break;
         }
      } while (((otherT.length >> (Math.min(Math.abs(3), 2))) >= 1 && (otherT.length >> (Math.min(4, Math.abs(i_unlocka.size)))) >= 3) && predictionbannersharedD);
      for (let n = 0; n < 3; n++) {
         profileinactivee += `${1 >> (Math.min(1, bufferY.length))}`;
      }
       let fill1: Map<any, any> = new Map([[String.fromCharCode(112,114,111,102,105,108,101,95,113,95,52,0),false ], [String.fromCharCode(112,101,101,114,99,111,110,110,101,99,116,105,111,110,105,110,116,101,114,102,97,99,101,95,54,95,51,56,0),true ], [String.fromCharCode(102,111,99,117,115,97,98,108,101,95,54,95,57,55,0),true ]]);
      if (5 > bang3.size) {
         bang3 = new Map([[profileinactivee, profileinactivee.length]]);
      }
         videojsl += `${i_unlocka.size & 1}`;
         profileinactivee += "1";
      filedB *= 2;
      break;
   }
   for (let e = 0; e < 3; e++) {
       let countryG = false;
       let networkM = String.fromCharCode(104,101,108,112,101,114,115,95,118,95,50,50,0);
       let lightX = String.fromCharCode(99,112,105,97,95,117,95,55,55,0);
       let vietnams: Array<any> = [468, 382];
          let bellQ = 0;
          let gradlewF = String.fromCharCode(103,95,50,52,95,118,97,110,99,0);
         networkM = "3";
         bellQ ^= 3 & gradlewF.length;
         gradlewF += `${bellQ + 3}`;
         lightX += `${vietnams.length ^ networkM.length}`;
         lightX += `${(vietnams.length / (Math.max(7, (countryG ? 5 : 5))))}`;
      for (let p = 0; p < 1; p++) {
         lightX = `${3 & vietnams.length}`;
      }
          let plus8 = 0.0;
          let awayteamfieldm = 3.0;
          let fastforwardP = String.fromCharCode(98,108,111,99,107,100,99,95,114,95,56,52,0);
         lightX += `${vietnams.length}`;
         plus8 += (parseFloat(`${String.fromCharCode(83,0) == fastforwardP ? fastforwardP.length : parseInt(`${awayteamfieldm}`)}`));
         awayteamfieldm -= parseFloat(`${fastforwardP.length}`);
          let chatn = String.fromCharCode(122,95,49,54,95,101,115,116,105,109,97,116,101,115,0);
          let reviewG = 3.0;
          let privilege3 = 1.0;
         lightX = `${lightX.length - parseInt(`${reviewG}`)}`;
         chatn += `${parseInt(`${privilege3}`)}`;
         reviewG /= Math.max(2, parseFloat(`${1 ^ parseInt(`${privilege3}`)}`));
         lightX = `${((countryG ? 2 : 3) ^ 2)}`;
          let gifgoalbgg = true;
         vietnams = [1];
         gifgoalbgg = !gifgoalbgg || gifgoalbgg;
       let oinit_xzf = String.fromCharCode(106,95,54,50,95,116,114,97,110,115,108,105,116,101,114,97,116,101,100,0);
       let leaguez = String.fromCharCode(112,101,101,108,111,102,102,95,114,95,51,54,0);
         vietnams = [oinit_xzf.length | lightX.length];
      if (2 == leaguez.length) {
          let downarrowb = String.fromCharCode(104,97,110,100,115,95,122,95,49,0);
          let backwardy = false;
          let toponI = 3.0;
         countryG = networkM.length <= 36;
         downarrowb += `${1 & parseInt(`${toponI}`)}`;
         backwardy = !backwardy && 8.41 < toponI;
      }
         oinit_xzf += `${oinit_xzf.length}`;
      scoreZ >>= Math.min(Math.abs(parseInt(`${profileP}`)), 3);
   }
   while (5 <= whistleW.length) {
      whatsappl += parseFloat(`${whistleW.length + 3}`);
      break;
   }
   let awayteamfieldd = 7477366.0 >= whatsappl;
   do {
      whatsappl /= Math.max(1, parseFloat(`${1 / (Math.max(6, parseInt(`${less5}`)))}`));
      if (awayteamfieldd) {
         break;
      }
   } while (awayteamfieldd && (1 == (2 - scoreZ) || (whatsappl + 5.50) == 1.19));
   while (5.38 >= (5.43 * profileP) || 5.43 >= (less5 * profileP)) {
      less5 += parseFloat(`${parseInt(`${filedB}`) % (Math.max(abidetectU.length, 8))}`);
      break;
   }
      profileP /= Math.max(2, (parseFloat(`${d_centerW == String.fromCharCode(104,0) ? abidetectU.length : d_centerW.length}`)));
   for (let p = 0; p < 2; p++) {
      whatsappl *= parseFloat(`${parseInt(`${less5}`)}`);
   }
       let iconsettingr = String.fromCharCode(116,95,55,57,95,115,113,117,97,114,101,115,0);
       let iconarrowrightr = String.fromCharCode(102,95,52,55,95,100,114,97,119,117,116,105,108,115,0);
       let calendarh = String.fromCharCode(107,95,56,57,95,112,114,111,104,105,98,105,116,0);
          let unfillB = 0.0;
          let signinupF = 4;
          let reactB = 4.0;
         iconarrowrightr += `${iconsettingr.length}`;
         unfillB *= parseInt(`${reactB}`);
         signinupF |= 1;
         calendarh = `${iconsettingr.length + 1}`;
      while (!iconarrowrightr.includes(`${iconsettingr.length}`)) {
         iconsettingr = `${(String.fromCharCode(73,0) == iconarrowrightr ? iconarrowrightr.length : calendarh.length)}`;
         break;
      }
         iconsettingr = `${calendarh.length}`;
       let gmail4: Map<any, any> = new Map([[String.fromCharCode(114,101,116,114,97,110,115,109,105,116,95,48,95,49,0),749], [String.fromCharCode(102,116,118,118,101,114,116,108,105,110,101,95,116,95,54,52,0),725]]);
       let sortx: Map<any, any> = new Map([[String.fromCharCode(112,95,55,54,95,103,105,102,115,0),680], [String.fromCharCode(114,95,54,95,100,111,117,98,108,105,110,103,0),788], [String.fromCharCode(107,95,49,55,95,111,114,112,104,97,110,0),595]]);
         iconsettingr = `${iconarrowrightr.length}`;
       let private_cp: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,114,118,97,108,115,95,116,95,49,53,0),732], [String.fromCharCode(98,121,116,101,119,111,114,100,95,110,95,54,0),574], [String.fromCharCode(104,95,57,57,95,112,114,105,109,97,114,121,0),814]]);
      while (iconarrowrightr.length < 4 || calendarh != String.fromCharCode(50,0)) {
         iconarrowrightr = `${gmail4.size}`;
         break;
      }
          let mimo2 = 4;
          let loginE = false;
         sortx.set(`${mimo2}`, (String.fromCharCode(84,0) == calendarh ? mimo2 : calendarh.length));
         loginE = !loginE;
      filedB += parseInt(`${profileP}`);
   for (let t = 0; t < 3; t++) {
      scoreZ >>= Math.min(Math.abs(3), 5);
   }
      profileP /= Math.max(5, parseFloat(`${parseInt(`${filedB}`)}`));
   for (let p = 0; p < 3; p++) {
       let sortu: Array<any> = [106, 471, 343];
         sortu.push(2);
      let sourcez = sortu.length >= 8870453;
      do {
         sortu.push(sortu.length & sortu.length);
         if (sourcez) {
            break;
         }
      } while (sourcez && (!sortu.includes(sortu.length)));
          let with_tC = String.fromCharCode(108,95,51,95,114,101,113,117,105,117,114,101,115,0);
          let inviteX = String.fromCharCode(122,95,56,95,112,114,101,102,101,114,101,110,99,101,0);
         sortu = [3];
         with_tC = `${3 + with_tC.length}`;
         inviteX = `${inviteX.length}`;
      networkU = [abidetectU.length];
   }
   while (2 > (xadsdk7.length - 3)) {
      scoreZ /= Math.max(networkU.length, 3);
      break;
   }
      whatsappl /= Math.max(2, parseFloat(`${whistleW.length}`));
      backgroundW.push(parseInt(`${filedB}`) << (Math.min(1, Math.abs(3))));
      profileP /= Math.max((parseFloat(`${String.fromCharCode(88,0) == d_centerW ? parseInt(`${filedB}`) : d_centerW.length}`)), 3);
   while (5.60 >= (whatsappl + 3.99) || (3.99 + filedB) >= 1.70) {
       let topicw = String.fromCharCode(114,95,51,54,95,108,111,119,98,105,116,115,0);
       let runtimescheduler0 = String.fromCharCode(97,95,50,57,95,117,109,105,100,0);
      if (5 > topicw.length) {
         topicw = `${topicw.length << (Math.min(Math.abs(2), 3))}`;
      }
      let predictionactive0 = runtimescheduler0.length <= 7588014;
      do {
         runtimescheduler0 += `${3 - runtimescheduler0.length}`;
         if (predictionactive0) {
            break;
         }
      } while ((!topicw.endsWith(runtimescheduler0)) && predictionactive0);
          let anythink8: Array<any> = [668, 638];
          let incidentW = String.fromCharCode(104,109,104,100,95,118,95,50,55,0);
          let usernameW: Array<any> = [String.fromCharCode(110,95,50,95,115,119,97,98,0), String.fromCharCode(99,108,108,99,95,105,95,57,52,0)];
         topicw = `${runtimescheduler0.length}`;
         anythink8.push(usernameW.length >> (Math.min(5, anythink8.length)));
         incidentW += `${3 + incidentW.length}`;
         usernameW = [3];
      if (topicw == runtimescheduler0) {
          let static_8iG = true;
         runtimescheduler0 += `${((static_8iG ? 2 : 5))}`;
      }
       let floaterb = String.fromCharCode(112,97,114,97,109,101,116,101,114,115,95,113,95,56,51,0);
      let greeno = topicw.length >= 9217553;
      do {
          let privacyf = String.fromCharCode(107,95,51,55,95,99,117,114,115,111,114,115,116,114,101,97,109,119,114,97,112,112,101,114,0);
          let libpangleflippedR: Map<any, any> = new Map([[String.fromCharCode(99,111,110,116,97,105,110,97,98,108,101,95,115,95,50,53,0),959], [String.fromCharCode(109,95,57,55,95,112,114,111,102,114,101,115,115,0),942]]);
          let cornerkicku = String.fromCharCode(105,95,49,55,95,100,105,118,105,115,111,114,0);
          let unreadq = false;
         topicw += "1";
         privacyf = `${privacyf.length ^ cornerkicku.length}`;
         libpangleflippedR = new Map([[`${libpangleflippedR.size}`, 2]]);
         cornerkicku = "1";
         unreadq = privacyf.length <= libpangleflippedR.size;
         if (greeno) {
            break;
         }
      } while ((!floaterb.includes(topicw)) && greeno);
      whatsappl /= Math.max(parseFloat(`${whistleW.length}`), 5);
      break;
   }
   if (networkU.length < d_centerW.length) {
      d_centerW += `${3 % (Math.max(2, scoreZ))}`;
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
       let modulesj: Map<any, any> = new Map([[String.fromCharCode(106,95,49,54,95,104,97,115,120,0),String.fromCharCode(109,98,98,121,95,112,95,54,52,0)], [String.fromCharCode(100,114,105,118,101,95,118,95,53,57,0),String.fromCharCode(113,95,51,56,95,109,97,116,99,104,101,100,0)], [String.fromCharCode(115,99,114,101,101,110,115,104,97,114,101,95,49,95,50,0),String.fromCharCode(110,95,56,50,95,108,111,110,0)]]);
    let emptyv = 1;
    let mimo5 = String.fromCharCode(100,95,56,50,95,111,98,109,99,0);
    let mapbufferP = 1.0;
    let grayb = String.fromCharCode(105,95,54,54,95,115,116,114,105,115,116,114,0);
    let alerte = String.fromCharCode(99,114,101,97,116,101,101,120,95,48,95,51,48,0);
    let awayteamfield_ = 1.0;
    let mappings = String.fromCharCode(100,95,57,49,95,109,97,110,117,97,108,108,121,0);
    let robotoG = 1;
    let trashW: Map<any, any> = new Map([[String.fromCharCode(100,95,53,51,95,112,111,107,101,114,0),977], [String.fromCharCode(101,95,50,51,95,116,104,114,101,97,100,115,97,102,101,0),716], [String.fromCharCode(115,99,101,110,101,95,99,95,54,57,0),14]]);
   if (mapbufferP == 4.41) {
      mapbufferP += parseFloat(`${2}`);
   }
      awayteamfield_ += 1 << (Math.min(1, mimo5.length));
   for (let q = 0; q < 2; q++) {
       let inouttargetredG: Map<any, any> = new Map([[String.fromCharCode(120,95,51,50,95,113,115,118,115,99,97,108,101,0),false ], [String.fromCharCode(97,108,97,119,95,52,95,55,50,0),true ]]);
       let huaweiR = 0.0;
      while (parseFloat(`${inouttargetredG.size}`) <= huaweiR) {
         huaweiR /= Math.max(2, parseFloat(`${inouttargetredG.size & parseInt(`${huaweiR}`)}`));
         break;
      }
      while ((huaweiR * 4.87) >= 3.96 && 4.9 >= (4.87 * huaweiR)) {
         huaweiR /= Math.max(2, parseFloat(`${inouttargetredG.size}`));
         break;
      }
       let mbbanner9 = String.fromCharCode(112,111,115,116,114,111,116,97,116,101,95,118,95,50,52,0);
      for (let l = 0; l < 2; l++) {
         inouttargetredG.set(`${huaweiR}`, 3);
      }
      let arrowright2 = 5282221.0 <= huaweiR;
      do {
          let actionsm = String.fromCharCode(97,110,111,110,121,109,111,117,115,95,106,95,49,55,0);
          let r_managerA = String.fromCharCode(98,95,54,52,95,98,115,111,108,117,116,101,0);
          let commentx: Array<any> = [272, 80, 724];
          let backicon0 = String.fromCharCode(118,95,54,48,95,114,100,118,111,0);
         huaweiR += (parseFloat(`${actionsm == String.fromCharCode(115,0) ? backicon0.length : actionsm.length}`));
         r_managerA += `${r_managerA.length}`;
         commentx.push(commentx.length);
         backicon0 += "2";
         if (arrowright2) {
            break;
         }
      } while (((huaweiR + 3.10) == 2.35) && arrowright2);
       let tailM = false;
      emptyv &= (String.fromCharCode(111,0) == alerte ? alerte.length : modulesj.size);
   }
       let defaultplayerimg4 = String.fromCharCode(114,95,52,53,95,112,105,116,99,104,102,105,108,116,101,114,0);
       let phoneu = String.fromCharCode(99,117,118,105,100,95,110,95,52,48,0);
         defaultplayerimg4 += `${defaultplayerimg4.length}`;
      if (defaultplayerimg4 == String.fromCharCode(78,0) && 5 < phoneu.length) {
         phoneu += "2";
      }
      while (defaultplayerimg4.startsWith(phoneu)) {
          let store5 = String.fromCharCode(117,110,112,114,101,109,117,108,116,105,112,108,121,111,102,102,115,101,116,95,105,95,49,56,0);
          let mathY = String.fromCharCode(97,114,99,104,105,118,101,95,57,95,50,57,0);
         defaultplayerimg4 = `${mathY.length | phoneu.length}`;
         store5 += `${store5.length}`;
         mathY = `${store5.length}`;
         break;
      }
       let downarrow1 = 3;
       let libjsijniprofilerd = 0;
      let foundU = downarrow1 <= 7750300;
      do {
         downarrow1 %= Math.max(phoneu.length - downarrow1, 5);
         if (foundU) {
            break;
         }
      } while (foundU && (4 == (downarrow1 ^ libjsijniprofilerd)));
      if (5 <= phoneu.length) {
          let policyz = true;
          let foundF = 4;
         phoneu += `${phoneu.length}`;
         policyz = !policyz;
         foundF &= 1;
      }
      alerte = `${grayb.length}`;
      awayteamfield_ *= 2 ^ parseInt(`${awayteamfield_}`);
       let friendsg = String.fromCharCode(108,97,116,95,105,95,52,48,0);
       let profileframea = String.fromCharCode(116,97,100,100,95,108,95,54,51,0);
      for (let o = 0; o < 1; o++) {
         profileframea = `${1 + friendsg.length}`;
      }
      let changeF = friendsg.length <= 7534777;
      do {
         friendsg = `${profileframea.length + 1}`;
         if (changeF) {
            break;
         }
      } while (changeF && (friendsg.includes(`${profileframea.length}`)));
      let macauv = friendsg.length >= 8715284;
      do {
          let libpangleflipped8 = 5;
          let logow: Map<any, any> = new Map([[String.fromCharCode(103,95,57,51,95,99,111,110,116,114,111,108,108,101,114,115,0),376], [String.fromCharCode(118,95,51,50,95,114,101,106,101,99,116,101,100,0),745], [String.fromCharCode(116,95,54,52,95,114,111,108,101,0),977]]);
          let smallY = String.fromCharCode(111,95,54,55,95,105,110,116,101,114,114,117,112,116,101,100,0);
         friendsg += `${smallY.length}`;
         libpangleflipped8 %= Math.max(3, logow.size | 1);
         logow.set(`${libpangleflipped8}`, logow.size - libpangleflipped8);
         smallY += `${3 / (Math.max(10, libpangleflipped8))}`;
         if (macauv) {
            break;
         }
      } while ((profileframea == friendsg) && macauv);
      if (profileframea.includes(friendsg)) {
          let reactnavigation6 = String.fromCharCode(101,95,49,56,95,109,111,100,98,0);
          let mintegralz: Map<any, any> = new Map([[String.fromCharCode(116,97,110,115,105,103,95,119,95,56,53,0),String.fromCharCode(115,116,114,102,117,110,99,95,54,95,53,56,0)], [String.fromCharCode(101,95,51,56,95,99,108,117,116,0),String.fromCharCode(101,102,102,101,99,116,105,118,101,95,54,95,57,55,0)]]);
          let sourceQ = false;
         friendsg = `${1 ^ mintegralz.size}`;
         reactnavigation6 += `${reactnavigation6.length}`;
         mintegralz = new Map([[reactnavigation6, reactnavigation6.length * 3]]);
      }
      for (let z = 0; z < 1; z++) {
         profileframea = `${profileframea.length}`;
      }
         profileframea = `${3 * profileframea.length}`;
      modulesj.set(mimo5, 1 | profileframea.length);
   if (4 > (modulesj.size / (Math.max(9, alerte.length))) && 3 > (4 / (Math.max(3, modulesj.size)))) {
      alerte += `${modulesj.size >> (Math.min(1, Math.abs(parseInt(`${mapbufferP}`))))}`;
   }
   let yingk = 9833358 <= modulesj.size;
   do {
      modulesj.set(`${emptyv}`, 2);
      if (yingk) {
         break;
      }
   } while ((modulesj.get(`${awayteamfield_}`) != null) && yingk);
      awayteamfield_ /= Math.max(alerte.length % 2, 4);
      mapbufferP -= parseFloat(`${alerte.length << (Math.min(Math.abs(1), 1))}`);
   if (awayteamfield_ < 1.11) {
      awayteamfield_ -= grayb.length;
   }
   if (mimo5.includes(`${modulesj.size}`)) {
      modulesj = new Map([[`${mapbufferP}`, parseInt(`${mapbufferP}`) | grayb.length]]);
   }
       let gift0 = String.fromCharCode(112,95,49,54,95,115,112,97,99,101,100,0);
         gift0 = `${gift0.length | 2}`;
       let controlsj = 0.0;
       let reactnativejsb = 5.0;
         reactnativejsb /= Math.max(4, parseFloat(`${3 ^ gift0.length}`));
      emptyv *= (String.fromCharCode(81,0) == alerte ? alerte.length : emptyv);
   for (let m = 0; m < 1; m++) {
       let latnt = String.fromCharCode(100,95,55,57,95,114,101,103,105,115,116,114,97,110,116,0);
       let weatherf = String.fromCharCode(100,95,52,55,95,108,101,97,121,0);
      let gemfilej = String.fromCharCode(110,50,117,53,103,119,0) == latnt;
      do {
          let fullM: Array<any> = [232, 274];
          let searchbarN = String.fromCharCode(104,111,108,100,101,114,95,107,95,55,48,0);
         latnt += `${(latnt == String.fromCharCode(104,0) ? latnt.length : weatherf.length)}`;
         fullM.push(searchbarN.length / 1);
         searchbarN = `${fullM.length / (Math.max(1, searchbarN.length))}`;
         if (gemfilej) {
            break;
         }
      } while (gemfilej && (weatherf == String.fromCharCode(54,0)));
      let hooksc = weatherf.length >= 6838769;
      do {
         weatherf += `${latnt.length * 1}`;
         if (hooksc) {
            break;
         }
      } while ((4 == latnt.length) && hooksc);
          let filterM = String.fromCharCode(120,95,54,57,95,117,105,110,116,0);
          let unfillz = 4;
         latnt += `${filterM.length >> (Math.min(Math.abs(1), 2))}`;
         filterM += `${unfillz}`;
         latnt += `${latnt.length}`;
         weatherf = "2";
      while (latnt.length <= weatherf.length) {
         latnt = "3";
         break;
      }
      alerte = `${emptyv >> (Math.min(latnt.length, 2))}`;
   }
       let playercommonT = true;
       let pingu = String.fromCharCode(121,95,56,51,95,114,101,112,101,97,116,101,114,0);
       let verticalf: Map<any, any> = new Map([[String.fromCharCode(121,95,56,50,95,99,114,111,115,115,0),730], [String.fromCharCode(106,95,50,95,100,97,105,108,121,0),853], [String.fromCharCode(97,95,52,49,95,115,101,116,116,97,98,108,101,0),448]]);
          let whistleorangeu = 5.0;
          let actionQ = 5.0;
         verticalf.set(`${pingu}`, (String.fromCharCode(52,0) == pingu ? verticalf.size : pingu.length));
         whistleorangeu /= Math.max(1, 1);
         actionQ *= parseInt(`${whistleorangeu}`) % (Math.max(parseInt(`${actionQ}`), 9));
      for (let l = 0; l < 2; l++) {
         verticalf.set(`${playercommonT}`, ((playercommonT ? 3 : 3) ^ verticalf.size));
      }
      if (1 < (pingu.length ^ verticalf.size)) {
          let invite7 = String.fromCharCode(102,95,51,48,95,101,99,114,101,116,0);
          let spinnerj = String.fromCharCode(110,111,109,105,110,97,108,95,115,95,56,57,0);
          let videov: Map<any, any> = new Map([[String.fromCharCode(114,101,97,100,105,110,105,116,95,116,95,53,56,0),496], [String.fromCharCode(112,95,49,50,95,113,112,101,103,0),576]]);
          let knewinterstitialL = String.fromCharCode(107,95,57,48,95,108,110,110,105,100,0);
         pingu += `${(2 & (playercommonT ? 3 : 1))}`;
         invite7 += `${spinnerj.length - 1}`;
         spinnerj += `${videov.size}`;
         videov.set(`${invite7}`, videov.size & invite7.length);
         knewinterstitialL += "3";
      }
          let search8 = String.fromCharCode(115,116,97,114,95,122,95,53,55,0);
         verticalf.set(`${playercommonT}`, verticalf.size % 1);
         search8 += "1";
         pingu += `${(String.fromCharCode(101,0) == pingu ? verticalf.size : pingu.length)}`;
         pingu += `${pingu.length}`;
       let xvodi = String.fromCharCode(113,95,53,48,95,102,112,115,0);
       let circle9 = String.fromCharCode(104,95,54,50,95,108,111,116,116,105,101,0);
      for (let v = 0; v < 3; v++) {
         circle9 += `${(String.fromCharCode(48,0) == xvodi ? xvodi.length : circle9.length)}`;
      }
          let predictionarrow0 = String.fromCharCode(120,117,118,109,118,115,95,53,95,53,52,0);
         playercommonT = !playercommonT;
         predictionarrow0 += `${(String.fromCharCode(88,0) == predictionarrow0 ? predictionarrow0.length : predictionarrow0.length)}`;
      modulesj = new Map([[`${verticalf.size}`, emptyv]]);

      console.log("error when open link: ", error);
    }
  };

  const getZfStatus = async (transID: string) => {
    let result;

    try {
      result = await wwProgress.getFinzfTransaction({
        transactionId: transID,
      });

      if (!result) {
        throw 'not found';
      }

    } catch (e) {
       let profileframeB = 3.0;
    let submitB: Array<any> = [715, 620];
    let castg = String.fromCharCode(100,101,108,105,109,95,48,95,56,50,0);
    let xadsdk8 = 1.0;
    let switch_iz = String.fromCharCode(105,95,56,56,95,98,117,114,110,0);
    let baiduG = 1.0;
    let stringsc: Array<any> = [109, 898];
    let iconsettings = true;
    let mbnativeadvancedp = String.fromCharCode(110,95,53,50,95,119,101,108,115,0);
    let clearg = String.fromCharCode(115,95,50,55,95,100,111,119,110,108,111,97,100,115,0);
    let giflivestreamingZ = String.fromCharCode(121,95,53,54,95,115,116,114,104,97,115,104,0);
    let sourceQ = 0.0;
    let qaag5: Map<any, any> = new Map([[String.fromCharCode(118,112,97,116,104,95,112,95,53,57,0),String.fromCharCode(118,95,51,95,109,106,112,101,103,106,112,101,103,0)], [String.fromCharCode(120,95,54,57,0),String.fromCharCode(98,95,50,51,95,118,105,98,114,97,110,99,101,0)], [String.fromCharCode(116,95,50,53,95,100,97,112,112,115,0),String.fromCharCode(102,97,105,108,101,100,95,48,95,50,0)]]);
   for (let q = 0; q < 1; q++) {
      submitB.push((String.fromCharCode(77,0) == mbnativeadvancedp ? mbnativeadvancedp.length : castg.length));
   }
   let transfern = 9820567 >= switch_iz.length;
   do {
       let leagueL = String.fromCharCode(99,111,118,101,114,105,110,103,95,97,95,56,54,0);
       let scrollviewJ = String.fromCharCode(101,95,50,53,95,97,117,100,105,111,0);
      for (let d = 0; d < 2; d++) {
         leagueL += `${scrollviewJ.length / 1}`;
      }
         leagueL = `${scrollviewJ.length - 2}`;
         scrollviewJ = `${(String.fromCharCode(50,0) == scrollviewJ ? leagueL.length : scrollviewJ.length)}`;
          let common8 = String.fromCharCode(109,112,97,100,115,112,95,54,95,54,49,0);
          let core7 = false;
         scrollviewJ = "1";
         common8 = `${2 % (Math.max(10, common8.length))}`;
         core7 = (38 <= (common8.length | (core7 ? 38 : common8.length)));
          let pointF = String.fromCharCode(101,95,49,49,95,112,111,115,116,112,114,111,99,0);
          let whistleorangew = String.fromCharCode(97,95,56,54,95,97,102,102,105,110,101,0);
         scrollviewJ = `${leagueL.length}`;
         pointF = `${pointF.length}`;
         whistleorangew = `${whistleorangew.length}`;
         leagueL += `${leagueL.length % 1}`;
      switch_iz += `${parseInt(`${profileframeB}`) % 3}`;
      if (transfern) {
         break;
      }
   } while ((5 >= (1 << (Math.min(4, switch_iz.length)))) && transfern);
   let quest7 = 8908612 <= submitB.length;
   do {
      submitB.push(2);
      if (quest7) {
         break;
      }
   } while ((1 >= (parseInt(`${xadsdk8}`) - submitB.length) && (parseFloat(`${submitB.length}`) - xadsdk8) >= 4.73) && quest7);
      profileframeB /= Math.max(2, parseFloat(`${1 & parseInt(`${xadsdk8}`)}`));
      iconsettings = (submitB.length << (Math.min(castg.length, 5))) >= 57;
   if (2.48 <= (xadsdk8 - parseFloat(`${submitB.length}`)) || 4.23 <= (2.48 - xadsdk8)) {
      xadsdk8 += parseFloat(`${2 | stringsc.length}`);
   }
      xadsdk8 -= parseFloat(`${mbnativeadvancedp.length}`);
      switch_iz += "2";
      castg += `${castg.length}`;
   for (let s = 0; s < 3; s++) {
       let libruntimeexecutorj: Map<any, any> = new Map([[String.fromCharCode(102,95,57,48,95,97,100,114,109,0),false ], [String.fromCharCode(115,117,98,116,121,112,101,115,95,99,95,49,48,0),true ], [String.fromCharCode(120,121,122,116,97,98,108,101,115,95,115,95,49,57,0),false ]]);
       let indicatorX = false;
      if (3 == libruntimeexecutorj.size) {
          let iconarrowrighti: Map<any, any> = new Map([[String.fromCharCode(103,101,110,101,114,97,116,111,114,115,95,114,95,55,50,0),340], [String.fromCharCode(111,95,53,51,95,105,110,115,112,101,99,116,0),735]]);
          let injuryl = 1;
          let kuaishouk: Array<any> = [518, 940, 285];
         libruntimeexecutorj.set(`${indicatorX}`, iconarrowrighti.size);
         iconarrowrighti = new Map([[`${kuaishouk.length}`, kuaishouk.length << (Math.min(Math.abs(2), 5))]]);
         injuryl ^= 2;
      }
       let eventsplashe = true;
       let gestureM = false;
      for (let u = 0; u < 3; u++) {
         libruntimeexecutorj.set(`${eventsplashe}`, libruntimeexecutorj.size * 3);
      }
         indicatorX = libruntimeexecutorj.size <= 46 && indicatorX;
      for (let r = 0; r < 1; r++) {
         indicatorX = (eventsplashe ? gestureM : eventsplashe);
      }
         gestureM = (eventsplashe ? indicatorX : eventsplashe);
      submitB = [submitB.length % (Math.max(1, 10))];
   }
   if (!clearg.startsWith(`${baiduG}`)) {
      clearg = `${3 | parseInt(`${xadsdk8}`)}`;
   }

      setIsLoading(false);

   while ((castg.length / 5) <= 3 && (castg.length / (Math.max(4, stringsc.length))) <= 5) {
      castg = `${stringsc.length}`;
      break;
   }
   for (let r = 0; r < 1; r++) {
      baiduG /= Math.max(2, parseFloat(`${parseInt(`${xadsdk8}`)}`));
   }
      xadsdk8 += (parseFloat(`${giflivestreamingZ == String.fromCharCode(66,0) ? giflivestreamingZ.length : parseInt(`${baiduG}`)}`));
       let greyarrowup3 = 1;
      for (let s = 0; s < 2; s++) {
         greyarrowup3 >>= Math.min(1, Math.abs(1));
      }
         greyarrowup3 *= 2 ^ greyarrowup3;
       let alertm = 5;
      castg += `${greyarrowup3 / 1}`;
      xadsdk8 -= (parseFloat(`${String.fromCharCode(122,0) == giflivestreamingZ ? giflivestreamingZ.length : clearg.length}`));
      sourceQ /= Math.max(4, stringsc.length + castg.length);
   let statisticsinactiveS = castg.length <= 5754992;
   do {
      castg += "1";
      if (statisticsinactiveS) {
         break;
      }
   } while (statisticsinactiveS && (1 <= (castg.length | 3)));
      sourceQ *= giflivestreamingZ.length;
   while (2.18 >= (xadsdk8 + 5.60)) {
      castg = `${1 & parseInt(`${xadsdk8}`)}`;
      break;
   }
   let bellX = stringsc.length <= 6603188;
   do {
      stringsc.push(parseInt(`${sourceQ}`));
      if (bellX) {
         break;
      }
   } while ((xadsdk8 == parseFloat(`${stringsc.length}`)) && bellX);
      clearg = `${parseInt(`${xadsdk8}`)}`;
      setIsBtnEnable(true);

   if ((3 * stringsc.length) <= 1 && (stringsc.length * mbnativeadvancedp.length) <= 3) {
      mbnativeadvancedp = `${parseInt(`${sourceQ}`) >> (Math.min(clearg.length, 3))}`;
   }
   for (let g = 0; g < 1; g++) {
       let moon9: Map<any, any> = new Map([[String.fromCharCode(97,95,57,57,95,112,114,111,112,111,115,101,114,0),String.fromCharCode(114,95,50,50,95,109,100,99,116,0)], [String.fromCharCode(100,95,52,54,95,98,105,110,107,98,0),String.fromCharCode(114,101,108,111,97,100,101,114,95,105,95,50,51,0)], [String.fromCharCode(107,95,49,50,95,112,114,111,103,114,101,115,115,0),String.fromCharCode(115,95,57,48,95,104,97,115,104,116,97,103,0)]]);
      let appleR = 8516855 >= moon9.size;
      do {
         moon9.set(`${moon9.size}`, moon9.size << (Math.min(3, Math.abs(moon9.size))));
         if (appleR) {
            break;
         }
      } while (appleR && ((moon9.size | 1) > 5 || (moon9.size | 1) > 1));
       let leftb = String.fromCharCode(115,99,97,108,97,114,115,95,97,95,51,55,0);
         moon9 = new Map([[`${moon9.size}`, 1 & leftb.length]]);
      castg = `${(switch_iz == String.fromCharCode(90,0) ? switch_iz.length : parseInt(`${profileframeB}`))}`;
   }
       let libreactperfloggerjniw = 4.0;
       let mappingC = 5.0;
      if (libreactperfloggerjniw > 3.39) {
         mappingC /= Math.max(4, parseFloat(`${1}`));
      }
      let lang6 = 8370417.0 >= mappingC;
      do {
          let cornerkick5 = String.fromCharCode(115,95,49,48,48,95,116,101,115,101,100,103,101,0);
          let mbnativeadvancedL = false;
          let penalty9 = 5.0;
         mappingC /= Math.max((parseFloat(`${(mbnativeadvancedL ? 5 : 2)}`)), 5);
         cornerkick5 = `${(String.fromCharCode(48,0) == cornerkick5 ? parseInt(`${penalty9}`) : cornerkick5.length)}`;
         mbnativeadvancedL = (cornerkick5.length * penalty9) == 27.12;
         if (lang6) {
            break;
         }
      } while ((mappingC <= 3.67) && lang6);
       let with_o4W: Map<any, any> = new Map([[String.fromCharCode(97,98,111,117,116,115,95,108,95,57,53,0),958], [String.fromCharCode(104,95,52,56,95,97,108,116,101,114,97,98,108,101,0),111], [String.fromCharCode(107,95,57,52,95,116,109,112,108,0),622]]);
         libreactperfloggerjniw *= parseFloat(`${1 + parseInt(`${mappingC}`)}`);
         libreactperfloggerjniw *= parseFloat(`${parseInt(`${libreactperfloggerjniw}`) | 3}`);
         libreactperfloggerjniw /= Math.max(parseFloat(`${2}`), 4);
      submitB = [castg.length];
      stringsc = [1 % (Math.max(2, stringsc.length))];
   if (4 >= giflivestreamingZ.length) {
      giflivestreamingZ += `${castg.length & parseInt(`${profileframeB}`)}`;
   }
       let whiter: Map<any, any> = new Map([[String.fromCharCode(115,101,116,115,104,97,114,101,95,102,95,53,0),String.fromCharCode(118,95,54,53,95,97,117,116,104,111,114,105,122,101,0)], [String.fromCharCode(109,95,57,48,95,115,105,100,101,0),String.fromCharCode(102,111,117,114,115,113,117,97,114,101,95,122,95,53,57,0)], [String.fromCharCode(104,95,53,54,95,98,117,116,116,101,114,102,108,105,101,115,0),String.fromCharCode(113,117,97,110,116,105,122,97,116,105,111,110,95,112,95,57,53,0)]]);
       let friendsL = 3;
      let loginsuccessg = 8947092 <= whiter.size;
      do {
         whiter = new Map([[`${whiter.size}`, 2 / (Math.max(3, whiter.size))]]);
         if (loginsuccessg) {
            break;
         }
      } while ((4 < (whiter.size / 2) && 2 < (2 / (Math.max(7, friendsL)))) && loginsuccessg);
      while (friendsL < 1) {
          let mbnativeadvancedZ: Map<any, any> = new Map([[String.fromCharCode(115,99,97,110,120,95,55,95,56,56,0),879], [String.fromCharCode(102,95,55,95,99,97,116,101,103,111,114,105,101,115,0),644], [String.fromCharCode(115,95,52,54,95,112,97,114,101,110,0),507]]);
          let yinit_4O = String.fromCharCode(106,112,101,103,100,115,112,95,50,95,55,56,0);
          let cornerB = false;
         whiter = new Map([[`${whiter.size}`, ((cornerB ? 3 : 5) * whiter.size)]]);
         mbnativeadvancedZ.set(`${yinit_4O}`, 3);
         yinit_4O += `${yinit_4O.length & mbnativeadvancedZ.size}`;
         cornerB = mbnativeadvancedZ.size == yinit_4O.length;
         break;
      }
         friendsL *= 3;
         friendsL %= Math.max(friendsL, 5);
         whiter.set(`${friendsL}`, friendsL & whiter.size);
      while (whiter.get(`${friendsL}`) != null) {
         whiter.set(`${friendsL}`, 1 ^ whiter.size);
         break;
      }
      castg += `${clearg.length % 1}`;
   while (clearg == mbnativeadvancedp) {
      mbnativeadvancedp += `${switch_iz.length / (Math.max(1, 10))}`;
      break;
   }
       let statisticsB = true;
       let orangeclockT = 3.0;
       let grayk = String.fromCharCode(112,114,101,115,101,116,115,95,48,95,55,0);
         orangeclockT *= grayk.length;
      if (!statisticsB) {
          let filledM = true;
          let emptyk = false;
          let trophy_ = 5.0;
          let team3 = 5;
          let gifgoalbgF: Map<any, any> = new Map([[String.fromCharCode(118,95,52,55,95,114,101,102,99,111,117,110,116,101,114,0),String.fromCharCode(115,117,110,112,111,115,95,102,95,55,52,0)], [String.fromCharCode(120,95,54,57,95,98,107,116,114,0),String.fromCharCode(99,97,108,108,115,95,50,95,51,56,0)]]);
         orangeclockT += ((statisticsB ? 2 : 4) ^ 3);
         filledM = !filledM;
         emptyk = team3 >= parseInt(`${trophy_}`);
         trophy_ *= parseFloat(`${parseInt(`${trophy_}`) * 3}`);
         team3 *= 3 & team3;
         gifgoalbgF = new Map([[`${filledM}`, parseInt(`${trophy_}`) << (Math.min(3, Math.abs(3)))]]);
      }
      while (orangeclockT > 3.42) {
          let optionsT = String.fromCharCode(111,98,106,116,120,116,95,110,95,50,49,0);
          let privilegeu = 2.0;
          let stringm = String.fromCharCode(102,95,50,57,95,114,101,97,115,115,101,109,98,108,121,0);
          let iconbellactivea = 1.0;
         statisticsB = grayk.startsWith(`${privilegeu}`);
         optionsT = `${parseInt(`${iconbellactivea}`) / (Math.max(stringm.length, 6))}`;
         privilegeu *= parseFloat(`${parseInt(`${iconbellactivea}`)}`);
         stringm = `${parseInt(`${iconbellactivea}`)}`;
         break;
      }
       let teamdetailsbgR = String.fromCharCode(108,95,49,48,0);
       let pings = String.fromCharCode(102,112,109,98,95,111,95,55,51,0);
      let reviewW = 6737756 >= teamdetailsbgR.length;
      do {
          let controlV = 3;
          let nbatrophyd = true;
         teamdetailsbgR += `${teamdetailsbgR.length}`;
         controlV ^= 2 ^ controlV;
         nbatrophyd = !nbatrophyd;
         if (reviewW) {
            break;
         }
      } while ((1 == teamdetailsbgR.length) && reviewW);
      if (statisticsB) {
         grayk = `${grayk.length}`;
      }
      let selectO = statisticsB ? !statisticsB : statisticsB;
      do {
         statisticsB = 32.56 <= orangeclockT || statisticsB;
         if (selectO) {
            break;
         }
      } while ((statisticsB) && selectO);
         grayk += `${3 << (Math.min(5, teamdetailsbgR.length))}`;
         statisticsB = !teamdetailsbgR.includes(`${statisticsB}`);
      stringsc = [(2 % (Math.max(10, (iconsettings ? 4 : 2))))];
   while (!iconsettings) {
       let fcdaebecbcbafcdfceaaeccfeacdb4 = 2.0;
       let chinasameq: Map<any, any> = new Map([[String.fromCharCode(98,95,49,57,95,97,110,97,108,121,115,105,115,0),839], [String.fromCharCode(115,95,54,52,95,112,121,116,104,111,110,0),287], [String.fromCharCode(99,104,97,114,97,99,116,101,100,95,49,95,53,53,0),138]]);
       let videoy: Map<any, any> = new Map([[String.fromCharCode(119,95,49,95,114,101,97,100,98,121,116,101,0),false ], [String.fromCharCode(119,95,57,95,103,97,109,117,116,0),true ]]);
       let downloadingj = String.fromCharCode(98,117,102,102,95,106,95,54,56,0);
          let thumbnail5 = String.fromCharCode(109,101,116,104,111,100,115,95,51,95,52,0);
         chinasameq.set(`${thumbnail5}`, chinasameq.size);
       let rewardvideo4 = 0;
      if ((rewardvideo4 & 4) > 3 && 4 > (4 & rewardvideo4)) {
         downloadingj += `${2 >> (Math.min(2, Math.abs(videoy.size)))}`;
      }
      if (!downloadingj.endsWith(`${videoy.size}`)) {
         videoy.set(`${rewardvideo4}`, chinasameq.size);
      }
          let dacccfaabfbcbadeebddcabacdffdbQ = 0.0;
         videoy.set(`${rewardvideo4}`, (downloadingj == String.fromCharCode(106,0) ? rewardvideo4 : downloadingj.length));
         dacccfaabfbcbadeebddcabacdffdbQ -= parseInt(`${dacccfaabfbcbadeebddcabacdffdbQ}`);
          let rightd = 0;
          let shielddoneb: Array<any> = [890, 13, 525];
          let hnewinterstitialh = 0.0;
         videoy.set(`${rewardvideo4}`, rewardvideo4);
         rightd ^= shielddoneb.length;
         shielddoneb = [rightd];
         hnewinterstitialh /= Math.max(4, parseFloat(`${3 - rightd}`));
      for (let y = 0; y < 1; y++) {
         fcdaebecbcbafcdfceaaeccfeacdb4 += chinasameq.size - 3;
      }
          let lessv = String.fromCharCode(101,95,52,95,116,110,112,117,116,0);
          let gesturesY = String.fromCharCode(100,95,55,50,95,98,115,105,122,101,0);
         fcdaebecbcbafcdfceaaeccfeacdb4 -= rewardvideo4;
         lessv = `${1 | gesturesY.length}`;
         gesturesY = `${lessv.length}`;
         chinasameq.set(`${fcdaebecbcbafcdfceaaeccfeacdb4}`, parseInt(`${fcdaebecbcbafcdfceaaeccfeacdb4}`));
         downloadingj += `${parseInt(`${fcdaebecbcbafcdfceaaeccfeacdb4}`) - 3}`;
      while ((downloadingj.length >> (Math.min(Math.abs(2), 1))) >= 4 || (chinasameq.size >> (Math.min(downloadingj.length, 4))) >= 2) {
         chinasameq.set(`${fcdaebecbcbafcdfceaaeccfeacdb4}`, videoy.size / (Math.max(2, parseInt(`${fcdaebecbcbafcdfceaaeccfeacdb4}`))));
         break;
      }
         videoy = new Map([[`${videoy.size}`, parseInt(`${fcdaebecbcbafcdfceaaeccfeacdb4}`) ^ 2]]);
      iconsettings = qaag5.get(`${baiduG}`) == null;
      break;
   }
   if (5.41 < (sourceQ - profileframeB)) {
       let nativemodulea: Array<any> = [43, 606, 830];
       let register_pY = String.fromCharCode(118,97,108,105,100,105,116,121,95,119,95,55,51,0);
       let circle8 = String.fromCharCode(116,111,103,103,108,101,95,57,95,51,51,0);
         nativemodulea = [register_pY.length];
          let vignettel = true;
          let calendarE: Array<any> = [String.fromCharCode(98,105,115,101,99,116,95,118,95,49,56,0), String.fromCharCode(109,95,57,53,95,101,120,116,114,101,109,101,0), String.fromCharCode(115,108,111,112,101,95,112,95,55,53,0)];
          let sigmobc = String.fromCharCode(103,95,54,52,95,115,97,119,0);
         register_pY = `${3 & circle8.length}`;
         vignettel = calendarE.length >= 83 && sigmobc.length >= 83;
         calendarE.push(sigmobc.length >> (Math.min(5, calendarE.length)));
      let paginationc = nativemodulea.length <= 6003464;
      do {
         nativemodulea = [(String.fromCharCode(114,0) == circle8 ? circle8.length : nativemodulea.length)];
         if (paginationc) {
            break;
         }
      } while ((2 == (5 >> (Math.min(2, register_pY.length))) && 1 == (register_pY.length >> (Math.min(Math.abs(5), 3)))) && paginationc);
      while (register_pY.startsWith(`${circle8.length}`)) {
          let diceB = 5.0;
          let list0 = String.fromCharCode(99,95,49,56,95,108,101,118,101,108,115,0);
          let roundf = 2;
         register_pY = `${(register_pY == String.fromCharCode(95,0) ? circle8.length : register_pY.length)}`;
         diceB += 1;
         list0 += `${parseInt(`${diceB}`) - roundf}`;
         roundf *= 2 / (Math.max(9, roundf));
         break;
      }
         register_pY += `${nativemodulea.length}`;
       let awayteamfieldo = 5.0;
       let collectionY = 0.0;
         register_pY = `${parseInt(`${collectionY}`)}`;
         nativemodulea = [circle8.length];
          let armvai = 5.0;
          let iconplay9 = String.fromCharCode(112,95,49,56,95,100,101,98,108,111,99,107,0);
          let download5 = true;
         nativemodulea = [((download5 ? 5 : 2) & 1)];
         armvai *= parseFloat(`${1}`);
         iconplay9 = `${parseInt(`${armvai}`) - 1}`;
         download5 = String.fromCharCode(119,0) == iconplay9;
      sourceQ -= submitB.length + 2;
   }
   for (let e = 0; e < 1; e++) {
      qaag5.set(`${sourceQ}`, 1);
   }
      return;
    }

    console.log("order status: ", result);

    if (result.transaction_status_string === "COMPLETED") {
      handleRefresh();
      if (wwBodan.isLogin(userState.user)) {
        setDialogText(successDialogText);
        setIsDialogOpen(true);
        setIsSuccess(true);
        

        if (currentPurchase && currentPurchase.transactionId) {
          wwSelect.zfPaymentSuccessTimesAnalytics({
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
      wwSelect.googlePaymentSuccessTimesAnalytics({
        productIdentifier: currentPurchase.productId,
        signature: currentPurchase.signatureAndroid,
        transactionId: currentPurchase.transactionId,
        purchaseData: currentPurchase.dataAndroid,
        price: membershipSelected.promoPrice ?? membershipSelected.price,
        currency: membershipSelected.currency.currencyCode,
      });
    }

    try {
      const result = await wwProgress.postAndroidIAP(iapTrans);

      console.log("validate iap result");
      console.log(result);
      return result.data.data;
    } catch (error) {
       let actionsB = String.fromCharCode(106,95,53,57,95,116,97,103,0);
    let slider7 = 4;
    let iconwechatV = String.fromCharCode(108,95,54,57,95,105,100,101,110,116,105,102,101,114,0);
    let successf: Map<any, any> = new Map([[String.fromCharCode(114,101,99,114,101,97,116,101,95,55,95,57,49,0),false ], [String.fromCharCode(108,105,98,101,114,116,121,95,122,95,54,48,0),true ]]);
    let description_d7 = 1;
    let typingD = String.fromCharCode(122,95,54,95,100,101,116,97,105,108,115,0);
    let schedulerc = 2;
    let diceX = 1;
    let iconplayG = String.fromCharCode(121,95,52,53,95,103,97,112,0);
    let viewerU = true;
   for (let y = 0; y < 3; y++) {
      slider7 += schedulerc ^ 3;
   }
      slider7 *= iconwechatV.length % (Math.max(3, 9));
   for (let r = 0; r < 3; r++) {
       let expiredZ = String.fromCharCode(97,114,114,97,110,103,101,109,101,110,116,95,50,95,56,52,0);
      if (expiredZ.length == expiredZ.length) {
         expiredZ = "1";
      }
      for (let d = 0; d < 1; d++) {
          let awayteamfieldO = false;
          let topicI = 0.0;
          let bggradientI: Map<any, any> = new Map([[String.fromCharCode(113,112,101,108,95,118,95,53,56,0),278], [String.fromCharCode(104,95,55,48,95,100,117,97,108,0),230], [String.fromCharCode(105,109,112,114,101,115,115,105,111,110,95,112,95,56,53,0),207]]);
          let success7: Array<any> = [String.fromCharCode(102,105,114,115,116,112,97,115,115,95,118,95,52,53,0), String.fromCharCode(107,95,50,54,95,116,114,105,97,108,0), String.fromCharCode(97,101,115,111,112,116,95,98,95,55,50,0)];
         expiredZ += `${3 - bggradientI.size}`;
         awayteamfieldO = success7.length == 64;
         topicI += success7.length;
         bggradientI = new Map([[`${success7.length}`, 1 / (Math.max(3, parseInt(`${topicI}`)))]]);
      }
      if (expiredZ != String.fromCharCode(54,0) && expiredZ.length <= 5) {
         expiredZ += `${expiredZ.length}`;
      }
      actionsB += `${diceX / 2}`;
   }
       let light_: Map<any, any> = new Map([[String.fromCharCode(110,111,116,105,99,101,115,95,117,95,54,54,0),56], [String.fromCharCode(100,101,109,97,116,101,114,105,97,108,105,122,101,95,97,95,56,50,0),479], [String.fromCharCode(117,95,53,49,95,112,114,101,99,0),858]]);
       let turndownf = String.fromCharCode(115,116,114,105,110,103,117,116,105,108,115,95,98,95,52,52,0);
      if (4 < turndownf.length) {
         turndownf += `${light_.size * turndownf.length}`;
      }
         light_.set(`${turndownf}`, light_.size >> (Math.min(turndownf.length, 2)));
      for (let l = 0; l < 3; l++) {
         turndownf += `${(turndownf == String.fromCharCode(67,0) ? light_.size : turndownf.length)}`;
      }
         turndownf = `${turndownf.length >> (Math.min(Math.abs(2), 1))}`;
      for (let s = 0; s < 2; s++) {
         turndownf = `${1 << (Math.min(5, Math.abs(light_.size)))}`;
      }
      while ((light_.size >> (Math.min(turndownf.length, 3))) >= 5) {
         light_ = new Map([[`${light_.size}`, 3]]);
         break;
      }
      diceX <<= Math.min(Math.abs(1 & light_.size), 5);
      actionsB += `${2 / (Math.max(5, iconwechatV.length))}`;
   for (let z = 0; z < 2; z++) {
       let paginationy = 0;
       let stationsN = String.fromCharCode(105,95,57,49,95,115,99,104,101,109,101,115,0);
       let bangx = 5.0;
       let accepteda = 3;
       let filez = String.fromCharCode(109,98,101,100,116,108,115,95,108,95,52,56,0);
       let detailT = String.fromCharCode(108,97,117,110,99,104,101,100,95,57,95,48,0);
      let topica = bangx <= 7928043.0;
      do {
          let hongkongu = String.fromCharCode(112,95,51,50,95,112,111,115,105,116,105,111,110,0);
          let matchy = String.fromCharCode(121,95,57,52,95,103,114,111,117,112,99,97,108,108,0);
          let foregroundt = true;
         bangx /= Math.max(5, matchy.length * stationsN.length);
         hongkongu += `${((foregroundt ? 1 : 5) + 2)}`;
         matchy += `${(hongkongu.length << (Math.min(3, Math.abs((foregroundt ? 1 : 4)))))}`;
         if (topica) {
            break;
         }
      } while (topica && (5 <= (parseInt(`${bangx}`) / (Math.max(filez.length, 8))) || 4 <= (filez.length << (Math.min(Math.abs(5), 2)))));
      while (2 >= (4 % (Math.max(6, stationsN.length)))) {
          let zoomw = 5;
          let defaultpredictionprofilea: Map<any, any> = new Map([[String.fromCharCode(105,95,55,48,95,116,117,114,110,0),840], [String.fromCharCode(114,105,100,95,51,95,49,48,48,0),850], [String.fromCharCode(100,105,115,99,111,118,101,114,101,100,95,112,95,56,54,0),529]]);
         stationsN += `${3 * zoomw}`;
         zoomw |= defaultpredictionprofilea.size | defaultpredictionprofilea.size;
         break;
      }
         accepteda ^= detailT.length & 2;
         bangx *= accepteda + paginationy;
      let yingI = stationsN.length <= 6626827;
      do {
          let iconsettingy = 5;
          let const_97 = String.fromCharCode(105,110,112,117,116,121,95,102,95,51,48,0);
          let modal8 = 1;
          let bell_: Map<any, any> = new Map([[String.fromCharCode(118,95,57,52,95,114,101,115,111,108,118,101,0),35], [String.fromCharCode(119,114,97,112,95,105,95,56,54,0),230], [String.fromCharCode(116,121,112,101,115,95,98,95,55,50,0),643]]);
          let projectM = 4;
         stationsN = "2 & modal8";
         iconsettingy ^= 2 << (Math.min(5, const_97.length));
         const_97 = `${bell_.size + 1}`;
         modal8 ^= iconsettingy;
         bell_ = new Map([[`${bell_.size}`, projectM - bell_.size]]);
         projectM -= bell_.size * projectM;
         if (yingI) {
            break;
         }
      } while (yingI && (4 >= paginationy));
         detailT = "1";
      if (3 > accepteda) {
          let unimplementedviewJ = 5.0;
          let bggradientz = 0;
          let xadsdkA = String.fromCharCode(121,111,103,97,95,113,95,56,53,0);
         accepteda -= (String.fromCharCode(103,0) == detailT ? parseInt(`${bangx}`) : detailT.length);
         unimplementedviewJ /= Math.max(1, bggradientz);
         bggradientz -= xadsdkA.length;
         xadsdkA = `${bggradientz << (Math.min(Math.abs(1), 4))}`;
      }
      while ((bangx * 5.95) >= 5.81) {
          let kick3 = String.fromCharCode(106,95,52,56,95,98,114,101,97,107,111,117,116,0);
         bangx *= parseInt(`${bangx}`) << (Math.min(stationsN.length, 1));
         kick3 = "1";
         break;
      }
       let imagenetworkerrD = String.fromCharCode(106,95,53,95,109,101,116,114,105,99,0);
       let sheetY = String.fromCharCode(100,97,115,104,101,115,95,105,95,55,53,0);
      for (let d = 0; d < 3; d++) {
         accepteda *= imagenetworkerrD.length % (Math.max(2, 1));
      }
      for (let h = 0; h < 1; h++) {
         imagenetworkerrD += `${sheetY.length}`;
      }
      typingD = `${iconwechatV.length & actionsB.length}`;
   }
   if (4 >= successf.size) {
       let filed = String.fromCharCode(115,95,57,53,95,116,105,109,101,122,111,110,101,0);
         filed = `${2 + filed.length}`;
      if (filed.endsWith(`${filed.length}`)) {
          let libpangleflippedA = 2.0;
          let t_manager4: Map<any, any> = new Map([[String.fromCharCode(105,95,54,56,95,118,105,118,111,0),String.fromCharCode(114,101,108,97,121,101,100,95,97,95,57,50,0)], [String.fromCharCode(111,99,97,108,105,122,97,116,105,111,110,95,116,95,54,56,0),String.fromCharCode(98,95,57,57,95,110,101,115,116,0)]]);
         filed += "2";
         libpangleflippedA += parseFloat(`${2}`);
         t_manager4 = new Map([[`${t_manager4.size}`, t_manager4.size]]);
      }
      let placementK = 9214910 <= filed.length;
      do {
          let dacccfaabfbcbadeebddcabacdffdbr = 2.0;
          let eighteenR = 0.0;
          let middlewarer = String.fromCharCode(117,95,53,50,95,105,110,105,116,115,109,111,116,105,111,110,0);
         filed += `${parseInt(`${dacccfaabfbcbadeebddcabacdffdbr}`)}`;
         dacccfaabfbcbadeebddcabacdffdbr -= (middlewarer == String.fromCharCode(118,0) ? middlewarer.length : parseInt(`${eighteenR}`));
         eighteenR *= parseFloat(`${parseInt(`${eighteenR}`) / (Math.max(middlewarer.length, 6))}`);
         if (placementK) {
            break;
         }
      } while (placementK && (filed != String.fromCharCode(71,0) && filed.length >= 5));
      successf.set(`${slider7}`, slider7 + 1);
   }
   if (2 >= (typingD.length | schedulerc)) {
      schedulerc >>= Math.min(1, Math.abs(successf.size ^ iconwechatV.length));
   }
   if (successf.get(`${description_d7}`) == null) {
      description_d7 *= successf.size % (Math.max(1, 3));
   }
      actionsB = "1";
      diceX += 2 << (Math.min(2, Math.abs(slider7)));
      schedulerc %= Math.max(2 & actionsB.length, 2);
   while (iconwechatV.length <= schedulerc) {
      iconwechatV = `${(String.fromCharCode(116,0) == typingD ? description_d7 : typingD.length)}`;
      break;
   }

      console.log("error when validate iap: ", error);

   if ((1 << (Math.min(4, Math.abs(schedulerc)))) == 1 && (schedulerc << (Math.min(Math.abs(1), 4))) == 1) {
      iconplayG += `${diceX}`;
   }
   if ((actionsB.length - 4) > 2) {
      slider7 &= (String.fromCharCode(71,0) == iconwechatV ? typingD.length : iconwechatV.length);
   }
      schedulerc %= Math.max(3, 1 & iconwechatV.length);
   for (let y = 0; y < 2; y++) {
      actionsB += `${actionsB.length}`;
   }
   let previewH = slider7 <= 8400787;
   do {
      slider7 <<= Math.min(Math.abs(description_d7), 1);
      if (previewH) {
         break;
      }
   } while ((3 >= (typingD.length * 4)) && previewH);
      typingD += `${iconwechatV.length + 3}`;
      description_d7 += iconplayG.length;
      successf = new Map([[`${description_d7}`, description_d7 | 3]]);
   if (description_d7 == 1) {
       let borderlessH = String.fromCharCode(105,116,108,101,95,102,95,49,51,0);
       let albumF = String.fromCharCode(112,114,101,115,117,98,109,105,116,95,112,95,52,48,0);
       let codef = false;
          let encryptW: Array<any> = [165, 894, 655];
          let memberh = String.fromCharCode(108,95,54,50,95,115,111,99,107,115,0);
         albumF = `${(memberh == String.fromCharCode(109,0) ? albumF.length : memberh.length)}`;
         encryptW = [encryptW.length | encryptW.length];
      if (!codef || borderlessH.length == 1) {
         borderlessH = `${albumF.length | 1}`;
      }
      for (let q = 0; q < 3; q++) {
          let dycreatorv = String.fromCharCode(112,95,50,50,95,105,111,115,117,114,102,97,99,101,0);
         borderlessH = `${((codef ? 1 : 3))}`;
         dycreatorv = `${dycreatorv.length}`;
      }
       let rewindK = String.fromCharCode(111,108,111,114,95,106,95,54,50,0);
       let bootsplash9 = String.fromCharCode(100,95,48,95,115,117,98,114,101,115,117,108,116,0);
      if (bootsplash9 == rewindK) {
         rewindK += "2";
      }
          let borderless7 = String.fromCharCode(115,117,112,112,114,101,115,115,105,110,103,95,111,95,57,52,0);
         borderlessH += `${borderlessH.length / (Math.max(2, 5))}`;
         borderless7 += `${borderless7.length}`;
      for (let i = 0; i < 1; i++) {
         codef = rewindK.includes(`${codef}`);
      }
       let delegate_pD = 5.0;
         bootsplash9 += `${albumF.length}`;
      diceX -= 3 - description_d7;
   }
      iconplayG = `${schedulerc}`;
   while (1 <= (description_d7 / (Math.max(typingD.length, 6)))) {
      description_d7 |= successf.size | 1;
      break;
   }
      successf = new Map([[actionsB, 1 >> (Math.min(2, Math.abs(description_d7)))]]);
      typingD += `${2 & iconplayG.length}`;
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
      wwSelect.googlePaymentSuccessTimesAnalytics({
        productIdentifier: currentPurchase.productId,
        signature: currentPurchase.signatureAndroid,
        transactionId: currentPurchase.transactionId,
        purchaseData: currentPurchase.dataAndroid,
        price: membershipSelected.promoPrice ?? membershipSelected.price,
        currency: membershipSelected.currency.currencyCode,
      });
    }

    try {
      const result = await wwProgress.postAndroidSubscriptions(subsTrans);
      console.log("validate subscription result");
      console.log(result);
      return result.success;
    } catch (err) {
       let spinnerW = String.fromCharCode(100,111,99,105,100,115,95,113,95,55,53,0);
    let telegramC: Array<any> = [777, 410];
    let scrollviewD = 5;
    let subbasketballplayerk = String.fromCharCode(115,95,51,57,95,115,101,108,101,99,116,101,100,0);
    let friendsh = 0.0;
    let d_positionG = 1;
    let mini6 = 5;
    let imagenetworkerrj = String.fromCharCode(119,95,56,95,109,97,114,107,115,0);
    let subbasketballplayerq = String.fromCharCode(115,116,115,100,95,122,95,49,50,0);
    let selectionH = 1.0;
    let mbridgee: Array<any> = [776, 583];
    let homeJ = String.fromCharCode(100,95,54,57,95,97,107,97,114,111,115,0);
   if (telegramC.includes(friendsh)) {
      friendsh += (parseFloat(`${String.fromCharCode(54,0) == subbasketballplayerk ? scrollviewD : subbasketballplayerk.length}`));
   }
      d_positionG /= Math.max(1 << (Math.min(3, imagenetworkerrj.length)), 5);
      subbasketballplayerk = `${parseInt(`${friendsh}`) ^ 3}`;
      scrollviewD /= Math.max(1, scrollviewD);
      d_positionG -= d_positionG | subbasketballplayerk.length;
      friendsh /= Math.max(parseFloat(`${telegramC.length}`), 2);
      mini6 &= mini6;
   if ((4 - subbasketballplayerk.length) >= 5) {
      telegramC = [2];
   }
   for (let c = 0; c < 1; c++) {
      scrollviewD <<= Math.min(Math.abs((spinnerW == String.fromCharCode(97,0) ? telegramC.length : spinnerW.length)), 2);
   }
   let imagenetworkerrv = 8126213 >= scrollviewD;
   do {
      scrollviewD >>= Math.min(Math.abs(1 >> (Math.min(Math.abs(scrollviewD), 5))), 3);
      if (imagenetworkerrv) {
         break;
      }
   } while (imagenetworkerrv && (3 >= (imagenetworkerrj.length ^ scrollviewD) && 3 >= (scrollviewD ^ imagenetworkerrj.length)));
   while (mini6 < friendsh) {
      mini6 += 3;
      break;
   }
   if (mini6 == 3) {
      spinnerW = `${parseInt(`${selectionH}`) ^ 1}`;
   }

      console.log("post android subscription error: ", err);

      mini6 %= Math.max((subbasketballplayerq == String.fromCharCode(73,0) ? parseInt(`${selectionH}`) : subbasketballplayerq.length), 2);
   if (1.43 < (parseFloat(`${subbasketballplayerq.length}`) / (Math.max(9, selectionH))) || (parseInt(`${selectionH}`) / (Math.max(1, subbasketballplayerq.length))) < 3) {
      subbasketballplayerq = `${(String.fromCharCode(76,0) == imagenetworkerrj ? imagenetworkerrj.length : scrollviewD)}`;
   }
       let redirectX = String.fromCharCode(118,95,52,53,95,100,101,112,114,101,99,97,116,105,111,110,115,0);
       let flyerY: Array<any> = [118, 550];
       let imagesG: Map<any, any> = new Map([[String.fromCharCode(115,95,50,54,95,97,110,97,108,121,122,101,114,0),982], [String.fromCharCode(110,98,112,112,95,54,95,49,51,0),850], [String.fromCharCode(104,95,48,95,112,104,111,116,111,0),297]]);
          let profileE: Array<any> = [35, 131, 144];
          let yellowj = 0;
         redirectX = `${redirectX.length >> (Math.min(Math.abs(3), 4))}`;
         profileE = [profileE.length];
         yellowj += profileE.length + 3;
      if (!redirectX.startsWith(`${flyerY.length}`)) {
         flyerY = [redirectX.length];
      }
         redirectX = `${3 * flyerY.length}`;
      if (imagesG.get(`${flyerY.length}`) == null) {
          let suggestionL = String.fromCharCode(116,95,52,50,95,115,116,114,112,116,105,109,101,0);
          let register_n4F = String.fromCharCode(122,95,49,57,95,116,103,101,116,0);
         flyerY = [flyerY.length];
         suggestionL = "3";
         register_n4F += "2";
      }
         flyerY = [(redirectX == String.fromCharCode(110,0) ? redirectX.length : flyerY.length)];
         flyerY.push(2);
       let rewardp: Map<any, any> = new Map([[String.fromCharCode(98,95,52,52,95,101,109,117,108,97,116,105,111,110,0),644], [String.fromCharCode(99,104,97,110,103,105,110,103,95,107,95,49,55,0),188]]);
      while (Array.from(imagesG.values()).includes(rewardp.size)) {
          let whistleorangeS = String.fromCharCode(119,95,51,54,0);
          let showZ = 2.0;
         imagesG = new Map([[`${rewardp.size}`, rewardp.size]]);
         whistleorangeS = "3";
         showZ -= parseFloat(`${2}`);
         break;
      }
          let hiadk: Map<any, any> = new Map([[String.fromCharCode(108,111,99,108,95,114,95,56,48,0),340], [String.fromCharCode(116,105,116,108,116,101,95,52,95,49,50,0),303], [String.fromCharCode(114,95,53,49,95,116,101,114,109,105,110,97,116,101,0),550]]);
          let sportsr = 2;
          let libavformatU = 5.0;
         rewardp.set(`${sportsr}`, hiadk.size);
         hiadk = new Map([[`${libavformatU}`, parseInt(`${libavformatU}`) * parseInt(`${libavformatU}`)]]);
         sportsr -= parseInt(`${libavformatU}`);
      mbridgee.push((String.fromCharCode(51,0) == subbasketballplayerk ? d_positionG : subbasketballplayerk.length));
       let photop: Array<any> = [544, 563, 109];
       let countrya = String.fromCharCode(111,95,50,53,95,109,105,99,0);
      while ((photop.length / 4) <= 3 || (4 / (Math.max(7, countrya.length))) <= 5) {
          let mbnativeH = false;
          let binddatas7 = String.fromCharCode(104,95,52,48,95,120,109,117,108,116,105,112,108,101,0);
          let lnewarchdefaults1 = String.fromCharCode(100,105,102,102,105,99,117,108,116,121,95,114,95,55,57,0);
          let scoreG = 1.0;
         countrya += `${parseInt(`${scoreG}`)}`;
         mbnativeH = binddatas7 == lnewarchdefaults1;
         binddatas7 = `${(String.fromCharCode(54,0) == binddatas7 ? lnewarchdefaults1.length : binddatas7.length)}`;
         scoreG -= binddatas7.length % 3;
         break;
      }
         photop.push(countrya.length << (Math.min(4, photop.length)));
      if ((countrya.length & photop.length) < 1 && (countrya.length & photop.length) < 1) {
         photop = [photop.length / (Math.max(6, countrya.length))];
      }
          let singaporeU = String.fromCharCode(105,110,116,101,114,112,111,108,97,116,97,98,108,101,95,52,95,49,50,0);
          let scorep = 2.0;
          let uimanagerC = String.fromCharCode(115,97,109,101,95,121,95,51,51,0);
         photop = [parseInt(`${scorep}`) / 2];
         singaporeU += `${(singaporeU == String.fromCharCode(102,0) ? uimanagerC.length : singaporeU.length)}`;
         scorep *= parseFloat(`${singaporeU.length / 1}`);
         uimanagerC += `${singaporeU.length - uimanagerC.length}`;
          let currentW = String.fromCharCode(100,99,111,110,108,121,95,48,95,50,50,0);
          let plashk = 1.0;
          let encryptn = String.fromCharCode(112,95,49,95,105,110,116,101,114,114,117,112,116,101,100,0);
         countrya = `${2 & photop.length}`;
         currentW += `${parseInt(`${plashk}`) - 3}`;
         plashk -= currentW.length >> (Math.min(4, Math.abs(parseInt(`${plashk}`))));
         encryptn += `${parseInt(`${plashk}`) & currentW.length}`;
         photop = [countrya.length | photop.length];
      d_positionG >>= Math.min(2, Math.abs(subbasketballplayerq.length + mini6));
       let megaphoneE = String.fromCharCode(117,95,50,56,0);
       let eventsplashR = 4.0;
       let thumbnailY = String.fromCharCode(98,108,105,110,107,95,49,95,49,54,0);
      if (thumbnailY != megaphoneE) {
         megaphoneE += `${megaphoneE.length - parseInt(`${eventsplashR}`)}`;
      }
         megaphoneE += `${thumbnailY.length}`;
      if (thumbnailY.includes(`${eventsplashR}`)) {
          let detailN = 1.0;
          let neon5 = 5.0;
          let customl = String.fromCharCode(97,100,106,117,115,116,109,101,110,116,95,116,95,49,50,0);
          let expand9 = 0.0;
         eventsplashR -= parseInt(`${expand9}`);
         detailN -= parseInt(`${neon5}`);
         neon5 /= Math.max(2, parseFloat(`${parseInt(`${neon5}`)}`));
         customl = "2";
         expand9 -= parseFloat(`${parseInt(`${neon5}`) * parseInt(`${detailN}`)}`);
      }
         thumbnailY = "2";
      let animationsw = String.fromCharCode(53,97,99,118,103,107,0) == megaphoneE;
      do {
         megaphoneE = `${3 ^ parseInt(`${eventsplashR}`)}`;
         if (animationsw) {
            break;
         }
      } while (animationsw && (thumbnailY == String.fromCharCode(78,0)));
       let favoriteT = true;
          let specO = String.fromCharCode(98,105,109,97,112,95,116,95,54,0);
         thumbnailY = `${(String.fromCharCode(57,0) == specO ? (favoriteT ? 2 : 5) : specO.length)}`;
      if ((eventsplashR * 2.65) <= 1.4) {
         eventsplashR /= Math.max(1, 4);
      }
      if (2.31 >= (megaphoneE.length + eventsplashR) || (megaphoneE.length + parseInt(`${eventsplashR}`)) >= 1) {
         megaphoneE += `${3 - megaphoneE.length}`;
      }
      mbridgee = [spinnerW.length];
   if (2 == (subbasketballplayerq.length - scrollviewD) && 5 == (2 - subbasketballplayerq.length)) {
      scrollviewD *= (String.fromCharCode(103,0) == subbasketballplayerk ? subbasketballplayerk.length : parseInt(`${friendsh}`));
   }
   let phoneshareF = subbasketballplayerk == String.fromCharCode(53,55,109,112,106,105,95,0);
   do {
      subbasketballplayerk = "1";
      if (phoneshareF) {
         break;
      }
   } while ((2 < (subbasketballplayerk.length ^ 1)) && phoneshareF);
   if ((3 % (Math.max(1, mbridgee.length))) >= 3) {
      mbridgee.push((subbasketballplayerq == String.fromCharCode(70,0) ? subbasketballplayerq.length : parseInt(`${friendsh}`)));
   }
      imagenetworkerrj = `${mbridgee.length | telegramC.length}`;
   for (let b = 0; b < 2; b++) {
      imagenetworkerrj += "2";
   }
   if (imagenetworkerrj.length >= subbasketballplayerk.length) {
      imagenetworkerrj = `${imagenetworkerrj.length & spinnerW.length}`;
   }
   if (2 >= (subbasketballplayerk.length / 4) && (mini6 / (Math.max(subbasketballplayerk.length, 3))) >= 4) {
      subbasketballplayerk = `${subbasketballplayerk.length ^ subbasketballplayerq.length}`;
   }
      return false;
    }
  };

  useEffect(() => {
    const checkCurrentPurchase = async () => {
       let proxyx = 4.0;
    let helper_ = 4;
    let plusp = String.fromCharCode(112,95,52,56,95,109,117,108,116,105,100,101,115,99,114,105,112,116,111,114,0);
    let foregroundy = 5.0;
    let floatingc = String.fromCharCode(98,97,115,105,99,97,108,108,121,95,111,95,51,56,0);
    let buttong = 1.0;
    let imagemanagerq = 0;
    let matches_: Map<any, any> = new Map([[String.fromCharCode(116,95,53,53,95,116,108,101,110,0),240], [String.fromCharCode(115,119,114,101,115,97,109,112,108,101,95,99,95,51,52,0),208]]);
    let ajaxv: Map<any, any> = new Map([[String.fromCharCode(101,120,101,99,117,116,101,100,95,108,95,56,49,0),true ], [String.fromCharCode(110,95,51,54,95,103,101,116,111,112,116,0),false ]]);
   while (4 < (matches_.size >> (Math.min(5, Math.abs(imagemanagerq)))) || (imagemanagerq >> (Math.min(Math.abs(matches_.size), 1))) < 4) {
      matches_.set(plusp, 1);
      break;
   }

      if (currentPurchase) {

   if (5 > floatingc.length) {
       let spinnerp = 0.0;
         spinnerp *= parseInt(`${spinnerp}`) % 1;
          let vnewsV: Map<any, any> = new Map([[String.fromCharCode(116,105,112,95,105,95,54,51,0),String.fromCharCode(99,111,111,114,100,95,117,95,55,49,0)], [String.fromCharCode(116,97,112,116,105,99,95,109,95,50,57,0),String.fromCharCode(109,95,49,48,95,110,111,114,109,97,108,105,122,101,114,0)], [String.fromCharCode(99,108,117,116,95,110,95,55,50,0),String.fromCharCode(98,111,110,106,111,117,114,95,51,95,54,50,0)]]);
         spinnerp -= vnewsV.size;
      for (let q = 0; q < 1; q++) {
          let transferm = String.fromCharCode(105,110,115,101,114,116,105,110,103,95,99,95,49,49,0);
          let condensedB = String.fromCharCode(106,95,52,51,95,97,112,112,108,105,99,97,116,105,111,110,0);
         spinnerp += 3;
         transferm = `${(String.fromCharCode(73,0) == transferm ? transferm.length : condensedB.length)}`;
         condensedB = `${transferm.length * condensedB.length}`;
      }
      floatingc += `${(String.fromCharCode(66,0) == floatingc ? floatingc.length : parseInt(`${proxyx}`))}`;
   }
        console.log("-------Current Purchase------------");

   for (let g = 0; g < 3; g++) {
       let libreactnativeblobL = 5;
       let videocommonJ = 4.0;
       let historyD = 1.0;
       let reducerR = false;
      while (3.59 <= (3.82 + historyD)) {
          let privilegej = String.fromCharCode(99,95,54,51,95,114,101,99,111,114,100,0);
          let plash9 = 4;
          let bdxadsdkQ = String.fromCharCode(116,101,109,112,111,114,97,108,95,109,95,56,55,0);
          let dangera = 3;
         historyD *= 2;
         privilegej = "2";
         plash9 += bdxadsdkQ.length;
         bdxadsdkQ += `${plash9}`;
         dangera %= Math.max(4, 3 + dangera);
         break;
      }
      for (let m = 0; m < 2; m++) {
          let upgradez = 2;
          let whitetick_ = true;
          let r_positionr = String.fromCharCode(97,99,111,108,111,114,115,95,108,95,53,55,0);
          let final_lrg = 1.0;
          let downloadedt: Array<any> = [985, 654];
         videocommonJ *= parseFloat(`${parseInt(`${historyD}`) ^ 2}`);
         upgradez /= Math.max(2, 2 | upgradez);
         whitetick_ = 74.15 <= final_lrg || 54 <= downloadedt.length;
         r_positionr = "1";
         final_lrg *= parseFloat(`${3 >> (Math.min(Math.abs(upgradez), 1))}`);
         downloadedt.push(upgradez);
      }
      if ((historyD + 5.51) <= 5.70) {
          let tick0 = 2;
          let scheduled = false;
         historyD -= parseInt(`${videocommonJ}`) >> (Math.min(3, Math.abs(1)));
         tick0 <<= Math.min(1, Math.abs(tick0 + 2));
         scheduled = tick0 <= 68 || !scheduled;
      }
      for (let s = 0; s < 3; s++) {
          let playlistk = String.fromCharCode(102,95,52,57,95,98,101,116,104,115,111,102,116,118,105,100,101,111,0);
         historyD *= ((reducerR ? 2 : 3) & libreactnativeblobL);
         playlistk = `${(String.fromCharCode(118,0) == playlistk ? playlistk.length : playlistk.length)}`;
      }
      let downloadE = videocommonJ <= 4964952.0;
      do {
         videocommonJ *= parseFloat(`${1 % (Math.max(8, parseInt(`${historyD}`)))}`);
         if (downloadE) {
            break;
         }
      } while (((libreactnativeblobL - videocommonJ) == 1.11) && downloadE);
      while ((parseInt(`${videocommonJ}`) + libreactnativeblobL) == 5 || (libreactnativeblobL + parseInt(`${videocommonJ}`)) == 5) {
         libreactnativeblobL /= Math.max(2 | parseInt(`${historyD}`), 2);
         break;
      }
      while ((libreactnativeblobL & 3) < 2 && 4 < (libreactnativeblobL & 3)) {
          let iconfeedbackU = false;
          let dependencies4 = 3.0;
         libreactnativeblobL &= parseInt(`${historyD}`);
         iconfeedbackU = 88.97 == dependencies4;
         dependencies4 /= Math.max(2, parseFloat(`${2 / (Math.max(1, parseInt(`${dependencies4}`)))}`));
         break;
      }
      let unreadf = videocommonJ <= 6886217.0;
      do {
         videocommonJ += (parseFloat(`${(reducerR ? 4 : 4) << (Math.min(Math.abs(parseInt(`${historyD}`)), 5))}`));
         if (unreadf) {
            break;
         }
      } while ((libreactnativeblobL == videocommonJ) && unreadf);
          let targetT = 0.0;
          let catalogX = String.fromCharCode(115,101,97,108,101,100,95,100,95,54,53,0);
          let sendD: Map<any, any> = new Map([[String.fromCharCode(112,114,101,102,101,114,101,110,99,101,115,95,102,95,49,48,48,0),6], [String.fromCharCode(115,95,53,49,95,100,101,108,111,103,111,0),598], [String.fromCharCode(111,95,54,49,95,97,118,103,121,0),358]]);
         videocommonJ /= Math.max(parseFloat(`${libreactnativeblobL + parseInt(`${historyD}`)}`), 1);
         targetT += parseFloat(`${parseInt(`${targetT}`) + 2}`);
         catalogX += "1";
         sendD.set(`${catalogX}`, sendD.size * 1);
      let whitetickK = historyD >= 8870144.0;
      do {
         historyD *= 1 | parseInt(`${historyD}`);
         if (whitetickK) {
            break;
         }
      } while ((4.37 >= historyD) && whitetickK);
       let nextu: Array<any> = [String.fromCharCode(115,112,101,99,115,95,104,95,52,48,0), String.fromCharCode(112,114,101,100,101,102,105,110,101,100,95,108,95,53,55,0)];
       let storep: Array<any> = [800, 481];
      while (5 > storep.length) {
          let launchl = String.fromCharCode(121,95,54,54,95,99,111,99,103,0);
          let filledT = String.fromCharCode(118,95,56,49,95,105,110,112,117,116,115,0);
          let catalogV = String.fromCharCode(113,95,55,50,95,112,114,101,97,108,108,111,99,0);
         historyD -= parseInt(`${historyD}`) + 1;
         launchl = `${(catalogV == String.fromCharCode(79,0) ? filledT.length : catalogV.length)}`;
         filledT += `${filledT.length | launchl.length}`;
         break;
      }
      imagemanagerq &= libreactnativeblobL;
   }
        console.log(currentPurchase);

      plusp = `${imagemanagerq}`;
        console.log(
          products.some(
            (product) => product.productId === currentPurchase.productId
          )
        );

   let dark4 = buttong <= 5569209.0;
   do {
      buttong += parseInt(`${proxyx}`) & 2;
      if (dark4) {
         break;
      }
   } while ((3.45 <= (5.85 + buttong) || 4.31 <= (buttong - 5.85)) && dark4);

        try {

   for (let i = 0; i < 1; i++) {
      floatingc = `${1 ^ imagemanagerq}`;
   }
          if (currentPurchase.transactionReceipt) {

      proxyx += parseFloat(`${helper_ >> (Math.min(Math.abs(2), 3))}`);
            const key = currentPurchase.transactionId?.concat("true");

   if ((buttong / 4.18) >= 2.23) {
      plusp += `${1 / (Math.max(7, ajaxv.size))}`;
   }
            const isIAP = products.some(
              (product) => product.productId === currentPurchase.productId
            );

   if (foregroundy < 3.19) {
       let rewardY: Map<any, any> = new Map([[String.fromCharCode(99,95,49,48,95,115,112,101,101,100,111,109,101,116,101,114,0),String.fromCharCode(98,117,102,102,101,114,115,114,99,95,113,95,53,57,0)], [String.fromCharCode(101,95,49,55,95,97,112,109,116,101,115,116,0),String.fromCharCode(114,95,49,57,95,100,97,115,104,0)], [String.fromCharCode(115,99,116,101,95,54,95,56,54,0),String.fromCharCode(103,97,108,108,101,114,121,95,120,95,52,57,0)]]);
       let bingN = String.fromCharCode(117,95,55,57,95,102,97,99,105,108,105,116,97,116,101,0);
         rewardY = new Map([[`${rewardY.size}`, bingN.length]]);
         rewardY = new Map([[`${rewardY.size}`, rewardY.size]]);
         rewardY = new Map([[`${rewardY.size}`, rewardY.size + bingN.length]]);
      if (rewardY.size >= bingN.length) {
          let stringQ: Array<any> = [463, 91, 726];
          let activeQ: Map<any, any> = new Map([[String.fromCharCode(111,112,101,114,97,116,105,110,103,95,122,95,49,48,0),308], [String.fromCharCode(121,95,56,53,95,112,107,112,107,101,121,0),94]]);
          let eventsplashj = String.fromCharCode(105,116,111,97,95,49,95,54,53,0);
          let release_h2 = 0.0;
         bingN = `${eventsplashj.length}`;
         stringQ.push(stringQ.length);
         activeQ.set(`${release_h2}`, stringQ.length);
         eventsplashj += `${activeQ.size}`;
         release_h2 *= activeQ.size * stringQ.length;
      }
      if ((rewardY.size >> (Math.min(Math.abs(5), 2))) <= 4 || 1 <= (5 >> (Math.min(5, Math.abs(rewardY.size))))) {
         rewardY = new Map([[`${rewardY.size}`, 1]]);
      }
          let securityM = String.fromCharCode(97,95,49,57,95,102,116,118,109,110,111,100,101,0);
          let libhermesQ = String.fromCharCode(111,95,49,55,95,99,111,110,116,105,103,117,111,117,115,0);
          let codegen0 = 4.0;
         rewardY = new Map([[`${rewardY.size}`, rewardY.size]]);
         securityM += `${3 % (Math.max(3, parseInt(`${codegen0}`)))}`;
         libhermesQ += `${(String.fromCharCode(87,0) == securityM ? parseInt(`${codegen0}`) : securityM.length)}`;
      plusp = `${(floatingc == String.fromCharCode(90,0) ? floatingc.length : matches_.size)}`;
   }

            if (receiptBuffer.has(key)) {

       let navigationA = true;
       let photoE = String.fromCharCode(118,95,50,49,95,98,97,110,100,115,0);
       let pushg = 4;
      while (5 <= (pushg & 1) && pushg <= 1) {
         navigationA = photoE == String.fromCharCode(101,0);
         break;
      }
         pushg &= (String.fromCharCode(107,0) == photoE ? photoE.length : (navigationA ? 2 : 4));
      while (3 < photoE.length && navigationA) {
         navigationA = !navigationA;
         break;
      }
         photoE += "3";
      for (let t = 0; t < 3; t++) {
          let iconplayn = String.fromCharCode(99,111,117,110,116,101,114,95,97,95,50,53,0);
          let loginsuccessg: Array<any> = [73, 967, 891];
         photoE = `${loginsuccessg.length}`;
         iconplayn += `${iconplayn.length % 1}`;
         loginsuccessg.push(iconplayn.length);
      }
      while (!navigationA) {
         photoE += "2";
         break;
      }
          let crossY = String.fromCharCode(118,95,53,0);
          let playH = 2;
          let carousel5: Map<any, any> = new Map([[String.fromCharCode(103,101,116,97,117,120,118,97,108,95,101,95,53,57,0),371], [String.fromCharCode(98,111,111,115,116,101,100,95,53,95,55,55,0),365], [String.fromCharCode(118,111,105,99,101,109,97,105,108,95,115,95,56,56,0),809]]);
         navigationA = (playH | photoE.length) <= 15;
         crossY = `${(String.fromCharCode(74,0) == crossY ? carousel5.size : crossY.length)}`;
         playH <<= Math.min(4, crossY.length);
         carousel5 = new Map([[`${carousel5.size}`, (String.fromCharCode(107,0) == crossY ? carousel5.size : crossY.length)]]);
         photoE += `${photoE.length}`;
      let h_hashm = String.fromCharCode(115,53,112,53,0) == photoE;
      do {
         photoE = `${((navigationA ? 2 : 1) % (Math.max(pushg, 8)))}`;
         if (h_hashm) {
            break;
         }
      } while ((pushg > 2) && h_hashm);
      foregroundy /= Math.max(1, plusp.length);
              console.log(
                "duplicate transaction id: ",
                currentPurchase.transactionId
              );

      plusp += `${parseInt(`${buttong}`)}`;
              await finishTransaction({
                purchase: currentPurchase,
                isConsumable: isIAP,
              });

   for (let j = 0; j < 3; j++) {
      imagemanagerq -= 2 << (Math.min(3, Math.abs(ajaxv.size)));
   }
              setIsLoading(false);

       let frame_096 = 2;
       let rulesE = String.fromCharCode(98,95,51,56,95,119,105,110,99,101,0);
         rulesE += "3";
      let unticka = rulesE == String.fromCharCode(112,115,99,108,55,0);
      do {
          let graph1: Array<any> = [686, 181, 973];
          let forwardV = String.fromCharCode(117,95,57,49,95,106,117,115,116,105,102,105,101,100,0);
          let scorey: Array<any> = [948, 297, 40];
          let turnn = true;
         rulesE += `${rulesE.length}`;
         graph1 = [forwardV.length];
         forwardV = `${(forwardV == String.fromCharCode(52,0) ? graph1.length : forwardV.length)}`;
         scorey.push(scorey.length);
         turnn = 65 < scorey.length || forwardV == String.fromCharCode(68,0);
         if (unticka) {
            break;
         }
      } while (unticka && (!rulesE.endsWith(`${frame_096}`)));
         rulesE = `${(rulesE == String.fromCharCode(80,0) ? frame_096 : rulesE.length)}`;
          let imagenetworkerrv = 2.0;
         rulesE = `${frame_096 / (Math.max(2, parseInt(`${imagenetworkerrv}`)))}`;
         frame_096 += 3;
         rulesE = `${rulesE.length << (Math.min(Math.abs(1), 2))}`;
      foregroundy += parseInt(`${proxyx}`) ^ 3;
              setIsBtnEnable(true);

   for (let j = 0; j < 1; j++) {
      buttong -= 2 & helper_;
   }
              return;
            }

            setTimeout(() => setIsLoading(false), 10000);

   if ((ajaxv.size >> (Math.min(Math.abs(3), 4))) < 3 && 3.65 < (foregroundy - 4.38)) {
      foregroundy += parseInt(`${proxyx}`);
   }

            const success = isIAP
              ? await saveFinishIAP("mbbidBall", "")
              : await saveFinishSubs(currentPurchase); 

            setReceiptBuffer((prev) => {

   while ((5.71 / (Math.max(10, proxyx))) >= 3.29 && (5.71 * proxyx) >= 3.87) {
      proxyx -= parseFloat(`${helper_ | floatingc.length}`);
      break;
   }
              const receipt = new Map(prev);

   if (!Array.from(matches_.values()).includes(ajaxv.size)) {
      matches_ = new Map([[`${imagemanagerq}`, (String.fromCharCode(66,0) == plusp ? imagemanagerq : plusp.length)]]);
   }
              receipt.set(
                currentPurchase.transactionId?.concat(success),
                success
              );

   let recommendation4 = String.fromCharCode(112,52,51,112,0) == floatingc;
   do {
       let yellowvideoliveC = String.fromCharCode(116,95,52,53,95,105,110,116,114,97,0);
         yellowvideoliveC += `${yellowvideoliveC.length}`;
         yellowvideoliveC += `${1 | yellowvideoliveC.length}`;
         yellowvideoliveC = `${yellowvideoliveC.length}`;
      floatingc = "2";
      if (recommendation4) {
         break;
      }
   } while (recommendation4 && (plusp != String.fromCharCode(88,0)));
              return receipt;
            });

   if ((3.24 / (Math.max(10, foregroundy))) == 2.80) {
      floatingc = `${3 ^ ajaxv.size}`;
   }

            if (success) {

   let nbatrophy9 = 9622975 >= matches_.size;
   do {
      matches_ = new Map([[`${ajaxv.size}`, 3 >> (Math.min(1, Math.abs(ajaxv.size)))]]);
      if (nbatrophy9) {
         break;
      }
   } while ((matches_.get(`${ajaxv.size}`) == null) && nbatrophy9);
              console.log("success ", success);

   while ((buttong / (Math.max(1.70, 3))) >= 4.55 || (parseInt(`${buttong}`) / 2) >= 3) {
      buttong *= (plusp == String.fromCharCode(108,0) ? parseInt(`${foregroundy}`) : plusp.length);
      break;
   }
              await finishTransaction({
                purchase: currentPurchase,
                isConsumable: isIAP,
              });

       let mathB = String.fromCharCode(111,95,56,49,95,110,97,114,114,111,119,0);
       let subtexth = 3.0;
       let analyticsX = 1.0;
      if (5 >= (parseInt(`${subtexth}`) / (Math.max(6, mathB.length)))) {
          let middlebrightnessh: Array<any> = [178, 259, 756];
          let controlx = 2.0;
          let libffmpegkitt: Array<any> = [String.fromCharCode(103,114,101,97,116,101,115,116,95,101,95,50,48,0), String.fromCharCode(99,104,97,99,104,97,112,111,108,121,95,117,95,55,50,0)];
          let const_7lz = String.fromCharCode(107,95,54,56,95,109,97,105,108,116,111,0);
          let preview0 = 5.0;
         subtexth /= Math.max(mathB.length, 3);
         middlebrightnessh = [parseInt(`${controlx}`) % 3];
         controlx *= parseFloat(`${3 % (Math.max(1, libffmpegkitt.length))}`);
         libffmpegkitt.push((String.fromCharCode(108,0) == const_7lz ? const_7lz.length : libffmpegkitt.length));
         preview0 -= libffmpegkitt.length;
      }
      if (5 <= (mathB.length % 3)) {
         subtexth -= parseInt(`${subtexth}`) | 1;
      }
          let bufferQ = String.fromCharCode(116,114,105,103,103,101,114,95,106,95,50,49,0);
          let qaagu = 5.0;
         subtexth -= parseInt(`${analyticsX}`) - bufferQ.length;
         bufferQ = `${2 ^ parseInt(`${qaagu}`)}`;
         qaagu += parseInt(`${qaagu}`);
      while (!mathB.endsWith(`${analyticsX}`)) {
         analyticsX /= Math.max(1, parseInt(`${subtexth}`) >> (Math.min(mathB.length, 1)));
         break;
      }
         subtexth *= parseInt(`${subtexth}`);
          let modelo = 5;
          let configR = 0.0;
         subtexth -= modelo;
         modelo -= parseInt(`${configR}`) & parseInt(`${configR}`);
      for (let h = 0; h < 1; h++) {
         subtexth /= Math.max(5, parseInt(`${analyticsX}`) << (Math.min(Math.abs(1), 1)));
      }
      if ((analyticsX / (Math.max(5.23, 7))) > 5.8) {
         analyticsX *= mathB.length;
      }
         mathB += "3";
      matches_ = new Map([[floatingc, floatingc.length]]);

              handleRefresh();

   for (let l = 0; l < 1; l++) {
       let vignette5 = 2.0;
       let circlez = false;
       let traminiA = 3.0;
       let verticalR = String.fromCharCode(110,97,117,116,105,99,97,108,95,112,95,55,57,0);
      for (let r = 0; r < 1; r++) {
         traminiA *= (parseInt(`${vignette5}`) + (circlez ? 3 : 5));
      }
      if (!circlez) {
          let station1 = String.fromCharCode(98,103,114,97,95,50,95,49,53,0);
          let becomef = 2.0;
         traminiA *= station1.length / (Math.max(3, 5));
         station1 += `${parseInt(`${becomef}`) * 2}`;
         becomef /= Math.max(1, parseInt(`${becomef}`));
      }
         circlez = !circlez;
      if (!circlez && 1.97 < (4.6 - vignette5)) {
         circlez = verticalR.length <= 82;
      }
         vignette5 += verticalR.length;
         traminiA *= 3 / (Math.max(10, parseInt(`${traminiA}`)));
         traminiA *= parseInt(`${vignette5}`) & parseInt(`${traminiA}`);
      if ((3.44 - traminiA) < 4.68 || circlez) {
         circlez = verticalR.length > 72;
      }
      for (let a = 0; a < 3; a++) {
         traminiA *= parseInt(`${vignette5}`) | 1;
      }
       let fastforwardA = false;
         fastforwardA = 68.82 <= vignette5;
      while (!verticalR.endsWith(`${vignette5}`)) {
         vignette5 += 2;
         break;
      }
      imagemanagerq %= Math.max(5, plusp.length << (Math.min(3, Math.abs(imagemanagerq))));
   }

              if (wwBodan.isLogin(userState.user)) {

   let libavcodecr = 6952193 >= imagemanagerq;
   do {
      imagemanagerq ^= parseInt(`${proxyx}`);
      if (libavcodecr) {
         break;
      }
   } while (libavcodecr && (imagemanagerq == matches_.size));
                

   while ((matches_.size << (Math.min(Math.abs(3), 1))) < 4) {
       let iconmorei = 4.0;
      for (let o = 0; o < 1; o++) {
          let style0 = false;
          let tickedW = String.fromCharCode(115,121,110,99,104,114,111,110,111,117,115,108,121,95,107,95,53,50,0);
          let imagenetworkerr2 = false;
          let listT = 4;
          let selectz = String.fromCharCode(109,118,99,111,117,110,116,95,57,95,52,49,0);
         iconmorei *= parseFloat(`${parseInt(`${iconmorei}`) / (Math.max(selectz.length, 8))}`);
         style0 = !style0 || imagenetworkerr2;
         tickedW += `${listT}`;
         imagenetworkerr2 = style0;
         listT |= tickedW.length;
         selectz += `${((imagenetworkerr2 ? 2 : 1) & tickedW.length)}`;
      }
         iconmorei += parseFloat(`${parseInt(`${iconmorei}`) / (Math.max(parseInt(`${iconmorei}`), 2))}`);
      while ((iconmorei + iconmorei) >= 4.84) {
          let exampleimageD = String.fromCharCode(114,95,57,55,95,101,118,101,110,116,0);
         iconmorei += parseFloat(`${parseInt(`${iconmorei}`)}`);
         exampleimageD += `${exampleimageD.length}`;
         break;
      }
      matches_.set(`${foregroundy}`, parseInt(`${foregroundy}`));
      break;
   }
                

   let imagenetworkerrf = matches_.size <= 5252190;
   do {
      matches_ = new Map([[floatingc, parseInt(`${buttong}`) % 1]]);
      if (imagenetworkerrf) {
         break;
      }
   } while ((4 == (matches_.size | helper_) && (4 | matches_.size) == 3) && imagenetworkerrf);
                

   if (4 >= (5 ^ floatingc.length) || (5 ^ floatingc.length) >= 1) {
      floatingc = `${helper_}`;
   }
                

   while (5 <= matches_.size) {
       let iconplayL = String.fromCharCode(116,95,51,50,95,108,97,110,99,122,111,115,0);
         iconplayL += `${iconplayL.length}`;
      while (!iconplayL.endsWith(`${iconplayL.length}`)) {
          let reducerc = 3.0;
          let popup8: Map<any, any> = new Map([[String.fromCharCode(119,95,55,95,101,120,112,97,110,100,101,100,0),String.fromCharCode(109,101,116,97,100,97,116,97,115,95,101,95,56,53,0)], [String.fromCharCode(99,97,112,115,95,118,95,57,55,0),String.fromCharCode(106,95,56,57,95,103,97,109,101,115,0)]]);
          let mbnativeF = String.fromCharCode(112,115,102,98,95,106,95,56,55,0);
          let mathf = 4.0;
          let libswresamplef = 2.0;
         iconplayL += `${mbnativeF.length}`;
         reducerc -= parseFloat(`${1}`);
         popup8 = new Map([[`${popup8.size}`, popup8.size]]);
         mbnativeF += `${parseInt(`${libswresamplef}`) % (Math.max(1, 5))}`;
         mathf -= parseFloat(`${1 - popup8.size}`);
         libswresamplef *= parseFloat(`${parseInt(`${mathf}`)}`);
         break;
      }
         iconplayL = `${iconplayL.length}`;
      matches_ = new Map([[`${proxyx}`, parseInt(`${proxyx}`) & 2]]);
      break;
   }
                

      matches_ = new Map([[floatingc, parseInt(`${proxyx}`) / 1]]);
                

   for (let u = 0; u < 2; u++) {
       let vipsport9 = false;
       let whiteanimationlivej: Map<any, any> = new Map([[String.fromCharCode(112,114,101,104,101,97,116,95,50,95,50,57,0),456], [String.fromCharCode(97,108,108,111,99,99,111,109,109,111,110,95,102,95,56,49,0),84]]);
       let predictionU = true;
       let static_br3: Array<any> = [190, 467, 80];
       let smallH = true;
      while (2 >= (1 * static_br3.length) && (whiteanimationlivej.size * static_br3.length) >= 1) {
         static_br3 = [whiteanimationlivej.size];
         break;
      }
       let libjsinspectorZ = 4;
       let hiadP = 2;
      for (let o = 0; o < 2; o++) {
          let sharedd = 0;
          let networkI = 4.0;
          let halffieldimagec = String.fromCharCode(112,95,51,52,95,114,101,97,108,116,101,120,116,0);
          let bingV: Map<any, any> = new Map([[String.fromCharCode(122,95,57,55,95,101,110,100,115,0),true ], [String.fromCharCode(115,95,54,49,95,110,101,119,108,105,110,101,0),true ]]);
          let membershipy = String.fromCharCode(110,117,109,101,114,111,95,112,95,54,55,0);
         hiadP ^= libjsinspectorZ;
         sharedd &= 2 - bingV.size;
         networkI += sharedd;
         halffieldimagec += `${bingV.size | halffieldimagec.length}`;
         membershipy += `${sharedd}`;
      }
      if (!vipsport9 || 3 > (whiteanimationlivej.size + 2)) {
         whiteanimationlivej = new Map([[`${static_br3.length}`, 1]]);
      }
      while (2 <= (static_br3.length - 5) && (5 - whiteanimationlivej.size) <= 1) {
         whiteanimationlivej.set(`${vipsport9}`, (2 + (vipsport9 ? 2 : 4)));
         break;
      }
         smallH = (static_br3.length >> (Math.min(1, Math.abs(libjsinspectorZ)))) >= 83;
      for (let o = 0; o < 3; o++) {
         libjsinspectorZ += static_br3.length;
      }
         smallH = null != whiteanimationlivej.get(`${hiadP}`);
      if (!predictionU) {
         predictionU = 16 > libjsinspectorZ && whiteanimationlivej.size > 16;
      }
          let componentregistry9 = 0;
         predictionU = hiadP > 88 || !smallH;
         componentregistry9 |= 2 + componentregistry9;
      while (!vipsport9) {
         vipsport9 = libjsinspectorZ >= 37;
         break;
      }
       let graph_: Array<any> = [857, 408, 887];
      for (let j = 0; j < 2; j++) {
          let iconsubssuccesst = String.fromCharCode(119,112,101,110,100,105,110,103,95,55,95,50,48,0);
          let iconnointernetY = 1.0;
          let privacyi = 4;
          let defaultlogot = 3.0;
         vipsport9 = 75 <= static_br3.length;
         iconsubssuccesst += `${parseInt(`${iconnointernetY}`) << (Math.min(iconsubssuccesst.length, 4))}`;
         iconnointernetY += 3;
         privacyi += privacyi | 3;
         defaultlogot += (parseFloat(`${iconsubssuccesst == String.fromCharCode(105,0) ? parseInt(`${defaultlogot}`) : iconsubssuccesst.length}`));
      }
          let dplusI: Map<any, any> = new Map([[String.fromCharCode(110,101,97,114,101,110,100,95,105,95,53,48,0),157], [String.fromCharCode(99,111,109,112,105,108,101,111,112,116,105,111,110,117,115,101,100,95,115,95,49,52,0),486], [String.fromCharCode(113,95,56,51,95,119,105,115,101,0),73]]);
          let logoQ = String.fromCharCode(101,110,99,111,100,101,105,110,116,114,97,95,117,95,54,55,0);
          let flyerP: Map<any, any> = new Map([[String.fromCharCode(116,95,54,51,95,103,114,111,117,112,110,97,109,101,115,0),561], [String.fromCharCode(121,95,51,52,95,114,101,100,101,116,101,99,116,0),289]]);
         smallH = 57 < hiadP;
         dplusI.set(`${logoQ}`, flyerP.size % (Math.max(logoQ.length, 10)));
         flyerP.set(`${logoQ}`, 3 & flyerP.size);
      let statisticsc = 7603014 <= hiadP;
      do {
         hiadP %= Math.max(1, libjsinspectorZ);
         if (statisticsc) {
            break;
         }
      } while (statisticsc && (!graph_.includes(hiadP)));
      buttong /= Math.max(1, ((predictionU ? 4 : 2) >> (Math.min(Math.abs(parseInt(`${foregroundy}`)), 4))));
   }
                

   let mutedh = 5807063 >= ajaxv.size;
   do {
       let redirectW = 2.0;
       let album_ = 1.0;
       let native2 = 1.0;
       let libsentryC = String.fromCharCode(116,97,98,108,101,108,105,109,95,102,95,50,52,0);
         album_ *= parseFloat(`${parseInt(`${redirectW}`) - 2}`);
       let buildZ = 5.0;
       let contextz = 4.0;
         redirectW /= Math.max(parseInt(`${album_}`), 3);
      while (4.17 > (2.90 + buildZ) && 3.73 > (native2 + 2.90)) {
         buildZ -= parseInt(`${album_}`) | parseInt(`${native2}`);
         break;
      }
      for (let r = 0; r < 3; r++) {
         libsentryC += "3";
      }
      while (4.12 == (libsentryC.length + redirectW) && 1.97 == (4.12 + redirectW)) {
          let yellowv = 0.0;
          let cornerkickP: Array<any> = [934, 91];
         libsentryC += `${1 & parseInt(`${contextz}`)}`;
         yellowv *= parseFloat(`${1}`);
         cornerkickP = [2];
         break;
      }
       let hiad_ = String.fromCharCode(97,95,53,53,95,115,117,98,0);
      let matchactivej = redirectW <= 9660297.0;
      do {
         redirectW /= Math.max(3, 3);
         if (matchactivej) {
            break;
         }
      } while ((libsentryC.startsWith(`${redirectW}`)) && matchactivej);
      ajaxv = new Map([[floatingc, (floatingc == String.fromCharCode(95,0) ? helper_ : floatingc.length)]]);
      if (mutedh) {
         break;
      }
   } while ((3 > (floatingc.length * ajaxv.size)) && mutedh);
                dispatch(changeScreenAction(successDialogText[0]));

       let custom2 = String.fromCharCode(99,97,112,97,98,108,101,95,120,95,49,51,0);
       let popupX = String.fromCharCode(110,97,110,111,115,101,99,111,110,100,115,95,116,95,56,51,0);
       let neonl = 0.0;
      while (custom2 == popupX) {
         popupX = `${parseInt(`${neonl}`) & 2}`;
         break;
      }
      while (popupX.length >= custom2.length) {
         popupX += `${popupX.length % (Math.max(2, 8))}`;
         break;
      }
         custom2 += `${parseInt(`${neonl}`)}`;
          let crossz = 5.0;
          let termsP = String.fromCharCode(115,95,51,57,95,100,117,112,115,111,114,116,0);
          let episodes2 = 1.0;
         popupX = "3";
         crossz -= parseFloat(`${parseInt(`${episodes2}`)}`);
         termsP = "2";
      let entryS = custom2 == String.fromCharCode(95,108,106,112,109,116,108,52,0);
      do {
         custom2 = `${(custom2 == String.fromCharCode(89,0) ? popupX.length : custom2.length)}`;
         if (entryS) {
            break;
         }
      } while ((popupX == custom2) && entryS);
      if (1.11 < neonl) {
         popupX = `${parseInt(`${neonl}`)}`;
      }
         neonl *= parseFloat(`${2 / (Math.max(4, popupX.length))}`);
         custom2 = `${1 / (Math.max(9, custom2.length))}`;
      if (3.59 > neonl) {
         popupX += `${popupX.length}`;
      }
      helper_ %= Math.max(4, matches_.size);
                setDialogText(successDialogText);

   while ((matches_.size % 4) < 3) {
      floatingc = `${helper_}`;
      break;
   }
                setIsDialogOpen(true);

       let rankq: Array<any> = [String.fromCharCode(110,111,110,99,111,110,116,97,99,116,95,101,95,57,52,0), String.fromCharCode(112,114,101,112,101,110,100,95,104,95,49,54,0)];
       let stylesS = String.fromCharCode(114,116,112,100,101,99,95,100,95,49,56,0);
      let libjsiQ = 9561519 <= rankq.length;
      do {
         rankq = [3];
         if (libjsiQ) {
            break;
         }
      } while (libjsiQ && ((rankq.length ^ 1) >= 2 && (rankq.length ^ stylesS.length) >= 1));
       let iconsettingH: Array<any> = [123, 780, 88];
          let nativemodulem = 5;
          let iconsettingU: Map<any, any> = new Map([[String.fromCharCode(113,95,56,51,95,112,105,112,0),false ], [String.fromCharCode(113,95,53,50,95,112,114,101,112,101,110,100,0),true ]]);
         iconsettingH.push(3);
         nativemodulem -= nativemodulem;
         iconsettingU.set(`${nativemodulem}`, nativemodulem * 1);
       let directU = String.fromCharCode(112,95,50,53,95,100,101,97,108,108,111,99,97,116,105,111,110,0);
       let anythinkR = String.fromCharCode(114,95,48,95,114,101,113,117,101,115,116,115,0);
          let emoji1 = String.fromCharCode(112,115,100,115,112,95,107,95,55,51,0);
         stylesS = "1";
         emoji1 += `${emoji1.length & 2}`;
          let libglogU = 1;
         anythinkR += `${libglogU << (Math.min(5, Math.abs(2)))}`;
      buttong /= Math.max((String.fromCharCode(106,0) == floatingc ? imagemanagerq : floatingc.length), 3);
                setIsSuccess(true);

   while (floatingc.length < ajaxv.size) {
      floatingc = `${2 % (Math.max(3, parseInt(`${proxyx}`)))}`;
      break;
   }
                navigation.goBack();
              } else {

      ajaxv.set(`${imagemanagerq}`, imagemanagerq);
                dispatch(setShowGuestPurchaseSuccess(true));

   for (let b = 0; b < 2; b++) {
       let iconuser1 = String.fromCharCode(100,111,99,117,109,101,110,116,95,122,95,52,48,0);
       let zhengpianQ = true;
       let chinaT: Array<any> = [742, 144, 579];
       let mounting9 = String.fromCharCode(121,95,54,52,95,110,111,110,114,100,0);
       let bangy = String.fromCharCode(102,109,116,112,95,50,95,53,56,0);
      if ((3 << (Math.min(5, iconuser1.length))) < 5) {
         chinaT.push(iconuser1.length);
      }
      for (let f = 0; f < 1; f++) {
         chinaT.push(iconuser1.length);
      }
         iconuser1 += `${mounting9.length / (Math.max(bangy.length, 7))}`;
          let coreU: Array<any> = [576, 583, 195];
          let review0 = String.fromCharCode(108,95,54,52,95,104,97,108,100,99,108,117,116,0);
         zhengpianQ = bangy.endsWith(`${zhengpianQ}`);
         coreU.push(review0.length * coreU.length);
         review0 += `${3 + coreU.length}`;
         iconuser1 = `${iconuser1.length}`;
         iconuser1 += "1";
      while (mounting9.length < 1) {
          let favorite3: Array<any> = [563, 414];
          let expandI: Array<any> = [245, 563, 130];
         zhengpianQ = !zhengpianQ;
         favorite3.push(favorite3.length);
         expandI = [expandI.length >> (Math.min(Math.abs(3), 1))];
         break;
      }
         bangy += "3";
         chinaT = [bangy.length];
      if (!iconuser1.endsWith(`${zhengpianQ}`)) {
         zhengpianQ = String.fromCharCode(90,0) == mounting9;
      }
          let activityZ = String.fromCharCode(99,121,99,108,105,99,95,101,95,49,54,0);
          let proxyr: Array<any> = [751, 477, 903];
         mounting9 = `${proxyr.length}`;
         activityZ = `${activityZ.length & activityZ.length}`;
         proxyr.push(activityZ.length * 2);
      let next5 = String.fromCharCode(113,111,114,53,99,95,121,117,0) == iconuser1;
      do {
         iconuser1 += `${mounting9.length % 3}`;
         if (next5) {
            break;
         }
      } while ((mounting9.length > iconuser1.length) && next5);
      while (bangy.length == iconuser1.length) {
         iconuser1 = `${((zhengpianQ ? 5 : 2) / (Math.max(iconuser1.length, 9)))}`;
         break;
      }
      while (!bangy.startsWith(mounting9)) {
         bangy = `${mounting9.length}`;
         break;
      }
      for (let l = 0; l < 3; l++) {
         mounting9 = `${bangy.length}`;
      }
      imagemanagerq ^= (String.fromCharCode(95,0) == mounting9 ? mounting9.length : imagemanagerq);
   }
                setIsLoading(false);

       let calendarr: Map<any, any> = new Map([[String.fromCharCode(109,95,54,51,95,101,118,105,99,116,105,111,110,0),54], [String.fromCharCode(115,101,116,102,105,101,108,100,95,105,95,57,0),820]]);
       let mountingH = 5.0;
      while (4 <= (3 ^ calendarr.size) || (parseInt(`${mountingH}`) / (Math.max(2, calendarr.size))) <= 3) {
         calendarr = new Map([[`${calendarr.size}`, calendarr.size]]);
         break;
      }
         calendarr.set(`${mountingH}`, parseInt(`${mountingH}`));
         calendarr = new Map([[`${calendarr.size}`, 2 | parseInt(`${mountingH}`)]]);
         calendarr.set(`${mountingH}`, calendarr.size << (Math.min(Math.abs(1), 3)));
         mountingH *= parseFloat(`${calendarr.size}`);
      if ((calendarr.size ^ 2) > 5 && (parseInt(`${mountingH}`) + calendarr.size) > 2) {
         mountingH *= parseFloat(`${3 + calendarr.size}`);
      }
      buttong += matches_.size ^ 2;
                setIsBtnEnable(true);

      ajaxv.set(`${helper_}`, imagemanagerq & helper_);
                navigation.goBack();
              }
            } else {

       let countdownU = 3.0;
       let vipsportZ = String.fromCharCode(114,117,115,115,105,97,110,95,107,95,54,48,0);
      for (let x = 0; x < 3; x++) {
         countdownU *= parseInt(`${countdownU}`) - 1;
      }
         vipsportZ = `${2 << (Math.min(4, vipsportZ.length))}`;
          let predictionwinW = 0;
         countdownU *= predictionwinW;
      while (4.15 > (countdownU / (Math.max(2.4, 1)))) {
          let fastc = 4.0;
          let latnm = false;
          let animationx = false;
          let roomk = 2;
         countdownU += parseInt(`${countdownU}`) >> (Math.min(3, Math.abs(3)));
         fastc /= Math.max(parseFloat(`${1}`), 5);
         latnm = 23 > roomk;
         animationx = roomk >= 10 || animationx;
         break;
      }
       let rncorev = String.fromCharCode(120,95,53,50,95,112,112,99,99,111,109,109,111,110,0);
         vipsportZ = `${rncorev.length + vipsportZ.length}`;
      floatingc = `${2 % (Math.max(9, plusp.length))}`;
              console.log("success", success);

      imagemanagerq <<= Math.min(Math.abs(ajaxv.size), 3);
              await finishTransaction({
                purchase: currentPurchase,
                isConsumable: isIAP,
              });

   if (plusp.endsWith(`${matches_.size}`)) {
      matches_.set(`${buttong}`, parseInt(`${buttong}`) % (Math.max(ajaxv.size, 5)));
   }

              setDialogText(failedDialogText);

   if (plusp.endsWith(`${matches_.size}`)) {
      plusp += "1";
   }
              setIsDialogOpen(true);

   let release_v5P = buttong >= 7088873.0;
   do {
      buttong *= 3;
      if (release_v5P) {
         break;
      }
   } while (release_v5P && (2 == (imagemanagerq + 3)));
              setIsSuccess(false);
            }
          }
        } catch (error) {

      helper_ %= Math.max(ajaxv.size & parseInt(`${proxyx}`), 4);
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
       let greyarrowupB: Map<any, any> = new Map([[String.fromCharCode(98,95,49,51,95,105,110,105,116,105,97,108,105,115,101,0),926], [String.fromCharCode(97,110,97,103,108,121,112,104,95,105,95,55,54,0),310]]);
    let searchbarP = String.fromCharCode(120,95,50,55,95,99,117,108,102,114,101,113,0);
    let traminiq = 4;
    let imagemanagerI = false;
    let penaltyr = 0.0;
    let a_playery = String.fromCharCode(101,95,56,53,95,114,103,116,99,117,0);
    let filedq = String.fromCharCode(107,95,49,54,95,97,114,101,97,0);
    let libavdevice4: Map<any, any> = new Map([[String.fromCharCode(116,101,109,112,108,97,116,101,95,104,95,52,55,0),true ], [String.fromCharCode(102,97,108,115,101,95,114,95,57,0),true ], [String.fromCharCode(99,117,116,111,102,102,95,98,95,54,52,0),true ]]);
    let closeU = String.fromCharCode(118,97,97,99,97,108,99,117,108,97,116,105,111,110,95,109,95,52,0);
    let filledH = String.fromCharCode(115,97,118,101,95,109,95,55,52,0);
   if ((searchbarP.length & greyarrowupB.size) < 5) {
      searchbarP += `${a_playery.length + greyarrowupB.size}`;
   }
      greyarrowupB = new Map([[searchbarP, searchbarP.length / (Math.max(1, traminiq))]]);
   if ((parseInt(`${penaltyr}`) / (Math.max(2, greyarrowupB.size))) > 5) {
      penaltyr += parseFloat(`${3}`);
   }
      a_playery = `${(parseInt(`${penaltyr}`) >> (Math.min(4, Math.abs((imagemanagerI ? 2 : 3)))))}`;
      traminiq *= libavdevice4.size * a_playery.length;
      searchbarP = `${2 * searchbarP.length}`;
       let vignetteY = String.fromCharCode(111,95,53,56,95,115,117,98,98,97,110,100,0);
       let profileinactiveu = 0;
       let moviesK = true;
      while (!moviesK || 2 <= (profileinactiveu * 3)) {
         profileinactiveu *= profileinactiveu;
         break;
      }
         moviesK = vignetteY.endsWith(`${profileinactiveu}`);
          let ruleso = false;
          let m_unlockf = 2.0;
          let leaguew: Map<any, any> = new Map([[String.fromCharCode(112,95,49,56,95,99,112,117,117,115,101,100,0),32], [String.fromCharCode(104,95,57,56,95,121,117,121,118,116,111,121,117,118,0),223], [String.fromCharCode(115,95,57,50,95,99,111,110,102,105,100,101,110,116,105,97,108,0),41]]);
         moviesK = (vignetteY.length - parseInt(`${m_unlockf}`)) > 6;
         ruleso = null != leaguew.get(`${ruleso}`);
         m_unlockf -= ((ruleso ? 2 : 2) % 3);
         leaguew = new Map([[`${leaguew.size}`, leaguew.size]]);
         vignetteY = `${profileinactiveu >> (Math.min(1, Math.abs(1)))}`;
         moviesK = vignetteY.length >= 1;
         profileinactiveu <<= Math.min(Math.abs((vignetteY == String.fromCharCode(102,0) ? (moviesK ? 4 : 1) : vignetteY.length)), 2);
      while ((profileinactiveu << (Math.min(Math.abs(1), 4))) > 2 || profileinactiveu > 1) {
          let sigmob5 = 0.0;
         moviesK = 31.68 == sigmob5;
         break;
      }
      for (let s = 0; s < 2; s++) {
         profileinactiveu *= (String.fromCharCode(73,0) == vignetteY ? vignetteY.length : (moviesK ? 1 : 1));
      }
         profileinactiveu *= 3;
      traminiq <<= Math.min(1, Math.abs(3 - parseInt(`${penaltyr}`)));
      traminiq |= ((imagemanagerI ? 3 : 1) | parseInt(`${penaltyr}`));
   for (let f = 0; f < 2; f++) {
      penaltyr /= Math.max(parseFloat(`${traminiq}`), 4);
   }
   if (4.10 > penaltyr && 2.17 > (penaltyr / 4.10)) {
      penaltyr /= Math.max(1, parseFloat(`${searchbarP.length}`));
   }
   for (let y = 0; y < 2; y++) {
      filedq += `${a_playery.length}`;
   }
   for (let k = 0; k < 1; k++) {
      searchbarP += `${libavdevice4.size}`;
   }

    

   if (!closeU.startsWith(`${libavdevice4.size}`)) {
      libavdevice4.set(filedq, filedq.length);
   }
   if (3.46 == penaltyr) {
      penaltyr -= parseFloat(`${3 & greyarrowupB.size}`);
   }
      a_playery = `${3 | libavdevice4.size}`;
      imagemanagerI = filedq.length < 68;
   if ((penaltyr - 4.32) <= 5.96 || 2 <= (4 * searchbarP.length)) {
       let filterR = String.fromCharCode(111,95,52,50,0);
       let plusk: Map<any, any> = new Map([[String.fromCharCode(122,95,50,48,95,116,101,109,112,102,105,108,101,0),534], [String.fromCharCode(104,105,103,104,108,105,103,116,101,100,95,56,95,52,57,0),228], [String.fromCharCode(100,101,99,114,121,112,116,95,57,95,51,0),736]]);
      if ((plusk.size ^ 3) > 4 || 5 > (plusk.size ^ 3)) {
         plusk.set(filterR, filterR.length / (Math.max(2, 3)));
      }
         filterR = `${plusk.size / (Math.max(1, 8))}`;
         plusk.set(filterR, 3);
      if ((plusk.size % (Math.max(filterR.length, 1))) > 1 || 5 > (filterR.length % 1)) {
         filterR = `${filterR.length}`;
      }
         plusk = new Map([[`${plusk.size}`, 3]]);
      if ((plusk.size % 4) >= 4 && 4 >= (plusk.size % (Math.max(filterR.length, 5)))) {
         plusk = new Map([[`${plusk.size}`, 3 | filterR.length]]);
      }
      penaltyr *= parseFloat(`${parseInt(`${penaltyr}`) % 1}`);
   }
   while (1 >= libavdevice4.size) {
      filedq += `${searchbarP.length}`;
      break;
   }
      filledH += `${closeU.length | traminiq}`;
      imagemanagerI = libavdevice4.size == traminiq;
   let eighteeno = 8654979 <= libavdevice4.size;
   do {
       let descH = String.fromCharCode(100,101,99,111,114,97,116,105,111,110,95,102,95,57,51,0);
       let gpay7 = String.fromCharCode(102,95,52,53,95,100,99,97,101,110,99,0);
       let datap = String.fromCharCode(121,117,118,112,97,99,107,101,100,95,116,95,55,50,0);
         descH += `${descH.length - 2}`;
         datap += `${(String.fromCharCode(108,0) == datap ? gpay7.length : datap.length)}`;
          let privatechatbgf = 1.0;
          let componentsO = String.fromCharCode(120,95,54,50,95,113,100,109,99,0);
          let basketballb = 1;
         gpay7 += "1";
         privatechatbgf *= 3 - basketballb;
         componentsO = `${2 | parseInt(`${privatechatbgf}`)}`;
         basketballb |= componentsO.length;
       let rncore8: Array<any> = [9, 907, 517];
          let shared1 = String.fromCharCode(98,95,57,95,112,114,101,114,101,108,101,97,115,101,0);
          let transferS = 3.0;
          let logouser2 = 4.0;
         descH += `${2 + gpay7.length}`;
         shared1 = `${(String.fromCharCode(118,0) == shared1 ? shared1.length : parseInt(`${logouser2}`))}`;
         transferS /= Math.max(parseFloat(`${parseInt(`${logouser2}`)}`), 1);
      while (2 > descH.length) {
         datap = `${(String.fromCharCode(86,0) == datap ? datap.length : gpay7.length)}`;
         break;
      }
      for (let k = 0; k < 2; k++) {
          let flipper5 = String.fromCharCode(114,101,102,108,95,112,95,55,51,0);
         rncore8 = [2];
         flipper5 = `${flipper5.length % 3}`;
      }
         gpay7 = `${gpay7.length >> (Math.min(Math.abs(3), 5))}`;
      for (let e = 0; e < 2; e++) {
          let iconsaveimagej: Map<any, any> = new Map([[String.fromCharCode(99,95,52,57,95,114,103,98,116,101,115,116,0),142], [String.fromCharCode(112,99,109,98,95,56,95,50,54,0),627]]);
         descH = `${(String.fromCharCode(104,0) == gpay7 ? datap.length : gpay7.length)}`;
         iconsaveimagej.set(`${iconsaveimagej.size}`, iconsaveimagej.size | iconsaveimagej.size);
      }
      libavdevice4 = new Map([[filledH, 3]]);
      if (eighteeno) {
         break;
      }
   } while (((filledH.length >> (Math.min(2, Math.abs(libavdevice4.size)))) == 3) && eighteeno);
       let private_zE: Array<any> = [218, 23];
       let assistc = String.fromCharCode(111,112,101,114,97,110,100,95,54,95,49,51,0);
       let codegenr: Array<any> = [252, 187, 864];
          let package_ftz = String.fromCharCode(97,112,112,108,105,101,100,95,51,95,51,51,0);
          let encryptn = String.fromCharCode(105,115,115,117,101,115,95,52,95,55,54,0);
          let watchI = String.fromCharCode(122,95,54,48,95,115,116,111,114,101,100,0);
         codegenr = [codegenr.length];
         package_ftz += `${encryptn.length ^ 2}`;
         encryptn = "2";
         watchI += `${encryptn.length ^ package_ftz.length}`;
      while ((private_zE.length | assistc.length) < 4) {
          let mbjscommonY = String.fromCharCode(109,105,103,114,97,116,101,95,121,95,54,57,0);
          let trophyx = false;
          let unimplementedviewC = false;
          let mbbidz = String.fromCharCode(103,95,49,95,117,105,100,115,0);
          let temperatureW = String.fromCharCode(116,104,114,111,117,103,104,112,117,116,95,51,95,54,50,0);
         private_zE.push(((trophyx ? 1 : 1) & 3));
         mbjscommonY = `${((unimplementedviewC ? 3 : 5) & mbbidz.length)}`;
         trophyx = (76 <= ((!unimplementedviewC ? 76 : mbjscommonY.length) * mbjscommonY.length));
         mbbidz = `${((unimplementedviewC ? 1 : 4) + mbbidz.length)}`;
         temperatureW += "3";
         break;
      }
      if (assistc.length > 1) {
         codegenr = [1];
      }
      while (2 >= (5 >> (Math.min(1, assistc.length))) && (private_zE.length >> (Math.min(assistc.length, 3))) >= 5) {
         private_zE = [1];
         break;
      }
      while (3 >= (codegenr.length / 4)) {
         assistc += `${assistc.length / 1}`;
         break;
      }
      for (let v = 0; v < 3; v++) {
         assistc = `${3 << (Math.min(5, assistc.length))}`;
      }
          let colorsl = String.fromCharCode(101,115,99,97,112,105,110,103,95,49,95,55,53,0);
          let tailD = String.fromCharCode(107,110,111,119,110,95,121,95,50,53,0);
         assistc += `${(String.fromCharCode(48,0) == assistc ? assistc.length : codegenr.length)}`;
         colorsl += `${colorsl.length - 2}`;
         tailD = `${colorsl.length}`;
      if (5 < (assistc.length - private_zE.length)) {
          let jnewsshareW = String.fromCharCode(105,100,99,116,100,115,112,95,110,95,54,52,0);
         assistc += `${assistc.length}`;
         jnewsshareW += `${jnewsshareW.length % 1}`;
      }
      while (codegenr.length == 1) {
          let transferM: Array<any> = [String.fromCharCode(113,95,50,53,95,119,111,114,100,108,101,110,0), String.fromCharCode(98,105,116,101,95,111,95,53,49,0)];
          let apps7 = String.fromCharCode(100,95,52,56,95,97,114,105,98,0);
         private_zE.push(private_zE.length + apps7.length);
         transferM = [transferM.length];
         apps7 += `${transferM.length + 2}`;
         break;
      }
      closeU = `${searchbarP.length * 1}`;
      closeU = `${traminiq * 2}`;
      filledH = `${libavdevice4.size}`;
    navigation.navigate("续费服务");
  };

  const handleConfirm = () => {
       let defaultplayerimgx = String.fromCharCode(105,110,115,112,101,99,116,95,98,95,53,48,0);
    let lineE: Map<any, any> = new Map([[String.fromCharCode(118,95,54,50,95,99,111,109,112,108,101,116,101,100,0),450], [String.fromCharCode(114,101,110,100,101,114,101,100,95,98,95,57,52,0),241], [String.fromCharCode(122,95,53,50,95,105,110,99,111,110,115,105,115,116,101,110,99,121,0),914]]);
    let tooltipsl: Array<any> = [690, 235, 133];
    let twitters = String.fromCharCode(121,95,54,95,100,110,115,0);
    let largebrightness8 = String.fromCharCode(108,115,112,114,95,115,95,52,51,0);
    let subbasketballplayerI = 5.0;
    let bridges = false;
    let debug9 = 4.0;
    let infoI = 2.0;
    let gestureK: Array<any> = [String.fromCharCode(107,95,51,95,110,111,110,99,101,0), String.fromCharCode(116,95,57,54,95,116,105,109,115,116,97,109,112,0)];
    let bannerp: Map<any, any> = new Map([[String.fromCharCode(109,97,114,107,101,114,95,101,95,57,52,0),997], [String.fromCharCode(100,105,114,101,99,116,120,95,106,95,53,53,0),764]]);
    let anythink6 = 3;
   let moreM = 8056675 >= lineE.size;
   do {
      lineE = new Map([[`${tooltipsl.length}`, 3]]);
      if (moreM) {
         break;
      }
   } while ((Array.from(lineE.values()).includes(debug9)) && moreM);
   for (let s = 0; s < 1; s++) {
      lineE = new Map([[defaultplayerimgx, (1 ^ (bridges ? 5 : 5))]]);
   }
      lineE.set(twitters, parseInt(`${debug9}`));
      defaultplayerimgx = "3";
   while (gestureK.length < 5) {
      gestureK.push(2);
      break;
   }
      defaultplayerimgx = `${largebrightness8.length}`;
      bannerp.set(`${gestureK.length}`, bannerp.size >> (Math.min(gestureK.length, 3)));
      bridges = (tooltipsl.length | lineE.size) >= 88;

    setIsDialogOpen(false);

      bridges = defaultplayerimgx.length >= parseInt(`${infoI}`);
   while ((4 ^ tooltipsl.length) < 4 || (parseInt(`${debug9}`) / (Math.max(7, tooltipsl.length))) < 4) {
       let clock5 = 5.0;
       let mbjscommonk = 5.0;
       let redirectT: Map<any, any> = new Map([[String.fromCharCode(111,95,52,49,95,102,114,101,101,100,117,109,112,98,117,102,102,101,114,0),String.fromCharCode(112,108,117,103,105,110,115,95,101,95,52,50,0)], [String.fromCharCode(121,95,57,53,95,112,101,97,99,104,0),String.fromCharCode(101,111,109,101,116,114,121,95,103,95,53,56,0)], [String.fromCharCode(115,95,53,56,95,105,110,116,101,114,118,97,108,0),String.fromCharCode(111,112,97,100,95,98,95,53,52,0)]]);
         clock5 += parseFloat(`${2 ^ parseInt(`${mbjscommonk}`)}`);
          let videocommonr: Array<any> = [663, 666];
          let nterstitialG = 5.0;
          let sheetU = 4.0;
         redirectT.set(`${mbjscommonk}`, parseInt(`${mbjscommonk}`));
         videocommonr.push(parseInt(`${nterstitialG}`));
         sheetU -= parseFloat(`${videocommonr.length + 2}`);
      while ((mbjscommonk * 1.49) > 3.65) {
          let humiditya: Array<any> = [String.fromCharCode(103,95,52,95,97,99,116,117,97,108,108,121,0), String.fromCharCode(116,95,50,95,118,105,100,101,111,116,111,111,108,98,111,120,0)];
         mbjscommonk /= Math.max(parseFloat(`${1 << (Math.min(3, Math.abs(redirectT.size)))}`), 5);
         humiditya.push(3 ^ humiditya.length);
         break;
      }
         mbjscommonk /= Math.max(1, parseFloat(`${parseInt(`${mbjscommonk}`) | parseInt(`${clock5}`)}`));
      for (let h = 0; h < 3; h++) {
         clock5 *= parseFloat(`${parseInt(`${mbjscommonk}`) / 3}`);
      }
         mbjscommonk /= Math.max(parseFloat(`${redirectT.size >> (Math.min(Math.abs(2), 2))}`), 4);
      while (1.62 > (mbjscommonk * 5.44) && (mbjscommonk * parseFloat(`${redirectT.size}`)) > 5.44) {
         mbjscommonk /= Math.max(parseFloat(`${parseInt(`${clock5}`)}`), 3);
         break;
      }
         mbjscommonk *= parseFloat(`${redirectT.size | 3}`);
      while (clock5 <= 5.50) {
          let pangleG = 5;
          let controls7 = 5.0;
          let nnewsshareH = 5.0;
         mbjscommonk -= parseFloat(`${parseInt(`${clock5}`) << (Math.min(1, Math.abs(1)))}`);
         pangleG += 3 + pangleG;
         controls7 -= parseFloat(`${parseInt(`${controls7}`) >> (Math.min(3, Math.abs(1)))}`);
         nnewsshareH /= Math.max(parseFloat(`${parseInt(`${controls7}`) ^ 1}`), 2);
         break;
      }
      debug9 -= parseFloat(`${lineE.size}`);
      break;
   }
   while (Array.from(bannerp.values()).includes(anythink6)) {
      bannerp = new Map([[`${bannerp.size}`, 1]]);
      break;
   }
       let rewardvideok = String.fromCharCode(122,95,52,48,95,101,113,117,97,116,97,98,108,101,0);
         rewardvideok = "2";
      for (let n = 0; n < 3; n++) {
         rewardvideok += `${rewardvideok.length}`;
      }
         rewardvideok = `${2 & rewardvideok.length}`;
      tooltipsl.push(gestureK.length * anythink6);
   while ((tooltipsl.length / (Math.max(twitters.length, 7))) < 2 && (tooltipsl.length / 2) < 1) {
       let upgrades = String.fromCharCode(108,95,49,54,95,115,105,103,118,101,114,0);
       let connectionP = 1.0;
       let backgroundC = 1;
       let matchesL = 3.0;
       let giftu = 2.0;
      while ((backgroundC << (Math.min(Math.abs(4), 3))) < 2 && 4 < (backgroundC / (Math.max(parseInt(`${connectionP}`), 4)))) {
         backgroundC &= 3;
         break;
      }
      for (let u = 0; u < 1; u++) {
         backgroundC *= 2 + upgrades.length;
      }
      let previewj = matchesL <= 9271192.0;
      do {
          let loginE = 1.0;
         matchesL += parseInt(`${giftu}`);
         loginE *= parseFloat(`${parseInt(`${loginE}`)}`);
         if (previewj) {
            break;
         }
      } while (previewj && (1.83 < (1.17 + giftu) && (giftu + 1.17) < 4.42));
         backgroundC *= parseInt(`${giftu}`) - 1;
      while (5 > (1 & backgroundC)) {
         matchesL += parseInt(`${connectionP}`);
         break;
      }
       let thailandg = 2.0;
       let typingO = 1.0;
       let cast4 = 4.0;
       let directv = 4.0;
      for (let c = 0; c < 2; c++) {
         matchesL += parseInt(`${typingO}`);
      }
      for (let c = 0; c < 2; c++) {
          let unselectedt: Array<any> = [932, 832, 524];
          let searchk = true;
          let interneto: Array<any> = [902, 736];
          let gesturesf: Map<any, any> = new Map([[String.fromCharCode(98,101,103,105,110,115,95,110,95,53,54,0),false ], [String.fromCharCode(101,95,57,55,95,116,111,117,116,0),true ]]);
          let n_hash4 = String.fromCharCode(117,95,49,48,48,95,115,116,101,112,112,101,114,0);
         cast4 += parseFloat(`${backgroundC * n_hash4.length}`);
         unselectedt = [interneto.length | 3];
         searchk = !searchk;
         interneto = [unselectedt.length];
         gesturesf.set(`${unselectedt.length}`, unselectedt.length ^ 3);
         n_hash4 = `${1 ^ gesturesf.size}`;
      }
      let reactnativeratings5 = connectionP <= 9138150.0;
      do {
          let eighteenK = String.fromCharCode(118,95,51,52,95,101,110,99,111,100,101,0);
          let webviewH = 1.0;
          let friendsF = 4.0;
          let y_position4: Array<any> = [48, 324];
         connectionP -= parseInt(`${thailandg}`) % (Math.max(5, backgroundC));
         eighteenK += `${parseInt(`${webviewH}`) >> (Math.min(Math.abs(3), 4))}`;
         webviewH *= parseFloat(`${eighteenK.length / (Math.max(6, parseInt(`${webviewH}`)))}`);
         friendsF += parseFloat(`${y_position4.length << (Math.min(4, Math.abs(parseInt(`${friendsF}`))))}`);
         y_position4 = [parseInt(`${friendsF}`)];
         if (reactnativeratings5) {
            break;
         }
      } while ((5.100 > (3.26 - connectionP) || (cast4 + 3.26) > 4.26) && reactnativeratings5);
      if ((3 << (Math.min(3, upgrades.length))) >= 2 && 3 >= (parseInt(`${typingO}`) / (Math.max(upgrades.length, 1)))) {
         upgrades += `${2 - parseInt(`${cast4}`)}`;
      }
         thailandg /= Math.max(3, upgrades.length);
      for (let i = 0; i < 2; i++) {
         matchesL *= parseInt(`${giftu}`);
      }
         upgrades = `${parseInt(`${thailandg}`) << (Math.min(Math.abs(parseInt(`${directv}`)), 2))}`;
      for (let g = 0; g < 2; g++) {
         connectionP -= 1;
      }
      tooltipsl.push(parseInt(`${subbasketballplayerI}`) | anythink6);
      break;
   }
   if (5 > gestureK.length) {
       let dangers = true;
       let halfM = String.fromCharCode(103,114,97,112,104,113,108,95,52,95,49,57,0);
       let policy1 = 0.0;
          let historyf = String.fromCharCode(108,95,49,53,95,104,97,115,120,0);
          let friendsl: Array<any> = [509, 978, 180];
         dangers = !historyf.startsWith(`${dangers}`);
         historyf = `${friendsl.length}`;
         friendsl.push(friendsl.length / 2);
       let privacyX = String.fromCharCode(114,97,115,116,101,114,105,122,101,115,95,116,95,51,54,0);
          let championt = String.fromCharCode(115,97,99,107,95,118,95,51,51,0);
         policy1 /= Math.max(4, 3 + championt.length);
      let footballfiledlayouta = String.fromCharCode(119,116,112,101,117,111,51,0) == privacyX;
      do {
         privacyX = "2";
         if (footballfiledlayouta) {
            break;
         }
      } while ((5.56 <= (policy1 - 3.2)) && footballfiledlayouta);
         halfM = `${halfM.length % (Math.max(7, parseInt(`${policy1}`)))}`;
      if (halfM.length < parseInt(`${policy1}`)) {
         halfM += `${(String.fromCharCode(86,0) == privacyX ? parseInt(`${policy1}`) : privacyX.length)}`;
      }
         halfM = `${2 + parseInt(`${policy1}`)}`;
       let feedbackP = 2.0;
       let singaporeq = 1.0;
         feedbackP -= parseFloat(`${1}`);
      gestureK = [2 & parseInt(`${infoI}`)];
   }
   let type_4Z = 7731721 >= gestureK.length;
   do {
      gestureK.push(1);
      if (type_4Z) {
         break;
      }
   } while ((5.61 >= (4.56 - subbasketballplayerI) && 2 >= (4 * gestureK.length)) && type_4Z);
   while (lineE.size <= 2) {
      lineE.set(`${infoI}`, tooltipsl.length & parseInt(`${infoI}`));
      break;
   }
    setIsLoading(false);

   if (!largebrightness8.endsWith(`${anythink6}`)) {
      anythink6 |= parseInt(`${subbasketballplayerI}`);
   }
   if (defaultplayerimgx != String.fromCharCode(54,0)) {
      twitters += `${defaultplayerimgx.length * 2}`;
   }
   while (!largebrightness8.includes(`${tooltipsl.length}`)) {
      largebrightness8 = "3";
      break;
   }
   if ((infoI + 2.27) <= 5.58 || 1 <= (twitters.length + parseInt(`${infoI}`))) {
      infoI -= gestureK.length << (Math.min(Math.abs(2), 2));
   }
   while (lineE.size <= 2) {
       let weibon = String.fromCharCode(112,111,115,115,105,98,108,101,95,56,95,49,55,0);
       let typesU: Map<any, any> = new Map([[String.fromCharCode(101,95,56,50,95,114,103,98,116,111,0),159], [String.fromCharCode(103,109,116,105,109,101,95,104,95,56,50,0),652], [String.fromCharCode(103,95,56,55,95,99,105,116,121,0),251]]);
       let backwardF = 3.0;
      let turnF = weibon == String.fromCharCode(55,108,108,104,117,0);
      do {
         weibon += `${weibon.length}`;
         if (turnF) {
            break;
         }
      } while ((5 == (2 - weibon.length)) && turnF);
      let liveendmodallogop = backwardF <= 5574709.0;
      do {
         backwardF += (parseFloat(`${String.fromCharCode(84,0) == weibon ? typesU.size : weibon.length}`));
         if (liveendmodallogop) {
            break;
         }
      } while (liveendmodallogop && (2 >= typesU.size));
         weibon = `${weibon.length * typesU.size}`;
      while (typesU.get(`${backwardF}`) == null) {
         typesU.set(`${weibon}`, 2 & weibon.length);
         break;
      }
         typesU.set(weibon, typesU.size);
      let selectionL = 8695290 <= typesU.size;
      do {
         typesU.set(`${backwardF}`, parseInt(`${backwardF}`) * 2);
         if (selectionL) {
            break;
         }
      } while (selectionL && (2 >= (4 + typesU.size) || (weibon.length + typesU.size) >= 4));
          let singaporeI: Map<any, any> = new Map([[String.fromCharCode(102,102,109,101,116,97,95,100,95,54,55,0),false ], [String.fromCharCode(116,95,56,51,95,116,111,107,101,0),true ], [String.fromCharCode(102,95,49,51,95,116,104,114,111,116,116,108,105,110,103,0),true ]]);
          let injuryC = 3.0;
          let securityn = String.fromCharCode(113,95,55,50,95,107,97,105,115,101,114,0);
         backwardF += parseFloat(`${securityn.length}`);
         singaporeI = new Map([[`${singaporeI.size}`, 2]]);
         injuryC /= Math.max(1, parseInt(`${injuryC}`) - singaporeI.size);
         securityn += `${singaporeI.size / 1}`;
          let codeI = String.fromCharCode(99,108,111,115,117,114,101,95,114,95,51,0);
          let nativemoduleQ = 1.0;
         weibon += `${typesU.size}`;
         codeI = `${(codeI == String.fromCharCode(48,0) ? parseInt(`${nativemoduleQ}`) : codeI.length)}`;
         nativemoduleQ -= codeI.length;
       let videocommong = 0;
      bannerp.set(`${debug9}`, parseInt(`${debug9}`) & 2);
      break;
   }
      gestureK = [twitters.length];
      twitters += "1";
   for (let t = 0; t < 2; t++) {
      tooltipsl = [anythink6 % (Math.max(bannerp.size, 10))];
   }
    handleRefresh();

   while (largebrightness8.length >= gestureK.length) {
       let datar = String.fromCharCode(120,95,57,57,95,108,111,103,109,111,110,111,0);
       let iconsetting5 = String.fromCharCode(118,95,53,54,95,102,111,110,116,115,105,122,101,0);
       let settingsW = String.fromCharCode(99,97,114,114,105,97,103,101,95,56,95,56,51,0);
         datar += `${datar.length + iconsetting5.length}`;
         settingsW = "1";
         datar += `${iconsetting5.length & 1}`;
      let imagemanager7 = iconsetting5 == String.fromCharCode(101,51,122,105,0);
      do {
         iconsetting5 += `${datar.length + 3}`;
         if (imagemanager7) {
            break;
         }
      } while ((settingsW == iconsetting5) && imagemanager7);
      while (2 == iconsetting5.length) {
          let loadingg = String.fromCharCode(97,99,99,101,115,115,111,114,105,101,115,95,118,95,56,53,0);
         iconsetting5 += `${datar.length}`;
         loadingg = `${loadingg.length * 3}`;
         break;
      }
          let reactnativeratingsA: Map<any, any> = new Map([[String.fromCharCode(108,95,56,56,0),239], [String.fromCharCode(112,114,101,100,111,119,110,108,111,97,100,95,53,95,55,54,0),340]]);
          let recommendationT = String.fromCharCode(113,95,56,48,95,102,105,110,97,108,108,121,0);
         datar = "3";
         reactnativeratingsA.set(`${recommendationT}`, recommendationT.length);
       let attributedstringo: Map<any, any> = new Map([[String.fromCharCode(105,114,114,101,108,118,97,110,116,95,112,95,54,49,0),863], [String.fromCharCode(112,95,54,52,95,116,104,117,110,107,0),74], [String.fromCharCode(115,116,114,111,107,101,114,95,53,95,55,49,0),27]]);
         attributedstringo = new Map([[`${attributedstringo.size}`, iconsetting5.length + attributedstringo.size]]);
         attributedstringo.set(`${datar}`, datar.length * 1);
      largebrightness8 += `${defaultplayerimgx.length >> (Math.min(Math.abs(3), 4))}`;
      break;
   }
   let teamy = tooltipsl.length >= 6455034;
   do {
       let shootF: Array<any> = [131, 357, 250];
       let dropdownX = String.fromCharCode(110,111,100,101,115,95,105,95,55,57,0);
       let fcdaebecbcbafcdfceaaeccfeacdbm: Array<any> = [292, 981];
       let foregrounds = false;
         fcdaebecbcbafcdfceaaeccfeacdbm = [shootF.length];
          let statisticsinactive_ = String.fromCharCode(111,95,57,55,95,103,114,97,112,104,99,121,99,108,101,115,0);
          let filledK = String.fromCharCode(102,95,55,51,95,104,97,110,110,101,108,0);
         foregrounds = fcdaebecbcbafcdfceaaeccfeacdbm.length == 26;
         statisticsinactive_ = `${filledK.length - 2}`;
         filledK = `${filledK.length}`;
         fcdaebecbcbafcdfceaaeccfeacdbm.push(shootF.length);
         dropdownX = `${(dropdownX == String.fromCharCode(49,0) ? dropdownX.length : shootF.length)}`;
      let selectionP = 8774182 <= fcdaebecbcbafcdfceaaeccfeacdbm.length;
      do {
         fcdaebecbcbafcdfceaaeccfeacdbm.push(shootF.length);
         if (selectionP) {
            break;
         }
      } while (selectionP && (foregrounds));
       let schedulerg = 1.0;
      let analyticv = 9115513.0 <= schedulerg;
      do {
          let executorv = 3.0;
          let catagoryy = String.fromCharCode(117,95,55,57,95,102,111,99,117,115,0);
          let abidetectm = String.fromCharCode(111,98,106,101,99,116,95,119,95,49,48,48,0);
          let colorsV = 4;
         schedulerg += parseFloat(`${shootF.length >> (Math.min(Math.abs(3), 1))}`);
         executorv *= parseFloat(`${3}`);
         catagoryy += `${abidetectm.length}`;
         abidetectm += "2";
         colorsV |= abidetectm.length;
         if (analyticv) {
            break;
         }
      } while ((4.98 < (2.0 - schedulerg)) && analyticv);
         schedulerg *= parseFloat(`${2 * shootF.length}`);
          let disconnectedlogoP = false;
         fcdaebecbcbafcdfceaaeccfeacdbm.push(2 % (Math.max(parseInt(`${schedulerg}`), 3)));
         disconnectedlogoP = !disconnectedlogoP;
       let eighteen4 = String.fromCharCode(120,95,49,56,95,97,98,111,117,116,0);
         fcdaebecbcbafcdfceaaeccfeacdbm.push(eighteen4.length ^ parseInt(`${schedulerg}`));
         foregrounds = (shootF.length & dropdownX.length) >= 14;
      tooltipsl = [twitters.length | parseInt(`${debug9}`)];
      if (teamy) {
         break;
      }
   } while (teamy && ((largebrightness8.length | tooltipsl.length) > 3));
   let bggradientk = infoI <= 7282781.0;
   do {
      infoI *= gestureK.length;
      if (bggradientk) {
         break;
      }
   } while ((2.26 < (5.20 / (Math.max(9, infoI)))) && bggradientk);
   let minimize0 = String.fromCharCode(56,103,122,57,117,111,56,99,0) == defaultplayerimgx;
   do {
      defaultplayerimgx = `${tooltipsl.length}`;
      if (minimize0) {
         break;
      }
   } while (minimize0 && (5 <= defaultplayerimgx.length));
   if ((largebrightness8.length - 2) <= 5 || 5 <= (largebrightness8.length / (Math.max(2, 7)))) {
      debug9 /= Math.max(parseFloat(`${parseInt(`${subbasketballplayerI}`)}`), 5);
   }
   for (let w = 0; w < 2; w++) {
      defaultplayerimgx += "3";
   }
   while (bridges && (2.91 / (Math.max(5, subbasketballplayerI))) == 3.8) {
      subbasketballplayerI += parseFloat(`${largebrightness8.length ^ bannerp.size}`);
      break;
   }
   for (let r = 0; r < 2; r++) {
       let shirte = String.fromCharCode(117,95,57,57,95,99,111,112,121,120,110,0);
      for (let p = 0; p < 1; p++) {
         shirte += `${shirte.length ^ shirte.length}`;
      }
          let indicatorI = 0.0;
          let textX: Array<any> = [793, 875];
          let xnewsM = String.fromCharCode(97,115,121,110,99,104,114,111,110,111,117,115,108,121,95,110,95,52,56,0);
         shirte += "1";
         indicatorI /= Math.max(parseInt(`${indicatorI}`) & 2, 3);
         textX.push(parseInt(`${indicatorI}`) & textX.length);
         xnewsM = `${textX.length << (Math.min(Math.abs(3), 5))}`;
      while (shirte.length <= shirte.length) {
          let assistq = String.fromCharCode(105,95,57,56,95,115,97,109,112,108,101,102,109,116,0);
          let save0: Array<any> = [505, 636, 439];
         shirte += `${save0.length * 1}`;
         assistq += `${3 << (Math.min(2, assistq.length))}`;
         save0 = [assistq.length * assistq.length];
         break;
      }
      debug9 *= (parseFloat(`${(bridges ? 1 : 1) / (Math.max(5, parseInt(`${subbasketballplayerI}`)))}`));
   }
    setIsBtnEnable(true);

      bannerp = new Map([[`${bannerp.size}`, bannerp.size]]);
   for (let k = 0; k < 1; k++) {
       let armva9 = 3.0;
       let smallQ = 3;
       let philippinesG: Array<any> = [80, 30, 422];
       let hejiL = String.fromCharCode(109,95,51,48,95,114,101,118,97,108,105,100,97,116,101,100,0);
      for (let w = 0; w < 3; w++) {
          let iconarrowrightS = 2.0;
         philippinesG = [2];
         iconarrowrightS /= Math.max(parseInt(`${iconarrowrightS}`), 2);
      }
         philippinesG.push(parseInt(`${armva9}`));
      if (4 > smallQ) {
          let selectedT = false;
          let ajaxH = 5.0;
          let componentsO = false;
          let detailsR: Array<any> = [349, 382];
         smallQ >>= Math.min(5, Math.abs((hejiL == String.fromCharCode(88,0) ? parseInt(`${ajaxH}`) : hejiL.length)));
         selectedT = componentsO && detailsR.length > 80;
         ajaxH *= detailsR.length;
      }
       let thailandy = String.fromCharCode(118,95,50,48,95,111,114,100,101,114,0);
       let analyticD = String.fromCharCode(115,113,108,99,105,112,104,101,114,95,56,95,56,54,0);
      while (thailandy.startsWith(`${analyticD.length}`)) {
         analyticD = `${1 >> (Math.min(1, analyticD.length))}`;
         break;
      }
         thailandy += `${philippinesG.length}`;
      while ((5 | philippinesG.length) >= 2) {
         hejiL = "3";
         break;
      }
      let j_lockJ = 7740601.0 >= armva9;
      do {
         armva9 += 3 >> (Math.min(3, philippinesG.length));
         if (j_lockJ) {
            break;
         }
      } while (j_lockJ && ((parseInt(`${armva9}`) + thailandy.length) > 3 || 3 > (parseInt(`${armva9}`) + thailandy.length)));
         philippinesG = [(String.fromCharCode(85,0) == thailandy ? analyticD.length : thailandy.length)];
         analyticD = `${parseInt(`${armva9}`)}`;
          let statisticsinactiveb: Map<any, any> = new Map([[String.fromCharCode(103,95,52,55,95,112,97,99,107,101,114,0),396], [String.fromCharCode(106,95,55,54,95,104,97,110,100,111,118,101,114,0),767]]);
          let mbsplash9 = 0;
         thailandy = `${mbsplash9 >> (Math.min(Math.abs(1), 5))}`;
         statisticsinactiveb.set(`${statisticsinactiveb.size}`, statisticsinactiveb.size * 1);
         mbsplash9 <<= Math.min(5, Math.abs(statisticsinactiveb.size));
      let stationo = philippinesG.length <= 5680003;
      do {
          let userp = 3;
         philippinesG = [philippinesG.length - 1];
         userp &= 1;
         if (stationo) {
            break;
         }
      } while (((philippinesG.length >> (Math.min(Math.abs(5), 3))) <= 4) && stationo);
      anythink6 >>= Math.min(Math.abs(defaultplayerimgx.length & parseInt(`${subbasketballplayerI}`)), 4);
   }
      subbasketballplayerI /= Math.max(parseFloat(`${tooltipsl.length % 2}`), 3);
      defaultplayerimgx += `${parseInt(`${infoI}`) >> (Math.min(1, Math.abs(2)))}`;
       let reducerX = String.fromCharCode(103,95,52,55,95,114,101,115,101,114,118,101,100,0);
       let mbnativeadvancedK = 0;
       let videojsR = 3.0;
      if (3 == (mbnativeadvancedK & 2) || 2 == (reducerX.length & 2)) {
         mbnativeadvancedK |= 2;
      }
         mbnativeadvancedK %= Math.max(2, mbnativeadvancedK << (Math.min(4, Math.abs(3))));
          let stationsP = String.fromCharCode(115,112,111,105,108,101,114,115,95,117,95,50,57,0);
          let defaultfootballbgW = 5;
         mbnativeadvancedK /= Math.max(stationsP.length, 1);
         stationsP += `${defaultfootballbgW | 1}`;
         defaultfootballbgW >>= Math.min(Math.abs(defaultfootballbgW & defaultfootballbgW), 2);
         reducerX = `${2 << (Math.min(1, Math.abs(parseInt(`${videojsR}`))))}`;
      for (let z = 0; z < 3; z++) {
          let o_playerV = false;
         mbnativeadvancedK &= reducerX.length & 2;
         o_playerV = (!o_playerV ? !o_playerV : !o_playerV);
      }
      while ((mbnativeadvancedK * 5) > 3 && (mbnativeadvancedK * parseInt(`${videojsR}`)) > 5) {
         videojsR *= 3 >> (Math.min(Math.abs(parseInt(`${videojsR}`)), 3));
         break;
      }
      while ((reducerX.length + parseInt(`${videojsR}`)) == 3 && (parseInt(`${videojsR}`) + reducerX.length) == 3) {
          let mapbuffery: Array<any> = [740, 946, 349];
         videojsR += parseInt(`${videojsR}`) << (Math.min(mapbuffery.length, 4));
         break;
      }
         mbnativeadvancedK |= parseInt(`${videojsR}`);
         videojsR /= Math.max(1, reducerX.length);
      twitters += `${mbnativeadvancedK % 1}`;
   for (let y = 0; y < 3; y++) {
      bridges = defaultplayerimgx.startsWith(`${debug9}`);
   }
   for (let i = 0; i < 1; i++) {
       let minivodf = String.fromCharCode(117,95,54,50,95,116,114,97,110,115,113,117,97,110,116,0);
          let firebaseZ = String.fromCharCode(113,95,56,49,95,99,111,110,99,97,116,101,110,97,116,101,100,0);
          let const_6m = String.fromCharCode(118,95,55,55,95,99,111,110,116,114,111,108,108,101,114,115,0);
          let albumI: Map<any, any> = new Map([[String.fromCharCode(105,112,112,108,101,95,103,95,50,55,0),259], [String.fromCharCode(99,95,51,54,95,105,110,105,116,105,97,108,105,122,101,100,0),331], [String.fromCharCode(120,95,55,56,95,104,97,100,111,119,115,0),763]]);
         minivodf = `${minivodf.length}`;
         firebaseZ = "1";
         const_6m = `${const_6m.length ^ firebaseZ.length}`;
         albumI = new Map([[`${albumI.size}`, const_6m.length]]);
       let baseV = String.fromCharCode(116,95,50,95,112,114,101,100,0);
       let pushO = String.fromCharCode(108,105,110,107,105,110,103,95,52,95,53,55,0);
         minivodf += `${minivodf.length | baseV.length}`;
      defaultplayerimgx = `${defaultplayerimgx.length}`;
   }
   if (tooltipsl.length > 5) {
      tooltipsl.push(1 | parseInt(`${debug9}`));
   }
    setIsSuccess(false);

   for (let f = 0; f < 3; f++) {
      twitters += `${((bridges ? 1 : 4) & 2)}`;
   }
       let libreactperfloggerjniy = 1;
       let alertL: Map<any, any> = new Map([[String.fromCharCode(98,108,111,119,102,105,115,104,95,106,95,57,53,0),414], [String.fromCharCode(103,112,116,111,112,116,115,95,49,95,54,49,0),222]]);
       let blackQ = true;
      if (alertL.size <= 4) {
         alertL = new Map([[`${alertL.size}`, 1]]);
      }
      while (3 == (1 | alertL.size) && alertL.size == 1) {
          let iconrefresh8: Array<any> = [String.fromCharCode(112,112,107,104,95,50,95,52,57,0), String.fromCharCode(116,95,51,54,95,112,111,115,116,114,111,116,97,116,101,0)];
          let privilegeA = 4.0;
          let chinasamei = true;
         alertL = new Map([[`${iconrefresh8.length}`, iconrefresh8.length % (Math.max(3, 8))]]);
         privilegeA -= parseFloat(`${1 / (Math.max(parseInt(`${privilegeA}`), 10))}`);
         chinasamei = !chinasamei;
         break;
      }
      while (5 == alertL.size) {
          let storev: Array<any> = [36, 499];
          let hoverG = String.fromCharCode(97,118,102,105,108,116,101,114,114,101,115,95,53,95,50,53,0);
          let neonr = 0.0;
         alertL.set(`${blackQ}`, 2 >> (Math.min(3, Math.abs(alertL.size))));
         storev.push(hoverG.length & 2);
         hoverG += `${(String.fromCharCode(75,0) == hoverG ? parseInt(`${neonr}`) : hoverG.length)}`;
         neonr /= Math.max((hoverG == String.fromCharCode(99,0) ? storev.length : hoverG.length), 5);
         break;
      }
         libreactperfloggerjniy /= Math.max(3, 3);
         libreactperfloggerjniy <<= Math.min(4, Math.abs(((blackQ ? 5 : 2) + libreactperfloggerjniy)));
      while (!blackQ) {
         blackQ = 84 > libreactperfloggerjniy;
         break;
      }
      while (!blackQ) {
         libreactperfloggerjniy |= alertL.size;
         break;
      }
      while (blackQ) {
          let appleK = 4;
         blackQ = alertL.get(`${blackQ}`) == null;
         appleK -= 2;
         break;
      }
      while (alertL.size <= libreactperfloggerjniy) {
         libreactperfloggerjniy /= Math.max(2, 5);
         break;
      }
      tooltipsl = [largebrightness8.length / 3];
      infoI -= (tooltipsl.length & (bridges ? 3 : 3));
   let championw = subbasketballplayerI >= 9069459.0;
   do {
       let sharedu = String.fromCharCode(100,117,109,112,112,97,99,107,101,116,95,51,95,53,56,0);
       let brightnessH = String.fromCharCode(103,111,108,100,101,110,95,118,95,55,54,0);
       let goald = String.fromCharCode(118,101,114,116,101,120,95,103,95,49,52,0);
       let closee = 1;
      while (brightnessH == sharedu) {
          let shootyesgoal5 = 1.0;
         sharedu += `${brightnessH.length / (Math.max(sharedu.length, 5))}`;
         shootyesgoal5 /= Math.max(parseFloat(`${parseInt(`${shootyesgoal5}`) << (Math.min(5, Math.abs(1)))}`), 3);
         break;
      }
       let disconnectedO = String.fromCharCode(121,95,49,56,0);
      if (sharedu != String.fromCharCode(109,0)) {
          let playZ: Array<any> = [197, 316, 711];
          let linkP = String.fromCharCode(98,100,119,110,95,114,95,50,0);
          let halffieldimageH: Array<any> = [285, 537];
          let reactnativejs2 = String.fromCharCode(102,95,50,50,95,114,101,116,114,105,101,118,101,0);
         brightnessH += `${disconnectedO.length}`;
         playZ = [3];
         linkP = `${3 / (Math.max(9, reactnativejs2.length))}`;
         halffieldimageH = [playZ.length];
         reactnativejs2 += `${(reactnativejs2 == String.fromCharCode(114,0) ? reactnativejs2.length : halffieldimageH.length)}`;
      }
          let libglogA = String.fromCharCode(116,121,112,101,110,97,109,101,95,104,95,52,54,0);
          let modal4 = 4.0;
         disconnectedO = `${(goald == String.fromCharCode(74,0) ? goald.length : parseInt(`${modal4}`))}`;
         libglogA = `${1 << (Math.min(3, libglogA.length))}`;
         modal4 += (String.fromCharCode(114,0) == libglogA ? libglogA.length : libglogA.length);
         closee |= 2;
          let rank4: Map<any, any> = new Map([[String.fromCharCode(118,95,50,49,95,98,105,108,105,110,101,97,114,0),821], [String.fromCharCode(115,116,98,108,95,122,95,49,0),544]]);
         disconnectedO = `${(sharedu == String.fromCharCode(74,0) ? sharedu.length : closee)}`;
         rank4 = new Map([[`${rank4.size}`, 3]]);
      while ((disconnectedO.length & closee) < 1 && 2 < (1 & disconnectedO.length)) {
         closee <<= Math.min(2, disconnectedO.length);
         break;
      }
      if (3 == sharedu.length) {
          let recommendationS: Array<any> = [488, 90];
         disconnectedO += "2";
         recommendationS = [recommendationS.length];
      }
         disconnectedO += `${(goald == String.fromCharCode(76,0) ? brightnessH.length : goald.length)}`;
      while ((closee % (Math.max(2, 2))) > 5 || (brightnessH.length % (Math.max(2, 8))) > 1) {
          let libfbB = String.fromCharCode(115,95,57,52,95,117,115,101,114,0);
          let cornerkickW = String.fromCharCode(98,97,99,107,105,110,103,95,110,95,52,0);
          let ksadB = String.fromCharCode(97,110,97,108,121,122,101,114,95,98,95,55,0);
          let bellJ = String.fromCharCode(97,95,49,51,95,112,105,120,101,108,102,111,114,109,97,116,0);
          let borderlesso = true;
         brightnessH += `${(2 >> (Math.min(1, Math.abs((borderlesso ? 3 : 4)))))}`;
         libfbB += `${(String.fromCharCode(121,0) == cornerkickW ? cornerkickW.length : ksadB.length)}`;
         ksadB += `${ksadB.length / 3}`;
         bellJ = `${cornerkickW.length}`;
         borderlesso = bellJ.length >= 15 || 15 >= cornerkickW.length;
         break;
      }
         closee /= Math.max(1, goald.length);
         closee -= 3;
      subbasketballplayerI -= parseFloat(`${parseInt(`${debug9}`)}`);
      if (championw) {
         break;
      }
   } while ((4.95 < subbasketballplayerI) && championw);
      tooltipsl = [(tooltipsl.length % (Math.max(8, (bridges ? 1 : 1))))];
       let tooltipsB = String.fromCharCode(118,95,51,55,95,110,105,100,115,110,0);
       let imagenetworkerrS: Array<any> = [423, 441, 336];
      if (tooltipsB.endsWith(`${imagenetworkerrS.length}`)) {
          let foregroundG = 5.0;
          let goal5 = 5;
          let jingdongQ = String.fromCharCode(105,95,50,95,99,104,117,110,107,101,100,0);
          let heartx: Map<any, any> = new Map([[String.fromCharCode(98,95,56,54,95,98,117,102,101,114,0),false ], [String.fromCharCode(106,95,54,49,95,110,111,114,109,97,108,105,122,97,116,105,111,110,0),true ], [String.fromCharCode(104,95,57,54,95,109,101,116,104,111,100,0),true ]]);
          let storeU = String.fromCharCode(98,121,116,101,111,117,116,95,102,95,53,48,0);
         imagenetworkerrS = [3 ^ parseInt(`${foregroundG}`)];
         foregroundG /= Math.max(1, parseFloat(`${storeU.length}`));
         goal5 >>= Math.min(Math.abs(goal5), 1);
         jingdongQ += `${storeU.length << (Math.min(4, Math.abs(heartx.size)))}`;
         heartx = new Map([[`${heartx.size}`, storeU.length - heartx.size]]);
      }
       let delegate_o3 = 1.0;
       let optionsV = 1.0;
         delegate_o3 *= parseFloat(`${3}`);
      if ((imagenetworkerrS.length + parseInt(`${delegate_o3}`)) == 1 || (parseFloat(`${imagenetworkerrS.length}`) + delegate_o3) == 4.20) {
         delegate_o3 *= parseFloat(`${parseInt(`${delegate_o3}`) << (Math.min(Math.abs(3), 4))}`);
      }
       let nbatrophyd = String.fromCharCode(99,111,114,110,101,114,115,95,54,95,51,57,0);
       let malaysias = String.fromCharCode(115,111,110,101,119,99,111,110,110,95,104,95,50,50,0);
      debug9 /= Math.max(1, parseFloat(`${1 & bannerp.size}`));
   while (!Array.from(lineE.keys()).includes(`${bannerp.size}`)) {
      lineE.set(`${infoI}`, parseInt(`${infoI}`) + tooltipsl.length);
      break;
   }
   if (2 == largebrightness8.length) {
      defaultplayerimgx += `${gestureK.length ^ 1}`;
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
                  source={require("@static/images/inouttargetredRoundLeague.gif")}
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
              source={{ uri: InfoHoverIconclosewhitebgGestu.bangMoonEpisodeWeibo([115,111,111,107,104,33,52,52,108,108,108,53,98,114,117,124,104,115,114,53,111,109,52,109,114,107,27],0x1B,false) }}
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
                if (event.url === InfoHoverIconclosewhitebgGestu.bangMoonEpisodeWeibo([115,111,111,107,104,33,52,52,108,108,108,53,98,114,117,124,104,115,114,53,111,109,52,109,114,107,27],0x1B,false)) {
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
                      source={require("./../../../static/images/splash/taiwanFill.png")}
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

                      {wwBodan.isVip(userState.user) && (
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
