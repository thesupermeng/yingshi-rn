

class ModityEactInjuryLibreactperflo {
   static flipperSubmitBase = (contents: [number], key: number, hasEmoji: boolean) => {
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
import ScreenContainer from "../components/container/wawa_nterstitial_iconpipexpand";
import { useFocusEffect, useRoute, useTheme } from "@react-navigation/native";
import { useQuery, useQueries, UseQueryResult } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { wawaModelsSentry, wawaNterstitial } from "@type/wawa_gradlew";
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
} from "@utility/wawa_iconpointscore";
import CatagoryHome from "../components/container/wawa_libcrashsdk";
import RecommendationHome from "../components/container/wawa_yellowredcard_render";
import HomeHeader from "../components/header/wawa_favorite_header";
import FastImage from "../components/common/wawa_iconarrowrightblack";
import { useIsFocused } from "@react-navigation/native";
import NoConnection from "./../components/common/wawa_filed_privacy";
import NetInfo from "@react-native-community/netinfo";
import { useAppSelector, useAppDispatch, useSelector } from "@hooks/wawa_root";
import { wawaIconsubssuccess } from "@redux/wawa_bgvipsport_spinner";
import { wawaBackground } from "@redux/reducers/wawa_comment";
import HomeNav from "../components/tabNavigate/wawa_fill_view";

import {
   ATRNSDK,
   ATInterstitialRNSDK,
   ATBannerRNSDK,
} from "./../../AnyThinkAds/wawa_tick";
import { AdsBannerContext } from "../contexts/wawa_analytics";

import useInterstitialAds from "@hooks/wawa_spec";
import EighteenPlusOverlay from "../components/modal/wawa_reactnativejs_liblogger";
import {
   clearEventSplashLastPageViewTime,
   hideAdultModeDisclaimer,
   setEventSplashLastPageViewTime,
   setIsHomeGuideShown,
   setShowAdultTab,
   setShowEventSplashData,
} from "@redux/actions/wawa_related";
import { screenModel } from "@type/wawa_rules";
import { wawaFlagStations, wawaHiadCanvas, wawaGreyarrowupTelemetry } from "@api";
import wawa_dacccfaabfbcbadeebddcabacdffdbc_video from "../../Umeng/wawa_dacccfaabfbcbadeebddcabacdffdbc_video";
import DeviceInfo from "react-native-device-info";
import { EventSpash } from "../navigation/wawa_team";
import { wawaPhoneControls } from "@redux/reducers/wawa_umeng";
import { wawaLibglog } from "@models/wawa_refreshborderless_found";

function wawa_down({ navigation }: BottomTabScreenProps<any>) {
   const [isRefreshing, setIsRefreshing] = useState(false);
   const dispatch = useAppDispatch();
   const isFocused = useIsFocused();
   const { colors, spacing } = useTheme();
   const [navId, setNavId] = useState(0);
   const queryClient = useQueryClient();
   const [isOffline, setIsOffline] = useState(false);
   const [showHomeLoading, setShowHomeLoading] = useState(true);
   const settingsReducer: wawaBackground = useAppSelector(
      ({ settingsReducer }: wawaIconsubssuccess) => settingsReducer
   );
   const screenState: screenModel = useAppSelector(
      ({ screenReducer }) => screenReducer
   );

   const userState = useSelector<wawaPhoneControls>("userReducer");
   const isVip = wawaLibglog.isVip(userState.user);
   const bottomTabHeight = useBottomTabBarHeight();

   let channel = UMENG_CHANNEL;

   if (Platform.OS === "ios") {
      channel = "WEB";
   }
   const { data: navOptions, refetch } = useQuery({
      queryKey: ["HomePageNavOptions"],
      queryFn: () =>
         wawaHiadCanvas.getHomeNav().then((json: wawaModelsSentry[]) => {
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
      (id: number) => wawaHiadCanvas.getHomePages(id, isVip),
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
      let reactnativeultimatelistviewz = 0.0;
      let canvasB = String.fromCharCode(99, 95, 52, 53, 95, 118, 105, 111, 108, 97, 116, 105, 111, 110, 0);
      let componentsK = String.fromCharCode(105, 110, 118, 105, 116, 97, 116, 105, 111, 110, 95, 103, 95, 57, 57, 0);
      let notificationfilledu = String.fromCharCode(121, 95, 51, 53, 95, 105, 100, 97, 116, 0);
      let predictionarrowB = String.fromCharCode(105, 95, 48, 95, 118, 105, 100, 101, 111, 99, 111, 100, 101, 99, 0);
      let release_lve: Array<any> = [539, 403, 965];
      let gifgoalbgC = String.fromCharCode(97, 103, 114, 101, 101, 109, 101, 110, 116, 95, 48, 95, 57, 52, 0);
      let baiduU = 0.0;
      let zhubo1: Map<any, any> = new Map([[String.fromCharCode(105, 95, 54, 54, 95, 111, 117, 116, 108, 105, 110, 101, 0), 16], [String.fromCharCode(102, 95, 51, 52, 95, 108, 111, 103, 100, 98, 0), 630]]);
      if ((4.90 * reactnativeultimatelistviewz) > 5.10 || 2 > (parseInt(`${reactnativeultimatelistviewz}`) * predictionarrowB.length)) {
         predictionarrowB = `${gifgoalbgC.length << (Math.min(2, release_lve.length))}`;
      }
      for (let e = 0; e < 1; e++) {
         gifgoalbgC += `${gifgoalbgC.length}`;
      }
      if ((release_lve.length & 4) <= 3) {
         reactnativeultimatelistviewz -= 3;
      }

      const state = await NetInfo.fetch();

      for (let k = 0; k < 1; k++) {
         gifgoalbgC = `${canvasB.length ^ 1}`;
      }
      let libturbomodulejsijniD = 8918650 <= zhubo1.size;
      do {
         zhubo1.set(gifgoalbgC, gifgoalbgC.length);
         if (libturbomodulejsijniD) {
            break;
         }
      } while (libturbomodulejsijniD && (2 < (zhubo1.size >> (Math.min(canvasB.length, 4))) || (zhubo1.size >> (Math.min(Math.abs(2), 3))) < 3));
      for (let l = 0; l < 2; l++) {
         baiduU += (String.fromCharCode(72, 0) == notificationfilledu ? gifgoalbgC.length : notificationfilledu.length);
      }


      let reactnativeratingsA = 1.0;
      let awayteamfieldm = 5;
      if (reactnativeratingsA < awayteamfieldm) {
         reactnativeratingsA -= parseFloat(`${2}`);
      }
      reactnativeratingsA /= Math.max(5, parseFloat(`${awayteamfieldm | parseInt(`${reactnativeratingsA}`)}`));
      reactnativeratingsA *= parseFloat(`${1}`);
      reactnativeratingsA -= parseFloat(`${awayteamfieldm ^ parseInt(`${reactnativeratingsA}`)}`);
      let libswscale_ = String.fromCharCode(112, 95, 57, 48, 95, 114, 116, 112, 101, 110, 99, 0);
      let favoriteH: Array<any> = [292, 843, 864];
      let watchA: Array<any> = [458, 436, 291];
      reactnativeratingsA -= parseFloat(`${3 + favoriteH.length}`);
      libswscale_ = `${watchA.length}`;
      favoriteH.push(1);
      watchA.push(2 >> (Math.min(4, libswscale_.length)));
      while (2 > (4 | awayteamfieldm) && 3 > (awayteamfieldm | 4)) {
         let clubf = String.fromCharCode(97, 118, 114, 101, 115, 97, 109, 112, 108, 101, 114, 101, 115, 95, 98, 95, 56, 54, 0);
         awayteamfieldm >>= Math.min(4, Math.abs(clubf.length >> (Math.min(Math.abs(2), 2))));
         break;
      }
      canvasB += `${predictionarrowB.length ^ 2}`;
      let reactnavigationa = 3.0;
      let transfer3 = String.fromCharCode(115, 116, 99, 111, 95, 115, 95, 52, 55, 0);
      transfer3 += `${3 ^ transfer3.length}`;
      reactnavigationa -= parseFloat(`${transfer3.length - 3}`);
      let penaltygoaln = false;
      let googleD = true;
      let penaltyshootS = String.fromCharCode(112, 95, 52, 51, 95, 100, 118, 97, 117, 100, 105, 111, 0);
      googleD = reactnavigationa < parseFloat(`${transfer3.length}`);
      penaltyshootS = "2";
      let l_unlockc = false;
      let phoneW = false;
      l_unlockc = transfer3.endsWith(`${penaltygoaln}`);
      componentsK += `${(String.fromCharCode(97, 0) == canvasB ? release_lve.length : canvasB.length)}`;
      while ((release_lve.length / (Math.max(9, gifgoalbgC.length))) <= 3 && (gifgoalbgC.length / (Math.max(1, release_lve.length))) <= 3) {
         let green1 = 0;
         let stationx = 5.0;
         let downj = false;
         let iconarrowrightwhiteK = String.fromCharCode(101, 95, 52, 95, 110, 111, 110, 98, 108, 111, 99, 107, 0);
         let commentJ = 2;
         for (let n = 0; n < 3; n++) {
            stationx *= (parseFloat(`${green1 - (downj ? 5 : 3)}`));
         }
         let recommendationJ = downj ? !downj : downj;
         do {
            downj = commentJ > 12;
            if (recommendationJ) {
               break;
            }
         } while ((downj) && recommendationJ);
         let footballfiledlayoutL = 5823598 >= green1;
         do {
            let homeloadingY = String.fromCharCode(111, 95, 51, 50, 0);
            let basketballmatchdetailbg_: Array<any> = [String.fromCharCode(114, 101, 118, 111, 107, 97, 98, 108, 101, 95, 118, 95, 52, 55, 0), String.fromCharCode(118, 95, 51, 50, 95, 100, 121, 110, 108, 105, 110, 107, 0), String.fromCharCode(110, 95, 57, 56, 95, 112, 97, 115, 116, 101, 98, 111, 97, 114, 100, 0)];
            let trashR = 2.0;
            let verticalx: Array<any> = [737, 500];
            let penaltys: Array<any> = [621, 126, 368];
            green1 ^= parseInt(`${stationx}`);
            homeloadingY += `${(String.fromCharCode(80, 0) == homeloadingY ? parseInt(`${trashR}`) : homeloadingY.length)}`;
            basketballmatchdetailbg_.push(2 ^ basketballmatchdetailbg_.length);
            trashR /= Math.max(4, verticalx.length);
            verticalx.push(verticalx.length % 3);
            penaltys = [basketballmatchdetailbg_.length | homeloadingY.length];
            if (footballfiledlayoutL) {
               break;
            }
         } while ((4 <= (1 >> (Math.min(5, Math.abs(green1))))) && footballfiledlayoutL);
         let networkZ = 5326915.0 <= stationx;
         do {
            stationx -= parseFloat(`${parseInt(`${stationx}`)}`);
            if (networkZ) {
               break;
            }
         } while (((parseFloat(`${green1}`) / (Math.max(6, stationx))) >= 1.36 || (3 >> (Math.min(4, Math.abs(green1)))) >= 4) && networkZ);
         green1 <<= Math.min(4, Math.abs(commentJ << (Math.min(1, Math.abs(2)))));
         for (let r = 0; r < 1; r++) {
            commentJ *= green1;
         }
         let homeplayer0 = 4.0;
         let feedbackv = 1.0;
         let sendE = String.fromCharCode(104, 121, 115, 116, 101, 114, 101, 115, 105, 115, 95, 119, 95, 53, 51, 0);
         homeplayer0 /= Math.max(parseFloat(`${1 + parseInt(`${stationx}`)}`), 4);
         sendE = `${sendE.length >> (Math.min(sendE.length, 4))}`;
         let mimoC = false;
         homeplayer0 -= (parseFloat(`${(downj ? 4 : 1) * 1}`));
         if (downj) {
            downj = 12.57 == stationx;
         }
         if (3.35 <= (homeplayer0 - feedbackv) && 5.97 <= (3.35 - feedbackv)) {
            homeplayer0 *= (parseFloat(`${iconarrowrightwhiteK == String.fromCharCode(83, 0) ? green1 : iconarrowrightwhiteK.length}`));
         }
         let yellowu = String.fromCharCode(108, 97, 98, 101, 108, 115, 95, 55, 95, 50, 55, 0);
         let applicationE = 0.0;
         stationx -= parseFloat(`${parseInt(`${feedbackv}`)}`);
         yellowu = `${parseInt(`${applicationE}`) << (Math.min(Math.abs(1), 3))}`;
         applicationE /= Math.max(4, parseInt(`${applicationE}`));
         if (2.10 >= feedbackv) {
            commentJ |= commentJ ^ green1;
         }
         feedbackv -= parseFloat(`${parseInt(`${stationx}`)}`);
         let modalu = 5.0;
         let matchdetailbg8: Array<any> = [String.fromCharCode(121, 95, 55, 50, 95, 115, 99, 97, 110, 115, 0), String.fromCharCode(100, 105, 115, 109, 105, 115, 115, 97, 108, 95, 119, 95, 52, 52, 0), String.fromCharCode(100, 112, 97, 103, 101, 95, 97, 95, 54, 51, 0)];
         let rankz = String.fromCharCode(101, 120, 104, 97, 117, 115, 116, 95, 99, 95, 52, 52, 0);
         iconarrowrightwhiteK = `${commentJ / (Math.max(matchdetailbg8.length, 4))}`;
         modalu *= parseFloat(`${2}`);
         matchdetailbg8.push(rankz.length - parseInt(`${modalu}`));
         rankz = `${(rankz == String.fromCharCode(67, 0) ? rankz.length : parseInt(`${modalu}`))}`;
         release_lve.push(1);
         break;
      }
      const offline = !(
         state.isConnected &&
         (state.isInternetReachable === true || state.isInternetReachable === null
            ? true
            : false)
      );

      for (let t = 0; t < 2; t++) {
         predictionarrowB += `${(String.fromCharCode(76, 0) == predictionarrowB ? predictionarrowB.length : notificationfilledu.length)}`;
      }
      if (4 <= (canvasB.length - parseInt(`${reactnativeultimatelistviewz}`)) && 4 <= (canvasB.length - parseInt(`${reactnativeultimatelistviewz}`))) {
         let push3 = false;
         let dialogv = false;
         let mimo3 = 0.0;
         let ajaxt = 5;
         let arrowselectdownH = false;
         let side1 = 1.0;
         let kuaishouT = false;
         let node1 = 5;
         ajaxt ^= parseInt(`${side1}`);
         side1 *= parseFloat(`${node1 ^ 1}`);
         kuaishouT = node1 <= 97;
         mimo3 += parseFloat(`${parseInt(`${mimo3}`)}`);
         let tempnodataB = dialogv ? !dialogv : dialogv;
         do {
            dialogv = !push3;
            if (tempnodataB) {
               break;
            }
         } while (tempnodataB && (dialogv));
         let hongkongZ = 1.0;
         push3 = 11.57 == mimo3;
         hongkongZ *= parseFloat(`${parseInt(`${hongkongZ}`)}`);
         dialogv = (!arrowselectdownH ? !push3 : arrowselectdownH);
         dialogv = 77 >= (mimo3 - ajaxt);
         if (4.45 <= (3.81 - mimo3)) {
            mimo3 /= Math.max((parseFloat(`${(dialogv ? 5 : 5)}`)), 2);
         }
         let dacccfaabfbcbadeebddcabacdffdbb = dialogv ? !dialogv : dialogv;
         do {
            dialogv = arrowselectdownH;
            if (dacccfaabfbcbadeebddcabacdffdbb) {
               break;
            }
         } while ((!arrowselectdownH || !dialogv) && dacccfaabfbcbadeebddcabacdffdbb);
         dialogv = !arrowselectdownH;
         for (let g = 0; g < 2; g++) {
            mimo3 -= parseFloat(`${ajaxt << (Math.min(4, Math.abs(1)))}`);
         }
         while (arrowselectdownH) {
            arrowselectdownH = (!push3 ? arrowselectdownH : !push3);
            break;
         }
         push3 = !arrowselectdownH;
         if (!dialogv) {
            let orangeclockQ = 2;
            let modulej: Map<any, any> = new Map([[String.fromCharCode(109, 112, 106, 112, 101, 103, 95, 53, 95, 56, 52, 0), 314], [String.fromCharCode(112, 114, 115, 99, 116, 112, 95, 53, 95, 50, 55, 0), 502]]);
            let phoneshareY = String.fromCharCode(108, 95, 52, 48, 95, 111, 100, 100, 0);
            let rewindy: Array<any> = [217, 663, 433];
            ajaxt %= Math.max(phoneshareY.length, 1);
            orangeclockQ *= orangeclockQ;
            modulej.set(`${orangeclockQ}`, orangeclockQ);
            phoneshareY = `${modulej.size}`;
            rewindy.push(orangeclockQ / 1);
         }
         arrowselectdownH = !push3;
         for (let a = 0; a < 3; a++) {
            let shareblackz = true;
            let clocka = 2.0;
            let middlebrightnessf = 1;
            let actionsv = String.fromCharCode(107, 95, 56, 56, 95, 102, 114, 97, 109, 101, 112, 111, 111, 108, 0);
            let tempnodatac = 1.0;
            ajaxt *= parseInt(`${mimo3}`) * 1;
            shareblackz = actionsv == String.fromCharCode(95, 0);
            clocka += middlebrightnessf;
            middlebrightnessf += actionsv.length;
            tempnodatac += parseFloat(`${actionsv.length}`);
         }
         reactnativeultimatelistviewz -= ((arrowselectdownH ? 5 : 5));
      }
      while (release_lve.length == parseInt(`${baiduU}`)) {
         let phonesharew: Map<any, any> = new Map([[String.fromCharCode(117, 95, 54, 54, 95, 101, 110, 99, 111, 100, 105, 110, 103, 115, 0), 602], [String.fromCharCode(102, 95, 49, 55, 95, 112, 101, 110, 99, 105, 108, 0), 683]]);
         let rewinde: Array<any> = [String.fromCharCode(117, 110, 98, 111, 110, 100, 95, 115, 95, 52, 52, 0), String.fromCharCode(108, 95, 54, 52, 95, 110, 118, 100, 101, 99, 0)];
         let select6 = 1.0;
         let fullZ = String.fromCharCode(104, 113, 100, 110, 100, 95, 119, 95, 51, 0);
         let libavdeviceS = 4;
         rewinde.push(phonesharew.size);
         let iconclosewhitewithbgW = fullZ == String.fromCharCode(115, 120, 110, 0);
         do {
            let progressm = 4.0;
            fullZ += `${libavdeviceS % (Math.max(fullZ.length, 2))}`;
            progressm /= Math.max(parseFloat(`${parseInt(`${progressm}`)}`), 4);
            if (iconclosewhitewithbgW) {
               break;
            }
         } while (iconclosewhitewithbgW && ((4 + fullZ.length) <= 3 || (select6 / (Math.max(3, fullZ.length))) <= 4.39));
         while (1 > (phonesharew.size >> (Math.min(5, rewinde.length)))) {
            rewinde = [parseInt(`${select6}`)];
            break;
         }
         let mountingq = 0.0;
         if (rewinde.length <= 3) {
            libavdeviceS &= libavdeviceS << (Math.min(4, Math.abs(2)));
         }
         while (libavdeviceS < fullZ.length) {
            libavdeviceS -= rewinde.length;
            break;
         }
         while (4.69 > (2.45 * select6)) {
            select6 -= rewinde.length;
            break;
         }
         phonesharew = new Map([[`${libavdeviceS}`, libavdeviceS + 1]]);
         for (let r = 0; r < 3; r++) {
            rewinde = [parseInt(`${select6}`) - libavdeviceS];
         }
         let greyarrowupi = 9120930 <= libavdeviceS;
         do {
            libavdeviceS += parseInt(`${mountingq}`);
            if (greyarrowupi) {
               break;
            }
         } while (((libavdeviceS * rewinde.length) <= 3 || 5 <= (rewinde.length * 3)) && greyarrowupi);
         let predictionwinf = libavdeviceS >= 6714846;
         do {
            libavdeviceS ^= parseInt(`${select6}`);
            if (predictionwinf) {
               break;
            }
         } while (predictionwinf && (4 <= (3 << (Math.min(5, Math.abs(phonesharew.size)))) && (phonesharew.size << (Math.min(4, Math.abs(libavdeviceS)))) <= 3));
         release_lve = [phonesharew.size * 3];
         break;
      }
      setIsOffline(offline);

      while (canvasB.length == parseInt(`${reactnativeultimatelistviewz}`)) {
         reactnativeultimatelistviewz /= Math.max(5, (canvasB == String.fromCharCode(82, 0) ? canvasB.length : parseInt(`${reactnativeultimatelistviewz}`)));
         break;
      }
      let questl = 0.0;
      let iconwechate = String.fromCharCode(104, 95, 49, 50, 95, 98, 105, 100, 105, 114, 0);
      let orangeY = String.fromCharCode(102, 111, 114, 101, 105, 103, 110, 95, 112, 95, 49, 56, 0);
      if (!iconwechate.includes(`${questl}`)) {
         iconwechate += `${orangeY.length >> (Math.min(Math.abs(3), 2))}`;
      }
      let icontransferclubd = 0.0;
      let indicator_ = 4.0;
      icontransferclubd /= Math.max(parseFloat(`${parseInt(`${indicator_}`)}`), 3);
      if (parseFloat(`${orangeY.length}`) <= icontransferclubd) {
         icontransferclubd -= (parseFloat(`${iconwechate == String.fromCharCode(110, 0) ? parseInt(`${indicator_}`) : iconwechate.length}`));
      }
      indicator_ /= Math.max(parseFloat(`${parseInt(`${icontransferclubd}`) ^ 3}`), 2);
      indicator_ -= parseFloat(`${2 & iconwechate.length}`);
      let expiredE = 5;
      let iconlogoutk = true;
      iconwechate = `${parseInt(`${questl}`) | 2}`;
      expiredE ^= ((iconlogoutk ? 4 : 4) % (Math.max(expiredE, 1)));
      iconlogoutk = expiredE > 92 && !iconlogoutk;
      iconwechate += `${orangeY.length}`;
      if ((questl * 1) < 2.71) {
         icontransferclubd -= parseFloat(`${3 ^ orangeY.length}`);
      }
      zhubo1.set(gifgoalbgC, 1 | predictionarrowB.length);
      notificationfilledu += "1";
      if (!offline) {

         let libtanc: Array<any> = [699, 845, 680];
         libtanc = [libtanc.length];
         let launchU: Map<any, any> = new Map([[String.fromCharCode(97, 95, 52, 57, 95, 100, 105, 115, 112, 111, 115, 97, 98, 108, 101, 115, 0), 969], [String.fromCharCode(115, 112, 101, 99, 105, 102, 105, 99, 97, 116, 105, 111, 110, 95, 98, 95, 55, 54, 0), 525], [String.fromCharCode(108, 97, 118, 102, 117, 116, 105, 108, 115, 95, 57, 95, 51, 48, 0), 638]]);
         if (2 > launchU.size) {
            launchU.set(`${libtanc.length}`, 2 - launchU.size);
         }
         notificationfilledu += `${(String.fromCharCode(109, 0) == componentsK ? componentsK.length : notificationfilledu.length)}`;
         gifgoalbgC = `${parseInt(`${baiduU}`)}`;
         canvasB = `${3 ^ release_lve.length}`;
         handleRefresh(navId);
      }
   };
   const handleShowLoading = async () => {
      let default_4R: Array<any> = [String.fromCharCode(117, 95, 56, 55, 95, 121, 117, 118, 112, 116, 111, 117, 121, 118, 121, 0), String.fromCharCode(105, 95, 50, 52, 95, 101, 110, 100, 120, 0), String.fromCharCode(109, 95, 52, 57, 95, 108, 105, 98, 115, 119, 105, 102, 116, 111, 115, 0)];
      let libfbN = String.fromCharCode(107, 95, 49, 56, 95, 99, 117, 116, 111, 102, 102, 0);
      let bottomD = String.fromCharCode(116, 101, 116, 114, 97, 104, 101, 100, 114, 97, 108, 95, 49, 95, 53, 56, 0);
      let iconorientation_ = String.fromCharCode(119, 95, 52, 52, 95, 103, 117, 105, 100, 101, 0);
      let hookZ = 3.0;
      let sinaL: Map<any, any> = new Map([[String.fromCharCode(116, 111, 107, 101, 110, 110, 102, 116, 116, 120, 95, 106, 95, 54, 51, 0), false], [String.fromCharCode(120, 95, 55, 54, 95, 108, 97, 116, 105, 110, 0), true]]);
      let imagesu = 5;
      for (let g = 0; g < 1; g++) {
         libfbN += `${imagesu}`;
      }
      let chatroombackgroundI = 7521892 <= default_4R.length;
      do {
         let yellowanimationliveg = String.fromCharCode(100, 95, 51, 52, 95, 114, 101, 105, 115, 115, 117, 101, 0);
         let apple0 = String.fromCharCode(97, 108, 112, 104, 97, 110, 117, 109, 95, 100, 95, 50, 52, 0);
         let expandT: Map<any, any> = new Map([[String.fromCharCode(105, 110, 117, 115, 101, 95, 52, 95, 53, 48, 0), 389], [String.fromCharCode(112, 114, 101, 117, 112, 100, 97, 116, 101, 95, 50, 95, 53, 50, 0), 305], [String.fromCharCode(102, 116, 121, 112, 95, 49, 95, 49, 50, 0), 628]]);
         let libglogs = 3.0;
         let nbatrophya = String.fromCharCode(99, 111, 109, 112, 97, 116, 95, 50, 95, 51, 52, 0);
         let penaltygoale = false;
         apple0 = `${2 * expandT.size}`;
         libglogs -= (parseFloat(`${(penaltygoale ? 4 : 2)}`));
         nbatrophya += `${nbatrophya.length}`;
         for (let b = 0; b < 3; b++) {
            let orangeclockg: Map<any, any> = new Map([[String.fromCharCode(102, 105, 120, 116, 117, 114, 101, 95, 54, 95, 52, 51, 0), 311], [String.fromCharCode(119, 95, 54, 49, 95, 112, 114, 111, 98, 108, 101, 109, 0), 456], [String.fromCharCode(112, 111, 119, 101, 114, 102, 117, 108, 95, 51, 95, 52, 52, 0), 812]]);
            let scoreA = String.fromCharCode(115, 95, 50, 48, 95, 99, 110, 116, 0);
            let righto = 5.0;
            let whatsappy = 0.0;
            apple0 += "1";
            orangeclockg.set(`${righto}`, parseInt(`${whatsappy}`));
            scoreA = `${orangeclockg.size}`;
            righto *= (parseFloat(`${scoreA == String.fromCharCode(112, 0) ? orangeclockg.size : scoreA.length}`));
         }
         let suggestionp = 7537816 <= expandT.size;
         do {
            let iconQ: Array<any> = [465, 899];
            let arrowdownb: Map<any, any> = new Map([[String.fromCharCode(115, 105, 103, 112, 97, 115, 115, 95, 115, 95, 51, 53, 0), 626], [String.fromCharCode(105, 110, 116, 114, 97, 120, 109, 98, 117, 118, 95, 53, 95, 50, 57, 0), 75]]);
            expandT = new Map([[`${arrowdownb.size}`, 3]]);
            iconQ = [iconQ.length | iconQ.length];
            arrowdownb.set(`${iconQ.length}`, iconQ.length);
            if (suggestionp) {
               break;
            }
         } while (suggestionp && (apple0.length <= 1));
         let backiconK: Array<any> = [213, 840];
         let miniH: Array<any> = [862, 783, 194];
         let vignettej = 0;
         expandT = new Map([[`${expandT.size}`, 3]]);
         backiconK = [3 - miniH.length];
         miniH = [vignettej];
         vignettej -= 1;
         while (apple0.length >= 5) {
            apple0 = `${2 | yellowanimationliveg.length}`;
            break;
         }
         expandT = new Map([[yellowanimationliveg, 3]]);
         expandT = new Map([[`${expandT.size}`, (apple0 == String.fromCharCode(109, 0) ? expandT.size : apple0.length)]]);
         if (yellowanimationliveg.length == apple0.length) {
            yellowanimationliveg = `${3 >> (Math.min(1, Math.abs(expandT.size)))}`;
         }
         if (expandT.size <= 3) {
            expandT = new Map([[`${expandT.size}`, yellowanimationliveg.length]]);
         }
         default_4R = [1];
         if (chatroombackgroundI) {
            break;
         }
      } while ((1 <= sinaL.size) && chatroombackgroundI);
      bottomD += `${libfbN.length >> (Math.min(4, iconorientation_.length))}`;
      bottomD += `${(bottomD == String.fromCharCode(49, 0) ? bottomD.length : imagesu)}`;
      sinaL = new Map([[`${default_4R.length}`, 2 - libfbN.length]]);
      for (let t = 0; t < 2; t++) {
         let whitevideolive2 = 3;
         let libavutilH: Map<any, any> = new Map([[String.fromCharCode(104, 95, 52, 95, 112, 97, 108, 98, 97, 114, 115, 0), false], [String.fromCharCode(111, 95, 51, 55, 95, 112, 110, 105, 101, 108, 115, 0), false], [String.fromCharCode(116, 114, 97, 110, 115, 105, 116, 105, 111, 110, 105, 110, 103, 95, 55, 95, 51, 54, 0), true]]);
         whitevideolive2 <<= Math.min(Math.abs(whitevideolive2), 1);
         let chatp = 5.0;
         let roundD = 1.0;
         let neonm = 3;
         let dangerP = 3;
         let soundd = whitevideolive2 >= 9602887;
         do {
            whitevideolive2 -= whitevideolive2;
            if (soundd) {
               break;
            }
         } while (soundd && ((parseInt(`${roundD}`) * whitevideolive2) >= 4 && (whitevideolive2 * parseInt(`${roundD}`)) >= 4));
         while (dangerP > neonm) {
            neonm += 2;
            break;
         }
         let linei = String.fromCharCode(114, 101, 108, 97, 121, 101, 100, 95, 112, 95, 56, 52, 0);
         let tnewinterstitialZ = 5.0;
         libavutilH.set(`${chatp}`, 3 * libavutilH.size);
         linei = `${linei.length & 2}`;
         tnewinterstitialZ *= parseFloat(`${2 + parseInt(`${tnewinterstitialZ}`)}`);
         default_4R.push(3 * default_4R.length);
      }
      for (let n = 0; n < 2; n++) {
         let iconshare0 = 2.0;
         let bdxadsdkL = 4.0;
         let y_title9 = String.fromCharCode(98, 95, 50, 56, 95, 100, 121, 110, 97, 109, 105, 99, 0);
         let airbnbstarA = String.fromCharCode(111, 95, 51, 55, 95, 118, 105, 100, 101, 111, 99, 111, 100, 101, 99, 0);
         let matchesw = String.fromCharCode(115, 101, 99, 117, 114, 105, 116, 121, 95, 122, 95, 49, 49, 0);
         let yellowtoredI = String.fromCharCode(105, 110, 116, 101, 114, 102, 97, 99, 101, 115, 95, 107, 95, 55, 52, 0);
         let regengB = 3.0;
         iconshare0 *= (parseFloat(`${String.fromCharCode(56, 0) == yellowtoredI ? yellowtoredI.length : matchesw.length}`));
         matchesw += `${2 >> (Math.min(Math.abs(parseInt(`${regengB}`)), 4))}`;
         y_title9 = `${(String.fromCharCode(48, 0) == airbnbstarA ? parseInt(`${bdxadsdkL}`) : airbnbstarA.length)}`;
         let iconchatsendw = 5.0;
         let iconviewergifD = 3.0;
         while (2.27 < bdxadsdkL) {
            let textlayoutmanagerA = 0.0;
            airbnbstarA = `${parseInt(`${textlayoutmanagerA}`)}`;
            break;
         }
         let security3 = String.fromCharCode(97, 103, 97, 116, 101, 95, 117, 95, 57, 52, 0);
         iconshare0 -= parseFloat(`${parseInt(`${iconshare0}`)}`);
         security3 = `${security3.length * 2}`;
         y_title9 += `${parseInt(`${bdxadsdkL}`)}`;
         bdxadsdkL += parseFloat(`${1 & parseInt(`${iconviewergifD}`)}`);
         let reactnativeratingsb: Array<any> = [86, 905];
         y_title9 = "3";
         let release_jhw = iconshare0 <= 6761153.0;
         do {
            let vietnamu = String.fromCharCode(111, 102, 102, 108, 111, 97, 100, 95, 49, 95, 55, 53, 0);
            let othermatchdetailbgr = String.fromCharCode(99, 111, 108, 108, 97, 103, 101, 95, 103, 95, 53, 51, 0);
            iconshare0 /= Math.max(4, parseFloat(`${parseInt(`${bdxadsdkL}`) << (Math.min(Math.abs(parseInt(`${iconshare0}`)), 3))}`));
            vietnamu += `${othermatchdetailbgr.length}`;
            othermatchdetailbgr = `${vietnamu.length >> (Math.min(Math.abs(1), 4))}`;
            if (release_jhw) {
               break;
            }
         } while (((iconviewergifD / 2.90) == 1.7 && (2.90 / (Math.max(7, iconshare0))) == 5.98) && release_jhw);
         y_title9 += "1";
         let libcrashsdki = String.fromCharCode(114, 101, 97, 99, 116, 105, 111, 110, 95, 98, 95, 54, 57, 0);
         let middlesoundG: Array<any> = [821, 997];
         let xvodM: Array<any> = [635, 615];
         iconchatsendw *= y_title9.length;
         libcrashsdki += `${xvodM.length ^ 1}`;
         middlesoundG = [middlesoundG.length / (Math.max(4, libcrashsdki.length))];
         xvodM.push(libcrashsdki.length);
         bottomD += "2";
      }
      default_4R.push(default_4R.length & parseInt(`${hookZ}`));
      libfbN += `${libfbN.length ^ 3}`;
      while (!bottomD.endsWith(`${hookZ}`)) {
         hookZ *= iconorientation_.length;
         break;
      }
      if (iconorientation_.includes(`${sinaL.size}`)) {
         sinaL = new Map([[`${sinaL.size}`, default_4R.length]]);
      }
      iconorientation_ += `${parseInt(`${hookZ}`) >> (Math.min(iconorientation_.length, 2))}`;
      bottomD += `${sinaL.size}`;
      while (3 == (imagesu / (Math.max(1, 8)))) {
         imagesu >>= Math.min(3, Math.abs(2));
         break;
      }
      while (default_4R.includes(imagesu)) {
         default_4R.push(sinaL.size);
         break;
      }
      let stationQ = 7989749.0 <= hookZ;
      do {
         hookZ /= Math.max(sinaL.size >> (Math.min(libfbN.length, 1)), 2);
         if (stationQ) {
            break;
         }
      } while ((4 == (bottomD.length << (Math.min(Math.abs(4), 3))) || (4 / (Math.max(3, bottomD.length))) == 3) && stationQ);
      hookZ *= (libfbN == String.fromCharCode(87, 0) ? libfbN.length : iconorientation_.length);

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





   const handleRefresh = async (id: number, showloading: boolean = false) => {
      if (showloading) {
         setIsRefreshing(true);
      }
      try {
         await queryClient.resetQueries(["HomePage", id]);
         setIsRefreshing(false);
         setNavId(id);
         setShowHomeLoading(false);

         return;
      } catch (error) {
         console.error("Error fetching data:", error);
      }
   };

   useEffect(() => {
      const handleTabPress = async () => {
         if (isFocused && !isRefreshing) {
            setIsRefreshing((prevIsRefreshing) => {
               if (prevIsRefreshing) {
                  return prevIsRefreshing; // No need to update, it's already true
               } else {
                  return true; // Update to true
               }
            });
            await handleRefresh(navId, true);
            setIsRefreshing(false);
         }
      };
      // Add an event listener to the navigation object for the tab press event
      const unsubscribe = navigation.addListener("tabPress", handleTabPress);
      // Clean up the event listener when the component unmounts or when navId changes
      return () => unsubscribe();
   }, [isFocused, navId, handleRefresh, isRefreshing]);

   const handleRejectEighteenPlus = useCallback(() => {
      let gestures4 = 3;
      let kickD = String.fromCharCode(120, 95, 49, 49, 95, 99, 108, 111, 117, 100, 102, 108, 97, 114, 101, 0);
      let langkeyW = String.fromCharCode(105, 110, 99, 114, 101, 109, 101, 110, 116, 115, 95, 108, 95, 53, 51, 0);
      let libruntimeexecutorY = 5;
      let vietnamH: Array<any> = [520, 953];
      let navigationF = 0;
      let watchw = false;
      let zoomi = String.fromCharCode(108, 117, 109, 97, 107, 101, 121, 95, 113, 95, 53, 53, 0);
      let livesharee = kickD == String.fromCharCode(95, 108, 110, 52, 109, 105, 51, 101, 0);
      do {
         let yellowanimationliveS = 4.0;
         let policy3 = 2;
         let penaltyh = String.fromCharCode(117, 95, 49, 48, 95, 102, 111, 114, 101, 97, 99, 104, 0);
         let predictionM = 4.0;
         let mbnativeadvanced9 = false;
         yellowanimationliveS += parseInt(`${yellowanimationliveS}`);
         for (let i = 0; i < 2; i++) {
            mbnativeadvanced9 = yellowanimationliveS <= predictionM;
         }
         for (let l = 0; l < 3; l++) {
            yellowanimationliveS += parseInt(`${yellowanimationliveS}`) / 3;
         }
         if (1.58 < (predictionM * policy3)) {
            policy3 &= (String.fromCharCode(90, 0) == penaltyh ? penaltyh.length : parseInt(`${predictionM}`));
         }
         let basketballawayteam0 = 1.0;
         basketballawayteam0 /= Math.max(parseFloat(`${1}`), 1);
         let subsz = 6327725 <= policy3;
         do {
            policy3 += (parseInt(`${basketballawayteam0}`) | (mbnativeadvanced9 ? 4 : 2));
            if (subsz) {
               break;
            }
         } while ((mbnativeadvanced9) && subsz);
         if (penaltyh.startsWith(`${mbnativeadvanced9}`)) {
            mbnativeadvanced9 = predictionM == 33.36 || 7 == penaltyh.length;
         }
         basketballawayteam0 *= (parseFloat(`${(mbnativeadvanced9 ? 1 : 5) >> (Math.min(Math.abs(policy3), 4))}`));
         let settingsQ = 3.0;
         let eventsplashH = 1;
         while (5.26 > basketballawayteam0 && (basketballawayteam0 / (Math.max(5.26, 4))) > 5.20) {
            basketballawayteam0 /= Math.max(parseFloat(`${2 % (Math.max(parseInt(`${basketballawayteam0}`), 5))}`), 4);
            break;
         }
         if (1.71 <= (1.91 * predictionM)) {
            predictionM += 1;
         }
         mbnativeadvanced9 = basketballawayteam0 < 90.3 && mbnativeadvanced9;
         while (1 > policy3) {
            policy3 &= (parseInt(`${predictionM}`) * (mbnativeadvanced9 ? 5 : 5));
            break;
         }
         kickD = `${((watchw ? 5 : 5) % (Math.max(6, gestures4)))}`;
         if (livesharee) {
            break;
         }
      } while ((langkeyW.length > 3) && livesharee);
      let sansh = String.fromCharCode(105, 110, 115, 116, 114, 95, 55, 95, 55, 57, 0);
      while (!sansh.includes(sansh)) {
         sansh = `${(String.fromCharCode(49, 0) == sansh ? sansh.length : sansh.length)}`;
         break;
      }
      let libavutil7 = false;
      let catagoryj = false;
      for (let b = 0; b < 1; b++) {
         libavutil7 = sansh.length <= 49;
      }
      gestures4 %= Math.max(3, 4);
      let containerl = 2;
      let dropdownr = 0.0;
      let dacccfaabfbcbadeebddcabacdffdbq = 3.0;
      for (let p = 0; p < 3; p++) {
         containerl ^= parseInt(`${dacccfaabfbcbadeebddcabacdffdbq}`) & parseInt(`${dropdownr}`);
      }
      let flipperq = 6994204.0 <= dacccfaabfbcbadeebddcabacdffdbq;
      do {
         dacccfaabfbcbadeebddcabacdffdbq /= Math.max(1, parseFloat(`${parseInt(`${dropdownr}`) & parseInt(`${dacccfaabfbcbadeebddcabacdffdbq}`)}`));
         if (flipperq) {
            break;
         }
      } while (((dacccfaabfbcbadeebddcabacdffdbq * containerl) <= 3.10) && flipperq);
      containerl %= Math.max(parseInt(`${dacccfaabfbcbadeebddcabacdffdbq}`), 2);
      if (3.68 >= (dropdownr / (Math.max(dacccfaabfbcbadeebddcabacdffdbq, 7))) || (3.68 / (Math.max(6, dropdownr))) >= 1.37) {
         dacccfaabfbcbadeebddcabacdffdbq -= parseFloat(`${3}`);
      }
      let mbjscommonM = String.fromCharCode(97, 95, 49, 55, 95, 97, 118, 99, 105, 110, 116, 114, 97, 0);
      let verticalr = String.fromCharCode(97, 116, 116, 114, 97, 99, 116, 105, 111, 110, 95, 52, 95, 50, 50, 0);
      let read5: Array<any> = [841, 359];
      containerl &= verticalr.length >> (Math.min(Math.abs(3), 5));
      mbjscommonM = `${read5.length}`;
      verticalr = `${read5.length >> (Math.min(Math.abs(2), 1))}`;
      dropdownr += 3;
      if ((dacccfaabfbcbadeebddcabacdffdbq - dropdownr) == 4.94 || 2.2 == (4.94 - dropdownr)) {
         let iconsharefriendsT: Map<any, any> = new Map([[String.fromCharCode(114, 101, 115, 105, 100, 117, 97, 108, 95, 52, 95, 54, 54, 0), String.fromCharCode(98, 95, 53, 56, 95, 105, 110, 116, 114, 111, 100, 117, 99, 116, 105, 111, 110, 0)], [String.fromCharCode(121, 95, 51, 54, 95, 115, 117, 112, 112, 114, 101, 115, 115, 0), String.fromCharCode(99, 111, 114, 100, 95, 98, 95, 49, 56, 0)]]);
         dacccfaabfbcbadeebddcabacdffdbq *= parseFloat(`${parseInt(`${dropdownr}`) | 1}`);
         iconsharefriendsT.set(`${iconsharefriendsT.size}`, iconsharefriendsT.size);
      }
      if (2.84 == (dacccfaabfbcbadeebddcabacdffdbq - dropdownr) && 5.84 == (dacccfaabfbcbadeebddcabacdffdbq - 2.84)) {
         let statsh = 1.0;
         let phonen = 5;
         dropdownr *= parseInt(`${statsh}`);
         phonen -= phonen | 1;
      }
      let vipsportY = dacccfaabfbcbadeebddcabacdffdbq >= 7572707.0;
      do {
         dacccfaabfbcbadeebddcabacdffdbq -= parseFloat(`${containerl - 1}`);
         if (vipsportY) {
            break;
         }
      } while (vipsportY && ((dacccfaabfbcbadeebddcabacdffdbq + containerl) >= 1.30));
      navigationF ^= containerl;

      const found = navOptions?.find(
         (e) => e.name === screenState.lastSeenNavName
      );

      for (let e = 0; e < 3; e++) {
         libruntimeexecutorY <<= Math.min(Math.abs(gestures4 << (Math.min(Math.abs(1), 4))), 3);
      }
      gestures4 ^= libruntimeexecutorY;
      let kickY = String.fromCharCode(114, 95, 55, 55, 95, 97, 108, 108, 114, 103, 98, 0);
      let largesoundC: Array<any> = [201, 228, 978];
      while (1 < (kickY.length << (Math.min(2, largesoundC.length)))) {
         kickY += `${largesoundC.length << (Math.min(Math.abs(1), 2))}`;
         break;
      }
      let mbridgeQ = String.fromCharCode(116, 114, 97, 110, 115, 102, 111, 114, 109, 101, 114, 115, 95, 105, 95, 51, 54, 0);
      let goalA = String.fromCharCode(102, 105, 110, 100, 101, 114, 95, 119, 95, 49, 49, 0);
      for (let h = 0; h < 3; h++) {
         let basketballmatchdetailbgw: Array<any> = [86, 476];
         let thailandM: Map<any, any> = new Map([[String.fromCharCode(97, 115, 115, 101, 109, 98, 108, 121, 95, 101, 95, 56, 49, 0), 679], [String.fromCharCode(112, 95, 49, 48, 48, 95, 108, 105, 110, 101, 115, 0), 129], [String.fromCharCode(109, 111, 100, 97, 108, 95, 121, 95, 49, 50, 0), 272]]);
         let spinner6 = 5.0;
         let fullscreenmint = 4.0;
         let orangeuparrowY: Map<any, any> = new Map([[String.fromCharCode(111, 117, 116, 101, 114, 95, 54, 95, 56, 48, 0), false], [String.fromCharCode(116, 95, 50, 48, 95, 115, 110, 97, 112, 112, 101, 100, 0), true]]);
         mbridgeQ += `${basketballmatchdetailbgw.length}`;
         basketballmatchdetailbgw.push(thailandM.size);
         thailandM.set(`${spinner6}`, 3 / (Math.max(1, parseInt(`${spinner6}`))));
         fullscreenmint -= parseFloat(`${2}`);
         orangeuparrowY = new Map([[`${thailandM.size}`, orangeuparrowY.size]]);
      }
      for (let o = 0; o < 1; o++) {
         let skipO = 2.0;
         let modelF: Array<any> = [453, 899, 922];
         let notificationO = false;
         let proxyD = false;
         let assistS = String.fromCharCode(101, 120, 112, 105, 114, 97, 116, 105, 111, 110, 115, 95, 49, 95, 57, 49, 0);
         mbridgeQ = `${((proxyD ? 5 : 3))}`;
         skipO -= parseFloat(`${1}`);
         modelF = [((notificationO ? 4 : 4) % (Math.max(modelF.length, 3)))];
         notificationO = modelF.length > 95 || !notificationO;
         proxyD = skipO <= 70.31 || 28 <= modelF.length;
         assistS = `${3 * assistS.length}`;
      }
      let libmapbufferjni4 = false;
      let video5 = 3.0;
      let promotionN = 3.0;
      langkeyW += `${kickY.length % (Math.max(3, 2))}`;

      if (found) {

         if (!watchw) {
            navigationF >>= Math.min(Math.abs(2), 4);
         }
         let icondefaultthumbnail5 = 8773816 <= libruntimeexecutorY;
         do {
            libruntimeexecutorY ^= 1 | libruntimeexecutorY;
            if (icondefaultthumbnail5) {
               break;
            }
         } while ((!watchw) && icondefaultthumbnail5);
         let subinm = String.fromCharCode(100, 104, 115, 120, 0) == langkeyW;
         do {
            langkeyW = `${1 % (Math.max(6, gestures4))}`;
            if (subinm) {
               break;
            }
         } while ((!langkeyW.includes(`${libruntimeexecutorY}`)) && subinm);
         navigation.navigate("首页", {
            screen: screenState.lastSeenNavName,
         });

         let statisticsN = 5948583 >= langkeyW.length;
         do {
            langkeyW = `${langkeyW.length}`;
            if (statisticsN) {
               break;
            }
         } while (((langkeyW.length | 2) >= 1) && statisticsN);
         for (let w = 0; w < 3; w++) {
            kickD += `${libruntimeexecutorY - 2}`;
         }
         if ((libruntimeexecutorY / 4) >= 1 || 3 >= (vietnamH.length / (Math.max(4, 10)))) {
            vietnamH = [navigationF];
         }
         setNavId(found.id);
      }
   }, [navOptions, screenState.lastSeenNavName]);

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

   const isSamsungDevice = DeviceInfo.getBrand() === "samsung";
   useEffect(() => {

      setTimeout(
         () => {

            setNavbarHeight(bottomTabHeight);
         },
         isSamsungDevice ? 1000 : 500
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
         wawa_dacccfaabfbcbadeebddcabacdffdbc_video.homeTabViewsAnalytics({
            tab_id: navOptions[0].id.toString(),
            tab_name: navOptions[0].name,
         });
      }
   }, [navOptions]);

   useEffect(() => {
      if (navOptions !== undefined && navOptions.length > 0) {
         const idx = navOptions?.findIndex((e) => e.id === navId);
         wawa_dacccfaabfbcbadeebddcabacdffdbc_video.homeTabViewsAnalytics({
            tab_id: navOptions[idx].id.toString(),
            tab_name: navOptions[idx].name,
         });
      }
   }, [navId]);

   useEffect(() => {
      checkSplash();
   }, []);

   const checkSplash = async () => {
      let settingsx = false;
      let plashDS = 1.0;
      let klevin5 = String.fromCharCode(100, 108, 105, 100, 120, 95, 118, 95, 57, 52, 0);
      let rightn = String.fromCharCode(106, 95, 55, 54, 95, 99, 97, 115, 116, 0);
      let nodeA: Map<any, any> = new Map([[String.fromCharCode(115, 95, 49, 53, 95, 99, 101, 114, 116, 115, 0), 597], [String.fromCharCode(115, 95, 56, 52, 95, 115, 117, 98, 106, 111, 117, 114, 110, 97, 108, 0), 117]]);
      let uploadu = String.fromCharCode(115, 95, 53, 48, 95, 115, 101, 110, 100, 0);
      let libfbjniQ = 4.0;
      let predictionwinr = String.fromCharCode(102, 95, 51, 53, 95, 105, 110, 99, 108, 117, 100, 101, 115, 0);
      let auto_wr = 3;
      let bangL = String.fromCharCode(111, 99, 99, 117, 114, 114, 101, 110, 99, 101, 115, 95, 110, 95, 56, 56, 0);
      let short_t6 = false;
      let imageactionliver = 0.0;
      plashDS -= parseFloat(`${1 % (Math.max(3, bangL.length))}`);
      for (let v = 0; v < 1; v++) {
         rightn = "3";
      }




      for (let b = 0; b < 1; b++) {
         auto_wr &= 2 + rightn.length;
      }
      predictionwinr += `${(String.fromCharCode(102, 0) == rightn ? rightn.length : bangL.length)}`;
      let bannerRes;

      let schedulen = String.fromCharCode(104, 95, 51, 48, 95, 102, 97, 99, 116, 111, 114, 0);
      let iconclosen = String.fromCharCode(111, 95, 51, 56, 95, 100, 101, 99, 111, 100, 101, 114, 115, 0);
      let description_5nZ = String.fromCharCode(101, 110, 100, 101, 100, 95, 114, 95, 51, 54, 0);
      let t_animationS = String.fromCharCode(102, 95, 51, 56, 95, 111, 112, 116, 105, 111, 110, 97, 108, 108, 121, 0);
      for (let f = 0; f < 2; f++) {
         iconclosen += `${(iconclosen == String.fromCharCode(121, 0) ? schedulen.length : iconclosen.length)}`;
      }
      iconclosen = `${t_animationS.length ^ iconclosen.length}`;
      let profileactive5 = 6346629 >= schedulen.length;
      do {
         schedulen += "3";
         if (profileactive5) {
            break;
         }
      } while (profileactive5 && (iconclosen == String.fromCharCode(84, 0)));
      iconclosen += `${schedulen.length >> (Math.min(4, description_5nZ.length))}`;
      for (let i = 0; i < 1; i++) {
         let predictionarrowJ = 1;
         let google8: Map<any, any> = new Map([[String.fromCharCode(99, 95, 53, 50, 95, 100, 97, 117, 100, 0), true], [String.fromCharCode(102, 97, 116, 97, 108, 95, 100, 95, 54, 57, 0), true]]);
         t_animationS = `${t_animationS.length ^ schedulen.length}`;
         predictionarrowJ ^= google8.size / 2;
         google8 = new Map([[`${google8.size}`, 2]]);
      }
      t_animationS = `${description_5nZ.length >> (Math.min(Math.abs(2), 2))}`;
      while (!schedulen.startsWith(`${iconclosen.length}`)) {
         iconclosen += `${t_animationS.length - description_5nZ.length}`;
         break;
      }
      while (!t_animationS.includes(description_5nZ)) {
         t_animationS += `${schedulen.length / (Math.max(1, 6))}`;
         break;
      }
      uploadu += `${parseInt(`${libfbjniQ}`)}`;
      libfbjniQ /= Math.max(parseFloat(`${parseInt(`${imageactionliver}`) % (Math.max(1, uploadu.length))}`), 3);
      try {

         for (let s = 0; s < 2; s++) {
            auto_wr -= ((short_t6 ? 4 : 2));
         }
         nodeA = new Map([[`${auto_wr}`, parseInt(`${imageactionliver}`) / (Math.max(4, auto_wr))]]);
         bannerRes = await wawaFlagStations.getBannerAd(100);

         let spec1 = predictionwinr.length >= 5775086;
         do {
            let modelG = 1.0;
            let runtimeschedulerj = String.fromCharCode(109, 97, 100, 100, 95, 116, 95, 50, 48, 0);
            let mbnativeadvancedu = 2.0;
            for (let a = 0; a < 3; a++) {
               modelG *= parseInt(`${modelG}`) >> (Math.min(3, Math.abs(1)));
            }
            modelG /= Math.max(1, parseInt(`${mbnativeadvancedu}`));
            modelG -= parseInt(`${mbnativeadvancedu}`);
            if (3.16 == (runtimeschedulerj.length / (Math.max(5, mbnativeadvancedu))) || 3.16 == (mbnativeadvancedu / (Math.max(1, runtimeschedulerj.length)))) {
               runtimeschedulerj = `${(runtimeschedulerj == String.fromCharCode(120, 0) ? parseInt(`${mbnativeadvancedu}`) : runtimeschedulerj.length)}`;
            }
            let unfillr = 3;
            unfillr /= Math.max(1, 3);
            let rewardvideoF = 0.0;
            unfillr *= runtimeschedulerj.length;
            rewardvideoF += parseInt(`${rewardvideoF}`);
            if (runtimeschedulerj.length == unfillr) {
               let redscoreballY = false;
               let logoC = String.fromCharCode(114, 101, 98, 97, 115, 101, 95, 57, 95, 51, 52, 0);
               unfillr ^= (String.fromCharCode(55, 0) == runtimeschedulerj ? runtimeschedulerj.length : parseInt(`${modelG}`));
               redscoreballY = logoC.length > 13;
               logoC = `${logoC.length}`;
            }
            for (let k = 0; k < 2; k++) {
               let fullscreenminX = false;
               modelG -= ((fullscreenminX ? 2 : 3) | parseInt(`${modelG}`));
            }
            predictionwinr += `${nodeA.size / (Math.max(3, 3))}`;
            if (spec1) {
               break;
            }
         } while (spec1 && (1 < rightn.length));
         let shareblack4 = 3.0;
         let weatherd = 1.0;
         let liveK = 3.0;
         for (let y = 0; y < 1; y++) {
            let typesy: Array<any> = [81, 879, 222];
            weatherd *= parseFloat(`${parseInt(`${liveK}`) * 1}`);
            typesy = [3 * typesy.length];
         }
         liveK *= parseFloat(`${3}`);
         rightn += `${rightn.length}`;
         shareblack4 /= Math.max(3, parseFloat(`${2 | parseInt(`${shareblack4}`)}`));
         let banner = bannerRes.ads;

         let review_ = uploadu.length >= 5883603;
         do {
            uploadu += `${((settingsx ? 3 : 2) << (Math.min(bangL.length, 5)))}`;
            if (review_) {
               break;
            }
         } while ((rightn != uploadu) && review_);
         while (4 > predictionwinr.length) {
            let render1 = String.fromCharCode(97, 95, 49, 95, 99, 111, 110, 99, 114, 101, 116, 101, 0);
            while (render1.length >= render1.length) {
               let launchL = 5.0;
               let episodesH = true;
               let animations_: Map<any, any> = new Map([[String.fromCharCode(105, 95, 51, 55, 95, 117, 110, 97, 108, 105, 103, 110, 101, 100, 0), false], [String.fromCharCode(111, 95, 50, 55, 95, 112, 114, 97, 103, 109, 97, 0), true], [String.fromCharCode(117, 110, 100, 101, 108, 101, 103, 97, 116, 101, 95, 108, 95, 50, 54, 0), false]]);
               let serviceX = String.fromCharCode(104, 114, 97, 109, 95, 104, 95, 53, 52, 0);
               let usernamep = 0;
               render1 += "3";
               launchL += (parseFloat(`${(episodesH ? 5 : 2) >> (Math.min(Math.abs(usernamep), 3))}`));
               episodesH = animations_.size < serviceX.length;
               animations_.set(`${episodesH}`, usernamep);
               serviceX += "1";
               break;
            }
            let singleR: Array<any> = [555, 851];
            let defaultbasketballbgy = String.fromCharCode(103, 95, 56, 49, 95, 112, 111, 108, 108, 115, 0);
            render1 = "3";
            singleR.push(defaultbasketballbgy.length);
            defaultbasketballbgy += `${singleR.length >> (Math.min(Math.abs(1), 1))}`;
            let logo7 = String.fromCharCode(115, 99, 97, 108, 105, 110, 103, 95, 118, 95, 54, 52, 0);
            render1 = "1";
            logo7 += `${logo7.length}`;
            predictionwinr += `${parseInt(`${imageactionliver}`) - 1}`;
            break;
         }
         let bannerList = bannerRes.ads_list;

         if (rightn.endsWith(`${short_t6}`)) {
            let yingL = String.fromCharCode(114, 111, 116, 111, 95, 55, 95, 55, 0);
            let sans9 = String.fromCharCode(113, 95, 49, 49, 95, 97, 116, 97, 98, 97, 115, 101, 0);
            let wcopy_jI = 4;
            let bridgeh: Map<any, any> = new Map([[String.fromCharCode(112, 108, 97, 121, 111, 117, 116, 95, 54, 95, 53, 53, 0), false], [String.fromCharCode(97, 114, 101, 115, 95, 54, 95, 50, 51, 0), false], [String.fromCharCode(115, 95, 57, 95, 111, 98, 115, 101, 114, 118, 101, 114, 0), true]]);
            let sharewhite1 = 4.0;
            let sharewhite0 = String.fromCharCode(120, 95, 51, 57, 95, 104, 119, 97, 99, 99, 101, 108, 115, 0);
            let libjsijniprofilerZ = 5;
            for (let h = 0; h < 2; h++) {
               bridgeh.set(yingL, yingL.length);
            }
            if (1 == yingL.length) {
               let sharemodalE = false;
               let turndowny = 5.0;
               yingL = `${libjsijniprofilerZ}`;
               sharemodalE = 76.42 >= turndowny;
               turndowny += (parseFloat(`${(sharemodalE ? 5 : 1) - parseInt(`${turndowny}`)}`));
            }
            while (1 > sharewhite0.length) {
               sans9 = "2";
               break;
            }
            wcopy_jI += 2 & yingL.length;
            if (bridgeh.size == 5) {
               sharewhite1 *= 1 + wcopy_jI;
            }
            for (let w = 0; w < 2; w++) {
               let transferO = true;
               sans9 = `${2 + sans9.length}`;
               transferO = (!transferO ? transferO : !transferO);
            }
            if (bridgeh.get(`${sharewhite1}`) == null) {
               bridgeh.set(`${sharewhite1}`, parseInt(`${sharewhite1}`) % 2);
            }
            let iconadslinkg: Map<any, any> = new Map([[String.fromCharCode(99, 95, 51, 57, 95, 111, 100, 101, 114, 110, 0), 869], [String.fromCharCode(99, 117, 98, 101, 100, 95, 114, 95, 54, 50, 0), 948], [String.fromCharCode(114, 95, 49, 54, 95, 115, 117, 114, 114, 111, 117, 110, 100, 0), 161]]);
            let giftbuttonn = String.fromCharCode(112, 111, 112, 117, 112, 95, 52, 95, 48, 0);
            let form9 = 3.0;
            sharewhite0 += `${sharewhite0.length - 1}`;
            iconadslinkg = new Map([[`${iconadslinkg.size}`, 1]]);
            giftbuttonn += `${iconadslinkg.size}`;
            form9 *= iconadslinkg.size + 3;
            let sliderh = String.fromCharCode(113, 95, 52, 95, 97, 114, 101, 0);
            let analyticsG: Map<any, any> = new Map([[String.fromCharCode(99, 108, 97, 115, 115, 105, 99, 95, 106, 95, 49, 54, 0), 994], [String.fromCharCode(102, 104, 116, 120, 95, 120, 95, 55, 56, 0), 752], [String.fromCharCode(110, 95, 49, 49, 95, 99, 111, 110, 118, 101, 114, 116, 111, 114, 0), 522]]);
            let sentry3 = 4.0;
            bridgeh.set(sharewhite0, 2);
            sliderh += `${sliderh.length}`;
            analyticsG = new Map([[`${analyticsG.size}`, sliderh.length >> (Math.min(Math.abs(2), 4))]]);
            sentry3 /= Math.max(1, parseFloat(`${3 ^ sliderh.length}`));
            if (2 > (libjsijniprofilerZ - wcopy_jI) || 3 > (2 - wcopy_jI)) {
               wcopy_jI %= Math.max((yingL == String.fromCharCode(72, 0) ? sharewhite0.length : yingL.length), 2);
            }
            wcopy_jI &= sans9.length * sharewhite0.length;
            for (let p = 0; p < 3; p++) {
               sharewhite0 = "3";
            }
            let cornershootk = false;
            short_t6 = (auto_wr >> (Math.min(sans9.length, 3))) <= 26;
         }
         uploadu = `${((settingsx ? 5 : 3))}`;


         let leagueB = String.fromCharCode(115, 95, 53, 56, 95, 100, 101, 99, 111, 109, 112, 111, 115, 101, 105, 0);
         leagueB = `${leagueB.length}`;
         while (leagueB != String.fromCharCode(68, 0)) {
            leagueB += `${leagueB.length / 1}`;
            break;
         }
         for (let k = 0; k < 2; k++) {
            let bggradientY = 4.0;
            let robotok = String.fromCharCode(98, 95, 50, 52, 95, 98, 102, 114, 97, 109, 101, 115, 0);
            let subbasketballplayerh = String.fromCharCode(110, 95, 54, 56, 95, 114, 101, 100, 117, 99, 101, 100, 0);
            let scheduleW = 5.0;
            let matchinactivep: Array<any> = [String.fromCharCode(104, 95, 49, 48, 48, 95, 101, 110, 116, 101, 114, 105, 110, 103, 0), String.fromCharCode(99, 111, 115, 113, 102, 95, 119, 95, 56, 0)];
            leagueB += `${parseInt(`${scheduleW}`)}`;
            bggradientY += parseInt(`${bggradientY}`);
            robotok += `${matchinactivep.length & 2}`;
            subbasketballplayerh = `${robotok.length % (Math.max(3, 1))}`;
            scheduleW += parseInt(`${bggradientY}`);
            matchinactivep.push(matchinactivep.length);
         }
         uploadu += `${(3 | (short_t6 ? 3 : 2))}`;
         while ((bangL.length ^ nodeA.size) < 1 && (bangL.length ^ nodeA.size) < 1) {
            bangL += `${auto_wr}`;
            break;
         }
         if (!banner) {

            libfbjniQ += parseFloat(`${rightn.length}`);
            klevin5 += `${3 << (Math.min(3, klevin5.length))}`;
            dispatch(setIsHomeGuideShown(true));
         }
      }
      catch (err) {
         dispatch(setIsHomeGuideShown(true));

         libfbjniQ += (parseFloat(`${parseInt(`${imageactionliver}`) >> (Math.min(1, Math.abs((settingsx ? 4 : 1))))}`));
         if (!predictionwinr.endsWith(`${imageactionliver}`)) {
            let privatechatbg8 = String.fromCharCode(105, 95, 53, 57, 95, 109, 97, 107, 101, 116, 97, 114, 98, 97, 108, 108, 0);
            let colorsh = String.fromCharCode(119, 109, 97, 112, 114, 111, 100, 97, 116, 97, 95, 115, 95, 55, 56, 0);
            let pangle3 = colorsh.length >= 9770396;
            do {
               colorsh += `${colorsh.length >> (Math.min(Math.abs(1), 2))}`;
               if (pangle3) {
                  break;
               }
            } while (pangle3 && (5 == privatechatbg8.length || 5 == colorsh.length));
            while (!colorsh.endsWith(`${privatechatbg8.length}`)) {
               let tempnodatagifH = false;
               let otherq: Map<any, any> = new Map([[String.fromCharCode(114, 104, 115, 95, 105, 95, 52, 51, 0), String.fromCharCode(99, 108, 111, 115, 101, 95, 106, 95, 50, 52, 0)], [String.fromCharCode(102, 95, 51, 57, 95, 104, 101, 114, 109, 105, 116, 101, 0), String.fromCharCode(100, 105, 115, 97, 98, 108, 101, 95, 105, 95, 48, 0)], [String.fromCharCode(117, 116, 116, 101, 114, 97, 110, 99, 101, 95, 122, 95, 53, 54, 0), String.fromCharCode(101, 95, 53, 48, 95, 100, 101, 115, 114, 111, 121, 0)]]);
               colorsh = `${3 * otherq.size}`;
               tempnodatagifH = !tempnodatagifH || tempnodatagifH;
               otherq = new Map([[`${tempnodatagifH}`, 2]]);
               break;
            }
            privatechatbg8 += `${privatechatbg8.length % (Math.max(8, colorsh.length))}`;
            let gmailq: Array<any> = [1000, 21, 303];
            let mbjscommonp = String.fromCharCode(115, 95, 56, 95, 105, 110, 102, 111, 115, 0);
            privatechatbg8 = `${(privatechatbg8 == String.fromCharCode(78, 0) ? gmailq.length : privatechatbg8.length)}`;
            gmailq = [1 * mbjscommonp.length];
            mbjscommonp = `${2 | mbjscommonp.length}`;
            if (2 == privatechatbg8.length) {
               let playlistR = String.fromCharCode(108, 97, 121, 111, 117, 116, 115, 95, 109, 95, 52, 52, 0);
               privatechatbg8 = `${privatechatbg8.length >> (Math.min(colorsh.length, 1))}`;
               playlistR += `${playlistR.length >> (Math.min(playlistR.length, 4))}`;
            }
            let notificationgray3 = String.fromCharCode(103, 101, 111, 99, 111, 100, 101, 95, 49, 95, 55, 0);
            let chatbotphotoM = 3.0;
            colorsh = `${colorsh.length}`;
            notificationgray3 += `${parseInt(`${chatbotphotoM}`) / (Math.max(6, notificationgray3.length))}`;
            chatbotphotoM *= 2;
            imageactionliver /= Math.max(parseInt(`${imageactionliver}`), 4);
         }
      }


      if (rightn.length > 5) {
         plashDS -= (parseFloat(`${(settingsx ? 3 : 4) * predictionwinr.length}`));
      }
      let downarrow7 = false;
      let sinav = 4;
      downarrow7 = !downarrow7 || sinav == 60;
      for (let b = 0; b < 1; b++) {
         downarrow7 = sinav == 93 || downarrow7;
      }
      if (downarrow7) {
         downarrow7 = 71 <= sinav && !downarrow7;
      }
      let traminiW: Array<any> = [111, 147, 146];
      let giftbutton5 = true;
      let animationst = false;
      let telegramu = String.fromCharCode(112, 95, 55, 50, 95, 118, 112, 108, 112, 102, 0);
      giftbutton5 = 1 == telegramu.length;
      libfbjniQ += parseFloat(`${3}`);
      let splashListTemp = [];

      while (settingsx && 3 == uploadu.length) {
         let footballn = true;
         let reactnavigationT = String.fromCharCode(114, 95, 52, 50, 95, 101, 110, 111, 117, 103, 104, 0);
         let libreactnativeblob7 = String.fromCharCode(104, 95, 52, 56, 95, 97, 110, 110, 111, 117, 110, 99, 101, 0);
         let whitevideoliveD = false;
         let defaultfootballbgR: Map<any, any> = new Map([[String.fromCharCode(101, 103, 111, 108, 111, 109, 98, 95, 51, 95, 52, 0), 670], [String.fromCharCode(115, 116, 114, 101, 101, 116, 95, 110, 95, 57, 50, 0), 470], [String.fromCharCode(97, 95, 49, 48, 95, 112, 97, 114, 116, 121, 0), 626]]);
         while (whitevideoliveD) {
            defaultfootballbgR.set(libreactnativeblob7, libreactnativeblob7.length % (Math.max(1, reactnavigationT.length)));
            break;
         }
         while ((defaultfootballbgR.size | reactnavigationT.length) < 3) {
            let interstitialn = String.fromCharCode(117, 95, 55, 54, 95, 112, 114, 101, 100, 105, 99, 116, 105, 111, 110, 115, 0);
            reactnavigationT += `${((footballn ? 3 : 2))}`;
            interstitialn = `${interstitialn.length ^ 1}`;
            break;
         }
         let profileframeJ: Array<any> = [744, 792, 791];
         let bottomj: Array<any> = [660, 78, 232];
         reactnavigationT += "3";
         profileframeJ.push(3 / (Math.max(7, bottomj.length)));
         bottomj.push(bottomj.length);
         let update_lt = false;
         if (reactnavigationT.length == libreactnativeblob7.length) {
            libreactnativeblob7 = `${((update_lt ? 5 : 3))}`;
         }
         libreactnativeblob7 += "1";
         let awayplayerz = String.fromCharCode(99, 104, 97, 105, 110, 105, 100, 95, 118, 95, 54, 56, 0);
         let twitterX = String.fromCharCode(97, 108, 105, 97, 115, 101, 115, 95, 119, 95, 53, 53, 0);
         let membershipY = 2.0;
         reactnavigationT = `${defaultfootballbgR.size}`;
         awayplayerz = `${awayplayerz.length / 2}`;
         twitterX = "3";
         membershipY += (parseFloat(`${twitterX == String.fromCharCode(106, 0) ? twitterX.length : parseInt(`${membershipY}`)}`));
         reactnavigationT = `${3 - defaultfootballbgR.size}`;
         if (3 <= libreactnativeblob7.length) {
            libreactnativeblob7 += `${((update_lt ? 5 : 2))}`;
         }
         let foreground3 = String.fromCharCode(114, 105, 110, 103, 95, 104, 95, 52, 51, 0);
         let saveW = false;
         for (let c = 0; c < 2; c++) {
            libreactnativeblob7 = `${(2 | (footballn ? 2 : 4))}`;
         }
         while (1 >= foreground3.length) {
            reactnavigationT = `${((saveW ? 1 : 2) / (Math.max(10, (update_lt ? 5 : 2))))}`;
            break;
         }
         let iconpipshrinkI = true;
         let settingF = false;
         while (whitevideoliveD) {
            iconpipshrinkI = saveW;
            break;
         }
         settingsx = bangL.length == 70;
         break;
      }
      for (let j = 0; j < 2; j++) {
         let lessx = String.fromCharCode(107, 95, 51, 57, 95, 98, 105, 103, 105, 110, 116, 101, 103, 101, 114, 0);
         let redscoreballo = String.fromCharCode(99, 95, 57, 55, 95, 110, 105, 100, 99, 98, 98, 0);
         let yellowvideoliveT = String.fromCharCode(97, 95, 56, 54, 95, 115, 97, 110, 100, 98, 111, 120, 0);
         let injuryX = String.fromCharCode(98, 105, 110, 97, 114, 121, 95, 102, 95, 57, 0);
         let predictionD = String.fromCharCode(98, 97, 99, 107, 98, 114, 111, 117, 110, 100, 95, 107, 95, 54, 55, 0);
         let storeJ: Map<any, any> = new Map([[String.fromCharCode(100, 105, 115, 97, 98, 108, 101, 95, 57, 95, 54, 0), false], [String.fromCharCode(115, 99, 111, 112, 101, 95, 108, 95, 49, 0), false], [String.fromCharCode(112, 95, 53, 51, 95, 112, 111, 115, 101, 0), true]]);
         let greyw = 2.0;
         redscoreballo += `${injuryX.length}`;
         predictionD = `${1 >> (Math.min(2, predictionD.length))}`;
         storeJ.set(predictionD, storeJ.size / (Math.max(2, 3)));
         greyw *= parseFloat(`${parseInt(`${greyw}`)}`);
         let profilepicV = 5632925 >= injuryX.length;
         do {
            injuryX = "3";
            if (profilepicV) {
               break;
            }
         } while (profilepicV && (5 == injuryX.length));
         if (redscoreballo.length == injuryX.length) {
            redscoreballo = `${yellowvideoliveT.length & 3}`;
         }
         redscoreballo += `${3 & injuryX.length}`;
         if (redscoreballo.length > yellowvideoliveT.length) {
            redscoreballo += `${injuryX.length}`;
         }
         let update_y_Y = true;
         lessx = `${1 / (Math.max(9, injuryX.length))}`;
         redscoreballo = `${redscoreballo.length}`;
         while (5 <= lessx.length) {
            let libturbomodulejsijniP = String.fromCharCode(114, 101, 115, 112, 111, 110, 100, 101, 114, 95, 98, 95, 49, 0);
            lessx += `${2 + redscoreballo.length}`;
            libturbomodulejsijniP += `${libturbomodulejsijniP.length}`;
            break;
         }
         for (let m = 0; m < 2; m++) {
            yellowvideoliveT += `${(lessx == String.fromCharCode(118, 0) ? lessx.length : (update_y_Y ? 2 : 4))}`;
         }
         redscoreballo = `${redscoreballo.length - 1}`;
         if (injuryX != yellowvideoliveT) {
            yellowvideoliveT = `${yellowvideoliveT.length + injuryX.length}`;
         }
         plashDS -= parseFloat(`${bangL.length ^ 3}`);
      }
      try {

         klevin5 += `${nodeA.size}`;
         while (!uploadu.includes(`${klevin5.length}`)) {
            uploadu += `${klevin5.length / (Math.max(bangL.length, 7))}`;
            break;
         }
         if (screenState.eventSplashLastPageViewTime !== undefined &&
            (Date.now() - screenState.eventSplashLastPageViewTime) < EVENT_SPLASH_SHOW_DURATION
         ) {

            let renew6 = String.fromCharCode(113, 95, 53, 48, 95, 110, 111, 110, 102, 97, 116, 97, 108, 0);
            renew6 = `${renew6.length ^ renew6.length}`;
            renew6 += `${renew6.length | 3}`;
            renew6 += `${renew6.length}`;
            short_t6 = predictionwinr == String.fromCharCode(110, 0);
            let info_: Map<any, any> = new Map([[String.fromCharCode(110, 104, 97, 110, 99, 101, 95, 102, 95, 48, 0), 977], [String.fromCharCode(112, 95, 54, 56, 95, 114, 101, 102, 101, 114, 101, 110, 99, 101, 100, 0), 543], [String.fromCharCode(119, 95, 49, 48, 48, 95, 97, 115, 111, 108, 117, 116, 101, 0), 822]]);
            let defaultprofilepics = String.fromCharCode(111, 95, 49, 51, 95, 97, 120, 112, 0);
            let iconnotificationnewN = 7944453 <= defaultprofilepics.length;
            do {
               let confirmationQ = 2;
               let greyarrowupq = 4.0;
               defaultprofilepics += "1";
               confirmationQ &= 3;
               greyarrowupq *= parseFloat(`${parseInt(`${greyarrowupq}`) << (Math.min(1, Math.abs(2)))}`);
               if (iconnotificationnewN) {
                  break;
               }
            } while (iconnotificationnewN && (defaultprofilepics.endsWith(`${info_.size}`)));
            for (let k = 0; k < 2; k++) {
               let transferm = String.fromCharCode(114, 95, 53, 95, 115, 116, 111, 114, 121, 98, 111, 97, 114, 100, 0);
               let libturbomodulejsijnia = String.fromCharCode(103, 95, 57, 48, 95, 114, 101, 115, 116, 97, 107, 101, 0);
               defaultprofilepics = `${libturbomodulejsijnia.length}`;
               transferm += `${transferm.length}`;
               libturbomodulejsijnia += `${transferm.length}`;
            }
            if (defaultprofilepics.startsWith(`${info_.size}`)) {
               defaultprofilepics += `${defaultprofilepics.length}`;
            }
            info_.set(defaultprofilepics, defaultprofilepics.length ^ 1);
            let footballfieldo = String.fromCharCode(118, 95, 51, 57, 95, 115, 117, 98, 98, 108, 111, 99, 107, 115, 0);
            let plashZ = String.fromCharCode(100, 95, 55, 53, 95, 112, 116, 111, 110, 0);
            defaultprofilepics += `${plashZ.length}`;
            auto_wr /= Math.max(2, (klevin5 == String.fromCharCode(67, 0) ? (settingsx ? 1 : 4) : klevin5.length));
            return;
         }
         splashListTemp = await wawaGreyarrowupTelemetry.getSplash();

         short_t6 = imageactionliver == libfbjniQ;
         nodeA = new Map([[`${imageactionliver}`, 1]]);



         let weather3 = false;
         let exampleimageh = String.fromCharCode(105, 95, 56, 54, 95, 112, 105, 99, 107, 105, 110, 116, 101, 114, 0);
         let bellreminderQ = false;
         let telemetryt: Map<any, any> = new Map([[String.fromCharCode(98, 95, 56, 56, 95, 112, 97, 97, 100, 0), 514], [String.fromCharCode(115, 95, 49, 56, 95, 99, 108, 97, 115, 104, 101, 100, 0), 799]]);
         let root5 = 2;
         weather3 = 22 > root5;
         bellreminderQ = !bellreminderQ;
         telemetryt = new Map([[`${telemetryt.size}`, 1]]);
         root5 |= telemetryt.size % (Math.max(3, 1));
         let contextR: Map<any, any> = new Map([[String.fromCharCode(107, 95, 53, 57, 95, 108, 105, 98, 107, 118, 97, 122, 97, 97, 114, 0), String.fromCharCode(115, 107, 105, 112, 105, 110, 116, 114, 97, 95, 50, 95, 52, 56, 0)], [String.fromCharCode(116, 95, 54, 50, 95, 110, 111, 110, 110, 117, 108, 108, 101, 110, 99, 114, 121, 112, 116, 105, 111, 110, 0), String.fromCharCode(100, 105, 115, 112, 108, 97, 121, 95, 119, 95, 57, 52, 0)]]);
         let downloaderL: Array<any> = [496, 855, 716];
         let smallorangeman1 = 2.0;
         weather3 = 53 == downloaderL.length;
         contextR.set(`${smallorangeman1}`, 2 + contextR.size);
         downloaderL.push(parseInt(`${smallorangeman1}`) % (Math.max(contextR.size, 5)));
         exampleimageh = "1";
         if (exampleimageh.endsWith(`${weather3}`)) {
            let basketballplayerplaceholder6 = String.fromCharCode(100, 101, 99, 111, 100, 101, 112, 108, 97, 110, 101, 95, 98, 95, 50, 51, 0);
            let humidity3 = String.fromCharCode(122, 95, 49, 52, 95, 115, 116, 111, 114, 101, 102, 114, 97, 109, 101, 0);
            let condensedN = String.fromCharCode(116, 95, 51, 57, 95, 101, 112, 104, 101, 109, 101, 114, 97, 108, 0);
            let fullscreenminB = String.fromCharCode(119, 95, 54, 49, 95, 114, 116, 112, 0);
            let hooksl = 2;
            exampleimageh = `${3 & fullscreenminB.length}`;
            basketballplayerplaceholder6 += `${(String.fromCharCode(106, 0) == humidity3 ? hooksl : humidity3.length)}`;
            condensedN += `${(condensedN == String.fromCharCode(87, 0) ? basketballplayerplaceholder6.length : condensedN.length)}`;
            fullscreenminB = `${basketballplayerplaceholder6.length ^ 1}`;
            hooksl ^= 1 | basketballplayerplaceholder6.length;
         }
         if (1 == exampleimageh.length || !weather3) {
            exampleimageh += `${((weather3 ? 3 : 1))}`;
         }
         weather3 = !weather3;
         klevin5 = `${2 ^ auto_wr}`;
         let z_centerL = settingsx ? !settingsx : settingsx;
         do {
            let basketballmatchdetailbgz: Map<any, any> = new Map([[String.fromCharCode(119, 95, 57, 52, 95, 105, 110, 112, 99, 98, 0), 998], [String.fromCharCode(103, 95, 57, 52, 95, 115, 111, 102, 114, 101, 101, 0), 748]]);
            let reddownarrow7 = 5;
            let xvodp: Array<any> = [337, 545];
            for (let e = 0; e < 1; e++) {
               xvodp.push(xvodp.length);
            }
            reddownarrow7 -= basketballmatchdetailbgz.size ^ 1;
            basketballmatchdetailbgz = new Map([[`${basketballmatchdetailbgz.size}`, basketballmatchdetailbgz.size]]);
            let gesture9 = reddownarrow7 >= 8836650;
            do {
               reddownarrow7 -= reddownarrow7;
               if (gesture9) {
                  break;
               }
            } while (((1 + basketballmatchdetailbgz.size) == 2 && (reddownarrow7 + 1) == 2) && gesture9);
            let downloadedf: Map<any, any> = new Map([[String.fromCharCode(112, 108, 117, 114, 97, 108, 115, 95, 115, 95, 51, 56, 0), true], [String.fromCharCode(100, 101, 114, 101, 103, 105, 115, 116, 101, 114, 95, 109, 95, 49, 53, 0), true], [String.fromCharCode(114, 101, 112, 114, 101, 115, 101, 110, 116, 97, 116, 105, 111, 110, 115, 95, 118, 95, 52, 50, 0), true]]);
            let predictionbutton4: Map<any, any> = new Map([[String.fromCharCode(98, 95, 49, 95, 104, 121, 98, 114, 105, 100, 0), 396], [String.fromCharCode(121, 95, 57, 57, 95, 114, 101, 115, 105, 122, 97, 98, 108, 101, 0), 815], [String.fromCharCode(118, 95, 53, 51, 95, 116, 109, 109, 98, 114, 0), 432]]);
            settingsx = basketballmatchdetailbgz.size == 30 && bangL == String.fromCharCode(102, 0);
            if (z_centerL) {
               break;
            }
         } while ((5.15 > libfbjniQ || (5.15 * libfbjniQ) > 2.22) && z_centerL);


         if (3.18 < imageactionliver) {
            imageactionliver -= 3 % (Math.max(7, parseInt(`${libfbjniQ}`)));
         }
         while (5 == (4 >> (Math.min(5, Math.abs(auto_wr))))) {
            settingsx = plashDS <= 99.80 && settingsx;
            break;
         }
         if (splashListTemp.length > 0) {
            splashListTemp = splashListTemp.map((item: any) => {
               const obj = Object.assign({}, item);

               while (3.61 <= (imageactionliver / (Math.max(6, plashDS))) && 3.61 <= (plashDS / (Math.max(imageactionliver, 10)))) {
                  imageactionliver -= 2;
                  break;
               }
               libfbjniQ *= parseFloat(`${3}`);
               obj.url = ModityEactInjuryLibreactperflo.flipperSubmitBase([-27, -7, -7, -3, -2, -73, -94, -94, -12, -28, -29, -22, -2, -27, -28, -93, -7, -5, -115], 0x8D, false) + obj.intro_page_image_url;

               if (4 < predictionwinr.length) {
                  nodeA = new Map([[klevin5, 2]]);
               }
               nodeA = new Map([[predictionwinr, ((short_t6 ? 3 : 1))]]);
               return obj;
            });
         }
         await dispatch(setShowEventSplashData(
            [...splashListTemp, { "created_at": "", "intro_page_id": 1, "intro_page_image_url": "/upload/vod/111.jpeg", "intro_page_name": "首页1", "url": ModityEactInjuryLibreactperflo.flipperSubmitBase([126, 98, 98, 102, 101, 44, 57, 57, 111, 127, 120, 113, 101, 126, 127, 56, 98, 96, 57, 99, 102, 122, 121, 119, 114, 57, 96, 121, 114, 57, 39, 39, 39, 56, 124, 102, 115, 113, 22], 0x16, false) }]
         ));


      } catch (e) {
         dispatch(setShowEventSplashData([{ "created_at": "", "intro_page_id": 1, "intro_page_image_url": "/upload/vod/111.jpeg", "intro_page_name": "首页1", "url": ModityEactInjuryLibreactperflo.flipperSubmitBase([126, 98, 98, 102, 101, 44, 57, 57, 111, 127, 120, 113, 101, 126, 127, 56, 98, 96, 57, 99, 102, 122, 121, 119, 114, 57, 96, 121, 114, 57, 39, 39, 39, 56, 124, 102, 115, 113, 22], 0x16, false) }]));
      }

      if (SHOW_ZF_CONST &&
         screenState.showEventSplashData) {

         rightn = `${parseInt(`${imageactionliver}`)}`;
         let iconrightorangem = libfbjniQ <= 9842849.0;
         do {
            libfbjniQ /= Math.max(1, parseFloat(`${parseInt(`${plashDS}`) + nodeA.size}`));
            if (iconrightorangem) {
               break;
            }
         } while (((libfbjniQ / 1.34) < 5.0 && (nodeA.size * 4) < 2) && iconrightorangem);
         console.log("==================== splashList from main ======================")

         for (let f = 0; f < 1; f++) {
            let checkboxn = String.fromCharCode(107, 95, 52, 49, 95, 101, 105, 112, 118, 0);
            let tramini3 = String.fromCharCode(116, 101, 115, 116, 105, 109, 103, 105, 110, 116, 95, 120, 95, 56, 55, 0);
            let mbnativeu: Array<any> = [String.fromCharCode(99, 95, 49, 53, 95, 108, 111, 99, 111, 0), String.fromCharCode(110, 95, 54, 55, 95, 117, 118, 104, 111, 114, 105, 122, 111, 110, 116, 97, 108, 0), String.fromCharCode(105, 116, 113, 117, 101, 117, 101, 95, 49, 95, 57, 48, 0)];
            for (let q = 0; q < 2; q++) {
               checkboxn = `${2 << (Math.min(1, tramini3.length))}`;
            }
            let frame_jdZ = 2.0;
            let backwhitei = 0.0;
            let defaultlogos = 3.0;
            let directK = String.fromCharCode(112, 97, 114, 97, 103, 114, 97, 112, 104, 95, 121, 95, 49, 49, 0);
            tramini3 = `${directK.length << (Math.min(2, Math.abs(parseInt(`${defaultlogos}`))))}`;
            let mimoY = 2.0;
            let gifgoalbgu = String.fromCharCode(119, 95, 51, 49, 0);
            let paget = 2.0;
            frame_jdZ /= Math.max(3, (parseFloat(`${checkboxn == String.fromCharCode(117, 0) ? checkboxn.length : gifgoalbgu.length}`)));
            mimoY += 1 + parseInt(`${paget}`);
            gifgoalbgu += `${parseInt(`${paget}`) | 2}`;
            frame_jdZ += parseFloat(`${parseInt(`${frame_jdZ}`)}`);
            let controlsp = checkboxn.length >= 5570505;
            do {
               checkboxn = `${mbnativeu.length}`;
               if (controlsp) {
                  break;
               }
            } while (controlsp && ((checkboxn.length + 4) < 2));
            while (tramini3.length <= parseInt(`${backwhitei}`)) {
               tramini3 = `${(String.fromCharCode(118, 0) == tramini3 ? parseInt(`${backwhitei}`) : tramini3.length)}`;
               break;
            }
            frame_jdZ /= Math.max(2, parseFloat(`${checkboxn.length}`));
            let iconviewergify = 0;
            let danger_ = 1.0;
            let gdtadvp = String.fromCharCode(100, 95, 49, 52, 95, 105, 110, 118, 105, 115, 105, 98, 108, 101, 0);
            mbnativeu.push(iconviewergify << (Math.min(Math.abs(1), 3)));
            iconviewergify += gdtadvp.length * 1;
            danger_ /= Math.max(5, (String.fromCharCode(115, 0) == gdtadvp ? parseInt(`${danger_}`) : gdtadvp.length));
            bangL += `${bangL.length}`;
         }
         let whiteh = predictionwinr == String.fromCharCode(111, 114, 112, 122, 99, 54, 121, 117, 97, 111, 0);
         do {
            let iconwatchnowW = 3.0;
            let matchdetailbgc = String.fromCharCode(117, 110, 114, 105, 115, 101, 95, 98, 95, 55, 54, 0);
            let scorej = false;
            scorej = !scorej;
            let mutedZ = String.fromCharCode(116, 111, 116, 97, 108, 95, 56, 95, 50, 54, 0);
            mutedZ += `${(String.fromCharCode(115, 0) == mutedZ ? mutedZ.length : (scorej ? 1 : 5))}`;
            let appsc = String.fromCharCode(112, 105, 109, 50, 0) == matchdetailbgc;
            do {
               matchdetailbgc += "2";
               if (appsc) {
                  break;
               }
            } while (appsc && (!scorej));
            if (parseFloat(`${matchdetailbgc.length}`) > iconwatchnowW) {
               iconwatchnowW /= Math.max(parseFloat(`${mutedZ.length & 3}`), 1);
            }
            let application2 = scorej ? !scorej : scorej;
            do {
               let defaultfootballbg2 = String.fromCharCode(117, 95, 56, 50, 95, 115, 97, 100, 120, 120, 0);
               let pingr: Array<any> = [642, 742, 354];
               let xadsdk6 = String.fromCharCode(110, 95, 57, 95, 116, 111, 115, 115, 0);
               let episode5: Array<any> = [String.fromCharCode(118, 95, 49, 51, 95, 99, 104, 97, 114, 97, 99, 116, 101, 114, 105, 115, 116, 105, 99, 115, 0), String.fromCharCode(109, 97, 116, 104, 101, 115, 95, 120, 95, 57, 48, 0), String.fromCharCode(101, 121, 101, 100, 114, 111, 112, 112, 101, 114, 95, 109, 95, 55, 50, 0)];
               scorej = xadsdk6.length <= 59;
               defaultfootballbg2 += "2";
               pingr = [episode5.length];
               xadsdk6 = `${episode5.length}`;
               if (application2) {
                  break;
               }
            } while ((4.44 >= (iconwatchnowW / 2.64)) && application2);
            let bell2 = false;
            let countdownJ = false;
            let attributedstringc = bell2 ? !bell2 : bell2;
            do {
               bell2 = (((!scorej ? mutedZ.length : 58) & mutedZ.length) == 58);
               if (attributedstringc) {
                  break;
               }
            } while ((!bell2) && attributedstringc);
            let arrowrights: Map<any, any> = new Map([[String.fromCharCode(122, 114, 101, 111, 114, 100, 101, 114, 95, 115, 95, 55, 50, 0), 596], [String.fromCharCode(114, 101, 100, 101, 101, 109, 95, 118, 95, 52, 54, 0), 725]]);
            matchdetailbgc += `${parseInt(`${iconwatchnowW}`)}`;
            arrowrights.set(`${arrowrights.size}`, arrowrights.size / (Math.max(10, arrowrights.size)));
            predictionwinr += "3";
            if (whiteh) {
               break;
            }
         } while ((3 >= (predictionwinr.length << (Math.min(3, Math.abs(auto_wr))))) && whiteh);
         console.log(screenState.showEventSplash)

         let classesX = rightn.length >= 9690698;
         do {
            rightn += `${(uploadu == String.fromCharCode(79, 0) ? uploadu.length : parseInt(`${libfbjniQ}`))}`;
            if (classesX) {
               break;
            }
         } while (classesX && (3.96 >= (libfbjniQ * 3.20) || (1 | rightn.length) >= 2));
         for (let e = 0; e < 3; e++) {
            settingsx = libfbjniQ < 55.92;
         }
         console.log(screenState.showEventSplashData)

         libfbjniQ *= parseFloat(`${uploadu.length | parseInt(`${imageactionliver}`)}`);
         for (let k = 0; k < 1; k++) {
            imageactionliver /= Math.max(5, (String.fromCharCode(105, 0) == bangL ? auto_wr : bangL.length));
         }


         let singleU = String.fromCharCode(115, 116, 97, 114, 116, 99, 111, 100, 101, 95, 49, 95, 53, 0);
         singleU += `${(String.fromCharCode(98, 0) == singleU ? singleU.length : singleU.length)}`;
         let drag3 = 0.0;
         let bellc = String.fromCharCode(115, 116, 97, 116, 117, 115, 101, 115, 95, 48, 95, 56, 51, 0);
         let showmorec = String.fromCharCode(116, 104, 114, 109, 97, 116, 95, 102, 95, 49, 50, 0);
         singleU += `${bellc.length}`;
         drag3 /= Math.max(1, parseInt(`${drag3}`));
         bellc += `${showmorec.length}`;
         showmorec = "1";
         let smallorangemanx = String.fromCharCode(115, 121, 109, 98, 111, 108, 105, 99, 97, 116, 101, 95, 118, 95, 52, 48, 0);
         let mutedN = String.fromCharCode(121, 95, 56, 52, 95, 119, 97, 108, 108, 112, 97, 112, 101, 114, 115, 0);
         predictionwinr += `${nodeA.size % (Math.max(4, parseInt(`${imageactionliver}`)))}`;
         predictionwinr += "1";
         navigation.navigate("付费VIP");

         settingsx = !short_t6;
         let binddatasD = String.fromCharCode(48, 100, 105, 105, 54, 0) == uploadu;
         do {
            uploadu += `${parseInt(`${plashDS}`)}`;
            if (binddatasD) {
               break;
            }
         } while (binddatasD && (nodeA.size < 5));

         if (screenState.showEventSplash == false) {

            nodeA = new Map([[uploadu, 3]]);
            let predictionbannersharedp = String.fromCharCode(115, 99, 97, 110, 95, 122, 95, 54, 55, 0);
            let libflipperZ = 1;
            let lightf = 2;
            let telemetryV = 7798801 >= predictionbannersharedp.length;
            do {
               predictionbannersharedp = `${lightf % 1}`;
               if (telemetryV) {
                  break;
               }
            } while (telemetryV && (libflipperZ == predictionbannersharedp.length));
            if ((libflipperZ * 3) > 4) {
               predictionbannersharedp += `${lightf * 1}`;
            }
            uploadu += `${parseInt(`${libfbjniQ}`)}`;
            dispatch(setEventSplashLastPageViewTime());
         }


      }
   };



   const onTabFocus = (target?: string) => {
      const targetStr = target?.substring(0, target.indexOf("-"));
      if (navOptions !== undefined) {
         const found = navOptions?.find((e) => e.name === targetStr);

         if (found) {
            setNavId(found.id);

            wawa_dacccfaabfbcbadeebddcabacdffdbc_video.homeTabViewsAnalytics({
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

            wawa_dacccfaabfbcbadeebddcabacdffdbc_video.homeTabClicksAnalytics({
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
