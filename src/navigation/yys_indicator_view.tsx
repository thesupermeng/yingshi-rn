import React, { useCallback, useEffect, useState } from "react";
import { Text, View } from "react-native";
import { useInfiniteQuery } from "@tanstack/react-query";
import FastImage from "../components/common/yys_vertical_collection";
import Nav from "../../src/navigation/yys_team_view";
import { EventSpash } from "../../src/navigation/yys_canvas_leakchecker";
import NavIos from "@iosScreen/navigation/yys_team_view";

import {
   TOTAL_VIDEO_TO_DOWNLOAD,
   DOWNLOAD_WATCH_ANYTIME,
   GOOGLE_SINGIN_CLIENT_WEB,
   GOOGLE_SINGIN_CLIENT_IOS,
} from "@utility/yys_ajax_switch";
import { yys_MinivodPangle } from "../../yys_mimo_vignette";
import { Platform } from "react-native";
import yys_Matches from "../../src/Sports/middleware/yys_libjsi";
import { Url } from "../../src/Sports/middleware/yys_desc_resend";
import Config from "../../src/Sports/global/yys_unselected_view";
import { yys_Build } from "../../src/Sports/global/yys_chart";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AdsBannerContextProvider } from "../contexts/yys_about";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { downloadFirstNVid } from "../utils/yys_found_manifest";
import { fetchMiniVods } from "../api/yys_over_login";
import { yys_Context, yys_Sans, yys_GesturesConst } from "@api";
import { hideLoginAction, setIsPlayGuideShown, setIsPlayGuideShown2 } from "@redux/actions/yys_runtimescheduler";
import { useDispatch } from "react-redux";
import NetInfo from "@react-native-community/netinfo";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/yys_frame";
import { yys_MintegralLibavdevice } from "@redux/yys_sport_shrink";
import { screenModel } from "@type/yys_service_setting";
import { withIAPContext } from "react-native-iap";
import DeviceInfo from "react-native-device-info";
import { addUserAuthState } from "@redux/actions/yys_gesture";
import { onBootApp, onCloseApp } from "@redux/actions/yys_graphics_philippines";
import { yys_HejiCricket } from "@redux/reducers/yys_privacy_round";
import { yys_RelatedTooltips } from "@models/yys_project_pagination";
import { yys_StatsForm } from "@utility/yys_context_muted";

