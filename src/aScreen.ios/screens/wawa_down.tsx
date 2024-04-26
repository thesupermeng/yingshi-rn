import React, { useCallback, useEffect, useState, memo, useContext } from "react";
import { Dimensions, Platform, StyleSheet, View } from "react-native";
import ScreenContainer from "../components/container/wawa_nterstitial_iconpipexpand";
import { useFocusEffect, useTheme } from "@react-navigation/native";
import { useQuery, useQueries, UseQueryResult } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import {
  wawaNterstitial,
} from "@type/wawa_gradlew";
import {
  BottomTabScreenProps,
  useBottomTabBarHeight,
} from "@react-navigation/bottom-tabs";
import {
  ANDROID_HOME_PAGE_POP_UP_ADS,
  API_DOMAIN,
  IOS_HOME_PAGE_POP_UP_ADS,
} from "@utility/wawa_iconpointscore";
import CatagoryHome from "../components/container/wawa_libcrashsdk";
import RecommendationHome from "../components/container/wawa_yellowredcard_render";
import HomeHeader from "../components/header/wawa_favorite_header";
import FastImage from "../components/common/wawa_iconarrowrightblack";
import { useIsFocused } from "@react-navigation/native";
import NoConnection from "./../components/common/wawa_filed_privacy";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";
import { useAppSelector, useAppDispatch, useSelector } from "@hooks/wawa_root";
import { wawaIconsubssuccess } from "@redux/wawa_bgvipsport_spinner";
import { wawaBackground } from "@redux/reducers/wawa_comment";
import HomeNav from "../components/tabNavigate/wawa_fill_view";

import {
  ATRNSDK,
  ATInterstitialRNSDK,
  ATBannerRNSDK,
} from "./../../../AnyThinkAds/wawa_tick";
import { AdsBannerContext } from "../../contexts/wawa_analytics";

import wawa_dacccfaabfbcbadeebddcabacdffdbc_video from "../../../Umeng/wawa_dacccfaabfbcbadeebddcabacdffdbc_video";
import { wawaHiadCanvas } from "@api";
import DeviceInfo from "react-native-device-info";
import { wawaPhoneControls } from "@redux/reducers/wawa_umeng";
import { wawaLibglog } from "@models/wawa_refreshborderless_found";

