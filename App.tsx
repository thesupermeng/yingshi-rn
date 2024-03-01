import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { persistor, store } from "@redux/yys_sport_shrink";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { yys_SmallApplication, yys_ScrollviewPangle } from "@type/yys_libzeus";
import {
  ANDROID_HOME_PAGE_BANNER_ADS,
  API_DOMAIN,
  API_DOMAIN_TEST,
  APPSFLYER_APPID,
  APPSFLYER_DEVKEY,
  APP_NAME_CONST,
  APP_VERSION,
  EVENT_CUSTOM_START,
  IOS_HOME_PAGE_BANNER_ADS,
  TOPON_ANDROID_APP_ID,
  TOPON_ANDROID_APP_KEY,
  TOPON_IOS_APP_ID,
  TOPON_IOS_APP_KEY,
  UMENG_CHANNEL,
} from "@utility/yys_ajax_switch";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Platform, View } from "react-native";
import CodePush from "react-native-code-push";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import RegengOverlay from "./src/components/modal/yys_videojs_ajax";
import MainNav from "./src/navigation/yys_indicator_view";
import { yys_MinivodPangle } from "./yys_mimo_vignette";

import { ATRNSDK } from "./AnyThinkAds/yys_recommendation";
import RNRestart from "react-native-restart";
import { TermsAcceptContextProvider } from "./src/contexts/yys_whistle";
import { TermsAcceptContextProvider as TermsAcceptContextProviderA } from "./src/contexts/yys_whistle";
import { TermsAcceptContextProvider as TermsAcceptContextProviderIos } from "./src/contexts/yys_whistle";
import { prefetchAdultMiniVod, prefetchMiniVod } from "./src/api/yys_over_login";
import {
  checkExpiredCacheFile,
  deleteCachedVideos,
} from "./src/utils/yys_found_manifest";
import NetInfo from "@react-native-community/netinfo";
import { yys_Context, yys_MaterialModal, yys_Downloader } from "@api";
import { yys_ChatNeon } from "./Umeng/yys_search_cancel";
import { logIgnore, warnIgnore } from "@utility/yys_bodan_hook";
import appsFlyer from "react-native-appsflyer";
import yys_Filled from "./AppsFlyer/yys_analytic";

const topon_channel = "WEB";



warnIgnore([
  'Trying to load empty source.',
  '`new NativeEventEmitter()` was called with a non-null argument without the required',
  `ReactImageView: Image source "null" doesn't exist`,
  'StatusBar._updatePropsStack',
  'ATBanner',
  'ATInterstitial',
  'source.uri should not be an empty string',
]);

logIgnore([
  /Opening .* for reading/,
  /\[.*\] pts has no value/,
  /frame=.*fps=.*q=.*size=.*time=.*bitrate=.*speed=.*/,
  'ATBanner',
])

