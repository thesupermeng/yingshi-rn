import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { persistor, store } from "@redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { yysFloating, yysGradle } from "@type";
import {
   ANDROID_HOME_PAGE_BANNER_ADS,
   API_DOMAIN,
   API_DOMAIN_TEST,
   APP_NAME_CONST,
   APP_VERSION,
   EVENT_CUSTOM_START,
   IOS_HOME_PAGE_BANNER_ADS,
   TOPON_ANDROID_APP_ID,
   TOPON_ANDROID_APP_KEY,
   TOPON_IOS_APP_ID,
   TOPON_IOS_APP_KEY,
   UMENG_CHANNEL,
} from "@utility";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Platform, View } from "react-native";
import CodePush from "react-native-code-push";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import RegengOverlay from "./src/components/modal/yys_scheduler_station";
import MainNav from "./src/navigation/yys_untick_view";
import { yysFloaterIconsubssuccess } from "./yys_yellowscoreball_topon";

import { ATRNSDK } from "./AnyThinkAds/yys_redirect_megaphone";
import RNRestart from "react-native-restart";
import { TermsAcceptContextProvider } from "./src/contexts/yys_iconarrowrightblack";
import { TermsAcceptContextProvider as TermsAcceptContextProviderA } from "./src/contexts/yys_iconarrowrightblack";
import { TermsAcceptContextProvider as TermsAcceptContextProviderIos } from "./src/contexts/yys_iconarrowrightblack";
import { prefetchAdultMiniVod, prefetchMiniVod } from "./src/api/yys_giflivestreaming_reactnativeultimatelistview";
import {
   checkExpiredCacheFile,
   deleteCachedVideos,
} from "./src/utils/yys_nativemodule_mbnativeadvanced";
import NetInfo from "@react-native-community/netinfo";
import { yysCollection, yysSkip, yysInactive } from "@api";
import { yysIconstarReact } from "./Umeng/yys_iconbell_renew";
import { logIgnore, warnIgnore } from "@utility";

const topon_channel = "WEB";



warnIgnore([
   'Trying to load empty source.',
   '`new NativeEventEmitter()` was called with a non-null argument without the required',
   `ReactImageView: Image source "null" doesn't exist`,
   'StatusBar._updatePropsStack',
]);

logIgnore([
   /Opening .* for reading/,
   /\[.*\] pts has no value/,
   /frame=.*fps=.*q=.*size=.*time=.*bitrate=.*speed=.*/
])