function wawa_down({ navigation }: BottomTabScreenProps<any>) {
  const isFocused = useIsFocused();
  const { colors, spacing } = useTheme();
  const [navId, setNavId] = useState(0);
  const queryClient = useQueryClient();
  const [isOffline, setIsOffline] = useState(false);
  const [showHomeLoading, setShowHomeLoading] = useState(true);
  const settingsReducer: wawaBackground = useAppSelector(
    ({ settingsReducer }: wawaIconsubssuccess) => settingsReducer
  );
  const userState = useSelector<wawaPhoneControls>('userReducer');
  const isVip = wawaLibglog.isVip(userState.user);
  const bottomTabHeight = useBottomTabBarHeight();

  const { data: navOptions, refetch } = useQuery({
    queryKey: ["HomePageNavOptions"],
    queryFn: () => wawaHiadCanvas.getHomeNav(),
  });

  const fetchData = useCallback((id: number) => wawaHiadCanvas.getHomePages(id, isVip), []);

  const data = useQueries({
    queries: navOptions
      ? navOptions?.map((x: any) => ({
        queryKey: ["HomePage", x.id],
        queryFn: () => fetchData(x.id),
      }))
      : [],
  });

  const checkConnection = async () => {
       let mail5 = 0.0;
    let episodesC = String.fromCharCode(105,103,110,111,114,101,100,95,121,95,49,49,0);
    let photos = String.fromCharCode(97,95,49,95,100,101,97,108,108,111,99,97,116,101,0);
    let favoriteZ = String.fromCharCode(105,115,114,101,97,100,111,110,108,121,95,51,95,49,53,0);
    let playH = String.fromCharCode(119,95,55,55,95,116,114,97,112,0);
    let redirectn = String.fromCharCode(118,95,51,48,95,108,98,108,0);
    let close_ = 0.0;
    let plusG = String.fromCharCode(114,101,112,111,114,116,115,95,109,95,53,51,0);
    let halffieldimageY = 2;
    let eventP = 2.0;
    let smallbrightnessl = false;
    let renderx = String.fromCharCode(102,100,101,99,95,106,95,52,56,0);
    let benefitO = String.fromCharCode(112,97,103,105,110,97,116,105,111,110,95,116,95,52,55,0);
    let defaultprofilepico = String.fromCharCode(115,121,109,98,111,108,95,104,95,55,49,0);
    let verticalx: Map<any, any> = new Map([[String.fromCharCode(115,107,105,112,105,110,116,114,97,95,57,95,49,51,0),243], [String.fromCharCode(106,95,55,53,95,102,105,108,101,114,101,97,100,115,116,114,101,97,109,0),655], [String.fromCharCode(112,97,114,116,105,116,105,111,110,105,110,103,95,57,95,51,54,0),369]]);
       let stringsY = 1.0;
       let chatbotphotol = String.fromCharCode(99,111,110,110,101,99,116,95,102,95,54,48,0);
      while (4.31 < (stringsY * 5.82)) {
         stringsY -= parseFloat(`${3 & chatbotphotol.length}`);
         break;
      }
      let reactnativeratingst = stringsY >= 7549525.0;
      do {
          let lessl = false;
          let settingv = 5.0;
         stringsY *= parseFloat(`${parseInt(`${stringsY}`) * 1}`);
         lessl = !lessl;
         settingv /= Math.max(3, (parseFloat(`${(lessl ? 1 : 1) / (Math.max(parseInt(`${settingv}`), 6))}`)));
         if (reactnativeratingst) {
            break;
         }
      } while (reactnativeratingst && (4 == (2 >> (Math.min(4, chatbotphotol.length))) || (1.34 * stringsY) == 1.51));
         chatbotphotol = "2";
      while (1 >= (chatbotphotol.length & 2) && 3 >= (2 + parseInt(`${stringsY}`))) {
          let verticalL = 4.0;
         chatbotphotol = `${(chatbotphotol == String.fromCharCode(76,0) ? chatbotphotol.length : parseInt(`${verticalL}`))}`;
         break;
      }
         chatbotphotol += `${chatbotphotol.length << (Math.min(Math.abs(3), 1))}`;
          let sinav = 3.0;
          let episodeH = String.fromCharCode(105,95,53,52,95,100,101,112,111,115,105,116,0);
         chatbotphotol = "2";
         sinav -= 1 >> (Math.min(2, episodeH.length));
         episodeH += `${episodeH.length & parseInt(`${sinav}`)}`;
      eventP += parseFloat(`${parseInt(`${mail5}`) << (Math.min(episodesC.length, 4))}`);
      smallbrightnessl = photos.length > halffieldimageY;
   while (favoriteZ.startsWith(`${eventP}`)) {
      favoriteZ = "3";
      break;
   }
      redirectn = `${favoriteZ.length}`;
   while (2.52 < (5.40 / (Math.max(6, mail5)))) {
      mail5 += ((smallbrightnessl ? 1 : 3) % (Math.max(4, parseInt(`${close_}`))));
      break;
   }
       let iconarrowrightblackQ: Map<any, any> = new Map([[String.fromCharCode(108,97,115,114,95,53,95,51,49,0),816], [String.fromCharCode(114,97,110,103,101,115,95,121,95,54,0),736], [String.fromCharCode(120,95,55,56,95,115,119,105,122,122,108,101,100,0),355]]);
      for (let u = 0; u < 3; u++) {
          let libglogg = String.fromCharCode(104,105,100,105,110,103,95,104,95,50,0);
          let cancelm = String.fromCharCode(106,95,52,51,95,116,104,114,111,116,116,108,105,110,103,0);
         iconarrowrightblackQ = new Map([[`${iconarrowrightblackQ.size}`, (String.fromCharCode(100,0) == libglogg ? libglogg.length : iconarrowrightblackQ.size)]]);
         cancelm += "3";
      }
      while (Array.from(iconarrowrightblackQ.keys()).includes(`${iconarrowrightblackQ.size}`)) {
         iconarrowrightblackQ = new Map([[`${iconarrowrightblackQ.size}`, 2 >> (Math.min(4, Math.abs(iconarrowrightblackQ.size)))]]);
         break;
      }
      if ((iconarrowrightblackQ.size / (Math.max(iconarrowrightblackQ.size, 3))) >= 4) {
         iconarrowrightblackQ = new Map([[`${iconarrowrightblackQ.size}`, iconarrowrightblackQ.size - iconarrowrightblackQ.size]]);
      }
      favoriteZ += `${playH.length ^ 1}`;
      redirectn = "2";

    const state = await NetInfo.fetch();

   while (playH.length < renderx.length) {
       let aboutv = 4.0;
       let emojiheartC = 5.0;
       let iconarrowrightwhiteJ = 1;
      while (3.53 <= (emojiheartC / (Math.max(aboutv, 9))) && (3.53 / (Math.max(6, emojiheartC))) <= 3.86) {
         aboutv += parseFloat(`${2 / (Math.max(parseInt(`${emojiheartC}`), 8))}`);
         break;
      }
      while (1.14 >= (3 * emojiheartC)) {
          let promotiono = String.fromCharCode(114,101,119,114,105,116,101,114,95,117,95,55,50,0);
          let graphicsT = false;
          let flipperD: Map<any, any> = new Map([[String.fromCharCode(97,95,56,57,95,118,101,110,117,101,115,0),String.fromCharCode(109,95,54,55,95,118,101,114,116,105,99,101,115,0)], [String.fromCharCode(106,111,105,110,101,114,95,51,95,54,55,0),String.fromCharCode(110,95,56,51,95,97,98,115,120,0)], [String.fromCharCode(109,106,112,101,103,106,112,101,103,95,110,95,50,54,0),String.fromCharCode(112,105,110,115,95,110,95,50,48,0)]]);
          let notificationfilled6 = String.fromCharCode(98,97,99,107,108,105,103,104,116,95,99,95,51,50,0);
         aboutv /= Math.max(parseFloat(`${notificationfilled6.length % 2}`), 1);
         promotiono += `${(flipperD.size % (Math.max(3, (graphicsT ? 2 : 1))))}`;
         graphicsT = promotiono == String.fromCharCode(103,0);
         flipperD = new Map([[`${flipperD.size}`, promotiono.length + flipperD.size]]);
         notificationfilled6 = "3";
         break;
      }
         aboutv += parseFloat(`${3 & parseInt(`${aboutv}`)}`);
          let libzeusM = String.fromCharCode(108,95,51,57,95,109,115,112,101,108,0);
          let circlea: Array<any> = [624, 435];
          let trashR = 3;
         iconarrowrightwhiteJ &= circlea.length / (Math.max(4, iconarrowrightwhiteJ));
         libzeusM = `${trashR}`;
         circlea = [libzeusM.length | 2];
         trashR >>= Math.min(3, Math.abs(libzeusM.length << (Math.min(1, Math.abs(trashR)))));
          let gpayv = String.fromCharCode(118,95,49,95,97,112,112,114,116,99,0);
          let reactnavigationO = 5.0;
          let overlayl = String.fromCharCode(101,114,115,105,111,110,95,50,95,53,56,0);
         aboutv -= parseFloat(`${parseInt(`${reactnavigationO}`) ^ iconarrowrightwhiteJ}`);
         gpayv += `${overlayl.length / 3}`;
         reactnavigationO *= gpayv.length;
         overlayl += `${overlayl.length >> (Math.min(Math.abs(1), 1))}`;
         aboutv *= parseFloat(`${1 / (Math.max(7, parseInt(`${aboutv}`)))}`);
          let projectS = 4.0;
          let loadingspinnerT: Map<any, any> = new Map([[String.fromCharCode(104,95,51,54,95,116,119,105,99,101,0),877], [String.fromCharCode(102,95,49,49,95,115,116,114,105,100,101,98,0),901]]);
         emojiheartC /= Math.max(5, iconarrowrightwhiteJ);
         projectS += 1 & loadingspinnerT.size;
         loadingspinnerT.set(`${projectS}`, 3);
      while (2.86 > emojiheartC) {
          let resendY = false;
         aboutv *= parseFloat(`${iconarrowrightwhiteJ & parseInt(`${emojiheartC}`)}`);
         resendY = !resendY;
         break;
      }
          let iconqqe = String.fromCharCode(105,110,100,101,111,95,48,95,52,52,0);
         iconarrowrightwhiteJ += iconarrowrightwhiteJ - 1;
         iconqqe += `${(iconqqe == String.fromCharCode(74,0) ? iconqqe.length : iconqqe.length)}`;
      playH = `${parseInt(`${eventP}`)}`;
      break;
   }
   for (let t = 0; t < 1; t++) {
      episodesC = `${halffieldimageY}`;
   }
      close_ *= (plusG == String.fromCharCode(73,0) ? plusG.length : redirectn.length);
      plusG += `${(renderx == String.fromCharCode(106,0) ? renderx.length : halffieldimageY)}`;
   for (let b = 0; b < 1; b++) {
      playH = `${1 / (Math.max(parseInt(`${close_}`), 10))}`;
   }
       let awayteamfieldK = 4;
       let hnewsshareh = String.fromCharCode(99,97,118,115,118,105,100,101,111,95,116,95,53,50,0);
       let gpayY = false;
         awayteamfieldK ^= (String.fromCharCode(71,0) == hnewsshareh ? hnewsshareh.length : (gpayY ? 5 : 2));
         hnewsshareh = `${2 >> (Math.min(3, hnewsshareh.length))}`;
      while ((awayteamfieldK | 2) < 2 && (2 | awayteamfieldK) < 3) {
         awayteamfieldK += (hnewsshareh.length / (Math.max(5, (gpayY ? 1 : 5))));
         break;
      }
          let showmore7 = String.fromCharCode(97,117,116,111,100,101,108,101,116,101,95,50,95,54,57,0);
         hnewsshareh = `${hnewsshareh.length}`;
         showmore7 += "1";
         hnewsshareh += `${((gpayY ? 5 : 1))}`;
      let libffmpegkita = hnewsshareh.length >= 4972013;
      do {
         hnewsshareh += `${awayteamfieldK}`;
         if (libffmpegkita) {
            break;
         }
      } while ((hnewsshareh.includes(`${gpayY}`)) && libffmpegkita);
      if (1 > (5 >> (Math.min(2, hnewsshareh.length))) || 2 > (5 >> (Math.min(3, Math.abs(awayteamfieldK))))) {
         hnewsshareh += `${awayteamfieldK}`;
      }
      let nativemoduleN = 9567436 <= hnewsshareh.length;
      do {
          let playershirtU = true;
          let predictionactiveT = String.fromCharCode(102,100,99,116,100,115,112,95,117,95,51,55,0);
          let dpluso = 0;
          let alertH = String.fromCharCode(111,112,97,116,111,109,95,53,95,57,0);
         hnewsshareh = `${dpluso << (Math.min(Math.abs(3), 1))}`;
         playershirtU = !playershirtU;
         predictionactiveT += `${2 << (Math.min(1, predictionactiveT.length))}`;
         dpluso /= Math.max(3, predictionactiveT.length ^ alertH.length);
         alertH += "2";
         if (nativemoduleN) {
            break;
         }
      } while ((!hnewsshareh.endsWith(`${gpayY}`)) && nativemoduleN);
          let sharemodalR = 1;
          let target3 = String.fromCharCode(119,105,110,116,104,114,101,97,100,95,101,95,49,56,0);
         awayteamfieldK *= 3;
         sharemodalR &= 2 | sharemodalR;
         target3 = `${target3.length >> (Math.min(Math.abs(3), 2))}`;
      redirectn = `${(episodesC.length >> (Math.min(3, Math.abs((smallbrightnessl ? 1 : 3)))))}`;
      close_ += ((smallbrightnessl ? 5 : 5) & photos.length);
    

   if (redirectn.length < 3) {
      smallbrightnessl = String.fromCharCode(68,0) == favoriteZ;
   }
      plusG = `${favoriteZ.length}`;
      favoriteZ += `${((smallbrightnessl ? 4 : 5) / (Math.max(renderx.length, 2)))}`;
   for (let v = 0; v < 2; v++) {
      photos = `${(2 + (smallbrightnessl ? 1 : 3))}`;
   }
      close_ *= playH.length % (Math.max(3, 7));
   let brightnessf = photos == String.fromCharCode(56,119,97,52,106,97,106,49,50,0);
   do {
       let lessz = String.fromCharCode(107,95,50,55,95,115,99,104,101,109,97,0);
       let settingsr = 4.0;
       let libjsinspectorP = String.fromCharCode(100,95,53,95,101,120,116,114,101,109,101,0);
       let libavdeviceT: Array<any> = [700, 596];
       let commonI = String.fromCharCode(110,95,53,52,95,98,105,116,112,108,97,110,101,0);
         settingsr -= libjsinspectorP.length >> (Math.min(2, libavdeviceT.length));
         libjsinspectorP = `${(libjsinspectorP == String.fromCharCode(69,0) ? libjsinspectorP.length : parseInt(`${settingsr}`))}`;
      while (lessz == commonI) {
          let vignetter = 5;
          let imageactionlivel = 4.0;
          let predictionlossg: Map<any, any> = new Map([[String.fromCharCode(110,95,50,55,95,105,110,115,101,114,116,105,111,110,115,0),79], [String.fromCharCode(117,95,49,56,95,102,102,116,115,0),274]]);
          let eventC: Map<any, any> = new Map([[String.fromCharCode(110,95,57,54,95,97,105,114,105,110,103,0),String.fromCharCode(122,95,53,51,95,100,101,109,97,110,103,108,101,0)], [String.fromCharCode(113,95,50,53,95,109,97,110,100,97,116,111,114,121,0),String.fromCharCode(119,97,118,112,97,99,107,95,109,95,52,49,0)], [String.fromCharCode(122,95,55,50,95,101,110,99,111,100,105,110,103,0),String.fromCharCode(99,100,110,95,109,95,57,50,0)]]);
          let mailG = String.fromCharCode(101,95,53,55,95,99,102,116,115,116,0);
         commonI = `${3 << (Math.min(2, Math.abs(eventC.size)))}`;
         vignetter ^= predictionlossg.size << (Math.min(Math.abs(3), 1));
         imageactionlivel += vignetter | 2;
         predictionlossg = new Map([[`${predictionlossg.size}`, parseInt(`${imageactionlivel}`)]]);
         eventC.set(`${vignetter}`, 3);
         mailG = `${1 / (Math.max(6, parseInt(`${imageactionlivel}`)))}`;
         break;
      }
      while (2 >= lessz.length) {
         lessz = `${2 ^ libjsinspectorP.length}`;
         break;
      }
          let stringsH = String.fromCharCode(115,105,103,116,101,114,109,95,122,95,49,54,0);
          let unreadN = 0.0;
          let libloggerj = String.fromCharCode(105,95,49,51,95,100,105,115,109,105,115,115,0);
         libjsinspectorP = `${3 + parseInt(`${settingsr}`)}`;
         stringsH = `${parseInt(`${unreadN}`) | stringsH.length}`;
         unreadN -= libloggerj.length;
         libloggerj = "3";
          let mbbidr = 5.0;
         libavdeviceT = [commonI.length / 3];
         mbbidr /= Math.max(2, parseFloat(`${parseInt(`${mbbidr}`) * parseInt(`${mbbidr}`)}`));
      let awayplayer0 = 7446841 >= commonI.length;
      do {
         commonI = `${(String.fromCharCode(90,0) == commonI ? commonI.length : parseInt(`${settingsr}`))}`;
         if (awayplayer0) {
            break;
         }
      } while (awayplayer0 && (lessz != String.fromCharCode(51,0)));
         libavdeviceT.push((commonI == String.fromCharCode(120,0) ? libavdeviceT.length : commonI.length));
      if ((parseInt(`${settingsr}`) + lessz.length) < 2 && (settingsr + 4.11) < 3.15) {
         lessz = `${libjsinspectorP.length << (Math.min(3, libavdeviceT.length))}`;
      }
      if (lessz.includes(`${settingsr}`)) {
         settingsr += libjsinspectorP.length;
      }
         libjsinspectorP = `${parseInt(`${settingsr}`)}`;
         libavdeviceT = [(lessz == String.fromCharCode(97,0) ? lessz.length : libavdeviceT.length)];
          let graphicsu: Array<any> = [String.fromCharCode(104,111,108,100,101,114,115,95,56,95,52,48,0), String.fromCharCode(110,111,115,99,97,108,101,95,113,95,51,56,0)];
          let subsb = String.fromCharCode(110,101,111,110,116,101,115,116,95,107,95,51,53,0);
         lessz = `${commonI.length % (Math.max(subsb.length, 3))}`;
         graphicsu = [graphicsu.length | graphicsu.length];
         subsb += `${graphicsu.length % (Math.max(5, graphicsu.length))}`;
       let tumbnailK = 3.0;
      while (libjsinspectorP.length <= 3) {
         libjsinspectorP += `${(lessz == String.fromCharCode(80,0) ? libjsinspectorP.length : lessz.length)}`;
         break;
      }
      photos += `${lessz.length}`;
      if (brightnessf) {
         break;
      }
   } while (brightnessf && (2 > photos.length || 2 > redirectn.length));
      favoriteZ = "1";
    const offline = !(state.isConnected && ((state.isInternetReachable === true || state.isInternetReachable === null) ? true : false));
    setIsOffline(offline);

   while (3.53 < eventP) {
      eventP *= parseFloat(`${plusG.length}`);
      break;
   }
   while (!favoriteZ.startsWith(`${smallbrightnessl}`)) {
      favoriteZ = `${redirectn.length | 3}`;
      break;
   }
   while ((favoriteZ.length | halffieldimageY) < 1 || 1 < (halffieldimageY | favoriteZ.length)) {
       let scorepopsoundH = 0.0;
       let mnewsg = 1.0;
      let incidenta = scorepopsoundH <= 6355072.0;
      do {
         scorepopsoundH /= Math.max(parseFloat(`${parseInt(`${mnewsg}`)}`), 5);
         if (incidenta) {
            break;
         }
      } while (((scorepopsoundH * mnewsg) >= 4.9 && (scorepopsoundH + 4.9) >= 4.12) && incidenta);
         mnewsg /= Math.max(5, 2);
      if (5.6 > (scorepopsoundH + 1.95) && 2.86 > (1.95 / (Math.max(4, mnewsg)))) {
         scorepopsoundH -= parseFloat(`${parseInt(`${mnewsg}`)}`);
      }
         mnewsg -= 3;
          let showlessC: Map<any, any> = new Map([[String.fromCharCode(115,95,50,53,95,110,101,103,0),572], [String.fromCharCode(117,95,49,48,95,97,100,100,114,101,115,115,0),977]]);
          let graph3 = 4;
         scorepopsoundH -= parseFloat(`${1}`);
         showlessC = new Map([[`${showlessC.size}`, 3]]);
         graph3 -= 1 % (Math.max(5, graph3));
      let const_j9B = mnewsg <= 5279986.0;
      do {
         mnewsg -= parseInt(`${scorepopsoundH}`);
         if (const_j9B) {
            break;
         }
      } while (const_j9B && (1.29 >= (4 * scorepopsoundH)));
      halffieldimageY &= parseInt(`${mail5}`);
      break;
   }
   if (plusG.length < 1 && redirectn != String.fromCharCode(77,0)) {
      redirectn += `${redirectn.length}`;
   }
      mail5 /= Math.max((String.fromCharCode(77,0) == plusG ? plusG.length : parseInt(`${mail5}`)), 1);
       let wifirouter4 = 2;
         wifirouter4 %= Math.max(1, 2);
      if (3 == (5 % (Math.max(2, wifirouter4))) && (5 % (Math.max(4, wifirouter4))) == 5) {
         wifirouter4 -= 2 & wifirouter4;
      }
         wifirouter4 >>= Math.min(Math.abs(wifirouter4 | 1), 1);
      close_ /= Math.max(photos.length + parseInt(`${eventP}`), 5);
   let promotionZ = eventP <= 9607528.0;
   do {
       let backgroundj = false;
       let libimagepipeline6 = 5.0;
       let configP = String.fromCharCode(111,95,49,55,95,109,117,108,116,105,115,105,103,0);
       let countdownd = 1.0;
      for (let t = 0; t < 2; t++) {
         libimagepipeline6 /= Math.max(3, (parseFloat(`${(backgroundj ? 5 : 1) << (Math.min(Math.abs(parseInt(`${countdownd}`)), 5))}`)));
      }
      while (!backgroundj) {
         libimagepipeline6 *= parseFloat(`${parseInt(`${libimagepipeline6}`) | 2}`);
         break;
      }
      for (let j = 0; j < 1; j++) {
         libimagepipeline6 *= parseFloat(`${configP.length}`);
      }
         configP = `${configP.length / (Math.max(8, parseInt(`${libimagepipeline6}`)))}`;
      let pushW = String.fromCharCode(97,99,115,48,95,0) == configP;
      do {
         configP += `${1 | parseInt(`${libimagepipeline6}`)}`;
         if (pushW) {
            break;
         }
      } while ((configP.length >= 3) && pushW);
       let bannerd = String.fromCharCode(108,95,56,52,95,114,101,99,101,105,118,101,114,0);
       let promotionL = 4.0;
      while (2 > (1 % (Math.max(6, configP.length)))) {
         configP += `${configP.length}`;
         break;
      }
          let faviconx: Array<any> = [String.fromCharCode(113,112,98,105,116,115,95,54,95,54,53,0), String.fromCharCode(100,117,114,103,101,114,107,105,110,103,95,101,95,50,56,0), String.fromCharCode(120,95,57,95,107,109,101,97,110,115,0)];
          let mbsplasht = 5;
          let iconmoref = 2;
         backgroundj = (iconmoref | bannerd.length) > 51;
         faviconx = [1 % (Math.max(mbsplasht, 4))];
         mbsplasht ^= 2;
         iconmoref %= Math.max(3, 1);
         countdownd += configP.length >> (Math.min(2, Math.abs(parseInt(`${countdownd}`))));
         backgroundj = countdownd == 1.57 || bannerd.length == 42;
      let pointR = 7729378 <= configP.length;
      do {
         configP += `${configP.length}`;
         if (pointR) {
            break;
         }
      } while (pointR && (configP.endsWith(`${bannerd.length}`)));
      eventP *= (parseFloat(`${(backgroundj ? 4 : 1) & configP.length}`));
      if (promotionZ) {
         break;
      }
   } while ((5 > (parseInt(`${eventP}`) * plusG.length)) && promotionZ);
    if (!offline) {

   let description_zu = 8782405 >= renderx.length;
   do {
      renderx = `${photos.length ^ 1}`;
      if (description_zu) {
         break;
      }
   } while (description_zu && (renderx.length == 3 || episodesC.length == 3));
   let bella = 5529447 >= halffieldimageY;
   do {
      halffieldimageY *= (redirectn.length % (Math.max(4, (smallbrightnessl ? 2 : 2))));
      if (bella) {
         break;
      }
   } while (bella && (2 < (plusG.length | 2)));
   for (let t = 0; t < 2; t++) {
       let goallogoM = String.fromCharCode(100,95,50,54,95,117,118,114,100,0);
       let suboutB = String.fromCharCode(99,97,99,104,101,100,95,52,95,49,51,0);
       let updatesg: Map<any, any> = new Map([[String.fromCharCode(112,114,101,115,99,97,108,101,95,109,95,51,57,0),654], [String.fromCharCode(110,95,50,95,103,114,97,112,104,113,108,0),946]]);
       let mapping_ = String.fromCharCode(102,105,110,97,108,108,121,95,102,95,54,55,0);
       let libjsijniprofilerT = 0.0;
      let update_db = 8169963 <= updatesg.size;
      do {
         updatesg.set(`${libjsijniprofilerT}`, (String.fromCharCode(57,0) == suboutB ? parseInt(`${libjsijniprofilerT}`) : suboutB.length));
         if (update_db) {
            break;
         }
      } while (((2 * updatesg.size) > 3 || (updatesg.size * 2) > 5) && update_db);
      let icondefaultthumbnailE = String.fromCharCode(98,118,108,112,48,98,0) == goallogoM;
      do {
         goallogoM += `${goallogoM.length}`;
         if (icondefaultthumbnailE) {
            break;
         }
      } while ((mapping_.length >= goallogoM.length) && icondefaultthumbnailE);
      while (4 <= goallogoM.length) {
         suboutB = `${suboutB.length}`;
         break;
      }
       let whiteticki = 0.0;
       let sansb = 1.0;
      let iconscheduleg = String.fromCharCode(57,120,105,49,103,122,112,122,107,107,0) == goallogoM;
      do {
         goallogoM += `${parseInt(`${whiteticki}`)}`;
         if (iconscheduleg) {
            break;
         }
      } while (iconscheduleg && (suboutB == String.fromCharCode(56,0)));
         updatesg.set(`${sansb}`, 1);
         updatesg = new Map([[`${updatesg.size}`, 3]]);
      for (let z = 0; z < 3; z++) {
          let stationz = 5.0;
          let inouttargetredG: Map<any, any> = new Map([[String.fromCharCode(100,99,116,120,100,99,95,55,95,54,50,0),164], [String.fromCharCode(100,95,55,57,95,98,105,116,111,112,115,0),581], [String.fromCharCode(118,105,100,101,111,115,95,107,95,53,53,0),405]]);
          let defaultroombgN = String.fromCharCode(115,121,110,99,104,114,111,110,105,122,101,100,95,57,95,52,55,0);
          let lessh = String.fromCharCode(114,95,52,53,95,99,104,114,111,110,111,0);
          let promotiona = true;
         whiteticki *= parseInt(`${stationz}`);
         stationz *= 3;
         inouttargetredG.set(`${promotiona}`, inouttargetredG.size | 2);
         defaultroombgN += `${lessh.length * 3}`;
         lessh = `${inouttargetredG.size}`;
      }
      if ((goallogoM.length | updatesg.size) == 2 || 2 == (goallogoM.length | updatesg.size)) {
         updatesg = new Map([[goallogoM, 2 | goallogoM.length]]);
      }
         sansb *= updatesg.size / 1;
       let videoK = String.fromCharCode(105,95,50,55,95,104,119,99,111,110,102,105,103,0);
       let sinad = String.fromCharCode(103,101,110,101,114,97,108,95,52,95,57,51,0);
      let yellowanimationliveM = updatesg.size >= 9492951;
      do {
         updatesg.set(videoK, 2);
         if (yellowanimationliveM) {
            break;
         }
      } while (yellowanimationliveM && (!Array.from(updatesg.keys()).includes(`${whiteticki}`)));
      while (suboutB.includes(mapping_)) {
          let playlistX: Array<any> = [711, 14, 203];
          let firebaseB = 2.0;
          let confirmationk = 5;
          let temperatureS: Array<any> = [366, 612, 359];
          let suggestion4 = true;
         mapping_ += `${updatesg.size + suboutB.length}`;
         playlistX = [(playlistX.length | (suggestion4 ? 5 : 5))];
         firebaseB -= temperatureS.length;
         confirmationk ^= 2;
         temperatureS = [confirmationk];
         break;
      }
      while ((sinad.length | updatesg.size) < 5 || (sinad.length | updatesg.size) < 5) {
         sinad += "3";
         break;
      }
      mail5 += goallogoM.length;
   }
      halffieldimageY %= Math.max(3 | parseInt(`${close_}`), 5);
   while ((photos.length / 2) == 2 || (2 * parseInt(`${mail5}`)) == 5) {
      photos += `${(String.fromCharCode(50,0) == playH ? playH.length : (smallbrightnessl ? 5 : 1))}`;
      break;
   }
   let giftbuttonH = String.fromCharCode(116,55,119,101,95,116,57,0) == playH;
   do {
      playH += `${parseInt(`${close_}`) - episodesC.length}`;
      if (giftbuttonH) {
         break;
      }
   } while (giftbuttonH && (playH == String.fromCharCode(104,0) || 2 > plusG.length));
   for (let k = 0; k < 2; k++) {
      mail5 *= favoriteZ.length % (Math.max(photos.length, 6));
   }
      handleRefresh(navId);
    }
  };
  const handleShowLoading = async () => {
       let placementY: Array<any> = [731, 635, 866];
    let acceptedR = true;
    let mutedP = String.fromCharCode(112,104,111,116,111,95,119,95,51,54,0);
    let foundL = false;
    let placement3 = true;
    let libfollyA = String.fromCharCode(97,112,111,108,108,111,95,111,95,56,56,0);
    let downloadero = String.fromCharCode(105,119,97,108,115,104,95,122,95,51,51,0);
    let refreshborderlessO = 0.0;
    let iconmegaphone3 = String.fromCharCode(101,95,49,52,95,116,101,114,109,115,0);
    let scorepopsoundA = String.fromCharCode(111,95,53,95,112,97,121,109,97,115,116,101,114,0);
    let unfilly: Map<any, any> = new Map([[String.fromCharCode(103,97,117,115,115,95,100,95,54,57,0),63], [String.fromCharCode(104,117,109,97,110,95,122,95,56,0),808]]);
    let humidityD: Array<any> = [String.fromCharCode(116,101,120,116,117,114,101,100,115,112,101,110,99,95,98,95,50,0), String.fromCharCode(118,95,50,57,95,112,108,97,121,111,117,116,0), String.fromCharCode(122,95,51,56,95,108,105,98,97,118,102,105,108,116,101,114,0)];
    let interstitial6 = 2.0;
    let referrerK = 3.0;
    let icontransferclubh = true;
    let rocketO = 0.0;
    let node6 = String.fromCharCode(106,114,101,118,100,99,116,95,56,95,49,49,0);
    let adulto = String.fromCharCode(119,95,54,54,95,117,110,115,104,105,102,116,0);
    let inactive9 = String.fromCharCode(115,117,98,105,109,97,103,101,95,115,95,48,0);
   for (let z = 0; z < 1; z++) {
       let redirectd: Map<any, any> = new Map([[String.fromCharCode(108,95,49,57,95,114,101,106,101,99,116,105,111,110,115,0),974], [String.fromCharCode(110,111,110,110,111,114,109,97,116,105,118,101,95,121,95,51,56,0),359]]);
       let penaltygoalS = String.fromCharCode(112,95,49,52,95,105,110,100,101,112,101,110,100,101,110,116,0);
       let navigationZ: Array<any> = [681, 901, 169];
       let typingf = String.fromCharCode(100,95,54,52,95,99,112,117,117,115,101,100,0);
       let libpangleflippedN = String.fromCharCode(116,95,51,56,95,115,116,101,114,101,111,0);
      for (let a = 0; a < 3; a++) {
          let traminiZ = 3.0;
         navigationZ.push(typingf.length - libpangleflippedN.length);
         traminiZ /= Math.max(parseFloat(`${parseInt(`${traminiZ}`) - 2}`), 1);
      }
       let armvaL = 0.0;
      if (!typingf.startsWith(`${redirectd.size}`)) {
          let graphicsM = 0;
          let matchesk = String.fromCharCode(116,101,120,116,95,104,95,49,56,0);
          let orangeuparrowF = String.fromCharCode(97,110,110,111,116,97,116,101,95,108,95,53,0);
          let templateprocessor7 = 4.0;
         typingf += `${matchesk.length}`;
         graphicsM <<= Math.min(Math.abs(1), 2);
         matchesk = "3";
         orangeuparrowF += "2";
         templateprocessor7 += parseFloat(`${parseInt(`${templateprocessor7}`)}`);
      }
         armvaL += parseFloat(`${parseInt(`${armvaL}`) << (Math.min(Math.abs(2), 1))}`);
          let pinge = String.fromCharCode(108,105,109,105,116,101,114,95,108,95,54,56,0);
         navigationZ = [libpangleflippedN.length - 1];
         pinge = `${pinge.length * pinge.length}`;
         redirectd.set(libpangleflippedN, 1 ^ libpangleflippedN.length);
      for (let s = 0; s < 3; s++) {
         navigationZ = [parseInt(`${armvaL}`)];
      }
       let grayy = 5.0;
      placement3 = !acceptedR;
      penaltygoalS += `${(penaltygoalS == String.fromCharCode(86,0) ? penaltygoalS.length : penaltygoalS.length)}`;
   }
      placement3 = placement3 || scorepopsoundA.length >= 99;
      refreshborderlessO += parseFloat(`${3 | libfollyA.length}`);
      unfilly.set(`${placement3}`, 1);
      interstitial6 += 1;
   if (mutedP.length == 2) {
      mutedP += `${(String.fromCharCode(99,0) == scorepopsoundA ? parseInt(`${referrerK}`) : scorepopsoundA.length)}`;
   }
   for (let x = 0; x < 1; x++) {
       let verticalv: Array<any> = [2, 167, 443];
       let iconnotificationnewl = String.fromCharCode(97,117,100,105,111,95,99,95,52,51,0);
         iconnotificationnewl = `${verticalv.length}`;
      let fastforwardK = 7983171 <= iconnotificationnewl.length;
      do {
         iconnotificationnewl += `${iconnotificationnewl.length}`;
         if (fastforwardK) {
            break;
         }
      } while (fastforwardK && ((verticalv.length / (Math.max(iconnotificationnewl.length, 8))) > 4 && 4 > (verticalv.length / (Math.max(2, iconnotificationnewl.length)))));
      while ((3 >> (Math.min(2, verticalv.length))) > 4 || 3 > (iconnotificationnewl.length >> (Math.min(Math.abs(3), 2)))) {
         iconnotificationnewl = `${iconnotificationnewl.length + 3}`;
         break;
      }
         iconnotificationnewl = `${verticalv.length}`;
         iconnotificationnewl += `${verticalv.length & 3}`;
         iconnotificationnewl += `${verticalv.length / (Math.max(8, iconnotificationnewl.length))}`;
      interstitial6 += parseInt(`${refreshborderlessO}`) - scorepopsoundA.length;
   }
   let securityL = scorepopsoundA.length <= 8764631;
   do {
       let codegenn = String.fromCharCode(117,110,99,111,110,115,117,109,101,100,95,120,95,50,0);
       let modulesz = String.fromCharCode(99,111,114,114,95,100,95,50,56,0);
       let componentT: Array<any> = [318, 387];
       let episodesq = String.fromCharCode(100,95,55,52,95,109,111,118,101,100,0);
       let mbsplashO: Array<any> = [206, 393];
         modulesz += `${modulesz.length + 2}`;
      while (codegenn.startsWith(modulesz)) {
          let shootyesgoalD = false;
          let volumeI = String.fromCharCode(100,101,99,111,100,101,102,95,121,95,55,52,0);
         modulesz += `${3 << (Math.min(2, episodesq.length))}`;
         shootyesgoalD = volumeI.length < 91;
         volumeI += `${((shootyesgoalD ? 2 : 3))}`;
         break;
      }
      while (codegenn.length <= 3) {
          let gmailF: Map<any, any> = new Map([[String.fromCharCode(115,105,100,101,115,95,117,95,55,55,0),580], [String.fromCharCode(105,110,111,117,116,95,122,95,53,55,0),943]]);
          let fillC = true;
          let detailsA = String.fromCharCode(99,105,100,95,110,95,53,52,0);
          let stats7 = String.fromCharCode(100,105,109,109,101,100,95,51,95,51,48,0);
         componentT.push(detailsA.length);
         gmailF = new Map([[stats7, ((fillC ? 3 : 5) + 1)]]);
         fillC = fillC && gmailF.size >= 59;
         detailsA += `${gmailF.size}`;
         stats7 += `${stats7.length}`;
         break;
      }
         episodesq = `${mbsplashO.length / 1}`;
      while ((mbsplashO.length * 2) == 4) {
         mbsplashO.push((String.fromCharCode(103,0) == episodesq ? modulesz.length : episodesq.length));
         break;
      }
      while (4 > (episodesq.length / 5) || (componentT.length / (Math.max(5, 10))) > 1) {
          let y_locku = 4;
          let nativeM = String.fromCharCode(119,95,49,50,95,112,114,111,120,105,109,105,116,121,0);
          let gmailH = String.fromCharCode(115,95,49,48,48,95,99,111,112,121,109,0);
         componentT = [componentT.length];
         y_locku /= Math.max(3, gmailH.length >> (Math.min(Math.abs(2), 1)));
         nativeM = `${gmailH.length / (Math.max(9, y_locku))}`;
         break;
      }
      let transferx = 8357531 <= componentT.length;
      do {
         componentT.push(componentT.length);
         if (transferx) {
            break;
         }
      } while (((4 + componentT.length) == 1) && transferx);
          let imagemanagerq: Array<any> = [490, 31];
          let native0: Map<any, any> = new Map([[String.fromCharCode(104,102,108,105,112,95,100,95,50,48,0),183], [String.fromCharCode(113,95,57,95,114,101,116,114,97,110,115,0),52]]);
         codegenn += `${modulesz.length >> (Math.min(Math.abs(1), 1))}`;
         imagemanagerq.push(native0.size + 1);
         native0 = new Map([[`${native0.size}`, imagemanagerq.length & native0.size]]);
       let giftF = true;
      if (giftF) {
         giftF = !modulesz.startsWith(`${giftF}`);
      }
         mbsplashO = [codegenn.length];
         giftF = (episodesq.length + componentT.length) < 66;
      if (4 >= (componentT.length + modulesz.length) && 4 >= (modulesz.length + componentT.length)) {
         componentT.push(2 ^ episodesq.length);
      }
      let materialQ = giftF ? !giftF : giftF;
      do {
         giftF = mbsplashO.length <= 87;
         if (materialQ) {
            break;
         }
      } while (materialQ && ((mbsplashO.length * 1) >= 1));
      for (let j = 0; j < 3; j++) {
         episodesq += `${1 ^ codegenn.length}`;
      }
      scorepopsoundA += `${3 * iconmegaphone3.length}`;
      if (securityL) {
         break;
      }
   } while (securityL && (acceptedR || 5 <= scorepopsoundA.length));
   while (refreshborderlessO <= 3.42) {
      unfilly = new Map([[libfollyA, 1]]);
      break;
   }
       let controlsS: Array<any> = [138, 888, 573];
         controlsS = [controlsS.length | 2];
         controlsS.push(3);
         controlsS.push(1 * controlsS.length);
      mutedP = `${placementY.length}`;
   if (parseInt(`${refreshborderlessO}`) < iconmegaphone3.length) {
      refreshborderlessO += parseFloat(`${parseInt(`${interstitial6}`)}`);
   }
   if (!libfollyA.startsWith(`${placement3}`)) {
      placement3 = scorepopsoundA.length >= 20;
   }
      libfollyA += `${(parseInt(`${referrerK}`) % (Math.max(10, (placement3 ? 5 : 5))))}`;
      humidityD = [(placementY.length % (Math.max(10, (foundL ? 4 : 5))))];
   for (let t = 0; t < 3; t++) {
      placementY.push(3);
   }
       let thailandq: Array<any> = [533, 90, 530];
       let style9 = 4.0;
         style9 /= Math.max(parseInt(`${style9}`) | 3, 2);
         style9 -= parseInt(`${style9}`);
         style9 += parseInt(`${style9}`) << (Math.min(thailandq.length, 2));
         thailandq.push(parseInt(`${style9}`));
          let filedS = 3;
         style9 *= parseInt(`${style9}`);
         filedS |= filedS;
       let episodesV = 1.0;
       let owngoalR = 3.0;
      libfollyA = `${(mutedP == String.fromCharCode(87,0) ? (acceptedR ? 5 : 1) : mutedP.length)}`;
   while (mutedP.length <= 2) {
      mutedP += `${parseInt(`${interstitial6}`) % (Math.max(3, 7))}`;
      break;
   }
       let libreactC: Array<any> = [String.fromCharCode(103,97,112,108,101,115,115,95,107,95,50,50,0), String.fromCharCode(115,95,50,49,95,114,99,118,100,0)];
       let basketballhometeamZ = 0;
         libreactC.push(basketballhometeamZ);
          let desch = String.fromCharCode(114,95,53,54,95,111,112,101,110,115,115,108,118,0);
         libreactC.push(basketballhometeamZ / 1);
         desch += `${desch.length}`;
         basketballhometeamZ += libreactC.length - basketballhometeamZ;
          let transferK: Map<any, any> = new Map([[String.fromCharCode(108,111,115,116,95,102,95,57,53,0),3], [String.fromCharCode(101,103,97,99,121,95,113,95,57,49,0),453], [String.fromCharCode(116,95,49,52,95,116,114,97,110,115,112,111,115,101,120,0),782]]);
         basketballhometeamZ += libreactC.length + 3;
         transferK = new Map([[`${transferK.size}`, transferK.size]]);
         basketballhometeamZ -= 1;
       let homeinactiveF: Array<any> = [769, 358, 870];
       let notification4: Array<any> = [443, 691];
      downloadero = `${3 + humidityD.length}`;
   let whitebell4 = icontransferclubh ? !icontransferclubh : icontransferclubh;
   do {
       let colorst = String.fromCharCode(110,95,57,53,95,102,105,108,101,115,0);
       let sellmathbackgroundN: Map<any, any> = new Map([[String.fromCharCode(108,111,97,100,105,110,103,95,107,95,56,52,0),275], [String.fromCharCode(113,95,53,49,0),56], [String.fromCharCode(119,95,57,53,95,100,101,115,116,114,111,121,0),765]]);
       let airbnbstarh = 2.0;
       let indicatorH: Map<any, any> = new Map([[String.fromCharCode(105,108,108,105,113,97,95,114,95,52,56,0),963], [String.fromCharCode(98,95,55,53,95,116,105,109,101,105,110,116,101,114,118,97,108,0),771], [String.fromCharCode(116,114,117,101,95,103,95,55,52,0),92]]);
       let referrerG = String.fromCharCode(108,95,49,55,95,98,101,108,111,110,103,0);
          let uimanagerJ: Map<any, any> = new Map([[String.fromCharCode(117,95,56,50,95,109,105,120,112,97,110,101,108,0),false ], [String.fromCharCode(115,105,103,110,97,116,117,114,101,115,95,109,95,55,50,0),true ]]);
          let codegenK = String.fromCharCode(114,104,115,95,117,95,56,49,0);
          let filen = 1;
         indicatorH = new Map([[`${sellmathbackgroundN.size}`, 1]]);
         uimanagerJ = new Map([[`${uimanagerJ.size}`, uimanagerJ.size]]);
         codegenK = `${codegenK.length}`;
         filen %= Math.max(codegenK.length, 2);
      for (let u = 0; u < 1; u++) {
         airbnbstarh += 2 << (Math.min(5, colorst.length));
      }
         colorst += `${indicatorH.size / 2}`;
         airbnbstarh -= 3;
      for (let s = 0; s < 1; s++) {
         sellmathbackgroundN = new Map([[`${sellmathbackgroundN.size}`, sellmathbackgroundN.size & colorst.length]]);
      }
      let sansK = 5537632 >= referrerG.length;
      do {
          let bottomi = String.fromCharCode(101,110,99,111,100,101,114,95,122,95,53,53,0);
          let memberC = String.fromCharCode(100,105,115,112,97,116,99,104,101,100,95,98,95,56,55,0);
          let forwardh = String.fromCharCode(121,95,52,55,95,99,111,109,112,108,101,116,101,0);
          let hooksc = true;
          let countdownE = 0.0;
         referrerG += `${(String.fromCharCode(104,0) == referrerG ? bottomi.length : referrerG.length)}`;
         bottomi = `${parseInt(`${countdownE}`) + 1}`;
         memberC += "1";
         forwardh += `${parseInt(`${countdownE}`) | 2}`;
         hooksc = forwardh.length == 19;
         if (sansK) {
            break;
         }
      } while (sansK && ((4 - sellmathbackgroundN.size) == 5 && (referrerG.length - 4) == 3));
       let classesu = String.fromCharCode(97,95,52,52,95,109,117,108,116,105,102,114,97,109,101,0);
         classesu += `${indicatorH.size}`;
      for (let p = 0; p < 2; p++) {
          let predictionbanner_: Array<any> = [String.fromCharCode(100,95,53,48,95,115,109,111,111,116,104,101,110,0), String.fromCharCode(98,108,117,101,116,111,111,116,104,95,100,95,57,50,0), String.fromCharCode(114,101,99,97,108,99,117,108,97,116,101,95,98,95,56,48,0)];
          let rewindd = String.fromCharCode(97,97,117,100,105,111,95,98,95,49,50,0);
         colorst += `${parseInt(`${airbnbstarh}`)}`;
         predictionbanner_.push(predictionbanner_.length * 1);
         rewindd += `${rewindd.length}`;
      }
       let volumek = true;
      if (referrerG.length < 3) {
         volumek = airbnbstarh < referrerG.length;
      }
          let targetG = String.fromCharCode(118,97,114,105,97,116,105,111,110,95,114,95,55,50,0);
          let arrowK: Map<any, any> = new Map([[String.fromCharCode(115,105,103,104,97,110,100,108,101,114,95,97,95,50,55,0),507], [String.fromCharCode(115,116,114,102,116,105,109,101,95,122,95,48,0),1]]);
          let readp = String.fromCharCode(110,95,54,57,95,99,97,108,108,101,114,0);
         volumek = !volumek;
         targetG = `${readp.length | 2}`;
         arrowK.set(targetG, targetG.length - arrowK.size);
         readp = `${targetG.length % (Math.max(2, 4))}`;
      while (referrerG.includes(`${indicatorH.size}`)) {
          let typingloadingL = true;
          let elementsB = String.fromCharCode(116,105,109,101,119,97,105,116,95,56,95,52,51,0);
          let fastforwardKX = false;
          let hoverH = true;
         referrerG += `${referrerG.length}`;
         typingloadingL = (!typingloadingL ? fastforwardKX : typingloadingL);
         elementsB = `${((fastforwardKX ? 2 : 5) - 2)}`;
         hoverH = elementsB.endsWith(`${typingloadingL}`);
         break;
      }
         classesu += `${(String.fromCharCode(107,0) == colorst ? colorst.length : indicatorH.size)}`;
         classesu = `${referrerG.length >> (Math.min(Math.abs(2), 4))}`;
      icontransferclubh = sellmathbackgroundN.size < 49;
      if (whitebell4) {
         break;
      }
   } while (whitebell4 && (5 < humidityD.length || (humidityD.length | 5) < 5));
   let iconmegaphoneH = mutedP == String.fromCharCode(55,57,97,52,54,0);
   do {
       let customh = 1.0;
       let libavutilx = String.fromCharCode(113,95,56,56,95,99,111,108,111,114,101,100,0);
       let positionfieldd = 0.0;
       let refreshborderlessE = 2;
      let nodes = customh >= 9825679.0;
      do {
         customh += 3 % (Math.max(parseInt(`${positionfieldd}`), 4));
         if (nodes) {
            break;
         }
      } while (nodes && (1.58 >= (libavutilx.length - customh)));
          let larged = 0.0;
          let appleQ = 1.0;
          let livec = String.fromCharCode(121,95,55,95,111,116,104,101,114,110,97,109,101,0);
         customh += parseInt(`${larged}`);
         larged += parseInt(`${appleQ}`);
         appleQ -= (String.fromCharCode(74,0) == livec ? parseInt(`${appleQ}`) : livec.length);
         libavutilx += `${3 - parseInt(`${customh}`)}`;
      while (!libavutilx.includes(`${positionfieldd}`)) {
         positionfieldd -= parseInt(`${customh}`);
         break;
      }
          let l_animationq = 1.0;
          let refreshF = 5;
          let expandL = String.fromCharCode(102,112,101,108,95,112,95,56,54,0);
         libavutilx = `${parseInt(`${positionfieldd}`) - parseInt(`${l_animationq}`)}`;
         l_animationq /= Math.max(1, 3);
         refreshF *= 3 - refreshF;
         expandL += `${expandL.length << (Math.min(2, Math.abs(refreshF)))}`;
      while (5.25 <= (customh * 3.1) || (refreshborderlessE * parseInt(`${customh}`)) <= 3) {
          let airbnbstarselectedz = String.fromCharCode(97,95,52,95,97,117,100,105,111,100,97,116,97,0);
          let type_uX = String.fromCharCode(122,95,54,56,95,118,112,120,115,116,97,116,115,0);
         refreshborderlessE *= (String.fromCharCode(113,0) == type_uX ? type_uX.length : airbnbstarselectedz.length);
         break;
      }
      if (parseInt(`${positionfieldd}`) < libavutilx.length) {
          let predictionbuttond = String.fromCharCode(109,111,114,101,95,57,95,56,57,0);
          let mintegral3 = String.fromCharCode(99,97,108,108,98,97,99,107,95,57,95,57,57,0);
          let sheetJ = 1.0;
         positionfieldd /= Math.max(1, 2);
         predictionbuttond += `${1 - predictionbuttond.length}`;
         mintegral3 = "3";
         sheetJ += parseFloat(`${3 & mintegral3.length}`);
      }
       let d_unlockE: Map<any, any> = new Map([[String.fromCharCode(113,95,57,55,95,108,105,118,101,100,0),String.fromCharCode(102,101,116,99,104,95,103,95,55,50,0)], [String.fromCharCode(99,111,109,112,97,114,105,115,111,110,95,111,95,55,50,0),String.fromCharCode(114,101,97,99,116,105,111,110,115,95,121,95,51,53,0)], [String.fromCharCode(116,101,115,116,98,105,116,95,99,95,51,52,0),String.fromCharCode(101,110,99,111,100,101,109,118,95,102,95,52,52,0)]]);
       let airbnbstar8: Map<any, any> = new Map([[String.fromCharCode(117,110,100,101,114,101,115,116,105,109,97,116,101,100,95,109,95,51,51,0),912], [String.fromCharCode(115,116,121,112,95,51,95,57,57,0),24]]);
       let loadingo = 5.0;
       let crossr = 0.0;
      if (2.91 >= customh) {
          let inviteY: Map<any, any> = new Map([[String.fromCharCode(111,95,53,95,109,101,110,116,105,111,110,115,0),false ], [String.fromCharCode(114,110,103,95,52,95,49,48,0),false ]]);
         customh *= parseInt(`${loadingo}`) - parseInt(`${crossr}`);
         inviteY.set(`${inviteY.size}`, inviteY.size);
      }
      let jingdongs = libavutilx == String.fromCharCode(105,49,54,49,54,108,120,97,52,54,0);
      do {
          let linef = 2.0;
          let greent = String.fromCharCode(113,95,51,95,99,111,109,112,111,115,101,105,0);
          let actionO = 3;
          let eactn = String.fromCharCode(112,101,114,105,111,100,105,99,95,106,95,52,56,0);
         libavutilx += `${airbnbstar8.size}`;
         linef += parseFloat(`${greent.length}`);
         greent += `${(eactn == String.fromCharCode(67,0) ? actionO : eactn.length)}`;
         actionO /= Math.max(2, parseInt(`${linef}`));
         if (jingdongs) {
            break;
         }
      } while (((d_unlockE.size - 5) >= 1) && jingdongs);
         positionfieldd += d_unlockE.size * parseInt(`${positionfieldd}`);
      mutedP += `${parseInt(`${positionfieldd}`)}`;
      if (iconmegaphoneH) {
         break;
      }
   } while ((3 == mutedP.length) && iconmegaphoneH);
      mutedP = `${parseInt(`${refreshborderlessO}`) | 2}`;
       let attributedstringi: Array<any> = [0, 860, 263];
       let gmailL = true;
       let tempD = String.fromCharCode(118,95,57,53,95,115,111,110,101,119,99,111,110,110,0);
         attributedstringi.push(attributedstringi.length);
         tempD = `${tempD.length}`;
       let libhermesX: Array<any> = [742, 404, 925];
      while (3 >= (libhermesX.length % (Math.max(attributedstringi.length, 7)))) {
         libhermesX = [((gmailL ? 2 : 2))];
         break;
      }
         libhermesX.push((attributedstringi.length << (Math.min(1, Math.abs((gmailL ? 4 : 3))))));
          let mutedA: Array<any> = [526, 347];
         gmailL = !gmailL || mutedA.length <= 40;
       let projecte = 1;
       let iconmegaphoneF = 5;
      for (let e = 0; e < 3; e++) {
         libhermesX.push(attributedstringi.length);
      }
       let themep = String.fromCharCode(98,95,57,49,95,115,104,117,116,116,101,114,0);
       let unreadp = String.fromCharCode(105,95,52,51,95,109,115,109,112,101,103,100,97,116,97,0);
      icontransferclubh = 62 >= attributedstringi.length;
      iconmegaphone3 += `${((placement3 ? 1 : 3) + parseInt(`${refreshborderlessO}`))}`;
   if (!acceptedR) {
      acceptedR = !downloadero.includes(`${acceptedR}`);
   }
       let combined_ = String.fromCharCode(108,111,97,115,95,103,95,55,55,0);
       let tickz: Array<any> = [String.fromCharCode(106,115,116,121,112,101,95,111,95,50,50,0), String.fromCharCode(105,110,115,101,114,116,105,111,110,95,122,95,56,49,0)];
          let u_lockG: Array<any> = [262, 90, 140];
          let renewc: Array<any> = [86, 514, 199];
          let fastw = 2.0;
         tickz = [renewc.length];
         u_lockG.push(1 << (Math.min(2, u_lockG.length)));
         renewc = [u_lockG.length + 3];
         fastw /= Math.max(parseInt(`${fastw}`) / (Math.max(u_lockG.length, 1)), 3);
          let rankr: Map<any, any> = new Map([[String.fromCharCode(117,110,115,99,97,108,101,100,99,121,99,108,101,99,108,111,99,107,95,106,95,50,50,0),String.fromCharCode(105,115,122,101,114,111,95,102,95,49,53,0)], [String.fromCharCode(97,95,57,54,95,97,108,108,101,116,0),String.fromCharCode(110,95,54,50,95,109,101,103,101,100,0)]]);
          let mbbid7: Map<any, any> = new Map([[String.fromCharCode(99,111,109,112,114,101,115,115,111,114,95,108,95,49,56,0),String.fromCharCode(113,95,55,55,95,113,112,105,115,0)], [String.fromCharCode(114,95,54,95,97,112,112,101,110,100,97,98,108,101,0),String.fromCharCode(97,118,103,95,99,95,56,50,0)], [String.fromCharCode(111,95,57,49,95,97,100,116,115,0),String.fromCharCode(99,111,110,100,105,116,105,111,110,95,55,95,51,49,0)]]);
         tickz.push(3);
         rankr = new Map([[`${rankr.size}`, mbbid7.size * rankr.size]]);
         mbbid7.set(`${mbbid7.size}`, 1);
         combined_ += `${tickz.length}`;
         tickz = [combined_.length];
         tickz = [combined_.length ^ 1];
         tickz.push((String.fromCharCode(80,0) == combined_ ? combined_.length : tickz.length));
      libfollyA = `${parseInt(`${referrerK}`)}`;
       let upgraden = false;
       let plusD = String.fromCharCode(114,95,49,95,115,99,114,117,98,98,105,110,103,0);
       let owngoali = String.fromCharCode(97,116,116,101,109,112,116,115,95,111,95,52,53,0);
       let libglog5 = 2.0;
       let cancelp = 5.0;
         plusD += `${((upgraden ? 4 : 5) | parseInt(`${cancelp}`))}`;
      for (let d = 0; d < 3; d++) {
          let sound2: Map<any, any> = new Map([[String.fromCharCode(108,95,50,53,95,109,117,120,101,114,115,0),String.fromCharCode(119,101,108,115,100,101,99,100,101,109,111,95,109,95,57,50,0)], [String.fromCharCode(99,111,110,99,97,116,95,57,95,54,54,0),String.fromCharCode(102,95,57,54,95,97,99,99,101,112,116,101,100,0)]]);
          let windL = 4.0;
         libglog5 /= Math.max(parseFloat(`${sound2.size}`), 4);
         sound2 = new Map([[`${windL}`, parseInt(`${windL}`)]]);
      }
          let abidetectK = String.fromCharCode(121,95,52,57,95,118,105,103,110,101,116,116,105,110,103,0);
          let popup3 = String.fromCharCode(111,95,57,56,95,97,112,112,108,121,0);
          let matches8: Array<any> = [566, 444, 209];
         libglog5 += parseFloat(`${3 + matches8.length}`);
         abidetectK += "3";
         popup3 = `${abidetectK.length}`;
         matches8.push((abidetectK == String.fromCharCode(97,0) ? abidetectK.length : popup3.length));
         libglog5 += parseFloat(`${1 % (Math.max(parseInt(`${cancelp}`), 2))}`);
       let statso = true;
         statso = owngoali.startsWith(`${cancelp}`);
       let selecto = String.fromCharCode(115,107,105,112,95,57,95,53,57,0);
       let mutedg = String.fromCharCode(122,95,55,50,95,112,110,105,101,108,115,97,100,100,0);
         mutedg = `${(mutedg == String.fromCharCode(66,0) ? (upgraden ? 4 : 4) : mutedg.length)}`;
      placementY = [humidityD.length];
       let controlO = String.fromCharCode(103,95,49,52,95,115,116,114,109,0);
       let reduceri = String.fromCharCode(99,97,110,99,101,108,108,97,98,108,101,95,101,95,53,55,0);
      while (!controlO.endsWith(`${reduceri.length}`)) {
         reduceri += `${(reduceri == String.fromCharCode(69,0) ? reduceri.length : controlO.length)}`;
         break;
      }
       let footballfiledlayouti = 4.0;
          let matchactivet = String.fromCharCode(97,100,115,103,97,115,95,100,95,49,51,0);
          let abidetectt: Map<any, any> = new Map([[String.fromCharCode(103,122,105,112,112,101,100,95,119,95,49,56,0),String.fromCharCode(115,108,105,100,95,55,95,56,0)], [String.fromCharCode(107,95,53,54,95,112,97,105,100,0),String.fromCharCode(115,95,49,52,95,112,97,99,107,101,116,101,100,0)], [String.fromCharCode(104,95,57,52,95,97,114,114,111,119,0),String.fromCharCode(98,101,103,105,110,110,105,110,103,95,98,95,49,53,0)]]);
          let libswresamplet: Map<any, any> = new Map([[String.fromCharCode(103,110,111,95,117,95,52,48,0),100], [String.fromCharCode(118,97,108,95,103,95,53,50,0),773], [String.fromCharCode(102,95,53,50,95,113,117,97,100,116,114,101,101,0),320]]);
         reduceri += `${matchactivet.length ^ 1}`;
         matchactivet += `${abidetectt.size}`;
         abidetectt = new Map([[`${libswresamplet.size}`, 1]]);
         libswresamplet.set(`${libswresamplet.size}`, 1);
         controlO += "2";
         footballfiledlayouti *= 3;
       let giftbuttonQ = 0.0;
       let questq = 2.0;
      icontransferclubh = parseInt(`${referrerK}`) < controlO.length;

    setShowHomeLoading(false);
  };

  useEffect(() => {
    setIsOffline(settingsReducer.isOffline);
  }, []);

  useFocusEffect(useCallback(() => {
    if (!settingsReducer.isOffline && settingsReducer.isOffline !== isOffline) {
      setIsOffline(settingsReducer.isOffline);
      setShowHomeLoading(true);
      refetch();
      handleRefresh(navId, true);
    } else if (settingsReducer.isOffline) {
      return () => {
        setIsOffline(settingsReducer.isOffline);
      }
    }
  }, [settingsReducer.isOffline]));

  
  const [isRefreshing, setIsRefreshing] = useState(false);

  
  const handleRefresh = async (id: number, showloading: boolean = false) => {
       let mbbids: Array<any> = [String.fromCharCode(112,114,101,100,105,99,116,111,114,95,98,95,57,52,0), String.fromCharCode(107,102,119,114,105,116,101,95,97,95,55,50,0), String.fromCharCode(101,108,101,109,115,95,104,95,50,49,0)];
    let subout9 = String.fromCharCode(111,95,53,95,112,105,110,110,105,110,103,0);
    let videojsi: Array<any> = [944, 484];
    let imagenetworkerr1 = true;
    let chart2 = String.fromCharCode(116,95,52,48,95,115,116,116,115,0);
    let renewX = false;
    let backwhiteo = String.fromCharCode(112,95,51,49,95,111,118,101,114,115,104,111,111,116,0);
    let gemfile3 = String.fromCharCode(100,95,54,54,95,114,97,112,105,100,106,115,111,110,0);
    let modulesY: Array<any> = [107, 282, 63];
    let commont = String.fromCharCode(117,110,98,111,110,100,95,120,95,51,52,0);
    let manifestt = true;
    let libreactnativejniI = String.fromCharCode(109,97,120,114,101,97,100,101,114,115,95,120,95,57,53,0);
    let tickS = 0;
    let unselecteda = false;
    let mbjscommonL = String.fromCharCode(109,112,101,103,112,115,95,119,95,52,56,0);
    let filedo = String.fromCharCode(102,97,105,108,117,114,101,95,53,95,50,53,0);
      gemfile3 = `${((renewX ? 4 : 1) << (Math.min(backwhiteo.length, 5)))}`;
   let mintegral8 = videojsi.length >= 7443007;
   do {
      videojsi = [1];
      if (mintegral8) {
         break;
      }
   } while (((modulesY.length * 5) == 5 || 1 == (modulesY.length * 5)) && mintegral8);
   let coreG = commont.length >= 5309370;
   do {
       let webviewZ: Array<any> = [840, 952];
       let blackj = String.fromCharCode(97,100,106,117,115,116,101,100,95,55,95,53,53,0);
       let iconarrowrightwhitem = String.fromCharCode(102,95,52,95,115,105,103,118,101,114,0);
          let previewg = 5.0;
          let middlewarej: Map<any, any> = new Map([[String.fromCharCode(101,110,104,97,110,99,101,100,95,51,95,50,50,0),String.fromCharCode(113,95,53,55,95,108,105,103,104,116,110,101,115,115,0)], [String.fromCharCode(115,95,53,48,95,116,114,117,110,99,112,97,115,115,101,115,0),String.fromCharCode(98,97,99,107,108,105,103,104,116,95,113,95,54,55,0)]]);
         blackj = `${2 * middlewarej.size}`;
         previewg += parseFloat(`${2 << (Math.min(Math.abs(parseInt(`${previewg}`)), 3))}`);
         middlewarej.set(`${previewg}`, 3 & parseInt(`${previewg}`));
      let cornershootB = 8332762 <= webviewZ.length;
      do {
         webviewZ = [webviewZ.length * 2];
         if (cornershootB) {
            break;
         }
      } while (((blackj.length >> (Math.min(5, webviewZ.length))) > 3 || (webviewZ.length >> (Math.min(blackj.length, 5))) > 3) && cornershootB);
      commont = `${libreactnativejniI.length * mbbids.length}`;
      if (coreG) {
         break;
      }
   } while (coreG && (modulesY.length < commont.length));
      chart2 += "3";

    if (showloading) {

      backwhiteo += `${(modulesY.length << (Math.min(3, Math.abs((manifestt ? 2 : 1)))))}`;
   let schedulero = 9748977 <= modulesY.length;
   do {
      modulesY.push(subout9.length % 2);
      if (schedulero) {
         break;
      }
   } while (schedulero && (1 == (modulesY.length ^ 2)));
   let back_ = imagenetworkerr1 ? !imagenetworkerr1 : imagenetworkerr1;
   do {
      imagenetworkerr1 = mbbids.length > backwhiteo.length;
      if (back_) {
         break;
      }
   } while ((imagenetworkerr1 || libreactnativejniI.length < 4) && back_);
      videojsi.push(((renewX ? 3 : 4) & 1));
      setIsRefreshing(true);
    }
    try {

   while (!manifestt) {
      manifestt = (modulesY.length % (Math.max(gemfile3.length, 4))) <= 4;
      break;
   }
      imagenetworkerr1 = (imagenetworkerr1 ? renewX : !imagenetworkerr1);
   for (let a = 0; a < 2; a++) {
       let modalu: Array<any> = [String.fromCharCode(97,95,56,55,95,116,120,116,111,98,106,0), String.fromCharCode(105,116,97,108,105,99,95,118,95,53,52,0)];
          let giftbuttonN: Map<any, any> = new Map([[String.fromCharCode(107,95,54,50,95,102,114,101,105,114,0),String.fromCharCode(117,95,57,50,95,112,111,119,101,114,101,100,0)], [String.fromCharCode(103,114,97,100,108,101,95,52,95,52,49,0),String.fromCharCode(117,95,56,48,95,111,112,116,101,100,0)], [String.fromCharCode(100,101,105,110,116,101,114,108,101,97,118,101,100,95,99,95,50,57,0),String.fromCharCode(121,95,52,50,95,112,114,101,100,101,99,101,115,115,111,114,0)]]);
         modalu.push(modalu.length & giftbuttonN.size);
       let videojsH = String.fromCharCode(97,103,114,101,101,109,101,110,116,95,107,95,56,48,0);
       let invite_ = String.fromCharCode(107,95,52,57,95,112,104,121,115,0);
      while (!videojsH.includes(`${invite_.length}`)) {
         invite_ += `${videojsH.length | 2}`;
         break;
      }
      subout9 += "3";
   }
      subout9 += `${((renewX ? 4 : 1) + 2)}`;
      await queryClient.resetQueries(["HomePage", id]);

   if ((2 ^ videojsi.length) > 1) {
       let with_t7 = 4;
       let untick6 = 2.0;
      for (let k = 0; k < 1; k++) {
          let formb = String.fromCharCode(105,116,115,101,108,102,95,118,95,49,48,0);
          let forwardq = String.fromCharCode(114,95,49,48,48,95,115,111,102,97,0);
          let awayU = String.fromCharCode(99,111,100,105,110,103,95,117,95,56,53,0);
          let emojiheartm = String.fromCharCode(118,97,114,108,101,110,103,116,104,95,106,95,57,55,0);
         untick6 *= (formb == String.fromCharCode(85,0) ? formb.length : forwardq.length);
         forwardq += `${emojiheartm.length}`;
         awayU = `${(String.fromCharCode(102,0) == emojiheartm ? awayU.length : emojiheartm.length)}`;
      }
      if (4.48 < (untick6 / 3.39) || (with_t7 >> (Math.min(Math.abs(2), 2))) < 3) {
          let favicon5: Array<any> = [267, 328, 448];
          let o_imageR = 0;
         with_t7 |= 1 | favicon5.length;
         favicon5.push(o_imageR);
      }
      let baiduV = with_t7 <= 9830107;
      do {
         with_t7 |= with_t7;
         if (baiduV) {
            break;
         }
      } while (baiduV && ((parseInt(`${untick6}`) + with_t7) < 3 || 3 < (3 | with_t7)));
      for (let x = 0; x < 1; x++) {
         with_t7 -= with_t7 + parseInt(`${untick6}`);
      }
       let subs_ = String.fromCharCode(113,95,51,95,114,101,115,111,117,114,99,101,115,0);
       let anythinkt = String.fromCharCode(118,105,98,114,97,110,99,101,95,115,95,50,48,0);
          let constantsC = String.fromCharCode(109,95,55,48,95,112,109,107,0);
          let dycreator3 = 4.0;
         anythinkt += `${with_t7}`;
         constantsC += `${constantsC.length + 3}`;
         dycreator3 /= Math.max(3, (constantsC == String.fromCharCode(113,0) ? constantsC.length : parseInt(`${dycreator3}`)));
      gemfile3 = `${((manifestt ? 3 : 2) - 3)}`;
   }
   if (backwhiteo != String.fromCharCode(102,0)) {
      gemfile3 += `${modulesY.length}`;
   }
   for (let x = 0; x < 3; x++) {
      mbbids = [libreactnativejniI.length];
   }
       let ping4 = String.fromCharCode(98,95,52,53,95,111,119,110,101,114,115,104,105,112,0);
       let eyecloseV: Array<any> = [String.fromCharCode(101,95,50,57,95,116,105,109,101,115,116,97,109,112,115,0), String.fromCharCode(109,112,101,103,118,105,100,101,111,100,101,99,95,119,95,51,56,0)];
       let mail9 = String.fromCharCode(114,101,117,112,108,111,97,100,95,112,95,56,55,0);
          let greenarrowupx: Array<any> = [13, 330, 455];
         eyecloseV.push(ping4.length);
         greenarrowupx = [greenarrowupx.length << (Math.min(Math.abs(3), 4))];
          let anythinkn = String.fromCharCode(102,111,114,109,97,116,116,101,114,115,95,109,95,53,50,0);
          let iconnointernetp = String.fromCharCode(117,95,56,55,95,97,118,102,114,97,109,101,0);
         eyecloseV.push(2);
         anythinkn += "3";
         iconnointernetp += `${(String.fromCharCode(102,0) == anythinkn ? iconnointernetp.length : anythinkn.length)}`;
       let s_countN = String.fromCharCode(100,111,110,97,116,105,111,110,95,117,95,50,49,0);
      for (let h = 0; h < 2; h++) {
         mail9 += "3";
      }
       let untickZ: Map<any, any> = new Map([[String.fromCharCode(108,95,51,48,95,115,116,97,114,116,115,0),String.fromCharCode(118,101,110,99,95,120,95,50,0)], [String.fromCharCode(110,95,50,49,95,97,114,99,0),String.fromCharCode(111,117,114,95,109,95,57,49,0)]]);
       let middlesoundc = 1.0;
       let disconnectedlogo1 = 2.0;
         disconnectedlogo1 *= parseFloat(`${1}`);
          let iconchatsendl = 0.0;
         middlesoundc += parseFloat(`${2}`);
         iconchatsendl /= Math.max(parseFloat(`${parseInt(`${iconchatsendl}`)}`), 5);
      for (let s = 0; s < 1; s++) {
         ping4 = `${parseInt(`${disconnectedlogo1}`) << (Math.min(Math.abs(1), 1))}`;
      }
      libreactnativejniI += `${videojsi.length}`;

      setIsRefreshing(false);

      gemfile3 += `${libreactnativejniI.length / 1}`;
   if (!commont.endsWith(`${renewX}`)) {
      renewX = imagenetworkerr1;
   }
   if ((2 >> (Math.min(5, chart2.length))) < 2) {
      chart2 += `${libreactnativejniI.length}`;
   }
      videojsi = [chart2.length];
      setNavId(id);

      videojsi.push(videojsi.length + 2);
   let temperatureE = 6738555 <= libreactnativejniI.length;
   do {
      libreactnativejniI = `${(String.fromCharCode(78,0) == libreactnativejniI ? libreactnativejniI.length : videojsi.length)}`;
      if (temperatureE) {
         break;
      }
   } while ((libreactnativejniI.length >= 3 || !manifestt) && temperatureE);
   while (gemfile3.endsWith(`${backwhiteo.length}`)) {
      gemfile3 += "1";
      break;
   }
   let iconrefresh5 = modulesY.length >= 6964268;
   do {
      modulesY = [(libreactnativejniI.length | (manifestt ? 2 : 2))];
      if (iconrefresh5) {
         break;
      }
   } while (((4 ^ modulesY.length) < 4 || 5 < (4 ^ subout9.length)) && iconrefresh5);
      setShowHomeLoading(false);

      chart2 = `${modulesY.length + libreactnativejniI.length}`;
   while (2 < backwhiteo.length) {
      backwhiteo += `${3 >> (Math.min(4, commont.length))}`;
      break;
   }
      libreactnativejniI += `${((manifestt ? 3 : 3))}`;
       let iconscheduleF = String.fromCharCode(99,95,52,57,95,115,101,116,114,97,110,103,101,0);
         iconscheduleF = `${1 + iconscheduleF.length}`;
      for (let y = 0; y < 2; y++) {
         iconscheduleF += `${(iconscheduleF == String.fromCharCode(73,0) ? iconscheduleF.length : iconscheduleF.length)}`;
      }
       let bnewsx = String.fromCharCode(114,95,57,55,95,100,101,99,111,109,112,111,115,101,105,0);
      imagenetworkerr1 = 64 > mbbids.length;

      return;
    } catch (error) {

   if ((mbbids.length >> (Math.min(Math.abs(3), 4))) == 4 && 3 == (3 >> (Math.min(2, videojsi.length)))) {
      videojsi = [(mbbids.length << (Math.min(4, Math.abs((imagenetworkerr1 ? 1 : 5)))))];
   }
      subout9 = `${modulesY.length | 1}`;
   while (backwhiteo.includes(`${renewX}`)) {
       let yellowanimationliveo: Array<any> = [473, 291, 322];
       let penaltyE = String.fromCharCode(104,95,51,50,95,100,101,116,97,99,104,0);
       let dacccfaabfbcbadeebddcabacdffdbE = String.fromCharCode(119,95,52,95,102,114,97,112,115,0);
      let downloaderb = 6696957 <= yellowanimationliveo.length;
      do {
         yellowanimationliveo.push(dacccfaabfbcbadeebddcabacdffdbE.length + yellowanimationliveo.length);
         if (downloaderb) {
            break;
         }
      } while (downloaderb && ((4 | dacccfaabfbcbadeebddcabacdffdbE.length) >= 5 && 3 >= (4 | yellowanimationliveo.length)));
      for (let l = 0; l < 1; l++) {
         yellowanimationliveo.push(penaltyE.length);
      }
       let libjsim = String.fromCharCode(108,95,54,52,95,116,114,97,110,115,102,111,114,109,0);
       let launcher3 = String.fromCharCode(114,95,56,51,95,101,103,114,101,115,115,0);
      let typingS = launcher3 == String.fromCharCode(56,109,118,113,114,97,98,56,0);
      do {
         launcher3 = `${libjsim.length | penaltyE.length}`;
         if (typingS) {
            break;
         }
      } while ((libjsim == String.fromCharCode(98,0)) && typingS);
      for (let g = 0; g < 3; g++) {
         libjsim += `${libjsim.length}`;
      }
      if (5 < libjsim.length) {
          let applicationX = true;
          let rncoreo = String.fromCharCode(102,99,116,108,95,106,95,57,48,0);
          let lessN = String.fromCharCode(112,111,108,108,115,95,113,95,52,55,0);
         libjsim = `${penaltyE.length / 3}`;
         applicationX = lessN == String.fromCharCode(108,0);
         rncoreo += `${rncoreo.length / (Math.max(1, 4))}`;
         lessN += `${rncoreo.length - 3}`;
      }
         launcher3 += `${launcher3.length}`;
      if (penaltyE == String.fromCharCode(102,0)) {
          let giftx: Map<any, any> = new Map([[String.fromCharCode(99,95,50,57,95,112,114,101,102,97,99,101,0),true ], [String.fromCharCode(111,95,56,49,0),true ]]);
          let dangerj = String.fromCharCode(116,95,54,49,95,99,111,112,105,101,115,0);
          let gcopy_eit = 5.0;
         dacccfaabfbcbadeebddcabacdffdbE = `${yellowanimationliveo.length}`;
         giftx.set(`${gcopy_eit}`, parseInt(`${gcopy_eit}`));
         dangerj += "3";
      }
         launcher3 = `${dacccfaabfbcbadeebddcabacdffdbE.length}`;
      backwhiteo = `${((manifestt ? 2 : 3) ^ (renewX ? 5 : 2))}`;
      break;
   }
   if ((chart2.length + mbbids.length) > 5) {
      mbbids = [backwhiteo.length % (Math.max(6, libreactnativejniI.length))];
   }
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    const handleTabPress = async () => {
       let yellowanimationliveV: Map<any, any> = new Map([[String.fromCharCode(98,95,48,95,117,117,105,100,0),763], [String.fromCharCode(119,95,56,57,95,105,116,120,102,109,0),165]]);
    let defaultbasketballbgL = 1.0;
    let anythinkf = true;
    let form2 = true;
    let homeiconK = String.fromCharCode(114,101,109,111,118,97,108,95,103,95,53,49,0);
    let buttone: Array<any> = [626, 612];
    let drage = String.fromCharCode(105,110,100,105,99,97,116,105,111,110,95,100,95,54,55,0);
    let eyeclose7 = String.fromCharCode(97,95,54,56,95,118,105,109,101,111,0);
   while (1 > (homeiconK.length << (Math.min(Math.abs(2), 1)))) {
       let orangeuparrow4: Array<any> = [150, 26];
       let iconbellactivev = true;
       let chatroombackgroundU = true;
      while (chatroombackgroundU) {
         chatroombackgroundU = iconbellactivev;
         break;
      }
       let sinai = String.fromCharCode(97,112,112,114,111,112,114,105,97,116,101,95,105,95,54,57,0);
       let mathW = String.fromCharCode(98,102,115,116,109,95,48,95,57,57,0);
      homeiconK = "3";
      orangeuparrow4 = [orangeuparrow4.length];
      break;
   }
   let detailsf = String.fromCharCode(102,51,55,116,103,56,52,0) == homeiconK;
   do {
      homeiconK += `${2 & homeiconK.length}`;
      if (detailsf) {
         break;
      }
   } while (detailsf && (5 == (parseInt(`${defaultbasketballbgL}`) / (Math.max(10, homeiconK.length)))));
      anythinkf = form2;

      if (isFocused && !isRefreshing) {

   for (let o = 0; o < 1; o++) {
      defaultbasketballbgL -= 1 << (Math.min(5, Math.abs(yellowanimationliveV.size)));
   }
   while ((3 * buttone.length) < 5 || (buttone.length - 3) < 5) {
       let gmailD: Map<any, any> = new Map([[String.fromCharCode(114,101,102,112,108,97,110,101,95,56,95,54,55,0),785], [String.fromCharCode(102,111,114,119,97,114,100,95,97,95,49,48,48,0),510]]);
       let baseliney = false;
          let iconqqK: Map<any, any> = new Map([[String.fromCharCode(106,95,52,56,95,102,97,114,101,110,100,0),422], [String.fromCharCode(122,95,52,51,95,97,98,111,114,116,97,98,108,101,0),835], [String.fromCharCode(105,95,51,53,95,115,115,115,101,0),152]]);
          let reminderB: Map<any, any> = new Map([[String.fromCharCode(112,111,112,117,108,97,114,95,103,95,55,52,0),String.fromCharCode(102,116,118,102,111,108,100,101,114,99,108,111,115,101,100,95,121,95,57,54,0)], [String.fromCharCode(97,95,53,51,95,110,97,109,101,115,112,97,99,101,0),String.fromCharCode(115,95,52,48,95,105,99,111,110,105,102,105,101,100,0)], [String.fromCharCode(121,95,56,48,95,115,116,117,110,0),String.fromCharCode(112,108,97,116,101,97,117,95,103,95,54,52,0)]]);
          let lightj = String.fromCharCode(97,116,116,97,99,104,95,51,95,53,56,0);
         gmailD = new Map([[lightj, (String.fromCharCode(75,0) == lightj ? lightj.length : (baseliney ? 5 : 4))]]);
         iconqqK.set(`${reminderB.size}`, reminderB.size % 1);
      for (let v = 0; v < 3; v++) {
         baseliney = (1 >= (gmailD.size | (baseliney ? gmailD.size : 93)));
      }
      let playe = baseliney ? !baseliney : baseliney;
      do {
         baseliney = baseliney && gmailD.size > 72;
         if (playe) {
            break;
         }
      } while (playe && (baseliney));
         gmailD.set(`${baseliney}`, (1 | (baseliney ? 4 : 2)));
         baseliney = gmailD.size > 18;
      for (let b = 0; b < 1; b++) {
          let update_0N = String.fromCharCode(118,105,101,119,115,95,102,95,54,55,0);
          let league2: Array<any> = [72, 338, 167];
         baseliney = 41 < update_0N.length;
         update_0N = `${league2.length}`;
         league2 = [3 >> (Math.min(1, league2.length))];
      }
      buttone.push(buttone.length - 2);
      break;
   }
       let hoverK = String.fromCharCode(115,95,57,95,101,120,101,99,117,116,101,0);
       let connectionQ = true;
      while (hoverK.length > 5) {
         connectionQ = connectionQ && hoverK.length >= 86;
         break;
      }
       let analyticn = false;
         connectionQ = hoverK.length == 83 && !connectionQ;
         connectionQ = hoverK.length > 29;
      for (let v = 0; v < 2; v++) {
         hoverK = `${((connectionQ ? 4 : 4) & (analyticn ? 3 : 5))}`;
      }
         hoverK = `${((connectionQ ? 2 : 5) / (Math.max(5, hoverK.length)))}`;
      drage += `${2 | yellowanimationliveV.size}`;
        setIsRefreshing((prevIsRefreshing) => {

      homeiconK += `${drage.length % 3}`;
   for (let z = 0; z < 2; z++) {
       let exampleimageh = String.fromCharCode(109,98,117,102,99,104,97,105,110,95,57,95,52,54,0);
       let j_unlockq = 0.0;
      while ((exampleimageh.length * j_unlockq) <= 1.17 || 4 <= (parseInt(`${j_unlockq}`) * 1)) {
          let bottome = 5.0;
          let orange9 = 1.0;
          let mathK = String.fromCharCode(108,95,52,50,95,111,99,117,109,101,110,116,0);
          let leakcheckerW = String.fromCharCode(119,95,54,57,95,114,101,115,105,122,101,100,0);
          let defaultpredictionprofile6 = String.fromCharCode(105,95,52,50,95,115,117,98,116,114,97,99,116,109,111,100,0);
         j_unlockq += parseInt(`${orange9}`);
         bottome *= parseFloat(`${defaultpredictionprofile6.length}`);
         mathK = `${mathK.length ^ 2}`;
         leakcheckerW += `${parseInt(`${bottome}`) | 1}`;
         defaultpredictionprofile6 = `${parseInt(`${bottome}`) % (Math.max(3, leakcheckerW.length))}`;
         break;
      }
       let libfbjnib = 5;
         libfbjnib %= Math.max(1, 1);
      while (4 == (libfbjnib / (Math.max(parseInt(`${j_unlockq}`), 5))) && 2.2 == (1.42 / (Math.max(1, j_unlockq)))) {
         libfbjnib *= libfbjnib;
         break;
      }
         exampleimageh = `${libfbjnib ^ 1}`;
         libfbjnib <<= Math.min(4, Math.abs(libfbjnib / (Math.max(parseInt(`${j_unlockq}`), 5))));
      drage += `${3 ^ yellowanimationliveV.size}`;
   }
      drage = `${(drage.length * (form2 ? 4 : 2))}`;
          if (prevIsRefreshing) {

   while ((2 | yellowanimationliveV.size) < 2) {
       let videocommonH: Map<any, any> = new Map([[String.fromCharCode(120,95,53,54,95,117,108,112,102,101,99,0),220], [String.fromCharCode(120,95,49,56,95,105,109,112,111,115,116,101,114,0),164]]);
       let build8 = 1.0;
       let movies8 = String.fromCharCode(99,111,110,116,105,110,117,97,108,95,57,95,54,55,0);
       let flagT = true;
          let ajaxR = String.fromCharCode(100,95,56,51,95,105,110,118,105,116,101,100,0);
          let logouser2 = 5.0;
         movies8 = `${parseInt(`${logouser2}`)}`;
         ajaxR += `${ajaxR.length}`;
         logouser2 += (parseFloat(`${ajaxR == String.fromCharCode(76,0) ? ajaxR.length : ajaxR.length}`));
      for (let v = 0; v < 1; v++) {
         movies8 += `${1 * videocommonH.size}`;
      }
      for (let m = 0; m < 1; m++) {
         build8 -= videocommonH.size << (Math.min(Math.abs(3), 5));
      }
          let q_viewk: Array<any> = [905, 224];
         flagT = q_viewk.length > parseInt(`${build8}`);
          let debugP = true;
         videocommonH = new Map([[`${videocommonH.size}`, 3]]);
         debugP = !debugP;
      while ((4 + videocommonH.size) < 5) {
          let accepted7 = 0.0;
          let fastforward3 = String.fromCharCode(102,111,110,116,115,95,103,95,52,54,0);
          let constantsQ = 1.0;
          let iconadslinkL = 3.0;
          let iconarrowrightf = 4.0;
         flagT = (parseInt(`${constantsQ}`) + movies8.length) < 36;
         accepted7 /= Math.max(5, (String.fromCharCode(117,0) == fastforward3 ? fastforward3.length : parseInt(`${iconarrowrightf}`)));
         constantsQ /= Math.max(parseFloat(`${fastforward3.length ^ 1}`), 3);
         iconadslinkL += 1 << (Math.min(2, Math.abs(parseInt(`${iconarrowrightf}`))));
         break;
      }
      for (let p = 0; p < 1; p++) {
         videocommonH = new Map([[movies8, parseInt(`${build8}`) - 1]]);
      }
          let filtern: Array<any> = [183, 571, 260];
          let graphicsO = String.fromCharCode(103,95,57,48,95,112,114,111,112,101,114,116,121,0);
         build8 += videocommonH.size;
         filtern.push(2);
         graphicsO = "2";
      if (!flagT) {
          let switch_m9: Array<any> = [433, 430];
          let livenodatabgimgK = 1.0;
          let eyeopenG: Map<any, any> = new Map([[String.fromCharCode(102,116,118,109,108,97,115,116,110,111,100,101,95,100,95,53,51,0),436], [String.fromCharCode(117,110,118,111,116,101,95,49,95,50,51,0),14]]);
          let inactiveQ: Map<any, any> = new Map([[String.fromCharCode(110,105,100,111,98,106,95,120,95,56,55,0),327], [String.fromCharCode(118,97,108,105,100,97,116,105,110,103,95,56,95,49,49,0),616], [String.fromCharCode(112,95,51,48,95,104,97,108,102,0),550]]);
          let middlea = String.fromCharCode(112,114,111,99,99,101,115,115,95,121,95,50,49,0);
         videocommonH = new Map([[`${inactiveQ.size}`, inactiveQ.size / (Math.max(middlea.length, 7))]]);
         switch_m9 = [parseInt(`${livenodatabgimgK}`)];
         livenodatabgimgK *= parseFloat(`${parseInt(`${livenodatabgimgK}`)}`);
         eyeopenG.set(`${switch_m9.length}`, switch_m9.length);
         middlea = `${switch_m9.length}`;
      }
      if (movies8.includes(`${build8}`)) {
         movies8 += `${videocommonH.size}`;
      }
         build8 /= Math.max(movies8.length + videocommonH.size, 5);
      while (4.65 < (5.26 + build8) || 5.26 < build8) {
         build8 /= Math.max(2, (String.fromCharCode(122,0) == movies8 ? videocommonH.size : movies8.length));
         break;
      }
      buttone = [yellowanimationliveV.size];
      break;
   }
      yellowanimationliveV.set(`${anythinkf}`, parseInt(`${defaultbasketballbgL}`) | 1);
      drage = `${1 % (Math.max(parseInt(`${defaultbasketballbgL}`), 3))}`;
            return prevIsRefreshing; 
          } else {

   while (3.35 >= (defaultbasketballbgL * 5.7)) {
      defaultbasketballbgL += yellowanimationliveV.size;
      break;
   }
      buttone.push(((anythinkf ? 1 : 2) * drage.length));
   let inactiver = 8859947 >= buttone.length;
   do {
      buttone = [((anythinkf ? 3 : 1) - parseInt(`${defaultbasketballbgL}`))];
      if (inactiver) {
         break;
      }
   } while (inactiver && ((4 - buttone.length) >= 4));
            return true; 
          }
        });

   let circle8 = 5586478 >= homeiconK.length;
   do {
      homeiconK = `${(3 * (anythinkf ? 2 : 2))}`;
      if (circle8) {
         break;
      }
   } while (circle8 && (!homeiconK.startsWith(`${buttone.length}`)));
   for (let f = 0; f < 1; f++) {
      yellowanimationliveV.set(eyeclose7, buttone.length % 3);
   }
   for (let v = 0; v < 3; v++) {
      drage += "2";
   }
        await handleRefresh(navId, true);

   if (!anythinkf || 5 > (buttone.length | 1)) {
       let libavcodec6 = String.fromCharCode(100,101,102,114,97,103,109,101,110,116,95,54,95,53,50,0);
       let carouselz = String.fromCharCode(106,95,50,49,95,115,101,97,114,99,104,101,100,0);
       let defaultplayerimg2 = 4.0;
       let textinputy = String.fromCharCode(121,95,57,56,95,117,110,115,104,105,102,116,0);
       let mergero = String.fromCharCode(97,115,115,105,103,110,95,122,95,51,52,0);
       let classesF = String.fromCharCode(114,97,110,100,95,114,95,56,55,0);
      if (4.40 >= defaultplayerimg2) {
         mergero = `${carouselz.length}`;
      }
          let langq = 4;
          let iconedite = 1;
         mergero += `${iconedite}`;
         langq *= 3 * langq;
         classesF += `${parseInt(`${defaultplayerimg2}`) << (Math.min(mergero.length, 2))}`;
      for (let n = 0; n < 2; n++) {
         defaultplayerimg2 *= parseFloat(`${1 << (Math.min(4, mergero.length))}`);
      }
      for (let u = 0; u < 2; u++) {
         textinputy = `${3 / (Math.max(8, parseInt(`${defaultplayerimg2}`)))}`;
      }
      let yellowanimationliveH = libavcodec6 == String.fromCharCode(116,99,103,103,104,104,121,0);
      do {
         libavcodec6 = "1";
         if (yellowanimationliveH) {
            break;
         }
      } while ((mergero.length <= 2) && yellowanimationliveH);
       let textlayoutmanagerc = 1.0;
       let refreshborderless3 = 2.0;
         textlayoutmanagerc += (String.fromCharCode(109,0) == libavcodec6 ? libavcodec6.length : parseInt(`${refreshborderless3}`));
         textlayoutmanagerc /= Math.max(1 << (Math.min(4, Math.abs(parseInt(`${textlayoutmanagerc}`)))), 1);
          let with_zza = String.fromCharCode(102,95,56,55,95,98,105,116,100,101,112,116,104,0);
         libavcodec6 += `${libavcodec6.length}`;
         with_zza = `${with_zza.length % 3}`;
          let floatingv = String.fromCharCode(117,115,105,110,103,95,99,95,50,49,0);
          let orangeuparrowb = String.fromCharCode(97,95,51,55,95,112,105,110,110,105,110,103,0);
         textlayoutmanagerc *= parseInt(`${defaultplayerimg2}`);
         floatingv = `${3 | orangeuparrowb.length}`;
         orangeuparrowb += `${floatingv.length ^ 3}`;
      buttone.push(((form2 ? 2 : 1) >> (Math.min(Math.abs(2), 4))));
   }
       let basketball5 = 5.0;
       let neonZ = String.fromCharCode(112,95,57,56,95,99,111,101,102,102,0);
      for (let k = 0; k < 2; k++) {
          let eventsplash3 = 5.0;
          let fcdaebecbcbafcdfceaaeccfeacdb3 = true;
          let turndownk = 4.0;
         neonZ += `${((fcdaebecbcbafcdfceaaeccfeacdb3 ? 5 : 4) % (Math.max(parseInt(`${eventsplash3}`), 1)))}`;
         eventsplash3 -= parseFloat(`${parseInt(`${turndownk}`) + parseInt(`${turndownk}`)}`);
         fcdaebecbcbafcdfceaaeccfeacdb3 = turndownk <= turndownk;
      }
         neonZ = `${parseInt(`${basketball5}`) - neonZ.length}`;
          let sliderz: Array<any> = [884, 626, 519];
          let videovare: Array<any> = [795, 653];
         neonZ += `${3 << (Math.min(5, neonZ.length))}`;
         sliderz = [sliderz.length];
         videovare = [sliderz.length];
      while (!neonZ.includes(`${basketball5}`)) {
         basketball5 += parseFloat(`${parseInt(`${basketball5}`) | 2}`);
         break;
      }
      if (5.75 < (1.56 + basketball5) && 2 < (1 / (Math.max(3, neonZ.length)))) {
          let downloaded8 = 5.0;
          let yellowtoredC = true;
         basketball5 *= parseFloat(`${parseInt(`${downloaded8}`)}`);
         downloaded8 /= Math.max(2, (parseFloat(`${1 >> (Math.min(Math.abs((yellowtoredC ? 1 : 5)), 1))}`)));
      }
      let chart5 = basketball5 <= 5795890.0;
      do {
          let t_view_ = 0.0;
          let controlsf: Map<any, any> = new Map([[String.fromCharCode(105,110,102,108,97,116,101,95,52,95,55,50,0),352], [String.fromCharCode(116,121,112,101,111,102,95,122,95,51,50,0),242]]);
          let listR = String.fromCharCode(101,113,117,101,115,116,95,105,95,54,54,0);
          let filedq = String.fromCharCode(114,101,99,111,110,110,101,99,116,101,100,95,100,95,53,54,0);
          let annera = 0.0;
         basketball5 /= Math.max(1, parseFloat(`${filedq.length | neonZ.length}`));
         t_view_ += parseFloat(`${parseInt(`${annera}`) + listR.length}`);
         controlsf = new Map([[`${controlsf.size}`, 3]]);
         listR += `${parseInt(`${t_view_}`)}`;
         filedq = "1";
         annera -= parseFloat(`${2}`);
         if (chart5) {
            break;
         }
      } while (chart5 && ((2 & neonZ.length) > 3));
      form2 = yellowanimationliveV.size > 71;
       let y_animationJ = 1.0;
      let statsnomoredatal = 6494011.0 >= y_animationJ;
      do {
         y_animationJ -= parseFloat(`${parseInt(`${y_animationJ}`) - 3}`);
         if (statsnomoredatal) {
            break;
         }
      } while (((y_animationJ / (Math.max(4.97, 5))) > 5.81) && statsnomoredatal);
      while (y_animationJ <= 1.39) {
         y_animationJ -= parseFloat(`${3 >> (Math.min(Math.abs(parseInt(`${y_animationJ}`)), 3))}`);
         break;
      }
         y_animationJ -= parseFloat(`${parseInt(`${y_animationJ}`)}`);
      drage += `${((anythinkf ? 5 : 5))}`;
        setIsRefreshing(false);
      }
    };
    
    const unsubscribe = navigation.addListener("tabPress", handleTabPress);
    
    return () => unsubscribe();
  }, [navigation, isFocused, navId, handleRefresh]);

  const getContent = useCallback(
    ({
      item,
      index,
    }: {
      item: UseQueryResult<wawaNterstitial>;
      index: number;
    }) => {
      return (
        <>
          {item?.data !== undefined &&
            (index === 0 ? (
              <RecommendationHome
                vodCarouselRes={item.data}
                onRefresh={handleRefresh}
                onLoad={handleShowLoading}
                refreshProp={isRefreshing}
              />
            ) : (
              <>
                <CatagoryHome
                  vodCarouselRes={item.data}
                  navId={index}
                  onRefresh={handleRefresh}
                  refreshProp={isRefreshing}
                />
              </>
            ))}
        </>
      );
    },
    []
  );


  const { setNavbarHeight, reloadBanner } = useContext(AdsBannerContext);

  useEffect(() => {
    setNavbarHeight(bottomTabHeight);
  }, [bottomTabHeight]);



  
  
  
  
  
  
  


  
  useEffect(() => {
    if (navOptions !== undefined && navOptions.length > 0) {
      wawa_dacccfaabfbcbadeebddcabacdffdbc_video.homeTabViewsAnalytics({
        tab_id: navOptions[0].id.toString(),
        tab_name: navOptions[0].name,
      });
    }
  }, [navOptions])

  useEffect(() => {
    if (navOptions !== undefined && navOptions.length > 0) {
      wawa_dacccfaabfbcbadeebddcabacdffdbc_video.homeTabViewsAnalytics({
        tab_id: navOptions[navId].id.toString(),
        tab_name: navOptions[navId].name,
      });
    }
  }, [navId])
  

  const onTabPress = (target?: string) => {
    const targetStr = target?.substring(0, target.indexOf('-'));

    if (navOptions !== undefined) {
      const found = navOptions?.findIndex((e) => e.name === targetStr);
      setNavId(found);

      
      wawa_dacccfaabfbcbadeebddcabacdffdbc_video.homeTabClicksAnalytics({
        tab_id: navOptions[found].id.toString(),
        tab_name: navOptions[found].name,
      });
      
    }
  }

  const onTabSwipe = useCallback((index: number, tab: any) => {
    setNavId(index);
  }, []);

  

  return (
    <>
      <ScreenContainer
        containerStyle={{ paddingLeft: 0, paddingRight: 0 }}
        isHome={false} 
      >
        <View
          style={{
            backgroundColor: colors.background,
            paddingLeft: spacing.sideOffset,
            paddingRight: spacing.sideOffset,
          }}
        >
          <HomeHeader navigator={navigation} />
        </View>
        <>
          {(!data || isRefreshing) && (
            <View
              style={{
                ...styles.loading,
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                left: "50%",
                marginLeft: -40, 
              }}
            >
              {
                <FastImage
                  style={{ height: 80, width: 80 }}
                  source={require("@static/images/iconnewsshareDist.gif")}
                  resizeMode={"contain"}
                />
              }
            </View>
          )}
          {showHomeLoading && !isOffline && (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgb(20,22,25)",
              }}
            >
              <FastImage
                source={require("@static/images/mbridgeFilledLibfolly.gif")}
                style={{
                  width: 150,
                  height: 150,
                  position: "relative",
                  bottom: 50,
                  zIndex: -1,
                }}
                resizeMode={"contain"}
                useFastImage={true}
              />
            </View>
          )}
          {data && !isOffline && getContent({ item: data[0], index: 0 })}
        </>
      </ScreenContainer>
      {isOffline && <NoConnection onClickRetry={checkConnection} />}
    </>
  );
}

export default memo(wawa_down);

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 100,
    marginTop: 10,
  },
  image: {
    width: "100%",
    height: 160,
    borderRadius: 10,
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
  dotStyle: {
    width: 6,
    height: 4,
  },
  activeDotStyle: {
    width: 14,
    height: 4,
  },
  paginationStyle: {
    top: 173,
    height: 20,
  },
  vod_hotlist: {
    height: 99,
    width: 176,
  },
  nav: {
    flexGrow: 1,
    justifyContent: "flex-start",
    marginBottom: 10,
  },
  catalogNav: {
    flexGrow: 1,
    justifyContent: "center",
    marginTop: 5,
  },
  vodList: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  bottomBlur: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 45,
    flex: 1,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    opacity: 0.8,
  },
  carouselTag: {
    position: "absolute",
    bottom: 12,
    left: 16,
    marginRight: 16,
  },
  loading: {
    flexDirection: "row",
    justifyContent: "center",
    flex: 1,
    height: "100%",
  },
});