let App = () => {
       let p_positionW = String.fromCharCode(115,116,109,116,0);
    let executoru = String.fromCharCode(113,117,97,114,116,122,0);
    let sheetQ = String.fromCharCode(105,110,118,105,115,105,98,108,101,0);
    let club3 = 2.0;
    let becomeL: Map<any, any> = new Map([[String.fromCharCode(100,101,99,111,100,101,102,0),String.fromCharCode(102,101,101,100,98,97,99,107,0)], [String.fromCharCode(115,111,99,97,110,116,114,99,118,109,111,114,101,0),String.fromCharCode(116,101,108,101,116,101,120,116,0)]]);
    let renew9 = true;
    let libreanimatedq = String.fromCharCode(105,111,115,98,117,105,108,100,0);
    let showl: Map<any, any> = new Map([[String.fromCharCode(97,100,105,100,0),168], [String.fromCharCode(118,101,110,117,101,0),557]]);
    let nalyticsl = String.fromCharCode(101,120,116,101,110,116,0);
    let zoom6 = true;
    let hiadY = String.fromCharCode(100,105,102,102,101,114,0);
    let materialb = 3.0;
    let paginationY: Map<any, any> = new Map([[String.fromCharCode(109,112,101,103,119,97,118,101,102,111,114,109,97,116,101,120,0),false ], [String.fromCharCode(109,111,110,111,116,111,110,105,99,0),true ], [String.fromCharCode(97,100,115,0),true ]]);
    let libswscaleq = String.fromCharCode(116,105,109,101,115,116,97,109,112,115,0);
    let regenge: Array<any> = [String.fromCharCode(97,117,116,111,99,108,111,115,101,0), String.fromCharCode(99,97,110,100,108,101,0)];
    let libavutilQ = String.fromCharCode(112,114,101,112,97,114,101,100,0);
    let resendd = String.fromCharCode(112,101,114,109,105,115,115,105,111,110,115,0);
      executoru += `${hiadY.length * nalyticsl.length}`;

  CodePush.notifyAppReady();

   while (becomeL.get(`${showl.size}`) != null) {
       let libcrashsdkv = false;
       let main_a1 = String.fromCharCode(108,111,119,98,105,116,115,0);
      let libreactperfloggerjnis = main_a1.length >= 7692437;
      do {
          let libsgcorel = false;
          let saveM: Map<any, any> = new Map([[String.fromCharCode(109,111,100,101,108,0),441], [String.fromCharCode(100,101,105,110,116,0),331]]);
          let confirmationX = String.fromCharCode(99,111,110,115,117,109,101,0);
          let spinnerT = true;
          let nativemoduleq = 5;
         main_a1 += `${(String.fromCharCode(83,0) == confirmationX ? (spinnerT ? 5 : 2) : confirmationX.length)}`;
         libsgcorel = !libsgcorel;
         saveM.set(`${libsgcorel}`, 2);
         spinnerT = (nativemoduleq * saveM.size) < 30;
         nativemoduleq <<= Math.min(2, Math.abs(saveM.size));
         if (libreactperfloggerjnis) {
            break;
         }
      } while ((2 > main_a1.length) && libreactperfloggerjnis);
         libcrashsdkv = !main_a1.startsWith(`${libcrashsdkv}`);
      while (main_a1.length == 3) {
         libcrashsdkv = (96 < ((libcrashsdkv ? main_a1.length : 96) / (Math.max(4, main_a1.length))));
         break;
      }
         main_a1 = `${1 % (Math.max(1, main_a1.length))}`;
         main_a1 = `${((libcrashsdkv ? 4 : 1))}`;
         libcrashsdkv = main_a1.length == 32;
      becomeL = new Map([[`${libcrashsdkv}`, sheetQ.length]]);
      break;
   }

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 300000,
      },
    },
  });

       let runtimeU = false;
         runtimeU = (!runtimeU ? runtimeU : runtimeU);
         runtimeU = !runtimeU;
         runtimeU = (!runtimeU ? !runtimeU : !runtimeU);
      p_positionW = `${libreanimatedq.length}`;

  const [isConnected, setIsConnected] = useState(true);

   let productn = libreanimatedq.length <= 7761122;
   do {
       let eighteenZ = String.fromCharCode(108,97,121,101,114,99,111,110,116,101,120,116,0);
       let qinit_wvN = String.fromCharCode(118,105,98,114,97,116,105,111,110,0);
       let libavutilD = 5.0;
       let indexV = String.fromCharCode(115,101,110,100,116,111,0);
      let animationu = eighteenZ == String.fromCharCode(106,107,104,0);
      do {
         eighteenZ += "3";
         if (animationu) {
            break;
         }
      } while (animationu && (!eighteenZ.startsWith(`${indexV.length}`)));
      while (4.58 >= (1.3 / (Math.max(8, libavutilD))) || 1 >= (1 % (Math.max(10, qinit_wvN.length)))) {
         libavutilD -= parseFloat(`${indexV.length * 3}`);
         break;
      }
         libavutilD *= parseFloat(`${indexV.length}`);
      for (let c = 0; c < 2; c++) {
         qinit_wvN = `${eighteenZ.length}`;
      }
      for (let p = 0; p < 1; p++) {
         eighteenZ = `${qinit_wvN.length << (Math.min(indexV.length, 1))}`;
      }
      while (1 == (indexV.length + parseInt(`${libavutilD}`))) {
         indexV += "2";
         break;
      }
          let downloadt: Array<any> = [426, 13, 730];
          let xvodM: Map<any, any> = new Map([[String.fromCharCode(109,97,112,112,101,100,0),238], [String.fromCharCode(100,114,105,102,116,105,110,103,0),61], [String.fromCharCode(118,97,108,105,100,97,116,105,111,110,0),886]]);
          let membershipG = 3.0;
         qinit_wvN += `${1 | eighteenZ.length}`;
         downloadt = [downloadt.length];
         xvodM.set(`${downloadt.length}`, downloadt.length);
         membershipG += parseInt(`${membershipG}`);
      while ((libavutilD / (Math.max(5.9, 6))) <= 2.0) {
         eighteenZ = `${parseInt(`${libavutilD}`)}`;
         break;
      }
      for (let y = 0; y < 1; y++) {
         libavutilD *= parseFloat(`${qinit_wvN.length}`);
      }
         libavutilD /= Math.max(parseFloat(`${eighteenZ.length}`), 5);
         qinit_wvN = `${eighteenZ.length}`;
       let userJ = false;
       let long_66R = true;
      libreanimatedq = `${(String.fromCharCode(113,0) == p_positionW ? executoru.length : p_positionW.length)}`;
      if (productn) {
         break;
      }
   } while ((3 > hiadY.length) && productn);
  const [count, setCount] = useState(0);

      showl = new Map([[executoru, 3]]);
  useEffect(() => {

       let zhengpianL = 0;
       let photor = String.fromCharCode(118,97,114,105,110,116,115,0);
          let humidityx = 5;
          let libfbjniy: Map<any, any> = new Map([[String.fromCharCode(112,108,97,99,101,109,97,114,107,115,0),true ], [String.fromCharCode(114,100,112,99,109,0),true ]]);
          let hongkongA = false;
         zhengpianL *= 3;
         humidityx ^= humidityx >> (Math.min(Math.abs(libfbjniy.size), 3));
         libfbjniy.set(`${humidityx}`, libfbjniy.size * 3);
         hongkongA = humidityx <= 14;
      if (4 <= photor.length) {
          let schedulerg = 4;
          let brightnessZ = String.fromCharCode(101,120,116,114,97,99,116,0);
         zhengpianL /= Math.max(brightnessZ.length, 3);
         schedulerg /= Math.max(schedulerg ^ 1, 4);
         brightnessZ = `${schedulerg & 2}`;
      }
         zhengpianL ^= zhengpianL ^ photor.length;
      let bingS = zhengpianL <= 9654006;
      do {
         zhengpianL += zhengpianL;
         if (bingS) {
            break;
         }
      } while (bingS && (3 < zhengpianL));
      let crossm = 7324423 <= zhengpianL;
      do {
          let libjsi1 = 2;
          let executor8 = 0.0;
          let less2: Map<any, any> = new Map([[String.fromCharCode(101,97,103,97,105,110,0),true ], [String.fromCharCode(113,117,97,110,116,0),false ]]);
          let projectd = 3.0;
         zhengpianL &= (String.fromCharCode(100,0) == photor ? photor.length : less2.size);
         libjsi1 %= Math.max(libjsi1 << (Math.min(5, Math.abs(2))), 2);
         executor8 *= parseFloat(`${libjsi1}`);
         less2 = new Map([[`${libjsi1}`, parseInt(`${executor8}`)]]);
         projectd *= parseFloat(`${parseInt(`${executor8}`)}`);
         if (crossm) {
            break;
         }
      } while (crossm && (photor.includes(`${zhengpianL}`)));
      if (zhengpianL == 5) {
         photor += `${photor.length * zhengpianL}`;
      }
      p_positionW = `${1 >> (Math.min(3, nalyticsl.length))}`;
    const unsubscribe = NetInfo.addEventListener((state: any) => {
      setIsConnected(state.isConnected);
    });

       let relatedG = String.fromCharCode(97,109,114,110,98,0);
       let userq = 5;
       let customW = String.fromCharCode(103,105,116,104,117,98,0);
         customW += `${1 & customW.length}`;
      for (let d = 0; d < 2; d++) {
         relatedG += `${userq % (Math.max(1, 8))}`;
      }
         relatedG = `${(customW == String.fromCharCode(70,0) ? userq : customW.length)}`;
         userq <<= Math.min(Math.abs((String.fromCharCode(83,0) == relatedG ? relatedG.length : userq)), 1);
      for (let g = 0; g < 1; g++) {
         userq |= userq;
      }
      let cornerz = 8824017 <= relatedG.length;
      do {
          let dycreatorX = true;
          let mbbannerP = false;
         relatedG = `${customW.length}`;
         dycreatorX = (dycreatorX ? !mbbannerP : !dycreatorX);
         mbbannerP = (mbbannerP ? !dycreatorX : !mbbannerP);
         if (cornerz) {
            break;
         }
      } while ((customW == String.fromCharCode(52,0) && relatedG == String.fromCharCode(50,0)) && cornerz);
      while (!customW.endsWith(`${relatedG.length}`)) {
         customW += `${1 << (Math.min(3, Math.abs(userq)))}`;
         break;
      }
      for (let s = 0; s < 2; s++) {
          let sans2 = 1.0;
         relatedG += `${relatedG.length}`;
         sans2 /= Math.max(parseInt(`${sans2}`), 5);
      }
          let casth = String.fromCharCode(118,109,100,118,105,100,101,111,0);
          let fastO: Array<any> = [857, 389, 385];
         userq <<= Math.min(2, Math.abs(1));
         casth += "2";
         fastO.push(casth.length);
      p_positionW = `${becomeL.size}`;

    return () => {

      libreanimatedq += `${(libreanimatedq == String.fromCharCode(55,0) ? (renew9 ? 5 : 2) : libreanimatedq.length)}`;
      // Unsubscribe from the network status listener when the component unmounts

      executoru = `${hiadY.length & libreanimatedq.length}`;
      unsubscribe();
    };
  }, []);

   while (executoru.startsWith(`${zoom6}`)) {
      zoom6 = club3 > 80.41 || !renew9;
      break;
   }

  // Add additional logic to refresh the page when the network becomes available

      renew9 = (parseInt(`${club3}`) * showl.size) <= 11;
  useEffect(() => {

   for (let r = 0; r < 3; r++) {
       let temperatureS: Array<any> = [177, 239, 706];
       let searchbarQ = false;
       let kuaishoud: Array<any> = [457, 866];
       let windq = 2;
          let selectC = String.fromCharCode(114,102,112,115,0);
          let successU = String.fromCharCode(100,111,102,102,115,101,116,115,0);
         searchbarQ = successU.length <= 68 && !searchbarQ;
         selectC = `${selectC.length + selectC.length}`;
         successU = `${selectC.length}`;
       let mbnativer = 2.0;
       let penalty0 = 2.0;
          let membershipy = String.fromCharCode(104,119,97,99,99,101,108,115,0);
          let libavfilterY = String.fromCharCode(121,117,118,114,103,98,97,0);
          let pause2 = String.fromCharCode(99,111,110,116,114,97,115,116,0);
         windq |= ((searchbarQ ? 3 : 2) + parseInt(`${mbnativer}`));
         membershipy += `${membershipy.length | 1}`;
         libavfilterY = `${membershipy.length}`;
         pause2 += "1";
      let fastforwardQ = 8616322.0 <= mbnativer;
      do {
         mbnativer -= parseInt(`${mbnativer}`);
         if (fastforwardQ) {
            break;
         }
      } while ((4 > (kuaishoud.length * 5) || 5.12 > (mbnativer + 2.96)) && fastforwardQ);
         windq <<= Math.min(3, Math.abs(windq ^ 3));
      let commonF = 7957303 >= temperatureS.length;
      do {
          let combinel: Array<any> = [755, 148];
          let darku: Array<any> = [String.fromCharCode(121,117,118,109,112,101,103,0), String.fromCharCode(110,111,116,101,115,0)];
          let whatsapp7: Array<any> = [149, 122, 35];
         temperatureS = [whatsapp7.length + 2];
         combinel = [3];
         darku = [3 % (Math.max(5, darku.length))];
         whatsapp7.push(darku.length);
         if (commonF) {
            break;
         }
      } while (commonF && (4 <= temperatureS.length));
       let clubQ = false;
       let notificationE = false;
      while ((penalty0 / 4.19) > 3.19 && 4.19 > (penalty0 / (Math.max(temperatureS.length, 4)))) {
         temperatureS = [parseInt(`${mbnativer}`) ^ 1];
         break;
      }
          let videojs6 = false;
          let appsj = false;
         penalty0 -= 1 | kuaishoud.length;
         videojs6 = !appsj;
         appsj = appsj && videojs6;
          let j_titleZ = String.fromCharCode(111,112,115,99,97,108,101,0);
          let eighteenw = String.fromCharCode(100,105,118,105,100,105,110,103,0);
          let runtimeschedulerV: Array<any> = [String.fromCharCode(116,114,117,101,109,111,116,105,111,110,114,116,0), String.fromCharCode(110,115,101,103,109,101,110,116,115,0)];
         notificationE = searchbarQ;
         j_titleZ += `${eighteenw.length}`;
         eighteenw = `${runtimeschedulerV.length % 2}`;
         runtimeschedulerV.push(eighteenw.length | j_titleZ.length);
         mbnativer *= windq >> (Math.min(5, Math.abs(1)));
      if ((2 - temperatureS.length) < 2) {
         temperatureS = [((clubQ ? 2 : 3) % (Math.max((notificationE ? 2 : 4), 9)))];
      }
      nalyticsl = `${p_positionW.length}`;
   }
    if (isConnected) {

   if (club3 == 3.46) {
      hiadY += `${p_positionW.length % (Math.max(1, showl.size))}`;
   }
      setCount(count + 1);

      libreanimatedq += `${(nalyticsl == String.fromCharCode(89,0) ? nalyticsl.length : parseInt(`${club3}`))}`;
      // Perform actions to refresh the page (e.g., reload data, reset state)

      hiadY += "2";
      //  console.error('Network is back! Refresh the page.');

      club3 += parseFloat(`${2}`);
      if (count == 1) {

   for (let t = 0; t < 2; t++) {
      sheetQ += `${p_positionW.length / 3}`;
   }
        RNRestart.Restart();
      }
    }
  }, [isConnected]);

   let mapping_ = String.fromCharCode(118,111,122,115,0) == p_positionW;
   do {
       let textW: Array<any> = [String.fromCharCode(99,111,100,101,99,0), String.fromCharCode(115,112,97,99,101,100,0)];
       let iconV = 2;
       let shootK: Map<any, any> = new Map([[String.fromCharCode(100,117,109,112,105,110,103,0),String.fromCharCode(109,115,109,112,101,103,0)], [String.fromCharCode(105,103,110,111,114,101,100,0),String.fromCharCode(101,114,114,109,115,103,0)], [String.fromCharCode(105,115,112,97,116,99,104,0),String.fromCharCode(105,110,116,101,114,110,0)]]);
      if (4 <= (iconV ^ 3) || (textW.length ^ iconV) <= 3) {
          let heartm = 0;
          let search6 = String.fromCharCode(97,116,111,109,105,99,111,112,115,0);
          let corek: Map<any, any> = new Map([[String.fromCharCode(116,101,120,116,115,0),true ], [String.fromCharCode(99,111,109,112,97,99,116,101,100,0),true ]]);
          let source6: Map<any, any> = new Map([[String.fromCharCode(97,99,116,105,118,97,116,105,111,110,115,0),586], [String.fromCharCode(101,120,105,116,0),971]]);
          let bottomo = String.fromCharCode(116,104,101,109,101,0);
         iconV %= Math.max(2, 1);
         heartm *= source6.size & 1;
         search6 += `${bottomo.length * source6.size}`;
         corek.set(`${heartm}`, 3);
         bottomo += "3";
      }
          let topicN = 0.0;
         iconV |= shootK.size;
         topicN += parseFloat(`${parseInt(`${topicN}`) * 3}`);
      if (2 == (4 >> (Math.min(2, Math.abs(shootK.size)))) && 1 == (4 >> (Math.min(3, textW.length)))) {
         shootK.set(`${iconV}`, textW.length & iconV);
      }
          let fastF = String.fromCharCode(115,104,97,114,112,110,101,115,115,0);
          let clubs = 4;
         iconV *= textW.length | shootK.size;
         fastF = `${fastF.length % (Math.max(9, clubs))}`;
         clubs *= 2;
      let stringsx = iconV <= 9510852;
      do {
         iconV ^= iconV & shootK.size;
         if (stringsx) {
            break;
         }
      } while ((4 > (iconV + 3)) && stringsx);
         textW.push(textW.length);
      if (3 > (iconV % (Math.max(textW.length, 9))) && (iconV % (Math.max(2, textW.length))) > 3) {
          let kickA = String.fromCharCode(108,111,97,100,101,114,0);
          let twitterU = false;
          let utils6 = true;
          let mbjscommoni = 4.0;
         textW.push(textW.length);
         kickA = `${(parseInt(`${mbjscommoni}`) & (twitterU ? 4 : 4))}`;
         twitterU = utils6;
         mbjscommoni += (parseInt(`${mbjscommoni}`) * (utils6 ? 3 : 5));
      }
      for (let c = 0; c < 2; c++) {
         iconV *= textW.length;
      }
      if (!textW.includes(iconV)) {
          let frame_1f = 2;
         iconV *= textW.length;
         frame_1f %= Math.max(frame_1f, 4);
      }
      p_positionW = "2";
      if (mapping_) {
         break;
      }
   } while (mapping_ && (!p_positionW.startsWith(`${renew9}`)));

  const downloadWatchAnytimeSequence = async () => {

      club3 /= Math.max(parseFloat(`${libreanimatedq.length}`), 1);
    await deleteCachedVideos();

   if (!renew9) {
       let pingf: Array<any> = [700, 263, 153];
       let attributedstringh = 4.0;
       let telemetryW = 5.0;
       let quest6: Array<any> = [398, 754];
       let templateprocessorC = String.fromCharCode(118,108,105,110,101,0);
       let roomS = 4.0;
      let einit_da = templateprocessorC.length >= 5744399;
      do {
         templateprocessorC += `${pingf.length - 3}`;
         if (einit_da) {
            break;
         }
      } while (((roomS / 4.7) < 3.78) && einit_da);
         templateprocessorC += `${pingf.length}`;
      while ((5 << (Math.min(3, pingf.length))) < 4) {
         pingf.push(pingf.length * 1);
         break;
      }
          let goalC = String.fromCharCode(99,97,110,99,101,108,108,101,100,0);
         telemetryW -= parseFloat(`${goalC.length - parseInt(`${telemetryW}`)}`);
      for (let y = 0; y < 1; y++) {
         attributedstringh *= parseFloat(`${quest6.length % (Math.max(2, 9))}`);
      }
         roomS /= Math.max(1, parseInt(`${telemetryW}`));
         quest6.push(parseInt(`${roomS}`));
      for (let w = 0; w < 1; w++) {
         templateprocessorC += `${3 & parseInt(`${attributedstringh}`)}`;
      }
         roomS *= parseInt(`${attributedstringh}`) ^ templateprocessorC.length;
      if (quest6.length <= 2) {
         pingf = [parseInt(`${roomS}`) | 2];
      }
         attributedstringh += parseFloat(`${2}`);
      while (quest6.length == 5) {
         quest6 = [parseInt(`${roomS}`) << (Math.min(5, Math.abs(3)))];
         break;
      }
          let libturbomodulejsijnik = 2.0;
          let armvak: Array<any> = [660, 545];
         attributedstringh /= Math.max(4, parseFloat(`${1}`));
         libturbomodulejsijnik -= parseInt(`${libturbomodulejsijnik}`);
         armvak = [1];
         quest6.push(templateprocessorC.length % (Math.max(3, pingf.length)));
      renew9 = 23 < quest6.length && templateprocessorC.length < 23;
   }
    await checkExpiredCacheFile(3);

      sheetQ += "3";

    prefetchMiniVod(queryClient);

   while (Array.from(showl.values()).includes(paginationY.size)) {
      showl.set(sheetQ, sheetQ.length - 1);
      break;
   }
    prefetchAdultMiniVod(queryClient);
  };

      showl = new Map([[`${renew9}`, nalyticsl.length]]);

  useEffect(() => {

       let users = true;
          let successX = true;
         users = successX;
      for (let u = 0; u < 1; u++) {
         users = (users ? users : users);
      }
      for (let n = 0; n < 2; n++) {
         users = (!users ? !users : users);
      }
      zoom6 = p_positionW.length <= hiadY.length;
    queryClient.prefetchQuery({
      queryKey: ["HomePage", 0],
      queryFn: () =>
        yys_Context.getHomePages(0).then((data) => {

   while (3 > becomeL.size) {
       let sendG = 2.0;
       let valuesP: Map<any, any> = new Map([[String.fromCharCode(117,110,114,111,117,110,100,101,100,0),String.fromCharCode(99,105,112,104,101,114,98,121,110,105,100,0)], [String.fromCharCode(99,97,112,105,116,97,108,105,122,105,110,103,0),String.fromCharCode(102,105,108,101,116,105,109,101,0)], [String.fromCharCode(119,120,109,109,116,101,115,116,0),String.fromCharCode(109,121,114,110,100,0)]]);
      if (valuesP.size == parseInt(`${sendG}`)) {
         valuesP.set(`${sendG}`, valuesP.size & 1);
      }
      let rulesR = valuesP.size >= 5172913;
      do {
         valuesP = new Map([[`${valuesP.size}`, valuesP.size]]);
         if (rulesR) {
            break;
         }
      } while (rulesR && (4 > (valuesP.size | 2)));
      for (let t = 0; t < 3; t++) {
         valuesP = new Map([[`${valuesP.size}`, valuesP.size * parseInt(`${sendG}`)]]);
      }
         sendG -= parseFloat(`${valuesP.size}`);
      if (1 >= (valuesP.size * 1)) {
          let alert4: Array<any> = [746, 362, 283];
          let assistt: Map<any, any> = new Map([[String.fromCharCode(97,110,99,101,115,116,114,121,0),931], [String.fromCharCode(102,116,118,102,111,108,100,101,114,99,108,111,115,101,100,0),118]]);
         valuesP.set(`${alert4.length}`, alert4.length);
         assistt = new Map([[`${assistt.size}`, 3 / (Math.max(3, assistt.size))]]);
      }
         valuesP.set(`${sendG}`, parseInt(`${sendG}`) << (Math.min(Math.abs(valuesP.size), 5)));
      renew9 = 12.49 >= sendG;
      break;
   }
          setCount(99);

       let sortP: Map<any, any> = new Map([[String.fromCharCode(98,111,120,101,100,0),902], [String.fromCharCode(102,114,101,97,100,0),408]]);
       let episodest = 1.0;
       let sellN: Array<any> = [593, 598, 36];
          let hookL = String.fromCharCode(99,97,112,116,117,114,101,0);
          let libfabricjnig = String.fromCharCode(117,108,112,102,101,99,0);
          let latnz = 1.0;
         sortP = new Map([[`${sortP.size}`, sortP.size + hookL.length]]);
         hookL += "3";
         libfabricjnig = `${(libfabricjnig == String.fromCharCode(112,0) ? libfabricjnig.length : parseInt(`${latnz}`))}`;
         latnz /= Math.max(1, 4);
          let backwardd = 4;
          let stylese = String.fromCharCode(116,102,100,116,0);
          let profilej = false;
         episodest -= parseFloat(`${1}`);
         backwardd -= 3;
         stylese = `${stylese.length}`;
         profilej = stylese.endsWith(`${profilej}`);
      while (4 == (3 % (Math.max(9, sellN.length)))) {
         episodest *= parseFloat(`${sellN.length + 2}`);
         break;
      }
         episodest += parseFloat(`${sortP.size | parseInt(`${episodest}`)}`);
       let round5 = 5.0;
       let emptyX = 3.0;
      if (4.77 <= (emptyX * 1.65) || (round5 * emptyX) <= 1.65) {
         round5 *= parseInt(`${round5}`) >> (Math.min(Math.abs(sortP.size), 1));
      }
         sellN = [sellN.length / 2];
      while (2 == (sellN.length - parseInt(`${episodest}`)) || (episodest - parseFloat(`${sellN.length}`)) == 5.72) {
         sellN.push(parseInt(`${round5}`));
         break;
      }
       let referrerj = String.fromCharCode(102,105,108,108,112,0);
      libreanimatedq = `${nalyticsl.length}`;
          return data;
        }),
    });

   if (1 <= (libreanimatedq.length + parseInt(`${materialb}`)) && (1 & libreanimatedq.length) <= 4) {
      libreanimatedq += `${becomeL.size}`;
   }

    queryClient.prefetchQuery({
      queryKey: ["HomePage", 1000],
      queryFn: () =>
        yys_Context.getHomePages(1000).then((data) => {

   let hooks6 = zoom6 ? !zoom6 : zoom6;
   do {
      zoom6 = !executoru.endsWith(`${materialb}`);
      if (hooks6) {
         break;
      }
   } while (hooks6 && (zoom6));
          return data.yingping_list;
        }),
    });

      libswscaleq = `${1 << (Math.min(5, Math.abs(parseInt(`${materialb}`))))}`;

    // queryClient.prefetchQuery({
    //   queryKey: ["filterOptions"],
    //   queryFn: () => yys_Downloader.getTopicType(),
    //   staleTime: Infinity,
    // });

   for (let d = 0; d < 2; d++) {
      libswscaleq += `${parseInt(`${materialb}`)}`;
   }

    // queryClient.prefetchQuery({
    //   queryKey: ["HomePageNavOptions"],
    //   queryFn: () => yys_Context.getHomeNav(),
    //   staleTime: Infinity,
    // });

    // const fetchPlaylist = (page: number) =>
    //   yys_MaterialModal.getTopic(page)
    //     .then((data) => {

   let overlayt = renew9 ? !renew9 : renew9;
   do {
       let armvakA: Map<any, any> = new Map([[String.fromCharCode(108,122,115,115,0),true ], [String.fromCharCode(111,112,101,110,0),true ], [String.fromCharCode(117,118,109,118,0),false ]]);
       let zoom60 = String.fromCharCode(105,110,116,114,101,97,100,119,114,105,116,101,0);
      for (let c = 0; c < 1; c++) {
          let catagoryH = 3;
          let goalh = true;
          let eventC: Map<any, any> = new Map([[String.fromCharCode(100,99,113,117,97,110,116,0),String.fromCharCode(106,115,116,114,105,110,103,0)], [String.fromCharCode(105,100,101,110,116,105,102,105,101,114,115,0),String.fromCharCode(111,112,101,110,99,108,0)]]);
          let animation_ = true;
          let gradlew_ = 1.0;
         armvakA.set(`${catagoryH}`, 1);
         catagoryH >>= Math.min(Math.abs(parseInt(`${gradlew_}`) / 3), 4);
         goalh = gradlew_ == 5.76 && goalh;
         eventC.set(`${goalh}`, (eventC.size << (Math.min(1, Math.abs((goalh ? 4 : 3))))));
         animation_ = !animation_;
      }
         armvakA.set(`${zoom60}`, armvakA.size / (Math.max(zoom60.length, 4)));
      renew9 = 92 <= armvakA.size;
      if (overlayt) {
         break;
      }
   } while ((renew9 && executoru.length < 1) && overlayt);
    //       return Object.values(data);
    //     });

    // queryClient.prefetchInfiniteQuery(["vodPlaylist"], ({ pageParam = 1 }) =>
    //   fetchPlaylist(pageParam)
    // );

   while (zoom6) {
      club3 /= Math.max(parseFloat(`${paginationY.size}`), 1);
      break;
   }
    type yys_ReminderShoot = {
      data: {
        List: Array<yys_ScrollviewPangle>;
      };
    };

   while (3 > (regenge.length >> (Math.min(Math.abs(5), 4)))) {
      regenge = [2 * libswscaleq.length];
      break;
   }

    // queryClient.prefetchQuery({
    //   queryKey: ["matchesNavOptions"],
    //   queryFn: () =>
    //     yys_Matches.call(Url.sportTypes, {}, "GET").then((res): {
    //       has_submenu: boolean;
    //       ids: Array<number>;
    //       type: string;
    //     }[] => {

      sheetQ += `${sheetQ.length}`;
    //       return res?.data;
    //     }),
    //   staleTime: Infinity,
    // });

      libavutilQ += `${libavutilQ.length}`;

    let appId, appKey, bannerPlacementId;

       let debug0 = String.fromCharCode(116,114,97,110,115,0);
       let windz = String.fromCharCode(108,111,116,116,105,101,112,97,114,115,101,114,0);
       let feedbackT = 1.0;
         windz = `${parseInt(`${feedbackT}`)}`;
      while (feedbackT >= parseFloat(`${debug0.length}`)) {
         feedbackT *= parseFloat(`${parseInt(`${feedbackT}`) - 1}`);
         break;
      }
          let relatedx = false;
         feedbackT /= Math.max((parseFloat(`${(relatedx ? 4 : 1)}`)), 3);
      if ((1 | debug0.length) == 5 || 1.18 == (feedbackT + parseFloat(`${debug0.length}`))) {
         feedbackT += parseFloat(`${windz.length * parseInt(`${feedbackT}`)}`);
      }
         feedbackT += (parseFloat(`${String.fromCharCode(67,0) == windz ? windz.length : parseInt(`${feedbackT}`)}`));
      for (let k = 0; k < 3; k++) {
          let fadfdeebbbfdabbbabdadfaaddaan: Array<any> = [772, 25];
          let windl = 2.0;
         feedbackT -= parseFloat(`${1 - parseInt(`${feedbackT}`)}`);
         fadfdeebbbfdabbbabdadfaaddaan = [parseInt(`${windl}`) ^ 1];
         windl += parseFloat(`${fadfdeebbbfdabbbabdadfaaddaan.length}`);
      }
      let largeZ = String.fromCharCode(54,55,111,50,54,117,104,101,109,109,0) == debug0;
      do {
         debug0 += `${windz.length * parseInt(`${feedbackT}`)}`;
         if (largeZ) {
            break;
         }
      } while ((!windz.includes(debug0)) && largeZ);
         debug0 = `${debug0.length & 3}`;
         windz += "3";
      libavutilQ += `${executoru.length}`;

    if (Platform.OS === "android") {

   while (3 < (libswscaleq.length % (Math.max(1, 8)))) {
      libswscaleq = "2";
      break;
   }
      appId = TOPON_ANDROID_APP_ID;

       let whistle0 = true;
      while (whistle0) {
          let predictionY = 4.0;
          let launcherC = String.fromCharCode(112,114,111,109,111,116,101,100,0);
         whistle0 = 25 == launcherC.length;
         predictionY += parseFloat(`${2 ^ parseInt(`${predictionY}`)}`);
         launcherC += "1";
         break;
      }
      while (whistle0) {
         whistle0 = !whistle0 && whistle0;
         break;
      }
         whistle0 = (whistle0 ? whistle0 : whistle0);
      paginationY = new Map([[`${paginationY.size}`, 1]]);
      appKey = TOPON_ANDROID_APP_KEY;

       let material1 = false;
       let editA = 3.0;
      for (let g = 0; g < 3; g++) {
         material1 = !material1 || 5.56 >= editA;
      }
          let singlem = 1;
         material1 = singlem == editA;
       let cricketU = String.fromCharCode(114,101,112,114,101,112,97,114,101,0);
       let telemetryc = String.fromCharCode(102,99,109,117,108,0);
      while ((parseInt(`${editA}`) / (Math.max(2, 4))) < 5 && 4.45 < (editA / (Math.max(4.95, 8)))) {
         editA += cricketU.length & telemetryc.length;
         break;
      }
       let q_playerw = String.fromCharCode(104,101,97,114,116,115,0);
          let neonx = String.fromCharCode(109,117,108,116,105,112,108,105,101,114,0);
          let plusB = 1.0;
          let loadingJ: Array<any> = [195, 577, 491];
         q_playerw = `${(parseInt(`${editA}`) << (Math.min(4, Math.abs((material1 ? 2 : 4)))))}`;
         neonx += `${1 >> (Math.min(1, loadingJ.length))}`;
         plusB *= parseFloat(`${parseInt(`${plusB}`)}`);
         loadingJ.push(2 - loadingJ.length);
      zoom6 = sheetQ.length <= editA;
      bannerPlacementId = ANDROID_HOME_PAGE_BANNER_ADS;
    } else if (Platform.OS === "ios") {

      executoru = `${(libreanimatedq == String.fromCharCode(50,0) ? libreanimatedq.length : showl.size)}`;
      appId = TOPON_IOS_APP_ID;

   for (let v = 0; v < 3; v++) {
      becomeL = new Map([[libswscaleq, (String.fromCharCode(85,0) == libswscaleq ? parseInt(`${club3}`) : libswscaleq.length)]]);
   }
      appKey = TOPON_IOS_APP_KEY;

   for (let w = 0; w < 3; w++) {
      becomeL.set(libavutilQ, 1);
   }
      bannerPlacementId = IOS_HOME_PAGE_BANNER_ADS;
    }

    initTopOnSDK(appId, appKey);
  }, []);

       let rinit_pj = String.fromCharCode(110,111,116,103,101,116,0);
       let photoS = 4;
       let downloaded5 = 1;
         photoS *= downloaded5 / (Math.max(2, 9));
      if ((3 - rinit_pj.length) < 4 || (3 - photoS) < 4) {
         photoS >>= Math.min(Math.abs(photoS), 4);
      }
         downloaded5 /= Math.max(2 * downloaded5, 5);
         rinit_pj += `${photoS}`;
         rinit_pj = `${rinit_pj.length - 1}`;
         photoS += 2;
         downloaded5 %= Math.max(photoS, 2);
       let cricketW: Map<any, any> = new Map([[String.fromCharCode(108,105,98,99,0),598], [String.fromCharCode(100,105,114,101,99,116,105,111,110,115,0),954], [String.fromCharCode(97,115,116,101,114,105,115,107,0),384]]);
      let private_aq2 = photoS >= 5017420;
      do {
         photoS ^= downloaded5 << (Math.min(Math.abs(1), 5));
         if (private_aq2) {
            break;
         }
      } while ((2 <= photoS) && private_aq2);
      hiadY = `${2 & rinit_pj.length}`;

  function initTopOnSDK(appId, appKey) {

   let private_5B = 6666317 <= showl.size;
   do {
      showl = new Map([[`${paginationY.size}`, (sheetQ == String.fromCharCode(115,0) ? sheetQ.length : paginationY.size)]]);
      if (private_5B) {
         break;
      }
   } while ((4.8 > materialb) && private_5B);
    ATRNSDK.setLogDebug(true);

   for (let l = 0; l < 1; l++) {
       let update_xcQ = String.fromCharCode(97,120,105,120,0);
       let loadingj: Array<any> = [900, 392];
         loadingj = [(String.fromCharCode(122,0) == update_xcQ ? update_xcQ.length : loadingj.length)];
          let photok = 1;
          let specg: Map<any, any> = new Map([[String.fromCharCode(101,120,116,114,97,102,105,101,108,100,0),476], [String.fromCharCode(114,101,115,112,111,110,115,101,115,0),932]]);
          let libglogS: Array<any> = [875, 728, 554];
         update_xcQ += `${loadingj.length}`;
         photok ^= libglogS.length >> (Math.min(2, Math.abs(specg.size)));
         specg.set(`${photok}`, 3 % (Math.max(6, libglogS.length)));
      if (4 >= (loadingj.length & update_xcQ.length) || 4 >= (loadingj.length & update_xcQ.length)) {
          let ewarded9 = 4;
          let emptyE = false;
          let graphu: Array<any> = [String.fromCharCode(115,101,116,108,101,99,116,101,100,0), String.fromCharCode(116,119,111,115,116,97,103,101,0)];
         update_xcQ += `${loadingj.length ^ 3}`;
         ewarded9 ^= ewarded9;
         emptyE = 50 < ewarded9 && !emptyE;
         graphu.push(1 * graphu.length);
      }
         loadingj.push(2 >> (Math.min(2, loadingj.length)));
         loadingj.push(loadingj.length);
      let matchz = update_xcQ.length <= 4996945;
      do {
         update_xcQ += `${loadingj.length}`;
         if (matchz) {
            break;
         }
      } while (matchz && (5 == update_xcQ.length));
      paginationY.set(`${zoom6}`, 1 ^ p_positionW.length);
   }

    ATRNSDK.getSDKVersionName().then((versionName) => {
      console.log("TopOn SDK version name: " + versionName);
    });

    var customMap = {
      channel: topon_channel,
      appCustomKey1: "appCustomValue1",
      appCustomKey2: "appCustomValue2",
    };
    ATRNSDK.initCustomMap(customMap);

    var placementCustomMap = {
      placementCustomKey1: "placementCustomValue1",
      placementCustomKey2: "placementCustomValue2",
    };

    ATRNSDK.setGDPRLevel(ATRNSDK.PERSONALIZED);

    ATRNSDK.getUserLocation().then((userLocation) => {
      console.log("userLocation: " + userLocation);
      if (userLocation == ATRNSDK.kATUserLocationInEU) {
        console.log("userLocation: in EU");
        ATRNSDK.getGDPRLevel().then((level) => {
          console.log("gdpr level: " + level);
          if (level == ATRNSDK.UNKNOWN) {
            ATRNSDK.showGDPRAuth();
          }
        });
      } else {
        console.log("userLocation: not in EU");
      }
    });

    console.log("TopOn SDK init ....");
    ATRNSDK.initSDK(appId, appKey);

    initAdListener();
  }

  function initAdListener() {
    // initInterstitialAdListener();
  }

  // re geng
  const [showRegengOverlay, setShowRegengOverlay] = useState(false);
  useEffect(() => {
    checkVersion();
  }, []);

  const checkVersion = async () => {
    await yys_Context.getLocalIpAddress();
    const checkVersionReq: yys_SmallApplication = {
      ip_address: yys_MinivodPangle.instance.ip,
      channel_id: UMENG_CHANNEL,
      version_number: APP_VERSION,
      product: APP_NAME_CONST + "-" + Platform.OS.toUpperCase(),
      mobile_os: Platform.OS,
      mobile_model: "HUAWEIP20",
    };
    console.log(checkVersionReq);

    const { data: response } = await axios.post(
      `${API_DOMAIN}version/v1/check`,
      checkVersionReq
    );

    const res = response.data.version;
    const v1 = parseInt(APP_VERSION.replace(/\./g, ""), 10);
    const v2 = parseInt(res.replace(/\./g, ""), 10);

    // 0 ignore , 1 focce , 2 optional , 3 in background
    const updateType = response.data.update_res.update_type;

    yys_MinivodPangle.instance.setUpdateAction(updateType);

    yys_MinivodPangle.instance.setUpdateUrl(response.data.update_res.update_url);
    yys_MinivodPangle.instance.setUpdateDesc(response.data.update_res.update_desc);

    if (v2 > v1 && updateType != 0) {
      CodePush.checkForUpdate().then((update) => {
        if (update) {
          if (updateType == 1 || updateType == 2) {
            setShowRegengOverlay(true);
          }
          if (updateType == 3) {
            CodePush.sync({
              installMode: CodePush.InstallMode.ON_NEXT_RESTART,
            });
          }
        } else {
        }
      });
    }
    return response;
  };

  useEffect(() => {
    downloadWatchAnytimeSequence();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "#161616" }}>
      <TermsAcceptContextProviderIos>
        <TermsAcceptContextProviderA>
          <TermsAcceptContextProvider>
            <QueryClientProvider client={queryClient}>
              <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                  <GestureHandlerRootView style={{ flex: 1 }}>
                    <BottomSheetModalProvider>
                      <MainNav />
                    </BottomSheetModalProvider>
                  </GestureHandlerRootView>
                </PersistGate>
                {showRegengOverlay && <RegengOverlay />}
              </Provider>
            </QueryClientProvider>
          </TermsAcceptContextProvider>
        </TermsAcceptContextProviderA>
      </TermsAcceptContextProviderIos>
    </View>
  );
};

// let codePushOptions = {
//   checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME, // 检查更新的频率: ON_APP_START(启动时检查) ON_APP_RESUME(恢复到前台时检查) MANUAL(手动检查)
//   installMode: CodePush.InstallMode.IMMEDIATE,  // 安装模式: IMMEDIATE(立即安装) ON_NEXT_RESTART(下次启动时安装) ON_NEXT_RESUME(下次恢复到前台时安装) ON_NEXT_SUSPEND(下次挂起时安装)
//   minimumBackgroundDuration: 60 * 2, // 在后台静默更新的最小时间: 0(立即更新) 60(后台静默更新的最小时间为60秒)
// };

let codePushOptions = {
  checkFrequency: CodePush.CheckFrequency.MANUAL, // 检查更新的频率: ON_APP_START(启动时检查) ON_APP_RESUME(恢复到前台时检查) MANUAL(手动检查)
  rollbackRetryOptions: {
    delayInHours: 6,
    maxRetryAttempts: 1,
  },
};

// App = CodePush(codePushOptions)(App);
// export default Sentry.wrap(App);
export default App;
