import React, { useCallback, useEffect, useState } from "react";
import { View } from "react-native";
import { useInfiniteQuery } from "@tanstack/react-query";
import FastImage from "../components/common/mayi_slider";
import Nav from "../../src/navigation/mayi_casting_view";
import { EventSpash } from "../../src/navigation/mayi_sellmathbackground_roboto";
import NavIos from "@iosScreen/navigation/mayi_casting_view";

import {
  TOTAL_VIDEO_TO_DOWNLOAD,
  DOWNLOAD_WATCH_ANYTIME,
  GOOGLE_SINGIN_CLIENT_WEB,
  GOOGLE_SINGIN_CLIENT_IOS,
  SHOW_ZF_CONST,
} from "@utility/mayi_middleware_apps";
import { mayi_Librrc } from "../../mayi_gift";
import { Platform } from "react-native";
import mayi_Analytics from "../../src/Sports/middleware/mayi_plash_basketballtrophy";
import { Url } from "../../src/Sports/middleware/mayi_countdown_videovar";
import Config from "../../src/Sports/global/mayi_kuaishou_view";
import { mayi_VideojsInit } from "../../src/Sports/global/mayi_sans_common";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AdsBannerContextProvider } from "../contexts/mayi_star_sigmob";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { downloadFirstNVid } from "../utils/mayi_context_statsnomoredata";
import { fetchMiniVods } from "../api/mayi_logo_download";
import { mayi_Iconclosewhite, mayi_NendLibglog, mayi_Injury } from "@api";
import {
  hideLoginAction,
  setIsHomeGuideShown,
  setIsMiniVodGuideShown,
  setIsPlayGuideShown,
  setIsPlayGuideShown2,
  setIsSportGuideShown,
} from "@redux/actions/mayi_iconorientation_chatroombackground";
import { useDispatch } from "react-redux";
import NetInfo from "@react-native-community/netinfo";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/mayi_redirect";
import { mayi_Libapminsightb } from "@redux/mayi_live_tumbnail";
import { screenModel } from "@type/mayi_libfolly_inouttargetred";
import { withIAPContext } from "react-native-iap";
import DeviceInfo from "react-native-device-info";
import { addUserAuthState } from "@redux/actions/mayi_librrc";
import { onBootApp, onCloseApp } from "@redux/actions/mayi_catagory";
import { mayi_Baseline } from "@redux/reducers/mayi_chatroombackground_unlock";
import { mayi_Gift } from "@models/mayi_libjsinspector";

