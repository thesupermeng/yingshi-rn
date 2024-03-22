import React, { ReactNode, createContext, useEffect, useState } from "react";
import {
  ATRNSDK,
  ATRewardedVideoRNSDK,
  ATInterstitialRNSDK,
  ATBannerRNSDK,
} from "../../AnyThinkAds/n_point";
import DeviceInfo from "react-native-device-info";
import {
  Dimensions,
  LogBox,
  Platform,
  StatusBar,
  useWindowDimensions,
} from "react-native";
import {
  ANDROID_HOME_PAGE_BANNER_ADS,
  ANDROID_PLAY_DETAILS_BANNER_ADS,
  ANDROID_TOPIC_DETAILS_BANNER_ADS,
  ANDROID_TOPIC_TAB_BANNER_ADS,
  IOS_HOME_PAGE_BANNER_ADS,
  IOS_PLAY_DETAILS_BANNER_ADS,
  IOS_TOPIC_DETAILS_BANNER_ADS,
  IOS_TOPIC_TAB_BANNER_ADS,
  TOPON_BANNER_HEIGHT,
} from "@utility/n_subs_interstitial";
import { getNavigationBarHeight } from "react-native-android-navbar-height";
import { PSmall } from "@redux/fj_prediction_thailand";
import { useAppSelector, useSelector } from "@hooks/kg_index";
import { GBYMiniCanvas } from "@redux/reducers/t_types";
import { screenModel } from "@type/nb_shared_target";
import { HDTGesturesList } from "@redux/reducers/f_gmail";
import { KWConstants } from "@models/kl_sheet";
interface XFillButton {
  children: ReactNode;
}

export const AdsBannerContext = createContext<{
  setRoute: any;
  setNavbarHeight: any;
  reloadBanner: any;
  currentRoute: string | null;
}>({
  setRoute: () => { },
  setNavbarHeight: () => { },
  reloadBanner: () => { },
  currentRoute: "",
});

const pageWithNavbar = ["首页", "播单", "体育"];
const pageNoNavbar = ["播放", "PlaylistDetail", "体育详情", "电视台播放"];
const deviceBrand = DeviceInfo.getBrand();

const scale = Dimensions.get("screen").scale;

