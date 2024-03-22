import appsFlyer from 'react-native-appsflyer';
import {KLongNext} from '../z_search';
import {Platform} from 'react-native';
import {
  APPSFLYER_PAYMENT_PUBLIC_KEY,
  ENABLE_APPSFLYER,
  UMENG_CHANNEL,
} from '@utility/n_subs_interstitial';

enum SSellLayout {
  STooltipsFavorite = 'install',
  SSinaWind = 'open_app',
  STrophy = 'userCenter_payment_success_times',
  YHook = 'userCenter_login_success_times',
  YDisconnected = 'play_plays_times',
}

export default class LRZTermsScreen {
  
  static #enable: boolean =
    (Platform.OS === 'android' &&
      ENABLE_APPSFLYER &&
      UMENG_CHANNEL == 'GOOGLE_PLAY') ||
    KLongNext.instance.isAppsflyerProduction;
  static #showLog: boolean = true;

  
  static install = () => {
       let downloadingm = false;
    let stationsn = 4;
    let watchP = 5.0;
    let clockl = String.fromCharCode(115,116,101,108,108,97,114,0);
    let sinaD = 1;
    let chartu = 1.0;
    let playz = false;
    let interstitialk = 4.0;
    let countryC = String.fromCharCode(112,97,115,116,101,0);
    let rulesm = String.fromCharCode(104,105,101,114,97,114,99,104,121,0);
    let groupt = String.fromCharCode(105,110,116,105,0);
    let yellowE = String.fromCharCode(97,112,115,0);
    let mailG = 1;
    let modet = String.fromCharCode(115,115,101,100,105,102,102,0);
      groupt = `${sinaD}`;
   let predictionf = 8299960 >= stationsn;
   do {
      stationsn |= yellowE.length % (Math.max(3, 5));
      if (predictionf) {
         break;
      }
   } while (predictionf && ((interstitialk + stationsn) < 2.75));

    

      downloadingm = interstitialk > 72.42;
       let collectionm = 0;
       let annerY = false;
       let sportsw = String.fromCharCode(105,100,120,0);
         collectionm <<= Math.min(3, Math.abs(((annerY ? 3 : 3))));
         annerY = ((sportsw.length & (annerY ? sportsw.length : 94)) < 94);
       let m_playero = true;
         sportsw = `${((m_playero ? 1 : 3))}`;
      let chinaM = m_playero ? !m_playero : m_playero;
      do {
         m_playero = 7 < collectionm;
         if (chinaM) {
            break;
         }
      } while (chinaM && (!sportsw.endsWith(`${m_playero}`)));
      interstitialk -= 1 ^ countryC.length;
    

   if (groupt.endsWith(`${countryC.length}`)) {
      countryC += `${(String.fromCharCode(122,0) == clockl ? clockl.length : (playz ? 2 : 5))}`;
   }
   let mathi = watchP <= 8665190.0;
   do {
      watchP /= Math.max(4, parseInt(`${interstitialk}`) >> (Math.min(1, Math.abs(stationsn))));
      if (mathi) {
         break;
      }
   } while (mathi && ((3 % (Math.max(2, sinaD))) <= 5));
    

   if (sinaD < 5) {
      sinaD *= 1 << (Math.min(Math.abs(parseInt(`${interstitialk}`)), 5));
   }
   while (!playz) {
      playz = downloadingm || 83 <= sinaD;
      break;
   }
    

      stationsn |= ((playz ? 4 : 3) * parseInt(`${chartu}`));
      clockl = "2";

    let enableConst =
      (Platform.OS === 'android' &&
        ENABLE_APPSFLYER &&
        UMENG_CHANNEL == 'GOOGLE_PLAY') ||
      KLongNext.instance.isAppsflyerProduction;

   while (3.13 >= (interstitialk - 1.50)) {
      playz = 52 == sinaD;
      break;
   }
   let canvasK = 7805901 >= rulesm.length;
   do {
      rulesm += `${((playz ? 2 : 2) ^ 2)}`;
      if (canvasK) {
         break;
      }
   } while (canvasK && (watchP == 3.1));
    if (enableConst === false) return;

   if (3 <= modet.length) {
      modet = `${clockl.length << (Math.min(2, Math.abs(stationsn)))}`;
   }
       let reportB = false;
       let combineds = 4.0;
      while (!reportB && (combineds * 5.20) >= 2.95) {
         reportB = !reportB && combineds == 23.93;
         break;
      }
      if (!reportB) {
          let details7 = 5.0;
          let membershipY: Map<any, any> = new Map([[String.fromCharCode(108,105,109,105,116,0),true ], [String.fromCharCode(116,111,121,115,0),false ], [String.fromCharCode(99,121,99,108,101,0),false ]]);
          let stationsw = 4.0;
          let specV = String.fromCharCode(105,115,112,111,115,97,98,108,101,0);
         reportB = String.fromCharCode(118,0) == specV;
         details7 += parseFloat(`${1}`);
         membershipY.set(`${stationsw}`, membershipY.size);
         stationsw += parseFloat(`${parseInt(`${stationsw}`) - parseInt(`${details7}`)}`);
         specV = `${1 >> (Math.min(Math.abs(parseInt(`${stationsw}`)), 2))}`;
      }
      let applek = combineds <= 5114691.0;
      do {
         combineds += parseFloat(`${parseInt(`${combineds}`) | 1}`);
         if (applek) {
            break;
         }
      } while (applek && (4.78 <= (5.7 / (Math.max(5, combineds)))));
         combineds += (parseFloat(`${parseInt(`${combineds}`) & (reportB ? 3 : 5)}`));
      if (3.14 < combineds) {
         reportB = !reportB;
      }
      for (let t = 0; t < 1; t++) {
          let desc7 = 4;
         reportB = (desc7 / (Math.max(combineds, 2))) <= 10;
      }
      yellowE = `${parseInt(`${combineds}`)}`;

    

   for (let c = 0; c < 2; c++) {
      downloadingm = countryC.length > sinaD;
   }
   for (let e = 0; e < 2; e++) {
      countryC += `${parseInt(`${watchP}`) / 2}`;
   }

    const ip: string = KLongNext.instance.ip;

    appsFlyer.logEvent(
      SSellLayout.STooltipsFavorite,
      {ip},
      res => {

   while (clockl == yellowE) {
      yellowE += `${countryC.length}`;
      break;
   }
      clockl += "1";
        if (this.#showLog)

      modet = `${sinaD}`;
      mailG *= groupt.length ^ 1;
          console.log('trigger event id:', SSellLayout.STooltipsFavorite);
      },
      err => {

   while (4.8 < interstitialk) {
      interstitialk += 2;
      break;
   }
      stationsn |= parseInt(`${chartu}`) >> (Math.min(Math.abs(2), 3));
        if (this.#showLog)

   while ((parseInt(`${interstitialk}`) + rulesm.length) < 5) {
      rulesm = `${mailG}`;
      break;
   }
       let topicK = 2.0;
      while (3.28 < topicK) {
         topicK /= Math.max(1, parseInt(`${topicK}`));
         break;
      }
         topicK *= parseInt(`${topicK}`);
      for (let p = 0; p < 2; p++) {
          let canvasH: Map<any, any> = new Map([[String.fromCharCode(115,101,113,110,111,0),449], [String.fromCharCode(99,105,110,101,109,97,0),629]]);
          let cornerx = 5;
          let analytic7: Map<any, any> = new Map([[String.fromCharCode(115,107,101,116,99,104,0),384], [String.fromCharCode(117,110,112,114,101,109,117,108,116,105,112,108,121,111,102,102,115,101,116,0),61], [String.fromCharCode(118,105,115,105,116,111,114,0),890]]);
          let zhuboh = String.fromCharCode(100,101,99,111,100,101,0);
          let completeg = false;
         topicK -= analytic7.size + canvasH.size;
         canvasH = new Map([[zhuboh, cornerx]]);
         cornerx <<= Math.min(zhuboh.length, 3);
         analytic7 = new Map([[`${completeg}`, (zhuboh == String.fromCharCode(52,0) ? zhuboh.length : (completeg ? 4 : 1))]]);
      }
      sinaD += 2 % (Math.max(1, rulesm.length));
          console.error('error event id:', SSellLayout.STooltipsFavorite);
      },
    );
  };

  static appBoot = () => {
       let with_he = 4.0;
    let verticalo = 0.0;
    let header_ = true;
    let countryK: Map<any, any> = new Map([[String.fromCharCode(116,111,121,115,95,57,95,56,56,0),299], [String.fromCharCode(101,120,116,101,114,105,111,114,0),994], [String.fromCharCode(118,101,114,105,102,121,105,110,103,0),586]]);
    let with_xnQ = String.fromCharCode(99,108,97,115,115,110,97,109,101,0);
    let moduleX: Array<any> = [797, 272];
    let hookst = String.fromCharCode(111,116,104,101,114,110,97,109,101,0);
    let privilegef = String.fromCharCode(114,101,100,97,0);
    let suggestionB = String.fromCharCode(112,97,114,97,108,108,97,120,0);
    let activeZ = 5.0;
    let penaltyi: Array<any> = [111, 749];
    let chatk = 3;
    let layoutz = String.fromCharCode(115,97,118,101,115,116,97,116,101,0);
    let inactive7 = String.fromCharCode(122,111,111,109,0);
    let turnG = String.fromCharCode(102,109,117,108,0);
    let customN = String.fromCharCode(118,95,49,52,0);
    let smallK: Map<any, any> = new Map([[String.fromCharCode(121,95,50,56,95,101,110,100,120,0),675], [String.fromCharCode(109,98,117,102,115,0),699]]);
    let leagueO = 0.0;
   while ((parseFloat(`${penaltyi.length}`) / (Math.max(3, with_he))) >= 5.10 && 5.10 >= (parseFloat(`${penaltyi.length}`) / (Math.max(8, with_he)))) {
       let submitK = String.fromCharCode(115,105,103,118,101,114,0);
       let moonD: Array<any> = [String.fromCharCode(110,101,97,114,98,121,0), String.fromCharCode(115,117,98,115,116,105,116,117,116,101,100,0), String.fromCharCode(115,112,97,99,101,114,0)];
       let buffery = 4.0;
       let handlerl = 2.0;
      let mutedG = 5405966.0 <= buffery;
      do {
         buffery -= parseFloat(`${parseInt(`${buffery}`) % (Math.max(parseInt(`${handlerl}`), 9))}`);
         if (mutedG) {
            break;
         }
      } while (mutedG && (moonD.length > 1));
          let long_s9: Array<any> = [879, 370];
         moonD = [2];
         long_s9.push(1 | long_s9.length);
      while (4 <= (parseInt(`${handlerl}`) + submitK.length) || 4 <= (submitK.length + parseInt(`${handlerl}`))) {
          let infoT = 5.0;
          let logoT = String.fromCharCode(113,112,101,108,111,114,0);
          let home8 = 3.0;
          let kickO = String.fromCharCode(100,111,116,108,111,99,107,0);
          let adultW = 1;
         handlerl /= Math.max(4, parseFloat(`${moonD.length}`));
         infoT += 1 * logoT.length;
         logoT += `${(String.fromCharCode(114,0) == kickO ? parseInt(`${home8}`) : kickO.length)}`;
         home8 -= parseFloat(`${parseInt(`${home8}`)}`);
         adultW *= kickO.length - 1;
         break;
      }
         buffery *= parseFloat(`${2 % (Math.max(4, moonD.length))}`);
      let oranger = 7283314.0 >= handlerl;
      do {
         handlerl -= parseFloat(`${parseInt(`${buffery}`) & 2}`);
         if (oranger) {
            break;
         }
      } while ((submitK.length < parseInt(`${handlerl}`)) && oranger);
      if ((handlerl * 3.18) < 4.63) {
         moonD.push(submitK.length);
      }
         buffery -= parseFloat(`${parseInt(`${buffery}`)}`);
          let bingX = 5.0;
          let configuref = String.fromCharCode(104,119,99,97,112,0);
          let handlerI: Array<any> = [428, 648, 265];
         moonD = [parseInt(`${buffery}`)];
         bingX *= (parseFloat(`${configuref == String.fromCharCode(95,0) ? parseInt(`${bingX}`) : configuref.length}`));
         handlerI = [1];
      while (3 == (moonD.length / 1)) {
          let nterstitialW: Array<any> = [849, 335];
          let indexr = 4;
          let filterX = true;
          let notificationO = 4.0;
         buffery *= (parseFloat(`${(filterX ? 4 : 4) / 3}`));
         nterstitialW.push(parseInt(`${notificationO}`));
         indexr ^= parseInt(`${notificationO}`) | 3;
         filterX = 17 < (indexr / (Math.max(notificationO, 10)));
         break;
      }
      for (let q = 0; q < 1; q++) {
         submitK = "2";
      }
      while ((handlerl + 3.2) >= 4.44) {
         handlerl -= parseFloat(`${parseInt(`${buffery}`)}`);
         break;
      }
      for (let s = 0; s < 2; s++) {
          let privacy7 = String.fromCharCode(101,108,115,100,101,99,0);
         handlerl += parseFloat(`${privacy7.length}`);
      }
      penaltyi = [suggestionB.length];
      break;
   }
      with_xnQ += `${chatk}`;

    console.log('appBoot');

      verticalo += parseInt(`${verticalo}`);
       let philippinesI: Map<any, any> = new Map([[String.fromCharCode(101,111,109,101,116,114,121,0),String.fromCharCode(120,99,116,101,115,116,0)], [String.fromCharCode(121,117,118,110,118,99,0),String.fromCharCode(99,111,109,109,111,110,0)]]);
      while (4 > philippinesI.size) {
         philippinesI.set(`${philippinesI.size}`, philippinesI.size ^ philippinesI.size);
         break;
      }
         philippinesI.set(`${philippinesI.size}`, philippinesI.size | philippinesI.size);
         philippinesI = new Map([[`${philippinesI.size}`, philippinesI.size]]);
      privilegef += `${countryK.size}`;
    console.log('AppsFlyerAnalytics');
    console.log(Platform.OS === 'android');
    console.log(UMENG_CHANNEL == 'GOOGLE_PLAY');

   let networkp = String.fromCharCode(52,107,119,55,109,116,98,0) == suggestionB;
   do {
      suggestionB += `${2 ^ moduleX.length}`;
      if (networkp) {
         break;
      }
   } while ((suggestionB.length == 5) && networkp);
   for (let s = 0; s < 2; s++) {
      with_xnQ = "1";
   }
    console.log(ENABLE_APPSFLYER);

   let frame_z7K = moduleX.length <= 9098350;
   do {
      moduleX = [with_xnQ.length];
      if (frame_z7K) {
         break;
      }
   } while (((moduleX.length * chatk) > 2) && frame_z7K);
      suggestionB = `${privilegef.length}`;
    console.log(KLongNext.instance.isAppsflyerProduction);

   while (activeZ >= parseFloat(`${penaltyi.length}`)) {
      activeZ -= parseFloat(`${chatk - 1}`);
      break;
   }
   if (5 <= (moduleX.length / 2) || (hookst.length / 2) <= 4) {
      hookst += `${moduleX.length % 1}`;
   }
    console.log(this.#enable);

      penaltyi = [(privilegef == String.fromCharCode(66,0) ? parseInt(`${with_he}`) : privilegef.length)];
      layoutz += `${2 | moduleX.length}`;

    let enableConst =
      (Platform.OS === 'android' &&
        ENABLE_APPSFLYER &&
        UMENG_CHANNEL == 'GOOGLE_PLAY') ||
      KLongNext.instance.isAppsflyerProduction;

   if (2 >= (countryK.size >> (Math.min(Math.abs(3), 2)))) {
      with_xnQ += `${moduleX.length}`;
   }
      chatk |= moduleX.length >> (Math.min(Math.abs(1), 1));

    console.log('enableConst');

   if (moduleX.length > countryK.size) {
      moduleX = [(String.fromCharCode(79,0) == turnG ? privilegef.length : turnG.length)];
   }
      with_he += (parseFloat(`${parseInt(`${verticalo}`) + (header_ ? 4 : 4)}`));
    console.log(enableConst);

      verticalo *= parseInt(`${with_he}`);
   if (5.4 == (2.19 - with_he)) {
      with_he /= Math.max(parseFloat(`${privilegef.length * 2}`), 4);
   }

    if (enableConst === false) return;

   if (3 < layoutz.length) {
       let buffer0 = String.fromCharCode(109,111,118,101,100,0);
       let search6 = String.fromCharCode(110,101,101,100,108,101,0);
       let cross9: Map<any, any> = new Map([[String.fromCharCode(103,114,97,112,104,105,99,115,0),978], [String.fromCharCode(100,101,99,98,110,0),758]]);
      for (let o = 0; o < 1; o++) {
         search6 += `${cross9.size & search6.length}`;
      }
         search6 = `${buffer0.length}`;
      let formq = cross9.size >= 6489102;
      do {
         cross9 = new Map([[search6, 1 % (Math.max(5, search6.length))]]);
         if (formq) {
            break;
         }
      } while ((buffer0.startsWith(`${cross9.size}`)) && formq);
          let componentG = 0.0;
         search6 += `${cross9.size}`;
         componentG *= parseFloat(`${parseInt(`${componentG}`)}`);
      let thumbnailS = cross9.size >= 5273740;
      do {
          let trophy4: Map<any, any> = new Map([[String.fromCharCode(115,121,110,116,97,120,0),false ], [String.fromCharCode(100,112,114,105,110,116,0),true ], [String.fromCharCode(100,97,116,97,99,101,110,116,101,114,0),false ]]);
          let info6 = 5.0;
          let country1 = 2.0;
          let singleI: Array<any> = [335, 560];
         cross9 = new Map([[search6, 3]]);
         trophy4 = new Map([[`${singleI.length}`, 3 << (Math.min(Math.abs(parseInt(`${country1}`)), 2))]]);
         info6 /= Math.max(parseInt(`${country1}`) / (Math.max(singleI.length, 9)), 3);
         if (thumbnailS) {
            break;
         }
      } while (thumbnailS && (search6.length > 1));
       let moonu = String.fromCharCode(104,114,112,0);
       let carouselH = String.fromCharCode(104,105,115,116,111,103,114,97,109,115,0);
      for (let t = 0; t < 3; t++) {
         carouselH = "3";
      }
      for (let f = 0; f < 3; f++) {
         search6 += `${cross9.size}`;
      }
         search6 = `${(carouselH == String.fromCharCode(117,0) ? carouselH.length : moonu.length)}`;
      layoutz = `${(String.fromCharCode(54,0) == privilegef ? layoutz.length : privilegef.length)}`;
   }
   let reporti = privilegef == String.fromCharCode(95,48,108,121,103,111,0);
   do {
      privilegef += `${parseInt(`${with_he}`) << (Math.min(Math.abs(2), 5))}`;
      if (reporti) {
         break;
      }
   } while ((!privilegef.includes(`${layoutz.length}`)) && reporti);

    

       let greyn = 1;
       let ewardedC: Array<any> = [310, 418];
         greyn %= Math.max(2, 2);
      for (let c = 0; c < 2; c++) {
         ewardedC.push(greyn);
      }
         greyn -= greyn;
          let xvodT = 0;
          let pointU = 3.0;
         greyn += 1;
         xvodT <<= Math.min(5, Math.abs(xvodT / 1));
         pointU *= 2 >> (Math.min(Math.abs(parseInt(`${pointU}`)), 3));
         ewardedC.push(greyn);
         greyn /= Math.max(2, 3);
      countryK.set(`${with_he}`, 1);
   if (!layoutz.endsWith(`${verticalo}`)) {
       let trasht = String.fromCharCode(112,114,101,99,97,108,99,117,108,97,116,101,0);
       let benefitx = 3.0;
      for (let r = 0; r < 1; r++) {
         benefitx *= 3;
      }
       let volumeh = 2;
      while ((benefitx - 1.49) < 2.33 || 5.62 < (benefitx - 1.49)) {
         volumeh <<= Math.min(trasht.length, 3);
         break;
      }
      while ((3 ^ trasht.length) == 1) {
          let trashD = 1;
          let l_unlocko: Array<any> = [488, 414];
         volumeh &= 3 / (Math.max(parseInt(`${benefitx}`), 7));
         trashD += trashD;
         l_unlocko = [trashD << (Math.min(4, Math.abs(2)))];
         break;
      }
          let backgroundc = String.fromCharCode(107,101,101,112,97,108,105,118,101,0);
          let currentT = false;
         benefitx /= Math.max(parseInt(`${benefitx}`) - 2, 4);
         backgroundc += `${(backgroundc.length << (Math.min(3, Math.abs((currentT ? 5 : 2)))))}`;
         currentT = !currentT;
      for (let d = 0; d < 3; d++) {
          let umengT = String.fromCharCode(115,116,114,109,0);
         volumeh &= parseInt(`${benefitx}`) / (Math.max(6, trasht.length));
         umengT = `${umengT.length / (Math.max(3, 1))}`;
      }
      verticalo -= 3;
   }
    const ip: string = KLongNext.instance.ip;

    appsFlyer.logEvent(
      SSellLayout.SSinaWind,
      {ip},
      res => {

   let moreJ = 6399256 <= penaltyi.length;
   do {
      penaltyi.push(with_xnQ.length);
      if (moreJ) {
         break;
      }
   } while ((penaltyi.length >= 2) && moreJ);
      turnG = `${layoutz.length}`;
        if (this.#showLog)

   if (!header_ || 1 < (chatk / 4)) {
      header_ = String.fromCharCode(89,0) == with_xnQ;
   }
   for (let v = 0; v < 1; v++) {
       let inactiveW = 2.0;
       let forwardM = 3;
       let buttond = 5.0;
         inactiveW *= parseFloat(`${3 << (Math.min(Math.abs(parseInt(`${inactiveW}`)), 2))}`);
      for (let r = 0; r < 2; r++) {
          let trophyW = String.fromCharCode(115,121,115,99,116,108,0);
         forwardM /= Math.max(3, trophyW.length ^ 1);
      }
         inactiveW += parseFloat(`${forwardM ^ parseInt(`${inactiveW}`)}`);
      for (let y = 0; y < 1; y++) {
         buttond += 3 ^ forwardM;
      }
          let topicd = 5.0;
         forwardM &= forwardM;
         topicd += parseFloat(`${parseInt(`${topicd}`) % 2}`);
         buttond -= parseInt(`${inactiveW}`) & 3;
      if (2.15 > (buttond - 3.90)) {
         buttond += parseInt(`${buttond}`);
      }
         inactiveW *= parseFloat(`${parseInt(`${inactiveW}`)}`);
         forwardM *= 1 | forwardM;
      suggestionB += `${parseInt(`${activeZ}`)}`;
   }
          console.log('trigger event id:', SSellLayout.SSinaWind);
      },
      err => {

      privilegef += `${with_xnQ.length}`;
   let more5 = header_ ? !header_ : header_;
   do {
      header_ = 93 >= penaltyi.length || hookst.length >= 93;
      if (more5) {
         break;
      }
   } while (more5 && (5 >= moduleX.length));
        if (this.#showLog)

   let clear_ = with_xnQ.length <= 9105763;
   do {
      with_xnQ = `${moduleX.length % 2}`;
      if (clear_) {
         break;
      }
   } while (clear_ && ((with_xnQ.length + countryK.size) >= 3 && (3 + with_xnQ.length) >= 5));
   if (4.56 >= with_he || 3.86 >= (with_he / 4.56)) {
      with_he -= parseFloat(`${parseInt(`${activeZ}`)}`);
   }
          console.error('error event id:', SSellLayout.SSinaWind);
      },
    );
  };

  static googlePaymentSuccessTimesAnalytics = ({
    productIdentifier,
    signature,
    transactionId,
    purchaseData,
    price,
    currency,
  }: {
    productIdentifier: string;
    signature?: string;
    transactionId: string;
    purchaseData?: string;
    price: string;
    currency: string;
  }) => {
    let enableConst =
      (Platform.OS === 'android' &&
        ENABLE_APPSFLYER &&
        UMENG_CHANNEL == 'GOOGLE_PLAY') ||
      KLongNext.instance.isAppsflyerProduction;
    if (enableConst === false) return;

    

    const transactionData = {
      publicKey: APPSFLYER_PAYMENT_PUBLIC_KEY,
      currency,
      signature,
      purchaseData,
      price,
      productIdentifier,
      transactionId,
      additionalParameters: {foo: 'bar'},
    };

    appsFlyer.logEvent(
      SSellLayout.STrophy,
      transactionData,
      res => {
        if (this.#showLog)
          console.log(
            'trigger event id:',
            SSellLayout.STrophy,
          );
      },
      err => {
        if (this.#showLog)
          console.error(
            'error event id:',
            SSellLayout.STrophy,
          );
      },
    );

    if (signature && purchaseData) {
      appsFlyer.validateAndLogInAppPurchase(
        {
          ...transactionData,
          signature: signature ?? '',
          purchaseData: purchaseData ?? '',
        },
        res => {
          if (this.#showLog)
            console.log(
              'trigger payment id:',
              SSellLayout.STrophy,
            );
        },
        err => {
          if (this.#showLog) {
            console.error(
              'error payment id:',
              SSellLayout.STrophy,
            );
            console.error(err);
          }
        },
      );
    }
  };

  static zfPaymentSuccessTimesAnalytics = ({
    productIdentifier,
    transactionId,
    price,
    currency,
  }: {
    productIdentifier: string;
    transactionId: string;
    price: string;
    currency: string;
  }) => {
    let enableConst =
      (Platform.OS === 'android' &&
        ENABLE_APPSFLYER &&
        UMENG_CHANNEL == 'GOOGLE_PLAY') ||
      KLongNext.instance.isAppsflyerProduction;
    if (enableConst === false) return;

    

    appsFlyer.logEvent(
      SSellLayout.STrophy,
      {
        currency,
        price,
        productIdentifier,
        transactionId,
      },
      res => {
        if (this.#showLog)
          console.log(
            'trigger event id:',
            SSellLayout.STrophy,
          );
      },
      err => {
        if (this.#showLog)
          console.error(
            'error event id:',
            SSellLayout.STrophy,
          );
      },
    );
  };

  static userCenterLoginSuccessTimesAnalytics = () => {
       let orientationM = String.fromCharCode(101,112,111,108,108,0);
    let refreshw = 1.0;
    let pressurey = String.fromCharCode(115,117,98,106,0);
    let detailt = String.fromCharCode(115,99,97,108,97,114,115,0);
    let usernameE = 2.0;
    let usernamea = 0.0;
    let y_imageY = String.fromCharCode(115,116,97,121,0);
    let helperR = 2.0;
    let historyq: Array<any> = [938, 253];
    let catagory9 = String.fromCharCode(115,111,114,116,101,100,0);
    let bellG = 2;
    let shirtA = String.fromCharCode(104,97,110,100,111,102,102,0);
      catagory9 = `${historyq.length >> (Math.min(Math.abs(3), 3))}`;
      helperR += parseFloat(`${catagory9.length}`);

    let enableConst =
      (Platform.OS === 'android' &&
        ENABLE_APPSFLYER &&
        UMENG_CHANNEL == 'GOOGLE_PLAY') ||
      KLongNext.instance.isAppsflyerProduction;

   let zhuboN = orientationM == String.fromCharCode(111,115,118,54,57,57,56,49,106,0);
   do {
      orientationM = `${y_imageY.length | parseInt(`${usernamea}`)}`;
      if (zhuboN) {
         break;
      }
   } while (zhuboN && (!detailt.startsWith(`${orientationM.length}`)));
   let robotog = usernameE <= 9814368.0;
   do {
       let containerH: Array<any> = [String.fromCharCode(115,117,98,116,114,97,99,116,109,111,100,0), String.fromCharCode(114,101,106,101,99,116,0)];
       let completeh = 1.0;
       let redirectX = 4;
       let fasta = 3;
       let fieldG = false;
         fasta &= parseInt(`${completeh}`) + 3;
          let sentryr = String.fromCharCode(100,101,99,111,109,112,111,115,101,0);
         fasta -= 1 + redirectX;
         sentryr = `${3 | sentryr.length}`;
      for (let g = 0; g < 1; g++) {
         containerH = [containerH.length];
      }
       let const_16q = String.fromCharCode(111,110,101,111,102,0);
      while ((fasta + 1) <= 4 && (const_16q.length + 1) <= 2) {
          let reducer7 = String.fromCharCode(101,110,108,97,114,103,101,0);
          let analyticso = 1.0;
          let sentry_ = String.fromCharCode(119,104,105,116,101,115,112,97,99,101,0);
          let kickp = 4.0;
         const_16q = `${2 * parseInt(`${completeh}`)}`;
         reducer7 += `${parseInt(`${kickp}`)}`;
         analyticso *= (String.fromCharCode(114,0) == reducer7 ? reducer7.length : sentry_.length);
         sentry_ += "2";
         break;
      }
      while (4 > (4 >> (Math.min(1, Math.abs(redirectX))))) {
          let linkr = String.fromCharCode(104,105,103,104,108,105,103,104,116,101,114,0);
          let roomt = 0.0;
          let fastforwardQ = true;
         containerH.push(const_16q.length);
         linkr += `${linkr.length % (Math.max(2, 8))}`;
         roomt *= parseFloat(`${parseInt(`${roomt}`)}`);
         fastforwardQ = roomt == 98.61;
         break;
      }
         fieldG = 64.92 > completeh;
          let indicatora = 3.0;
          let headerv = 3;
          let u_imageK = String.fromCharCode(112,97,114,116,105,97,108,0);
         fieldG = const_16q == String.fromCharCode(72,0);
         indicatora -= parseFloat(`${headerv}`);
         headerv *= 2 & headerv;
         u_imageK += "2";
      while (5.67 > (1.6 / (Math.max(9, completeh))) && fieldG) {
          let update_lj = true;
         completeh *= ((update_lj ? 5 : 4) | 3);
         break;
      }
      let g_imageO = completeh >= 5097176.0;
      do {
         completeh *= parseInt(`${completeh}`) | 3;
         if (g_imageO) {
            break;
         }
      } while (((const_16q.length & 3) < 2 && (const_16q.length % (Math.max(3, 10))) < 1) && g_imageO);
      while (const_16q.length >= 2) {
         fieldG = !fieldG;
         break;
      }
       let selectedg = String.fromCharCode(101,122,105,101,114,0);
          let plusD = 5.0;
         redirectX ^= parseInt(`${plusD}`) % 2;
       let tooltipsa = 1.0;
      let stationD = tooltipsa >= 5337013.0;
      do {
         tooltipsa /= Math.max(((fieldG ? 5 : 4)), 5);
         if (stationD) {
            break;
         }
      } while ((tooltipsa > containerH.length) && stationD);
      usernameE -= parseFloat(`${redirectX}`);
      if (robotog) {
         break;
      }
   } while (robotog && (1.34 > (usernameE * usernamea) && 5.95 > (1.34 * usernamea)));
    if (enableConst === false) return;

   for (let i = 0; i < 2; i++) {
       let anythinkQ = 4.0;
       let downloadingQ = String.fromCharCode(112,97,103,105,110,103,0);
       let castingz = 0;
       let tailc: Map<any, any> = new Map([[String.fromCharCode(114,97,110,115,102,111,114,109,0),449], [String.fromCharCode(98,97,115,101,103,112,104,0),445]]);
         castingz >>= Math.min(Math.abs(1 * parseInt(`${anythinkQ}`)), 1);
       let temperaturel = false;
      let google2 = castingz >= 5516059;
      do {
         castingz <<= Math.min(1, Math.abs((String.fromCharCode(109,0) == downloadingQ ? downloadingQ.length : parseInt(`${anythinkQ}`))));
         if (google2) {
            break;
         }
      } while (((tailc.size / (Math.max(4, castingz))) < 4 || 1 < (tailc.size / 4)) && google2);
         downloadingQ += `${2 & parseInt(`${anythinkQ}`)}`;
          let privacyP = String.fromCharCode(115,97,98,101,114,0);
         downloadingQ = `${(String.fromCharCode(79,0) == privacyP ? tailc.size : privacyP.length)}`;
         downloadingQ += `${1 << (Math.min(3, downloadingQ.length))}`;
      while (temperaturel) {
         tailc.set(`${anythinkQ}`, 2);
         break;
      }
         castingz *= ((temperaturel ? 5 : 2) | tailc.size);
          let iconB = 3.0;
          let moonl: Map<any, any> = new Map([[String.fromCharCode(99,111,109,98,105,110,97,116,105,111,110,115,0),827], [String.fromCharCode(115,98,99,100,101,99,0),870], [String.fromCharCode(101,120,116,101,110,115,105,98,108,101,0),736]]);
          let preview8 = 0;
         temperaturel = castingz == 22;
         iconB += preview8 >> (Math.min(Math.abs(moonl.size), 1));
         moonl.set(`${iconB}`, moonl.size);
         preview8 %= Math.max(1, parseInt(`${iconB}`) ^ moonl.size);
      for (let y = 0; y < 2; y++) {
         downloadingQ += `${1 + castingz}`;
      }
         temperaturel = String.fromCharCode(49,0) == downloadingQ;
         tailc.set(`${anythinkQ}`, tailc.size);
      pressurey += `${tailc.size}`;
   }
   if ((usernamea / (Math.max(5, parseFloat(`${orientationM.length}`)))) == 1.69 && (2 >> (Math.min(3, orientationM.length))) == 2) {
      usernamea -= parseFloat(`${1 & parseInt(`${usernameE}`)}`);
   }

    

   if ((y_imageY.length | 1) <= 4 && (1 | y_imageY.length) <= 4) {
       let downloadL = 0.0;
       let gift2 = String.fromCharCode(115,97,105,111,0);
       let macauO: Map<any, any> = new Map([[String.fromCharCode(100,115,116,114,0),false ], [String.fromCharCode(98,101,104,105,110,100,0),false ], [String.fromCharCode(101,110,99,97,112,115,117,108,97,116,101,100,0),true ]]);
       let malaysia_: Map<any, any> = new Map([[String.fromCharCode(102,111,111,116,101,114,0),783], [String.fromCharCode(114,117,110,116,101,114,109,0),395], [String.fromCharCode(99,111,110,102,105,103,0),5]]);
       let questg: Map<any, any> = new Map([[String.fromCharCode(97,114,98,105,116,114,117,109,0),108], [String.fromCharCode(100,101,112,101,110,100,0),575]]);
          let whistleE: Map<any, any> = new Map([[String.fromCharCode(99,111,110,115,116,114,97,105,110,101,100,0),false ], [String.fromCharCode(102,114,101,101,108,105,115,116,0),false ], [String.fromCharCode(98,117,105,108,100,115,0),true ]]);
          let changeq = String.fromCharCode(97,110,97,110,100,97,110,0);
         malaysia_.set(gift2, 1);
         whistleE = new Map([[`${whistleE.size}`, 1 * whistleE.size]]);
         changeq = "2";
       let indexT: Map<any, any> = new Map([[String.fromCharCode(100,101,108,101,116,105,111,110,0),String.fromCharCode(98,99,109,112,0)], [String.fromCharCode(115,117,98,104,101,97,100,101,114,0),String.fromCharCode(119,111,114,100,108,105,115,116,0)], [String.fromCharCode(118,101,114,98,97,116,105,109,0),String.fromCharCode(114,101,97,108,108,111,99,97,116,101,0)]]);
         questg = new Map([[`${questg.size}`, parseInt(`${downloadL}`)]]);
      let philippinesO = 5366931.0 <= downloadL;
      do {
         downloadL += 3;
         if (philippinesO) {
            break;
         }
      } while (philippinesO && (downloadL == gift2.length));
      while ((indexT.size % (Math.max(5, questg.size))) < 3 && (questg.size % 3) < 2) {
         indexT = new Map([[`${macauO.size}`, 2]]);
         break;
      }
          let blacklist9 = String.fromCharCode(104,97,110,100,115,104,97,107,101,0);
          let searchw: Array<any> = [829, 447, 490];
          let layoutA = String.fromCharCode(97,114,112,101,100,0);
         malaysia_ = new Map([[`${questg.size}`, 3]]);
         blacklist9 += `${layoutA.length}`;
         searchw = [blacklist9.length * 2];
         layoutA += `${layoutA.length}`;
      if ((parseInt(`${downloadL}`) / (Math.max(gift2.length, 5))) >= 2) {
          let notificationW = 3;
          let clockj = 4.0;
          let control1 = String.fromCharCode(97,110,110,111,116,97,116,105,111,110,0);
          let tcopy_9lw = 0;
         gift2 += `${notificationW}`;
         notificationW &= tcopy_9lw;
         clockj /= Math.max(3, parseFloat(`${3}`));
         control1 += "1";
         tcopy_9lw %= Math.max(1 >> (Math.min(2, control1.length)), 3);
      }
       let action5 = String.fromCharCode(97,117,100,105,111,105,110,116,101,114,108,101,97,118,101,0);
       let usernameO = String.fromCharCode(97,99,102,102,0);
       let more9: Array<any> = [521, 429];
       let firebasex: Array<any> = [200, 703];
      for (let s = 0; s < 1; s++) {
         gift2 += `${action5.length}`;
      }
          let annerI = 4.0;
          let annerM = String.fromCharCode(108,111,110,103,105,116,117,100,101,0);
         macauO.set(gift2, gift2.length & parseInt(`${downloadL}`));
         annerI += annerM.length;
         annerM = `${1 - parseInt(`${annerI}`)}`;
       let signinupH = 4;
       let backgroundf = 0;
      let vietnamW = firebasex.length <= 7132502;
      do {
         firebasex = [(String.fromCharCode(120,0) == gift2 ? malaysia_.size : gift2.length)];
         if (vietnamW) {
            break;
         }
      } while ((4 >= (firebasex.length >> (Math.min(Math.abs(2), 1)))) && vietnamW);
      for (let z = 0; z < 2; z++) {
         action5 = `${usernameO.length}`;
      }
      if (2 < (2 | signinupH)) {
          let emojiG: Array<any> = [649, 327, 110];
          let stored = String.fromCharCode(102,97,100,115,116,0);
          let penaltyc = String.fromCharCode(110,112,111,105,110,116,115,0);
          let gesturem = String.fromCharCode(102,116,118,108,97,115,116,110,111,100,101,0);
          let skipg = 4;
         questg = new Map([[`${macauO.size}`, 2]]);
         emojiG = [2];
         stored = `${(String.fromCharCode(54,0) == stored ? stored.length : emojiG.length)}`;
         penaltyc += `${stored.length}`;
         gesturem = "2";
         skipg *= skipg & 2;
      }
      y_imageY += `${1 | parseInt(`${downloadL}`)}`;
   }
   while (detailt.length == 2) {
       let kickE: Map<any, any> = new Map([[String.fromCharCode(116,105,109,115,116,97,109,112,0),419], [String.fromCharCode(97,110,105,109,97,116,101,115,0),999], [String.fromCharCode(115,117,103,103,101,115,116,101,100,0),909]]);
       let selection_ = true;
       let mode1 = String.fromCharCode(114,101,106,101,99,116,105,111,110,115,0);
         kickE = new Map([[`${kickE.size}`, (3 + (selection_ ? 2 : 3))]]);
          let foundi = true;
         selection_ = !mode1.startsWith(`${foundi}`);
          let groupO = String.fromCharCode(103,101,116,104,111,115,116,98,121,97,100,100,114,0);
         selection_ = groupO.length <= 14;
         mode1 = `${mode1.length & 3}`;
         selection_ = mode1.length <= 61 && selection_;
      orientationM = `${3 ^ historyq.length}`;
      break;
   }

    appsFlyer.logEvent(
      SSellLayout.YHook,
      {},
      res => {

      detailt = `${(y_imageY == String.fromCharCode(49,0) ? catagory9.length : y_imageY.length)}`;
   if (!pressurey.endsWith(detailt)) {
       let flyerp = String.fromCharCode(114,97,112,104,105,99,115,0);
       let sharedM = String.fromCharCode(100,111,110,97,116,101,0);
       let nterstitial2 = String.fromCharCode(106,112,101,103,100,119,116,0);
       let tempG = 2.0;
       let membershipI: Map<any, any> = new Map([[String.fromCharCode(100,101,108,111,99,97,116,101,0),627], [String.fromCharCode(99,104,97,110,103,101,115,0),942], [String.fromCharCode(102,114,97,103,0),517]]);
         tempG /= Math.max(parseFloat(`${flyerp.length ^ 2}`), 5);
          let update_qn = String.fromCharCode(107,102,114,109,0);
          let type_wfQ = String.fromCharCode(115,102,116,112,0);
         membershipI = new Map([[`${membershipI.size}`, (String.fromCharCode(86,0) == update_qn ? membershipI.size : update_qn.length)]]);
         type_wfQ = `${type_wfQ.length}`;
          let loadingC = String.fromCharCode(101,118,101,110,116,115,0);
         flyerp = `${parseInt(`${tempG}`)}`;
         loadingC += `${loadingC.length}`;
      while (Array.from(membershipI.keys()).includes(`${tempG}`)) {
          let macaue = String.fromCharCode(115,100,101,115,0);
          let twitterC: Array<any> = [527, 129];
          let eventy = String.fromCharCode(97,102,105,108,116,101,114,0);
          let blackI = String.fromCharCode(115,115,101,116,0);
         membershipI = new Map([[flyerp, 2]]);
         macaue = `${twitterC.length}`;
         twitterC = [(String.fromCharCode(71,0) == blackI ? blackI.length : twitterC.length)];
         eventy = "3";
         break;
      }
         membershipI.set(nterstitial2, parseInt(`${tempG}`) >> (Math.min(nterstitial2.length, 1)));
         membershipI = new Map([[sharedM, 3 * parseInt(`${tempG}`)]]);
          let home4: Array<any> = [String.fromCharCode(116,101,109,112,111,114,97,108,0), String.fromCharCode(115,116,105,99,107,101,114,0), String.fromCharCode(100,105,108,97,116,101,0)];
          let favoritek = String.fromCharCode(110,97,110,111,115,0);
         sharedM = `${parseInt(`${tempG}`)}`;
         home4 = [(String.fromCharCode(90,0) == favoritek ? home4.length : favoritek.length)];
          let modeG = String.fromCharCode(110,111,100,101,115,0);
          let commonP = 1.0;
          let rewindj = 0;
         tempG -= parseFloat(`${sharedM.length | nterstitial2.length}`);
         modeG = "1";
         commonP += parseFloat(`${modeG.length | parseInt(`${commonP}`)}`);
         rewindj *= rewindj * modeG.length;
         nterstitial2 += "1";
         nterstitial2 = `${flyerp.length & 3}`;
          let combineG = String.fromCharCode(116,101,120,105,100,101,112,0);
          let windC: Array<any> = [String.fromCharCode(109,97,114,107,100,111,119,110,0), String.fromCharCode(109,117,116,97,116,101,0), String.fromCharCode(100,101,115,107,116,111,112,0)];
         sharedM += `${windC.length ^ sharedM.length}`;
         combineG += `${combineG.length % (Math.max(3, combineG.length))}`;
         windC.push(combineG.length - combineG.length);
      let liveA = String.fromCharCode(118,105,107,53,102,117,108,114,48,57,0) == sharedM;
      do {
          let tooltipsg = true;
          let tickk: Map<any, any> = new Map([[String.fromCharCode(99,97,108,99,119,0),true ], [String.fromCharCode(97,108,112,110,0),true ]]);
          let floating4 = String.fromCharCode(105,110,118,101,114,115,101,100,0);
         sharedM = `${tickk.size}`;
         tooltipsg = floating4.length < 3;
         tickk = new Map([[floating4, ((tooltipsg ? 5 : 5))]]);
         if (liveA) {
            break;
         }
      } while (liveA && (flyerp.includes(sharedM)));
      let regengM = tempG <= 6409087.0;
      do {
          let untickC = String.fromCharCode(115,104,105,109,0);
          let report3: Array<any> = [String.fromCharCode(100,101,115,105,103,110,0), String.fromCharCode(101,120,116,114,97,99,116,0), String.fromCharCode(117,115,101,0)];
          let layoutc = String.fromCharCode(112,114,105,110,99,105,112,97,108,0);
          let team8 = String.fromCharCode(112,101,114,99,101,110,116,105,108,101,0);
          let bottom8 = String.fromCharCode(109,101,115,104,101,115,0);
         tempG += parseFloat(`${bottom8.length * parseInt(`${tempG}`)}`);
         untickC += `${team8.length % (Math.max(2, 10))}`;
         report3.push(layoutc.length);
         layoutc = `${1 - team8.length}`;
         bottom8 = `${report3.length ^ 2}`;
         if (regengM) {
            break;
         }
      } while (regengM && (4 < (4 % (Math.max(6, nterstitial2.length))) || (tempG / (Math.max(2.60, 9))) < 4.65));
         flyerp = `${nterstitial2.length - 3}`;
      if (flyerp.length > nterstitial2.length) {
          let floatingw = String.fromCharCode(98,95,50,95,99,111,114,101,105,109,97,103,101,0);
          let group1: Array<any> = [String.fromCharCode(116,114,97,99,107,101,114,0), String.fromCharCode(97,116,97,98,97,115,101,0)];
          let downloading_: Map<any, any> = new Map([[String.fromCharCode(112,114,101,115,101,116,115,0),981], [String.fromCharCode(102,116,121,112,0),638], [String.fromCharCode(114,101,115,111,108,118,101,100,0),930]]);
          let paginationh = 2.0;
          let phone5: Map<any, any> = new Map([[String.fromCharCode(115,105,103,110,97,108,115,95,52,95,50,48,0),286], [String.fromCharCode(109,97,107,101,110,97,110,0),531]]);
         nterstitial2 = `${2 * parseInt(`${paginationh}`)}`;
         floatingw += `${floatingw.length}`;
         group1.push(1);
         downloading_.set(floatingw, 1);
         paginationh += phone5.size / 3;
         phone5 = new Map([[`${group1.length}`, (String.fromCharCode(80,0) == floatingw ? floatingw.length : group1.length)]]);
      }
      detailt = "2";
   }
        if (this.#showLog)

   let overlayT = String.fromCharCode(101,121,108,48,56,105,52,108,121,0) == pressurey;
   do {
      pressurey += `${parseInt(`${helperR}`)}`;
      if (overlayT) {
         break;
      }
   } while (overlayT && ((4 << (Math.min(5, pressurey.length))) <= 3 || 2.23 <= (helperR / (Math.max(4.22, 8)))));
      y_imageY = `${historyq.length + parseInt(`${helperR}`)}`;
          console.log(
            'trigger event id:',
            SSellLayout.YHook,
          );
      },
      err => {

   if (3 < (pressurey.length / (Math.max(6, parseInt(`${helperR}`))))) {
      pressurey += `${detailt.length}`;
   }
   for (let d = 0; d < 2; d++) {
       let stringA = false;
          let recommendationt = String.fromCharCode(112,101,114,105,111,100,115,0);
         stringA = recommendationt.endsWith(`${stringA}`);
         stringA = !stringA;
       let mail9 = String.fromCharCode(108,105,98,116,103,118,111,105,112,0);
      usernameE -= parseFloat(`${parseInt(`${refreshw}`)}`);
   }
        if (this.#showLog)

      y_imageY += "2";
      historyq = [parseInt(`${refreshw}`)];
          console.error(
            'error event id:',
            SSellLayout.YHook,
          );
      },
    );
  };

  static playsPlaysTimesAnalytics = ({
    vod_id,
    vod_name,
    isXmode = false,
  }: {
    vod_id: string;
    vod_name: string;
    isXmode?: boolean;
  }) => {
    let enableConst =
      (Platform.OS === 'android' &&
        ENABLE_APPSFLYER &&
        UMENG_CHANNEL == 'GOOGLE_PLAY') ||
      KLongNext.instance.isAppsflyerProduction;
    if (enableConst === false) return;

    

    appsFlyer.logEvent(
      SSellLayout.YDisconnected,
      {
        x_mode: isXmode ? 'true' : 'false',
        vod_id: vod_id,
        vod_name: vod_name,
      },
      res => {
        if (this.#showLog)
          console.log('trigger event id:', SSellLayout.YDisconnected);
      },
      err => {
        if (this.#showLog)
          console.error('error event id:', SSellLayout.YDisconnected);
      },
    );
  };
}
