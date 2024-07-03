import React, { useCallback, useEffect, useState, memo, useContext } from "react";
import { Dimensions, Platform, StyleSheet, View } from "react-native";
import ScreenContainer from "../components/container/yys_executor_expand";
import { useFocusEffect, useTheme } from "@react-navigation/native";
import { useQuery, useQueries, UseQueryResult } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import {
  yys_NotificationGray,
} from "@type/yys_libzeus";
import {
  BottomTabScreenProps,
  useBottomTabBarHeight,
} from "@react-navigation/bottom-tabs";
import {
  ANDROID_HOME_PAGE_POP_UP_ADS,
  API_DOMAIN,
  IOS_HOME_PAGE_POP_UP_ADS,
} from "@utility/yys_ajax_switch";
import CatagoryHome from "../components/container/yys_dycreator_libavformat";
import RecommendationHome from "../components/container/yys_watch_componentregistry";
import HomeHeader from "../components/header/yys_classes_count_header";
import FastImage from "../components/common/yys_vertical_collection";
import { useIsFocused } from "@react-navigation/native";
import NoConnection from "./../components/common/yys_armva_classes";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";
import { useAppSelector, useAppDispatch, useSelector } from "@hooks/yys_frame";
import { yys_MintegralLibavdevice } from "@redux/yys_sport_shrink";
import { yys_Videocommon } from "@redux/reducers/yys_libavdevice";
import HomeNav from "../components/tabNavigate/yys_sheet_view";

import {
  ATRNSDK,
  ATInterstitialRNSDK,
  ATBannerRNSDK,
} from "./../../../AnyThinkAds/yys_recommendation";
import { AdsBannerContext } from "../../contexts/yys_about";

import yys_event_common from "../../../Umeng/yys_event_common";
import { yys_Context } from "@api";
import DeviceInfo from "react-native-device-info";
import { yys_HejiCricket } from "@redux/reducers/yys_privacy_round";
import { yys_RelatedTooltips } from "@models/yys_project_pagination";
import YysLoadingIndex from "../../components/common/yys_loading_index";

