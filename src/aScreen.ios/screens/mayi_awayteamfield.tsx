import React, { useCallback, useEffect, useState, memo, useContext } from "react";
import { Dimensions, Platform, StyleSheet, View } from "react-native";
import ScreenContainer from "../components/container/mayi_save";
import { useFocusEffect, useTheme } from "@react-navigation/native";
import { useQuery, useQueries, UseQueryResult } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import {
  mayi_TraminiManifest,
} from "@type/mayi_green";
import {
  BottomTabScreenProps,
  useBottomTabBarHeight,
} from "@react-navigation/bottom-tabs";
import {
  ANDROID_HOME_PAGE_POP_UP_ADS,
  API_DOMAIN,
  IOS_HOME_PAGE_POP_UP_ADS,
} from "@utility/mayi_middleware_apps";
import CatagoryHome from "../components/container/mayi_matches_libapminsighta";
import RecommendationHome from "../components/container/mayi_embed";
import HomeHeader from "../components/header/mayi_iconwatch_other_header";
import FastImage from "../components/common/mayi_slider";
import { useIsFocused } from "@react-navigation/native";
import NoConnection from "./../components/common/mayi_backicon_penalty";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";
import { useAppSelector, useAppDispatch, useSelector } from "@hooks/mayi_redirect";
import { mayi_Libapminsightb } from "@redux/mayi_live_tumbnail";
import { mayi_InjuryNewinterstitial } from "@redux/reducers/mayi_libavcodec_nativeex";
import HomeNav from "../components/tabNavigate/mayi_basketballawayteam_view";

import {
  ATRNSDK,
  ATInterstitialRNSDK,
  ATBannerRNSDK,
} from "./../../../AnyThinkAds/mayi_referrer";
import { AdsBannerContext } from "../../contexts/mayi_star_sigmob";

import mayi_push from "../../../Umeng/mayi_push";
import { mayi_Iconclosewhite } from "@api";
import DeviceInfo from "react-native-device-info";
import { mayi_Baseline } from "@redux/reducers/mayi_chatroombackground_unlock";
import { mayi_Gift } from "@models/mayi_libjsinspector";

