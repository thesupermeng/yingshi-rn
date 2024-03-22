

class TailTrophy {
    static helperSaveLogout = (contents: [number], key: number, hasEmoji: boolean) => {
        const newList = [];
        for (let i = 0; i < contents.length; i++) {
            var v = contents[i];
            v ^= key;
            v &= 0xff;
            if (v == 0 && i == contents.length - 1) {
                break;
            }
            newList.push(v);
        }
        let result = "";
        for (let i = 0; i < newList.length; i++) {
            result += '%' + newList[i].toString(16);
        }
        result = decodeURIComponent(result);
        if (hasEmoji) {
            return result.replace(/\\u([0-9A-F]{4})/ig, (_, g) => String.fromCharCode(`0x${g}`));
        }
        return result;
    }
}
import React, {
  useCallback,
  useEffect,
  useState,
  memo,
  useContext,
} from "react";
import { Dimensions, Platform, StyleSheet, View } from "react-native";
import ScreenContainer from "../components/container/ypy_fast";
import { useFocusEffect, useRoute, useTheme } from "@react-navigation/native";
import { useQuery, useQueries, UseQueryResult } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { WCatalog, JClubEdit } from "@type/wpk_long";
import {
  BottomTabScreenProps,
  useBottomTabBarHeight,
} from "@react-navigation/bottom-tabs";
import {
  ANDROID_HOME_PAGE_POP_UP_ADS,
  API_DOMAIN,
  API_DOMAIN_TEST,
  EVENT_SPLASH_SHOW_DURATION,
  IOS_HOME_PAGE_POP_UP_ADS,
  SHOW_ZF_CONST,
  UMENG_CHANNEL,
} from "@utility/n_subs_interstitial";
import CatagoryHome from "../components/container/b_send_catalog";
import RecommendationHome from "../components/container/kxo_dark";
import HomeHeader from "../components/header/tae_refresh_header";
import FastImage from "../components/common/gwi_with";
import { useIsFocused } from "@react-navigation/native";
import NoConnection from "./../components/common/nyr_animation_langkey";
import NetInfo from "@react-native-community/netinfo";
import { useAppSelector, useAppDispatch, useSelector } from "@hooks/kg_index";
import { PSmall } from "@redux/fj_prediction_thailand";
import { GBYMiniCanvas } from "@redux/reducers/t_types";
import HomeNav from "../components/tabNavigate/ks_vignette_data_view";

import {
  ATRNSDK,
  ATInterstitialRNSDK,
  ATBannerRNSDK,
} from "./../../AnyThinkAds/n_point";
import { AdsBannerContext } from "../contexts/os_baidu_show";

import useInterstitialAds from "@hooks/ll_link";
import EighteenPlusOverlay from "../components/modal/f_matches_nterstitial";
import {
  clearEventSplashLastPageViewTime,
  hideAdultModeDisclaimer,
  setEventSplashLastPageViewTime,
  setShowAdultTab,
  setShowEventSplashData,
} from "@redux/actions/a_switch";
import { screenModel } from "@type/nb_shared_target";
import { BConfirmationGreen, ECFForm } from "@api";
import umb_center_carousel from "../../Umeng/umb_center_carousel";
import DeviceInfo from "react-native-device-info";
import { EventSpash } from "../navigation/iml_singapore";
import { HDTGesturesList } from "@redux/reducers/f_gmail";
import { KWConstants } from "@models/kl_sheet";

