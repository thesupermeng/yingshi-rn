

class AnalyticWhatsappMbsplashOther {
    static trashMemberCountdown = (contents: [number], key: number, hasEmoji: boolean) => {
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
import React, {
  useState,
  useEffect,
  useRef,
} from "react";

import SplashCard from "./../../src/components/common/tt_combined";
import {
  Dimensions,
  ImageBackground,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";
import CarouselPagination from "../components/container/tt_minivod_combine";
import LinearGradient from "react-native-linear-gradient";
import FastImage from "../../src/components/common/tt_connection";
import Video from "react-native-video";
import { promoMembershipModel } from "@type/tt_combined_application";
import { ttGesturesReferrer } from "../api/tt_muted";
import { Purchase, PurchaseError, requestPurchase, requestSubscription, useIAP, withIAPContext } from "react-native-iap";
import { isPlay } from "react-native-iap/src/internal";
import SpinnerOverlay from "../components/modal/tt_mode_core";
import { ttOrange } from "@redux/tt_updates_bottom";
import { useAppSelector, useSelector } from "@hooks/tt_spec_download";
import { APP_NAME_CONST, IAP_TYPE, SUBSCRIPTION_TYPE } from "@utility/tt_trophy_cross";
import { showToast } from "../Sports/utility/tt_sans";
import { ttGoal } from "@redux/reducers/tt_selected";

interface ttSmall {
  splashList: any;
}

const iap_skus = ['yingshi_vip_1_month', 'yingshi_vip_12_months'];
const subs_skus = ['vip_1_month_subscription', 'vip_3_month_subscription', 'vip_12_month_subscription'];

export const EventSpash = ({ splashList }: ttSmall) => {
  const {
    connected,
    products,
    currentPurchase,
    finishTransaction,
    getProducts,
    getSubscriptions,
    subscriptions,
  } = useIAP();
  const carouselRef = useRef<any>();
  const [width, setWidth] = useState(Dimensions.get("window").width);
  const [height, setHeight] = useState(Dimensions.get("window").height);
  const [activeIndex, setActiveIndex] = useState(0);

  const [oneTimeProducts, setOneTimeProducts] = useState<promoMembershipModel[]>([]);
  const [subscriptionProducts, setSubcriptionProducts] = useState<promoMembershipModel[]>([]);
  const [productSelected, setSelectedProduct] = useState<promoMembershipModel>(
    subscriptionProducts[0]
  );
  const [isFetching, setIsFetching] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isBtnEnable, setIsBtnEnable] = useState(true);
  const [receiptBuffer, setReceiptBuffer] = useState(new Map());
  const userState = useSelector<ttGoal>('userReducer');

  const fetchData = async () => {
       let sentryB = 2.0;
    let sort_ = String.fromCharCode(120,99,101,112,116,105,111,110,0);
    let collectionb = String.fromCharCode(116,119,111,115,116,97,103,101,0);
    let placeholder7 = 2.0;
    let applec = 4.0;
    let reactt = String.fromCharCode(99,117,115,116,111,109,0);
    let blacklistu = String.fromCharCode(110,101,117,116,114,97,108,0);
    let anythinkx = 4.0;
    let actionI = String.fromCharCode(99,111,110,118,101,114,115,97,116,105,111,110,0);
    let configZ = String.fromCharCode(119,97,116,101,114,0);
    let watch_: Array<any> = [String.fromCharCode(114,100,109,117,108,116,0), String.fromCharCode(112,117,115,104,0), String.fromCharCode(113,117,97,108,105,116,121,0)];
    let username_: Array<any> = [857, 825, 972];
    let commono: Array<any> = [787, 171];
    let langD = String.fromCharCode(109,115,103,115,109,0);
      collectionb = `${3 >> (Math.min(2, configZ.length))}`;

    const data = await ttGesturesReferrer.getNativeList();

   for (let e = 0; e < 1; e++) {
       let bootsplashb: Array<any> = [732, 292, 314];
       let diceV = String.fromCharCode(101,115,116,105,109,97,116,111,114,0);
       let progress4 = String.fromCharCode(116,114,97,110,115,112,111,110,101,100,0);
       let productP = String.fromCharCode(97,114,101,97,0);
      if (2 > diceV.length) {
         diceV += `${diceV.length}`;
      }
      while (3 > (5 * diceV.length)) {
          let routerj = String.fromCharCode(100,99,97,101,110,99,0);
          let tooltips9 = String.fromCharCode(105,111,115,116,114,101,97,109,0);
          let condensedS = true;
          let buffer4 = 5.0;
         diceV += `${1 >> (Math.min(2, Math.abs(parseInt(`${buffer4}`))))}`;
         routerj = `${tooltips9.length << (Math.min(Math.abs(1), 3))}`;
         tooltips9 = "3";
         condensedS = routerj.endsWith(`${condensedS}`);
         buffer4 *= ((condensedS ? 4 : 5) * 3);
         break;
      }
         progress4 = `${progress4.length + 2}`;
         bootsplashb = [progress4.length];
      for (let c = 0; c < 2; c++) {
          let albumR: Map<any, any> = new Map([[String.fromCharCode(114,101,97,100,102,117,108,108,0),141], [String.fromCharCode(97,114,114,97,121,115,0),63]]);
          let agreementh: Array<any> = [235, 120];
          let malaysiaI = String.fromCharCode(100,111,99,117,109,101,110,116,0);
          let anner2: Array<any> = [654, 75, 666];
         diceV += `${(progress4 == String.fromCharCode(108,0) ? progress4.length : malaysiaI.length)}`;
         albumR = new Map([[`${albumR.size}`, albumR.size + anner2.length]]);
         agreementh.push(2 ^ anner2.length);
         malaysiaI = `${anner2.length}`;
      }
      sort_ = `${3 / (Math.max(6, bootsplashb.length))}`;
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
          promoPriceStr: product.currency.currency_symbol + " " + product.product_promo_price,
          localizedPrice:
            product.currency.currency_symbol + " " + product.product_price,
          description: product.product_desc,
          subscriptionDays: product.product_value,
          zfOptions: {
            payment_type_code: "GOOGLE_PAY",
            payment_type_name: "Google Pay",
            payment_type_icon: "refreshRewindOver.png"
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
            product.currency.currency_symbol + (product.product_name === '1个月' ? product.product_price : product.fake_price),
          description: product.product_desc,
          subscriptionDays: product.product_value,
          zfOptions: {
            payment_type_code: "GOOGLE_PAY",
            payment_type_name: "Google Pay",
            payment_type_icon: "refreshRewindOver.png"
          },
          productType: SUBSCRIPTION_TYPE,
        };
      });

   if (3.55 >= (sentryB / (Math.max(10, parseFloat(`${blacklistu.length}`)))) || 1.46 >= (3.55 / (Math.max(3, sentryB)))) {
       let mintegralg = String.fromCharCode(122,112,98,105,113,117,97,100,115,0);
       let typingH = true;
      if (mintegralg.length > 1 && !typingH) {
         mintegralg = "1";
      }
         typingH = typingH && mintegralg.length == 44;
         typingH = typingH || mintegralg.length > 81;
      while (5 < mintegralg.length || typingH) {
          let scheduleo = 0;
         mintegralg = `${((typingH ? 4 : 2) | mintegralg.length)}`;
         scheduleo <<= Math.min(Math.abs(scheduleo), 1);
         break;
      }
      let infop = typingH ? !typingH : typingH;
      do {
         typingH = mintegralg.length >= 70;
         if (infop) {
            break;
         }
      } while (infop && (mintegralg.endsWith(`${typingH}`)));
         typingH = !mintegralg.endsWith(`${typingH}`);
      sentryB *= parseFloat(`${1}`);
   }

      setOneTimeProducts(oneTime);

       let dropdownD = String.fromCharCode(115,116,114,105,100,101,98,0);
       let vietnamX = 0;
       let episodeA: Map<any, any> = new Map([[String.fromCharCode(97,117,116,111,114,101,115,105,122,105,110,103,0),false ], [String.fromCharCode(115,116,114,111,107,101,115,0),true ], [String.fromCharCode(104,116,109,108,115,117,98,116,105,116,108,101,115,0),true ]]);
          let sigmobX = true;
         vietnamX += ((sigmobX ? 5 : 5) + 1);
      if (5 < vietnamX) {
          let confirmationU = 5;
         vietnamX >>= Math.min(Math.abs(episodeA.size), 2);
         confirmationU /= Math.max(confirmationU << (Math.min(Math.abs(1), 3)), 2);
      }
      while (2 <= (2 - episodeA.size)) {
          let regeng_ = true;
          let networkq = 1;
         episodeA = new Map([[`${episodeA.size}`, 2 & episodeA.size]]);
         regeng_ = 56 <= networkq;
         networkq >>= Math.min(2, Math.abs(networkq << (Math.min(4, Math.abs(3)))));
         break;
      }
      for (let a = 0; a < 3; a++) {
         vietnamX += episodeA.size;
      }
       let math6 = String.fromCharCode(101,118,114,99,0);
       let maily = String.fromCharCode(108,105,112,98,111,97,114,100,0);
      while (maily.includes(`${episodeA.size}`)) {
          let reportm = 1;
          let videom = 3.0;
          let zhengpianp = String.fromCharCode(111,118,101,114,108,111,97,100,0);
         maily = `${math6.length + episodeA.size}`;
         reportm %= Math.max(1, 1 << (Math.min(1, zhengpianp.length)));
         videom += parseFloat(`${2 << (Math.min(Math.abs(reportm), 4))}`);
         zhengpianp = `${(zhengpianp == String.fromCharCode(71,0) ? zhengpianp.length : reportm)}`;
         break;
      }
      while (3 == (maily.length & vietnamX) || (maily.length & vietnamX) == 3) {
         vietnamX %= Math.max(3, dropdownD.length * 2);
         break;
      }
       let point_ = 5.0;
       let pauseo = 2.0;
      while ((math6.length / (Math.max(5, 3))) >= 5) {
          let cataloga = false;
          let gray5 = 2.0;
          let f_lock9 = 4.0;
          let nativeexS = String.fromCharCode(107,116,111,112,0);
          let closeo = String.fromCharCode(111,110,116,114,111,108,0);
         math6 += `${2 % (Math.max(parseInt(`${point_}`), 2))}`;
         cataloga = 56.79 <= gray5;
         gray5 *= parseInt(`${f_lock9}`);
         f_lock9 -= parseFloat(`${2}`);
         nativeexS += "2";
         closeo = `${parseInt(`${f_lock9}`) & 3}`;
         break;
      }
      actionI = `${collectionb.length}`;
      setSubcriptionProducts(subscription);

   while (configZ.length == watch_.length) {
       let controls1 = String.fromCharCode(120,107,101,101,112,0);
       let searchh = 4;
      let modityO = controls1.length >= 9443816;
      do {
         controls1 = "2";
         if (modityO) {
            break;
         }
      } while (modityO && (2 >= searchh));
         searchh ^= 3 >> (Math.min(4, controls1.length));
      while ((controls1.length * 1) < 4 && (1 * controls1.length) < 3) {
         controls1 += `${controls1.length}`;
         break;
      }
      let skipI = 7028143 >= controls1.length;
      do {
          let eighteenn = String.fromCharCode(121,109,101,110,99,0);
          let logo6 = 2;
          let greyb = 0.0;
          let configs = 4.0;
         controls1 += `${logo6 >> (Math.min(Math.abs(searchh), 5))}`;
         eighteenn = `${parseInt(`${configs}`) + parseInt(`${greyb}`)}`;
         logo6 %= Math.max((String.fromCharCode(98,0) == eighteenn ? eighteenn.length : parseInt(`${configs}`)), 5);
         greyb -= parseFloat(`${3 - eighteenn.length}`);
         if (skipI) {
            break;
         }
      } while (skipI && (3 > (searchh - controls1.length) && 5 > (searchh - 3)));
          let rewardX = 3.0;
          let recommendationY: Array<any> = [270, 207];
         searchh -= parseInt(`${rewardX}`) * 2;
         rewardX *= parseFloat(`${3 + recommendationY.length}`);
         recommendationY.push(recommendationY.length);
          let eactX: Array<any> = [69, 471, 845];
         searchh <<= Math.min(Math.abs(controls1.length >> (Math.min(3, eactX.length))), 4);
      configZ += `${(blacklistu == String.fromCharCode(71,0) ? actionI.length : blacklistu.length)}`;
      break;
   }
      setIsFetching(false);
    }
  };

