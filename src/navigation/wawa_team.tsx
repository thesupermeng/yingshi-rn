

class ImageactionliveAwayteamfield {
    static predictionbannerAlbum = (contents: [number], key: number, hasEmoji: boolean) => {
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

import SplashCard from "./../../src/components/common/wawa_league";
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
import CarouselPagination from "../components/container/wawa_index_info";
import LinearGradient from "react-native-linear-gradient";
import FastImage from "../../src/components/common/wawa_iconarrowrightblack";
import Video from "react-native-video";
import { promoMembershipModel } from "@type/wawa_libfabricjni_issub";
import { wawaCountry } from "../api/wawa_predictionloss";
import { Purchase, PurchaseError, requestPurchase, requestSubscription, useIAP, withIAPContext } from "react-native-iap";
import { isPlay } from "react-native-iap/src/internal";
import SpinnerOverlay from "../components/modal/wawa_telegram_watch";
import { wawaIconsubssuccess } from "@redux/wawa_bgvipsport_spinner";
import { useAppSelector, useSelector } from "@hooks/wawa_root";
import { APP_NAME_CONST, IAP_TYPE, SUBSCRIPTION_TYPE } from "@utility/wawa_iconpointscore";
import { showToast } from "../Sports/utility/wawa_components_about";
import { wawaPhoneControls } from "@redux/reducers/wawa_umeng";

interface wawaAwayShow {
  splashList: any;
}

const iap_skus = ['yingshi_vip_1_month', 'yingshi_vip_12_months'];
const subs_skus = ['vip_1_month_subscription', 'vip_3_month_subscription', 'vip_12_month_subscription'];

export const EventSpash = ({ splashList }: wawaAwayShow) => {
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
  const userState = useSelector<wawaPhoneControls>('userReducer');

  const fetchData = async () => {
       let sound6 = 2;
    let whitebell6 = 4.0;
    let issubq: Array<any> = [863, 280, 477];
    let splash9 = 3.0;
    let whiteL = String.fromCharCode(111,95,55,52,95,117,112,108,111,97,100,105,110,103,0);
    let rulesg = 5;
    let whiteanimationlive9 = false;
    let defaultfootballbgW: Array<any> = [930, 432, 246];
   let umengD = 9875016 <= issubq.length;
   do {
      issubq.push(((whiteanimationlive9 ? 4 : 4) / (Math.max(10, rulesg))));
      if (umengD) {
         break;
      }
   } while (umengD && (1 >= (issubq.length ^ rulesg) || (1 ^ rulesg) >= 2));

    const data = await wawaCountry.getNativeList();

   if ((4 - rulesg) <= 3) {
      rulesg -= issubq.length;
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
            payment_type_icon: "liveendmodallogoWifirouter.png"
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
            payment_type_icon: "liveendmodallogoWifirouter.png"
          },
          productType: SUBSCRIPTION_TYPE,
        };
      });

   let sentryC = whitebell6 <= 8127416.0;
   do {
      whitebell6 -= whiteL.length ^ 3;
      if (sentryC) {
         break;
      }
   } while (sentryC && (sound6 <= whitebell6));

      setOneTimeProducts(oneTime);

   let iconcloseG = 9568607.0 <= whitebell6;
   do {
       let chatbotphotoL = 0.0;
       let backward8 = String.fromCharCode(98,95,54,49,95,115,101,110,100,97,108,108,0);
       let networkU = 4;
       let distu = String.fromCharCode(117,116,105,109,101,95,117,95,49,52,0);
      for (let f = 0; f < 2; f++) {
          let whitesmalltickI = 5.0;
         chatbotphotoL -= parseFloat(`${parseInt(`${whitesmalltickI}`)}`);
      }
      if (backward8.includes(`${chatbotphotoL}`)) {
          let vignettec = String.fromCharCode(115,101,103,109,101,110,116,115,95,52,95,53,48,0);
          let previewZ = String.fromCharCode(117,114,97,110,100,111,109,95,110,95,50,49,0);
          let strings8: Array<any> = [958, 175, 59];
          let nbatrophye = String.fromCharCode(108,95,49,95,121,109,105,110,112,117,116,0);
         backward8 += `${(String.fromCharCode(115,0) == distu ? backward8.length : distu.length)}`;
         vignettec += "3";
         previewZ += "2";
         strings8 = [nbatrophye.length * 3];
         nbatrophye += `${strings8.length % 3}`;
      }
          let whatsappx = true;
         distu += `${(networkU | (whatsappx ? 3 : 5))}`;
       let orangeclock9 = String.fromCharCode(105,95,49,53,95,110,117,108,108,115,0);
       let stationsf = String.fromCharCode(115,119,105,112,101,100,95,122,95,52,56,0);
       let orientationz = String.fromCharCode(115,105,103,104,95,106,95,49,51,0);
      if (distu == orangeclock9) {
          let owngoalv = String.fromCharCode(97,99,116,105,118,97,116,111,114,95,119,95,57,49,0);
          let grey1: Map<any, any> = new Map([[String.fromCharCode(109,111,118,101,95,114,95,49,51,0),143], [String.fromCharCode(97,99,107,110,111,119,108,101,100,103,101,109,101,110,116,95,98,95,57,53,0),830], [String.fromCharCode(105,110,102,111,114,109,97,116,105,111,110,95,115,95,50,53,0),967]]);
         orangeclock9 = `${parseInt(`${chatbotphotoL}`)}`;
         owngoalv += `${grey1.size}`;
         grey1 = new Map([[`${grey1.size}`, 3]]);
      }
      while (stationsf.endsWith(orangeclock9)) {
         stationsf += `${networkU}`;
         break;
      }
         stationsf = `${orangeclock9.length & 3}`;
         stationsf += `${(orientationz == String.fromCharCode(98,0) ? orientationz.length : networkU)}`;
      while (chatbotphotoL > 5.67) {
         backward8 = "1";
         break;
      }
      let iconsharefriendsN = networkU >= 5950886;
      do {
          let dragclosec: Array<any> = [854, 98];
          let frame_5lB = false;
          let arrowselectdownG = 1;
          let gifgoal_ = String.fromCharCode(107,95,50,95,115,112,101,101,120,0);
          let package_lke = 5.0;
         networkU *= 2;
         dragclosec.push(1);
         frame_5lB = !frame_5lB || 7 >= arrowselectdownG;
         arrowselectdownG >>= Math.min(1, Math.abs(parseInt(`${package_lke}`) % (Math.max(gifgoal_.length, 7))));
         gifgoal_ += "3";
         package_lke *= parseFloat(`${arrowselectdownG % (Math.max(parseInt(`${package_lke}`), 9))}`);
         if (iconsharefriendsN) {
            break;
         }
      } while ((!backward8.startsWith(`${networkU}`)) && iconsharefriendsN);
      let adultL = 7471289 <= orientationz.length;
      do {
         orientationz += "3";
         if (adultL) {
            break;
         }
      } while ((orangeclock9 == orientationz) && adultL);
      whitebell6 += ((whiteanimationlive9 ? 5 : 4) / (Math.max(8, issubq.length)));
      if (iconcloseG) {
         break;
      }
   } while ((2.28 > (whitebell6 - 1.0)) && iconcloseG);
      setSubcriptionProducts(subscription);

