import React, { useCallback, useEffect, useState, memo, useContext } from "react";
import { Dimensions, Platform, StyleSheet, View } from "react-native";
import ScreenContainer from "../components/container/yys_matches";
import { useFocusEffect, useTheme } from "@react-navigation/native";
import { useQuery, useQueries, UseQueryResult } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import {
  yysMemberDefaultlogo,
} from "@type";
import {
  BottomTabScreenProps,
  useBottomTabBarHeight,
} from "@react-navigation/bottom-tabs";
import {
  ANDROID_HOME_PAGE_POP_UP_ADS,
  API_DOMAIN,
  IOS_HOME_PAGE_POP_UP_ADS,
} from "@utility";
import CatagoryHome from "../components/container/yys_background";
import RecommendationHome from "../components/container/yys_more_phone";
import HomeHeader from "../components/header/yys_config_penaltygoal_header";
import FastImage from "../components/common/yys_alert_backwhite";
import { useIsFocused } from "@react-navigation/native";
import NoConnection from "./../components/common/yys_librrc_zhengpian";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";
import { useAppSelector, useAppDispatch, useSelector } from "@hooks";
import { yysIconclosewhiteBaiduads } from "@redux";
import { yysDownloadingCombined } from "@redux";
import HomeNav from "../components/tabNavigate/yys_iconwechat_profileactive_view";

import {
  ATRNSDK,
  ATInterstitialRNSDK,
  ATBannerRNSDK,
} from "./../../../AnyThinkAds/yys_redirect_megaphone";
import { AdsBannerContext } from "../../contexts/yys_libreactperfloggerjni_defaultroombg";

import yys_giftbutton_footballtrophy from "../../../Umeng/yys_giftbutton_footballtrophy";
import { yysCollection } from "@api";
import DeviceInfo from "react-native-device-info";
import { yysIconplaySuggestion } from "@redux";
import { yysIconstar } from "@models";