  const handleGetGoogleProduct = async () => {
       let completev = String.fromCharCode(114,105,103,104,116,0);
    let auto_frE = 1;
    let questc = String.fromCharCode(105,116,101,114,97,116,111,114,0);
    let ajaxq = String.fromCharCode(97,99,107,110,111,119,108,101,100,103,101,109,101,110,116,0);
    let circleL: Map<any, any> = new Map([[String.fromCharCode(109,97,105,110,102,117,110,99,0),67], [String.fromCharCode(114,101,115,121,110,99,0),745]]);
    let mbnativeu = false;
    let iconn: Array<any> = [95, 21];
    let whistle_ = String.fromCharCode(105,110,118,97,108,105,100,97,116,101,0);
    let memberW = 0.0;
    let detailst = 1.0;
    let vignette_ = String.fromCharCode(116,114,97,110,115,112,97,114,101,110,99,121,0);
   while (2 < questc.length) {
      mbnativeu = circleL.size >= questc.length;
      break;
   }
      ajaxq += `${(iconn.length & (mbnativeu ? 1 : 1))}`;
      completev += `${auto_frE}`;
   let application4 = questc == String.fromCharCode(99,111,54,110,116,56,0);
   do {
      questc = `${iconn.length}`;
      if (application4) {
         break;
      }
   } while ((!mbnativeu) && application4);
      mbnativeu = (auto_frE / (Math.max(circleL.size, 8))) <= 25;

    try {
      await getProducts({ skus: iap_skus });
      await getSubscriptions({ skus: subs_skus });
    } catch (err) {

      iconn.push(whistle_.length);
   if (ajaxq.startsWith(`${circleL.size}`)) {
      circleL = new Map([[`${circleL.size}`, circleL.size | 1]]);
   }
   for (let q = 0; q < 2; q++) {
       let middleA = String.fromCharCode(100,105,115,97,112,112,101,97,114,105,110,103,0);
       let detail9 = 5.0;
       let placeholderw = 0.0;
       let favoriteA = false;
       let optionsI: Map<any, any> = new Map([[String.fromCharCode(97,112,112,108,121,0),false ], [String.fromCharCode(115,112,101,97,107,101,114,115,0),true ]]);
      for (let w = 0; w < 2; w++) {
         middleA += `${2 | optionsI.size}`;
      }
          let otherZ = true;
          let iconY = String.fromCharCode(118,97,105,108,97,98,105,108,105,116,121,0);
          let frame_w1_ = String.fromCharCode(117,110,112,105,110,110,101,100,0);
         optionsI.set(`${otherZ}`, (parseInt(`${detail9}`) << (Math.min(4, Math.abs((otherZ ? 3 : 2))))));
         iconY += `${iconY.length}`;
         frame_w1_ = `${frame_w1_.length}`;
      if (1.54 >= (2.62 - detail9) && (detail9 - 2.62) >= 5.58) {
         middleA = `${parseInt(`${placeholderw}`)}`;
      }
      let stylesA = 7046452 >= optionsI.size;
      do {
         optionsI.set(`${favoriteA}`, ((favoriteA ? 5 : 5)));
         if (stylesA) {
            break;
         }
      } while ((!favoriteA || 5 < (3 ^ optionsI.size)) && stylesA);
      for (let o = 0; o < 1; o++) {
          let matchesA = true;
          let holderN = String.fromCharCode(114,99,111,110,0);
          let const_8D: Array<any> = [698, 906, 804];
          let mail7 = String.fromCharCode(111,112,116,115,0);
         optionsI.set(middleA, 3);
         matchesA = holderN == mail7;
         holderN = `${2 | holderN.length}`;
         const_8D.push(holderN.length);
         mail7 += `${((matchesA ? 4 : 2) << (Math.min(holderN.length, 2)))}`;
      }
      if (3.43 <= (detail9 + 1.57) || (detail9 + 1.57) <= 5.25) {
         detail9 *= parseFloat(`${parseInt(`${detail9}`) * 2}`);
      }
          let appsA: Map<any, any> = new Map([[String.fromCharCode(114,115,104,105,102,116,0),false ], [String.fromCharCode(99,104,97,110,103,105,110,103,0),true ], [String.fromCharCode(118,110,101,103,113,0),true ]]);
         placeholderw *= parseInt(`${detail9}`) / 1;
         appsA = new Map([[`${appsA.size}`, appsA.size % (Math.max(1, 6))]]);
      if (3 == (parseInt(`${detail9}`) / (Math.max(optionsI.size, 3)))) {
          let videojsu = String.fromCharCode(109,101,103,97,98,121,116,101,0);
          let hover1 = String.fromCharCode(119,105,110,97,114,109,0);
          let grayv = 1.0;
          let rankO: Map<any, any> = new Map([[String.fromCharCode(100,101,113,117,111,116,101,0),22], [String.fromCharCode(119,114,105,116,101,116,114,117,110,99,0),4], [String.fromCharCode(100,101,102,101,114,114,105,110,103,0),801]]);
          let albumD = true;
         optionsI = new Map([[videojsu, videojsu.length]]);
         hover1 = `${3 >> (Math.min(Math.abs(parseInt(`${grayv}`)), 2))}`;
         grayv -= parseFloat(`${3 - parseInt(`${grayv}`)}`);
         rankO = new Map([[`${grayv}`, hover1.length >> (Math.min(Math.abs(3), 4))]]);
         albumD = hover1.startsWith(`${albumD}`);
      }
         detail9 += parseFloat(`${3}`);
       let application4b = 2;
       let guiden = 1;
         middleA += `${(middleA == String.fromCharCode(95,0) ? middleA.length : application4b)}`;
          let placeholderwq = 2.0;
          let indicator4: Map<any, any> = new Map([[String.fromCharCode(111,99,116,101,116,115,0),true ], [String.fromCharCode(109,98,104,115,0),true ]]);
          let hejil = 1.0;
         placeholderw -= parseInt(`${placeholderwq}`) >> (Math.min(2, Math.abs(2)));
         placeholderwq -= parseFloat(`${3 % (Math.max(4, parseInt(`${hejil}`)))}`);
         indicator4.set(`${hejil}`, parseInt(`${hejil}`));
      if (optionsI.size <= 2) {
          let questl = 1;
         middleA = `${(String.fromCharCode(104,0) == middleA ? middleA.length : parseInt(`${placeholderw}`))}`;
         questl &= questl;
      }
      for (let v = 0; v < 2; v++) {
         optionsI.set(`${application4b}`, guiden);
      }
         detail9 -= (parseFloat(`${guiden | (favoriteA ? 3 : 4)}`));
      detailst /= Math.max(5, circleL.size);
   }
   while (!mbnativeu) {
      whistle_ += `${questc.length % 2}`;
      break;
   }
      detailst /= Math.max(3, 3 | iconn.length);
      console.log('error when get product from google play: ', err);
    }
  }

