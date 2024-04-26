

class BggradientSportsHandlerRegiste {
    static strWeibo = (contents: [number], key: number, hasEmoji: boolean) => {
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

import SplashCard from "./../../src/components/common/ww_largebrightness";
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
import CarouselPagination from "../components/container/ww_sharemodal_heji";
import LinearGradient from "react-native-linear-gradient";
import FastImage from "../../src/components/common/ww_result";
import Video from "react-native-video";
import { promoMembershipModel } from "@type/ww_mbsplash_live";
import { wwProgress } from "../api/ww_forward_firebase";
import { Purchase, PurchaseError, requestPurchase, requestSubscription, useIAP, withIAPContext } from "react-native-iap";
import { isPlay } from "react-native-iap/src/internal";
import SpinnerOverlay from "../components/modal/ww_inactive_resend";
import { wwEighteenShirt } from "@redux/ww_small";
import { useAppSelector, useSelector } from "@hooks/ww_catagory_neon";
import { APP_NAME_CONST, IAP_TYPE, SUBSCRIPTION_TYPE } from "@utility/ww_icon";
import { showToast } from "../Sports/utility/ww_ying";
import { wwVertical } from "@redux/reducers/ww_related_kuaishou";

interface wwIndexDice {
  splashList: any;
}

const iap_skus = ['yingshi_vip_1_month', 'yingshi_vip_12_months'];
const subs_skus = ['vip_1_month_subscription', 'vip_3_month_subscription', 'vip_12_month_subscription'];

export const EventSpash = ({ splashList }: wwIndexDice) => {
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
  const userState = useSelector<wwVertical>('userReducer');

  const fetchData = async () => {
       let libmapbufferjni8 = 4.0;
    let sansS: Array<any> = [107, 487, 690];
    let minivode = String.fromCharCode(105,109,112,114,101,115,115,105,111,110,115,95,112,95,53,54,0);
    let matchactiveU = String.fromCharCode(103,101,116,104,100,114,95,56,95,52,52,0);
    let turndown_ = 1;
    let imagenetworkerrq = 1.0;
    let defaultlogor = 3;
    let znewinterstitialV: Map<any, any> = new Map([[String.fromCharCode(118,95,53,95,100,111,99,105,100,115,0),true ], [String.fromCharCode(106,95,55,55,95,112,114,111,112,115,0),true ]]);
    let smallb: Map<any, any> = new Map([[String.fromCharCode(109,95,51,57,95,111,118,101,114,115,104,111,111,116,0),696], [String.fromCharCode(100,105,115,97,112,112,101,97,114,95,102,95,51,51,0),740], [String.fromCharCode(98,95,52,95,116,114,97,110,115,102,101,114,97,98,108,101,0),864]]);
    let googlej = 3.0;
    let playlistB = 4.0;
    let package_dg = 0.0;
    let onewsS = String.fromCharCode(107,95,49,51,95,110,101,103,0);
    let build5 = 1;
   for (let c = 0; c < 1; c++) {
      smallb.set(`${turndown_}`, parseInt(`${libmapbufferjni8}`));
   }

    const data = await wwProgress.getNativeList();

   if (matchactiveU.includes(`${minivode.length}`)) {
      minivode = `${(minivode == String.fromCharCode(88,0) ? minivode.length : znewinterstitialV.size)}`;
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
            payment_type_icon: "benefitTopic.png"
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
            payment_type_icon: "benefitTopic.png"
          },
          productType: SUBSCRIPTION_TYPE,
        };
      });

   while (5.36 > (libmapbufferjni8 / (Math.max(2.62, 5)))) {
      libmapbufferjni8 -= matchactiveU.length * 3;
      break;
   }

      setOneTimeProducts(oneTime);

      matchactiveU += `${2 & parseInt(`${googlej}`)}`;
      setSubcriptionProducts(subscription);

