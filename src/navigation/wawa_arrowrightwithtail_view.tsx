import React, { useCallback, useEffect, useState } from "react";
import { View } from "react-native";
import { useInfiniteQuery } from "@tanstack/react-query";
import FastImage from "../components/common/wawa_iconarrowrightblack";
import Nav from "../../src/navigation/wawa_gradle_view";
import { EventSpash } from "../../src/navigation/wawa_team";
import NavIos from "@iosScreen/navigation/wawa_gradle_view";

import {
  TOTAL_VIDEO_TO_DOWNLOAD,
  DOWNLOAD_WATCH_ANYTIME,
  GOOGLE_SINGIN_CLIENT_WEB,
  GOOGLE_SINGIN_CLIENT_IOS,
  SHOW_ZF_CONST,
} from "@utility/wawa_iconpointscore";
import { wawaBasketballiconPenaltyshootnogoal } from "../../wawa_shareblack_orientation";
import { Platform } from "react-native";
import wawaLibjsinspector from "../../src/Sports/middleware/wawa_ping";
import { Url } from "../../src/Sports/middleware/wawa_iconfeedback";
import Config from "../../src/Sports/global/wawa_predictionbutton_view";
import { wawaYellowvideolive } from "../../src/Sports/global/wawa_mini";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AdsBannerContextProvider } from "../contexts/wawa_analytics";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { downloadFirstNVid } from "../utils/wawa_notificationfillempty_models";
import { fetchMiniVods } from "../api/wawa_delegate_background";
import { wawaHiadCanvas, wawaGreyarrowupTelemetry, wawaEvent } from "@api";
import {
  hideLoginAction,
  setIsHomeGuideShown,
  setIsMiniVodGuideShown,
  setIsPlayGuideShown,
  setIsPlayGuideShown2,
  setIsSportGuideShown,
} from "@redux/actions/wawa_related";
import { useDispatch } from "react-redux";
import NetInfo from "@react-native-community/netinfo";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/wawa_root";
import { wawaIconsubssuccess } from "@redux/wawa_bgvipsport_spinner";
import { screenModel } from "@type/wawa_rules";
import { withIAPContext } from "react-native-iap";
import DeviceInfo from "react-native-device-info";
import { addUserAuthState } from "@redux/actions/wawa_loginsuccess";
import { onBootApp, onCloseApp } from "@redux/actions/wawa_regeng_neon";
import { wawaPhoneControls } from "@redux/reducers/wawa_umeng";
import { wawaLibglog } from "@models/wawa_refreshborderless_found";