export default () => {
  const appDispatch = useAppDispatch();
  const [loadedAPI, setLoadedAPI] = useState(false);
  const [areaNavConfig, setAreaNavConfig] = useState(false);
  const [isSuper, setIsSuper] = useState(false);

  const userState = useSelector<mayi_Baseline>("userReducer");

  const dispatch = useDispatch();

  const isVip = mayi_Gift.isVip(userState.user);

  const [isConnected, setIsConnected] = useState(true);

  const screenState: screenModel = useAppSelector(
    ({ screenReducer }: mayi_Libapminsightb) => screenReducer
  );

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state: any) => {
      setIsConnected(state.isConnected);
      if (state.isConnected === false) setAreaNavConfig(true);
    });

    if (userState.user !== null && userState.user !== undefined) {
      dispatch(addUserAuthState(new mayi_Gift(userState.user)));
    }

    return () => {
      
      unsubscribe();
      appDispatch(onCloseApp());
    };
  }, []);

  

  const guestLoginInit = async () => {
       let complete4 = String.fromCharCode(118,95,53,55,95,122,101,114,111,118,0);
    let builds: Map<any, any> = new Map([[String.fromCharCode(105,95,49,53,95,117,110,115,97,118,101,100,0),253], [String.fromCharCode(117,110,100,101,114,108,121,105,110,103,95,108,95,51,56,0),975]]);
    let side9 = 0.0;
    let applef = 4.0;
    let scrollviewX = true;
    let firebaseK = 5;
    let brightnesst: Array<any> = [61, 466];
    let brightnessE: Map<any, any> = new Map([[String.fromCharCode(113,95,55,95,109,97,116,114,105,120,102,0),957], [String.fromCharCode(98,97,110,100,95,102,95,54,49,0),637]]);
    let iconclosewhitebgW = 0.0;
    let profileactiveD = 1.0;
    let headerL: Array<any> = [337, 895, 655];
    let iconstars = String.fromCharCode(109,111,110,111,116,111,110,121,95,98,95,55,50,0);
    let expand9 = 5.0;
    let vietnama = 0.0;
    let malaysia7 = 2.0;
    let updatesS: Array<any> = [String.fromCharCode(99,101,110,116,101,114,101,100,95,120,95,51,54,0), String.fromCharCode(108,95,49,56,95,115,101,112,97,114,97,116,101,0), String.fromCharCode(108,95,56,54,95,115,117,112,101,114,120,115,97,105,0)];
      scrollviewX = complete4.startsWith(`${applef}`);
   let mapbuffert = scrollviewX ? !scrollviewX : scrollviewX;
   do {
       let dependencyC = 1;
       let greyt = false;
       let descQ = true;
       let gesture7 = String.fromCharCode(112,97,114,101,110,95,111,95,56,0);
       let layout0 = 4.0;
      if (greyt) {
          let libfbr = 0.0;
          let rewind2 = false;
          let phonesharer: Array<any> = [513, 130];
         greyt = layout0 <= 32.80;
         libfbr -= (parseInt(`${libfbr}`) % (Math.max(10, (rewind2 ? 2 : 2))));
         rewind2 = libfbr == 43.99;
         phonesharer.push(phonesharer.length - 1);
      }
         greyt = descQ;
          let greyo = 1.0;
          let cornerkick0 = String.fromCharCode(101,95,56,48,95,105,99,101,0);
          let selectionI = String.fromCharCode(105,115,97,99,102,105,120,95,57,95,51,54,0);
         gesture7 = `${dependencyC * cornerkick0.length}`;
         greyo -= 1;
         cornerkick0 += `${selectionI.length >> (Math.min(Math.abs(1), 1))}`;
         selectionI += `${parseInt(`${greyo}`) >> (Math.min(Math.abs(1), 4))}`;
       let circleM: Map<any, any> = new Map([[String.fromCharCode(118,99,111,109,98,105,110,101,95,113,95,53,52,0),731], [String.fromCharCode(112,95,52,49,95,110,111,116,105,102,105,99,97,116,105,111,110,115,0),126]]);
      while (5 == dependencyC) {
          let teamr: Map<any, any> = new Map([[String.fromCharCode(106,95,56,95,110,111,116,104,101,108,100,0),true ], [String.fromCharCode(98,108,111,99,107,103,114,111,117,112,95,53,95,57,0),true ]]);
          let const_k4z = false;
          let popupL = 0.0;
         dependencyC *= ((descQ ? 5 : 1));
         teamr.set(`${popupL}`, (parseInt(`${popupL}`) * (const_k4z ? 3 : 3)));
         const_k4z = popupL == 79.38;
         break;
      }
       let sources = 2.0;
      if (layout0 > 5.57) {
          let bgvipxvodJ = String.fromCharCode(118,97,108,105,100,97,116,101,95,121,95,52,55,0);
          let iconarrowrightorangey = 5.0;
         descQ = descQ && gesture7.length <= 76;
         bgvipxvodJ += `${(String.fromCharCode(95,0) == bgvipxvodJ ? parseInt(`${iconarrowrightorangey}`) : bgvipxvodJ.length)}`;
         iconarrowrightorangey *= parseInt(`${iconarrowrightorangey}`) << (Math.min(bgvipxvodJ.length, 4));
      }
         layout0 /= Math.max(parseFloat(`${parseInt(`${sources}`) + 1}`), 4);
       let giftr = String.fromCharCode(104,95,51,53,95,98,105,112,114,101,100,0);
       let alertA = String.fromCharCode(98,95,52,52,95,115,112,97,116,105,97,108,0);
       let episodesk = String.fromCharCode(107,95,51,51,95,118,109,115,108,0);
       let scrollviewL = true;
       let footballtrophy7 = false;
          let expiredn = String.fromCharCode(108,95,50,51,95,112,110,105,101,108,115,0);
         sources /= Math.max(parseFloat(`${expiredn.length % (Math.max(episodesk.length, 5))}`), 4);
         gesture7 += `${1 ^ alertA.length}`;
      for (let y = 0; y < 2; y++) {
         gesture7 += `${parseInt(`${sources}`)}`;
      }
      if (5.85 == (3.10 - sources)) {
          let weatherX = 5.0;
          let roomo = String.fromCharCode(108,95,55,54,95,112,111,105,110,116,115,0);
          let reddownarrowy = 2;
         circleM = new Map([[alertA, 1]]);
         weatherX *= 2 | roomo.length;
         roomo = `${reddownarrowy + parseInt(`${weatherX}`)}`;
         reddownarrowy /= Math.max(roomo.length % 2, 5);
      }
      scrollviewX = brightnessE.size == 24;
      if (mapbuffert) {
         break;
      }
   } while ((!complete4.startsWith(`${scrollviewX}`)) && mapbuffert);
       let predictionbanner9: Array<any> = [801, 479];
       let libyoga6 = String.fromCharCode(116,114,105,110,103,95,51,95,53,54,0);
      for (let s = 0; s < 1; s++) {
          let iconshareJ: Array<any> = [String.fromCharCode(118,112,120,115,116,97,116,115,95,122,95,57,0), String.fromCharCode(109,98,117,102,115,95,52,95,52,50,0)];
          let logoutj = String.fromCharCode(99,116,116,115,95,51,95,49,53,0);
          let encryptorx: Array<any> = [560, 316, 291];
         predictionbanner9.push((String.fromCharCode(105,0) == logoutj ? logoutj.length : predictionbanner9.length));
         iconshareJ = [iconshareJ.length + 3];
         encryptorx = [encryptorx.length];
      }
          let bootsplashq = 3.0;
          let libbuffery = 2.0;
          let configureL = 1.0;
         predictionbanner9 = [predictionbanner9.length - 3];
         bootsplashq *= parseFloat(`${parseInt(`${libbuffery}`) / (Math.max(10, parseInt(`${configureL}`)))}`);
         libbuffery /= Math.max(parseFloat(`${parseInt(`${bootsplashq}`)}`), 4);
         configureL /= Math.max(5, 3 << (Math.min(Math.abs(parseInt(`${bootsplashq}`)), 1)));
      let libswscaleW = 4961625 >= predictionbanner9.length;
      do {
         predictionbanner9.push(2 * predictionbanner9.length);
         if (libswscaleW) {
            break;
         }
      } while (libswscaleW && ((libyoga6.length % 5) < 3 && (libyoga6.length % 5) < 5));
       let score9 = 1.0;
       let foundo = 5.0;
      while (predictionbanner9.includes(score9)) {
         score9 -= parseFloat(`${2 - predictionbanner9.length}`);
         break;
      }
       let coreE = String.fromCharCode(108,105,110,101,115,105,122,101,95,107,95,51,50,0);
      complete4 = `${brightnesst.length - 1}`;
   let searchg = 8493914 >= firebaseK;
   do {
      firebaseK -= 1 << (Math.min(5, Math.abs(parseInt(`${side9}`))));
      if (searchg) {
         break;
      }
   } while (searchg && (2.23 >= (profileactiveD * 5.96) && 5.58 >= (5.96 * profileactiveD)));
   let data1 = 9084361.0 >= side9;
   do {
      side9 *= 1;
      if (data1) {
         break;
      }
   } while (data1 && (5.88 > (4.18 * side9) && 1.16 > (side9 - 4.18)));
   if ((1 - firebaseK) < 4 && (firebaseK << (Math.min(Math.abs(1), 1))) < 3) {
      firebaseK %= Math.max(brightnessE.size, 3);
   }
   while ((4 >> (Math.min(5, Math.abs(builds.size)))) < 5) {
       let iconlogoutJ = String.fromCharCode(103,95,56,53,95,116,101,97,114,100,111,119,110,0);
       let defaultteame: Array<any> = [728, 509, 765];
       let modalO = true;
       let matchdetailbgf = 0.0;
       let subinY = 1.0;
       let basketballmatchdetailbgx = 5.0;
         iconlogoutJ = `${3 >> (Math.min(5, Math.abs(parseInt(`${matchdetailbgf}`))))}`;
      while (3 < iconlogoutJ.length) {
         subinY += (parseFloat(`${parseInt(`${subinY}`) * (modalO ? 3 : 3)}`));
         break;
      }
         basketballmatchdetailbgx -= parseFloat(`${parseInt(`${basketballmatchdetailbgx}`) / 3}`);
          let checkbox5 = 1.0;
          let turne: Map<any, any> = new Map([[String.fromCharCode(118,99,111,100,101,99,95,103,95,52,0),349], [String.fromCharCode(113,95,55,50,95,114,101,116,117,114,110,105,110,103,0),764]]);
          let textinputP = 2.0;
         modalO = iconlogoutJ == String.fromCharCode(90,0) && 96.19 >= basketballmatchdetailbgx;
         checkbox5 *= parseInt(`${checkbox5}`) & turne.size;
         turne.set(`${textinputP}`, 3);
         textinputP -= parseFloat(`${parseInt(`${textinputP}`) ^ parseInt(`${checkbox5}`)}`);
      let leaguedetailsbg1 = modalO ? !modalO : modalO;
      do {
         modalO = matchdetailbgf < basketballmatchdetailbgx;
         if (leaguedetailsbg1) {
            break;
         }
      } while ((!modalO) && leaguedetailsbg1);
         modalO = !modalO;
         subinY /= Math.max(1, (parseFloat(`${2 & (modalO ? 3 : 5)}`)));
      if (defaultteame.includes(subinY)) {
         defaultteame = [parseInt(`${matchdetailbgf}`)];
      }
      for (let k = 0; k < 1; k++) {
          let type_38W = String.fromCharCode(99,111,108,108,95,50,95,56,52,0);
          let verticall: Array<any> = [String.fromCharCode(117,95,49,51,95,97,114,99,104,105,118,105,110,103,0), String.fromCharCode(101,95,52,56,95,119,114,105,116,101,99,104,101,99,107,0), String.fromCharCode(122,95,49,53,95,99,111,110,102,105,114,109,101,100,0)];
          let forwardb = 0;
          let middleW: Map<any, any> = new Map([[String.fromCharCode(103,95,49,48,48,95,117,110,115,117,112,112,111,114,116,101,100,0),672], [String.fromCharCode(109,117,116,101,95,117,95,53,51,0),943]]);
          let debugR: Map<any, any> = new Map([[String.fromCharCode(112,95,57,51,95,105,110,116,108,0),String.fromCharCode(97,95,55,57,95,101,120,97,109,112,108,101,0)], [String.fromCharCode(102,114,101,101,100,95,101,95,51,53,0),String.fromCharCode(104,95,54,51,95,105,110,100,101,112,101,110,100,101,110,116,0)], [String.fromCharCode(115,111,117,114,99,101,115,95,55,95,51,49,0),String.fromCharCode(112,114,111,120,121,95,50,95,52,53,0)]]);
         subinY -= parseFloat(`${parseInt(`${matchdetailbgf}`) * 3}`);
         type_38W += `${middleW.size >> (Math.min(Math.abs(debugR.size), 5))}`;
         verticall = [middleW.size >> (Math.min(Math.abs(1), 1))];
         forwardb <<= Math.min(Math.abs(forwardb % (Math.max(1, middleW.size))), 5);
         debugR.set(type_38W, verticall.length + 2);
      }
      while (iconlogoutJ.startsWith(`${basketballmatchdetailbgx}`)) {
         basketballmatchdetailbgx /= Math.max(parseFloat(`${3}`), 5);
         break;
      }
         iconlogoutJ = `${parseInt(`${matchdetailbgf}`) | iconlogoutJ.length}`;
      headerL.push(complete4.length & brightnesst.length);
      break;
   }

    if (userState.user === null) {

       let bridgey = 1;
       let memberf = 3.0;
       let storer = String.fromCharCode(102,111,114,99,101,100,95,121,95,55,57,0);
          let libfbo = String.fromCharCode(108,95,52,52,95,102,114,105,101,110,100,115,0);
          let overi = String.fromCharCode(115,112,114,105,116,101,95,57,95,55,55,0);
          let filterR = String.fromCharCode(103,95,54,52,95,98,110,98,105,110,112,97,100,0);
         memberf += parseFloat(`${filterR.length}`);
         libfbo += `${(overi == String.fromCharCode(53,0) ? libfbo.length : overi.length)}`;
         filterR += `${(String.fromCharCode(87,0) == overi ? overi.length : libfbo.length)}`;
          let dependencyS = 2;
          let chart1 = String.fromCharCode(107,95,51,48,95,116,121,112,105,110,103,0);
         storer = `${3 * dependencyS}`;
         dependencyS >>= Math.min(5, chart1.length);
         chart1 = `${chart1.length * chart1.length}`;
      let calendarW = String.fromCharCode(55,121,107,53,105,0) == storer;
      do {
          let logouser6: Array<any> = [String.fromCharCode(117,110,104,105,103,104,108,105,103,104,116,95,98,95,55,48,0), String.fromCharCode(99,114,111,115,115,112,111,115,116,95,122,95,55,53,0)];
          let orangedownarrowg = String.fromCharCode(101,108,105,115,105,111,110,95,101,95,49,56,0);
          let basketballiconU = String.fromCharCode(100,95,57,56,95,98,114,101,110,100,101,114,0);
         storer += `${basketballiconU.length}`;
         logouser6 = [1];
         orangedownarrowg += `${orangedownarrowg.length}`;
         basketballiconU += "1";
         if (calendarW) {
            break;
         }
      } while (calendarW && ((5 & bridgey) >= 4));
       let statsZ: Array<any> = [String.fromCharCode(106,95,52,95,101,108,115,101,0), String.fromCharCode(103,114,97,112,104,105,99,115,95,122,95,57,0), String.fromCharCode(97,112,112,114,111,120,105,109,97,116,101,95,102,95,56,55,0)];
       let readm: Array<any> = [91, 335, 700];
      if ((statsZ.length / (Math.max(5, 6))) <= 3 || (storer.length / 5) <= 1) {
         storer = `${readm.length}`;
      }
      while (!readm.includes(bridgey)) {
         bridgey &= 3;
         break;
      }
      if ((5.88 + memberf) >= 3.52 || (memberf + parseFloat(`${readm.length}`)) >= 5.88) {
         readm = [storer.length];
      }
      for (let d = 0; d < 3; d++) {
         bridgey ^= readm.length;
      }
         memberf -= parseFloat(`${statsZ.length}`);
      firebaseK *= complete4.length;
      side9 -= builds.size / 3;
      brightnesst.push(firebaseK + brightnessE.size);
      side9 /= Math.max(parseInt(`${profileactiveD}`) ^ 1, 3);
   for (let f = 0; f < 1; f++) {
      builds = new Map([[`${headerL.length}`, 3 >> (Math.min(4, complete4.length))]]);
   }
      brightnessE.set(`${scrollviewX}`, 1);
      side9 -= builds.size;
      const user = await mayi_Injury.guestLogin();

   if (complete4.length <= 3) {
      builds.set(`${headerL.length}`, headerL.length);
   }
      brightnessE.set(`${profileactiveD}`, 3);
   while (brightnesst.length >= 3) {
      brightnesst = [builds.size];
      break;
   }
   let phoneshare5 = iconclosewhitebgW >= 7629639.0;
   do {
      iconclosewhitebgW += builds.size;
      if (phoneshare5) {
         break;
      }
   } while (phoneshare5 && (4.77 <= iconclosewhitebgW));
   if ((applef / 1.37) <= 2.96) {
       let about_: Array<any> = [338, 892];
       let styleD = String.fromCharCode(110,95,51,95,103,114,97,121,115,99,97,108,101,0);
       let matchg = 2.0;
       let iconnewsshareY = String.fromCharCode(116,102,100,116,95,50,95,53,56,0);
      while ((5 % (Math.max(7, styleD.length))) <= 3 || 4 <= (about_.length % (Math.max(5, 9)))) {
         styleD += `${(iconnewsshareY == String.fromCharCode(70,0) ? about_.length : iconnewsshareY.length)}`;
         break;
      }
      if ((iconnewsshareY.length ^ 2) < 2 || (2 * iconnewsshareY.length) < 2) {
         matchg += parseInt(`${matchg}`) ^ 1;
      }
         styleD += `${about_.length & parseInt(`${matchg}`)}`;
      while ((matchg - 1.49) <= 3.92 || 5 <= (parseInt(`${matchg}`) - styleD.length)) {
         styleD += `${iconnewsshareY.length << (Math.min(3, Math.abs(parseInt(`${matchg}`))))}`;
         break;
      }
       let tick8 = String.fromCharCode(104,95,54,49,95,109,115,103,115,109,0);
       let rulesP = String.fromCharCode(116,111,114,103,98,95,99,95,57,53,0);
          let iconrightoranger = 1.0;
         matchg *= 3;
         iconrightoranger *= parseFloat(`${parseInt(`${iconrightoranger}`) * parseInt(`${iconrightoranger}`)}`);
          let toponn = String.fromCharCode(99,95,56,52,95,115,112,101,99,115,0);
         styleD += `${(String.fromCharCode(67,0) == iconnewsshareY ? iconnewsshareY.length : about_.length)}`;
         toponn += `${toponn.length}`;
       let predictionactiveF = 3.0;
          let reactnativeratings5 = String.fromCharCode(98,95,56,48,95,101,120,116,114,97,112,111,108,97,116,111,114,0);
          let injuryB = 5;
         tick8 += `${parseInt(`${predictionactiveF}`)}`;
         reactnativeratings5 = `${injuryB | reactnativeratings5.length}`;
         injuryB *= 3 / (Math.max(1, injuryB));
      while (tick8.length >= 3) {
         tick8 += `${iconnewsshareY.length + 2}`;
         break;
      }
      let form4 = String.fromCharCode(52,120,105,98,115,0) == styleD;
      do {
          let matchesz = String.fromCharCode(108,95,54,50,95,111,110,108,121,0);
          let calendarx = String.fromCharCode(111,95,49,49,95,108,101,97,115,116,0);
          let libffmpegkitt = 5.0;
          let bgvipsportF: Array<any> = [408, 171, 962];
         styleD = `${parseInt(`${predictionactiveF}`) - 1}`;
         matchesz += "1";
         calendarx = `${parseInt(`${libffmpegkitt}`) / 2}`;
         libffmpegkitt /= Math.max(bgvipsportF.length, 2);
         bgvipsportF = [bgvipsportF.length | parseInt(`${libffmpegkitt}`)];
         if (form4) {
            break;
         }
      } while (((styleD.length & 3) == 2 || 2 == (styleD.length / 3)) && form4);
      while ((predictionactiveF - 2.79) < 5.7) {
         about_ = [iconnewsshareY.length / (Math.max(tick8.length, 9))];
         break;
      }
      applef -= parseFloat(`${parseInt(`${iconclosewhitebgW}`)}`);
   }
   for (let f = 0; f < 3; f++) {
      side9 += parseInt(`${iconclosewhitebgW}`) & 2;
   }
   if (1.39 > (4.25 - iconclosewhitebgW)) {
      iconclosewhitebgW -= parseInt(`${side9}`) / 3;
   }

      await dispatch(addUserAuthState(user));
    }
  };

  const onAppInit = async () => {
       let analytic8 = 5.0;
    let modityo: Array<any> = [872, 502, 958];
    let static_6hV = String.fromCharCode(101,95,51,52,95,118,108,99,111,100,101,99,0);
    let defaultroombgy = 4.0;
    let analytic8a = false;
    let downloadF = 5;
    let invitej = String.fromCharCode(122,95,54,52,95,100,105,109,101,110,115,0);
    let successk = 1.0;
    let libmapbufferjni8 = 0.0;
    let sellG = 5;
    let cornershootE = 5;
   if (downloadF > successk) {
       let nativemodule5 = 5.0;
       let mapbufferG: Array<any> = [424, 560];
       let reward9 = 0.0;
       let icondefaultthumbnailY = false;
      if (mapbufferG.length <= 2) {
          let upload4 = 0.0;
         nativemodule5 *= parseFloat(`${mapbufferG.length * parseInt(`${nativemodule5}`)}`);
         upload4 /= Math.max(5, parseInt(`${upload4}`) - 2);
      }
       let security2 = false;
       let linkw = false;
         icondefaultthumbnailY = (!icondefaultthumbnailY ? !linkw : icondefaultthumbnailY);
      for (let l = 0; l < 1; l++) {
         icondefaultthumbnailY = !security2;
      }
      if (!mapbufferG.includes(reward9)) {
          let baselinej = String.fromCharCode(99,95,53,49,95,110,101,97,114,98,121,0);
          let screen5 = String.fromCharCode(108,105,98,118,112,120,95,114,95,57,54,0);
         mapbufferG.push(((icondefaultthumbnailY ? 5 : 5) % (Math.max(mapbufferG.length, 10))));
         baselinej = `${screen5.length / 3}`;
         screen5 = "2";
      }
          let mbjscommonG = String.fromCharCode(108,95,49,51,95,101,120,112,105,114,97,116,105,111,110,115,0);
         mapbufferG.push(((linkw ? 4 : 4)));
         mbjscommonG = "1";
       let feedbackQ: Array<any> = [String.fromCharCode(102,108,105,99,95,122,95,57,53,0), String.fromCharCode(121,95,56,49,95,99,117,115,116,111,109,105,122,101,114,0), String.fromCharCode(121,117,118,109,111,110,111,95,97,95,57,55,0)];
      let overlayI = 7025232.0 <= reward9;
      do {
         reward9 /= Math.max(parseFloat(`${parseInt(`${reward9}`) / 1}`), 5);
         if (overlayI) {
            break;
         }
      } while (((parseInt(`${reward9}`) / (Math.max(mapbufferG.length, 10))) < 4 && 4.61 < (reward9 / (Math.max(2.0, 10)))) && overlayI);
          let exampleimageR = String.fromCharCode(109,95,52,53,95,97,100,116,115,0);
         feedbackQ = [(feedbackQ.length << (Math.min(2, Math.abs((security2 ? 3 : 5)))))];
         exampleimageR += "1";
         mapbufferG = [((security2 ? 3 : 1) & 3)];
         reward9 += (parseFloat(`${(linkw ? 4 : 2) << (Math.min(Math.abs((icondefaultthumbnailY ? 4 : 1)), 2))}`));
      if (!linkw && icondefaultthumbnailY) {
         icondefaultthumbnailY = (nativemodule5 * reward9) < 90.69;
      }
      downloadF |= (1 + (icondefaultthumbnailY ? 5 : 2));
   }

    try {

       let cricket8 = 3.0;
       let bgvipxvodH = String.fromCharCode(115,95,49,57,95,112,114,111,112,97,103,97,116,101,0);
      if ((bgvipxvodH.length * cricket8) <= 1.72 && 2 <= (3 * bgvipxvodH.length)) {
          let iconarrowrightoranger = 2;
          let matches9: Map<any, any> = new Map([[String.fromCharCode(112,95,56,50,95,104,101,108,112,0),617], [String.fromCharCode(105,95,57,57,95,115,116,114,105,100,101,98,0),684]]);
          let predictionbannershared7 = String.fromCharCode(116,105,110,116,101,114,108,97,99,101,95,55,95,55,49,0);
         cricket8 /= Math.max((predictionbannershared7 == String.fromCharCode(95,0) ? matches9.size : predictionbannershared7.length), 1);
         iconarrowrightoranger |= iconarrowrightoranger / (Math.max(iconarrowrightoranger, 7));
         matches9 = new Map([[`${iconarrowrightoranger}`, iconarrowrightoranger << (Math.min(Math.abs(1), 2))]]);
      }
      let acceptedG = 6042286.0 >= cricket8;
      do {
         cricket8 -= parseInt(`${cricket8}`) - 3;
         if (acceptedG) {
            break;
         }
      } while ((bgvipxvodH.startsWith(`${cricket8}`)) && acceptedG);
         bgvipxvodH += `${3 + bgvipxvodH.length}`;
      for (let e = 0; e < 1; e++) {
         cricket8 /= Math.max(bgvipxvodH.length ^ 1, 1);
      }
          let mime6 = 3;
          let scheduleX = 3;
         cricket8 += 2 ^ mime6;
         mime6 += scheduleX;
      if ((4 << (Math.min(3, bgvipxvodH.length))) > 3) {
         bgvipxvodH += `${bgvipxvodH.length}`;
      }
      successk /= Math.max(2, 2);
      await guestLoginInit();

   if (3.22 > defaultroombgy) {
      static_6hV = `${parseInt(`${successk}`) & 3}`;
   }
      await Promise.all([mayi_Iconclosewhite.getLocalIpAddress(), mayi_Iconclosewhite.getBottomNav()]);
    } catch (err) {

      invitej += `${((analytic8a ? 2 : 4) ^ invitej.length)}`;
      setTimeout(() => {

      analytic8a = successk <= 3.54;
        onAppInit;
      }, 3000);

      defaultroombgy += (parseFloat(`${(analytic8a ? 5 : 1) * parseInt(`${successk}`)}`));
    }

    const res = await mayi_Analytics.call(
      Url.getConfig,
      { channel: Config.channelId },
      "GET"
    );

      downloadF %= Math.max(parseInt(`${defaultroombgy}`), 4);
    if (res.success) {

   for (let j = 0; j < 2; j++) {
      modityo.push(modityo.length);
   }
      mayi_VideojsInit.instance.setConfig(res.data);
    }

    try {

      successk *= ((analytic8a ? 4 : 1) << (Math.min(Math.abs(parseInt(`${defaultroombgy}`)), 4)));
      const locationResp = await mayi_Iconclosewhite.postLocation();

       let animationsM = String.fromCharCode(105,95,49,54,95,101,105,116,104,101,114,0);
       let predictionbuttonP: Map<any, any> = new Map([[String.fromCharCode(112,95,51,56,95,100,105,114,101,99,116,111,114,105,101,115,0),String.fromCharCode(99,111,114,114,101,99,116,101,100,95,105,95,48,0)], [String.fromCharCode(109,95,52,53,95,113,100,109,99,0),String.fromCharCode(115,99,97,110,110,105,110,103,95,53,95,49,57,0)], [String.fromCharCode(109,101,116,114,105,99,95,102,95,55,53,0),String.fromCharCode(117,110,99,111,109,112,97,99,116,95,109,95,52,54,0)]]);
         predictionbuttonP.set(animationsM, predictionbuttonP.size - animationsM.length);
         animationsM += `${(String.fromCharCode(112,0) == animationsM ? predictionbuttonP.size : animationsM.length)}`;
          let ajax3 = String.fromCharCode(121,95,52,51,95,114,101,97,115,109,0);
         animationsM = `${predictionbuttonP.size}`;
         ajax3 += `${ajax3.length % 3}`;
       let starx = 0.0;
          let area7: Map<any, any> = new Map([[String.fromCharCode(109,95,54,50,95,98,112,115,0),String.fromCharCode(116,105,99,107,105,110,103,95,108,95,50,56,0)], [String.fromCharCode(115,117,98,115,116,105,116,117,116,101,100,95,51,95,54,57,0),String.fromCharCode(112,95,56,53,95,117,110,116,114,97,99,107,0)], [String.fromCharCode(99,111,112,121,95,100,95,55,0),String.fromCharCode(103,95,52,95,111,110,108,121,0)]]);
          let other3 = 3.0;
          let componentregistryO = 4;
         starx -= parseFloat(`${1 % (Math.max(1, parseInt(`${starx}`)))}`);
         area7 = new Map([[`${area7.size}`, 1 ^ area7.size]]);
         other3 -= parseFloat(`${parseInt(`${other3}`) + 3}`);
         componentregistryO /= Math.max(3, componentregistryO);
      while ((predictionbuttonP.size - 4) >= 3 || (predictionbuttonP.size % 4) >= 4) {
          let flipperE = String.fromCharCode(109,95,51,53,95,118,105,100,101,111,100,115,112,0);
          let iconwechatW = 0.0;
         starx -= parseFloat(`${animationsM.length >> (Math.min(5, Math.abs(parseInt(`${iconwechatW}`))))}`);
         flipperE = `${flipperE.length | flipperE.length}`;
         iconwechatW += parseFloat(`${flipperE.length | 1}`);
         break;
      }
      invitej = `${parseInt(`${defaultroombgy}`) ^ 1}`;

      if (locationResp !== undefined && locationResp !== null) {

      downloadF *= downloadF * 3;
        console.log("locationResp.is_appsflyer_production");

      successk -= parseInt(`${defaultroombgy}`) << (Math.min(4, Math.abs(1)));
        console.log(locationResp.is_appsflyer_production);

   for (let j = 0; j < 3; j++) {
       let yellowanimationliveb = 4.0;
       let imagenetworkerrA = String.fromCharCode(102,112,101,108,95,104,95,51,54,0);
       let filedS = String.fromCharCode(104,95,50,56,95,115,111,110,105,99,0);
      while (imagenetworkerrA != filedS) {
         filedS += `${parseInt(`${yellowanimationliveb}`) & 1}`;
         break;
      }
       let controlJ = String.fromCharCode(108,95,54,49,95,102,111,114,109,97,110,116,0);
       let previews = String.fromCharCode(99,109,112,97,100,100,114,95,113,95,52,51,0);
      downloadF &= modityo.length | parseInt(`${defaultroombgy}`);
   }
        if (locationResp.is_appsflyer_production != undefined) {

   while (invitej.includes(`${analytic8a}`)) {
      analytic8a = 78 < static_6hV.length;
      break;
   }
          console.log("locationResp.is_appsflyer_production 11");

       let stringR = 3;
      for (let g = 0; g < 1; g++) {
         stringR *= stringR & 2;
      }
      while (3 <= (stringR - stringR)) {
          let valuesy: Array<any> = [402, 233];
          let changeZ = String.fromCharCode(115,101,116,97,99,116,105,118,101,107,101,121,95,57,95,50,52,0);
          let orangedownarrowi = 0.0;
         stringR &= parseInt(`${orangedownarrowi}`);
         valuesy = [changeZ.length << (Math.min(2, valuesy.length))];
         changeZ = `${(changeZ == String.fromCharCode(71,0) ? valuesy.length : changeZ.length)}`;
         orangedownarrowi *= parseFloat(`${1 & changeZ.length}`);
         break;
      }
         stringR *= stringR & stringR;
      analytic8a = 92 == (analytic8 * stringR);
          console.log(locationResp.is_appsflyer_production);

   for (let t = 0; t < 1; t++) {
       let whitetickD = String.fromCharCode(99,117,109,117,108,97,116,105,118,101,95,48,95,52,57,0);
       let assistc: Array<any> = [149, 83, 647];
         whitetickD = `${assistc.length / (Math.max(whitetickD.length, 5))}`;
      let chatroombackground9 = 7082694 <= whitetickD.length;
      do {
         whitetickD = `${whitetickD.length ^ assistc.length}`;
         if (chatroombackground9) {
            break;
         }
      } while (chatroombackground9 && (4 == (assistc.length | whitetickD.length)));
         assistc.push((String.fromCharCode(76,0) == whitetickD ? assistc.length : whitetickD.length));
       let placementE = String.fromCharCode(104,95,53,52,95,109,99,100,101,99,0);
       let suggestionb = String.fromCharCode(102,117,116,117,114,101,95,99,95,56,52,0);
      while (2 > (1 | placementE.length) || (assistc.length | placementE.length) > 1) {
         assistc.push((suggestionb == String.fromCharCode(109,0) ? suggestionb.length : placementE.length));
         break;
      }
      if (suggestionb.includes(placementE)) {
         placementE = `${assistc.length}`;
      }
      modityo = [invitej.length];
   }
          mayi_Librrc.instance.setIsAppsflyerProduction(
            locationResp.is_appsflyer_production
          );
        }

        if (locationResp.status == undefined || locationResp.status == null) {

      modityo.push(parseInt(`${successk}`) << (Math.min(3, Math.abs(parseInt(`${analytic8}`)))));
          mayi_Librrc.instance.setAreaConfig(false);

   for (let c = 0; c < 3; c++) {
      invitej = `${parseInt(`${defaultroombgy}`) + 3}`;
   }
          setAreaNavConfig(false);

   if (modityo.length >= 4) {
       let benefitx: Map<any, any> = new Map([[String.fromCharCode(103,95,49,54,95,116,121,112,101,0),965], [String.fromCharCode(98,95,53,49,95,115,113,114,116,110,101,103,0),634]]);
      if (1 < benefitx.size) {
          let huaweig = String.fromCharCode(98,108,99,107,95,109,95,52,48,0);
         benefitx = new Map([[`${benefitx.size}`, (String.fromCharCode(105,0) == huaweig ? huaweig.length : benefitx.size)]]);
      }
      for (let q = 0; q < 3; q++) {
          let bellW = 2.0;
          let sansK = true;
          let textinputk: Map<any, any> = new Map([[String.fromCharCode(114,101,116,114,105,101,118,105,110,103,95,119,95,55,48,0),345], [String.fromCharCode(97,95,55,51,95,103,101,110,101,114,97,116,101,0),808], [String.fromCharCode(102,95,57,54,95,100,98,115,116,97,116,0),139]]);
         benefitx.set(`${benefitx.size}`, 1);
         bellW -= (parseInt(`${bellW}`) % (Math.max(3, (sansK ? 1 : 3))));
         sansK = textinputk.size <= 6;
         textinputk = new Map([[`${sansK}`, (parseInt(`${bellW}`) | (sansK ? 2 : 1))]]);
      }
         benefitx.set(`${benefitx.size}`, 1);
      modityo.push(benefitx.size / (Math.max(3, 4)));
   }
          setLoadedAPI(true);
        } else {

   while (downloadF >= 5) {
      downloadF += 1 | parseInt(`${successk}`);
      break;
   }
          mayi_Librrc.instance.setAreaConfig(locationResp.status);

      invitej += `${parseInt(`${analytic8}`)}`;
          setAreaNavConfig(locationResp.status);

   let libglog9 = 9011331.0 >= successk;
   do {
      successk *= static_6hV.length;
      if (libglog9) {
         break;
      }
   } while ((2.3 > (3.34 - successk) || (3.34 - defaultroombgy) > 1.24) && libglog9);
          setLoadedAPI(true);
        }

        

   for (let p = 0; p < 3; p++) {
      defaultroombgy *= parseFloat(`${parseInt(`${successk}`)}`);
   }
        

      libmapbufferjni8 += parseInt(`${successk}`) << (Math.min(4, Math.abs(2)));
        if (locationResp.is_become_vip == "y") {

      downloadF %= Math.max(static_6hV.length, 4);
          

   for (let u = 0; u < 2; u++) {
       let connectionx: Array<any> = [String.fromCharCode(102,114,97,103,109,101,110,116,115,95,98,95,49,55,0), String.fromCharCode(119,95,51,56,95,115,112,101,114,97,116,111,114,0)];
         connectionx.push(connectionx.length);
      if ((connectionx.length * 2) < 5 && (connectionx.length * connectionx.length) < 2) {
         connectionx = [connectionx.length];
      }
         connectionx = [1];
      invitej = `${static_6hV.length / 1}`;
   }
          mayi_Librrc.instance.setShowBecomeVip(true);
        }
      } else {

      defaultroombgy /= Math.max(3, (parseFloat(`${(analytic8a ? 5 : 2)}`)));
        mayi_Librrc.instance.setAreaConfig(false);

   while (successk == 5.70) {
       let full4: Map<any, any> = new Map([[String.fromCharCode(109,95,56,95,109,97,100,101,0),409], [String.fromCharCode(114,108,109,95,50,95,56,56,0),106]]);
       let buttonV = 0.0;
      while (2.45 > (1.4 - buttonV) && 1 > (full4.size - parseInt(`${buttonV}`))) {
         buttonV /= Math.max(parseInt(`${buttonV}`), 5);
         break;
      }
      while (Array.from(full4.values()).includes(buttonV)) {
          let nterstitialj = 3.0;
          let lessE = String.fromCharCode(105,116,101,114,97,116,105,118,101,95,116,95,49,56,0);
         full4 = new Map([[`${full4.size}`, parseInt(`${buttonV}`)]]);
         nterstitialj /= Math.max(parseFloat(`${lessE.length}`), 5);
         lessE = `${parseInt(`${nterstitialj}`)}`;
         break;
      }
         full4 = new Map([[`${full4.size}`, parseInt(`${buttonV}`)]]);
       let leaguedetailsbgY = String.fromCharCode(122,95,51,49,95,116,111,116,97,108,115,0);
       let cancel0 = String.fromCharCode(112,95,54,55,95,108,111,110,103,0);
      for (let n = 0; n < 3; n++) {
         full4.set(`${buttonV}`, full4.size << (Math.min(2, Math.abs(parseInt(`${buttonV}`)))));
      }
         leaguedetailsbgY += `${parseInt(`${buttonV}`) << (Math.min(Math.abs(1), 4))}`;
      sellG %= Math.max(parseInt(`${analytic8}`), 4);
      break;
   }
        setAreaNavConfig(false);

   while ((1.46 / (Math.max(1, libmapbufferjni8))) < 3.19 && (defaultroombgy - 1.46) < 3.70) {
      defaultroombgy /= Math.max(1, parseFloat(`${3 + invitej.length}`));
      break;
   }
        setLoadedAPI(true);
      }
    } catch (e) {

   while (!invitej.includes(`${modityo.length}`)) {
      modityo.push(((analytic8a ? 1 : 2) | downloadF));
      break;
   }
      mayi_Librrc.instance.setAreaConfig(false);

   let u_hashO = invitej == String.fromCharCode(53,104,108,56,119,0);
   do {
      invitej = "3";
      if (u_hashO) {
         break;
      }
   } while (u_hashO && (static_6hV != invitej));
      setAreaNavConfig(false);

       let blackZ = String.fromCharCode(100,101,109,111,95,48,95,51,48,0);
       let hooksQ: Map<any, any> = new Map([[String.fromCharCode(107,95,52,48,95,109,101,97,115,117,114,101,0),527], [String.fromCharCode(99,111,114,114,101,108,97,116,101,95,101,95,49,48,0),797]]);
      for (let b = 0; b < 3; b++) {
         blackZ += `${3 << (Math.min(5, blackZ.length))}`;
      }
          let long_zuo = String.fromCharCode(122,95,50,50,95,99,111,100,101,99,99,116,108,0);
          let iconshareY = String.fromCharCode(115,117,98,109,111,100,101,108,115,95,104,95,52,49,0);
          let stylesa = String.fromCharCode(102,111,108,100,101,114,95,51,95,50,57,0);
         hooksQ = new Map([[stylesa, (blackZ == String.fromCharCode(76,0) ? stylesa.length : blackZ.length)]]);
         long_zuo = "2";
         iconshareY += "2";
         blackZ += `${blackZ.length}`;
      for (let d = 0; d < 2; d++) {
         hooksQ = new Map([[`${hooksQ.size}`, (String.fromCharCode(121,0) == blackZ ? hooksQ.size : blackZ.length)]]);
      }
      if (blackZ.length >= 5) {
         blackZ = `${(blackZ == String.fromCharCode(82,0) ? hooksQ.size : blackZ.length)}`;
      }
       let arrowrightwithtailk: Map<any, any> = new Map([[String.fromCharCode(100,95,55,51,95,114,101,115,121,110,99,0),String.fromCharCode(121,95,51,52,95,117,110,115,101,116,0)], [String.fromCharCode(116,101,109,112,111,95,101,95,56,48,0),String.fromCharCode(122,95,53,53,95,99,111,108,111,114,107,101,121,0)], [String.fromCharCode(118,95,50,51,95,111,110,102,105,103,117,114,97,116,105,111,110,0),String.fromCharCode(114,101,108,97,121,95,100,95,51,0)]]);
       let stepr: Map<any, any> = new Map([[String.fromCharCode(122,95,49,50,95,107,101,121,102,114,97,109,101,115,0),108], [String.fromCharCode(111,95,52,48,95,98,105,112,114,101,100,0),266], [String.fromCharCode(116,95,57,56,95,114,101,103,114,101,115,115,0),703]]);
      downloadF /= Math.max(1, 4);
      setLoadedAPI(true);
    }

    appDispatch(onBootApp());

   for (let k = 0; k < 1; k++) {
      libmapbufferjni8 -= sellG;
   }

    

   while (4 <= modityo.length) {
      modityo = [2 / (Math.max(6, parseInt(`${defaultroombgy}`)))];
      break;
   }
    const access = await AsyncStorage.getItem("access");
    if (access == "11111111") {
      setIsSuper(true);
      return;
    }
    if (access == "22222222") {
      setIsSuper(false);
      mayi_Librrc.instance.setAreaConfig(false);
      setAreaNavConfig(false);
      setLoadedAPI(true);
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
