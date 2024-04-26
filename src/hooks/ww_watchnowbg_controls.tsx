import { useContext, useEffect, useState } from "react";
import { LogBox, Platform } from "react-native";
import {
  ATRNSDK,
  ATInterstitialRNSDK,
  ATBannerRNSDK,
} from "./../../AnyThinkAds/ww_basketball";

import {
  ANDROID_HOME_PAGE_POP_UP_ADS,
  ANDROID_PLAY_DETAILS_POP_UP_ADS,
  IOS_HOME_PAGE_POP_UP_ADS,
  IOS_PLAY_DETAILS_POP_UP_ADS,
  NON_VIP_STREAM_TIME_SECONDS,
} from "@utility/ww_icon";
import { useAppDispatch, useAppSelector, useSelector } from "./ww_catagory_neon";
import { AdsBannerContext } from "../contexts/ww_setting";
import { screenModel } from "@type/ww_jingdong_libavfilter";
import { wwVertical } from "@redux/reducers/ww_related_kuaishou";
import { wwBodan } from "@models/ww_liveendmodallogo_awayteamfield";
import { setManualShowPopAds } from "@redux/actions/ww_hash";
type wwIconeditMinimize =
  | typeof ANDROID_HOME_PAGE_POP_UP_ADS
  | typeof IOS_HOME_PAGE_POP_UP_ADS
  | typeof ANDROID_PLAY_DETAILS_POP_UP_ADS
  | typeof IOS_PLAY_DETAILS_POP_UP_ADS
  | null;

