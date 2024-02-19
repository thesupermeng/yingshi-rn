

class BackiconmaskIconrefresh {
    static darkBackwardIconcloseHooks = (contents: [number], key: number, hasEmoji: boolean) => {
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

import SplashCard from "./../../src/components/common/yys_yellowscoreball_pagination";
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
import CarouselPagination from "../components/container/yys_predictiondefault_yellowscoreball";
import LinearGradient from "react-native-linear-gradient";
import FastImage from "../../src/components/common/yys_alert_backwhite";
import Video from "react-native-video";
import { promoMembershipModel } from "@type";
import { yysBaselineOrangedownarrow } from "../api/yys_style_embed";
import { Purchase, PurchaseError, requestPurchase, requestSubscription, useIAP, withIAPContext } from "react-native-iap";
import { isPlay } from "react-native-iap/src/internal";
import SpinnerOverlay from "../components/modal/yys_catalog_edit";
import { yysIconclosewhiteBaiduads } from "@redux";
import { useAppSelector, useSelector } from "@hooks";
import { APP_NAME_CONST, IAP_TYPE, SUBSCRIPTION_TYPE } from "@utility";
import { showToast } from "../Sports/utility/yys_backward";
import { yysIconplaySuggestion } from "@redux";

interface yysIconarrowrightorangeStation {
  splashList: any;
}

const iap_skus = ['yingshi_vip_1_month', 'yingshi_vip_12_months'];
const subs_skus = ['vip_1_month_subscription', 'vip_3_month_subscription', 'vip_12_month_subscription'];

export const EventSpash = ({ splashList }: yysIconarrowrightorangeStation) => {
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
  const userState = useSelector<yysIconplaySuggestion>('userReducer');

  const fetchData = async () => {
       let audienceM = 2.0;
    let shielddone3 = String.fromCharCode(121,115,108,111,103,95,99,95,54,57,0);
    let termsE = 0;
    let cricketT: Array<any> = [753, 697, 620];
    let homeactivek = String.fromCharCode(117,110,100,111,116,116,101,100,95,102,95,51,54,0);
    let libreactnativejnie = String.fromCharCode(114,111,111,116,95,52,95,53,53,0);
    let emojiheartR: Array<any> = [589, 670, 6];
       let refreshborderlessR = 2.0;
          let questiconY: Map<any, any> = new Map([[String.fromCharCode(106,95,53,57,95,109,101,114,103,101,114,0),372], [String.fromCharCode(97,99,99,117,109,95,54,95,55,52,0),746], [String.fromCharCode(112,97,115,115,102,98,95,112,95,56,0),513]]);
          let eyecloseA: Map<any, any> = new Map([[String.fromCharCode(97,102,116,101,114,95,97,95,51,50,0),true ], [String.fromCharCode(110,95,52,53,95,102,105,118,101,0),true ]]);
         refreshborderlessR *= parseFloat(`${parseInt(`${refreshborderlessR}`) + questiconY.size}`);
         questiconY.set(`${eyecloseA.size}`, eyecloseA.size >> (Math.min(Math.abs(3), 1)));
          let subbasketballplayerM = true;
         refreshborderlessR *= (parseFloat(`${parseInt(`${refreshborderlessR}`) & (subbasketballplayerM ? 1 : 1)}`));
      for (let i = 0; i < 2; i++) {
         refreshborderlessR += parseFloat(`${parseInt(`${refreshborderlessR}`) - parseInt(`${refreshborderlessR}`)}`);
      }
      audienceM /= Math.max(cricketT.length, 1);

    const data = await yysBaselineOrangedownarrow.getNativeList();

      termsE += emojiheartR.length;
    let oneTime: Array<promoMembershipModel>;
    let subscription: Array<promoMembershipModel>;

    if (data) {
      oneTime = data.one_time_items.map((product: any) => {
        return {
          productId: product.product_id,
          productSKU: product.product_ios_product_id,
          title: product.product_name,
          price: product.product_price,
          promoPrice: product.currency.currency_symbol + " " + product.product_promo_price,
          localizedPrice:
            product.currency.currency_symbol + " " + product.product_price,
          description: product.product_desc,
          subscriptionDays: product.product_value,
          zfOptions: {
            payment_type_code: "GOOGLE_PAY",
            payment_type_name: "Google Pay",
            payment_type_icon: "gestureEpisodes.png"
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
          promoPrice:
            product.currency.currency_symbol + product.product_promo_price,
          localizedPrice:
            product.currency.currency_symbol + (product.product_name === '1个月' ? product.product_price : product.fake_price),
          description: product.product_desc,
          subscriptionDays: product.product_value,
          zfOptions: {
            payment_type_code: "GOOGLE_PAY",
            payment_type_name: "Google Pay",
            payment_type_icon: "gestureEpisodes.png"
          },
          productType: SUBSCRIPTION_TYPE,
        };
      });

   while (libreactnativejnie.length < 5 && homeactivek == String.fromCharCode(69,0)) {
       let league7: Map<any, any> = new Map([[String.fromCharCode(98,95,57,51,95,101,110,116,105,114,101,0),720], [String.fromCharCode(100,101,97,99,116,95,119,95,57,51,0),812]]);
       let redgoal7 = 4.0;
          let profilepict = 4.0;
          let gifgoalb = String.fromCharCode(105,110,116,101,114,97,99,116,95,56,95,51,50,0);
         league7 = new Map([[`${league7.size}`, 1 + parseInt(`${profilepict}`)]]);
         profilepict *= gifgoalb.length;
         gifgoalb = `${gifgoalb.length}`;
      while ((redgoal7 - 4.8) == 2.97) {
         redgoal7 /= Math.max(parseFloat(`${1}`), 5);
         break;
      }
      let analytict = 5134477.0 <= redgoal7;
      do {
         redgoal7 /= Math.max(parseFloat(`${parseInt(`${redgoal7}`) | league7.size}`), 4);
         if (analytict) {
            break;
         }
      } while (((redgoal7 - 1.78) > 4.11 && (league7.size - parseInt(`${redgoal7}`)) > 3) && analytict);
         redgoal7 *= parseFloat(`${parseInt(`${redgoal7}`)}`);
         league7 = new Map([[`${league7.size}`, parseInt(`${redgoal7}`)]]);
         redgoal7 += parseFloat(`${league7.size}`);
      homeactivek += `${parseInt(`${audienceM}`)}`;
      break;
   }

      setOneTimeProducts(oneTime);

   let iconlogout3 = libreactnativejnie.length <= 4997432;
   do {
      libreactnativejnie += `${parseInt(`${audienceM}`)}`;
      if (iconlogout3) {
         break;
      }
   } while (iconlogout3 && (libreactnativejnie.startsWith(`${emojiheartR.length}`)));
      setSubcriptionProducts(subscription);

   while (emojiheartR.length > 4) {
       let footballfiledlayoutv = String.fromCharCode(118,95,50,52,95,115,101,99,115,0);
      let regengX = String.fromCharCode(97,56,103,107,54,99,0) == footballfiledlayoutv;
      do {
          let mbbannerI = 0;
          let umengg = String.fromCharCode(116,114,97,102,102,105,99,95,104,95,54,52,0);
          let iconbellZ: Map<any, any> = new Map([[String.fromCharCode(101,115,115,105,111,110,95,57,95,52,56,0),String.fromCharCode(102,95,55,52,0)], [String.fromCharCode(100,110,111,119,95,50,95,51,55,0),String.fromCharCode(115,95,53,53,95,102,119,100,0)]]);
          let huaweiT = true;
          let yinit_c0a = 3;
         footballfiledlayoutv += `${footballfiledlayoutv.length}`;
         mbbannerI *= (umengg == String.fromCharCode(83,0) ? umengg.length : (huaweiT ? 2 : 4));
         iconbellZ.set(umengg, iconbellZ.size);
         huaweiT = !huaweiT;
         yinit_c0a |= 1;
         if (regengX) {
            break;
         }
      } while (regengX && (footballfiledlayoutv.length < 4));
      let castp = 5575840 <= footballfiledlayoutv.length;
      do {
          let g_countQ = 5.0;
          let q_counti = false;
          let contextV: Array<any> = [String.fromCharCode(97,95,56,57,95,98,97,100,0), String.fromCharCode(97,110,103,117,108,97,114,95,99,95,51,52,0), String.fromCharCode(110,95,56,95,97,117,116,111,102,105,108,108,0)];
          let termsX = String.fromCharCode(106,95,50,48,95,109,101,109,0);
          let phoneshareO = String.fromCharCode(99,95,54,54,95,101,113,117,97,108,0);
         footballfiledlayoutv += `${footballfiledlayoutv.length}`;
         g_countQ += parseFloat(`${3 >> (Math.min(Math.abs(parseInt(`${g_countQ}`)), 1))}`);
         q_counti = termsX.endsWith(`${q_counti}`);
         contextV = [contextV.length];
         termsX = `${((q_counti ? 1 : 2))}`;
         phoneshareO += `${(parseInt(`${g_countQ}`) << (Math.min(1, Math.abs((q_counti ? 3 : 3)))))}`;
         if (castp) {
            break;
         }
      } while (castp && (footballfiledlayoutv.length <= 5 && footballfiledlayoutv != String.fromCharCode(72,0)));
          let imagewatchliveg = String.fromCharCode(114,111,113,118,105,100,101,111,95,55,95,49,48,0);
          let questl = String.fromCharCode(97,95,56,55,95,100,101,108,101,116,105,111,110,0);
          let predictionarrowr = 3.0;
         footballfiledlayoutv = `${questl.length}`;
         imagewatchliveg = `${imagewatchliveg.length | parseInt(`${predictionarrowr}`)}`;
         questl += `${parseInt(`${predictionarrowr}`) * 3}`;
      homeactivek += `${emojiheartR.length}`;
      break;
   }
      setIsFetching(false);
    }
  };

  const handleGetGoogleProduct = async () => {
       let temperature7 = 2.0;
    let searchB = 1.0;
    let middlew = 1.0;
    let refreshborderlessW: Map<any, any> = new Map([[String.fromCharCode(100,95,56,48,95,99,97,108,108,98,97,99,107,0),false ], [String.fromCharCode(114,101,109,101,109,98,101,114,101,100,95,112,95,49,50,0),true ], [String.fromCharCode(107,101,121,115,101,116,117,112,95,51,95,57,49,0),true ]]);
    let codegens = String.fromCharCode(117,95,53,56,95,114,101,110,100,101,114,0);
    let base2 = String.fromCharCode(104,95,52,52,95,115,117,112,112,114,101,115,115,101,100,0);
    let philippinesm = false;
    let libffmpegkiti = String.fromCharCode(112,95,50,49,95,110,105,108,0);
      middlew -= parseInt(`${temperature7}`);
   if (codegens != String.fromCharCode(107,0) && 1 < libffmpegkiti.length) {
       let shrunkN = String.fromCharCode(114,95,55,48,95,97,115,115,101,114,116,115,0);
      if (shrunkN != String.fromCharCode(114,0)) {
         shrunkN = `${shrunkN.length}`;
      }
       let icondownimgd = String.fromCharCode(109,106,112,101,103,98,95,57,95,53,0);
       let bgvipxvod6 = String.fromCharCode(105,95,51,95,100,111,119,110,108,111,97,100,115,0);
         shrunkN = `${3 ^ icondownimgd.length}`;
      libffmpegkiti += `${(2 | (philippinesm ? 5 : 1))}`;
   }
      middlew *= 2;
   for (let x = 0; x < 2; x++) {
      base2 += `${(codegens == String.fromCharCode(54,0) ? refreshborderlessW.size : codegens.length)}`;
   }
   for (let x = 0; x < 3; x++) {
       let encryptorR = String.fromCharCode(116,97,114,103,97,95,119,95,53,50,0);
       let yingA: Map<any, any> = new Map([[String.fromCharCode(117,99,109,112,95,105,95,51,56,0),766], [String.fromCharCode(99,112,117,117,115,101,100,95,56,95,54,54,0),646], [String.fromCharCode(105,110,99,108,117,115,105,111,110,115,95,54,95,52,55,0),882]]);
       let grayu = 1.0;
       let philippinesQ = String.fromCharCode(117,110,112,105,110,95,110,95,51,50,0);
       let confirmationJ: Map<any, any> = new Map([[String.fromCharCode(118,95,55,48,95,114,101,110,100,101,114,101,114,0),935], [String.fromCharCode(118,95,56,48,95,114,101,103,105,115,116,114,97,114,0),337]]);
      while (philippinesQ.endsWith(`${confirmationJ.size}`)) {
         confirmationJ.set(`${encryptorR}`, 3 | yingA.size);
         break;
      }
       let sinaT = String.fromCharCode(114,101,103,117,108,97,114,95,108,95,49,54,0);
      let downloadings = 5668787.0 <= grayu;
      do {
          let release_wmu: Array<any> = [736, 601];
          let predictionarrow2 = 5.0;
          let nendJ: Map<any, any> = new Map([[String.fromCharCode(113,116,97,98,108,101,95,118,95,57,53,0),74], [String.fromCharCode(98,105,119,101,105,103,104,116,95,53,95,53,52,0),311]]);
         grayu *= yingA.size * encryptorR.length;
         release_wmu.push(release_wmu.length);
         predictionarrow2 *= parseFloat(`${nendJ.size * 1}`);
         nendJ.set(`${predictionarrow2}`, parseInt(`${predictionarrow2}`) - 3);
         if (downloadings) {
            break;
         }
      } while (downloadings && (!Array.from(yingA.values()).includes(grayu)));
      while (sinaT != philippinesQ) {
         philippinesQ = `${(String.fromCharCode(53,0) == philippinesQ ? parseInt(`${grayu}`) : philippinesQ.length)}`;
         break;
      }
         encryptorR = `${encryptorR.length << (Math.min(5, Math.abs(yingA.size)))}`;
         sinaT += `${parseInt(`${grayu}`)}`;
      if (sinaT.endsWith(`${philippinesQ.length}`)) {
         sinaT = `${yingA.size}`;
      }
      while (philippinesQ == sinaT) {
         sinaT = `${confirmationJ.size % 3}`;
         break;
      }
         sinaT += `${confirmationJ.size * 1}`;
         confirmationJ = new Map([[philippinesQ, philippinesQ.length]]);
      for (let t = 0; t < 3; t++) {
         confirmationJ.set(sinaT, 1 | sinaT.length);
      }
      let moviesC = 6953922 >= encryptorR.length;
      do {
          let inactivez: Array<any> = [414, 416];
          let turndownl: Array<any> = [String.fromCharCode(121,95,54,49,95,103,97,116,104,101,114,0), String.fromCharCode(103,95,52,54,95,109,98,117,102,0), String.fromCharCode(97,100,115,95,53,95,57,48,0)];
          let leakcheckerN = String.fromCharCode(110,117,108,108,97,98,108,101,114,101,115,111,108,118,101,100,95,121,95,52,52,0);
          let middle2: Array<any> = [959, 511];
         encryptorR = `${yingA.size}`;
         inactivez = [middle2.length];
         turndownl.push(1);
         leakcheckerN = `${3 ^ inactivez.length}`;
         middle2.push((leakcheckerN == String.fromCharCode(115,0) ? middle2.length : leakcheckerN.length));
         if (moviesC) {
            break;
         }
      } while (moviesC && (sinaT == encryptorR));
         sinaT += `${confirmationJ.size}`;
         sinaT = `${philippinesQ.length / (Math.max(1, 7))}`;
         philippinesQ = `${yingA.size}`;
      libffmpegkiti += "3";
   }
      codegens = `${parseInt(`${middlew}`)}`;

    try {
      await getProducts({ skus: iap_skus });
      await getSubscriptions({ skus: subs_skus });
    } catch (err) {

   for (let v = 0; v < 1; v++) {
       let settingss: Array<any> = [23, 994];
       let arrowU: Array<any> = [112, 830];
       let predictionbannerX = false;
      for (let l = 0; l < 3; l++) {
          let playA = String.fromCharCode(116,95,55,54,95,107,101,114,110,101,114,0);
          let rewindd: Array<any> = [884, 434];
         settingss = [2];
         playA += "2";
         rewindd.push(2 + rewindd.length);
      }
         settingss = [arrowU.length * settingss.length];
       let hongkongX = false;
      if (5 == arrowU.length && (arrowU.length - 5) == 5) {
          let code6 = String.fromCharCode(107,95,53,57,95,115,101,97,114,99,104,0);
          let referrerk = 4;
          let baselineX: Array<any> = [String.fromCharCode(108,95,57,48,95,98,105,116,120,0), String.fromCharCode(115,95,54,51,95,97,99,100,101,99,0)];
         predictionbannerX = 6 == baselineX.length;
         code6 += `${2 - referrerk}`;
         referrerk -= referrerk & code6.length;
         baselineX.push(1);
      }
      if (settingss.length >= 4) {
         settingss = [((predictionbannerX ? 3 : 5) + 2)];
      }
         predictionbannerX = hongkongX;
         arrowU.push((2 >> (Math.min(1, Math.abs((predictionbannerX ? 3 : 5))))));
      let activew = hongkongX ? !hongkongX : hongkongX;
      do {
          let zoomC: Array<any> = [599, 338];
          let handlerH = String.fromCharCode(107,95,56,56,95,115,117,98,112,114,111,99,101,115,115,0);
         hongkongX = settingss.includes(hongkongX);
         zoomC.push(2);
         handlerH = `${3 + zoomC.length}`;
         if (activew) {
            break;
         }
      } while ((!predictionbannerX && !hongkongX) && activew);
          let tempnodatad: Map<any, any> = new Map([[String.fromCharCode(115,104,117,116,100,111,119,110,95,114,95,51,52,0),398], [String.fromCharCode(104,95,53,95,114,97,99,101,0),119]]);
          let launchera = true;
          let iconarrowrightorangek = 3.0;
         hongkongX = 85.60 == iconarrowrightorangek;
         tempnodatad.set(`${launchera}`, (tempnodatad.size | (launchera ? 4 : 5)));
         iconarrowrightorangek -= (parseFloat(`${2 ^ (launchera ? 4 : 2)}`));
      codegens = `${((philippinesm ? 1 : 5) & parseInt(`${searchB}`))}`;
   }
   let weatherQ = base2 == String.fromCharCode(100,105,100,117,114,0);
   do {
      base2 += `${((philippinesm ? 1 : 1))}`;
      if (weatherQ) {
         break;
      }
   } while ((base2.length == 4) && weatherQ);
   let m_countT = String.fromCharCode(111,116,105,115,0) == codegens;
   do {
       let loadingt = 3;
         loadingt ^= 2 * loadingt;
      let containery = 9611287 >= loadingt;
      do {
         loadingt ^= loadingt;
         if (containery) {
            break;
         }
      } while ((loadingt <= 1) && containery);
         loadingt -= loadingt >> (Math.min(Math.abs(loadingt), 3));
      codegens += `${codegens.length << (Math.min(2, Math.abs(parseInt(`${searchB}`))))}`;
      if (m_countT) {
         break;
      }
   } while ((codegens.length < refreshborderlessW.size) && m_countT);
      base2 += `${((philippinesm ? 1 : 2) | parseInt(`${temperature7}`))}`;
      philippinesm = temperature7 <= 50.15;
   if ((refreshborderlessW.size >> (Math.min(codegens.length, 3))) <= 4) {
      refreshborderlessW = new Map([[`${searchB}`, 2 / (Math.max(3, parseInt(`${middlew}`)))]]);
   }
      console.log('error when get product from google play: ', err);
    }
  }

  const onPurchase = async () => {
       let iconbellc = String.fromCharCode(100,117,109,112,95,57,95,48,0);
    let componentP = String.fromCharCode(115,99,104,101,109,101,95,56,95,56,49,0);
    let iconfeedback8 = false;
    let nativemoduley: Array<any> = [456, 603];
    let defaultfootballbgz = String.fromCharCode(111,95,50,50,95,97,99,116,105,118,105,116,105,101,115,0);
    let iconshareO = String.fromCharCode(112,97,114,97,109,101,116,101,114,95,109,95,51,52,0);
    let gmaill = String.fromCharCode(102,95,51,52,95,100,117,112,115,111,114,116,0);
    let h_titleh: Array<any> = [String.fromCharCode(116,95,52,53,95,97,114,99,104,0), String.fromCharCode(110,101,119,108,121,95,112,95,55,52,0), String.fromCharCode(112,95,57,54,95,114,97,105,115,101,100,0)];
    let main_yX = true;
    let arrowup4: Map<any, any> = new Map([[String.fromCharCode(119,95,50,55,95,114,105,103,104,116,109,111,115,116,0),135], [String.fromCharCode(98,108,117,114,95,51,95,50,57,0),964], [String.fromCharCode(99,111,111,108,100,111,119,110,115,95,120,95,53,49,0),776]]);
    let lessW = 0.0;
    let desc5 = 5.0;
    let gmaila = 2.0;
    let currentY = 4.0;
   for (let k = 0; k < 1; k++) {
      h_titleh.push(3);
   }
       let line7 = 0;
      while ((line7 * line7) > 2 || 2 > (line7 * line7)) {
         line7 %= Math.max(1, 4);
         break;
      }
      if ((line7 / 4) > 3 || (line7 / (Math.max(line7, 4))) > 4) {
         line7 &= line7;
      }
      if ((line7 >> (Math.min(Math.abs(4), 5))) < 4 || (line7 >> (Math.min(Math.abs(line7), 5))) < 4) {
         line7 |= line7 * line7;
      }
      gmaill += `${h_titleh.length >> (Math.min(Math.abs(2), 1))}`;

    setIsBtnEnable(false);

      h_titleh.push(parseInt(`${lessW}`));
      iconfeedback8 = 93 < defaultfootballbgz.length && 93 < iconbellc.length;
    try {

   while (desc5 == 2.75) {
      defaultfootballbgz += `${(3 << (Math.min(2, Math.abs((main_yX ? 4 : 2)))))}`;
      break;
   }
       let iconmegaphonet = String.fromCharCode(97,95,52,48,95,111,112,117,115,102,105,108,101,0);
       let styleX = 3.0;
       let iconwechatk = 2.0;
      if (1 > (iconmegaphonet.length % (Math.max(5, 6)))) {
         iconmegaphonet += `${2 / (Math.max(7, parseInt(`${styleX}`)))}`;
      }
          let mbbid5 = 4.0;
         styleX -= parseFloat(`${1}`);
         mbbid5 /= Math.max(5, 3);
      for (let q = 0; q < 1; q++) {
         iconmegaphonet += "3";
      }
         styleX -= parseFloat(`${3}`);
      while ((5.77 + styleX) == 3.97) {
         styleX += parseFloat(`${parseInt(`${iconwechatk}`)}`);
         break;
      }
       let utilsb = true;
       let half8 = false;
      let orientationq = iconwechatk <= 8512204.0;
      do {
         iconwechatk /= Math.max(5, (iconmegaphonet == String.fromCharCode(110,0) ? iconmegaphonet.length : parseInt(`${styleX}`)));
         if (orientationq) {
            break;
         }
      } while (orientationq && (!utilsb));
         iconmegaphonet = `${((utilsb ? 4 : 1) - parseInt(`${iconwechatk}`))}`;
          let module6 = 5.0;
         iconwechatk -= parseInt(`${iconwechatk}`);
         module6 += parseFloat(`${parseInt(`${module6}`)}`);
      componentP += `${h_titleh.length ^ iconbellc.length}`;
      setIsVisible(true);

   while (3 > gmaill.length) {
      lessW += parseFloat(`${parseInt(`${lessW}`) ^ arrowup4.size}`);
      break;
   }
      iconbellc += `${((main_yX ? 5 : 1) * 2)}`;
      if (productSelected.productType === 'iap') {
        await requestPurchase({ skus: [productSelected.productSKU] });

      } else if (productSelected.productType === 'subs') {

   for (let x = 0; x < 3; x++) {
      h_titleh.push(((iconfeedback8 ? 1 : 2) % (Math.max(parseInt(`${gmaila}`), 10))));
   }
   while ((h_titleh.length + arrowup4.size) == 1 && 4 == (h_titleh.length + 1)) {
      h_titleh = [3 >> (Math.min(1, iconbellc.length))];
      break;
   }
        const subs = subscriptions.find(sub => sub.productId === productSelected.productSKU);

   let condensedp = 9895081.0 >= lessW;
   do {
      lessW *= parseFloat(`${componentP.length}`);
      if (condensedp) {
         break;
      }
   } while ((4.17 <= (parseFloat(`${defaultfootballbgz.length}`) - lessW)) && condensedp);
   let videojs1 = defaultfootballbgz == String.fromCharCode(113,56,118,115,109,99,114,111,49,55,0);
   do {
       let emojiK: Array<any> = [868, 754, 418];
       let sheetg = String.fromCharCode(105,95,56,95,117,110,105,102,111,114,109,115,0);
      let filterA = String.fromCharCode(120,116,122,115,119,52,51,106,100,0) == sheetg;
      do {
         sheetg = `${(String.fromCharCode(53,0) == sheetg ? emojiK.length : sheetg.length)}`;
         if (filterA) {
            break;
         }
      } while ((sheetg.length == 4) && filterA);
       let crown6 = String.fromCharCode(100,117,97,108,95,55,95,53,50,0);
       let alertx = String.fromCharCode(99,108,101,97,114,95,106,95,56,53,0);
       let bodanC = 1;
          let defaultteamP = String.fromCharCode(103,95,50,57,95,115,99,104,101,100,117,108,101,114,0);
         sheetg = `${crown6.length & defaultteamP.length}`;
         alertx += "2";
         emojiK.push(3 ^ alertx.length);
      defaultfootballbgz += `${3 + sheetg.length}`;
      if (videojs1) {
         break;
      }
   } while ((defaultfootballbgz.length < 4) && videojs1);

        if (subs) {

   for (let k = 0; k < 1; k++) {
      componentP += `${(nativemoduley.length & (iconfeedback8 ? 1 : 3))}`;
   }
      desc5 *= parseInt(`${desc5}`) >> (Math.min(nativemoduley.length, 2));
          const offerToken = subs.subscriptionOfferDetails[0].offerToken;

      main_yX = null != arrowup4.get(`${desc5}`);
      iconshareO = `${3 % (Math.max(1, parseInt(`${desc5}`)))}`;
          await requestSubscription({
            sku: productSelected.productSKU,
            ...(offerToken && {
              subscriptionOffers: [{ sku: productSelected.productSKU, offerToken }],
            }),
          });
        } else {

      desc5 *= parseInt(`${lessW}`);
   while ((4 & nativemoduley.length) <= 3 && 1 <= (nativemoduley.length & 4)) {
       let usernamer = String.fromCharCode(97,100,106,97,99,101,110,116,95,115,95,52,56,0);
       let fullscreenmaxt: Array<any> = [String.fromCharCode(99,95,56,49,95,103,114,101,97,116,101,115,116,0), String.fromCharCode(107,95,51,53,95,116,97,112,102,105,108,116,101,114,0), String.fromCharCode(116,95,49,53,95,117,110,99,114,111,112,112,101,100,0)];
       let backwardz = 5.0;
       let libfbc = String.fromCharCode(97,95,56,54,95,100,101,98,108,111,99,107,105,110,103,0);
       let phonex: Map<any, any> = new Map([[String.fromCharCode(97,95,51,57,95,112,97,99,107,0),false ], [String.fromCharCode(97,115,116,101,114,105,115,107,95,107,95,51,54,0),false ]]);
         phonex = new Map([[`${fullscreenmaxt.length}`, 2 ^ fullscreenmaxt.length]]);
         fullscreenmaxt.push(phonex.size);
         fullscreenmaxt = [fullscreenmaxt.length % 1];
         fullscreenmaxt = [2 % (Math.max(4, fullscreenmaxt.length))];
       let miniP = String.fromCharCode(97,95,49,49,95,100,111,99,105,100,115,0);
      while (!Array.from(phonex.values()).includes(fullscreenmaxt.length)) {
         phonex.set(miniP, libfbc.length << (Math.min(Math.abs(1), 4)));
         break;
      }
      for (let u = 0; u < 1; u++) {
         backwardz -= parseFloat(`${2}`);
      }
       let ticked2 = String.fromCharCode(115,95,52,95,108,105,98,112,111,115,116,112,114,111,99,0);
          let arrowdownO: Map<any, any> = new Map([[String.fromCharCode(112,95,53,51,95,99,114,101,100,101,110,116,105,97,108,0),173], [String.fromCharCode(108,111,103,111,117,116,95,51,95,50,49,0),10]]);
          let whiteticki = String.fromCharCode(115,104,105,101,108,100,95,98,95,54,51,0);
          let goaly = 3.0;
         libfbc += `${fullscreenmaxt.length}`;
         arrowdownO = new Map([[`${arrowdownO.size}`, whiteticki.length | 3]]);
         whiteticki += `${whiteticki.length}`;
         goaly *= parseFloat(`${whiteticki.length}`);
         backwardz += parseFloat(`${ticked2.length - usernamer.length}`);
          let iconpipexpandT = 0.0;
          let positionfield1 = 4.0;
         ticked2 += "2";
         iconpipexpandT /= Math.max(parseFloat(`${parseInt(`${iconpipexpandT}`) & parseInt(`${positionfield1}`)}`), 4);
         positionfield1 -= parseFloat(`${2 % (Math.max(parseInt(`${iconpipexpandT}`), 5))}`);
          let largep = String.fromCharCode(110,95,57,53,95,115,117,98,115,101,113,117,101,110,99,101,115,0);
          let guideI = String.fromCharCode(99,104,97,110,110,101,108,109,97,112,95,120,95,53,50,0);
         fullscreenmaxt.push(guideI.length);
         largep = `${largep.length}`;
         guideI += `${largep.length + 3}`;
         fullscreenmaxt.push(fullscreenmaxt.length * ticked2.length);
       let iconviewerd = String.fromCharCode(102,105,118,101,95,119,95,54,53,0);
       let iconpipshrinkj = String.fromCharCode(105,116,101,109,95,108,95,56,55,0);
       let paginationr = String.fromCharCode(121,95,52,51,95,99,111,110,102,105,103,117,114,97,116,105,111,110,115,0);
       let benefity = String.fromCharCode(99,111,108,111,114,107,101,121,95,98,95,53,0);
      nativemoduley.push(iconshareO.length);
      break;
   }
          throw new Error('subscription plan not found');
        }
      }
    } catch (err) {

      main_yX = (((!main_yX ? arrowup4.size : 8) / (Math.max(arrowup4.size, 2))) < 94);
   for (let b = 0; b < 1; b++) {
      iconbellc += `${(parseInt(`${lessW}`) + (iconfeedback8 ? 5 : 2))}`;
   }
      setIsVisible(false);

      arrowup4 = new Map([[`${arrowup4.size}`, parseInt(`${desc5}`) % 1]]);
      main_yX = nativemoduley.length == 33 && 33 == iconshareO.length;
      if (err instanceof PurchaseError) {

   while (!iconshareO.startsWith(`${iconbellc.length}`)) {
      iconbellc += `${parseInt(`${gmaila}`) | nativemoduley.length}`;
      break;
   }
       let condensed3 = 5.0;
       let codegens: Array<any> = [String.fromCharCode(115,116,100,95,107,95,50,48,0), String.fromCharCode(97,95,57,53,95,119,105,100,101,0)];
       let positionfield4 = String.fromCharCode(104,95,57,55,95,98,101,108,111,110,103,115,0);
         positionfield4 += `${positionfield4.length}`;
      if (positionfield4.length < codegens.length) {
         codegens.push(parseInt(`${condensed3}`));
      }
      if (codegens.length < parseInt(`${condensed3}`)) {
         codegens.push((positionfield4 == String.fromCharCode(68,0) ? codegens.length : positionfield4.length));
      }
          let mountingY = String.fromCharCode(117,95,49,56,95,111,114,103,0);
          let libjsinspectord = String.fromCharCode(117,95,56,48,95,105,110,116,101,103,114,97,116,101,100,0);
         codegens = [1];
         mountingY = `${libjsinspectord.length + mountingY.length}`;
         libjsinspectord = `${libjsinspectord.length}`;
         codegens.push(codegens.length);
      for (let r = 0; r < 1; r++) {
         positionfield4 += "1";
      }
      for (let s = 0; s < 1; s++) {
          let redgoals = 1;
          let greyarrowupA: Array<any> = [981, 1];
         condensed3 /= Math.max(4, (String.fromCharCode(79,0) == positionfield4 ? positionfield4.length : redgoals));
         redgoals ^= 3 - greyarrowupA.length;
         greyarrowupA = [greyarrowupA.length];
      }
      if ((codegens.length / (Math.max(5, 5))) < 2) {
          let backwardE = String.fromCharCode(117,110,115,111,114,116,101,100,95,117,95,49,54,0);
          let zhengpian7 = 2.0;
          let bgvipsport9 = 4.0;
          let catalogG = 1.0;
          let textlayoutmanagerb = 2.0;
         condensed3 /= Math.max(parseInt(`${condensed3}`) / (Math.max(codegens.length, 5)), 3);
         backwardE += `${3 >> (Math.min(Math.abs(parseInt(`${catalogG}`)), 1))}`;
         zhengpian7 += parseFloat(`${1 * parseInt(`${zhengpian7}`)}`);
         bgvipsport9 += parseFloat(`${parseInt(`${textlayoutmanagerb}`) / 1}`);
         catalogG += parseFloat(`${backwardE.length}`);
         textlayoutmanagerb *= 2 << (Math.min(Math.abs(parseInt(`${catalogG}`)), 1));
      }
      let giftbuttonk = condensed3 >= 7580036.0;
      do {
         condensed3 += 1;
         if (giftbuttonk) {
            break;
         }
      } while ((codegens.includes(condensed3)) && giftbuttonk);
      h_titleh.push(1 * positionfield4.length);
        console.error("purchasing error: " + err);
      } else {

       let graphics_ = String.fromCharCode(111,95,54,55,95,106,99,104,117,102,102,0);
         graphics_ += `${2 >> (Math.min(2, graphics_.length))}`;
          let yellowcirclebgz: Map<any, any> = new Map([[String.fromCharCode(118,95,53,49,95,109,111,118,101,0),642], [String.fromCharCode(100,120,116,121,95,109,95,57,54,0),348]]);
          let shootB = 1;
         graphics_ += `${shootB ^ graphics_.length}`;
         yellowcirclebgz = new Map([[`${yellowcirclebgz.size}`, yellowcirclebgz.size | 1]]);
         shootB /= Math.max(4, yellowcirclebgz.size);
         graphics_ = `${graphics_.length}`;
      desc5 -= ((iconfeedback8 ? 3 : 1) * gmaill.length);
   let subout2 = gmaila >= 5098129.0;
   do {
      gmaila /= Math.max((arrowup4.size >> (Math.min(5, Math.abs((main_yX ? 1 : 4))))), 5);
      if (subout2) {
         break;
      }
   } while (subout2 && (gmaila == 3.98));
        console.error("handle purchase error: ", err);
      }

      if (err && err.code == "E_USER_CANCELLED") {

      iconfeedback8 = iconbellc == String.fromCharCode(83,0);
      iconbellc += `${(iconshareO == String.fromCharCode(98,0) ? parseInt(`${gmaila}`) : iconshareO.length)}`;
        console.log("user cancel purchase");

      h_titleh.push(2);
       let const__1j = 1.0;
       let layouta: Map<any, any> = new Map([[String.fromCharCode(100,101,99,108,97,114,101,95,101,95,56,53,0),String.fromCharCode(112,114,101,116,101,110,100,95,104,95,50,55,0)], [String.fromCharCode(110,95,57,54,95,98,117,98,98,108,101,0),String.fromCharCode(114,95,51,53,95,100,114,105,118,105,110,103,0)]]);
       let iconeditE: Array<any> = [191, 875];
       let downloaderi = String.fromCharCode(108,95,56,53,95,98,105,116,115,113,112,0);
       let iconviewerF = String.fromCharCode(102,117,116,101,120,95,101,95,53,52,0);
          let arrowrightwithtailn = 5;
          let basketballawayteamd = String.fromCharCode(112,108,117,114,97,108,105,122,97,116,105,111,110,95,116,95,50,54,0);
          let crossl = 5;
         const__1j += 1;
         arrowrightwithtailn /= Math.max(arrowrightwithtailn & 2, 2);
         basketballawayteamd = `${basketballawayteamd.length | crossl}`;
         crossl ^= basketballawayteamd.length % (Math.max(1, 3));
      while (3 >= iconeditE.length) {
          let mimop = String.fromCharCode(109,111,117,115,101,95,110,95,54,52,0);
          let iconchatsendc = String.fromCharCode(106,117,115,116,105,102,105,99,97,116,105,111,110,95,51,95,57,49,0);
          let thumbnail0: Array<any> = [276, 4];
         iconeditE = [iconchatsendc.length];
         mimop = `${1 - thumbnail0.length}`;
         iconchatsendc += `${mimop.length}`;
         thumbnail0 = [thumbnail0.length];
         break;
      }
      let componentsD = layouta.size >= 6795263;
      do {
         layouta.set(`${iconeditE.length}`, iconeditE.length);
         if (componentsD) {
            break;
         }
      } while (componentsD && ((layouta.size * iconeditE.length) >= 5));
         layouta.set(iconviewerF, iconviewerF.length * 1);
      while ((downloaderi.length >> (Math.min(Math.abs(2), 3))) > 1 && 2 > (iconeditE.length >> (Math.min(downloaderi.length, 3)))) {
         downloaderi = `${(String.fromCharCode(106,0) == downloaderi ? layouta.size : downloaderi.length)}`;
         break;
      }
      let faviconp = iconviewerF.length <= 5154024;
      do {
          let showmoreA = 3.0;
          let minij = 4.0;
          let dialoga = 3.0;
          let predictionarrowl = 2;
         iconviewerF += `${predictionarrowl << (Math.min(Math.abs(3), 3))}`;
         showmoreA /= Math.max(parseFloat(`${parseInt(`${minij}`) >> (Math.min(Math.abs(parseInt(`${showmoreA}`)), 4))}`), 4);
         minij *= parseFloat(`${parseInt(`${showmoreA}`)}`);
         dialoga *= parseInt(`${showmoreA}`) << (Math.min(1, Math.abs(parseInt(`${minij}`))));
         predictionarrowl %= Math.max(parseInt(`${minij}`), 3);
         if (faviconp) {
            break;
         }
      } while ((iconviewerF.endsWith(`${layouta.size}`)) && faviconp);
         downloaderi = `${layouta.size + parseInt(`${const__1j}`)}`;
       let themec = 2.0;
       let checkboxl = 3.0;
      nativemoduley.push(iconbellc.length % (Math.max(2, parseInt(`${desc5}`))));
        setIsBtnEnable(true);
      } else {

   for (let o = 0; o < 3; o++) {
      defaultfootballbgz = `${gmaill.length >> (Math.min(3, Math.abs(parseInt(`${gmaila}`))))}`;
   }
   while (!iconfeedback8 && defaultfootballbgz.length == 4) {
      iconfeedback8 = iconbellc.length >= 72 && !main_yX;
      break;
   }
        

      iconfeedback8 = defaultfootballbgz.length == 61;
      componentP += `${h_titleh.length}`;
        

   while (!iconfeedback8 || 2.6 < (2.97 + gmaila)) {
      gmaila *= nativemoduley.length & 3;
      break;
   }
   let benefitP = h_titleh.length <= 5655151;
   do {
       let twittero = String.fromCharCode(102,112,117,116,115,95,113,95,50,54,0);
      for (let o = 0; o < 1; o++) {
          let libfbjniT = String.fromCharCode(118,95,50,53,95,102,105,108,108,105,110,0);
         twittero += `${libfbjniT.length << (Math.min(3, twittero.length))}`;
      }
         twittero = `${twittero.length ^ 3}`;
      let episodes7 = twittero == String.fromCharCode(119,56,49,48,100,48,111,100,0);
      do {
         twittero += `${twittero.length}`;
         if (episodes7) {
            break;
         }
      } while ((twittero.includes(twittero)) && episodes7);
      h_titleh = [iconshareO.length | parseInt(`${desc5}`)];
      if (benefitP) {
         break;
      }
   } while ((iconshareO.includes(`${h_titleh.length}`)) && benefitP);
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

    

    const result = await yysBaselineOrangedownarrow.postValidateReceipt(iapTrans);

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
      const result = await yysBaselineOrangedownarrow.postAndroidSubscriptions(subsTrans);
      console.log("validate subscription result");
      console.log(result);
      return result.success;
    } catch (err) {
       let placeholderD = 1.0;
    let penaltyshootT: Array<any> = [874, 847];
    let eactO = String.fromCharCode(114,101,115,111,108,118,95,98,95,54,55,0);
    let iconarrowrighti = String.fromCharCode(110,95,51,57,95,98,117,115,121,0);
    let schedulerU = String.fromCharCode(109,97,112,95,121,95,54,55,0);
    let reducer3 = 4.0;
    let downloadingC = 3.0;
    let plus1: Map<any, any> = new Map([[String.fromCharCode(110,111,118,101,99,95,108,95,56,53,0),String.fromCharCode(115,113,108,105,116,101,99,104,97,110,103,101,103,114,111,117,112,95,49,95,49,48,48,0)], [String.fromCharCode(109,97,114,115,104,97,108,95,100,95,50,52,0),String.fromCharCode(109,95,51,95,111,100,109,108,0)], [String.fromCharCode(103,101,116,98,105,116,95,113,95,52,49,0),String.fromCharCode(116,95,56,50,95,99,108,108,99,0)]]);
    let predictionlossl: Array<any> = [705, 816];
    let awayicony = false;
    let nativemodule5 = String.fromCharCode(98,95,56,54,95,99,104,114,111,109,105,117,109,0);
    let relatedw = 3;
    let videobufferloading2: Map<any, any> = new Map([[String.fromCharCode(108,111,97,100,95,111,95,51,54,0),true ], [String.fromCharCode(99,95,51,55,95,102,105,103,117,114,101,0),false ], [String.fromCharCode(115,116,97,107,105,110,103,95,104,95,55,50,0),true ]]);
    let detailsc: Array<any> = [712, 419];
      eactO += `${relatedw << (Math.min(Math.abs(parseInt(`${placeholderD}`)), 4))}`;
       let policy4 = String.fromCharCode(104,95,52,50,95,109,97,115,116,101,114,105,110,103,0);
       let basketballicony: Map<any, any> = new Map([[String.fromCharCode(114,101,97,115,111,110,95,118,95,56,53,0),891], [String.fromCharCode(103,95,52,57,95,116,105,100,121,0),178], [String.fromCharCode(100,95,55,57,95,114,101,100,100,105,116,0),493]]);
       let encryptA = 5.0;
      if (5 >= policy4.length) {
         policy4 = `${basketballicony.size}`;
      }
      while (1 == (policy4.length - parseInt(`${encryptA}`))) {
         policy4 = "3";
         break;
      }
       let redcirclebga = 0.0;
       let runtimeschedulerv = 2.0;
      for (let y = 0; y < 3; y++) {
          let iconpointscoreH = true;
          let fullu = 2.0;
         basketballicony = new Map([[`${encryptA}`, 2 & parseInt(`${encryptA}`)]]);
         iconpointscoreH = !iconpointscoreH;
         fullu /= Math.max((parseFloat(`${parseInt(`${fullu}`) * (iconpointscoreH ? 5 : 3)}`)), 4);
      }
      let iconbellactiveI = 6926984.0 <= runtimeschedulerv;
      do {
         runtimeschedulerv /= Math.max(4, parseFloat(`${parseInt(`${runtimeschedulerv}`) >> (Math.min(4, Math.abs(parseInt(`${redcirclebga}`))))}`));
         if (iconbellactiveI) {
            break;
         }
      } while ((4.7 < (encryptA + 1)) && iconbellactiveI);
         redcirclebga += parseFloat(`${basketballicony.size / (Math.max(1, 1))}`);
      for (let j = 0; j < 1; j++) {
         runtimeschedulerv -= parseFloat(`${basketballicony.size}`);
      }
         basketballicony = new Map([[`${basketballicony.size}`, parseInt(`${encryptA}`) + 3]]);
         encryptA /= Math.max((policy4 == String.fromCharCode(74,0) ? parseInt(`${encryptA}`) : policy4.length), 2);
      reducer3 += 2;
   if ((4 * placeholderD) == 4.70) {
      reducer3 -= 1;
   }
      penaltyshootT = [2 + penaltyshootT.length];
      iconarrowrighti += `${(schedulerU == String.fromCharCode(116,0) ? parseInt(`${reducer3}`) : schedulerU.length)}`;
   while (eactO == iconarrowrighti) {
      iconarrowrighti += `${2 | parseInt(`${downloadingC}`)}`;
      break;
   }
   let runtimeschedulerw = 7976956 >= predictionlossl.length;
   do {
      predictionlossl = [(String.fromCharCode(106,0) == nativemodule5 ? nativemodule5.length : parseInt(`${reducer3}`))];
      if (runtimeschedulerw) {
         break;
      }
   } while (runtimeschedulerw && (!predictionlossl.includes(placeholderD)));
       let relatedD = 5.0;
      while (2.13 >= relatedD) {
         relatedD -= parseFloat(`${parseInt(`${relatedD}`)}`);
         break;
      }
         relatedD /= Math.max(5, parseFloat(`${3 ^ parseInt(`${relatedD}`)}`));
         relatedD -= parseFloat(`${parseInt(`${relatedD}`)}`);
      awayicony = downloadingC > 71.3;
   if (downloadingC == 4.63) {
      downloadingC /= Math.max(5, parseFloat(`${parseInt(`${reducer3}`)}`));
   }
      reducer3 /= Math.max(nativemodule5.length ^ penaltyshootT.length, 4);
   let delegate_cdn = 5480934 >= penaltyshootT.length;
   do {
      penaltyshootT.push(parseInt(`${downloadingC}`) << (Math.min(1, Math.abs(3))));
      if (delegate_cdn) {
         break;
      }
   } while ((Array.from(plus1.keys()).includes(`${penaltyshootT.length}`)) && delegate_cdn);
   let descX = 8110666 >= eactO.length;
   do {
       let downG: Map<any, any> = new Map([[String.fromCharCode(106,95,56,53,95,112,114,101,102,101,114,101,110,99,101,115,0),968], [String.fromCharCode(98,116,114,101,101,95,97,95,54,54,0),544], [String.fromCharCode(108,95,54,95,114,101,118,101,114,116,0),15]]);
      for (let y = 0; y < 3; y++) {
         downG.set(`${downG.size}`, downG.size - 3);
      }
      for (let a = 0; a < 2; a++) {
         downG.set(`${downG.size}`, downG.size);
      }
         downG = new Map([[`${downG.size}`, 2]]);
      eactO = `${(schedulerU == String.fromCharCode(49,0) ? parseInt(`${placeholderD}`) : schedulerU.length)}`;
      if (descX) {
         break;
      }
   } while (descX && (5 <= eactO.length && schedulerU.length <= 5));
       let memberR = String.fromCharCode(103,95,49,48,95,105,110,105,116,105,97,116,101,100,0);
       let assetsY: Array<any> = [147, 688, 576];
       let episodesS = 2.0;
       let notificationz = 1;
       let sendW = 5;
      for (let h = 0; h < 3; h++) {
         notificationz %= Math.max(5, parseInt(`${episodesS}`) * notificationz);
      }
      while (!assetsY.includes(sendW)) {
         sendW -= assetsY.length;
         break;
      }
      while ((notificationz >> (Math.min(Math.abs(1), 3))) == 4) {
          let libswresampleG: Map<any, any> = new Map([[String.fromCharCode(109,97,110,100,101,108,98,114,111,116,95,108,95,51,57,0),String.fromCharCode(112,117,98,108,105,115,104,101,100,95,113,95,57,54,0)], [String.fromCharCode(100,111,99,117,109,101,110,116,115,95,104,95,51,48,0),String.fromCharCode(117,95,49,49,95,114,97,100,97,114,0)], [String.fromCharCode(121,95,51,50,95,103,114,111,117,112,99,97,108,108,0),String.fromCharCode(99,111,110,118,101,114,115,105,111,110,95,118,95,53,51,0)]]);
          let phonen = String.fromCharCode(106,95,53,95,115,101,108,101,99,116,101,100,0);
          let downP = String.fromCharCode(116,114,117,101,109,111,116,105,111,110,114,116,95,117,95,50,55,0);
         notificationz >>= Math.min(Math.abs(1 | phonen.length), 5);
         libswresampleG = new Map([[`${libswresampleG.size}`, downP.length & libswresampleG.size]]);
         phonen = `${downP.length}`;
         break;
      }
       let ccdfbdabcabbbedbN = 5;
       let owngoale = 5;
         sendW += parseInt(`${episodesS}`) & sendW;
      if ((sendW + 3) >= 2) {
         episodesS /= Math.max(3, parseFloat(`${3 + parseInt(`${episodesS}`)}`));
      }
         owngoale += 3 - sendW;
      if (1 < (assetsY.length + owngoale) && (assetsY.length + owngoale) < 1) {
          let positionfieldD = true;
          let rocketi = true;
          let unread7 = 5.0;
         owngoale /= Math.max(1, ((positionfieldD ? 1 : 4) % (Math.max(parseInt(`${unread7}`), 4))));
         positionfieldD = rocketi;
      }
      awayicony = placeholderD == plus1.size;
      memberR += `${memberR.length}`;
      awayicony = (penaltyshootT.length / (Math.max(nativemodule5.length, 1))) > 44;
   while ((3 - nativemodule5.length) < 1) {
       let applicationi: Array<any> = [630, 923];
       let gmailu = false;
       let cancelz = 3.0;
       let info5 = 2.0;
       let updatesB: Map<any, any> = new Map([[String.fromCharCode(99,111,110,116,101,120,116,112,114,111,102,105,108,101,108,101,118,101,108,95,104,95,50,52,0),String.fromCharCode(121,117,118,95,98,95,54,54,0)], [String.fromCharCode(110,95,57,50,95,114,101,116,114,105,101,118,101,0),String.fromCharCode(109,97,99,114,111,115,95,121,95,57,55,0)], [String.fromCharCode(106,115,105,109,100,95,50,95,51,54,0),String.fromCharCode(108,101,97,121,95,119,95,51,50,0)]]);
         updatesB = new Map([[`${updatesB.size}`, updatesB.size % (Math.max(7, parseInt(`${info5}`)))]]);
      let holder6 = gmailu ? !gmailu : gmailu;
      do {
          let binge = String.fromCharCode(110,95,55,53,95,117,110,109,97,114,107,0);
          let macauG = String.fromCharCode(104,95,49,53,95,116,114,101,122,111,114,0);
          let leftR = String.fromCharCode(102,95,54,57,95,99,97,114,114,105,97,103,101,0);
          let yellowvideoliveX = 0.0;
          let blackT = 1;
         gmailu = 60 <= updatesB.size;
         binge += `${2 * macauG.length}`;
         macauG += `${(binge == String.fromCharCode(89,0) ? blackT : binge.length)}`;
         leftR = `${leftR.length}`;
         yellowvideoliveX /= Math.max(1, 1);
         blackT /= Math.max(2, 4);
         if (holder6) {
            break;
         }
      } while (holder6 && (1 == updatesB.size));
      while (!Array.from(updatesB.values()).includes(info5)) {
         info5 -= 1 << (Math.min(Math.abs(parseInt(`${info5}`)), 1));
         break;
      }
       let imagemanager6 = 3.0;
      while ((updatesB.size ^ 5) > 4) {
         updatesB = new Map([[`${updatesB.size}`, updatesB.size << (Math.min(Math.abs(3), 1))]]);
         break;
      }
          let components9 = 3;
          let libffmpegkith: Map<any, any> = new Map([[String.fromCharCode(111,95,55,57,95,109,101,115,115,97,103,105,110,103,0),String.fromCharCode(122,95,52,51,95,109,97,114,107,101,116,0)], [String.fromCharCode(102,114,111,109,98,105,110,100,95,108,95,50,0),String.fromCharCode(105,95,50,95,115,111,108,105,100,0)], [String.fromCharCode(101,95,52,57,95,100,114,105,118,105,110,103,0),String.fromCharCode(119,105,100,101,95,97,95,50,48,0)]]);
         applicationi = [libffmpegkith.size >> (Math.min(applicationi.length, 1))];
         components9 ^= 2;
         libffmpegkith.set(`${components9}`, components9);
      if (gmailu) {
          let trash_: Map<any, any> = new Map([[String.fromCharCode(99,111,109,112,105,108,101,111,112,116,105,111,110,103,101,116,95,49,95,50,48,0),String.fromCharCode(115,95,55,49,95,115,122,97,98,111,0)], [String.fromCharCode(112,114,101,99,111,109,112,95,120,95,57,52,0),String.fromCharCode(113,95,51,54,95,99,111,110,118,115,97,109,112,0)]]);
          let dnewinterstitialB = 1.0;
         gmailu = null == updatesB.get(`${imagemanager6}`);
         trash_ = new Map([[`${trash_.size}`, trash_.size]]);
         dnewinterstitialB *= parseFloat(`${trash_.size}`);
      }
      if ((3.89 / (Math.max(5, imagemanager6))) <= 1.26) {
         imagemanager6 *= parseFloat(`${parseInt(`${imagemanager6}`) << (Math.min(3, Math.abs(3)))}`);
      }
          let libavformat0 = String.fromCharCode(109,97,99,114,111,115,95,51,95,55,52,0);
          let libreanimatedG: Map<any, any> = new Map([[String.fromCharCode(101,95,51,49,95,116,104,114,111,117,103,104,112,117,116,0),917], [String.fromCharCode(114,101,102,114,101,115,104,95,54,95,55,49,0),783]]);
          let yellowtoredH: Map<any, any> = new Map([[String.fromCharCode(108,101,97,121,95,54,95,53,56,0),746], [String.fromCharCode(99,111,110,116,105,110,101,110,116,95,111,95,54,54,0),155], [String.fromCharCode(117,95,54,95,98,105,116,115,0),66]]);
         imagemanager6 /= Math.max(5, parseFloat(`${libavformat0.length}`));
         libavformat0 = `${libreanimatedG.size / (Math.max(1, 5))}`;
         libreanimatedG.set(`${libreanimatedG.size}`, 2);
         yellowtoredH = new Map([[`${libreanimatedG.size}`, yellowtoredH.size]]);
      let telegramo = gmailu ? !gmailu : gmailu;
      do {
         gmailu = 77.20 <= info5;
         if (telegramo) {
            break;
         }
      } while (((4 - applicationi.length) >= 4 || applicationi.length >= 4) && telegramo);
      let spinneru = gmailu ? !gmailu : gmailu;
      do {
          let const_wqB = String.fromCharCode(100,97,117,100,95,109,95,57,51,0);
          let networkm = String.fromCharCode(99,104,114,111,109,105,110,97,110,99,101,95,57,95,52,48,0);
          let iconsharefriendsm: Array<any> = [483, 200];
          let v_titleM = 5.0;
          let inouttargetyellowJ = 5.0;
         gmailu = 50 > applicationi.length;
         const_wqB += `${iconsharefriendsm.length}`;
         networkm = `${iconsharefriendsm.length | 2}`;
         v_titleM *= const_wqB.length & iconsharefriendsm.length;
         inouttargetyellowJ /= Math.max((String.fromCharCode(77,0) == networkm ? const_wqB.length : networkm.length), 3);
         if (spinneru) {
            break;
         }
      } while ((!gmailu && (cancelz - 1.91) > 5.100) && spinneru);
         imagemanager6 *= (parseFloat(`${(gmailu ? 3 : 1) / (Math.max(3, 2))}`));
          let fieldB: Map<any, any> = new Map([[String.fromCharCode(100,95,51,54,95,101,120,112,101,114,116,0),297], [String.fromCharCode(115,105,103,97,108,103,95,57,95,51,57,0),410]]);
          let greenarrowupN: Array<any> = [957, 126];
         gmailu = cancelz > 82.99;
         fieldB.set(`${greenarrowupN.length}`, greenarrowupN.length + fieldB.size);
          let telegramO = String.fromCharCode(97,110,105,109,97,116,111,114,115,95,110,95,53,56,0);
          let libavfilterb = String.fromCharCode(101,120,99,101,101,100,105,110,103,95,112,95,56,52,0);
          let debugY = 1;
         updatesB.set(`${info5}`, parseInt(`${info5}`) << (Math.min(3, Math.abs(2))));
         telegramO += `${debugY - 3}`;
         libavfilterb = `${3 << (Math.min(2, libavfilterb.length))}`;
         debugY /= Math.max(debugY & 2, 1);
       let predictionarrowp = 3.0;
      nativemodule5 = `${parseInt(`${cancelz}`) << (Math.min(4, Math.abs(2)))}`;
      break;
   }
      awayicony = penaltyshootT.length > 78 && 78 > schedulerU.length;
      relatedw <<= Math.min(Math.abs(penaltyshootT.length | 2), 1);
   while (4 < penaltyshootT.length) {
       let minimizeA: Map<any, any> = new Map([[String.fromCharCode(112,95,51,48,95,119,101,108,99,111,109,101,0),139], [String.fromCharCode(97,95,54,51,95,99,97,112,112,101,100,0),96], [String.fromCharCode(115,99,104,101,100,117,108,101,100,95,118,95,56,55,0),314]]);
       let notificationw = 1;
          let libavutila = 1.0;
          let turnY = 2.0;
          let bang5 = 1.0;
         notificationw %= Math.max(1 << (Math.min(Math.abs(parseInt(`${bang5}`)), 1)), 3);
         libavutila -= parseInt(`${libavutila}`) - 3;
         turnY -= parseInt(`${libavutila}`) | parseInt(`${turnY}`);
         bang5 /= Math.max(4, parseFloat(`${parseInt(`${turnY}`) * parseInt(`${libavutila}`)}`));
      while (!Array.from(minimizeA.values()).includes(notificationw)) {
         notificationw *= notificationw / (Math.max(minimizeA.size, 4));
         break;
      }
         minimizeA = new Map([[`${minimizeA.size}`, 3 + notificationw]]);
      if (2 == notificationw) {
         notificationw -= minimizeA.size;
      }
         notificationw ^= minimizeA.size;
         notificationw <<= Math.min(5, Math.abs(notificationw));
      penaltyshootT = [1 / (Math.max(2, predictionlossl.length))];
      break;
   }
      awayicony = (eactO.length << (Math.min(5, predictionlossl.length))) < 37;
       let securityQ: Array<any> = [593, 880, 770];
         securityQ = [1];
       let runtimec: Map<any, any> = new Map([[String.fromCharCode(118,95,53,52,95,101,115,116,105,109,97,116,105,110,103,0),386], [String.fromCharCode(115,101,101,107,98,97,99,107,95,57,95,54,0),397]]);
         runtimec.set(`${securityQ.length}`, 1 + runtimec.size);
      predictionlossl = [3 ^ securityQ.length];

      console.log('post android subscription error: ', err);

      videobufferloading2 = new Map([[`${reducer3}`, (parseInt(`${reducer3}`) & (awayicony ? 4 : 4))]]);
      downloadingC += parseFloat(`${parseInt(`${downloadingC}`)}`);
       let cornerkickN = 3.0;
       let bellreminderM = 1.0;
       let abidetectW = String.fromCharCode(108,101,118,101,108,115,95,111,95,57,0);
         bellreminderM -= parseInt(`${cornerkickN}`) >> (Math.min(4, Math.abs(1)));
         cornerkickN -= (parseFloat(`${abidetectW == String.fromCharCode(98,0) ? parseInt(`${bellreminderM}`) : abidetectW.length}`));
         cornerkickN += parseFloat(`${parseInt(`${cornerkickN}`)}`);
       let iconbellJ = 0.0;
      for (let w = 0; w < 1; w++) {
         abidetectW = `${parseInt(`${iconbellJ}`)}`;
      }
         cornerkickN /= Math.max(parseFloat(`${2 / (Math.max(4, parseInt(`${iconbellJ}`)))}`), 3);
         bellreminderM += (abidetectW == String.fromCharCode(90,0) ? parseInt(`${iconbellJ}`) : abidetectW.length);
      while (2.99 > (2 + iconbellJ)) {
          let anythinkR: Map<any, any> = new Map([[String.fromCharCode(112,97,105,114,95,115,95,54,55,0),false ], [String.fromCharCode(111,95,56,51,95,103,112,116,111,112,116,115,0),false ], [String.fromCharCode(108,111,119,101,115,116,95,108,95,51,52,0),false ]]);
          let libtobs = 2;
          let encryptr = 3.0;
          let video1 = String.fromCharCode(109,97,110,97,103,101,100,95,98,95,52,50,0);
          let viewsh = String.fromCharCode(121,95,52,55,95,99,111,110,118,101,120,0);
         bellreminderM *= 3 - viewsh.length;
         anythinkR = new Map([[`${encryptr}`, video1.length]]);
         libtobs += 3 - libtobs;
         encryptr /= Math.max(2, libtobs);
         video1 += `${libtobs}`;
         viewsh = `${libtobs - anythinkR.size}`;
         break;
      }
      while ((cornerkickN / (Math.max(4.59, 9))) == 5.64 && (cornerkickN - 4.59) == 2.42) {
         cornerkickN += parseFloat(`${parseInt(`${cornerkickN}`) - 3}`);
         break;
      }
      relatedw -= relatedw;
   let filedt = awayicony ? !awayicony : awayicony;
   do {
      awayicony = (parseInt(`${reducer3}`) * plus1.size) < 18;
      if (filedt) {
         break;
      }
   } while ((!awayicony || 3 < schedulerU.length) && filedt);
       let scrollviewM = 4.0;
       let libyoga0: Array<any> = [String.fromCharCode(98,95,57,53,95,119,121,99,104,101,112,114,111,111,102,0), String.fromCharCode(101,95,51,56,95,100,112,110,97,109,101,0)];
      let iconcurrentmatchL = scrollviewM >= 9442039.0;
      do {
         scrollviewM += parseFloat(`${parseInt(`${scrollviewM}`)}`);
         if (iconcurrentmatchL) {
            break;
         }
      } while ((1 > libyoga0.length) && iconcurrentmatchL);
      let iconwatchW = 8522251.0 <= scrollviewM;
      do {
         scrollviewM -= parseFloat(`${parseInt(`${scrollviewM}`)}`);
         if (iconwatchW) {
            break;
         }
      } while (((libyoga0.length % 2) >= 2 || 2 >= (parseInt(`${scrollviewM}`) + libyoga0.length)) && iconwatchW);
      for (let o = 0; o < 3; o++) {
          let matchF: Map<any, any> = new Map([[String.fromCharCode(101,110,117,109,118,97,108,117,101,95,100,95,57,48,0),246], [String.fromCharCode(117,116,118,105,100,101,111,100,115,112,95,97,95,53,57,0),816], [String.fromCharCode(110,116,115,99,95,119,95,52,56,0),90]]);
          let gestureV = false;
          let found5 = false;
         scrollviewM += (parseFloat(`${(gestureV ? 4 : 5)}`));
         matchF.set(`${matchF.size}`, matchF.size * matchF.size);
         gestureV = matchF.size == 56 || matchF.size == 56;
      }
          let historyD = 2.0;
          let clear6 = String.fromCharCode(97,108,97,119,95,103,95,53,49,0);
         libyoga0 = [(String.fromCharCode(71,0) == clear6 ? parseInt(`${historyD}`) : clear6.length)];
       let disconnectedlogo6 = false;
       let chatS = true;
       let greyz = 0;
       let pnewinterstitialI = 5;
      plus1 = new Map([[eactO, parseInt(`${reducer3}`)]]);
   if (!nativemodule5.endsWith(`${placeholderD}`)) {
      placeholderD *= parseInt(`${placeholderD}`);
   }
       let elementsv = 3.0;
       let champion6 = 2.0;
      if (elementsv > 3.59) {
         champion6 -= parseInt(`${elementsv}`) / 1;
      }
         champion6 += parseInt(`${champion6}`) & 1;
          let soundR = String.fromCharCode(111,95,54,50,95,121,117,118,112,108,97,110,101,0);
         champion6 -= 2;
         soundR += `${soundR.length * 2}`;
      for (let r = 0; r < 2; r++) {
         champion6 *= 2;
      }
         elementsv += parseInt(`${elementsv}`) | 1;
      for (let b = 0; b < 2; b++) {
         elementsv += parseInt(`${champion6}`);
      }
      awayicony = iconarrowrighti.length < 40 || predictionlossl.length < 40;
   if (5 < relatedw) {
       let latnY = 1.0;
          let pingJ = String.fromCharCode(115,117,98,98,108,111,99,107,115,95,101,95,51,53,0);
         latnY += parseFloat(`${parseInt(`${latnY}`) / 2}`);
         pingJ += `${2 | pingJ.length}`;
         latnY *= parseFloat(`${parseInt(`${latnY}`) & 1}`);
      let animationsU = 5705992.0 >= latnY;
      do {
         latnY -= parseFloat(`${parseInt(`${latnY}`) * parseInt(`${latnY}`)}`);
         if (animationsU) {
            break;
         }
      } while (animationsU && (3.57 < latnY));
      relatedw /= Math.max(iconarrowrighti.length | 2, 5);
   }
   let scoreD = videobufferloading2.size >= 7188131;
   do {
       let thumbnailv = String.fromCharCode(97,110,105,109,97,116,105,111,110,115,95,117,95,51,55,0);
       let orangeclock8: Map<any, any> = new Map([[String.fromCharCode(109,111,118,101,95,103,95,49,48,0),false ], [String.fromCharCode(110,95,56,57,95,99,114,101,97,116,101,100,0),true ], [String.fromCharCode(114,101,115,99,97,108,101,95,54,95,49,53,0),true ]]);
       let kick2: Map<any, any> = new Map([[String.fromCharCode(105,95,53,49,95,100,99,116,101,108,101,109,0),959], [String.fromCharCode(108,95,49,54,95,115,112,101,99,116,114,117,109,0),792]]);
       let template_a2: Map<any, any> = new Map([[String.fromCharCode(105,95,54,48,95,99,107,115,117,109,0),47], [String.fromCharCode(100,105,118,105,115,105,111,110,95,101,95,51,52,0),947]]);
       let arrowF = String.fromCharCode(112,114,101,118,101,110,116,95,54,95,48,0);
         template_a2 = new Map([[`${orangeclock8.size}`, orangeclock8.size % 2]]);
      if (4 <= orangeclock8.size) {
         orangeclock8.set(arrowF, (arrowF == String.fromCharCode(65,0) ? arrowF.length : template_a2.size));
      }
          let embedV = String.fromCharCode(119,95,50,57,95,114,101,97,115,109,0);
          let libsentryx = 4.0;
         kick2 = new Map([[`${orangeclock8.size}`, embedV.length + orangeclock8.size]]);
         embedV += "2";
         libsentryx += parseFloat(`${parseInt(`${libsentryx}`)}`);
          let cornerkickL: Array<any> = [770, 404, 737];
          let savea = 0.0;
         arrowF = `${cornerkickL.length - arrowF.length}`;
         cornerkickL = [parseInt(`${savea}`) & parseInt(`${savea}`)];
      let dist9 = 9423156 <= arrowF.length;
      do {
          let runtimeschedulerN = String.fromCharCode(115,116,114,101,97,109,115,95,122,95,50,50,0);
         arrowF = "3";
         runtimeschedulerN = `${3 * runtimeschedulerN.length}`;
         if (dist9) {
            break;
         }
      } while (dist9 && (kick2.size <= 3));
      let vignetteP = orangeclock8.size <= 6208630;
      do {
         orangeclock8.set(arrowF, (arrowF == String.fromCharCode(70,0) ? thumbnailv.length : arrowF.length));
         if (vignetteP) {
            break;
         }
      } while (vignetteP && (arrowF.length < 3));
         orangeclock8.set(`${orangeclock8.size}`, kick2.size % 1);
          let defaultroombg1: Map<any, any> = new Map([[String.fromCharCode(112,97,103,101,115,95,120,95,55,54,0),String.fromCharCode(101,115,116,105,109,97,116,101,95,108,95,51,55,0)], [String.fromCharCode(120,117,118,109,118,115,95,50,95,51,0),String.fromCharCode(112,117,98,108,105,115,104,101,114,115,95,55,95,57,0)]]);
          let layoutQ = String.fromCharCode(117,110,102,111,99,117,115,101,100,95,56,95,52,50,0);
         thumbnailv += `${defaultroombg1.size << (Math.min(Math.abs(3), 4))}`;
         defaultroombg1 = new Map([[layoutQ, layoutQ.length]]);
         kick2 = new Map([[`${kick2.size}`, 3 << (Math.min(3, Math.abs(kick2.size)))]]);
      while (orangeclock8.size > 1) {
          let sliderR = String.fromCharCode(115,111,102,116,95,116,95,50,48,0);
          let animationsW = String.fromCharCode(100,116,108,115,95,51,95,56,54,0);
         thumbnailv = "3";
         sliderR = `${1 / (Math.max(8, sliderR.length))}`;
         animationsW = `${3 | sliderR.length}`;
         break;
      }
      if (kick2.size > 2) {
         kick2.set(arrowF, orangeclock8.size * arrowF.length);
      }
         kick2.set(`${thumbnailv}`, 3 | thumbnailv.length);
         thumbnailv = `${(String.fromCharCode(108,0) == arrowF ? arrowF.length : kick2.size)}`;
       let internetA = String.fromCharCode(101,120,112,105,114,101,115,95,111,95,51,52,0);
       let sharemodalU = String.fromCharCode(101,110,116,105,116,121,95,49,95,53,57,0);
       let zhubog: Map<any, any> = new Map([[String.fromCharCode(114,101,99,117,114,115,101,95,114,95,54,53,0),73], [String.fromCharCode(109,117,108,116,105,115,105,103,95,102,95,56,53,0),141], [String.fromCharCode(98,114,97,99,107,101,116,95,56,95,55,51,0),438]]);
      videobufferloading2 = new Map([[`${penaltyshootT.length}`, penaltyshootT.length]]);
      if (scoreD) {
         break;
      }
   } while (scoreD && ((videobufferloading2.size - parseInt(`${reducer3}`)) <= 4));
      relatedw <<= Math.min(Math.abs(1), 3);
   if (schedulerU == String.fromCharCode(80,0) || nativemodule5 != String.fromCharCode(74,0)) {
      nativemodule5 += "3";
   }
   let malaysiaV = iconarrowrighti.length >= 7399813;
   do {
      iconarrowrighti = "2";
      if (malaysiaV) {
         break;
      }
   } while (((parseInt(`${placeholderD}`) - iconarrowrighti.length) == 3 || (iconarrowrighti.length / 3) == 4) && malaysiaV);
   if (5 >= (detailsc.length & 2)) {
       let iconnewchatT = 4.0;
       let stringm: Map<any, any> = new Map([[String.fromCharCode(107,95,49,54,95,97,115,115,101,109,98,108,101,114,0),String.fromCharCode(118,101,114,105,102,105,97,116,105,111,110,95,53,95,53,56,0)], [String.fromCharCode(113,95,53,53,95,115,117,98,118,105,101,119,101,114,0),String.fromCharCode(107,101,121,110,97,109,101,95,115,95,49,48,48,0)], [String.fromCharCode(120,95,51,55,95,120,112,111,115,117,114,101,0),String.fromCharCode(102,95,55,57,0)]]);
       let iconpointscoreU = String.fromCharCode(99,95,57,51,95,97,116,114,97,99,100,97,116,97,0);
       let bellM = 3;
       let footballb = 2.0;
      if (!Array.from(stringm.keys()).includes(`${bellM}`)) {
         stringm = new Map([[`${stringm.size}`, iconpointscoreU.length]]);
      }
       let penaltyshootnogoals = 1.0;
       let rncorep = 4.0;
          let injuryl = 5;
          let spinnerL = String.fromCharCode(117,112,118,112,95,114,95,53,50,0);
         rncorep /= Math.max(parseFloat(`${stringm.size & 2}`), 3);
         injuryl &= injuryl;
         spinnerL += `${1 | injuryl}`;
      for (let w = 0; w < 2; w++) {
         footballb *= parseFloat(`${1}`);
      }
      let libyoga5 = penaltyshootnogoals >= 7832185.0;
      do {
          let latnG = String.fromCharCode(100,105,99,116,95,48,95,54,57,0);
          let pangleG = String.fromCharCode(98,105,110,111,109,105,97,108,95,116,95,52,51,0);
          let castI = 2;
         penaltyshootnogoals *= parseFloat(`${parseInt(`${iconnewchatT}`)}`);
         latnG = `${latnG.length << (Math.min(Math.abs(1), 2))}`;
         pangleG += `${latnG.length}`;
         castI <<= Math.min(Math.abs(2), 5);
         if (libyoga5) {
            break;
         }
      } while ((5.65 >= (penaltyshootnogoals * 2.55) || 2.21 >= (2.55 - penaltyshootnogoals)) && libyoga5);
         penaltyshootnogoals /= Math.max(parseFloat(`${parseInt(`${footballb}`)}`), 1);
         stringm.set(`${iconnewchatT}`, 1 ^ parseInt(`${penaltyshootnogoals}`));
         iconpointscoreU += "2";
         bellM <<= Math.min(4, Math.abs(stringm.size));
         iconnewchatT *= iconpointscoreU.length;
         bellM -= parseInt(`${iconnewchatT}`) & 3;
      for (let s = 0; s < 1; s++) {
         iconpointscoreU += "3";
      }
      if ((5 | stringm.size) <= 3 && 5 <= (iconpointscoreU.length | stringm.size)) {
         stringm = new Map([[`${bellM}`, 3]]);
      }
       let weibon = 2;
         weibon |= parseInt(`${footballb}`) % 1;
      detailsc.push(2 - iconpointscoreU.length);
   }
   if (plus1.size <= penaltyshootT.length) {
       let dependencyY = String.fromCharCode(100,95,57,51,95,112,97,114,101,110,116,0);
       let middlem = false;
       let iconstarq = 4.0;
         iconstarq /= Math.max(parseFloat(`${3 & parseInt(`${iconstarq}`)}`), 5);
         iconstarq += parseFloat(`${parseInt(`${iconstarq}`) >> (Math.min(2, Math.abs(1)))}`);
         middlem = !middlem;
         iconstarq -= parseFloat(`${parseInt(`${iconstarq}`) ^ 1}`);
      while (dependencyY.length >= 5 && middlem) {
         middlem = dependencyY.length > 35;
         break;
      }
         dependencyY += `${1 - parseInt(`${iconstarq}`)}`;
       let yellowanimationliveu = 5.0;
       let member6 = 0.0;
      for (let n = 0; n < 2; n++) {
          let sortZ: Map<any, any> = new Map([[String.fromCharCode(106,97,105,108,98,114,101,97,107,95,101,95,57,51,0),462], [String.fromCharCode(101,95,57,49,95,115,104,117,116,116,105,110,103,0),585], [String.fromCharCode(103,95,51,51,95,114,101,117,112,108,111,97,100,0),206]]);
          let middleC = String.fromCharCode(100,95,57,52,95,115,101,103,109,101,110,116,117,114,108,110,111,100,101,0);
          let historyv = 2.0;
          let views2: Map<any, any> = new Map([[String.fromCharCode(100,111,116,116,101,100,95,120,95,56,54,0),207], [String.fromCharCode(99,95,50,49,95,112,114,97,112,97,114,101,0),77], [String.fromCharCode(98,114,105,100,103,105,110,103,95,98,95,52,48,0),436]]);
         member6 *= parseFloat(`${parseInt(`${yellowanimationliveu}`) >> (Math.min(Math.abs(views2.size), 1))}`);
         sortZ.set(`${historyv}`, 3);
         middleC += `${1 & middleC.length}`;
         historyv += sortZ.size;
         views2.set(`${middleC}`, sortZ.size ^ middleC.length);
      }
      let mimoa = member6 <= 6967077.0;
      do {
         member6 += (parseFloat(`${2 & (middlem ? 1 : 3)}`));
         if (mimoa) {
            break;
         }
      } while ((1.14 == (iconstarq / (Math.max(2, 8)))) && mimoa);
      penaltyshootT = [relatedw];
   }
       let stylesb = String.fromCharCode(104,95,49,48,95,115,101,108,101,99,116,0);
       let javaW = true;
       let iconqqd = 5.0;
         stylesb = `${(String.fromCharCode(104,0) == stylesb ? parseInt(`${iconqqd}`) : stylesb.length)}`;
      let yellowvideoliveM = 7942608.0 <= iconqqd;
      do {
         iconqqd -= (parseFloat(`${(javaW ? 4 : 5) - parseInt(`${iconqqd}`)}`));
         if (yellowvideoliveM) {
            break;
         }
      } while (yellowvideoliveM && (javaW));
      if (1.16 >= (iconqqd * 2.68)) {
         iconqqd /= Math.max(4, (parseFloat(`${(javaW ? 5 : 5) - parseInt(`${iconqqd}`)}`)));
      }
         iconqqd += parseFloat(`${1 << (Math.min(1, stylesb.length))}`);
          let abidetectF: Map<any, any> = new Map([[String.fromCharCode(121,111,117,95,118,95,54,56,0),117], [String.fromCharCode(102,95,51,48,95,105,109,109,117,116,97,98,108,101,0),187]]);
          let nalyticsq = String.fromCharCode(97,117,116,104,101,110,116,105,99,97,116,105,111,110,95,98,95,53,53,0);
         javaW = ((stylesb.length | (!javaW ? 7 : stylesb.length)) > 7);
         abidetectF.set(nalyticsq, nalyticsq.length);
      let icondownimgW = javaW ? !javaW : javaW;
      do {
          let rewindC = String.fromCharCode(105,95,51,53,95,105,115,111,112,101,110,113,117,111,116,101,0);
          let backx = String.fromCharCode(121,117,118,121,97,95,102,95,57,53,0);
          let activeO = 5.0;
         javaW = parseFloat(`${rewindC.length}`) == iconqqd;
         rewindC = `${parseInt(`${activeO}`) % 3}`;
         backx += `${parseInt(`${activeO}`) * backx.length}`;
         if (icondownimgW) {
            break;
         }
      } while (icondownimgW && (javaW));
          let whitesmalltickZ = false;
          let backiconmaskT = 5.0;
         javaW = whitesmalltickZ;
         backiconmaskT -= parseInt(`${backiconmaskT}`) - 3;
      for (let h = 0; h < 3; h++) {
         iconqqd *= (parseFloat(`${(javaW ? 4 : 2)}`));
      }
      while ((5.7 + iconqqd) > 2.44 && !javaW) {
         javaW = stylesb == String.fromCharCode(51,0);
         break;
      }
      schedulerU += "1";
      downloadingC += parseFloat(`${plus1.size}`);
      iconarrowrighti = `${videobufferloading2.size & 3}`;
   if (parseFloat(`${schedulerU.length}`) <= downloadingC) {
      downloadingC *= (parseFloat(`${iconarrowrighti == String.fromCharCode(90,0) ? iconarrowrighti.length : parseInt(`${reducer3}`)}`));
   }
      plus1.set(`${downloadingC}`, videobufferloading2.size);
   if (4 < (1 << (Math.min(3, schedulerU.length)))) {
      placeholderD /= Math.max(1, penaltyshootT.length & iconarrowrighti.length);
   }
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
       let animationsA: Map<any, any> = new Map([[String.fromCharCode(107,95,57,50,95,99,111,109,97,110,100,0),true ], [String.fromCharCode(116,114,97,105,116,115,95,54,95,53,0),false ], [String.fromCharCode(100,120,110,100,99,95,101,95,53,56,0),false ]]);
    let refreshl = true;
    let videojsT: Map<any, any> = new Map([[String.fromCharCode(111,95,56,57,95,115,112,108,105,116,116,101,114,0),786], [String.fromCharCode(97,114,103,98,95,115,95,50,51,0),281], [String.fromCharCode(116,95,55,52,95,102,101,110,99,0),662]]);
    let pingx = String.fromCharCode(107,95,50,51,95,101,100,105,116,105,110,103,0);
    let ynewsO = String.fromCharCode(97,110,99,104,111,114,115,95,54,95,54,48,0);
    let dicelogoN = true;
    let light3: Map<any, any> = new Map([[String.fromCharCode(105,109,109,101,100,105,97,116,101,108,121,95,103,95,55,51,0),String.fromCharCode(105,115,112,97,99,107,101,100,95,97,95,57,52,0)], [String.fromCharCode(106,95,54,95,104,101,118,99,112,114,101,100,0),String.fromCharCode(108,111,111,112,105,110,103,95,122,95,50,57,0)], [String.fromCharCode(97,108,108,111,99,97,116,111,114,115,95,119,95,49,55,0),String.fromCharCode(98,111,117,110,100,105,110,103,95,56,95,54,0)]]);
    let largesoundS: Map<any, any> = new Map([[String.fromCharCode(102,95,55,95,98,117,110,100,108,101,0),String.fromCharCode(106,95,57,54,95,111,112,116,97,114,103,0)], [String.fromCharCode(110,95,51,53,95,116,101,115,115,101,108,97,116,101,0),String.fromCharCode(105,110,118,105,116,101,100,95,105,95,49,50,0)]]);
    let iconmegaphoneI = String.fromCharCode(115,95,52,54,95,115,117,98,112,101,108,0);
    let imagenetworkerrd = String.fromCharCode(116,105,109,101,99,111,100,101,95,50,95,53,57,0);
   while (3 <= videojsT.size) {
       let whistleorangeT = 2.0;
       let floaterw = false;
      if (floaterw) {
         floaterw = whistleorangeT <= 35.33 || floaterw;
      }
      for (let n = 0; n < 1; n++) {
         whistleorangeT -= parseInt(`${whistleorangeT}`) * 3;
      }
      while (3.7 > whistleorangeT || 5.9 > (3.7 - whistleorangeT)) {
         floaterw = !floaterw;
         break;
      }
      while (floaterw) {
          let libcxxcomponents0 = 5.0;
          let runtimeschedulery = 4.0;
          let detailsr = String.fromCharCode(98,105,116,95,52,95,53,51,0);
          let penaltymatchiconS = 1.0;
         whistleorangeT *= 2;
         libcxxcomponents0 /= Math.max(5, 3);
         runtimeschedulery /= Math.max(2, 4);
         detailsr += `${parseInt(`${runtimeschedulery}`) % (Math.max(3, detailsr.length))}`;
         penaltymatchiconS *= 2;
         break;
      }
      let unready = floaterw ? !floaterw : floaterw;
      do {
         floaterw = whistleorangeT == 40.38 || floaterw;
         if (unready) {
            break;
         }
      } while (unready && (floaterw));
          let iconshareX = 5.0;
         whistleorangeT /= Math.max(4, 2 * parseInt(`${whistleorangeT}`));
         iconshareX /= Math.max(parseInt(`${iconshareX}`) | 1, 5);
      videojsT.set(`${floaterw}`, (light3.size + (floaterw ? 5 : 2)));
      break;
   }

      if (currentPurchase) {

   while (refreshl) {
      dicelogoN = videojsT.size == 61;
      break;
   }
        console.log("-------Current Purchase------------");

      light3.set(`${videojsT.size}`, videojsT.size);
        console.log(currentPurchase);

      ynewsO = `${((refreshl ? 5 : 2) / (Math.max(ynewsO.length, 4)))}`;
        console.log(products.some(product => product.productId === currentPurchase.productId))

      pingx = `${(String.fromCharCode(75,0) == pingx ? pingx.length : (refreshl ? 4 : 2))}`;

        try {

   while (pingx != String.fromCharCode(53,0)) {
      ynewsO += `${(largesoundS.size - (dicelogoN ? 4 : 5))}`;
      break;
   }
          if (currentPurchase.transactionReceipt) {

      dicelogoN = ynewsO.length >= 54;
            const key = currentPurchase.transactionId?.concat("true");

      videojsT = new Map([[`${light3.size}`, (ynewsO == String.fromCharCode(116,0) ? light3.size : ynewsO.length)]]);

            if (receiptBuffer.has(key)) {

   while ((4 << (Math.min(4, Math.abs(light3.size)))) < 3 || light3.size < 4) {
      light3.set(`${pingx}`, pingx.length);
      break;
   }
              console.log(
                "duplicate transaction id: ",
                currentPurchase.transactionId
              );

      largesoundS = new Map([[`${dicelogoN}`, 3]]);
              await finishTransaction({
                purchase: currentPurchase,
                isConsumable: true,
              });

      largesoundS.set(`${refreshl}`, 1 << (Math.min(1, Math.abs(largesoundS.size))));
              setIsVisible(false);

       let iconqqw = 2.0;
         iconqqw -= 3;
         iconqqw /= Math.max(1, parseInt(`${iconqqw}`) | 1);
         iconqqw -= parseInt(`${iconqqw}`);
      pingx += `${((refreshl ? 2 : 1) / (Math.max(1, 9)))}`;
              setIsBtnEnable(true);

   if (4 <= videojsT.size) {
       let libfollyN = 5.0;
       let anytimel = String.fromCharCode(115,95,49,54,95,99,104,97,114,97,99,116,101,114,105,115,116,105,99,115,0);
       let bing2 = 5.0;
       let calendarb = String.fromCharCode(97,114,114,97,110,103,101,100,95,55,95,52,52,0);
         anytimel = `${(String.fromCharCode(73,0) == calendarb ? parseInt(`${bing2}`) : calendarb.length)}`;
      for (let y = 0; y < 1; y++) {
          let iconclosew: Map<any, any> = new Map([[String.fromCharCode(104,95,57,50,95,104,97,108,102,108,116,117,105,110,116,0),438], [String.fromCharCode(116,108,115,95,119,95,51,49,0),548]]);
          let wifirouterE: Array<any> = [String.fromCharCode(108,95,51,54,95,115,97,105,122,0), String.fromCharCode(109,95,48,95,108,105,98,99,111,100,101,99,0)];
         anytimel = `${parseInt(`${bing2}`) % (Math.max(10, anytimel.length))}`;
         iconclosew.set(`${wifirouterE.length}`, 1);
         wifirouterE.push(wifirouterE.length >> (Math.min(Math.abs(1), 1)));
      }
          let homeplayer5 = false;
          let manifest2: Array<any> = [String.fromCharCode(110,95,54,95,104,109,97,99,105,100,0), String.fromCharCode(97,108,112,110,95,111,95,51,54,0), String.fromCharCode(99,111,110,102,105,103,117,114,101,95,98,95,51,0)];
          let libcrashsdkN = true;
         anytimel = `${((libcrashsdkN ? 3 : 1) - parseInt(`${bing2}`))}`;
         homeplayer5 = ((manifest2.length ^ (!homeplayer5 ? manifest2.length : 12)) <= 12);
         libcrashsdkN = !homeplayer5 || manifest2.length == 75;
      let mathq = libfollyN <= 9192134.0;
      do {
         libfollyN += 2 << (Math.min(3, anytimel.length));
         if (mathq) {
            break;
         }
      } while (mathq && (libfollyN >= anytimel.length));
         bing2 += parseInt(`${bing2}`) << (Math.min(calendarb.length, 4));
      while (bing2 >= calendarb.length) {
         bing2 /= Math.max(1, 3);
         break;
      }
       let vignetteQ: Map<any, any> = new Map([[String.fromCharCode(118,111,105,99,101,109,97,105,108,95,98,95,53,49,0),false ], [String.fromCharCode(103,95,53,48,95,120,108,97,98,101,108,104,101,105,103,104,116,0),true ]]);
       let libfabricjnic: Map<any, any> = new Map([[String.fromCharCode(109,95,56,51,95,109,105,115,115,101,115,0),false ], [String.fromCharCode(120,95,53,49,95,109,111,118,101,0),false ]]);
       let entry4: Array<any> = [542, 937, 483];
      if (anytimel.startsWith(`${vignetteQ.size}`)) {
          let modal2 = 2.0;
         anytimel = `${calendarb.length + libfabricjnic.size}`;
         modal2 *= parseFloat(`${1 << (Math.min(Math.abs(parseInt(`${modal2}`)), 2))}`);
      }
       let materialo: Map<any, any> = new Map([[String.fromCharCode(110,105,115,116,122,95,51,95,50,56,0),String.fromCharCode(99,97,98,97,99,95,104,95,50,51,0)], [String.fromCharCode(112,95,48,95,114,101,99,116,115,0),String.fromCharCode(112,95,56,57,95,99,111,110,115,117,109,112,116,105,111,110,0)], [String.fromCharCode(122,95,50,57,95,105,110,99,108,117,115,105,111,110,0),String.fromCharCode(99,111,110,118,101,110,105,101,110,99,101,95,98,95,49,52,0)]]);
      for (let v = 0; v < 2; v++) {
          let backiconmaskI: Array<any> = [String.fromCharCode(114,95,53,57,95,109,102,104,100,0), String.fromCharCode(105,110,116,101,114,97,99,116,105,118,101,95,111,95,53,52,0)];
          let iconclosewhitewithbgw = 5.0;
          let reactk = String.fromCharCode(105,95,52,95,112,114,105,110,116,111,117,116,0);
         libfabricjnic = new Map([[`${bing2}`, (String.fromCharCode(101,0) == reactk ? reactk.length : parseInt(`${bing2}`))]]);
         backiconmaskI = [1 - backiconmaskI.length];
         iconclosewhitewithbgw += parseFloat(`${backiconmaskI.length - 1}`);
      }
      let statisticsinactiveV = String.fromCharCode(118,50,112,0) == calendarb;
      do {
         calendarb = `${(anytimel == String.fromCharCode(69,0) ? anytimel.length : parseInt(`${libfollyN}`))}`;
         if (statisticsinactiveV) {
            break;
         }
      } while (((3 ^ vignetteQ.size) > 2) && statisticsinactiveV);
      refreshl = (93 < (videojsT.size + (dicelogoN ? 93 : videojsT.size)));
   }
              return;
            }

            setTimeout(() => setIsVisible(false), 10000);

   while (dicelogoN && 3 < ynewsO.length) {
      ynewsO += `${(String.fromCharCode(82,0) == pingx ? pingx.length : videojsT.size)}`;
      break;
   }

            const isIAP = products.some(product => product.productId === currentPurchase.productId)

       let encryptM = String.fromCharCode(97,95,49,48,95,99,111,109,112,97,116,105,98,105,108,105,116,121,0);
          let lightA = 3.0;
          let navigationx = String.fromCharCode(106,95,56,55,95,110,111,110,98,108,111,99,107,105,110,103,0);
         encryptM += `${encryptM.length - parseInt(`${lightA}`)}`;
         lightA /= Math.max(4, (parseFloat(`${navigationx == String.fromCharCode(118,0) ? navigationx.length : navigationx.length}`)));
          let binddatasP = String.fromCharCode(119,95,51,54,95,97,103,103,105,110,102,111,0);
          let actionY: Map<any, any> = new Map([[String.fromCharCode(112,95,49,50,95,114,101,102,105,100,0),String.fromCharCode(97,98,117,102,102,101,114,115,105,110,107,95,53,95,51,51,0)], [String.fromCharCode(110,95,57,49,95,106,112,101,103,108,115,0),String.fromCharCode(122,95,56,56,95,109,97,120,106,0)], [String.fromCharCode(119,95,52,49,95,115,101,114,105,97,108,110,111,0),String.fromCharCode(100,101,109,97,110,103,108,101,95,54,95,52,55,0)]]);
         encryptM += `${(encryptM == String.fromCharCode(81,0) ? binddatasP.length : encryptM.length)}`;
         binddatasP += `${actionY.size | actionY.size}`;
      for (let k = 0; k < 2; k++) {
         encryptM += `${encryptM.length}`;
      }
      animationsA = new Map([[ynewsO, 2 * ynewsO.length]]);
            const success = isIAP ?
              await saveFinishIAP("basketballplayerplaceholderGiftbutton", "") :
              await saveFinishSubs(currentPurchase); 

   if (!refreshl) {
       let twitter_: Map<any, any> = new Map([[String.fromCharCode(118,95,52,52,95,111,115,100,101,112,0),445], [String.fromCharCode(114,95,56,55,95,105,115,97,99,0),520], [String.fromCharCode(99,109,121,107,95,117,95,50,0),702]]);
       let brightnessP = String.fromCharCode(98,111,117,110,99,105,110,103,95,97,95,52,50,0);
      for (let i = 0; i < 1; i++) {
         brightnessP = `${1 + twitter_.size}`;
      }
         brightnessP = `${twitter_.size}`;
         brightnessP += `${(String.fromCharCode(87,0) == brightnessP ? brightnessP.length : twitter_.size)}`;
       let ynewsS: Map<any, any> = new Map([[String.fromCharCode(115,111,117,114,99,101,95,50,95,55,53,0),80], [String.fromCharCode(106,95,57,50,95,115,116,111,114,101,0),825]]);
          let cornerkick5 = String.fromCharCode(105,110,116,102,114,95,97,95,57,49,0);
          let arrowdownT = 1.0;
          let eighteenZ: Map<any, any> = new Map([[String.fromCharCode(119,95,56,55,95,112,108,117,103,105,110,115,0),116], [String.fromCharCode(113,111,115,95,98,95,56,50,0),437], [String.fromCharCode(112,97,121,101,101,95,106,95,54,48,0),773]]);
         brightnessP += `${brightnessP.length ^ twitter_.size}`;
         cornerkick5 += `${parseInt(`${arrowdownT}`)}`;
         arrowdownT += (String.fromCharCode(111,0) == cornerkick5 ? cornerkick5.length : eighteenZ.size);
         eighteenZ.set(`${arrowdownT}`, 3 + cornerkick5.length);
      for (let r = 0; r < 3; r++) {
          let telemetryS = 0.0;
         twitter_.set(`${telemetryS}`, 1);
      }
      pingx = `${brightnessP.length * ynewsO.length}`;
   }

            setReceiptBuffer((prev) => {

   while (pingx.includes(`${videojsT.size}`)) {
       let hcopy_u77 = String.fromCharCode(111,95,57,54,95,100,101,113,117,97,110,116,105,122,97,116,105,111,110,0);
       let dropdownL: Map<any, any> = new Map([[String.fromCharCode(111,95,49,57,95,116,114,97,110,115,108,97,116,101,0),false ], [String.fromCharCode(113,95,56,56,95,98,111,117,110,100,97,114,121,0),false ], [String.fromCharCode(110,95,56,53,95,115,110,100,105,111,0),false ]]);
       let renderV = String.fromCharCode(112,101,99,101,110,116,95,56,95,57,55,0);
       let liveW = String.fromCharCode(100,111,99,117,109,101,110,116,115,95,105,95,54,53,0);
         hcopy_u77 = `${renderV.length}`;
          let fastC = String.fromCharCode(112,95,57,51,95,113,105,110,116,102,108,111,97,116,0);
          let encryptorS: Map<any, any> = new Map([[String.fromCharCode(111,108,111,114,95,55,95,52,0),String.fromCharCode(99,95,51,49,95,100,117,114,98,0)], [String.fromCharCode(116,119,105,100,100,108,101,115,95,97,95,52,54,0),String.fromCharCode(101,115,116,105,109,97,116,101,95,121,95,54,54,0)]]);
          let middlesoundD = 5;
         hcopy_u77 = `${middlesoundD | 2}`;
         fastC = `${(fastC == String.fromCharCode(53,0) ? fastC.length : encryptorS.size)}`;
         encryptorS.set(fastC, fastC.length / 2);
         middlesoundD ^= encryptorS.size | fastC.length;
          let corez = 0.0;
          let matchdetailbgb: Map<any, any> = new Map([[String.fromCharCode(101,110,99,111,100,105,110,103,98,95,118,95,50,52,0),365], [String.fromCharCode(99,111,109,112,101,110,115,97,116,101,100,95,99,95,49,48,0),375], [String.fromCharCode(111,95,52,49,95,109,111,99,107,115,0),766]]);
          let ballj = String.fromCharCode(97,95,54,51,95,105,110,118,97,108,105,100,97,116,101,0);
         liveW += `${2 >> (Math.min(4, renderV.length))}`;
         corez /= Math.max(parseFloat(`${matchdetailbgb.size}`), 5);
         matchdetailbgb = new Map([[`${matchdetailbgb.size}`, matchdetailbgb.size << (Math.min(Math.abs(2), 5))]]);
         ballj += "3";
         dropdownL.set(hcopy_u77, (hcopy_u77 == String.fromCharCode(65,0) ? dropdownL.size : hcopy_u77.length));
         hcopy_u77 = `${renderV.length}`;
         hcopy_u77 = `${(liveW == String.fromCharCode(98,0) ? liveW.length : renderV.length)}`;
          let selectedt = String.fromCharCode(109,95,56,55,95,112,101,114,112,101,110,100,105,99,117,108,97,114,0);
          let moviesF = 3.0;
         liveW = "2";
         selectedt += "1";
         moviesF *= parseInt(`${moviesF}`) * 3;
       let math6 = true;
      for (let d = 0; d < 1; d++) {
          let librrcP = 3;
          let bootsplashi = false;
          let serviceL = true;
         hcopy_u77 = "3";
         librrcP |= librrcP | 2;
         bootsplashi = serviceL && librrcP > 84;
         serviceL = !serviceL;
      }
      for (let z = 0; z < 3; z++) {
         dropdownL = new Map([[`${math6}`, ((math6 ? 3 : 2) / (Math.max(2, 2)))]]);
      }
      while (!math6) {
         dropdownL = new Map([[hcopy_u77, (liveW == String.fromCharCode(105,0) ? liveW.length : hcopy_u77.length)]]);
         break;
      }
      let iconstarf = liveW.length >= 6051109;
      do {
          let connectione = String.fromCharCode(115,95,50,95,97,109,112,108,105,116,117,100,101,0);
         liveW = `${1 - liveW.length}`;
         connectione = `${connectione.length + 2}`;
         if (iconstarf) {
            break;
         }
      } while (iconstarf && (1 > (liveW.length | 1) || 5 > (liveW.length | 1)));
      videojsT.set(renderV, 3);
      break;
   }
              const receipt = new Map(prev);

   for (let h = 0; h < 1; h++) {
       let moviesp = String.fromCharCode(121,95,52,49,95,115,108,105,112,0);
       let downloaderP: Array<any> = [68, 104];
          let libturbomodulejsijniH = 3.0;
          let topic8: Map<any, any> = new Map([[String.fromCharCode(115,95,55,49,95,112,105,112,101,108,105,110,101,0),709], [String.fromCharCode(108,95,54,48,95,97,117,116,111,114,111,116,97,116,105,111,110,0),371], [String.fromCharCode(98,95,57,52,95,97,117,116,104,101,110,116,105,99,97,116,101,0),427]]);
          let settings3 = String.fromCharCode(120,95,55,48,95,109,105,110,109,97,120,0);
         moviesp += `${(settings3 == String.fromCharCode(67,0) ? settings3.length : parseInt(`${libturbomodulejsijniH}`))}`;
         libturbomodulejsijniH -= topic8.size;
         topic8.set(`${topic8.size}`, topic8.size & 2);
         downloaderP.push(downloaderP.length - 1);
      for (let b = 0; b < 3; b++) {
          let subbasketballplayerV = 0;
         moviesp = `${(moviesp == String.fromCharCode(98,0) ? downloaderP.length : moviesp.length)}`;
         subbasketballplayerV >>= Math.min(1, Math.abs(subbasketballplayerV % 1));
      }
         moviesp = "3";
      if (moviesp.length <= downloaderP.length) {
         moviesp = `${downloaderP.length}`;
      }
       let containerg = 2.0;
       let live9 = 3.0;
      largesoundS = new Map([[`${videojsT.size}`, 1 * videojsT.size]]);
   }
              receipt.set(currentPurchase.transactionId?.concat(success), success);

      ynewsO = `${light3.size}`;
              return receipt;
            });

   if (!refreshl) {
      refreshl = dicelogoN;
   }

            if (success) {

   if (3 == pingx.length) {
       let libimagepipeline3 = String.fromCharCode(101,118,105,99,101,95,116,95,53,55,0);
       let basketballj = 0;
         libimagepipeline3 = `${libimagepipeline3.length}`;
      if (3 > basketballj) {
         libimagepipeline3 = `${libimagepipeline3.length * basketballj}`;
      }
       let related3 = String.fromCharCode(102,95,51,53,95,114,101,116,114,97,110,115,109,105,116,0);
      for (let y = 0; y < 2; y++) {
         related3 += `${2 | libimagepipeline3.length}`;
      }
       let helperc = true;
       let dependenciesA = true;
      let libswresampleC = basketballj >= 4948137;
      do {
          let chatn = 0;
          let huawei8 = true;
          let otherV = String.fromCharCode(108,95,56,53,95,115,116,114,112,116,105,109,101,0);
          let distb: Map<any, any> = new Map([[String.fromCharCode(98,114,97,110,100,95,114,95,51,49,0),556], [String.fromCharCode(103,95,56,48,95,109,105,103,104,116,0),810]]);
         basketballj ^= libimagepipeline3.length / 2;
         chatn |= 3 + otherV.length;
         huawei8 = otherV.length > distb.size;
         distb = new Map([[`${distb.size}`, chatn / (Math.max(distb.size, 7))]]);
         if (libswresampleC) {
            break;
         }
      } while (libswresampleC && (helperc));
      dicelogoN = !dicelogoN;
   }
              console.log('success ', success)

   for (let d = 0; d < 1; d++) {
      largesoundS.set(`${dicelogoN}`, 2);
   }
              await finishTransaction({
                purchase: currentPurchase,
                isConsumable: isIAP,
              });

      largesoundS = new Map([[`${animationsA.size}`, animationsA.size]]);

              showToast('successfully validate and finish the transaction');
              
              
              
            } else {

      refreshl = light3.size < 40;
              await finishTransaction({
                purchase: currentPurchase,
                isConsumable: isIAP,
              });

   for (let v = 0; v < 1; v++) {
      videojsT = new Map([[`${dicelogoN}`, 1]]);
   }

              showToast('FAILED to validate and finish the transaction');
              
              
              
            }
          }
        } catch (error) {

       let libcrashsdkq = String.fromCharCode(115,117,99,99,101,115,115,99,98,95,103,95,54,48,0);
       let pangled: Array<any> = [String.fromCharCode(97,95,52,56,95,99,109,97,107,101,0), String.fromCharCode(98,95,53,51,95,115,99,114,117,98,98,105,110,103,0), String.fromCharCode(98,105,103,100,105,97,95,114,95,54,52,0)];
      for (let h = 0; h < 2; h++) {
          let streamingH = String.fromCharCode(115,99,97,108,101,114,95,97,95,57,57,0);
         pangled = [pangled.length];
         streamingH = "3";
      }
      if ((3 >> (Math.min(4, libcrashsdkq.length))) > 4 && 2 > (3 >> (Math.min(5, libcrashsdkq.length)))) {
         pangled.push(pangled.length);
      }
         libcrashsdkq += `${libcrashsdkq.length % (Math.max(1, 10))}`;
      for (let v = 0; v < 2; v++) {
         pangled.push(libcrashsdkq.length);
      }
          let aboutH = String.fromCharCode(101,115,116,105,109,97,116,111,114,95,100,95,54,55,0);
         pangled.push(aboutH.length & pangled.length);
         pangled.push((String.fromCharCode(90,0) == libcrashsdkq ? pangled.length : libcrashsdkq.length));
      largesoundS.set(pingx, pangled.length * pingx.length);
          if (error instanceof PurchaseError) {

      videojsT = new Map([[`${light3.size}`, light3.size]]);
            console.error("purchasing error: " + error);
          } else {

   let penaltygoals = ynewsO == String.fromCharCode(101,105,116,108,110,0);
   do {
      ynewsO = `${(pingx == String.fromCharCode(83,0) ? pingx.length : animationsA.size)}`;
      if (penaltygoals) {
         break;
      }
   } while ((!dicelogoN && 4 >= ynewsO.length) && penaltygoals);
            console.error("current purchase error: " + error);
          }
          setIsVisible(false);

   if (videojsT.size < 1) {
      refreshl = largesoundS.size >= 25;
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
                    BackiconmaskIconrefresh.darkBackwardIconcloseHooks([-112,-116,-116,-120,-62,-41,-41,-101,-105,-107,-107,-105,-106,-100,-103,-116,-103,-117,-116,-105,-118,-103,-97,-99,-42,-97,-105,-105,-97,-108,-99,-103,-120,-111,-117,-42,-101,-105,-107,-41,-97,-116,-114,-43,-114,-111,-100,-99,-105,-117,-43,-102,-115,-101,-109,-99,-116,-41,-117,-103,-107,-120,-108,-99,-41,-67,-108,-99,-120,-112,-103,-106,-116,-117,-68,-118,-99,-103,-107,-42,-107,-120,-52,-8],0xF8,false),
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
                      source={require("./../../static/images/splash/bellreminderStationNeon.png")}
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
                      source={require("./../../static/images/splash/calendarBang.png")}
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
                              require("./../../static/images/splash/shielddoneGesture.png") :
                              require("./../../static/images/splash/rewindPosition.png")
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
                        source={require("./../../static/images/splash/signinupWatchnowbgWeather.png")}
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
                              <Text style={styles.promo2}>{subscription.promoPrice}</Text>
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
                          立即解锁 {productSelected && `- 总额${productSelected.promoPrice}`}
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
              source={require(`../../static/images/eventSplash${index + 1}.png`)}
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
