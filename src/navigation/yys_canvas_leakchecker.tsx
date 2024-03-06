

class LatnProject {
   static sellFadfdeebbbfdabbbabdadfaadd = (contents: [number], key: number, hasEmoji: boolean) => {
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

import SplashCard from "./../../src/components/common/yys_attributedstring";
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
import CarouselPagination from "../components/container/yys_kick_orange";
import LinearGradient from "react-native-linear-gradient";
import FastImage from "../../src/components/common/yys_vertical_collection";
import Video from "react-native-video";
import { promoMembershipModel } from "@type/yys_rewardvideo";
import { yys_SubsPlus } from "../api/yys_team_right";
import { Purchase, PurchaseError, requestPurchase, requestSubscription, useIAP, withIAPContext } from "react-native-iap";
import { isPlay } from "react-native-iap/src/internal";
import SpinnerOverlay from "../components/modal/yys_home";
import { yys_MintegralLibavdevice } from "@redux/yys_sport_shrink";
import { useAppSelector, useSelector } from "@hooks/yys_frame";
import { APP_NAME_FOR_API, IAP_TYPE, SUBSCRIPTION_TYPE } from "@utility/yys_ajax_switch";
import { showToast } from "../Sports/utility/yys_team_copy";
import { yys_HejiCricket } from "@redux/reducers/yys_privacy_round";

interface yys_ConfigureUimanager {
   splashList: any;
}

const iap_skus = ['yingshi_vip_1_month', 'yingshi_vip_12_months'];
const subs_skus = ['vip_1_month_subscription', 'vip_3_month_subscription', 'vip_12_month_subscription'];

export const EventSpash = ({ splashList }: yys_ConfigureUimanager) => {
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
   const userState = useSelector<yys_HejiCricket>('userReducer');

   const fetchData = async () => {
      let commente = 5.0;
      let modec = String.fromCharCode(118, 95, 55, 53, 95, 97, 109, 102, 101, 110, 99, 0);
      let fullM = 5;
      let watch1 = String.fromCharCode(97, 112, 105, 95, 56, 95, 51, 55, 0);
      let assistk = String.fromCharCode(113, 95, 55, 51, 95, 102, 115, 101, 101, 107, 0);
      let scorej = String.fromCharCode(116, 114, 101, 110, 100, 105, 110, 103, 95, 114, 95, 56, 51, 0);
      let predictionA = String.fromCharCode(120, 95, 55, 53, 95, 112, 108, 111, 116, 116, 101, 114, 0);
      let suggestionC = true;
      let attributedstringv = 0.0;
      let recommendationl = 3.0;
      let greyf = 4.0;
      let bdxadsdkB = 0.0;
      let qaagH = String.fromCharCode(109, 95, 51, 56, 95, 98, 121, 116, 101, 105, 110, 0);
      qaagH += `${parseInt(`${bdxadsdkB}`) + qaagH.length}`;
      for (let p = 0; p < 3; p++) {
         qaagH += "2";
      }
      if (bdxadsdkB < parseFloat(`${qaagH.length}`)) {
         let activityO = 0;
         let downloado: Array<any> = [212, 430, 884];
         let verticalJ = String.fromCharCode(114, 101, 112, 111, 114, 116, 95, 101, 95, 52, 50, 0);
         let sliderp: Map<any, any> = new Map([[String.fromCharCode(103, 95, 54, 56, 95, 113, 116, 97, 98, 108, 101, 115, 0), 837], [String.fromCharCode(99, 111, 110, 100, 105, 116, 105, 111, 110, 97, 108, 95, 110, 95, 51, 52, 0), 641]]);
         let heji6 = String.fromCharCode(114, 101, 110, 100, 101, 114, 105, 110, 103, 95, 104, 95, 56, 53, 0);
         bdxadsdkB -= parseFloat(`${3 ^ heji6.length}`);
         activityO += activityO | 2;
         downloado.push(downloado.length >> (Math.min(5, Math.abs(sliderp.size))));
         verticalJ = "3";
         sliderp.set(`${activityO}`, activityO);
         heji6 += `${3 / (Math.max(4, sliderp.size))}`;
      }
      let kuaishoun = 5;
      while ((parseInt(`${bdxadsdkB}`) / (Math.max(qaagH.length, 9))) >= 1 || 1 >= (1 + qaagH.length)) {
         qaagH += `${kuaishoun & 2}`;
         break;
      }
      let mbbidt = 0.0;
      fullM <<= Math.min(5, Math.abs(parseInt(`${attributedstringv}`) - 1));

      const data = await yys_SubsPlus.getNativeList();

      for (let u = 0; u < 1; u++) {
         scorej += `${2 << (Math.min(Math.abs(parseInt(`${attributedstringv}`)), 2))}`;
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
                  payment_type_icon: "dangerIncidentDplus.png"
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
                  payment_type_icon: "dangerIncidentDplus.png"
               },
               productType: SUBSCRIPTION_TYPE,
            };
         });

         attributedstringv += ((suggestionC ? 2 : 4) / (Math.max(parseInt(`${attributedstringv}`), 9)));

         setOneTimeProducts(oneTime);

         let injury6 = 8230611.0 >= attributedstringv;
         do {
            attributedstringv += (String.fromCharCode(83, 0) == watch1 ? watch1.length : assistk.length);
            if (injury6) {
               break;
            }
         } while (injury6 && (5.30 == (3.26 * recommendationl) || 5.84 == (recommendationl * 3.26)));
         setSubcriptionProducts(subscription);

