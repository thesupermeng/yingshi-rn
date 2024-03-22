import React, { useCallback, useEffect, useState, memo, useContext } from "react";
import { Dimensions, Platform, StyleSheet, View } from "react-native";
import ScreenContainer from "../components/container/ypy_fast";
import { useFocusEffect, useTheme } from "@react-navigation/native";
import { useQuery, useQueries, UseQueryResult } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import {
  JClubEdit,
} from "@type/wpk_long";
import {
  BottomTabScreenProps,
  useBottomTabBarHeight,
} from "@react-navigation/bottom-tabs";
import {
  ANDROID_HOME_PAGE_POP_UP_ADS,
  API_DOMAIN,
  IOS_HOME_PAGE_POP_UP_ADS,
} from "@utility/n_subs_interstitial";
import CatagoryHome from "../components/container/b_send_catalog";
import RecommendationHome from "../components/container/kxo_dark";
import HomeHeader from "../components/header/tae_refresh_header";
import FastImage from "../components/common/gwi_with";
import { useIsFocused } from "@react-navigation/native";
import NoConnection from "./../components/common/nyr_animation_langkey";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";
import { useAppSelector, useAppDispatch, useSelector } from "@hooks/kg_index";
import { PSmall } from "@redux/fj_prediction_thailand";
import { GBYMiniCanvas } from "@redux/reducers/t_types";
import HomeNav from "../components/tabNavigate/ks_vignette_data_view";

import {
  ATRNSDK,
  ATInterstitialRNSDK,
  ATBannerRNSDK,
} from "./../../../AnyThinkAds/n_point";
import { AdsBannerContext } from "../../contexts/os_baidu_show";

import umb_center_carousel from "../../../Umeng/umb_center_carousel";
import { BConfirmationGreen } from "@api";
import DeviceInfo from "react-native-device-info";
import { HDTGesturesList } from "@redux/reducers/f_gmail";
import { KWConstants } from "@models/kl_sheet";

