import React, { useCallback, useEffect, useState } from "react";
import { View } from "react-native";
import { useInfiniteQuery } from "@tanstack/react-query";
import FastImage from "../components/common/ww_result";
import Nav from "../../src/navigation/ww_review_dacccfaabfbcbadeebddcabacdffdbc_view";
import { EventSpash } from "../../src/navigation/ww_club";
import NavIos from "@iosScreen/navigation/ww_review_dacccfaabfbcbadeebddcabacdffdbc_view";

import {
  TOTAL_VIDEO_TO_DOWNLOAD,
  DOWNLOAD_WATCH_ANYTIME,
  GOOGLE_SINGIN_CLIENT_WEB,
  GOOGLE_SINGIN_CLIENT_IOS,
  SHOW_ZF_CONST,
} from "@utility/ww_icon";
import { wwAbidetect } from "../../ww_leakchecker";
import { Platform } from "react-native";
import wwShirtPhilippines from "../../src/Sports/middleware/ww_klevin";
import { Url } from "../../src/Sports/middleware/ww_phone_langkey";
import Config from "../../src/Sports/global/ww_cast_view";
import { wwVietnam } from "../../src/Sports/global/ww_screen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AdsBannerContextProvider } from "../contexts/ww_setting";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { downloadFirstNVid } from "../utils/ww_taiwan";
import { fetchMiniVods } from "../api/ww_gift";
import { wwRewardvideoMegaphone, wwLight, wwIconscheduleColors } from "@api";
import {
  hideLoginAction,
  setIsHomeGuideShown,
  setIsMiniVodGuideShown,
  setIsPlayGuideShown,
  setIsPlayGuideShown2,
  setIsSportGuideShown,
} from "@redux/actions/ww_hash";
import { useDispatch } from "react-redux";
import NetInfo from "@react-native-community/netinfo";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/ww_catagory_neon";
import { wwEighteenShirt } from "@redux/ww_small";
import { screenModel } from "@type/ww_jingdong_libavfilter";
import { withIAPContext } from "react-native-iap";
import DeviceInfo from "react-native-device-info";
import { addUserAuthState } from "@redux/actions/ww_libreactperfloggerjni_small";
import { onBootApp, onCloseApp } from "@redux/actions/ww_libglog";
import { wwVertical } from "@redux/reducers/ww_related_kuaishou";
import { wwBodan } from "@models/ww_liveendmodallogo_awayteamfield";

