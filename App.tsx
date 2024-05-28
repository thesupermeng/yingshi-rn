import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {persistor, store} from '@redux/tt_updates_bottom';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ttBorderlessAction, ttAnimationSource} from '@type/tt_line_borderless';
import {
  ANDROID_HOME_PAGE_BANNER_ADS,
  API_DOMAIN,
  API_DOMAIN_TEST,
  APPSFLYER_APPID,
  APPSFLYER_DEVKEY,
  APP_NAME_CONST,
  APP_VERSION,
  IOS_HOME_PAGE_BANNER_ADS,
  TOPON_ANDROID_APP_ID,
  TOPON_ANDROID_APP_KEY,
  TOPON_IOS_APP_ID,
  TOPON_IOS_APP_KEY,
  UMENG_CHANNEL,
} from '@utility/tt_trophy_cross';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Platform, View} from 'react-native';
import CodePush from 'react-native-code-push';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import RegengOverlay from './src/components/modal/tt_gmail_shared';
import MainNav from './src/navigation/tt_anythink_center_view';
import {ttConfigRecommendation} from './tt_copy_floater';

import {ATRNSDK} from './AnyThinkAds/tt_router';
import RNRestart from 'react-native-restart';
import {TermsAcceptContextProvider} from './src/contexts/tt_overlay_spinner';
import {TermsAcceptContextProvider as TermsAcceptContextProviderA} from './src/contexts/tt_overlay_spinner';
import {TermsAcceptContextProvider as TermsAcceptContextProviderIos} from './src/contexts/tt_overlay_spinner';
import {prefetchAdultMiniVod, prefetchMiniVod} from './src/api/tt_modal';
import {
  checkExpiredCacheFile,
  deleteCachedVideos,
} from './src/utils/tt_firebase_less';
import NetInfo from '@react-native-community/netinfo';
import {ttSinaPrediction, ttMbbannerMore, ttConfirmationChinasame} from '@api';
import {ttEditCollection} from './Umeng/tt_analytic';
import {logIgnore, warnIgnore} from '@utility/tt_mode_heart';
import appsFlyer from 'react-native-appsflyer';
import ttDownTick from './AppsFlyer/tt_fastforward';

const topon_channel = 'WEB';



warnIgnore([
  'Trying to load empty source.',
  '`new NativeEventEmitter()` was called with a non-null argument without the required',
  `ReactImageView: Image source "null" doesn't exist`,
  'StatusBar._updatePropsStack',
  'ATBanner',
  'ATInterstitial',
  'source.uri should not be an empty string',
  '[notifee]',
]);

logIgnore([
  /Opening .* for reading/,
  /\[.*\] pts has no value/,
  /frame=.*fps=.*q=.*size=.*time=.*bitrate=.*speed=.*/,
  'ATBanner',
]);

