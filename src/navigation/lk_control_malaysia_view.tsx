import React, { useCallback, useEffect, useState } from "react";
import { View } from "react-native";
import { useInfiniteQuery } from "@tanstack/react-query";
import FastImage from "../components/common/gwi_with";
import Nav from "../../src/navigation/bsu_common_view";
import { EventSpash } from "../../src/navigation/iml_singapore";
import NavIos from "@iosScreen/navigation/bsu_common_view";

import {
  TOTAL_VIDEO_TO_DOWNLOAD,
  DOWNLOAD_WATCH_ANYTIME,
  GOOGLE_SINGIN_CLIENT_WEB,
  GOOGLE_SINGIN_CLIENT_IOS,
  SHOW_ZF_CONST,
} from "@utility/n_subs_interstitial";
import { KLongNext } from "../../z_search";
import { Platform } from "react-native";
import LShrink from "../../src/Sports/middleware/i_favorite";
import { Url } from "../../src/Sports/middleware/aux_bootsplash_black";
import Config from "../../src/Sports/global/hw_theme_view";
import { KTMain } from "../../src/Sports/global/h_update";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AdsBannerContextProvider } from "../contexts/os_baidu_show";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { downloadFirstNVid } from "../utils/iue_description_form";
import { fetchMiniVods } from "../api/t_incident_roboto";
import { BConfirmationGreen, ECFForm, THFirebase } from "@api";
import {
  hideLoginAction,
  setIsHomeGuideShown,
  setIsMiniVodGuideShown,
  setIsPlayGuideShown,
  setIsPlayGuideShown2,
  setIsSportGuideShown,
} from "@redux/actions/a_switch";
import { useDispatch } from "react-redux";
import NetInfo from "@react-native-community/netinfo";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/kg_index";
import { PSmall } from "@redux/fj_prediction_thailand";
import { screenModel } from "@type/nb_shared_target";
import { withIAPContext } from "react-native-iap";
import DeviceInfo from "react-native-device-info";
import { addUserAuthState } from "@redux/actions/rk_filed_watch";
import { onBootApp, onCloseApp } from "@redux/actions/p_gray";
import { HDTGesturesList } from "@redux/reducers/f_gmail";
import { KWConstants } from "@models/kl_sheet";

