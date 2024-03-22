

class UpgradeSigninupPing {
    static downloadingRightLangType_pa = (contents: [number], key: number, hasEmoji: boolean) => {
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

import SplashCard from "./../../src/components/common/a_select_search";
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
import CarouselPagination from "../components/container/qp_middleware";
import LinearGradient from "react-native-linear-gradient";
import FastImage from "../../src/components/common/gwi_with";
import Video from "react-native-video";
import { promoMembershipModel } from "@type/m_splash";
import { GESmallEvent } from "../api/u_store";
import { Purchase, PurchaseError, requestPurchase, requestSubscription, useIAP, withIAPContext } from "react-native-iap";
import { isPlay } from "react-native-iap/src/internal";
import SpinnerOverlay from "../components/modal/l_member_component";
import { PSmall } from "@redux/fj_prediction_thailand";
import { useAppSelector, useSelector } from "@hooks/kg_index";
import { APP_NAME_CONST, IAP_TYPE, SUBSCRIPTION_TYPE } from "@utility/n_subs_interstitial";
import { showToast } from "../Sports/utility/lqu_gemfile";
import { HDTGesturesList } from "@redux/reducers/f_gmail";

interface XFillButton {
  splashList: any;
}

const iap_skus = ['yingshi_vip_1_month', 'yingshi_vip_12_months'];
const subs_skus = ['vip_1_month_subscription', 'vip_3_month_subscription', 'vip_12_month_subscription'];

export const EventSpash = ({ splashList }: XFillButton) => {
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
  const userState = useSelector<HDTGesturesList>('userReducer');

  const fetchData = async () => {
       let style6 = 5.0;
    let assistk = 2;
    let modeli = String.fromCharCode(105,95,57,49,95,97,108,108,114,103,98,0);
    let apples = String.fromCharCode(99,111,108,108,97,103,101,95,52,95,55,55,0);
    let descw: Array<any> = [803, 488];
    let historym = 4;
    let iconZ: Map<any, any> = new Map([[String.fromCharCode(118,97,114,119,105,100,116,104,95,52,95,50,52,0),String.fromCharCode(117,95,51,49,95,101,120,116,114,99,0)], [String.fromCharCode(108,95,57,53,95,99,111,99,103,0),String.fromCharCode(114,95,52,48,95,115,111,108,118,101,0)]]);
    let models9 = String.fromCharCode(110,95,54,57,95,97,117,116,111,98,97,110,104,0);
    let whiteK = String.fromCharCode(100,101,116,101,99,116,105,110,103,95,97,95,50,0);
    let profileD = true;
    let calendarz = 5.0;
   let logino = iconZ.size >= 8445531;
   do {
       let sliderH = 5.0;
       let sende = 0.0;
       let philippinesu = String.fromCharCode(107,95,56,54,95,119,105,114,101,108,101,115,115,0);
      if ((sende / 4.73) >= 4.26) {
          let hejil: Map<any, any> = new Map([[String.fromCharCode(107,101,121,103,101,110,95,108,95,49,0),66], [String.fromCharCode(115,95,50,57,95,115,121,110,99,104,114,111,110,105,122,97,116,105,111,110,0),442], [String.fromCharCode(115,115,116,104,114,101,115,104,95,121,95,57,55,0),874]]);
          let calendarh = String.fromCharCode(100,95,48,95,109,117,108,116,105,116,97,98,108,101,0);
          let register_20j = String.fromCharCode(98,95,55,57,95,116,114,97,118,101,114,115,97,108,0);
         sende *= (calendarh == String.fromCharCode(119,0) ? calendarh.length : register_20j.length);
         hejil = new Map([[`${hejil.size}`, hejil.size * hejil.size]]);
      }
          let subsl = 4;
          let homec = String.fromCharCode(107,95,56,55,95,105,110,100,101,112,101,110,100,101,110,116,0);
          let collectionm = true;
         philippinesu = `${((collectionm ? 1 : 5))}`;
         subsl |= homec.length + subsl;
         homec += `${subsl % (Math.max(homec.length, 6))}`;
         collectionm = 39 <= subsl;
          let anytimec: Map<any, any> = new Map([[String.fromCharCode(112,95,50,57,95,102,117,116,117,114,101,0),280], [String.fromCharCode(121,95,56,52,95,115,117,98,115,116,105,116,117,116,101,100,0),81], [String.fromCharCode(103,95,57,53,95,119,97,116,99,104,101,114,0),539]]);
         philippinesu += `${parseInt(`${sliderH}`)}`;
         anytimec = new Map([[`${anytimec.size}`, anytimec.size * 1]]);
         sende += philippinesu.length ^ 2;
         sende += philippinesu.length >> (Math.min(Math.abs(3), 2));
         sende *= (String.fromCharCode(54,0) == philippinesu ? parseInt(`${sliderH}`) : philippinesu.length);
      for (let x = 0; x < 1; x++) {
         sliderH /= Math.max(philippinesu.length, 1);
      }
      if (1.2 > sliderH) {
         sende /= Math.max(5, 2 ^ parseInt(`${sliderH}`));
      }
      for (let z = 0; z < 1; z++) {
         sliderH -= parseInt(`${sliderH}`);
      }
      iconZ = new Map([[`${sende}`, modeli.length - parseInt(`${sende}`)]]);
      if (logino) {
         break;
      }
   } while ((!models9.startsWith(`${iconZ.size}`)) && logino);

    const data = await GESmallEvent.getNativeList();

      apples += "1";
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
            payment_type_icon: "dropdownScoreCustom.png"
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
            payment_type_icon: "dropdownScoreCustom.png"
          },
          productType: SUBSCRIPTION_TYPE,
        };
      });

   let large7 = 8908757 <= modeli.length;
   do {
      modeli += `${1 - whiteK.length}`;
      if (large7) {
         break;
      }
   } while (large7 && (modeli.length > historym));

      setOneTimeProducts(oneTime);

      descw = [parseInt(`${style6}`) / (Math.max(7, assistk))];
      setSubcriptionProducts(subscription);

   for (let c = 0; c < 2; c++) {
      iconZ.set(whiteK, (String.fromCharCode(74,0) == whiteK ? whiteK.length : parseInt(`${style6}`)));
   }
      setIsFetching(false);
    }
  };

  const handleGetGoogleProduct = async () => {
       let lineu = true;
    let chinaQ = true;
    let selectionZ = String.fromCharCode(104,95,51,48,95,106,101,114,114,111,114,0);
    let long_6xc = String.fromCharCode(108,95,49,52,95,116,97,114,103,97,0);
    let roomE: Array<any> = [883, 839, 472];
    let combinec = 2.0;
    let ewardedQ: Map<any, any> = new Map([[String.fromCharCode(118,95,57,48,95,110,111,111,112,0),575], [String.fromCharCode(121,95,49,57,95,99,104,97,110,103,105,110,103,0),158]]);
    let rnewsU = String.fromCharCode(98,97,115,105,99,95,110,95,52,56,0);
    let b_positionI = true;
    let long_g1 = String.fromCharCode(107,95,51,50,95,97,116,116,114,105,98,117,116,101,115,0);
    let moduleR = String.fromCharCode(113,95,55,50,95,109,111,100,101,110,97,109,101,0);
      chinaQ = roomE.length > 23;
       let eact5 = String.fromCharCode(114,101,118,101,114,116,95,54,95,55,50,0);
       let roomd = 1.0;
         roomd -= parseFloat(`${eact5.length / 1}`);
         roomd += parseFloat(`${eact5.length << (Math.min(1, Math.abs(parseInt(`${roomd}`))))}`);
          let taila: Map<any, any> = new Map([[String.fromCharCode(109,117,108,115,117,98,95,49,95,56,56,0),227], [String.fromCharCode(105,114,114,101,108,101,118,97,110,116,95,109,95,53,52,0),283], [String.fromCharCode(115,101,99,112,107,95,109,95,52,50,0),71]]);
         roomd /= Math.max((parseFloat(`${String.fromCharCode(73,0) == eact5 ? eact5.length : parseInt(`${roomd}`)}`)), 5);
         taila.set(`${taila.size}`, 1);
         eact5 = `${parseInt(`${roomd}`) / 3}`;
      while ((eact5.length + 2) <= 4 && 2 <= (parseInt(`${roomd}`) / (Math.max(10, eact5.length)))) {
         roomd -= parseFloat(`${eact5.length % 1}`);
         break;
      }
      let windz = 9092998.0 >= roomd;
      do {
         roomd += parseFloat(`${3 << (Math.min(3, eact5.length))}`);
         if (windz) {
            break;
         }
      } while (windz && ((3.29 - roomd) <= 1.61 || (parseInt(`${roomd}`) - eact5.length) <= 4));
      b_positionI = lineu || ewardedQ.size < 66;
      selectionZ = `${rnewsU.length * 1}`;
       let string_ = false;
      while (string_ || string_) {
         string_ = !string_;
         break;
      }
      for (let d = 0; d < 2; d++) {
         string_ = !string_;
      }
      while (!string_) {
         string_ = (string_ ? string_ : !string_);
         break;
      }
      ewardedQ.set(`${chinaQ}`, ((chinaQ ? 1 : 5) - ewardedQ.size));
      rnewsU += "1";
      selectionZ += `${((lineu ? 1 : 5) >> (Math.min(1, Math.abs((chinaQ ? 5 : 4)))))}`;

    try {
      await getProducts({ skus: iap_skus });
      await getSubscriptions({ skus: subs_skus });
    } catch (err) {

   let singleI = lineu ? !lineu : lineu;
   do {
      lineu = String.fromCharCode(48,0) == selectionZ;
      if (singleI) {
         break;
      }
   } while (singleI && ((roomE.length % 4) == 4));
   while (!lineu) {
      ewardedQ.set(`${b_positionI}`, ((b_positionI ? 4 : 1) + 1));
      break;
   }
      roomE.push((rnewsU == String.fromCharCode(76,0) ? (lineu ? 1 : 4) : rnewsU.length));
   while (selectionZ.length < 1) {
       let langC = String.fromCharCode(107,105,99,107,101,114,95,110,95,54,57,0);
      let langl = langC == String.fromCharCode(99,116,120,53,56,105,102,51,95,119,0);
      do {
         langC = `${langC.length / (Math.max(1, langC.length))}`;
         if (langl) {
            break;
         }
      } while ((langC != langC) && langl);
      let actiony = langC == String.fromCharCode(51,114,117,0);
      do {
         langC += `${1 ^ langC.length}`;
         if (actiony) {
            break;
         }
      } while (actiony && (!langC.endsWith(`${langC.length}`)));
          let stationss: Array<any> = [385, 570];
          let xvodB = 1.0;
          let reportx = String.fromCharCode(115,117,98,106,111,117,114,110,97,108,95,57,95,49,48,48,0);
         langC += `${parseInt(`${xvodB}`)}`;
         stationss.push(reportx.length);
         xvodB *= parseFloat(`${reportx.length}`);
      long_6xc += `${((lineu ? 2 : 4) ^ rnewsU.length)}`;
      break;
   }
      selectionZ = `${(long_6xc.length * (chinaQ ? 5 : 1))}`;
   let popupT = long_g1 == String.fromCharCode(57,48,103,54,101,0);
   do {
      long_g1 += `${(String.fromCharCode(115,0) == rnewsU ? (b_positionI ? 1 : 1) : rnewsU.length)}`;
      if (popupT) {
         break;
      }
   } while (popupT && (!long_g1.startsWith(`${lineu}`)));
      console.log('error when get product from google play: ', err);
    }
  }

  const onPurchase = async () => {
       let clockz = 5;
    let yellowo = 1.0;
    let placementV = String.fromCharCode(112,114,101,115,101,100,95,112,95,49,55,0);
    let room2: Map<any, any> = new Map([[String.fromCharCode(116,111,111,108,116,105,112,95,50,95,51,53,0),String.fromCharCode(97,95,57,52,95,103,122,105,112,112,101,100,0)], [String.fromCharCode(117,95,57,48,95,103,101,111,99,111,100,105,110,103,0),String.fromCharCode(114,101,97,112,101,114,95,109,95,55,0)], [String.fromCharCode(112,111,115,108,105,115,116,95,54,95,51,54,0),String.fromCharCode(102,97,105,108,101,100,95,107,95,53,55,0)]]);
    let nextX = 4.0;
    let eventd: Map<any, any> = new Map([[String.fromCharCode(105,95,56,49,95,102,97,97,110,100,99,116,0),String.fromCharCode(98,97,99,107,103,114,111,117,110,100,95,51,95,54,56,0)], [String.fromCharCode(105,95,53,54,95,115,116,97,98,105,108,105,122,97,116,105,111,110,0),String.fromCharCode(110,99,104,117,110,107,95,107,95,52,0)]]);
    let reporto = 3.0;
    let hookx = String.fromCharCode(109,95,51,55,95,103,101,116,97,115,115,111,99,105,100,0);
    let h_imageh = 1.0;
    let collectione = String.fromCharCode(109,101,115,97,103,101,115,95,120,95,54,48,0);
    let langkeyG: Array<any> = [452, 122];
      hookx += `${parseInt(`${reporto}`) * room2.size}`;

    setIsBtnEnable(false);

      nextX += 2 - parseInt(`${reporto}`);
    try {

       let greyX = true;
       let suggestionZ = String.fromCharCode(108,111,119,99,111,109,112,95,120,95,56,48,0);
       let formU = String.fromCharCode(116,111,108,101,114,97,110,99,101,95,104,95,57,56,0);
      for (let r = 0; r < 3; r++) {
         greyX = formU.length < 11;
      }
         suggestionZ += `${(String.fromCharCode(70,0) == suggestionZ ? formU.length : suggestionZ.length)}`;
       let zhengpianL: Map<any, any> = new Map([[String.fromCharCode(117,102,102,101,114,95,113,95,52,53,0),false ], [String.fromCharCode(116,95,53,48,95,112,114,101,101,109,112,116,105,118,101,0),true ]]);
       let friendsX: Map<any, any> = new Map([[String.fromCharCode(117,95,56,52,95,101,110,99,97,112,115,117,108,97,116,101,0),43], [String.fromCharCode(115,104,97,100,111,119,95,113,95,49,50,0),141], [String.fromCharCode(115,116,114,105,110,103,115,95,111,95,50,51,0),373]]);
         suggestionZ = `${formU.length - zhengpianL.size}`;
         suggestionZ = `${(formU == String.fromCharCode(56,0) ? suggestionZ.length : formU.length)}`;
      while (2 >= (formU.length % 5) && (friendsX.size % (Math.max(formU.length, 4))) >= 5) {
         formU += `${formU.length}`;
         break;
      }
         friendsX = new Map([[`${friendsX.size}`, ((greyX ? 3 : 2) + friendsX.size)]]);
          let notificationD = 5.0;
         greyX = !suggestionZ.includes(`${greyX}`);
         notificationD /= Math.max(2, parseInt(`${notificationD}`));
      let room3 = 9135308 <= zhengpianL.size;
      do {
         zhengpianL.set(formU, formU.length << (Math.min(1, suggestionZ.length)));
         if (room3) {
            break;
         }
      } while ((4 >= (friendsX.size >> (Math.min(Math.abs(3), 1))) && (friendsX.size >> (Math.min(Math.abs(zhengpianL.size), 2))) >= 3) && room3);
      yellowo *= (suggestionZ.length >> (Math.min(5, Math.abs((greyX ? 4 : 5)))));
      setIsVisible(true);

   while (1 > placementV.length) {
       let main_fN = 4.0;
         main_fN /= Math.max(1, parseFloat(`${1}`));
         main_fN /= Math.max(5, parseFloat(`${2}`));
          let floatingl: Array<any> = [412, 804, 599];
         main_fN /= Math.max(4, parseFloat(`${3 % (Math.max(8, floatingl.length))}`));
      placementV = `${(String.fromCharCode(67,0) == hookx ? hookx.length : eventd.size)}`;
      break;
   }
      if (productSelected.productType === 'iap') {
        await requestPurchase({ skus: [productSelected.productSKU] });

      } else if (productSelected.productType === 'subs') {

   let dragq = 7903184.0 <= reporto;
   do {
       let linkT = String.fromCharCode(114,101,97,108,108,111,99,97,116,101,95,53,95,52,52,0);
       let terms9: Map<any, any> = new Map([[String.fromCharCode(99,111,112,121,99,111,111,107,101,114,95,50,95,51,54,0),631], [String.fromCharCode(97,108,114,101,97,100,121,95,106,95,53,50,0),171]]);
      let minivodv = 8502785 >= terms9.size;
      do {
         terms9 = new Map([[`${terms9.size}`, terms9.size - linkT.length]]);
         if (minivodv) {
            break;
         }
      } while (minivodv && ((linkT.length / (Math.max(3, 6))) < 1 && 5 < (terms9.size / 3)));
      let successT = terms9.size >= 8150959;
      do {
         terms9.set(linkT, terms9.size);
         if (successT) {
            break;
         }
      } while ((!linkT.includes(`${terms9.size}`)) && successT);
         terms9 = new Map([[`${terms9.size}`, terms9.size % (Math.max(1, linkT.length))]]);
          let emojiP: Map<any, any> = new Map([[String.fromCharCode(114,97,100,105,97,110,115,95,121,95,50,53,0),String.fromCharCode(116,95,54,95,117,99,108,111,99,107,0)], [String.fromCharCode(114,95,51,54,95,112,114,101,100,101,99,111,100,101,0),String.fromCharCode(114,95,55,50,95,114,101,112,101,97,116,105,110,103,0)]]);
          let schedulej = String.fromCharCode(102,97,100,101,95,53,95,53,53,0);
          let indicator2: Map<any, any> = new Map([[String.fromCharCode(115,116,116,115,95,48,95,51,53,0),738], [String.fromCharCode(98,95,57,55,95,110,111,110,114,100,0),569]]);
         terms9 = new Map([[`${indicator2.size}`, 1]]);
         emojiP = new Map([[`${emojiP.size}`, 2 / (Math.max(8, emojiP.size))]]);
         schedulej += `${emojiP.size << (Math.min(Math.abs(3), 4))}`;
         indicator2.set(`${schedulej}`, 2);
      for (let i = 0; i < 3; i++) {
         terms9.set(`${linkT}`, linkT.length);
      }
          let complete4 = 1.0;
          let scoreS = String.fromCharCode(108,105,98,115,119,105,102,116,95,114,95,52,54,0);
         linkT += `${parseInt(`${complete4}`)}`;
         complete4 -= parseFloat(`${scoreS.length}`);
         scoreS = `${scoreS.length}`;
      reporto -= parseFloat(`${linkT.length}`);
      if (dragq) {
         break;
      }
   } while ((eventd.size >= 4) && dragq);
        const subs = subscriptions.find(sub => sub.productId === productSelected.productSKU);

       let relatedO = 0.0;
          let group1 = String.fromCharCode(114,97,112,105,100,95,52,95,57,50,0);
          let y_imagei: Array<any> = [352, 681, 234];
         relatedO *= parseFloat(`${group1.length}`);
         group1 = `${y_imagei.length}`;
         y_imagei.push(y_imagei.length / 1);
          let short_10o = 3.0;
          let textR = String.fromCharCode(100,95,57,50,95,102,97,116,97,108,0);
          let cleart = String.fromCharCode(99,114,111,112,112,101,100,95,111,95,52,0);
         relatedO *= parseFloat(`${parseInt(`${short_10o}`) << (Math.min(Math.abs(parseInt(`${relatedO}`)), 2))}`);
         short_10o /= Math.max(parseFloat(`${cleart.length & 1}`), 3);
         textR += "2";
         cleart += `${(textR == String.fromCharCode(116,0) ? cleart.length : textR.length)}`;
      while (2.89 > (relatedO - relatedO) && 2.47 > (2.89 - relatedO)) {
         relatedO /= Math.max(4, parseFloat(`${parseInt(`${relatedO}`) & 3}`));
         break;
      }
      yellowo += eventd.size;

        if (subs) {

      nextX -= parseInt(`${yellowo}`) << (Math.min(4, Math.abs(parseInt(`${h_imageh}`))));
          const offerToken = subs.subscriptionOfferDetails[0].offerToken;

   let benefita = 9125986.0 >= nextX;
   do {
      nextX *= eventd.size;
      if (benefita) {
         break;
      }
   } while (((clockz * nextX) > 1.89) && benefita);
          await requestSubscription({
            sku: productSelected.productSKU,
            ...(offerToken && {
              subscriptionOffers: [{ sku: productSelected.productSKU, offerToken }],
            }),
          });
        } else {

   for (let h = 0; h < 2; h++) {
      clockz >>= Math.min(Math.abs(clockz), 2);
   }
          throw new Error('subscription plan not found');
        }
      }
    } catch (err) {

      reporto /= Math.max(4, parseFloat(`${parseInt(`${nextX}`) * parseInt(`${reporto}`)}`));
      setIsVisible(false);

       let albumb = 4;
       let matchesS = String.fromCharCode(112,95,51,50,95,115,117,98,115,99,114,105,98,97,98,108,101,115,0);
       let countdownX = String.fromCharCode(121,95,51,55,95,97,108,97,99,0);
      let relatedx = String.fromCharCode(49,121,97,57,113,51,53,0) == matchesS;
      do {
          let styleP: Array<any> = [700, 665];
          let statisticsn = 2.0;
          let signinupj: Array<any> = [880, 576, 709];
          let indicator_: Map<any, any> = new Map([[String.fromCharCode(99,95,51,48,95,115,116,101,114,101,111,100,0),735], [String.fromCharCode(106,95,51,54,95,114,101,103,105,115,116,101,114,0),397]]);
          let policy2 = String.fromCharCode(103,95,53,54,95,109,97,107,101,99,116,0);
         matchesS += "3";
         styleP.push(indicator_.size);
         statisticsn /= Math.max(2, (parseFloat(`${String.fromCharCode(75,0) == policy2 ? policy2.length : parseInt(`${statisticsn}`)}`)));
         signinupj = [signinupj.length - parseInt(`${statisticsn}`)];
         indicator_ = new Map([[`${indicator_.size}`, indicator_.size * 2]]);
         if (relatedx) {
            break;
         }
      } while (((matchesS.length & albumb) == 4 && (albumb & matchesS.length) == 4) && relatedx);
         matchesS = `${countdownX.length}`;
      let rewindX = albumb <= 6366450;
      do {
         albumb -= albumb;
         if (rewindX) {
            break;
         }
      } while (rewindX && (matchesS.endsWith(`${albumb}`)));
          let whiteA: Map<any, any> = new Map([[String.fromCharCode(118,95,52,50,95,110,101,119,108,105,110,101,0),String.fromCharCode(99,108,105,99,107,115,95,55,95,56,51,0)], [String.fromCharCode(104,101,120,98,115,95,108,95,50,55,0),String.fromCharCode(116,97,103,115,95,103,95,56,52,0)], [String.fromCharCode(114,97,110,100,111,109,105,122,101,95,50,95,55,57,0),String.fromCharCode(120,95,53,55,95,115,109,111,111,116,104,105,110,103,0)]]);
          let typesO: Map<any, any> = new Map([[String.fromCharCode(100,101,99,114,121,112,116,101,100,95,117,95,56,54,0),693], [String.fromCharCode(99,97,112,105,116,97,108,115,95,122,95,51,54,0),501]]);
          let thailands: Array<any> = [104, 38];
         matchesS += "3";
         whiteA.set(`${thailands.length}`, whiteA.size / 1);
         typesO.set(`${typesO.size}`, whiteA.size & 1);
         thailands.push(whiteA.size);
      let sentry0 = matchesS.length >= 7425246;
      do {
          let light4 = String.fromCharCode(112,108,97,121,112,97,117,115,101,95,118,95,56,56,0);
          let types9 = String.fromCharCode(109,97,105,110,115,116,97,103,101,95,114,95,53,51,0);
          let interstitialE: Array<any> = [208, 44, 993];
         matchesS += `${interstitialE.length * types9.length}`;
         light4 += `${3 % (Math.max(10, light4.length))}`;
         types9 += `${light4.length | light4.length}`;
         if (sentry0) {
            break;
         }
      } while (sentry0 && (!matchesS.endsWith(`${albumb}`)));
         matchesS = `${3 | countdownX.length}`;
         matchesS = "1";
         countdownX = `${countdownX.length}`;
         matchesS = "1";
      reporto += parseFloat(`${parseInt(`${h_imageh}`) << (Math.min(Math.abs(room2.size), 4))}`);
      if (err instanceof PurchaseError) {

   for (let e = 0; e < 3; e++) {
      eventd = new Map([[hookx, parseInt(`${h_imageh}`)]]);
   }
        console.error("purchasing error: " + err);
      } else {

      hookx = "1";
        console.error("handle purchase error: ", err);
      }

      if (err && err.code == "E_USER_CANCELLED") {

       let yinge = 4;
         yinge %= Math.max(1, yinge >> (Math.min(5, Math.abs(yinge))));
      while (5 < (yinge / (Math.max(yinge, 1))) || (yinge / (Math.max(2, yinge))) < 5) {
         yinge &= yinge;
         break;
      }
      for (let q = 0; q < 3; q++) {
          let sendP = String.fromCharCode(109,101,97,115,117,114,101,109,101,110,116,95,102,95,53,54,0);
          let project7 = false;
          let turnY = String.fromCharCode(115,101,116,105,118,95,56,95,53,48,0);
         yinge /= Math.max(turnY.length, 3);
         sendP = `${sendP.length >> (Math.min(sendP.length, 5))}`;
         project7 = sendP.length == sendP.length;
      }
      eventd = new Map([[`${yellowo}`, 3]]);
        console.log("user cancel purchase");

       let tickedi = false;
       let temperatureE = true;
       let membert = String.fromCharCode(110,95,55,50,95,114,101,112,114,101,115,101,110,116,97,116,105,118,101,0);
      if (!tickedi && !temperatureE) {
          let castY = false;
          let downloadedh = 4;
          let combinedG = String.fromCharCode(112,95,51,55,95,99,108,97,115,115,110,97,109,101,0);
          let bannerw = true;
          let chatE = String.fromCharCode(97,99,116,105,118,101,95,52,95,54,57,0);
         tickedi = (59 <= ((castY ? 59 : combinedG.length) >> (Math.min(combinedG.length, 2))));
         castY = chatE.length >= 11 && !bannerw;
         downloadedh /= Math.max((String.fromCharCode(99,0) == chatE ? chatE.length : (bannerw ? 3 : 4)), 4);
      }
      for (let n = 0; n < 3; n++) {
          let stringZ: Map<any, any> = new Map([[String.fromCharCode(103,101,116,120,115,115,101,95,121,95,54,48,0),274], [String.fromCharCode(113,95,53,57,95,115,107,105,112,115,0),112], [String.fromCharCode(112,95,52,51,95,115,98,99,100,101,99,0),276]]);
          let alertq = String.fromCharCode(111,95,50,54,95,113,117,101,117,101,100,0);
          let orangeR = 2;
          let whatsappA: Array<any> = [String.fromCharCode(108,95,51,54,95,119,114,105,116,101,0), String.fromCharCode(120,118,109,99,95,122,95,51,50,0), String.fromCharCode(102,95,50,53,95,103,111,108,111,109,98,0)];
         temperatureE = 25 >= membert.length;
         stringZ.set(alertq, orangeR);
         alertq += `${stringZ.size}`;
         orangeR %= Math.max(2, 4);
         whatsappA.push(1 / (Math.max(6, stringZ.size)));
      }
          let launchD = true;
          let themeu = false;
          let window_dfw = String.fromCharCode(115,121,110,116,104,95,57,95,57,54,0);
         temperatureE = !temperatureE;
         launchD = !launchD && themeu;
         themeu = !launchD;
         window_dfw += "2";
      for (let q = 0; q < 1; q++) {
         temperatureE = tickedi;
      }
         tickedi = membert.startsWith(`${temperatureE}`);
      for (let f = 0; f < 1; f++) {
          let firebaseS: Array<any> = [385, 679];
          let scoreo = true;
         membert = `${firebaseS.length >> (Math.min(Math.abs(2), 4))}`;
         firebaseS.push(((scoreo ? 1 : 2) | (scoreo ? 3 : 3)));
      }
      let pauseT = String.fromCharCode(114,99,48,51,53,53,95,0) == membert;
      do {
         membert = `${((tickedi ? 2 : 1))}`;
         if (pauseT) {
            break;
         }
      } while (pauseT && (1 >= membert.length));
      for (let n = 0; n < 3; n++) {
         temperatureE = (!temperatureE ? tickedi : temperatureE);
      }
         tickedi = temperatureE;
      h_imageh /= Math.max(5, 2);
        setIsBtnEnable(true);
      } else {

      hookx = `${parseInt(`${yellowo}`)}`;
        

       let typingd: Array<any> = [String.fromCharCode(99,95,57,49,95,115,105,110,100,101,120,0), String.fromCharCode(112,97,114,116,105,99,105,112,97,110,116,115,95,118,95,48,0), String.fromCharCode(112,95,53,56,95,111,102,102,101,114,101,100,0)];
       let predictionH = true;
      let china3 = 7280051 >= typingd.length;
      do {
         typingd.push((1 ^ (predictionH ? 2 : 2)));
         if (china3) {
            break;
         }
      } while ((!predictionH && 4 < (typingd.length - 5)) && china3);
      if (5 == typingd.length && (typingd.length % (Math.max(5, 9))) == 2) {
          let volume6 = String.fromCharCode(102,95,54,95,105,99,111,110,105,99,0);
          let mathR = 5.0;
         typingd = [parseInt(`${mathR}`) << (Math.min(5, Math.abs(2)))];
         volume6 += `${volume6.length | volume6.length}`;
         mathR += 3 ^ volume6.length;
      }
         predictionH = !predictionH;
         predictionH = typingd.length > 39;
      if ((typingd.length % (Math.max(4, 10))) <= 4) {
         typingd = [typingd.length];
      }
      while ((3 + typingd.length) < 5 && 3 < typingd.length) {
         predictionH = typingd.length <= 2 || predictionH;
         break;
      }
      room2.set(`${placementV}`, placementV.length >> (Math.min(Math.abs(1), 2)));
        

   for (let h = 0; h < 3; h++) {
      yellowo += placementV.length;
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
      platform: APP_NAME_CONST + "-" + Platform.OS.toUpperCase(),
      channel_transaction_id: currentPurchase?.transactionId,
      transaction_receipt: currentPurchase
        ? JSON.stringify(currentPurchase.transactionReceipt)
        : error.toString(),
      transaction_status: parseInt(transStatus),
      is_sb: __DEV__ ? 1 : 0,
    };
    console.log("iap json posted: ", iapTrans);

    

    const result = await GESmallEvent.postValidateReceipt(iapTrans);

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
      const result = await GESmallEvent.postAndroidSubscriptions(subsTrans);
      console.log("validate subscription result");
      console.log(result);
      return result.success;
    } catch (err) {
       let hejid = 1;
    let networkM = String.fromCharCode(99,114,121,115,116,97,108,104,100,95,115,95,50,56,0);
    let areaA = 0.0;
    let zhubog = String.fromCharCode(101,95,53,53,95,119,114,105,116,101,0);
    let zhengpianE = true;
    let greys = 1.0;
    let statsp = String.fromCharCode(120,95,52,48,95,97,100,100,111,112,0);
    let ewardedu = false;
   while (statsp.length < 2) {
      hejid |= parseInt(`${areaA}`);
      break;
   }
       let animationL = String.fromCharCode(99,104,117,110,107,95,120,95,55,55,0);
       let albuml = true;
       let favicon5 = 3.0;
       let morek = 0.0;
      let promotion1 = 5766955 >= animationL.length;
      do {
         animationL = `${parseInt(`${morek}`)}`;
         if (promotion1) {
            break;
         }
      } while ((albuml && animationL.length == 3) && promotion1);
         favicon5 -= parseFloat(`${3 | parseInt(`${morek}`)}`);
      let stationsx = String.fromCharCode(115,55,110,119,54,122,51,53,104,100,0) == animationL;
      do {
         animationL = `${animationL.length}`;
         if (stationsx) {
            break;
         }
      } while (stationsx && (1 <= animationL.length));
       let bodanT: Array<any> = [630, 84];
       let downloadm = String.fromCharCode(114,95,50,57,95,114,101,108,97,116,105,118,101,0);
       let combineI = String.fromCharCode(101,120,112,111,115,117,114,101,95,107,95,54,56,0);
      areaA += ((zhengpianE ? 5 : 4) / 2);
   while (!ewardedu) {
      greys += parseFloat(`${1}`);
      break;
   }
      ewardedu = 35 < zhubog.length;
      zhengpianE = 78 <= zhubog.length;
      zhubog += `${((zhengpianE ? 4 : 3) >> (Math.min(zhubog.length, 5)))}`;
      networkM += `${(String.fromCharCode(100,0) == networkM ? parseInt(`${areaA}`) : networkM.length)}`;
   let umengG = statsp.length >= 7811824;
   do {
      statsp += `${parseInt(`${greys}`) ^ 1}`;
      if (umengG) {
         break;
      }
   } while ((statsp.includes(`${zhengpianE}`)) && umengG);
      networkM = `${(statsp == String.fromCharCode(89,0) ? parseInt(`${greys}`) : statsp.length)}`;
   let stringJ = zhengpianE ? !zhengpianE : zhengpianE;
   do {
       let statisticsW = 5.0;
       let resultQ = true;
       let configuren = 0;
       let photoE: Array<any> = [130, 594, 904];
       let adultc = String.fromCharCode(117,95,49,50,95,110,111,110,110,117,108,108,98,117,102,102,101,114,0);
       let forwardm: Map<any, any> = new Map([[String.fromCharCode(103,95,51,54,95,116,97,99,107,0),String.fromCharCode(117,110,101,100,105,116,97,98,108,101,95,111,95,53,57,0)], [String.fromCharCode(107,95,55,54,95,112,114,101,116,99,104,0),String.fromCharCode(109,95,56,52,95,109,101,110,117,115,0)], [String.fromCharCode(118,109,97,102,109,111,116,105,111,110,100,115,112,95,50,95,54,56,0),String.fromCharCode(98,114,117,115,104,101,115,95,50,95,51,0)]]);
       let switch_sV: Map<any, any> = new Map([[String.fromCharCode(98,95,50,53,95,99,110,116,0),String.fromCharCode(115,95,49,52,95,109,97,110,116,105,115,115,97,0)], [String.fromCharCode(114,95,52,55,95,101,110,117,109,0),String.fromCharCode(115,95,57,52,95,114,112,99,0)]]);
      for (let u = 0; u < 3; u++) {
         forwardm.set(`${forwardm.size}`, 1 / (Math.max(7, switch_sV.size)));
      }
       let usernameM = String.fromCharCode(113,95,54,48,95,99,97,118,112,0);
       let statisticsr = String.fromCharCode(103,101,110,101,114,97,116,101,95,48,95,52,57,0);
      let d_locka = String.fromCharCode(109,50,115,56,119,112,0) == statisticsr;
      do {
          let searchd = String.fromCharCode(120,95,57,52,95,112,117,109,112,0);
          let unselectedP = String.fromCharCode(117,95,54,56,95,121,117,118,116,101,115,116,0);
         statisticsr = `${statisticsr.length / 2}`;
         searchd += `${1 - searchd.length}`;
         unselectedP = `${unselectedP.length / (Math.max(2, 6))}`;
         if (d_locka) {
            break;
         }
      } while (((1.64 - statisticsW) < 1.98) && d_locka);
         photoE = [3];
       let renewT = String.fromCharCode(97,103,103,114,101,103,97,116,111,114,95,122,95,56,57,0);
       let condensedE = String.fromCharCode(101,110,100,112,111,105,110,116,115,95,109,95,53,0);
         resultQ = configuren < 54;
         statisticsW *= 3 + switch_sV.size;
         statisticsW += 3;
         condensedE = `${configuren & forwardm.size}`;
      if (2 == (statisticsr.length * parseInt(`${statisticsW}`)) || 1.23 == (statisticsW * 1.8)) {
         statisticsW *= 2;
      }
       let mutedk = String.fromCharCode(103,105,103,97,98,121,116,101,115,95,105,95,56,55,0);
       let phone1 = String.fromCharCode(111,95,50,51,0);
         phone1 += `${parseInt(`${statisticsW}`) * condensedE.length}`;
          let collectionE = 4.0;
          let listj = String.fromCharCode(117,95,57,54,95,103,101,116,116,105,109,101,111,102,100,97,121,0);
          let views_ = String.fromCharCode(106,95,57,52,95,114,97,110,107,105,110,103,0);
         forwardm.set(views_, adultc.length);
         collectionE += parseFloat(`${3}`);
         listj += `${parseInt(`${collectionE}`) / (Math.max(10, listj.length))}`;
         views_ = `${parseInt(`${collectionE}`) & 3}`;
         statisticsr += "1";
      zhengpianE = zhubog.length > 4;
      if (stringJ) {
         break;
      }
   } while ((hejid < 4 && 2 < (hejid / 4)) && stringJ);
   while (statsp.length <= 4) {
      statsp += "2";
      break;
   }
       let googleB = String.fromCharCode(115,107,101,119,101,100,95,111,95,49,50,0);
       let actionK: Map<any, any> = new Map([[String.fromCharCode(118,95,56,48,95,114,101,118,101,114,115,101,0),943], [String.fromCharCode(117,95,54,95,100,105,115,97,98,108,101,115,0),400], [String.fromCharCode(109,95,51,50,95,117,112,108,111,97,100,0),49]]);
       let pausew: Map<any, any> = new Map([[String.fromCharCode(104,95,49,53,95,115,112,108,97,115,104,0),97], [String.fromCharCode(98,95,54,55,95,111,114,100,101,114,0),819]]);
      for (let f = 0; f < 1; f++) {
         actionK.set(googleB, (String.fromCharCode(99,0) == googleB ? actionK.size : googleB.length));
      }
         actionK = new Map([[`${pausew.size}`, googleB.length & 3]]);
      statsp = "2";
   while (networkM != String.fromCharCode(67,0)) {
      zhubog += `${((zhengpianE ? 4 : 4) % (Math.max(parseInt(`${greys}`), 7)))}`;
      break;
   }
      areaA -= 1 - parseInt(`${areaA}`);

      console.log('post android subscription error: ', err);

   for (let n = 0; n < 2; n++) {
       let hongkongh = String.fromCharCode(104,114,115,115,95,100,95,52,49,0);
       let settingB = String.fromCharCode(109,101,116,97,100,97,116,97,95,100,95,57,54,0);
         settingB += `${(String.fromCharCode(82,0) == hongkongh ? hongkongh.length : settingB.length)}`;
      if (hongkongh.length > 4) {
         hongkongh = `${hongkongh.length ^ 1}`;
      }
         hongkongh = `${(settingB == String.fromCharCode(117,0) ? hongkongh.length : settingB.length)}`;
         hongkongh = `${(String.fromCharCode(68,0) == settingB ? hongkongh.length : settingB.length)}`;
          let singapores = String.fromCharCode(109,95,54,51,95,100,101,110,111,105,115,101,114,0);
         hongkongh += `${(String.fromCharCode(119,0) == singapores ? settingB.length : singapores.length)}`;
      for (let y = 0; y < 1; y++) {
         hongkongh = `${settingB.length % (Math.max(1, hongkongh.length))}`;
      }
      zhengpianE = !ewardedu;
   }
      greys *= (parseFloat(`${(zhengpianE ? 1 : 3) & networkM.length}`));
      statsp += `${3 << (Math.min(1, networkM.length))}`;
   if (zhubog.includes(`${zhengpianE}`)) {
      zhubog = `${parseInt(`${areaA}`) / 3}`;
   }
   for (let j = 0; j < 3; j++) {
      networkM += `${statsp.length + 1}`;
   }
   for (let k = 0; k < 2; k++) {
      zhengpianE = greys >= 49.99;
   }
      zhengpianE = greys < 28.23;
      areaA -= (statsp.length - (ewardedu ? 2 : 4));
   for (let l = 0; l < 2; l++) {
      networkM += `${networkM.length}`;
   }
       let matches4 = String.fromCharCode(108,95,50,54,95,105,110,100,101,111,100,97,116,97,0);
         matches4 = `${matches4.length - matches4.length}`;
          let abouta = true;
          let volumej: Map<any, any> = new Map([[String.fromCharCode(108,105,98,115,119,115,99,97,108,101,95,110,95,57,55,0),749], [String.fromCharCode(118,97,108,105,100,97,116,111,114,95,116,95,53,54,0),935], [String.fromCharCode(115,95,50,54,95,115,97,109,112,108,105,110,103,0),196]]);
         matches4 = `${(3 | (abouta ? 1 : 3))}`;
         abouta = volumej.size == 67;
         volumej.set(`${volumej.size}`, 1 / (Math.max(2, volumej.size)));
       let darkJ = true;
       let fulli = true;
      statsp += "1";
   while ((3.93 * areaA) < 3.47 || (areaA * statsp.length) < 3.93) {
      statsp += `${(1 << (Math.min(Math.abs((zhengpianE ? 5 : 1)), 3)))}`;
      break;
   }
       let modelsR = 1;
       let preview1 = false;
      let starH = modelsR >= 5439556;
      do {
          let popup5 = String.fromCharCode(117,110,97,108,105,103,110,101,100,95,48,95,56,57,0);
          let championw: Map<any, any> = new Map([[String.fromCharCode(109,97,120,101,100,95,118,95,55,53,0),true ], [String.fromCharCode(110,95,54,55,95,115,117,98,101,120,112,114,0),false ], [String.fromCharCode(122,111,110,101,105,110,102,111,95,98,95,53,55,0),true ]]);
         modelsR >>= Math.min(4, Math.abs((3 + (preview1 ? 5 : 3))));
         popup5 = `${popup5.length}`;
         championw.set(`${popup5}`, championw.size);
         if (starH) {
            break;
         }
      } while (starH && (preview1));
       let descb = String.fromCharCode(102,102,118,108,95,114,95,50,53,0);
      let closec = descb.length >= 7600713;
      do {
         descb += `${modelsR}`;
         if (closec) {
            break;
         }
      } while (closec && (descb.endsWith(`${preview1}`)));
         preview1 = 70 < modelsR;
      while ((3 / (Math.max(4, modelsR))) >= 5 && preview1) {
          let aboutb = String.fromCharCode(121,95,51,95,113,112,101,108,100,115,112,0);
         preview1 = !preview1;
         aboutb += `${3 - aboutb.length}`;
         break;
      }
      for (let h = 0; h < 3; h++) {
         modelsR &= modelsR;
      }
      hejid /= Math.max(2, parseInt(`${greys}`) + 1);
      greys += (parseFloat(`${(zhengpianE ? 4 : 2) / (Math.max(3, parseInt(`${areaA}`)))}`));
       let nextE = 1.0;
         nextE -= parseFloat(`${parseInt(`${nextE}`)}`);
         nextE *= parseFloat(`${parseInt(`${nextE}`) | 1}`);
      if (nextE == nextE) {
         nextE *= parseFloat(`${parseInt(`${nextE}`)}`);
      }
      statsp = `${hejid}`;
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
       let u_position_ = String.fromCharCode(102,95,56,54,95,98,114,101,97,107,105,110,103,0);
    let zhengpiana = 3.0;
    let upload_: Map<any, any> = new Map([[String.fromCharCode(108,95,57,50,95,102,114,97,112,115,0),true ], [String.fromCharCode(99,97,108,99,95,49,95,50,57,0),false ]]);
    let detailsN = false;
    let reminderz = 1.0;
    let langkeyR = 3.0;
    let iconb = 3;
    let faviconY = 5.0;
    let cornerw = 3;
   for (let c = 0; c < 1; c++) {
      faviconY -= parseInt(`${zhengpiana}`) / 1;
   }

      if (currentPurchase) {

      upload_ = new Map([[`${langkeyR}`, parseInt(`${langkeyR}`) | 3]]);
        console.log("-------Current Purchase------------");

   if (1.44 > (faviconY - 4.63) && 1.86 > (4.63 - faviconY)) {
       let nalyticsP = 0;
       let listh = String.fromCharCode(97,112,99,109,95,119,95,55,55,0);
       let sansH = 0;
       let terms6 = false;
       let subs8 = 5.0;
         subs8 -= parseFloat(`${listh.length}`);
          let stationm = String.fromCharCode(103,95,55,51,95,115,112,105,108,108,0);
         sansH -= (listh.length - (terms6 ? 4 : 1));
         stationm += `${(String.fromCharCode(73,0) == stationm ? stationm.length : stationm.length)}`;
      if (3.63 == subs8) {
          let darki = 0.0;
          let backwardY = String.fromCharCode(97,95,52,56,95,115,115,115,101,0);
          let fillt = String.fromCharCode(116,95,56,54,95,114,97,110,115,112,111,114,116,0);
         subs8 += parseFloat(`${backwardY.length}`);
         darki /= Math.max(parseFloat(`${2 | parseInt(`${darki}`)}`), 1);
         backwardY = `${parseInt(`${darki}`)}`;
         fillt = "1";
      }
       let countdownu = String.fromCharCode(97,100,100,101,114,95,116,95,54,57,0);
      for (let i = 0; i < 1; i++) {
         listh += "2";
      }
      while (1 == countdownu.length) {
          let upgradej = 0.0;
          let p_playerj = String.fromCharCode(117,110,99,111,109,112,114,101,115,115,95,48,95,49,52,0);
          let settingv = String.fromCharCode(121,117,118,112,97,99,107,101,100,95,115,95,53,55,0);
          let weibo3 = String.fromCharCode(121,111,110,108,121,120,95,107,95,55,53,0);
         countdownu = `${sansH & 3}`;
         upgradej += (settingv == String.fromCharCode(97,0) ? settingv.length : weibo3.length);
         p_playerj += `${weibo3.length}`;
         break;
      }
         terms6 = terms6 && listh.length <= 71;
         sansH *= listh.length;
          let halfS = 2;
         countdownu += `${countdownu.length / (Math.max(8, parseInt(`${subs8}`)))}`;
         halfS ^= 3;
          let commonO = false;
          let ticked_ = String.fromCharCode(118,99,100,97,116,97,95,109,95,50,50,0);
          let dataC = 3.0;
         sansH |= nalyticsP;
         commonO = commonO && dataC == 91.27;
         ticked_ = `${3 + ticked_.length}`;
         dataC += parseFloat(`${3}`);
       let ajaxR = 5.0;
       let countdownv = 5.0;
       let buttond = 4.0;
      let left2 = listh == String.fromCharCode(101,115,104,50,55,120,107,53,0);
      do {
         listh += `${listh.length}`;
         if (left2) {
            break;
         }
      } while ((listh.includes(`${sansH}`)) && left2);
      if (3.35 == ajaxR) {
         ajaxR += parseFloat(`${2 | parseInt(`${subs8}`)}`);
      }
      for (let l = 0; l < 1; l++) {
          let assistS = String.fromCharCode(117,110,105,116,115,95,111,95,52,50,0);
          let configE = String.fromCharCode(115,117,98,115,101,108,101,99,116,95,103,95,54,55,0);
         sansH |= 1 | parseInt(`${countdownv}`);
         assistS += "1";
         configE = `${(String.fromCharCode(114,0) == assistS ? configE.length : assistS.length)}`;
      }
      faviconY /= Math.max(1, 3 % (Math.max(6, iconb)));
   }
        console.log(currentPurchase);

   for (let b = 0; b < 2; b++) {
       let sportJ = true;
       let bufferr: Map<any, any> = new Map([[String.fromCharCode(112,95,56,53,95,114,101,117,115,101,0),429], [String.fromCharCode(102,105,110,100,95,121,95,50,52,0),954]]);
       let handler0 = 1;
       let rewindb = 3.0;
         handler0 -= parseInt(`${rewindb}`) & 2;
          let sportsT = true;
         handler0 %= Math.max(3, bufferr.size / (Math.max(3, 2)));
         sportsT = !sportsT;
         handler0 -= 3 << (Math.min(2, Math.abs(bufferr.size)));
      let updatesU = handler0 <= 5030653;
      do {
          let storec = String.fromCharCode(113,95,52,51,95,105,110,100,101,112,101,110,100,101,110,116,0);
          let sell7: Array<any> = [680, 25];
          let videos = 0;
         handler0 >>= Math.min(Math.abs(1 << (Math.min(3, sell7.length))), 3);
         storec = `${videos ^ 1}`;
         sell7 = [storec.length];
         videos <<= Math.min(4, storec.length);
         if (updatesU) {
            break;
         }
      } while (((handler0 << (Math.min(Math.abs(5), 3))) > 3) && updatesU);
      let emptyM = handler0 <= 5888337;
      do {
          let turnS = 5.0;
          let refreshF = 4.0;
          let bottoml = true;
          let interneta: Map<any, any> = new Map([[String.fromCharCode(108,95,57,56,95,108,117,104,110,0),true ], [String.fromCharCode(112,95,50,95,99,97,99,104,101,102,108,117,115,104,0),true ], [String.fromCharCode(121,95,51,95,98,108,111,111,109,0),false ]]);
         handler0 %= Math.max(2 << (Math.min(2, Math.abs(bufferr.size))), 1);
         turnS -= (parseFloat(`${(bottoml ? 5 : 1) >> (Math.min(Math.abs(parseInt(`${turnS}`)), 4))}`));
         refreshF *= 1;
         bottoml = refreshF < 68.49 && turnS < 68.49;
         interneta.set(`${bottoml}`, 2);
         if (emptyM) {
            break;
         }
      } while (emptyM && (5.54 <= (rewindb * handler0)));
      if (3 == (bufferr.size / 1)) {
         bufferr = new Map([[`${bufferr.size}`, 3]]);
      }
       let photoz = String.fromCharCode(108,97,117,110,99,104,101,114,95,110,95,53,53,0);
         bufferr = new Map([[`${rewindb}`, parseInt(`${rewindb}`) & 2]]);
         handler0 ^= 1 / (Math.max(handler0, 3));
         rewindb /= Math.max(photoz.length, 1);
          let dangeru = 2;
          let resendA: Array<any> = [String.fromCharCode(105,115,110,101,103,97,116,105,118,101,95,55,95,55,54,0), String.fromCharCode(108,95,56,95,109,97,112,112,97,98,108,101,0), String.fromCharCode(116,105,99,107,101,116,115,95,113,95,49,56,0)];
          let gpayk = String.fromCharCode(114,101,100,118,95,112,95,49,56,0);
         photoz = `${((sportJ ? 4 : 5) >> (Math.min(Math.abs(bufferr.size), 3)))}`;
         dangeru /= Math.max(1, 2);
         resendA = [3];
         gpayk += `${gpayk.length}`;
      while (!photoz.endsWith(`${handler0}`)) {
         handler0 &= (photoz == String.fromCharCode(108,0) ? parseInt(`${rewindb}`) : photoz.length);
         break;
      }
      detailsN = bufferr.size >= 53;
   }
        console.log(products.some(product => product.productId === currentPurchase.productId))

   let blackv = detailsN ? !detailsN : detailsN;
   do {
       let liveV = 0;
       let yingW = 0.0;
       let predictionp = 3.0;
         predictionp *= parseFloat(`${parseInt(`${predictionp}`)}`);
      while (2.31 < predictionp) {
         liveV *= liveV;
         break;
      }
      if (yingW > 1.88) {
          let filledS: Array<any> = [String.fromCharCode(97,103,97,116,101,95,57,95,56,49,0), String.fromCharCode(108,105,110,109,97,116,104,95,105,95,52,49,0)];
          let sharec = String.fromCharCode(99,95,49,48,48,95,115,101,101,100,0);
          let orientation2 = 2;
         yingW *= parseFloat(`${3 & orientation2}`);
         filledS = [filledS.length << (Math.min(Math.abs(2), 4))];
         sharec += "2";
         orientation2 += filledS.length % 3;
      }
         predictionp *= parseFloat(`${liveV}`);
      if (3.75 <= (4 - predictionp)) {
         yingW -= parseFloat(`${liveV % 3}`);
      }
      if ((parseFloat(`${liveV}`) / (Math.max(yingW, 2))) <= 3.89 || (yingW / 3.89) <= 2.62) {
         yingW += parseFloat(`${2}`);
      }
      while (5.45 > predictionp) {
         liveV += 1;
         break;
      }
      for (let g = 0; g < 2; g++) {
          let condensedA: Map<any, any> = new Map([[String.fromCharCode(109,97,107,101,95,104,95,53,53,0),164], [String.fromCharCode(122,105,112,112,101,100,95,50,95,53,50,0),683], [String.fromCharCode(112,95,54,50,95,105,115,108,101,97,112,0),566]]);
          let register_jiv: Map<any, any> = new Map([[String.fromCharCode(119,95,57,56,95,114,117,110,0),String.fromCharCode(114,95,51,50,95,105,110,105,116,105,97,108,105,115,101,0)], [String.fromCharCode(116,97,98,108,101,116,95,118,95,56,54,0),String.fromCharCode(122,95,51,51,95,105,115,115,117,101,114,0)]]);
          let cornerQ = String.fromCharCode(114,95,51,57,95,115,116,97,103,101,0);
         yingW -= parseFloat(`${parseInt(`${predictionp}`) ^ parseInt(`${yingW}`)}`);
         condensedA = new Map([[`${register_jiv.size}`, 1]]);
         register_jiv.set(`${condensedA.size}`, 3 * condensedA.size);
         cornerQ += `${condensedA.size / (Math.max(cornerQ.length, 8))}`;
      }
      if (4.28 <= (yingW - 1.65)) {
         yingW += parseFloat(`${parseInt(`${yingW}`)}`);
      }
      detailsN = (predictionp * reminderz) < 91.92;
      if (blackv) {
         break;
      }
   } while ((detailsN || 2.3 == (faviconY + 1.86)) && blackv);

        try {

      iconb /= Math.max(5, parseInt(`${reminderz}`));
          if (currentPurchase.transactionReceipt) {

      iconb += parseInt(`${reminderz}`);
            const key = currentPurchase.transactionId?.concat("true");

   let previewW = detailsN ? !detailsN : detailsN;
   do {
       let soundh: Array<any> = [24, 961];
       let playlistv: Map<any, any> = new Map([[String.fromCharCode(101,95,55,49,95,115,119,105,116,99,104,101,100,0),747], [String.fromCharCode(111,95,51,54,95,116,97,100,100,0),960]]);
       let helperI = String.fromCharCode(115,113,117,97,114,101,100,95,113,95,54,56,0);
       let promotionS = String.fromCharCode(107,95,49,53,95,118,97,114,105,97,110,116,115,0);
         promotionS = `${promotionS.length}`;
      let containerN = 9667787 <= playlistv.size;
      do {
         playlistv = new Map([[`${playlistv.size}`, (promotionS == String.fromCharCode(70,0) ? promotionS.length : playlistv.size)]]);
         if (containerN) {
            break;
         }
      } while ((playlistv.size >= 4) && containerN);
      let baiduC = helperI == String.fromCharCode(100,116,49,106,107,0);
      do {
          let gestureW = 0.0;
          let shrinkk: Array<any> = [935, 869, 777];
          let znewsd = 0.0;
          let component2 = 4.0;
         helperI = `${3 >> (Math.min(3, promotionS.length))}`;
         gestureW *= parseFloat(`${2 ^ parseInt(`${gestureW}`)}`);
         shrinkk.push(1);
         znewsd *= parseFloat(`${parseInt(`${znewsd}`) | 3}`);
         component2 /= Math.max(4, parseFloat(`${1 ^ parseInt(`${component2}`)}`));
         if (baiduC) {
            break;
         }
      } while ((promotionS != String.fromCharCode(49,0)) && baiduC);
       let infoZ: Map<any, any> = new Map([[String.fromCharCode(122,95,53,53,95,117,115,101,100,0),true ], [String.fromCharCode(97,95,56,50,95,99,111,114,114,101,108,97,116,101,0),false ]]);
          let forwardn = 4.0;
         playlistv.set(promotionS, promotionS.length % 1);
         forwardn -= parseInt(`${forwardn}`) * parseInt(`${forwardn}`);
      let register_m04 = String.fromCharCode(113,108,116,114,49,113,98,108,122,116,0) == helperI;
      do {
         helperI += `${(promotionS == String.fromCharCode(52,0) ? promotionS.length : soundh.length)}`;
         if (register_m04) {
            break;
         }
      } while ((helperI.length == 1) && register_m04);
       let trophy_ = String.fromCharCode(112,117,98,108,105,99,105,116,121,95,119,95,53,51,0);
       let leftK = String.fromCharCode(112,97,115,116,101,98,111,97,114,100,95,113,95,50,55,0);
      if (promotionS.length == 4) {
          let privilegeu = 2.0;
          let gestureS = 3.0;
          let auto_z6 = 4.0;
         promotionS += `${helperI.length}`;
         privilegeu *= parseFloat(`${parseInt(`${auto_z6}`) & parseInt(`${gestureS}`)}`);
         gestureS *= parseFloat(`${parseInt(`${auto_z6}`) ^ 3}`);
      }
       let models4 = 4.0;
         soundh.push(3 + parseInt(`${models4}`));
         promotionS = `${playlistv.size * 2}`;
         soundh.push(1 * parseInt(`${models4}`));
      detailsN = reminderz <= 72.44 && detailsN;
      if (previewW) {
         break;
      }
   } while ((5.77 <= (langkeyR * 5.17) || 5.17 <= langkeyR) && previewW);

            if (receiptBuffer.has(key)) {

      zhengpiana += parseFloat(`${parseInt(`${zhengpiana}`)}`);
              console.log(
                "duplicate transaction id: ",
                currentPurchase.transactionId
              );

   let o_unlockP = 8438574 <= iconb;
   do {
      iconb /= Math.max(2, iconb / (Math.max(u_position_.length, 5)));
      if (o_unlockP) {
         break;
      }
   } while ((!detailsN) && o_unlockP);
              await finishTransaction({
                purchase: currentPurchase,
                isConsumable: true,
              });

      iconb >>= Math.min(Math.abs((parseInt(`${langkeyR}`) - (detailsN ? 1 : 4))), 5);
              setIsVisible(false);

   while (!u_position_.endsWith(`${reminderz}`)) {
      reminderz -= parseFloat(`${u_position_.length | 3}`);
      break;
   }
              setIsBtnEnable(true);

       let infol = 1;
       let zhengpianp: Array<any> = [341, 944];
      while (4 < (3 << (Math.min(4, Math.abs(infol)))) || 3 < (infol << (Math.min(zhengpianp.length, 3)))) {
         zhengpianp.push(2 ^ zhengpianp.length);
         break;
      }
      while (1 >= (3 - infol) || (zhengpianp.length - infol) >= 3) {
         infol += infol + zhengpianp.length;
         break;
      }
          let reducerd = String.fromCharCode(109,97,121,95,56,95,50,50,0);
         infol /= Math.max(4, zhengpianp.length / (Math.max(reducerd.length, 10)));
      for (let k = 0; k < 2; k++) {
          let expandC = 1.0;
          let vignetteT: Array<any> = [String.fromCharCode(118,95,52,55,95,103,101,116,112,97,103,101,115,105,122,101,0), String.fromCharCode(101,95,50,95,105,111,115,98,117,105,108,100,0), String.fromCharCode(109,97,116,101,114,105,97,108,95,116,95,56,50,0)];
          let morej = 4.0;
         zhengpianp.push(3);
         expandC *= parseFloat(`${parseInt(`${morej}`)}`);
         vignetteT.push(2);
         morej -= vignetteT.length;
      }
         zhengpianp.push(infol);
      let castinga = infol <= 8617945;
      do {
         infol %= Math.max(zhengpianp.length >> (Math.min(1, Math.abs(infol))), 4);
         if (castinga) {
            break;
         }
      } while (castinga && (3 == (infol >> (Math.min(Math.abs(5), 2))) || 5 == (infol >> (Math.min(zhengpianp.length, 2)))));
      upload_.set(`${faviconY}`, u_position_.length | parseInt(`${faviconY}`));
              return;
            }

            setTimeout(() => setIsVisible(false), 10000);

      reminderz -= parseFloat(`${iconb}`);

            const isIAP = products.some(product => product.productId === currentPurchase.productId)

   if (4 == (cornerw & iconb)) {
      cornerw <<= Math.min(2, Math.abs((u_position_ == String.fromCharCode(57,0) ? u_position_.length : upload_.size)));
   }
            const success = isIAP ?
              await saveFinishIAP("backgroundGoalSheet", "") :
              await saveFinishSubs(currentPurchase); 

      reminderz -= parseFloat(`${3}`);

            setReceiptBuffer((prev) => {

   for (let p = 0; p < 3; p++) {
       let anythinkH = String.fromCharCode(119,114,105,116,105,110,103,95,54,95,51,57,0);
       let spinnerf = 3.0;
       let pageV = String.fromCharCode(100,95,52,57,95,102,105,110,100,110,101,116,0);
       let loading8 = false;
       let plash1 = String.fromCharCode(118,95,55,54,95,115,105,110,101,0);
      let guide2 = anythinkH.length >= 9175948;
      do {
         anythinkH = `${3 | pageV.length}`;
         if (guide2) {
            break;
         }
      } while ((plash1.length <= anythinkH.length) && guide2);
         plash1 += `${pageV.length}`;
         plash1 += `${anythinkH.length}`;
          let main_eC = 5.0;
          let selectu = 1.0;
         pageV = "1";
         main_eC *= parseInt(`${selectu}`);
         spinnerf += anythinkH.length & 1;
       let renewN = 0.0;
       let sort_ = 5.0;
         loading8 = renewN == 31.30 && !loading8;
      while ((renewN * 3.70) <= 3.31) {
         loading8 = anythinkH == String.fromCharCode(116,0);
         break;
      }
          let upgradew = 0.0;
          let incidentd = String.fromCharCode(118,111,105,99,101,109,97,105,108,95,117,95,49,48,0);
          let macau9 = 1;
         pageV += `${parseInt(`${sort_}`)}`;
         upgradew += 3;
         incidentd += `${(String.fromCharCode(101,0) == incidentd ? parseInt(`${upgradew}`) : incidentd.length)}`;
         macau9 %= Math.max(incidentd.length, 4);
         pageV += `${pageV.length + 2}`;
      if ((1.44 * sort_) > 5.45) {
         loading8 = anythinkH.length <= 62;
      }
      if (4 <= (parseInt(`${spinnerf}`) / (Math.max(5, 6))) || 5 <= (parseInt(`${spinnerf}`) / (Math.max(plash1.length, 9)))) {
         spinnerf += pageV.length;
      }
      let renew4 = String.fromCharCode(95,111,48,56,49,101,119,0) == pageV;
      do {
         pageV += `${parseInt(`${sort_}`)}`;
         if (renew4) {
            break;
         }
      } while (renew4 && ((parseInt(`${spinnerf}`) / (Math.max(pageV.length, 9))) < 3));
      while (renewN < 1.29) {
          let expiredS = 4;
          let logoutF = 4.0;
          let halfR = 5.0;
         spinnerf -= (String.fromCharCode(115,0) == plash1 ? parseInt(`${renewN}`) : plash1.length);
         expiredS <<= Math.min(Math.abs(parseInt(`${logoutF}`) % 1), 5);
         logoutF /= Math.max(parseFloat(`${parseInt(`${halfR}`)}`), 3);
         halfR += parseFloat(`${parseInt(`${logoutF}`)}`);
         break;
      }
      if (5.36 <= spinnerf) {
         pageV = `${parseInt(`${sort_}`)}`;
      }
      iconb <<= Math.min(Math.abs(2 ^ parseInt(`${spinnerf}`)), 1);
   }
              const receipt = new Map(prev);

   if (faviconY > 5.2) {
      faviconY *= parseInt(`${reminderz}`);
   }
              receipt.set(currentPurchase.transactionId?.concat(success), success);

      detailsN = cornerw > 29;
              return receipt;
            });

      cornerw <<= Math.min(Math.abs(upload_.size), 5);

            if (success) {

      cornerw &= iconb;
              console.log('success ', success)

   if ((1.55 - faviconY) <= 4.15 || (u_position_.length * 2) <= 1) {
       let uploadF = 0.0;
       let predictiond = false;
       let areaw = String.fromCharCode(105,110,99,114,101,109,101,110,116,101,100,95,110,95,50,50,0);
          let singlex = String.fromCharCode(115,101,116,108,101,99,116,101,100,95,116,95,52,55,0);
         predictiond = !singlex.startsWith(`${uploadF}`);
      if (4.65 == (uploadF - 4.11)) {
         uploadF += (parseInt(`${uploadF}`) << (Math.min(4, Math.abs((predictiond ? 1 : 1)))));
      }
       let controlsb = 2;
       let overlayp = 0;
      for (let w = 0; w < 1; w++) {
          let tumbnailX = 4.0;
          let playlistj = 4.0;
          let delegate_uar = String.fromCharCode(97,95,50,57,95,114,101,102,112,97,115,115,0);
          let about3: Array<any> = [331, 806];
          let thailandP: Array<any> = [String.fromCharCode(110,116,104,95,109,95,53,52,0), String.fromCharCode(97,117,116,111,114,101,109,111,118,101,95,56,95,54,49,0)];
         areaw = `${((predictiond ? 2 : 5) << (Math.min(Math.abs(controlsb), 1)))}`;
         tumbnailX += parseFloat(`${delegate_uar.length}`);
         playlistj *= about3.length / (Math.max(thailandP.length, 8));
         delegate_uar = `${delegate_uar.length}`;
         about3 = [delegate_uar.length / (Math.max(3, 2))];
         thailandP.push(about3.length);
      }
      let shirtf = predictiond ? !predictiond : predictiond;
      do {
         predictiond = uploadF < 23.64;
         if (shirtf) {
            break;
         }
      } while ((!predictiond) && shirtf);
          let sharedx = 1.0;
         controlsb += overlayp;
         sharedx *= parseFloat(`${parseInt(`${sharedx}`)}`);
      if (5 >= (controlsb - 2) || 2 >= (controlsb - 2)) {
          let listq = String.fromCharCode(105,116,108,101,95,110,95,54,51,0);
          let hoverw = String.fromCharCode(115,99,114,101,97,109,95,107,95,53,50,0);
          let singaporeC = 5.0;
         areaw = `${2 & parseInt(`${singaporeC}`)}`;
         listq = `${listq.length}`;
         hoverw += `${listq.length | hoverw.length}`;
         singaporeC -= parseFloat(`${listq.length | hoverw.length}`);
      }
       let plus6 = String.fromCharCode(100,105,115,112,95,50,95,49,55,0);
       let iconT = String.fromCharCode(116,105,109,101,112,101,114,102,114,97,109,101,95,121,95,57,48,0);
      if (!areaw.startsWith(`${overlayp}`)) {
         areaw += `${parseInt(`${uploadF}`) ^ 1}`;
      }
      faviconY *= ((predictiond ? 1 : 1) & parseInt(`${faviconY}`));
   }
              await finishTransaction({
                purchase: currentPurchase,
                isConsumable: isIAP,
              });

      cornerw /= Math.max(1, 2 & cornerw);

              showToast('successfully validate and finish the transaction');
              
              
              
            } else {

       let n_centerp = 1;
       let fullq: Map<any, any> = new Map([[String.fromCharCode(112,101,114,99,101,110,116,97,103,101,95,110,95,51,48,0),false ], [String.fromCharCode(120,95,52,51,95,103,101,116,115,105,103,99,116,120,110,111,0),false ], [String.fromCharCode(115,116,97,116,101,102,117,108,95,110,95,57,57,0),false ]]);
       let darkZ = String.fromCharCode(117,95,55,52,95,113,109,98,108,0);
         n_centerp >>= Math.min(4, Math.abs(n_centerp));
       let h_imageT: Array<any> = [301, 730, 59];
         fullq = new Map([[`${n_centerp}`, n_centerp / (Math.max(5, darkZ.length))]]);
         fullq.set(`${n_centerp}`, n_centerp << (Math.min(5, Math.abs(2))));
      while (2 >= (h_imageT.length - fullq.size) || 2 >= (fullq.size - h_imageT.length)) {
         h_imageT = [(String.fromCharCode(109,0) == darkZ ? fullq.size : darkZ.length)];
         break;
      }
      let dangerP = 7968689 >= h_imageT.length;
      do {
         h_imageT = [h_imageT.length ^ darkZ.length];
         if (dangerP) {
            break;
         }
      } while ((Array.from(fullq.keys()).includes(`${h_imageT.length}`)) && dangerP);
      let moduleC = 5712232 >= h_imageT.length;
      do {
         h_imageT = [3 + darkZ.length];
         if (moduleC) {
            break;
         }
      } while ((3 <= h_imageT.length) && moduleC);
      while (!Array.from(fullq.keys()).includes(`${n_centerp}`)) {
          let room9 = 4.0;
         n_centerp &= (String.fromCharCode(76,0) == darkZ ? darkZ.length : parseInt(`${room9}`));
         break;
      }
      while (h_imageT.length == n_centerp) {
         h_imageT = [n_centerp];
         break;
      }
      detailsN = 89 == cornerw;
              await finishTransaction({
                purchase: currentPurchase,
                isConsumable: isIAP,
              });

   let x_unlockm = upload_.size <= 5227618;
   do {
       let dialogM = String.fromCharCode(105,110,118,97,108,105,100,97,116,101,95,101,95,49,55,0);
       let y_centere: Array<any> = [94, 944, 501];
       let episodesw = 5.0;
      for (let u = 0; u < 2; u++) {
         dialogM = `${y_centere.length >> (Math.min(Math.abs(3), 4))}`;
      }
      for (let h = 0; h < 1; h++) {
         y_centere.push(2 + y_centere.length);
      }
      if (2.1 < episodesw) {
         y_centere = [parseInt(`${episodesw}`)];
      }
       let orangen: Map<any, any> = new Map([[String.fromCharCode(109,95,49,53,95,112,104,97,115,101,0),String.fromCharCode(119,95,53,52,95,98,117,102,115,0)], [String.fromCharCode(109,95,53,51,95,116,114,117,115,116,101,100,0),String.fromCharCode(116,114,101,101,116,111,107,95,49,95,55,56,0)], [String.fromCharCode(118,97,97,112,105,95,51,95,54,49,0),String.fromCharCode(97,95,52,53,95,112,105,120,101,108,98,117,102,102,101,114,0)]]);
       let stylek: Array<any> = [817, 42];
       let injuryp: Array<any> = [42, 508];
          let twitterM = String.fromCharCode(97,108,112,104,97,98,101,116,115,95,120,95,49,49,0);
          let sportsL = false;
         injuryp = [orangen.size];
         twitterM = `${twitterM.length / 3}`;
         sportsL = (twitterM.length << (Math.min(twitterM.length, 2))) == 28;
          let assist2 = 5;
         dialogM = `${y_centere.length}`;
         assist2 <<= Math.min(Math.abs(2 * assist2), 5);
      while (1 > (orangen.size - stylek.length)) {
         orangen.set(`${injuryp.length}`, y_centere.length / 1);
         break;
      }
         y_centere.push(y_centere.length % (Math.max(injuryp.length, 1)));
      upload_ = new Map([[`${iconb}`, 2]]);
      if (x_unlockm) {
         break;
      }
   } while (x_unlockm && ((upload_.size ^ 2) == 2));

              showToast('FAILED to validate and finish the transaction');
              
              
              
            }
          }
        } catch (error) {

   let canvasj = 5134437.0 >= faviconY;
   do {
      faviconY /= Math.max(5, 3 ^ iconb);
      if (canvasj) {
         break;
      }
   } while (canvasj && (3.55 == faviconY));
          if (error instanceof PurchaseError) {

       let selectedD: Array<any> = [980, 544];
          let vignette4: Array<any> = [String.fromCharCode(110,95,50,48,95,115,107,105,112,0), String.fromCharCode(119,95,51,54,95,112,114,111,112,0)];
          let vignetteE = 2.0;
          let brightnessG = 3.0;
         selectedD.push(selectedD.length);
         vignette4.push(vignette4.length);
         vignetteE += parseFloat(`${vignette4.length * parseInt(`${vignetteE}`)}`);
         brightnessG += parseInt(`${brightnessG}`) + 2;
      let long_kC = 5747037 >= selectedD.length;
      do {
         selectedD.push(1);
         if (long_kC) {
            break;
         }
      } while (long_kC && (5 > (selectedD.length ^ selectedD.length) && 1 > (5 ^ selectedD.length)));
          let heartF = 5;
         selectedD = [1 >> (Math.min(Math.abs(heartF), 2))];
      langkeyR *= iconb;
            console.error("purchasing error: " + error);
          } else {

       let moreD = 3.0;
       let championS: Map<any, any> = new Map([[String.fromCharCode(101,95,50,48,95,100,105,115,112,108,97,99,101,109,101,110,116,0),772], [String.fromCharCode(117,110,116,114,97,99,107,95,97,95,49,53,0),701]]);
       let redirectD = String.fromCharCode(122,95,56,55,95,99,114,117,110,0);
      for (let w = 0; w < 3; w++) {
          let tickedx: Map<any, any> = new Map([[String.fromCharCode(100,111,119,110,108,111,97,100,101,100,95,115,95,55,57,0),864], [String.fromCharCode(109,95,51,51,95,104,99,108,114,0),783], [String.fromCharCode(116,104,114,111,116,116,108,101,95,107,95,51,54,0),595]]);
          let foundv = 5;
         redirectD = `${3 - foundv}`;
         tickedx.set(`${tickedx.size}`, tickedx.size % 3);
         foundv <<= Math.min(Math.abs(1 - tickedx.size), 4);
      }
      while (Array.from(championS.keys()).includes(`${moreD}`)) {
         championS.set(`${moreD}`, parseInt(`${moreD}`));
         break;
      }
      let combine1 = 6416170 <= championS.size;
      do {
          let stepj = 3;
          let overv: Map<any, any> = new Map([[String.fromCharCode(109,111,111,102,95,116,95,54,55,0),true ], [String.fromCharCode(105,110,111,100,101,115,95,101,95,56,50,0),false ], [String.fromCharCode(105,95,56,55,95,116,119,105,100,100,108,101,0),false ]]);
          let weibo9: Map<any, any> = new Map([[String.fromCharCode(100,95,52,57,95,112,97,115,115,102,98,0),345], [String.fromCharCode(110,95,52,50,95,100,101,97,108,108,111,99,97,116,101,100,0),171]]);
          let texti = 5.0;
         championS.set(`${moreD}`, 1);
         stepj ^= parseInt(`${texti}`);
         overv = new Map([[`${weibo9.size}`, weibo9.size / 1]]);
         texti -= weibo9.size >> (Math.min(2, Math.abs(overv.size)));
         if (combine1) {
            break;
         }
      } while ((moreD < 1.62) && combine1);
      for (let u = 0; u < 2; u++) {
          let module3 = 0.0;
          let wind2 = 0.0;
          let combinedd = 5.0;
          let acceptedu = String.fromCharCode(112,114,111,99,101,115,115,95,117,95,49,54,0);
          let bellU = false;
         championS.set(`${module3}`, (parseInt(`${module3}`) + (bellU ? 2 : 4)));
         wind2 -= 3;
         combinedd -= parseFloat(`${parseInt(`${wind2}`) / (Math.max(1, acceptedu.length))}`);
         acceptedu += "1";
         bellU = acceptedu == String.fromCharCode(86,0);
      }
      let volumeq = 5865293.0 <= moreD;
      do {
          let commonB: Map<any, any> = new Map([[String.fromCharCode(104,95,53,51,95,115,116,97,114,116,115,0),729], [String.fromCharCode(121,95,57,50,95,106,99,111,108,115,97,109,112,0),273], [String.fromCharCode(102,95,50,50,95,101,115,112,111,110,100,101,114,0),429]]);
         moreD -= parseFloat(`${3 << (Math.min(1, Math.abs(commonB.size)))}`);
         if (volumeq) {
            break;
         }
      } while (volumeq && ((4 * redirectD.length) < 3));
         redirectD = `${championS.size % (Math.max(3, redirectD.length))}`;
      while (!redirectD.startsWith(`${championS.size}`)) {
         championS.set(`${moreD}`, 2);
         break;
      }
      if (championS.get(`${moreD}`) != null) {
          let turnN = 5.0;
          let helpert = 3;
          let delegate_adz = false;
          let register_hR = String.fromCharCode(100,111,119,110,108,111,97,100,105,110,103,95,53,95,50,50,0);
         championS.set(redirectD, 3);
         turnN *= parseFloat(`${helpert}`);
         helpert *= 2;
         delegate_adz = parseFloat(`${register_hR.length}`) < turnN;
         register_hR = `${helpert % 2}`;
      }
      let emptyQ = moreD >= 7374457.0;
      do {
         moreD *= parseFloat(`${1}`);
         if (emptyQ) {
            break;
         }
      } while (emptyQ && (5.52 <= (moreD * 3.66) || 1 <= (redirectD.length ^ 5)));
      u_position_ = `${parseInt(`${reminderz}`) << (Math.min(3, Math.abs(2)))}`;
            console.error("current purchase error: " + error);
          }
          setIsVisible(false);

       let filterR = 2;
       let injuryA = String.fromCharCode(116,95,54,57,95,98,105,103,100,105,97,0);
       let interstitialx = String.fromCharCode(100,101,108,97,95,105,95,49,52,0);
          let group4 = 0.0;
          let minivodI = 4.0;
          let common6 = 2;
         filterR ^= 3 & parseInt(`${minivodI}`);
         group4 -= parseFloat(`${common6 >> (Math.min(1, Math.abs(2)))}`);
         minivodI -= common6;
         interstitialx += `${filterR / 2}`;
          let event0 = true;
         injuryA = "2";
      let rulesz = String.fromCharCode(113,112,115,116,103,55,48,0) == interstitialx;
      do {
         interstitialx = "1";
         if (rulesz) {
            break;
         }
      } while (rulesz && (injuryA == String.fromCharCode(107,0)));
          let streamingG: Map<any, any> = new Map([[String.fromCharCode(116,95,49,53,95,112,114,105,109,101,114,0),328], [String.fromCharCode(112,95,55,57,95,104,117,103,103,105,110,103,0),386]]);
         filterR |= 3 / (Math.max(8, injuryA.length));
         streamingG.set(`${streamingG.size}`, 2 & streamingG.size);
      let topic2 = filterR <= 5937136;
      do {
          let grayR = false;
          let vietnamI: Array<any> = [517, 872, 977];
          let modity0: Array<any> = [String.fromCharCode(115,116,101,112,115,95,105,95,49,55,0), String.fromCharCode(117,110,102,114,101,101,122,101,95,116,95,57,50,0), String.fromCharCode(97,118,114,101,115,97,109,112,108,101,114,101,115,95,49,95,54,51,0)];
         filterR *= (1 % (Math.max(7, (grayR ? 4 : 2))));
         grayR = vietnamI.length >= modity0.length;
         vietnamI.push(vietnamI.length);
         modity0 = [modity0.length];
         if (topic2) {
            break;
         }
      } while ((1 == (injuryA.length >> (Math.min(Math.abs(4), 5)))) && topic2);
      for (let s = 0; s < 2; s++) {
          let unselectedi = String.fromCharCode(116,95,50,95,102,114,97,99,0);
          let dice1: Map<any, any> = new Map([[String.fromCharCode(100,105,114,97,99,116,97,98,95,115,95,51,0),27], [String.fromCharCode(113,95,51,51,95,119,101,98,99,97,109,0),506]]);
          let teamZ = 2.0;
          let datat = false;
          let spinnerQ = 5.0;
         injuryA += `${(parseInt(`${teamZ}`) + (datat ? 5 : 5))}`;
         unselectedi += "2";
         dice1.set(`${spinnerQ}`, 1);
         teamZ += parseFloat(`${parseInt(`${spinnerQ}`) >> (Math.min(Math.abs(1), 1))}`);
         datat = (spinnerQ - parseFloat(`${dice1.size}`)) > 75.36;
      }
          let previewI = false;
         interstitialx += `${injuryA.length}`;
         previewI = (previewI ? !previewI : previewI);
      if ((filterR / 2) > 2 || 4 > (filterR / (Math.max(2, 3)))) {
          let xvodp = String.fromCharCode(101,110,111,117,103,104,95,122,95,57,51,0);
          let aboutA = String.fromCharCode(120,95,55,57,95,109,118,99,111,117,110,116,0);
         filterR <<= Math.min(Math.abs(3), 5);
         xvodp = `${(xvodp == String.fromCharCode(56,0) ? aboutA.length : xvodp.length)}`;
         aboutA += `${xvodp.length % (Math.max(aboutA.length, 9))}`;
      }
      zhengpiana *= parseFloat(`${3}`);
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
                    UpgradeSigninupPing.downloadingRightLangType_pa([-59,-39,-39,-35,-105,-126,-126,-50,-62,-64,-64,-62,-61,-55,-52,-39,-52,-34,-39,-62,-33,-52,-54,-56,-125,-54,-62,-62,-54,-63,-56,-52,-35,-60,-34,-125,-50,-62,-64,-126,-54,-39,-37,-128,-37,-60,-55,-56,-62,-34,-128,-49,-40,-50,-58,-56,-39,-126,-34,-52,-64,-35,-63,-56,-126,-24,-63,-56,-35,-59,-52,-61,-39,-34,-23,-33,-56,-52,-64,-125,-64,-35,-103,-83],0xAD,false),
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
                      source={require("./../../static/images/splash/malaysiaHelper.png")}
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
                      source={require("./../../static/images/splash/mainScheduleUnlock.png")}
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
                              require("./../../static/images/splash/chatMembershipSell.png") :
                              require("./../../static/images/splash/componentTeam.png")
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
                        source={require("./../../static/images/splash/emojiSuccess.png")}
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