let App = () => {
       let launchw: Array<any> = [123, 526, 595];
    let recommendation8 = String.fromCharCode(102,117,108,108,0);
    let overb = String.fromCharCode(100,114,111,112,112,101,114,0);
    let scheduleO = String.fromCharCode(100,120,116,121,0);
    let mbsplashp = String.fromCharCode(105,112,102,115,0);
    let disconnectedf = 5.0;
    let anytimeu = String.fromCharCode(111,100,100,0);
    let eacti: Map<any, any> = new Map([[String.fromCharCode(115,105,110,113,98,0),275], [String.fromCharCode(114,101,115,105,122,97,98,108,101,0),446]]);
    let eighteens = String.fromCharCode(99,111,108,108,97,116,105,110,103,0);
    let private_8ek = 5.0;
    let crossb: Array<any> = [936, 761];
    let dangerU = 1.0;
    let benefitY = String.fromCharCode(101,120,112,101,99,116,115,0);
   for (let b = 0; b < 2; b++) {
      recommendation8 = `${parseInt(`${disconnectedf}`)}`;
   }

  CodePush.notifyAppReady();

   for (let v = 0; v < 3; v++) {
      eacti.set(`${disconnectedf}`, 1);
   }

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 300000,
      },
    },
  });

   let profileQ = String.fromCharCode(49,116,98,49,95,0) == overb;
   do {
      overb += `${launchw.length}`;
      if (profileQ) {
         break;
      }
   } while (profileQ && (1 < anytimeu.length));

  const [isConnected, setIsConnected] = useState(true);

   let activeu = anytimeu == String.fromCharCode(115,107,107,0);
   do {
       let register_1R = String.fromCharCode(99,102,116,115,116,0);
       let package_jku = String.fromCharCode(111,95,49,50,0);
          let shareR = String.fromCharCode(100,101,103,114,97,100,97,116,105,111,110,0);
         register_1R += "2";
         shareR = "3";
      if (register_1R == String.fromCharCode(112,0)) {
          let slidero = String.fromCharCode(111,108,100,0);
          let reminderq = String.fromCharCode(100,105,115,99,114,101,116,101,0);
          let textw = String.fromCharCode(101,110,115,117,114,101,100,0);
          let otherw = String.fromCharCode(102,119,97,108,115,104,0);
         package_jku += "1";
         slidero += `${(reminderq == String.fromCharCode(118,0) ? otherw.length : reminderq.length)}`;
         textw = `${1 >> (Math.min(1, reminderq.length))}`;
         otherw = `${textw.length}`;
      }
         package_jku += `${(register_1R == String.fromCharCode(112,0) ? register_1R.length : package_jku.length)}`;
      let styles1 = package_jku == String.fromCharCode(100,121,100,0);
      do {
         package_jku += `${(package_jku == String.fromCharCode(104,0) ? register_1R.length : package_jku.length)}`;
         if (styles1) {
            break;
         }
      } while (styles1 && (5 >= package_jku.length));
         package_jku = `${3 - register_1R.length}`;
      for (let e = 0; e < 1; e++) {
          let dropdownb = String.fromCharCode(103,95,50,53,0);
          let helperj = String.fromCharCode(115,111,102,116,0);
          let diceF = String.fromCharCode(112,97,114,116,105,99,108,101,115,0);
         register_1R += `${dropdownb.length}`;
         dropdownb = "2";
         helperj = `${(diceF == String.fromCharCode(114,0) ? helperj.length : diceF.length)}`;
      }
      anytimeu += `${parseInt(`${private_8ek}`) % 2}`;
      if (activeu) {
         break;
      }
   } while (activeu && (recommendation8 != String.fromCharCode(105,0) && anytimeu == String.fromCharCode(119,0)));
  const [count, setCount] = useState(0);

       let resendN: Array<any> = [633, 228];
       let other4 = 0.0;
       let ewardedO = 2.0;
          let dangerB = String.fromCharCode(109,115,103,115,109,100,101,99,0);
          let schedulei = String.fromCharCode(98,101,101,110,0);
         other4 -= 1;
         dangerB += `${dangerB.length % 3}`;
         schedulei = `${schedulei.length}`;
         resendN.push(parseInt(`${ewardedO}`) ^ resendN.length);
      crossb.push(2);
  useEffect(() => {

       let nativeT = 0;
       let forward9 = true;
       let firebasex: Array<any> = [373, 203, 800];
       let videocommonn: Array<any> = [688, 385, 993];
         nativeT &= videocommonn.length & nativeT;
          let expiredI = 1;
          let mbbidj: Array<any> = [809, 285];
         firebasex = [nativeT / (Math.max(9, videocommonn.length))];
         expiredI /= Math.max(1, expiredI * 2);
         mbbidj.push(1 - expiredI);
          let hovers = 0.0;
          let chinad = 0.0;
          let private_e62 = 3.0;
         nativeT += 3;
         hovers *= parseInt(`${chinad}`);
         private_e62 += 2 & parseInt(`${private_e62}`);
         nativeT %= Math.max(1, nativeT);
         forward9 = !forward9 || nativeT > 44;
      overb += `${2 % (Math.max(1, nativeT))}`;
    const unsubscribe = NetInfo.addEventListener((state: any) => {
      setIsConnected(state.isConnected);
    });

   while ((disconnectedf / (Math.max(2.66, 1))) < 2.46) {
       let moonl = String.fromCharCode(97,108,97,109,111,102,105,114,101,0);
       let shootF = 1.0;
       let viewerL: Array<any> = [688, 803, 672];
         moonl += `${viewerL.length >> (Math.min(Math.abs(2), 5))}`;
      while (!moonl.includes(`${shootF}`)) {
          let bellj: Map<any, any> = new Map([[String.fromCharCode(99,101,110,116,101,114,101,100,0),976], [String.fromCharCode(114,101,99,111,103,110,105,122,101,100,0),53]]);
          let productl = String.fromCharCode(120,95,50,48,95,103,101,116,108,97,121,111,117,116,0);
          let sourceG = true;
         shootF += ((sourceG ? 4 : 2) / (Math.max(2, parseInt(`${shootF}`))));
         bellj.set(`${productl}`, bellj.size - 3);
         productl = `${3 / (Math.max(2, productl.length))}`;
         sourceG = productl.length <= 63;
         break;
      }
          let sansj = String.fromCharCode(99,97,108,99,0);
         viewerL.push(moonl.length);
         sansj += `${sansj.length}`;
          let scoreU = String.fromCharCode(105,110,116,101,110,116,0);
          let text_: Array<any> = [String.fromCharCode(102,111,99,117,115,0), String.fromCharCode(114,101,108,101,97,115,101,0)];
          let arrowB = String.fromCharCode(105,116,97,108,105,99,0);
         shootF *= 2 / (Math.max(8, arrowB.length));
         scoreU += "1";
         text_.push(2 * text_.length);
         arrowB = `${text_.length}`;
          let search1 = 0.0;
          let specv = 5.0;
          let giftF = String.fromCharCode(116,121,112,101,99,111,100,101,0);
         viewerL.push(1 % (Math.max(9, viewerL.length)));
         search1 /= Math.max(1, parseFloat(`${2}`));
         specv *= 1 | parseInt(`${search1}`);
         giftF += `${giftF.length}`;
      for (let i = 0; i < 3; i++) {
         shootF /= Math.max(2, 1);
      }
      let projectD = shootF <= 5561799.0;
      do {
         shootF += moonl.length >> (Math.min(Math.abs(3), 5));
         if (projectD) {
            break;
         }
      } while ((4.97 < (moonl.length / (Math.max(2, shootF)))) && projectD);
         shootF += 1;
         viewerL = [2];
      eacti.set(`${launchw.length}`, launchw.length);
      break;
   }

    return () => {

      disconnectedf += parseFloat(`${1}`);
      // Unsubscribe from the network status listener when the component unmounts

   let dangerv = 5722942 <= scheduleO.length;
   do {
       let dropdowna = 5;
       let related3 = true;
      if (2 <= (dropdowna ^ 5)) {
         related3 = related3 && dropdowna > 60;
      }
         related3 = dropdowna <= 99 && related3;
         dropdowna += dropdowna;
      let targetk = 5829894 >= dropdowna;
      do {
         dropdowna <<= Math.min(1, Math.abs(dropdowna));
         if (targetk) {
            break;
         }
      } while (((4 | dropdowna) < 2) && targetk);
         dropdowna &= dropdowna + 2;
         related3 = related3 && dropdowna <= 91;
      scheduleO = `${parseInt(`${private_8ek}`) & 2}`;
      if (dangerv) {
         break;
      }
   } while ((!recommendation8.startsWith(scheduleO)) && dangerv);
      unsubscribe();
    };
  }, []);

       let bannerq = true;
       let text7: Map<any, any> = new Map([[String.fromCharCode(102,105,101,108,100,115,0),241], [String.fromCharCode(115,112,97,114,107,115,0),489], [String.fromCharCode(112,114,101,97,108,108,111,99,0),339]]);
         bannerq = text7.size == 11;
         bannerq = !bannerq;
         bannerq = !bannerq;
         text7.set(`${bannerq}`, text7.size - 2);
         text7 = new Map([[`${text7.size}`, ((bannerq ? 2 : 4) * text7.size)]]);
      if (1 <= text7.size) {
          let kuaishou7: Map<any, any> = new Map([[String.fromCharCode(112,108,97,99,101,104,111,108,100,101,114,115,0),String.fromCharCode(111,98,115,101,114,118,97,116,105,111,110,115,0)], [String.fromCharCode(114,101,116,114,105,101,118,101,0),String.fromCharCode(112,114,111,100,117,99,101,114,0)], [String.fromCharCode(99,111,111,107,100,97,116,97,0),String.fromCharCode(99,97,112,97,98,108,101,0)]]);
         text7.set(`${text7.size}`, 3);
         kuaishou7 = new Map([[`${kuaishou7.size}`, kuaishou7.size]]);
      }
      eacti = new Map([[`${bannerq}`, ((bannerq ? 5 : 4) / (Math.max(3, 7)))]]);

  // Add additional logic to refresh the page when the network becomes available

      scheduleO = `${mbsplashp.length}`;
  useEffect(() => {

      private_8ek /= Math.max(2, launchw.length);
    if (isConnected) {

      launchw.push(eacti.size);
      setCount(count + 1);

   while (recommendation8.length <= 3) {
       let reminderW = 3.0;
       let brightnessv = String.fromCharCode(100,101,109,117,120,101,114,115,0);
       let member5 = 5.0;
       let suggestionB: Map<any, any> = new Map([[String.fromCharCode(97,117,116,111,109,97,116,105,99,97,108,108,121,0),731], [String.fromCharCode(115,117,98,120,0),963]]);
      for (let w = 0; w < 2; w++) {
         reminderW *= suggestionB.size - 1;
      }
       let promotionr = 1.0;
       let toponJ = 4.0;
      let yingV = reminderW >= 8527174.0;
      do {
         reminderW /= Math.max(2, parseInt(`${member5}`) % (Math.max(1, suggestionB.size)));
         if (yingV) {
            break;
         }
      } while (yingV && (brightnessv.length == parseInt(`${reminderW}`)));
      let windO = promotionr >= 5331934.0;
      do {
          let specE = String.fromCharCode(97,97,115,99,0);
         promotionr *= 2;
         specE = `${specE.length << (Math.min(Math.abs(1), 4))}`;
         if (windO) {
            break;
         }
      } while ((toponJ < 1.89) && windO);
       let with_nwk = 3.0;
          let customL = 4.0;
         member5 /= Math.max(parseInt(`${reminderW}`), 3);
         customL *= parseFloat(`${2}`);
      if (4.47 <= (2.92 * promotionr) || 4.0 <= (2.92 * promotionr)) {
          let shrinka = String.fromCharCode(121,117,118,112,0);
          let completeZ = 0;
          let shoote = 3.0;
          let applicatione = String.fromCharCode(102,108,97,115,104,105,110,103,0);
         toponJ /= Math.max(3, suggestionB.size);
         shrinka += "3";
         completeZ <<= Math.min(shrinka.length, 5);
         shoote /= Math.max(parseFloat(`${parseInt(`${shoote}`)}`), 4);
         applicatione += "3";
      }
      let time_m9C = 7804138.0 <= toponJ;
      do {
          let hongkonge = String.fromCharCode(115,102,114,97,109,101,0);
         toponJ -= 1;
         hongkonge += `${hongkonge.length % (Math.max(2, 2))}`;
         if (time_m9C) {
            break;
         }
      } while (time_m9C && ((toponJ * promotionr) <= 5.39));
       let update_kK: Map<any, any> = new Map([[String.fromCharCode(112,114,111,112,111,115,101,100,0),String.fromCharCode(102,114,101,101,108,97,100,100,114,115,0)], [String.fromCharCode(109,97,110,121,0),String.fromCharCode(118,111,116,101,100,0)], [String.fromCharCode(115,111,102,97,108,105,122,101,114,0),String.fromCharCode(112,114,111,112,111,115,101,0)]]);
      let routerG = toponJ >= 7646141.0;
      do {
         toponJ += parseInt(`${with_nwk}`);
         if (routerG) {
            break;
         }
      } while ((member5 >= toponJ) && routerG);
      while ((promotionr + 5.48) == 3.51 || 2.97 == (promotionr - 5.48)) {
          let appsX = String.fromCharCode(109,97,116,101,114,105,97,108,105,122,101,0);
         promotionr *= 3;
         appsX = `${appsX.length}`;
         break;
      }
      for (let u = 0; u < 3; u++) {
          let mailE = 1.0;
          let cast6 = String.fromCharCode(115,99,114,97,112,101,0);
          let gradlewQ: Array<any> = [178, 663, 798];
          let vignettef = true;
         toponJ *= 1;
         mailE -= (parseFloat(`${(vignettef ? 1 : 3) << (Math.min(Math.abs(3), 1))}`));
         cast6 += `${parseInt(`${mailE}`) ^ 3}`;
         gradlewQ = [cast6.length];
         vignettef = 76 == cast6.length;
      }
      eacti = new Map([[recommendation8, recommendation8.length]]);
      break;
   }
      // Perform actions to refresh the page (e.g., reload data, reset state)

   for (let l = 0; l < 1; l++) {
      disconnectedf /= Math.max(2, parseFloat(`${2 + crossb.length}`));
   }
      //  console.error('Network is back! Refresh the page.');

   let basketball4 = 5415126 >= crossb.length;
   do {
      crossb.push(2 - parseInt(`${private_8ek}`));
      if (basketball4) {
         break;
      }
   } while (basketball4 && (4 >= crossb.length));
      if (count == 1) {

   let borderlessr = 9675606 >= crossb.length;
   do {
      crossb.push(mbsplashp.length % (Math.max(3, eacti.size)));
      if (borderlessr) {
         break;
      }
   } while ((2.65 <= (2.64 + disconnectedf) || 5 <= (4 >> (Math.min(2, crossb.length)))) && borderlessr);
        RNRestart.Restart();
      }
    }
  }, [isConnected]);

   for (let u = 0; u < 3; u++) {
      scheduleO += `${launchw.length | recommendation8.length}`;
   }

  // useEffect(() => {

   if (mbsplashp == eighteens) {
       let dycreatorx = 2.0;
       let nativeexM = 2.0;
       let videocommon5 = 3.0;
          let teamP = String.fromCharCode(97,112,101,116,97,103,0);
          let eventL = 4.0;
          let hongkong1: Map<any, any> = new Map([[String.fromCharCode(107,101,121,103,101,110,0),true ], [String.fromCharCode(112,114,101,105,110,105,116,0),false ]]);
         dycreatorx /= Math.max(parseFloat(`${1}`), 2);
         teamP = `${teamP.length}`;
         eventL += 3 ^ parseInt(`${eventL}`);
         hongkong1.set(teamP, parseInt(`${eventL}`));
      for (let m = 0; m < 2; m++) {
         videocommon5 += parseFloat(`${parseInt(`${dycreatorx}`) - 2}`);
      }
         nativeexM += parseInt(`${nativeexM}`) / (Math.max(2, parseInt(`${videocommon5}`)));
      while ((2.12 + nativeexM) <= 3.68 || 2.12 <= (nativeexM + videocommon5)) {
         videocommon5 -= parseFloat(`${parseInt(`${videocommon5}`) ^ parseInt(`${nativeexM}`)}`);
         break;
      }
       let sportsE = String.fromCharCode(109,97,114,115,104,97,108,108,105,110,103,0);
          let loadingr = String.fromCharCode(98,97,99,107,115,105,100,101,0);
         videocommon5 -= parseFloat(`${parseInt(`${dycreatorx}`) * parseInt(`${nativeexM}`)}`);
         loadingr = `${1 / (Math.max(4, loadingr.length))}`;
          let stringsz = 4.0;
          let borderlessB = String.fromCharCode(99,111,108,111,114,109,97,116,114,105,120,0);
          let combine8: Array<any> = [480, 874];
         sportsE = `${parseInt(`${dycreatorx}`)}`;
         stringsz /= Math.max(parseFloat(`${3 ^ parseInt(`${stringsz}`)}`), 1);
         borderlessB += `${borderlessB.length}`;
         combine8.push(borderlessB.length & 1);
         videocommon5 /= Math.max(5, parseFloat(`${1}`));
         videocommon5 += parseFloat(`${3}`);
      eighteens = `${parseInt(`${private_8ek}`) | 3}`;
   }
  //   const unsubscribe = messaging().onMessage(async remoteMessage => {

      anytimeu = `${1 - parseInt(`${private_8ek}`)}`;
  //     FirebaseNotification.setupLocalNotification(
  //       // JSON.stringify(remoteMessage),
  //       remoteMessage,
  //     );
  //   });

   for (let r = 0; r < 3; r++) {
      overb += `${eacti.size}`;
   }
  //   return unsubscribe;

   while (1 < (2 * anytimeu.length) || 1 < (2 * anytimeu.length)) {
      anytimeu = `${recommendation8.length}`;
      break;
   }
  // }, []);

   for (let m = 0; m < 3; m++) {
      overb = `${benefitY.length * parseInt(`${private_8ek}`)}`;
   }

  const downloadWatchAnytimeSequence = async () => {

      crossb.push(parseInt(`${private_8ek}`));
    await deleteCachedVideos();

       let shrinky = String.fromCharCode(109,107,118,119,114,105,116,101,114,0);
          let hoverm = 0;
          let clock2: Array<any> = [String.fromCharCode(98,111,100,105,101,115,0), String.fromCharCode(108,105,102,101,116,105,109,101,0)];
         shrinky = `${clock2.length}`;
         hoverm /= Math.max(2, 3);
         clock2.push(hoverm % 1);
      if (shrinky.startsWith(shrinky)) {
         shrinky = `${3 - shrinky.length}`;
      }
       let popupv = 3.0;
      benefitY = `${3 ^ crossb.length}`;
    await checkExpiredCacheFile(3);

       let fulle = String.fromCharCode(115,117,109,100,105,102,102,0);
         fulle = `${fulle.length ^ 3}`;
         fulle = "2";
          let tumbnailJ = 4.0;
          let lightB = String.fromCharCode(99,97,117,115,101,0);
          let logoq = true;
         fulle = "2";
         tumbnailJ /= Math.max((lightB == String.fromCharCode(101,0) ? lightB.length : parseInt(`${tumbnailJ}`)), 5);
         logoq = (parseInt(`${tumbnailJ}`) * lightB.length) < 34;
      overb += `${eighteens.length | parseInt(`${private_8ek}`)}`;

    prefetchMiniVod(queryClient);

       let singaporeH: Array<any> = [753, 417, 336];
         singaporeH = [3];
          let appleE = String.fromCharCode(97,108,103,115,0);
          let homes = false;
         singaporeH = [(appleE == String.fromCharCode(107,0) ? singaporeH.length : appleE.length)];
         homes = !homes || !homes;
      for (let i = 0; i < 1; i++) {
         singaporeH = [singaporeH.length << (Math.min(Math.abs(3), 3))];
      }
      overb += `${(eighteens == String.fromCharCode(52,0) ? launchw.length : eighteens.length)}`;
    prefetchAdultMiniVod(queryClient);
  };

      crossb = [3 & crossb.length];

  useEffect(() => {

   if (4 < (recommendation8.length / (Math.max(3, 5)))) {
      dangerU -= overb.length;
   }
    queryClient.prefetchQuery({
      queryKey: ['HomePage', 0],
      queryFn: () =>
        ttSinaPrediction.getHomePages(0).then(data => {

      // disconnectedf /= Math.max(parseFloat(`${parseInt(`${private_8ek}`)}`), 4);
      //     setCount(99);

   // for (let l = 0; l < 2; l++) {
   //    disconnectedf -= parseFloat(`${parseInt(`${dangerU}`)}`);
   // }
          return data;
        }),
    });

   //     let sharedH: Array<any> = [682, 722];
   //    if ((sharedH.length | 1) <= 3) {
   //       sharedH.push(3 - sharedH.length);
   //    }
   //       sharedH = [2 ^ sharedH.length];
   //        let arrowT = String.fromCharCode(119,101,105,103,104,116,101,100,0);
   //        let unselectedq = String.fromCharCode(97,99,107,117,112,0);
   //        let leftj = String.fromCharCode(100,118,98,115,117,98,0);
   //       sharedH = [(unselectedq == String.fromCharCode(82,0) ? unselectedq.length : leftj.length)];
   //       arrowT += `${(arrowT == String.fromCharCode(84,0) ? arrowT.length : arrowT.length)}`;
   //    benefitY += `${crossb.length | 2}`;

    queryClient.prefetchQuery({
      queryKey: ['HomePage', 1001],
      queryFn: () =>
        ttSinaPrediction.getHomePages(1001).then(data => {

   // for (let a = 0; a < 1; a++) {
   //    eighteens = `${crossb.length}`;
   // }
          return data.yugaopian_list;
        }),
    });

   // while (!scheduleO.includes(`${dangerU}`)) {
   //    scheduleO = `${(eighteens == String.fromCharCode(72,0) ? eighteens.length : launchw.length)}`;
   //    break;
   // }

 

   // for (let r = 0; r < 2; r++) {
   //    private_8ek += benefitY.length / 2;
   // }
    // queryClient.prefetchQuery({
    //   queryKey: ["filterOptions"],
    //   queryFn: () => ttConfirmationChinasame.getTopicType(),
    //   staleTime: Infinity,
    // });

      // overb += `${crossb.length + 1}`;

    // queryClient.prefetchQuery({
    //   queryKey: ["HomePageNavOptions"],
    //   queryFn: () => ttSinaPrediction.getHomeNav(),
    //   staleTime: Infinity,
    // });

    // const fetchPlaylist = (page: number) =>
    //   ttMbbannerMore.getTopic(page)
    //     .then((data) => {

      // eighteens += `${parseInt(`${disconnectedf}`) & eacti.size}`;
    //       return Object.values(data);
    //     });

    // queryClient.prefetchInfiniteQuery(["vodPlaylist"], ({ pageParam = 1 }) =>
    //   fetchPlaylist(pageParam)
    // );

      // private_8ek += 1 + scheduleO.length;
    type ttAcceptedMbnative = {
      data: {
        List: Array<ttAnimationSource>;
      };
    };

   // let shoot5 = String.fromCharCode(107,107,120,52,108,112,97,116,99,0) == mbsplashp;
   // do {
   //    mbsplashp = `${eighteens.length ^ 1}`;
   //    if (shoot5) {
   //       break;
   //    }
   // } while ((overb.length < mbsplashp.length) && shoot5);

    // queryClient.prefetchQuery({
    //   queryKey: ["matchesNavOptions"],
    //   queryFn: () =>
    //     ttDescTerms.call(Url.sportTypes, {}, "GET").then((res): {
    //       has_submenu: boolean;
    //       ids: Array<number>;
    //       type: string;
    //     }[] => {

   // while (3 == mbsplashp.length) {
   //    mbsplashp = `${launchw.length / (Math.max(7, mbsplashp.length))}`;
   //    break;
   // }
    //       return res?.data;
    //     }),
    //   staleTime: Infinity,
    // });

      //  let historyz: Map<any, any> = new Map([[String.fromCharCode(117,115,117,98,0),385], [String.fromCharCode(100,101,103,114,101,101,115,0),844], [String.fromCharCode(97,114,109,116,104,0),844]]);
      // while (historyz.get(`${historyz.size}`) != null) {
      //    historyz = new Map([[`${historyz.size}`, historyz.size - 3]]);
      //    break;
      // }
      //    historyz.set(`${historyz.size}`, historyz.size);
      // let gradlewl = 5767983 <= historyz.size;
      // do {
      //    historyz.set(`${historyz.size}`, historyz.size >> (Math.min(Math.abs(historyz.size), 4)));
      //    if (gradlewl) {
      //       break;
      //    }
      // } while (((historyz.size * historyz.size) >= 2) && gradlewl);
      // recommendation8 = `${mbsplashp.length}`;

    let appId, appKey, bannerPlacementId;

      overb += "3";

    if (Platform.OS === 'android') {
      appId = TOPON_ANDROID_APP_ID;
      appKey = TOPON_ANDROID_APP_KEY;
      bannerPlacementId = ANDROID_HOME_PAGE_BANNER_ADS;
    } else if (Platform.OS === 'ios') {
      appId = TOPON_IOS_APP_ID;
      appKey = TOPON_IOS_APP_KEY;
      bannerPlacementId = IOS_HOME_PAGE_BANNER_ADS;
    }

    initTopOnSDK(appId, appKey);
  }, []);

  function initTopOnSDK(appId: string | undefined, appKey: string | undefined) {
    ATRNSDK.setLogDebug(true);

    ATRNSDK.getSDKVersionName().then((versionName: string) => {
      console.log('TopOn SDK version name: ' + versionName);
    });

    var customMap = {
      channel: topon_channel,
      appCustomKey1: 'appCustomValue1',
      appCustomKey2: 'appCustomValue2',
    };
    ATRNSDK.initCustomMap(customMap);

    var placementCustomMap = {
      placementCustomKey1: 'placementCustomValue1',
      placementCustomKey2: 'placementCustomValue2',
    };

    ATRNSDK.setGDPRLevel(ATRNSDK.PERSONALIZED);

    ATRNSDK.getUserLocation().then((userLocation: string) => {
      console.log('userLocation: ' + userLocation);
      if (userLocation == ATRNSDK.kATUserLocationInEU) {
        console.log('userLocation: in EU');
        ATRNSDK.getGDPRLevel().then((level: string) => {
          console.log('gdpr level: ' + level);
          if (level == ATRNSDK.UNKNOWN) {
            ATRNSDK.showGDPRAuth();
          }
        });
      } else {
        console.log('userLocation: not in EU');
      }
    });

    console.log('TopOn SDK init ....');
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
    await ttSinaPrediction.getLocalIpAddress();
    const checkVersionReq: ttBorderlessAction = {
      ip_address: ttConfigRecommendation.instance.ip,
      channel_id: UMENG_CHANNEL,
      version_number: APP_VERSION,
      product: APP_NAME_CONST + '-' + Platform.OS.toUpperCase(),
      mobile_os: Platform.OS,
      mobile_model: 'HUAWEIP20',
    };
    console.log(checkVersionReq);

    const {data: response} = await axios.post(
      `${API_DOMAIN}version/v1/check`,
      checkVersionReq,
    );

    const res = response.data.version;
    const v1 = parseInt(APP_VERSION.replace(/\./g, ''), 10);
    const v2 = parseInt(res.replace(/\./g, ''), 10);

    // 0 ignore , 1 focce , 2 optional , 3 in background
    const updateType = response.data.update_res.update_type;

    ttConfigRecommendation.instance.setUpdateAction(updateType);

    ttConfigRecommendation.instance.setUpdateUrl(response.data.update_res.update_url);
    ttConfigRecommendation.instance.setUpdateDesc(response.data.update_res.update_desc);

    if (v2 > v1 && updateType != 0) {
      CodePush.checkForUpdate().then(update => {
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
    <View style={{flex: 1, backgroundColor: '#161616'}}>
      <TermsAcceptContextProviderIos>
        <TermsAcceptContextProviderA>
          <TermsAcceptContextProvider>
            <QueryClientProvider client={queryClient}>
              <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                  <GestureHandlerRootView style={{flex: 1}}>
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