function yys_calendar({ navigation }: BottomTabScreenProps<any>) {
  const isFocused = useIsFocused();
  const { colors, spacing } = useTheme();
  const [navId, setNavId] = useState(0);
  const queryClient = useQueryClient();
  const [isOffline, setIsOffline] = useState(false);
  const [showHomeLoading, setShowHomeLoading] = useState(true);
  const settingsReducer: yysDownloadingCombined = useAppSelector(
    ({ settingsReducer }: yysIconclosewhiteBaiduads) => settingsReducer
  );
  const userState = useSelector<yysIconplaySuggestion>('userReducer');
  const isVip = yysIconstar.isVip(userState.user);
  const bottomTabHeight = useBottomTabBarHeight();

  const { data: navOptions, refetch } = useQuery({
    queryKey: ["HomePageNavOptions"],
    queryFn: () => yysCollection.getHomeNav(),
  });

  const fetchData = useCallback((id: number) => yysCollection.getHomePages(id, isVip), []);

  const data = useQueries({
    queries: navOptions
      ? navOptions?.map((x: any) => ({
        queryKey: ["HomePage", x.id],
        queryFn: () => fetchData(x.id),
      }))
      : [],
  });

  const checkConnection = async () => {
       let libimagepipelineD = 4.0;
    let reactnavigation7: Map<any, any> = new Map([[String.fromCharCode(99,95,52,52,95,108,105,98,101,118,101,110,116,0),80], [String.fromCharCode(97,95,53,56,95,109,115,114,108,101,0),56], [String.fromCharCode(117,95,55,53,95,110,105,100,99,98,98,0),502]]);
    let chinam: Map<any, any> = new Map([[String.fromCharCode(105,95,49,52,95,97,99,99,114,117,101,100,0),814], [String.fromCharCode(106,95,49,50,95,102,105,120,117,112,0),808]]);
    let statisticsactiveU = String.fromCharCode(108,101,110,0);
    let anytime0: Map<any, any> = new Map([[String.fromCharCode(97,116,111,109,95,115,95,56,53,0),884], [String.fromCharCode(106,97,99,111,98,105,97,110,0),92], [String.fromCharCode(112,114,101,108,105,109,105,110,97,114,121,95,49,95,57,55,0),362]]);
    let animationsj = String.fromCharCode(100,95,51,57,95,114,111,117,116,101,114,0);
    let iconrefreshD = String.fromCharCode(115,97,108,116,101,100,95,115,95,54,52,0);
    let completeN = true;
    let modelsd: Array<any> = [162, 276, 855];
    let runtimee: Map<any, any> = new Map([[String.fromCharCode(112,111,114,116,95,102,95,55,57,0),522], [String.fromCharCode(98,114,101,97,107,115,95,97,95,52,49,0),85]]);
    let scheduleA: Array<any> = [90, 533];
   let thumbnailF = 5461480 <= reactnavigation7.size;
   do {
       let subbasketballplayerX: Map<any, any> = new Map([[String.fromCharCode(105,99,109,112,0),451], [String.fromCharCode(98,102,115,116,109,0),286]]);
       let const_q6e = String.fromCharCode(108,111,97,100,95,116,95,50,55,0);
      let videovarO = 7747950 <= const_q6e.length;
      do {
         const_q6e = `${subbasketballplayerX.size}`;
         if (videovarO) {
            break;
         }
      } while ((4 <= (subbasketballplayerX.size + const_q6e.length) && (subbasketballplayerX.size + 4) <= 3) && videovarO);
       let unimplementedviewZ = 1.0;
      if ((subbasketballplayerX.size & 4) <= 4 || 1 <= (const_q6e.length & 4)) {
         subbasketballplayerX = new Map([[const_q6e, (const_q6e == String.fromCharCode(54,0) ? const_q6e.length : parseInt(`${unimplementedviewZ}`))]]);
      }
          let huaweiY: Map<any, any> = new Map([[String.fromCharCode(102,111,117,114,120,109,95,102,95,55,54,0),String.fromCharCode(99,97,112,105,0)], [String.fromCharCode(106,95,55,52,0),String.fromCharCode(105,100,101,110,116,105,102,105,99,97,116,105,111,110,0)], [String.fromCharCode(106,95,52,95,104,101,105,103,104,116,115,0),String.fromCharCode(115,108,111,116,0)]]);
          let drago = 0;
         subbasketballplayerX.set(`${drago}`, 3);
         huaweiY.set(`${huaweiY.size}`, huaweiY.size);
         drago -= huaweiY.size + 1;
          let updatesU = 1.0;
         unimplementedviewZ *= (parseFloat(`${const_q6e == String.fromCharCode(118,0) ? const_q6e.length : parseInt(`${unimplementedviewZ}`)}`));
         updatesU *= parseFloat(`${3}`);
      while (const_q6e.includes(`${unimplementedviewZ}`)) {
         const_q6e = `${subbasketballplayerX.size - const_q6e.length}`;
         break;
      }
      reactnavigation7 = new Map([[`${chinam.size}`, chinam.size]]);
      if (thumbnailF) {
         break;
      }
   } while ((1 > (1 + chinam.size)) && thumbnailF);
       let smallorangemanC = 5.0;
       let eventP = 3.0;
       let ballT = 1.0;
         eventP -= parseFloat(`${parseInt(`${smallorangemanC}`) ^ parseInt(`${eventP}`)}`);
         ballT *= parseFloat(`${parseInt(`${smallorangemanC}`) / (Math.max(5, parseInt(`${eventP}`)))}`);
      libimagepipelineD -= (parseFloat(`${(completeN ? 3 : 2) - 1}`));
      chinam.set(`${completeN}`, modelsd.length);
       let project9 = 5.0;
      while (2.24 == project9) {
          let fastforward2 = 0;
         project9 += parseFloat(`${3}`);
         fastforward2 >>= Math.min(1, Math.abs(fastforward2));
         break;
      }
          let successv = String.fromCharCode(103,95,57,48,95,110,111,116,101,0);
          let moduleS = 3;
         project9 /= Math.max(parseFloat(`${successv.length}`), 5);
         successv += `${moduleS << (Math.min(4, Math.abs(moduleS)))}`;
         project9 += parseFloat(`${parseInt(`${project9}`) * 2}`);
      iconrefreshD = `${1 ^ parseInt(`${project9}`)}`;
   if (5 > (chinam.size ^ statisticsactiveU.length)) {
       let smallsoundK: Array<any> = [String.fromCharCode(106,105,103,103,108,101,95,51,95,50,54,0), String.fromCharCode(115,116,114,95,117,95,55,49,0), String.fromCharCode(102,108,97,99,95,115,95,56,50,0)];
       let combineG: Array<any> = [String.fromCharCode(114,101,112,114,101,115,101,110,116,97,116,105,118,101,0), String.fromCharCode(106,95,57,56,95,116,111,120,121,122,0), String.fromCharCode(108,97,122,121,0)];
       let whitebellk = String.fromCharCode(116,95,51,52,95,97,114,107,101,114,0);
         whitebellk = `${combineG.length}`;
      let iconcalendarl = 8630300 <= combineG.length;
      do {
         combineG = [(String.fromCharCode(54,0) == whitebellk ? smallsoundK.length : whitebellk.length)];
         if (iconcalendarl) {
            break;
         }
      } while ((3 > (5 + smallsoundK.length)) && iconcalendarl);
      while (!whitebellk.startsWith(`${combineG.length}`)) {
          let imageactionliveA: Map<any, any> = new Map([[String.fromCharCode(97,103,103,114,101,103,97,116,111,114,0),String.fromCharCode(101,120,97,99,116,0)], [String.fromCharCode(113,95,50,49,95,99,104,97,116,0),String.fromCharCode(112,114,101,98,117,102,0)]]);
          let animationz = String.fromCharCode(118,95,49,51,95,108,97,110,103,117,97,103,101,0);
          let holderZ = 5.0;
          let yellowvideolivew = 2.0;
          let telegramb = 0;
         whitebellk = `${parseInt(`${yellowvideolivew}`) / 3}`;
         imageactionliveA.set(`${animationz}`, imageactionliveA.size / 3);
         animationz += `${telegramb << (Math.min(Math.abs(3), 4))}`;
         holderZ -= parseFloat(`${parseInt(`${holderZ}`)}`);
         yellowvideolivew += (parseFloat(`${animationz == String.fromCharCode(51,0) ? animationz.length : parseInt(`${holderZ}`)}`));
         telegramb ^= 3;
         break;
      }
          let dropdownf = String.fromCharCode(100,97,116,97,108,105,115,116,95,113,95,54,0);
         combineG = [dropdownf.length / 1];
         whitebellk += `${whitebellk.length - 2}`;
      while (1 <= (smallsoundK.length << (Math.min(Math.abs(5), 3))) && (smallsoundK.length << (Math.min(whitebellk.length, 5))) <= 5) {
         smallsoundK = [whitebellk.length << (Math.min(2, combineG.length))];
         break;
      }
         smallsoundK.push(2 + combineG.length);
      while (2 == (combineG.length * whitebellk.length) || (2 * combineG.length) == 2) {
          let userN = String.fromCharCode(111,119,110,108,111,97,100,95,115,95,54,52,0);
          let register_g0: Map<any, any> = new Map([[String.fromCharCode(100,101,108,116,97,95,56,95,53,55,0),761], [String.fromCharCode(122,95,55,50,95,99,97,99,104,101,115,0),852], [String.fromCharCode(98,95,51,48,95,114,101,115,111,108,118,101,0),5]]);
          let photoh = String.fromCharCode(112,105,112,101,108,105,110,101,115,95,114,95,53,53,0);
          let kuaishouC = String.fromCharCode(111,99,97,108,0);
          let notificationfilledO = String.fromCharCode(112,101,114,115,105,115,116,97,110,116,0);
         combineG = [2 + notificationfilledO.length];
         userN += `${2 ^ register_g0.size}`;
         register_g0 = new Map([[userN, userN.length]]);
         photoh += `${(userN == String.fromCharCode(119,0) ? photoh.length : userN.length)}`;
         kuaishouC += `${photoh.length}`;
         notificationfilledO = "2";
         break;
      }
      for (let j = 0; j < 3; j++) {
         combineG.push(3 | whitebellk.length);
      }
      statisticsactiveU = `${(statisticsactiveU == String.fromCharCode(54,0) ? parseInt(`${libimagepipelineD}`) : statisticsactiveU.length)}`;
   }
      reactnavigation7 = new Map([[`${chinam.size}`, chinam.size]]);

    const state = await NetInfo.fetch();

      chinam = new Map([[`${chinam.size}`, chinam.size]]);
   if (iconrefreshD.length <= 2) {
       let huaweij = String.fromCharCode(102,108,97,116,110,101,115,115,95,50,95,50,50,0);
       let libturbomodulejsijniC = 4;
      while (1 == libturbomodulejsijniC) {
          let iconwatchp = 2.0;
          let currentH: Array<any> = [361, 897, 470];
          let dataY = String.fromCharCode(107,95,53,50,95,116,101,115,116,114,101,115,117,108,116,0);
         huaweij += "3";
         iconwatchp -= parseFloat(`${parseInt(`${iconwatchp}`) + currentH.length}`);
         currentH = [currentH.length ^ dataY.length];
         dataY = "2";
         break;
      }
      let v_center1 = 9191390 <= libturbomodulejsijniC;
      do {
          let ccdfbdabcabbbedbj = String.fromCharCode(97,112,112,108,101,95,105,95,51,52,0);
          let iconadslinkd: Array<any> = [String.fromCharCode(115,99,104,101,100,117,108,101,114,95,49,95,54,52,0), String.fromCharCode(116,109,99,100,95,100,95,53,53,0), String.fromCharCode(118,101,114,116,115,95,120,95,52,55,0)];
          let unselected6 = String.fromCharCode(117,95,54,52,0);
          let x_centerL = 4.0;
         libturbomodulejsijniC /= Math.max(iconadslinkd.length, 5);
         ccdfbdabcabbbedbj = "2";
         iconadslinkd = [unselected6.length];
         unselected6 = `${ccdfbdabcabbbedbj.length}`;
         x_centerL *= parseFloat(`${ccdfbdabcabbbedbj.length % 2}`);
         if (v_center1) {
            break;
         }
      } while (v_center1 && (2 == (huaweij.length - 5) || (libturbomodulejsijniC - huaweij.length) == 5));
      let appsr = libturbomodulejsijniC <= 9609577;
      do {
         libturbomodulejsijniC |= (String.fromCharCode(81,0) == huaweij ? libturbomodulejsijniC : huaweij.length);
         if (appsr) {
            break;
         }
      } while ((2 < (huaweij.length | libturbomodulejsijniC) && (libturbomodulejsijniC | 2) < 2) && appsr);
      for (let i = 0; i < 3; i++) {
         libturbomodulejsijniC |= 3;
      }
      let modelJ = 5851235 >= libturbomodulejsijniC;
      do {
         libturbomodulejsijniC ^= (String.fromCharCode(83,0) == huaweij ? huaweij.length : libturbomodulejsijniC);
         if (modelJ) {
            break;
         }
      } while (modelJ && (2 <= (huaweij.length << (Math.min(Math.abs(5), 2)))));
          let changet = String.fromCharCode(119,95,52,50,95,110,105,100,115,0);
          let b_hashE = String.fromCharCode(119,95,53,49,95,106,115,105,109,100,0);
         huaweij += `${libturbomodulejsijniC}`;
         changet = `${2 - changet.length}`;
         b_hashE = `${2 * changet.length}`;
      iconrefreshD = `${iconrefreshD.length}`;
   }
      statisticsactiveU = `${reactnavigation7.size ^ 3}`;
   if ((1 / (Math.max(4, reactnavigation7.size))) >= 4 || 3 >= (statisticsactiveU.length / 1)) {
      reactnavigation7.set(animationsj, animationsj.length);
   }
       let feedbackb: Map<any, any> = new Map([[String.fromCharCode(114,105,110,103,0),139], [String.fromCharCode(103,101,116,108,98,108,111,99,107,105,110,99,95,51,95,56,51,0),200], [String.fromCharCode(99,95,55,51,95,117,112,115,101,114,116,0),233]]);
      if (!Array.from(feedbackb.values()).includes(feedbackb.size)) {
         feedbackb.set(`${feedbackb.size}`, feedbackb.size ^ feedbackb.size);
      }
      while (1 <= (5 & feedbackb.size)) {
         feedbackb.set(`${feedbackb.size}`, feedbackb.size * 3);
         break;
      }
       let imagewatchliveV: Map<any, any> = new Map([[String.fromCharCode(104,97,115,104,107,101,121,95,113,95,52,51,0),949], [String.fromCharCode(104,117,100,0),878], [String.fromCharCode(102,114,97,109,101,115,105,122,101,115,0),64]]);
       let redirecte: Map<any, any> = new Map([[String.fromCharCode(120,106,112,101,103,95,99,95,51,53,0),920], [String.fromCharCode(116,99,109,105,95,50,95,53,49,0),152], [String.fromCharCode(99,111,110,116,114,111,108,101,114,115,95,114,95,49,52,0),249]]);
      animationsj = `${3 & modelsd.length}`;
   while (5 < (runtimee.size + chinam.size) && (5 + runtimee.size) < 3) {
       let yellowanimationlive9 = String.fromCharCode(97,95,49,56,95,105,109,112,108,105,99,105,116,101,108,121,0);
       let securityN = String.fromCharCode(117,95,49,53,95,109,109,115,104,0);
       let championf: Array<any> = [708, 389];
       let smallS: Array<any> = [364, 402];
         smallS.push(yellowanimationlive9.length);
          let runtimeschedulerH = false;
         championf.push(3 ^ championf.length);
         runtimeschedulerH = !runtimeschedulerH;
         securityN += "1";
      if (2 < smallS.length) {
         securityN += `${(securityN == String.fromCharCode(106,0) ? securityN.length : championf.length)}`;
      }
      while (3 > (smallS.length % (Math.max(yellowanimationlive9.length, 1)))) {
         smallS = [securityN.length];
         break;
      }
      runtimee.set(`${libimagepipelineD}`, parseInt(`${libimagepipelineD}`));
      break;
   }
    

      anytime0.set(`${libimagepipelineD}`, 2);
   for (let z = 0; z < 3; z++) {
       let loadingspinner3 = 3.0;
       let bufferV = String.fromCharCode(115,116,117,102,102,105,110,103,0);
       let runtimeschedulerE = String.fromCharCode(108,111,99,107,109,103,114,0);
       let splashf: Array<any> = [778, 119];
       let applicationZ = String.fromCharCode(111,105,100,97,110,121,0);
      for (let r = 0; r < 1; r++) {
         bufferV += `${runtimeschedulerE.length}`;
      }
         bufferV = "2";
         applicationZ = `${bufferV.length ^ 3}`;
         bufferV = `${3 % (Math.max(4, bufferV.length))}`;
         splashf = [3 >> (Math.min(3, applicationZ.length))];
          let iconarrowrightorangeR = String.fromCharCode(105,110,115,101,114,116,105,110,103,0);
          let penaltymatchicon4 = String.fromCharCode(122,95,53,51,95,105,110,100,101,110,116,97,116,105,111,110,0);
         loadingspinner3 *= penaltymatchicon4.length;
         iconarrowrightorangeR += `${iconarrowrightorangeR.length | 2}`;
         penaltymatchicon4 += `${(String.fromCharCode(65,0) == iconarrowrightorangeR ? iconarrowrightorangeR.length : iconarrowrightorangeR.length)}`;
      if ((applicationZ.length | splashf.length) > 1) {
         splashf.push(parseInt(`${loadingspinner3}`) + 3);
      }
         bufferV = `${splashf.length}`;
      for (let f = 0; f < 3; f++) {
         applicationZ = `${bufferV.length}`;
      }
         bufferV = `${parseInt(`${loadingspinner3}`) & applicationZ.length}`;
      if (bufferV.length >= 2) {
         runtimeschedulerE += "1";
      }
      for (let k = 0; k < 1; k++) {
         bufferV += `${runtimeschedulerE.length}`;
      }
      let hometeamfieldL = splashf.length <= 5816239;
      do {
          let tumbnail0 = String.fromCharCode(111,105,100,0);
          let livenodatabgimgh = String.fromCharCode(116,105,108,105,110,103,95,102,95,56,51,0);
         splashf = [splashf.length & 3];
         tumbnail0 = "3";
         livenodatabgimgh += `${3 + livenodatabgimgh.length}`;
         if (hometeamfieldL) {
            break;
         }
      } while ((4 > (splashf.length / (Math.max(applicationZ.length, 7))) || 1 > (splashf.length / (Math.max(4, 4)))) && hometeamfieldL);
         bufferV += "2";
      while ((runtimeschedulerE.length ^ 5) == 4) {
         splashf = [3];
         break;
      }
      reactnavigation7 = new Map([[`${splashf.length}`, 3 >> (Math.min(1, applicationZ.length))]]);
   }
       let langkeyR = 5.0;
       let thumbnailB = 3;
         langkeyR -= parseInt(`${langkeyR}`);
         langkeyR *= thumbnailB;
         thumbnailB %= Math.max(5, parseInt(`${langkeyR}`) ^ 2);
          let serviceP: Map<any, any> = new Map([[String.fromCharCode(121,95,53,49,95,120,119,109,97,0),454], [String.fromCharCode(114,95,51,49,95,108,101,114,112,0),37]]);
         thumbnailB >>= Math.min(5, Math.abs(3));
         serviceP.set(`${serviceP.size}`, serviceP.size);
      if (thumbnailB < 3) {
         thumbnailB |= 3;
      }
         thumbnailB >>= Math.min(2, Math.abs(2 + thumbnailB));
      anytime0 = new Map([[`${runtimee.size}`, 1 & chinam.size]]);
   for (let o = 0; o < 1; o++) {
       let basketballplayerplaceholderl = String.fromCharCode(99,111,111,114,100,105,110,97,116,105,111,110,95,118,95,49,48,0);
       let modityh = 1;
       let injuryA = 4.0;
       let episodesz = 3;
      let iconcalendarb = 7103075 >= episodesz;
      do {
         episodesz %= Math.max(2, 3);
         if (iconcalendarb) {
            break;
         }
      } while (iconcalendarb && (4 >= (5 * modityh) || (episodesz * modityh) >= 5));
         injuryA += parseFloat(`${basketballplayerplaceholderl.length * modityh}`);
       let stylea = String.fromCharCode(99,111,112,121,95,49,95,51,51,0);
       let register_mL = String.fromCharCode(98,108,111,111,109,95,108,95,53,0);
         basketballplayerplaceholderl += `${episodesz / (Math.max(4, stylea.length))}`;
       let neonM: Array<any> = [String.fromCharCode(102,114,111,109,102,101,95,116,95,56,48,0), String.fromCharCode(114,101,118,97,108,105,100,97,116,101,95,107,95,51,57,0)];
       let iconcloseI: Array<any> = [601, 193];
      while (!iconcloseI.includes(modityh)) {
          let release_agp = String.fromCharCode(103,95,56,57,95,101,120,112,101,114,116,0);
          let schedulel = String.fromCharCode(115,105,122,105,110,103,95,98,95,52,51,0);
          let selectedO: Array<any> = [418, 940];
         modityh |= iconcloseI.length;
         release_agp = "3";
         schedulel = `${schedulel.length}`;
         selectedO = [selectedO.length % 2];
         break;
      }
      for (let q = 0; q < 3; q++) {
         stylea = `${basketballplayerplaceholderl.length}`;
      }
      while (3 > (basketballplayerplaceholderl.length + 1)) {
         basketballplayerplaceholderl += `${neonM.length}`;
         break;
      }
      let notificationfilledD = iconcloseI.length >= 5763927;
      do {
         iconcloseI.push(iconcloseI.length - 1);
         if (notificationfilledD) {
            break;
         }
      } while ((iconcloseI.length < modityh) && notificationfilledD);
      while (modityh >= 4) {
          let redirecte4: Map<any, any> = new Map([[String.fromCharCode(115,119,97,116,99,104,0),789], [String.fromCharCode(116,95,50,56,95,99,111,110,116,105,110,117,101,0),111]]);
         modityh |= episodesz + 3;
         redirecte4.set(`${redirecte4.size}`, redirecte4.size - 1);
         break;
      }
      while (2 > (episodesz ^ modityh)) {
         modityh += 1 % (Math.max(parseInt(`${injuryA}`), 7));
         break;
      }
      if ((neonM.length * iconcloseI.length) < 1) {
         iconcloseI.push(modityh);
      }
      anytime0 = new Map([[`${modelsd.length}`, (modelsd.length | (completeN ? 1 : 2))]]);
   }
   for (let a = 0; a < 2; a++) {
      completeN = modelsd.length >= 47;
   }
      iconrefreshD = `${animationsj.length - statisticsactiveU.length}`;
    const offline = !(state.isConnected && ((state.isInternetReachable === true || state.isInternetReachable === null) ? true : false));
    setIsOffline(offline);

   if (completeN) {
      completeN = anytime0.size > 77;
   }
       let showD: Map<any, any> = new Map([[String.fromCharCode(101,95,53,48,95,115,108,105,99,101,115,0),true ], [String.fromCharCode(114,101,109,111,118,101,114,0),false ]]);
       let hejiF: Array<any> = [982, 779];
       let giftN: Array<any> = [318, 222];
      if ((5 + showD.size) <= 5 && (showD.size + 5) <= 4) {
         hejiF = [1 & showD.size];
      }
         giftN.push(hejiF.length | 3);
          let iconbackwhiteZ = 3;
          let morem = String.fromCharCode(97,110,105,109,97,116,111,114,115,95,112,95,51,48,0);
         hejiF.push(iconbackwhiteZ & showD.size);
         iconbackwhiteZ -= 1;
         morem += `${2 | morem.length}`;
      if (2 > hejiF.length) {
          let libruntimeexecutorA: Map<any, any> = new Map([[String.fromCharCode(99,95,51,48,0),939], [String.fromCharCode(98,101,101,110,95,116,95,49,56,0),516]]);
         hejiF.push(2);
         libruntimeexecutorA.set(`${libruntimeexecutorA.size}`, libruntimeexecutorA.size);
      }
          let topicx = String.fromCharCode(100,101,103,114,101,101,95,122,95,50,54,0);
          let hometeamfields: Array<any> = [886, 898];
          let owngoalm: Map<any, any> = new Map([[String.fromCharCode(112,95,56,49,95,100,105,110,101,114,115,0),false ], [String.fromCharCode(100,101,113,117,101,117,101,0),true ]]);
         hejiF = [hometeamfields.length >> (Math.min(5, Math.abs(owngoalm.size)))];
         topicx = `${1 - topicx.length}`;
         hometeamfields.push((topicx == String.fromCharCode(65,0) ? topicx.length : topicx.length));
      for (let o = 0; o < 3; o++) {
          let librrc6 = 4;
          let assisty = String.fromCharCode(97,115,115,101,109,98,108,101,100,95,110,95,49,48,0);
          let grey0 = String.fromCharCode(117,110,118,111,116,101,0);
          let positionfieldJ = 4.0;
          let flipperR = String.fromCharCode(103,95,49,57,95,108,101,97,107,0);
         giftN.push(2 % (Math.max(2, hejiF.length)));
         librrc6 *= flipperR.length | 2;
         assisty += `${assisty.length + 3}`;
         grey0 += `${grey0.length | 3}`;
         positionfieldJ -= 3;
         flipperR += "3";
      }
       let bufferB: Map<any, any> = new Map([[String.fromCharCode(114,101,110,111,114,109,101,0),false ], [String.fromCharCode(115,101,103,119,105,116,95,57,95,57,52,0),false ], [String.fromCharCode(102,95,50,49,95,112,97,105,114,119,105,115,101,0),true ]]);
         hejiF = [bufferB.size];
         showD = new Map([[`${showD.size}`, 3 ^ hejiF.length]]);
      runtimee = new Map([[iconrefreshD, animationsj.length]]);
       let hnewarchdefaultsA: Array<any> = [String.fromCharCode(118,101,114,105,102,121,105,110,103,0), String.fromCharCode(121,98,114,105,95,108,95,55,53,0)];
       let trophyu = String.fromCharCode(107,95,57,95,114,101,100,105,114,101,99,116,111,114,0);
       let iconshare6 = String.fromCharCode(109,95,49,48,95,101,120,97,99,116,108,121,0);
      if (5 <= (iconshare6.length << (Math.min(Math.abs(4), 4))) && (hnewarchdefaultsA.length << (Math.min(Math.abs(4), 4))) <= 3) {
         iconshare6 += `${hnewarchdefaultsA.length << (Math.min(trophyu.length, 2))}`;
      }
         hnewarchdefaultsA = [trophyu.length / (Math.max(1, 5))];
          let descy = 2.0;
         trophyu += `${iconshare6.length / 3}`;
         descy -= parseFloat(`${parseInt(`${descy}`) | parseInt(`${descy}`)}`);
         trophyu = `${iconshare6.length & 1}`;
      while (iconshare6.length < 4) {
         trophyu += `${iconshare6.length}`;
         break;
      }
       let buildP = String.fromCharCode(112,111,111,108,114,101,102,0);
         iconshare6 += `${hnewarchdefaultsA.length % (Math.max(trophyu.length, 7))}`;
         trophyu += `${hnewarchdefaultsA.length ^ 2}`;
      let redscoreballI = hnewarchdefaultsA.length >= 8445985;
      do {
         hnewarchdefaultsA = [(String.fromCharCode(110,0) == trophyu ? hnewarchdefaultsA.length : trophyu.length)];
         if (redscoreballI) {
            break;
         }
      } while (redscoreballI && (2 >= hnewarchdefaultsA.length));
      libimagepipelineD /= Math.max(4, parseFloat(`${3}`));
   let whitebell8 = String.fromCharCode(119,50,95,0) == statisticsactiveU;
   do {
      statisticsactiveU = "2";
      if (whitebell8) {
         break;
      }
   } while (whitebell8 && (animationsj.length < statisticsactiveU.length));
   if ((chinam.size + runtimee.size) > 2 || 2 > (runtimee.size + chinam.size)) {
       let dataU = 1.0;
       let service2: Map<any, any> = new Map([[String.fromCharCode(117,95,50,95,97,116,116,114,97,99,116,111,114,0),277], [String.fromCharCode(99,111,108,111,114,107,101,121,0),51], [String.fromCharCode(118,95,53,49,95,112,114,101,114,101,108,101,97,115,101,0),397]]);
      if (Array.from(service2.keys()).includes(`${dataU}`)) {
          let macauP = 4.0;
          let filledH = String.fromCharCode(116,108,101,110,0);
          let backiconmaskP: Map<any, any> = new Map([[String.fromCharCode(114,95,53,55,95,109,105,100,100,108,101,0),true ], [String.fromCharCode(108,97,116,101,98,105,110,100,105,110,103,115,121,109,98,111,108,116,97,98,108,101,0),true ], [String.fromCharCode(100,95,49,49,95,114,101,97,100,111,110,108,121,0),false ]]);
          let whiteo = 2.0;
         service2 = new Map([[`${backiconmaskP.size}`, parseInt(`${macauP}`)]]);
         macauP += parseInt(`${whiteo}`) >> (Math.min(filledH.length, 2));
         filledH = `${parseInt(`${whiteo}`) & filledH.length}`;
         backiconmaskP = new Map([[`${whiteo}`, 1 & filledH.length]]);
      }
         service2 = new Map([[`${service2.size}`, service2.size & parseInt(`${dataU}`)]]);
          let basketballplayerplaceholder9 = String.fromCharCode(115,101,99,111,110,100,97,114,121,95,97,95,54,55,0);
          let tumbnailT = 2.0;
         service2 = new Map([[`${dataU}`, 2 | parseInt(`${tumbnailT}`)]]);
         basketballplayerplaceholder9 = "2";
         tumbnailT -= parseFloat(`${basketballplayerplaceholder9.length}`);
       let reactnativeratingsc = String.fromCharCode(116,95,52,48,95,100,109,97,99,0);
       let flag9: Array<any> = [996, 601, 302];
         service2 = new Map([[`${service2.size}`, 3]]);
      chinam.set(`${statisticsactiveU}`, statisticsactiveU.length << (Math.min(Math.abs(1), 4)));
   }
   for (let w = 0; w < 1; w++) {
       let iconcurrentmatchP: Map<any, any> = new Map([[String.fromCharCode(99,111,108,108,101,99,116,97,98,108,101,95,49,95,56,51,0),318], [String.fromCharCode(117,95,57,53,95,114,111,98,105,110,0),651]]);
       let lefty = String.fromCharCode(106,95,50,95,116,114,97,110,0);
      for (let q = 0; q < 1; q++) {
          let gmail9 = true;
          let mbnativeadvancedk = String.fromCharCode(115,97,100,120,120,0);
         iconcurrentmatchP.set(mbnativeadvancedk, mbnativeadvancedk.length);
      }
          let yellowanimationliveY = String.fromCharCode(121,95,54,55,95,99,109,97,99,0);
          let launchG = String.fromCharCode(100,101,108,101,116,105,111,110,95,56,95,57,50,0);
          let schedulev = String.fromCharCode(118,95,49,55,95,109,115,118,105,100,101,111,0);
         iconcurrentmatchP = new Map([[yellowanimationliveY, lefty.length / 3]]);
         yellowanimationliveY += `${schedulev.length * launchG.length}`;
         launchG += `${launchG.length}`;
         schedulev = `${launchG.length}`;
         iconcurrentmatchP.set(lefty, lefty.length);
         iconcurrentmatchP.set(`${lefty}`, (lefty == String.fromCharCode(53,0) ? lefty.length : iconcurrentmatchP.size));
      while (4 >= (lefty.length - 4)) {
          let historyD = String.fromCharCode(103,95,56,49,95,100,101,115,116,114,117,99,116,111,114,0);
         lefty += `${historyD.length + 2}`;
         break;
      }
          let libyogaC = String.fromCharCode(117,95,52,56,95,110,115,117,105,114,103,98,97,0);
          let halffieldimageZ = String.fromCharCode(118,95,50,49,95,110,99,114,121,112,116,105,111,110,0);
          let philippinesm: Array<any> = [451, 529];
         lefty += `${lefty.length}`;
         libyogaC = `${halffieldimageZ.length}`;
         halffieldimageZ = "2";
         philippinesm.push(1 + libyogaC.length);
      modelsd = [3 * statisticsactiveU.length];
   }
    if (!offline) {

   while (!statisticsactiveU.includes(`${animationsj.length}`)) {
      statisticsactiveU = `${1 >> (Math.min(2, Math.abs(parseInt(`${libimagepipelineD}`))))}`;
      break;
   }
   for (let l = 0; l < 1; l++) {
       let backicon9 = String.fromCharCode(111,99,115,112,105,100,95,100,95,55,53,0);
       let k_image7 = 3;
       let iconbell3 = 5;
       let awayteamfielde = 1;
       let scrollviewB = 4;
      while (2 >= awayteamfielde) {
          let detailsl = 2.0;
          let imagenetworkerr3 = String.fromCharCode(108,97,98,101,108,101,100,0);
          let launchM: Map<any, any> = new Map([[String.fromCharCode(115,99,101,101,110,0),590], [String.fromCharCode(115,95,53,53,95,108,105,110,101,0),443]]);
          let mimoD = String.fromCharCode(118,95,54,53,95,109,101,100,105,97,110,0);
          let projectY = String.fromCharCode(117,114,97,110,100,111,109,95,56,95,51,56,0);
         scrollviewB %= Math.max(5, 1 % (Math.max(10, awayteamfielde)));
         detailsl /= Math.max(5, parseFloat(`${projectY.length - 2}`));
         imagenetworkerr3 = `${projectY.length}`;
         launchM = new Map([[mimoD, mimoD.length << (Math.min(4, Math.abs(parseInt(`${detailsl}`))))]]);
         break;
      }
         k_image7 -= k_image7 >> (Math.min(backicon9.length, 2));
          let attributedstringz = String.fromCharCode(116,95,55,53,95,102,116,118,102,111,108,100,101,114,111,112,101,110,0);
          let downloadingE: Map<any, any> = new Map([[String.fromCharCode(112,114,111,118,105,100,101,100,95,101,95,54,50,0),410], [String.fromCharCode(98,97,100,103,101,115,95,97,95,50,49,0),809], [String.fromCharCode(100,95,57,50,95,108,97,122,105,108,121,0),840]]);
         backicon9 += `${(backicon9 == String.fromCharCode(90,0) ? scrollviewB : backicon9.length)}`;
         attributedstringz = `${attributedstringz.length}`;
         downloadingE.set(`${attributedstringz}`, downloadingE.size << (Math.min(attributedstringz.length, 1)));
      for (let x = 0; x < 1; x++) {
         scrollviewB |= scrollviewB;
      }
      if (scrollviewB > 3) {
         scrollviewB %= Math.max(iconbell3, 2);
      }
          let chatbotphotop = 1.0;
         awayteamfielde <<= Math.min(Math.abs(parseInt(`${chatbotphotop}`) % (Math.max(2, 3))), 2);
         iconbell3 |= scrollviewB >> (Math.min(Math.abs(3), 4));
      let suboutf = backicon9.length <= 8070313;
      do {
         backicon9 = `${k_image7}`;
         if (suboutf) {
            break;
         }
      } while ((4 == scrollviewB) && suboutf);
      for (let g = 0; g < 3; g++) {
         scrollviewB &= awayteamfielde << (Math.min(Math.abs(k_image7), 5));
      }
      while ((k_image7 - 4) == 4 || (4 - scrollviewB) == 5) {
         scrollviewB /= Math.max(5, k_image7);
         break;
      }
      let pathv = k_image7 <= 8012769;
      do {
          let subs7 = String.fromCharCode(119,111,114,100,115,95,52,95,49,56,0);
          let penaltymatchiconC = String.fromCharCode(101,120,116,114,101,109,101,0);
          let viewer5 = 0.0;
         k_image7 |= parseInt(`${viewer5}`) << (Math.min(2, Math.abs(1)));
         subs7 = `${(String.fromCharCode(51,0) == subs7 ? subs7.length : penaltymatchiconC.length)}`;
         penaltymatchiconC = "3";
         viewer5 /= Math.max(2, parseFloat(`${subs7.length}`));
         if (pathv) {
            break;
         }
      } while (pathv && (1 <= (2 >> (Math.min(2, Math.abs(k_image7)))) && (k_image7 >> (Math.min(Math.abs(2), 2))) <= 3));
      for (let r = 0; r < 2; r++) {
         scrollviewB ^= 3 % (Math.max(3, backicon9.length));
      }
         awayteamfielde *= 3 | k_image7;
         k_image7 |= 1;
         awayteamfielde &= 1;
      statisticsactiveU = `${reactnavigation7.size}`;
   }
   if (runtimee.get(`${modelsd.length}`) != null) {
      runtimee = new Map([[`${modelsd.length}`, modelsd.length / (Math.max(iconrefreshD.length, 5))]]);
   }
      statisticsactiveU = `${anytime0.size}`;
   if ((libimagepipelineD * 1.100) > 1.47 && (chinam.size * parseInt(`${libimagepipelineD}`)) > 5) {
      libimagepipelineD += parseFloat(`${modelsd.length << (Math.min(statisticsactiveU.length, 3))}`);
   }
   while (libimagepipelineD >= parseFloat(`${iconrefreshD.length}`)) {
      iconrefreshD = "2";
      break;
   }
      handleRefresh(navId);
    }
  };
  const handleShowLoading = async () => {
       let klevin0 = String.fromCharCode(118,100,98,101,0);
    let changeO: Array<any> = [4, 324, 52];
    let invitef = String.fromCharCode(112,95,54,48,95,99,111,108,115,107,105,112,0);
    let containerp = 0.0;
    let scrollview0 = String.fromCharCode(109,112,101,103,118,105,100,101,111,100,115,112,95,112,95,50,50,0);
    let pointL = false;
    let mbnativeadvancedh = 2.0;
    let benefitJ = String.fromCharCode(116,95,55,51,95,99,111,109,112,101,110,115,97,116,105,111,110,0);
    let placeholderx: Map<any, any> = new Map([[String.fromCharCode(99,111,117,110,116,101,114,115,0),String.fromCharCode(104,95,53,52,95,115,109,97,108,108,0)], [String.fromCharCode(122,95,49,55,95,115,115,116,104,114,101,115,104,0),String.fromCharCode(103,95,51,50,95,98,101,104,97,118,105,111,114,115,0)], [String.fromCharCode(114,101,115,112,101,99,116,105,110,103,95,117,95,53,55,0),String.fromCharCode(114,101,112,108,97,121,103,97,105,110,95,113,95,49,48,48,0)]]);
    let statso = true;
      containerp -= parseInt(`${containerp}`) * changeO.length;
       let libcxxcomponentsV = false;
      for (let u = 0; u < 2; u++) {
          let connectionl = String.fromCharCode(120,95,55,56,95,99,117,115,116,111,109,105,122,101,0);
         libcxxcomponentsV = !libcxxcomponentsV;
         connectionl = `${(connectionl == String.fromCharCode(90,0) ? connectionl.length : connectionl.length)}`;
      }
      if (libcxxcomponentsV || !libcxxcomponentsV) {
         libcxxcomponentsV = (!libcxxcomponentsV ? libcxxcomponentsV : libcxxcomponentsV);
      }
       let leagueZ: Array<any> = [String.fromCharCode(99,95,51,57,95,98,111,108,100,0), String.fromCharCode(114,101,115,101,116,98,117,102,95,98,95,56,50,0), String.fromCharCode(118,112,108,97,121,101,114,95,102,95,56,50,0)];
      benefitJ += `${invitef.length}`;
       let calendarA = 2.0;
         calendarA /= Math.max(2, parseInt(`${calendarA}`) & 1);
          let audienceN: Map<any, any> = new Map([[String.fromCharCode(101,120,112,105,114,101,115,95,108,95,56,56,0),515], [String.fromCharCode(99,111,110,110,101,99,116,95,99,95,55,48,0),17], [String.fromCharCode(99,108,97,115,104,101,100,0),464]]);
          let stylesa = 0;
         calendarA -= audienceN.size / (Math.max(2, 1));
         audienceN.set(`${stylesa}`, stylesa << (Math.min(2, Math.abs(stylesa))));
         calendarA += 1;
      containerp -= parseInt(`${mbnativeadvancedh}`) % 2;
      scrollview0 = `${((pointL ? 5 : 4) - placeholderx.size)}`;
   while (klevin0.length == 3) {
      pointL = klevin0.length > 11;
      break;
   }
       let detail8 = 4.0;
       let x_titleU = String.fromCharCode(109,105,109,101,0);
      while (2 > x_titleU.length) {
          let telegramm = String.fromCharCode(115,108,117,103,95,98,95,50,48,0);
          let combinedW = 1.0;
          let stringF = 5.0;
          let iconarrowrightorangeM = String.fromCharCode(111,112,101,114,97,116,105,111,110,0);
          let reactnativejsV: Array<any> = [494, 465, 725];
         x_titleU += `${1 * iconarrowrightorangeM.length}`;
         telegramm = `${parseInt(`${stringF}`) ^ parseInt(`${combinedW}`)}`;
         combinedW *= parseFloat(`${1}`);
         stringF /= Math.max(1 ^ parseInt(`${stringF}`), 5);
         iconarrowrightorangeM = `${2 - parseInt(`${combinedW}`)}`;
         reactnativejsV = [reactnativejsV.length];
         break;
      }
       let libmapbufferjniE = String.fromCharCode(100,101,99,105,109,97,108,95,116,95,56,53,0);
       let libfbN = String.fromCharCode(117,110,115,97,118,101,100,95,119,95,52,52,0);
         detail8 += libmapbufferjniE.length & libfbN.length;
         x_titleU += `${parseInt(`${detail8}`) % 2}`;
          let backwardp = 1.0;
         libfbN += `${(String.fromCharCode(121,0) == x_titleU ? x_titleU.length : parseInt(`${backwardp}`))}`;
         detail8 *= 1 / (Math.max(1, x_titleU.length));
      statso = (parseFloat(`${klevin0.length}`) / (Math.max(2, mbnativeadvancedh))) == 54.27;
      benefitJ += `${changeO.length & 2}`;
   while (pointL || (3 | placeholderx.size) > 1) {
       let uimanager3: Array<any> = [270, 94];
       let actionY: Array<any> = [857, 227];
      let downI = 4995993 <= uimanager3.length;
      do {
         uimanager3.push(uimanager3.length - 3);
         if (downI) {
            break;
         }
      } while ((4 <= (4 + uimanager3.length) || 4 <= (4 + actionY.length)) && downI);
      for (let v = 0; v < 1; v++) {
          let currentt = 0.0;
         actionY = [actionY.length];
         currentt /= Math.max(2 / (Math.max(parseInt(`${currentt}`), 1)), 4);
      }
       let pauset: Map<any, any> = new Map([[String.fromCharCode(116,114,97,99,105,110,103,95,50,95,55,54,0),260], [String.fromCharCode(114,107,109,112,112,95,108,95,53,51,0),710]]);
       let fullscreenmax6: Map<any, any> = new Map([[String.fromCharCode(115,112,108,105,110,101,0),true ], [String.fromCharCode(114,103,116,99,115,95,115,95,56,52,0),true ]]);
       let libavdeviceK = false;
          let indicatorg = 3;
          let positionfield7 = String.fromCharCode(110,105,109,97,116,105,111,110,95,114,95,54,56,0);
          let telegrami = true;
         pauset.set(`${indicatorg}`, actionY.length ^ 2);
         indicatorg += (positionfield7 == String.fromCharCode(109,0) ? positionfield7.length : (telegrami ? 3 : 2));
         telegrami = !telegrami;
         fullscreenmax6 = new Map([[`${actionY.length}`, uimanager3.length << (Math.min(actionY.length, 1))]]);
      placeholderx.set(`${actionY.length}`, placeholderx.size & 1);
      break;
   }
       let interstitial4 = String.fromCharCode(97,121,98,114,105,95,54,95,53,55,0);
       let logoutZ = 1;
      for (let l = 0; l < 1; l++) {
          let iconarrowrightwhiteO = true;
         logoutZ += (logoutZ + (iconarrowrightwhiteO ? 3 : 3));
      }
      let analyticx = 9868550 >= interstitial4.length;
      do {
         interstitial4 += `${logoutZ * 2}`;
         if (analyticx) {
            break;
         }
      } while ((3 == (logoutZ & 1) && (logoutZ & interstitial4.length) == 1) && analyticx);
      let watchk = logoutZ <= 5499903;
      do {
          let time_4g = true;
          let carousel6 = String.fromCharCode(117,95,54,55,95,112,114,101,102,105,120,0);
          let detail6 = 4.0;
         logoutZ *= 1;
         time_4g = String.fromCharCode(84,0) == carousel6;
         carousel6 += `${(carousel6.length & (time_4g ? 3 : 1))}`;
         detail6 -= parseInt(`${detail6}`) - 2;
         if (watchk) {
            break;
         }
      } while (((interstitial4.length - logoutZ) <= 3) && watchk);
      if ((5 / (Math.max(1, interstitial4.length))) <= 2 || (logoutZ / 5) <= 1) {
          let main_aY: Array<any> = [308, 435, 873];
          let matchT = 0.0;
          let bootsplashv = String.fromCharCode(114,101,108,97,121,111,117,116,0);
         logoutZ *= bootsplashv.length % 2;
         main_aY.push(main_aY.length);
         matchT -= parseInt(`${matchT}`) * 3;
         bootsplashv += "1";
      }
         interstitial4 = `${(interstitial4 == String.fromCharCode(90,0) ? interstitial4.length : logoutZ)}`;
      let e_managert = interstitial4.length >= 8188794;
      do {
          let viewerq = 5;
          let sellf = 0.0;
          let fullscreenmind = 5;
          let minimize1 = true;
         interstitial4 = `${logoutZ}`;
         viewerq /= Math.max((fullscreenmind << (Math.min(4, Math.abs((minimize1 ? 2 : 2))))), 3);
         sellf -= 3;
         fullscreenmind |= 2 * viewerq;
         minimize1 = fullscreenmind > 36;
         if (e_managert) {
            break;
         }
      } while (((logoutZ * 4) >= 2) && e_managert);
      statso = (scrollview0.length / (Math.max(invitef.length, 10))) > 48;
      scrollview0 += `${parseInt(`${mbnativeadvancedh}`)}`;
   while (5 > (parseInt(`${containerp}`) + 3) || 1 > (3 * scrollview0.length)) {
      scrollview0 += `${placeholderx.size ^ klevin0.length}`;
      break;
   }
      benefitJ += `${benefitJ.length}`;
      mbnativeadvancedh *= (parseFloat(`${parseInt(`${containerp}`) + (pointL ? 4 : 5)}`));
      mbnativeadvancedh += parseFloat(`${parseInt(`${containerp}`) << (Math.min(3, Math.abs(3)))}`);
   for (let c = 0; c < 2; c++) {
      changeO = [3];
   }
   let penaltyshootC = 6329292 >= benefitJ.length;
   do {
      benefitJ = `${3 + benefitJ.length}`;
      if (penaltyshootC) {
         break;
      }
   } while (penaltyshootC && (!klevin0.startsWith(`${benefitJ.length}`)));
   if (placeholderx.size <= 3) {
       let iconwatchJ = 4;
       let encryptorp = 4.0;
       let libapminsightb0 = String.fromCharCode(117,95,50,53,95,100,120,110,100,99,0);
          let yellowy: Map<any, any> = new Map([[String.fromCharCode(102,115,121,110,99,0),String.fromCharCode(118,105,109,101,111,95,105,95,55,48,0)], [String.fromCharCode(102,114,111,109,98,121,116,101,115,95,120,95,56,53,0),String.fromCharCode(101,118,97,115,97,112,112,0)], [String.fromCharCode(102,95,50,50,95,115,111,117,110,100,0),String.fromCharCode(114,101,108,105,97,98,108,101,0)]]);
          let closex = 1;
          let shrunkN = 5.0;
         encryptorp += parseInt(`${shrunkN}`) >> (Math.min(2, Math.abs(closex)));
         yellowy.set(`${yellowy.size}`, 1 ^ yellowy.size);
         closex -= 1;
      while ((2 >> (Math.min(5, libapminsightb0.length))) == 3) {
          let routerI = String.fromCharCode(105,110,116,101,103,114,105,116,121,0);
          let thumbnailC = 3;
          let baidu9 = 0.0;
          let g_locka: Map<any, any> = new Map([[String.fromCharCode(115,117,112,101,114,115,99,114,105,112,116,95,122,95,55,53,0),532], [String.fromCharCode(116,104,114,101,97,100,105,110,103,95,52,95,54,57,0),206]]);
          let analytics1 = String.fromCharCode(117,110,105,109,112,108,101,109,101,110,116,101,100,95,56,95,56,53,0);
         encryptorp *= 3 >> (Math.min(4, Math.abs(iconwatchJ)));
         routerI += `${2 & g_locka.size}`;
         thumbnailC >>= Math.min(Math.abs(g_locka.size / 3), 4);
         baidu9 += routerI.length;
         analytics1 += "1";
         break;
      }
      while (5 > libapminsightb0.length) {
          let penaltyO = String.fromCharCode(108,95,57,48,95,100,105,115,99,117,115,115,105,111,110,0);
          let playershirtF = String.fromCharCode(99,111,108,108,0);
         libapminsightb0 = "3";
         penaltyO = `${penaltyO.length - 2}`;
         playershirtF += `${playershirtF.length << (Math.min(1, penaltyO.length))}`;
         break;
      }
         libapminsightb0 += `${iconwatchJ / (Math.max(parseInt(`${encryptorp}`), 10))}`;
      for (let k = 0; k < 1; k++) {
         encryptorp += 3;
      }
         encryptorp *= libapminsightb0.length | parseInt(`${encryptorp}`);
      if (4 <= (iconwatchJ * parseInt(`${encryptorp}`)) || (encryptorp * iconwatchJ) <= 3.79) {
         iconwatchJ %= Math.max(1, 1);
      }
      if (4.33 == (encryptorp + libapminsightb0.length)) {
         encryptorp -= parseInt(`${encryptorp}`);
      }
          let iconsettingt: Array<any> = [540, 22, 153];
          let models_ = 0.0;
         encryptorp -= parseInt(`${encryptorp}`) + libapminsightb0.length;
         iconsettingt = [iconsettingt.length % (Math.max(2, 4))];
         models_ *= parseFloat(`${iconsettingt.length}`);
      invitef += "3";
   }
   if (5.16 == (mbnativeadvancedh / (Math.max(5, 2)))) {
      containerp += 1;
   }
   while (!invitef.startsWith(`${containerp}`)) {
      invitef = `${((pointL ? 1 : 3) % 3)}`;
      break;
   }
       let calendarD = String.fromCharCode(108,95,49,50,0);
       let bridgeo = String.fromCharCode(115,112,101,99,116,105,109,101,0);
       let yellowscoreballm = 0.0;
      let gnewarchdefaultsf = bridgeo == String.fromCharCode(106,110,108,117,100,117,102,120,0);
      do {
         bridgeo = `${bridgeo.length}`;
         if (gnewarchdefaultsf) {
            break;
         }
      } while ((3 <= calendarD.length) && gnewarchdefaultsf);
      if (yellowscoreballm >= 4.47) {
         bridgeo += `${calendarD.length}`;
      }
      let temperaturek = 8579093.0 <= yellowscoreballm;
      do {
         yellowscoreballm -= bridgeo.length;
         if (temperaturek) {
            break;
         }
      } while (((calendarD.length / 3) > 2 || (2.48 * yellowscoreballm) > 3.98) && temperaturek);
          let refreshborderlessz = String.fromCharCode(101,108,101,118,97,116,101,0);
         calendarD += `${(calendarD == String.fromCharCode(107,0) ? calendarD.length : parseInt(`${yellowscoreballm}`))}`;
         refreshborderlessz = `${refreshborderlessz.length + refreshborderlessz.length}`;
      let loadingspinnerH = yellowscoreballm <= 7307527.0;
      do {
         yellowscoreballm -= calendarD.length;
         if (loadingspinnerH) {
            break;
         }
      } while (((5 / (Math.max(9, parseInt(`${yellowscoreballm}`)))) == 1 && 2.96 == (yellowscoreballm / 2.9)) && loadingspinnerH);
         bridgeo += `${bridgeo.length + parseInt(`${yellowscoreballm}`)}`;
         bridgeo += `${3 / (Math.max(9, bridgeo.length))}`;
          let text5: Array<any> = [264, 696];
          let with_wdN = String.fromCharCode(100,101,115,116,105,110,97,116,105,111,110,95,119,95,57,0);
         bridgeo += `${2 >> (Math.min(5, calendarD.length))}`;
         text5.push(2);
         with_wdN += "2";
      while (5.70 < yellowscoreballm) {
          let greyarrowupM: Array<any> = [682, 668];
          let redscoreballr = String.fromCharCode(99,111,109,112,97,114,105,115,111,110,95,115,95,49,52,0);
          let auto_kP = String.fromCharCode(100,100,116,115,95,112,95,56,51,0);
         bridgeo += `${calendarD.length}`;
         greyarrowupM = [redscoreballr.length % (Math.max(8, auto_kP.length))];
         redscoreballr += `${(String.fromCharCode(107,0) == auto_kP ? auto_kP.length : greyarrowupM.length)}`;
         break;
      }
      klevin0 = `${invitef.length}`;
      pointL = containerp > 80.29 || statso;
   let pangleM = String.fromCharCode(49,120,57,114,120,48,0) == klevin0;
   do {
       let bellremindert = 5;
       let iconcurrentmatch8 = String.fromCharCode(119,95,49,51,95,115,116,114,110,105,99,109,112,0);
       let const_2X = 0.0;
         iconcurrentmatch8 = "3";
      if (4 < (bellremindert / (Math.max(2, 9)))) {
         iconcurrentmatch8 += `${iconcurrentmatch8.length % 1}`;
      }
         const_2X += parseFloat(`${bellremindert}`);
         bellremindert &= iconcurrentmatch8.length ^ bellremindert;
      if (iconcurrentmatch8.length >= bellremindert) {
         iconcurrentmatch8 = `${iconcurrentmatch8.length}`;
      }
         bellremindert ^= bellremindert + parseInt(`${const_2X}`);
       let scorepopsoundM = true;
      for (let z = 0; z < 2; z++) {
         const_2X -= parseFloat(`${3}`);
      }
          let reactnavigatione = String.fromCharCode(114,95,49,52,95,97,108,97,119,0);
          let iconlogoutP = false;
          let iconmore4 = 0.0;
         const_2X -= parseFloat(`${2 >> (Math.min(Math.abs(parseInt(`${iconmore4}`)), 5))}`);
         reactnavigatione = `${(1 >> (Math.min(1, Math.abs((iconlogoutP ? 1 : 4)))))}`;
         iconlogoutP = !reactnavigatione.startsWith(`${iconlogoutP}`);
         iconmore4 -= 3;
      klevin0 = `${changeO.length}`;
      if (pangleM) {
         break;
      }
   } while (((changeO.length % (Math.max(5, klevin0.length))) > 3) && pangleM);
      benefitJ = `${changeO.length}`;
   if (changeO.length < klevin0.length) {
      klevin0 = `${klevin0.length}`;
   }

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
       let stringsL = String.fromCharCode(100,95,51,48,95,119,97,118,112,97,99,107,0);
    let twitter_ = 1.0;
    let suboutp = true;
    let predictionbannersharedL = String.fromCharCode(99,101,110,116,114,101,95,106,95,49,57,0);
    let middlesoundl: Map<any, any> = new Map([[String.fromCharCode(117,112,100,97,116,101,95,111,95,57,48,0),String.fromCharCode(103,110,111,115,105,115,0)], [String.fromCharCode(104,95,57,57,95,97,116,116,97,99,104,101,100,0),String.fromCharCode(114,101,97,100,101,114,0)], [String.fromCharCode(98,95,56,52,95,115,101,108,101,99,116,105,111,110,0),String.fromCharCode(100,101,108,97,121,95,104,95,56,50,0)]]);
    let classesd: Array<any> = [String.fromCharCode(97,108,103,111,114,105,116,104,109,115,0), String.fromCharCode(103,101,110,99,102,103,115,0)];
    let heartY = 3.0;
    let yellows = String.fromCharCode(111,114,100,101,114,116,121,112,101,0);
    let dragclose7 = String.fromCharCode(119,95,57,48,95,114,101,108,101,118,97,110,116,0);
       let shareblackg = String.fromCharCode(107,95,50,56,95,116,114,101,101,99,111,100,101,114,0);
       let sina8 = 2.0;
       let logouserO = String.fromCharCode(110,101,116,119,111,114,107,115,0);
         shareblackg += "1";
          let sortw = 4;
         shareblackg += `${sortw * 1}`;
      for (let t = 0; t < 1; t++) {
         logouserO = `${(String.fromCharCode(52,0) == shareblackg ? logouserO.length : shareblackg.length)}`;
      }
         logouserO += `${(String.fromCharCode(87,0) == shareblackg ? parseInt(`${sina8}`) : shareblackg.length)}`;
      if (!logouserO.includes(shareblackg)) {
         shareblackg += `${shareblackg.length ^ 2}`;
      }
          let abidetectQ = 1.0;
          let basketballplayerplaceholderu = 1.0;
         sina8 -= parseInt(`${abidetectQ}`) | shareblackg.length;
         abidetectQ += parseFloat(`${parseInt(`${basketballplayerplaceholderu}`)}`);
          let selectO = String.fromCharCode(106,95,51,50,95,115,108,97,110,116,0);
          let saveY: Array<any> = [38, 105, 826];
          let tempd = 2;
         shareblackg += `${1 * shareblackg.length}`;
         selectO += "2";
         saveY = [1 | selectO.length];
         tempd -= tempd;
         sina8 += shareblackg.length;
       let buttona = 3;
       let countryR = 5;
      predictionbannersharedL = `${1 ^ shareblackg.length}`;
   while ((classesd.length + predictionbannersharedL.length) < 3 && 3 < (classesd.length + predictionbannersharedL.length)) {
      predictionbannersharedL = "2";
      break;
   }
       let goalj: Array<any> = [String.fromCharCode(114,101,99,111,118,101,114,101,100,95,56,95,51,54,0), String.fromCharCode(97,118,99,105,110,116,114,97,0), String.fromCharCode(106,111,98,113,0)];
       let subtextD = 2.0;
      let release_k4 = 6239734 <= goalj.length;
      do {
         goalj.push(2);
         if (release_k4) {
            break;
         }
      } while (release_k4 && (subtextD < goalj.length));
      for (let f = 0; f < 1; f++) {
         subtextD *= parseInt(`${subtextD}`) - 3;
      }
      for (let g = 0; g < 3; g++) {
         goalj.push(parseInt(`${subtextD}`) - goalj.length);
      }
          let bgvipsportX = String.fromCharCode(118,105,100,101,111,100,115,112,95,100,95,55,53,0);
         goalj = [1];
         bgvipsportX += "2";
      while (!goalj.includes(subtextD)) {
         subtextD *= parseInt(`${subtextD}`) * 1;
         break;
      }
      for (let g = 0; g < 2; g++) {
         goalj.push(parseInt(`${subtextD}`));
      }
      suboutp = 39.95 >= heartY;

    if (showloading) {

   while (predictionbannersharedL != String.fromCharCode(79,0)) {
      stringsL = `${middlesoundl.size >> (Math.min(Math.abs(2), 3))}`;
      break;
   }
   let sharedS = 7039875 <= classesd.length;
   do {
       let promotionQ = String.fromCharCode(102,116,97,98,95,55,95,52,48,0);
       let eact8: Map<any, any> = new Map([[String.fromCharCode(110,95,57,57,95,114,101,112,108,97,99,101,0),String.fromCharCode(108,101,103,97,99,121,0)], [String.fromCharCode(102,105,110,103,101,114,0),String.fromCharCode(115,119,105,122,122,108,101,100,0)], [String.fromCharCode(113,95,52,48,95,97,116,116,97,99,107,0),String.fromCharCode(115,102,114,97,109,101,0)]]);
      if (promotionQ.length == eact8.size) {
         promotionQ += `${promotionQ.length}`;
      }
       let listX = 4.0;
          let loginW = false;
          let loadingspinnere = true;
          let targetz = String.fromCharCode(98,95,50,95,97,116,116,114,105,98,117,116,101,0);
         listX -= (parseFloat(`${targetz == String.fromCharCode(80,0) ? targetz.length : eact8.size}`));
         loginW = (!loginW ? !loadingspinnere : !loginW);
         loadingspinnere = loginW && !loadingspinnere;
       let basketballmatchdetailbgp = 1.0;
      if ((basketballmatchdetailbgp * listX) <= 1.45 && 4.4 <= (1.45 * listX)) {
         basketballmatchdetailbgp *= parseFloat(`${parseInt(`${listX}`)}`);
      }
          let iconcurrentmatchP: Map<any, any> = new Map([[String.fromCharCode(113,95,55,56,95,106,111,98,113,0),717], [String.fromCharCode(103,95,50,55,95,109,105,103,114,97,116,105,111,110,0),492], [String.fromCharCode(108,112,99,109,95,53,95,57,48,0),812]]);
          let androidx: Array<any> = [222, 736, 284];
          let libfbjnij = 2.0;
         basketballmatchdetailbgp /= Math.max(parseFloat(`${1 << (Math.min(4, Math.abs(eact8.size)))}`), 4);
         iconcurrentmatchP.set(`${libfbjnij}`, parseInt(`${libfbjnij}`));
         androidx = [parseInt(`${libfbjnij}`) + 3];
      classesd = [(parseInt(`${twitter_}`) + (suboutp ? 3 : 1))];
      if (sharedS) {
         break;
      }
   } while ((2 > (predictionbannersharedL.length % (Math.max(4, 3)))) && sharedS);
      predictionbannersharedL += `${parseInt(`${heartY}`)}`;
      setIsRefreshing(true);
    }
    try {

   for (let g = 0; g < 2; g++) {
      classesd = [predictionbannersharedL.length];
   }
   let shrinkK = 8361128.0 >= heartY;
   do {
       let agreementV = 3.0;
       let telegramo = String.fromCharCode(101,120,112,101,99,116,0);
       let hooksR: Map<any, any> = new Map([[String.fromCharCode(112,108,97,99,101,0),184], [String.fromCharCode(99,114,101,100,101,110,116,105,97,108,115,95,51,95,51,56,0),43], [String.fromCharCode(112,97,110,101,95,101,95,52,0),717]]);
         telegramo += `${telegramo.length}`;
         telegramo += `${parseInt(`${agreementV}`)}`;
         agreementV /= Math.max(parseInt(`${agreementV}`) + telegramo.length, 2);
      while (!telegramo.includes(`${agreementV}`)) {
         agreementV *= (telegramo == String.fromCharCode(85,0) ? hooksR.size : telegramo.length);
         break;
      }
      while ((hooksR.size - parseInt(`${agreementV}`)) <= 3) {
          let modeK = 0;
          let liveshareR = 0.0;
         hooksR = new Map([[`${hooksR.size}`, 1]]);
         modeK *= parseInt(`${liveshareR}`) & 1;
         liveshareR /= Math.max(parseFloat(`${parseInt(`${liveshareR}`) | 1}`), 1);
         break;
      }
         telegramo += `${hooksR.size + parseInt(`${agreementV}`)}`;
      let thumbnailT = 9604481 >= hooksR.size;
      do {
         hooksR = new Map([[`${hooksR.size}`, hooksR.size]]);
         if (thumbnailT) {
            break;
         }
      } while (thumbnailT && (5 == telegramo.length));
       let iconqqL = String.fromCharCode(112,114,101,97,108,108,111,99,97,116,101,0);
       let themez = String.fromCharCode(112,111,108,121,95,116,95,51,56,0);
          let downloadedq = 4;
          let refreshj: Map<any, any> = new Map([[String.fromCharCode(100,105,102,0),true ], [String.fromCharCode(115,116,97,116,105,99,95,49,95,53,56,0),true ], [String.fromCharCode(116,117,114,98,117,108,101,110,99,101,0),false ]]);
          let executort = 0.0;
         iconqqL += `${parseInt(`${executort}`)}`;
         downloadedq <<= Math.min(Math.abs(1 + refreshj.size), 2);
         refreshj = new Map([[`${refreshj.size}`, downloadedq]]);
      heartY -= (String.fromCharCode(69,0) == telegramo ? parseInt(`${twitter_}`) : telegramo.length);
      if (shrinkK) {
         break;
      }
   } while ((1.21 > heartY) && shrinkK);
   if (stringsL.startsWith(predictionbannersharedL)) {
       let baselinez = String.fromCharCode(99,111,102,97,99,116,111,114,0);
       let turndownC = String.fromCharCode(107,95,57,52,95,105,115,112,97,99,107,101,100,0);
       let libtob5 = 5.0;
       let yingb = String.fromCharCode(107,95,51,49,95,115,116,114,111,110,103,0);
       let iconcalendaro = String.fromCharCode(119,95,54,57,95,111,114,105,103,105,110,0);
         libtob5 -= (turndownC == String.fromCharCode(80,0) ? turndownC.length : iconcalendaro.length);
      while (3.89 > (libtob5 * iconcalendaro.length)) {
         iconcalendaro += `${3 % (Math.max(4, yingb.length))}`;
         break;
      }
      for (let x = 0; x < 1; x++) {
          let airbnbstarselected4 = 0.0;
          let gmailz = false;
         turndownC = "2";
         airbnbstarselected4 *= (parseInt(`${airbnbstarselected4}`) & (gmailz ? 3 : 1));
         gmailz = !gmailz;
      }
         baselinez = `${turndownC.length << (Math.min(iconcalendaro.length, 3))}`;
      let castq = 8238861.0 >= libtob5;
      do {
         libtob5 *= 1 + baselinez.length;
         if (castq) {
            break;
         }
      } while (((libtob5 + 2.76) < 2.3) && castq);
         libtob5 *= 1 ^ baselinez.length;
      if (baselinez.endsWith(`${turndownC.length}`)) {
         turndownC += `${iconcalendaro.length}`;
      }
         libtob5 -= yingb.length;
      for (let k = 0; k < 2; k++) {
         baselinez += "1";
      }
      for (let g = 0; g < 3; g++) {
         libtob5 -= (yingb == String.fromCharCode(85,0) ? yingb.length : parseInt(`${libtob5}`));
      }
          let views5 = String.fromCharCode(99,104,101,99,107,109,97,114,107,0);
         yingb = `${yingb.length}`;
         views5 += "2";
         yingb += `${2 ^ turndownC.length}`;
          let grays = String.fromCharCode(102,97,105,108,0);
         yingb += `${(String.fromCharCode(77,0) == yingb ? grays.length : yingb.length)}`;
      while ((libtob5 / (Math.max(3.73, 9))) >= 1.94) {
         turndownC += `${parseInt(`${libtob5}`) / (Math.max(yingb.length, 9))}`;
         break;
      }
      if (turndownC != baselinez) {
         baselinez = `${baselinez.length * 2}`;
      }
      predictionbannersharedL = "3";
   }
      await queryClient.resetQueries(["HomePage", id]);

      classesd.push(parseInt(`${heartY}`));
   if ((middlesoundl.size + predictionbannersharedL.length) >= 3 || 2 >= (predictionbannersharedL.length + 3)) {
      middlesoundl = new Map([[`${suboutp}`, 3 ^ parseInt(`${heartY}`)]]);
   }
       let hometeamfield3 = 5;
       let predictionbannersharedB = 1.0;
          let showless6 = false;
         hometeamfield3 *= 2 * parseInt(`${predictionbannersharedB}`);
         showless6 = (!showless6 ? showless6 : !showless6);
       let activeY = 1;
       let confirmationY = 0;
          let iconarrowrightwhitew = true;
          let whatsapp1 = 2;
          let backiconq = String.fromCharCode(120,95,52,48,95,116,117,110,110,101,108,105,110,103,0);
         confirmationY %= Math.max(2, 3);
         iconarrowrightwhitew = String.fromCharCode(113,0) == backiconq;
         whatsapp1 += 3;
         backiconq = "3 ^ whatsapp1";
       let informationJ = String.fromCharCode(102,101,97,116,117,114,101,115,95,112,95,56,52,0);
          let smallsoundO: Array<any> = [984, 835];
          let b_viewv = String.fromCharCode(121,95,49,53,95,99,108,97,115,115,105,102,115,0);
         predictionbannersharedB /= Math.max(5, activeY);
         smallsoundO = [b_viewv.length];
         b_viewv = `${2 + b_viewv.length}`;
         activeY %= Math.max(5, activeY - confirmationY);
      predictionbannersharedL += `${parseInt(`${heartY}`)}`;

      setIsRefreshing(false);

   let overW = middlesoundl.size >= 6863570;
   do {
      middlesoundl = new Map([[`${classesd.length}`, classesd.length]]);
      if (overW) {
         break;
      }
   } while ((Array.from(middlesoundl.keys()).includes(`${heartY}`)) && overW);
   for (let h = 0; h < 2; h++) {
      classesd = [3 * parseInt(`${twitter_}`)];
   }
   let libcrashsdkm = String.fromCharCode(106,101,57,118,0) == stringsL;
   do {
      stringsL += `${middlesoundl.size & 2}`;
      if (libcrashsdkm) {
         break;
      }
   } while ((yellows == stringsL) && libcrashsdkm);
      setNavId(id);

   for (let l = 0; l < 2; l++) {
       let catagoryf = true;
          let libloggerr = true;
          let linkY = String.fromCharCode(115,105,103,110,97,108,95,111,95,55,54,0);
          let attributedstring0: Map<any, any> = new Map([[String.fromCharCode(112,112,99,99,111,109,109,111,110,95,105,95,52,57,0),527], [String.fromCharCode(113,95,53,48,95,111,103,103,108,101,0),168]]);
         catagoryf = !linkY.endsWith(`${catagoryf}`);
         libloggerr = attributedstring0.size >= 27;
         linkY += "1";
         attributedstring0.set(`${libloggerr}`, 2 * attributedstring0.size);
         catagoryf = !catagoryf;
         catagoryf = (!catagoryf ? !catagoryf : !catagoryf);
      heartY *= parseInt(`${twitter_}`);
   }
      predictionbannersharedL = `${middlesoundl.size / 1}`;
   let whitetickT = yellows == String.fromCharCode(104,105,100,119,101,0);
   do {
      yellows = `${middlesoundl.size}`;
      if (whitetickT) {
         break;
      }
   } while (whitetickT && ((middlesoundl.size << (Math.min(Math.abs(5), 3))) < 5));
      setShowHomeLoading(false);

   let penaltyi = middlesoundl.size >= 7138566;
   do {
       let empty5 = String.fromCharCode(119,95,57,48,95,99,111,110,102,0);
      for (let g = 0; g < 1; g++) {
         empty5 = `${(empty5 == String.fromCharCode(100,0) ? empty5.length : empty5.length)}`;
      }
      for (let i = 0; i < 1; i++) {
         empty5 += `${empty5.length}`;
      }
         empty5 = "1";
      middlesoundl = new Map([[dragclose7, dragclose7.length - empty5.length]]);
      if (penaltyi) {
         break;
      }
   } while ((4 <= (2 | yellows.length) || 2 <= (yellows.length | middlesoundl.size)) && penaltyi);
   while (dragclose7.length >= stringsL.length) {
       let unreadZ = false;
      let screenC = unreadZ ? !unreadZ : unreadZ;
      do {
         unreadZ = !unreadZ;
         if (screenC) {
            break;
         }
      } while (screenC && (unreadZ || !unreadZ));
          let configP = 1;
          let hookx = String.fromCharCode(100,95,56,52,95,116,114,97,118,101,108,0);
         unreadZ = hookx.length == configP;
         unreadZ = unreadZ || !unreadZ;
      dragclose7 += `${dragclose7.length ^ 1}`;
      break;
   }
   while (stringsL.endsWith(`${classesd.length}`)) {
      stringsL = `${(predictionbannersharedL == String.fromCharCode(65,0) ? parseInt(`${heartY}`) : predictionbannersharedL.length)}`;
      break;
   }

      return;
    } catch (error) {

      middlesoundl = new Map([[`${classesd.length}`, classesd.length / 3]]);
      stringsL = `${classesd.length}`;
   for (let o = 0; o < 1; o++) {
      classesd = [parseInt(`${heartY}`) | 3];
   }
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    const handleTabPress = async () => {
       let penaltymatchiconc = 5.0;
    let historyf = 4;
    let iconsharec: Map<any, any> = new Map([[String.fromCharCode(111,95,52,55,95,117,110,108,105,110,107,0),994], [String.fromCharCode(97,99,116,105,118,97,116,101,100,0),673], [String.fromCharCode(109,101,103,101,100,95,109,95,49,56,0),174]]);
    let notificationfillempty0 = 1.0;
    let sigmobM: Array<any> = [958, 9];
    let libnmsi = String.fromCharCode(112,117,115,104,98,97,99,107,95,120,95,53,56,0);
    let elements1: Array<any> = [982, 106, 635];
    let tumbnailV = String.fromCharCode(101,110,117,109,0);
    let play_ = String.fromCharCode(98,114,110,103,95,119,95,57,0);
    let valuess = 2.0;
    let libcrashsdk0: Array<any> = [849, 649, 42];
    let plusG = 5.0;
    let dragclose4 = String.fromCharCode(122,95,50,49,95,108,101,114,116,0);
    let iconplayg = 4.0;
    let libhermesf = 2.0;
    let liveendmodallogor = String.fromCharCode(115,117,98,101,120,112,95,48,95,50,53,0);
    let rocket2 = String.fromCharCode(112,105,112,101,108,105,110,101,115,95,119,95,53,52,0);
    let questiconZ: Array<any> = [356, 14, 349];
      libnmsi += `${2 + parseInt(`${valuess}`)}`;
      penaltymatchiconc *= 2;
   for (let h = 0; h < 3; h++) {
      plusG -= libcrashsdk0.length + tumbnailV.length;
   }
      iconplayg -= parseFloat(`${parseInt(`${iconplayg}`) * parseInt(`${plusG}`)}`);

      if (isFocused && !isRefreshing) {

       let predictionbanners = 3.0;
       let homeactiveB = 3.0;
         homeactiveB *= parseFloat(`${parseInt(`${predictionbanners}`)}`);
      let floating3 = 5611121.0 <= predictionbanners;
      do {
          let rules_ = 2.0;
          let textinpute = String.fromCharCode(103,101,115,116,117,114,101,115,95,55,95,57,57,0);
          let armvaH: Array<any> = [String.fromCharCode(112,101,110,100,105,110,103,115,0), String.fromCharCode(97,95,55,54,95,115,101,116,97,99,116,105,118,101,107,101,121,0), String.fromCharCode(103,101,116,115,116,114,95,119,95,55,49,0)];
          let expandK = String.fromCharCode(110,95,57,49,95,112,117,98,107,101,121,104,97,115,104,0);
          let renewz: Map<any, any> = new Map([[String.fromCharCode(113,95,49,51,95,107,105,110,100,115,0),String.fromCharCode(101,105,110,116,114,95,55,95,53,54,0)], [String.fromCharCode(103,95,51,56,95,115,112,108,97,116,0),String.fromCharCode(102,97,118,111,114,105,116,101,95,106,95,50,53,0)], [String.fromCharCode(115,117,98,112,97,99,107,101,116,115,95,48,95,56,50,0),String.fromCharCode(116,95,56,51,95,114,101,99,111,110,115,116,114,117,99,116,101,100,0)]]);
         predictionbanners += parseFloat(`${3 / (Math.max(8, parseInt(`${predictionbanners}`)))}`);
         rules_ *= 3;
         textinpute = `${armvaH.length * 2}`;
         armvaH.push(renewz.size / (Math.max(textinpute.length, 4)));
         expandK += `${armvaH.length & 3}`;
         renewz = new Map([[`${renewz.size}`, armvaH.length]]);
         if (floating3) {
            break;
         }
      } while (floating3 && ((1.1 - predictionbanners) <= 2.8 || 1.1 <= (predictionbanners - homeactiveB)));
         predictionbanners -= parseFloat(`${parseInt(`${predictionbanners}`) ^ parseInt(`${homeactiveB}`)}`);
       let bello = 5;
       let alert1 = 2;
      for (let z = 0; z < 1; z++) {
         predictionbanners -= parseFloat(`${parseInt(`${homeactiveB}`) | 3}`);
      }
      for (let m = 0; m < 3; m++) {
         homeactiveB -= parseFloat(`${alert1}`);
      }
      historyf *= parseInt(`${notificationfillempty0}`) + 2;
   if ((parseFloat(`${libnmsi.length}`) + valuess) >= 5.28) {
      libnmsi = `${tumbnailV.length}`;
   }
       let emojiB = String.fromCharCode(102,95,53,95,100,101,110,111,105,115,105,110,103,0);
         emojiB += `${1 % (Math.max(8, emojiB.length))}`;
      for (let r = 0; r < 2; r++) {
         emojiB += `${emojiB.length % 2}`;
      }
         emojiB += `${emojiB.length}`;
      sigmobM.push(parseInt(`${valuess}`));
   let telemetryH = iconsharec.size <= 8648986;
   do {
      iconsharec = new Map([[`${iconsharec.size}`, iconsharec.size ^ parseInt(`${iconplayg}`)]]);
      if (telemetryH) {
         break;
      }
   } while ((iconsharec.get(`${iconplayg}`) == null) && telemetryH);
        setIsRefreshing((prevIsRefreshing) => {

      valuess *= parseFloat(`${parseInt(`${penaltymatchiconc}`)}`);
       let greytickY = String.fromCharCode(101,110,101,114,103,121,95,109,95,51,57,0);
       let faviconN = String.fromCharCode(113,95,54,56,95,98,114,111,97,100,99,97,115,116,105,110,103,0);
       let runtimescheduleru = String.fromCharCode(114,101,113,117,101,115,116,95,55,95,52,0);
          let umeng4 = String.fromCharCode(109,95,49,53,95,115,105,103,116,101,114,109,0);
         runtimescheduleru = `${(runtimescheduleru == String.fromCharCode(51,0) ? runtimescheduleru.length : faviconN.length)}`;
         umeng4 += `${umeng4.length - umeng4.length}`;
      for (let o = 0; o < 2; o++) {
          let sheetc: Map<any, any> = new Map([[String.fromCharCode(117,95,56,95,115,105,109,100,0),746], [String.fromCharCode(114,109,115,105,112,114,95,102,95,57,56,0),132]]);
          let umengX = 3.0;
          let vignette9: Map<any, any> = new Map([[String.fromCharCode(99,112,117,105,110,102,111,95,98,95,56,53,0),String.fromCharCode(116,114,97,110,115,105,116,105,111,110,101,100,95,122,95,54,48,0)], [String.fromCharCode(109,112,101,103,97,117,100,105,111,100,97,116,97,0),String.fromCharCode(117,110,112,117,98,108,105,115,104,95,99,95,51,53,0)], [String.fromCharCode(112,95,50,49,0),String.fromCharCode(102,95,48,95,111,115,109,111,115,0)]]);
          let bannerz = 0.0;
         faviconN = `${runtimescheduleru.length * faviconN.length}`;
         sheetc = new Map([[`${vignette9.size}`, 2 % (Math.max(6, parseInt(`${umengX}`)))]]);
         umengX -= vignette9.size - 3;
         bannerz /= Math.max(parseFloat(`${sheetc.size * 3}`), 1);
      }
      for (let v = 0; v < 1; v++) {
         faviconN += `${greytickY.length}`;
      }
         runtimescheduleru = `${greytickY.length}`;
      if (faviconN == String.fromCharCode(105,0) && runtimescheduleru == String.fromCharCode(73,0)) {
         faviconN += `${faviconN.length}`;
      }
          let icondefaultthumbnailG = String.fromCharCode(97,115,121,110,99,104,114,111,110,111,117,115,0);
         greytickY = "3";
         icondefaultthumbnailG += `${icondefaultthumbnailG.length << (Math.min(Math.abs(1), 5))}`;
      let megaphoneN = String.fromCharCode(117,107,122,108,111,117,107,116,98,53,0) == runtimescheduleru;
      do {
          let textlayoutmanagery = 3.0;
          let matchesd = 5.0;
          let completeD = false;
          let imagenetworkerro = String.fromCharCode(117,95,50,57,95,100,101,99,108,97,114,101,100,0);
         runtimescheduleru = `${(String.fromCharCode(81,0) == imagenetworkerro ? parseInt(`${matchesd}`) : imagenetworkerro.length)}`;
         textlayoutmanagery -= (parseFloat(`${(completeD ? 2 : 5) % (Math.max(parseInt(`${textlayoutmanagery}`), 2))}`));
         matchesd *= (parseInt(`${textlayoutmanagery}`) / (Math.max(4, (completeD ? 4 : 4))));
         if (megaphoneN) {
            break;
         }
      } while (megaphoneN && (greytickY != runtimescheduleru));
         faviconN = `${(String.fromCharCode(97,0) == runtimescheduleru ? runtimescheduleru.length : faviconN.length)}`;
      if (faviconN != runtimescheduleru) {
         runtimescheduleru += `${3 << (Math.min(4, runtimescheduleru.length))}`;
      }
      iconsharec = new Map([[`${libcrashsdk0.length}`, faviconN.length % (Math.max(1, 2))]]);
       let filedk = String.fromCharCode(119,104,111,108,101,95,108,95,52,53,0);
       let attributedstringD = String.fromCharCode(100,105,121,102,112,95,118,95,56,55,0);
      for (let t = 0; t < 2; t++) {
         attributedstringD = `${filedk.length}`;
      }
      let foregroundq = 6804868 <= filedk.length;
      do {
         filedk += `${(filedk == String.fromCharCode(119,0) ? filedk.length : attributedstringD.length)}`;
         if (foregroundq) {
            break;
         }
      } while (foregroundq && (5 >= filedk.length && attributedstringD != String.fromCharCode(120,0)));
      for (let v = 0; v < 1; v++) {
         filedk += `${attributedstringD.length}`;
      }
         filedk += `${2 & attributedstringD.length}`;
      let libcxxcomponentsn = filedk == String.fromCharCode(95,104,55,120,53,49,107,0);
      do {
         filedk = `${1 - filedk.length}`;
         if (libcxxcomponentsn) {
            break;
         }
      } while (libcxxcomponentsn && (!filedk.includes(`${attributedstringD.length}`)));
          let empty5 = true;
         attributedstringD = `${3 - attributedstringD.length}`;
      libcrashsdk0 = [parseInt(`${notificationfillempty0}`) << (Math.min(play_.length, 2))];
   for (let n = 0; n < 3; n++) {
      elements1 = [3 + historyf];
   }
          if (prevIsRefreshing) {

      sigmobM = [parseInt(`${penaltymatchiconc}`)];
   while (2.30 <= (valuess - 5.89)) {
       let pingR: Array<any> = [970, 931, 996];
       let viewst = String.fromCharCode(119,95,55,56,95,114,101,116,114,105,101,114,0);
       let iconnewchatd = String.fromCharCode(117,105,110,116,112,111,119,0);
       let shrunkH: Array<any> = [605, 63, 257];
       let reactG = 3.0;
      let unselectedB = viewst == String.fromCharCode(119,52,49,107,120,0);
      do {
         viewst += `${2 ^ iconnewchatd.length}`;
         if (unselectedB) {
            break;
         }
      } while (unselectedB && (5 > (viewst.length & pingR.length)));
         shrunkH = [1];
      for (let r = 0; r < 1; r++) {
         iconnewchatd += "2";
      }
      let league5 = shrunkH.length <= 5209563;
      do {
          let skipS: Map<any, any> = new Map([[String.fromCharCode(115,95,55,55,95,120,116,101,97,0),630], [String.fromCharCode(100,105,103,101,115,116,98,121,111,98,106,95,113,95,57,0),918], [String.fromCharCode(112,95,56,49,95,114,101,108,97,117,110,99,104,0),936]]);
         shrunkH.push(iconnewchatd.length);
         skipS = new Map([[`${skipS.size}`, skipS.size]]);
         if (league5) {
            break;
         }
      } while (((2 ^ shrunkH.length) < 5 && 2.48 < (1.81 - reactG)) && league5);
          let clear9 = 2;
         viewst = `${parseInt(`${reactG}`) | clear9}`;
       let iconarrowrightwhite1 = String.fromCharCode(101,120,116,101,110,100,95,106,95,50,48,0);
       let bgvipsportT = String.fromCharCode(114,117,110,116,105,109,101,95,110,95,53,49,0);
          let iconlogoutP: Array<any> = [String.fromCharCode(106,95,53,51,95,103,100,97,116,97,0), String.fromCharCode(122,95,51,56,95,109,97,116,101,114,105,97,108,0), String.fromCharCode(118,115,97,100,95,104,95,49,0)];
         iconnewchatd += `${(String.fromCharCode(89,0) == bgvipsportT ? iconlogoutP.length : bgvipsportT.length)}`;
      while ((4 | shrunkH.length) <= 4) {
         shrunkH.push((iconnewchatd == String.fromCharCode(76,0) ? parseInt(`${reactG}`) : iconnewchatd.length));
         break;
      }
      for (let s = 0; s < 1; s++) {
         reactG += parseFloat(`${2}`);
      }
      while (4 >= (3 >> (Math.min(5, shrunkH.length)))) {
         shrunkH = [bgvipsportT.length * 2];
         break;
      }
         iconarrowrightwhite1 = `${1 ^ iconarrowrightwhite1.length}`;
      valuess -= parseFloat(`${shrunkH.length}`);
      break;
   }
      elements1 = [dragclose4.length << (Math.min(Math.abs(1), 5))];
       let tickeds = 1.0;
       let fastE: Map<any, any> = new Map([[String.fromCharCode(115,101,110,100,105,110,103,95,111,95,55,56,0),677], [String.fromCharCode(112,115,102,98,95,97,95,53,51,0),891], [String.fromCharCode(100,95,50,56,95,114,117,98,121,0),278]]);
       let productF = String.fromCharCode(106,95,55,95,100,116,108,115,0);
      let basketballiconP = fastE.size <= 6530780;
      do {
          let orangetick_: Map<any, any> = new Map([[String.fromCharCode(101,95,52,56,95,97,112,97,114,97,109,115,0),true ], [String.fromCharCode(111,116,111,102,0),true ]]);
         fastE = new Map([[`${fastE.size}`, fastE.size]]);
         orangetick_ = new Map([[`${orangetick_.size}`, 2 + orangetick_.size]]);
         if (basketballiconP) {
            break;
         }
      } while (((fastE.size % 1) == 3 || (fastE.size % (Math.max(2, productF.length))) == 1) && basketballiconP);
      while (4.79 > (tickeds / (Math.max(parseFloat(`${fastE.size}`), 2))) || (4.79 / (Math.max(2, tickeds))) > 3.14) {
         fastE = new Map([[`${fastE.size}`, fastE.size]]);
         break;
      }
      let libreactnativejniR = fastE.size <= 5450811;
      do {
         fastE = new Map([[`${fastE.size}`, fastE.size]]);
         if (libreactnativejniR) {
            break;
         }
      } while (libreactnativejniR && (2 == (fastE.size / (Math.max(6, parseInt(`${tickeds}`))))));
          let emptyI: Array<any> = [String.fromCharCode(112,97,114,101,110,116,115,0), String.fromCharCode(110,101,119,101,115,116,95,114,95,55,49,0), String.fromCharCode(121,101,108,108,111,119,0)];
         tickeds += parseFloat(`${parseInt(`${tickeds}`) % (Math.max(productF.length, 7))}`);
         emptyI = [2];
       let iconadslinkC = String.fromCharCode(122,95,54,54,95,105,111,115,116,114,101,97,109,0);
       let blackC = String.fromCharCode(118,101,99,116,111,114,100,95,113,95,56,50,0);
      if (blackC.includes(`${tickeds}`)) {
         tickeds += parseFloat(`${fastE.size}`);
      }
         tickeds *= parseFloat(`${fastE.size}`);
          let smallbrightnesst = String.fromCharCode(99,108,111,115,101,115,111,99,107,101,116,95,113,95,55,0);
          let libfollyX: Array<any> = [92, 143, 31];
          let w_imageT: Array<any> = [173, 502, 910];
         tickeds -= parseFloat(`${1 << (Math.min(5, blackC.length))}`);
         smallbrightnesst += `${smallbrightnesst.length}`;
         libfollyX = [libfollyX.length * 3];
         w_imageT.push(3 >> (Math.min(1, smallbrightnesst.length)));
         fastE.set(productF, productF.length);
      liveendmodallogor = `${parseInt(`${valuess}`) ^ parseInt(`${iconplayg}`)}`;
            return prevIsRefreshing; 
          } else {

   while (libhermesf == notificationfillempty0) {
       let halfy: Map<any, any> = new Map([[String.fromCharCode(115,117,112,112,111,114,116,101,100,95,118,95,53,54,0),true ], [String.fromCharCode(114,95,50,95,116,105,99,107,101,114,0),false ]]);
       let videobufferloadingu = String.fromCharCode(112,95,50,53,95,109,117,116,97,116,105,111,110,0);
       let libfb4 = 3.0;
       let handler3: Array<any> = [String.fromCharCode(120,95,54,52,95,117,116,103,111,105,110,103,0), String.fromCharCode(116,97,107,100,115,112,95,121,95,55,50,0)];
       let basketballc = String.fromCharCode(112,108,111,116,95,50,95,53,52,0);
      for (let g = 0; g < 3; g++) {
         basketballc += `${basketballc.length}`;
      }
      let episodesD = handler3.length <= 8892746;
      do {
          let brightnessn = 1.0;
          let canvas5 = String.fromCharCode(99,111,108,105,110,101,97,114,0);
          let whitebellR = 1.0;
          let leaguedetailsbgQ = false;
         handler3.push(((leaguedetailsbgQ ? 3 : 3)));
         brightnessn += parseFloat(`${parseInt(`${whitebellR}`)}`);
         canvas5 += `${parseInt(`${whitebellR}`) + 2}`;
         leaguedetailsbgQ = (whitebellR / (Math.max(1, brightnessn))) <= 42.81;
         if (episodesD) {
            break;
         }
      } while (episodesD && (1 < handler3.length));
       let detailu = String.fromCharCode(112,97,99,107,101,114,95,106,95,52,56,0);
       let statisticsactiveN = String.fromCharCode(120,95,50,56,95,109,105,108,108,105,115,101,99,111,110,100,115,0);
      while (basketballc.length == handler3.length) {
         handler3.push(handler3.length);
         break;
      }
         statisticsactiveN = "2";
       let scheduleM: Map<any, any> = new Map([[String.fromCharCode(113,95,49,54,95,112,114,101,100,0),253], [String.fromCharCode(99,95,55,49,95,112,114,105,109,97,114,105,108,121,0),194], [String.fromCharCode(108,115,102,108,115,112,0),355]]);
      let customi = libfb4 <= 5753418.0;
      do {
         libfb4 -= parseFloat(`${2 & statisticsactiveN.length}`);
         if (customi) {
            break;
         }
      } while (customi && (basketballc.length == 2));
      for (let q = 0; q < 3; q++) {
         videobufferloadingu = `${scheduleM.size}`;
      }
         halfy = new Map([[statisticsactiveN, 3 + statisticsactiveN.length]]);
      if (scheduleM.size >= basketballc.length) {
         scheduleM = new Map([[basketballc, detailu.length]]);
      }
      let libavfilterz = halfy.size >= 5892084;
      do {
         halfy = new Map([[`${scheduleM.size}`, 2]]);
         if (libavfilterz) {
            break;
         }
      } while ((2 >= (1 - halfy.size) && 2 >= (basketballc.length - 1)) && libavfilterz);
      let orientationO = basketballc == String.fromCharCode(48,109,114,0);
      do {
         basketballc += `${scheduleM.size}`;
         if (orientationO) {
            break;
         }
      } while (orientationO && ((3 ^ basketballc.length) >= 2 && (handler3.length ^ 3) >= 3));
         basketballc = `${parseInt(`${libfb4}`)}`;
         scheduleM = new Map([[`${halfy.size}`, 3 << (Math.min(1, detailu.length))]]);
         libfb4 *= parseFloat(`${videobufferloadingu.length << (Math.min(Math.abs(2), 5))}`);
      notificationfillempty0 += parseFloat(`${libnmsi.length}`);
      break;
   }
      notificationfillempty0 *= parseFloat(`${elements1.length & parseInt(`${plusG}`)}`);
   if (5.80 == (plusG - 3.27)) {
      sigmobM.push(libcrashsdk0.length);
   }
   let classesB = notificationfillempty0 <= 8763385.0;
   do {
       let bgvipxvodE = 2.0;
       let usernameN = false;
       let logouser9 = String.fromCharCode(98,105,116,105,122,101,110,95,113,95,54,57,0);
       let c_imageH = String.fromCharCode(115,113,108,108,111,103,0);
      while (logouser9.length < c_imageH.length) {
         logouser9 += `${logouser9.length}`;
         break;
      }
       let whistleorangeW = String.fromCharCode(111,95,50,50,95,102,108,97,103,115,0);
       let tickedK = String.fromCharCode(101,95,54,50,95,98,114,111,107,101,110,0);
      if (5 <= (whistleorangeW.length * 1) || (parseInt(`${bgvipxvodE}`) - whistleorangeW.length) <= 1) {
         bgvipxvodE *= tickedK.length >> (Math.min(Math.abs(2), 4));
      }
      let combined0 = 6186075 >= whistleorangeW.length;
      do {
          let arrowupY = String.fromCharCode(102,95,57,55,95,105,104,100,114,0);
          let membershipA = 3.0;
          let utilss: Map<any, any> = new Map([[String.fromCharCode(102,117,108,102,105,108,108,0),true ], [String.fromCharCode(101,97,103,97,105,110,95,106,95,50,52,0),false ]]);
          let iconpipexpandw = String.fromCharCode(117,102,102,101,114,95,49,95,51,48,0);
          let iconpointscoreu = String.fromCharCode(99,104,111,111,115,105,110,103,95,122,95,52,55,0);
         whistleorangeW += `${((usernameN ? 5 : 2) >> (Math.min(c_imageH.length, 3)))}`;
         arrowupY += `${parseInt(`${membershipA}`)}`;
         membershipA -= parseFloat(`${iconpipexpandw.length >> (Math.min(iconpointscoreu.length, 2))}`);
         utilss = new Map([[iconpointscoreu, 1]]);
         iconpipexpandw += `${(String.fromCharCode(99,0) == iconpointscoreu ? utilss.size : iconpointscoreu.length)}`;
         if (combined0) {
            break;
         }
      } while ((!usernameN) && combined0);
          let unreadZ = 1;
          let statisticsinactiveE: Array<any> = [79, 528, 735];
          let savea = String.fromCharCode(111,102,102,105,99,105,97,108,95,118,95,50,49,0);
         c_imageH += `${3 | unreadZ}`;
         unreadZ /= Math.max((String.fromCharCode(85,0) == savea ? statisticsinactiveE.length : savea.length), 3);
         statisticsinactiveE.push(2 ^ statisticsinactiveE.length);
      while (usernameN) {
         usernameN = !usernameN;
         break;
      }
         c_imageH += `${tickedK.length * parseInt(`${bgvipxvodE}`)}`;
         c_imageH += `${c_imageH.length * 3}`;
      if (tickedK.length >= 1) {
          let disconnected4 = String.fromCharCode(101,95,52,48,95,116,121,111,101,0);
         logouser9 = `${c_imageH.length & 3}`;
         disconnected4 += `${disconnected4.length ^ disconnected4.length}`;
      }
      let codeM = 7094284.0 <= bgvipxvodE;
      do {
          let lightT = String.fromCharCode(97,103,103,114,101,103,97,116,111,114,95,110,95,53,51,0);
          let filedM: Map<any, any> = new Map([[String.fromCharCode(99,95,49,48,95,115,119,97,98,0),0], [String.fromCharCode(113,95,54,48,95,102,105,108,108,101,100,0),42], [String.fromCharCode(101,120,116,101,110,100,101,101,0),426]]);
         bgvipxvodE *= tickedK.length;
         lightT += `${filedM.size << (Math.min(lightT.length, 3))}`;
         filedM.set(`${lightT}`, filedM.size);
         if (codeM) {
            break;
         }
      } while ((4.70 <= (whistleorangeW.length - bgvipxvodE)) && codeM);
         logouser9 += `${1 ^ parseInt(`${bgvipxvodE}`)}`;
      for (let v = 0; v < 3; v++) {
         usernameN = c_imageH.length < 85;
      }
      notificationfillempty0 += parseFloat(`${libnmsi.length}`);
      if (classesB) {
         break;
      }
   } while ((notificationfillempty0 < 4.3) && classesB);
            return true; 
          }
        });

   if ((libhermesf * 1.51) > 1.49 && (libhermesf - 1.51) > 2.49) {
      libhermesf *= parseFloat(`${parseInt(`${iconplayg}`) >> (Math.min(Math.abs(3), 5))}`);
   }
   if ((4 << (Math.min(5, tumbnailV.length))) <= 3 || (sigmobM.length << (Math.min(tumbnailV.length, 4))) <= 4) {
      tumbnailV += `${iconsharec.size >> (Math.min(Math.abs(2), 1))}`;
   }
       let baselineb = String.fromCharCode(99,111,110,116,97,105,110,105,110,103,95,57,95,52,56,0);
       let iconnewsshare4: Map<any, any> = new Map([[String.fromCharCode(115,95,53,51,95,99,114,97,115,104,108,121,116,105,99,115,0),true ], [String.fromCharCode(98,105,110,100,108,105,115,116,95,101,95,50,56,0),false ], [String.fromCharCode(102,114,101,113,117,101,110,99,121,95,113,95,49,48,48,0),false ]]);
       let baiduadsS = String.fromCharCode(110,105,115,116,110,105,100,95,50,95,57,54,0);
         iconnewsshare4 = new Map([[`${iconnewsshare4.size}`, 3 - baselineb.length]]);
      for (let d = 0; d < 2; d++) {
         iconnewsshare4 = new Map([[`${iconnewsshare4.size}`, 3 - iconnewsshare4.size]]);
      }
          let attributedstringu = 3;
         iconnewsshare4 = new Map([[`${iconnewsshare4.size}`, baselineb.length]]);
         attributedstringu ^= attributedstringu / (Math.max(attributedstringu, 9));
      for (let j = 0; j < 1; j++) {
         iconnewsshare4 = new Map([[`${iconnewsshare4.size}`, baselineb.length / (Math.max(1, iconnewsshare4.size))]]);
      }
      let iconpipexpand4 = iconnewsshare4.size <= 7204269;
      do {
         iconnewsshare4 = new Map([[`${iconnewsshare4.size}`, (String.fromCharCode(51,0) == baiduadsS ? baiduadsS.length : iconnewsshare4.size)]]);
         if (iconpipexpand4) {
            break;
         }
      } while ((iconnewsshare4.size < 1) && iconpipexpand4);
       let ewarded2: Array<any> = [582, 958];
       let progressE: Array<any> = [798, 717];
         iconnewsshare4.set(baiduadsS, 3 - ewarded2.length);
      let context9 = 8699951 <= progressE.length;
      do {
          let ewarded3 = true;
         progressE.push(((ewarded3 ? 1 : 3) ^ 2));
         if (context9) {
            break;
         }
      } while ((ewarded2.includes(progressE.length)) && context9);
      while (1 >= (5 + ewarded2.length) || 2 >= (5 + baselineb.length)) {
          let main_ve = String.fromCharCode(114,105,112,101,109,100,0);
         baselineb = `${baselineb.length | baiduadsS.length}`;
         main_ve = `${main_ve.length}`;
         break;
      }
      play_ += `${sigmobM.length}`;
   for (let m = 0; m < 2; m++) {
       let delegate_x3 = String.fromCharCode(116,95,49,95,97,117,116,111,115,99,114,111,108,108,105,110,103,0);
       let privatechatbgx = true;
          let smallorangemanF = String.fromCharCode(108,95,52,53,95,109,111,100,97,108,108,121,0);
          let iconclosewhitey = 4.0;
          let plusn = String.fromCharCode(97,100,118,97,110,99,101,100,95,105,95,53,48,0);
         privatechatbgx = parseFloat(`${delegate_x3.length}`) > iconclosewhitey;
         smallorangemanF += `${plusn.length}`;
         iconclosewhitey *= (parseFloat(`${smallorangemanF == String.fromCharCode(69,0) ? plusn.length : smallorangemanF.length}`));
      while (2 >= delegate_x3.length) {
         privatechatbgx = ((delegate_x3.length ^ (!privatechatbgx ? delegate_x3.length : 24)) <= 24);
         break;
      }
      if (delegate_x3.startsWith(`${privatechatbgx}`)) {
         privatechatbgx = delegate_x3.length < 67;
      }
      while (!privatechatbgx) {
         delegate_x3 = `${(String.fromCharCode(115,0) == delegate_x3 ? (privatechatbgx ? 5 : 1) : delegate_x3.length)}`;
         break;
      }
      let greytick2 = String.fromCharCode(121,54,52,122,116,51,113,98,111,110,0) == delegate_x3;
      do {
          let gradlei = 5.0;
          let homeloadinge = String.fromCharCode(102,105,108,109,95,98,95,53,53,0);
         delegate_x3 += `${homeloadinge.length}`;
         gradlei *= parseInt(`${gradlei}`) ^ 3;
         homeloadinge += `${parseInt(`${gradlei}`) | parseInt(`${gradlei}`)}`;
         if (greytick2) {
            break;
         }
      } while ((delegate_x3.length > 2) && greytick2);
         privatechatbgx = (92 >= ((privatechatbgx ? 92 : delegate_x3.length) % (Math.max(3, delegate_x3.length))));
      libhermesf -= parseFloat(`${parseInt(`${penaltymatchiconc}`) % 3}`);
   }
        await handleRefresh(navId, true);

   let buffery = libcrashsdk0.length >= 6377744;
   do {
      libcrashsdk0.push(2);
      if (buffery) {
         break;
      }
   } while ((!sigmobM.includes(libcrashsdk0.length)) && buffery);
   if (2 <= (historyf + 1)) {
       let gradleU = String.fromCharCode(113,95,49,48,48,95,118,105,116,99,0);
       let playershirtr = String.fromCharCode(117,112,115,104,105,102,116,101,100,95,122,95,53,55,0);
          let crownn: Array<any> = [145, 506];
          let predictionQ = 3.0;
          let roundp = String.fromCharCode(108,111,111,107,117,112,95,122,95,53,57,0);
         playershirtr = `${gradleU.length << (Math.min(Math.abs(1), 5))}`;
         crownn.push(2);
         predictionQ /= Math.max(crownn.length, 4);
         roundp = `${3 ^ parseInt(`${predictionQ}`)}`;
      if (playershirtr == String.fromCharCode(116,0)) {
         gradleU += `${2 & playershirtr.length}`;
      }
         gradleU += `${2 & gradleU.length}`;
      if (gradleU.startsWith(playershirtr)) {
         gradleU = `${3 & gradleU.length}`;
      }
       let iconpipexpandV: Map<any, any> = new Map([[String.fromCharCode(115,95,53,48,95,105,115,112,97,116,99,104,0),312], [String.fromCharCode(114,101,116,114,97,110,115,109,105,115,115,105,111,110,95,120,95,50,50,0),69]]);
       let termsd: Map<any, any> = new Map([[String.fromCharCode(116,95,57,53,95,117,112,112,101,114,0),true ], [String.fromCharCode(115,121,115,99,116,108,0),false ]]);
          let robotou = 4.0;
          let androido = String.fromCharCode(99,111,110,118,101,114,116,101,114,95,52,95,52,49,0);
          let sharemodalW = String.fromCharCode(112,95,53,49,0);
         termsd = new Map([[androido, androido.length ^ 2]]);
         robotou /= Math.max(2, 2 - parseInt(`${robotou}`));
         sharemodalW += `${sharemodalW.length >> (Math.min(2, Math.abs(parseInt(`${robotou}`))))}`;
      penaltymatchiconc += (liveendmodallogor == String.fromCharCode(48,0) ? iconsharec.size : liveendmodallogor.length);
   }
      penaltymatchiconc -= 3;
      tumbnailV = `${parseInt(`${notificationfillempty0}`)}`;
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
      item: UseQueryResult<yysMemberDefaultlogo>;
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
      yys_giftbutton_footballtrophy.homeTabViewsAnalytics({
        tab_id: navOptions[0].id.toString(),
        tab_name: navOptions[0].name,
      });
    }
  }, [navOptions])

  useEffect(() => {
    if (navOptions !== undefined && navOptions.length > 0) {
      yys_giftbutton_footballtrophy.homeTabViewsAnalytics({
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

      
      yys_giftbutton_footballtrophy.homeTabClicksAnalytics({
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
                  source={require("../../../static/images/lessFullscreenmaxChatbotphoto.gif")}
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
                source={require("../../../static/images/dicelogoImagenetworkerr.gif")}
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

export default memo(yys_calendar);

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