function mayi_awayteamfield({ navigation }: BottomTabScreenProps<any>) {
  const isFocused = useIsFocused();
  const { colors, spacing } = useTheme();
  const [navId, setNavId] = useState(0);
  const queryClient = useQueryClient();
  const [isOffline, setIsOffline] = useState(false);
  const [showHomeLoading, setShowHomeLoading] = useState(true);
  const settingsReducer: mayi_InjuryNewinterstitial = useAppSelector(
    ({ settingsReducer }: mayi_Libapminsightb) => settingsReducer
  );
  const userState = useSelector<mayi_Baseline>('userReducer');
  const isVip = mayi_Gift.isVip(userState.user);
  const bottomTabHeight = useBottomTabBarHeight();

  const { data: navOptions, refetch } = useQuery({
    queryKey: ["HomePageNavOptions"],
    queryFn: () => mayi_Iconclosewhite.getHomeNav(),
  });

  const fetchData = useCallback((id: number) => mayi_Iconclosewhite.getHomePages(id, isVip), []);

  const data = useQueries({
    queries: navOptions
      ? navOptions.map((x: any) => ({
          queryKey: ["HomePage", x.id === 0 ? 1001 : x.id], 
          queryFn: () => fetchData(x.id),
        }))
      : [],
  });
  

  const checkConnection = async () => {
       let filledH = String.fromCharCode(112,114,101,100,105,99,116,105,111,110,115,95,114,95,51,55,0);
    let sportL = 3.0;
    let iconpipexpandK = 1.0;
    let componentg = 5.0;
    let weiboh = String.fromCharCode(102,95,53,55,95,104,117,110,103,0);
    let liveshare2 = 4;
    let basketballawayteamK = String.fromCharCode(122,95,55,49,95,97,108,108,111,119,101,100,0);
    let nbatrophyy = String.fromCharCode(115,117,103,103,101,115,116,101,100,95,113,95,51,55,0);
    let libavcodecg = 5;
    let sansG: Map<any, any> = new Map([[String.fromCharCode(99,111,115,95,50,95,55,0),String.fromCharCode(120,95,55,48,95,115,109,106,112,101,103,0)], [String.fromCharCode(108,97,99,105,110,103,95,101,95,57,0),String.fromCharCode(102,101,116,99,104,95,49,95,57,54,0)], [String.fromCharCode(116,114,110,115,95,107,95,55,56,0),String.fromCharCode(114,95,54,56,95,97,101,118,97,108,0)]]);
    let lightP = 1.0;
    let sharedP = true;
   if (1 >= (parseInt(`${sportL}`) - 1) && 5.97 >= (sportL - parseFloat(`${filledH.length}`))) {
      sportL += parseFloat(`${1}`);
   }
      basketballawayteamK += `${liveshare2 % (Math.max(6, parseInt(`${iconpipexpandK}`)))}`;
   for (let i = 0; i < 3; i++) {
       let mbbid1 = 1.0;
       let indexA = 5.0;
      while ((1.83 + indexA) == 2.5 && (1.83 + indexA) == 2.80) {
          let stringj = String.fromCharCode(100,108,105,115,116,95,57,95,56,56,0);
          let carouselF = String.fromCharCode(104,95,55,53,95,102,105,116,116,101,100,0);
          let libhermesx = true;
          let specZ: Map<any, any> = new Map([[String.fromCharCode(113,117,97,110,116,105,122,101,114,115,95,56,95,50,49,0),553], [String.fromCharCode(105,110,105,116,101,110,99,95,108,95,54,51,0),800], [String.fromCharCode(100,95,53,50,95,99,101,114,116,105,102,105,99,97,116,101,115,0),551]]);
         mbbid1 += parseFloat(`${parseInt(`${mbbid1}`)}`);
         stringj += `${1 - carouselF.length}`;
         carouselF += `${specZ.size ^ 2}`;
         libhermesx = !libhermesx;
         specZ.set(`${libhermesx}`, ((libhermesx ? 5 : 2) & 1));
         break;
      }
      for (let i = 0; i < 1; i++) {
         indexA /= Math.max(parseFloat(`${parseInt(`${indexA}`) & parseInt(`${mbbid1}`)}`), 1);
      }
       let chartC = String.fromCharCode(119,97,115,116,101,100,95,121,95,51,48,0);
      let predictionbuttonR = 7924329 <= chartC.length;
      do {
          let backwhite3: Array<any> = [509, 944, 256];
         chartC += `${backwhite3.length}`;
         if (predictionbuttonR) {
            break;
         }
      } while (predictionbuttonR && ((chartC.length * 3) >= 3));
          let checkboxn = String.fromCharCode(114,95,53,49,95,102,114,97,109,101,115,101,116,116,101,114,0);
          let zhengpianB: Map<any, any> = new Map([[String.fromCharCode(115,101,97,114,99,104,95,54,95,50,51,0),212], [String.fromCharCode(105,110,116,101,114,109,101,100,105,97,116,101,95,99,95,54,50,0),365]]);
          let iconclosewhitewithbgM: Map<any, any> = new Map([[String.fromCharCode(103,101,116,112,97,103,101,115,105,122,101,95,113,95,57,50,0),40], [String.fromCharCode(108,95,48,95,116,101,114,109,115,0),426]]);
         mbbid1 /= Math.max(parseFloat(`${parseInt(`${indexA}`) ^ 1}`), 4);
         checkboxn += `${iconclosewhitewithbgM.size}`;
         zhengpianB = new Map([[`${iconclosewhitewithbgM.size}`, 2]]);
          let jnewarchdefaultsl: Map<any, any> = new Map([[String.fromCharCode(118,95,56,53,95,97,99,101,110,99,0),String.fromCharCode(116,95,50,52,95,115,111,117,114,99,101,115,0)], [String.fromCharCode(114,95,57,55,95,99,111,110,116,111,117,114,0),String.fromCharCode(99,111,110,99,97,116,101,110,97,116,101,100,95,111,95,54,57,0)], [String.fromCharCode(118,95,56,51,95,119,104,105,116,101,115,112,97,99,101,115,0),String.fromCharCode(120,95,56,52,95,114,111,111,116,115,0)]]);
          let pointo = String.fromCharCode(113,95,49,52,95,105,110,102,108,105,103,104,116,0);
         indexA /= Math.max(2, parseFloat(`${jnewarchdefaultsl.size}`));
         jnewarchdefaultsl = new Map([[pointo, pointo.length]]);
      iconpipexpandK += parseInt(`${indexA}`) + parseInt(`${sportL}`);
   }
   let pressure1 = 8835127 >= filledH.length;
   do {
      filledH += `${parseInt(`${iconpipexpandK}`) | libavcodecg}`;
      if (pressure1) {
         break;
      }
   } while (pressure1 && (!filledH.startsWith(`${componentg}`)));
      weiboh += "2";

    const state = await NetInfo.fetch();

   for (let e = 0; e < 2; e++) {
       let downD: Array<any> = [String.fromCharCode(105,110,115,116,97,108,108,95,114,95,52,53,0), String.fromCharCode(113,117,105,99,107,95,115,95,53,53,0), String.fromCharCode(114,95,51,48,95,109,111,118,101,0)];
       let executorq = String.fromCharCode(120,95,53,49,95,98,108,111,99,107,101,114,0);
       let videobufferloadingX = String.fromCharCode(109,112,101,103,97,117,100,105,111,100,115,112,95,99,95,49,56,0);
       let cricketq = 1.0;
         videobufferloadingX = `${(videobufferloadingX == String.fromCharCode(98,0) ? videobufferloadingX.length : parseInt(`${cricketq}`))}`;
          let settingu: Map<any, any> = new Map([[String.fromCharCode(101,113,117,97,108,115,95,56,95,57,56,0),true ], [String.fromCharCode(105,95,56,57,95,100,105,115,116,105,110,99,116,0),true ], [String.fromCharCode(100,95,55,52,95,100,97,116,97,98,108,111,99,107,0),false ]]);
         cricketq += (parseFloat(`${videobufferloadingX == String.fromCharCode(56,0) ? settingu.size : videobufferloadingX.length}`));
         downD.push(parseInt(`${cricketq}`) / 2);
      while (3 < (executorq.length - downD.length)) {
         downD = [parseInt(`${cricketq}`)];
         break;
      }
          let helperT = String.fromCharCode(101,95,53,48,95,112,110,103,100,115,112,0);
          let bootsplash9 = 0.0;
          let cornerC = false;
         executorq = "3";
         helperT = `${2 >> (Math.min(Math.abs(parseInt(`${bootsplash9}`)), 5))}`;
         bootsplash9 *= (parseFloat(`${String.fromCharCode(99,0) == helperT ? parseInt(`${bootsplash9}`) : helperT.length}`));
         cornerC = !cornerC;
         downD = [executorq.length];
      for (let g = 0; g < 3; g++) {
         downD = [2];
      }
      let unselected3 = videobufferloadingX == String.fromCharCode(53,53,111,112,117,108,48,51,99,116,0);
      do {
          let libturbomodulejsijniv = String.fromCharCode(121,95,53,54,95,111,103,103,100,101,99,0);
          let incidentb = false;
          let animationsG = String.fromCharCode(113,95,57,52,95,115,116,114,97,116,101,103,121,0);
          let tempnodataJ = String.fromCharCode(114,105,99,101,95,121,95,54,51,0);
         videobufferloadingX = `${libturbomodulejsijniv.length | executorq.length}`;
         libturbomodulejsijniv = `${animationsG.length ^ 1}`;
         incidentb = (tempnodataJ.length - animationsG.length) == 31;
         tempnodataJ = "3";
         if (unselected3) {
            break;
         }
      } while ((2.80 <= (3.87 / (Math.max(6, cricketq))) || 5 <= (videobufferloadingX.length / (Math.max(4, parseInt(`${cricketq}`))))) && unselected3);
      while ((4 & downD.length) >= 3) {
         videobufferloadingX = "2";
         break;
      }
      let iconfeedback9 = String.fromCharCode(114,49,49,108,0) == videobufferloadingX;
      do {
          let logout2 = 2.0;
         videobufferloadingX = `${videobufferloadingX.length}`;
         logout2 -= parseInt(`${logout2}`);
         if (iconfeedback9) {
            break;
         }
      } while ((executorq == String.fromCharCode(77,0)) && iconfeedback9);
      if (2 >= (parseInt(`${cricketq}`) * executorq.length) || 1.52 >= (3.5 * cricketq)) {
          let defaultlogow = String.fromCharCode(105,95,54,95,97,103,114,101,101,109,101,110,116,0);
          let blacklistq = 4.0;
         executorq += `${downD.length}`;
         defaultlogow += `${(String.fromCharCode(114,0) == defaultlogow ? defaultlogow.length : parseInt(`${blacklistq}`))}`;
         blacklistq *= parseFloat(`${defaultlogow.length}`);
      }
      if ((downD.length * 4) < 5) {
          let confirmationO = String.fromCharCode(120,95,56,52,95,115,116,114,116,121,112,101,0);
          let defaultfootballbga: Array<any> = [784, 69, 196];
          let pressureD: Map<any, any> = new Map([[String.fromCharCode(109,95,50,95,114,101,99,118,0),876], [String.fromCharCode(100,98,115,116,97,116,95,97,95,52,56,0),472], [String.fromCharCode(118,97,108,105,100,97,116,101,95,109,95,54,49,0),80]]);
          let thumbnailC = String.fromCharCode(110,95,52,54,95,97,110,100,0);
         downD = [downD.length | 3];
         confirmationO = `${thumbnailC.length | 3}`;
         defaultfootballbga = [1];
         pressureD.set(`${thumbnailC}`, (String.fromCharCode(101,0) == thumbnailC ? thumbnailC.length : pressureD.size));
      }
      libavcodecg -= filledH.length;
   }
      filledH += `${libavcodecg % (Math.max(1, 2))}`;
      basketballawayteamK += `${weiboh.length & liveshare2}`;
       let volumeb = String.fromCharCode(110,97,109,101,116,111,105,110,100,101,120,95,116,95,55,49,0);
      if (2 == volumeb.length) {
          let unread4: Array<any> = [611, 710];
          let next8 = false;
         volumeb += `${(volumeb == String.fromCharCode(99,0) ? volumeb.length : (next8 ? 1 : 1))}`;
         unread4 = [unread4.length];
         next8 = 62 < unread4.length;
      }
      while (volumeb == volumeb) {
          let renderG = String.fromCharCode(99,97,99,104,101,102,108,117,115,104,95,118,95,52,57,0);
         volumeb = `${renderG.length}`;
         break;
      }
         volumeb = `${volumeb.length - volumeb.length}`;
      sportL *= parseFloat(`${parseInt(`${componentg}`) * basketballawayteamK.length}`);
   let iconadslinkZ = libavcodecg >= 9502797;
   do {
      libavcodecg %= Math.max(2, parseInt(`${iconpipexpandK}`) / 2);
      if (iconadslinkZ) {
         break;
      }
   } while (iconadslinkZ && (5.95 >= (5.14 + componentg)));
    

   for (let i = 0; i < 2; i++) {
       let contextl: Map<any, any> = new Map([[String.fromCharCode(108,117,109,105,110,97,110,99,101,95,110,95,49,49,0),false ], [String.fromCharCode(108,95,51,57,95,104,97,110,100,108,105,110,103,0),true ]]);
       let blacki = 5.0;
       let hejiq = String.fromCharCode(109,95,54,95,97,102,102,101,99,116,0);
       let libavutilV = String.fromCharCode(109,95,53,48,95,115,99,97,108,101,100,99,111,110,118,111,108,118,101,0);
          let basketballplayerplaceholderE: Array<any> = [23, 542, 278];
         libavutilV = `${basketballplayerplaceholderE.length / (Math.max(libavutilV.length, 9))}`;
      for (let e = 0; e < 2; e++) {
         blacki *= parseFloat(`${libavutilV.length * 2}`);
      }
      if (3 < libavutilV.length) {
          let embedS: Array<any> = [653, 196, 912];
         hejiq = "1";
         embedS.push(embedS.length & 1);
      }
         blacki -= parseFloat(`${libavutilV.length * parseInt(`${blacki}`)}`);
          let roundV: Map<any, any> = new Map([[String.fromCharCode(100,105,115,97,112,112,101,97,114,105,110,103,95,49,95,56,55,0),110], [String.fromCharCode(116,104,114,101,97,100,112,111,111,108,95,110,95,56,50,0),860], [String.fromCharCode(114,117,110,110,101,114,95,110,95,52,57,0),385]]);
         contextl.set(`${libavutilV}`, libavutilV.length);
         roundV.set(`${roundV.size}`, 2);
      for (let z = 0; z < 2; z++) {
         contextl.set(hejiq, hejiq.length >> (Math.min(4, Math.abs(contextl.size))));
      }
         hejiq += `${contextl.size / 2}`;
      let libavfilterX = blacki <= 8779321.0;
      do {
         blacki /= Math.max(4, parseFloat(`${1}`));
         if (libavfilterX) {
            break;
         }
      } while ((hejiq.length >= 1) && libavfilterX);
      for (let w = 0; w < 1; w++) {
         blacki += parseFloat(`${1 & parseInt(`${blacki}`)}`);
      }
          let issubC = String.fromCharCode(109,97,116,104,95,120,95,49,52,0);
          let showlessU: Map<any, any> = new Map([[String.fromCharCode(112,114,101,99,101,100,101,110,99,101,95,97,95,56,50,0),12], [String.fromCharCode(115,117,112,101,114,95,53,95,53,54,0),610]]);
         contextl = new Map([[`${contextl.size}`, showlessU.size | contextl.size]]);
         issubC = `${(issubC == String.fromCharCode(72,0) ? issubC.length : issubC.length)}`;
         showlessU = new Map([[issubC, issubC.length]]);
      let telegramy = String.fromCharCode(121,107,52,95,0) == hejiq;
      do {
          let fastm = 2.0;
          let iconsaveimagee = String.fromCharCode(118,112,99,120,95,118,95,51,49,0);
          let tempS = String.fromCharCode(116,114,97,110,115,105,101,110,116,95,108,95,57,56,0);
          let libavcodecq: Array<any> = [723, 136];
          let predictionbuttonC = String.fromCharCode(115,95,56,50,95,112,104,97,115,101,0);
         hejiq = `${tempS.length}`;
         fastm -= parseFloat(`${iconsaveimagee.length - parseInt(`${fastm}`)}`);
         iconsaveimagee += `${(String.fromCharCode(95,0) == iconsaveimagee ? parseInt(`${fastm}`) : iconsaveimagee.length)}`;
         tempS = `${parseInt(`${fastm}`)}`;
         libavcodecq = [3];
         predictionbuttonC = `${iconsaveimagee.length}`;
         if (telegramy) {
            break;
         }
      } while (((2 % (Math.max(9, hejiq.length))) <= 1 && 4 <= (2 << (Math.min(3, hejiq.length)))) && telegramy);
          let yellowanimationliveP = String.fromCharCode(116,112,101,108,95,113,95,53,49,0);
         hejiq = `${libavutilV.length & 2}`;
         yellowanimationliveP = `${yellowanimationliveP.length}`;
      libavcodecg ^= 3 ^ parseInt(`${componentg}`);
   }
   while (!nbatrophyy.startsWith(filledH)) {
      filledH = "3";
      break;
   }
   let iconsetting9 = 6851117.0 <= componentg;
   do {
      componentg /= Math.max(parseInt(`${sportL}`) & 1, 3);
      if (iconsetting9) {
         break;
      }
   } while ((!basketballawayteamK.includes(`${componentg}`)) && iconsetting9);
   while (liveshare2 >= 4) {
      liveshare2 += parseInt(`${sportL}`) + 1;
      break;
   }
   let membership9 = nbatrophyy == String.fromCharCode(106,102,121,103,107,0);
   do {
      nbatrophyy = `${parseInt(`${componentg}`) / 2}`;
      if (membership9) {
         break;
      }
   } while (((nbatrophyy.length / 2) <= 1) && membership9);
    const offline = !(state.isConnected && ((state.isInternetReachable === true || state.isInternetReachable === null) ? true : false));
    setIsOffline(offline);

      weiboh = `${parseInt(`${sportL}`)}`;
   if (!weiboh.startsWith(`${sansG.size}`)) {
       let iconshare_: Array<any> = [131, 678, 588];
       let catagoryl = false;
       let embedv = String.fromCharCode(99,108,117,98,95,116,95,52,52,0);
       let imagenomoredataz = false;
       let gmail7 = String.fromCharCode(105,95,56,48,95,111,110,101,115,99,97,108,101,0);
      if (!imagenomoredataz) {
         embedv += "3";
      }
      while (5 > iconshare_.length && (iconshare_.length | 5) > 5) {
          let sportsK = 5;
          let shirtN = String.fromCharCode(117,95,49,56,95,122,105,112,112,101,100,0);
          let mbjscommon2: Map<any, any> = new Map([[String.fromCharCode(110,111,110,110,117,108,108,107,101,121,99,104,97,105,110,95,54,95,49,53,0),716], [String.fromCharCode(99,95,53,49,95,97,116,114,97,99,116,97,98,0),342]]);
          let elementsH = String.fromCharCode(98,114,111,119,110,95,102,95,49,52,0);
         catagoryl = imagenomoredataz;
         sportsK |= 2 - shirtN.length;
         shirtN += `${sportsK}`;
         mbjscommon2.set(shirtN, shirtN.length % 2);
         elementsH += `${(shirtN == String.fromCharCode(109,0) ? sportsK : shirtN.length)}`;
         break;
      }
         gmail7 += `${((imagenomoredataz ? 1 : 3))}`;
      let loadingx = 7258239 >= embedv.length;
      do {
         embedv += `${(1 >> (Math.min(2, Math.abs((catagoryl ? 3 : 2)))))}`;
         if (loadingx) {
            break;
         }
      } while ((3 <= embedv.length) && loadingx);
         gmail7 += `${embedv.length}`;
      let iconarrowrightorange3 = 8847695 >= iconshare_.length;
      do {
          let skipN = 4.0;
          let annerf = String.fromCharCode(104,95,56,49,95,118,105,101,119,101,114,115,0);
          let analytic5 = 4.0;
          let philippinesI = String.fromCharCode(99,95,50,49,95,116,111,117,99,104,101,115,0);
          let sourcec: Map<any, any> = new Map([[String.fromCharCode(98,117,102,95,116,95,55,53,0),217], [String.fromCharCode(102,105,108,116,101,114,102,95,107,95,55,0),4]]);
         iconshare_.push((2 / (Math.max(5, (catagoryl ? 5 : 3)))));
         skipN *= (String.fromCharCode(115,0) == philippinesI ? sourcec.size : philippinesI.length);
         annerf = `${parseInt(`${skipN}`) << (Math.min(1, Math.abs(1)))}`;
         analytic5 /= Math.max(4, parseFloat(`${3}`));
         sourcec = new Map([[`${sourcec.size}`, sourcec.size ^ philippinesI.length]]);
         if (iconarrowrightorange3) {
            break;
         }
      } while ((5 < (iconshare_.length / (Math.max(2, 6))) || iconshare_.length < 2) && iconarrowrightorange3);
         gmail7 = `${(2 + (catagoryl ? 1 : 4))}`;
      let foregroundp = catagoryl ? !catagoryl : catagoryl;
      do {
         catagoryl = iconshare_.length == 86 && !imagenomoredataz;
         if (foregroundp) {
            break;
         }
      } while ((embedv.endsWith(`${catagoryl}`)) && foregroundp);
          let commonW = String.fromCharCode(109,111,100,101,114,110,95,111,95,55,52,0);
         imagenomoredataz = embedv.length < 84;
         commonW += `${commonW.length}`;
      while (catagoryl) {
         embedv += `${((catagoryl ? 4 : 1) - gmail7.length)}`;
         break;
      }
          let disconnectedA: Map<any, any> = new Map([[String.fromCharCode(121,95,54,51,95,98,114,97,99,107,101,116,115,0),727], [String.fromCharCode(97,117,103,109,101,110,116,97,116,105,111,110,95,49,95,54,52,0),752]]);
          let description_4_i: Map<any, any> = new Map([[String.fromCharCode(117,110,101,109,112,116,121,95,114,95,51,51,0),338], [String.fromCharCode(99,97,114,114,121,111,117,116,95,112,95,54,53,0),522], [String.fromCharCode(115,116,114,105,110,103,101,110,99,111,100,101,95,111,95,50,57,0),650]]);
         embedv = `${((imagenomoredataz ? 4 : 3) & 3)}`;
         disconnectedA.set(`${description_4_i.size}`, disconnectedA.size);
         description_4_i.set(`${disconnectedA.size}`, 3 % (Math.max(5, disconnectedA.size)));
          let window_0sy = true;
          let nativeex4 = 1;
         imagenomoredataz = window_0sy && gmail7.length == 80;
         window_0sy = nativeex4 < nativeex4;
       let megaphoneA = false;
         gmail7 = `${((megaphoneA ? 1 : 1) & (imagenomoredataz ? 3 : 5))}`;
         embedv = `${iconshare_.length}`;
      sansG.set(`${componentg}`, (String.fromCharCode(88,0) == gmail7 ? gmail7.length : parseInt(`${componentg}`)));
   }
   if (4.89 > (1.34 * iconpipexpandK) && (componentg * 1.34) > 3.88) {
      iconpipexpandK += parseInt(`${sportL}`);
   }
   for (let t = 0; t < 1; t++) {
      componentg -= nbatrophyy.length % (Math.max(3, parseInt(`${lightP}`)));
   }
   while (2.97 > (iconpipexpandK - componentg)) {
       let configureD: Map<any, any> = new Map([[String.fromCharCode(97,95,56,50,95,112,108,97,110,97,114,0),240], [String.fromCharCode(119,95,50,55,95,109,115,122,104,0),587]]);
       let libavdevices = String.fromCharCode(97,95,52,52,95,107,108,97,121,116,110,0);
       let iconnotificationnewj = String.fromCharCode(121,95,51,54,95,112,114,101,102,97,99,101,0);
       let rooms = 4.0;
       let editB = String.fromCharCode(119,97,118,101,102,111,114,109,97,116,101,120,95,102,95,54,52,0);
       let information1: Map<any, any> = new Map([[String.fromCharCode(105,108,98,99,102,105,120,95,112,95,52,50,0),359], [String.fromCharCode(101,114,114,111,114,118,95,111,95,50,52,0),910], [String.fromCharCode(99,108,111,115,101,100,95,111,95,53,54,0),830]]);
          let kuaishou7 = String.fromCharCode(118,95,50,51,95,99,97,110,111,110,105,99,97,108,105,122,101,100,0);
          let predictionbanner5: Array<any> = [593, 612];
          let bottomy: Map<any, any> = new Map([[String.fromCharCode(104,95,51,49,95,97,98,115,111,108,117,116,101,0),310], [String.fromCharCode(103,101,116,112,101,101,114,97,100,100,114,95,102,95,51,54,0),980], [String.fromCharCode(100,101,99,111,100,101,109,118,95,108,95,54,53,0),208]]);
         information1.set(editB, 3);
         kuaishou7 += "3";
         predictionbanner5 = [1];
         bottomy = new Map([[`${bottomy.size}`, predictionbanner5.length | 3]]);
         iconnotificationnewj += `${parseInt(`${rooms}`)}`;
         libavdevices += "2";
      while ((information1.size & 5) == 3 || (parseFloat(`${information1.size}`) - rooms) == 4.64) {
          let rulesT = 2;
          let thailand6 = 4;
          let bootsplashn = 0.0;
          let type_aG = String.fromCharCode(105,95,55,57,95,98,117,102,102,101,114,113,117,101,117,101,0);
         information1 = new Map([[`${information1.size}`, 2 ^ information1.size]]);
         rulesT += 2;
         thailand6 %= Math.max(3, thailand6);
         bootsplashn += parseFloat(`${type_aG.length | 3}`);
         type_aG = `${rulesT ^ thailand6}`;
         break;
      }
      for (let b = 0; b < 1; b++) {
         configureD = new Map([[`${information1.size}`, information1.size]]);
      }
      let fastforwarde = iconnotificationnewj.length >= 9526442;
      do {
         iconnotificationnewj = `${editB.length ^ 1}`;
         if (fastforwarde) {
            break;
         }
      } while (fastforwarde && (3.76 == rooms));
      if (editB.length == iconnotificationnewj.length) {
         editB = `${parseInt(`${rooms}`) << (Math.min(Math.abs(information1.size), 2))}`;
      }
      for (let e = 0; e < 1; e++) {
          let sellC = 4;
         editB = `${parseInt(`${rooms}`) | editB.length}`;
         sellC ^= 2;
      }
         information1 = new Map([[`${configureD.size}`, 2 + libavdevices.length]]);
      for (let f = 0; f < 2; f++) {
          let hometeamfieldF: Array<any> = [String.fromCharCode(115,101,114,105,97,108,105,115,101,100,95,122,95,54,50,0), String.fromCharCode(110,111,98,111,100,121,95,57,95,55,49,0), String.fromCharCode(120,95,57,51,95,104,109,97,99,0)];
          let emojiheartA = 2.0;
          let fastz = 0;
          let policyg: Map<any, any> = new Map([[String.fromCharCode(119,95,54,55,95,98,121,116,101,115,116,114,105,110,103,0),false ], [String.fromCharCode(109,95,53,48,95,99,111,110,102,108,105,99,116,0),false ]]);
         rooms -= parseFloat(`${1}`);
         hometeamfieldF = [hometeamfieldF.length * policyg.size];
         emojiheartA *= 2;
         fastz += fastz;
         policyg = new Map([[`${fastz}`, 1]]);
      }
      if (rooms > 5.54) {
          let elementsy = 4.0;
          let c_title2 = 3;
          let dycreatorf = String.fromCharCode(120,95,49,57,95,100,105,115,99,111,118,101,114,0);
         iconnotificationnewj = `${configureD.size}`;
         elementsy *= parseFloat(`${dycreatorf.length}`);
         c_title2 *= parseInt(`${elementsy}`);
         dycreatorf += `${(String.fromCharCode(80,0) == dycreatorf ? parseInt(`${elementsy}`) : dycreatorf.length)}`;
      }
         iconnotificationnewj += `${iconnotificationnewj.length}`;
      let aboutS = 7964652.0 >= rooms;
      do {
         rooms /= Math.max(2, parseFloat(`${information1.size % (Math.max(1, 7))}`));
         if (aboutS) {
            break;
         }
      } while (aboutS && ((5 ^ editB.length) >= 2));
          let navigationM = String.fromCharCode(108,95,49,48,48,95,101,100,105,116,111,114,0);
          let componentregistryj = false;
         editB = "2";
         navigationM += `${navigationM.length % 3}`;
         componentregistryj = !componentregistryj && navigationM.length < 67;
      componentg /= Math.max(4, editB.length);
      break;
   }
    if (!offline) {

       let predictionbuttonf = 0;
       let rightK = String.fromCharCode(118,95,50,49,95,119,101,108,115,100,101,99,100,101,109,111,0);
       let completeX = String.fromCharCode(121,95,49,54,95,110,105,108,0);
       let libfbh = String.fromCharCode(115,101,115,115,105,111,110,95,49,95,54,56,0);
         libfbh = `${rightK.length}`;
      if (rightK.length < 1) {
         rightK = `${libfbh.length}`;
      }
         rightK += `${1 * rightK.length}`;
          let indexZ = String.fromCharCode(115,121,115,99,116,108,95,121,95,55,52,0);
          let mapbuffere = true;
          let teamdetailsbg6 = false;
         completeX += "3";
         indexZ += `${((mapbuffere ? 2 : 3))}`;
         mapbuffere = (((!mapbuffere ? 77 : indexZ.length) / (Math.max(indexZ.length, 7))) < 77);
         teamdetailsbg6 = indexZ.length >= 8 || !teamdetailsbg6;
      for (let r = 0; r < 2; r++) {
         rightK = `${libfbh.length >> (Math.min(Math.abs(3), 4))}`;
      }
      if (3 > (predictionbuttonf & 4)) {
         predictionbuttonf >>= Math.min(4, completeX.length);
      }
       let forward2 = true;
       let cleard = true;
          let template_b29 = 5.0;
          let chartN = String.fromCharCode(102,111,114,103,111,116,116,101,110,95,52,95,53,48,0);
         forward2 = libfbh.length > 77;
         template_b29 *= parseInt(`${template_b29}`) / (Math.max(chartN.length, 9));
         chartN = `${chartN.length % (Math.max(6, parseInt(`${template_b29}`)))}`;
      libavcodecg -= parseInt(`${sportL}`) / 2;
      sansG = new Map([[basketballawayteamK, 3]]);
      weiboh = `${parseInt(`${iconpipexpandK}`)}`;
      weiboh += `${weiboh.length}`;
      sportL -= parseFloat(`${parseInt(`${lightP}`) | 1}`);
      handleRefresh(navId);
    }
  };
  const handleShowLoading = async () => {
       let mbbidk = false;
    let chartE = String.fromCharCode(119,95,57,55,95,116,97,103,0);
    let pingL = String.fromCharCode(97,117,116,111,112,108,97,121,105,110,103,95,109,95,54,57,0);
    let forwardO = String.fromCharCode(116,95,54,54,95,115,97,109,112,108,101,114,0);
    let bootA = 3;
    let leftl = 0.0;
    let shirtD = false;
    let chinay: Map<any, any> = new Map([[String.fromCharCode(97,108,108,111,99,97,116,101,100,95,110,95,49,55,0),417], [String.fromCharCode(114,111,117,116,101,114,95,107,95,49,49,0),397]]);
    let homeactiveF = String.fromCharCode(97,117,116,111,99,111,109,109,105,116,95,122,95,52,49,0);
    let fullscreenmax_ = false;
    let awayv = 1.0;
    let google7 = String.fromCharCode(114,95,56,49,95,116,114,101,102,0);
    let iconpipexpanda = 2.0;
    let libavfiltere = 1;
    let pagination_ = 2;
    let scorepopsoundK = false;
    let predictiondefaultq = 4;
      leftl /= Math.max(parseFloat(`${bootA}`), 2);
   while (!forwardO.startsWith(pingL)) {
      pingL = `${pingL.length}`;
      break;
   }
   for (let g = 0; g < 2; g++) {
      awayv *= (parseFloat(`${parseInt(`${awayv}`) & (mbbidk ? 2 : 2)}`));
   }
   for (let r = 0; r < 1; r++) {
       let specz: Map<any, any> = new Map([[String.fromCharCode(103,95,53,56,95,117,110,112,117,98,108,105,115,104,0),739], [String.fromCharCode(97,115,98,100,95,50,95,55,49,0),558]]);
       let flyerU = 3.0;
       let privilegeE = 3.0;
       let armvam = 1.0;
      for (let r = 0; r < 2; r++) {
         flyerU += parseFloat(`${parseInt(`${privilegeE}`)}`);
      }
         flyerU /= Math.max(1, parseFloat(`${2 * parseInt(`${flyerU}`)}`));
         armvam -= parseInt(`${flyerU}`);
      for (let v = 0; v < 1; v++) {
          let activea = String.fromCharCode(112,101,114,112,105,120,101,108,95,119,95,53,54,0);
         privilegeE *= parseFloat(`${1 * parseInt(`${flyerU}`)}`);
         activea += `${activea.length}`;
      }
          let iconschedule8 = String.fromCharCode(112,114,101,112,114,111,103,114,97,109,109,101,100,95,49,95,52,0);
         privilegeE /= Math.max(parseFloat(`${parseInt(`${armvam}`)}`), 4);
         iconschedule8 += `${iconschedule8.length}`;
         specz = new Map([[`${flyerU}`, 3 + parseInt(`${privilegeE}`)]]);
         flyerU -= parseFloat(`${3}`);
         flyerU /= Math.max(5, parseFloat(`${parseInt(`${armvam}`)}`));
         specz = new Map([[`${flyerU}`, parseInt(`${armvam}`)]]);
      while (specz.size > parseInt(`${armvam}`)) {
         armvam -= specz.size % 1;
         break;
      }
         flyerU -= parseFloat(`${3}`);
      for (let c = 0; c < 2; c++) {
         armvam += parseInt(`${privilegeE}`) - 2;
      }
      fullscreenmax_ = flyerU < 63.8;
   }
       let klevinq = String.fromCharCode(97,95,54,56,95,115,101,108,0);
       let gradleD: Array<any> = [483, 616, 911];
       let info2 = String.fromCharCode(102,95,49,50,95,116,114,97,99,107,0);
      if (4 < (info2.length << (Math.min(Math.abs(2), 2))) || (2 << (Math.min(1, gradleD.length))) < 4) {
          let largeU: Map<any, any> = new Map([[String.fromCharCode(109,97,121,98,101,95,100,95,51,52,0),false ], [String.fromCharCode(100,95,56,52,95,101,120,104,97,117,115,116,101,100,0),false ]]);
          let audienceY = String.fromCharCode(103,95,56,49,95,112,108,117,103,105,110,0);
         info2 = `${info2.length - audienceY.length}`;
         largeU = new Map([[`${largeU.size}`, 3]]);
         audienceY += `${largeU.size}`;
      }
      while (!info2.endsWith(`${gradleD.length}`)) {
         gradleD = [info2.length | 2];
         break;
      }
      for (let a = 0; a < 2; a++) {
         gradleD = [(klevinq == String.fromCharCode(120,0) ? gradleD.length : klevinq.length)];
      }
         gradleD.push((String.fromCharCode(69,0) == info2 ? info2.length : gradleD.length));
       let loginG: Map<any, any> = new Map([[String.fromCharCode(101,95,53,95,97,117,116,104,101,110,116,105,99,97,116,101,0),String.fromCharCode(106,95,56,49,95,116,111,116,97,108,115,0)], [String.fromCharCode(104,95,49,53,95,118,105,100,101,111,116,111,111,108,98,111,120,0),String.fromCharCode(97,100,103,114,111,117,112,95,113,95,53,49,0)]]);
       let textinputr: Map<any, any> = new Map([[String.fromCharCode(100,101,110,105,101,100,95,99,95,51,51,0),873], [String.fromCharCode(97,95,50,49,95,109,105,110,105,109,97,108,108,121,0),69], [String.fromCharCode(100,101,102,105,110,101,115,95,56,95,49,56,0),25]]);
      if (4 < (info2.length << (Math.min(3, gradleD.length))) && 2 < (gradleD.length << (Math.min(Math.abs(4), 3)))) {
          let holderQ = 4;
          let bridge2 = String.fromCharCode(101,110,99,97,112,115,117,108,97,116,101,100,95,111,95,49,51,0);
          let pressure4 = false;
         gradleD.push(loginG.size & 2);
         holderQ |= (holderQ / (Math.max(3, (pressure4 ? 1 : 1))));
         bridge2 = `${((pressure4 ? 2 : 3) - holderQ)}`;
      }
         loginG = new Map([[klevinq, (String.fromCharCode(54,0) == info2 ? info2.length : klevinq.length)]]);
         info2 += `${1 * loginG.size}`;
         loginG.set(`${gradleD.length}`, textinputr.size / (Math.max(gradleD.length, 5)));
      chinay = new Map([[homeactiveF, 2]]);
   let right4 = fullscreenmax_ ? !fullscreenmax_ : fullscreenmax_;
   do {
      fullscreenmax_ = pingL.length > chinay.size;
      if (right4) {
         break;
      }
   } while (right4 && (homeactiveF.length > 1 && fullscreenmax_));
   while ((leftl + parseFloat(`${forwardO.length}`)) >= 2.17 || 4 >= (5 + forwardO.length)) {
      forwardO += `${google7.length}`;
      break;
   }
      homeactiveF += `${pingL.length << (Math.min(2, Math.abs(parseInt(`${leftl}`))))}`;
      homeactiveF += `${((fullscreenmax_ ? 5 : 4) ^ (mbbidk ? 2 : 3))}`;
   let styleh = fullscreenmax_ ? !fullscreenmax_ : fullscreenmax_;
   do {
      fullscreenmax_ = chartE.includes(`${mbbidk}`);
      if (styleh) {
         break;
      }
   } while (((2 * bootA) >= 1 || 2 >= bootA) && styleh);
   if (1.3 < (parseFloat(`${bootA}`) * awayv) && 3 < (bootA | 2)) {
       let libswresample5 = String.fromCharCode(98,95,55,56,95,104,114,101,97,100,0);
       let dropdownR = String.fromCharCode(115,116,97,116,105,99,95,57,95,55,0);
       let progressH = 0;
       let adult7 = String.fromCharCode(101,95,53,57,95,114,101,97,108,116,101,120,116,0);
       let libreactnativeblobA: Map<any, any> = new Map([[String.fromCharCode(115,104,111,114,116,101,114,95,102,95,48,0),571], [String.fromCharCode(102,119,114,105,116,101,95,97,95,52,0),541], [String.fromCharCode(118,95,56,50,95,99,104,101,99,107,115,117,109,0),264]]);
         dropdownR = `${1 - dropdownR.length}`;
          let iconorientationk = 3;
         progressH %= Math.max(2, adult7.length);
         iconorientationk &= 2;
      while ((adult7.length - progressH) >= 4) {
         progressH *= 1;
         break;
      }
          let leaguedetailsbgz: Map<any, any> = new Map([[String.fromCharCode(99,111,110,102,105,100,101,110,116,105,97,108,95,119,95,52,0),226], [String.fromCharCode(114,110,103,95,97,95,56,50,0),636], [String.fromCharCode(102,95,49,50,95,108,101,114,112,114,103,98,0),186]]);
         progressH -= libreactnativeblobA.size * 2;
         leaguedetailsbgz = new Map([[`${leaguedetailsbgz.size}`, leaguedetailsbgz.size & 2]]);
       let n_titlet = true;
       let halffieldimageK = false;
      while (4 > dropdownR.length || !halffieldimageK) {
         dropdownR = `${adult7.length * libswresample5.length}`;
         break;
      }
      let giftbuttonO = String.fromCharCode(99,122,56,51,112,104,0) == dropdownR;
      do {
          let awayteamfieldS: Map<any, any> = new Map([[String.fromCharCode(116,95,48,95,100,101,99,111,109,112,114,101,115,115,105,111,110,0),330], [String.fromCharCode(119,95,53,55,95,109,101,109,110,114,0),777]]);
         dropdownR += "1";
         awayteamfieldS.set(`${awayteamfieldS.size}`, 1);
         if (giftbuttonO) {
            break;
         }
      } while (((dropdownR.length + 1) > 3 || 3 > (1 + dropdownR.length)) && giftbuttonO);
      if ((3 + progressH) > 4 && 4 > (3 + progressH)) {
         adult7 += "1";
      }
          let valuesl = String.fromCharCode(112,112,102,108,97,103,115,95,120,95,53,48,0);
          let iconarrowrightr = false;
         libreactnativeblobA = new Map([[libswresample5, (libswresample5 == String.fromCharCode(50,0) ? libswresample5.length : (iconarrowrightr ? 4 : 1))]]);
         valuesl = `${valuesl.length}`;
         iconarrowrightr = (valuesl.length / (Math.max(valuesl.length, 2))) <= 32;
      for (let c = 0; c < 3; c++) {
          let huawei5 = true;
          let foregroundG = 5.0;
         halffieldimageK = dropdownR == libswresample5;
         huawei5 = !huawei5;
         foregroundG *= (parseFloat(`${(huawei5 ? 4 : 5) * parseInt(`${foregroundG}`)}`));
      }
      let default_9w = halffieldimageK ? !halffieldimageK : halffieldimageK;
      do {
          let iconsharefriends1 = 1.0;
          let runtimeschedulerE = String.fromCharCode(107,95,49,95,100,116,100,102,0);
         halffieldimageK = runtimeschedulerE == libswresample5;
         iconsharefriends1 -= parseFloat(`${2}`);
         runtimeschedulerE += "1";
         if (default_9w) {
            break;
         }
      } while ((halffieldimageK) && default_9w);
      bootA += (String.fromCharCode(49,0) == google7 ? libswresample5.length : google7.length);
   }
       let carouseld = String.fromCharCode(98,95,50,51,95,105,110,100,101,102,105,110,105,116,101,0);
      let hooksp = String.fromCharCode(48,55,103,109,54,50,109,106,104,0) == carouseld;
      do {
          let template_cj = 5;
         carouseld += `${1 | template_cj}`;
         if (hooksp) {
            break;
         }
      } while ((carouseld == carouseld) && hooksp);
         carouseld += "1";
         carouseld += `${carouseld.length ^ 2}`;
      shirtD = leftl <= 47.93;
       let videobufferloadingD = 1.0;
       let gesturesq: Array<any> = [964, 166];
       let update_buL = 3;
       let chinaz = 2;
         update_buL += parseInt(`${videobufferloadingD}`);
         gesturesq = [update_buL];
         gesturesq.push(1 * chinaz);
         videobufferloadingD *= parseFloat(`${parseInt(`${videobufferloadingD}`)}`);
      while (chinaz <= 4) {
         chinaz %= Math.max(3, 4);
         break;
      }
      leftl *= parseFloat(`${1 - chartE.length}`);
      leftl -= parseFloat(`${google7.length}`);
   for (let e = 0; e < 1; e++) {
       let reactnavigationg: Array<any> = [499, 486];
      if (reactnavigationg.length >= reactnavigationg.length) {
          let hookY: Map<any, any> = new Map([[String.fromCharCode(115,112,101,97,107,101,114,115,95,103,95,54,55,0),347], [String.fromCharCode(119,95,55,51,95,98,97,99,107,115,105,100,101,0),459]]);
         reactnavigationg.push(3 ^ reactnavigationg.length);
         hookY.set(`${hookY.size}`, hookY.size & hookY.size);
      }
         reactnavigationg.push(3);
       let iconuserb = 1.0;
       let updatesE = 1.0;
      chinay = new Map([[`${reactnavigationg.length}`, (2 << (Math.min(4, Math.abs((fullscreenmax_ ? 1 : 4)))))]]);
   }
      shirtD = bootA > parseInt(`${awayv}`);
       let klevinm = 2.0;
       let register_2kt = String.fromCharCode(101,120,99,108,117,100,101,115,95,110,95,55,57,0);
       let sideI = String.fromCharCode(121,95,54,49,95,114,116,109,112,112,107,116,0);
         register_2kt = `${register_2kt.length}`;
      if (!register_2kt.includes(`${sideI.length}`)) {
          let eact6: Map<any, any> = new Map([[String.fromCharCode(115,117,98,109,105,116,95,102,95,51,51,0),String.fromCharCode(97,95,49,95,97,101,118,97,108,0)], [String.fromCharCode(117,108,112,102,101,99,95,104,95,54,50,0),String.fromCharCode(112,97,105,114,105,110,103,95,110,95,54,54,0)]]);
          let footballfiledlayoutq = 5;
         sideI += `${sideI.length}`;
         eact6.set(`${footballfiledlayoutq}`, eact6.size);
         footballfiledlayoutq -= footballfiledlayoutq;
      }
          let subsw = 2.0;
         sideI = `${sideI.length}`;
         subsw -= parseFloat(`${1 + parseInt(`${subsw}`)}`);
          let sellmathbackgroundQ: Map<any, any> = new Map([[String.fromCharCode(108,105,109,105,116,101,114,95,53,95,50,57,0),String.fromCharCode(112,95,53,95,115,99,97,108,97,114,0)], [String.fromCharCode(104,95,50,49,95,115,97,102,101,116,121,0),String.fromCharCode(102,95,57,55,95,105,115,97,99,0)], [String.fromCharCode(110,111,97,108,108,111,99,95,54,95,54,57,0),String.fromCharCode(113,95,53,57,95,101,120,115,121,0)]]);
          let placeholderb = 2.0;
          let roomg: Array<any> = [841, 138];
         register_2kt += `${sideI.length ^ sellmathbackgroundQ.size}`;
         sellmathbackgroundQ.set(`${placeholderb}`, parseInt(`${placeholderb}`) | roomg.length);
         roomg.push(parseInt(`${placeholderb}`));
         klevinm /= Math.max(3, (parseFloat(`${String.fromCharCode(98,0) == sideI ? parseInt(`${klevinm}`) : sideI.length}`)));
      mbbidk = 79 >= (awayv * bootA);
      chinay.set(`${iconpipexpanda}`, parseInt(`${iconpipexpanda}`) % 3);
   while (homeactiveF.length > 2) {
      forwardO = `${forwardO.length}`;
      break;
   }
   let annerV = 7348858 <= pagination_;
   do {
       let chatroombackground_ = String.fromCharCode(103,95,51,50,95,109,97,110,97,103,101,109,101,110,116,0);
       let resultO = 3.0;
       let libsentryB = String.fromCharCode(114,101,97,108,105,102,121,95,53,95,50,56,0);
         resultO /= Math.max((libsentryB == String.fromCharCode(85,0) ? parseInt(`${resultO}`) : libsentryB.length), 3);
         resultO *= parseInt(`${resultO}`);
      for (let n = 0; n < 3; n++) {
         resultO /= Math.max(3, 1);
      }
       let leftc = 3;
       let iconrightoranger = 2;
         libsentryB += `${libsentryB.length / 3}`;
         libsentryB = `${3 / (Math.max(parseInt(`${resultO}`), 8))}`;
      while (2 > (leftc | chatroombackground_.length)) {
          let backiconF = 5.0;
          let libavcodecN: Map<any, any> = new Map([[String.fromCharCode(101,95,49,48,48,95,112,114,101,104,101,97,116,0),38], [String.fromCharCode(114,101,99,111,110,115,116,114,117,99,116,105,111,110,95,50,95,55,50,0),866], [String.fromCharCode(111,95,51,49,95,99,111,108,111,114,115,0),969]]);
         chatroombackground_ = `${leftc}`;
         backiconF /= Math.max(3, parseFloat(`${libavcodecN.size}`));
         libavcodecN = new Map([[`${libavcodecN.size}`, 3 & parseInt(`${backiconF}`)]]);
         break;
      }
      for (let g = 0; g < 2; g++) {
          let libreactnativeblob8: Map<any, any> = new Map([[String.fromCharCode(102,105,108,101,110,97,109,101,115,95,103,95,52,51,0),82], [String.fromCharCode(116,97,114,103,101,116,101,100,95,106,95,55,52,0),136]]);
          let telemetryv = 0.0;
         libsentryB = `${libsentryB.length}`;
         libreactnativeblob8 = new Map([[`${libreactnativeblob8.size}`, libreactnativeblob8.size]]);
         telemetryv /= Math.max(parseFloat(`${parseInt(`${telemetryv}`)}`), 1);
      }
         libsentryB += `${(chatroombackground_ == String.fromCharCode(90,0) ? iconrightoranger : chatroombackground_.length)}`;
      pagination_ <<= Math.min(1, Math.abs(libavfiltere));
      if (annerV) {
         break;
      }
   } while ((chinay.get(`${pagination_}`) == null) && annerV);
   let libfbjnih = forwardO.length >= 6441626;
   do {
      forwardO = `${chinay.size}`;
      if (libfbjnih) {
         break;
      }
   } while (libfbjnih && (fullscreenmax_ && forwardO.length < 5));
      shirtD = 92.78 >= leftl || fullscreenmax_;
   let clearT = 6425535 >= chinay.size;
   do {
      chinay.set(`${shirtD}`, 1);
      if (clearT) {
         break;
      }
   } while (clearT && (google7.length >= chinay.size));
      mbbidk = libavfiltere <= chinay.size;
   if (homeactiveF != String.fromCharCode(121,0)) {
      google7 += `${pagination_ % (Math.max(3, 5))}`;
   }
      chartE = "3";

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
       let statsO = String.fromCharCode(108,117,116,100,95,104,95,57,57,0);
    let iconwechatE: Array<any> = [String.fromCharCode(100,98,111,111,108,104,117,102,102,95,102,95,55,48,0), String.fromCharCode(99,95,50,95,115,116,114,105,114,101,112,108,97,99,101,0), String.fromCharCode(107,95,51,50,95,101,110,99,111,100,101,115,0)];
    let bellh = String.fromCharCode(99,95,51,56,95,100,118,100,115,117,98,0);
    let iconk = 5.0;
    let leaguedetailsbg5: Array<any> = [275, 611, 984];
    let bingX = String.fromCharCode(114,101,110,100,101,114,101,100,95,119,95,54,56,0);
    let binddatasX = true;
    let backicon0 = false;
    let j_managerC = String.fromCharCode(110,111,110,99,101,95,98,95,57,0);
    let iconnotificationneww = String.fromCharCode(111,95,53,50,95,97,114,101,118,101,114,115,101,0);
    let whitetickP = 3.0;
    let ballg: Map<any, any> = new Map([[String.fromCharCode(104,95,56,57,95,116,105,109,101,119,97,105,116,0),true ], [String.fromCharCode(108,104,115,95,113,95,57,54,0),false ]]);
    let register_te = true;
    let topicJ = String.fromCharCode(114,101,97,100,99,98,95,116,95,49,50,0);
   if (1 == iconnotificationneww.length) {
       let philippinesq: Array<any> = [599, 954, 792];
       let rulest = String.fromCharCode(109,117,116,117,97,108,95,51,95,50,50,0);
         philippinesq.push(rulest.length);
         rulest += `${philippinesq.length - 2}`;
      let iconarrowrightorangeW = rulest == String.fromCharCode(109,52,52,101,95,102,56,105,0);
      do {
          let refresh5 = String.fromCharCode(99,121,99,108,101,100,95,100,95,51,57,0);
         rulest = `${(String.fromCharCode(121,0) == rulest ? rulest.length : philippinesq.length)}`;
         refresh5 = `${refresh5.length % 1}`;
         if (iconarrowrightorangeW) {
            break;
         }
      } while ((!rulest.endsWith(`${philippinesq.length}`)) && iconarrowrightorangeW);
      if (1 > (3 * philippinesq.length)) {
         rulest += `${rulest.length / (Math.max(8, philippinesq.length))}`;
      }
         rulest = `${rulest.length}`;
      while (rulest.includes(`${philippinesq.length}`)) {
         rulest += `${(String.fromCharCode(78,0) == rulest ? philippinesq.length : rulest.length)}`;
         break;
      }
      iconnotificationneww = `${leaguedetailsbg5.length << (Math.min(Math.abs(3), 2))}`;
   }
   while (j_managerC.length > 2) {
      binddatasX = !statsO.includes(`${register_te}`);
      break;
   }
      binddatasX = (75 < ((!binddatasX ? ballg.size : 18) << (Math.min(Math.abs(ballg.size), 1))));
      iconk *= 1 << (Math.min(Math.abs(parseInt(`${iconk}`)), 3));

    if (showloading) {

   let anythinkm = 8880185 >= bellh.length;
   do {
      bellh = `${bingX.length}`;
      if (anythinkm) {
         break;
      }
   } while ((4 == (1 >> (Math.min(5, bellh.length))) && (iconk - 3.56) == 3.31) && anythinkm);
      statsO = "3";
   let iconclosewhiteV = backicon0 ? !backicon0 : backicon0;
   do {
      backicon0 = (parseInt(`${whitetickP}`) / (Math.max(statsO.length, 6))) <= 53;
      if (iconclosewhiteV) {
         break;
      }
   } while (iconclosewhiteV && (backicon0));
   let nativeexA = String.fromCharCode(100,117,97,52,0) == bingX;
   do {
       let exampleimageC = 0;
       let actionl = String.fromCharCode(116,95,55,51,95,114,101,102,112,108,97,110,101,0);
      while ((exampleimageC % 1) <= 1 || 4 <= (1 % (Math.max(2, exampleimageC)))) {
         actionl += `${(actionl == String.fromCharCode(54,0) ? exampleimageC : actionl.length)}`;
         break;
      }
         exampleimageC <<= Math.min(1, actionl.length);
         actionl = `${(String.fromCharCode(73,0) == actionl ? exampleimageC : actionl.length)}`;
      if (actionl.length <= 2) {
         actionl += `${actionl.length % 3}`;
      }
         actionl += `${(String.fromCharCode(118,0) == actionl ? actionl.length : exampleimageC)}`;
         exampleimageC %= Math.max(5, actionl.length / 1);
      bingX += `${1 | parseInt(`${whitetickP}`)}`;
      if (nativeexA) {
         break;
      }
   } while ((statsO != String.fromCharCode(80,0)) && nativeexA);
      setIsRefreshing(true);
    }
    try {

      whitetickP *= statsO.length / 2;
      whitetickP /= Math.max(ballg.size + j_managerC.length, 5);
      register_te = bellh.length < 99 && !binddatasX;
   while (5 > (4 - iconwechatE.length) && 2 > (iconwechatE.length - 4)) {
       let splashL = 2.0;
       let combinede = 5.0;
       let componentregistryD = 5;
       let halffieldimage8 = String.fromCharCode(105,95,56,48,95,113,116,112,97,108,101,116,116,101,0);
       let mintegrali: Map<any, any> = new Map([[String.fromCharCode(99,111,109,112,97,114,101,102,95,102,95,56,50,0),556], [String.fromCharCode(102,105,120,95,117,95,52,53,0),701]]);
         componentregistryD |= mintegrali.size;
       let mimoy = String.fromCharCode(112,105,110,110,101,114,95,48,95,57,48,0);
      let footballtrophyj = combinede >= 9696902.0;
      do {
         combinede -= parseFloat(`${3 + mimoy.length}`);
         if (footballtrophyj) {
            break;
         }
      } while (((mimoy.length ^ 2) < 2 || 2 < (parseInt(`${combinede}`) * mimoy.length)) && footballtrophyj);
      for (let o = 0; o < 2; o++) {
         combinede -= parseFloat(`${1}`);
      }
      while ((4 >> (Math.min(5, Math.abs(mintegrali.size)))) >= 4 || (4 >> (Math.min(2, Math.abs(mintegrali.size)))) >= 1) {
         mintegrali.set(mimoy, mimoy.length);
         break;
      }
         componentregistryD -= parseInt(`${combinede}`) + 2;
      for (let g = 0; g < 3; g++) {
         halffieldimage8 += `${1 | parseInt(`${combinede}`)}`;
      }
      for (let m = 0; m < 2; m++) {
         mimoy = `${parseInt(`${splashL}`) << (Math.min(3, Math.abs(componentregistryD)))}`;
      }
         mintegrali.set(`${combinede}`, 1);
          let privilegeb = 5;
         mimoy = `${halffieldimage8.length}`;
         privilegeb %= Math.max(3, 4);
      while (!mimoy.endsWith(`${combinede}`)) {
         combinede *= parseFloat(`${1 & mintegrali.size}`);
         break;
      }
      ballg.set(`${leaguedetailsbg5.length}`, 2);
      break;
   }
      await queryClient.resetQueries(["HomePage", id]);

   for (let k = 0; k < 1; k++) {
      iconk *= ((binddatasX ? 2 : 4) & 3);
   }
      iconwechatE.push(3 & bingX.length);
      bingX += `${iconwechatE.length}`;
   for (let c = 0; c < 3; c++) {
       let filled_ = true;
       let matchinactiveD = 2;
       let kickA: Map<any, any> = new Map([[String.fromCharCode(109,117,116,97,116,105,111,110,95,120,95,55,49,0),125], [String.fromCharCode(101,95,51,49,95,100,101,115,99,114,105,112,116,111,114,115,0),701], [String.fromCharCode(115,95,53,52,95,112,97,116,104,115,0),129]]);
       let actions8 = String.fromCharCode(105,110,112,117,116,95,115,95,50,52,0);
       let predictiondefaultJ = false;
         filled_ = ((actions8.length - (predictiondefaultJ ? actions8.length : 94)) > 94);
          let main_a7 = String.fromCharCode(109,95,49,95,107,108,97,121,116,110,0);
          let skipH = 0.0;
          let mimes = 3;
         filled_ = (((!predictiondefaultJ ? 70 : main_a7.length) % (Math.max(5, main_a7.length))) >= 70);
         skipH += 1;
         mimes |= 3 ^ parseInt(`${skipH}`);
      let telemetryZ = filled_ ? !filled_ : filled_;
      do {
         filled_ = actions8.length < 32 || predictiondefaultJ;
         if (telemetryZ) {
            break;
         }
      } while ((predictiondefaultJ) && telemetryZ);
         filled_ = matchinactiveD <= 91 || filled_;
          let o_viewz = String.fromCharCode(104,111,108,101,115,95,122,95,56,48,0);
          let favicon5 = true;
          let playercommonn = String.fromCharCode(103,95,51,52,95,104,97,110,100,115,104,97,107,101,0);
         filled_ = matchinactiveD < 61;
         o_viewz += "1";
         favicon5 = o_viewz.length <= 58;
         playercommonn += `${((favicon5 ? 2 : 5))}`;
      while (actions8.includes(`${matchinactiveD}`)) {
         actions8 += `${(actions8 == String.fromCharCode(66,0) ? kickA.size : actions8.length)}`;
         break;
      }
      while ((kickA.size * actions8.length) <= 3 || (kickA.size * actions8.length) <= 3) {
         actions8 = `${actions8.length}`;
         break;
      }
         kickA.set(`${filled_}`, actions8.length);
      while ((3 & kickA.size) == 4 && 3 == (kickA.size & matchinactiveD)) {
          let downz = 3.0;
          let iconschedule4 = 1.0;
          let emojihearts = 1.0;
         kickA.set(`${predictiondefaultJ}`, (3 % (Math.max(4, (predictiondefaultJ ? 1 : 4)))));
         downz -= 3 % (Math.max(10, parseInt(`${downz}`)));
         iconschedule4 -= parseFloat(`${2}`);
         emojihearts -= parseFloat(`${parseInt(`${iconschedule4}`)}`);
         break;
      }
         kickA = new Map([[`${kickA.size}`, (actions8 == String.fromCharCode(108,0) ? actions8.length : kickA.size)]]);
      for (let h = 0; h < 1; h++) {
          let matchesG = String.fromCharCode(97,116,114,97,99,112,95,108,95,56,48,0);
          let stationsq = String.fromCharCode(110,95,57,50,95,105,112,99,0);
          let libflippert = String.fromCharCode(115,101,103,102,101,97,116,117,114,101,115,95,101,95,49,48,0);
          let subin4 = String.fromCharCode(119,104,105,116,101,115,112,97,99,101,115,95,98,95,51,51,0);
          let strings2: Map<any, any> = new Map([[String.fromCharCode(114,116,99,100,95,103,95,54,0),390], [String.fromCharCode(120,95,49,55,0),419]]);
         filled_ = 41 == matchinactiveD;
         matchesG = `${subin4.length}`;
         stationsq = `${libflippert.length}`;
         libflippert += `${(String.fromCharCode(111,0) == subin4 ? subin4.length : strings2.size)}`;
         strings2 = new Map([[stationsq, stationsq.length]]);
      }
         kickA = new Map([[`${kickA.size}`, kickA.size]]);
         matchinactiveD <<= Math.min(4, Math.abs((String.fromCharCode(65,0) == actions8 ? actions8.length : (filled_ ? 2 : 5))));
      if (filled_) {
          let modulesl = String.fromCharCode(102,95,53,57,95,115,116,114,117,99,116,117,114,101,115,0);
          let foundu = 0;
          let dycreatorW = String.fromCharCode(100,101,99,111,100,101,114,105,110,105,116,95,120,95,54,53,0);
          let sharewhiteg = String.fromCharCode(116,120,104,97,115,104,95,52,95,55,51,0);
         predictiondefaultJ = 39 == matchinactiveD;
         modulesl = `${sharewhiteg.length}`;
         foundu %= Math.max(3, 3);
         dycreatorW += `${dycreatorW.length - foundu}`;
         sharewhiteg += `${dycreatorW.length + 2}`;
      }
       let profilepich = String.fromCharCode(101,95,50,54,95,98,97,114,107,0);
      iconnotificationneww += "2";
   }

      setIsRefreshing(false);

   if (!register_te && 2.37 <= (whitetickP + 1.29)) {
       let fullscreenmaxU = 5.0;
       let sinaE: Map<any, any> = new Map([[String.fromCharCode(110,95,55,56,95,102,114,97,110,100,111,109,0),992], [String.fromCharCode(109,97,112,112,101,114,95,111,95,56,56,0),415]]);
         fullscreenmaxU -= parseFloat(`${parseInt(`${fullscreenmaxU}`)}`);
          let libtobS: Map<any, any> = new Map([[String.fromCharCode(117,95,54,49,95,119,115,119,111,114,100,0),String.fromCharCode(106,95,49,95,116,114,97,110,115,105,116,0)], [String.fromCharCode(116,95,56,55,95,97,115,115,111,99,105,97,116,101,100,0),String.fromCharCode(100,115,112,114,95,98,95,49,48,0)]]);
         fullscreenmaxU /= Math.max(parseFloat(`${2 & libtobS.size}`), 3);
         sinaE.set(`${fullscreenmaxU}`, 2 + sinaE.size);
      while ((fullscreenmaxU * 1.35) <= 5.52 && (parseFloat(`${sinaE.size}`) * fullscreenmaxU) <= 1.35) {
         fullscreenmaxU -= parseFloat(`${parseInt(`${fullscreenmaxU}`) & sinaE.size}`);
         break;
      }
       let sigmobV = false;
       let signinupI = false;
         sigmobV = null == sinaE.get(`${sigmobV}`);
      whitetickP += ballg.size / 3;
   }
   for (let q = 0; q < 1; q++) {
      iconnotificationneww += `${iconwechatE.length * bingX.length}`;
   }
       let field8 = String.fromCharCode(118,95,52,54,95,112,114,111,114,101,115,100,97,116,97,0);
       let termsE = 2;
       let private_lgP: Array<any> = [String.fromCharCode(100,108,114,114,95,119,95,57,54,0), String.fromCharCode(111,95,50,95,115,105,100,120,0)];
         private_lgP.push(termsE % (Math.max(private_lgP.length, 6)));
          let holderC = 4;
          let streamingx = String.fromCharCode(100,105,97,108,111,103,95,52,95,51,51,0);
         field8 += `${field8.length % 1}`;
         holderC &= (streamingx == String.fromCharCode(84,0) ? streamingx.length : holderC);
      let templateprocessoru = String.fromCharCode(97,55,106,99,116,114,53,0) == field8;
      do {
         field8 += `${field8.length}`;
         if (templateprocessoru) {
            break;
         }
      } while (templateprocessoru && (termsE == field8.length));
         termsE <<= Math.min(Math.abs(3), 5);
      if (private_lgP.length > 1) {
         private_lgP = [private_lgP.length * field8.length];
      }
         field8 = `${2 >> (Math.min(4, Math.abs(termsE)))}`;
      while ((field8.length * 4) < 2) {
         termsE >>= Math.min(2, Math.abs(field8.length - 1));
         break;
      }
         field8 = `${2 * private_lgP.length}`;
      if ((3 >> (Math.min(1, private_lgP.length))) >= 3 || 4 >= (3 >> (Math.min(2, private_lgP.length)))) {
          let orangez = 5;
          let serviceB = 0.0;
          let codegenf: Array<any> = [755, 360];
         termsE <<= Math.min(Math.abs(parseInt(`${serviceB}`)), 3);
         orangez >>= Math.min(1, Math.abs(2 - codegenf.length));
         serviceB /= Math.max(parseFloat(`${3}`), 4);
         codegenf.push(1);
      }
      j_managerC = `${(j_managerC.length >> (Math.min(3, Math.abs((register_te ? 1 : 2)))))}`;
   while (!statsO.endsWith(`${bingX.length}`)) {
      statsO = `${statsO.length}`;
      break;
   }
      setNavId(id);

   for (let x = 0; x < 1; x++) {
       let nativeexJ: Map<any, any> = new Map([[String.fromCharCode(108,108,118,105,100,101,110,99,100,115,112,95,108,95,51,0),829], [String.fromCharCode(121,95,48,95,99,111,110,116,111,117,114,0),760]]);
       let gnewarchdefaults9 = 5.0;
       let penaltyshootF = 5.0;
      let hongkong3 = gnewarchdefaults9 >= 8846676.0;
      do {
          let teamdetailsbgF = String.fromCharCode(114,101,106,111,105,110,95,101,95,52,56,0);
          let q_images = String.fromCharCode(114,103,98,116,111,98,103,114,95,120,95,53,55,0);
          let gifgoal_ = 3.0;
          let chat7 = 2.0;
         gnewarchdefaults9 *= 1 - teamdetailsbgF.length;
         teamdetailsbgF += "1";
         q_images += `${parseInt(`${gifgoal_}`) & parseInt(`${chat7}`)}`;
         gifgoal_ -= (String.fromCharCode(122,0) == q_images ? q_images.length : parseInt(`${gifgoal_}`));
         chat7 *= parseInt(`${chat7}`);
         if (hongkong3) {
            break;
         }
      } while (hongkong3 && ((2.100 / (Math.max(7, penaltyshootF))) <= 1.28 || (penaltyshootF / (Math.max(gnewarchdefaults9, 8))) <= 2.100));
      if ((gnewarchdefaults9 / (Math.max(3.52, 2))) > 2.56) {
          let dicer = String.fromCharCode(104,95,55,48,95,108,101,97,102,0);
         nativeexJ = new Map([[dicer, parseInt(`${penaltyshootF}`) * 2]]);
      }
      if ((3.34 - gnewarchdefaults9) == 3.85 && 4.13 == (3.34 - gnewarchdefaults9)) {
          let iconqqM = String.fromCharCode(115,101,116,105,95,99,95,52,49,0);
         gnewarchdefaults9 /= Math.max(5, iconqqM.length >> (Math.min(Math.abs(1), 2)));
      }
      let hometeamfieldT = 9157696.0 <= gnewarchdefaults9;
      do {
          let strB = 1.0;
         gnewarchdefaults9 -= parseInt(`${strB}`) << (Math.min(Math.abs(2), 3));
         if (hometeamfieldT) {
            break;
         }
      } while ((Array.from(nativeexJ.values()).includes(gnewarchdefaults9)) && hometeamfieldT);
      while (nativeexJ.get(`${gnewarchdefaults9}`) == null) {
         gnewarchdefaults9 /= Math.max(4, parseInt(`${gnewarchdefaults9}`) / (Math.max(nativeexJ.size, 4)));
         break;
      }
         penaltyshootF += nativeexJ.size;
          let mutedm = false;
          let package_xh: Map<any, any> = new Map([[String.fromCharCode(102,111,114,109,97,116,116,105,110,103,95,107,95,57,0),false ], [String.fromCharCode(110,95,54,51,95,99,111,110,110,101,99,116,105,118,105,116,121,0),false ]]);
         gnewarchdefaults9 -= 1 | parseInt(`${gnewarchdefaults9}`);
         mutedm = (55 == ((!mutedm ? 55 : package_xh.size) << (Math.min(Math.abs(package_xh.size), 2))));
       let libjsiY = String.fromCharCode(99,104,101,99,107,105,110,103,95,101,95,53,56,0);
       let iconsubssuccessx = String.fromCharCode(111,95,53,57,95,111,110,121,120,99,0);
      while (nativeexJ.size >= libjsiY.length) {
          let libreactnativebloba = false;
         nativeexJ = new Map([[iconsubssuccessx, (iconsubssuccessx.length + (libreactnativebloba ? 3 : 4))]]);
         break;
      }
      bingX = `${iconnotificationneww.length}`;
   }
   for (let j = 0; j < 2; j++) {
      iconk /= Math.max(1, (statsO == String.fromCharCode(73,0) ? statsO.length : (binddatasX ? 1 : 1)));
   }
      bingX = `${((binddatasX ? 3 : 3) / 2)}`;
       let halffieldimagej = 2.0;
       let privatechatbgf = String.fromCharCode(114,95,53,52,95,102,111,108,108,111,119,101,114,115,0);
      for (let t = 0; t < 2; t++) {
          let hovero = String.fromCharCode(122,95,50,53,95,112,101,114,99,101,112,116,0);
         privatechatbgf = "1";
         hovero += "3";
      }
      for (let p = 0; p < 1; p++) {
         privatechatbgf += "1";
      }
      let matchinactivex = 6183691.0 <= halffieldimagej;
      do {
         halffieldimagej -= parseFloat(`${privatechatbgf.length}`);
         if (matchinactivex) {
            break;
         }
      } while ((1.44 <= (halffieldimagej * parseFloat(`${privatechatbgf.length}`))) && matchinactivex);
      for (let w = 0; w < 2; w++) {
         halffieldimagej += (parseFloat(`${privatechatbgf == String.fromCharCode(83,0) ? privatechatbgf.length : parseInt(`${halffieldimagej}`)}`));
      }
      let audiencel = privatechatbgf == String.fromCharCode(100,49,109,0);
      do {
          let blacklistf = 0;
          let graphics2 = String.fromCharCode(121,95,50,50,95,102,116,115,105,115,115,112,97,99,101,0);
          let gestureQ = 3.0;
         privatechatbgf += `${parseInt(`${halffieldimagej}`) - 1}`;
         blacklistf -= graphics2.length | 1;
         graphics2 = `${(graphics2 == String.fromCharCode(53,0) ? blacklistf : graphics2.length)}`;
         gestureQ *= 1;
         if (audiencel) {
            break;
         }
      } while ((2 < (1 - privatechatbgf.length)) && audiencel);
      for (let u = 0; u < 2; u++) {
         privatechatbgf = `${3 + parseInt(`${halffieldimagej}`)}`;
      }
      leaguedetailsbg5.push(parseInt(`${whitetickP}`));
      setShowHomeLoading(false);

      statsO = `${2 / (Math.max(1, leaguedetailsbg5.length))}`;
      j_managerC += `${(String.fromCharCode(84,0) == iconnotificationneww ? (backicon0 ? 1 : 5) : iconnotificationneww.length)}`;
   let launchy = 6454482 <= leaguedetailsbg5.length;
   do {
       let crossE: Array<any> = [String.fromCharCode(110,95,57,54,95,112,111,115,116,98,111,120,0), String.fromCharCode(117,115,101,114,105,110,116,101,114,102,97,99,101,95,100,95,53,50,0), String.fromCharCode(105,95,55,56,95,98,105,100,105,114,0)];
       let layouta = 4;
       let membershipH: Map<any, any> = new Map([[String.fromCharCode(115,101,103,117,101,95,100,95,48,0),String.fromCharCode(115,95,57,56,95,105,110,102,105,110,105,116,101,0)], [String.fromCharCode(110,112,111,105,110,116,115,95,108,95,54,57,0),String.fromCharCode(98,105,111,95,118,95,56,54,0)]]);
       let h_hashU = 3;
       let zhengpianz: Map<any, any> = new Map([[String.fromCharCode(99,100,120,108,95,102,95,55,48,0),String.fromCharCode(122,95,53,57,95,116,105,108,116,0)], [String.fromCharCode(100,101,99,111,114,114,101,108,97,116,101,95,48,95,53,56,0),String.fromCharCode(114,95,53,56,95,115,111,119,97,107,101,117,112,0)]]);
      for (let j = 0; j < 2; j++) {
         crossE.push(1);
      }
         zhengpianz = new Map([[`${zhengpianz.size}`, zhengpianz.size & h_hashU]]);
      let inactivea = 5556693 <= layouta;
      do {
         layouta *= 3;
         if (inactivea) {
            break;
         }
      } while (inactivea && (2 == (1 ^ crossE.length)));
         zhengpianz = new Map([[`${crossE.length}`, 3 ^ crossE.length]]);
      for (let t = 0; t < 2; t++) {
         zhengpianz.set(`${layouta}`, 3);
      }
      while ((h_hashU << (Math.min(Math.abs(5), 1))) >= 2 || 5 >= (membershipH.size << (Math.min(5, Math.abs(h_hashU))))) {
         h_hashU += membershipH.size;
         break;
      }
      while ((crossE.length >> (Math.min(3, Math.abs(layouta)))) < 5) {
          let next7 = String.fromCharCode(97,95,54,51,95,99,111,109,112,111,110,101,110,116,115,0);
         layouta >>= Math.min(Math.abs(layouta), 2);
         next7 = `${next7.length}`;
         break;
      }
         membershipH = new Map([[`${zhengpianz.size}`, 1 & h_hashU]]);
      let shootyesgoali = zhengpianz.size >= 6243921;
      do {
          let policye = 0.0;
          let frame_bxF = 4;
          let referrerb: Map<any, any> = new Map([[String.fromCharCode(115,105,110,95,106,95,53,51,0),String.fromCharCode(121,95,50,54,95,111,110,101,99,104,0)], [String.fromCharCode(121,95,51,50,95,104,111,116,111,0),String.fromCharCode(109,95,52,54,95,115,111,110,101,119,99,111,110,110,0)]]);
          let inactive_: Array<any> = [27, 683, 886];
         zhengpianz.set(`${frame_bxF}`, referrerb.size);
         policye *= parseInt(`${policye}`);
         frame_bxF %= Math.max(parseInt(`${policye}`) >> (Math.min(inactive_.length, 5)), 3);
         referrerb.set(`${policye}`, 1);
         inactive_ = [parseInt(`${policye}`) - 1];
         if (shootyesgoali) {
            break;
         }
      } while ((5 <= (1 ^ layouta) || 5 <= (layouta ^ 1)) && shootyesgoali);
      for (let p = 0; p < 2; p++) {
         h_hashU %= Math.max(5, layouta);
      }
         zhengpianz = new Map([[`${membershipH.size}`, 2 >> (Math.min(1, Math.abs(layouta)))]]);
          let qaagE = 5.0;
         crossE = [layouta & 2];
         qaagE -= 2 | parseInt(`${qaagE}`);
      while (4 == (layouta ^ 2)) {
          let iconorientationx = true;
          let viewerc: Array<any> = [10, 154, 990];
          let castH = String.fromCharCode(110,95,57,50,95,97,100,106,117,115,116,0);
         crossE.push(3);
         iconorientationx = ((viewerc.length - (iconorientationx ? viewerc.length : 41)) < 41);
         castH += `${(viewerc.length >> (Math.min(5, Math.abs((iconorientationx ? 1 : 2)))))}`;
         break;
      }
      let reminderQ = h_hashU <= 8560565;
      do {
         h_hashU += crossE.length - 2;
         if (reminderQ) {
            break;
         }
      } while (((h_hashU - 1) <= 4) && reminderQ);
      if ((crossE.length % 3) == 2 || 3 == (layouta % (Math.max(crossE.length, 8)))) {
          let transfere = 5.0;
          let umengj: Map<any, any> = new Map([[String.fromCharCode(109,117,108,116,105,99,97,115,116,101,100,95,98,95,53,55,0),486], [String.fromCharCode(115,117,98,112,105,120,101,108,95,114,95,57,49,0),581], [String.fromCharCode(107,95,54,56,95,97,108,115,111,0),392]]);
          let zhengpian9 = String.fromCharCode(99,111,110,118,101,114,115,97,116,105,111,110,95,110,95,57,50,0);
         layouta <<= Math.min(Math.abs(parseInt(`${transfere}`) / (Math.max(zhengpianz.size, 6))), 1);
         transfere *= parseFloat(`${umengj.size % (Math.max(1, 9))}`);
         umengj.set(`${zhengpian9}`, (zhengpian9 == String.fromCharCode(72,0) ? umengj.size : zhengpian9.length));
      }
      leaguedetailsbg5 = [ballg.size - 3];
      if (launchy) {
         break;
      }
   } while (launchy && (register_te));
       let footballfiledlayoutS = 5.0;
       let albumW: Array<any> = [108, 217];
      for (let x = 0; x < 2; x++) {
          let viewsh: Array<any> = [242, 864];
          let promotionS = 5.0;
          let smallorangemans = String.fromCharCode(115,95,54,54,95,99,111,112,105,101,100,0);
          let iconpipexpandX = String.fromCharCode(98,101,103,105,110,115,95,119,95,50,55,0);
          let inouttargetredj = String.fromCharCode(119,100,108,102,99,110,95,55,95,51,54,0);
         footballfiledlayoutS += parseInt(`${promotionS}`) | iconpipexpandX.length;
         viewsh.push(smallorangemans.length);
         promotionS /= Math.max(parseFloat(`${viewsh.length}`), 3);
         smallorangemans += `${viewsh.length & 2}`;
         iconpipexpandX = "2";
         inouttargetredj += `${(smallorangemans == String.fromCharCode(85,0) ? viewsh.length : smallorangemans.length)}`;
      }
         albumW.push(parseInt(`${footballfiledlayoutS}`) - 2);
      for (let c = 0; c < 1; c++) {
          let redscoreball7: Map<any, any> = new Map([[String.fromCharCode(104,95,50,51,95,101,118,101,110,116,0),493], [String.fromCharCode(102,95,49,53,95,99,97,109,112,97,105,103,110,0),625], [String.fromCharCode(105,108,108,117,109,105,110,97,116,105,111,110,95,55,95,53,53,0),757]]);
          let predictiond = String.fromCharCode(99,95,52,57,95,100,118,98,115,117,98,0);
          let borderlessC: Array<any> = [191, 583, 318];
          let index6 = 0;
         albumW = [index6];
         redscoreball7 = new Map([[`${redscoreball7.size}`, predictiond.length]]);
         predictiond = `${redscoreball7.size}`;
         borderlessC = [redscoreball7.size];
         index6 += predictiond.length;
      }
          let scheduler9 = 4.0;
          let carouselF = 2.0;
         footballfiledlayoutS += albumW.length - 1;
         scheduler9 += parseFloat(`${3}`);
         carouselF -= 2 >> (Math.min(Math.abs(parseInt(`${carouselF}`)), 5));
       let inouttargetred1 = 0;
       let relatedU = 2;
       let cancelm = 3.0;
      j_managerC += `${parseInt(`${footballfiledlayoutS}`) / 3}`;

      return;
    } catch (error) {

   if (4.62 >= whitetickP) {
       let iconnotificationnewK = String.fromCharCode(108,105,98,118,101,114,115,105,111,110,95,121,95,52,56,0);
       let anythinkg: Map<any, any> = new Map([[String.fromCharCode(101,120,97,99,116,95,112,95,50,56,0),String.fromCharCode(119,95,57,50,95,97,97,99,100,101,99,116,97,98,0)], [String.fromCharCode(111,112,101,114,97,116,105,111,110,95,110,95,50,0),String.fromCharCode(107,95,53,56,95,100,101,113,117,97,110,116,0)]]);
       let basketballplayerplaceholderY = String.fromCharCode(105,95,55,54,95,114,111,120,121,0);
         anythinkg.set(iconnotificationnewK, anythinkg.size ^ 2);
      while ((4 + anythinkg.size) < 1) {
          let pressurex: Map<any, any> = new Map([[String.fromCharCode(122,95,56,95,102,111,114,119,97,114,100,105,110,103,0),430], [String.fromCharCode(112,114,111,108,111,110,103,95,108,95,51,52,0),394], [String.fromCharCode(102,95,52,56,95,99,99,105,116,116,0),803]]);
         iconnotificationnewK += `${iconnotificationnewK.length + basketballplayerplaceholderY.length}`;
         pressurex.set(`${pressurex.size}`, pressurex.size << (Math.min(Math.abs(pressurex.size), 2)));
         break;
      }
         anythinkg.set(`${iconnotificationnewK}`, iconnotificationnewK.length);
          let networkR = 4;
         anythinkg.set(basketballplayerplaceholderY, anythinkg.size);
         networkR &= 2;
         iconnotificationnewK += `${basketballplayerplaceholderY.length}`;
      for (let n = 0; n < 2; n++) {
          let whiteM = String.fromCharCode(97,100,97,112,116,95,109,95,51,54,0);
          let descY = String.fromCharCode(110,95,56,49,95,115,101,116,0);
          let moonn = 4.0;
         iconnotificationnewK += `${whiteM.length}`;
         whiteM = `${(String.fromCharCode(89,0) == descY ? descY.length : parseInt(`${moonn}`))}`;
         moonn *= (parseFloat(`${descY == String.fromCharCode(65,0) ? descY.length : parseInt(`${moonn}`)}`));
      }
      while (3 == (anythinkg.size >> (Math.min(basketballplayerplaceholderY.length, 2))) && 3 == (anythinkg.size >> (Math.min(basketballplayerplaceholderY.length, 4)))) {
         anythinkg = new Map([[`${anythinkg.size}`, (iconnotificationnewK == String.fromCharCode(75,0) ? anythinkg.size : iconnotificationnewK.length)]]);
         break;
      }
         basketballplayerplaceholderY += `${basketballplayerplaceholderY.length << (Math.min(1, Math.abs(anythinkg.size)))}`;
      let livesharex = 8417807 >= iconnotificationnewK.length;
      do {
          let sider = true;
          let uploade = String.fromCharCode(108,95,55,51,95,102,108,97,116,0);
          let sellA = String.fromCharCode(108,111,111,107,117,112,95,121,95,56,55,0);
          let circle2: Array<any> = [String.fromCharCode(111,110,101,111,102,115,95,111,95,52,53,0), String.fromCharCode(102,95,52,56,95,97,112,112,101,110,100,99,104,97,114,0), String.fromCharCode(111,95,50,51,95,115,103,105,114,108,101,0)];
          let controlsC = 0;
         iconnotificationnewK += `${circle2.length ^ 2}`;
         sider = sellA.length <= 98;
         uploade += `${sellA.length / (Math.max(7, controlsC))}`;
         circle2.push(3 * sellA.length);
         controlsC <<= Math.min(Math.abs(1 * controlsC), 5);
         if (livesharex) {
            break;
         }
      } while (livesharex && (iconnotificationnewK.startsWith(`${anythinkg.size}`)));
      whitetickP *= iconnotificationnewK.length & 2;
   }
      iconwechatE.push(3);
   while (3 == (3 << (Math.min(5, Math.abs(ballg.size))))) {
      iconwechatE.push(2);
      break;
   }
      ballg = new Map([[`${ballg.size}`, parseInt(`${whitetickP}`) + ballg.size]]);
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    const handleTabPress = async () => {
       let backu = 3.0;
    let placementI = 5.0;
    let smallQ = 4.0;
    let defaultroombgM = String.fromCharCode(114,101,108,97,121,111,117,116,95,101,95,55,49,0);
    let icontransferclubQ = false;
    let foundr = String.fromCharCode(108,95,55,53,95,97,118,111,105,100,0);
    let inactive5 = 4;
    let homet = false;
    let mbjscommont = String.fromCharCode(111,95,52,95,112,101,101,114,0);
    let paginationd = String.fromCharCode(112,95,57,56,95,101,115,116,105,109,97,116,101,0);
    let iconarrowrightorangeg = String.fromCharCode(103,115,109,100,101,99,95,119,95,53,48,0);
   for (let o = 0; o < 2; o++) {
      smallQ /= Math.max(1, inactive5);
   }
   let logouserC = icontransferclubQ ? !icontransferclubQ : icontransferclubQ;
   do {
      icontransferclubQ = !icontransferclubQ;
      if (logouserC) {
         break;
      }
   } while (logouserC && (!foundr.endsWith(`${icontransferclubQ}`)));
   for (let b = 0; b < 1; b++) {
      smallQ += defaultroombgM.length;
   }

      if (isFocused && !isRefreshing) {

      icontransferclubQ = 43 >= inactive5;
       let googlel = 1.0;
       let homek: Array<any> = [811, 511];
      for (let n = 0; n < 3; n++) {
          let charte = String.fromCharCode(109,97,107,101,95,117,95,51,49,0);
          let clockm = String.fromCharCode(117,105,111,109,111,118,101,95,112,95,51,56,0);
         homek = [2];
         charte = `${(String.fromCharCode(90,0) == clockm ? charte.length : clockm.length)}`;
      }
      for (let g = 0; g < 1; g++) {
         homek.push(1);
      }
         homek.push(parseInt(`${googlel}`));
         googlel /= Math.max(1, parseFloat(`${parseInt(`${googlel}`)}`));
          let cornershootu = 0;
          let controlJ = String.fromCharCode(99,111,110,116,111,108,108,101,114,95,106,95,49,48,0);
          let iconcalendarG = String.fromCharCode(110,95,53,95,116,121,112,101,100,101,102,0);
         googlel -= (parseFloat(`${String.fromCharCode(117,0) == controlJ ? controlJ.length : cornershootu}`));
         cornershootu -= iconcalendarG.length;
      while (googlel <= 4.59) {
         homek = [parseInt(`${googlel}`)];
         break;
      }
      defaultroombgM = `${(2 >> (Math.min(2, Math.abs((icontransferclubQ ? 4 : 3)))))}`;
   if (!homet || defaultroombgM.length == 3) {
       let lineX = String.fromCharCode(101,95,56,50,95,97,102,102,105,110,101,0);
       let recommendationm: Array<any> = [944, 443];
      while (1 < (recommendationm.length | 4)) {
         recommendationm = [recommendationm.length];
         break;
      }
         recommendationm = [recommendationm.length / 3];
         recommendationm = [recommendationm.length];
         recommendationm = [lineX.length];
      for (let q = 0; q < 1; q++) {
          let rnewarchdefaultsc = String.fromCharCode(105,95,52,49,95,115,117,112,101,114,98,108,111,99,107,115,0);
          let libreactperfloggerjnih = String.fromCharCode(118,111,108,117,109,101,95,57,95,50,52,0);
          let circleQ = String.fromCharCode(97,115,107,95,50,95,57,56,0);
         lineX = `${1 % (Math.max(9, recommendationm.length))}`;
         rnewarchdefaultsc += "3";
         libreactperfloggerjnih = `${libreactperfloggerjnih.length % (Math.max(2, 8))}`;
         circleQ += `${libreactperfloggerjnih.length << (Math.min(4, circleQ.length))}`;
      }
       let yellowcirclebgS = 3.0;
       let sell1 = 3.0;
      defaultroombgM = `${2 & mbjscommont.length}`;
   }
        setIsRefreshing((prevIsRefreshing) => {

   while (4 == mbjscommont.length || 4 == foundr.length) {
       let main_bp = String.fromCharCode(101,110,113,117,101,117,101,95,56,95,54,49,0);
       let iconwatchnowU = String.fromCharCode(121,117,118,112,108,97,110,101,95,55,95,55,49,0);
       let save5 = String.fromCharCode(101,95,51,57,95,115,117,98,109,105,116,0);
       let gifgoalM = String.fromCharCode(99,111,110,116,114,97,99,116,95,122,95,57,51,0);
       let awayteamfieldO = 0.0;
          let halffieldimageG = 3.0;
         save5 = `${parseInt(`${awayteamfieldO}`)}`;
         halffieldimageG -= parseInt(`${halffieldimageG}`) >> (Math.min(3, Math.abs(3)));
      let settingsU = String.fromCharCode(114,115,52,107,0) == gifgoalM;
      do {
         gifgoalM = `${save5.length % 2}`;
         if (settingsU) {
            break;
         }
      } while (settingsU && ((1 / (Math.max(4, gifgoalM.length))) >= 2));
          let pusha = 4.0;
          let libhermess = String.fromCharCode(119,101,108,115,101,110,99,95,121,95,50,56,0);
          let playercommonI = true;
         save5 += `${((playercommonI ? 4 : 5) * save5.length)}`;
         pusha -= libhermess.length;
         libhermess = `${parseInt(`${pusha}`) >> (Math.min(Math.abs(1), 3))}`;
         playercommonI = !libhermess.endsWith(`${pusha}`);
      let phoneX = String.fromCharCode(119,110,51,55,116,113,97,107,48,0) == save5;
      do {
          let homeplayerO = String.fromCharCode(115,117,98,106,111,117,114,110,97,108,95,122,95,50,52,0);
          let signinupx = String.fromCharCode(100,98,108,112,95,104,95,56,50,0);
          let chatO = String.fromCharCode(112,95,56,49,95,102,114,97,109,101,112,111,111,108,0);
          let componenty = 1;
          let yingp = 4;
         save5 += `${signinupx.length * 2}`;
         homeplayerO += `${3 - chatO.length}`;
         signinupx = `${(homeplayerO == String.fromCharCode(73,0) ? componenty : homeplayerO.length)}`;
         chatO += `${componenty * 2}`;
         yingp *= yingp & 2;
         if (phoneX) {
            break;
         }
      } while ((iconwatchnowU == String.fromCharCode(117,0)) && phoneX);
      if (iconwatchnowU.endsWith(`${awayteamfieldO}`)) {
         iconwatchnowU = `${iconwatchnowU.length}`;
      }
          let viewerM = true;
          let description_u3 = 0.0;
          let suggestion1: Map<any, any> = new Map([[String.fromCharCode(102,95,56,49,95,110,111,114,109,97,108,0),521], [String.fromCharCode(108,95,57,51,95,114,97,112,105,100,0),529], [String.fromCharCode(101,116,104,114,101,97,100,95,51,95,53,51,0),149]]);
         save5 += "2";
         viewerM = 90 < suggestion1.size;
         description_u3 -= parseFloat(`${3}`);
         suggestion1 = new Map([[`${description_u3}`, ((viewerM ? 1 : 4) * parseInt(`${description_u3}`))]]);
         awayteamfieldO += parseFloat(`${save5.length % 3}`);
      for (let z = 0; z < 2; z++) {
          let libreanimatedx = 5.0;
          let headerP = 2;
          let airbnbstar1: Array<any> = [595, 756];
          let libcxxcomponentsi = String.fromCharCode(118,116,101,110,99,95,117,95,54,55,0);
         main_bp += "3";
         libreanimatedx -= parseFloat(`${headerP - parseInt(`${libreanimatedx}`)}`);
         headerP &= parseInt(`${libreanimatedx}`);
         airbnbstar1 = [headerP % (Math.max(2, 9))];
         libcxxcomponentsi = `${libcxxcomponentsi.length}`;
      }
         main_bp = `${1 % (Math.max(7, main_bp.length))}`;
         iconwatchnowU = `${save5.length ^ iconwatchnowU.length}`;
      let canvasl = 7159672.0 <= awayteamfieldO;
      do {
         awayteamfieldO += parseFloat(`${main_bp.length << (Math.min(Math.abs(3), 5))}`);
         if (canvasl) {
            break;
         }
      } while (canvasl && (5.75 >= (awayteamfieldO + parseFloat(`${main_bp.length}`)) || (main_bp.length << (Math.min(Math.abs(5), 2))) >= 5));
      while (parseInt(`${awayteamfieldO}`) > save5.length) {
         save5 += `${parseInt(`${awayteamfieldO}`) >> (Math.min(Math.abs(2), 5))}`;
         break;
      }
      if (!save5.includes(`${main_bp.length}`)) {
         main_bp = `${gifgoalM.length + 1}`;
      }
         gifgoalM += `${main_bp.length ^ parseInt(`${awayteamfieldO}`)}`;
       let homeiconS: Array<any> = [String.fromCharCode(102,95,54,51,95,114,116,99,119,101,98,0), String.fromCharCode(114,101,97,109,95,100,95,51,56,0), String.fromCharCode(109,95,57,95,100,105,115,112,108,97,99,101,109,101,110,116,0)];
       let const_2iK: Array<any> = [945, 731];
      mbjscommont = "1";
      break;
   }
       let libffmpegkitM = String.fromCharCode(102,95,53,57,95,97,99,113,117,97,110,116,0);
       let footballi = String.fromCharCode(109,111,118,116,101,120,116,115,117,98,95,101,95,55,57,0);
       let tickedu: Map<any, any> = new Map([[String.fromCharCode(117,112,100,97,116,97,98,108,101,95,97,95,50,51,0),95], [String.fromCharCode(118,111,114,98,105,115,95,53,95,54,57,0),515], [String.fromCharCode(120,95,50,55,95,117,110,99,114,111,112,112,101,100,0),534]]);
      while (footballi.length > 1) {
         footballi += "1";
         break;
      }
          let combinedB = String.fromCharCode(116,95,53,51,95,105,110,116,101,114,112,111,108,97,116,101,0);
          let buildF = 4.0;
          let telegramE = 3.0;
         footballi += `${(libffmpegkitM == String.fromCharCode(114,0) ? parseInt(`${buildF}`) : libffmpegkitM.length)}`;
         combinedB = "2";
         buildF -= combinedB.length - parseInt(`${telegramE}`);
         telegramE += 1 >> (Math.min(1, Math.abs(parseInt(`${telegramE}`))));
         libffmpegkitM += `${footballi.length}`;
          let transfer1 = true;
          let cancel0 = 1;
         libffmpegkitM += `${cancel0 - 1}`;
         transfer1 = !transfer1;
         cancel0 /= Math.max(2, (3 * (transfer1 ? 4 : 3)));
         libffmpegkitM += `${2 << (Math.min(4, Math.abs(tickedu.size)))}`;
      let listu = String.fromCharCode(57,110,117,122,50,101,106,111,54,0) == libffmpegkitM;
      do {
         libffmpegkitM = "3";
         if (listu) {
            break;
         }
      } while (listu && (!libffmpegkitM.includes(`${tickedu.size}`)));
      while (!libffmpegkitM.endsWith(`${tickedu.size}`)) {
         libffmpegkitM = `${2 ^ tickedu.size}`;
         break;
      }
       let iconwatchnowK: Array<any> = [354, 787, 446];
      for (let j = 0; j < 3; j++) {
         tickedu = new Map([[libffmpegkitM, 1 * footballi.length]]);
      }
      inactive5 *= defaultroombgM.length % 2;
   if (5 > foundr.length) {
      foundr += "1";
   }
          if (prevIsRefreshing) {

      homet = 93 == paginationd.length || mbjscommont == String.fromCharCode(106,0);
   for (let g = 0; g < 3; g++) {
      mbjscommont = `${((homet ? 4 : 2) >> (Math.min(Math.abs(2), 5)))}`;
   }
      paginationd = `${1 & parseInt(`${placementI}`)}`;
            return prevIsRefreshing; 
          } else {

       let zhengpianA = 4.0;
         zhengpianA /= Math.max(5, parseFloat(`${parseInt(`${zhengpianA}`)}`));
          let streamingx = 4.0;
         zhengpianA += parseFloat(`${parseInt(`${zhengpianA}`) >> (Math.min(Math.abs(parseInt(`${streamingx}`)), 4))}`);
       let iconviewergifZ = String.fromCharCode(116,105,110,116,101,100,95,117,95,49,51,0);
      inactive5 %= Math.max(5, 2 ^ parseInt(`${zhengpianA}`));
      defaultroombgM = `${parseInt(`${backu}`) & 1}`;
      homet = !foundr.startsWith(`${icontransferclubQ}`);
            return true; 
          }
        });

      mbjscommont += "2";
   let formT = String.fromCharCode(109,106,99,97,0) == foundr;
   do {
      foundr += "3";
      if (formT) {
         break;
      }
   } while ((1 > (parseInt(`${smallQ}`) - foundr.length) && 5.14 > (foundr.length - smallQ)) && formT);
       let filterz = 3.0;
       let righty = 1.0;
       let interstitialS = 1.0;
          let dataf: Map<any, any> = new Map([[String.fromCharCode(107,95,54,50,95,114,101,99,101,112,116,105,111,110,0),414], [String.fromCharCode(120,95,52,56,95,119,111,114,107,108,111,97,100,0),178], [String.fromCharCode(109,115,103,95,101,95,54,48,0),566]]);
         righty -= parseFloat(`${parseInt(`${interstitialS}`) - dataf.size}`);
         filterz /= Math.max(parseInt(`${righty}`), 4);
      while (righty <= filterz) {
         righty /= Math.max(parseFloat(`${parseInt(`${righty}`) >> (Math.min(1, Math.abs(1)))}`), 3);
         break;
      }
      let placementP = filterz >= 7102516.0;
      do {
         filterz *= 1 * parseInt(`${interstitialS}`);
         if (placementP) {
            break;
         }
      } while (((4.67 * filterz) < 2.72 || (4.67 * righty) < 1.82) && placementP);
          let statistics4: Array<any> = [143, 297, 851];
         righty += parseFloat(`${1}`);
         statistics4.push(statistics4.length);
      let libavformatr = righty >= 7274390.0;
      do {
         righty *= parseFloat(`${parseInt(`${interstitialS}`)}`);
         if (libavformatr) {
            break;
         }
      } while (libavformatr && (3.64 == (interstitialS / 5.57) && 2.4 == (righty + 5.57)));
          let minivodt = String.fromCharCode(110,111,99,111,108,115,101,116,95,102,95,49,53,0);
          let volumeD = 5.0;
          let giftr = String.fromCharCode(104,95,53,54,95,117,110,114,111,117,110,100,101,100,0);
         righty -= parseFloat(`${2 & giftr.length}`);
         minivodt += `${parseInt(`${volumeD}`) << (Math.min(Math.abs(2), 4))}`;
         volumeD *= (String.fromCharCode(82,0) == minivodt ? parseInt(`${volumeD}`) : minivodt.length);
         giftr += "1";
      while (2.42 < (filterz / (Math.max(2, righty))) && 2.42 < (filterz / (Math.max(5, righty)))) {
          let internet0 = String.fromCharCode(114,116,114,105,109,95,102,95,49,49,0);
          let inviteI = 4.0;
         filterz += (String.fromCharCode(76,0) == internet0 ? parseInt(`${filterz}`) : internet0.length);
         inviteI += 1 * parseInt(`${inviteI}`);
         break;
      }
          let canvaso = 5.0;
          let castingu: Array<any> = [358, 573, 76];
         interstitialS += parseFloat(`${parseInt(`${righty}`)}`);
         canvaso += castingu.length;
         castingu.push(parseInt(`${canvaso}`) / (Math.max(castingu.length, 3)));
      backu *= parseFloat(`${parseInt(`${backu}`)}`);
        await handleRefresh(navId, true);

   let mbnativeadvancedk = placementI <= 5553927.0;
   do {
      placementI *= 3 + inactive5;
      if (mbnativeadvancedk) {
         break;
      }
   } while (mbnativeadvancedk && ((1.28 / (Math.max(10, placementI))) < 5.52));
       let halffieldimageM: Array<any> = [146, 940, 510];
         halffieldimageM.push(1 & halffieldimageM.length);
         halffieldimageM = [halffieldimageM.length << (Math.min(2, halffieldimageM.length))];
       let gemfile2 = 1.0;
      placementI *= parseInt(`${backu}`) * 2;
      paginationd = `${parseInt(`${placementI}`)}`;
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
      item: UseQueryResult<mayi_TraminiManifest>;
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
      mayi_push.homeTabViewsAnalytics({
        tab_id: navOptions[0].id.toString(),
        tab_name: navOptions[0].name,
      });
    }
  }, [navOptions])

  useEffect(() => {
    if (navOptions !== undefined && navOptions.length > 0) {
      mayi_push.homeTabViewsAnalytics({
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

      
      mayi_push.homeTabClicksAnalytics({
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
                  source={require("@static/images/robotoNetwork.gif")}
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
                backgroundColor: "#ffffff",
              }}
            >
              <FastImage
                source={require("@static/images/backgroundTwitterNode.gif")}
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

export default memo(mayi_awayteamfield);

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
