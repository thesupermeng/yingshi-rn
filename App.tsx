import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {persistor, store} from '@redux/ww_small';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {wwBuffer, wwPredictionarrowIncident} from '@type/ww_dycreator_result';
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
} from '@utility/ww_icon';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Platform, View} from 'react-native';
import CodePush from 'react-native-code-push';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import RegengOverlay from './src/components/modal/ww_roboto_libglog';
import MainNav from './src/navigation/ww_hooks_cancel_view';
import {wwAbidetect} from './ww_leakchecker';

import {ATRNSDK} from './AnyThinkAds/ww_basketball';
import RNRestart from 'react-native-restart';
import {TermsAcceptContextProvider} from './src/contexts/ww_videovar_step';
import {TermsAcceptContextProvider as TermsAcceptContextProviderA} from './src/contexts/ww_videovar_step';
import {TermsAcceptContextProvider as TermsAcceptContextProviderIos} from './src/contexts/ww_videovar_step';
import {prefetchAdultMiniVod, prefetchMiniVod} from './src/api/ww_gift';
import {
  checkExpiredCacheFile,
  deleteCachedVideos,
} from './src/utils/ww_taiwan';
import NetInfo from '@react-native-community/netinfo';
import {wwRewardvideoMegaphone, wwGrayNewarchdefaults, wwIconedit} from '@api';
import {wwImagenetworkerrNterstitial} from './Umeng/ww_material';
import {logIgnore, warnIgnore} from '@utility/ww_whitetick_iconshare';
import appsFlyer from 'react-native-appsflyer';
import wwSelect from './AppsFlyer/ww_short';
import messaging from '@react-native-firebase/messaging';
import {wwReducerConfigure} from '@utility/ww_orientation_dropdown';

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
       let unimplementedviewu = 2;
    let abidetectm = String.fromCharCode(115,116,111,114,97,103,101,115,0);
    let resultB = String.fromCharCode(109,111,110,111,115,112,97,99,101,100,0);
    let gemfiles = false;
    let mbsplashJ = String.fromCharCode(117,112,115,116,114,101,97,109,0);
    let kickj = String.fromCharCode(109,97,114,107,115,0);
    let logouserN = true;
    let relatedZ: Map<any, any> = new Map([[String.fromCharCode(100,108,115,121,109,0),false ], [String.fromCharCode(99,102,101,110,99,0),true ], [String.fromCharCode(108,111,103,105,115,116,105,99,0),false ]]);
    let huaweid = String.fromCharCode(112,101,114,115,111,110,0);
    let long_k1f = String.fromCharCode(104,108,115,101,110,99,0);
    let nativeexH = String.fromCharCode(105,114,99,97,109,0);
    let librrcw = String.fromCharCode(98,114,111,107,101,110,0);
    let combineq = false;
    let moreI = String.fromCharCode(115,99,104,101,100,117,108,101,100,0);
    let leakcheckerN = true;
      resultB += `${((gemfiles ? 2 : 2))}`;

  CodePush.notifyAppReady();

   if (!logouserN || kickj.length == 3) {
      kickj = `${2 ^ unimplementedviewu}`;
   }

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 300000,
      },
    },
  });

      huaweid += `${((gemfiles ? 1 : 4) / (Math.max(1, 6)))}`;

  const [isConnected, setIsConnected] = useState(true);

      resultB = "3";
  const [count, setCount] = useState(0);

      logouserN = (relatedZ.size + resultB.length) >= 91;
  useEffect(() => {

   for (let w = 0; w < 3; w++) {
      long_k1f += "2";
   }
    const unsubscribe = NetInfo.addEventListener((state: any) => {
      setIsConnected(state.isConnected);
    });

       let scrollviewp = String.fromCharCode(100,101,115,105,114,101,100,0);
       let otherl: Array<any> = [412, 104];
      if (3 >= (3 | otherl.length)) {
         scrollviewp += `${otherl.length}`;
      }
         otherl.push(scrollviewp.length);
         otherl.push(scrollviewp.length | otherl.length);
      while (2 < (scrollviewp.length | 4) && 2 < (scrollviewp.length | 4)) {
          let libmapbufferjni2 = 4.0;
          let defaultlogor = String.fromCharCode(97,99,116,117,97,108,105,122,97,116,105,111,110,0);
          let relateds = String.fromCharCode(101,109,98,101,100,100,105,110,103,0);
         otherl.push(3);
         libmapbufferjni2 /= Math.max((parseFloat(`${String.fromCharCode(48,0) == relateds ? relateds.length : defaultlogor.length}`)), 4);
         defaultlogor += `${relateds.length | parseInt(`${libmapbufferjni2}`)}`;
         break;
      }
       let klevinX = String.fromCharCode(115,101,115,115,105,111,110,105,100,0);
         klevinX += `${(String.fromCharCode(120,0) == klevinX ? klevinX.length : otherl.length)}`;
      resultB = `${(otherl.length + (logouserN ? 1 : 5))}`;

    return () => {

   for (let v = 0; v < 3; v++) {
       let vipsportS = String.fromCharCode(104,105,103,104,115,0);
      if (vipsportS == String.fromCharCode(100,0)) {
         vipsportS = `${vipsportS.length ^ vipsportS.length}`;
      }
      for (let f = 0; f < 1; f++) {
         vipsportS += `${vipsportS.length}`;
      }
      while (vipsportS.length <= 4 && 4 <= vipsportS.length) {
         vipsportS = `${vipsportS.length}`;
         break;
      }
      mbsplashJ += `${(kickj == String.fromCharCode(104,0) ? kickj.length : abidetectm.length)}`;
   }
      // Unsubscribe from the network status listener when the component unmounts

      abidetectm += `${resultB.length}`;
      unsubscribe();
    };
  }, []);

   if (long_k1f.length <= nativeexH.length) {
       let yellowanimationlive_ = 0.0;
       let iconbellactiveO = 4;
       let profileK = 2.0;
      for (let x = 0; x < 3; x++) {
         profileK -= parseInt(`${yellowanimationlive_}`);
      }
      if (iconbellactiveO < 5) {
          let trashb: Array<any> = [936, 613];
          let register_pts = 4;
          let otherI = 1.0;
         yellowanimationlive_ *= trashb.length >> (Math.min(Math.abs(3), 1));
         trashb.push(parseInt(`${otherI}`));
         register_pts ^= 2 ^ parseInt(`${otherI}`);
      }
      while (5.50 >= (profileK + iconbellactiveO)) {
         profileK /= Math.max(4, 1 << (Math.min(Math.abs(iconbellactiveO), 1)));
         break;
      }
       let fullR = 0;
          let pageT = 0.0;
          let applicationu = String.fromCharCode(105,118,102,101,110,99,0);
          let activityn = String.fromCharCode(104,101,120,100,117,109,112,0);
         iconbellactiveO *= 3;
         pageT /= Math.max(3, applicationu.length + parseInt(`${pageT}`));
         applicationu += `${parseInt(`${pageT}`)}`;
         activityn = `${parseInt(`${pageT}`) & 1}`;
      for (let g = 0; g < 1; g++) {
          let filedA = 2.0;
          let teamJ = 0.0;
          let change8 = false;
          let imagesR = false;
         iconbellactiveO |= 1;
         filedA *= parseFloat(`${parseInt(`${teamJ}`) + parseInt(`${filedA}`)}`);
         teamJ += parseFloat(`${parseInt(`${teamJ}`) % 3}`);
         change8 = 10.23 <= teamJ;
         imagesR = filedA > 57.4;
      }
         yellowanimationlive_ += iconbellactiveO;
      if ((iconbellactiveO / (Math.max(parseInt(`${yellowanimationlive_}`), 6))) >= 1 && 1.54 >= (yellowanimationlive_ / 2.7)) {
          let dependencyK: Map<any, any> = new Map([[String.fromCharCode(116,101,108,101,112,104,111,116,111,0),String.fromCharCode(114,110,103,115,0)], [String.fromCharCode(99,104,101,99,107,115,117,109,0),String.fromCharCode(99,111,112,121,105,110,105,111,118,0)], [String.fromCharCode(99,111,108,108,101,116,105,111,110,0),String.fromCharCode(102,97,118,101,100,0)]]);
          let hiadC = 4;
          let fullp: Array<any> = [814, 868];
          let runtimeJ = String.fromCharCode(112,114,101,102,101,116,99,104,105,110,103,0);
          let teamdetailsbgU = 3.0;
         yellowanimationlive_ += 3 % (Math.max(parseInt(`${yellowanimationlive_}`), 5));
         dependencyK.set(runtimeJ, (String.fromCharCode(104,0) == runtimeJ ? dependencyK.size : runtimeJ.length));
         hiadC &= dependencyK.size;
         fullp.push(fullp.length);
         teamdetailsbgU /= Math.max((parseFloat(`${String.fromCharCode(53,0) == runtimeJ ? runtimeJ.length : fullp.length}`)), 4);
      }
      for (let h = 0; h < 2; h++) {
         yellowanimationlive_ -= parseInt(`${profileK}`) - 2;
      }
      long_k1f += `${(huaweid == String.fromCharCode(118,0) ? abidetectm.length : huaweid.length)}`;
   }

  // Add additional logic to refresh the page when the network becomes available

       let modew = String.fromCharCode(108,105,118,101,100,0);
       let combineI = false;
       let imagemanager2 = 5.0;
         modew += `${2 / (Math.max(parseInt(`${imagemanager2}`), 7))}`;
      let episodeX = combineI ? !combineI : combineI;
      do {
         combineI = !combineI && modew.length == 71;
         if (episodeX) {
            break;
         }
      } while (episodeX && (4 < modew.length || !combineI));
         imagemanager2 += ((combineI ? 1 : 3));
          let sportsm = String.fromCharCode(116,104,114,101,97,100,105,110,103,0);
          let episodes5 = true;
          let downloading8 = String.fromCharCode(119,97,108,107,101,114,0);
         imagemanager2 += 1;
         sportsm += `${((episodes5 ? 1 : 4))}`;
         episodes5 = episodes5 && downloading8.length >= 10;
         downloading8 = `${1 * downloading8.length}`;
      while (5 < (modew.length % 5)) {
         modew += `${parseInt(`${imagemanager2}`) << (Math.min(2, Math.abs(1)))}`;
         break;
      }
      let recommendationJ = combineI ? !combineI : combineI;
      do {
         combineI = !combineI;
         if (recommendationJ) {
            break;
         }
      } while (recommendationJ && (combineI));
      for (let a = 0; a < 3; a++) {
         combineI = imagemanager2 <= 83.84;
      }
      while (!modew.endsWith(`${imagemanager2}`)) {
         imagemanager2 -= ((combineI ? 1 : 1) - parseInt(`${imagemanager2}`));
         break;
      }
      let renewS = combineI ? !combineI : combineI;
      do {
         combineI = 48 <= modew.length;
         if (renewS) {
            break;
         }
      } while ((2 <= modew.length) && renewS);
      relatedZ.set(`${huaweid}`, 1);
  useEffect(() => {

      logouserN = resultB == librrcw;
    if (isConnected) {

       let gifgoalbgO = 0;
       let graphicsk = String.fromCharCode(117,110,114,101,103,105,115,116,101,114,101,100,0);
       let modeY: Array<any> = [532, 392];
          let componentsV = String.fromCharCode(116,114,97,105,110,0);
          let selectP = false;
          let otherX = String.fromCharCode(115,121,110,99,104,114,111,110,111,117,115,108,121,0);
         gifgoalbgO ^= gifgoalbgO >> (Math.min(3, Math.abs(1)));
         componentsV += `${(componentsV.length << (Math.min(1, Math.abs((selectP ? 3 : 2)))))}`;
         selectP = 33 <= otherX.length || String.fromCharCode(68,0) == componentsV;
         otherX += `${otherX.length}`;
      while ((modeY.length % 3) < 4 || 1 < (gifgoalbgO % 3)) {
         gifgoalbgO -= modeY.length & 1;
         break;
      }
      if (3 >= (gifgoalbgO << (Math.min(modeY.length, 3))) && 4 >= (3 << (Math.min(3, Math.abs(gifgoalbgO))))) {
         modeY = [2 % (Math.max(6, graphicsk.length))];
      }
          let profiler = 4.0;
          let middlewareF = String.fromCharCode(104,113,112,101,108,0);
         graphicsk += `${graphicsk.length >> (Math.min(Math.abs(3), 5))}`;
         profiler /= Math.max(parseFloat(`${3 ^ middlewareF.length}`), 3);
         middlewareF = `${parseInt(`${profiler}`) ^ 3}`;
          let promotionq = 2.0;
         graphicsk = `${graphicsk.length}`;
         promotionq *= parseInt(`${promotionq}`);
         gifgoalbgO <<= Math.min(graphicsk.length, 3);
          let statsB = String.fromCharCode(100,105,115,112,0);
          let verticalz: Map<any, any> = new Map([[String.fromCharCode(99,108,97,105,109,0),315], [String.fromCharCode(99,97,110,99,101,108,108,101,100,0),345], [String.fromCharCode(98,108,97,107,101,0),125]]);
         gifgoalbgO %= Math.max(4, 3);
         statsB = `${(statsB == String.fromCharCode(83,0) ? verticalz.size : statsB.length)}`;
         verticalz = new Map([[`${verticalz.size}`, statsB.length - 2]]);
         graphicsk = `${modeY.length >> (Math.min(3, Math.abs(gifgoalbgO)))}`;
         gifgoalbgO += modeY.length;
      relatedZ.set(huaweid, kickj.length);
      setCount(count + 1);

      abidetectm += `${librrcw.length}`;
      // Perform actions to refresh the page (e.g., reload data, reset state)

   while (2 < nativeexH.length) {
      nativeexH += `${3 % (Math.max(1, mbsplashJ.length))}`;
      break;
   }
      //  console.error('Network is back! Refresh the page.');

   for (let t = 0; t < 2; t++) {
       let previewA = 5.0;
       let signinupx = 1;
          let plashU = String.fromCharCode(115,109,112,116,101,98,97,114,115,0);
          let libswscaleK: Map<any, any> = new Map([[String.fromCharCode(99,111,110,116,97,105,110,101,114,115,0),false ], [String.fromCharCode(105,110,118,105,115,105,98,108,101,0),false ]]);
         previewA /= Math.max(3, parseFloat(`${3 | signinupx}`));
         plashU += `${plashU.length}`;
         libswscaleK = new Map([[`${libswscaleK.size}`, 1]]);
          let overl = 0.0;
          let hiadA = String.fromCharCode(117,110,105,116,116,101,115,116,0);
         signinupx <<= Math.min(4, Math.abs(1 << (Math.min(Math.abs(parseInt(`${previewA}`)), 3))));
         overl -= (parseFloat(`${String.fromCharCode(67,0) == hiadA ? parseInt(`${overl}`) : hiadA.length}`));
       let canvasV = 3.0;
      let lightO = previewA >= 5358901.0;
      do {
         previewA -= parseFloat(`${2 & signinupx}`);
         if (lightO) {
            break;
         }
      } while ((2.18 <= (1 * canvasV)) && lightO);
      if (4 == signinupx) {
         canvasV /= Math.max(parseInt(`${previewA}`) * parseInt(`${canvasV}`), 4);
      }
         canvasV /= Math.max(1, 3 & signinupx);
      huaweid += `${signinupx}`;
   }
      if (count == 1) {

   while ((2 & relatedZ.size) >= 4) {
      huaweid = `${(String.fromCharCode(81,0) == librrcw ? relatedZ.size : librrcw.length)}`;
      break;
   }
        RNRestart.Restart();
      }
    }
  }, [isConnected]);

   for (let a = 0; a < 2; a++) {
       let y_center7 = 5.0;
       let bufferG = String.fromCharCode(102,97,99,116,111,114,105,122,97,116,105,111,110,0);
       let successI: Map<any, any> = new Map([[String.fromCharCode(100,101,105,110,105,116,0),String.fromCharCode(116,108,111,103,0)], [String.fromCharCode(115,116,111,114,109,98,105,114,100,0),String.fromCharCode(105,109,112,111,114,116,115,0)], [String.fromCharCode(115,116,111,112,0),String.fromCharCode(107,95,55,50,0)]]);
       let feedback6 = 0;
       let window_sD = 2.0;
      for (let s = 0; s < 1; s++) {
          let catalog3 = 1.0;
          let privacyL = String.fromCharCode(109,105,108,105,111,110,115,0);
         successI = new Map([[`${catalog3}`, parseInt(`${window_sD}`)]]);
         catalog3 /= Math.max(4, parseFloat(`${privacyL.length}`));
         privacyL = `${privacyL.length / 3}`;
      }
      let giflivestreamingf = 7928608 >= bufferG.length;
      do {
         bufferG += `${(String.fromCharCode(84,0) == bufferG ? bufferG.length : successI.size)}`;
         if (giflivestreamingf) {
            break;
         }
      } while (giflivestreamingf && (3 == (4 << (Math.min(5, bufferG.length)))));
         successI = new Map([[`${successI.size}`, 1]]);
      if (4.79 > (y_center7 - 4.81) && (4.81 - y_center7) > 4.85) {
         y_center7 *= parseFloat(`${parseInt(`${window_sD}`) | 1}`);
      }
         successI = new Map([[bufferG, parseInt(`${window_sD}`)]]);
      for (let b = 0; b < 3; b++) {
         successI = new Map([[`${feedback6}`, feedback6 ^ 2]]);
      }
       let iconnewssharef = false;
      while (3 >= bufferG.length) {
          let coden: Map<any, any> = new Map([[String.fromCharCode(110,117,108,108,112,97,99,107,101,116,0),126], [String.fromCharCode(109,115,115,100,115,112,0),372], [String.fromCharCode(100,101,114,101,102,0),484]]);
          let buttonv: Array<any> = [String.fromCharCode(97,108,105,97,115,101,115,0), String.fromCharCode(99,111,100,101,100,0), String.fromCharCode(118,105,115,105,98,105,108,105,116,121,0)];
          let matchactiveU: Map<any, any> = new Map([[String.fromCharCode(97,115,112,101,99,116,115,0),String.fromCharCode(115,116,114,108,105,107,101,0)], [String.fromCharCode(115,108,105,99,101,115,0),String.fromCharCode(115,97,109,101,113,0)], [String.fromCharCode(115,108,111,116,0),String.fromCharCode(99,111,101,102,102,105,99,105,101,110,116,0)]]);
          let sansX = String.fromCharCode(116,114,117,110,99,97,116,101,0);
          let leaguef = 0.0;
         bufferG += `${parseInt(`${y_center7}`) * 1}`;
         coden = new Map([[`${buttonv.length}`, 2]]);
         buttonv = [(sansX == String.fromCharCode(49,0) ? sansX.length : parseInt(`${leaguef}`))];
         matchactiveU.set(`${buttonv.length}`, coden.size << (Math.min(buttonv.length, 2)));
         leaguef *= parseFloat(`${3 ^ coden.size}`);
         break;
      }
      for (let r = 0; r < 2; r++) {
         bufferG += `${bufferG.length}`;
      }
      for (let y = 0; y < 3; y++) {
         successI.set(`${feedback6}`, feedback6 / 2);
      }
         window_sD /= Math.max(bufferG.length | 3, 1);
       let downarrowK = 1;
       let combinedb = 0;
      while ((1.60 / (Math.max(7, window_sD))) >= 2.86) {
         iconnewssharef = 41 <= feedback6 && 41 <= successI.size;
         break;
      }
         feedback6 |= 2 % (Math.max(feedback6, 10));
      let evente = 7281732.0 <= window_sD;
      do {
         window_sD -= parseInt(`${window_sD}`);
         if (evente) {
            break;
         }
      } while (((feedback6 - 2) == 1) && evente);
      mbsplashJ = `${abidetectm.length}`;
   }

  useEffect(() => {

      unimplementedviewu ^= 1;
    const unsubscribe = messaging().onMessage(async remoteMessage => {

   if (4 > mbsplashJ.length) {
       let vcopy_5U = 5.0;
       let profileactiveh = String.fromCharCode(100,120,110,100,99,0);
       let recommendationK = String.fromCharCode(114,101,99,116,105,102,121,0);
       let guide1: Map<any, any> = new Map([[String.fromCharCode(115,116,115,99,0),true ], [String.fromCharCode(97,100,103,114,111,117,112,0),true ], [String.fromCharCode(115,107,105,112,0),true ]]);
       let vietnamQ: Array<any> = [String.fromCharCode(108,97,99,105,110,103,0), String.fromCharCode(99,117,114,118,101,115,0)];
      if (recommendationK == String.fromCharCode(110,0)) {
         profileactiveh = `${(String.fromCharCode(72,0) == recommendationK ? guide1.size : recommendationK.length)}`;
      }
          let kuaishouC = false;
          let setting9 = 1.0;
          let videovar8: Array<any> = [43, 432];
         vietnamQ.push(parseInt(`${setting9}`) - 2);
         kuaishouC = videovar8.length < 99 || kuaishouC;
         setting9 += (parseFloat(`${(kuaishouC ? 5 : 5) << (Math.min(videovar8.length, 5))}`));
          let statisticsinactiveu = 1;
          let downloaderV = String.fromCharCode(121,117,118,97,0);
         profileactiveh = `${statisticsinactiveu & 2}`;
         statisticsinactiveu %= Math.max(5, 1);
         downloaderV = `${downloaderV.length + downloaderV.length}`;
      while ((vietnamQ.length / (Math.max(1, profileactiveh.length))) > 3 && 1 > (vietnamQ.length / 3)) {
         vietnamQ.push(parseInt(`${vcopy_5U}`) / 2);
         break;
      }
       let dycreatoru = 5;
      let pointg = dycreatoru <= 8159403;
      do {
         dycreatoru -= guide1.size;
         if (pointg) {
            break;
         }
      } while ((recommendationK.startsWith(`${dycreatoru}`)) && pointg);
      let fastforwardC = String.fromCharCode(55,95,114,56,56,57,119,113,0) == profileactiveh;
      do {
         profileactiveh += `${guide1.size & 3}`;
         if (fastforwardC) {
            break;
         }
      } while ((profileactiveh.length >= 1) && fastforwardC);
       let componentI = String.fromCharCode(100,120,116,97,0);
       let pointo = String.fromCharCode(110,116,115,115,0);
       let injuryL = String.fromCharCode(112,97,114,116,105,99,105,112,97,116,105,110,103,0);
       let liveendmodallogob = String.fromCharCode(101,100,105,116,111,114,0);
         injuryL += `${(String.fromCharCode(106,0) == pointo ? pointo.length : vietnamQ.length)}`;
       let minivod8 = String.fromCharCode(109,97,99,101,0);
       let libhermes3 = String.fromCharCode(115,116,114,101,97,109,0);
          let ping5 = 0.0;
          let zoomS = String.fromCharCode(115,117,98,106,101,99,116,115,0);
          let libsentryk: Array<any> = [943, 569, 896];
         pointo += `${libhermes3.length % 3}`;
         ping5 /= Math.max(2, 5);
         zoomS += `${(String.fromCharCode(105,0) == zoomS ? zoomS.length : libsentryk.length)}`;
         libsentryk.push(2);
       let imagesa = 3.0;
       let arrowupg = 3.0;
       let buildz: Map<any, any> = new Map([[String.fromCharCode(115,117,98,115,99,114,105,112,116,0),String.fromCharCode(101,120,116,114,97,100,97,116,97,99,111,110,102,105,103,0)], [String.fromCharCode(109,115,109,112,101,103,100,97,116,97,0),String.fromCharCode(114,101,97,115,111,110,0)], [String.fromCharCode(98,114,101,97,107,111,117,116,0),String.fromCharCode(101,110,113,117,101,117,101,100,0)]]);
      if (!minivod8.endsWith(`${vietnamQ.length}`)) {
          let containerA = String.fromCharCode(97,117,120,105,108,105,97,114,121,0);
         vietnamQ.push(injuryL.length | vietnamQ.length);
         containerA += `${containerA.length << (Math.min(Math.abs(3), 5))}`;
      }
      nativeexH += `${resultB.length & 3}`;
   }
      wwReducerConfigure.setupLocalNotification(
        // JSON.stringify(remoteMessage),
        remoteMessage,
      );
    });

   for (let u = 0; u < 1; u++) {
      mbsplashJ = `${(String.fromCharCode(68,0) == huaweid ? huaweid.length : (gemfiles ? 3 : 3))}`;
   }
    return unsubscribe;

      librrcw += `${long_k1f.length | relatedZ.size}`;
  }, []);

   if (4 == resultB.length) {
      resultB = `${resultB.length & 2}`;
   }

  const downloadWatchAnytimeSequence = async () => {

       let jingdongs = 0;
       let iconbackwhite0 = true;
       let profileactiveQ: Array<any> = [106, 994];
      for (let q = 0; q < 3; q++) {
         iconbackwhite0 = ((profileactiveQ.length | (iconbackwhite0 ? profileactiveQ.length : 26)) <= 26);
      }
         iconbackwhite0 = profileactiveQ.length <= 72;
      for (let x = 0; x < 2; x++) {
          let aboutB = 0.0;
          let xadsdkq: Array<any> = [695, 560];
          let logoutt = 1.0;
          let uimanagerW: Array<any> = [311, 727, 165];
          let become4: Map<any, any> = new Map([[String.fromCharCode(104,111,117,114,108,121,0),String.fromCharCode(115,116,115,115,0)], [String.fromCharCode(112,114,105,109,97,114,105,101,115,0),String.fromCharCode(98,111,120,112,108,111,116,0)], [String.fromCharCode(98,97,99,107,100,114,111,112,0),String.fromCharCode(114,101,112,108,105,101,115,0)]]);
         iconbackwhite0 = 18 <= xadsdkq.length;
         aboutB /= Math.max(4, parseInt(`${aboutB}`) / 1);
         xadsdkq = [uimanagerW.length ^ 1];
         logoutt /= Math.max(5, parseFloat(`${uimanagerW.length}`));
         become4.set(`${aboutB}`, uimanagerW.length);
      }
          let project1 = 5;
         iconbackwhite0 = !iconbackwhite0;
         project1 /= Math.max(project1, 4);
      if (iconbackwhite0) {
          let activityd: Array<any> = [687, 463, 834];
          let playercommonX = String.fromCharCode(98,108,97,110,107,0);
          let t_playerI: Map<any, any> = new Map([[String.fromCharCode(99,97,116,99,104,115,105,103,110,97,108,0),String.fromCharCode(102,116,101,108,108,0)], [String.fromCharCode(101,118,98,117,102,102,101,114,0),String.fromCharCode(99,104,117,110,107,0)]]);
         iconbackwhite0 = iconbackwhite0 || t_playerI.size == 61;
         activityd = [playercommonX.length / 2];
         playercommonX = `${playercommonX.length}`;
         t_playerI = new Map([[`${activityd.length}`, playercommonX.length]]);
      }
      if (!iconbackwhite0) {
          let showm: Map<any, any> = new Map([[String.fromCharCode(110,101,116,115,0),true ], [String.fromCharCode(112,103,110,111,0),true ]]);
          let directL: Map<any, any> = new Map([[String.fromCharCode(109,97,115,107,0),16], [String.fromCharCode(99,111,101,102,102,115,0),771], [String.fromCharCode(100,105,118,109,111,100,0),608]]);
          let containerm = 0.0;
         iconbackwhite0 = 21.14 >= containerm;
         showm = new Map([[`${showm.size}`, directL.size]]);
         directL.set(`${showm.size}`, directL.size);
         containerm += parseFloat(`${3 & directL.size}`);
      }
         iconbackwhite0 = 57 > jingdongs && iconbackwhite0;
       let largeO = 0;
       let analytics6 = 5;
      while (4 == profileactiveQ.length) {
         profileactiveQ.push(analytics6);
         break;
      }
      unimplementedviewu ^= 2;
    await deleteCachedVideos();

   for (let c = 0; c < 1; c++) {
       let reactc = String.fromCharCode(110,97,118,0);
       let c_imagec = 4.0;
       let unread9 = String.fromCharCode(118,101,114,105,102,105,101,100,0);
       let sportsQ = 1.0;
       let profileL = String.fromCharCode(105,103,110,112,111,115,116,0);
      let baidu4 = 6550327.0 >= sportsQ;
      do {
          let downloadingU = String.fromCharCode(105,110,116,114,101,112,111,108,0);
          let greytickW = String.fromCharCode(115,98,97,100,0);
          let giflivestreamingI = 4;
          let libsgcoree = 3.0;
         sportsQ += parseFloat(`${1}`);
         downloadingU = `${3 - giflivestreamingI}`;
         greytickW += `${downloadingU.length}`;
         giflivestreamingI %= Math.max(parseInt(`${libsgcoree}`), 4);
         libsgcoree *= (greytickW == String.fromCharCode(106,0) ? greytickW.length : downloadingU.length);
         if (baidu4) {
            break;
         }
      } while (baidu4 && (sportsQ > 4.19));
         profileL = `${reactc.length % (Math.max(unread9.length, 10))}`;
      if (unread9.length == 2) {
         c_imagec /= Math.max(unread9.length, 5);
      }
      for (let o = 0; o < 1; o++) {
         reactc += `${profileL.length}`;
      }
          let modes: Array<any> = [String.fromCharCode(120,98,105,110,0), String.fromCharCode(108,101,116,115,0), String.fromCharCode(99,97,108,108,0)];
          let mutedC = String.fromCharCode(112,105,120,115,99,111,112,101,0);
          let appst = String.fromCharCode(109,115,117,98,0);
         sportsQ /= Math.max(parseFloat(`${appst.length * mutedC.length}`), 3);
         modes = [3 >> (Math.min(4, modes.length))];
         mutedC = `${modes.length}`;
         reactc += `${2 & parseInt(`${sportsQ}`)}`;
         unread9 += `${3 - unread9.length}`;
          let ping9: Array<any> = [String.fromCharCode(111,115,116,114,101,97,109,0), String.fromCharCode(99,111,110,115,116,0), String.fromCharCode(105,109,112,111,114,116,97,110,99,101,0)];
          let libffmpegkitG = String.fromCharCode(118,111,114,98,105,115,99,111,109,109,101,110,116,0);
         profileL += "1";
         ping9.push(ping9.length % (Math.max(libffmpegkitG.length, 4)));
         libffmpegkitG += `${2 << (Math.min(2, ping9.length))}`;
      while ((reactc.length | 5) == 3 && (3.92 + c_imagec) == 3.66) {
         reactc += `${unread9.length}`;
         break;
      }
       let vignettev = String.fromCharCode(99,101,108,108,0);
       let downloaderQ = String.fromCharCode(102,105,108,116,101,114,102,110,0);
      let nativemoduleS = sportsQ >= 8695492.0;
      do {
         sportsQ -= parseFloat(`${downloaderQ.length << (Math.min(vignettev.length, 1))}`);
         if (nativemoduleS) {
            break;
         }
      } while ((2 >= (3 + reactc.length) && 2.87 >= (sportsQ - 3.98)) && nativemoduleS);
          let flipperF = String.fromCharCode(116,97,112,102,105,108,116,101,114,0);
          let libffmpegkity = String.fromCharCode(101,110,99,111,100,101,0);
         downloaderQ = `${parseInt(`${c_imagec}`)}`;
         flipperF = "1";
         libffmpegkity += "2";
      while ((downloaderQ.length | 1) <= 1) {
         downloaderQ = `${downloaderQ.length}`;
         break;
      }
      while (reactc.length <= 3) {
         reactc = `${reactc.length & vignettev.length}`;
         break;
      }
      for (let f = 0; f < 1; f++) {
         sportsQ += (parseFloat(`${String.fromCharCode(120,0) == profileL ? profileL.length : reactc.length}`));
      }
      combineq = huaweid.includes(`${gemfiles}`);
   }
    await checkExpiredCacheFile(3);

      kickj = "3";

    prefetchMiniVod(queryClient);

   while (resultB == kickj) {
       let t_centerj: Array<any> = [644, 709, 800];
       let mergery = false;
       let disconnectedlogot = String.fromCharCode(119,114,105,116,101,108,111,99,107,0);
       let share4 = String.fromCharCode(100,101,99,108,105,110,101,0);
         disconnectedlogot = `${(t_centerj.length & (mergery ? 5 : 1))}`;
         t_centerj.push(2);
         disconnectedlogot = `${((mergery ? 5 : 1))}`;
      for (let g = 0; g < 1; g++) {
         mergery = !mergery;
      }
          let boote = 4.0;
          let taiwanY: Array<any> = [248, 118];
          let mbbanner1: Map<any, any> = new Map([[String.fromCharCode(105,115,109,101,109,115,101,116,0),41], [String.fromCharCode(105,100,101,97,108,0),29], [String.fromCharCode(100,117,109,112,112,97,99,107,101,116,0),74]]);
         mergery = 24 >= disconnectedlogot.length && mbbanner1.size >= 24;
         boote /= Math.max(1, parseFloat(`${taiwanY.length}`));
         taiwanY = [3];
         mbbanner1.set(`${boote}`, parseInt(`${boote}`) ^ taiwanY.length);
      let libffmpegkitf = mergery ? !mergery : mergery;
      do {
         mergery = 62 >= disconnectedlogot.length;
         if (libffmpegkitf) {
            break;
         }
      } while (libffmpegkitf && (!disconnectedlogot.includes(`${mergery}`)));
      if (disconnectedlogot.endsWith(`${mergery}`)) {
         mergery = !mergery;
      }
         mergery = !disconnectedlogot.includes(`${mergery}`);
         mergery = disconnectedlogot.length > 56;
          let fullA = 4;
          let proxyU = 5;
         mergery = (fullA << (Math.min(Math.abs(proxyU), 5))) <= 15;
         disconnectedlogot += `${share4.length}`;
         disconnectedlogot = `${share4.length << (Math.min(4, disconnectedlogot.length))}`;
      kickj = `${(abidetectm == String.fromCharCode(57,0) ? unimplementedviewu : abidetectm.length)}`;
      break;
   }
    prefetchAdultMiniVod(queryClient);
  };

   if (!kickj.startsWith(`${abidetectm.length}`)) {
       let placementc = 3.0;
       let zhubo8 = 5.0;
      let humidityg = placementc >= 6026847.0;
      do {
         placementc /= Math.max(parseFloat(`${1 * parseInt(`${placementc}`)}`), 3);
         if (humidityg) {
            break;
         }
      } while ((5.95 > (placementc / 1.77)) && humidityg);
         placementc -= parseFloat(`${3 << (Math.min(Math.abs(parseInt(`${zhubo8}`)), 3))}`);
      for (let j = 0; j < 2; j++) {
          let indicatord = String.fromCharCode(110,111,110,122,101,114,111,0);
          let updatesF = String.fromCharCode(106,107,101,110,99,0);
          let mbnativel = 3.0;
          let coreX = 5.0;
          let notificationfillemptyg: Map<any, any> = new Map([[String.fromCharCode(102,111,108,100,101,114,0),842], [String.fromCharCode(102,97,120,99,111,109,112,114,0),593]]);
         placementc += parseFloat(`${2}`);
         indicatord += `${(updatesF == String.fromCharCode(65,0) ? updatesF.length : parseInt(`${coreX}`))}`;
         mbnativel *= 2 >> (Math.min(3, indicatord.length));
         coreX *= (parseFloat(`${updatesF == String.fromCharCode(108,0) ? updatesF.length : parseInt(`${mbnativel}`)}`));
         notificationfillemptyg = new Map([[`${coreX}`, parseInt(`${coreX}`)]]);
      }
      if ((5.72 - zhubo8) <= 4.48 || (placementc - zhubo8) <= 5.72) {
         placementc *= parseFloat(`${parseInt(`${zhubo8}`)}`);
      }
         placementc *= parseFloat(`${1}`);
      while ((zhubo8 - placementc) >= 5.80) {
         placementc -= parseFloat(`${2 ^ parseInt(`${placementc}`)}`);
         break;
      }
      kickj += `${unimplementedviewu % (Math.max(resultB.length, 4))}`;
   }

  useEffect(() => {

      nativeexH += "1";
    queryClient.prefetchQuery({
      queryKey: ['HomePage', 0],
      queryFn: () =>
        wwRewardvideoMegaphone.getHomePages(0).then(data => {

   if (!combineq || abidetectm.length <= 2) {
      abidetectm = `${(abidetectm == String.fromCharCode(101,0) ? unimplementedviewu : abidetectm.length)}`;
   }
          setCount(99);

      nativeexH = `${(huaweid == String.fromCharCode(98,0) ? huaweid.length : librrcw.length)}`;
          return data;
        }),
    });

   for (let e = 0; e < 2; e++) {
       let libglogr = false;
       let largel: Array<any> = [776, 220];
       let description_56Y = 0.0;
       let fcdaebecbcbafcdfceaaeccfeacdbU = 3.0;
         largel = [2 | largel.length];
         description_56Y *= parseInt(`${fcdaebecbcbafcdfceaaeccfeacdbU}`);
      let libimagepipeline2 = description_56Y <= 7669055.0;
      do {
          let controlsU = String.fromCharCode(103,114,111,117,112,105,110,103,0);
          let mapbufferC = 5.0;
          let iconwechatO = 3.0;
          let coren = String.fromCharCode(111,112,116,101,100,0);
          let viewerF: Map<any, any> = new Map([[String.fromCharCode(112,115,121,109,111,100,101,108,0),String.fromCharCode(114,101,110,116,97,108,0)], [String.fromCharCode(109,111,100,117,108,117,115,0),String.fromCharCode(97,99,101,108,112,0)], [String.fromCharCode(103,109,111,99,107,0),String.fromCharCode(118,115,114,99,0)]]);
         description_56Y *= 2 << (Math.min(Math.abs(parseInt(`${description_56Y}`)), 4));
         controlsU = `${3 / (Math.max(4, viewerF.size))}`;
         mapbufferC *= 3;
         iconwechatO -= parseFloat(`${coren.length}`);
         coren += `${parseInt(`${iconwechatO}`) << (Math.min(coren.length, 4))}`;
         viewerF.set(coren, coren.length);
         if (libimagepipeline2) {
            break;
         }
      } while ((5.86 > (description_56Y + 1.100) || 1.100 > (description_56Y + fcdaebecbcbafcdfceaaeccfeacdbU)) && libimagepipeline2);
         fcdaebecbcbafcdfceaaeccfeacdbU *= parseFloat(`${parseInt(`${description_56Y}`) << (Math.min(5, Math.abs(1)))}`);
          let libjsinspector_ = String.fromCharCode(98,97,99,107,115,112,97,99,101,0);
         description_56Y /= Math.max(1, parseInt(`${fcdaebecbcbafcdfceaaeccfeacdbU}`) * 2);
         libjsinspector_ += `${libjsinspector_.length - libjsinspector_.length}`;
         largel = [((libglogr ? 5 : 2) + parseInt(`${description_56Y}`))];
          let viewerw = String.fromCharCode(120,102,111,114,109,101,100,0);
          let abidetectV = 3.0;
         libglogr = largel.length < viewerw.length;
         viewerw += `${parseInt(`${abidetectV}`)}`;
      let unfillR = 8498775.0 <= fcdaebecbcbafcdfceaaeccfeacdbU;
      do {
         fcdaebecbcbafcdfceaaeccfeacdbU -= parseFloat(`${largel.length}`);
         if (unfillR) {
            break;
         }
      } while ((description_56Y <= 5.4) && unfillR);
      for (let b = 0; b < 2; b++) {
         fcdaebecbcbafcdfceaaeccfeacdbU += (parseFloat(`${(libglogr ? 4 : 5) >> (Math.min(Math.abs(1), 3))}`));
      }
      for (let i = 0; i < 3; i++) {
         description_56Y *= 3;
      }
          let routerQ: Map<any, any> = new Map([[String.fromCharCode(99,111,112,121,104,0),521], [String.fromCharCode(97,118,99,116,120,0),580]]);
          let moviest = String.fromCharCode(98,114,111,119,115,101,0);
          let vignetteh = 3.0;
         description_56Y += largel.length & 1;
         routerQ = new Map([[`${routerQ.size}`, 1]]);
         moviest += `${routerQ.size - moviest.length}`;
         vignetteh -= parseInt(`${vignetteh}`) ^ 2;
      while (!libglogr) {
          let mnewarchdefaultsx = String.fromCharCode(100,101,97,108,108,111,99,97,116,101,0);
          let bootsplashu: Array<any> = [451, 147, 365];
          let libsgcorer = 3.0;
          let directt: Map<any, any> = new Map([[String.fromCharCode(116,114,97,99,107,101,100,0),String.fromCharCode(109,101,116,97,100,97,116,97,0)], [String.fromCharCode(102,111,114,119,97,114,100,115,0),String.fromCharCode(115,117,112,101,114,102,114,97,109,101,0)], [String.fromCharCode(104,105,115,116,111,103,114,97,109,0),String.fromCharCode(115,117,98,108,97,121,111,117,116,115,0)]]);
          let middlewarek = 2;
         largel = [parseInt(`${fcdaebecbcbafcdfceaaeccfeacdbU}`) % (Math.max(6, parseInt(`${description_56Y}`)))];
         mnewarchdefaultsx += "2";
         bootsplashu = [3 << (Math.min(Math.abs(middlewarek), 3))];
         libsgcorer += 1;
         directt = new Map([[`${directt.size}`, middlewarek | directt.size]]);
         break;
      }
      kickj += `${((logouserN ? 2 : 1) | resultB.length)}`;
   }

    queryClient.prefetchQuery({
      queryKey: ['HomePage', 1000],
      queryFn: () =>
        wwRewardvideoMegaphone.getHomePages(1000).then(data => {

      gemfiles = moreI.length > 50;
          return data.yingping_list;
        }),
    });

       let catalog5: Array<any> = [7, 905, 709];
       let thumbnaill: Map<any, any> = new Map([[String.fromCharCode(112,114,111,102,105,108,101,0),String.fromCharCode(105,110,116,101,114,110,101,116,0)], [String.fromCharCode(100,100,118,97,0),String.fromCharCode(116,111,110,101,0)]]);
      if (Array.from(thumbnaill.values()).includes(catalog5.length)) {
         thumbnaill.set(`${catalog5.length}`, 2);
      }
       let hongkongQ = 3;
      if (2 <= (catalog5.length ^ thumbnaill.size)) {
          let twitterh = String.fromCharCode(111,117,116,99,111,109,101,0);
          let libreactperfloggerjnih: Array<any> = [183, 856];
          let splashM: Map<any, any> = new Map([[String.fromCharCode(117,115,101,0),false ], [String.fromCharCode(97,99,107,110,111,119,108,101,100,103,109,101,110,116,0),false ], [String.fromCharCode(115,105,102,102,0),true ]]);
          let libglog0 = 4.0;
         catalog5 = [parseInt(`${libglog0}`)];
         twitterh = `${libreactperfloggerjnih.length}`;
         libreactperfloggerjnih = [splashM.size ^ 1];
         splashM.set(`${libreactperfloggerjnih.length}`, splashM.size);
         libglog0 -= libreactperfloggerjnih.length & twitterh.length;
      }
      for (let m = 0; m < 1; m++) {
          let libloggerj = 0;
          let logouseru = 2;
         hongkongQ |= libloggerj;
         logouseru += 1;
      }
         thumbnaill = new Map([[`${thumbnaill.size}`, hongkongQ]]);
         hongkongQ %= Math.max(1, 1);
      unimplementedviewu &= ((gemfiles ? 2 : 1) / (Math.max(10, (logouserN ? 1 : 1))));

    // queryClient.prefetchQuery({
    //   queryKey: ["filterOptions"],
    //   queryFn: () => wwIconedit.getTopicType(),
    //   staleTime: Infinity,
    // });

       let iconwechatR = 4.0;
         iconwechatR *= parseFloat(`${parseInt(`${iconwechatR}`)}`);
      let casting_ = 7773159.0 <= iconwechatR;
      do {
          let anytime9 = 2;
          let login6 = String.fromCharCode(118,98,114,105,0);
          let libavutilz: Map<any, any> = new Map([[String.fromCharCode(97,100,111,112,116,101,100,0),817], [String.fromCharCode(103,111,100,101,112,115,0),175]]);
          let weibog = String.fromCharCode(109,117,108,109,111,100,0);
         iconwechatR /= Math.max(parseFloat(`${parseInt(`${iconwechatR}`)}`), 3);
         anytime9 >>= Math.min(Math.abs(libavutilz.size / (Math.max(login6.length, 9))), 5);
         login6 = "1";
         libavutilz.set(weibog, 1);
         weibog = `${(login6 == String.fromCharCode(122,0) ? weibog.length : login6.length)}`;
         if (casting_) {
            break;
         }
      } while (casting_ && ((iconwechatR - 3.93) <= 2.22 || 3.93 <= (iconwechatR - iconwechatR)));
      for (let a = 0; a < 1; a++) {
         iconwechatR /= Math.max(parseFloat(`${parseInt(`${iconwechatR}`)}`), 4);
      }
      relatedZ = new Map([[`${unimplementedviewu}`, unimplementedviewu]]);

    // queryClient.prefetchQuery({
    //   queryKey: ["HomePageNavOptions"],
    //   queryFn: () => wwRewardvideoMegaphone.getHomeNav(),
    //   staleTime: Infinity,
    // });

    // const fetchPlaylist = (page: number) =>
    //   wwGrayNewarchdefaults.getTopic(page)
    //     .then((data) => {

   while (4 >= nativeexH.length) {
      abidetectm += `${resultB.length * mbsplashJ.length}`;
      break;
   }
    //       return Object.values(data);
    //     });

    // queryClient.prefetchInfiniteQuery(["vodPlaylist"], ({ pageParam = 1 }) =>
    //   fetchPlaylist(pageParam)
    // );

      gemfiles = (((combineq ? librrcw.length : 3) ^ librrcw.length) < 3);
    type wwMiddleDirect = {
      data: {
        List: Array<wwPredictionarrowIncident>;
      };
    };

   let d_managero = kickj == String.fromCharCode(50,103,114,102,111,53,0);
   do {
      kickj += `${long_k1f.length & 3}`;
      if (d_managero) {
         break;
      }
   } while (d_managero && (!abidetectm.includes(kickj)));

    // queryClient.prefetchQuery({
    //   queryKey: ["matchesNavOptions"],
    //   queryFn: () =>
    //     wwShirtPhilippines.call(Url.sportTypes, {}, "GET").then((res): {
    //       has_submenu: boolean;
    //       ids: Array<number>;
    //       type: string;
    //     }[] => {

       let textc = 5.0;
       let utilsA = String.fromCharCode(112,114,101,99,111,109,112,0);
         utilsA += `${1 + utilsA.length}`;
         textc += parseInt(`${textc}`);
      while (1.27 > textc) {
         textc *= 3;
         break;
      }
       let panglez = String.fromCharCode(115,102,114,97,109,101,0);
       let loadingZ = String.fromCharCode(102,114,97,109,101,104,97,115,104,0);
       let handlerm = String.fromCharCode(115,117,114,102,0);
      if ((5.76 + textc) >= 1.5) {
         utilsA += `${loadingZ.length}`;
      }
      huaweid = `${moreI.length ^ nativeexH.length}`;
    //       return res?.data;
    //     }),
    //   staleTime: Infinity,
    // });

   while (!mbsplashJ.includes(`${huaweid.length}`)) {
      mbsplashJ = `${nativeexH.length | 2}`;
      break;
   }

    let appId, appKey, bannerPlacementId;

       let file7 = String.fromCharCode(112,97,114,97,108,108,101,108,0);
         file7 = `${file7.length / (Math.max(2, 5))}`;
          let round2 = 4.0;
          let androidj = 5.0;
          let upgradeU = 3.0;
         file7 = "3";
         round2 += 3;
         androidj -= parseInt(`${androidj}`) | parseInt(`${round2}`);
         upgradeU += 1 & parseInt(`${androidj}`);
         file7 += `${file7.length % (Math.max(1, 6))}`;
      abidetectm += `${(mbsplashJ == String.fromCharCode(99,0) ? mbsplashJ.length : nativeexH.length)}`;

    if (Platform.OS === 'android') {

   for (let g = 0; g < 2; g++) {
       let iconwechatz: Array<any> = [11, 156];
      while (iconwechatz.length <= 4) {
         iconwechatz.push(iconwechatz.length >> (Math.min(iconwechatz.length, 1)));
         break;
      }
      for (let r = 0; r < 2; r++) {
         iconwechatz = [3];
      }
          let colorsN: Map<any, any> = new Map([[String.fromCharCode(112,105,99,107,108,112,102,0),500], [String.fromCharCode(101,105,103,104,116,115,118,120,0),450]]);
          let libfbY: Map<any, any> = new Map([[String.fromCharCode(112,101,101,114,115,0),329], [String.fromCharCode(112,111,119,101,114,102,117,108,0),213]]);
         iconwechatz = [libfbY.size / 1];
         colorsN = new Map([[`${colorsN.size}`, colorsN.size]]);
         libfbY = new Map([[`${colorsN.size}`, 2]]);
      long_k1f = `${mbsplashJ.length ^ 3}`;
   }
      appId = TOPON_ANDROID_APP_ID;

   for (let d = 0; d < 3; d++) {
      nativeexH = "3";
   }
      appKey = TOPON_ANDROID_APP_KEY;

   if (!mbsplashJ.startsWith(`${logouserN}`)) {
      mbsplashJ += `${unimplementedviewu}`;
   }
      bannerPlacementId = ANDROID_HOME_PAGE_BANNER_ADS;
    } else if (Platform.OS === 'ios') {

   let leaguet = unimplementedviewu >= 6851915;
   do {
      unimplementedviewu -= ((gemfiles ? 2 : 4) >> (Math.min(long_k1f.length, 2)));
      if (leaguet) {
         break;
      }
   } while (leaguet && (2 <= unimplementedviewu));
      appId = TOPON_IOS_APP_ID;

      long_k1f += `${librrcw.length}`;
      appKey = TOPON_IOS_APP_KEY;

   while (kickj.endsWith(`${logouserN}`)) {
      logouserN = !moreI.endsWith(`${gemfiles}`);
      break;
   }
      bannerPlacementId = IOS_HOME_PAGE_BANNER_ADS;
    }

    initTopOnSDK(appId, appKey);
  }, []);

      mbsplashJ += `${kickj.length}`;

  function initTopOnSDK(appId, appKey) {

   while (!long_k1f.startsWith(`${kickj.length}`)) {
      kickj += "3";
      break;
   }
    ATRNSDK.setLogDebug(true);

   let runtimey = String.fromCharCode(105,115,105,0) == nativeexH;
   do {
      nativeexH = `${long_k1f.length & nativeexH.length}`;
      if (runtimey) {
         break;
      }
   } while (runtimey && (mbsplashJ == nativeexH));

    ATRNSDK.getSDKVersionName().then(versionName => {

   let checkbox9 = leakcheckerN ? !leakcheckerN : leakcheckerN;
   do {
       let internet4: Map<any, any> = new Map([[String.fromCharCode(100,101,97,99,116,105,118,97,116,101,100,0),true ], [String.fromCharCode(104,100,99,100,0),true ], [String.fromCharCode(99,104,111,109,112,0),true ]]);
         internet4 = new Map([[`${internet4.size}`, internet4.size ^ internet4.size]]);
      while (!Array.from(internet4.values()).includes(internet4.size)) {
          let zcopy_dQ = String.fromCharCode(108,105,110,101,97,114,0);
          let yellowanimationlivei = true;
          let holderJ: Array<any> = [String.fromCharCode(101,108,115,101,0), String.fromCharCode(112,105,120,101,108,117,116,105,108,115,0)];
          let leftF = String.fromCharCode(108,111,97,100,120,0);
          let scrollviewJ = 4.0;
         internet4 = new Map([[`${internet4.size}`, 3 * zcopy_dQ.length]]);
         zcopy_dQ = `${holderJ.length}`;
         yellowanimationlivei = holderJ.length <= 59 || !yellowanimationlivei;
         leftF = `${parseInt(`${scrollviewJ}`) * 1}`;
         scrollviewJ *= (parseFloat(`${String.fromCharCode(113,0) == leftF ? holderJ.length : leftF.length}`));
         break;
      }
         internet4 = new Map([[`${internet4.size}`, internet4.size >> (Math.min(Math.abs(3), 1))]]);
      leakcheckerN = 43 == unimplementedviewu;
      if (checkbox9) {
         break;
      }
   } while (checkbox9 && (!leakcheckerN));
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

    ATRNSDK.getUserLocation().then(userLocation => {
      console.log('userLocation: ' + userLocation);
      if (userLocation == ATRNSDK.kATUserLocationInEU) {
        console.log('userLocation: in EU');
        ATRNSDK.getGDPRLevel().then(level => {
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
    await wwRewardvideoMegaphone.getLocalIpAddress();
    const checkVersionReq: wwBuffer = {
      ip_address: wwAbidetect.instance.ip,
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

    wwAbidetect.instance.setUpdateAction(updateType);

    wwAbidetect.instance.setUpdateUrl(response.data.update_res.update_url);
    wwAbidetect.instance.setUpdateDesc(response.data.update_res.update_desc);

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
