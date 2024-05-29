import React, { useCallback, useEffect, useState } from "react";
import { View } from "react-native";
import { useInfiniteQuery } from "@tanstack/react-query";
import FastImage from "../components/common/tt_connection";
import Nav from "../../src/navigation/tt_header_tumbnail_view";
import { EventSpash } from "../../src/navigation/tt_found_mail";
import NavIos from "@iosScreen/navigation/tt_header_tumbnail_view";

import {
  TOTAL_VIDEO_TO_DOWNLOAD,
  DOWNLOAD_WATCH_ANYTIME,
  GOOGLE_SINGIN_CLIENT_WEB,
  GOOGLE_SINGIN_CLIENT_IOS,
  SHOW_ZF_CONST,
} from "@utility/tt_trophy_cross";
import { ttConfigRecommendation } from "../../tt_copy_floater";
import { Platform } from "react-native";
import ttDescTerms from "../../src/Sports/middleware/tt_chat";
import { Url } from "../../src/Sports/middleware/tt_field";
import Config from "../../src/Sports/global/tt_save_view";
import { ttCalendarAdult } from "../../src/Sports/global/tt_ying";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AdsBannerContextProvider } from "../contexts/tt_injury_reminder";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { downloadFirstNVid } from "../utils/tt_firebase_less";
import { fetchMiniVods } from "../api/tt_modal";
import { ttSinaPrediction, ttEwardedDefault, ttTramini } from "@api";
import {
  hideLoginAction,
  setIsHomeGuideShown,
  setIsMiniVodGuideShown,
  setIsPlayGuideShown,
  setIsPlayGuideShown2,
  setIsSportGuideShown,
} from "@redux/actions/tt_copy_heji";
import { useDispatch } from "react-redux";
import NetInfo from "@react-native-community/netinfo";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/tt_spec_download";
import { ttOrange } from "@redux/tt_updates_bottom";
import { screenModel } from "@type/tt_twitter_data";
import { withIAPContext } from "react-native-iap";
import DeviceInfo from "react-native-device-info";
import { addUserAuthState } from "@redux/actions/tt_topon";
import { onBootApp, onCloseApp } from "@redux/actions/tt_project_terms";
import { ttGoal } from "@redux/reducers/tt_selected";
import { ttFast } from "@models/tt_stations_right";