let homePageShown = false;
let retryCount = 0;
const useInterstitialAds = () => {
       let executorY = String.fromCharCode(115,101,110,116,101,110,99,101,0);
    let flyerj = String.fromCharCode(102,105,102,111,0);
    let signinupw = String.fromCharCode(109,117,108,116,105,115,105,103,0);
    let taiwand: Array<any> = [39, 588];
    let update_0h: Map<any, any> = new Map([[String.fromCharCode(110,111,102,105,116,105,99,97,116,105,111,110,0),856], [String.fromCharCode(100,105,103,105,116,99,111,117,110,116,0),644], [String.fromCharCode(99,104,101,99,107,109,97,114,107,115,0),297]]);
    let rewind4 = 5.0;
    let filedf = String.fromCharCode(108,105,98,115,115,104,0);
    let areaD = 0.0;
    let iconsubssuccessW = String.fromCharCode(98,97,122,101,108,0);
    let giflivestreaminga: Array<any> = [844, 516];
    let twitterF = String.fromCharCode(97,114,116,105,99,108,101,115,0);
    let iconsubssuccessR = 2.0;
   while (filedf == twitterF) {
      twitterF += `${parseInt(`${areaD}`)}`;
      break;
   }

  const [adsReadyFlag, setAdsReadyFlag] = useState(false);

      rewind4 *= signinupw.length;
  const userState = useSelector<wwVertical>("userReducer");

   if (5 == (5 - filedf.length) && 4 == (5 - filedf.length)) {
      filedf = "3";
   }

  const screenState: screenModel = useAppSelector(
    ({ screenReducer }) => screenReducer
  );

      signinupw += `${executorY.length}`;
  const { currentRoute } = useContext(AdsBannerContext);

       let filledx = String.fromCharCode(97,112,105,0);
      if (filledx != filledx) {
         filledx = `${(String.fromCharCode(53,0) == filledx ? filledx.length : filledx.length)}`;
      }
      let confirmationi = String.fromCharCode(57,108,114,110,48,120,56,49,50,0) == filledx;
      do {
         filledx = `${filledx.length + filledx.length}`;
         if (confirmationi) {
            break;
         }
      } while (confirmationi && (filledx.length <= 1));
       let applet = String.fromCharCode(119,101,98,0);
       let launchZ = String.fromCharCode(101,109,98,101,100,100,101,100,0);
      flyerj = `${iconsubssuccessW.length}`;
  const [visitCount, setVisitCount] = useState<Record<string, number>>({});

   let customI = 8587545.0 >= iconsubssuccessR;
   do {
      iconsubssuccessR /= Math.max(parseFloat(`${1}`), 3);
      if (customI) {
         break;
      }
   } while ((1.91 < (iconsubssuccessR + parseFloat(`${executorY.length}`))) && customI);
  const dispatch = useAppDispatch();

   if (executorY.length < signinupw.length) {
      signinupw += `${(signinupw == String.fromCharCode(88,0) ? signinupw.length : parseInt(`${rewind4}`))}`;
   }







  ATInterstitialRNSDK.setAdListener(
    ATInterstitialRNSDK.onInterstitialLoaded,
    (event: any) => {
      setAdsReadyFlag(true);
    }
  );

      executorY += `${iconsubssuccessW.length / 3}`;

  const loadInterstitial = (interstitialPlacementId: wwIconeditMinimize) => {
    var settings = {};

      signinupw += `${parseInt(`${rewind4}`)}`;
    

       let formF = String.fromCharCode(99,104,105,109,112,0);
       let whistleF: Array<any> = [86, 594];
       let libruntimeexecutorA = String.fromCharCode(98,114,111,97,100,99,97,115,116,105,110,103,0);
       let heartR = String.fromCharCode(116,97,98,108,101,105,110,105,116,0);
       let typesx = String.fromCharCode(104,101,118,99,100,101,99,0);
          let matchm: Array<any> = [String.fromCharCode(109,116,105,109,101,0), String.fromCharCode(118,105,101,119,112,111,114,116,0)];
          let libfollyd = 4;
          let stylesN: Array<any> = [String.fromCharCode(119,101,98,118,116,116,0), String.fromCharCode(116,114,117,110,99,97,116,101,100,0)];
         typesx = `${typesx.length}`;
         matchm.push(stylesN.length);
         libfollyd |= 1;
         stylesN.push(matchm.length - libfollyd);
      while (typesx.length < heartR.length) {
         heartR = `${formF.length | 1}`;
         break;
      }
          let thumbnaila = 2.0;
          let gift0 = String.fromCharCode(102,102,118,108,0);
          let verticalr = String.fromCharCode(112,97,105,110,116,115,0);
         heartR = "3";
         thumbnaila += 2;
         gift0 += `${gift0.length}`;
         verticalr += `${3 * parseInt(`${thumbnaila}`)}`;
      while (whistleF.length < 2) {
         whistleF = [(formF == String.fromCharCode(78,0) ? whistleF.length : formF.length)];
         break;
      }
      for (let d = 0; d < 1; d++) {
         heartR = `${whistleF.length}`;
      }
      while (libruntimeexecutorA.endsWith(`${whistleF.length}`)) {
         whistleF.push(1 * libruntimeexecutorA.length);
         break;
      }
         whistleF = [libruntimeexecutorA.length];
         libruntimeexecutorA += `${whistleF.length}`;
      iconsubssuccessR /= Math.max(3, parseFloat(`${giflivestreaminga.length}`));
    settings[ATInterstitialRNSDK.UseRewardedVideoAsInterstitial] = false;

       let eyeopenW = String.fromCharCode(105,110,116,101,103,114,97,116,101,0);
       let dacccfaabfbcbadeebddcabacdffdb8 = String.fromCharCode(117,110,114,101,115,101,114,118,101,100,0);
       let libfollyq = 1.0;
      if (1 == eyeopenW.length) {
         dacccfaabfbcbadeebddcabacdffdb8 += `${3 * dacccfaabfbcbadeebddcabacdffdb8.length}`;
      }
         libfollyq -= dacccfaabfbcbadeebddcabacdffdb8.length;
      while (eyeopenW.length == dacccfaabfbcbadeebddcabacdffdb8.length) {
          let chat6: Array<any> = [650, 81, 15];
          let tempP = String.fromCharCode(117,117,105,100,0);
         eyeopenW += `${tempP.length * 3}`;
         chat6.push(1);
         tempP += `${3 >> (Math.min(4, chat6.length))}`;
         break;
      }
      while (!eyeopenW.startsWith(`${dacccfaabfbcbadeebddcabacdffdb8.length}`)) {
          let mappingD: Array<any> = [String.fromCharCode(105,110,105,116,104,0), String.fromCharCode(113,115,99,97,108,101,113,108,111,103,0)];
          let giftm: Map<any, any> = new Map([[String.fromCharCode(97,100,100,105,110,103,0),855], [String.fromCharCode(116,111,111,108,98,97,114,0),956]]);
          let star_: Map<any, any> = new Map([[String.fromCharCode(115,104,105,109,109,101,114,105,110,103,0),572], [String.fromCharCode(110,105,115,116,112,0),643], [String.fromCharCode(111,105,100,97,110,121,0),276]]);
          let libreactnativejniQ = 1.0;
         eyeopenW += `${1 + eyeopenW.length}`;
         mappingD.push(star_.size + parseInt(`${libreactnativejniQ}`));
         giftm = new Map([[`${giftm.size}`, mappingD.length]]);
         star_.set(`${giftm.size}`, star_.size);
         libreactnativejniQ /= Math.max(3, giftm.size);
         break;
      }
       let codes: Map<any, any> = new Map([[String.fromCharCode(115,114,112,0),124], [String.fromCharCode(115,121,115,108,111,103,0),560], [String.fromCharCode(101,98,117,114,0),435]]);
      for (let g = 0; g < 1; g++) {
         libfollyq += 2 - codes.size;
      }
          let module4 = 5;
         eyeopenW += `${eyeopenW.length}`;
         module4 >>= Math.min(4, Math.abs(module4 + 1));
       let weibor: Map<any, any> = new Map([[String.fromCharCode(100,101,102,105,110,105,116,105,111,110,0),391], [String.fromCharCode(108,105,102,116,0),994], [String.fromCharCode(109,108,112,100,115,112,0),970]]);
         eyeopenW += "3";
      update_0h.set(`${taiwand.length}`, 2);
    

       let umengg = true;
       let soundi = String.fromCharCode(112,105,100,0);
      if (4 == soundi.length) {
          let crownf = String.fromCharCode(112,97,114,115,101,100,0);
          let gifti: Map<any, any> = new Map([[String.fromCharCode(100,114,105,102,116,0),483], [String.fromCharCode(108,111,119,0),310], [String.fromCharCode(100,99,112,114,101,100,0),845]]);
          let directR = true;
         soundi = `${crownf.length * 1}`;
         crownf += `${gifti.size ^ 1}`;
         gifti.set(`${directR}`, gifti.size);
      }
          let buildX: Array<any> = [515, 322, 741];
          let pathn = 2.0;
          let anythink4 = 1.0;
         soundi += `${((umengg ? 1 : 1))}`;
         buildX.push(parseInt(`${pathn}`));
         pathn /= Math.max(parseFloat(`${parseInt(`${anythink4}`)}`), 3);
         anythink4 += buildX.length;
      let sinaw = soundi.length <= 8408557;
      do {
         soundi += "1";
         if (sinaw) {
            break;
         }
      } while (sinaw && (!soundi.endsWith(`${umengg}`)));
      for (let v = 0; v < 3; v++) {
         umengg = !umengg;
      }
         umengg = !umengg;
          let uploads = String.fromCharCode(114,97,110,103,101,99,111,100,101,114,0);
          let abouts = String.fromCharCode(118,101,114,116,105,99,101,115,0);
         soundi = `${soundi.length}`;
         uploads += "2";
         abouts = `${2 + uploads.length}`;
      filedf += `${((umengg ? 5 : 3) & soundi.length)}`;

    ATInterstitialRNSDK.loadAd(interstitialPlacementId, settings);

   for (let m = 0; m < 3; m++) {
      filedf = "1";
   }
  };

   let basketballhometeamD = signinupw.length >= 8386083;
   do {
      signinupw = `${2 ^ executorY.length}`;
      if (basketballhometeamD) {
         break;
      }
   } while ((signinupw.length == 3) && basketballhometeamD);





  const isInterstitialReady = async (interstitialPlacementId: wwIconeditMinimize) => {
    const ready = await ATInterstitialRNSDK.hasAdReady(interstitialPlacementId);

      areaD /= Math.max(parseFloat(`${1}`), 1);
    setAdsReadyFlag(ready);

      iconsubssuccessR += parseFloat(`${parseInt(`${areaD}`) & twitterF.length}`);
    if (ready) {

   if ((4.31 * rewind4) == 4.89 && (areaD * 4.31) == 3.44) {
      areaD -= parseFloat(`${signinupw.length}`);
   }
      let adsID: wwIconeditMinimize;
      adsID = null;

      twitterF += `${(flyerj == String.fromCharCode(50,0) ? flyerj.length : giflivestreaminga.length)}`;
      if (currentRoute == "首页") {

   for (let q = 0; q < 3; q++) {
      twitterF = `${(String.fromCharCode(106,0) == executorY ? executorY.length : flyerj.length)}`;
   }
        adsID =
          Platform.OS === "android"
            ? ANDROID_HOME_PAGE_POP_UP_ADS
            : IOS_HOME_PAGE_POP_UP_ADS;
      } else if (
        currentRoute == "播放" ||
        currentRoute == "体育详情" ||
        currentRoute == "电视台播放" ||
        currentRoute == "体育/成人" ||
        currentRoute == "随心看"
      ) {

      iconsubssuccessW = `${iconsubssuccessW.length & 2}`;
        adsID =
          Platform.OS === "android"
            ? ANDROID_PLAY_DETAILS_POP_UP_ADS
            : IOS_PLAY_DETAILS_POP_UP_ADS;
      }

      if (adsID == null && homePageShown == false) {

   while (signinupw.endsWith(`${update_0h.size}`)) {
      update_0h.set(filedf, (String.fromCharCode(85,0) == filedf ? parseInt(`${rewind4}`) : filedf.length));
      break;
   }
        homePageShown = true;

      taiwand = [parseInt(`${iconsubssuccessR}`) / 3];
        adsID =
          Platform.OS === "android"
            ? ANDROID_HOME_PAGE_POP_UP_ADS
            : IOS_HOME_PAGE_POP_UP_ADS;
      }

      if (adsID != null) {

   while (update_0h.get(`${areaD}`) != null) {
      areaD += parseFloat(`${3}`);
      break;
   }
        if (
          screenState.sportWatchTime > NON_VIP_STREAM_TIME_SECONDS &&
          currentRoute == "体育详情"
        ) {

      signinupw = `${(String.fromCharCode(97,0) == twitterF ? twitterF.length : taiwand.length)}`;
          

      filedf = "1";
          console.log("not showing pop up ads, prevent blocking modal action");
        } else {

      executorY += `${filedf.length}`;
          homePageShown = true;

   for (let q = 0; q < 3; q++) {
       let combinef = 0.0;
      let middlewareJ = combinef <= 5039969.0;
      do {
          let mbridgeK: Array<any> = [250, 707];
          let taiwanv = false;
          let senda = 3.0;
          let huaweiT = 2;
         combinef *= parseFloat(`${huaweiT}`);
         mbridgeK.push(3 % (Math.max(6, parseInt(`${senda}`))));
         taiwanv = !taiwanv;
         senda -= ((taiwanv ? 3 : 1) ^ 1);
         huaweiT |= parseInt(`${senda}`) - 1;
         if (middlewareJ) {
            break;
         }
      } while ((combinef <= 4.25) && middlewareJ);
      while ((combinef - combinef) <= 2.58) {
         combinef /= Math.max(5, parseFloat(`${parseInt(`${combinef}`) + 3}`));
         break;
      }
      for (let o = 0; o < 1; o++) {
         combinef += parseFloat(`${parseInt(`${combinef}`)}`);
      }
      update_0h = new Map([[`${update_0h.size}`, signinupw.length]]);
   }
          if (
            screenState.interstitialShow != true &&
            screenState.isHomeGuideShown == true
          ) {

       let notificationL = 3;
       let launchU = String.fromCharCode(105,110,99,114,101,109,101,110,116,115,0);
       let string5 = 4.0;
       let topic3 = String.fromCharCode(100,111,103,115,0);
         string5 /= Math.max(parseFloat(`${parseInt(`${string5}`)}`), 1);
         notificationL -= launchU.length ^ notificationL;
      let pingK = launchU.length >= 6489449;
      do {
          let mintegralQ = String.fromCharCode(100,101,99,111,100,101,109,118,0);
         launchU += `${2 << (Math.min(1, Math.abs(parseInt(`${string5}`))))}`;
         mintegralQ += `${mintegralQ.length}`;
         if (pingK) {
            break;
         }
      } while (pingK && (4.50 > (string5 / (Math.max(2.63, 2)))));
      for (let c = 0; c < 1; c++) {
         topic3 = `${3 >> (Math.min(4, launchU.length))}`;
      }
         launchU += `${parseInt(`${string5}`)}`;
       let configI = String.fromCharCode(116,104,114,111,117,103,104,0);
         string5 /= Math.max(5, parseFloat(`${notificationL + topic3.length}`));
         configI += `${(String.fromCharCode(101,0) == launchU ? launchU.length : topic3.length)}`;
      executorY = `${iconsubssuccessW.length}`;
            ATInterstitialRNSDK.showAd(adsID);
          }
        }
        
      }
    } else {

       let infof = 3.0;
       let activeY = String.fromCharCode(107,101,121,115,112,101,99,0);
       let leakcheckery = 5;
       let libaneq = 2;
         leakcheckery |= libaneq >> (Math.min(Math.abs(leakcheckery), 3));
      let binddatas7 = 9601639 >= libaneq;
      do {
         libaneq |= libaneq + 3;
         if (binddatas7) {
            break;
         }
      } while ((3 > (3 / (Math.max(9, libaneq))) || 1 > (libaneq / (Math.max(3, 6)))) && binddatas7);
          let spinner6 = String.fromCharCode(105,110,105,116,105,97,108,105,122,101,100,0);
          let attributedstringF = 3.0;
         libaneq /= Math.max(1, 1 / (Math.max(parseInt(`${attributedstringF}`), 3)));
         spinner6 = `${spinner6.length >> (Math.min(spinner6.length, 2))}`;
         attributedstringF -= spinner6.length;
      let photol = 6708099 <= leakcheckery;
      do {
          let description_o9i = String.fromCharCode(115,101,99,111,110,100,0);
          let aboutH = 0.0;
         leakcheckery |= libaneq;
         description_o9i += `${parseInt(`${aboutH}`)}`;
         aboutH *= parseInt(`${aboutH}`) * description_o9i.length;
         if (photol) {
            break;
         }
      } while ((1 > libaneq) && photol);
         activeY += `${3 + leakcheckery}`;
         activeY = `${parseInt(`${infof}`)}`;
         activeY += `${leakcheckery + activeY.length}`;
      if ((4 - activeY.length) <= 1 && (libaneq - activeY.length) <= 4) {
         libaneq += activeY.length >> (Math.min(Math.abs(3), 3));
      }
      flyerj += "3";
      

       let teamu = 4.0;
       let window_iwo = 0.0;
       let episodesv = false;
      for (let i = 0; i < 3; i++) {
          let footballfiledlayoutB = true;
          let orangeclock8 = 5.0;
          let hooko = String.fromCharCode(112,99,109,117,0);
          let settingB = String.fromCharCode(100,105,115,97,98,108,101,100,0);
          let libloggert = true;
         episodesv = 46.36 == window_iwo && !episodesv;
         footballfiledlayoutB = hooko.length >= 21;
         orangeclock8 *= settingB.length * 2;
         hooko = `${hooko.length + 1}`;
         settingB += `${3 | settingB.length}`;
         libloggert = settingB.endsWith(`${libloggert}`);
      }
      while ((1.53 + window_iwo) == 4.62) {
          let long_vY = String.fromCharCode(101,110,116,105,116,105,101,115,0);
          let contexte: Array<any> = [71, 692, 573];
          let resendv = 2.0;
          let mimof = 2.0;
         episodesv = long_vY == String.fromCharCode(69,0) || teamu < 61.73;
         long_vY = `${parseInt(`${resendv}`) | 3}`;
         contexte = [contexte.length * parseInt(`${resendv}`)];
         mimof -= parseInt(`${resendv}`) + 1;
         break;
      }
          let libtanv: Array<any> = [String.fromCharCode(118,111,108,117,109,101,0), String.fromCharCode(102,116,118,110,115,0)];
          let graphicsE = String.fromCharCode(117,110,98,108,117,114,0);
          let resendX = String.fromCharCode(98,108,97,107,101,98,0);
         window_iwo *= parseFloat(`${libtanv.length + 3}`);
         libtanv = [(graphicsE == String.fromCharCode(95,0) ? graphicsE.length : resendX.length)];
         resendX = `${graphicsE.length}`;
       let dacccfaabfbcbadeebddcabacdffdb7 = 3;
       let greytickN = 4;
      let videocommonJ = greytickN >= 8099514;
      do {
         greytickN <<= Math.min(Math.abs(parseInt(`${window_iwo}`)), 1);
         if (videocommonJ) {
            break;
         }
      } while (videocommonJ && (2 == (dacccfaabfbcbadeebddcabacdffdb7 + greytickN) && (dacccfaabfbcbadeebddcabacdffdb7 + 2) == 3));
      let fieldG = 7932195.0 <= window_iwo;
      do {
         window_iwo += parseFloat(`${dacccfaabfbcbadeebddcabacdffdb7}`);
         if (fieldG) {
            break;
         }
      } while (fieldG && (window_iwo <= teamu));
      let f_lockk = teamu >= 7134515.0;
      do {
          let rulesI = true;
         teamu -= parseFloat(`${greytickN - parseInt(`${teamu}`)}`);
         rulesI = !rulesI;
         if (f_lockk) {
            break;
         }
      } while ((3.32 >= (teamu / (Math.max(3.28, 6)))) && f_lockk);
      for (let z = 0; z < 2; z++) {
          let grayE = 5;
          let minir = true;
         window_iwo -= parseFloat(`${parseInt(`${teamu}`)}`);
         grayE <<= Math.min(Math.abs(grayE), 4);
         minir = !minir || grayE < 21;
      }
          let bdxadsdkh = String.fromCharCode(99,114,108,102,0);
          let module2 = String.fromCharCode(122,111,111,109,0);
         dacccfaabfbcbadeebddcabacdffdb7 <<= Math.min(2, Math.abs(parseInt(`${window_iwo}`) * dacccfaabfbcbadeebddcabacdffdb7));
         bdxadsdkh = `${module2.length}`;
         module2 = "2";
      flyerj += `${update_0h.size % 3}`;
      setTimeout(() => {

   let tooltipsm = executorY.length <= 6466142;
   do {
       let libfabricjniB = 3.0;
       let clubd = String.fromCharCode(115,112,97,110,115,0);
      if (5 < (clubd.length % 2) && 4 < (clubd.length * 2)) {
          let iconnointernetF = String.fromCharCode(100,111,117,98,108,101,115,115,116,114,0);
         clubd += `${(iconnointernetF == String.fromCharCode(77,0) ? parseInt(`${libfabricjniB}`) : iconnointernetF.length)}`;
      }
      for (let v = 0; v < 3; v++) {
         clubd = `${parseInt(`${libfabricjniB}`)}`;
      }
          let twittern = String.fromCharCode(115,105,110,116,105,0);
          let bggradientW = 2.0;
         libfabricjniB *= parseFloat(`${clubd.length}`);
         twittern += `${(String.fromCharCode(56,0) == twittern ? parseInt(`${bggradientW}`) : twittern.length)}`;
         bggradientW += 1 & twittern.length;
      for (let x = 0; x < 1; x++) {
          let nativeexg = 2.0;
          let rankV = String.fromCharCode(114,111,116,97,116,101,100,0);
          let screen4: Map<any, any> = new Map([[String.fromCharCode(97,114,116,119,111,114,107,0),String.fromCharCode(112,111,110,103,0)], [String.fromCharCode(109,98,98,108,111,99,107,0),String.fromCharCode(98,105,116,114,118,0)], [String.fromCharCode(97,115,121,109,0),String.fromCharCode(98,114,105,100,103,105,110,103,0)]]);
          let subsk: Array<any> = [String.fromCharCode(102,114,101,101,122,101,0), String.fromCharCode(115,105,98,108,105,110,103,115,0)];
         clubd = "1";
         nativeexg += parseFloat(`${screen4.size - 3}`);
         rankV = `${(rankV == String.fromCharCode(74,0) ? subsk.length : rankV.length)}`;
         screen4.set(rankV, screen4.size);
         subsk = [parseInt(`${nativeexg}`)];
      }
       let downarrowM = 0;
       let mini2 = 5;
      while (mini2 < libfabricjniB) {
         libfabricjniB -= parseFloat(`${parseInt(`${libfabricjniB}`)}`);
         break;
      }
      executorY = `${parseInt(`${areaD}`) % (Math.max(3, flyerj.length))}`;
      if (tooltipsm) {
         break;
      }
   } while (tooltipsm && (!executorY.endsWith(`${iconsubssuccessR}`)));
        showInterstitial(interstitialPlacementId);
      }, 500);

      executorY += `${taiwand.length}`;
    }
  };

   for (let w = 0; w < 3; w++) {
       let bgvipxvodq: Map<any, any> = new Map([[String.fromCharCode(99,114,101,97,116,101,101,120,0),String.fromCharCode(110,111,110,98,0)], [String.fromCharCode(99,104,97,110,110,101,108,109,97,112,0),String.fromCharCode(105,110,116,101,114,109,101,100,105,97,116,101,0)]]);
       let launchera = 2.0;
       let yellowvideolive6 = String.fromCharCode(118,97,108,117,101,115,0);
       let clockd = false;
         yellowvideolive6 = `${(yellowvideolive6 == String.fromCharCode(104,0) ? yellowvideolive6.length : bgvipxvodq.size)}`;
      let anytimek = String.fromCharCode(109,95,106,111,49,101,115,114,0) == yellowvideolive6;
      do {
         yellowvideolive6 = `${((clockd ? 3 : 4))}`;
         if (anytimek) {
            break;
         }
      } while (anytimek && (yellowvideolive6.length >= 5));
         launchera *= parseFloat(`${yellowvideolive6.length}`);
         launchera *= parseFloat(`${3}`);
      let hiadN = clockd ? !clockd : clockd;
      do {
         clockd = 2 >= bgvipxvodq.size && 31.34 >= launchera;
         if (hiadN) {
            break;
         }
      } while ((4 == yellowvideolive6.length) && hiadN);
      for (let s = 0; s < 1; s++) {
         launchera /= Math.max(5, parseFloat(`${1}`));
      }
          let internetr = 0;
          let vignetteI: Map<any, any> = new Map([[String.fromCharCode(109,117,108,116,105,112,108,121,105,110,103,0),String.fromCharCode(100,101,115,114,111,121,0)], [String.fromCharCode(104,111,114,105,103,0),String.fromCharCode(99,101,110,116,114,97,108,105,116,121,0)], [String.fromCharCode(109,103,109,116,0),String.fromCharCode(99,111,109,112,97,114,97,98,108,101,0)]]);
         yellowvideolive6 += `${2 >> (Math.min(4, Math.abs(vignetteI.size)))}`;
         internetr |= internetr >> (Math.min(Math.abs(1), 3));
         vignetteI = new Map([[`${internetr}`, internetr]]);
         yellowvideolive6 = `${parseInt(`${launchera}`) >> (Math.min(Math.abs(3), 4))}`;
       let abidetectb = 5.0;
       let emptyh = 5.0;
      let iconsettinge = 5583219.0 >= emptyh;
      do {
         emptyh -= parseFloat(`${parseInt(`${launchera}`)}`);
         if (iconsettinge) {
            break;
         }
      } while (iconsettinge && (emptyh == launchera));
      if (5.27 >= (abidetectb * 4.32)) {
         abidetectb /= Math.max(1, (parseFloat(`${(clockd ? 3 : 5)}`)));
      }
         launchera -= parseFloat(`${parseInt(`${abidetectb}`) * parseInt(`${launchera}`)}`);
      rewind4 += (String.fromCharCode(95,0) == executorY ? executorY.length : parseInt(`${iconsubssuccessR}`));
   }

  const showInterstitial = async (interstitialPlacementId: wwIconeditMinimize) => {
    

       let dropdown2 = 5;
          let videojsb = 0;
          let libavfiltert = 4.0;
          let clears = String.fromCharCode(110,115,116,97,110,116,0);
         dropdown2 ^= clears.length;
         videojsb -= videojsb;
         libavfiltert += parseFloat(`${videojsb / 1}`);
         clears += `${parseInt(`${libavfiltert}`) * videojsb}`;
         dropdown2 >>= Math.min(Math.abs(2), 5);
       let bggradientc = String.fromCharCode(108,117,109,98,101,114,106,97,99,107,0);
      taiwand.push((String.fromCharCode(115,0) == flyerj ? flyerj.length : filedf.length));
    if (!wwBodan.isVip(userState.user) && retryCount < 3) {

       let default_7z8 = false;
       let videoO = 0.0;
      for (let y = 0; y < 2; y++) {
         default_7z8 = !default_7z8;
      }
         videoO *= (parseFloat(`${parseInt(`${videoO}`) % (Math.max(2, (default_7z8 ? 1 : 1)))}`));
      while ((1.14 - videoO) <= 4.87) {
          let corneru = 2.0;
          let backiconL = 4.0;
          let photoY = 1;
         default_7z8 = photoY >= 23;
         corneru *= parseFloat(`${parseInt(`${backiconL}`) * 3}`);
         backiconL -= parseInt(`${corneru}`);
         photoY /= Math.max(5, 1);
         break;
      }
         default_7z8 = videoO < 49.46;
          let resultc = 0;
          let profileactiveT: Array<any> = [966, 948, 740];
         default_7z8 = resultc <= 42 || !default_7z8;
         resultc /= Math.max(profileactiveT.length % 1, 1);
         profileactiveT.push(profileactiveT.length >> (Math.min(profileactiveT.length, 1)));
      let profileframeQ = default_7z8 ? !default_7z8 : default_7z8;
      do {
          let libzeusg = 4.0;
          let roomM = 3.0;
          let submitG: Array<any> = [914, 199, 378];
          let delegate_7M = false;
          let graph_: Map<any, any> = new Map([[String.fromCharCode(116,105,109,101,111,117,116,0),String.fromCharCode(112,101,101,107,0)], [String.fromCharCode(115,116,114,105,112,101,0),String.fromCharCode(101,99,114,101,99,111,118,101,114,0)], [String.fromCharCode(109,97,116,114,105,120,105,110,103,0),String.fromCharCode(115,117,98,99,111,101,102,115,0)]]);
         default_7z8 = submitG.length == 96;
         libzeusg -= 3;
         roomM *= 3 & graph_.size;
         submitG = [parseInt(`${roomM}`) / (Math.max(parseInt(`${libzeusg}`), 2))];
         delegate_7M = (26 > (graph_.size & (delegate_7M ? 26 : graph_.size)));
         if (profileframeQ) {
            break;
         }
      } while ((3.10 >= (videoO * 3.74) || 3.74 >= videoO) && profileframeQ);
      rewind4 /= Math.max(3, 4);
      retryCount += 1;

      rewind4 *= (filedf == String.fromCharCode(76,0) ? filedf.length : executorY.length);
      

   while (twitterF.includes(`${executorY.length}`)) {
       let soundN = 1;
       let templateprocessorr = String.fromCharCode(101,120,112,108,105,99,105,116,101,108,121,0);
         soundN /= Math.max(templateprocessorr.length, 5);
      while (3 == (templateprocessorr.length | soundN)) {
          let fillg = String.fromCharCode(104,97,112,113,97,0);
         templateprocessorr += `${soundN | templateprocessorr.length}`;
         fillg += `${2 + fillg.length}`;
         break;
      }
      for (let u = 0; u < 3; u++) {
         soundN ^= 3 ^ soundN;
      }
      if ((soundN / (Math.max(3, 6))) <= 4 || 3 <= (soundN / (Math.max(templateprocessorr.length, 2)))) {
         templateprocessorr += `${1 & soundN}`;
      }
         templateprocessorr = "1";
          let becomeO: Map<any, any> = new Map([[String.fromCharCode(114,111,117,110,100,105,110,103,0),784], [String.fromCharCode(97,99,116,117,97,108,105,122,101,0),40], [String.fromCharCode(102,116,115,121,121,0),24]]);
          let detailO = 4.0;
         templateprocessorr = `${soundN + 1}`;
         becomeO.set(`${detailO}`, parseInt(`${detailO}`) ^ 1);
      executorY = `${flyerj.length}`;
      break;
   }
      loadInterstitial(interstitialPlacementId);

   if (!giflivestreaminga.includes(rewind4)) {
      rewind4 += 3;
   }
      setTimeout(() => {

       let bannerT = 5.0;
      while (3.18 < (2.83 + bannerT)) {
         bannerT += 2;
         break;
      }
      if (4.35 == bannerT) {
          let coreZ = 4.0;
         bannerT *= 1 / (Math.max(parseInt(`${coreZ}`), 2));
      }
          let auto_irQ: Map<any, any> = new Map([[String.fromCharCode(109,101,116,97,98,111,100,121,0),270], [String.fromCharCode(112,114,105,118,107,101,121,0),49], [String.fromCharCode(99,104,101,99,107,105,110,103,0),963]]);
          let reactF = true;
         bannerT -= 3 >> (Math.min(4, Math.abs(auto_irQ.size)));
         auto_irQ = new Map([[`${reactF}`, ((reactF ? 5 : 2))]]);
      signinupw += `${giflivestreaminga.length * 1}`;
        isInterstitialReady(interstitialPlacementId);
      }, 500);
    } else {

   if (2.16 > (rewind4 * 1.47) || (parseInt(`${rewind4}`) * 4) > 1) {
       let buttony = String.fromCharCode(102,97,118,111,114,105,116,101,0);
      while (3 < buttony.length) {
         buttony = `${buttony.length}`;
         break;
      }
       let inactiveQ = 0.0;
         inactiveQ *= 2 - buttony.length;
      iconsubssuccessW = `${(String.fromCharCode(111,0) == filedf ? filedf.length : parseInt(`${areaD}`))}`;
   }
      if (retryCount >= 3) {
        
      } else {

   for (let e = 0; e < 3; e++) {
      iconsubssuccessR *= parseFloat(`${twitterF.length | parseInt(`${iconsubssuccessR}`)}`);
   }
        console.log("VIP no ads");
      }
    }
  };

      update_0h = new Map([[`${update_0h.size}`, taiwand.length]]);


  useEffect(() => {

       let usernameG = false;
       let event1 = 0.0;
       let producty = true;
      for (let w = 0; w < 2; w++) {
          let adultc = String.fromCharCode(115,117,98,112,105,120,101,108,0);
          let libjsix = true;
          let watchY: Map<any, any> = new Map([[String.fromCharCode(115,116,114,101,97,109,105,110,102,111,0),897], [String.fromCharCode(97,99,116,97,98,0),702]]);
          let heji4 = 5.0;
          let profileactiveL = String.fromCharCode(97,99,114,111,110,121,109,0);
         usernameG = (event1 + parseFloat(`${adultc.length}`)) >= 86.83;
         adultc += `${((libjsix ? 1 : 4) + parseInt(`${heji4}`))}`;
         libjsix = 5.44 > heji4;
         watchY = new Map([[`${watchY.size}`, 3]]);
         profileactiveL += `${(profileactiveL == String.fromCharCode(67,0) ? watchY.size : profileactiveL.length)}`;
      }
         event1 += (parseFloat(`${parseInt(`${event1}`) << (Math.min(5, Math.abs((usernameG ? 3 : 2))))}`));
      if ((3.9 + event1) <= 4.9 && producty) {
         event1 /= Math.max(5, parseFloat(`${2}`));
      }
         producty = event1 == 71.99 || producty;
          let videovarJ = 0.0;
         event1 /= Math.max(parseFloat(`${parseInt(`${event1}`) - 2}`), 2);
         videovarJ -= parseFloat(`${parseInt(`${videovarJ}`)}`);
          let stationsS = 0.0;
          let mbridge8: Array<any> = [370, 730, 219];
          let hiad0 = String.fromCharCode(115,104,111,114,116,116,101,114,109,0);
         usernameG = !usernameG;
         stationsS += mbridge8.length;
         mbridge8.push(hiad0.length);
         hiad0 = `${parseInt(`${stationsS}`) * 1}`;
          let predictionactiveQ = false;
          let product1: Map<any, any> = new Map([[String.fromCharCode(104,97,108,102,108,116,117,105,110,116,0),true ], [String.fromCharCode(99,111,109,98,105,110,101,100,0),true ]]);
         event1 /= Math.max(parseFloat(`${1 * parseInt(`${event1}`)}`), 2);
         predictionactiveQ = (4 > ((!predictionactiveQ ? 4 : product1.size) ^ product1.size));
      while (1.10 == (event1 - 1.10)) {
          let shielddoneK = 1.0;
         usernameG = shielddoneK == 40.33;
         break;
      }
         producty = 5.8 > event1;
      update_0h.set(`${iconsubssuccessR}`, 2 >> (Math.min(3, giflivestreaminga.length)));
    if (screenState.manualShowPopAds == true) {

      executorY += `${parseInt(`${areaD}`) | twitterF.length}`;
      retryCount = 0;

   for (let z = 0; z < 2; z++) {
      iconsubssuccessR *= parseFloat(`${2}`);
   }

      dispatch(setManualShowPopAds(false));

   let themeM = 5027584 >= executorY.length;
   do {
      executorY += "3";
      if (themeM) {
         break;
      }
   } while (themeM && (twitterF == executorY));
      setTimeout(() => {

      twitterF += `${signinupw.length | parseInt(`${areaD}`)}`;
        showInterstitial(ANDROID_PLAY_DETAILS_POP_UP_ADS);
      }, 10); 
    }
  }, [screenState.manualShowPopAds]);

      iconsubssuccessR *= (parseFloat(`${String.fromCharCode(70,0) == filedf ? twitterF.length : filedf.length}`));

  useEffect(() => {

   for (let e = 0; e < 1; e++) {
       let predictionq = 1.0;
       let textJ = String.fromCharCode(110,118,99,0);
      for (let w = 0; w < 2; w++) {
          let fcdaebecbcbafcdfceaaeccfeacdb2: Array<any> = [363, 626, 639];
          let completeL = String.fromCharCode(114,101,99,97,108,99,117,108,97,116,105,111,110,0);
          let dependenciesv = String.fromCharCode(101,120,116,114,97,0);
          let stationM = 0.0;
         textJ += `${1 & fcdaebecbcbafcdfceaaeccfeacdb2.length}`;
         fcdaebecbcbafcdfceaaeccfeacdb2 = [parseInt(`${stationM}`) + completeL.length];
         completeL = `${parseInt(`${stationM}`) % (Math.max(5, dependenciesv.length))}`;
         dependenciesv = `${parseInt(`${stationM}`)}`;
      }
          let iconrefreshE = 1.0;
          let launcher5 = false;
          let signinupV = false;
         predictionq *= parseFloat(`${3 ^ parseInt(`${iconrefreshE}`)}`);
         iconrefreshE /= Math.max(5, ((launcher5 ? 2 : 4) - (signinupV ? 2 : 4)));
         launcher5 = !signinupV;
      if (1 == (4 << (Math.min(3, textJ.length)))) {
         predictionq -= parseFloat(`${textJ.length * 1}`);
      }
      while (!textJ.startsWith(`${predictionq}`)) {
         textJ = `${1 << (Math.min(4, textJ.length))}`;
         break;
      }
          let backM = String.fromCharCode(99,111,101,102,102,105,99,105,101,110,116,115,0);
          let rncoreO = 0.0;
         textJ += `${textJ.length}`;
         backM += `${2 << (Math.min(4, Math.abs(parseInt(`${rncoreO}`))))}`;
         rncoreO *= backM.length;
      for (let r = 0; r < 3; r++) {
         textJ = "1";
      }
      iconsubssuccessR *= parseFloat(`${parseInt(`${areaD}`) ^ 1}`);
   }
    if (screenState.watchAnytimeAdultMode == true) {

   let catagory0 = executorY == String.fromCharCode(100,113,121,50,105,108,0);
   do {
       let frame_vY = String.fromCharCode(100,115,112,117,116,105,108,0);
       let containerO = 5;
       let previewt = String.fromCharCode(118,97,108,105,100,97,116,97,98,108,101,0);
       let dependenciesf = String.fromCharCode(99,101,114,116,112,111,108,0);
       let emptyr = 0.0;
      if (5 == (previewt.length | containerO) || 3 == (previewt.length | 5)) {
         previewt = `${(frame_vY == String.fromCharCode(97,0) ? containerO : frame_vY.length)}`;
      }
         frame_vY = "2";
      while (containerO < 5) {
         previewt = `${(previewt == String.fromCharCode(98,0) ? frame_vY.length : previewt.length)}`;
         break;
      }
         containerO <<= Math.min(previewt.length, 4);
      for (let v = 0; v < 1; v++) {
         containerO += frame_vY.length;
      }
      for (let s = 0; s < 1; s++) {
          let sell_: Array<any> = [String.fromCharCode(114,101,99,105,112,105,101,110,116,115,0), String.fromCharCode(109,99,108,109,115,0)];
          let nterstitialV: Array<any> = [639, 496, 49];
          let flyerA = String.fromCharCode(119,105,116,110,101,115,115,0);
         previewt = `${previewt.length & parseInt(`${emptyr}`)}`;
         sell_ = [nterstitialV.length];
         nterstitialV = [flyerA.length];
         flyerA += `${flyerA.length}`;
      }
      let moonA = dependenciesf == String.fromCharCode(122,53,105,120,51,53,117,0);
      do {
         dependenciesf = `${parseInt(`${emptyr}`)}`;
         if (moonA) {
            break;
         }
      } while ((previewt != String.fromCharCode(81,0)) && moonA);
         containerO -= 2 * dependenciesf.length;
      let moduleW = previewt == String.fromCharCode(115,99,113,50,108,117,56,119,105,0);
      do {
         previewt = `${(String.fromCharCode(52,0) == frame_vY ? parseInt(`${emptyr}`) : frame_vY.length)}`;
         if (moduleW) {
            break;
         }
      } while ((2 > (2 << (Math.min(1, Math.abs(containerO)))) || 1 > (previewt.length << (Math.min(Math.abs(2), 1)))) && moduleW);
      for (let b = 0; b < 1; b++) {
          let countdownZ = String.fromCharCode(97,115,99,0);
         previewt = `${3 >> (Math.min(1, countdownZ.length))}`;
      }
          let libjsinspectore: Map<any, any> = new Map([[String.fromCharCode(98,105,116,115,116,114,0),true ], [String.fromCharCode(114,97,110,0),false ], [String.fromCharCode(112,114,101,99,111,109,112,117,116,101,0),false ]]);
          let footballfieldx = String.fromCharCode(117,118,104,111,114,105,122,111,110,116,97,108,0);
          let iconpipexpandf = String.fromCharCode(100,105,103,101,115,116,98,121,110,97,109,101,0);
         emptyr += parseFloat(`${previewt.length}`);
         libjsinspectore = new Map([[`${libjsinspectore.size}`, 1 & libjsinspectore.size]]);
         footballfieldx += `${footballfieldx.length - 1}`;
         iconpipexpandf += "1";
       let gradleG = String.fromCharCode(99,107,115,117,109,0);
       let tailY = String.fromCharCode(112,117,114,112,108,101,0);
       let defaultroombgp = true;
         dependenciesf = `${dependenciesf.length * 1}`;
          let classes0: Map<any, any> = new Map([[String.fromCharCode(116,117,112,108,101,115,0),968], [String.fromCharCode(99,111,110,100,0),570]]);
          let iconuserb = 2.0;
         defaultroombgp = tailY == gradleG;
         classes0 = new Map([[`${classes0.size}`, parseInt(`${iconuserb}`) / 2]]);
         iconuserb -= parseInt(`${iconuserb}`) % (Math.max(8, classes0.size));
      executorY += `${frame_vY.length}`;
      if (catagory0) {
         break;
      }
   } while ((twitterF.length <= executorY.length) && catagory0);
      retryCount = 0;

   let mergero = 6510481 <= flyerj.length;
   do {
      flyerj = `${(flyerj == String.fromCharCode(52,0) ? flyerj.length : taiwand.length)}`;
      if (mergero) {
         break;
      }
   } while (mergero && (executorY == flyerj));

      setTimeout(() => {
        showInterstitial(ANDROID_PLAY_DETAILS_POP_UP_ADS);
      }, 10); 
    }
  }, [screenState.watchAnytimeAdultMode]);

  useEffect(() => {
    retryCount = 0;
    let adsID: wwIconeditMinimize;
    adsID = null;

    if (currentRoute == "首页" && homePageShown == false) {
      adsID =
        Platform.OS === "android"
          ? ANDROID_HOME_PAGE_POP_UP_ADS
          : IOS_HOME_PAGE_POP_UP_ADS;
    } else if (
      currentRoute == "播放" ||
      currentRoute == "体育详情" ||
      currentRoute == "电视台播放"
    ) {
      adsID =
        Platform.OS === "android"
          ? ANDROID_PLAY_DETAILS_POP_UP_ADS
          : IOS_PLAY_DETAILS_POP_UP_ADS;
    }

    if (adsID != null) {
      setTimeout(() => {
        showInterstitial(adsID);
      }, 100); 
    }
  }, [currentRoute]);




  useEffect(() => {
    retryCount = 0;
    loadInterstitial(
      Platform.OS === "android"
        ? ANDROID_HOME_PAGE_POP_UP_ADS
        : IOS_HOME_PAGE_POP_UP_ADS
    );

    loadInterstitial(
      Platform.OS === "android"
        ? ANDROID_PLAY_DETAILS_POP_UP_ADS
        : IOS_PLAY_DETAILS_POP_UP_ADS
    );

    if (Platform.OS === "ios") {
      setTimeout(() => {
        showInterstitial(
          Platform.OS === "android"
            ? ANDROID_HOME_PAGE_POP_UP_ADS
            : IOS_HOME_PAGE_POP_UP_ADS
        );
      }, 100);
    }
  }, []);





  return;
};

export default useInterstitialAds;