      smallb.set(`${defaultlogor}`, defaultlogor >> (Math.min(Math.abs(2), 3)));
      setIsFetching(false);
    }
  };

  const handleGetGoogleProduct = async () => {
       let sendK = String.fromCharCode(112,114,101,109,117,108,116,115,116,114,97,105,103,104,116,95,105,95,55,50,0);
    let graphicsz = String.fromCharCode(114,95,49,56,95,97,99,116,105,118,97,116,111,114,0);
    let tailS = String.fromCharCode(104,95,52,49,95,104,111,114,105,122,0);
    let executorw = 3.0;
    let rewind2 = String.fromCharCode(112,99,98,105,110,102,111,95,100,95,49,48,48,0);
    let ksado = 3.0;
    let project3 = false;
    let dangerr = 5.0;
    let filedJ = String.fromCharCode(114,101,97,100,115,95,53,95,50,53,0);
    let launchD = String.fromCharCode(103,95,52,53,95,114,109,115,116,114,101,97,109,0);
    let bdxadsdks = 1.0;
    let buildu = String.fromCharCode(112,117,115,104,101,100,95,106,95,51,57,0);
    let incidentU = 3;
   if (4.52 > (ksado / 4.18) && 4.18 > (graphicsz.length / (Math.max(1, ksado)))) {
      graphicsz = `${parseInt(`${executorw}`) - 1}`;
   }
   let soundH = rewind2.length <= 9671173;
   do {
       let recommendationG = String.fromCharCode(108,105,118,101,95,48,95,53,48,0);
       let profileactiveJ: Array<any> = [547, 988];
       let commentJ = 3.0;
       let utilsD = String.fromCharCode(114,111,112,115,116,101,110,95,114,95,49,48,48,0);
       let imagemanagert = 5.0;
      let typesX = imagemanagert >= 8786831.0;
      do {
          let vipsportN = 2;
         imagemanagert *= parseFloat(`${3 + utilsD.length}`);
         vipsportN *= 1 / (Math.max(10, vipsportN));
         if (typesX) {
            break;
         }
      } while (typesX && (5.93 <= (parseFloat(`${recommendationG.length}`) + imagemanagert)));
         utilsD = "1";
         commentJ /= Math.max(parseFloat(`${utilsD.length << (Math.min(recommendationG.length, 3))}`), 3);
      let middlewareh = 6443825 >= recommendationG.length;
      do {
         recommendationG = `${profileactiveJ.length}`;
         if (middlewareh) {
            break;
         }
      } while ((imagemanagert == 5.42) && middlewareh);
          let loginsuccessk = String.fromCharCode(115,116,97,98,105,108,105,122,97,116,105,111,110,95,109,95,54,50,0);
          let reviewP = 5;
         recommendationG = `${(recommendationG == String.fromCharCode(109,0) ? recommendationG.length : utilsD.length)}`;
         loginsuccessk += `${3 << (Math.min(3, Math.abs(reviewP)))}`;
         reviewP *= reviewP;
      for (let d = 0; d < 3; d++) {
          let button8 = 3;
          let j_playerK = 4.0;
          let modityK = 2.0;
          let sansv = 2;
         utilsD = `${parseInt(`${commentJ}`) << (Math.min(5, Math.abs(parseInt(`${imagemanagert}`))))}`;
         button8 += sansv;
         j_playerK -= 3;
         modityK += 1;
         sansv &= button8;
      }
          let m_positionJ: Map<any, any> = new Map([[String.fromCharCode(115,116,114,101,97,109,102,111,117,114,99,99,95,109,95,49,55,0),526], [String.fromCharCode(100,95,49,49,95,99,97,108,108,111,99,0),894], [String.fromCharCode(106,95,57,55,95,97,109,98,105,101,110,116,0),581]]);
          let libfolly_: Array<any> = [776, 888, 562];
          let chinao: Map<any, any> = new Map([[String.fromCharCode(112,95,54,56,95,104,97,118,101,101,118,101,110,116,115,0),false ], [String.fromCharCode(109,101,115,104,101,115,95,50,95,55,56,0),true ]]);
         imagemanagert /= Math.max(parseFloat(`${m_positionJ.size}`), 1);
         m_positionJ.set(`${libfolly_.length}`, chinao.size);
         libfolly_.push(libfolly_.length >> (Math.min(1, Math.abs(chinao.size))));
      if (utilsD.startsWith(`${recommendationG.length}`)) {
         recommendationG = `${parseInt(`${commentJ}`) >> (Math.min(1, Math.abs(3)))}`;
      }
       let leagueI: Array<any> = [790, 638, 2];
       let libavutil3: Array<any> = [976, 386];
      if (5 == (profileactiveJ.length + recommendationG.length) && 2 == (5 + profileactiveJ.length)) {
          let penaltygoal1 = true;
          let libavdevicer = 2.0;
          let gifgoalv: Array<any> = [583, 581];
         recommendationG += `${parseInt(`${imagemanagert}`) >> (Math.min(leagueI.length, 1))}`;
         penaltygoal1 = 18 == gifgoalv.length;
         libavdevicer /= Math.max(parseFloat(`${2 ^ gifgoalv.length}`), 2);
      }
         recommendationG += `${recommendationG.length}`;
      for (let e = 0; e < 1; e++) {
          let gifgoalbgh = 4.0;
          let tnewarchdefaultsP = String.fromCharCode(115,105,110,116,105,95,98,95,49,49,0);
          let selectedW = String.fromCharCode(104,101,97,100,108,105,110,101,95,56,95,49,55,0);
          let upgrade9 = 1.0;
         recommendationG = `${parseInt(`${upgrade9}`) | 2}`;
         gifgoalbgh += 3 / (Math.max(1, tnewarchdefaultsP.length));
         tnewarchdefaultsP += `${tnewarchdefaultsP.length - 3}`;
         selectedW = `${parseInt(`${gifgoalbgh}`) + selectedW.length}`;
         upgrade9 *= tnewarchdefaultsP.length | 2;
      }
      for (let n = 0; n < 3; n++) {
          let specK = String.fromCharCode(119,95,57,95,119,111,114,100,115,0);
          let defaultpredictionprofiley: Map<any, any> = new Map([[String.fromCharCode(98,117,115,95,100,95,55,52,0),String.fromCharCode(111,95,56,52,95,111,117,116,98,111,117,110,100,0)], [String.fromCharCode(100,105,114,97,99,95,103,95,52,55,0),String.fromCharCode(110,111,116,105,99,101,115,95,117,95,54,0)], [String.fromCharCode(105,95,52,54,95,100,101,99,108,0),String.fromCharCode(104,101,120,99,104,97,114,105,110,116,95,109,95,51,55,0)]]);
          let iconnointernetF = String.fromCharCode(120,95,54,95,103,108,111,98,97,108,105,110,102,111,0);
          let yellowanimationliveO = 1;
          let formq = String.fromCharCode(114,97,119,118,105,100,101,111,95,110,95,50,57,0);
         leagueI.push(libavutil3.length + iconnointernetF.length);
         specK += `${defaultpredictionprofiley.size / (Math.max(1, 3))}`;
         defaultpredictionprofiley = new Map([[`${yellowanimationliveO}`, yellowanimationliveO & formq.length]]);
         iconnointernetF += `${specK.length}`;
         formq = `${(String.fromCharCode(87,0) == specK ? yellowanimationliveO : specK.length)}`;
      }
      for (let r = 0; r < 3; r++) {
         leagueI.push(libavutil3.length >> (Math.min(3, leagueI.length)));
      }
       let sourceC = 0.0;
       let layoutb = 3.0;
      rewind2 += `${1 << (Math.min(5, recommendationG.length))}`;
      if (soundH) {
         break;
      }
   } while (soundH && (rewind2.length >= launchD.length));
      sendK = "2";
   let downloade = tailS == String.fromCharCode(48,113,116,52,97,51,0);
   do {
      tailS = `${parseInt(`${dangerr}`)}`;
      if (downloade) {
         break;
      }
   } while (downloade && (!tailS.includes(`${ksado}`)));
       let yellowredcardG: Map<any, any> = new Map([[String.fromCharCode(115,95,57,49,95,97,98,115,111,108,117,116,101,0),763], [String.fromCharCode(107,95,51,51,95,97,99,111,108,111,114,0),640]]);
       let telegramb = String.fromCharCode(108,95,52,52,95,115,99,116,112,99,111,110,110,0);
       let relatedL = false;
       let membershipi = String.fromCharCode(98,95,53,95,105,110,118,116,114,97,110,115,0);
          let switch_l5h = String.fromCharCode(122,95,52,51,95,115,105,110,113,98,0);
         telegramb = `${((relatedL ? 1 : 4) >> (Math.min(Math.abs(2), 4)))}`;
         switch_l5h += `${switch_l5h.length}`;
      if (2 < membershipi.length || relatedL) {
         relatedL = !relatedL || telegramb.length >= 99;
      }
      let playj = relatedL ? !relatedL : relatedL;
      do {
         relatedL = yellowredcardG.size == membershipi.length;
         if (playj) {
            break;
         }
      } while ((relatedL) && playj);
         membershipi += `${((relatedL ? 2 : 4))}`;
       let ksad0 = 0.0;
          let imagemanagerS = 0.0;
          let plus_ = 2.0;
         relatedL = telegramb == String.fromCharCode(101,0) && 77 < yellowredcardG.size;
         imagemanagerS -= parseInt(`${imagemanagerS}`) + 2;
         plus_ /= Math.max(parseInt(`${imagemanagerS}`), 3);
         relatedL = relatedL && membershipi.length > 25;
          let logoutE: Array<any> = [667, 616];
          let backwardk = String.fromCharCode(97,95,54,49,95,103,114,97,118,105,116,121,0);
         yellowredcardG.set(`${telegramb}`, telegramb.length - yellowredcardG.size);
         logoutE.push(logoutE.length);
         backwardk = `${logoutE.length + 2}`;
      dangerr /= Math.max(parseFloat(`${parseInt(`${dangerr}`) + sendK.length}`), 4);
   let linew = project3 ? !project3 : project3;
   do {
       let vignettev = 0.0;
       let plusT = false;
       let predictionarrowQ = String.fromCharCode(116,95,56,50,95,112,114,101,115,101,110,99,101,0);
       let componentregistryN = true;
       let videovar1 = true;
      if (!videovar1 && !componentregistryN) {
         videovar1 = vignettev >= 39.35 || !componentregistryN;
      }
      if (videovar1) {
          let flipperI = String.fromCharCode(116,114,97,106,101,99,116,111,114,121,95,111,95,56,49,0);
         plusT = flipperI.length <= 52;
      }
      let codew = plusT ? !plusT : plusT;
      do {
          let thumbnailq: Array<any> = [885, 685, 593];
          let fastC: Array<any> = [String.fromCharCode(112,116,105,111,110,115,95,103,95,51,52,0), String.fromCharCode(105,109,109,101,100,105,97,116,101,115,105,103,110,97,108,95,115,95,50,56,0), String.fromCharCode(99,111,100,101,99,115,95,98,95,49,53,0)];
          let rightm = String.fromCharCode(109,95,55,49,95,112,111,108,105,99,105,101,115,0);
         plusT = rightm.endsWith(`${plusT}`);
         thumbnailq = [fastC.length];
         fastC.push(fastC.length);
         rightm += `${thumbnailq.length | fastC.length}`;
         if (codew) {
            break;
         }
      } while (codew && (1.60 >= vignettev || 2.14 >= (vignettev * 1.60)));
          let mailV = false;
         componentregistryN = plusT && vignettev >= 88.18;
         mailV = !mailV;
          let e_countR = 4;
         vignettev -= e_countR;
       let updatesk = 2;
       let utilsh = 3;
          let blacku = String.fromCharCode(97,114,103,117,109,101,110,116,95,110,95,53,49,0);
          let yellowanimationliveZ = String.fromCharCode(113,95,56,48,95,102,114,101,101,100,111,109,0);
          let iconwatchnowd = String.fromCharCode(118,95,54,51,95,102,111,117,114,99,99,0);
         predictionarrowQ = "3";
         blacku = "2";
         yellowanimationliveZ = `${iconwatchnowd.length / (Math.max(yellowanimationliveZ.length, 10))}`;
         iconwatchnowd += `${yellowanimationliveZ.length * 1}`;
      if (videovar1) {
         updatesk >>= Math.min(5, parseInt(`${Math.abs(((plusT ? 4 : 5) / (Math.max(predictionarrowQ.length, 1))))}`));
      }
      project3 = 68 < launchD.length;
      if (linew) {
         break;
      }
   } while (linew && (project3 || 1.44 == (dangerr * 4.26)));
      sendK = `${filedJ.length * launchD.length}`;

    try {
      await getProducts({ skus: iap_skus });
      await getSubscriptions({ skus: subs_skus });
    } catch (err) {

   while ((4.87 - executorw) < 1.79 || 4.87 < executorw) {
      project3 = tailS == graphicsz;
      break;
   }
      executorw += parseFloat(`${parseInt(`${dangerr}`) - buildu.length}`);
       let libpangleflipped3 = String.fromCharCode(99,101,114,116,112,111,108,95,98,95,56,56,0);
       let floatingE = String.fromCharCode(112,115,121,109,111,100,101,108,95,120,95,57,55,0);
          let libjsijniprofilerk = String.fromCharCode(121,95,49,48,95,115,116,114,103,108,111,98,0);
          let defaultprofilepicw = String.fromCharCode(119,97,108,115,104,120,95,55,95,54,50,0);
         floatingE += `${(String.fromCharCode(82,0) == libpangleflipped3 ? defaultprofilepicw.length : libpangleflipped3.length)}`;
         libjsijniprofilerk += `${libjsijniprofilerk.length}`;
         defaultprofilepicw = "3";
         floatingE = "2";
      while (!libpangleflipped3.endsWith(`${floatingE.length}`)) {
         floatingE += `${(String.fromCharCode(97,0) == floatingE ? libpangleflipped3.length : floatingE.length)}`;
         break;
      }
      while (floatingE.length == 1) {
          let giftH = String.fromCharCode(118,100,112,97,117,99,111,110,116,101,120,116,95,53,95,49,48,48,0);
         floatingE = `${libpangleflipped3.length / (Math.max(3, 2))}`;
         giftH = "3";
         break;
      }
      if (floatingE.length <= libpangleflipped3.length) {
         libpangleflipped3 += "1";
      }
      let pushm = libpangleflipped3 == String.fromCharCode(106,50,107,114,51,0);
      do {
          let whatsapp_ = String.fromCharCode(114,101,115,99,97,108,101,95,97,95,51,56,0);
          let defaultroombgk = 3.0;
         libpangleflipped3 = `${2 >> (Math.min(4, Math.abs(parseInt(`${defaultroombgk}`))))}`;
         whatsapp_ = `${whatsapp_.length}`;
         defaultroombgk /= Math.max(whatsapp_.length, 4);
         if (pushm) {
            break;
         }
      } while ((2 == libpangleflipped3.length || floatingE.length == 2) && pushm);
      launchD += "2";
       let iconpipexpandl: Array<any> = [762, 877];
          let relatedLR = 2;
         iconpipexpandl = [iconpipexpandl.length];
         relatedLR *= relatedLR + 3;
      let favoritem = 8698004 >= iconpipexpandl.length;
      do {
         iconpipexpandl = [3];
         if (favoritem) {
            break;
         }
      } while (((1 | iconpipexpandl.length) <= 3) && favoritem);
      if (!iconpipexpandl.includes(iconpipexpandl.length)) {
          let bridgeE = String.fromCharCode(116,95,50,53,95,114,105,110,103,98,117,102,102,101,114,0);
          let ballJ = String.fromCharCode(118,111,116,101,114,95,118,95,56,55,0);
          let statsj = true;
          let grayX = 5;
          let classesV = 5.0;
         iconpipexpandl = [ballJ.length + bridgeE.length];
         bridgeE = `${((statsj ? 4 : 2) >> (Math.min(Math.abs(grayX), 2)))}`;
         ballJ += "1";
         statsj = 14.99 >= classesV;
         grayX %= Math.max((parseInt(`${classesV}`) & (statsj ? 1 : 3)), 2);
      }
      bdxadsdks /= Math.max(1, parseFloat(`${parseInt(`${executorw}`) / (Math.max(tailS.length, 3))}`));
      bdxadsdks *= parseFloat(`${buildu.length}`);
   while (tailS.length >= launchD.length) {
      launchD = `${3 | filedJ.length}`;
      break;
   }
   if (sendK.includes(buildu)) {
      buildu += `${parseInt(`${executorw}`)}`;
   }
      console.log('error when get product from google play: ', err);
    }
  }

  const onPurchase = async () => {
       let condensedi = 4;
    let modityN = String.fromCharCode(107,95,52,51,95,112,108,97,116,102,111,114,109,115,0);
    let tempn = String.fromCharCode(97,103,101,95,102,95,51,50,0);
    let fcdaebecbcbafcdfceaaeccfeacdbK = 5;
    let redgoalp = 3;
    let currentV = false;
    let soundn = String.fromCharCode(102,95,56,49,95,118,99,104,113,0);
    let calendarn = String.fromCharCode(115,99,97,108,101,100,95,102,95,52,48,0);
    let kuaishouH = 1;
    let acceptedE = 0;
    let faviconU = String.fromCharCode(112,95,54,56,95,116,111,107,101,110,110,102,116,116,120,0);
    let otheru = 1;
    let thumbnaila = 0.0;
    let videoF = 2;
    let canvasM = 4.0;
    let logouserb = 0;
   if ((acceptedE / (Math.max(faviconU.length, 8))) <= 4) {
       let firebaseB = 1.0;
       let showS = String.fromCharCode(113,95,56,49,95,108,105,98,0);
       let bdxadsdkY: Array<any> = [String.fromCharCode(118,98,108,101,95,113,95,54,53,0), String.fromCharCode(115,116,112,115,95,55,95,50,55,0)];
       let libfolly9: Array<any> = [206, 94];
      let flagm = 6813723.0 <= firebaseB;
      do {
         firebaseB /= Math.max(parseInt(`${firebaseB}`) % (Math.max(3, showS.length)), 2);
         if (flagm) {
            break;
         }
      } while ((1.71 > (1.89 - firebaseB) || (libfolly9.length % 5) > 1) && flagm);
       let basketballhometeamN = 3.0;
       let usernameP = 4.0;
          let knewinterstitialT = String.fromCharCode(98,95,52,50,95,110,111,110,110,117,108,108,100,101,115,116,105,110,97,116,105,111,110,0);
          let gray_ = 0;
         libfolly9 = [knewinterstitialT.length >> (Math.min(3, bdxadsdkY.length))];
         knewinterstitialT += `${gray_ + gray_}`;
         showS += `${parseInt(`${basketballhometeamN}`)}`;
       let projectU: Map<any, any> = new Map([[String.fromCharCode(113,95,51,49,95,114,115,112,0),false ], [String.fromCharCode(116,97,112,101,115,95,97,95,55,55,0),false ]]);
         showS = "2";
      while (1 <= (projectU.size / (Math.max(1, 2))) || 5 <= (projectU.size / (Math.max(1, 9)))) {
          let slider2 = 3.0;
          let iconpipexpandN: Array<any> = [418, 992, 668];
          let successn = 3.0;
          let default_j8r: Array<any> = [519, 324, 875];
          let homeg = false;
         usernameP -= parseInt(`${basketballhometeamN}`);
         slider2 -= parseInt(`${successn}`) * default_j8r.length;
         iconpipexpandN = [iconpipexpandN.length];
         successn *= default_j8r.length;
         homeg = !homeg && iconpipexpandN.length <= 66;
         break;
      }
      while ((libfolly9.length & 5) < 4 || 5 < (5 & bdxadsdkY.length)) {
         bdxadsdkY = [parseInt(`${basketballhometeamN}`) % (Math.max(9, showS.length))];
         break;
      }
      for (let w = 0; w < 3; w++) {
          let greyF = String.fromCharCode(110,95,51,52,95,112,114,101,118,118,101,99,0);
          let dropdownx = 1.0;
          let footballfiledlayout0 = String.fromCharCode(100,101,99,105,109,97,116,101,95,99,95,53,57,0);
         projectU = new Map([[`${projectU.size}`, greyF.length & 3]]);
         greyF = "3";
         dropdownx /= Math.max(footballfiledlayout0.length, 4);
         footballfiledlayout0 += `${footballfiledlayout0.length ^ 2}`;
      }
         usernameP -= parseInt(`${basketballhometeamN}`) + parseInt(`${firebaseB}`);
         usernameP -= showS.length & 1;
         showS = `${parseInt(`${usernameP}`)}`;
      acceptedE >>= Math.min(1, Math.abs(kuaishouH));
   }
       let hejiT: Map<any, any> = new Map([[String.fromCharCode(100,100,114,97,110,103,101,95,109,95,56,54,0),String.fromCharCode(118,105,97,98,108,101,95,56,95,52,55,0)], [String.fromCharCode(113,95,56,56,95,118,100,115,111,0),String.fromCharCode(110,111,114,109,95,108,95,53,57,0)]]);
      while ((hejiT.size * 5) <= 1) {
         hejiT = new Map([[`${hejiT.size}`, hejiT.size]]);
         break;
      }
      while ((5 / (Math.max(7, hejiT.size))) > 2) {
         hejiT = new Map([[`${hejiT.size}`, hejiT.size]]);
         break;
      }
         hejiT.set(`${hejiT.size}`, hejiT.size / 2);
      kuaishouH %= Math.max(3, calendarn.length);

    setIsBtnEnable(false);

   while ((acceptedE % (Math.max(3, 6))) < 4 && 2 < (3 % (Math.max(7, acceptedE)))) {
      acceptedE += 2 * calendarn.length;
      break;
   }
      modityN = `${fcdaebecbcbafcdfceaaeccfeacdbK ^ 2}`;
    try {

   for (let h = 0; h < 3; h++) {
       let closeP = String.fromCharCode(98,114,97,110,100,95,114,95,52,54,0);
       let promotionY = String.fromCharCode(98,95,56,52,95,116,114,97,110,115,112,111,114,116,115,0);
       let runtimel = String.fromCharCode(115,99,114,101,101,110,115,95,114,95,56,50,0);
         promotionY += `${1 * runtimel.length}`;
      for (let m = 0; m < 2; m++) {
         promotionY += `${runtimel.length & 1}`;
      }
          let sentryV = true;
          let mbbannerz = 4.0;
          let profileinactive5 = String.fromCharCode(100,101,115,116,114,111,121,95,48,95,51,56,0);
         closeP += `${2 + parseInt(`${mbbannerz}`)}`;
         sentryV = profileinactive5.length <= 51;
         mbbannerz /= Math.max(1, parseFloat(`${profileinactive5.length / 1}`));
      if (1 < runtimel.length) {
         runtimel = `${(closeP == String.fromCharCode(78,0) ? closeP.length : runtimel.length)}`;
      }
         runtimel = `${1 * runtimel.length}`;
         closeP = `${(promotionY == String.fromCharCode(55,0) ? promotionY.length : runtimel.length)}`;
      if (runtimel != promotionY) {
         promotionY = `${1 * closeP.length}`;
      }
      while (!runtimel.includes(closeP)) {
          let private_eq = String.fromCharCode(114,95,49,54,95,120,99,104,97,99,104,97,0);
          let switch_pvs: Array<any> = [723, 519, 474];
          let h_title5 = String.fromCharCode(112,117,98,95,109,95,50,57,0);
          let plusj = true;
         closeP += `${closeP.length & promotionY.length}`;
         private_eq += "1";
         switch_pvs = [(switch_pvs.length | (plusj ? 1 : 2))];
         h_title5 = `${(private_eq == String.fromCharCode(116,0) ? (plusj ? 1 : 4) : private_eq.length)}`;
         break;
      }
         closeP = `${2 + promotionY.length}`;
      redgoalp += kuaishouH;
   }
      modityN += `${faviconU.length ^ 3}`;
      setIsVisible(true);

      soundn = `${(String.fromCharCode(114,0) == faviconU ? faviconU.length : kuaishouH)}`;
       let const_z2: Array<any> = [773, 159, 352];
       let stylesb: Array<any> = [18, 255];
       let auto_dt = String.fromCharCode(112,111,115,116,112,111,110,101,100,95,52,95,52,52,0);
       let vietnamh = false;
         auto_dt += "1";
         vietnamh = 3 > auto_dt.length;
      for (let w = 0; w < 2; w++) {
         auto_dt = "1";
      }
      while (1 <= auto_dt.length) {
          let xadsdkR = String.fromCharCode(105,110,118,97,114,105,97,110,116,115,95,52,95,52,56,0);
          let iconfeedbackc: Map<any, any> = new Map([[String.fromCharCode(111,95,50,53,95,115,109,111,111,116,104,0),true ], [String.fromCharCode(122,95,49,52,95,99,111,110,116,97,105,110,0),false ], [String.fromCharCode(106,95,49,48,95,100,111,116,116,101,100,0),true ]]);
          let nativeexM = 4;
          let philippinesE = 5.0;
         vietnamh = (parseInt(`${philippinesE}`) - stylesb.length) == 83;
         xadsdkR = `${iconfeedbackc.size}`;
         iconfeedbackc = new Map([[`${iconfeedbackc.size}`, 3 & iconfeedbackc.size]]);
         nativeexM -= xadsdkR.length;
         philippinesE /= Math.max(1, 2);
         break;
      }
         vietnamh = const_z2.includes(vietnamh);
         const_z2 = [(const_z2.length & (vietnamh ? 4 : 5))];
       let tooltips7 = false;
      if (!vietnamh) {
         vietnamh = !vietnamh || !tooltips7;
      }
      soundn += `${(auto_dt == String.fromCharCode(81,0) ? auto_dt.length : kuaishouH)}`;
      if (productSelected.productType === 'iap') {
        await requestPurchase({ skus: [productSelected.productSKU] });

      } else if (productSelected.productType === 'subs') {

   let analyticsZ = String.fromCharCode(122,95,109,107,118,0) == soundn;
   do {
      soundn = `${condensedi}`;
      if (analyticsZ) {
         break;
      }
   } while (analyticsZ && (2 > (kuaishouH / (Math.max(5, soundn.length))) && (2 / (Math.max(8, kuaishouH))) > 4));
      fcdaebecbcbafcdfceaaeccfeacdbK |= (tempn == String.fromCharCode(80,0) ? tempn.length : acceptedE);
        const subs = subscriptions.find(sub => sub.productId === productSelected.productSKU);

   let historyG = 5965433 >= modityN.length;
   do {
      modityN += "1";
      if (historyG) {
         break;
      }
   } while ((currentV) && historyG);
   if (currentV) {
      currentV = (fcdaebecbcbafcdfceaaeccfeacdbK & redgoalp) > 62;
   }

        if (subs) {

      condensedi += fcdaebecbcbafcdfceaaeccfeacdbK & faviconU.length;
       let yingL = false;
       let ksadO = 0.0;
         ksadO /= Math.max(1, parseInt(`${ksadO}`) & 3);
         yingL = ksadO == 34.54 && !yingL;
         yingL = !yingL || ksadO > 87.36;
         yingL = 70.75 <= ksadO || yingL;
      while ((3.86 - ksadO) == 5.8 || ksadO == 3.86) {
         yingL = !yingL;
         break;
      }
          let full7 = String.fromCharCode(108,95,49,54,95,99,111,110,116,111,117,114,0);
          let profileactivea = false;
         yingL = full7.length == 95;
         full7 = `${((profileactivea ? 5 : 4) << (Math.min(1, Math.abs((profileactivea ? 1 : 2)))))}`;
      tempn = `${kuaishouH + 2}`;
          const offerToken = subs.subscriptionOfferDetails[0].offerToken;

   if (calendarn.startsWith(`${condensedi}`)) {
      calendarn = `${1 & otheru}`;
   }
       let floater7 = String.fromCharCode(99,111,109,98,95,107,95,49,52,0);
       let xadsdkA: Map<any, any> = new Map([[String.fromCharCode(115,116,114,99,97,115,101,99,109,112,95,53,95,48,0),97], [String.fromCharCode(108,97,116,101,114,95,122,95,49,48,48,0),979], [String.fromCharCode(99,97,115,104,116,97,103,95,55,95,54,54,0),746]]);
         xadsdkA = new Map([[`${xadsdkA.size}`, (String.fromCharCode(109,0) == floater7 ? floater7.length : xadsdkA.size)]]);
      let mbnativeX = 8696596 >= floater7.length;
      do {
         floater7 = `${xadsdkA.size << (Math.min(floater7.length, 2))}`;
         if (mbnativeX) {
            break;
         }
      } while (mbnativeX && (1 <= (floater7.length << (Math.min(Math.abs(4), 2)))));
         floater7 = `${floater7.length % 2}`;
          let controlc = 4.0;
         floater7 += `${1 * xadsdkA.size}`;
         controlc *= parseInt(`${controlc}`);
      let libavcodecz = 8491586 <= xadsdkA.size;
      do {
          let cinit_is = 4.0;
          let success0 = String.fromCharCode(102,97,109,105,108,121,95,105,95,54,52,0);
         xadsdkA = new Map([[`${xadsdkA.size}`, floater7.length]]);
         cinit_is /= Math.max(parseFloat(`${1 + parseInt(`${cinit_is}`)}`), 5);
         success0 = "1";
         if (libavcodecz) {
            break;
         }
      } while (libavcodecz && (2 >= (1 >> (Math.min(2, Math.abs(xadsdkA.size)))) || (floater7.length >> (Math.min(2, Math.abs(xadsdkA.size)))) >= 1));
      while (5 <= floater7.length) {
         floater7 += `${2 ^ floater7.length}`;
         break;
      }
      otheru >>= Math.min(Math.abs(modityN.length << (Math.min(Math.abs(1), 1))), 5);
          await requestSubscription({
            sku: productSelected.productSKU,
            ...(offerToken && {
              subscriptionOffers: [{ sku: productSelected.productSKU, offerToken }],
            }),
          });
        } else {

   let benefiti = currentV ? !currentV : currentV;
   do {
      currentV = faviconU.length > kuaishouH;
      if (benefiti) {
         break;
      }
   } while ((!currentV) && benefiti);
   let iconwechatN = currentV ? !currentV : currentV;
   do {
      currentV = 2 <= faviconU.length && acceptedE <= 2;
      if (iconwechatN) {
         break;
      }
   } while (iconwechatN && (1 >= fcdaebecbcbafcdfceaaeccfeacdbK && 4 >= (1 ^ fcdaebecbcbafcdfceaaeccfeacdbK)));
          throw new Error('subscription plan not found');
        }
      }
    } catch (err) {

   if (!faviconU.endsWith(`${soundn.length}`)) {
       let diceA = String.fromCharCode(101,95,57,56,95,106,111,98,115,0);
       let inactivev = String.fromCharCode(98,97,99,107,115,105,100,101,95,118,95,49,48,0);
       let mutedF = String.fromCharCode(102,97,120,99,111,109,112,114,95,51,95,50,53,0);
       let away8 = String.fromCharCode(116,105,109,101,105,110,102,111,114,99,101,95,53,95,57,0);
          let miniP = true;
          let cross6: Array<any> = [250, 194];
         mutedF = `${diceA.length}`;
         miniP = !miniP;
         cross6.push(2);
      let linet = inactivev.length >= 7730522;
      do {
         inactivev = `${(away8 == String.fromCharCode(80,0) ? mutedF.length : away8.length)}`;
         if (linet) {
            break;
         }
      } while (linet && (3 <= inactivev.length && away8 != String.fromCharCode(120,0)));
      for (let a = 0; a < 1; a++) {
         inactivev = `${diceA.length}`;
      }
      while (3 > away8.length) {
         away8 += `${(String.fromCharCode(56,0) == diceA ? diceA.length : inactivev.length)}`;
         break;
      }
         diceA += `${away8.length % 3}`;
      while (inactivev == String.fromCharCode(50,0) || diceA != String.fromCharCode(108,0)) {
         inactivev = `${mutedF.length}`;
         break;
      }
          let philippinesX = 0.0;
          let release_9e = String.fromCharCode(119,95,50,57,0);
          let klevinV = 2;
         away8 += `${inactivev.length - away8.length}`;
         philippinesX -= 1 >> (Math.min(Math.abs(klevinV), 1));
         release_9e = "2";
         klevinV <<= Math.min(Math.abs(1 * klevinV), 1);
         away8 = `${(String.fromCharCode(102,0) == mutedF ? away8.length : mutedF.length)}`;
       let humidityH = 4.0;
          let moviesr = String.fromCharCode(110,111,114,109,97,108,105,115,101,95,54,95,51,48,0);
          let downloadeda = String.fromCharCode(99,104,101,99,107,109,97,114,107,115,95,109,95,52,57,0);
          let toponD: Array<any> = [419, 892];
         away8 += `${mutedF.length >> (Math.min(2, toponD.length))}`;
         moviesr += `${(String.fromCharCode(65,0) == downloadeda ? downloadeda.length : moviesr.length)}`;
         toponD = [downloadeda.length + moviesr.length];
      if (mutedF.length <= diceA.length) {
          let linkZ: Array<any> = [938, 152, 676];
          let modityw = true;
          let libreactnativejniL = 4.0;
          let acceptedu: Array<any> = [544, 221];
         diceA += "1";
         linkZ = [acceptedu.length / 3];
         modityw = linkZ.includes(acceptedu[acceptedu.length - 1]);
         libreactnativejniL /= Math.max(parseFloat(`${acceptedu.length}`), 4);
      }
       let fullP = 0.0;
       let expiredw = 5.0;
      faviconU += `${calendarn.length}`;
   }
      fcdaebecbcbafcdfceaaeccfeacdbK %= Math.max(videoF % 3, 3);
      setIsVisible(false);

       let storeg = false;
       let launcherF = true;
       let whiteanimationliveX = 1;
          let libyogaa: Array<any> = [38, 628, 482];
          let tooltipsJ = 1.0;
         whiteanimationliveX += whiteanimationliveX;
         libyogaa.push(1);
         tooltipsJ += parseFloat(`${libyogaa.length}`);
          let stylev: Array<any> = [487, 664];
         launcherF = !launcherF;
         stylev = [1];
          let libavcodec4: Array<any> = [191, 894, 846];
          let langkeyn: Array<any> = [String.fromCharCode(113,95,56,57,95,118,115,99,97,108,101,0), String.fromCharCode(115,95,55,54,95,112,97,114,116,105,116,105,111,110,115,0)];
          let gpayc = false;
         launcherF = !launcherF;
         libavcodec4 = [libavcodec4.length];
         langkeyn = [((gpayc ? 2 : 3) >> (Math.min(langkeyn.length, 1)))];
         gpayc = !gpayc && langkeyn.length > 45;
          let yellowvideolivef = String.fromCharCode(98,95,54,49,95,99,111,110,99,97,116,101,110,97,116,101,100,0);
          let libzeusm = String.fromCharCode(115,109,97,114,116,95,120,95,54,50,0);
         storeg = 12 >= whiteanimationliveX;
         yellowvideolivef += `${libzeusm.length}`;
         libzeusm += `${(String.fromCharCode(74,0) == yellowvideolivef ? libzeusm.length : yellowvideolivef.length)}`;
         launcherF = !launcherF;
          let trashG = 4.0;
          let countryi = 2.0;
         whiteanimationliveX <<= Math.min(4, Math.abs(parseInt(`${trashG}`) % (Math.max(8, parseInt(`${countryi}`)))));
      while ((whiteanimationliveX & 5) >= 4 || 5 >= whiteanimationliveX) {
         storeg = !launcherF;
         break;
      }
      while (!storeg) {
         whiteanimationliveX |= 3 << (Math.min(Math.abs(whiteanimationliveX), 2));
         break;
      }
      for (let p = 0; p < 3; p++) {
         whiteanimationliveX -= ((launcherF ? 2 : 3));
      }
      tempn += "1";
      otheru &= (String.fromCharCode(52,0) == modityN ? fcdaebecbcbafcdfceaaeccfeacdbK : modityN.length);
      if (err instanceof PurchaseError) {

      calendarn += `${faviconU.length / (Math.max(tempn.length, 5))}`;
   if ((kuaishouH / (Math.max(4, otheru))) <= 2) {
      kuaishouH >>= Math.min(5, Math.abs(videoF / (Math.max(9, modityN.length))));
   }
        console.error("purchasing error: " + err);
      } else {

   for (let h = 0; h < 3; h++) {
       let nativemodulen = 0;
       let photoh = String.fromCharCode(104,95,49,95,100,105,99,116,105,111,110,97,114,105,101,115,0);
      if ((photoh.length << (Math.min(Math.abs(4), 2))) == 3) {
          let unfill1 = false;
          let awayteamfieldF = String.fromCharCode(99,95,57,49,95,109,111,100,101,0);
         nativemodulen &= awayteamfieldF.length;
      }
      let stringsj = 7250587 <= photoh.length;
      do {
         photoh = `${(photoh == String.fromCharCode(109,0) ? nativemodulen : photoh.length)}`;
         if (stringsj) {
            break;
         }
      } while (stringsj && (2 > (nativemodulen % (Math.max(photoh.length, 5)))));
      let userW = 9707644 >= nativemodulen;
      do {
         nativemodulen |= 2 % (Math.max(2, photoh.length));
         if (userW) {
            break;
         }
      } while ((photoh.includes(`${nativemodulen}`)) && userW);
         photoh += `${photoh.length << (Math.min(Math.abs(1), 5))}`;
      while ((2 + photoh.length) < 2) {
         photoh += `${nativemodulen}`;
         break;
      }
         photoh = "2";
      modityN += `${redgoalp}`;
   }
   while (!faviconU.includes(`${redgoalp}`)) {
      redgoalp -= (faviconU == String.fromCharCode(122,0) ? otheru : faviconU.length);
      break;
   }
        console.error("handle purchase error: ", err);
      }

      if (err && err.code == "E_USER_CANCELLED") {

   let dangerN = redgoalp <= 7284852;
   do {
       let orangeY = false;
       let buttonA: Map<any, any> = new Map([[String.fromCharCode(97,117,116,111,103,101,110,95,117,95,50,50,0),false ], [String.fromCharCode(114,101,112,117,98,108,105,115,104,95,119,95,50,57,0),false ]]);
          let circlel = 0.0;
          let securityZ = 0.0;
          let materialN = 5;
         buttonA = new Map([[`${circlel}`, parseInt(`${circlel}`) / 3]]);
         securityZ /= Math.max(2 & materialN, 3);
         materialN <<= Math.min(Math.abs(2), 4);
      if ((4 - buttonA.size) < 2 && 4 < buttonA.size) {
         orangeY = !orangeY;
      }
      let subbasketballplayerq = 6805014 >= buttonA.size;
      do {
          let otherw = String.fromCharCode(103,95,50,57,95,112,97,114,101,110,116,0);
         buttonA.set(otherw, 1);
         if (subbasketballplayerq) {
            break;
         }
      } while ((!orangeY) && subbasketballplayerq);
      let videovarL = 6077622 <= buttonA.size;
      do {
          let goalQ = String.fromCharCode(98,97,116,99,104,101,100,95,117,95,54,50,0);
          let sportsV = String.fromCharCode(100,95,56,49,95,114,101,115,112,111,110,115,101,0);
          let nativeN = true;
          let tempQ = String.fromCharCode(102,114,97,109,101,114,95,114,95,53,53,0);
          let crownE: Map<any, any> = new Map([[String.fromCharCode(120,95,52,54,95,116,101,110,99,0),true ], [String.fromCharCode(119,101,108,115,101,110,99,95,57,95,56,51,0),false ]]);
         buttonA.set(goalQ, goalQ.length);
         sportsV = `${((nativeN ? 1 : 1) | crownE.size)}`;
         nativeN = nativeN || tempQ.length == 14;
         tempQ += `${tempQ.length - 1}`;
         crownE = new Map([[sportsV, 1]]);
         if (videovarL) {
            break;
         }
      } while ((orangeY) && videovarL);
         buttonA = new Map([[`${buttonA.size}`, (2 | (orangeY ? 2 : 1))]]);
      while ((buttonA.size >> (Math.min(Math.abs(5), 2))) >= 3) {
         buttonA = new Map([[`${buttonA.size}`, buttonA.size]]);
         break;
      }
      redgoalp += acceptedE;
      if (dangerN) {
         break;
      }
   } while ((1 < (redgoalp % (Math.max(2, 6)))) && dangerN);
   let toponB = 6760243 <= kuaishouH;
   do {
      kuaishouH <<= Math.min(3, Math.abs((modityN == String.fromCharCode(120,0) ? acceptedE : modityN.length)));
      if (toponB) {
         break;
      }
   } while ((4.33 <= thumbnaila) && toponB);
        console.log("user cancel purchase");

   let anythinki = soundn.length >= 8474105;
   do {
      soundn += `${condensedi}`;
      if (anythinki) {
         break;
      }
   } while ((modityN.length <= soundn.length) && anythinki);
   let serviceS = fcdaebecbcbafcdfceaaeccfeacdbK >= 7365994;
   do {
      fcdaebecbcbafcdfceaaeccfeacdbK <<= Math.min(Math.abs(redgoalp % (Math.max(parseInt(`${thumbnaila}`), 5))), 2);
      if (serviceS) {
         break;
      }
   } while (serviceS && ((1 >> (Math.min(4, Math.abs(fcdaebecbcbafcdfceaaeccfeacdbK)))) >= 3 && (1 >> (Math.min(3, Math.abs(videoF)))) >= 3));
        setIsBtnEnable(true);
      } else {

      modityN += `${((currentV ? 2 : 2))}`;
      kuaishouH >>= Math.min(soundn.length, 5);
        

   let mergerG = 8864356 >= faviconU.length;
   do {
      faviconU += `${redgoalp ^ 3}`;
      if (mergerG) {
         break;
      }
   } while (mergerG && (3 <= (faviconU.length ^ 4) && (faviconU.length ^ condensedi) <= 4));
      videoF &= modityN.length;
        

       let valuesk = 0.0;
       let teamB = String.fromCharCode(100,95,54,55,95,116,104,105,114,100,0);
       let transferT = 2;
         teamB = `${teamB.length >> (Math.min(Math.abs(1), 4))}`;
         teamB += `${teamB.length}`;
       let rendert = String.fromCharCode(99,97,115,101,115,95,52,95,54,55,0);
          let floaterc = 2.0;
         transferT ^= transferT;
         floaterc -= parseFloat(`${1 / (Math.max(7, parseInt(`${floaterc}`)))}`);
       let iconb = 1;
       let singlen = 0;
      for (let f = 0; f < 2; f++) {
          let projectK = 1.0;
          let scrollview3 = 2.0;
          let yellowredcardM = String.fromCharCode(104,95,53,52,95,109,101,116,114,105,99,115,0);
         iconb ^= transferT - teamB.length;
         projectK -= parseFloat(`${parseInt(`${scrollview3}`)}`);
         scrollview3 -= parseFloat(`${3 % (Math.max(10, parseInt(`${projectK}`)))}`);
         yellowredcardM = "2";
      }
          let collectione = 1.0;
          let mbbannerF = String.fromCharCode(118,95,57,48,95,105,110,115,101,114,116,105,111,110,115,0);
         transferT /= Math.max(parseInt(`${collectione}`), 2);
         collectione += parseFloat(`${mbbannerF.length / (Math.max(1, 3))}`);
         mbbannerF = `${mbbannerF.length * mbbannerF.length}`;
          let bannerB = 2.0;
         teamB += `${2 << (Math.min(Math.abs(parseInt(`${bannerB}`)), 5))}`;
         transferT /= Math.max(4, 2 >> (Math.min(1, Math.abs(singlen))));
      acceptedE /= Math.max(3, transferT);
      valuesk += parseFloat(`${parseInt(`${valuesk}`) + parseInt(`${valuesk}`)}`);
   while ((logouserb | 4) <= 1 && 4 <= (logouserb | videoF)) {
      videoF /= Math.max(condensedi, 4);
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

    

    const result = await wwProgress.postValidateReceipt(iapTrans);

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
      const result = await wwProgress.postAndroidSubscriptions(subsTrans);
      console.log("validate subscription result");
      console.log(result);
      return result.success;
    } catch (err) {
       let heart7 = false;
    let rncorej = 4;
    let modityF = String.fromCharCode(114,101,103,105,115,116,101,114,95,102,95,49,55,0);
    let disconnectedj = 5.0;
    let sportV = false;
    let disconnectedlogop: Array<any> = [818, 278, 729];
    let iconplayw = String.fromCharCode(109,105,110,117,116,101,115,95,50,95,55,57,0);
    let mbnativeB = String.fromCharCode(106,95,51,51,95,116,101,120,116,0);
    let uploadQ = 5.0;
    let send7: Array<any> = [String.fromCharCode(106,95,50,57,95,98,108,111,119,102,105,115,104,0), String.fromCharCode(99,97,114,114,121,111,117,116,95,54,95,57,51,0), String.fromCharCode(105,110,115,101,114,116,115,95,106,95,49,53,0)];
      iconplayw += `${disconnectedlogop.length - 1}`;
   for (let a = 0; a < 2; a++) {
      rncorej -= rncorej << (Math.min(iconplayw.length, 3));
   }
   for (let e = 0; e < 1; e++) {
      mbnativeB += "2";
   }
      rncorej ^= disconnectedlogop.length << (Math.min(3, Math.abs(parseInt(`${disconnectedj}`))));
      heart7 = disconnectedlogop.length > 21;
   for (let w = 0; w < 1; w++) {
      sportV = modityF.length > 92 && mbnativeB.length > 92;
   }
   let predictionW = String.fromCharCode(95,119,56,115,97,107,57,105,0) == iconplayw;
   do {
       let release_dF = String.fromCharCode(100,95,51,53,95,97,116,116,114,97,99,116,0);
      let mbnativeadvanced0 = release_dF == String.fromCharCode(53,55,100,95,119,54,57,118,116,0);
      do {
         release_dF += `${release_dF.length + 3}`;
         if (mbnativeadvanced0) {
            break;
         }
      } while ((!release_dF.includes(`${release_dF.length}`)) && mbnativeadvanced0);
       let stepI: Map<any, any> = new Map([[String.fromCharCode(102,111,114,101,97,99,104,95,97,95,56,49,0),false ], [String.fromCharCode(111,95,51,52,95,114,115,97,122,0),false ], [String.fromCharCode(99,111,110,110,101,99,116,105,111,110,99,98,95,120,95,55,51,0),true ]]);
          let libswresampleh = String.fromCharCode(118,95,53,55,95,112,117,114,112,108,101,0);
          let uimanager1 = 0;
         release_dF += `${release_dF.length | libswresampleh.length}`;
         libswresampleh = `${uimanager1 >> (Math.min(Math.abs(2), 2))}`;
         uimanager1 %= Math.max(3, 3 ^ uimanager1);
      iconplayw = `${release_dF.length}`;
      if (predictionW) {
         break;
      }
   } while ((!iconplayw.endsWith(`${rncorej}`)) && predictionW);
       let flipperr = String.fromCharCode(115,117,98,102,105,101,108,100,115,95,49,95,51,55,0);
         flipperr += `${2 - flipperr.length}`;
       let routerL = 5.0;
       let guidez = 2.0;
          let gradleO = 0.0;
          let agreement1 = 4;
         guidez *= 2 - parseInt(`${gradleO}`);
         gradleO *= parseFloat(`${agreement1}`);
      rncorej -= rncorej;
      iconplayw += `${parseInt(`${uploadQ}`) / 2}`;
   if (sportV && mbnativeB.length > 2) {
      sportV = mbnativeB.length >= 12;
   }
      rncorej -= (3 >> (Math.min(5, Math.abs((heart7 ? 2 : 3)))));
   let downloadL = disconnectedlogop.length <= 6969257;
   do {
      disconnectedlogop.push(3 << (Math.min(2, Math.abs(parseInt(`${uploadQ}`)))));
      if (downloadL) {
         break;
      }
   } while (downloadL && (mbnativeB.length >= disconnectedlogop.length));
   while (!mbnativeB.endsWith(`${uploadQ}`)) {
      mbnativeB += `${rncorej}`;
      break;
   }

      console.log('post android subscription error: ', err);

      mbnativeB = `${(2 * (heart7 ? 3 : 2))}`;
   for (let m = 0; m < 3; m++) {
      heart7 = 92 >= mbnativeB.length;
   }
   while (sportV) {
       let shirtS = 0;
       let playlista = true;
       let suggestionV = 3.0;
       let searchx = String.fromCharCode(122,95,51,57,95,114,101,99,118,102,114,111,109,0);
          let eactk = String.fromCharCode(103,108,97,115,115,95,101,95,52,57,0);
          let awayteamfieldR = 2;
          let giftbuttonl = true;
         playlista = ((eactk.length | (giftbuttonl ? 70 : eactk.length)) == 70);
         awayteamfieldR %= Math.max(5, awayteamfieldR);
      if (3.4 > (suggestionV + 2.38)) {
          let tempJ = 1;
         shirtS *= parseInt(`${suggestionV}`) & 1;
         tempJ *= tempJ ^ 1;
      }
         searchx += `${((playlista ? 2 : 3) + searchx.length)}`;
       let interstitialA = 0.0;
      for (let p = 0; p < 3; p++) {
          let arean = String.fromCharCode(98,105,110,100,105,110,103,95,52,95,50,0);
          let kcopy_ef8: Map<any, any> = new Map([[String.fromCharCode(97,112,111,108,108,111,95,119,95,56,57,0),752], [String.fromCharCode(103,95,53,57,95,115,97,102,101,0),592], [String.fromCharCode(116,104,114,101,115,104,111,108,100,115,95,118,95,56,0),482]]);
          let ajaxq = 5.0;
          let countdownW = 3.0;
          let fileY = false;
         playlista = 53.61 > ajaxq;
         arean += `${parseInt(`${countdownW}`) & 3}`;
         kcopy_ef8.set(`${fileY}`, (1 - (fileY ? 5 : 4)));
         ajaxq *= parseInt(`${countdownW}`) >> (Math.min(3, Math.abs(2)));
      }
      let minivodG = shirtS <= 8382607;
      do {
         shirtS += 2;
         if (minivodG) {
            break;
         }
      } while ((shirtS >= searchx.length) && minivodG);
      if (playlista) {
         shirtS /= Math.max(3, ((playlista ? 5 : 3) ^ parseInt(`${suggestionV}`)));
      }
       let fieldj = String.fromCharCode(108,111,99,97,108,108,121,95,115,95,51,55,0);
       let holderm = String.fromCharCode(112,95,52,54,95,100,118,100,115,117,98,0);
          let layoutJ: Array<any> = [String.fromCharCode(98,97,107,101,100,95,97,95,52,54,0), String.fromCharCode(104,101,105,103,104,116,95,111,95,55,57,0)];
         suggestionV -= 2;
         layoutJ = [layoutJ.length];
         shirtS /= Math.max(shirtS ^ parseInt(`${suggestionV}`), 5);
         playlista = 15.91 <= interstitialA;
      let areaS = searchx == String.fromCharCode(102,112,104,49,95,117,0);
      do {
         searchx = `${parseInt(`${interstitialA}`) >> (Math.min(Math.abs(1), 2))}`;
         if (areaS) {
            break;
         }
      } while ((searchx.includes(holderm)) && areaS);
      sportV = 77 < disconnectedlogop.length;
      break;
   }
      disconnectedlogop.push(3);
      iconplayw += `${((sportV ? 5 : 1) | disconnectedlogop.length)}`;
   if (mbnativeB.length > 2) {
      modityF += `${(iconplayw.length >> (Math.min(2, Math.abs((heart7 ? 1 : 4)))))}`;
   }
      mbnativeB = `${mbnativeB.length / (Math.max(9, disconnectedlogop.length))}`;
   for (let k = 0; k < 1; k++) {
       let matchesi = String.fromCharCode(102,95,50,54,95,97,108,97,98,97,115,116,101,114,0);
       let mbnative_: Map<any, any> = new Map([[String.fromCharCode(97,116,116,105,98,117,116,101,95,107,95,49,48,0),331], [String.fromCharCode(102,95,56,53,95,112,105,99,116,117,114,101,0),806]]);
      if ((mbnative_.size - matchesi.length) >= 5) {
          let sideD = String.fromCharCode(104,95,52,51,95,103,101,110,101,114,97,116,105,111,110,0);
          let acceptedA = 0.0;
          let rulesV = true;
          let iconwechatR = String.fromCharCode(97,95,56,48,95,112,108,117,115,0);
          let privacyh = 0.0;
         matchesi = `${parseInt(`${acceptedA}`)}`;
         sideD = "3";
         acceptedA -= ((rulesV ? 2 : 4));
         rulesV = !rulesV;
         iconwechatR += `${parseInt(`${privacyh}`) ^ 1}`;
         privacyh += parseInt(`${privacyh}`) + 3;
      }
      for (let a = 0; a < 2; a++) {
          let predictionwinl = String.fromCharCode(113,95,50,52,95,108,111,99,97,108,101,0);
          let roundy = 5;
          let yingh: Array<any> = [901, 592, 608];
         matchesi += `${mbnative_.size}`;
         predictionwinl = `${3 + roundy}`;
         roundy |= yingh.length << (Math.min(Math.abs(1), 3));
         yingh.push(roundy);
      }
          let yellowredcard2: Array<any> = [798, 793];
          let mountingH = String.fromCharCode(97,114,116,105,102,97,99,116,115,95,119,95,50,0);
          let shareV = 1;
         matchesi += "1";
         yellowredcard2 = [yellowredcard2.length | 3];
         mountingH = "3";
         shareV &= mountingH.length;
         mbnative_.set(matchesi, 3);
         matchesi = `${mbnative_.size}`;
      while (4 == (matchesi.length | 4) || 4 == (mbnative_.size | matchesi.length)) {
         mbnative_.set(`${matchesi}`, (String.fromCharCode(101,0) == matchesi ? matchesi.length : mbnative_.size));
         break;
      }
      mbnativeB = `${parseInt(`${uploadQ}`)}`;
   }
      uploadQ -= disconnectedlogop.length;
      disconnectedlogop.push(parseInt(`${uploadQ}`));
   for (let v = 0; v < 3; v++) {
       let acceptedF = String.fromCharCode(99,102,101,110,99,95,97,95,54,50,0);
       let feedback3 = 0;
       let yellowvideolivep = false;
       let progressQ = 0;
       let mbsplashq: Array<any> = [47, 277];
      for (let m = 0; m < 3; m++) {
         yellowvideolivep = progressQ <= 83;
      }
      for (let q = 0; q < 3; q++) {
         yellowvideolivep = acceptedF.length == feedback3;
      }
         yellowvideolivep = acceptedF.length >= mbsplashq.length;
          let backiconw = 4;
          let libfabricjniJ = String.fromCharCode(99,95,54,54,95,115,101,114,105,97,108,110,111,0);
         acceptedF = `${2 + mbsplashq.length}`;
         backiconw += libfabricjniJ.length >> (Math.min(Math.abs(2), 1));
         libfabricjniJ += `${(libfabricjniJ == String.fromCharCode(74,0) ? libfabricjniJ.length : backiconw)}`;
         acceptedF += "3 + feedback3";
      let canvasR = 4997010 >= feedback3;
      do {
         feedback3 >>= Math.min(2, Math.abs(progressQ * 3));
         if (canvasR) {
            break;
         }
      } while (canvasR && (acceptedF.endsWith(`${feedback3}`)));
         acceptedF += `${mbsplashq.length}`;
      if ((feedback3 - 2) <= 5 || 2 <= (feedback3 - acceptedF.length)) {
         feedback3 |= acceptedF.length | progressQ;
      }
       let downg = String.fromCharCode(114,101,109,97,116,114,105,120,95,110,95,49,50,0);
         downg += `${2 + progressQ}`;
      if (4 < (2 << (Math.min(1, mbsplashq.length))) && 2 < (progressQ << (Math.min(mbsplashq.length, 3)))) {
          let iconmorey = 4.0;
          let iconwechatB = 1;
          let iconsubssuccessn = 5.0;
          let signinupD = String.fromCharCode(108,95,54,48,95,97,100,114,109,0);
         progressQ /= Math.max(3, (String.fromCharCode(52,0) == downg ? signinupD.length : downg.length));
         iconmorey /= Math.max(3, parseFloat(`${parseInt(`${iconsubssuccessn}`) >> (Math.min(1, Math.abs(2)))}`));
         iconwechatB ^= iconwechatB >> (Math.min(5, Math.abs(1)));
         iconsubssuccessn += 3 ^ parseInt(`${iconmorey}`);
         signinupD = "1";
      }
      let dragH = yellowvideolivep ? !yellowvideolivep : yellowvideolivep;
      do {
         yellowvideolivep = (mbsplashq.length << (Math.min(acceptedF.length, 5))) == 47;
         if (dragH) {
            break;
         }
      } while ((!yellowvideolivep) && dragH);
      while (3 <= downg.length) {
          let renewH = true;
          let iconschedulek = 3.0;
         downg += `${(2 ^ (yellowvideolivep ? 5 : 3))}`;
         renewH = iconschedulek <= 94.4;
         iconschedulek *= 3;
         break;
      }
          let largebrightness5 = String.fromCharCode(109,112,101,103,95,111,95,48,0);
          let libsentryZ = false;
          let alertH = false;
         mbsplashq.push(mbsplashq.length);
         largebrightness5 = `${1 | largebrightness5.length}`;
         libsentryZ = (alertH ? libsentryZ : !alertH);
      let matchesH = 5371825 >= feedback3;
      do {
          let inviteM = String.fromCharCode(108,111,111,107,97,104,101,97,100,95,105,95,56,0);
          let interstitialc = String.fromCharCode(117,110,115,105,103,110,101,100,95,115,95,54,51,0);
         feedback3 ^= (interstitialc == String.fromCharCode(72,0) ? interstitialc.length : (yellowvideolivep ? 1 : 1));
         inviteM = `${inviteM.length}`;
         if (matchesH) {
            break;
         }
      } while (matchesH && ((3 & progressQ) == 4 || 1 == (progressQ & 3)));
      disconnectedj -= parseFloat(`${mbnativeB.length ^ 1}`);
   }
   let runtimeN = sportV ? !sportV : sportV;
   do {
      sportV = 14.49 >= uploadQ;
      if (runtimeN) {
         break;
      }
   } while ((!sportV && iconplayw.length > 5) && runtimeN);
      iconplayw += `${disconnectedlogop.length}`;
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
       let dialogw = String.fromCharCode(113,95,57,56,0);
    let libturbomodulejsijni4 = 2;
    let suggestionY = 0.0;
    let membershipO = String.fromCharCode(111,95,49,55,95,109,115,98,115,0);
    let rncoreN = String.fromCharCode(109,95,56,50,95,99,114,97,115,104,101,100,0);
    let foundI = false;
    let imagenetworkerrt = 0.0;
    let regengZ = true;
    let constantsG = true;
    let textinputU = 0.0;
    let sportsH: Map<any, any> = new Map([[String.fromCharCode(115,101,97,108,101,100,95,104,95,53,48,0),true ], [String.fromCharCode(100,101,112,97,114,116,109,101,110,116,95,108,95,52,54,0),true ], [String.fromCharCode(101,95,57,52,95,115,105,100,101,115,0),true ]]);
    let androidF = 5.0;
       let select8 = 4.0;
       let thumbnaild = String.fromCharCode(97,95,55,54,95,98,97,99,107,115,108,97,115,104,0);
       let firebasee = String.fromCharCode(100,111,99,116,111,116,97,108,95,119,95,50,49,0);
       let sportF = String.fromCharCode(106,95,55,53,95,115,99,97,110,110,105,110,103,0);
      for (let u = 0; u < 3; u++) {
         firebasee = `${(thumbnaild == String.fromCharCode(52,0) ? firebasee.length : thumbnaild.length)}`;
      }
      if (2 >= sportF.length) {
         firebasee += "3";
      }
          let hooka = String.fromCharCode(117,95,49,48,48,95,104,97,115,104,116,97,98,108,101,122,0);
          let gmailU = String.fromCharCode(97,95,55,50,95,115,116,111,112,0);
          let iconwechatq = String.fromCharCode(114,101,115,111,108,118,95,103,95,54,54,0);
         firebasee += `${parseInt(`${select8}`) << (Math.min(Math.abs(1), 5))}`;
         hooka = `${1 | gmailU.length}`;
         gmailU = `${gmailU.length << (Math.min(5, iconwechatq.length))}`;
         iconwechatq += `${gmailU.length}`;
       let libavcodecW: Array<any> = [107, 987];
       let iconwatchnowG: Array<any> = [817, 845];
       let commonz = 1.0;
      textinputU -= ((foundI ? 1 : 4) * parseInt(`${imagenetworkerrt}`));

      if (currentPurchase) {

      textinputU -= ((foundI ? 5 : 4) | (regengZ ? 3 : 1));
        console.log("-------Current Purchase------------");

      libturbomodulejsijni4 -= libturbomodulejsijni4 & 1;
        console.log(currentPurchase);

   let eactx = regengZ ? !regengZ : regengZ;
   do {
       let stationb = 4;
       let defaultpredictionprofilex = String.fromCharCode(111,95,49,48,95,108,101,97,115,101,0);
          let thumbnailV = 0.0;
          let reducerM = 3;
         stationb <<= Math.min(4, Math.abs(reducerM));
         thumbnailV -= parseFloat(`${parseInt(`${thumbnailV}`)}`);
         reducerM >>= Math.min(5, Math.abs(parseInt(`${thumbnailV}`) ^ 3));
      for (let x = 0; x < 2; x++) {
         stationb |= stationb;
      }
      if (3 >= (stationb << (Math.min(Math.abs(3), 5)))) {
         defaultpredictionprofilex = `${(defaultpredictionprofilex == String.fromCharCode(101,0) ? defaultpredictionprofilex.length : stationb)}`;
      }
       let toponQ = String.fromCharCode(107,105,110,100,115,95,109,95,55,57,0);
       let imagemanageri = String.fromCharCode(100,95,56,50,95,115,101,114,105,102,0);
          let tumbnailC = 2.0;
         toponQ = `${3 - toponQ.length}`;
         tumbnailC -= parseFloat(`${1}`);
         imagemanageri += `${defaultpredictionprofilex.length >> (Math.min(Math.abs(2), 2))}`;
      regengZ = (rncoreN.length * parseInt(`${imagenetworkerrt}`)) <= 20;
      if (eactx) {
         break;
      }
   } while ((!regengZ) && eactx);
        console.log(products.some(product => product.productId === currentPurchase.productId))

      libturbomodulejsijni4 &= 3 % (Math.max(9, parseInt(`${suggestionY}`)));

        try {

   while (!membershipO.includes(`${suggestionY}`)) {
      suggestionY += parseFloat(`${parseInt(`${imagenetworkerrt}`) + libturbomodulejsijni4}`);
      break;
   }
          if (currentPurchase.transactionReceipt) {

   if (rncoreN.startsWith(`${regengZ}`)) {
      rncoreN += `${parseInt(`${suggestionY}`)}`;
   }
            const key = currentPurchase.transactionId?.concat("true");

   while ((1.88 + textinputU) >= 2.50 && foundI) {
      foundI = 97 <= libturbomodulejsijni4;
      break;
   }

            if (receiptBuffer.has(key)) {

   let backgroundK = libturbomodulejsijni4 <= 7475329;
   do {
      libturbomodulejsijni4 -= parseInt(`${suggestionY}`) & 1;
      if (backgroundK) {
         break;
      }
   } while (((1 + dialogw.length) <= 3) && backgroundK);
              console.log(
                "duplicate transaction id: ",
                currentPurchase.transactionId
              );

   if (parseInt(`${suggestionY}`) >= membershipO.length) {
      membershipO += `${rncoreN.length}`;
   }
              await finishTransaction({
                purchase: currentPurchase,
                isConsumable: true,
              });

       let reactnativeratingsS = String.fromCharCode(118,101,110,100,111,114,95,108,95,54,53,0);
         reactnativeratingsS = `${reactnativeratingsS.length % (Math.max(6, reactnativeratingsS.length))}`;
         reactnativeratingsS = `${reactnativeratingsS.length}`;
         reactnativeratingsS = `${reactnativeratingsS.length}`;
      rncoreN += "2";
              setIsVisible(false);

      membershipO = `${((constantsG ? 5 : 5))}`;
              setIsBtnEnable(true);

      membershipO = `${membershipO.length}`;
              return;
            }

            setTimeout(() => setIsVisible(false), 10000);

   for (let s = 0; s < 3; s++) {
      foundI = !regengZ;
   }

            const isIAP = products.some(product => product.productId === currentPurchase.productId)

   while (!rncoreN.startsWith(`${textinputU}`)) {
      rncoreN = `${1 + parseInt(`${textinputU}`)}`;
      break;
   }
            const success = isIAP ?
              await saveFinishIAP("mbbidBall", "") :
              await saveFinishSubs(currentPurchase); 

       let watchnowbgX = String.fromCharCode(110,95,49,49,95,112,114,111,118,105,100,101,115,0);
       let subtextB = String.fromCharCode(115,118,97,103,95,108,95,54,49,0);
         watchnowbgX = `${(watchnowbgX == String.fromCharCode(56,0) ? watchnowbgX.length : subtextB.length)}`;
         watchnowbgX += `${(String.fromCharCode(79,0) == watchnowbgX ? watchnowbgX.length : subtextB.length)}`;
      if (watchnowbgX.length <= 2) {
          let klevinS = String.fromCharCode(119,95,50,49,95,114,101,99,111,114,100,110,105,110,103,0);
         subtextB = `${subtextB.length ^ 2}`;
         klevinS = `${3 & klevinS.length}`;
      }
         subtextB = `${3 - subtextB.length}`;
         subtextB += `${subtextB.length << (Math.min(5, watchnowbgX.length))}`;
         subtextB = "2";
      imagenetworkerrt *= (String.fromCharCode(65,0) == membershipO ? (constantsG ? 2 : 2) : membershipO.length);

            setReceiptBuffer((prev) => {

   for (let n = 0; n < 1; n++) {
      membershipO = `${(membershipO == String.fromCharCode(78,0) ? membershipO.length : parseInt(`${suggestionY}`))}`;
   }
              const receipt = new Map(prev);

       let logouser5: Map<any, any> = new Map([[String.fromCharCode(100,97,112,112,115,95,107,95,49,53,0),15], [String.fromCharCode(105,109,112,108,101,109,101,110,116,97,116,105,111,110,95,106,95,56,0),736]]);
       let taiwanD: Map<any, any> = new Map([[String.fromCharCode(99,104,101,99,107,97,115,109,95,56,95,57,57,0),49], [String.fromCharCode(115,95,54,50,95,112,97,115,116,101,98,111,97,114,100,0),799], [String.fromCharCode(117,110,98,108,117,114,95,116,95,57,50,0),219]]);
       let pushB = 2.0;
      if ((logouser5.size * parseInt(`${pushB}`)) == 5 && 2.6 == (pushB * 3.96)) {
          let librrcx = 1.0;
          let submitr = 4.0;
          let singaporeN: Array<any> = [701, 495, 310];
          let reactnativeultimatelistviewE = true;
         pushB += logouser5.size;
         librrcx += parseFloat(`${parseInt(`${librrcx}`)}`);
         submitr *= singaporeN.length;
         singaporeN.push(parseInt(`${submitr}`) ^ 2);
         reactnativeultimatelistviewE = singaporeN.includes(reactnativeultimatelistviewE);
      }
      while (!Array.from(logouser5.values()).includes(taiwanD.size)) {
         logouser5 = new Map([[`${taiwanD.size}`, taiwanD.size]]);
         break;
      }
          let cast8: Map<any, any> = new Map([[String.fromCharCode(100,95,49,49,95,101,110,99,105,112,104,101,114,0),232], [String.fromCharCode(100,98,108,112,95,109,95,57,56,0),332]]);
          let libturbomodulejsijniV = String.fromCharCode(97,110,97,108,121,122,101,95,106,95,49,48,48,0);
         logouser5.set(`${pushB}`, 1);
         cast8 = new Map([[`${cast8.size}`, libturbomodulejsijniV.length | 2]]);
         libturbomodulejsijniV = "1";
      let termso = 8248854 >= logouser5.size;
      do {
          let clubm = 3.0;
          let singapore7 = String.fromCharCode(98,108,111,99,107,101,100,95,110,95,52,0);
          let sigmobh = true;
          let rewindu = 0;
         logouser5 = new Map([[`${taiwanD.size}`, (taiwanD.size % (Math.max(9, (sigmobh ? 4 : 3))))]]);
         clubm += parseInt(`${clubm}`);
         singapore7 += `${2 ^ rewindu}`;
         sigmobh = (parseInt(`${clubm}`) + singapore7.length) < 36;
         rewindu <<= Math.min(1, Math.abs(rewindu - singapore7.length));
         if (termso) {
            break;
         }
      } while ((Array.from(logouser5.values()).includes(pushB)) && termso);
       let auto_mO = 1.0;
       let libcrashsdkv = 1.0;
      for (let a = 0; a < 1; a++) {
         taiwanD = new Map([[`${pushB}`, 1]]);
      }
         auto_mO *= parseInt(`${libcrashsdkv}`);
       let str7 = 5;
       let guide5 = 3;
       let dragclose6 = 3;
      rncoreN = `${(String.fromCharCode(55,0) == membershipO ? membershipO.length : logouser5.size)}`;
              receipt.set(currentPurchase.transactionId?.concat(success), success);

       let splashb = String.fromCharCode(112,95,55,53,95,98,117,115,0);
       let basketballhometeamr = 0;
          let defaultlogoj = String.fromCharCode(105,95,56,56,95,102,105,108,116,101,114,0);
         splashb = `${defaultlogoj.length << (Math.min(Math.abs(3), 1))}`;
       let agreementU: Map<any, any> = new Map([[String.fromCharCode(120,95,56,57,95,115,105,103,110,105,102,105,99,97,110,116,0),false ], [String.fromCharCode(100,95,49,53,95,99,108,97,115,115,105,99,0),false ]]);
       let videocommonK = 5;
       let plashk = 1;
      if (videocommonK == plashk) {
          let assiste = 0;
          let defaultroombgj = 3.0;
          let umeng4 = 2.0;
          let libreanimated4 = 3;
         plashk %= Math.max(libreanimated4, 2);
         assiste >>= Math.min(Math.abs(3), 1);
         defaultroombgj += 2 + parseInt(`${defaultroombgj}`);
         umeng4 -= 2;
         libreanimated4 <<= Math.min(Math.abs(assiste % 1), 2);
      }
       let tumbnailz = false;
         basketballhometeamr *= (splashb == String.fromCharCode(102,0) ? splashb.length : basketballhometeamr);
      suggestionY -= parseFloat(`${basketballhometeamr / 3}`);
              return receipt;
            });

      textinputU /= Math.max(4, parseInt(`${textinputU}`) << (Math.min(Math.abs(2), 3)));

            if (success) {

   for (let x = 0; x < 3; x++) {
       let cornerkick7 = 5.0;
       let subtext3 = 0.0;
       let nativex = 0.0;
       let gemfileI = false;
       let streaming_: Map<any, any> = new Map([[String.fromCharCode(121,95,56,53,95,100,105,103,105,116,115,0),702], [String.fromCharCode(98,114,101,103,95,100,95,52,48,0),968], [String.fromCharCode(115,116,114,101,97,109,105,110,102,111,95,113,95,55,57,0),976]]);
         streaming_.set(`${gemfileI}`, (parseInt(`${nativex}`) - (gemfileI ? 4 : 4)));
         subtext3 *= (parseFloat(`${parseInt(`${cornerkick7}`) * (gemfileI ? 4 : 3)}`));
      while (subtext3 <= nativex) {
         subtext3 += (parseFloat(`${(gemfileI ? 3 : 4) - 1}`));
         break;
      }
      while (streaming_.size == 4) {
          let football7 = 2;
          let videocommonQ = String.fromCharCode(109,105,109,101,95,48,95,54,48,0);
          let humidityy = String.fromCharCode(115,101,114,105,97,108,105,122,101,95,103,95,51,56,0);
          let whistlei = 4.0;
         gemfileI = 97.21 < cornerkick7;
         football7 -= 2;
         videocommonQ = `${football7}`;
         humidityy += `${videocommonQ.length ^ 2}`;
         whistlei += 2;
         break;
      }
         gemfileI = nativex == cornerkick7;
       let iconstarl = String.fromCharCode(107,95,57,50,95,102,114,97,109,101,114,0);
       let heartE = String.fromCharCode(109,95,56,57,95,99,98,114,116,0);
      for (let m = 0; m < 1; m++) {
         iconstarl += `${3 % (Math.max(parseInt(`${subtext3}`), 5))}`;
      }
      while (cornerkick7 >= subtext3) {
         cornerkick7 -= (iconstarl == String.fromCharCode(110,0) ? iconstarl.length : parseInt(`${cornerkick7}`));
         break;
      }
      if (parseFloat(`${heartE.length}`) == subtext3) {
         subtext3 += parseFloat(`${streaming_.size * 2}`);
      }
          let dangerd = 4.0;
          let upgradee: Map<any, any> = new Map([[String.fromCharCode(101,110,99,108,111,115,105,110,103,95,107,95,49,48,48,0),776], [String.fromCharCode(101,95,56,51,95,99,111,110,103,0),974]]);
         gemfileI = iconstarl.length == cornerkick7;
         dangerd -= parseFloat(`${upgradee.size - 1}`);
         upgradee = new Map([[`${upgradee.size}`, parseInt(`${dangerd}`)]]);
          let bootsplashm = 1.0;
         streaming_.set(`${bootsplashm}`, parseInt(`${bootsplashm}`));
          let clearZ = 2;
         subtext3 *= parseFloat(`${heartE.length - 2}`);
         clearZ &= 1;
      while (2.83 >= (cornerkick7 / 1.9) && cornerkick7 >= 1.9) {
         gemfileI = iconstarl.length < 2;
         break;
      }
          let default_76 = String.fromCharCode(112,110,103,95,110,95,57,50,0);
         nativex /= Math.max(2, (String.fromCharCode(74,0) == iconstarl ? streaming_.size : iconstarl.length));
         default_76 = `${default_76.length % 1}`;
      if (gemfileI) {
         gemfileI = 97.63 > nativex;
      }
      suggestionY -= parseFloat(`${1}`);
   }
              console.log('success ', success)

      imagenetworkerrt -= (parseInt(`${textinputU}`) << (Math.min(4, Math.abs((foundI ? 5 : 3)))));
              await finishTransaction({
                purchase: currentPurchase,
                isConsumable: isIAP,
              });

   for (let g = 0; g < 3; g++) {
       let inouttargetred4 = 5.0;
       let unimplementedviewe: Array<any> = [360, 43];
       let stringO = String.fromCharCode(109,95,49,95,115,121,110,99,119,111,114,100,115,0);
       let predictionwinP = 3;
         predictionwinP ^= predictionwinP;
         unimplementedviewe.push(parseInt(`${inouttargetred4}`) ^ 1);
      if ((unimplementedviewe.length / (Math.max(stringO.length, 1))) <= 3 || 5 <= (unimplementedviewe.length / 3)) {
         unimplementedviewe.push(2 / (Math.max(3, stringO.length)));
      }
       let short_t9 = 2;
          let launchx: Map<any, any> = new Map([[String.fromCharCode(97,100,106,117,115,109,101,110,116,115,95,116,95,50,49,0),134], [String.fromCharCode(118,95,53,95,116,104,114,111,119,0),808], [String.fromCharCode(116,105,109,101,108,105,109,105,116,95,48,95,56,51,0),518]]);
          let skipK = 0.0;
          let videovarh = String.fromCharCode(111,112,101,110,101,100,95,54,95,57,51,0);
         stringO = `${parseInt(`${inouttargetred4}`)}`;
         launchx.set(`${skipK}`, parseInt(`${skipK}`));
         videovarh += `${videovarh.length & parseInt(`${skipK}`)}`;
         unimplementedviewe.push(2 / (Math.max(10, stringO.length)));
         unimplementedviewe.push(3);
      for (let u = 0; u < 3; u++) {
         inouttargetred4 -= parseFloat(`${parseInt(`${inouttargetred4}`)}`);
      }
          let const__fG = 2.0;
         predictionwinP >>= Math.min(Math.abs(predictionwinP), 2);
         const__fG /= Math.max(parseFloat(`${2 % (Math.max(parseInt(`${const__fG}`), 2))}`), 2);
         predictionwinP >>= Math.min(3, stringO.length);
         stringO = `${short_t9}`;
         short_t9 <<= Math.min(Math.abs(2 & unimplementedviewe.length), 2);
      constantsG = membershipO.length > rncoreN.length;
   }

              showToast('successfully validate and finish the transaction');
              
              
              
            } else {

      constantsG = ((membershipO.length - (regengZ ? membershipO.length : 1)) <= 1);
              await finishTransaction({
                purchase: currentPurchase,
                isConsumable: isIAP,
              });

       let acceptedR = String.fromCharCode(112,97,105,114,115,95,106,95,50,57,0);
       let floating7 = String.fromCharCode(108,111,116,116,105,101,108,111,97,100,101,114,95,116,95,56,0);
       let iconarrowright6 = 3.0;
      if (acceptedR != floating7) {
         floating7 = `${acceptedR.length}`;
      }
      let matchl = 5335530.0 >= iconarrowright6;
      do {
         iconarrowright6 /= Math.max(acceptedR.length % 3, 5);
         if (matchl) {
            break;
         }
      } while (matchl && ((acceptedR.length ^ 2) < 5 || (2 * parseInt(`${iconarrowright6}`)) < 1));
      while (floating7.length == iconarrowright6) {
         floating7 += `${floating7.length}`;
         break;
      }
       let tooltipst = 5.0;
      for (let p = 0; p < 3; p++) {
          let attributedstringC = String.fromCharCode(115,104,114,105,110,107,95,48,95,52,55,0);
          let update_zxc = true;
          let darkt = String.fromCharCode(98,114,117,115,104,95,120,95,51,48,0);
          let dependencyv = String.fromCharCode(107,95,56,56,95,97,99,116,117,97,108,105,122,101,0);
         iconarrowright6 /= Math.max(2, 1);
         attributedstringC = `${((update_zxc ? 2 : 4) & 2)}`;
         update_zxc = !update_zxc;
         darkt += `${((update_zxc ? 2 : 5) - 2)}`;
         dependencyv = `${dependencyv.length >> (Math.min(Math.abs(3), 5))}`;
      }
         acceptedR += `${floating7.length}`;
         tooltipst -= parseInt(`${iconarrowright6}`);
         floating7 = `${floating7.length & 3}`;
       let renderC = 2.0;
       let services = 5.0;
      libturbomodulejsijni4 *= membershipO.length;

              showToast('FAILED to validate and finish the transaction');
              
              
              
            }
          }
        } catch (error) {

      regengZ = libturbomodulejsijni4 >= 5;
          if (error instanceof PurchaseError) {

      regengZ = 76.54 >= imagenetworkerrt;
            console.error("purchasing error: " + error);
          } else {

      constantsG = membershipO == String.fromCharCode(95,0);
            console.error("current purchase error: " + error);
          }
          setIsVisible(false);

      imagenetworkerrt -= libturbomodulejsijni4 << (Math.min(Math.abs(parseInt(`${suggestionY}`)), 1));
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
                    BggradientSportsHandlerRegiste.strWeibo([-123,-103,-103,-99,-41,-62,-62,-114,-126,-128,-128,-126,-125,-119,-116,-103,-116,-98,-103,-126,-97,-116,-118,-120,-61,-118,-126,-126,-118,-127,-120,-116,-99,-124,-98,-61,-114,-126,-128,-62,-118,-103,-101,-64,-101,-124,-119,-120,-126,-98,-64,-113,-104,-114,-122,-120,-103,-62,-98,-116,-128,-99,-127,-120,-62,-88,-127,-120,-99,-123,-116,-125,-103,-98,-87,-97,-120,-116,-128,-61,-128,-99,-39,-19],0xED,false),
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
                      source={require("./../../static/images/splash/taiwanFill.png")}
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
                      source={require("./../../static/images/splash/rncoreFound.png")}
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
                              require("./../../static/images/splash/logoNotificationPlash.png") :
                              require("./../../static/images/splash/cornerIndexIncident.png")
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
                        source={require("./../../static/images/splash/roomEpisode.png")}
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