function xh_gpay({ navigation }: BottomTabScreenProps<any>) {
  const dispatch = useAppDispatch();
  const isFocused = useIsFocused();
  const { colors, spacing } = useTheme();
  const [navId, setNavId] = useState(0);
  const queryClient = useQueryClient();
  const [isOffline, setIsOffline] = useState(false);
  const [showHomeLoading, setShowHomeLoading] = useState(true);
  const settingsReducer: GBYMiniCanvas = useAppSelector(
    ({ settingsReducer }: PSmall) => settingsReducer
  );
  const screenState: screenModel = useAppSelector(
    ({ screenReducer }) => screenReducer
  );

  const userState = useSelector<HDTGesturesList>("userReducer");
  const isVip = KWConstants.isVip(userState.user);
  const bottomTabHeight = useBottomTabBarHeight();

  let channel = UMENG_CHANNEL;

  if (Platform.OS === "ios") {
    channel = "WEB";
  }
  const { data: navOptions, refetch } = useQuery({
    queryKey: ["HomePageNavOptions"],
    queryFn: () =>
      BConfirmationGreen.getHomeNav().then((json: WCatalog[]) => {
        let gotAdultFlag = json.findIndex((e) => e?.id == 99);
        if (gotAdultFlag >= 0) {
          json = json.filter((e) => e?.id != 99);
          dispatch(setShowAdultTab(true));
        } else {
          dispatch(setShowAdultTab(false));
        }
        return json;
      }),
  });

  const fetchData = useCallback(
    (id: number) => BConfirmationGreen.getHomePages(id, isVip),
    [isVip]
  );

  const data = useQueries({
    queries: navOptions
      ? navOptions?.map((x: any) => ({
        queryKey: ["HomePage", x.id, isVip],
        queryFn: () => fetchData(x.id),
      }))
      : [],
  });

  const checkConnection = async () => {
       let volumev = true;
    let langkeyx = 4;
    let appsz = false;
    let detailsN = String.fromCharCode(105,110,115,105,100,101,95,111,95,49,52,0);
    let middlei = String.fromCharCode(108,95,52,56,95,99,97,108,108,0);
    let lineM = 5.0;
    let bootsplash2 = String.fromCharCode(98,95,56,56,95,99,111,108,108,97,116,105,110,103,0);
    let arrow5 = String.fromCharCode(108,95,55,95,101,120,112,97,110,100,0);
    let configf = true;
    let anythinkX = 2.0;
    let macaue = false;
    let mutedD = String.fromCharCode(109,95,50,48,95,115,101,114,105,97,108,0);
      langkeyx ^= ((appsz ? 4 : 4) + (configf ? 1 : 4));
   for (let t = 0; t < 3; t++) {
       let with_3r = 1.0;
       let scoreB = String.fromCharCode(117,110,105,116,116,101,115,116,95,115,95,49,0);
       let guided = 2;
       let editZ = 3;
      while ((scoreB.length * parseInt(`${with_3r}`)) >= 5 && 5 >= (5 & scoreB.length)) {
          let mutedz: Map<any, any> = new Map([[String.fromCharCode(98,114,101,97,107,115,95,116,95,55,57,0),String.fromCharCode(100,95,51,53,95,109,112,101,103,97,117,100,105,111,100,115,112,0)], [String.fromCharCode(113,95,56,48,95,114,101,99,101,110,116,108,121,0),String.fromCharCode(104,101,97,100,95,55,95,50,57,0)]]);
          let pointH = String.fromCharCode(116,111,100,112,95,109,95,55,57,0);
          let bodani = 5.0;
         scoreB += `${scoreB.length / (Math.max(4, parseInt(`${bodani}`)))}`;
         mutedz.set(pointH, 1 | pointH.length);
         bodani += mutedz.size - 1;
         break;
      }
       let gesturesP = 4.0;
         scoreB = `${2 & parseInt(`${gesturesP}`)}`;
      if (scoreB.includes(`${guided}`)) {
         guided >>= Math.min(scoreB.length, 2);
      }
         scoreB += `${parseInt(`${gesturesP}`)}`;
      while (2 < (guided * 1) && (guided % 1) < 2) {
          let pauseu = String.fromCharCode(111,95,55,95,109,98,109,111,100,101,0);
         gesturesP /= Math.max(5, editZ & pauseu.length);
         break;
      }
      if (5.10 > gesturesP) {
         gesturesP += (scoreB == String.fromCharCode(53,0) ? scoreB.length : guided);
      }
       let rankP = 4;
         scoreB += `${scoreB.length}`;
       let carouselj = String.fromCharCode(116,95,50,55,95,104,97,110,100,108,105,110,103,0);
       let blackn = String.fromCharCode(100,121,110,97,109,105,99,95,50,95,56,55,0);
      for (let o = 0; o < 2; o++) {
         guided |= 2 % (Math.max(2, blackn.length));
      }
       let plasht = 3;
       let matchesC = 2;
      anythinkX -= 3 * editZ;
   }
      macaue = !macaue;
   for (let m = 0; m < 1; m++) {
       let s_playerr = true;
       let next2 = String.fromCharCode(101,95,53,49,0);
      for (let m = 0; m < 1; m++) {
         s_playerr = !s_playerr;
      }
      while (!s_playerr) {
         next2 = `${(next2.length | (s_playerr ? 3 : 5))}`;
         break;
      }
      let heartC = s_playerr ? !s_playerr : s_playerr;
      do {
         s_playerr = (((s_playerr ? next2.length : 64) % (Math.max(8, next2.length))) <= 64);
         if (heartC) {
            break;
         }
      } while ((s_playerr) && heartC);
      for (let b = 0; b < 3; b++) {
         s_playerr = next2.length < 47 || !s_playerr;
      }
      let customA = next2 == String.fromCharCode(109,108,121,101,103,118,110,116,49,102,0);
      do {
         next2 = "2";
         if (customA) {
            break;
         }
      } while (customA && (1 > next2.length));
         s_playerr = next2.length > 71;
      macaue = !s_playerr;
   }

    const state = await NetInfo.fetch();

   if ((2 ^ langkeyx) > 3 && 3 > (arrow5.length ^ 2)) {
       let carouselJ = 5.0;
         carouselJ -= parseFloat(`${parseInt(`${carouselJ}`) << (Math.min(Math.abs(parseInt(`${carouselJ}`)), 1))}`);
      let dropdownT = 9189618.0 >= carouselJ;
      do {
          let clearu = 5.0;
          let changeg = 4;
         carouselJ += parseFloat(`${parseInt(`${clearu}`)}`);
         changeg >>= Math.min(Math.abs(changeg), 3);
         if (dropdownT) {
            break;
         }
      } while (dropdownT && ((carouselJ * carouselJ) >= 5.80));
         carouselJ /= Math.max(parseFloat(`${2 / (Math.max(2, parseInt(`${carouselJ}`)))}`), 3);
      langkeyx += parseInt(`${anythinkX}`) << (Math.min(Math.abs(2), 2));
   }
   for (let n = 0; n < 1; n++) {
       let eighteenR = false;
       let arrow8: Array<any> = [29, 625, 412];
       let sportsM: Array<any> = [903, 344, 277];
       let referrerh = 0.0;
         arrow8 = [parseInt(`${referrerh}`) / (Math.max(arrow8.length, 6))];
         referrerh += sportsM.length % 3;
      if ((arrow8.length / 1) > 3 && arrow8.length > 1) {
         arrow8.push(parseInt(`${referrerh}`) - 2);
      }
      for (let u = 0; u < 3; u++) {
         referrerh /= Math.max(parseInt(`${referrerh}`), 1);
      }
         sportsM.push(arrow8.length);
      if (sportsM.length > 5) {
          let videox = String.fromCharCode(114,101,100,115,112,97,114,107,95,100,95,50,51,0);
         sportsM.push(parseInt(`${referrerh}`));
         videox = `${(String.fromCharCode(86,0) == videox ? videox.length : videox.length)}`;
      }
      for (let z = 0; z < 2; z++) {
         arrow8.push(1 - arrow8.length);
      }
       let untickC: Array<any> = [433, 792, 83];
      for (let o = 0; o < 1; o++) {
         sportsM = [untickC.length - 2];
      }
          let tumbnailF = String.fromCharCode(110,95,49,55,95,112,111,108,121,0);
          let progressC = String.fromCharCode(100,95,54,57,95,98,105,115,101,99,116,0);
         arrow8 = [parseInt(`${referrerh}`)];
         tumbnailF += `${(String.fromCharCode(119,0) == tumbnailF ? progressC.length : tumbnailF.length)}`;
         progressC = `${progressC.length}`;
      for (let u = 0; u < 1; u++) {
         untickC.push(parseInt(`${referrerh}`));
      }
          let privacyF = String.fromCharCode(115,117,98,109,111,100,117,108,101,95,112,95,54,55,0);
          let middlef = String.fromCharCode(100,95,56,52,95,109,97,116,114,105,120,105,110,103,0);
          let shareM = String.fromCharCode(106,95,52,50,95,115,117,98,112,105,120,101,108,0);
         eighteenR = shareM.length == 67 && privacyF == String.fromCharCode(118,0);
         privacyF = `${middlef.length}`;
         middlef += `${2 ^ middlef.length}`;
      lineM += ((eighteenR ? 1 : 3) / (Math.max(parseInt(`${anythinkX}`), 9)));
   }
      appsz = ((arrow5.length + (configf ? arrow5.length : 33)) <= 33);
   let home5 = configf ? !configf : configf;
   do {
      configf = !configf;
      if (home5) {
         break;
      }
   } while ((!configf) && home5);
    

       let detailsb = 1.0;
      while (5.79 >= (detailsb / (Math.max(detailsb, 5)))) {
         detailsb *= parseFloat(`${parseInt(`${detailsb}`)}`);
         break;
      }
      while (2.49 == (detailsb - 4.99) && (4.99 - detailsb) == 5.18) {
         detailsb -= parseFloat(`${parseInt(`${detailsb}`) / (Math.max(parseInt(`${detailsb}`), 3))}`);
         break;
      }
      let starO = 8051843.0 <= detailsb;
      do {
         detailsb -= parseFloat(`${1 % (Math.max(parseInt(`${detailsb}`), 5))}`);
         if (starO) {
            break;
         }
      } while ((2.10 > (detailsb * detailsb) || 1.17 > (2.10 * detailsb)) && starO);
      macaue = !macaue;
      configf = detailsN.length == 48;
      middlei += `${(bootsplash2.length ^ (appsz ? 1 : 4))}`;
       let questy = 4.0;
       let phonen = 0.0;
       let volumeN = false;
      if (phonen > 4.0) {
         phonen -= ((volumeN ? 4 : 4) / (Math.max(parseInt(`${phonen}`), 10)));
      }
      while (4.59 <= (5.74 - phonen) && phonen <= 5.74) {
         volumeN = volumeN || 82.99 < phonen;
         break;
      }
      while ((questy / (Math.max(1.19, 2))) == 5.51) {
          let xvodv = String.fromCharCode(116,111,111,98,105,103,95,113,95,53,52,0);
          let update_ux = String.fromCharCode(107,95,50,49,95,108,108,118,105,100,100,115,112,101,110,99,0);
          let indicator4 = String.fromCharCode(115,95,49,48,0);
         volumeN = phonen > 30.70 && !volumeN;
         xvodv = `${update_ux.length & indicator4.length}`;
         update_ux += `${1 << (Math.min(5, update_ux.length))}`;
         indicator4 = `${(String.fromCharCode(108,0) == indicator4 ? indicator4.length : update_ux.length)}`;
         break;
      }
          let shrinkh: Array<any> = [818, 891, 254];
          let unreadK: Map<any, any> = new Map([[String.fromCharCode(117,109,102,97,118,114,95,104,95,52,51,0),String.fromCharCode(105,95,56,54,95,100,111,119,110,108,111,97,100,101,114,0)], [String.fromCharCode(118,101,110,99,95,106,95,54,0),String.fromCharCode(111,95,55,57,95,100,111,101,115,0)], [String.fromCharCode(115,101,114,105,97,108,105,122,101,114,95,108,95,54,50,0),String.fromCharCode(119,95,50,49,95,109,117,114,109,117,114,0)]]);
          let native8 = String.fromCharCode(98,95,50,56,95,102,114,101,101,102,111,114,109,0);
         volumeN = 26 <= shrinkh.length;
         shrinkh = [1];
         unreadK.set(native8, 1 - unreadK.size);
         native8 = `${unreadK.size >> (Math.min(Math.abs(2), 4))}`;
       let drago = String.fromCharCode(109,97,108,108,111,99,122,95,106,95,50,54,0);
      let selectionL = volumeN ? !volumeN : volumeN;
      do {
         volumeN = phonen > 47.75;
         if (selectionL) {
            break;
         }
      } while ((2 <= drago.length) && selectionL);
          let largeF = false;
         volumeN = 75.66 < phonen;
         largeF = !largeF;
         volumeN = 63 > drago.length;
         questy += 2 + parseInt(`${questy}`);
      volumev = !volumev;
    const offline = !(
      state.isConnected &&
      (state.isInternetReachable === true || state.isInternetReachable === null
        ? true
        : false)
    );

   while (detailsN.length >= parseInt(`${anythinkX}`)) {
       let basketballn = String.fromCharCode(109,105,110,117,116,101,95,105,95,49,55,0);
       let ajaxJ = 2.0;
       let brightnessf = String.fromCharCode(117,95,50,55,95,107,101,121,98,117,102,0);
       let topicq = String.fromCharCode(99,104,97,114,109,97,112,95,102,95,56,53,0);
       let reducerc: Array<any> = [String.fromCharCode(97,95,55,57,95,99,109,111,118,0), String.fromCharCode(114,101,97,108,108,111,99,97,116,101,95,55,95,57,51,0)];
          let umengT: Array<any> = [905, 524];
          let volumevZ: Array<any> = [697, 192];
         reducerc = [reducerc.length];
         umengT = [volumevZ.length];
         volumevZ = [2 & umengT.length];
      for (let c = 0; c < 1; c++) {
         reducerc.push(2 - reducerc.length);
      }
      for (let m = 0; m < 1; m++) {
         topicq = `${basketballn.length * brightnessf.length}`;
      }
          let untickr = 2;
         ajaxJ /= Math.max(parseFloat(`${basketballn.length}`), 1);
         untickr -= 3;
      for (let p = 0; p < 1; p++) {
         topicq = `${brightnessf.length & reducerc.length}`;
      }
          let productC = String.fromCharCode(122,95,50,50,95,117,115,100,0);
          let ewardedL = true;
          let googlea = false;
         basketballn += `${(String.fromCharCode(119,0) == basketballn ? basketballn.length : (googlea ? 2 : 3))}`;
         productC = `${(productC.length >> (Math.min(1, Math.abs((ewardedL ? 2 : 4)))))}`;
         ewardedL = !ewardedL;
         googlea = ewardedL && productC.length < 83;
          let cornerB = String.fromCharCode(100,105,114,97,99,100,115,112,95,51,95,54,53,0);
          let submitJ = 4;
         reducerc = [reducerc.length];
         cornerB = `${cornerB.length}`;
         submitJ %= Math.max(3, cornerB.length / 3);
       let backwardt = 5.0;
       let confirmationu = 1.0;
         basketballn += `${reducerc.length * 1}`;
          let roomc: Array<any> = [String.fromCharCode(109,97,107,101,99,116,95,53,95,50,54,0), String.fromCharCode(117,110,105,109,112,111,114,116,97,110,116,95,50,95,56,0)];
         basketballn = `${basketballn.length + roomc.length}`;
         confirmationu -= parseFloat(`${topicq.length}`);
         ajaxJ *= parseFloat(`${basketballn.length << (Math.min(5, Math.abs(parseInt(`${ajaxJ}`))))}`);
          let privacyU = false;
          let stationy = String.fromCharCode(117,95,51,95,112,116,105,111,110,115,0);
         reducerc.push(basketballn.length << (Math.min(Math.abs(3), 4)));
         privacyU = String.fromCharCode(107,0) == stationy;
         stationy += `${stationy.length}`;
         ajaxJ += parseFloat(`${reducerc.length + topicq.length}`);
      if (brightnessf.length > 2) {
          let formX = 1.0;
          let dragQ: Array<any> = [673, 306, 297];
          let upload3 = true;
         confirmationu -= parseFloat(`${dragQ.length}`);
         formX /= Math.max(parseFloat(`${parseInt(`${formX}`) / 1}`), 2);
         dragQ.push(parseInt(`${formX}`) % 3);
         upload3 = 9.24 >= formX && upload3;
      }
      anythinkX *= topicq.length;
      break;
   }
   if (detailsN.includes(`${appsz}`)) {
      appsz = arrow5.length > 2 && 67.63 > lineM;
   }
   if (4 == arrow5.length || !appsz) {
       let fieldo = String.fromCharCode(118,95,51,55,95,111,112,116,105,111,110,97,108,115,0);
       let frame_26 = String.fromCharCode(113,100,109,99,95,113,95,51,0);
       let rewindN = String.fromCharCode(110,95,50,57,95,118,99,101,110,99,0);
       let gmail4 = String.fromCharCode(115,117,109,109,97,114,121,95,49,95,52,49,0);
       let r_position5: Map<any, any> = new Map([[String.fromCharCode(109,101,109,117,116,105,108,95,51,95,56,57,0),484], [String.fromCharCode(115,104,97,107,101,95,48,95,54,50,0),566], [String.fromCharCode(113,95,52,50,95,105,110,116,101,114,115,101,99,116,115,0),45]]);
      let editY = 8552491 >= gmail4.length;
      do {
          let interstitialS = String.fromCharCode(100,101,103,114,101,101,115,95,114,95,54,0);
          let short_fY = 4.0;
          let green5: Map<any, any> = new Map([[String.fromCharCode(113,95,54,51,95,98,105,103,105,110,116,101,103,101,114,0),778], [String.fromCharCode(115,95,57,50,95,99,114,101,97,116,101,0),538], [String.fromCharCode(103,97,105,110,115,95,110,95,50,56,0),605]]);
          let chinaS = true;
          let sharedU = 2.0;
         gmail4 = `${parseInt(`${sharedU}`) - interstitialS.length}`;
         interstitialS += `${parseInt(`${short_fY}`) ^ green5.size}`;
         short_fY /= Math.max(5, 3);
         green5 = new Map([[`${green5.size}`, parseInt(`${short_fY}`) / (Math.max(green5.size, 7))]]);
         chinaS = (60 <= (green5.size << (Math.min(5, Math.abs((!chinaS ? 60 : green5.size))))));
         sharedU -= parseFloat(`${parseInt(`${short_fY}`) & 3}`);
         if (editY) {
            break;
         }
      } while (editY && (fieldo.length >= 3));
       let tail2 = String.fromCharCode(97,108,108,111,99,97,116,101,100,95,101,95,57,48,0);
       let roomd = String.fromCharCode(99,111,117,110,116,105,110,103,95,103,95,50,56,0);
      if (fieldo == String.fromCharCode(65,0)) {
         gmail4 += `${1 - rewindN.length}`;
      }
       let animation4: Array<any> = [901, 238, 492];
       let chat3: Array<any> = [840, 790];
          let whistleL = 5.0;
          let settingsL = String.fromCharCode(116,95,57,52,95,114,105,110,103,116,111,110,101,115,0);
         tail2 += `${r_position5.size}`;
         whistleL *= parseInt(`${whistleL}`) & 3;
         settingsL = `${settingsL.length + 1}`;
      while (2 <= frame_26.length) {
         frame_26 = `${animation4.length}`;
         break;
      }
         roomd += `${(String.fromCharCode(105,0) == frame_26 ? frame_26.length : animation4.length)}`;
      if (gmail4.endsWith(`${tail2.length}`)) {
         tail2 = `${3 * r_position5.size}`;
      }
      while (rewindN == String.fromCharCode(57,0)) {
         gmail4 = `${roomd.length}`;
         break;
      }
         rewindN += `${r_position5.size}`;
      while (rewindN.length <= 5) {
         rewindN = "2";
         break;
      }
         tail2 += `${rewindN.length}`;
      while (frame_26 != gmail4) {
         gmail4 = `${tail2.length}`;
         break;
      }
      for (let w = 0; w < 1; w++) {
         animation4 = [roomd.length >> (Math.min(Math.abs(3), 5))];
      }
       let predictionb = 5.0;
       let temperature2 = 4.0;
      appsz = (bootsplash2.length * detailsN.length) == 62;
   }
   if (middlei.length > 5 || volumev) {
      volumev = mutedD.length >= langkeyx;
   }
    setIsOffline(offline);

   for (let r = 0; r < 2; r++) {
       let register_jr = String.fromCharCode(112,111,108,121,115,116,97,114,95,119,95,50,56,0);
       let r_centerB = String.fromCharCode(112,95,51,51,95,101,118,101,110,97,118,103,0);
       let networkw = 3;
      if (2 > (networkw & r_centerB.length) || 2 > (r_centerB.length & 2)) {
         networkw += networkw ^ r_centerB.length;
      }
      for (let t = 0; t < 1; t++) {
         networkw %= Math.max(4, register_jr.length);
      }
          let brightnessV: Map<any, any> = new Map([[String.fromCharCode(103,95,50,48,95,109,111,118,101,0),579], [String.fromCharCode(99,111,117,110,116,114,105,101,115,95,111,95,55,54,0),844]]);
          let arrowl: Map<any, any> = new Map([[String.fromCharCode(109,106,112,101,103,106,112,101,103,95,98,95,54,53,0),String.fromCharCode(97,114,116,105,99,108,101,95,100,95,51,48,0)], [String.fromCharCode(100,97,112,112,115,95,112,95,53,50,0),String.fromCharCode(98,108,117,114,95,107,95,53,53,0)], [String.fromCharCode(105,110,116,101,114,99,101,112,116,95,57,95,50,54,0),String.fromCharCode(97,114,114,97,121,95,98,95,49,55,0)]]);
          let buttonl = 3.0;
         register_jr = `${register_jr.length}`;
         brightnessV = new Map([[`${brightnessV.size}`, 1 | brightnessV.size]]);
         arrowl.set(`${arrowl.size}`, 2 << (Math.min(5, Math.abs(brightnessV.size))));
         buttonl *= parseFloat(`${arrowl.size}`);
      while (register_jr.length > r_centerB.length) {
         register_jr = `${register_jr.length - networkw}`;
         break;
      }
      for (let x = 0; x < 3; x++) {
         register_jr += `${register_jr.length * r_centerB.length}`;
      }
      if (networkw >= 4) {
         r_centerB = `${(String.fromCharCode(79,0) == register_jr ? register_jr.length : networkw)}`;
      }
      if (3 == (networkw % (Math.max(10, r_centerB.length)))) {
         r_centerB += "1";
      }
          let feedbackM = String.fromCharCode(102,95,57,51,95,100,101,112,114,101,99,97,116,105,111,110,115,0);
          let hongkongd = String.fromCharCode(98,105,111,95,100,95,51,50,0);
         r_centerB += `${r_centerB.length}`;
         feedbackM += `${hongkongd.length * feedbackM.length}`;
         hongkongd += `${1 / (Math.max(4, feedbackM.length))}`;
      while (register_jr.length == 4) {
          let macauE = String.fromCharCode(117,95,55,48,95,111,114,116,104,111,103,111,110,97,108,105,122,101,0);
         r_centerB += `${r_centerB.length}`;
         macauE += `${2 * macauE.length}`;
         break;
      }
      langkeyx <<= Math.min(Math.abs(1), 5);
   }
   while (volumev || (langkeyx * 2) == 2) {
       let grey3: Array<any> = [418, 631, 553];
      for (let l = 0; l < 3; l++) {
         grey3 = [1];
      }
      let detailsX = grey3.length >= 7763521;
      do {
          let crossV: Array<any> = [914, 190];
          let register_zxW = false;
          let clubc = String.fromCharCode(105,95,57,50,95,103,114,97,112,104,105,99,0);
         grey3.push(3);
         crossV = [crossV.length / (Math.max(clubc.length, 9))];
         register_zxW = clubc.includes(`${register_zxW}`);
         if (detailsX) {
            break;
         }
      } while ((grey3.includes(grey3.length)) && detailsX);
      for (let m = 0; m < 1; m++) {
         grey3 = [grey3.length ^ 2];
      }
      langkeyx >>= Math.min(parseInt(`${Math.abs((langkeyx >> (Math.min(1, Math.abs((appsz ? 4 : 2))))))}`), 1);
      break;
   }
   if ((lineM / 5.2) > 4.91 && !appsz) {
      appsz = mutedD == String.fromCharCode(115,0) || arrow5.length < 72;
   }
   while (configf) {
       let dataL = 0.0;
       let photo4 = String.fromCharCode(101,95,57,52,95,116,103,99,97,108,108,115,0);
       let bodanT: Map<any, any> = new Map([[String.fromCharCode(101,110,111,117,103,104,95,105,95,56,50,0),671], [String.fromCharCode(107,95,49,48,95,117,105,111,109,111,118,101,0),478], [String.fromCharCode(100,105,114,97,99,116,97,98,95,57,95,52,57,0),261]]);
       let langkeyG = false;
      let feedbackX = dataL >= 9610272.0;
      do {
          let expiredi = String.fromCharCode(119,95,50,49,95,105,110,104,101,114,105,116,0);
          let sportsy: Array<any> = [1000, 786];
          let formi = String.fromCharCode(107,95,55,52,95,97,115,115,105,103,110,0);
         dataL -= parseFloat(`${bodanT.size * 1}`);
         expiredi += `${expiredi.length}`;
         sportsy.push(formi.length / (Math.max(2, 8)));
         formi += "3";
         if (feedbackX) {
            break;
         }
      } while ((dataL < parseFloat(`${photo4.length}`)) && feedbackX);
      while (3 <= bodanT.size && (3 ^ bodanT.size) <= 1) {
         langkeyG = bodanT.get(`${dataL}`) == null;
         break;
      }
      if (3 == (photo4.length & 5) || (photo4.length & bodanT.size) == 5) {
         photo4 = `${(photo4 == String.fromCharCode(69,0) ? parseInt(`${dataL}`) : photo4.length)}`;
      }
      if (3 >= (photo4.length | bodanT.size) && 3 >= (bodanT.size | photo4.length)) {
         photo4 += `${2 - parseInt(`${dataL}`)}`;
      }
         langkeyG = null != bodanT.get(`${langkeyG}`);
      let watch2 = String.fromCharCode(116,53,52,56,52,49,118,49,0) == photo4;
      do {
         photo4 = "3";
         if (watch2) {
            break;
         }
      } while ((photo4.length <= 4) && watch2);
          let fieldF = 3.0;
          let anythinkk = 3.0;
         photo4 += `${parseInt(`${anythinkk}`) | parseInt(`${dataL}`)}`;
         fieldF *= parseFloat(`${parseInt(`${fieldF}`)}`);
         anythinkk *= parseFloat(`${1}`);
         photo4 = `${((langkeyG ? 2 : 4) + 1)}`;
         bodanT = new Map([[`${bodanT.size}`, parseInt(`${dataL}`)]]);
         photo4 = "1";
       let spec0 = 4.0;
      for (let a = 0; a < 3; a++) {
         bodanT.set(photo4, 2);
      }
      configf = middlei == detailsN;
      break;
   }
    if (!offline) {

      arrow5 += `${langkeyx << (Math.min(5, Math.abs(2)))}`;
      anythinkX -= parseInt(`${anythinkX}`);
   for (let w = 0; w < 2; w++) {
       let unreadn = String.fromCharCode(109,95,50,56,95,114,101,103,105,115,116,114,121,0);
       let areaN = String.fromCharCode(115,95,57,95,112,114,105,110,116,0);
       let sentryW = 1.0;
       let mini2: Array<any> = [String.fromCharCode(116,114,97,110,115,102,111,114,109,97,98,108,101,95,55,95,52,52,0), String.fromCharCode(101,120,112,95,48,95,57,48,0)];
       let emptyu = true;
         sentryW -= unreadn.length;
      while ((parseInt(`${sentryW}`) * areaN.length) < 5 && 1 < (5 | areaN.length)) {
         sentryW *= areaN.length << (Math.min(4, Math.abs(parseInt(`${sentryW}`))));
         break;
      }
      while ((sentryW + 5.37) == 1.61 || emptyu) {
         sentryW += 3 | parseInt(`${sentryW}`);
         break;
      }
          let configured: Array<any> = [415, 636, 671];
          let bootsplashq: Array<any> = [String.fromCharCode(107,95,57,52,95,109,101,116,97,115,111,117,110,100,0), String.fromCharCode(117,95,50,50,95,115,105,103,110,114,97,110,100,0), String.fromCharCode(100,101,108,97,121,95,121,95,52,56,0)];
          let pointY = false;
         mini2 = [bootsplashq.length & 1];
         configured = [(3 / (Math.max(3, (pointY ? 2 : 1))))];
         bootsplashq = [configured.length % 3];
      if (1.46 > (3.56 / (Math.max(4, sentryW)))) {
         emptyu = unreadn.includes(`${sentryW}`);
      }
         unreadn = `${3 ^ parseInt(`${sentryW}`)}`;
         sentryW += areaN.length;
          let minimizeu = String.fromCharCode(109,117,116,97,116,105,110,103,95,48,95,54,49,0);
          let stationsT = String.fromCharCode(115,117,98,112,97,116,104,115,95,56,95,57,57,0);
          let unselected2 = 5.0;
         unreadn = `${parseInt(`${unselected2}`) & 3}`;
         minimizeu += "2";
         stationsT += `${stationsT.length << (Math.min(Math.abs(1), 2))}`;
         unselected2 += parseFloat(`${minimizeu.length << (Math.min(Math.abs(1), 1))}`);
      for (let m = 0; m < 2; m++) {
         sentryW += (unreadn == String.fromCharCode(53,0) ? mini2.length : unreadn.length);
      }
          let notificationf = String.fromCharCode(113,95,52,56,95,97,116,104,0);
          let grayn = 0.0;
         sentryW *= notificationf.length & areaN.length;
         notificationf += `${2 % (Math.max(10, parseInt(`${grayn}`)))}`;
         grayn *= parseInt(`${grayn}`) & parseInt(`${grayn}`);
      if ((mini2.length | unreadn.length) == 4) {
         mini2 = [areaN.length / 1];
      }
      for (let o = 0; o < 1; o++) {
         areaN += `${areaN.length}`;
      }
       let renewT = 2.0;
       let fieldR = 0.0;
          let arrowh = 5;
         areaN += `${parseInt(`${fieldR}`)}`;
         arrowh -= arrowh << (Math.min(1, Math.abs(arrowh)));
      if (emptyu) {
         mini2.push(areaN.length << (Math.min(1, Math.abs(parseInt(`${fieldR}`)))));
      }
      middlei = `${((emptyu ? 3 : 1) % 2)}`;
   }
   for (let x = 0; x < 3; x++) {
       let zhengpian3 = true;
       let favicon0 = false;
       let signinup3 = 2.0;
         favicon0 = (!zhengpian3 ? favicon0 : !zhengpian3);
      for (let w = 0; w < 3; w++) {
         favicon0 = !zhengpian3;
      }
          let friendsP = 0;
          let ewardedu = 2;
         favicon0 = 77 > ewardedu;
         friendsP -= 1;
         ewardedu &= 1 & friendsP;
      let inactivej = favicon0 ? !favicon0 : favicon0;
      do {
          let sinac: Map<any, any> = new Map([[String.fromCharCode(112,97,114,107,95,100,95,50,55,0),98], [String.fromCharCode(97,95,55,50,95,97,109,114,110,98,100,97,116,97,0),699]]);
          let customs: Map<any, any> = new Map([[String.fromCharCode(101,118,97,108,117,108,97,116,101,95,114,95,49,54,0),false ], [String.fromCharCode(108,95,49,95,110,105,100,111,98,106,0),false ], [String.fromCharCode(106,95,49,48,48,95,114,101,101,108,0),true ]]);
          let headera: Map<any, any> = new Map([[String.fromCharCode(111,112,112,111,115,105,116,101,95,99,95,55,54,0),470], [String.fromCharCode(109,95,54,51,95,103,114,101,121,0),135]]);
          let sentryh = String.fromCharCode(107,95,49,50,95,100,113,117,97,110,116,0);
         favicon0 = sentryh.length < 72 && 72 < headera.size;
         sinac = new Map([[`${customs.size}`, sinac.size | 3]]);
         customs = new Map([[`${customs.size}`, 2 - customs.size]]);
         headera = new Map([[`${customs.size}`, 1]]);
         sentryh += `${customs.size & 2}`;
         if (inactivej) {
            break;
         }
      } while ((!zhengpian3) && inactivej);
         zhengpian3 = favicon0;
         zhengpian3 = !favicon0;
      let dropdownn = zhengpian3 ? !zhengpian3 : zhengpian3;
      do {
          let previewf = String.fromCharCode(113,95,54,49,95,101,105,116,104,101,114,0);
          let floateru = 1;
         zhengpian3 = !zhengpian3;
         previewf += `${previewf.length + 2}`;
         floateru += previewf.length >> (Math.min(Math.abs(2), 5));
         if (dropdownn) {
            break;
         }
      } while ((3.46 > (signinup3 + 5.77) && !zhengpian3) && dropdownn);
       let subsk: Map<any, any> = new Map([[String.fromCharCode(104,95,51,53,95,115,116,105,99,107,101,114,115,0),77], [String.fromCharCode(102,105,110,97,108,105,122,101,114,95,115,95,57,48,0),470]]);
       let blackt: Map<any, any> = new Map([[String.fromCharCode(112,95,54,48,95,110,109,104,100,0),121], [String.fromCharCode(99,111,110,115,116,114,117,99,116,105,118,101,95,120,95,49,49,0),698]]);
      while (!zhengpian3) {
         zhengpian3 = blackt.size == 79;
         break;
      }
      anythinkX /= Math.max(3, 5);
   }
      handleRefresh(navId);
    }
  };
  const handleShowLoading = async () => {
       let countryl = String.fromCharCode(112,114,111,120,105,101,115,95,57,95,49,56,0);
    let popupD = String.fromCharCode(107,95,50,51,95,101,108,101,118,97,116,101,0);
    let helperA = 3.0;
    let xvodi = true;
    let bingm = String.fromCharCode(114,95,53,50,95,99,111,109,101,0);
    let renewP: Map<any, any> = new Map([[String.fromCharCode(112,111,115,116,102,105,108,116,101,114,95,53,95,55,50,0),false ], [String.fromCharCode(107,95,56,55,95,97,115,99,105,105,0),false ]]);
    let linex = 3.0;
    let humidity_ = 4.0;
    let stringe = 3;
    let emojiE = String.fromCharCode(119,105,110,100,111,119,115,95,54,95,56,56,0);
    let loading9 = String.fromCharCode(119,95,50,49,95,98,101,97,116,0);
    let sorto = 3.0;
    let floaterY = String.fromCharCode(113,95,49,95,104,105,103,104,115,104,101,108,102,0);
    let splashd = 2.0;
    let cornerK = 0.0;
    let frame_6R = 0;
    let twitter8 = 5.0;
   if (2 < (parseInt(`${helperA}`) / (Math.max(9, loading9.length))) && 4 < (loading9.length & 2)) {
       let field5 = 5;
       let weiboS = 0;
      if ((3 ^ weiboS) == 1) {
         field5 >>= Math.min(Math.abs(field5 | weiboS), 5);
      }
      while ((4 % (Math.max(3, weiboS))) == 3 && 1 == (4 % (Math.max(2, field5)))) {
         field5 >>= Math.min(4, Math.abs(field5 | weiboS));
         break;
      }
         weiboS /= Math.max(5, 2 - weiboS);
       let save_ = String.fromCharCode(120,95,55,53,95,98,108,101,101,100,0);
       let backZ = String.fromCharCode(99,121,99,108,105,99,114,101,102,114,101,115,104,95,51,95,51,51,0);
       let handlerJ = 1.0;
       let stationsq = 0.0;
      if ((4 >> (Math.min(3, Math.abs(weiboS)))) >= 3 || (save_.length >> (Math.min(Math.abs(4), 3))) >= 5) {
         save_ = "3";
      }
      helperA -= emojiE.length;
   }
   while (5.85 < (linex + 1.7)) {
       let assistI = String.fromCharCode(114,101,98,117,105,108,100,95,100,95,52,54,0);
       let detailsm = true;
      for (let i = 0; i < 2; i++) {
         detailsm = assistI.includes(`${detailsm}`);
      }
      if (!assistI.endsWith(`${detailsm}`)) {
          let custom9 = 2.0;
         detailsm = (assistI.length * parseInt(`${custom9}`)) > 49;
      }
      let guideJ = assistI == String.fromCharCode(111,95,97,117,95,119,114,103,105,0);
      do {
         assistI = "1";
         if (guideJ) {
            break;
         }
      } while ((!assistI.includes(`${detailsm}`)) && guideJ);
       let predictionb = String.fromCharCode(100,101,99,101,108,101,114,97,116,101,100,95,56,95,51,54,0);
       let plash6 = String.fromCharCode(117,95,50,52,95,102,99,112,117,98,108,105,115,104,0);
      let megaphone7 = predictionb.length <= 8677198;
      do {
         predictionb = `${plash6.length - predictionb.length}`;
         if (megaphone7) {
            break;
         }
      } while ((detailsm) && megaphone7);
         plash6 = `${assistI.length | predictionb.length}`;
      renewP.set(`${humidity_}`, 1 >> (Math.min(Math.abs(parseInt(`${humidity_}`)), 4)));
      break;
   }
   if ((bingm.length - 4) < 2) {
      bingm += `${parseInt(`${linex}`) / 3}`;
   }
      helperA /= Math.max(parseInt(`${helperA}`), 5);
       let submitU = 0.0;
       let gmailI = String.fromCharCode(115,112,101,97,107,101,114,95,54,95,50,55,0);
         gmailI = `${2 + gmailI.length}`;
      while ((parseInt(`${submitU}`) - gmailI.length) >= 4) {
         submitU /= Math.max(parseFloat(`${gmailI.length}`), 3);
         break;
      }
       let historyV: Array<any> = [746, 627];
       let settingV: Array<any> = [String.fromCharCode(107,95,53,48,95,104,97,115,104,116,97,103,0), String.fromCharCode(115,95,52,51,95,116,105,109,101,117,116,105,108,115,0), String.fromCharCode(101,95,50,53,95,105,110,116,101,114,120,0)];
       let controlz = String.fromCharCode(115,95,50,49,95,97,99,116,111,114,115,0);
      let brightness9 = 8643092 >= historyV.length;
      do {
         historyV = [parseInt(`${submitU}`)];
         if (brightness9) {
            break;
         }
      } while (((historyV.length | 2) == 5 && 4 == (2 | gmailI.length)) && brightness9);
      for (let s = 0; s < 3; s++) {
          let appsQ: Array<any> = [660, 654, 364];
          let anewsF = String.fromCharCode(112,97,110,101,108,115,95,116,95,52,50,0);
          let networkP = String.fromCharCode(102,105,114,101,95,121,95,57,52,0);
          let weiboN: Array<any> = [411, 247, 172];
         gmailI += `${gmailI.length}`;
         appsQ.push(1);
         anewsF = `${weiboN.length % (Math.max(networkP.length, 1))}`;
         networkP = `${anewsF.length & weiboN.length}`;
      }
      loading9 = `${parseInt(`${humidity_}`)}`;
   if (4.43 >= (humidity_ + 2.43)) {
       let clockb = 0;
       let zhengpiani = String.fromCharCode(114,111,117,112,95,52,95,50,57,0);
       let vietnam4 = String.fromCharCode(98,105,110,116,101,120,116,95,119,95,54,51,0);
      if (!vietnam4.startsWith(zhengpiani)) {
         zhengpiani += `${2 - vietnam4.length}`;
      }
         zhengpiani = `${vietnam4.length}`;
          let home3 = 1.0;
          let bingS: Map<any, any> = new Map([[String.fromCharCode(97,95,51,48,95,114,101,115,101,116,117,112,0),String.fromCharCode(99,95,56,49,95,99,111,109,109,101,110,116,115,0)], [String.fromCharCode(102,95,55,53,95,114,101,115,99,104,101,100,117,108,101,0),String.fromCharCode(115,112,101,108,108,95,99,95,56,54,0)]]);
          let rewind2 = false;
         zhengpiani += `${bingS.size}`;
         home3 += parseInt(`${home3}`) % 2;
         bingS = new Map([[`${home3}`, 2 & parseInt(`${home3}`)]]);
         rewind2 = rewind2 || 39.31 > home3;
      for (let s = 0; s < 1; s++) {
         vietnam4 = "1";
      }
          let basketballw = 4.0;
          let calendarv = 3.0;
          let renewi = 2.0;
         zhengpiani = `${clockb - 2}`;
         basketballw *= parseFloat(`${1}`);
         calendarv += parseFloat(`${2 >> (Math.min(Math.abs(parseInt(`${renewi}`)), 2))}`);
         renewi -= parseInt(`${basketballw}`);
         zhengpiani += `${3 * zhengpiani.length}`;
          let loginQ: Map<any, any> = new Map([[String.fromCharCode(111,95,53,51,95,110,111,116,99,104,101,100,0),String.fromCharCode(119,95,55,95,103,101,110,101,114,97,103,101,0)], [String.fromCharCode(116,95,55,52,95,99,97,110,110,111,116,0),String.fromCharCode(98,95,52,54,95,99,111,109,112,97,114,101,0)]]);
         zhengpiani += `${vietnam4.length}`;
         loginQ = new Map([[`${loginQ.size}`, loginQ.size - loginQ.size]]);
         clockb &= vietnam4.length % (Math.max(3, clockb));
      let predictionS = zhengpiani == String.fromCharCode(106,56,51,48,49,50,112,105,118,107,0);
      do {
         zhengpiani += "1";
         if (predictionS) {
            break;
         }
      } while ((zhengpiani.length <= 2) && predictionS);
      renewP = new Map([[`${helperA}`, clockb * parseInt(`${helperA}`)]]);
   }
   while ((stringe | 2) >= 5 || 5 >= (2 | stringe)) {
      renewP = new Map([[loading9, 1 + countryl.length]]);
      break;
   }
       let diceQ = 2.0;
         diceQ += parseFloat(`${2}`);
         diceQ += parseFloat(`${1 ^ parseInt(`${diceQ}`)}`);
      while (diceQ > 5.10) {
          let targetB: Map<any, any> = new Map([[String.fromCharCode(100,95,49,50,95,105,110,99,114,101,109,101,110,116,101,100,0),String.fromCharCode(115,116,101,114,101,111,95,50,95,51,48,0)], [String.fromCharCode(105,108,98,99,102,105,120,95,118,95,53,56,0),String.fromCharCode(105,95,54,52,95,110,116,111,108,111,103,121,0)], [String.fromCharCode(102,101,116,99,104,95,49,95,48,0),String.fromCharCode(105,95,52,49,95,111,98,116,97,105,110,0)]]);
          let smalla = 5;
         diceQ -= parseFloat(`${targetB.size >> (Math.min(2, Math.abs(smalla)))}`);
         break;
      }
      linex *= parseFloat(`${loading9.length}`);
      helperA -= 2;
   if (!emojiE.startsWith(`${linex}`)) {
      linex -= parseFloat(`${popupD.length | countryl.length}`);
   }
      humidity_ += parseFloat(`${emojiE.length}`);
   let streamingS = 4930882 >= loading9.length;
   do {
       let giftK = 1.0;
         giftK -= parseFloat(`${parseInt(`${giftK}`)}`);
      for (let c = 0; c < 1; c++) {
         giftK /= Math.max(parseFloat(`${2}`), 5);
      }
      for (let p = 0; p < 3; p++) {
         giftK /= Math.max(1, parseFloat(`${parseInt(`${giftK}`) & parseInt(`${giftK}`)}`));
      }
      loading9 = `${(String.fromCharCode(122,0) == emojiE ? countryl.length : emojiE.length)}`;
      if (streamingS) {
         break;
      }
   } while (streamingS && (loading9.endsWith(`${renewP.size}`)));
   while (popupD.length > 3) {
      popupD += `${countryl.length << (Math.min(5, Math.abs(renewP.size)))}`;
      break;
   }
      emojiE += `${2 * parseInt(`${linex}`)}`;
       let controll = String.fromCharCode(97,112,115,95,54,95,53,52,0);
       let borderlessm = false;
       let lightw = String.fromCharCode(99,95,51,50,95,116,111,110,0);
      if (!borderlessm) {
          let progressK = true;
          let dataE = false;
         controll += `${2 - controll.length}`;
         progressK = !dataE || !dataE;
      }
      if (lightw == String.fromCharCode(76,0)) {
          let crossI = String.fromCharCode(98,105,116,115,116,114,95,48,95,51,55,0);
          let switch_i5a: Map<any, any> = new Map([[String.fromCharCode(97,115,99,98,110,95,113,95,49,0),310], [String.fromCharCode(115,101,99,116,105,111,110,115,95,99,95,50,57,0),340], [String.fromCharCode(115,117,112,112,114,101,115,115,105,111,110,95,48,95,50,57,0),431]]);
         controll = `${controll.length}`;
         crossI = `${switch_i5a.size}`;
         switch_i5a.set(`${crossI}`, crossI.length);
      }
         borderlessm = 77 >= lightw.length;
      for (let r = 0; r < 3; r++) {
          let gmailH: Map<any, any> = new Map([[String.fromCharCode(112,117,108,115,101,115,95,52,95,53,0),827], [String.fromCharCode(111,95,53,55,95,108,97,99,105,110,103,0),276], [String.fromCharCode(106,95,49,52,95,114,101,115,101,101,107,0),623]]);
          let rankI = String.fromCharCode(103,95,52,48,95,100,105,110,101,114,115,0);
         borderlessm = controll.length == 59 && borderlessm;
         gmailH.set(rankI, gmailH.size >> (Math.min(Math.abs(3), 2)));
         rankI = `${gmailH.size % 2}`;
      }
          let lines = false;
          let helperm: Map<any, any> = new Map([[String.fromCharCode(103,95,53,56,95,97,115,115,105,103,110,109,101,110,116,0),String.fromCharCode(104,95,55,55,95,109,111,100,105,102,121,0)], [String.fromCharCode(101,114,105,97,108,105,122,97,116,105,111,110,95,49,95,54,53,0),String.fromCharCode(100,95,57,54,95,109,97,116,99,104,101,114,0)]]);
         borderlessm = borderlessm && lightw.length > 58;
         lines = !lines;
         helperm.set(`${lines}`, 1 & helperm.size);
         controll += `${controll.length % (Math.max(1, 6))}`;
      while (lightw == String.fromCharCode(88,0) || controll == String.fromCharCode(99,0)) {
         lightw = `${lightw.length}`;
         break;
      }
      while (borderlessm || 4 < controll.length) {
         borderlessm = String.fromCharCode(82,0) == lightw;
         break;
      }
      while (lightw.length > 5) {
         borderlessm = controll.length >= 83 && borderlessm;
         break;
      }
      loading9 += `${2 | parseInt(`${sorto}`)}`;
   if ((loading9.length & 1) <= 4 && 5.40 <= (humidity_ * 2.0)) {
      loading9 += `${countryl.length}`;
   }
       let modelsH = true;
      if (modelsH && !modelsH) {
         modelsH = (!modelsH ? !modelsH : !modelsH);
      }
          let areaB = 4.0;
         modelsH = !modelsH;
         areaB /= Math.max(parseFloat(`${parseInt(`${areaB}`) & parseInt(`${areaB}`)}`), 3);
      let constantsM = modelsH ? !modelsH : modelsH;
      do {
          let pointo = 3.0;
          let vignetteJ = true;
          let trash5 = 2.0;
          let entrye = false;
          let context4: Array<any> = [646, 436];
         modelsH = trash5 < 99.43;
         pointo += parseFloat(`${2}`);
         vignetteJ = entrye;
         trash5 -= (parseFloat(`${(vignetteJ ? 2 : 1) / (Math.max(parseInt(`${pointo}`), 8))}`));
         context4 = [((entrye ? 1 : 3) & parseInt(`${pointo}`))];
         if (constantsM) {
            break;
         }
      } while ((modelsH || modelsH) && constantsM);
      bingm = "3";
   if (!popupD.startsWith(`${cornerK}`)) {
      popupD += `${renewP.size}`;
   }
   if (popupD.includes(`${humidity_}`)) {
      popupD += `${parseInt(`${humidity_}`) + 3}`;
   }
      linex += parseFloat(`${floaterY.length}`);
   let navigation7 = loading9.length <= 8193987;
   do {
       let description_hH = String.fromCharCode(120,95,54,51,95,104,105,103,104,108,105,103,104,116,0);
       let area5 = 5.0;
       let q_unlockP = String.fromCharCode(100,95,52,56,95,102,111,111,116,101,114,0);
      for (let w = 0; w < 3; w++) {
         description_hH += `${3 % (Math.max(1, description_hH.length))}`;
      }
         area5 -= parseInt(`${area5}`);
         area5 /= Math.max(description_hH.length * 2, 4);
         area5 /= Math.max(3, (String.fromCharCode(74,0) == description_hH ? description_hH.length : parseInt(`${area5}`)));
      let gpay2 = 9591266 <= q_unlockP.length;
      do {
         q_unlockP = `${q_unlockP.length | parseInt(`${area5}`)}`;
         if (gpay2) {
            break;
         }
      } while (gpay2 && ((q_unlockP.length * parseInt(`${area5}`)) > 4));
         q_unlockP = `${parseInt(`${area5}`) - 1}`;
         area5 /= Math.max(1, 3);
      if (!description_hH.endsWith(`${area5}`)) {
          let trophyJ = String.fromCharCode(114,97,110,100,111,109,110,101,115,115,95,117,95,57,53,0);
          let rewindo = 5.0;
         area5 /= Math.max(trophyJ.length, 3);
         trophyJ += `${3 & parseInt(`${rewindo}`)}`;
         rewindo -= 3;
      }
       let stringB: Array<any> = [907, 773];
       let singaporeA: Array<any> = [697, 477, 6];
      loading9 = `${(String.fromCharCode(53,0) == description_hH ? emojiE.length : description_hH.length)}`;
      if (navigation7) {
         break;
      }
   } while (navigation7 && (xvodi && 3 < loading9.length));
       let episode_ = false;
         episode_ = episode_ && !episode_;
          let homed = 1;
         episode_ = 13 < homed || !episode_;
      if (episode_) {
         episode_ = !episode_;
      }
      humidity_ *= parseFloat(`${parseInt(`${cornerK}`)}`);
   for (let g = 0; g < 1; g++) {
      xvodi = 38 > stringe && cornerK > 95.57;
   }
   for (let t = 0; t < 2; t++) {
      sorto /= Math.max(parseInt(`${cornerK}`), 2);
   }
      splashd *= 3;
   for (let g = 0; g < 2; g++) {
      stringe &= stringe % (Math.max(parseInt(`${splashd}`), 8));
   }
   if ((humidity_ - parseFloat(`${loading9.length}`)) == 4.77) {
       let shootR: Array<any> = [410, 534];
       let upgradet: Array<any> = [288, 437, 263];
       let selectionB = String.fromCharCode(101,95,49,53,95,115,100,101,115,0);
       let targetb = String.fromCharCode(122,95,49,55,95,112,114,101,104,97,115,104,0);
      while (1 < (shootR.length << (Math.min(targetb.length, 3))) || (targetb.length << (Math.min(2, shootR.length))) < 1) {
         targetb = `${3 & shootR.length}`;
         break;
      }
         upgradet.push(shootR.length);
      if (upgradet.length > targetb.length) {
         targetb = `${selectionB.length}`;
      }
         selectionB = `${targetb.length ^ selectionB.length}`;
         upgradet = [selectionB.length];
       let ping9 = true;
          let watch0: Array<any> = [157, 352, 485];
         upgradet.push(selectionB.length);
         watch0.push(watch0.length / 1);
         targetb += `${(selectionB == String.fromCharCode(111,0) ? selectionB.length : targetb.length)}`;
      while (targetb != String.fromCharCode(88,0)) {
         selectionB += "2";
         break;
      }
      for (let v = 0; v < 1; v++) {
         upgradet.push(selectionB.length);
      }
      while (upgradet.length >= selectionB.length) {
         upgradet = [3 & selectionB.length];
         break;
      }
         upgradet.push(upgradet.length * 1);
      humidity_ /= Math.max(parseFloat(`${renewP.size}`), 5);
   }

    setShowHomeLoading(false);
  };

  useEffect(() => {
    setIsOffline(settingsReducer.isOffline);
  }, []);

  useFocusEffect(
    useCallback(() => {
      if (
        !settingsReducer.isOffline &&
        settingsReducer.isOffline !== isOffline
      ) {
        setIsOffline(settingsReducer.isOffline);
        setShowHomeLoading(true);
        
        handleRefresh(navId, true);
      } else if (settingsReducer.isOffline) {
        return () => {
          setIsOffline(settingsReducer.isOffline);
        };
      }
    }, [settingsReducer.isOffline])
  );

  
  const [isRefreshing, setIsRefreshing] = useState(false);

  
  const handleRefresh = async (id: number, showloading: boolean = false) => {
       let progressk = 4;
    let downl = 2;
    let expandp = String.fromCharCode(100,119,97,114,102,95,49,95,54,49,0);
    let sina_: Array<any> = [697, 741, 367];
    let detaile = String.fromCharCode(111,95,57,95,100,111,99,115,0);
    let l_viewe = false;
    let giftK: Array<any> = [String.fromCharCode(98,117,102,114,101,102,95,117,95,48,0), String.fromCharCode(120,95,53,56,95,108,97,99,101,115,0)];
    let hoverl = String.fromCharCode(101,110,116,105,114,101,95,115,95,54,0);
    let anythinkg = String.fromCharCode(108,111,97,116,95,108,95,55,57,0);
    let feedback1: Map<any, any> = new Map([[String.fromCharCode(115,116,97,116,117,115,95,54,95,57,57,0),523], [String.fromCharCode(101,99,107,101,121,95,55,95,49,50,0),630], [String.fromCharCode(99,108,111,117,100,102,108,97,114,101,95,107,95,56,53,0),474]]);
    let sortz = false;
       let umeng7: Array<any> = [String.fromCharCode(116,95,56,53,0), String.fromCharCode(99,116,116,115,95,104,95,51,53,0), String.fromCharCode(116,114,97,110,115,97,99,116,105,111,110,115,95,116,95,52,54,0)];
       let pingc = String.fromCharCode(108,97,118,102,117,116,105,108,115,95,119,95,52,51,0);
       let telegram5: Map<any, any> = new Map([[String.fromCharCode(116,104,114,101,97,100,109,101,115,115,97,103,101,95,122,95,56,49,0),337], [String.fromCharCode(102,105,108,108,95,118,95,53,57,0),682]]);
      if (umeng7.length == 3) {
         umeng7.push(1 << (Math.min(3, pingc.length)));
      }
         umeng7 = [(String.fromCharCode(109,0) == pingc ? pingc.length : umeng7.length)];
         telegram5.set(pingc, pingc.length ^ 3);
       let streamingi: Array<any> = [692, 966, 329];
       let referrerL: Array<any> = [String.fromCharCode(115,95,53,50,95,114,101,99,104,101,99,107,0), String.fromCharCode(109,95,53,56,95,112,97,115,115,102,98,0), String.fromCharCode(103,111,98,98,108,101,95,55,95,50,53,0)];
         umeng7 = [(pingc == String.fromCharCode(116,0) ? referrerL.length : pingc.length)];
      while ((3 - streamingi.length) < 5) {
         referrerL = [2];
         break;
      }
      let sliderT = 6990091 >= referrerL.length;
      do {
         referrerL = [referrerL.length * pingc.length];
         if (sliderT) {
            break;
         }
      } while (sliderT && ((streamingi.length | 1) <= 3));
         streamingi = [referrerL.length];
         streamingi = [1];
      hoverl = `${umeng7.length}`;
   while (2 > expandp.length) {
      hoverl += `${2 & downl}`;
      break;
   }
       let awayd = true;
       let collectionS = 4;
      if (4 <= collectionS || (4 % (Math.max(2, collectionS))) <= 2) {
          let constants3 = 2;
         collectionS /= Math.max(5, 3 >> (Math.min(Math.abs(collectionS), 2)));
         constants3 /= Math.max(4, constants3 >> (Math.min(Math.abs(2), 1)));
      }
         collectionS *= (collectionS ^ (awayd ? 4 : 3));
      for (let f = 0; f < 2; f++) {
         awayd = collectionS > 52 && !awayd;
      }
      let typesm = collectionS >= 9224556;
      do {
         collectionS /= Math.max(collectionS, 3);
         if (typesm) {
            break;
         }
      } while (typesm && (awayd));
         collectionS /= Math.max(2, 5);
      let checkboxm = awayd ? !awayd : awayd;
      do {
         awayd = !awayd;
         if (checkboxm) {
            break;
         }
      } while (checkboxm && ((4 - collectionS) <= 1));
      progressk |= 1;

    if (showloading) {

   if (2 < (1 - sina_.length)) {
       let uploadp: Map<any, any> = new Map([[String.fromCharCode(122,95,52,50,95,99,104,101,99,107,115,117,109,109,101,100,0),961], [String.fromCharCode(98,108,111,99,107,105,101,95,100,95,53,54,0),96], [String.fromCharCode(115,95,57,54,95,109,101,100,105,97,115,0),282]]);
       let tickm = 4;
       let signinupA = 2.0;
         uploadp = new Map([[`${uploadp.size}`, parseInt(`${signinupA}`) | uploadp.size]]);
      if ((uploadp.size << (Math.min(Math.abs(4), 1))) <= 5) {
          let promotionv = String.fromCharCode(113,95,57,52,95,115,111,117,114,99,101,115,0);
          let orangeL = String.fromCharCode(111,95,55,95,99,111,108,108,101,99,116,101,100,0);
          let whitej = String.fromCharCode(108,111,97,100,101,100,95,122,95,50,57,0);
          let streamingv: Array<any> = [String.fromCharCode(115,105,110,99,95,116,95,54,56,0), String.fromCharCode(100,111,99,105,100,115,95,51,95,54,49,0)];
          let resultj = false;
         uploadp = new Map([[`${resultj}`, (whitej == String.fromCharCode(105,0) ? (resultj ? 5 : 4) : whitej.length)]]);
         promotionv = `${orangeL.length & 3}`;
         orangeL += `${(String.fromCharCode(81,0) == promotionv ? orangeL.length : promotionv.length)}`;
         streamingv.push(streamingv.length - 1);
      }
      while (2 > (1 * uploadp.size) && (1 * uploadp.size) > 2) {
         uploadp.set(`${signinupA}`, parseInt(`${signinupA}`) & 3);
         break;
      }
         uploadp.set(`${signinupA}`, parseInt(`${signinupA}`));
      for (let k = 0; k < 1; k++) {
          let unselectedx = 0.0;
          let diceu = 4.0;
         signinupA += parseFloat(`${tickm ^ parseInt(`${diceu}`)}`);
         unselectedx -= parseFloat(`${parseInt(`${unselectedx}`)}`);
         diceu /= Math.max(3, parseFloat(`${parseInt(`${unselectedx}`) & 3}`));
      }
      let fastt = tickm >= 6804011;
      do {
         tickm >>= Math.min(4, Math.abs(uploadp.size + 3));
         if (fastt) {
            break;
         }
      } while (((tickm & 3) > 1 && (signinupA - 5.34) > 1.18) && fastt);
      for (let y = 0; y < 3; y++) {
         tickm /= Math.max(2, 2 | uploadp.size);
      }
      if (tickm == signinupA) {
          let yingK = String.fromCharCode(110,100,101,102,95,102,95,54,56,0);
          let single2 = false;
          let alertX = 2;
         signinupA += parseFloat(`${1}`);
         yingK += `${alertX >> (Math.min(1, Math.abs(1)))}`;
         single2 = (alertX - yingK.length) == 83;
      }
          let nativej = String.fromCharCode(99,111,99,111,97,95,110,95,51,50,0);
          let specV = String.fromCharCode(102,105,108,101,104,101,97,100,101,114,95,97,95,54,52,0);
          let layoutQ = 2;
         tickm &= 3;
         nativej = `${specV.length << (Math.min(2, Math.abs(layoutQ)))}`;
         specV = `${nativej.length}`;
         layoutQ >>= Math.min(Math.abs(1 << (Math.min(1, specV.length))), 5);
      progressk /= Math.max(tickm & 3, 1);
   }
   for (let g = 0; g < 2; g++) {
       let down4 = 3.0;
       let promotiong = false;
       let hongkongu: Array<any> = [789, 619];
      while (!promotiong) {
         promotiong = hongkongu.length < 52;
         break;
      }
         promotiong = down4 == 85.24 || !promotiong;
          let untickC = 5.0;
          let chartY = true;
          let floaterJ = 4.0;
         promotiong = hongkongu.includes(down4);
         untickC -= (parseFloat(`${(chartY ? 4 : 5) / (Math.max(parseInt(`${floaterJ}`), 3))}`));
         chartY = 88.88 <= floaterJ;
      let firebase8 = down4 >= 9251874.0;
      do {
         down4 += (parseFloat(`${(promotiong ? 1 : 2) % (Math.max(parseInt(`${down4}`), 8))}`));
         if (firebase8) {
            break;
         }
      } while ((2 == hongkongu.length) && firebase8);
          let heartZ = String.fromCharCode(103,95,51,56,95,99,97,110,0);
          let lightJ = 5;
          let subs4: Map<any, any> = new Map([[String.fromCharCode(115,112,100,105,102,95,117,95,50,52,0),false ], [String.fromCharCode(121,95,51,57,95,100,111,117,103,108,97,115,0),true ]]);
         hongkongu.push(((promotiong ? 2 : 4) >> (Math.min(hongkongu.length, 2))));
         heartZ = `${lightJ & subs4.size}`;
         lightJ -= lightJ >> (Math.min(Math.abs(subs4.size), 3));
      while (3.65 == (down4 / (Math.max(parseFloat(`${hongkongu.length}`), 4))) && 3 == (hongkongu.length / (Math.max(5, parseInt(`${down4}`))))) {
          let thailand3: Map<any, any> = new Map([[String.fromCharCode(122,95,54,53,95,97,112,112,101,110,100,105,110,103,0),154], [String.fromCharCode(100,101,115,104,97,107,101,95,99,95,51,56,0),996], [String.fromCharCode(106,95,56,49,95,115,97,102,101,0),852]]);
          let langkeyS = String.fromCharCode(104,95,57,54,95,100,101,115,99,114,105,112,116,111,114,0);
          let projectG: Array<any> = [String.fromCharCode(106,95,50,49,95,111,117,116,99,111,109,101,0), String.fromCharCode(104,95,50,50,95,112,97,114,101,110,116,115,0), String.fromCharCode(120,95,51,52,95,98,99,104,101,99,107,0)];
          let floatingz = true;
          let sharec = true;
         down4 -= parseFloat(`${2 / (Math.max(8, langkeyS.length))}`);
         thailand3 = new Map([[`${projectG.length}`, (2 & (sharec ? 4 : 5))]]);
         langkeyS = "1";
         projectG.push(((floatingz ? 4 : 3) + projectG.length));
         floatingz = projectG.length < thailand3.size;
         sharec = sharec || !floatingz;
         break;
      }
         hongkongu.push(hongkongu.length - 3);
      for (let s = 0; s < 3; s++) {
         promotiong = !promotiong || 30.58 >= down4;
      }
      if (!promotiong) {
          let dragp = 1.0;
          let umeng_ = 3;
          let homeY = 3;
          let agreemente: Array<any> = [398, 438, 64];
          let sortl = 4.0;
         promotiong = 15 < umeng_;
         dragp *= parseFloat(`${homeY}`);
         umeng_ |= 1 >> (Math.min(Math.abs(homeY), 5));
         agreemente = [homeY ^ parseInt(`${dragp}`)];
         sortl += parseFloat(`${2}`);
      }
      progressk ^= 3;
   }
   while (detaile.length > 1) {
      detaile += `${((l_viewe ? 3 : 5) / (Math.max(7, progressk)))}`;
      break;
   }
      setIsRefreshing(true);
    }
    try {

      l_viewe = anythinkg.length > 85;
      l_viewe = 79 >= progressk;
      sina_ = [detaile.length - 1];
      await queryClient.resetQueries(["HomePage", id]);

   while (expandp.startsWith(`${downl}`)) {
      expandp = `${giftK.length | 3}`;
      break;
   }
   if (expandp.length == 3) {
      expandp += `${detaile.length / (Math.max(6, sina_.length))}`;
   }
      progressk &= 1;
      setIsRefreshing(false);

      l_viewe = 12 == downl;
   for (let m = 0; m < 1; m++) {
      feedback1 = new Map([[`${giftK.length}`, 2 >> (Math.min(4, giftK.length))]]);
   }
   if ((3 ^ anythinkg.length) == 2) {
      anythinkg += `${2 & downl}`;
   }
      setNavId(id);

      expandp = `${downl >> (Math.min(5, Math.abs(2)))}`;
       let sourceC = 3;
       let bootsplashd = 4;
       let inactiveu = String.fromCharCode(114,111,116,97,116,105,111,110,95,111,95,49,48,48,0);
         sourceC |= sourceC;
          let chartH = String.fromCharCode(107,95,57,56,95,114,101,99,101,112,116,105,111,110,0);
          let lightM: Map<any, any> = new Map([[String.fromCharCode(116,101,109,112,111,114,97,114,105,108,121,95,101,95,50,57,0),String.fromCharCode(118,109,115,108,95,108,95,49,51,0)], [String.fromCharCode(115,95,55,53,95,100,105,115,112,108,97,121,115,0),String.fromCharCode(99,111,109,112,111,115,101,95,105,95,49,53,0)]]);
          let screent = String.fromCharCode(111,95,51,95,97,114,98,105,116,101,114,0);
         bootsplashd <<= Math.min(4, Math.abs((String.fromCharCode(54,0) == chartH ? sourceC : chartH.length)));
         lightM = new Map([[`${lightM.size}`, lightM.size]]);
         screent = `${3 + screent.length}`;
      let mappingt = 9760771 >= sourceC;
      do {
         sourceC *= inactiveu.length - sourceC;
         if (mappingt) {
            break;
         }
      } while (mappingt && (4 > (3 >> (Math.min(3, Math.abs(bootsplashd))))));
      while (!inactiveu.includes(`${bootsplashd}`)) {
          let plashy = String.fromCharCode(100,95,55,52,95,115,116,105,99,107,101,114,112,97,99,107,0);
         bootsplashd += plashy.length;
         break;
      }
      while (4 > (bootsplashd / 1)) {
         bootsplashd += sourceC;
         break;
      }
         inactiveu = `${sourceC}`;
          let frame_kv = String.fromCharCode(99,111,109,112,97,114,101,102,95,116,95,50,57,0);
          let spinneru = 1.0;
         bootsplashd &= bootsplashd;
         frame_kv += `${frame_kv.length}`;
         spinneru += (frame_kv == String.fromCharCode(113,0) ? frame_kv.length : parseInt(`${spinneru}`));
          let layoutq = 1.0;
          let carouselY: Array<any> = [266, 864, 921];
         bootsplashd &= 1 * bootsplashd;
         layoutq *= 2 + carouselY.length;
         carouselY = [parseInt(`${layoutq}`)];
      if (2 < (1 ^ inactiveu.length) || 5 < (bootsplashd ^ 1)) {
          let typesU = String.fromCharCode(122,108,105,98,112,114,105,109,101,95,103,95,56,52,0);
          let overO = String.fromCharCode(97,100,100,105,116,105,111,110,97,108,108,121,95,103,95,57,50,0);
          let leftL = String.fromCharCode(101,110,99,111,100,101,100,95,57,95,55,51,0);
         inactiveu += `${1 * typesU.length}`;
         typesU = `${(String.fromCharCode(69,0) == leftL ? overO.length : leftL.length)}`;
         overO = `${leftL.length >> (Math.min(1, overO.length))}`;
      }
      downl /= Math.max(hoverl.length, 3);
   while ((progressk & 4) < 1) {
       let unselecteds = 4.0;
       let styleL = String.fromCharCode(120,95,57,54,95,102,111,99,117,115,0);
       let singaporel: Array<any> = [430, 912, 872];
       let promotionj = String.fromCharCode(100,105,115,112,111,115,101,95,50,95,52,54,0);
       let combinedX = String.fromCharCode(99,102,104,100,95,55,95,53,55,0);
         promotionj += `${1 - styleL.length}`;
          let pressurej = String.fromCharCode(113,95,54,56,95,97,117,116,111,103,101,110,0);
          let incidenth = 3.0;
          let views1 = String.fromCharCode(101,95,56,52,95,100,97,112,112,115,0);
         singaporel = [combinedX.length - 1];
         pressurej += `${parseInt(`${incidenth}`) << (Math.min(views1.length, 3))}`;
         incidenth -= parseFloat(`${parseInt(`${incidenth}`)}`);
         views1 = "1";
         styleL = `${styleL.length}`;
      if (combinedX != promotionj) {
         promotionj += "2";
      }
          let inviteW = String.fromCharCode(100,95,51,54,95,102,101,97,116,117,114,101,115,0);
          let moviesY = true;
         combinedX += `${combinedX.length + parseInt(`${unselecteds}`)}`;
         inviteW = `${2 | inviteW.length}`;
         moviesY = inviteW.length <= 12;
       let searcht = String.fromCharCode(115,117,98,112,97,99,107,101,116,115,95,52,95,53,49,0);
       let privacyx = String.fromCharCode(108,95,50,95,111,109,112,114,101,115,115,111,114,0);
      while (singaporel.length >= 3) {
         singaporel.push((String.fromCharCode(114,0) == promotionj ? promotionj.length : styleL.length));
         break;
      }
      while (promotionj.length == combinedX.length) {
          let containero = 1.0;
         combinedX = `${combinedX.length ^ singaporel.length}`;
         containero *= 1 % (Math.max(3, parseInt(`${containero}`)));
         break;
      }
         privacyx = `${searcht.length}`;
      let short_fwu = singaporel.length >= 5089726;
      do {
         singaporel = [1 << (Math.min(5, Math.abs(parseInt(`${unselecteds}`))))];
         if (short_fwu) {
            break;
         }
      } while ((unselecteds >= 4.0) && short_fwu);
      while ((singaporel.length % 5) >= 5 && (unselecteds - parseFloat(`${singaporel.length}`)) >= 1.92) {
          let sentryI = String.fromCharCode(103,101,110,102,105,108,101,115,95,103,95,54,53,0);
          let modityU = String.fromCharCode(116,97,114,103,101,116,95,50,95,52,51,0);
          let episodeg: Map<any, any> = new Map([[String.fromCharCode(99,95,52,95,112,111,108,105,99,121,0),439], [String.fromCharCode(117,95,49,57,95,99,104,97,116,0),186]]);
         singaporel.push(3);
         sentryI += "2";
         modityU += "1";
         episodeg.set(sentryI, episodeg.size % 2);
         break;
      }
      let typesg = privacyx.length >= 9589356;
      do {
         privacyx += `${combinedX.length}`;
         if (typesg) {
            break;
         }
      } while (typesg && (promotionj == privacyx));
      let downloadingz = String.fromCharCode(109,113,110,52,0) == combinedX;
      do {
          let indicatorQ = String.fromCharCode(103,95,52,53,0);
         combinedX += `${(promotionj == String.fromCharCode(102,0) ? promotionj.length : parseInt(`${unselecteds}`))}`;
         indicatorQ += `${indicatorQ.length}`;
         if (downloadingz) {
            break;
         }
      } while (((combinedX.length % (Math.max(10, singaporel.length))) >= 2 || (singaporel.length % (Math.max(combinedX.length, 6))) >= 2) && downloadingz);
          let turnS = 2.0;
          let gpayx: Map<any, any> = new Map([[String.fromCharCode(114,101,105,110,115,101,114,116,95,52,95,55,53,0),83], [String.fromCharCode(100,95,52,55,95,106,111,98,115,0),65], [String.fromCharCode(122,101,116,97,95,55,95,52,57,0),337]]);
          let castings: Map<any, any> = new Map([[String.fromCharCode(102,95,49,48,48,95,100,117,114,97,116,105,111,110,115,0),574], [String.fromCharCode(122,95,57,95,97,114,109,116,104,0),800]]);
         privacyx = `${1 >> (Math.min(3, Math.abs(parseInt(`${turnS}`))))}`;
         turnS /= Math.max(4, castings.size ^ gpayx.size);
         gpayx = new Map([[`${castings.size}`, gpayx.size % 1]]);
         singaporel.push(privacyx.length ^ combinedX.length);
      progressk |= (progressk | (sortz ? 4 : 2));
      break;
   }
      setShowHomeLoading(false);

   if (expandp.startsWith(`${l_viewe}`)) {
      expandp += `${hoverl.length - 1}`;
   }
   let sinaq = 5487965 >= sina_.length;
   do {
      sina_.push(1);
      if (sinaq) {
         break;
      }
   } while (sinaq && ((sina_.length | 4) > 4));
   if (2 > (downl ^ 2) || 2 > (progressk ^ downl)) {
      downl += detaile.length;
   }

      return;
    } catch (error) {

      sortz = 88 > giftK.length;
   while ((hoverl.length ^ 3) >= 4) {
       let speck = String.fromCharCode(115,121,115,99,116,108,115,95,99,95,52,55,0);
      let clubH = speck.length >= 7506491;
      do {
          let calendara = String.fromCharCode(122,95,57,55,95,97,100,97,112,116,97,116,105,111,110,115,101,116,0);
          let thumbnail_ = String.fromCharCode(114,95,52,48,95,102,111,114,105,0);
          let savet: Array<any> = [507, 291, 27];
         speck += `${speck.length ^ 1}`;
         calendara = `${savet.length % 2}`;
         thumbnail_ += `${thumbnail_.length / (Math.max(10, calendara.length))}`;
         savet = [thumbnail_.length + calendara.length];
         if (clubH) {
            break;
         }
      } while ((speck != String.fromCharCode(121,0) || speck == String.fromCharCode(86,0)) && clubH);
         speck = `${speck.length / (Math.max(6, speck.length))}`;
      let bootsplashr = speck == String.fromCharCode(57,118,118,56,120,0);
      do {
         speck = `${(String.fromCharCode(85,0) == speck ? speck.length : speck.length)}`;
         if (bootsplashr) {
            break;
         }
      } while ((!speck.startsWith(speck)) && bootsplashr);
      downl |= ((l_viewe ? 2 : 3) << (Math.min(giftK.length, 4)));
      break;
   }
   if ((expandp.length - giftK.length) == 4 || 4 == (4 - giftK.length)) {
      giftK.push(giftK.length);
   }
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    const handleTabPress = async () => {
       let thumbnailc: Array<any> = [857, 328, 920];
    let mailx: Array<any> = [String.fromCharCode(103,95,52,95,112,99,109,98,0), String.fromCharCode(100,111,99,107,101,114,95,99,95,53,55,0), String.fromCharCode(110,95,50,95,103,100,97,116,97,0)];
    let topicu: Map<any, any> = new Map([[String.fromCharCode(110,95,51,50,95,108,97,99,101,115,0),false ], [String.fromCharCode(97,99,107,115,95,120,95,49,55,0),false ]]);
    let backwardo = 0;
    let component7: Array<any> = [430, 511];
    let empty2 = String.fromCharCode(102,95,49,95,109,112,115,117,98,0);
    let fastm = String.fromCharCode(98,95,55,57,95,114,101,108,105,97,98,108,101,0);
    let favorite4 = 2.0;
    let expiredG: Array<any> = [339, 995];
    let thailandZ: Map<any, any> = new Map([[String.fromCharCode(100,95,52,54,95,112,114,105,110,116,97,98,108,101,0),957], [String.fromCharCode(109,111,118,101,110,99,99,101,110,99,95,103,95,52,49,0),797]]);
    let bellF = 2.0;
    let reminderB: Array<any> = [167, 854];
    let disconnectedi = false;
    let usernamey: Array<any> = [110, 603, 259];
    let store8 = true;
   for (let z = 0; z < 3; z++) {
      empty2 += `${parseInt(`${favorite4}`)}`;
   }
      topicu = new Map([[`${expiredG.length}`, expiredG.length / (Math.max(1, 10))]]);
   let fullw = component7.length >= 6624656;
   do {
      component7.push(2 << (Math.min(1, component7.length)));
      if (fullw) {
         break;
      }
   } while (((expiredG.length ^ component7.length) <= 1) && fullw);
   for (let h = 0; h < 3; h++) {
      mailx.push(backwardo % (Math.max(thailandZ.size, 2)));
   }

      if (isFocused && !isRefreshing) {

   if (5 == (fastm.length - 3) && (fastm.length / (Math.max(10, favorite4))) == 3.88) {
       let hookZ = false;
       let blackv = true;
       let albumo = String.fromCharCode(114,95,56,54,95,109,111,100,117,108,101,0);
       let macauQ: Map<any, any> = new Map([[String.fromCharCode(99,95,55,57,95,114,101,102,101,114,114,97,108,0),String.fromCharCode(98,95,53,50,95,112,103,109,120,0)], [String.fromCharCode(116,95,55,48,95,99,97,112,105,116,97,108,105,122,101,0),String.fromCharCode(111,95,54,52,95,109,97,115,107,113,0)]]);
       let indicatorH = true;
      let componentr = macauQ.size >= 7385864;
      do {
          let sportZ = 4.0;
          let hongkongj: Array<any> = [44, 54, 404];
          let overlay1 = String.fromCharCode(110,97,108,117,115,95,56,95,54,55,0);
          let stringt = 5.0;
         macauQ.set(overlay1, macauQ.size);
         sportZ *= hongkongj.length - parseInt(`${sportZ}`);
         hongkongj = [3 + hongkongj.length];
         overlay1 = `${hongkongj.length >> (Math.min(2, Math.abs(parseInt(`${stringt}`))))}`;
         stringt *= hongkongj.length | parseInt(`${stringt}`);
         if (componentr) {
            break;
         }
      } while (componentr && ((macauQ.size % 3) > 3));
      let backN = blackv ? !blackv : blackv;
      do {
         blackv = (hookZ ? blackv : !hookZ);
         if (backN) {
            break;
         }
      } while (backN && (blackv));
      while (albumo.length < 2) {
         blackv = indicatorH;
         break;
      }
         indicatorH = (!hookZ ? !indicatorH : hookZ);
       let basketballb = String.fromCharCode(114,101,99,97,108,99,95,119,95,54,48,0);
      if (!indicatorH) {
          let sellp = 2.0;
          let phonev = 2.0;
         blackv = albumo.length >= 10;
         sellp -= parseInt(`${sellp}`) / 2;
         phonev /= Math.max(5, parseInt(`${sellp}`));
      }
      let main_ae = macauQ.size >= 5991338;
      do {
         macauQ.set(`${indicatorH}`, 3);
         if (main_ae) {
            break;
         }
      } while (main_ae && (2 == macauQ.size));
         basketballb += `${albumo.length + 3}`;
      for (let w = 0; w < 1; w++) {
         albumo += "1";
      }
      if (albumo != basketballb) {
         basketballb = `${((indicatorH ? 3 : 2))}`;
      }
       let storez = false;
       let relatedj = true;
      if (1 > basketballb.length) {
         blackv = storez && basketballb.length <= 48;
      }
         storez = (((indicatorH ? 75 : macauQ.size) / (Math.max(macauQ.size, 5))) == 75);
         storez = (basketballb.length & macauQ.size) >= 74;
      while (basketballb.length >= 5) {
         basketballb = `${((blackv ? 1 : 3))}`;
         break;
      }
      fastm += "1";
   }
       let questG = 3.0;
         questG -= parseInt(`${questG}`);
          let twittero = 4;
          let checkboxL: Array<any> = [773, 885];
          let lessg = 5;
         questG /= Math.max(1 % (Math.max(6, twittero)), 1);
         twittero *= 2;
         checkboxL = [lessg];
         lessg %= Math.max(1, lessg * checkboxL.length);
         questG *= parseInt(`${questG}`) / 3;
      mailx.push(2);
   if (5 == (1 - mailx.length) || (1 - thumbnailc.length) == 4) {
      thumbnailc = [topicu.size];
   }
   if ((expiredG.length >> (Math.min(2, Math.abs(backwardo)))) >= 1) {
       let vietnam7: Array<any> = [835, 173];
       let mappingN = String.fromCharCode(97,110,115,105,95,99,95,54,49,0);
       let greenY = String.fromCharCode(100,110,120,104,100,100,97,116,97,95,110,95,56,0);
      for (let a = 0; a < 2; a++) {
          let detaila = String.fromCharCode(97,108,108,111,119,115,95,107,95,57,57,0);
         vietnam7.push((detaila == String.fromCharCode(112,0) ? detaila.length : greenY.length));
      }
         mappingN += `${greenY.length & mappingN.length}`;
         mappingN += `${(mappingN == String.fromCharCode(85,0) ? vietnam7.length : mappingN.length)}`;
       let eactB = String.fromCharCode(119,105,100,101,102,101,108,101,109,95,103,95,49,53,0);
      if (eactB != greenY) {
         greenY = `${3 & eactB.length}`;
      }
          let internetr = 0.0;
          let selection9 = String.fromCharCode(97,116,116,114,95,106,95,51,49,0);
         vietnam7.push(3 << (Math.min(4, mappingN.length)));
         internetr -= parseInt(`${internetr}`);
         selection9 = "3";
       let buttonf = true;
       let gestureW = false;
          let miniI: Map<any, any> = new Map([[String.fromCharCode(104,111,109,101,95,97,95,57,54,0),true ], [String.fromCharCode(112,117,116,105,110,116,95,104,95,50,0),false ]]);
         buttonf = 78 > vietnam7.length;
         miniI.set(`${miniI.size}`, 1 % (Math.max(6, miniI.size)));
       let carouselB = String.fromCharCode(115,99,114,111,108,108,97,98,108,101,95,119,95,50,48,0);
      expiredG.push((String.fromCharCode(85,0) == empty2 ? component7.length : empty2.length));
   }
        setIsRefreshing((prevIsRefreshing) => {

   for (let e = 0; e < 1; e++) {
       let humidityl: Array<any> = [1000, 451];
       let clearR = String.fromCharCode(108,95,55,49,95,110,97,118,105,103,97,116,105,110,103,0);
       let long_kjH: Map<any, any> = new Map([[String.fromCharCode(100,111,116,116,101,100,95,116,95,52,50,0),946], [String.fromCharCode(118,105,100,101,111,115,95,104,95,51,53,0),189]]);
       let groupO = String.fromCharCode(98,95,50,95,103,114,97,110,117,108,97,114,105,116,121,0);
       let sans_: Array<any> = [929, 176];
         humidityl = [groupO.length >> (Math.min(1, Math.abs(long_kjH.size)))];
         clearR += "3";
          let stare = String.fromCharCode(102,95,55,52,95,100,97,112,112,0);
          let logom = String.fromCharCode(98,95,53,53,95,110,105,108,0);
          let statisticsg = 5.0;
         humidityl.push(sans_.length);
         stare += `${1 << (Math.min(3, logom.length))}`;
         logom += `${logom.length}`;
         statisticsg /= Math.max(3, 2 ^ stare.length);
      let shirtm = sans_.length <= 7527663;
      do {
         sans_ = [groupO.length + long_kjH.size];
         if (shirtm) {
            break;
         }
      } while ((3 == (groupO.length << (Math.min(Math.abs(3), 2)))) && shirtm);
         clearR = `${clearR.length}`;
      if ((long_kjH.size / (Math.max(5, 1))) <= 4 || (long_kjH.size / (Math.max(clearR.length, 4))) <= 5) {
         long_kjH = new Map([[clearR, clearR.length]]);
      }
      if (!groupO.startsWith(`${sans_.length}`)) {
         sans_.push(sans_.length);
      }
      if (1 <= (long_kjH.size & humidityl.length) && 1 <= (1 & long_kjH.size)) {
          let saveq = String.fromCharCode(105,111,115,116,114,101,97,109,95,114,95,52,48,0);
          let halfS = String.fromCharCode(118,111,114,100,105,112,108,111,109,95,99,95,51,50,0);
          let register_iS = 2.0;
          let ping9 = 4;
          let descJ = 1.0;
         long_kjH = new Map([[`${sans_.length}`, parseInt(`${register_iS}`)]]);
         saveq = `${parseInt(`${descJ}`) * saveq.length}`;
         halfS += `${parseInt(`${descJ}`) + 2}`;
         register_iS += parseFloat(`${ping9 << (Math.min(Math.abs(parseInt(`${descJ}`)), 1))}`);
         ping9 <<= Math.min(Math.abs(3 >> (Math.min(2, saveq.length))), 4);
      }
      for (let w = 0; w < 3; w++) {
         long_kjH.set(clearR, (clearR == String.fromCharCode(86,0) ? humidityl.length : clearR.length));
      }
      while (5 == (sans_.length / (Math.max(8, clearR.length))) || 1 == (sans_.length / (Math.max(5, 7)))) {
          let loadingZ = String.fromCharCode(98,111,114,100,101,114,101,100,95,55,95,54,48,0);
          let checkboxO = String.fromCharCode(109,95,51,95,97,112,112,101,110,100,0);
         clearR += `${sans_.length}`;
         loadingZ += `${checkboxO.length / (Math.max(2, 5))}`;
         checkboxO += `${checkboxO.length ^ 2}`;
         break;
      }
         groupO = `${(clearR == String.fromCharCode(115,0) ? clearR.length : humidityl.length)}`;
      for (let l = 0; l < 1; l++) {
          let trophyf: Array<any> = [369, 859, 223];
          let league3 = 2;
          let sportsO = String.fromCharCode(103,95,50,51,95,115,121,110,99,97,98,108,101,0);
          let network2 = false;
         sans_ = [3 >> (Math.min(1, Math.abs(long_kjH.size)))];
         trophyf = [(String.fromCharCode(100,0) == sportsO ? trophyf.length : sportsO.length)];
         league3 |= trophyf.length;
         network2 = 21 > league3;
      }
          let unread8 = String.fromCharCode(115,116,114,101,97,109,105,110,103,95,99,95,55,49,0);
          let playlistt = false;
          let live3 = 0;
         humidityl.push(unread8.length - 3);
         unread8 += `${((playlistt ? 4 : 3) >> (Math.min(Math.abs(live3), 2)))}`;
         playlistt = live3 > 94;
         humidityl.push(sans_.length / (Math.max(3, 7)));
          let transferD = true;
          let cleard = 3;
          let updatesg = false;
         clearR += `${cleard + 3}`;
         transferD = updatesg;
         cleard >>= Math.min(Math.abs(3), 5);
      backwardo <<= Math.min(1, Math.abs(3));
   }
       let questn = 3.0;
       let frame_sd = String.fromCharCode(114,101,116,114,105,101,115,95,52,95,51,50,0);
       let relatedE: Map<any, any> = new Map([[String.fromCharCode(115,95,53,53,95,106,101,114,114,111,114,0),280], [String.fromCharCode(111,95,57,54,95,98,108,117,114,0),427], [String.fromCharCode(112,95,49,48,95,116,111,114,103,98,0),336]]);
          let modalj: Map<any, any> = new Map([[String.fromCharCode(99,111,110,116,101,110,116,105,111,110,95,120,95,53,48,0),120], [String.fromCharCode(102,111,114,101,105,103,110,95,120,95,53,53,0),876], [String.fromCharCode(114,101,116,105,110,97,95,55,95,57,55,0),805]]);
          let star8 = true;
          let acceptedp = 0.0;
         frame_sd = `${2 % (Math.max(7, modalj.size))}`;
         modalj.set(`${acceptedp}`, 3 / (Math.max(parseInt(`${acceptedp}`), 10)));
         star8 = !star8;
      if (questn < relatedE.size) {
         questn += 1;
      }
         questn /= Math.max(1, frame_sd.length);
      let pauseW = frame_sd == String.fromCharCode(114,55,118,112,95,119,0);
      do {
         frame_sd = `${(frame_sd == String.fromCharCode(57,0) ? frame_sd.length : relatedE.size)}`;
         if (pauseW) {
            break;
         }
      } while ((3 < (parseInt(`${questn}`) * 5) || (frame_sd.length * questn) < 4.76) && pauseW);
      let usernameq = 7739580 >= relatedE.size;
      do {
         relatedE = new Map([[`${relatedE.size}`, frame_sd.length]]);
         if (usernameq) {
            break;
         }
      } while ((frame_sd.includes(`${relatedE.size}`)) && usernameq);
      if (5 == (2 - parseInt(`${questn}`)) || (2 | frame_sd.length) == 1) {
          let referrerC = 2;
          let xvodF = String.fromCharCode(111,95,49,57,95,99,121,117,118,0);
          let favoriteP: Array<any> = [101, 645, 927];
          let combinedH = false;
         questn *= (xvodF.length << (Math.min(3, Math.abs((combinedH ? 1 : 3)))));
         referrerC >>= Math.min(1, Math.abs(favoriteP.length ^ referrerC));
         xvodF += `${referrerC}`;
         favoriteP.push(1 >> (Math.min(Math.abs(referrerC), 1)));
         combinedH = 43 > referrerC;
      }
         frame_sd = "2";
         relatedE = new Map([[`${relatedE.size}`, (String.fromCharCode(71,0) == frame_sd ? relatedE.size : frame_sd.length)]]);
         questn -= frame_sd.length;
      thumbnailc.push(empty2.length + frame_sd.length);
      expiredG = [topicu.size];
   let topick = 8480253 >= expiredG.length;
   do {
      expiredG.push(parseInt(`${bellF}`));
      if (topick) {
         break;
      }
   } while (topick && ((3 | backwardo) <= 1));
          if (prevIsRefreshing) {

   let backgroundm = 8744362.0 <= favorite4;
   do {
      favorite4 -= component7.length + topicu.size;
      if (backgroundm) {
         break;
      }
   } while (backgroundm && (5.6 == (2.91 - favorite4)));
      bellF /= Math.max(parseFloat(`${3}`), 1);
   if (!mailx.includes(thumbnailc.length)) {
      thumbnailc = [component7.length];
   }
   let dialog2 = empty2 == String.fromCharCode(102,118,110,0);
   do {
      empty2 = `${parseInt(`${favorite4}`)}`;
      if (dialog2) {
         break;
      }
   } while (((5 >> (Math.min(3, Math.abs(thailandZ.size)))) > 5 || (empty2.length >> (Math.min(2, Math.abs(thailandZ.size)))) > 5) && dialog2);
            return prevIsRefreshing; 
          } else {

      component7.push(1);
   while (3 == (backwardo ^ topicu.size) && 4 == (3 ^ topicu.size)) {
       let indexD = String.fromCharCode(107,95,49,50,95,115,116,117,98,98,101,100,0);
       let field7 = 1.0;
      let orientationt = field7 >= 8964448.0;
      do {
         field7 -= 2 >> (Math.min(2, Math.abs(parseInt(`${field7}`))));
         if (orientationt) {
            break;
         }
      } while (orientationt && (1.66 > field7));
          let borderlessY: Map<any, any> = new Map([[String.fromCharCode(102,95,53,48,95,115,121,110,99,104,114,111,110,105,122,101,97,98,108,101,0),774], [String.fromCharCode(99,111,112,105,101,115,95,117,95,52,51,0),276]]);
         indexD = `${indexD.length - 2}`;
         borderlessY.set(`${borderlessY.size}`, borderlessY.size ^ borderlessY.size);
         indexD = `${(String.fromCharCode(56,0) == indexD ? indexD.length : parseInt(`${field7}`))}`;
         field7 += 3;
      if (5 <= (indexD.length + 3)) {
          let layout7 = true;
          let fullI: Map<any, any> = new Map([[String.fromCharCode(101,120,116,110,95,120,95,52,49,0),542], [String.fromCharCode(112,117,112,117,112,95,100,95,55,52,0),323]]);
          let pressurez = String.fromCharCode(102,95,50,52,95,99,111,118,97,114,105,97,110,99,101,0);
         field7 += pressurez.length - indexD.length;
         layout7 = null != fullI.get(`${layout7}`);
         fullI = new Map([[`${fullI.size}`, (1 | (layout7 ? 2 : 5))]]);
         pressurez = `${fullI.size}`;
      }
         indexD += "2";
      topicu.set(`${backwardo}`, 2 & parseInt(`${field7}`));
      break;
   }
       let savee: Array<any> = [String.fromCharCode(99,111,111,107,105,101,95,98,95,49,48,48,0), String.fromCharCode(117,95,51,95,115,101,110,100,109,115,103,0), String.fromCharCode(109,95,57,56,95,105,109,112,111,114,116,101,114,0)];
       let c_imaget = 5.0;
       let searchbarl = String.fromCharCode(110,111,98,111,100,121,95,48,95,54,56,0);
       let liner = String.fromCharCode(115,117,112,101,114,120,115,97,105,95,103,95,54,53,0);
       let stationsY = String.fromCharCode(122,95,56,95,111,102,102,115,101,116,115,105,122,101,0);
       let pointJ = String.fromCharCode(116,95,57,48,95,115,117,109,120,0);
          let updatesi = 2;
          let cross9 = String.fromCharCode(119,95,53,54,95,100,114,97,119,108,105,110,101,0);
         savee = [updatesi / (Math.max(liner.length, 4))];
         updatesi %= Math.max(4, cross9.length);
         cross9 += `${cross9.length >> (Math.min(3, cross9.length))}`;
         stationsY += `${(liner == String.fromCharCode(83,0) ? stationsY.length : liner.length)}`;
      if ((3 + savee.length) > 1) {
         savee = [3 + stationsY.length];
      }
      while (savee.includes(c_imaget)) {
         savee = [(String.fromCharCode(98,0) == stationsY ? liner.length : stationsY.length)];
         break;
      }
          let crown_: Array<any> = [893, 209, 772];
          let controlsn = String.fromCharCode(99,97,114,100,115,95,105,95,51,50,0);
          let sportss: Array<any> = [377, 415, 645];
         pointJ = `${(String.fromCharCode(80,0) == searchbarl ? searchbarl.length : parseInt(`${c_imaget}`))}`;
         crown_ = [crown_.length];
         controlsn = `${2 % (Math.max(6, sportss.length))}`;
         sportss = [controlsn.length ^ sportss.length];
      let eventa = 8297816 >= stationsY.length;
      do {
         stationsY += `${pointJ.length << (Math.min(Math.abs(3), 4))}`;
         if (eventa) {
            break;
         }
      } while ((!pointJ.includes(stationsY)) && eventa);
       let long_rgE = 5.0;
       let update_jxv = 1.0;
      component7 = [3 + backwardo];
   while (2.79 > (favorite4 / 2.33) || 1 > (parseInt(`${favorite4}`) / (Math.max(component7.length, 3)))) {
       let downloaderP: Map<any, any> = new Map([[String.fromCharCode(114,101,99,104,101,99,107,95,114,95,49,0),false ], [String.fromCharCode(122,95,54,50,95,114,100,109,117,108,116,0),true ]]);
         downloaderP = new Map([[`${downloaderP.size}`, downloaderP.size]]);
      while (Array.from(downloaderP.keys()).includes(`${downloaderP.size}`)) {
          let checkboxb = 0;
          let borderlessh = 2.0;
         downloaderP = new Map([[`${downloaderP.size}`, downloaderP.size]]);
         checkboxb -= parseInt(`${borderlessh}`) & 1;
         borderlessh -= parseFloat(`${2 % (Math.max(9, checkboxb))}`);
         break;
      }
       let reportS = 0.0;
       let plus6 = 4.0;
      favorite4 -= (empty2 == String.fromCharCode(68,0) ? downloaderP.size : empty2.length);
      break;
   }
            return true; 
          }
        });

   for (let m = 0; m < 2; m++) {
      topicu = new Map([[`${favorite4}`, fastm.length << (Math.min(2, Math.abs(parseInt(`${favorite4}`))))]]);
   }
      favorite4 -= (fastm == String.fromCharCode(68,0) ? fastm.length : component7.length);
      expiredG.push(1 & backwardo);
   while ((thailandZ.size - 3) > 1) {
       let constantsj = String.fromCharCode(108,111,99,97,108,105,122,101,100,95,57,95,49,49,0);
       let bufferc = 0;
       let eventu = String.fromCharCode(97,114,103,117,109,101,110,116,95,53,95,56,53,0);
         constantsj = `${bufferc << (Math.min(Math.abs(2), 4))}`;
          let popupY: Map<any, any> = new Map([[String.fromCharCode(111,118,101,114,108,97,112,115,95,122,95,57,48,0),464], [String.fromCharCode(107,95,57,55,95,98,111,114,105,110,103,115,115,108,0),451]]);
          let listx = 4.0;
         bufferc <<= Math.min(Math.abs(bufferc), 3);
         popupY.set(`${listx}`, popupY.size | parseInt(`${listx}`));
      if (2 >= (constantsj.length ^ 5) || 4 >= (constantsj.length ^ 5)) {
         constantsj += `${bufferc / (Math.max(2, eventu.length))}`;
      }
          let promotiono = 2;
          let verticale: Map<any, any> = new Map([[String.fromCharCode(97,115,97,110,95,122,95,53,51,0),870], [String.fromCharCode(109,95,49,48,95,99,108,105,112,115,0),163], [String.fromCharCode(102,95,54,95,119,101,108,108,98,101,104,97,118,101,100,0),717]]);
          let injuryW = false;
         constantsj = "1";
         promotiono <<= Math.min(1, Math.abs(3));
         verticale = new Map([[`${verticale.size}`, 2]]);
         injuryW = null == verticale.get(`${injuryW}`);
         bufferc -= eventu.length;
       let tailv = true;
       let dropdownA = true;
      for (let j = 0; j < 2; j++) {
         constantsj += `${constantsj.length & eventu.length}`;
      }
      while (3 <= eventu.length) {
         tailv = String.fromCharCode(89,0) == constantsj;
         break;
      }
      let placemento = bufferc <= 8312246;
      do {
          let albumZ = String.fromCharCode(105,95,57,50,95,109,111,118,105,110,103,0);
          let favoriteu = String.fromCharCode(110,95,53,56,95,109,97,120,0);
          let flyerk = String.fromCharCode(115,117,98,106,111,117,114,110,97,108,95,119,95,50,57,0);
         bufferc *= (2 - (tailv ? 4 : 1));
         albumZ = "3";
         favoriteu = `${flyerk.length ^ favoriteu.length}`;
         flyerk = `${favoriteu.length}`;
         if (placemento) {
            break;
         }
      } while (placemento && (!dropdownA));
      topicu.set(constantsj, 3);
      break;
   }
        await handleRefresh(navId, true);

       let stationA: Map<any, any> = new Map([[String.fromCharCode(103,95,53,57,95,97,110,116,105,97,108,105,97,115,0),false ], [String.fromCharCode(121,95,50,52,95,97,117,100,105,111,115,101,114,118,105,99,101,116,121,112,101,0),false ], [String.fromCharCode(107,101,121,108,101,110,95,57,95,50,52,0),false ]]);
       let backward4 = String.fromCharCode(97,95,49,55,95,116,99,109,105,0);
          let searchbarD: Map<any, any> = new Map([[String.fromCharCode(109,112,101,103,100,97,116,97,95,105,95,51,50,0),728], [String.fromCharCode(116,114,97,110,115,112,111,114,116,95,114,95,51,53,0),337]]);
          let loadingv = 5;
          let controls = String.fromCharCode(99,114,101,97,116,105,118,101,95,54,95,49,56,0);
         stationA = new Map([[`${loadingv}`, 3 ^ controls.length]]);
         searchbarD.set(`${searchbarD.size}`, searchbarD.size);
         loadingv |= searchbarD.size * 1;
       let long_lS: Map<any, any> = new Map([[String.fromCharCode(110,95,49,95,112,117,98,108,105,115,104,101,114,115,0),502], [String.fromCharCode(101,95,57,53,95,115,116,114,102,117,110,99,0),893], [String.fromCharCode(114,111,108,108,105,110,103,95,48,95,55,48,0),161]]);
       let thailandf: Map<any, any> = new Map([[String.fromCharCode(112,114,101,115,101,110,116,95,122,95,56,54,0),675], [String.fromCharCode(116,95,48,95,109,112,108,97,109,101,0),533], [String.fromCharCode(102,105,111,95,109,95,57,57,0),547]]);
       let flyerA: Map<any, any> = new Map([[String.fromCharCode(99,111,111,107,105,101,95,52,95,56,48,0),85], [String.fromCharCode(115,116,105,99,107,101,114,115,101,116,95,109,95,54,56,0),627], [String.fromCharCode(105,110,118,111,108,118,101,100,95,122,95,49,54,0),368]]);
      for (let f = 0; f < 1; f++) {
         flyerA.set(`${backward4}`, long_lS.size);
      }
          let minivodG = String.fromCharCode(112,95,49,52,95,102,97,100,101,0);
          let roomG = false;
          let homeg = String.fromCharCode(103,95,55,52,95,97,97,99,100,101,99,0);
         backward4 = `${homeg.length / (Math.max(6, minivodG.length))}`;
         minivodG = `${((roomG ? 2 : 4))}`;
         flyerA.set(`${stationA.size}`, flyerA.size);
      expiredG = [2 - expiredG.length];
   let telegramY = fastm == String.fromCharCode(102,57,100,120,53,54,50,114,101,97,0);
   do {
       let short_0dW = 1.0;
       let kicks = String.fromCharCode(115,95,56,95,119,104,105,108,101,0);
       let tailW: Array<any> = [342, 204];
       let appsH = String.fromCharCode(100,114,111,112,112,101,114,95,111,95,55,0);
       let changen: Array<any> = [753, 636, 842];
          let successj = String.fromCharCode(106,95,56,53,95,115,116,114,105,99,109,112,0);
          let serviceL: Map<any, any> = new Map([[String.fromCharCode(99,111,109,112,114,101,115,115,95,116,95,49,54,0),false ], [String.fromCharCode(102,95,56,95,105,110,105,116,105,97,108,105,122,101,114,0),true ], [String.fromCharCode(108,111,116,116,105,101,108,111,97,100,101,114,95,106,95,57,0),false ]]);
          let goalv = String.fromCharCode(99,95,51,53,95,100,97,116,97,114,0);
         kicks += `${2 & changen.length}`;
         successj = `${successj.length ^ serviceL.size}`;
         serviceL.set(`${goalv}`, serviceL.size + goalv.length);
         tailW.push(parseInt(`${short_0dW}`));
      if (3 >= (parseInt(`${short_0dW}`) / (Math.max(changen.length, 10)))) {
         changen = [(kicks == String.fromCharCode(104,0) ? tailW.length : kicks.length)];
      }
      for (let v = 0; v < 3; v++) {
         kicks += `${parseInt(`${short_0dW}`)}`;
      }
         appsH = `${parseInt(`${short_0dW}`)}`;
          let specu = String.fromCharCode(110,95,55,51,95,118,105,100,115,116,97,98,117,116,105,108,115,0);
          let containerw = String.fromCharCode(104,95,57,95,114,101,99,111,103,110,105,122,101,0);
          let termsJ = 5.0;
         tailW = [parseInt(`${termsJ}`)];
         specu += `${containerw.length}`;
         containerw = `${containerw.length - 3}`;
         termsJ *= parseFloat(`${3}`);
       let t_imageQ = 1.0;
       let eacte = 3.0;
         changen.push(2);
         short_0dW -= parseFloat(`${parseInt(`${eacte}`)}`);
         changen = [parseInt(`${short_0dW}`)];
      while (3.64 <= (parseFloat(`${changen.length}`) + t_imageQ)) {
          let sheetq: Array<any> = [String.fromCharCode(106,95,50,49,95,103,111,116,111,0), String.fromCharCode(115,105,103,112,97,115,115,95,109,95,53,56,0)];
          let long_4qK: Array<any> = [649, 465, 384];
          let bingT = String.fromCharCode(113,95,52,52,95,111,112,97,99,105,116,121,0);
          let redirecti = 3;
         t_imageQ -= parseFloat(`${parseInt(`${t_imageQ}`)}`);
         sheetq = [2];
         long_4qK.push(bingT.length << (Math.min(Math.abs(3), 4)));
         bingT = `${long_4qK.length + 1}`;
         redirecti %= Math.max(3, sheetq.length);
         break;
      }
         eacte *= parseFloat(`${3}`);
      while (1.13 < (1.59 - t_imageQ) || (1.59 - t_imageQ) < 4.69) {
          let volume_: Map<any, any> = new Map([[String.fromCharCode(99,95,49,56,95,97,118,99,111,100,101,99,0),String.fromCharCode(122,95,53,57,95,102,105,110,103,101,114,112,114,105,110,116,0)], [String.fromCharCode(102,97,115,116,101,115,116,95,112,95,54,49,0),String.fromCharCode(120,95,54,56,95,98,105,116,101,0)]]);
         tailW.push(1 | tailW.length);
         volume_ = new Map([[`${volume_.size}`, volume_.size * volume_.size]]);
         break;
      }
      let vignette0 = 9486677 >= changen.length;
      do {
          let volumeL = String.fromCharCode(100,95,48,95,110,105,109,97,116,101,100,0);
          let arrowP = String.fromCharCode(115,117,98,102,105,101,108,100,115,95,117,95,54,51,0);
          let starl = 4;
          let flyerc = 5.0;
         changen = [parseInt(`${t_imageQ}`)];
         volumeL = `${arrowP.length}`;
         arrowP = "2";
         starl += (volumeL == String.fromCharCode(76,0) ? arrowP.length : volumeL.length);
         flyerc *= starl % (Math.max(parseInt(`${flyerc}`), 1));
         if (vignette0) {
            break;
         }
      } while (vignette0 && (kicks.length > changen.length));
       let scoreC = String.fromCharCode(99,97,112,116,117,114,101,95,109,95,55,53,0);
      fastm = `${appsH.length | 3}`;
      if (telegramY) {
         break;
      }
   } while ((thailandZ.size == fastm.length) && telegramY);
       let editb: Array<any> = [48, 881, 636];
       let showV = String.fromCharCode(116,95,51,52,95,114,97,105,115,101,0);
       let time_5O = true;
         showV += "3";
          let rightx = String.fromCharCode(114,101,99,111,118,101,114,101,100,95,99,95,55,50,0);
         editb = [((time_5O ? 4 : 4) | rightx.length)];
          let canvasU = true;
          let downloadingZ = 3;
         time_5O = downloadingZ > 13 && !canvasU;
      while (showV.length <= 4) {
          let confirmatione = 0.0;
          let grayM = 0;
          let mores = 4;
         time_5O = (grayM + confirmatione) < 78;
         confirmatione -= parseFloat(`${mores}`);
         grayM /= Math.max(2, mores);
         break;
      }
         editb = [(1 / (Math.max(6, (time_5O ? 3 : 5))))];
      for (let j = 0; j < 1; j++) {
         time_5O = editb.length < 53;
      }
          let muted3 = 0.0;
          let sharedu = 4.0;
         showV += "3";
         muted3 -= parseFloat(`${parseInt(`${sharedu}`)}`);
         sharedu /= Math.max(parseFloat(`${3}`), 5);
          let whistlex: Map<any, any> = new Map([[String.fromCharCode(106,95,53,53,95,112,114,105,109,97,108,105,116,121,0),341], [String.fromCharCode(102,105,108,116,95,111,95,57,48,0),829]]);
         time_5O = editb.length > showV.length;
         whistlex = new Map([[`${whistlex.size}`, whistlex.size >> (Math.min(Math.abs(whistlex.size), 4))]]);
         showV += `${editb.length + 3}`;
      empty2 = `${empty2.length}`;
   while ((component7.length << (Math.min(Math.abs(1), 3))) >= 4 || (1 << (Math.min(2, component7.length))) >= 2) {
       let memberq: Map<any, any> = new Map([[String.fromCharCode(103,95,53,50,95,115,111,110,111,0),String.fromCharCode(99,98,114,116,95,101,95,49,0)], [String.fromCharCode(99,111,110,116,114,111,108,101,114,115,95,53,95,52,0),String.fromCharCode(120,95,54,51,95,98,108,117,114,0)]]);
      if (!Array.from(memberq.keys()).includes(`${memberq.size}`)) {
          let stationse = false;
         memberq = new Map([[`${memberq.size}`, (memberq.size / (Math.max(5, (stationse ? 4 : 3))))]]);
      }
       let update_fL: Map<any, any> = new Map([[String.fromCharCode(98,105,109,97,112,95,114,95,55,49,0),String.fromCharCode(100,95,57,55,95,103,101,116,110,109,115,101,100,101,99,0)], [String.fromCharCode(114,95,55,55,95,112,108,97,99,101,109,97,114,107,115,0),String.fromCharCode(103,108,105,116,99,104,95,48,95,48,0)]]);
      while ((1 - update_fL.size) >= 5) {
          let middleJ = 5.0;
         update_fL.set(`${middleJ}`, 1 / (Math.max(10, update_fL.size)));
         break;
      }
      component7.push((thailandZ.size % (Math.max(9, (disconnectedi ? 5 : 5)))));
      break;
   }
        setIsRefreshing(false);
      }
    };
    
    const unsubscribe = navigation.addListener("tabPress", handleTabPress);
    
    return () => unsubscribe();
  }, [isFocused, navId, handleRefresh]);

  const handleRejectEighteenPlus = useCallback(() => {
       let inactived = 0.0;
    let otherQ: Array<any> = [595, 183];
    let edits = String.fromCharCode(100,99,116,99,111,101,102,95,116,95,51,51,0);
    let invitel = String.fromCharCode(97,108,103,111,114,105,116,104,109,95,109,95,50,56,0);
    let r_unlockZ = false;
    let eventu: Array<any> = [754, 698];
    let stylew: Map<any, any> = new Map([[String.fromCharCode(115,111,108,105,100,99,111,108,111,114,95,114,95,50,55,0),String.fromCharCode(99,95,51,50,95,116,97,114,103,101,116,0)], [String.fromCharCode(103,95,53,56,95,111,116,104,0),String.fromCharCode(114,101,99,111,103,110,105,116,105,111,110,95,108,95,51,50,0)], [String.fromCharCode(115,116,105,99,107,101,114,101,100,95,105,95,53,51,0),String.fromCharCode(117,95,51,51,95,114,110,110,111,105,115,101,0)]]);
    let scheduleF: Map<any, any> = new Map([[String.fromCharCode(104,95,50,48,95,97,110,100,108,101,0),239], [String.fromCharCode(115,95,53,48,95,104,97,110,100,108,105,110,103,0),481]]);
    let modelsJ = String.fromCharCode(116,95,52,55,95,116,104,101,109,101,100,0);
    let righth = false;
    let w_center6 = String.fromCharCode(115,95,53,48,95,102,114,101,101,100,117,109,112,98,117,102,102,101,114,0);
    let successG = String.fromCharCode(121,95,53,56,95,110,97,116,117,114,97,108,0);
    let langkeyL = 0.0;
    let uploadG = 5;
    let modelsv: Map<any, any> = new Map([[String.fromCharCode(106,95,55,51,0),848], [String.fromCharCode(113,117,97,110,116,105,108,101,95,122,95,54,57,0),141], [String.fromCharCode(112,114,101,101,109,112,116,105,118,101,95,109,95,56,57,0),337]]);
   while (modelsJ.includes(`${otherQ.length}`)) {
       let aboutp = 4;
       let twitterb = 5.0;
         twitterb -= parseFloat(`${parseInt(`${twitterb}`)}`);
       let constantsL = false;
       let specN = true;
      while (5.3 == (twitterb / (Math.max(4.94, 2))) || constantsL) {
         twitterb /= Math.max(2, parseFloat(`${aboutp}`));
         break;
      }
      let ewardedS = constantsL ? !constantsL : constantsL;
      do {
          let success7 = 5;
          let ping6 = String.fromCharCode(118,109,115,108,95,111,95,55,56,0);
          let rewindq: Array<any> = [421, 356];
          let spec2 = String.fromCharCode(116,105,110,116,101,100,95,57,95,57,54,0);
          let register_0dC = String.fromCharCode(116,104,97,116,95,104,95,49,48,48,0);
         constantsL = (ping6.length >> (Math.min(spec2.length, 3))) >= 73;
         success7 |= 2 + success7;
         ping6 = `${success7 + 2}`;
         rewindq = [3];
         spec2 += `${register_0dC.length}`;
         register_0dC = `${register_0dC.length | success7}`;
         if (ewardedS) {
            break;
         }
      } while (ewardedS && (!specN));
       let injuryk = String.fromCharCode(101,95,57,52,95,99,117,101,112,111,105,110,116,0);
          let downQ = String.fromCharCode(104,95,55,56,0);
         constantsL = (((!constantsL ? 98 : injuryk.length) + injuryk.length) < 98);
         downQ += "1";
      modelsJ = `${w_center6.length}`;
      break;
   }
   let cleari = righth ? !righth : righth;
   do {
      righth = 32 > scheduleF.size;
      if (cleari) {
         break;
      }
   } while ((4 < edits.length) && cleari);
      w_center6 = `${((righth ? 1 : 1))}`;
   while (3.33 >= inactived) {
      inactived += 3;
      break;
   }
      righth = invitel == modelsJ;

    const found = navOptions?.find(
      (e) => e.name === screenState.lastSeenNavName
    );

      scheduleF.set(modelsJ, scheduleF.size);
       let buttone: Array<any> = [741, 754];
       let more6: Map<any, any> = new Map([[String.fromCharCode(118,95,57,49,95,112,114,101,116,99,104,0),6], [String.fromCharCode(109,101,97,115,117,114,101,95,57,95,56,52,0),522]]);
         more6.set(`${buttone.length}`, 1);
      if (!Array.from(more6.keys()).includes(`${buttone.length}`)) {
          let q_playerS = String.fromCharCode(99,105,110,101,109,97,95,98,95,54,52,0);
          let placement6 = 4.0;
          let anythinkK = String.fromCharCode(116,95,57,57,95,110,97,109,101,100,0);
          let twitter0 = 0.0;
         more6.set(`${placement6}`, parseInt(`${placement6}`) << (Math.min(q_playerS.length, 3)));
         q_playerS += `${2 / (Math.max(4, parseInt(`${twitter0}`)))}`;
         anythinkK = `${parseInt(`${twitter0}`) * 2}`;
      }
          let shrinky = String.fromCharCode(98,98,117,102,95,101,95,57,49,0);
          let bingF = 4.0;
         buttone.push(more6.size);
         shrinky = `${parseInt(`${bingF}`)}`;
         bingF /= Math.max(4, parseFloat(`${shrinky.length}`));
         more6.set(`${buttone.length}`, 2 - more6.size);
      if (Array.from(more6.keys()).includes(`${buttone.length}`)) {
         buttone = [more6.size * 1];
      }
      let flyere = more6.size <= 6218885;
      do {
         more6.set(`${buttone.length}`, more6.size);
         if (flyere) {
            break;
         }
      } while (flyere && (buttone.length > more6.size));
      invitel = `${eventu.length % 3}`;
   for (let c = 0; c < 2; c++) {
      r_unlockZ = otherQ.length >= 32;
   }
      scheduleF.set(`${r_unlockZ}`, ((r_unlockZ ? 1 : 1) ^ eventu.length));
       let overD = String.fromCharCode(114,95,57,53,95,106,109,108,105,115,116,0);
       let moduleh = String.fromCharCode(109,100,97,121,95,106,95,49,55,0);
      let gestureK = moduleh.length >= 8534517;
      do {
          let tumbnailX = 1;
          let photoZ = true;
          let notificationC = String.fromCharCode(116,95,50,49,0);
          let analyticsg = 4.0;
          let countryb = String.fromCharCode(102,100,99,116,95,103,95,49,51,0);
         moduleh = `${notificationC.length * 3}`;
         tumbnailX %= Math.max(countryb.length | 2, 1);
         photoZ = !countryb.endsWith(`${analyticsg}`);
         notificationC += `${tumbnailX >> (Math.min(Math.abs(1), 1))}`;
         analyticsg += parseFloat(`${3}`);
         if (gestureK) {
            break;
         }
      } while (gestureK && (5 == moduleh.length));
         moduleh = `${moduleh.length + overD.length}`;
      let gesturesp = String.fromCharCode(104,111,55,0) == overD;
      do {
         overD += `${moduleh.length}`;
         if (gesturesp) {
            break;
         }
      } while (gesturesp && (!overD.endsWith(moduleh)));
         overD += `${overD.length % (Math.max(moduleh.length, 3))}`;
       let interstitialh = String.fromCharCode(115,112,97,119,110,95,55,95,53,53,0);
      while (moduleh.length >= overD.length) {
          let send3: Map<any, any> = new Map([[String.fromCharCode(113,95,54,56,95,111,98,115,101,114,118,101,114,115,0),102], [String.fromCharCode(102,95,55,56,95,100,97,114,119,105,110,0),814], [String.fromCharCode(108,95,54,54,95,114,101,115,105,103,110,115,0),786]]);
          let activeL = String.fromCharCode(111,114,105,95,54,95,57,57,0);
          let sourcex: Map<any, any> = new Map([[String.fromCharCode(101,95,57,49,95,112,97,114,116,105,99,108,101,115,0),String.fromCharCode(117,115,101,100,95,48,95,51,48,0)], [String.fromCharCode(115,112,97,119,110,97,98,108,101,95,104,95,49,50,0),String.fromCharCode(114,95,51,57,95,100,111,110,97,116,101,0)]]);
         overD += `${sourcex.size}`;
         send3.set(`${activeL}`, send3.size << (Math.min(Math.abs(3), 2)));
         activeL = `${activeL.length | 3}`;
         sourcex.set(`${activeL}`, activeL.length);
         break;
      }
      langkeyL += w_center6.length;

    if (found) {

      eventu = [2 << (Math.min(2, invitel.length))];
   if (1 > w_center6.length) {
      w_center6 += `${((righth ? 1 : 2) ^ eventu.length)}`;
   }
   for (let h = 0; h < 3; h++) {
      modelsJ += `${parseInt(`${inactived}`)}`;
   }
      langkeyL *= 3 * eventu.length;
      langkeyL += (String.fromCharCode(70,0) == successG ? successG.length : invitel.length);
      navigation.navigate("首页", {
        screen: screenState.lastSeenNavName,
      });

   let single3 = 5289821 <= eventu.length;
   do {
      eventu = [(String.fromCharCode(107,0) == successG ? successG.length : edits.length)];
      if (single3) {
         break;
      }
   } while ((5 < (4 | modelsJ.length)) && single3);
   while (scheduleF.size > modelsJ.length) {
      modelsJ = `${modelsJ.length}`;
      break;
   }
   while (otherQ.length == successG.length) {
      otherQ.push(3 * parseInt(`${inactived}`));
      break;
   }
   while (scheduleF.size <= successG.length) {
       let ajaxP = String.fromCharCode(117,110,119,105,110,100,95,108,95,50,48,0);
       let weibon = String.fromCharCode(105,95,53,54,95,118,97,108,117,101,115,0);
       let faviconJ: Array<any> = [388, 598];
       let agreementa = false;
      while (!agreementa) {
         agreementa = faviconJ.includes(agreementa);
         break;
      }
      while (4 > (faviconJ.length | 5)) {
         weibon += `${weibon.length}`;
         break;
      }
      if (1 == weibon.length) {
         weibon = `${weibon.length * faviconJ.length}`;
      }
          let maths = String.fromCharCode(100,95,52,95,115,95,54,56,0);
         ajaxP += "3";
         maths = `${maths.length}`;
          let selectionB = true;
          let filed0 = String.fromCharCode(117,110,97,108,105,103,110,101,100,95,112,95,56,52,0);
          let singleI = String.fromCharCode(98,95,56,57,95,101,110,99,111,100,97,98,108,101,115,0);
         ajaxP += `${faviconJ.length >> (Math.min(Math.abs(3), 2))}`;
         selectionB = String.fromCharCode(81,0) == singleI;
         filed0 += `${filed0.length ^ 3}`;
         singleI = `${(filed0 == String.fromCharCode(66,0) ? singleI.length : filed0.length)}`;
      let signinupy = faviconJ.length <= 8875137;
      do {
          let chatw = String.fromCharCode(121,95,52,48,95,99,111,112,121,114,105,103,104,116,0);
          let switch_oW = 4.0;
          let time_wp = String.fromCharCode(98,95,49,57,95,116,114,97,105,108,105,110,103,0);
          let episodeF = String.fromCharCode(105,109,97,103,101,114,111,116,97,116,101,95,103,95,54,48,0);
          let analytics7 = true;
         faviconJ.push(faviconJ.length & parseInt(`${switch_oW}`));
         chatw = `${((analytics7 ? 4 : 3))}`;
         switch_oW /= Math.max((parseFloat(`${(analytics7 ? 1 : 2)}`)), 4);
         time_wp += `${((analytics7 ? 1 : 2) % (Math.max(episodeF.length, 7)))}`;
         episodeF = `${time_wp.length + chatw.length}`;
         if (signinupy) {
            break;
         }
      } while ((2 > (3 ^ weibon.length) && 2 > (weibon.length ^ 3)) && signinupy);
       let username0 = String.fromCharCode(101,110,99,97,112,95,103,95,54,54,0);
         agreementa = (93 > ((!agreementa ? username0.length : 93) * username0.length));
      while (username0.length == 1 || weibon == String.fromCharCode(57,0)) {
         weibon = `${((agreementa ? 4 : 1) % 2)}`;
         break;
      }
      if (username0.length > 5) {
         agreementa = !agreementa;
      }
         ajaxP += `${(weibon == String.fromCharCode(78,0) ? weibon.length : username0.length)}`;
          let annerT: Map<any, any> = new Map([[String.fromCharCode(111,117,116,108,105,110,101,95,110,95,53,52,0),114], [String.fromCharCode(117,95,51,53,95,112,107,116,99,112,121,0),900]]);
          let tailU = String.fromCharCode(117,114,112,111,115,101,95,120,95,57,56,0);
         ajaxP += `${(tailU == String.fromCharCode(114,0) ? tailU.length : ajaxP.length)}`;
         annerT = new Map([[`${annerT.size}`, annerT.size]]);
      successG = `${(String.fromCharCode(105,0) == modelsJ ? modelsJ.length : parseInt(`${inactived}`))}`;
      break;
   }
      r_unlockZ = (eventu.length % (Math.max(invitel.length, 4))) > 32;
      setNavId(found.id);
    }
  }, [navOptions, screenState.lastSeenNavName]);

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
                navId={index}
                tabName={navOptions !== undefined ? navOptions[index].name : ""}
                onRefresh={handleRefresh}
                onLoad={handleShowLoading}
                refreshProp={isRefreshing}
                isTabFocus={navId === index}
              />
            ) : (
              <>
                <CatagoryHome
                  vodCarouselRes={item.data}
                  navId={index}
                  tabName={
                    navOptions !== undefined ? navOptions[index].name : ""
                  }
                  onRefresh={handleRefresh}
                  refreshProp={isRefreshing}
                  handleRejectEighteenPlus={handleRejectEighteenPlus}
                  isTabFocus={navId === index}
                />
              </>
            ))}
        </>
      );
    },
    [navOptions, navId, screenState.lastSeenNavName]
  );





 const { setNavbarHeight, reloadBanner } = useContext(AdsBannerContext); 