function yys_dycreator({ navigation }: BottomTabScreenProps<any>) {
  const isFocused = useIsFocused();
  const { colors, spacing } = useTheme();
  const [navId, setNavId] = useState(0);
  const queryClient = useQueryClient();
  const [isOffline, setIsOffline] = useState(false);
  const [showHomeLoading, setShowHomeLoading] = useState(true);
  const settingsReducer: yys_Videocommon = useAppSelector(
    ({ settingsReducer }: yys_MintegralLibavdevice) => settingsReducer
  );
  const userState = useSelector<yys_HejiCricket>('userReducer');
  const isVip = yys_RelatedTooltips.isVip(userState.user);
  const bottomTabHeight = useBottomTabBarHeight();
  const [loadingError, setLoadingError] = useState('');

  const { data: navOptions, refetch } = useQuery({
    queryKey: ["HomePageNavOptions"],
    queryFn: () => yys_Context.getHomeNav(),
  });

  const fetchData = useCallback( async (id: number) =>  {
   try {
      return await yys_Context.getHomePages(id, isVip);
   } catch (error: any) {
      setLoadingError('网络请求错误-' + (error?.message ?? '未知错误'));
      return undefined;
   }
  }, []);

  const data = useQueries({
    queries: navOptions
      ? navOptions?.map((x: any) => ({
        queryKey: ["HomePage", x.id],
        queryFn: () => fetchData(x.id),
      }))
      : [],
  });

  const checkConnection = async () => {
       let nterstitialv = 0;
    let acceptedO: Map<any, any> = new Map([[String.fromCharCode(105,109,112,0),true ], [String.fromCharCode(118,97,108,0),false ], [String.fromCharCode(117,110,105,116,121,95,115,95,55,51,0),true ]]);
    let controll = 3.0;
    let catagoryS = String.fromCharCode(99,102,102,116,102,0);
    let catagoryR = 3;
    let form5 = 0;
    let tumbnailZ = 2.0;
    let routerl = String.fromCharCode(114,101,100,115,112,97,114,107,0);
    let mountingj = String.fromCharCode(112,97,97,100,0);
    let pausee = false;
      routerl += `${catagoryS.length >> (Math.min(Math.abs(1), 5))}`;
   if (5.46 <= (controll - form5)) {
       let suggestionx = String.fromCharCode(99,111,109,112,108,101,116,101,0);
       let hoverh: Array<any> = [249, 191, 276];
       let bingE = String.fromCharCode(102,102,117,114,108,0);
       let b_unlocku: Array<any> = [841, 708];
       let xvodd = 2;
      let guide0 = bingE == String.fromCharCode(116,117,119,0);
      do {
         bingE += `${b_unlocku.length + suggestionx.length}`;
         if (guide0) {
            break;
         }
      } while ((suggestionx.length >= bingE.length) && guide0);
          let mbbidK: Array<any> = [958, 292];
          let userp = String.fromCharCode(109,101,115,104,101,115,0);
         hoverh = [hoverh.length % (Math.max(bingE.length, 10))];
         mbbidK.push(mbbidK.length << (Math.min(Math.abs(2), 5)));
         userp = `${(String.fromCharCode(107,0) == userp ? userp.length : mbbidK.length)}`;
      while (bingE.length >= 5) {
         bingE = `${hoverh.length & 2}`;
         break;
      }
         b_unlocku = [bingE.length + hoverh.length];
         b_unlocku.push(xvodd ^ b_unlocku.length);
         b_unlocku.push(xvodd);
      for (let k = 0; k < 1; k++) {
         b_unlocku = [suggestionx.length];
      }
      let ying8 = suggestionx == String.fromCharCode(57,95,108,108,0);
      do {
          let sliderd = 5.0;
          let filledq = String.fromCharCode(109,97,120,100,98,115,0);
          let scrollviewh = String.fromCharCode(108,111,111,112,115,0);
         suggestionx = `${(String.fromCharCode(100,0) == scrollviewh ? xvodd : scrollviewh.length)}`;
         sliderd *= parseFloat(`${filledq.length}`);
         filledq += "2";
         if (ying8) {
            break;
         }
      } while (((suggestionx.length >> (Math.min(4, Math.abs(xvodd)))) < 3) && ying8);
          let mbbidC = String.fromCharCode(116,98,117,102,0);
         bingE += `${(String.fromCharCode(102,0) == bingE ? xvodd : bingE.length)}`;
         mbbidC = `${mbbidC.length}`;
      for (let o = 0; o < 3; o++) {
          let stylesS: Map<any, any> = new Map([[String.fromCharCode(108,97,121,115,0),249], [String.fromCharCode(105,109,112,111,114,116,97,110,99,101,0),719], [String.fromCharCode(98,111,100,121,95,53,95,48,0),876]]);
          let final_pqq = 0.0;
          let arrowp = String.fromCharCode(111,103,103,118,111,114,98,105,115,0);
         xvodd /= Math.max(3, hoverh.length | arrowp.length);
         stylesS = new Map([[`${stylesS.size}`, stylesS.size]]);
         final_pqq /= Math.max(stylesS.size, 2);
         arrowp = `${stylesS.size ^ 1}`;
      }
          let arrowP = 0;
          let componentregistry1 = String.fromCharCode(112,97,114,116,110,101,114,0);
         bingE += `${1 + hoverh.length}`;
         arrowP <<= Math.min(Math.abs((String.fromCharCode(50,0) == componentregistry1 ? arrowP : componentregistry1.length)), 2);
       let dragF = String.fromCharCode(109,97,110,97,103,101,109,101,110,116,0);
       let type_hK = String.fromCharCode(115,104,97,0);
      let viewsI = b_unlocku.length <= 5017115;
      do {
         b_unlocku.push((String.fromCharCode(54,0) == bingE ? bingE.length : b_unlocku.length));
         if (viewsI) {
            break;
         }
      } while (viewsI && (b_unlocku.length > 1));
       let rendery = 4.0;
      if ((bingE.length + hoverh.length) == 4) {
         bingE += `${xvodd}`;
      }
      form5 >>= Math.min(Math.abs(bingE.length & 1), 5);
   }
   while ((5 << (Math.min(1, Math.abs(catagoryR)))) >= 2) {
       let configureB = 3;
       let libpangleflippedO = 4;
       let goalC = String.fromCharCode(122,102,114,101,101,0);
      for (let g = 0; g < 2; g++) {
         libpangleflippedO ^= configureB ^ 1;
      }
      while (1 <= (5 * configureB)) {
         configureB /= Math.max(5, goalC.length);
         break;
      }
          let telemetry6 = 1.0;
          let a_lockO = String.fromCharCode(100,105,115,116,0);
          let brightness7 = 5.0;
         configureB |= 2;
         telemetry6 /= Math.max(parseFloat(`${parseInt(`${brightness7}`)}`), 2);
         a_lockO = `${3 << (Math.min(2, a_lockO.length))}`;
         libpangleflippedO >>= Math.min(5, Math.abs(libpangleflippedO >> (Math.min(Math.abs(3), 4))));
      if (!goalC.endsWith(`${libpangleflippedO}`)) {
          let abidetect2 = String.fromCharCode(110,105,99,101,0);
          let pauseY = true;
          let control_ = String.fromCharCode(114,100,106,112,103,99,111,109,0);
         libpangleflippedO |= control_.length;
         abidetect2 += `${(2 ^ (pauseY ? 3 : 4))}`;
         pauseY = abidetect2.length == 83;
         control_ += `${abidetect2.length}`;
      }
      for (let l = 0; l < 1; l++) {
         libpangleflippedO |= 2;
      }
         goalC += `${libpangleflippedO}`;
         configureB &= libpangleflippedO ^ goalC.length;
      if (5 < (libpangleflippedO & 1) || 3 < (1 & libpangleflippedO)) {
         configureB -= goalC.length;
      }
      controll /= Math.max(nterstitialv, 1);
      break;
   }
   while (2.22 >= (controll * form5)) {
       let minivod8 = 3.0;
       let androidL = String.fromCharCode(110,111,104,101,97,100,101,114,0);
       let libsentryj = 0;
       let eventa = false;
       let friendsA = String.fromCharCode(115,104,97,108,108,111,119,0);
       let main_k9 = String.fromCharCode(114,101,108,111,97,100,0);
       let foreground4 = String.fromCharCode(117,110,118,111,116,101,0);
       let auto_lsU = String.fromCharCode(97,110,97,103,108,121,112,104,0);
         foreground4 = `${main_k9.length + auto_lsU.length}`;
         libsentryj *= foreground4.length;
      if (!foreground4.includes(`${eventa}`)) {
         foreground4 = `${((eventa ? 1 : 2) & libsentryj)}`;
      }
      let pauseq = 5853908 >= foreground4.length;
      do {
          let statsR = String.fromCharCode(98,97,99,107,119,97,114,100,115,0);
          let searchL = 0.0;
          let typingP = 0.0;
          let incidentJ = 0;
         foreground4 = "1";
         statsR += `${1 * parseInt(`${typingP}`)}`;
         searchL *= parseInt(`${searchL}`) * 3;
         typingP -= (parseFloat(`${statsR == String.fromCharCode(81,0) ? statsR.length : incidentJ}`));
         incidentJ &= incidentJ;
         if (pauseq) {
            break;
         }
      } while (pauseq && (foreground4.length < 4));
      for (let r = 0; r < 3; r++) {
         androidL = `${1 & friendsA.length}`;
      }
      if (5 >= (parseInt(`${minivod8}`) / 3) && (parseInt(`${minivod8}`) / (Math.max(1, main_k9.length))) >= 3) {
         main_k9 += `${libsentryj}`;
      }
      for (let e = 0; e < 2; e++) {
         libsentryj <<= Math.min(Math.abs(3), 1);
      }
         foreground4 = `${auto_lsU.length}`;
       let mathB = String.fromCharCode(109,111,100,117,108,97,116,101,0);
      if ((4 | mathB.length) < 4 && 4 < (4 | mathB.length)) {
         libsentryj *= 2;
      }
      form5 %= Math.max(5, form5);
      break;
   }
      acceptedO = new Map([[`${catagoryR}`, (mountingj == String.fromCharCode(73,0) ? mountingj.length : catagoryR)]]);
       let brightnessI = String.fromCharCode(109,101,100,105,117,109,116,104,114,101,115,104,0);
      for (let j = 0; j < 3; j++) {
         brightnessI += `${(brightnessI == String.fromCharCode(107,0) ? brightnessI.length : brightnessI.length)}`;
      }
          let refreshg = String.fromCharCode(100,101,115,99,114,105,112,116,111,114,115,0);
          let window_fQ = 0;
          let anythinkF = String.fromCharCode(115,105,110,103,117,108,97,114,0);
         brightnessI = `${window_fQ % (Math.max(refreshg.length, 7))}`;
         refreshg += `${anythinkF.length}`;
         window_fQ -= 1;
          let tooltipsX = true;
          let sportH = String.fromCharCode(100,101,115,112,105,108,108,0);
          let middle1 = String.fromCharCode(105,111,118,101,99,105,110,0);
         brightnessI = `${((tooltipsX ? 4 : 4) + middle1.length)}`;
         tooltipsX = (sportH.length & sportH.length) <= 81;
      routerl += `${parseInt(`${controll}`)}`;

    const state = await NetInfo.fetch();

      catagoryR |= acceptedO.size;
   if (4 < acceptedO.size) {
       let middleM = 1.0;
       let classese = 2.0;
       let pause5 = 0.0;
       let privacyP = String.fromCharCode(112,97,107,116,0);
         pause5 *= parseFloat(`${parseInt(`${middleM}`) % (Math.max(6, privacyP.length))}`);
         classese *= parseFloat(`${2 << (Math.min(1, privacyP.length))}`);
      for (let n = 0; n < 3; n++) {
         privacyP += `${2 - parseInt(`${classese}`)}`;
      }
         middleM /= Math.max(4, privacyP.length);
         classese -= parseFloat(`${privacyP.length + parseInt(`${classese}`)}`);
          let temperature1 = 3.0;
         middleM -= parseInt(`${middleM}`) | parseInt(`${temperature1}`);
         pause5 -= parseFloat(`${2}`);
         classese /= Math.max(parseFloat(`${parseInt(`${pause5}`)}`), 5);
       let circlet = String.fromCharCode(114,97,105,115,101,0);
       let libavdeviceX = String.fromCharCode(104,101,99,107,0);
      if (privacyP == libavdeviceX) {
          let debugk = String.fromCharCode(107,97,110,110,97,0);
         libavdeviceX = `${privacyP.length}`;
         debugk += `${debugk.length >> (Math.min(debugk.length, 2))}`;
      }
      while (privacyP.length < parseInt(`${middleM}`)) {
         middleM *= (String.fromCharCode(52,0) == circlet ? privacyP.length : circlet.length);
         break;
      }
      if (!libavdeviceX.startsWith(circlet)) {
          let schedulerh: Array<any> = [360, 855];
          let orientationK = String.fromCharCode(115,116,97,116,0);
         circlet += `${schedulerh.length}`;
         schedulerh.push(3 + orientationK.length);
         orientationK = `${orientationK.length}`;
      }
      pausee = controll <= 86.18 && 19 <= nterstitialv;
   }
      pausee = catagoryR < 71;
       let spinnerG: Array<any> = [385, 83];
       let combinedF: Array<any> = [585, 621, 663];
         spinnerG = [spinnerG.length];
          let arrowz: Array<any> = [263, 833, 518];
         combinedF.push(combinedF.length % (Math.max(2, 9)));
         arrowz = [3];
      if (combinedF.length >= spinnerG.length) {
         combinedF.push(combinedF.length % (Math.max(1, spinnerG.length)));
      }
       let abidetectI = String.fromCharCode(115,108,97,115,104,101,115,0);
      let inactivea = combinedF.length <= 8777987;
      do {
          let notification7: Array<any> = [614, 601, 93];
          let type_y_z = String.fromCharCode(105,110,116,101,114,114,117,112,116,105,98,108,101,0);
          let stylesK = false;
          let unreadz = String.fromCharCode(109,98,117,118,0);
          let edit4 = 4.0;
         combinedF = [abidetectI.length & 2];
         notification7.push(parseInt(`${edit4}`));
         type_y_z = `${unreadz.length}`;
         stylesK = edit4 == 80.35 && unreadz == String.fromCharCode(99,0);
         if (inactivea) {
            break;
         }
      } while (inactivea && ((combinedF.length | 1) == 2));
         combinedF = [(abidetectI == String.fromCharCode(109,0) ? combinedF.length : abidetectI.length)];
      acceptedO.set(`${pausee}`, acceptedO.size);
   if (!catagoryS.startsWith(mountingj)) {
      catagoryS = "3";
   }
      acceptedO = new Map([[`${catagoryR}`, parseInt(`${tumbnailZ}`)]]);
    

      mountingj = `${2 << (Math.min(2, catagoryS.length))}`;
      acceptedO.set(`${tumbnailZ}`, ((pausee ? 3 : 4) << (Math.min(Math.abs(parseInt(`${tumbnailZ}`)), 5))));
   if (3 <= (routerl.length ^ nterstitialv) && (nterstitialv ^ 3) <= 1) {
       let backwardj = String.fromCharCode(114,101,107,101,121,0);
       let privilegeC: Array<any> = [126, 597];
       let friendsS = String.fromCharCode(112,114,101,115,101,114,118,101,0);
          let matchc = String.fromCharCode(114,101,102,101,114,114,97,108,0);
          let runtimeq = 4.0;
         friendsS = "1";
         matchc = `${matchc.length}`;
         runtimeq *= parseFloat(`${3}`);
      while ((2 + privilegeC.length) == 1) {
          let malaysiaM = 5.0;
         privilegeC.push(backwardj.length);
         malaysiaM *= parseInt(`${malaysiaM}`);
         break;
      }
         privilegeC = [2];
      let mountingv = 5438584 >= privilegeC.length;
      do {
         privilegeC.push((backwardj == String.fromCharCode(78,0) ? backwardj.length : friendsS.length));
         if (mountingv) {
            break;
         }
      } while (mountingv && (privilegeC.length >= friendsS.length));
      let topono = friendsS.length >= 7185679;
      do {
          let gradlewf = 1.0;
          let graphe = String.fromCharCode(108,111,111,107,97,104,101,97,100,0);
          let bellV = String.fromCharCode(109,105,120,105,110,115,0);
         friendsS += `${privilegeC.length}`;
         gradlewf *= bellV.length;
         graphe += `${graphe.length}`;
         bellV += `${parseInt(`${gradlewf}`)}`;
         if (topono) {
            break;
         }
      } while ((friendsS.endsWith(`${privilegeC.length}`)) && topono);
       let darks = 1;
       let filter3 = 1;
         darks |= filter3;
       let libhermesA = String.fromCharCode(120,99,98,103,114,97,98,0);
       let shirt1 = String.fromCharCode(99,104,97,116,115,0);
          let klevinA = 4.0;
          let stationz = 2.0;
          let libreanimatedp: Array<any> = [String.fromCharCode(112,101,114,109,0), String.fromCharCode(108,101,97,102,110,111,100,101,0), String.fromCharCode(97,97,110,100,99,116,116,97,98,0)];
         privilegeC = [1 % (Math.max(4, friendsS.length))];
         klevinA *= 1 % (Math.max(6, parseInt(`${stationz}`)));
         stationz += parseFloat(`${parseInt(`${stationz}`)}`);
         libreanimatedp = [parseInt(`${stationz}`)];
      nterstitialv -= friendsS.length << (Math.min(2, Math.abs(parseInt(`${controll}`))));
   }
       let circleW = 0;
       let package_siv = 1;
         package_siv ^= package_siv - circleW;
         circleW >>= Math.min(Math.abs(circleW % (Math.max(1, 5))), 2);
       let invitek: Array<any> = [781, 527, 385];
       let mintegralG = 2;
       let langkeyi = 5;
      for (let l = 0; l < 3; l++) {
         invitek.push(3 * package_siv);
      }
         invitek = [3];
      pausee = catagoryS.length == circleW;
   for (let v = 0; v < 1; v++) {
       let linkK: Map<any, any> = new Map([[String.fromCharCode(114,101,99,111,110,110,101,99,116,105,110,103,0),258], [String.fromCharCode(108,111,99,97,108,116,105,109,101,0),948], [String.fromCharCode(107,101,121,0),974]]);
       let shootQ: Array<any> = [String.fromCharCode(115,116,111,119,0), String.fromCharCode(115,116,114,101,110,103,116,104,0)];
       let forwardt = String.fromCharCode(100,101,116,101,99,116,111,114,0);
       let tumbnailc = 3.0;
       let leagueh = 3.0;
         leagueh -= 1 + parseInt(`${tumbnailc}`);
      let launchern = 7873062 <= shootQ.length;
      do {
          let basketballv = 3.0;
          let lang3 = 1.0;
          let photoO = 3.0;
          let textinput8: Map<any, any> = new Map([[String.fromCharCode(100,97,116,101,116,105,109,101,0),String.fromCharCode(110,99,111,110,102,0)], [String.fromCharCode(109,121,115,101,108,102,0),String.fromCharCode(101,120,116,114,97,100,97,116,97,0)], [String.fromCharCode(109,105,110,115,0),String.fromCharCode(103,97,116,104,101,114,0)]]);
         shootQ = [3];
         basketballv += textinput8.size;
         lang3 *= parseFloat(`${parseInt(`${basketballv}`)}`);
         photoO *= parseFloat(`${parseInt(`${photoO}`) % 3}`);
         textinput8.set(`${basketballv}`, parseInt(`${basketballv}`));
         if (launchern) {
            break;
         }
      } while (((shootQ.length - leagueh) == 5.98) && launchern);
      for (let b = 0; b < 2; b++) {
          let with_aG = String.fromCharCode(118,115,105,110,107,0);
          let sportX = String.fromCharCode(97,107,97,114,111,115,0);
          let gradlewA: Array<any> = [497, 698, 441];
          let bootsplashw: Array<any> = [815, 802];
          let langkeys = String.fromCharCode(120,100,99,97,109,0);
         forwardt += `${sportX.length % 3}`;
         with_aG = `${bootsplashw.length}`;
         sportX = `${with_aG.length % 3}`;
         gradlewA = [gradlewA.length];
         bootsplashw.push(2 - gradlewA.length);
         langkeys = `${with_aG.length}`;
      }
      while ((leagueh + shootQ.length) > 3.57) {
         shootQ = [linkK.size * shootQ.length];
         break;
      }
          let utilsB: Map<any, any> = new Map([[String.fromCharCode(115,116,117,102,102,110,100,0),403], [String.fromCharCode(116,111,107,101,110,116,120,0),608], [String.fromCharCode(101,110,97,98,108,101,115,0),116]]);
         linkK.set(`${leagueh}`, linkK.size);
         utilsB = new Map([[`${utilsB.size}`, utilsB.size]]);
      while (4 > (shootQ.length << (Math.min(forwardt.length, 3)))) {
          let libcxxcomponentsT = String.fromCharCode(115,97,99,107,0);
          let vignettew = 5.0;
          let navigationq = 2.0;
         shootQ.push(parseInt(`${tumbnailc}`));
         libcxxcomponentsT += `${parseInt(`${vignettew}`)}`;
         navigationq *= parseInt(`${navigationq}`) | 3;
         break;
      }
      if (linkK.get(`${tumbnailc}`) == null) {
          let libreactZ = 0;
         tumbnailc *= parseFloat(`${1 >> (Math.min(4, forwardt.length))}`);
         libreactZ *= libreactZ;
      }
         forwardt = "3";
      let movies2 = linkK.size <= 7756885;
      do {
         linkK.set(`${leagueh}`, linkK.size & parseInt(`${leagueh}`));
         if (movies2) {
            break;
         }
      } while (((linkK.size >> (Math.min(Math.abs(2), 4))) < 1) && movies2);
          let launcherj = 3.0;
         shootQ.push(forwardt.length & 1);
         launcherj += parseInt(`${launcherj}`) >> (Math.min(Math.abs(parseInt(`${launcherj}`)), 5));
          let colorsk = 4.0;
          let catalogp = String.fromCharCode(112,111,108,121,109,111,100,0);
         tumbnailc /= Math.max(parseFloat(`${parseInt(`${tumbnailc}`) / (Math.max(forwardt.length, 9))}`), 4);
         colorsk *= parseFloat(`${parseInt(`${colorsk}`) | catalogp.length}`);
         catalogp += `${parseInt(`${colorsk}`) * catalogp.length}`;
          let episodesq = String.fromCharCode(101,102,102,101,99,116,105,118,101,0);
          let sportR: Array<any> = [61, 528, 852];
          let benefitA = String.fromCharCode(114,101,97,108,108,111,99,112,0);
         leagueh /= Math.max(parseInt(`${tumbnailc}`), 1);
         episodesq = `${(episodesq == String.fromCharCode(74,0) ? sportR.length : episodesq.length)}`;
         sportR.push(episodesq.length * 3);
         benefitA = `${benefitA.length}`;
         shootQ.push((String.fromCharCode(56,0) == forwardt ? shootQ.length : forwardt.length));
         tumbnailc *= parseFloat(`${parseInt(`${leagueh}`) * 3}`);
      for (let i = 0; i < 1; i++) {
         tumbnailc *= parseFloat(`${3 - shootQ.length}`);
      }
      tumbnailZ /= Math.max(5, (mountingj == String.fromCharCode(74,0) ? catagoryR : mountingj.length));
   }
      nterstitialv ^= ((pausee ? 2 : 4) << (Math.min(Math.abs(1), 3)));
    const offline = !(state.isConnected && ((state.isInternetReachable === true || state.isInternetReachable === null) ? true : false));
    setIsOffline(offline);

   if (!mountingj.includes(`${pausee}`)) {
      pausee = null != acceptedO.get(`${pausee}`);
   }
   if (5 > form5) {
      pausee = (catagoryR - mountingj.length) >= 48;
   }
      acceptedO = new Map([[`${acceptedO.size}`, form5]]);
      catagoryS = "3";
   while (tumbnailZ == 3.26) {
      pausee = 47 <= acceptedO.size;
      break;
   }
      nterstitialv ^= routerl.length;
    if (!offline) {

   if (!pausee) {
      pausee = parseInt(`${controll}`) <= catagoryS.length;
   }
      tumbnailZ += mountingj.length;
      pausee = !pausee && controll >= 89.27;
      controll -= parseInt(`${controll}`);
      nterstitialv |= (routerl == String.fromCharCode(72,0) ? routerl.length : acceptedO.size);
   let mbridge_ = 6058188 >= routerl.length;
   do {
      routerl += "1";
      if (mbridge_) {
         break;
      }
   } while (((routerl.length >> (Math.min(2, Math.abs(form5)))) >= 3 || 1 >= (routerl.length >> (Math.min(Math.abs(3), 3)))) && mbridge_);
      handleRefresh(navId);
    }
  };
  const handleShowLoading = async () => {
       let soundF: Array<any> = [477, 925, 966];
    let reactm = String.fromCharCode(119,101,101,107,100,97,121,0);
    let carouselh = 4.0;
    let libavcodecB = String.fromCharCode(118,100,112,97,117,99,111,110,116,101,120,116,0);
    let rootW = String.fromCharCode(99,117,116,0);
    let castingS: Array<any> = [String.fromCharCode(112,114,111,116,101,99,116,101,100,0), String.fromCharCode(99,111,108,115,112,97,110,0)];
    let hiadX: Array<any> = [924, 323, 87];
    let connection_ = 2.0;
    let filledI = String.fromCharCode(115,117,114,102,97,99,101,115,0);
    let show7 = 1.0;
    let selecte = 1.0;
    let telemetryu = 4.0;
    let l_lockC = String.fromCharCode(114,101,97,100,115,0);
    let googlej = String.fromCharCode(111,108,107,97,100,111,116,0);
    let mnewst = String.fromCharCode(116,97,103,115,0);
      hiadX = [reactm.length];
      selecte *= parseFloat(`${3}`);
   for (let f = 0; f < 1; f++) {
      selecte /= Math.max(parseFloat(`${1 >> (Math.min(5, soundF.length))}`), 1);
   }
      soundF = [3];
      carouselh /= Math.max(3, parseFloat(`${castingS.length}`));
   let miniI = 7731957.0 >= connection_;
   do {
       let thumbnailV: Array<any> = [375, 141, 658];
       let fulln = String.fromCharCode(112,114,101,97,108,108,111,99,97,116,101,0);
       let photoA = true;
       let indexG = String.fromCharCode(114,97,99,105,110,103,0);
       let reactV: Map<any, any> = new Map([[String.fromCharCode(101,120,112,108,97,105,110,0),239], [String.fromCharCode(114,111,117,116,101,0),729]]);
         fulln += `${(String.fromCharCode(122,0) == indexG ? indexG.length : reactV.size)}`;
       let interstitialS = 1.0;
         indexG = `${fulln.length}`;
      while (1 == (reactV.size + 5)) {
         indexG = `${reactV.size}`;
         break;
      }
         indexG += "2";
       let toponA = 4.0;
       let closeu = String.fromCharCode(100,101,115,99,0);
       let rulesM = String.fromCharCode(99,121,99,108,101,115,0);
      while (!photoA) {
          let modez = String.fromCharCode(111,108,111,114,0);
          let taiwanu: Array<any> = [844, 772, 8];
          let sendd = 5.0;
          let middleO: Map<any, any> = new Map([[String.fromCharCode(105,100,99,116,100,115,112,0),175], [String.fromCharCode(109,115,98,115,0),173], [String.fromCharCode(100,111,118,101,0),617]]);
          let mimoH: Array<any> = [299, 258, 164];
         reactV.set(`${interstitialS}`, taiwanu.length - 3);
         modez += "2";
         taiwanu.push(3 - mimoH.length);
         sendd -= 1;
         middleO.set(`${modez}`, middleO.size);
         mimoH.push(1);
         break;
      }
          let package_90K = 0.0;
          let thailandr = 4.0;
         photoA = closeu == String.fromCharCode(102,0);
         package_90K += parseFloat(`${1 >> (Math.min(Math.abs(parseInt(`${package_90K}`)), 4))}`);
         thailandr += parseInt(`${package_90K}`);
         rulesM += `${fulln.length >> (Math.min(Math.abs(1), 2))}`;
         thumbnailV = [fulln.length / 2];
      while (!photoA || 1 >= closeu.length) {
         photoA = closeu == String.fromCharCode(88,0);
         break;
      }
          let downloadingz = String.fromCharCode(99,108,101,97,110,115,101,0);
         toponA /= Math.max(1, parseFloat(`${downloadingz.length}`));
      while (fulln.includes(`${interstitialS}`)) {
          let neonb: Array<any> = [741, 138];
          let promotiond = String.fromCharCode(112,97,114,116,121,0);
         fulln += `${(indexG == String.fromCharCode(122,0) ? reactV.size : indexG.length)}`;
         neonb.push(neonb.length << (Math.min(promotiond.length, 3)));
         promotiond += "3";
         break;
      }
       let libjsinspectorp: Map<any, any> = new Map([[String.fromCharCode(113,117,97,110,116,105,122,101,0),128], [String.fromCharCode(111,114,105,101,110,116,97,116,105,111,110,0),104], [String.fromCharCode(112,111,111,108,114,101,102,0),516]]);
      connection_ += parseFloat(`${filledI.length}`);
      if (miniI) {
         break;
      }
   } while ((connection_ >= 3.95) && miniI);
      libavcodecB += `${parseInt(`${connection_}`)}`;
   for (let p = 0; p < 1; p++) {
      carouselh -= parseFloat(`${rootW.length << (Math.min(Math.abs(1), 2))}`);
   }
      carouselh /= Math.max(2, parseFloat(`${2}`));
      telemetryu *= (rootW == String.fromCharCode(67,0) ? hiadX.length : rootW.length);
   for (let c = 0; c < 1; c++) {
       let calendarU = String.fromCharCode(97,99,99,101,110,116,0);
      if (calendarU != String.fromCharCode(67,0)) {
         calendarU += `${calendarU.length % (Math.max(calendarU.length, 1))}`;
      }
       let updatesA = String.fromCharCode(100,101,97,100,105,110,101,0);
       let rncoret = 3;
      carouselh *= parseFloat(`${parseInt(`${connection_}`)}`);
   }
      selecte /= Math.max(parseFloat(`${parseInt(`${show7}`)}`), 1);
       let whatsappk = 4.0;
         whatsappk += 2 / (Math.max(10, parseInt(`${whatsappk}`)));
      let privilegeA = 9692810.0 <= whatsappk;
      do {
         whatsappk -= 2;
         if (privilegeA) {
            break;
         }
      } while ((whatsappk < 4.85) && privilegeA);
      while ((whatsappk * whatsappk) == 2.84) {
         whatsappk *= parseInt(`${whatsappk}`) * parseInt(`${whatsappk}`);
         break;
      }
      carouselh -= parseFloat(`${castingS.length}`);
      soundF.push(1);
   while (3.27 < (telemetryu * 2.68)) {
      telemetryu -= 2 ^ filledI.length;
      break;
   }
   let type_40x = castingS.length <= 7944259;
   do {
      castingS.push(parseInt(`${connection_}`));
      if (type_40x) {
         break;
      }
   } while ((castingS.length == 5) && type_40x);
      reactm = `${reactm.length / 1}`;
   if (libavcodecB.includes(`${show7}`)) {
      libavcodecB = `${soundF.length}`;
   }
   if (5 >= (soundF.length / 3) && 3 >= (reactm.length / (Math.max(3, 2)))) {
      reactm = `${3 * rootW.length}`;
   }
   let statsT = filledI == String.fromCharCode(122,119,104,101,104,115,0);
   do {
      filledI = `${parseInt(`${telemetryu}`)}`;
      if (statsT) {
         break;
      }
   } while (statsT && ((parseInt(`${selecte}`) + filledI.length) > 3));
       let leakchecker7: Map<any, any> = new Map([[String.fromCharCode(100,101,97,100,108,111,99,107,101,100,0),392], [String.fromCharCode(99,104,111,111,115,101,114,0),598]]);
       let gpayN = String.fromCharCode(117,110,105,102,111,114,109,115,0);
       let sportm = 1.0;
         gpayN += `${parseInt(`${sportm}`)}`;
      for (let m = 0; m < 3; m++) {
          let kuaishouE: Array<any> = [334, 45, 316];
         gpayN = `${3 - gpayN.length}`;
         kuaishouE.push(3);
      }
      if (4 < (parseInt(`${sportm}`) * gpayN.length) || (2.37 * sportm) < 5.35) {
         sportm /= Math.max(gpayN.length, 4);
      }
         leakchecker7.set(`${gpayN}`, 1 & leakchecker7.size);
       let interstitialT = String.fromCharCode(118,111,105,112,0);
         gpayN += "2";
      while (5 > (interstitialT.length ^ leakchecker7.size) || (interstitialT.length ^ 5) > 5) {
          let libjsio = String.fromCharCode(101,121,101,115,0);
         leakchecker7 = new Map([[`${sportm}`, parseInt(`${sportm}`) ^ 1]]);
         libjsio = `${libjsio.length}`;
         break;
      }
      let white4 = sportm >= 8176364.0;
      do {
          let libavformatF = 3.0;
          let statsm = 2;
          let roundt = 3.0;
         sportm *= gpayN.length & interstitialT.length;
         libavformatF += 2 >> (Math.min(Math.abs(statsm), 4));
         statsm -= statsm * parseInt(`${libavformatF}`);
         roundt -= statsm;
         if (white4) {
            break;
         }
      } while (white4 && ((sportm * 2.72) == 4.39 && (2 | interstitialT.length) == 5));
          let filterH = String.fromCharCode(99,114,101,97,116,105,118,101,0);
          let basketballO = 5.0;
          let servicew = 0.0;
         gpayN += `${2 >> (Math.min(Math.abs(parseInt(`${sportm}`)), 3))}`;
         filterH += `${filterH.length % 2}`;
         basketballO += parseFloat(`${filterH.length - parseInt(`${servicew}`)}`);
         servicew -= filterH.length - parseInt(`${basketballO}`);
      carouselh /= Math.max(5, parseFloat(`${leakchecker7.size - parseInt(`${telemetryu}`)}`));
      carouselh -= parseFloat(`${2}`);
       let liblogger6 = String.fromCharCode(102,111,117,114,120,0);
       let constantsC = String.fromCharCode(115,116,97,116,101,109,101,110,116,115,0);
       let libjsijniprofilerx = String.fromCharCode(101,114,114,110,111,0);
          let sigmob5 = String.fromCharCode(102,109,116,115,0);
          let viewsU: Map<any, any> = new Map([[String.fromCharCode(111,112,117,115,101,110,99,0),45], [String.fromCharCode(116,104,114,101,97,100,101,100,0),654]]);
          let huaweiy = String.fromCharCode(97,117,100,105,111,103,101,110,0);
         liblogger6 += `${libjsijniprofilerx.length >> (Math.min(4, sigmob5.length))}`;
         sigmob5 += `${huaweiy.length}`;
         viewsU.set(huaweiy, viewsU.size);
         constantsC += `${constantsC.length}`;
         constantsC = `${libjsijniprofilerx.length % 2}`;
         libjsijniprofilerx += `${3 + libjsijniprofilerx.length}`;
      let topic0 = 9172384 <= libjsijniprofilerx.length;
      do {
         libjsijniprofilerx = `${constantsC.length}`;
         if (topic0) {
            break;
         }
      } while ((liblogger6 == String.fromCharCode(99,0)) && topic0);
      if (!libjsijniprofilerx.includes(constantsC)) {
         constantsC = `${(libjsijniprofilerx == String.fromCharCode(52,0) ? constantsC.length : libjsijniprofilerx.length)}`;
      }
         constantsC += "1";
      for (let o = 0; o < 3; o++) {
         liblogger6 = `${liblogger6.length}`;
      }
      for (let g = 0; g < 3; g++) {
         libjsijniprofilerx = `${libjsijniprofilerx.length}`;
      }
      castingS.push(libjsijniprofilerx.length + 2);
   if (1 > (rootW.length >> (Math.min(5, castingS.length))) || (rootW.length >> (Math.min(4, castingS.length))) > 1) {
      castingS.push(1 | reactm.length);
   }
       let brightness8 = String.fromCharCode(99,121,112,114,101,115,115,0);
      for (let h = 0; h < 1; h++) {
         brightness8 = "3";
      }
      let watchF = brightness8.length <= 6632653;
      do {
         brightness8 = `${brightness8.length}`;
         if (watchF) {
            break;
         }
      } while ((brightness8.length < brightness8.length) && watchF);
      while (brightness8.length <= 5) {
         brightness8 += `${brightness8.length ^ brightness8.length}`;
         break;
      }
      show7 /= Math.max((parseFloat(`${String.fromCharCode(57,0) == reactm ? soundF.length : reactm.length}`)), 1);
   if ((show7 * parseFloat(`${filledI.length}`)) <= 3.33 || 3.33 <= (show7 * parseFloat(`${filledI.length}`))) {
      show7 *= parseFloat(`${libavcodecB.length}`);
   }
      soundF.push(3);

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
       let securityz = 1.0;
    let targetn: Map<any, any> = new Map([[String.fromCharCode(119,97,108,108,0),String.fromCharCode(99,104,112,108,0)], [String.fromCharCode(112,97,110,101,0),String.fromCharCode(116,111,114,103,98,0)], [String.fromCharCode(98,121,116,101,114,117,110,0),String.fromCharCode(109,112,101,103,118,105,100,101,111,100,101,99,0)]]);
    let emojis: Map<any, any> = new Map([[String.fromCharCode(118,105,111,108,97,116,105,111,110,0),823], [String.fromCharCode(119,105,110,97,114,109,0),661]]);
    let manifestC: Map<any, any> = new Map([[String.fromCharCode(100,111,119,110,114,105,103,104,116,0),978], [String.fromCharCode(115,116,114,105,110,103,98,117,102,102,101,114,0),936], [String.fromCharCode(99,111,110,115,116,114,97,105,110,101,100,0),283]]);
    let calendarw = 4.0;
    let base3 = String.fromCharCode(115,107,105,112,115,0);
    let livek: Array<any> = [516, 523];
    let librrcc = false;
    let screenj = true;
    let dragx = String.fromCharCode(108,105,98,115,119,114,101,115,97,109,112,108,101,0);
    let becomeo = String.fromCharCode(97,116,116,97,99,104,109,101,110,116,115,0);
    let p_lock2 = String.fromCharCode(97,114,114,97,121,115,0);
      base3 = `${base3.length * parseInt(`${securityz}`)}`;
   for (let v = 0; v < 3; v++) {
      base3 += `${(String.fromCharCode(79,0) == dragx ? livek.length : dragx.length)}`;
   }
   let container4 = dragx.length <= 9232777;
   do {
      dragx = `${(dragx == String.fromCharCode(116,0) ? dragx.length : (librrcc ? 3 : 3))}`;
      if (container4) {
         break;
      }
   } while (container4 && ((manifestC.size ^ 3) <= 3));

    if (showloading) {

      targetn = new Map([[`${securityz}`, (base3 == String.fromCharCode(111,0) ? parseInt(`${securityz}`) : base3.length)]]);
       let graphP = false;
       let back6 = 5;
       let leftL = String.fromCharCode(97,118,114,101,115,97,109,112,108,101,0);
          let gpayE = String.fromCharCode(103,114,97,112,104,113,108,0);
         graphP = back6 <= 56;
         gpayE = `${gpayE.length * 1}`;
         back6 %= Math.max(1 - leftL.length, 1);
       let membershipd = false;
       let libavfilterY = false;
      let bodann = membershipd ? !membershipd : membershipd;
      do {
         membershipd = (membershipd ? libavfilterY : membershipd);
         if (bodann) {
            break;
         }
      } while ((membershipd) && bodann);
      while (leftL.length > 4) {
         leftL = `${((membershipd ? 5 : 2) >> (Math.min(Math.abs(back6), 4)))}`;
         break;
      }
          let giftU: Array<any> = [String.fromCharCode(104,97,114,100,101,110,101,100,0), String.fromCharCode(103,101,110,101,114,97,108,0)];
          let imagemanagerH = true;
         graphP = !libavfilterY;
         giftU.push(2);
         imagemanagerH = giftU.length < 36 && imagemanagerH;
       let pangleE = false;
         leftL = `${((libavfilterY ? 5 : 1) + (membershipd ? 2 : 4))}`;
      for (let l = 0; l < 3; l++) {
          let actionsC = 0.0;
         libavfilterY = leftL.length >= 45 && !membershipd;
         actionsC /= Math.max(1, parseInt(`${actionsC}`) & parseInt(`${actionsC}`));
      }
      dragx = `${manifestC.size - emojis.size}`;
   if (!screenj) {
      screenj = 23.37 < calendarw;
   }
      setIsRefreshing(true);
    }
    try {

      securityz -= (parseFloat(`${(screenj ? 2 : 4) >> (Math.min(Math.abs((librrcc ? 3 : 4)), 3))}`));
      manifestC.set(`${securityz}`, 1 >> (Math.min(Math.abs(parseInt(`${securityz}`)), 4)));
   for (let e = 0; e < 1; e++) {
       let redirects = true;
       let pingq: Map<any, any> = new Map([[String.fromCharCode(99,104,105,114,112,0),815], [String.fromCharCode(115,117,98,116,114,101,101,115,0),894]]);
       let rules0: Array<any> = [592, 795, 128];
       let update__g = String.fromCharCode(99,111,110,102,105,114,109,97,116,105,111,110,0);
       let matchM = 3;
         matchM ^= pingq.size;
      for (let i = 0; i < 2; i++) {
         redirects = redirects && pingq.size == 37;
      }
         pingq.set(`${rules0.length}`, rules0.length % 1);
          let diceq: Array<any> = [String.fromCharCode(98,105,116,114,118,99,111,110,106,0), String.fromCharCode(99,117,109,101,0)];
          let pageB = String.fromCharCode(109,111,111,102,0);
          let hoverx = 4;
         update__g = `${pingq.size}`;
         diceq = [1 << (Math.min(1, Math.abs(hoverx)))];
         pageB += `${(pageB == String.fromCharCode(112,0) ? pageB.length : diceq.length)}`;
         hoverx %= Math.max(hoverx % 3, 3);
          let serviceq = String.fromCharCode(120,105,112,104,108,97,99,105,110,103,0);
          let connectionG = true;
         redirects = (serviceq.length ^ update__g.length) >= 12;
         serviceq = `${((connectionG ? 5 : 1) + (connectionG ? 2 : 4))}`;
          let bottom4 = 3;
          let dataR = String.fromCharCode(110,101,116,101,113,0);
          let point_ = 3.0;
         redirects = String.fromCharCode(90,0) == update__g;
         bottom4 ^= parseInt(`${point_}`);
         dataR += `${dataR.length << (Math.min(Math.abs(1), 1))}`;
         point_ /= Math.max(2 >> (Math.min(1, Math.abs(parseInt(`${point_}`)))), 4);
         rules0.push(pingq.size % (Math.max(3, 8)));
          let singleu = 1.0;
          let libturbomodulejsijni2 = String.fromCharCode(98,97,122,101,108,0);
          let terms8: Array<any> = [727, 292];
         redirects = 12 > update__g.length || 12 > rules0.length;
         singleu *= parseFloat(`${3}`);
         libturbomodulejsijni2 += `${terms8.length % (Math.max(3, 3))}`;
         terms8 = [libturbomodulejsijni2.length >> (Math.min(4, Math.abs(parseInt(`${singleu}`))))];
      let commont = redirects ? !redirects : redirects;
      do {
         redirects = matchM >= update__g.length;
         if (commont) {
            break;
         }
      } while (commont && ((matchM >> (Math.min(Math.abs(5), 5))) < 5 && 5 < matchM));
      while (4 > pingq.size) {
          let bingq = 0.0;
          let topicl: Map<any, any> = new Map([[String.fromCharCode(99,111,114,101,0),String.fromCharCode(114,105,103,104,116,115,0)], [String.fromCharCode(98,105,111,109,101,116,114,121,0),String.fromCharCode(97,118,97,108,97,110,99,104,101,0)], [String.fromCharCode(101,115,115,101,110,99,101,0),String.fromCharCode(109,106,112,101,103,101,110,99,0)]]);
         redirects = rules0.length >= 25;
         bingq /= Math.max(2, parseFloat(`${2}`));
         topicl = new Map([[`${topicl.size}`, parseInt(`${bingq}`) * topicl.size]]);
         break;
      }
      for (let w = 0; w < 2; w++) {
         update__g += `${(2 + (redirects ? 3 : 3))}`;
      }
      if (!update__g.includes(`${rules0.length}`)) {
         update__g += `${matchM % (Math.max(3, update__g.length))}`;
      }
         matchM |= 2 * update__g.length;
       let countdowni = String.fromCharCode(108,105,98,110,100,105,0);
         countdowni = `${(update__g == String.fromCharCode(99,0) ? update__g.length : matchM)}`;
      base3 += `${((redirects ? 4 : 1) >> (Math.min(livek.length, 2)))}`;
   }
      await queryClient.resetQueries(["HomePage", id]);

      emojis = new Map([[`${targetn.size}`, dragx.length]]);
   while (librrcc || (2 * targetn.size) < 1) {
      librrcc = (dragx.length + manifestC.size) > 90;
      break;
   }
   if ((3.61 * securityz) <= 3.85 || 5 <= (emojis.size >> (Math.min(Math.abs(1), 5)))) {
      emojis = new Map([[`${manifestC.size}`, ((librrcc ? 4 : 4) ^ manifestC.size)]]);
   }

      setIsRefreshing(false);

      targetn = new Map([[`${screenj}`, parseInt(`${calendarw}`) * 2]]);
   if (5 == dragx.length) {
       let googlef = 0;
       let reducerN = String.fromCharCode(114,111,117,110,100,117,112,0);
       let mappingt = 0.0;
       let pingP: Map<any, any> = new Map([[String.fromCharCode(97,109,111,117,110,116,0),461], [String.fromCharCode(109,97,107,101,110,97,110,0),468]]);
       let chaty = String.fromCharCode(112,117,108,115,101,97,117,100,105,111,115,121,109,98,111,108,116,97,98,108,101,0);
         mappingt -= 1;
          let tinit_ea = 3;
         mappingt -= chaty.length * pingP.size;
         tinit_ea -= tinit_ea + 2;
      for (let c = 0; c < 3; c++) {
          let ballD = 1.0;
          let tooltipsD = 3.0;
          let graphj = 4;
          let annerJ: Map<any, any> = new Map([[String.fromCharCode(110,111,116,105,102,121,105,110,103,0),89], [String.fromCharCode(105,110,116,101,114,115,101,99,116,105,110,103,0),728]]);
         pingP = new Map([[`${pingP.size}`, 1 | pingP.size]]);
         ballD -= parseFloat(`${3}`);
         tooltipsD /= Math.max(parseFloat(`${annerJ.size}`), 2);
         graphj |= 1;
         annerJ.set(`${graphj}`, graphj / (Math.max(parseInt(`${ballD}`), 2)));
      }
         googlef /= Math.max(3 ^ googlef, 4);
         pingP.set(reducerN, chaty.length ^ reducerN.length);
       let storeV = 0.0;
      if (Array.from(pingP.values()).includes(googlef)) {
         pingP.set(`${storeV}`, 1);
      }
         storeV /= Math.max(3, reducerN.length);
      while ((googlef + 4) == 3 && (4 / (Math.max(9, googlef))) == 1) {
          let fillG = false;
          let gesturet = 1.0;
          let overlaye = 2;
         googlef -= 1 | parseInt(`${storeV}`);
         fillG = (gesturet + overlaye) > 64;
         gesturet -= parseFloat(`${parseInt(`${gesturet}`) | 1}`);
         overlaye ^= ((fillG ? 5 : 2) % (Math.max(parseInt(`${gesturet}`), 4)));
         break;
      }
      for (let g = 0; g < 3; g++) {
          let sigmob3 = true;
          let info9: Array<any> = [377, 489, 392];
          let nativeo = String.fromCharCode(115,116,97,98,105,108,105,122,101,0);
          let debugS = 0;
          let stationsK = 5;
         googlef <<= Math.min(Math.abs(1), 3);
         sigmob3 = !nativeo.includes(`${sigmob3}`);
         info9.push(debugS % 3);
         nativeo = `${debugS / (Math.max(2, 2))}`;
         stationsK *= info9.length;
      }
      if ((mappingt + 5.80) <= 1.20 || 1 <= (4 >> (Math.min(1, Math.abs(googlef))))) {
         googlef %= Math.max((String.fromCharCode(99,0) == reducerN ? pingP.size : reducerN.length), 2);
      }
      while (chaty.length > 5) {
         reducerN = `${2 + googlef}`;
         break;
      }
      if ((reducerN.length + 4) <= 4) {
          let vignettej = String.fromCharCode(119,105,100,101,102,101,108,101,109,0);
          let tumbnailh = String.fromCharCode(117,110,99,111,110,115,117,109,101,100,0);
          let s_imagek = true;
         reducerN = `${pingP.size}`;
         vignettej = `${vignettej.length}`;
         tumbnailh = `${(vignettej.length | (s_imagek ? 5 : 5))}`;
         s_imagek = vignettej == tumbnailh;
      }
          let bootsplash6 = 4;
          let turn4 = String.fromCharCode(105,109,101,110,115,105,111,110,0);
         pingP = new Map([[turn4, turn4.length % (Math.max(reducerN.length, 1))]]);
         bootsplash6 %= Math.max(1, bootsplash6);
      if (3.37 <= (mappingt / (Math.max(5, googlef))) && 5.86 <= (3.37 / (Math.max(10, mappingt)))) {
          let renewO = String.fromCharCode(114,97,100,97,114,0);
          let q_playerB = String.fromCharCode(100,111,99,115,105,122,101,0);
         googlef /= Math.max(googlef, 3);
         renewO = `${renewO.length | 1}`;
         q_playerB = "1";
      }
      dragx = `${(1 | (screenj ? 5 : 2))}`;
   }
   if ((calendarw - 2.24) >= 3.66 && (calendarw - manifestC.size) >= 2.24) {
      calendarw *= parseInt(`${securityz}`);
   }
      setNavId(id);

      emojis.set(`${librrcc}`, dragx.length);
   while (4 == base3.length) {
       let placeholdert = String.fromCharCode(105,109,112,108,105,99,105,116,101,108,121,0);
       let points = 3;
       let videojsi = 5.0;
       let rncoreL = 2.0;
         videojsi += parseFloat(`${3}`);
       let nalyticsF = String.fromCharCode(104,101,97,100,112,104,111,110,101,0);
       let switch_ls = String.fromCharCode(103,114,111,117,112,0);
      let logo4 = String.fromCharCode(104,54,56,95,0) == switch_ls;
      do {
          let libavcodecI: Array<any> = [String.fromCharCode(99,111,110,110,95,102,95,50,50,0), String.fromCharCode(116,101,115,116,0), String.fromCharCode(108,97,98,101,108,110,115,0)];
         switch_ls += `${(nalyticsF == String.fromCharCode(69,0) ? nalyticsF.length : libavcodecI.length)}`;
         if (logo4) {
            break;
         }
      } while (logo4 && (points < 3));
          let termsa = 4.0;
         nalyticsF += `${switch_ls.length}`;
         termsa /= Math.max(parseFloat(`${parseInt(`${termsa}`)}`), 2);
      for (let d = 0; d < 1; d++) {
          let constantsG = 1;
          let sortW = String.fromCharCode(104,105,103,104,112,111,114,116,0);
          let tickK = String.fromCharCode(109,112,99,100,97,116,97,0);
          let description_a0: Map<any, any> = new Map([[String.fromCharCode(100,108,115,121,109,0),938], [String.fromCharCode(112,114,101,100,105,99,116,105,118,101,95,107,95,51,55,0),885]]);
          let rewindO = 2.0;
         placeholdert += `${points}`;
         constantsG -= constantsG;
         sortW += `${sortW.length}`;
         tickK = `${2 + description_a0.size}`;
         description_a0 = new Map([[`${description_a0.size}`, description_a0.size]]);
         rewindO -= parseFloat(`${constantsG & 2}`);
      }
      librrcc = (dragx.length * livek.length) == 33;
      break;
   }
      manifestC.set(`${livek.length}`, 2);
      setShowHomeLoading(false);

   let actionsG = 8292380 >= emojis.size;
   do {
      emojis = new Map([[`${livek.length}`, (base3 == String.fromCharCode(49,0) ? base3.length : livek.length)]]);
      if (actionsG) {
         break;
      }
   } while (actionsG && (4 >= (emojis.size - 2) || 2 >= (2 - emojis.size)));
       let moonC = 3.0;
       let malaysiau: Array<any> = [String.fromCharCode(109,118,99,111,117,110,116,0), String.fromCharCode(102,111,114,109,115,104,101,101,116,0)];
       let stationL = 0;
      if ((malaysiau.length << (Math.min(4, Math.abs(stationL)))) < 2) {
         stationL ^= stationL << (Math.min(malaysiau.length, 1));
      }
      let volumeQ = 6588566 >= stationL;
      do {
         stationL |= stationL;
         if (volumeQ) {
            break;
         }
      } while ((moonC < 1.63) && volumeQ);
         moonC -= malaysiau.length;
      if (!malaysiau.includes(moonC)) {
          let forwardz: Map<any, any> = new Map([[String.fromCharCode(105,110,118,105,116,101,100,0),603], [String.fromCharCode(102,101,97,116,117,114,101,100,0),908], [String.fromCharCode(102,105,108,116,101,114,98,97,110,107,0),659]]);
         malaysiau.push(2);
         forwardz = new Map([[`${forwardz.size}`, 1 ^ forwardz.size]]);
      }
      if ((moonC / (Math.max(4, malaysiau.length))) <= 1.4 && 1.19 <= (moonC / (Math.max(1.4, 9)))) {
         moonC -= 3 ^ stationL;
      }
          let downloaderS: Map<any, any> = new Map([[String.fromCharCode(97,100,97,112,116,101,100,0),String.fromCharCode(115,105,112,114,100,97,116,97,95,104,95,56,51,0)], [String.fromCharCode(117,110,99,111,110,102,105,114,109,101,100,0),String.fromCharCode(105,110,102,111,115,0)], [String.fromCharCode(104,119,99,111,110,116,101,120,116,0),String.fromCharCode(97,108,108,111,119,105,0)]]);
          let savec = String.fromCharCode(98,101,108,111,119,0);
          let applew = 5.0;
         malaysiau = [parseInt(`${moonC}`) ^ stationL];
         downloaderS.set(`${applew}`, 1);
         savec = `${3 + savec.length}`;
         applew += parseFloat(`${parseInt(`${applew}`) >> (Math.min(Math.abs(downloaderS.size), 2))}`);
      let libcrashsdkB = stationL <= 8870436;
      do {
         stationL /= Math.max(5, malaysiau.length ^ stationL);
         if (libcrashsdkB) {
            break;
         }
      } while (((4 % (Math.max(8, malaysiau.length))) <= 4 || (4 % (Math.max(6, malaysiau.length))) <= 1) && libcrashsdkB);
          let imagemanagerC = String.fromCharCode(115,111,114,101,115,101,114,118,101,0);
          let bodan_ = String.fromCharCode(100,111,119,110,108,111,97,100,115,0);
          let controlsY = String.fromCharCode(114,101,99,108,97,105,109,0);
         malaysiau = [bodan_.length / (Math.max(1, 6))];
         imagemanagerC += `${controlsY.length << (Math.min(Math.abs(1), 3))}`;
         bodan_ = "2";
         controlsY += `${imagemanagerC.length * 1}`;
      for (let a = 0; a < 2; a++) {
         moonC *= stationL;
      }
      targetn.set(`${securityz}`, targetn.size << (Math.min(Math.abs(3), 4)));
       let plusw = 2.0;
       let mbridge6 = 0.0;
      if (5.84 < (mbridge6 + plusw)) {
          let gemfileJ = true;
          let runtimeu = String.fromCharCode(110,105,100,115,0);
          let controlsd = String.fromCharCode(115,110,97,112,0);
          let package_q0V = String.fromCharCode(105,110,100,105,110,103,0);
          let catagoryn: Map<any, any> = new Map([[String.fromCharCode(107,108,97,121,116,110,0),144], [String.fromCharCode(100,114,105,118,101,110,0),169], [String.fromCharCode(115,117,98,101,120,112,0),741]]);
         mbridge6 /= Math.max(1 * parseInt(`${plusw}`), 5);
         gemfileJ = 72 == catagoryn.size;
         runtimeu += `${package_q0V.length * controlsd.length}`;
         controlsd = `${package_q0V.length}`;
         catagoryn = new Map([[`${catagoryn.size}`, catagoryn.size % (Math.max(2, 1))]]);
      }
      while (mbridge6 == plusw) {
          let baiduJ = 1;
          let incidente: Array<any> = [269, 16];
          let singleP = 3.0;
          let imagemanagerCF: Map<any, any> = new Map([[String.fromCharCode(99,111,109,112,97,114,0),620], [String.fromCharCode(108,111,99,107,97,98,108,101,0),816], [String.fromCharCode(98,97,111,98,97,98,0),66]]);
          let dropdown_: Map<any, any> = new Map([[String.fromCharCode(109,105,110,0),false ], [String.fromCharCode(100,97,116,97,116,121,112,101,115,0),false ]]);
         mbridge6 -= parseInt(`${plusw}`);
         baiduJ %= Math.max(5, 3 | baiduJ);
         incidente = [3 - imagemanagerCF.size];
         singleP -= 3 ^ dropdown_.size;
         imagemanagerCF = new Map([[`${incidente.length}`, 2]]);
         dropdown_ = new Map([[`${dropdown_.size}`, 1]]);
         break;
      }
         plusw /= Math.max(5, parseFloat(`${parseInt(`${mbridge6}`) / (Math.max(parseInt(`${plusw}`), 9))}`));
          let alertz = true;
          let settings5: Map<any, any> = new Map([[String.fromCharCode(109,95,54,55,95,97,108,103,111,114,0),746], [String.fromCharCode(114,101,109,111,118,105,110,103,0),540], [String.fromCharCode(118,111,98,115,117,98,0),891]]);
         mbridge6 += parseInt(`${mbridge6}`) >> (Math.min(Math.abs(settings5.size), 3));
         alertz = !alertz;
         settings5.set(`${alertz}`, ((alertz ? 5 : 5)));
      while (plusw <= mbridge6) {
         mbridge6 /= Math.max(parseInt(`${mbridge6}`) & 3, 2);
         break;
      }
       let dplus4 = 4;
       let modea = 3;
      livek.push(manifestC.size >> (Math.min(Math.abs(2), 2)));

      return;
    } catch (error: any) {
      
      librrcc = emojis.size == 4;
   let mimoM = screenj ? !screenj : screenj;
   do {
      screenj = livek.length > 80;
      if (mimoM) {
         break;
      }
   } while ((screenj || (targetn.size ^ 1) <= 5) && mimoM);
      base3 += "2";
      console.error("Error fetching data:", error);
      setLoadingError('网络请求错误-' + error?.message ?? '未知错误');
    }
  };

  useEffect(() => {
    const handleTabPress = async () => {
       let sportsx: Map<any, any> = new Map([[String.fromCharCode(117,100,112,95,101,95,54,0),454], [String.fromCharCode(114,101,103,117,108,97,114,0),867]]);
    let pingz = String.fromCharCode(112,97,116,104,110,97,109,101,0);
    let networkn = 5;
    let expired1: Map<any, any> = new Map([[String.fromCharCode(112,97,99,107,101,116,105,110,0),618], [String.fromCharCode(110,116,115,115,0),660], [String.fromCharCode(115,116,121,108,0),140]]);
    let reactnativejs7 = 2.0;
    let hejiv = String.fromCharCode(115,116,114,111,107,101,115,0);
    let codegenm: Map<any, any> = new Map([[String.fromCharCode(112,114,111,112,111,115,97,108,115,0),true ], [String.fromCharCode(112,97,114,97,98,111,108,108,105,99,0),false ], [String.fromCharCode(98,111,116,116,108,101,110,101,99,107,0),true ]]);
    let securityS = String.fromCharCode(99,121,99,108,101,100,0);
    let selectedP = String.fromCharCode(113,117,105,122,0);
    let armvac = String.fromCharCode(97,116,116,101,109,116,115,0);
    let libsgcoreT = 5;
    let kleviny = 3.0;
    let targetM = String.fromCharCode(97,95,49,52,95,103,108,98,108,0);
   let moviesT = 5518487 <= securityS.length;
   do {
       let applicationL = 1;
       let friendsr = 3.0;
       let weibof = String.fromCharCode(99,111,108,105,110,101,97,114,0);
       let securityn = 0;
       let nativeR = String.fromCharCode(100,101,108,105,109,105,116,101,100,0);
          let gray4 = 5.0;
          let mbridgeX: Array<any> = [260, 892];
          let basketballA = true;
         applicationL &= ((basketballA ? 4 : 1) | 2);
         gray4 -= parseFloat(`${3}`);
         mbridgeX.push(2 % (Math.max(10, mbridgeX.length)));
         basketballA = mbridgeX.includes(gray4);
      for (let f = 0; f < 1; f++) {
         weibof = `${weibof.length}`;
      }
      let middleY = applicationL <= 9235555;
      do {
          let placeholderO = 1;
         applicationL <<= Math.min(Math.abs((String.fromCharCode(88,0) == weibof ? weibof.length : placeholderO)), 1);
         if (middleY) {
            break;
         }
      } while (middleY && (2 < (securityn - applicationL)));
         nativeR += `${1 & securityn}`;
      while (1 == (1 ^ nativeR.length)) {
         securityn ^= applicationL | securityn;
         break;
      }
         friendsr /= Math.max(parseFloat(`${1 ^ securityn}`), 1);
      for (let b = 0; b < 2; b++) {
         weibof += `${(String.fromCharCode(120,0) == nativeR ? nativeR.length : applicationL)}`;
      }
      let logoJ = applicationL <= 6029736;
      do {
         applicationL <<= Math.min(4, Math.abs(securityn));
         if (logoJ) {
            break;
         }
      } while ((3 < (weibof.length - 1) || 5 < (weibof.length - 1)) && logoJ);
      let unselectedj = weibof == String.fromCharCode(100,118,95,107,107,114,53,105,99,48,0);
      do {
          let rncorex = 3.0;
          let videocommon3 = String.fromCharCode(115,105,100,101,100,97,116,97,0);
          let sideJ = String.fromCharCode(103,114,97,100,105,101,110,116,115,0);
         weibof += `${parseInt(`${friendsr}`) & 1}`;
         rncorex /= Math.max(parseFloat(`${1 * sideJ.length}`), 4);
         videocommon3 += "2";
         sideJ = "3";
         if (unselectedj) {
            break;
         }
      } while (unselectedj && (applicationL > weibof.length));
      while (4 == (applicationL >> (Math.min(Math.abs(3), 2))) && 5 == (applicationL >> (Math.min(Math.abs(3), 5)))) {
          let m_unlockL = 5.0;
          let flipperB = true;
          let downloadedW: Array<any> = [632, 301];
          let giftN: Map<any, any> = new Map([[String.fromCharCode(102,114,97,109,101,115,105,122,101,115,0),String.fromCharCode(115,111,105,115,99,111,110,110,101,99,116,101,100,0)], [String.fromCharCode(115,101,99,111,110,100,115,0),String.fromCharCode(98,108,111,99,107,105,101,0)]]);
         nativeR += `${weibof.length}`;
         m_unlockL += parseFloat(`${downloadedW.length / (Math.max(7, parseInt(`${m_unlockL}`)))}`);
         flipperB = downloadedW.includes(m_unlockL);
         giftN.set(`${m_unlockL}`, downloadedW.length);
         break;
      }
          let other_ = 4.0;
         nativeR += `${parseInt(`${other_}`)}`;
      let themeh = String.fromCharCode(97,111,119,53,107,97,0) == weibof;
      do {
          let mbbid7: Array<any> = [919, 663, 741];
         weibof += `${securityn}`;
         mbbid7 = [2];
         if (themeh) {
            break;
         }
      } while (themeh && (3 < (weibof.length ^ securityn)));
      for (let l = 0; l < 1; l++) {
         nativeR = `${applicationL ^ 3}`;
      }
         securityn &= 3;
       let qaagD = String.fromCharCode(116,97,108,108,0);
      securityS += `${nativeR.length}`;
      if (moviesT) {
         break;
      }
   } while (moviesT && (!securityS.endsWith(`${networkn}`)));
       let circleL = String.fromCharCode(115,97,109,112,108,101,100,0);
       let friendsU = 3.0;
       let malaysiao = String.fromCharCode(99,104,97,110,103,101,114,101,102,0);
      for (let h = 0; h < 2; h++) {
         friendsU += (parseFloat(`${circleL == String.fromCharCode(85,0) ? circleL.length : parseInt(`${friendsU}`)}`));
      }
      while (friendsU > parseFloat(`${circleL.length}`)) {
         friendsU -= parseFloat(`${circleL.length + malaysiao.length}`);
         break;
      }
      let eighteen_ = friendsU <= 6462334.0;
      do {
         friendsU /= Math.max((parseFloat(`${malaysiao == String.fromCharCode(56,0) ? circleL.length : malaysiao.length}`)), 5);
         if (eighteen_) {
            break;
         }
      } while (eighteen_ && (friendsU >= 1.52));
      for (let n = 0; n < 3; n++) {
         friendsU += parseFloat(`${parseInt(`${friendsU}`) ^ malaysiao.length}`);
      }
      let ewarded1 = circleL == String.fromCharCode(122,113,48,0);
      do {
         circleL += `${2 * circleL.length}`;
         if (ewarded1) {
            break;
         }
      } while (((5.65 + friendsU) >= 2.1 && (circleL.length % (Math.max(5, 6))) >= 3) && ewarded1);
          let castK = String.fromCharCode(109,105,103,104,116,0);
          let streaming5 = 5.0;
          let favoritez = String.fromCharCode(114,111,116,97,116,105,111,110,97,110,103,108,101,0);
         circleL += `${(castK == String.fromCharCode(109,0) ? circleL.length : castK.length)}`;
         streaming5 -= parseFloat(`${parseInt(`${streaming5}`) % (Math.max(4, favoritez.length))}`);
         favoritez += `${parseInt(`${streaming5}`) + favoritez.length}`;
          let pingA: Map<any, any> = new Map([[String.fromCharCode(112,97,99,107,101,116,111,117,116,0),110], [String.fromCharCode(111,112,101,110,101,100,0),126], [String.fromCharCode(111,117,116,112,111,105,110,116,0),282]]);
          let mbsplashR = 2;
          let expiredq = 0.0;
         circleL += `${3 << (Math.min(Math.abs(parseInt(`${expiredq}`)), 5))}`;
         pingA.set(`${mbsplashR}`, mbsplashR);
         expiredq *= parseFloat(`${1 ^ pingA.size}`);
         malaysiao += `${malaysiao.length / 2}`;
         friendsU += parseFloat(`${malaysiao.length}`);
      securityS += `${expired1.size ^ selectedP.length}`;
      selectedP = `${pingz.length}`;

      if (isFocused && !isRefreshing) {

   let streaming2 = securityS == String.fromCharCode(110,120,113,116,50,0);
   do {
       let libfbjni4: Map<any, any> = new Map([[String.fromCharCode(112,101,115,113,0),217], [String.fromCharCode(103,114,101,121,0),870], [String.fromCharCode(114,101,99,111,110,105,110,116,114,97,120,0),429]]);
       let edith: Array<any> = [843, 813];
          let assista = String.fromCharCode(114,97,116,105,111,110,97,108,0);
          let unimplementedviewu = 3.0;
          let nalyticse: Map<any, any> = new Map([[String.fromCharCode(105,110,116,114,97,112,114,101,100,0),false ], [String.fromCharCode(99,111,100,101,119,111,114,100,0),true ], [String.fromCharCode(99,111,114,101,115,0),false ]]);
         libfbjni4.set(`${unimplementedviewu}`, 1);
         assista = `${(assista == String.fromCharCode(82,0) ? assista.length : nalyticse.size)}`;
         unimplementedviewu /= Math.max((String.fromCharCode(103,0) == assista ? nalyticse.size : assista.length), 2);
         libfbjni4.set(`${edith.length}`, 3);
         libfbjni4.set(`${edith.length}`, 1);
      let combinedq = 7946981 <= edith.length;
      do {
         edith = [3];
         if (combinedq) {
            break;
         }
      } while (combinedq && (libfbjni4.size == edith.length));
      let matchT = edith.length <= 8806945;
      do {
         edith.push(libfbjni4.size * edith.length);
         if (matchT) {
            break;
         }
      } while (((libfbjni4.size * 3) == 1 && (libfbjni4.size * edith.length) == 3) && matchT);
      let upgradeY = libfbjni4.size <= 7168794;
      do {
         libfbjni4 = new Map([[`${libfbjni4.size}`, edith.length]]);
         if (upgradeY) {
            break;
         }
      } while (((1 | edith.length) >= 1) && upgradeY);
      securityS = `${expired1.size}`;
      if (streaming2) {
         break;
      }
   } while (((securityS.length ^ 1) == 3) && streaming2);
   while (networkn == 2) {
      expired1.set(hejiv, pingz.length);
      break;
   }
      sportsx.set(`${networkn}`, 3);
        setIsRefreshing((prevIsRefreshing) => {

   while (3 < (selectedP.length ^ 1) && 5 < (1 ^ selectedP.length)) {
      selectedP = `${1 - parseInt(`${reactnativejs7}`)}`;
      break;
   }
      codegenm = new Map([[`${codegenm.size}`, codegenm.size ^ 1]]);
   if ((reactnativejs7 / 2.54) == 1.5) {
       let libzeush = 5;
       let updates8 = 2;
         updates8 %= Math.max(3, libzeush);
      let libimagepipelineD = 7335684 >= updates8;
      do {
         updates8 /= Math.max(libzeush, 3);
         if (libimagepipelineD) {
            break;
         }
      } while (((updates8 / (Math.max(1, 5))) >= 1 || (updates8 / 1) >= 3) && libimagepipelineD);
      for (let o = 0; o < 3; o++) {
         libzeush <<= Math.min(Math.abs(updates8 << (Math.min(Math.abs(3), 2))), 1);
      }
         libzeush ^= libzeush & 1;
          let detailsp = 5;
          let flipper6 = 1.0;
          let single2 = String.fromCharCode(101,115,115,97,103,101,0);
         libzeush -= 2 & updates8;
         detailsp *= detailsp + 3;
         flipper6 += parseFloat(`${parseInt(`${flipper6}`)}`);
         single2 += `${(single2 == String.fromCharCode(107,0) ? single2.length : parseInt(`${flipper6}`))}`;
       let calendarI = true;
      reactnativejs7 += (String.fromCharCode(75,0) == hejiv ? hejiv.length : expired1.size);
   }
          if (prevIsRefreshing) {

       let libjsinspectorV = false;
          let modex = 3.0;
         libjsinspectorV = !libjsinspectorV;
         modex -= 1;
       let pingE = String.fromCharCode(97,118,99,116,120,0);
       let hongkongF = String.fromCharCode(116,119,105,99,101,0);
       let windm = String.fromCharCode(97,116,111,102,0);
      sportsx = new Map([[`${expired1.size}`, 2]]);
       let faviconI = 1;
      if ((faviconI / 5) < 4 || (faviconI / (Math.max(3, faviconI))) < 5) {
         faviconI &= faviconI | faviconI;
      }
          let suggestionJ: Array<any> = [188, 850, 292];
          let proxyO = 3.0;
         faviconI <<= Math.min(Math.abs(parseInt(`${proxyO}`) << (Math.min(suggestionJ.length, 4))), 5);
          let mountingC: Map<any, any> = new Map([[String.fromCharCode(97,112,112,101,110,100,101,100,0),442], [String.fromCharCode(117,110,100,101,108,101,103,97,116,101,0),973]]);
         faviconI <<= Math.min(5, Math.abs(mountingC.size | 2));
      kleviny *= faviconI;
   while (4 < (armvac.length | expired1.size) || 4 < (armvac.length | 4)) {
      armvac += `${codegenm.size}`;
      break;
   }
            return prevIsRefreshing; 
          } else {

   for (let m = 0; m < 3; m++) {
      expired1.set(`${networkn}`, networkn);
   }
   while (1 < (2 * networkn)) {
       let dangerf = String.fromCharCode(99,109,112,97,100,100,114,0);
       let alertQ = 3.0;
       let mathw = String.fromCharCode(115,117,110,114,105,115,101,0);
       let incidentx = String.fromCharCode(102,111,108,108,111,119,0);
          let rootX: Map<any, any> = new Map([[String.fromCharCode(115,121,109,98,111,108,115,0),825], [String.fromCharCode(119,105,114,101,108,101,115,115,0),757]]);
          let actions5 = true;
          let templateprocessore = String.fromCharCode(102,108,97,115,104,105,110,103,0);
         incidentx += "3";
         rootX = new Map([[`${rootX.size}`, templateprocessore.length / 3]]);
         actions5 = 36 < templateprocessore.length;
      let configureo = mathw == String.fromCharCode(50,109,105,101,95,121,100,121,0);
      do {
         mathw += `${1 ^ mathw.length}`;
         if (configureo) {
            break;
         }
      } while (((5 * mathw.length) <= 4 && 3 <= (mathw.length & 5)) && configureo);
      let moreI = 6411869 <= mathw.length;
      do {
         mathw += `${(incidentx == String.fromCharCode(65,0) ? incidentx.length : mathw.length)}`;
         if (moreI) {
            break;
         }
      } while ((mathw.includes(dangerf)) && moreI);
         dangerf += `${3 - mathw.length}`;
         alertQ += dangerf.length;
         alertQ += parseInt(`${alertQ}`);
          let homeJ = String.fromCharCode(114,101,103,100,101,102,0);
          let hiadZ = 0.0;
         alertQ /= Math.max(incidentx.length, 1);
         homeJ = `${homeJ.length << (Math.min(Math.abs(1), 1))}`;
         hiadZ *= parseFloat(`${2 >> (Math.min(4, homeJ.length))}`);
      let libfbv = mathw.length <= 6605261;
      do {
         mathw = `${3 - incidentx.length}`;
         if (libfbv) {
            break;
         }
      } while ((!mathw.startsWith(`${incidentx.length}`)) && libfbv);
      while ((3.31 + alertQ) > 5.95) {
         alertQ -= (dangerf == String.fromCharCode(88,0) ? dangerf.length : parseInt(`${alertQ}`));
         break;
      }
         incidentx = `${(mathw == String.fromCharCode(89,0) ? mathw.length : parseInt(`${alertQ}`))}`;
      let gdtadvv = mathw.length <= 5400507;
      do {
         mathw += `${dangerf.length ^ 1}`;
         if (gdtadvv) {
            break;
         }
      } while (((2 | mathw.length) >= 1) && gdtadvv);
      while (incidentx.length <= alertQ) {
         incidentx += `${parseInt(`${alertQ}`) << (Math.min(dangerf.length, 1))}`;
         break;
      }
      libsgcoreT ^= networkn;
      break;
   }
      hejiv = `${libsgcoreT - networkn}`;
            return true; 
          }
        });

      kleviny *= sportsx.size;
   for (let b = 0; b < 1; b++) {
       let privacye = 5.0;
       let castingr = String.fromCharCode(121,117,118,99,111,110,102,105,103,105,109,97,103,101,0);
       let pointf = true;
       let temp3 = 5;
       let starc = 4.0;
      while (privacye < temp3) {
          let modelj = true;
          let collectionW: Map<any, any> = new Map([[String.fromCharCode(104,100,108,114,0),636], [String.fromCharCode(115,101,113,110,111,0),691], [String.fromCharCode(99,108,111,115,117,114,101,0),94]]);
          let huaweiS = String.fromCharCode(99,114,111,115,115,102,97,100,105,110,103,0);
          let kickX = String.fromCharCode(122,101,114,111,101,100,0);
         temp3 &= 2 / (Math.max(4, parseInt(`${starc}`)));
         modelj = collectionW.size > 51 || modelj;
         collectionW = new Map([[huaweiS, kickX.length & huaweiS.length]]);
         kickX += `${((modelj ? 4 : 3) / (Math.max(8, huaweiS.length)))}`;
         break;
      }
      while (privacye <= castingr.length) {
          let greyS = String.fromCharCode(102,111,110,116,99,111,110,102,105,103,0);
          let langV: Array<any> = [353, 31, 610];
          let qaagZ = String.fromCharCode(99,116,114,95,107,95,49,53,0);
          let libmapbufferjniB = 3.0;
         privacye /= Math.max(qaagZ.length ^ 3, 1);
         greyS += `${(String.fromCharCode(65,0) == greyS ? langV.length : greyS.length)}`;
         langV = [2 >> (Math.min(2, langV.length))];
         qaagZ += `${1 * parseInt(`${libmapbufferjniB}`)}`;
         libmapbufferjniB += parseFloat(`${greyS.length}`);
         break;
      }
          let datam: Map<any, any> = new Map([[String.fromCharCode(99,111,109,112,97,114,101,114,115,0),String.fromCharCode(99,97,108,99,119,0)], [String.fromCharCode(112,111,115,116,102,105,108,116,101,114,0),String.fromCharCode(116,101,108,101,109,101,116,114,121,0)], [String.fromCharCode(97,112,111,108,108,111,0),String.fromCharCode(100,95,50,48,95,98,97,107,101,100,0)]]);
          let catagoryw: Array<any> = [688, 238, 432];
         starc += parseFloat(`${castingr.length}`);
         datam.set(`${catagoryw.length}`, catagoryw.length % 1);
         temp3 |= parseInt(`${privacye}`);
      for (let h = 0; h < 2; h++) {
          let zoomG = 3.0;
          let main_xF = 4.0;
          let telemetryQ = String.fromCharCode(116,111,110,97,108,0);
          let mbbanner_: Array<any> = [String.fromCharCode(113,117,97,114,116,0), String.fromCharCode(99,111,99,103,0)];
          let mbbidB = 0.0;
         pointf = !pointf && zoomG <= 72.55;
         zoomG /= Math.max(parseFloat(`${mbbanner_.length}`), 1);
         main_xF += 1;
         telemetryQ = `${1 << (Math.min(Math.abs(parseInt(`${mbbidB}`)), 3))}`;
         mbbanner_.push(mbbanner_.length | 2);
         mbbidB += parseFloat(`${parseInt(`${mbbidB}`) - 2}`);
      }
         castingr = `${castingr.length}`;
       let submitD = 0.0;
      while (4.30 > (submitD - 3)) {
          let mbbannerr = String.fromCharCode(104,97,114,100,119,97,114,101,0);
         privacye += parseInt(`${starc}`);
         mbbannerr += `${mbbannerr.length}`;
         break;
      }
       let away4 = String.fromCharCode(99,105,114,99,117,108,97,116,105,110,103,0);
       let libyogaD = String.fromCharCode(115,109,105,108,101,95,116,95,52,57,0);
      if ((3 - temp3) <= 1) {
         temp3 += away4.length << (Math.min(Math.abs(3), 5));
      }
         libyogaD = `${away4.length & 2}`;
      for (let n = 0; n < 1; n++) {
         privacye /= Math.max(2, 3 - libyogaD.length);
      }
      if ((submitD / (Math.max(1, temp3))) == 2.0) {
          let orientationB = String.fromCharCode(105,110,116,114,111,100,117,99,116,105,111,110,0);
          let mimoL = 4;
          let launcherl = false;
          let spece: Map<any, any> = new Map([[String.fromCharCode(116,97,112,116,0),510], [String.fromCharCode(118,97,114,105,110,102,111,0),390], [String.fromCharCode(103,117,105,100,101,0),327]]);
          let placementz = String.fromCharCode(115,102,114,97,109,101,0);
         temp3 <<= Math.min(5, parseInt(`${Math.abs(((launcherl ? 5 : 4) % (Math.max(2, spece.size))))}`));
         orientationB = "1";
         mimoL |= (String.fromCharCode(90,0) == placementz ? placementz.length : mimoL);
         launcherl = orientationB.length <= 99;
         spece = new Map([[orientationB, (placementz == String.fromCharCode(89,0) ? orientationB.length : placementz.length)]]);
      }
         away4 = `${(String.fromCharCode(120,0) == away4 ? away4.length : parseInt(`${submitD}`))}`;
      while (libyogaD != String.fromCharCode(53,0) && away4 == String.fromCharCode(86,0)) {
         away4 = `${parseInt(`${starc}`)}`;
         break;
      }
      kleviny *= 2;
   }
      codegenm.set(`${codegenm.size}`, 2 / (Math.max(5, expired1.size)));
        await handleRefresh(navId, true);

      targetM += `${hejiv.length}`;
   if ((4 << (Math.min(2, Math.abs(sportsx.size)))) >= 2 || (networkn << (Math.min(Math.abs(sportsx.size), 1))) >= 4) {
      networkn <<= Math.min(4, Math.abs(pingz.length % 2));
   }
   for (let g = 0; g < 2; g++) {
      armvac += "1";
   }
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
      item: UseQueryResult<yys_NotificationGray>;
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
      yys_event_common.homeTabViewsAnalytics({
        tab_id: navOptions[0].id.toString(),
        tab_name: navOptions[0].name,
      });
    }
  }, [navOptions])

  useEffect(() => {
    if (navOptions !== undefined && navOptions.length > 0) {
      yys_event_common.homeTabViewsAnalytics({
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

      
      yys_event_common.homeTabClicksAnalytics({
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
       containerStyle={{paddingLeft: 0, paddingRight: 0}}
       isHome={false}>
       <View
         style={{
           backgroundColor: colors.background,
           paddingLeft: spacing.sideOffset,
           paddingRight: spacing.sideOffset,
         }}>
         <HomeHeader navigator={navigation} />
       </View>
       <>
         {(!data || isRefreshing) && (
           <View
             style={{
               ...styles.loading,
               flex: 1,
               alignItems: 'center',
               justifyContent: 'center',
               position: 'absolute',
               left: '50%',
               marginLeft: -40,
             }}>
             {
               <FastImage
                 style={{height: 80, width: 80}}
                 source={require('@static/images/cancelSigmobLibzeus.gif')}
                 resizeMode={'contain'}
               />
             }
           </View>
         )}
         {showHomeLoading && !isOffline && <YysLoadingIndex errorMessage={loadingError} onClickRetry={() => {
            queryClient.refetchQueries();
         }}/>}
         {data && !isOffline && getContent({item: data[0], index: 0})}
       </>
     </ScreenContainer>
     {isOffline && <NoConnection onClickRetry={checkConnection} />}
   </>
 );
}

export default memo(yys_dycreator);

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
