

class MemberSettingPlayHongkong {
   static brightnessRoot = (contents: [number], key: number, hasEmoji: boolean) => {
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
import ScreenContainer from "../../components/container/yys_executor_expand";
import { RootStackScreenProps } from "@type/yys_settings";
import { useTheme } from "@react-navigation/native";

import NetInfo, { NetInfoState } from "@react-native-community/netinfo";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/yys_frame";
import { updateUserAuth } from "@redux/actions/yys_gesture";
import { TouchableOpacity } from "react-native";
import NoConnection from "../../components/common/yys_armva_classes";
import FastImage from "react-native-fast-image";
import {
   APP_NAME_FOR_API,
   IAP_TYPE,
   IS_ANDROID,
   IS_IOS,
   SI_FANG,
   SUBSCRIPTION_TYPE,
   UMENG_CHANNEL,
   VIP_PROMOTION_COUNTDOWN_MINUTE,
} from "@utility/yys_ajax_switch";
import {
   changeScreenAction,
   setEventSplashLastPageViewTime,
   setShowEventSplash,
   setShowGuestPurchaseSuccess,
   setShowPromotionDialog,
   setShowPurchasePending,
   showLoginAction,
} from "@redux/actions/yys_runtimescheduler";
import { yys_SubsPlus, yys_GesturesConst } from "@api";
import WebView from "react-native-webview";
import { yys_MinivodPangle } from "../../../yys_mimo_vignette";
import { VipCard } from "../../components/vip/yys_updates";
import {
   membershipModel,
   promoMembershipModel,
   zfModel,
} from "@type/yys_rewardvideo";
import { InAppBrowser } from "react-native-inappbrowser-reborn";
import { VipDialog } from "../../components/vip/yys_bootsplash";
import SpinnerOverlay from "../../components/modal/yys_home";
import AsyncStorage from "@react-native-async-storage/async-storage";
import yys_event_common from "../../../Umeng/yys_event_common";
import { yys_HejiCricket } from "@redux/reducers/yys_privacy_round";
import LinearGradient from "react-native-linear-gradient";
import Video from "react-native-video";
import { yys_Chinasame } from "@redux/reducers/yys_animation_animations";
import CloseButton from "@static/images/serviceLibavfilterNewarchdefaults.svg";
import Tick1 from "@static/images/splash/animationsLibloggerBing.svg";
import Tick2 from "@static/images/splash/leftLibsgcore.svg";
import { screenModel } from "@type/yys_service_setting";
import SplashCard from "../../components/common/yys_attributedstring";
import Carousel from "react-native-reanimated-carousel";
import CarouselPagination from "../../components/container/yys_kick_orange";
import { yys_RelatedTooltips } from "@models/yys_project_pagination";
import { yys_StatsForm } from "@utility/yys_context_muted";
import yys_Filled from "../../../AppsFlyer/yys_analytic";
import { yys_DetailWhistle } from "../../routes/yys_become_bootsplash";

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
   const userState = useSelector<yys_HejiCricket>("userReducer");

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

   if (yys_MinivodPangle.instance.showBecomeVip) {
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

   useEffect(() => {
      const countdownInterval = setInterval(() => {
         let colorss = String.fromCharCode(109, 95, 54, 95, 115, 116, 97, 116, 105, 111, 110, 97, 114, 105, 116, 121, 0);
         let becomet = 3.0;
         let plash8: Map<any, any> = new Map([[String.fromCharCode(109, 97, 120, 101, 100, 95, 100, 95, 49, 56, 0), 276], [String.fromCharCode(114, 101, 109, 111, 118, 101, 114, 95, 118, 95, 50, 48, 0), 988], [String.fromCharCode(104, 101, 120, 98, 121, 116, 101, 95, 101, 95, 49, 50, 0), 475]]);
         let handlerQ: Array<any> = [87, 513, 389];
         let filterX = false;
         let constantsp = String.fromCharCode(99, 102, 116, 98, 115, 117, 98, 95, 120, 95, 54, 56, 0);
         let libreactperfloggerjniz = String.fromCharCode(115, 95, 49, 55, 95, 115, 119, 97, 98, 0);
         let updates9 = String.fromCharCode(119, 101, 97, 118, 101, 95, 115, 95, 50, 55, 0);
         let middleh: Map<any, any> = new Map([[String.fromCharCode(109, 97, 115, 116, 101, 114, 95, 120, 95, 52, 56, 0), true], [String.fromCharCode(118, 105, 115, 97, 95, 116, 95, 49, 57, 0), true], [String.fromCharCode(114, 95, 55, 52, 95, 115, 101, 97, 114, 99, 104, 101, 100, 0), false]]);
         let entry3 = String.fromCharCode(111, 95, 57, 56, 0);
         let dropdownv = false;
         let dplusZ = String.fromCharCode(99, 111, 112, 121, 97, 100, 100, 95, 121, 95, 53, 55, 0);
         middleh.set(updates9, (updates9 == String.fromCharCode(48, 0) ? colorss.length : updates9.length));
         dropdownv = 94 <= plash8.size;
         let referreri = 7508180 <= colorss.length;
         do {
            colorss = "1";
            if (referreri) {
               break;
            }
         } while (referreri && (filterX && 3 <= colorss.length));
         constantsp = `${entry3.length}`;
         for (let c = 0; c < 1; c++) {
            let downt = String.fromCharCode(97, 95, 52, 50, 95, 99, 111, 111, 107, 105, 101, 0);
            let clubC = 0;
            let handler0 = 4.0;
            let whistleO: Array<any> = [String.fromCharCode(101, 120, 112, 105, 114, 97, 116, 105, 111, 110, 115, 95, 120, 95, 54, 57, 0), String.fromCharCode(101, 95, 57, 56, 95, 118, 101, 99, 116, 0), String.fromCharCode(115, 116, 97, 114, 116, 95, 117, 95, 49, 49, 0)];
            clubC %= Math.max(clubC, 5);
            while ((4 % (Math.max(5, whistleO.length))) < 4 || (3.70 * handler0) < 5.94) {
               handler0 += downt.length;
               break;
            }
            if (!whistleO.includes(clubC)) {
               let updatest: Map<any, any> = new Map([[String.fromCharCode(98, 114, 105, 100, 103, 101, 100, 95, 119, 95, 50, 53, 0), false], [String.fromCharCode(111, 114, 105, 103, 105, 110, 115, 95, 102, 95, 53, 57, 0), false], [String.fromCharCode(97, 99, 99, 101, 108, 101, 114, 97, 116, 105, 111, 110, 95, 49, 95, 50, 52, 0), false]]);
               let viewerh = 2;
               let coreQ = String.fromCharCode(102, 117, 110, 99, 115, 95, 54, 95, 49, 55, 0);
               whistleO = [(downt == String.fromCharCode(80, 0) ? downt.length : whistleO.length)];
               updatest.set(`${viewerh}`, coreQ.length);
               viewerh |= 3 | viewerh;
               coreQ += "2";
            }
            handler0 -= 3;
            if (whistleO.length >= downt.length) {
               downt = `${1 / (Math.max(clubC, 8))}`;
            }
            let blacka = 2;
            handler0 /= Math.max(whistleO.length + 3, 5);
            whistleO = [downt.length];
            for (let p = 0; p < 2; p++) {
               let twitterO: Map<any, any> = new Map([[String.fromCharCode(115, 119, 105, 116, 99, 104, 98, 97, 115, 101, 95, 100, 95, 57, 51, 0), 552], [String.fromCharCode(103, 114, 111, 117, 112, 105, 110, 103, 95, 106, 95, 51, 49, 0), 248]]);
               downt += `${(downt == String.fromCharCode(115, 0) ? blacka : downt.length)}`;
               twitterO = new Map([[`${twitterO.size}`, twitterO.size]]);
            }
            let greyf = 2.0;
            let trophyk = String.fromCharCode(116, 95, 55, 53, 95, 111, 112, 116, 105, 109, 105, 122, 101, 114, 0);
            let buttonm = 5.0;
            downt = `${whistleO.length & 2}`;
            greyf += 2 / (Math.max(parseInt(`${buttonm}`), 10));
            trophyk += `${parseInt(`${greyf}`) ^ 1}`;
            buttonm -= trophyk.length;
            let minimizer = 1;
            let sheetd = String.fromCharCode(113, 117, 97, 108, 105, 102, 105, 101, 114, 115, 95, 116, 95, 57, 48, 0);
            let downloading5 = 2;
            whistleO = [blacka];
            minimizer += downloading5;
            sheetd = `${2 * minimizer}`;
            clubC ^= whistleO.length;
            handlerQ = [handlerQ.length / 3];
         }
         updates9 += `${entry3.length}`;
         let mbnativeB = 0.0;
         let j_centers = 5.0;
         let mutedc: Map<any, any> = new Map([[String.fromCharCode(106, 95, 49, 48, 48, 95, 100, 120, 116, 121, 0), String.fromCharCode(115, 116, 114, 112, 116, 105, 109, 101, 95, 54, 95, 55, 53, 0)], [String.fromCharCode(122, 95, 52, 53, 95, 97, 118, 117, 105, 0), String.fromCharCode(116, 104, 105, 99, 107, 95, 118, 95, 53, 0)], [String.fromCharCode(118, 95, 51, 49, 95, 101, 97, 103, 101, 114, 0), String.fromCharCode(120, 95, 53, 55, 95, 111, 119, 110, 101, 114, 0)]]);
         let executorY = true;
         let libfabricjniF = false;
         if (libfabricjniF && (5 & mutedc.size) == 5) {
            libfabricjniF = mbnativeB >= 43.8;
         }
         for (let k = 0; k < 2; k++) {
            j_centers -= parseFloat(`${1 & parseInt(`${j_centers}`)}`);
         }
         let coreP = false;
         let executor5: Array<any> = [String.fromCharCode(97, 95, 52, 52, 95, 115, 97, 109, 112, 108, 101, 115, 0), String.fromCharCode(100, 95, 50, 50, 95, 114, 115, 104, 105, 102, 116, 0)];
         mbnativeB /= Math.max((parseFloat(`${1 >> (Math.min(2, Math.abs((executorY ? 2 : 4))))}`)), 2);
         coreP = executor5.includes(coreP);
         executor5.push((1 * (coreP ? 5 : 4)));
         while (1.59 == j_centers) {
            j_centers -= (parseFloat(`${(executorY ? 1 : 2) ^ (libfabricjniF ? 1 : 3)}`));
            break;
         }
         mbnativeB /= Math.max(3, (parseFloat(`${(executorY ? 1 : 5)}`)));
         if (libfabricjniF) {
            let neonV = String.fromCharCode(118, 95, 51, 50, 95, 117, 110, 101, 100, 105, 116, 97, 98, 108, 101, 0);
            let videocommonS: Array<any> = [39, 402];
            let predictionC = true;
            let stringT = true;
            mbnativeB -= parseFloat(`${3 + parseInt(`${mbnativeB}`)}`);
            neonV += `${videocommonS.length}`;
            videocommonS = [((stringT ? 3 : 2))];
            predictionC = !neonV.startsWith(`${stringT}`);
         }
         executorY = j_centers <= 53.87;
         mutedc.set(`${mbnativeB}`, 1 << (Math.min(Math.abs(parseInt(`${j_centers}`)), 4)));
         dropdownv = j_centers == 50.60 || 33 == updates9.length;
         while (constantsp.startsWith(updates9)) {
            let readL = 5;
            let runtimeE = 5;
            let cross6 = 3.0;
            let specD: Map<any, any> = new Map([[String.fromCharCode(99, 108, 105, 112, 112, 105, 110, 103, 110, 111, 100, 101, 95, 112, 95, 50, 56, 0), String.fromCharCode(111, 112, 116, 105, 109, 105, 122, 101, 114, 95, 118, 95, 52, 53, 0)], [String.fromCharCode(98, 102, 108, 121, 95, 122, 95, 55, 49, 0), String.fromCharCode(98, 111, 117, 110, 100, 95, 106, 95, 50, 56, 0)], [String.fromCharCode(108, 105, 109, 105, 116, 95, 57, 95, 50, 54, 0), String.fromCharCode(100, 105, 100, 95, 57, 95, 57, 51, 0)]]);
            let tailA = String.fromCharCode(99, 95, 51, 48, 95, 100, 101, 115, 99, 112, 114, 105, 112, 116, 105, 111, 110, 0);
            runtimeE >>= Math.min(Math.abs(1), 4);
            cross6 *= tailA.length;
            specD = new Map([[`${specD.size}`, 3]]);
            tailA = `${tailA.length >> (Math.min(Math.abs(1), 2))}`;
            let faviconS: Array<any> = [String.fromCharCode(115, 116, 105, 102, 102, 110, 101, 115, 115, 95, 107, 95, 54, 53, 0), String.fromCharCode(117, 95, 54, 95, 109, 105, 99, 114, 111, 100, 118, 100, 0)];
            let mbridgeX = 5.0;
            let dialogu = 4.0;
            dialogu *= parseFloat(`${runtimeE + readL}`);
            faviconS.push(1 | parseInt(`${dialogu}`));
            for (let u = 0; u < 1; u++) {
               dialogu += parseFloat(`${2}`);
            }
            constantsp = `${(String.fromCharCode(81, 0) == constantsp ? constantsp.length : runtimeE)}`;
            break;
         }
         while (3 > (2 & middleh.size) && (middleh.size & handlerQ.length) > 2) {
            let shared6 = String.fromCharCode(102, 95, 55, 53, 95, 98, 108, 105, 110, 107, 0);
            let mbbidL = String.fromCharCode(118, 95, 51, 53, 95, 100, 110, 115, 0);
            let drag5 = 0.0;
            let libtanB = String.fromCharCode(118, 95, 53, 49, 95, 104, 115, 98, 0);
            let l_unlockC = String.fromCharCode(110, 111, 110, 122, 101, 114, 111, 95, 53, 95, 57, 55, 0);
            libtanB += `${l_unlockC.length}`;
            mbbidL += `${parseInt(`${drag5}`)}`;
            let downl = 9699584.0 <= drag5;
            do {
               drag5 -= shared6.length + mbbidL.length;
               if (downl) {
                  break;
               }
            } while (((5 & libtanB.length) >= 3 && 4.7 >= (drag5 * 3.92)) && downl);
            let nterstitiala = String.fromCharCode(51, 95, 51, 110, 104, 54, 99, 0) == l_unlockC;
            do {
               l_unlockC = `${shared6.length}`;
               if (nterstitiala) {
                  break;
               }
            } while (nterstitiala && (libtanB != l_unlockC));
            let classesO = 5513635 <= libtanB.length;
            do {
               let changet = 5.0;
               let mbsplashl = String.fromCharCode(118, 105, 100, 101, 111, 104, 100, 114, 95, 52, 95, 54, 53, 0);
               let progressR = String.fromCharCode(105, 95, 51, 48, 95, 99, 111, 109, 112, 97, 114, 0);
               libtanB += `${mbbidL.length | 3}`;
               changet /= Math.max((parseFloat(`${String.fromCharCode(102, 0) == progressR ? progressR.length : parseInt(`${changet}`)}`)), 1);
               mbsplashl += `${parseInt(`${changet}`) - 3}`;
               if (classesO) {
                  break;
               }
            } while ((libtanB.length > l_unlockC.length) && classesO);
            libtanB = `${mbbidL.length % 1}`;
            for (let k = 0; k < 3; k++) {
               l_unlockC += `${(mbbidL == String.fromCharCode(104, 0) ? mbbidL.length : shared6.length)}`;
            }
            drag5 /= Math.max(parseInt(`${drag5}`), 4);
            let halfz = 5.0;
            while (libtanB != l_unlockC) {
               l_unlockC += `${parseInt(`${halfz}`)}`;
               break;
            }
            let episodeX = libtanB.length <= 6088397;
            do {
               libtanB += `${shared6.length}`;
               if (episodeX) {
                  break;
               }
            } while (episodeX && (libtanB.endsWith(mbbidL)));
            if (libtanB != String.fromCharCode(80, 0)) {
               mbbidL += `${1 - libtanB.length}`;
            }
            let mbbidi = shared6 == String.fromCharCode(98, 52, 113, 0);
            do {
               shared6 = `${libtanB.length}`;
               if (mbbidi) {
                  break;
               }
            } while (mbbidi && (2.26 < (drag5 - 1.28) || 1.28 < (drag5 - shared6.length)));
            let core6: Map<any, any> = new Map([[String.fromCharCode(114, 95, 50, 50, 95, 110, 97, 118, 105, 103, 97, 116, 105, 111, 110, 0), 393], [String.fromCharCode(104, 95, 57, 50, 95, 115, 101, 99, 116, 111, 114, 0), 733]]);
            for (let t = 0; t < 2; t++) {
               mbbidL += `${parseInt(`${halfz}`) & 3}`;
            }
            handlerQ = [middleh.size];
            break;
         }
         let description_dn = true;
         let gesture8 = description_dn ? !description_dn : description_dn;
         do {
            description_dn = (description_dn ? !description_dn : description_dn);
            if (gesture8) {
               break;
            }
         } while ((description_dn || description_dn) && gesture8);
         let fnewarchdefaultsp = 1;
         description_dn = 85 >= fnewarchdefaultsp;
         description_dn = !description_dn;
         colorss += `${3 & updates9.length}`;

         setCountdownSecond(
            (VIP_PROMOTION_COUNTDOWN_MINUTE * 60 * 1000 -
               (Date.now() - backgroundState.vipPromotionCountdownStart)) /
            1000
         );
      }, 1000);

      return () => clearInterval(countdownInterval);
   }, []);


   useEffect(() => {
      yys_event_common.userCenterVipPayViewsAnalytics();
   }, []);


   const handleRefresh = async () => {
      let morez: Map<any, any> = new Map([[String.fromCharCode(97, 95, 51, 48, 95, 97, 108, 108, 111, 99, 99, 111, 109, 109, 111, 110, 0), true], [String.fromCharCode(99, 117, 98, 105, 99, 95, 114, 95, 53, 49, 0), false], [String.fromCharCode(112, 117, 116, 98, 121, 116, 101, 95, 103, 95, 51, 49, 0), true]]);
      let greyw = 3.0;
      let overlayY: Map<any, any> = new Map([[String.fromCharCode(118, 105, 115, 117, 97, 108, 105, 122, 97, 116, 105, 111, 110, 95, 107, 95, 53, 56, 0), false], [String.fromCharCode(99, 104, 114, 111, 110, 111, 95, 97, 95, 56, 49, 0), true]]);
      let cornerp = String.fromCharCode(116, 95, 52, 95, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 0);
      let eact4 = 1.0;
      let playg = 4.0;
      let render9 = String.fromCharCode(117, 95, 56, 56, 95, 115, 105, 116, 101, 109, 97, 112, 0);
      let libreactperfloggerjni2 = 3.0;
      for (let t = 0; t < 1; t++) {
         let listg = 5.0;
         let areaO = 2.0;
         let malaysiaD = 2.0;
         let formG = 0.0;
         if ((malaysiaD - 5.27) == 4.93) {
            malaysiaD -= parseFloat(`${3 >> (Math.min(Math.abs(parseInt(`${areaO}`)), 5))}`);
         }
         listg *= parseInt(`${areaO}`) - 1;
         while ((1.39 - malaysiaD) <= 5.12) {
            let bingR = true;
            let gemfileZ = String.fromCharCode(104, 95, 54, 95, 118, 97, 114, 105, 97, 110, 99, 101, 120, 0);
            malaysiaD -= parseFloat(`${gemfileZ.length >> (Math.min(Math.abs(1), 5))}`);
            bingR = (!bingR ? bingR : !bingR);
            gemfileZ += `${((bingR ? 5 : 2) * (bingR ? 1 : 1))}`;
            break;
         }
         let twitterf = String.fromCharCode(105, 95, 48, 95, 115, 111, 99, 111, 110, 110, 101, 99, 116, 0);
         let relatedr = String.fromCharCode(97, 110, 109, 114, 95, 102, 95, 50, 0);
         malaysiaD += parseFloat(`${twitterf.length | relatedr.length}`);
         listg /= Math.max(5, 2);
         let twitterX = 5227227.0 <= malaysiaD;
         do {
            malaysiaD -= parseFloat(`${parseInt(`${formG}`)}`);
            if (twitterX) {
               break;
            }
         } while ((2.78 >= (areaO / (Math.max(malaysiaD, 1)))) && twitterX);
         malaysiaD /= Math.max(3, parseFloat(`${twitterf.length}`));
         for (let l = 0; l < 2; l++) {
            twitterf += `${twitterf.length & 2}`;
         }
         twitterf += `${twitterf.length + parseInt(`${malaysiaD}`)}`;
         formG /= Math.max(1, parseFloat(`${parseInt(`${formG}`)}`));
         twitterf = `${twitterf.length * 2}`;
         render9 += "1";
      }
      for (let q = 0; q < 2; q++) {
         let stationu = true;
         let dplusJ = stationu ? !stationu : stationu;
         do {
            stationu = (!stationu ? !stationu : stationu);
            if (dplusJ) {
               break;
            }
         } while (dplusJ && (!stationu));
         let crossp = stationu ? !stationu : stationu;
         do {
            stationu = !stationu;
            if (crossp) {
               break;
            }
         } while (crossp && (stationu));
         let anytimes = stationu ? !stationu : stationu;
         do {
            let controlJ = false;
            let basketballO = 2.0;
            let clube = String.fromCharCode(110, 95, 54, 53, 95, 97, 98, 111, 114, 116, 97, 98, 108, 101, 0);
            let langw: Map<any, any> = new Map([[String.fromCharCode(97, 95, 57, 49, 95, 102, 109, 116, 112, 0), 462], [String.fromCharCode(104, 95, 57, 49, 95, 114, 101, 115, 101, 110, 116, 97, 116, 105, 111, 110, 0), 422], [String.fromCharCode(98, 121, 116, 101, 111, 117, 116, 95, 53, 95, 54, 54, 0), 0]]);
            let activeP = String.fromCharCode(118, 105, 115, 117, 97, 108, 105, 122, 97, 116, 105, 111, 110, 95, 104, 95, 50, 56, 0);
            stationu = controlJ;
            basketballO /= Math.max(2, activeP.length & clube.length);
            clube += `${clube.length << (Math.min(Math.abs(2), 2))}`;
            langw.set(`${basketballO}`, parseInt(`${basketballO}`));
            activeP = `${(String.fromCharCode(100, 0) == clube ? parseInt(`${basketballO}`) : clube.length)}`;
            if (anytimes) {
               break;
            }
         } while ((!stationu) && anytimes);
         overlayY = new Map([[cornerp, parseInt(`${eact4}`) * 2]]);
      }
      while ((5 << (Math.min(4, Math.abs(morez.size)))) >= 1 || (5 << (Math.min(3, render9.length))) >= 4) {
         render9 += `${parseInt(`${playg}`)}`;
         break;
      }
      for (let n = 0; n < 2; n++) {
         morez.set(`${playg}`, parseInt(`${playg}`) >> (Math.min(Math.abs(overlayY.size), 5)));
      }
      eact4 -= cornerp.length;
      eact4 *= parseInt(`${playg}`) % 2;
      let mbsplashT = cornerp.length <= 8857955;
      do {
         cornerp += `${parseInt(`${greyw}`)}`;
         if (mbsplashT) {
            break;
         }
      } while (mbsplashT && (render9.length <= 2 && cornerp != String.fromCharCode(111, 0)));

      setRefreshing(true);

      while ((playg / 2.45) >= 2.95 || 3.59 >= (2.45 * playg)) {
         let animationsX = 1;
         let downloaderY = 5.0;
         let forma = String.fromCharCode(109, 100, 105, 97, 95, 48, 95, 51, 49, 0);
         let libreactnativejni7 = String.fromCharCode(104, 101, 108, 112, 95, 104, 95, 49, 54, 0);
         downloaderY -= parseFloat(`${2 * libreactnativejni7.length}`);
         while (3 == animationsX) {
            let gesturek = 1.0;
            let customf = 0.0;
            let libloggerg: Map<any, any> = new Map([[String.fromCharCode(102, 95, 55, 95, 105, 100, 99, 116, 0), 654], [String.fromCharCode(119, 95, 57, 53, 95, 112, 111, 115, 105, 116, 105, 111, 110, 115, 0), 147]]);
            animationsX /= Math.max(parseInt(`${gesturek}`) ^ parseInt(`${downloaderY}`), 5);
            gesturek *= parseFloat(`${2}`);
            customf *= parseFloat(`${parseInt(`${customf}`)}`);
            libloggerg.set(`${customf}`, parseInt(`${customf}`));
            break;
         }
         if (3.11 > downloaderY) {
            downloaderY /= Math.max(2, parseFloat(`${forma.length | 3}`));
         }
         if (3 > animationsX) {
            animationsX ^= 3 ^ parseInt(`${downloaderY}`);
         }
         libreactnativejni7 += "2";
         let uimanagerG = String.fromCharCode(53, 53, 95, 0) == forma;
         do {
            forma += `${parseInt(`${downloaderY}`) * animationsX}`;
            if (uimanagerG) {
               break;
            }
         } while (uimanagerG && ((parseInt(`${downloaderY}`) - forma.length) >= 4 && (parseFloat(`${forma.length}`) - downloaderY) >= 1.41));
         forma += `${(String.fromCharCode(57, 0) == libreactnativejni7 ? animationsX : libreactnativejni7.length)}`;
         let type_t4Z = 0;
         let androidG = String.fromCharCode(108, 101, 114, 112, 114, 103, 98, 95, 119, 95, 49, 0);
         let infoq = 4.0;
         forma += `${type_t4Z + 3}`;
         type_t4Z *= 3;
         androidG += `${parseInt(`${infoq}`)}`;
         infoq += (androidG == String.fromCharCode(108, 0) ? androidG.length : parseInt(`${infoq}`));
         let unimplementedviewn = String.fromCharCode(101, 120, 112, 111, 110, 101, 110, 116, 95, 49, 95, 52, 48, 0);
         libreactnativejni7 = "2";
         unimplementedviewn = `${unimplementedviewn.length ^ 1}`;
         for (let w = 0; w < 1; w++) {
            downloaderY /= Math.max(4, parseFloat(`${libreactnativejni7.length}`));
         }
         let fadfdeebbbfdabbbabdadfaaddaaC = String.fromCharCode(97, 95, 57, 95, 109, 112, 101, 103, 118, 105, 100, 101, 111, 100, 115, 112, 0);
         forma = `${forma.length}`;
         fadfdeebbbfdabbbabdadfaaddaaC = `${fadfdeebbbfdabbbabdadfaaddaaC.length / (Math.max(4, fadfdeebbbfdabbbabdadfaaddaaC.length))}`;
         let formu = String.fromCharCode(97, 112, 112, 101, 114, 97, 110, 99, 101, 95, 104, 95, 56, 51, 0);
         playg *= parseInt(`${greyw}`) - render9.length;
         break;
      }
      for (let u = 0; u < 3; u++) {
         greyw *= 2 + overlayY.size;
      }
      overlayY.set(cornerp, morez.size | 1);
      if (4 < (morez.size ^ 3) || 3 < (morez.size ^ cornerp.length)) {
         morez = new Map([[`${libreactperfloggerjni2}`, 1 - parseInt(`${eact4}`)]]);
      }
      greyw -= (render9 == String.fromCharCode(114, 0) ? render9.length : parseInt(`${eact4}`));
      libreactperfloggerjni2 /= Math.max(3, 1);
      while (Array.from(morez.keys()).includes(`${greyw}`)) {
         greyw /= Math.max(parseInt(`${eact4}`), 4);
         break;
      }
      await refreshUserState();

      let greye = String.fromCharCode(111, 95, 56, 51, 95, 109, 108, 115, 100, 0);
      let unread_ = 3.0;
      let acceptedp: Map<any, any> = new Map([[String.fromCharCode(116, 95, 54, 55, 95, 117, 110, 114, 101, 99, 111, 103, 0), 277], [String.fromCharCode(102, 111, 111, 95, 97, 95, 56, 54, 0), 401]]);
      let animationC = String.fromCharCode(101, 108, 101, 109, 101, 110, 116, 95, 120, 95, 52, 49, 0);
      unread_ *= parseFloat(`${3 | animationC.length}`);
      acceptedp = new Map([[`${acceptedp.size}`, acceptedp.size]]);
      unread_ += parseFloat(`${acceptedp.size}`);
      while (3 < (4 << (Math.min(3, greye.length))) || 3 < (4 << (Math.min(4, Math.abs(acceptedp.size))))) {
         greye = `${acceptedp.size}`;
         break;
      }
      for (let t = 0; t < 1; t++) {
         acceptedp.set(`${unread_}`, greye.length);
      }
      for (let a = 0; a < 3; a++) {
         greye = "3";
      }
      while ((3.33 * unread_) <= 1.31 || (parseFloat(`${greye.length}`) * unread_) <= 3.33) {
         unread_ *= (parseFloat(`${greye == String.fromCharCode(105, 0) ? greye.length : acceptedp.size}`));
         break;
      }
      if ((acceptedp.size | 3) < 3) {
         let profileR = 3;
         let typesK = 2.0;
         let iconj = 1.0;
         acceptedp.set(`${unread_}`, 3 + acceptedp.size);
         profileR |= 3 + profileR;
         typesK /= Math.max(5, parseFloat(`${parseInt(`${iconj}`) & 3}`));
         iconj *= parseFloat(`${parseInt(`${typesK}`)}`);
      }
      if (1 >= (greye.length % 2)) {
         acceptedp = new Map([[`${unread_}`, 2]]);
      }
      cornerp += `${(String.fromCharCode(103, 0) == cornerp ? parseInt(`${eact4}`) : cornerp.length)}`;
      render9 += `${morez.size}`;
      let adult4 = 0.0;
      while (5.99 == (adult4 + 3)) {
         adult4 -= parseInt(`${adult4}`);
         break;
      }
      adult4 += parseInt(`${adult4}`) % 3;
      if ((adult4 + 2.74) >= 2.12 && 2.74 >= (adult4 + adult4)) {
         adult4 /= Math.max(3, 5);
      }
      morez.set(`${playg}`, morez.size * parseInt(`${playg}`));
      let nalyticsi = String.fromCharCode(97, 108, 112, 104, 97, 101, 120, 116, 114, 97, 99, 116, 95, 57, 95, 55, 49, 0);
      let pingy = String.fromCharCode(108, 95, 53, 55, 95, 97, 108, 97, 98, 97, 115, 116, 101, 114, 0);
      if (pingy.length <= nalyticsi.length) {
         pingy += `${pingy.length & 2}`;
      }
      while (pingy.length > 2) {
         nalyticsi += `${pingy.length}`;
         break;
      }
      while (!nalyticsi.endsWith(pingy)) {
         nalyticsi += `${pingy.length}`;
         break;
      }
      for (let n = 0; n < 2; n++) {
         nalyticsi += `${nalyticsi.length / (Math.max(pingy.length, 2))}`;
      }
      let clearJ: Array<any> = [286, 199];
      let goal1: Array<any> = [188, 940];
      for (let p = 0; p < 1; p++) {
         pingy = `${nalyticsi.length * goal1.length}`;
      }
      morez.set(`${greyw}`, 3);
      let bootsplashE = eact4 >= 6414393.0;
      do {
         eact4 *= cornerp.length;
         if (bootsplashE) {
            break;
         }
      } while (bootsplashE && (5.96 == (1 + libreactperfloggerjni2)));
      let anytimei = overlayY.size <= 7916523;
      do {
         let emptyE = String.fromCharCode(101, 95, 57, 51, 95, 116, 114, 97, 110, 115, 108, 105, 116, 101, 114, 97, 116, 101, 100, 0);
         let project2 = true;
         let weiboO = false;
         let schedules = 4.0;
         let renewp: Map<any, any> = new Map([[String.fromCharCode(101, 110, 99, 111, 100, 101, 109, 118, 95, 57, 95, 56, 51, 0), false], [String.fromCharCode(97, 116, 116, 114, 97, 99, 116, 95, 119, 95, 54, 56, 0), false]]);
         schedules /= Math.max((parseFloat(`${String.fromCharCode(118, 0) == emptyE ? (project2 ? 4 : 4) : emptyE.length}`)), 1);
         if (weiboO || (renewp.size & 5) < 4) {
            renewp = new Map([[`${renewp.size}`, renewp.size * emptyE.length]]);
         }
         for (let z = 0; z < 3; z++) {
            project2 = schedules >= 68.46;
         }
         let constantsS = 5;
         let loginN: Map<any, any> = new Map([[String.fromCharCode(120, 95, 55, 55, 95, 108, 111, 116, 116, 105, 101, 105, 116, 101, 109, 0), 224], [String.fromCharCode(118, 95, 50, 53, 95, 114, 101, 104, 97, 115, 104, 0), 534]]);
         weiboO = 26.99 <= schedules || !weiboO;
         constantsS <<= Math.min(5, Math.abs(3));
         loginN.set(`${constantsS}`, 3);
         renewp.set(emptyE, (String.fromCharCode(107, 0) == emptyE ? (weiboO ? 5 : 3) : emptyE.length));
         schedules -= parseFloat(`${parseInt(`${schedules}`) / 1}`);
         for (let j = 0; j < 3; j++) {
            let armvaK = false;
            let orientationl: Array<any> = [242, 459, 585];
            let gemfilea = 1.0;
            let kick7 = false;
            let libyogaA = 5.0;
            project2 = !kick7;
            armvaK = gemfilea > libyogaA;
            orientationl = [1];
            gemfilea -= parseInt(`${libyogaA}`) | orientationl.length;
         }
         let rightR = renewp.size >= 8454882;
         do {
            renewp = new Map([[`${schedules}`, parseInt(`${schedules}`) + 1]]);
            if (rightR) {
               break;
            }
         } while ((project2) && rightR);
         let textinputr = renewp.size <= 9676051;
         do {
            let aboutB = true;
            renewp = new Map([[`${project2}`, 3]]);
            aboutB = !aboutB;
            if (textinputr) {
               break;
            }
         } while ((renewp.size >= 5 || 3 >= (5 % (Math.max(3, renewp.size)))) && textinputr);
         if (!weiboO) {
            weiboO = 77.73 > schedules && String.fromCharCode(98, 0) == emptyE;
         }
         let memberH = String.fromCharCode(106, 95, 53, 95, 111, 119, 110, 115, 0);
         let executorK = String.fromCharCode(117, 115, 101, 114, 115, 95, 55, 95, 50, 55, 0);
         renewp.set(`${emptyE}`, emptyE.length);
         memberH += "2";
         executorK += `${memberH.length}`;
         if (project2 && 4 >= emptyE.length) {
            project2 = (50 <= ((!project2 ? emptyE.length : 50) ^ emptyE.length));
         }
         for (let c = 0; c < 3; c++) {
            project2 = emptyE.length >= 98;
         }
         project2 = emptyE.includes(`${project2}`);
         let matchy = project2 ? !project2 : project2;
         do {
            let button6: Array<any> = [593, 571];
            let penalty9 = String.fromCharCode(99, 97, 110, 99, 101, 108, 108, 97, 98, 108, 101, 95, 102, 95, 57, 48, 0);
            project2 = emptyE.length >= 18;
            button6.push(3 + button6.length);
            penalty9 += `${penalty9.length * button6.length}`;
            if (matchy) {
               break;
            }
         } while (matchy && (emptyE.length == 3 && project2));
         overlayY.set(cornerp, cornerp.length & 2);
         if (anytimei) {
            break;
         }
      } while (anytimei && (overlayY.size > parseInt(`${greyw}`)));
      if ((render9.length % (Math.max(2, 6))) <= 2 && (parseInt(`${libreactperfloggerjni2}`) / (Math.max(render9.length, 10))) <= 2) {
         render9 = `${1 | cornerp.length}`;
      }
      setRefreshing(false);
      scrollRef.current.scrollTo({ index: 0, animated: false });
   };

   const refreshUserState = async () => {
      let moonR = String.fromCharCode(120, 95, 52, 54, 95, 100, 101, 99, 111, 114, 97, 116, 105, 111, 110, 115, 0);
      let condensedU = String.fromCharCode(98, 102, 108, 121, 95, 103, 95, 54, 50, 0);
      let default_ux: Array<any> = [352, 196, 28];
      let animationq = String.fromCharCode(102, 105, 108, 109, 95, 100, 95, 52, 0);
      let crown3 = String.fromCharCode(117, 95, 55, 56, 95, 115, 121, 110, 116, 104, 0);
      let ksadK = 4;
      let gemfile9 = 0.0;
      let libmapbufferjnim = 2.0;
      let projectZ = 3;
      let feedback7: Map<any, any> = new Map([[String.fromCharCode(100, 111, 119, 110, 115, 97, 109, 112, 108, 101, 100, 95, 102, 95, 52, 54, 0), 434], [String.fromCharCode(101, 95, 50, 50, 95, 118, 97, 114, 105, 97, 110, 116, 0), 559]]);
      let condensedb = false;
      let foundk: Array<any> = [478, 519];
      let borderless7 = 4.0;
      let membery: Array<any> = [String.fromCharCode(110, 112, 114, 111, 98, 101, 95, 117, 95, 55, 53, 0), String.fromCharCode(108, 95, 50, 55, 95, 115, 99, 111, 112, 101, 105, 100, 0)];
      let circleu = String.fromCharCode(118, 111, 119, 101, 108, 115, 95, 114, 95, 54, 54, 0);
      let disconnectedn: Array<any> = [String.fromCharCode(97, 95, 50, 49, 95, 114, 101, 115, 111, 108, 117, 116, 105, 111, 110, 0), String.fromCharCode(115, 117, 98, 106, 101, 99, 116, 105, 118, 101, 115, 95, 120, 95, 54, 49, 0)];
      let tickedx = String.fromCharCode(103, 114, 101, 121, 95, 105, 95, 56, 51, 0);
      if (2 >= (condensedU.length - default_ux.length)) {
         condensedU += `${1 * feedback7.size}`;
      }
      libmapbufferjnim -= ksadK % (Math.max(7, condensedU.length));
      condensedU += `${moonR.length}`;
      if (4 <= (ksadK - 2) || 2.6 <= (ksadK / (Math.max(gemfile9, 10)))) {
         let libreanimatedz: Map<any, any> = new Map([[String.fromCharCode(99, 102, 116, 102, 115, 117, 98, 95, 57, 95, 56, 56, 0), false], [String.fromCharCode(99, 97, 112, 116, 117, 114, 101, 114, 95, 100, 95, 57, 51, 0), true], [String.fromCharCode(116, 97, 107, 101, 111, 118, 101, 114, 95, 100, 95, 51, 54, 0), false]]);
         let constantsW = 4.0;
         while (2.17 >= (constantsW - 5.50) || (constantsW - 5.50) >= 3.38) {
            libreanimatedz.set(`${constantsW}`, libreanimatedz.size & parseInt(`${constantsW}`));
            break;
         }
         let overlay0: Array<any> = [669, 347];
         let upgradel: Array<any> = [831, 36, 697];
         if ((overlay0.length % (Math.max(3, 5))) <= 4 && (overlay0.length % 3) <= 3) {
            libreanimatedz = new Map([[`${libreanimatedz.size}`, overlay0.length | 3]]);
         }
         let predictionf = constantsW <= 8495784.0;
         do {
            constantsW *= upgradel.length ^ 2;
            if (predictionf) {
               break;
            }
         } while (predictionf && (constantsW == 2.40));
         libreanimatedz.set(`${overlay0.length}`, 3);
         if (libreanimatedz.get(`${overlay0.length}`) != null) {
            libreanimatedz = new Map([[`${libreanimatedz.size}`, parseInt(`${constantsW}`)]]);
         }
         gemfile9 /= Math.max(3 & crown3.length, 5);
      }
      let libjsiH = projectZ <= 9672238;
      do {
         projectZ += 3;
         if (libjsiH) {
            break;
         }
      } while (((3 << (Math.min(5, Math.abs(projectZ)))) <= 3) && libjsiH);
      animationq += `${crown3.length & 3}`;

      const result = await yys_GesturesConst.getUserDetails();

      let temperaturez = String.fromCharCode(109, 95, 56, 55, 95, 115, 108, 105, 100, 97, 98, 108, 101, 0);
      let filed8 = 0.0;
      filed8 += (String.fromCharCode(52, 0) == temperaturez ? temperaturez.length : parseInt(`${filed8}`));
      filed8 -= (temperaturez == String.fromCharCode(56, 0) ? temperaturez.length : parseInt(`${filed8}`));
      while (temperaturez.length <= 5) {
         filed8 /= Math.max(4, 2 - temperaturez.length);
         break;
      }
      let stats7: Array<any> = [920, 308, 856];
      let langg: Array<any> = [270, 289, 763];
      let mergerx = filed8 >= 9578024.0;
      do {
         let langD = 5.0;
         let buttonW = 2.0;
         let formO = false;
         filed8 *= 1;
         langD -= 3 % (Math.max(parseInt(`${buttonW}`), 3));
         buttonW *= parseInt(`${langD}`);
         formO = (langD * buttonW) > 26.13;
         if (mergerx) {
            break;
         }
      } while (mergerx && (3 < temperaturez.length));
      temperaturez = `${(temperaturez == String.fromCharCode(76, 0) ? parseInt(`${filed8}`) : temperaturez.length)}`;
      projectZ &= ksadK - parseInt(`${libmapbufferjnim}`);
      if ((ksadK + parseInt(`${libmapbufferjnim}`)) <= 1 || 2 <= (1 + ksadK)) {
         ksadK |= 3;
      }
      let malaysiae = 0.0;
      let package_tN = String.fromCharCode(97, 108, 108, 111, 99, 97, 116, 101, 100, 95, 120, 95, 50, 54, 0);
      let brightnessR: Map<any, any> = new Map([[String.fromCharCode(112, 114, 111, 116, 101, 99, 116, 101, 100, 95, 53, 95, 54, 50, 0), 787], [String.fromCharCode(105, 95, 54, 53, 95, 115, 116, 97, 114, 116, 117, 112, 0), 788]]);
      while (package_tN.length == 4) {
         package_tN = `${brightnessR.size * 2}`;
         break;
      }
      if (!package_tN.endsWith(`${malaysiae}`)) {
         malaysiae *= (parseFloat(`${package_tN == String.fromCharCode(48, 0) ? package_tN.length : parseInt(`${malaysiae}`)}`));
      }
      let orientation4 = String.fromCharCode(104, 95, 53, 95, 109, 97, 100, 101, 0);
      brightnessR.set(orientation4, brightnessR.size >> (Math.min(orientation4.length, 1)));
      if ((package_tN.length - brightnessR.size) >= 1) {
         let internetx = false;
         let splashr = String.fromCharCode(107, 95, 49, 48, 48, 95, 99, 104, 111, 105, 99, 101, 115, 0);
         brightnessR = new Map([[splashr, (splashr.length ^ (internetx ? 2 : 3))]]);
      }
      let controlsS = malaysiae >= 5243676.0;
      do {
         let modelsu = String.fromCharCode(118, 95, 49, 50, 95, 110, 111, 110, 110, 117, 108, 108, 115, 99, 104, 101, 109, 101, 115, 0);
         let private_69: Map<any, any> = new Map([[String.fromCharCode(116, 114, 117, 115, 116, 101, 100, 95, 100, 95, 54, 52, 0), 291], [String.fromCharCode(118, 95, 57, 49, 95, 105, 110, 116, 101, 114, 114, 117, 112, 116, 0), 499]]);
         malaysiae /= Math.max(parseFloat(`${parseInt(`${malaysiae}`) / (Math.max(package_tN.length, 6))}`), 2);
         modelsu = "1";
         private_69.set(`${modelsu}`, 2 | private_69.size);
         if (controlsS) {
            break;
         }
      } while (((brightnessR.size - parseInt(`${malaysiae}`)) > 2 && 2 > (brightnessR.size - parseInt(`${malaysiae}`))) && controlsS);
      if (!package_tN.endsWith(`${brightnessR.size}`)) {
         let core_ = String.fromCharCode(119, 95, 49, 49, 95, 101, 98, 117, 108, 97, 115, 0);
         let controlsE = String.fromCharCode(114, 108, 105, 110, 101, 95, 55, 95, 55, 51, 0);
         let countdownf: Array<any> = [851, 183];
         package_tN = `${(String.fromCharCode(50, 0) == controlsE ? brightnessR.size : controlsE.length)}`;
         core_ = "2";
         countdownf = [countdownf.length];
      }
      let thumbnailw: Map<any, any> = new Map([[String.fromCharCode(116, 117, 110, 110, 101, 108, 105, 110, 103, 95, 103, 95, 54, 56, 0), 550], [String.fromCharCode(114, 95, 55, 52, 95, 104, 105, 115, 116, 111, 103, 114, 97, 109, 115, 0), 176]]);
      let storef = 1.0;
      package_tN = "2";
      thumbnailw = new Map([[`${thumbnailw.size}`, 1]]);
      storef /= Math.max(1, parseInt(`${storef}`) >> (Math.min(Math.abs(1), 2)));
      let mapping2 = String.fromCharCode(107, 95, 54, 52, 95, 109, 97, 112, 112, 101, 100, 0);
      let singleZ: Array<any> = [232, 667, 285];
      malaysiae += parseFloat(`${brightnessR.size}`);
      mapping2 = `${mapping2.length | singleZ.length}`;
      singleZ.push(1 >> (Math.min(3, mapping2.length)));
      let combineL: Map<any, any> = new Map([[String.fromCharCode(105, 110, 102, 105, 110, 105, 116, 121, 95, 54, 95, 53, 0), 822], [String.fromCharCode(114, 102, 102, 116, 102, 95, 113, 95, 57, 50, 0), 126]]);
      let skipF = 2.0;
      package_tN += `${parseInt(`${skipF}`) | parseInt(`${malaysiae}`)}`;
      combineL = new Map([[`${combineL.size}`, 1 ^ combineL.size]]);
      skipF -= combineL.size - combineL.size;
      ksadK %= Math.max(package_tN.length >> (Math.min(Math.abs(3), 4)), 4);
      if ((moonR.length - parseInt(`${libmapbufferjnim}`)) > 3 || 1.82 > (5.6 - libmapbufferjnim)) {
         let tumbnailt = false;
         if (tumbnailt) {
            let thumbnailC = String.fromCharCode(111, 99, 117, 109, 101, 110, 116, 95, 55, 95, 51, 0);
            tumbnailt = thumbnailC.length > 35;
         }
         tumbnailt = !tumbnailt;
         tumbnailt = !tumbnailt || tumbnailt;
         libmapbufferjnim -= parseInt(`${libmapbufferjnim}`);
      }
      let builds = 2.0;
      let overC = 1;
      overC >>= Math.min(1, Math.abs(parseInt(`${builds}`)));
      if ((1.26 * builds) <= 1.86) {
         builds -= parseFloat(`${parseInt(`${builds}`)}`);
      }
      overC <<= Math.min(Math.abs(parseInt(`${builds}`)), 5);
      let megaphoned = 4.0;
      overC -= parseInt(`${builds}`) * 3;
      megaphoned /= Math.max(5, parseInt(`${megaphoned}`) - parseInt(`${megaphoned}`));
      builds *= parseFloat(`${2 & overC}`);
      if (2 > (1 << (Math.min(1, Math.abs(overC))))) {
         builds += parseFloat(`${parseInt(`${builds}`) / 2}`);
      }
      default_ux = [overC];
      let basketballq = gemfile9 <= 8980390.0;
      do {
         let qnewsu = false;
         let closeB = 3.0;
         let downloadO = String.fromCharCode(119, 99, 104, 97, 114, 95, 105, 95, 56, 48, 0);
         let rulesm: Array<any> = [395, 769];
         qnewsu = closeB == 99.47;
         closeB += (parseFloat(`${String.fromCharCode(75, 0) == downloadO ? rulesm.length : downloadO.length}`));
         rulesm.push(downloadO.length);
         if (qnewsu) {
            qnewsu = (qnewsu ? !qnewsu : qnewsu);
         }
         for (let s = 0; s < 3; s++) {
            let final_paW: Array<any> = [728, 487];
            qnewsu = final_paW.includes(qnewsu);
         }
         gemfile9 /= Math.max(5, feedback7.size << (Math.min(2, Math.abs(parseInt(`${libmapbufferjnim}`)))));
         if (basketballq) {
            break;
         }
      } while (basketballq && (condensedU.endsWith(`${gemfile9}`)));
      if (result == null) {

         let mbnativeadvanced2 = gemfile9 <= 7705464.0;
         do {
            let scrollviewQ: Map<any, any> = new Map([[String.fromCharCode(118, 95, 57, 57, 95, 100, 114, 97, 103, 103, 97, 98, 108, 101, 0), 367], [String.fromCharCode(119, 111, 114, 107, 115, 95, 116, 95, 49, 54, 0), 179]]);
            let line6 = 1.0;
            let belly = 3.0;
            line6 /= Math.max(scrollviewQ.size + 3, 3);
            for (let v = 0; v < 3; v++) {
               belly /= Math.max(3, 2);
            }
            belly /= Math.max(3, parseInt(`${belly}`) - parseInt(`${line6}`));
            let become0 = false;
            let mergerV = 5.0;
            let adultH = true;
            line6 -= (2 << (Math.min(3, Math.abs((become0 ? 4 : 3)))));
            become0 = mergerV <= 89.31;
            mergerV /= Math.max(parseInt(`${mergerV}`) / 1, 2);
            adultH = adultH && mergerV > 34.41;
            while (belly > 5.94) {
               belly /= Math.max(scrollviewQ.size, 4);
               break;
            }
            let switch_o5 = 3.0;
            let foregroundq = 1;
            scrollviewQ = new Map([[`${line6}`, parseInt(`${belly}`)]]);
            switch_o5 += 3;
            foregroundq -= 3 ^ foregroundq;
            for (let i = 0; i < 3; i++) {
               belly += scrollviewQ.size + parseInt(`${line6}`);
            }
            line6 -= scrollviewQ.size;
            while ((line6 - belly) > 1.54 || 2.18 > (1.54 - line6)) {
               belly -= 2;
               break;
            }
            gemfile9 /= Math.max(5, ((condensedb ? 3 : 4) % (Math.max(parseInt(`${libmapbufferjnim}`), 6))));
            if (mbnativeadvanced2) {
               break;
            }
         } while (mbnativeadvanced2 && (4 == (2 % (Math.max(10, feedback7.size))) && (gemfile9 + 3.46) == 3.88));
         gemfile9 += (String.fromCharCode(66, 0) == animationq ? animationq.length : parseInt(`${libmapbufferjnim}`));
         for (let r = 0; r < 2; r++) {
            let incident6 = String.fromCharCode(110, 95, 54, 57, 95, 114, 101, 115, 105, 100, 101, 110, 99, 101, 0);
            let emojiw = 1.0;
            let membershipt = 4;
            let libswscale3: Map<any, any> = new Map([[String.fromCharCode(99, 106, 112, 101, 103, 95, 56, 95, 50, 0), 543], [String.fromCharCode(118, 95, 56, 55, 95, 114, 101, 99, 116, 97, 110, 103, 108, 101, 115, 0), 785]]);
            while (1 > (4 * membershipt)) {
               membershipt ^= membershipt & parseInt(`${emojiw}`);
               break;
            }
            if ((incident6.length * parseInt(`${emojiw}`)) < 1) {
               incident6 = `${parseInt(`${emojiw}`) | 3}`;
            }
            while ((membershipt + emojiw) <= 4.76 && (4 * membershipt) <= 5) {
               let mergerM = 5.0;
               membershipt |= libswscale3.size - 1;
               mergerM /= Math.max(5, parseFloat(`${parseInt(`${mergerM}`) | 2}`));
               break;
            }
            let yingx = false;
            let libreactnativejniT = incident6 == String.fromCharCode(52, 109, 119, 53, 0);
            do {
               incident6 += `${libswscale3.size}`;
               if (libreactnativejniT) {
                  break;
               }
            } while (libreactnativejniT && (!incident6.includes(`${emojiw}`)));
            if (3.51 > (5.88 - emojiw) && 5.88 > (membershipt - emojiw)) {
               emojiw *= libswscale3.size + membershipt;
            }
            while (5 <= libswscale3.size) {
               let sansy = String.fromCharCode(99, 116, 120, 116, 95, 48, 95, 51, 55, 0);
               let mountingb = 0.0;
               yingx = sansy.length == 90 && 76.25 == emojiw;
               sansy += `${parseInt(`${mountingb}`) | 2}`;
               mountingb /= Math.max(parseFloat(`${parseInt(`${mountingb}`)}`), 5);
               break;
            }
            let ewardedn = incident6.length <= 7618344;
            do {
               let long_eoD = 0.0;
               let targetp = String.fromCharCode(118, 95, 53, 48, 95, 103, 114, 111, 117, 110, 100, 0);
               let libswresampleY = 2.0;
               let overk = 2.0;
               let thumbnailh = 5.0;
               incident6 += `${libswscale3.size}`;
               long_eoD -= parseFloat(`${3 - parseInt(`${overk}`)}`);
               targetp += `${parseInt(`${long_eoD}`) ^ targetp.length}`;
               libswresampleY *= (parseFloat(`${targetp == String.fromCharCode(107, 0) ? parseInt(`${long_eoD}`) : targetp.length}`));
               overk *= parseFloat(`${2}`);
               thumbnailh *= parseInt(`${thumbnailh}`) & parseInt(`${overk}`);
               if (ewardedn) {
                  break;
               }
            } while ((incident6.startsWith(`${yingx}`)) && ewardedn);
            emojiw /= Math.max(parseInt(`${emojiw}`) ^ libswscale3.size, 2);
            let u_lockp: Array<any> = [388, 632, 966];
            let renderm = 5.0;
            let adultP = String.fromCharCode(99, 95, 55, 56, 95, 99, 111, 110, 102, 111, 114, 109, 97, 110, 99, 101, 0);
            incident6 += `${3 & u_lockp.length}`;
            u_lockp = [adultP.length];
            renderm -= parseFloat(`${parseInt(`${renderm}`)}`);
            adultP += `${adultP.length >> (Math.min(4, Math.abs(parseInt(`${renderm}`))))}`;
            if (yingx) {
               let libfollyY = String.fromCharCode(112, 114, 111, 98, 97, 98, 108, 101, 95, 112, 95, 56, 53, 0);
               membershipt >>= Math.min(Math.abs(membershipt | libfollyY.length), 3);
            }
            libswscale3.set(incident6, incident6.length);
            ksadK <<= Math.min(1, Math.abs(feedback7.size << (Math.min(moonR.length, 3))));
         }
         let calendarw = String.fromCharCode(101, 95, 51, 95, 111, 118, 101, 114, 114, 105, 100, 105, 110, 103, 0);
         let typing0: Array<any> = [523, 670, 747];
         let modityp: Array<any> = [321, 920, 6];
         calendarw = `${calendarw.length}`;
         calendarw = `${calendarw.length}`;
         foundk = [projectZ];
         while (condensedU.includes(`${foundk.length}`)) {
            condensedU += "3";
            break;
         }
         animationq = `${2 ^ moonR.length}`;
         return;
      }

      await dispatch(updateUserAuth(result));

      if ((feedback7.size | 1) >= 4) {
         condensedU += "2";
      }
      while (foundk.length < animationq.length) {
         let cross5 = String.fromCharCode(97, 115, 99, 101, 110, 100, 101, 114, 95, 48, 95, 56, 55, 0);
         let ajaxg: Array<any> = [40, 353];
         let malaysiaP = String.fromCharCode(102, 114, 101, 101, 122, 101, 95, 108, 95, 54, 57, 0);
         let libfbjnik = 8965803 >= ajaxg.length;
         do {
            ajaxg.push(1);
            if (libfbjnik) {
               break;
            }
         } while (libfbjnik && (malaysiaP.includes(`${ajaxg.length}`)));
         let details8: Map<any, any> = new Map([[String.fromCharCode(99, 111, 109, 112, 111, 115, 101, 105, 95, 104, 95, 49, 50, 0), false], [String.fromCharCode(100, 114, 105, 102, 116, 105, 110, 103, 95, 53, 95, 51, 50, 0), true]]);
         malaysiaP = `${2 & malaysiaP.length}`;
         details8.set(`${details8.size}`, details8.size);
         malaysiaP += `${ajaxg.length}`;
         while (1 >= (2 + ajaxg.length) || (ajaxg.length + 2) >= 4) {
            let countrye: Array<any> = [633, 708, 970];
            let calendar_ = 3.0;
            let usero = String.fromCharCode(110, 111, 110, 98, 108, 111, 99, 107, 105, 110, 103, 95, 100, 95, 49, 55, 0);
            let kuaishouA = String.fromCharCode(97, 95, 51, 51, 95, 109, 111, 110, 111, 116, 111, 110, 105, 99, 0);
            ajaxg = [kuaishouA.length];
            countrye = [(String.fromCharCode(70, 0) == usero ? parseInt(`${calendar_}`) : usero.length)];
            calendar_ *= 3 * usero.length;
            kuaishouA = `${usero.length}`;
            break;
         }
         for (let y = 0; y < 3; y++) {
            let typesY = String.fromCharCode(119, 95, 56, 52, 95, 99, 111, 110, 115, 116, 97, 110, 116, 0);
            malaysiaP += `${malaysiaP.length << (Math.min(Math.abs(3), 3))}`;
            typesY = `${(String.fromCharCode(115, 0) == typesY ? typesY.length : typesY.length)}`;
         }
         for (let k = 0; k < 1; k++) {
            cross5 += "2";
         }
         let dycreator3 = String.fromCharCode(122, 95, 54, 52, 95, 97, 99, 111, 109, 112, 114, 101, 115, 115, 111, 114, 0);
         let neonL = 5;
         ajaxg = [neonL];
         dycreator3 += `${3 * dycreator3.length}`;
         neonL &= dycreator3.length << (Math.min(Math.abs(3), 5));
         let libsentryU = String.fromCharCode(112, 117, 98, 108, 105, 99, 105, 116, 121, 95, 50, 95, 50, 48, 0);
         malaysiaP = `${(cross5 == String.fromCharCode(53, 0) ? cross5.length : ajaxg.length)}`;
         libsentryU = `${libsentryU.length}`;
         let thumbnailV = 5.0;
         ajaxg.push(1 ^ parseInt(`${thumbnailV}`));
         animationq += `${default_ux.length}`;
         break;
      }
      if (condensedb) {
         condensedb = borderless7 > 11.15 || condensedb;
      }
      if (5.41 >= (borderless7 - gemfile9) && (5.41 - gemfile9) >= 4.84) {
         borderless7 += (parseFloat(`${parseInt(`${libmapbufferjnim}`) - (condensedb ? 5 : 5)}`));
      }
      membery.push(parseInt(`${borderless7}`) | condensedU.length);
      while (2 <= condensedU.length && condensedb) {
         condensedb = moonR.length == 98;
         break;
      }
      return;
   };

   const checkConnection = async () => {
      let sportx = 3;
      let register_2L = true;
      let playv = 3.0;
      let emojig = String.fromCharCode(111, 95, 51, 52, 95, 119, 114, 105, 116, 101, 0);
      let valueso: Map<any, any> = new Map([[String.fromCharCode(112, 115, 101, 117, 100, 111, 95, 57, 95, 50, 54, 0), true], [String.fromCharCode(106, 95, 55, 51, 95, 97, 116, 116, 0), false]]);
      let mbbide = String.fromCharCode(116, 95, 51, 50, 95, 110, 99, 104, 117, 110, 107, 0);
      let topicB: Map<any, any> = new Map([[String.fromCharCode(108, 95, 56, 53, 95, 116, 114, 97, 110, 115, 102, 111, 114, 109, 115, 0), true], [String.fromCharCode(117, 121, 118, 121, 95, 104, 95, 54, 48, 0), false]]);
      let cricket8 = 2.0;
      let libhermesE = String.fromCharCode(105, 95, 54, 51, 95, 115, 116, 97, 116, 101, 115, 0);
      let user5 = String.fromCharCode(105, 110, 116, 101, 103, 101, 114, 95, 114, 95, 49, 48, 48, 0);
      let reducerq = true;
      let twitterD = String.fromCharCode(115, 121, 110, 99, 104, 114, 111, 110, 105, 122, 101, 97, 98, 108, 101, 95, 105, 95, 54, 57, 0);
      let scrollviewe = 0.0;
      let libturbomodulejsijniG = String.fromCharCode(111, 95, 57, 49, 95, 102, 114, 101, 101, 109, 0);
      let anytime7: Map<any, any> = new Map([[String.fromCharCode(114, 95, 49, 50, 95, 100, 111, 119, 110, 0), false], [String.fromCharCode(113, 95, 57, 53, 95, 110, 111, 110, 110, 117, 108, 108, 115, 101, 114, 105, 97, 108, 105, 122, 97, 116, 105, 111, 110, 0), true], [String.fromCharCode(110, 95, 55, 95, 121, 117, 118, 112, 116, 111, 117, 121, 118, 121, 0), true]]);
      let saveT = String.fromCharCode(101, 100, 105, 116, 97, 98, 108, 101, 95, 111, 95, 51, 53, 0);
      let libffmpegkitq: Map<any, any> = new Map([[String.fromCharCode(97, 117, 116, 111, 114, 101, 115, 105, 122, 105, 110, 103, 95, 50, 95, 57, 52, 0), String.fromCharCode(109, 111, 110, 107, 101, 121, 95, 56, 95, 57, 48, 0)], [String.fromCharCode(100, 95, 55, 56, 95, 100, 101, 102, 105, 110, 105, 116, 105, 111, 110, 115, 0), String.fromCharCode(118, 99, 97, 99, 100, 97, 116, 97, 95, 111, 95, 56, 53, 0)]]);
      let searchbarx = String.fromCharCode(109, 95, 56, 55, 95, 105, 110, 104, 105, 98, 105, 116, 0);
      let downloadedE = String.fromCharCode(102, 105, 108, 116, 101, 114, 115, 95, 116, 95, 57, 54, 0);
      for (let a = 0; a < 1; a++) {
         let aboutY = String.fromCharCode(115, 112, 97, 114, 115, 101, 95, 106, 95, 49, 57, 0);
         let countryY: Array<any> = [61, 72];
         let xadsdkY = String.fromCharCode(108, 97, 98, 101, 108, 101, 100, 95, 55, 95, 53, 50, 0);
         let rightB: Array<any> = [96, 417];
         let trophy8 = String.fromCharCode(121, 95, 55, 56, 95, 115, 101, 116, 117, 112, 105, 110, 116, 114, 97, 114, 101, 99, 111, 110, 0);
         libffmpegkitq = new Map([[`${rightB.length}`, rightB.length % (Math.max(6, searchbarx.length))]]);
         aboutY += `${2 ^ trophy8.length}`;
         countryY.push(countryY.length);
         xadsdkY += `${aboutY.length}`;
         trophy8 = `${aboutY.length}`;
      }
      for (let k = 0; k < 1; k++) {
         downloadedE = `${libffmpegkitq.size}`;
      }
      for (let j = 0; j < 1; j++) {
         let pingV = 4.0;
         let toponp = 2.0;
         downloadedE = `${parseInt(`${toponp}`)}`;
         pingV += parseFloat(`${2 * parseInt(`${pingV}`)}`);
      }
      let invited = String.fromCharCode(99, 95, 53, 48, 95, 115, 117, 112, 112, 108, 101, 109, 101, 110, 116, 97, 108, 0);
      let zhubop = String.fromCharCode(113, 95, 53, 55, 95, 119, 114, 105, 116, 101, 120, 0);
      searchbarx = `${libffmpegkitq.size}`;
      invited = `${(zhubop == String.fromCharCode(115, 0) ? zhubop.length : invited.length)}`;
      let dicez = String.fromCharCode(101, 99, 111, 117, 110, 116, 95, 117, 95, 50, 56, 0);
      downloadedE += `${downloadedE.length}`;
      dicez = "2";
      for (let r = 0; r < 2; r++) {
         searchbarx = `${(String.fromCharCode(105, 0) == searchbarx ? searchbarx.length : dicez.length)}`;
      }
      for (let e = 0; e < 3; e++) {
         downloadedE = "2";
      }
      mbbide = `${libhermesE.length >> (Math.min(Math.abs(3), 1))}`;
      let predictione = 6980013 <= valueso.size;
      do {
         valueso = new Map([[`${topicB.size}`, topicB.size / (Math.max(mbbide.length, 3))]]);
         if (predictione) {
            break;
         }
      } while (predictione && (5 > (valueso.size - emojig.length)));
      while (2 == libhermesE.length) {
         let activer: Array<any> = [String.fromCharCode(102, 95, 55, 54, 95, 116, 111, 103, 103, 108, 105, 110, 103, 0), String.fromCharCode(112, 114, 111, 99, 101, 115, 115, 101, 100, 95, 52, 95, 54, 56, 0)];
         let moont = String.fromCharCode(97, 115, 109, 100, 101, 102, 115, 95, 49, 95, 57, 50, 0);
         let libreactnativejnim: Array<any> = [358, 946];
         if (moont.startsWith(`${libreactnativejnim.length}`)) {
            moont = "3";
         }
         for (let p = 0; p < 1; p++) {
            let splashB = String.fromCharCode(115, 99, 104, 105, 95, 116, 95, 52, 50, 0);
            activer.push((splashB == String.fromCharCode(117, 0) ? splashB.length : libreactnativejnim.length));
         }
         moont = `${activer.length ^ 1}`;
         moont += `${libreactnativejnim.length}`;
         while ((5 << (Math.min(2, libreactnativejnim.length))) <= 5) {
            moont = `${libreactnativejnim.length % (Math.max(moont.length, 9))}`;
            break;
         }
         let configureZ = 8998966 <= moont.length;
         do {
            moont += `${activer.length}`;
            if (configureZ) {
               break;
            }
         } while (configureZ && (!moont.endsWith(`${libreactnativejnim.length}`)));
         while (libreactnativejnim.length == moont.length) {
            let typing8 = 4.0;
            libreactnativejnim = [(moont == String.fromCharCode(84, 0) ? parseInt(`${typing8}`) : moont.length)];
            break;
         }
         let topicG = activer.length >= 5809571;
         do {
            activer = [libreactnativejnim.length + 3];
            if (topicG) {
               break;
            }
         } while (topicG && (2 < (libreactnativejnim.length % (Math.max(1, 3))) && (libreactnativejnim.length % (Math.max(3, activer.length))) < 1));
         libreactnativejnim = [libreactnativejnim.length / (Math.max(moont.length, 7))];
         libhermesE += "2";
         break;
      }
      let accepted6 = String.fromCharCode(122, 95, 53, 49, 95, 115, 104, 111, 114, 116, 101, 114, 0);
      let mountingB: Array<any> = [28, 484, 978];
      let eactr = String.fromCharCode(115, 95, 49, 48, 95, 100, 111, 118, 101, 0);
      eactr += `${mountingB.length & accepted6.length}`;
      if (mountingB.length == 4) {
         let fastE = String.fromCharCode(102, 105, 108, 116, 101, 114, 95, 103, 95, 51, 48, 0);
         let downloadx = String.fromCharCode(102, 95, 53, 49, 95, 114, 101, 100, 101, 109, 112, 116, 105, 111, 110, 0);
         let borderlessk = String.fromCharCode(112, 95, 56, 52, 95, 99, 97, 108, 99, 117, 108, 97, 116, 101, 100, 0);
         let read2: Array<any> = [72, 539, 687];
         let downloadingL = String.fromCharCode(101, 110, 117, 109, 101, 114, 97, 116, 105, 110, 103, 95, 53, 95, 50, 49, 0);
         mountingB.push(2);
         fastE = `${borderlessk.length}`;
         downloadx = `${(String.fromCharCode(66, 0) == downloadx ? downloadx.length : read2.length)}`;
         borderlessk += `${downloadingL.length}`;
         read2 = [2 >> (Math.min(5, read2.length))];
         downloadingL += `${downloadingL.length / 1}`;
      }
      mountingB = [eactr.length >> (Math.min(2, mountingB.length))];
      let mails: Array<any> = [String.fromCharCode(115, 95, 49, 48, 95, 111, 112, 101, 110, 115, 101, 97, 0), String.fromCharCode(109, 111, 118, 101, 115, 95, 101, 95, 53, 49, 0)];
      let soundF = 1.0;
      let bufferh: Map<any, any> = new Map([[String.fromCharCode(98, 105, 116, 114, 101, 100, 117, 99, 116, 105, 111, 110, 95, 52, 95, 51, 53, 0), 378], [String.fromCharCode(118, 95, 49, 95, 100, 105, 97, 108, 111, 103, 115, 0), 61]]);
      eactr = `${eactr.length / 2}`;
      soundF += 2;
      bufferh.set(`${soundF}`, 1);
      while (!accepted6.endsWith(`${eactr.length}`)) {
         let searchx = String.fromCharCode(114, 101, 109, 97, 112, 112, 105, 110, 103, 95, 101, 95, 49, 50, 0);
         let langN = String.fromCharCode(101, 95, 57, 51, 95, 97, 100, 103, 114, 111, 117, 112, 0);
         let collectionf: Array<any> = [215, 234, 262];
         eactr += `${searchx.length * mails.length}`;
         searchx += `${2 & collectionf.length}`;
         langN += `${collectionf.length / (Math.max(3, 6))}`;
         break;
      }
      let mapbufferp = false;
      mountingB = [mountingB.length * mails.length];
      mapbufferp = mapbufferp && mapbufferp;
      for (let o = 0; o < 3; o++) {
         let qaagb: Array<any> = [985, 450, 78];
         let pressureS = 3;
         let plashd = String.fromCharCode(117, 110, 112, 97, 99, 107, 95, 114, 95, 55, 0);
         mountingB.push(qaagb.length);
         qaagb = [pressureS];
         pressureS -= (String.fromCharCode(81, 0) == plashd ? pressureS : plashd.length);
      }
      let matht = eactr.length <= 6360283;
      do {
         eactr = `${eactr.length}`;
         if (matht) {
            break;
         }
      } while ((3 == (mountingB.length / (Math.max(3, eactr.length))) || (mountingB.length / (Math.max(3, 2))) == 4) && matht);
      sportx %= Math.max(mountingB.length, 2);
      let fadfdeebbbfdabbbabdadfaaddaaX = String.fromCharCode(113, 111, 51, 122, 107, 0) == libhermesE;
      do {
         libhermesE += `${(user5 == String.fromCharCode(57, 0) ? user5.length : mbbide.length)}`;
         if (fadfdeebbbfdabbbabdadfaaddaaX) {
            break;
         }
      } while (fadfdeebbbfdabbbabdadfaaddaaX && (3 < sportx));
      for (let d = 0; d < 3; d++) {
         libhermesE = "1";
      }
      while (twitterD != String.fromCharCode(50, 0)) {
         let placeholder0 = 2.0;
         let libswresampleo: Array<any> = [581, 837];
         let sellO = String.fromCharCode(112, 97, 114, 116, 105, 99, 108, 101, 95, 115, 95, 54, 55, 0);
         let tailS: Map<any, any> = new Map([[String.fromCharCode(101, 110, 99, 111, 100, 101, 105, 110, 116, 114, 97, 95, 122, 95, 51, 55, 0), 376], [String.fromCharCode(112, 95, 57, 56, 95, 97, 99, 114, 111, 110, 121, 109, 0), 845]]);
         if (Array.from(tailS.keys()).includes(`${placeholder0}`)) {
            tailS = new Map([[`${libswresampleo.length}`, 2]]);
         }
         tailS = new Map([[`${tailS.size}`, tailS.size ^ 3]]);
         libswresampleo.push((String.fromCharCode(48, 0) == sellO ? tailS.size : sellO.length));
         while ((tailS.size % 5) <= 3 && (sellO.length % (Math.max(10, tailS.size))) <= 5) {
            sellO += `${libswresampleo.length * 2}`;
            break;
         }
         while (tailS.size == 4) {
            sellO += `${tailS.size >> (Math.min(libswresampleo.length, 3))}`;
            break;
         }
         let mailN = true;
         let libavdeviceF = true;
         let helperX = String.fromCharCode(119, 95, 56, 95, 114, 101, 97, 100, 113, 0);
         sellO += `${tailS.size}`;
         mailN = helperX.length >= 56 && mailN;
         libavdeviceF = mailN || helperX.length > 57;
         for (let q = 0; q < 1; q++) {
            tailS = new Map([[`${tailS.size}`, tailS.size % 3]]);
         }
         sellO += `${parseInt(`${placeholder0}`) / (Math.max(libswresampleo.length, 9))}`;
         let lessU = tailS.size >= 6400211;
         do {
            tailS = new Map([[`${tailS.size}`, 3]]);
            if (lessU) {
               break;
            }
         } while ((!sellO.endsWith(`${tailS.size}`)) && lessU);
         while (placeholder0 <= parseFloat(`${tailS.size}`)) {
            let buildq = String.fromCharCode(115, 117, 98, 116, 101, 120, 116, 95, 102, 95, 55, 54, 0);
            let ksadM = String.fromCharCode(109, 97, 110, 121, 95, 97, 95, 53, 49, 0);
            let nalyticsD = String.fromCharCode(117, 95, 53, 49, 95, 100, 101, 98, 117, 103, 0);
            placeholder0 *= parseFloat(`${buildq.length}`);
            buildq = `${ksadM.length}`;
            ksadM = `${nalyticsD.length % 1}`;
            nalyticsD = `${ksadM.length << (Math.min(nalyticsD.length, 2))}`;
            break;
         }
         if (tailS.get(`${placeholder0}`) != null) {
            placeholder0 *= parseFloat(`${parseInt(`${placeholder0}`)}`);
         }
         sellO += `${sellO.length - tailS.size}`;
         libhermesE = `${topicB.size % (Math.max(mbbide.length, 1))}`;
         break;
      }
      let unreadn = false;
      let modex = false;
      if (!modex) {
         modex = !unreadn;
      }
      let evento = String.fromCharCode(110, 95, 55, 50, 95, 112, 101, 114, 105, 111, 100, 115, 0);
      let time_1s = String.fromCharCode(101, 95, 51, 51, 95, 97, 102, 102, 105, 110, 105, 116, 121, 0);
      let transferd: Map<any, any> = new Map([[String.fromCharCode(115, 114, 112, 95, 118, 95, 55, 55, 0), true], [String.fromCharCode(121, 95, 51, 48, 95, 115, 99, 117, 98, 98, 101, 114, 0), false], [String.fromCharCode(112, 117, 116, 95, 110, 95, 52, 54, 0), false]]);
      let send0: Map<any, any> = new Map([[String.fromCharCode(97, 95, 52, 50, 95, 99, 111, 108, 117, 109, 110, 108, 105, 115, 116, 0), String.fromCharCode(112, 97, 99, 107, 115, 95, 107, 95, 57, 55, 0)], [String.fromCharCode(114, 101, 109, 105, 120, 95, 117, 95, 49, 48, 48, 0), String.fromCharCode(115, 95, 56, 54, 95, 105, 110, 105, 116, 118, 0)]]);
      for (let k = 0; k < 3; k++) {
         unreadn = modex;
      }
      unreadn = !unreadn;
      for (let u = 0; u < 1; u++) {
         let over2 = true;
         evento = "2";
         over2 = !over2;
      }
      cricket8 /= Math.max((parseFloat(`${(reducerq ? 5 : 2) ^ 2}`)), 3);

      const state = await NetInfo.fetch();

      user5 = `${2 - parseInt(`${cricket8}`)}`;
      twitterD += `${1 * parseInt(`${playv}`)}`;
      while ((1.25 * scrollviewe) >= 4.24 && (parseFloat(`${libhermesE.length}`) * scrollviewe) >= 1.25) {
         scrollviewe += parseFloat(`${parseInt(`${scrollviewe}`)}`);
         break;
      }
      let link4 = 1.0;
      let materialB = 0;
      let mbsplash0 = 4.0;
      let moreI = 5.0;
      let middleS = 3.0;
      let libsgcoreK = 2.0;
      let videojsa = true;
      mbsplash0 += parseFloat(`${parseInt(`${middleS}`) >> (Math.min(4, Math.abs(3)))}`);
      middleS += parseInt(`${libsgcoreK}`) % 2;
      libsgcoreK /= Math.max(2, parseFloat(`${parseInt(`${libsgcoreK}`) >> (Math.min(3, Math.abs(3)))}`));
      videojsa = videojsa && 9.97 == libsgcoreK;
      let megaphoneV = String.fromCharCode(105, 110, 99, 108, 117, 115, 105, 111, 110, 95, 52, 95, 49, 0);
      let successE: Map<any, any> = new Map([[String.fromCharCode(102, 102, 109, 101, 116, 97, 95, 106, 95, 55, 52, 0), false], [String.fromCharCode(109, 95, 50, 50, 95, 99, 111, 109, 98, 105, 110, 97, 116, 105, 111, 110, 115, 0), true], [String.fromCharCode(115, 117, 112, 101, 114, 110, 111, 100, 101, 95, 103, 95, 49, 57, 0), false]]);
      let brightnessI = String.fromCharCode(111, 116, 111, 98, 95, 53, 95, 50, 49, 0);
      materialB *= parseInt(`${mbsplash0}`);
      megaphoneV = `${brightnessI.length}`;
      successE.set(`${megaphoneV}`, successE.size);
      brightnessI += `${successE.size + brightnessI.length}`;
      while (3 == (materialB / (Math.max(1, 9))) && 4.95 == (link4 * materialB)) {
         materialB |= 3;
         break;
      }
      let mutedZ: Map<any, any> = new Map([[String.fromCharCode(119, 95, 49, 55, 95, 100, 105, 118, 105, 115, 111, 114, 0), 843], [String.fromCharCode(104, 97, 114, 100, 116, 104, 114, 101, 115, 104, 95, 53, 95, 52, 57, 0), 945], [String.fromCharCode(106, 115, 116, 121, 112, 101, 95, 97, 95, 51, 54, 0), 630]]);
      link4 /= Math.max(parseInt(`${mbsplash0}`), 5);
      mutedZ = new Map([[`${mutedZ.size}`, 1 & mutedZ.size]]);
      moreI *= parseFloat(`${parseInt(`${mbsplash0}`) % 2}`);
      mbbide += `${mbbide.length}`;
      mbbide += `${user5.length * 3}`;
      let backgroundR: Map<any, any> = new Map([[String.fromCharCode(110, 111, 105, 115, 101, 95, 57, 95, 55, 50, 0), false], [String.fromCharCode(109, 101, 114, 103, 105, 110, 103, 95, 48, 95, 49, 0), true]]);
      let servicei = String.fromCharCode(117, 110, 108, 111, 97, 100, 95, 109, 95, 53, 56, 0);
      let modelz = String.fromCharCode(119, 100, 108, 102, 99, 110, 95, 98, 95, 57, 48, 0);
      let anythinkh = String.fromCharCode(99, 95, 56, 50, 95, 118, 97, 100, 100, 113, 0);
      let philippinesr = 2.0;
      servicei = "3";
      for (let o = 0; o < 2; o++) {
         modelz += `${2 / (Math.max(6, anythinkh.length))}`;
      }
      if (3 <= (4 * backgroundR.size) && 4 <= (backgroundR.size * modelz.length)) {
         let type_ot = String.fromCharCode(107, 95, 51, 54, 95, 115, 122, 97, 98, 111, 0);
         let yellowg = 3.0;
         let searchbarD = true;
         let philippinest = false;
         modelz += "3";
         type_ot = `${parseInt(`${yellowg}`) & 2}`;
         yellowg += parseFloat(`${2}`);
         searchbarD = type_ot.length < 26;
         philippinest = searchbarD;
      }
      while (2 < anythinkh.length) {
         modelz = `${modelz.length}`;
         break;
      }
      mbbide += `${topicB.size | backgroundR.size}`;
      libhermesE += `${(twitterD == String.fromCharCode(49, 0) ? (reducerq ? 1 : 5) : twitterD.length)}`;
      while (reducerq) {
         reducerq = !register_2L;
         break;
      }
      const offline = !(state.isConnected && state.isInternetReachable);

      valueso.set(twitterD, 1);
      while (playv < cricket8) {
         cricket8 *= parseFloat(`${1}`);
         break;
      }
      topicB = new Map([[`${playv}`, (parseInt(`${playv}`) * (register_2L ? 4 : 3))]]);
      while (!reducerq) {
         reducerq = (parseInt(`${scrollviewe}`) * twitterD.length) <= 5;
         break;
      }
      user5 += "3";
      twitterD = `${parseInt(`${scrollviewe}`) ^ 2}`;
      let nterstitialx = 3.0;
      let notificationV = String.fromCharCode(100, 95, 51, 55, 95, 97, 103, 114, 101, 101, 109, 101, 110, 116, 0);
      let modeI = 0.0;
      notificationV += `${notificationV.length}`;
      modeI += notificationV.length & parseInt(`${modeI}`);
      let popup6 = false;
      let bridgeI = String.fromCharCode(112, 95, 51, 57, 95, 115, 117, 114, 102, 0);
      let libpangleflipped2: Map<any, any> = new Map([[String.fromCharCode(114, 95, 56, 48, 95, 114, 101, 117, 112, 108, 111, 97, 100, 101, 100, 0), String.fromCharCode(115, 109, 105, 108, 95, 119, 95, 53, 51, 0)], [String.fromCharCode(97, 102, 102, 105, 110, 105, 116, 121, 95, 56, 95, 53, 57, 0), String.fromCharCode(115, 95, 53, 57, 95, 119, 101, 108, 115, 100, 101, 99, 100, 101, 109, 111, 0)]]);
      nterstitialx += parseFloat(`${3 - parseInt(`${modeI}`)}`);
      popup6 = !popup6 && bridgeI.length > 43;
      bridgeI = `${((popup6 ? 4 : 3) - 3)}`;
      libpangleflipped2 = new Map([[`${libpangleflipped2.size}`, bridgeI.length]]);
      while (4.5 == (nterstitialx / 3.4)) {
         nterstitialx -= parseFloat(`${1 << (Math.min(1, Math.abs(parseInt(`${nterstitialx}`))))}`);
         break;
      }
      let privilegeK = notificationV.length >= 5931249;
      do {
         notificationV = `${(notificationV == String.fromCharCode(53, 0) ? notificationV.length : parseInt(`${nterstitialx}`))}`;
         if (privilegeK) {
            break;
         }
      } while (privilegeK && (1 < (parseInt(`${modeI}`) * notificationV.length) || 2 < (1 * notificationV.length)));
      notificationV = "2";
      notificationV += `${notificationV.length / (Math.max(6, parseInt(`${modeI}`)))}`;
      let progress5 = 6519062.0 <= modeI;
      do {
         modeI *= 2 - parseInt(`${nterstitialx}`);
         if (progress5) {
            break;
         }
      } while (progress5 && (5.67 < (3.24 * nterstitialx) && (modeI * nterstitialx) < 3.24));
      let qaagP = 4;
      user5 += `${((register_2L ? 5 : 5) * parseInt(`${scrollviewe}`))}`;
      for (let b = 0; b < 1; b++) {
         libhermesE += `${(twitterD == String.fromCharCode(88, 0) ? twitterD.length : parseInt(`${playv}`))}`;
      }
      setIsOffline(offline);

      playv *= (libturbomodulejsijniG == String.fromCharCode(48, 0) ? parseInt(`${playv}`) : libturbomodulejsijniG.length);
      while (user5.length <= 3) {
         user5 += `${3 + sportx}`;
         break;
      }
      while (Array.from(topicB.keys()).includes(`${scrollviewe}`)) {
         topicB.set(libturbomodulejsijniG, sportx * libturbomodulejsijniG.length);
         break;
      }
      let flyer2 = 2;
      let fillc = 3;
      let showi = String.fromCharCode(113, 115, 118, 118, 112, 112, 95, 55, 95, 55, 49, 0);
      fillc >>= Math.min(Math.abs(fillc), 1);
      for (let e = 0; e < 3; e++) {
         fillc /= Math.max(4, (showi == String.fromCharCode(108, 0) ? fillc : showi.length));
      }
      for (let i = 0; i < 3; i++) {
         showi += `${(showi == String.fromCharCode(111, 0) ? fillc : showi.length)}`;
      }
      showi = `${flyer2 % (Math.max(fillc, 8))}`;
      if (5 > (fillc * showi.length) && 2 > (showi.length * 5)) {
         let showS = 1.0;
         let reducerO = String.fromCharCode(114, 101, 102, 99, 111, 117, 110, 116, 101, 114, 95, 101, 95, 51, 52, 0);
         let controls4: Map<any, any> = new Map([[String.fromCharCode(114, 116, 112, 95, 116, 95, 52, 52, 0), 693], [String.fromCharCode(99, 111, 110, 102, 105, 114, 109, 101, 100, 95, 110, 95, 50, 48, 0), 656]]);
         let overlayR: Array<any> = [870, 986];
         let flyerT = true;
         showi += `${overlayR.length}`;
         showS -= parseFloat(`${reducerO.length << (Math.min(Math.abs(2), 5))}`);
         reducerO = `${parseInt(`${showS}`) >> (Math.min(Math.abs(1), 1))}`;
         controls4 = new Map([[`${controls4.size}`, ((flyerT ? 3 : 2) / (Math.max(controls4.size, 3)))]]);
         overlayR = [2 + parseInt(`${showS}`)];
         flyerT = null != controls4.get(`${flyerT}`);
      }
      if (!showi.endsWith(`${flyer2}`)) {
         flyer2 ^= 1 * showi.length;
      }
      let package_bcg = flyer2 <= 4922219;
      do {
         let libflipperc = String.fromCharCode(118, 109, 97, 112, 115, 105, 110, 95, 122, 95, 49, 0);
         let commonp = 0.0;
         let frame_qD: Array<any> = [33, 688];
         flyer2 &= parseInt(`${commonp}`) >> (Math.min(3, Math.abs(flyer2)));
         libflipperc += `${libflipperc.length % (Math.max(2, 3))}`;
         commonp *= frame_qD.length % (Math.max(2, libflipperc.length));
         frame_qD = [frame_qD.length % (Math.max(3, 4))];
         if (package_bcg) {
            break;
         }
      } while (((flyer2 / (Math.max(6, fillc))) >= 4 && 2 >= (4 / (Math.max(2, flyer2)))) && package_bcg);
      for (let p = 0; p < 1; p++) {
         flyer2 ^= 3;
      }
      for (let z = 0; z < 2; z++) {
         fillc -= flyer2 * fillc;
      }
      mbbide += `${2 & libturbomodulejsijniG.length}`;
      while (Array.from(topicB.keys()).includes(`${playv}`)) {
         playv += 2;
         break;
      }
      while (emojig != String.fromCharCode(66, 0)) {
         mbbide += `${libhermesE.length & libturbomodulejsijniG.length}`;
         break;
      }
      libhermesE += `${3 & parseInt(`${scrollviewe}`)}`;
      while (!reducerq) {
         let hooksS = String.fromCharCode(105, 95, 53, 54, 95, 100, 101, 102, 105, 110, 101, 100, 0);
         let bridgeJ: Array<any> = [String.fromCharCode(107, 95, 57, 49, 95, 116, 101, 114, 109, 105, 110, 97, 116, 101, 0), String.fromCharCode(113, 95, 57, 50, 95, 102, 116, 118, 109, 108, 97, 115, 116, 110, 111, 100, 101, 0)];
         let rewindp = false;
         bridgeJ = [bridgeJ.length / 1];
         let bannerd = 9506792 <= hooksS.length;
         do {
            hooksS = `${bridgeJ.length - hooksS.length}`;
            if (bannerd) {
               break;
            }
         } while ((3 >= (1 + hooksS.length)) && bannerd);
         for (let i = 0; i < 2; i++) {
            hooksS += `${hooksS.length}`;
         }
         let submitS = String.fromCharCode(100, 120, 102, 57, 108, 0) == hooksS;
         do {
            hooksS = `${(hooksS == String.fromCharCode(67, 0) ? hooksS.length : bridgeJ.length)}`;
            if (submitS) {
               break;
            }
         } while ((hooksS.includes(`${bridgeJ.length}`)) && submitS);
         if (!hooksS.includes(`${bridgeJ.length}`)) {
            bridgeJ = [1];
         }
         let complete9 = String.fromCharCode(97, 99, 99, 101, 108, 101, 114, 97, 116, 101, 95, 102, 95, 52, 49, 0);
         hooksS += `${hooksS.length - 3}`;
         complete9 = `${complete9.length}`;
         cricket8 /= Math.max((parseFloat(`${libhermesE == String.fromCharCode(54, 0) ? libhermesE.length : hooksS.length}`)), 3);
         break;
      }
      if (!offline) {

         let downS = false;
         let corej = String.fromCharCode(102, 95, 55, 57, 95, 114, 101, 110, 100, 101, 114, 101, 114, 115, 0);
         let optionsO: Array<any> = [436, 232];
         let thumbnailb = downS ? !downS : downS;
         do {
            let textinput6: Array<any> = [180, 150, 938];
            let valuesb = String.fromCharCode(98, 95, 49, 52, 95, 117, 110, 114, 101, 102, 101, 114, 101, 110, 99, 101, 0);
            let untickS = String.fromCharCode(98, 95, 55, 57, 95, 115, 116, 114, 101, 116, 99, 104, 0);
            downS = 17 >= valuesb.length || 17 >= optionsO.length;
            textinput6 = [untickS.length % 3];
            valuesb += `${textinput6.length ^ 1}`;
            untickS += `${textinput6.length >> (Math.min(Math.abs(3), 4))}`;
            if (thumbnailb) {
               break;
            }
         } while (thumbnailb && (corej.length == 4));
         while ((corej.length / 5) >= 2 || (optionsO.length / 5) >= 1) {
            corej = `${((downS ? 5 : 4))}`;
            break;
         }
         corej += "2";
         for (let u = 0; u < 1; u++) {
            let policyE: Map<any, any> = new Map([[String.fromCharCode(118, 95, 57, 48, 95, 111, 118, 101, 114, 114, 105, 100, 101, 0), 598], [String.fromCharCode(100, 99, 98, 108, 111, 99, 107, 95, 109, 95, 49, 49, 0), 71], [String.fromCharCode(115, 95, 56, 49, 95, 108, 105, 102, 101, 116, 105, 109, 101, 0), 576]]);
            let taiwant = true;
            corej = `${optionsO.length}`;
            policyE.set(`${taiwant}`, (2 & (taiwant ? 5 : 5)));
         }
         let calendarN: Map<any, any> = new Map([[String.fromCharCode(113, 95, 53, 55, 95, 115, 111, 119, 97, 107, 101, 117, 112, 0), 787], [String.fromCharCode(99, 111, 100, 101, 99, 100, 97, 116, 97, 95, 113, 95, 51, 54, 0), 397], [String.fromCharCode(115, 95, 51, 53, 95, 106, 99, 111, 110, 102, 105, 103, 0), 408]]);
         let teami = String.fromCharCode(102, 111, 114, 109, 115, 104, 101, 101, 116, 95, 115, 95, 57, 54, 0);
         optionsO.push(corej.length);
         teami += `${teami.length}`;
         while (corej.length >= 4) {
            corej += `${calendarN.size}`;
            break;
         }
         corej += `${((downS ? 3 : 4) ^ calendarN.size)}`;
         if (corej.includes(`${optionsO.length}`)) {
            corej += `${((downS ? 4 : 5))}`;
         }
         libhermesE = `${1 - libhermesE.length}`;
         libhermesE = `${(libhermesE == String.fromCharCode(116, 0) ? libhermesE.length : parseInt(`${scrollviewe}`))}`;
         let eactn: Map<any, any> = new Map([[String.fromCharCode(114, 101, 106, 101, 99, 116, 101, 100, 95, 97, 95, 57, 54, 0), 527], [String.fromCharCode(100, 101, 108, 115, 117, 112, 101, 114, 95, 102, 95, 56, 50, 0), 68]]);
         let downloadedZ = String.fromCharCode(100, 95, 56, 0);
         let graphr: Map<any, any> = new Map([[String.fromCharCode(114, 115, 116, 114, 105, 112, 95, 112, 95, 54, 51, 0), 669], [String.fromCharCode(110, 95, 49, 54, 95, 99, 111, 102, 102, 105, 110, 0), 150]]);
         graphr = new Map([[`${eactn.size}`, 3 - eactn.size]]);
         let profilel = String.fromCharCode(118, 95, 51, 57, 95, 103, 108, 111, 115, 115, 0);
         let abidetectl = String.fromCharCode(105, 110, 116, 101, 108, 95, 107, 95, 52, 51, 0);
         let dragN: Map<any, any> = new Map([[String.fromCharCode(97, 95, 50, 52, 95, 111, 114, 105, 0), 569], [String.fromCharCode(114, 103, 116, 99, 117, 95, 113, 95, 55, 53, 0), 985]]);
         eactn.set(profilel, abidetectl.length / (Math.max(1, 9)));
         let cancel3: Map<any, any> = new Map([[String.fromCharCode(101, 114, 112, 105, 99, 95, 121, 95, 56, 57, 0), String.fromCharCode(106, 112, 101, 103, 116, 114, 97, 110, 95, 51, 95, 51, 57, 0)], [String.fromCharCode(99, 95, 53, 53, 95, 111, 110, 108, 121, 0), String.fromCharCode(116, 108, 111, 103, 95, 120, 95, 53, 57, 0)], [String.fromCharCode(116, 101, 109, 112, 95, 110, 95, 52, 48, 0), String.fromCharCode(104, 95, 52, 54, 95, 115, 112, 107, 114, 0)]]);
         let expandO: Array<any> = [226, 213];
         profilel += `${dragN.size}`;
         cancel3.set(`${expandO.length}`, expandO.length);
         if (5 >= (3 ^ dragN.size) && (3 ^ dragN.size) >= 5) {
            downloadedZ += `${1 << (Math.min(5, Math.abs(eactn.size)))}`;
         }
         for (let j = 0; j < 3; j++) {
            graphr.set(`${eactn.size}`, 2 << (Math.min(3, Math.abs(graphr.size))));
         }
         for (let c = 0; c < 2; c++) {
            dragN.set(profilel, downloadedZ.length + profilel.length);
         }
         let moduleH = false;
         playv += topicB.size;
         let r_managerg = register_2L ? !register_2L : register_2L;
         do {
            let trashs = 4;
            let with_fP = true;
            let sellm: Map<any, any> = new Map([[String.fromCharCode(107, 95, 54, 48, 95, 112, 97, 115, 115, 116, 104, 114, 111, 117, 103, 104, 0), 631], [String.fromCharCode(118, 95, 53, 50, 95, 107, 108, 97, 115, 115, 0), 608], [String.fromCharCode(102, 114, 111, 109, 102, 101, 95, 104, 95, 53, 0), 754]]);
            if (!with_fP && (trashs >> (Math.min(Math.abs(2), 4))) >= 2) {
               with_fP = 26 >= trashs || 26 >= sellm.size;
            }
            trashs ^= (3 | (with_fP ? 5 : 2));
            sellm = new Map([[`${sellm.size}`, 3 * sellm.size]]);
            let backwardH: Map<any, any> = new Map([[String.fromCharCode(116, 95, 50, 52, 95, 109, 97, 114, 107, 105, 110, 103, 115, 0), String.fromCharCode(112, 108, 97, 99, 101, 115, 95, 104, 95, 53, 56, 0)], [String.fromCharCode(98, 105, 116, 101, 95, 112, 95, 57, 49, 0), String.fromCharCode(100, 101, 118, 105, 99, 101, 115, 95, 114, 95, 57, 51, 0)]]);
            let commentx = String.fromCharCode(112, 95, 56, 55, 95, 110, 111, 116, 104, 101, 108, 100, 0);
            with_fP = 70 <= backwardH.size;
            backwardH = new Map([[commentx, (String.fromCharCode(72, 0) == commentx ? commentx.length : commentx.length)]]);
            with_fP = with_fP && 79 > trashs;
            let runtimeschedulerA = 7839642 <= trashs;
            do {
               trashs /= Math.max(sellm.size + trashs, 1);
               if (runtimeschedulerA) {
                  break;
               }
            } while (runtimeschedulerA && ((1 >> (Math.min(4, Math.abs(trashs)))) > 4));
            trashs -= 3 + sellm.size;
            while (with_fP) {
               let customB = 4.0;
               let dataO = String.fromCharCode(110, 117, 108, 108, 97, 98, 108, 101, 114, 101, 115, 111, 108, 118, 101, 100, 95, 100, 95, 53, 55, 0);
               let yingW: Map<any, any> = new Map([[String.fromCharCode(112, 95, 54, 48, 95, 105, 100, 101, 110, 116, 0), 378], [String.fromCharCode(115, 117, 98, 115, 116, 97, 116, 101, 95, 111, 95, 51, 56, 0), 205], [String.fromCharCode(99, 117, 114, 108, 121, 95, 114, 95, 53, 0), 622]]);
               let turnv = true;
               with_fP = null != sellm.get(`${with_fP}`);
               customB *= parseFloat(`${1}`);
               dataO += `${((turnv ? 5 : 4) / 3)}`;
               yingW = new Map([[`${yingW.size}`, yingW.size / (Math.max(1, 10))]]);
               turnv = dataO.length >= 81;
               break;
            }
            for (let i = 0; i < 2; i++) {
               sellm.set(`${trashs}`, 2);
            }
            register_2L = (scrollviewe / (Math.max(2, parseFloat(`${twitterD.length}`)))) > 80.69;
            if (r_managerg) {
               break;
            }
         } while ((register_2L) && r_managerg);
         if ((3 - sportx) <= 3) {
            sportx /= Math.max(1, (2 & (reducerq ? 1 : 4)));
         }
         while (emojig.endsWith(`${sportx}`)) {
            sportx >>= Math.min(1, Math.abs(1 * parseInt(`${playv}`)));
            break;
         }
         topicB.set(`${cricket8}`, emojig.length);
         for (let h = 0; h < 2; h++) {
            sportx *= libturbomodulejsijniG.length;
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
      let customc = false;
      let crownV: Map<any, any> = new Map([[String.fromCharCode(121, 95, 54, 56, 95, 97, 109, 116, 0), false], [String.fromCharCode(121, 95, 56, 53, 0), false], [String.fromCharCode(115, 99, 97, 108, 97, 98, 108, 101, 95, 52, 95, 51, 57, 0), true]]);
      let librrc_ = String.fromCharCode(112, 95, 53, 56, 95, 112, 111, 112, 117, 108, 97, 116, 101, 0);
      let loginN = String.fromCharCode(111, 95, 56, 55, 95, 104, 97, 114, 109, 111, 110, 105, 99, 0);
      let default_aM: Array<any> = [545, 953, 445];
      let ewardedZ = String.fromCharCode(122, 95, 56, 53, 95, 116, 105, 109, 101, 115, 116, 97, 109, 112, 115, 0);
      let libavcodecG = String.fromCharCode(118, 115, 102, 114, 97, 109, 101, 95, 48, 95, 57, 0);
      let m_unlockn = true;
      let w_countL: Map<any, any> = new Map([[String.fromCharCode(117, 95, 54, 55, 95, 101, 113, 117, 97, 108, 115, 0), false], [String.fromCharCode(112, 104, 111, 110, 101, 98, 111, 111, 107, 95, 100, 95, 50, 49, 0), false]]);
      let editd: Array<any> = [String.fromCharCode(116, 97, 110, 103, 101, 110, 116, 95, 55, 95, 56, 50, 0), String.fromCharCode(114, 101, 115, 117, 109, 101, 95, 99, 95, 52, 57, 0)];
      let subsW = 2.0;
      if (default_aM.length < 2) {
         default_aM.push(3 >> (Math.min(2, Math.abs(w_countL.size))));
      }

      const data = await yys_SubsPlus.getNativeList();

      if (4 >= (default_aM.length * 1)) {
         m_unlockn = (librrc_.length ^ default_aM.length) <= 43;
      }

      if (UMENG_CHANNEL === "GOOGLE_PLAY" && IS_ANDROID) {

         let readc = libavcodecG.length <= 6418655;
         do {
            libavcodecG += `${libavcodecG.length * 3}`;
            if (readc) {
               break;
            }
         } while (readc && (libavcodecG.startsWith(`${default_aM.length}`)));
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
                        payment_type_icon: "dangerIncidentDplus.png",
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
                        payment_type_icon: "dangerIncidentDplus.png",
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

            if (librrc_.length < 2) {
               crownV.set(`${libavcodecG}`, crownV.size);
            }



            let umengB = String.fromCharCode(113, 95, 54, 51, 95, 105, 110, 100, 105, 118, 105, 100, 117, 97, 108, 0);
            let chinasamel: Array<any> = [894, 63, 336];
            let gradlewe = String.fromCharCode(50, 52, 49, 106, 106, 105, 95, 112, 54, 0) == umengB;
            do {
               let mountinga: Array<any> = [441, 515, 633];
               umengB += `${umengB.length}`;
               mountinga.push(mountinga.length ^ mountinga.length);
               if (gradlewe) {
                  break;
               }
            } while (((chinasamel.length << (Math.min(Math.abs(3), 2))) > 4 || 4 > (3 << (Math.min(2, chinasamel.length)))) && gradlewe);
            let imagemanagerP = 4.0;
            let subsF: Array<any> = [10, 34];
            let nativemodulej: Map<any, any> = new Map([[String.fromCharCode(114, 101, 112, 108, 105, 101, 115, 95, 113, 95, 56, 48, 0), String.fromCharCode(106, 95, 51, 57, 95, 99, 111, 109, 97, 110, 100, 0)], [String.fromCharCode(99, 95, 57, 51, 95, 109, 101, 109, 117, 116, 105, 108, 0), String.fromCharCode(114, 95, 52, 51, 95, 110, 97, 118, 0)], [String.fromCharCode(114, 101, 103, 105, 115, 116, 114, 97, 116, 105, 111, 110, 95, 104, 95, 49, 56, 0), String.fromCharCode(112, 114, 111, 100, 117, 99, 101, 114, 95, 112, 95, 55, 52, 0)]]);
            chinasamel.push(parseInt(`${imagemanagerP}`) + nativemodulej.size);
            imagemanagerP -= parseFloat(`${3 & subsF.length}`);
            subsF.push(subsF.length - 1);
            umengB = "3";
            while ((umengB.length ^ 3) <= 2) {
               chinasamel.push(chinasamel.length);
               break;
            }
            let malaysia5 = String.fromCharCode(99, 95, 52, 51, 95, 109, 117, 116, 101, 120, 101, 115, 0);
            let listV = 0;
            chinasamel = [(String.fromCharCode(67, 0) == umengB ? umengB.length : listV)];
            malaysia5 += `${malaysia5.length + 1}`;
            listV <<= Math.min(Math.abs(malaysia5.length / (Math.max(2, 6))), 4);
            let signinupj = String.fromCharCode(99, 111, 110, 116, 114, 97, 115, 116, 95, 102, 95, 50, 48, 0);
            let logout5 = true;
            chinasamel.push(2 ^ umengB.length);
            signinupj += "3";
            logout5 = 3 < signinupj.length;
            customc = w_countL.size < chinasamel.length;
            const index12Months = subscription.findIndex(
               (item) => item.title === "12个月"
            );

            while (1 >= (loginN.length >> (Math.min(Math.abs(1), 5)))) {
               let mintegralY = String.fromCharCode(107, 95, 50, 54, 95, 99, 115, 114, 105, 100, 0);
               let libavdeviceO = String.fromCharCode(119, 95, 55, 55, 95, 99, 106, 112, 101, 103, 0);
               let binddatash = 4;
               let placeholderX: Map<any, any> = new Map([[String.fromCharCode(122, 95, 54, 50, 95, 115, 97, 105, 111, 0), false], [String.fromCharCode(116, 111, 117, 99, 104, 101, 115, 95, 107, 95, 50, 55, 0), true], [String.fromCharCode(101, 95, 50, 57, 95, 118, 101, 114, 105, 102, 105, 101, 114, 0), false]]);
               let libreactg = String.fromCharCode(121, 97, 100, 105, 102, 95, 99, 95, 56, 57, 0);
               binddatash >>= Math.min(Math.abs(binddatash << (Math.min(libavdeviceO.length, 2))), 3);
               libavdeviceO = `${(libavdeviceO == String.fromCharCode(82, 0) ? binddatash : libavdeviceO.length)}`;
               let zoomk = 1.0;
               let default_id = 4.0;
               let eighteenY = 3.0;
               libreactg = `${placeholderX.size * libreactg.length}`;
               zoomk += parseInt(`${eighteenY}`);
               default_id /= Math.max(3, 4);
               for (let x = 0; x < 2; x++) {
                  let gemfileB = 0.0;
                  let bannerP: Map<any, any> = new Map([[String.fromCharCode(107, 95, 57, 53, 0), true], [String.fromCharCode(111, 112, 116, 101, 100, 95, 51, 95, 54, 51, 0), true], [String.fromCharCode(112, 114, 111, 106, 101, 99, 116, 95, 54, 95, 53, 54, 0), true]]);
                  let mbbannerh = 1.0;
                  let listm = String.fromCharCode(112, 114, 101, 118, 101, 110, 116, 115, 95, 51, 95, 52, 0);
                  let nativem = String.fromCharCode(98, 105, 116, 100, 101, 112, 116, 104, 95, 50, 95, 53, 57, 0);
                  binddatash &= libavdeviceO.length & bannerP.size;
                  gemfileB -= parseFloat(`${parseInt(`${gemfileB}`) * 2}`);
                  bannerP.set(listm, listm.length);
                  mbbannerh -= parseFloat(`${3}`);
                  nativem += `${3 >> (Math.min(1, nativem.length))}`;
               }
               while (1 >= (binddatash << (Math.min(mintegralY.length, 4))) || 5 >= (mintegralY.length << (Math.min(Math.abs(1), 4)))) {
                  binddatash &= 2 ^ binddatash;
                  break;
               }
               if (libavdeviceO.startsWith(`${mintegralY.length}`)) {
                  let fadfdeebbbfdabbbabdadfaaddaaK: Map<any, any> = new Map([[String.fromCharCode(115, 112, 101, 99, 105, 102, 105, 101, 114, 95, 115, 95, 54, 57, 0), String.fromCharCode(106, 95, 54, 54, 95, 97, 110, 105, 109, 97, 116, 101, 0)], [String.fromCharCode(118, 95, 56, 49, 95, 99, 111, 111, 114, 100, 115, 0), String.fromCharCode(101, 98, 117, 114, 95, 121, 95, 52, 55, 0)]]);
                  let logout6 = String.fromCharCode(107, 95, 55, 53, 95, 99, 108, 101, 97, 114, 97, 108, 108, 0);
                  let contextJ = String.fromCharCode(104, 95, 50, 49, 95, 115, 97, 99, 107, 0);
                  let switch_3q = String.fromCharCode(111, 98, 106, 110, 105, 100, 95, 117, 95, 49, 48, 48, 0);
                  libavdeviceO = `${contextJ.length}`;
                  fadfdeebbbfdabbbabdadfaaddaaK.set(switch_3q, 2);
                  logout6 = `${(String.fromCharCode(103, 0) == logout6 ? logout6.length : fadfdeebbbfdabbbabdadfaaddaaK.size)}`;
                  contextJ += `${switch_3q.length}`;
               }
               for (let v = 0; v < 2; v++) {
                  placeholderX.set(libreactg, (libreactg == String.fromCharCode(65, 0) ? libreactg.length : libavdeviceO.length));
               }
               let cancelA = true;
               let telegramS = false;
               if (4 < (4 | placeholderX.size) || 2 < (libreactg.length | 4)) {
                  placeholderX = new Map([[`${cancelA}`, 2]]);
               }
               for (let u = 0; u < 3; u++) {
                  let stringsZ = String.fromCharCode(115, 117, 98, 99, 111, 110, 116, 101, 110, 116, 115, 95, 98, 95, 52, 54, 0);
                  mintegralY += `${mintegralY.length | 1}`;
                  stringsZ = `${stringsZ.length}`;
               }
               let trophyW: Array<any> = [880, 970, 992];
               let lang8 = false;
               libavdeviceO += `${((telegramS ? 2 : 5) / 1)}`;
               trophyW = [(2 & (lang8 ? 3 : 5))];
               lang8 = trophyW.length > 79;
               telegramS = (placeholderX.size << (Math.min(libreactg.length, 4))) < 32;
               let countdowng = 2.0;
               let flyer2: Array<any> = [461, 505];
               libavdeviceO = `${mintegralY.length / (Math.max(5, flyer2.length))}`;
               countdowng -= parseInt(`${countdowng}`);
               flyer2 = [parseInt(`${countdowng}`) - parseInt(`${countdowng}`)];
               while ((placeholderX.size ^ 3) == 3 || 4 == (binddatash ^ 3)) {
                  binddatash >>= Math.min(Math.abs(2 / (Math.max(3, libavdeviceO.length))), 2);
                  break;
               }
               let robotoZ = String.fromCharCode(103, 95, 51, 57, 95, 115, 104, 97, 114, 112, 101, 110, 0);
               let feedbackq = 4;
               let topicP = String.fromCharCode(115, 95, 50, 54, 95, 109, 97, 116, 99, 104, 101, 114, 0);
               binddatash -= 2 - mintegralY.length;
               robotoZ = `${robotoZ.length}`;
               feedbackq |= 1 + feedbackq;
               topicP = `${(String.fromCharCode(98, 0) == topicP ? feedbackq : topicP.length)}`;
               w_countL = new Map([[`${editd.length}`, binddatash / (Math.max(2, editd.length))]]);
               break;
            }



            let leakcheckeri = 7775529 <= crownV.size;
            do {
               crownV.set(`${customc}`, (w_countL.size >> (Math.min(5, Math.abs((customc ? 1 : 2))))));
               if (leakcheckeri) {
                  break;
               }
            } while ((!customc) && leakcheckeri);


            loginN = `${default_aM.length | 1}`;


            while (!librrc_.startsWith(`${customc}`)) {
               let renderq = String.fromCharCode(107, 95, 57, 54, 95, 104, 97, 115, 104, 0);
               let tickedG: Array<any> = [String.fromCharCode(116, 114, 105, 112, 108, 101, 116, 95, 100, 95, 49, 53, 0), String.fromCharCode(100, 121, 110, 97, 109, 105, 99, 95, 118, 95, 56, 57, 0), String.fromCharCode(100, 101, 103, 114, 101, 101, 95, 115, 95, 50, 51, 0)];
               for (let y = 0; y < 2; y++) {
                  renderq = `${2 ^ tickedG.length}`;
               }
               while (renderq.length < 3) {
                  let schedulei = 3;
                  let playlists: Map<any, any> = new Map([[String.fromCharCode(114, 101, 102, 105, 110, 101, 114, 95, 110, 95, 53, 0), 935], [String.fromCharCode(99, 97, 108, 108, 105, 115, 116, 111, 95, 57, 95, 56, 56, 0), 549], [String.fromCharCode(121, 95, 54, 48, 95, 109, 111, 100, 109, 0), 97]]);
                  let questR = String.fromCharCode(102, 95, 55, 50, 95, 99, 111, 110, 115, 116, 97, 110, 116, 0);
                  let bottomm = String.fromCharCode(112, 95, 52, 54, 95, 108, 105, 98, 114, 115, 118, 103, 0);
                  let bootsplashJ = 0.0;
                  tickedG.push(renderq.length ^ 2);
                  schedulei /= Math.max(schedulei, 2);
                  playlists = new Map([[`${schedulei}`, schedulei - bottomm.length]]);
                  questR += `${parseInt(`${bootsplashJ}`)}`;
                  bottomm += `${1 ^ parseInt(`${bootsplashJ}`)}`;
                  break;
               }
               for (let u = 0; u < 1; u++) {
                  renderq += `${renderq.length}`;
               }
               renderq = `${1 - renderq.length}`;
               renderq = `${tickedG.length + 3}`;
               if (2 < (2 / (Math.max(7, renderq.length))) || (tickedG.length / (Math.max(renderq.length, 6))) < 2) {
                  tickedG.push(tickedG.length);
               }
               customc = m_unlockn;
               break;
            }


            let expiredn = m_unlockn ? !m_unlockn : m_unlockn;
            do {
               m_unlockn = String.fromCharCode(121, 0) == librrc_;
               if (expiredn) {
                  break;
               }
            } while ((m_unlockn) && expiredn);


            libavcodecG = `${default_aM.length % (Math.max(9, crownV.size))}`;



            for (let u = 0; u < 2; u++) {
               w_countL.set(librrc_, (String.fromCharCode(55, 0) == librrc_ ? editd.length : librrc_.length));
            }
            if (index12Months !== -1) {

               while (libavcodecG.includes(ewardedZ)) {
                  libavcodecG = "2";
                  break;
               }
               const item12Months = subscription.splice(index12Months, 1)[0];

               w_countL = new Map([[librrc_, ((m_unlockn ? 2 : 4) * 3)]]);
               subscription.splice(1, 0, item12Months);
            }



            let fieldd = 5494153 >= librrc_.length;
            do {
               librrc_ += `${3 * loginN.length}`;
               if (fieldd) {
                  break;
               }
            } while ((librrc_.length >= 2) && fieldd);


            for (let o = 0; o < 1; o++) {
               ewardedZ += `${libavcodecG.length >> (Math.min(Math.abs(1), 1))}`;
            }
            setOneTimeProducts(oneTime);

            let annerD = String.fromCharCode(122, 111, 111, 109, 97, 98, 108, 101, 95, 104, 95, 52, 48, 0);
            let checkboxv = false;
            checkboxv = !checkboxv;
            checkboxv = !annerD.endsWith(`${checkboxv}`);
            let privilegeC = 7669143 >= annerD.length;
            do {
               annerD = `${(1 | (checkboxv ? 2 : 5))}`;
               if (privilegeC) {
                  break;
               }
            } while (privilegeC && (annerD.includes(`${checkboxv}`)));
            let progressV = String.fromCharCode(115, 101, 116, 99, 116, 120, 95, 98, 95, 51, 57, 0);
            let show0: Map<any, any> = new Map([[String.fromCharCode(115, 95, 52, 52, 95, 97, 112, 112, 108, 105, 99, 97, 116, 105, 111, 110, 0), 686], [String.fromCharCode(113, 95, 53, 55, 95, 116, 105, 108, 101, 0), 772], [String.fromCharCode(99, 111, 109, 112, 111, 115, 101, 105, 95, 55, 95, 51, 49, 0), 597]]);
            let ynews1 = String.fromCharCode(99, 95, 54, 95, 100, 114, 97, 105, 110, 0);
            annerD = `${ynews1.length}`;
            progressV = `${progressV.length & 1}`;
            show0 = new Map([[`${show0.size}`, 3]]);
            ynews1 += `${progressV.length << (Math.min(Math.abs(1), 5))}`;
            if (annerD.startsWith(`${checkboxv}`)) {
               let searchC = false;
               annerD += `${(String.fromCharCode(114, 0) == annerD ? (searchC ? 4 : 4) : annerD.length)}`;
            }
            let eighteen_ = checkboxv ? !checkboxv : checkboxv;
            do {
               checkboxv = annerD.length > 86 || !checkboxv;
               if (eighteen_) {
                  break;
               }
            } while ((5 == annerD.length) && eighteen_);
            m_unlockn = annerD == String.fromCharCode(69, 0);
            setMembershipProducts(subscription);

            let foregroundb = false;
            let libhermesj: Array<any> = [9, 256, 199];
            let cancelAq = String.fromCharCode(105, 95, 54, 95, 115, 116, 97, 110, 100, 97, 114, 100, 115, 0);
            cancelAq = `${((foregroundb ? 2 : 1) % (Math.max(libhermesj.length, 9)))}`;
            if (2 > (libhermesj.length & 5)) {
               let armvab = 3;
               let suggestionu = String.fromCharCode(99, 111, 108, 108, 95, 115, 95, 57, 56, 0);
               let stepr = String.fromCharCode(112, 114, 111, 102, 105, 108, 101, 115, 95, 114, 95, 50, 51, 0);
               let constantsg = 2.0;
               let mathi = 0.0;
               cancelAq = "1";
               armvab ^= parseInt(`${mathi}`) % (Math.max(1, parseInt(`${constantsg}`)));
               suggestionu += `${(suggestionu == String.fromCharCode(66, 0) ? suggestionu.length : armvab)}`;
               stepr += `${suggestionu.length * 3}`;
               constantsg /= Math.max(parseFloat(`${1 | parseInt(`${mathi}`)}`), 2);
            }
            if ((1 & cancelAq.length) == 3 || 1 == (libhermesj.length & cancelAq.length)) {
               cancelAq = `${(cancelAq == String.fromCharCode(102, 0) ? libhermesj.length : cancelAq.length)}`;
            }
            if (!foregroundb) {
               cancelAq = `${libhermesj.length}`;
            }
            let emojir = cancelAq.length <= 8979622;
            do {
               cancelAq += `${(libhermesj.length << (Math.min(5, Math.abs((foregroundb ? 5 : 1)))))}`;
               if (emojir) {
                  break;
               }
            } while ((1 > (libhermesj.length << (Math.min(cancelAq.length, 1))) || (cancelAq.length << (Math.min(Math.abs(1), 1))) > 1) && emojir);
            libhermesj.push(libhermesj.length);
            for (let o = 0; o < 3; o++) {
               let modalv = 3;
               let bufferL = String.fromCharCode(97, 118, 105, 115, 121, 110, 116, 104, 95, 101, 95, 53, 53, 0);
               let sentry1 = String.fromCharCode(120, 95, 49, 48, 95, 97, 116, 111, 105, 0);
               foregroundb = sentry1 == bufferL;
               modalv *= modalv;
               bufferL += "3";
            }
            let confirmationT = libhermesj.length <= 4981788;
            do {
               libhermesj = [cancelAq.length - 2];
               if (confirmationT) {
                  break;
               }
            } while (confirmationT && ((cancelAq.length * 3) >= 3 && (libhermesj.length * cancelAq.length) >= 3));
            let componentregistry7 = libhermesj.length >= 7584015;
            do {
               libhermesj.push(cancelAq.length + 3);
               if (componentregistry7) {
                  break;
               }
            } while (((3 | libhermesj.length) == 2 && 3 == (3 | libhermesj.length)) && componentregistry7);
            m_unlockn = loginN == String.fromCharCode(57, 0);
            setTimeout(() => {

               let membershipT = w_countL.size <= 8570507;
               do {
                  let runtimeW = 1;
                  let screen_ = String.fromCharCode(105, 110, 111, 100, 101, 95, 121, 95, 52, 53, 0);
                  let activeg = screen_.length <= 7705441;
                  do {
                     screen_ += `${2 % (Math.max(3, runtimeW))}`;
                     if (activeg) {
                        break;
                     }
                  } while (activeg && ((runtimeW & 5) < 4 || 5 < (runtimeW & screen_.length)));
                  while ((4 | runtimeW) < 2) {
                     screen_ += `${screen_.length ^ 1}`;
                     break;
                  }
                  let champion5: Map<any, any> = new Map([[String.fromCharCode(108, 95, 50, 50, 95, 118, 105, 115, 97, 0), 230], [String.fromCharCode(106, 115, 105, 109, 100, 100, 99, 116, 95, 111, 95, 55, 52, 0), 591]]);
                  runtimeW >>= Math.min(2, Math.abs(1));
                  champion5.set(`${champion5.size}`, champion5.size);
                  runtimeW |= (screen_ == String.fromCharCode(84, 0) ? runtimeW : screen_.length);
                  let fast9 = String.fromCharCode(97, 108, 115, 111, 95, 121, 95, 57, 0);
                  let combinedl = String.fromCharCode(121, 95, 49, 50, 95, 114, 111, 117, 116, 105, 110, 103, 0);
                  let calendarC = String.fromCharCode(114, 101, 110, 100, 105, 116, 105, 111, 110, 115, 95, 50, 95, 56, 55, 0);
                  screen_ = `${(String.fromCharCode(105, 0) == calendarC ? calendarC.length : runtimeW)}`;
                  fast9 = `${3 * combinedl.length}`;
                  combinedl = `${fast9.length}`;
                  let libreactU = 2.0;
                  runtimeW *= (screen_ == String.fromCharCode(106, 0) ? runtimeW : screen_.length);
                  libreactU /= Math.max(parseFloat(`${2 / (Math.max(parseInt(`${libreactU}`), 5))}`), 3);
                  w_countL.set(`${m_unlockn}`, ewardedZ.length << (Math.min(Math.abs(2), 4)));
                  if (membershipT) {
                     break;
                  }
               } while (membershipT && ((w_countL.size & 1) >= 4));
               setFetching(false);
            }, 1000);
         }
      } else {

         let closeS = String.fromCharCode(97, 118, 101, 114, 114, 111, 114, 95, 55, 95, 51, 48, 0);
         for (let i = 0; i < 2; i++) {
            closeS = `${closeS.length ^ 3}`;
         }
         let xcopy_jk = String.fromCharCode(117, 110, 98, 111, 110, 100, 101, 100, 95, 112, 95, 55, 57, 0);
         let sharew = String.fromCharCode(112, 95, 57, 50, 0);
         if (xcopy_jk.endsWith(sharew)) {
            let ajaxk = true;
            let buttonk = String.fromCharCode(112, 97, 115, 115, 101, 115, 95, 110, 95, 49, 0);
            let pingG = 3.0;
            xcopy_jk += `${(sharew == String.fromCharCode(112, 0) ? xcopy_jk.length : sharew.length)}`;
            ajaxk = String.fromCharCode(122, 0) == buttonk;
            buttonk += "3";
            pingG -= (parseFloat(`${parseInt(`${pingG}`) % (Math.max(6, (ajaxk ? 2 : 5)))}`));
         }
         ewardedZ += `${1 ^ ewardedZ.length}`;
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

            for (let h = 0; h < 1; h++) {
               let libreactUk = 4;
               let hoverO = 2.0;
               let combine5 = 3.0;
               let router6 = String.fromCharCode(115, 116, 97, 116, 117, 115, 95, 48, 95, 52, 48, 0);
               let connectionH: Array<any> = [String.fromCharCode(100, 118, 100, 115, 117, 98, 95, 102, 95, 55, 56, 0), String.fromCharCode(105, 95, 55, 95, 102, 105, 110, 100, 97, 115, 111, 99, 0), String.fromCharCode(117, 95, 57, 57, 95, 115, 104, 97, 108, 108, 111, 119, 0)];
               while ((3.86 * hoverO) <= 5.43 && 2 <= (parseInt(`${hoverO}`) * router6.length)) {
                  router6 = `${router6.length << (Math.min(1, Math.abs(parseInt(`${combine5}`))))}`;
                  break;
               }
               let annerS = libreactUk <= 6617277;
               do {
                  libreactUk += parseInt(`${hoverO}`);
                  if (annerS) {
                     break;
                  }
               } while ((5 >= (libreactUk | connectionH.length)) && annerS);
               let handlerf: Array<any> = [316, 798];
               let miniq = true;
               if (4.74 == (3.15 * combine5)) {
                  combine5 /= Math.max(5, parseFloat(`${handlerf.length ^ 1}`));
               }
               let libfbr = 0.0;
               let awayW = 0.0;
               miniq = libfbr > 41.34;
               libfbr /= Math.max(parseFloat(`${2 | parseInt(`${awayW}`)}`), 2);
               awayW *= parseFloat(`${parseInt(`${awayW}`) >> (Math.min(5, Math.abs(2)))}`);
               combine5 *= (parseFloat(`${router6 == String.fromCharCode(113, 0) ? (miniq ? 4 : 5) : router6.length}`));
               combine5 /= Math.max(4, (parseFloat(`${2 & (miniq ? 2 : 3)}`)));
               router6 += `${parseInt(`${combine5}`)}`;
               libreactUk &= (String.fromCharCode(105, 0) == router6 ? router6.length : parseInt(`${hoverO}`));
               let backU = false;
               router6 = `${router6.length / 2}`;
               backU = !backU || !backU;
               combine5 *= parseFloat(`${connectionH.length << (Math.min(Math.abs(1), 1))}`);
               libreactUk -= parseInt(`${hoverO}`) | 3;
               connectionH = [((miniq ? 2 : 5) - parseInt(`${hoverO}`))];
               let componentt = 9263425.0 <= combine5;
               do {
                  combine5 -= parseFloat(`${3}`);
                  if (componentt) {
                     break;
                  }
               } while (componentt && (3.57 >= (combine5 / (Math.max(parseFloat(`${handlerf.length}`), 3))) && 5.13 >= (combine5 / (Math.max(3.57, 7)))));
               w_countL = new Map([[`${crownV.size}`, libreactUk]]);
            }



            while (1 <= (default_aM.length >> (Math.min(Math.abs(3), 3)))) {
               m_unlockn = w_countL.size >= 51;
               break;
            }
            const index12Months = siFang.findIndex(
               (item) => item.title === "12个月"
            );

            if (w_countL.size <= loginN.length) {
               w_countL = new Map([[`${w_countL.size}`, w_countL.size]]);
            }



            let viewso = m_unlockn ? !m_unlockn : m_unlockn;
            do {
               m_unlockn = 83 >= libavcodecG.length && loginN.length >= 83;
               if (viewso) {
                  break;
               }
            } while ((5 >= (2 ^ crownV.size) && 2 >= crownV.size) && viewso);
            if (index12Months !== -1) {

               let stationsW = m_unlockn ? !m_unlockn : m_unlockn;
               do {
                  let indexV = 2.0;
                  let libyogaJ: Array<any> = [String.fromCharCode(98, 95, 56, 56, 95, 104, 101, 105, 103, 104, 116, 0), String.fromCharCode(101, 120, 99, 101, 112, 116, 95, 114, 95, 57, 56, 0)];
                  let foreground6: Map<any, any> = new Map([[String.fromCharCode(121, 95, 54, 95, 97, 117, 100, 105, 111, 103, 101, 110, 0), 536], [String.fromCharCode(105, 110, 118, 105, 116, 101, 114, 115, 95, 104, 95, 55, 49, 0), 244], [String.fromCharCode(101, 95, 54, 55, 95, 105, 110, 102, 111, 114, 109, 97, 116, 105, 111, 110, 0), 519]]);
                  let libreanimated1 = String.fromCharCode(99, 95, 52, 55, 95, 112, 101, 114, 99, 101, 110, 116, 105, 108, 101, 0);
                  libyogaJ.push((String.fromCharCode(103, 0) == libreanimated1 ? libreanimated1.length : parseInt(`${indexV}`)));
                  libyogaJ.push(parseInt(`${indexV}`) + foreground6.size);
                  let notificationC = 6626468 <= libyogaJ.length;
                  do {
                     libyogaJ = [libyogaJ.length % 3];
                     if (notificationC) {
                        break;
                     }
                  } while (notificationC && ((1 << (Math.min(5, libyogaJ.length))) < 5));
                  for (let v = 0; v < 3; v++) {
                     libyogaJ = [libyogaJ.length / (Math.max(7, parseInt(`${indexV}`)))];
                  }
                  foreground6.set(`${indexV}`, libyogaJ.length & 2);
                  while (2 < (3 | libyogaJ.length) || (foreground6.size | 3) < 1) {
                     foreground6 = new Map([[`${foreground6.size}`, 3 << (Math.min(3, Math.abs(foreground6.size)))]]);
                     break;
                  }
                  libyogaJ = [libyogaJ.length >> (Math.min(Math.abs(2), 3))];
                  let pangle0 = String.fromCharCode(118, 97, 114, 105, 110, 102, 111, 95, 54, 95, 51, 51, 0);
                  indexV -= 3 + libyogaJ.length;
                  m_unlockn = 36.81 <= indexV || !m_unlockn;
                  if (stationsW) {
                     break;
                  }
               } while ((m_unlockn) && stationsW);
               const item12Months = siFang.splice(index12Months, 1)[0];

               librrc_ = `${((customc ? 3 : 4) / (Math.max(default_aM.length, 10)))}`;
               siFang.unshift(item12Months);
            }



            while (1 >= (crownV.size / (Math.max(3, 5)))) {
               librrc_ += `${(String.fromCharCode(88, 0) == libavcodecG ? crownV.size : libavcodecG.length)}`;
               break;
            }


            customc = 42 >= loginN.length;
            setMembershipProducts(siFang);

            if (librrc_ != ewardedZ) {
               ewardedZ = `${librrc_.length}`;
            }
            setTimeout(() => {

               crownV.set(`${customc}`, w_countL.size);
               setFetching(false);
            }, 1000);
         }
      }
   };

   const handleGetGoogleProduct = async () => {
      let detailu: Array<any> = [477, 943, 202];
      let verticalM = String.fromCharCode(100, 117, 109, 112, 112, 97, 99, 107, 101, 116, 95, 102, 95, 51, 55, 0);
      let executore: Array<any> = [3, 82, 834];
      let libswscaleF = true;
      let referrer2 = 3.0;
      let zhengpianX = 3.0;
      let clearj = false;
      let injuryE = 2;
      let headerR = String.fromCharCode(104, 95, 52, 57, 95, 120, 111, 114, 101, 100, 0);
      let huaweiT = 2.0;
      let searchbarM = 2.0;
      let libimagepipeline8: Array<any> = [234, 858, 33];
      let castN: Map<any, any> = new Map([[String.fromCharCode(121, 95, 56, 48, 95, 112, 111, 108, 121, 107, 101, 121, 0), 477], [String.fromCharCode(121, 95, 53, 55, 95, 110, 111, 116, 104, 105, 110, 103, 0), 859], [String.fromCharCode(116, 95, 54, 48, 95, 100, 97, 116, 101, 115, 0), 65]]);
      let animation8 = 4.0;
      animation8 /= Math.max(1, 2);
      while (1.17 == animation8) {
         animation8 /= Math.max(parseInt(`${animation8}`), 3);
         break;
      }
      if (1.49 >= (animation8 * 5.98) && 5.98 >= (animation8 * animation8)) {
         animation8 /= Math.max(2, parseInt(`${animation8}`) >> (Math.min(3, Math.abs(2))));
      }
      detailu.push((executore.length % (Math.max(8, (clearj ? 4 : 3)))));
      for (let m = 0; m < 1; m++) {
         let guidew: Map<any, any> = new Map([[String.fromCharCode(104, 95, 54, 52, 95, 100, 105, 110, 101, 114, 115, 0), 440], [String.fromCharCode(112, 95, 56, 50, 95, 113, 117, 97, 110, 116, 105, 122, 97, 116, 105, 111, 110, 0), 537], [String.fromCharCode(106, 95, 49, 53, 95, 117, 110, 105, 111, 110, 0), 3]]);
         while (2 == (guidew.size ^ 2) && (guidew.size ^ 2) == 2) {
            guidew = new Map([[`${guidew.size}`, guidew.size >> (Math.min(Math.abs(guidew.size), 3))]]);
            break;
         }
         guidew = new Map([[`${guidew.size}`, 1 % (Math.max(4, guidew.size))]]);
         let libsentryW = false;
         libswscaleF = !libswscaleF;
      }
      for (let y = 0; y < 1; y++) {
         zhengpianX += verticalM.length;
      }
      let carouselX = String.fromCharCode(99, 97, 114, 100, 104, 111, 108, 100, 101, 114, 95, 122, 95, 51, 57, 0);
      let gesturey = String.fromCharCode(101, 95, 56, 48, 95, 113, 116, 115, 0);
      let mergerr: Array<any> = [347, 448, 49];
      carouselX = `${gesturey.length | 1}`;
      mergerr = [mergerr.length * mergerr.length];
      if (4 <= carouselX.length || gesturey != String.fromCharCode(87, 0)) {
         gesturey = `${(gesturey == String.fromCharCode(102, 0) ? carouselX.length : gesturey.length)}`;
      }
      let znewsh = 0.0;
      carouselX = `${(String.fromCharCode(55, 0) == gesturey ? gesturey.length : parseInt(`${znewsh}`))}`;
      gesturey += `${parseInt(`${znewsh}`)}`;
      gesturey += `${carouselX.length ^ parseInt(`${znewsh}`)}`;
      injuryE %= Math.max(parseInt(`${referrer2}`), 1);
      executore = [parseInt(`${referrer2}`)];
      let fieldk = String.fromCharCode(98, 95, 54, 95, 108, 111, 99, 97, 108, 108, 121, 0);
      let friends7: Map<any, any> = new Map([[String.fromCharCode(112, 114, 101, 100, 105, 99, 116, 105, 111, 110, 115, 95, 54, 95, 55, 56, 0), String.fromCharCode(97, 95, 54, 52, 95, 109, 111, 115, 116, 0)], [String.fromCharCode(102, 95, 55, 57, 95, 99, 111, 110, 118, 101, 114, 115, 105, 111, 110, 0), String.fromCharCode(110, 95, 49, 53, 95, 115, 105, 122, 101, 108, 101, 115, 115, 0)]]);
      let selectionN: Map<any, any> = new Map([[String.fromCharCode(115, 108, 111, 119, 101, 115, 116, 95, 99, 95, 53, 52, 0), 76], [String.fromCharCode(116, 114, 117, 101, 109, 111, 116, 105, 111, 110, 100, 97, 116, 97, 95, 110, 95, 49, 48, 0), 972], [String.fromCharCode(102, 95, 53, 51, 95, 100, 101, 115, 99, 114, 105, 112, 116, 105, 111, 110, 0), 994]]);
      for (let h = 0; h < 1; h++) {
         friends7 = new Map([[`${selectionN.size}`, 1]]);
      }
      friends7.set(fieldk, fieldk.length - 2);
      let friendsG = 1;
      let dragt = String.fromCharCode(100, 101, 115, 101, 114, 105, 97, 108, 105, 122, 101, 95, 54, 95, 54, 50, 0);
      let applen = 4.0;
      selectionN.set(`${friendsG}`, 1);
      friendsG &= 2 ^ dragt.length;
      dragt += `${dragt.length}`;
      applen /= Math.max(1, dragt.length);
      selectionN = new Map([[`${friends7.size}`, selectionN.size]]);
      let iconR = fieldk.length >= 5896372;
      do {
         fieldk = `${selectionN.size}`;
         if (iconR) {
            break;
         }
      } while (iconR && (3 > (friends7.size >> (Math.min(fieldk.length, 3))) && (3 >> (Math.min(3, fieldk.length))) > 1));
      let viewery = friends7.size <= 9903225;
      do {
         friends7 = new Map([[`${selectionN.size}`, 1]]);
         if (viewery) {
            break;
         }
      } while ((3 >= (3 % (Math.max(4, selectionN.size)))) && viewery);
      friends7 = new Map([[`${selectionN.size}`, friends7.size * selectionN.size]]);
      friends7.set(fieldk, selectionN.size + 2);
      selectionN = new Map([[`${friends7.size}`, friends7.size]]);
      detailu = [2 * parseInt(`${referrer2}`)];

      try {
         await getProducts({ skus: iap_skus });
         await getSubscriptions({ skus: subs_skus });
      } catch (err) {

         while (2 <= injuryE) {
            let fastw = 2.0;
            let spinnerw = 1.0;
            let customu = 5;
            let sportQ = 3.0;
            fastw += parseFloat(`${parseInt(`${spinnerw}`) % (Math.max(10, parseInt(`${sportQ}`)))}`);
            sportQ /= Math.max(3, parseFloat(`${parseInt(`${fastw}`) - 1}`));
            let armvax: Array<any> = [215, 791, 604];
            let sigmobn = 5.0;
            fastw /= Math.max(1, parseFloat(`${parseInt(`${spinnerw}`) ^ parseInt(`${sigmobn}`)}`));
            armvax.push(armvax.length & 2);
            sigmobn += 2;
            for (let h = 0; h < 2; h++) {
               fastw /= Math.max(parseFloat(`${parseInt(`${sportQ}`) / 3}`), 3);
            }
            sportQ /= Math.max(2, parseFloat(`${customu}`));
            let description_e2a = customu >= 6905899;
            do {
               customu >>= Math.min(Math.abs(2 | customu), 3);
               if (description_e2a) {
                  break;
               }
            } while (description_e2a && (1 >= (3 % (Math.max(5, customu)))));
            for (let n = 0; n < 2; n++) {
               customu %= Math.max(parseInt(`${sportQ}`), 5);
            }
            spinnerw /= Math.max(5, parseFloat(`${customu >> (Math.min(Math.abs(parseInt(`${sportQ}`)), 3))}`));
            while ((1 >> (Math.min(5, Math.abs(customu)))) <= 5) {
               sportQ -= parseFloat(`${parseInt(`${spinnerw}`) | parseInt(`${sportQ}`)}`);
               break;
            }
            let moonB = 3.0;
            let trophyP = 7334966.0 <= fastw;
            do {
               fastw += parseFloat(`${parseInt(`${spinnerw}`)}`);
               if (trophyP) {
                  break;
               }
            } while (trophyP && ((sportQ / 1) <= 4.20));
            let componentregistryu: Map<any, any> = new Map([[String.fromCharCode(102, 108, 97, 99, 100, 115, 112, 95, 99, 95, 50, 55, 0), 902], [String.fromCharCode(120, 95, 49, 50, 95, 109, 101, 97, 115, 117, 114, 101, 100, 0), 841]]);
            sportQ += parseFloat(`${componentregistryu.size}`);
            injuryE *= 3 >> (Math.min(3, verticalM.length));
            break;
         }
         let eactW = 8186178.0 >= referrer2;
         do {
            let phoneZ = 4;
            phoneZ >>= Math.min(Math.abs(phoneZ / 3), 1);
            for (let s = 0; s < 3; s++) {
               phoneZ ^= 3;
            }
            phoneZ %= Math.max(3, 1);
            referrer2 /= Math.max(4, parseInt(`${huaweiT}`) & verticalM.length);
            if (eactW) {
               break;
            }
         } while (eactW && (5 >= detailu.length));
         let grayK: Map<any, any> = new Map([[String.fromCharCode(99, 104, 101, 99, 107, 105, 110, 95, 118, 95, 52, 54, 0), 552], [String.fromCharCode(100, 111, 103, 95, 102, 95, 54, 48, 0), 550]]);
         let castingH: Map<any, any> = new Map([[String.fromCharCode(101, 116, 104, 114, 101, 97, 100, 105, 110, 103, 95, 113, 95, 55, 53, 0), 910], [String.fromCharCode(104, 95, 57, 52, 95, 105, 110, 118, 0), 261]]);
         let statisticsB = 1.0;
         let zhubo7 = 0.0;
         let indexj = zhubo7 >= 8066757.0;
         do {
            let crownh: Array<any> = [String.fromCharCode(101, 95, 55, 51, 95, 112, 97, 103, 0), String.fromCharCode(102, 95, 55, 48, 95, 105, 110, 105, 116, 105, 97, 108, 105, 122, 101, 0), String.fromCharCode(105, 95, 53, 49, 95, 109, 97, 99, 101, 120, 97, 109, 112, 108, 101, 0)];
            let eighteeng: Map<any, any> = new Map([[String.fromCharCode(116, 95, 55, 51, 95, 109, 111, 110, 107, 101, 121, 115, 97, 117, 100, 105, 111, 0), 738], [String.fromCharCode(120, 95, 55, 51, 95, 117, 112, 108, 111, 97, 100, 101, 100, 0), 30], [String.fromCharCode(108, 95, 50, 54, 95, 115, 119, 97, 116, 99, 104, 0), 281]]);
            zhubo7 *= parseInt(`${statisticsB}`) ^ grayK.size;
            crownh.push(3);
            eighteeng.set(`${crownh.length}`, eighteeng.size >> (Math.min(crownh.length, 5)));
            if (indexj) {
               break;
            }
         } while ((castingH.get(`${zhubo7}`) == null) && indexj);
         statisticsB /= Math.max(2, 3);
         if ((2.53 - statisticsB) >= 4.25 || (castingH.size % (Math.max(5, 3))) >= 1) {
            let libglogh: Map<any, any> = new Map([[String.fromCharCode(102, 99, 117, 110, 112, 117, 98, 108, 105, 115, 104, 95, 100, 95, 52, 56, 0), String.fromCharCode(97, 95, 55, 54, 95, 97, 114, 103, 115, 0)], [String.fromCharCode(116, 105, 110, 116, 95, 119, 95, 55, 51, 0), String.fromCharCode(109, 97, 120, 101, 100, 95, 113, 95, 54, 54, 0)]]);
            castingH.set(`${zhubo7}`, parseInt(`${statisticsB}`) & parseInt(`${zhubo7}`));
            libglogh.set(`${libglogh.size}`, libglogh.size);
         }
         statisticsB /= Math.max(1, grayK.size | 3);
         let trophyx = String.fromCharCode(115, 111, 99, 97, 110, 116, 115, 101, 110, 100, 109, 111, 114, 101, 95, 98, 95, 56, 56, 0);
         let classesU = String.fromCharCode(101, 110, 104, 97, 110, 99, 101, 100, 95, 101, 95, 52, 50, 0);
         clearj = (injuryE - referrer2) < 43;
         if (injuryE <= 4) {
            injuryE |= headerR.length;
         }
         let banner2 = 3;
         let transferd = 5.0;
         let collectionN: Array<any> = [954, 101];
         let searchbard = String.fromCharCode(119, 95, 52, 57, 95, 114, 101, 116, 105, 110, 97, 0);
         let expandM = transferd >= 5023838.0;
         do {
            transferd += parseFloat(`${parseInt(`${transferd}`)}`);
            if (expandM) {
               break;
            }
         } while ((1.27 >= (parseFloat(`${collectionN.length}`) + transferd) && (parseInt(`${transferd}`) + collectionN.length) >= 5) && expandM);
         let mbbannerZ = 0.0;
         let videor = 5.0;
         let lessy = String.fromCharCode(97, 114, 103, 115, 95, 55, 95, 52, 49, 0);
         collectionN.push(collectionN.length - 2);
         mbbannerZ /= Math.max(parseFloat(`${lessy.length}`), 4);
         videor -= parseInt(`${mbbannerZ}`);
         lessy += `${(lessy == String.fromCharCode(84, 0) ? lessy.length : parseInt(`${videor}`))}`;
         let libjsiH = String.fromCharCode(114, 101, 115, 101, 97, 114, 99, 104, 95, 97, 95, 56, 54, 0);
         let hoverK: Array<any> = [993, 693];
         banner2 *= (String.fromCharCode(97, 0) == libjsiH ? hoverK.length : libjsiH.length);
         searchbard += "3";
         let eighteenj = 5;
         let mail5 = 0.0;
         collectionN = [eighteenj];
         mail5 -= parseFloat(`${parseInt(`${mail5}`) & 3}`);
         let confirmationz = String.fromCharCode(100, 101, 115, 101, 108, 101, 99, 116, 101, 100, 95, 50, 95, 53, 50, 0);
         collectionN.push(libjsiH.length);
         confirmationz = `${confirmationz.length}`;
         searchbard += `${libjsiH.length - collectionN.length}`;
         detailu.push(parseInt(`${referrer2}`));
         for (let f = 0; f < 1; f++) {
            let androidt = String.fromCharCode(105, 95, 54, 48, 95, 97, 108, 116, 101, 114, 97, 98, 108, 101, 0);
            let lessG = 2.0;
            let libfbjniS = true;
            let gmailu = 5;
            let soundZ = true;
            while (4.62 == (2.14 - lessG)) {
               let historyZ = String.fromCharCode(97, 95, 55, 57, 95, 97, 102, 105, 108, 116, 101, 114, 0);
               let forward4: Map<any, any> = new Map([[String.fromCharCode(114, 111, 108, 108, 95, 119, 95, 52, 48, 0), 9], [String.fromCharCode(108, 111, 97, 115, 95, 51, 95, 55, 49, 0), 950], [String.fromCharCode(114, 95, 57, 95, 111, 117, 116, 112, 111, 105, 110, 116, 0), 828]]);
               let canvasW: Array<any> = [239, 232];
               let gesturesl = true;
               lessG += historyZ.length;
               historyZ = `${((gesturesl ? 3 : 3) & 2)}`;
               forward4.set(`${canvasW.length}`, 2);
               canvasW = [3];
               break;
            }
            if (!libfbjniS) {
               libfbjniS = androidt.length < 92;
            }
            while (5 >= (gmailu ^ 2)) {
               gmailu |= 3 + gmailu;
               break;
            }
            while (gmailu >= 3) {
               let componentregistryC = 3;
               let regengz: Map<any, any> = new Map([[String.fromCharCode(97, 117, 116, 111, 112, 108, 97, 121, 105, 110, 103, 95, 100, 95, 54, 49, 0), true], [String.fromCharCode(114, 95, 51, 50, 95, 117, 112, 99, 97, 115, 101, 0), true], [String.fromCharCode(115, 117, 98, 114, 101, 115, 117, 108, 116, 95, 51, 95, 56, 51, 0), true]]);
               libfbjniS = 88.5 >= lessG;
               componentregistryC ^= componentregistryC;
               regengz.set(`${componentregistryC}`, regengz.size & componentregistryC);
               break;
            }
            let fieldkq = 4955293.0 <= lessG;
            do {
               lessG -= ((libfbjniS ? 1 : 1) << (Math.min(Math.abs(gmailu), 2)));
               if (fieldkq) {
                  break;
               }
            } while (fieldkq && (lessG <= 5.87 && 2.93 <= (lessG + 5.87)));
            let settingsR = 2;
            let libreanimatedD = 4.0;
            libfbjniS = settingsR <= parseInt(`${libreanimatedD}`);
            while (!androidt.startsWith(`${libfbjniS}`)) {
               let slidera: Map<any, any> = new Map([[String.fromCharCode(105, 110, 105, 116, 97, 99, 107, 95, 97, 95, 53, 48, 0), true], [String.fromCharCode(115, 116, 114, 117, 99, 116, 117, 114, 97, 108, 95, 50, 95, 50, 56, 0), false]]);
               androidt = `${1 - parseInt(`${lessG}`)}`;
               slidera = new Map([[`${slidera.size}`, slidera.size << (Math.min(Math.abs(slidera.size), 5))]]);
               break;
            }
            lessG += gmailu;
            libfbjniS = (androidt.length - parseInt(`${lessG}`)) >= 43;
            soundZ = libfbjniS;
            let questG = String.fromCharCode(98, 95, 50, 56, 95, 99, 104, 101, 99, 107, 98, 111, 120, 0);
            let popupr = 3.0;
            let soundL = String.fromCharCode(114, 101, 99, 111, 109, 109, 101, 110, 100, 95, 118, 95, 52, 57, 0);
            lessG *= soundL.length;
            questG = `${parseInt(`${popupr}`)}`;
            popupr += parseFloat(`${questG.length}`);
            soundL += `${parseInt(`${popupr}`) ^ 1}`;
            for (let t = 0; t < 2; t++) {
               let productt = true;
               let buttonj = String.fromCharCode(104, 101, 105, 103, 104, 116, 115, 95, 100, 95, 54, 54, 0);
               let reducerc: Array<any> = [315, 728, 344];
               soundZ = (((!productt ? buttonj.length : 89) << (Math.min(buttonj.length, 1))) > 89);
               productt = (reducerc.length >> (Math.min(1, reducerc.length))) == 11;
            }
            androidt += `${(3 / (Math.max(7, (soundZ ? 1 : 2))))}`;
            libfbjniS = !soundZ;
            for (let p = 0; p < 3; p++) {
               let becomel = String.fromCharCode(119, 97, 110, 116, 115, 95, 99, 95, 53, 51, 0);
               let roomj = true;
               let mapbuffera = 4.0;
               let ksad8: Map<any, any> = new Map([[String.fromCharCode(101, 95, 56, 55, 95, 98, 108, 111, 99, 107, 115, 99, 97, 110, 0), 456], [String.fromCharCode(114, 108, 105, 110, 101, 95, 49, 95, 51, 49, 0), 93], [String.fromCharCode(119, 95, 56, 95, 116, 101, 114, 109, 105, 110, 97, 116, 101, 0), 66]]);
               let referrerg = String.fromCharCode(104, 105, 103, 104, 101, 115, 116, 95, 55, 95, 49, 54, 0);
               gmailu ^= ((soundZ ? 4 : 4) >> (Math.min(Math.abs(ksad8.size), 3)));
               becomel = `${((roomj ? 5 : 3))}`;
               roomj = mapbuffera < 13.98 && becomel.length < 52;
               mapbuffera -= (String.fromCharCode(68, 0) == referrerg ? parseInt(`${mapbuffera}`) : referrerg.length);
               ksad8.set(becomel, (String.fromCharCode(97, 0) == becomel ? parseInt(`${mapbuffera}`) : becomel.length));
            }
            injuryE -= (String.fromCharCode(80, 0) == verticalM ? verticalM.length : detailu.length);
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
      let libavdeviceA = 2;
      let membershipY = true;
      let panglej = String.fromCharCode(105, 100, 115, 117, 98, 116, 121, 112, 101, 95, 101, 95, 53, 54, 0);
      let switch_s4C = 3;
      let arrowl = String.fromCharCode(98, 95, 50, 52, 95, 112, 97, 105, 114, 119, 105, 115, 101, 0);
      let dycreatorB = 3;
      let upgradey: Array<any> = [237, 670];
      let componentC = true;
      let component8: Array<any> = [965, 409];
      let unselected9 = 5;
      let policyT = 1;
      let libcrashsdk4 = 2.0;
      while (3 <= dycreatorB) {
         dycreatorB -= (component8.length << (Math.min(5, Math.abs((membershipY ? 2 : 2)))));
         break;
      }



      for (let v = 0; v < 1; v++) {
         let singleI = 1.0;
         let containerJ = String.fromCharCode(116, 95, 49, 53, 95, 112, 114, 101, 105, 110, 105, 116, 0);
         while (!containerJ.includes(`${singleI}`)) {
            let lnewinterstitialI = String.fromCharCode(105, 103, 110, 111, 114, 105, 110, 103, 95, 51, 95, 53, 50, 0);
            let subss = String.fromCharCode(120, 95, 55, 50, 95, 118, 97, 114, 105, 97, 110, 116, 0);
            let n_unlockE = String.fromCharCode(108, 105, 103, 104, 116, 95, 98, 95, 55, 54, 0);
            containerJ = `${subss.length}`;
            lnewinterstitialI = `${n_unlockE.length | 2}`;
            subss += `${n_unlockE.length ^ 1}`;
            break;
         }
         while ((parseInt(`${singleI}`) / (Math.max(containerJ.length, 4))) <= 4 || 4 <= (containerJ.length >> (Math.min(Math.abs(4), 5)))) {
            singleI += containerJ.length;
            break;
         }
         containerJ += `${(containerJ == String.fromCharCode(82, 0) ? parseInt(`${singleI}`) : containerJ.length)}`;
         singleI *= 3 % (Math.max(8, containerJ.length));
         for (let j = 0; j < 1; j++) {
            singleI += parseInt(`${singleI}`) >> (Math.min(containerJ.length, 3));
         }
         let penaltyQ = 5.0;
         let entryH = 2.0;
         component8.push(2 << (Math.min(3, Math.abs(switch_s4C))));
      }


      if (membershipY) {
         let singleu: Map<any, any> = new Map([[String.fromCharCode(114, 101, 103, 101, 120, 95, 110, 95, 56, 52, 0), 270], [String.fromCharCode(115, 95, 51, 53, 95, 97, 114, 114, 97, 121, 115, 105, 122, 101, 0), 776], [String.fromCharCode(112, 114, 111, 118, 105, 100, 101, 114, 95, 102, 95, 50, 0), 481]]);
         let confirmationy = 0.0;
         let ynewsT = 2.0;
         let expandt = 4.0;
         let unselectedf = String.fromCharCode(113, 95, 50, 55, 95, 102, 101, 119, 0);
         if (!Array.from(singleu.keys()).includes(`${ynewsT}`)) {
            ynewsT -= unselectedf.length;
         }
         let guideI = 2.0;
         let tailP = 3.0;
         for (let q = 0; q < 1; q++) {
            confirmationy += parseFloat(`${parseInt(`${expandt}`) << (Math.min(3, Math.abs(parseInt(`${guideI}`))))}`);
         }
         if (1.85 < (guideI + parseFloat(`${unselectedf.length}`))) {
            let animationZ = String.fromCharCode(112, 95, 57, 49, 95, 112, 114, 111, 109, 111, 116, 101, 0);
            let hiadq = String.fromCharCode(98, 95, 49, 51, 95, 100, 111, 119, 110, 108, 111, 97, 100, 0);
            let stary = String.fromCharCode(106, 95, 54, 95, 105, 110, 116, 101, 114, 97, 99, 116, 0);
            guideI *= parseFloat(`${1}`);
            animationZ += "2";
            hiadq += "1";
            stary += `${animationZ.length}`;
         }
         ynewsT *= 1;
         if ((guideI / (Math.max(2, 3))) <= 4.37) {
            confirmationy *= parseFloat(`${parseInt(`${guideI}`)}`);
         }
         while ((confirmationy + 5.88) >= 1.37 || (1 & singleu.size) >= 2) {
            let dialogh = String.fromCharCode(105, 95, 52, 53, 95, 116, 104, 114, 101, 97, 100, 112, 111, 111, 108, 0);
            let downloadedg = 5.0;
            let halfu = String.fromCharCode(117, 95, 49, 57, 95, 121, 117, 118, 112, 99, 0);
            confirmationy -= parseFloat(`${singleu.size}`);
            dialogh = `${halfu.length << (Math.min(2, Math.abs(parseInt(`${downloadedg}`))))}`;
            downloadedg *= dialogh.length << (Math.min(Math.abs(2), 3));
            halfu += `${(String.fromCharCode(76, 0) == dialogh ? parseInt(`${downloadedg}`) : dialogh.length)}`;
            break;
         }
         let googleq: Map<any, any> = new Map([[String.fromCharCode(116, 97, 107, 101, 95, 97, 95, 57, 56, 0), String.fromCharCode(98, 95, 56, 51, 95, 116, 104, 114, 101, 97, 100, 101, 100, 0)], [String.fromCharCode(115, 117, 98, 115, 116, 114, 105, 110, 103, 115, 95, 114, 95, 55, 52, 0), String.fromCharCode(114, 95, 49, 55, 95, 110, 101, 103, 111, 116, 105, 97, 116, 101, 100, 0)]]);
         confirmationy /= Math.max(1, parseFloat(`${1 * googleq.size}`));
         guideI /= Math.max(4, parseFloat(`${unselectedf.length}`));
         let gift8 = String.fromCharCode(110, 117, 109, 112, 97, 100, 95, 100, 95, 51, 50, 0);
         let policyF = 1;
         let libjsinspectorT = 1;
         expandt *= parseInt(`${tailP}`);
         gift8 += `${2 * libjsinspectorT}`;
         policyF |= 3;
         libjsinspectorT -= (gift8 == String.fromCharCode(102, 0) ? policyF : gift8.length);
         while ((1.87 * guideI) < 1.88) {
            guideI += parseFloat(`${1}`);
            break;
         }
         for (let a = 0; a < 3; a++) {
            expandt -= parseInt(`${guideI}`);
         }
         if ((singleu.size % 4) == 3 && (3.61 + confirmationy) == 4.88) {
            let confirmationU = String.fromCharCode(103, 95, 49, 54, 95, 116, 114, 97, 110, 115, 102, 111, 114, 109, 101, 114, 0);
            let cricketK = true;
            singleu = new Map([[`${cricketK}`, 2 & parseInt(`${confirmationy}`)]]);
            confirmationU += `${confirmationU.length}`;
            cricketK = String.fromCharCode(68, 0) == confirmationU && 8 > confirmationU.length;
         }
         guideI -= parseFloat(`${1}`);
         let slideri: Array<any> = [922, 78, 426];
         ynewsT *= parseInt(`${confirmationy}`) ^ 3;
         slideri = [2 + slideri.length];
         membershipY = (dycreatorB ^ switch_s4C) <= 41;
      }


      upgradey = [dycreatorB];


      if (unselected9 <= panglej.length) {
         unselected9 += 1;
      }


      let refreshQ = 1.0;
      let mutedG: Map<any, any> = new Map([[String.fromCharCode(101, 110, 99, 111, 100, 97, 98, 108, 101, 95, 56, 95, 56, 53, 0), 524], [String.fromCharCode(116, 95, 53, 50, 95, 117, 115, 97, 103, 101, 0), 552], [String.fromCharCode(109, 95, 54, 52, 95, 116, 111, 111, 108, 116, 105, 112, 0), 958]]);
      let libfollyk: Map<any, any> = new Map([[String.fromCharCode(109, 97, 120, 113, 95, 121, 95, 50, 51, 0), 58], [String.fromCharCode(99, 95, 57, 51, 95, 118, 115, 101, 114, 118, 105, 99, 101, 0), 460], [String.fromCharCode(112, 95, 55, 52, 95, 112, 114, 111, 98, 105, 110, 103, 0), 399]]);
      mutedG.set(`${mutedG.size}`, 2);
      let arrow9 = 5;
      let minimizeP = 4;
      let internetO: Map<any, any> = new Map([[String.fromCharCode(100, 105, 109, 95, 103, 95, 49, 48, 0), 189], [String.fromCharCode(102, 95, 55, 56, 95, 115, 117, 98, 109, 111, 100, 101, 108, 0), 58]]);
      if (3 == (libfollyk.size | mutedG.size) || 1 == (libfollyk.size | 3)) {
         mutedG = new Map([[`${internetO.size}`, 1 + minimizeP]]);
      }
      arrow9 *= internetO.size;
      arrow9 &= 1;
      if (4 >= (5 - arrow9) || (5 - arrow9) >= 3) {
         minimizeP >>= Math.min(4, Math.abs(parseInt(`${refreshQ}`)));
      }
      arrow9 <<= Math.min(Math.abs(minimizeP), 3);
      let templateprocessorL = false;
      let rootv = String.fromCharCode(117, 95, 53, 54, 95, 115, 110, 97, 112, 115, 104, 111, 116, 115, 0);
      mutedG.set(`${refreshQ}`, mutedG.size);
      templateprocessorL = ((rootv.length << (Math.min(4, Math.abs((templateprocessorL ? 79 : rootv.length))))) < 79);
      dycreatorB <<= Math.min(Math.abs(parseInt(`${refreshQ}`) & 2), 3);



      while (!membershipY) {
         membershipY = dycreatorB <= upgradey.length;
         break;
      }


      let configurer = 8935900 <= unselected9;
      do {
         let fillo = String.fromCharCode(105, 95, 51, 51, 95, 105, 110, 116, 101, 114, 110, 97, 108, 0);
         let videocommonI = 1.0;
         let whistleE = String.fromCharCode(98, 95, 52, 54, 95, 112, 101, 111, 112, 108, 101, 0);
         let unreadp: Array<any> = [794, 865];
         videocommonI += parseFloat(`${unreadp.length & whistleE.length}`);
         let ksadV = 7626139 >= fillo.length;
         do {
            fillo += `${parseInt(`${videocommonI}`)}`;
            if (ksadV) {
               break;
            }
         } while (((fillo.length << (Math.min(Math.abs(5), 3))) == 1 || 2 == (5 / (Math.max(1, parseInt(`${videocommonI}`))))) && ksadV);
         let libavformatQ = whistleE.length >= 6281283;
         do {
            let short_mL = 0.0;
            whistleE += "1";
            short_mL -= parseInt(`${short_mL}`) + parseInt(`${short_mL}`);
            if (libavformatQ) {
               break;
            }
         } while (libavformatQ && (1 > (1 - whistleE.length) && 1 > (unreadp.length - whistleE.length)));
         unreadp.push(fillo.length);
         let templateprocessorF = whistleE == String.fromCharCode(115, 112, 51, 0);
         do {
            whistleE += `${unreadp.length & 1}`;
            if (templateprocessorF) {
               break;
            }
         } while (templateprocessorF && ((3 & whistleE.length) <= 5 || 5 <= (3 ^ whistleE.length)));
         while (fillo.endsWith(`${videocommonI}`)) {
            let navigationn = String.fromCharCode(108, 111, 111, 112, 102, 105, 108, 116, 101, 114, 95, 48, 95, 49, 0);
            let themeV = 3.0;
            videocommonI += parseFloat(`${2 >> (Math.min(2, Math.abs(parseInt(`${themeV}`))))}`);
            navigationn += `${(String.fromCharCode(106, 0) == navigationn ? navigationn.length : navigationn.length)}`;
            themeV -= parseFloat(`${3}`);
            break;
         }
         fillo += `${unreadp.length}`;
         fillo = "3";
         let cricketb = 1.0;
         fillo += `${fillo.length}`;
         cricketb /= Math.max(parseFloat(`${1 | parseInt(`${cricketb}`)}`), 4);
         let large_: Map<any, any> = new Map([[String.fromCharCode(104, 95, 53, 57, 95, 109, 118, 101, 99, 0), 813], [String.fromCharCode(112, 108, 97, 121, 101, 100, 95, 103, 95, 54, 52, 0), 157]]);
         let xadsdka: Map<any, any> = new Map([[String.fromCharCode(118, 112, 97, 105, 110, 116, 101, 114, 95, 50, 95, 57, 51, 0), String.fromCharCode(118, 101, 110, 117, 101, 115, 95, 113, 95, 56, 49, 0)], [String.fromCharCode(102, 95, 56, 51, 95, 109, 97, 116, 99, 104, 101, 100, 0), String.fromCharCode(112, 114, 101, 112, 97, 114, 101, 95, 121, 95, 55, 50, 0)]]);
         whistleE = `${xadsdka.size * large_.size}`;
         videocommonI += parseFloat(`${parseInt(`${videocommonI}`)}`);
         if ((3 + whistleE.length) <= 1) {
            let abidetectw = 0.0;
            let usernameV = 3.0;
            let googlee = 0.0;
            let listO = 5.0;
            videocommonI /= Math.max(parseFloat(`${2 % (Math.max(parseInt(`${googlee}`), 7))}`), 5);
            abidetectw -= 2 ^ parseInt(`${abidetectw}`);
            usernameV += 2;
            googlee *= parseFloat(`${2 % (Math.max(9, parseInt(`${abidetectw}`)))}`);
            listO -= parseInt(`${usernameV}`);
         }
         unselected9 |= (String.fromCharCode(50, 0) == panglej ? switch_s4C : panglej.length);
         if (configurer) {
            break;
         }
      } while (((unselected9 * 2) <= 2) && configurer);
      setIsBtnEnable(false);

      if (!panglej.endsWith(`${dycreatorB}`)) {
         dycreatorB >>= Math.min(Math.abs(((membershipY ? 4 : 3))), 5);
      }
      try {

         let flipperr = 8291152 <= switch_s4C;
         do {
            switch_s4C <<= Math.min(2, Math.abs(2));
            if (flipperr) {
               break;
            }
         } while (flipperr && ((libavdeviceA | switch_s4C) > 2));
         setIsLoading(true);

         let tailK = true;
         while (!tailK) {
            let predictionc = 2.0;
            let nativemoduleC = String.fromCharCode(115, 95, 57, 56, 95, 104, 97, 115, 104, 116, 97, 98, 108, 101, 0);
            tailK = !tailK;
            predictionc -= (parseFloat(`${String.fromCharCode(90, 0) == nativemoduleC ? nativemoduleC.length : parseInt(`${predictionc}`)}`));
            break;
         }
         tailK = (tailK ? !tailK : !tailK);
         if (tailK) {
            tailK = (!tailK ? !tailK : !tailK);
         }
         unselected9 |= component8.length;

         if (zfSelected === "GOOGLE_PAY") {

            component8 = [dycreatorB];
            console.log("google method");

            while (5 < (dycreatorB + unselected9)) {
               dycreatorB /= Math.max((String.fromCharCode(65, 0) == panglej ? panglej.length : unselected9), 3);
               break;
            }
            console.log("the data: ", membershipSelected);

            switch_s4C &= 2;

            if (membershipSelected.productType === "iap") {
               await requestPurchase({ skus: [membershipSelected.productSKU] });
            } else if (membershipSelected.productType === "subs") {

               componentC = component8.length == panglej.length;
               const subs = subscriptions.find(
                  (sub) => sub.productId === membershipSelected.productSKU
               );

               let armvaI = 4.0;
               armvaI /= Math.max(2 * parseInt(`${armvaI}`), 5);
               if (4.30 >= (armvaI * armvaI)) {
                  let shrinky = 3.0;
                  let backwardO = 4.0;
                  let guideJ = String.fromCharCode(114, 101, 102, 108, 101, 99, 116, 105, 111, 110, 95, 115, 95, 49, 48, 48, 0);
                  armvaI *= parseInt(`${shrinky}`);
                  shrinky -= parseFloat(`${2}`);
                  backwardO *= (String.fromCharCode(56, 0) == guideJ ? parseInt(`${backwardO}`) : guideJ.length);
               }
               armvaI += 3;
               unselected9 &= 2;

               if (subs) {

                  for (let e = 0; e < 3; e++) {
                     membershipY = (arrowl.length + panglej.length) > 93;
                  }
                  const offerToken = subs.subscriptionOfferDetails[0].offerToken;

                  for (let g = 0; g < 2; g++) {
                     let colorsx = String.fromCharCode(105, 110, 102, 111, 115, 95, 108, 95, 54, 48, 0);
                     let catagoryP = false;
                     let friendsI = 4;
                     let snewarchdefaults0: Map<any, any> = new Map([[String.fromCharCode(114, 116, 106, 112, 101, 103, 95, 50, 95, 49, 55, 0), 274], [String.fromCharCode(103, 95, 54, 57, 95, 100, 101, 102, 115, 0), 997], [String.fromCharCode(113, 95, 49, 54, 95, 122, 98, 117, 102, 0), 869]]);
                     let imagemanager1: Map<any, any> = new Map([[String.fromCharCode(115, 105, 110, 113, 98, 95, 122, 95, 51, 53, 0), String.fromCharCode(106, 95, 53, 54, 95, 109, 98, 117, 118, 0)], [String.fromCharCode(97, 99, 97, 108, 99, 95, 100, 95, 55, 53, 0), String.fromCharCode(99, 117, 114, 118, 101, 115, 95, 106, 95, 51, 49, 0)]]);
                     if (imagemanager1.size >= friendsI) {
                        let bottomK = String.fromCharCode(121, 95, 53, 53, 95, 112, 97, 121, 108, 111, 97, 100, 115, 0);
                        let signinupB = true;
                        let x_centerg = 0.0;
                        let usernameH = 1.0;
                        imagemanager1 = new Map([[`${signinupB}`, (3 << (Math.min(1, Math.abs((signinupB ? 1 : 3)))))]]);
                        bottomK = `${bottomK.length | 3}`;
                        x_centerg -= 3 | bottomK.length;
                        usernameH -= parseInt(`${x_centerg}`) & 3;
                     }
                     let graphz: Map<any, any> = new Map([[String.fromCharCode(98, 95, 51, 53, 95, 102, 114, 101, 101, 0), 196], [String.fromCharCode(115, 116, 100, 101, 114, 114, 95, 98, 95, 50, 49, 0), 971]]);
                     let roundb: Array<any> = [String.fromCharCode(97, 99, 114, 111, 115, 115, 102, 97, 100, 101, 95, 49, 95, 57, 52, 0), String.fromCharCode(99, 95, 52, 56, 95, 119, 101, 105, 0), String.fromCharCode(117, 95, 57, 95, 116, 101, 120, 105, 100, 101, 112, 0)];
                     friendsI %= Math.max(1, roundb.length);
                     graphz = new Map([[`${graphz.size}`, 2 & graphz.size]]);
                     roundb = [graphz.size ^ 2];
                     imagemanager1 = new Map([[`${imagemanager1.size}`, colorsx.length << (Math.min(3, Math.abs(imagemanager1.size)))]]);
                     catagoryP = snewarchdefaults0.size == 90 && catagoryP;
                     let stringsv = 5;
                     let libyoga0 = String.fromCharCode(100, 111, 119, 110, 108, 111, 97, 100, 95, 116, 95, 54, 52, 0);
                     let small7 = String.fromCharCode(99, 111, 117, 110, 116, 115, 95, 104, 95, 54, 51, 0);
                     colorsx = `${colorsx.length | friendsI}`;
                     stringsv |= 1 * libyoga0.length;
                     libyoga0 += `${stringsv}`;
                     small7 = `${2 & small7.length}`;
                     friendsI += 2;
                     for (let c = 0; c < 1; c++) {
                        catagoryP = !catagoryP;
                     }
                     let libreanimateda = snewarchdefaults0.size >= 9206187;
                     do {
                        let toponu: Map<any, any> = new Map([[String.fromCharCode(114, 97, 119, 100, 101, 99, 95, 52, 95, 49, 50, 0), true], [String.fromCharCode(114, 95, 54, 95, 112, 97, 114, 97, 0), false], [String.fromCharCode(103, 95, 56, 52, 95, 115, 116, 114, 108, 105, 107, 101, 0), false]]);
                        let leagueO = false;
                        let fileK: Array<any> = [String.fromCharCode(105, 95, 52, 50, 95, 97, 99, 99, 101, 115, 115, 105, 98, 108, 105, 116, 121, 0), String.fromCharCode(121, 117, 118, 112, 97, 99, 107, 101, 100, 95, 100, 95, 50, 48, 0), String.fromCharCode(105, 112, 108, 105, 109, 97, 103, 101, 95, 57, 95, 57, 0)];
                        snewarchdefaults0 = new Map([[`${friendsI}`, (colorsx == String.fromCharCode(53, 0) ? friendsI : colorsx.length)]]);
                        toponu = new Map([[`${fileK.length}`, fileK.length]]);
                        leagueO = !leagueO;
                        if (libreanimateda) {
                           break;
                        }
                     } while (libreanimateda && ((imagemanager1.size - snewarchdefaults0.size) == 5 || (snewarchdefaults0.size - 5) == 3));
                     for (let r = 0; r < 3; r++) {
                        colorsx = `${colorsx.length >> (Math.min(Math.abs(3), 4))}`;
                     }
                     let directh = true;
                     colorsx = `${2 | colorsx.length}`;
                     catagoryP = !catagoryP;
                     catagoryP = friendsI > 7;
                     catagoryP = colorsx.endsWith(`${friendsI}`);
                     let downloaderj = 3.0;
                     let libflipperU = 4.0;
                     let headerg = String.fromCharCode(101, 108, 105, 109, 105, 110, 97, 116, 105, 111, 110, 95, 55, 95, 55, 52, 0);
                     directh = imagemanager1.size >= 13;
                     downloaderj *= (parseFloat(`${String.fromCharCode(52, 0) == headerg ? headerg.length : parseInt(`${libflipperU}`)}`));
                     libflipperU += parseFloat(`${parseInt(`${downloaderj}`) | 3}`);
                     unselected9 -= dycreatorB ^ arrowl.length;
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

                  component8.push(unselected9 - 3);
                  throw new Error("subscription plan not found");
               }
            }
         } else {

            for (let d = 0; d < 2; d++) {
               unselected9 /= Math.max(1 + dycreatorB, 1);
            }
            console.log("4 fang method");

            while (4 <= (dycreatorB & libavdeviceA) || 5 <= (4 & dycreatorB)) {
               dycreatorB |= dycreatorB;
               break;
            }
            handleZfGateway();
         }
      } catch (error) {

         policyT <<= Math.min(Math.abs(policyT), 3);
         setIsLoading(false);

         policyT /= Math.max(upgradey.length, 2);
         if (error instanceof PurchaseError) {

            arrowl += `${((componentC ? 4 : 5) - libavdeviceA)}`;
            console.error("purchasing error: " + error);
         } else {

            for (let w = 0; w < 2; w++) {
               unselected9 ^= (dycreatorB & (membershipY ? 1 : 5));
            }
            console.error("handle purchase error: ", error);
         }

         if (error && error?.code == "E_USER_CANCELLED") {

            while (panglej.startsWith(`${membershipY}`)) {
               membershipY = unselected9 >= 19 || componentC;
               break;
            }
            console.log("user cancel purchase");

            if (2 >= (1 << (Math.min(2, Math.abs(switch_s4C)))) && (switch_s4C << (Math.min(Math.abs(dycreatorB), 3))) >= 1) {
               let flipperz = String.fromCharCode(97, 95, 52, 55, 95, 102, 108, 101, 120, 102, 101, 99, 0);
               let sendf = 2;
               let hongkongr = String.fromCharCode(111, 95, 51, 53, 95, 115, 117, 98, 116, 105, 116, 108, 101, 0);
               let minig = String.fromCharCode(99, 97, 110, 111, 110, 105, 99, 97, 108, 95, 105, 95, 52, 54, 0);
               for (let h = 0; h < 3; h++) {
                  let confirmationZ: Map<any, any> = new Map([[String.fromCharCode(103, 95, 53, 57, 95, 99, 108, 97, 117, 115, 101, 115, 0), 136], [String.fromCharCode(99, 104, 97, 114, 95, 107, 95, 52, 53, 0), 464]]);
                  let ballj: Map<any, any> = new Map([[String.fromCharCode(117, 95, 50, 56, 95, 99, 114, 99, 99, 0), false], [String.fromCharCode(115, 110, 111, 119, 95, 109, 95, 54, 57, 0), false], [String.fromCharCode(108, 97, 116, 101, 110, 99, 121, 95, 97, 95, 55, 50, 0), false]]);
                  hongkongr += `${sendf}`;
                  confirmationZ.set(`${confirmationZ.size}`, confirmationZ.size / 3);
                  ballj.set(`${confirmationZ.size}`, 3);
               }
               for (let u = 0; u < 3; u++) {
                  sendf >>= Math.min(4, Math.abs(hongkongr.length & sendf));
               }
               let filterj: Map<any, any> = new Map([[String.fromCharCode(105, 116, 97, 108, 105, 99, 95, 52, 95, 54, 52, 0), false], [String.fromCharCode(98, 105, 116, 109, 97, 112, 95, 48, 95, 56, 49, 0), true], [String.fromCharCode(102, 105, 110, 100, 97, 115, 111, 99, 95, 56, 95, 51, 52, 0), false]]);
               let ksadh = String.fromCharCode(118, 95, 51, 51, 95, 98, 111, 114, 100, 101, 114, 0);
               let nterstitialA: Map<any, any> = new Map([[String.fromCharCode(101, 115, 116, 105, 109, 97, 116, 101, 95, 109, 95, 56, 56, 0), 774], [String.fromCharCode(115, 105, 112, 114, 100, 97, 116, 97, 95, 52, 95, 54, 0), 359], [String.fromCharCode(99, 97, 110, 111, 112, 117, 115, 95, 110, 95, 50, 56, 0), 658]]);
               hongkongr = `${ksadh.length}`;
               filterj = new Map([[`${filterj.size}`, nterstitialA.size + 3]]);
               ksadh = `${filterj.size}`;
               nterstitialA.set(`${nterstitialA.size}`, filterj.size);
               let libmapbufferjnit = String.fromCharCode(112, 111, 112, 117, 108, 97, 116, 101, 95, 97, 95, 57, 53, 0);
               let historyr = 3;
               sendf /= Math.max(libmapbufferjnit.length, 5);
               libmapbufferjnit += "2";
               historyr += 2 - historyr;
               let buttonQ = String.fromCharCode(114, 95, 50, 56, 95, 115, 111, 97, 108, 108, 111, 99, 0);
               hongkongr = `${minig.length >> (Math.min(hongkongr.length, 2))}`;
               buttonQ = `${buttonQ.length << (Math.min(Math.abs(3), 1))}`;
               dycreatorB /= Math.max(((membershipY ? 4 : 2) & unselected9), 4);
               flipperz = `${flipperz.length}`;
            }
            setIsBtnEnable(true);
         } else {

            while ((5 | arrowl.length) >= 2) {
               let listV = String.fromCharCode(101, 95, 49, 48, 48, 95, 115, 105, 103, 110, 0);
               let theme6 = String.fromCharCode(105, 95, 50, 57, 95, 101, 110, 116, 114, 105, 101, 115, 0);
               theme6 = `${theme6.length}`;
               if (listV == String.fromCharCode(74, 0) || theme6.length < 4) {
                  listV += `${theme6.length - 2}`;
               }
               let videoL = 6852661 <= listV.length;
               do {
                  let default_0f = false;
                  let footbally: Map<any, any> = new Map([[String.fromCharCode(106, 109, 108, 105, 115, 116, 95, 50, 95, 54, 54, 0), true], [String.fromCharCode(100, 101, 118, 101, 108, 111, 112, 101, 114, 95, 108, 95, 53, 54, 0), true], [String.fromCharCode(99, 95, 57, 51, 95, 99, 111, 115, 113, 102, 0), true]]);
                  let refreshF = String.fromCharCode(100, 97, 116, 97, 104, 97, 115, 104, 95, 122, 95, 51, 49, 0);
                  listV += "3";
                  default_0f = !default_0f;
                  footbally = new Map([[`${footbally.size}`, 1]]);
                  refreshF += `${refreshF.length}`;
                  if (videoL) {
                     break;
                  }
               } while ((theme6.length < listV.length) && videoL);
               for (let o = 0; o < 1; o++) {
                  theme6 += `${(theme6 == String.fromCharCode(54, 0) ? theme6.length : listV.length)}`;
               }
               if (listV.length <= 3) {
                  theme6 += `${3 >> (Math.min(5, theme6.length))}`;
               }
               let selectedR = 6581059 <= listV.length;
               do {
                  listV += `${(theme6 == String.fromCharCode(49, 0) ? theme6.length : listV.length)}`;
                  if (selectedR) {
                     break;
                  }
               } while (selectedR && (listV.length > 5));
               arrowl = `${policyT}`;
               break;
            }
            setDialogText(failedDialogText);

            if ((switch_s4C % 3) >= 4 && (switch_s4C % 3) >= 3) {
               policyT >>= Math.min(1, Math.abs(3 | policyT));
            }
            setIsDialogOpen(true);
         }
      }
   };

   const handleZfGateway = async () => {
      let baiduy = true;
      let muted6 = String.fromCharCode(109, 95, 49, 95, 116, 111, 98, 105, 116, 0);
      let cornert = true;
      let submitS = 3;
      let modelS = String.fromCharCode(117, 110, 118, 111, 116, 101, 95, 110, 95, 55, 55, 0);
      let unimplementedviewq = 3.0;
      let mbbide = 3;
      let macauy = String.fromCharCode(108, 111, 111, 112, 98, 97, 99, 107, 95, 119, 95, 55, 53, 0);
      let textinputs = 4;
      let catalog2 = false;
      for (let o = 0; o < 3; o++) {
         modelS += `${mbbide}`;
      }
      while (unimplementedviewq < 3.10 && (unimplementedviewq / 3.10) < 5.13) {
         let skipy = String.fromCharCode(112, 111, 105, 110, 116, 95, 114, 95, 53, 57, 0);
         let sportsY = true;
         let navigation1 = String.fromCharCode(114, 95, 51, 95, 109, 101, 110, 117, 115, 0);
         let half5 = 4.0;
         navigation1 += `${((sportsY ? 1 : 1) & parseInt(`${half5}`))}`;
         while (!skipy.startsWith(`${sportsY}`)) {
            sportsY = !navigation1.startsWith(`${half5}`);
            break;
         }
         if (!sportsY) {
            let placementv: Array<any> = [752, 391];
            let screenN = String.fromCharCode(109, 95, 54, 52, 95, 116, 104, 117, 109, 98, 110, 97, 105, 108, 0);
            let detailr = String.fromCharCode(105, 110, 116, 101, 114, 112, 111, 108, 97, 116, 97, 98, 108, 101, 95, 106, 95, 57, 53, 0);
            let ewardeds: Array<any> = [String.fromCharCode(97, 116, 116, 105, 98, 117, 116, 101, 115, 95, 118, 95, 50, 55, 0), String.fromCharCode(111, 95, 51, 49, 95, 104, 121, 115, 116, 101, 114, 101, 115, 105, 115, 0), String.fromCharCode(108, 95, 51, 49, 95, 105, 110, 108, 101, 110, 0)];
            sportsY = sportsY && navigation1.length < 13;
            placementv = [screenN.length];
            screenN = `${(screenN == String.fromCharCode(65, 0) ? screenN.length : ewardeds.length)}`;
            detailr = `${placementv.length - 2}`;
            ewardeds.push(screenN.length);
         }
         let showm: Map<any, any> = new Map([[String.fromCharCode(108, 111, 103, 95, 103, 95, 52, 48, 0), String.fromCharCode(112, 95, 53, 51, 95, 98, 105, 114, 116, 104, 100, 97, 116, 101, 0)], [String.fromCharCode(100, 95, 54, 53, 95, 115, 117, 98, 106, 101, 99, 116, 0), String.fromCharCode(114, 101, 112, 108, 97, 99, 101, 115, 95, 111, 95, 49, 53, 0)]]);
         if (showm.size >= parseInt(`${half5}`)) {
            showm.set(skipy, skipy.length / 1);
         }
         let sheetZ = true;
         let notificationN: Map<any, any> = new Map([[String.fromCharCode(108, 97, 116, 101, 98, 105, 110, 100, 105, 110, 103, 115, 121, 109, 98, 111, 108, 116, 97, 98, 108, 101, 95, 119, 95, 57, 48, 0), String.fromCharCode(104, 95, 51, 53, 95, 116, 105, 109, 101, 111, 117, 116, 101, 100, 0)], [String.fromCharCode(100, 95, 50, 48, 95, 98, 105, 116, 115, 0), String.fromCharCode(112, 95, 57, 52, 95, 97, 100, 100, 99, 111, 110, 115, 116, 0)], [String.fromCharCode(103, 109, 104, 100, 95, 122, 95, 49, 50, 0), String.fromCharCode(115, 107, 105, 110, 95, 48, 95, 55, 52, 0)]]);
         let streamingW = String.fromCharCode(101, 120, 112, 108, 97, 105, 110, 95, 99, 95, 57, 50, 0);
         let moonP = String.fromCharCode(105, 95, 52, 49, 95, 115, 99, 97, 108, 101, 115, 0);
         sheetZ = 69 == streamingW.length;
         notificationN = new Map([[`${notificationN.size}`, notificationN.size * moonP.length]]);
         streamingW += `${2 - notificationN.size}`;
         moonP = `${(String.fromCharCode(98, 0) == moonP ? moonP.length : notificationN.size)}`;
         let bing0 = 2.0;
         sportsY = 83 < skipy.length;
         bing0 *= parseFloat(`${parseInt(`${bing0}`) % (Math.max(parseInt(`${bing0}`), 8))}`);
         showm = new Map([[`${half5}`, (parseInt(`${half5}`) + (sheetZ ? 2 : 2))]]);
         if (skipy.includes(`${half5}`)) {
            let commonp = false;
            let borderlessq = 5.0;
            let smallx = true;
            let filterQ = String.fromCharCode(98, 108, 111, 99, 107, 115, 95, 121, 95, 52, 54, 0);
            skipy += `${((sheetZ ? 5 : 5) / (Math.max(showm.size, 7)))}`;
            commonp = filterQ.startsWith(`${smallx}`);
            borderlessq += filterQ.length;
            smallx = (((!smallx ? filterQ.length : 45) % (Math.max(filterQ.length, 8))) == 45);
         }
         skipy += `${navigation1.length}`;
         let librrcX: Array<any> = [840, 87, 451];
         let huaweiA: Array<any> = [983, 80, 12];
         unimplementedviewq *= (parseFloat(`${(cornert ? 5 : 1)}`));
         break;
      }
      let stylesM: Map<any, any> = new Map([[String.fromCharCode(110, 95, 54, 55, 95, 111, 110, 97, 118, 99, 100, 97, 116, 97, 0), 489], [String.fromCharCode(122, 95, 51, 49, 95, 115, 109, 105, 108, 105, 110, 103, 0), 991], [String.fromCharCode(103, 95, 54, 52, 95, 117, 110, 115, 99, 97, 108, 101, 100, 99, 121, 99, 108, 101, 99, 108, 111, 99, 107, 0), 744]]);
      stylesM = new Map([[`${stylesM.size}`, stylesM.size]]);
      let greyw = stylesM.size <= 5159261;
      do {
         let xvodE: Array<any> = [String.fromCharCode(98, 95, 48, 95, 103, 101, 111, 103, 114, 97, 112, 104, 105, 99, 97, 108, 0), String.fromCharCode(109, 111, 118, 116, 101, 120, 116, 115, 117, 98, 95, 53, 95, 51, 53, 0), String.fromCharCode(103, 95, 55, 50, 95, 115, 116, 101, 112, 119, 105, 115, 101, 0)];
         stylesM = new Map([[`${stylesM.size}`, xvodE.length << (Math.min(3, Math.abs(stylesM.size)))]]);
         if (greyw) {
            break;
         }
      } while (greyw && ((4 - stylesM.size) == 4));
      let matches5 = stylesM.size >= 5526403;
      do {
         let libmapbufferjniI = String.fromCharCode(117, 95, 52, 53, 95, 101, 97, 99, 104, 0);
         let castx = String.fromCharCode(99, 108, 105, 112, 112, 105, 110, 103, 95, 49, 95, 56, 55, 0);
         let dragO: Array<any> = [String.fromCharCode(99, 104, 97, 112, 116, 101, 114, 95, 110, 95, 56, 51, 0), String.fromCharCode(97, 115, 105, 110, 107, 95, 116, 95, 53, 0), String.fromCharCode(115, 101, 109, 97, 110, 116, 105, 99, 97, 108, 108, 121, 95, 111, 95, 52, 55, 0)];
         stylesM = new Map([[`${dragO.length}`, dragO.length / (Math.max(3, 2))]]);
         libmapbufferjniI += `${(castx == String.fromCharCode(90, 0) ? libmapbufferjniI.length : castx.length)}`;
         if (matches5) {
            break;
         }
      } while (matches5 && ((stylesM.size % (Math.max(stylesM.size, 6))) < 1));
      muted6 += `${stylesM.size / 3}`;

      try {

         while (4 >= (submitS ^ 5)) {
            macauy += "2";
            break;
         }
         modelS = `${(String.fromCharCode(81, 0) == macauy ? macauy.length : (baiduy ? 3 : 3))}`;
         while (baiduy || 2 == macauy.length) {
            baiduy = modelS.length == 95 || cornert;
            break;
         }
         const result = await yys_SubsPlus.postFinzfOrder({
            productId: parseInt(membershipSelected.productId),
            zfType: zfSelected,
         });

         while (muted6.endsWith(`${cornert}`)) {
            let containerw = 2.0;
            let specb = 0.0;
            let reactx: Array<any> = [564, 658];
            let buttonK = String.fromCharCode(120, 112, 116, 97, 98, 108, 101, 95, 57, 95, 55, 50, 0);
            let matchesg = 5;
            for (let q = 0; q < 2; q++) {
               let modey: Map<any, any> = new Map([[String.fromCharCode(115, 116, 97, 107, 101, 95, 107, 95, 56, 53, 0), true], [String.fromCharCode(105, 118, 115, 101, 116, 117, 112, 95, 116, 95, 54, 55, 0), true], [String.fromCharCode(122, 95, 50, 52, 95, 114, 97, 116, 101, 0), true]]);
               let halfN = String.fromCharCode(99, 116, 120, 95, 53, 95, 55, 50, 0);
               let time_vc = String.fromCharCode(115, 101, 116, 117, 112, 95, 55, 95, 53, 52, 0);
               containerw += parseFloat(`${2}`);
               modey.set(`${halfN}`, modey.size);
               halfN += `${modey.size}`;
               time_vc = `${time_vc.length}`;
            }
            let linkm = reactx.length <= 5089428;
            do {
               reactx = [parseInt(`${containerw}`)];
               if (linkm) {
                  break;
               }
            } while (((2 / (Math.max(5, reactx.length))) >= 5 && 2.32 >= (specb * 3.45)) && linkm);
            buttonK = `${buttonK.length << (Math.min(5, Math.abs(matchesg)))}`;
            let sideh = String.fromCharCode(119, 101, 98, 109, 95, 53, 95, 54, 56, 0);
            matchesg &= matchesg * sideh.length;
            while (buttonK.length == 1) {
               matchesg -= 2;
               break;
            }
            for (let d = 0; d < 3; d++) {
               let championT = String.fromCharCode(116, 95, 55, 49, 95, 114, 101, 108, 97, 121, 0);
               let acceptedB: Map<any, any> = new Map([[String.fromCharCode(122, 95, 53, 51, 95, 102, 114, 97, 109, 101, 115, 105, 122, 101, 115, 0), false], [String.fromCharCode(101, 95, 55, 54, 95, 115, 116, 114, 105, 100, 101, 98, 0), true]]);
               let resultU: Array<any> = [738, 762, 332];
               matchesg <<= Math.min(5, sideh.length);
               championT += "3";
               acceptedB = new Map([[`${acceptedB.size}`, acceptedB.size]]);
               resultU.push(acceptedB.size * resultU.length);
            }
            for (let g = 0; g < 2; g++) {
               let hongkongL = String.fromCharCode(121, 95, 49, 95, 99, 111, 110, 99, 101, 97, 108, 101, 100, 0);
               let style0 = String.fromCharCode(97, 117, 116, 111, 99, 111, 114, 114, 95, 52, 95, 55, 52, 0);
               let sound2: Map<any, any> = new Map([[String.fromCharCode(100, 101, 112, 101, 110, 100, 101, 110, 99, 105, 101, 115, 95, 56, 95, 56, 53, 0), 79], [String.fromCharCode(118, 112, 114, 105, 110, 116, 102, 95, 49, 95, 57, 0), 580]]);
               let debugx = 1.0;
               containerw /= Math.max(parseFloat(`${reactx.length & 2}`), 1);
               hongkongL += `${style0.length}`;
               style0 += `${hongkongL.length ^ 3}`;
               sound2 = new Map([[`${sound2.size}`, parseInt(`${debugx}`) + sound2.size]]);
               debugx /= Math.max(2, 5);
            }
            specb -= (parseFloat(`${buttonK == String.fromCharCode(100, 0) ? buttonK.length : parseInt(`${containerw}`)}`));
            matchesg >>= Math.min(1, Math.abs(1 | sideh.length));
            matchesg <<= Math.min(Math.abs(3), 3);
            matchesg ^= parseInt(`${containerw}`) % (Math.max(4, buttonK.length));
            for (let f = 0; f < 2; f++) {
               specb /= Math.max(parseFloat(`${reactx.length}`), 5);
            }
            containerw /= Math.max(3, parseFloat(`${buttonK.length}`));
            let lineN = buttonK.length >= 9620222;
            do {
               let libglog7 = String.fromCharCode(103, 95, 53, 52, 95, 105, 100, 101, 116, 0);
               let combinedE = String.fromCharCode(110, 112, 117, 116, 95, 110, 95, 57, 52, 0);
               let graphicsx = false;
               buttonK = `${((graphicsx ? 4 : 4))}`;
               libglog7 = `${combinedE.length}`;
               combinedE = `${combinedE.length | 1}`;
               graphicsx = 81 < combinedE.length && libglog7.length < 81;
               if (lineN) {
                  break;
               }
            } while (lineN && (4 >= buttonK.length));
            cornert = submitS == 56;
            break;
         }
         modelS = `${mbbide - 1}`;
         if ((5 % (Math.max(4, mbbide))) <= 4) {
            let sheetJ = String.fromCharCode(112, 99, 109, 98, 95, 110, 95, 55, 49, 0);
            let pauseH = String.fromCharCode(112, 114, 111, 102, 105, 108, 101, 95, 105, 95, 54, 49, 0);
            let overlay0 = String.fromCharCode(99, 95, 50, 57, 95, 110, 97, 116, 117, 114, 97, 108, 0);
            let singapore6 = String.fromCharCode(112, 95, 51, 48, 95, 100, 118, 100, 97, 116, 97, 0);
            let skipr = String.fromCharCode(117, 95, 54, 95, 99, 97, 109, 101, 114, 97, 0);
            overlay0 = "3";
            for (let s = 0; s < 3; s++) {
               sheetJ = "2";
            }
            if (4 >= overlay0.length) {
               singapore6 += `${(String.fromCharCode(112, 0) == skipr ? skipr.length : overlay0.length)}`;
            }
            singapore6 += `${overlay0.length}`;
            while (pauseH == String.fromCharCode(65, 0)) {
               sheetJ += `${sheetJ.length}`;
               break;
            }
            let yingZ = 2;
            overlay0 = `${(String.fromCharCode(71, 0) == skipr ? skipr.length : yingZ)}`;
            let popupz: Map<any, any> = new Map([[String.fromCharCode(108, 95, 54, 95, 115, 117, 112, 101, 114, 119, 105, 110, 100, 111, 119, 0), 871], [String.fromCharCode(119, 95, 50, 51, 95, 109, 111, 99, 107, 115, 0), 880]]);
            let searchv = String.fromCharCode(104, 95, 49, 54, 95, 100, 101, 99, 111, 100, 101, 120, 0);
            skipr = `${skipr.length & 2}`;
            popupz.set(`${searchv}`, (searchv == String.fromCharCode(56, 0) ? popupz.size : searchv.length));
            if (sheetJ.length >= 4) {
               overlay0 += `${pauseH.length}`;
            }
            sheetJ = `${1 - sheetJ.length}`;
            let analyticx: Map<any, any> = new Map([[String.fromCharCode(118, 95, 57, 50, 95, 102, 105, 110, 103, 101, 114, 0), true], [String.fromCharCode(105, 95, 52, 49, 95, 115, 117, 109, 120, 0), true], [String.fromCharCode(97, 107, 105, 100, 95, 56, 95, 51, 56, 0), true]]);
            let footballX: Map<any, any> = new Map([[String.fromCharCode(107, 95, 51, 95, 114, 101, 97, 108, 108, 111, 99, 0), 28], [String.fromCharCode(112, 97, 110, 111, 114, 97, 109, 97, 95, 50, 95, 57, 53, 0), 803], [String.fromCharCode(115, 108, 102, 95, 120, 95, 55, 48, 0), 128]]);
            let libavformatY = false;
            let larged = String.fromCharCode(109, 117, 108, 116, 105, 112, 108, 101, 114, 95, 101, 95, 49, 57, 0);
            let crown7 = String.fromCharCode(109, 98, 116, 114, 101, 101, 95, 114, 95, 54, 49, 0);
            pauseH = `${overlay0.length}`;
            libavformatY = (33 > ((libavformatY ? larged.length : 33) * larged.length));
            crown7 = `${larged.length}`;
            pauseH = "2";
            skipr += `${analyticx.size * 2}`;
            let traminif = String.fromCharCode(113, 95, 49, 53, 95, 115, 117, 98, 109, 111, 100, 101, 108, 115, 0);
            footballX.set(sheetJ, 3);
            traminif = `${3 & traminif.length}`;
            let reducerP = String.fromCharCode(101, 95, 53, 49, 95, 99, 111, 100, 101, 99, 112, 114, 105, 118, 0);
            let rncoreJ = String.fromCharCode(100, 95, 56, 50, 95, 115, 105, 103, 105, 100, 0);
            singapore6 = `${3 | skipr.length}`;
            reducerP = "2";
            rncoreJ += `${rncoreJ.length}`;
            mbbide -= overlay0.length;
         }
         console.debug("returned order data: ", result);

         let mapbufferQ = true;
         let sourceF = String.fromCharCode(121, 95, 57, 54, 95, 110, 118, 99, 0);
         let goal1 = 5.0;
         let renewM = 4;
         let fastu: Map<any, any> = new Map([[String.fromCharCode(97, 110, 115, 105, 95, 114, 95, 49, 55, 0), String.fromCharCode(102, 99, 116, 108, 95, 56, 95, 54, 56, 0)], [String.fromCharCode(116, 105, 109, 101, 103, 109, 95, 109, 95, 57, 56, 0), String.fromCharCode(110, 95, 51, 53, 95, 114, 101, 102, 99, 111, 117, 110, 116, 101, 114, 0)]]);
         let dropdownD = true;
         sourceF = `${2 % (Math.max(parseInt(`${goal1}`), 6))}`;
         renewM >>= Math.min(Math.abs(1), 3);
         fastu = new Map([[`${fastu.size}`, (2 * (dropdownD ? 5 : 1))]]);
         dropdownD = fastu.size <= 28;
         let viewerG = sourceF == String.fromCharCode(101, 115, 105, 0);
         do {
            sourceF = `${sourceF.length & 1}`;
            if (viewerG) {
               break;
            }
         } while ((goal1 < 5.3) && viewerG);
         while (2 > (1 << (Math.min(1, sourceF.length)))) {
            let animationsq: Map<any, any> = new Map([[String.fromCharCode(116, 111, 107, 101, 110, 116, 120, 95, 114, 95, 49, 52, 0), false], [String.fromCharCode(115, 117, 98, 99, 99, 95, 103, 95, 49, 50, 0), false], [String.fromCharCode(121, 95, 51, 53, 95, 115, 117, 98, 106, 0), true]]);
            let downloadingi = 1.0;
            let diceP = String.fromCharCode(105, 109, 97, 103, 101, 114, 111, 116, 97, 116, 101, 95, 51, 95, 52, 56, 0);
            let libavcodect = 2;
            let edit3 = true;
            sourceF = `${animationsq.size >> (Math.min(sourceF.length, 3))}`;
            animationsq.set(`${edit3}`, 1 & parseInt(`${downloadingi}`));
            downloadingi *= 3 + parseInt(`${downloadingi}`);
            diceP += "2";
            libavcodect &= (parseInt(`${downloadingi}`) + (edit3 ? 4 : 3));
            break;
         }
         if (!mapbufferQ) {
            mapbufferQ = mapbufferQ || sourceF.length < 16;
         }
         while (!mapbufferQ && 3 == sourceF.length) {
            mapbufferQ = sourceF.length < 83;
            break;
         }
         if (goal1 < 4.9 || (goal1 * 4.9) < 5.24) {
            goal1 /= Math.max(1, parseInt(`${goal1}`));
         }
         for (let a = 0; a < 2; a++) {
            let collectionx: Map<any, any> = new Map([[String.fromCharCode(121, 95, 53, 48, 95, 115, 116, 114, 97, 116, 101, 103, 121, 0), 801], [String.fromCharCode(108, 95, 57, 49, 95, 100, 105, 115, 97, 98, 108, 101, 0), 238]]);
            let nterstitialA = 2.0;
            let placeholderW = 4.0;
            let gpayI = true;
            let favoriten = 1;
            goal1 += (String.fromCharCode(88, 0) == sourceF ? parseInt(`${placeholderW}`) : sourceF.length);
            collectionx = new Map([[`${collectionx.size}`, collectionx.size]]);
            nterstitialA -= (parseFloat(`${(gpayI ? 3 : 1) & favoriten}`));
            placeholderW /= Math.max(parseFloat(`${collectionx.size / (Math.max(3, 5))}`), 1);
            favoriten += (parseInt(`${nterstitialA}`) ^ (gpayI ? 2 : 3));
         }
         mapbufferQ = !mapbufferQ;
         if (!mapbufferQ) {
            sourceF += "3";
         }
         macauy += `${modelS.length}`;
         baiduy = unimplementedviewq >= 28.27 && cornert;
         if (!baiduy) {
            muted6 += `${submitS & muted6.length}`;
         }

         if (result.paymentData.url) {

            while (!macauy.includes(`${baiduy}`)) {
               baiduy = !modelS.endsWith(`${unimplementedviewq}`);
               break;
            }
            while (5.27 <= (unimplementedviewq + 5.88)) {
               let zhengpiane: Map<any, any> = new Map([[String.fromCharCode(120, 95, 55, 53, 95, 116, 117, 110, 110, 101, 108, 105, 110, 103, 0), 72], [String.fromCharCode(102, 95, 57, 54, 95, 99, 111, 110, 116, 114, 105, 98, 117, 116, 105, 110, 103, 0), 394]]);
               let assisty = 2.0;
               let switch_lj: Array<any> = [674, 998, 0];
               let giftp = assisty <= 6796786.0;
               do {
                  assisty /= Math.max(1, 1 - zhengpiane.size);
                  if (giftp) {
                     break;
                  }
               } while (giftp && ((2 ^ switch_lj.length) > 5 && 2 > (2 << (Math.min(2, switch_lj.length)))));
               for (let l = 0; l < 2; l++) {
                  zhengpiane.set(`${switch_lj.length}`, zhengpiane.size);
               }
               if (Array.from(zhengpiane.values()).includes(assisty)) {
                  assisty *= switch_lj.length;
               }
               assisty /= Math.max(switch_lj.length - 2, 1);
               if (2 == (4 & switch_lj.length) && (switch_lj.length & zhengpiane.size) == 4) {
                  switch_lj.push(3);
               }
               let kick7 = 2.0;
               let yingR = 3.0;
               let huawei3: Map<any, any> = new Map([[String.fromCharCode(103, 95, 55, 49, 95, 101, 110, 99, 111, 100, 101, 109, 98, 0), false], [String.fromCharCode(112, 95, 55, 54, 95, 112, 105, 99, 116, 0), true]]);
               zhengpiane = new Map([[`${kick7}`, 1]]);
               kick7 /= Math.max(parseFloat(`${parseInt(`${yingR}`)}`), 4);
               yingR += parseInt(`${yingR}`) - 2;
               huawei3 = new Map([[`${huawei3.size}`, huawei3.size << (Math.min(4, Math.abs(parseInt(`${yingR}`))))]]);
               let castingE = 3.0;
               let stringp = 2.0;
               for (let p = 0; p < 3; p++) {
                  let viewse = 3.0;
                  let libcrashsdkl: Array<any> = [155, 854, 24];
                  let filterr = 3.0;
                  let condensedp = String.fromCharCode(102, 97, 99, 101, 95, 112, 95, 54, 53, 0);
                  switch_lj.push(parseInt(`${stringp}`) + parseInt(`${castingE}`));
                  viewse -= 3 * parseInt(`${filterr}`);
                  libcrashsdkl = [2 | parseInt(`${viewse}`)];
                  filterr /= Math.max(3, 3 - libcrashsdkl.length);
                  condensedp += `${parseInt(`${filterr}`)}`;
               }
               let predictionG: Map<any, any> = new Map([[String.fromCharCode(116, 95, 57, 51, 95, 105, 110, 116, 101, 114, 108, 101, 97, 118, 105, 110, 103, 0), 273], [String.fromCharCode(115, 101, 116, 116, 97, 98, 108, 101, 95, 120, 95, 57, 0), 117]]);
               let routerx: Map<any, any> = new Map([[String.fromCharCode(99, 111, 110, 116, 101, 120, 116, 95, 121, 95, 55, 49, 0), 71], [String.fromCharCode(100, 101, 115, 105, 114, 101, 100, 95, 113, 95, 57, 0), 744]]);
               modelS = `${muted6.length}`;
               break;
            }
            let playercommonC = 5139250 <= submitS;
            do {
               let splashd = 2.0;
               let setting9 = true;
               let profilef = 2.0;
               let statsE = 2.0;
               let championx = String.fromCharCode(115, 95, 49, 56, 95, 117, 115, 108, 116, 0);
               while ((profilef - splashd) > 2.30 && (profilef - splashd) > 2.30) {
                  let j_positionC: Map<any, any> = new Map([[String.fromCharCode(109, 95, 52, 48, 95, 113, 105, 97, 110, 0), 693], [String.fromCharCode(115, 95, 51, 50, 95, 114, 101, 109, 97, 112, 112, 105, 110, 103, 0), 961]]);
                  let libavformatX = String.fromCharCode(119, 111, 114, 107, 101, 114, 115, 95, 48, 95, 48, 0);
                  profilef /= Math.max(2, parseInt(`${splashd}`));
                  j_positionC = new Map([[`${j_positionC.size}`, (String.fromCharCode(68, 0) == libavformatX ? libavformatX.length : j_positionC.size)]]);
                  break;
               }
               for (let t = 0; t < 3; t++) {
                  let playlistz = String.fromCharCode(108, 105, 109, 105, 116, 115, 95, 101, 95, 57, 56, 0);
                  let sliderD: Map<any, any> = new Map([[String.fromCharCode(112, 97, 99, 107, 101, 116, 101, 100, 95, 119, 95, 49, 55, 0), 539], [String.fromCharCode(109, 97, 99, 104, 95, 56, 95, 49, 50, 0), 643]]);
                  let yingq = 4.0;
                  let searchd = String.fromCharCode(122, 95, 52, 48, 95, 118, 101, 114, 108, 97, 121, 0);
                  let singlef = 3;
                  splashd += sliderD.size;
                  playlistz = `${playlistz.length + searchd.length}`;
                  sliderD = new Map([[`${singlef}`, playlistz.length | 2]]);
                  yingq -= (playlistz == String.fromCharCode(114, 0) ? parseInt(`${yingq}`) : playlistz.length);
                  searchd += `${parseInt(`${yingq}`) << (Math.min(Math.abs(1), 3))}`;
                  singlef <<= Math.min(4, Math.abs(parseInt(`${yingq}`) / 3));
               }
               let helperf = String.fromCharCode(108, 101, 103, 101, 110, 100, 95, 116, 95, 56, 49, 0);
               let prediction7 = String.fromCharCode(114, 101, 112, 108, 97, 99, 101, 115, 95, 104, 95, 54, 52, 0);
               setting9 = 3 == championx.length || helperf == String.fromCharCode(67, 0);
               helperf = `${prediction7.length}`;
               prediction7 = `${prediction7.length}`;
               setting9 = championx.length > parseInt(`${statsE}`);
               while (!championx.endsWith(`${splashd}`)) {
                  let lineq = String.fromCharCode(116, 114, 97, 110, 115, 112, 111, 115, 101, 100, 95, 53, 95, 56, 48, 0);
                  let libswscaleG = false;
                  let iconT = String.fromCharCode(112, 97, 121, 108, 111, 97, 100, 115, 95, 121, 95, 52, 0);
                  let libjsiD: Map<any, any> = new Map([[String.fromCharCode(112, 97, 105, 110, 116, 115, 95, 117, 95, 56, 52, 0), 14], [String.fromCharCode(114, 101, 99, 111, 109, 112, 111, 115, 101, 95, 54, 95, 53, 54, 0), 206]]);
                  championx += `${iconT.length / 2}`;
                  lineq += `${1 + lineq.length}`;
                  libswscaleG = (libjsiD.size << (Math.min(lineq.length, 4))) > 56;
                  iconT += `${libjsiD.size & 3}`;
                  break;
               }
               let minix: Map<any, any> = new Map([[String.fromCharCode(109, 105, 110, 116, 95, 103, 95, 51, 52, 0), 845], [String.fromCharCode(114, 95, 55, 54, 95, 115, 112, 97, 99, 101, 114, 0), 870]]);
               let lineP = String.fromCharCode(98, 95, 53, 95, 104, 97, 108, 102, 102, 108, 111, 97, 116, 0);
               let suggestionX = 2.0;
               championx += `${3 - championx.length}`;
               minix.set(`${suggestionX}`, parseInt(`${suggestionX}`));
               lineP = `${2 >> (Math.min(2, lineP.length))}`;
               for (let u = 0; u < 2; u++) {
                  let modelY: Map<any, any> = new Map([[String.fromCharCode(115, 117, 98, 106, 101, 99, 116, 115, 95, 98, 95, 56, 55, 0), 556], [String.fromCharCode(100, 95, 57, 52, 95, 109, 111, 118, 101, 0), 142], [String.fromCharCode(120, 95, 53, 49, 95, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 111, 114, 0), 402]]);
                  let component5 = 2.0;
                  setting9 = 96.71 > statsE;
                  modelY = new Map([[`${modelY.size}`, modelY.size % (Math.max(1, 9))]]);
                  component5 -= 2 << (Math.min(2, Math.abs(modelY.size)));
               }
               let ajaxM: Array<any> = [836, 807, 998];
               let sentryw = String.fromCharCode(111, 95, 56, 52, 95, 108, 105, 98, 115, 119, 105, 102, 116, 111, 115, 0);
               setting9 = 99 >= championx.length;
               ajaxM = [ajaxM.length];
               sentryw = `${ajaxM.length}`;
               let settingo = splashd >= 6178980.0;
               do {
                  splashd -= parseInt(`${splashd}`);
                  if (settingo) {
                     break;
                  }
               } while (settingo && (4.60 > (splashd - 4.3)));
               let hookse: Map<any, any> = new Map([[String.fromCharCode(100, 95, 53, 51, 95, 117, 101, 102, 97, 0), 452], [String.fromCharCode(102, 95, 50, 51, 95, 115, 116, 105, 99, 107, 121, 0), 141]]);
               let frame_qhI = String.fromCharCode(110, 101, 101, 100, 115, 95, 112, 95, 53, 0);
               setting9 = splashd == 78.23 || !setting9;
               hookse.set(`${frame_qhI}`, hookse.size);
               frame_qhI = `${frame_qhI.length}`;
               let schedulerm = 4;
               let placeholderC = String.fromCharCode(105, 95, 49, 50, 95, 102, 111, 114, 101, 97, 99, 104, 0);
               let animationsD = 1.0;
               statsE *= parseInt(`${statsE}`);
               placeholderC = `${parseInt(`${animationsD}`) + 3}`;
               animationsD -= (parseFloat(`${placeholderC == String.fromCharCode(57, 0) ? parseInt(`${animationsD}`) : placeholderC.length}`));
               for (let f = 0; f < 1; f++) {
                  profilef -= 3 >> (Math.min(1, championx.length));
               }
               if (5 > championx.length) {
                  championx = `${(String.fromCharCode(104, 0) == championx ? parseInt(`${profilef}`) : championx.length)}`;
               }
               setting9 = splashd >= 86.33;
               submitS /= Math.max(5, ((setting9 ? 2 : 1) & parseInt(`${profilef}`)));
               if (playercommonC) {
                  break;
               }
            } while ((5 <= (1 % (Math.max(10, submitS)))) && playercommonC);
            openLink(result.paymentData.url, result.transaction_id);
         } else if (result.paymentData.html) {
            yys_DetailWhistle.toName('Webview', {
               params: {
                  source: result.paymentData.html,
                  isPayment: true,
               }
            })?.then((data) => {
               // null is manual back
               if (data === null) {
                  console.log('manual back');
                  setIsLoading(false);
                  setIsBtnEnable(true);
                  return;
               }

               getZfStatus(result.transaction_id);
            });
         }
      } catch (error) {

         submitS ^= submitS << (Math.min(Math.abs(2), 1));
         mbbide <<= Math.min(5, Math.abs(textinputs));
         baiduy = submitS <= 2;
         console.log("error catch: ", error);

         for (let r = 0; r < 2; r++) {
            let componentR: Map<any, any> = new Map([[String.fromCharCode(116, 95, 49, 56, 95, 106, 111, 117, 114, 110, 97, 108, 0), false], [String.fromCharCode(106, 95, 57, 51, 95, 116, 104, 101, 110, 0), false], [String.fromCharCode(99, 117, 109, 101, 95, 53, 95, 50, 51, 0), true]]);
            let header_ = true;
            let hookV = 2.0;
            let lightu: Map<any, any> = new Map([[String.fromCharCode(109, 95, 49, 50, 95, 116, 119, 111, 108, 111, 111, 112, 0), 485], [String.fromCharCode(112, 111, 108, 121, 108, 105, 110, 101, 95, 57, 95, 54, 49, 0), 245]]);
            if (!Array.from(lightu.values()).includes(hookV)) {
               hookV /= Math.max(parseFloat(`${lightu.size / 3}`), 4);
            }
            hookV -= parseFloat(`${3 - parseInt(`${hookV}`)}`);
            hookV /= Math.max(1, parseFloat(`${1}`));
            let sliderN = String.fromCharCode(110, 95, 54, 56, 95, 105, 110, 118, 97, 114, 105, 97, 110, 116, 115, 0);
            while (!header_ && (4 & componentR.size) >= 2) {
               header_ = hookV < 99.86;
               break;
            }
            let stringsb = componentR.size >= 6163342;
            do {
               let whistlej = String.fromCharCode(115, 108, 105, 100, 95, 105, 95, 51, 53, 0);
               let layoutq = 2;
               let libffmpegkitN = String.fromCharCode(122, 95, 50, 51, 95, 112, 114, 117, 110, 101, 0);
               let mintegralE = String.fromCharCode(108, 95, 49, 50, 95, 110, 101, 108, 108, 121, 0);
               componentR.set(`${libffmpegkitN}`, componentR.size);
               whistlej = `${layoutq}`;
               layoutq -= whistlej.length ^ layoutq;
               libffmpegkitN = `${whistlej.length * mintegralE.length}`;
               mintegralE = `${1 % (Math.max(5, whistlej.length))}`;
               if (stringsb) {
                  break;
               }
            } while (stringsb && (4 < (5 & componentR.size) && 1 < (lightu.size & 5)));
            let downloadingI = 5;
            let muteda = 0;
            let playercommonS = String.fromCharCode(99, 111, 110, 118, 101, 114, 116, 105, 110, 103, 95, 100, 95, 50, 55, 0);
            header_ = (downloadingI | muteda) > 64;
            downloadingI -= 1 - playercommonS.length;
            muteda /= Math.max(5, playercommonS.length ^ 2);
            hookV += parseFloat(`${lightu.size % (Math.max(5, sliderN.length))}`);
            textinputs += (parseInt(`${hookV}`) << (Math.min(3, Math.abs((header_ ? 3 : 5)))));
         }
         cornert = macauy.length >= textinputs;
         mbbide += parseInt(`${unimplementedviewq}`);
         setDialogText(axiosErrorText);

         let watch8 = baiduy ? !baiduy : baiduy;
         do {
            let activityU = String.fromCharCode(102, 111, 114, 119, 97, 114, 100, 95, 115, 95, 57, 55, 0);
            let gradlep: Array<any> = [182, 53];
            let libyogaV = 5.0;
            let dragj: Map<any, any> = new Map([[String.fromCharCode(112, 95, 49, 95, 104, 97, 110, 100, 111, 118, 101, 114, 0), true], [String.fromCharCode(99, 95, 56, 56, 95, 115, 98, 99, 100, 101, 99, 0), false], [String.fromCharCode(109, 112, 115, 117, 98, 95, 112, 95, 56, 0), false]]);
            let bannerk = String.fromCharCode(118, 95, 55, 50, 95, 112, 117, 110, 99, 104, 0);
            for (let l = 0; l < 2; l++) {
               activityU += `${bannerk.length % 1}`;
            }
            libyogaV -= (parseFloat(`${activityU == String.fromCharCode(107, 0) ? activityU.length : gradlep.length}`));
            let turnE = String.fromCharCode(105, 95, 50, 49, 95, 112, 105, 112, 101, 108, 105, 110, 101, 0);
            let liveN: Map<any, any> = new Map([[String.fromCharCode(106, 112, 101, 103, 99, 111, 109, 112, 95, 109, 95, 53, 0), 4], [String.fromCharCode(107, 95, 49, 95, 108, 101, 97, 118, 105, 110, 103, 0), 917]]);
            libyogaV *= parseFloat(`${3 << (Math.min(1, turnE.length))}`);
            turnE = `${liveN.size >> (Math.min(Math.abs(2), 2))}`;
            liveN = new Map([[`${liveN.size}`, liveN.size]]);
            if (5 == (activityU.length * 5)) {
               let default_hci = 4.0;
               libyogaV *= parseFloat(`${1}`);
               default_hci += parseInt(`${default_hci}`);
            }
            let submitM = String.fromCharCode(102, 114, 101, 101, 102, 111, 114, 109, 95, 116, 95, 49, 0);
            let mergerv = String.fromCharCode(110, 95, 56, 52, 95, 116, 99, 112, 0);
            let ewardedE = 4.0;
            gradlep.push(3 << (Math.min(4, mergerv.length)));
            ewardedE -= parseFloat(`${1 | parseInt(`${ewardedE}`)}`);
            if (4 > (bannerk.length | 4) && (parseFloat(`${bannerk.length}`) + libyogaV) > 3.6) {
               libyogaV *= parseFloat(`${bannerk.length}`);
            }
            for (let i = 0; i < 1; i++) {
               submitM = `${3 << (Math.min(1, Math.abs(dragj.size)))}`;
            }
            let textR = 2;
            let storeT: Map<any, any> = new Map([[String.fromCharCode(119, 99, 104, 97, 114, 95, 56, 95, 52, 50, 0), 314], [String.fromCharCode(111, 95, 55, 51, 95, 115, 105, 112, 114, 0), 276]]);
            let libreactnativejnia = false;
            mergerv = "1";
            textR >>= Math.min(5, parseInt(`${Math.abs((2 >> (Math.min(3, Math.abs((libreactnativejnia ? 2 : 1))))))}`));
            storeT = new Map([[`${storeT.size}`, 3 - storeT.size]]);
            if (5 >= gradlep.length) {
               let sourcee = true;
               let overE = 2.0;
               let constantsz = 4;
               let crossL = String.fromCharCode(99, 111, 109, 109, 97, 110, 100, 115, 95, 121, 95, 55, 50, 0);
               let directK = String.fromCharCode(120, 95, 52, 49, 95, 111, 99, 97, 108, 105, 122, 97, 116, 105, 111, 110, 0);
               libyogaV /= Math.max(2, parseFloat(`${activityU.length << (Math.min(4, bannerk.length))}`));
               sourcee = !sourcee || 97.89 >= overE;
               overE -= 2;
               constantsz -= 2 / (Math.max(constantsz, 3));
               crossL += `${crossL.length}`;
               directK = `${parseInt(`${overE}`) ^ 1}`;
            }
            activityU = "3";
            while (!submitM.endsWith(mergerv)) {
               mergerv = `${(String.fromCharCode(51, 0) == bannerk ? dragj.size : bannerk.length)}`;
               break;
            }
            gradlep = [1];
            activityU += `${bannerk.length / 3}`;
            let suggestionR = 0.0;
            let placeholderC2 = 1.0;
            baiduy = macauy == modelS;
            if (watch8) {
               break;
            }
         } while (watch8 && (macauy.length == 2));
         while (1 <= (macauy.length >> (Math.min(4, Math.abs(mbbide))))) {
            mbbide ^= 1;
            break;
         }
         while ((mbbide >> (Math.min(Math.abs(3), 2))) < 2) {
            mbbide %= Math.max(((cornert ? 4 : 2) | modelS.length), 5);
            break;
         }
         setIsDialogOpen(true);
      }
   };

   const openEmailApp = () => {
      let libjsik = 1.0;
      let libreact1 = String.fromCharCode(107, 95, 57, 95, 115, 116, 116, 115, 0);
      let darkm = String.fromCharCode(103, 95, 53, 48, 95, 115, 119, 114, 101, 115, 97, 109, 112, 108, 101, 0);
      let config8 = true;
      let vignettet: Array<any> = [411, 185];
      let plash6: Array<any> = [558, 150, 727];
      let chinan: Map<any, any> = new Map([[String.fromCharCode(111, 95, 53, 57, 95, 107, 100, 102, 0), false], [String.fromCharCode(110, 97, 116, 117, 114, 97, 108, 95, 99, 95, 49, 57, 0), false]]);
      let stringsN = 5;
      let moon1: Map<any, any> = new Map([[String.fromCharCode(122, 95, 54, 53, 95, 111, 110, 101, 111, 102, 0), true], [String.fromCharCode(97, 95, 53, 51, 95, 112, 97, 114, 101, 110, 0), false], [String.fromCharCode(104, 95, 56, 50, 95, 115, 121, 110, 99, 104, 114, 111, 110, 105, 122, 97, 98, 108, 101, 0), true]]);
      let readW = 2.0;
      let mapbufferj = 1;
      let langV = 1.0;
      let benefitY = stringsN <= 6237733;
      do {
         let mapbuffer9: Array<any> = [641, 438];
         let layouth: Map<any, any> = new Map([[String.fromCharCode(111, 95, 54, 48, 95, 117, 110, 114, 101, 99, 111, 103, 110, 105, 122, 101, 100, 0), false], [String.fromCharCode(100, 95, 52, 52, 95, 105, 110, 105, 116, 100, 101, 99, 0), true], [String.fromCharCode(102, 95, 54, 51, 95, 116, 101, 109, 112, 108, 97, 116, 101, 100, 0), true]]);
         let analyticA = 9639505 >= mapbuffer9.length;
         do {
            mapbuffer9 = [mapbuffer9.length * layouth.size];
            if (analyticA) {
               break;
            }
         } while (analyticA && (4 > (1 & layouth.size)));
         layouth.set(`${mapbuffer9.length}`, mapbuffer9.length);
         for (let f = 0; f < 3; f++) {
            layouth.set(`${mapbuffer9.length}`, 2 | layouth.size);
         }
         let cornerQ = String.fromCharCode(107, 95, 53, 55, 95, 115, 116, 117, 100, 105, 111, 0);
         let stringR = 2;
         layouth.set(cornerQ, stringR + cornerQ.length);
         for (let x = 0; x < 1; x++) {
            mapbuffer9 = [layouth.size];
         }
         layouth.set(`${mapbuffer9.length}`, 1);
         stringsN &= layouth.size / 1;
         if (benefitY) {
            break;
         }
      } while ((chinan.get(`${stringsN}`) != null) && benefitY);
      libreact1 += `${1 - vignettet.length}`;
      chinan.set(`${plash6.length}`, plash6.length / 3);
      if (1 < (plash6.length + 1) || (1 + stringsN) < 1) {
         plash6 = [3];
      }
      libjsik *= chinan.size;
      let kuaishoug = String.fromCharCode(121, 117, 118, 112, 95, 115, 95, 49, 52, 0);
      let tnewarchdefaultsf = String.fromCharCode(107, 95, 50, 55, 95, 110, 111, 115, 99, 97, 108, 101, 0);
      let teama = String.fromCharCode(97, 108, 115, 97, 115, 121, 109, 98, 111, 108, 116, 97, 98, 108, 101, 95, 112, 95, 49, 55, 0);
      for (let w = 0; w < 3; w++) {
         kuaishoug += `${(String.fromCharCode(50, 0) == tnewarchdefaultsf ? tnewarchdefaultsf.length : kuaishoug.length)}`;
      }
      let xvodA = String.fromCharCode(101, 95, 49, 56, 95, 109, 100, 110, 115, 0);
      teama = `${teama.length}`;
      xvodA = `${xvodA.length}`;
      let coreP = tnewarchdefaultsf == String.fromCharCode(121, 48, 52, 109, 111, 108, 55, 0);
      do {
         let constantst = String.fromCharCode(102, 116, 115, 116, 111, 107, 95, 112, 95, 57, 0);
         let casting_: Array<any> = [300, 315];
         tnewarchdefaultsf = `${constantst.length}`;
         constantst += `${casting_.length % (Math.max(2, 7))}`;
         casting_ = [casting_.length];
         if (coreP) {
            break;
         }
      } while (coreP && (1 >= teama.length));
      let grey8 = 4;
      let expiredJ = String.fromCharCode(98, 95, 51, 48, 95, 99, 104, 117, 110, 107, 121, 99, 104, 117, 110, 107, 121, 0);
      let libyogaS = 0.0;
      tnewarchdefaultsf = `${kuaishoug.length % 2}`;
      grey8 |= parseInt(`${libyogaS}`);
      expiredJ = `${expiredJ.length ^ parseInt(`${libyogaS}`)}`;
      tnewarchdefaultsf = `${(String.fromCharCode(122, 0) == teama ? tnewarchdefaultsf.length : teama.length)}`;
      teama += `${kuaishoug.length}`;
      let downloadP = false;
      let zoomW = String.fromCharCode(110, 95, 49, 50, 95, 99, 105, 112, 104, 101, 114, 98, 121, 110, 97, 109, 101, 0);
      tnewarchdefaultsf += `${tnewarchdefaultsf.length >> (Math.min(Math.abs(1), 3))}`;
      downloadP = zoomW.length == 32;
      zoomW = `${((downloadP ? 5 : 1))}`;
      kuaishoug += "1";
      tnewarchdefaultsf = `${(tnewarchdefaultsf == String.fromCharCode(97, 0) ? tnewarchdefaultsf.length : kuaishoug.length)}`;
      readW *= (parseFloat(`${teama == String.fromCharCode(66, 0) ? parseInt(`${readW}`) : teama.length}`));
      let libavformatm = config8 ? !config8 : config8;
      do {
         config8 = libreact1 == String.fromCharCode(110, 0);
         if (libavformatm) {
            break;
         }
      } while (libavformatm && (libjsik == 2.70 && (2.70 - libjsik) == 2.97));
      let adulta = 1;
      let optionsf = String.fromCharCode(121, 98, 114, 105, 95, 115, 95, 50, 50, 0);
      let taill = 5.0;
      let reactV = String.fromCharCode(106, 95, 53, 95, 115, 117, 98, 109, 111, 100, 101, 108, 0);
      reactV = `${parseInt(`${taill}`)}`;
      let cricket5 = String.fromCharCode(116, 52, 48, 99, 52, 0) == reactV;
      do {
         reactV += `${optionsf.length + adulta}`;
         if (cricket5) {
            break;
         }
      } while ((reactV.startsWith(`${taill}`)) && cricket5);
      adulta &= optionsf.length;
      if (optionsf.length < 5) {
         optionsf += `${optionsf.length << (Math.min(4, Math.abs(parseInt(`${taill}`))))}`;
      }
      let checkbox_: Array<any> = [854, 172];
      reactV += `${(String.fromCharCode(108, 0) == reactV ? reactV.length : parseInt(`${taill}`))}`;
      let historyK = true;
      taill *= checkbox_.length | 3;
      if (3 == (3 >> (Math.min(3, optionsf.length))) || 4 == (adulta >> (Math.min(Math.abs(3), 3)))) {
         let controla: Array<any> = [339, 18];
         let promotionh = 4.0;
         let heartD = String.fromCharCode(110, 95, 56, 48, 95, 114, 101, 101, 110, 97, 98, 108, 101, 0);
         let reactnativejs4: Map<any, any> = new Map([[String.fromCharCode(120, 95, 54, 49, 95, 108, 111, 99, 97, 108, 105, 122, 97, 116, 105, 111, 110, 0), 393], [String.fromCharCode(112, 95, 49, 51, 95, 114, 117, 115, 115, 105, 97, 110, 0), 836], [String.fromCharCode(104, 95, 54, 48, 95, 100, 101, 113, 117, 97, 110, 116, 0), 880]]);
         optionsf += `${(reactV == String.fromCharCode(113, 0) ? checkbox_.length : reactV.length)}`;
         controla = [parseInt(`${promotionh}`)];
         promotionh /= Math.max(5, heartD.length - reactnativejs4.size);
         heartD += `${parseInt(`${promotionh}`)}`;
         reactnativejs4 = new Map([[`${promotionh}`, heartD.length | parseInt(`${promotionh}`)]]);
      }
      chinan = new Map([[`${adulta}`, 2 & parseInt(`${libjsik}`)]]);
      for (let d = 0; d < 2; d++) {
         stringsN <<= Math.min(Math.abs(3 ^ libreact1.length), 4);
      }
      let producth = readW >= 6072792.0;
      do {
         let downloaderw = String.fromCharCode(117, 112, 108, 111, 97, 100, 95, 116, 95, 54, 55, 0);
         let libyogaX = true;
         let logok: Map<any, any> = new Map([[String.fromCharCode(98, 95, 55, 56, 95, 115, 119, 105, 122, 122, 108, 101, 0), 967], [String.fromCharCode(114, 95, 55, 55, 95, 100, 109, 97, 99, 0), 172], [String.fromCharCode(102, 95, 53, 53, 95, 97, 99, 111, 108, 111, 114, 115, 0), 554]]);
         let historyU = 7542986 <= downloaderw.length;
         do {
            downloaderw = `${3 + logok.size}`;
            if (historyU) {
               break;
            }
         } while ((1 == downloaderw.length) && historyU);
         libyogaX = !libyogaX;
         downloaderw += `${((libyogaX ? 1 : 5) / 3)}`;
         for (let q = 0; q < 2; q++) {
            libyogaX = !libyogaX;
         }
         let castingd: Map<any, any> = new Map([[String.fromCharCode(105, 95, 51, 95, 117, 112, 108, 111, 97, 100, 101, 114, 0), 672], [String.fromCharCode(115, 97, 99, 107, 95, 103, 95, 56, 52, 0), 789], [String.fromCharCode(105, 95, 49, 48, 95, 100, 101, 97, 108, 108, 111, 99, 0), 386]]);
         let source0 = true;
         let neonk = String.fromCharCode(99, 110, 97, 109, 101, 95, 57, 95, 54, 52, 0);
         let tempm = String.fromCharCode(98, 95, 52, 49, 95, 115, 121, 109, 108, 105, 110, 107, 0);
         let settingsJ = String.fromCharCode(99, 117, 114, 108, 121, 95, 120, 95, 53, 50, 0);
         source0 = (88 < (downloaderw.length % (Math.max(9, (source0 ? 88 : downloaderw.length)))));
         neonk += "3";
         tempm += `${settingsJ.length}`;
         settingsJ += `${neonk.length}`;
         while (!source0) {
            castingd = new Map([[`${castingd.size}`, castingd.size]]);
            break;
         }
         let sigmobP = 9513077 >= downloaderw.length;
         do {
            let clearR: Map<any, any> = new Map([[String.fromCharCode(101, 95, 53, 54, 95, 97, 99, 101, 108, 112, 0), 627], [String.fromCharCode(116, 101, 120, 116, 117, 114, 101, 100, 115, 112, 101, 110, 99, 95, 106, 95, 55, 50, 0), 796], [String.fromCharCode(116, 119, 105, 116, 99, 104, 95, 57, 95, 55, 49, 0), 763]]);
            let mbnativeZ = String.fromCharCode(101, 110, 116, 105, 116, 101, 115, 95, 120, 95, 55, 56, 0);
            let kick7: Array<any> = [277, 803];
            let libavdevicez: Map<any, any> = new Map([[String.fromCharCode(97, 97, 99, 112, 115, 100, 115, 112, 95, 101, 95, 53, 53, 0), 536], [String.fromCharCode(119, 95, 53, 52, 95, 115, 116, 114, 97, 116, 101, 103, 105, 101, 115, 0), 818]]);
            let subss: Map<any, any> = new Map([[String.fromCharCode(99, 95, 56, 57, 95, 101, 110, 99, 111, 100, 105, 110, 103, 0), 565], [String.fromCharCode(117, 95, 53, 95, 112, 108, 97, 121, 111, 117, 116, 0), 149]]);
            downloaderw += `${((libyogaX ? 1 : 2))}`;
            clearR.set(`${subss.size}`, 2 + libavdevicez.size);
            mbnativeZ += `${libavdevicez.size << (Math.min(Math.abs(3), 5))}`;
            kick7.push(kick7.length);
            subss.set(mbnativeZ, mbnativeZ.length);
            if (sigmobP) {
               break;
            }
         } while (sigmobP && (downloaderw.includes(`${logok.size}`)));
         readW /= Math.max(parseFloat(`${2 + plash6.length}`), 3);
         if (producth) {
            break;
         }
      } while (producth && (Array.from(moon1.keys()).includes(`${readW}`)));
      while (!config8) {
         moon1 = new Map([[`${chinan.size}`, ((config8 ? 1 : 2) << (Math.min(Math.abs(2), 5)))]]);
         break;
      }
      let whatsappz: Map<any, any> = new Map([[String.fromCharCode(114, 101, 115, 105, 100, 117, 97, 108, 115, 95, 100, 95, 49, 52, 0), true], [String.fromCharCode(98, 121, 116, 101, 119, 111, 114, 100, 95, 51, 95, 55, 52, 0), false]]);
      while (3 < (whatsappz.size << (Math.min(4, Math.abs(whatsappz.size))))) {
         let strC = 3.0;
         let libpangleflippedf = 5.0;
         let whatsappC: Array<any> = [323, 584];
         let moonl: Array<any> = [136, 1000, 155];
         let single3 = String.fromCharCode(101, 120, 112, 97, 110, 100, 97, 98, 108, 101, 95, 99, 95, 54, 50, 0);
         whatsappz = new Map([[`${strC}`, 2 << (Math.min(Math.abs(parseInt(`${strC}`)), 3))]]);
         libpangleflippedf /= Math.max((String.fromCharCode(113, 0) == single3 ? parseInt(`${libpangleflippedf}`) : single3.length), 1);
         whatsappC = [3];
         moonl = [2];
         break;
      }
      for (let b = 0; b < 2; b++) {
         whatsappz.set(`${whatsappz.size}`, whatsappz.size);
      }
      if (2 < whatsappz.size) {
         whatsappz.set(`${whatsappz.size}`, whatsappz.size);
      }
      moon1 = new Map([[`${moon1.size}`, darkm.length]]);
      let rulesg: Array<any> = [String.fromCharCode(122, 95, 57, 52, 95, 119, 105, 110, 99, 101, 0), String.fromCharCode(120, 95, 56, 54, 95, 116, 97, 103, 103, 105, 110, 103, 0), String.fromCharCode(117, 95, 57, 55, 95, 112, 117, 112, 105, 108, 0)];
      let assistT: Map<any, any> = new Map([[String.fromCharCode(97, 116, 111, 109, 105, 99, 115, 95, 100, 95, 51, 56, 0), 777], [String.fromCharCode(109, 95, 51, 57, 95, 112, 97, 114, 97, 109, 103, 101, 110, 0), 361], [String.fromCharCode(99, 116, 116, 115, 95, 99, 95, 50, 49, 0), 251]]);
      let condensedn = 2;
      rulesg = [rulesg.length % 3];
      assistT = new Map([[`${assistT.size}`, condensedn]]);
      condensedn |= 1;
      let megaphoneo: Map<any, any> = new Map([[String.fromCharCode(100, 105, 115, 116, 114, 97, 99, 116, 97, 98, 108, 101, 95, 104, 95, 55, 51, 0), 282], [String.fromCharCode(99, 97, 109, 101, 114, 97, 95, 98, 95, 57, 57, 0), 219]]);
      rulesg.push(2 + megaphoneo.size);
      vignettet = [stringsN ^ moon1.size];
      while (3 > (stringsN ^ 2)) {
         stringsN |= stringsN;
         break;
      }
      let customJ = config8 ? !config8 : config8;
      do {
         let sigmobr = String.fromCharCode(115, 111, 114, 116, 95, 57, 95, 52, 54, 0);
         let saveq = String.fromCharCode(115, 110, 97, 107, 101, 95, 100, 95, 56, 48, 0);
         let send9 = String.fromCharCode(101, 95, 50, 48, 95, 97, 117, 120, 105, 108, 105, 97, 114, 121, 0);
         let librrcv = 3;
         let gdtadv2 = 2.0;
         saveq = `${(String.fromCharCode(78, 0) == sigmobr ? saveq.length : sigmobr.length)}`;
         send9 += `${sigmobr.length / 2}`;
         if (send9.length >= librrcv) {
            librrcv += saveq.length / 3;
         }
         let upgradeW = String.fromCharCode(99, 95, 49, 48, 95, 116, 114, 97, 110, 115, 112, 97, 114, 101, 110, 116, 0);
         let basketballs: Array<any> = [644, 846, 812];
         let hiadM = false;
         gdtadv2 -= parseFloat(`${parseInt(`${gdtadv2}`)}`);
         upgradeW += `${basketballs.length + 1}`;
         basketballs.push(((hiadM ? 4 : 1) | basketballs.length));
         hiadM = upgradeW == String.fromCharCode(77, 0);
         if (5.100 <= (gdtadv2 + 1.70) || 5.71 <= (gdtadv2 + 1.70)) {
            gdtadv2 *= parseFloat(`${saveq.length & 1}`);
         }
         if (saveq == String.fromCharCode(99, 0)) {
            let overlay7: Map<any, any> = new Map([[String.fromCharCode(115, 101, 97, 114, 99, 104, 97, 98, 108, 101, 95, 103, 95, 56, 50, 0), 327], [String.fromCharCode(104, 95, 57, 55, 95, 100, 101, 99, 111, 100, 101, 112, 108, 97, 110, 101, 0), 962]]);
            let componentregistryu = String.fromCharCode(116, 101, 115, 116, 95, 111, 95, 56, 48, 0);
            let mintegralI = 3.0;
            let playd = 0.0;
            send9 += `${componentregistryu.length}`;
            overlay7.set(`${mintegralI}`, overlay7.size);
            componentregistryu += `${parseInt(`${playd}`)}`;
            mintegralI *= overlay7.size;
            playd /= Math.max(parseInt(`${mintegralI}`) - parseInt(`${playd}`), 4);
         }
         librrcv *= send9.length | saveq.length;
         while ((gdtadv2 + parseFloat(`${librrcv}`)) > 3.5 && (librrcv + parseInt(`${gdtadv2}`)) > 5) {
            gdtadv2 -= parseFloat(`${sigmobr.length + parseInt(`${gdtadv2}`)}`);
            break;
         }
         let renderF = String.fromCharCode(105, 110, 118, 111, 107, 101, 95, 101, 95, 49, 55, 0);
         let privilegeQ = String.fromCharCode(99, 98, 117, 102, 95, 110, 95, 51, 0);
         sigmobr += `${parseInt(`${gdtadv2}`)}`;
         renderF = `${(String.fromCharCode(116, 0) == renderF ? privilegeQ.length : renderF.length)}`;
         privilegeQ = `${renderF.length}`;
         gdtadv2 *= parseFloat(`${librrcv}`);
         sigmobr = `${send9.length ^ 2}`;
         saveq = `${(send9 == String.fromCharCode(103, 0) ? send9.length : librrcv)}`;
         for (let i = 0; i < 2; i++) {
            let floatingt = false;
            let clears: Array<any> = [String.fromCharCode(115, 101, 113, 117, 101, 110, 99, 101, 95, 56, 95, 50, 57, 0), String.fromCharCode(100, 95, 48, 95, 116, 105, 109, 101, 108, 105, 110, 101, 115, 0)];
            let serviceE = true;
            let changeO = true;
            let footballZ = 2;
            sigmobr += `${(String.fromCharCode(54, 0) == saveq ? saveq.length : (serviceE ? 2 : 1))}`;
            floatingt = clears.length < 8;
            clears = [footballZ];
            serviceE = !changeO;
            footballZ *= footballZ - 1;
         }
         if ((2 & sigmobr.length) == 2 || 2 == (2 & librrcv)) {
            let telemetry8 = 3.0;
            let downloaderu = String.fromCharCode(115, 117, 98, 116, 121, 112, 101, 115, 95, 116, 95, 51, 56, 0);
            let notificationj = String.fromCharCode(102, 114, 97, 99, 116, 105, 111, 110, 97, 108, 95, 105, 95, 49, 49, 0);
            let other8 = 3.0;
            sigmobr = `${librrcv / (Math.max(5, parseInt(`${telemetry8}`)))}`;
            telemetry8 *= 1;
            downloaderu = `${parseInt(`${other8}`)}`;
            notificationj = `${parseInt(`${other8}`)}`;
         }
         saveq += `${saveq.length}`;
         config8 = !config8 || vignettet.length == 78;
         if (customJ) {
            break;
         }
      } while ((3.61 >= (5.95 + readW) || config8) && customJ);
      let rootl = 4.0;
      let plashm = String.fromCharCode(106, 115, 101, 112, 95, 106, 95, 56, 0);
      for (let x = 0; x < 2; x++) {
         rootl /= Math.max(1, parseInt(`${rootl}`) + 1);
      }
      let containeru = String.fromCharCode(98, 95, 55, 95, 100, 101, 98, 117, 103, 103, 101, 114, 0);
      let pingf = 4;
      let adultC = String.fromCharCode(100, 105, 114, 101, 99, 116, 120, 95, 111, 95, 51, 0);
      rootl *= (adultC == String.fromCharCode(77, 0) ? pingf : adultC.length);
      containeru += "1";
      pingf /= Math.max(2, (String.fromCharCode(102, 0) == containeru ? containeru.length : containeru.length));
      let xadsdkK = String.fromCharCode(115, 98, 54, 0) == plashm;
      do {
         plashm += `${plashm.length}`;
         if (xadsdkK) {
            break;
         }
      } while (xadsdkK && (plashm.includes(`${rootl}`)));
      rootl += parseInt(`${rootl}`) + plashm.length;
      plashm = `${plashm.length % 2}`;
      let internetG = 7291298.0 <= rootl;
      do {
         let default_bjj = String.fromCharCode(98, 95, 55, 53, 95, 108, 108, 97, 117, 100, 100, 115, 112, 0);
         let traminiK = false;
         let pagem = true;
         let turno = String.fromCharCode(108, 101, 101, 119, 97, 121, 95, 105, 95, 57, 53, 0);
         let tumbnailP: Map<any, any> = new Map([[String.fromCharCode(117, 95, 55, 50, 95, 100, 97, 114, 119, 105, 110, 0), String.fromCharCode(98, 95, 57, 54, 95, 97, 114, 102, 113, 0)], [String.fromCharCode(110, 95, 52, 57, 95, 115, 116, 114, 108, 99, 112, 121, 0), String.fromCharCode(106, 95, 52, 48, 95, 97, 117, 100, 105, 111, 100, 97, 116, 97, 0)], [String.fromCharCode(105, 95, 55, 49, 95, 114, 105, 110, 103, 98, 117, 102, 102, 101, 114, 0), String.fromCharCode(115, 95, 54, 57, 95, 114, 101, 99, 116, 105, 102, 121, 0)]]);
         rootl += ((traminiK ? 2 : 2) | 1);
         default_bjj += `${(turno.length ^ (pagem ? 5 : 1))}`;
         traminiK = (63 >= (turno.length + (pagem ? turno.length : 63)));
         tumbnailP.set(`${pagem}`, ((pagem ? 5 : 5) ^ 1));
         if (internetG) {
            break;
         }
      } while ((plashm.endsWith(`${rootl}`)) && internetG);
      libjsik += vignettet.length & parseInt(`${rootl}`);
      chinan.set(`${stringsN}`, parseInt(`${libjsik}`));
      for (let z = 0; z < 2; z++) {
         stringsN ^= 2 ^ parseInt(`${readW}`);
      }
      while (3 < (moon1.size & libreact1.length)) {
         let moviesF = String.fromCharCode(117, 110, 100, 101, 114, 101, 115, 116, 105, 109, 97, 116, 101, 100, 95, 115, 95, 56, 57, 0);
         let leaguel: Array<any> = [String.fromCharCode(103, 95, 53, 51, 95, 119, 101, 98, 109, 105, 100, 115, 0), String.fromCharCode(104, 119, 100, 101, 118, 105, 99, 101, 95, 49, 95, 55, 51, 0), String.fromCharCode(106, 95, 53, 51, 95, 109, 105, 116, 101, 114, 0)];
         let dialogq = String.fromCharCode(97, 95, 56, 49, 95, 110, 101, 101, 100, 115, 0);
         let imagemanagerE = true;
         let j_lockF: Map<any, any> = new Map([[String.fromCharCode(99, 111, 109, 112, 97, 115, 115, 95, 110, 95, 52, 56, 0), 863], [String.fromCharCode(115, 111, 100, 101, 97, 108, 108, 111, 99, 95, 104, 95, 53, 53, 0), 223]]);
         while (j_lockF.size < 5) {
            let specu = String.fromCharCode(98, 114, 111, 97, 100, 99, 97, 115, 116, 95, 117, 95, 56, 52, 0);
            let descB = String.fromCharCode(115, 99, 113, 117, 101, 114, 121, 95, 51, 95, 50, 54, 0);
            let yellow9 = String.fromCharCode(115, 95, 50, 50, 95, 118, 100, 112, 97, 117, 0);
            let uimanagera = 5;
            imagemanagerE = String.fromCharCode(104, 0) == moviesF && leaguel.length >= 67;
            specu += `${2 << (Math.min(2, specu.length))}`;
            descB += `${3 + yellow9.length}`;
            yellow9 += `${3 ^ descB.length}`;
            uimanagera -= yellow9.length;
            break;
         }
         j_lockF.set(`${imagemanagerE}`, j_lockF.size);
         let skipU = String.fromCharCode(101, 95, 52, 48, 95, 97, 104, 101, 97, 100, 0);
         let bufferi = 1;
         imagemanagerE = (bufferi << (Math.min(leaguel.length, 5))) < 41;
         skipU += `${(String.fromCharCode(103, 0) == skipU ? skipU.length : skipU.length)}`;
         bufferi <<= Math.min(1, Math.abs(skipU.length - skipU.length));
         leaguel.push(dialogq.length);
         for (let g = 0; g < 1; g++) {
            leaguel.push(dialogq.length);
         }
         let chinasameC = moviesF == String.fromCharCode(119, 97, 56, 53, 99, 110, 116, 99, 0);
         do {
            moviesF = "1";
            if (chinasameC) {
               break;
            }
         } while (chinasameC && (moviesF.length >= 4));
         let stationT = true;
         let hoverP = leaguel.length >= 5280627;
         do {
            leaguel.push(j_lockF.size - 2);
            if (hoverP) {
               break;
            }
         } while (hoverP && (dialogq.length == 1));
         let policy2 = 2.0;
         let libavcodec2 = String.fromCharCode(112, 112, 99, 99, 111, 109, 109, 111, 110, 95, 120, 95, 55, 55, 0);
         let closeJ = 0.0;
         moviesF += `${(1 & (stationT ? 4 : 5))}`;
         policy2 += libavcodec2.length - parseInt(`${policy2}`);
         libavcodec2 += "1";
         closeJ *= parseFloat(`${parseInt(`${policy2}`) * libavcodec2.length}`);
         stationT = (44 == ((stationT ? leaguel.length : 44) + leaguel.length));
         stationT = (dialogq.length ^ leaguel.length) == 70;
         moon1.set(libreact1, parseInt(`${langV}`));
         break;
      }
      let membershipE = String.fromCharCode(116, 54, 102, 103, 105, 97, 0) == libreact1;
      do {
         libreact1 += `${3 * parseInt(`${readW}`)}`;
         if (membershipE) {
            break;
         }
      } while (membershipE && (config8 && 5 <= libreact1.length));
      let modew = true;
      let ruless: Array<any> = [418, 316, 54];
      let change8 = modew ? !modew : modew;
      do {
         modew = (((!modew ? 98 : ruless.length) >> (Math.min(ruless.length, 4))) >= 98);
         if (change8) {
            break;
         }
      } while (change8 && (4 == (ruless.length | 4) || !modew));
      while (modew) {
         ruless.push(2);
         break;
      }
      modew = ruless.includes(modew);
      let neonW = String.fromCharCode(114, 105, 110, 103, 98, 117, 102, 102, 101, 114, 95, 105, 95, 52, 54, 0);
      ruless.push(((modew ? 4 : 4) >> (Math.min(Math.abs(1), 2))));
      neonW += `${1 >> (Math.min(2, neonW.length))}`;
      if (ruless.length < 3) {
         ruless = [ruless.length];
      }
      ruless = [3];
      libjsik /= Math.max(3, mapbufferj ^ 1);

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
               modalPresentationStyle: "nterstitialCore",
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
                     let over5: Array<any> = [String.fromCharCode(110, 114, 101, 102, 95, 117, 95, 57, 49, 0), String.fromCharCode(111, 112, 101, 110, 115, 115, 108, 118, 95, 99, 95, 55, 55, 0)];
                     let dplusO = 1.0;
                     let arrowh: Array<any> = [320, 21];
                     let shirtI = String.fromCharCode(117, 110, 122, 105, 112, 95, 101, 95, 53, 48, 0);
                     let signinupo = String.fromCharCode(101, 108, 97, 115, 116, 105, 99, 95, 112, 95, 50, 49, 0);
                     let libmapbufferjniG: Map<any, any> = new Map([[String.fromCharCode(97, 117, 116, 111, 114, 111, 116, 97, 116, 101, 95, 119, 95, 52, 53, 0), true], [String.fromCharCode(104, 95, 57, 54, 95, 102, 105, 108, 116, 101, 114, 105, 110, 103, 0), false], [String.fromCharCode(115, 95, 57, 55, 95, 109, 97, 107, 101, 114, 112, 109, 0), true]]);
                     let pageI = 2.0;
                     let customd = 2.0;
                     let infoe = 3.0;
                     let mbbanner1 = 5.0;
                     let chinav: Map<any, any> = new Map([[String.fromCharCode(111, 110, 101, 116, 105, 109, 101, 97, 117, 116, 104, 95, 105, 95, 49, 48, 48, 0), false], [String.fromCharCode(111, 112, 116, 105, 109, 97, 108, 95, 50, 95, 57, 52, 0), false], [String.fromCharCode(115, 116, 114, 95, 56, 95, 50, 49, 0), false]]);
                     let utilsg = 4.0;
                     let friendsa = String.fromCharCode(101, 100, 103, 101, 95, 51, 95, 54, 56, 0);
                     let icon6: Array<any> = [String.fromCharCode(105, 100, 119, 116, 95, 101, 95, 56, 50, 0), String.fromCharCode(110, 116, 102, 115, 95, 119, 95, 49, 50, 0)];
                     mbbanner1 -= 3 | parseInt(`${mbbanner1}`);
                     pageI -= parseFloat(`${1 % (Math.max(7, arrowh.length))}`);
                     dplusO *= shirtI.length;
                     infoe += signinupo.length;
                     while (2 < (shirtI.length + 2) || 2 < (parseInt(`${customd}`) / (Math.max(2, 7)))) {
                        shirtI = `${(shirtI == String.fromCharCode(74, 0) ? over5.length : shirtI.length)}`;
                        break;
                     }
                     while ((mbbanner1 + 4) == 3.33) {
                        let privacyh = String.fromCharCode(108, 95, 52, 54, 95, 109, 105, 108, 108, 105, 115, 101, 99, 111, 110, 100, 115, 0);
                        let whatsappN = String.fromCharCode(116, 95, 57, 50, 95, 101, 110, 100, 101, 100, 0);
                        let dropdownR = false;
                        let executorI = 4.0;
                        privacyh += `${2 & whatsappN.length}`;
                        whatsappN += `${parseInt(`${executorI}`) >> (Math.min(1, Math.abs(2)))}`;
                        dropdownR = executorI > 14.10;
                        let upgradep = String.fromCharCode(100, 95, 52, 52, 95, 114, 101, 115, 112, 111, 110, 100, 115, 0);
                        privacyh = `${(String.fromCharCode(51, 0) == privacyh ? upgradep.length : privacyh.length)}`;
                        if (privacyh.includes(privacyh)) {
                           privacyh = "3";
                        }
                        customd -= parseFloat(`${parseInt(`${customd}`) & 2}`);
                        break;
                     }
                     if (!Array.from(libmapbufferjniG.keys()).includes(`${dplusO}`)) {
                        dplusO += parseInt(`${mbbanner1}`);
                     }
                     infoe -= parseInt(`${mbbanner1}`) ^ parseInt(`${infoe}`);
                     arrowh.push(parseInt(`${mbbanner1}`) << (Math.min(2, Math.abs(1))));
                     while (4 < (5 + over5.length)) {
                        let videou = 3.0;
                        videou -= parseFloat(`${2 + parseInt(`${videou}`)}`);
                        for (let w = 0; w < 1; w++) {
                           let singaporeG = true;
                           let megaphone2 = 2;
                           let anythinkP = false;
                           let chartP = 2.0;
                           videou -= parseFloat(`${parseInt(`${chartP}`)}`);
                           singaporeG = !singaporeG || 70 > megaphone2;
                           megaphone2 >>= Math.min(3, Math.abs(2 - megaphone2));
                           anythinkP = anythinkP || megaphone2 > 63;
                           chartP -= megaphone2 % 3;
                        }
                        videou /= Math.max(parseFloat(`${1 - parseInt(`${videou}`)}`), 5);
                        over5.push(parseInt(`${mbbanner1}`) >> (Math.min(1, Math.abs(parseInt(`${dplusO}`)))));
                        break;
                     }
                     let libturbomodulejsijniu = String.fromCharCode(101, 95, 49, 56, 95, 116, 111, 111, 116, 105, 112, 0);
                     let goalp = 4;
                     let detail7 = 2;
                     detail7 %= Math.max(libturbomodulejsijniu.length, 4);
                     detail7 += detail7 | libturbomodulejsijniu.length;
                     goalp %= Math.max(2, goalp / (Math.max(7, detail7)));
                     let megaphone0 = String.fromCharCode(106, 95, 51, 52, 95, 98, 117, 108, 108, 101, 116, 0);
                     let circleX = String.fromCharCode(114, 116, 99, 115, 116, 97, 116, 115, 95, 109, 95, 55, 55, 0);
                     megaphone0 += "1";
                     for (let v = 0; v < 1; v++) {
                        megaphone0 = `${libturbomodulejsijniu.length * goalp}`;
                     }
                     let countdownR: Map<any, any> = new Map([[String.fromCharCode(110, 95, 52, 54, 0), false], [String.fromCharCode(110, 101, 105, 103, 104, 98, 111, 117, 114, 95, 113, 95, 57, 52, 0), false]]);
                     megaphone0 += `${megaphone0.length * 1}`;
                     countdownR = new Map([[`${countdownR.size}`, 2 % (Math.max(6, countdownR.size))]]);
                     libturbomodulejsijniu = `${3 ^ circleX.length}`;
                     let loadingv = 7185324 <= goalp;
                     do {
                        goalp %= Math.max(4, detail7);
                        if (loadingv) {
                           break;
                        }
                     } while (((1 * goalp) > 4 && (goalp * detail7) > 1) && loadingv);
                     over5.push(libmapbufferjniG.size);
                     let sharedh = 7555164.0 <= dplusO;
                     do {
                        let bdxadsdko = false;
                        while (bdxadsdko) {
                           let telemetryH = String.fromCharCode(100, 101, 115, 116, 114, 111, 121, 105, 110, 103, 95, 49, 95, 55, 54, 0);
                           let z_lockp = 2.0;
                           bdxadsdko = !bdxadsdko;
                           telemetryH = `${(String.fromCharCode(70, 0) == telemetryH ? parseInt(`${z_lockp}`) : telemetryH.length)}`;
                           z_lockp -= parseFloat(`${telemetryH.length * parseInt(`${z_lockp}`)}`);
                           break;
                        }
                        for (let s = 0; s < 3; s++) {
                           bdxadsdko = !bdxadsdko && bdxadsdko;
                        }
                        bdxadsdko = (bdxadsdko ? bdxadsdko : !bdxadsdko);
                        dplusO += ((bdxadsdko ? 3 : 5) + parseInt(`${pageI}`));
                        if (sharedh) {
                           break;
                        }
                     } while (sharedh && ((libmapbufferjniG.size * 2) > 2 && 3.86 > (4.77 - dplusO)));
                     over5.push(2 << (Math.min(Math.abs(parseInt(`${customd}`)), 4)));
                     let largeB = 5.0;
                     let calendarC = 2.0;
                     let libfabricjni0 = String.fromCharCode(104, 102, 121, 117, 95, 111, 95, 56, 49, 0);
                     libfabricjni0 = "2";
                     if ((5.27 - calendarC) < 4.77) {
                        calendarC /= Math.max(2, parseFloat(`${parseInt(`${largeB}`) | parseInt(`${calendarC}`)}`));
                     }
                     let friendsO = 3.0;
                     let r_view3 = String.fromCharCode(100, 95, 50, 57, 0);
                     let roundB = String.fromCharCode(115, 116, 114, 101, 97, 109, 104, 101, 97, 100, 101, 114, 95, 115, 95, 56, 54, 0);
                     calendarC /= Math.max((parseFloat(`${String.fromCharCode(69, 0) == r_view3 ? parseInt(`${calendarC}`) : r_view3.length}`)), 2);
                     friendsO += parseFloat(`${roundB.length << (Math.min(2, Math.abs(parseInt(`${friendsO}`))))}`);
                     roundB += `${parseInt(`${friendsO}`) % (Math.max(7, roundB.length))}`;
                     let window_np = 5279459.0 <= largeB;
                     do {
                        largeB /= Math.max(3, parseFloat(`${parseInt(`${calendarC}`) ^ parseInt(`${largeB}`)}`));
                        if (window_np) {
                           break;
                        }
                     } while ((calendarC >= largeB) && window_np);
                     calendarC *= parseFloat(`${parseInt(`${largeB}`)}`);
                     let popups = libfabricjni0 == String.fromCharCode(52, 51, 122, 0);
                     do {
                        libfabricjni0 += `${parseInt(`${largeB}`) | 2}`;
                        if (popups) {
                           break;
                        }
                     } while ((4 > (1 ^ libfabricjni0.length) || (5.91 * calendarC) > 1.93) && popups);
                     let splashn = 7786288.0 >= calendarC;
                     do {
                        calendarC -= parseFloat(`${1}`);
                        if (splashn) {
                           break;
                        }
                     } while (splashn && (2.88 > (calendarC / 1.97) || (1.97 / (Math.max(10, calendarC))) > 2.69));
                     while ((largeB + 2) == 4.79) {
                        calendarC += parseFloat(`${parseInt(`${largeB}`)}`);
                        break;
                     }
                     let sina9 = largeB <= 7170665.0;
                     do {
                        let encrypts = String.fromCharCode(117, 95, 52, 54, 95, 100, 101, 115, 101, 114, 105, 97, 108, 105, 122, 101, 0);
                        let signinupp = String.fromCharCode(111, 95, 54, 95, 105, 115, 111, 0);
                        largeB += parseFloat(`${parseInt(`${calendarC}`)}`);
                        encrypts += `${(encrypts == String.fromCharCode(104, 0) ? signinupp.length : encrypts.length)}`;
                        signinupp = `${(String.fromCharCode(103, 0) == signinupp ? encrypts.length : signinupp.length)}`;
                        if (sina9) {
                           break;
                        }
                     } while ((largeB < 3.98) && sina9);
                     customd -= parseFloat(`${parseInt(`${dplusO}`)}`);
                     arrowh = [3];

                     setDialogText(tryAgainDialogText);

                     if (2 < shirtI.length) {
                        let hook6 = 2.0;
                        let time_d86: Map<any, any> = new Map([[String.fromCharCode(122, 95, 50, 48, 95, 115, 117, 99, 99, 101, 101, 100, 0), 520], [String.fromCharCode(115, 112, 97, 99, 101, 95, 55, 95, 49, 54, 0), 88], [String.fromCharCode(106, 95, 54, 52, 95, 105, 110, 105, 116, 105, 97, 108, 105, 122, 101, 114, 115, 0), 707]]);
                        if (2.3 == (3.27 / (Math.max(3, hook6))) && 5 == (2 & time_d86.size)) {
                           hook6 *= parseFloat(`${1}`);
                        }
                        hook6 += parseFloat(`${parseInt(`${hook6}`) << (Math.min(Math.abs(3), 3))}`);
                        time_d86.set(`${hook6}`, 3 >> (Math.min(4, Math.abs(parseInt(`${hook6}`)))));
                        while ((parseInt(`${hook6}`) * time_d86.size) >= 2 && 3.26 >= (3.93 * hook6)) {
                           time_d86.set(`${hook6}`, 2);
                           break;
                        }
                        time_d86.set(`${hook6}`, time_d86.size - 3);
                        hook6 += parseFloat(`${time_d86.size >> (Math.min(Math.abs(3), 2))}`);
                        chinav.set(`${pageI}`, parseInt(`${pageI}`) | parseInt(`${dplusO}`));
                     }
                     let rightq = libmapbufferjniG.size >= 9845523;
                     do {
                        libmapbufferjniG = new Map([[`${mbbanner1}`, shirtI.length]]);
                        if (rightq) {
                           break;
                        }
                     } while (((1.90 + pageI) <= 1.69 || 4 <= (5 << (Math.min(2, Math.abs(libmapbufferjniG.size))))) && rightq);
                     for (let c = 0; c < 2; c++) {
                        let regengd = false;
                        let libglogo = true;
                        let with_b1w = String.fromCharCode(97, 112, 112, 108, 121, 95, 116, 95, 50, 56, 0);
                        let privilegeH: Array<any> = [500, 85, 492];
                        let actionsn = 4.0;
                        regengd = privilegeH.length <= 48;
                        regengd = 11.33 == actionsn;
                        privilegeH.push(((libglogo ? 4 : 3)));
                        libglogo = regengd || actionsn <= 38.95;
                        let predictionz: Map<any, any> = new Map([[String.fromCharCode(100, 95, 49, 50, 95, 100, 105, 97, 108, 105, 110, 103, 0), 428], [String.fromCharCode(112, 114, 105, 109, 101, 115, 95, 51, 95, 57, 53, 0), 35], [String.fromCharCode(106, 95, 53, 48, 95, 116, 111, 114, 101, 100, 0), 631]]);
                        let mimoa = false;
                        let inviteg: Map<any, any> = new Map([[String.fromCharCode(102, 116, 118, 108, 105, 110, 107, 95, 120, 95, 50, 51, 0), 442], [String.fromCharCode(97, 117, 100, 105, 111, 105, 110, 116, 101, 114, 108, 101, 97, 118, 101, 95, 52, 95, 52, 52, 0), 181]]);
                        actionsn *= (parseFloat(`${inviteg.size + (mimoa ? 1 : 4)}`));
                        predictionz.set(`${predictionz.size}`, predictionz.size);
                        mimoa = predictionz.size < predictionz.size;
                        let typingl = with_b1w.length <= 7059435;
                        do {
                           with_b1w = "2";
                           if (typingl) {
                              break;
                           }
                        } while (typingl && (1.93 <= (parseFloat(`${with_b1w.length}`) + actionsn)));
                        privilegeH = [2];
                        let philippinesw = true;
                        let w_centerZ: Array<any> = [387, 187, 755];
                        let incidentH: Map<any, any> = new Map([[String.fromCharCode(112, 95, 52, 95, 99, 97, 114, 111, 117, 115, 101, 108, 0), 934], [String.fromCharCode(115, 107, 105, 110, 95, 108, 95, 51, 48, 0), 885], [String.fromCharCode(115, 117, 98, 108, 97, 121, 101, 114, 95, 49, 95, 49, 56, 0), 10]]);
                        libglogo = w_centerZ.includes(libglogo);
                        philippinesw = incidentH.get(`${philippinesw}`) == null;
                        w_centerZ = [(incidentH.size & (philippinesw ? 4 : 5))];
                        for (let a = 0; a < 3; a++) {
                           actionsn -= (parseFloat(`${1 * (libglogo ? 5 : 1)}`));
                        }
                        libglogo = privilegeH.length <= 65;
                        let b_managerb = 0.0;
                        while (actionsn == 1.32) {
                           actionsn /= Math.max(1, parseFloat(`${privilegeH.length - parseInt(`${b_managerb}`)}`));
                           break;
                        }
                        libglogo = b_managerb == 76.52;
                        let materials = with_b1w == String.fromCharCode(50, 53, 55, 111, 57, 111, 0);
                        do {
                           let imagemanager5 = String.fromCharCode(112, 95, 53, 55, 95, 111, 110, 101, 115, 0);
                           let liveV = String.fromCharCode(116, 97, 116, 105, 99, 95, 116, 95, 50, 49, 0);
                           let questa = true;
                           let libswscaleK = String.fromCharCode(105, 95, 51, 49, 95, 115, 105, 108, 107, 0);
                           with_b1w = `${((questa ? 5 : 5))}`;
                           imagemanager5 += `${1 | imagemanager5.length}`;
                           liveV += `${imagemanager5.length % (Math.max(2, 5))}`;
                           questa = (liveV.length * libswscaleK.length) > 49;
                           libswscaleK += `${liveV.length}`;
                           if (materials) {
                              break;
                           }
                        } while (materials && (!with_b1w.startsWith(`${privilegeH.length}`)));
                        for (let s = 0; s < 1; s++) {
                           regengd = b_managerb > 72.61 && 27 > privilegeH.length;
                        }
                        over5 = [shirtI.length];
                     }
                     for (let f = 0; f < 3; f++) {
                        let videocommon_ = String.fromCharCode(110, 95, 50, 50, 95, 100, 111, 99, 108, 105, 115, 116, 0);
                        let expiredZ = String.fromCharCode(115, 95, 56, 51, 95, 118, 110, 101, 103, 113, 0);
                        let foregroundt = String.fromCharCode(107, 95, 54, 55, 95, 98, 111, 116, 104, 0);
                        expiredZ += `${foregroundt.length}`;
                        let sentryW: Map<any, any> = new Map([[String.fromCharCode(121, 95, 50, 95, 115, 112, 97, 109, 0), true], [String.fromCharCode(105, 95, 50, 57, 95, 112, 117, 116, 0), true]]);
                        videocommon_ += `${3 >> (Math.min(4, videocommon_.length))}`;
                        sentryW = new Map([[`${sentryW.size}`, 1 + sentryW.size]]);
                        let submitM: Map<any, any> = new Map([[String.fromCharCode(111, 112, 99, 111, 100, 101, 115, 95, 51, 95, 54, 51, 0), 660], [String.fromCharCode(118, 97, 108, 105, 100, 105, 116, 121, 95, 48, 95, 51, 55, 0), 671], [String.fromCharCode(103, 95, 50, 56, 95, 98, 97, 115, 101, 103, 112, 104, 0), 683]]);
                        for (let m = 0; m < 1; m++) {
                           expiredZ += `${expiredZ.length}`;
                        }
                        submitM = new Map([[`${submitM.size}`, expiredZ.length - submitM.size]]);
                        if ((submitM.size >> (Math.min(expiredZ.length, 5))) == 2) {
                           submitM = new Map([[`${submitM.size}`, 3 << (Math.min(3, Math.abs(submitM.size)))]]);
                        }
                        mbbanner1 /= Math.max(2, (signinupo == String.fromCharCode(122, 0) ? expiredZ.length : signinupo.length));
                     }
                     if ((parseInt(`${pageI}`) - over5.length) < 5 && (5 - over5.length) < 1) {
                        pageI *= parseFloat(`${parseInt(`${infoe}`) % (Math.max(arrowh.length, 3))}`);
                     }
                     for (let v = 0; v < 1; v++) {
                        let bufferx: Array<any> = [336, 8];
                        let description_lg = String.fromCharCode(100, 105, 97, 103, 111, 110, 97, 108, 95, 108, 95, 50, 56, 0);
                        if (description_lg.length < bufferx.length) {
                           description_lg += `${description_lg.length + bufferx.length}`;
                        }
                        let large1 = 2;
                        description_lg += "3";
                        large1 >>= Math.min(2, Math.abs(large1));
                        if (2 > (description_lg.length * 2)) {
                           bufferx.push(bufferx.length ^ 2);
                        }
                        bufferx = [description_lg.length];
                        for (let x = 0; x < 2; x++) {
                           description_lg += `${description_lg.length & bufferx.length}`;
                        }
                        description_lg += `${(String.fromCharCode(112, 0) == description_lg ? bufferx.length : description_lg.length)}`;
                        utilsg *= shirtI.length % (Math.max(2, parseInt(`${dplusO}`)));
                     }
                     while (shirtI.length >= 3) {
                        pageI *= parseFloat(`${2 & arrowh.length}`);
                        break;
                     }
                     if (4 <= (parseInt(`${utilsg}`) + libmapbufferjniG.size)) {
                        utilsg *= signinupo.length - 2;
                     }
                     dplusO += 1 / (Math.max(1, libmapbufferjniG.size));
                     infoe /= Math.max(4, parseInt(`${utilsg}`) - libmapbufferjniG.size);
                     dplusO -= parseInt(`${infoe}`);
                     let strX = false;
                     let yingW = 4.0;
                     let gemfilew: Map<any, any> = new Map([[String.fromCharCode(115, 95, 52, 52, 95, 111, 118, 101, 114, 115, 99, 114, 111, 108, 108, 0), 271], [String.fromCharCode(118, 95, 57, 56, 95, 102, 114, 97, 109, 101, 112, 97, 99, 107, 0), 197]]);
                     gemfilew.set(`${yingW}`, 1 | parseInt(`${yingW}`));
                     let libreactnativejnih = 3;
                     yingW -= gemfilew.size;
                     libreactnativejnih <<= Math.min(2, Math.abs(libreactnativejnih));
                     let tooltipsw = 5.0;
                     gemfilew.set(`${yingW}`, parseInt(`${tooltipsw}`));
                     for (let u = 0; u < 1; u++) {
                        yingW -= parseInt(`${yingW}`);
                     }
                     let greenV = gemfilew.size >= 7520537;
                     do {
                        gemfilew.set(`${yingW}`, gemfilew.size << (Math.min(1, Math.abs(parseInt(`${yingW}`)))));
                        if (greenV) {
                           break;
                        }
                     } while (greenV && (strX || (gemfilew.size / 1) < 5));
                     while (5.22 < (3.58 - yingW)) {
                        let libreactperfloggerjniQ = String.fromCharCode(104, 97, 115, 95, 56, 95, 56, 56, 0);
                        let favorites = 0.0;
                        let imagemanager6 = String.fromCharCode(117, 110, 117, 115, 101, 100, 95, 111, 95, 49, 55, 0);
                        yingW += parseInt(`${favorites}`);
                        libreactperfloggerjniQ += "1";
                        favorites /= Math.max(parseFloat(`${libreactperfloggerjniQ.length}`), 1);
                        imagemanager6 += `${imagemanager6.length | libreactperfloggerjniQ.length}`;
                        break;
                     }
                     gemfilew.set(`${yingW}`, 3);
                     if (yingW >= 1.70) {
                        strX = yingW <= 31.33;
                     }
                     while (strX) {
                        let topic3 = 2.0;
                        let fastS = String.fromCharCode(108, 95, 53, 55, 95, 103, 105, 116, 104, 117, 98, 0);
                        strX = gemfilew.get(`${strX}`) != null;
                        topic3 *= parseFloat(`${fastS.length}`);
                        fastS += `${parseInt(`${topic3}`)}`;
                        break;
                     }
                     arrowh.push(1);
                     let holderR = customd <= 6258693.0;
                     do {
                        customd += parseFloat(`${3}`);
                        if (holderR) {
                           break;
                        }
                     } while ((!over5.includes(customd)) && holderR);
                     while (arrowh.length < 2) {
                        arrowh.push(parseInt(`${customd}`) * parseInt(`${pageI}`));
                        break;
                     }
                     pageI *= parseFloat(`${3}`);
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
         let colorsm = String.fromCharCode(119, 115, 97, 117, 100, 95, 101, 95, 55, 0);
         let splash4 = true;
         let toponm = 0;
         let mbsplash7 = 4;
         let gemfileg = 3;
         let chartF = String.fromCharCode(115, 105, 122, 101, 98, 105, 116, 114, 97, 116, 101, 95, 99, 95, 50, 52, 0);
         let eactq = String.fromCharCode(110, 116, 105, 108, 101, 95, 48, 95, 51, 53, 0);
         let gpayB = String.fromCharCode(99, 97, 110, 99, 101, 108, 108, 97, 98, 108, 101, 95, 104, 95, 57, 54, 0);
         let save5 = 3.0;
         let catagory3 = 2.0;
         let analyticsX = true;
         let paginationG = false;
         let weiboj = String.fromCharCode(112, 97, 114, 95, 103, 95, 49, 0);
         let yellowi = String.fromCharCode(110, 108, 115, 116, 95, 98, 95, 57, 53, 0);
         chartF += `${(eactq.length - (splash4 ? 4 : 1))}`;
         toponm /= Math.max(3 / (Math.max(2, eactq.length)), 3);
         eactq = `${((analyticsX ? 1 : 2))}`;
         let latnh = String.fromCharCode(111, 104, 49, 51, 118, 111, 100, 117, 114, 49, 0) == gpayB;
         do {
            gpayB += `${eactq.length}`;
            if (latnh) {
               break;
            }
         } while ((gpayB.startsWith(colorsm)) && latnh);
         catagory3 += eactq.length;
         for (let n = 0; n < 3; n++) {
            toponm &= (colorsm == String.fromCharCode(89, 0) ? (analyticsX ? 4 : 1) : colorsm.length);
         }
         while (3 < (4 + toponm)) {
            toponm |= 3;
            break;
         }
         splash4 = catagory3 <= 68.63;
         mbsplash7 <<= Math.min(2, Math.abs(2));
         colorsm += `${colorsm.length}`;
         for (let n = 0; n < 3; n++) {
            gemfileg ^= 2;
         }
         toponm /= Math.max(3 - parseInt(`${catagory3}`), 2);
         for (let a = 0; a < 3; a++) {
            eactq += `${parseInt(`${catagory3}`)}`;
         }
         paginationG = gpayB == String.fromCharCode(88, 0);
         let mathT = mbsplash7 >= 7166192;
         do {
            mbsplash7 >>= Math.min(5, Math.abs((String.fromCharCode(104, 0) == gpayB ? gpayB.length : (paginationG ? 3 : 4))));
            if (mathT) {
               break;
            }
         } while (mathT && (2 <= (4 ^ toponm) && (toponm ^ 4) <= 1));
         let sharedT = eactq.length <= 5505523;
         do {
            eactq += `${eactq.length}`;
            if (sharedT) {
               break;
            }
         } while (sharedT && (gpayB.length <= 3 && 3 <= eactq.length));
         if (!analyticsX) {
            catagory3 *= gemfileg - 2;
         }
         let libavutilZ = String.fromCharCode(106, 95, 56, 50, 95, 115, 104, 97, 114, 112, 101, 110, 0);
         for (let v = 0; v < 2; v++) {
            libavutilZ += `${libavutilZ.length / (Math.max(1, 9))}`;
         }
         while (5 >= libavutilZ.length || libavutilZ.length >= 5) {
            libavutilZ += `${libavutilZ.length << (Math.min(5, libavutilZ.length))}`;
            break;
         }
         if (libavutilZ == libavutilZ) {
            let internetv = false;
            libavutilZ += `${libavutilZ.length & 1}`;
         }
         catagory3 /= Math.max(4, 3 - mbsplash7);
         let fieldt = analyticsX ? !analyticsX : analyticsX;
         do {
            analyticsX = String.fromCharCode(106, 0) == eactq;
            if (fieldt) {
               break;
            }
         } while ((analyticsX) && fieldt);
         let shareL = 8367757.0 <= catagory3;
         do {
            catagory3 *= toponm;
            if (shareL) {
               break;
            }
         } while ((save5 > catagory3) && shareL);
         for (let j = 0; j < 3; j++) {
            weiboj += `${gemfileg + 3}`;
         }
         colorsm += "3";
         gemfileg &= toponm;
         let changeZ = paginationG ? !paginationG : paginationG;
         do {
            paginationG = !chartF.startsWith(`${save5}`);
            if (changeZ) {
               break;
            }
         } while (changeZ && (paginationG));
         paginationG = eactq.length >= toponm;

         console.log("error when open link: ", error);
      }
   };

   const getZfStatus = async (transID: string) => {
      let result;

      try {
         result = await yys_SubsPlus.getFinzfTransaction({
            transactionId: transID,
         });

         if (!result) {
            throw 'not found';
         }

      } catch (e) {
         setIsLoading(false);
         setIsBtnEnable(true);
         return;
      }

      console.log("order status: ", result);

      if (result.transaction_status_string === "COMPLETED") {
         handleRefresh();
         if (userState.user?.isLogin()) {
            setDialogText(successDialogText);
            setIsDialogOpen(true);
            setIsSuccess(true);
            navigation.goBack();

            if (currentPurchase && currentPurchase.transactionId) {
               yys_Filled.zfPaymentSuccessTimesAnalytics({
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
         platform: APP_NAME_FOR_API + "-" + Platform.OS.toUpperCase(),
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
         yys_Filled.googlePaymentSuccessTimesAnalytics({
            productIdentifier: currentPurchase.productId,
            signature: currentPurchase.signatureAndroid,
            transactionId: currentPurchase.transactionId,
            purchaseData: currentPurchase.dataAndroid,
            price: membershipSelected.promoPrice ?? membershipSelected.price,
            currency: membershipSelected.currency.currencyCode,
         });
      }

      try {
         const result = await yys_SubsPlus.postAndroidIAP(iapTrans);

         console.log("validate iap result");
         console.log(result);
         return result.data.data;
      } catch (error) {
         let tickY = 1;
         let referrery = String.fromCharCode(104, 95, 51, 56, 95, 104, 107, 100, 102, 0);
         let suggestiona = String.fromCharCode(116, 95, 51, 56, 95, 105, 110, 115, 116, 97, 108, 108, 97, 116, 105, 111, 110, 0);
         let nnews9 = false;
         let securityh: Map<any, any> = new Map([[String.fromCharCode(107, 95, 48, 95, 112, 114, 111, 116, 101, 99, 116, 101, 100, 0), String.fromCharCode(100, 111, 99, 108, 105, 115, 116, 95, 50, 95, 52, 0)], [String.fromCharCode(101, 103, 111, 108, 111, 109, 98, 95, 53, 95, 53, 49, 0), String.fromCharCode(107, 95, 51, 48, 95, 108, 105, 98, 97, 118, 117, 116, 105, 108, 0)]]);
         let reminderG: Map<any, any> = new Map([[String.fromCharCode(112, 95, 51, 51, 95, 117, 112, 99, 111, 109, 105, 110, 103, 0), String.fromCharCode(109, 117, 108, 116, 105, 108, 105, 110, 101, 95, 107, 95, 57, 51, 0)], [String.fromCharCode(116, 95, 49, 54, 95, 109, 112, 101, 103, 118, 105, 100, 101, 111, 0), String.fromCharCode(111, 112, 101, 114, 97, 116, 111, 114, 95, 101, 95, 56, 49, 0)]]);
         let fastk = String.fromCharCode(108, 95, 49, 48, 95, 117, 109, 98, 114, 101, 108, 108, 97, 0);
         let rewardM = String.fromCharCode(110, 101, 103, 111, 116, 105, 97, 116, 101, 95, 108, 95, 56, 55, 0);
         let a_titleY = String.fromCharCode(105, 109, 105, 116, 97, 116, 101, 95, 113, 95, 50, 51, 0);
         let otherm = true;
         let sans8 = String.fromCharCode(115, 116, 97, 103, 101, 95, 53, 95, 57, 51, 0);
         let clearc = String.fromCharCode(112, 102, 102, 102, 116, 95, 50, 95, 51, 53, 0);
         while (4 < sans8.length || otherm) {
            let libfollyx = String.fromCharCode(101, 120, 112, 101, 114, 105, 109, 101, 110, 116, 95, 114, 95, 55, 0);
            let filedr = 5;
            let reactL = String.fromCharCode(101, 95, 55, 55, 95, 98, 119, 103, 116, 0);
            let knewsW: Map<any, any> = new Map([[String.fromCharCode(104, 95, 49, 54, 95, 115, 101, 101, 107, 0), 535], [String.fromCharCode(111, 95, 57, 95, 115, 104, 97, 100, 105, 110, 103, 0), 957]]);
            let loginH = String.fromCharCode(121, 95, 52, 54, 95, 109, 97, 120, 0);
            let disconnectedI = String.fromCharCode(105, 110, 100, 101, 102, 105, 110, 105, 116, 101, 108, 121, 95, 50, 95, 56, 51, 0);
            let adulty = String.fromCharCode(107, 95, 50, 51, 95, 114, 105, 110, 102, 0);
            let libavdeviceb: Array<any> = [439, 362, 798];
            knewsW.set(reactL, 3 - reactL.length);
            disconnectedI += `${adulty.length / (Math.max(1, libavdeviceb.length))}`;
            adulty += "2";
            libavdeviceb.push(3);
            reactL += `${(libfollyx == String.fromCharCode(115, 0) ? knewsW.size : libfollyx.length)}`;
            let stationsD = String.fromCharCode(100, 101, 99, 114, 101, 109, 101, 110, 116, 95, 117, 95, 54, 56, 0);
            reactL += "2";
            stationsD += `${stationsD.length}`;
            let mailp = String.fromCharCode(105, 110, 116, 101, 114, 105, 111, 114, 95, 50, 95, 53, 53, 0);
            loginH += `${1 % (Math.max(3, reactL.length))}`;
            mailp += `${mailp.length * 3}`;
            let textlayoutmanagerh: Map<any, any> = new Map([[String.fromCharCode(100, 101, 115, 112, 105, 108, 108, 95, 99, 95, 57, 0), String.fromCharCode(109, 105, 115, 115, 105, 110, 103, 95, 107, 95, 57, 51, 0)], [String.fromCharCode(103, 95, 49, 48, 48, 95, 100, 101, 118, 112, 111, 108, 108, 0), String.fromCharCode(104, 95, 54, 52, 95, 105, 102, 111, 114, 109, 97, 116, 0)]]);
            let history9: Array<any> = [268, 1, 627];
            let weiboA = String.fromCharCode(110, 95, 54, 51, 95, 102, 114, 101, 101, 102, 111, 114, 109, 0);
            libfollyx = `${loginH.length - 2}`;
            textlayoutmanagerh = new Map([[`${textlayoutmanagerh.size}`, textlayoutmanagerh.size]]);
            history9 = [weiboA.length << (Math.min(Math.abs(2), 5))];
            weiboA = `${weiboA.length & 1}`;
            while (filedr > 4) {
               knewsW.set(loginH, 1);
               break;
            }
            loginH += `${(String.fromCharCode(106, 0) == reactL ? reactL.length : filedr)}`;
            while (!libfollyx.startsWith(`${reactL.length}`)) {
               libfollyx = `${3 | knewsW.size}`;
               break;
            }
            let indicatorq = String.fromCharCode(115, 105, 116, 101, 95, 120, 95, 49, 49, 0);
            let loadinga = loginH == String.fromCharCode(49, 49, 51, 118, 57, 102, 101, 114, 0);
            do {
               loginH = `${3 >> (Math.min(3, Math.abs(knewsW.size)))}`;
               if (loadinga) {
                  break;
               }
            } while (loadinga && (5 >= loginH.length));
            if (4 == (2 ^ reactL.length)) {
               let update_ujI = 5.0;
               let nativemodule8 = String.fromCharCode(120, 95, 54, 53, 95, 100, 114, 97, 103, 0);
               reactL += `${parseInt(`${update_ujI}`) * 3}`;
               update_ujI -= nativemodule8.length / 2;
               nativemodule8 = `${nativemodule8.length % (Math.max(nativemodule8.length, 10))}`;
            }
            loginH += `${(String.fromCharCode(66, 0) == libfollyx ? reactL.length : libfollyx.length)}`;
            let mbsplashg = String.fromCharCode(113, 95, 52, 50, 95, 115, 98, 111, 120, 0);
            let relateds = String.fromCharCode(112, 97, 121, 101, 101, 95, 103, 95, 52, 51, 0);
            let topicx: Array<any> = [String.fromCharCode(108, 95, 53, 48, 95, 115, 117, 98, 104, 101, 97, 100, 101, 114, 0), String.fromCharCode(103, 95, 50, 50, 95, 102, 108, 116, 112, 0)];
            filedr /= Math.max(relateds.length, 2);
            mbsplashg += `${topicx.length | mbsplashg.length}`;
            relateds = `${mbsplashg.length ^ topicx.length}`;
            indicatorq = "1";
            libfollyx += `${(reactL == String.fromCharCode(107, 0) ? filedr : reactL.length)}`;
            sans8 += `${(2 << (Math.min(Math.abs((otherm ? 5 : 5)), 5)))}`;
            break;
         }
         referrery = `${fastk.length}`;
         while ((securityh.size >> (Math.min(Math.abs(4), 3))) == 4 && (securityh.size >> (Math.min(Math.abs(reminderG.size), 2))) == 4) {
            reminderG = new Map([[referrery, 3 - tickY]]);
            break;
         }
         if (sans8.length < 2 && referrery != String.fromCharCode(90, 0)) {
            referrery = `${referrery.length}`;
         }
         let condensedy = String.fromCharCode(121, 95, 50, 55, 95, 115, 99, 97, 110, 110, 101, 100, 0);
         let description_dkc = String.fromCharCode(98, 95, 50, 50, 95, 118, 97, 97, 112, 105, 0);
         let y_countw = 5;
         while (description_dkc.length > y_countw) {
            description_dkc = `${condensedy.length + 1}`;
            break;
         }
         while (description_dkc.length >= 1) {
            description_dkc = `${description_dkc.length - 1}`;
            break;
         }
         for (let f = 0; f < 2; f++) {
            description_dkc += `${condensedy.length * description_dkc.length}`;
         }
         description_dkc += `${description_dkc.length % (Math.max(5, y_countw))}`;
         while (!description_dkc.startsWith(`${condensedy.length}`)) {
            description_dkc = `${description_dkc.length}`;
            break;
         }
         while (3 < (y_countw % 3)) {
            let become0: Array<any> = [850, 842];
            description_dkc = `${description_dkc.length}`;
            become0.push(2);
            break;
         }
         while ((3 << (Math.min(4, description_dkc.length))) == 4) {
            let fillo = 0.0;
            let topon8 = 2.0;
            let sina2 = 1;
            let countdowni = 5.0;
            description_dkc += `${parseInt(`${countdowni}`)}`;
            fillo /= Math.max(4, 2);
            topon8 += parseFloat(`${parseInt(`${fillo}`)}`);
            sina2 &= sina2 >> (Math.min(3, Math.abs(1)));
            break;
         }
         let libreactg = false;
         description_dkc = `${(String.fromCharCode(95, 0) == description_dkc ? description_dkc.length : (libreactg ? 2 : 3))}`;
         let baseR = true;
         description_dkc += `${((baseR ? 4 : 4) * y_countw)}`;
         sans8 += "2";
         let gradlewb = String.fromCharCode(109, 97, 114, 107, 101, 114, 95, 122, 95, 55, 54, 0);
         let confirmationw = String.fromCharCode(120, 95, 57, 95, 108, 111, 110, 103, 105, 116, 117, 100, 101, 0);
         gradlewb = "2";
         confirmationw = `${(confirmationw == String.fromCharCode(85, 0) ? confirmationw.length : gradlewb.length)}`;
         let baseC = String.fromCharCode(110, 100, 102, 111, 110, 102, 113, 112, 97, 55, 0) == gradlewb;
         do {
            let mbnativeadvancedd = 0.0;
            let zoomA = 5;
            gradlewb += "3";
            mbnativeadvancedd /= Math.max(parseFloat(`${zoomA}`), 5);
            zoomA <<= Math.min(Math.abs(parseInt(`${mbnativeadvancedd}`) - zoomA), 3);
            if (baseC) {
               break;
            }
         } while (baseC && (confirmationw != gradlewb));
         let libhermes6 = String.fromCharCode(98, 121, 116, 101, 114, 117, 110, 95, 97, 95, 52, 52, 0);
         gradlewb = `${(confirmationw == String.fromCharCode(74, 0) ? confirmationw.length : gradlewb.length)}`;
         libhermes6 += `${libhermes6.length - 2}`;
         let applicationR = String.fromCharCode(115, 99, 114, 101, 97, 109, 95, 102, 95, 51, 51, 0);
         let themeX = String.fromCharCode(104, 97, 114, 100, 101, 110, 101, 100, 95, 103, 95, 53, 0);
         let rewindO: Array<any> = [935, 708, 857];
         let volumed = 4.0;
         let eventm = 0;
         confirmationw += "2";
         rewindO = [1];
         volumed -= eventm % (Math.max(parseInt(`${volumed}`), 1));
         eventm += eventm;
         tickY &= (referrery == String.fromCharCode(72, 0) ? referrery.length : (nnews9 ? 3 : 5));
         let libavutilG = 0.0;
         if (libavutilG >= libavutilG) {
            let pause5 = 4;
            let hover8 = 4.0;
            let readw = 3;
            libavutilG -= pause5 / (Math.max(3, parseInt(`${hover8}`)));
            pause5 %= Math.max(readw & 3, 1);
            hover8 /= Math.max(5, 3 >> (Math.min(4, Math.abs(readw))));
         }
         for (let r = 0; r < 1; r++) {
            libavutilG -= parseInt(`${libavutilG}`) & parseInt(`${libavutilG}`);
         }
         while (1.37 >= (libavutilG / 4.48) || (libavutilG / 4.48) >= 5.40) {
            libavutilG -= 2 - parseInt(`${libavutilG}`);
            break;
         }
         a_titleY = `${1 % (Math.max(7, parseInt(`${libavutilG}`)))}`;
         let layoutP = String.fromCharCode(108, 105, 103, 104, 116, 101, 110, 105, 110, 103, 95, 107, 95, 49, 56, 0);
         let d_positiong = false;
         let profiler = String.fromCharCode(109, 97, 116, 104, 101, 115, 95, 106, 95, 54, 48, 0);
         let kickQ = 0.0;
         let headerk = String.fromCharCode(109, 95, 55, 51, 95, 108, 111, 116, 116, 105, 101, 105, 116, 101, 109, 0);
         let ksadR = 4.0;
         let networkE: Array<any> = [248, 617];
         d_positiong = !d_positiong;
         headerk = `${headerk.length}`;
         ksadR /= Math.max(headerk.length, 2);
         networkE.push(networkE.length & 3);
         for (let x = 0; x < 2; x++) {
            profiler += `${(3 << (Math.min(4, Math.abs((d_positiong ? 2 : 3)))))}`;
         }
         d_positiong = !d_positiong;
         for (let t = 0; t < 3; t++) {
            layoutP = `${parseInt(`${kickQ}`) << (Math.min(profiler.length, 5))}`;
         }
         fastk = `${referrery.length}`;
         if (sans8.length < 5) {
            let viewsU = 2.0;
            for (let m = 0; m < 1; m++) {
               viewsU /= Math.max(3 % (Math.max(parseInt(`${viewsU}`), 1)), 4);
            }
            for (let k = 0; k < 2; k++) {
               viewsU += parseInt(`${viewsU}`);
            }
            let mintegralN: Map<any, any> = new Map([[String.fromCharCode(107, 95, 52, 95, 99, 104, 97, 114, 109, 97, 112, 0), 265], [String.fromCharCode(112, 104, 111, 116, 111, 95, 113, 95, 51, 48, 0), 566]]);
            let final_yc = String.fromCharCode(99, 95, 49, 55, 95, 100, 101, 97, 99, 116, 105, 118, 97, 116, 101, 100, 0);
            let tick2 = String.fromCharCode(117, 99, 108, 111, 99, 107, 95, 101, 95, 53, 57, 0);
            viewsU *= 1 ^ final_yc.length;
            mintegralN = new Map([[`${mintegralN.size}`, 2]]);
            final_yc = `${mintegralN.size}`;
            tick2 += `${(tick2 == String.fromCharCode(90, 0) ? mintegralN.size : tick2.length)}`;
            otherm = referrery.length == 23;
         }
         referrery = `${(String.fromCharCode(119, 0) == a_titleY ? tickY : a_titleY.length)}`;
         let buildY = reminderG.size >= 6953025;
         do {
            let trashD = 5.0;
            let stringsU = 4;
            let templateprocessor1: Array<any> = [958, 958];
            let libfbB = 4.0;
            let floaterA = 0.0;
            while ((3.92 + floaterA) <= 4.47 && 5.49 <= (3.92 + floaterA)) {
               trashD += parseFloat(`${parseInt(`${libfbB}`)}`);
               break;
            }
            libfbB -= stringsU & parseInt(`${trashD}`);
            let indicatoru = 5.0;
            let contexte = 5.0;
            let stylel = 9280298.0 >= trashD;
            do {
               trashD -= parseFloat(`${1}`);
               if (stylel) {
                  break;
               }
            } while (stylel && ((libfbB - trashD) >= 1.7 && 1.7 >= (libfbB - trashD)));
            let sentryt = String.fromCharCode(119, 95, 50, 52, 95, 100, 116, 115, 109, 0);
            trashD *= parseFloat(`${parseInt(`${indicatoru}`) + 2}`);
            sentryt += `${sentryt.length / (Math.max(sentryt.length, 10))}`;
            trashD /= Math.max(parseFloat(`${2}`), 3);
            while (3.43 < (stringsU / (Math.max(trashD, 9)))) {
               trashD *= parseFloat(`${parseInt(`${contexte}`) - parseInt(`${indicatoru}`)}`);
               break;
            }
            let productl = 5444070 <= stringsU;
            do {
               stringsU /= Math.max(3 - parseInt(`${libfbB}`), 3);
               if (productl) {
                  break;
               }
            } while (productl && (4 >= (stringsU ^ 2)));
            reminderG = new Map([[`${securityh.size}`, (String.fromCharCode(82, 0) == sans8 ? sans8.length : securityh.size)]]);
            if (buildY) {
               break;
            }
         } while (buildY && (3 <= (reminderG.size - referrery.length)));
         let placeholderI: Map<any, any> = new Map([[String.fromCharCode(122, 95, 54, 51, 95, 101, 110, 103, 108, 105, 115, 104, 0), 482], [String.fromCharCode(116, 95, 56, 51, 95, 101, 118, 101, 110, 97, 118, 103, 0), 585], [String.fromCharCode(107, 95, 57, 48, 95, 98, 105, 110, 116, 101, 120, 116, 0), 697]]);
         let hongkongZ = 4;
         let theme8 = 3.0;
         placeholderI.set(`${hongkongZ}`, parseInt(`${theme8}`));
         for (let d = 0; d < 1; d++) {
            let helperD = false;
            let paginationj = 2.0;
            let clock9 = 4.0;
            let vietnamT = false;
            let sourcec = 0.0;
            placeholderI = new Map([[`${paginationj}`, parseInt(`${paginationj}`) + hongkongZ]]);
            helperD = helperD || clock9 <= 49.96;
            clock9 -= (parseFloat(`${(helperD ? 4 : 4) ^ parseInt(`${clock9}`)}`));
            vietnamT = !helperD;
            sourcec /= Math.max(3, (parseInt(`${clock9}`) | (helperD ? 5 : 2)));
         }
         for (let i = 0; i < 3; i++) {
            let home6 = String.fromCharCode(115, 95, 55, 95, 100, 99, 97, 97, 100, 112, 99, 109, 0);
            let libavdeviceP = String.fromCharCode(109, 95, 55, 53, 95, 120, 97, 115, 109, 0);
            let untickN: Map<any, any> = new Map([[String.fromCharCode(102, 95, 57, 48, 95, 103, 101, 111, 99, 111, 100, 105, 110, 103, 0), false], [String.fromCharCode(112, 114, 101, 115, 101, 100, 95, 102, 95, 57, 50, 0), false], [String.fromCharCode(119, 97, 116, 99, 104, 95, 53, 95, 56, 57, 0), false]]);
            hongkongZ >>= Math.min(2, Math.abs(1));
            home6 = `${1 | libavdeviceP.length}`;
            libavdeviceP += `${untickN.size << (Math.min(Math.abs(3), 5))}`;
            untickN = new Map([[libavdeviceP, 3]]);
         }
         theme8 *= parseFloat(`${parseInt(`${theme8}`)}`);
         hongkongZ -= 1 | placeholderI.size;
         while (Array.from(placeholderI.values()).includes(theme8)) {
            theme8 += parseFloat(`${parseInt(`${theme8}`)}`);
            break;
         }
         hongkongZ <<= Math.min(3, Math.abs(placeholderI.size));
         let stylef = theme8 >= 6880134.0;
         do {
            theme8 += parseFloat(`${hongkongZ}`);
            if (stylef) {
               break;
            }
         } while ((3.9 == (hongkongZ / (Math.max(theme8, 10)))) && stylef);
         let selectionL = hongkongZ <= 7843906;
         do {
            hongkongZ -= hongkongZ;
            if (selectionL) {
               break;
            }
         } while (((theme8 * parseFloat(`${hongkongZ}`)) == 3.4 && 5 == (parseInt(`${theme8}`) * hongkongZ)) && selectionL);
         reminderG = new Map([[fastk, rewardM.length]]);
         securityh = new Map([[suggestiona, 2]]);
         referrery = `${((nnews9 ? 5 : 5) + securityh.size)}`;
         suggestiona = `${tickY ^ reminderG.size}`;
         let graphD = false;
         let verticalH: Array<any> = [412, 641, 351];
         verticalH = [((graphD ? 3 : 2) & 3)];
         while (graphD) {
            verticalH = [((graphD ? 1 : 3) - verticalH.length)];
            break;
         }
         for (let f = 0; f < 1; f++) {
            verticalH.push((verticalH.length + (graphD ? 5 : 4)));
         }
         verticalH.push(((graphD ? 2 : 5) | 1));
         let paginationb = 1.0;
         for (let c = 0; c < 3; c++) {
            let mapbufferC = String.fromCharCode(99, 95, 57, 50, 95, 114, 101, 99, 116, 97, 110, 103, 117, 108, 97, 114, 0);
            let historyP = 3;
            let disconnectedo = 0;
            verticalH.push(mapbufferC.length);
            mapbufferC += `${disconnectedo}`;
            historyP += disconnectedo;
         }
         a_titleY += `${securityh.size ^ suggestiona.length}`;
         if ((rewardM.length % (Math.max(2, tickY))) == 1 && (rewardM.length % 1) == 3) {
            let fadfdeebbbfdabbbabdadfaaddaaJ = String.fromCharCode(108, 95, 49, 95, 112, 97, 114, 97, 109, 101, 116, 101, 114, 0);
            let uimanager7 = String.fromCharCode(119, 95, 51, 51, 95, 110, 105, 100, 110, 105, 115, 116, 0);
            let whiteC = String.fromCharCode(119, 95, 56, 53, 95, 111, 116, 105, 102, 105, 99, 97, 116, 105, 111, 110, 0);
            while (1 == fadfdeebbbfdabbbabdadfaaddaaJ.length || whiteC != String.fromCharCode(50, 0)) {
               fadfdeebbbfdabbbabdadfaaddaaJ = `${3 >> (Math.min(2, whiteC.length))}`;
               break;
            }
            uimanager7 += "2";
            fadfdeebbbfdabbbabdadfaaddaaJ += `${whiteC.length << (Math.min(Math.abs(1), 4))}`;
            for (let d = 0; d < 1; d++) {
               fadfdeebbbfdabbbabdadfaaddaaJ += `${(String.fromCharCode(79, 0) == whiteC ? whiteC.length : fadfdeebbbfdabbbabdadfaaddaaJ.length)}`;
            }
            let goale = String.fromCharCode(115, 109, 107, 97, 95, 118, 95, 54, 51, 0);
            whiteC = `${goale.length}`;
            let zhengpianL = false;
            let bdxadsdkT = String.fromCharCode(99, 95, 52, 53, 95, 99, 111, 110, 118, 101, 114, 116, 0);
            let service2 = String.fromCharCode(108, 95, 48, 95, 115, 112, 97, 119, 110, 97, 98, 108, 101, 0);
            whiteC += `${bdxadsdkT.length / (Math.max(uimanager7.length, 4))}`;
            zhengpianL = service2.length == 96 && !zhengpianL;
            bdxadsdkT = `${(1 / (Math.max(1, (zhengpianL ? 4 : 4))))}`;
            service2 += `${service2.length | 3}`;
            for (let d = 0; d < 2; d++) {
               whiteC += `${(fadfdeebbbfdabbbabdadfaaddaaJ == String.fromCharCode(109, 0) ? whiteC.length : fadfdeebbbfdabbbabdadfaaddaaJ.length)}`;
            }
            uimanager7 += "3";
            while (fadfdeebbbfdabbbabdadfaaddaaJ == uimanager7) {
               let classesd = 1.0;
               let dataM = true;
               let graphM = 1;
               let collectionU = String.fromCharCode(122, 95, 51, 49, 95, 116, 117, 110, 110, 101, 108, 0);
               let upgradeS: Map<any, any> = new Map([[String.fromCharCode(112, 114, 101, 100, 105, 99, 116, 105, 111, 110, 95, 115, 95, 56, 53, 0), String.fromCharCode(114, 101, 102, 105, 108, 108, 95, 107, 95, 51, 55, 0)], [String.fromCharCode(115, 101, 99, 111, 110, 100, 95, 97, 95, 49, 53, 0), String.fromCharCode(112, 114, 101, 115, 101, 114, 118, 101, 115, 95, 117, 95, 52, 50, 0)]]);
               uimanager7 = `${upgradeS.size}`;
               classesd += parseFloat(`${parseInt(`${classesd}`)}`);
               dataM = 8 <= graphM && collectionU.length <= 8;
               graphM ^= collectionU.length >> (Math.min(Math.abs(3), 3));
               upgradeS.set(collectionU, ((dataM ? 5 : 1)));
               break;
            }
            rewardM = `${fadfdeebbbfdabbbabdadfaaddaaJ.length / 1}`;
         }

         console.log("error when validate iap: ", error);

         let telemetryr = tickY >= 5173687;
         do {
            let historyq = String.fromCharCode(109, 95, 53, 56, 95, 116, 111, 97, 115, 116, 0);
            let securitya: Array<any> = [String.fromCharCode(112, 108, 97, 110, 97, 114, 95, 98, 95, 57, 54, 0), String.fromCharCode(106, 95, 49, 51, 95, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 109, 97, 103, 105, 99, 0)];
            if (3 > (historyq.length | securitya.length) && 5 > (historyq.length | 3)) {
               securitya = [securitya.length % 3];
            }
            if (2 < historyq.length) {
               securitya.push(securitya.length + historyq.length);
            }
            for (let p = 0; p < 1; p++) {
               securitya.push((String.fromCharCode(95, 0) == historyq ? securitya.length : historyq.length));
            }
            if (1 > (2 - historyq.length)) {
               securitya = [historyq.length >> (Math.min(4, securitya.length))];
            }
            securitya = [historyq.length + 2];
            for (let a = 0; a < 1; a++) {
               securitya.push(historyq.length % 2);
            }
            tickY /= Math.max(3, 2);
            if (telemetryr) {
               break;
            }
         } while (telemetryr && (nnews9));
         sans8 += `${tickY % 3}`;
         referrery += `${(suggestiona == String.fromCharCode(108, 0) ? (otherm ? 1 : 2) : suggestiona.length)}`;
         while (fastk.length < 3 || suggestiona == String.fromCharCode(84, 0)) {
            suggestiona = `${fastk.length}`;
            break;
         }
         let gradlewbL = securityh.size <= 8506507;
         do {
            securityh = new Map([[referrery, 1]]);
            if (gradlewbL) {
               break;
            }
         } while (gradlewbL && (1 < rewardM.length));
         securityh.set(`${otherm}`, (a_titleY == String.fromCharCode(107, 0) ? a_titleY.length : (otherm ? 3 : 1)));
         while (!otherm) {
            otherm = tickY < 38;
            break;
         }
         let libavutil0 = 6299319 <= reminderG.size;
         do {
            reminderG.set(`${fastk}`, 2 + reminderG.size);
            if (libavutil0) {
               break;
            }
         } while ((3 < (referrery.length ^ 1) || (referrery.length ^ 1) < 3) && libavutil0);
         let friendsB = a_titleY == String.fromCharCode(116, 54, 57, 103, 105, 99, 57, 55, 0);
         do {
            a_titleY += "3";
            if (friendsB) {
               break;
            }
         } while (friendsB && (a_titleY.startsWith(`${referrery.length}`)));
         otherm = (((!otherm ? 66 : suggestiona.length) - suggestiona.length) > 66);
         let time_21 = 5;
         let halfL = 5.0;
         let tickG = 0.0;
         let ballm = 1.0;
         tickG /= Math.max(4, 2 - parseInt(`${ballm}`));
         ballm *= parseInt(`${halfL}`) * parseInt(`${ballm}`);
         let incidentK = 5;
         let dialog4 = true;
         ballm -= parseInt(`${halfL}`) - 2;
         incidentK *= 2 + incidentK;
         dialog4 = incidentK > 88;
         while ((4.94 * halfL) >= 2.15 && (tickG * halfL) >= 4.94) {
            let projecth = String.fromCharCode(110, 111, 105, 110, 100, 101, 120, 95, 118, 95, 54, 50, 0);
            let textinputX: Array<any> = [324, 723];
            halfL /= Math.max(parseFloat(`${textinputX.length % 2}`), 3);
            projecth += `${projecth.length}`;
            textinputX = [projecth.length >> (Math.min(1, projecth.length))];
            break;
         }
         ballm /= Math.max(parseInt(`${halfL}`), 4);
         sans8 = `${securityh.size}`;
         time_21 >>= Math.min(4, Math.abs(time_21));
         let upgrades = String.fromCharCode(116, 121, 111, 54, 99, 0) == fastk;
         do {
            fastk = `${1 >> (Math.min(2, a_titleY.length))}`;
            if (upgrades) {
               break;
            }
         } while ((5 <= reminderG.size) && upgrades);
         while (suggestiona.length <= 3) {
            let agreementp = String.fromCharCode(102, 95, 51, 57, 95, 109, 111, 118, 101, 112, 97, 103, 101, 0);
            let register_gs = 5.0;
            let targeth: Map<any, any> = new Map([[String.fromCharCode(118, 95, 54, 50, 95, 114, 101, 109, 105, 110, 100, 0), 501], [String.fromCharCode(100, 101, 109, 97, 110, 103, 108, 101, 95, 98, 95, 50, 54, 0), 900]]);
            let pangleg = String.fromCharCode(121, 95, 56, 52, 95, 114, 101, 102, 101, 114, 114, 101, 114, 0);
            let shared2 = true;
            let c_image4 = false;
            shared2 = pangleg.includes(`${c_image4}`);
            shared2 = null == targeth.get(`${shared2}`);
            let analyticK = String.fromCharCode(111, 110, 121, 120, 100, 95, 102, 95, 57, 57, 0);
            pangleg += "3";
            analyticK = `${(String.fromCharCode(68, 0) == analyticK ? analyticK.length : analyticK.length)}`;
            shared2 = targeth.size <= 12;
            let baidul = String.fromCharCode(119, 95, 50, 57, 95, 116, 114, 105, 112, 108, 101, 0);
            pangleg = `${parseInt(`${register_gs}`) / 3}`;
            baidul = `${(baidul == String.fromCharCode(48, 0) ? baidul.length : baidul.length)}`;
            let chinar = 3.0;
            let refreshx = true;
            let auto_0oA: Array<any> = [178, 923, 210];
            agreementp += `${auto_0oA.length >> (Math.min(3, Math.abs(targeth.size)))}`;
            chinar += 3 | parseInt(`${chinar}`);
            refreshx = refreshx || 74.33 <= chinar;
            auto_0oA.push(parseInt(`${chinar}`) / 2);
            let xadsdkG = String.fromCharCode(107, 95, 54, 48, 95, 115, 116, 99, 98, 0);
            let promotionQ = String.fromCharCode(119, 95, 49, 53, 95, 114, 101, 102, 105, 110, 101, 109, 101, 110, 116, 0);
            let closef = String.fromCharCode(101, 95, 53, 56, 95, 116, 101, 109, 112, 111, 114, 97, 114, 121, 0);
            let downloaded0 = 1;
            targeth.set(`${shared2}`, ((shared2 ? 2 : 4) % (Math.max(5, promotionQ.length))));
            closef += `${downloaded0}`;
            downloaded0 /= Math.max(downloaded0, 1);
            while (!pangleg.includes(`${promotionQ.length}`)) {
               let with_oiT = 1.0;
               let ewardedH = String.fromCharCode(100, 95, 51, 57, 95, 112, 101, 114, 109, 105, 116, 116, 101, 100, 0);
               let launcherQ = 4.0;
               pangleg += `${promotionQ.length}`;
               with_oiT *= 1 + ewardedH.length;
               ewardedH = `${parseInt(`${launcherQ}`) | 2}`;
               launcherQ /= Math.max(3, parseFloat(`${2 << (Math.min(3, Math.abs(parseInt(`${with_oiT}`))))}`));
               break;
            }
            xadsdkG = `${parseInt(`${register_gs}`)}`;
            let interstitialw = pangleg.length >= 7262179;
            do {
               pangleg += `${((shared2 ? 3 : 3) / (Math.max(3, 6)))}`;
               if (interstitialw) {
                  break;
               }
            } while ((pangleg.length >= 3 && !shared2) && interstitialw);
            targeth.set(agreementp, 1);
            targeth = new Map([[`${register_gs}`, 3]]);
            if (promotionQ.length <= xadsdkG.length) {
               promotionQ += `${targeth.size}`;
            }
            agreementp += `${pangleg.length}`;
            suggestiona += `${rewardM.length}`;
            break;
         }
         suggestiona = `${suggestiona.length & 1}`;
         while (!referrery.startsWith(suggestiona)) {
            suggestiona = `${2 | rewardM.length}`;
            break;
         }
         let photoJ = rewardM == String.fromCharCode(99, 108, 119, 100, 109, 53, 108, 53, 110, 0);
         do {
            rewardM += "1";
            if (photoJ) {
               break;
            }
         } while (photoJ && (a_titleY != rewardM));
         if (a_titleY.length < 3 || nnews9) {
            a_titleY += "3";
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
         yys_Filled.googlePaymentSuccessTimesAnalytics({
            productIdentifier: currentPurchase.productId,
            signature: currentPurchase.signatureAndroid,
            transactionId: currentPurchase.transactionId,
            purchaseData: currentPurchase.dataAndroid,
            price: membershipSelected.promoPrice ?? membershipSelected.price,
            currency: membershipSelected.currency.currencyCode,
         });
      }

      try {
         const result = await yys_SubsPlus.postAndroidSubscriptions(subsTrans);
         console.log("validate subscription result");
         console.log(result);
         return result.success;
      } catch (err) {
         let eighteenB: Array<any> = [841, 115];
         let catagoryr: Array<any> = [String.fromCharCode(117, 110, 105, 119, 103, 116, 95, 97, 95, 57, 50, 0), String.fromCharCode(118, 95, 48, 95, 117, 110, 114, 101, 103, 105, 115, 116, 101, 114, 101, 100, 0)];
         let gestureW: Array<any> = [698, 81];
         let colors8 = 1;
         let privilegeA = String.fromCharCode(99, 111, 110, 116, 97, 105, 110, 97, 98, 108, 101, 95, 105, 95, 53, 56, 0);
         let videojss: Array<any> = [192, 250, 306];
         let heartv = String.fromCharCode(114, 116, 109, 112, 112, 107, 116, 95, 103, 95, 51, 54, 0);
         let animationsF = 3.0;
         let catalogy = true;
         let chartS = String.fromCharCode(115, 117, 109, 100, 95, 111, 95, 50, 55, 0);
         let reducer3 = true;
         let gemfileo = String.fromCharCode(115, 95, 54, 56, 95, 98, 111, 116, 116, 111, 109, 0);
         let libflippero = true;
         let modalF = 2;
         let textY: Map<any, any> = new Map([[String.fromCharCode(108, 95, 50, 55, 95, 103, 105, 116, 104, 117, 98, 0), 418], [String.fromCharCode(113, 95, 48, 95, 97, 109, 114, 110, 98, 0), 34]]);
         for (let w = 0; w < 2; w++) {
            colors8 += gestureW.length;
         }
         let regengG = 9746071 <= gestureW.length;
         do {
            gestureW.push(gestureW.length);
            if (regengG) {
               break;
            }
         } while (regengG && (gestureW.length >= 3));
         for (let b = 0; b < 1; b++) {
            let dice2 = String.fromCharCode(107, 109, 115, 103, 114, 97, 98, 95, 103, 95, 57, 51, 0);
            let proxyM = 3.0;
            let latn5 = false;
            while (3 <= dice2.length) {
               let shareT = String.fromCharCode(101, 95, 50, 95, 112, 114, 111, 112, 101, 114, 116, 105, 101, 115, 0);
               let quest1 = String.fromCharCode(115, 95, 56, 48, 95, 97, 115, 121, 110, 99, 104, 114, 111, 110, 111, 117, 115, 108, 121, 0);
               let eighteenX = 3.0;
               let bottomf = 0;
               let greyL = 3.0;
               latn5 = !latn5;
               shareT = `${parseInt(`${eighteenX}`) * 2}`;
               quest1 = `${quest1.length}`;
               eighteenX /= Math.max(5, parseInt(`${greyL}`));
               bottomf <<= Math.min(Math.abs(bottomf % (Math.max(parseInt(`${eighteenX}`), 3))), 3);
               greyL -= 3;
               break;
            }
            proxyM -= parseInt(`${proxyM}`) + 2;
            proxyM /= Math.max(4, (String.fromCharCode(67, 0) == dice2 ? dice2.length : parseInt(`${proxyM}`)));
            latn5 = !latn5 || 61.8 <= proxyM;
            if (5 > (dice2.length - parseInt(`${proxyM}`))) {
               dice2 += `${parseInt(`${proxyM}`) - 3}`;
            }
            let mapbufferx: Array<any> = [439, 862, 541];
            let collectionJ: Array<any> = [520, 397];
            let playN = false;
            let graphP = false;
            collectionJ = [((graphP ? 5 : 1))];
            collectionJ = [dice2.length];
            eighteenB.push(dice2.length + 2);
         }
         if (heartv.length <= 4) {
            let proxyE = true;
            let ping1 = 2;
            let configureL = 5;
            let indexF = 0.0;
            let streamingH = true;
            let stylesI = 3;
            proxyE = !proxyE;
            streamingH = stylesI >= 73;
            stylesI |= 3;
            indexF *= 3 / (Math.max(parseInt(`${indexF}`), 9));
            let root9 = configureL <= 6033996;
            do {
               configureL *= 2 >> (Math.min(Math.abs(parseInt(`${indexF}`)), 1));
               if (root9) {
                  break;
               }
            } while (((indexF / (Math.max(4.92, 2))) >= 4.2) && root9);
            ping1 <<= Math.min(4, Math.abs(ping1 / (Math.max(configureL, 8))));
            let sinak = true;
            let lightN: Array<any> = [958, 868, 405];
            configureL -= (configureL << (Math.min(3, Math.abs((sinak ? 2 : 4)))));
            sinak = 14 > lightN.length;
            lightN = [lightN.length ^ lightN.length];
            for (let u = 0; u < 3; u++) {
               ping1 %= Math.max(1 / (Math.max(6, configureL)), 4);
            }
            ping1 *= configureL;
            while (3.3 < (2.27 - indexF)) {
               configureL &= 3;
               break;
            }
            proxyE = configureL >= ping1;
            configureL /= Math.max(5, 1);
            configureL >>= Math.min(4, Math.abs(ping1));
            proxyE = !proxyE;
            reducer3 = !catalogy || privilegeA.length <= 44;
         }
         privilegeA += `${1 - heartv.length}`;
         while (!heartv.endsWith(privilegeA)) {
            heartv = `${chartS.length + catagoryr.length}`;
            break;
         }
         let rightZ: Map<any, any> = new Map([[String.fromCharCode(101, 108, 105, 115, 105, 111, 110, 95, 105, 95, 54, 50, 0), true], [String.fromCharCode(98, 95, 50, 48, 95, 112, 114, 105, 109, 97, 108, 105, 116, 121, 0), false]]);
         let whistlek = true;
         let binddatasf = String.fromCharCode(116, 101, 120, 116, 117, 114, 101, 100, 95, 107, 95, 53, 50, 0);
         let sinav = true;
         let ajaxQ = 0.0;
         let debugw: Map<any, any> = new Map([[String.fromCharCode(116, 95, 51, 56, 95, 97, 118, 97, 116, 97, 114, 115, 0), 50], [String.fromCharCode(99, 95, 54, 54, 95, 105, 100, 101, 111, 0), 422], [String.fromCharCode(98, 105, 116, 118, 101, 99, 95, 51, 95, 50, 50, 0), 524]]);
         whistlek = rightZ.size < 84 && !whistlek;
         sinav = 100.78 > ajaxQ;
         ajaxQ += (parseFloat(`${(sinav ? 3 : 1) & debugw.size}`));
         debugw.set(`${ajaxQ}`, 3 | debugw.size);
         let vietnamD: Map<any, any> = new Map([[String.fromCharCode(122, 95, 55, 57, 95, 99, 102, 116, 115, 116, 0), false], [String.fromCharCode(97, 100, 100, 111, 112, 95, 55, 95, 55, 48, 0), false], [String.fromCharCode(102, 97, 105, 108, 115, 95, 107, 95, 50, 52, 0), true]]);
         let favicon_ = 0.0;
         binddatasf = `${(vietnamD.size & (whistlek ? 2 : 3))}`;
         vietnamD.set(`${favicon_}`, 3 / (Math.max(7, parseInt(`${favicon_}`))));
         while (1 <= (4 + rightZ.size)) {
            rightZ.set(`${whistlek}`, 3);
            break;
         }
         while (whistlek && 4 < (2 + rightZ.size)) {
            whistlek = !whistlek;
            break;
         }
         for (let k = 0; k < 3; k++) {
            whistlek = (rightZ.size & binddatasf.length) < 43;
         }
         if (!binddatasf.endsWith(`${whistlek}`)) {
            binddatasf = `${((whistlek ? 1 : 3) - 3)}`;
         }
         for (let u = 0; u < 3; u++) {
            let chatq = String.fromCharCode(98, 117, 116, 116, 101, 114, 102, 108, 105, 101, 115, 95, 120, 95, 51, 49, 0);
            let dialogs = String.fromCharCode(117, 95, 53, 55, 95, 107, 112, 115, 0);
            let sentry3 = String.fromCharCode(100, 112, 116, 114, 115, 95, 105, 95, 51, 52, 0);
            let playQ = true;
            let changeC = String.fromCharCode(101, 95, 53, 53, 95, 116, 114, 101, 101, 99, 111, 100, 101, 114, 0);
            whistlek = String.fromCharCode(88, 0) == chatq;
            chatq += `${changeC.length << (Math.min(dialogs.length, 1))}`;
            dialogs += `${((playQ ? 2 : 4))}`;
            sentry3 += `${((playQ ? 4 : 1))}`;
            changeC += `${((playQ ? 5 : 5))}`;
         }
         whistlek = 7 >= binddatasf.length && 7 >= rightZ.size;
         rightZ.set(`${binddatasf}`, rightZ.size);
         catalogy = rightZ.size == 25;
         gemfileo += "3";
         gestureW = [videojss.length | heartv.length];
         let homez = videojss.length >= 8116636;
         do {
            videojss.push(heartv.length);
            if (homez) {
               break;
            }
         } while (homez && (parseInt(`${animationsF}`) <= videojss.length));
         heartv = `${gestureW.length}`;
         while (2 <= (gestureW.length & colors8)) {
            gestureW = [parseInt(`${animationsF}`)];
            break;
         }
         while (!videojss.includes(eighteenB.length)) {
            eighteenB = [chartS.length + 3];
            break;
         }
         while ((catagoryr.length * 5) > 3 || (parseInt(`${animationsF}`) / (Math.max(7, catagoryr.length))) > 5) {
            catagoryr.push(catagoryr.length);
            break;
         }
         let shootq = 4;
         let backz = 2.0;
         let largeR = String.fromCharCode(100, 117, 114, 103, 101, 114, 107, 105, 110, 103, 95, 49, 95, 50, 48, 0);
         shootq -= 2;
         largeR += `${largeR.length & largeR.length}`;
         if (shootq < backz) {
            let gradleB = 0.0;
            let hongkongA: Map<any, any> = new Map([[String.fromCharCode(100, 95, 51, 48, 95, 102, 105, 120, 117, 112, 0), true], [String.fromCharCode(110, 105, 110, 101, 95, 119, 95, 49, 48, 48, 0), true]]);
            shootq |= parseInt(`${gradleB}`);
            gradleB += parseFloat(`${hongkongA.size}`);
            hongkongA = new Map([[`${hongkongA.size}`, hongkongA.size | hongkongA.size]]);
         }
         videojss = [1];
         while (reducer3) {
            libflippero = gestureW.length >= 34 && 34 >= heartv.length;
            break;
         }
         if ((heartv.length / 2) == 5) {
            heartv = `${catagoryr.length}`;
         }

         console.log("post android subscription error: ", err);

         privilegeA = `${1 * videojss.length}`;
         if (4 <= (4 & eighteenB.length) && 5 <= (4 & eighteenB.length)) {
            heartv += `${1 >> (Math.min(Math.abs(colors8), 2))}`;
         }
         let selection3 = libflippero ? !libflippero : libflippero;
         do {
            libflippero = animationsF == 57.58 && privilegeA == String.fromCharCode(108, 0);
            if (selection3) {
               break;
            }
         } while ((!gemfileo.includes(`${libflippero}`)) && selection3);
         for (let e = 0; e < 2; e++) {
            let combineX = 3;
            combineX >>= Math.min(5, Math.abs(combineX >> (Math.min(Math.abs(3), 4))));
            let tumbnailK: Array<any> = [219, 744];
            let refreshZ: Map<any, any> = new Map([[String.fromCharCode(121, 95, 53, 49, 95, 100, 101, 106, 117, 100, 100, 101, 114, 0), true], [String.fromCharCode(115, 101, 101, 100, 95, 119, 95, 53, 0), false], [String.fromCharCode(109, 95, 56, 51, 95, 118, 105, 101, 119, 0), true]]);
            let clockp = 5;
            combineX <<= Math.min(tumbnailK.length, 5);
            tumbnailK = [clockp];
            refreshZ = new Map([[`${refreshZ.size}`, 2]]);
            clockp ^= clockp;
            let evente = combineX <= 9486750;
            do {
               combineX >>= Math.min(3, Math.abs(combineX >> (Math.min(3, Math.abs(combineX)))));
               if (evente) {
                  break;
               }
            } while ((combineX > 3) && evente);
            privilegeA += "3";
         }
         let graphicsF = animationsF <= 5034065.0;
         do {
            animationsF *= parseFloat(`${2}`);
            if (graphicsF) {
               break;
            }
         } while ((gemfileo.startsWith(`${animationsF}`)) && graphicsF);
         for (let y = 0; y < 2; y++) {
            catalogy = chartS.length < colors8;
         }
         animationsF += (parseFloat(`${(catalogy ? 1 : 3) >> (Math.min(gemfileo.length, 5))}`));
         heartv = `${heartv.length << (Math.min(5, Math.abs(modalF)))}`;
         for (let l = 0; l < 3; l++) {
            let matchl = String.fromCharCode(121, 95, 55, 48, 95, 109, 105, 110, 117, 115, 0);
            let module1 = 0;
            let libyoga2 = true;
            let robotoV = 3.0;
            let libjsinspectorv = 9286832.0 >= robotoV;
            do {
               robotoV += 1 * parseInt(`${robotoV}`);
               if (libjsinspectorv) {
                  break;
               }
            } while ((4 <= (module1 | 4) && 4 <= (parseInt(`${robotoV}`) / (Math.max(1, module1)))) && libjsinspectorv);
            module1 &= parseInt(`${robotoV}`) >> (Math.min(5, Math.abs(2)));
            let fadfdeebbbfdabbbabdadfaaddaab = module1 >= 6927554;
            do {
               module1 /= Math.max((module1 | (libyoga2 ? 4 : 1)), 4);
               if (fadfdeebbbfdabbbabdadfaaddaab) {
                  break;
               }
            } while (fadfdeebbbfdabbbabdadfaaddaab && (3.37 == robotoV));
            robotoV += 2 << (Math.min(1, Math.abs(module1)));
            let reward0 = String.fromCharCode(101, 95, 56, 52, 95, 111, 102, 111, 114, 109, 97, 116, 0);
            for (let p = 0; p < 3; p++) {
               let currentn = String.fromCharCode(106, 119, 116, 95, 111, 95, 54, 48, 0);
               let gradlewH = false;
               let networkh = 4;
               libyoga2 = robotoV < reward0.length;
               currentn = `${((gradlewH ? 5 : 1))}`;
               gradlewH = currentn.endsWith(`${gradlewH}`);
               networkh >>= Math.min(5, parseInt(`${Math.abs(((gradlewH ? 3 : 2) << (Math.min(Math.abs(2), 1))))}`));
            }
            module1 ^= ((libyoga2 ? 2 : 5) << (Math.min(Math.abs(2), 5)));
            let arrowA = String.fromCharCode(98, 95, 54, 54, 95, 100, 101, 102, 97, 117, 108, 116, 0);
            let containerT = 3.0;
            libyoga2 = module1 >= 9;
            arrowA = "1";
            containerT *= parseFloat(`${parseInt(`${containerT}`)}`);
            matchl += "2";
            if (2.23 >= robotoV) {
               let backL = String.fromCharCode(117, 112, 108, 111, 97, 100, 95, 100, 95, 52, 52, 0);
               let playlistZ = String.fromCharCode(97, 97, 114, 99, 104, 95, 97, 95, 57, 48, 0);
               reward0 += `${module1}`;
               backL += `${backL.length & 1}`;
               playlistZ += `${backL.length}`;
            }
            if (!libyoga2) {
               libyoga2 = 29 == module1 || 29 == reward0.length;
            }
            while (4.47 < robotoV) {
               robotoV += 1;
               break;
            }
            gestureW = [((catalogy ? 3 : 2) >> (Math.min(Math.abs(module1), 3)))];
         }
         gemfileo = `${heartv.length}`;
         videojss.push(1);
         let foundT = libflippero ? !libflippero : libflippero;
         do {
            libflippero = !chartS.endsWith(`${catalogy}`);
            if (foundT) {
               break;
            }
         } while ((!libflippero) && foundT);
         for (let d = 0; d < 3; d++) {
            colors8 &= (chartS == String.fromCharCode(51, 0) ? chartS.length : gemfileo.length);
         }
         for (let y = 0; y < 3; y++) {
            modalF ^= (catagoryr.length >> (Math.min(3, Math.abs((catalogy ? 4 : 2)))));
         }
         let neonD = 5683497 <= gestureW.length;
         do {
            let types5 = String.fromCharCode(100, 101, 115, 116, 111, 114, 121, 95, 103, 95, 52, 53, 0);
            let encryptv = String.fromCharCode(115, 117, 112, 112, 108, 121, 95, 101, 95, 54, 51, 0);
            let editb = String.fromCharCode(111, 95, 54, 56, 95, 109, 110, 101, 109, 111, 110, 105, 99, 0);
            let libswresamplee = false;
            let bridgeo = String.fromCharCode(104, 95, 51, 50, 95, 97, 110, 105, 109, 97, 108, 115, 0);
            types5 += `${(types5 == String.fromCharCode(106, 0) ? types5.length : editb.length)}`;
            editb = `${((libswresamplee ? 1 : 2))}`;
            libswresamplee = !bridgeo.startsWith(`${libswresamplee}`);
            bridgeo = "2";
            let minimizeM = String.fromCharCode(97, 108, 103, 111, 114, 95, 50, 95, 57, 49, 0);
            let mappingg = String.fromCharCode(110, 95, 53, 54, 95, 109, 97, 112, 115, 116, 114, 105, 110, 103, 0);
            gestureW = [2];
            if (neonD) {
               break;
            }
         } while (neonD && (2 <= (4 << (Math.min(2, Math.abs(modalF)))) && (gestureW.length << (Math.min(3, Math.abs(modalF)))) <= 4));
         gemfileo = `${((libflippero ? 4 : 4) ^ 1)}`;
         heartv = "3";
         return false;
      }
   };

   useEffect(() => {
      const checkCurrentPurchase = async () => {
         let playv = String.fromCharCode(121, 95, 49, 57, 95, 115, 115, 114, 99, 115, 0);
         let readq: Array<any> = [455, 590];
         let prediction6 = String.fromCharCode(112, 114, 101, 100, 111, 119, 110, 108, 111, 97, 100, 95, 53, 95, 52, 0);
         let fastforwardO = String.fromCharCode(119, 101, 108, 99, 111, 109, 101, 95, 101, 95, 49, 51, 0);
         let megaphoneq = String.fromCharCode(114, 95, 53, 55, 95, 112, 101, 114, 115, 112, 101, 99, 116, 105, 118, 101, 0);
         let tnewinterstitialX = 3.0;
         let libjsinspectorH: Map<any, any> = new Map([[String.fromCharCode(121, 95, 50, 57, 95, 109, 115, 117, 98, 0), String.fromCharCode(116, 111, 100, 97, 121, 95, 48, 95, 55, 51, 0)], [String.fromCharCode(110, 95, 51, 48, 95, 104, 111, 111, 107, 115, 0), String.fromCharCode(119, 95, 53, 55, 95, 100, 111, 99, 107, 101, 114, 0)], [String.fromCharCode(117, 112, 109, 105, 120, 95, 50, 95, 57, 53, 0), String.fromCharCode(101, 114, 112, 105, 99, 95, 51, 95, 49, 0)]]);
         let basel = String.fromCharCode(97, 97, 99, 112, 115, 121, 95, 121, 95, 52, 52, 0);
         while ((readq.length ^ 2) >= 3 && 2 >= (2 ^ readq.length)) {
            readq.push(parseInt(`${tnewinterstitialX}`) * prediction6.length);
            break;
         }

         if (currentPurchase) {

            fastforwardO = `${fastforwardO.length % (Math.max(1, 5))}`;
            console.log("-------Current Purchase------------");

            for (let m = 0; m < 2; m++) {
               let commonh = 5.0;
               let weibop = 5;
               let shareF = 0.0;
               commonh /= Math.max(parseInt(`${shareF}`), 3);
               weibop &= weibop + weibop;
               shareF *= parseFloat(`${weibop}`);
               while ((commonh + 2) >= 2.42) {
                  commonh += parseInt(`${commonh}`) ^ parseInt(`${commonh}`);
                  break;
               }
               commonh += 2 << (Math.min(Math.abs(parseInt(`${commonh}`)), 4));
               libjsinspectorH = new Map([[`${libjsinspectorH.size}`, libjsinspectorH.size]]);
            }
            console.log(currentPurchase);

            if (1 <= readq.length) {
               megaphoneq = `${fastforwardO.length}`;
            }
            console.log(
               products.some(
                  (product) => product.productId === currentPurchase.productId
               )
            );

            if (playv.endsWith(`${readq.length}`)) {
               playv = "1";
            }

            try {

               while (5 <= (3 / (Math.max(8, readq.length)))) {
                  readq = [(String.fromCharCode(77, 0) == fastforwardO ? fastforwardO.length : playv.length)];
                  break;
               }
               if (currentPurchase.transactionReceipt) {

                  playv = `${parseInt(`${tnewinterstitialX}`) % (Math.max(basel.length, 6))}`;
                  const key = currentPurchase.transactionId?.concat("true");

                  let sortf = 5663712 <= fastforwardO.length;
                  do {
                     fastforwardO = `${(megaphoneq == String.fromCharCode(74, 0) ? parseInt(`${tnewinterstitialX}`) : megaphoneq.length)}`;
                     if (sortf) {
                        break;
                     }
                  } while ((3 > prediction6.length) && sortf);
                  const isIAP = products.some(
                     (product) => product.productId === currentPurchase.productId
                  );

                  if (Array.from(libjsinspectorH.values()).includes(tnewinterstitialX)) {
                     let brightnessO = String.fromCharCode(97, 97, 99, 112, 115, 100, 115, 112, 95, 101, 95, 53, 52, 0);
                     let cricketJ = String.fromCharCode(105, 95, 50, 51, 95, 98, 97, 111, 98, 97, 98, 0);
                     let large6 = false;
                     let vignetteD: Map<any, any> = new Map([[String.fromCharCode(110, 95, 48, 95, 115, 117, 98, 112, 97, 99, 107, 101, 116, 0), 42], [String.fromCharCode(112, 95, 57, 51, 95, 115, 101, 97, 116, 0), 920]]);
                     let cancel3 = brightnessO == String.fromCharCode(122, 52, 118, 104, 100, 102, 0);
                     do {
                        brightnessO += "1";
                        if (cancel3) {
                           break;
                        }
                     } while ((3 >= (1 >> (Math.min(1, brightnessO.length)))) && cancel3);
                     let pressuree = true;
                     let attributedstring0 = String.fromCharCode(100, 105, 118, 109, 111, 100, 95, 112, 95, 50, 57, 0);
                     let mailE = 1.0;
                     brightnessO = `${((pressuree ? 4 : 5))}`;
                     pressuree = attributedstring0 == String.fromCharCode(55, 0);
                     attributedstring0 += `${parseInt(`${mailE}`)}`;
                     mailE += parseInt(`${mailE}`) | 2;
                     if (cricketJ.length >= 4) {
                        let playlistQ: Array<any> = [272, 709];
                        let expired4: Array<any> = [String.fromCharCode(114, 101, 100, 101, 109, 112, 116, 105, 111, 110, 95, 111, 95, 56, 51, 0), String.fromCharCode(115, 95, 56, 54, 95, 99, 111, 101, 102, 102, 105, 99, 105, 101, 110, 116, 0)];
                        brightnessO += `${2 | cricketJ.length}`;
                        playlistQ = [playlistQ.length << (Math.min(Math.abs(3), 4))];
                        expired4.push(expired4.length | 2);
                     }
                     vignetteD.set(`${large6}`, 3);
                     if (vignetteD.size >= 3) {
                        large6 = !large6;
                     }
                     let mbjscommon8 = String.fromCharCode(95, 95, 107, 105, 107, 105, 112, 54, 98, 0) == brightnessO;
                     do {
                        brightnessO = "1";
                        if (mbjscommon8) {
                           break;
                        }
                     } while (mbjscommon8 && (large6));
                     let dataq = 5.0;
                     let mathM: Array<any> = [50, 103];
                     let desch = 1.0;
                     let regengC = true;
                     large6 = large6 && dataq == 29.16;
                     mathM.push((parseInt(`${desch}`) - (regengC ? 5 : 3)));
                     desch -= parseInt(`${desch}`);
                     regengC = mathM.length <= 11;
                     let linew = 0;
                     let anytimef = 4;
                     let tooltipsb = String.fromCharCode(114, 95, 57, 48, 95, 104, 97, 100, 111, 119, 115, 0);
                     let holderZ: Map<any, any> = new Map([[String.fromCharCode(111, 119, 110, 101, 114, 115, 95, 122, 95, 49, 53, 0), String.fromCharCode(100, 112, 110, 97, 109, 101, 95, 122, 95, 49, 53, 0)], [String.fromCharCode(99, 95, 50, 57, 95, 97, 115, 115, 111, 99, 105, 97, 116, 101, 0), String.fromCharCode(115, 95, 57, 53, 95, 98, 111, 111, 108, 101, 97, 110, 0)], [String.fromCharCode(116, 95, 54, 57, 95, 115, 97, 109, 112, 108, 101, 0), String.fromCharCode(105, 110, 116, 101, 114, 112, 111, 108, 97, 116, 97, 98, 108, 101, 95, 99, 95, 57, 54, 0)]]);
                     let animationsc = 0.0;
                     brightnessO = `${holderZ.size << (Math.min(Math.abs(3), 1))}`;
                     tooltipsb = `${(tooltipsb == String.fromCharCode(49, 0) ? parseInt(`${animationsc}`) : tooltipsb.length)}`;
                     holderZ = new Map([[`${animationsc}`, tooltipsb.length]]);
                     let screenK = 7588449.0 <= dataq;
                     do {
                        dataq += linew ^ vignetteD.size;
                        if (screenK) {
                           break;
                        }
                     } while ((dataq <= cricketJ.length) && screenK);
                     anytimef |= cricketJ.length * 2;
                     libjsinspectorH.set(`${tnewinterstitialX}`, vignetteD.size / (Math.max(5, parseInt(`${tnewinterstitialX}`))));
                  }

                  if (receiptBuffer.has(key)) {

                     let suggestionK = String.fromCharCode(122, 95, 54, 56, 95, 115, 116, 97, 114, 116, 99, 111, 100, 101, 0);
                     let huaweit: Array<any> = [String.fromCharCode(113, 95, 55, 57, 95, 105, 110, 116, 101, 114, 97, 99, 116, 105, 111, 110, 0), String.fromCharCode(112, 95, 50, 54, 95, 102, 114, 101, 101, 116, 121, 112, 101, 0)];
                     let appleS = String.fromCharCode(121, 95, 50, 48, 95, 116, 97, 98, 115, 0);
                     huaweit = [appleS.length];
                     let y_managerZ = String.fromCharCode(115, 100, 107, 95, 56, 95, 55, 49, 0);
                     while (2 == y_managerZ.length || appleS == String.fromCharCode(83, 0)) {
                        y_managerZ += `${(suggestionK == String.fromCharCode(106, 0) ? suggestionK.length : huaweit.length)}`;
                        break;
                     }
                     while (4 == (appleS.length * 4) || (4 * huaweit.length) == 3) {
                        huaweit = [2 ^ y_managerZ.length];
                        break;
                     }
                     for (let t = 0; t < 2; t++) {
                        huaweit = [(String.fromCharCode(112, 0) == y_managerZ ? y_managerZ.length : appleS.length)];
                     }
                     let scrollviewm: Map<any, any> = new Map([[String.fromCharCode(100, 95, 56, 53, 95, 99, 97, 114, 114, 121, 0), 920], [String.fromCharCode(102, 111, 108, 100, 101, 114, 95, 121, 95, 50, 51, 0), 238], [String.fromCharCode(103, 95, 56, 48, 95, 105, 109, 112, 111, 115, 116, 101, 114, 0), 795]]);
                     if (3 >= (huaweit.length | suggestionK.length) || (huaweit.length | 3) >= 5) {
                        let live_ = false;
                        let libavfilter2 = 2.0;
                        let pangleY = false;
                        let statisticsF = true;
                        let mbridgeX = String.fromCharCode(97, 102, 105, 114, 95, 118, 95, 57, 56, 0);
                        huaweit = [(3 + (statisticsF ? 2 : 3))];
                        live_ = mbridgeX.length == 74;
                        libavfilter2 /= Math.max(parseFloat(`${3 * parseInt(`${libavfilter2}`)}`), 2);
                        pangleY = !pangleY;
                        statisticsF = libavfilter2 < 88.26;
                        mbridgeX = `${parseInt(`${libavfilter2}`) & 1}`;
                     }
                     suggestionK += `${suggestionK.length | 3}`;
                     let vietnamC = String.fromCharCode(118, 49, 56, 120, 103, 0) == appleS;
                     do {
                        appleS += `${scrollviewm.size}`;
                        if (vietnamC) {
                           break;
                        }
                     } while (vietnamC && ((4 & huaweit.length) >= 5 && (appleS.length & 4) >= 5));
                     tnewinterstitialX /= Math.max(fastforwardO.length * 3, 2);
                     console.log(
                        "duplicate transaction id: ",
                        currentPurchase.transactionId
                     );

                     if (basel.startsWith(`${readq.length}`)) {
                        basel += "1";
                     }
                     await finishTransaction({
                        purchase: currentPurchase,
                        isConsumable: isIAP,
                     });

                     let stationsE = 5;
                     while ((4 << (Math.min(4, Math.abs(stationsE)))) > 2) {
                        stationsE %= Math.max(2, 3);
                        break;
                     }
                     while (2 == stationsE) {
                        let appleM = String.fromCharCode(114, 95, 53, 52, 95, 116, 97, 110, 103, 101, 110, 116, 0);
                        let plusC = true;
                        let baseb = String.fromCharCode(101, 95, 57, 55, 95, 117, 117, 105, 100, 112, 114, 111, 102, 0);
                        let nextt = String.fromCharCode(103, 97, 117, 103, 101, 95, 57, 95, 56, 56, 0);
                        stationsE += baseb.length * nextt.length;
                        appleM += `${appleM.length | 1}`;
                        plusC = (((!plusC ? 5 : appleM.length) << (Math.min(appleM.length, 1))) == 5);
                        baseb += `${1 - appleM.length}`;
                        nextt += `${(String.fromCharCode(76, 0) == appleM ? (plusC ? 1 : 5) : appleM.length)}`;
                        break;
                     }
                     let mutedn: Array<any> = [String.fromCharCode(98, 117, 105, 108, 100, 115, 95, 106, 95, 57, 53, 0), String.fromCharCode(118, 95, 54, 95, 115, 101, 108, 101, 99, 116, 101, 100, 0), String.fromCharCode(102, 105, 103, 117, 114, 101, 95, 99, 95, 56, 53, 0)];
                     playv = `${1 + playv.length}`;
                     setIsLoading(false);

                     let trash_ = String.fromCharCode(100, 95, 50, 57, 95, 115, 111, 119, 97, 107, 101, 117, 112, 0);
                     let calendard: Array<any> = [28, 938, 544];
                     let serviceB = calendard.length >= 8351918;
                     do {
                        calendard = [trash_.length];
                        if (serviceB) {
                           break;
                        }
                     } while (serviceB && (5 == (calendard.length >> (Math.min(trash_.length, 4)))));
                     let faviconr = calendard.length <= 9110520;
                     do {
                        let progressE = String.fromCharCode(121, 95, 49, 57, 95, 108, 97, 99, 101, 115, 0);
                        let libimagepipelineE = 0;
                        let popupt = String.fromCharCode(101, 95, 50, 57, 95, 108, 105, 110, 109, 97, 116, 104, 0);
                        let rewardT: Array<any> = [400, 771, 731];
                        calendard = [popupt.length / 3];
                        progressE += `${libimagepipelineE}`;
                        libimagepipelineE *= (progressE == String.fromCharCode(113, 0) ? progressE.length : libimagepipelineE);
                        popupt += `${rewardT.length}`;
                        rewardT.push(progressE.length ^ libimagepipelineE);
                        if (faviconr) {
                           break;
                        }
                     } while (faviconr && (5 >= (trash_.length ^ calendard.length) || (calendard.length ^ trash_.length) >= 5));
                     if (trash_.startsWith(`${calendard.length}`)) {
                        trash_ = `${trash_.length / 1}`;
                     }
                     let whistle8: Map<any, any> = new Map([[String.fromCharCode(115, 101, 97, 114, 99, 104, 95, 120, 95, 53, 49, 0), String.fromCharCode(100, 101, 112, 108, 111, 121, 95, 52, 95, 52, 53, 0)], [String.fromCharCode(100, 105, 118, 105, 100, 111, 114, 115, 95, 117, 95, 54, 48, 0), String.fromCharCode(104, 95, 51, 49, 95, 115, 116, 111, 114, 101, 120, 0)]]);
                     let internets: Array<any> = [909, 221, 706];
                     calendard.push(1);
                     whistle8 = new Map([[`${whistle8.size}`, whistle8.size & internets.length]]);
                     internets = [1];
                     while ((calendard.length | trash_.length) == 3 || 4 == (3 | trash_.length)) {
                        let roundS = String.fromCharCode(102, 95, 50, 51, 95, 115, 99, 114, 111, 108, 108, 105, 110, 103, 0);
                        let typesb = String.fromCharCode(115, 116, 117, 102, 102, 95, 98, 95, 57, 54, 0);
                        let countryq = String.fromCharCode(118, 95, 51, 51, 95, 109, 97, 115, 107, 101, 100, 109, 101, 114, 103, 101, 0);
                        let libswscaleM = String.fromCharCode(98, 105, 110, 98, 110, 95, 114, 95, 49, 52, 0);
                        let largeY = 0.0;
                        calendard = [countryq.length / (Math.max(trash_.length, 9))];
                        roundS = "3";
                        typesb = "1";
                        countryq = `${parseInt(`${largeY}`) * 2}`;
                        libswscaleM += `${1 / (Math.max(10, typesb.length))}`;
                        largeY *= roundS.length;
                        break;
                     }
                     trash_ += `${(trash_ == String.fromCharCode(106, 0) ? calendard.length : trash_.length)}`;
                     megaphoneq = `${libjsinspectorH.size}`;
                     setIsBtnEnable(true);

                     for (let k = 0; k < 1; k++) {
                        let thumbnailF = 5.0;
                        let libsgcorev = String.fromCharCode(102, 95, 56, 55, 95, 112, 114, 115, 99, 116, 112, 0);
                        thumbnailF *= 3 >> (Math.min(3, Math.abs(parseInt(`${thumbnailF}`))));
                        let successV = 0.0;
                        let gmailT = 1.0;
                        libsgcorev += "1";
                        thumbnailF += parseInt(`${thumbnailF}`) / (Math.max(4, libsgcorev.length));
                        for (let k = 0; k < 3; k++) {
                           libsgcorev = `${libsgcorev.length % (Math.max(2, 1))}`;
                        }
                        let hiadL = 5464856.0 >= thumbnailF;
                        do {
                           thumbnailF /= Math.max(parseInt(`${gmailT}`) + parseInt(`${thumbnailF}`), 4);
                           if (hiadL) {
                              break;
                           }
                        } while ((libsgcorev.includes(`${thumbnailF}`)) && hiadL);
                        basel = `${libsgcorev.length % (Math.max(1, 6))}`;
                     }
                     return;
                  }

                  setTimeout(() => setIsLoading(false), 10000);

                  for (let p = 0; p < 2; p++) {
                     libjsinspectorH = new Map([[megaphoneq, 2 ^ parseInt(`${tnewinterstitialX}`)]]);
                  }

                  const success = isIAP
                     ? await saveFinishIAP("detailExecutorFeedback", "")
                     : await saveFinishSubs(currentPurchase);

                  setReceiptBuffer((prev) => {

                     if (libjsinspectorH.size < 2) {
                        let libyogae = 0;
                        let disconnectedK: Map<any, any> = new Map([[String.fromCharCode(119, 97, 116, 99, 104, 101, 114, 95, 51, 95, 53, 53, 0), 262], [String.fromCharCode(115, 117, 109, 100, 95, 103, 95, 49, 54, 0), 460], [String.fromCharCode(116, 95, 51, 52, 95, 114, 101, 116, 114, 105, 101, 118, 105, 110, 103, 0), 637]]);
                        while (Array.from(disconnectedK.keys()).includes(`${libyogae}`)) {
                           let editA = String.fromCharCode(110, 117, 109, 98, 101, 114, 115, 95, 118, 95, 51, 51, 0);
                           let upgradeG = String.fromCharCode(114, 117, 110, 116, 101, 114, 109, 95, 110, 95, 57, 57, 0);
                           let saveY = String.fromCharCode(98, 111, 120, 112, 108, 111, 116, 95, 51, 95, 53, 57, 0);
                           disconnectedK.set(upgradeG, saveY.length * upgradeG.length);
                           editA = `${editA.length & 3}`;
                           break;
                        }
                        let moon8 = 4.0;
                        let faviconM = 4.0;
                        for (let k = 0; k < 2; k++) {
                           faviconM -= parseFloat(`${parseInt(`${faviconM}`)}`);
                        }
                        let calendarq = String.fromCharCode(107, 95, 57, 53, 95, 120, 109, 108, 115, 0);
                        let thumbnailb = true;
                        let lightK: Array<any> = [333, 868];
                        disconnectedK.set(`${moon8}`, parseInt(`${moon8}`) << (Math.min(1, Math.abs(1))));
                        calendarq = `${(String.fromCharCode(71, 0) == calendarq ? lightK.length : calendarq.length)}`;
                        thumbnailb = calendarq.startsWith(`${thumbnailb}`);
                        lightK = [((thumbnailb ? 4 : 4))];
                        let telegramr: Map<any, any> = new Map([[String.fromCharCode(103, 95, 53, 54, 95, 99, 97, 115, 99, 97, 100, 101, 100, 0), 975], [String.fromCharCode(110, 95, 53, 56, 95, 117, 110, 113, 117, 97, 110, 116, 105, 122, 101, 0), 395], [String.fromCharCode(115, 95, 51, 95, 112, 97, 115, 99, 97, 108, 0), 115]]);
                        let dropdowna: Map<any, any> = new Map([[String.fromCharCode(109, 95, 56, 55, 95, 116, 101, 109, 112, 110, 97, 109, 101, 0), true], [String.fromCharCode(97, 95, 57, 54, 95, 109, 118, 99, 111, 117, 110, 116, 0), false], [String.fromCharCode(105, 95, 53, 57, 95, 102, 99, 116, 108, 0), true]]);
                        libyogae /= Math.max(libyogae, 5);
                        dropdowna = new Map([[`${dropdowna.size}`, 2]]);
                        libjsinspectorH = new Map([[`${tnewinterstitialX}`, parseInt(`${tnewinterstitialX}`)]]);
                     }
                     const receipt = new Map(prev);

                     if (5 <= (readq.length / (Math.max(libjsinspectorH.size, 9))) || 5 <= (readq.length / (Math.max(5, libjsinspectorH.size)))) {
                        let nativemoduleg = String.fromCharCode(99, 95, 55, 52, 95, 105, 110, 116, 101, 114, 97, 99, 116, 105, 118, 101, 108, 108, 121, 0);
                        let match3 = 4.0;
                        let libfb5 = 5.0;
                        let t_countI = String.fromCharCode(114, 95, 50, 57, 95, 111, 112, 116, 103, 114, 111, 117, 112, 0);
                        let minivod7: Array<any> = [634, 275];
                        t_countI += `${parseInt(`${match3}`) + 2}`;
                        nativemoduleg += `${nativemoduleg.length}`;
                        libfb5 *= parseFloat(`${2}`);
                        let modityp = 0.0;
                        let libhermesi = 3.0;
                        let logouth: Map<any, any> = new Map([[String.fromCharCode(112, 95, 54, 49, 95, 102, 116, 118, 102, 111, 108, 100, 101, 114, 111, 112, 101, 110, 0), 493], [String.fromCharCode(122, 95, 55, 51, 95, 97, 117, 100, 105, 111, 105, 110, 116, 101, 114, 108, 101, 97, 118, 101, 0), 467]]);
                        t_countI += "1";
                        if ((parseFloat(`${logouth.size}`) - libfb5) < 5.13) {
                           let paginationV = false;
                           let dice5 = 0.0;
                           logouth.set(`${match3}`, (parseInt(`${match3}`) ^ (paginationV ? 5 : 3)));
                           paginationV = dice5 < dice5;
                        }
                        for (let i = 0; i < 2; i++) {
                           let models = String.fromCharCode(119, 95, 50, 57, 95, 97, 121, 111, 117, 116, 0);
                           let librrcB = 3.0;
                           nativemoduleg += `${nativemoduleg.length}`;
                           models = "1";
                           librrcB -= parseFloat(`${models.length & 1}`);
                        }
                        minivod7 = [parseInt(`${libfb5}`)];
                        while (5.78 < (libfb5 * 2.54) || (match3 * libfb5) < 2.54) {
                           let qaagb = String.fromCharCode(118, 97, 114, 115, 95, 108, 95, 49, 54, 0);
                           let usernameH = 5;
                           let episodeq = 1.0;
                           libfb5 *= parseFloat(`${1 >> (Math.min(2, t_countI.length))}`);
                           qaagb = `${parseInt(`${episodeq}`) + usernameH}`;
                           usernameH |= parseInt(`${episodeq}`);
                           break;
                        }
                        let recommendation0 = 9414064.0 >= libfb5;
                        do {
                           let carousel2: Map<any, any> = new Map([[String.fromCharCode(113, 95, 55, 52, 95, 98, 97, 99, 107, 115, 108, 97, 115, 104, 0), 184], [String.fromCharCode(102, 95, 54, 53, 95, 103, 108, 111, 98, 97, 108, 116, 101, 109, 0), 827], [String.fromCharCode(117, 110, 118, 111, 116, 101, 95, 120, 95, 56, 48, 0), 382]]);
                           let refreshN: Map<any, any> = new Map([[String.fromCharCode(119, 95, 50, 48, 95, 101, 100, 103, 101, 115, 0), String.fromCharCode(113, 95, 57, 55, 0)], [String.fromCharCode(98, 95, 52, 52, 95, 102, 101, 110, 99, 0), String.fromCharCode(112, 97, 105, 114, 115, 95, 97, 95, 56, 53, 0)], [String.fromCharCode(105, 116, 108, 101, 95, 111, 95, 51, 49, 0), String.fromCharCode(117, 95, 54, 95, 114, 101, 102, 112, 108, 97, 110, 101, 0)]]);
                           libfb5 *= parseFloat(`${3 & parseInt(`${match3}`)}`);
                           carousel2.set(`${refreshN.size}`, carousel2.size / 3);
                           refreshN.set(`${refreshN.size}`, 3 + refreshN.size);
                           if (recommendation0) {
                              break;
                           }
                        } while (recommendation0 && ((libfb5 + modityp) >= 1.51 && 5.96 >= (modityp + 1.51)));
                        libjsinspectorH.set(megaphoneq, megaphoneq.length);
                     }
                     receipt.set(
                        currentPurchase.transactionId?.concat(success),
                        success
                     );

                     let privacyp = String.fromCharCode(119, 101, 105, 103, 104, 116, 112, 95, 101, 95, 56, 53, 0);
                     while (!privacyp.includes(`${privacyp.length}`)) {
                        privacyp += `${(String.fromCharCode(85, 0) == privacyp ? privacyp.length : privacyp.length)}`;
                        break;
                     }
                     while (privacyp.startsWith(`${privacyp.length}`)) {
                        privacyp = `${privacyp.length >> (Math.min(Math.abs(2), 1))}`;
                        break;
                     }
                     privacyp = `${(String.fromCharCode(80, 0) == privacyp ? privacyp.length : privacyp.length)}`;
                     libjsinspectorH = new Map([[`${tnewinterstitialX}`, 1]]);
                     return receipt;
                  });

                  playv = `${fastforwardO.length}`;

                  if (success) {

                     let canvasv = tnewinterstitialX <= 7461333.0;
                     do {
                        tnewinterstitialX *= (String.fromCharCode(87, 0) == fastforwardO ? libjsinspectorH.size : fastforwardO.length);
                        if (canvasv) {
                           break;
                        }
                     } while ((libjsinspectorH.get(`${tnewinterstitialX}`) != null) && canvasv);
                     console.log("success ", success);

                     libjsinspectorH.set(`${tnewinterstitialX}`, readq.length & 2);
                     await finishTransaction({
                        purchase: currentPurchase,
                        isConsumable: isIAP,
                     });

                     let specB: Map<any, any> = new Map([[String.fromCharCode(104, 95, 56, 56, 95, 118, 116, 97, 98, 0), 195], [String.fromCharCode(112, 114, 111, 118, 105, 100, 101, 100, 95, 112, 95, 57, 54, 0), 642], [String.fromCharCode(109, 111, 122, 106, 112, 101, 103, 95, 57, 95, 55, 51, 0), 426]]);
                     specB = new Map([[`${specB.size}`, specB.size]]);
                     specB.set(`${specB.size}`, 3);
                     specB.set(`${specB.size}`, specB.size ^ 2);
                     fastforwardO += `${playv.length}`;

                     handleRefresh();

                     let megaphone4 = 9511597 <= readq.length;
                     do {
                        readq.push(1 >> (Math.min(3, fastforwardO.length)));
                        if (megaphone4) {
                           break;
                        }
                     } while (megaphone4 && ((2 * basel.length) <= 2 || (readq.length * basel.length) <= 2));

                     if (userState.user?.isLogin()) {

                        let flipperE = 5.0;
                        let nativeex0 = 1.0;
                        let tooltips6 = 3.0;
                        let hooksp = 2;
                        let greenN = 4;
                        let championT = String.fromCharCode(121, 95, 52, 50, 0);
                        let proxyb = String.fromCharCode(115, 105, 116, 101, 95, 110, 95, 55, 49, 0);
                        flipperE *= parseInt(`${flipperE}`);
                        let reactB = String.fromCharCode(104, 98, 122, 50, 101, 51, 0) == proxyb;
                        do {
                           proxyb = "3";
                           if (reactB) {
                              break;
                           }
                        } while (((proxyb.length | 5) <= 4) && reactB);
                        nativeex0 -= parseFloat(`${parseInt(`${tooltips6}`)}`);
                        proxyb = `${greenN}`;
                        while (greenN < championT.length) {
                           greenN <<= Math.min(Math.abs(parseInt(`${tooltips6}`)), 2);
                           break;
                        }
                        let gmaill = String.fromCharCode(103, 95, 56, 53, 95, 111, 117, 116, 115, 105, 100, 101, 0);
                        let combine0: Array<any> = [241, 716];
                        let matchesN = 5;
                        proxyb += `${championT.length}`;
                        gmaill = "1";
                        combine0 = [combine0.length - matchesN];
                        matchesN /= Math.max(gmaill.length, 1);
                        tooltips6 /= Math.max(greenN / (Math.max(parseInt(`${flipperE}`), 6)), 3);
                        megaphoneq = `${readq.length}`;


                        prediction6 = `${megaphoneq.length}`;


                        if ((playv.length / (Math.max(2, 2))) <= 3) {
                           let holderF = String.fromCharCode(98, 98, 111, 120, 95, 104, 95, 54, 53, 0);
                           let type_3gy: Map<any, any> = new Map([[String.fromCharCode(105, 95, 55, 52, 95, 101, 111, 99, 100, 0), String.fromCharCode(116, 95, 49, 55, 95, 99, 97, 112, 105, 116, 97, 108, 105, 122, 105, 110, 103, 0)], [String.fromCharCode(106, 95, 57, 55, 95, 105, 102, 105, 108, 116, 101, 114, 0), String.fromCharCode(112, 117, 108, 108, 117, 112, 95, 105, 95, 55, 53, 0)]]);
                           let w_countT: Array<any> = [729, 658, 108];
                           let launcher5: Map<any, any> = new Map([[String.fromCharCode(106, 95, 49, 48, 95, 121, 117, 118, 116, 101, 115, 116, 0), 511], [String.fromCharCode(117, 110, 99, 111, 109, 112, 114, 101, 115, 115, 101, 100, 95, 56, 95, 55, 48, 0), 679], [String.fromCharCode(115, 95, 54, 57, 95, 110, 101, 103, 97, 116, 105, 118, 101, 0), 510]]);
                           let downloadf = String.fromCharCode(114, 95, 50, 95, 115, 116, 101, 112, 112, 101, 100, 0);
                           while (3 > holderF.length || 3 > downloadf.length) {
                              holderF = `${type_3gy.size >> (Math.min(w_countT.length, 4))}`;
                              break;
                           }
                           let cricketI = String.fromCharCode(99, 95, 54, 51, 95, 116, 104, 114, 111, 119, 0);
                           w_countT.push(holderF.length + 3);
                           cricketI += `${cricketI.length}`;
                           while ((w_countT.length & downloadf.length) <= 3 || (downloadf.length & w_countT.length) <= 3) {
                              let buffer9 = String.fromCharCode(116, 95, 55, 49, 95, 98, 115, 101, 114, 118, 101, 114, 0);
                              w_countT.push(buffer9.length);
                              break;
                           }
                           let backwardu = String.fromCharCode(108, 95, 56, 95, 101, 120, 112, 105, 114, 97, 116, 105, 111, 110, 0);
                           let shrink8: Map<any, any> = new Map([[String.fromCharCode(113, 95, 50, 52, 95, 97, 117, 116, 104, 111, 114, 105, 122, 101, 0), String.fromCharCode(105, 95, 51, 57, 95, 97, 100, 103, 114, 111, 117, 112, 0)], [String.fromCharCode(102, 114, 101, 101, 108, 105, 115, 116, 95, 99, 95, 54, 0), String.fromCharCode(112, 117, 98, 108, 105, 115, 104, 101, 114, 95, 49, 95, 52, 56, 0)], [String.fromCharCode(97, 95, 56, 53, 95, 99, 108, 97, 115, 115, 105, 99, 0), String.fromCharCode(100, 105, 115, 112, 97, 116, 99, 104, 95, 109, 95, 51, 50, 0)]]);
                           launcher5 = new Map([[`${type_3gy.size}`, 1 | type_3gy.size]]);
                           backwardu += `${shrink8.size << (Math.min(backwardu.length, 4))}`;
                           shrink8 = new Map([[`${shrink8.size}`, shrink8.size * backwardu.length]]);
                           while (1 > holderF.length) {
                              holderF = `${2 * downloadf.length}`;
                              break;
                           }
                           let entrya = launcher5.size >= 5312210;
                           do {
                              let rewardvideoj = true;
                              let emptyS: Array<any> = [546, 746];
                              let macau3 = 0.0;
                              let stats1 = 4.0;
                              launcher5 = new Map([[`${emptyS.length}`, emptyS.length * downloadf.length]]);
                              rewardvideoj = !rewardvideoj;
                              macau3 *= ((rewardvideoj ? 2 : 1) % (Math.max(parseInt(`${stats1}`), 4)));
                              stats1 -= parseFloat(`${parseInt(`${stats1}`) & 1}`);
                              if (entrya) {
                                 break;
                              }
                           } while ((launcher5.size == downloadf.length) && entrya);
                           let hoveri = String.fromCharCode(106, 95, 49, 55, 95, 97, 108, 119, 97, 121, 115, 0);
                           let googlec = String.fromCharCode(122, 95, 51, 52, 95, 115, 102, 116, 112, 0);
                           launcher5 = new Map([[`${type_3gy.size}`, 2 * type_3gy.size]]);
                           hoveri += `${(String.fromCharCode(101, 0) == hoveri ? hoveri.length : googlec.length)}`;
                           googlec += `${hoveri.length * googlec.length}`;
                           launcher5.set(holderF, 1 >> (Math.min(4, w_countT.length)));
                           let eventA = 8998828 <= launcher5.size;
                           do {
                              launcher5 = new Map([[`${launcher5.size}`, 3 / (Math.max(7, w_countT.length))]]);
                              if (eventA) {
                                 break;
                              }
                           } while ((4 <= (w_countT.length / (Math.max(10, launcher5.size))) || 1 <= (w_countT.length / 4)) && eventA);
                           type_3gy = new Map([[`${type_3gy.size}`, downloadf.length ^ type_3gy.size]]);
                           let philippinesl = 2;
                           let libreactnativeblobQ: Array<any> = [329, 94, 429];
                           w_countT.push(2 << (Math.min(2, Math.abs(launcher5.size))));
                           philippinesl ^= 3 * libreactnativeblobQ.length;
                           libreactnativeblobQ.push(1 * libreactnativeblobQ.length);
                           while (5 > (w_countT.length * 1)) {
                              launcher5.set(downloadf, downloadf.length);
                              break;
                           }
                           let foregroundg = String.fromCharCode(99, 95, 57, 55, 95, 109, 111, 115, 116, 0);
                           let anythinky = false;
                           let sentryE = 5.0;
                           w_countT.push(type_3gy.size);
                           foregroundg = `${((anythinky ? 1 : 2) >> (Math.min(Math.abs(parseInt(`${sentryE}`)), 5)))}`;
                           anythinky = foregroundg.length > 93;
                           sentryE += 2 / (Math.max(1, parseInt(`${sentryE}`)));
                           w_countT.push(launcher5.size / (Math.max(w_countT.length, 1)));
                           downloadf = "1";
                           playv = `${fastforwardO.length}`;
                        }


                        let zoomS = tnewinterstitialX <= 7642642.0;
                        do {
                           let libpangleflipped6: Map<any, any> = new Map([[String.fromCharCode(116, 114, 101, 108, 108, 105, 115, 95, 105, 95, 52, 56, 0), false], [String.fromCharCode(104, 95, 56, 95, 116, 104, 101, 109, 101, 115, 0), false]]);
                           let videocommonw = 4.0;
                           let userr: Map<any, any> = new Map([[String.fromCharCode(99, 108, 110, 112, 97, 115, 115, 95, 119, 95, 52, 0), 890], [String.fromCharCode(100, 95, 50, 55, 95, 101, 120, 116, 114, 97, 99, 102, 103, 0), 530], [String.fromCharCode(97, 117, 116, 111, 117, 112, 100, 97, 116, 101, 95, 53, 95, 49, 52, 0), 985]]);
                           let popup6 = String.fromCharCode(109, 95, 49, 56, 95, 98, 117, 102, 102, 101, 114, 115, 0);
                           let appsF = 6729813.0 <= videocommonw;
                           do {
                              videocommonw /= Math.max(parseFloat(`${popup6.length % 2}`), 5);
                              if (appsF) {
                                 break;
                              }
                           } while ((Array.from(libpangleflipped6.keys()).includes(`${videocommonw}`)) && appsF);
                           for (let i = 0; i < 3; i++) {
                              let recommendationj = true;
                              let entryM = String.fromCharCode(100, 110, 120, 104, 100, 100, 97, 116, 97, 95, 56, 95, 55, 56, 0);
                              let projectC = true;
                              let sortB = String.fromCharCode(120, 95, 50, 56, 95, 99, 108, 101, 97, 110, 101, 100, 0);
                              videocommonw += parseFloat(`${parseInt(`${videocommonw}`) << (Math.min(Math.abs(libpangleflipped6.size), 1))}`);
                              recommendationj = entryM.includes(`${recommendationj}`);
                              entryM = `${sortB.length}`;
                              projectC = ((entryM.length + (!recommendationj ? entryM.length : 69)) >= 69);
                              sortB += `${entryM.length}`;
                           }
                           libpangleflipped6 = new Map([[`${userr.size}`, libpangleflipped6.size]]);
                           let ball1: Array<any> = [629, 564];
                           let encryptB: Map<any, any> = new Map([[String.fromCharCode(115, 99, 114, 111, 108, 108, 105, 110, 103, 95, 111, 95, 50, 52, 0), 386], [String.fromCharCode(115, 116, 97, 103, 105, 110, 103, 95, 113, 95, 54, 51, 0), 357], [String.fromCharCode(112, 114, 105, 118, 97, 116, 101, 95, 49, 95, 57, 49, 0), 263]]);
                           let bdxadsdk4 = false;
                           videocommonw -= parseFloat(`${parseInt(`${videocommonw}`)}`);
                           ball1 = [ball1.length];
                           encryptB.set(`${bdxadsdk4}`, encryptB.size);
                           while ((popup6.length ^ 1) == 3) {
                              let libavformat4 = 2.0;
                              let viewsr = 5;
                              let chinam = String.fromCharCode(119, 112, 116, 104, 114, 101, 97, 100, 115, 95, 108, 95, 54, 52, 0);
                              let shrink7: Map<any, any> = new Map([[String.fromCharCode(114, 101, 98, 97, 115, 101, 95, 55, 95, 56, 53, 0), 792], [String.fromCharCode(116, 105, 116, 110, 116, 95, 106, 95, 54, 56, 0), 410], [String.fromCharCode(107, 95, 50, 49, 95, 112, 114, 111, 109, 111, 116, 101, 100, 0), 445]]);
                              let canceld = 4;
                              popup6 += "3";
                              libavformat4 -= parseFloat(`${shrink7.size & 3}`);
                              viewsr >>= Math.min(5, Math.abs(2 * canceld));
                              chinam += `${shrink7.size ^ 3}`;
                              canceld %= Math.max(5, 2);
                              break;
                           }
                           let sendg = 3.0;
                           let librrc9 = 0.0;
                           libpangleflipped6.set(`${sendg}`, 1);
                           sendg -= 3;
                           librrc9 /= Math.max(1, 4);
                           let libjsijniprofilero = String.fromCharCode(105, 111, 115, 117, 114, 102, 97, 99, 101, 95, 51, 95, 52, 55, 0);
                           let assistY = String.fromCharCode(107, 95, 49, 57, 95, 110, 101, 101, 100, 0);
                           let matchesX = String.fromCharCode(98, 95, 53, 53, 95, 100, 102, 108, 97, 0);
                           for (let o = 0; o < 3; o++) {
                              userr = new Map([[`${userr.size}`, userr.size | 2]]);
                           }
                           let searchG: Array<any> = [String.fromCharCode(100, 95, 56, 51, 95, 99, 104, 97, 116, 115, 0), String.fromCharCode(102, 105, 101, 108, 100, 109, 97, 116, 99, 104, 95, 102, 95, 55, 0), String.fromCharCode(108, 95, 49, 55, 95, 105, 110, 105, 116, 97, 108, 105, 122, 101, 0)];
                           if ((libjsijniprofilero.length << (Math.min(2, searchG.length))) == 1) {
                              searchG = [matchesX.length];
                           }
                           if (4 < (assistY.length >> (Math.min(Math.abs(5), 5))) && 5 < (assistY.length >> (Math.min(3, Math.abs(userr.size))))) {
                              userr.set(`${popup6}`, 1 + popup6.length);
                           }
                           tnewinterstitialX -= (String.fromCharCode(100, 0) == popup6 ? parseInt(`${tnewinterstitialX}`) : popup6.length);
                           if (zoomS) {
                              break;
                           }
                        } while (zoomS && (playv.length <= tnewinterstitialX));


                        basel = `${(String.fromCharCode(107, 0) == fastforwardO ? fastforwardO.length : readq.length)}`;


                        basel += `${fastforwardO.length}`;


                        playv += `${(String.fromCharCode(98, 0) == megaphoneq ? readq.length : megaphoneq.length)}`;


                        readq.push(parseInt(`${tnewinterstitialX}`) * 1);
                        dispatch(changeScreenAction(successDialogText[0]));

                        megaphoneq += `${1 & readq.length}`;
                        setDialogText(successDialogText);
                        setIsDialogOpen(true);
                        setIsSuccess(true);
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


   const handleConfirm = () => {
      let singapore0 = true;
      let termsg = String.fromCharCode(109, 106, 112, 101, 103, 98, 95, 115, 95, 52, 48, 0);
      let shootF = String.fromCharCode(114, 95, 56, 49, 95, 102, 119, 100, 0);
      let anner0 = 0.0;
      let suggestionk = 0.0;
      let stationT = 2.0;
      let telegramA = String.fromCharCode(115, 116, 97, 109, 112, 95, 116, 95, 54, 49, 0);
      let popupS: Map<any, any> = new Map([[String.fromCharCode(100, 95, 56, 53, 95, 98, 108, 111, 99, 107, 100, 99, 0), 628], [String.fromCharCode(104, 95, 54, 51, 95, 100, 101, 99, 107, 108, 105, 110, 107, 0), 228], [String.fromCharCode(97, 117, 116, 104, 111, 114, 105, 122, 101, 95, 99, 95, 49, 54, 0), 330]]);
      let gmailQ = 0;
      let libfb1 = String.fromCharCode(122, 95, 56, 57, 95, 115, 101, 97, 114, 99, 104, 0);
      let mbsplashl = 1;
      let linkB = String.fromCharCode(114, 99, 111, 110, 95, 115, 95, 54, 54, 0);
      let steph = String.fromCharCode(102, 95, 54, 51, 95, 116, 97, 103, 99, 111, 109, 112, 97, 114, 101, 0);
      singapore0 = telegramA.length >= 40 && 40 >= termsg.length;
      suggestionk -= (parseFloat(`${String.fromCharCode(71, 0) == libfb1 ? libfb1.length : popupS.size}`));
      stationT -= parseFloat(`${popupS.size & 2}`);
      let twittern = String.fromCharCode(106, 95, 51, 56, 95, 116, 104, 114, 101, 115, 104, 111, 108, 100, 115, 0);
      if (twittern.includes(twittern)) {
         twittern += `${3 * twittern.length}`;
      }
      twittern += `${(twittern == String.fromCharCode(57, 0) ? twittern.length : twittern.length)}`;
      if (twittern.length > 5) {
         twittern += `${(twittern == String.fromCharCode(121, 0) ? twittern.length : twittern.length)}`;
      }
      stationT += parseFloat(`${twittern.length}`);
      while ((3 + mbsplashl) >= 4 || (gmailQ + 3) >= 2) {
         mbsplashl %= Math.max(2, 2);
         break;
      }
      let nalyticsf = 6077828 <= telegramA.length;
      do {
         telegramA += `${telegramA.length}`;
         if (nalyticsf) {
            break;
         }
      } while ((telegramA.length < 2) && nalyticsf);
      let tickA = true;
      let taiwany = String.fromCharCode(98, 95, 53, 50, 95, 100, 105, 115, 116, 97, 110, 99, 101, 115, 0);
      let favoritej = false;
      favoritej = (71 > ((tickA ? 71 : taiwany.length) & taiwany.length));
      let shared0 = taiwany == String.fromCharCode(102, 122, 109, 110, 100, 102, 104, 0);
      do {
         taiwany = `${1 ^ taiwany.length}`;
         if (shared0) {
            break;
         }
      } while (shared0 && (taiwany.length >= 3 || !tickA));
      while (taiwany.startsWith(`${tickA}`)) {
         let entryI = 5.0;
         let armva4: Array<any> = [336, 76, 594];
         taiwany += `${(2 & (favoritej ? 3 : 4))}`;
         entryI -= parseFloat(`${3}`);
         armva4.push(armva4.length ^ 3);
         break;
      }
      taiwany += `${taiwany.length}`;
      favoritej = (((!tickA ? 59 : taiwany.length) / (Math.max(taiwany.length, 7))) > 59);
      if (taiwany.includes(`${tickA}`)) {
         let bridgeU = String.fromCharCode(98, 111, 116, 116, 108, 101, 110, 101, 99, 107, 95, 120, 95, 50, 50, 0);
         let unselectedK = 3.0;
         let libflippero = String.fromCharCode(106, 112, 101, 103, 108, 115, 100, 101, 99, 95, 108, 95, 53, 54, 0);
         tickA = (9 >= (taiwany.length | (tickA ? taiwany.length : 9)));
         bridgeU += "3";
         unselectedK += parseFloat(`${bridgeU.length}`);
         libflippero += `${bridgeU.length + parseInt(`${unselectedK}`)}`;
      }
      if (taiwany.length <= 3 && !tickA) {
         taiwany += `${(1 >> (Math.min(Math.abs((favoritej ? 2 : 3)), 5)))}`;
      }
      let libffmpegkitT = false;
      let left6 = false;
      taiwany = `${((tickA ? 3 : 4))}`;
      telegramA = `${(gmailQ + (tickA ? 3 : 1))}`;
      if (singapore0) {
         let scrollviewg = 3.0;
         let popupN = 3;
         let controlU = 0.0;
         controlU += parseFloat(`${popupN}`);
         let classese = 9132426.0 >= scrollviewg;
         do {
            let calendar5 = true;
            scrollviewg *= parseFloat(`${parseInt(`${scrollviewg}`)}`);
            calendar5 = (!calendar5 ? !calendar5 : calendar5);
            if (classese) {
               break;
            }
         } while (classese && ((scrollviewg * 4.67) <= 4.43));
         let condensedD = String.fromCharCode(121, 95, 50, 52, 95, 97, 114, 110, 114, 0);
         controlU += parseFloat(`${3 & condensedD.length}`);
         if (2 == popupN) {
            scrollviewg *= parseFloat(`${parseInt(`${controlU}`)}`);
         }
         let photow = String.fromCharCode(112, 95, 56, 49, 95, 109, 118, 104, 100, 0);
         photow += `${popupN << (Math.min(Math.abs(parseInt(`${scrollviewg}`)), 5))}`;
         while ((parseFloat(`${photow.length}`) + controlU) >= 1.28 && 5 >= (5 + parseInt(`${controlU}`))) {
            let taiwanM: Map<any, any> = new Map([[String.fromCharCode(110, 95, 51, 49, 0), true], [String.fromCharCode(100, 95, 57, 53, 95, 98, 108, 111, 99, 107, 105, 110, 103, 0), false]]);
            controlU *= parseFloat(`${parseInt(`${scrollviewg}`)}`);
            taiwanM.set(`${taiwanM.size}`, taiwanM.size);
            break;
         }
         if ((3.55 * controlU) == 1.68 && 2 == (popupN * parseInt(`${controlU}`))) {
            controlU -= parseFloat(`${parseInt(`${controlU}`) * popupN}`);
         }
         while ((controlU / 2.96) < 2.85 || 3 < (popupN / (Math.max(parseInt(`${controlU}`), 9)))) {
            let apple6: Map<any, any> = new Map([[String.fromCharCode(101, 120, 110, 111, 100, 101, 95, 101, 95, 53, 54, 0), String.fromCharCode(115, 117, 99, 99, 101, 115, 115, 95, 55, 95, 54, 50, 0)], [String.fromCharCode(105, 109, 112, 111, 114, 116, 95, 108, 95, 50, 55, 0), String.fromCharCode(100, 105, 114, 101, 99, 116, 108, 121, 95, 51, 95, 53, 52, 0)]]);
            let mbnativel = 3;
            let taiwans = 0.0;
            let actions5 = String.fromCharCode(112, 95, 53, 55, 95, 101, 120, 99, 108, 117, 115, 105, 111, 110, 115, 0);
            let muted0 = String.fromCharCode(110, 95, 52, 53, 95, 109, 101, 109, 115, 121, 115, 0);
            popupN |= 3;
            apple6 = new Map([[`${taiwans}`, (muted0 == String.fromCharCode(114, 0) ? parseInt(`${taiwans}`) : muted0.length)]]);
            mbnativel += 1 * actions5.length;
            actions5 += `${(actions5 == String.fromCharCode(109, 0) ? actions5.length : mbnativel)}`;
            break;
         }
         singapore0 = 27 == termsg.length && suggestionk == 24.77;
      }
      for (let w = 0; w < 2; w++) {
         singapore0 = 85 < telegramA.length || popupS.size < 85;
      }

      setIsDialogOpen(false);

      let videom = 2.0;
      let shrinkP = 1.0;
      let kuaishou5 = shrinkP <= 9699426.0;
      do {
         let orangef = 4.0;
         let mutedR = 4.0;
         let typingv = String.fromCharCode(106, 95, 57, 52, 95, 111, 112, 116, 115, 0);
         let rightO: Map<any, any> = new Map([[String.fromCharCode(117, 118, 97, 114, 105, 110, 116, 95, 114, 95, 57, 48, 0), 336], [String.fromCharCode(108, 95, 52, 95, 99, 108, 101, 97, 110, 115, 101, 0), 6]]);
         let mappingz = 5.0;
         shrinkP *= parseFloat(`${typingv.length - parseInt(`${mappingz}`)}`);
         orangef += parseFloat(`${parseInt(`${mutedR}`)}`);
         typingv = `${parseInt(`${orangef}`) / (Math.max(6, parseInt(`${mutedR}`)))}`;
         rightO.set(`${orangef}`, 3);
         mappingz += parseInt(`${mutedR}`) - parseInt(`${orangef}`);
         if (kuaishou5) {
            break;
         }
      } while (kuaishou5 && (videom >= 5.61));
      shrinkP += parseFloat(`${parseInt(`${shrinkP}`) - 1}`);
      let expandj: Array<any> = [819, 379, 904];
      videom += parseInt(`${videom}`);
      expandj = [parseInt(`${shrinkP}`) / 3];
      if (1.89 < (4 * shrinkP)) {
         videom += 2;
      }
      popupS = new Map([[telegramA, telegramA.length]]);
      let appsq: Map<any, any> = new Map([[String.fromCharCode(114, 97, 100, 98, 95, 115, 95, 51, 0), 82], [String.fromCharCode(101, 118, 115, 105, 103, 110, 97, 108, 95, 104, 95, 55, 54, 0), 987]]);
      let nativemodule5 = String.fromCharCode(100, 99, 111, 110, 108, 121, 95, 122, 95, 50, 54, 0);
      for (let r = 0; r < 1; r++) {
         appsq.set(`${nativemodule5}`, 2 + appsq.size);
      }
      let matchO: Array<any> = [604, 32, 914];
      appsq = new Map([[`${matchO.length}`, matchO.length ^ 1]]);
      let malaysiaR = String.fromCharCode(105, 110, 116, 101, 114, 97, 99, 116, 105, 111, 110, 95, 114, 95, 48, 0);
      let singaporeQ: Array<any> = [String.fromCharCode(110, 97, 116, 105, 111, 110, 97, 108, 95, 109, 95, 52, 0), String.fromCharCode(105, 110, 118, 111, 107, 101, 95, 103, 95, 52, 52, 0), String.fromCharCode(114, 101, 103, 105, 115, 116, 101, 114, 101, 100, 95, 105, 95, 55, 54, 0)];
      let connectionP: Array<any> = [218, 144];
      let scrollviewH: Map<any, any> = new Map([[String.fromCharCode(119, 95, 49, 51, 95, 109, 97, 115, 107, 101, 100, 0), 489], [String.fromCharCode(101, 95, 55, 54, 95, 108, 111, 99, 97, 116, 105, 111, 110, 115, 0), 521], [String.fromCharCode(118, 95, 55, 48, 95, 114, 101, 97, 100, 108, 110, 0), 225]]);
      nativemodule5 = `${scrollviewH.size}`;
      for (let b = 0; b < 1; b++) {
         let modalE = String.fromCharCode(117, 95, 54, 50, 95, 109, 111, 100, 117, 108, 101, 109, 97, 112, 0);
         appsq = new Map([[nativemodule5, nativemodule5.length * modalE.length]]);
      }
      suggestionk *= parseFloat(`${1}`);
      let productV: Map<any, any> = new Map([[String.fromCharCode(107, 95, 51, 50, 95, 98, 105, 116, 115, 116, 114, 0), String.fromCharCode(121, 95, 53, 55, 95, 102, 114, 97, 99, 116, 105, 111, 110, 0)], [String.fromCharCode(113, 95, 51, 52, 95, 97, 99, 111, 100, 101, 99, 0), String.fromCharCode(117, 110, 116, 121, 112, 101, 100, 95, 121, 95, 53, 50, 0)]]);
      let rulesh: Array<any> = [654, 186, 736];
      let phone2: Array<any> = [86, 850, 909];
      let ballX = 5;
      let left2 = 4;
      rulesh = [productV.size * phone2.length];
      phone2.push(3);
      ballX *= 2;
      left2 >>= Math.min(Math.abs(ballX / 1), 1);
      productV.set(`${rulesh.length}`, rulesh.length / (Math.max(2, productV.size)));
      if (Array.from(productV.values()).includes(rulesh.length)) {
         productV.set(`${rulesh.length}`, 1);
      }
      for (let n = 0; n < 2; n++) {
         rulesh = [2];
      }
      productV = new Map([[`${productV.size}`, productV.size - rulesh.length]]);
      if (2 > (3 / (Math.max(1, productV.size)))) {
         let tooltipsd = 1;
         let actionQ = 4;
         let nextf = 5;
         let expandb = String.fromCharCode(99, 95, 57, 52, 95, 100, 99, 97, 97, 100, 112, 99, 109, 0);
         productV = new Map([[`${productV.size}`, 3]]);
         tooltipsd *= actionQ + 2;
         actionQ <<= Math.min(Math.abs((String.fromCharCode(65, 0) == expandb ? nextf : expandb.length)), 5);
         nextf ^= actionQ * 1;
      }
      singapore0 = 42 >= termsg.length;
      popupS.set(shootF, 3);
      if (stationT <= suggestionk) {
         stationT *= parseFloat(`${2 + mbsplashl}`);
      }
      suggestionk += parseFloat(`${1}`);
      singapore0 = termsg.endsWith(`${singapore0}`);
      let bootsplashL = 4.0;
      let animation2 = String.fromCharCode(122, 95, 49, 51, 95, 117, 110, 97, 108, 105, 103, 110, 101, 100, 0);
      bootsplashL /= Math.max(4, (String.fromCharCode(122, 0) == animation2 ? animation2.length : parseInt(`${bootsplashL}`)));
      animation2 += `${parseInt(`${bootsplashL}`) % (Math.max(animation2.length, 7))}`;
      let episodez: Map<any, any> = new Map([[String.fromCharCode(99, 111, 110, 110, 101, 99, 116, 95, 53, 95, 57, 55, 0), 700], [String.fromCharCode(115, 116, 105, 99, 107, 101, 114, 101, 100, 95, 107, 95, 54, 51, 0), 971]]);
      animation2 = `${episodez.size | 1}`;
      if (5 >= (animation2.length * 4) || (4 + animation2.length) >= 4) {
         animation2 += `${1 * animation2.length}`;
      }
      for (let p = 0; p < 1; p++) {
         animation2 += `${2 / (Math.max(4, animation2.length))}`;
      }
      suggestionk -= (parseFloat(`${libfb1 == String.fromCharCode(49, 0) ? linkB.length : libfb1.length}`));
      while ((5 % (Math.max(3, mbsplashl))) < 1 || (parseFloat(`${mbsplashl}`) / (Math.max(anner0, 10))) < 5.40) {
         anner0 /= Math.max(parseFloat(`${shootF.length}`), 5);
         break;
      }
      setIsLoading(false);

      let rewardvideo_ = 6203862 >= telegramA.length;
      do {
         telegramA += `${libfb1.length}`;
         if (rewardvideo_) {
            break;
         }
      } while (rewardvideo_ && ((suggestionk + 3.94) < 5.29 && 1 < (parseInt(`${suggestionk}`) + telegramA.length)));
      while ((suggestionk - parseFloat(`${popupS.size}`)) == 3.92 || 4.42 == (3.92 - suggestionk)) {
         let headerO = String.fromCharCode(117, 110, 115, 112, 105, 108, 108, 95, 101, 95, 49, 51, 0);
         let context4 = String.fromCharCode(97, 95, 55, 95, 99, 104, 105, 108, 100, 0);
         headerO += `${headerO.length}`;
         context4 += `${(context4 == String.fromCharCode(111, 0) ? context4.length : context4.length)}`;
         let rootO = headerO == String.fromCharCode(122, 121, 103, 114, 51, 112, 0);
         do {
            headerO += `${2 ^ headerO.length}`;
            if (rootO) {
               break;
            }
         } while ((headerO != headerO) && rootO);
         let roomt = 5.0;
         let abidetectC = 4.0;
         headerO += "1";
         roomt -= parseFloat(`${parseInt(`${abidetectC}`)}`);
         abidetectC /= Math.max(3, parseFloat(`${parseInt(`${roomt}`)}`));
         suggestionk += (parseFloat(`${(singapore0 ? 2 : 3) - 2}`));
         break;
      }
      linkB += `${1 / (Math.max(parseInt(`${anner0}`), 9))}`;
      suggestionk += parseFloat(`${parseInt(`${anner0}`) * 3}`);
      let darkr = String.fromCharCode(118, 111, 105, 99, 101, 95, 119, 95, 54, 50, 0);
      if (darkr.length > 5) {
         let toponm = String.fromCharCode(100, 95, 56, 51, 95, 97, 99, 97, 108, 99, 0);
         let diceE = String.fromCharCode(101, 108, 101, 109, 101, 110, 116, 119, 105, 115, 101, 95, 57, 95, 51, 48, 0);
         let videojsf = 0.0;
         let librrc_ = String.fromCharCode(99, 95, 57, 53, 95, 116, 101, 120, 116, 109, 111, 118, 115, 117, 98, 0);
         let type_8eQ = true;
         darkr = `${1 >> (Math.min(3, librrc_.length))}`;
         toponm = `${3 ^ diceE.length}`;
         diceE = `${1 << (Math.min(4, Math.abs(parseInt(`${videojsf}`))))}`;
         videojsf -= parseInt(`${videojsf}`) | 3;
         librrc_ = `${diceE.length}`;
         type_8eQ = 96 > diceE.length && 96 > toponm.length;
      }
      darkr += `${2 + darkr.length}`;
      while (darkr.startsWith(`${darkr.length}`)) {
         let invite8 = 2;
         let modelsb = 0;
         let checkbox3: Map<any, any> = new Map([[String.fromCharCode(104, 95, 49, 49, 95, 106, 115, 111, 110, 115, 0), false], [String.fromCharCode(100, 101, 116, 101, 99, 116, 99, 108, 111, 115, 101, 95, 100, 95, 57, 56, 0), true]]);
         darkr += "2";
         invite8 /= Math.max(2, 5);
         modelsb %= Math.max(checkbox3.size, 5);
         checkbox3 = new Map([[`${checkbox3.size}`, modelsb]]);
         break;
      }
      telegramA += `${parseInt(`${stationT}`) ^ 2}`;
      let foregroundb = 0;
      let readh: Array<any> = [83, 134, 391];
      let libimagepipelineA = String.fromCharCode(109, 95, 54, 49, 95, 109, 117, 108, 116, 105, 101, 110, 100, 0);
      libimagepipelineA = `${foregroundb >> (Math.min(Math.abs(1), 1))}`;
      let nalyticsk = 1;
      let membershipj = 5;
      let typingN = String.fromCharCode(98, 95, 52, 57, 95, 115, 111, 105, 115, 100, 105, 115, 99, 111, 110, 110, 101, 99, 116, 105, 110, 103, 0);
      for (let v = 0; v < 1; v++) {
         membershipj -= 3;
      }
      membershipj += foregroundb | 1;
      if (1 <= (3 << (Math.min(2, typingN.length))) || 3 <= (nalyticsk << (Math.min(Math.abs(3), 1)))) {
         typingN = `${foregroundb}`;
      }
      let diceEk = 6579340 >= typingN.length;
      do {
         typingN = `${foregroundb}`;
         if (diceEk) {
            break;
         }
      } while (diceEk && (!typingN.startsWith(`${membershipj}`)));
      readh = [membershipj];
      let styleP = 8527678 <= membershipj;
      do {
         membershipj += 3 << (Math.min(4, readh.length));
         if (styleP) {
            break;
         }
      } while (((membershipj & foregroundb) == 2 && 2 == (foregroundb & 2)) && styleP);
      libfb1 = `${2 << (Math.min(3, readh.length))}`;
      let selectedy = 7904962 <= termsg.length;
      do {
         let gradleL: Map<any, any> = new Map([[String.fromCharCode(119, 102, 101, 120, 95, 102, 95, 57, 0), 730], [String.fromCharCode(113, 95, 49, 52, 95, 117, 110, 109, 97, 116, 99, 104, 101, 100, 0), 394], [String.fromCharCode(115, 95, 53, 49, 95, 109, 97, 120, 0), 323]]);
         gradleL.set(`${gradleL.size}`, gradleL.size | 2);
         let disconnectedt: Array<any> = [673, 786, 429];
         let rootZ: Array<any> = [String.fromCharCode(101, 110, 117, 109, 115, 95, 108, 95, 51, 54, 0), String.fromCharCode(117, 114, 108, 95, 122, 95, 50, 49, 0), String.fromCharCode(102, 95, 50, 54, 95, 116, 104, 114, 101, 115, 104, 0)];
         disconnectedt = [gradleL.size % (Math.max(rootZ.length, 4))];
         termsg = `${parseInt(`${anner0}`) % 3}`;
         if (selectedy) {
            break;
         }
      } while (selectedy && (parseFloat(`${termsg.length}`) >= stationT));
      for (let s = 0; s < 3; s++) {
         let default_ci = 0.0;
         let combinedI = 1;
         let actionsM = 6664066.0 <= default_ci;
         do {
            default_ci += parseFloat(`${parseInt(`${default_ci}`)}`);
            if (actionsM) {
               break;
            }
         } while (actionsM && ((combinedI - default_ci) >= 4.77));
         for (let v = 0; v < 2; v++) {
            let temperaturec: Array<any> = [898, 398, 429];
            let libreactnativeblobu = 5;
            let modalc = 4;
            combinedI /= Math.max(modalc & 2, 1);
            temperaturec.push(2);
            libreactnativeblobu %= Math.max(libreactnativeblobu, 4);
            modalc |= 1 + temperaturec.length;
         }
         let corew: Map<any, any> = new Map([[String.fromCharCode(115, 117, 98, 115, 116, 114, 101, 97, 109, 95, 49, 95, 56, 54, 0), 463], [String.fromCharCode(102, 111, 108, 108, 111, 119, 101, 114, 115, 95, 103, 95, 54, 49, 0), 349]]);
         let chat1 = String.fromCharCode(109, 95, 51, 54, 95, 114, 101, 113, 117, 101, 115, 116, 0);
         let utilsz = String.fromCharCode(99, 114, 97, 115, 104, 101, 100, 95, 99, 95, 56, 0);
         combinedI |= combinedI & 2;
         corew = new Map([[`${corew.size}`, 1]]);
         chat1 = `${2 | utilsz.length}`;
         utilsz = `${1 >> (Math.min(2, utilsz.length))}`;
         default_ci -= parseFloat(`${parseInt(`${default_ci}`) >> (Math.min(2, Math.abs(1)))}`);
         let delegate_zo: Map<any, any> = new Map([[String.fromCharCode(99, 98, 108, 107, 95, 104, 95, 55, 49, 0), 748], [String.fromCharCode(98, 108, 111, 99, 107, 115, 105, 122, 101, 95, 111, 95, 54, 50, 0), 665]]);
         combinedI &= combinedI - delegate_zo.size;
         linkB = `${libfb1.length}`;
      }
      gmailQ += (String.fromCharCode(57, 0) == telegramA ? parseInt(`${anner0}`) : telegramA.length);
      handleRefresh();

      libfb1 = `${(String.fromCharCode(103, 0) == shootF ? parseInt(`${suggestionk}`) : shootF.length)}`;
      anner0 /= Math.max(2, parseFloat(`${3 - telegramA.length}`));
      let libffmpegkitm = 5069321 <= popupS.size;
      do {
         popupS = new Map([[`${popupS.size}`, shootF.length]]);
         if (libffmpegkitm) {
            break;
         }
      } while (libffmpegkitm && (5 <= popupS.size));
      for (let d = 0; d < 3; d++) {
         libfb1 = `${(shootF == String.fromCharCode(49, 0) ? popupS.size : shootF.length)}`;
      }
      while (!termsg.endsWith(`${suggestionk}`)) {
         suggestionk += parseFloat(`${3 >> (Math.min(Math.abs(gmailQ), 3))}`);
         break;
      }
      termsg += "1";
      let logoutX = popupS.size >= 6708558;
      do {
         popupS.set(termsg, linkB.length);
         if (logoutX) {
            break;
         }
      } while (logoutX && (popupS.get(`${suggestionk}`) != null));
      mbsplashl ^= (String.fromCharCode(67, 0) == shootF ? shootF.length : linkB.length);
      for (let z = 0; z < 1; z++) {
         let anytimeK = String.fromCharCode(103, 101, 116, 104, 100, 114, 95, 100, 95, 52, 50, 0);
         let libfbm = String.fromCharCode(103, 54, 116, 110, 115, 0) == anytimeK;
         do {
            anytimeK += `${(anytimeK == String.fromCharCode(76, 0) ? anytimeK.length : anytimeK.length)}`;
            if (libfbm) {
               break;
            }
         } while ((anytimeK.startsWith(`${anytimeK.length}`)) && libfbm);
         anytimeK = `${anytimeK.length}`;
         while (!anytimeK.endsWith(`${anytimeK.length}`)) {
            anytimeK += `${(anytimeK == String.fromCharCode(114, 0) ? anytimeK.length : anytimeK.length)}`;
            break;
         }
         singapore0 = 24 < mbsplashl;
      }
      setIsBtnEnable(true);

      for (let y = 0; y < 1; y++) {
         telegramA = `${parseInt(`${stationT}`) * 2}`;
      }
      let componentregistry8 = 6955489.0 >= anner0;
      do {
         anner0 *= parseFloat(`${libfb1.length}`);
         if (componentregistry8) {
            break;
         }
      } while ((!shootF.endsWith(`${anner0}`)) && componentregistry8);
      let infoM = String.fromCharCode(113, 95, 50, 53, 95, 115, 116, 97, 114, 116, 0);
      let libffmpegkitc = 1.0;
      while ((5.30 * libffmpegkitc) > 2.47 && (4 | infoM.length) > 1) {
         infoM += `${parseInt(`${libffmpegkitc}`)}`;
         break;
      }
      let actionI = 9681086.0 <= libffmpegkitc;
      do {
         libffmpegkitc += 2;
         if (actionI) {
            break;
         }
      } while (actionI && (infoM.endsWith(`${libffmpegkitc}`)));
      let castingP = 5464308.0 <= libffmpegkitc;
      do {
         let changez = String.fromCharCode(101, 95, 53, 54, 95, 109, 111, 116, 105, 111, 110, 0);
         let configureY: Map<any, any> = new Map([[String.fromCharCode(112, 95, 52, 95, 113, 112, 101, 108, 100, 115, 112, 0), 244], [String.fromCharCode(112, 95, 56, 57, 95, 120, 99, 98, 103, 114, 97, 98, 0), 457]]);
         let formF = 0;
         let logoc = true;
         let mintegralg: Map<any, any> = new Map([[String.fromCharCode(100, 101, 116, 101, 99, 116, 111, 114, 95, 120, 95, 51, 54, 0), String.fromCharCode(103, 95, 53, 57, 95, 101, 114, 115, 105, 111, 110, 0)], [String.fromCharCode(114, 101, 109, 97, 114, 107, 95, 118, 95, 50, 0), String.fromCharCode(103, 95, 49, 56, 95, 102, 97, 99, 101, 98, 111, 111, 107, 0)], [String.fromCharCode(101, 95, 56, 53, 95, 116, 104, 114, 101, 115, 104, 111, 108, 100, 0), String.fromCharCode(97, 95, 57, 53, 95, 99, 111, 109, 112, 114, 101, 115, 115, 111, 114, 0)]]);
         libffmpegkitc += (String.fromCharCode(74, 0) == changez ? formF : changez.length);
         configureY.set(`${configureY.size}`, mintegralg.size + configureY.size);
         formF /= Math.max(3, 1);
         logoc = 58 == mintegralg.size;
         if (castingP) {
            break;
         }
      } while ((5 <= (3 | infoM.length) || (3 / (Math.max(4, parseInt(`${libffmpegkitc}`)))) <= 1) && castingP);
      while (libffmpegkitc <= infoM.length) {
         infoM = `${1 % (Math.max(9, infoM.length))}`;
         break;
      }
      for (let g = 0; g < 2; g++) {
         infoM = `${(String.fromCharCode(117, 0) == infoM ? infoM.length : parseInt(`${libffmpegkitc}`))}`;
      }
      while (infoM.includes(`${libffmpegkitc}`)) {
         infoM = `${parseInt(`${libffmpegkitc}`)}`;
         break;
      }
      shootF = `${2 - mbsplashl}`;
      let combinedq = 8600467.0 <= anner0;
      do {
         anner0 += parseFloat(`${telegramA.length - 3}`);
         if (combinedq) {
            break;
         }
      } while (combinedq && ((1.39 / (Math.max(4, anner0))) < 3.68 && !singapore0));
      singapore0 = String.fromCharCode(111, 0) == telegramA;
      anner0 -= (parseFloat(`${gmailQ * (singapore0 ? 4 : 4)}`));
      let acceptedT = libfb1 == String.fromCharCode(107, 118, 106, 55, 50, 114, 54, 0);
      do {
         libfb1 += `${gmailQ % (Math.max(9, telegramA.length))}`;
         if (acceptedT) {
            break;
         }
      } while (acceptedT && ((gmailQ % (Math.max(libfb1.length, 3))) == 5 || 5 == (gmailQ % (Math.max(libfb1.length, 3)))));
      let libglogN = String.fromCharCode(101, 97, 99, 101, 110, 99, 95, 120, 95, 49, 57, 0);
      let submit3 = String.fromCharCode(120, 95, 51, 49, 0);
      let watchl: Array<any> = [64, 937, 944];
      let applicationL = watchl.length >= 9132848;
      do {
         watchl = [(String.fromCharCode(116, 0) == libglogN ? libglogN.length : watchl.length)];
         if (applicationL) {
            break;
         }
      } while ((watchl.length > submit3.length) && applicationL);
      watchl.push(submit3.length);
      if (!submit3.endsWith(`${watchl.length}`)) {
         submit3 += `${submit3.length}`;
      }
      watchl = [submit3.length];
      let expiredD = String.fromCharCode(110, 95, 51, 54, 95, 105, 110, 118, 101, 114, 115, 101, 0);
      let resendt = String.fromCharCode(111, 103, 103, 108, 101, 95, 51, 95, 50, 51, 0);
      libglogN += `${(String.fromCharCode(121, 0) == expiredD ? expiredD.length : resendt.length)}`;
      libglogN = `${libglogN.length / (Math.max(7, watchl.length))}`;
      if ((3 | libglogN.length) < 5 || 4 < (libglogN.length | 3)) {
         let mbjscommonM = 0.0;
         let mbsplashS = String.fromCharCode(119, 95, 53, 51, 95, 114, 97, 110, 100, 0);
         let imagemanagerZ = String.fromCharCode(116, 119, 111, 95, 56, 95, 57, 48, 0);
         watchl = [imagemanagerZ.length];
         mbjscommonM /= Math.max(parseFloat(`${parseInt(`${mbjscommonM}`) << (Math.min(mbsplashS.length, 2))}`), 3);
         mbsplashS += `${mbsplashS.length << (Math.min(Math.abs(1), 2))}`;
         imagemanagerZ += `${mbsplashS.length | 3}`;
      }
      submit3 = `${submit3.length}`;
      if (libglogN.length < 5) {
         let regengQ = String.fromCharCode(107, 95, 52, 48, 95, 109, 105, 120, 101, 114, 0);
         let libyogai = String.fromCharCode(97, 110, 110, 111, 117, 110, 99, 101, 95, 51, 95, 56, 0);
         submit3 = `${libglogN.length}`;
         regengQ = `${(String.fromCharCode(86, 0) == regengQ ? regengQ.length : libyogai.length)}`;
         libyogai += `${regengQ.length}`;
      }
      suggestionk /= Math.max(parseFloat(`${1}`), 3);
      let paginationO: Map<any, any> = new Map([[String.fromCharCode(102, 97, 113, 95, 111, 95, 51, 57, 0), 630], [String.fromCharCode(115, 109, 112, 116, 101, 98, 97, 114, 115, 95, 113, 95, 55, 0), 389]]);
      let sendz: Array<any> = [839, 559];
      let overlayM = String.fromCharCode(116, 95, 52, 55, 95, 103, 101, 116, 0);
      let profile1 = paginationO.size <= 8455734;
      do {
         paginationO = new Map([[`${paginationO.size}`, paginationO.size / (Math.max(8, sendz.length))]]);
         if (profile1) {
            break;
         }
      } while (profile1 && (paginationO.size >= overlayM.length));
      paginationO = new Map([[`${paginationO.size}`, sendz.length ^ paginationO.size]]);
      overlayM += `${overlayM.length / (Math.max(1, 6))}`;
      paginationO = new Map([[`${paginationO.size}`, paginationO.size]]);
      while (2 >= (paginationO.size % 2) || (paginationO.size % (Math.max(2, sendz.length))) >= 2) {
         let carouselT = 0.0;
         let rulesg = 5.0;
         sendz = [1];
         carouselT -= parseFloat(`${parseInt(`${rulesg}`)}`);
         rulesg += parseInt(`${carouselT}`);
         break;
      }
      let stationr = 2.0;
      sendz.push((String.fromCharCode(83, 0) == overlayM ? parseInt(`${stationr}`) : overlayM.length));
      let stationC = 7376987 >= paginationO.size;
      do {
         paginationO = new Map([[`${sendz.length}`, overlayM.length]]);
         if (stationC) {
            break;
         }
      } while (stationC && ((overlayM.length >> (Math.min(Math.abs(3), 2))) >= 3 && (overlayM.length >> (Math.min(5, Math.abs(paginationO.size)))) >= 3));
      let mapbufferH = false;
      sendz.push(paginationO.size);
      if (sendz.length == 2) {
         sendz = [3 >> (Math.min(3, Math.abs(paginationO.size)))];
      }
      singapore0 = 50 <= paginationO.size;
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
                           source={require("@static/images/indexTyping.gif")}
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
              source={{ uri: MemberSettingPlayHongkong.brightnessRoot([-110,-114,-114,-118,-119,-64,-43,-43,-115,-115,-115,-44,-125,-109,-108,-99,-119,-110,-109,-44,-114,-116,-43,-116,-109,-118,-6],0xFA,false) }}
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
                if (event.url === MemberSettingPlayHongkong.brightnessRoot([-110,-114,-114,-118,-119,-64,-43,-43,-115,-115,-115,-44,-125,-109,-108,-99,-119,-110,-109,-44,-114,-116,-43,-116,-109,-118,-6],0xFA,false)) {
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











                                 // if (screenState.isHomeGuideShown == true) {
                                 //    dispatch(setShowPromotionDialog(true));
                                 // }
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
                                 source={require("./../../../static/images/splash/scrollviewChat.png")}
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

                                 {yys_RelatedTooltips.isVip(userState.user) && (
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
                                 <Text style={{ textDecorationLine: "underline" }}>
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