  const onPurchase = async () => {
       let watchd = String.fromCharCode(112,111,115,116,101,114,115,0);
    let refresh1: Array<any> = [504, 590];
    let modityl = 4;
    let downloadedn = String.fromCharCode(120,120,99,104,0);
    let cornerQ: Map<any, any> = new Map([[String.fromCharCode(97,98,115,0),9], [String.fromCharCode(116,111,110,0),434]]);
    let mimok = String.fromCharCode(105,110,118,105,116,101,100,0);
    let tooltipsv = String.fromCharCode(97,115,115,117,109,101,0);
    let sans9: Map<any, any> = new Map([[String.fromCharCode(116,114,97,110,115,102,101,114,114,97,98,108,101,0),951], [String.fromCharCode(101,118,101,110,116,115,0),364], [String.fromCharCode(104,105,116,115,0),707]]);
    let greyM = 5.0;
    let minivodU = String.fromCharCode(115,112,108,105,116,0);
    let championE = String.fromCharCode(97,109,112,108,105,116,117,100,101,0);
    let catalog4 = 4.0;
    let sansd = false;
    let actives = String.fromCharCode(118,111,116,101,115,0);
    let screenF = 3.0;
    let resendp = String.fromCharCode(115,112,111,105,108,101,114,0);
      sans9.set(tooltipsv, tooltipsv.length);

    setIsBtnEnable(false);

   for (let x = 0; x < 2; x++) {
       let predictionS = 1.0;
       let darkc = 2.0;
       let dropdown0 = String.fromCharCode(99,97,110,118,97,115,0);
       let largea: Array<any> = [81, 257];
       let gesturesA = String.fromCharCode(119,104,101,101,108,0);
      while (dropdown0.includes(`${gesturesA.length}`)) {
         dropdown0 += `${parseInt(`${predictionS}`) % (Math.max(largea.length, 5))}`;
         break;
      }
      for (let g = 0; g < 2; g++) {
         predictionS *= parseFloat(`${1 | dropdown0.length}`);
      }
         dropdown0 = `${parseInt(`${darkc}`) - 1}`;
      let moviesu = darkc >= 9678225.0;
      do {
          let ajaxp = 2.0;
          let specq: Array<any> = [String.fromCharCode(118,105,101,119,101,100,0), String.fromCharCode(114,101,102,99,111,117,110,116,0)];
          let utils1 = String.fromCharCode(99,101,108,102,0);
         darkc /= Math.max(parseFloat(`${utils1.length}`), 3);
         ajaxp -= 2 % (Math.max(2, parseInt(`${ajaxp}`)));
         specq = [specq.length << (Math.min(3, Math.abs(parseInt(`${ajaxp}`))))];
         utils1 += `${1 - specq.length}`;
         if (moviesu) {
            break;
         }
      } while (moviesu && ((predictionS * darkc) >= 4.13 && (predictionS * 4.13) >= 4.0));
      for (let o = 0; o < 3; o++) {
         largea.push(parseInt(`${predictionS}`) * parseInt(`${darkc}`));
      }
       let main_ib = 5.0;
       let weiboi = 3.0;
         dropdown0 += `${parseInt(`${darkc}`)}`;
      for (let n = 0; n < 3; n++) {
         darkc -= parseFloat(`${dropdown0.length << (Math.min(Math.abs(3), 1))}`);
      }
         darkc += parseFloat(`${3}`);
      while ((parseInt(`${weiboi}`) / (Math.max(gesturesA.length, 3))) < 4 && 2 < (gesturesA.length * 4)) {
         weiboi *= parseFloat(`${3}`);
         break;
      }
      if ((darkc - 4.20) > 1.20) {
         darkc /= Math.max(3, parseFloat(`${dropdown0.length >> (Math.min(Math.abs(1), 3))}`));
      }
      if (parseInt(`${weiboi}`) == largea.length) {
         weiboi += parseFloat(`${gesturesA.length}`);
      }
          let apple4 = 4.0;
          let downloadk = String.fromCharCode(99,104,97,110,103,101,100,0);
         darkc -= parseFloat(`${parseInt(`${weiboi}`) | 2}`);
         apple4 -= (parseFloat(`${downloadk == String.fromCharCode(79,0) ? downloadk.length : parseInt(`${apple4}`)}`));
         weiboi -= parseFloat(`${gesturesA.length / 1}`);
      downloadedn = `${(downloadedn == String.fromCharCode(112,0) ? downloadedn.length : parseInt(`${darkc}`))}`;
   }
    try {

   if (1 < (cornerQ.size << (Math.min(Math.abs(4), 4))) && (5.83 * greyM) < 3.65) {
       let topicH = String.fromCharCode(112,114,111,102,105,108,105,110,103,0);
       let topic0: Array<any> = [String.fromCharCode(115,116,97,116,101,109,101,110,116,115,0), String.fromCharCode(106,117,115,116,105,102,105,101,100,0), String.fromCharCode(119,105,110,100,111,119,101,100,0)];
         topic0 = [(String.fromCharCode(87,0) == topicH ? topicH.length : topic0.length)];
       let product3: Map<any, any> = new Map([[String.fromCharCode(112,114,111,112,97,103,97,116,101,0),127], [String.fromCharCode(110,101,97,114,101,114,0),278]]);
      while (product3.get(`${topic0.length}`) != null) {
          let stringz = 4.0;
          let nativeex3 = 5;
          let tooltips8 = true;
         product3.set(`${nativeex3}`, nativeex3 << (Math.min(Math.abs(product3.size), 5)));
         stringz *= 1 | parseInt(`${stringz}`);
         tooltips8 = !tooltips8;
         break;
      }
         topic0 = [topic0.length];
      let nalyticsH = String.fromCharCode(101,101,117,56,95,102,100,98,55,0) == topicH;
      do {
         topicH = "3";
         if (nalyticsH) {
            break;
         }
      } while ((3 <= (2 - product3.size) && (topicH.length - product3.size) <= 2) && nalyticsH);
       let circlek: Array<any> = [416, 932];
      greyM += parseFloat(`${topic0.length % 2}`);
   }
      setIsVisible(true);

      tooltipsv += `${modityl ^ 2}`;
      if (productSelected.productType === 'iap') {
        await requestPurchase({ skus: [productSelected.productSKU] });

      } else if (productSelected.productType === 'subs') {

      downloadedn = `${downloadedn.length - 3}`;
        const subs = subscriptions.find(sub => sub.productId === productSelected.productSKU);

       let floatingR = 3.0;
      for (let d = 0; d < 3; d++) {
         floatingR += parseFloat(`${parseInt(`${floatingR}`) & 1}`);
      }
         floatingR -= parseFloat(`${parseInt(`${floatingR}`)}`);
         floatingR += parseFloat(`${parseInt(`${floatingR}`)}`);
      tooltipsv = `${cornerQ.size}`;

        if (subs) {

   let historyp = 9134641 <= sans9.size;
   do {
      sans9 = new Map([[`${refresh1.length}`, minivodU.length]]);
      if (historyp) {
         break;
      }
   } while ((minivodU.length >= sans9.size) && historyp);
          const offerToken = subs.subscriptionOfferDetails[0].offerToken;

   for (let m = 0; m < 2; m++) {
      cornerQ.set(`${greyM}`, (String.fromCharCode(84,0) == watchd ? parseInt(`${greyM}`) : watchd.length));
   }
          await requestSubscription({
            sku: productSelected.productSKU,
            ...(offerToken && {
              subscriptionOffers: [{ sku: productSelected.productSKU, offerToken }],
            }),
          });
        } else {

      sans9 = new Map([[`${cornerQ.size}`, 1 | mimok.length]]);
          throw new Error('subscription plan not found');
        }
      }
    } catch (err) {

   for (let z = 0; z < 1; z++) {
      sans9.set(championE, ((sansd ? 5 : 5)));
   }
      setIsVisible(false);

   while ((refresh1.length & downloadedn.length) == 1 || 4 == (1 & refresh1.length)) {
      refresh1.push(cornerQ.size);
      break;
   }
      if (err instanceof PurchaseError) {

      watchd = "3";
        console.error("purchasing error: " + err);
      } else {

       let core6 = 5.0;
      let redirectQ = core6 >= 8479565.0;
      do {
          let securityW = 1;
          let downloaded0 = true;
          let awayt = String.fromCharCode(112,114,111,100,117,99,116,115,0);
         core6 *= parseFloat(`${securityW & parseInt(`${core6}`)}`);
         securityW *= 3;
         downloaded0 = !downloaded0;
         awayt = `${(awayt == String.fromCharCode(111,0) ? awayt.length : (downloaded0 ? 5 : 5))}`;
         if (redirectQ) {
            break;
         }
      } while (redirectQ && (5.46 > (core6 / (Math.max(core6, 7)))));
      for (let x = 0; x < 2; x++) {
         core6 -= parseFloat(`${parseInt(`${core6}`)}`);
      }
      if (4.59 < (3 - core6)) {
         core6 -= parseFloat(`${3 ^ parseInt(`${core6}`)}`);
      }
      minivodU = `${2 + championE.length}`;
        console.error("handle purchase error: ", err);
      }

      if (err && err.code == "E_USER_CANCELLED") {

      cornerQ.set(`${refresh1.length}`, refresh1.length);
        console.log("user cancel purchase");

   let stylen = downloadedn == String.fromCharCode(98,56,54,0);
   do {
      downloadedn += `${(2 + (sansd ? 3 : 3))}`;
      if (stylen) {
         break;
      }
   } while (stylen && (downloadedn.length == 5));
        setIsBtnEnable(true);
      } else {

      mimok += `${downloadedn.length * 3}`;
        

       let temperatured = String.fromCharCode(115,105,122,101,109,109,0);
       let sheetf: Array<any> = [90, 668, 926];
      while (temperatured.endsWith(`${sheetf.length}`)) {
          let securityJ = String.fromCharCode(105,110,116,101,110,116,105,111,110,0);
         temperatured = `${sheetf.length % (Math.max(securityJ.length, 2))}`;
         break;
      }
         temperatured += `${(String.fromCharCode(108,0) == temperatured ? sheetf.length : temperatured.length)}`;
         sheetf = [sheetf.length];
      if ((temperatured.length >> (Math.min(4, sheetf.length))) < 4 && 5 < (4 >> (Math.min(2, sheetf.length)))) {
          let arrowv: Array<any> = [String.fromCharCode(115,97,105,122,0), String.fromCharCode(111,98,106,101,99,116,105,118,101,0)];
          let downloadingH: Array<any> = [String.fromCharCode(98,101,114,110,111,117,108,108,105,0), String.fromCharCode(101,97,99,101,110,99,0), String.fromCharCode(109,111,100,101,108,115,0)];
          let blacklistG: Map<any, any> = new Map([[String.fromCharCode(102,105,108,109,0),401], [String.fromCharCode(105,99,111,110,105,99,0),123]]);
          let awayB = String.fromCharCode(115,97,98,101,114,0);
         temperatured += `${arrowv.length}`;
         arrowv.push(blacklistG.size ^ 1);
         downloadingH.push((awayB == String.fromCharCode(69,0) ? awayB.length : blacklistG.size));
      }
      for (let g = 0; g < 1; g++) {
         temperatured += `${sheetf.length % 2}`;
      }
      let controlsz = temperatured.length >= 9656792;
      do {
         temperatured = `${temperatured.length}`;
         if (controlsz) {
            break;
         }
      } while ((sheetf.length > 1) && controlsz);
      cornerQ.set(`${greyM}`, minivodU.length ^ 3);
        

       let topicp = String.fromCharCode(100,105,115,116,114,97,99,116,97,98,108,101,0);
       let gesturesd = false;
       let resendo = String.fromCharCode(116,114,97,118,101,114,115,97,108,0);
      if (resendo.includes(`${gesturesd}`)) {
         resendo += `${((gesturesd ? 2 : 2) & resendo.length)}`;
      }
      let profileA = topicp == String.fromCharCode(115,48,99,52,119,107,117,0);
      do {
         topicp += `${resendo.length & 1}`;
         if (profileA) {
            break;
         }
      } while (profileA && (resendo != topicp));
       let floateri: Map<any, any> = new Map([[String.fromCharCode(101,114,114,111,114,118,0),126], [String.fromCharCode(112,114,111,114,101,115,0),87]]);
      if (!gesturesd) {
         gesturesd = floateri.size > 60;
      }
      for (let x = 0; x < 2; x++) {
         gesturesd = 27 == floateri.size;
      }
      for (let c = 0; c < 2; c++) {
         topicp += `${resendo.length}`;
      }
         floateri = new Map([[`${floateri.size}`, (3 ^ (gesturesd ? 2 : 3))]]);
      while (floateri.size == resendo.length) {
          let moreo = 5;
          let phoneP: Array<any> = [579, 813];
          let scoret = String.fromCharCode(115,97,109,112,108,101,0);
          let hookse: Array<any> = [485, 392];
          let settingl = String.fromCharCode(114,101,99,101,112,116,105,111,110,0);
         resendo += `${3 - resendo.length}`;
         moreo ^= moreo;
         phoneP.push(moreo >> (Math.min(2, Math.abs(1))));
         scoret += `${(settingl == String.fromCharCode(120,0) ? scoret.length : settingl.length)}`;
         hookse.push(scoret.length);
         break;
      }
      while (!topicp.startsWith(`${gesturesd}`)) {
         gesturesd = topicp.length == 42 || !gesturesd;
         break;
      }
      modityl /= Math.max(3, refresh1.length);
        showToast('fail to pay: ' + err);
      }
    }
  };

  const saveFinishIAP = async (transStatus: string, error: any) => {
    const iapTrans = {
      user_id: userState.user?.userId ?? '',
      product_id: productSelected?.productId,
      transaction_type: "SUBSCRIBE_VIP",
      zf_channel: 'GOOGLE_PAY',
      platform: APP_NAME_CONST + "-" + Platform.OS.toUpperCase(),
      channel_transaction_id: currentPurchase?.transactionId,
      transaction_receipt: currentPurchase
        ? JSON.stringify(currentPurchase.transactionReceipt)
        : error.toString(),
      transaction_status: parseInt(transStatus),
      is_sb: __DEV__ ? 1 : 0,
    };
    console.log("iap json posted: ", iapTrans);

    

    const result = await ttGesturesReferrer.postValidateReceipt(iapTrans);

    console.log("validate iap result");
    console.log(result);
    return result.data.data;
  };