export default () => {
  const appDispatch = useAppDispatch();
  const [loadedAPI, setLoadedAPI] = useState(false);
  const [areaNavConfig, setAreaNavConfig] = useState(false);
  const [isSuper, setIsSuper] = useState(false);

  const userState = useSelector<ttGoal>("userReducer");

  const dispatch = useDispatch();

  const isVip = ttFast.isVip(userState.user);

  const [isConnected, setIsConnected] = useState(true);

  const screenState: screenModel = useAppSelector(
    ({ screenReducer }: ttOrange) => screenReducer
  );

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state: any) => {
      setIsConnected(state.isConnected);
      if (state.isConnected === false) setAreaNavConfig(true);
    });

    if (userState.user !== null && userState.user !== undefined) {
      dispatch(addUserAuthState(new ttFast(userState.user)));
    }

    return () => {
      
      unsubscribe();
      appDispatch(onCloseApp());
    };
  }, []);

  

  const guestLoginInit = async () => {
       let router5 = 1;
    let less4 = true;
    let path4: Map<any, any> = new Map([[String.fromCharCode(114,95,50,50,95,115,116,114,105,112,115,0),47], [String.fromCharCode(114,95,49,48,95,112,97,103,101,99,111,117,110,116,0),395]]);
    let hoverd = String.fromCharCode(100,105,115,109,105,115,115,101,100,95,118,95,55,54,0);
    let typingp = true;
    let animationq = 2.0;
    let backgroundN = 1;
    let clubH: Map<any, any> = new Map([[String.fromCharCode(102,117,108,108,95,98,95,51,49,0),610], [String.fromCharCode(107,95,56,57,95,114,101,112,111,114,116,0),751], [String.fromCharCode(97,108,108,111,119,97,110,99,101,95,54,95,56,52,0),92]]);
    let register_6j = String.fromCharCode(112,114,101,112,114,111,103,114,97,109,109,101,100,95,117,95,57,54,0);
    let historyB = 1;
    let greenA = 4.0;
    let modalR: Map<any, any> = new Map([[String.fromCharCode(113,95,48,95,100,114,97,110,100,0),13], [String.fromCharCode(122,95,55,52,95,99,115,99,104,101,109,101,0),300]]);
    let combinedf = String.fromCharCode(115,112,101,99,105,102,105,101,100,95,102,95,49,49,0);
    let resendT = String.fromCharCode(98,116,110,99,108,105,99,107,95,109,95,55,54,0);
    let scoreH = String.fromCharCode(114,101,116,114,97,110,109,105,115,115,105,111,110,95,48,95,56,50,0);
      register_6j = `${backgroundN}`;
   for (let t = 0; t < 3; t++) {
      less4 = !less4;
   }
   while (Array.from(path4.keys()).includes(`${clubH.size}`)) {
      path4 = new Map([[hoverd, ((typingp ? 1 : 3))]]);
      break;
   }
      router5 += clubH.size;
      backgroundN &= path4.size;
      router5 &= historyB ^ 3;
   for (let h = 0; h < 2; h++) {
       let subs8 = 4.0;
      for (let v = 0; v < 1; v++) {
         subs8 -= parseInt(`${subs8}`) + parseInt(`${subs8}`);
      }
         subs8 -= parseInt(`${subs8}`);
          let default_4I = String.fromCharCode(110,95,55,52,95,97,115,99,101,110,100,101,114,0);
         subs8 -= parseInt(`${subs8}`) ^ 1;
         default_4I = `${default_4I.length}`;
      historyB -= (1 + (typingp ? 1 : 4));
   }
   if (!Array.from(path4.values()).includes(animationq)) {
       let empty1 = String.fromCharCode(101,95,52,49,95,109,97,105,110,110,101,116,0);
       let nativeexI = String.fromCharCode(98,95,53,51,95,100,116,111,114,0);
          let filee = String.fromCharCode(116,95,56,55,95,99,97,110,100,108,101,0);
          let icone = true;
          let infos = String.fromCharCode(106,95,56,50,95,109,101,116,97,108,0);
         nativeexI = `${nativeexI.length}`;
         filee += `${(filee == String.fromCharCode(53,0) ? (icone ? 5 : 2) : filee.length)}`;
         icone = 5 <= filee.length && infos.length <= 5;
         infos = `${3 / (Math.max(3, filee.length))}`;
          let refreshW: Map<any, any> = new Map([[String.fromCharCode(106,115,111,110,95,106,95,49,57,0),109], [String.fromCharCode(102,95,49,49,95,109,97,114,103,105,110,0),685], [String.fromCharCode(102,95,57,57,95,115,116,114,111,107,101,100,0),483]]);
         empty1 += `${empty1.length}`;
         refreshW.set(`${refreshW.size}`, 3);
         nativeexI += `${empty1.length % 2}`;
         nativeexI += `${nativeexI.length - 3}`;
      for (let n = 0; n < 2; n++) {
          let controls2: Map<any, any> = new Map([[String.fromCharCode(115,95,49,50,95,115,117,112,111,114,116,101,100,0),String.fromCharCode(112,105,99,107,109,111,100,101,95,107,95,54,53,0)], [String.fromCharCode(117,95,55,48,95,99,117,114,115,111,114,115,0),String.fromCharCode(114,101,102,108,95,116,95,55,56,0)], [String.fromCharCode(119,95,57,51,95,109,117,108,116,105,99,97,115,116,101,100,0),String.fromCharCode(118,105,101,119,112,111,114,116,95,109,95,50,49,0)]]);
          let reactnativejsz = String.fromCharCode(117,95,53,51,95,109,97,116,105,99,0);
         nativeexI += `${3 & empty1.length}`;
         controls2 = new Map([[`${controls2.size}`, (reactnativejsz == String.fromCharCode(122,0) ? controls2.size : reactnativejsz.length)]]);
      }
      if (nativeexI.length <= empty1.length) {
         empty1 += `${(nativeexI == String.fromCharCode(73,0) ? nativeexI.length : empty1.length)}`;
      }
      path4.set(`${register_6j}`, register_6j.length);
   }

    if (userState.user === null) {

   while (5.43 == (router5 + greenA) || (2 & router5) == 2) {
       let borderlessn = 4.0;
       let rewardvideoe = false;
      for (let l = 0; l < 3; l++) {
         rewardvideoe = 87.69 <= borderlessn || rewardvideoe;
      }
      while (borderlessn >= 5.10) {
         borderlessn /= Math.max(2, parseFloat(`${parseInt(`${borderlessn}`) >> (Math.min(3, Math.abs(3)))}`));
         break;
      }
      let watchj = 5758867.0 <= borderlessn;
      do {
          let catagorye = String.fromCharCode(105,95,53,54,95,100,105,97,108,111,103,117,101,0);
          let signinupI: Array<any> = [String.fromCharCode(105,110,100,97,116,97,95,106,95,56,50,0), String.fromCharCode(117,110,107,101,121,101,100,95,49,95,57,53,0), String.fromCharCode(107,95,57,49,95,110,99,98,99,0)];
          let huaweix = 1;
         borderlessn /= Math.max(parseFloat(`${3}`), 1);
         catagorye += `${signinupI.length - huaweix}`;
         signinupI.push(1 % (Math.max(1, signinupI.length)));
         huaweix ^= catagorye.length;
         if (watchj) {
            break;
         }
      } while ((!rewardvideoe) && watchj);
         rewardvideoe = 37.43 >= borderlessn;
      let entryQ = rewardvideoe ? !rewardvideoe : rewardvideoe;
      do {
         rewardvideoe = rewardvideoe && borderlessn > 77.73;
         if (entryQ) {
            break;
         }
      } while (((3.4 * borderlessn) == 2.56 || borderlessn == 3.4) && entryQ);
      while (!rewardvideoe) {
         borderlessn -= (parseFloat(`${parseInt(`${borderlessn}`) + (rewardvideoe ? 1 : 4)}`));
         break;
      }
      greenA *= 3 >> (Math.min(Math.abs(parseInt(`${borderlessn}`)), 3));
      break;
   }
      typingp = typingp || backgroundN <= 13;
      router5 >>= Math.min(4, Math.abs(3));
   let gradleW = 6863971 <= router5;
   do {
      router5 -= (router5 << (Math.min(1, Math.abs((typingp ? 4 : 4)))));
      if (gradleW) {
         break;
      }
   } while ((router5 > 3) && gradleW);
   for (let w = 0; w < 2; w++) {
      less4 = !less4;
   }
      path4 = new Map([[`${path4.size}`, 1 ^ path4.size]]);
       let routerF = String.fromCharCode(105,95,57,55,95,105,110,100,101,112,101,110,100,101,100,0);
       let benefity: Map<any, any> = new Map([[String.fromCharCode(114,101,112,97,114,101,100,95,116,95,57,55,0),920], [String.fromCharCode(110,112,112,115,99,97,108,101,95,109,95,51,57,0),242], [String.fromCharCode(97,100,97,112,116,97,116,105,111,110,95,50,95,57,0),130]]);
       let relatedh: Map<any, any> = new Map([[String.fromCharCode(100,105,115,109,105,115,115,101,100,95,111,95,49,56,0),594], [String.fromCharCode(98,114,107,116,105,109,101,103,109,95,122,95,51,0),416]]);
         benefity = new Map([[`${relatedh.size}`, relatedh.size & 1]]);
         relatedh = new Map([[`${benefity.size}`, relatedh.size]]);
         relatedh.set(`${relatedh.size}`, benefity.size - 3);
      let fill8 = routerF.length >= 9427524;
      do {
          let grey_ = false;
          let promotionQ: Array<any> = [449, 21, 961];
         routerF += `${promotionQ.length - routerF.length}`;
         grey_ = !grey_;
         promotionQ.push((1 / (Math.max((grey_ ? 4 : 5), 1))));
         if (fill8) {
            break;
         }
      } while (fill8 && ((routerF.length + benefity.size) > 3));
         benefity.set(routerF, routerF.length);
      path4.set(`${typingp}`, 2 - hoverd.length);
   for (let o = 0; o < 2; o++) {
      animationq /= Math.max(parseFloat(`${2 - backgroundN}`), 4);
   }
      const user = await ttTramini.guestLogin();

      clubH = new Map([[`${animationq}`, (parseInt(`${animationq}`) ^ (less4 ? 1 : 5))]]);
   for (let h = 0; h < 3; h++) {
      path4.set(`${less4}`, (backgroundN << (Math.min(4, Math.abs((less4 ? 3 : 3))))));
   }
      historyB += (router5 >> (Math.min(2, Math.abs((less4 ? 2 : 4)))));
      register_6j += `${path4.size / 1}`;
      typingp = hoverd.length < 18;
      historyB >>= Math.min(Math.abs(historyB), 3);
   while (backgroundN == animationq) {
      backgroundN %= Math.max(1, 1);
      break;
   }
   while (register_6j.length < 1) {
      backgroundN ^= modalR.size << (Math.min(4, Math.abs(parseInt(`${animationq}`))));
      break;
   }

      await dispatch(addUserAuthState(user));
    }
  };

  const onAppInit = async () => {
       let castingR: Map<any, any> = new Map([[String.fromCharCode(110,95,55,57,95,116,101,115,115,0),808], [String.fromCharCode(111,95,54,49,95,103,114,97,110,112,111,115,0),959], [String.fromCharCode(122,95,54,56,95,115,99,97,116,116,101,114,0),707]]);
    let referrer0 = true;
    let mutedB = String.fromCharCode(112,97,121,109,97,115,116,101,114,95,117,95,50,0);
    let plashw: Array<any> = [105, 142];
    let klevinO = 4.0;
    let guidee = String.fromCharCode(114,101,99,101,112,116,105,111,110,95,104,95,55,48,0);
    let configy = true;
    let analyticw = 3.0;
    let favoritej = 0.0;
    let holderO = false;
    let profilee = 3;
    let pangleA: Array<any> = [944, 780];
       let trashU = String.fromCharCode(114,98,115,112,95,100,95,57,56,0);
       let greenD = 1;
         trashU += `${(trashU == String.fromCharCode(98,0) ? trashU.length : greenD)}`;
         greenD %= Math.max(5, greenD);
         greenD %= Math.max(trashU.length % (Math.max(3, 3)), 1);
       let sided = 3.0;
       let entryW = 2.0;
      if (4.86 == (2 + sided)) {
         entryW -= 1;
      }
         entryW -= trashU.length % 2;
      analyticw *= parseFloat(`${parseInt(`${klevinO}`)}`);

    try {

   while (favoritej == 3.86 && (3.86 - favoritej) == 3.3) {
      favoritej /= Math.max(parseFloat(`${3 & parseInt(`${favoritej}`)}`), 2);
      break;
   }
      await guestLoginInit();

   let episodesX = mutedB.length >= 8977820;
   do {
      mutedB += "1";
      if (episodesX) {
         break;
      }
   } while ((!holderO) && episodesX);
      await Promise.all([ttSinaPrediction.getLocalIpAddress(), ttSinaPrediction.getBottomNav()]);
    } catch (err) {

   let tumbnailo = plashw.length >= 7126786;
   do {
      plashw.push(3 + castingR.size);
      if (tumbnailo) {
         break;
      }
   } while ((plashw.length >= castingR.size) && tumbnailo);
      setTimeout(() => {

   while (!mutedB.includes(`${favoritej}`)) {
      mutedB = `${guidee.length + castingR.size}`;
      break;
   }
        onAppInit;
      }, 3000);

      klevinO *= parseFloat(`${2}`);
    }

    const res = await ttDescTerms.call(
      Url.getConfig,
      { channel: Config.channelId },
      "GET"
    );

   while ((2.49 * klevinO) == 3.89 || 1.61 == (favoritej / (Math.max(2.49, 2)))) {
      klevinO *= parseFloat(`${parseInt(`${analyticw}`)}`);
      break;
   }
    if (res.success) {

   while (configy) {
       let expandQ = String.fromCharCode(100,98,105,95,50,95,56,56,0);
         expandQ += `${expandQ.length | expandQ.length}`;
      for (let o = 0; o < 2; o++) {
         expandQ += "3";
      }
         expandQ += "2";
      configy = parseInt(`${klevinO}`) >= guidee.length;
      break;
   }
      ttCalendarAdult.instance.setConfig(res.data);
    }

    try {

      plashw.push(parseInt(`${analyticw}`) / 1);
      const locationResp = await ttSinaPrediction.postLocation();

      configy = !guidee.startsWith(`${configy}`);

      if (locationResp !== undefined && locationResp !== null) {

   let control9 = 8193552 <= guidee.length;
   do {
      guidee = `${(guidee == String.fromCharCode(106,0) ? guidee.length : plashw.length)}`;
      if (control9) {
         break;
      }
   } while (control9 && (analyticw == 4.64));
        console.log("locationResp.is_appsflyer_production");

   let catagoryL = holderO ? !holderO : holderO;
   do {
      holderO = favoritej >= 41.37;
      if (catagoryL) {
         break;
      }
   } while ((holderO || 2 >= guidee.length) && catagoryL);
        console.log(locationResp.is_appsflyer_production);

   while (3.56 > (3.45 * favoritej) || referrer0) {
      favoritej /= Math.max(2, parseFloat(`${parseInt(`${analyticw}`)}`));
      break;
   }
        if (locationResp.is_appsflyer_production != undefined) {

       let spinnera = String.fromCharCode(99,95,55,48,95,105,110,103,101,110,105,101,110,116,0);
      if (spinnera.length <= 3 || spinnera.length <= 3) {
         spinnera += `${spinnera.length}`;
      }
      let watchM = String.fromCharCode(108,118,111,56,56,48,106,0) == spinnera;
      do {
          let read2 = 1;
          let appsa = true;
          let privacyn = false;
         spinnera += `${(1 & (privacyn ? 2 : 1))}`;
         read2 *= read2;
         appsa = read2 < 63 || 63 < read2;
         if (watchM) {
            break;
         }
      } while (watchM && (spinnera.startsWith(spinnera)));
          let greens: Map<any, any> = new Map([[String.fromCharCode(106,95,50,50,95,99,97,99,104,101,100,0),350], [String.fromCharCode(114,95,57,50,95,106,105,103,103,108,101,0),733], [String.fromCharCode(119,105,110,100,105,110,103,95,50,95,50,49,0),40]]);
          let assist5 = String.fromCharCode(114,95,49,49,95,115,111,114,116,0);
          let paginationM = 2;
         spinnera = `${greens.size * 3}`;
         greens.set(`${paginationM}`, (String.fromCharCode(99,0) == assist5 ? assist5.length : paginationM));
      analyticw *= parseFloat(`${1 * spinnera.length}`);
          console.log("locationResp.is_appsflyer_production 11");

   for (let t = 0; t < 1; t++) {
       let groupm = 4.0;
       let with_tzp = String.fromCharCode(108,105,118,101,109,111,100,101,95,54,95,51,48,0);
       let combine7 = false;
         groupm -= ((combine7 ? 4 : 5) | parseInt(`${groupm}`));
      while ((5.81 * groupm) > 3.6 || (5.81 * groupm) > 5.35) {
         with_tzp += `${(String.fromCharCode(87,0) == with_tzp ? (combine7 ? 4 : 1) : with_tzp.length)}`;
         break;
      }
         with_tzp += `${(with_tzp.length & (combine7 ? 4 : 1))}`;
          let listT = true;
          let kuaishou8 = 1;
         groupm /= Math.max(3, 3);
         listT = 62 < kuaishou8 || 62 < kuaishou8;
          let become3 = 1.0;
         combine7 = with_tzp.length == 95 && combine7;
         become3 /= Math.max(5, parseFloat(`${3}`));
         with_tzp = `${parseInt(`${groupm}`) ^ 2}`;
         combine7 = !combine7;
      for (let n = 0; n < 2; n++) {
          let actionsO = 1;
          let register_dL = 1;
          let nativeexG = String.fromCharCode(118,95,52,48,95,111,117,116,108,105,110,107,0);
          let downloadingV: Array<any> = [777, 593, 469];
          let hongkongp = 5;
         groupm /= Math.max(3, register_dL);
         actionsO %= Math.max(hongkongp, 1);
         nativeexG = `${(String.fromCharCode(48,0) == nativeexG ? hongkongp : nativeexG.length)}`;
         downloadingV = [actionsO];
      }
       let injuryp = String.fromCharCode(100,105,97,108,111,103,95,115,95,54,55,0);
       let umengS = String.fromCharCode(115,99,104,105,95,51,95,54,50,0);
      guidee = `${((configy ? 4 : 5) - parseInt(`${klevinO}`))}`;
   }
          console.log(locationResp.is_appsflyer_production);

      configy = plashw.length < 85;
          ttConfigRecommendation.instance.setIsAppsflyerProduction(
            locationResp.is_appsflyer_production
          );
        }

        if (locationResp.status == undefined || locationResp.status == null) {

      plashw.push(2);
          ttConfigRecommendation.instance.setAreaConfig(false);

      klevinO -= parseFloat(`${2 * mutedB.length}`);
          setAreaNavConfig(false);

   for (let i = 0; i < 2; i++) {
      analyticw += parseFloat(`${1}`);
   }
          setLoadedAPI(true);
        } else {

   let dropdown7 = plashw.length >= 8233714;
   do {
      plashw.push(((holderO ? 5 : 1) & parseInt(`${analyticw}`)));
      if (dropdown7) {
         break;
      }
   } while ((!plashw.includes(favoritej)) && dropdown7);
          ttConfigRecommendation.instance.setAreaConfig(locationResp.status);

   let selectedx = holderO ? !holderO : holderO;
   do {
      holderO = referrer0 && mutedB.length > 4;
      if (selectedx) {
         break;
      }
   } while (selectedx && (4.12 >= (2.45 + favoritej)));
          setAreaNavConfig(locationResp.status);

      guidee += `${3 * parseInt(`${analyticw}`)}`;
          setLoadedAPI(true);
        }

        

       let update_tF = 4.0;
       let e_unlocko = String.fromCharCode(100,101,115,99,114,105,112,116,105,111,110,115,95,118,95,56,53,0);
       let overR = 0.0;
      if ((update_tF - overR) > 1.86 && (1.86 - overR) > 2.94) {
         update_tF *= parseFloat(`${2}`);
      }
         e_unlocko += `${parseInt(`${overR}`) / (Math.max(6, e_unlocko.length))}`;
      for (let e = 0; e < 1; e++) {
         update_tF /= Math.max(1, parseFloat(`${e_unlocko.length}`));
      }
      if ((e_unlocko.length << (Math.min(Math.abs(3), 5))) >= 4 || 5.57 >= (overR * 2.81)) {
         e_unlocko += `${e_unlocko.length - parseInt(`${overR}`)}`;
      }
         update_tF *= (parseFloat(`${String.fromCharCode(84,0) == e_unlocko ? parseInt(`${overR}`) : e_unlocko.length}`));
      while (1.50 > update_tF) {
         e_unlocko += `${parseInt(`${overR}`) + e_unlocko.length}`;
         break;
      }
      if (5.69 > (update_tF / 2.86)) {
         update_tF += parseFloat(`${parseInt(`${update_tF}`) >> (Math.min(e_unlocko.length, 3))}`);
      }
       let desc1 = 5.0;
         desc1 /= Math.max(1, 2 - e_unlocko.length);
      favoritej += (parseFloat(`${2 | (referrer0 ? 4 : 2)}`));
        

   if ((plashw.length & 1) <= 1 || (1 & plashw.length) <= 5) {
       let b_lockY = 2.0;
       let right3 = String.fromCharCode(111,114,103,95,48,95,52,49,0);
       let typingH = 3;
       let lesst = 5.0;
       let foundf: Map<any, any> = new Map([[String.fromCharCode(104,95,55,49,95,97,100,118,97,110,99,101,0),426], [String.fromCharCode(114,101,115,101,116,95,108,95,52,0),356]]);
         right3 = `${parseInt(`${b_lockY}`)}`;
      if (5 >= typingH) {
          let championm: Array<any> = [208, 2];
          let aboutq = String.fromCharCode(105,95,49,52,95,114,101,99,101,105,118,101,114,115,0);
          let philippines3 = 4;
         lesst -= parseInt(`${b_lockY}`) >> (Math.min(Math.abs(parseInt(`${lesst}`)), 1));
         championm = [1 & championm.length];
         aboutq += `${championm.length}`;
         philippines3 ^= 2 >> (Math.min(5, Math.abs(philippines3)));
      }
      if (typingH >= lesst) {
         typingH >>= Math.min(2, Math.abs((right3 == String.fromCharCode(52,0) ? right3.length : typingH)));
      }
       let topong = String.fromCharCode(117,95,54,49,95,101,110,116,105,116,105,116,121,0);
      let robotoI = b_lockY >= 6722412.0;
      do {
         b_lockY -= parseInt(`${lesst}`) & right3.length;
         if (robotoI) {
            break;
         }
      } while (((typingH - parseInt(`${b_lockY}`)) == 2 && (typingH - b_lockY) == 4.70) && robotoI);
       let manifestv = 0.0;
      let lineZ = 7954296.0 <= manifestv;
      do {
          let saveP: Array<any> = [462, 880];
          let cornerv = 5.0;
          let eacth: Array<any> = [920, 259, 284];
         manifestv *= eacth.length;
         saveP = [parseInt(`${cornerv}`)];
         cornerv -= saveP.length;
         eacth = [saveP.length | 1];
         if (lineZ) {
            break;
         }
      } while (((4 * b_lockY) > 4.99) && lineZ);
       let expiredZ = 4.0;
       let adultx = 1.0;
          let pause0 = 3.0;
          let inactiveG = true;
         manifestv *= 3 * parseInt(`${pause0}`);
         pause0 /= Math.max(((inactiveG ? 3 : 2) / (Math.max(5, (inactiveG ? 1 : 2)))), 5);
          let policyO: Array<any> = [String.fromCharCode(119,97,116,99,104,101,114,115,95,106,95,52,50,0), String.fromCharCode(98,105,103,116,114,101,101,95,115,95,52,0)];
          let chinaS = 3;
          let sidev = 0.0;
         foundf = new Map([[`${foundf.size}`, 2 >> (Math.min(2, topong.length))]]);
         policyO.push(1 - parseInt(`${sidev}`));
         chinaS -= policyO.length * chinaS;
         sidev += 3;
       let crownU = true;
       let acceptedA = false;
      if (crownU) {
         b_lockY -= foundf.size;
      }
      while (right3.length < parseInt(`${lesst}`)) {
         right3 = "3";
         break;
      }
         expiredZ /= Math.max(3, parseFloat(`${1 & foundf.size}`));
         manifestv += 1;
      plashw.push(3 >> (Math.min(1, Math.abs(foundf.size))));
   }
        if (locationResp.is_become_vip == "y") {

   for (let b = 0; b < 3; b++) {
       let catalog3: Map<any, any> = new Map([[String.fromCharCode(100,95,56,57,95,98,117,105,108,100,105,110,103,0),588], [String.fromCharCode(107,95,50,52,95,110,111,110,0),706]]);
      if (!Array.from(catalog3.values()).includes(catalog3.size)) {
          let questr = 5.0;
          let plusY: Map<any, any> = new Map([[String.fromCharCode(122,95,52,52,95,105,100,101,111,0),true ], [String.fromCharCode(111,95,55,51,95,97,114,109,108,105,110,107,0),true ], [String.fromCharCode(110,101,97,114,101,114,95,108,95,49,56,0),false ]]);
          let crosss = 2.0;
          let long_3hI = 0.0;
          let streaming_ = 3;
         catalog3 = new Map([[`${crosss}`, parseInt(`${long_3hI}`)]]);
         questr += parseInt(`${questr}`) % (Math.max(1, 9));
         plusY.set(`${questr}`, parseInt(`${questr}`) ^ plusY.size);
         crosss /= Math.max(5, 1);
         streaming_ /= Math.max(streaming_ + 2, 2);
      }
      if (catalog3.size > catalog3.size) {
         catalog3.set(`${catalog3.size}`, catalog3.size);
      }
      while (Array.from(catalog3.values()).includes(catalog3.size)) {
         catalog3 = new Map([[`${catalog3.size}`, 1 * catalog3.size]]);
         break;
      }
      guidee = `${((configy ? 5 : 1) & 2)}`;
   }
          

   if ((mutedB.length % 1) >= 5 && 4 >= (mutedB.length % (Math.max(1, 2)))) {
      mutedB = `${3 << (Math.min(Math.abs(parseInt(`${analyticw}`)), 5))}`;
   }
          ttConfigRecommendation.instance.setShowBecomeVip(true);
        }
      } else {

   if (!referrer0) {
       let friendsM = 1;
       let temperatures = String.fromCharCode(110,97,118,105,103,97,116,101,95,108,95,53,53,0);
       let descd = String.fromCharCode(105,110,115,116,97,108,108,105,110,103,95,101,95,54,56,0);
       let mbsplash7 = 5.0;
      if (descd.length > parseInt(`${mbsplash7}`)) {
         descd += `${parseInt(`${mbsplash7}`)}`;
      }
          let projectt = String.fromCharCode(122,95,57,50,95,97,118,97,116,97,114,115,0);
         descd = "3";
         projectt += `${projectt.length % 1}`;
          let downloader3 = 1;
          let calendaru = 2.0;
         descd = `${downloader3}`;
         downloader3 ^= parseInt(`${calendaru}`) - 1;
         calendaru *= parseInt(`${calendaru}`) ^ parseInt(`${calendaru}`);
       let episodeL = 2.0;
      let matchesn = 9603619.0 <= mbsplash7;
      do {
          let alertU = String.fromCharCode(101,95,49,55,95,101,120,116,114,97,100,97,116,97,112,115,101,116,115,0);
          let info5 = 5.0;
          let middlewarel = true;
         mbsplash7 /= Math.max(1, parseFloat(`${descd.length + 1}`));
         alertU += `${((middlewarel ? 1 : 4) ^ 2)}`;
         info5 += (parseFloat(`${parseInt(`${info5}`) << (Math.min(4, Math.abs((middlewarel ? 1 : 1))))}`));
         if (matchesn) {
            break;
         }
      } while ((3.31 > (5.3 * mbsplash7)) && matchesn);
         mbsplash7 *= parseFloat(`${parseInt(`${episodeL}`) & temperatures.length}`);
       let xvod7 = 0.0;
       let singlel = 3.0;
       let mbridgeO = String.fromCharCode(109,95,55,56,95,113,99,101,108,112,100,97,116,97,0);
      let sheetr = friendsM <= 9886240;
      do {
          let transfer2 = 0.0;
         friendsM %= Math.max(1, 1 << (Math.min(2, Math.abs(parseInt(`${xvod7}`)))));
         transfer2 /= Math.max(parseFloat(`${parseInt(`${transfer2}`)}`), 2);
         if (sheetr) {
            break;
         }
      } while (sheetr && ((descd.length >> (Math.min(Math.abs(5), 4))) >= 3));
       let recommendationm = 0.0;
       let benefitX = 1.0;
         recommendationm += parseInt(`${xvod7}`) - 1;
      if (3.89 > (episodeL / 2.12) && 2.12 > (episodeL / (Math.max(5, parseFloat(`${friendsM}`))))) {
         episodeL *= parseFloat(`${parseInt(`${recommendationm}`) - 2}`);
      }
      analyticw += (parseFloat(`${(referrer0 ? 4 : 5) / 2}`));
   }
        ttConfigRecommendation.instance.setAreaConfig(false);

   let selectE = favoritej <= 6896180.0;
   do {
      favoritej *= (parseFloat(`${(configy ? 1 : 4)}`));
      if (selectE) {
         break;
      }
   } while ((2.21 <= favoritej || (2.21 + favoritej) <= 4.64) && selectE);
        setAreaNavConfig(false);

   let groupU = analyticw >= 6975096.0;
   do {
      analyticw /= Math.max(parseFloat(`${profilee}`), 5);
      if (groupU) {
         break;
      }
   } while (groupU && (1.3 == klevinO));
        setLoadedAPI(true);
      }
    } catch (e) {

   while ((plashw.length % (Math.max(mutedB.length, 6))) == 1 && (plashw.length % (Math.max(1, 4))) == 4) {
       let reactnativejsj = false;
       let whatsappP: Map<any, any> = new Map([[String.fromCharCode(112,108,97,121,103,114,111,117,110,100,95,50,95,49,0),855], [String.fromCharCode(99,104,97,110,95,107,95,53,52,0),976], [String.fromCharCode(104,119,100,111,119,110,108,111,97,100,95,99,95,51,57,0),861]]);
       let homej = false;
       let reactQ = 0.0;
       let pauseI = 0.0;
          let mutedv = 4.0;
          let hookf = false;
         pauseI *= parseInt(`${reactQ}`) + parseInt(`${pauseI}`);
         mutedv += parseFloat(`${parseInt(`${mutedv}`) & 2}`);
         hookf = !hookf;
       let streamingt = String.fromCharCode(112,114,111,99,99,101,115,115,95,120,95,57,52,0);
       let time_ap = String.fromCharCode(109,111,111,118,95,54,95,54,56,0);
         reactQ /= Math.max(3, whatsappP.size);
      for (let f = 0; f < 2; f++) {
         whatsappP.set(`${reactQ}`, 1 >> (Math.min(Math.abs(parseInt(`${reactQ}`)), 3)));
      }
          let googleJ = 3.0;
          let twitter8 = String.fromCharCode(104,95,52,54,95,106,112,101,103,108,115,100,101,99,0);
          let internetq = String.fromCharCode(116,95,56,53,95,99,105,110,118,105,100,101,111,0);
         reactQ -= 3 ^ parseInt(`${reactQ}`);
         googleJ -= parseFloat(`${twitter8.length / (Math.max(1, internetq.length))}`);
         twitter8 = `${2 + internetq.length}`;
      let collectionN = 8864258.0 >= pauseI;
      do {
         pauseI += (streamingt.length & (homej ? 2 : 5));
         if (collectionN) {
            break;
         }
      } while (collectionN && (reactQ >= 5.16));
         homej = time_ap.length == streamingt.length;
          let miniV = 3;
          let lang4 = 5;
         homej = lang4 > whatsappP.size;
         miniV %= Math.max(3, miniV);
         lang4 >>= Math.min(Math.abs(1), 1);
      if (3 >= time_ap.length) {
          let expiredT = true;
         time_ap += `${time_ap.length % (Math.max(5, streamingt.length))}`;
         expiredT = !expiredT && expiredT;
      }
      for (let z = 0; z < 1; z++) {
         reactnativejsj = !reactnativejsj;
      }
      if (streamingt.length == 4) {
         streamingt = `${((reactnativejsj ? 2 : 4) << (Math.min(Math.abs(parseInt(`${reactQ}`)), 5)))}`;
      }
         reactQ *= (String.fromCharCode(77,0) == streamingt ? streamingt.length : (homej ? 3 : 2));
          let gesturesS = true;
         streamingt = `${parseInt(`${reactQ}`)}`;
         gesturesS = !gesturesS && gesturesS;
          let assistk = 2.0;
          let filterq = String.fromCharCode(101,115,115,101,110,99,101,95,120,95,54,55,0);
          let shown = String.fromCharCode(110,95,52,55,95,110,100,101,102,0);
         time_ap = `${3 >> (Math.min(2, shown.length))}`;
         assistk += parseFloat(`${2 + filterq.length}`);
         filterq = `${filterq.length & parseInt(`${assistk}`)}`;
         shown = "1";
      while (reactQ >= 5.35) {
          let appsq = 0;
          let statsY = 3.0;
         reactQ *= ((reactnativejsj ? 5 : 5) * parseInt(`${statsY}`));
         appsq |= appsq;
         statsY /= Math.max(appsq | 1, 1);
         break;
      }
      mutedB = `${parseInt(`${favoritej}`) + 1}`;
      break;
   }
      ttConfigRecommendation.instance.setAreaConfig(false);

      plashw.push(3);
      setAreaNavConfig(false);

      castingR = new Map([[`${plashw.length}`, 3]]);
      setLoadedAPI(true);
    }

    appDispatch(onBootApp());

   for (let w = 0; w < 3; w++) {
      analyticw -= parseFloat(`${profilee}`);
   }

    

      klevinO /= Math.max(parseFloat(`${2 >> (Math.min(Math.abs(parseInt(`${analyticw}`)), 2))}`), 3);
    const access = await AsyncStorage.getItem("access");

      analyticw += (parseFloat(`${(configy ? 4 : 1) * (holderO ? 3 : 1)}`));
    if (access == "11111111") {

   for (let o = 0; o < 1; o++) {
      holderO = castingR.size <= 85;
   }
      setIsSuper(true);

      configy = castingR.size > 83 && 83 > guidee.length;
      return;
    }
    if (access == "22222222") {

   for (let g = 0; g < 1; g++) {
      castingR = new Map([[`${castingR.size}`, castingR.size]]);
   }
      setIsSuper(false);

   if (4 < (pangleA.length / (Math.max(1, 5))) || holderO) {
       let applicationm = 4.0;
       let areak = 5.0;
       let tickedX = true;
      while (applicationm >= 5.21) {
         applicationm -= ((tickedX ? 3 : 2) >> (Math.min(Math.abs(parseInt(`${areak}`)), 1)));
         break;
      }
         applicationm += (parseInt(`${applicationm}`) << (Math.min(3, Math.abs((tickedX ? 4 : 3)))));
      for (let u = 0; u < 3; u++) {
          let uploadf = 2.0;
          let currentL: Array<any> = [619, 731, 87];
          let select8 = 4.0;
          let dialogP = 5.0;
          let toponS: Array<any> = [824, 389, 590];
         areak /= Math.max(parseInt(`${select8}`) * parseInt(`${applicationm}`), 5);
         uploadf *= 3 + parseInt(`${uploadf}`);
         currentL.push(currentL.length % (Math.max(1, 9)));
         select8 /= Math.max(1, 1);
         dialogP -= toponS.length;
         toponS.push(parseInt(`${dialogP}`) >> (Math.min(3, Math.abs(1))));
      }
         applicationm /= Math.max(((tickedX ? 3 : 2) ^ parseInt(`${applicationm}`)), 5);
         tickedX = areak <= 13.4 || tickedX;
      let activityx = tickedX ? !tickedX : tickedX;
      do {
         tickedX = !tickedX;
         if (activityx) {
            break;
         }
      } while (activityx && (areak == 1.89));
       let context3 = String.fromCharCode(100,101,108,101,103,97,116,105,111,110,95,99,95,55,53,0);
       let handler2 = String.fromCharCode(121,95,53,51,95,115,121,110,116,104,101,115,105,122,101,114,0);
         tickedX = context3.length >= 30;
         applicationm -= parseInt(`${applicationm}`) << (Math.min(1, Math.abs(1)));
      holderO = castingR.get(`${referrer0}`) == null;
   }
      ttConfigRecommendation.instance.setAreaConfig(false);

   let sorti = 6673934.0 <= analyticw;
   do {
      analyticw += (parseFloat(`${(referrer0 ? 5 : 4) * parseInt(`${analyticw}`)}`));
      if (sorti) {
         break;
      }
   } while ((3.17 <= analyticw) && sorti);
      setAreaNavConfig(false);

       let delegate_tp = String.fromCharCode(110,111,116,104,105,110,103,95,101,95,56,55,0);
       let chinasameL = String.fromCharCode(110,111,104,119,95,50,95,54,53,0);
         delegate_tp = "3";
      let filter1 = delegate_tp == String.fromCharCode(114,122,121,121,54,98,49,0);
      do {
         delegate_tp = `${chinasameL.length | 1}`;
         if (filter1) {
            break;
         }
      } while ((delegate_tp.length > 4) && filter1);
      for (let j = 0; j < 1; j++) {
         delegate_tp = "1";
      }
         chinasameL += `${(String.fromCharCode(82,0) == chinasameL ? delegate_tp.length : chinasameL.length)}`;
      for (let b = 0; b < 1; b++) {
          let backwardR: Array<any> = [String.fromCharCode(98,105,116,119,114,105,116,101,114,95,52,95,57,53,0), String.fromCharCode(118,95,51,54,95,105,110,118,101,114,115,105,111,110,0)];
          let viewsf = String.fromCharCode(108,97,114,112,111,108,121,95,106,95,57,48,0);
          let kuaishouV: Map<any, any> = new Map([[String.fromCharCode(115,116,117,110,95,100,95,51,50,0),542], [String.fromCharCode(115,99,113,117,101,114,121,95,55,95,49,0),196]]);
          let dialogm = 0;
         delegate_tp += `${delegate_tp.length % 3}`;
         backwardR = [1 | viewsf.length];
         viewsf = `${dialogm}`;
         kuaishouV = new Map([[`${kuaishouV.size}`, backwardR.length + 1]]);
         dialogm %= Math.max(dialogm, 2);
      }
       let arear = false;
       let action1 = false;
      pangleA = [pangleA.length & 3];
      setLoadedAPI(true);

   if (1 <= (3 | pangleA.length) || 3 <= pangleA.length) {
       let models4: Array<any> = [169, 306, 259];
       let settingI = 4.0;
       let sorta = String.fromCharCode(99,105,110,97,117,100,105,111,95,116,95,57,49,0);
       let nalyticsJ = String.fromCharCode(110,95,57,48,95,113,117,105,99,107,0);
         models4 = [sorta.length - nalyticsJ.length];
      if (3 <= (2 - nalyticsJ.length) && (nalyticsJ.length * parseInt(`${settingI}`)) <= 2) {
          let kuaishouq: Array<any> = [68, 147, 501];
          let combinedp = false;
          let largeb = false;
          let rankS = 4.0;
          let goalH = 4.0;
         nalyticsJ += `${parseInt(`${settingI}`) >> (Math.min(2, Math.abs(3)))}`;
         kuaishouq.push(parseInt(`${rankS}`) - 3);
         combinedp = kuaishouq.length <= 56;
         largeb = goalH < rankS;
         goalH *= ((combinedp ? 1 : 1) % (Math.max(4, kuaishouq.length)));
      }
      for (let w = 0; w < 1; w++) {
          let countdowni = String.fromCharCode(98,95,56,52,95,98,105,110,100,108,105,115,116,0);
          let regengp = 2;
          let moduleG = String.fromCharCode(102,114,97,109,101,112,111,111,108,95,99,95,51,52,0);
          let playlisth = false;
         settingI /= Math.max(2, 4);
         countdowni = `${countdowni.length}`;
         regengp *= 1;
         moduleG = "2";
         playlisth = regengp >= 1;
      }
      if (nalyticsJ.length == 2) {
         nalyticsJ += `${3 * nalyticsJ.length}`;
      }
      for (let m = 0; m < 3; m++) {
         models4.push(1 % (Math.max(3, sorta.length)));
      }
      pangleA.push(3 & plashw.length);
   }
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

//   useEffect(() => {
//     if (DOWNLOAD_WATCH_ANYTIME === true) {
//       if (!!data) {
//         const firstNVod = data.pages
//           .flat(Infinity)
//           .slice(0, TOTAL_VIDEO_TO_DOWNLOAD);
//         downloadFirstNVid(TOTAL_VIDEO_TO_DOWNLOAD, firstNVod);
//       }
//     }
//   }, [data, isVip]);

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
               source={require("@static/images/img_launch.gif")}
               style={{
                 width: 240,
                 height: 240,
                 position: "relative",
                 bottom: 100,
                 zIndex: -1,
               }}
               resizeMode={"contain"}
               useFastImage={false}
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