export default () => {
  const appDispatch = useAppDispatch();
  const [loadedAPI, setLoadedAPI] = useState(false);
  const [areaNavConfig, setAreaNavConfig] = useState(false);
  const [isSuper, setIsSuper] = useState(false);

  const userState = useSelector<wwVertical>("userReducer");

  const dispatch = useDispatch();

  const isVip = wwBodan.isVip(userState.user);

  const [isConnected, setIsConnected] = useState(true);

  const screenState: screenModel = useAppSelector(
    ({ screenReducer }: wwEighteenShirt) => screenReducer
  );

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state: any) => {
      setIsConnected(state.isConnected);
      if (state.isConnected === false) setAreaNavConfig(true);
    });

    if (userState.user !== null && userState.user !== undefined) {
      dispatch(addUserAuthState(new wwBodan(userState.user)));
    }

    return () => {
      
      unsubscribe();
      appDispatch(onCloseApp());
    };
  }, []);

  

  const guestLoginInit = async () => {
       let c_managerP = 1.0;
    let searchr: Map<any, any> = new Map([[String.fromCharCode(111,95,53,55,95,99,111,109,112,97,110,100,0),true ], [String.fromCharCode(115,104,97,100,101,95,97,95,55,52,0),false ]]);
    let basketballp: Array<any> = [967, 757];
    let mapbufferO = String.fromCharCode(109,101,116,114,105,99,115,95,54,95,51,0);
    let greenq = String.fromCharCode(101,95,53,51,95,105,103,110,111,114,101,100,0);
    let rulesV = false;
    let mbbanner6: Map<any, any> = new Map([[String.fromCharCode(107,95,56,48,95,116,97,110,0),String.fromCharCode(111,98,115,101,114,118,101,114,95,104,95,51,50,0)], [String.fromCharCode(112,114,111,106,101,99,116,105,111,110,115,95,48,95,53,54,0),String.fromCharCode(103,110,114,101,95,48,95,54,52,0)]]);
    let alert6: Array<any> = [String.fromCharCode(117,95,54,48,95,114,101,115,112,101,99,116,105,110,103,0), String.fromCharCode(115,116,101,109,109,101,114,95,52,95,54,57,0)];
    let largeU = String.fromCharCode(113,117,101,117,101,95,100,95,49,52,0);
    let webview7 = 3;
    let searchE = String.fromCharCode(112,97,99,107,101,116,111,117,116,95,53,95,51,53,0);
    let backward6 = 3.0;
    let h_hashe = String.fromCharCode(111,95,55,95,114,101,109,105,110,100,101,114,0);
    let iconplayf = 2.0;
   while ((1 + webview7) < 4) {
       let eighteenR = String.fromCharCode(112,114,105,110,116,99,111,109,112,95,97,95,56,53,0);
       let modelsM = 5;
       let styleA = String.fromCharCode(97,95,50,53,95,102,114,101,101,108,105,115,116,0);
      for (let d = 0; d < 2; d++) {
         styleA += `${modelsM}`;
      }
      while (styleA.startsWith(`${modelsM}`)) {
         modelsM -= 3;
         break;
      }
      if (modelsM > 3) {
         styleA = `${eighteenR.length & modelsM}`;
      }
         modelsM |= (styleA == String.fromCharCode(80,0) ? modelsM : styleA.length);
         styleA += `${styleA.length}`;
         modelsM += 3;
         eighteenR += `${modelsM % 3}`;
          let currentv = String.fromCharCode(121,95,57,49,95,116,97,98,0);
          let othery = String.fromCharCode(103,95,52,95,115,117,112,101,114,103,114,111,117,112,0);
         eighteenR += `${currentv.length}`;
         currentv += `${othery.length}`;
         othery = `${3 - othery.length}`;
          let abidetectM = String.fromCharCode(122,95,57,51,95,109,111,111,102,0);
          let profileframeh = 3;
          let arrowup2: Array<any> = [String.fromCharCode(119,95,51,55,0), String.fromCharCode(113,95,54,49,95,97,114,110,114,0)];
         modelsM %= Math.max(3 ^ eighteenR.length, 1);
         abidetectM = `${abidetectM.length}`;
         profileframeh /= Math.max(2 >> (Math.min(1, arrowup2.length)), 5);
         arrowup2 = [arrowup2.length];
      webview7 -= webview7;
      break;
   }
       let styleD = String.fromCharCode(109,95,52,57,95,102,117,115,101,0);
       let mapbufferl = 5.0;
       let middlebrightnessM = 4;
          let statisticsb: Map<any, any> = new Map([[String.fromCharCode(103,95,55,51,95,109,117,108,114,101,115,0),true ], [String.fromCharCode(112,101,114,102,111,114,109,105,110,103,95,110,95,49,50,0),false ], [String.fromCharCode(116,97,105,108,115,95,54,95,51,0),false ]]);
          let iconnewssharew = String.fromCharCode(97,114,99,104,105,118,105,110,103,95,102,95,53,51,0);
          let librrc7: Array<any> = [582, 291, 190];
         middlebrightnessM >>= Math.min(Math.abs(2 & styleD.length), 1);
         statisticsb = new Map([[`${statisticsb.size}`, librrc7.length & 2]]);
         iconnewssharew += `${iconnewssharew.length & librrc7.length}`;
         mapbufferl -= parseFloat(`${parseInt(`${mapbufferl}`)}`);
          let acceptedQ = String.fromCharCode(112,95,56,95,98,111,117,110,100,115,0);
          let ajaxD = 1.0;
          let redirectA = false;
         middlebrightnessM &= styleD.length;
         acceptedQ = `${((redirectA ? 1 : 3))}`;
         ajaxD /= Math.max(3, (parseFloat(`${(redirectA ? 5 : 4) ^ parseInt(`${ajaxD}`)}`)));
         middlebrightnessM %= Math.max(3, parseInt(`${mapbufferl}`) & middlebrightnessM);
      let thumbnailg = mapbufferl >= 6429113.0;
      do {
         mapbufferl *= parseFloat(`${styleD.length >> (Math.min(2, Math.abs(middlebrightnessM)))}`);
         if (thumbnailg) {
            break;
         }
      } while (thumbnailg && (2.49 <= (mapbufferl * 3.12) || (mapbufferl * 3.12) <= 3.10));
      if ((1 ^ middlebrightnessM) == 2) {
         middlebrightnessM += parseInt(`${mapbufferl}`) / 3;
      }
         mapbufferl /= Math.max(3, parseFloat(`${middlebrightnessM / 2}`));
         middlebrightnessM += styleD.length - 1;
       let controlsS = String.fromCharCode(109,101,115,97,103,101,115,95,107,95,52,53,0);
      mapbufferO = `${largeU.length}`;
   let winds = mapbufferO.length <= 7785873;
   do {
      mapbufferO += `${alert6.length * 1}`;
      if (winds) {
         break;
      }
   } while (winds && (2 <= (mapbufferO.length * 2) && (mapbufferO.length + parseInt(`${c_managerP}`)) <= 2));
   if ((basketballp.length / (Math.max(6, mbbanner6.size))) < 3 && 3 < (mbbanner6.size / 3)) {
      basketballp.push(mbbanner6.size & 1);
   }
   while (!greenq.includes(`${basketballp.length}`)) {
       let logoK = String.fromCharCode(105,95,51,51,95,101,109,105,116,0);
          let turndowns = 3.0;
          let resendn = false;
          let mappinga: Array<any> = [507, 618, 415];
         logoK = `${mappinga.length | logoK.length}`;
         turndowns -= parseFloat(`${parseInt(`${turndowns}`) * 3}`);
         resendn = 28.4 > turndowns;
         mappinga = [(parseInt(`${turndowns}`) ^ (resendn ? 1 : 5))];
          let signinupP = false;
          let thumbnailO = String.fromCharCode(97,95,55,54,95,110,111,110,99,111,110,116,97,99,116,0);
          let footballI = String.fromCharCode(120,95,55,48,95,112,107,101,121,0);
         logoK += `${footballI.length & 3}`;
         signinupP = thumbnailO == thumbnailO;
          let checkboxx = String.fromCharCode(97,110,110,101,120,95,51,95,57,55,0);
         logoK = `${checkboxx.length / (Math.max(4, logoK.length))}`;
      greenq = `${searchr.size >> (Math.min(alert6.length, 2))}`;
      break;
   }
   let baselineZ = rulesV ? !rulesV : rulesV;
   do {
      rulesV = mbbanner6.size >= largeU.length;
      if (baselineZ) {
         break;
      }
   } while ((rulesV) && baselineZ);
      searchr.set(`${rulesV}`, alert6.length - 1);
      mbbanner6.set(mapbufferO, 3);

    if (userState.user === null) {

      backward6 -= parseFloat(`${1 | searchr.size}`);
       let analytics1 = 0.0;
       let videow = 5.0;
      for (let m = 0; m < 1; m++) {
         videow += 1 & parseInt(`${videow}`);
      }
       let networki = 5.0;
       let termsQ = 2.0;
      let libturbomodulejsijnib = 6282240.0 >= videow;
      do {
         videow += parseInt(`${analytics1}`) >> (Math.min(5, Math.abs(parseInt(`${termsQ}`))));
         if (libturbomodulejsijnib) {
            break;
         }
      } while (libturbomodulejsijnib && ((4.38 - videow) <= 5.9 && (analytics1 * videow) <= 4.38));
      for (let p = 0; p < 1; p++) {
         analytics1 /= Math.max(3, parseFloat(`${3}`));
      }
      let gifgoalbgb = networki <= 7034180.0;
      do {
          let disconnectedu = 1;
          let clearR = String.fromCharCode(122,108,105,98,112,114,105,109,101,95,97,95,51,53,0);
          let leftx = 2.0;
          let videojsH = 2.0;
         networki *= parseFloat(`${2 * clearR.length}`);
         disconnectedu %= Math.max(1, 1 / (Math.max(10, disconnectedu)));
         clearR = `${parseInt(`${videojsH}`) | disconnectedu}`;
         leftx += parseFloat(`${parseInt(`${leftx}`) | disconnectedu}`);
         videojsH *= parseFloat(`${3}`);
         if (gifgoalbgb) {
            break;
         }
      } while (gifgoalbgb && (networki <= 5.61));
      while (5.1 <= (networki * termsQ) && 2.67 <= (termsQ * 5.1)) {
         termsQ -= parseFloat(`${1 >> (Math.min(Math.abs(parseInt(`${termsQ}`)), 1))}`);
         break;
      }
      mbbanner6.set(`${videow}`, mbbanner6.size - 3);
       let renewj = 3.0;
       let webviewV: Array<any> = [String.fromCharCode(108,95,56,51,95,105,111,101,114,114,110,111,109,101,109,0), String.fromCharCode(111,95,50,54,95,118,105,100,101,111,112,114,111,99,101,115,115,111,114,0)];
          let launcherC = String.fromCharCode(97,102,116,101,114,95,51,95,51,55,0);
         webviewV.push((launcherC == String.fromCharCode(72,0) ? launcherC.length : webviewV.length));
       let macau2: Array<any> = [696, 667, 150];
       let eventsplashR: Array<any> = [840, 172, 263];
         webviewV = [3 * parseInt(`${renewj}`)];
         macau2 = [webviewV.length << (Math.min(4, Math.abs(parseInt(`${renewj}`))))];
      if (!macau2.includes(renewj)) {
         renewj += parseFloat(`${2 * webviewV.length}`);
      }
         macau2.push(parseInt(`${renewj}`) | 3);
      largeU = `${mbbanner6.size * 1}`;
   let coreL = c_managerP <= 7322945.0;
   do {
       let source7 = String.fromCharCode(119,95,53,95,115,97,118,105,110,103,0);
         source7 = "2";
      while (source7.length >= 4) {
         source7 = `${source7.length}`;
         break;
      }
          let sendB: Array<any> = [43, 9];
         source7 = `${sendB.length}`;
      c_managerP *= largeU.length;
      if (coreL) {
         break;
      }
   } while (coreL && ((3.77 - c_managerP) > 5.3 && 3 > (parseInt(`${c_managerP}`) - searchr.size)));
       let backgroundl = String.fromCharCode(115,95,50,57,95,115,111,102,116,119,97,114,101,0);
       let textS = String.fromCharCode(115,97,118,101,112,111,105,110,116,115,95,107,95,50,55,0);
       let zhuboN = 3.0;
          let gifgoalbgq = 5;
         zhuboN *= backgroundl.length;
         gifgoalbgq >>= Math.min(1, Math.abs(gifgoalbgq ^ 2));
      while (textS != backgroundl) {
         backgroundl += `${backgroundl.length / 1}`;
         break;
      }
      for (let l = 0; l < 3; l++) {
         textS += `${backgroundl.length + 3}`;
      }
          let update_10F = String.fromCharCode(112,97,99,107,101,114,95,48,95,56,56,0);
         textS = `${parseInt(`${zhuboN}`) >> (Math.min(Math.abs(2), 5))}`;
         update_10F += `${update_10F.length % 2}`;
         textS += `${1 + backgroundl.length}`;
      if ((1.99 * zhuboN) > 1.74) {
         zhuboN -= backgroundl.length;
      }
      while ((zhuboN * 5.26) <= 3.67 && (textS.length % (Math.max(5, 2))) <= 3) {
         zhuboN /= Math.max(2, 2);
         break;
      }
      let webview77 = 8844309.0 <= zhuboN;
      do {
          let indexF: Array<any> = [897, 606, 904];
          let brightnessa = 0.0;
          let y_unlockb = false;
         zhuboN /= Math.max(2, (backgroundl == String.fromCharCode(122,0) ? indexF.length : backgroundl.length));
         indexF.push(1 / (Math.max(4, parseInt(`${brightnessa}`))));
         brightnessa /= Math.max((parseFloat(`${(y_unlockb ? 2 : 4) >> (Math.min(Math.abs(parseInt(`${brightnessa}`)), 3))}`)), 4);
         y_unlockb = !y_unlockb;
         if (webview77) {
            break;
         }
      } while (webview77 && (4 <= (4 - parseInt(`${zhuboN}`)) && 5.70 <= (zhuboN - 4.25)));
       let codegenN = 1.0;
       let loginsuccessU = 4.0;
      backward6 += parseFloat(`${largeU.length ^ searchr.size}`);
   while (Array.from(mbbanner6.keys()).includes(`${c_managerP}`)) {
      mbbanner6.set(searchE, searchE.length);
      break;
   }
      searchr = new Map([[`${backward6}`, 1 + parseInt(`${backward6}`)]]);
      mbbanner6 = new Map([[`${searchr.size}`, 2]]);
      const user = await wwIconscheduleColors.guestLogin();

   while (4.48 < c_managerP) {
      h_hashe = `${(largeU == String.fromCharCode(99,0) ? searchr.size : largeU.length)}`;
      break;
   }
   if (!greenq.startsWith(`${rulesV}`)) {
      rulesV = mbbanner6.size > 61 && 61 > mapbufferO.length;
   }
   for (let l = 0; l < 2; l++) {
      alert6 = [((rulesV ? 1 : 2))];
   }
   for (let k = 0; k < 2; k++) {
      backward6 -= parseFloat(`${mbbanner6.size}`);
   }
      rulesV = (webview7 * greenq.length) <= 21;
      h_hashe += `${(mapbufferO == String.fromCharCode(108,0) ? mapbufferO.length : alert6.length)}`;
      greenq = `${2 ^ h_hashe.length}`;
      c_managerP += parseInt(`${c_managerP}`) ^ searchE.length;

      await dispatch(addUserAuthState(user));
    }
  };

  const onAppInit = async () => {
       let whatsappV: Array<any> = [328, 450, 301];
    let successb = String.fromCharCode(104,95,49,48,48,95,97,117,116,111,100,101,108,101,116,101,0);
    let default_vw = 4;
    let emojiS = String.fromCharCode(108,115,112,102,95,121,95,51,50,0);
    let g_hashs = false;
    let whitetickg = true;
    let reducerH = 1.0;
    let subtextH: Map<any, any> = new Map([[String.fromCharCode(104,101,97,100,105,110,103,95,120,95,53,48,0),905], [String.fromCharCode(109,109,120,101,120,116,95,103,95,50,52,0),732], [String.fromCharCode(113,95,54,51,95,97,118,102,111,114,109,97,116,114,101,115,0),105]]);
    let controlg = false;
    let turnc = 3.0;
      whatsappV = [subtextH.size];

    try {

      reducerH /= Math.max(3, parseFloat(`${whatsappV.length}`));
      await guestLoginInit();

   if (2.95 > (5.79 * reducerH)) {
       let rightm = String.fromCharCode(99,108,97,109,112,95,104,95,54,52,0);
       let default_r0N = String.fromCharCode(108,97,121,111,117,116,95,117,95,55,50,0);
       let updatesw = 4;
      let expiredx = default_r0N == String.fromCharCode(102,122,110,107,103,115,95,0);
      do {
         default_r0N += "1";
         if (expiredx) {
            break;
         }
      } while (expiredx && ((updatesw % 2) == 4));
         default_r0N += `${rightm.length}`;
      while (3 >= (rightm.length ^ updatesw) || (rightm.length ^ 3) >= 1) {
         updatesw /= Math.max(updatesw, 1);
         break;
      }
         updatesw &= default_r0N.length | rightm.length;
      let nativemoduleY = String.fromCharCode(116,55,57,107,48,0) == default_r0N;
      do {
          let classesJ = String.fromCharCode(111,110,118,101,114,115,97,116,105,111,110,95,107,95,54,57,0);
          let episodej: Array<any> = [325, 937, 459];
         default_r0N = `${updatesw * 3}`;
         classesJ = `${(classesJ == String.fromCharCode(83,0) ? classesJ.length : episodej.length)}`;
         episodej = [(String.fromCharCode(65,0) == classesJ ? classesJ.length : episodej.length)];
         if (nativemoduleY) {
            break;
         }
      } while (nativemoduleY && (4 >= (updatesw + 5)));
         updatesw |= 3;
       let libfbN: Map<any, any> = new Map([[String.fromCharCode(99,111,110,116,101,110,116,115,95,54,95,50,52,0),261], [String.fromCharCode(109,101,115,97,103,101,95,103,95,54,56,0),490]]);
      if (4 < rightm.length) {
          let sendW = String.fromCharCode(117,95,50,54,95,115,97,110,105,116,105,122,101,0);
         default_r0N = "2";
         sendW += `${sendW.length | sendW.length}`;
      }
      let yellowanimationliveC = String.fromCharCode(56,101,107,101,101,122,52,114,0) == rightm;
      do {
         rightm += `${default_r0N.length ^ rightm.length}`;
         if (yellowanimationliveC) {
            break;
         }
      } while ((!rightm.startsWith(`${updatesw}`)) && yellowanimationliveC);
      reducerH -= (parseFloat(`${String.fromCharCode(52,0) == rightm ? subtextH.size : rightm.length}`));
   }
      await Promise.all([wwRewardvideoMegaphone.getLocalIpAddress(), wwRewardvideoMegaphone.getBottomNav()]);
    } catch (err) {

   if (5 < default_vw) {
      default_vw -= successb.length;
   }
      setTimeout(() => {

   if ((parseFloat(`${subtextH.size}`) * reducerH) < 3.76 && 3.37 < (3.76 * reducerH)) {
      reducerH *= parseFloat(`${default_vw / (Math.max(7, whatsappV.length))}`);
   }
        onAppInit;
      }, 3000);

   for (let d = 0; d < 1; d++) {
      default_vw &= whatsappV.length % 2;
   }
    }

    const res = await wwShirtPhilippines.call(
      Url.getConfig,
      { channel: Config.channelId },
      "GET"
    );

       let kuaishoun = 3.0;
          let rewardvideoV: Array<any> = [479, 932, 662];
         kuaishoun += parseInt(`${kuaishoun}`);
         rewardvideoV = [rewardvideoV.length];
         kuaishoun /= Math.max(4, parseInt(`${kuaishoun}`));
         kuaishoun *= parseInt(`${kuaishoun}`) ^ 2;
      reducerH /= Math.max((parseFloat(`${(g_hashs ? 5 : 2)}`)), 4);
    if (res.success) {

   while (reducerH >= 5.77) {
      reducerH *= parseFloat(`${1}`);
      break;
   }
      wwVietnam.instance.setConfig(res.data);
    }

    try {

   for (let w = 0; w < 2; w++) {
      default_vw |= emojiS.length;
   }
      const locationResp = await wwRewardvideoMegaphone.postLocation();

      emojiS = `${emojiS.length | 3}`;

      if (locationResp !== undefined && locationResp !== null) {

      reducerH -= (parseFloat(`${emojiS.length << (Math.min(3, Math.abs((g_hashs ? 4 : 3))))}`));
        console.log("locationResp.is_appsflyer_production");

       let unfill5: Array<any> = [566, 596];
       let sigmobS = String.fromCharCode(105,110,100,105,99,97,116,101,100,95,109,95,51,53,0);
      let anneru = 9768647 <= sigmobS.length;
      do {
         sigmobS = `${unfill5.length}`;
         if (anneru) {
            break;
         }
      } while (anneru && (!sigmobS.startsWith(`${unfill5.length}`)));
          let matchactiveJ: Map<any, any> = new Map([[String.fromCharCode(106,95,50,49,95,111,112,101,110,115,108,101,115,0),101], [String.fromCharCode(110,101,101,100,95,48,95,48,0),434]]);
          let borderlessm = String.fromCharCode(109,111,110,116,104,115,95,101,95,52,50,0);
         unfill5 = [1 - matchactiveJ.size];
         matchactiveJ = new Map([[borderlessm, 1]]);
         borderlessm += `${borderlessm.length >> (Math.min(Math.abs(1), 1))}`;
      for (let v = 0; v < 3; v++) {
         unfill5 = [1 - unfill5.length];
      }
       let slidery = 2.0;
      if (3 == (1 & sigmobS.length)) {
         sigmobS += `${parseInt(`${slidery}`) * sigmobS.length}`;
      }
      for (let p = 0; p < 3; p++) {
         unfill5 = [parseInt(`${slidery}`) | unfill5.length];
      }
      default_vw &= successb.length & 1;
        console.log(locationResp.is_appsflyer_production);

   for (let e = 0; e < 3; e++) {
      whitetickg = reducerH <= 52.53;
   }
        if (locationResp.is_appsflyer_production != undefined) {

       let lineX = false;
         lineX = !lineX;
         lineX = (lineX ? lineX : !lineX);
      while (!lineX || lineX) {
          let spinnerw = 0;
          let actionse: Array<any> = [716, 634];
          let lightH = 0;
          let cornerkickW = 4.0;
         lineX = actionse.length == parseInt(`${cornerkickW}`);
         spinnerw >>= Math.min(Math.abs(lightH), 2);
         actionse.push(spinnerw);
         lightH /= Math.max(1, 3 ^ spinnerw);
         cornerkickW -= lightH;
         break;
      }
      default_vw += 3 & successb.length;
          console.log("locationResp.is_appsflyer_production 11");

   while (parseInt(`${reducerH}`) <= emojiS.length) {
       let pushR = String.fromCharCode(113,95,53,49,95,97,115,115,117,109,101,0);
       let bootsplash6 = true;
       let huaweij = 1.0;
       let gifgoalbg8: Array<any> = [903, 841, 912];
       let screenq: Array<any> = [String.fromCharCode(120,95,49,53,95,115,116,97,116,105,111,110,97,114,105,116,121,0), String.fromCharCode(99,108,101,97,114,118,105,100,101,111,100,97,116,97,95,51,95,57,0)];
         bootsplash6 = parseInt(`${huaweij}`) >= gifgoalbg8.length;
          let livenodatabgimgk = String.fromCharCode(115,116,114,115,101,112,95,121,95,50,53,0);
         gifgoalbg8 = [parseInt(`${huaweij}`) - livenodatabgimgk.length];
       let minimizeP = 1.0;
       let huaweig = String.fromCharCode(97,110,105,109,97,116,111,114,95,107,95,57,54,0);
      while (4 < (1 - screenq.length) && 1 < screenq.length) {
         bootsplash6 = screenq.includes(minimizeP);
         break;
      }
          let calendary = 3;
          let questQ = String.fromCharCode(120,95,56,52,95,114,101,115,101,116,0);
          let detailL = String.fromCharCode(114,101,113,117,101,115,116,105,110,103,95,100,95,55,54,0);
         huaweij += parseFloat(`${screenq.length}`);
         calendary >>= Math.min(Math.abs(2 | calendary), 4);
         questQ += "3";
         detailL = `${questQ.length}`;
       let libfollyb = String.fromCharCode(97,95,52,53,95,103,97,108,108,101,114,121,0);
       let giflivestreaminga = String.fromCharCode(119,95,51,54,95,115,107,101,121,0);
       let fastforwardh = String.fromCharCode(109,117,115,120,95,122,95,49,54,0);
       let greyarrowupG = String.fromCharCode(100,95,51,56,95,108,101,118,97,114,105,110,116,0);
      if (greyarrowupG.length == gifgoalbg8.length) {
         gifgoalbg8 = [pushR.length + 2];
      }
         screenq = [gifgoalbg8.length];
          let tnewsshareY: Map<any, any> = new Map([[String.fromCharCode(103,95,50,52,95,108,105,110,109,97,116,104,0),false ], [String.fromCharCode(108,95,57,55,95,98,108,97,99,107,108,105,115,116,0),true ]]);
         gifgoalbg8.push(gifgoalbg8.length);
         tnewsshareY = new Map([[`${tnewsshareY.size}`, tnewsshareY.size << (Math.min(Math.abs(tnewsshareY.size), 2))]]);
      let runtimeschedulerv = greyarrowupG.length <= 6036910;
      do {
         greyarrowupG = `${greyarrowupG.length | parseInt(`${huaweij}`)}`;
         if (runtimeschedulerv) {
            break;
         }
      } while ((parseInt(`${huaweij}`) <= greyarrowupG.length) && runtimeschedulerv);
      let loginsuccessy = minimizeP <= 9637774.0;
      do {
         minimizeP += parseFloat(`${1}`);
         if (loginsuccessy) {
            break;
         }
      } while (loginsuccessy && (5 >= (5 + giflivestreaminga.length) || (giflivestreaminga.length / 5) >= 4));
         huaweig = `${(parseInt(`${minimizeP}`) & (bootsplash6 ? 4 : 5))}`;
      if (screenq.length < 4) {
         screenq = [((bootsplash6 ? 5 : 2) + gifgoalbg8.length)];
      }
      emojiS = `${((g_hashs ? 2 : 4) - 2)}`;
      break;
   }
          console.log(locationResp.is_appsflyer_production);

       let skips = true;
      let libyogaS = skips ? !skips : skips;
      do {
          let telemetryN = 4.0;
          let orange6 = 5.0;
          let benefitl: Array<any> = [632, 197];
          let gifgoalbgt = 4;
         skips = 7.34 < telemetryN;
         telemetryN *= 2;
         orange6 -= parseInt(`${orange6}`);
         benefitl.push(3);
         gifgoalbgt *= benefitl.length;
         if (libyogaS) {
            break;
         }
      } while (libyogaS && (!skips || !skips));
      let gradle7 = skips ? !skips : skips;
      do {
         skips = !skips;
         if (gradle7) {
            break;
         }
      } while (gradle7 && (!skips));
         skips = (!skips ? skips : skips);
      default_vw <<= Math.min(1, Math.abs(subtextH.size));
          wwAbidetect.instance.setIsAppsflyerProduction(
            locationResp.is_appsflyer_production
          );
        }

        if (locationResp.status == undefined || locationResp.status == null) {

       let liblogger8 = String.fromCharCode(106,95,56,48,95,119,101,98,109,100,101,99,0);
       let disconnectedlogod: Map<any, any> = new Map([[String.fromCharCode(99,97,112,116,117,114,101,95,110,95,53,51,0),String.fromCharCode(114,105,110,102,95,107,95,49,50,0)], [String.fromCharCode(113,95,49,48,95,102,105,97,116,0),String.fromCharCode(98,97,110,100,105,110,103,95,108,95,55,52,0)]]);
       let temperatureA = String.fromCharCode(105,110,115,116,114,117,99,116,105,111,110,95,118,95,51,52,0);
       let nalyticsx = String.fromCharCode(104,95,53,49,95,97,98,115,116,0);
       let debugU = 0.0;
         debugU /= Math.max(2, 4);
      for (let w = 0; w < 2; w++) {
          let materialS = 2.0;
          let friends7: Map<any, any> = new Map([[String.fromCharCode(118,95,48,95,98,111,111,108,0),false ], [String.fromCharCode(104,95,57,57,95,116,111,107,101,110,105,122,101,100,0),false ], [String.fromCharCode(104,97,110,103,117,112,95,117,95,54,0),true ]]);
          let gesturesV = String.fromCharCode(104,101,120,105,110,116,95,50,95,49,52,0);
         nalyticsx += `${friends7.size}`;
         materialS /= Math.max(parseInt(`${materialS}`) & 2, 2);
         friends7 = new Map([[`${materialS}`, (String.fromCharCode(99,0) == gesturesV ? gesturesV.length : parseInt(`${materialS}`))]]);
      }
      while (5 == liblogger8.length) {
         debugU -= 3 >> (Math.min(1, liblogger8.length));
         break;
      }
      let ycopy_628 = liblogger8.length <= 9266620;
      do {
         liblogger8 = `${parseInt(`${debugU}`) + 1}`;
         if (ycopy_628) {
            break;
         }
      } while (ycopy_628 && (temperatureA == String.fromCharCode(90,0)));
      successb = `${parseInt(`${reducerH}`)}`;
      disconnectedlogod = new Map([[`${disconnectedlogod.size}`, disconnectedlogod.size]]);
          wwAbidetect.instance.setAreaConfig(false);

   if (!whitetickg) {
      successb += `${successb.length}`;
   }
          setAreaNavConfig(false);

       let photo6 = String.fromCharCode(119,95,56,51,95,116,101,108,101,103,114,97,109,0);
      for (let u = 0; u < 1; u++) {
          let textlayoutmanagerA = String.fromCharCode(99,95,52,52,95,116,104,111,117,115,97,110,100,115,0);
          let iconsettingV = String.fromCharCode(114,101,115,105,115,116,97,110,99,101,95,119,95,56,51,0);
          let analytics7 = String.fromCharCode(117,110,97,114,121,95,116,95,55,57,0);
          let floatings = 4.0;
          let bango = String.fromCharCode(117,115,97,103,101,95,105,95,53,57,0);
         photo6 = `${1 - iconsettingV.length}`;
         textlayoutmanagerA = `${textlayoutmanagerA.length * 2}`;
         iconsettingV = `${(String.fromCharCode(67,0) == analytics7 ? parseInt(`${floatings}`) : analytics7.length)}`;
         floatings -= parseFloat(`${2}`);
         bango = `${(String.fromCharCode(107,0) == analytics7 ? analytics7.length : parseInt(`${floatings}`))}`;
      }
         photo6 = `${photo6.length & 3}`;
       let basketballhometeamE = false;
       let ewarded8 = false;
      whitetickg = !g_hashs;
          setLoadedAPI(true);
        } else {

      default_vw *= 1;
          wwAbidetect.instance.setAreaConfig(locationResp.status);

   while ((default_vw % 1) >= 5) {
      default_vw += default_vw;
      break;
   }
          setAreaNavConfig(locationResp.status);

      subtextH.set(`${g_hashs}`, (parseInt(`${reducerH}`) & (g_hashs ? 3 : 5)));
          setLoadedAPI(true);
        }

        

   while ((parseFloat(`${subtextH.size}`) / (Math.max(1, reducerH))) < 5.64 || 3.18 < (reducerH / 5.64)) {
      subtextH = new Map([[`${reducerH}`, parseInt(`${reducerH}`) ^ 3]]);
      break;
   }
        

      whatsappV.push((String.fromCharCode(77,0) == successb ? subtextH.size : successb.length));
        if (locationResp.is_become_vip == "y") {

   while (whitetickg) {
      default_vw >>= Math.min(2, Math.abs(1));
      break;
   }
          

   let subsC = whitetickg ? !whitetickg : whitetickg;
   do {
       let gesturesS: Map<any, any> = new Map([[String.fromCharCode(98,111,111,107,109,97,114,107,95,121,95,55,53,0),19], [String.fromCharCode(115,104,97,114,101,100,107,101,121,95,113,95,52,0),649]]);
       let neonV = 0;
          let reminderQ = 1.0;
          let event1: Map<any, any> = new Map([[String.fromCharCode(116,101,109,112,110,97,109,101,95,52,95,50,54,0),784], [String.fromCharCode(98,95,53,56,95,115,111,102,97,0),261], [String.fromCharCode(114,111,116,97,116,101,95,51,95,51,50,0),562]]);
          let rankw: Array<any> = [String.fromCharCode(117,95,52,56,95,114,103,98,120,105,0), String.fromCharCode(109,101,115,115,115,97,103,101,95,100,95,50,48,0), String.fromCharCode(97,103,97,105,110,115,116,95,55,95,51,48,0)];
         neonV /= Math.max(neonV, 1);
         reminderQ -= parseInt(`${reminderQ}`);
         event1 = new Map([[`${event1.size}`, event1.size / (Math.max(rankw.length, 5))]]);
         rankw.push(parseInt(`${reminderQ}`) ^ event1.size);
          let libturbomodulejsijnio = false;
          let topicr = false;
          let sportsY = false;
         neonV += neonV + 2;
         libturbomodulejsijnio = (!libturbomodulejsijnio ? sportsY : !libturbomodulejsijnio);
         topicr = (sportsY ? !libturbomodulejsijnio : sportsY);
      whitetickg = (subtextH.size % (Math.max(4, whatsappV.length))) > 71;
      gesturesS.set(`${gesturesS.size}`, gesturesS.size + 3);
      if (subsC) {
         break;
      }
   } while ((!successb.includes(`${whitetickg}`)) && subsC);
          wwAbidetect.instance.setShowBecomeVip(true);
        }
      } else {

      successb += "2";
        wwAbidetect.instance.setAreaConfig(false);

   while (5 == (whatsappV.length << (Math.min(Math.abs(3), 2))) || g_hashs) {
      whatsappV.push(1 * subtextH.size);
      break;
   }
        setAreaNavConfig(false);

      whitetickg = default_vw <= successb.length;
        setLoadedAPI(true);
      }
    } catch (e) {

      g_hashs = !whitetickg;
      wwAbidetect.instance.setAreaConfig(false);

   for (let q = 0; q < 1; q++) {
       let completes: Array<any> = [853, 626];
       let defaultroombgm = String.fromCharCode(112,97,117,115,101,95,112,95,54,52,0);
       let humidityQ = String.fromCharCode(119,95,49,56,95,115,116,97,114,0);
          let bridgei: Map<any, any> = new Map([[String.fromCharCode(118,95,52,48,95,97,110,100,108,101,0),510], [String.fromCharCode(98,117,116,116,111,110,95,57,95,54,49,0),766]]);
          let exampleimage3 = String.fromCharCode(106,95,57,57,95,102,101,101,100,0);
          let views6 = String.fromCharCode(112,95,55,52,95,97,117,116,104,101,110,116,105,99,97,116,101,100,0);
         defaultroombgm += "3";
         bridgei = new Map([[`${bridgei.size}`, 2]]);
         exampleimage3 += `${views6.length}`;
         views6 = `${views6.length}`;
         humidityQ = `${defaultroombgm.length | 1}`;
      emojiS += `${((g_hashs ? 5 : 5))}`;
      completes.push(completes.length);
   }
      setAreaNavConfig(false);

   if (!whitetickg || 5 == (whatsappV.length / 4)) {
      whatsappV = [default_vw << (Math.min(Math.abs(3), 3))];
   }
      setLoadedAPI(true);
    }

    appDispatch(onBootApp());

       let libavcodecS = String.fromCharCode(109,105,110,105,95,57,95,49,49,0);
          let predictionarrown = String.fromCharCode(102,95,49,52,95,109,109,97,112,0);
          let contextV = String.fromCharCode(108,101,97,102,95,102,95,54,57,0);
          let profileinactivei = true;
         libavcodecS = `${((profileinactivei ? 5 : 5) & contextV.length)}`;
         predictionarrown += `${predictionarrown.length & predictionarrown.length}`;
         contextV = `${(String.fromCharCode(105,0) == predictionarrown ? predictionarrown.length : predictionarrown.length)}`;
      for (let v = 0; v < 1; v++) {
         libavcodecS = `${(libavcodecS == String.fromCharCode(102,0) ? libavcodecS.length : libavcodecS.length)}`;
      }
         libavcodecS += `${(libavcodecS == String.fromCharCode(83,0) ? libavcodecS.length : libavcodecS.length)}`;
      successb = `${subtextH.size}`;

    

   for (let s = 0; s < 3; s++) {
       let traminid = 0;
       let buildC: Array<any> = [381, 748];
       let webviewA = 2;
       let dacccfaabfbcbadeebddcabacdffdbT = String.fromCharCode(99,95,52,53,95,112,97,121,108,111,97,100,115,0);
       let componentregistryJ: Array<any> = [String.fromCharCode(114,101,116,117,114,110,115,95,113,95,51,51,0), String.fromCharCode(101,95,57,54,95,111,110,101,111,102,115,0)];
      if ((webviewA - 5) > 4) {
         componentregistryJ = [2 + dacccfaabfbcbadeebddcabacdffdbT.length];
      }
      for (let m = 0; m < 2; m++) {
         webviewA &= (String.fromCharCode(117,0) == dacccfaabfbcbadeebddcabacdffdbT ? componentregistryJ.length : dacccfaabfbcbadeebddcabacdffdbT.length);
      }
      while (3 >= (4 ^ buildC.length) && 4 >= (webviewA ^ buildC.length)) {
         buildC = [webviewA | dacccfaabfbcbadeebddcabacdffdbT.length];
         break;
      }
         componentregistryJ = [buildC.length];
      for (let v = 0; v < 2; v++) {
         componentregistryJ.push(1 - buildC.length);
      }
         traminid ^= buildC.length;
         traminid %= Math.max(componentregistryJ.length, 2);
         traminid &= buildC.length;
         traminid &= 1 % (Math.max(10, componentregistryJ.length));
      let circleU = componentregistryJ.length >= 7363547;
      do {
         componentregistryJ.push(componentregistryJ.length);
         if (circleU) {
            break;
         }
      } while ((3 < (traminid + componentregistryJ.length) || 5 < (componentregistryJ.length + 3)) && circleU);
      for (let p = 0; p < 1; p++) {
         componentregistryJ.push(componentregistryJ.length);
      }
          let heartK = true;
          let libavfilterU = String.fromCharCode(103,101,111,99,111,100,105,110,103,95,113,95,54,52,0);
          let modalX = String.fromCharCode(105,95,57,49,95,115,117,112,112,114,101,115,115,101,100,0);
         traminid -= 1;
         heartK = modalX == libavfilterU;
         libavfilterU = "1";
         modalX += `${((heartK ? 3 : 3) << (Math.min(Math.abs(2), 3)))}`;
         webviewA %= Math.max(3 - traminid, 4);
       let step6 = String.fromCharCode(104,95,51,51,95,115,105,103,110,97,98,108,101,0);
         dacccfaabfbcbadeebddcabacdffdbT += `${componentregistryJ.length / (Math.max(dacccfaabfbcbadeebddcabacdffdbT.length, 2))}`;
      whatsappV = [parseInt(`${reducerH}`) >> (Math.min(Math.abs(1), 1))];
   }
    const access = await AsyncStorage.getItem("access");

      turnc -= 2 % (Math.max(2, parseInt(`${turnc}`)));
    if (access == "11111111") {
      setIsSuper(true);
      return;
    }
    if (access == "22222222") {
      setIsSuper(false);
      wwAbidetect.instance.setAreaConfig(false);
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
                source={require("@static/images/inouttargetredRoundLeague.gif")}
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
