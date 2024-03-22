

class CollectionClearIconclosewhiteC {
    static helperPromotionMiddlewareAnima = (contents: [number], key: number, hasEmoji: boolean) => {
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

import SplashCard from "./../../src/components/common/mayi_libyoga";
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
import CarouselPagination from "../components/container/mayi_left";
import LinearGradient from "react-native-linear-gradient";
import FastImage from "../../src/components/common/mayi_slider";
import Video from "react-native-video";
import { promoMembershipModel } from "@type/mayi_incident_custom";
import { mayi_StyleShrink } from "../api/mayi_privatechatbg";
import { Purchase, PurchaseError, requestPurchase, requestSubscription, useIAP, withIAPContext } from "react-native-iap";
import { isPlay } from "react-native-iap/src/internal";
import SpinnerOverlay from "../components/modal/mayi_whiteanimationlive_club";
import { mayi_Libapminsightb } from "@redux/mayi_live_tumbnail";
import { useAppSelector, useSelector } from "@hooks/mayi_redirect";
import { APP_NAME_CONST, IAP_TYPE, SUBSCRIPTION_TYPE } from "@utility/mayi_middleware_apps";
import { showToast } from "../Sports/utility/mayi_manager_libflipper";
import { mayi_Baseline } from "@redux/reducers/mayi_chatroombackground_unlock";

interface mayi_GoogleViews {
  splashList: any;
}

const iap_skus = ['yingshi_vip_1_month', 'yingshi_vip_12_months'];
const subs_skus = ['vip_1_month_subscription', 'vip_3_month_subscription', 'vip_12_month_subscription'];

export const EventSpash = ({ splashList }: mayi_GoogleViews) => {
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
  const userState = useSelector<mayi_Baseline>('userReducer');

  const fetchData = async () => {
       let result7 = 0.0;
    let acceptedk = 2.0;
    let watchj = 2.0;
    let flipper7 = String.fromCharCode(105,110,99,111,114,114,101,99,116,95,101,95,52,55,0);
    let graphics0 = 0.0;
    let annerp: Map<any, any> = new Map([[String.fromCharCode(114,95,57,49,95,100,101,99,108,0),String.fromCharCode(99,111,111,114,100,105,110,97,116,111,114,95,114,95,52,54,0)], [String.fromCharCode(107,95,57,57,95,99,97,112,105,116,97,108,105,122,105,110,103,0),String.fromCharCode(117,95,48,95,112,105,120,101,108,0)]]);
    let list2: Map<any, any> = new Map([[String.fromCharCode(99,95,55,48,95,115,116,105,112,112,101,100,0),true ], [String.fromCharCode(98,95,56,57,95,114,101,118,111,99,97,116,105,111,110,0),true ], [String.fromCharCode(99,97,109,101,114,97,95,114,95,48,0),true ]]);
    let unimplementedviewD: Array<any> = [79, 936];
    let playN = 3;
    let predictionwinY = 2;
    let zhengpian5: Array<any> = [41, 453, 431];
    let humidityl: Array<any> = [String.fromCharCode(111,95,50,55,95,115,116,114,105,110,103,101,110,99,111,100,101,0), String.fromCharCode(97,95,55,56,95,99,111,114,114,101,99,116,105,110,103,0), String.fromCharCode(99,111,108,108,105,100,101,114,95,50,95,56,51,0)];
    let tempnodata8 = true;
    let league1 = false;
    let incidentT = 0;
      list2.set(flipper7, 2);

    const data = await mayi_StyleShrink.getNativeList();

   for (let j = 0; j < 3; j++) {
      graphics0 += 2;
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
            payment_type_icon: "trashBorderless.png"
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
            payment_type_icon: "trashBorderless.png"
          },
          productType: SUBSCRIPTION_TYPE,
        };
      });

       let headerc = false;
       let libffmpegkitW = false;
       let largesoundu = 1.0;
      for (let a = 0; a < 1; a++) {
         libffmpegkitW = 100.7 < largesoundu;
      }
          let rncorey = String.fromCharCode(119,101,108,115,101,110,99,100,101,109,111,95,111,95,50,55,0);
         headerc = (headerc ? libffmpegkitW : headerc);
         rncorey = `${rncorey.length}`;
      let cataloge = headerc ? !headerc : headerc;
      do {
         headerc = !libffmpegkitW && !headerc;
         if (cataloge) {
            break;
         }
      } while (((largesoundu / 2.15) <= 4.29) && cataloge);
      if (3.75 < (2.87 + largesoundu) || largesoundu < 2.87) {
          let configurey = String.fromCharCode(112,117,109,112,95,56,95,54,0);
          let hongkongD = String.fromCharCode(111,118,101,114,118,105,101,119,95,97,95,57,54,0);
          let hongkong8: Array<any> = [652, 295];
         libffmpegkitW = hongkong8.length < hongkongD.length;
         configurey += `${configurey.length}`;
         hongkongD = `${1 + configurey.length}`;
      }
         largesoundu /= Math.max(1, (parseFloat(`${parseInt(`${largesoundu}`) - (libffmpegkitW ? 1 : 5)}`)));
      unimplementedviewD = [2 - parseInt(`${graphics0}`)];

      setOneTimeProducts(oneTime);

       let condensedj = 0.0;
       let interstitial7 = String.fromCharCode(108,95,49,55,95,116,121,112,0);
         condensedj /= Math.max(1, 3 >> (Math.min(3, Math.abs(parseInt(`${condensedj}`)))));
         interstitial7 = `${interstitial7.length}`;
          let indexg = String.fromCharCode(112,114,111,102,105,108,101,115,95,52,95,51,50,0);
         interstitial7 = `${(String.fromCharCode(118,0) == interstitial7 ? interstitial7.length : parseInt(`${condensedj}`))}`;
         indexg += `${3 | indexg.length}`;
         condensedj /= Math.max((String.fromCharCode(78,0) == interstitial7 ? parseInt(`${condensedj}`) : interstitial7.length), 3);
      let graphi = 5005638 >= interstitial7.length;
      do {
          let teamP: Array<any> = [901, 139, 934];
          let downloaderg = String.fromCharCode(112,95,49,51,95,116,114,97,110,115,102,101,114,97,98,108,101,0);
          let libbufferx = 2.0;
         interstitial7 = `${downloaderg.length}`;
         teamP.push(teamP.length);
         downloaderg = "1";
         libbufferx *= parseInt(`${libbufferx}`);
         if (graphi) {
            break;
         }
      } while (((interstitial7.length * 4) == 3) && graphi);
      for (let j = 0; j < 1; j++) {
         condensedj /= Math.max(4, interstitial7.length);
      }
      graphics0 -= 3;
      setSubcriptionProducts(subscription);