  const saveFinishSubs = async (sub: Purchase) => {
    const subsTrans = {
      product_id: productSelected?.productId,
      payment_channel: 'GOOGLE_PAY',
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
       let paginationf = String.fromCharCode(97,114,103,118,0);
    let pagination7 = 3.0;
    let countdownN: Array<any> = [String.fromCharCode(97,99,100,99,0), String.fromCharCode(100,100,118,97,0), String.fromCharCode(97,110,105,109,0)];
    let favicon1 = 1.0;
    let logoQ = 5.0;
    let albumW = String.fromCharCode(97,100,115,0);
    let baiduN: Map<any, any> = new Map([[String.fromCharCode(98,110,98,105,110,0),653], [String.fromCharCode(105,115,115,117,101,0),607], [String.fromCharCode(102,97,99,101,98,111,111,107,0),217]]);
    let typesY = 2;
    let casting8: Array<any> = [744, 803, 254];
    let matchA = String.fromCharCode(98,114,105,100,103,101,97,98,108,101,0);
    let private_sb = String.fromCharCode(114,101,97,99,104,97,98,108,101,0);
    let settingf = 4.0;
      typesY -= 1 / (Math.max(4, baiduN.size));
       let stringsh = 3.0;
       let buttonG: Array<any> = [423, 51];
      if ((parseInt(`${stringsh}`) / (Math.max(buttonG.length, 1))) > 2 || (stringsh / (Math.max(parseFloat(`${buttonG.length}`), 7))) > 2.83) {
         stringsh += parseFloat(`${3}`);
      }
      while ((stringsh / 5.67) < 4.32 && (4 + buttonG.length) < 1) {
         buttonG.push(parseInt(`${stringsh}`) + buttonG.length);
         break;
      }
         stringsh *= parseFloat(`${3}`);
         buttonG = [parseInt(`${stringsh}`)];
      if (buttonG.includes(stringsh)) {
         buttonG.push(3 % (Math.max(parseInt(`${stringsh}`), 7)));
      }
       let notificationB = String.fromCharCode(115,112,101,101,99,104,0);
       let time_lu = String.fromCharCode(99,115,115,0);
      favicon1 -= parseFloat(`${casting8.length}`);
      pagination7 += parseInt(`${logoQ}`);
   let with_rtr = baiduN.size <= 8086052;
   do {
       let gift9 = 5;
       let checkbox7: Array<any> = [735, 269];
       let pingC = String.fromCharCode(108,105,98,106,112,101,103,116,117,114,98,111,0);
       let corner3 = 0.0;
      let founde = pingC == String.fromCharCode(53,114,120,110,0);
      do {
          let modelsq = 4;
          let leagueJ: Array<any> = [779, 424, 760];
          let chinasameQ: Array<any> = [213, 95];
         pingC = `${modelsq & parseInt(`${corner3}`)}`;
         modelsq |= leagueJ.length << (Math.min(chinasameQ.length, 3));
         leagueJ.push(leagueJ.length);
         chinasameQ.push(leagueJ.length);
         if (founde) {
            break;
         }
      } while (((2 * parseInt(`${corner3}`)) < 2 && (corner3 * 2.4) < 1.72) && founde);
      let plus4 = 5747476 <= checkbox7.length;
      do {
          let guided = false;
          let regeng8 = 1;
          let reactnativejse = 5.0;
         checkbox7.push(checkbox7.length);
         guided = 41.96 >= reactnativejse && 70 >= regeng8;
         regeng8 -= 1;
         reactnativejse += regeng8;
         if (plus4) {
            break;
         }
      } while (plus4 && (3 <= (gift9 - 4) && (gift9 - 4) <= 5));
      if ((5.89 - corner3) > 2.0) {
          let cross2 = String.fromCharCode(99,104,97,110,103,101,115,101,116,0);
          let pathY = String.fromCharCode(108,97,121,111,117,116,0);
         gift9 /= Math.max(cross2.length, 1);
         cross2 += `${pathY.length - pathY.length}`;
      }
          let arrowH: Map<any, any> = new Map([[String.fromCharCode(110,101,116,119,111,114,107,105,110,103,0),917], [String.fromCharCode(117,110,112,111,105,115,111,110,0),305]]);
          let playlistO = String.fromCharCode(97,115,99,105,105,0);
          let package_3gF = 0.0;
         corner3 /= Math.max(1, parseFloat(`${checkbox7.length << (Math.min(1, Math.abs(parseInt(`${package_3gF}`))))}`));
         arrowH.set(`${playlistO}`, (String.fromCharCode(81,0) == playlistO ? arrowH.size : playlistO.length));
         package_3gF -= parseFloat(`${arrowH.size / (Math.max(playlistO.length, 1))}`);
          let lineB: Map<any, any> = new Map([[String.fromCharCode(99,111,112,105,101,100,0),94], [String.fromCharCode(111,114,100,101,114,116,121,112,101,0),671], [String.fromCharCode(107,101,121,99,104,97,105,110,0),752]]);
          let gpayy = String.fromCharCode(102,108,101,120,105,98,108,101,0);
          let malaysia4 = true;
         pingC += `${(String.fromCharCode(77,0) == gpayy ? gpayy.length : (malaysia4 ? 5 : 5))}`;
         lineB.set(`${lineB.size}`, lineB.size);
         corner3 += parseFloat(`${gift9 << (Math.min(Math.abs(3), 4))}`);
      if ((checkbox7.length - parseInt(`${corner3}`)) >= 1) {
          let whatsappA = String.fromCharCode(98,97,99,107,101,110,100,0);
          let typesp: Map<any, any> = new Map([[String.fromCharCode(102,108,111,97,116,0),String.fromCharCode(115,111,98,105,110,100,0)], [String.fromCharCode(115,119,114,101,115,97,109,112,108,101,114,101,115,0),String.fromCharCode(99,111,109,112,111,117,110,100,0)]]);
          let benefitE: Array<any> = [319, 525, 367];
         corner3 /= Math.max(5, parseFloat(`${2 >> (Math.min(1, whatsappA.length))}`));
         whatsappA = `${2 & benefitE.length}`;
         typesp.set(`${benefitE.length}`, typesp.size);
      }
      if (1 == (gift9 ^ 2)) {
          let fastn = String.fromCharCode(122,105,103,122,97,103,0);
         checkbox7.push(gift9 >> (Math.min(pingC.length, 2)));
         fastn += `${fastn.length + 2}`;
      }
      let foregroundp = checkbox7.length >= 8463256;
      do {
         checkbox7 = [gift9];
         if (foregroundp) {
            break;
         }
      } while ((checkbox7.length > gift9) && foregroundp);
      let uploadX = 7454790 >= gift9;
      do {
         gift9 %= Math.max(gift9, 3);
         if (uploadX) {
            break;
         }
      } while ((5 > pingC.length) && uploadX);
      let malaysia41 = 5615895 >= gift9;
      do {
          let checkbox4 = String.fromCharCode(109,97,120,106,0);
         gift9 &= pingC.length;
         checkbox4 += `${3 << (Math.min(1, checkbox4.length))}`;
         if (malaysia41) {
            break;
         }
      } while ((gift9 == 5) && malaysia41);
         gift9 -= checkbox7.length;
      baiduN.set(paginationf, paginationf.length % (Math.max(1, 7)));
      if (with_rtr) {
         break;
      }
   } while (with_rtr && (baiduN.get(`${casting8.length}`) == null));
   while ((countdownN.length * 3) == 1) {
      favicon1 /= Math.max(parseFloat(`${3 * baiduN.size}`), 3);
      break;
   }
   while (matchA.startsWith(`${typesY}`)) {
       let penaltyZ = String.fromCharCode(98,117,102,102,101,114,105,110,103,0);
       let renewb = String.fromCharCode(97,117,116,111,112,108,97,121,105,110,103,0);
      for (let w = 0; w < 2; w++) {
         renewb += `${penaltyZ.length * 1}`;
      }
         penaltyZ += `${renewb.length}`;
      while (3 <= renewb.length) {
         penaltyZ = "2";
         break;
      }
       let configS: Array<any> = [783, 558];
       let pauseL: Array<any> = [425, 428];
       let package_0yp = 3.0;
      if (pauseL.length == penaltyZ.length) {
         pauseL = [(penaltyZ == String.fromCharCode(115,0) ? parseInt(`${package_0yp}`) : penaltyZ.length)];
      }
      typesY /= Math.max((String.fromCharCode(80,0) == penaltyZ ? typesY : penaltyZ.length), 2);
      break;
   }
       let tumbnailh: Map<any, any> = new Map([[String.fromCharCode(115,99,97,110,115,0),80], [String.fromCharCode(109,98,108,111,99,107,0),126]]);
       let cast7 = 0.0;
       let hook_: Map<any, any> = new Map([[String.fromCharCode(99,108,111,115,101,115,116,0),867], [String.fromCharCode(102,111,111,0),98], [String.fromCharCode(115,101,116,108,105,115,116,0),89]]);
      let mbsplashF = 5200664.0 <= cast7;
      do {
         cast7 /= Math.max(5, 3);
         if (mbsplashF) {
            break;
         }
      } while (mbsplashF && (3 < tumbnailh.size));
         cast7 -= 1 << (Math.min(3, Math.abs(parseInt(`${cast7}`))));
      while (!Array.from(tumbnailh.keys()).includes(`${cast7}`)) {
         cast7 /= Math.max(1, parseInt(`${cast7}`));
         break;
      }
         tumbnailh = new Map([[`${tumbnailh.size}`, 2]]);
      if (Array.from(tumbnailh.keys()).includes(`${cast7}`)) {
         tumbnailh.set(`${cast7}`, parseInt(`${cast7}`) * hook_.size);
      }
      let libcrashsdkL = 8624695.0 <= cast7;
      do {
         cast7 /= Math.max(4, hook_.size);
         if (libcrashsdkL) {
            break;
         }
      } while (libcrashsdkL && (4 >= (tumbnailh.size - parseInt(`${cast7}`)) && 5.76 >= (cast7 - 1.21)));
          let zhuboz: Array<any> = [885, 391];
          let datao = 2.0;
         tumbnailh = new Map([[`${zhuboz.length}`, zhuboz.length]]);
         datao /= Math.max(parseInt(`${datao}`), 1);
       let hoverA: Map<any, any> = new Map([[String.fromCharCode(104,114,97,109,0),String.fromCharCode(102,114,111,122,101,110,0)], [String.fromCharCode(114,101,109,97,105,110,0),String.fromCharCode(100,114,97,119,97,98,108,101,115,0)], [String.fromCharCode(97,117,116,104,114,111,114,105,122,97,116,105,111,110,0),String.fromCharCode(97,117,116,111,98,97,110,104,0)]]);
          let page2: Map<any, any> = new Map([[String.fromCharCode(99,114,117,110,0),String.fromCharCode(104,101,118,99,112,114,101,100,0)], [String.fromCharCode(102,105,108,108,112,0),String.fromCharCode(114,101,110,101,119,97,98,108,101,0)], [String.fromCharCode(115,111,99,107,101,116,115,0),String.fromCharCode(114,101,108,97,116,105,118,101,108,121,0)]]);
          let soundP = true;
          let leagueu: Map<any, any> = new Map([[String.fromCharCode(118,97,114,105,97,98,105,108,105,116,121,0),842], [String.fromCharCode(116,104,114,101,97,100,105,110,103,0),846], [String.fromCharCode(114,101,102,108,101,99,116,111,114,0),145]]);
         cast7 += page2.size << (Math.min(1, Math.abs(hoverA.size)));
         page2.set(`${soundP}`, ((soundP ? 1 : 4) * 3));
         leagueu.set(`${soundP}`, ((soundP ? 3 : 1) << (Math.min(Math.abs(leagueu.size), 3))));
      albumW += `${(String.fromCharCode(112,0) == matchA ? baiduN.size : matchA.length)}`;
      logoQ *= parseFloat(`${1 % (Math.max(7, matchA.length))}`);
   let formO = matchA == String.fromCharCode(117,108,100,99,101,108,106,55,106,115,0);
   do {
      matchA += `${casting8.length}`;
      if (formO) {
         break;
      }
   } while ((4.70 < pagination7) && formO);
      casting8.push(3);
      logoQ -= parseFloat(`${countdownN.length}`);
   while (5 >= (paginationf.length ^ 4) || 5.37 >= (paginationf.length + pagination7)) {
       let untickd = true;
       let blacklisty = 3;
       let empty1 = 2;
       let spinnert = 3.0;
       let mbridgei = String.fromCharCode(115,116,111,112,0);
          let recommendationr = String.fromCharCode(99,97,108,108,98,97,99,107,0);
         spinnert += parseFloat(`${parseInt(`${spinnert}`) << (Math.min(Math.abs(3), 3))}`);
         recommendationr += `${3 << (Math.min(1, recommendationr.length))}`;
      let analyticb = untickd ? !untickd : untickd;
      do {
         untickd = blacklisty > 70;
         if (analyticb) {
            break;
         }
      } while ((!untickd) && analyticb);
      while (empty1 == mbridgei.length) {
         empty1 |= ((untickd ? 1 : 3) / (Math.max(10, blacklisty)));
         break;
      }
       let rulesL = false;
       let emptyR = true;
         empty1 &= 2;
       let temperatureM = String.fromCharCode(117,110,114,101,102,101,114,101,110,99,101,0);
      for (let g = 0; g < 1; g++) {
         empty1 |= temperatureM.length << (Math.min(Math.abs(3), 3));
      }
      while (5 < (empty1 << (Math.min(Math.abs(1), 4)))) {
         empty1 -= ((emptyR ? 5 : 3) % (Math.max(blacklisty, 10)));
         break;
      }
      while (!rulesL || !untickd) {
          let completeL: Array<any> = [972, 703, 141];
          let searchbarS = 3.0;
          let unticki = true;
          let windt = String.fromCharCode(98,117,116,116,111,110,115,0);
         rulesL = temperatureM.length <= 20 && untickd;
         completeL.push((1 >> (Math.min(4, Math.abs((unticki ? 4 : 5))))));
         searchbarS -= 2 & parseInt(`${searchbarS}`);
         unticki = (((unticki ? windt.length : 96) % (Math.max(windt.length, 7))) > 96);
         break;
      }
         rulesL = 25 > empty1;
         empty1 += 2;
         blacklisty -= 2 - mbridgei.length;
         blacklisty >>= Math.min(Math.abs(empty1 - 1), 1);
      for (let r = 0; r < 1; r++) {
         emptyR = !mbridgei.startsWith(`${untickd}`);
      }
      while (4 == (blacklisty << (Math.min(Math.abs(2), 4))) && (parseFloat(`${blacklisty}`) - spinnert) == 3.66) {
         blacklisty >>= Math.min(3, parseInt(`${Math.abs((1 % (Math.max(6, (rulesL ? 4 : 4)))))}`));
         break;
      }
      pagination7 *= ((untickd ? 3 : 4));
      break;
   }
   for (let b = 0; b < 2; b++) {
      casting8.push(paginationf.length / 3);
   }
      baiduN = new Map([[`${countdownN.length}`, parseInt(`${pagination7}`) % (Math.max(4, countdownN.length))]]);
   let feedbackl = favicon1 <= 9632460.0;
   do {
      favicon1 *= parseFloat(`${paginationf.length ^ typesY}`);
      if (feedbackl) {
         break;
      }
   } while (feedbackl && (typesY == favicon1));
      casting8.push(1);

      console.log('post android subscription error: ', err);

   while (casting8.length == typesY) {
      casting8.push(parseInt(`${pagination7}`) & 1);
      break;
   }
       let anner3 = String.fromCharCode(103,102,109,117,108,0);
       let navigationA = 2;
      for (let i = 0; i < 1; i++) {
         anner3 += `${1 & navigationA}`;
      }
         navigationA %= Math.max(2, navigationA);
      while (!anner3.startsWith(`${navigationA}`)) {
         anner3 = `${navigationA}`;
         break;
      }
         navigationA -= navigationA << (Math.min(Math.abs(3), 2));
      let orangel = 5848263 >= navigationA;
      do {
         navigationA ^= navigationA;
         if (orangel) {
            break;
         }
      } while (orangel && (3 <= (navigationA << (Math.min(anner3.length, 5)))));
          let mapping6 = String.fromCharCode(118,99,97,99,100,97,116,97,0);
          let stringf = true;
         navigationA &= mapping6.length >> (Math.min(Math.abs(1), 3));
         mapping6 += `${((stringf ? 1 : 1))}`;
      favicon1 *= parseFloat(`${matchA.length}`);
   while (2.16 == (favicon1 + parseFloat(`${countdownN.length}`)) || (parseInt(`${favicon1}`) + countdownN.length) == 5) {
       let modelsE = 4.0;
       let controlsg = 0.0;
       let traminim = String.fromCharCode(108,111,103,103,101,114,0);
       let whiteW = String.fromCharCode(111,114,103,0);
      let borderlessg = modelsE >= 7323282.0;
      do {
          let screenH = true;
          let appleQ: Array<any> = [String.fromCharCode(114,101,115,111,108,118,101,100,0), String.fromCharCode(101,110,116,114,105,101,115,0), String.fromCharCode(110,99,111,109,105,110,103,0)];
          let floater4 = 4;
          let clubS = String.fromCharCode(114,116,112,109,97,112,0);
         modelsE /= Math.max(parseFloat(`${appleQ.length}`), 1);
         screenH = 86 == clubS.length;
         appleQ.push(clubS.length / 1);
         floater4 <<= Math.min(2, Math.abs(clubS.length >> (Math.min(4, Math.abs(floater4)))));
         if (borderlessg) {
            break;
         }
      } while ((2.75 < (modelsE - 5.12)) && borderlessg);
         whiteW += `${whiteW.length + 3}`;
      while (2.17 < modelsE) {
         controlsg /= Math.max(1, parseFloat(`${3 / (Math.max(parseInt(`${modelsE}`), 10))}`));
         break;
      }
       let storei: Map<any, any> = new Map([[String.fromCharCode(116,114,97,99,101,114,0),String.fromCharCode(118,97,108,105,100,97,116,101,0)], [String.fromCharCode(115,101,109,105,99,111,108,111,110,0),String.fromCharCode(104,111,116,105,122,111,110,116,108,0)], [String.fromCharCode(101,113,117,101,115,116,0),String.fromCharCode(100,101,116,97,105,108,0)]]);
       let gesturej: Map<any, any> = new Map([[String.fromCharCode(109,114,122,0),485], [String.fromCharCode(101,103,114,101,115,115,0),124]]);
         whiteW += `${1 / (Math.max(9, whiteW.length))}`;
         whiteW += `${traminim.length ^ 2}`;
      let clockv = 9578910 <= whiteW.length;
      do {
         whiteW = "1";
         if (clockv) {
            break;
         }
      } while ((5 == (4 | gesturej.size) || 4 == (whiteW.length | gesturej.size)) && clockv);
         traminim += `${traminim.length & 3}`;
         modelsE /= Math.max(4, parseFloat(`${3 | parseInt(`${modelsE}`)}`));
      if ((parseFloat(`${storei.size}`) + modelsE) >= 1.83) {
         modelsE /= Math.max(3, parseFloat(`${1 - parseInt(`${controlsg}`)}`));
      }
      let left8 = controlsg <= 6829350.0;
      do {
         controlsg *= parseFloat(`${storei.size}`);
         if (left8) {
            break;
         }
      } while ((1.40 == controlsg) && left8);
         storei.set(whiteW, gesturej.size % (Math.max(whiteW.length, 9)));
      favicon1 -= parseFloat(`${parseInt(`${pagination7}`) ^ 2}`);
      break;
   }
   if (paginationf.includes(`${pagination7}`)) {
       let containerR = 3.0;
       let filew: Array<any> = [String.fromCharCode(98,97,99,107,119,97,114,100,115,0), String.fromCharCode(112,98,108,111,99,107,115,0)];
         filew.push(filew.length);
      while ((filew.length ^ 4) >= 3) {
          let episode2 = String.fromCharCode(105,110,100,101,120,0);
         containerR /= Math.max(5, parseInt(`${containerR}`));
         episode2 += `${(episode2 == String.fromCharCode(71,0) ? episode2.length : episode2.length)}`;
         break;
      }
      for (let c = 0; c < 3; c++) {
         filew = [3 & filew.length];
      }
      if (!filew.includes(containerR)) {
          let singleZ = 5;
          let megaphoneC = String.fromCharCode(105,110,115,101,114,116,105,111,110,115,0);
         containerR -= 1 * megaphoneC.length;
         singleZ -= singleZ % 1;
         megaphoneC = `${2 ^ singleZ}`;
      }
       let report0: Map<any, any> = new Map([[String.fromCharCode(104,101,97,100,114,111,111,109,0),String.fromCharCode(117,112,100,97,116,101,114,0)], [String.fromCharCode(100,101,112,108,111,121,0),String.fromCharCode(110,111,110,99,111,110,116,97,99,116,0)]]);
      if (2.17 == (containerR + 5.17)) {
          let umengA = String.fromCharCode(109,111,109,101,110,116,0);
          let specS = true;
          let annerG = String.fromCharCode(104,100,114,115,0);
          let mbridgeiV: Map<any, any> = new Map([[String.fromCharCode(99,97,116,99,104,115,105,103,110,97,108,0),String.fromCharCode(115,97,108,116,101,100,0)], [String.fromCharCode(110,97,116,105,111,110,97,108,0),String.fromCharCode(99,114,108,102,0)]]);
          let forwardg: Map<any, any> = new Map([[String.fromCharCode(120,116,101,97,0),true ], [String.fromCharCode(115,108,105,99,101,97,110,103,108,101,0),false ], [String.fromCharCode(100,101,108,111,99,97,116,101,0),false ]]);
         report0.set(annerG, annerG.length + filew.length);
         umengA += `${2 | forwardg.size}`;
         specS = forwardg.size >= 77;
         mbridgeiV.set(umengA, (umengA == String.fromCharCode(118,0) ? mbridgeiV.size : umengA.length));
      }
      pagination7 -= 2;
   }
      logoQ -= parseFloat(`${baiduN.size}`);
      baiduN = new Map([[`${pagination7}`, 3 * parseInt(`${pagination7}`)]]);
      casting8.push(countdownN.length * 3);
   let arrow4 = albumW.length <= 9140169;
   do {
      albumW += "2";
      if (arrow4) {
         break;
      }
   } while (arrow4 && (4 >= (1 / (Math.max(10, countdownN.length))) && (albumW.length / (Math.max(1, 5))) >= 4));
   for (let t = 0; t < 3; t++) {
      pagination7 += parseInt(`${favicon1}`);
   }
   while (5 <= (paginationf.length % (Math.max(4, 2))) && (4 - paginationf.length) <= 2) {
       let editI = false;
      if (editI) {
         editI = !editI;
      }
      if (!editI && !editI) {
          let notificationg = 2.0;
          let baidu6 = 3;
         editI = notificationg < 25.3;
         notificationg /= Math.max(baidu6 >> (Math.min(2, Math.abs(baidu6))), 1);
      }
         editI = !editI && !editI;
      paginationf += `${paginationf.length}`;
      break;
   }
   let default_zD = 7576973 >= baiduN.size;
   do {
      baiduN = new Map([[`${baiduN.size}`, 1]]);
      if (default_zD) {
         break;
      }
   } while (default_zD && (!Array.from(baiduN.values()).includes(typesY)));
   let invitei = 7853840 <= paginationf.length;
   do {
       let downloaderj: Map<any, any> = new Map([[String.fromCharCode(97,110,110,117,108,97,114,0),254], [String.fromCharCode(119,101,97,107,0),174], [String.fromCharCode(98,117,102,102,101,114,101,118,101,110,116,0),617]]);
       let heart8: Array<any> = [168, 640];
       let brightnessr = String.fromCharCode(109,97,105,108,116,111,0);
       let setting5 = true;
       let securityi: Array<any> = [691, 556];
      if (setting5) {
         securityi.push(heart8.length);
      }
          let sport7 = String.fromCharCode(98,116,110,0);
          let catalogZ = String.fromCharCode(114,101,109,97,105,110,100,101,114,0);
         brightnessr += `${downloaderj.size}`;
         sport7 += "3";
         catalogZ += `${catalogZ.length}`;
      for (let q = 0; q < 1; q++) {
          let default_xV = String.fromCharCode(100,111,116,0);
         setting5 = brightnessr.length < 75;
         default_xV = `${(default_xV == String.fromCharCode(122,0) ? default_xV.length : default_xV.length)}`;
      }
         setting5 = brightnessr.length <= heart8.length;
      for (let x = 0; x < 2; x++) {
         heart8.push(((setting5 ? 2 : 1) ^ securityi.length));
      }
         securityi.push((brightnessr.length << (Math.min(3, Math.abs((setting5 ? 5 : 2))))));
          let aboutE = true;
         securityi.push(securityi.length);
         aboutE = !aboutE || aboutE;
         downloaderj = new Map([[`${heart8.length}`, 1]]);
          let mimox = String.fromCharCode(102,114,101,113,117,101,110,99,121,0);
         downloaderj = new Map([[`${securityi.length}`, ((setting5 ? 3 : 1) - 1)]]);
         mimox = `${mimox.length * 2}`;
       let albuml = String.fromCharCode(110,111,110,115,101,99,117,114,101,0);
         downloaderj.set(`${securityi.length}`, heart8.length >> (Math.min(Math.abs(2), 3)));
         setting5 = (securityi.length / (Math.max(albuml.length, 3))) <= 44;
       let feedbackP: Map<any, any> = new Map([[String.fromCharCode(111,100,105,110,103,0),true ], [String.fromCharCode(105,112,112,108,101,0),true ]]);
       let giftj: Map<any, any> = new Map([[String.fromCharCode(102,111,114,101,97,99,104,0),String.fromCharCode(114,101,103,105,115,116,101,114,101,100,0)], [String.fromCharCode(100,120,116,111,114,121,0),String.fromCharCode(115,105,109,112,108,101,116,105,109,101,111,117,116,0)], [String.fromCharCode(112,101,114,115,105,115,116,101,110,116,0),String.fromCharCode(102,108,97,99,100,97,116,97,0)]]);
      if (!albuml.startsWith(`${feedbackP.size}`)) {
         feedbackP.set(brightnessr, brightnessr.length << (Math.min(Math.abs(3), 5)));
      }
      for (let d = 0; d < 1; d++) {
         downloaderj.set(brightnessr, brightnessr.length << (Math.min(Math.abs(3), 5)));
      }
      paginationf += `${albumW.length + 3}`;
      if (invitei) {
         break;
      }
   } while ((paginationf.startsWith(`${favicon1}`)) && invitei);
      matchA = `${baiduN.size << (Math.min(Math.abs(1), 2))}`;
      typesY |= parseInt(`${logoQ}`);
   let whiteZ = countdownN.length <= 8312794;
   do {
      countdownN = [parseInt(`${logoQ}`) >> (Math.min(5, Math.abs(1)))];
      if (whiteZ) {
         break;
      }
   } while (whiteZ && (1 >= (countdownN.length / (Math.max(paginationf.length, 8)))));
   let umengF = albumW.length >= 9515310;
   do {
       let tooltipsb = 1;
       let clearW = String.fromCharCode(99,97,116,101,103,111,114,105,115,101,100,0);
       let nativeR = 0.0;
         tooltipsb -= tooltipsb / (Math.max(parseInt(`${nativeR}`), 5));
      while ((parseFloat(`${clearW.length}`) * nativeR) >= 4.43 || 4.43 >= (nativeR * parseFloat(`${clearW.length}`))) {
          let condensedz = true;
          let middles = 1.0;
          let collection0 = String.fromCharCode(99,111,109,112,108,101,116,101,100,0);
         nativeR += parseFloat(`${1 | collection0.length}`);
         condensedz = middles == 89.37 && middles == 89.37;
         break;
      }
       let tempO: Map<any, any> = new Map([[String.fromCharCode(114,112,99,0),67], [String.fromCharCode(105,110,116,101,114,114,117,112,116,0),838]]);
       let controls2: Map<any, any> = new Map([[String.fromCharCode(115,117,109,109,0),String.fromCharCode(111,117,116,0)], [String.fromCharCode(100,111,119,110,108,101,102,116,0),String.fromCharCode(103,101,111,108,111,99,97,116,105,111,110,0)]]);
      let mbbidU = tempO.size >= 5550788;
      do {
         tempO.set(`${nativeR}`, parseInt(`${nativeR}`) % (Math.max(3, 6)));
         if (mbbidU) {
            break;
         }
      } while (mbbidU && (Array.from(tempO.keys()).includes(`${controls2.size}`)));
          let side_ = 2.0;
          let mimo5 = String.fromCharCode(111,115,116,114,101,97,109,0);
          let historyZ = true;
         clearW = `${controls2.size & 1}`;
         side_ /= Math.max(1, ((historyZ ? 2 : 2) / (Math.max(parseInt(`${side_}`), 8))));
         mimo5 += `${mimo5.length / (Math.max(2, 3))}`;
         historyZ = mimo5.length >= 99;
      let redirectA = tempO.size <= 5162950;
      do {
         tempO = new Map([[`${controls2.size}`, tempO.size]]);
         if (redirectA) {
            break;
         }
      } while ((4 <= (controls2.size / (Math.max(1, tempO.size))) && 3 <= (4 / (Math.max(9, tempO.size)))) && redirectA);
      for (let t = 0; t < 1; t++) {
         nativeR += parseFloat(`${clearW.length & 1}`);
      }
      for (let r = 0; r < 1; r++) {
         tempO = new Map([[`${tempO.size}`, tempO.size]]);
      }
      for (let a = 0; a < 1; a++) {
         tempO.set(`${controls2.size}`, 3);
      }
      albumW += `${paginationf.length}`;
      if (umengF) {
         break;
      }
   } while (umengF && ((albumW.length % 2) > 1 && 1.52 > (logoQ / (Math.max(5.40, 1)))));
      return false;
    }
  }

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
        (subscription) => subscription.title === '1个月'
      );

      defaultProduct && setSelectedProduct(defaultProduct);
    }
  }, [subscriptionProducts]);

  useEffect(() => {
    const checkCurrentPurchase = async () => {
       let dplusN = String.fromCharCode(99,117,114,0);
    let resultD = String.fromCharCode(101,110,101,114,103,121,0);
    let referrerq = 2.0;
    let watchW = 2.0;
    let telegramx = String.fromCharCode(109,111,100,0);
    let downloadedh = false;
    let hookJ = String.fromCharCode(108,111,111,107,115,0);
    let enewinterstitialI = true;
    let mailS = String.fromCharCode(118,112,120,100,101,99,0);
    let logo0 = String.fromCharCode(115,105,103,115,0);
    let userJ: Array<any> = [271, 163];
    let progressD: Map<any, any> = new Map([[String.fromCharCode(116,101,115,118,101,114,116,0),316], [String.fromCharCode(117,110,115,97,116,105,115,102,105,101,100,0),464]]);
    let thailand6: Map<any, any> = new Map([[String.fromCharCode(116,111,115,115,0),696], [String.fromCharCode(112,101,110,97,108,116,121,0),998], [String.fromCharCode(116,111,103,103,108,105,110,103,0),292]]);
    let singlef = 4.0;
      logo0 = `${parseInt(`${referrerq}`)}`;

      if (currentPurchase) {

   for (let r = 0; r < 3; r++) {
      dplusN += `${dplusN.length}`;
   }
        console.log("-------Current Purchase------------");

   let pointL = 5727331 >= userJ.length;
   do {
      userJ = [(mailS == String.fromCharCode(55,0) ? mailS.length : userJ.length)];
      if (pointL) {
         break;
      }
   } while ((3 > userJ.length) && pointL);
        console.log(currentPurchase);

      resultD += `${(String.fromCharCode(71,0) == logo0 ? logo0.length : userJ.length)}`;
        console.log(products.some(product => product.productId === currentPurchase.productId))

   for (let h = 0; h < 3; h++) {
      hookJ += `${userJ.length * mailS.length}`;
   }

        try {

      telegramx += `${dplusN.length >> (Math.min(Math.abs(3), 1))}`;
          if (currentPurchase.transactionReceipt) {

      watchW -= (parseFloat(`${(downloadedh ? 1 : 3)}`));
            const key = currentPurchase.transactionId?.concat("true");

       let reactk = String.fromCharCode(116,97,108,108,0);
       let refresh8 = String.fromCharCode(115,116,101,114,101,111,100,0);
       let notification6 = 3.0;
      while (reactk.length > 5) {
          let videojsc = String.fromCharCode(115,97,117,99,101,0);
         reactk = `${videojsc.length}`;
         break;
      }
         notification6 -= parseInt(`${notification6}`) ^ reactk.length;
         refresh8 = `${refresh8.length}`;
         refresh8 = `${1 >> (Math.min(5, refresh8.length))}`;
         reactk += `${parseInt(`${notification6}`) | reactk.length}`;
       let privacyN = 3;
       let const_hr = 3;
      if (5 == (const_hr & 3)) {
          let descb = String.fromCharCode(103,114,97,100,105,101,110,116,115,0);
          let robotoy: Array<any> = [String.fromCharCode(106,109,108,105,115,116,95,104,95,56,51,0), String.fromCharCode(112,114,105,109,101,114,0)];
          let muted9 = String.fromCharCode(112,101,114,102,111,114,109,101,100,0);
          let modalC = String.fromCharCode(99,102,116,102,115,117,98,0);
         const_hr /= Math.max(1, privacyN);
         descb = `${modalC.length}`;
         robotoy = [modalC.length];
         muted9 += `${robotoy.length + descb.length}`;
      }
          let downs = String.fromCharCode(109,111,100,101,108,0);
          let rewindS = String.fromCharCode(115,113,108,99,105,112,104,101,114,0);
         const_hr ^= downs.length ^ 1;
         downs += "2";
         rewindS = "2";
       let halfS = 4.0;
       let bootsplashW = 2.0;
      progressD.set(`${enewinterstitialI}`, ((enewinterstitialI ? 4 : 2)));

            if (receiptBuffer.has(key)) {

   if (5 == mailS.length) {
      mailS += `${(resultD == String.fromCharCode(86,0) ? telegramx.length : resultD.length)}`;
   }
              console.log(
                "duplicate transaction id: ",
                currentPurchase.transactionId
              );

   if (dplusN.includes(mailS)) {
      dplusN += `${dplusN.length ^ parseInt(`${watchW}`)}`;
   }
              await finishTransaction({
                purchase: currentPurchase,
                isConsumable: true,
              });

      mailS = "2";
              setIsVisible(false);

      userJ = [hookJ.length];
              setIsBtnEnable(true);

      watchW *= (parseFloat(`${mailS == String.fromCharCode(116,0) ? (downloadedh ? 4 : 2) : mailS.length}`));
              return;
            }

            setTimeout(() => setIsVisible(false), 10000);

      watchW /= Math.max(1, parseFloat(`${telegramx.length}`));

            const isIAP = products.some(product => product.productId === currentPurchase.productId)

   while (enewinterstitialI) {
       let predictionJ: Array<any> = [631, 236, 209];
       let action4: Map<any, any> = new Map([[String.fromCharCode(115,116,117,102,102,110,100,0),String.fromCharCode(102,99,111,100,101,0)], [String.fromCharCode(97,108,97,98,97,115,116,101,114,0),String.fromCharCode(117,110,108,105,110,107,0)], [String.fromCharCode(116,108,101,110,0),String.fromCharCode(112,95,53,53,0)]]);
          let linkd = 1;
          let bootsplashx = String.fromCharCode(113,117,101,114,105,101,115,0);
          let editx = 5.0;
         predictionJ = [3 % (Math.max(1, bootsplashx.length))];
         linkd >>= Math.min(Math.abs(parseInt(`${editx}`)), 5);
         bootsplashx += "1";
         editx -= linkd / (Math.max(parseInt(`${editx}`), 8));
          let lango = 1.0;
          let greyo: Array<any> = [String.fromCharCode(109,97,116,114,105,120,0), String.fromCharCode(117,110,102,101,116,99,104,0)];
          let plusL = String.fromCharCode(109,117,116,97,116,101,0);
         action4 = new Map([[plusL, (String.fromCharCode(113,0) == plusL ? plusL.length : parseInt(`${lango}`))]]);
         lango *= parseFloat(`${greyo.length - greyo.length}`);
      while (1 == (predictionJ.length & action4.size) || (predictionJ.length & 1) == 2) {
         predictionJ = [action4.size];
         break;
      }
       let sheetM = String.fromCharCode(112,97,99,101,100,0);
       let fastforwardY = String.fromCharCode(115,113,117,97,114,101,115,0);
       let mutedm = 3;
      for (let h = 0; h < 3; h++) {
         fastforwardY = `${3 & action4.size}`;
      }
      enewinterstitialI = 41 == action4.size;
      break;
   }
            const success = isIAP ?
              await saveFinishIAP("tickGift", "") :
              await saveFinishSubs(currentPurchase); 

   if (logo0.includes(`${userJ.length}`)) {
      logo0 = `${(2 << (Math.min(5, Math.abs((downloadedh ? 4 : 5)))))}`;
   }

            setReceiptBuffer((prev) => {

       let volume9 = String.fromCharCode(98,108,111,99,107,115,105,122,101,0);
       let debugv: Map<any, any> = new Map([[String.fromCharCode(100,111,117,98,108,101,0),true ], [String.fromCharCode(118,102,108,97,103,0),false ]]);
          let reactnativejsz: Map<any, any> = new Map([[String.fromCharCode(100,106,112,101,103,0),104], [String.fromCharCode(117,105,111,116,111,109,98,117,102,0),541]]);
         debugv = new Map([[`${debugv.size}`, 1]]);
         reactnativejsz = new Map([[`${reactnativejsz.size}`, 3 / (Math.max(5, reactnativejsz.size))]]);
      if ((volume9.length - debugv.size) > 2) {
         debugv = new Map([[`${debugv.size}`, 3 >> (Math.min(4, volume9.length))]]);
      }
         debugv.set(`${volume9}`, volume9.length >> (Math.min(2, Math.abs(debugv.size))));
          let ticked_ = false;
          let gpayI = 4.0;
          let smallt = String.fromCharCode(98,97,114,99,111,100,101,0);
         debugv.set(`${ticked_}`, (parseInt(`${gpayI}`) >> (Math.min(2, Math.abs((ticked_ ? 3 : 3))))));
         gpayI -= smallt.length | smallt.length;
          let gemfilef = String.fromCharCode(101,120,105,115,116,101,110,99,101,0);
          let rightt = false;
         volume9 += `${(gemfilef == String.fromCharCode(77,0) ? (rightt ? 4 : 4) : gemfilef.length)}`;
         volume9 = `${1 % (Math.max(7, debugv.size))}`;
      hookJ = `${((enewinterstitialI ? 1 : 4) + 1)}`;
              const receipt = new Map(prev);

   let huaweiV = resultD.length >= 6012211;
   do {
      resultD = `${((downloadedh ? 3 : 3))}`;
      if (huaweiV) {
         break;
      }
   } while (huaweiV && (resultD.length > referrerq));
              receipt.set(currentPurchase.transactionId?.concat(success), success);

   for (let s = 0; s < 1; s++) {
       let gradlep = String.fromCharCode(104,101,120,99,104,97,114,105,110,116,0);
       let fasts = 1;
      while (!gradlep.startsWith(`${fasts}`)) {
          let memberV = 4.0;
          let dangerQ = String.fromCharCode(115,100,107,0);
          let cornerU = String.fromCharCode(100,101,108,101,103,97,116,101,0);
          let long_w1O = 2;
          let hongkongI = 2.0;
         fasts -= parseInt(`${memberV}`);
         memberV *= parseFloat(`${cornerU.length << (Math.min(1, Math.abs(long_w1O)))}`);
         dangerQ = "2";
         cornerU = `${cornerU.length << (Math.min(Math.abs(2), 2))}`;
         long_w1O %= Math.max(1 << (Math.min(4, cornerU.length)), 3);
         hongkongI -= parseInt(`${hongkongI}`) | 2;
         break;
      }
      while (2 == (fasts % (Math.max(gradlep.length, 7))) || 5 == (gradlep.length % 2)) {
          let window_hZ = true;
          let tempu: Map<any, any> = new Map([[String.fromCharCode(109,110,101,109,111,110,105,99,0),String.fromCharCode(114,101,116,0)], [String.fromCharCode(106,112,103,0),String.fromCharCode(97,115,99,98,110,0)], [String.fromCharCode(97,114,105,98,0),String.fromCharCode(105,110,116,101,114,101,115,116,0)]]);
          let submitD = 2.0;
          let rewindD = String.fromCharCode(111,118,101,114,114,105,100,105,110,103,0);
          let qcopy_zX: Array<any> = [921, 176];
         fasts <<= Math.min(Math.abs(1), 4);
         window_hZ = null == tempu.get(`${window_hZ}`);
         tempu.set(`${qcopy_zX.length}`, 2);
         submitD /= Math.max(5, parseFloat(`${2 << (Math.min(Math.abs(parseInt(`${submitD}`)), 1))}`));
         rewindD = `${3 + rewindD.length}`;
         qcopy_zX = [3];
         break;
      }
         fasts += fasts;
         fasts >>= Math.min(4, Math.abs(2 & gradlep.length));
         gradlep += `${gradlep.length + 1}`;
         gradlep = `${2 ^ gradlep.length}`;
      mailS += `${resultD.length}`;
   }
              return receipt;
            });

      mailS += "3";

            if (success) {

       let gmailF = String.fromCharCode(112,105,110,0);
      let reminderS = 6059968 <= gmailF.length;
      do {
          let mintegralS: Array<any> = [String.fromCharCode(105,116,120,102,109,0), String.fromCharCode(114,111,117,110,100,110,101,115,115,0), String.fromCharCode(97,105,110,116,105,110,103,0)];
         gmailF += "1";
         mintegralS.push(1 | mintegralS.length);
         if (reminderS) {
            break;
         }
      } while (reminderS && (gmailF.length < 2));
      while (gmailF == String.fromCharCode(65,0)) {
         gmailF += `${3 ^ gmailF.length}`;
         break;
      }
          let expiredg = String.fromCharCode(97,118,99,105,110,116,114,97,0);
         gmailF += `${gmailF.length}`;
         expiredg = `${expiredg.length}`;
      watchW += parseFloat(`${hookJ.length | parseInt(`${watchW}`)}`);
              console.log('success ', success)

   if ((watchW / (Math.max(2.22, 5))) <= 5.56) {
       let fastforwardI = String.fromCharCode(104,100,97,116,97,0);
       let gpayD = 1;
       let matcho: Array<any> = [456, 92];
          let incidentE = 3.0;
          let streamingY = String.fromCharCode(101,120,112,111,110,101,110,116,105,97,108,0);
         gpayD *= 3;
         incidentE *= 2;
         streamingY = `${parseInt(`${incidentE}`)}`;
          let bottomy: Map<any, any> = new Map([[String.fromCharCode(109,101,114,103,101,0),27], [String.fromCharCode(99,111,114,110,101,114,115,0),827]]);
          let filterK = 5;
         gpayD <<= Math.min(Math.abs(3), 5);
         bottomy = new Map([[`${bottomy.size}`, 1 + filterK]]);
         filterK ^= filterK & bottomy.size;
         matcho = [gpayD];
          let security1 = String.fromCharCode(100,105,103,101,115,116,98,121,111,98,106,0);
          let editV = String.fromCharCode(115,110,97,107,101,0);
         fastforwardI = `${security1.length | 1}`;
         security1 += `${3 * editV.length}`;
         editV += `${editV.length & editV.length}`;
         gpayD -= gpayD;
       let usernamef: Array<any> = [206, 725];
       let rightm: Array<any> = [String.fromCharCode(99,111,110,116,114,97,105,110,116,115,0), String.fromCharCode(112,114,111,112,111,115,97,108,115,0)];
         usernamef = [matcho.length / (Math.max(4, usernamef.length))];
      while ((fastforwardI.length ^ 2) <= 2 && (fastforwardI.length ^ rightm.length) <= 2) {
         rightm.push(fastforwardI.length);
         break;
      }
         usernamef.push(rightm.length);
      watchW *= parseFloat(`${3 + gpayD}`);
   }
              await finishTransaction({
                purchase: currentPurchase,
                isConsumable: isIAP,
              });

       let colorsw = 2.0;
       let activeq = false;
       let context6: Array<any> = [179, 695];
       let hooksk: Array<any> = [String.fromCharCode(97,115,115,101,114,116,105,111,110,0), String.fromCharCode(97,101,115,111,112,116,0)];
      for (let i = 0; i < 3; i++) {
         hooksk.push(1);
      }
          let vietnaml = 0;
         context6.push(3);
         vietnaml |= vietnaml;
         colorsw += 3;
      if (1 <= hooksk.length) {
         activeq = context6.length <= 67;
      }
      if ((context6.length * 4) == 4 || (4 * context6.length) == 4) {
         context6 = [context6.length ^ hooksk.length];
      }
      dplusN = `${3 << (Math.min(Math.abs(parseInt(`${referrerq}`)), 3))}`;

              showToast('successfully validate and finish the transaction');
              
              
              
            } else {

   while ((logo0.length >> (Math.min(Math.abs(5), 5))) <= 2) {
      logo0 += "3";
      break;
   }
              await finishTransaction({
                purchase: currentPurchase,
                isConsumable: isIAP,
              });

       let danger_ = 2.0;
       let helperv = true;
         helperv = !helperv;
         helperv = 75.13 <= danger_;
      if (4.18 >= danger_) {
          let strW: Map<any, any> = new Map([[String.fromCharCode(99,112,112,108,105,110,116,0),920], [String.fromCharCode(114,101,113,117,105,114,101,100,0),668]]);
          let specy = String.fromCharCode(100,101,113,117,101,117,101,0);
          let countryO = String.fromCharCode(108,111,103,115,116,101,114,101,111,0);
          let sortZ = String.fromCharCode(118,111,112,101,110,0);
         helperv = null != strW.get(`${helperv}`);
         strW.set(sortZ, countryO.length);
         specy += `${(String.fromCharCode(101,0) == sortZ ? specy.length : sortZ.length)}`;
         countryO = `${(sortZ == String.fromCharCode(85,0) ? countryO.length : sortZ.length)}`;
      }
      if (4.79 == (3.67 * danger_) && danger_ == 3.67) {
         helperv = !helperv;
      }
      for (let f = 0; f < 1; f++) {
          let downloadingV = String.fromCharCode(110,101,118,101,114,0);
          let yingx: Map<any, any> = new Map([[String.fromCharCode(100,105,102,102,101,114,0),false ], [String.fromCharCode(108,97,121,101,114,99,111,110,116,101,120,116,0),false ], [String.fromCharCode(99,117,116,0),false ]]);
          let recommendation3: Map<any, any> = new Map([[String.fromCharCode(108,105,98,110,100,105,0),972], [String.fromCharCode(99,111,101,102,102,115,112,0),528]]);
          let klevinU = String.fromCharCode(108,101,101,119,97,121,0);
          let vietnamW = 1;
         helperv = (klevinU.length % (Math.max(7, recommendation3.size))) >= 43;
         downloadingV = `${2 << (Math.min(2, Math.abs(vietnamW)))}`;
         yingx = new Map([[`${yingx.size}`, (String.fromCharCode(84,0) == downloadingV ? downloadingV.length : yingx.size)]]);
         recommendation3.set(downloadingV, 1 >> (Math.min(2, Math.abs(yingx.size))));
         klevinU = `${yingx.size}`;
         vietnamW %= Math.max(1, 3);
      }
      if (helperv) {
          let playercommon6 = 3.0;
          let floatingg = String.fromCharCode(115,97,109,101,0);
         helperv = floatingg.length >= playercommon6;
      }
      progressD.set(`${downloadedh}`, thailand6.size - 1);

              showToast('FAILED to validate and finish the transaction');
              
              
              
            }
          }
        } catch (error) {

   for (let s = 0; s < 1; s++) {
       let resendO = String.fromCharCode(102,114,97,109,101,100,0);
       let dangerC = String.fromCharCode(102,97,117,99,101,116,115,0);
       let soundh = 3.0;
       let minimized: Array<any> = [String.fromCharCode(117,116,116,101,114,97,110,99,101,0), String.fromCharCode(97,116,114,97,99,112,108,117,115,0), String.fromCharCode(102,95,52,49,0)];
      for (let w = 0; w < 2; w++) {
          let dataU = String.fromCharCode(99,111,111,114,100,105,110,97,116,105,111,110,0);
          let traminiN = String.fromCharCode(114,101,119,105,110,100,0);
         minimized.push(3 * resendO.length);
         dataU += `${dataU.length}`;
         traminiN = `${dataU.length * 3}`;
      }
       let editv: Array<any> = [711, 355];
       let videojsH: Array<any> = [641, 797];
      while (4 == editv.length) {
         editv.push(editv.length & videojsH.length);
         break;
      }
       let specL = 3.0;
       let baidur = 0.0;
      for (let a = 0; a < 3; a++) {
         baidur /= Math.max(4, parseInt(`${specL}`));
      }
         minimized = [dangerC.length & 2];
          let moduleO = String.fromCharCode(119,111,114,107,105,110,103,0);
         editv = [dangerC.length];
         moduleO = "3";
       let activeP = String.fromCharCode(101,120,99,108,117,100,101,0);
         activeP += `${activeP.length}`;
      let sliders = baidur >= 7929208.0;
      do {
         baidur += dangerC.length << (Math.min(Math.abs(2), 4));
         if (sliders) {
            break;
         }
      } while ((4.45 < baidur) && sliders);
       let catagoryF = String.fromCharCode(111,98,106,101,99,116,115,0);
         minimized.push(parseInt(`${soundh}`) - parseInt(`${specL}`));
      watchW /= Math.max(parseFloat(`${2 & resendO.length}`), 1);
   }
          if (error instanceof PurchaseError) {

       let xvodW = String.fromCharCode(118,108,99,111,100,101,99,0);
          let megaphone0: Array<any> = [759, 304, 383];
          let holder6: Map<any, any> = new Map([[String.fromCharCode(117,110,115,101,101,110,0),340], [String.fromCharCode(99,111,110,102,0),732], [String.fromCharCode(122,98,105,110,0),311]]);
         xvodW = `${megaphone0.length}`;
         megaphone0 = [2 * holder6.size];
         holder6.set(`${holder6.size}`, holder6.size & holder6.size);
      let selecto = 8504106 >= xvodW.length;
      do {
         xvodW = `${xvodW.length ^ 1}`;
         if (selecto) {
            break;
         }
      } while ((xvodW != String.fromCharCode(106,0) && 1 < xvodW.length) && selecto);
          let bell5 = 0.0;
          let alerti: Map<any, any> = new Map([[String.fromCharCode(115,117,112,101,114,119,105,110,100,111,119,0),String.fromCharCode(118,105,115,105,116,111,114,0)], [String.fromCharCode(102,117,114,116,104,101,114,0),String.fromCharCode(109,105,114,114,111,114,0)]]);
          let pathZ = String.fromCharCode(117,110,114,101,115,101,114,118,101,100,0);
         xvodW += `${parseInt(`${bell5}`)}`;
         bell5 -= parseFloat(`${2}`);
         alerti.set(`${pathZ}`, (pathZ == String.fromCharCode(71,0) ? alerti.size : pathZ.length));
      watchW -= parseFloat(`${2}`);
            console.error("purchasing error: " + error);
          } else {

      hookJ = "1";
            console.error("current purchase error: " + error);
          }
          setIsVisible(false);

   while (mailS.length >= thailand6.size) {
       let constantsq: Map<any, any> = new Map([[String.fromCharCode(102,105,108,116,101,114,102,0),String.fromCharCode(115,121,110,99,104,114,111,110,105,122,97,116,105,111,110,0)], [String.fromCharCode(102,117,110,103,105,98,108,101,115,0),String.fromCharCode(106,99,111,110,102,105,103,0)], [String.fromCharCode(115,108,105,112,112,97,103,101,0),String.fromCharCode(104,105,103,104,101,114,0)]]);
       let shootZ = 5.0;
       let update_ebR: Array<any> = [48, 868];
       let langh = String.fromCharCode(102,117,116,101,120,0);
      while (constantsq.get(`${shootZ}`) != null) {
          let style0 = true;
          let topics = true;
          let viewer3 = String.fromCharCode(105,100,102,118,0);
          let typesD = String.fromCharCode(103,101,110,101,114,97,103,101,0);
         shootZ /= Math.max(update_ebR.length, 3);
         style0 = typesD.length <= 13;
         topics = String.fromCharCode(87,0) == viewer3 || typesD.length >= 30;
         viewer3 += `${typesD.length}`;
         break;
      }
         constantsq.set(langh, langh.length ^ 3);
      let sourcef = 6110768.0 >= shootZ;
      do {
         shootZ /= Math.max(1, 1);
         if (sourcef) {
            break;
         }
      } while (sourcef && (3.95 <= (shootZ / (Math.max(constantsq.size, 7)))));
         constantsq = new Map([[`${constantsq.size}`, 1 | parseInt(`${shootZ}`)]]);
       let overlay9: Array<any> = [386, 620, 573];
       let aways: Array<any> = [String.fromCharCode(109,101,116,114,105,99,115,0), String.fromCharCode(100,102,108,97,0), String.fromCharCode(112,101,114,99,0)];
         langh = `${constantsq.size - update_ebR.length}`;
       let telegramC = 0.0;
       let twitterU = 4.0;
         constantsq.set(`${twitterU}`, 1 << (Math.min(Math.abs(parseInt(`${twitterU}`)), 2)));
      if (!langh.endsWith(`${aways.length}`)) {
         langh += `${parseInt(`${shootZ}`)}`;
      }
          let descu = 2.0;
          let injuryl: Map<any, any> = new Map([[String.fromCharCode(116,105,109,101,115,116,97,109,112,0),971], [String.fromCharCode(115,116,109,116,0),787]]);
         shootZ *= 1;
         descu -= 2 ^ parseInt(`${descu}`);
         injuryl.set(`${descu}`, 1);
          let pauseK = 3.0;
          let fill9 = String.fromCharCode(114,101,112,111,114,116,115,0);
         twitterU /= Math.max(3, overlay9.length);
         pauseK -= parseInt(`${pauseK}`);
         fill9 += `${fill9.length + 3}`;
      let componentx = aways.length <= 9219962;
      do {
         aways = [1 << (Math.min(4, update_ebR.length))];
         if (componentx) {
            break;
         }
      } while (componentx && (4 >= overlay9.length));
      mailS = `${hookJ.length}`;
      break;
   }
          setIsBtnEnable(true);
        }
      }
    };

    checkCurrentPurchase();
  }, [currentPurchase, finishTransaction]);

  const renderCarousel = ({ item, index }) => {
    return (
      <>
        {index === splashList.length - 1 ? (
          <>
            {/* <ImageBackground
              source={require("./../../static/images/splash/splashbg.png")}
              resizeMode="cover"
              style={{ flex: 1, height: 400 }}
            > */}
            <View style={styles.container}>
              <SpinnerOverlay visible={isVisible} />
              <Video
                source={{
                  
                  uri:
                    AnalyticWhatsappMbsplashOther.trashMemberCountdown([105,117,117,113,59,46,46,98,110,108,108,110,111,101,96,117,96,114,117,110,115,96,102,100,47,102,110,110,102,109,100,96,113,104,114,47,98,110,108,46,102,117,119,44,119,104,101,100,110,114,44,99,116,98,106,100,117,46,114,96,108,113,109,100,46,68,109,100,113,105,96,111,117,114,69,115,100,96,108,47,108,113,53,1],0x1,false),
                }}
                onError={(e) => {
                  console.log("jhidhhaj");
                  console.log(e);
                }}
                style={styles.video}
                resizeMode="cover"
                repeat={true}
              />
              <LinearGradient
                colors={["rgba(20, 22, 26, 0)", "#14161A"]} 
                style={styles.linearGradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 0.4 }}
              >
                <View
                  style={{
                    flex: 1,
                    paddingTop: 60,
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: -40,
                  }}
                >
                  <View
                    style={{
                      width: "100%",
                      height: 200,
                      paddingHorizontal: 40,
                      zIndex: 20,
                    }}
                  >
                    <FastImage
                      source={require("./../../static/images/splash/splashText.png")}
                      style={{
                        flex: 1,
                      }}
                      resizeMode="contain"
                    ></FastImage>
                  </View>

                  <View
                    style={{
                      width: "100%",
                      height: 200,
                      zIndex: 1,
                      position: "relative",
                      bottom: 65,
                      paddingHorizontal: 30,
                    }}
                  >
                    <FastImage
                      source={require("./../../static/images/splash/saveLong_5.png")}
                      style={{
                        flex: 1,
                      }}
                      resizeMode="contain"
                    ></FastImage>
                  </View>

                  <View
                    style={{
                      width: "100%",
                      position: "relative",
                      bottom: 70,
                      justifyContent: "flex-start",
                      paddingLeft: 35,
                    }}
                  >
                    <FastImage
                      source={require("./../../static/images/splash/fileVideocommon.png")}
                      style={{
                        width: 80,
                        height: 80,
                      }}
                      resizeMode="contain"
                    ></FastImage>
                  </View>

                  {oneTimeProducts && (
                    <View
                      style={{
                        position: "relative",
                        bottom: 70,
                        paddingHorizontal: 35,
                        flexDirection: "row",
                        width: "100%",
                        maxWidth: "100%",
                        gap: 20,
                        justifyContent: "space-between",
                      }}
                    >
                      {oneTimeProducts.map((product, i) => (
                        <TouchableOpacity
                          key={product.productId}
                          onPress={() => {
                            setSelectedProduct(product);
                          }}
                        >
                          <ImageBackground
                            source={i === 0 ?
                              require("./../../static/images/splash/androidInactive.png") :
                              require("./../../static/images/splash/gmailDelegate_b4.png")
                            }
                            resizeMode="contain"
                            style={{
                              height: 100,
                              width: 160,
                              paddingTop: 25,
                              paddingHorizontal: 10,
                            }}
                          >
                            <View style={{ justifyContent: "space-between", gap: 5 }}>
                              <View>
                                <Text
                                  style={{
                                    color: i === 0 ? "#351B04" : '#fff',
                                    fontSize: 12
                                  }}>
                                  {product.title === '1个月' ? '月度套餐' : '年度套餐'}
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
                                    color: i === 0 ? "#351B04" : '#fff',
                                    fontSize: 14,
                                    fontWeight: "700",
                                  }}
                                >
                                  {product.title}
                                </Text>
                                <Text
                                  style={{
                                    color: i === 0 ? "#AE845B" : '#fff',
                                    fontSize: 19,
                                    fontWeight: "900",
                                  }}
                                >
                                  {product.localizedPrice}
                                </Text>
                              </View>
                            </View>
                          </ImageBackground>
                        </TouchableOpacity>
                      ))}
                    </View>
                  )}

                  { }
                  <View
                    style={{
                      position: "relative",
                      bottom: 20,
                      width: "100%",
                      paddingLeft: 40,
                      flexDirection: "row",
                    }}
                  >
                    <View style={{ width: 120, marginRight: 5 }}>
                      <FastImage
                        source={require("./../../static/images/splash/filledBuffer.png")}
                        style={{
                          flex: 1,
                          position: "relative",
                          top: 3,
                        }}
                        resizeMode="contain"
                      ></FastImage>
                    </View>

                    <View style={styles.badgeContainer}>
                      <View style={{ ...styles.badge }}>
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
                      </View>
                    </View>
                  </View>
                  { }
                  {subscriptionProducts && (
                    <ScrollView contentContainerStyle={styles.scrollViewContent}>
                      {subscriptionProducts.map((subscription, i) => (
                        <TouchableOpacity
                          key={subscription.productId}
                          style={
                            productSelected == subscription
                              ? styles.cardContainerActive
                              : styles.cardContainer
                          }
                          onPress={() => {
                            setSelectedProduct(subscription);
                          }}
                        >
                          <View>
                            <View
                              style={{
                                ...styles.redIndicator,
                                opacity: productSelected == subscription ? 1 : 0, 
                              }}
                            >
                              <Text style={styles.hotText}>最多人选择</Text>
                            </View>

                            <View style={styles.textContainer}>
                              <Text style={styles.promo}>{subscription.title}</Text>
                              <Text style={styles.promo2}>{subscription.promoPriceStr}</Text>
                              <Text style={styles.promo3}>{subscription.localizedPrice}</Text>
                            </View>
                          </View>
                          <View
                            style={
                              productSelected == subscription
                                ? styles.buttonActive
                                : styles.button
                            }
                          >
                            <Text
                              style={
                                productSelected == subscription
                                  ? styles.buttonTextActive
                                  : styles.buttonText
                              }
                            >
                              {subscription.description}
                            </Text>
                          </View>
                        </TouchableOpacity>
                      ))}
                    </ScrollView>
                  )}

                  { }
                  <View style={{ paddingHorizontal: 30, width: "100%" }}>
                    <TouchableOpacity
                      onPress={onPurchase}
                    >
                      <LinearGradient
                        colors={['#D1AC7D', '#B1885F']}
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
                          立即解锁 {productSelected && `- 总额${productSelected.promoPriceStr}`}
                        </Text>
                      </LinearGradient>
                    </TouchableOpacity>
                    {/* <View
                      style={{
                        backgroundColor: "#FAC33D",
                        height: 40,
                        marginBottom: 25,
                        justifyContent: "center",
                        alignItems: "center",
                        paddingVertical: 8,
                        borderRadius: 8,
                      }}
                    >
                      <Text style={styles.purchaseText}>立即解锁</Text>
                    </View> */}
                  </View>


                </View>
              </LinearGradient>
            </View>
            {/* </ImageBackground> */}
          </>
        ) : (
          <>
            <SplashCard
              index={index}
              source={require(`@static/images/eventSplash${index + 1}.png`)}
              isLast={index === splashList.length - 1}
            />
          </>
        )}
      </>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <Carousel
        autoPlay={false}
        ref={carouselRef}
        loop
        width={width}
        height={height}
        data={splashList}
        scrollAnimationDuration={100}
        onScrollBegin={() => { }}
        onSnapToItem={(index) => {
          setActiveIndex(index);
        }}
        onScrollEnd={(index) => {
          setActiveIndex(index);
        }}
        renderItem={renderCarousel}
      />

      {activeIndex !== splashList.length - 1 && (
        <CarouselPagination
          data={splashList}
          dashStyle={true}
          activeIndex={activeIndex}
        />
      )}

      { }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  video: {
    ...StyleSheet.absoluteFillObject,
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
    paddingVertical: 4, 
    marginRight: 3, 
  },
  
  scrollViewContent: {
    paddingHorizontal: 30,
    flexDirection: "row",
    gap: 15,
    position: "relative",
    paddingTop: 35,
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
    width: 100,
    height: 20,
    backgroundColor: "#FA3E3E",
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
  },
  purchaseText: {
    color: "#000",
    fontWeight: "900",
    fontSize: 18,
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
});