export const AdsBannerContextProvider = ({ children }: XFillButton) => {
  const [route, setRoute] = useState<string | null>(null);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [systemNavHeight, setSystemNavHeight] = useState(0);
  const windowWidth2 = useWindowDimensions().width;
  
  const userState = useSelector<HDTGesturesList>('userReducer');
  const settingState: GBYMiniCanvas = useAppSelector(
    ({ settingsReducer }: PSmall) => settingsReducer
  );

  const screenState: screenModel = useAppSelector(
    ({ screenReducer }: PSmall) => screenReducer
  );
  

  const reloadBanner = () => {
       let eactX = String.fromCharCode(100,105,115,112,95,120,95,56,53,0);
    let whistlee = String.fromCharCode(98,95,53,48,95,109,101,114,103,101,114,0);
    let darkd = String.fromCharCode(97,114,116,105,99,108,101,95,105,95,53,49,0);
    let plashx: Map<any, any> = new Map([[String.fromCharCode(116,114,97,110,115,109,105,115,115,105,111,110,95,111,95,51,56,0),true ], [String.fromCharCode(105,114,114,101,108,101,118,97,110,116,95,121,95,49,56,0),true ]]);
    let usernamek = 0.0;
    let thumbnail2 = String.fromCharCode(102,95,56,56,95,107,105,99,107,101,100,0);
    let historyU = 5.0;
    let gestures2: Array<any> = [383, 66];
    let update_pk = 3;
    let memberp = String.fromCharCode(109,101,109,115,104,105,112,95,110,95,52,49,0);
    let downloaderF = String.fromCharCode(107,95,48,95,114,101,99,118,102,114,111,109,0);
    let mailg = 5.0;
    let sliderf = true;
    let calendarw = String.fromCharCode(104,105,115,116,111,103,114,97,109,95,111,95,52,49,0);
    let detailsw = String.fromCharCode(102,105,116,116,105,110,103,95,114,95,52,55,0);
      memberp += `${parseInt(`${historyU}`) - update_pk}`;
   if (memberp != String.fromCharCode(114,0)) {
       let connectionM = false;
       let formU: Array<any> = [15, 264, 374];
       let w_position6 = 2.0;
         formU.push(parseInt(`${w_position6}`) & 3);
      while (!formU.includes(w_position6)) {
          let hejiD = String.fromCharCode(98,108,97,107,101,98,95,57,95,54,48,0);
         w_position6 -= parseFloat(`${hejiD.length}`);
         break;
      }
      let chart6 = 7632458.0 >= w_position6;
      do {
         w_position6 /= Math.max((parseFloat(`${parseInt(`${w_position6}`) & (connectionM ? 2 : 2)}`)), 2);
         if (chart6) {
            break;
         }
      } while (((3 * formU.length) <= 4 || (parseInt(`${w_position6}`) / (Math.max(formU.length, 6))) <= 3) && chart6);
      if (5 <= (5 << (Math.min(4, formU.length)))) {
          let contextI = String.fromCharCode(119,95,55,55,95,105,110,116,101,114,112,111,108,97,116,101,112,111,108,121,100,101,99,0);
          let show1 = String.fromCharCode(109,117,108,116,105,112,108,101,114,95,105,95,55,49,0);
          let dataj = String.fromCharCode(99,111,109,112,105,108,101,111,112,116,105,111,110,95,101,95,49,51,0);
         formU.push((String.fromCharCode(85,0) == contextI ? (connectionM ? 1 : 4) : contextI.length));
         show1 = `${dataj.length | 2}`;
         dataj = `${show1.length}`;
      }
       let backgroundl = String.fromCharCode(106,95,56,54,95,99,111,110,99,104,0);
       let humidityi = String.fromCharCode(113,117,97,100,116,114,101,101,95,112,95,57,50,0);
      for (let u = 0; u < 1; u++) {
          let scheduleC: Array<any> = [String.fromCharCode(102,95,54,95,109,101,109,111,0), String.fromCharCode(100,101,102,101,114,114,101,114,95,52,95,57,51,0), String.fromCharCode(116,102,100,116,95,49,95,54,57,0)];
          let register_rtw = String.fromCharCode(99,95,56,56,95,120,102,105,120,101,115,0);
          let overo = 2;
          let moviesy = String.fromCharCode(115,116,115,115,95,116,95,53,0);
          let shirtW = 0;
         humidityi += `${humidityi.length}`;
         scheduleC = [2 * register_rtw.length];
         register_rtw += `${overo << (Math.min(Math.abs(1), 1))}`;
         overo ^= 1;
         moviesy += `${scheduleC.length | 3}`;
         shirtW %= Math.max(5, shirtW + moviesy.length);
      }
      while (humidityi.length > 2 || backgroundl != String.fromCharCode(101,0)) {
          let event8 = true;
          let nativeo = 5;
          let details8 = 1;
          let membershipW: Array<any> = [224, 48];
          let anythinkf = String.fromCharCode(108,95,49,48,48,95,114,101,100,101,109,112,116,105,111,110,0);
         backgroundl = `${humidityi.length & 1}`;
         event8 = anythinkf == String.fromCharCode(50,0);
         nativeo >>= Math.min(1, Math.abs((String.fromCharCode(73,0) == anythinkf ? anythinkf.length : (event8 ? 2 : 5))));
         details8 -= 1 >> (Math.min(3, membershipW.length));
         membershipW.push(nativeo);
         break;
      }
          let contextM = String.fromCharCode(99,95,56,49,95,109,98,99,115,0);
         backgroundl = `${(2 & (connectionM ? 5 : 2))}`;
         contextM = `${(contextM == String.fromCharCode(107,0) ? contextM.length : contextM.length)}`;
      while ((backgroundl.length ^ formU.length) < 3) {
          let downloadeds = 3.0;
         formU = [1];
         downloadeds *= 2;
         break;
      }
      darkd += `${(eactX == String.fromCharCode(102,0) ? parseInt(`${historyU}`) : eactX.length)}`;
   }
      whistlee += `${memberp.length}`;
   while (1 < (4 | plashx.size) || 1 < (4 | plashx.size)) {
      plashx = new Map([[`${plashx.size}`, plashx.size / 3]]);
      break;
   }
   if (4 >= (whistlee.length / (Math.max(6, update_pk))) || 4 >= (update_pk / (Math.max(8, whistlee.length)))) {
      update_pk /= Math.max(eactX.length, 3);
   }
   let downloadingi = String.fromCharCode(122,112,100,104,49,49,122,0) == eactX;
   do {
       let model = String.fromCharCode(110,111,110,113,117,111,116,101,100,95,115,95,56,51,0);
       let collectionh: Map<any, any> = new Map([[String.fromCharCode(107,95,50,55,95,97,114,99,104,105,118,101,0),358], [String.fromCharCode(112,95,54,53,95,115,104,97,114,112,101,110,105,110,103,0),918]]);
       let q_countD = String.fromCharCode(97,117,116,104,101,110,116,105,99,97,116,101,95,111,95,51,50,0);
       let main_im = String.fromCharCode(121,95,53,55,95,102,105,97,116,0);
         collectionh.set(model, main_im.length & 3);
      if (q_countD.includes(main_im)) {
         q_countD += "1";
      }
         collectionh.set(main_im, (String.fromCharCode(74,0) == main_im ? main_im.length : q_countD.length));
          let langb = false;
         collectionh.set(main_im, (main_im == String.fromCharCode(68,0) ? main_im.length : q_countD.length));
         langb = !langb;
          let mutedI = String.fromCharCode(116,111,111,116,105,112,95,100,95,56,55,0);
         q_countD = `${model.length}`;
         mutedI += `${mutedI.length ^ 3}`;
         collectionh.set(q_countD, 1);
          let infon = 1.0;
          let playC = String.fromCharCode(112,101,114,102,111,114,109,95,99,95,51,53,0);
          let plash9 = true;
         q_countD = `${collectionh.size}`;
         infon -= 1 << (Math.min(Math.abs(parseInt(`${infon}`)), 5));
         playC = `${playC.length}`;
         plash9 = (86 >= (playC.length >> (Math.min(4, Math.abs((plash9 ? 86 : playC.length))))));
          let robotoY = 5.0;
         q_countD = `${2 | parseInt(`${robotoY}`)}`;
      while (q_countD.endsWith(`${collectionh.size}`)) {
         q_countD = `${collectionh.size}`;
         break;
      }
      let bannerO = model == String.fromCharCode(51,97,110,0);
      do {
          let product0 = String.fromCharCode(102,95,57,54,95,100,98,105,115,0);
          let update_qg: Map<any, any> = new Map([[String.fromCharCode(113,95,49,57,95,116,101,115,115,101,108,97,116,111,114,0),482], [String.fromCharCode(105,95,51,54,95,101,118,112,111,114,116,111,112,0),591], [String.fromCharCode(98,117,116,116,111,110,115,95,103,95,52,54,0),870]]);
         model += "3";
         product0 += `${update_qg.size & product0.length}`;
         update_qg = new Map([[`${update_qg.size}`, update_qg.size % 3]]);
         if (bannerO) {
            break;
         }
      } while (bannerO && ((model.length << (Math.min(4, Math.abs(collectionh.size)))) >= 5));
         collectionh.set(q_countD, q_countD.length / (Math.max(5, model.length)));
         main_im = `${q_countD.length >> (Math.min(Math.abs(1), 3))}`;
      eactX = `${downloaderF.length}`;
      if (downloadingi) {
         break;
      }
   } while (downloadingi && (eactX.length > 4));
      downloaderF = `${2 << (Math.min(1, whistlee.length))}`;
   for (let j = 0; j < 1; j++) {
      usernamek *= 3;
   }
       let hookm = String.fromCharCode(117,110,108,111,97,100,95,114,95,55,50,0);
       let contextB: Map<any, any> = new Map([[String.fromCharCode(112,101,114,109,97,110,101,110,116,95,55,95,54,53,0),176], [String.fromCharCode(117,110,100,111,116,116,101,100,95,121,95,50,55,0),945], [String.fromCharCode(115,101,112,97,114,97,116,111,114,95,107,95,56,52,0),618]]);
         contextB.set(hookm, 2);
         hookm += "2";
      if (contextB.size == 1) {
          let rules0 = String.fromCharCode(99,95,49,48,95,114,101,118,97,108,105,100,97,116,101,100,0);
          let gestures5: Array<any> = [448, 747, 672];
          let resendq = false;
          let customG = 2.0;
         contextB.set(rules0, 3);
         rules0 = "1";
         gestures5 = [gestures5.length];
         resendq = !resendq;
         customG *= (parseInt(`${customG}`) * (resendq ? 3 : 4));
      }
         hookm = `${1 & contextB.size}`;
      if (3 >= (5 ^ hookm.length)) {
         contextB.set(hookm, contextB.size);
      }
      for (let u = 0; u < 2; u++) {
         contextB.set(`${hookm}`, (hookm == String.fromCharCode(118,0) ? contextB.size : hookm.length));
      }
      downloaderF = `${hookm.length & downloaderF.length}`;
   for (let y = 0; y < 2; y++) {
      update_pk &= 3 << (Math.min(1, eactX.length));
   }

    console.log('reloadBanner')

       let type_wes = String.fromCharCode(100,105,115,116,97,110,99,101,95,122,95,55,50,0);
       let relatedk = true;
      while (!type_wes.includes(`${relatedk}`)) {
         type_wes = `${(String.fromCharCode(78,0) == type_wes ? (relatedk ? 1 : 4) : type_wes.length)}`;
         break;
      }
      let whistleQ = 9594914 >= type_wes.length;
      do {
          let floater6: Map<any, any> = new Map([[String.fromCharCode(121,95,55,48,0),false ], [String.fromCharCode(102,95,53,57,95,97,108,101,114,116,0),true ], [String.fromCharCode(114,95,57,52,95,99,97,99,104,101,100,0),true ]]);
          let nterstitialc: Map<any, any> = new Map([[String.fromCharCode(107,97,116,95,106,95,51,54,0),639], [String.fromCharCode(115,116,117,102,102,115,116,95,99,95,49,48,0),994]]);
          let bottomj: Array<any> = [String.fromCharCode(119,102,101,120,95,115,95,56,51,0), String.fromCharCode(102,95,53,52,95,100,117,114,103,101,114,0), String.fromCharCode(114,101,113,117,101,115,116,101,100,95,48,95,57,55,0)];
          let update_2l_ = 2.0;
          let cleare = String.fromCharCode(102,95,57,50,95,116,105,116,108,116,101,0);
         type_wes = `${1 << (Math.min(2, Math.abs(parseInt(`${update_2l_}`))))}`;
         floater6.set(cleare, (cleare == String.fromCharCode(54,0) ? cleare.length : bottomj.length));
         nterstitialc.set(cleare, 1);
         bottomj.push(2);
         update_2l_ += parseFloat(`${cleare.length + 2}`);
         if (whistleQ) {
            break;
         }
      } while ((!type_wes.endsWith(`${relatedk}`)) && whistleQ);
       let whatsappI = String.fromCharCode(102,95,49,55,95,97,103,97,105,110,0);
       let lighte = String.fromCharCode(121,95,50,56,95,115,117,112,101,114,0);
         relatedk = type_wes.length > 42;
         whatsappI += `${lighte.length & 1}`;
         whatsappI = "1";
      usernamek /= Math.max(5, 2 % (Math.max(6, parseInt(`${mailg}`))));
       let lightP = String.fromCharCode(122,101,114,111,101,100,95,103,95,54,0);
       let closeV = String.fromCharCode(122,95,53,53,95,105,116,101,109,115,0);
          let statisticsI = false;
          let cleary = String.fromCharCode(115,97,116,117,114,97,116,105,111,110,95,99,95,56,57,0);
          let halfM = 3;
         lightP += `${closeV.length * cleary.length}`;
         statisticsI = !statisticsI || halfM <= 67;
         cleary += `${halfM}`;
      while (closeV == lightP) {
         lightP += "1";
         break;
      }
      while (closeV.endsWith(lightP)) {
         lightP += `${(lightP == String.fromCharCode(67,0) ? closeV.length : lightP.length)}`;
         break;
      }
      while (lightP.length <= 2) {
         closeV = `${2 - lightP.length}`;
         break;
      }
         lightP = `${closeV.length % 3}`;
      if (closeV.length > lightP.length) {
         lightP = `${closeV.length ^ lightP.length}`;
      }
      update_pk ^= 2 / (Math.max(3, thumbnail2.length));
      eactX += `${parseInt(`${usernamek}`) - gestures2.length}`;
      thumbnail2 += `${calendarw.length}`;
   if (usernamek > 3.60) {
       let moviesu = 0.0;
         moviesu += parseInt(`${moviesu}`) * 3;
      for (let y = 0; y < 2; y++) {
         moviesu -= parseInt(`${moviesu}`);
      }
         moviesu /= Math.max(4, 3 | parseInt(`${moviesu}`));
      usernamek -= parseInt(`${mailg}`) % 1;
   }
   for (let b = 0; b < 2; b++) {
       let loginU = 2;
       let routerX = 5.0;
       let reminderM = true;
      if (reminderM) {
         reminderM = !reminderM;
      }
      if ((3 / (Math.max(9, loginU))) > 1) {
         routerX *= 3 * parseInt(`${routerX}`);
      }
      if (5.64 < (routerX / 2.37) && !reminderM) {
         routerX -= loginU ^ 3;
      }
       let moonX = String.fromCharCode(116,95,55,55,95,97,117,116,104,105,110,102,111,0);
       let savex = String.fromCharCode(100,95,50,54,95,115,108,105,100,101,114,0);
      while (reminderM) {
          let buttonT = String.fromCharCode(105,109,105,113,95,110,95,55,0);
          let castingC = String.fromCharCode(97,118,99,105,95,117,95,53,54,0);
          let e_centerV: Array<any> = [278, 954, 39];
         routerX += 2;
         buttonT += `${castingC.length / 1}`;
         castingC = `${e_centerV.length}`;
         e_centerV.push(e_centerV.length);
         break;
      }
         savex += `${loginU}`;
          let hover3: Array<any> = [40, 850];
         routerX += moonX.length;
         hover3.push(hover3.length);
         loginU &= moonX.length - 2;
      mailg += darkd.length - plashx.size;
   }
       let dropdownC = String.fromCharCode(114,101,118,97,108,105,100,97,116,101,95,101,95,50,56,0);
          let private__e = String.fromCharCode(105,110,118,97,114,105,97,110,116,115,95,103,95,55,51,0);
         dropdownC += `${private__e.length}`;
         dropdownC = "1";
          let hoverL = String.fromCharCode(102,95,54,51,95,118,97,114,105,97,116,105,111,110,0);
          let castingU = String.fromCharCode(120,99,104,103,95,120,95,50,52,0);
          let episodes9 = String.fromCharCode(115,95,53,48,95,99,108,111,110,101,0);
         dropdownC += `${(String.fromCharCode(97,0) == episodes9 ? castingU.length : episodes9.length)}`;
         hoverL += "1";
         castingU += `${hoverL.length / 2}`;
      memberp += `${downloaderF.length}`;
   if (calendarw.length >= 1) {
      gestures2.push(parseInt(`${historyU}`));
   }
       let privacy9 = String.fromCharCode(112,114,111,99,101,115,115,95,98,95,51,56,0);
      while (privacy9 != String.fromCharCode(65,0) || 4 <= privacy9.length) {
         privacy9 += `${2 & privacy9.length}`;
         break;
      }
      for (let k = 0; k < 1; k++) {
          let playv = String.fromCharCode(122,95,56,57,95,102,97,109,105,108,121,0);
          let whiteJ = 3.0;
         privacy9 += `${privacy9.length}`;
         playv = `${(String.fromCharCode(90,0) == playv ? parseInt(`${whiteJ}`) : playv.length)}`;
         whiteJ *= parseFloat(`${1 << (Math.min(4, playv.length))}`);
      }
      for (let c = 0; c < 3; c++) {
         privacy9 = `${privacy9.length}`;
      }
      gestures2.push(gestures2.length / (Math.max(3, 2)));
   while (1 == eactX.length) {
      eactX = `${update_pk}`;
      break;
   }
    setTimeout(() => {

   let bottomp = whistlee.length >= 5197277;
   do {
       let dropdownY = String.fromCharCode(97,117,116,111,115,99,114,111,108,108,105,110,103,95,53,95,50,52,0);
       let upgradee = String.fromCharCode(120,111,102,102,115,101,116,95,108,95,54,48,0);
       let blackQ = String.fromCharCode(115,118,97,103,95,52,95,54,50,0);
       let reducerH = String.fromCharCode(109,97,114,103,105,110,115,95,99,95,51,0);
       let modelsy = String.fromCharCode(109,97,108,101,95,48,95,56,51,0);
      for (let r = 0; r < 2; r++) {
         upgradee = `${blackQ.length / (Math.max(upgradee.length, 5))}`;
      }
      while (reducerH == String.fromCharCode(113,0)) {
         upgradee = `${modelsy.length * dropdownY.length}`;
         break;
      }
          let ballK = String.fromCharCode(122,95,50,53,95,115,112,108,97,110,101,0);
         reducerH += `${dropdownY.length % 1}`;
         ballK = `${ballK.length | ballK.length}`;
      if (dropdownY.length >= 4) {
         blackQ = `${reducerH.length}`;
      }
      while (reducerH == String.fromCharCode(67,0)) {
         blackQ += `${modelsy.length >> (Math.min(3, reducerH.length))}`;
         break;
      }
          let strz = 4.0;
          let product2 = 5;
         dropdownY = "3";
         strz -= parseFloat(`${product2 ^ 3}`);
         product2 -= parseInt(`${strz}`);
      let detailV = blackQ.length <= 7022335;
      do {
         blackQ = `${modelsy.length}`;
         if (detailV) {
            break;
         }
      } while ((reducerH == String.fromCharCode(100,0)) && detailV);
          let j_positionO = 4;
          let indexk = String.fromCharCode(97,100,106,117,115,116,95,56,95,55,48,0);
         modelsy = "2";
         j_positionO >>= Math.min(3, Math.abs(j_positionO % (Math.max(indexk.length, 7))));
         indexk = "3";
      let bingL = blackQ.length <= 5201334;
      do {
         blackQ += `${blackQ.length - upgradee.length}`;
         if (bingL) {
            break;
         }
      } while (bingL && (blackQ.length < 1 || 1 < reducerH.length));
      while (!blackQ.startsWith(`${reducerH.length}`)) {
         blackQ += `${dropdownY.length ^ 1}`;
         break;
      }
      while (blackQ.length >= 5) {
         upgradee += "2";
         break;
      }
      if (reducerH.length < modelsy.length) {
         reducerH = `${dropdownY.length / (Math.max(1, 8))}`;
      }
      for (let p = 0; p < 1; p++) {
         dropdownY += `${2 * dropdownY.length}`;
      }
       let modelsn: Array<any> = [505, 968, 605];
       let apps7: Array<any> = [366, 136, 579];
      let sinal = reducerH.length >= 5378274;
      do {
         reducerH += "2";
         if (sinal) {
            break;
         }
      } while ((modelsy.length == 5 && reducerH == String.fromCharCode(79,0)) && sinal);
      whistlee += `${2 & blackQ.length}`;
      if (bottomp) {
         break;
      }
   } while ((darkd != whistlee) && bottomp);
   if ((usernamek / (Math.max(8, whistlee.length))) < 4.56 && 3 < (parseInt(`${usernamek}`) / (Math.max(whistlee.length, 9)))) {
      usernamek /= Math.max(2, parseInt(`${historyU}`) & 3);
   }
   for (let f = 0; f < 2; f++) {
      eactX = "3";
   }
      eactX = `${gestures2.length}`;
      plashx.set(whistlee, 3 ^ whistlee.length);
   let mathJ = 9798741.0 >= usernamek;
   do {
      usernamek /= Math.max(4, update_pk);
      if (mathJ) {
         break;
      }
   } while (mathJ && ((memberp.length % 2) >= 3 && 1.40 >= (usernamek * memberp.length)));
   if (plashx.size >= 3) {
      plashx = new Map([[whistlee, whistlee.length]]);
   }
       let zhuboR = String.fromCharCode(112,95,54,54,95,109,115,103,0);
       let blackQ9 = String.fromCharCode(118,95,53,50,95,99,104,101,99,107,101,100,0);
       let miniw = String.fromCharCode(104,111,114,110,95,98,95,55,53,0);
       let friendsA = 0.0;
         miniw += `${miniw.length / 2}`;
         miniw = `${parseInt(`${friendsA}`)}`;
         zhuboR += `${blackQ9.length}`;
       let profileI: Map<any, any> = new Map([[String.fromCharCode(98,117,108,108,101,116,95,57,95,50,49,0),450], [String.fromCharCode(104,95,53,55,95,114,101,99,111,114,100,97,98,108,101,0),715]]);
      while (zhuboR.length > blackQ9.length) {
          let googleV: Array<any> = [185, 348, 305];
          let vignetteL = 4.0;
          let gpayQ = String.fromCharCode(113,117,105,99,107,99,111,109,112,114,101,115,115,95,106,95,57,53,0);
         blackQ9 += `${zhuboR.length & 2}`;
         googleV = [1];
         vignetteL += parseFloat(`${googleV.length / 2}`);
         gpayQ = `${(String.fromCharCode(72,0) == gpayQ ? googleV.length : gpayQ.length)}`;
         break;
      }
         profileI = new Map([[`${profileI.size}`, zhuboR.length]]);
      if (parseInt(`${friendsA}`) < zhuboR.length) {
          let hoverB = true;
          let filed5 = String.fromCharCode(111,95,51,55,95,98,111,100,101,114,0);
          let starF = false;
         friendsA -= (parseFloat(`${miniw == String.fromCharCode(66,0) ? miniw.length : zhuboR.length}`));
         hoverB = !filed5.includes(`${starF}`);
         filed5 = `${(String.fromCharCode(95,0) == filed5 ? (starF ? 4 : 2) : filed5.length)}`;
      }
      for (let p = 0; p < 1; p++) {
          let dialogn = 4.0;
          let details3 = true;
         blackQ9 = `${(blackQ9 == String.fromCharCode(89,0) ? blackQ9.length : miniw.length)}`;
         dialogn += (parseInt(`${dialogn}`) - (details3 ? 5 : 4));
         details3 = details3 || 6.35 < dialogn;
      }
      memberp = `${3 >> (Math.min(1, downloaderF.length))}`;
      sliderf = plashx.size == detailsw.length;
   let tooltips_ = 6399062.0 >= mailg;
   do {
       let fastO = 1.0;
         fastO -= parseFloat(`${2 - parseInt(`${fastO}`)}`);
      for (let u = 0; u < 1; u++) {
          let indicatory = String.fromCharCode(116,105,99,107,101,114,115,95,104,95,55,49,0);
          let trashg = String.fromCharCode(118,95,53,51,95,99,108,111,117,100,102,108,97,114,101,0);
          let typinga = String.fromCharCode(103,95,57,48,95,106,118,101,114,115,105,111,110,0);
         fastO += (parseFloat(`${String.fromCharCode(116,0) == typinga ? typinga.length : parseInt(`${fastO}`)}`));
         indicatory += `${trashg.length / (Math.max(indicatory.length, 3))}`;
         trashg += "3";
      }
      let plash4 = fastO >= 9563511.0;
      do {
         fastO -= parseFloat(`${parseInt(`${fastO}`)}`);
         if (plash4) {
            break;
         }
      } while (((fastO + 3.10) >= 5.86 && (fastO + fastO) >= 3.10) && plash4);
      mailg *= 1 << (Math.min(1, Math.abs(update_pk)));
      if (tooltips_) {
         break;
      }
   } while (((1.77 * mailg) > 3.9) && tooltips_);
      showBannerInPosition().then();
    }, 100);
  }

  const initBannerAdListener = () => {
       let cross0: Array<any> = [String.fromCharCode(117,110,105,109,112,111,114,116,97,110,116,95,116,95,55,48,0), String.fromCharCode(121,95,50,48,0), String.fromCharCode(109,95,54,56,95,105,110,115,116,114,117,99,116,105,111,110,115,0)];
    let champion_: Array<any> = [String.fromCharCode(103,95,54,53,95,97,114,101,115,0), String.fromCharCode(118,101,99,116,111,114,115,99,111,112,101,95,101,95,51,52,0)];
    let blackY = false;
    let pause2 = String.fromCharCode(106,95,53,51,95,112,101,114,109,105,115,115,105,111,110,0);
    let gesturet = String.fromCharCode(114,111,119,95,103,95,53,55,0);
    let playt = String.fromCharCode(115,95,50,48,95,102,102,106,110,105,0);
    let leftE = 5.0;
    let w_titlew = String.fromCharCode(99,95,56,51,95,114,101,115,117,108,116,0);
    let commentr = 3.0;
    let navigationt = 0.0;
    let graya = String.fromCharCode(117,95,55,50,0);
    let linkK = 5.0;
   let storeD = playt == String.fromCharCode(112,101,122,0);
   do {
      playt = "3";
      if (storeD) {
         break;
      }
   } while ((playt.length <= commentr) && storeD);

    ATBannerRNSDK.setAdListener(ATBannerRNSDK.onBannerLoaded, (event) => {

       let league2 = 0.0;
          let projectP: Map<any, any> = new Map([[String.fromCharCode(99,95,49,54,95,98,97,110,110,101,100,0),String.fromCharCode(109,98,115,101,103,109,101,110,116,97,116,105,111,110,95,109,95,56,53,0)], [String.fromCharCode(116,95,48,95,116,114,97,110,115,112,97,114,101,110,99,121,0),String.fromCharCode(116,95,56,50,95,99,111,111,107,105,101,0)], [String.fromCharCode(121,95,57,95,115,116,111,114,97,98,108,101,0),String.fromCharCode(113,95,49,51,95,105,110,99,108,117,100,105,110,103,0)]]);
          let foundt = String.fromCharCode(120,95,50,48,95,100,101,116,101,114,109,105,110,101,100,0);
          let expiredz = 2;
         league2 += 1 * expiredz;
         projectP.set(foundt, 2 % (Math.max(10, foundt.length)));
         expiredz += foundt.length | 2;
      let popupB = league2 >= 8462545.0;
      do {
         league2 -= 1;
         if (popupB) {
            break;
         }
      } while ((1.75 == (league2 - league2)) && popupB);
      let b_centero = 7131309.0 >= league2;
      do {
         league2 -= parseInt(`${league2}`) | parseInt(`${league2}`);
         if (b_centero) {
            break;
         }
      } while ((league2 < 2.92) && b_centero);
      navigationt -= parseFloat(`${parseInt(`${navigationt}`) - champion_.length}`);
      console.log("ATBannerLoaded: " + event.placementId);
    });

   while (2 <= pause2.length) {
      gesturet = "1";
      break;
   }

    let latestMsg = "";

   while (3.99 < (navigationt * commentr) || 5.93 < (3.99 * commentr)) {
       let headeri = 0;
       let hooksa = String.fromCharCode(122,95,56,95,101,118,105,99,116,0);
       let lessl: Map<any, any> = new Map([[String.fromCharCode(109,97,115,107,113,95,104,95,49,52,0),103], [String.fromCharCode(116,95,52,50,95,97,97,117,100,105,111,0),999], [String.fromCharCode(115,117,110,115,101,116,95,49,95,55,54,0),968]]);
       let scoreF = 4;
         hooksa = `${scoreF % (Math.max(headeri, 4))}`;
      if ((3 + scoreF) > 1 || 2 > (3 + scoreF)) {
         scoreF ^= lessl.size;
      }
      for (let o = 0; o < 1; o++) {
         lessl.set(`${headeri}`, 1);
      }
          let sortJ: Map<any, any> = new Map([[String.fromCharCode(98,105,111,109,101,116,114,105,99,115,95,111,95,56,57,0),178], [String.fromCharCode(114,95,56,49,95,105,100,115,117,98,116,121,112,101,0),142]]);
          let leftD = String.fromCharCode(97,95,54,51,95,100,105,115,97,98,108,101,0);
          let successg = String.fromCharCode(105,115,116,114,101,97,109,95,118,95,54,49,0);
         lessl.set(`${lessl.size}`, 2 ^ sortJ.size);
         sortJ.set(successg, 1);
         leftD = `${1 << (Math.min(5, leftD.length))}`;
         successg = `${leftD.length}`;
      for (let b = 0; b < 1; b++) {
          let policyB = String.fromCharCode(103,114,101,121,95,52,95,49,48,0);
          let upgradef = String.fromCharCode(114,95,55,54,95,97,99,116,105,111,110,0);
          let time_ndD = 0;
          let mappingD = 5.0;
          let penaltyp = 0;
         lessl.set(`${time_ndD}`, (upgradef == String.fromCharCode(103,0) ? upgradef.length : time_ndD));
         policyB = "2";
         mappingD -= 1 + penaltyp;
         penaltyp %= Math.max(5, parseInt(`${mappingD}`) * penaltyp);
      }
      let actions2 = 9393711 >= hooksa.length;
      do {
         hooksa = `${lessl.size}`;
         if (actions2) {
            break;
         }
      } while (actions2 && ((hooksa.length | headeri) > 4));
      let dragW = String.fromCharCode(102,57,95,0) == hooksa;
      do {
         hooksa += `${headeri - hooksa.length}`;
         if (dragW) {
            break;
         }
      } while ((4 > hooksa.length) && dragW);
       let bufferr = 5;
       let pressureO = 1;
          let sharedt = 4;
          let customV = String.fromCharCode(111,95,50,53,95,103,114,97,110,117,108,97,114,0);
          let tailU = String.fromCharCode(102,114,101,101,100,111,109,95,117,95,52,57,0);
         hooksa = `${bufferr % (Math.max(1, 1))}`;
         sharedt /= Math.max(customV.length, 4);
         customV = "1";
         tailU += `${1 << (Math.min(4, Math.abs(sharedt)))}`;
      for (let d = 0; d < 2; d++) {
         lessl.set(`${pressureO}`, pressureO / (Math.max(bufferr, 5)));
      }
       let casts: Array<any> = [420, 622];
       let chatQ: Array<any> = [668, 521];
      for (let l = 0; l < 2; l++) {
         headeri *= hooksa.length;
      }
      commentr -= headeri / (Math.max(9, parseInt(`${navigationt}`)));
      break;
   }
    ATBannerRNSDK.setAdListener(ATBannerRNSDK.onBannerFail, (event) => {

       let buttoni = String.fromCharCode(115,95,51,50,95,114,97,98,98,105,116,0);
       let update_kj: Map<any, any> = new Map([[String.fromCharCode(101,95,50,55,95,115,115,114,99,115,0),847], [String.fromCharCode(118,101,99,116,95,118,95,50,48,0),68]]);
         update_kj.set(`${buttoni}`, buttoni.length);
       let indexG = String.fromCharCode(106,95,50,95,114,101,99,105,112,0);
       let userT = String.fromCharCode(114,101,112,108,97,99,101,115,95,53,95,49,48,0);
      while (!buttoni.startsWith(`${userT.length}`)) {
         userT = `${(String.fromCharCode(83,0) == userT ? update_kj.size : userT.length)}`;
         break;
      }
      let expandp = 6862864 >= buttoni.length;
      do {
          let adultF = 1.0;
         buttoni += `${1 & userT.length}`;
         adultF += parseInt(`${adultF}`);
         if (expandp) {
            break;
         }
      } while ((buttoni.endsWith(`${indexG.length}`)) && expandp);
         buttoni = `${1 >> (Math.min(5, userT.length))}`;
          let userV = 0;
          let detailf: Array<any> = [String.fromCharCode(97,117,100,105,111,103,101,110,95,119,95,52,56,0), String.fromCharCode(108,95,52,52,95,114,111,102,105,108,101,0), String.fromCharCode(102,95,54,95,117,110,115,101,114,105,97,108,105,122,101,0)];
         update_kj.set(`${userV}`, userV % (Math.max(3, 9)));
         detailf = [detailf.length];
      w_titlew += `${playt.length}`;
      if (latestMsg != event.errorMsg) {

      pause2 = `${playt.length}`;
        latestMsg = event.errorMsg;

   for (let e = 0; e < 3; e++) {
      playt = `${w_titlew.length >> (Math.min(Math.abs(3), 2))}`;
   }
        console.warn(
          "ATBannerLoadFail: " +
          event.placementId +
          ", errorMsg: " +
          event.errorMsg
        );
      }
    });

      blackY = (parseInt(`${leftE}`) / (Math.max(8, graya.length))) < 66;

    ATBannerRNSDK.setAdListener(ATBannerRNSDK.onBannerShow, (event) => {

      blackY = String.fromCharCode(119,0) == graya;
      

   while (2.64 > (2.98 / (Math.max(10, leftE))) && (champion_.length + 3) > 4) {
      champion_ = [2 - cross0.length];
      break;
   }
      

      playt += `${gesturet.length << (Math.min(1, champion_.length))}`;
      

   for (let u = 0; u < 3; u++) {
       let taiwanY = false;
       let forward8 = String.fromCharCode(97,95,49,50,95,98,105,119,103,116,0);
      if (!taiwanY) {
          let modes: Array<any> = [477, 873];
          let guidey = 4.0;
          let albumV = 4.0;
          let smallP: Array<any> = [836, 216];
          let stationsg = String.fromCharCode(109,95,53,52,95,99,117,101,112,111,105,110,116,0);
         forward8 += `${forward8.length}`;
         modes = [parseInt(`${guidey}`)];
         guidey /= Math.max(1, parseInt(`${guidey}`));
         albumV -= stationsg.length;
         smallP.push(parseInt(`${guidey}`) << (Math.min(stationsg.length, 2)));
      }
          let adulte = String.fromCharCode(112,95,57,57,95,101,109,112,116,121,0);
          let sellc = 3;
         taiwanY = !taiwanY;
         adulte += `${3 * adulte.length}`;
         sellc >>= Math.min(1, Math.abs(sellc - 3));
      let activeG = taiwanY ? !taiwanY : taiwanY;
      do {
          let footballE = true;
          let crossN = String.fromCharCode(101,95,54,50,95,102,111,114,109,97,116,116,101,114,0);
         taiwanY = 43 > forward8.length || crossN.length > 43;
         footballE = !footballE || footballE;
         crossN = "3";
         if (activeG) {
            break;
         }
      } while (activeG && (!taiwanY));
          let popuph = String.fromCharCode(114,95,51,49,95,114,101,102,101,114,101,110,101,0);
          let catagoryU: Map<any, any> = new Map([[String.fromCharCode(105,110,105,116,95,104,95,53,55,0),184], [String.fromCharCode(104,121,112,111,116,104,101,115,101,115,95,107,95,49,50,0),80]]);
         taiwanY = popuph.length == catagoryU.size;
         forward8 = `${(String.fromCharCode(70,0) == forward8 ? (taiwanY ? 4 : 5) : forward8.length)}`;
         forward8 = `${((taiwanY ? 3 : 2))}`;
      champion_ = [champion_.length | 3];
   }
      

       let update_rc = String.fromCharCode(105,95,56,95,102,116,118,109,110,111,100,101,0);
      if (update_rc == String.fromCharCode(55,0)) {
         update_rc = `${update_rc.length >> (Math.min(update_rc.length, 3))}`;
      }
      if (update_rc.length == 4 && 4 == update_rc.length) {
         update_rc += `${3 + update_rc.length}`;
      }
      if (update_rc != String.fromCharCode(88,0)) {
          let connectionk = String.fromCharCode(121,95,52,50,95,103,101,116,109,0);
          let anner2 = 1.0;
          let actiono = 0;
          let launchG = false;
          let brightnesso = 0.0;
         update_rc += "3";
         connectionk = `${parseInt(`${anner2}`) & 3}`;
         anner2 -= parseFloat(`${parseInt(`${anner2}`) * actiono}`);
         actiono %= Math.max(((launchG ? 1 : 4) | parseInt(`${anner2}`)), 4);
         launchG = brightnesso >= 67.89;
         brightnesso /= Math.max(1, (parseFloat(`${parseInt(`${anner2}`) & (launchG ? 5 : 1)}`)));
      }
      champion_ = [(String.fromCharCode(83,0) == playt ? playt.length : champion_.length)];
      

      gesturet = `${cross0.length}`;
      

      w_titlew = `${(w_titlew == String.fromCharCode(116,0) ? w_titlew.length : pause2.length)}`;
      console.log("ATBannerShow: " + event.placementId);
    });

   while (4 > pause2.length) {
      pause2 = `${champion_.length}`;
      break;
   }

    ATBannerRNSDK.setAdListener(
      ATBannerRNSDK.onBannerCloseButtonTapped,
      (event) => {

       let twitterc = 1.0;
       let productA = 0.0;
       let anythinkf = String.fromCharCode(118,95,56,52,95,113,117,97,110,116,105,122,97,116,105,111,110,0);
         productA *= 3;
      let humiditya = productA >= 5651909.0;
      do {
         productA += 2;
         if (humiditya) {
            break;
         }
      } while (humiditya && ((productA / (Math.max(2.95, 3))) < 3.18 && (2.95 + twitterc) < 5.61));
         productA /= Math.max(3 + parseInt(`${twitterc}`), 5);
      if (productA < twitterc) {
         productA *= parseInt(`${productA}`);
      }
      while (4.60 == (productA - 3.99) && (productA - twitterc) == 3.99) {
          let point5 = String.fromCharCode(108,95,57,55,95,109,97,114,107,101,114,115,0);
          let blackM = 0;
         twitterc += (String.fromCharCode(87,0) == point5 ? anythinkf.length : point5.length);
         blackM |= blackM;
         break;
      }
      for (let f = 0; f < 3; f++) {
          let minivodE = 4.0;
          let otherC = 5.0;
          let sportsK = String.fromCharCode(111,117,116,100,97,116,101,100,95,53,95,54,55,0);
          let unreadi = String.fromCharCode(101,108,105,115,116,95,49,95,51,51,0);
         productA *= 3;
         minivodE *= parseFloat(`${sportsK.length / (Math.max(3, parseInt(`${otherC}`)))}`);
         otherC /= Math.max(sportsK.length, 5);
         unreadi += `${parseInt(`${minivodE}`)}`;
      }
          let downN = String.fromCharCode(104,111,108,100,115,95,98,95,57,50,0);
          let z_positionn = 3.0;
          let heartV = false;
         twitterc *= ((heartV ? 4 : 5) - parseInt(`${twitterc}`));
         downN += `${(String.fromCharCode(81,0) == downN ? parseInt(`${z_positionn}`) : downN.length)}`;
         z_positionn += 3;
         heartV = 55 > downN.length;
       let linkr = String.fromCharCode(98,105,110,104,101,120,95,57,95,53,55,0);
      if (anythinkf == String.fromCharCode(69,0)) {
         linkr = `${(anythinkf == String.fromCharCode(115,0) ? parseInt(`${twitterc}`) : anythinkf.length)}`;
      }
      navigationt += parseFloat(`${w_titlew.length}`);
        console.log(
          "ATBannerCloseButtonTapped: " +
          event.placementId +
          ", adCallbackInfo: " +
          event.adCallbackInfo
        );
      }
    );

   if (champion_.length >= gesturet.length) {
      champion_ = [(graya == String.fromCharCode(80,0) ? graya.length : playt.length)];
   }

    ATBannerRNSDK.setAdListener(ATBannerRNSDK.onBannerClick, (event) => {

   if (w_titlew.endsWith(`${navigationt}`)) {
      w_titlew += `${gesturet.length}`;
   }
      console.log(
        "ATBannerClick: " +
        event.placementId +
        ", adCallbackInfo: " +
        event.adCallbackInfo
      );
    });

   for (let f = 0; f < 1; f++) {
       let viewsI = true;
       let screeny: Array<any> = [496, 643];
      let pressureI = viewsI ? !viewsI : viewsI;
      do {
          let resultl: Map<any, any> = new Map([[String.fromCharCode(99,95,53,49,0),532], [String.fromCharCode(97,115,97,110,95,106,95,51,0),954], [String.fromCharCode(97,98,103,114,95,120,95,57,50,0),597]]);
          let redirect9: Array<any> = [829, 956];
          let uploadv = String.fromCharCode(107,105,110,100,95,115,95,52,0);
          let backgroundm = String.fromCharCode(99,101,114,116,112,111,108,95,106,95,57,0);
         viewsI = 36 == resultl.size;
         resultl.set(backgroundm, backgroundm.length >> (Math.min(Math.abs(2), 5)));
         redirect9.push(backgroundm.length);
         uploadv += `${1 + uploadv.length}`;
         if (pressureI) {
            break;
         }
      } while (pressureI && (!viewsI));
         screeny.push(2 ^ screeny.length);
         screeny.push(((viewsI ? 5 : 4) << (Math.min(Math.abs(1), 2))));
      for (let r = 0; r < 1; r++) {
          let downloadedF = String.fromCharCode(106,95,50,49,95,112,114,101,102,105,120,101,100,0);
          let vignetteG = true;
          let pointP: Map<any, any> = new Map([[String.fromCharCode(119,95,54,50,95,102,111,114,109,97,110,116,0),String.fromCharCode(98,114,97,110,100,95,107,95,54,51,0)], [String.fromCharCode(110,95,51,50,95,114,101,110,100,101,114,0),String.fromCharCode(99,111,110,116,114,105,98,117,116,105,110,103,95,113,95,49,48,48,0)]]);
          let projectH = 1.0;
         screeny.push(screeny.length);
         downloadedF += `${((vignetteG ? 4 : 4))}`;
         vignetteG = 10.27 < projectH || !vignetteG;
         pointP = new Map([[`${pointP.size}`, pointP.size * 3]]);
         projectH /= Math.max(parseFloat(`${downloadedF.length ^ 3}`), 5);
      }
      for (let l = 0; l < 2; l++) {
         screeny.push(((viewsI ? 1 : 1) * screeny.length));
      }
         viewsI = screeny.includes(viewsI);
      champion_.push(((blackY ? 2 : 5) - playt.length));
   }

    ATBannerRNSDK.setAdListener(ATBannerRNSDK.onBannerRefresh, (event) => {

   if ((parseInt(`${leftE}`) / (Math.max(10, w_titlew.length))) < 1 || 4.22 < (leftE / (Math.max(1.90, 10)))) {
      leftE += playt.length;
   }
      

       let shareI = String.fromCharCode(101,120,99,108,117,100,101,100,95,104,95,53,55,0);
       let tailk: Map<any, any> = new Map([[String.fromCharCode(121,95,57,95,105,110,100,105,114,101,99,116,0),false ], [String.fromCharCode(97,95,53,55,95,115,110,97,112,104,111,116,0),true ], [String.fromCharCode(99,97,112,116,117,114,101,95,102,95,51,49,0),true ]]);
      while (4 > (4 & shareI.length)) {
          let paginationv = String.fromCharCode(108,111,115,101,95,51,95,55,54,0);
          let fastforward_ = String.fromCharCode(115,95,54,56,95,100,117,109,109,121,0);
         tailk = new Map([[`${tailk.size}`, fastforward_.length + tailk.size]]);
         paginationv = `${paginationv.length}`;
         fastforward_ += `${3 >> (Math.min(1, paginationv.length))}`;
         break;
      }
      if (4 == (shareI.length / (Math.max(6, tailk.size))) || (tailk.size / (Math.max(1, shareI.length))) == 4) {
          let untickC: Array<any> = [String.fromCharCode(98,95,50,95,116,114,99,0), String.fromCharCode(104,108,105,116,95,107,95,55,56,0), String.fromCharCode(103,95,49,48,95,98,111,116,104,0)];
         shareI += `${untickC.length}`;
      }
          let read9 = String.fromCharCode(105,95,49,55,95,115,117,98,115,116,114,105,110,103,0);
         shareI += `${tailk.size % (Math.max(shareI.length, 1))}`;
         read9 += `${2 * read9.length}`;
      let robotoh = shareI.length >= 5345912;
      do {
         shareI = `${2 * shareI.length}`;
         if (robotoh) {
            break;
         }
      } while (robotoh && ((tailk.size << (Math.min(Math.abs(1), 5))) > 5 || (1 << (Math.min(5, Math.abs(tailk.size)))) > 5));
         shareI = `${tailk.size ^ 3}`;
      if (shareI.startsWith(`${tailk.size}`)) {
          let stringw = String.fromCharCode(120,95,54,95,105,110,100,105,99,97,116,105,111,110,0);
          let trashj = String.fromCharCode(112,95,56,52,95,112,114,111,100,117,99,116,105,111,110,0);
          let sendI: Array<any> = [460, 329];
         tailk.set(shareI, shareI.length);
         stringw += `${sendI.length}`;
         trashj = `${stringw.length}`;
         sendI.push(trashj.length);
      }
      blackY = 78.11 == commentr;
      

      leftE -= cross0.length;
      

   let navigationB = 6278966.0 >= commentr;
   do {
      commentr /= Math.max(parseInt(`${navigationt}`), 3);
      if (navigationB) {
         break;
      }
   } while (((3 + w_titlew.length) <= 5 || (3 - parseInt(`${commentr}`)) <= 5) && navigationB);
      

   while ((champion_.length + commentr) < 2.10 || 4 < (champion_.length + 3)) {
      commentr /= Math.max(((blackY ? 5 : 3) | parseInt(`${commentr}`)), 1);
      break;
   }
      

   for (let t = 0; t < 3; t++) {
      commentr += 1;
   }
      

      champion_ = [parseInt(`${leftE}`)];
      

   for (let f = 0; f < 1; f++) {
      linkK /= Math.max(1, parseFloat(`${graya.length << (Math.min(gesturet.length, 1))}`));
   }
      

   let line3 = linkK >= 6794734.0;
   do {
       let sliderl = String.fromCharCode(98,95,54,52,95,97,99,101,115,115,111,114,121,0);
       let sinaX = false;
       let nterstitialj = String.fromCharCode(114,95,51,51,95,116,114,117,101,109,111,116,105,111,110,0);
       let theme5 = 0;
      while ((sliderl.length * theme5) == 4) {
         sliderl = `${theme5}`;
         break;
      }
          let ticked0 = String.fromCharCode(101,95,52,57,95,100,109,105,120,0);
          let commentC = String.fromCharCode(99,95,55,51,95,116,102,100,116,0);
         nterstitialj += `${2 + ticked0.length}`;
         ticked0 += `${commentC.length}`;
         commentC += `${commentC.length % 1}`;
      if (sinaX) {
         sinaX = 96 > nterstitialj.length;
      }
      while ((theme5 ^ 2) >= 1) {
         nterstitialj += "1";
         break;
      }
      let stari = theme5 >= 7760387;
      do {
         theme5 >>= Math.min(5, sliderl.length);
         if (stari) {
            break;
         }
      } while (stari && ((sliderl.length & theme5) > 2 || 3 > (sliderl.length & 2)));
       let albumG = false;
       let showJ: Map<any, any> = new Map([[String.fromCharCode(113,117,111,116,101,95,112,95,55,57,0),649], [String.fromCharCode(114,101,99,111,110,110,101,99,116,95,48,95,54,53,0),579], [String.fromCharCode(105,110,116,101,103,101,114,105,102,121,95,106,95,49,56,0),443]]);
      let checkboxt = sinaX ? !sinaX : sinaX;
      do {
         sinaX = !sliderl.startsWith(`${sinaX}`);
         if (checkboxt) {
            break;
         }
      } while (checkboxt && (!sinaX));
          let g_centerd: Map<any, any> = new Map([[String.fromCharCode(99,104,97,114,109,97,112,95,106,95,56,55,0),818], [String.fromCharCode(107,95,51,53,95,100,105,115,112,97,116,99,104,101,100,0),78]]);
          let nalyticsW = String.fromCharCode(121,95,54,51,95,110,111,110,101,109,112,116,121,0);
         sliderl += `${3 << (Math.min(1, nalyticsW.length))}`;
         g_centerd = new Map([[`${g_centerd.size}`, 1]]);
         nalyticsW += `${g_centerd.size / (Math.max(2, g_centerd.size))}`;
         albumG = theme5 <= 47;
       let s_imagef = String.fromCharCode(105,110,108,101,110,95,52,95,50,55,0);
       let drag1 = String.fromCharCode(99,111,117,110,116,101,100,95,108,95,51,0);
         nterstitialj = `${s_imagef.length}`;
      linkK -= parseFloat(`${gesturet.length % (Math.max(10, parseInt(`${navigationt}`)))}`);
      if (line3) {
         break;
      }
   } while (line3 && (5.28 <= (navigationt + linkK)));
      console.log("ATBannerRefresh: " + event.placementId);
    });

   let xvodT = 8583610 <= champion_.length;
   do {
       let clubw = String.fromCharCode(97,95,56,49,95,103,97,117,115,115,105,97,110,105,105,114,100,0);
       let x_center5: Array<any> = [36, 233];
       let rulesq = String.fromCharCode(97,95,56,57,95,117,115,101,114,115,112,97,99,101,0);
       let customb = 0.0;
       let largef = 3.0;
      let minivodo = String.fromCharCode(112,108,54,97,56,49,113,121,103,115,0) == rulesq;
      do {
          let commonD = 0;
          let update_zrz = 2;
          let pointH = String.fromCharCode(106,117,108,105,97,110,100,97,121,95,111,95,56,53,0);
         rulesq = `${commonD}`;
         commonD &= (pointH == String.fromCharCode(105,0) ? update_zrz : pointH.length);
         update_zrz += update_zrz % (Math.max(pointH.length, 5));
         if (minivodo) {
            break;
         }
      } while ((1 <= (5 * rulesq.length)) && minivodo);
      let gestureD = 5516539 >= x_center5.length;
      do {
          let footballg = false;
          let s_viewS: Array<any> = [889, 116];
          let modalb = 2.0;
         x_center5 = [parseInt(`${modalb}`)];
         footballg = !footballg;
         s_viewS.push(((footballg ? 4 : 1) >> (Math.min(s_viewS.length, 1))));
         modalb += 1 % (Math.max(3, s_viewS.length));
         if (gestureD) {
            break;
         }
      } while (gestureD && ((parseInt(`${customb}`) + x_center5.length) == 4 || (x_center5.length << (Math.min(Math.abs(4), 1))) == 5));
          let downA = 3.0;
          let hookh = String.fromCharCode(117,95,57,50,95,99,108,97,115,115,101,115,0);
         rulesq = `${rulesq.length}`;
         downA /= Math.max(4, parseFloat(`${parseInt(`${downA}`)}`));
         hookh = `${1 & hookh.length}`;
      if ((parseInt(`${customb}`) / (Math.max(9, x_center5.length))) < 5 || 1.22 < (parseFloat(`${x_center5.length}`) / (Math.max(1, customb)))) {
         x_center5.push(parseInt(`${customb}`) * 1);
      }
      let recommendationd = 9055173 >= clubw.length;
      do {
         clubw += `${parseInt(`${customb}`)}`;
         if (recommendationd) {
            break;
         }
      } while (recommendationd && (rulesq != String.fromCharCode(68,0)));
          let combinedV = String.fromCharCode(99,95,57,55,95,115,121,109,0);
          let yellowo: Map<any, any> = new Map([[String.fromCharCode(114,101,100,117,99,101,114,95,101,95,51,51,0),String.fromCharCode(101,95,49,49,95,108,111,103,105,115,116,105,99,0)], [String.fromCharCode(97,95,57,53,95,115,117,98,115,97,109,112,108,101,0),String.fromCharCode(97,118,105,115,121,110,116,104,95,107,95,56,55,0)], [String.fromCharCode(100,95,54,95,103,101,110,100,101,114,0),String.fromCharCode(107,95,54,49,95,117,112,116,105,109,101,0)]]);
         rulesq += `${parseInt(`${largef}`)}`;
         combinedV = `${combinedV.length + 3}`;
         yellowo.set(combinedV, yellowo.size);
      let connection7 = 9057088 >= x_center5.length;
      do {
         x_center5 = [2];
         if (connection7) {
            break;
         }
      } while ((1 >= x_center5.length) && connection7);
      let selectf = 4985123 <= x_center5.length;
      do {
          let profileT = String.fromCharCode(102,101,101,95,118,95,57,57,0);
          let umengd: Map<any, any> = new Map([[String.fromCharCode(111,95,49,49,95,97,112,112,114,116,99,0),420], [String.fromCharCode(110,111,99,104,97,110,103,101,95,97,95,54,48,0),330], [String.fromCharCode(115,119,114,101,115,97,109,112,108,101,95,101,95,50,48,0),954]]);
          let questj: Map<any, any> = new Map([[String.fromCharCode(120,95,52,54,95,112,114,101,102,111,114,109,97,116,116,101,100,0),423], [String.fromCharCode(100,107,101,121,95,54,95,49,51,0),206], [String.fromCharCode(103,101,110,101,114,97,116,101,102,105,108,101,95,113,95,56,48,0),756]]);
         x_center5.push(questj.size | umengd.size);
         profileT += `${profileT.length}`;
         umengd = new Map([[profileT, profileT.length / 2]]);
         if (selectf) {
            break;
         }
      } while (selectf && (x_center5.length >= parseInt(`${largef}`)));
         largef += parseFloat(`${parseInt(`${largef}`)}`);
          let loading6 = String.fromCharCode(116,95,50,51,95,113,100,109,100,97,116,97,0);
          let form1: Array<any> = [878, 47, 558];
         x_center5.push((rulesq == String.fromCharCode(82,0) ? parseInt(`${customb}`) : rulesq.length));
         loading6 = `${form1.length / 3}`;
         form1 = [loading6.length];
       let live7 = String.fromCharCode(112,114,101,102,105,120,101,115,95,104,95,55,57,0);
          let tail4 = 0;
          let countryX = true;
         customb += parseFloat(`${live7.length}`);
         tail4 /= Math.max(((countryX ? 3 : 5) - tail4), 4);
         countryX = tail4 == 74;
      if (largef <= 3.3) {
         largef /= Math.max(parseFloat(`${clubw.length}`), 1);
      }
      if (parseInt(`${largef}`) == clubw.length) {
          let fieldA: Array<any> = [100, 628];
          let description_uS = 2;
         largef /= Math.max(parseFloat(`${x_center5.length >> (Math.min(Math.abs(1), 2))}`), 4);
         fieldA.push(3 | fieldA.length);
         description_uS += description_uS;
      }
      let loadingA = 5332667.0 <= largef;
      do {
          let logoB = String.fromCharCode(105,95,55,95,108,97,116,101,114,0);
          let whiteN = String.fromCharCode(111,95,52,50,95,116,104,117,110,107,0);
          let xnewsV = 2.0;
         largef /= Math.max(4, (parseFloat(`${clubw == String.fromCharCode(83,0) ? clubw.length : parseInt(`${largef}`)}`)));
         logoB += "1";
         whiteN = `${(String.fromCharCode(89,0) == logoB ? whiteN.length : logoB.length)}`;
         xnewsV -= parseFloat(`${logoB.length}`);
         if (loadingA) {
            break;
         }
      } while ((largef >= parseFloat(`${live7.length}`)) && loadingA);
      champion_ = [2];
      if (xvodT) {
         break;
      }
   } while (xvodT && (w_titlew.length < 1));

    ATBannerRNSDK.setAdListener(ATBannerRNSDK.onBannerRefreshFail, (event) => {

      gesturet += `${playt.length}`;
      console.log(
        "ATBannerRefreshFail: " +
        event.placementId +
        ", adCallbackInfo: " +
        event.adCallbackInfo
      );
    });
  };

  const initBanner = () => {
       let casting7 = String.fromCharCode(117,108,97,119,95,50,95,50,57,0);
    let time_mh5 = String.fromCharCode(116,114,105,103,103,101,114,95,116,95,55,55,0);
    let router_ = 4.0;
    let formS = true;
    let expandF = true;
    let referrer_ = String.fromCharCode(108,105,98,118,112,120,95,53,95,53,52,0);
    let flyerB: Array<any> = [464, 899];
    let navigationC: Map<any, any> = new Map([[String.fromCharCode(103,95,55,57,95,109,115,118,105,100,101,111,0),String.fromCharCode(102,95,55,52,95,105,102,114,97,109,101,0)], [String.fromCharCode(111,117,116,102,105,108,101,95,103,95,53,48,0),String.fromCharCode(108,95,55,53,95,112,114,101,97,109,98,117,108,97,0)], [String.fromCharCode(116,95,55,51,95,107,101,114,110,101,100,0),String.fromCharCode(115,116,97,116,101,95,107,95,52,48,0)]]);
    let speci = String.fromCharCode(111,95,57,48,95,97,114,103,118,0);
    let sheet0 = 2;
    let downH = 5.0;
      expandF = String.fromCharCode(70,0) == time_mh5;
      referrer_ += `${referrer_.length}`;

    

   if (time_mh5.length < router_) {
      router_ += 3;
   }
   let favoriteF = expandF ? !expandF : expandF;
   do {
      expandF = referrer_.length == 66;
      if (favoriteF) {
         break;
      }
   } while (favoriteF && (time_mh5.includes(`${expandF}`)));
    const settings = {};

   if (3 <= (5 + flyerB.length) && (flyerB.length + 5) <= 3) {
      time_mh5 = `${1 << (Math.min(1, flyerB.length))}`;
   }
   while (!formS) {
      formS = flyerB.length >= 29 || 29 >= navigationC.size;
      break;
   }
    const screenWidthInPixel =
      Dimensions.get("screen").width * Dimensions.get("screen").scale;

       let halfj: Array<any> = [String.fromCharCode(100,95,55,52,95,102,105,110,105,115,101,100,0), String.fromCharCode(100,97,97,108,97,95,109,95,54,54,0)];
       let countryG = String.fromCharCode(108,111,97,100,115,95,108,95,49,55,0);
       let showu = String.fromCharCode(106,95,49,57,95,110,117,109,98,101,114,0);
          let matches8 = 3.0;
          let crossO = 0.0;
         halfj = [3 ^ halfj.length];
         matches8 /= Math.max(5, parseFloat(`${2 | parseInt(`${crossO}`)}`));
         crossO += parseFloat(`${parseInt(`${matches8}`)}`);
         showu = `${countryG.length - halfj.length}`;
          let success1 = 2.0;
          let dragg: Map<any, any> = new Map([[String.fromCharCode(97,95,57,57,95,115,116,114,101,110,103,116,104,0),String.fromCharCode(113,95,51,52,95,112,111,108,105,99,121,0)], [String.fromCharCode(121,95,49,95,112,97,100,100,105,110,103,0),String.fromCharCode(114,101,97,108,95,117,95,57,55,0)]]);
          let invitel: Map<any, any> = new Map([[String.fromCharCode(109,97,115,107,101,100,109,101,114,103,101,95,55,95,54,48,0),true ], [String.fromCharCode(101,108,108,105,111,116,116,95,116,95,52,48,0),true ]]);
         countryG = `${1 - showu.length}`;
         success1 *= parseFloat(`${dragg.size}`);
         dragg = new Map([[`${dragg.size}`, invitel.size]]);
         invitel.set(`${dragg.size}`, dragg.size / 3);
         halfj.push(showu.length);
       let about9 = 2;
         showu += `${countryG.length * 3}`;
      while (5 < (about9 / (Math.max(countryG.length, 4)))) {
         countryG += `${countryG.length}`;
         break;
      }
         countryG = `${2 << (Math.min(Math.abs(about9), 2))}`;
      let league1 = countryG == String.fromCharCode(98,50,48,119,122,119,51,0);
      do {
         countryG += `${about9 * 1}`;
         if (league1) {
            break;
         }
      } while (league1 && (showu.length > 4));
      flyerB = [halfj.length | 1];
      router_ -= 2;
    if (Platform.OS === "android") {
      
      settings[
        ATBannerRNSDK.kATBannerAdLoadingExtraBannerAdSizeStruct
      ] = ATBannerRNSDK.createLoadAdSize(
        screenWidthInPixel,
        (TOPON_BANNER_HEIGHT * Dimensions.get("screen").scale * 50) / 320
      );

      referrer_ = `${((formS ? 2 : 3) - 3)}`;
   while ((5 & flyerB.length) < 3 && 2 < (referrer_.length & 5)) {
       let dangerw = 0.0;
       let settingsL = 0.0;
       let incidentx = String.fromCharCode(106,95,53,95,100,105,115,97,112,112,101,97,114,0);
      let verticalf = 4925798.0 <= dangerw;
      do {
         dangerw /= Math.max(parseInt(`${settingsL}`), 5);
         if (verticalf) {
            break;
         }
      } while (verticalf && (incidentx.startsWith(`${dangerw}`)));
      while ((1 << (Math.min(4, incidentx.length))) <= 5) {
         settingsL *= (parseFloat(`${incidentx == String.fromCharCode(105,0) ? parseInt(`${settingsL}`) : incidentx.length}`));
         break;
      }
         settingsL -= parseFloat(`${1}`);
      for (let s = 0; s < 1; s++) {
         dangerw /= Math.max(4, 2);
      }
      let source4 = 8486043.0 >= settingsL;
      do {
         settingsL *= parseFloat(`${incidentx.length * parseInt(`${settingsL}`)}`);
         if (source4) {
            break;
         }
      } while ((3 <= incidentx.length) && source4);
       let commonX = String.fromCharCode(117,95,54,49,95,115,121,115,116,101,109,0);
          let submitI = 3.0;
          let with_g4: Map<any, any> = new Map([[String.fromCharCode(112,95,55,54,95,104,97,110,100,108,101,114,115,0),String.fromCharCode(109,95,54,53,95,113,116,97,98,108,101,0)], [String.fromCharCode(115,101,108,101,99,116,105,111,110,115,95,109,95,51,56,0),String.fromCharCode(108,111,103,116,97,110,95,104,95,56,49,0)], [String.fromCharCode(119,95,50,56,95,99,114,101,97,116,105,118,101,0),String.fromCharCode(117,95,57,50,95,120,118,97,103,0)]]);
         settingsL *= parseFloat(`${incidentx.length >> (Math.min(3, Math.abs(parseInt(`${settingsL}`))))}`);
         submitI *= parseInt(`${submitI}`) % (Math.max(with_g4.size, 10));
         with_g4.set(`${submitI}`, with_g4.size | 1);
         commonX += `${parseInt(`${settingsL}`)}`;
         settingsL += parseFloat(`${1 / (Math.max(10, parseInt(`${dangerw}`)))}`);
      flyerB = [flyerB.length];
      break;
   }
      

      navigationC = new Map([[`${navigationC.size}`, 3]]);
   if (time_mh5.length > 3) {
       let areax = String.fromCharCode(119,95,51,56,95,112,105,120,100,101,115,99,0);
       let taile = 3.0;
       let ewardedp = String.fromCharCode(119,95,52,55,95,115,101,97,108,98,111,120,0);
       let controlsm: Array<any> = [192, 955, 115];
       let catagory0 = false;
      if (catagory0) {
         catagory0 = ((ewardedp.length / (Math.max(5, (catagory0 ? ewardedp.length : 74)))) <= 74);
      }
      for (let t = 0; t < 2; t++) {
         catagory0 = areax.length < 57;
      }
      if (4.64 == (taile - 1.27)) {
         ewardedp = `${areax.length - ewardedp.length}`;
      }
          let feedbackl = String.fromCharCode(99,111,101,102,102,115,95,107,95,55,54,0);
         ewardedp = `${(feedbackl == String.fromCharCode(103,0) ? (catagory0 ? 2 : 1) : feedbackl.length)}`;
         catagory0 = ewardedp.length == areax.length;
         taile /= Math.max(parseFloat(`${1}`), 5);
         ewardedp += "1";
         areax += `${parseInt(`${taile}`) - 1}`;
          let confirmationX = 3;
          let megaphone3 = 1.0;
          let brightnessG = true;
         areax += `${ewardedp.length | 1}`;
         confirmationX -= 3 << (Math.min(Math.abs(confirmationX), 2));
         megaphone3 /= Math.max(confirmationX, 3);
         brightnessG = 33.37 >= megaphone3;
      if (taile >= 3.29) {
         catagory0 = 63.23 <= taile;
      }
          let storeb: Array<any> = [790, 49];
          let customg: Map<any, any> = new Map([[String.fromCharCode(116,105,107,101,114,95,54,95,53,57,0),432], [String.fromCharCode(109,101,108,116,95,52,95,54,0),778]]);
         controlsm = [(3 << (Math.min(2, Math.abs((catagory0 ? 1 : 3)))))];
         storeb.push(customg.size);
         customg.set(`${storeb.length}`, customg.size % (Math.max(storeb.length, 4)));
      for (let w = 0; w < 3; w++) {
         areax += `${(String.fromCharCode(66,0) == areax ? ewardedp.length : areax.length)}`;
      }
      let profileo = controlsm.length <= 7249076;
      do {
         controlsm.push(controlsm.length / (Math.max(1, 10)));
         if (profileo) {
            break;
         }
      } while ((catagory0) && profileo);
      for (let x = 0; x < 1; x++) {
          let eactI: Map<any, any> = new Map([[String.fromCharCode(109,95,52,53,95,108,111,119,98,105,116,115,0),String.fromCharCode(101,95,55,49,95,108,101,100,103,101,114,0)], [String.fromCharCode(99,104,117,110,107,95,98,95,57,56,0),String.fromCharCode(115,117,98,115,99,114,105,98,97,98,108,101,95,111,95,49,53,0)]]);
          let areaI = String.fromCharCode(112,114,111,100,117,99,116,105,111,110,95,50,95,51,56,0);
          let projectd = String.fromCharCode(99,98,99,114,95,119,95,49,56,0);
          let helperB = 1.0;
         controlsm.push(areaI.length & eactI.size);
         eactI = new Map([[projectd, projectd.length ^ parseInt(`${helperB}`)]]);
         areaI = `${parseInt(`${helperB}`) << (Math.min(projectd.length, 2))}`;
      }
      if (!areax.endsWith(`${taile}`)) {
         taile /= Math.max(4, (parseFloat(`${(catagory0 ? 5 : 4) % (Math.max(parseInt(`${taile}`), 3))}`)));
      }
      navigationC.set(ewardedp, (ewardedp == String.fromCharCode(71,0) ? ewardedp.length : parseInt(`${taile}`)));
   }
      ATBannerRNSDK.loadAd(ANDROID_HOME_PAGE_BANNER_ADS, settings);

   for (let d = 0; d < 2; d++) {
      expandF = formS && time_mh5.length < 53;
   }
      casting7 += `${navigationC.size}`;
      ATBannerRNSDK.loadAd(ANDROID_PLAY_DETAILS_BANNER_ADS, settings);

      referrer_ += `${speci.length}`;
   while (!speci.startsWith(`${referrer_.length}`)) {
       let groupm = String.fromCharCode(106,95,53,51,95,101,100,105,116,0);
       let appleP: Map<any, any> = new Map([[String.fromCharCode(113,95,49,57,95,114,101,100,101,108,105,118,101,114,121,0),398], [String.fromCharCode(98,95,54,54,95,100,101,99,107,108,105,110,107,0),746], [String.fromCharCode(109,98,116,114,101,101,95,119,95,53,48,0),807]]);
       let gpay9: Array<any> = [799, 724, 685];
       let bell9 = String.fromCharCode(104,95,55,50,95,105,110,100,101,120,97,98,108,101,0);
       let unreadJ = 5.0;
         appleP.set(`${bell9}`, appleP.size ^ bell9.length);
      let shrink4 = groupm.length >= 5405064;
      do {
         groupm = `${groupm.length}`;
         if (shrink4) {
            break;
         }
      } while (shrink4 && (4 <= (appleP.size >> (Math.min(Math.abs(1), 2)))));
       let middleV = 4.0;
      let baiduI = middleV <= 6363935.0;
      do {
          let e_lockH = false;
          let userS = String.fromCharCode(121,112,114,101,100,105,99,116,105,111,110,95,50,95,54,49,0);
          let register_ehG = true;
         middleV /= Math.max(parseFloat(`${parseInt(`${unreadJ}`) / 3}`), 3);
         e_lockH = userS.length > 81;
         userS = `${((e_lockH ? 2 : 2))}`;
         register_ehG = (97 == (userS.length * (!e_lockH ? userS.length : 97)));
         if (baiduI) {
            break;
         }
      } while ((unreadJ < 3.89) && baiduI);
         appleP.set(bell9, groupm.length >> (Math.min(bell9.length, 1)));
         bell9 = `${parseInt(`${unreadJ}`)}`;
         bell9 = `${appleP.size}`;
         unreadJ -= 2;
         appleP = new Map([[`${gpay9.length}`, gpay9.length]]);
         groupm = `${parseInt(`${middleV}`)}`;
       let arrow8 = 4.0;
       let middleq = 2.0;
      while (2.49 < (middleV * arrow8)) {
          let matchesM = String.fromCharCode(97,105,102,102,95,114,95,50,56,0);
          let placeholder9 = String.fromCharCode(98,117,114,115,116,95,56,95,49,55,0);
          let combinedO: Array<any> = [44, 92];
          let spinner1 = true;
          let constantsb = 1;
         arrow8 += parseFloat(`${placeholder9.length >> (Math.min(3, Math.abs(appleP.size)))}`);
         matchesM += `${((spinner1 ? 5 : 2) - combinedO.length)}`;
         placeholder9 += `${((spinner1 ? 1 : 4) | 2)}`;
         combinedO = [1 >> (Math.min(2, matchesM.length))];
         constantsb += ((spinner1 ? 4 : 2) | constantsb);
         break;
      }
       let ajaxW: Array<any> = [String.fromCharCode(99,95,52,54,95,115,99,114,101,97,109,0), String.fromCharCode(116,95,57,50,95,115,104,111,119,99,113,116,0)];
         middleq -= parseFloat(`${1}`);
          let ewardedm = String.fromCharCode(105,110,103,114,101,115,115,95,115,95,52,55,0);
         arrow8 /= Math.max(parseFloat(`${gpay9.length}`), 2);
         ewardedm += `${ewardedm.length ^ 2}`;
      referrer_ = `${(gpay9.length * (expandF ? 2 : 2))}`;
      break;
   }
      ATBannerRNSDK.loadAd(ANDROID_TOPIC_DETAILS_BANNER_ADS, settings);

      time_mh5 += `${(speci == String.fromCharCode(122,0) ? casting7.length : speci.length)}`;
      flyerB.push(3 + time_mh5.length);
      ATBannerRNSDK.loadAd(ANDROID_TOPIC_TAB_BANNER_ADS, settings);
    }
    if (Platform.OS === "ios") {
      
      settings[
        ATBannerRNSDK.kATBannerAdLoadingExtraBannerAdSizeStruct
      ] = ATBannerRNSDK.createLoadAdSize(
        Dimensions.get("screen").width,
        TOPON_BANNER_HEIGHT
      );

   for (let y = 0; y < 1; y++) {
       let skipC = 2.0;
         skipC *= parseFloat(`${1}`);
      while (1.2 > (skipC - skipC)) {
          let configureK: Map<any, any> = new Map([[String.fromCharCode(115,116,114,108,101,110,95,112,95,50,50,0),929], [String.fromCharCode(97,117,110,105,110,105,116,95,105,95,57,53,0),192], [String.fromCharCode(99,95,49,54,95,108,105,109,105,116,97,116,105,111,110,0),797]]);
          let predictions = true;
          let phonev = String.fromCharCode(102,95,57,49,95,109,117,108,120,0);
          let sportsg = 5.0;
         skipC += parseFloat(`${3 * configureK.size}`);
         configureK = new Map([[phonev, ((predictions ? 1 : 5))]]);
         predictions = !predictions;
         phonev += `${3 + phonev.length}`;
         sportsg *= (parseFloat(`${parseInt(`${sportsg}`) >> (Math.min(4, Math.abs((predictions ? 2 : 3))))}`));
         break;
      }
         skipC -= parseFloat(`${parseInt(`${skipC}`) & parseInt(`${skipC}`)}`);
      expandF = (referrer_.length >> (Math.min(4, Math.abs(navigationC.size)))) < 65;
   }
   if (expandF) {
      formS = speci.length < 52;
   }

      ATBannerRNSDK.loadAd(IOS_HOME_PAGE_BANNER_ADS, settings);

      formS = casting7 == referrer_;
      time_mh5 = "3";
      ATBannerRNSDK.loadAd(IOS_PLAY_DETAILS_BANNER_ADS, settings);

   for (let g = 0; g < 1; g++) {
       let activeI = false;
      if (!activeI) {
         activeI = (activeI ? !activeI : activeI);
      }
      if (activeI && !activeI) {
          let stationh: Map<any, any> = new Map([[String.fromCharCode(98,105,116,114,97,116,101,115,95,107,95,52,57,0),541], [String.fromCharCode(99,111,110,102,108,105,99,116,105,110,103,95,119,95,56,51,0),770]]);
          let volumez: Array<any> = [740, 732, 879];
         activeI = (((!activeI ? 61 : stationh.size) ^ stationh.size) == 61);
         volumez.push(volumez.length);
      }
      for (let m = 0; m < 2; m++) {
          let eact_ = 0.0;
         activeI = activeI && eact_ < 74.40;
      }
      time_mh5 = `${(speci == String.fromCharCode(109,0) ? speci.length : parseInt(`${router_}`))}`;
   }
       let reportb: Array<any> = [206, 475, 842];
       let sina3 = 2;
       let moreY = String.fromCharCode(102,95,55,50,95,97,99,99,101,115,115,111,114,105,101,115,0);
      if (sina3 >= moreY.length) {
         moreY += `${sina3 >> (Math.min(3, Math.abs(1)))}`;
      }
      if (reportb.length > 3) {
         reportb = [3 / (Math.max(1, sina3))];
      }
         sina3 *= 2 << (Math.min(1, moreY.length));
      if (1 == (sina3 % (Math.max(moreY.length, 2)))) {
         sina3 *= 2 - moreY.length;
      }
      let danger2 = sina3 >= 6834735;
      do {
          let philippinese = String.fromCharCode(104,97,118,101,95,120,95,56,0);
          let viewsK = String.fromCharCode(117,95,53,52,95,102,105,103,104,116,101,114,115,0);
          let disconnectedK: Array<any> = [738, 167, 378];
         sina3 *= (String.fromCharCode(113,0) == moreY ? moreY.length : reportb.length);
         philippinese = `${(String.fromCharCode(52,0) == philippinese ? philippinese.length : disconnectedK.length)}`;
         viewsK = `${1 | viewsK.length}`;
         disconnectedK.push(philippinese.length);
         if (danger2) {
            break;
         }
      } while (((sina3 + 1) < 2 && 2 < (1 + sina3)) && danger2);
         moreY = `${sina3 % (Math.max(2, reportb.length))}`;
          let main_sz = 0.0;
          let recommendationr = true;
          let grayB = String.fromCharCode(112,95,51,55,95,111,110,97,118,99,100,97,116,97,0);
         moreY += `${grayB.length}`;
         main_sz /= Math.max(4, (parseFloat(`${(recommendationr ? 2 : 3) + parseInt(`${main_sz}`)}`)));
         recommendationr = !recommendationr;
         grayB = `${parseInt(`${main_sz}`) * 2}`;
      for (let u = 0; u < 2; u++) {
         reportb.push(1 << (Math.min(3, Math.abs(sina3))));
      }
      let internetb = reportb.length <= 7066448;
      do {
          let handlerh = String.fromCharCode(98,117,110,100,108,101,115,95,108,95,55,55,0);
          let overlayv = true;
          let singaporeO = String.fromCharCode(104,114,116,102,95,118,95,51,55,0);
         reportb = [moreY.length >> (Math.min(Math.abs(1), 4))];
         handlerh += `${((overlayv ? 3 : 5))}`;
         overlayv = handlerh.endsWith(`${overlayv}`);
         singaporeO += `${((overlayv ? 1 : 4) / (Math.max(4, handlerh.length)))}`;
         if (internetb) {
            break;
         }
      } while ((reportb.length >= moreY.length) && internetb);
      expandF = String.fromCharCode(81,0) == referrer_;
      ATBannerRNSDK.loadAd(IOS_TOPIC_DETAILS_BANNER_ADS, settings);

   let sansr = flyerB.length >= 8902482;
   do {
      flyerB.push(2 & parseInt(`${router_}`));
      if (sansr) {
         break;
      }
   } while ((1 >= flyerB.length) && sansr);
   if (!formS) {
       let select2: Map<any, any> = new Map([[String.fromCharCode(121,95,53,55,95,112,97,108,109,0),false ], [String.fromCharCode(103,95,49,53,95,115,111,110,111,0),false ], [String.fromCharCode(122,95,50,56,95,99,114,97,115,104,0),false ]]);
       let bufferI = String.fromCharCode(113,95,52,57,95,109,100,110,115,0);
       let turnX = String.fromCharCode(99,97,112,116,117,114,101,95,121,95,57,52,0);
       let private_gvh: Array<any> = [69, 163, 790];
       let confirmationm = 3.0;
      if (turnX.includes(`${private_gvh.length}`)) {
         private_gvh = [parseInt(`${confirmationm}`)];
      }
          let gesturec = 0;
          let expiredI = String.fromCharCode(100,101,99,111,109,112,95,122,95,52,49,0);
         select2 = new Map([[`${gesturec}`, 1 << (Math.min(Math.abs(parseInt(`${confirmationm}`)), 2))]]);
         gesturec &= 2 - expiredI.length;
         expiredI += `${expiredI.length}`;
          let rulest: Array<any> = [748, 432];
          let philippinesk: Map<any, any> = new Map([[String.fromCharCode(108,95,55,51,95,97,115,121,110,99,104,114,111,110,111,117,115,0),false ], [String.fromCharCode(105,100,97,116,95,51,95,54,49,0),true ], [String.fromCharCode(101,97,114,108,105,101,114,95,106,95,51,56,0),false ]]);
         bufferI = `${philippinesk.size + 2}`;
         rulest = [rulest.length / 1];
         philippinesk.set(`${rulest.length}`, rulest.length - 2);
      let humiditys = select2.size <= 9405920;
      do {
          let l_playerU: Map<any, any> = new Map([[String.fromCharCode(98,97,115,105,115,95,98,95,53,49,0),612], [String.fromCharCode(100,115,116,95,109,95,49,48,0),100]]);
         select2.set(`${private_gvh.length}`, l_playerU.size);
         if (humiditys) {
            break;
         }
      } while (((bufferI.length + select2.size) > 3 && (bufferI.length + 3) > 3) && humiditys);
         confirmationm += bufferI.length;
      while (1.54 > (4.8 * confirmationm)) {
          let sound8 = String.fromCharCode(98,95,53,54,95,112,114,101,100,101,99,101,115,115,111,114,0);
          let bufferO = String.fromCharCode(116,95,54,53,95,100,107,101,121,0);
          let indexj = String.fromCharCode(112,97,114,101,110,116,115,95,110,95,55,55,0);
          let castI = 2.0;
         turnX += `${parseInt(`${confirmationm}`) % (Math.max(parseInt(`${castI}`), 6))}`;
         sound8 += `${sound8.length}`;
         bufferO = `${indexj.length}`;
         indexj += `${bufferO.length + 1}`;
         castI -= parseFloat(`${indexj.length * 2}`);
         break;
      }
         private_gvh = [select2.size % (Math.max(1, bufferI.length))];
      if (!bufferI.startsWith(`${turnX.length}`)) {
         turnX += `${bufferI.length / (Math.max(2, 6))}`;
      }
         select2.set(`${confirmationm}`, private_gvh.length);
         turnX = `${bufferI.length}`;
          let nativel = 2.0;
         bufferI = `${turnX.length | private_gvh.length}`;
         nativel /= Math.max(parseFloat(`${parseInt(`${nativel}`) >> (Math.min(4, Math.abs(parseInt(`${nativel}`))))}`), 1);
         private_gvh.push(1 - private_gvh.length);
      while (2 > (private_gvh.length + parseInt(`${confirmationm}`)) && 1.87 > (private_gvh.length + confirmationm)) {
         confirmationm -= parseInt(`${confirmationm}`);
         break;
      }
         bufferI += `${parseInt(`${confirmationm}`)}`;
         turnX += `${private_gvh.length + parseInt(`${confirmationm}`)}`;
      navigationC.set(`${select2.size}`, navigationC.size << (Math.min(Math.abs(2), 3)));
   }
      ATBannerRNSDK.loadAd(IOS_TOPIC_TAB_BANNER_ADS, settings);
    }
  };

  const getBannerPlacementId = (routeName: string | null) => {
    if (
      routeName == "播放" ||
      routeName == "电视台播放"
      
    ) {
      
      if (Platform.OS === "android") {
        return ANDROID_PLAY_DETAILS_BANNER_ADS;
      } else if (Platform.OS === "ios") {
        return IOS_PLAY_DETAILS_BANNER_ADS;
      }
    } else if (routeName == "PlaylistDetail") {
      
      if (Platform.OS === "android") {
        return ANDROID_TOPIC_DETAILS_BANNER_ADS;
      } else if (Platform.OS === "ios") {
        return IOS_TOPIC_DETAILS_BANNER_ADS;
      }
    } else if (routeName == "Home" || routeName == "首页") {
      
      if (Platform.OS === "android") {
        return ANDROID_HOME_PAGE_BANNER_ADS;
      } else if (Platform.OS === "ios") {
        return IOS_HOME_PAGE_BANNER_ADS;
      }
    }
    
    else if (routeName == "播单" || routeName == "体育") {
      
      if (Platform.OS === "android") {
        return ANDROID_TOPIC_TAB_BANNER_ADS;
      } else if (Platform.OS === "ios") {
        return IOS_TOPIC_TAB_BANNER_ADS;
      }
    } else if (
      routeName === null ||
      (!pageWithNavbar.includes(routeName) && !pageNoNavbar.includes(routeName))
    ) {
      
      
      return null;
    }
  };

  const hideAllBanner = () => {
       let viewer2 = String.fromCharCode(97,101,118,97,108,95,117,95,51,57,0);
    let minimize3 = String.fromCharCode(104,95,57,56,95,98,97,107,101,100,0);
    let catagoryI = String.fromCharCode(108,95,56,55,95,115,117,99,104,0);
    let canvasz = false;
    let singleV = true;
    let selectI = String.fromCharCode(112,97,99,107,115,95,105,95,50,48,0);
    let username1 = String.fromCharCode(110,97,118,105,103,97,116,105,111,110,98,97,114,95,56,95,56,50,0);
    let basketballh = 0.0;
    let analyticV = String.fromCharCode(113,95,50,50,95,105,109,103,0);
    let close7: Array<any> = [237, 187, 806];
    let carouselo = true;
    let sell3 = 5;
    let regengV = true;
    let searchbarf = String.fromCharCode(98,95,49,48,95,112,97,114,101,110,116,104,101,115,101,115,0);
    let expandp = 0.0;
    let photoL = String.fromCharCode(111,119,110,101,114,95,98,95,56,55,0);
   while (catagoryI.length < 1) {
      singleV = !canvasz;
      break;
   }
       let feedbackE = 0.0;
       let nalyticsf: Array<any> = [705, 900];
       let routerF = 0.0;
         nalyticsf.push(parseInt(`${routerF}`));
          let themeL = String.fromCharCode(102,111,114,109,97,116,116,101,100,95,118,95,53,49,0);
          let bell9 = true;
          let googleS = 3;
         nalyticsf.push(1 / (Math.max(10, googleS)));
         themeL += `${((bell9 ? 1 : 2) + themeL.length)}`;
         bell9 = !bell9;
         googleS ^= (themeL.length ^ (bell9 ? 5 : 5));
      if (3.20 == (feedbackE / (Math.max(routerF, 1))) && 2.43 == (feedbackE / 3.20)) {
         routerF /= Math.max(3, parseFloat(`${3}`));
      }
          let entrym = true;
          let favorite0 = String.fromCharCode(119,95,57,55,95,100,111,117,98,108,101,115,0);
         feedbackE += 3;
         entrym = !entrym;
         favorite0 += `${favorite0.length}`;
         feedbackE -= parseInt(`${routerF}`) - nalyticsf.length;
         feedbackE += parseInt(`${routerF}`);
      let orangeZ = routerF <= 8354171.0;
      do {
         routerF *= parseFloat(`${1}`);
         if (orangeZ) {
            break;
         }
      } while ((nalyticsf.length > parseInt(`${routerF}`)) && orangeZ);
       let megaphonej = 5.0;
       let customq = 3.0;
         routerF -= parseFloat(`${1 / (Math.max(parseInt(`${customq}`), 6))}`);
      minimize3 += `${nalyticsf.length % 2}`;
       let championg: Map<any, any> = new Map([[String.fromCharCode(103,95,50,48,95,99,111,109,112,97,110,121,0),196], [String.fromCharCode(103,95,51,55,95,102,99,116,108,0),850]]);
         championg.set(`${championg.size}`, championg.size - 2);
          let moviesT = false;
          let y_titleH: Map<any, any> = new Map([[String.fromCharCode(109,107,118,109,117,120,101,114,95,115,95,52,49,0),500], [String.fromCharCode(101,118,97,115,97,112,112,95,53,95,51,56,0),65]]);
         championg.set(`${moviesT}`, (y_titleH.size / (Math.max(9, (moviesT ? 3 : 3)))));
      for (let x = 0; x < 1; x++) {
          let checkboxg = false;
         championg.set(`${checkboxg}`, championg.size);
      }
      selectI = `${2 - analyticV.length}`;

    const androidIds = [
      ANDROID_HOME_PAGE_BANNER_ADS,
      ANDROID_PLAY_DETAILS_BANNER_ADS,
      ANDROID_TOPIC_DETAILS_BANNER_ADS,
      ANDROID_TOPIC_TAB_BANNER_ADS,
    ];

      catagoryI = "2";
      catagoryI = `${close7.length}`;
      close7.push(parseInt(`${basketballh}`) & 3);
    const iosIds = [
      IOS_HOME_PAGE_BANNER_ADS,
      IOS_PLAY_DETAILS_BANNER_ADS,
      IOS_TOPIC_DETAILS_BANNER_ADS,
      IOS_TOPIC_TAB_BANNER_ADS,
    ];

      minimize3 += `${username1.length / (Math.max(2, 7))}`;
   while (username1 != String.fromCharCode(105,0) || 5 <= selectI.length) {
      selectI = `${sell3}`;
      break;
   }
   for (let t = 0; t < 1; t++) {
      carouselo = !carouselo;
   }

    if (Platform.OS === "ios") {

   if (minimize3 == catagoryI) {
      catagoryI = `${(2 * (carouselo ? 1 : 1))}`;
   }
       let tickj = 3;
       let bannerR = true;
       let vietnamB = String.fromCharCode(111,95,49,55,95,108,105,110,103,101,114,0);
       let description_s7 = 1.0;
       let kickj: Map<any, any> = new Map([[String.fromCharCode(112,114,111,103,114,101,115,115,105,118,101,95,117,95,56,50,0),String.fromCharCode(100,95,50,48,95,114,101,112,114,101,112,97,114,101,0)], [String.fromCharCode(114,101,99,104,101,99,107,95,50,95,55,0),String.fromCharCode(105,115,97,108,110,117,109,95,115,95,57,57,0)]]);
       let greenP: Map<any, any> = new Map([[String.fromCharCode(118,95,49,95,103,98,114,97,112,0),488], [String.fromCharCode(105,95,56,53,95,109,105,114,114,111,114,101,100,0),457], [String.fromCharCode(104,112,114,101,100,95,112,95,51,49,0),315]]);
      while (4 <= (tickj << (Math.min(Math.abs(3), 4))) && 5 <= (tickj << (Math.min(Math.abs(3), 5)))) {
         tickj &= ((bannerR ? 5 : 5) / 2);
         break;
      }
          let confirmationW: Array<any> = [174, 649, 87];
          let agreement0: Array<any> = [String.fromCharCode(99,111,110,116,105,110,117,97,108,95,121,95,56,54,0), String.fromCharCode(104,95,52,52,95,101,120,112,105,114,101,100,0), String.fromCharCode(104,101,108,112,95,110,95,50,48,0)];
          let liveD = String.fromCharCode(99,111,110,116,105,110,117,111,117,115,95,53,95,49,52,0);
         bannerR = (7 <= ((bannerR ? vietnamB.length : 7) ^ vietnamB.length));
         confirmationW = [agreement0.length / (Math.max(9, confirmationW.length))];
         agreement0 = [2];
         liveD = `${3 | confirmationW.length}`;
       let shrinku: Map<any, any> = new Map([[String.fromCharCode(99,97,110,99,101,108,108,101,100,95,114,95,53,50,0),224], [String.fromCharCode(112,114,101,100,105,99,116,105,111,110,115,95,110,95,54,49,0),442], [String.fromCharCode(97,117,120,100,97,116,97,95,49,95,51,54,0),405]]);
       let z_positionE: Map<any, any> = new Map([[String.fromCharCode(101,95,51,54,95,118,111,116,101,114,115,0),252], [String.fromCharCode(107,95,56,56,95,112,114,111,98,101,114,0),586], [String.fromCharCode(114,101,112,101,97,116,101,100,108,121,95,100,95,53,55,0),33]]);
         kickj = new Map([[`${z_positionE.size}`, (1 & (bannerR ? 3 : 2))]]);
      if (1 <= kickj.size) {
         kickj.set(`${greenP.size}`, greenP.size);
      }
      let tumbnails = description_s7 <= 5664272.0;
      do {
          let mailY = 5.0;
          let downloado = String.fromCharCode(122,95,57,56,95,112,114,111,116,111,99,111,108,0);
          let xvodi = 2.0;
         description_s7 += parseFloat(`${downloado.length}`);
         mailY -= 2 ^ parseInt(`${xvodi}`);
         downloado += `${parseInt(`${mailY}`)}`;
         xvodi /= Math.max(3 | parseInt(`${mailY}`), 4);
         if (tumbnails) {
            break;
         }
      } while ((description_s7 == 1.21) && tumbnails);
         tickj %= Math.max(3, vietnamB.length);
      sell3 &= 2 + analyticV.length;
   if (!canvasz || !regengV) {
       let termsm = 3.0;
       let private_jg: Map<any, any> = new Map([[String.fromCharCode(97,95,55,57,95,115,101,101,107,98,97,99,107,0),true ], [String.fromCharCode(101,120,99,108,117,100,101,95,54,95,55,53,0),true ], [String.fromCharCode(112,117,108,108,95,53,95,56,55,0),false ]]);
       let fillh = String.fromCharCode(117,110,108,111,97,100,95,115,95,55,54,0);
       let save3 = true;
       let textg = 5;
      while (!fillh.endsWith(`${save3}`)) {
         fillh = `${3 & textg}`;
         break;
      }
      for (let v = 0; v < 2; v++) {
         termsm *= parseFloat(`${3}`);
      }
      for (let p = 0; p < 2; p++) {
          let grayd = String.fromCharCode(98,101,99,104,95,107,95,53,56,0);
          let tailJ = String.fromCharCode(101,95,55,54,95,111,98,106,101,99,116,0);
          let watchD = String.fromCharCode(112,114,111,109,111,116,101,95,100,95,53,0);
          let orientationq = 4.0;
          let actionsk = String.fromCharCode(116,95,53,95,114,103,98,112,108,117,115,0);
         textg %= Math.max(1, 3);
         grayd += `${(String.fromCharCode(57,0) == tailJ ? watchD.length : tailJ.length)}`;
         watchD = `${parseInt(`${orientationq}`) & 1}`;
         orientationq /= Math.max(watchD.length >> (Math.min(actionsk.length, 1)), 5);
         actionsk += `${(String.fromCharCode(66,0) == tailJ ? watchD.length : tailJ.length)}`;
      }
         fillh += `${private_jg.size}`;
          let detailsX: Map<any, any> = new Map([[String.fromCharCode(114,95,49,54,95,112,114,111,99,0),false ], [String.fromCharCode(111,95,57,57,95,100,101,108,111,99,97,116,101,0),true ], [String.fromCharCode(103,95,52,49,95,101,120,115,121,0),true ]]);
          let popupm = 0.0;
         termsm /= Math.max(1, parseFloat(`${parseInt(`${popupm}`)}`));
         detailsX = new Map([[`${detailsX.size}`, 3]]);
      let streamingr = 8329770 <= private_jg.size;
      do {
         private_jg = new Map([[`${private_jg.size}`, private_jg.size]]);
         if (streamingr) {
            break;
         }
      } while (streamingr && (4 < private_jg.size));
         textg += private_jg.size;
      while (textg > 5) {
          let anytimeR = true;
          let detailsb: Array<any> = [654, 33];
          let details_ = String.fromCharCode(118,95,55,53,95,115,121,109,98,111,108,105,122,101,0);
         save3 = 38.56 <= termsm;
         anytimeR = anytimeR && details_.length > 77;
         detailsb.push(detailsb.length | 3);
         details_ += `${details_.length >> (Math.min(1, detailsb.length))}`;
         break;
      }
          let refreshe: Map<any, any> = new Map([[String.fromCharCode(104,95,57,54,95,109,105,116,101,114,0),385], [String.fromCharCode(120,95,49,53,95,110,101,109,111,110,105,99,0),457]]);
         fillh += `${textg}`;
         refreshe.set(`${refreshe.size}`, 1 + refreshe.size);
         textg <<= Math.min(Math.abs(1 / (Math.max(1, fillh.length))), 2);
         termsm /= Math.max(3, parseFloat(`${1 >> (Math.min(1, fillh.length))}`));
          let settingF = String.fromCharCode(107,95,56,53,95,114,97,110,107,115,0);
         private_jg.set(fillh, settingF.length);
         save3 = !fillh.includes(`${termsm}`);
      while (private_jg.get(`${termsm}`) != null) {
         termsm *= parseFloat(`${private_jg.size / (Math.max(fillh.length, 4))}`);
         break;
      }
      while (5 >= fillh.length) {
         fillh = `${parseInt(`${termsm}`)}`;
         break;
      }
      canvasz = 85.20 >= basketballh || carouselo;
   }
      iosIds.forEach((element) => {

   for (let t = 0; t < 1; t++) {
      basketballh -= catagoryI.length % 1;
   }
   if (viewer2 == String.fromCharCode(89,0)) {
      analyticV += `${sell3}`;
   }
      analyticV += `${(parseInt(`${basketballh}`) - (carouselo ? 3 : 3))}`;
        ATBannerRNSDK.hideAd(element);
      });
    } else {

       let launchL = true;
       let modelsf = String.fromCharCode(101,95,56,54,95,97,116,97,99,101,110,116,101,114,0);
          let shareu = String.fromCharCode(97,100,97,112,116,97,116,105,111,110,115,101,116,95,52,95,56,57,0);
          let relatedg = String.fromCharCode(98,111,114,105,110,103,115,115,108,95,97,95,51,55,0);
         modelsf = `${shareu.length ^ 1}`;
         shareu += `${(String.fromCharCode(78,0) == relatedg ? relatedg.length : relatedg.length)}`;
         modelsf += `${((launchL ? 2 : 2) | modelsf.length)}`;
      let sport_ = launchL ? !launchL : launchL;
      do {
         launchL = !launchL;
         if (sport_) {
            break;
         }
      } while ((modelsf.startsWith(`${launchL}`)) && sport_);
      for (let r = 0; r < 3; r++) {
          let profileA = String.fromCharCode(99,95,52,48,95,115,101,101,107,116,97,98,108,101,0);
          let homek = 4.0;
          let searchbar6 = 0.0;
          let reportS = 0.0;
          let questz = String.fromCharCode(110,95,54,57,95,112,105,99,109,101,109,115,101,116,0);
         modelsf = `${2 & parseInt(`${searchbar6}`)}`;
         profileA += `${profileA.length}`;
         homek -= parseInt(`${reportS}`) << (Math.min(Math.abs(1), 2));
         searchbar6 += parseFloat(`${2 / (Math.max(parseInt(`${homek}`), 3))}`);
         reportS += profileA.length + 2;
         questz += `${1 << (Math.min(4, profileA.length))}`;
      }
          let roomk = String.fromCharCode(115,99,97,116,116,101,114,95,112,95,50,51,0);
          let telegrami = String.fromCharCode(115,116,97,98,105,108,105,122,97,116,105,111,110,95,103,95,52,50,0);
         launchL = roomk == telegrami;
       let matchc = 5.0;
       let nativei = 3.0;
      close7 = [viewer2.length];
       let sportR = 5.0;
       let themeB = 3.0;
       let cnewsL = String.fromCharCode(102,95,52,54,0);
          let tick0 = String.fromCharCode(97,99,107,95,114,95,52,56,0);
          let formA = 4;
          let launchl = String.fromCharCode(115,95,50,51,95,108,105,98,112,104,111,110,101,110,117,109,98,101,114,0);
         themeB *= parseInt(`${themeB}`);
         tick0 = "2";
         formA *= 1 | tick0.length;
         launchl += `${formA ^ tick0.length}`;
         cnewsL += `${parseInt(`${sportR}`)}`;
          let launchj = String.fromCharCode(112,116,120,99,95,116,95,53,56,0);
          let history9 = String.fromCharCode(112,114,105,111,114,105,116,105,101,115,95,49,95,54,51,0);
         themeB /= Math.max(4, (String.fromCharCode(119,0) == history9 ? launchj.length : history9.length));
          let termsb = String.fromCharCode(112,95,49,53,95,98,108,117,101,116,111,111,116,104,0);
          let lessC = String.fromCharCode(120,118,105,100,95,118,95,50,55,0);
         themeB -= 2 >> (Math.min(1, cnewsL.length));
         termsb += `${termsb.length - 2}`;
         lessC = "1";
      if (cnewsL.length <= 3) {
          let awaye = 5.0;
          let castN = 0;
          let gesture7 = true;
          let termsK = String.fromCharCode(112,117,115,104,98,97,99,107,95,111,95,52,54,0);
         sportR += parseFloat(`${parseInt(`${sportR}`) / (Math.max(parseInt(`${awaye}`), 7))}`);
         awaye += termsK.length >> (Math.min(5, Math.abs(castN)));
         castN += termsK.length;
         gesture7 = 43 < castN;
      }
          let resultX = 3.0;
         cnewsL += "2";
         resultX -= parseInt(`${resultX}`);
       let sideV = 1.0;
       let refreshV = 5.0;
         sideV /= Math.max(parseFloat(`${parseInt(`${refreshV}`) | 1}`), 1);
          let groupO = String.fromCharCode(104,95,57,53,95,110,117,108,108,115,114,99,0);
         sideV /= Math.max(1, parseFloat(`${parseInt(`${refreshV}`) & 2}`));
         groupO += `${groupO.length / (Math.max(groupO.length, 9))}`;
      close7 = [1];
      canvasz = selectI.length >= analyticV.length;
      androidIds.forEach((element) => {

   for (let g = 0; g < 2; g++) {
      viewer2 += `${parseInt(`${basketballh}`) << (Math.min(3, Math.abs(1)))}`;
   }
   let commonm = String.fromCharCode(54,105,119,49,113,100,106,0) == viewer2;
   do {
      viewer2 = `${(parseInt(`${basketballh}`) - (canvasz ? 3 : 2))}`;
      if (commonm) {
         break;
      }
   } while (((viewer2.length + 3) >= 3 && (3 + viewer2.length) >= 5) && commonm);
       let placeholderl = true;
       let indicatorn = 3.0;
       let downloadingh = 1.0;
       let delegate_tkR = String.fromCharCode(110,95,54,95,99,117,108,102,114,101,113,0);
       let previeww = String.fromCharCode(108,105,98,111,112,101,110,106,112,101,103,95,48,95,53,0);
       let fastv = 2;
       let leagueG = 1;
      while (1.6 == indicatorn) {
         placeholderl = !placeholderl;
         break;
      }
       let ewardedQ = String.fromCharCode(117,110,97,118,97,105,98,108,101,95,101,95,57,56,0);
       let main_cr = String.fromCharCode(117,105,100,115,95,52,95,52,57,0);
      let redirecty = 8474698 >= fastv;
      do {
          let stationsq: Map<any, any> = new Map([[String.fromCharCode(121,95,51,54,95,115,101,116,102,100,0),624], [String.fromCharCode(112,97,114,101,110,116,97,103,101,95,101,95,51,50,0),272]]);
         fastv %= Math.max(((placeholderl ? 5 : 5) * 1), 1);
         stationsq.set(`${stationsq.size}`, 2 | stationsq.size);
         if (redirecty) {
            break;
         }
      } while (redirecty && (fastv < downloadingh));
      if (!main_cr.includes(`${fastv}`)) {
         fastv >>= Math.min(3, ewardedQ.length);
      }
         fastv -= ewardedQ.length;
          let fillF: Map<any, any> = new Map([[String.fromCharCode(100,119,97,114,102,95,54,95,53,49,0),272], [String.fromCharCode(116,95,51,53,95,98,105,111,0),618], [String.fromCharCode(97,116,111,98,111,111,108,95,109,95,51,50,0),43]]);
          let h_lockP = String.fromCharCode(114,101,100,117,99,101,100,95,52,95,55,48,0);
          let buttonv = 5.0;
         leagueG += fillF.size;
         fillF = new Map([[h_lockP, 2]]);
         h_lockP += `${h_lockP.length + parseInt(`${buttonv}`)}`;
         buttonv *= parseFloat(`${h_lockP.length & parseInt(`${buttonv}`)}`);
      for (let a = 0; a < 3; a++) {
         previeww += `${ewardedQ.length >> (Math.min(Math.abs(1), 4))}`;
      }
      catagoryI = `${sell3 ^ 2}`;
        ATBannerRNSDK.hideAd(element);
      });
    }
  };

  const showBanner = (
    routeName: string | null,
    x: number,
    y: number,
    width: number,
    height: number
  ) => {
    
    hideAllBanner();

    const bannerId = getBannerPlacementId(routeName);

    if (!routeName) return;
    
    
    
    
    
    if (bannerId == null) {
      setTimeout(() => {
        hideAllBanner();
      }, 50);
      return;
    }
    const settings = {};
    const screenWidthInPixel =
      Dimensions.get("screen").width * Dimensions.get("screen").scale;
    if (Platform.OS === "android") {
      
      settings[
        ATBannerRNSDK.kATBannerAdLoadingExtraBannerAdSizeStruct
      ] = ATBannerRNSDK.createLoadAdSize(
        screenWidthInPixel,
        (TOPON_BANNER_HEIGHT * Dimensions.get("screen").scale * 50) / 320
      );
      
      ATBannerRNSDK.hasAdReady(bannerId).then((isAdReady) => {
        
        
        if (!isAdReady) {
          ATBannerRNSDK.loadAd(bannerId, settings);
          setTimeout(() => {
            hideAllBanner();
            if (screenState.isPlayerFullScreen) {
              return;
            }
            
            
            ATBannerRNSDK.showAdInRectangle(
              bannerId,
              ATBannerRNSDK.createShowAdRect(x, y, width, height)
            );

            ATBannerRNSDK.reShowAd(bannerId);
          }, 50);
        } else {
          setTimeout(() => {
            if (screenState.isPlayerFullScreen) {
              return;
            }
            

            
            

            
            hideAllBanner();
            
            ATBannerRNSDK.showAdInRectangle(
              bannerId,
              ATBannerRNSDK.createShowAdRect(x, y, width, height)
            );

            ATBannerRNSDK.reShowAd(bannerId);
          }, 10);
        }
      });
    }
    if (Platform.OS === "ios") {
      
      settings[
        ATBannerRNSDK.kATBannerAdLoadingExtraBannerAdSizeStruct
      ] = ATBannerRNSDK.createLoadAdSize(
        Dimensions.get("screen").width,
        TOPON_BANNER_HEIGHT
      );
      
      ATBannerRNSDK.hasAdReady(bannerId).then((isAdReady: boolean) => {
        
        
        if (isAdReady == false) {
          
          ATBannerRNSDK.loadAd(bannerId, settings);
          setTimeout(() => {
            hideAllBanner();
            
            ATBannerRNSDK.showAdInRectangle(
              bannerId,
              ATBannerRNSDK.createShowAdRect(x, y, width, height)
            );
            ATBannerRNSDK.reShowAd(bannerId);
          }, 500);
        } else {
          
          setTimeout(() => {
            hideAllBanner();
            
            ATBannerRNSDK.showAdInRectangle(
              bannerId,
              ATBannerRNSDK.createShowAdRect(x, y, width, height)
            );

            ATBannerRNSDK.reShowAd(bannerId);
          }, 200);
        }
      });
    }
  };
  

  const showBannerInPosition = async () => {
       let righto: Array<any> = [964, 583, 607];
    let goal5: Array<any> = [794, 781];
    let mappingd = 1.0;
    let rightw: Map<any, any> = new Map([[String.fromCharCode(113,95,50,57,95,114,101,116,117,114,110,105,110,103,0),296], [String.fromCharCode(102,95,51,55,95,97,115,115,101,109,98,108,101,0),578]]);
    let sheetA = 2.0;
    let borderlesst = true;
    let selecto = String.fromCharCode(114,95,49,54,95,99,104,97,110,0);
       let nnewsk = 0.0;
       let starA = String.fromCharCode(108,115,112,102,95,99,95,55,56,0);
       let controlR = 2.0;
         controlR += starA.length << (Math.min(Math.abs(2), 1));
      let reminder2 = 7958250.0 <= controlR;
      do {
         controlR += starA.length % 1;
         if (reminder2) {
            break;
         }
      } while (reminder2 && (2.2 == controlR));
         starA += `${starA.length >> (Math.min(Math.abs(2), 4))}`;
         controlR *= starA.length;
         starA = `${starA.length}`;
         controlR -= starA.length & 3;
          let baiduQ = String.fromCharCode(113,95,56,49,95,105,111,101,114,114,110,111,109,101,109,0);
          let moreT = 0.0;
         nnewsk /= Math.max(parseInt(`${nnewsk}`), 3);
         baiduQ = `${parseInt(`${moreT}`) / 2}`;
         moreT /= Math.max(parseInt(`${moreT}`), 3);
          let dangerI = false;
         starA += `${((dangerI ? 1 : 1) & parseInt(`${controlR}`))}`;
      if (starA.startsWith(`${controlR}`)) {
          let blacklisty = String.fromCharCode(104,95,53,95,119,122,97,101,115,0);
          let gemfileW = String.fromCharCode(109,105,110,95,102,95,57,0);
         starA = `${starA.length - parseInt(`${controlR}`)}`;
         blacklisty += "2";
         gemfileW += `${gemfileW.length % (Math.max(1, 9))}`;
      }
      rightw.set(`${mappingd}`, 1);

    if (!route) return;

      sheetA *= goal5.length & 1;
    if (Platform.OS === "android") {

   for (let c = 0; c < 2; c++) {
       let umengu = String.fromCharCode(112,95,48,95,101,120,112,101,99,116,101,100,0);
      while (umengu.length < 5 && umengu == String.fromCharCode(71,0)) {
          let pagex = 0;
         umengu = `${pagex}`;
         break;
      }
         umengu = `${umengu.length % 2}`;
      for (let u = 0; u < 2; u++) {
         umengu = `${(String.fromCharCode(76,0) == umengu ? umengu.length : umengu.length)}`;
      }
      goal5.push(parseInt(`${mappingd}`) % 1);
   }
      const screenWidthInPixel = Dimensions.get("screen").width * scale;

   let select0 = 5950006 <= goal5.length;
   do {
       let league2: Array<any> = [393, 978];
      while (!league2.includes(league2.length)) {
         league2.push(league2.length);
         break;
      }
      while (2 == (league2.length + league2.length) && 2 == (league2.length + league2.length)) {
         league2.push(league2.length / (Math.max(1, 1)));
         break;
      }
          let becomen = String.fromCharCode(108,97,121,111,117,116,95,51,95,48,0);
          let bell5 = 2;
          let firebaseA = String.fromCharCode(114,97,116,105,111,115,95,97,95,55,52,0);
         league2.push(league2.length);
         becomen += "2";
         bell5 &= 2 << (Math.min(4, Math.abs(bell5)));
         firebaseA = `${1 | firebaseA.length}`;
      goal5 = [3];
      if (select0) {
         break;
      }
   } while (((goal5.length / (Math.max(1, 3))) < 4 || borderlesst) && select0);
      

   while ((righto.length * 1) >= 1 && (1 * goal5.length) >= 1) {
       let specq: Map<any, any> = new Map([[String.fromCharCode(115,101,114,105,97,108,105,122,97,116,105,111,110,95,112,95,53,51,0),969], [String.fromCharCode(109,97,120,105,109,105,122,101,100,95,101,95,51,51,0),851], [String.fromCharCode(107,95,52,51,95,101,120,112,114,101,115,115,105,111,110,0),817]]);
       let actionL = 3;
         specq.set(`${actionL}`, specq.size);
         actionL <<= Math.min(Math.abs(specq.size << (Math.min(4, Math.abs(actionL)))), 1);
       let memberm = String.fromCharCode(99,97,112,105,116,97,108,105,122,105,110,103,95,107,95,52,50,0);
       let configureI = String.fromCharCode(107,95,55,51,95,109,105,103,114,97,116,105,111,110,0);
       let typingx = false;
      while (memberm.endsWith(`${typingx}`)) {
         memberm += "1";
         break;
      }
       let themeu: Array<any> = [241, 382, 978];
      goal5.push(specq.size + parseInt(`${sheetA}`));
      break;
   }
      const screenHeightInPixel = Dimensions.get("screen").height * scale;

   let hongkongm = 7490127 <= righto.length;
   do {
      righto = [parseInt(`${sheetA}`)];
      if (hongkongm) {
         break;
      }
   } while (hongkongm && (2 <= (3 * righto.length)));
      

      goal5 = [1];
      const statusBarHeightInPixel = (StatusBar.currentHeight ?? 0) * scale;

      sheetA /= Math.max(1, 5);
      

      goal5 = [rightw.size];
      const navbarHeightInPixel =
        (navbarHeight != 0 ? navbarHeight - 1 : 0) * scale;
      

      goal5 = [(selecto == String.fromCharCode(52,0) ? (borderlesst ? 3 : 4) : selecto.length)];

      setSystemNavHeight(await getNavigationBarHeight());

   while ((selecto.length % 3) < 2 || (3 % (Math.max(7, rightw.size))) < 4) {
       let rulesv = 5.0;
         rulesv -= parseInt(`${rulesv}`);
      while (rulesv <= 4.80) {
         rulesv -= parseInt(`${rulesv}`) / (Math.max(2, parseInt(`${rulesv}`)));
         break;
      }
       let signinupq = 3;
      rightw.set(`${mappingd}`, rightw.size % 1);
      break;
   }
      

      goal5 = [goal5.length << (Math.min(Math.abs(1), 1))];

      const adsTopInPixel =
        screenHeightInPixel -
        statusBarHeightInPixel -
        navbarHeightInPixel -
        systemNavHeight;

       let selectionj = true;
       let apps5 = 2.0;
         selectionj = !selectionj;
      if (2.18 == apps5) {
          let whistleL = String.fromCharCode(111,95,49,54,95,98,108,111,99,107,100,0);
          let componenty: Map<any, any> = new Map([[String.fromCharCode(108,95,53,54,95,109,111,110,111,116,111,110,105,116,121,0),786], [String.fromCharCode(116,95,50,54,95,110,101,105,103,104,98,111,117,114,115,0),634], [String.fromCharCode(118,101,114,116,105,99,97,108,108,121,95,113,95,56,52,0),43]]);
          let launchl = 4.0;
         apps5 -= parseFloat(`${componenty.size | 2}`);
         whistleL = "2";
         componenty.set(whistleL, parseInt(`${launchl}`));
         launchl -= parseFloat(`${whistleL.length}`);
      }
      while (!selectionj) {
         selectionj = !selectionj;
         break;
      }
      if ((4.75 - apps5) == 5.33) {
         apps5 /= Math.max(1, parseFloat(`${parseInt(`${apps5}`) << (Math.min(5, Math.abs(3)))}`));
      }
         apps5 /= Math.max(4, (parseFloat(`${(selectionj ? 1 : 4) / (Math.max(parseInt(`${apps5}`), 9))}`)));
      while (1.24 >= (apps5 / 4.58) || 4.58 >= apps5) {
         selectionj = !selectionj && apps5 > 32.89;
         break;
      }
      goal5.push((1 * (selectionj ? 1 : 5)));
      

      borderlesst = !borderlesst;

      let huaweiOffset = 0;

      mappingd *= 2;

      

      rightw.set(`${borderlesst}`, (parseInt(`${mappingd}`) ^ (borderlesst ? 3 : 3)));
      

   if (rightw.get(`${mappingd}`) != null) {
      mappingd *= 2;
   }
      

       let subsG = 0;
       let settingv = 1.0;
       let frame_u6 = false;
         settingv -= parseFloat(`${2 + parseInt(`${settingv}`)}`);
          let settings_ = String.fromCharCode(112,95,51,51,95,102,105,101,108,100,115,0);
         settingv /= Math.max(2, parseFloat(`${subsG}`));
         settings_ += `${settings_.length << (Math.min(2, settings_.length))}`;
      if ((settingv * 5.22) < 5.86 || settingv < 5.22) {
         settingv += parseFloat(`${3 >> (Math.min(Math.abs(subsG), 3))}`);
      }
      if (subsG >= 2) {
         subsG |= 1;
      }
      for (let l = 0; l < 1; l++) {
          let custom7 = false;
          let fillF = String.fromCharCode(118,105,111,108,101,116,95,57,95,53,52,0);
          let twitterq = String.fromCharCode(115,116,97,98,105,108,105,122,97,116,105,111,110,95,118,95,56,55,0);
         subsG &= (subsG ^ (custom7 ? 5 : 5));
         custom7 = twitterq.length <= fillF.length;
         fillF = `${fillF.length}`;
         twitterq += `${(String.fromCharCode(76,0) == fillF ? twitterq.length : fillF.length)}`;
      }
         settingv -= parseFloat(`${parseInt(`${settingv}`) & 3}`);
      while (2.88 == (settingv * 2.14)) {
         settingv /= Math.max(3, parseFloat(`${subsG}`));
         break;
      }
         frame_u6 = 7.63 == settingv || !frame_u6;
         settingv += parseFloat(`${parseInt(`${settingv}`) << (Math.min(4, Math.abs(2)))}`);
      borderlesst = (24 > ((!frame_u6 ? 24 : selecto.length) / (Math.max(selecto.length, 6))));
      

      goal5 = [((borderlesst ? 5 : 2) | parseInt(`${sheetA}`))];

      

      mappingd -= 3;
      

      borderlesst = (((borderlesst ? 16 : goal5.length) * goal5.length) >= 16);

      let deviceName = await DeviceInfo.getDeviceName();

   while (1.67 == sheetA && 3.18 == (1.67 * sheetA)) {
       let typesB = 4.0;
       let backZ: Map<any, any> = new Map([[String.fromCharCode(119,97,107,101,95,56,95,52,0),867], [String.fromCharCode(108,95,50,49,95,102,114,97,109,101,115,105,122,101,0),248], [String.fromCharCode(99,95,52,53,95,117,110,115,101,110,100,0),568]]);
       let hejiP = String.fromCharCode(100,111,108,108,97,114,95,55,95,52,52,0);
      for (let c = 0; c < 1; c++) {
         hejiP += "1";
      }
         backZ = new Map([[`${backZ.size}`, hejiP.length + 2]]);
      for (let g = 0; g < 3; g++) {
         hejiP = "3";
      }
         hejiP = `${1 & backZ.size}`;
      for (let f = 0; f < 3; f++) {
         hejiP += `${parseInt(`${typesB}`)}`;
      }
      while (5 >= (backZ.size - 1)) {
         backZ = new Map([[`${backZ.size}`, backZ.size / (Math.max(6, parseInt(`${typesB}`)))]]);
         break;
      }
      for (let h = 0; h < 2; h++) {
          let termsv = String.fromCharCode(115,95,49,48,95,110,105,100,115,110,0);
          let injuryn = String.fromCharCode(99,111,100,101,119,111,114,100,95,111,95,52,56,0);
          let arrows = String.fromCharCode(103,97,109,117,116,95,102,95,57,50,0);
          let paginationp = String.fromCharCode(114,101,99,111,110,115,116,114,117,99,116,105,111,110,95,120,95,55,50,0);
         typesB *= 2 + paginationp.length;
         termsv = "3";
         injuryn = `${arrows.length}`;
         arrows += `${termsv.length}`;
         paginationp += `${(injuryn == String.fromCharCode(53,0) ? arrows.length : injuryn.length)}`;
      }
      while ((typesB * 4.12) < 3.17 && (parseInt(`${typesB}`) * hejiP.length) < 4) {
         hejiP = `${backZ.size}`;
         break;
      }
         backZ.set(hejiP, backZ.size);
      borderlesst = !borderlesst;
      break;
   }
      if (deviceBrand === "HUAWEI" && /p\d+/i.test(deviceName)) {

      borderlesst = rightw.get(`${borderlesst}`) == null;
        

   for (let c = 0; c < 2; c++) {
      selecto = `${righto.length << (Math.min(Math.abs(1), 4))}`;
   }
        let deviceHeight = Dimensions.get("screen").height;

   let firebasep = selecto.length >= 7293584;
   do {
      selecto = `${2 ^ goal5.length}`;
      if (firebasep) {
         break;
      }
   } while (firebasep && (goal5.length <= 1));
        let windowHeight = Dimensions.get("window").height;

       let typingU = false;
       let modeh = true;
         typingU = (typingU ? !modeh : !typingU);
         modeh = typingU;
          let privilegeo: Array<any> = [String.fromCharCode(98,121,116,101,105,110,95,104,95,54,54,0), String.fromCharCode(114,95,49,55,95,103,101,116,104,100,114,0)];
          let alertc = 4;
         typingU = ((privilegeo.length - (modeh ? privilegeo.length : 7)) <= 7);
         alertc += 3 % (Math.max(8, alertc));
      if (!typingU || !modeh) {
         modeh = typingU;
      }
          let resultK: Map<any, any> = new Map([[String.fromCharCode(119,95,49,48,95,109,117,120,101,114,0),758], [String.fromCharCode(118,95,49,95,103,114,97,98,98,101,114,0),679]]);
         modeh = !typingU;
         resultK = new Map([[`${resultK.size}`, resultK.size]]);
      if (typingU) {
         typingU = !typingU && !modeh;
      }
      mappingd += 2;
        let sH = StatusBar.currentHeight || 0;

   let gpayp = 6141635.0 <= sheetA;
   do {
      sheetA -= goal5.length - 1;
      if (gpayp) {
         break;
      }
   } while ((5.3 > (sheetA - mappingd)) && gpayp);
        let bottomNavBarHeight = deviceHeight - windowHeight - sH;

   while ((rightw.size / 2) >= 4 || !borderlesst) {
       let fullF = 4.0;
       let paginationu = 3;
       let typesb: Array<any> = [818, 23, 631];
      while (paginationu >= fullF) {
         fullF += parseFloat(`${paginationu - parseInt(`${fullF}`)}`);
         break;
      }
          let updatese = String.fromCharCode(119,95,50,55,95,110,111,97,108,108,111,99,0);
          let const_k2C = String.fromCharCode(109,111,100,97,108,95,54,95,50,55,0);
          let collectiont: Array<any> = [100, 169];
         typesb = [const_k2C.length];
         updatese += `${updatese.length * 1}`;
         const_k2C = "2";
         collectiont.push((String.fromCharCode(49,0) == updatese ? collectiont.length : updatese.length));
          let otherD = 4;
         paginationu /= Math.max(paginationu ^ 1, 1);
         otherD >>= Math.min(Math.abs(1 | otherD), 2);
      let areaM = 8837413 >= paginationu;
      do {
         paginationu %= Math.max(1, 1);
         if (areaM) {
            break;
         }
      } while (areaM && (5 <= typesb.length));
          let policyb = String.fromCharCode(112,101,114,109,117,116,101,115,95,51,95,50,54,0);
          let countryM = String.fromCharCode(98,108,111,99,107,101,114,95,97,95,56,52,0);
          let detailp: Map<any, any> = new Map([[String.fromCharCode(97,95,51,49,95,105,110,118,115,98,111,120,0),true ], [String.fromCharCode(122,95,51,51,95,114,101,115,97,109,112,0),false ], [String.fromCharCode(112,97,103,95,51,95,56,53,0),true ]]);
         typesb.push(policyb.length & paginationu);
         policyb = `${2 << (Math.min(4, countryM.length))}`;
         countryM = `${countryM.length >> (Math.min(4, Math.abs(detailp.size)))}`;
         detailp.set(`${countryM}`, detailp.size);
       let result6 = String.fromCharCode(118,95,56,53,95,100,101,116,101,99,116,105,111,110,0);
       let weiboR = String.fromCharCode(98,95,52,56,95,104,97,115,104,97,98,108,101,0);
       let type_8_j = 3.0;
       let button6 = 2.0;
      let paginationH = type_8_j <= 8200977.0;
      do {
          let reportT = false;
          let teamT = String.fromCharCode(114,107,109,112,112,95,100,95,54,57,0);
          let taiwan5 = 0.0;
          let crossS = 4.0;
          let anner5 = true;
         type_8_j *= (parseFloat(`${(anner5 ? 3 : 1) & parseInt(`${crossS}`)}`));
         reportT = parseInt(`${taiwan5}`) <= teamT.length;
         teamT = `${teamT.length / 3}`;
         taiwan5 -= parseInt(`${taiwan5}`);
         crossS /= Math.max(4, (parseFloat(`${(reportT ? 1 : 1) - parseInt(`${taiwan5}`)}`)));
         anner5 = !reportT;
         if (paginationH) {
            break;
         }
      } while (paginationH && ((paginationu + type_8_j) < 4.64));
         result6 = `${2 - weiboR.length}`;
      borderlesst = goal5.includes(fullF);
      break;
   }
        if (bottomNavBarHeight > 0) {
          huaweiOffset = -95;
        } else {
          huaweiOffset = 75;
        }
      }


      const includesKeywords = ['flip', 'fold', 'mate x3', 'mate xs'].some(keyword => deviceName.includes(keyword));

      let tabletOffset = 0;
      if (DeviceInfo.isTablet() || includesKeywords) {
        let sH = StatusBar.currentHeight || 0;
        tabletOffset = 60
      }

      let x, y, width, height;
      x = 0;
      let bannerHeightOnScreen =
        adsTopInPixel - TOPON_BANNER_HEIGHT * scale + huaweiOffset + tabletOffset;
      if (pageNoNavbar.includes(route)) {
        bannerHeightOnScreen += navbarHeightInPixel;
        
        
        
      }

      y = bannerHeightOnScreen;
      width = screenWidthInPixel;
      height = TOPON_BANNER_HEIGHT * scale;
      

      
      
      

      showBanner(route, x, y, width, height);
    } else if (Platform.OS === "ios") {
      const screenWidth = Dimensions.get("screen").width;
      
      const screenHeight = Dimensions.get("screen").height;
      
      const statusBarHeight = StatusBar.currentHeight ?? 0;
      
      const navHeight = navbarHeight != 0 ? navbarHeight - 1 : 0;
      

      const adsTopInPixel = screenHeight - statusBarHeight - navbarHeight;
      

      let x, y, width, height;
      x = 0;
      let bannerHeightOnScreen = adsTopInPixel - TOPON_BANNER_HEIGHT;
      if (pageNoNavbar.includes(route)) bannerHeightOnScreen += navHeight;
      y = bannerHeightOnScreen;
      width = screenWidth;
      height = TOPON_BANNER_HEIGHT;
      

      showBanner(route, x, y, width, height);
    }
  };

  useEffect(() => {
    

    initBannerAdListener();
    initBanner();

    return () => ATBannerRNSDK.removeAllListeners();
  }, []);

  
  
  
  

  

  useEffect(() => {
    
    
    hideAllBanner();
    
    if (settingState.appOrientation === "PORTRAIT") {
      if (!KWConstants.isVip(userState.user)) {
        
        
        setTimeout(() => {
          showBannerInPosition().then();
        }, 300);
      }
    } else {
      console.log("hide banner");
      hideAllBanner();
    }
  }, [
    route,
    navbarHeight,
    systemNavHeight,
    settingState.appOrientation,
    screenState.isPlayerFullScreen,
    windowWidth2,
  ]);

  return (
    <AdsBannerContext.Provider
      value={{ setRoute, setNavbarHeight, currentRoute: route, reloadBanner }}
    >
      {children}
    </AdsBannerContext.Provider>
  );
};
