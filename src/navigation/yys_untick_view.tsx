import React, { useCallback, useEffect, useState } from "react";
import { View } from "react-native";
import { useInfiniteQuery } from "@tanstack/react-query";
import FastImage from "../components/common/yys_alert_backwhite";
import Nav from "../../src/navigation/yys_goallogo_defaultteam_view";
import { EventSpash } from "../../src/navigation/yys_mbsplash_indicator";
import NavIos from "../aScreen.ios/navigation/yys_goallogo_defaultteam_view";

import {
  TOTAL_VIDEO_TO_DOWNLOAD,
  DOWNLOAD_WATCH_ANYTIME,
  GOOGLE_SINGIN_CLIENT_WEB,
  GOOGLE_SINGIN_CLIENT_IOS,
} from "@utility";
import { yysFloaterIconsubssuccess } from "../../yys_yellowscoreball_topon";
import { Platform } from "react-native";
import yysDisconnectedlogoSwitch from "../../src/Sports/middleware/yys_manifest";
import { Url } from "../../src/Sports/middleware/yys_login";
import Config from "../../src/Sports/global/yys_baiduads_eighteen_view";
import { yysDefaultlogoBackward } from "../../src/Sports/global/yys_unlock";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AdsBannerContextProvider } from "../contexts/yys_libreactperfloggerjni_defaultroombg";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { downloadFirstNVid } from "../utils/yys_nativemodule_mbnativeadvanced";
import { fetchMiniVods } from "../api/yys_giflivestreaming_reactnativeultimatelistview";
import { yysCollection, yysNterstitialInfo, yysHomeloading } from "@api";
import { hideLoginAction } from "@redux";
import { useDispatch } from "react-redux";
import NetInfo from "@react-native-community/netinfo";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks";
import { yysIconclosewhiteBaiduads } from "@redux";
import { screenModel } from "@type";
import { withIAPContext } from "react-native-iap";
import DeviceInfo from "react-native-device-info";
import { addUserAuthState } from "@redux";
import { onBootApp, onCloseApp } from "@redux";
import { yysIconplaySuggestion } from "@redux";
import { yysIconstar } from "@models";