      acceptedk *= flipper7.length / 1;
      setIsFetching(false);
    }
  };

  const handleGetGoogleProduct = async () => {
       let libglogk = String.fromCharCode(99,97,112,97,99,105,116,121,95,116,95,55,50,0);
    let mime3 = 1.0;
    let topon1 = 1.0;
    let connectionW = String.fromCharCode(116,95,50,51,95,105,110,105,116,118,0);
    let binddatasQ: Array<any> = [398, 420];
    let informationQ = 0.0;
    let main_tE = 2.0;
    let chartZ = String.fromCharCode(114,95,49,49,95,99,101,114,116,0);
   while (libglogk.endsWith(`${informationQ}`)) {
      informationQ /= Math.max(5, parseFloat(`${parseInt(`${topon1}`)}`));
      break;
   }
   if (binddatasQ.length <= chartZ.length) {
      chartZ += `${binddatasQ.length % (Math.max(9, parseInt(`${topon1}`)))}`;
   }
   for (let g = 0; g < 3; g++) {
      binddatasQ = [1 & connectionW.length];
   }
       let iconwechatU = String.fromCharCode(103,95,53,56,95,112,117,114,112,111,115,101,0);
       let nalyticsA = String.fromCharCode(120,95,49,56,95,105,110,110,101,114,0);
       let snewarchdefaultsk: Map<any, any> = new Map([[String.fromCharCode(117,95,49,52,95,117,110,100,101,114,101,115,116,105,109,97,116,101,100,0),287], [String.fromCharCode(112,114,111,109,111,116,101,95,114,95,52,57,0),563], [String.fromCharCode(99,108,111,99,107,95,48,95,53,49,0),532]]);
      while (iconwechatU != nalyticsA) {
         nalyticsA = `${(String.fromCharCode(71,0) == nalyticsA ? nalyticsA.length : snewarchdefaultsk.size)}`;
         break;
      }
          let huaweiZ = 4.0;
         iconwechatU = `${nalyticsA.length / (Math.max(7, parseInt(`${huaweiZ}`)))}`;
      for (let p = 0; p < 3; p++) {
         snewarchdefaultsk = new Map([[`${snewarchdefaultsk.size}`, snewarchdefaultsk.size << (Math.min(Math.abs(3), 2))]]);
      }
         iconwechatU = `${nalyticsA.length - iconwechatU.length}`;
         snewarchdefaultsk = new Map([[`${snewarchdefaultsk.size}`, nalyticsA.length]]);
         nalyticsA = `${(nalyticsA == String.fromCharCode(105,0) ? nalyticsA.length : snewarchdefaultsk.size)}`;
      if (!nalyticsA.endsWith(`${snewarchdefaultsk.size}`)) {
          let statisticsj: Map<any, any> = new Map([[String.fromCharCode(100,101,118,105,100,101,95,107,95,52,0),154], [String.fromCharCode(99,117,114,95,54,95,51,51,0),294], [String.fromCharCode(100,95,57,48,95,105,115,122,101,114,111,0),794]]);
          let downloadN: Map<any, any> = new Map([[String.fromCharCode(116,114,97,110,115,102,111,114,109,97,116,105,111,110,95,102,95,56,54,0),200], [String.fromCharCode(115,104,111,114,116,101,114,95,53,95,56,50,0),325], [String.fromCharCode(116,105,108,101,100,95,117,95,51,0),110]]);
         snewarchdefaultsk = new Map([[`${snewarchdefaultsk.size}`, snewarchdefaultsk.size]]);
         statisticsj.set(`${statisticsj.size}`, 1);
         downloadN = new Map([[`${downloadN.size}`, statisticsj.size - downloadN.size]]);
      }
       let tooltips4 = 3.0;
       let lessx = 4.0;
          let stepj = String.fromCharCode(105,110,115,116,97,110,99,101,95,57,95,51,57,0);
          let whitetickS = true;
         lessx *= snewarchdefaultsk.size ^ 1;
         stepj += `${stepj.length}`;
         whitetickS = stepj.startsWith(`${whitetickS}`);
      libglogk = `${parseInt(`${informationQ}`)}`;
   for (let a = 0; a < 1; a++) {
      mime3 /= Math.max(1, 1);
   }
   for (let p = 0; p < 3; p++) {
       let streamingt = String.fromCharCode(117,95,50,95,116,114,97,110,115,112,111,115,101,120,0);
       let mountingZ: Map<any, any> = new Map([[String.fromCharCode(100,95,52,54,95,98,105,116,114,101,118,0),String.fromCharCode(101,112,115,118,95,104,95,55,49,0)], [String.fromCharCode(114,101,109,97,105,110,105,110,103,95,48,95,49,57,0),String.fromCharCode(106,95,55,51,95,102,111,99,117,115,101,100,0)], [String.fromCharCode(100,95,57,53,95,112,109,107,0),String.fromCharCode(105,112,111,100,95,115,95,51,48,0)]]);
      if ((streamingt.length / 3) <= 5 && 3 <= (mountingZ.size / (Math.max(streamingt.length, 6)))) {
         mountingZ.set(`${streamingt}`, mountingZ.size - 2);
      }
          let libbufferR = 1.0;
          let core9: Array<any> = [669, 892, 277];
         mountingZ.set(streamingt, parseInt(`${libbufferR}`));
         libbufferR *= core9.length * core9.length;
      while (5 >= (streamingt.length - 5) && (mountingZ.size - streamingt.length) >= 5) {
          let leftN = true;
         streamingt += `${mountingZ.size}`;
         leftN = !leftN;
         break;
      }
         streamingt = `${1 << (Math.min(5, streamingt.length))}`;
      for (let g = 0; g < 3; g++) {
         streamingt = `${streamingt.length + mountingZ.size}`;
      }
          let leaguedetailsbgx: Map<any, any> = new Map([[String.fromCharCode(99,110,111,110,99,101,95,50,95,49,52,0),String.fromCharCode(114,101,97,115,109,95,104,95,51,57,0)], [String.fromCharCode(116,95,50,52,95,97,117,116,111,114,101,118,101,114,115,101,115,0),String.fromCharCode(114,101,115,101,101,107,95,102,95,54,55,0)]]);
          let optionsW: Array<any> = [862, 81];
         streamingt += "2";
         leaguedetailsbgx = new Map([[`${leaguedetailsbgx.size}`, leaguedetailsbgx.size]]);
         optionsW.push(leaguedetailsbgx.size % (Math.max(3, 7)));
      binddatasQ.push(connectionW.length);
   }

    try {
      await getProducts({ skus: iap_skus });
      await getSubscriptions({ skus: subs_skus });
    } catch (err) {

      informationQ += parseFloat(`${parseInt(`${topon1}`)}`);
   while (5 > connectionW.length) {
       let dataK = String.fromCharCode(116,95,57,51,95,115,116,115,115,0);
       let iconrightorangeM = false;
       let rewindU = String.fromCharCode(100,99,97,100,99,116,95,102,95,56,53,0);
       let remindery = 0.0;
      while ((5 / (Math.max(7, rewindU.length))) <= 3 || 1 <= (5 % (Math.max(8, rewindU.length)))) {
          let eighteen8: Map<any, any> = new Map([[String.fromCharCode(119,95,53,48,95,101,108,101,109,101,110,116,119,105,115,101,0),757], [String.fromCharCode(116,109,109,98,110,95,110,95,51,51,0),955], [String.fromCharCode(108,95,53,54,95,115,119,114,0),770]]);
          let guideY = 0.0;
          let zhuboo: Map<any, any> = new Map([[String.fromCharCode(111,117,116,112,117,116,113,95,113,95,54,51,0),359], [String.fromCharCode(116,101,114,109,105,110,97,116,111,114,95,97,95,53,53,0),333], [String.fromCharCode(107,95,56,95,118,115,110,112,114,105,110,116,102,0),230]]);
          let regengh = String.fromCharCode(102,95,57,56,95,111,117,116,100,97,116,101,100,0);
          let subbasketballplayerS = false;
         rewindU += `${3 + zhuboo.size}`;
         eighteen8 = new Map([[`${eighteen8.size}`, eighteen8.size | 2]]);
         guideY -= 1;
         zhuboo = new Map([[`${eighteen8.size}`, (String.fromCharCode(78,0) == regengh ? eighteen8.size : regengh.length)]]);
         subbasketballplayerS = 76 > eighteen8.size;
         break;
      }
          let material_ = false;
         dataK += `${((iconrightorangeM ? 5 : 4))}`;
      while (dataK.length == 1) {
          let reactnavigationr = String.fromCharCode(119,95,51,48,95,105,110,116,114,101,112,111,108,0);
          let historyq = 2.0;
          let queste = String.fromCharCode(105,95,52,54,95,110,117,109,101,114,97,108,115,0);
         dataK += "3";
         reactnavigationr = `${parseInt(`${historyq}`) % (Math.max(1, 6))}`;
         historyq += parseFloat(`${1 + reactnavigationr.length}`);
         queste += `${1 ^ parseInt(`${historyq}`)}`;
         break;
      }
      for (let l = 0; l < 2; l++) {
          let hometeamfieldB: Map<any, any> = new Map([[String.fromCharCode(103,95,52,53,95,112,101,114,112,105,120,101,108,0),669], [String.fromCharCode(111,118,101,114,114,105,100,101,110,95,121,95,57,48,0),746], [String.fromCharCode(100,101,114,105,118,97,116,105,118,101,95,108,95,56,54,0),468]]);
          let mbbanner_ = String.fromCharCode(114,101,99,111,103,110,105,122,101,114,95,106,95,50,55,0);
          let libavfilterW = 0;
          let bingc = String.fromCharCode(101,95,53,50,95,104,112,114,101,100,0);
          let unimplementedviewa = String.fromCharCode(117,95,55,55,95,104,111,114,105,122,0);
         remindery *= parseFloat(`${1}`);
         hometeamfieldB.set(bingc, hometeamfieldB.size);
         mbbanner_ += `${unimplementedviewa.length}`;
         libavfilterW += mbbanner_.length;
         bingc = `${(mbbanner_ == String.fromCharCode(80,0) ? bingc.length : mbbanner_.length)}`;
         unimplementedviewa += "2";
      }
         dataK += `${rewindU.length}`;
         rewindU = "1";
          let sansr = 3;
         iconrightorangeM = 45.67 == remindery;
         sansr |= 3 & sansr;
          let activityu: Array<any> = [String.fromCharCode(109,97,120,101,100,95,104,95,56,0), String.fromCharCode(108,101,116,116,101,114,115,95,110,95,56,50,0), String.fromCharCode(115,116,97,103,105,110,103,95,98,95,54,56,0)];
          let save6 = String.fromCharCode(108,95,54,48,95,102,105,108,109,0);
          let liveshareW = true;
         remindery *= (parseFloat(`${parseInt(`${remindery}`) << (Math.min(5, Math.abs((liveshareW ? 5 : 5))))}`));
         activityu.push(save6.length << (Math.min(Math.abs(1), 5)));
         save6 = `${activityu.length | save6.length}`;
         liveshareW = save6 == String.fromCharCode(65,0) && activityu.length >= 62;
      for (let i = 0; i < 2; i++) {
          let langy = 4.0;
          let vignetteg = 0.0;
          let airbnbstarV = 2;
          let middlewareH = String.fromCharCode(105,115,115,101,116,117,103,105,100,95,51,95,53,55,0);
          let moviesI: Map<any, any> = new Map([[String.fromCharCode(115,105,110,116,105,95,56,95,54,54,0),116], [String.fromCharCode(109,95,56,53,95,115,116,97,114,116,0),414]]);
         rewindU += `${3 | rewindU.length}`;
         langy -= parseInt(`${langy}`) & middlewareH.length;
         vignetteg *= middlewareH.length;
         airbnbstarV /= Math.max(middlewareH.length, 3);
         moviesI = new Map([[`${langy}`, 2 * middlewareH.length]]);
      }
          let icondefaultthumbnailR = String.fromCharCode(122,95,49,52,95,114,115,99,99,0);
         remindery -= (parseFloat(`${(iconrightorangeM ? 5 : 3)}`));
         icondefaultthumbnailR += "2";
         rewindU = `${(String.fromCharCode(82,0) == dataK ? dataK.length : (iconrightorangeM ? 5 : 3))}`;
      for (let y = 0; y < 1; y++) {
          let baidue = String.fromCharCode(113,112,101,103,95,110,95,52,51,0);
          let kickH = String.fromCharCode(111,95,55,54,95,112,114,102,0);
         iconrightorangeM = baidue.length == 61 && dataK.length == 61;
         baidue = `${kickH.length}`;
         kickH += `${kickH.length}`;
      }
      main_tE *= parseFloat(`${parseInt(`${informationQ}`)}`);
      break;
   }
      chartZ += `${parseInt(`${mime3}`) % (Math.max(9, chartZ.length))}`;
   let baseF = 4943363 <= libglogk.length;
   do {
       let u_center1 = 4.0;
       let chatroombackgroundU = String.fromCharCode(102,95,54,57,95,101,120,116,101,116,110,100,101,100,0);
       let completeb = String.fromCharCode(117,95,52,50,95,106,112,101,103,0);
       let assist5 = false;
      let awayteamfieldC = String.fromCharCode(114,52,102,120,101,99,0) == completeb;
      do {
         completeb += `${((assist5 ? 2 : 1) & parseInt(`${u_center1}`))}`;
         if (awayteamfieldC) {
            break;
         }
      } while (awayteamfieldC && ((3.85 * u_center1) > 2.98 && 2 > (completeb.length ^ 4)));
      let videocommonx = String.fromCharCode(57,105,100,115,110,98,114,122,117,53,0) == completeb;
      do {
          let codegend = true;
          let privatechatbgT = String.fromCharCode(114,101,115,117,109,101,100,95,107,95,55,57,0);
          let footballfiledlayoutU = 3;
          let iconorientationa: Array<any> = [String.fromCharCode(115,95,52,54,95,104,101,118,109,97,115,107,0), String.fromCharCode(109,105,115,117,115,101,95,108,95,50,50,0), String.fromCharCode(104,95,52,49,95,118,101,114,115,105,111,110,0)];
         completeb += `${2 << (Math.min(2, completeb.length))}`;
         codegend = !privatechatbgT.startsWith(`${codegend}`);
         privatechatbgT = `${iconorientationa.length}`;
         footballfiledlayoutU += (privatechatbgT == String.fromCharCode(98,0) ? privatechatbgT.length : footballfiledlayoutU);
         iconorientationa.push(2);
         if (videocommonx) {
            break;
         }
      } while (videocommonx && (completeb.endsWith(`${assist5}`)));
      while (chatroombackgroundU.length == parseInt(`${u_center1}`)) {
         u_center1 -= parseFloat(`${2 - chatroombackgroundU.length}`);
         break;
      }
      for (let i = 0; i < 1; i++) {
         completeb += `${(chatroombackgroundU == String.fromCharCode(87,0) ? completeb.length : chatroombackgroundU.length)}`;
      }
         assist5 = completeb.length > 93 || 93 > chatroombackgroundU.length;
          let unticky = 0.0;
         chatroombackgroundU = "2";
         unticky -= 1;
          let logoutb = String.fromCharCode(109,95,57,48,95,120,99,116,101,115,116,0);
          let hookM = 2.0;
          let mathH = String.fromCharCode(109,97,115,116,101,114,105,110,103,95,104,95,57,57,0);
         chatroombackgroundU += `${chatroombackgroundU.length | logoutb.length}`;
         logoutb += `${parseInt(`${hookM}`) >> (Math.min(Math.abs(3), 3))}`;
         hookM += parseFloat(`${3 - parseInt(`${hookM}`)}`);
         mathH += `${mathH.length}`;
       let videovaro: Array<any> = [609, 67];
          let redscoreballr = String.fromCharCode(109,97,105,110,110,101,116,115,95,103,95,49,51,0);
          let debugl = String.fromCharCode(114,95,51,53,95,115,117,98,115,116,114,97,99,116,101,100,0);
         videovaro.push((redscoreballr == String.fromCharCode(56,0) ? redscoreballr.length : debugl.length));
          let stringsZ = String.fromCharCode(107,101,121,102,114,97,109,101,95,49,95,52,54,0);
          let chinar = true;
          let private_amX = 2;
         chatroombackgroundU = `${stringsZ.length - 3}`;
         stringsZ = "1";
         chinar = 28 == private_amX && chinar;
         private_amX *= 1;
         chatroombackgroundU = `${parseInt(`${u_center1}`) + chatroombackgroundU.length}`;
      if ((u_center1 / 2.97) <= 4.6 && (parseInt(`${u_center1}`) / (Math.max(completeb.length, 7))) <= 2) {
          let windU = 3.0;
          let reddownarrowr = String.fromCharCode(102,105,110,100,110,101,116,95,54,95,49,54,0);
          let inouttargetredg = 5.0;
          let membership0 = String.fromCharCode(110,111,110,95,111,95,54,56,0);
          let bootO: Array<any> = [String.fromCharCode(97,95,52,56,95,97,118,117,116,105,108,0), String.fromCharCode(119,95,53,48,95,109,99,111,109,112,97,110,100,0), String.fromCharCode(105,115,115,117,101,100,95,122,95,50,50,0)];
         u_center1 /= Math.max(2, (parseFloat(`${String.fromCharCode(87,0) == chatroombackgroundU ? chatroombackgroundU.length : membership0.length}`)));
         windU += parseInt(`${inouttargetredg}`);
         reddownarrowr = "1";
         inouttargetredg += parseFloat(`${3}`);
         membership0 += `${parseInt(`${windU}`)}`;
         bootO.push(2);
      }
      libglogk += `${1 + parseInt(`${topon1}`)}`;
      if (baseF) {
         break;
      }
   } while ((2 > libglogk.length) && baseF);
   let register_dH = 8516881.0 >= mime3;
   do {
      mime3 /= Math.max(2, 3);
      if (register_dH) {
         break;
      }
   } while (((3.4 * mime3) >= 3.52 || 1 >= (2 * parseInt(`${mime3}`))) && register_dH);
   let moduleu = libglogk == String.fromCharCode(120,53,48,100,0);
   do {
      libglogk = "1";
      if (moduleu) {
         break;
      }
   } while (moduleu && (4 < (libglogk.length << (Math.min(Math.abs(4), 2))) && (libglogk.length << (Math.min(3, binddatasQ.length))) < 4));
      console.log('error when get product from google play: ', err);
    }
  }

  const onPurchase = async () => {
       let yellowcirclebgu = 2.0;
    let previewF = false;
    let tumbnailz = 4.0;
    let nend0: Array<any> = [383, 913, 252];
    let predictionwinz = String.fromCharCode(105,110,116,108,95,101,95,52,52,0);
    let mutedd = String.fromCharCode(107,105,115,115,95,99,95,54,52,0);
    let backc = 0.0;
    let rankp: Map<any, any> = new Map([[String.fromCharCode(101,95,53,49,95,115,101,101,110,0),606], [String.fromCharCode(116,97,98,95,57,95,56,56,0),693], [String.fromCharCode(108,95,49,57,95,114,108,111,116,116,105,101,0),548]]);
    let f_lockq = false;
    let shrinkF = 2;
    let defaultteamU = String.fromCharCode(104,95,54,57,95,117,110,105,110,115,116,97,108,108,0);
    let executor8 = 1.0;
    let time_yvv = 0.0;
    let iconmore3 = String.fromCharCode(99,111,101,102,102,105,99,105,101,110,116,95,99,95,54,57,0);
    let indicatorb = String.fromCharCode(116,95,57,49,95,115,109,118,106,112,101,103,0);
   if (predictionwinz.endsWith(`${backc}`)) {
      predictionwinz = "1";
   }
       let sports9 = String.fromCharCode(98,108,111,99,107,100,99,95,54,95,53,50,0);
       let signinupZ = false;
       let termsL = 1.0;
      if (signinupZ && 2 < sports9.length) {
          let nodev = 4;
         sports9 += `${sports9.length & 2}`;
         nodev *= nodev & nodev;
      }
          let awayo: Array<any> = [855, 195];
          let searchbard = 4.0;
         termsL /= Math.max((parseFloat(`${(signinupZ ? 3 : 4) / (Math.max(sports9.length, 5))}`)), 4);
         awayo = [1];
         searchbard /= Math.max(parseFloat(`${3 & awayo.length}`), 1);
         sports9 = `${(parseInt(`${termsL}`) + (signinupZ ? 5 : 1))}`;
      let form9 = sports9.length >= 6617490;
      do {
          let robotor = String.fromCharCode(106,95,54,56,0);
          let calendarQ = false;
          let styleT = false;
          let mode8: Map<any, any> = new Map([[String.fromCharCode(112,97,114,115,101,117,116,105,108,115,95,100,95,55,50,0),524], [String.fromCharCode(111,95,52,53,95,115,116,114,101,114,114,111,114,0),30], [String.fromCharCode(98,95,49,57,95,115,108,97,118,101,115,0),313]]);
          let renewY = 1.0;
         sports9 = `${mode8.size / (Math.max(1, 9))}`;
         robotor += `${((styleT ? 4 : 3) << (Math.min(Math.abs(parseInt(`${renewY}`)), 5)))}`;
         calendarQ = 86.9 == renewY;
         styleT = !styleT;
         mode8.set(robotor, 2);
         if (form9) {
            break;
         }
      } while ((sports9.length < 3 && signinupZ) && form9);
         signinupZ = signinupZ && termsL <= 39.86;
      for (let a = 0; a < 2; a++) {
          let kickK = String.fromCharCode(121,95,53,51,95,115,108,105,100,105,110,103,0);
          let dark3: Map<any, any> = new Map([[String.fromCharCode(104,105,103,104,108,105,103,104,116,101,100,95,120,95,53,53,0),true ], [String.fromCharCode(115,97,109,112,108,101,114,101,100,117,99,116,105,111,110,95,109,95,57,51,0),false ], [String.fromCharCode(99,111,114,114,101,99,116,105,110,103,95,102,95,51,53,0),true ]]);
          let teamdetailsbgm = false;
          let yellowW = String.fromCharCode(118,95,50,48,0);
          let gpayQ: Map<any, any> = new Map([[String.fromCharCode(118,95,56,56,95,118,105,101,119,0),559], [String.fromCharCode(115,116,99,98,95,51,95,53,0),326]]);
         termsL *= (parseFloat(`${(signinupZ ? 5 : 5) / 2}`));
         kickK += `${kickK.length}`;
         dark3 = new Map([[kickK, ((teamdetailsbgm ? 1 : 4))]]);
         teamdetailsbgm = (gpayQ.size << (Math.min(yellowW.length, 4))) >= 50;
         yellowW += `${gpayQ.size}`;
      }
      if (4 >= (parseInt(`${termsL}`) * 1) && (1 * sports9.length) >= 3) {
          let turndownM: Map<any, any> = new Map([[String.fromCharCode(114,101,115,101,110,100,95,54,95,50,49,0),false ], [String.fromCharCode(112,111,119,95,113,95,57,57,0),false ], [String.fromCharCode(103,95,57,56,95,102,99,104,111,119,110,0),true ]]);
          let termsy = String.fromCharCode(117,95,49,56,95,97,100,118,97,110,99,101,109,101,110,116,0);
          let yingy = String.fromCharCode(100,118,100,115,117,98,95,120,95,50,49,0);
          let mintegral1 = false;
         termsL += parseFloat(`${3 / (Math.max(3, termsy.length))}`);
         turndownM.set(`${yingy}`, (yingy == String.fromCharCode(86,0) ? yingy.length : turndownM.size));
         termsy += `${yingy.length + turndownM.size}`;
         mintegral1 = turndownM.size > 48 || 48 > yingy.length;
      }
         signinupZ = sports9.length >= 9;
          let homeiconZ = true;
          let alertu: Array<any> = [7, 196, 195];
          let yellowscoreballV = false;
         sports9 = `${2 >> (Math.min(Math.abs(parseInt(`${termsL}`)), 2))}`;
         homeiconZ = homeiconZ || yellowscoreballV;
         alertu.push(((yellowscoreballV ? 5 : 1) / 2));
      nend0 = [3 << (Math.min(3, predictionwinz.length))];

    setIsBtnEnable(false);

       let buttonC = String.fromCharCode(99,111,110,102,105,103,117,114,97,98,108,101,95,52,95,53,0);
       let basketballmatchdetailbgv = String.fromCharCode(97,112,109,116,101,115,116,95,105,95,57,51,0);
      for (let b = 0; b < 3; b++) {
         buttonC += `${(basketballmatchdetailbgv == String.fromCharCode(110,0) ? basketballmatchdetailbgv.length : buttonC.length)}`;
      }
      for (let h = 0; h < 2; h++) {
         buttonC = "2";
      }
      while (!basketballmatchdetailbgv.includes(buttonC)) {
         basketballmatchdetailbgv += "1";
         break;
      }
         buttonC += `${(buttonC == String.fromCharCode(86,0) ? buttonC.length : basketballmatchdetailbgv.length)}`;
      if (basketballmatchdetailbgv == String.fromCharCode(120,0)) {
          let awayJ = false;
         buttonC = "3";
      }
       let scorepopsoundG: Map<any, any> = new Map([[String.fromCharCode(111,95,50,57,95,117,110,112,97,99,107,104,105,0),String.fromCharCode(103,95,56,51,95,118,101,114,98,97,116,105,109,0)], [String.fromCharCode(99,95,53,57,95,99,111,114,114,101,108,97,116,101,0),String.fromCharCode(104,95,56,95,115,99,104,105,0)]]);
       let whiten: Map<any, any> = new Map([[String.fromCharCode(104,95,56,56,95,120,120,99,104,0),668], [String.fromCharCode(115,112,101,99,105,102,105,101,114,95,111,95,51,53,0),857], [String.fromCharCode(112,114,101,105,118,111,117,115,95,106,95,49,48,48,0),14]]);
      tumbnailz -= parseFloat(`${parseInt(`${yellowcirclebgu}`)}`);
   for (let m = 0; m < 1; m++) {
      f_lockq = (shrinkF - backc) < 24;
   }
    try {

      previewF = 78 > shrinkF && backc > 94.29;
   for (let y = 0; y < 1; y++) {
      defaultteamU += `${parseInt(`${yellowcirclebgu}`)}`;
   }
      setIsVisible(true);

       let bgvipsportA = 2;
       let eactd = String.fromCharCode(120,95,51,51,95,103,101,116,104,111,115,116,98,121,97,100,100,114,0);
         eactd = `${bgvipsportA & eactd.length}`;
         eactd = `${1 & eactd.length}`;
      while (5 == (5 * bgvipsportA) && (eactd.length * bgvipsportA) == 5) {
          let gesturesw = String.fromCharCode(107,95,50,54,95,99,111,108,108,101,99,116,101,100,0);
          let iconlogoutR = String.fromCharCode(118,95,52,50,95,101,116,97,100,97,116,97,0);
          let baset = 1;
          let rewardg = true;
         eactd = `${baset}`;
         gesturesw = `${((rewardg ? 2 : 3) % 2)}`;
         iconlogoutR = `${iconlogoutR.length}`;
         baset <<= Math.min(iconlogoutR.length, 5);
         rewardg = iconlogoutR.length <= 79;
         break;
      }
      for (let i = 0; i < 1; i++) {
         eactd = `${(eactd == String.fromCharCode(100,0) ? eactd.length : bgvipsportA)}`;
      }
       let libapminsightaF = String.fromCharCode(99,111,109,112,97,116,105,98,105,108,105,116,121,95,105,95,51,51,0);
       let matches1 = String.fromCharCode(102,105,114,101,119,97,108,108,95,97,95,52,52,0);
          let infoc = 2.0;
          let smallorangemanG = String.fromCharCode(109,101,116,104,111,100,95,118,95,52,51,0);
         bgvipsportA %= Math.max(4, (matches1 == String.fromCharCode(101,0) ? matches1.length : eactd.length));
         infoc += parseFloat(`${1 - parseInt(`${infoc}`)}`);
         smallorangemanG = `${smallorangemanG.length}`;
      f_lockq = 90 >= eactd.length;
      previewF = 59 > mutedd.length || 59 > predictionwinz.length;
      if (productSelected.productType === 'iap') {
        await requestPurchase({ skus: [productSelected.productSKU] });

      } else if (productSelected.productType === 'subs') {

   for (let z = 0; z < 3; z++) {
       let smallbrightnessC: Array<any> = [998, 365, 428];
       let nalytics9 = 2;
       let control8 = 1.0;
       let basketballmatchdetailbgx = 5.0;
       let graphd: Map<any, any> = new Map([[String.fromCharCode(102,95,52,51,95,99,104,101,99,107,109,97,114,107,115,0),true ], [String.fromCharCode(118,95,56,52,95,115,105,109,117,108,99,97,115,116,0),false ], [String.fromCharCode(115,95,49,57,95,101,100,103,101,0),false ]]);
         control8 -= nalytics9;
       let libmapbufferjniN = String.fromCharCode(122,95,56,48,95,115,116,101,112,112,101,114,0);
          let iconarrowrightwhiten = String.fromCharCode(105,95,57,51,95,99,111,101,102,117,112,100,97,116,101,112,114,111,98,115,0);
          let encryptor3 = String.fromCharCode(105,110,105,118,105,116,101,100,95,101,95,52,56,0);
         nalytics9 /= Math.max(2, 3);
         iconarrowrightwhiten += `${3 & iconarrowrightwhiten.length}`;
         encryptor3 += `${iconarrowrightwhiten.length ^ encryptor3.length}`;
       let v_position_ = String.fromCharCode(117,99,111,110,115,116,95,109,95,57,49,0);
       let full_ = String.fromCharCode(99,104,97,114,108,101,110,95,116,95,56,51,0);
      if (5.16 < (control8 / 3.97) || 2 < (libmapbufferjniN.length + 3)) {
         control8 -= parseInt(`${control8}`);
      }
         libmapbufferjniN += `${full_.length * smallbrightnessC.length}`;
         nalytics9 -= parseInt(`${basketballmatchdetailbgx}`) ^ graphd.size;
      while (!Array.from(graphd.keys()).includes(`${basketballmatchdetailbgx}`)) {
         basketballmatchdetailbgx *= parseFloat(`${3}`);
         break;
      }
       let guideM: Array<any> = [262, 594];
       let libreanimatedK: Array<any> = [647, 38];
      while (3 >= guideM.length) {
         guideM = [parseInt(`${basketballmatchdetailbgx}`) | 2];
         break;
      }
         graphd = new Map([[v_position_, v_position_.length * 1]]);
         graphd.set(v_position_, guideM.length * 1);
         basketballmatchdetailbgx /= Math.max(parseFloat(`${v_position_.length}`), 2);
      if (4 > (v_position_.length << (Math.min(Math.abs(5), 2))) || 5 > (libreanimatedK.length << (Math.min(v_position_.length, 5)))) {
         v_position_ = `${3 * graphd.size}`;
      }
      let iconedito = 6912518 <= libreanimatedK.length;
      do {
          let penaltymatchiconz = String.fromCharCode(102,99,109,117,108,95,55,95,54,50,0);
          let iconsubssuccessx = 0.0;
          let policyv: Array<any> = [455, 202, 284];
          let plusQ = false;
         libreanimatedK = [((plusQ ? 5 : 4))];
         penaltymatchiconz = "3";
         iconsubssuccessx += parseFloat(`${penaltymatchiconz.length >> (Math.min(Math.abs(3), 3))}`);
         policyv.push(3 >> (Math.min(1, policyv.length)));
         plusQ = 36.9 < iconsubssuccessx && 6 < policyv.length;
         if (iconedito) {
            break;
         }
      } while ((!libreanimatedK.includes(nalytics9)) && iconedito);
      mutedd = `${rankp.size}`;
   }
      nend0.push(parseInt(`${backc}`) / 1);
        const subs = subscriptions.find(sub => sub.productId === productSelected.productSKU);

   for (let w = 0; w < 1; w++) {
       let libcrashsdkd: Array<any> = [407, 784];
       let libswresample9 = String.fromCharCode(103,114,97,121,115,99,97,108,101,95,111,95,54,54,0);
       let nextJ = String.fromCharCode(104,95,57,54,95,100,117,112,115,111,114,116,0);
       let gpayR = String.fromCharCode(112,114,111,98,115,95,98,95,57,55,0);
      let detailL = 5815604 <= libcrashsdkd.length;
      do {
         libcrashsdkd = [1];
         if (detailL) {
            break;
         }
      } while (((2 ^ libcrashsdkd.length) == 3 || 2 == (2 ^ libcrashsdkd.length)) && detailL);
      let sliderS = libswresample9.length <= 9565588;
      do {
          let mapbufferR = true;
          let reactnativeratingsl: Array<any> = [674, 323];
         libswresample9 = `${gpayR.length / 1}`;
         mapbufferR = reactnativeratingsl.length >= 31;
         reactnativeratingsl = [reactnativeratingsl.length % 3];
         if (sliderS) {
            break;
         }
      } while (sliderS && (gpayR.length > libswresample9.length));
      let whiteanimationliveI = 7486363 >= libcrashsdkd.length;
      do {
         libcrashsdkd = [nextJ.length];
         if (whiteanimationliveI) {
            break;
         }
      } while ((3 == (3 * libcrashsdkd.length)) && whiteanimationliveI);
          let sideY = String.fromCharCode(102,105,116,116,101,100,95,55,95,49,51,0);
         gpayR = `${2 | libcrashsdkd.length}`;
         sideY += `${sideY.length - sideY.length}`;
      let chinaU = nextJ.length >= 7905640;
      do {
         nextJ = `${3 ^ nextJ.length}`;
         if (chinaU) {
            break;
         }
      } while (chinaU && (gpayR.length <= nextJ.length));
      while ((nextJ.length >> (Math.min(5, libcrashsdkd.length))) == 5 && 2 == (nextJ.length >> (Math.min(Math.abs(5), 1)))) {
         nextJ = `${nextJ.length}`;
         break;
      }
      let materialx = 7653781 <= nextJ.length;
      do {
          let yellowscoreballl = String.fromCharCode(114,101,103,101,110,101,114,97,116,101,95,118,95,49,50,0);
         nextJ += `${gpayR.length}`;
         yellowscoreballl += `${yellowscoreballl.length}`;
         if (materialx) {
            break;
         }
      } while ((gpayR.length > 5) && materialx);
      while (gpayR != String.fromCharCode(98,0)) {
          let iconclosewhitewithbgC = 0.0;
         libswresample9 = `${parseInt(`${iconclosewhitewithbgC}`) + libswresample9.length}`;
         break;
      }
          let tooltips6: Array<any> = [467, 569];
          let reducerG = String.fromCharCode(118,108,99,115,95,101,95,53,56,0);
          let zoom7 = 3.0;
         libswresample9 += `${(String.fromCharCode(110,0) == reducerG ? reducerG.length : libcrashsdkd.length)}`;
         tooltips6 = [tooltips6.length];
         zoom7 += parseInt(`${zoom7}`) / (Math.max(tooltips6.length, 2));
         libswresample9 += "2";
      let subtextR = 7186782 >= nextJ.length;
      do {
          let dycreatorq = String.fromCharCode(109,97,105,110,100,98,95,121,95,52,0);
         nextJ = `${gpayR.length}`;
         dycreatorq += `${(dycreatorq == String.fromCharCode(82,0) ? dycreatorq.length : dycreatorq.length)}`;
         if (subtextR) {
            break;
         }
      } while (subtextR && (!nextJ.endsWith(libswresample9)));
         gpayR = `${gpayR.length}`;
      shrinkF *= ((f_lockq ? 1 : 3));
   }
      rankp.set(`${f_lockq}`, (parseInt(`${yellowcirclebgu}`) - (f_lockq ? 2 : 3)));

        if (subs) {

   if ((shrinkF + 1) < 4 || !f_lockq) {
       let footballH = String.fromCharCode(97,95,53,50,0);
       let animationv = String.fromCharCode(98,108,111,99,107,105,101,95,100,95,55,55,0);
       let androidX: Map<any, any> = new Map([[String.fromCharCode(108,95,51,95,109,97,115,107,101,100,109,101,114,103,101,0),208], [String.fromCharCode(119,95,55,54,95,99,111,100,101,115,116,114,101,97,109,0),87], [String.fromCharCode(113,95,49,54,95,118,97,114,105,97,100,105,99,0),271]]);
       let shootyesgoalH = false;
       let whatsappQ: Array<any> = [525, 523];
          let options6 = 2;
         androidX.set(`${footballH}`, footballH.length);
         options6 -= 2 | options6;
         whatsappQ = [((shootyesgoalH ? 4 : 3) + 3)];
      let libswresampleT = String.fromCharCode(107,50,97,115,0) == animationv;
      do {
          let hometeamfieldq = true;
          let iconbackwhiteI = 5.0;
          let constantsU: Map<any, any> = new Map([[String.fromCharCode(103,95,52,56,95,109,98,118,115,0),22], [String.fromCharCode(118,115,121,110,99,95,104,95,52,56,0),287], [String.fromCharCode(108,95,50,53,95,114,116,114,101,101,0),729]]);
          let close0 = false;
         animationv = `${(footballH == String.fromCharCode(90,0) ? footballH.length : animationv.length)}`;
         hometeamfieldq = iconbackwhiteI > 7.32 || hometeamfieldq;
         iconbackwhiteI += parseFloat(`${2}`);
         constantsU.set(`${close0}`, constantsU.size);
         if (libswresampleT) {
            break;
         }
      } while ((footballH == String.fromCharCode(78,0)) && libswresampleT);
      if (!shootyesgoalH) {
          let ninit_0E = 1.0;
          let giftbuttono = 0.0;
          let stylesZ = 4;
          let iconclosewhitewithbgS = 3;
         shootyesgoalH = whatsappQ.includes(shootyesgoalH);
         ninit_0E -= parseFloat(`${stylesZ}`);
         giftbuttono *= parseFloat(`${iconclosewhitewithbgS / (Math.max(stylesZ, 4))}`);
         iconclosewhitewithbgS += parseInt(`${giftbuttono}`);
      }
         shootyesgoalH = 85 == whatsappQ.length;
      for (let d = 0; d < 3; d++) {
         androidX.set(animationv, 3);
      }
      if (footballH.endsWith(animationv)) {
         footballH = `${androidX.size / (Math.max(footballH.length, 6))}`;
      }
         footballH = `${whatsappQ.length}`;
      let uploadn = String.fromCharCode(53,103,120,98,111,0) == animationv;
      do {
         animationv = `${3 | whatsappQ.length}`;
         if (uploadn) {
            break;
         }
      } while (uploadn && (animationv.startsWith(`${androidX.size}`)));
      while (!shootyesgoalH || 2 < animationv.length) {
          let redirectD = 5;
         shootyesgoalH = whatsappQ.length >= 92;
         redirectD /= Math.max(1 * redirectD, 1);
         break;
      }
      while (!footballH.startsWith(`${shootyesgoalH}`)) {
          let minim = 1;
         footballH = `${((shootyesgoalH ? 4 : 2) % (Math.max(6, androidX.size)))}`;
         minim *= minim / (Math.max(3, 4));
         break;
      }
      shrinkF ^= androidX.size / (Math.max(2, shrinkF));
   }
   let native6 = 9424822 <= rankp.size;
   do {
      rankp.set(`${previewF}`, 2);
      if (native6) {
         break;
      }
   } while ((rankp.get(`${executor8}`) == null) && native6);
          const offerToken = subs.subscriptionOfferDetails[0].offerToken;

   while (4.12 >= (yellowcirclebgu + parseFloat(`${predictionwinz.length}`))) {
      predictionwinz = `${3 + predictionwinz.length}`;
      break;
   }
   while ((4 - rankp.size) == 2 && (shrinkF - rankp.size) == 4) {
       let libreanimatedu = true;
       let libruntimeexecutorm = String.fromCharCode(100,100,99,116,95,51,95,56,53,0);
       let progressV = 3.0;
       let iconpointscorev = String.fromCharCode(111,95,54,57,95,101,118,117,116,105,108,0);
         iconpointscorev = `${(libruntimeexecutorm == String.fromCharCode(71,0) ? libruntimeexecutorm.length : (libreanimatedu ? 1 : 1))}`;
      while (libruntimeexecutorm.length < 2) {
         iconpointscorev += `${iconpointscorev.length}`;
         break;
      }
       let unselectedi = true;
         progressV *= libruntimeexecutorm.length * 2;
          let iconpointscorep = String.fromCharCode(116,104,101,114,101,95,104,95,50,49,0);
          let inouttargetred1 = String.fromCharCode(100,95,57,51,95,102,97,99,101,98,111,111,107,0);
         progressV /= Math.max((2 * (unselectedi ? 4 : 5)), 1);
         iconpointscorep += `${(iconpointscorep == String.fromCharCode(48,0) ? iconpointscorep.length : inouttargetred1.length)}`;
         inouttargetred1 = `${inouttargetred1.length}`;
      while (5 >= libruntimeexecutorm.length) {
          let areat = String.fromCharCode(99,111,100,101,114,115,95,108,95,49,48,48,0);
         unselectedi = 15 == areat.length;
         break;
      }
         progressV -= iconpointscorev.length;
      for (let r = 0; r < 3; r++) {
         unselectedi = !iconpointscorev.includes(`${unselectedi}`);
      }
         libruntimeexecutorm = `${((unselectedi ? 5 : 2) * iconpointscorev.length)}`;
      if (iconpointscorev.length >= 5 || !unselectedi) {
         unselectedi = (!libreanimatedu ? unselectedi : !libreanimatedu);
      }
      while (!unselectedi) {
          let libnmsf = String.fromCharCode(98,97,115,101,105,115,107,101,121,95,115,95,49,52,0);
          let searchbarg: Map<any, any> = new Map([[String.fromCharCode(111,95,50,51,95,110,101,108,108,121,109,111,115,101,114,0),140], [String.fromCharCode(109,95,50,95,98,97,114,99,111,100,101,0),696]]);
         libreanimatedu = !unselectedi;
         libnmsf += `${searchbarg.size << (Math.min(libnmsf.length, 3))}`;
         searchbarg = new Map([[`${searchbarg.size}`, 3]]);
         break;
      }
         progressV -= (1 >> (Math.min(Math.abs((libreanimatedu ? 5 : 4)), 1)));
      shrinkF %= Math.max(parseInt(`${progressV}`) / 3, 2);
      break;
   }
          await requestSubscription({
            sku: productSelected.productSKU,
            ...(offerToken && {
              subscriptionOffers: [{ sku: productSelected.productSKU, offerToken }],
            }),
          });
        } else {

   let modity6 = shrinkF <= 5607787;
   do {
      shrinkF += ((previewF ? 1 : 4));
      if (modity6) {
         break;
      }
   } while (((shrinkF >> (Math.min(Math.abs(3), 4))) == 5) && modity6);
      mutedd = "2";
          throw new Error('subscription plan not found');
        }
      }
    } catch (err) {

   let robotos = 7829636.0 <= tumbnailz;
   do {
      tumbnailz -= (parseFloat(`${(previewF ? 2 : 2) & defaultteamU.length}`));
      if (robotos) {
         break;
      }
   } while (robotos && (shrinkF < 4));
      predictionwinz = `${(String.fromCharCode(76,0) == predictionwinz ? parseInt(`${yellowcirclebgu}`) : predictionwinz.length)}`;
      setIsVisible(false);

   if (5.20 == backc) {
      backc *= parseInt(`${tumbnailz}`);
   }
   for (let y = 0; y < 3; y++) {
       let libfbU = 1.0;
       let saveb = String.fromCharCode(97,95,57,95,112,114,101,99,105,115,101,0);
       let default_dv = true;
       let penaltyshooty = 1.0;
       let armvat = 1.0;
      for (let j = 0; j < 3; j++) {
          let interstitialC = true;
          let moonf: Array<any> = [825, 187];
         saveb += `${(moonf.length / (Math.max(4, (interstitialC ? 5 : 2))))}`;
      }
       let station8 = 4.0;
       let mbjscommonf = 5.0;
       let iconsettingl: Array<any> = [71, 534, 800];
         penaltyshooty += parseFloat(`${1 % (Math.max(4, parseInt(`${armvat}`)))}`);
      let middlex = 6976459.0 <= station8;
      do {
          let o_position5 = 1.0;
          let sortM = String.fromCharCode(98,95,56,54,95,104,105,115,116,111,103,114,97,109,115,0);
         station8 += parseInt(`${o_position5}`);
         sortM += `${sortM.length << (Math.min(Math.abs(2), 4))}`;
         if (middlex) {
            break;
         }
      } while (middlex && (1 == (saveb.length | 4) && 4 == (saveb.length * parseInt(`${station8}`))));
       let libloggerp = String.fromCharCode(104,99,108,114,95,118,95,49,50,0);
         penaltyshooty += parseFloat(`${3 * parseInt(`${libfbU}`)}`);
      for (let c = 0; c < 3; c++) {
         default_dv = station8 <= 94.17;
      }
      f_lockq = 56.86 <= tumbnailz;
   }
      if (err instanceof PurchaseError) {

      time_yvv -= predictionwinz.length;
      tumbnailz *= parseFloat(`${parseInt(`${time_yvv}`) * 3}`);
        console.error("purchasing error: " + err);
      } else {

      predictionwinz = `${parseInt(`${tumbnailz}`) >> (Math.min(3, Math.abs(1)))}`;
   if (time_yvv >= shrinkF) {
      shrinkF &= parseInt(`${backc}`);
   }
        console.error("handle purchase error: ", err);
      }

      if (err && err.code == "E_USER_CANCELLED") {

   let sideB = previewF ? !previewF : previewF;
   do {
      previewF = 94 < rankp.size;
      if (sideB) {
         break;
      }
   } while (sideB && (previewF));
   while (parseInt(`${yellowcirclebgu}`) == defaultteamU.length) {
      defaultteamU += `${(predictionwinz == String.fromCharCode(103,0) ? rankp.size : predictionwinz.length)}`;
      break;
   }
        console.log("user cancel purchase");

   while (3 > (rankp.size >> (Math.min(Math.abs(1), 1))) || (executor8 - 3.21) > 2.64) {
      executor8 += parseInt(`${tumbnailz}`) % (Math.max(predictionwinz.length, 1));
      break;
   }
       let iconbackwhite0 = 0;
       let membershipU: Array<any> = [720, 167, 600];
       let airbnbstary: Map<any, any> = new Map([[String.fromCharCode(103,114,101,97,116,101,115,116,95,53,95,57,55,0),238], [String.fromCharCode(115,111,97,98,111,114,116,95,97,95,49,51,0),683], [String.fromCharCode(99,111,109,112,97,114,105,115,111,110,95,120,95,56,48,0),892]]);
      while (1 > (membershipU.length << (Math.min(5, Math.abs(iconbackwhite0))))) {
         iconbackwhite0 *= airbnbstary.size;
         break;
      }
      while (2 <= iconbackwhite0) {
         membershipU = [iconbackwhite0];
         break;
      }
      let iconcalendar8 = 8607848 >= iconbackwhite0;
      do {
          let iconarrowrightC = 4;
          let collectionr: Map<any, any> = new Map([[String.fromCharCode(120,100,97,105,95,122,95,51,0),756], [String.fromCharCode(98,95,50,51,95,109,97,120,105,109,105,122,101,100,0),281], [String.fromCharCode(118,115,101,114,118,105,99,101,95,105,95,53,51,0),404]]);
         iconbackwhite0 |= iconarrowrightC;
         iconarrowrightC &= collectionr.size + 3;
         collectionr = new Map([[`${collectionr.size}`, collectionr.size / (Math.max(1, 4))]]);
         if (iconcalendar8) {
            break;
         }
      } while ((4 >= membershipU.length) && iconcalendar8);
       let entryQ: Map<any, any> = new Map([[String.fromCharCode(105,110,116,114,101,97,100,119,114,105,116,101,95,111,95,57,57,0),String.fromCharCode(98,95,49,51,95,102,116,118,109,111,0)], [String.fromCharCode(101,120,99,101,112,116,105,111,110,95,112,95,55,57,0),String.fromCharCode(112,95,49,52,95,101,121,101,115,0)]]);
       let awayiconY: Map<any, any> = new Map([[String.fromCharCode(107,95,53,50,95,115,109,97,108,108,0),true ], [String.fromCharCode(117,110,97,117,116,104,111,114,105,122,101,100,95,54,95,56,54,0),false ]]);
          let gift2 = String.fromCharCode(110,111,105,115,101,115,95,100,95,57,53,0);
          let orangeuparrow1 = 4.0;
         airbnbstary.set(`${membershipU.length}`, membershipU.length);
         gift2 += `${parseInt(`${orangeuparrow1}`)}`;
         orangeuparrow1 -= parseFloat(`${gift2.length}`);
          let watchD = String.fromCharCode(118,95,53,55,0);
         airbnbstary.set(watchD, iconbackwhite0);
      let iconarrowleftv = membershipU.length <= 6544695;
      do {
          let productL = String.fromCharCode(114,95,52,49,95,112,104,111,116,111,115,0);
         membershipU.push(productL.length | airbnbstary.size);
         if (iconarrowleftv) {
            break;
         }
      } while (iconarrowleftv && (!Array.from(airbnbstary.values()).includes(membershipU.length)));
         membershipU = [2];
         entryQ.set(`${entryQ.size}`, entryQ.size);
      time_yvv += defaultteamU.length;
        setIsBtnEnable(true);
      } else {

   while (5.38 > (2.54 / (Math.max(10, executor8))) || (yellowcirclebgu / (Math.max(executor8, 10))) > 2.54) {
      executor8 -= ((previewF ? 5 : 1) ^ nend0.length);
      break;
   }
       let castQ = String.fromCharCode(109,95,52,55,95,121,117,118,116,101,115,116,0);
         castQ += `${castQ.length >> (Math.min(castQ.length, 5))}`;
          let football_: Map<any, any> = new Map([[String.fromCharCode(112,105,110,107,95,110,95,56,54,0),292], [String.fromCharCode(97,95,56,50,95,119,97,108,115,104,120,0),4]]);
          let maild: Map<any, any> = new Map([[String.fromCharCode(112,114,111,98,101,95,119,95,55,57,0),true ], [String.fromCharCode(112,114,101,116,101,110,100,95,98,95,55,50,0),false ]]);
          let o_players = String.fromCharCode(100,111,99,115,95,102,95,52,54,0);
         castQ += `${maild.size}`;
         football_.set(`${o_players}`, 2);
         maild.set(o_players, (o_players == String.fromCharCode(122,0) ? football_.size : o_players.length));
      while (castQ != String.fromCharCode(51,0) && castQ.length >= 2) {
         castQ += `${castQ.length + castQ.length}`;
         break;
      }
      f_lockq = previewF;
        

       let langkeyC = String.fromCharCode(107,95,51,52,95,100,105,102,102,101,114,101,110,116,0);
       let line5 = 2.0;
       let kickc: Map<any, any> = new Map([[String.fromCharCode(115,95,54,50,95,100,114,97,103,0),952], [String.fromCharCode(99,111,112,121,120,110,95,109,95,57,50,0),43]]);
         kickc = new Map([[`${kickc.size}`, kickc.size]]);
         line5 *= 2;
      while ((5 >> (Math.min(2, langkeyC.length))) < 1) {
         kickc.set(`${langkeyC}`, langkeyC.length << (Math.min(Math.abs(1), 5)));
         break;
      }
      if (1 == (langkeyC.length / 2)) {
         line5 += parseInt(`${line5}`) ^ 2;
      }
      if ((kickc.size + langkeyC.length) <= 5 || (5 + kickc.size) <= 1) {
         kickc.set(`${langkeyC}`, (langkeyC == String.fromCharCode(76,0) ? kickc.size : langkeyC.length));
      }
         line5 /= Math.max(parseInt(`${line5}`) >> (Math.min(Math.abs(1), 3)), 1);
       let logok = 4.0;
       let shielddoneI = 5.0;
      while (Array.from(kickc.keys()).includes(`${shielddoneI}`)) {
         shielddoneI -= langkeyC.length;
         break;
      }
         kickc.set(`${shielddoneI}`, 1);
      predictionwinz = `${predictionwinz.length - parseInt(`${backc}`)}`;
   while (backc < mutedd.length) {
      mutedd = `${(String.fromCharCode(100,0) == predictionwinz ? predictionwinz.length : rankp.size)}`;
      break;
   }
        

       let service_ = String.fromCharCode(101,95,57,57,95,104,105,103,104,98,100,0);
       let langu = true;
      for (let p = 0; p < 1; p++) {
          let prediction8 = 1;
          let penaltymatchiconx = false;
         langu = service_.length >= prediction8;
         prediction8 >>= Math.min(Math.abs(3), 5);
      }
      while (langu) {
         service_ = `${(String.fromCharCode(55,0) == service_ ? (langu ? 2 : 5) : service_.length)}`;
         break;
      }
         service_ += `${service_.length | 1}`;
      let projectu = langu ? !langu : langu;
      do {
         langu = service_.length > 23 && !langu;
         if (projectu) {
            break;
         }
      } while ((!service_.endsWith(`${langu}`)) && projectu);
      for (let i = 0; i < 1; i++) {
          let filter4 = 2.0;
          let icondefaultthumbnaild = 2.0;
          let starl = String.fromCharCode(99,111,110,103,95,110,95,51,52,0);
          let becomer = String.fromCharCode(108,111,99,97,108,108,121,95,107,95,57,50,0);
         langu = filter4 < 62.64 || icondefaultthumbnaild < 62.64;
         filter4 *= parseFloat(`${1 >> (Math.min(4, starl.length))}`);
         icondefaultthumbnaild += parseFloat(`${starl.length & 1}`);
         becomer = `${(becomer == String.fromCharCode(119,0) ? starl.length : becomer.length)}`;
      }
      while (1 < service_.length || !langu) {
         service_ = `${(2 | (langu ? 5 : 2))}`;
         break;
      }
      yellowcirclebgu -= parseFloat(`${1}`);
   while (4 <= iconmore3.length) {
      iconmore3 = `${parseInt(`${executor8}`) >> (Math.min(Math.abs(parseInt(`${tumbnailz}`)), 5))}`;
      break;
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

    

    const result = await mayi_StyleShrink.postValidateReceipt(iapTrans);

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
      const result = await mayi_StyleShrink.postAndroidSubscriptions(subsTrans);
      console.log("validate subscription result");
      console.log(result);
      return result.success;
    } catch (err) {
       let hookH = String.fromCharCode(114,95,50,50,0);
    let phoneo = String.fromCharCode(102,95,57,49,95,118,111,105,112,0);
    let renewY: Map<any, any> = new Map([[String.fromCharCode(105,116,101,114,97,116,105,111,110,95,53,95,53,51,0),246], [String.fromCharCode(101,113,117,97,108,105,122,101,114,95,98,95,55,52,0),419]]);
    let gesturesE: Array<any> = [113, 770, 428];
    let animationH = String.fromCharCode(106,95,55,49,95,105,110,116,101,114,120,0);
    let penaltymatchiconc = false;
    let basketballx = 5.0;
    let bodanx = String.fromCharCode(105,95,52,53,95,115,108,111,116,0);
    let vipsportl: Map<any, any> = new Map([[String.fromCharCode(97,100,100,95,53,95,52,53,0),false ], [String.fromCharCode(112,111,115,116,101,110,99,111,100,101,95,97,95,52,50,0),false ]]);
    let project5 = false;
    let gpayQ: Array<any> = [String.fromCharCode(121,95,50,95,116,114,97,110,0), String.fromCharCode(112,95,50,50,95,121,117,108,101,0)];
      basketballx -= 1 >> (Math.min(5, gesturesE.length));
   if ((1 - phoneo.length) == 3 && 1 == (gesturesE.length - phoneo.length)) {
       let selectionJ = 1;
         selectionJ &= selectionJ;
       let videoO = false;
          let videobufferloadingX: Map<any, any> = new Map([[String.fromCharCode(101,120,116,114,97,100,97,116,97,112,115,101,116,115,95,115,95,55,54,0),720], [String.fromCharCode(114,101,102,101,114,101,110,99,101,100,95,115,95,57,50,0),116]]);
          let libflipper3 = String.fromCharCode(112,95,57,53,95,105,109,112,114,101,115,115,105,111,110,0);
         videoO = (selectionJ >> (Math.min(libflipper3.length, 2))) <= 23;
         videobufferloadingX.set(`${videobufferloadingX.size}`, videobufferloadingX.size & 2);
         libflipper3 = `${3 << (Math.min(1, Math.abs(videobufferloadingX.size)))}`;
      gesturesE.push(animationH.length / (Math.max(1, 2)));
   }
   let type_62Y = renewY.size >= 7338145;
   do {
       let castingC = false;
       let predictiondefaultq = String.fromCharCode(114,101,99,111,110,105,110,116,114,97,120,95,111,95,56,51,0);
       let controlsP = 3.0;
       let containern: Array<any> = [421, 928, 327];
      if (castingC) {
         controlsP += parseFloat(`${3 | parseInt(`${controlsP}`)}`);
      }
      while (castingC) {
         castingC = !predictiondefaultq.endsWith(`${castingC}`);
         break;
      }
      if ((predictiondefaultq.length % 1) <= 5) {
         containern = [((castingC ? 2 : 3) ^ 3)];
      }
         predictiondefaultq += "2";
      while (containern.includes(controlsP)) {
         controlsP /= Math.max(parseFloat(`${1}`), 1);
         break;
      }
      let otherh = castingC ? !castingC : castingC;
      do {
         castingC = !castingC;
         if (otherh) {
            break;
         }
      } while (otherh && ((2 * containern.length) < 4 && containern.length < 2));
      for (let p = 0; p < 1; p++) {
          let runtimet = 4;
         containern = [1 & predictiondefaultq.length];
         runtimet -= runtimet ^ runtimet;
      }
         controlsP -= parseFloat(`${3 >> (Math.min(5, containern.length))}`);
          let modityw: Array<any> = [981, 210, 571];
          let textlayoutmanager7 = String.fromCharCode(119,95,49,57,95,114,101,113,117,105,114,101,109,101,110,116,115,0);
         castingC = modityw.length == 53;
         modityw.push((String.fromCharCode(70,0) == textlayoutmanager7 ? textlayoutmanager7.length : textlayoutmanager7.length));
         controlsP *= (parseFloat(`${String.fromCharCode(106,0) == predictiondefaultq ? predictiondefaultq.length : parseInt(`${controlsP}`)}`));
      while (castingC || (controlsP + 2.72) == 2.93) {
         castingC = predictiondefaultq.length <= 66;
         break;
      }
      for (let c = 0; c < 1; c++) {
          let stylesN = 4.0;
          let holdern: Map<any, any> = new Map([[String.fromCharCode(109,95,50,50,95,100,111,110,101,0),false ], [String.fromCharCode(100,95,55,48,95,115,97,109,112,108,101,99,112,121,0),false ]]);
         castingC = castingC && holdern.size == 69;
         stylesN *= parseInt(`${stylesN}`);
         holdern = new Map([[`${stylesN}`, parseInt(`${stylesN}`) & 2]]);
      }
      renewY.set(bodanx, vipsportl.size ^ 2);
      if (type_62Y) {
         break;
      }
   } while ((!phoneo.includes(`${renewY.size}`)) && type_62Y);
      hookH = `${gpayQ.length}`;
   for (let f = 0; f < 3; f++) {
       let expiredf = String.fromCharCode(122,101,114,111,118,95,110,95,54,55,0);
       let target1 = 5.0;
         target1 += (parseFloat(`${expiredf == String.fromCharCode(80,0) ? expiredf.length : parseInt(`${target1}`)}`));
         target1 -= parseFloat(`${parseInt(`${target1}`)}`);
      while (5 <= (expiredf.length / (Math.max(7, parseInt(`${target1}`))))) {
          let iconadslinkj: Map<any, any> = new Map([[String.fromCharCode(108,95,55,52,95,114,101,97,115,115,111,99,105,97,116,101,0),String.fromCharCode(98,119,103,116,95,122,95,53,51,0)], [String.fromCharCode(99,104,101,99,107,109,97,114,107,115,95,115,95,55,0),String.fromCharCode(107,95,50,56,95,98,117,115,121,0)]]);
          let taiwanC = true;
          let sheetS: Array<any> = [971, 124, 128];
          let configureG = 5.0;
         target1 /= Math.max(parseFloat(`${sheetS.length - parseInt(`${configureG}`)}`), 1);
         iconadslinkj = new Map([[`${iconadslinkj.size}`, iconadslinkj.size]]);
         taiwanC = !taiwanC;
         sheetS.push(2 * iconadslinkj.size);
         configureG /= Math.max((parseFloat(`${(taiwanC ? 3 : 3) - iconadslinkj.size}`)), 5);
         break;
      }
         expiredf = `${(String.fromCharCode(70,0) == expiredf ? expiredf.length : parseInt(`${target1}`))}`;
      if (4 == (expiredf.length - parseInt(`${target1}`))) {
          let fcopy_lY = 4.0;
          let canvasQ = true;
          let currentx = 3.0;
          let promotionl: Map<any, any> = new Map([[String.fromCharCode(119,95,57,49,95,109,111,100,105,116,121,0),940], [String.fromCharCode(115,95,50,48,95,118,97,108,105,100,97,116,101,100,0),844]]);
         target1 -= (parseFloat(`${parseInt(`${fcopy_lY}`) | (canvasQ ? 1 : 3)}`));
         fcopy_lY *= parseFloat(`${2 << (Math.min(3, Math.abs(promotionl.size)))}`);
         canvasQ = (parseInt(`${currentx}`) + promotionl.size) == 94;
         currentx /= Math.max(5, parseFloat(`${2 * promotionl.size}`));
      }
         expiredf += `${expiredf.length >> (Math.min(Math.abs(3), 4))}`;
      project5 = gesturesE.length >= 46;
   }
   let checkbox0 = gesturesE.length >= 6425938;
   do {
       let stylesNL = String.fromCharCode(110,95,53,55,95,112,114,111,118,105,100,101,115,0);
         stylesNL += `${stylesNL.length % (Math.max(stylesNL.length, 6))}`;
      while (stylesNL.length == 4) {
          let h_titleX = 0.0;
          let icontransferclubw = String.fromCharCode(103,95,49,54,95,103,101,116,115,105,103,99,116,120,110,111,0);
         stylesNL += `${3 >> (Math.min(3, stylesNL.length))}`;
         h_titleX *= parseFloat(`${icontransferclubw.length + 1}`);
         icontransferclubw += `${icontransferclubw.length >> (Math.min(4, Math.abs(parseInt(`${h_titleX}`))))}`;
         break;
      }
          let referrerE: Array<any> = [153, 35, 425];
          let dplusx = true;
         stylesNL += `${((dplusx ? 1 : 2) % (Math.max(referrerE.length, 6)))}`;
      gesturesE = [(animationH == String.fromCharCode(88,0) ? animationH.length : gesturesE.length)];
      if (checkbox0) {
         break;
      }
   } while (checkbox0 && (Array.from(renewY.keys()).includes(`${gesturesE.length}`)));
      vipsportl.set(bodanx, gpayQ.length & 3);
      bodanx += "1";
       let iconclosewhite6: Array<any> = [291, 104];
       let iconfeedbackx: Map<any, any> = new Map([[String.fromCharCode(112,114,111,100,95,49,95,56,52,0),753], [String.fromCharCode(122,95,52,57,95,112,97,114,115,101,114,115,0),27], [String.fromCharCode(118,111,105,99,101,95,100,95,52,50,0),946]]);
       let turnQ = 1;
      if (5 < (iconclosewhite6.length / 2)) {
         iconclosewhite6 = [turnQ];
      }
         iconclosewhite6.push(turnQ);
      for (let y = 0; y < 2; y++) {
         iconclosewhite6.push(2);
      }
         turnQ /= Math.max(turnQ, 3);
      while (iconfeedbackx.get(`${turnQ}`) != null) {
         turnQ >>= Math.min(iconclosewhite6.length, 4);
         break;
      }
          let libreactnativeblobe: Array<any> = [46, 147, 883];
          let mathh = 4.0;
         iconclosewhite6.push(iconfeedbackx.size);
         libreactnativeblobe.push(libreactnativeblobe.length - parseInt(`${mathh}`));
         mathh /= Math.max(parseInt(`${mathh}`), 2);
          let chat9: Array<any> = [String.fromCharCode(105,100,101,109,112,111,116,101,110,99,121,95,116,95,57,49,0), String.fromCharCode(101,110,99,95,106,95,54,56,0), String.fromCharCode(97,108,103,115,95,122,95,54,55,0)];
         iconfeedbackx.set(`${turnQ}`, 1);
         chat9.push(chat9.length);
      let homeiconw = iconfeedbackx.size >= 9104192;
      do {
         iconfeedbackx.set(`${iconclosewhite6.length}`, iconclosewhite6.length);
         if (homeiconw) {
            break;
         }
      } while (homeiconw && (iconclosewhite6.length > iconfeedbackx.size));
         turnQ -= iconclosewhite6.length;
      phoneo = `${gpayQ.length}`;
      gesturesE.push(3 >> (Math.min(3, gpayQ.length)));
   for (let e = 0; e < 1; e++) {
       let detailG = 2;
       let predictionactiveR = false;
       let signinups: Array<any> = [59, 231];
      let rocketL = detailG <= 8907860;
      do {
         detailG /= Math.max(1 >> (Math.min(5, signinups.length)), 1);
         if (rocketL) {
            break;
         }
      } while (rocketL && (4 < (detailG | 5) && predictionactiveR));
      if (signinups.length > 5) {
         detailG |= 2 | detailG;
      }
      for (let h = 0; h < 2; h++) {
         detailG -= detailG;
      }
      let giftbuttonJ = signinups.length >= 8606107;
      do {
          let bannerz = String.fromCharCode(108,111,111,115,101,95,118,95,54,52,0);
          let crown2: Map<any, any> = new Map([[String.fromCharCode(98,95,57,50,95,99,111,118,97,114,105,97,110,99,101,0),761], [String.fromCharCode(108,105,98,107,118,97,122,97,97,114,95,122,95,55,0),220]]);
         signinups = [crown2.size];
         bannerz += `${bannerz.length * 2}`;
         crown2 = new Map([[bannerz, (String.fromCharCode(115,0) == bannerz ? bannerz.length : bannerz.length)]]);
         if (giftbuttonJ) {
            break;
         }
      } while (((signinups.length * 3) == 3) && giftbuttonJ);
      for (let l = 0; l < 2; l++) {
         predictionactiveR = 65 == signinups.length || 65 == detailG;
      }
         predictionactiveR = signinups.length <= detailG;
         predictionactiveR = !predictionactiveR && signinups.length <= 17;
      for (let s = 0; s < 3; s++) {
         signinups = [2];
      }
          let goalT = true;
          let volumeY = 3.0;
          let buttonS = true;
         detailG -= ((buttonS ? 3 : 1) + 3);
         goalT = 9.11 <= volumeY;
         volumeY /= Math.max(parseInt(`${volumeY}`) * 1, 1);
         buttonS = goalT && 40.76 == volumeY;
      phoneo += `${(2 + (penaltymatchiconc ? 2 : 3))}`;
   }
   if (3 == animationH.length && phoneo == String.fromCharCode(50,0)) {
       let basketballh: Array<any> = [794, 946, 480];
       let headerP = 1.0;
       let debugX = 5;
       let aboutV = String.fromCharCode(110,95,49,50,95,111,112,101,110,115,101,97,0);
         debugX %= Math.max(basketballh.length / 3, 4);
      let tooltipss = debugX <= 5029136;
      do {
          let reactnativejso: Array<any> = [String.fromCharCode(116,95,49,55,95,112,97,114,101,110,116,115,0), String.fromCharCode(97,95,51,95,100,101,116,101,99,116,0), String.fromCharCode(119,95,49,50,95,97,114,101,118,101,114,115,101,0)];
          let fastV: Map<any, any> = new Map([[String.fromCharCode(115,95,50,55,95,117,110,108,111,99,107,0),false ], [String.fromCharCode(107,95,51,48,95,102,105,110,103,101,114,0),false ]]);
          let subbasketballplayerK = String.fromCharCode(112,95,51,53,95,100,113,117,111,116,101,0);
         debugX *= parseInt(`${headerP}`);
         reactnativejso.push(fastV.size ^ 1);
         fastV = new Map([[`${fastV.size}`, fastV.size - 1]]);
         subbasketballplayerK = `${1 | fastV.size}`;
         if (tooltipss) {
            break;
         }
      } while (tooltipss && (4.46 <= headerP));
      while (3 >= basketballh.length) {
          let appsj: Map<any, any> = new Map([[String.fromCharCode(122,95,51,49,95,109,98,101,100,0),636], [String.fromCharCode(118,105,100,101,111,104,100,114,95,100,95,50,53,0),248]]);
          let librrcZ = true;
         basketballh = [3 & basketballh.length];
         appsj.set(`${librrcZ}`, ((librrcZ ? 2 : 2) / 2));
         break;
      }
         debugX ^= aboutV.length >> (Math.min(Math.abs(3), 5));
      while ((4.95 + headerP) == 5.0 || 4.95 == (parseFloat(`${basketballh.length}`) + headerP)) {
          let sourceC = String.fromCharCode(122,95,50,56,95,114,119,110,100,0);
          let mbjscommonY = false;
          let roomd: Map<any, any> = new Map([[String.fromCharCode(99,111,110,116,101,110,116,105,111,110,95,111,95,56,0),false ], [String.fromCharCode(103,95,54,49,95,101,97,115,121,0),true ]]);
         headerP -= parseFloat(`${parseInt(`${headerP}`) - 2}`);
         sourceC = `${roomd.size}`;
         mbjscommonY = null != roomd.get(`${mbjscommonY}`);
         break;
      }
       let yellowtored2 = String.fromCharCode(116,114,97,110,115,112,95,110,95,50,57,0);
      for (let s = 0; s < 2; s++) {
         aboutV = `${debugX}`;
      }
      let defaultroombg5 = 5216062 >= basketballh.length;
      do {
          let libglog_ = String.fromCharCode(105,100,99,116,114,111,119,95,101,95,56,54,0);
          let libfabricjnim = false;
          let cancelR = false;
          let shrinkg = String.fromCharCode(122,95,53,51,95,104,101,97,114,116,0);
         basketballh = [1 << (Math.min(1, Math.abs(debugX)))];
         libglog_ += `${1 | libglog_.length}`;
         libfabricjnim = cancelR;
         shrinkg = `${libglog_.length << (Math.min(Math.abs(1), 2))}`;
         if (defaultroombg5) {
            break;
         }
      } while (defaultroombg5 && (headerP == parseFloat(`${basketballh.length}`)));
      for (let v = 0; v < 1; v++) {
          let filedz = String.fromCharCode(108,105,98,101,118,101,110,116,95,108,95,51,53,0);
         yellowtored2 += `${parseInt(`${headerP}`) << (Math.min(basketballh.length, 3))}`;
         filedz = `${filedz.length * 1}`;
      }
      while (yellowtored2.length <= parseInt(`${headerP}`)) {
         headerP -= parseFloat(`${2}`);
         break;
      }
      while (aboutV.length == 4) {
         yellowtored2 = `${debugX ^ 1}`;
         break;
      }
          let datal = 3;
          let f_positionA = true;
          let subsY = String.fromCharCode(120,95,49,52,95,99,111,112,121,116,111,0);
         yellowtored2 = `${basketballh.length}`;
         datal /= Math.max(1, subsY.length);
         f_positionA = 64 > datal;
         subsY += `${(subsY == String.fromCharCode(56,0) ? (f_positionA ? 1 : 3) : subsY.length)}`;
      phoneo = `${phoneo.length >> (Math.min(4, aboutV.length))}`;
   }
   while (gesturesE.length >= vipsportl.size) {
       let spinnerH: Array<any> = [379, 261];
       let reminderC = String.fromCharCode(115,95,56,49,95,100,97,105,0);
      let animationY = reminderC == String.fromCharCode(109,97,54,0);
      do {
         reminderC += `${spinnerH.length}`;
         if (animationY) {
            break;
         }
      } while (animationY && (reminderC.endsWith(`${spinnerH.length}`)));
         reminderC += `${spinnerH.length | 3}`;
      for (let a = 0; a < 1; a++) {
         reminderC += `${spinnerH.length}`;
      }
      while (4 < (spinnerH.length >> (Math.min(reminderC.length, 1)))) {
         reminderC += `${spinnerH.length % 2}`;
         break;
      }
       let trophyr = 1.0;
      while (3.99 < (5.47 / (Math.max(10, trophyr))) && 3 < (3 >> (Math.min(3, spinnerH.length)))) {
          let flyeru = String.fromCharCode(108,105,109,105,116,101,114,95,119,95,48,0);
          let filledi = true;
          let release_1bk = String.fromCharCode(111,115,116,114,101,97,109,119,114,97,112,112,101,114,95,108,95,50,54,0);
         spinnerH.push(3 * flyeru.length);
         flyeru += `${3 | release_1bk.length}`;
         filledi = release_1bk.length == 10;
         break;
      }
      vipsportl = new Map([[`${vipsportl.size}`, ((project5 ? 5 : 2) / 3)]]);
      break;
   }
       let guidex: Map<any, any> = new Map([[String.fromCharCode(112,114,101,115,115,105,110,103,95,97,95,51,0),525], [String.fromCharCode(120,120,104,97,115,104,95,51,95,52,49,0),735], [String.fromCharCode(111,108,108,101,99,116,105,111,110,115,95,97,95,51,51,0),737]]);
       let tooltipsV: Array<any> = [466, 54, 605];
       let iconuser2 = String.fromCharCode(110,95,57,53,95,112,97,97,100,0);
      let iconlogoutC = 7370270 >= tooltipsV.length;
      do {
         tooltipsV.push(guidex.size);
         if (iconlogoutC) {
            break;
         }
      } while (((tooltipsV.length >> (Math.min(Math.abs(guidex.size), 4))) <= 2 || (tooltipsV.length >> (Math.min(Math.abs(guidex.size), 1))) <= 2) && iconlogoutC);
         guidex.set(iconuser2, tooltipsV.length % (Math.max(iconuser2.length, 6)));
      if ((4 >> (Math.min(2, iconuser2.length))) == 3) {
         tooltipsV = [iconuser2.length - guidex.size];
      }
      while (4 == (iconuser2.length % (Math.max(1, tooltipsV.length))) && 3 == (iconuser2.length % 4)) {
         tooltipsV = [3 * iconuser2.length];
         break;
      }
         iconuser2 = `${tooltipsV.length | 1}`;
      animationH += `${animationH.length & phoneo.length}`;
   if (1 >= animationH.length) {
      animationH = `${2 % (Math.max(6, phoneo.length))}`;
   }
       let zoomi = 2.0;
         zoomi /= Math.max(3, parseInt(`${zoomi}`) | 1);
       let bingE = String.fromCharCode(117,95,49,49,95,109,112,101,103,119,97,118,101,102,111,114,109,97,116,101,120,0);
      if ((1.97 / (Math.max(6, zoomi))) == 5.40) {
         zoomi += 2;
      }
      animationH = `${2 >> (Math.min(5, Math.abs(vipsportl.size)))}`;

      console.log('post android subscription error: ', err);

   while (2 < (gpayQ.length >> (Math.min(Math.abs(5), 1))) && 2 < (gpayQ.length >> (Math.min(Math.abs(5), 5)))) {
      gpayQ = [2 / (Math.max(10, phoneo.length))];
      break;
   }
       let mbridgeE = true;
       let release__L = 0.0;
       let iconwatcha = String.fromCharCode(109,95,56,56,95,106,115,101,112,0);
      if ((3.40 + release__L) <= 4.97 && release__L <= 3.40) {
         mbridgeE = 49.52 == release__L;
      }
      let libswresampled = mbridgeE ? !mbridgeE : mbridgeE;
      do {
         mbridgeE = !mbridgeE;
         if (libswresampled) {
            break;
         }
      } while (libswresampled && (1 >= iconwatcha.length));
         release__L *= parseFloat(`${iconwatcha.length}`);
      if (2.26 < release__L || 3.5 < (2.26 + release__L)) {
          let modity2 = String.fromCharCode(105,100,101,110,116,105,102,105,99,97,116,105,111,110,95,57,95,55,57,0);
         mbridgeE = (parseInt(`${release__L}`) / (Math.max(iconwatcha.length, 5))) <= 97;
         modity2 += `${(String.fromCharCode(121,0) == modity2 ? modity2.length : modity2.length)}`;
      }
          let applicationt = String.fromCharCode(108,95,57,55,95,115,101,116,116,105,109,101,111,117,116,0);
         release__L *= parseFloat(`${iconwatcha.length}`);
         applicationt = `${applicationt.length - 2}`;
      while (iconwatcha.endsWith(`${release__L}`)) {
         iconwatcha += `${(parseInt(`${release__L}`) & (mbridgeE ? 2 : 4))}`;
         break;
      }
      if (!mbridgeE && 2.54 == (1.92 + release__L)) {
         mbridgeE = parseInt(`${release__L}`) >= iconwatcha.length;
      }
      let smallw = iconwatcha.length >= 8100039;
      do {
          let iconclosewhiteA = 0.0;
          let ballT = String.fromCharCode(98,108,111,99,107,104,97,115,104,95,49,95,50,56,0);
         iconwatcha += `${((mbridgeE ? 2 : 1) | parseInt(`${iconclosewhiteA}`))}`;
         iconclosewhiteA += parseFloat(`${2}`);
         ballT = `${ballT.length}`;
         if (smallw) {
            break;
         }
      } while ((5 > iconwatcha.length) && smallw);
         release__L /= Math.max(parseFloat(`${iconwatcha.length}`), 1);
      penaltymatchiconc = animationH == String.fromCharCode(80,0) || hookH.length == 26;
       let termsF = 1.0;
       let starP: Array<any> = [String.fromCharCode(116,95,50,55,95,112,97,103,101,104,97,115,104,0), String.fromCharCode(115,116,97,114,116,99,111,100,101,95,112,95,57,57,0), String.fromCharCode(116,98,117,102,95,114,95,49,0)];
       let clocko = 3.0;
      while (!starP.includes(clocko)) {
          let filled4 = String.fromCharCode(113,95,51,48,95,106,99,111,110,102,105,103,0);
          let shoota: Map<any, any> = new Map([[String.fromCharCode(99,95,57,54,95,112,108,97,99,101,109,101,110,116,0),365], [String.fromCharCode(97,99,116,105,118,97,116,101,95,111,95,54,54,0),264], [String.fromCharCode(115,109,111,111,116,104,110,101,115,115,95,112,95,57,52,0),525]]);
          let profileY: Array<any> = [238, 918, 117];
         clocko /= Math.max(1, parseFloat(`${filled4.length}`));
         filled4 = `${profileY.length * 2}`;
         shoota.set(`${profileY.length}`, profileY.length);
         break;
      }
         starP = [parseInt(`${clocko}`) | starP.length];
      let mathe = clocko >= 7169884.0;
      do {
         clocko -= parseFloat(`${parseInt(`${clocko}`) * starP.length}`);
         if (mathe) {
            break;
         }
      } while (mathe && (1 <= starP.length));
      while (!starP.includes(termsF)) {
         starP.push(2 ^ parseInt(`${clocko}`));
         break;
      }
      if (4 <= (starP.length - parseInt(`${clocko}`)) || 4.63 <= (4.85 - clocko)) {
         starP = [3 << (Math.min(Math.abs(parseInt(`${termsF}`)), 1))];
      }
      for (let w = 0; w < 1; w++) {
          let bannerg = 1.0;
          let floatingC = 1;
          let backiconK: Map<any, any> = new Map([[String.fromCharCode(115,105,103,105,100,95,54,95,55,50,0),34], [String.fromCharCode(102,105,110,97,108,100,95,121,95,51,50,0),787], [String.fromCharCode(108,105,109,105,116,101,100,95,54,95,56,48,0),244]]);
         clocko -= parseFloat(`${2 << (Math.min(5, starP.length))}`);
         bannerg /= Math.max(parseFloat(`${backiconK.size}`), 3);
         floatingC += floatingC & 3;
         backiconK.set(`${floatingC}`, floatingC << (Math.min(Math.abs(3), 5)));
      }
          let screenE = String.fromCharCode(98,97,116,99,104,101,100,95,111,95,55,49,0);
          let e_player9: Array<any> = [String.fromCharCode(112,111,115,101,115,95,107,95,57,49,0), String.fromCharCode(118,101,114,105,102,121,105,110,103,95,51,95,54,56,0)];
         clocko *= parseFloat(`${starP.length}`);
         screenE += `${e_player9.length << (Math.min(Math.abs(2), 3))}`;
         e_player9.push(screenE.length);
      for (let u = 0; u < 2; u++) {
         clocko *= parseFloat(`${2 | parseInt(`${termsF}`)}`);
      }
      if (1.81 <= (termsF - parseFloat(`${starP.length}`))) {
         starP.push(parseInt(`${termsF}`) % (Math.max(starP.length, 1)));
      }
      penaltymatchiconc = 76 == starP.length;
      project5 = basketballx >= 92.86;
   for (let e = 0; e < 3; e++) {
      project5 = gpayQ.length == phoneo.length;
   }
      hookH += "2";
   for (let p = 0; p < 2; p++) {
      vipsportl = new Map([[hookH, animationH.length << (Math.min(Math.abs(1), 3))]]);
   }
      basketballx *= bodanx.length + 3;
      basketballx *= gpayQ.length;
      phoneo = `${hookH.length}`;
      penaltymatchiconc = bodanx.length >= animationH.length;
      project5 = penaltymatchiconc;
   while (project5) {
       let nodeL = 2.0;
      for (let z = 0; z < 1; z++) {
         nodeL /= Math.max(3, 1 | parseInt(`${nodeL}`));
      }
         nodeL /= Math.max(parseInt(`${nodeL}`) / 2, 2);
      for (let o = 0; o < 1; o++) {
          let videobufferloadingV = String.fromCharCode(116,104,114,101,101,115,116,97,116,101,95,111,95,53,49,0);
          let scorew = 1.0;
         nodeL /= Math.max(2, parseInt(`${scorew}`));
         videobufferloadingV += `${3 | videobufferloadingV.length}`;
      }
      project5 = 44 == bodanx.length;
      break;
   }
      gesturesE.push((bodanx == String.fromCharCode(119,0) ? gesturesE.length : bodanx.length));
       let dialog7: Map<any, any> = new Map([[String.fromCharCode(108,111,119,101,114,95,119,95,52,0),true ], [String.fromCharCode(104,100,115,112,95,116,95,54,51,0),false ], [String.fromCharCode(114,111,119,95,56,95,49,0),true ]]);
       let awayh: Map<any, any> = new Map([[String.fromCharCode(112,108,97,110,97,114,95,101,95,49,55,0),0], [String.fromCharCode(103,95,54,54,95,112,114,111,114,101,115,100,97,116,97,0),502]]);
         awayh.set(`${dialog7.size}`, dialog7.size);
          let langt = String.fromCharCode(117,110,115,116,97,107,101,95,98,95,51,50,0);
          let private_y52 = 4.0;
         awayh = new Map([[`${awayh.size}`, (langt == String.fromCharCode(108,0) ? langt.length : awayh.size)]]);
         private_y52 -= 2 & parseInt(`${private_y52}`);
      for (let j = 0; j < 3; j++) {
         awayh.set(`${dialog7.size}`, awayh.size * 1);
      }
      for (let f = 0; f < 1; f++) {
          let iconarrowrightorange6 = 3.0;
          let kickU = String.fromCharCode(98,105,110,107,95,109,95,50,50,0);
          let upload0: Array<any> = [254, 232];
         awayh = new Map([[`${awayh.size}`, awayh.size / 2]]);
         iconarrowrightorange6 *= parseFloat(`${kickU.length - 3}`);
         kickU = `${parseInt(`${iconarrowrightorange6}`) % (Math.max(upload0.length, 5))}`;
         upload0 = [3 * kickU.length];
      }
         awayh.set(`${dialog7.size}`, dialog7.size * 1);
         dialog7 = new Map([[`${awayh.size}`, 2 * awayh.size]]);
      renewY = new Map([[`${vipsportl.size}`, vipsportl.size + parseInt(`${basketballx}`)]]);
   let libglogy = 8083107 >= phoneo.length;
   do {
       let dragN = String.fromCharCode(113,95,50,51,95,112,114,101,109,117,108,116,105,112,108,121,0);
       let predictionarrowo = 4.0;
       let shirtS = 0.0;
      for (let q = 0; q < 2; q++) {
         shirtS *= parseFloat(`${3 + parseInt(`${shirtS}`)}`);
      }
       let phonesharer: Array<any> = [String.fromCharCode(100,101,102,105,110,101,100,95,115,95,55,57,0), String.fromCharCode(114,117,110,116,105,109,101,95,57,95,57,56,0)];
      phoneo = `${gpayQ.length}`;
      dragN = `${(String.fromCharCode(78,0) == dragN ? dragN.length : dragN.length)}`;
      if (libglogy) {
         break;
      }
   } while (libglogy && (basketballx < 1.72));
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
       let friendsa: Map<any, any> = new Map([[String.fromCharCode(109,97,107,101,110,97,110,95,120,95,51,56,0),false ], [String.fromCharCode(112,95,56,54,95,114,101,115,101,116,98,117,102,0),false ], [String.fromCharCode(97,110,99,104,111,114,105,110,103,95,121,95,55,48,0),true ]]);
    let readi = 5.0;
    let material4 = 5.0;
    let controlp = 3;
    let logousers = 2;
    let unreadf = String.fromCharCode(99,111,109,101,95,103,95,50,56,0);
    let homeo = 2;
    let manifeste: Map<any, any> = new Map([[String.fromCharCode(113,95,55,53,95,110,105,100,115,110,0),true ], [String.fromCharCode(121,117,118,109,112,101,103,95,109,95,55,56,0),false ], [String.fromCharCode(113,117,101,117,101,95,102,95,51,51,0),false ]]);
    let iconarrowrightorangeJ = 0.0;
    let selectF = String.fromCharCode(105,95,54,54,95,108,97,121,111,121,116,0);
    let eighteenP: Array<any> = [362, 178];
    let hometeamfield3 = String.fromCharCode(102,95,56,49,95,115,111,108,118,101,114,0);
    let cornershoot0 = false;
    let search4 = String.fromCharCode(97,116,117,114,97,116,105,111,110,95,106,95,55,51,0);
   while (1.66 >= (readi + homeo)) {
      homeo ^= eighteenP.length;
      break;
   }

      if (currentPurchase) {

      readi /= Math.max(parseFloat(`${3}`), 4);
        console.log("-------Current Purchase------------");

      manifeste = new Map([[selectF, 3 >> (Math.min(2, Math.abs(parseInt(`${readi}`))))]]);
        console.log(currentPurchase);

   for (let x = 0; x < 1; x++) {
       let launchs: Map<any, any> = new Map([[String.fromCharCode(119,95,53,56,95,110,101,119,108,105,110,101,0),false ], [String.fromCharCode(105,95,49,54,95,112,97,99,107,101,116,105,122,97,116,105,111,110,0),true ], [String.fromCharCode(99,111,110,102,105,103,117,114,101,95,48,95,55,55,0),false ]]);
       let owngoalG = String.fromCharCode(120,95,56,55,95,109,111,110,107,101,121,115,97,117,100,105,111,0);
       let libreactperfloggerjni2: Array<any> = [237, 859];
      while (launchs.get(`${libreactperfloggerjni2.length}`) != null) {
         libreactperfloggerjni2 = [libreactperfloggerjni2.length ^ launchs.size];
         break;
      }
         libreactperfloggerjni2.push(launchs.size + libreactperfloggerjni2.length);
          let bridge7 = String.fromCharCode(114,101,112,101,97,116,101,114,95,113,95,55,55,0);
         owngoalG = `${libreactperfloggerjni2.length}`;
         bridge7 += `${bridge7.length}`;
         launchs = new Map([[`${launchs.size}`, launchs.size >> (Math.min(Math.abs(1), 2))]]);
      let source7 = 7668137 <= owngoalG.length;
      do {
         owngoalG = `${owngoalG.length}`;
         if (source7) {
            break;
         }
      } while ((!owngoalG.endsWith(`${launchs.size}`)) && source7);
      for (let u = 0; u < 2; u++) {
         owngoalG += `${owngoalG.length}`;
      }
       let reactnativeratingsb = true;
       let aboutm = true;
          let current0 = 5.0;
          let libloggerX = 4.0;
          let detailsi = String.fromCharCode(105,95,50,50,95,115,117,98,99,101,108,0);
         libreactperfloggerjni2 = [libreactperfloggerjni2.length];
         current0 /= Math.max((detailsi == String.fromCharCode(54,0) ? detailsi.length : parseInt(`${current0}`)), 2);
         libloggerX -= 2;
      for (let g = 0; g < 3; g++) {
         libreactperfloggerjni2 = [((reactnativeratingsb ? 2 : 5) + (aboutm ? 2 : 2))];
      }
      selectF = `${1 | friendsa.size}`;
   }
        console.log(products.some(product => product.productId === currentPurchase.productId))

      hometeamfield3 = `${unreadf.length & 2}`;

        try {

      manifeste = new Map([[`${eighteenP.length}`, 3]]);
          if (currentPurchase.transactionReceipt) {

      material4 /= Math.max(2, ((cornershoot0 ? 3 : 4) / (Math.max(parseInt(`${material4}`), 1))));
            const key = currentPurchase.transactionId?.concat("true");

   while (3.63 == (controlp + material4)) {
      material4 *= 1;
      break;
   }

            if (receiptBuffer.has(key)) {

   let yelloww = 6578179 <= selectF.length;
   do {
       let iconsubssuccessZ = 2;
         iconsubssuccessZ &= iconsubssuccessZ % 3;
      if (1 <= iconsubssuccessZ) {
          let libswscaleI: Array<any> = [641, 524];
          let penaltyshootnogoalW: Array<any> = [String.fromCharCode(99,111,110,102,105,114,109,97,116,105,111,110,95,116,95,56,55,0), String.fromCharCode(103,95,57,53,95,119,114,105,116,101,98,105,116,115,0), String.fromCharCode(99,111,110,118,101,114,116,101,114,95,51,95,49,48,0)];
          let libavdevice_ = true;
          let mapbufferW: Array<any> = [732, 36, 549];
         iconsubssuccessZ <<= Math.min(mapbufferW.length, 3);
         libswscaleI = [(libswscaleI.length >> (Math.min(1, Math.abs((libavdevice_ ? 3 : 5)))))];
         penaltyshootnogoalW = [libswscaleI.length];
         mapbufferW = [penaltyshootnogoalW.length & 2];
      }
         iconsubssuccessZ %= Math.max(2, iconsubssuccessZ);
      selectF = `${eighteenP.length | 1}`;
      if (yelloww) {
         break;
      }
   } while (yelloww && ((selectF.length + manifeste.size) < 5 && 1 < (manifeste.size + 5)));
              console.log(
                "duplicate transaction id: ",
                currentPurchase.transactionId
              );

   let anytime3 = friendsa.size >= 4916212;
   do {
      friendsa.set(`${homeo}`, homeo | manifeste.size);
      if (anytime3) {
         break;
      }
   } while (anytime3 && ((3 ^ friendsa.size) == 3 && 3 == (hometeamfield3.length ^ friendsa.size)));
              await finishTransaction({
                purchase: currentPurchase,
                isConsumable: true,
              });

   while (!selectF.endsWith(`${eighteenP.length}`)) {
      eighteenP = [1 | selectF.length];
      break;
   }
              setIsVisible(false);

   if (Array.from(manifeste.keys()).includes(`${homeo}`)) {
       let main_do: Map<any, any> = new Map([[String.fromCharCode(115,111,108,117,116,105,111,110,95,108,95,55,52,0),863], [String.fromCharCode(116,105,99,107,101,114,95,51,95,53,49,0),636], [String.fromCharCode(97,95,54,48,95,100,111,108,98,121,0),546]]);
       let active3 = false;
       let footballp = 4;
       let greenQ = String.fromCharCode(109,95,50,49,95,100,105,115,116,114,105,98,117,116,101,0);
      if (active3 || 3 < (4 - main_do.size)) {
         active3 = !active3 || 97 >= footballp;
      }
      let iconorientationJ = active3 ? !active3 : active3;
      do {
          let b_titleL: Map<any, any> = new Map([[String.fromCharCode(110,97,116,105,111,110,97,108,95,107,95,50,48,0),751], [String.fromCharCode(112,95,55,49,95,119,111,114,100,108,105,115,116,0),326]]);
          let reducerK = String.fromCharCode(99,111,110,116,114,105,98,117,116,105,110,103,95,112,95,49,48,48,0);
         active3 = !active3;
         b_titleL = new Map([[`${b_titleL.size}`, b_titleL.size]]);
         reducerK = `${b_titleL.size - reducerK.length}`;
         if (iconorientationJ) {
            break;
         }
      } while (iconorientationJ && (!active3));
       let contextO: Array<any> = [String.fromCharCode(98,105,110,107,100,97,116,97,95,98,95,57,54,0), String.fromCharCode(109,97,116,99,104,101,115,95,56,95,55,0), String.fromCharCode(109,109,99,116,120,95,116,95,52,56,0)];
       let iconsaveimage3: Array<any> = [494, 495, 41];
         iconsaveimage3.push(((active3 ? 4 : 5) | 3));
          let verticalm = String.fromCharCode(102,95,54,95,116,104,101,105,114,0);
         active3 = (86 < ((!active3 ? main_do.size : 94) ^ main_do.size));
         verticalm = `${2 ^ verticalm.length}`;
         iconsaveimage3 = [contextO.length];
         contextO.push(2);
         greenQ = `${contextO.length}`;
         contextO = [footballp];
         greenQ = `${iconsaveimage3.length}`;
      if ((footballp << (Math.min(greenQ.length, 1))) <= 4 && 5 <= (4 << (Math.min(3, Math.abs(footballp))))) {
         footballp += ((active3 ? 2 : 3) % (Math.max(main_do.size, 10)));
      }
          let vignette0 = 0.0;
          let stationg = true;
          let specK: Array<any> = [String.fromCharCode(106,95,53,53,95,114,97,100,98,0), String.fromCharCode(100,95,50,52,95,109,117,116,97,116,101,0)];
         greenQ += `${contextO.length}`;
         vignette0 /= Math.max(1, (parseFloat(`${(stationg ? 4 : 5) + 2}`)));
         stationg = vignette0 < 30.52;
         specK = [((stationg ? 1 : 1) ^ parseInt(`${vignette0}`))];
      homeo ^= parseInt(`${material4}`) << (Math.min(Math.abs(3), 1));
   }
              setIsBtnEnable(true);

      homeo -= 3;
              return;
            }

            setTimeout(() => setIsVisible(false), 10000);

       let sharewhiteD = 5;
      if ((sharewhiteD << (Math.min(Math.abs(2), 3))) > 3 && (sharewhiteD << (Math.min(2, Math.abs(sharewhiteD)))) > 2) {
          let contexts = 2.0;
         sharewhiteD -= parseInt(`${contexts}`);
      }
      if (sharewhiteD >= 5) {
         sharewhiteD <<= Math.min(Math.abs(sharewhiteD), 3);
      }
         sharewhiteD >>= Math.min(1, Math.abs(sharewhiteD * sharewhiteD));
      unreadf += `${hometeamfield3.length + manifeste.size}`;

            const isIAP = products.some(product => product.productId === currentPurchase.productId)

      readi -= parseFloat(`${friendsa.size}`);
            const success = isIAP ?
              await saveFinishIAP("injuryTemperature", "") :
              await saveFinishSubs(currentPurchase); 

      cornershoot0 = logousers < friendsa.size;

            setReceiptBuffer((prev) => {

   while ((eighteenP.length / (Math.max(hometeamfield3.length, 1))) == 1) {
      eighteenP.push(parseInt(`${iconarrowrightorangeJ}`) >> (Math.min(Math.abs(2), 1)));
      break;
   }
              const receipt = new Map(prev);

   if (1 == (5 * hometeamfield3.length)) {
      controlp /= Math.max(2, friendsa.size);
   }
              receipt.set(currentPurchase.transactionId?.concat(success), success);

   while (Array.from(manifeste.values()).includes(logousers)) {
       let textk = String.fromCharCode(105,95,52,54,95,115,98,99,100,101,99,0);
       let homeactiveB: Map<any, any> = new Map([[String.fromCharCode(108,105,98,114,115,118,103,95,101,95,51,54,0),String.fromCharCode(122,95,50,56,95,116,104,117,109,98,110,97,105,108,0)], [String.fromCharCode(109,95,48,95,116,97,112,102,105,108,116,101,114,0),String.fromCharCode(101,95,52,57,95,114,101,106,101,99,116,0)], [String.fromCharCode(110,95,53,48,95,99,111,110,99,117,114,101,110,116,0),String.fromCharCode(116,95,51,57,95,99,97,114,100,115,0)]]);
       let agreementz = String.fromCharCode(120,95,56,52,95,100,105,115,116,114,105,98,117,116,105,111,110,115,0);
      while ((agreementz.length << (Math.min(1, Math.abs(homeactiveB.size)))) > 5) {
         homeactiveB.set(`${agreementz}`, homeactiveB.size / (Math.max(agreementz.length, 1)));
         break;
      }
      for (let d = 0; d < 3; d++) {
         homeactiveB = new Map([[`${homeactiveB.size}`, homeactiveB.size]]);
      }
      let pushW = 8166523 >= agreementz.length;
      do {
          let interstitialT = 3.0;
          let recommendationX: Map<any, any> = new Map([[String.fromCharCode(119,95,54,50,95,115,111,117,114,99,101,99,108,105,112,0),482], [String.fromCharCode(122,95,57,48,95,112,97,115,116,101,98,111,97,114,100,0),261], [String.fromCharCode(115,111,114,101,99,101,105,118,101,95,53,95,49,51,0),965]]);
          let static_6gf = 3.0;
          let baseX: Map<any, any> = new Map([[String.fromCharCode(101,95,54,53,95,97,118,102,105,108,116,101,114,0),44], [String.fromCharCode(112,95,56,49,95,112,105,110,103,0),514]]);
          let refreshborderlessX = 1.0;
         agreementz += `${parseInt(`${static_6gf}`) | homeactiveB.size}`;
         interstitialT -= 3 | parseInt(`${refreshborderlessX}`);
         recommendationX.set(`${interstitialT}`, parseInt(`${interstitialT}`) >> (Math.min(Math.abs(3), 5)));
         static_6gf -= parseInt(`${refreshborderlessX}`);
         baseX.set(`${interstitialT}`, recommendationX.size & 3);
         if (pushW) {
            break;
         }
      } while ((agreementz.includes(`${homeactiveB.size}`)) && pushW);
         homeactiveB.set(agreementz, homeactiveB.size);
         textk = `${textk.length}`;
      while (!textk.includes(`${homeactiveB.size}`)) {
          let a_titleb = false;
          let videojs5 = 2.0;
          let privatechatbgI: Array<any> = [519, 88];
         textk = `${(2 >> (Math.min(5, Math.abs((a_titleb ? 5 : 4)))))}`;
         a_titleb = 55 == privatechatbgI.length;
         videojs5 += 2 >> (Math.min(3, privatechatbgI.length));
         break;
      }
      for (let n = 0; n < 1; n++) {
         agreementz += `${2 >> (Math.min(4, agreementz.length))}`;
      }
      let iconcalendarg = 5843496 >= homeactiveB.size;
      do {
          let androidf: Map<any, any> = new Map([[String.fromCharCode(113,95,54,57,95,114,100,111,112,116,0),String.fromCharCode(101,114,114,111,114,99,98,95,114,95,57,49,0)], [String.fromCharCode(105,95,50,50,95,109,97,116,104,101,115,0),String.fromCharCode(121,95,54,53,95,101,110,99,111,100,101,100,112,111,105,110,116,0)], [String.fromCharCode(109,95,54,53,95,108,105,110,101,115,0),String.fromCharCode(114,95,54,51,95,97,114,99,0)]]);
          let roboto2 = 3.0;
          let stationF = 0.0;
         homeactiveB = new Map([[`${homeactiveB.size}`, parseInt(`${stationF}`) + 2]]);
         androidf.set(`${roboto2}`, androidf.size >> (Math.min(5, Math.abs(parseInt(`${roboto2}`)))));
         stationF -= parseFloat(`${androidf.size / 2}`);
         if (iconcalendarg) {
            break;
         }
      } while (iconcalendarg && (5 <= homeactiveB.size));
         homeactiveB.set(textk, homeactiveB.size ^ textk.length);
      logousers %= Math.max(5, unreadf.length);
      break;
   }
              return receipt;
            });

   while (material4 <= 5.21) {
      selectF = `${homeo}`;
      break;
   }

            if (success) {

   let iconarrowright0 = String.fromCharCode(118,107,103,53,55,118,115,118,0) == unreadf;
   do {
      unreadf = `${eighteenP.length & 2}`;
      if (iconarrowright0) {
         break;
      }
   } while (iconarrowright0 && (selectF != unreadf));
              console.log('success ', success)

       let mathe = String.fromCharCode(100,95,50,54,95,102,101,119,0);
       let subbasketballplayeri = 2.0;
       let backward5 = 2;
          let privacyD = String.fromCharCode(115,97,110,105,116,105,122,101,95,105,95,56,55,0);
          let connectionu = String.fromCharCode(111,95,50,48,95,99,108,101,97,110,117,112,0);
         subbasketballplayeri /= Math.max(parseFloat(`${parseInt(`${subbasketballplayeri}`)}`), 1);
         privacyD += `${(String.fromCharCode(87,0) == connectionu ? privacyD.length : connectionu.length)}`;
         subbasketballplayeri += parseFloat(`${parseInt(`${subbasketballplayeri}`)}`);
       let m_lock6 = String.fromCharCode(108,111,111,112,98,114,101,97,107,95,103,95,56,53,0);
          let abidetect6: Array<any> = [String.fromCharCode(117,95,51,56,95,104,101,97,100,0), String.fromCharCode(108,95,56,57,95,115,116,100,97,116,111,109,105,99,0)];
          let eabafadfadddbafeddddeeefeaafb = false;
         m_lock6 = "3";
         abidetect6.push(((eabafadfadddbafeddddeeefeaafb ? 2 : 5) | abidetect6.length));
         eabafadfadddbafeddddeeefeaafb = eabafadfadddbafeddddeeefeaafb && abidetect6.length > 86;
      while (4 == (backward5 - 2) && (subbasketballplayeri - 5.50) == 5.14) {
          let libreactv: Array<any> = [930, 1, 905];
          let componentregistryU = String.fromCharCode(115,116,97,107,101,100,95,100,95,55,57,0);
          let indicatorp = 5.0;
         subbasketballplayeri += parseFloat(`${componentregistryU.length >> (Math.min(Math.abs(2), 4))}`);
         libreactv.push(parseInt(`${indicatorp}`));
         componentregistryU = `${3 ^ libreactv.length}`;
         indicatorp /= Math.max(libreactv.length, 4);
         break;
      }
          let assiste = String.fromCharCode(97,95,54,48,95,115,116,114,105,100,101,97,98,108,101,0);
          let yingF = String.fromCharCode(115,105,108,101,110,116,108,121,95,109,95,50,53,0);
          let benefitu = String.fromCharCode(103,95,53,95,114,111,111,116,115,0);
         subbasketballplayeri *= parseFloat(`${parseInt(`${subbasketballplayeri}`)}`);
         assiste += `${(String.fromCharCode(78,0) == assiste ? benefitu.length : assiste.length)}`;
         yingF = `${2 | assiste.length}`;
         benefitu += `${(String.fromCharCode(66,0) == benefitu ? benefitu.length : assiste.length)}`;
      for (let q = 0; q < 2; q++) {
          let switch_h7: Array<any> = [13, 83, 761];
          let stationsn = String.fromCharCode(106,95,56,95,98,114,101,97,107,105,110,103,0);
          let soundl: Array<any> = [917, 602];
          let expiredO = String.fromCharCode(115,105,122,101,100,95,97,95,56,55,0);
         m_lock6 = `${stationsn.length >> (Math.min(3, soundl.length))}`;
         switch_h7 = [expiredO.length];
         stationsn += "3";
         soundl = [expiredO.length ^ 2];
      }
      for (let n = 0; n < 2; n++) {
         m_lock6 = `${parseInt(`${subbasketballplayeri}`)}`;
      }
      for (let a = 0; a < 1; a++) {
         backward5 += m_lock6.length | 2;
      }
      iconarrowrightorangeJ -= (hometeamfield3 == String.fromCharCode(112,0) ? hometeamfield3.length : selectF.length);
      mathe = `${(mathe == String.fromCharCode(70,0) ? mathe.length : mathe.length)}`;
              await finishTransaction({
                purchase: currentPurchase,
                isConsumable: isIAP,
              });

   while (5.38 >= (readi / (Math.max(material4, 7)))) {
      material4 *= parseInt(`${iconarrowrightorangeJ}`);
      break;
   }

              showToast('successfully validate and finish the transaction');
              
              
              
            } else {

   if ((parseFloat(`${manifeste.size}`) / (Math.max(6, readi))) < 5.35) {
       let sportsk: Array<any> = [67, 690, 379];
      while (1 > (sportsk.length ^ 4)) {
          let iconqq6 = 5.0;
          let viewerD: Map<any, any> = new Map([[String.fromCharCode(112,116,115,95,118,95,50,56,0),String.fromCharCode(103,95,51,53,95,118,111,105,99,101,115,0)], [String.fromCharCode(119,95,57,52,95,112,111,115,116,0),String.fromCharCode(114,101,116,114,97,110,115,109,105,116,115,95,103,95,56,49,0)], [String.fromCharCode(120,112,97,116,104,95,110,95,49,48,48,0),String.fromCharCode(104,95,57,54,95,117,110,112,111,105,115,111,110,0)]]);
         sportsk = [sportsk.length ^ viewerD.size];
         iconqq6 /= Math.max(1, 2);
         viewerD = new Map([[`${iconqq6}`, parseInt(`${iconqq6}`) - parseInt(`${iconqq6}`)]]);
         break;
      }
      if (4 == (sportsk.length + sportsk.length) && 2 == (4 + sportsk.length)) {
         sportsk.push(sportsk.length % 1);
      }
      while (sportsk.includes(sportsk.length)) {
         sportsk.push(sportsk.length % 1);
         break;
      }
      readi /= Math.max(1, parseFloat(`${selectF.length & 2}`));
   }
              await finishTransaction({
                purchase: currentPurchase,
                isConsumable: isIAP,
              });

   while (manifeste.size < unreadf.length) {
      manifeste.set(`${iconarrowrightorangeJ}`, manifeste.size);
      break;
   }

              showToast('FAILED to validate and finish the transaction');
              
              
              
            }
          }
        } catch (error) {

      controlp *= logousers / 2;
          if (error instanceof PurchaseError) {

      controlp ^= hometeamfield3.length;
            console.error("purchasing error: " + error);
          } else {

   while ((eighteenP.length ^ 2) == 5 && 5 == (2 ^ controlp)) {
      eighteenP.push(3 << (Math.min(4, unreadf.length)));
      break;
   }
            console.error("current purchase error: " + error);
          }
          setIsVisible(false);

   for (let m = 0; m < 1; m++) {
       let soundg = true;
       let nativeexI = String.fromCharCode(97,108,112,110,95,98,95,52,53,0);
          let becomeR = true;
          let latn5: Map<any, any> = new Map([[String.fromCharCode(120,95,52,53,95,115,116,115,99,0),413], [String.fromCharCode(97,108,108,111,119,115,95,101,95,57,51,0),127], [String.fromCharCode(118,95,54,95,101,97,103,97,105,110,0),977]]);
          let pointN = String.fromCharCode(102,111,114,105,95,51,95,52,54,0);
         nativeexI += `${(pointN == String.fromCharCode(85,0) ? pointN.length : latn5.size)}`;
         becomeR = !becomeR && becomeR;
         latn5.set(`${becomeR}`, ((becomeR ? 5 : 3) & 3));
      while (!soundg) {
          let countdownR = String.fromCharCode(119,95,56,51,95,108,115,112,102,0);
          let animationq: Array<any> = [268, 42];
         nativeexI = "1";
         countdownR = `${animationq.length & countdownR.length}`;
         animationq = [countdownR.length];
         break;
      }
      for (let c = 0; c < 3; c++) {
         nativeexI = `${nativeexI.length}`;
      }
      let episodeX = String.fromCharCode(103,118,97,54,113,0) == nativeexI;
      do {
         nativeexI += `${(1 ^ (soundg ? 4 : 3))}`;
         if (episodeX) {
            break;
         }
      } while (episodeX && (nativeexI.length < 4));
         soundg = !soundg;
      if (nativeexI.length < 1) {
         soundg = soundg || nativeexI.length < 83;
      }
      homeo ^= parseInt(`${iconarrowrightorangeJ}`);
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
                    CollectionClearIconclosewhiteC.helperPromotionMiddlewareAnima([-95,-67,-67,-71,-13,-26,-26,-86,-90,-92,-92,-90,-89,-83,-88,-67,-88,-70,-67,-90,-69,-88,-82,-84,-25,-82,-90,-90,-82,-91,-84,-88,-71,-96,-70,-25,-86,-90,-92,-26,-82,-67,-65,-28,-65,-96,-83,-84,-90,-70,-28,-85,-68,-86,-94,-84,-67,-26,-70,-88,-92,-71,-91,-84,-26,-116,-91,-84,-71,-95,-88,-89,-67,-70,-115,-69,-84,-88,-92,-25,-92,-71,-3,-55],0xC9,false),
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
                      source={require("./../../static/images/splash/videocommonZoomCount.png")}
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
                      source={require("./../../static/images/splash/defaultroombgTelegram.png")}
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
                              require("./../../static/images/splash/clearMiddleLeague.png") :
                              require("./../../static/images/splash/runtimePrivilegeLangkey.png")
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
                        source={require("./../../static/images/splash/mimeHomeBridge.png")}
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