   for (let b = 0; b < 1; b++) {
      rulesg >>= Math.min(Math.abs(2), 2);
   }
      setIsFetching(false);
    }
  };

  const handleGetGoogleProduct = async () => {
       let iconlogoutY = String.fromCharCode(104,95,54,51,95,99,108,105,99,107,0);
    let clockW = String.fromCharCode(108,95,48,95,102,105,120,0);
    let a_centerg = 2.0;
    let currentn = 1;
    let mbnativeR: Map<any, any> = new Map([[String.fromCharCode(105,109,112,114,101,115,115,105,111,110,95,48,95,49,51,0),true ], [String.fromCharCode(97,117,116,104,111,114,95,99,95,52,55,0),false ]]);
    let progress2: Array<any> = [169, 930, 888];
    let bodann = 3.0;
    let predictionbuttonz = true;
    let scoreE = true;
    let pressure3 = String.fromCharCode(104,95,51,95,105,110,105,116,0);
    let constantsb = 4;
   if ((4 - clockW.length) > 5) {
      progress2 = [progress2.length ^ 1];
   }
      bodann /= Math.max(parseFloat(`${2 & parseInt(`${a_centerg}`)}`), 5);
   for (let v = 0; v < 2; v++) {
      iconlogoutY += `${parseInt(`${bodann}`) / (Math.max(7, iconlogoutY.length))}`;
   }
   let invitey = iconlogoutY == String.fromCharCode(108,52,115,56,49,48,103,107,0);
   do {
      iconlogoutY += "3";
      if (invitey) {
         break;
      }
   } while (invitey && (iconlogoutY.length >= 3));
   for (let d = 0; d < 2; d++) {
       let episodesw: Array<any> = [215, 802];
       let libhermes7 = true;
       let libreactU = String.fromCharCode(107,95,53,57,95,110,117,108,108,0);
      if (libhermes7) {
          let delegate_4x = 2.0;
          let more6 = 1.0;
          let iconpointscoreM = true;
         libreactU += `${(libreactU == String.fromCharCode(55,0) ? libreactU.length : parseInt(`${more6}`))}`;
         delegate_4x *= (parseInt(`${delegate_4x}`) | (iconpointscoreM ? 1 : 1));
         more6 *= parseFloat(`${1 >> (Math.min(Math.abs(parseInt(`${delegate_4x}`)), 4))}`);
         iconpointscoreM = !iconpointscoreM;
      }
      while (1 >= episodesw.length) {
          let inouttargetyellowB = 2.0;
          let predictionj: Map<any, any> = new Map([[String.fromCharCode(98,95,54,56,95,111,99,97,108,0),712], [String.fromCharCode(112,95,57,54,95,119,114,111,116,101,0),866], [String.fromCharCode(108,95,57,56,95,115,101,116,116,105,103,110,115,0),817]]);
          let fastw = 3;
         libhermes7 = libreactU.startsWith(`${fastw}`);
         inouttargetyellowB /= Math.max(1, parseInt(`${inouttargetyellowB}`) & predictionj.size);
         predictionj.set(`${inouttargetyellowB}`, parseInt(`${inouttargetyellowB}`) >> (Math.min(Math.abs(2), 4)));
         fastw <<= Math.min(Math.abs(3 ^ predictionj.size), 3);
         break;
      }
         libreactU = `${(String.fromCharCode(88,0) == libreactU ? libreactU.length : (libhermes7 ? 1 : 4))}`;
          let searchq = 5.0;
          let largebrightness9 = true;
         libhermes7 = 85 >= libreactU.length || 85 >= episodesw.length;
         searchq *= (parseFloat(`${(largebrightness9 ? 4 : 5) ^ parseInt(`${searchq}`)}`));
         largebrightness9 = 9.97 < searchq;
         libhermes7 = episodesw.includes(libhermes7);
         libreactU += `${(libreactU == String.fromCharCode(99,0) ? (libhermes7 ? 3 : 4) : libreactU.length)}`;
      while (3 >= libreactU.length) {
          let downarrowo = 5;
          let vipsportR = String.fromCharCode(103,97,105,110,99,95,52,95,51,50,0);
          let bannern = String.fromCharCode(116,95,52,56,95,109,105,110,109,97,120,0);
         libhermes7 = (downarrowo ^ libreactU.length) > 11;
         downarrowo += 2 << (Math.min(5, vipsportR.length));
         vipsportR += `${vipsportR.length / (Math.max(6, bannern.length))}`;
         bannern = `${bannern.length}`;
         break;
      }
      while (1 >= libreactU.length) {
         libreactU += `${episodesw.length ^ 3}`;
         break;
      }
      let basketballh = libhermes7 ? !libhermes7 : libhermes7;
      do {
         libhermes7 = !libreactU.startsWith(`${libhermes7}`);
         if (basketballh) {
            break;
         }
      } while ((libreactU.length == 3) && basketballh);
      mbnativeR.set(`${currentn}`, currentn);
   }

    try {
      await getProducts({ skus: iap_skus });
      await getSubscriptions({ skus: subs_skus });
    } catch (err) {

   for (let l = 0; l < 1; l++) {
      mbnativeR = new Map([[clockW, (1 << (Math.min(4, Math.abs((predictionbuttonz ? 5 : 2)))))]]);
   }
      a_centerg -= 2;
   if (bodann <= 1.62 || (1.62 - bodann) <= 5.11) {
      bodann *= (parseFloat(`${(predictionbuttonz ? 1 : 3) % (Math.max(iconlogoutY.length, 3))}`));
   }
   let positionfield4 = 8946456.0 >= a_centerg;
   do {
       let usernameL = String.fromCharCode(105,95,49,55,95,114,116,108,0);
      let imagenomoredataD = usernameL == String.fromCharCode(107,110,115,112,115,0);
      do {
         usernameL = `${2 + usernameL.length}`;
         if (imagenomoredataD) {
            break;
         }
      } while (imagenomoredataD && (usernameL.includes(usernameL)));
         usernameL = `${usernameL.length >> (Math.min(2, usernameL.length))}`;
         usernameL = "1";
      a_centerg -= 1;
      if (positionfield4) {
         break;
      }
   } while (positionfield4 && (4 > currentn));
   let smallorangemanC = 9208602 <= currentn;
   do {
      currentn /= Math.max(2, clockW.length);
      if (smallorangemanC) {
         break;
      }
   } while (((5.30 / (Math.max(6, a_centerg))) >= 2.81) && smallorangemanC);
      console.log('error when get product from google play: ', err);
    }
  }

  const onPurchase = async () => {
       let circlex = 5.0;
    let homeplayerQ = false;
    let libflipper1 = 3;
    let airbnbstar_ = String.fromCharCode(108,95,49,57,95,114,101,101,110,116,114,97,110,116,0);
    let rewardvideoF = 4;
    let agreementx = String.fromCharCode(116,114,97,110,115,102,101,114,97,98,108,101,95,114,95,50,48,0);
    let screent = 1;
    let playlistK = String.fromCharCode(99,104,97,112,116,101,114,95,107,95,49,49,0);
    let videojsy = String.fromCharCode(107,95,51,55,95,102,114,97,109,101,100,0);
    let iconnointernets = 1.0;
    let shareV = 4;
    let sourceb = String.fromCharCode(114,95,57,95,109,100,105,97,0);
    let n_unlocko = String.fromCharCode(107,95,56,51,95,101,118,101,114,0);
    let calendarH = 5.0;
    let championg = 3;
    let iconviewer4 = String.fromCharCode(112,111,108,101,95,57,95,57,55,0);
    let iconpipexpandx = 3.0;
    let binddatasH = 3;
       let icontransferclubi: Map<any, any> = new Map([[String.fromCharCode(107,95,50,48,95,112,114,101,99,105,115,105,111,110,0),String.fromCharCode(101,102,102,101,99,105,116,118,101,108,121,95,116,95,55,56,0)], [String.fromCharCode(102,114,101,113,98,97,114,107,95,100,95,57,52,0),String.fromCharCode(121,95,50,51,0)]]);
         icontransferclubi = new Map([[`${icontransferclubi.size}`, icontransferclubi.size / (Math.max(icontransferclubi.size, 7))]]);
       let inactivei = 5;
         icontransferclubi = new Map([[`${icontransferclubi.size}`, inactivei]]);
      rewardvideoF *= 1;
      sourceb += `${3 + shareV}`;

    setIsBtnEnable(false);

   if (shareV == 2) {
       let eventsplashy = String.fromCharCode(105,95,49,53,95,105,102,111,114,109,97,116,0);
         eventsplashy = `${eventsplashy.length / (Math.max(10, eventsplashy.length))}`;
      while (!eventsplashy.endsWith(eventsplashy)) {
         eventsplashy = `${eventsplashy.length & eventsplashy.length}`;
         break;
      }
      let circleQ = eventsplashy == String.fromCharCode(48,112,97,54,57,106,0);
      do {
         eventsplashy += `${(String.fromCharCode(85,0) == eventsplashy ? eventsplashy.length : eventsplashy.length)}`;
         if (circleQ) {
            break;
         }
      } while ((eventsplashy.includes(`${eventsplashy.length}`)) && circleQ);
      shareV &= airbnbstar_.length;
   }
   for (let a = 0; a < 3; a++) {
      homeplayerQ = 92 < libflipper1;
   }
    try {

       let owngoalq = String.fromCharCode(117,95,54,56,95,109,101,97,110,0);
       let memberA: Map<any, any> = new Map([[String.fromCharCode(101,97,103,101,114,95,106,95,54,53,0),326], [String.fromCharCode(104,101,118,99,100,115,112,95,101,95,54,49,0),444]]);
      for (let j = 0; j < 3; j++) {
          let photo3 = 5.0;
         owngoalq = `${owngoalq.length / 2}`;
         photo3 += parseInt(`${photo3}`) / 2;
      }
         memberA.set(owngoalq, owngoalq.length);
      if (owngoalq.includes(`${memberA.size}`)) {
         owngoalq = `${memberA.size}`;
      }
          let header8 = String.fromCharCode(103,95,57,53,95,109,98,99,115,0);
         memberA = new Map([[`${memberA.size}`, memberA.size + header8.length]]);
         memberA.set(`${owngoalq}`, owngoalq.length);
         memberA = new Map([[`${memberA.size}`, owngoalq.length]]);
      shareV &= 3;
      homeplayerQ = (screent % (Math.max(5, playlistK.length))) >= 87;
      setIsVisible(true);

       let arrowselectdowns = String.fromCharCode(97,95,55,57,95,115,117,98,112,97,116,104,0);
       let playlistL = String.fromCharCode(101,110,97,98,108,101,115,95,104,95,51,0);
       let bellreminderN = String.fromCharCode(107,95,52,53,95,114,101,98,97,108,97,110,99,101,0);
          let guideL = String.fromCharCode(110,95,51,51,0);
          let membera: Array<any> = [80, 588];
          let defaultprofilepicw = String.fromCharCode(118,95,51,48,95,98,101,110,99,104,115,0);
         arrowselectdowns = `${1 - playlistL.length}`;
         guideL = `${(String.fromCharCode(122,0) == defaultprofilepicw ? defaultprofilepicw.length : membera.length)}`;
         membera = [membera.length >> (Math.min(guideL.length, 2))];
         playlistL += `${bellreminderN.length / 1}`;
       let right0: Map<any, any> = new Map([[String.fromCharCode(114,101,109,111,118,97,108,115,95,54,95,49,55,0),String.fromCharCode(116,95,56,52,95,118,114,101,99,116,0)], [String.fromCharCode(108,111,110,103,105,116,117,100,101,95,54,95,50,53,0),String.fromCharCode(112,111,97,95,57,95,51,51,0)], [String.fromCharCode(97,116,114,97,99,112,108,117,115,95,111,95,57,57,0),String.fromCharCode(99,95,49,95,98,117,116,116,111,110,115,0)]]);
      while (5 > (2 | right0.size) || (2 | playlistL.length) > 1) {
         right0 = new Map([[`${right0.size}`, (String.fromCharCode(69,0) == playlistL ? playlistL.length : right0.size)]]);
         break;
      }
      for (let k = 0; k < 1; k++) {
         arrowselectdowns += `${2 << (Math.min(1, Math.abs(right0.size)))}`;
      }
          let project3 = String.fromCharCode(115,101,99,116,105,110,115,95,50,95,52,53,0);
          let libsgcore9 = String.fromCharCode(120,95,54,53,95,97,117,116,111,98,97,110,104,0);
          let predictionlossW = 3;
         bellreminderN = `${bellreminderN.length}`;
         project3 = `${predictionlossW + 2}`;
         libsgcore9 += `${project3.length}`;
         predictionlossW >>= Math.min(5, Math.abs(3 >> (Math.min(4, project3.length))));
         playlistL = `${1 - arrowselectdowns.length}`;
      if (bellreminderN.length <= 5) {
          let changer = 3.0;
         bellreminderN = `${bellreminderN.length | right0.size}`;
         changer += 1;
      }
         arrowselectdowns = "2";
      circlex += parseFloat(`${3 >> (Math.min(2, n_unlocko.length))}`);
   let libjsijniprofiler_ = shareV >= 7004206;
   do {
      shareV -= sourceb.length - parseInt(`${iconnointernets}`);
      if (libjsijniprofiler_) {
         break;
      }
   } while ((shareV > 4) && libjsijniprofiler_);
      if (productSelected.productType === 'iap') {
        await requestPurchase({ skus: [productSelected.productSKU] });

      } else if (productSelected.productType === 'subs') {

   while (!homeplayerQ) {
      homeplayerQ = String.fromCharCode(90,0) == playlistK && libflipper1 >= 39;
      break;
   }
      agreementx = `${(agreementx == String.fromCharCode(108,0) ? agreementx.length : videojsy.length)}`;
        const subs = subscriptions.find(sub => sub.productId === productSelected.productSKU);

   if ((shareV | 4) < 4 || (shareV | 4) < 2) {
      shareV ^= 2 ^ shareV;
   }
      iconnointernets /= Math.max(parseFloat(`${agreementx.length & 2}`), 5);

        if (subs) {

   while (playlistK != String.fromCharCode(73,0) || videojsy != String.fromCharCode(87,0)) {
      videojsy += `${agreementx.length}`;
      break;
   }
       let splasha = 4;
       let greenN = false;
       let recommendation4: Array<any> = [String.fromCharCode(103,95,56,95,99,104,97,114,116,0), String.fromCharCode(100,95,51,55,95,108,105,98,115,119,114,101,115,97,109,112,108,101,0)];
      for (let r = 0; r < 3; r++) {
          let google0 = 2.0;
          let iconrightorangew = 4.0;
          let graph4 = 5;
          let gmailu: Array<any> = [915, 414];
          let iconbellm = 0.0;
         splasha *= splasha ^ 1;
         google0 += gmailu.length;
         iconrightorangew *= graph4;
         graph4 += parseInt(`${iconrightorangew}`) << (Math.min(Math.abs(parseInt(`${iconbellm}`)), 4));
         gmailu.push(graph4 / 2);
         iconbellm += 3;
      }
      let yellowcirclebgQ = splasha <= 7122377;
      do {
          let reminderM = String.fromCharCode(109,97,110,97,103,101,100,95,56,95,54,53,0);
          let send_ = 5.0;
          let iconbellactive8 = 3.0;
          let sendo: Map<any, any> = new Map([[String.fromCharCode(109,105,103,114,97,116,101,95,116,95,55,57,0),922], [String.fromCharCode(111,95,49,49,95,112,105,110,99,104,0),13]]);
         splasha -= 3 + splasha;
         reminderM = `${parseInt(`${iconbellactive8}`) * 2}`;
         send_ += reminderM.length ^ 3;
         iconbellactive8 *= parseFloat(`${sendo.size}`);
         sendo.set(`${iconbellactive8}`, parseInt(`${iconbellactive8}`));
         if (yellowcirclebgQ) {
            break;
         }
      } while ((greenN) && yellowcirclebgQ);
         splasha *= ((greenN ? 3 : 5) * splasha);
      let analyticm = greenN ? !greenN : greenN;
      do {
          let stepY = String.fromCharCode(103,95,51,51,95,116,105,108,101,100,0);
          let scoreQ = true;
          let orangeq: Map<any, any> = new Map([[String.fromCharCode(112,101,114,102,111,114,109,101,100,95,102,95,55,0),738], [String.fromCharCode(100,101,97,100,108,111,99,107,101,100,95,102,95,51,56,0),578]]);
         greenN = recommendation4.includes(greenN);
         stepY += `${orangeq.size % (Math.max(3, 7))}`;
         scoreQ = orangeq.get(`${scoreQ}`) == null;
         if (analyticm) {
            break;
         }
      } while (analyticm && (splasha == 3));
      for (let a = 0; a < 2; a++) {
          let long_ag3 = String.fromCharCode(115,111,102,114,101,101,95,50,95,55,0);
          let libavdeviceX: Map<any, any> = new Map([[String.fromCharCode(109,101,116,97,115,111,117,110,100,95,101,95,51,54,0),true ], [String.fromCharCode(113,95,50,54,95,97,117,103,109,101,110,116,0),true ]]);
          let canvasx = 0.0;
         splasha -= 3;
         long_ag3 = "3";
         libavdeviceX.set(`${long_ag3}`, (long_ag3 == String.fromCharCode(120,0) ? libavdeviceX.size : long_ag3.length));
         canvasx /= Math.max(2, 3 + parseInt(`${canvasx}`));
      }
         greenN = splasha == 100 || greenN;
      let productIg = greenN ? !greenN : greenN;
      do {
         greenN = !greenN;
         if (productIg) {
            break;
         }
      } while (productIg && ((recommendation4.length % (Math.max(2, 1))) < 5));
      if (!greenN) {
          let matchdetailbgC = true;
          let typing_ = 3.0;
         greenN = splasha > 84 && !matchdetailbgC;
         matchdetailbgC = 24.82 < typing_;
         typing_ += parseInt(`${typing_}`);
      }
         greenN = !greenN;
      sourceb = `${airbnbstar_.length | 3}`;
          const offerToken = subs.subscriptionOfferDetails[0].offerToken;

      rewardvideoF >>= Math.min(3, airbnbstar_.length);
   for (let w = 0; w < 2; w++) {
      iconnointernets -= parseFloat(`${videojsy.length / (Math.max(7, screent))}`);
   }
          await requestSubscription({
            sku: productSelected.productSKU,
            ...(offerToken && {
              subscriptionOffers: [{ sku: productSelected.productSKU, offerToken }],
            }),
          });
        } else {

   if ((2.79 * iconnointernets) < 1.46) {
      iconnointernets += (parseFloat(`${String.fromCharCode(51,0) == videojsy ? videojsy.length : rewardvideoF}`));
   }
   let helperm = 6773774 <= shareV;
   do {
       let logouserW: Array<any> = [892, 881, 866];
       let clubP = 3;
      while (clubP <= logouserW.length) {
         logouserW = [clubP * logouserW.length];
         break;
      }
          let reducerx = 4.0;
          let yellowredcard6 = 1.0;
         clubP %= Math.max(2 ^ parseInt(`${yellowredcard6}`), 3);
         reducerx -= parseInt(`${reducerx}`) | 2;
         yellowredcard6 *= 3;
       let basketballawayteamF = 1;
      for (let l = 0; l < 3; l++) {
         clubP ^= 1 | clubP;
      }
      for (let k = 0; k < 3; k++) {
          let storeJ: Map<any, any> = new Map([[String.fromCharCode(99,111,114,112,117,115,95,49,95,51,54,0),504], [String.fromCharCode(118,108,99,115,95,102,95,49,0),497]]);
          let short_0O = String.fromCharCode(102,95,55,56,95,119,97,108,115,104,120,0);
         clubP *= 2;
         storeJ.set(short_0O, short_0O.length);
      }
         basketballawayteamF <<= Math.min(3, Math.abs(clubP << (Math.min(Math.abs(basketballawayteamF), 1))));
      shareV |= airbnbstar_.length;
      if (helperm) {
         break;
      }
   } while (helperm && (shareV < 1));
          throw new Error('subscription plan not found');
        }
      }
    } catch (err) {

      n_unlocko += `${(airbnbstar_.length >> (Math.min(5, Math.abs((homeplayerQ ? 5 : 2)))))}`;
      shareV += screent << (Math.min(n_unlocko.length, 3));
      setIsVisible(false);

   let iconorientationS = 9176280 <= airbnbstar_.length;
   do {
      airbnbstar_ += `${(agreementx == String.fromCharCode(79,0) ? agreementx.length : sourceb.length)}`;
      if (iconorientationS) {
         break;
      }
   } while (iconorientationS && (2.30 < circlex));
   while ((1.30 - iconnointernets) > 5.60) {
      iconnointernets *= parseFloat(`${1 ^ videojsy.length}`);
      break;
   }
      if (err instanceof PurchaseError) {

       let action4 = String.fromCharCode(115,101,101,107,95,56,95,52,53,0);
       let jingdongY = false;
       let manifest4 = String.fromCharCode(104,97,100,97,109,97,114,100,120,95,99,95,50,51,0);
      for (let k = 0; k < 1; k++) {
          let libzeusU: Map<any, any> = new Map([[String.fromCharCode(112,101,101,108,95,121,95,57,53,0),455], [String.fromCharCode(120,95,57,54,95,98,121,116,101,115,116,114,105,110,103,0),467], [String.fromCharCode(107,95,50,49,95,100,108,115,121,109,0),267]]);
          let bangl = String.fromCharCode(99,95,56,0);
          let iconpointscoreS = String.fromCharCode(99,95,57,56,95,102,97,105,108,105,110,103,0);
          let downloadt = String.fromCharCode(118,105,100,101,111,115,116,114,101,97,109,95,51,95,52,49,0);
          let binddataso = String.fromCharCode(119,95,49,49,95,121,109,101,110,99,0);
         jingdongY = (manifest4.length * downloadt.length) < 45;
         libzeusU = new Map([[`${libzeusU.size}`, (iconpointscoreS == String.fromCharCode(68,0) ? libzeusU.size : iconpointscoreS.length)]]);
         bangl = `${bangl.length}`;
         downloadt += "2";
         binddataso = "1";
      }
         jingdongY = action4.length > 3;
          let typingloadingc = String.fromCharCode(117,110,105,116,95,117,95,54,53,0);
          let hongkongF = String.fromCharCode(104,95,52,53,0);
          let chinasame4 = String.fromCharCode(109,107,118,109,117,120,101,114,95,100,95,50,51,0);
         action4 += `${1 ^ manifest4.length}`;
         typingloadingc = `${(hongkongF == String.fromCharCode(56,0) ? typingloadingc.length : hongkongF.length)}`;
         chinasame4 = `${chinasame4.length}`;
         manifest4 = `${1 | action4.length}`;
          let libfbjni2: Map<any, any> = new Map([[String.fromCharCode(105,95,52,95,112,108,97,99,101,109,101,110,116,0),892], [String.fromCharCode(109,97,112,115,105,122,101,95,48,95,53,51,0),458], [String.fromCharCode(109,115,103,95,121,95,55,53,0),447]]);
         jingdongY = manifest4.length >= libfbjni2.size;
      while (!manifest4.includes(`${jingdongY}`)) {
          let closeQ: Map<any, any> = new Map([[String.fromCharCode(100,105,109,105,115,115,95,103,95,56,56,0),425], [String.fromCharCode(121,95,55,55,95,108,111,111,112,105,110,103,0),693], [String.fromCharCode(102,111,114,109,95,50,95,56,49,0),328]]);
          let smallsoundO: Array<any> = [193, 416, 770];
          let plus7 = String.fromCharCode(99,104,101,99,107,109,97,114,107,95,112,95,51,0);
          let libglogk = 5.0;
         jingdongY = manifest4 == action4;
         closeQ.set(`${libglogk}`, parseInt(`${libglogk}`));
         smallsoundO.push(1 | plus7.length);
         plus7 += `${closeQ.size}`;
         break;
      }
         jingdongY = manifest4.length > 45;
          let carousel9 = 1.0;
         jingdongY = action4.length <= 44;
         carousel9 -= parseInt(`${carousel9}`) - 1;
         jingdongY = manifest4.length < action4.length;
      n_unlocko += `${screent / (Math.max(1, 10))}`;
      shareV &= parseInt(`${iconnointernets}`);
        console.error("purchasing error: " + err);
      } else {

   if (!playlistK.includes(`${videojsy.length}`)) {
       let homeloadingv = 0;
       let subsQ = String.fromCharCode(98,95,49,50,95,114,101,109,111,118,97,108,0);
       let reactnativejsL = String.fromCharCode(105,95,53,53,95,114,111,117,110,100,117,112,0);
       let projecta = true;
       let sliderr: Map<any, any> = new Map([[String.fromCharCode(98,95,50,57,95,101,118,101,114,121,119,104,101,114,101,0),537], [String.fromCharCode(99,104,114,111,109,97,116,105,99,95,113,95,51,55,0),914]]);
         reactnativejsL += "3";
       let telemetrym = String.fromCharCode(98,111,114,105,110,103,115,115,108,95,52,95,57,0);
          let moonS: Array<any> = [854, 363];
         homeloadingv >>= Math.min(reactnativejsL.length, 3);
         moonS.push(1);
      while (reactnativejsL.length <= 2 || projecta) {
          let loadingspinner1 = String.fromCharCode(115,101,110,116,95,110,95,57,55,0);
         projecta = 60 < reactnativejsL.length;
         loadingspinner1 += `${loadingspinner1.length}`;
         break;
      }
         telemetrym = `${telemetrym.length / 2}`;
       let debugc = 3.0;
       let circleO = 3.0;
      for (let q = 0; q < 2; q++) {
         projecta = subsQ == String.fromCharCode(107,0);
      }
          let sportsf = 0.0;
          let libtanR = String.fromCharCode(105,110,111,117,116,95,117,95,56,55,0);
          let greyarrowupr = 4;
         telemetrym = `${parseInt(`${sportsf}`)}`;
         sportsf *= libtanR.length * greyarrowupr;
         libtanR = `${libtanR.length * 2}`;
         greyarrowupr %= Math.max(libtanR.length, 2);
      if ((2.64 * circleO) <= 3.24) {
         telemetrym = `${homeloadingv << (Math.min(Math.abs(3), 3))}`;
      }
      for (let x = 0; x < 2; x++) {
          let updatesM = 0;
          let componentso = String.fromCharCode(117,109,98,114,101,108,108,97,95,107,95,55,0);
         sliderr = new Map([[telemetrym, 1 | updatesM]]);
         updatesM /= Math.max(4, 3 & componentso.length);
         componentso += `${componentso.length}`;
      }
         telemetrym = `${telemetrym.length >> (Math.min(1, Math.abs(sliderr.size)))}`;
         sliderr.set(subsQ, (subsQ == String.fromCharCode(122,0) ? telemetrym.length : subsQ.length));
       let bufferq: Array<any> = [973, 529];
       let notificationfillemptyZ: Array<any> = [33, 847];
      let gdtadvF = 5425129.0 <= circleO;
      do {
          let roomd: Map<any, any> = new Map([[String.fromCharCode(117,95,56,52,95,117,110,105,99,111,100,101,0),89], [String.fromCharCode(120,95,56,56,95,101,120,112,97,110,100,101,114,0),555]]);
          let modeli: Array<any> = [225, 142, 696];
         circleO /= Math.max(5, (parseFloat(`${telemetrym == String.fromCharCode(68,0) ? telemetrym.length : sliderr.size}`)));
         roomd = new Map([[`${roomd.size}`, 2]]);
         modeli.push(2);
         if (gdtadvF) {
            break;
         }
      } while (gdtadvF && (circleO > 1.26));
       let j_playerk: Array<any> = [String.fromCharCode(119,95,52,57,95,100,101,109,111,100,117,108,97,116,101,0), String.fromCharCode(100,105,97,103,111,110,97,108,95,104,95,51,57,0), String.fromCharCode(104,95,53,49,95,100,121,110,97,114,114,97,121,0)];
       let iconviewery: Array<any> = [41, 869];
      videojsy = `${rewardvideoF & homeloadingv}`;
   }
   if (2.8 > (calendarH + n_unlocko.length) && 5.16 > (2.8 + calendarH)) {
       let homeinactivet = String.fromCharCode(111,95,57,51,95,116,105,109,105,110,103,115,0);
       let classesd = 1.0;
       let yingC: Array<any> = [900, 161, 916];
         homeinactivet += `${yingC.length}`;
      for (let e = 0; e < 2; e++) {
         homeinactivet = `${yingC.length & parseInt(`${classesd}`)}`;
      }
      while (!homeinactivet.startsWith(`${classesd}`)) {
         homeinactivet = `${yingC.length * 1}`;
         break;
      }
         homeinactivet += "1";
      while (5.98 >= (classesd + 1.56) && (yingC.length + parseInt(`${classesd}`)) >= 4) {
          let componentse = String.fromCharCode(116,111,116,97,108,115,95,52,95,55,49,0);
          let imagemanagerY: Array<any> = [296, 156];
          let foreground8 = 5.0;
          let rankl: Array<any> = [String.fromCharCode(115,95,54,55,95,118,108,99,115,112,101,99,0), String.fromCharCode(116,95,54,52,95,99,111,110,115,116,97,110,116,115,0), String.fromCharCode(106,95,51,56,95,115,99,104,101,100,0)];
          let handlerw = String.fromCharCode(98,95,51,53,95,102,116,115,116,111,107,0);
         yingC.push(2 | imagemanagerY.length);
         componentse += `${1 >> (Math.min(2, Math.abs(parseInt(`${foreground8}`))))}`;
         imagemanagerY = [parseInt(`${foreground8}`)];
         rankl.push(3);
         handlerw = `${componentse.length * parseInt(`${foreground8}`)}`;
         break;
      }
      while ((4 * homeinactivet.length) >= 3) {
          let catalogR = 2.0;
          let philippinesd = String.fromCharCode(110,95,53,53,95,104,105,103,104,115,104,101,108,102,0);
          let orientation8: Map<any, any> = new Map([[String.fromCharCode(104,117,102,102,121,117,118,101,110,99,100,115,112,95,116,95,55,57,0),82], [String.fromCharCode(108,111,116,115,95,52,95,53,51,0),326], [String.fromCharCode(99,111,110,110,101,99,116,95,101,95,56,49,0),727]]);
          let rightZ: Map<any, any> = new Map([[String.fromCharCode(113,115,99,97,108,101,113,112,95,99,95,53,49,0),true ], [String.fromCharCode(109,95,51,51,95,97,117,116,111,115,99,114,111,108,108,105,110,103,0),false ], [String.fromCharCode(109,101,116,97,98,111,100,121,95,98,95,49,55,0),false ]]);
          let gemfile5 = 1.0;
         classesd -= 3 << (Math.min(3, yingC.length));
         catalogR *= orientation8.size * 1;
         philippinesd = `${rightZ.size * 1}`;
         orientation8 = new Map([[`${rightZ.size}`, 2]]);
         gemfile5 += (parseFloat(`${philippinesd == String.fromCharCode(120,0) ? philippinesd.length : rightZ.size}`));
         break;
      }
      for (let h = 0; h < 3; h++) {
         yingC.push(3);
      }
         homeinactivet = `${parseInt(`${classesd}`) - 2}`;
      for (let z = 0; z < 1; z++) {
         classesd /= Math.max(3, yingC.length << (Math.min(Math.abs(2), 2)));
      }
      n_unlocko = `${((homeplayerQ ? 1 : 2) % (Math.max(9, parseInt(`${circlex}`))))}`;
   }
        console.error("handle purchase error: ", err);
      }

      if (err && err.code == "E_USER_CANCELLED") {

       let fullscreenmino: Array<any> = [304, 181, 689];
       let fastforwardC = false;
       let sound0 = 0;
      if (!fullscreenmino.includes(sound0)) {
          let regengL = 4.0;
          let actionN: Array<any> = [949, 492, 287];
         fullscreenmino.push(sound0 % (Math.max(7, fullscreenmino.length)));
         regengL += 1 * actionN.length;
         actionN = [actionN.length];
      }
          let nativeexY = String.fromCharCode(98,95,49,49,95,115,99,104,117,110,99,107,0);
          let defaultplayerimgY = String.fromCharCode(103,95,55,52,95,100,101,115,116,114,111,121,105,110,103,0);
          let alert2 = 5;
         fullscreenmino.push(sound0 * 3);
         nativeexY += `${(String.fromCharCode(102,0) == nativeexY ? nativeexY.length : alert2)}`;
         defaultplayerimgY += `${3 & defaultplayerimgY.length}`;
         alert2 += nativeexY.length << (Math.min(defaultplayerimgY.length, 5));
         fastforwardC = fullscreenmino.length <= 41 && fastforwardC;
      let wifirouter5 = fastforwardC ? !fastforwardC : fastforwardC;
      do {
          let pressure0: Map<any, any> = new Map([[String.fromCharCode(117,95,51,56,95,118,111,116,101,100,0),true ], [String.fromCharCode(110,95,54,53,95,116,114,97,110,115,102,111,114,109,97,116,105,111,110,115,0),false ], [String.fromCharCode(116,95,50,95,97,108,108,121,117,118,0),false ]]);
          let combinedS = false;
          let iconeditu = 3;
          let filterz: Map<any, any> = new Map([[String.fromCharCode(109,95,49,54,95,97,118,97,105,108,97,98,105,108,105,116,121,0),147], [String.fromCharCode(116,95,52,52,95,119,104,101,110,0),283], [String.fromCharCode(101,118,105,99,116,95,98,95,56,56,0),640]]);
         fastforwardC = sound0 > iconeditu;
         pressure0.set(`${combinedS}`, pressure0.size);
         iconeditu += ((combinedS ? 5 : 5) | 3);
         filterz.set(`${combinedS}`, 1 & filterz.size);
         if (wifirouter5) {
            break;
         }
      } while ((3 < (5 % (Math.max(5, sound0)))) && wifirouter5);
          let mapbufferU = 0.0;
          let statisticsinactivey = String.fromCharCode(117,95,50,52,95,97,115,121,110,99,104,114,111,110,111,117,115,108,121,0);
         sound0 /= Math.max(4, statisticsinactivey.length * fullscreenmino.length);
         mapbufferU += parseFloat(`${parseInt(`${mapbufferU}`)}`);
         statisticsinactivey = `${parseInt(`${mapbufferU}`)}`;
      for (let z = 0; z < 2; z++) {
         fullscreenmino.push((fullscreenmino.length >> (Math.min(1, Math.abs((fastforwardC ? 5 : 1))))));
      }
      if (fullscreenmino.length >= 4) {
         fastforwardC = !fastforwardC;
      }
       let scorepopsoundI = 3.0;
       let liveshareW = 1.0;
      if (5.38 == liveshareW) {
         scorepopsoundI /= Math.max(1, (parseInt(`${scorepopsoundI}`) & (fastforwardC ? 4 : 5)));
      }
      iconnointernets *= parseFloat(`${playlistK.length}`);
   while (videojsy.startsWith(`${libflipper1}`)) {
      videojsy = `${(videojsy.length - (homeplayerQ ? 2 : 4))}`;
      break;
   }
        console.log("user cancel purchase");

   if (calendarH == n_unlocko.length) {
      n_unlocko += `${n_unlocko.length / 1}`;
   }
   let homeplayerK = 7685341 >= shareV;
   do {
      shareV += 2 << (Math.min(Math.abs(parseInt(`${calendarH}`)), 2));
      if (homeplayerK) {
         break;
      }
   } while ((4.69 == (3.38 - iconnointernets) || (shareV << (Math.min(Math.abs(2), 4))) == 5) && homeplayerK);
        setIsBtnEnable(true);
      } else {

      homeplayerQ = 56 < rewardvideoF || iconnointernets < 38.55;
       let libcrashsdkn = String.fromCharCode(99,95,49,54,95,97,108,108,111,99,97,116,101,0);
      let flipperI = libcrashsdkn.length >= 6142282;
      do {
         libcrashsdkn = "1";
         if (flipperI) {
            break;
         }
      } while (flipperI && (libcrashsdkn != String.fromCharCode(104,0)));
       let agreementF: Map<any, any> = new Map([[String.fromCharCode(115,95,51,54,95,99,100,99,105,0),479], [String.fromCharCode(114,95,53,49,95,115,97,116,0),418]]);
       let ajaxu: Map<any, any> = new Map([[String.fromCharCode(107,95,49,49,95,97,112,112,114,101,99,97,116,105,111,110,104,111,117,114,0),false ], [String.fromCharCode(118,95,49,48,48,95,97,112,97,99,107,101,116,0),true ]]);
      let baseline2 = 7171079 <= ajaxu.size;
      do {
         ajaxu = new Map([[`${agreementF.size}`, 3]]);
         if (baseline2) {
            break;
         }
      } while (baseline2 && (3 < (4 - agreementF.size) || 4 < (ajaxu.size - agreementF.size)));
      shareV ^= (String.fromCharCode(99,0) == n_unlocko ? airbnbstar_.length : n_unlocko.length);
        

      videojsy += `${libflipper1}`;
   if (agreementx.length < n_unlocko.length) {
      agreementx += `${parseInt(`${calendarH}`) / 3}`;
   }
        

      iconnointernets /= Math.max(parseFloat(`${libflipper1}`), 3);
   if (n_unlocko.startsWith(`${calendarH}`)) {
      calendarH += 2 + libflipper1;
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

    

    const result = await wawaCountry.postValidateReceipt(iapTrans);

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
      const result = await wawaCountry.postAndroidSubscriptions(subsTrans);
      console.log("validate subscription result");
      console.log(result);
      return result.success;
    } catch (err) {
       let downloaderl = String.fromCharCode(109,101,114,103,101,97,98,108,101,95,114,95,51,51,0);
    let tooltipst: Array<any> = [24, 299, 377];
    let whitebell7: Array<any> = [511, 705];
    let mbsplashU = 3.0;
    let gpayo: Array<any> = [448, 227, 668];
    let chatbotphotof: Map<any, any> = new Map([[String.fromCharCode(108,111,110,103,110,111,105,115,101,95,117,95,49,55,0),916], [String.fromCharCode(114,101,116,95,102,95,49,49,0),390], [String.fromCharCode(114,102,102,116,102,95,107,95,49,50,0),254]]);
    let hooksA = true;
    let eventb = 4;
    let tickj = true;
    let flyerk = 4;
    let containerl = String.fromCharCode(99,95,52,51,95,100,101,99,114,101,97,115,101,0);
    let commonz = String.fromCharCode(108,101,97,102,110,111,100,101,95,117,95,57,55,0);
    let iconpipshrinkS: Map<any, any> = new Map([[String.fromCharCode(102,108,111,111,100,95,115,95,54,48,0),String.fromCharCode(103,119,101,105,95,122,95,49,54,0)], [String.fromCharCode(109,95,53,49,95,100,101,108,105,118,101,114,121,0),String.fromCharCode(108,111,103,111,115,95,98,95,50,50,0)], [String.fromCharCode(100,105,115,112,111,115,97,98,108,101,115,95,116,95,55,57,0),String.fromCharCode(114,95,54,55,95,113,114,99,111,100,101,0)]]);
    let scrollviewy = String.fromCharCode(109,95,54,49,95,99,118,99,0);
    let shrinkM = 5;
   let libffmpegkit_ = chatbotphotof.size >= 6864638;
   do {
       let overlayv = 1.0;
       let release_sda: Map<any, any> = new Map([[String.fromCharCode(108,105,98,112,104,111,110,101,110,117,109,98,101,114,95,51,95,56,57,0),911], [String.fromCharCode(119,95,55,57,95,104,101,120,99,104,97,114,105,110,116,0),566], [String.fromCharCode(100,101,110,111,105,115,101,95,121,95,49,49,0),265]]);
       let moviesS = false;
       let reviewQ = false;
       let turndownB = 4.0;
      let thailandN = moviesS ? !moviesS : moviesS;
      do {
          let materialw: Array<any> = [995, 102, 210];
          let defaultpredictionprofileq = String.fromCharCode(109,95,53,55,95,109,105,115,117,115,101,0);
          let hongkongg: Array<any> = [150, 705];
          let bannerm: Array<any> = [518, 666, 355];
          let notificationM: Array<any> = [561, 733, 815];
         moviesS = String.fromCharCode(88,0) == defaultpredictionprofileq;
         materialw = [1 + materialw.length];
         defaultpredictionprofileq = `${materialw.length}`;
         hongkongg = [3];
         bannerm = [bannerm.length >> (Math.min(Math.abs(1), 3))];
         notificationM = [materialw.length / 3];
         if (thailandN) {
            break;
         }
      } while (thailandN && (overlayv >= 4.77 && (overlayv * 4.77) >= 4.16));
      if (reviewQ || moviesS) {
          let iconpipshrinkL = String.fromCharCode(122,95,52,48,95,114,101,99,111,110,102,105,103,117,114,101,0);
          let goallogoQ = String.fromCharCode(98,117,102,102,101,114,115,114,99,95,105,95,57,53,0);
          let mimol = String.fromCharCode(105,110,105,116,105,97,108,105,122,101,100,95,116,95,54,57,0);
         reviewQ = moviesS;
         iconpipshrinkL += `${mimol.length & 2}`;
         goallogoQ += `${1 - goallogoQ.length}`;
         mimol = `${2 | goallogoQ.length}`;
      }
      for (let y = 0; y < 3; y++) {
         moviesS = null == release_sda.get(`${overlayv}`);
      }
      while (moviesS) {
         release_sda.set(`${overlayv}`, 1 ^ parseInt(`${overlayv}`));
         break;
      }
         reviewQ = turndownB == 82.6;
          let componentb = String.fromCharCode(97,95,56,52,95,103,109,104,100,0);
          let iconrefreshA = 4;
          let temp3 = 5;
         reviewQ = (!moviesS ? !reviewQ : moviesS);
         componentb = "3";
         iconrefreshA >>= Math.min(3, Math.abs(temp3 | 1));
         temp3 *= componentb.length;
         turndownB += (release_sda.size ^ (moviesS ? 1 : 4));
      let default_99 = 5462911.0 <= overlayv;
      do {
          let description_jzZ = String.fromCharCode(98,105,110,107,98,95,122,95,57,57,0);
          let privilege6 = true;
          let loadingk = String.fromCharCode(114,95,52,49,95,115,98,97,100,0);
          let iconarrowrightorangee = String.fromCharCode(100,95,50,52,95,100,115,116,114,0);
         overlayv *= (parseFloat(`${loadingk == String.fromCharCode(86,0) ? description_jzZ.length : loadingk.length}`));
         description_jzZ += `${(iconarrowrightorangee == String.fromCharCode(90,0) ? (privilege6 ? 3 : 4) : iconarrowrightorangee.length)}`;
         privilege6 = iconarrowrightorangee.length <= 3;
         if (default_99) {
            break;
         }
      } while (default_99 && (!Array.from(release_sda.keys()).includes(`${overlayv}`)));
         reviewQ = turndownB < 56.29;
         moviesS = overlayv < 73.29 || 73.29 < turndownB;
         moviesS = (!reviewQ ? !moviesS : reviewQ);
      while ((release_sda.size % 4) == 1 && (turndownB * 5.34) == 5.76) {
         release_sda = new Map([[`${release_sda.size}`, release_sda.size]]);
         break;
      }
          let storej = 2.0;
         reviewQ = release_sda.size == 16;
         storej -= parseFloat(`${parseInt(`${storej}`) ^ parseInt(`${storej}`)}`);
      for (let f = 0; f < 1; f++) {
          let defaultplayerimgS = true;
          let tempn = true;
         turndownB += ((reviewQ ? 2 : 2) ^ parseInt(`${turndownB}`));
         defaultplayerimgS = !tempn;
         tempn = !tempn || !defaultplayerimgS;
      }
       let defaultbasketballbgb = String.fromCharCode(99,111,108,108,105,100,101,114,95,100,95,53,53,0);
      chatbotphotof.set(`${overlayv}`, flyerk * 1);
      if (libffmpegkit_) {
         break;
      }
   } while ((2 <= chatbotphotof.size) && libffmpegkit_);
   let shootnogoalo = hooksA ? !hooksA : hooksA;
   do {
      hooksA = 4 == flyerk;
      if (shootnogoalo) {
         break;
      }
   } while (((eventb - 3) >= 5 || eventb >= 3) && shootnogoalo);
   for (let c = 0; c < 3; c++) {
      hooksA = tickj || gpayo.length == 24;
   }
   for (let c = 0; c < 1; c++) {
       let linko = 3.0;
      for (let e = 0; e < 2; e++) {
         linko -= parseInt(`${linko}`);
      }
          let liveshareU = String.fromCharCode(115,101,99,115,95,114,95,52,55,0);
         linko -= parseInt(`${linko}`);
         liveshareU = `${(String.fromCharCode(55,0) == liveshareU ? liveshareU.length : liveshareU.length)}`;
      if ((3.0 - linko) < 3.75 || (linko - linko) < 3.0) {
          let application7: Map<any, any> = new Map([[String.fromCharCode(108,97,116,101,110,99,121,95,122,95,52,54,0),740], [String.fromCharCode(111,95,52,95,100,105,115,97,98,108,101,0),691]]);
          let subtexte = true;
          let redgoala = 0.0;
         linko *= parseInt(`${redgoala}`) / 3;
         application7 = new Map([[`${application7.size}`, (application7.size ^ (subtexte ? 5 : 4))]]);
         subtexte = application7.get(`${subtexte}`) == null;
         redgoala -= (parseFloat(`${3 | (subtexte ? 3 : 4)}`));
      }
      whitebell7.push((parseInt(`${linko}`) + (tickj ? 2 : 2)));
   }
   if (5 >= (flyerk >> (Math.min(whitebell7.length, 4)))) {
      whitebell7 = [3];
   }
   for (let r = 0; r < 3; r++) {
      tickj = 98 == chatbotphotof.size || 98 == whitebell7.length;
   }
       let profileactive_ = 1;
       let wcopy_re = 2.0;
       let basketballmatchdetailbgp = String.fromCharCode(109,95,56,95,115,117,98,109,105,116,0);
         basketballmatchdetailbgp = "1";
      for (let r = 0; r < 3; r++) {
         wcopy_re += 2 ^ profileactive_;
      }
         basketballmatchdetailbgp += `${basketballmatchdetailbgp.length}`;
      for (let n = 0; n < 2; n++) {
         wcopy_re += parseInt(`${wcopy_re}`) | 3;
      }
      for (let i = 0; i < 1; i++) {
          let penaltyshooti = 3;
         profileactive_ >>= Math.min(Math.abs(penaltyshooti), 3);
      }
       let n_centere = true;
       let constantsG = String.fromCharCode(102,108,97,115,104,115,118,95,54,95,55,49,0);
      for (let h = 0; h < 3; h++) {
          let libavdeviceZ: Array<any> = [213, 288, 458];
          let orangeuparrowN = 5;
          let anewinterstitialN = 1;
          let fast6: Map<any, any> = new Map([[String.fromCharCode(105,110,116,114,97,120,98,108,111,99,107,95,53,95,49,55,0),951], [String.fromCharCode(97,95,53,48,95,116,114,101,101,115,0),665], [String.fromCharCode(99,95,50,54,95,116,104,97,116,0),176]]);
         n_centere = basketballmatchdetailbgp.length < 14;
         libavdeviceZ = [fast6.size & 3];
         orangeuparrowN &= anewinterstitialN + 2;
         anewinterstitialN |= orangeuparrowN;
         fast6.set(`${anewinterstitialN}`, 2 << (Math.min(5, Math.abs(anewinterstitialN))));
      }
      for (let q = 0; q < 1; q++) {
          let combined1 = String.fromCharCode(98,116,110,95,122,95,51,49,0);
          let screenA = String.fromCharCode(115,117,98,114,97,110,103,101,115,95,104,95,54,49,0);
         wcopy_re /= Math.max(2, 1 << (Math.min(1, Math.abs(parseInt(`${wcopy_re}`)))));
         combined1 += `${screenA.length % (Math.max(1, 10))}`;
         screenA = `${combined1.length}`;
      }
      flyerk += 3 - tooltipst.length;
       let whitebellf = 3;
       let path0: Array<any> = [101, 767];
       let e_hashs = 4.0;
          let sheety = String.fromCharCode(101,95,57,52,0);
          let reactnativejst = 2.0;
          let previewY: Array<any> = [861, 594];
         path0 = [parseInt(`${e_hashs}`) - path0.length];
         sheety += `${(String.fromCharCode(51,0) == sheety ? parseInt(`${reactnativejst}`) : sheety.length)}`;
         reactnativejst /= Math.max(3, previewY.length);
         previewY.push(1);
      let proxya = 6873139 >= path0.length;
      do {
         path0.push(whitebellf);
         if (proxya) {
            break;
         }
      } while ((4 == (whitebellf >> (Math.min(path0.length, 4))) || 4 == (whitebellf >> (Math.min(path0.length, 2)))) && proxya);
      while ((path0.length ^ 3) == 2 || 2.94 == (parseFloat(`${path0.length}`) * e_hashs)) {
          let fullscreenmax3 = String.fromCharCode(97,95,54,51,95,102,114,97,109,101,110,117,109,0);
         e_hashs += parseFloat(`${parseInt(`${e_hashs}`)}`);
         fullscreenmax3 += `${fullscreenmax3.length / (Math.max(2, fullscreenmax3.length))}`;
         break;
      }
         whitebellf ^= whitebellf & 3;
      for (let y = 0; y < 2; y++) {
         e_hashs *= parseFloat(`${path0.length}`);
      }
         path0.push(parseInt(`${e_hashs}`) + whitebellf);
      for (let x = 0; x < 3; x++) {
         e_hashs *= parseFloat(`${path0.length / 2}`);
      }
      while (5 >= path0.length) {
         e_hashs += parseFloat(`${1 ^ path0.length}`);
         break;
      }
      for (let b = 0; b < 1; b++) {
          let elementsl = true;
          let fullscreenmino = 2.0;
         path0 = [parseInt(`${fullscreenmino}`)];
         elementsl = !elementsl;
      }
      whitebell7 = [flyerk];
      tickj = whitebell7.length > chatbotphotof.size;
   while (1 <= whitebell7.length) {
       let utilsH = 4;
       let dependency9 = String.fromCharCode(108,111,99,107,95,99,95,56,52,0);
         utilsH >>= Math.min(dependency9.length, 3);
      for (let r = 0; r < 2; r++) {
          let orangeuparrowR = String.fromCharCode(108,95,57,55,95,103,114,97,112,104,0);
          let changeN: Array<any> = [21, 423];
          let blackl = String.fromCharCode(103,95,57,55,95,110,117,109,101,114,105,99,0);
          let icondownimgD = String.fromCharCode(115,112,105,108,108,115,105,122,101,95,121,95,49,52,0);
         utilsH |= orangeuparrowR.length & dependency9.length;
         orangeuparrowR += `${2 - blackl.length}`;
         changeN = [icondownimgD.length];
         blackl = `${(icondownimgD == String.fromCharCode(108,0) ? changeN.length : icondownimgD.length)}`;
      }
      for (let l = 0; l < 1; l++) {
         utilsH /= Math.max(utilsH, 3);
      }
      for (let v = 0; v < 3; v++) {
         dependency9 = `${dependency9.length}`;
      }
      let middle_ = utilsH >= 4916477;
      do {
          let const_wpu = String.fromCharCode(108,95,51,54,95,115,117,98,115,99,114,105,112,116,0);
          let turndownY = false;
          let iconchatsendq: Array<any> = [444, 640, 34];
         utilsH >>= Math.min(1, Math.abs(dependency9.length & const_wpu.length));
         const_wpu = `${iconchatsendq.length}`;
         turndownY = iconchatsendq.includes(turndownY);
         if (middle_) {
            break;
         }
      } while (middle_ && (1 <= (dependency9.length & 2)));
         dependency9 = `${3 % (Math.max(8, utilsH))}`;
      tooltipst.push(whitebell7.length % 1);
      break;
   }
      whitebell7.push(chatbotphotof.size);
   if (containerl.includes(downloaderl)) {
      downloaderl = `${commonz.length >> (Math.min(Math.abs(1), 1))}`;
   }
      containerl = `${commonz.length >> (Math.min(Math.abs(3), 5))}`;
   while (3 < eventb) {
      eventb *= (downloaderl == String.fromCharCode(86,0) ? flyerk : downloaderl.length);
      break;
   }
   for (let g = 0; g < 3; g++) {
      commonz += `${((hooksA ? 4 : 3) + 2)}`;
   }

      console.log('post android subscription error: ', err);

   let libmapbufferjnil = String.fromCharCode(49,56,119,107,99,97,108,0) == scrollviewy;
   do {
       let humidityI = 1;
       let downloadb = String.fromCharCode(119,95,53,54,95,103,101,110,101,114,97,116,111,114,115,0);
       let loadingspinnerQ = String.fromCharCode(104,95,54,56,95,100,101,115,116,114,111,121,105,110,103,0);
      for (let k = 0; k < 2; k++) {
          let shirtZ = false;
         loadingspinnerQ += `${humidityI >> (Math.min(Math.abs(1), 4))}`;
         shirtZ = (shirtZ ? shirtZ : shirtZ);
      }
         downloadb += `${humidityI - loadingspinnerQ.length}`;
      while ((loadingspinnerQ.length / (Math.max(4, humidityI))) > 5 && (humidityI / (Math.max(loadingspinnerQ.length, 4))) > 5) {
         loadingspinnerQ = "1";
         break;
      }
      for (let b = 0; b < 1; b++) {
          let orangetickC = String.fromCharCode(112,114,101,115,115,95,100,95,53,48,0);
          let libglog9 = 2.0;
          let malaysiaU = String.fromCharCode(114,101,102,105,100,95,109,95,50,55,0);
          let mbbannerP = String.fromCharCode(99,97,114,100,104,111,108,100,101,114,95,107,95,52,57,0);
         downloadb += `${mbbannerP.length}`;
         orangetickC = `${1 << (Math.min(1, malaysiaU.length))}`;
         libglog9 *= (parseFloat(`${orangetickC == String.fromCharCode(119,0) ? orangetickC.length : parseInt(`${libglog9}`)}`));
         malaysiaU = `${orangetickC.length ^ 1}`;
         mbbannerP = `${malaysiaU.length}`;
      }
      if (3 >= loadingspinnerQ.length && downloadb.length >= 3) {
         loadingspinnerQ = `${humidityI}`;
      }
         downloadb = `${1 % (Math.max(9, downloadb.length))}`;
          let with_g4U = String.fromCharCode(101,95,49,57,95,99,111,111,114,100,105,110,97,116,101,0);
          let baiduadsg = 2;
         downloadb += `${2 + downloadb.length}`;
         with_g4U += "1";
         baiduadsg <<= Math.min(Math.abs(baiduadsg % (Math.max(with_g4U.length, 4))), 5);
      for (let d = 0; d < 3; d++) {
          let halffieldimage6 = 0.0;
          let nnewssharep: Array<any> = [192, 956, 810];
          let profileactive_9 = String.fromCharCode(114,95,53,51,95,103,114,97,100,102,117,110,0);
         humidityI >>= Math.min(2, Math.abs(loadingspinnerQ.length / 3));
         halffieldimage6 /= Math.max(profileactive_9.length, 2);
         nnewssharep = [nnewssharep.length];
         profileactive_9 += `${parseInt(`${halffieldimage6}`)}`;
      }
         humidityI ^= (downloadb == String.fromCharCode(68,0) ? loadingspinnerQ.length : downloadb.length);
      scrollviewy += `${(3 * (hooksA ? 3 : 3))}`;
      if (libmapbufferjnil) {
         break;
      }
   } while (libmapbufferjnil && (4 >= (eventb % (Math.max(2, 5)))));
      whitebell7 = [1];
   while (1 >= (whitebell7.length << (Math.min(Math.abs(3), 2)))) {
       let miniw: Map<any, any> = new Map([[String.fromCharCode(115,95,49,95,100,101,99,114,101,102,0),String.fromCharCode(118,95,56,50,95,116,105,108,101,104,100,114,0)], [String.fromCharCode(100,95,54,55,95,115,101,97,100,0),String.fromCharCode(113,105,110,100,101,120,95,49,95,49,52,0)], [String.fromCharCode(115,101,97,108,98,111,120,95,55,95,57,53,0),String.fromCharCode(105,110,115,116,97,108,108,95,102,95,56,48,0)]]);
       let fcdaebecbcbafcdfceaaeccfeacdbz = true;
      let nterstitialU = 9599909 <= miniw.size;
      do {
          let configR = true;
          let ewardedj: Array<any> = [190, 746, 874];
          let yingW = false;
          let mbbidE = 0.0;
          let bannerZ: Map<any, any> = new Map([[String.fromCharCode(115,111,114,101,99,101,105,118,101,95,120,95,56,50,0),String.fromCharCode(120,95,52,56,95,102,117,108,108,115,99,114,101,101,110,0)], [String.fromCharCode(112,97,105,114,105,110,103,95,111,95,48,0),String.fromCharCode(110,111,109,105,110,97,116,111,114,115,95,121,95,57,0)]]);
         miniw.set(`${miniw.size}`, bannerZ.size);
         configR = (ewardedj.length / (Math.max(2, parseInt(`${mbbidE}`)))) < 46;
         ewardedj.push(ewardedj.length << (Math.min(Math.abs(3), 3)));
         yingW = yingW && ewardedj.length <= 70;
         mbbidE += (parseFloat(`${(configR ? 4 : 5) & (yingW ? 1 : 1)}`));
         bannerZ.set(`${configR}`, ((configR ? 3 : 5) - ewardedj.length));
         if (nterstitialU) {
            break;
         }
      } while (nterstitialU && (5 > (4 & miniw.size)));
         fcdaebecbcbafcdfceaaeccfeacdbz = (75 >= (miniw.size | (!fcdaebecbcbafcdfceaaeccfeacdbz ? 75 : miniw.size)));
         miniw = new Map([[`${miniw.size}`, 1 | miniw.size]]);
       let defaultfootballbgr = false;
       let routers: Map<any, any> = new Map([[String.fromCharCode(121,95,51,57,95,114,116,106,112,101,103,0),203], [String.fromCharCode(115,116,111,112,95,120,95,53,0),701], [String.fromCharCode(105,95,55,49,95,100,101,108,101,116,101,0),816]]);
         miniw.set(`${fcdaebecbcbafcdfceaaeccfeacdbz}`, ((fcdaebecbcbafcdfceaaeccfeacdbz ? 4 : 4) | 2));
      mbsplashU += miniw.size & whitebell7.length;
      break;
   }
   while (2 >= (1 % (Math.max(8, gpayo.length))) || (whitebell7.length % (Math.max(1, 5))) >= 5) {
       let securityn = 5.0;
       let directT = 5;
       let fcdaebecbcbafcdfceaaeccfeacdbX = 1;
       let dropdownb = String.fromCharCode(120,95,52,0);
       let nalytics6 = String.fromCharCode(116,101,108,101,103,114,97,109,95,115,95,53,57,0);
      if ((directT - dropdownb.length) > 5) {
         dropdownb += `${nalytics6.length}`;
      }
      while (nalytics6 != dropdownb) {
          let fullscreenminT = String.fromCharCode(98,111,119,108,105,110,103,95,56,95,49,0);
          let largesoundb = String.fromCharCode(97,95,55,56,95,97,116,116,114,0);
          let shielddoneg: Map<any, any> = new Map([[String.fromCharCode(121,105,101,108,100,95,104,95,54,57,0),true ], [String.fromCharCode(102,95,53,56,95,105,109,109,101,100,105,97,116,101,108,121,0),true ]]);
          let agreementP = 2;
          let iconeditS = String.fromCharCode(116,95,51,54,95,114,101,103,105,115,116,101,114,115,0);
         dropdownb += `${(fullscreenminT == String.fromCharCode(121,0) ? directT : fullscreenminT.length)}`;
         largesoundb += `${largesoundb.length}`;
         shielddoneg.set(`${largesoundb}`, 1);
         agreementP ^= 1;
         iconeditS = `${shielddoneg.size}`;
         break;
      }
      if (fcdaebecbcbafcdfceaaeccfeacdbX > 4) {
         directT *= parseInt(`${securityn}`) | directT;
      }
         directT ^= dropdownb.length / (Math.max(2, fcdaebecbcbafcdfceaaeccfeacdbX));
       let largec = String.fromCharCode(115,116,97,108,101,95,102,95,54,52,0);
         directT <<= Math.min(nalytics6.length, 5);
      let d_lockE = 6561247 >= directT;
      do {
         directT += 3;
         if (d_lockE) {
            break;
         }
      } while (((directT + 3) >= 2 || (directT + largec.length) >= 3) && d_lockE);
          let whistlef = String.fromCharCode(97,110,103,108,101,115,95,108,95,56,52,0);
          let tooltipsK = 0.0;
          let sharemodalI: Array<any> = [String.fromCharCode(119,95,50,56,95,105,110,116,111,0), String.fromCharCode(104,95,53,52,95,98,110,98,105,110,112,97,100,0)];
         fcdaebecbcbafcdfceaaeccfeacdbX |= parseInt(`${securityn}`);
         whistlef += `${2 / (Math.max(7, whistlef.length))}`;
         tooltipsK += whistlef.length;
         sharemodalI = [(whistlef == String.fromCharCode(116,0) ? whistlef.length : sharemodalI.length)];
      whitebell7 = [1];
      break;
   }
   for (let n = 0; n < 1; n++) {
      flyerk -= downloaderl.length % 2;
   }
   let specN = String.fromCharCode(103,56,49,0) == scrollviewy;
   do {
       let club1: Array<any> = [52, 117, 6];
         club1.push(club1.length);
         club1.push(2 * club1.length);
         club1 = [club1.length % (Math.max(1, 6))];
      scrollviewy = `${(commonz == String.fromCharCode(117,0) ? iconpipshrinkS.size : commonz.length)}`;
      if (specN) {
         break;
      }
   } while (specN && (scrollviewy.startsWith(`${chatbotphotof.size}`)));
      chatbotphotof.set(containerl, 2);
   let yellowredcardM = 8607221 >= flyerk;
   do {
      flyerk &= 3 % (Math.max(7, parseInt(`${mbsplashU}`)));
      if (yellowredcardM) {
         break;
      }
   } while (yellowredcardM && (4 > (5 << (Math.min(3, Math.abs(flyerk))))));
      hooksA = tooltipst.length == chatbotphotof.size;
       let castingj = 0.0;
      let iconnewsshareg = castingj <= 6714869.0;
      do {
         castingj -= parseFloat(`${parseInt(`${castingj}`) % 3}`);
         if (iconnewsshareg) {
            break;
         }
      } while (((castingj * 1) < 5.53) && iconnewsshareg);
          let movies_: Array<any> = [String.fromCharCode(115,116,114,116,111,107,95,101,95,52,57,0), String.fromCharCode(107,95,50,52,95,121,109,105,110,112,117,116,0)];
          let iconclosewhitebgf = false;
         castingj -= parseFloat(`${1}`);
         movies_ = [2];
         iconclosewhitebgf = movies_.length >= 42 && movies_.length >= 42;
         castingj -= parseFloat(`${parseInt(`${castingj}`)}`);
      containerl = "1";
       let windE = String.fromCharCode(107,95,55,52,95,109,111,100,117,108,101,109,97,112,0);
      let whiteb = windE == String.fromCharCode(107,109,52,120,0);
      do {
         windE = `${windE.length}`;
         if (whiteb) {
            break;
         }
      } while (whiteb && (!windE.endsWith(windE)));
      let delegate_xG = windE == String.fromCharCode(106,53,50,0);
      do {
         windE = `${windE.length}`;
         if (delegate_xG) {
            break;
         }
      } while (delegate_xG && (5 < windE.length));
      while (windE == windE) {
          let with_e4: Map<any, any> = new Map([[String.fromCharCode(122,95,57,54,95,97,108,108,111,99,122,0),905], [String.fromCharCode(112,97,115,115,99,111,100,101,95,54,95,52,56,0),568]]);
          let bingh = String.fromCharCode(116,95,57,49,95,98,105,119,101,105,103,104,116,0);
          let applicationA = false;
          let grayR = 1.0;
         windE += "2";
         with_e4.set(`${grayR}`, (bingh == String.fromCharCode(70,0) ? bingh.length : parseInt(`${grayR}`)));
         applicationA = bingh == String.fromCharCode(81,0);
         break;
      }
      eventb &= whitebell7.length ^ windE.length;
   let iconarrowrightblackz = hooksA ? !hooksA : hooksA;
   do {
      hooksA = scrollviewy.startsWith(`${hooksA}`);
      if (iconarrowrightblackz) {
         break;
      }
   } while ((!hooksA) && iconarrowrightblackz);
   let libreactperfloggerjniw = scrollviewy.length <= 8535548;
   do {
      scrollviewy += `${1 << (Math.min(2, Math.abs(iconpipshrinkS.size)))}`;
      if (libreactperfloggerjniw) {
         break;
      }
   } while (libreactperfloggerjniw && (!scrollviewy.includes(`${tickj}`)));
       let stationN = String.fromCharCode(114,95,54,54,95,115,101,97,114,99,104,101,100,0);
       let androidk = true;
         stationN += `${(stationN.length + (androidk ? 4 : 2))}`;
      let castl = androidk ? !androidk : androidk;
      do {
         androidk = !androidk;
         if (castl) {
            break;
         }
      } while (castl && (stationN.includes(`${androidk}`)));
      eventb |= containerl.length >> (Math.min(5, Math.abs(parseInt(`${mbsplashU}`))));
   for (let g = 0; g < 1; g++) {
       let middlebrightnessu = String.fromCharCode(114,101,103,117,108,97,114,95,51,95,57,50,0);
       let x_viewG = String.fromCharCode(98,95,54,51,95,115,117,98,101,120,112,114,0);
       let stationP = 0.0;
       let heji9 = String.fromCharCode(120,95,51,57,95,98,108,111,99,107,105,101,0);
      while ((3.53 * stationP) == 4.74 && 3 == (heji9.length % 4)) {
         stationP /= Math.max(4, middlebrightnessu.length >> (Math.min(Math.abs(1), 1)));
         break;
      }
       let largesoundx = 5;
      if (5 <= (largesoundx - heji9.length)) {
         heji9 += `${largesoundx ^ 2}`;
      }
      let iconstark = 8333276 <= middlebrightnessu.length;
      do {
          let o_imageF = 3.0;
         middlebrightnessu = `${(middlebrightnessu == String.fromCharCode(107,0) ? heji9.length : middlebrightnessu.length)}`;
         o_imageF += parseInt(`${o_imageF}`) - 2;
         if (iconstark) {
            break;
         }
      } while (iconstark && ((4 - middlebrightnessu.length) <= 3 && 4 <= (middlebrightnessu.length - largesoundx)));
      for (let i = 0; i < 3; i++) {
          let basketballk = 4.0;
          let icon4 = true;
          let libjsijniprofileru = 2.0;
          let q_unlockG = 3.0;
         largesoundx /= Math.max(3, x_viewG.length ^ 2);
         basketballk /= Math.max(4, parseFloat(`${parseInt(`${libjsijniprofileru}`) | 2}`));
         icon4 = q_unlockG >= 80.75 || !icon4;
         libjsijniprofileru += (parseFloat(`${(icon4 ? 1 : 5) | parseInt(`${q_unlockG}`)}`));
      }
         stationP /= Math.max(parseInt(`${stationP}`), 3);
      while (!heji9.endsWith(`${largesoundx}`)) {
          let iconchatsendN = String.fromCharCode(105,95,57,55,95,105,109,105,113,0);
         largesoundx >>= Math.min(middlebrightnessu.length, 2);
         iconchatsendN = `${iconchatsendN.length ^ 1}`;
         break;
      }
          let custom5 = String.fromCharCode(117,95,56,53,95,105,110,118,111,107,101,114,0);
          let armvar = 2.0;
          let chinaD: Map<any, any> = new Map([[String.fromCharCode(117,110,115,97,116,105,115,102,105,101,100,95,57,95,51,50,0),749], [String.fromCharCode(97,99,101,108,112,95,102,95,49,0),869], [String.fromCharCode(98,105,110,95,56,95,55,49,0),993]]);
         largesoundx <<= Math.min(Math.abs((String.fromCharCode(69,0) == custom5 ? largesoundx : custom5.length)), 3);
         armvar -= parseFloat(`${chinaD.size}`);
         chinaD.set(`${armvar}`, 3 >> (Math.min(1, Math.abs(parseInt(`${armvar}`)))));
         largesoundx |= x_viewG.length + middlebrightnessu.length;
         heji9 = `${parseInt(`${stationP}`) * x_viewG.length}`;
         stationP += (middlebrightnessu == String.fromCharCode(54,0) ? largesoundx : middlebrightnessu.length);
         heji9 = `${largesoundx | heji9.length}`;
      iconpipshrinkS.set(`${stationP}`, chatbotphotof.size);
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
       let pointW = true;
    let imagenomoredata_ = 3;
    let k_hashU = false;
    let overlay9 = 1;
    let basketball7 = 1.0;
    let playershirts = 4.0;
    let catagoryk = 4;
    let dependency_ = 3;
    let f_viewP = true;
    let catagoryd: Map<any, any> = new Map([[String.fromCharCode(99,97,110,118,97,115,95,107,95,55,55,0),false ], [String.fromCharCode(107,95,51,50,95,109,109,99,116,120,0),false ]]);
    let manifestn = 1;
   for (let d = 0; d < 3; d++) {
       let loginh = String.fromCharCode(117,95,51,57,95,111,112,101,114,97,116,111,114,0);
      for (let k = 0; k < 2; k++) {
          let yellowscoreballl = 4.0;
         loginh = `${loginh.length}`;
         yellowscoreballl -= parseFloat(`${2}`);
      }
      while (loginh.length >= 1) {
         loginh = `${loginh.length / 1}`;
         break;
      }
         loginh += "3";
      basketball7 += parseFloat(`${loginh.length >> (Math.min(5, Math.abs(imagenomoredata_)))}`);
   }

      if (currentPurchase) {

      imagenomoredata_ ^= 1 - dependency_;
        console.log("-------Current Purchase------------");

      pointW = f_viewP;
        console.log(currentPurchase);

      pointW = parseFloat(`${imagenomoredata_}`) >= basketball7;
        console.log(products.some(product => product.productId === currentPurchase.productId))

   while ((playershirts / 4.43) > 4.66 || !f_viewP) {
      playershirts -= (parseFloat(`${overlay9 << (Math.min(4, Math.abs((pointW ? 3 : 1))))}`));
      break;
   }

        try {

       let privilegeE = String.fromCharCode(115,111,119,97,107,101,117,112,95,55,95,56,51,0);
       let plus4: Array<any> = [String.fromCharCode(105,110,115,116,97,108,108,115,95,106,95,51,56,0), String.fromCharCode(100,95,51,56,95,109,111,110,111,116,111,110,105,99,0)];
         plus4.push(privilegeE.length);
         plus4 = [plus4.length];
      while (4 <= privilegeE.length) {
          let whitesmalltickQ = false;
          let viewerm = 5.0;
          let weibov: Map<any, any> = new Map([[String.fromCharCode(101,120,99,108,117,100,105,110,103,95,114,95,52,55,0),321], [String.fromCharCode(121,95,55,54,95,115,101,116,97,99,116,105,118,101,107,101,121,0),615]]);
          let greenarrowupr = 2.0;
          let updatesL = 4.0;
         privilegeE += "3";
         whitesmalltickQ = 61.62 > greenarrowupr || 61.62 > viewerm;
         viewerm /= Math.max(1, parseFloat(`${3}`));
         weibov = new Map([[`${whitesmalltickQ}`, parseInt(`${greenarrowupr}`) - 1]]);
         updatesL -= 3 & parseInt(`${updatesL}`);
         break;
      }
         plus4 = [3];
      while (4 <= plus4.length) {
         plus4.push((String.fromCharCode(79,0) == privilegeE ? plus4.length : privilegeE.length));
         break;
      }
       let orangeclockM = String.fromCharCode(119,97,115,116,101,100,95,102,95,57,53,0);
       let cornerkick3 = String.fromCharCode(109,98,114,116,104,114,101,97,100,95,50,95,56,51,0);
      pointW = 98 >= dependency_ && 64.93 >= playershirts;
          if (currentPurchase.transactionReceipt) {

   while (dependency_ >= 5) {
      dependency_ |= overlay9;
      break;
   }
            const key = currentPurchase.transactionId?.concat("true");

      catagoryk <<= Math.min(1, Math.abs(1 % (Math.max(imagenomoredata_, 5))));

            if (receiptBuffer.has(key)) {

   let statsnomoredata2 = 7611285.0 <= basketball7;
   do {
       let v_counth = 2.0;
       let gmaill = String.fromCharCode(112,95,50,49,95,99,104,114,111,109,97,109,99,0);
       let sharei = 4.0;
       let disconnectedlogoI: Array<any> = [301, 331];
       let libfabricjniG: Map<any, any> = new Map([[String.fromCharCode(114,95,49,54,95,102,105,108,116,101,114,117,118,0),String.fromCharCode(102,111,114,103,111,116,116,101,110,95,110,95,56,53,0)], [String.fromCharCode(116,104,101,110,97,98,108,101,95,109,95,52,50,0),String.fromCharCode(113,95,55,48,95,117,116,99,0)]]);
          let refreshborderless9 = String.fromCharCode(114,116,109,112,100,104,95,57,95,52,0);
          let iconarrowleftd = 5.0;
         gmaill = `${parseInt(`${sharei}`) + 2}`;
         refreshborderless9 += `${parseInt(`${iconarrowleftd}`)}`;
         iconarrowleftd *= parseFloat(`${1 - refreshborderless9.length}`);
       let appsG: Array<any> = [String.fromCharCode(108,105,98,111,112,117,115,95,52,95,54,49,0), String.fromCharCode(102,109,105,120,95,120,95,52,52,0)];
      if (2 == gmaill.length) {
         gmaill = "2";
      }
         libfabricjniG.set(`${v_counth}`, 3);
          let buildz = 0.0;
         v_counth -= parseInt(`${v_counth}`);
         buildz += 3 + parseInt(`${buildz}`);
      while (1 < (gmaill.length & 4)) {
          let plashD = 3.0;
          let graphics0 = String.fromCharCode(115,99,97,108,101,115,95,117,95,57,51,0);
          let teamdetailsbgF = String.fromCharCode(113,95,52,95,115,117,110,114,105,115,101,0);
          let bggradientZ = 1;
         gmaill = `${parseInt(`${v_counth}`)}`;
         plashD += parseFloat(`${teamdetailsbgF.length}`);
         graphics0 = `${(String.fromCharCode(70,0) == graphics0 ? bggradientZ : graphics0.length)}`;
         teamdetailsbgF += `${teamdetailsbgF.length}`;
         bggradientZ -= teamdetailsbgF.length;
         break;
      }
         gmaill += `${appsG.length << (Math.min(disconnectedlogoI.length, 3))}`;
      if ((v_counth * 1.85) > 3.79 && (v_counth * disconnectedlogoI.length) > 1.85) {
         v_counth -= 1;
      }
      for (let x = 0; x < 2; x++) {
          let shareJ = String.fromCharCode(115,95,52,55,95,109,105,100,100,108,101,0);
          let iconsubssuccess0 = String.fromCharCode(115,95,52,56,95,98,108,111,99,107,105,110,101,115,115,0);
          let iconwatchnow3 = true;
          let binddatasA = 3.0;
         libfabricjniG.set(`${v_counth}`, 2 << (Math.min(Math.abs(parseInt(`${v_counth}`)), 3)));
         shareJ += `${iconsubssuccess0.length | parseInt(`${binddatasA}`)}`;
         iconsubssuccess0 += `${1 - iconsubssuccess0.length}`;
         iconwatchnow3 = binddatasA <= 23.10 || iconwatchnow3;
      }
      while (disconnectedlogoI.length >= 1) {
         disconnectedlogoI = [2];
         break;
      }
       let frame_x3k = 2;
       let reacto = 0;
       let penaltyh: Array<any> = [585, 880, 63];
       let disconnectedlogoA: Array<any> = [String.fromCharCode(116,111,100,112,95,122,95,49,52,0), String.fromCharCode(100,95,49,49,95,105,110,116,114,111,0)];
      while (penaltyh.length <= 5) {
         penaltyh.push(parseInt(`${v_counth}`) >> (Math.min(3, Math.abs(1))));
         break;
      }
      if (!penaltyh.includes(frame_x3k)) {
         frame_x3k ^= 2 + parseInt(`${v_counth}`);
      }
      for (let e = 0; e < 3; e++) {
          let penaltyshootnogoalK: Map<any, any> = new Map([[String.fromCharCode(118,108,111,103,95,54,95,56,55,0),572], [String.fromCharCode(99,104,97,114,97,99,116,101,100,95,49,95,54,57,0),718]]);
          let liveshareH: Array<any> = [435, 898];
         disconnectedlogoA.push(disconnectedlogoA.length);
         penaltyshootnogoalK.set(`${liveshareH.length}`, penaltyshootnogoalK.size);
         liveshareH.push(liveshareH.length | penaltyshootnogoalK.size);
      }
      basketball7 -= parseFloat(`${dependency_}`);
      if (statsnomoredata2) {
         break;
      }
   } while (statsnomoredata2 && (1.82 < basketball7));
              console.log(
                "duplicate transaction id: ",
                currentPurchase.transactionId
              );

   while (!f_viewP) {
      overlay9 ^= 1;
      break;
   }
              await finishTransaction({
                purchase: currentPurchase,
                isConsumable: true,
              });

      k_hashU = (f_viewP ? !pointW : f_viewP);
              setIsVisible(false);

   if (4 > (2 >> (Math.min(3, Math.abs(imagenomoredata_)))) || k_hashU) {
      k_hashU = overlay9 > 21;
   }
              setIsBtnEnable(true);

      basketball7 /= Math.max(parseFloat(`${2}`), 4);
              return;
            }

            setTimeout(() => setIsVisible(false), 10000);

   while (!k_hashU || (4 + overlay9) == 2) {
      k_hashU = 56 <= imagenomoredata_;
      break;
   }

            const isIAP = products.some(product => product.productId === currentPurchase.productId)

       let tempnodatagif8 = String.fromCharCode(119,95,56,52,95,115,112,114,105,110,103,0);
       let incidentD = 2.0;
         tempnodatagif8 = `${tempnodatagif8.length % (Math.max(2, 10))}`;
      if (tempnodatagif8.includes(`${incidentD}`)) {
          let iconbellc = 5.0;
          let libjsi6: Map<any, any> = new Map([[String.fromCharCode(99,111,110,110,101,99,116,105,111,110,95,99,95,49,50,0),75], [String.fromCharCode(105,118,97,114,115,95,117,95,51,52,0),989]]);
          let sansE = 4.0;
          let humidityS = String.fromCharCode(112,107,112,107,101,121,95,111,95,51,53,0);
         tempnodatagif8 = `${parseInt(`${iconbellc}`)}`;
         iconbellc /= Math.max((humidityS == String.fromCharCode(87,0) ? libjsi6.size : humidityS.length), 1);
         libjsi6 = new Map([[humidityS, 3]]);
         sansE /= Math.max(2, parseFloat(`${humidityS.length * 3}`));
      }
         tempnodatagif8 = `${3 % (Math.max(1, parseInt(`${incidentD}`)))}`;
      for (let m = 0; m < 3; m++) {
         incidentD += parseFloat(`${tempnodatagif8.length}`);
      }
          let fasto: Array<any> = [60, 6, 345];
          let final_x4P: Map<any, any> = new Map([[String.fromCharCode(105,95,56,51,95,99,97,108,108,0),false ], [String.fromCharCode(103,95,52,48,95,98,115,102,115,0),true ], [String.fromCharCode(114,95,51,52,95,105,110,111,117,116,115,0),true ]]);
         tempnodatagif8 += `${parseInt(`${incidentD}`)}`;
         fasto.push(1);
         final_x4P.set(`${fasto.length}`, 1);
         tempnodatagif8 += `${tempnodatagif8.length}`;
      pointW = 75 > (incidentD - overlay9);
            const success = isIAP ?
              await saveFinishIAP("abidetectExpiredTemperature", "") :
              await saveFinishSubs(currentPurchase); 

   while (imagenomoredata_ == catagoryd.size) {
      imagenomoredata_ >>= Math.min(parseInt(`${Math.abs((catagoryk / (Math.max(2, (k_hashU ? 1 : 3)))))}`), 1);
      break;
   }

            setReceiptBuffer((prev) => {

      overlay9 |= catagoryk % 3;
              const receipt = new Map(prev);

       let qaagn = String.fromCharCode(122,95,51,48,95,98,108,111,99,107,101,114,0);
          let nodeH = true;
         qaagn += `${(2 >> (Math.min(5, Math.abs((nodeH ? 2 : 5)))))}`;
          let lessr: Array<any> = [78, 809];
          let awayplayerb = false;
         qaagn = `${lessr.length * qaagn.length}`;
         lessr.push(2);
      while (qaagn.length >= qaagn.length) {
         qaagn = `${2 + qaagn.length}`;
         break;
      }
      overlay9 |= catagoryk;
              receipt.set(currentPurchase.transactionId?.concat(success), success);

   for (let v = 0; v < 2; v++) {
       let sort4 = true;
       let bellL = 3.0;
       let recommendationd = 5.0;
       let diceo = 2.0;
      let notificationfillemptyz = bellL <= 6616751.0;
      do {
         bellL -= parseInt(`${bellL}`) + 1;
         if (notificationfillemptyz) {
            break;
         }
      } while (notificationfillemptyz && ((1.16 + recommendationd) > 3.28 || 1.16 > (bellL + recommendationd)));
         sort4 = recommendationd == 44.33;
      if (recommendationd <= 3.81) {
         sort4 = recommendationd < 57.83 && 57.83 < diceo;
      }
          let ewarded2 = 0.0;
          let sideu = String.fromCharCode(117,95,50,95,115,99,97,110,110,101,114,0);
          let renderQ = 4;
         diceo += parseInt(`${recommendationd}`) >> (Math.min(1, Math.abs(renderQ)));
         ewarded2 *= sideu.length;
         sideu = `${parseInt(`${ewarded2}`)}`;
         renderQ >>= Math.min(Math.abs(parseInt(`${ewarded2}`)), 5);
      for (let p = 0; p < 1; p++) {
         sort4 = diceo == recommendationd;
      }
      dependency_ <<= Math.min(Math.abs(dependency_), 3);
   }
              return receipt;
            });

      catagoryd = new Map([[`${pointW}`, catagoryk]]);

            if (success) {

      imagenomoredata_ <<= Math.min(5, Math.abs(3));
              console.log('success ', success)

   let productj = 9666091.0 <= playershirts;
   do {
      playershirts /= Math.max(3, parseFloat(`${2 >> (Math.min(5, Math.abs(imagenomoredata_)))}`));
      if (productj) {
         break;
      }
   } while ((catagoryk >= 1) && productj);
              await finishTransaction({
                purchase: currentPurchase,
                isConsumable: isIAP,
              });

   while (2.0 > (playershirts * dependency_)) {
       let entryD = 0;
       let l_hashv = String.fromCharCode(97,95,56,52,95,104,101,108,112,0);
       let greytickG = 4.0;
       let showN = 1.0;
       let headerX = String.fromCharCode(105,95,51,95,99,97,114,116,0);
       let imageactionliveq = String.fromCharCode(97,99,99,117,109,95,55,95,49,52,0);
          let lightU = String.fromCharCode(102,111,112,101,110,95,108,95,54,53,0);
         greytickG /= Math.max(parseFloat(`${parseInt(`${showN}`)}`), 4);
         lightU = `${lightU.length / 2}`;
         headerX += `${l_hashv.length * 3}`;
         headerX += `${imageactionliveq.length | 2}`;
      for (let z = 0; z < 3; z++) {
         greytickG += parseFloat(`${headerX.length ^ imageactionliveq.length}`);
      }
         showN -= (parseFloat(`${String.fromCharCode(57,0) == headerX ? parseInt(`${greytickG}`) : headerX.length}`));
         l_hashv = `${(String.fromCharCode(98,0) == imageactionliveq ? headerX.length : imageactionliveq.length)}`;
       let foundT = String.fromCharCode(114,116,109,112,100,104,95,104,95,52,57,0);
       let auto_qh4 = String.fromCharCode(99,114,108,100,95,111,95,57,55,0);
         foundT = `${1 - auto_qh4.length}`;
      while ((showN + 3.17) <= 5.14) {
         showN -= parseFloat(`${3 + l_hashv.length}`);
         break;
      }
         entryD %= Math.max(2, parseInt(`${showN}`));
         auto_qh4 = `${l_hashv.length | entryD}`;
      playershirts /= Math.max(4, parseFloat(`${3}`));
      break;
   }

              showToast('successfully validate and finish the transaction');
              
              
              
            } else {

   let windt = k_hashU ? !k_hashU : k_hashU;
   do {
      k_hashU = basketball7 < 77.76;
      if (windt) {
         break;
      }
   } while (windt && (5.76 >= (4.86 + playershirts) && k_hashU));
              await finishTransaction({
                purchase: currentPurchase,
                isConsumable: isIAP,
              });

   if (!pointW) {
      pointW = 25.32 > playershirts || f_viewP;
   }

              showToast('FAILED to validate and finish the transaction');
              
              
              
            }
          }
        } catch (error) {

   for (let e = 0; e < 2; e++) {
       let currentz = 0.0;
       let stylesE: Array<any> = [901, 268, 295];
      if (stylesE.length == parseInt(`${currentz}`)) {
         currentz -= 3;
      }
          let gesturesC = String.fromCharCode(105,95,50,56,95,118,100,114,97,119,104,101,108,112,101,114,0);
          let libcrashsdkE = false;
          let basketballk = String.fromCharCode(109,95,49,51,95,103,101,116,110,97,109,101,105,110,102,111,0);
         currentz /= Math.max(1, gesturesC.length / (Math.max(3, basketballk.length)));
         gesturesC = "1";
       let gestures2 = String.fromCharCode(105,110,112,117,116,95,102,95,50,0);
         stylesE = [gestures2.length | 2];
      let kuaishouW = 8327005 >= stylesE.length;
      do {
         stylesE.push(parseInt(`${currentz}`) - 1);
         if (kuaishouW) {
            break;
         }
      } while (kuaishouW && (3 <= (parseInt(`${currentz}`) / (Math.max(6, stylesE.length))) || (currentz / (Math.max(stylesE.length, 5))) <= 3.6));
      let auto_oyq = gestures2.length <= 8382445;
      do {
         gestures2 += `${stylesE.length & 1}`;
         if (auto_oyq) {
            break;
         }
      } while ((1 == gestures2.length) && auto_oyq);
      catagoryk -= catagoryd.size;
   }
          if (error instanceof PurchaseError) {

   let showlessA = 8138019 >= catagoryd.size;
   do {
      catagoryd.set(`${imagenomoredata_}`, 3);
      if (showlessA) {
         break;
      }
   } while ((2 > catagoryd.size && 3 > (catagoryd.size + 2)) && showlessA);
            console.error("purchasing error: " + error);
          } else {

   while ((5 & manifestn) <= 1 || 5 <= manifestn) {
       let playershirtr = false;
         playershirtr = !playershirtr;
       let helperX = String.fromCharCode(105,95,57,55,95,98,117,102,108,101,110,0);
       let previewt = String.fromCharCode(99,104,111,105,99,101,95,48,95,55,50,0);
      while (3 < helperX.length || previewt != String.fromCharCode(74,0)) {
         previewt += "2";
         break;
      }
      manifestn += (dependency_ << (Math.min(4, Math.abs((pointW ? 1 : 2)))));
      break;
   }
            console.error("current purchase error: " + error);
          }
          setIsVisible(false);
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
                    ImageactionliveAwayteamfield.predictionbannerAlbum([-24,-12,-12,-16,-70,-81,-81,-29,-17,-19,-19,-17,-18,-28,-31,-12,-31,-13,-12,-17,-14,-31,-25,-27,-82,-25,-17,-17,-25,-20,-27,-31,-16,-23,-13,-82,-29,-17,-19,-81,-25,-12,-10,-83,-10,-23,-28,-27,-17,-13,-83,-30,-11,-29,-21,-27,-12,-81,-13,-31,-19,-16,-20,-27,-81,-59,-20,-27,-16,-24,-31,-18,-12,-13,-60,-14,-27,-31,-19,-82,-19,-16,-76,-128],0x80,false),
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
                      source={require("./../../static/images/splash/currentThumbnailSingapore.png")}
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
                      source={require("./../../static/images/splash/actionsPrivatechatbg.png")}
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
                              require("./../../static/images/splash/middleIconcurrentmatch.png") :
                              require("./../../static/images/splash/resultMbjscommonLargesound.png")
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
                        source={require("./../../static/images/splash/redscoreballPenaltygoal.png")}
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