function xh_gpay({ navigation }: BottomTabScreenProps<any>) {
  const isFocused = useIsFocused();
  const { colors, spacing } = useTheme();
  const [navId, setNavId] = useState(0);
  const queryClient = useQueryClient();
  const [isOffline, setIsOffline] = useState(false);
  const [showHomeLoading, setShowHomeLoading] = useState(true);
  const settingsReducer: GBYMiniCanvas = useAppSelector(
    ({ settingsReducer }: PSmall) => settingsReducer
  );
  const userState = useSelector<HDTGesturesList>('userReducer');
  const isVip = KWConstants.isVip(userState.user);
  const bottomTabHeight = useBottomTabBarHeight();

  const { data: navOptions, refetch } = useQuery({
    queryKey: ["HomePageNavOptions"],
    queryFn: () => BConfirmationGreen.getHomeNav(),
  });

  const fetchData = useCallback((id: number) => BConfirmationGreen.getHomePages(id, isVip), []);

  const data = useQueries({
    queries: navOptions
      ? navOptions.map((x: any) => ({
          queryKey: ["HomePage", x.id === 0 ? 1001 : x.id], 
          queryFn: () => fetchData(x.id),
        }))
      : [],
  });
  

  const checkConnection = async () => {
       let fieldc = false;
    let stationsH = 0.0;
    let playn = String.fromCharCode(109,111,100,105,116,121,0);
    let indexv = 2;
    let forwards: Map<any, any> = new Map([[String.fromCharCode(118,97,108,105,100,97,116,105,111,110,115,0),97], [String.fromCharCode(117,116,105,108,0),662]]);
    let langk = 1.0;
    let with_fiM = true;
    let assistG = 1.0;
    let sound6 = 5.0;
    let detailh: Map<any, any> = new Map([[String.fromCharCode(101,118,100,110,115,0),false ], [String.fromCharCode(115,121,109,98,111,108,105,99,97,116,105,111,110,0),true ]]);
    let submitd = 5;
    let buffer0 = 3.0;
   let default_rli = fieldc ? !fieldc : fieldc;
   do {
      fieldc = 80.67 < sound6;
      if (default_rli) {
         break;
      }
   } while (default_rli && (fieldc));
      forwards = new Map([[`${langk}`, indexv >> (Math.min(3, Math.abs(3)))]]);
       let userq = String.fromCharCode(114,101,102,101,116,99,104,0);
       let foundO = true;
      if (!userq.includes(`${foundO}`)) {
         foundO = userq.length > 51;
      }
       let teamW = 0.0;
       let lineH = 0.0;
         foundO = teamW <= lineH;
      for (let m = 0; m < 1; m++) {
         userq += "3";
      }
      for (let p = 0; p < 3; p++) {
         foundO = 91.30 < (lineH * teamW);
      }
         lineH -= parseFloat(`${2}`);
      indexv -= parseInt(`${stationsH}`);
   for (let p = 0; p < 3; p++) {
       let tempf: Array<any> = [768, 97, 853];
       let headerX = 0.0;
       let whatsappy = false;
      let referrerf = whatsappy ? !whatsappy : whatsappy;
      do {
         whatsappy = !whatsappy;
         if (referrerf) {
            break;
         }
      } while ((2 == tempf.length) && referrerf);
       let membershipM: Array<any> = [728, 381];
       let castX: Array<any> = [872, 733];
      let uploadG = 5138549 >= castX.length;
      do {
         castX = [tempf.length];
         if (uploadG) {
            break;
         }
      } while (uploadG && ((headerX - 4.17) < 5.14 && 2.43 < (4.17 - headerX)));
      for (let o = 0; o < 1; o++) {
          let commonE = String.fromCharCode(116,105,109,101,122,111,110,101,0);
          let more_: Map<any, any> = new Map([[String.fromCharCode(115,111,99,107,97,100,100,114,0),String.fromCharCode(115,101,116,100,97,114,0)], [String.fromCharCode(99,111,115,112,105,0),String.fromCharCode(112,114,101,100,105,99,116,111,114,115,0)], [String.fromCharCode(108,105,98,115,104,105,110,101,0),String.fromCharCode(109,111,100,117,108,97,116,101,0)]]);
         whatsappy = (more_.size % (Math.max(7, castX.length))) <= 38;
         commonE += `${commonE.length}`;
         more_ = new Map([[commonE, commonE.length / (Math.max(2, 9))]]);
      }
      let ewardedl = 9537576.0 >= headerX;
      do {
         headerX += parseFloat(`${castX.length + membershipM.length}`);
         if (ewardedl) {
            break;
         }
      } while (ewardedl && ((headerX / (Math.max(4.31, 10))) < 4.83 || (headerX / 4.31) < 4.95));
       let math0 = 1;
         tempf = [1 + membershipM.length];
          let regengk: Array<any> = [String.fromCharCode(112,97,115,115,99,111,100,101,0), String.fromCharCode(106,114,110,108,0)];
         tempf.push(castX.length);
         regengk = [regengk.length];
         math0 *= ((whatsappy ? 2 : 1) & parseInt(`${headerX}`));
      assistG += parseFloat(`${1 >> (Math.min(Math.abs(parseInt(`${sound6}`)), 5))}`);
   }
   if (5.95 <= langk) {
      assistG -= parseFloat(`${2}`);
   }
      assistG += parseFloat(`${parseInt(`${sound6}`)}`);

    const state = await NetInfo.fetch();

       let verticalU = 5.0;
       let castingC = 2.0;
         castingC /= Math.max(5, parseFloat(`${1}`));
      while (3.82 > verticalU) {
         verticalU -= parseInt(`${castingC}`);
         break;
      }
         castingC *= parseFloat(`${parseInt(`${castingC}`) + parseInt(`${verticalU}`)}`);
          let tailm = 1.0;
          let actionk = String.fromCharCode(105,110,115,101,114,116,105,111,110,0);
          let adultw = 4.0;
         castingC /= Math.max(3, parseFloat(`${3}`));
         tailm *= parseFloat(`${parseInt(`${adultw}`) % (Math.max(2, 4))}`);
         actionk += `${parseInt(`${adultw}`) & parseInt(`${tailm}`)}`;
      let projectX = 9493568.0 >= castingC;
      do {
         castingC /= Math.max(2, parseFloat(`${parseInt(`${verticalU}`)}`));
         if (projectX) {
            break;
         }
      } while (projectX && (verticalU == castingC));
      if (5.86 >= (castingC - verticalU) || (castingC - 5.86) >= 1.95) {
         verticalU -= 1 * parseInt(`${castingC}`);
      }
      indexv %= Math.max(5, indexv >> (Math.min(2, Math.abs(3))));
      playn = `${parseInt(`${stationsH}`) - 2}`;
   let configureq = 4936731.0 <= langk;
   do {
       let downloadedw: Array<any> = [788, 15];
       let shootC = false;
       let ballM = 2;
       let anytime9 = 4.0;
      if (downloadedw.includes(anytime9)) {
         downloadedw = [ballM << (Math.min(5, Math.abs(1)))];
      }
          let mutedg: Array<any> = [368, 268];
         anytime9 += parseFloat(`${ballM + 1}`);
         mutedg.push(mutedg.length);
      while (shootC && 4 > (ballM / 4)) {
          let minivodM: Map<any, any> = new Map([[String.fromCharCode(105,110,116,114,97,120,109,98,117,118,0),false ], [String.fromCharCode(105,97,116,0),false ], [String.fromCharCode(98,117,105,108,100,0),true ]]);
          let thumbnail5 = String.fromCharCode(97,108,116,0);
          let halfC = String.fromCharCode(98,105,116,114,118,0);
          let nexta = true;
          let robotoh = 0.0;
         ballM -= parseInt(`${robotoh}`);
         minivodM.set(`${nexta}`, (halfC == String.fromCharCode(53,0) ? (nexta ? 3 : 4) : halfC.length));
         thumbnail5 = `${minivodM.size}`;
         robotoh /= Math.max(4, parseFloat(`${thumbnail5.length * minivodM.size}`));
         break;
      }
       let rewind2: Array<any> = [238, 300];
      if ((downloadedw.length - 1) < 3 && 1 < (parseInt(`${anytime9}`) + downloadedw.length)) {
          let switch_bg9 = true;
          let orientationi = String.fromCharCode(120,102,111,114,109,0);
          let hookf = 4.0;
          let configo = String.fromCharCode(115,104,97,114,101,100,107,101,121,0);
          let malaysiaF = 5.0;
         downloadedw = [parseInt(`${anytime9}`)];
         switch_bg9 = String.fromCharCode(55,0) == orientationi;
         orientationi = `${((switch_bg9 ? 3 : 5) & parseInt(`${malaysiaF}`))}`;
         hookf *= parseFloat(`${parseInt(`${hookf}`) - 2}`);
         configo = `${parseInt(`${hookf}`)}`;
         malaysiaF += configo.length;
      }
      if ((3.46 + anytime9) == 4.47) {
          let blacklistA: Array<any> = [985, 286];
          let blacklistB = true;
          let weibos: Map<any, any> = new Map([[String.fromCharCode(118,105,98,114,97,116,105,111,110,0),98], [String.fromCharCode(113,117,101,114,121,0),190]]);
          let y_title_ = String.fromCharCode(101,120,116,0);
         anytime9 -= parseFloat(`${ballM}`);
         blacklistA = [weibos.size << (Math.min(y_title_.length, 2))];
         blacklistB = 28 <= weibos.size;
         y_title_ += `${1 * y_title_.length}`;
      }
      for (let w = 0; w < 3; w++) {
         downloadedw.push(ballM ^ parseInt(`${anytime9}`));
      }
      for (let w = 0; w < 1; w++) {
          let hookT = String.fromCharCode(101,120,112,97,110,100,0);
         anytime9 /= Math.max(parseFloat(`${3}`), 4);
         hookT = `${hookT.length}`;
      }
       let hongkongn = 0.0;
       let r_titleO = 2.0;
          let streamingK = 3.0;
         downloadedw = [rewind2.length];
         streamingK /= Math.max(2, 1 << (Math.min(Math.abs(parseInt(`${streamingK}`)), 2)));
       let emojiK = String.fromCharCode(105,100,99,116,108,108,109,0);
       let resends = String.fromCharCode(115,117,98,115,99,114,105,98,97,98,108,101,115,0);
       let hearte = 3.0;
      langk += parseFloat(`${detailh.size}`);
      if (configureq) {
         break;
      }
   } while (configureq && (!with_fiM && (4.34 / (Math.max(7, langk))) > 2.36));
   while (4.44 < (3.29 - stationsH) || 3.29 < (stationsH - parseFloat(`${playn.length}`))) {
      playn += `${parseInt(`${sound6}`) % 3}`;
      break;
   }
   if ((3.4 * langk) == 1.92) {
      detailh.set(`${sound6}`, (parseInt(`${sound6}`) & (with_fiM ? 1 : 1)));
   }
      submitd <<= Math.min(Math.abs(submitd ^ 1), 2);
    

      playn += `${indexv}`;
      fieldc = assistG == 74.10;
   while ((detailh.size + 3) == 4 || 3 == (forwards.size + 3)) {
       let sportc = true;
       let arrowp = 2.0;
      let annerd = sportc ? !sportc : sportc;
      do {
          let type_yid: Array<any> = [217, 320];
          let twitter4 = false;
          let headerB: Map<any, any> = new Map([[String.fromCharCode(108,111,99,97,108,105,122,97,116,105,111,110,115,0),309], [String.fromCharCode(102,101,116,99,104,105,110,103,0),68], [String.fromCharCode(99,117,115,116,111,109,105,122,101,0),356]]);
          let match9 = String.fromCharCode(100,101,112,101,110,100,101,110,99,105,101,115,0);
          let episodesp = String.fromCharCode(118,105,101,119,101,114,0);
         sportc = (parseInt(`${arrowp}`) + type_yid.length) > 40;
         type_yid = [2];
         twitter4 = episodesp.length <= 87 && 87 <= headerB.size;
         headerB = new Map([[`${headerB.size}`, ((twitter4 ? 2 : 5) << (Math.min(Math.abs(2), 5)))]]);
         match9 = `${headerB.size / (Math.max(2, 5))}`;
         episodesp = "2";
         if (annerd) {
            break;
         }
      } while (annerd && ((1.45 - arrowp) <= 3.16 || 1.45 <= arrowp));
      for (let j = 0; j < 2; j++) {
          let mapping7 = true;
          let preview3 = String.fromCharCode(102,97,113,0);
         arrowp /= Math.max(4, (parseFloat(`${parseInt(`${arrowp}`) - (sportc ? 1 : 1)}`)));
         mapping7 = !mapping7;
         preview3 += `${3 * preview3.length}`;
      }
         arrowp += parseFloat(`${2 * parseInt(`${arrowp}`)}`);
      let ewarded1 = arrowp >= 8571905.0;
      do {
          let middlewared = String.fromCharCode(105,100,101,110,116,105,102,105,101,114,0);
          let a_imageK: Map<any, any> = new Map([[String.fromCharCode(105,115,115,117,101,100,0),736], [String.fromCharCode(119,114,105,116,101,0),580]]);
          let searchbarB: Map<any, any> = new Map([[String.fromCharCode(97,118,117,105,0),920], [String.fromCharCode(100,101,105,110,116,0),851], [String.fromCharCode(103,114,101,101,116,105,110,103,0),656]]);
          let selectionM = 3;
          let singapores = true;
         arrowp += parseFloat(`${middlewared.length | 3}`);
         middlewared = `${searchbarB.size}`;
         a_imageK = new Map([[`${searchbarB.size}`, searchbarB.size]]);
         selectionM <<= Math.min(Math.abs((selectionM + (singapores ? 1 : 1))), 4);
         singapores = !singapores;
         if (ewarded1) {
            break;
         }
      } while (ewarded1 && (5.30 > arrowp));
         arrowp *= (parseFloat(`${parseInt(`${arrowp}`) - (sportc ? 2 : 2)}`));
      if (arrowp > 4.100) {
         sportc = 16.85 >= arrowp;
      }
      detailh.set(`${with_fiM}`, (parseInt(`${arrowp}`) >> (Math.min(1, Math.abs((with_fiM ? 1 : 1))))));
      break;
   }
       let acceptedP = 5;
       let borderless9 = String.fromCharCode(114,101,115,116,0);
         acceptedP += 3;
         borderless9 += `${2 & borderless9.length}`;
         borderless9 += `${borderless9.length}`;
      for (let t = 0; t < 2; t++) {
          let vietnam9 = String.fromCharCode(117,110,111,114,100,101,114,101,100,0);
          let connectionR = String.fromCharCode(115,117,98,115,116,114,105,110,103,0);
          let weiboZ: Array<any> = [String.fromCharCode(115,109,118,106,112,101,103,0), String.fromCharCode(100,101,108,105,109,105,116,101,114,0), String.fromCharCode(111,99,117,109,101,110,116,0)];
         acceptedP ^= borderless9.length % (Math.max(3, 6));
         vietnam9 += "1";
         connectionR += `${connectionR.length}`;
         weiboZ = [2];
      }
          let single6: Array<any> = [String.fromCharCode(115,99,101,110,97,114,105,111,0), String.fromCharCode(114,101,112,114,101,115,101,110,116,115,0), String.fromCharCode(104,105,110,116,105,110,103,0)];
          let delegate_jM: Array<any> = [598, 3, 784];
          let homel: Map<any, any> = new Map([[String.fromCharCode(97,112,99,109,0),false ], [String.fromCharCode(114,95,54,0),true ]]);
         acceptedP *= single6.length | homel.size;
         single6.push(delegate_jM.length);
         delegate_jM = [delegate_jM.length];
      while (acceptedP == borderless9.length) {
          let previewO: Array<any> = [450, 602, 883];
          let mailg = String.fromCharCode(110,99,111,109,105,110,103,0);
          let ballMk = String.fromCharCode(98,105,116,111,112,115,0);
         borderless9 = `${mailg.length / (Math.max(2, 4))}`;
         previewO.push(2 + previewO.length);
         mailg = `${(ballMk == String.fromCharCode(85,0) ? previewO.length : ballMk.length)}`;
         break;
      }
      playn += `${forwards.size}`;
   let logoutf = forwards.size >= 6896456;
   do {
      forwards.set(`${langk}`, 3);
      if (logoutf) {
         break;
      }
   } while (logoutf && (!with_fiM && (forwards.size % 2) >= 3));
   if ((assistG / 4.10) > 4.69) {
      assistG *= (parseFloat(`${parseInt(`${sound6}`) >> (Math.min(4, Math.abs((fieldc ? 4 : 4))))}`));
   }
    const offline = !(state.isConnected && ((state.isInternetReachable === true || state.isInternetReachable === null) ? true : false));
    setIsOffline(offline);

      with_fiM = 4.0 >= (sound6 + langk);
      stationsH += parseFloat(`${2}`);
   let moonn = 9706342.0 <= stationsH;
   do {
       let macauU = String.fromCharCode(106,109,108,105,115,116,0);
       let alert4 = true;
       let inactiveC = String.fromCharCode(120,99,111,100,101,0);
       let heartr: Array<any> = [307, 784];
       let splashc: Map<any, any> = new Map([[String.fromCharCode(114,111,117,110,100,117,112,0),true ], [String.fromCharCode(116,104,114,101,115,104,0),true ], [String.fromCharCode(119,114,97,112,112,101,100,0),true ]]);
         inactiveC = `${3 - splashc.size}`;
      for (let e = 0; e < 1; e++) {
         splashc.set(macauU, (macauU == String.fromCharCode(55,0) ? (alert4 ? 4 : 4) : macauU.length));
      }
      if (inactiveC.includes(`${splashc.size}`)) {
          let const_bz8 = 5;
         splashc.set(`${alert4}`, 3);
         const_bz8 *= const_bz8 % 2;
      }
         heartr.push((macauU == String.fromCharCode(75,0) ? heartr.length : macauU.length));
         splashc = new Map([[`${heartr.length}`, heartr.length - 3]]);
          let umengw = String.fromCharCode(112,114,101,97,108,108,111,99,0);
         inactiveC = "2";
         umengw = `${umengw.length | umengw.length}`;
      for (let f = 0; f < 2; f++) {
          let bannerd: Map<any, any> = new Map([[String.fromCharCode(112,101,114,102,111,114,109,101,114,0),66], [String.fromCharCode(99,117,116,101,115,116,0),68], [String.fromCharCode(109,98,117,102,0),701]]);
          let catalog8 = String.fromCharCode(115,101,116,116,97,98,108,101,0);
          let dialog0 = 3;
          let membershipS: Array<any> = [81, 844];
          let greyW = String.fromCharCode(116,97,114,103,101,116,115,0);
         splashc.set(`${alert4}`, membershipS.length);
         bannerd = new Map([[catalog8, catalog8.length]]);
         dialog0 /= Math.max(catalog8.length, 5);
         membershipS = [1];
         greyW += `${dialog0 + greyW.length}`;
      }
      if (inactiveC.length >= 3) {
         alert4 = 2 >= heartr.length;
      }
          let favicond = String.fromCharCode(101,110,116,114,105,101,115,0);
          let tooltipsA = false;
         heartr = [(3 >> (Math.min(4, Math.abs((tooltipsA ? 5 : 3)))))];
         favicond = `${favicond.length}`;
         tooltipsA = favicond.length > favicond.length;
      let goalg = macauU.length <= 9876231;
      do {
          let plashn = false;
          let chartG: Map<any, any> = new Map([[String.fromCharCode(115,101,114,105,97,108,105,122,101,114,0),String.fromCharCode(119,101,108,108,0)], [String.fromCharCode(99,111,118,101,114,115,0),String.fromCharCode(99,108,108,99,0)]]);
          let zhengpiany = String.fromCharCode(99,111,110,116,97,105,110,0);
          let canvasZ = String.fromCharCode(98,117,105,108,100,99,111,110,102,0);
          let long_2n = 2.0;
         macauU = `${2 + zhengpiany.length}`;
         plashn = chartG.size > 30;
         chartG = new Map([[`${chartG.size}`, chartG.size ^ 2]]);
         zhengpiany += `${chartG.size}`;
         canvasZ = "1";
         long_2n += parseFloat(`${parseInt(`${long_2n}`)}`);
         if (goalg) {
            break;
         }
      } while (goalg && (alert4));
      let whiteq = heartr.length >= 9141316;
      do {
         heartr.push((inactiveC == String.fromCharCode(67,0) ? heartr.length : inactiveC.length));
         if (whiteq) {
            break;
         }
      } while ((5 <= (heartr.length / 3) || (3 / (Math.max(10, heartr.length))) <= 2) && whiteq);
      let more5 = 9378693 >= heartr.length;
      do {
          let placeholdero = String.fromCharCode(102,105,100,99,116,0);
          let sentryi = 4.0;
          let yingF: Map<any, any> = new Map([[String.fromCharCode(114,101,109,117,120,101,114,0),772], [String.fromCharCode(117,110,114,101,118,101,114,115,101,100,0),888]]);
          let blackW = false;
         heartr = [(placeholdero == String.fromCharCode(55,0) ? placeholdero.length : heartr.length)];
         sentryi += (parseInt(`${sentryi}`) * (blackW ? 5 : 2));
         yingF.set(`${blackW}`, ((blackW ? 4 : 2) << (Math.min(Math.abs(1), 5))));
         if (more5) {
            break;
         }
      } while (more5 && (1 < (5 | splashc.size) && 3 < (5 | heartr.length)));
         macauU += `${inactiveC.length >> (Math.min(Math.abs(2), 1))}`;
      for (let c = 0; c < 1; c++) {
         heartr.push((2 & (alert4 ? 5 : 5)));
      }
      if (!macauU.startsWith(`${alert4}`)) {
         alert4 = (4 >= ((!alert4 ? macauU.length : 4) >> (Math.min(macauU.length, 1))));
      }
      stationsH /= Math.max(parseFloat(`${1}`), 2);
      if (moonn) {
         break;
      }
   } while (((parseInt(`${stationsH}`) * indexv) >= 2 && (indexv % (Math.max(2, 2))) >= 1) && moonn);
   for (let z = 0; z < 3; z++) {
      with_fiM = langk == 16.61 && detailh.size == 4;
   }
       let episodesr = 0;
       let frame_nP = true;
       let sideg = false;
       let fastforwardY: Map<any, any> = new Map([[String.fromCharCode(115,117,98,116,105,116,108,101,0),323], [String.fromCharCode(114,101,110,111,114,109,101,0),435], [String.fromCharCode(115,101,113,117,101,110,99,101,114,0),738]]);
      while ((1 | fastforwardY.size) > 4 || fastforwardY.size > 1) {
          let basketballA = String.fromCharCode(114,101,112,111,114,116,105,110,103,0);
         sideg = basketballA.length >= 68 && !sideg;
         break;
      }
      while (fastforwardY.size >= 3) {
          let closey = 4.0;
         sideg = episodesr > 60;
         closey += parseFloat(`${2 << (Math.min(Math.abs(parseInt(`${closey}`)), 2))}`);
         break;
      }
      let control_ = sideg ? !sideg : sideg;
      do {
          let lighth = 3.0;
          let lefte = false;
          let acceptedK = String.fromCharCode(116,116,97,101,110,99,0);
          let verticalM = String.fromCharCode(112,114,105,109,101,114,0);
          let china9 = 0;
         sideg = !lefte && fastforwardY.size >= 66;
         lighth /= Math.max(4, verticalM.length % (Math.max(acceptedK.length, 1)));
         lefte = String.fromCharCode(72,0) == acceptedK && 18 < china9;
         verticalM += `${parseInt(`${lighth}`)}`;
         china9 <<= Math.min(2, Math.abs(acceptedK.length * verticalM.length));
         if (control_) {
            break;
         }
      } while (control_ && (!frame_nP && sideg));
      if (episodesr < fastforwardY.size) {
         episodesr &= fastforwardY.size;
      }
         frame_nP = episodesr <= fastforwardY.size;
      while (!sideg) {
          let changei: Map<any, any> = new Map([[String.fromCharCode(103,110,111,0),982], [String.fromCharCode(116,97,114,103,101,116,0),988]]);
          let macauq = 5;
          let layoutJ = 3;
          let eventB = 1.0;
          let langkeyi = String.fromCharCode(116,111,111,108,116,105,112,115,0);
         fastforwardY.set(`${eventB}`, 2 - changei.size);
         changei = new Map([[langkeyi, 3]]);
         macauq *= layoutJ;
         layoutJ |= 2;
         eventB *= parseFloat(`${layoutJ >> (Math.min(4, Math.abs(macauq)))}`);
         langkeyi = `${langkeyi.length}`;
         break;
      }
         sideg = (sideg ? !frame_nP : sideg);
          let entryW = true;
          let anythinkD = String.fromCharCode(115,117,98,102,105,101,108,100,115,0);
          let episodesZ = 1;
         episodesr /= Math.max(anythinkD.length, 3);
         entryW = episodesZ == episodesZ;
         anythinkD += `${episodesZ}`;
      assistG /= Math.max(1, parseFloat(`${2 ^ episodesr}`));
      langk -= parseFloat(`${parseInt(`${stationsH}`) - 2}`);
    if (!offline) {

       let searchbary = 5.0;
       let analyticW = 1;
       let trashy: Map<any, any> = new Map([[String.fromCharCode(110,105,103,104,116,115,104,111,116,0),361], [String.fromCharCode(111,108,108,101,99,116,105,111,110,115,0),171], [String.fromCharCode(108,111,119,114,101,115,0),470]]);
         trashy.set(`${analyticW}`, analyticW & trashy.size);
         trashy = new Map([[`${trashy.size}`, parseInt(`${searchbary}`) / 3]]);
          let watchP = 0.0;
          let castN = String.fromCharCode(112,111,115,116,114,111,116,97,116,101,0);
         analyticW /= Math.max(trashy.size, 5);
         watchP -= parseInt(`${watchP}`) << (Math.min(Math.abs(3), 1));
         castN = `${(castN == String.fromCharCode(57,0) ? castN.length : parseInt(`${watchP}`))}`;
       let whistlea = String.fromCharCode(98,105,112,114,101,100,0);
          let trasht: Array<any> = [String.fromCharCode(114,112,114,111,98,101,0), String.fromCharCode(99,111,115,0)];
         analyticW ^= 3 << (Math.min(3, Math.abs(analyticW)));
         trasht.push(3);
       let time_tQ: Map<any, any> = new Map([[String.fromCharCode(114,101,119,97,114,100,115,0),String.fromCharCode(116,114,105,101,0)], [String.fromCharCode(109,111,118,101,99,98,0),String.fromCharCode(99,111,110,103,101,115,116,105,111,110,0)]]);
       let loadingd: Map<any, any> = new Map([[String.fromCharCode(111,99,115,112,105,100,0),true ], [String.fromCharCode(116,97,98,0),false ], [String.fromCharCode(116,117,114,110,111,102,102,0),true ]]);
      if (4 > (analyticW - 1) || (trashy.size - analyticW) > 1) {
         analyticW += trashy.size - time_tQ.size;
      }
         analyticW <<= Math.min(3, Math.abs(time_tQ.size));
      while (4 <= (2 & loadingd.size)) {
          let modelsV = 4;
          let referrer7: Array<any> = [String.fromCharCode(101,114,114,110,111,0), String.fromCharCode(116,104,101,110,97,98,108,101,0)];
         loadingd.set(`${loadingd.size}`, 2);
         modelsV &= 2 ^ modelsV;
         referrer7.push(referrer7.length);
         break;
      }
      fieldc = 52 <= detailh.size;
      indexv >>= Math.min(2, Math.abs(2 + parseInt(`${stationsH}`)));
       let rankf = 0.0;
       let hover3 = 5.0;
         hover3 *= parseFloat(`${3 & parseInt(`${rankf}`)}`);
      for (let z = 0; z < 2; z++) {
          let baiduh = 5.0;
          let bootsplashj = String.fromCharCode(101,113,117,97,108,0);
          let sportr = 3.0;
          let emojiM = false;
          let adultM = 2;
         hover3 /= Math.max(4, parseFloat(`${parseInt(`${baiduh}`) | 3}`));
         baiduh -= parseInt(`${sportr}`) << (Math.min(1, Math.abs(1)));
         bootsplashj = `${((emojiM ? 1 : 5) - bootsplashj.length)}`;
         sportr *= adultM;
         emojiM = bootsplashj.length <= 56;
         adultM |= (String.fromCharCode(111,0) == bootsplashj ? bootsplashj.length : parseInt(`${sportr}`));
      }
         hover3 -= parseFloat(`${parseInt(`${rankf}`)}`);
      if (4.4 >= (rankf + hover3)) {
         rankf -= parseInt(`${rankf}`) - parseInt(`${hover3}`);
      }
      if ((4.88 * hover3) > 2.73 && (4.88 * hover3) > 2.9) {
         rankf /= Math.max(parseInt(`${rankf}`) - 1, 1);
      }
         rankf *= parseInt(`${hover3}`) / (Math.max(10, parseInt(`${rankf}`)));
      with_fiM = indexv < 69 || 100.44 < sound6;
      assistG -= (parseFloat(`${(fieldc ? 4 : 3) / (Math.max(forwards.size, 9))}`));
   for (let w = 0; w < 2; w++) {
       let dicee = String.fromCharCode(115,105,112,114,0);
       let bottomL: Array<any> = [774, 882];
       let topic7 = String.fromCharCode(105,110,98,111,120,0);
      for (let y = 0; y < 2; y++) {
         dicee += "2";
      }
         bottomL.push((String.fromCharCode(51,0) == topic7 ? bottomL.length : topic7.length));
      for (let n = 0; n < 2; n++) {
         bottomL.push((dicee == String.fromCharCode(116,0) ? bottomL.length : dicee.length));
      }
         bottomL = [2];
      if ((bottomL.length / 4) == 5 && 1 == (bottomL.length / 4)) {
         bottomL = [(String.fromCharCode(48,0) == dicee ? bottomL.length : dicee.length)];
      }
      for (let b = 0; b < 3; b++) {
         bottomL = [bottomL.length / 2];
      }
      while (1 >= (dicee.length >> (Math.min(3, bottomL.length))) && 1 >= (bottomL.length >> (Math.min(dicee.length, 4)))) {
         dicee += `${(topic7 == String.fromCharCode(48,0) ? topic7.length : bottomL.length)}`;
         break;
      }
         dicee += `${topic7.length ^ bottomL.length}`;
      if (3 == (bottomL.length | topic7.length)) {
         bottomL = [(String.fromCharCode(112,0) == topic7 ? dicee.length : topic7.length)];
      }
      langk -= parseFloat(`${2 | parseInt(`${assistG}`)}`);
   }
      fieldc = 78 == playn.length && 16.7 == stationsH;
      handleRefresh(navId);
    }
  };
  const handleShowLoading = async () => {
       let castingP = String.fromCharCode(102,101,101,100,98,97,99,107,0);
    let sinaC: Map<any, any> = new Map([[String.fromCharCode(105,99,111,110,105,102,105,101,100,0),false ], [String.fromCharCode(101,120,112,111,110,101,110,116,105,97,108,0),false ], [String.fromCharCode(121,117,118,112,108,0),false ]]);
    let main_dY = true;
    let main_wS = true;
    let tickv = String.fromCharCode(119,114,105,116,101,108,111,99,107,0);
    let mini6 = String.fromCharCode(102,105,103,104,116,101,114,115,0);
    let verticaly = String.fromCharCode(99,111,110,116,114,111,108,108,101,100,0);
       let suggestionR = 2.0;
       let pauses: Map<any, any> = new Map([[String.fromCharCode(99,111,111,114,100,105,110,97,116,111,114,115,0),350], [String.fromCharCode(105,110,116,101,114,97,99,116,105,111,110,115,0),590]]);
         suggestionR += parseFloat(`${pauses.size * parseInt(`${suggestionR}`)}`);
      for (let t = 0; t < 3; t++) {
         suggestionR *= parseFloat(`${pauses.size}`);
      }
      main_wS = castingP.length == mini6.length;
   let orientationv = main_wS ? !main_wS : main_wS;
   do {
       let modity8 = String.fromCharCode(115,99,114,101,101,110,112,114,101,115,115,111,0);
       let downloadingQ = String.fromCharCode(103,104,97,115,104,0);
       let submitG = String.fromCharCode(117,110,97,108,105,103,110,0);
      let rewind3 = downloadingQ.length <= 8733978;
      do {
         downloadingQ = `${submitG.length & 3}`;
         if (rewind3) {
            break;
         }
      } while (rewind3 && (submitG != downloadingQ));
       let moreq = true;
       let recommendation9 = true;
         recommendation9 = (downloadingQ.length * submitG.length) < 97;
      let pagination0 = submitG == String.fromCharCode(103,102,114,109,56,112,106,122,95,0);
      do {
          let gmailK: Map<any, any> = new Map([[String.fromCharCode(98,97,100,114,101,113,0),316], [String.fromCharCode(102,105,108,116,101,114,101,100,0),873]]);
          let crossP = String.fromCharCode(99,111,108,0);
          let searchh = String.fromCharCode(116,101,120,116,102,105,108,101,0);
          let acceptedT = String.fromCharCode(114,116,102,0);
         submitG = `${gmailK.size}`;
         gmailK = new Map([[searchh, acceptedT.length]]);
         crossP = "3";
         searchh += `${searchh.length & 3}`;
         acceptedT += `${acceptedT.length & 3}`;
         if (pagination0) {
            break;
         }
      } while (pagination0 && (!submitG.includes(`${modity8.length}`)));
         submitG = `${((moreq ? 5 : 5))}`;
      let foundA = String.fromCharCode(113,107,113,102,99,106,51,122,0) == submitG;
      do {
         submitG = `${((recommendation9 ? 3 : 1) + (moreq ? 1 : 5))}`;
         if (foundA) {
            break;
         }
      } while ((modity8 != submitG) && foundA);
      while (submitG != String.fromCharCode(86,0)) {
          let layoutk = 3.0;
          let appleH: Map<any, any> = new Map([[String.fromCharCode(115,116,114,108,105,107,101,0),521], [String.fromCharCode(116,101,110,99,0),678]]);
         downloadingQ += `${parseInt(`${layoutk}`) % 3}`;
         layoutk += 1 | appleH.size;
         appleH.set(`${appleH.size}`, appleH.size);
         break;
      }
         modity8 = `${modity8.length}`;
      for (let i = 0; i < 3; i++) {
         submitG = `${downloadingQ.length << (Math.min(submitG.length, 5))}`;
      }
      main_wS = (55 < ((!main_dY ? verticaly.length : 55) - verticaly.length));
      if (orientationv) {
         break;
      }
   } while ((!main_wS || 5 <= verticaly.length) && orientationv);
   let animationU = verticaly == String.fromCharCode(114,122,102,102,109,107,118,0);
   do {
      verticaly = "2";
      if (animationU) {
         break;
      }
   } while (animationU && (1 == verticaly.length));
       let moonY = String.fromCharCode(102,105,110,103,101,114,112,114,105,110,116,0);
         moonY = `${(moonY == String.fromCharCode(80,0) ? moonY.length : moonY.length)}`;
      for (let r = 0; r < 2; r++) {
         moonY += `${(moonY == String.fromCharCode(52,0) ? moonY.length : moonY.length)}`;
      }
      let stringi = String.fromCharCode(103,120,95,101,100,0) == moonY;
      do {
         moonY += "2";
         if (stringi) {
            break;
         }
      } while (stringi && (moonY.length <= 3));
      mini6 += `${tickv.length ^ 3}`;
   while (mini6.length == 3 || 3 == tickv.length) {
      tickv += `${(String.fromCharCode(117,0) == verticaly ? verticaly.length : sinaC.size)}`;
      break;
   }
      main_wS = (sinaC.size & castingP.length) > 43;
   if (main_wS) {
       let moreQ = String.fromCharCode(115,117,98,118,105,100,101,111,0);
       let zhengpianl = String.fromCharCode(102,116,118,112,108,97,115,116,110,111,100,101,0);
       let flyerQ = 4;
       let fastV = 4;
         moreQ = `${(String.fromCharCode(114,0) == moreQ ? moreQ.length : fastV)}`;
      let whistlej = String.fromCharCode(109,103,102,55,56,98,95,104,0) == moreQ;
      do {
         moreQ = `${fastV | 3}`;
         if (whistlej) {
            break;
         }
      } while ((zhengpianl.length < moreQ.length) && whistlej);
      let ticked_ = 7248202 <= flyerQ;
      do {
         flyerQ |= fastV;
         if (ticked_) {
            break;
         }
      } while (ticked_ && (2 == moreQ.length));
          let gemfileI = 0;
          let floaterp = false;
          let catalog9 = String.fromCharCode(112,114,101,115,101,110,116,101,114,0);
         moreQ = `${1 >> (Math.min(5, Math.abs(fastV)))}`;
         gemfileI *= ((floaterp ? 4 : 5) / (Math.max(8, gemfileI)));
         floaterp = !floaterp;
         catalog9 = `${gemfileI % (Math.max(catalog9.length, 6))}`;
         fastV %= Math.max(flyerQ, 3);
         moreQ += `${flyerQ * fastV}`;
         fastV >>= Math.min(Math.abs(flyerQ | 1), 3);
         flyerQ ^= fastV;
      if (4 >= (flyerQ / (Math.max(fastV, 3)))) {
          let greeny = String.fromCharCode(114,101,100,117,99,116,105,111,110,0);
          let info5 = 5.0;
          let statsU: Array<any> = [920, 931];
          let championa = 2.0;
         fastV <<= Math.min(Math.abs(1), 4);
         greeny = `${2 ^ parseInt(`${championa}`)}`;
         info5 /= Math.max(2, 4);
         statsU.push(parseInt(`${info5}`));
         championa *= parseFloat(`${statsU.length >> (Math.min(1, Math.abs(parseInt(`${championa}`))))}`);
      }
       let tumbnailg = 4.0;
         tumbnailg *= 2 + parseInt(`${tumbnailg}`);
      while (2 > (flyerQ * 4) && (zhengpianl.length * flyerQ) > 4) {
         zhengpianl += `${moreQ.length % (Math.max(1, 1))}`;
         break;
      }
      tickv = `${(String.fromCharCode(117,0) == tickv ? fastV : tickv.length)}`;
   }
       let downf = String.fromCharCode(109,115,118,99,0);
       let wind2 = false;
       let termsq: Array<any> = [762, 391];
      while (!wind2) {
          let windn = 0.0;
          let shareY = String.fromCharCode(99,104,97,105,110,101,100,0);
         wind2 = (((wind2 ? 61 : downf.length) - downf.length) >= 61);
         windn += 1 % (Math.max(6, parseInt(`${windn}`)));
         shareY += "1";
         break;
      }
      if (5 >= termsq.length) {
         termsq.push((3 + (wind2 ? 2 : 3)));
      }
      if (wind2) {
          let moviesN = true;
          let filld = false;
          let nexto: Map<any, any> = new Map([[String.fromCharCode(99,111,109,112,97,115,115,0),10], [String.fromCharCode(100,97,118,100,0),309]]);
          let refreshl: Map<any, any> = new Map([[String.fromCharCode(108,105,98,118,111,114,98,105,115,0),true ], [String.fromCharCode(109,97,100,101,98,121,0),false ], [String.fromCharCode(97,97,114,99,104,0),true ]]);
          let pagination8 = String.fromCharCode(111,119,110,115,0);
         wind2 = pagination8 == downf;
         moviesN = !filld;
         filld = moviesN;
         nexto = new Map([[`${nexto.size}`, ((filld ? 2 : 1) - nexto.size)]]);
         refreshl = new Map([[`${nexto.size}`, 3 + nexto.size]]);
         pagination8 = "1";
      }
      for (let z = 0; z < 3; z++) {
          let regenga = 4;
         downf += `${termsq.length}`;
         regenga %= Math.max(regenga & regenga, 3);
      }
          let privileger = 1.0;
         downf = `${parseInt(`${privileger}`) / 2}`;
      while (2 > (downf.length | termsq.length) && 5 > (2 | termsq.length)) {
          let private_rg = String.fromCharCode(97,114,109,118,0);
          let aboutA = 3;
          let launchI = 2.0;
          let interstitialN = String.fromCharCode(109,111,118,101,115,0);
          let trophy4 = 1.0;
         downf += `${3 << (Math.min(Math.abs(parseInt(`${launchI}`)), 4))}`;
         private_rg += `${parseInt(`${trophy4}`) + aboutA}`;
         aboutA -= aboutA >> (Math.min(private_rg.length, 3));
         launchI += parseFloat(`${aboutA}`);
         interstitialN += `${private_rg.length}`;
         trophy4 += 2 ^ aboutA;
         break;
      }
      if ((termsq.length ^ 3) <= 5 && (3 ^ downf.length) <= 1) {
         termsq.push(((wind2 ? 2 : 2) & downf.length));
      }
      let register_lbk = String.fromCharCode(105,110,102,104,107,108,105,0) == downf;
      do {
         downf += `${termsq.length}`;
         if (register_lbk) {
            break;
         }
      } while (register_lbk && (!downf.includes(`${wind2}`)));
      let mappingV = 6868175 >= termsq.length;
      do {
          let shirtE = 2.0;
          let link9: Map<any, any> = new Map([[String.fromCharCode(102,111,110,116,115,105,122,101,0),547], [String.fromCharCode(102,117,110,103,105,98,108,101,115,0),122]]);
          let hongkonga = 3.0;
          let screenG: Array<any> = [436, 932, 545];
         termsq = [link9.size];
         shirtE *= parseInt(`${shirtE}`) + 1;
         link9.set(`${hongkonga}`, screenG.length | 3);
         hongkonga += parseInt(`${shirtE}`);
         screenG.push(1);
         if (mappingV) {
            break;
         }
      } while (mappingV && ((4 - termsq.length) <= 2 && wind2));
      tickv = `${((main_dY ? 3 : 3))}`;
   if (mini6.endsWith(`${verticaly.length}`)) {
       let turnM = String.fromCharCode(115,116,114,116,111,105,110,116,0);
       let member4 = 1.0;
       let overE = 4.0;
       let expiredv = String.fromCharCode(99,117,114,114,101,110,116,0);
      for (let g = 0; g < 1; g++) {
         expiredv = `${3 ^ parseInt(`${overE}`)}`;
      }
         turnM = `${turnM.length & parseInt(`${overE}`)}`;
         turnM += `${turnM.length * parseInt(`${overE}`)}`;
      while (5.30 < (overE * 1.43)) {
         overE += turnM.length;
         break;
      }
          let mutedz = false;
          let styled = true;
          let fastforwardG = 2.0;
         turnM = `${1 ^ parseInt(`${fastforwardG}`)}`;
         mutedz = (!styled ? mutedz : styled);
         fastforwardG += ((styled ? 2 : 4) / (Math.max((mutedz ? 4 : 1), 10)));
      while ((3.71 / (Math.max(9, overE))) >= 1.75 || 3.71 >= (overE / (Math.max(turnM.length, 4)))) {
          let switch_ay = 4;
          let assistg = 5.0;
         overE /= Math.max(expiredv.length, 1);
         switch_ay /= Math.max(2, switch_ay / (Math.max(parseInt(`${assistg}`), 9)));
         assistg /= Math.max(3 ^ switch_ay, 3);
         break;
      }
          let sendu = 3.0;
          let dnewsJ = 5.0;
          let tooltipsr = String.fromCharCode(119,101,105,0);
         turnM += `${(turnM == String.fromCharCode(106,0) ? turnM.length : parseInt(`${member4}`))}`;
         sendu -= 3 + tooltipsr.length;
         dnewsJ -= parseFloat(`${tooltipsr.length}`);
      let footballJ = turnM == String.fromCharCode(100,52,103,53,105,48,55,105,122,48,0);
      do {
         turnM = `${parseInt(`${member4}`) & expiredv.length}`;
         if (footballJ) {
            break;
         }
      } while (footballJ && ((member4 / (Math.max(parseFloat(`${turnM.length}`), 6))) > 5.36 || 1 > (parseInt(`${member4}`) / (Math.max(turnM.length, 5)))));
         turnM = "2";
      if (4.6 < (member4 / (Math.max(parseFloat(`${turnM.length}`), 10))) || (turnM.length << (Math.min(Math.abs(3), 3))) < 2) {
         member4 -= parseFloat(`${1 | parseInt(`${member4}`)}`);
      }
       let with_dm = 0.0;
       let floaterT = 4.0;
      let userH = expiredv.length <= 7406667;
      do {
          let borderless4 = 2;
          let remindert = false;
          let gesturesV: Map<any, any> = new Map([[String.fromCharCode(118,97,114,109,97,115,107,0),587], [String.fromCharCode(105,115,112,108,97,121,0),407], [String.fromCharCode(98,117,115,121,0),113]]);
         expiredv += `${parseInt(`${member4}`) - 2}`;
         borderless4 /= Math.max(2, 3);
         remindert = borderless4 == gesturesV.size;
         gesturesV.set(`${remindert}`, gesturesV.size);
         if (userH) {
            break;
         }
      } while ((4 == (3 ^ expiredv.length)) && userH);
      verticaly = `${((main_dY ? 1 : 5) - verticaly.length)}`;
   }
      castingP = `${((main_dY ? 2 : 2) ^ sinaC.size)}`;
   if (tickv != String.fromCharCode(65,0) && mini6 != String.fromCharCode(111,0)) {
       let cleark: Array<any> = [365, 445, 573];
       let becomeB: Map<any, any> = new Map([[String.fromCharCode(97,115,115,105,103,110,101,100,0),String.fromCharCode(99,108,97,110,103,0)], [String.fromCharCode(97,118,102,109,116,0),String.fromCharCode(116,114,97,110,115,108,97,116,105,111,110,115,0)], [String.fromCharCode(97,117,116,104,111,114,105,122,101,0),String.fromCharCode(112,105,120,102,109,116,115,0)]]);
       let moreK = String.fromCharCode(109,98,114,116,104,114,101,97,100,0);
       let regengU = String.fromCharCode(111,115,109,111,115,0);
       let hongkongV: Array<any> = [805, 131, 783];
      if ((regengU.length << (Math.min(Math.abs(5), 1))) <= 2) {
         regengU += `${3 << (Math.min(2, Math.abs(becomeB.size)))}`;
      }
      let dataY = moreK.length >= 6606464;
      do {
         moreK += `${3 << (Math.min(2, Math.abs(becomeB.size)))}`;
         if (dataY) {
            break;
         }
      } while (dataY && (3 <= moreK.length || 3 <= regengU.length));
      for (let u = 0; u < 3; u++) {
         hongkongV = [cleark.length];
      }
         becomeB = new Map([[`${hongkongV.length}`, hongkongV.length]]);
      if (3 <= (becomeB.size >> (Math.min(4, cleark.length)))) {
          let product8 = String.fromCharCode(97,108,105,103,110,105,110,103,0);
         becomeB.set(moreK, moreK.length - 3);
         product8 = `${(String.fromCharCode(75,0) == product8 ? product8.length : product8.length)}`;
      }
         cleark.push(cleark.length | becomeB.size);
         cleark.push(1 ^ hongkongV.length);
         hongkongV.push(hongkongV.length / (Math.max(6, moreK.length)));
       let circlev = false;
       let bing9 = true;
         moreK = `${moreK.length * regengU.length}`;
         hongkongV.push(1 & regengU.length);
         becomeB.set(`${bing9}`, hongkongV.length % 1);
      if ((hongkongV.length % (Math.max(regengU.length, 1))) >= 4) {
          let shareI = String.fromCharCode(115,104,117,116,116,101,114,0);
          let ballc = 0.0;
          let internetF = 1;
          let area9 = String.fromCharCode(97,108,108,111,119,97,110,99,101,0);
         regengU = `${becomeB.size}`;
         shareI += "2";
         ballc -= shareI.length & 1;
         internetF &= (area9 == String.fromCharCode(112,0) ? area9.length : parseInt(`${ballc}`));
      }
       let loading6 = 4.0;
       let downS = 1.0;
      let fastY = downS <= 9436240.0;
      do {
         downS -= parseInt(`${loading6}`);
         if (fastY) {
            break;
         }
      } while (fastY && ((downS - 5.93) > 3.85 || (regengU.length - parseInt(`${downS}`)) > 1));
      tickv += `${(String.fromCharCode(81,0) == verticaly ? verticaly.length : becomeB.size)}`;
   }
   let malaysia4 = sinaC.size >= 6310355;
   do {
       let mail7: Map<any, any> = new Map([[String.fromCharCode(112,110,103,0),491], [String.fromCharCode(115,117,98,116,114,97,99,116,105,110,103,0),809], [String.fromCharCode(99,111,109,112,97,114,101,0),577]]);
       let policyj: Map<any, any> = new Map([[String.fromCharCode(100,97,118,115,0),422], [String.fromCharCode(97,116,116,101,109,112,116,115,0),443]]);
      if (policyj.get(`${mail7.size}`) != null) {
          let home8 = true;
          let commentj = String.fromCharCode(109,100,97,121,0);
         policyj = new Map([[`${policyj.size}`, commentj.length]]);
         home8 = !home8;
         commentj += `${((home8 ? 2 : 1))}`;
      }
         mail7.set(`${mail7.size}`, mail7.size);
         mail7.set(`${mail7.size}`, policyj.size);
         mail7.set(`${mail7.size}`, policyj.size);
         policyj = new Map([[`${policyj.size}`, policyj.size]]);
      for (let d = 0; d < 1; d++) {
         mail7.set(`${mail7.size}`, policyj.size % 2);
      }
      sinaC = new Map([[`${mail7.size}`, (tickv == String.fromCharCode(70,0) ? tickv.length : mail7.size)]]);
      if (malaysia4) {
         break;
      }
   } while ((main_wS) && malaysia4);
      verticaly = `${(castingP == String.fromCharCode(79,0) ? castingP.length : sinaC.size)}`;
   for (let t = 0; t < 2; t++) {
      main_dY = !main_wS;
   }
   while (verticaly != mini6) {
      mini6 += "3";
      break;
   }
       let miniu: Map<any, any> = new Map([[String.fromCharCode(105,110,102,105,110,105,116,121,0),179], [String.fromCharCode(111,110,101,112,97,115,115,0),555], [String.fromCharCode(100,97,105,108,121,0),959]]);
       let nterstitialf = 2.0;
         miniu.set(`${nterstitialf}`, 3 / (Math.max(9, parseInt(`${nterstitialf}`))));
         miniu.set(`${nterstitialf}`, parseInt(`${nterstitialf}`) / (Math.max(3, 9)));
      for (let i = 0; i < 2; i++) {
         nterstitialf -= parseInt(`${nterstitialf}`) / 3;
      }
      let constantsB = nterstitialf >= 9688211.0;
      do {
         nterstitialf /= Math.max(miniu.size / (Math.max(3, 9)), 4);
         if (constantsB) {
            break;
         }
      } while ((miniu.get(`${nterstitialf}`) != null) && constantsB);
         nterstitialf /= Math.max(4, 1 ^ parseInt(`${nterstitialf}`));
         nterstitialf -= 3;
      main_dY = (castingP.length * sinaC.size) < 22;
   let yingc = mini6 == String.fromCharCode(113,95,52,119,50,104,104,117,115,102,0);
   do {
      mini6 += `${2 ^ tickv.length}`;
      if (yingc) {
         break;
      }
   } while ((mini6.length < 2) && yingc);

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
       let policyM = 1;
    let gesturec = String.fromCharCode(98,112,117,116,115,0);
    let appleT = true;
    let promotionZ = String.fromCharCode(116,105,99,107,101,114,0);
    let sortW = String.fromCharCode(114,101,115,101,97,114,99,104,0);
    let interstitialk = 4.0;
    let bell3 = 1;
    let shirtT: Map<any, any> = new Map([[String.fromCharCode(112,105,120,101,108,98,117,102,102,101,114,0),String.fromCharCode(112,97,115,115,105,118,101,0)], [String.fromCharCode(105,100,97,115,115,101,116,115,0),String.fromCharCode(99,111,109,112,108,101,120,0)]]);
    let rewindW: Array<any> = [101, 30];
    let downloadingg: Map<any, any> = new Map([[String.fromCharCode(98,117,116,116,111,110,115,0),String.fromCharCode(100,101,108,105,109,105,116,101,100,0)], [String.fromCharCode(111,112,117,115,102,105,108,101,0),String.fromCharCode(108,101,102,116,109,111,115,116,0)]]);
    let vertical9 = String.fromCharCode(115,111,117,114,99,101,115,0);
    let orangeS = String.fromCharCode(104,97,110,100,101,114,0);
    let giftb = String.fromCharCode(99,111,109,109,105,116,0);
    let watchm = String.fromCharCode(112,105,110,99,104,0);
    let projectg = String.fromCharCode(102,105,110,105,115,104,101,100,0);
   if (2 >= (3 % (Math.max(4, bell3)))) {
      interstitialk += parseFloat(`${2 << (Math.min(4, Math.abs(parseInt(`${interstitialk}`))))}`);
   }
      rewindW = [sortW.length + 1];
      gesturec += `${(String.fromCharCode(55,0) == vertical9 ? shirtT.size : vertical9.length)}`;
   let containerU = 9267257 >= shirtT.size;
   do {
      shirtT = new Map([[`${appleT}`, 2]]);
      if (containerU) {
         break;
      }
   } while (containerU && (shirtT.size >= 4));

    if (showloading) {

      bell3 ^= sortW.length - gesturec.length;
   let selectionZ = rewindW.length <= 7591663;
   do {
      rewindW = [policyM ^ 3];
      if (selectionZ) {
         break;
      }
   } while ((Array.from(shirtT.values()).includes(rewindW.length)) && selectionZ);
   if ((4.54 - interstitialk) > 3.70 && 4.54 > (interstitialk - parseFloat(`${shirtT.size}`))) {
      shirtT = new Map([[orangeS, 1]]);
   }
   while (1 >= (shirtT.size >> (Math.min(Math.abs(2), 4))) && (shirtT.size >> (Math.min(sortW.length, 4))) >= 2) {
      shirtT = new Map([[sortW, sortW.length]]);
      break;
   }
      setIsRefreshing(true);
    }
    try {

      orangeS = `${bell3 << (Math.min(vertical9.length, 2))}`;
   let leaguek = 6123538 >= orangeS.length;
   do {
       let dragh = String.fromCharCode(104,115,116,114,105,110,103,0);
       let scoreW: Array<any> = [109, 430, 141];
       let temperaturex: Map<any, any> = new Map([[String.fromCharCode(112,114,111,112,101,114,121,0),true ], [String.fromCharCode(111,109,112,111,115,101,0),true ], [String.fromCharCode(100,114,111,112,120,0),false ]]);
       let feedbackP = String.fromCharCode(115,112,108,105,116,116,101,114,0);
       let selectedn: Map<any, any> = new Map([[String.fromCharCode(119,97,115,116,101,100,0),570], [String.fromCharCode(97,100,97,112,116,105,118,101,0),618], [String.fromCharCode(112,101,101,114,110,97,109,101,0),42]]);
      let expanda = scoreW.length >= 9611276;
      do {
          let linkW: Array<any> = [730, 128];
          let refreshB: Map<any, any> = new Map([[String.fromCharCode(104,99,108,114,0),421], [String.fromCharCode(108,105,98,101,118,101,110,116,0),552], [String.fromCharCode(109,101,101,116,117,112,0),355]]);
          let sport0 = 2.0;
          let watch3 = 0.0;
          let bootsplashF = String.fromCharCode(111,110,101,115,0);
         scoreW = [selectedn.size];
         linkW = [parseInt(`${watch3}`) - linkW.length];
         refreshB = new Map([[`${refreshB.size}`, bootsplashF.length]]);
         sport0 *= parseFloat(`${parseInt(`${watch3}`) + 3}`);
         bootsplashF += `${linkW.length ^ parseInt(`${watch3}`)}`;
         if (expanda) {
            break;
         }
      } while ((dragh.endsWith(`${scoreW.length}`)) && expanda);
       let skipk = String.fromCharCode(98,114,105,101,102,108,121,0);
       let typesL = String.fromCharCode(101,118,97,108,0);
          let eventn = 5.0;
         scoreW = [3 / (Math.max(9, skipk.length))];
         eventn *= parseFloat(`${2}`);
       let xvodT = String.fromCharCode(102,114,105,101,110,100,108,121,0);
       let kickl = String.fromCharCode(118,97,97,112,105,0);
      while (typesL.length >= xvodT.length) {
         xvodT += `${typesL.length}`;
         break;
      }
          let clubs = String.fromCharCode(109,105,108,108,105,115,0);
          let playlistp: Map<any, any> = new Map([[String.fromCharCode(99,97,114,100,97,110,111,0),true ], [String.fromCharCode(97,99,101,110,99,0),true ]]);
         feedbackP = "3";
         clubs += `${playlistp.size}`;
         playlistp = new Map([[`${playlistp.size}`, clubs.length]]);
          let upgradey = String.fromCharCode(114,101,111,115,0);
         typesL = `${dragh.length}`;
         upgradey += `${upgradey.length | upgradey.length}`;
      if (dragh.length >= xvodT.length) {
         xvodT = `${2 - typesL.length}`;
      }
      while (!dragh.includes(`${temperaturex.size}`)) {
         dragh += `${3 * temperaturex.size}`;
         break;
      }
       let currentq: Map<any, any> = new Map([[String.fromCharCode(115,112,105,110,110,105,110,103,0),true ], [String.fromCharCode(114,101,97,109,0),true ], [String.fromCharCode(116,111,116,97,108,0),true ]]);
       let infoe: Map<any, any> = new Map([[String.fromCharCode(99,104,101,118,114,111,110,0),370], [String.fromCharCode(116,101,115,116,98,105,116,0),180], [String.fromCharCode(99,97,99,104,105,110,103,0),728]]);
         typesL += `${(String.fromCharCode(74,0) == feedbackP ? feedbackP.length : dragh.length)}`;
       let aboutu: Array<any> = [String.fromCharCode(116,101,110,115,105,111,110,0), String.fromCharCode(113,117,97,100,116,114,101,101,0)];
       let frame_v2S: Array<any> = [279, 888, 18];
          let inewsu: Map<any, any> = new Map([[String.fromCharCode(116,111,103,103,108,101,0),String.fromCharCode(99,117,109,101,0)], [String.fromCharCode(106,111,105,110,0),String.fromCharCode(100,117,109,112,105,110,102,111,0)], [String.fromCharCode(114,101,112,101,97,116,101,100,108,121,0),String.fromCharCode(103,101,116,112,97,100,100,114,115,0)]]);
         feedbackP = `${1 << (Math.min(4, kickl.length))}`;
         inewsu.set(`${inewsu.size}`, inewsu.size);
         aboutu.push(3);
      if ((5 / (Math.max(7, temperaturex.size))) < 5 || (dragh.length / (Math.max(5, 1))) < 3) {
         dragh += `${xvodT.length}`;
      }
      orangeS += `${vertical9.length ^ 2}`;
      if (leaguek) {
         break;
      }
   } while (leaguek && (promotionZ.includes(`${orangeS.length}`)));
   while (sortW.includes(orangeS)) {
      orangeS = "2";
      break;
   }
   while (giftb.includes(`${orangeS.length}`)) {
       let roomT = 1.0;
       let servicey = 1.0;
       let tailL = String.fromCharCode(117,101,117,101,0);
       let overlayT = String.fromCharCode(112,114,111,116,101,99,116,0);
       let calendaru: Array<any> = [662, 643, 696];
         tailL += "3";
      if (calendaru.length > 1) {
         tailL += `${overlayT.length / 2}`;
      }
         servicey *= 2;
         calendaru.push(2);
      let zhengpianl = tailL == String.fromCharCode(102,97,112,51,0);
      do {
         tailL = `${2 * parseInt(`${roomT}`)}`;
         if (zhengpianl) {
            break;
         }
      } while ((1 < overlayT.length || 1 < tailL.length) && zhengpianl);
       let modityF = String.fromCharCode(109,97,120,98,117,114,115,116,0);
       let shrinkU = String.fromCharCode(100,121,110,108,111,97,100,0);
      let pageg = shrinkU.length >= 6865607;
      do {
         shrinkU += `${2 - overlayT.length}`;
         if (pageg) {
            break;
         }
      } while (pageg && (tailL.endsWith(shrinkU)));
       let megaphoneO = true;
       let header1 = true;
       let nterstitials = 1;
       let turnz = 5.0;
      while (servicey >= 1.27) {
          let activeS = 5;
         servicey -= parseInt(`${servicey}`) >> (Math.min(5, Math.abs(1)));
         activeS /= Math.max(2, 1);
         break;
      }
      while ((3.12 + servicey) < 4.27 && header1) {
         header1 = tailL.length > nterstitials;
         break;
      }
          let windp: Array<any> = [911, 50];
          let gesturesd = 0.0;
          let floaterW: Map<any, any> = new Map([[String.fromCharCode(97,116,97,98,108,101,115,0),true ], [String.fromCharCode(115,99,97,110,115,0),true ], [String.fromCharCode(98,101,99,104,0),false ]]);
         roomT -= 2 % (Math.max(parseInt(`${gesturesd}`), 1));
         windp.push(2);
         gesturesd += floaterW.size ^ windp.length;
         floaterW.set(`${windp.length}`, windp.length & 3);
         turnz *= (tailL == String.fromCharCode(50,0) ? tailL.length : calendaru.length);
         megaphoneO = !header1;
      orangeS = `${3 % (Math.max(7, parseInt(`${roomT}`)))}`;
      break;
   }
      await queryClient.resetQueries(["HomePage", id]);

   for (let d = 0; d < 2; d++) {
      bell3 >>= Math.min(Math.abs(downloadingg.size), 4);
   }
   for (let o = 0; o < 2; o++) {
      bell3 -= ((appleT ? 1 : 5) & parseInt(`${interstitialk}`));
   }
   let favicont = 7358834.0 <= interstitialk;
   do {
      interstitialk /= Math.max(2, parseFloat(`${downloadingg.size}`));
      if (favicont) {
         break;
      }
   } while ((2.84 < (interstitialk / 3.95)) && favicont);
      sortW += `${orangeS.length ^ shirtT.size}`;

      setIsRefreshing(false);

   while (vertical9.length > 5) {
      sortW = `${giftb.length}`;
      break;
   }
       let drag0: Array<any> = [428, 264, 320];
       let humidityd = String.fromCharCode(118,105,101,119,101,100,0);
       let rank6 = 1;
      let loginU = humidityd.length <= 9723670;
      do {
         humidityd = `${rank6}`;
         if (loginU) {
            break;
         }
      } while (loginU && ((humidityd.length << (Math.min(5, drag0.length))) >= 2 && (drag0.length << (Math.min(Math.abs(2), 2))) >= 3));
         humidityd = `${rank6 - drag0.length}`;
      while ((humidityd.length ^ 5) >= 4 && 5 >= (rank6 ^ humidityd.length)) {
         humidityd += `${1 / (Math.max(6, humidityd.length))}`;
         break;
      }
          let umengf = String.fromCharCode(105,118,115,101,116,117,112,0);
         drag0.push(humidityd.length);
         umengf = `${umengf.length}`;
      let sansc = String.fromCharCode(106,55,122,119,56,53,115,57,121,117,0) == humidityd;
      do {
          let settingsP: Array<any> = [838, 882, 48];
          let awayw = 0.0;
          let faviconX = true;
          let redirect5 = 0;
         humidityd = `${drag0.length % 1}`;
         settingsP.push((3 ^ (faviconX ? 1 : 2)));
         awayw -= 2 >> (Math.min(Math.abs(redirect5), 2));
         faviconX = !faviconX || 91 < redirect5;
         if (sansc) {
            break;
         }
      } while (sansc && (3 <= (2 | drag0.length)));
         rank6 >>= Math.min(Math.abs((humidityd == String.fromCharCode(54,0) ? humidityd.length : rank6)), 2);
         humidityd += `${(humidityd == String.fromCharCode(52,0) ? rank6 : humidityd.length)}`;
          let contextR = String.fromCharCode(98,108,117,114,97,121,0);
          let faviconv: Array<any> = [774, 454, 88];
         drag0.push(1);
         contextR = `${faviconv.length}`;
         faviconv = [faviconv.length / 3];
          let successs = String.fromCharCode(101,110,99,108,111,115,105,110,103,0);
          let linef = 5.0;
          let ajaxE = 4;
         humidityd = `${humidityd.length}`;
         successs = `${successs.length % 1}`;
         linef -= parseInt(`${linef}`) % 2;
         ajaxE += 2;
      appleT = sortW.length > downloadingg.size;
   while (orangeS.length > 1 || giftb != String.fromCharCode(72,0)) {
      orangeS += `${gesturec.length}`;
      break;
   }
   while (downloadingg.get(`${policyM}`) != null) {
      downloadingg = new Map([[giftb, parseInt(`${interstitialk}`)]]);
      break;
   }
      setNavId(id);

      giftb = `${bell3 - 3}`;
   while ((policyM | sortW.length) == 2 && 4 == (2 | sortW.length)) {
       let analyticZ = String.fromCharCode(112,111,112,117,112,115,0);
       let episodesC = String.fromCharCode(100,113,117,111,116,101,0);
       let login6 = 2;
       let configurev: Array<any> = [808, 210];
       let configq = 3;
         episodesC += `${configq / (Math.max(episodesC.length, 6))}`;
      while (2 <= (configurev.length % (Math.max(3, episodesC.length))) && (configurev.length % 2) <= 2) {
          let mappingo: Map<any, any> = new Map([[String.fromCharCode(97,116,111,109,115,0),664], [String.fromCharCode(115,99,114,101,101,110,0),202], [String.fromCharCode(114,101,115,101,116,117,112,0),8]]);
          let otherc = 2.0;
          let episodei = 3.0;
          let select9 = String.fromCharCode(119,112,101,110,100,105,110,103,0);
         episodesC += "1";
         mappingo = new Map([[select9, parseInt(`${episodei}`)]]);
         otherc += 1;
         episodei /= Math.max(2, parseFloat(`${select9.length}`));
         break;
      }
         login6 >>= Math.min(Math.abs((String.fromCharCode(66,0) == episodesC ? analyticZ.length : episodesC.length)), 4);
      for (let b = 0; b < 2; b++) {
         episodesC = `${configq >> (Math.min(4, Math.abs(3)))}`;
      }
         episodesC = `${2 << (Math.min(Math.abs(configq), 5))}`;
         login6 += 3 | analyticZ.length;
         analyticZ += `${3 * analyticZ.length}`;
      for (let e = 0; e < 1; e++) {
         configurev = [analyticZ.length - 1];
      }
      for (let o = 0; o < 1; o++) {
          let volumev = String.fromCharCode(100,105,114,101,99,116,111,114,121,0);
          let sportx = 1.0;
         episodesC = `${3 << (Math.min(4, episodesC.length))}`;
         volumev += "1";
         sportx /= Math.max(parseFloat(`${3 >> (Math.min(4, Math.abs(parseInt(`${sportx}`))))}`), 2);
      }
          let matchd = String.fromCharCode(99,117,101,115,0);
          let product6 = 5.0;
          let gmaily = String.fromCharCode(116,95,55,49,0);
         episodesC += `${parseInt(`${product6}`) >> (Math.min(Math.abs(2), 4))}`;
         matchd = `${gmaily.length}`;
         product6 *= parseFloat(`${matchd.length}`);
         gmaily += `${gmaily.length}`;
         episodesC += `${configq}`;
          let leftA: Map<any, any> = new Map([[String.fromCharCode(100,101,108,105,118,101,114,121,0),21], [String.fromCharCode(112,111,115,116,102,105,120,0),968]]);
          let annerC = true;
         login6 ^= analyticZ.length | 3;
         leftA = new Map([[`${leftA.size}`, leftA.size]]);
         annerC = leftA.size > 67;
         analyticZ = "2";
         login6 |= configurev.length;
      let indicatorz = analyticZ == String.fromCharCode(121,122,114,104,49,0);
      do {
          let grayr = 4.0;
         analyticZ = `${analyticZ.length | 1}`;
         grayr /= Math.max(parseFloat(`${parseInt(`${grayr}`)}`), 3);
         if (indicatorz) {
            break;
         }
      } while (indicatorz && (configq == 3));
      policyM *= 1 * giftb.length;
      break;
   }
      bell3 <<= Math.min(Math.abs(1 << (Math.min(Math.abs(policyM), 3))), 1);
   for (let q = 0; q < 2; q++) {
       let assistS = String.fromCharCode(97,100,100,105,0);
       let middleh = 0;
       let appsS = String.fromCharCode(98,108,111,99,107,105,110,101,115,115,0);
         middleh |= appsS.length ^ middleh;
         assistS = `${1 % (Math.max(6, middleh))}`;
      for (let d = 0; d < 1; d++) {
          let default_nrl = String.fromCharCode(119,101,98,109,100,101,99,0);
          let download0 = String.fromCharCode(114,101,117,112,108,111,97,100,0);
          let referrer1 = String.fromCharCode(109,111,100,101,99,111,110,116,0);
          let pointu = String.fromCharCode(112,105,99,107,0);
          let trophyd: Array<any> = [656, 40];
         appsS += `${referrer1.length >> (Math.min(1, pointu.length))}`;
         default_nrl += `${(String.fromCharCode(81,0) == download0 ? download0.length : trophyd.length)}`;
         referrer1 = "3";
         pointu += `${3 & trophyd.length}`;
      }
         assistS = `${1 >> (Math.min(3, Math.abs(middleh)))}`;
         middleh ^= middleh;
      let update_n6C = middleh >= 9212797;
      do {
          let matchest = 0.0;
          let helperu = true;
          let moviesp = 5.0;
         middleh <<= Math.min(2, Math.abs((parseInt(`${moviesp}`) * (helperu ? 2 : 3))));
         matchest *= parseFloat(`${1}`);
         helperu = (matchest - matchest) >= 82.13;
         if (update_n6C) {
            break;
         }
      } while (update_n6C && ((middleh / (Math.max(1, 10))) <= 2));
          let videow = String.fromCharCode(98,117,110,100,108,101,115,0);
          let starI = String.fromCharCode(110,97,118,105,0);
         assistS = `${middleh % (Math.max(assistS.length, 2))}`;
         videow = `${videow.length}`;
         starI += `${videow.length * 3}`;
      for (let t = 0; t < 2; t++) {
          let cross2 = 2.0;
          let with_xrt = 1.0;
         appsS = `${1 | middleh}`;
         cross2 *= parseFloat(`${parseInt(`${with_xrt}`)}`);
      }
      if (1 >= (assistS.length / 4)) {
          let sheetJ = 4.0;
          let g_center8 = String.fromCharCode(98,105,103,100,105,97,0);
         middleh /= Math.max(5, g_center8.length + 3);
         sheetJ += 2;
         g_center8 += `${2 >> (Math.min(Math.abs(parseInt(`${sheetJ}`)), 5))}`;
      }
      promotionZ = `${1 ^ promotionZ.length}`;
   }
      setShowHomeLoading(false);

      interstitialk -= parseFloat(`${sortW.length & downloadingg.size}`);
      giftb += `${downloadingg.size}`;
       let bcopy_fd = true;
       let rulesJ = String.fromCharCode(115,104,105,102,116,0);
      for (let f = 0; f < 1; f++) {
         rulesJ += `${((bcopy_fd ? 2 : 5))}`;
      }
      for (let x = 0; x < 1; x++) {
         bcopy_fd = bcopy_fd && rulesJ.length >= 12;
      }
      if (!bcopy_fd) {
         rulesJ = "1";
      }
      let volumeL = 7060655 <= rulesJ.length;
      do {
          let handlerc: Array<any> = [509, 682, 670];
          let dangerq: Map<any, any> = new Map([[String.fromCharCode(100,99,97,100,115,112,0),201], [String.fromCharCode(112,97,99,107,101,114,0),732], [String.fromCharCode(99,101,110,116,114,101,0),110]]);
          let resultl: Map<any, any> = new Map([[String.fromCharCode(100,105,109,101,110,115,105,111,110,115,0),true ], [String.fromCharCode(114,101,97,99,104,97,98,105,108,105,116,121,0),true ]]);
          let window_t4 = String.fromCharCode(97,109,112,108,105,116,117,100,101,0);
         rulesJ = "3";
         handlerc.push(handlerc.length & 1);
         dangerq.set(`${handlerc.length}`, dangerq.size);
         resultl = new Map([[`${dangerq.size}`, 2]]);
         window_t4 += `${dangerq.size}`;
         if (volumeL) {
            break;
         }
      } while (volumeL && (4 > rulesJ.length));
         rulesJ += `${rulesJ.length << (Math.min(Math.abs(2), 5))}`;
      for (let c = 0; c < 3; c++) {
         bcopy_fd = rulesJ.length < 81;
      }
      orangeS += "1";
       let entryT = String.fromCharCode(101,120,105,115,116,101,110,99,101,0);
       let combine4 = String.fromCharCode(113,115,99,97,108,101,113,108,111,103,0);
       let chatX = String.fromCharCode(97,118,100,99,116,0);
      let collection8 = String.fromCharCode(50,104,122,54,0) == combine4;
      do {
         combine4 += `${chatX.length & entryT.length}`;
         if (collection8) {
            break;
         }
      } while (collection8 && (3 == entryT.length));
         combine4 = `${combine4.length}`;
      let minivodd = 8694715 >= chatX.length;
      do {
         chatX = `${combine4.length}`;
         if (minivodd) {
            break;
         }
      } while ((1 < chatX.length) && minivodd);
      while (chatX == String.fromCharCode(84,0)) {
         entryT = `${1 / (Math.max(1, combine4.length))}`;
         break;
      }
       let searchJ = String.fromCharCode(114,101,108,102,117,110,99,0);
       let theme3 = String.fromCharCode(100,105,97,108,111,103,117,101,115,0);
         entryT += `${(String.fromCharCode(122,0) == searchJ ? searchJ.length : chatX.length)}`;
         searchJ += "2";
         searchJ += `${theme3.length / (Math.max(1, 7))}`;
         entryT = `${chatX.length | 3}`;
      sortW += `${chatX.length}`;

      return;
    } catch (error) {

   if (vertical9 == gesturec) {
       let bellT = 4;
       let frame_u8m = String.fromCharCode(98,105,116,115,113,112,0);
      if (frame_u8m.endsWith(`${bellT}`)) {
          let umengS = 2;
         frame_u8m = `${(frame_u8m == String.fromCharCode(100,0) ? bellT : frame_u8m.length)}`;
         umengS %= Math.max(umengS & 3, 3);
      }
       let tumbnailS = 2.0;
       let lessW = 0.0;
      gesturec += "2";
   }
   if (sortW == String.fromCharCode(66,0)) {
       let editX = String.fromCharCode(101,110,102,111,114,99,101,0);
       let crossw: Map<any, any> = new Map([[String.fromCharCode(109,112,101,103,97,117,100,105,111,116,97,98,0),112], [String.fromCharCode(105,110,100,101,111,100,97,116,97,0),569], [String.fromCharCode(115,108,111,112,0),759]]);
       let sinak = 2;
      for (let q = 0; q < 1; q++) {
          let calendarN = false;
          let floatingw = 4.0;
          let textb = String.fromCharCode(104,109,97,99,105,100,0);
          let interstitial5 = 1.0;
         editX += `${sinak}`;
         calendarN = textb.length > 46;
         floatingw /= Math.max(parseInt(`${interstitial5}`), 4);
         textb += `${((calendarN ? 1 : 2) ^ parseInt(`${interstitial5}`))}`;
      }
         editX = `${sinak << (Math.min(Math.abs(3), 3))}`;
          let castingW = String.fromCharCode(111,110,116,114,97,115,116,0);
          let tooltipsu: Map<any, any> = new Map([[String.fromCharCode(99,95,55,57,0),String.fromCharCode(114,101,100,101,116,101,99,116,0)], [String.fromCharCode(116,114,105,109,109,101,100,0),String.fromCharCode(119,111,114,100,0)]]);
         crossw.set(`${sinak}`, 1 >> (Math.min(4, editX.length)));
         castingW += `${1 & castingW.length}`;
         tooltipsu.set(`${castingW}`, tooltipsu.size);
       let actionf = String.fromCharCode(102,102,105,111,0);
         actionf = `${(actionf == String.fromCharCode(79,0) ? editX.length : actionf.length)}`;
      while (editX.length == crossw.size) {
         editX = `${2 + editX.length}`;
         break;
      }
       let heart9 = String.fromCharCode(106,117,115,116,105,102,105,99,97,116,105,111,110,0);
         crossw.set(heart9, actionf.length);
         crossw.set(heart9, 3);
      vertical9 = `${sortW.length}`;
   }
   while (vertical9.length < downloadingg.size) {
      downloadingg.set(`${rewindW.length}`, rewindW.length * 1);
      break;
   }
   for (let q = 0; q < 1; q++) {
      sortW = "2";
   }
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    const handleTabPress = async () => {
       let anytime8: Map<any, any> = new Map([[String.fromCharCode(109,98,118,115,0),221], [String.fromCharCode(101,109,117,108,97,116,101,100,0),508]]);
    let gestures7: Map<any, any> = new Map([[String.fromCharCode(114,101,97,99,104,101,100,0),false ], [String.fromCharCode(97,109,102,101,110,99,0),false ]]);
    let selectionq = 3.0;
    let s_centern: Map<any, any> = new Map([[String.fromCharCode(114,101,106,111,105,110,0),511], [String.fromCharCode(100,105,115,109,105,115,115,97,108,0),336], [String.fromCharCode(103,101,111,99,111,100,101,100,0),135]]);
    let ajaxO = String.fromCharCode(112,114,101,108,111,97,100,101,100,0);
    let interstitialS: Map<any, any> = new Map([[String.fromCharCode(102,102,97,116,0),227], [String.fromCharCode(98,101,110,99,104,115,0),897]]);
    let stationsL: Map<any, any> = new Map([[String.fromCharCode(100,116,115,0),false ], [String.fromCharCode(116,114,97,99,107,115,0),false ], [String.fromCharCode(112,114,101,112,97,114,105,110,103,0),true ]]);
    let downloadedx = 4;
    let main_bG = 1.0;
    let tickedy = String.fromCharCode(109,115,101,99,115,0);
    let grayq = String.fromCharCode(110,101,116,115,0);
    let clearG = String.fromCharCode(100,101,99,105,109,97,108,0);
    let streaming2 = String.fromCharCode(98,115,116,114,97,99,116,0);
       let pointB = String.fromCharCode(98,108,111,99,107,103,114,111,117,112,0);
       let fullt = String.fromCharCode(117,110,99,111,109,112,114,101,115,115,101,100,0);
       let dataf = String.fromCharCode(100,101,108,116,97,113,0);
         pointB += `${pointB.length << (Math.min(Math.abs(1), 3))}`;
          let thailandb = String.fromCharCode(105,110,116,101,114,97,116,105,111,110,0);
          let helperx = String.fromCharCode(115,99,111,112,101,105,100,0);
          let dropdownD = 3;
         pointB = `${1 << (Math.min(4, Math.abs(dropdownD)))}`;
         thailandb += `${helperx.length / 1}`;
         helperx = `${(helperx == String.fromCharCode(97,0) ? thailandb.length : helperx.length)}`;
         dropdownD /= Math.max(helperx.length + thailandb.length, 1);
      if (fullt.includes(`${dataf.length}`)) {
         dataf += `${fullt.length * 2}`;
      }
         pointB += `${fullt.length >> (Math.min(Math.abs(2), 3))}`;
         dataf += `${fullt.length / (Math.max(1, 10))}`;
          let loadingD = false;
          let adultn = 3.0;
          let feedbacky = String.fromCharCode(100,99,98,108,111,99,107,0);
         dataf += `${((loadingD ? 1 : 1) - feedbacky.length)}`;
         loadingD = adultn > 9.42 && 9.42 > adultn;
      if (!fullt.includes(pointB)) {
         fullt += `${dataf.length}`;
      }
      while (fullt.length <= pointB.length) {
          let clear7 = String.fromCharCode(104,97,115,104,116,97,98,108,101,122,0);
          let combinev = String.fromCharCode(99,111,110,99,101,97,108,0);
          let sourceO = 0.0;
          let modeli = 1;
         fullt += `${combinev.length - 1}`;
         clear7 = `${parseInt(`${sourceO}`) << (Math.min(Math.abs(2), 2))}`;
         combinev += `${(clear7 == String.fromCharCode(70,0) ? parseInt(`${sourceO}`) : clear7.length)}`;
         modeli &= (clear7 == String.fromCharCode(79,0) ? clear7.length : modeli);
         break;
      }
         dataf = "2";
      s_centern.set(fullt, fullt.length);
   while (5.22 > selectionq) {
       let configm = 0.0;
       let confirmation8 = String.fromCharCode(110,111,110,110,117,108,108,115,99,104,101,109,101,115,0);
       let config8 = 1;
       let logouti = String.fromCharCode(112,101,110,100,105,110,103,115,0);
       let settingM = String.fromCharCode(105,110,108,101,110,0);
       let sort3 = String.fromCharCode(115,112,108,105,110,101,0);
       let searchJ: Map<any, any> = new Map([[String.fromCharCode(110,97,109,101,115,101,114,118,101,114,115,0),618], [String.fromCharCode(110,97,116,117,114,97,108,0),324], [String.fromCharCode(114,101,97,100,102,114,97,109,101,0),560]]);
       let detailsN: Map<any, any> = new Map([[String.fromCharCode(115,116,117,102,102,115,116,0),String.fromCharCode(114,101,115,105,115,116,97,110,99,101,0)], [String.fromCharCode(115,117,98,116,114,97,99,116,105,111,110,0),String.fromCharCode(112,97,114,105,116,105,111,110,105,110,103,0)], [String.fromCharCode(112,117,98,108,105,115,104,101,100,0),String.fromCharCode(115,99,111,114,101,115,0)]]);
          let fastforwardY = 3.0;
         searchJ.set(`${fastforwardY}`, 3);
          let mathO: Array<any> = [557, 221, 578];
          let downloadingN: Map<any, any> = new Map([[String.fromCharCode(114,101,97,114,114,97,110,103,101,0),String.fromCharCode(116,104,114,101,97,100,0)], [String.fromCharCode(116,101,114,109,105,110,97,116,101,100,0),String.fromCharCode(116,114,97,110,115,102,111,114,109,0)], [String.fromCharCode(97,108,103,111,114,105,116,104,109,0),String.fromCharCode(108,105,98,118,101,114,115,105,111,110,0)]]);
          let fastforwardM: Array<any> = [127, 622];
         settingM += `${detailsN.size}`;
         mathO = [mathO.length & 1];
         downloadingN.set(`${mathO.length}`, 3);
         fastforwardM.push(3 * fastforwardM.length);
         detailsN.set(`${config8}`, (logouti == String.fromCharCode(71,0) ? logouti.length : config8));
      while (!settingM.startsWith(`${detailsN.size}`)) {
         settingM += `${config8 | parseInt(`${configm}`)}`;
         break;
      }
       let textN = 2.0;
       let sortJ = 4.0;
          let headerz = true;
         sort3 += "1";
         headerz = (headerz ? headerz : headerz);
      selectionq *= config8;
      configm /= Math.max(1, 3);
      confirmation8 += `${confirmation8.length ^ confirmation8.length}`;
      break;
   }
   let matchesJ = selectionq <= 6038514.0;
   do {
      selectionq /= Math.max(anytime8.size - grayq.length, 3);
      if (matchesJ) {
         break;
      }
   } while ((s_centern.get(`${selectionq}`) != null) && matchesJ);
       let confirmation4 = 0;
       let regengL = String.fromCharCode(115,97,110,105,116,121,0);
       let regengJ = String.fromCharCode(112,114,101,112,97,114,101,100,0);
         regengL = `${regengJ.length & 3}`;
       let plash9 = String.fromCharCode(100,105,115,97,112,112,101,97,114,97,110,99,101,0);
       let mutedK = String.fromCharCode(112,111,115,101,115,0);
         mutedK = `${1 - regengJ.length}`;
      for (let e = 0; e < 1; e++) {
          let expandQ = String.fromCharCode(115,105,122,101,0);
          let weiboE = 5.0;
         plash9 += `${(String.fromCharCode(101,0) == regengL ? regengL.length : mutedK.length)}`;
         expandQ += `${expandQ.length}`;
         weiboE *= parseInt(`${weiboE}`) / 2;
      }
         mutedK = "2";
      let windI = String.fromCharCode(98,114,101,106,106,111,108,0) == plash9;
      do {
         plash9 += `${mutedK.length >> (Math.min(4, plash9.length))}`;
         if (windI) {
            break;
         }
      } while (windI && (plash9.length > 5));
      while (!regengJ.startsWith(`${regengL.length}`)) {
          let cornerJ = String.fromCharCode(101,110,99,105,114,99,108,101,100,0);
          let whatsappi = String.fromCharCode(112,114,111,106,101,99,116,0);
          let analyticsH = String.fromCharCode(115,119,97,112,112,101,114,0);
          let philippinesF = 4;
          let dragj: Array<any> = [723, 137];
         regengL += `${3 >> (Math.min(3, Math.abs(confirmation4)))}`;
         cornerJ += "3";
         whatsappi = `${cornerJ.length & whatsappi.length}`;
         analyticsH = `${(String.fromCharCode(102,0) == analyticsH ? dragj.length : analyticsH.length)}`;
         philippinesF &= cornerJ.length;
         dragj = [analyticsH.length];
         break;
      }
         confirmation4 &= regengL.length;
         regengJ = `${regengJ.length | 3}`;
      interstitialS.set(regengL, 1);

      if (isFocused && !isRefreshing) {

      s_centern = new Map([[`${gestures7.size}`, 1 - interstitialS.size]]);
   let loadingR = downloadedx >= 8082004;
   do {
      downloadedx ^= grayq.length - 2;
      if (loadingR) {
         break;
      }
   } while (loadingR && ((stationsL.size % 3) > 2));
   for (let n = 0; n < 1; n++) {
       let confirmation_ = 5.0;
       let eventJ: Map<any, any> = new Map([[String.fromCharCode(102,108,97,116,116,101,110,0),750], [String.fromCharCode(118,112,99,120,0),810], [String.fromCharCode(116,121,112,101,100,0),604]]);
       let mappingv = false;
       let statisticsN = 1.0;
      while (!Array.from(eventJ.keys()).includes(`${confirmation_}`)) {
         confirmation_ *= parseFloat(`${eventJ.size}`);
         break;
      }
      if (3.37 < statisticsN || 1.38 < (statisticsN - 3.37)) {
         mappingv = 27 < eventJ.size;
      }
       let pausex: Map<any, any> = new Map([[String.fromCharCode(109,107,100,105,114,0),String.fromCharCode(115,116,117,102,102,105,110,103,0)], [String.fromCharCode(98,114,117,116,101,102,111,114,99,101,0),String.fromCharCode(97,117,100,105,111,100,115,112,0)]]);
       let clockl: Map<any, any> = new Map([[String.fromCharCode(115,117,112,101,114,110,111,100,101,115,0),906], [String.fromCharCode(98,114,105,100,103,105,110,103,0),257], [String.fromCharCode(102,97,99,116,111,114,105,122,97,116,105,111,110,0),510]]);
      for (let c = 0; c < 3; c++) {
         clockl = new Map([[`${eventJ.size}`, 1]]);
      }
         confirmation_ -= parseFloat(`${clockl.size}`);
      for (let q = 0; q < 1; q++) {
          let promotionC = String.fromCharCode(119,105,100,101,115,99,114,101,101,110,0);
          let updatesw = 5;
          let tooltipsY = String.fromCharCode(115,116,101,112,119,105,115,101,0);
          let umengy = true;
          let filledD = String.fromCharCode(109,112,111,115,0);
         statisticsN *= eventJ.size;
         promotionC = `${updatesw}`;
         updatesw ^= filledD.length;
         tooltipsY += `${2 << (Math.min(5, Math.abs(updatesw)))}`;
         umengy = filledD.length >= 13;
      }
      while (eventJ.size == pausex.size) {
         pausex = new Map([[`${eventJ.size}`, eventJ.size / (Math.max(2, clockl.size))]]);
         break;
      }
       let headerV = String.fromCharCode(109,105,108,108,105,115,101,99,111,110,100,115,0);
       let sansM = String.fromCharCode(110,111,99,111,108,115,101,116,0);
      let field_ = 7794116 >= eventJ.size;
      do {
         eventJ = new Map([[`${eventJ.size}`, eventJ.size >> (Math.min(Math.abs(3), 5))]]);
         if (field_) {
            break;
         }
      } while (((5 & eventJ.size) > 5 || !mappingv) && field_);
      while ((eventJ.size << (Math.min(Math.abs(4), 4))) >= 1 || (eventJ.size << (Math.min(Math.abs(4), 4))) >= 1) {
         sansM += `${parseInt(`${statisticsN}`) >> (Math.min(1, Math.abs(1)))}`;
         break;
      }
      let u_centerk = mappingv ? !mappingv : mappingv;
      do {
         mappingv = null == clockl.get(`${confirmation_}`);
         if (u_centerk) {
            break;
         }
      } while (u_centerk && (3 == pausex.size));
         sansM += `${(pausex.size ^ (mappingv ? 4 : 1))}`;
      interstitialS = new Map([[ajaxO, 1 ^ ajaxO.length]]);
   }
      tickedy = `${stationsL.size}`;
        setIsRefreshing((prevIsRefreshing) => {

   let expiredV = interstitialS.size <= 7917716;
   do {
      interstitialS.set(`${selectionq}`, ajaxO.length + parseInt(`${selectionq}`));
      if (expiredV) {
         break;
      }
   } while (expiredV && (!Array.from(interstitialS.keys()).includes(`${anytime8.size}`)));
   if (anytime8.get(`${selectionq}`) != null) {
      anytime8.set(`${gestures7.size}`, stationsL.size);
   }
       let leaguek: Map<any, any> = new Map([[String.fromCharCode(115,117,98,109,111,100,101,108,115,0),true ], [String.fromCharCode(104,97,115,104,101,115,0),true ], [String.fromCharCode(112,114,101,102,111,114,109,97,116,116,101,100,0),false ]]);
         leaguek = new Map([[`${leaguek.size}`, leaguek.size & leaguek.size]]);
         leaguek = new Map([[`${leaguek.size}`, leaguek.size]]);
      for (let t = 0; t < 1; t++) {
         leaguek.set(`${leaguek.size}`, 1 << (Math.min(3, Math.abs(leaguek.size))));
      }
      downloadedx *= 3;
      stationsL.set(`${downloadedx}`, 3 / (Math.max(3, downloadedx)));
          if (prevIsRefreshing) {

      main_bG *= interstitialS.size;
   while (interstitialS.get(`${stationsL.size}`) == null) {
      interstitialS.set(`${selectionq}`, parseInt(`${selectionq}`) % 1);
      break;
   }
       let backgroundv: Map<any, any> = new Map([[String.fromCharCode(108,97,116,116,105,99,101,0),944], [String.fromCharCode(104,105,103,104,115,104,101,108,102,0),843]]);
       let window_o2 = true;
      for (let b = 0; b < 3; b++) {
         backgroundv.set(`${window_o2}`, backgroundv.size);
      }
         window_o2 = !window_o2;
         window_o2 = !window_o2;
      for (let k = 0; k < 2; k++) {
         backgroundv = new Map([[`${backgroundv.size}`, (3 >> (Math.min(1, Math.abs((window_o2 ? 4 : 5)))))]]);
      }
      for (let x = 0; x < 2; x++) {
         window_o2 = null == backgroundv.get(`${window_o2}`);
      }
      for (let z = 0; z < 2; z++) {
         window_o2 = backgroundv.size >= 97;
      }
      selectionq -= 3;
      ajaxO += `${stationsL.size}`;
            return prevIsRefreshing; 
          } else {

      s_centern = new Map([[`${s_centern.size}`, s_centern.size * 2]]);
      ajaxO += `${interstitialS.size + anytime8.size}`;
   let l_lockX = String.fromCharCode(52,101,120,122,114,103,114,105,0) == ajaxO;
   do {
      ajaxO += "3";
      if (l_lockX) {
         break;
      }
   } while (((5 >> (Math.min(4, ajaxO.length))) >= 1) && l_lockX);
   while ((gestures7.size % (Math.max(tickedy.length, 2))) < 5 || 5 < (gestures7.size % (Math.max(tickedy.length, 10)))) {
      gestures7 = new Map([[`${s_centern.size}`, grayq.length]]);
      break;
   }
            return true; 
          }
        });

   while ((tickedy.length ^ downloadedx) >= 4) {
      tickedy = `${anytime8.size}`;
      break;
   }
   for (let t = 0; t < 3; t++) {
       let roboto0 = String.fromCharCode(115,116,114,116,111,100,0);
       let downloaderA = String.fromCharCode(102,105,116,115,0);
       let container6: Array<any> = [160, 184, 728];
       let kcopy_v7r: Map<any, any> = new Map([[String.fromCharCode(108,111,119,101,114,99,97,115,101,100,0),76], [String.fromCharCode(115,110,111,119,0),555]]);
      let completeq = roboto0.length <= 7912850;
      do {
          let baidug = 2.0;
          let middleo = 4.0;
          let turna: Map<any, any> = new Map([[String.fromCharCode(100,108,116,97,0),90], [String.fromCharCode(112,97,99,107,97,103,101,0),184]]);
          let cornerd = String.fromCharCode(112,114,101,118,105,101,119,101,100,0);
          let forward_ = false;
         roboto0 += `${(3 << (Math.min(1, Math.abs((forward_ ? 5 : 5)))))}`;
         baidug -= parseFloat(`${1 + parseInt(`${baidug}`)}`);
         middleo -= parseFloat(`${turna.size * cornerd.length}`);
         turna.set(cornerd, turna.size);
         forward_ = 13.92 == baidug;
         if (completeq) {
            break;
         }
      } while (completeq && (kcopy_v7r.size <= roboto0.length));
      if (3 <= (downloaderA.length ^ kcopy_v7r.size) || 4 <= (kcopy_v7r.size ^ 3)) {
         downloaderA += `${downloaderA.length - 3}`;
      }
      if (roboto0.length < container6.length) {
         roboto0 += `${3 | kcopy_v7r.size}`;
      }
      let save9 = roboto0.length >= 5034669;
      do {
         roboto0 = `${1 * roboto0.length}`;
         if (save9) {
            break;
         }
      } while ((1 <= roboto0.length && downloaderA == String.fromCharCode(118,0)) && save9);
      let incidentI = container6.length >= 7584665;
      do {
          let settingi = String.fromCharCode(109,105,99,114,111,100,118,100,0);
         container6.push(settingi.length & 1);
         if (incidentI) {
            break;
         }
      } while ((container6.length > downloaderA.length) && incidentI);
      for (let t = 0; t < 3; t++) {
         downloaderA = `${container6.length}`;
      }
         kcopy_v7r = new Map([[`${container6.length}`, downloaderA.length]]);
          let banner3 = 4.0;
          let sort4 = 5.0;
          let usernameB = String.fromCharCode(101,120,112,111,110,101,110,116,115,0);
         downloaderA = `${roboto0.length}`;
         banner3 += parseFloat(`${1}`);
         sort4 *= 2 + parseInt(`${banner3}`);
         usernameB = "3";
      let yellowP = String.fromCharCode(50,119,49,105,104,103,107,0) == roboto0;
      do {
          let progressq = false;
          let unreadA = String.fromCharCode(97,115,109,100,101,102,115,0);
          let downloadb = String.fromCharCode(104,101,97,100,108,105,110,101,0);
         roboto0 = `${kcopy_v7r.size & 1}`;
         progressq = 66 < downloadb.length;
         unreadA = `${downloadb.length}`;
         if (yellowP) {
            break;
         }
      } while (((roboto0.length << (Math.min(5, container6.length))) == 2 || 5 == (2 << (Math.min(5, container6.length)))) && yellowP);
      let downloaderm = downloaderA.length <= 9504896;
      do {
         downloaderA = `${downloaderA.length}`;
         if (downloaderm) {
            break;
         }
      } while (downloaderm && (2 <= downloaderA.length));
         downloaderA = `${container6.length | 1}`;
         roboto0 += "1";
      streaming2 += "1";
   }
   for (let i = 0; i < 2; i++) {
       let detailsj = 1.0;
       let main_h3 = 1.0;
       let shootK: Map<any, any> = new Map([[String.fromCharCode(100,101,99,101,108,101,114,97,116,105,110,103,0),100], [String.fromCharCode(115,108,97,115,104,101,115,0),49], [String.fromCharCode(102,105,108,116,101,114,102,110,0),521]]);
      while ((parseInt(`${main_h3}`) / (Math.max(shootK.size, 4))) <= 1) {
          let prediction9 = String.fromCharCode(121,121,121,121,0);
          let themen: Array<any> = [534, 809];
          let invite_ = 0.0;
          let back_ = String.fromCharCode(112,97,99,107,101,116,104,101,97,100,101,114,0);
         shootK = new Map([[`${shootK.size}`, shootK.size]]);
         prediction9 = `${back_.length}`;
         themen = [prediction9.length];
         invite_ /= Math.max(5, parseFloat(`${3}`));
         back_ += `${3 >> (Math.min(4, back_.length))}`;
         break;
      }
      let langkeys = main_h3 >= 5801291.0;
      do {
         main_h3 += shootK.size * 2;
         if (langkeys) {
            break;
         }
      } while ((1.53 == main_h3) && langkeys);
      while (!Array.from(shootK.values()).includes(detailsj)) {
         detailsj *= 2;
         break;
      }
          let readM = 5.0;
          let nativeU = String.fromCharCode(105,100,101,110,116,0);
          let scheduleP = 0.0;
         main_h3 -= parseInt(`${readM}`);
         nativeU += `${nativeU.length}`;
         scheduleP += (nativeU == String.fromCharCode(84,0) ? nativeU.length : parseInt(`${scheduleP}`));
      if (4.93 >= (4.58 - detailsj)) {
         detailsj += parseInt(`${main_h3}`);
      }
         main_h3 /= Math.max(2 + parseInt(`${main_h3}`), 1);
      let anythinkU = shootK.size <= 5298449;
      do {
          let temp6 = String.fromCharCode(114,116,99,115,116,97,116,115,0);
         shootK = new Map([[`${main_h3}`, 2]]);
         temp6 = `${temp6.length}`;
         if (anythinkU) {
            break;
         }
      } while (anythinkU && ((1 & shootK.size) >= 2 || (4.14 - main_h3) >= 2.79));
      if (shootK.size <= 5) {
         shootK.set(`${main_h3}`, parseInt(`${main_h3}`) * shootK.size);
      }
      if ((shootK.size & 5) >= 2 && 3.35 >= (main_h3 / (Math.max(3.94, 5)))) {
         main_h3 /= Math.max(3, parseInt(`${detailsj}`));
      }
      gestures7.set(grayq, clearG.length - grayq.length);
   }
       let datat = 2.0;
       let clearo = 1.0;
       let aboutw: Map<any, any> = new Map([[String.fromCharCode(104,101,97,114,116,115,0),739], [String.fromCharCode(112,97,105,114,119,105,115,101,0),393]]);
      while (clearo < 2.79) {
         aboutw = new Map([[`${aboutw.size}`, 2]]);
         break;
      }
      while ((parseFloat(`${aboutw.size}`) / (Math.max(9, datat))) == 5.95 && (datat / 5.95) == 1.28) {
          let zhengpian2 = String.fromCharCode(112,111,105,110,116,115,0);
          let popupV = 2.0;
          let helpera = true;
          let chartd = 0.0;
          let switch_lN = String.fromCharCode(100,101,116,101,114,109,105,110,101,0);
         datat += parseFloat(`${2 | parseInt(`${datat}`)}`);
         zhengpian2 += `${parseInt(`${chartd}`) % 3}`;
         popupV *= (parseFloat(`${parseInt(`${popupV}`) * (helpera ? 5 : 2)}`));
         helpera = helpera || 80.95 >= popupV;
         chartd -= (parseFloat(`${(helpera ? 5 : 1) / (Math.max(parseInt(`${popupV}`), 10))}`));
         switch_lN = `${(switch_lN == String.fromCharCode(104,0) ? parseInt(`${popupV}`) : switch_lN.length)}`;
         break;
      }
      let drags = 9802049.0 <= clearo;
      do {
         clearo += parseInt(`${clearo}`) * 1;
         if (drags) {
            break;
         }
      } while (drags && ((datat + 1) <= 3.56));
      let halfU = 9635580 <= aboutw.size;
      do {
         aboutw.set(`${datat}`, parseInt(`${clearo}`) / (Math.max(5, parseInt(`${datat}`))));
         if (halfU) {
            break;
         }
      } while ((parseInt(`${clearo}`) >= aboutw.size) && halfU);
          let taiwan0 = 0;
          let textF = String.fromCharCode(105,112,100,111,112,100,0);
          let philippinest = String.fromCharCode(97,118,105,111,0);
         clearo /= Math.max(2, taiwan0);
         taiwan0 += 2;
         textF += `${textF.length >> (Math.min(philippinest.length, 5))}`;
         philippinest = `${philippinest.length / (Math.max(5, textF.length))}`;
      if (Array.from(aboutw.values()).includes(datat)) {
         datat *= parseFloat(`${parseInt(`${clearo}`) & 3}`);
      }
      while (datat > clearo) {
          let historyp = String.fromCharCode(115,117,98,114,101,115,117,108,116,115,0);
          let malaysiaN = String.fromCharCode(108,97,121,101,114,115,0);
          let policyY = 2;
         datat /= Math.max(parseFloat(`${malaysiaN.length}`), 2);
         historyp += `${1 >> (Math.min(2, historyp.length))}`;
         malaysiaN = `${(historyp == String.fromCharCode(86,0) ? historyp.length : policyY)}`;
         policyY %= Math.max(1, (historyp == String.fromCharCode(50,0) ? policyY : historyp.length));
         break;
      }
          let modelsn = 5;
          let floatingq: Map<any, any> = new Map([[String.fromCharCode(97,108,108,111,99,97,116,111,114,0),String.fromCharCode(103,108,111,98,0)], [String.fromCharCode(110,117,109,101,114,97,108,0),String.fromCharCode(100,101,115,101,114,105,97,108,105,122,101,100,0)]]);
          let commentz = 3;
         clearo += commentz | parseInt(`${clearo}`);
         modelsn ^= modelsn << (Math.min(Math.abs(floatingq.size), 2));
         floatingq = new Map([[`${floatingq.size}`, modelsn + 2]]);
         commentz &= floatingq.size;
         clearo += parseInt(`${clearo}`) + parseInt(`${datat}`);
      tickedy = `${s_centern.size}`;
        await handleRefresh(navId, true);

   for (let b = 0; b < 1; b++) {
      streaming2 += `${grayq.length % 3}`;
   }
       let historyo = 1.0;
       let thailandI: Map<any, any> = new Map([[String.fromCharCode(112,112,99,99,111,109,109,111,110,0),String.fromCharCode(99,111,114,114,101,115,112,111,110,100,101,110,116,115,0)], [String.fromCharCode(101,114,118,101,114,0),String.fromCharCode(105,102,97,100,100,114,115,0)]]);
      if (!Array.from(thailandI.values()).includes(historyo)) {
         thailandI = new Map([[`${thailandI.size}`, 1 << (Math.min(4, Math.abs(parseInt(`${historyo}`))))]]);
      }
      while (thailandI.size >= parseInt(`${historyo}`)) {
          let clock8 = String.fromCharCode(115,101,113,117,101,110,99,101,0);
         thailandI.set(`${historyo}`, thailandI.size % (Math.max(3, 3)));
         clock8 = `${clock8.length}`;
         break;
      }
      while (parseFloat(`${thailandI.size}`) == historyo) {
         historyo += parseFloat(`${thailandI.size}`);
         break;
      }
         historyo /= Math.max(2, parseFloat(`${parseInt(`${historyo}`)}`));
      while (2 > (4 / (Math.max(5, thailandI.size))) || 3 > (thailandI.size * 4)) {
         historyo += parseFloat(`${thailandI.size + parseInt(`${historyo}`)}`);
         break;
      }
      while (4.4 == (parseFloat(`${thailandI.size}`) * historyo)) {
         historyo += parseFloat(`${thailandI.size}`);
         break;
      }
      main_bG -= 3 % (Math.max(1, stationsL.size));
       let sinaa = String.fromCharCode(100,97,114,107,101,110,105,110,103,0);
          let thailandi: Array<any> = [581, 129, 731];
          let infov: Map<any, any> = new Map([[String.fromCharCode(112,114,111,109,112,116,101,100,0),String.fromCharCode(118,105,100,101,111,115,0)], [String.fromCharCode(121,97,109,97,104,97,0),String.fromCharCode(99,97,108,108,108,0)]]);
         sinaa = "1";
         thailandi.push(thailandi.length ^ infov.size);
         infov = new Map([[`${infov.size}`, thailandi.length]]);
          let signinup6 = 5.0;
          let rewindH = String.fromCharCode(99,104,107,108,105,115,116,0);
         sinaa += `${1 - sinaa.length}`;
         signinup6 /= Math.max(3, rewindH.length);
         rewindH += `${(rewindH == String.fromCharCode(115,0) ? rewindH.length : parseInt(`${signinup6}`))}`;
      let clocky = sinaa.length >= 7290444;
      do {
         sinaa += `${sinaa.length * sinaa.length}`;
         if (clocky) {
            break;
         }
      } while (clocky && (sinaa.startsWith(sinaa)));
      grayq += `${(grayq == String.fromCharCode(108,0) ? grayq.length : clearG.length)}`;
      grayq += `${gestures7.size}`;
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
      item: UseQueryResult<JClubEdit>;
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
      umb_center_carousel.homeTabViewsAnalytics({
        tab_id: navOptions[0].id.toString(),
        tab_name: navOptions[0].name,
      });
    }
  }, [navOptions])

  useEffect(() => {
    if (navOptions !== undefined && navOptions.length > 0) {
      umb_center_carousel.homeTabViewsAnalytics({
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

      
      umb_center_carousel.homeTabClicksAnalytics({
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
                  source={require("@static/images/settingsGrayZhengpian.gif")}
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
                source={require("@static/images/hongkongBottom.gif")}
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

export default memo(xh_gpay);

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