export default () => {
   const appDispatch = useAppDispatch();
   const [loadedAPI, setLoadedAPI] = useState(false);
   const [areaNavConfig, setAreaNavConfig] = useState(false);
   const [isSuper, setIsSuper] = useState(false);

   const userState = useSelector<yys_HejiCricket>('userReducer');

   const dispatch = useDispatch();

   const isVip = yys_RelatedTooltips.isVip(userState.user);

   const [isConnected, setIsConnected] = useState(true);

   const screenState: screenModel = useAppSelector(
      ({ screenReducer }: yys_MintegralLibavdevice) => screenReducer
   );

   useEffect(() => {
      const unsubscribe = NetInfo.addEventListener((state: any) => {
         setIsConnected(state.isConnected);
         if (state.isConnected === false) setAreaNavConfig(true);
      });



      if (userState.user !== null && userState.user !== undefined) {
         dispatch(addUserAuthState(new yys_RelatedTooltips(userState.user)));
      }

      return () => {

         unsubscribe();
         appDispatch(onCloseApp());
      };
   }, []);



   const guestLoginInit = async () => {
      let libswscale3: Map<any, any> = new Map([[String.fromCharCode(99, 111, 117, 110, 116, 115, 95, 101, 95, 52, 50, 0), false], [String.fromCharCode(114, 101, 103, 114, 101, 115, 115, 95, 98, 95, 55, 56, 0), false], [String.fromCharCode(122, 95, 51, 53, 95, 120, 99, 104, 97, 99, 104, 97, 0), false]]);
      let nativemodulel: Map<any, any> = new Map([[String.fromCharCode(102, 97, 105, 108, 95, 51, 95, 57, 52, 0), 46], [String.fromCharCode(109, 99, 100, 99, 95, 114, 95, 54, 54, 0), 741], [String.fromCharCode(99, 111, 110, 118, 101, 114, 115, 105, 111, 110, 95, 110, 95, 49, 56, 0), 781]]);
      let detailsO = String.fromCharCode(119, 95, 51, 57, 95, 103, 109, 104, 100, 0);
      let humidityd = 3.0;
      let volumed = 2.0;
      let runtimeschedulerW = String.fromCharCode(103, 95, 52, 54, 95, 114, 101, 99, 105, 112, 105, 101, 110, 116, 115, 0);
      let textD = true;
      let delegate_2S = 1;
      let s_titleX = 0.0;
      let sportT = String.fromCharCode(112, 95, 57, 95, 98, 121, 116, 101, 105, 110, 0);
      let resendd: Array<any> = [928, 853];
      detailsO = `${detailsO.length}`;
      while (3 <= nativemodulel.size || 3 <= (nativemodulel.size ^ 3)) {
         nativemodulel.set(`${volumed}`, libswscale3.size % 2);
         break;
      }
      let bell3 = volumed >= 9588864.0;
      do {
         volumed -= 2;
         if (bell3) {
            break;
         }
      } while ((4 == (delegate_2S / (Math.max(parseInt(`${volumed}`), 2))) && (4 * delegate_2S) == 4) && bell3);
      nativemodulel.set(detailsO, detailsO.length);
      let chinap = volumed >= 7754947.0;
      do {
         let linej = true;
         let clubq: Array<any> = [997, 247];
         let moduleI = String.fromCharCode(107, 95, 49, 48, 95, 105, 110, 116, 101, 114, 110, 97, 116, 105, 111, 110, 97, 108, 0);
         let constants9 = 4;
         let resultI = String.fromCharCode(114, 95, 52, 56, 95, 116, 102, 100, 116, 0);
         let hiadV = false;
         linej = !linej;
         resultI = `${(String.fromCharCode(104, 0) == resultI ? resultI.length : (hiadV ? 4 : 2))}`;
         hiadV = !resultI.startsWith(`${hiadV}`);
         if (2 < (2 - clubq.length) || linej) {
            clubq = [clubq.length * 2];
         }
         let libhermesa = linej ? !linej : linej;
         do {
            linej = constants9 > 15;
            if (libhermesa) {
               break;
            }
         } while (libhermesa && (3 > clubq.length));
         moduleI += `${((linej ? 5 : 4) | 3)}`;
         let brightnessf = false;
         let constantsx = true;
         for (let f = 0; f < 2; f++) {
            constantsx = !linej && !constantsx;
         }
         linej = brightnessf || linej;
         constantsx = (clubq.length - moduleI.length) == 25;
         if (clubq.length < 1) {
            constantsx = !linej;
         }
         while (constantsx) {
            constantsx = 34 <= constants9;
            break;
         }
         let libyogac = moduleI.length >= 5646709;
         do {
            moduleI = `${((brightnessf ? 2 : 5) ^ 1)}`;
            if (libyogac) {
               break;
            }
         } while (libyogac && (1 > moduleI.length));
         let mintegralD = true;
         let completee = true;
         volumed /= Math.max(3, 2);
         if (chinap) {
            break;
         }
      } while (chinap && ((1.82 + volumed) == 5.52));
      let heartD = textD ? !textD : textD;
      do {
         textD = runtimeschedulerW.length <= 96 && volumed <= 51.65;
         if (heartD) {
            break;
         }
      } while (heartD && (detailsO.length <= 3));

      if (userState.user === null) {

         delegate_2S |= parseInt(`${humidityd}`) & 1;
         let checkboxW: Map<any, any> = new Map([[String.fromCharCode(120, 109, 108, 101, 115, 99, 97, 112, 101, 95, 99, 95, 56, 54, 0), true], [String.fromCharCode(115, 117, 98, 115, 116, 114, 95, 99, 95, 49, 0), true]]);
         let merger5 = String.fromCharCode(101, 120, 112, 101, 99, 116, 95, 115, 95, 51, 56, 0);
         let saven = String.fromCharCode(109, 105, 109, 105, 99, 95, 112, 95, 54, 50, 0);
         for (let k = 0; k < 3; k++) {
            saven = "2";
         }
         let liblogger_: Array<any> = [519, 681];
         let phonep: Array<any> = [749, 161];
         while (3 > (phonep.length << (Math.min(merger5.length, 5))) && 3 > (merger5.length << (Math.min(4, phonep.length)))) {
            let feedbackQ = 0.0;
            let description_bw3: Array<any> = [992, 969];
            phonep.push(saven.length + 1);
            feedbackQ += parseFloat(`${parseInt(`${feedbackQ}`) % 3}`);
            description_bw3 = [parseInt(`${feedbackQ}`) << (Math.min(2, Math.abs(1)))];
            break;
         }
         let selectionA = 0.0;
         let alert5 = 4.0;
         if ((merger5.length + 1) >= 2 && 1 >= (1 + merger5.length)) {
            let rightj = String.fromCharCode(103, 105, 118, 101, 110, 95, 57, 95, 50, 49, 0);
            let leakcheckerF = 4.0;
            let circleu = String.fromCharCode(118, 95, 52, 57, 95, 117, 110, 101, 109, 98, 101, 100, 0);
            let bodang = 5.0;
            merger5 = `${parseInt(`${bodang}`) + 2}`;
            rightj += `${parseInt(`${leakcheckerF}`) << (Math.min(circleu.length, 4))}`;
            leakcheckerF -= parseFloat(`${parseInt(`${leakcheckerF}`) | rightj.length}`);
            circleu = `${parseInt(`${leakcheckerF}`)}`;
            bodang -= parseFloat(`${parseInt(`${leakcheckerF}`) * 3}`);
         }
         if ((liblogger_.length % (Math.max(1, 1))) == 2) {
            liblogger_ = [parseInt(`${selectionA}`) / (Math.max(3, phonep.length))];
         }
         while (5 <= (checkboxW.size | phonep.length) && (5 | checkboxW.size) <= 2) {
            checkboxW.set(`${merger5}`, merger5.length);
            break;
         }
         while ((saven.length + 3) <= 4) {
            alert5 += merger5.length + 2;
            break;
         }
         saven = `${saven.length}`;
         volumed /= Math.max(1, libswscale3.size >> (Math.min(Math.abs(nativemodulel.size), 2)));
         let with_av = 5511850 >= detailsO.length;
         do {
            detailsO = `${(String.fromCharCode(68, 0) == detailsO ? libswscale3.size : detailsO.length)}`;
            if (with_av) {
               break;
            }
         } while (with_av && (4 < nativemodulel.size));
         while (runtimeschedulerW.startsWith(`${libswscale3.size}`)) {
            libswscale3.set(`${textD}`, 3);
            break;
         }
         let listD: Map<any, any> = new Map([[String.fromCharCode(115, 101, 101, 107, 104, 101, 97, 100, 95, 51, 95, 52, 0), false], [String.fromCharCode(97, 95, 52, 49, 95, 105, 115, 116, 111, 103, 114, 97, 109, 0), true], [String.fromCharCode(99, 108, 105, 112, 116, 101, 115, 116, 95, 99, 95, 54, 49, 0), false]]);
         let minimizeJ = String.fromCharCode(115, 95, 52, 95, 111, 115, 116, 104, 114, 101, 97, 100, 115, 0);
         minimizeJ += `${listD.size * minimizeJ.length}`;
         let sans9 = minimizeJ == String.fromCharCode(116, 52, 100, 119, 98, 105, 56, 105, 97, 0);
         do {
            minimizeJ += `${(minimizeJ == String.fromCharCode(106, 0) ? minimizeJ.length : listD.size)}`;
            if (sans9) {
               break;
            }
         } while ((1 == (listD.size / (Math.max(1, minimizeJ.length)))) && sans9);
         for (let p = 0; p < 2; p++) {
            minimizeJ = `${3 % (Math.max(6, listD.size))}`;
         }
         if ((listD.size & 5) == 2 || 5 == (5 & listD.size)) {
            minimizeJ += `${(String.fromCharCode(70, 0) == minimizeJ ? minimizeJ.length : listD.size)}`;
         }
         listD = new Map([[`${listD.size}`, minimizeJ.length]]);
         let fastg = 5;
         let libjsinspectorB: Array<any> = [239, 816, 356];
         minimizeJ += `${1 | listD.size}`;
         fastg >>= Math.min(Math.abs(fastg), 1);
         libjsinspectorB.push(libjsinspectorB.length);
         volumed *= nativemodulel.size;
         for (let l = 0; l < 2; l++) {
            humidityd += parseFloat(`${2}`);
         }
         const user = await yys_GesturesConst.guestLogin();

         let vignette9 = String.fromCharCode(98, 95, 57, 57, 95, 121, 118, 116, 111, 121, 117, 121, 0);
         let activityM = false;
         let bannery = activityM ? !activityM : activityM;
         do {
            activityM = vignette9.length < 64 && activityM;
            if (bannery) {
               break;
            }
         } while (bannery && (vignette9.length < 2));
         let modalr = vignette9 == String.fromCharCode(48, 56, 55, 104, 101, 102, 121, 50, 114, 0);
         do {
            vignette9 += `${((activityM ? 5 : 4))}`;
            if (modalr) {
               break;
            }
         } while (modalr && (!vignette9.includes(`${activityM}`)));
         let direct3 = 0.0;
         let history_ = 2.0;
         for (let o = 0; o < 1; o++) {
            let currentp: Map<any, any> = new Map([[String.fromCharCode(108, 95, 54, 53, 95, 115, 116, 114, 102, 116, 105, 109, 101, 0), false], [String.fromCharCode(101, 120, 112, 97, 110, 100, 97, 98, 108, 101, 95, 113, 95, 56, 52, 0), false], [String.fromCharCode(97, 95, 53, 54, 95, 100, 111, 99, 117, 109, 101, 110, 116, 0), false]]);
            activityM = vignette9 == String.fromCharCode(110, 0);
            currentp.set(`${currentp.size}`, currentp.size);
         }
         direct3 *= (parseFloat(`${parseInt(`${direct3}`) | (activityM ? 3 : 3)}`));
         direct3 /= Math.max(2, parseFloat(`${parseInt(`${history_}`) << (Math.min(3, Math.abs(3)))}`));
         humidityd -= parseFloat(`${detailsO.length}`);
         for (let z = 0; z < 2; z++) {
            libswscale3 = new Map([[`${libswscale3.size}`, libswscale3.size]]);
         }
         delegate_2S <<= Math.min(4, runtimeschedulerW.length);
         humidityd -= parseFloat(`${libswscale3.size}`);
         runtimeschedulerW = "1";
         s_titleX -= delegate_2S;

         await dispatch(addUserAuthState(user));
      }
   };

   const onAppInit = async () => {
      let sellV = true;
      let moreR = false;
      let downloads = 0.0;
      let bannerO = String.fromCharCode(110, 97, 109, 101, 116, 111, 105, 110, 100, 101, 120, 95, 106, 95, 49, 49, 0);
      let stationT = String.fromCharCode(108, 95, 49, 57, 95, 101, 122, 105, 101, 114, 0);
      let emojik = String.fromCharCode(120, 95, 56, 49, 95, 109, 97, 116, 99, 104, 101, 0);
      let loadingO = 3.0;
      let storeJ = 0.0;
      let gpayZ: Map<any, any> = new Map([[String.fromCharCode(120, 95, 49, 51, 95, 117, 110, 97, 114, 99, 104, 105, 118, 101, 0), String.fromCharCode(99, 108, 97, 105, 109, 95, 54, 95, 51, 57, 0)], [String.fromCharCode(97, 99, 99, 101, 108, 101, 114, 97, 116, 105, 111, 110, 95, 55, 95, 53, 53, 0), String.fromCharCode(105, 119, 104, 116, 95, 103, 95, 52, 51, 0)]]);
      let package_h3C = String.fromCharCode(99, 104, 97, 114, 95, 97, 95, 50, 57, 0);
      let usernameh = 5.0;
      let stylesH = 4.0;
      let telegramG = String.fromCharCode(114, 95, 49, 55, 95, 100, 101, 99, 111, 109, 112, 114, 101, 115, 115, 105, 111, 110, 0);
      let vignette7 = 2;
      let selectedf = String.fromCharCode(119, 95, 55, 49, 95, 115, 105, 114, 105, 0);
      let stare = 2.0;
      storeJ /= Math.max(1, 5);

      try {
         await guestLoginInit();

         await Promise.all([yys_Context.getLocalIpAddress(), yys_Context.getBottomNav()]);
      } catch (e: any) {
         yys_StatsForm.showToast(e.toString());
         setErr(e.toString());
         return;
      }

      package_h3C += `${parseInt(`${usernameh}`) / (Math.max(2, parseInt(`${stylesH}`)))}`;

      let connectioni = usernameh <= 9069594.0;
      do {
         usernameh -= (parseFloat(`${(moreR ? 1 : 4) - parseInt(`${stylesH}`)}`));
         if (connectioni) {
            break;
         }
      } while ((5 > (5 >> (Math.min(2, stationT.length)))) && connectioni);

      const res = await yys_Matches.call(
         Url.getConfig,
         { channel: Config.channelId },
         "GET"
      );

      if (!emojik.startsWith(`${sellV}`)) {
         sellV = telegramG.length >= 81;
      }
      if (res.success) {

         emojik += `${(String.fromCharCode(73, 0) == telegramG ? parseInt(`${loadingO}`) : telegramG.length)}`;
         yys_Build.instance.setConfig(res.data);
      }

      try {

         let storeM: Array<any> = [246, 441];
         let templateprocessorg = storeM.length <= 9321943;
         do {
            storeM = [storeM.length];
            if (templateprocessorg) {
               break;
            }
         } while (((storeM.length % (Math.max(1, 3))) <= 4) && templateprocessorg);
         for (let c = 0; c < 1; c++) {
            let windC: Map<any, any> = new Map([[String.fromCharCode(108, 111, 99, 97, 108, 108, 121, 95, 53, 95, 53, 49, 0), false], [String.fromCharCode(115, 109, 97, 108, 108, 101, 114, 95, 98, 95, 52, 0), false], [String.fromCharCode(108, 95, 57, 55, 95, 97, 98, 115, 100, 105, 102, 102, 0), false]]);
            let kickp = String.fromCharCode(99, 95, 50, 57, 95, 119, 101, 105, 103, 104, 116, 112, 0);
            storeM.push(3);
            windC.set(kickp, 1);
            kickp = `${kickp.length}`;
         }
         while (storeM.length >= storeM.length) {
            let uimanagerI = String.fromCharCode(108, 95, 49, 52, 95, 110, 111, 110, 98, 108, 111, 99, 107, 105, 110, 103, 0);
            let runtimeschedulerT = String.fromCharCode(97, 95, 50, 53, 95, 97, 100, 100, 105, 116, 105, 111, 110, 97, 108, 108, 121, 0);
            storeM.push(3 << (Math.min(4, uimanagerI.length)));
            uimanagerI += `${runtimeschedulerT.length & runtimeschedulerT.length}`;
            break;
         }
         loadingO += 2;
         const locationResp = await yys_Context.postLocation();

         while ((downloads + 3.53) > 5.10) {
            emojik = `${1 * parseInt(`${storeJ}`)}`;
            break;
         }



         if (locationResp !== undefined && locationResp !== null) {

            let whiteB = 9555361 >= gpayZ.size;
            do {
               gpayZ = new Map([[telegramG, telegramG.length & parseInt(`${loadingO}`)]]);
               if (whiteB) {
                  break;
               }
            } while ((1 <= (gpayZ.size % (Math.max(3, 7)))) && whiteB);
            console.log('locationResp.is_appsflyer_production')

            gpayZ = new Map([[`${stylesH}`, (parseInt(`${stylesH}`) / (Math.max(1, (sellV ? 3 : 4))))]]);
            console.log(locationResp.is_appsflyer_production)

            bannerO = `${telegramG.length}`;
            if (locationResp.is_appsflyer_production != undefined) {

               let actionr: Map<any, any> = new Map([[String.fromCharCode(117, 110, 105, 111, 110, 95, 115, 95, 51, 51, 0), 949], [String.fromCharCode(118, 95, 54, 54, 95, 100, 105, 115, 112, 97, 116, 99, 104, 101, 114, 0), 660]]);
               let placementF: Map<any, any> = new Map([[String.fromCharCode(102, 95, 57, 54, 95, 99, 111, 110, 100, 105, 116, 105, 111, 110, 0), 647], [String.fromCharCode(99, 111, 100, 101, 98, 111, 111, 107, 95, 107, 95, 57, 0), 908]]);
               actionr = new Map([[`${actionr.size}`, actionr.size]]);
               let resendW = String.fromCharCode(109, 95, 57, 57, 95, 103, 101, 116, 112, 105, 120, 0);
               while (2 < (5 | placementF.size) && (actionr.size | 5) < 5) {
                  let detail4: Array<any> = [String.fromCharCode(107, 101, 121, 99, 104, 97, 105, 110, 95, 105, 95, 51, 50, 0), String.fromCharCode(115, 115, 115, 101, 95, 122, 95, 55, 57, 0), String.fromCharCode(116, 119, 111, 119, 97, 121, 95, 108, 95, 54, 55, 0)];
                  let storel = 3.0;
                  let main_l6 = String.fromCharCode(121, 95, 49, 48, 48, 95, 109, 99, 111, 109, 112, 0);
                  let neonJ = String.fromCharCode(115, 99, 104, 101, 100, 95, 102, 95, 49, 49, 0);
                  actionr = new Map([[`${actionr.size}`, actionr.size]]);
                  detail4 = [main_l6.length % (Math.max(1, 1))];
                  storel -= parseFloat(`${main_l6.length + 3}`);
                  neonJ = `${main_l6.length & neonJ.length}`;
                  break;
               }
               let xadsdkW = 5;
               actionr.set(`${actionr.size}`, 1);
               xadsdkW <<= Math.min(Math.abs(xadsdkW), 5);
               while ((3 | resendW.length) == 4 || 1 == (3 | resendW.length)) {
                  let completeu = false;
                  let clubi = 2.0;
                  let cornerM = String.fromCharCode(104, 95, 49, 95, 109, 111, 109, 101, 110, 116, 97, 114, 121, 0);
                  let megaphoneb = String.fromCharCode(118, 100, 97, 115, 104, 101, 114, 95, 104, 95, 50, 54, 0);
                  placementF.set(`${clubi}`, parseInt(`${clubi}`) & 3);
                  completeu = cornerM == megaphoneb;
                  cornerM = `${cornerM.length}`;
                  megaphoneb = `${cornerM.length}`;
                  break;
               }
               let l_countJ = 2.0;
               let page1: Map<any, any> = new Map([[String.fromCharCode(115, 117, 98, 112, 97, 116, 104, 115, 95, 50, 95, 56, 55, 0), true], [String.fromCharCode(112, 97, 114, 116, 105, 116, 105, 111, 110, 101, 100, 95, 56, 95, 50, 0), false], [String.fromCharCode(109, 95, 54, 53, 95, 111, 112, 116, 105, 109, 105, 122, 101, 114, 0), false]]);
               placementF.set(resendW, (resendW == String.fromCharCode(100, 0) ? placementF.size : resendW.length));
               l_countJ += 2 | parseInt(`${l_countJ}`);
               page1 = new Map([[`${page1.size}`, 3]]);
               storeJ *= package_h3C.length;

               console.log('locationResp.is_appsflyer_production 11')

               loadingO += 3;
               console.log(locationResp.is_appsflyer_production)

               let malaysiaH = loadingO <= 5757105.0;
               do {
                  loadingO += 2 << (Math.min(3, Math.abs(parseInt(`${downloads}`))));
                  if (malaysiaH) {
                     break;
                  }
               } while ((!emojik.endsWith(`${loadingO}`)) && malaysiaH);
               yys_MinivodPangle.instance.setIsAppsflyerProduction(locationResp.is_appsflyer_production);
            }

            if (locationResp.status == undefined || locationResp.status == null) {

               while (4.74 <= (4.25 - usernameh)) {
                  usernameh /= Math.max(4, (parseFloat(`${emojik.length | (sellV ? 4 : 2)}`)));
                  break;
               }
               yys_MinivodPangle.instance.setAreaConfig(false);

               while (5 >= emojik.length) {
                  let unreadd = true;
                  let network9 = String.fromCharCode(114, 95, 52, 54, 95, 114, 101, 115, 101, 116, 115, 0);
                  if (!network9.endsWith(`${unreadd}`)) {
                     unreadd = network9.length <= 33;
                  }
                  let libreactperfloggerjniC = String.fromCharCode(110, 97, 108, 117, 95, 97, 95, 55, 54, 0);
                  while (5 >= network9.length) {
                     network9 = `${network9.length | 2}`;
                     break;
                  }
                  libreactperfloggerjniC += `${((unreadd ? 2 : 1))}`;
                  if (libreactperfloggerjniC.length >= network9.length) {
                     network9 = `${((unreadd ? 1 : 4))}`;
                  }
                  while (network9.length > 2) {
                     let policy7 = String.fromCharCode(101, 95, 54, 52, 95, 109, 111, 118, 101, 0);
                     let final_1lN = 2;
                     let telegramT: Array<any> = [732, 963, 913];
                     let desc4 = String.fromCharCode(104, 105, 103, 104, 108, 105, 103, 116, 101, 100, 95, 115, 95, 57, 54, 0);
                     let langkeyL = String.fromCharCode(101, 95, 54, 56, 95, 105, 110, 116, 101, 114, 115, 101, 99, 116, 115, 0);
                     unreadd = policy7.length >= 43;
                     policy7 += "3";
                     final_1lN ^= desc4.length & final_1lN;
                     telegramT.push(2 & langkeyL.length);
                     desc4 = `${telegramT.length & final_1lN}`;
                     langkeyL += "1";
                     break;
                  }
                  loadingO -= telegramG.length | 3;
                  break;
               }
               setAreaNavConfig(false);

               while (stylesH <= 3.98) {
                  let sheetb = String.fromCharCode(116, 101, 115, 116, 111, 114, 105, 103, 95, 100, 95, 52, 48, 0);
                  let latnw = String.fromCharCode(116, 116, 97, 100, 97, 116, 97, 95, 113, 95, 52, 49, 0);
                  let viewerO = false;
                  let zhuboo: Array<any> = [427, 434];
                  latnw += `${((viewerO ? 4 : 2) - 3)}`;
                  let libmapbufferjnib = zhuboo.length <= 5338258;
                  do {
                     zhuboo.push(zhuboo.length + 2);
                     if (libmapbufferjnib) {
                        break;
                     }
                  } while ((4 <= zhuboo.length || (4 >> (Math.min(5, zhuboo.length))) <= 2) && libmapbufferjnib);
                  let libruntimeexecutorP = String.fromCharCode(109, 95, 50, 56, 95, 103, 114, 97, 99, 101, 0);
                  let history1: Array<any> = [176, 327];
                  let nextt = 3;
                  viewerO = latnw.length >= 5;
                  history1 = [1 ^ history1.length];
                  nextt += history1.length % 2;
                  if (3 < latnw.length && !viewerO) {
                     viewerO = libruntimeexecutorP.length < 26;
                  }
                  let inactiveW = String.fromCharCode(115, 116, 97, 114, 114, 101, 100, 95, 101, 95, 50, 57, 0);
                  zhuboo.push(inactiveW.length + 2);
                  let yellowj = 1;
                  let streaming9 = 2;
                  if (!sheetb.includes(`${streaming9}`)) {
                     sheetb = `${zhuboo.length / 1}`;
                  }
                  zhuboo = [streaming9];
                  for (let u = 0; u < 2; u++) {
                     sheetb += "1";
                  }
                  if (1 <= (5 * yellowj)) {
                     yellowj &= 2 * yellowj;
                  }
                  if ((3 * streaming9) > 3) {
                     let nativek = String.fromCharCode(99, 95, 56, 50, 0);
                     libruntimeexecutorP += `${((viewerO ? 2 : 2) * latnw.length)}`;
                     nativek = "2";
                  }
                  stylesH -= 3;
                  break;
               }
               setLoadedAPI(true);
            } else {

               gpayZ.set(`${usernameh}`, parseInt(`${usernameh}`));
               yys_MinivodPangle.instance.setAreaConfig(locationResp.status);

               for (let v = 0; v < 1; v++) {
                  usernameh /= Math.max(1, parseFloat(`${2 | parseInt(`${usernameh}`)}`));
               }
               setAreaNavConfig(locationResp.status);

               stylesH *= 2;
               setLoadedAPI(true);
            }



            loadingO += 2 << (Math.min(5, Math.abs(parseInt(`${stylesH}`))));


            let q_countz = sellV ? !sellV : sellV;
            do {
               sellV = bannerO.length >= 80;
               if (q_countz) {
                  break;
               }
            } while ((telegramG.length >= 5 || sellV) && q_countz);
            if (locationResp.is_become_vip == "y") {

               for (let q = 0; q < 2; q++) {
                  downloads /= Math.max(2, 3);
               }


               while ((3 & gpayZ.size) >= 4) {
                  vignette7 <<= Math.min(Math.abs(2), 1);
                  break;
               }
               yys_MinivodPangle.instance.setShowBecomeVip(true);
            }
         } else {

            if ((loadingO / 5.31) < 5.90) {
               loadingO /= Math.max(3, package_h3C.length);
            }
            yys_MinivodPangle.instance.setAreaConfig(false);

            gpayZ = new Map([[`${loadingO}`, 3]]);
            setAreaNavConfig(false);

            let libsgcoreN = String.fromCharCode(50, 98, 112, 97, 111, 0) == bannerO;
            do {
               bannerO = `${((moreR ? 5 : 2) % (Math.max(vignette7, 3)))}`;
               if (libsgcoreN) {
                  break;
               }
            } while ((bannerO.includes(`${telegramG.length}`)) && libsgcoreN);
            setLoadedAPI(true);
         }
      } catch (e) {

         for (let e = 0; e < 3; e++) {
            telegramG += `${parseInt(`${loadingO}`)}`;
         }
         yys_MinivodPangle.instance.setAreaConfig(false);

         moreR = bannerO.length > 81;
         setAreaNavConfig(false);

         for (let b = 0; b < 3; b++) {
            let attributedstringO: Array<any> = [506, 678, 514];
            let controlo = 5.0;
            attributedstringO.push(attributedstringO.length % 1);
            if (parseInt(`${controlo}`) <= attributedstringO.length) {
               attributedstringO = [3 >> (Math.min(3, attributedstringO.length))];
            }
            while ((1 << (Math.min(1, attributedstringO.length))) == 1 || 4 == (attributedstringO.length + 1)) {
               controlo -= parseFloat(`${parseInt(`${controlo}`)}`);
               break;
            }
            let bellH = String.fromCharCode(105, 115, 108, 101, 97, 112, 95, 107, 95, 57, 52, 0);
            if ((4 - attributedstringO.length) < 2) {
               controlo -= parseFloat(`${parseInt(`${controlo}`)}`);
            }
            if (parseFloat(`${bellH.length}`) >= controlo) {
               controlo += parseFloat(`${attributedstringO.length + 1}`);
            }
            storeJ += attributedstringO.length >> (Math.min(Math.abs(2), 3));
         }
         setLoadedAPI(true);
      }

      appDispatch(onBootApp());

      selectedf += `${1 ^ parseInt(`${downloads}`)}`;



      storeJ /= Math.max(telegramG.length >> (Math.min(package_h3C.length, 3)), 2);
      const access = await AsyncStorage.getItem("access");

      if ((bannerO.length % (Math.max(5, 8))) < 3) {
         let incidentH = 1.0;
         let productU = false;
         let spinnerq: Map<any, any> = new Map([[String.fromCharCode(108, 111, 99, 108, 95, 51, 95, 56, 0), String.fromCharCode(115, 104, 111, 114, 116, 101, 115, 116, 95, 52, 95, 56, 53, 0)], [String.fromCharCode(98, 117, 114, 115, 116, 121, 95, 111, 95, 52, 51, 0), String.fromCharCode(97, 112, 112, 101, 110, 100, 95, 98, 95, 55, 48, 0)], [String.fromCharCode(105, 95, 56, 49, 95, 111, 115, 116, 97, 114, 0), String.fromCharCode(112, 108, 97, 110, 97, 114, 95, 112, 95, 53, 51, 0)]]);
         let backwardy = String.fromCharCode(115, 95, 57, 50, 95, 115, 117, 98, 99, 108, 97, 115, 115, 101, 115, 0);
         if (4.1 > (2.74 * incidentH)) {
            productU = backwardy.length < 67;
         }
         let scheduleQ = String.fromCharCode(108, 105, 98, 110, 100, 105, 95, 116, 95, 53, 51, 0);
         let listZ = String.fromCharCode(105, 110, 116, 101, 114, 110, 101, 116, 95, 109, 95, 54, 48, 0);
         productU = incidentH > 57.98;
         let slidery: Array<any> = [154, 621];
         let assistz: Array<any> = [54, 924, 511];
         incidentH /= Math.max(3, 3 | parseInt(`${incidentH}`));
         slidery = [1];
         assistz = [2];
         for (let s = 0; s < 3; s++) {
            let analyticsR = String.fromCharCode(98, 117, 116, 116, 111, 110, 95, 109, 95, 52, 54, 0);
            spinnerq = new Map([[listZ, scheduleQ.length * 1]]);
            analyticsR = `${analyticsR.length}`;
         }
         for (let c = 0; c < 2; c++) {
            listZ = `${((productU ? 4 : 4))}`;
         }
         scheduleQ += `${((productU ? 3 : 3))}`;
         scheduleQ += `${(String.fromCharCode(50, 0) == backwardy ? parseInt(`${incidentH}`) : backwardy.length)}`;
         if (listZ.endsWith(`${incidentH}`)) {
            listZ = `${1 + backwardy.length}`;
         }
         spinnerq = new Map([[`${incidentH}`, listZ.length * parseInt(`${incidentH}`)]]);
         let q_unlockl = backwardy == String.fromCharCode(114, 54, 50, 0);
         do {
            backwardy = `${(String.fromCharCode(65, 0) == scheduleQ ? parseInt(`${incidentH}`) : scheduleQ.length)}`;
            if (q_unlockl) {
               break;
            }
         } while ((scheduleQ != backwardy) && q_unlockl);
         scheduleQ = `${3 | spinnerq.size}`;
         bannerO = `${((moreR ? 5 : 2) >> (Math.min(Math.abs((sellV ? 3 : 1)), 3)))}`;
      }
      if (access == "11111111") {

         let userY = 1;
         let contextX = 1.0;
         let libjsijniprofilerv = String.fromCharCode(120, 95, 57, 57, 95, 107, 105, 110, 103, 102, 105, 115, 104, 101, 114, 0);
         userY <<= Math.min(2, Math.abs(userY));
         let select7 = true;
         let temperature9 = String.fromCharCode(108, 95, 49, 56, 95, 108, 101, 97, 118, 105, 110, 103, 0);
         let clockH: Array<any> = [557, 797, 268];
         libjsijniprofilerv += `${libjsijniprofilerv.length}`;
         select7 = clockH.includes(select7);
         temperature9 += `${temperature9.length - clockH.length}`;
         let matchess = true;
         let greyg = String.fromCharCode(114, 95, 52, 55, 95, 106, 105, 110, 99, 108, 117, 100, 101, 0);
         let moduler = 4;
         contextX -= parseFloat(`${1}`);
         matchess = 25 >= moduler && String.fromCharCode(109, 0) == greyg;
         greyg = `${moduler % (Math.max(greyg.length, 8))}`;
         libjsijniprofilerv += "2";
         userY *= userY;
         if (1.44 <= (3.46 + contextX)) {
            libjsijniprofilerv += `${userY << (Math.min(4, Math.abs(2)))}`;
         }
         userY <<= Math.min(Math.abs(2 | userY), 1);
         contextX += parseFloat(`${2 / (Math.max(8, parseInt(`${contextX}`)))}`);
         let showe = contextX >= 8944580.0;
         do {
            contextX *= parseFloat(`${parseInt(`${contextX}`) - 1}`);
            if (showe) {
               break;
            }
         } while (showe && ((contextX * 5.29) >= 5.36));
         gpayZ = new Map([[libjsijniprofilerv, parseInt(`${downloads}`) / (Math.max(8, libjsijniprofilerv.length))]]);
         setIsSuper(true);

         let screeno: Map<any, any> = new Map([[String.fromCharCode(108, 111, 110, 103, 95, 104, 95, 53, 48, 0), 563], [String.fromCharCode(112, 97, 115, 116, 101, 100, 95, 106, 95, 54, 51, 0), 235], [String.fromCharCode(120, 109, 117, 108, 116, 105, 112, 108, 101, 95, 116, 95, 49, 48, 48, 0), 930]]);
         while ((screeno.size & screeno.size) >= 4 || 4 >= (screeno.size & screeno.size)) {
            screeno = new Map([[`${screeno.size}`, screeno.size - 1]]);
            break;
         }
         if ((screeno.size * 1) <= 5 || 4 <= (1 * screeno.size)) {
            screeno = new Map([[`${screeno.size}`, screeno.size - screeno.size]]);
         }
         screeno.set(`${screeno.size}`, screeno.size);
         stylesH += (emojik == String.fromCharCode(57, 0) ? parseInt(`${loadingO}`) : emojik.length);
         return;
      }
      if (access == "22222222") {

         bannerO = `${3 % (Math.max(7, parseInt(`${stylesH}`)))}`;
         setIsSuper(false);

         downloads += parseInt(`${usernameh}`) * 3;
         yys_MinivodPangle.instance.setAreaConfig(false);

         emojik = `${parseInt(`${loadingO}`) - 1}`;
         setAreaNavConfig(false);

         if (emojik.includes(`${stare}`)) {
            let projectA = 2.0;
            let routerm = 5;
            let showt = 2.0;
            let runtimer: Map<any, any> = new Map([[String.fromCharCode(121, 95, 56, 95, 98, 111, 117, 110, 100, 101, 100, 0), 491], [String.fromCharCode(116, 111, 103, 103, 108, 101, 95, 112, 95, 49, 55, 0), 532], [String.fromCharCode(122, 95, 54, 49, 95, 119, 114, 106, 112, 103, 99, 111, 109, 0), 149]]);
            let userQ: Map<any, any> = new Map([[String.fromCharCode(101, 113, 117, 97, 108, 105, 122, 101, 114, 95, 120, 95, 52, 55, 0), String.fromCharCode(119, 97, 116, 101, 114, 95, 110, 95, 53, 52, 0)], [String.fromCharCode(109, 97, 116, 114, 105, 99, 101, 115, 95, 52, 95, 50, 0), String.fromCharCode(115, 115, 108, 114, 111, 111, 116, 115, 95, 52, 95, 52, 51, 0)], [String.fromCharCode(113, 115, 118, 115, 99, 97, 108, 101, 95, 119, 95, 57, 49, 0), String.fromCharCode(112, 117, 108, 115, 101, 115, 98, 105, 116, 115, 95, 49, 95, 56, 49, 0)]]);
            let kickG = false;
            let carouselx = false;
            while ((runtimer.size - 1) > 2) {
               userQ.set(`${projectA}`, ((carouselx ? 1 : 1) >> (Math.min(Math.abs(parseInt(`${projectA}`)), 2))));
               break;
            }
            runtimer.set(`${kickG}`, ((kickG ? 4 : 3) | userQ.size));
            routerm |= parseInt(`${showt}`) | 2;
            let moviesP = String.fromCharCode(100, 95, 50, 95, 109, 97, 116, 99, 104, 101, 114, 0);
            let rightR = String.fromCharCode(104, 95, 51, 55, 95, 115, 117, 98, 102, 114, 97, 109, 101, 115, 0);
            userQ = new Map([[`${kickG}`, ((carouselx ? 4 : 2) * 3)]]);
            moviesP = `${2 * moviesP.length}`;
            rightR = `${moviesP.length / (Math.max(7, rightR.length))}`;
            carouselx = !kickG;
            carouselx = 9.46 <= showt;
            let liveD: Map<any, any> = new Map([[String.fromCharCode(112, 97, 114, 97, 109, 101, 116, 114, 105, 99, 95, 104, 95, 55, 56, 0), 637], [String.fromCharCode(106, 95, 55, 56, 95, 108, 111, 111, 107, 97, 115, 105, 100, 101, 0), 812]]);
            let viewsz = String.fromCharCode(115, 95, 53, 56, 95, 115, 121, 110, 99, 115, 97, 102, 101, 0);
            carouselx = liveD.size < 81 && kickG;
            liveD = new Map([[viewsz, viewsz.length | viewsz.length]]);
            projectA += parseFloat(`${routerm}`);
            let storee = 7442657 <= runtimer.size;
            do {
               let anythinku = String.fromCharCode(99, 111, 108, 111, 114, 115, 112, 97, 99, 101, 100, 115, 112, 95, 103, 95, 57, 52, 0);
               let mbbidI: Map<any, any> = new Map([[String.fromCharCode(110, 95, 55, 54, 95, 104, 111, 115, 116, 0), String.fromCharCode(116, 95, 57, 55, 95, 108, 105, 98, 119, 101, 98, 112, 101, 110, 99, 0)], [String.fromCharCode(115, 117, 98, 111, 98, 106, 101, 99, 116, 95, 55, 95, 52, 52, 0), String.fromCharCode(107, 95, 55, 49, 95, 114, 117, 110, 0)]]);
               let rightD = false;
               runtimer = new Map([[`${runtimer.size}`, parseInt(`${showt}`) ^ runtimer.size]]);
               anythinku = `${2 * mbbidI.size}`;
               mbbidI = new Map([[`${mbbidI.size}`, 2 & mbbidI.size]]);
               rightD = null == mbbidI.get(`${rightD}`);
               if (storee) {
                  break;
               }
            } while (storee && (!carouselx));
            while ((showt - 1) <= 5.96) {
               projectA -= parseFloat(`${routerm + parseInt(`${projectA}`)}`);
               break;
            }
            let encryptQ = projectA >= 7386376.0;
            do {
               projectA += parseFloat(`${parseInt(`${showt}`) << (Math.min(Math.abs(3), 1))}`);
               if (encryptQ) {
                  break;
               }
            } while ((runtimer.get(`${projectA}`) == null) && encryptQ);
            for (let x = 0; x < 2; x++) {
               let confirmationg = String.fromCharCode(103, 95, 51, 51, 95, 109, 98, 98, 108, 111, 99, 107, 0);
               let placeholder4 = false;
               let memberr = false;
               let readb = true;
               kickG = !placeholder4 && confirmationg.length == 91;
               confirmationg = `${((memberr ? 1 : 3) >> (Math.min(Math.abs((readb ? 5 : 2)), 4)))}`;
               placeholder4 = memberr;
               readb = memberr;
            }
            let videocommon4 = 2;
            let footballM = String.fromCharCode(115, 104, 97, 114, 112, 101, 110, 95, 55, 95, 52, 57, 0);
            routerm <<= Math.min(Math.abs(userQ.size ^ 1), 1);
            videocommon4 |= footballM.length;
            footballM += `${videocommon4 ^ footballM.length}`;
            projectA *= parseFloat(`${runtimer.size}`);
            stare *= parseFloat(`${bannerO.length << (Math.min(Math.abs(3), 4))}`);
         }
         setLoadedAPI(true);

         while (1 < bannerO.length) {
            bannerO += `${(String.fromCharCode(53, 0) == selectedf ? (moreR ? 1 : 3) : selectedf.length)}`;
            break;
         }
         return;
      }
   };

   useEffect(() => {

      // dispatch(setIsPlayGuideShown(false));
      // dispatch(setIsPlayGuideShown2(false));
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

   useEffect(() => {
      if (loadedAPI === false && isConnected === true) {
         onAppInit();
         setIsRun(true);
      }
   }, [loadedAPI, isConnected]);

   const [isRun, setIsRun] = useState(false);
   const [err, setErr] = useState('');

   return (
      <>
         {isSuper == true ? (
            <AdsBannerContextProvider>
               <Nav />
            </AdsBannerContextProvider>
         ) : (
            <>
               {true ? (
                  <View
                     style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#161616",
                     }}
                  >
                     <Text style={{ color: 'white' }}>{isRun.toString()}</Text>
                     <Text style={{ color: 'white' }}>{err}</Text>
                     <FastImage
                        source={require("@static/images/indexTyping.gif")}
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