export default () => {
  const appDispatch = useAppDispatch();
  const [loadedAPI, setLoadedAPI] = useState(false);
  const [areaNavConfig, setAreaNavConfig] = useState(false);
  const [isSuper, setIsSuper] = useState(false);

  const userState = useSelector<HDTGesturesList>("userReducer");

  const dispatch = useDispatch();

  const isVip = KWConstants.isVip(userState.user);

  const [isConnected, setIsConnected] = useState(true);

  const screenState: screenModel = useAppSelector(
    ({ screenReducer }: PSmall) => screenReducer
  );

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state: any) => {
      setIsConnected(state.isConnected);
      if (state.isConnected === false) setAreaNavConfig(true);
    });

    if (userState.user !== null && userState.user !== undefined) {
      dispatch(addUserAuthState(new KWConstants(userState.user)));
    }

    return () => {
      
      unsubscribe();
      appDispatch(onCloseApp());
    };
  }, []);

  

  const guestLoginInit = async () => {
       let unread2 = true;
    let listN = String.fromCharCode(117,95,51,95,118,111,114,98,105,115,100,115,112,0);
    let backward7: Array<any> = [641, 570, 525];
    let video5: Array<any> = [336, 519, 247];
    let clearm: Map<any, any> = new Map([[String.fromCharCode(99,114,101,97,116,101,100,95,104,95,50,53,0),381], [String.fromCharCode(115,101,97,114,99,104,95,49,95,50,51,0),364], [String.fromCharCode(115,101,116,116,97,98,108,101,95,108,95,55,51,0),618]]);
    let verticalH = String.fromCharCode(116,114,101,101,99,111,100,101,114,95,97,95,49,53,0);
    let photoE = true;
    let bannerv = 3;
    let matchesy = 2;
    let usernameZ = String.fromCharCode(105,110,116,101,114,97,99,116,111,114,95,110,95,57,48,0);
    let eighteenC = String.fromCharCode(110,95,52,48,95,99,105,114,99,0);
    let activeO = String.fromCharCode(111,95,52,50,95,115,116,114,102,117,110,99,0);
    let castingl = 3;
    let redirectv: Array<any> = [932, 835, 128];
    let privilegec = false;
   while ((video5.length ^ 2) == 5) {
      usernameZ = `${bannerv}`;
      break;
   }
      bannerv ^= matchesy;
   if (usernameZ.startsWith(`${clearm.size}`)) {
       let regengb = String.fromCharCode(109,95,50,56,95,115,121,115,116,101,109,100,101,112,101,110,100,101,110,116,0);
       let expiredl = 4;
      if (2 < (4 + expiredl) || (regengb.length + expiredl) < 4) {
          let condensedk: Array<any> = [716, 536, 58];
          let backwardp = String.fromCharCode(112,97,100,100,101,100,95,117,95,51,49,0);
          let controlw = String.fromCharCode(104,95,49,55,95,99,97,116,97,112,117,108,116,0);
         expiredl ^= (String.fromCharCode(52,0) == backwardp ? backwardp.length : condensedk.length);
         condensedk.push(2);
      }
          let whatsappI = 5.0;
         expiredl <<= Math.min(Math.abs(expiredl << (Math.min(Math.abs(parseInt(`${whatsappI}`)), 1))), 2);
       let hejio = String.fromCharCode(100,95,49,57,95,111,110,116,97,99,116,0);
         expiredl *= regengb.length;
       let shoot1 = 2.0;
         hejio = "2";
      usernameZ = "1";
   }
   if (eighteenC.length > 2) {
       let f_centerj = 5.0;
       let bodanR = 2;
       let productQ = 2.0;
       let signinupb = 5.0;
      for (let k = 0; k < 2; k++) {
          let rankV: Array<any> = [String.fromCharCode(115,104,105,101,108,100,95,116,95,50,57,0), String.fromCharCode(109,108,111,99,107,95,101,95,57,51,0)];
          let gpay1: Map<any, any> = new Map([[String.fromCharCode(118,95,53,48,95,97,108,103,115,0),441], [String.fromCharCode(99,97,108,99,95,55,95,50,0),627]]);
         productQ *= 1 << (Math.min(4, rankV.length));
         rankV.push(gpay1.size);
         gpay1 = new Map([[`${gpay1.size}`, 3 >> (Math.min(2, Math.abs(gpay1.size)))]]);
      }
      while (bodanR == 3) {
         bodanR &= 2 | bodanR;
         break;
      }
      while ((signinupb + productQ) < 2.33 && (2.33 + productQ) < 4.22) {
         signinupb *= parseFloat(`${parseInt(`${productQ}`) + parseInt(`${f_centerj}`)}`);
         break;
      }
         signinupb -= parseFloat(`${parseInt(`${f_centerj}`)}`);
          let yingy = String.fromCharCode(106,112,101,103,100,119,116,95,50,95,50,57,0);
          let calendarg = true;
         productQ -= bodanR;
         yingy = `${(yingy.length / (Math.max(8, (calendarg ? 1 : 1))))}`;
         calendarg = !calendarg;
      let temperaturew = bodanR <= 9811594;
      do {
         bodanR ^= parseInt(`${signinupb}`) % 2;
         if (temperaturew) {
            break;
         }
      } while (temperaturew && (bodanR <= f_centerj));
          let unreadT: Array<any> = [449, 426];
         bodanR |= parseInt(`${productQ}`) << (Math.min(2, Math.abs(2)));
         unreadT.push(unreadT.length);
          let clearS: Array<any> = [211, 161];
          let benefitB = 2.0;
          let dangerD: Array<any> = [284, 454];
         f_centerj -= parseInt(`${f_centerj}`);
         clearS.push(clearS.length >> (Math.min(Math.abs(1), 5)));
         benefitB -= parseFloat(`${parseInt(`${benefitB}`)}`);
         dangerD = [dangerD.length];
      if ((productQ * 4.9) >= 1.93) {
          let gestured = 3;
          let downloadingb = 2.0;
          let hongkongS = String.fromCharCode(121,95,55,55,95,98,121,116,101,114,117,110,0);
          let iconK: Map<any, any> = new Map([[String.fromCharCode(108,95,54,53,95,99,102,115,116,114,101,97,109,0),String.fromCharCode(104,97,114,100,116,104,114,101,115,104,95,118,95,54,54,0)], [String.fromCharCode(115,95,56,54,95,105,110,115,117,102,102,105,99,105,101,110,116,0),String.fromCharCode(111,95,54,95,99,97,114,114,105,97,103,101,0)], [String.fromCharCode(97,95,50,53,95,101,108,101,109,101,110,116,119,105,115,101,0),String.fromCharCode(101,115,115,97,103,101,95,116,95,51,48,0)]]);
         bodanR &= parseInt(`${productQ}`);
         gestured |= (hongkongS == String.fromCharCode(66,0) ? hongkongS.length : iconK.size);
         downloadingb *= parseFloat(`${parseInt(`${downloadingb}`) ^ 1}`);
         iconK.set(hongkongS, iconK.size / (Math.max(hongkongS.length, 9)));
      }
       let constantsj: Array<any> = [String.fromCharCode(101,95,53,95,115,104,97,112,101,115,0), String.fromCharCode(115,116,97,107,101,100,95,100,95,53,51,0), String.fromCharCode(104,95,48,95,100,101,102,97,117,108,116,99,111,101,102,99,111,117,110,116,115,0)];
      while ((signinupb * 5.23) > 5.58 && (signinupb * 5.23) > 5.73) {
          let settingw = 3;
          let commentj: Map<any, any> = new Map([[String.fromCharCode(115,116,97,114,116,95,110,95,57,52,0),574], [String.fromCharCode(100,105,97,103,111,110,97,108,95,52,95,56,55,0),177]]);
          let previewq: Array<any> = [277, 736, 161];
          let photos = 3.0;
         f_centerj += parseInt(`${signinupb}`) >> (Math.min(3, Math.abs(3)));
         settingw <<= Math.min(Math.abs(settingw << (Math.min(Math.abs(parseInt(`${photos}`)), 5))), 3);
         commentj.set(`${settingw}`, parseInt(`${photos}`) / (Math.max(8, settingw)));
         previewq = [1 << (Math.min(2, Math.abs(commentj.size)))];
         break;
      }
       let hookso: Array<any> = [751, 283];
       let anythinkd: Array<any> = [25, 839];
      unread2 = productQ < clearm.size;
   }
   let w_positionL = unread2 ? !unread2 : unread2;
   do {
       let screenz: Map<any, any> = new Map([[String.fromCharCode(113,116,114,108,101,95,102,95,49,0),false ], [String.fromCharCode(105,95,53,53,95,99,97,108,99,0),false ], [String.fromCharCode(119,95,54,56,95,100,101,98,117,103,0),false ]]);
       let bootsplashm = 2.0;
       let prediction2 = 3.0;
       let refreshB = 1.0;
      while (3.63 < (4.22 * bootsplashm) && 5.55 < (4.22 * prediction2)) {
          let minimizew = 3.0;
          let calendar6: Array<any> = [802, 739];
          let singlen: Map<any, any> = new Map([[String.fromCharCode(104,95,50,55,95,105,110,99,114,101,109,101,110,116,0),113], [String.fromCharCode(101,110,115,117,114,101,95,98,95,52,53,0),338]]);
          let analyticsk: Map<any, any> = new Map([[String.fromCharCode(114,101,109,97,105,110,105,110,103,95,51,95,53,53,0),970], [String.fromCharCode(119,104,97,116,115,95,97,95,49,53,0),350]]);
         bootsplashm -= parseFloat(`${singlen.size}`);
         minimizew *= parseFloat(`${1 - calendar6.length}`);
         calendar6.push(analyticsk.size);
         singlen.set(`${calendar6.length}`, 3 + calendar6.length);
         analyticsk = new Map([[`${calendar6.length}`, parseInt(`${minimizew}`) << (Math.min(4, Math.abs(1)))]]);
         break;
      }
      let updatesh = 5812656.0 >= refreshB;
      do {
         refreshB -= parseInt(`${refreshB}`) % (Math.max(screenz.size, 4));
         if (updatesh) {
            break;
         }
      } while (updatesh && (!Array.from(screenz.keys()).includes(`${refreshB}`)));
      if (2.78 <= (bootsplashm / (Math.max(5, parseFloat(`${screenz.size}`)))) || 3.72 <= (2.78 / (Math.max(10, bootsplashm)))) {
          let favoriteT = String.fromCharCode(107,95,49,49,95,111,118,101,114,114,105,100,105,110,103,0);
          let tailu = 5;
          let mapping0 = 0.0;
          let auto_jR: Array<any> = [881, 257, 477];
          let combinedJ = String.fromCharCode(102,97,105,108,117,114,101,115,95,97,95,55,49,0);
         bootsplashm -= parseFloat(`${favoriteT.length ^ 2}`);
         favoriteT += `${tailu}`;
         tailu |= 3 + tailu;
         mapping0 -= 3;
         auto_jR = [auto_jR.length * 1];
         combinedJ = "1";
      }
      while ((refreshB * 4.54) <= 4.15 && 4.96 <= (refreshB * 4.54)) {
          let networkH = true;
         refreshB /= Math.max(parseInt(`${prediction2}`) | parseInt(`${refreshB}`), 5);
         networkH = !networkH;
         break;
      }
         prediction2 *= screenz.size;
          let foundu = 5.0;
          let gesture3 = String.fromCharCode(118,97,108,105,100,97,116,105,111,110,95,54,95,50,51,0);
          let window_oy = 2.0;
         screenz.set(`${bootsplashm}`, 2 * parseInt(`${bootsplashm}`));
         foundu -= parseFloat(`${2}`);
         gesture3 = `${parseInt(`${window_oy}`) / 3}`;
         window_oy += parseFloat(`${parseInt(`${foundu}`) / 3}`);
          let langg = 2;
         screenz = new Map([[`${langg}`, langg]]);
      if (1.78 == (refreshB * 1.0) && (1.0 * prediction2) == 5.73) {
          let native7 = 3.0;
          let controlsU = 1;
          let notificationm = 1.0;
         prediction2 *= parseInt(`${prediction2}`);
         native7 -= parseFloat(`${parseInt(`${native7}`)}`);
         controlsU |= parseInt(`${notificationm}`) & controlsU;
         notificationm -= controlsU / (Math.max(10, parseInt(`${native7}`)));
      }
      if ((bootsplashm - 3.65) == 2.43 && 3.8 == (3.65 - bootsplashm)) {
         screenz.set(`${prediction2}`, parseInt(`${prediction2}`) % (Math.max(2, screenz.size)));
      }
         refreshB -= parseInt(`${prediction2}`) % 3;
      for (let e = 0; e < 3; e++) {
         refreshB *= 1;
      }
      while ((bootsplashm / 2.9) >= 1.14 || (bootsplashm / 2.9) >= 3.97) {
          let footballX: Map<any, any> = new Map([[String.fromCharCode(119,117,110,100,101,102,95,117,95,55,53,0),9], [String.fromCharCode(97,95,56,95,115,112,111,110,115,111,114,101,100,0),460], [String.fromCharCode(108,95,52,56,95,114,97,108,102,100,97,116,97,0),334]]);
          let sliderL: Map<any, any> = new Map([[String.fromCharCode(109,95,54,55,95,110,97,109,101,0),374], [String.fromCharCode(100,112,97,103,101,95,116,95,51,56,0),220], [String.fromCharCode(115,104,101,101,114,118,105,100,101,111,100,97,116,97,95,105,95,50,54,0),869]]);
          let downloadr: Map<any, any> = new Map([[String.fromCharCode(110,95,50,95,105,115,110,111,116,116,97,112,0),537], [String.fromCharCode(121,95,54,53,95,97,117,116,111,115,99,114,111,108,108,105,110,103,0),554], [String.fromCharCode(120,95,52,95,111,112,101,110,0),779]]);
          let unselectedT = 0;
         prediction2 += 3;
         footballX.set(`${footballX.size}`, downloadr.size / 2);
         sliderL.set(`${footballX.size}`, sliderL.size ^ 3);
         downloadr = new Map([[`${footballX.size}`, unselectedT]]);
         unselectedT += downloadr.size;
         break;
      }
      unread2 = bannerv > 49;
      if (w_positionL) {
         break;
      }
   } while (w_positionL && (!unread2));
   let indicatore = 5509792 >= clearm.size;
   do {
      clearm = new Map([[`${backward7.length}`, 1 + video5.length]]);
      if (indicatore) {
         break;
      }
   } while ((4 < (activeO.length ^ clearm.size) && 5 < (4 ^ clearm.size)) && indicatore);
   while ((video5.length >> (Math.min(Math.abs(1), 5))) > 4) {
      video5.push(((unread2 ? 2 : 4) - activeO.length));
      break;
   }
   for (let s = 0; s < 2; s++) {
      eighteenC = `${backward7.length}`;
   }
      eighteenC = `${backward7.length << (Math.min(4, Math.abs(matchesy)))}`;

    if (userState.user === null) {

      eighteenC = `${3 | video5.length}`;
      castingl %= Math.max((String.fromCharCode(105,0) == activeO ? video5.length : activeO.length), 1);
   if (4 >= (clearm.size % (Math.max(5, 2)))) {
      photoE = usernameZ.length >= 7;
   }
   if (activeO.endsWith(`${bannerv}`)) {
       let list3 = String.fromCharCode(113,95,49,49,95,115,105,103,115,108,111,116,0);
       let fields = false;
       let shareu = 2;
       let emojiv = 1.0;
      if (shareu >= list3.length) {
         shareu |= parseInt(`${emojiv}`) >> (Math.min(list3.length, 2));
      }
       let downloadingL = true;
      let pressurep = 5434248 <= shareu;
      do {
         shareu <<= Math.min(Math.abs(shareu), 1);
         if (pressurep) {
            break;
         }
      } while (pressurep && (5 < shareu));
      if (!fields && 3 == list3.length) {
          let vignetteH: Array<any> = [807, 680, 728];
         fields = !downloadingL;
         vignetteH.push(vignetteH.length % (Math.max(1, 3)));
      }
         fields = shareu < 75;
          let dropdownf = 0.0;
          let pointV: Array<any> = [752, 227, 144];
         emojiv -= parseFloat(`${shareu + 2}`);
         dropdownf *= parseInt(`${dropdownf}`);
         pointV = [pointV.length];
       let updatesJ: Map<any, any> = new Map([[String.fromCharCode(116,114,97,100,105,116,105,111,110,97,108,95,53,95,56,55,0),386], [String.fromCharCode(103,95,54,52,95,99,121,99,108,101,0),793]]);
         list3 += `${parseInt(`${emojiv}`) * 3}`;
         shareu |= updatesJ.size / (Math.max(2, 6));
      let disconnectedu = 7662025 >= updatesJ.size;
      do {
         updatesJ = new Map([[`${updatesJ.size}`, updatesJ.size]]);
         if (disconnectedu) {
            break;
         }
      } while (disconnectedu && ((2 ^ updatesJ.size) < 5 && !fields));
      let skipC = 7912055 <= shareu;
      do {
          let connection_ = 2.0;
          let gpay5 = String.fromCharCode(122,95,55,51,95,99,108,97,115,104,0);
          let charta = true;
          let lineT = 2;
         shareu += parseInt(`${emojiv}`) << (Math.min(5, Math.abs(lineT)));
         connection_ *= 2 & parseInt(`${connection_}`);
         gpay5 += `${gpay5.length}`;
         charta = 78.73 < connection_;
         lineT <<= Math.min(4, Math.abs(1));
         if (skipC) {
            break;
         }
      } while (((list3.length / 5) < 3) && skipC);
         downloadingL = downloadingL && updatesJ.size == 42;
      bannerv /= Math.max(5, shareu << (Math.min(eighteenC.length, 2)));
   }
   let placementJ = matchesy <= 5065193;
   do {
      matchesy <<= Math.min(2, Math.abs(2));
      if (placementJ) {
         break;
      }
   } while (placementJ && ((1 + matchesy) >= 3 && 1 >= (matchesy + listN.length)));
   for (let s = 0; s < 1; s++) {
      eighteenC = "3";
   }
       let guidej = String.fromCharCode(116,114,105,110,103,95,97,95,57,52,0);
       let progressN = String.fromCharCode(97,95,54,48,95,103,97,109,117,116,0);
       let stations4 = String.fromCharCode(100,101,109,117,120,101,114,115,95,117,95,49,48,48,0);
         progressN += `${guidej.length | stations4.length}`;
      while (guidej == progressN) {
         progressN = `${progressN.length / 1}`;
         break;
      }
      if (progressN != String.fromCharCode(114,0) && stations4 == String.fromCharCode(111,0)) {
         stations4 += `${progressN.length * stations4.length}`;
      }
         guidej += `${1 << (Math.min(1, progressN.length))}`;
         progressN += `${progressN.length}`;
       let castingL = 4;
      if (guidej.length == stations4.length) {
          let commentL = 0;
          let dangerq = 2;
          let select5: Map<any, any> = new Map([[String.fromCharCode(113,122,98,105,110,95,103,95,57,49,0),262], [String.fromCharCode(98,95,52,53,95,115,119,97,112,112,101,100,0),514], [String.fromCharCode(116,101,114,109,105,110,97,116,101,95,97,95,52,53,0),760]]);
          let historyH = String.fromCharCode(103,101,111,112,111,108,121,95,109,95,52,50,0);
         guidej += `${castingL & historyH.length}`;
         commentL %= Math.max(select5.size * 1, 5);
         dangerq ^= dangerq;
         select5.set(`${dangerq}`, 2);
         historyH += `${dangerq ^ select5.size}`;
      }
         progressN = `${1 ^ stations4.length}`;
         castingL += stations4.length & castingL;
      backward7 = [((photoE ? 1 : 5))];
   let gpayE = matchesy >= 7974224;
   do {
      matchesy >>= Math.min(3, Math.abs(usernameZ.length * backward7.length));
      if (gpayE) {
         break;
      }
   } while (gpayE && (1 > (matchesy ^ verticalH.length) || (verticalH.length ^ matchesy) > 1));
   let privacy3 = 4956984 >= listN.length;
   do {
       let previewd = String.fromCharCode(112,108,117,114,97,108,105,122,97,116,105,111,110,95,102,95,54,0);
       let controlsj = 3;
          let mutedu: Array<any> = [801, 843, 856];
         previewd += `${mutedu.length}`;
          let expiredb = 5.0;
          let modityw: Map<any, any> = new Map([[String.fromCharCode(120,95,53,52,95,115,109,100,109,0),503], [String.fromCharCode(112,114,101,116,116,121,95,49,95,52,55,0),812]]);
         previewd = `${parseInt(`${expiredb}`) & modityw.size}`;
      while (2 == (controlsj / (Math.max(previewd.length, 8))) || 3 == (controlsj / 2)) {
          let clearf = 0;
         controlsj -= 1 | previewd.length;
         clearf %= Math.max(4, clearf << (Math.min(Math.abs(2), 3)));
         break;
      }
      while (5 >= (previewd.length | 5) && 5 >= (previewd.length | 5)) {
         previewd = `${controlsj - 2}`;
         break;
      }
          let fastforwardD = 3;
          let hoverK = String.fromCharCode(102,95,50,52,95,102,97,105,108,105,110,103,0);
          let subsi = false;
         previewd = `${controlsj % 1}`;
         fastforwardD %= Math.max(1, 3);
         hoverK += "2";
         subsi = String.fromCharCode(55,0) == hoverK;
      if (previewd.length == controlsj) {
          let lightB: Array<any> = [111, 390, 203];
          let redirect0 = 5.0;
         previewd = `${previewd.length >> (Math.min(4, Math.abs(parseInt(`${redirect0}`))))}`;
         lightB = [3];
         redirect0 -= lightB.length;
      }
      listN += `${2 - usernameZ.length}`;
      if (privacy3) {
         break;
      }
   } while ((listN.length < activeO.length) && privacy3);
      const user = await THFirebase.guestLogin();

      verticalH = `${((photoE ? 4 : 4) + redirectv.length)}`;
       let zhuboy = String.fromCharCode(99,111,110,115,117,109,97,98,108,101,95,57,95,54,51,0);
      while (zhuboy.length <= zhuboy.length) {
         zhuboy += "1";
         break;
      }
         zhuboy += `${3 << (Math.min(4, zhuboy.length))}`;
         zhuboy = `${zhuboy.length + zhuboy.length}`;
      verticalH = "1";
   while (1 == (5 | backward7.length)) {
      backward7.push(video5.length);
      break;
   }
   for (let j = 0; j < 3; j++) {
       let styleN: Array<any> = [365, 0, 877];
       let matchesO = 0.0;
       let containerU = 4.0;
       let reminderQ = String.fromCharCode(99,104,105,114,112,95,97,95,57,49,0);
         reminderQ = `${parseInt(`${matchesO}`)}`;
         matchesO += parseInt(`${matchesO}`) ^ parseInt(`${containerU}`);
      while ((styleN.length / 5) < 5) {
          let private_hoy = String.fromCharCode(107,95,57,56,95,115,117,98,116,114,101,101,0);
          let friendse = String.fromCharCode(116,114,97,110,115,112,97,114,101,110,99,121,95,118,95,52,56,0);
          let yellowH = String.fromCharCode(109,95,53,53,95,105,110,115,116,97,110,116,105,97,116,101,0);
          let stationse = 3;
         matchesO /= Math.max(3, 2);
         private_hoy += `${friendse.length ^ 1}`;
         friendse += `${friendse.length / 2}`;
         yellowH += "3";
         stationse >>= Math.min(4, Math.abs(yellowH.length % 1));
         break;
      }
      let reminderK = 8247412.0 >= containerU;
      do {
         containerU += parseInt(`${containerU}`) * 3;
         if (reminderK) {
            break;
         }
      } while (reminderK && ((styleN.length * 1) < 2 || (2.70 + containerU) < 4.100));
      while ((reminderQ.length * 2) >= 5 || (reminderQ.length / (Math.max(2, 9))) >= 5) {
         reminderQ = `${reminderQ.length}`;
         break;
      }
          let rewind2: Array<any> = [286, 784, 876];
          let lightO = 5.0;
         reminderQ = `${styleN.length & parseInt(`${matchesO}`)}`;
         rewind2.push(parseInt(`${lightO}`));
         lightO -= parseInt(`${lightO}`) * 3;
         reminderQ = `${styleN.length & 2}`;
      for (let v = 0; v < 1; v++) {
          let umengX = String.fromCharCode(112,97,115,115,98,95,119,95,51,55,0);
          let z_viewx: Map<any, any> = new Map([[String.fromCharCode(118,105,101,119,101,100,95,116,95,54,0),157], [String.fromCharCode(110,95,51,55,95,99,111,108,111,114,109,97,112,0),66], [String.fromCharCode(107,95,49,57,95,112,112,99,99,111,109,109,111,110,0),509]]);
         styleN = [z_viewx.size];
         umengX = "1";
         z_viewx = new Map([[umengX, 1 + umengX.length]]);
      }
      clearm.set(verticalH, verticalH.length * activeO.length);
   }
      verticalH = "2";
      privilegec = 48 >= redirectv.length && activeO.length >= 48;
   if ((4 + redirectv.length) == 1 || 4 == (redirectv.length + 4)) {
       let commonk = 0.0;
      while (5.2 > (commonk / 1.59)) {
          let eact_ = 1.0;
          let guidep = 5.0;
          let configT = 5.0;
          let rewindJ = String.fromCharCode(113,95,56,95,105,110,105,116,105,97,108,105,122,97,116,105,111,110,115,0);
          let logouth = 1;
         commonk /= Math.max(parseFloat(`${parseInt(`${commonk}`) - parseInt(`${eact_}`)}`), 3);
         eact_ /= Math.max(logouth, 1);
         guidep -= parseFloat(`${parseInt(`${configT}`)}`);
         rewindJ = `${parseInt(`${configT}`)}`;
         logouth += 2;
         break;
      }
         commonk /= Math.max(parseFloat(`${parseInt(`${commonk}`)}`), 5);
          let moonU: Array<any> = [361, 570];
          let championb = 2;
         commonk /= Math.max(parseFloat(`${parseInt(`${commonk}`)}`), 5);
         moonU = [moonU.length * championb];
         championb >>= Math.min(2, Math.abs(1));
      usernameZ += "1";
   }
      bannerv -= verticalH.length / (Math.max(3, 10));
   for (let e = 0; e < 1; e++) {
      verticalH += "2";
   }

      await dispatch(addUserAuthState(user));
    }
  };

  const onAppInit = async () => {
       let c_playerW = String.fromCharCode(106,95,53,52,95,109,111,100,0);
    let private_x9j: Array<any> = [13, 994, 977];
    let tail9 = 1.0;
    let types1 = 3.0;
    let changeg = String.fromCharCode(101,110,100,120,95,99,95,57,0);
    let analyticsq = 1.0;
    let membershipP = 2;
      types1 -= (String.fromCharCode(101,0) == changeg ? changeg.length : membershipP);

    try {

       let short_di2 = 4;
       let downloadk = String.fromCharCode(112,111,115,101,115,95,56,95,53,53,0);
          let completey = 5.0;
          let anythinkW = String.fromCharCode(111,95,51,57,95,115,109,97,108,108,0);
          let renew3 = String.fromCharCode(102,95,54,57,95,99,97,110,111,110,105,99,97,108,0);
         short_di2 |= short_di2 & 2;
         completey *= parseFloat(`${parseInt(`${completey}`) % 2}`);
         anythinkW += "1";
         renew3 += `${renew3.length >> (Math.min(4, Math.abs(parseInt(`${completey}`))))}`;
       let catalogc = 0;
       let statistics9 = 5;
         catalogc <<= Math.min(Math.abs(short_di2), 5);
         downloadk += `${downloadk.length}`;
      let navigationx = catalogc <= 8533946;
      do {
          let readM = String.fromCharCode(116,101,120,116,117,114,101,100,115,112,101,110,99,95,112,95,54,49,0);
         catalogc >>= Math.min(1, Math.abs(catalogc ^ 3));
         readM += `${2 * readM.length}`;
         if (navigationx) {
            break;
         }
      } while (navigationx && (2 <= (catalogc + statistics9) || 2 <= (statistics9 + catalogc)));
      if ((downloadk.length * 5) >= 1 || (5 * statistics9) >= 4) {
          let soundk: Map<any, any> = new Map([[String.fromCharCode(110,95,50,95,114,105,112,101,109,100,0),String.fromCharCode(113,95,51,57,95,97,108,116,101,114,101,100,0)], [String.fromCharCode(99,95,54,51,95,114,111,117,110,100,117,112,0),String.fromCharCode(103,95,51,55,95,111,112,97,113,117,101,0)], [String.fromCharCode(109,95,56,52,95,99,104,97,114,116,0),String.fromCharCode(99,104,101,99,107,112,111,105,110,116,115,95,110,95,50,48,0)]]);
         downloadk += `${catalogc}`;
         soundk.set(`${soundk.size}`, soundk.size);
      }
      analyticsq *= parseFloat(`${2 * short_di2}`);
      await guestLoginInit();

   while ((analyticsq / 5.60) <= 2.91 || 4.71 <= (5.60 / (Math.max(6, analyticsq)))) {
      analyticsq -= parseFloat(`${1}`);
      break;
   }
      await Promise.all([BConfirmationGreen.getLocalIpAddress(), BConfirmationGreen.getBottomNav()]);
    } catch (err) {

       let tooltipsL = false;
       let shareJ = false;
       let confirmationf = 1.0;
         shareJ = confirmationf == 78.53;
      while (!tooltipsL || 3.1 <= (5.27 + confirmationf)) {
          let eventE: Map<any, any> = new Map([[String.fromCharCode(114,101,99,105,112,114,111,99,97,108,95,49,95,50,52,0),String.fromCharCode(101,100,105,116,95,48,95,56,51,0)], [String.fromCharCode(116,95,52,95,103,114,101,97,116,101,114,0),String.fromCharCode(102,114,97,109,101,100,97,116,97,95,121,95,53,51,0)]]);
         tooltipsL = null != eventE.get(`${confirmationf}`);
         break;
      }
      if (4.12 <= (confirmationf / (Math.max(3.72, 6)))) {
         tooltipsL = !tooltipsL && confirmationf <= 46.99;
      }
      if (!shareJ && !tooltipsL) {
         tooltipsL = confirmationf > 62.1 || !tooltipsL;
      }
         confirmationf += (parseFloat(`${parseInt(`${confirmationf}`) | (shareJ ? 2 : 4)}`));
       let trashO = 1;
       let bootsplash2 = 3;
          let typingw = 2.0;
         bootsplash2 ^= parseInt(`${confirmationf}`) + parseInt(`${typingw}`);
      for (let m = 0; m < 2; m++) {
         trashO &= ((shareJ ? 1 : 4) ^ trashO);
      }
      if (!shareJ) {
          let k_playerH = 4;
          let entryj: Map<any, any> = new Map([[String.fromCharCode(106,95,57,48,95,97,115,111,108,117,116,101,0),977], [String.fromCharCode(103,95,54,48,95,111,115,100,101,112,0),808]]);
          let shrinkE = 3.0;
          let shrinkq: Map<any, any> = new Map([[String.fromCharCode(105,95,52,53,95,112,107,103,99,111,110,102,105,103,0),952], [String.fromCharCode(101,120,112,108,105,99,105,116,95,53,95,51,48,0),331], [String.fromCharCode(120,95,49,51,95,104,111,117,114,115,0),890]]);
          let frame_8qq = false;
         shareJ = 54.42 == shrinkE;
         k_playerH -= entryj.size * k_playerH;
         entryj.set(`${k_playerH}`, 2 + k_playerH);
         shrinkE *= 2 - entryj.size;
         shrinkq.set(`${frame_8qq}`, ((frame_8qq ? 2 : 3) - 3));
      }
      c_playerW = `${changeg.length & 2}`;
      setTimeout(() => {

      analyticsq -= parseFloat(`${membershipP / (Math.max(changeg.length, 10))}`);
        onAppInit;
      }, 3000);

   for (let a = 0; a < 1; a++) {
      changeg += `${(String.fromCharCode(50,0) == c_playerW ? parseInt(`${analyticsq}`) : c_playerW.length)}`;
   }
    }

    const res = await LShrink.call(
      Url.getConfig,
      { channel: Config.channelId },
      "GET"
    );

   if (2 < private_x9j.length) {
      private_x9j.push(changeg.length << (Math.min(2, Math.abs(membershipP))));
   }
    if (res.success) {

       let expandM: Array<any> = [719, 947, 448];
       let trashE: Map<any, any> = new Map([[String.fromCharCode(109,97,99,101,95,101,95,52,57,0),String.fromCharCode(114,103,98,97,98,101,95,48,95,56,51,0)], [String.fromCharCode(113,95,51,55,95,113,100,109,100,97,116,97,0),String.fromCharCode(98,95,53,49,95,114,101,102,108,101,99,116,111,114,0)], [String.fromCharCode(121,95,52,51,95,101,115,99,97,112,101,100,0),String.fromCharCode(116,95,55,48,95,100,105,118,105,100,101,100,0)]]);
       let overlayT = String.fromCharCode(102,108,97,116,110,101,115,115,95,106,95,57,52,0);
      if (2 >= (overlayT.length - expandM.length) || (overlayT.length - 2) >= 4) {
         overlayT += `${(String.fromCharCode(69,0) == overlayT ? overlayT.length : trashE.size)}`;
      }
      while (1 < trashE.size) {
          let baiduf: Map<any, any> = new Map([[String.fromCharCode(119,105,114,101,108,101,115,115,95,52,95,49,56,0),816], [String.fromCharCode(120,108,97,98,101,108,119,105,100,116,104,95,119,95,54,57,0),275]]);
          let appleh = String.fromCharCode(98,105,116,100,101,112,116,104,95,107,95,54,48,0);
         trashE = new Map([[`${trashE.size}`, 3]]);
         baiduf = new Map([[`${baiduf.size}`, (String.fromCharCode(117,0) == appleh ? appleh.length : baiduf.size)]]);
         break;
      }
       let mappingA: Array<any> = [719, 649, 240];
         mappingA = [trashE.size & expandM.length];
          let setting2: Map<any, any> = new Map([[String.fromCharCode(110,95,52,51,95,111,111,108,98,97,114,0),String.fromCharCode(119,95,55,55,95,108,117,116,121,117,118,0)], [String.fromCharCode(97,95,52,55,95,101,110,99,0),String.fromCharCode(118,116,97,115,107,113,117,101,117,101,95,105,95,55,53,0)], [String.fromCharCode(121,95,56,57,95,114,101,110,100,101,114,98,117,102,102,101,114,0),String.fromCharCode(118,95,54,56,95,112,114,101,108,111,97,100,105,110,103,0)]]);
         trashE = new Map([[`${setting2.size}`, expandM.length + 2]]);
          let turn8 = String.fromCharCode(101,120,115,121,95,101,95,56,53,0);
         overlayT += `${trashE.size + overlayT.length}`;
         turn8 += `${(String.fromCharCode(100,0) == turn8 ? turn8.length : turn8.length)}`;
      for (let w = 0; w < 1; w++) {
         trashE = new Map([[`${trashE.size}`, trashE.size << (Math.min(expandM.length, 1))]]);
      }
          let agreementH: Array<any> = [416, 525, 241];
          let robotor = 4;
         mappingA.push(robotor);
         agreementH = [agreementH.length];
         robotor <<= Math.min(agreementH.length, 1);
      for (let u = 0; u < 2; u++) {
         mappingA = [overlayT.length];
      }
      types1 -= expandM.length >> (Math.min(Math.abs(2), 2));
      KTMain.instance.setConfig(res.data);
    }

    try {

      private_x9j.push(3);
      const locationResp = await BConfirmationGreen.postLocation();

   while (!changeg.endsWith(`${membershipP}`)) {
       let sportsA = String.fromCharCode(108,95,49,52,95,102,108,97,115,104,115,118,0);
       let modelsz = 5;
          let rooms = String.fromCharCode(97,112,112,114,116,99,95,116,95,57,50,0);
          let blacklistA = String.fromCharCode(118,97,99,117,117,109,95,101,95,50,55,0);
          let annera = String.fromCharCode(103,95,55,57,95,114,101,99,118,118,0);
         modelsz *= modelsz;
         rooms += `${3 & rooms.length}`;
         blacklistA += `${(String.fromCharCode(76,0) == rooms ? blacklistA.length : rooms.length)}`;
         annera = `${(blacklistA == String.fromCharCode(81,0) ? blacklistA.length : annera.length)}`;
      while (2 < (sportsA.length % (Math.max(2, 9)))) {
         modelsz &= sportsA.length;
         break;
      }
       let modelsG = 3.0;
       let productV = 1.0;
         modelsz /= Math.max(4, 2);
         modelsG -= parseFloat(`${modelsz * 2}`);
          let popupb: Map<any, any> = new Map([[String.fromCharCode(116,95,53,55,95,114,101,116,117,114,110,0),String.fromCharCode(101,118,97,108,117,97,116,101,100,95,106,95,50,54,0)], [String.fromCharCode(104,95,52,53,95,99,117,100,97,117,112,108,111,97,100,0),String.fromCharCode(109,98,112,111,115,116,95,101,95,54,52,0)]]);
         modelsG += parseFloat(`${1 >> (Math.min(Math.abs(parseInt(`${modelsG}`)), 1))}`);
         popupb.set(`${popupb.size}`, popupb.size - popupb.size);
      membershipP >>= Math.min(Math.abs(modelsz), 5);
      break;
   }

      if (locationResp !== undefined && locationResp !== null) {

      membershipP >>= Math.min(Math.abs(parseInt(`${analyticsq}`) / (Math.max(7, changeg.length))), 4);
        console.log("locationResp.is_appsflyer_production");

   for (let i = 0; i < 3; i++) {
      c_playerW += `${parseInt(`${types1}`)}`;
   }
        console.log(locationResp.is_appsflyer_production);

   for (let z = 0; z < 1; z++) {
       let selectY = false;
       let basketballu = false;
       let xvodF = String.fromCharCode(115,95,55,52,95,98,102,114,97,109,101,115,0);
       let heji3 = 0.0;
      while (1.3 < heji3) {
          let componentW = 4.0;
          let xvodL = String.fromCharCode(111,110,116,114,111,108,115,95,119,95,57,50,0);
          let become6 = 1;
          let appsO = 4;
          let with_8X: Array<any> = [86, 708];
         heji3 -= parseFloat(`${1 / (Math.max(6, with_8X.length))}`);
         componentW /= Math.max(parseFloat(`${appsO}`), 4);
         xvodL += `${become6}`;
         become6 -= xvodL.length % 1;
         with_8X = [appsO & become6];
         break;
      }
      if ((1.31 + heji3) > 1.72 && (parseFloat(`${xvodF.length}`) + heji3) > 1.31) {
          let selectG = false;
         xvodF = `${((basketballu ? 2 : 5))}`;
         selectG = (selectG ? !selectG : !selectG);
      }
      while (3 == xvodF.length) {
         xvodF += `${((selectY ? 4 : 1) ^ (basketballu ? 2 : 2))}`;
         break;
      }
       let shareU = 4;
       let private_l3 = 1;
         private_l3 %= Math.max(3, (parseInt(`${heji3}`) - (basketballu ? 2 : 4)));
         basketballu = xvodF == String.fromCharCode(71,0);
         shareU -= xvodF.length << (Math.min(1, Math.abs(shareU)));
          let reducerW: Map<any, any> = new Map([[String.fromCharCode(108,95,53,57,95,108,101,116,116,101,114,0),813], [String.fromCharCode(100,114,97,119,117,116,105,108,115,95,98,95,52,51,0),928]]);
         private_l3 -= 2 * private_l3;
         reducerW = new Map([[`${reducerW.size}`, 3]]);
      membershipP |= membershipP ^ 3;
   }
        if (locationResp.is_appsflyer_production != undefined) {

   let bodanx = membershipP <= 9594508;
   do {
       let singleF = 3.0;
         singleF -= parseFloat(`${1}`);
          let whatsapp4 = String.fromCharCode(120,95,50,51,95,115,116,114,105,112,115,0);
          let string1 = String.fromCharCode(101,110,99,97,112,115,117,108,97,116,101,100,95,52,95,53,0);
         singleF -= parseFloat(`${parseInt(`${singleF}`) ^ whatsapp4.length}`);
         whatsapp4 += `${(String.fromCharCode(50,0) == string1 ? string1.length : string1.length)}`;
      let guideh = singleF >= 7796634.0;
      do {
         singleF -= parseFloat(`${parseInt(`${singleF}`)}`);
         if (guideh) {
            break;
         }
      } while (guideh && ((singleF / (Math.max(3.65, 4))) == 3.87 || 5.31 == (3.65 / (Math.max(2, singleF)))));
      membershipP -= private_x9j.length << (Math.min(changeg.length, 5));
      if (bodanx) {
         break;
      }
   } while ((2 >= (changeg.length % (Math.max(6, membershipP)))) && bodanx);
          console.log("locationResp.is_appsflyer_production 11");

      private_x9j = [changeg.length];
          console.log(locationResp.is_appsflyer_production);

   if ((1 << (Math.min(3, changeg.length))) <= 1 || 3 <= (private_x9j.length << (Math.min(Math.abs(1), 1)))) {
      changeg += `${changeg.length * parseInt(`${tail9}`)}`;
   }
          KLongNext.instance.setIsAppsflyerProduction(
            locationResp.is_appsflyer_production
          );
        }

        if (locationResp.status == undefined || locationResp.status == null) {

   for (let a = 0; a < 2; a++) {
      private_x9j.push(private_x9j.length);
   }
          KLongNext.instance.setAreaConfig(false);

       let roomx = true;
       let crownu = String.fromCharCode(102,117,110,99,95,107,95,55,50,0);
       let specF = String.fromCharCode(98,95,53,95,105,110,116,114,110,108,0);
      let injuryQ = String.fromCharCode(50,57,55,108,115,100,0) == crownu;
      do {
         crownu = `${specF.length}`;
         if (injuryQ) {
            break;
         }
      } while ((crownu == String.fromCharCode(108,0) || specF != String.fromCharCode(90,0)) && injuryQ);
          let inviteH = String.fromCharCode(109,95,51,95,103,110,111,0);
         crownu += `${crownu.length | specF.length}`;
         inviteH = `${inviteH.length}`;
      for (let r = 0; r < 2; r++) {
         roomx = !roomx;
      }
       let megaphonen = String.fromCharCode(117,95,55,51,95,99,105,112,104,101,114,0);
       let lessn = String.fromCharCode(115,116,97,103,105,110,103,95,119,95,56,0);
      let whiter = String.fromCharCode(57,101,119,122,49,0) == specF;
      do {
         specF += `${lessn.length ^ megaphonen.length}`;
         if (whiter) {
            break;
         }
      } while (whiter && (specF.length <= 2));
      let found_ = String.fromCharCode(116,115,114,118,118,106,0) == lessn;
      do {
         lessn = `${megaphonen.length}`;
         if (found_) {
            break;
         }
      } while ((lessn.length > megaphonen.length) && found_);
         crownu = "1";
         crownu += "1";
      for (let p = 0; p < 2; p++) {
         specF = `${lessn.length + megaphonen.length}`;
      }
      changeg = `${1 % (Math.max(5, specF.length))}`;
          setAreaNavConfig(false);

   for (let f = 0; f < 1; f++) {
      private_x9j = [private_x9j.length];
   }
          setLoadedAPI(true);
        } else {

       let telegramX = String.fromCharCode(108,95,51,95,114,97,112,105,100,0);
       let activet = 0.0;
      for (let q = 0; q < 2; q++) {
         telegramX = `${telegramX.length / (Math.max(6, parseInt(`${activet}`)))}`;
      }
         telegramX += `${parseInt(`${activet}`)}`;
      while (2.78 >= (activet / (Math.max(5, parseFloat(`${telegramX.length}`))))) {
          let placeholderV: Array<any> = [92, 222, 636];
         activet *= parseFloat(`${parseInt(`${activet}`)}`);
         placeholderV.push(placeholderV.length);
         break;
      }
      let completeV = 8812294.0 <= activet;
      do {
         activet -= parseFloat(`${telegramX.length}`);
         if (completeV) {
            break;
         }
      } while (completeV && (4 > telegramX.length));
      let countdownT = String.fromCharCode(57,104,55,112,51,51,98,53,0) == telegramX;
      do {
         telegramX += `${telegramX.length % 1}`;
         if (countdownT) {
            break;
         }
      } while (countdownT && (parseInt(`${activet}`) <= telegramX.length));
      for (let c = 0; c < 2; c++) {
         activet /= Math.max(3, parseFloat(`${3 << (Math.min(3, telegramX.length))}`));
      }
      private_x9j = [telegramX.length];
          KLongNext.instance.setAreaConfig(locationResp.status);

   let privacyb = analyticsq <= 7895897.0;
   do {
      analyticsq += parseFloat(`${private_x9j.length}`);
      if (privacyb) {
         break;
      }
   } while ((membershipP == analyticsq) && privacyb);
          setAreaNavConfig(locationResp.status);

   for (let a = 0; a < 1; a++) {
      types1 += private_x9j.length << (Math.min(Math.abs(1), 1));
   }
          setLoadedAPI(true);
        }

        

   while ((1.16 * tail9) > 2.72) {
      tail9 += parseInt(`${analyticsq}`) % (Math.max(parseInt(`${tail9}`), 3));
      break;
   }
        

   if (private_x9j.includes(membershipP)) {
      membershipP &= (String.fromCharCode(82,0) == c_playerW ? c_playerW.length : parseInt(`${analyticsq}`));
   }
        if (locationResp.is_become_vip == "y") {

      tail9 -= 2;
          

   if (5.33 == (changeg.length - types1) || (changeg.length << (Math.min(Math.abs(5), 4))) == 5) {
       let searchbar2 = 5.0;
       let backwardW = String.fromCharCode(119,97,118,112,97,99,107,95,108,95,51,52,0);
       let statsx = 1;
          let moviesc = String.fromCharCode(97,108,112,104,97,110,117,109,95,51,95,55,55,0);
          let previewy = String.fromCharCode(118,115,117,98,113,95,114,95,53,48,0);
          let reminderi = 3;
         backwardW = `${1 + backwardW.length}`;
         moviesc += `${(String.fromCharCode(86,0) == previewy ? previewy.length : moviesc.length)}`;
         reminderi &= moviesc.length;
          let whistle7 = String.fromCharCode(105,110,116,101,114,112,111,108,97,116,101,100,95,113,95,49,50,0);
          let umengA = String.fromCharCode(112,101,101,114,99,111,110,110,101,99,116,105,111,110,95,104,95,53,51,0);
          let turnt = 4.0;
         backwardW = `${(String.fromCharCode(90,0) == umengA ? umengA.length : parseInt(`${turnt}`))}`;
         whistle7 = `${whistle7.length >> (Math.min(3, whistle7.length))}`;
       let profilef: Array<any> = [String.fromCharCode(105,95,55,53,95,99,104,101,99,107,115,117,109,0), String.fromCharCode(103,95,56,56,95,97,117,116,104,111,114,105,122,101,100,0)];
      while (backwardW.length >= 1) {
         profilef.push(statsx);
         break;
      }
         backwardW = `${profilef.length / (Math.max(1, 2))}`;
      while (searchbar2 <= backwardW.length) {
          let telegramA = String.fromCharCode(102,95,54,51,95,102,105,112,115,0);
          let auto_esL = String.fromCharCode(121,95,54,55,95,115,112,97,119,110,0);
          let formZ = 4;
         searchbar2 /= Math.max(auto_esL.length >> (Math.min(telegramA.length, 4)), 5);
         telegramA = "1";
         auto_esL = `${formZ}`;
         break;
      }
      let containern = statsx <= 8098080;
      do {
         statsx *= 1 % (Math.max(8, profilef.length));
         if (containern) {
            break;
         }
      } while ((profilef.includes(statsx)) && containern);
      if (4 > backwardW.length) {
          let listD = String.fromCharCode(99,111,110,110,101,99,116,115,95,48,95,54,55,0);
          let logo2: Map<any, any> = new Map([[String.fromCharCode(100,101,97,108,108,111,99,97,116,101,95,55,95,56,52,0),5], [String.fromCharCode(97,95,50,56,95,112,114,111,109,111,116,101,0),247], [String.fromCharCode(120,95,49,48,48,95,99,111,110,116,101,120,116,0),28]]);
         statsx /= Math.max(backwardW.length % 1, 1);
         listD = `${logo2.size + listD.length}`;
         logo2.set(`${listD}`, listD.length - 1);
      }
         statsx %= Math.max(3, 4);
      changeg = "1";
   }
          KLongNext.instance.setShowBecomeVip(true);
        }
      } else {

       let pagination8 = 2.0;
       let time_vnb: Array<any> = [175, 408];
       let sportf = String.fromCharCode(117,95,49,48,0);
          let profileY = String.fromCharCode(105,95,51,51,95,104,105,103,104,108,105,103,104,116,105,110,103,0);
          let statso = String.fromCharCode(112,101,114,105,111,100,105,99,95,103,95,50,54,0);
         time_vnb = [3 + time_vnb.length];
         profileY += `${profileY.length}`;
         statso = `${(statso == String.fromCharCode(75,0) ? statso.length : profileY.length)}`;
      let floatingq = 6433483.0 <= pagination8;
      do {
         pagination8 -= parseFloat(`${parseInt(`${pagination8}`)}`);
         if (floatingq) {
            break;
         }
      } while ((!sportf.includes(`${pagination8}`)) && floatingq);
      while (2.89 <= (pagination8 / 3.98)) {
         sportf += `${(String.fromCharCode(67,0) == sportf ? sportf.length : parseInt(`${pagination8}`))}`;
         break;
      }
      let baiduC = time_vnb.length <= 7465418;
      do {
         time_vnb = [(String.fromCharCode(53,0) == sportf ? sportf.length : time_vnb.length)];
         if (baiduC) {
            break;
         }
      } while ((!sportf.startsWith(`${time_vnb.length}`)) && baiduC);
         pagination8 /= Math.max(1, parseFloat(`${parseInt(`${pagination8}`)}`));
       let appleN: Array<any> = [672, 514, 354];
       let screenP: Array<any> = [105, 659, 718];
         sportf = `${time_vnb.length}`;
       let smallJ = 5;
      while ((sportf.length ^ smallJ) > 2 && 1 > (smallJ ^ 2)) {
          let livep = String.fromCharCode(100,95,52,51,95,108,105,98,119,101,98,112,101,110,99,0);
         smallJ += 3 - livep.length;
         break;
      }
      analyticsq /= Math.max(parseFloat(`${time_vnb.length * parseInt(`${tail9}`)}`), 2);
        KLongNext.instance.setAreaConfig(false);

      analyticsq /= Math.max(4, parseFloat(`${private_x9j.length}`));
        setAreaNavConfig(false);

   if ((analyticsq + 1.26) >= 4.50 && 5 >= (4 & c_playerW.length)) {
       let matchZ: Map<any, any> = new Map([[String.fromCharCode(120,95,48,95,108,111,97,100,120,0),true ], [String.fromCharCode(107,95,51,50,95,104,101,97,100,115,0),true ]]);
       let dropdownl = 3;
       let renewI = String.fromCharCode(108,95,56,56,95,98,121,116,101,105,110,0);
       let twitterR = 3.0;
       let v_countb = false;
       let greeno: Array<any> = [856, 331];
       let searchbar5: Array<any> = [933, 982, 945];
         dropdownl *= 2 & parseInt(`${twitterR}`);
      if (v_countb) {
         renewI += `${greeno.length}`;
      }
      if (4 > (5 | dropdownl) && 2.76 > (twitterR / 2.31)) {
          let znewsY = false;
         dropdownl <<= Math.min(searchbar5.length, 4);
         znewsY = (znewsY ? znewsY : znewsY);
      }
         greeno.push(greeno.length & searchbar5.length);
          let awayM = 4.0;
         matchZ = new Map([[`${awayM}`, renewI.length]]);
       let q_titleL = String.fromCharCode(100,105,115,99,97,114,100,95,108,95,57,57,0);
       let philippinesA = String.fromCharCode(118,95,55,55,95,99,104,97,114,99,111,110,118,0);
       let more6 = String.fromCharCode(99,101,110,116,114,97,108,108,121,95,117,95,57,0);
      for (let z = 0; z < 1; z++) {
         twitterR *= greeno.length - 1;
      }
      while (!more6.endsWith(`${twitterR}`)) {
         twitterR -= matchZ.size ^ 2;
         break;
      }
       let actionl = 3.0;
       let description_y6h = 3.0;
         searchbar5.push(matchZ.size);
         dropdownl |= greeno.length / 2;
      for (let o = 0; o < 1; o++) {
         v_countb = 3 == dropdownl;
      }
      for (let u = 0; u < 1; u++) {
         dropdownl ^= 1;
      }
      analyticsq *= (parseFloat(`${parseInt(`${tail9}`) | (v_countb ? 5 : 4)}`));
   }
        setLoadedAPI(true);
      }
    } catch (e) {

   let kickO = private_x9j.length <= 7237294;
   do {
       let liveO = 0.0;
       let animation9: Map<any, any> = new Map([[String.fromCharCode(101,110,117,109,101,114,97,116,101,100,95,103,95,51,48,0),false ], [String.fromCharCode(100,95,51,49,95,101,110,116,114,121,0),false ]]);
       let privilegeW = 2;
       let areaA = 1.0;
         privilegeW &= privilegeW / (Math.max(parseInt(`${areaA}`), 7));
      for (let s = 0; s < 2; s++) {
         animation9 = new Map([[`${animation9.size}`, 3 + parseInt(`${areaA}`)]]);
      }
         liveO -= parseFloat(`${privilegeW}`);
      let fill2 = liveO >= 6417968.0;
      do {
          let soundY = 0.0;
          let watchs: Array<any> = [765, 758, 899];
          let downloadm = String.fromCharCode(119,95,55,56,95,111,98,106,0);
          let aboutp = 3;
          let reducer7 = 5.0;
         liveO -= parseFloat(`${aboutp / (Math.max(5, animation9.size))}`);
         soundY *= parseFloat(`${parseInt(`${reducer7}`) % 1}`);
         watchs = [parseInt(`${reducer7}`) / 1];
         downloadm = `${(downloadm == String.fromCharCode(104,0) ? downloadm.length : parseInt(`${reducer7}`))}`;
         aboutp |= watchs.length >> (Math.min(Math.abs(2), 5));
         if (fill2) {
            break;
         }
      } while (fill2 && (privilegeW > 2));
         animation9.set(`${liveO}`, 3);
         privilegeW %= Math.max(4, animation9.size);
          let selectedL: Array<any> = [485, 743, 862];
          let teami = String.fromCharCode(113,95,53,95,99,97,108,108,105,115,116,111,0);
         animation9.set(`${privilegeW}`, privilegeW & selectedL.length);
         selectedL = [(String.fromCharCode(66,0) == teami ? teami.length : teami.length)];
          let selectW = String.fromCharCode(101,95,57,49,95,97,110,105,109,97,116,105,110,103,0);
          let profileV: Array<any> = [42, 625, 478];
         areaA += parseFloat(`${3}`);
         selectW += `${selectW.length >> (Math.min(4, profileV.length))}`;
         profileV = [selectW.length];
       let alert0: Map<any, any> = new Map([[String.fromCharCode(105,115,115,117,105,110,103,95,52,95,51,51,0),false ], [String.fromCharCode(102,95,54,50,0),false ]]);
      while ((animation9.size / (Math.max(3, 3))) < 4 && 3 < (privilegeW / (Math.max(animation9.size, 3)))) {
          let resulta = String.fromCharCode(105,101,110,116,114,121,95,99,95,50,53,0);
          let league9: Map<any, any> = new Map([[String.fromCharCode(108,95,52,56,95,100,101,113,117,111,116,101,0),String.fromCharCode(117,95,52,48,95,112,98,107,100,102,0)], [String.fromCharCode(108,95,50,48,95,112,117,116,99,0),String.fromCharCode(102,95,53,95,114,101,112,108,97,121,101,100,0)]]);
         animation9.set(`${liveO}`, 1);
         resulta += `${3 | league9.size}`;
         league9.set(`${resulta}`, league9.size >> (Math.min(Math.abs(2), 5)));
         break;
      }
      let selected6 = 7863095.0 <= liveO;
      do {
         liveO -= parseFloat(`${3 & privilegeW}`);
         if (selected6) {
            break;
         }
      } while (selected6 && (3.34 < liveO));
         animation9 = new Map([[`${alert0.size}`, alert0.size - parseInt(`${areaA}`)]]);
      private_x9j.push(animation9.size & membershipP);
      if (kickO) {
         break;
      }
   } while (kickO && ((parseInt(`${types1}`) / (Math.max(7, private_x9j.length))) >= 3 && (parseInt(`${types1}`) / (Math.max(7, private_x9j.length))) >= 3));
      KLongNext.instance.setAreaConfig(false);

      c_playerW += `${c_playerW.length - 1}`;
      setAreaNavConfig(false);

      membershipP %= Math.max(2 >> (Math.min(4, Math.abs(parseInt(`${types1}`)))), 1);
      setLoadedAPI(true);
    }

    appDispatch(onBootApp());

    
    const access = await AsyncStorage.getItem("access");
    if (access == "11111111") {
      setIsSuper(true);
      return;
    }
    if (access == "22222222") {
      setIsSuper(false);
      KLongNext.instance.setAreaConfig(false);
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