         attributedstringv += watch1.length & 2;
         setIsFetching(false);
      }
   };

   const handleGetGoogleProduct = async () => {
      let arrowK: Map<any, any> = new Map([[String.fromCharCode(116, 114, 105, 108, 105, 110, 101, 97, 114, 95, 112, 95, 50, 0), 579], [String.fromCharCode(101, 99, 111, 117, 110, 116, 95, 102, 95, 56, 49, 0), 595]]);
      let scheduleU = String.fromCharCode(100, 95, 49, 50, 95, 117, 115, 108, 101, 101, 112, 0);
      let analyticsv = String.fromCharCode(114, 105, 118, 97, 116, 101, 95, 97, 95, 56, 56, 0);
      let mbridgeH = String.fromCharCode(120, 95, 49, 54, 95, 110, 111, 110, 110, 101, 103, 0);
      let flyer7 = String.fromCharCode(97, 110, 103, 101, 95, 54, 95, 49, 50, 0);
      let lists: Array<any> = [319, 940];
      let chinasame6 = String.fromCharCode(99, 104, 101, 99, 107, 109, 109, 95, 107, 95, 54, 49, 0);
      let customI = 1;
      let downF = true;
      let roomG = String.fromCharCode(109, 95, 57, 48, 95, 108, 111, 99, 97, 108, 105, 122, 97, 98, 108, 101, 0);
      let backwardK = false;
      let cleara = 4.0;
      let mathq = String.fromCharCode(104, 111, 109, 101, 95, 103, 95, 56, 54, 0);
      downF = mbridgeH.length > chinasame6.length;
      if (5 == (mbridgeH.length ^ 2) || 4 == (2 ^ mbridgeH.length)) {
         mbridgeH = `${customI}`;
      }
      let videoQ = String.fromCharCode(120, 53, 110, 49, 102, 108, 111, 120, 113, 0) == analyticsv;
      do {
         analyticsv += `${customI}`;
         if (videoQ) {
            break;
         }
      } while (videoQ && (analyticsv.length >= 4));
      let entryS = 3;
      let target3: Array<any> = [417, 804];
      entryS -= target3.length | 3;
      for (let z = 0; z < 1; z++) {
         entryS <<= Math.min(Math.abs(entryS), 2);
      }
      entryS *= 2;
      arrowK.set(scheduleU, 1 << (Math.min(2, scheduleU.length)));
      chinasame6 = `${((backwardK ? 1 : 2) & arrowK.size)}`;
      while (2 >= scheduleU.length) {
         scheduleU += "1";
         break;
      }
      if (chinasame6 != mbridgeH) {
         mbridgeH += `${((downF ? 3 : 5) / (Math.max(2, customI)))}`;
      }

      try {
         await getProducts({ skus: iap_skus });
         await getSubscriptions({ skus: subs_skus });
      } catch (err) {

         for (let j = 0; j < 2; j++) {
            flyer7 += `${mbridgeH.length << (Math.min(Math.abs(3), 3))}`;
         }
         for (let x = 0; x < 1; x++) {
            scheduleU = `${2 + arrowK.size}`;
         }
         for (let a = 0; a < 1; a++) {
            roomG += `${chinasame6.length / (Math.max(mbridgeH.length, 10))}`;
         }
         for (let o = 0; o < 1; o++) {
            backwardK = downF;
         }
         let rootE = 5974334 <= roomG.length;
         do {
            roomG = `${scheduleU.length}`;
            if (rootE) {
               break;
            }
         } while (rootE && (1 <= (lists.length << (Math.min(Math.abs(5), 4))) && (roomG.length << (Math.min(Math.abs(5), 5))) <= 5));
         while (!mbridgeH.endsWith(`${backwardK}`)) {
            let penalty_ = String.fromCharCode(104, 95, 52, 49, 95, 99, 111, 109, 112, 97, 114, 101, 0);
            let line1 = 3.0;
            let whatsappM: Array<any> = [350, 969];
            let changeJ: Array<any> = [String.fromCharCode(97, 95, 50, 54, 95, 115, 110, 111, 119, 100, 97, 116, 97, 0), String.fromCharCode(100, 105, 115, 116, 114, 97, 99, 116, 97, 98, 108, 101, 95, 119, 95, 53, 0), String.fromCharCode(109, 97, 110, 97, 103, 101, 109, 101, 110, 116, 95, 53, 95, 56, 51, 0)];
            let mapbufferR = false;
            let dangere = String.fromCharCode(98, 114, 97, 110, 99, 104, 95, 116, 95, 51, 54, 0);
            dangere += `${whatsappM.length / 3}`;
            if (line1 > 4.73) {
               let floating4: Map<any, any> = new Map([[String.fromCharCode(111, 95, 57, 57, 95, 101, 98, 117, 114, 0), String.fromCharCode(122, 95, 57, 55, 95, 110, 101, 119, 108, 105, 110, 101, 115, 0)], [String.fromCharCode(106, 95, 57, 49, 0), String.fromCharCode(115, 117, 98, 106, 101, 99, 116, 115, 95, 97, 95, 52, 54, 0)], [String.fromCharCode(109, 111, 118, 101, 100, 95, 117, 95, 55, 56, 0), String.fromCharCode(112, 95, 56, 95, 101, 110, 117, 109, 101, 114, 97, 116, 101, 100, 0)]]);
               mapbufferR = 58 <= penalty_.length;
               floating4.set(`${floating4.size}`, floating4.size << (Math.min(Math.abs(2), 4)));
            }
            for (let p = 0; p < 2; p++) {
               let mbnativeQ: Array<any> = [392, 257, 485];
               let shrinkb = 2.0;
               line1 *= dangere.length;
               mbnativeQ.push(mbnativeQ.length << (Math.min(4, Math.abs(parseInt(`${shrinkb}`)))));
               shrinkb += parseFloat(`${parseInt(`${shrinkb}`) ^ 3}`);
            }
            let floating8 = mapbufferR ? !mapbufferR : mapbufferR;
            do {
               let j_imageQ: Map<any, any> = new Map([[String.fromCharCode(107, 95, 50, 52, 95, 115, 101, 116, 102, 100, 0), String.fromCharCode(108, 95, 49, 55, 95, 99, 101, 108, 116, 0)], [String.fromCharCode(112, 95, 56, 57, 95, 118, 97, 108, 105, 100, 97, 116, 101, 0), String.fromCharCode(106, 95, 54, 55, 95, 98, 101, 99, 97, 109, 101, 0)]]);
               mapbufferR = 49 < j_imageQ.size;
               if (floating8) {
                  break;
               }
            } while ((dangere.length <= 1) && floating8);
            if (2 < changeJ.length) {
               let castY: Array<any> = [885, 159];
               changeJ = [whatsappM.length];
               castY = [3];
            }
            let themeU = true;
            mapbufferR = penalty_.length > 36;
            themeU = (!themeU ? !themeU : !themeU);
            line1 /= Math.max(5, dangere.length << (Math.min(5, Math.abs(parseInt(`${line1}`)))));
            let chinasame0 = true;
            changeJ = [3 + whatsappM.length];
            chinasame0 = !chinasame0;
            mapbufferR = 37 > dangere.length && 37 > whatsappM.length;
            let themeG = 3;
            let tempP = 3;
            while (!penalty_.includes(`${changeJ.length}`)) {
               changeJ.push((changeJ.length << (Math.min(5, Math.abs((mapbufferR ? 1 : 3))))));
               break;
            }
            let unselectedH = 1.0;
            line1 *= (String.fromCharCode(79, 0) == penalty_ ? (mapbufferR ? 1 : 3) : penalty_.length);
            themeG /= Math.max(1, changeJ.length / 2);
            backwardK = line1 <= 94.39;
            break;
         }
         for (let l = 0; l < 3; l++) {
            let trash7 = String.fromCharCode(110, 95, 56, 51, 95, 101, 114, 97, 0);
            let libavcodecE = 2.0;
            let dangerR = String.fromCharCode(118, 95, 54, 53, 95, 102, 108, 111, 97, 116, 0);
            let fastC = 5.0;
            let connectionH = 1.0;
            while (connectionH > fastC) {
               fastC += parseFloat(`${dangerR.length >> (Math.min(Math.abs(1), 2))}`);
               break;
            }
            let auto_sY = true;
            connectionH /= Math.max(parseFloat(`${2 << (Math.min(4, dangerR.length))}`), 5);
            auto_sY = (!auto_sY ? !auto_sY : !auto_sY);
            while (5 >= trash7.length) {
               libavcodecE += parseInt(`${fastC}`) % (Math.max(4, parseInt(`${connectionH}`)));
               break;
            }
            let nalytics_ = 1.0;
            let latnN = String.fromCharCode(101, 113, 117, 97, 108, 95, 115, 95, 50, 57, 0);
            trash7 += `${parseInt(`${nalytics_}`)}`;
            nalytics_ += parseFloat(`${2 - latnN.length}`);
            latnN = `${latnN.length / (Math.max(latnN.length, 9))}`;
            fastC += parseFloat(`${1}`);
            dangerR += `${trash7.length & 2}`;
            let libmapbufferjnio = 5.0;
            while (5.33 < (connectionH / (Math.max(4.100, 8))) && 5.2 < (4.100 / (Math.max(5, libmapbufferjnio)))) {
               connectionH /= Math.max(parseFloat(`${1}`), 4);
               break;
            }
            while (libmapbufferjnio >= 1.32) {
               libmapbufferjnio -= trash7.length;
               break;
            }
            connectionH *= parseFloat(`${2}`);
            for (let i = 0; i < 3; i++) {
               fastC /= Math.max(parseFloat(`${2 | parseInt(`${fastC}`)}`), 2);
            }
            let constantsp = 4.0;
            let analyticR = 4.0;
            analyticR *= parseInt(`${libavcodecE}`);
            let backwarda = 2.0;
            let historyg = 3.0;
            let nterstitialx: Map<any, any> = new Map([[String.fromCharCode(121, 95, 57, 50, 95, 110, 97, 118, 105, 103, 97, 116, 101, 100, 0), true], [String.fromCharCode(113, 117, 101, 117, 101, 115, 95, 114, 95, 52, 57, 0), false]]);
            trash7 += `${trash7.length}`;
            nterstitialx = new Map([[`${nterstitialx.size}`, nterstitialx.size]]);
            analyticsv += `${((downF ? 2 : 4) % (Math.max(customI, 8)))}`;
         }
         console.log('error when get product from google play: ', err);
      }
   }

   const onPurchase = async () => {
      let valuesE = 3;
      let active6 = 0.0;
      let sideA = 1;
      let basketballF: Array<any> = [396, 690, 76];
      let basketballX = String.fromCharCode(115, 116, 97, 109, 112, 95, 109, 95, 50, 48, 0);
      let appsc = String.fromCharCode(107, 97, 108, 109, 97, 110, 95, 111, 95, 52, 55, 0);
      let championu = String.fromCharCode(105, 110, 116, 114, 97, 112, 114, 101, 100, 95, 105, 95, 52, 50, 0);
      let placeholder9: Array<any> = [248, 211, 376];
      let routert = String.fromCharCode(108, 95, 53, 50, 95, 99, 104, 107, 108, 105, 115, 116, 0);
      let detailsx = String.fromCharCode(116, 114, 101, 102, 95, 113, 95, 49, 57, 0);
      let telegramQ: Map<any, any> = new Map([[String.fromCharCode(98, 101, 115, 115, 101, 108, 95, 101, 95, 51, 54, 0), String.fromCharCode(112, 114, 111, 120, 105, 109, 105, 116, 121, 95, 112, 95, 50, 55, 0)], [String.fromCharCode(116, 114, 121, 95, 54, 95, 49, 51, 0), String.fromCharCode(119, 95, 56, 56, 95, 102, 105, 108, 108, 0)], [String.fromCharCode(110, 95, 50, 95, 98, 105, 116, 101, 120, 97, 99, 116, 110, 101, 115, 115, 0), String.fromCharCode(106, 95, 57, 55, 95, 118, 102, 105, 108, 116, 101, 114, 0)]]);
      routert += `${championu.length / (Math.max(7, sideA))}`;
      detailsx = `${detailsx.length | routert.length}`;

      setIsBtnEnable(false);

      let materiale: Map<any, any> = new Map([[String.fromCharCode(109, 95, 51, 52, 95, 114, 111, 108, 108, 98, 97, 99, 107, 0), true], [String.fromCharCode(115, 105, 103, 110, 105, 102, 105, 99, 97, 110, 116, 95, 99, 95, 54, 49, 0), false], [String.fromCharCode(100, 111, 119, 110, 115, 97, 109, 112, 108, 101, 95, 53, 95, 56, 0), true]]);
      let default_8un = 3.0;
      let orangeQ = String.fromCharCode(115, 112, 101, 99, 116, 114, 97, 108, 95, 53, 95, 56, 49, 0);
      orangeQ = `${1 + parseInt(`${default_8un}`)}`;
      let libfollyX = 4;
      let pingM: Map<any, any> = new Map([[String.fromCharCode(108, 95, 55, 56, 95, 116, 114, 117, 110, 107, 0), 655], [String.fromCharCode(97, 95, 49, 51, 95, 111, 112, 101, 114, 97, 116, 111, 114, 0), 185]]);
      materiale.set(`${default_8un}`, materiale.size << (Math.min(3, Math.abs(parseInt(`${default_8un}`)))));
      libfollyX += 2 - libfollyX;
      pingM = new Map([[`${pingM.size}`, libfollyX ^ 3]]);
      while (5 <= (materiale.size ^ 2)) {
         default_8un *= parseFloat(`${parseInt(`${default_8un}`) - 3}`);
         break;
      }
      default_8un -= parseFloat(`${parseInt(`${default_8un}`) | 3}`);
      if (!orangeQ.includes(`${default_8un}`)) {
         default_8un += parseFloat(`${parseInt(`${default_8un}`)}`);
      }
      orangeQ += `${(orangeQ == String.fromCharCode(88, 0) ? parseInt(`${default_8un}`) : orangeQ.length)}`;
      materiale.set(`${default_8un}`, parseInt(`${default_8un}`) | orangeQ.length);
      orangeQ = "2";
      if (default_8un < 5.93) {
         default_8un *= parseFloat(`${2}`);
      }
      active6 -= parseFloat(`${sideA}`);
      let colorsE = 5;
      let plusf = String.fromCharCode(109, 95, 50, 51, 95, 113, 112, 101, 108, 100, 115, 112, 0);
      let yellowA = 5.0;
      let libmapbufferjnik = String.fromCharCode(107, 95, 54, 55, 95, 97, 99, 107, 100, 114, 111, 112, 0);
      let moreJ: Map<any, any> = new Map([[String.fromCharCode(103, 95, 53, 52, 95, 109, 97, 120, 101, 100, 0), true], [String.fromCharCode(101, 115, 99, 97, 112, 101, 95, 97, 95, 55, 55, 0), false]]);
      let aboutI = String.fromCharCode(109, 95, 49, 51, 95, 115, 111, 97, 98, 111, 114, 116, 0);
      plusf = `${2 * parseInt(`${yellowA}`)}`;
      libmapbufferjnik += `${libmapbufferjnik.length}`;
      moreJ.set(aboutI, (String.fromCharCode(95, 0) == aboutI ? aboutI.length : moreJ.size));
      plusf = `${3 / (Math.max(5, parseInt(`${yellowA}`)))}`;
      for (let p = 0; p < 1; p++) {
         plusf = `${colorsE >> (Math.min(Math.abs(2), 5))}`;
      }
      plusf = `${colorsE}`;
      let kuaishouk = 0;
      colorsE ^= colorsE / (Math.max(parseInt(`${yellowA}`), 10));
      kuaishouk |= kuaishouk / (Math.max(3, kuaishouk));
      valuesE *= plusf.length ^ placeholder9.length;
      try {

         let filedY = 3.0;
         for (let u = 0; u < 1; u++) {
            filedY *= parseFloat(`${1 | parseInt(`${filedY}`)}`);
         }
         while ((filedY + 2) <= 5.5) {
            let bdxadsdkR: Map<any, any> = new Map([[String.fromCharCode(103, 95, 49, 50, 95, 109, 105, 108, 105, 111, 110, 115, 0), 404], [String.fromCharCode(101, 110, 104, 97, 110, 99, 101, 100, 95, 113, 95, 53, 56, 0), 419], [String.fromCharCode(98, 97, 114, 114, 97, 121, 95, 117, 95, 54, 55, 0), 634]]);
            let long_ia1: Map<any, any> = new Map([[String.fromCharCode(98, 95, 50, 57, 95, 99, 97, 110, 111, 110, 0), String.fromCharCode(119, 95, 53, 56, 95, 100, 105, 103, 101, 115, 116, 98, 121, 111, 98, 106, 0)], [String.fromCharCode(117, 110, 114, 101, 115, 111, 108, 118, 97, 98, 108, 101, 95, 121, 95, 51, 0), String.fromCharCode(119, 97, 115, 95, 55, 95, 54, 49, 0)]]);
            let huaweiG = true;
            let livem = String.fromCharCode(105, 100, 101, 110, 116, 105, 99, 97, 108, 95, 51, 95, 52, 52, 0);
            let leagues: Array<any> = [805, 209];
            filedY /= Math.max(parseFloat(`${livem.length}`), 3);
            bdxadsdkR = new Map([[`${leagues.length}`, leagues.length]]);
            long_ia1 = new Map([[`${long_ia1.size}`, long_ia1.size]]);
            huaweiG = !huaweiG || bdxadsdkR.size <= 43;
            livem = `${bdxadsdkR.size + 1}`;
            break;
         }
         let libglogx = 2.0;
         let nativeexV = String.fromCharCode(116, 114, 105, 97, 110, 103, 117, 108, 97, 116, 105, 111, 110, 95, 120, 95, 50, 52, 0);
         let componentregistry9: Array<any> = [54, 475];
         filedY /= Math.max(5, parseFloat(`${1 >> (Math.min(5, componentregistry9.length))}`));
         libglogx /= Math.max(1, 3);
         nativeexV = `${(nativeexV == String.fromCharCode(108, 0) ? nativeexV.length : parseInt(`${libglogx}`))}`;
         componentregistry9.push(1);
         appsc += `${championu.length}`;
         while (basketballF.includes(active6)) {
            let yellowH = String.fromCharCode(121, 105, 101, 108, 100, 95, 115, 95, 49, 54, 0);
            let currentd = 1.0;
            let gestureB = 1.0;
            let statisticsr = String.fromCharCode(101, 99, 111, 117, 110, 116, 95, 56, 95, 49, 54, 0);
            let libfbjniB = false;
            while (libfbjniB || statisticsr.length == 2) {
               libfbjniB = statisticsr == String.fromCharCode(52, 0);
               break;
            }
            let pauser = statisticsr == String.fromCharCode(120, 57, 110, 0);
            do {
               statisticsr = `${parseInt(`${currentd}`) ^ 1}`;
               if (pauser) {
                  break;
               }
            } while (pauser && (5.70 <= (currentd * parseFloat(`${statisticsr.length}`)) || 4.87 <= (5.70 * currentd)));
            let nalyticsZ = String.fromCharCode(113, 102, 116, 101, 50, 101, 49, 106, 53, 0) == yellowH;
            do {
               let whistle6 = 1.0;
               let checkboxJ = 2.0;
               let libreactq: Array<any> = [990, 124];
               let orangee = true;
               let basketballm = 3.0;
               yellowH += `${((orangee ? 1 : 5))}`;
               whistle6 *= parseInt(`${whistle6}`) - parseInt(`${checkboxJ}`);
               checkboxJ /= Math.max(2, libreactq.length);
               libreactq.push(2);
               orangee = libreactq.length == 77;
               basketballm *= parseFloat(`${parseInt(`${checkboxJ}`)}`);
               if (nalyticsZ) {
                  break;
               }
            } while (nalyticsZ && (yellowH.includes(`${libfbjniB}`)));
            for (let a = 0; a < 3; a++) {
               let mintegralN = String.fromCharCode(99, 95, 51, 49, 95, 115, 111, 99, 114, 101, 97, 116, 101, 0);
               let modea = 2.0;
               let apple4 = String.fromCharCode(112, 97, 114, 115, 105, 110, 103, 95, 113, 95, 52, 57, 0);
               let strO = String.fromCharCode(110, 95, 56, 49, 95, 114, 97, 110, 100, 101, 110, 0);
               yellowH = `${parseInt(`${currentd}`) % 1}`;
               mintegralN += `${(apple4 == String.fromCharCode(114, 0) ? apple4.length : parseInt(`${modea}`))}`;
               modea *= 2 ^ strO.length;
               strO += `${apple4.length % (Math.max(2, 10))}`;
            }
            let nalyticsE = String.fromCharCode(114, 97, 119, 118, 105, 100, 101, 111, 95, 102, 95, 53, 54, 0);
            let cancelG = String.fromCharCode(114, 109, 117, 108, 116, 105, 112, 108, 105, 99, 97, 116, 105, 111, 110, 95, 50, 95, 53, 0);
            let ticko = 3.0;
            let dialogF = 1;
            let twitters = String.fromCharCode(97, 118, 97, 105, 108, 97, 98, 108, 101, 95, 109, 95, 53, 48, 0);
            libfbjniB = (ticko / (Math.max(parseFloat(`${nalyticsE.length}`), 7))) == 12.23;
            ticko *= parseFloat(`${twitters.length + 1}`);
            dialogF *= dialogF * 3;
            twitters += `${twitters.length}`;
            let base6 = 9842165.0 >= currentd;
            do {
               currentd -= parseFloat(`${2}`);
               if (base6) {
                  break;
               }
            } while ((currentd < gestureB) && base6);
            let borderlessq = String.fromCharCode(112, 95, 54, 54, 95, 115, 111, 100, 101, 97, 108, 108, 111, 99, 0);
            let guideh = false;
            currentd -= parseFloat(`${cancelG.length}`);
            borderlessq += `${((guideh ? 3 : 4) >> (Math.min(Math.abs(2), 5)))}`;
            guideh = (23 >= (borderlessq.length + (guideh ? borderlessq.length : 23)));
            libfbjniB = libfbjniB || 54.89 < gestureB;
            if (!libfbjniB) {
               let confirmationv: Map<any, any> = new Map([[String.fromCharCode(106, 95, 56, 57, 95, 99, 111, 110, 115, 116, 116, 105, 109, 101, 0), 921], [String.fromCharCode(120, 95, 53, 51, 95, 100, 112, 116, 114, 115, 0), 977]]);
               let roomq = String.fromCharCode(119, 95, 57, 56, 95, 109, 117, 108, 116, 105, 102, 114, 97, 109, 101, 0);
               let moonf: Map<any, any> = new Map([[String.fromCharCode(118, 95, 56, 52, 95, 115, 101, 108, 101, 99, 116, 97, 98, 108, 101, 0), 47], [String.fromCharCode(104, 95, 56, 50, 95, 117, 110, 108, 105, 109, 105, 116, 101, 100, 0), 811]]);
               let proxy9: Map<any, any> = new Map([[String.fromCharCode(120, 95, 50, 56, 0), 665], [String.fromCharCode(102, 95, 53, 49, 95, 97, 108, 109, 111, 115, 116, 0), 393], [String.fromCharCode(97, 117, 120, 100, 97, 116, 97, 95, 52, 95, 55, 53, 0), 635]]);
               let actionss = 2.0;
               libfbjniB = (gestureB * currentd) < 81.36;
               confirmationv = new Map([[`${proxy9.size}`, parseInt(`${actionss}`) ^ proxy9.size]]);
               roomq = `${roomq.length + 2}`;
               moonf = new Map([[`${proxy9.size}`, proxy9.size]]);
               actionss *= proxy9.size - moonf.size;
            }
            yellowH = `${parseInt(`${gestureB}`) - nalyticsE.length}`;
            active6 -= parseFloat(`${1}`);
            break;
         }
         setIsVisible(true);

         for (let v = 0; v < 1; v++) {
            placeholder9 = [(appsc == String.fromCharCode(73, 0) ? appsc.length : sideA)];
         }
         placeholder9.push(valuesE | 3);
         if (productSelected.productType === 'iap') {
            await requestPurchase({ skus: [productSelected.productSKU] });

         } else if (productSelected.productType === 'subs') {

            while ((parseFloat(`${valuesE}`) + active6) < 4.16 && (parseFloat(`${valuesE}`) + active6) < 4.16) {
               active6 *= parseFloat(`${basketballX.length}`);
               break;
            }
            let neony = String.fromCharCode(114, 95, 54, 48, 95, 111, 118, 101, 114, 114, 105, 100, 100, 101, 110, 0);
            neony = `${neony.length << (Math.min(neony.length, 4))}`;
            neony += `${neony.length & 1}`;
            neony += `${neony.length}`;
            placeholder9 = [2 + parseInt(`${active6}`)];
            const subs = subscriptions.find(sub => sub.productId === productSelected.productSKU);

            let grayE = valuesE <= 9454769;
            do {
               valuesE -= placeholder9.length ^ parseInt(`${active6}`);
               if (grayE) {
                  break;
               }
            } while (((valuesE / (Math.max(3, detailsx.length))) < 1) && grayE);
            let relatedi = String.fromCharCode(117, 95, 50, 49, 95, 116, 111, 120, 121, 122, 0);
            relatedi += `${2 & relatedi.length}`;
            while (relatedi == relatedi) {
               relatedi = `${(relatedi == String.fromCharCode(50, 0) ? relatedi.length : relatedi.length)}`;
               break;
            }
            relatedi += "1";
            detailsx = `${(String.fromCharCode(97, 0) == basketballX ? basketballX.length : parseInt(`${active6}`))}`;

            if (subs) {

               for (let p = 0; p < 1; p++) {
                  basketballF.push(valuesE);
               }
               let blackh = String.fromCharCode(115, 101, 116, 115, 97, 114, 95, 51, 95, 56, 0);
               let historyq: Array<any> = [String.fromCharCode(119, 95, 51, 55, 95, 108, 104, 115, 0), String.fromCharCode(103, 95, 53, 95, 97, 116, 111, 109, 115, 0)];
               let mathK = false;
               let r_playera = String.fromCharCode(98, 102, 122, 115, 51, 0) == blackh;
               do {
                  let appleQ: Array<any> = [875, 506, 574];
                  let taiwani = String.fromCharCode(110, 95, 57, 49, 95, 100, 101, 116, 101, 114, 109, 105, 110, 105, 115, 116, 105, 99, 0);
                  blackh += `${3 - historyq.length}`;
                  appleQ = [(String.fromCharCode(110, 0) == taiwani ? taiwani.length : appleQ.length)];
                  if (r_playera) {
                     break;
                  }
               } while (r_playera && ((blackh.length << (Math.min(4, historyq.length))) < 2 && (2 << (Math.min(2, historyq.length))) < 2));
               for (let o = 0; o < 2; o++) {
                  mathK = blackh.length == 9;
               }
               let plashk = 4.0;
               let minil = String.fromCharCode(99, 95, 53, 55, 95, 117, 110, 102, 97, 105, 114, 0);
               let crownN = String.fromCharCode(116, 104, 114, 101, 97, 100, 109, 101, 115, 115, 97, 103, 101, 95, 122, 95, 56, 49, 0);
               historyq.push(3 * blackh.length);
               plashk /= Math.max(5, crownN.length);
               minil = `${1 - parseInt(`${plashk}`)}`;
               crownN = `${minil.length << (Math.min(crownN.length, 2))}`;
               while ((5 | historyq.length) > 3 || !mathK) {
                  historyq.push(historyq.length);
                  break;
               }
               let mappingc = false;
               let internett = mathK ? !mathK : mathK;
               do {
                  mathK = !mappingc;
                  if (internett) {
                     break;
                  }
               } while (internett && (historyq.length == 1));
               let dark6 = String.fromCharCode(98, 108, 97, 99, 107, 108, 105, 115, 116, 95, 112, 95, 57, 57, 0);
               let downloaderL: Map<any, any> = new Map([[String.fromCharCode(104, 95, 56, 52, 95, 115, 99, 97, 108, 105, 110, 103, 0), true], [String.fromCharCode(98, 105, 103, 95, 105, 95, 54, 54, 0), true], [String.fromCharCode(105, 102, 97, 99, 101, 95, 112, 95, 57, 52, 0), true]]);
               historyq = [3];
               dark6 = `${1 >> (Math.min(2, dark6.length))}`;
               downloaderL.set(dark6, dark6.length - downloaderL.size);
               let stringb = String.fromCharCode(121, 95, 53, 51, 95, 97, 115, 99, 101, 110, 116, 0);
               let confirmationk = String.fromCharCode(55, 53, 95, 56, 122, 117, 110, 113, 122, 0) == stringb;
               do {
                  let libfabricjniF = true;
                  let latnS = 0.0;
                  let resultV = String.fromCharCode(112, 97, 115, 116, 101, 100, 95, 56, 95, 50, 51, 0);
                  stringb = `${1 >> (Math.min(Math.abs(parseInt(`${latnS}`)), 2))}`;
                  libfabricjniF = resultV.length < 6;
                  latnS -= parseFloat(`${2}`);
                  resultV = `${((libfabricjniF ? 2 : 2))}`;
                  if (confirmationk) {
                     break;
                  }
               } while (confirmationk && (stringb.length < 1));
               basketballX = `${basketballF.length}`;
               const offerToken = subs.subscriptionOfferDetails[0].offerToken;

               if ((basketballF.length >> (Math.min(1, Math.abs(valuesE)))) <= 2 && (valuesE >> (Math.min(basketballF.length, 2))) <= 2) {
                  valuesE >>= Math.min(Math.abs(championu.length ^ 3), 3);
               }
               let entryi = 8522627 >= basketballF.length;
               do {
                  basketballF = [placeholder9.length | 3];
                  if (entryi) {
                     break;
                  }
               } while ((appsc.length == 1) && entryi);
               await requestSubscription({
                  sku: productSelected.productSKU,
                  ...(offerToken && {
                     subscriptionOffers: [{ sku: productSelected.productSKU, offerToken }],
                  }),
               });
            } else {

               let listI = sideA >= 6602923;
               do {
                  sideA %= Math.max(3, 1);
                  if (listI) {
                     break;
                  }
               } while ((3 <= (1 & appsc.length) && 4 <= (sideA & 1)) && listI);
               let render8 = String.fromCharCode(52, 117, 107, 95, 56, 49, 0) == detailsx;
               do {
                  detailsx = `${appsc.length % (Math.max(2, valuesE))}`;
                  if (render8) {
                     break;
                  }
               } while (render8 && ((parseInt(`${active6}`) / 4) == 4 && (parseInt(`${active6}`) / (Math.max(6, detailsx.length))) == 4));
               throw new Error('subscription plan not found');
            }
         }
      } catch (err) {

         let logoutj = 3.0;
         let neon8 = String.fromCharCode(97, 114, 112, 101, 100, 95, 103, 95, 54, 0);
         let control_ = String.fromCharCode(108, 95, 49, 49, 95, 105, 110, 116, 101, 114, 109, 105, 100, 105, 97, 116, 101, 0);
         let shootW = control_ == String.fromCharCode(101, 56, 100, 121, 103, 115, 95, 48, 121, 115, 0);
         do {
            control_ = `${neon8.length}`;
            if (shootW) {
               break;
            }
         } while (((parseInt(`${logoutj}`) - control_.length) >= 5) && shootW);
         let final_pi = 9637384 <= neon8.length;
         do {
            let large9 = String.fromCharCode(101, 95, 50, 55, 95, 114, 101, 119, 97, 114, 100, 115, 0);
            let crownI = false;
            let circlez = true;
            let strN = 1.0;
            let detailsq = 3.0;
            neon8 += `${parseInt(`${logoutj}`) << (Math.min(2, Math.abs(2)))}`;
            large9 += `${3 * parseInt(`${strN}`)}`;
            crownI = 4.100 > (detailsq / (Math.max(8, strN)));
            circlez = strN == detailsq;
            if (final_pi) {
               break;
            }
         } while ((control_.endsWith(neon8)) && final_pi);
         logoutj /= Math.max(1, control_.length);
         neon8 = "1";
         for (let d = 0; d < 2; d++) {
            control_ += `${parseInt(`${logoutj}`) - control_.length}`;
         }
         while (5 == control_.length) {
            let promotionu: Map<any, any> = new Map([[String.fromCharCode(117, 95, 56, 95, 116, 111, 109, 98, 117, 102, 0), 256], [String.fromCharCode(113, 95, 53, 51, 95, 103, 101, 115, 116, 117, 114, 101, 0), 236]]);
            let default_aej: Array<any> = [228, 978, 876];
            let frame_vsa: Map<any, any> = new Map([[String.fromCharCode(121, 95, 56, 50, 95, 102, 111, 108, 100, 101, 114, 115, 0), 210], [String.fromCharCode(112, 111, 112, 117, 112, 95, 106, 95, 56, 0), 350]]);
            let rulesT: Array<any> = [String.fromCharCode(99, 95, 55, 55, 95, 101, 120, 99, 101, 101, 100, 0), String.fromCharCode(101, 95, 54, 95, 100, 111, 119, 110, 108, 111, 97, 100, 105, 110, 103, 0), String.fromCharCode(97, 110, 116, 105, 97, 108, 105, 97, 115, 95, 111, 95, 57, 49, 0)];
            let renew2 = 5.0;
            neon8 = `${2 - parseInt(`${renew2}`)}`;
            promotionu.set(`${rulesT.length}`, rulesT.length / 2);
            default_aej = [frame_vsa.size / 2];
            frame_vsa = new Map([[`${frame_vsa.size}`, frame_vsa.size]]);
            renew2 += default_aej.length & promotionu.size;
            break;
         }
         let update_xu = 4.0;
         neon8 = `${parseInt(`${update_xu}`)}`;
         let calendarF = String.fromCharCode(117, 95, 50, 53, 95, 99, 97, 110, 111, 112, 117, 115, 0);
         let targetj: Map<any, any> = new Map([[String.fromCharCode(99, 117, 116, 111, 117, 116, 95, 109, 95, 54, 0), 541], [String.fromCharCode(100, 95, 57, 54, 95, 97, 115, 102, 114, 116, 112, 0), 993]]);
         let langY = String.fromCharCode(97, 118, 112, 105, 99, 116, 117, 114, 101, 95, 105, 95, 50, 50, 0);
         logoutj -= targetj.size;
         calendarF += `${calendarF.length}`;
         targetj = new Map([[langY, (String.fromCharCode(66, 0) == calendarF ? langY.length : calendarF.length)]]);
         for (let l = 0; l < 2; l++) {
            control_ += `${neon8.length}`;
         }
         basketballF = [parseInt(`${logoutj}`) << (Math.min(appsc.length, 2))];
         if (4 > (routert.length >> (Math.min(Math.abs(3), 5))) || (routert.length << (Math.min(Math.abs(3), 2))) > 2) {
            active6 += parseFloat(`${sideA}`);
         }
         setIsVisible(false);

         let moditys: Array<any> = [129, 873, 561];
         let mergerh = 4;
         let thailandV = 5.0;
         let libcxxcomponentsv = 0;
         let episodesh = String.fromCharCode(98, 114, 117, 115, 104, 95, 103, 95, 57, 54, 0);
         mergerh |= mergerh * 3;
         libcxxcomponentsv ^= episodesh.length;
         episodesh = `${2 / (Math.max(6, libcxxcomponentsv))}`;
         let nativemoduleF = String.fromCharCode(102, 95, 56, 48, 95, 115, 116, 105, 108, 108, 0);
         let expiredu = false;
         let root_ = String.fromCharCode(112, 95, 52, 52, 95, 120, 99, 116, 101, 115, 116, 0);
         moditys.push(root_.length + 1);
         nativemoduleF = "3";
         expiredu = nativemoduleF.length >= 30;
         root_ += `${(1 - (expiredu ? 5 : 2))}`;
         let colorsH = 4.0;
         let dangerG: Map<any, any> = new Map([[String.fromCharCode(108, 95, 49, 49, 95, 115, 105, 103, 110, 97, 108, 0), 889], [String.fromCharCode(99, 111, 110, 116, 97, 105, 110, 101, 114, 115, 95, 120, 95, 53, 51, 0), 824]]);
         let right_ = 2.0;
         thailandV -= parseFloat(`${parseInt(`${colorsH}`) * 2}`);
         colorsH -= parseFloat(`${2 | dangerG.size}`);
         dangerG.set(`${right_}`, parseInt(`${right_}`) + dangerG.size);
         let acceptedH = String.fromCharCode(115, 117, 98, 109, 105, 116, 116, 101, 100, 95, 53, 95, 56, 54, 0);
         mergerh -= moditys.length + acceptedH.length;
         if (!moditys.includes(mergerh)) {
            let actions8 = true;
            let castP: Array<any> = [71, 187];
            mergerh -= 2;
            actions8 = castP.includes(actions8);
            castP = [1 << (Math.min(1, castP.length))];
         }
         let langkeyM = String.fromCharCode(101, 95, 52, 56, 95, 115, 99, 104, 101, 109, 101, 115, 0);
         for (let x = 0; x < 2; x++) {
            langkeyM += `${langkeyM.length}`;
         }
         let detailC = 9788738.0 >= thailandV;
         do {
            thailandV *= parseFloat(`${parseInt(`${thailandV}`) + moditys.length}`);
            if (detailC) {
               break;
            }
         } while (detailC && (2.31 <= (2.10 - thailandV)));
         for (let r = 0; r < 1; r++) {
            mergerh += 1;
         }
         sideA &= valuesE % 3;
         if (detailsx.length > 4) {
            detailsx += `${sideA ^ 2}`;
         }
         if (err instanceof PurchaseError) {

            while (4 <= (1 + basketballF.length) && 3 <= (appsc.length + 1)) {
               basketballF.push(championu.length / (Math.max(routert.length, 10)));
               break;
            }
            if (parseInt(`${active6}`) >= routert.length) {
               routert += `${routert.length}`;
            }
            console.error("purchasing error: " + err);
         } else {

            let bootsplashj = String.fromCharCode(102, 95, 56, 50, 95, 105, 110, 116, 101, 114, 112, 0);
            let volumen = false;
            let moduleV = String.fromCharCode(120, 95, 50, 56, 95, 115, 117, 112, 101, 114, 110, 111, 100, 101, 0);
            let videojst: Map<any, any> = new Map([[String.fromCharCode(100, 101, 114, 105, 118, 101, 95, 113, 95, 55, 51, 0), String.fromCharCode(105, 109, 109, 101, 100, 105, 97, 116, 101, 95, 111, 95, 55, 0)], [String.fromCharCode(109, 95, 50, 50, 95, 103, 122, 105, 112, 112, 101, 100, 0), String.fromCharCode(105, 95, 57, 57, 95, 109, 111, 110, 111, 116, 111, 110, 105, 116, 121, 0)]]);
            let handlerX: Map<any, any> = new Map([[String.fromCharCode(103, 101, 116, 110, 101, 116, 119, 111, 114, 107, 112, 97, 114, 97, 109, 115, 95, 102, 95, 52, 49, 0), false], [String.fromCharCode(100, 95, 54, 57, 95, 109, 117, 108, 116, 105, 115, 101, 108, 101, 99, 116, 105, 111, 110, 0), false], [String.fromCharCode(114, 101, 115, 117, 109, 101, 100, 95, 120, 95, 55, 54, 0), false]]);
            let searchbarN = 0.0;
            for (let q = 0; q < 2; q++) {
               bootsplashj += `${((volumen ? 5 : 1) - parseInt(`${searchbarN}`))}`;
            }
            let completeT = String.fromCharCode(105, 97, 108, 55, 119, 103, 107, 121, 102, 0) == bootsplashj;
            do {
               bootsplashj = `${3 + handlerX.size}`;
               if (completeT) {
                  break;
               }
            } while (completeT && ((parseInt(`${searchbarN}`) * 5) > 4 || 1 > (5 * bootsplashj.length)));
            bootsplashj = `${(2 ^ (volumen ? 2 : 5))}`;
            volumen = moduleV.endsWith(`${volumen}`);
            videojst = new Map([[`${handlerX.size}`, 3]]);
            bootsplashj += `${(moduleV == String.fromCharCode(121, 0) ? moduleV.length : videojst.size)}`;
            let mbbidA = moduleV == String.fromCharCode(118, 108, 55, 118, 51, 117, 0);
            do {
               let abidetectZ = String.fromCharCode(114, 115, 112, 95, 110, 95, 56, 56, 0);
               let gemfileW = String.fromCharCode(114, 95, 57, 52, 95, 100, 111, 110, 101, 0);
               let overH = 5;
               moduleV = `${(abidetectZ == String.fromCharCode(57, 0) ? abidetectZ.length : gemfileW.length)}`;
               gemfileW = `${3 + overH}`;
               if (mbbidA) {
                  break;
               }
            } while (((handlerX.size / 5) >= 3) && mbbidA);
            placeholder9.push(((volumen ? 4 : 4) * basketballX.length));
            let hooksJ = String.fromCharCode(115, 95, 54, 48, 95, 117, 110, 114, 101, 102, 99, 111, 117, 110, 116, 0);
            let p_imagex = 0.0;
            hooksJ = `${1 << (Math.min(2, hooksJ.length))}`;
            hooksJ += `${hooksJ.length}`;
            basketballF.push((detailsx == String.fromCharCode(98, 0) ? detailsx.length : placeholder9.length));
            console.error("handle purchase error: ", err);
         }

         if (err && err.code == "E_USER_CANCELLED") {

            let libffmpegkitp = String.fromCharCode(119, 95, 52, 51, 95, 112, 97, 108, 98, 97, 114, 115, 0);
            if (libffmpegkitp.length == 2) {
               libffmpegkitp = `${libffmpegkitp.length << (Math.min(Math.abs(2), 4))}`;
            }
            libffmpegkitp += `${libffmpegkitp.length}`;
            libffmpegkitp += `${libffmpegkitp.length}`;
            sideA <<= Math.min(Math.abs(basketballF.length + 3), 5);
            while (5 >= (detailsx.length * placeholder9.length)) {
               placeholder9.push(appsc.length);
               break;
            }
            console.log("user cancel purchase");

            let googlew = 9300990 <= basketballF.length;
            do {
               basketballF.push(basketballF.length * 3);
               if (googlew) {
                  break;
               }
            } while ((championu.includes(`${basketballF.length}`)) && googlew);
            for (let r = 0; r < 3; r++) {
               let progressD = String.fromCharCode(97, 118, 105, 100, 95, 106, 95, 54, 52, 0);
               let downN = 5;
               let rewinda = String.fromCharCode(107, 95, 57, 56, 95, 98, 114, 107, 116, 105, 109, 101, 103, 109, 0);
               let benefitN = String.fromCharCode(109, 111, 100, 105, 116, 121, 95, 56, 95, 51, 54, 0);
               benefitN = "2";
               let templateprocessors = String.fromCharCode(109, 95, 50, 55, 0);
               let tooltips6 = String.fromCharCode(119, 95, 54, 56, 95, 108, 115, 112, 105, 0);
               let proxyx = 4.0;
               let footballB = 0.0;
               let overc = String.fromCharCode(115, 113, 108, 105, 116, 101, 99, 104, 97, 110, 103, 101, 115, 101, 116, 95, 122, 95, 57, 52, 0);
               rewinda += "1";
               overc = `${(String.fromCharCode(72, 0) == overc ? overc.length : overc.length)}`;
               let themeZ = 4.0;
               let store_ = 3.0;
               if (3 >= (downN / 2) && 4 >= (rewinda.length / 2)) {
                  let productJ = 5.0;
                  rewinda += `${tooltips6.length}`;
                  productJ -= parseFloat(`${3 - parseInt(`${productJ}`)}`);
               }
               downN /= Math.max(parseInt(`${themeZ}`) >> (Math.min(Math.abs(3), 3)), 1);
               let privilege6: Array<any> = [664, 459, 835];
               benefitN += `${(String.fromCharCode(104, 0) == tooltips6 ? parseInt(`${proxyx}`) : tooltips6.length)}`;
               privilege6 = [privilege6.length];
               for (let p = 0; p < 1; p++) {
                  benefitN = `${parseInt(`${store_}`)}`;
               }
               benefitN += `${parseInt(`${themeZ}`) % 2}`;
               for (let e = 0; e < 1; e++) {
                  let videocommoni = true;
                  let showZ = 1.0;
                  let scoreb = true;
                  let resendq = 0.0;
                  let downv = 0;
                  progressD = `${progressD.length}`;
                  videocommoni = !videocommoni;
                  showZ /= Math.max(2, parseFloat(`${parseInt(`${resendq}`) >> (Math.min(2, Math.abs(3)))}`));
                  scoreb = 39.56 >= showZ || scoreb;
                  resendq -= 3 & downv;
                  downv /= Math.max(3, parseInt(`${resendq}`) << (Math.min(4, Math.abs(1))));
               }
               themeZ += tooltips6.length;
               sideA ^= valuesE & detailsx.length;
            }
            setIsBtnEnable(true);
         } else {

            let configuret = String.fromCharCode(108, 95, 57, 95, 115, 116, 114, 117, 99, 116, 117, 114, 97, 108, 0);
            while (4 <= configuret.length) {
               configuret = `${configuret.length / 3}`;
               break;
            }
            configuret = `${3 % (Math.max(1, configuret.length))}`;
            let footballE = 2.0;
            routert = `${valuesE}`;
            if (championu.startsWith(`${basketballF.length}`)) {
               basketballF.push(1);
            }


            while (1 > (4 >> (Math.min(4, routert.length))) || (routert.length >> (Math.min(Math.abs(4), 3))) > 1) {
               routert += `${basketballX.length}`;
               break;
            }
            for (let h = 0; h < 2; h++) {
               detailsx = `${2 - detailsx.length}`;
            }


            detailsx = "2";
            if ((basketballX.length | 4) < 4 || (placeholder9.length | 4) < 3) {
               let traminir = 0.0;
               let strf = 2.0;
               let flyer4 = false;
               let clearj = String.fromCharCode(102, 111, 115, 115, 105, 108, 95, 49, 95, 49, 51, 0);
               let backn = String.fromCharCode(114, 103, 116, 99, 117, 95, 53, 95, 49, 56, 0);
               traminir -= ((flyer4 ? 1 : 5) << (Math.min(Math.abs(parseInt(`${strf}`)), 5)));
               flyer4 = clearj == String.fromCharCode(77, 0) && 71 <= backn.length;
               clearj = `${3 + backn.length}`;
               strf *= parseInt(`${traminir}`) / (Math.max(parseInt(`${strf}`), 7));
               while ((traminir - strf) < 1.43 || 4.59 < (1.43 - strf)) {
                  let baidu6 = String.fromCharCode(115, 116, 97, 110, 100, 97, 114, 100, 95, 117, 95, 51, 55, 0);
                  let bnewsM = String.fromCharCode(119, 101, 108, 108, 95, 99, 95, 54, 53, 0);
                  let headers: Map<any, any> = new Map([[String.fromCharCode(98, 95, 50, 55, 95, 119, 114, 105, 116, 101, 108, 111, 99, 107, 0), 697], [String.fromCharCode(102, 100, 99, 116, 95, 118, 95, 50, 56, 0), 211]]);
                  let lights = false;
                  strf /= Math.max(2 + parseInt(`${traminir}`), 1);
                  baidu6 += "3";
                  bnewsM += "2";
                  headers.set(bnewsM, (bnewsM.length ^ (lights ? 4 : 2)));
                  break;
               }
               if ((traminir - strf) <= 1.50) {
                  traminir += parseInt(`${strf}`) << (Math.min(4, Math.abs(3)));
               }
               while (strf >= 2.88) {
                  strf += parseInt(`${strf}`) - 1;
                  break;
               }
               if ((strf * 2) == 1.58) {
                  traminir /= Math.max(4, parseInt(`${traminir}`) | parseInt(`${strf}`));
               }
               basketballX = `${routert.length}`;
            }
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
         platform: APP_NAME_FOR_API + "-" + Platform.OS.toUpperCase(),
         channel_transaction_id: currentPurchase?.transactionId,
         transaction_receipt: currentPurchase
            ? JSON.stringify(currentPurchase.transactionReceipt)
            : error.toString(),
         transaction_status: parseInt(transStatus),
         is_sb: __DEV__ ? 1 : 0,
      };
      console.log("iap json posted: ", iapTrans);



      const result = await yys_SubsPlus.postValidateReceipt(iapTrans);

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
         const result = await yys_SubsPlus.postAndroidSubscriptions(subsTrans);
         console.log("validate subscription result");
         console.log(result);
         return result.success;
      } catch (err) {
         let tempg = 1;
         let unselected3 = 5;
         let attributedstringn: Array<any> = [780, 220, 444];
         let animationD = 5.0;
         let assistp = 0.0;
         let textA: Array<any> = [373, 361];
         let searchY = String.fromCharCode(114, 101, 118, 97, 108, 105, 100, 97, 116, 105, 111, 110, 95, 57, 95, 55, 52, 0);
         let window_drT = 5;
         let math5 = 4;
         let constantsc = 5.0;
         let libcxxcomponentsM = 2.0;
         assistp += parseFloat(`${tempg % (Math.max(attributedstringn.length, 5))}`);
         window_drT <<= Math.min(4, Math.abs(unselected3));
         unselected3 &= 1;
         assistp /= Math.max(parseFloat(`${math5 & 1}`), 2);
         if ((attributedstringn.length ^ unselected3) == 4) {
            let reducery: Map<any, any> = new Map([[String.fromCharCode(112, 115, 104, 95, 110, 95, 56, 48, 0), 923], [String.fromCharCode(108, 95, 51, 54, 0), 616]]);
            let imagemanagerw = false;
            let readJ: Map<any, any> = new Map([[String.fromCharCode(121, 95, 51, 53, 95, 115, 97, 109, 112, 108, 101, 114, 0), 779], [String.fromCharCode(105, 95, 52, 53, 95, 98, 114, 97, 110, 100, 115, 0), 885], [String.fromCharCode(98, 111, 114, 100, 101, 114, 101, 100, 95, 105, 95, 51, 48, 0), 775]]);
            reducery.set(`${imagemanagerw}`, ((imagemanagerw ? 1 : 3) / (Math.max(reducery.size, 6))));
            readJ.set(`${readJ.size}`, readJ.size * 3);
            let textinpute = 0.0;
            let with_u4b = 0.0;
            let forward9 = 4;
            let bannert = false;
            let libtanz = true;
            imagemanagerw = textinpute <= 52.28 && bannert;
            forward9 *= forward9;
            bannert = libtanz || 71 == forward9;
            libtanz = 100 <= forward9;
            let sourceU = imagemanagerw ? !imagemanagerw : imagemanagerw;
            do {
               imagemanagerw = (textinpute / (Math.max(4, with_u4b))) > 28.100;
               if (sourceU) {
                  break;
               }
            } while ((2.79 > (2.32 * textinpute)) && sourceU);
            let configureS = String.fromCharCode(112, 114, 105, 109, 101, 95, 122, 95, 57, 53, 0);
            let sharedu = true;
            with_u4b += parseFloat(`${parseInt(`${textinpute}`) >> (Math.min(1, Math.abs(3)))}`);
            configureS += `${((sharedu ? 5 : 4))}`;
            sharedu = (29 <= (configureS.length & (!sharedu ? 29 : configureS.length)));
            reducery.set(`${imagemanagerw}`, ((imagemanagerw ? 4 : 5) / (Math.max(parseInt(`${textinpute}`), 9))));
            unselected3 ^= (searchY == String.fromCharCode(76, 0) ? searchY.length : (imagemanagerw ? 2 : 5));
         }
         for (let t = 0; t < 1; t++) {
            animationD /= Math.max(1, 1);
         }
         let closeE = 0.0;
         let darke = 2;
         closeE /= Math.max(parseFloat(`${parseInt(`${closeE}`) | 3}`), 5);
         closeE -= parseFloat(`${1 / (Math.max(4, darke))}`);
         while (3.53 <= (2.2 + closeE)) {
            let baiduy: Array<any> = [782, 110];
            let rewardk = 5.0;
            let countryS = 2.0;
            let usernamek = String.fromCharCode(97, 100, 109, 105, 110, 115, 95, 110, 95, 51, 50, 0);
            closeE *= parseFloat(`${2 - parseInt(`${rewardk}`)}`);
            baiduy = [baiduy.length + parseInt(`${countryS}`)];
            rewardk /= Math.max(parseFloat(`${usernamek.length - 1}`), 2);
            countryS -= 2;
            usernamek += `${usernamek.length}`;
            break;
         }
         if (closeE < darke) {
            darke &= parseInt(`${closeE}`) / (Math.max(6, darke));
         }
         if (1.18 == closeE) {
            closeE /= Math.max(2, parseFloat(`${2}`));
         }
         darke >>= Math.min(Math.abs(parseInt(`${closeE}`) + 1), 3);
         attributedstringn = [parseInt(`${constantsc}`)];
         let tempZ = true;
         let whistleM = 4.0;
         let applicationC = String.fromCharCode(112, 101, 114, 115, 105, 115, 116, 101, 110, 116, 95, 99, 95, 57, 48, 0);
         for (let i = 0; i < 2; i++) {
            tempZ = 99 > applicationC.length;
         }
         if ((applicationC.length + parseInt(`${whistleM}`)) == 3) {
            whistleM -= parseFloat(`${parseInt(`${whistleM}`) << (Math.min(Math.abs(1), 3))}`);
         }
         if (3.53 < (4.60 - whistleM)) {
            tempZ = parseInt(`${whistleM}`) == applicationC.length;
         }
         let stationr = 4.0;
         if (1 < (parseInt(`${whistleM}`) / (Math.max(9, applicationC.length)))) {
            whistleM /= Math.max(5, parseFloat(`${parseInt(`${whistleM}`) * 3}`));
         }
         if (stationr > 1.100) {
            applicationC += `${(parseInt(`${stationr}`) & (tempZ ? 2 : 3))}`;
         }
         for (let r = 0; r < 1; r++) {
            let episodesR = 5.0;
            let cornerG: Array<any> = [340, 886, 25];
            let gcopy_h4: Array<any> = [817, 803, 578];
            let vietnamd = 4;
            stationr /= Math.max((parseInt(`${whistleM}`) >> (Math.min(4, Math.abs((tempZ ? 2 : 4))))), 4);
            episodesR /= Math.max(1, 1 << (Math.min(1, gcopy_h4.length)));
            cornerG.push(gcopy_h4.length >> (Math.min(Math.abs(3), 1)));
            vietnamd *= 1 & cornerG.length;
         }
         let executory: Array<any> = [406, 880];
         let libfbjnip: Array<any> = [String.fromCharCode(110, 101, 119, 101, 114, 95, 112, 95, 49, 54, 0), String.fromCharCode(100, 105, 109, 101, 110, 115, 105, 111, 110, 115, 95, 115, 95, 57, 57, 0)];
         let next6 = stationr >= 6721622.0;
         do {
            let ballG = 0.0;
            let showm = 4;
            let runtimeschedulerg: Map<any, any> = new Map([[String.fromCharCode(119, 95, 50, 54, 95, 101, 120, 112, 114, 101, 115, 115, 0), 604], [String.fromCharCode(99, 104, 112, 108, 95, 111, 95, 55, 53, 0), 815]]);
            stationr *= parseInt(`${whistleM}`) & runtimeschedulerg.size;
            ballG -= parseFloat(`${parseInt(`${ballG}`) * 2}`);
            showm /= Math.max(5, showm);
            runtimeschedulerg.set(`${ballG}`, parseInt(`${ballG}`) | showm);
            if (next6) {
               break;
            }
         } while (((1.10 / (Math.max(3, whistleM))) <= 1.51 && 1.49 <= (whistleM / (Math.max(1.10, 8)))) && next6);
         animationD -= 2;
         for (let h = 0; h < 3; h++) {
            let libswscaleh = 3.0;
            let shrinkD = true;
            let detaily = 5;
            if (!shrinkD) {
               detaily ^= 3;
            }
            libswscaleh /= Math.max(detaily | parseInt(`${libswscaleh}`), 5);
            libswscaleh /= Math.max(5, 2);
            let aboutC = libswscaleh <= 7520132.0;
            do {
               let minivodw = false;
               libswscaleh -= (3 - (minivodw ? 1 : 2));
               if (aboutC) {
                  break;
               }
            } while (aboutC && (!shrinkD));
            let sidel = libswscaleh <= 9406588.0;
            do {
               libswscaleh *= 2;
               if (sidel) {
                  break;
               }
            } while (sidel && (libswscaleh < 2.30 && (libswscaleh / 2.30) < 4.98));
            shrinkD = 63 == detaily;
            for (let g = 0; g < 2; g++) {
               shrinkD = libswscaleh > 6.31;
            }
            let neon0 = 1;
            let detail0 = 4.0;
            assistp /= Math.max((parseFloat(`${1 << (Math.min(3, Math.abs((shrinkD ? 1 : 5))))}`)), 5);
         }
         for (let c = 0; c < 2; c++) {
            animationD -= 3 * parseInt(`${constantsc}`);
         }
         if (unselected3 > 4) {
            unselected3 %= Math.max(4, 2 >> (Math.min(Math.abs(math5), 1)));
         }
         while (4.30 < (constantsc * 5.67)) {
            constantsc += parseInt(`${assistp}`);
            break;
         }
         while (constantsc <= 5.66) {
            searchY += `${window_drT % (Math.max(attributedstringn.length, 5))}`;
            break;
         }
         let index_ = 1;
         let proxy2: Array<any> = [String.fromCharCode(99, 111, 110, 116, 114, 111, 108, 115, 95, 57, 95, 51, 53, 0), String.fromCharCode(119, 95, 56, 55, 95, 98, 112, 117, 116, 115, 0), String.fromCharCode(115, 99, 111, 112, 101, 95, 103, 95, 50, 51, 0)];
         if (proxy2.length == 2) {
            proxy2 = [index_ * 1];
         }
         for (let y = 0; y < 2; y++) {
            let refresh9 = String.fromCharCode(117, 95, 51, 55, 95, 99, 116, 120, 116, 0);
            proxy2 = [2];
            refresh9 += "1";
         }
         if ((index_ << (Math.min(proxy2.length, 5))) < 1) {
            let selected7 = 5.0;
            let termsV = String.fromCharCode(104, 95, 55, 50, 95, 117, 115, 101, 114, 110, 97, 109, 101, 0);
            let rewindC = 3;
            let e_positionw = String.fromCharCode(99, 111, 100, 101, 99, 112, 114, 105, 118, 97, 116, 101, 95, 110, 95, 51, 55, 0);
            index_ *= 1;
            selected7 /= Math.max(1 - rewindC, 2);
            termsV += "2";
            rewindC -= rewindC;
            e_positionw += `${2 << (Math.min(Math.abs(rewindC), 4))}`;
         }
         let placeholderF = index_ <= 5205596;
         do {
            let hongkong1 = 3.0;
            let viewerm = 5;
            let views7 = 4;
            index_ /= Math.max(4, parseInt(`${hongkong1}`));
            hongkong1 *= 1 + views7;
            viewerm += 1;
            views7 <<= Math.min(Math.abs(viewerm), 2);
            if (placeholderF) {
               break;
            }
         } while (placeholderF && (index_ == 1));
         let pageG = String.fromCharCode(103, 101, 110, 101, 114, 97, 103, 101, 95, 115, 95, 53, 53, 0);
         proxy2 = [proxy2.length];
         math5 /= Math.max(4, parseInt(`${animationD}`));
         if (5 <= (searchY.length >> (Math.min(1, attributedstringn.length))) || 2 <= (5 >> (Math.min(5, searchY.length)))) {
            attributedstringn = [3 | parseInt(`${animationD}`)];
         }
         let xcopy__A = libcxxcomponentsM <= 9751946.0;
         do {
            libcxxcomponentsM -= 2;
            if (xcopy__A) {
               break;
            }
         } while (((searchY.length << (Math.min(Math.abs(4), 3))) <= 3 && 2 <= (searchY.length + 4)) && xcopy__A);

         console.log('post android subscription error: ', err);

         textA.push(searchY.length);
         for (let l = 0; l < 3; l++) {
            math5 *= parseInt(`${animationD}`) % (Math.max(searchY.length, 7));
         }
         libcxxcomponentsM /= Math.max(5, parseInt(`${libcxxcomponentsM}`) >> (Math.min(1, Math.abs(1))));
         if (math5 >= constantsc) {
            let selectionm = 4;
            let selectionE = String.fromCharCode(102, 95, 57, 56, 95, 116, 114, 97, 110, 115, 108, 97, 116, 105, 111, 110, 115, 0);
            let floaterU = selectionE.length <= 7620649;
            do {
               selectionE = `${selectionm << (Math.min(Math.abs(3), 4))}`;
               if (floaterU) {
                  break;
               }
            } while ((selectionE.length < selectionm) && floaterU);
            let trophyt = String.fromCharCode(101, 98, 117, 114, 95, 116, 95, 55, 54, 0);
            let sortN = String.fromCharCode(114, 101, 108, 111, 99, 107, 95, 102, 95, 54, 49, 0);
            constantsc /= Math.max(2, searchY.length);
         }
         searchY = `${1 + parseInt(`${animationD}`)}`;
         for (let j = 0; j < 2; j++) {
            searchY += "1";
         }
         let update__dW = math5 >= 6434660;
         do {
            math5 |= parseInt(`${libcxxcomponentsM}`);
            if (update__dW) {
               break;
            }
         } while (update__dW && (3 >= (tempg + math5)));
         constantsc -= textA.length;
         window_drT /= Math.max(3, 5);
         let libreanimatedJ = 5272574 <= math5;
         do {
            math5 *= attributedstringn.length >> (Math.min(Math.abs(1), 4));
            if (libreanimatedJ) {
               break;
            }
         } while (libreanimatedJ && ((4.93 - constantsc) > 5.12 || (4.93 - constantsc) > 1.79));
         let unticki = 2;
         let libreactnativeblobj = 0.0;
         while ((libreactnativeblobj - 2.59) >= 2.17 && (2.59 - libreactnativeblobj) >= 4.47) {
            unticki %= Math.max(1 - parseInt(`${libreactnativeblobj}`), 2);
            break;
         }
         if ((1 << (Math.min(2, Math.abs(unticki)))) < 1) {
            let chinak: Map<any, any> = new Map([[String.fromCharCode(116, 95, 52, 48, 95, 115, 101, 116, 117, 112, 105, 110, 116, 114, 97, 114, 101, 99, 111, 110, 0), 203], [String.fromCharCode(99, 104, 101, 99, 107, 115, 95, 110, 95, 52, 53, 0), 774]]);
            let libjsijniprofilerK = String.fromCharCode(97, 117, 100, 105, 111, 100, 97, 116, 97, 95, 56, 95, 55, 55, 0);
            let tickedp = false;
            let plashq = String.fromCharCode(101, 118, 101, 110, 95, 110, 95, 53, 56, 0);
            unticki <<= Math.min(4, Math.abs(2));
            chinak.set(plashq, plashq.length + libjsijniprofilerK.length);
            libjsijniprofilerK += "1";
            tickedp = libjsijniprofilerK.length > 75;
         }
         unticki %= Math.max(parseInt(`${libreactnativeblobj}`), 1);
         for (let f = 0; f < 3; f++) {
            unticki >>= Math.min(Math.abs(2), 2);
         }
         let gpayS = String.fromCharCode(102, 95, 52, 52, 95, 116, 104, 114, 111, 116, 116, 108, 101, 100, 0);
         let thumbnailp: Map<any, any> = new Map([[String.fromCharCode(107, 95, 50, 54, 95, 105, 110, 116, 101, 114, 112, 111, 108, 97, 116, 101, 100, 0), 728], [String.fromCharCode(119, 111, 114, 107, 105, 110, 103, 95, 116, 95, 51, 57, 0), 372], [String.fromCharCode(116, 101, 115, 116, 105, 109, 103, 97, 114, 105, 95, 99, 95, 54, 48, 0), 677]]);
         unticki <<= Math.min(Math.abs(2), 2);
         gpayS = `${(gpayS == String.fromCharCode(82, 0) ? thumbnailp.size : gpayS.length)}`;
         thumbnailp.set(gpayS, 1 << (Math.min(4, gpayS.length)));
         while (libreactnativeblobj == unticki) {
            unticki &= parseInt(`${libreactnativeblobj}`);
            break;
         }
         tempg %= Math.max(2 % (Math.max(parseInt(`${libcxxcomponentsM}`), 3)), 2);
         while (1 == (attributedstringn.length / 1)) {
            let indexi = 2;
            let searchbarT: Map<any, any> = new Map([[String.fromCharCode(108, 95, 53, 95, 101, 98, 117, 108, 97, 115, 0), true], [String.fromCharCode(99, 111, 100, 101, 99, 112, 114, 105, 118, 97, 116, 101, 95, 116, 95, 51, 56, 0), true]]);
            let encryptq: Map<any, any> = new Map([[String.fromCharCode(108, 111, 111, 107, 97, 115, 105, 100, 101, 95, 119, 95, 50, 50, 0), 383], [String.fromCharCode(101, 95, 56, 57, 95, 100, 117, 112, 101, 100, 0), 597], [String.fromCharCode(100, 95, 50, 95, 109, 97, 112, 112, 97, 98, 108, 101, 0), 751]]);
            let libswresampleF = String.fromCharCode(103, 95, 51, 57, 95, 100, 105, 115, 112, 115, 97, 98, 108, 101, 0);
            let benefity = 4.0;
            let mapbufferj = 1.0;
            let moden = String.fromCharCode(110, 101, 116, 95, 111, 95, 52, 55, 0);
            let brightnessX: Array<any> = [736, 952];
            indexi <<= Math.min(Math.abs(3), 4);
            mapbufferj /= Math.max(1, parseFloat(`${2}`));
            moden = `${1 & moden.length}`;
            brightnessX = [moden.length];
            libswresampleF += `${searchbarT.size - parseInt(`${benefity}`)}`;
            let blackq = 3.0;
            libswresampleF += `${parseInt(`${blackq}`) / (Math.max(libswresampleF.length, 9))}`;
            let backgroundF = 3;
            let collectionx = String.fromCharCode(97, 114, 99, 104, 105, 116, 101, 99, 116, 117, 114, 101, 95, 98, 95, 50, 51, 0);
            let comment8: Map<any, any> = new Map([[String.fromCharCode(99, 95, 49, 55, 95, 100, 101, 115, 99, 0), String.fromCharCode(115, 117, 98, 115, 116, 97, 116, 101, 95, 114, 95, 53, 54, 0)], [String.fromCharCode(108, 95, 51, 55, 95, 115, 121, 110, 111, 110, 121, 109, 0), String.fromCharCode(115, 105, 103, 110, 97, 98, 108, 101, 95, 106, 95, 54, 50, 0)], [String.fromCharCode(103, 95, 56, 95, 104, 117, 102, 102, 121, 117, 118, 101, 110, 99, 100, 115, 112, 0), String.fromCharCode(112, 114, 105, 111, 114, 105, 116, 121, 95, 110, 95, 54, 0)]]);
            encryptq = new Map([[`${comment8.size}`, 1]]);
            backgroundF <<= Math.min(4, collectionx.length);
            collectionx = `${backgroundF | collectionx.length}`;
            comment8 = new Map([[collectionx, backgroundF % (Math.max(3, 9))]]);
            let types9 = 8992071 <= searchbarT.size;
            do {
               searchbarT = new Map([[`${indexi}`, indexi]]);
               if (types9) {
                  break;
               }
            } while ((3 > (searchbarT.size - encryptq.size) && 4 > (3 - encryptq.size)) && types9);
            for (let f = 0; f < 2; f++) {
               searchbarT.set(`${searchbarT.size}`, searchbarT.size & 3);
            }
            if ((encryptq.size + 3) == 4 || 5 == (3 + libswresampleF.length)) {
               let taiwane = String.fromCharCode(102, 95, 55, 50, 95, 99, 111, 109, 112, 0);
               let floatingh = 5.0;
               let volumez = String.fromCharCode(97, 99, 116, 97, 98, 95, 106, 95, 54, 54, 0);
               let sellw = true;
               let encrypth = 1;
               libswresampleF += `${parseInt(`${floatingh}`) % (Math.max(2, taiwane.length))}`;
               taiwane += `${((sellw ? 4 : 5) * volumez.length)}`;
               floatingh += 1;
               volumez = `${((sellw ? 2 : 4))}`;
               encrypth /= Math.max(volumez.length | 3, 5);
            }
            for (let t = 0; t < 2; t++) {
               indexi /= Math.max(4, indexi << (Math.min(Math.abs(2), 2)));
            }
            for (let o = 0; o < 1; o++) {
               benefity -= parseFloat(`${parseInt(`${benefity}`)}`);
            }
            indexi |= indexi;
            indexi <<= Math.min(1, Math.abs(3));
            while ((benefity - parseFloat(`${libswresampleF.length}`)) <= 5.11) {
               libswresampleF = `${1 - encryptq.size}`;
               break;
            }
            for (let z = 0; z < 3; z++) {
               let internet2 = false;
               let expiredv: Map<any, any> = new Map([[String.fromCharCode(98, 95, 57, 52, 95, 110, 97, 118, 105, 103, 97, 116, 101, 0), 860], [String.fromCharCode(97, 117, 103, 109, 101, 110, 116, 95, 116, 95, 53, 57, 0), 235]]);
               let recommendationq = 5.0;
               let arrowt = String.fromCharCode(116, 104, 117, 109, 98, 110, 97, 105, 108, 115, 95, 100, 95, 52, 0);
               let layouta = String.fromCharCode(115, 95, 56, 51, 95, 98, 117, 110, 100, 108, 101, 115, 0);
               benefity -= parseFloat(`${2}`);
               internet2 = 8 == layouta.length;
               expiredv.set(arrowt, (String.fromCharCode(75, 0) == arrowt ? arrowt.length : parseInt(`${recommendationq}`)));
               recommendationq /= Math.max((arrowt == String.fromCharCode(85, 0) ? expiredv.size : arrowt.length), 5);
               layouta += `${arrowt.length}`;
            }
            while (1 > (searchbarT.size % (Math.max(encryptq.size, 1))) || (encryptq.size % 1) > 2) {
               let flyerS = false;
               encryptq = new Map([[`${encryptq.size}`, libswresampleF.length]]);
               flyerS = (!flyerS ? flyerS : !flyerS);
               break;
            }
            let sportsV = String.fromCharCode(103, 52, 116, 51, 0) == libswresampleF;
            do {
               libswresampleF += `${encryptq.size}`;
               if (sportsV) {
                  break;
               }
            } while (sportsV && (5.78 < benefity));
            attributedstringn.push(unselected3 | 1);
            break;
         }
         attributedstringn = [3];
         constantsc *= parseInt(`${animationD}`) & 3;
         let mappingn: Map<any, any> = new Map([[String.fromCharCode(99, 111, 109, 112, 105, 108, 101, 114, 95, 114, 95, 56, 0), false], [String.fromCharCode(113, 95, 54, 53, 95, 100, 111, 99, 108, 105, 115, 116, 0), false], [String.fromCharCode(99, 95, 52, 48, 95, 104, 97, 110, 100, 111, 118, 101, 114, 0), true]]);
         mappingn = new Map([[`${mappingn.size}`, mappingn.size * mappingn.size]]);
         while (2 > (3 ^ mappingn.size) || 5 > (3 ^ mappingn.size)) {
            mappingn = new Map([[`${mappingn.size}`, 1]]);
            break;
         }
         let coreC = 6691900 >= mappingn.size;
         do {
            let xadsdk5 = 0;
            let scheduler3 = String.fromCharCode(116, 95, 50, 49, 95, 100, 101, 115, 99, 114, 105, 112, 116, 111, 114, 0);
            let episodest = String.fromCharCode(120, 112, 114, 118, 95, 101, 95, 54, 52, 0);
            mappingn = new Map([[scheduler3, scheduler3.length & episodest.length]]);
            xadsdk5 -= xadsdk5 >> (Math.min(Math.abs(1), 5));
            if (coreC) {
               break;
            }
         } while (coreC && (2 <= (5 & mappingn.size)));
         tempg ^= 2;
         unselected3 -= 2;
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
         let description_7am = String.fromCharCode(99, 118, 105, 100, 95, 53, 95, 55, 49, 0);
         let libreactnativeblob2 = 0.0;
         let store5: Map<any, any> = new Map([[String.fromCharCode(114, 101, 109, 105, 120, 105, 110, 103, 95, 116, 95, 55, 48, 0), true], [String.fromCharCode(101, 112, 105, 115, 111, 100, 101, 95, 102, 95, 50, 55, 0), false], [String.fromCharCode(115, 117, 98, 106, 101, 99, 116, 115, 95, 120, 95, 53, 53, 0), true]]);
         let projectp = String.fromCharCode(114, 95, 51, 55, 95, 97, 98, 115, 120, 0);
         let buffer3 = 3;
         let moon5 = false;
         let settingsy = String.fromCharCode(102, 95, 54, 55, 95, 101, 109, 98, 101, 100, 0);
         let libtanP: Map<any, any> = new Map([[String.fromCharCode(99, 111, 114, 114, 101, 108, 97, 116, 105, 111, 110, 95, 106, 95, 50, 50, 0), 460], [String.fromCharCode(119, 95, 56, 56, 95, 115, 105, 103, 110, 105, 102, 105, 99, 97, 110, 99, 101, 0), 234]]);
         let selectV: Map<any, any> = new Map([[String.fromCharCode(113, 95, 52, 51, 95, 103, 112, 111, 115, 116, 102, 105, 108, 116, 101, 114, 0), String.fromCharCode(118, 95, 53, 56, 95, 108, 98, 108, 0)], [String.fromCharCode(114, 101, 103, 97, 116, 104, 101, 114, 105, 110, 103, 95, 54, 95, 52, 0), String.fromCharCode(116, 97, 98, 108, 101, 112, 114, 105, 110, 116, 95, 108, 95, 56, 56, 0)], [String.fromCharCode(102, 114, 111, 109, 98, 121, 116, 101, 97, 114, 114, 97, 121, 95, 114, 95, 50, 57, 0), String.fromCharCode(117, 116, 118, 105, 100, 101, 111, 100, 115, 112, 95, 99, 95, 56, 50, 0)]]);
         let stats4 = 5.0;
         let connectionE = 1.0;
         let ball0 = String.fromCharCode(114, 95, 53, 55, 95, 114, 101, 99, 111, 103, 110, 105, 116, 105, 111, 110, 0);
         let list1 = String.fromCharCode(122, 95, 53, 52, 95, 97, 118, 97, 116, 97, 114, 0);
         let bingW = String.fromCharCode(117, 95, 49, 95, 102, 116, 118, 100, 111, 99, 0);
         if (3 <= libtanP.size) {
            let productR = 5.0;
            let dialogW = false;
            dialogW = 12.62 > productR;
            dialogW = !dialogW;
            libtanP.set(`${libreactnativeblob2}`, settingsy.length);
         }

         if (currentPurchase) {

            for (let q = 0; q < 2; q++) {
               stats4 *= (parseFloat(`${libtanP.size - (moon5 ? 5 : 1)}`));
            }
            console.log("-------Current Purchase------------");

            description_7am = `${(settingsy == String.fromCharCode(98, 0) ? libtanP.size : settingsy.length)}`;
            console.log(currentPurchase);

            if (Array.from(libtanP.keys()).includes(`${stats4}`)) {
               libtanP = new Map([[`${stats4}`, description_7am.length]]);
            }
            console.log(products.some(product => product.productId === currentPurchase.productId))

            let membership_ = libreactnativeblob2 <= 7345283.0;
            do {
               libreactnativeblob2 += description_7am.length / (Math.max(2, 1));
               if (membership_) {
                  break;
               }
            } while (((4.34 + libreactnativeblob2) < 5.17) && membership_);

            try {

               let injury5 = String.fromCharCode(102, 117, 110, 103, 105, 98, 108, 101, 115, 95, 105, 95, 57, 51, 0);
               injury5 += `${injury5.length}`;
               let moreM = 1;
               let plashe = 3;
               moreM -= injury5.length & 1;
               plashe <<= Math.min(Math.abs(plashe & plashe), 2);
               selectV.set(projectp, projectp.length);
               if (currentPurchase.transactionReceipt) {

                  while (1 == libtanP.size) {
                     moon5 = moon5 && description_7am.length == 67;
                     break;
                  }
                  const key = currentPurchase.transactionId?.concat("true");

                  while ((buffer3 & selectV.size) >= 4 || (buffer3 & selectV.size) >= 4) {
                     let infoS = String.fromCharCode(117, 95, 54, 55, 95, 100, 105, 115, 116, 97, 110, 99, 101, 0);
                     let injury2 = String.fromCharCode(99, 107, 115, 117, 109, 95, 57, 95, 56, 49, 0);
                     let codegend = String.fromCharCode(110, 111, 99, 111, 108, 115, 101, 116, 95, 100, 95, 50, 57, 0);
                     let largea = String.fromCharCode(112, 97, 121, 109, 97, 115, 116, 101, 114, 95, 105, 95, 50, 53, 0);
                     let football6 = 3;
                     let hongkongS = 1;
                     let libreactf = String.fromCharCode(108, 95, 52, 49, 95, 109, 101, 116, 97, 115, 111, 117, 110, 100, 0);
                     let pressureD = String.fromCharCode(99, 101, 110, 116, 114, 111, 105, 100, 115, 95, 48, 95, 56, 50, 0);
                     let libsentryz = pressureD == String.fromCharCode(103, 97, 108, 102, 0);
                     do {
                        let grayb = true;
                        let schedulerS: Array<any> = [289, 605, 858];
                        let plashV = false;
                        let selectedW = false;
                        let rootP: Array<any> = [String.fromCharCode(113, 95, 49, 48, 48, 95, 99, 108, 111, 115, 101, 100, 0), String.fromCharCode(115, 104, 111, 116, 95, 51, 95, 52, 51, 0), String.fromCharCode(116, 101, 108, 108, 97, 114, 95, 50, 95, 51, 55, 0)];
                        pressureD += `${hongkongS / (Math.max(libreactf.length, 5))}`;
                        grayb = !grayb && rootP.length < 8;
                        schedulerS = [(3 - (plashV ? 2 : 5))];
                        plashV = plashV && selectedW;
                        selectedW = schedulerS.length < 99;
                        rootP = [rootP.length >> (Math.min(Math.abs(1), 3))];
                        if (libsentryz) {
                           break;
                        }
                     } while (libsentryz && (5 > largea.length));
                     let acceptedE = 1.0;
                     let orientationV = 4.0;
                     orientationV -= parseFloat(`${infoS.length}`);
                     let expandn = 1.0;
                     let popupu = String.fromCharCode(113, 95, 57, 48, 95, 108, 105, 112, 98, 111, 97, 114, 100, 0);
                     let foregroundX: Map<any, any> = new Map([[String.fromCharCode(122, 95, 51, 57, 95, 109, 111, 111, 118, 0), 529], [String.fromCharCode(115, 121, 110, 116, 104, 101, 115, 105, 122, 101, 100, 95, 117, 95, 54, 0), 413]]);
                     infoS = `${injury2.length | 3}`;
                     expandn *= parseFloat(`${foregroundX.size << (Math.min(Math.abs(1), 2))}`);
                     popupu = `${(popupu == String.fromCharCode(56, 0) ? popupu.length : parseInt(`${expandn}`))}`;
                     foregroundX = new Map([[popupu, popupu.length * parseInt(`${expandn}`)]]);
                     for (let a = 0; a < 3; a++) {
                        let flipperl: Map<any, any> = new Map([[String.fromCharCode(99, 97, 109, 101, 114, 97, 95, 117, 95, 57, 56, 0), String.fromCharCode(97, 95, 51, 51, 95, 99, 111, 110, 116, 101, 120, 116, 117, 97, 108, 0)], [String.fromCharCode(109, 97, 105, 108, 116, 111, 95, 98, 95, 49, 56, 0), String.fromCharCode(114, 95, 51, 51, 95, 100, 105, 102, 0)], [String.fromCharCode(100, 95, 49, 56, 95, 110, 105, 98, 0), String.fromCharCode(112, 97, 99, 107, 101, 116, 104, 101, 97, 100, 101, 114, 95, 121, 95, 55, 53, 0)]]);
                        let listz = 4.0;
                        orientationV -= parseFloat(`${football6}`);
                        flipperl = new Map([[`${flipperl.size}`, parseInt(`${listz}`) >> (Math.min(Math.abs(flipperl.size), 3))]]);
                        listz /= Math.max(4, parseFloat(`${parseInt(`${listz}`) ^ flipperl.size}`));
                     }
                     infoS = `${pressureD.length}`;
                     libreactf += `${injury2.length & 2}`;
                     for (let g = 0; g < 1; g++) {
                        let darkD: Array<any> = [493, 57];
                        let emptys = 1.0;
                        let catalogn = String.fromCharCode(98, 95, 49, 48, 95, 115, 116, 111, 114, 101, 120, 0);
                        let buffer4 = 4.0;
                        let umeng5: Array<any> = [691, 581, 842];
                        libreactf = `${1 - darkD.length}`;
                        darkD = [(String.fromCharCode(102, 0) == catalogn ? catalogn.length : parseInt(`${emptys}`))];
                        emptys /= Math.max(4, umeng5.length % 2);
                        buffer4 *= parseInt(`${emptys}`) * 3;
                        umeng5 = [2];
                     }
                     codegend += `${3 | parseInt(`${acceptedE}`)}`;
                     selectV.set(`${settingsy}`, store5.size & 2);
                     break;
                  }

                  if (receiptBuffer.has(key)) {

                     for (let j = 0; j < 3; j++) {
                        let tailX = 1.0;
                        if (tailX == tailX) {
                           tailX /= Math.max(5, parseFloat(`${parseInt(`${tailX}`) - parseInt(`${tailX}`)}`));
                        }
                        while ((tailX + 2.39) < 3.3) {
                           tailX /= Math.max(4, parseFloat(`${parseInt(`${tailX}`) * parseInt(`${tailX}`)}`));
                           break;
                        }
                        let libswscaleF = String.fromCharCode(114, 101, 99, 118, 118, 95, 116, 95, 55, 54, 0);
                        let floatingN: Array<any> = [368, 645, 502];
                        let dplusd = String.fromCharCode(109, 95, 49, 95, 117, 110, 97, 114, 99, 104, 105, 118, 101, 0);
                        tailX += (parseFloat(`${String.fromCharCode(56, 0) == libswscaleF ? floatingN.length : libswscaleF.length}`));
                        floatingN.push(3);
                        libreactnativeblob2 *= parseInt(`${stats4}`) | 1;
                     }
                     console.log(
                        "duplicate transaction id: ",
                        currentPurchase.transactionId
                     );

                     if (!settingsy.endsWith(`${buffer3}`)) {
                        settingsy += `${((moon5 ? 1 : 5))}`;
                     }
                     await finishTransaction({
                        purchase: currentPurchase,
                        isConsumable: true,
                     });

                     for (let u = 0; u < 3; u++) {
                        libtanP = new Map([[`${libreactnativeblob2}`, parseInt(`${libreactnativeblob2}`)]]);
                     }
                     setIsVisible(false);

                     let kuaishouA = 4.0;
                     kuaishouA /= Math.max(parseFloat(`${parseInt(`${kuaishouA}`) / (Math.max(parseInt(`${kuaishouA}`), 8))}`), 4);
                     let window_nL = String.fromCharCode(97, 118, 102, 109, 116, 95, 98, 95, 55, 53, 0);
                     let floatingb = String.fromCharCode(110, 95, 52, 56, 95, 99, 99, 105, 116, 116, 0);
                     if (floatingb.length <= 2) {
                        floatingb += `${(floatingb == String.fromCharCode(74, 0) ? parseInt(`${kuaishouA}`) : floatingb.length)}`;
                     }
                     description_7am = `${store5.size}`;
                     setIsBtnEnable(true);

                     let calendarW = 6682139.0 <= libreactnativeblob2;
                     do {
                        let interstitialZ = String.fromCharCode(116, 105, 109, 101, 105, 110, 116, 101, 114, 118, 97, 108, 95, 109, 95, 50, 55, 0);
                        let megaphoneI = 0.0;
                        let clearS = String.fromCharCode(122, 95, 50, 57, 95, 114, 101, 98, 117, 99, 107, 101, 116, 0);
                        let liveO = false;
                        let type_6j = String.fromCharCode(105, 95, 49, 95, 100, 101, 115, 116, 111, 114, 121, 0);
                        let views0 = String.fromCharCode(107, 101, 121, 102, 114, 97, 109, 101, 95, 122, 95, 49, 54, 0);
                        interstitialZ = `${(parseInt(`${megaphoneI}`) + (liveO ? 2 : 1))}`;
                        liveO = (type_6j.length / (Math.max(9, views0.length))) < 50;
                        type_6j = `${views0.length / (Math.max(1, 5))}`;
                        megaphoneI /= Math.max(parseFloat(`${2 * parseInt(`${megaphoneI}`)}`), 1);
                        megaphoneI *= parseFloat(`${clearS.length ^ 1}`);
                        clearS = `${clearS.length}`;
                        let gmailJ = 9635766.0 <= megaphoneI;
                        do {
                           megaphoneI += parseFloat(`${interstitialZ.length}`);
                           if (gmailJ) {
                              break;
                           }
                        } while (((3.46 - megaphoneI) >= 5.44 || (interstitialZ.length - parseInt(`${megaphoneI}`)) >= 2) && gmailJ);
                        megaphoneI /= Math.max(parseFloat(`${clearS.length}`), 2);
                        let hooksA = 5.0;
                        hooksA *= parseInt(`${megaphoneI}`) % 2;
                        hooksA -= 3 ^ interstitialZ.length;
                        libreactnativeblob2 /= Math.max(settingsy.length, 1);
                        if (calendarW) {
                           break;
                        }
                     } while ((1.7 > (4.52 - libreactnativeblob2) && 4 > (parseInt(`${libreactnativeblob2}`) - libtanP.size)) && calendarW);
                     return;
                  }

                  setTimeout(() => setIsVisible(false), 10000);

                  libreactnativeblob2 += ((moon5 ? 4 : 2) << (Math.min(settingsy.length, 2)));

                  const isIAP = products.some(product => product.productId === currentPurchase.productId)

                  while (libtanP.get(`${buffer3}`) == null) {
                     libtanP = new Map([[`${libreactnativeblob2}`, parseInt(`${libreactnativeblob2}`)]]);
                     break;
                  }
                  const success = isIAP ?
                     await saveFinishIAP("detailExecutorFeedback", "") :
                     await saveFinishSubs(currentPurchase);

                  if (!moon5) {
                     moon5 = 26 == selectV.size;
                  }

                  setReceiptBuffer((prev) => {

                     buffer3 += parseInt(`${stats4}`) / (Math.max(parseInt(`${connectionE}`), 1));
                     const receipt = new Map(prev);

                     let overj = 9132312 >= selectV.size;
                     do {
                        let holderE = String.fromCharCode(119, 95, 52, 57, 95, 109, 105, 110, 105, 109, 117, 109, 0);
                        holderE = `${1 / (Math.max(5, holderE.length))}`;
                        let tooltips6 = String.fromCharCode(116, 95, 52, 56, 95, 101, 112, 105, 115, 111, 100, 101, 0);
                        let frame_kR = tooltips6 == String.fromCharCode(116, 98, 111, 51, 121, 106, 57, 114, 0);
                        do {
                           tooltips6 = "3";
                           if (frame_kR) {
                              break;
                           }
                        } while (frame_kR && (holderE.length == 3));
                        selectV.set(`${stats4}`, parseInt(`${stats4}`) + 3);
                        if (overj) {
                           break;
                        }
                     } while (overj && (1 >= (buffer3 / 3)));
                     receipt.set(currentPurchase.transactionId?.concat(success), success);

                     let info4 = String.fromCharCode(114, 101, 116, 114, 105, 101, 118, 101, 95, 115, 95, 52, 52, 0);
                     for (let x = 0; x < 2; x++) {
                        let downloadH = String.fromCharCode(103, 97, 109, 117, 116, 115, 95, 97, 95, 49, 52, 0);
                        let tail9: Map<any, any> = new Map([[String.fromCharCode(115, 99, 105, 105, 95, 100, 95, 49, 56, 0), 438], [String.fromCharCode(109, 97, 106, 111, 114, 95, 103, 95, 51, 57, 0), 376]]);
                        let libfollyh = String.fromCharCode(100, 101, 109, 111, 116, 101, 95, 109, 95, 50, 0);
                        let g_unlockS: Array<any> = [857, 849, 760];
                        info4 = `${info4.length}`;
                        downloadH = `${tail9.size * 2}`;
                        tail9 = new Map([[`${g_unlockS.length}`, (String.fromCharCode(76, 0) == libfollyh ? g_unlockS.length : libfollyh.length)]]);
                     }
                     while (1 >= info4.length) {
                        let androidy: Map<any, any> = new Map([[String.fromCharCode(112, 114, 111, 100, 117, 99, 116, 95, 104, 95, 54, 53, 0), 98], [String.fromCharCode(112, 97, 115, 115, 95, 100, 95, 50, 54, 0), 577]]);
                        let mailx = String.fromCharCode(99, 95, 50, 48, 95, 113, 117, 97, 100, 114, 97, 116, 105, 99, 0);
                        let appse = false;
                        info4 += `${3 >> (Math.min(1, Math.abs(androidy.size)))}`;
                        androidy = new Map([[`${appse}`, 3]]);
                        mailx = "1";
                        break;
                     }
                     info4 = `${1 >> (Math.min(5, info4.length))}`;
                     moon5 = ((store5.size * (moon5 ? 78 : store5.size)) == 78);
                     return receipt;
                  });

                  let ewardedk = moon5 ? !moon5 : moon5;
                  do {
                     moon5 = 9.17 == stats4;
                     if (ewardedk) {
                        break;
                     }
                  } while ((moon5) && ewardedk);

                  if (success) {

                     for (let o = 0; o < 1; o++) {
                        projectp += `${parseInt(`${stats4}`) >> (Math.min(1, Math.abs(parseInt(`${connectionE}`))))}`;
                     }
                     console.log('success ', success)

                     while ((4.41 + connectionE) == 3.19) {
                        connectionE *= 2;
                        break;
                     }
                     await finishTransaction({
                        purchase: currentPurchase,
                        isConsumable: isIAP,
                     });

                     let showr: Map<any, any> = new Map([[String.fromCharCode(114, 116, 112, 112, 108, 97, 121, 95, 49, 95, 50, 56, 0), String.fromCharCode(110, 101, 120, 116, 95, 52, 95, 49, 53, 0)], [String.fromCharCode(108, 111, 99, 107, 97, 98, 108, 101, 95, 111, 95, 52, 55, 0), String.fromCharCode(102, 114, 101, 101, 100, 117, 109, 112, 98, 117, 102, 102, 101, 114, 95, 50, 95, 53, 0)]]);
                     let stats8: Map<any, any> = new Map([[String.fromCharCode(105, 110, 118, 111, 108, 118, 101, 100, 95, 54, 95, 50, 54, 0), 993], [String.fromCharCode(114, 101, 112, 108, 97, 121, 101, 114, 95, 108, 95, 55, 51, 0), 600], [String.fromCharCode(109, 95, 53, 56, 95, 115, 97, 109, 112, 108, 101, 115, 0), 766]]);
                     let greenE = 2.0;
                     let utilsy = 1.0;
                     showr.set(`${showr.size}`, 2);
                     greenE -= parseFloat(`${parseInt(`${utilsy}`)}`);
                     for (let l = 0; l < 3; l++) {
                        showr = new Map([[`${stats8.size}`, stats8.size]]);
                     }
                     let baseP = 5266932 >= stats8.size;
                     do {
                        stats8 = new Map([[`${stats8.size}`, stats8.size / 2]]);
                        if (baseP) {
                           break;
                        }
                     } while ((!Array.from(stats8.keys()).includes(`${showr.size}`)) && baseP);
                     let catagoryq = String.fromCharCode(104, 95, 53, 95, 111, 112, 112, 111, 114, 116, 117, 110, 105, 115, 116, 105, 99, 97, 108, 108, 121, 0);
                     let reactnativejsJ = 0;
                     stats8.set(`${showr.size}`, showr.size * stats8.size);
                     catagoryq += `${reactnativejsJ * 1}`;
                     reactnativejsJ |= 2;
                     let configY = 5.0;
                     showr = new Map([[`${stats8.size}`, 1]]);
                     store5.set(`${stats4}`, 3);

                     showToast('successfully validate and finish the transaction');



                  } else {

                     settingsy = `${buffer3}`;
                     await finishTransaction({
                        purchase: currentPurchase,
                        isConsumable: isIAP,
                     });

                     while (2 <= (store5.size + parseInt(`${stats4}`))) {
                        store5.set(`${moon5}`, selectV.size);
                        break;
                     }

                     showToast('FAILED to validate and finish the transaction');



                  }
               }
            } catch (error) {

               let bingT = true;
               let matchS = false;
               let goal9 = String.fromCharCode(100, 101, 115, 116, 95, 105, 95, 51, 54, 0);
               for (let g = 0; g < 1; g++) {
                  let layoutp: Map<any, any> = new Map([[String.fromCharCode(105, 115, 110, 101, 103, 97, 116, 105, 118, 101, 95, 48, 95, 49, 52, 0), 742], [String.fromCharCode(100, 101, 99, 105, 109, 97, 108, 115, 95, 106, 95, 50, 55, 0), 443], [String.fromCharCode(121, 95, 54, 57, 95, 102, 105, 100, 99, 116, 0), 370]]);
                  let imagemanagerA = String.fromCharCode(119, 114, 105, 116, 101, 95, 56, 95, 50, 48, 0);
                  let expandg: Map<any, any> = new Map([[String.fromCharCode(104, 95, 55, 95, 99, 111, 110, 115, 111, 110, 97, 110, 116, 0), true], [String.fromCharCode(119, 95, 57, 56, 95, 112, 111, 115, 116, 101, 114, 0), false], [String.fromCharCode(99, 118, 105, 100, 95, 109, 95, 51, 56, 0), true]]);
                  let holderf: Array<any> = [476, 10, 879];
                  matchS = layoutp.size >= 35;
                  layoutp = new Map([[`${expandg.size}`, holderf.length]]);
                  imagemanagerA += "2";
                  expandg = new Map([[`${expandg.size}`, holderf.length]]);
               }
               while (!bingT) {
                  goal9 = `${((matchS ? 3 : 4) & 2)}`;
                  break;
               }
               goal9 = `${((matchS ? 3 : 3))}`;
               for (let y = 0; y < 3; y++) {
                  bingT = matchS || goal9.length < 100;
               }
               goal9 = `${goal9.length >> (Math.min(Math.abs(3), 2))}`;
               let hookk = 2.0;
               let malaysiaU = String.fromCharCode(104, 95, 51, 57, 95, 99, 111, 109, 112, 108, 105, 97, 110, 116, 0);
               let reducerg = true;
               matchS = (27 == (goal9.length + (!matchS ? goal9.length : 27)));
               hookk *= parseFloat(`${parseInt(`${hookk}`) << (Math.min(5, Math.abs(3)))}`);
               malaysiaU += `${((reducerg ? 2 : 5) << (Math.min(Math.abs(parseInt(`${hookk}`)), 2)))}`;
               reducerg = 13.58 <= hookk;
               matchS = goal9.length >= 89;
               let nalyticsw = String.fromCharCode(103, 97, 109, 109, 97, 118, 97, 108, 95, 49, 95, 49, 48, 0);
               let libzeusL = String.fromCharCode(109, 111, 100, 105, 102, 105, 99, 97, 116, 105, 111, 110, 115, 95, 55, 95, 49, 55, 0);
               let spinner4 = 4.0;
               settingsy += `${3 ^ parseInt(`${libreactnativeblob2}`)}`;
               if (error instanceof PurchaseError) {

                  moon5 = 63 > settingsy.length;
                  console.error("purchasing error: " + error);
               } else {

                  if (moon5 && settingsy.length > 4) {
                     let orientationC = 0.0;
                     let hejiY = 0.0;
                     let mbnativew = String.fromCharCode(109, 112, 101, 103, 97, 117, 100, 105, 111, 100, 97, 116, 97, 95, 51, 95, 57, 52, 0);
                     let leftl: Map<any, any> = new Map([[String.fromCharCode(99, 97, 110, 99, 101, 108, 108, 101, 100, 95, 111, 95, 55, 56, 0), String.fromCharCode(118, 98, 101, 122, 105, 101, 114, 95, 119, 95, 55, 51, 0)], [String.fromCharCode(101, 95, 56, 52, 95, 117, 112, 100, 97, 116, 101, 0), String.fromCharCode(121, 95, 52, 51, 95, 102, 105, 102, 97, 0)], [String.fromCharCode(116, 97, 103, 97, 118, 114, 95, 99, 95, 54, 0), String.fromCharCode(115, 95, 52, 54, 95, 101, 120, 116, 114, 101, 109, 101, 0)]]);
                     let movies_ = String.fromCharCode(102, 95, 54, 56, 95, 112, 111, 108, 108, 0);
                     hejiY -= movies_.length ^ parseInt(`${hejiY}`);
                     leftl = new Map([[`${leftl.size}`, 1]]);
                     movies_ += `${leftl.size + 3}`;
                     orientationC += parseFloat(`${parseInt(`${orientationC}`) & 2}`);
                     for (let i = 0; i < 1; i++) {
                        hejiY *= mbnativew.length;
                     }
                     for (let h = 0; h < 1; h++) {
                        let networkg = 4;
                        let renderx = String.fromCharCode(109, 115, 109, 112, 101, 103, 100, 97, 116, 97, 95, 111, 95, 57, 49, 0);
                        let classes0: Map<any, any> = new Map([[String.fromCharCode(118, 97, 108, 105, 100, 97, 116, 111, 114, 115, 95, 52, 95, 57, 0), String.fromCharCode(111, 115, 116, 104, 114, 101, 97, 100, 115, 95, 104, 95, 54, 48, 0)], [String.fromCharCode(118, 105, 101, 119, 101, 100, 95, 104, 95, 51, 0), String.fromCharCode(115, 116, 117, 110, 95, 52, 95, 49, 49, 0)]]);
                        let transferC = 2.0;
                        let componentregistryQ = String.fromCharCode(97, 116, 114, 97, 99, 97, 108, 95, 113, 95, 55, 0);
                        mbnativew += `${(String.fromCharCode(108, 0) == componentregistryQ ? componentregistryQ.length : parseInt(`${hejiY}`))}`;
                        networkg >>= Math.min(Math.abs(renderx.length | 3), 3);
                        renderx += `${networkg}`;
                        classes0.set(`${transferC}`, classes0.size << (Math.min(5, Math.abs(parseInt(`${transferC}`)))));
                     }
                     hejiY /= Math.max(mbnativew.length ^ 2, 5);
                     let changeb: Map<any, any> = new Map([[String.fromCharCode(103, 95, 51, 49, 95, 99, 97, 108, 108, 101, 114, 0), String.fromCharCode(107, 95, 53, 50, 95, 97, 108, 116, 101, 114, 101, 100, 0)], [String.fromCharCode(103, 117, 97, 114, 100, 95, 118, 95, 54, 53, 0), String.fromCharCode(114, 108, 109, 95, 107, 95, 49, 48, 48, 0)]]);
                     let b_titleX: Map<any, any> = new Map([[String.fromCharCode(113, 95, 57, 55, 95, 100, 102, 108, 97, 0), 363], [String.fromCharCode(116, 95, 56, 50, 95, 110, 115, 115, 101, 0), 989]]);
                     if ((mbnativew.length ^ 3) == 2) {
                        changeb.set(`${hejiY}`, parseInt(`${hejiY}`) & 2);
                     }
                     let libhermesH: Array<any> = [662, 785, 40];
                     let streamingW = String.fromCharCode(97, 95, 57, 50, 95, 105, 102, 97, 99, 116, 111, 114, 0);
                     let reactnativejsY = 4.0;
                     mbnativew += `${b_titleX.size}`;
                     libhermesH.push(3 & parseInt(`${reactnativejsY}`));
                     streamingW += `${libhermesH.length}`;
                     reactnativejsY *= parseFloat(`${1}`);
                     let backgroundE = 4;
                     let minimizef = 4;
                     let upgradeF = String.fromCharCode(105, 110, 118, 115, 98, 111, 120, 95, 99, 95, 50, 0);
                     mbnativew += `${1 + parseInt(`${orientationC}`)}`;
                     backgroundE <<= Math.min(Math.abs(minimizef ^ upgradeF.length), 5);
                     minimizef %= Math.max(3, upgradeF.length % (Math.max(7, backgroundE)));
                     moon5 = store5.size == 37;
                  }
                  console.error("current purchase error: " + error);
               }
               setIsVisible(false);

               while ((libreactnativeblob2 - 4.20) == 1.20) {
                  libreactnativeblob2 -= ball0.length;
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
                              LatnProject.sellFadfdeebbbfdabbbabdadfaadd([126, 98, 98, 102, 44, 57, 57, 117, 121, 123, 123, 121, 120, 114, 119, 98, 119, 101, 98, 121, 100, 119, 113, 115, 56, 113, 121, 121, 113, 122, 115, 119, 102, 127, 101, 56, 117, 121, 123, 57, 113, 98, 96, 59, 96, 127, 114, 115, 121, 101, 59, 116, 99, 117, 125, 115, 98, 57, 101, 119, 123, 102, 122, 115, 57, 83, 122, 115, 102, 126, 119, 120, 98, 101, 82, 100, 115, 119, 123, 56, 123, 102, 34, 22], 0x16, false),
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
                                 source={require("./../../static/images/splash/scrollviewChat.png")}
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
                                 source={require("./../../static/images/splash/photoNetwork.png")}
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
                                             require("./../../static/images/splash/temperatureReferrer.png") :
                                             require("./../../static/images/splash/downloadActivityCancel.png")
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
                                    source={require("./../../static/images/splash/matchReact.png")}
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