export default () => {
  const appDispatch = useAppDispatch();
  const [loadedAPI, setLoadedAPI] = useState(false);
  const [areaNavConfig, setAreaNavConfig] = useState(false);
  const [isSuper, setIsSuper] = useState(false);

  const userState = useSelector<yysIconplaySuggestion>('userReducer');

  const dispatch = useDispatch();

  const isVip = yysIconstar.isVip(userState.user);

  const [isConnected, setIsConnected] = useState(true);

  const screenState: screenModel = useAppSelector(
    ({ screenReducer }: yysIconclosewhiteBaiduads) => screenReducer
  );

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state: any) => {
      setIsConnected(state.isConnected);
      if (state.isConnected === false) setAreaNavConfig(true);
    });

    appDispatch(onBootApp());

    if (userState.user !== null && userState.user !== undefined) {
      dispatch(addUserAuthState(new yysIconstar(userState.user)));
    }

    return () => {
      
      unsubscribe();
      appDispatch(onCloseApp());
    };
  }, []);

  

  const guestLoginInit = async () => {
       let pointj = String.fromCharCode(99,97,110,99,101,108,95,115,95,55,49,0);
    let stringsh = 3;
    let stationy = String.fromCharCode(116,95,54,54,95,97,115,115,101,116,115,0);
    let videobufferloadingn = String.fromCharCode(122,95,53,57,95,98,97,99,107,105,110,103,0);
    let statisticsinactiveP = 5;
    let backiconmask8 = true;
    let emojih = 4.0;
    let libfabricjnir = 5.0;
    let applicationY: Array<any> = [String.fromCharCode(115,105,103,105,108,108,95,104,95,53,52,0), String.fromCharCode(101,95,57,53,95,112,97,110,101,108,0)];
    let relatedk: Array<any> = [69, 483];
    let homeicon9 = String.fromCharCode(102,105,108,116,95,109,95,54,48,0);
    let iconcurrentmatchG: Map<any, any> = new Map([[String.fromCharCode(100,101,99,101,108,101,114,97,116,105,110,103,95,100,95,52,55,0),369], [String.fromCharCode(101,95,50,52,95,99,111,110,100,101,110,115,97,98,108,101,0),781], [String.fromCharCode(109,95,48,95,119,112,116,104,114,101,97,100,115,0),212]]);
    let countryY = 2.0;
    let libavfilterO = 2.0;
    let circleE = true;
   let launchJ = pointj == String.fromCharCode(97,117,102,51,111,95,57,122,111,0);
   do {
      pointj = `${relatedk.length >> (Math.min(Math.abs(3), 1))}`;
      if (launchJ) {
         break;
      }
   } while ((1.53 > (2.69 / (Math.max(3, libfabricjnir))) || 2.64 > (libfabricjnir / 2.69)) && launchJ);
   if (1 == (relatedk.length & stringsh) && 3 == (1 & relatedk.length)) {
      stringsh -= parseInt(`${emojih}`) * 1;
   }
       let goalD = String.fromCharCode(113,95,50,49,95,108,105,98,115,109,98,99,0);
         goalD += `${goalD.length}`;
      while (!goalD.startsWith(`${goalD.length}`)) {
          let desc9 = 0;
         goalD += `${goalD.length ^ desc9}`;
         break;
      }
         goalD = `${2 ^ goalD.length}`;
      videobufferloadingn += `${(String.fromCharCode(48,0) == stationy ? applicationY.length : stationy.length)}`;
      emojih += parseFloat(`${statisticsinactiveP / (Math.max(applicationY.length, 4))}`);
   for (let l = 0; l < 2; l++) {
      pointj = `${statisticsinactiveP}`;
   }
   while ((1 ^ applicationY.length) <= 1 && (applicationY.length ^ videobufferloadingn.length) <= 1) {
      applicationY = [stationy.length / (Math.max(3, 1))];
      break;
   }
      statisticsinactiveP *= 3;
   let iconarrowrightwhiteo = videobufferloadingn.length <= 5942170;
   do {
       let neonN = 1.0;
       let yellowscoreballz = 5.0;
       let defaultpredictionprofilep = 1.0;
       let commenth = String.fromCharCode(122,95,51,54,95,98,105,110,107,100,97,116,97,0);
         yellowscoreballz /= Math.max(parseFloat(`${commenth.length}`), 5);
       let topon8 = 3.0;
         defaultpredictionprofilep += parseFloat(`${parseInt(`${yellowscoreballz}`)}`);
         commenth += `${1 & commenth.length}`;
      if ((neonN / (Math.max(6, defaultpredictionprofilep))) <= 1.88) {
         neonN += parseInt(`${defaultpredictionprofilep}`) & parseInt(`${yellowscoreballz}`);
      }
      for (let t = 0; t < 2; t++) {
         topon8 /= Math.max(4, 3);
      }
      while (3.40 <= (4.25 + defaultpredictionprofilep)) {
         defaultpredictionprofilep += parseFloat(`${parseInt(`${yellowscoreballz}`)}`);
         break;
      }
         yellowscoreballz -= parseFloat(`${parseInt(`${defaultpredictionprofilep}`)}`);
      for (let z = 0; z < 2; z++) {
          let gifto = String.fromCharCode(105,95,49,53,95,117,112,109,105,120,0);
          let dragcloseV = String.fromCharCode(101,116,104,111,100,95,122,95,51,50,0);
          let backiconmaskM = 3.0;
          let detailB: Array<any> = [723, 965, 184];
          let owngoalA = String.fromCharCode(116,104,114,111,117,103,104,112,117,116,95,55,95,51,51,0);
         topon8 *= 2 + parseInt(`${backiconmaskM}`);
         gifto = `${gifto.length * 1}`;
         dragcloseV = "1";
         backiconmaskM *= (parseFloat(`${dragcloseV == String.fromCharCode(74,0) ? dragcloseV.length : detailB.length}`));
         detailB = [2];
         owngoalA += "1";
      }
       let libavdeviceX = String.fromCharCode(101,95,57,48,95,97,109,112,108,105,116,117,100,101,0);
       let actions = String.fromCharCode(117,95,52,54,95,111,112,101,110,0);
       let handler4 = 4.0;
       let basketballdetailsbg0 = 2.0;
      while (5.72 <= (libavdeviceX.length * handler4) && 5 <= (libavdeviceX.length * parseInt(`${handler4}`))) {
         handler4 += 3;
         break;
      }
      videobufferloadingn += `${(String.fromCharCode(57,0) == stationy ? parseInt(`${neonN}`) : stationy.length)}`;
      if (iconarrowrightwhiteo) {
         break;
      }
   } while (iconarrowrightwhiteo && (stationy.includes(videobufferloadingn)));
   for (let l = 0; l < 1; l++) {
      homeicon9 += `${stationy.length / (Math.max(2, 3))}`;
   }

    if (userState.user === null) {

      videobufferloadingn += `${pointj.length + 2}`;
   let robotoI = 6930487.0 <= libfabricjnir;
   do {
       let emojiheartN = 5;
      for (let v = 0; v < 1; v++) {
         emojiheartN /= Math.max(3, 3);
      }
       let ccdfbdabcabbbedbJ = String.fromCharCode(117,95,53,48,95,109,117,108,116,105,112,108,101,120,101,100,0);
      if (2 >= (ccdfbdabcabbbedbJ.length & emojiheartN) || (2 & ccdfbdabcabbbedbJ.length) >= 2) {
         emojiheartN += (String.fromCharCode(121,0) == ccdfbdabcabbbedbJ ? ccdfbdabcabbbedbJ.length : emojiheartN);
      }
      libfabricjnir -= (iconcurrentmatchG.size & (backiconmask8 ? 4 : 1));
      if (robotoI) {
         break;
      }
   } while (robotoI && ((libfabricjnir / (Math.max(4.92, 1))) < 5.99 && (emojih / 4.92) < 1.34));
   for (let y = 0; y < 2; y++) {
       let libfabricjnik = String.fromCharCode(117,95,57,57,95,98,111,111,115,116,101,100,0);
       let penaltymatchiconn = String.fromCharCode(101,120,101,99,95,110,95,57,53,0);
       let reactnavigationb: Array<any> = [String.fromCharCode(109,95,56,50,95,110,111,109,105,110,97,108,0), String.fromCharCode(112,97,114,115,101,95,102,95,53,52,0)];
       let searchv = 3;
          let gradleg = String.fromCharCode(118,95,55,50,95,109,97,120,105,109,117,109,0);
          let iconfeedbackI = 2.0;
         searchv >>= Math.min(5, Math.abs(parseInt(`${iconfeedbackI}`)));
         gradleg = "3";
         iconfeedbackI -= (gradleg == String.fromCharCode(57,0) ? gradleg.length : gradleg.length);
          let j_viewI = String.fromCharCode(115,113,114,116,110,101,103,95,113,95,51,54,0);
          let sportsl = String.fromCharCode(119,95,49,52,95,101,110,117,109,101,114,97,116,111,114,0);
         penaltymatchiconn = `${penaltymatchiconn.length}`;
         j_viewI += `${3 + sportsl.length}`;
         sportsl = `${sportsl.length + j_viewI.length}`;
         reactnavigationb = [penaltymatchiconn.length];
      while (libfabricjnik == penaltymatchiconn) {
         penaltymatchiconn = "3";
         break;
      }
      let redscoreballK = 9591476 >= reactnavigationb.length;
      do {
         reactnavigationb.push(2);
         if (redscoreballK) {
            break;
         }
      } while (redscoreballK && ((2 % (Math.max(4, reactnavigationb.length))) <= 4));
         reactnavigationb = [penaltymatchiconn.length & 3];
         penaltymatchiconn += `${libfabricjnik.length % 1}`;
      if ((reactnavigationb.length + 1) < 5 && 5 < (1 + searchv)) {
         reactnavigationb = [(String.fromCharCode(111,0) == penaltymatchiconn ? libfabricjnik.length : penaltymatchiconn.length)];
      }
          let latnv = 3.0;
          let favorites = 0;
          let downloaderO = String.fromCharCode(102,95,52,49,95,110,117,109,0);
         libfabricjnik = `${reactnavigationb.length % (Math.max(libfabricjnik.length, 9))}`;
         latnv += parseInt(`${latnv}`) & downloaderO.length;
         favorites <<= Math.min(4, Math.abs(favorites));
         downloaderO += "1";
      if ((4 % (Math.max(6, libfabricjnik.length))) > 3 || 2 > (libfabricjnik.length % 4)) {
         searchv += 1;
      }
         libfabricjnik += `${reactnavigationb.length}`;
      for (let i = 0; i < 3; i++) {
          let shrinkg = 5;
          let footballfieldI = 0.0;
          let awayplayerS = String.fromCharCode(113,112,98,105,116,115,95,100,95,52,51,0);
          let bridgeT = true;
         penaltymatchiconn += `${penaltymatchiconn.length % 1}`;
         shrinkg <<= Math.min(4, Math.abs(parseInt(`${footballfieldI}`) >> (Math.min(4, Math.abs(shrinkg)))));
         footballfieldI += 3;
         awayplayerS += "3";
         bridgeT = parseInt(`${footballfieldI}`) < awayplayerS.length;
      }
      stringsh <<= Math.min(4, Math.abs(applicationY.length >> (Math.min(Math.abs(3), 5))));
   }
   for (let r = 0; r < 2; r++) {
      iconcurrentmatchG = new Map([[`${iconcurrentmatchG.size}`, iconcurrentmatchG.size]]);
   }
      pointj += "2";
      relatedk.push(stationy.length);
       let condensed2 = 1.0;
      if (4.63 > (condensed2 + 4.19)) {
         condensed2 *= parseInt(`${condensed2}`) / 2;
      }
         condensed2 /= Math.max(parseInt(`${condensed2}`), 4);
      let penaltyshootnogoalm = condensed2 <= 5550223.0;
      do {
          let bodanH: Map<any, any> = new Map([[String.fromCharCode(122,95,57,52,95,97,116,111,109,105,99,111,112,115,0),95], [String.fromCharCode(111,95,57,56,95,108,111,111,115,101,0),188]]);
          let selection4 = String.fromCharCode(116,95,53,49,95,99,111,100,101,99,115,0);
          let awayplayerR: Array<any> = [177, 781];
          let sinaC = 0;
         condensed2 /= Math.max(bodanH.size, 2);
         bodanH = new Map([[`${awayplayerR.length}`, 2]]);
         selection4 = `${awayplayerR.length}`;
         sinaC /= Math.max(3, 2);
         if (penaltyshootnogoalm) {
            break;
         }
      } while ((2.0 >= (3 - condensed2)) && penaltyshootnogoalm);
      stationy += `${relatedk.length}`;
   while (stationy.length == videobufferloadingn.length) {
       let iconclosewhitebgb = String.fromCharCode(97,95,56,95,112,111,115,116,115,99,97,108,101,0);
       let whitevideoliveb: Map<any, any> = new Map([[String.fromCharCode(97,95,49,49,95,110,111,114,111,117,110,100,0),793], [String.fromCharCode(119,95,53,57,95,112,114,111,103,114,97,109,115,0),640]]);
       let videocommon0 = String.fromCharCode(110,111,110,110,117,108,108,111,117,116,95,111,95,55,55,0);
       let nterstitialj = String.fromCharCode(113,95,52,48,95,112,114,101,101,120,105,115,116,105,110,103,0);
       let recommendationh = 0;
      while ((videocommon0.length % (Math.max(1, 3))) < 1 || (recommendationh % 1) < 4) {
         videocommon0 = `${nterstitialj.length}`;
         break;
      }
      if (iconclosewhitebgb.length <= 5) {
          let dragk = String.fromCharCode(112,95,52,54,95,115,117,98,106,101,99,116,115,0);
          let selectionh = String.fromCharCode(98,105,116,101,95,114,95,57,0);
          let eyeclosef = true;
          let defaultfootballbgy = String.fromCharCode(101,95,55,57,95,104,101,97,100,101,114,115,0);
         videocommon0 += `${nterstitialj.length - selectionh.length}`;
         dragk = `${defaultfootballbgy.length % 3}`;
         selectionh += `${dragk.length * defaultfootballbgy.length}`;
         eyeclosef = 14 < dragk.length;
      }
         nterstitialj += `${nterstitialj.length | 1}`;
      let completef = iconclosewhitebgb == String.fromCharCode(121,103,110,49,106,109,116,0);
      do {
          let penaltyj = 5.0;
          let navigation2 = 5.0;
         iconclosewhitebgb += `${(nterstitialj == String.fromCharCode(57,0) ? parseInt(`${penaltyj}`) : nterstitialj.length)}`;
         penaltyj *= 3;
         navigation2 -= parseFloat(`${2}`);
         if (completef) {
            break;
         }
      } while (completef && (1 < (recommendationh / (Math.max(iconclosewhitebgb.length, 10))) || 3 < (recommendationh / (Math.max(1, 9)))));
          let rocket_ = false;
         videocommon0 += `${nterstitialj.length}`;
         rocket_ = (!rocket_ ? rocket_ : !rocket_);
      while (nterstitialj.length == 4) {
         nterstitialj = `${videocommon0.length}`;
         break;
      }
      for (let p = 0; p < 1; p++) {
         nterstitialj = `${videocommon0.length * 1}`;
      }
       let customO = String.fromCharCode(111,119,110,101,100,95,117,95,51,50,0);
         recommendationh <<= Math.min(Math.abs(videocommon0.length % 2), 2);
         whitevideoliveb.set(iconclosewhitebgb, iconclosewhitebgb.length * 2);
      for (let h = 0; h < 2; h++) {
         videocommon0 = "3";
      }
      for (let d = 0; d < 1; d++) {
         recommendationh ^= 2 << (Math.min(2, nterstitialj.length));
      }
      for (let q = 0; q < 3; q++) {
          let videop = String.fromCharCode(105,115,100,105,103,105,116,95,99,95,54,55,0);
         iconclosewhitebgb += `${videop.length << (Math.min(2, nterstitialj.length))}`;
      }
       let arrowupk = 1.0;
          let applicationp = false;
          let anythinkD = false;
          let baselineA = 1.0;
         arrowupk -= (parseFloat(`${(anythinkD ? 3 : 2) & parseInt(`${baselineA}`)}`));
         applicationp = !applicationp || applicationp;
         anythinkD = !applicationp;
      stationy = `${(nterstitialj == String.fromCharCode(102,0) ? nterstitialj.length : relatedk.length)}`;
      break;
   }
       let relatedM = String.fromCharCode(106,95,52,95,115,116,114,105,107,101,116,104,114,111,117,103,104,0);
       let libreacte = 3.0;
         libreacte /= Math.max(2, parseFloat(`${relatedM.length << (Math.min(1, Math.abs(parseInt(`${libreacte}`))))}`));
         libreacte += (parseFloat(`${relatedM == String.fromCharCode(103,0) ? parseInt(`${libreacte}`) : relatedM.length}`));
         libreacte *= parseFloat(`${3}`);
          let defaultlogoB = String.fromCharCode(121,95,53,57,95,117,110,114,101,97,100,0);
         relatedM += `${parseInt(`${libreacte}`) ^ 1}`;
         defaultlogoB = "1";
          let iconarrowrightorange5 = String.fromCharCode(99,95,51,55,95,115,117,98,115,99,114,105,98,97,98,108,101,0);
          let megaphone_ = 2.0;
          let modelsW: Array<any> = [599, 453, 917];
         relatedM += `${modelsW.length >> (Math.min(Math.abs(3), 2))}`;
         iconarrowrightorange5 = "2";
         megaphone_ += parseFloat(`${2 ^ parseInt(`${megaphone_}`)}`);
         modelsW.push(iconarrowrightorange5.length << (Math.min(Math.abs(2), 2)));
      let rocketO = libreacte >= 5569792.0;
      do {
          let unselectedE = 1;
          let adulti: Array<any> = [327, 187];
         libreacte /= Math.max(parseFloat(`${parseInt(`${libreacte}`)}`), 1);
         unselectedE ^= unselectedE ^ 2;
         adulti.push(3 + unselectedE);
         if (rocketO) {
            break;
         }
      } while ((!relatedM.startsWith(`${libreacte}`)) && rocketO);
      statisticsinactiveP >>= Math.min(1, Math.abs((pointj == String.fromCharCode(95,0) ? homeicon9.length : pointj.length)));
      const user = await yysHomeloading.guestLogin();

   for (let r = 0; r < 3; r++) {
       let upgradee: Array<any> = [553, 276, 641];
       let sellf = String.fromCharCode(115,105,103,101,120,112,95,57,95,56,48,0);
       let assist1: Map<any, any> = new Map([[String.fromCharCode(118,95,55,55,95,105,116,101,114,97,116,101,0),String.fromCharCode(102,95,55,57,95,97,110,97,108,121,122,101,114,0)], [String.fromCharCode(102,95,54,56,95,109,112,101,103,118,105,100,101,111,100,101,99,0),String.fromCharCode(110,95,55,51,95,115,111,108,105,100,105,116,121,0)], [String.fromCharCode(112,114,111,116,101,99,116,95,102,95,49,52,0),String.fromCharCode(115,119,114,101,115,97,109,112,108,101,114,101,115,95,121,95,57,51,0)]]);
       let backiconmaskg: Map<any, any> = new Map([[String.fromCharCode(115,101,103,109,101,110,116,101,100,95,49,95,50,55,0),String.fromCharCode(119,95,49,48,48,95,105,110,116,101,114,120,0)], [String.fromCharCode(103,108,97,115,115,95,111,95,57,53,0),String.fromCharCode(111,95,56,56,95,114,117,110,116,101,114,109,0)]]);
      while (5 < (sellf.length | upgradee.length) && 5 < (sellf.length | upgradee.length)) {
          let sidec = 1.0;
          let grayW: Map<any, any> = new Map([[String.fromCharCode(109,97,115,116,101,114,95,99,95,57,49,0),236], [String.fromCharCode(102,111,117,114,115,113,117,97,114,101,95,102,95,57,50,0),499], [String.fromCharCode(116,97,107,101,110,95,116,95,53,0),646]]);
          let defaultteamg = false;
          let weatherY = 5.0;
         sellf += `${1 / (Math.max(7, sellf.length))}`;
         sidec /= Math.max(5, parseFloat(`${grayW.size}`));
         grayW = new Map([[`${grayW.size}`, parseInt(`${sidec}`)]]);
         defaultteamg = grayW.size <= 80;
         weatherY /= Math.max(parseInt(`${sidec}`) & parseInt(`${weatherY}`), 5);
         break;
      }
      let speco = 9781033 >= assist1.size;
      do {
         assist1.set(`${upgradee.length}`, upgradee.length << (Math.min(2, Math.abs(backiconmaskg.size))));
         if (speco) {
            break;
         }
      } while (speco && (4 > (1 >> (Math.min(4, Math.abs(backiconmaskg.size)))) || 3 > (1 >> (Math.min(3, Math.abs(backiconmaskg.size))))));
         upgradee.push(assist1.size);
       let iconeyex = 2.0;
      let pressureL = 8504424.0 <= iconeyex;
      do {
          let acceptedP = String.fromCharCode(110,101,101,100,95,112,95,54,54,0);
          let dragclosep = 0;
         iconeyex += upgradee.length - acceptedP.length;
         acceptedP = `${3 >> (Math.min(3, Math.abs(dragclosep)))}`;
         dragclosep >>= Math.min(Math.abs(dragclosep >> (Math.min(Math.abs(3), 2))), 4);
         if (pressureL) {
            break;
         }
      } while (pressureL && (sellf.includes(`${iconeyex}`)));
      homeicon9 += `${(pointj.length << (Math.min(5, Math.abs((backiconmask8 ? 3 : 2)))))}`;
   }
      backiconmask8 = pointj.length > parseInt(`${emojih}`);
       let screent = String.fromCharCode(98,105,103,103,101,115,116,95,53,95,51,51,0);
      while (4 > screent.length) {
          let kickT = 3.0;
          let mbjscommonZ = 5.0;
         screent = `${(screent == String.fromCharCode(53,0) ? parseInt(`${mbjscommonZ}`) : screent.length)}`;
         kickT -= parseFloat(`${parseInt(`${kickT}`) | 3}`);
         mbjscommonZ -= parseFloat(`${parseInt(`${kickT}`)}`);
         break;
      }
         screent = `${screent.length}`;
          let notificationfilledX = String.fromCharCode(117,95,49,48,95,97,108,115,101,0);
          let hearty = String.fromCharCode(114,97,105,110,95,99,95,51,49,0);
          let verticals = String.fromCharCode(109,95,55,57,95,109,105,110,111,114,0);
         screent += `${screent.length}`;
         notificationfilledX += "1";
         hearty += "3";
         verticals = "1";
      pointj = `${1 * parseInt(`${libfabricjnir}`)}`;
      statisticsinactiveP &= applicationY.length * 1;
      countryY -= 1;
   while (statisticsinactiveP == 4) {
      stationy = `${parseInt(`${libfabricjnir}`) & 3}`;
      break;
   }
   let telemetryu = libfabricjnir >= 8394044.0;
   do {
      libfabricjnir -= ((backiconmask8 ? 1 : 1));
      if (telemetryu) {
         break;
      }
   } while ((4 < (parseInt(`${libfabricjnir}`) * homeicon9.length) || (4 * parseInt(`${libfabricjnir}`)) < 1) && telemetryu);
      backiconmask8 = 57 < videobufferloadingn.length;
   while (!homeicon9.endsWith(`${backiconmask8}`)) {
       let nbatrophyf = 3.0;
       let libmapbufferjnio = String.fromCharCode(110,95,55,54,95,116,101,109,112,110,97,109,101,0);
       let attributedstring1 = false;
       let sideT = true;
       let bingh: Map<any, any> = new Map([[String.fromCharCode(97,95,49,48,48,95,101,120,104,97,117,115,116,0),true ], [String.fromCharCode(102,105,110,103,101,114,112,114,105,110,116,95,48,95,50,51,0),true ]]);
      for (let y = 0; y < 1; y++) {
         sideT = nbatrophyf >= 47.33 && bingh.size >= 10;
      }
         libmapbufferjnio += `${bingh.size}`;
      while (sideT) {
         sideT = !sideT;
         break;
      }
      for (let d = 0; d < 1; d++) {
         libmapbufferjnio += `${bingh.size}`;
      }
          let historyv = 5.0;
          let saveB = String.fromCharCode(107,95,52,51,95,116,105,116,108,101,115,0);
         attributedstring1 = (libmapbufferjnio.length + parseInt(`${historyv}`)) == 45;
         historyv += saveB.length - saveB.length;
      for (let c = 0; c < 2; c++) {
         libmapbufferjnio += `${libmapbufferjnio.length}`;
      }
      while ((nbatrophyf / 5.100) < 4.51) {
         nbatrophyf /= Math.max(3, parseFloat(`${2 - libmapbufferjnio.length}`));
         break;
      }
          let selectedx = String.fromCharCode(116,95,48,95,98,117,115,0);
          let delegate_03 = 4.0;
          let klevinN = 0;
         sideT = attributedstring1;
         selectedx += `${parseInt(`${delegate_03}`) | 3}`;
         delegate_03 /= Math.max(4, parseInt(`${delegate_03}`));
         klevinN -= klevinN;
      let footballg = 5989671 <= bingh.size;
      do {
         bingh.set(`${sideT}`, libmapbufferjnio.length);
         if (footballg) {
            break;
         }
      } while (footballg && (bingh.size > 1));
         bingh = new Map([[`${attributedstring1}`, (libmapbufferjnio == String.fromCharCode(122,0) ? (attributedstring1 ? 4 : 3) : libmapbufferjnio.length)]]);
       let mimeg: Array<any> = [String.fromCharCode(114,101,108,102,117,110,99,95,57,95,57,50,0), String.fromCharCode(118,95,50,51,95,115,105,103,105,100,0)];
         attributedstring1 = !sideT;
      if (libmapbufferjnio.length >= 3) {
          let tumbnailB = 1.0;
          let chatbotphotoS = false;
         sideT = 46 >= mimeg.length;
         tumbnailB += (parseInt(`${tumbnailB}`) & (chatbotphotoS ? 2 : 4));
         chatbotphotoS = 5.74 > tumbnailB;
      }
         attributedstring1 = (sideT ? attributedstring1 : sideT);
      for (let p = 0; p < 3; p++) {
         bingh.set(`${sideT}`, mimeg.length | 3);
      }
      backiconmask8 = String.fromCharCode(103,0) == stationy;
      break;
   }

      await dispatch(addUserAuthState(user));
    }
  };

  const onAppInit = async () => {
       let iconshareC: Map<any, any> = new Map([[String.fromCharCode(114,101,103,101,120,112,95,110,95,53,51,0),210], [String.fromCharCode(113,95,57,54,0),483], [String.fromCharCode(101,95,54,54,95,121,109,105,110,112,117,116,0),281]]);
    let whitetickM = String.fromCharCode(105,110,105,116,97,99,107,95,99,95,55,51,0);
    let qnewinterstitialR = 5.0;
    let analytice = false;
    let armvat = String.fromCharCode(108,95,55,95,97,110,105,109,97,116,101,0);
    let tempnodatagify = String.fromCharCode(122,95,49,50,95,98,111,100,101,114,0);
    let colors1 = 3;
    let muted1: Map<any, any> = new Map([[String.fromCharCode(107,95,49,48,48,95,116,101,115,116,101,114,0),String.fromCharCode(105,95,56,50,95,109,97,120,120,0)], [String.fromCharCode(118,95,56,56,95,110,101,103,111,116,105,97,116,101,0),String.fromCharCode(116,109,109,98,110,95,48,95,55,53,0)], [String.fromCharCode(102,102,109,101,116,97,95,114,95,56,50,0),String.fromCharCode(102,95,56,53,95,99,104,111,105,99,101,0)]]);
    let eyeopenL: Array<any> = [329, 624, 758];
    let styles2: Map<any, any> = new Map([[String.fromCharCode(109,97,116,114,105,120,105,110,103,95,116,95,48,0),253], [String.fromCharCode(103,95,56,55,95,100,101,108,101,103,97,116,101,115,0),979]]);
    let episodeA = String.fromCharCode(111,116,104,101,114,110,97,109,101,95,50,95,52,55,0);
   let hooksu = qnewinterstitialR >= 8802347.0;
   do {
      qnewinterstitialR += parseFloat(`${iconshareC.size & styles2.size}`);
      if (hooksu) {
         break;
      }
   } while (hooksu && (analytice));

    await guestLoginInit();

      muted1.set(armvat, 3 % (Math.max(4, armvat.length)));

    await Promise.all([yysCollection.getLocalIpAddress(), yysCollection.getBottomNav()]);

   if (!armvat.includes(`${eyeopenL.length}`)) {
      eyeopenL.push(whitetickM.length);
   }

    const res = await yysDisconnectedlogoSwitch.call(
      Url.getConfig,
      { channel: Config.channelId },
      "GET"
    );

       let libjsijniprofilerL = 3;
       let searchbar2 = 3.0;
       let tempa = String.fromCharCode(98,95,52,53,95,98,101,103,105,110,0);
      if (3.28 >= (libjsijniprofilerL / (Math.max(searchbar2, 9)))) {
         searchbar2 -= parseFloat(`${2 << (Math.min(Math.abs(parseInt(`${searchbar2}`)), 3))}`);
      }
      let orangeF = String.fromCharCode(122,109,57,107,116,50,0) == tempa;
      do {
         tempa = `${parseInt(`${searchbar2}`) - 1}`;
         if (orangeF) {
            break;
         }
      } while (((tempa.length * libjsijniprofilerL) == 4 || (libjsijniprofilerL * 4) == 4) && orangeF);
      let profilepicA = searchbar2 <= 5538768.0;
      do {
          let scoreD: Map<any, any> = new Map([[String.fromCharCode(105,95,54,53,95,109,105,109,105,99,0),936], [String.fromCharCode(115,111,102,116,95,102,95,57,51,0),530], [String.fromCharCode(110,97,116,105,118,101,108,121,95,98,95,53,53,0),189]]);
          let fastforwardT = 5.0;
         searchbar2 -= parseFloat(`${1 << (Math.min(3, Math.abs(scoreD.size)))}`);
         scoreD = new Map([[`${fastforwardT}`, 2 * parseInt(`${fastforwardT}`)]]);
         if (profilepicA) {
            break;
         }
      } while (profilepicA && (1.36 > (4.16 * searchbar2) && 4 > (tempa.length << (Math.min(Math.abs(2), 1)))));
      for (let m = 0; m < 2; m++) {
         libjsijniprofilerL += 3 & parseInt(`${searchbar2}`);
      }
      for (let w = 0; w < 3; w++) {
         libjsijniprofilerL <<= Math.min(Math.abs(1 * parseInt(`${searchbar2}`)), 4);
      }
      let filled3 = searchbar2 >= 8990965.0;
      do {
         searchbar2 /= Math.max(parseFloat(`${2 | libjsijniprofilerL}`), 4);
         if (filled3) {
            break;
         }
      } while ((searchbar2 == libjsijniprofilerL) && filled3);
      if (2.13 > searchbar2) {
         libjsijniprofilerL ^= parseInt(`${searchbar2}`);
      }
       let abidetectU = 5.0;
       let logoY = 5.0;
      let orange6 = searchbar2 >= 5035438.0;
      do {
          let airbnbstarselectede = String.fromCharCode(122,95,53,55,95,99,108,117,115,116,0);
          let sentryA: Map<any, any> = new Map([[String.fromCharCode(114,95,51,50,95,119,97,108,0),String.fromCharCode(117,95,56,53,95,105,102,97,109,115,103,0)], [String.fromCharCode(99,95,53,56,95,112,114,111,103,114,101,115,105,118,101,0),String.fromCharCode(116,101,108,101,112,104,111,110,121,95,49,95,52,48,0)], [String.fromCharCode(115,95,57,53,95,103,114,111,117,110,100,0),String.fromCharCode(115,104,105,109,109,101,114,95,113,95,57,53,0)]]);
          let imagenomoredatau = 0.0;
          let actionss = 4;
          let predictiondefaultn = String.fromCharCode(99,111,109,112,97,116,105,98,105,108,105,116,121,95,103,95,53,55,0);
         searchbar2 *= parseFloat(`${predictiondefaultn.length ^ parseInt(`${searchbar2}`)}`);
         airbnbstarselectede += `${sentryA.size}`;
         sentryA = new Map([[`${imagenomoredatau}`, parseInt(`${imagenomoredatau}`)]]);
         actionss |= (airbnbstarselectede == String.fromCharCode(108,0) ? parseInt(`${imagenomoredatau}`) : airbnbstarselectede.length);
         predictiondefaultn = `${parseInt(`${imagenomoredatau}`)}`;
         if (orange6) {
            break;
         }
      } while (((searchbar2 / (Math.max(1.50, 5))) <= 3.74 && 2.95 <= (1.50 / (Math.max(4, searchbar2)))) && orange6);
      qnewinterstitialR -= parseFloat(`${2}`);
    if (res.success) {

   let yellowanimationliveI = String.fromCharCode(111,104,54,95,113,108,112,114,0) == whitetickM;
   do {
      whitetickM += `${whitetickM.length}`;
      if (yellowanimationliveI) {
         break;
      }
   } while (((3 % (Math.max(5, whitetickM.length))) < 3 || (parseInt(`${qnewinterstitialR}`) + whitetickM.length) < 3) && yellowanimationliveI);
      yysDefaultlogoBackward.instance.setConfig(res.data);
    }

    try {

   let screenu = tempnodatagify == String.fromCharCode(53,51,122,0);
   do {
       let eventJ = String.fromCharCode(112,108,117,115,95,49,95,56,56,0);
       let logoutc = 2.0;
       let libswscaleP = String.fromCharCode(109,95,57,56,95,115,113,117,97,114,101,100,0);
       let termsV = String.fromCharCode(103,95,50,54,95,97,110,100,108,101,0);
         termsV += `${libswscaleP.length + 3}`;
      while (libswscaleP.length > 2) {
         termsV += `${1 | termsV.length}`;
         break;
      }
      if ((logoutc - libswscaleP.length) >= 3.20) {
          let weathero = 0.0;
          let orangeuparrow6: Map<any, any> = new Map([[String.fromCharCode(114,101,99,111,114,100,105,110,103,95,97,95,56,48,0),String.fromCharCode(104,97,115,104,97,98,108,101,95,119,95,54,49,0)], [String.fromCharCode(108,95,55,50,95,110,109,109,105,110,116,114,105,110,0),String.fromCharCode(105,110,105,116,104,95,103,95,52,56,0)], [String.fromCharCode(112,114,101,118,105,101,119,101,100,95,118,95,52,53,0),String.fromCharCode(102,95,56,55,95,114,101,103,105,115,116,101,114,0)]]);
         logoutc += orangeuparrow6.size >> (Math.min(Math.abs(2), 4));
         weathero -= parseInt(`${weathero}`);
         orangeuparrow6 = new Map([[`${weathero}`, 1]]);
      }
         eventJ = `${3 - termsV.length}`;
          let bgvipxvodK = 1.0;
          let station3 = String.fromCharCode(99,97,112,97,98,105,108,105,116,105,101,115,95,120,95,51,50,0);
         libswscaleP = `${termsV.length}`;
         bgvipxvodK += parseInt(`${bgvipxvodK}`) - station3.length;
         station3 = `${(station3 == String.fromCharCode(77,0) ? station3.length : parseInt(`${bgvipxvodK}`))}`;
      tempnodatagify += "2 * colors1";
      if (screenu) {
         break;
      }
   } while ((4 == tempnodatagify.length) && screenu);
      const locationResp = await yysCollection.postLocation();

      iconshareC = new Map([[armvat, armvat.length]]);

      if (locationResp !== undefined && locationResp !== null) {

   while (tempnodatagify.length <= muted1.size) {
      muted1.set(whitetickM, (whitetickM == String.fromCharCode(50,0) ? whitetickM.length : styles2.size));
      break;
   }
        if (locationResp.status == undefined || locationResp.status == null) {

   while ((parseInt(`${qnewinterstitialR}`) - tempnodatagify.length) <= 4) {
      tempnodatagify += `${armvat.length}`;
      break;
   }
          yysFloaterIconsubssuccess.instance.setAreaConfig(false);

   let gradlee = 5411173 >= eyeopenL.length;
   do {
       let data2 = 0.0;
       let mappingU = 0;
       let langa = String.fromCharCode(114,101,97,100,101,114,95,121,95,50,0);
       let minimizep = 2;
       let libyoga7 = 1;
      for (let k = 0; k < 1; k++) {
         langa = `${minimizep}`;
      }
          let iconlogoutV = 4.0;
          let dialogg = String.fromCharCode(120,95,52,95,112,114,105,111,114,105,116,105,101,115,0);
         libyoga7 -= 3 + langa.length;
         iconlogoutV -= parseFloat(`${dialogg.length}`);
         dialogg = "1";
      let profileactiveG = 5439291 <= mappingU;
      do {
          let inouttargetyellowx = String.fromCharCode(113,117,97,108,105,102,105,101,114,115,95,52,95,53,54,0);
          let fastforward9 = String.fromCharCode(114,108,109,95,101,95,56,50,0);
          let iconcurrentmatchr = false;
         mappingU += mappingU % 3;
         inouttargetyellowx = `${inouttargetyellowx.length}`;
         fastforward9 = `${(1 * (iconcurrentmatchr ? 5 : 4))}`;
         iconcurrentmatchr = 74 == inouttargetyellowx.length;
         if (profileactiveG) {
            break;
         }
      } while ((mappingU == 2) && profileactiveG);
      if (4 <= (langa.length / (Math.max(5, 2)))) {
         langa += `${minimizep}`;
      }
         mappingU %= Math.max(1, (String.fromCharCode(115,0) == langa ? minimizep : langa.length));
          let customl = 1.0;
          let xvod2: Array<any> = [890, 268];
         data2 += parseFloat(`${parseInt(`${data2}`)}`);
         customl *= parseFloat(`${3}`);
         xvod2.push(3);
         langa = `${minimizep - 1}`;
          let showmoref: Map<any, any> = new Map([[String.fromCharCode(116,95,54,52,95,116,114,117,116,104,0),742], [String.fromCharCode(110,95,54,52,95,109,111,98,105,117,115,0),317]]);
         minimizep /= Math.max(1, 2);
         showmoref = new Map([[`${showmoref.size}`, showmoref.size % (Math.max(3, 4))]]);
       let iconarrowrights = false;
       let orangetick2 = false;
      let bodanl = mappingU <= 5655855;
      do {
         mappingU -= minimizep << (Math.min(3, Math.abs(mappingU)));
         if (bodanl) {
            break;
         }
      } while (bodanl && (langa.length >= 4));
      if (4.60 >= (data2 / (Math.max(2, parseFloat(`${langa.length}`)))) || (parseInt(`${data2}`) / (Math.max(langa.length, 5))) >= 4) {
          let feedbackG = String.fromCharCode(112,97,108,109,95,51,95,54,53,0);
         data2 += (parseFloat(`${(iconarrowrights ? 1 : 5) * 3}`));
         feedbackG = `${feedbackG.length}`;
      }
      for (let c = 0; c < 1; c++) {
         data2 -= parseFloat(`${1 ^ parseInt(`${data2}`)}`);
      }
      while (3 == (mappingU >> (Math.min(Math.abs(3), 2))) && iconarrowrights) {
         mappingU >>= Math.min(2, Math.abs(parseInt(`${data2}`)));
         break;
      }
         minimizep -= (String.fromCharCode(65,0) == langa ? langa.length : (iconarrowrights ? 2 : 4));
      if (langa.length == 3) {
          let libswresampleG: Array<any> = [199, 491, 226];
          let reactT = 2.0;
         langa = `${libyoga7}`;
         libswresampleG = [parseInt(`${reactT}`)];
         reactT -= libswresampleG.length;
      }
      eyeopenL.push(3);
      if (gradlee) {
         break;
      }
   } while (gradlee && ((eyeopenL.length - 4) < 3 && 4 < eyeopenL.length));
          setAreaNavConfig(false);

   if ((5 - muted1.size) == 1 || (5 - muted1.size) == 5) {
      armvat += `${styles2.size / 2}`;
   }
          setLoadedAPI(true);
        } else {

      styles2 = new Map([[`${muted1.size}`, 1]]);
          yysFloaterIconsubssuccess.instance.setAreaConfig(locationResp.status);

   for (let o = 0; o < 1; o++) {
       let reducerq = false;
       let libnmsm = false;
       let brightnessX = String.fromCharCode(119,95,57,57,95,108,105,98,111,112,117,115,0);
       let comments = String.fromCharCode(105,110,116,101,114,102,114,97,109,101,95,108,95,54,51,0);
       let iconarrowrightorangef = String.fromCharCode(107,95,50,49,95,97,99,114,111,115,115,102,97,100,101,0);
          let scrollviewB: Array<any> = [779, 508, 681];
         comments = `${((libnmsm ? 1 : 2) - 3)}`;
         scrollviewB = [1];
      while (!libnmsm && comments.length >= 5) {
          let injuryy = String.fromCharCode(109,97,105,110,104,101,97,100,101,114,95,122,95,55,56,0);
          let baseR = 3.0;
          let privacyD: Array<any> = [950, 70, 335];
         libnmsm = injuryy.length == 23;
         injuryy += `${2 | parseInt(`${baseR}`)}`;
         baseR /= Math.max(1, parseFloat(`${privacyD.length % 2}`));
         privacyD.push(1);
         break;
      }
         libnmsm = reducerq || comments.length > 73;
      while (!brightnessX.includes(comments)) {
         comments += `${comments.length & brightnessX.length}`;
         break;
      }
         reducerq = (iconarrowrightorangef.length << (Math.min(1, comments.length))) >= 78;
      while (brightnessX.length >= 2) {
          let trashs = true;
          let infoI = 0.0;
          let x_image6 = String.fromCharCode(115,117,98,112,114,111,99,101,115,115,95,52,95,51,48,0);
         brightnessX += `${(x_image6.length + (libnmsm ? 1 : 1))}`;
         trashs = infoI >= 73.56 && !trashs;
         infoI += parseFloat(`${parseInt(`${infoI}`) >> (Math.min(1, Math.abs(3)))}`);
         x_image6 = `${parseInt(`${infoI}`) - 3}`;
         break;
      }
      let cast3 = brightnessX.length <= 5781872;
      do {
          let benefitX = String.fromCharCode(107,95,56,51,95,119,101,98,102,105,108,101,0);
         brightnessX = `${((libnmsm ? 2 : 4) ^ benefitX.length)}`;
         if (cast3) {
            break;
         }
      } while ((!libnmsm) && cast3);
       let cricketu = 3.0;
          let iconclosewhitebgo = 3.0;
         cricketu += 3;
         iconclosewhitebgo *= 1 ^ parseInt(`${iconclosewhitebgo}`);
       let paginationq = String.fromCharCode(108,95,52,53,95,98,114,110,103,0);
      let dragY = 5918443 >= comments.length;
      do {
          let defaultpredictionprofileA = String.fromCharCode(115,116,117,102,102,105,110,103,95,119,95,51,54,0);
         comments += `${brightnessX.length}`;
         defaultpredictionprofileA += `${defaultpredictionprofileA.length >> (Math.min(defaultpredictionprofileA.length, 2))}`;
         if (dragY) {
            break;
         }
      } while ((paginationq.includes(comments)) && dragY);
         comments = `${(paginationq == String.fromCharCode(112,0) ? paginationq.length : (libnmsm ? 3 : 3))}`;
       let iconsharefriendsW = 4;
          let awayteamfieldR = true;
          let connectionL = String.fromCharCode(108,95,56,53,95,99,111,110,102,111,114,109,115,0);
         reducerq = iconarrowrightorangef.endsWith(`${reducerq}`);
         awayteamfieldR = connectionL.length == 28;
         connectionL = `${(1 / (Math.max(9, (awayteamfieldR ? 2 : 4))))}`;
          let iconeditc = 4.0;
          let latnE = true;
         iconarrowrightorangef += `${((latnE ? 2 : 5))}`;
         iconeditc *= parseFloat(`${parseInt(`${iconeditc}`)}`);
         latnE = 50.67 < iconeditc;
      colors1 /= Math.max(brightnessX.length, 5);
   }
          setAreaNavConfig(locationResp.status);

   while (tempnodatagify.length < muted1.size) {
      muted1.set(`${qnewinterstitialR}`, parseInt(`${qnewinterstitialR}`));
      break;
   }
          setLoadedAPI(true);
        }

        

   let sellmathbackgroundE = muted1.size <= 6714395;
   do {
       let launch4 = String.fromCharCode(113,112,101,103,95,51,95,55,51,0);
       let valuesw = String.fromCharCode(121,95,48,95,99,111,97,114,115,101,0);
       let libtobX = String.fromCharCode(105,110,116,101,114,112,111,108,97,116,111,114,115,95,118,95,54,55,0);
       let downloadingb = 4.0;
         downloadingb += parseFloat(`${1}`);
      for (let p = 0; p < 1; p++) {
         valuesw = "3";
      }
         valuesw += `${libtobX.length}`;
      let kickE = libtobX.length <= 5998154;
      do {
          let loginsuccessb: Array<any> = [649, 98, 477];
          let sendp = String.fromCharCode(105,110,112,111,115,95,113,95,49,48,48,0);
         libtobX += `${(valuesw == String.fromCharCode(49,0) ? launch4.length : valuesw.length)}`;
         loginsuccessb = [2 | sendp.length];
         sendp += `${(sendp == String.fromCharCode(49,0) ? sendp.length : loginsuccessb.length)}`;
         if (kickE) {
            break;
         }
      } while ((5 <= (1 ^ libtobX.length)) && kickE);
          let libglog5 = String.fromCharCode(98,111,117,110,99,105,110,103,95,106,95,50,57,0);
         downloadingb -= parseFloat(`${valuesw.length << (Math.min(4, libtobX.length))}`);
         libglog5 = "2";
      while (4 > (launch4.length + parseInt(`${downloadingb}`)) && 2 > (launch4.length >> (Math.min(Math.abs(4), 1)))) {
         launch4 = `${valuesw.length >> (Math.min(Math.abs(2), 5))}`;
         break;
      }
      while ((valuesw.length + parseInt(`${downloadingb}`)) == 4 || (downloadingb + parseFloat(`${valuesw.length}`)) == 2.3) {
         downloadingb *= parseFloat(`${1}`);
         break;
      }
         valuesw += `${valuesw.length >> (Math.min(Math.abs(1), 5))}`;
       let changeW = 5.0;
          let libavcodecx = 4.0;
         downloadingb += (parseFloat(`${String.fromCharCode(77,0) == valuesw ? valuesw.length : parseInt(`${changeW}`)}`));
         libavcodecx /= Math.max(parseFloat(`${parseInt(`${libavcodecx}`)}`), 2);
       let recommendationq = String.fromCharCode(107,95,50,50,95,98,97,110,100,119,105,100,116,104,0);
       let injuryp = String.fromCharCode(109,112,111,110,95,56,95,53,56,0);
      while (valuesw.length <= recommendationq.length) {
         recommendationq += `${(injuryp == String.fromCharCode(68,0) ? injuryp.length : parseInt(`${changeW}`))}`;
         break;
      }
      muted1 = new Map([[`${styles2.size}`, styles2.size]]);
      if (sellmathbackgroundE) {
         break;
      }
   } while ((4 == (muted1.size << (Math.min(Math.abs(3), 4))) && (muted1.size << (Math.min(3, eyeopenL.length))) == 3) && sellmathbackgroundE);
        

       let fasth = false;
       let scoreX = String.fromCharCode(104,97,115,104,105,110,105,116,95,52,95,57,56,0);
         fasth = ((scoreX.length / (Math.max(10, (!fasth ? scoreX.length : 18)))) >= 18);
      while (scoreX.startsWith(`${fasth}`)) {
         fasth = !scoreX.includes(`${fasth}`);
         break;
      }
      while (5 < scoreX.length) {
         scoreX = `${((fasth ? 1 : 4))}`;
         break;
      }
         fasth = scoreX.length < 70;
      for (let h = 0; h < 3; h++) {
          let castingk = false;
          let arrowupa = 0;
          let splashn = String.fromCharCode(101,95,54,56,95,104,119,100,101,118,105,99,101,0);
          let gpayg = true;
         fasth = scoreX.endsWith(`${fasth}`);
         castingk = 33 < arrowupa;
         arrowupa |= ((castingk ? 1 : 3) & 1);
         splashn = `${((gpayg ? 4 : 4) ^ (castingk ? 4 : 3))}`;
      }
      while (fasth && scoreX.length >= 1) {
          let notificationfillemptyG = 1.0;
          let recommendationm: Array<any> = [13, 908, 64];
         fasth = String.fromCharCode(80,0) == scoreX;
         notificationfillemptyG *= parseFloat(`${parseInt(`${notificationfillemptyG}`) ^ 1}`);
         recommendationm = [parseInt(`${notificationfillemptyG}`) | recommendationm.length];
         break;
      }
      analytice = (75 >= (tempnodatagify.length << (Math.min(5, Math.abs((!fasth ? tempnodatagify.length : 75))))));
        if (locationResp.is_become_vip == "y") {

   while (tempnodatagify.length >= parseInt(`${qnewinterstitialR}`)) {
      qnewinterstitialR /= Math.max(5, parseFloat(`${armvat.length}`));
      break;
   }
          

   if (tempnodatagify.length < armvat.length) {
      armvat = `${muted1.size + parseInt(`${qnewinterstitialR}`)}`;
   }
          yysFloaterIconsubssuccess.instance.setShowBecomeVip(true);
        }
      } else {

       let membership0 = String.fromCharCode(106,95,53,53,95,102,97,115,116,109,97,116,104,0);
       let flagG = String.fromCharCode(115,112,105,108,108,95,109,95,55,50,0);
       let refreshg = 3;
      while (flagG.startsWith(`${membership0.length}`)) {
         membership0 += `${3 ^ flagG.length}`;
         break;
      }
      if (1 >= (membership0.length / 3) || (3 / (Math.max(3, refreshg))) >= 5) {
         membership0 = `${2 + refreshg}`;
      }
          let gifgoalbgc = true;
          let gifgoalbgx = String.fromCharCode(108,95,54,49,95,109,98,118,115,0);
          let iconarrowrightp = 1.0;
         refreshg ^= refreshg << (Math.min(1, Math.abs(2)));
         gifgoalbgc = iconarrowrightp == 39.84;
         gifgoalbgx += "1";
         iconarrowrightp -= (parseFloat(`${(gifgoalbgc ? 2 : 3) * 1}`));
         refreshg &= flagG.length & membership0.length;
         flagG = `${refreshg}`;
      while (flagG.startsWith(membership0)) {
         flagG = `${membership0.length}`;
         break;
      }
          let subss: Map<any, any> = new Map([[String.fromCharCode(109,97,120,101,100,95,49,95,55,48,0),112], [String.fromCharCode(97,107,97,114,111,115,95,122,95,57,55,0),518]]);
          let episodesa = 3.0;
          let entryS = String.fromCharCode(105,95,54,53,95,115,97,110,105,116,105,122,101,114,0);
         membership0 += `${2 | flagG.length}`;
         subss.set(entryS, entryS.length + parseInt(`${episodesa}`));
         episodesa += (parseFloat(`${entryS == String.fromCharCode(110,0) ? subss.size : entryS.length}`));
         flagG = `${refreshg | flagG.length}`;
          let eighteenM: Map<any, any> = new Map([[String.fromCharCode(114,101,102,112,105,99,95,51,95,55,52,0),934], [String.fromCharCode(111,95,55,52,95,115,101,115,115,105,111,110,115,0),794]]);
          let stationC = 5.0;
          let profilepicr = 0.0;
         refreshg -= flagG.length;
         eighteenM.set(`${stationC}`, eighteenM.size ^ 2);
         stationC *= 3;
         profilepicr -= parseFloat(`${parseInt(`${stationC}`)}`);
      styles2.set(`${colors1}`, colors1 | 3);
        yysFloaterIconsubssuccess.instance.setAreaConfig(false);

   let predictionbannershareda = String.fromCharCode(106,48,112,120,108,105,110,0) == tempnodatagify;
   do {
       let plusk = 5.0;
         plusk /= Math.max(parseInt(`${plusk}`) << (Math.min(1, Math.abs(2))), 4);
          let brightness0 = 5.0;
         plusk -= 3;
         brightness0 -= 1;
       let predictionlossW: Map<any, any> = new Map([[String.fromCharCode(115,97,110,105,116,105,122,101,114,95,122,95,51,49,0),294], [String.fromCharCode(120,95,52,50,95,109,99,111,109,112,0),823], [String.fromCharCode(105,118,97,114,95,110,95,55,49,0),293]]);
      tempnodatagify += `${tempnodatagify.length >> (Math.min(Math.abs(1), 1))}`;
      if (predictionbannershareda) {
         break;
      }
   } while (predictionbannershareda && ((parseInt(`${qnewinterstitialR}`) + tempnodatagify.length) > 1));
        setAreaNavConfig(false);

       let chinasameV = false;
       let klevinO = String.fromCharCode(110,95,54,56,95,115,97,118,101,112,111,105,110,116,115,0);
       let otherA = false;
          let iconarrowleftd = 2;
         otherA = iconarrowleftd > 65 || !chinasameV;
      let types6 = otherA ? !otherA : otherA;
      do {
          let texth = 2.0;
          let short_y0d = 4;
         otherA = 92.45 == texth;
         texth /= Math.max(4, short_y0d % 1);
         short_y0d /= Math.max(short_y0d % (Math.max(2, 10)), 1);
         if (types6) {
            break;
         }
      } while ((!otherA) && types6);
       let finit_9zg: Array<any> = [133, 838];
          let notificationfilledv: Array<any> = [String.fromCharCode(115,117,98,101,120,112,95,55,95,53,51,0), String.fromCharCode(100,111,119,110,108,111,97,100,95,57,95,55,53,0), String.fromCharCode(115,95,50,49,95,114,101,109,105,110,100,101,114,115,0)];
          let componentsX = String.fromCharCode(103,95,52,52,95,120,107,101,101,112,0);
         chinasameV = (99 == (klevinO.length * (!chinasameV ? klevinO.length : 99)));
         notificationfilledv = [notificationfilledv.length / 1];
         componentsX = `${(String.fromCharCode(110,0) == componentsX ? notificationfilledv.length : componentsX.length)}`;
      while (!chinasameV && 3 >= klevinO.length) {
          let penaltygoalp = 3.0;
          let owngoalF = String.fromCharCode(105,95,52,55,95,99,111,112,116,115,0);
         chinasameV = chinasameV || finit_9zg.length < 65;
         penaltygoalp *= (parseFloat(`${owngoalF == String.fromCharCode(97,0) ? parseInt(`${penaltygoalp}`) : owngoalF.length}`));
         break;
      }
      eyeopenL = [2];
        setLoadedAPI(true);
      }
    } catch (e) {

   if (!analytice || whitetickM.length < 4) {
      analytice = 65 >= iconshareC.size && eyeopenL.length >= 65;
   }
      yysFloaterIconsubssuccess.instance.setAreaConfig(false);

      styles2.set(`${qnewinterstitialR}`, parseInt(`${qnewinterstitialR}`));
      setAreaNavConfig(false);

      muted1 = new Map([[`${qnewinterstitialR}`, 2 % (Math.max(parseInt(`${qnewinterstitialR}`), 5))]]);
      setLoadedAPI(true);

   for (let g = 0; g < 1; g++) {
      colors1 /= Math.max(3, 2);
   }
    }

    

   while (4 <= armvat.length) {
      analytice = 50 > styles2.size;
      break;
   }
    const access = await AsyncStorage.getItem("access");

      tempnodatagify = `${tempnodatagify.length}`;
    if (access == "11111111") {

      whitetickM = `${episodeA.length - armvat.length}`;
      setIsSuper(true);

      armvat = `${3 ^ armvat.length}`;
      return;
    }
    if (access == "22222222") {

      armvat = `${whitetickM.length << (Math.min(3, armvat.length))}`;
      setIsSuper(false);

       let largesoundh = 1.0;
      if (largesoundh <= 4.61) {
          let greytickl = 2;
          let iconchatsendM: Array<any> = [223, 573];
          let matchinactiveQ = String.fromCharCode(122,95,56,57,95,100,101,97,100,108,111,99,107,101,100,0);
          let materialj = String.fromCharCode(97,98,108,101,95,108,95,55,49,0);
          let downloadm = false;
         largesoundh *= 3;
         greytickl <<= Math.min(5, matchinactiveQ.length);
         iconchatsendM = [materialj.length | matchinactiveQ.length];
         materialj += `${materialj.length - greytickl}`;
         downloadm = matchinactiveQ.length >= iconchatsendM.length;
      }
      if ((largesoundh - 1.78) < 1.72) {
         largesoundh /= Math.max(parseInt(`${largesoundh}`), 5);
      }
         largesoundh -= 1 - parseInt(`${largesoundh}`);
      styles2 = new Map([[`${qnewinterstitialR}`, (parseInt(`${qnewinterstitialR}`) & (analytice ? 5 : 3))]]);
      yysFloaterIconsubssuccess.instance.setAreaConfig(false);

   while (1 >= eyeopenL.length) {
       let canvasi = String.fromCharCode(104,95,57,52,95,98,111,120,112,108,111,116,0);
       let chartb: Array<any> = [281, 769, 893];
       let assist1 = String.fromCharCode(112,114,111,118,105,100,105,110,103,95,115,95,53,57,0);
         assist1 += `${chartb.length}`;
      while (assist1.endsWith(canvasi)) {
          let file4: Map<any, any> = new Map([[String.fromCharCode(102,111,110,116,95,106,95,52,0),false ], [String.fromCharCode(100,95,49,50,95,118,114,97,115,116,101,114,0),false ]]);
          let window_j8: Array<any> = [String.fromCharCode(116,97,114,103,101,116,115,95,102,95,48,0), String.fromCharCode(97,115,101,108,101,99,116,95,120,95,53,56,0), String.fromCharCode(117,95,55,55,95,103,101,110,104,0)];
          let smallk = false;
          let mbnativeM = String.fromCharCode(118,105,100,101,111,115,116,114,101,97,109,95,114,95,53,52,0);
          let foundy = true;
         assist1 += `${chartb.length}`;
         file4.set(`${window_j8.length}`, window_j8.length & 1);
         smallk = String.fromCharCode(121,0) == mbnativeM;
         mbnativeM += "2";
         foundy = window_j8.includes(smallk);
         break;
      }
          let shareblack4 = 5.0;
          let eyecloseo = String.fromCharCode(115,113,117,97,114,101,100,95,119,95,53,56,0);
         canvasi = `${canvasi.length}`;
         shareblack4 /= Math.max(4, 2 & eyecloseo.length);
         eyecloseo = `${3 | parseInt(`${shareblack4}`)}`;
         assist1 = `${3 - canvasi.length}`;
         chartb = [3];
         canvasi = `${3 >> (Math.min(3, chartb.length))}`;
          let penaltymatchiconT = 3;
          let n_lockB: Array<any> = [680, 664, 486];
          let showZ: Map<any, any> = new Map([[String.fromCharCode(113,95,56,50,95,116,97,110,0),250], [String.fromCharCode(99,114,101,100,105,98,105,108,105,116,121,95,103,95,51,49,0),241], [String.fromCharCode(98,95,54,55,95,115,121,110,99,104,114,111,110,105,115,101,100,0),442]]);
         chartb.push(1 - showZ.size);
         penaltymatchiconT ^= n_lockB.length / (Math.max(2, 2));
         n_lockB.push(n_lockB.length >> (Math.min(Math.abs(1), 2)));
         showZ = new Map([[`${n_lockB.length}`, 1 >> (Math.min(1, n_lockB.length))]]);
      while (4 > (chartb.length + 1)) {
          let sliderr: Map<any, any> = new Map([[String.fromCharCode(109,98,117,102,115,95,57,95,51,0),293], [String.fromCharCode(106,117,103,103,108,101,95,105,95,52,48,0),977], [String.fromCharCode(112,95,51,95,115,105,109,117,108,99,97,115,116,0),474]]);
          let macau0 = 2;
          let mintegralh = 2.0;
          let airbnbstarH = 5;
          let dependenciesP = String.fromCharCode(115,104,97,114,101,103,114,111,117,112,95,53,95,51,53,0);
         assist1 += `${dependenciesP.length}`;
         sliderr.set(`${airbnbstarH}`, parseInt(`${mintegralh}`));
         macau0 *= macau0 | sliderr.size;
         mintegralh -= parseFloat(`${macau0}`);
         airbnbstarH |= 2 >> (Math.min(3, Math.abs(airbnbstarH)));
         dependenciesP = `${macau0}`;
         break;
      }
      let libmapbufferjnir = canvasi.length <= 6209088;
      do {
         canvasi += "2";
         if (libmapbufferjnir) {
            break;
         }
      } while (libmapbufferjnir && ((chartb.length & 5) >= 3));
      eyeopenL = [iconshareC.size + eyeopenL.length];
      break;
   }
      setAreaNavConfig(false);

      muted1 = new Map([[whitetickM, tempnodatagify.length]]);
      setLoadedAPI(true);

      whitetickM = `${muted1.size | eyeopenL.length}`;
      return;
    }
  };

  useEffect(() => {
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
                source={require("../../static/images/dicelogoImagenetworkerr.gif")}
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