//   useEffect(() => {
    
//    setTimeout(
//      () => {
       
     
//      },
//    1000
//    );
//  }, []);

  const isSamsungDevice = DeviceInfo.getBrand() === "samsung";
  useEffect(() => {
    

   setTimeout(
      () => {
        
        setNavbarHeight(bottomTabHeight);
        reloadBanner()
      },
     100
    );



    setTimeout(
      () => {
        
        setNavbarHeight(bottomTabHeight);
        reloadBanner()
      },
     1000
    );
  }, [bottomTabHeight, screenState.interstitialShow]);

  const [deviceName, setDeviceName] = useState("");

  DeviceInfo.getDeviceName().then((d) => {
    setDeviceName(d.toLowerCase());
  });

  useEffect(() => {
    Dimensions.addEventListener("change", (e) => {
      const includesKeywords = [
        "flip",
        "fold",
        "mate x3",
        "mate xs",
      ].some((keyword) => deviceName.includes(keyword));
      if (DeviceInfo.isTablet() || includesKeywords) {
        reloadBanner();
      }
    });
  }, []);

  
  useEffect(() => {
    if (navOptions !== undefined && navOptions.length > 0) {
      umb_center_carousel.homeTabViewsAnalytics({
        tab_id: navOptions[0].id.toString(),
        tab_name: navOptions[0].name,
      });
    }
  }, [navOptions]);

  useEffect(() => {
    if (navOptions !== undefined && navOptions.length > 0) {
      const idx = navOptions?.findIndex((e) => e.id === navId);
      umb_center_carousel.homeTabViewsAnalytics({
        tab_id: navOptions[idx].id.toString(),
        tab_name: navOptions[idx].name,
      });
    }
  }, [navId]);

  useEffect(() => {
    checkSplash();
  }, []);

  const checkSplash = async () => {
       let untickD = 5.0;
    let moonC = String.fromCharCode(114,101,102,117,110,100,95,114,95,57,54,0);
    let contextb = 1.0;
    let acceptedX: Array<any> = [377, 494];
    let sellY = String.fromCharCode(105,95,53,55,95,117,110,102,101,116,99,104,0);
    let hongkong9 = 1.0;
    let signinup5 = true;
    let default_wwW = 4;
    let soundx: Map<any, any> = new Map([[String.fromCharCode(118,95,56,56,95,115,105,110,103,108,101,0),String.fromCharCode(116,95,51,53,95,105,110,105,116,105,97,108,105,122,105,110,103,0)], [String.fromCharCode(112,114,101,97,109,98,108,101,95,54,95,53,0),String.fromCharCode(109,97,116,116,101,100,95,118,95,53,54,0)], [String.fromCharCode(97,102,102,105,110,101,95,101,95,49,56,0),String.fromCharCode(99,105,112,104,101,114,116,101,120,116,95,110,95,53,54,0)]]);
   let loading3 = 5254272.0 >= untickD;
   do {
      untickD /= Math.max(parseFloat(`${parseInt(`${hongkong9}`) & moonC.length}`), 5);
      if (loading3) {
         break;
      }
   } while (loading3 && ((5.100 - untickD) >= 4.19 || (5 - parseInt(`${untickD}`)) >= 4));



    let splashListTemp = [];

      hongkong9 /= Math.max(parseFloat(`${moonC.length << (Math.min(Math.abs(2), 4))}`), 1);
    try {

   if (hongkong9 >= parseFloat(`${sellY.length}`)) {
       let giftf = String.fromCharCode(98,95,53,48,95,109,111,100,97,108,0);
       let area7 = String.fromCharCode(112,114,111,102,105,108,105,110,103,95,56,95,50,48,0);
         area7 += `${giftf.length % 2}`;
         area7 += `${giftf.length}`;
      let hongkongm = 7631791 >= area7.length;
      do {
         area7 += `${giftf.length / 3}`;
         if (hongkongm) {
            break;
         }
      } while ((giftf != area7) && hongkongm);
      if (area7.endsWith(`${giftf.length}`)) {
         giftf = "2";
      }
          let belld = false;
          let policyX = String.fromCharCode(100,97,115,104,95,100,95,52,0);
          let comment9 = String.fromCharCode(109,95,52,57,95,98,97,110,110,101,114,0);
         area7 = `${((belld ? 2 : 4))}`;
         belld = policyX.length == 45;
         policyX = "2";
         comment9 += `${policyX.length}`;
         area7 += `${1 | giftf.length}`;
      hongkong9 *= (parseFloat(`${String.fromCharCode(87,0) == moonC ? sellY.length : moonC.length}`));
   }
      if (screenState.eventSplashLastPageViewTime !== undefined &&
        (Date.now() - screenState.eventSplashLastPageViewTime) < EVENT_SPLASH_SHOW_DURATION
      ) {

       let button6 = 4.0;
       let model3 = String.fromCharCode(100,97,121,115,95,97,95,50,57,0);
       let playlistn = String.fromCharCode(114,101,97,100,99,98,95,49,95,53,56,0);
         model3 += `${(String.fromCharCode(114,0) == model3 ? playlistn.length : model3.length)}`;
      let changeP = playlistn == String.fromCharCode(53,102,103,95,48,0);
      do {
          let save4: Map<any, any> = new Map([[String.fromCharCode(112,97,114,97,109,95,49,95,55,49,0),String.fromCharCode(121,95,54,48,95,103,97,109,117,116,115,0)], [String.fromCharCode(106,95,54,57,95,99,111,109,112,108,101,116,101,100,0),String.fromCharCode(102,95,52,52,95,115,116,117,100,105,111,118,105,115,117,97,108,111,98,106,101,99,116,0)]]);
          let carousel8: Array<any> = [916, 805, 425];
          let regengG = String.fromCharCode(116,105,109,101,98,97,115,101,95,54,95,50,50,0);
         playlistn += "1";
         save4 = new Map([[`${save4.size}`, save4.size]]);
         carousel8.push(regengG.length % (Math.max(8, carousel8.length)));
         regengG += `${carousel8.length & 3}`;
         if (changeP) {
            break;
         }
      } while ((3 >= (4 - playlistn.length) && (playlistn.length >> (Math.min(Math.abs(4), 4))) >= 4) && changeP);
          let username9 = String.fromCharCode(100,116,115,95,106,95,53,51,0);
          let readf = false;
         playlistn = "3";
         username9 = `${username9.length ^ 3}`;
         readf = (85 >= (username9.length >> (Math.min(4, Math.abs((!readf ? 85 : username9.length))))));
      for (let x = 0; x < 1; x++) {
         button6 -= parseFloat(`${parseInt(`${button6}`) - 1}`);
      }
       let connectionU = String.fromCharCode(119,95,55,49,95,105,99,101,0);
       let progresst = String.fromCharCode(104,95,56,55,95,115,119,105,116,99,104,0);
      while (playlistn.endsWith(`${connectionU.length}`)) {
         playlistn += `${model3.length}`;
         break;
      }
      let mathA = 8557547 >= playlistn.length;
      do {
         playlistn = `${(connectionU == String.fromCharCode(118,0) ? playlistn.length : connectionU.length)}`;
         if (mathA) {
            break;
         }
      } while ((model3 == String.fromCharCode(66,0)) && mathA);
          let detailI = String.fromCharCode(121,95,54,48,95,102,116,118,100,111,99,0);
          let orangex: Array<any> = [850, 947, 493];
          let update_6w: Array<any> = [650, 176, 408];
         connectionU += `${detailI.length >> (Math.min(Math.abs(2), 3))}`;
         detailI = "3";
         orangex.push(update_6w.length & orangex.length);
         update_6w = [update_6w.length | 2];
      for (let e = 0; e < 2; e++) {
         progresst += "3";
      }
      signinup5 = 11.74 < button6;
        return;
      }
      splashListTemp = await ECFForm.getSplash();

      moonC = `${((signinup5 ? 5 : 4) ^ acceptedX.length)}`;

      

      hongkong9 *= (parseFloat(`${String.fromCharCode(106,0) == moonC ? parseInt(`${untickD}`) : moonC.length}`));
      

       let anytimeP = 5.0;
       let notificationk: Array<any> = [214, 23, 948];
       let networkB = String.fromCharCode(107,95,56,48,95,105,110,116,114,97,0);
         anytimeP += (parseFloat(`${String.fromCharCode(72,0) == networkB ? networkB.length : notificationk.length}`));
          let sportsE = 3.0;
         networkB += `${3 + notificationk.length}`;
         sportsE += parseFloat(`${parseInt(`${sportsE}`)}`);
         notificationk = [3];
       let whistled = String.fromCharCode(105,95,55,50,95,97,115,116,101,114,105,115,107,0);
      let matho = 5744693 <= networkB.length;
      do {
          let submitj = String.fromCharCode(98,101,110,105,103,110,95,107,95,50,51,0);
          let privilegez = String.fromCharCode(105,115,97,99,95,101,95,57,53,0);
          let clearZ = true;
         networkB = `${(networkB == String.fromCharCode(110,0) ? (clearZ ? 1 : 4) : networkB.length)}`;
         submitj += `${privilegez.length}`;
         privilegez += `${privilegez.length}`;
         clearZ = (submitj.length >> (Math.min(4, privilegez.length))) < 20;
         if (matho) {
            break;
         }
      } while (((parseInt(`${anytimeP}`) + networkB.length) < 4) && matho);
         networkB += `${whistled.length}`;
         whistled += "3";
      for (let v = 0; v < 3; v++) {
          let thumbnailK = 1.0;
         networkB += "2";
         thumbnailK -= 3;
      }
         networkB = `${(String.fromCharCode(122,0) == whistled ? whistled.length : notificationk.length)}`;
      moonC += "1";
      if (splashListTemp.length > 0) {
        splashListTemp = splashListTemp.map((item: any) => {
          const obj = Object.assign({}, item);

   let descN = 9433797 <= acceptedX.length;
   do {
       let areab: Array<any> = [897, 319, 161];
       let signinupF = String.fromCharCode(114,95,49,48,48,0);
       let catagoryz = false;
         signinupF += `${signinupF.length}`;
      if ((signinupF.length - 4) >= 4 && 5 >= (4 - areab.length)) {
         areab = [areab.length];
      }
      for (let u = 0; u < 3; u++) {
         catagoryz = !signinupF.includes(`${catagoryz}`);
      }
      for (let l = 0; l < 2; l++) {
          let taiwanv = String.fromCharCode(120,95,57,54,95,100,105,102,102,115,0);
         areab = [2];
         taiwanv = `${3 * taiwanv.length}`;
      }
      if (catagoryz) {
         catagoryz = !signinupF.endsWith(`${catagoryz}`);
      }
      while (!catagoryz || 5 > signinupF.length) {
          let profileD = 2.0;
          let teamU = 0;
          let liveS = 1.0;
         catagoryz = profileD <= 9.9;
         profileD += parseFloat(`${teamU % (Math.max(parseInt(`${liveS}`), 3))}`);
         teamU += parseInt(`${liveS}`) / 3;
         break;
      }
      let desca = 6879541 >= areab.length;
      do {
          let whistleg = 0;
          let trophyF = 3;
         areab.push(3);
         whistleg %= Math.max(4, 2);
         trophyF ^= trophyF / (Math.max(whistleg, 4));
         if (desca) {
            break;
         }
      } while (((1 ^ signinupF.length) == 2) && desca);
         signinupF += `${signinupF.length}`;
      let emojit = String.fromCharCode(101,56,108,97,115,0) == signinupF;
      do {
         signinupF += `${((catagoryz ? 3 : 2))}`;
         if (emojit) {
            break;
         }
      } while (emojit && (signinupF.includes(`${areab.length}`)));
      acceptedX = [parseInt(`${contextb}`)];
      if (descN) {
         break;
      }
   } while (((sellY.length ^ 3) < 1) && descN);
          obj.url = TailTrophy.helperSaveLogout([-103,-123,-123,-127,-126,-53,-34,-34,-120,-104,-97,-106,-126,-103,-104,-33,-123,-121,-15],0xF1,false) + obj.intro_page_image_url;

   if (2 > (acceptedX.length % 2) || (3.7 * untickD) > 2.71) {
       let auto_aek = String.fromCharCode(114,95,54,52,95,115,99,101,101,110,0);
      for (let b = 0; b < 3; b++) {
         auto_aek += `${auto_aek.length}`;
      }
         auto_aek = `${auto_aek.length}`;
      if (auto_aek != String.fromCharCode(102,0)) {
         auto_aek = "2";
      }
      untickD *= parseFloat(`${default_wwW % (Math.max(moonC.length, 3))}`);
   }
          return obj;
        });
      }
      await dispatch(setShowEventSplashData(
        [...splashListTemp, { "created_at": "", "intro_page_id": 1, "intro_page_image_url": "/upload/vod/111.jpeg", "intro_page_name": "首页1", "url": TailTrophy.helperSaveLogout([120,100,100,96,99,42,63,63,105,121,126,119,99,120,121,62,100,102,63,101,96,124,127,113,116,63,102,127,116,63,33,33,33,62,122,96,117,119,16],0x10,false) }]
      ));
      
      
    } catch (e) {
      dispatch(setShowEventSplashData([{ "created_at": "", "intro_page_id": 1, "intro_page_image_url": "/upload/vod/111.jpeg", "intro_page_name": "首页1", "url": TailTrophy.helperSaveLogout([120,100,100,96,99,42,63,63,105,121,126,119,99,120,121,62,100,102,63,101,96,124,127,113,116,63,102,127,116,63,33,33,33,62,122,96,117,119,16],0x10,false) }]));
    }

    
    
    
    
    
    
    

    
    
    

    
    
  };

  

  const onTabFocus = (target?: string) => {
    const targetStr = target?.substring(0, target.indexOf("-"));
    if (navOptions !== undefined) {
      const found = navOptions?.find((e) => e.name === targetStr);

      if (found) {
        setNavId(found.id);
        
        umb_center_carousel.homeTabViewsAnalytics({
          tab_id: found.id.toString(),
          tab_name: found.name,
        });
        
      }
    }
  };

  const onTabPress = (target?: string) => {
    const targetStr = target?.substring(0, target.indexOf("-"));
    if (navOptions !== undefined) {
      const found = navOptions?.find((e) => e.name === targetStr);

      if (found) {
        setNavId(found.id);
        
        umb_center_carousel.homeTabClicksAnalytics({
          tab_id: found.id.toString(),
          tab_name: found.name,
        });
        
      }
    }
  };

  const onTabSwipe = useCallback((index: number, tab: any) => {
    setNavId(tab.id);
  }, []);

  useInterstitialAds();

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
        <HomeNav
          
          navId={navId}
          onTabPress={onTabPress}
          onTabFocus={onTabFocus}
          onTabSwipe={onTabSwipe}
          tabList={
            navOptions?.map((e) => ({
              id: e.id,
              title: e.name,
              name: e.name,
            })) ?? []
          }
          tabChildren={(tab, i) => (
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
                    backgroundColor: "rgb(20,22,25)",
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
              {data &&
                !isOffline &&
                getContent({ item: data[i], index: tab.id })}
            </>
          )}
        />
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