export default () => {
  const appDispatch = useAppDispatch();
  const [loadedAPI, setLoadedAPI] = useState(false);
  const [areaNavConfig, setAreaNavConfig] = useState(false);
  const [isSuper, setIsSuper] = useState(false);

  const userState = useSelector<wawaPhoneControls>("userReducer");

  const dispatch = useDispatch();

  const isVip = wawaLibglog.isVip(userState.user);

  const [isConnected, setIsConnected] = useState(true);

  const screenState: screenModel = useAppSelector(
    ({ screenReducer }: wawaIconsubssuccess) => screenReducer
  );

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state: any) => {
      setIsConnected(state.isConnected);
      if (state.isConnected === false) setAreaNavConfig(true);
    });

    if (userState.user !== null && userState.user !== undefined) {
      dispatch(addUserAuthState(new wawaLibglog(userState.user)));
    }

    return () => {
      
      unsubscribe();
      appDispatch(onCloseApp());
    };
  }, []);

  

  const guestLoginInit = async () => {
       let yellowredcardq: Array<any> = [36, 412, 896];
    let lista = true;
    let cornerD = true;
    let tempnodatagifa = String.fromCharCode(108,115,112,102,108,112,99,0);
    let push7 = 0.0;
    let mutedt: Map<any, any> = new Map([[String.fromCharCode(110,116,101,114,102,97,99,101,0),234], [String.fromCharCode(99,105,110,101,0),28]]);
    let filledB = 3.0;
    let filterv = String.fromCharCode(104,111,108,100,0);
    let fcdaebecbcbafcdfceaaeccfeacdbJ = String.fromCharCode(115,117,109,115,113,0);
    let basketballawayteamH = false;
    let redgoalU = String.fromCharCode(99,101,108,108,115,0);
    let basketballiconn = 0.0;
       let long__fD = 4.0;
         long__fD *= parseInt(`${long__fD}`) - parseInt(`${long__fD}`);
         long__fD *= 2;
      while (4.50 == long__fD) {
         long__fD += 1;
         break;
      }
      filterv += `${yellowredcardq.length}`;
   let binddatasw = basketballawayteamH ? !basketballawayteamH : basketballawayteamH;
   do {
       let ajaxq = true;
       let typingt = String.fromCharCode(109,105,100,108,0);
       let alert8 = String.fromCharCode(109,107,118,112,97,114,115,101,114,0);
         ajaxq = typingt.length >= 74;
         alert8 = `${(typingt == String.fromCharCode(74,0) ? (ajaxq ? 3 : 2) : typingt.length)}`;
         typingt += `${(String.fromCharCode(88,0) == typingt ? typingt.length : (ajaxq ? 4 : 1))}`;
      while (5 == alert8.length) {
         ajaxq = typingt.length <= 95;
         break;
      }
         alert8 = "1";
          let reviewP: Array<any> = [483, 417];
          let gesturesz = String.fromCharCode(103,114,101,97,116,101,114,0);
          let langkey0 = String.fromCharCode(98,105,111,109,101,116,114,105,99,115,0);
         ajaxq = 67 == typingt.length || String.fromCharCode(122,0) == gesturesz;
         reviewP = [3 - langkey0.length];
         gesturesz = `${2 * reviewP.length}`;
         langkey0 += `${langkey0.length}`;
      for (let f = 0; f < 3; f++) {
         ajaxq = typingt.length > alert8.length;
      }
      for (let c = 0; c < 2; c++) {
         typingt = `${typingt.length * 2}`;
      }
         typingt += "1";
      basketballawayteamH = !filterv.startsWith(`${filledB}`);
      if (binddatasw) {
         break;
      }
   } while ((2 <= mutedt.size || (2 << (Math.min(2, Math.abs(mutedt.size)))) <= 3) && binddatasw);
      basketballawayteamH = mutedt.size < parseInt(`${push7}`);
   while ((1 & filterv.length) < 2 && 4 < (filterv.length * 1)) {
       let iconnotificationnewk = 3.0;
       let whistlep: Array<any> = [903, 367];
       let brightness8 = 4.0;
         whistlep = [parseInt(`${brightness8}`) << (Math.min(2, Math.abs(2)))];
         iconnotificationnewk /= Math.max(whistlep.length % (Math.max(10, parseInt(`${iconnotificationnewk}`))), 4);
          let arrowrightd = String.fromCharCode(115,117,99,99,101,115,115,0);
          let profileinactiveB = 4;
         whistlep = [whistlep.length];
         arrowrightd = `${profileinactiveB}`;
         profileinactiveB %= Math.max(1, arrowrightd.length);
         brightness8 /= Math.max(2, parseInt(`${iconnotificationnewk}`) >> (Math.min(whistlep.length, 5)));
         brightness8 -= parseInt(`${iconnotificationnewk}`) ^ 3;
      if (1.100 > (brightness8 / (Math.max(whistlep.length, 4))) || 2 > (whistlep.length ^ 2)) {
         brightness8 -= parseInt(`${brightness8}`) - 1;
      }
      while (5.47 < (brightness8 + 3.83) || (iconnotificationnewk + 3.83) < 5.32) {
         iconnotificationnewk -= 1 << (Math.min(2, whistlep.length));
         break;
      }
         whistlep = [1];
         whistlep = [parseInt(`${iconnotificationnewk}`)];
      filledB /= Math.max(parseFloat(`${fcdaebecbcbafcdfceaaeccfeacdbJ.length + 3}`), 2);
      break;
   }
   while (!basketballawayteamH) {
      basketballawayteamH = !filterv.startsWith(`${push7}`);
      break;
   }
   if (5 < (yellowredcardq.length % 2) && 2 < (parseInt(`${push7}`) / (Math.max(3, yellowredcardq.length)))) {
      push7 += 1 * fcdaebecbcbafcdfceaaeccfeacdbJ.length;
   }
   if (!fcdaebecbcbafcdfceaaeccfeacdbJ.startsWith(`${yellowredcardq.length}`)) {
      fcdaebecbcbafcdfceaaeccfeacdbJ = `${parseInt(`${filledB}`)}`;
   }
       let awayteamfieldq = String.fromCharCode(109,115,101,112,115,110,114,0);
       let contextW = 3;
       let macauE = 1.0;
      while (awayteamfieldq.endsWith(`${contextW}`)) {
         awayteamfieldq += `${contextW}`;
         break;
      }
         macauE += parseFloat(`${contextW | 1}`);
         awayteamfieldq += "2";
          let videovarv = true;
         contextW /= Math.max(4, contextW);
         videovarv = (!videovarv ? !videovarv : videovarv);
      if (!awayteamfieldq.includes(`${macauE}`)) {
          let heji3 = String.fromCharCode(115,112,100,105,102,0);
          let w_lockv: Array<any> = [857, 27];
         macauE -= (parseFloat(`${String.fromCharCode(110,0) == awayteamfieldq ? contextW : awayteamfieldq.length}`));
         heji3 += `${heji3.length << (Math.min(1, w_lockv.length))}`;
         w_lockv.push((heji3 == String.fromCharCode(97,0) ? heji3.length : w_lockv.length));
      }
      let otheru = 6641698.0 >= macauE;
      do {
         macauE /= Math.max(2, parseFloat(`${awayteamfieldq.length}`));
         if (otheru) {
            break;
         }
      } while (otheru && ((contextW * parseInt(`${macauE}`)) > 3 || 2 > (3 / (Math.max(3, contextW)))));
          let penaltyshoot2 = String.fromCharCode(112,114,111,116,111,0);
         awayteamfieldq += `${2 | contextW}`;
         penaltyshoot2 = `${penaltyshoot2.length}`;
      while ((2 / (Math.max(2, awayteamfieldq.length))) > 2 && 4 > (2 / (Math.max(1, awayteamfieldq.length)))) {
         contextW -= parseInt(`${macauE}`) | awayteamfieldq.length;
         break;
      }
      for (let y = 0; y < 3; y++) {
         macauE += (parseFloat(`${String.fromCharCode(116,0) == awayteamfieldq ? awayteamfieldq.length : contextW}`));
      }
      lista = !lista || fcdaebecbcbafcdfceaaeccfeacdbJ.length <= 4;

    if (userState.user === null) {

   for (let v = 0; v < 2; v++) {
       let pressureb: Array<any> = [String.fromCharCode(101,108,115,116,0), String.fromCharCode(112,111,115,105,116,105,111,110,105,110,103,0)];
         pressureb.push(pressureb.length + pressureb.length);
      while (pressureb.length == pressureb.length) {
         pressureb = [pressureb.length + 2];
         break;
      }
      for (let t = 0; t < 3; t++) {
         pressureb.push(2 >> (Math.min(4, pressureb.length)));
      }
      fcdaebecbcbafcdfceaaeccfeacdbJ += "3";
   }
   while (lista) {
      lista = (push7 * redgoalU.length) <= 44.53;
      break;
   }
   if (!cornerD) {
      cornerD = filterv.length < fcdaebecbcbafcdfceaaeccfeacdbJ.length;
   }
       let homeplayerK = 0.0;
          let pageq = String.fromCharCode(102,114,97,109,101,0);
         homeplayerK += parseFloat(`${1}`);
         pageq += `${pageq.length}`;
      for (let l = 0; l < 3; l++) {
         homeplayerK /= Math.max(4, parseFloat(`${parseInt(`${homeplayerK}`) % 3}`));
      }
         homeplayerK /= Math.max(parseFloat(`${3 - parseInt(`${homeplayerK}`)}`), 2);
      lista = 97 < filterv.length;
       let areaB = 3.0;
      for (let v = 0; v < 1; v++) {
          let basketballplayerplaceholderO = String.fromCharCode(108,111,110,103,98,105,103,0);
          let networka: Map<any, any> = new Map([[String.fromCharCode(111,103,103,118,111,114,98,105,115,0),160], [String.fromCharCode(109,97,115,116,101,114,105,110,103,0),834], [String.fromCharCode(99,111,109,112,111,115,105,116,101,0),643]]);
          let iconclosewhitebg_: Array<any> = [String.fromCharCode(102,105,108,101,110,97,109,101,0), String.fromCharCode(114,101,99,111,110,102,105,103,117,114,97,98,108,101,0)];
          let unreadO = 2.0;
          let libavdevicea = 4.0;
         areaB -= parseInt(`${areaB}`);
         basketballplayerplaceholderO += `${basketballplayerplaceholderO.length % (Math.max(1, 8))}`;
         networka = new Map([[`${iconclosewhitebg_.length}`, 3 >> (Math.min(1, basketballplayerplaceholderO.length))]]);
         iconclosewhitebg_ = [(String.fromCharCode(48,0) == basketballplayerplaceholderO ? iconclosewhitebg_.length : basketballplayerplaceholderO.length)];
         unreadO += parseFloat(`${parseInt(`${libavdevicea}`) + parseInt(`${unreadO}`)}`);
         libavdevicea += parseFloat(`${iconclosewhitebg_.length - 1}`);
      }
       let viewss: Array<any> = [25, 622];
       let statsn: Array<any> = [988, 446, 211];
          let successl = 1.0;
         areaB *= parseInt(`${areaB}`);
         successl -= parseInt(`${successl}`) & 1;
      basketballawayteamH = fcdaebecbcbafcdfceaaeccfeacdbJ.length >= 100;
   let root5 = mutedt.size <= 5330198;
   do {
      mutedt.set(tempnodatagifa, tempnodatagifa.length + 1);
      if (root5) {
         break;
      }
   } while ((1 >= (4 >> (Math.min(2, Math.abs(mutedt.size)))) || (4 >> (Math.min(5, fcdaebecbcbafcdfceaaeccfeacdbJ.length))) >= 3) && root5);
      yellowredcardq.push(3);
      cornerD = !lista;
      const user = await wawaEvent.guestLogin();

   if (mutedt.size <= parseInt(`${filledB}`)) {
       let neon0 = String.fromCharCode(116,105,116,108,101,98,97,114,0);
       let taila = String.fromCharCode(107,101,121,102,114,97,109,101,115,0);
       let predictionactiveq: Map<any, any> = new Map([[String.fromCharCode(115,117,98,108,97,121,101,114,0),false ], [String.fromCharCode(97,114,109,108,105,110,107,0),true ]]);
         predictionactiveq = new Map([[taila, (String.fromCharCode(78,0) == neon0 ? neon0.length : taila.length)]]);
      if (4 < (predictionactiveq.size - neon0.length) || (predictionactiveq.size - neon0.length) < 4) {
         neon0 += `${predictionactiveq.size}`;
      }
         taila = `${predictionactiveq.size & neon0.length}`;
      while ((5 * predictionactiveq.size) <= 5 && (5 * taila.length) <= 4) {
         taila += `${taila.length}`;
         break;
      }
          let matchesE = String.fromCharCode(116,111,121,115,0);
          let bodanJ = String.fromCharCode(100,105,115,97,112,112,101,97,114,105,110,103,0);
          let libffmpegkitT = String.fromCharCode(98,97,100,103,101,0);
         predictionactiveq = new Map([[`${predictionactiveq.size}`, 1 + matchesE.length]]);
         matchesE += `${bodanJ.length}`;
         bodanJ = `${libffmpegkitT.length + bodanJ.length}`;
         libffmpegkitT += `${(bodanJ == String.fromCharCode(112,0) ? bodanJ.length : libffmpegkitT.length)}`;
          let mbbannert = false;
          let yellowcirclebgv = String.fromCharCode(99,111,109,112,97,114,101,114,115,0);
         taila += `${((mbbannert ? 5 : 1) & yellowcirclebgv.length)}`;
          let reactf: Array<any> = [15, 994];
         neon0 = `${neon0.length}`;
         reactf.push(reactf.length);
       let controlsV = String.fromCharCode(112,111,108,105,99,101,0);
         controlsV += `${controlsV.length}`;
      mutedt = new Map([[`${cornerD}`, parseInt(`${filledB}`) << (Math.min(3, Math.abs(3)))]]);
   }
   for (let d = 0; d < 2; d++) {
      basketballawayteamH = parseInt(`${filledB}`) < mutedt.size;
   }
      basketballawayteamH = fcdaebecbcbafcdfceaaeccfeacdbJ == filterv;
      cornerD = lista;
      filledB /= Math.max(parseFloat(`${tempnodatagifa.length}`), 1);
      redgoalU = `${parseInt(`${basketballiconn}`)}`;
      filterv = `${3 / (Math.max(7, parseInt(`${basketballiconn}`)))}`;
      lista = redgoalU == String.fromCharCode(65,0);

      await dispatch(addUserAuthState(user));
    }
  };

  const onAppInit = async () => {
       let footballF: Map<any, any> = new Map([[String.fromCharCode(115,116,114,110,99,97,115,101,99,109,112,0),80], [String.fromCharCode(106,112,101,103,0),829]]);
    let gmailH: Map<any, any> = new Map([[String.fromCharCode(98,105,110,100,0),658], [String.fromCharCode(109,108,112,100,115,112,0),726], [String.fromCharCode(101,114,114,111,114,99,98,0),1000]]);
    let iconclosewhitewithbgR = 0;
    let renewf = String.fromCharCode(116,98,108,104,100,114,0);
    let yellowcirclebg4 = true;
    let actionr = true;
    let downloadingV = String.fromCharCode(102,114,97,109,101,98,117,102,102,101,114,0);
    let telegram7 = 5.0;
    let iconpointscorep = String.fromCharCode(115,117,109,109,97,114,121,0);
    let bootsplashN = String.fromCharCode(116,102,104,100,0);
    let turnz = 4.0;
    let zhengpianZ = true;
    let iconwatchnowW = 0.0;
    let with_huv: Array<any> = [606, 504, 490];
   let iconbellactiveX = actionr ? !actionr : actionr;
   do {
      actionr = (bootsplashN.length * renewf.length) <= 86;
      if (iconbellactiveX) {
         break;
      }
   } while (iconbellactiveX && (actionr));

    try {

   while (4 <= (downloadingV.length - iconclosewhitewithbgR)) {
       let goalM: Map<any, any> = new Map([[String.fromCharCode(103,117,105,100,101,115,0),true ], [String.fromCharCode(109,106,112,101,103,101,110,99,0),true ], [String.fromCharCode(105,111,115,117,114,102,97,99,101,0),true ]]);
          let basketballplayerplaceholderQ = 2.0;
         goalM = new Map([[`${goalM.size}`, 1]]);
         basketballplayerplaceholderQ *= parseInt(`${basketballplayerplaceholderQ}`) * parseInt(`${basketballplayerplaceholderQ}`);
          let libglogJ = 0.0;
          let empty1 = String.fromCharCode(99,111,109,109,105,116,0);
         goalM = new Map([[`${libglogJ}`, parseInt(`${libglogJ}`) * empty1.length]]);
      let showmoreB = goalM.size >= 6593805;
      do {
          let libswresampleK = String.fromCharCode(105,116,120,102,109,0);
          let controlsU = 0;
          let updatesN = String.fromCharCode(112,104,114,97,115,101,115,0);
         goalM = new Map([[`${controlsU}`, (updatesN == String.fromCharCode(65,0) ? updatesN.length : controlsU)]]);
         libswresampleK += `${libswresampleK.length}`;
         if (showmoreB) {
            break;
         }
      } while (showmoreB && ((goalM.size ^ 1) == 1 && (goalM.size ^ goalM.size) == 1));
      downloadingV += `${((yellowcirclebg4 ? 2 : 5) * renewf.length)}`;
      break;
   }
      await guestLoginInit();

   if (2 <= (parseInt(`${telegram7}`) * iconpointscorep.length) || (4.89 * telegram7) <= 4.66) {
      iconpointscorep = "1";
   }
      await Promise.all([wawaHiadCanvas.getLocalIpAddress(), wawaHiadCanvas.getBottomNav()]);
    } catch (err) {

   for (let n = 0; n < 2; n++) {
      actionr = (iconclosewhitewithbgR & gmailH.size) < 92;
   }
      setTimeout(() => {

      yellowcirclebg4 = bootsplashN.length < 26;
        onAppInit;
      }, 3000);

   while (!Array.from(footballF.keys()).includes(`${iconclosewhitewithbgR}`)) {
       let flyerw = 3.0;
       let privatechatbgm = String.fromCharCode(112,114,101,100,101,99,101,115,115,111,114,0);
      if (1.89 == (5.35 - flyerw)) {
         privatechatbgm += `${parseInt(`${flyerw}`) % (Math.max(privatechatbgm.length, 1))}`;
      }
         privatechatbgm += `${privatechatbgm.length}`;
      iconclosewhitewithbgR *= iconpointscorep.length;
      break;
   }
    }

    const res = await wawaLibjsinspector.call(
      Url.getConfig,
      { channel: Config.channelId },
      "GET"
    );

      telegram7 *= parseFloat(`${bootsplashN.length}`);
    if (res.success) {

      downloadingV += `${(iconpointscorep == String.fromCharCode(51,0) ? (actionr ? 2 : 1) : iconpointscorep.length)}`;
      wawaYellowvideolive.instance.setConfig(res.data);
    }

    try {

      bootsplashN = `${iconclosewhitewithbgR / 3}`;
      const locationResp = await wawaHiadCanvas.postLocation();

   for (let h = 0; h < 3; h++) {
      footballF = new Map([[`${yellowcirclebg4}`, iconclosewhitewithbgR]]);
   }

      if (locationResp !== undefined && locationResp !== null) {

   if (iconclosewhitewithbgR >= gmailH.size) {
      gmailH.set(`${footballF.size}`, footballF.size * 1);
   }
        console.log("locationResp.is_appsflyer_production");

       let libfbh = String.fromCharCode(103,114,97,110,117,108,101,112,111,115,0);
       let pingu = String.fromCharCode(115,105,100,101,115,0);
       let wifirouterf = String.fromCharCode(97,98,98,114,0);
      for (let b = 0; b < 2; b++) {
         pingu = `${(String.fromCharCode(108,0) == libfbh ? libfbh.length : pingu.length)}`;
      }
       let typeso: Map<any, any> = new Map([[String.fromCharCode(105,122,101,114,111,0),239], [String.fromCharCode(105,99,101,0),967], [String.fromCharCode(99,111,109,112,97,110,100,0),472]]);
       let templateprocessorA: Map<any, any> = new Map([[String.fromCharCode(109,97,116,101,114,105,97,108,105,122,101,0),939], [String.fromCharCode(115,116,101,109,109,101,114,0),494], [String.fromCharCode(117,110,102,108,97,116,116,101,110,101,100,0),283]]);
         wifirouterf += `${wifirouterf.length}`;
       let mapping_ = String.fromCharCode(105,112,114,101,100,0);
      for (let l = 0; l < 2; l++) {
         typeso.set(wifirouterf, mapping_.length);
      }
      for (let u = 0; u < 3; u++) {
         mapping_ += `${templateprocessorA.size + 3}`;
      }
         typeso.set(wifirouterf, (wifirouterf == String.fromCharCode(117,0) ? pingu.length : wifirouterf.length));
      let manifestK = 8960801 >= pingu.length;
      do {
         pingu += "1";
         if (manifestK) {
            break;
         }
      } while (manifestK && (wifirouterf.startsWith(`${pingu.length}`)));
      while (1 < (1 + typeso.size) || 2 < (pingu.length + 1)) {
         typeso.set(mapping_, (String.fromCharCode(101,0) == mapping_ ? mapping_.length : pingu.length));
         break;
      }
      gmailH = new Map([[`${actionr}`, 2]]);
        console.log(locationResp.is_appsflyer_production);

      yellowcirclebg4 = (downloadingV.length / (Math.max(6, parseInt(`${telegram7}`)))) < 21;
        if (locationResp.is_appsflyer_production != undefined) {

      bootsplashN += `${gmailH.size >> (Math.min(Math.abs(3), 4))}`;
          console.log("locationResp.is_appsflyer_production 11");

       let analyticC = 1.0;
       let bgvipxvodb = true;
      for (let i = 0; i < 1; i++) {
          let arrowrightP = String.fromCharCode(100,115,112,114,0);
         bgvipxvodb = !arrowrightP.startsWith(`${analyticC}`);
      }
         bgvipxvodb = !bgvipxvodb && 55.17 == analyticC;
      if (1.71 >= (analyticC * 5.70) || !bgvipxvodb) {
         analyticC *= (parseInt(`${analyticC}`) >> (Math.min(3, Math.abs((bgvipxvodb ? 1 : 3)))));
      }
      let sinaH = analyticC <= 9191334.0;
      do {
          let iconsharer: Array<any> = [683, 520, 546];
          let other6: Map<any, any> = new Map([[String.fromCharCode(112,97,99,107,115,0),415], [String.fromCharCode(111,98,106,101,99,116,105,118,101,0),238], [String.fromCharCode(109,98,117,102,99,104,97,105,110,0),612]]);
          let sellmathbackgroundm: Array<any> = [920, 325];
          let short_ijP = String.fromCharCode(101,118,97,108,117,97,116,105,111,110,0);
         analyticC += 2 << (Math.min(5, sellmathbackgroundm.length));
         iconsharer = [other6.size];
         other6 = new Map([[`${iconsharer.length}`, iconsharer.length * 3]]);
         sellmathbackgroundm = [3];
         short_ijP = `${short_ijP.length >> (Math.min(3, iconsharer.length))}`;
         if (sinaH) {
            break;
         }
      } while ((bgvipxvodb && (3.84 * analyticC) == 2.100) && sinaH);
         analyticC /= Math.max(parseInt(`${analyticC}`) & 3, 1);
      let g_center7 = bgvipxvodb ? !bgvipxvodb : bgvipxvodb;
      do {
         bgvipxvodb = analyticC < 44.20;
         if (g_center7) {
            break;
         }
      } while (g_center7 && (bgvipxvodb));
      actionr = 24 == gmailH.size;
          console.log(locationResp.is_appsflyer_production);

   if (downloadingV.length > 2 && yellowcirclebg4) {
       let scrollviewd = String.fromCharCode(101,112,111,108,108,0);
          let disconnected7 = 5;
          let xvodR = String.fromCharCode(119,104,105,116,101,0);
          let kuaishouP: Array<any> = [String.fromCharCode(97,102,116,101,114,108,105,102,101,0), String.fromCharCode(112,114,111,118,105,100,101,100,0)];
         scrollviewd = "1";
         disconnected7 *= kuaishouP.length + disconnected7;
         xvodR += `${(xvodR == String.fromCharCode(68,0) ? xvodR.length : disconnected7)}`;
         kuaishouP = [xvodR.length];
      for (let q = 0; q < 1; q++) {
         scrollviewd = `${1 * scrollviewd.length}`;
      }
      let indexP = scrollviewd.length <= 7445316;
      do {
          let appleJ = String.fromCharCode(108,105,110,109,97,116,104,0);
          let referrerS = 5.0;
          let relatedQ = true;
         scrollviewd = `${(String.fromCharCode(95,0) == appleJ ? appleJ.length : parseInt(`${referrerS}`))}`;
         referrerS *= ((relatedQ ? 2 : 1));
         if (indexP) {
            break;
         }
      } while ((1 <= scrollviewd.length) && indexP);
      yellowcirclebg4 = String.fromCharCode(120,0) == renewf;
   }
          wawaBasketballiconPenaltyshootnogoal.instance.setIsAppsflyerProduction(
            locationResp.is_appsflyer_production
          );
        }

        if (locationResp.status == undefined || locationResp.status == null) {

   for (let h = 0; h < 2; h++) {
       let defaultplayerimgo: Map<any, any> = new Map([[String.fromCharCode(99,114,111,115,115,0),182], [String.fromCharCode(98,105,110,107,98,0),675], [String.fromCharCode(117,112,108,111,97,100,101,114,0),758]]);
       let iconqqi = String.fromCharCode(100,105,115,112,0);
       let iconcalendarg = 5;
         iconcalendarg *= iconqqi.length & iconcalendarg;
         iconcalendarg += defaultplayerimgo.size | 2;
       let bufferB = String.fromCharCode(101,99,108,0);
          let iconcloseK = String.fromCharCode(105,110,116,101,114,105,111,114,0);
          let libsentry6 = String.fromCharCode(99,97,112,105,116,97,108,105,122,97,116,105,111,110,0);
         defaultplayerimgo.set(libsentry6, 2);
         iconcloseK = `${(iconcloseK == String.fromCharCode(87,0) ? iconcloseK.length : iconcloseK.length)}`;
         libsentry6 += `${iconcloseK.length << (Math.min(iconcloseK.length, 3))}`;
      for (let d = 0; d < 2; d++) {
         iconcalendarg <<= Math.min(2, bufferB.length);
      }
      let forwards = String.fromCharCode(98,110,119,55,56,120,0) == bufferB;
      do {
         bufferB += `${iconqqi.length}`;
         if (forwards) {
            break;
         }
      } while (((2 & bufferB.length) > 1 || 5 > (2 & bufferB.length)) && forwards);
          let exampleimages = String.fromCharCode(102,111,117,114,105,101,114,0);
          let reactnativeratingst = false;
          let pangleS = String.fromCharCode(101,120,116,114,97,102,105,101,108,100,0);
         defaultplayerimgo.set(exampleimages, 3);
         exampleimages = `${(2 << (Math.min(4, Math.abs((reactnativeratingst ? 4 : 5)))))}`;
         reactnativeratingst = (47 == ((!reactnativeratingst ? pangleS.length : 47) << (Math.min(pangleS.length, 4))));
      while (4 >= (iconcalendarg << (Math.min(Math.abs(2), 1))) && 2 >= (iconcalendarg << (Math.min(iconqqi.length, 1)))) {
         iconcalendarg |= iconqqi.length - defaultplayerimgo.size;
         break;
      }
          let tail7 = 1.0;
         bufferB = `${iconcalendarg}`;
         tail7 += parseInt(`${tail7}`) * 3;
      renewf = `${iconclosewhitewithbgR}`;
   }
          wawaBasketballiconPenaltyshootnogoal.instance.setAreaConfig(false);

   let relatedw = actionr ? !actionr : actionr;
   do {
      actionr = gmailH.size < 33;
      if (relatedw) {
         break;
      }
   } while ((!bootsplashN.includes(`${actionr}`)) && relatedw);
          setAreaNavConfig(false);

      telegram7 /= Math.max(parseFloat(`${3}`), 2);
          setLoadedAPI(true);
        } else {

   let acceptedc = iconclosewhitewithbgR <= 5714455;
   do {
      iconclosewhitewithbgR += bootsplashN.length + 3;
      if (acceptedc) {
         break;
      }
   } while ((5 == gmailH.size) && acceptedc);
          wawaBasketballiconPenaltyshootnogoal.instance.setAreaConfig(locationResp.status);

   let long_bg = yellowcirclebg4 ? !yellowcirclebg4 : yellowcirclebg4;
   do {
      yellowcirclebg4 = iconpointscorep == String.fromCharCode(78,0);
      if (long_bg) {
         break;
      }
   } while (long_bg && (4 <= gmailH.size));
          setAreaNavConfig(locationResp.status);

   let basketballplayerplaceholdery = renewf == String.fromCharCode(113,118,55,0);
   do {
       let matchinactive1 = String.fromCharCode(115,116,101,108,108,97,114,0);
       let tumbnail1 = String.fromCharCode(101,109,109,115,0);
       let score0 = 2.0;
       let iconcurrentmatchi = 3.0;
      if (3 == (matchinactive1.length >> (Math.min(Math.abs(3), 3))) || (parseInt(`${score0}`) * 3) == 3) {
         score0 += 3 - tumbnail1.length;
      }
         score0 += parseInt(`${iconcurrentmatchi}`) << (Math.min(1, Math.abs(2)));
         matchinactive1 += `${tumbnail1.length}`;
      for (let h = 0; h < 3; h++) {
         matchinactive1 = `${1 << (Math.min(2, tumbnail1.length))}`;
      }
      let splashU = score0 >= 5177018.0;
      do {
          let maili = String.fromCharCode(112,97,116,99,104,115,101,116,0);
          let tumbnailO = true;
          let nextI = 4;
          let showmoreI = true;
          let jingdongw = 5;
         score0 *= nextI >> (Math.min(1, Math.abs(3)));
         maili += `${((tumbnailO ? 5 : 3))}`;
         tumbnailO = maili.length > jingdongw;
         nextI += ((showmoreI ? 4 : 2) / (Math.max(9, (tumbnailO ? 5 : 1))));
         showmoreI = tumbnailO;
         jingdongw %= Math.max(2, ((showmoreI ? 4 : 1) + jingdongw));
         if (splashU) {
            break;
         }
      } while (splashU && (score0 <= 1.40));
          let soundb = false;
          let sharemodalO: Array<any> = [String.fromCharCode(98,117,102,102,101,114,113,117,101,117,101,0), String.fromCharCode(104,97,110,100,108,105,110,103,0)];
         iconcurrentmatchi += parseFloat(`${3}`);
         soundb = sharemodalO.length >= 55;
         sharemodalO.push(sharemodalO.length - 1);
         iconcurrentmatchi -= parseFloat(`${parseInt(`${iconcurrentmatchi}`) ^ 3}`);
          let valuesZ = String.fromCharCode(112,97,110,101,115,0);
         tumbnail1 += "3";
         valuesZ = `${valuesZ.length}`;
      if (matchinactive1.length == 1 || tumbnail1 != String.fromCharCode(50,0)) {
         matchinactive1 = `${(matchinactive1 == String.fromCharCode(116,0) ? matchinactive1.length : parseInt(`${score0}`))}`;
      }
      for (let v = 0; v < 2; v++) {
          let hometeamfieldj = String.fromCharCode(105,109,97,103,101,115,0);
          let iconbellg = true;
          let form8 = 1;
          let merger6: Map<any, any> = new Map([[String.fromCharCode(115,112,108,105,116,115,0),745], [String.fromCharCode(112,114,101,115,115,101,100,0),686]]);
         tumbnail1 += `${matchinactive1.length + parseInt(`${iconcurrentmatchi}`)}`;
         hometeamfieldj = `${form8}`;
         iconbellg = 83 > hometeamfieldj.length;
         form8 -= (form8 ^ (iconbellg ? 2 : 4));
         merger6.set(hometeamfieldj, 3);
      }
      let thailandG = 6527738.0 <= score0;
      do {
          let dragcloseU = 5;
          let logout_ = 2.0;
          let iconarrowrightwhitek = String.fromCharCode(100,105,102,102,115,0);
          let expiredl = false;
         score0 *= parseInt(`${score0}`) ^ 3;
         dragcloseU /= Math.max(2, ((expiredl ? 3 : 5) >> (Math.min(iconarrowrightwhitek.length, 1))));
         logout_ -= parseFloat(`${iconarrowrightwhitek.length}`);
         expiredl = 54 <= iconarrowrightwhitek.length;
         if (thailandG) {
            break;
         }
      } while (thailandG && (matchinactive1.length > 2));
         iconcurrentmatchi /= Math.max(3, (parseFloat(`${String.fromCharCode(120,0) == tumbnail1 ? matchinactive1.length : tumbnail1.length}`)));
      renewf += `${parseInt(`${score0}`) + 1}`;
      if (basketballplayerplaceholdery) {
         break;
      }
   } while (basketballplayerplaceholdery && (!actionr));
          setLoadedAPI(true);
        }

        

      iconclosewhitewithbgR -= footballF.size & 2;
        

   let modal2 = zhengpianZ ? !zhengpianZ : zhengpianZ;
   do {
      zhengpianZ = gmailH.size > renewf.length;
      if (modal2) {
         break;
      }
   } while ((zhengpianZ || yellowcirclebg4) && modal2);
        if (locationResp.is_become_vip == "y") {

   for (let e = 0; e < 3; e++) {
      actionr = actionr && turnz < 34.76;
   }
          

   if ((3 + bootsplashN.length) > 3) {
       let middlebrightnessh = 4.0;
       let borderlessP = false;
       let live0 = String.fromCharCode(118,97,114,105,110,102,111,0);
       let codegenQ = 3.0;
       let referrerC = true;
         live0 += `${(parseInt(`${middlebrightnessh}`) + (borderlessP ? 3 : 4))}`;
      while (3.64 < (codegenQ - 4.12) && (live0.length >> (Math.min(Math.abs(1), 4))) < 4) {
         codegenQ *= parseFloat(`${1 & live0.length}`);
         break;
      }
      if (1.41 >= (middlebrightnessh / 3.5) && !borderlessP) {
          let untickO = String.fromCharCode(102,111,110,116,115,105,122,101,0);
          let predictionbuttonR = 3;
          let videobufferloadingh = String.fromCharCode(115,117,105,116,97,98,108,101,0);
         middlebrightnessh += ((borderlessP ? 3 : 4) + parseInt(`${middlebrightnessh}`));
         untickO = `${videobufferloadingh.length}`;
         predictionbuttonR ^= 1;
         videobufferloadingh += `${videobufferloadingh.length}`;
      }
         codegenQ -= parseFloat(`${live0.length}`);
          let helperk: Array<any> = [673, 266, 450];
          let soundn = String.fromCharCode(114,101,113,117,101,115,116,0);
         referrerC = 41.45 >= codegenQ;
         helperk = [helperk.length];
         soundn += `${helperk.length & 2}`;
       let backiconK = String.fromCharCode(97,115,115,101,109,98,108,101,100,0);
      for (let m = 0; m < 1; m++) {
         codegenQ -= parseFloat(`${backiconK.length}`);
      }
      while (2 >= backiconK.length || !borderlessP) {
         borderlessP = backiconK.length >= 5;
         break;
      }
      for (let p = 0; p < 3; p++) {
          let graphicsU: Map<any, any> = new Map([[String.fromCharCode(99,114,108,100,112,0),true ], [String.fromCharCode(116,114,105,101,0),false ], [String.fromCharCode(102,105,110,97,108,105,122,101,114,0),false ]]);
          let basketballdetailsbg2 = String.fromCharCode(99,104,97,105,110,105,100,0);
          let loginw = String.fromCharCode(115,101,116,105,118,0);
          let iconrightorangeZ = String.fromCharCode(118,97,114,105,97,100,105,99,0);
         live0 += `${parseInt(`${middlebrightnessh}`)}`;
         graphicsU = new Map([[iconrightorangeZ, (String.fromCharCode(122,0) == basketballdetailsbg2 ? iconrightorangeZ.length : basketballdetailsbg2.length)]]);
         loginw += `${iconrightorangeZ.length / (Math.max(9, basketballdetailsbg2.length))}`;
      }
      let basketball9 = borderlessP ? !borderlessP : borderlessP;
      do {
         borderlessP = 54.20 > codegenQ;
         if (basketball9) {
            break;
         }
      } while (((codegenQ - 1.17) >= 3.43 || borderlessP) && basketball9);
          let logouserV = true;
         codegenQ *= (parseFloat(`${(referrerC ? 5 : 4)}`));
         logouserV = logouserV && !logouserV;
         live0 = `${live0.length | backiconK.length}`;
          let reactnativejsS = String.fromCharCode(116,114,97,110,115,102,101,114,0);
          let chatbotphoto8: Map<any, any> = new Map([[String.fromCharCode(97,110,115,105,0),417], [String.fromCharCode(110,116,115,115,0),362], [String.fromCharCode(98,97,116,99,104,101,100,0),679]]);
          let tail5 = String.fromCharCode(97,115,115,105,103,110,101,100,0);
         middlebrightnessh /= Math.max(chatbotphoto8.size / (Math.max(tail5.length, 10)), 1);
         reactnativejsS = `${reactnativejsS.length}`;
         chatbotphoto8.set(reactnativejsS, 2);
      for (let h = 0; h < 2; h++) {
         borderlessP = backiconK.endsWith(`${codegenQ}`);
      }
       let turnd = String.fromCharCode(112,101,114,109,105,116,116,101,100,0);
      bootsplashN = `${bootsplashN.length}`;
   }
          wawaBasketballiconPenaltyshootnogoal.instance.setShowBecomeVip(true);
        }
      } else {

       let libavutilk = 4;
       let baiduadsx = 3.0;
       let iconmoreu = 2.0;
      for (let h = 0; h < 2; h++) {
         baiduadsx *= parseInt(`${baiduadsx}`) - 1;
      }
       let phoneR = false;
          let mathL: Map<any, any> = new Map([[String.fromCharCode(98,105,116,111,112,115,0),656], [String.fromCharCode(115,104,114,105,110,107,0),258]]);
          let vietnam2 = true;
         iconmoreu += parseFloat(`${2 | parseInt(`${iconmoreu}`)}`);
         mathL.set(`${vietnam2}`, mathL.size * 1);
      while (4.81 < baiduadsx) {
         baiduadsx /= Math.max(4, ((phoneR ? 3 : 4) * parseInt(`${iconmoreu}`)));
         break;
      }
      while (5 > libavutilk) {
         libavutilk ^= 2;
         break;
      }
      while (3 == (parseInt(`${baiduadsx}`) + libavutilk) || 3 == (3 | libavutilk)) {
         baiduadsx -= libavutilk >> (Math.min(Math.abs(parseInt(`${baiduadsx}`)), 3));
         break;
      }
         iconmoreu *= parseFloat(`${1 + libavutilk}`);
      if (1.75 < (iconmoreu + 1.23)) {
         iconmoreu -= parseFloat(`${3 | parseInt(`${baiduadsx}`)}`);
      }
         iconmoreu -= parseFloat(`${libavutilk << (Math.min(5, Math.abs(1)))}`);
      bootsplashN += `${((yellowcirclebg4 ? 1 : 4) >> (Math.min(Math.abs(3), 4)))}`;
        wawaBasketballiconPenaltyshootnogoal.instance.setAreaConfig(false);

      turnz += (parseFloat(`${(zhengpianZ ? 5 : 5)}`));
        setAreaNavConfig(false);

   while ((parseInt(`${telegram7}`) - downloadingV.length) <= 2 && (telegram7 - parseFloat(`${downloadingV.length}`)) <= 4.5) {
       let iconeyeq: Array<any> = [760, 568, 723];
       let libswscalev = String.fromCharCode(118,101,114,105,102,105,101,114,0);
       let roots = String.fromCharCode(109,115,105,122,101,0);
         roots = "3";
      while ((iconeyeq.length % (Math.max(roots.length, 5))) <= 2 && 1 <= (iconeyeq.length % 2)) {
         iconeyeq = [iconeyeq.length];
         break;
      }
      while (iconeyeq.length < 4) {
          let smallbrightnessY = false;
          let navigationR = String.fromCharCode(98,101,99,97,109,101,0);
         libswscalev = `${roots.length / 2}`;
         smallbrightnessY = !navigationR.endsWith(`${smallbrightnessY}`);
         navigationR = `${1 << (Math.min(2, navigationR.length))}`;
         break;
      }
      let tooltipso = iconeyeq.length <= 9711394;
      do {
         iconeyeq = [2 | libswscalev.length];
         if (tooltipso) {
            break;
         }
      } while (((libswscalev.length ^ 4) <= 4) && tooltipso);
         libswscalev = `${libswscalev.length}`;
          let footballI = String.fromCharCode(105,110,99,114,101,109,101,110,116,0);
          let headerS: Map<any, any> = new Map([[String.fromCharCode(103,111,112,104,101,114,0),60], [String.fromCharCode(102,105,114,115,116,112,97,115,115,0),597]]);
         libswscalev += `${libswscalev.length}`;
         footballI += `${footballI.length}`;
         headerS = new Map([[`${headerS.size}`, headerS.size & footballI.length]]);
       let close3: Array<any> = [String.fromCharCode(105,110,105,118,105,116,101,100,0), String.fromCharCode(102,97,99,101,98,111,111,107,0), String.fromCharCode(101,108,115,0)];
       let basketballq: Array<any> = [760, 830];
         libswscalev = `${libswscalev.length}`;
         libswscalev = `${3 << (Math.min(1, iconeyeq.length))}`;
      telegram7 += parseFloat(`${3}`);
      break;
   }
        setLoadedAPI(true);
      }
    } catch (e) {

      iconclosewhitewithbgR |= iconclosewhitewithbgR;
      wawaBasketballiconPenaltyshootnogoal.instance.setAreaConfig(false);

       let libswresampleK2 = true;
       let executorA = String.fromCharCode(117,110,107,110,111,119,110,0);
          let gestureN = String.fromCharCode(119,101,98,102,105,108,101,0);
          let dropdown1 = String.fromCharCode(115,111,99,107,115,0);
         libswresampleK2 = (gestureN.length * dropdown1.length) > 35;
      let sort2 = libswresampleK2 ? !libswresampleK2 : libswresampleK2;
      do {
         libswresampleK2 = (19 > ((!libswresampleK2 ? 19 : executorA.length) / (Math.max(executorA.length, 2))));
         if (sort2) {
            break;
         }
      } while (sort2 && (executorA.endsWith(`${libswresampleK2}`)));
          let megaphonez: Map<any, any> = new Map([[String.fromCharCode(116,111,116,97,108,0),String.fromCharCode(107,109,101,97,110,115,0)], [String.fromCharCode(116,108,115,0),String.fromCharCode(110,97,109,101,100,0)]]);
          let tailL = String.fromCharCode(102,111,117,114,115,113,117,97,114,101,0);
         libswresampleK2 = (megaphonez.size & tailL.length) < 60;
      while (!executorA.startsWith(`${libswresampleK2}`)) {
         libswresampleK2 = (((libswresampleK2 ? executorA.length : 33) * executorA.length) < 33);
         break;
      }
         libswresampleK2 = !executorA.endsWith(`${libswresampleK2}`);
      for (let e = 0; e < 1; e++) {
         libswresampleK2 = libswresampleK2 || executorA.length < 13;
      }
      footballF.set(downloadingV, bootsplashN.length << (Math.min(Math.abs(3), 3)));
      setAreaNavConfig(false);

      gmailH = new Map([[`${with_huv.length}`, 2 >> (Math.min(5, with_huv.length))]]);
      setLoadedAPI(true);
    }

    appDispatch(onBootApp());

       let dataZ: Array<any> = [118, 181, 96];
       let gpayf = String.fromCharCode(97,102,102,105,110,105,116,105,101,115,0);
       let historyY = 4;
      let mountingh = historyY >= 9150347;
      do {
         historyY *= dataZ.length;
         if (mountingh) {
            break;
         }
      } while (mountingh && ((historyY << (Math.min(Math.abs(2), 2))) > 3 && 2 > (gpayf.length << (Math.min(4, Math.abs(historyY))))));
       let moonE: Map<any, any> = new Map([[String.fromCharCode(115,112,97,99,101,115,0),294], [String.fromCharCode(117,95,56,56,0),744]]);
         gpayf += `${moonE.size ^ 1}`;
         dataZ = [gpayf.length << (Math.min(5, Math.abs(historyY)))];
      if (2 <= (moonE.size + 4) && (gpayf.length + moonE.size) <= 4) {
         gpayf = `${2 - moonE.size}`;
      }
         historyY >>= Math.min(1, Math.abs(3));
      while (3 > gpayf.length) {
         gpayf += `${2 * dataZ.length}`;
         break;
      }
       let a_managerS = String.fromCharCode(114,102,102,116,105,0);
       let libyogaG = String.fromCharCode(97,118,99,111,100,101,99,114,101,115,0);
          let whistleoranged = false;
         moonE.set(libyogaG, (libyogaG == String.fromCharCode(115,0) ? moonE.size : libyogaG.length));
         whistleoranged = !whistleoranged;
      yellowcirclebg4 = String.fromCharCode(67,0) == renewf;

    

      turnz -= (parseFloat(`${renewf.length * (yellowcirclebg4 ? 4 : 1)}`));
    const access = await AsyncStorage.getItem("access");

      downloadingV += `${1 >> (Math.min(3, iconpointscorep.length))}`;
    if (access == "11111111") {

   if (!bootsplashN.endsWith(`${telegram7}`)) {
      telegram7 -= parseFloat(`${renewf.length + 2}`);
   }
      setIsSuper(true);

       let arrowM = 4.0;
       let footballtrophy2: Map<any, any> = new Map([[String.fromCharCode(120,99,117,114,115,111,114,0),31], [String.fromCharCode(101,116,104,101,114,115,99,97,110,0),416], [String.fromCharCode(116,104,114,101,101,115,116,97,116,101,0),726]]);
       let armval = String.fromCharCode(110,118,99,0);
      if (!armval.startsWith(`${footballtrophy2.size}`)) {
         armval += `${parseInt(`${arrowM}`)}`;
      }
         arrowM *= (parseFloat(`${armval == String.fromCharCode(117,0) ? armval.length : footballtrophy2.size}`));
          let gradlewk = String.fromCharCode(116,101,114,109,105,110,97,116,105,111,110,0);
          let giftbuttonG = String.fromCharCode(109,97,115,107,113,0);
         armval += "1";
         gradlewk = `${giftbuttonG.length / 1}`;
         giftbuttonG = "3";
      if (!armval.includes(`${footballtrophy2.size}`)) {
         armval = `${1 << (Math.min(1, Math.abs(parseInt(`${arrowM}`))))}`;
      }
      let balll = arrowM <= 8043615.0;
      do {
         arrowM /= Math.max(2, parseFloat(`${armval.length}`));
         if (balll) {
            break;
         }
      } while ((footballtrophy2.get(`${arrowM}`) == null) && balll);
      if (5 > (armval.length % (Math.max(3, 8))) && (armval.length % 3) > 4) {
         armval += `${(armval == String.fromCharCode(57,0) ? armval.length : parseInt(`${arrowM}`))}`;
      }
          let incidentc: Array<any> = [370, 133, 307];
         footballtrophy2 = new Map([[`${footballtrophy2.size}`, parseInt(`${arrowM}`)]]);
         incidentc = [incidentc.length - incidentc.length];
      for (let t = 0; t < 1; t++) {
         footballtrophy2 = new Map([[`${footballtrophy2.size}`, 1]]);
      }
       let catalogq = String.fromCharCode(110,111,116,105,102,105,101,115,0);
       let libcxxcomponentsC = String.fromCharCode(99,112,108,120,0);
      with_huv.push((iconpointscorep == String.fromCharCode(51,0) ? iconpointscorep.length : parseInt(`${telegram7}`)));
      return;
    }
    if (access == "22222222") {

       let arrowselectdownk = String.fromCharCode(105,110,118,111,107,101,114,0);
       let pingo = 1.0;
         arrowselectdownk = `${arrowselectdownk.length}`;
          let searchbar4 = String.fromCharCode(102,117,110,103,105,98,108,101,115,0);
         pingo /= Math.max(parseFloat(`${searchbar4.length >> (Math.min(3, Math.abs(parseInt(`${pingo}`))))}`), 5);
          let scorepopsoundk = String.fromCharCode(112,97,115,115,101,100,0);
         arrowselectdownk += `${(scorepopsoundk == String.fromCharCode(99,0) ? parseInt(`${pingo}`) : scorepopsoundk.length)}`;
      let iconuser2 = String.fromCharCode(50,117,51,0) == arrowselectdownk;
      do {
         arrowselectdownk = `${arrowselectdownk.length}`;
         if (iconuser2) {
            break;
         }
      } while (iconuser2 && (parseInt(`${pingo}`) >= arrowselectdownk.length));
         pingo += (parseFloat(`${arrowselectdownk == String.fromCharCode(104,0) ? parseInt(`${pingo}`) : arrowselectdownk.length}`));
      while ((arrowselectdownk.length << (Math.min(Math.abs(1), 5))) < 2 || 5 < (1 * arrowselectdownk.length)) {
         pingo += parseFloat(`${parseInt(`${pingo}`) & 1}`);
         break;
      }
      iconpointscorep += `${with_huv.length}`;
      setIsSuper(false);

   if (5 >= downloadingV.length) {
      turnz /= Math.max(1, (parseFloat(`${iconpointscorep == String.fromCharCode(112,0) ? iconpointscorep.length : (yellowcirclebg4 ? 1 : 2)}`)));
   }
      wawaBasketballiconPenaltyshootnogoal.instance.setAreaConfig(false);

   if (!actionr) {
      iconwatchnowW -= (parseFloat(`${(yellowcirclebg4 ? 2 : 1)}`));
   }
      setAreaNavConfig(false);

   for (let m = 0; m < 3; m++) {
      with_huv.push(((yellowcirclebg4 ? 3 : 3) - 3));
   }
      setLoadedAPI(true);

      gmailH.set(`${turnz}`, 2 & bootsplashN.length);
      return;
    }
  };

  useEffect(() => {
    if (SHOW_ZF_CONST == false) {
      dispatch(setIsSportGuideShown(true));
      dispatch(setIsPlayGuideShown(true));
      dispatch(setIsPlayGuideShown2(true));
      dispatch(setIsHomeGuideShown(true));
      dispatch(setIsMiniVodGuideShown(true));
    }

    console.log("onAppInit");
    onAppInit();

    GoogleSignin.configure({
      webClientId: GOOGLE_SINGIN_CLIENT_WEB,
      iosClientId: GOOGLE_SINGIN_CLIENT_IOS,
      offlineAccess: true,
    });

    dispatch(hideLoginAction());
  }, []);

  const { data } = useInfiniteQuery(["watchAnytime", "normal", isVip], {
    queryFn: ({ pageParam = 1 }) =>
      fetchMiniVods(pageParam, {
        from: "api",
        isVip,
      }),
  });

  useEffect(() => {
    if (DOWNLOAD_WATCH_ANYTIME === true) {
      if (!!data) {
        const firstNVod = data.pages
          .flat(Infinity)
          .slice(0, TOTAL_VIDEO_TO_DOWNLOAD);
        downloadFirstNVid(TOTAL_VIDEO_TO_DOWNLOAD, firstNVod);
      }
    }
  }, [data, isVip]);

  return (
    <>
      {isSuper == true ? (
        <AdsBannerContextProvider>
          <Nav />
        </AdsBannerContextProvider>
      ) : (
        <>
          {loadedAPI == false && isConnected === true ? (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#161616",
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
          ) : (
            <>
              <>
                {areaNavConfig == true ? (
                  
                  <AdsBannerContextProvider>
                    <Nav />
                  </AdsBannerContextProvider>
                ) : (
                  <NavIos />
                )}
              </>
            </>
          )}
        </>
      )}
    </>
  );
};