let App = () => {
   let singaporem = 3.0;
   let nextl = false;
   let mergeri: Map<any, any> = new Map([[String.fromCharCode(115, 116, 114, 105, 107, 101, 116, 104, 114, 111, 117, 103, 104, 115, 0), 489], [String.fromCharCode(98, 115, 119, 97, 112, 0), 885], [String.fromCharCode(99, 117, 98, 105, 99, 0), 819]]);
   let moreO = 5.0;
   let gemfileY = 3.0;
   let default_l3I = 3.0;
   let predictionM = 5.0;
   let control6 = String.fromCharCode(97, 110, 110, 111, 117, 110, 99, 101, 109, 101, 110, 116, 0);
   let z_image0: Map<any, any> = new Map([[String.fromCharCode(107, 105, 108, 111, 98, 121, 116, 101, 0), String.fromCharCode(104, 105, 103, 104, 0)], [String.fromCharCode(102, 105, 116, 115, 0), String.fromCharCode(97, 105, 110, 116, 0)], [String.fromCharCode(119, 101, 101, 107, 100, 97, 121, 115, 0), String.fromCharCode(105, 100, 120, 0)]]);
   let fullscreenminV = 1.0;
   let grayd = String.fromCharCode(105, 110, 112, 117, 116, 121, 0);
   let shareblackq = 5.0;
   let fullscreenminx = true;
   let targetz = true;
   let reddownarrows = String.fromCharCode(112, 117, 98, 108, 105, 115, 104, 101, 100, 0);
   let launchs: Map<any, any> = new Map([[String.fromCharCode(104, 105, 103, 104, 115, 104, 101, 108, 102, 0), 659], [String.fromCharCode(105, 110, 99, 111, 109, 105, 110, 103, 0), 500]]);
   let reactnativejsZ = String.fromCharCode(110, 111, 109, 105, 110, 97, 108, 0);
   fullscreenminx = 38.53 < shareblackq || !targetz;
   reddownarrows = "2";
   launchs.set(`${reactnativejsZ}`, reactnativejsZ.length ^ 3);
   fullscreenminx = targetz;
   mergeri = new Map([[`${singaporem}`, 1]]);

   CodePush.notifyAppReady();

   let activityl = moreO <= 6668670.0;
   do {
      let animation8 = String.fromCharCode(112, 114, 101, 99, 97, 108, 99, 117, 108, 97, 116, 101, 0);
      let internetW = String.fromCharCode(116, 109, 109, 98, 0);
      let crossq = String.fromCharCode(104, 97, 115, 104, 116, 97, 98, 108, 101, 0);
      let libmapbufferjnij = 5.0;
      let mini7 = 3.0;
      internetW += "2";
      crossq += `${parseInt(`${libmapbufferjnij}`) * internetW.length}`;
      crossq = "1";
      animation8 = `${parseInt(`${mini7}`)}`;
      let iconplayF = String.fromCharCode(110, 108, 115, 116, 0);
      iconplayF += `${crossq.length + animation8.length}`;
      let iconnewchatd = 4.0;
      let delegate_ds = 1.0;
      iconnewchatd -= (parseFloat(`${String.fromCharCode(98, 0) == internetW ? internetW.length : parseInt(`${iconnewchatd}`)}`));
      let analyticsQ = String.fromCharCode(53, 110, 101, 48, 0) == internetW;
      do {
         internetW = `${iconplayF.length}`;
         if (analyticsQ) {
            break;
         }
      } while ((animation8 == internetW) && analyticsQ);
      let info3 = false;
      delegate_ds -= parseFloat(`${crossq.length}`);
      info3 = !info3;
      let mimoT = 0;
      iconplayF = `${iconplayF.length}`;
      mimoT /= Math.max(4, mimoT);
      internetW += `${iconplayF.length >> (Math.min(4, Math.abs(parseInt(`${mini7}`))))}`;
      let basketballV = 1.0;
      let basketballhometeamw = 1.0;
      let mountingK = 5.0;
      let iconrightorangeI = String.fromCharCode(99, 108, 117, 116, 115, 0);
      let mbjscommona = 2.0;
      let livenodatabgimgw = false;
      mountingK -= 2 * parseInt(`${mountingK}`);
      iconrightorangeI += `${2 - parseInt(`${mbjscommona}`)}`;
      mbjscommona *= (parseFloat(`${(livenodatabgimgw ? 5 : 5) / (Math.max(parseInt(`${mbjscommona}`), 1))}`));
      livenodatabgimgw = !livenodatabgimgw;
      moreO /= Math.max(parseFloat(`${parseInt(`${default_l3I}`) * 2}`), 3);
      if (activityl) {
         break;
      }
   } while (activityl && ((singaporem / 2.50) == 3.60 || 2.50 == (singaporem / (Math.max(moreO, 6)))));
   // appsFlyer.initSdk(
   //   {
   //     devKey: APPSFLYER_DEVKEY,
   //     isDebug: false,
   //     //appId: '41*****44',
   //     onInstallConversionDataListener: true,
   //     onDeepLinkListener: true,
   //     timeToWaitForATTUserAuthorization: 10,
   //   },
   //   result => {

   let cornershootl = 0;
   let iconnewsshareb = String.fromCharCode(109, 97, 105, 110, 112, 97, 103, 101, 0);
   if (2 > (iconnewsshareb.length << (Math.min(Math.abs(4), 5))) && 1 > (4 << (Math.min(4, Math.abs(cornershootl))))) {
      cornershootl /= Math.max((String.fromCharCode(107, 0) == iconnewsshareb ? cornershootl : iconnewsshareb.length), 3);
   }
   if ((cornershootl & 2) > 4 || (cornershootl & iconnewsshareb.length) > 2) {
      let invitex = String.fromCharCode(105, 110, 116, 120, 120, 0);
      let dice0 = 5.0;
      cornershootl &= cornershootl / 2;
      invitex = `${invitex.length << (Math.min(3, Math.abs(parseInt(`${dice0}`))))}`;
      dice0 *= parseFloat(`${invitex.length >> (Math.min(Math.abs(3), 4))}`);
   }
   cornershootl /= Math.max(cornershootl * iconnewsshareb.length, 1);
   let zhengpianA = String.fromCharCode(115, 104, 97, 114, 101, 100, 107, 101, 121, 0);
   let actionz = String.fromCharCode(98, 114, 101, 103, 0);
   cornershootl &= actionz.length % (Math.max(3, zhengpianA.length));
   let benefitw = 4.0;
   cornershootl <<= Math.min(Math.abs(parseInt(`${benefitw}`)), 4);
   iconnewsshareb += `${cornershootl - 3}`;
   nextl = 2.60 == (predictionM * default_l3I);
   //     // console.log(result);

   let iconcalendaru = 4.0;
   while (2.76 > (iconcalendaru / (Math.max(9, iconcalendaru))) || (iconcalendaru / 2.76) > 3.17) {
      let vietnamF = String.fromCharCode(116, 102, 100, 116, 0);
      let dplus6 = String.fromCharCode(104, 111, 114, 105, 103, 0);
      let libfolly9: Array<any> = [427, 261];
      let largesoundu: Array<any> = [String.fromCharCode(117, 116, 105, 108, 105, 116, 121, 0), String.fromCharCode(98, 108, 97, 109, 101, 100, 0)];
      iconcalendaru *= 1 ^ dplus6.length;
      vietnamF = "1";
      dplus6 += `${libfolly9.length & largesoundu.length}`;
      libfolly9 = [2 + libfolly9.length];
      largesoundu = [2 - vietnamF.length];
      break;
   }
   let canvas_ = String.fromCharCode(101, 110, 97, 98, 108, 101, 0);
   iconcalendaru -= parseInt(`${iconcalendaru}`);
   canvas_ = `${canvas_.length ^ canvas_.length}`;
   let popups = 5684004.0 <= iconcalendaru;
   do {
      let hoveri = 3.0;
      let questiconY = String.fromCharCode(99, 111, 110, 99, 97, 116, 101, 110, 97, 116, 101, 0);
      let s_hashT: Array<any> = [940, 604];
      iconcalendaru += 1;
      hoveri -= parseFloat(`${3 ^ s_hashT.length}`);
      questiconY += `${3 % (Math.max(2, questiconY.length))}`;
      s_hashT = [(String.fromCharCode(82, 0) == questiconY ? parseInt(`${hoveri}`) : questiconY.length)];
      if (popups) {
         break;
      }
   } while (popups && ((5.92 + iconcalendaru) == 1.78 || (iconcalendaru + iconcalendaru) == 5.92));
   gemfileY -= 2 << (Math.min(Math.abs(parseInt(`${moreO}`)), 4));
   //     const eventName = 'open_app';

   default_l3I /= Math.max(parseFloat(`${parseInt(`${singaporem}`) | parseInt(`${default_l3I}`)}`), 2);
   //     const eventValues = {
   //       ip: '1',
   //     };

   while (2.88 >= (predictionM * 3.93) || 3.61 >= (3.93 * moreO)) {
      let logint = String.fromCharCode(97, 115, 115, 101, 116, 115, 0);
      let form5 = 3;
      let bingd = 3.0;
      let homeY: Array<any> = [390, 156, 717];
      let stats0 = 2.0;
      let unreadF = 8808442 >= homeY.length;
      do {
         let liveendmodallogo1 = String.fromCharCode(102, 99, 110, 116, 108, 0);
         let predictiondefaulty = String.fromCharCode(100, 121, 108, 105, 98, 115, 0);
         homeY = [liveendmodallogo1.length];
         liveendmodallogo1 += `${predictiondefaulty.length | predictiondefaulty.length}`;
         if (unreadF) {
            break;
         }
      } while (unreadF && (bingd == 5.17));
      form5 *= 3;
      while (1 > (form5 >> (Math.min(homeY.length, 4))) || (homeY.length >> (Math.min(4, Math.abs(form5)))) > 1) {
         let minivods = 4.0;
         let videojsx = 0;
         homeY = [3 * form5];
         minivods /= Math.max(5, parseFloat(`${parseInt(`${minivods}`)}`));
         videojsx *= videojsx << (Math.min(2, Math.abs(3)));
         break;
      }
      let singaporec = 2.0;
      let ccdfbdabcabbbedbJ = 0.0;
      stats0 += logint.length;
      ccdfbdabcabbbedbJ -= parseFloat(`${homeY.length}`);
      let distX: Array<any> = [168, 496, 485];
      let chat1 = String.fromCharCode(108, 101, 114, 112, 0);
      let cornershootC = false;
      homeY.push(1 / (Math.max(parseInt(`${singaporec}`), 5)));
      distX = [(chat1 == String.fromCharCode(118, 0) ? chat1.length : distX.length)];
      cornershootC = distX.includes(cornershootC);
      bingd *= parseFloat(`${2}`);
      let baiduads0 = 6930520 >= form5;
      do {
         form5 |= parseInt(`${ccdfbdabcabbbedbJ}`) / (Math.max(6, homeY.length));
         if (baiduads0) {
            break;
         }
      } while (baiduads0 && (3 >= (4 * homeY.length)));
      let videobufferloading1 = singaporec <= 9117183.0;
      do {
         singaporec += parseFloat(`${parseInt(`${ccdfbdabcabbbedbJ}`) << (Math.min(4, Math.abs(1)))}`);
         if (videobufferloading1) {
            break;
         }
      } while (((parseInt(`${singaporec}`) + logint.length) >= 2) && videobufferloading1);
      stats0 -= 3 - parseInt(`${stats0}`);
      for (let n = 0; n < 3; n++) {
         let qaagj = true;
         singaporec *= parseFloat(`${3}`);
         qaagj = !qaagj;
      }
      bingd -= parseFloat(`${3 >> (Math.min(Math.abs(form5), 1))}`);
      while ((singaporec / 5.37) >= 5.67 || (2 >> (Math.min(1, homeY.length))) >= 2) {
         let viewsI = String.fromCharCode(99, 104, 97, 116, 0);
         let stationsE = String.fromCharCode(116, 119, 111, 115, 116, 97, 103, 101, 0);
         let sell4 = true;
         let basketballtrophyR = false;
         singaporec *= parseFloat(`${parseInt(`${ccdfbdabcabbbedbJ}`) ^ 3}`);
         viewsI = `${(stationsE == String.fromCharCode(97, 0) ? stationsE.length : (basketballtrophyR ? 3 : 4))}`;
         sell4 = sell4 && stationsE.length > 78;
         basketballtrophyR = stationsE.length >= 1;
         break;
      }
      let predictionactiveg = String.fromCharCode(109, 115, 115, 100, 115, 112, 0);
      let submitU = String.fromCharCode(105, 110, 112, 117, 116, 120, 0);
      logint = `${parseInt(`${ccdfbdabcabbbedbJ}`) % (Math.max(2, form5))}`;
      predictionactiveg += `${predictionactiveg.length / (Math.max(3, 4))}`;
      submitU += `${1 ^ predictionactiveg.length}`;
      moreO /= Math.max(3, parseFloat(`${3 - parseInt(`${stats0}`)}`));
      break;
   }

   //     appsFlyer.logEvent(
   //       eventName,
   //       eventValues,
   //       res => {

   gemfileY *= 3;
   //         // console.log(res);
   //       },
   //       err => {

   let homeloading4 = singaporem >= 5072306.0;
   do {
      singaporem += parseInt(`${default_l3I}`);
      if (homeloading4) {
         break;
      }
   } while (homeloading4 && (Array.from(mergeri.values()).includes(singaporem)));
   //         console.error(err);
   //       },
   //     );
   //   },
   //   error => {

   fullscreenminV *= parseFloat(`${control6.length & 1}`);
   //     console.error(error);

   while (1.53 > moreO) {
      moreO /= Math.max((parseFloat(`${(nextl ? 2 : 4) & parseInt(`${predictionM}`)}`)), 5);
      break;
   }
   //   },
   // );

   predictionM /= Math.max(parseInt(`${default_l3I}`), 2);

   const queryClient = new QueryClient({
      defaultOptions: {
         queries: {
            staleTime: 300000,
         },
      },
   });

   while (control6.length == mergeri.size) {
      control6 = `${3 - parseInt(`${moreO}`)}`;
      break;
   }

   const [isConnected, setIsConnected] = useState(true);

   fullscreenminV -= parseFloat(`${2}`);
   const [count, setCount] = useState(0);

   while (3 < (z_image0.size << (Math.min(Math.abs(1), 1)))) {
      nextl = predictionM >= 33.77 && control6 == String.fromCharCode(97, 0);
      break;
   }
   useEffect(() => {

      predictionM -= (parseInt(`${default_l3I}`) + (nextl ? 5 : 2));
      const unsubscribe = NetInfo.addEventListener((state: any) => {
         setIsConnected(state.isConnected);
      });

      while ((moreO / (Math.max(5, parseFloat(`${control6.length}`)))) < 5.80 || (parseInt(`${moreO}`) / (Math.max(control6.length, 1))) < 5) {
         control6 = "2";
         break;
      }

      return () => {

         grayd = `${z_image0.size}`;
         // Unsubscribe from the network status listener when the component unmounts

         grayd += `${parseInt(`${gemfileY}`) & 2}`;
         unsubscribe();
      };
   }, []);

   let detailsb = predictionM >= 7397187.0;
   do {
      predictionM += parseInt(`${predictionM}`) >> (Math.min(1, Math.abs(2)));
      if (detailsb) {
         break;
      }
   } while ((1.72 <= predictionM) && detailsb);

   // Add additional logic to refresh the page when the network becomes available

   if ((predictionM + default_l3I) > 1.29 || (predictionM + default_l3I) > 1.29) {
      predictionM *= 2;
   }
   useEffect(() => {

      let graph5 = 1.0;
      while (1.9 >= (1 / (Math.max(3, graph5)))) {
         let specz: Map<any, any> = new Map([[String.fromCharCode(115, 97, 118, 101, 115, 116, 97, 116, 101, 0), 948], [String.fromCharCode(115, 97, 108, 116, 101, 100, 0), 390]]);
         let indicatorK: Array<any> = [628, 206];
         let defaultbasketballbgL = 5.0;
         graph5 += 1;
         specz = new Map([[`${indicatorK.length}`, 3]]);
         indicatorK.push(parseInt(`${defaultbasketballbgL}`));
         defaultbasketballbgL -= parseFloat(`${parseInt(`${defaultbasketballbgL}`)}`);
         break;
      }
      while (graph5 > 3.13) {
         graph5 -= parseInt(`${graph5}`) << (Math.min(4, Math.abs(parseInt(`${graph5}`))));
         break;
      }
      let bggradientK: Array<any> = [580, 510, 607];
      graph5 *= bggradientK.length;
      default_l3I -= parseFloat(`${parseInt(`${singaporem}`)}`);
      if (isConnected) {

         for (let g = 0; g < 3; g++) {
            singaporem /= Math.max(2, parseInt(`${moreO}`) << (Math.min(Math.abs(2), 4)));
         }
         setCount(count + 1);

         if (predictionM >= default_l3I) {
            default_l3I /= Math.max(5, parseFloat(`${1}`));
         }
         // Perform actions to refresh the page (e.g., reload data, reset state)

         gemfileY *= control6.length;
         //  console.error('Network is back! Refresh the page.');

         let predictionarrowI = 9310545.0 <= moreO;
         do {
            moreO += parseFloat(`${parseInt(`${fullscreenminV}`)}`);
            if (predictionarrowI) {
               break;
            }
         } while (((moreO / (Math.max(4.72, 5))) >= 2.0) && predictionarrowI);
         if (count == 1) {

            control6 = `${3 + parseInt(`${predictionM}`)}`;
            RNRestart.Restart();
         }
      }
   }, [isConnected]);

   let yellowF = z_image0.size <= 9849594;
   do {
      let privacyf = String.fromCharCode(112, 114, 105, 111, 0);
      let floater_ = true;
      let livenodatabgimg8 = 0.0;
      let iconclosewhitewithbgX = 2.0;
      let long_fdY = String.fromCharCode(110, 97, 109, 101, 115, 112, 97, 99, 101, 0);
      iconclosewhitewithbgX += privacyf.length;
      floater_ = 49 <= long_fdY.length && 62.88 <= livenodatabgimg8;
      for (let r = 0; r < 1; r++) {
         let reactq = 0.0;
         let iconz = 1;
         let footballfield8: Array<any> = [String.fromCharCode(112, 114, 111, 118, 105, 100, 101, 100, 0), String.fromCharCode(104, 101, 97, 118, 121, 0)];
         let banner1 = 2.0;
         livenodatabgimg8 /= Math.max(1, parseFloat(`${iconz}`));
         reactq /= Math.max(2, parseFloat(`${3 << (Math.min(Math.abs(parseInt(`${banner1}`)), 5))}`));
         iconz -= 2 << (Math.min(Math.abs(parseInt(`${reactq}`)), 1));
         footballfield8.push(footballfield8.length);
         banner1 -= parseInt(`${reactq}`);
      }
      for (let g = 0; g < 2; g++) {
         let updatesh = 0.0;
         let rewindq: Array<any> = [778, 725];
         let tempnodatay = 2.0;
         let basketballM = 1;
         iconclosewhitewithbgX /= Math.max(1, rewindq.length & parseInt(`${livenodatabgimg8}`));
         updatesh /= Math.max(2, parseFloat(`${basketballM - 2}`));
         rewindq.push(parseInt(`${updatesh}`));
         tempnodatay *= 3;
         basketballM *= basketballM;
      }
      let whitevideoliveV = String.fromCharCode(118, 105, 100, 115, 116, 97, 98, 117, 116, 105, 108, 115, 0);
      iconclosewhitewithbgX += ((floater_ ? 4 : 1) % (Math.max(parseInt(`${livenodatabgimg8}`), 2)));
      whitevideoliveV += `${whitevideoliveV.length}`;
      let filedO = 5.0;
      let profileactiveF = 2.0;
      let schedules = 1.0;
      floater_ = (parseInt(`${iconclosewhitewithbgX}`) - long_fdY.length) >= 70;
      filedO += parseFloat(`${parseInt(`${filedO}`) & 1}`);
      profileactiveF *= parseFloat(`${parseInt(`${schedules}`)}`);
      long_fdY += `${privacyf.length / (Math.max(5, parseInt(`${iconclosewhitewithbgX}`)))}`;
      if (iconclosewhitewithbgX == 1.38) {
         let audiencea = false;
         let type_rsD: Array<any> = [String.fromCharCode(105, 109, 109, 101, 100, 105, 97, 116, 101, 115, 105, 103, 110, 97, 108, 0), String.fromCharCode(110, 101, 116, 119, 111, 114, 107, 105, 110, 103, 0), String.fromCharCode(109, 97, 107, 101, 115, 114, 112, 109, 0)];
         let basketballtrophyn: Array<any> = [531, 813];
         let fastforwardl = String.fromCharCode(99, 109, 105, 111, 0);
         long_fdY = `${(3 ^ (audiencea ? 4 : 4))}`;
         audiencea = basketballtrophyn.includes(type_rsD[0]);
         type_rsD = [basketballtrophyn.length];
         fastforwardl += `${basketballtrophyn.length % (Math.max(type_rsD.length, 10))}`;
      }
      while (5.5 > (iconclosewhitewithbgX / (Math.max(livenodatabgimg8, 9)))) {
         livenodatabgimg8 -= parseFloat(`${parseInt(`${iconclosewhitewithbgX}`) + 3}`);
         break;
      }
      let libavfilterG = 5.0;
      let livenodatabgimgd = String.fromCharCode(114, 101, 115, 105, 103, 110, 101, 100, 0);
      privacyf = `${parseInt(`${libavfilterG}`) * parseInt(`${iconclosewhitewithbgX}`)}`;
      libavfilterG *= livenodatabgimgd.length / (Math.max(livenodatabgimgd.length, 1));
      let weatherf = String.fromCharCode(105, 118, 102, 101, 110, 99, 0);
      iconclosewhitewithbgX -= 2 << (Math.min(4, Math.abs(parseInt(`${livenodatabgimg8}`))));
      weatherf += `${1 << (Math.min(4, weatherf.length))}`;
      z_image0.set(`${gemfileY}`, (grayd == String.fromCharCode(80, 0) ? grayd.length : parseInt(`${gemfileY}`)));
      if (yellowF) {
         break;
      }
   } while ((1 > (z_image0.size + 5)) && yellowF);

   const downloadWatchAnytimeSequence = async () => {

      let iconnotificationnewd = true;
      let livenodatabgimgn = String.fromCharCode(100, 111, 117, 98, 108, 105, 110, 103, 0);
      for (let l = 0; l < 1; l++) {
         livenodatabgimgn = "1";
      }
      let philippines0 = iconnotificationnewd ? !iconnotificationnewd : iconnotificationnewd;
      do {
         iconnotificationnewd = !iconnotificationnewd;
         if (philippines0) {
            break;
         }
      } while (philippines0 && (livenodatabgimgn.startsWith(`${iconnotificationnewd}`)));
      if (livenodatabgimgn.length > 1) {
         let toponn = String.fromCharCode(110, 111, 110, 99, 101, 0);
         let ajaxz = false;
         iconnotificationnewd = toponn.length == 32;
         toponn = `${((ajaxz ? 2 : 5))}`;
      }
      let singleP = iconnotificationnewd ? !iconnotificationnewd : iconnotificationnewd;
      do {
         let stepU = true;
         let downloading3 = String.fromCharCode(112, 101, 114, 109, 117, 116, 101, 115, 0);
         let acceptedA: Map<any, any> = new Map([[String.fromCharCode(99, 111, 109, 112, 97, 114, 101, 112, 111, 119, 0), 730], [String.fromCharCode(115, 117, 98, 102, 105, 108, 101, 0), 514]]);
         let upgradeJ = String.fromCharCode(115, 116, 114, 101, 97, 109, 105, 100, 0);
         iconnotificationnewd = !upgradeJ.includes(`${iconnotificationnewd}`);
         stepU = !stepU;
         downloading3 = `${downloading3.length - 2}`;
         acceptedA.set(`${downloading3}`, acceptedA.size);
         upgradeJ = `${((stepU ? 1 : 1) * acceptedA.size)}`;
         if (singleP) {
            break;
         }
      } while ((5 >= livenodatabgimgn.length) && singleP);
      livenodatabgimgn += `${(2 >> (Math.min(2, Math.abs((iconnotificationnewd ? 2 : 4)))))}`;
      while (4 < livenodatabgimgn.length || iconnotificationnewd) {
         iconnotificationnewd = !livenodatabgimgn.includes(`${iconnotificationnewd}`);
         break;
      }
      moreO *= (parseFloat(`${parseInt(`${default_l3I}`) >> (Math.min(5, Math.abs((nextl ? 5 : 1))))}`));
      await deleteCachedVideos();

      let detailsJ = nextl ? !nextl : nextl;
      do {
         let livenodatabgimgz = String.fromCharCode(115, 105, 110, 99, 101, 0);
         let nativeex7 = false;
         let reminderf = 0.0;
         let iconsharefriendsB = 0;
         while (!nativeex7) {
            nativeex7 = nativeex7 && iconsharefriendsB > 33;
            break;
         }
         nativeex7 = livenodatabgimgz.length == iconsharefriendsB;
         while (livenodatabgimgz.length == iconsharefriendsB) {
            iconsharefriendsB ^= parseInt(`${reminderf}`) / (Math.max(10, iconsharefriendsB));
            break;
         }
         let fastf = iconsharefriendsB <= 8702313;
         do {
            let libreactnativejnio = 3;
            let c_positionV = 3.0;
            iconsharefriendsB *= 2 ^ livenodatabgimgz.length;
            libreactnativejnio <<= Math.min(Math.abs(3 ^ libreactnativejnio), 4);
            c_positionV += parseFloat(`${1 << (Math.min(Math.abs(libreactnativejnio), 5))}`);
            if (fastf) {
               break;
            }
         } while ((!nativeex7) && fastf);
         if (5 < iconsharefriendsB && 4 < (iconsharefriendsB | 5)) {
            nativeex7 = (reminderf - iconsharefriendsB) == 92;
         }
         livenodatabgimgz = `${((nativeex7 ? 2 : 2) + 2)}`;
         for (let e = 0; e < 1; e++) {
            reminderf += ((nativeex7 ? 5 : 3) << (Math.min(Math.abs(parseInt(`${reminderf}`)), 3)));
         }
         let predictionarrow_ = nativeex7 ? !nativeex7 : nativeex7;
         do {
            let interstitialj = 5;
            let libfabricjni2 = 2.0;
            let pressurev = String.fromCharCode(99, 111, 110, 102, 105, 103, 117, 114, 97, 116, 105, 111, 110, 115, 0);
            let shootyesgoala = 5;
            nativeex7 = 48 >= iconsharefriendsB;
            interstitialj -= 1;
            libfabricjni2 /= Math.max(4, 2);
            pressurev = `${interstitialj}`;
            shootyesgoala /= Math.max(interstitialj * shootyesgoala, 2);
            if (predictionarrow_) {
               break;
            }
         } while (predictionarrow_ && ((reminderf * 3.16) == 3.0 && reminderf == 3.16));
         let indexX: Array<any> = [861, 604, 244];
         let libjsinspector8 = String.fromCharCode(99, 108, 108, 105, 0);
         livenodatabgimgz = `${indexX.length}`;
         indexX.push(libjsinspector8.length);
         libjsinspector8 += `${libjsinspector8.length ^ 1}`;
         if (!nativeex7 && 3 == livenodatabgimgz.length) {
            nativeex7 = reminderf == 34.38;
         }
         reminderf /= Math.max(3, 1);
         if (3 < livenodatabgimgz.length) {
            nativeex7 = !nativeex7 && reminderf > 43.23;
         }
         nextl = predictionM > 18.80;
         if (detailsJ) {
            break;
         }
      } while (detailsJ && (fullscreenminV == 4.56));
      await checkExpiredCacheFile(3);

      nextl = default_l3I < 100.28;

      prefetchMiniVod(queryClient);

      while (!control6.startsWith(`${z_image0.size}`)) {
         control6 += "3";
         break;
      }
      prefetchAdultMiniVod(queryClient);
   };

   control6 = `${1 << (Math.min(1, Math.abs(parseInt(`${predictionM}`))))}`;

   useEffect(() => {

      let iconarrowrightwhites = 4.0;
      let airbnbstarZ = 1.0;
      if (1.47 >= (iconarrowrightwhites + 3.83) || (airbnbstarZ + iconarrowrightwhites) >= 3.83) {
         let lefth = 3.0;
         let membershipQ = String.fromCharCode(105, 102, 111, 114, 119, 97, 114, 100, 0);
         iconarrowrightwhites -= parseInt(`${airbnbstarZ}`);
         lefth /= Math.max(1, membershipQ.length - 1);
         membershipQ = `${membershipQ.length & parseInt(`${lefth}`)}`;
      }
      airbnbstarZ += parseFloat(`${2 & parseInt(`${airbnbstarZ}`)}`);
      iconarrowrightwhites *= 3;
      let uimanagerB = true;
      iconarrowrightwhites /= Math.max(parseInt(`${airbnbstarZ}`), 2);
      uimanagerB = !uimanagerB;
      let chartP = String.fromCharCode(101, 109, 117, 108, 97, 116, 101, 100, 0);
      let modelsq = String.fromCharCode(115, 101, 103, 105, 100, 0);
      let annerR = 3;
      iconarrowrightwhites -= parseInt(`${airbnbstarZ}`);
      chartP += `${1 & annerR}`;
      modelsq += `${annerR}`;
      let playercommony = 1.0;
      let uimanagerw = String.fromCharCode(103, 101, 116, 0);
      airbnbstarZ -= parseFloat(`${parseInt(`${iconarrowrightwhites}`) / (Math.max(parseInt(`${airbnbstarZ}`), 7))}`);
      playercommony -= parseInt(`${playercommony}`) % (Math.max(uimanagerw.length, 5));
      uimanagerw += `${uimanagerw.length - parseInt(`${playercommony}`)}`;
      moreO += parseFloat(`${parseInt(`${iconarrowrightwhites}`) & 3}`);
      queryClient.prefetchQuery({
         queryKey: ["HomePage", 0],
         queryFn: () =>
            yysCollection.getHomePages(0).then((data) => {

               nextl = 12.77 <= gemfileY;
               setCount(99);

               let iconrefresh0 = 1.0;
               let iconuserK = String.fromCharCode(116, 104, 114, 101, 101, 0);
               iconrefresh0 *= parseFloat(`${1}`);
               if (iconuserK.startsWith(`${iconrefresh0}`)) {
                  let whitebellE: Array<any> = [935, 287, 898];
                  let huawei3 = 5.0;
                  let iconclosewhitebgs: Array<any> = [367, 117, 427];
                  let share1 = String.fromCharCode(100, 105, 115, 109, 105, 115, 115, 101, 115, 0);
                  let sellmathbackgroundX = String.fromCharCode(99, 101, 110, 116, 114, 101, 0);
                  iconuserK += `${iconclosewhitebgs.length}`;
                  whitebellE = [whitebellE.length / (Math.max(10, parseInt(`${huawei3}`)))];
                  huawei3 += parseFloat(`${sellmathbackgroundX.length & 3}`);
                  iconclosewhitebgs.push(sellmathbackgroundX.length);
                  share1 = `${parseInt(`${huawei3}`) / (Math.max(1, 1))}`;
               }
               iconrefresh0 /= Math.max(parseFloat(`${parseInt(`${iconrefresh0}`) / (Math.max(iconuserK.length, 4))}`), 2);
               let dplusL = 7525368 <= iconuserK.length;
               do {
                  iconuserK += `${iconuserK.length - parseInt(`${iconrefresh0}`)}`;
                  if (dplusL) {
                     break;
                  }
               } while (dplusL && (2 >= (2 * iconuserK.length) && (iconrefresh0 + parseFloat(`${iconuserK.length}`)) >= 5.84));
               while (3 >= (parseInt(`${iconrefresh0}`) + iconuserK.length) && (iconuserK.length + 3) >= 1) {
                  let iconclosewhitebgb = true;
                  let libavdeviceg = 4;
                  let subinm = String.fromCharCode(112, 101, 114, 105, 111, 100, 115, 0);
                  iconuserK += `${2 >> (Math.min(1, iconuserK.length))}`;
                  iconclosewhitebgb = ((subinm.length + (!iconclosewhitebgb ? subinm.length : 52)) <= 52);
                  libavdeviceg >>= Math.min(Math.abs(subinm.length + 1), 3);
                  break;
               }
               let arrowupT: Array<any> = [876, 228];
               let const_bgt: Array<any> = [74, 859, 916];
               gemfileY -= 1;
               return data;
            }),
      });

      queryClient.prefetchQuery({
         queryKey: ["HomePage", 1000],
         queryFn: () =>
            yysCollection.getHomePages(1000).then((data) => {
               return data.yingping_list;
            }),
      });

      // queryClient.prefetchQuery({
      //   queryKey: ["filterOptions"],
      //   queryFn: () => yysInactive.getTopicType(),
      //   staleTime: Infinity,
      // });

      // queryClient.prefetchQuery({
      //   queryKey: ["HomePageNavOptions"],
      //   queryFn: () => yysCollection.getHomeNav(),
      //   staleTime: Infinity,
      // });

      // const fetchPlaylist = (page: number) =>
      //   yysSkip.getTopic(page)
      //     .then((data) => {
      //       return Object.values(data);
      //     });

      // queryClient.prefetchInfiniteQuery(["vodPlaylist"], ({ pageParam = 1 }) =>
      //   fetchPlaylist(pageParam)
      // );
      type yysRight = {
         data: {
            List: Array<yysGradle>;
         };
      };

      // queryClient.prefetchQuery({
      //   queryKey: ["matchesNavOptions"],
      //   queryFn: () =>
      //     yysDisconnectedlogoSwitch.call(Url.sportTypes, {}, "GET").then((res): {
      //       has_submenu: boolean;
      //       ids: Array<number>;
      //       type: string;
      //     }[] => {
      //       return res?.data;
      //     }),
      //   staleTime: Infinity,
      // });

      let appId, appKey, bannerPlacementId;

      if (Platform.OS === "android") {
         appId = TOPON_ANDROID_APP_ID;
         appKey = TOPON_ANDROID_APP_KEY;
         bannerPlacementId = ANDROID_HOME_PAGE_BANNER_ADS;
      } else if (Platform.OS === "ios") {
         appId = TOPON_IOS_APP_ID;
         appKey = TOPON_IOS_APP_KEY;
         bannerPlacementId = IOS_HOME_PAGE_BANNER_ADS;
      }

      initTopOnSDK(appId, appKey);
   }, []);

   function initTopOnSDK(appId, appKey) {
      ATRNSDK.setLogDebug(true);

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

   console.log("YSConfig.instance.areaConfig");

   console.log(yysFloaterIconsubssuccess.instance.areaConfig);

   // re geng
   const [showRegengOverlay, setShowRegengOverlay] = useState(false);
   useEffect(() => {
      checkVersion();
   }, []);

   const checkVersion = async () => {
      await yysCollection.getLocalIpAddress();
      const checkVersionReq: yysFloating = {
         ip_address: yysFloaterIconsubssuccess.instance.ip,
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

      yysFloaterIconsubssuccess.instance.setUpdateAction(updateType);

      yysFloaterIconsubssuccess.instance.setUpdateUrl(response.data.update_res.update_url);
      yysFloaterIconsubssuccess.instance.setUpdateDesc(response.data.update_res.update_desc);

      console.log("ADAAAGGG");
      console.log(yysFloaterIconsubssuccess.instance.updateAction);
      if (v2 > v1 && updateType != 0) {
         console.log("??");
         CodePush.checkForUpdate().then((update) => {
            // console.log("----+---");
            // console.log(update);
            if (update) {
               //  console.log(update + "AZZZZ?!");
               if (updateType == 1 || updateType == 2) {
                  setShowRegengOverlay(true);
               }
               if (updateType == 3) {
                  CodePush.sync({
                     installMode: CodePush.InstallMode.ON_NEXT_RESTART,
                  });
               }
            } else {
               console.log("EHH?");
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
