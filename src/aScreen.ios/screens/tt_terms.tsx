import React, { useCallback, useEffect, useState, memo, useContext } from "react";
import { Dimensions, Platform, StyleSheet, View } from "react-native";
import ScreenContainer from "../components/container/tt_backward";
import { useFocusEffect, useTheme } from "@react-navigation/native";
import { useQuery, useQueries, UseQueryResult } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import {
  ttSide,
} from "@type/tt_line_borderless";
import {
  BottomTabScreenProps,
  useBottomTabBarHeight,
} from "@react-navigation/bottom-tabs";
import {
  ANDROID_HOME_PAGE_POP_UP_ADS,
  API_DOMAIN,
  IOS_HOME_PAGE_POP_UP_ADS,
} from "@utility/tt_trophy_cross";
import CatagoryHome from "../components/container/tt_profile";
import RecommendationHome from "../components/container/tt_mail_package";
import HomeHeader from "../components/header/tt_inactive_strings_header";
import FastImage from "../components/common/tt_connection";
import { useIsFocused } from "@react-navigation/native";
import NoConnection from "./../components/common/tt_fast";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";
import { useAppSelector, useAppDispatch, useSelector } from "@hooks/tt_spec_download";
import { ttOrange } from "@redux/tt_updates_bottom";
import { ttBaiduNewinterstitial } from "@redux/reducers/tt_center";
import HomeNav from "../components/tabNavigate/tt_circle_view";

import {
  ATRNSDK,
  ATInterstitialRNSDK,
  ATBannerRNSDK,
} from "./../../../AnyThinkAds/tt_router";
import { AdsBannerContext } from "../../contexts/tt_injury_reminder";

import tt_humidity_guide from "../../../Umeng/tt_humidity_guide";
import { ttSinaPrediction } from "@api";
import DeviceInfo from "react-native-device-info";
import { ttGoal } from "@redux/reducers/tt_selected";
import { ttFast } from "@models/tt_stations_right";

function tt_terms({ navigation }: BottomTabScreenProps<any>) {
  const isFocused = useIsFocused();
  const { colors, spacing } = useTheme();
  const [navId, setNavId] = useState(0);
  const queryClient = useQueryClient();
  const [isOffline, setIsOffline] = useState(false);
  const [showHomeLoading, setShowHomeLoading] = useState(true);
  const settingsReducer: ttBaiduNewinterstitial = useAppSelector(
    ({ settingsReducer }: ttOrange) => settingsReducer
  );
  const userState = useSelector<ttGoal>('userReducer');
  const isVip = ttFast.isVip(userState.user);
  const bottomTabHeight = useBottomTabBarHeight();

  const { data: navOptions, refetch } = useQuery({
    queryKey: ["HomePageNavOptions"],
    queryFn: () => ttSinaPrediction.getHomeNav(),
  });

  const fetchData = useCallback((id: number) => ttSinaPrediction.getHomePages(id, isVip), []);

  const data = useQueries({
    queries: navOptions
      ? navOptions.map((x: any) => ({
          queryKey: ["HomePage", x.id === 0 ? 1001 : x.id], 
          queryFn: () => fetchData(x.id),
        }))
      : [],
  });
  

  const checkConnection = async () => {
       let detail3: Array<any> = [831, 751, 790];
    let agreement7 = true;
    let modityh = String.fromCharCode(113,95,51,95,114,105,110,103,116,111,110,101,0);
    let memberu = 2.0;
    let q_positionP = 5;
    let promotiond: Array<any> = [String.fromCharCode(116,99,112,95,97,95,50,54,0), String.fromCharCode(99,111,109,98,105,110,101,100,95,113,95,57,51,0)];
    let c_lockR = String.fromCharCode(112,114,101,97,108,108,111,99,97,116,101,95,53,95,48,0);
    let minivod6 = 5.0;
    let moonJ = 3.0;
    let linef = 0.0;
    let whitey = String.fromCharCode(117,110,105,111,110,95,115,95,54,48,0);
   while (3 < c_lockR.length) {
       let sportL = 2.0;
       let searchbarr = false;
      while ((sportL / 2.34) <= 1.88) {
          let less4 = 1.0;
          let winda = String.fromCharCode(99,111,109,112,97,116,105,98,108,101,95,54,95,54,54,0);
          let wind4 = 0;
          let y_unlocka = String.fromCharCode(112,116,114,109,97,112,95,106,95,55,57,0);
         searchbarr = 59 >= y_unlocka.length;
         less4 /= Math.max(2, wind4);
         winda += "2";
         wind4 |= 3 & wind4;
         y_unlocka += "3 - wind4";
         break;
      }
      while (searchbarr) {
         sportL += (parseFloat(`${parseInt(`${sportL}`) & (searchbarr ? 5 : 4)}`));
         break;
      }
      promotiond.push(c_lockR.length);
      break;
   }
   let configure7 = modityh.length <= 6771155;
   do {
      modityh += `${(c_lockR.length | (agreement7 ? 5 : 5))}`;
      if (configure7) {
         break;
      }
   } while (configure7 && (!modityh.startsWith(`${agreement7}`)));
       let morep = String.fromCharCode(119,95,49,48,48,95,117,110,105,119,103,116,0);
       let mbbanner1 = String.fromCharCode(113,95,56,95,112,104,97,115,101,115,0);
          let gpayV = false;
          let gemfileA = String.fromCharCode(112,95,51,54,95,115,99,97,110,0);
         mbbanner1 = `${morep.length & mbbanner1.length}`;
         gpayV = gpayV && gemfileA.length >= 58;
         gemfileA = `${((gpayV ? 5 : 3))}`;
       let backgroundk = String.fromCharCode(97,115,115,111,99,105,97,116,105,111,110,115,95,50,95,53,55,0);
       let analyticsc = String.fromCharCode(116,114,105,108,105,110,101,97,114,95,107,95,54,57,0);
         analyticsc += `${backgroundk.length}`;
      while (backgroundk.length >= 3) {
         morep = `${(String.fromCharCode(99,0) == analyticsc ? analyticsc.length : backgroundk.length)}`;
         break;
      }
      let robotoL = 8051407 <= backgroundk.length;
      do {
         backgroundk += `${mbbanner1.length}`;
         if (robotoL) {
            break;
         }
      } while ((!backgroundk.endsWith(analyticsc)) && robotoL);
       let albumz: Map<any, any> = new Map([[String.fromCharCode(103,95,49,48,95,104,101,99,111,0),367], [String.fromCharCode(97,108,101,114,116,115,95,106,95,50,51,0),527], [String.fromCharCode(112,117,98,105,99,95,55,95,49,52,0),385]]);
      memberu += 3 % (Math.max(q_positionP, 2));
      modityh = `${modityh.length}`;

    const state = await NetInfo.fetch();

   let clubv = 7019160 <= q_positionP;
   do {
      q_positionP /= Math.max(((agreement7 ? 1 : 2) << (Math.min(Math.abs(parseInt(`${memberu}`)), 1))), 2);
      if (clubv) {
         break;
      }
   } while (clubv && (3 == (3 * q_positionP)));
   while (detail3.length < c_lockR.length) {
      c_lockR += "3";
      break;
   }
      agreement7 = c_lockR.length < 49;
   for (let f = 0; f < 2; f++) {
      c_lockR = "1";
   }
    

       let gradlewv = String.fromCharCode(111,95,57,52,95,118,101,114,105,102,105,101,114,0);
      let confirmationP = gradlewv == String.fromCharCode(51,102,104,106,122,53,111,54,107,0);
      do {
         gradlewv = `${gradlewv.length}`;
         if (confirmationP) {
            break;
         }
      } while (confirmationP && (!gradlewv.includes(`${gradlewv.length}`)));
          let episodesb = 3.0;
         gradlewv += `${gradlewv.length * parseInt(`${episodesb}`)}`;
       let plust = String.fromCharCode(99,101,110,116,114,97,108,105,116,121,95,109,95,52,48,0);
       let promotionj = String.fromCharCode(114,95,56,50,95,108,111,103,103,97,98,108,101,0);
      memberu -= 2;
   while ((4 << (Math.min(3, Math.abs(q_positionP)))) < 4 || (4 ^ q_positionP) < 2) {
       let tickb = String.fromCharCode(108,111,99,107,97,98,108,101,95,106,95,53,0);
       let halfW = 2;
       let pangleO = String.fromCharCode(112,97,97,100,95,119,95,49,0);
       let recommendationS = String.fromCharCode(118,105,115,105,98,108,101,95,53,95,54,54,0);
       let starp = false;
          let recommendationi = 4;
         recommendationS += `${2 - pangleO.length}`;
         recommendationi |= recommendationi;
          let crosss = String.fromCharCode(108,95,49,48,48,95,108,111,119,101,114,99,97,115,101,100,0);
          let tooltipsE = 3;
         tickb = `${(tickb == String.fromCharCode(83,0) ? tickb.length : recommendationS.length)}`;
         crosss = "3";
         tooltipsE *= tooltipsE;
      for (let f = 0; f < 3; f++) {
          let contextn = 1.0;
          let singaporer: Array<any> = [104, 131, 637];
          let acceptede = String.fromCharCode(105,115,109,108,95,105,95,50,48,0);
          let expiredp = String.fromCharCode(111,95,54,52,95,100,101,99,114,101,97,115,101,0);
          let activityW = String.fromCharCode(104,95,53,95,99,111,109,112,108,101,116,101,0);
         starp = !expiredp.startsWith(`${contextn}`);
         contextn /= Math.max(2, (parseFloat(`${String.fromCharCode(85,0) == acceptede ? activityW.length : acceptede.length}`)));
         singaporer = [acceptede.length >> (Math.min(5, singaporer.length))];
         expiredp += `${(String.fromCharCode(75,0) == acceptede ? singaporer.length : acceptede.length)}`;
         activityW += `${1 * acceptede.length}`;
      }
          let upgradei = 3;
          let circleN: Array<any> = [776, 725];
         starp = circleN.length <= 78 && upgradei <= 78;
      let header1 = 6336013 <= pangleO.length;
      do {
         pangleO = `${((starp ? 1 : 3) / 3)}`;
         if (header1) {
            break;
         }
      } while (header1 && (recommendationS.length == pangleO.length));
      let mbnativeadvancedz = String.fromCharCode(119,100,97,109,50,57,55,49,104,0) == pangleO;
      do {
          let moviesQ = String.fromCharCode(117,110,105,118,101,114,115,97,108,95,109,95,56,51,0);
          let tempW: Map<any, any> = new Map([[String.fromCharCode(114,101,109,105,120,95,114,95,54,50,0),407], [String.fromCharCode(112,111,115,116,97,108,95,53,95,56,57,0),122]]);
         pangleO = `${2 * halfW}`;
         moviesQ += `${1 % (Math.max(8, tempW.size))}`;
         tempW = new Map([[`${tempW.size}`, moviesQ.length - 1]]);
         if (mbnativeadvancedz) {
            break;
         }
      } while (mbnativeadvancedz && (recommendationS.length < 2));
      let become5 = starp ? !starp : starp;
      do {
         starp = !starp;
         if (become5) {
            break;
         }
      } while ((!pangleO.includes(`${starp}`)) && become5);
       let l_playerV: Map<any, any> = new Map([[String.fromCharCode(115,116,97,109,112,115,95,108,95,49,48,48,0),String.fromCharCode(99,95,50,52,95,112,104,105,0)], [String.fromCharCode(114,95,52,57,95,100,101,97,100,108,111,99,107,101,100,0),String.fromCharCode(112,108,97,121,103,114,111,117,110,100,95,55,95,51,51,0)]]);
         l_playerV.set(`${starp}`, 1);
         recommendationS = `${pangleO.length & halfW}`;
      for (let e = 0; e < 1; e++) {
          let n_count1 = String.fromCharCode(100,95,51,50,95,109,105,110,117,116,101,0);
         starp = halfW >= 43;
         n_count1 = `${n_count1.length}`;
      }
      if (pangleO.length >= 4) {
         tickb = `${pangleO.length * l_playerV.size}`;
      }
      while (4 >= (halfW << (Math.min(tickb.length, 3))) && 4 >= (tickb.length << (Math.min(Math.abs(4), 4)))) {
         halfW /= Math.max(l_playerV.size, 3);
         break;
      }
      for (let j = 0; j < 1; j++) {
          let placeholder1 = String.fromCharCode(98,95,53,55,95,112,108,117,114,97,108,105,122,97,116,105,111,110,0);
          let analyticsw = 3.0;
          let holderh = 4.0;
          let transferP = false;
          let backe = 2.0;
         recommendationS = `${((starp ? 2 : 1) / (Math.max(l_playerV.size, 8)))}`;
         placeholder1 += `${(parseInt(`${holderh}`) << (Math.min(4, Math.abs((transferP ? 4 : 2)))))}`;
         analyticsw *= ((transferP ? 1 : 2) - parseInt(`${holderh}`));
         backe -= parseFloat(`${parseInt(`${analyticsw}`) * 2}`);
      }
      for (let s = 0; s < 2; s++) {
          let areaO = String.fromCharCode(105,95,52,52,95,97,102,116,101,114,0);
          let hookf = 3.0;
         halfW *= tickb.length;
         areaO = "3";
         hookf -= parseFloat(`${parseInt(`${hookf}`)}`);
      }
      q_positionP ^= parseInt(`${minivod6}`) >> (Math.min(Math.abs(3), 2));
      break;
   }
   for (let g = 0; g < 3; g++) {
       let downloadery = false;
       let mbsplashA: Array<any> = [String.fromCharCode(104,95,53,49,95,116,119,105,116,116,101,114,0), String.fromCharCode(97,95,52,57,95,118,109,115,108,0)];
       let analyticsn = String.fromCharCode(120,95,57,51,95,108,111,103,105,99,97,108,0);
       let package_0b: Array<any> = [String.fromCharCode(102,105,110,97,108,105,122,101,95,111,95,50,50,0), String.fromCharCode(103,95,50,53,95,116,111,117,99,104,101,100,0), String.fromCharCode(110,95,52,55,95,105,110,100,105,99,97,116,111,114,0)];
         package_0b = [package_0b.length - 2];
      while (downloadery || 1 < (mbsplashA.length ^ 5)) {
          let foregroundY = String.fromCharCode(119,95,53,51,0);
         mbsplashA.push(1 | analyticsn.length);
         foregroundY = `${2 | foregroundY.length}`;
         break;
      }
      while (3 >= analyticsn.length && !downloadery) {
         analyticsn += `${(1 - (downloadery ? 2 : 2))}`;
         break;
      }
      while ((mbsplashA.length ^ 5) < 3) {
          let sharedR = 0.0;
          let friendsW: Map<any, any> = new Map([[String.fromCharCode(115,101,109,97,110,116,105,99,97,108,108,121,95,49,95,54,57,0),String.fromCharCode(118,98,101,122,105,101,114,95,48,95,55,52,0)], [String.fromCharCode(107,95,53,52,95,100,101,115,99,114,105,98,101,0),String.fromCharCode(108,105,115,116,101,110,95,57,95,52,54,0)], [String.fromCharCode(121,95,57,54,95,104,114,101,97,100,0),String.fromCharCode(121,95,56,48,95,101,120,99,108,0)]]);
          let filled9 = 4.0;
         downloadery = !downloadery && mbsplashA.length > 6;
         sharedR /= Math.max(5, 1 | parseInt(`${sharedR}`));
         friendsW.set(`${sharedR}`, friendsW.size & parseInt(`${sharedR}`));
         filled9 /= Math.max(parseFloat(`${parseInt(`${filled9}`) / 3}`), 1);
         break;
      }
         mbsplashA.push((mbsplashA.length >> (Math.min(3, Math.abs((downloadery ? 1 : 5))))));
      for (let c = 0; c < 1; c++) {
         mbsplashA.push(3);
      }
      let typesJ = 7139325 >= mbsplashA.length;
      do {
         mbsplashA.push(((downloadery ? 3 : 2) - 3));
         if (typesJ) {
            break;
         }
      } while ((package_0b.length == mbsplashA.length) && typesJ);
      for (let w = 0; w < 2; w++) {
         mbsplashA = [package_0b.length];
      }
         package_0b.push(mbsplashA.length);
      while (4 == (3 + analyticsn.length)) {
         analyticsn = `${mbsplashA.length}`;
         break;
      }
          let photoS: Array<any> = [951, 584, 546];
          let tumbnail1 = String.fromCharCode(105,109,112,108,101,109,101,110,116,115,95,104,95,49,56,0);
          let assiste: Array<any> = [961, 68];
         downloadery = tumbnail1.length > 40;
         photoS.push(1 - assiste.length);
         tumbnail1 = `${photoS.length}`;
         assiste = [photoS.length + 2];
         package_0b.push(mbsplashA.length * 3);
      q_positionP ^= 2 | mbsplashA.length;
   }
   if (agreement7) {
      promotiond.push(parseInt(`${minivod6}`) & parseInt(`${memberu}`));
   }
    const offline = !(state.isConnected && ((state.isInternetReachable === true || state.isInternetReachable === null) ? true : false));
    setIsOffline(offline);

   let bottomq = detail3.length <= 4922747;
   do {
      detail3 = [parseInt(`${memberu}`)];
      if (bottomq) {
         break;
      }
   } while (bottomq && (3 == (detail3.length / (Math.max(5, 6))) && 5 == detail3.length));
   while (1 > (parseInt(`${minivod6}`) * modityh.length)) {
      modityh += `${(String.fromCharCode(53,0) == c_lockR ? detail3.length : c_lockR.length)}`;
      break;
   }
   if (1 >= (q_positionP & 2) || 5 >= (2 & q_positionP)) {
      promotiond = [2];
   }
   let text5 = modityh == String.fromCharCode(113,113,57,120,53,121,116,100,107,52,0);
   do {
      modityh = "3";
      if (text5) {
         break;
      }
   } while (text5 && (minivod6 >= 4.25));
    if (!offline) {

       let styleU = 1;
       let kuaishoun = 5.0;
       let sendh = String.fromCharCode(110,95,51,53,95,105,110,112,117,116,121,0);
      let actions8 = styleU >= 8618437;
      do {
         styleU -= 2 - parseInt(`${kuaishoun}`);
         if (actions8) {
            break;
         }
      } while (actions8 && (sendh.length == styleU));
      if ((sendh.length + 2) <= 4 || 4 <= (styleU + 2)) {
         styleU += (sendh == String.fromCharCode(89,0) ? styleU : sendh.length);
      }
          let catagoryn = 3;
          let videof = true;
         kuaishoun -= (parseFloat(`${(videof ? 4 : 3) - catagoryn}`));
      let clearT = 8963279 >= styleU;
      do {
         styleU -= (String.fromCharCode(114,0) == sendh ? parseInt(`${kuaishoun}`) : sendh.length);
         if (clearT) {
            break;
         }
      } while (clearT && ((1 + sendh.length) <= 5));
      if (1 >= styleU) {
         styleU /= Math.max(4, sendh.length);
      }
         sendh += `${2 & sendh.length}`;
         styleU *= sendh.length;
      if ((1 ^ styleU) > 5) {
         kuaishoun -= parseFloat(`${3 ^ styleU}`);
      }
      let formZ = 8092623 >= sendh.length;
      do {
          let tumbnailQ = false;
          let private_3A = String.fromCharCode(117,110,102,111,99,117,115,101,100,95,104,95,51,52,0);
          let roboto4 = String.fromCharCode(109,115,98,115,95,112,95,57,50,0);
          let update_dO: Map<any, any> = new Map([[String.fromCharCode(114,101,99,111,110,110,101,99,116,105,111,110,95,100,95,54,49,0),278], [String.fromCharCode(117,95,51,51,95,104,111,115,116,112,111,114,116,102,105,108,101,0),322]]);
         sendh += `${sendh.length % 2}`;
         tumbnailQ = !tumbnailQ;
         private_3A = `${private_3A.length}`;
         roboto4 = `${roboto4.length}`;
         update_dO.set(`${roboto4}`, 3);
         if (formZ) {
            break;
         }
      } while (formZ && (!sendh.includes(`${kuaishoun}`)));
      promotiond.push((sendh == String.fromCharCode(87,0) ? sendh.length : modityh.length));
   let frame_35 = promotiond.length <= 9484375;
   do {
       let fieldX: Map<any, any> = new Map([[String.fromCharCode(113,95,55,49,95,98,117,116,116,111,110,0),String.fromCharCode(120,116,101,97,95,48,95,52,57,0)], [String.fromCharCode(122,95,50,56,95,115,117,110,115,101,116,0),String.fromCharCode(102,95,52,95,99,111,108,108,97,103,101,0)]]);
       let vignettec = String.fromCharCode(112,97,99,107,101,116,95,115,95,52,52,0);
      let manifestE = vignettec == String.fromCharCode(111,95,52,97,51,116,50,0);
      do {
         vignettec = `${2 << (Math.min(5, vignettec.length))}`;
         if (manifestE) {
            break;
         }
      } while (manifestE && (4 == vignettec.length));
          let shootC = String.fromCharCode(118,97,114,105,110,116,115,95,97,95,51,54,0);
          let middlewarew = 5;
         fieldX.set(`${middlewarew}`, fieldX.size);
         shootC += `${(String.fromCharCode(83,0) == shootC ? shootC.length : shootC.length)}`;
         middlewarew %= Math.max(2, 2);
       let banner2 = String.fromCharCode(116,97,112,112,105,110,103,95,102,95,49,48,0);
         fieldX = new Map([[banner2, banner2.length]]);
          let dangeru = String.fromCharCode(106,95,50,55,95,115,95,55,57,0);
          let spinnerk = true;
          let flyerd = 0.0;
         vignettec = `${(banner2 == String.fromCharCode(100,0) ? vignettec.length : banner2.length)}`;
         dangeru += "2";
         spinnerk = 16.68 >= flyerd && spinnerk;
         flyerd += (parseFloat(`${(spinnerk ? 4 : 4) - parseInt(`${flyerd}`)}`));
          let mcopy_zrw = 3.0;
         vignettec = `${vignettec.length}`;
         mcopy_zrw *= parseFloat(`${parseInt(`${mcopy_zrw}`)}`);
      promotiond = [1];
      if (frame_35) {
         break;
      }
   } while (frame_35 && (agreement7));
   for (let g = 0; g < 2; g++) {
      minivod6 -= 2 << (Math.min(2, detail3.length));
   }
       let gradlewp = String.fromCharCode(112,101,114,112,101,110,100,105,99,117,108,97,114,95,50,95,54,51,0);
       let membershipS = 3.0;
       let matchesX = 0;
      let type_h6 = 7525746.0 >= membershipS;
      do {
         membershipS -= matchesX;
         if (type_h6) {
            break;
         }
      } while ((4 <= (gradlewp.length + parseInt(`${membershipS}`))) && type_h6);
          let verticalu: Array<any> = [945, 331, 878];
          let sansx = String.fromCharCode(113,95,57,56,95,99,111,111,114,100,105,110,97,116,111,114,0);
         gradlewp += `${1 << (Math.min(3, sansx.length))}`;
         verticalu.push(3 ^ verticalu.length);
         sansx += `${verticalu.length}`;
      if (5 <= matchesX) {
          let favorite8: Map<any, any> = new Map([[String.fromCharCode(115,101,114,105,97,108,105,122,101,100,95,103,95,57,52,0),771], [String.fromCharCode(105,110,99,111,109,105,110,103,95,116,95,56,53,0),369]]);
         membershipS -= matchesX;
         favorite8 = new Map([[`${favorite8.size}`, favorite8.size - favorite8.size]]);
      }
         gradlewp = `${matchesX}`;
      if ((5.30 * membershipS) < 3.60 && 4 < (matchesX * parseInt(`${membershipS}`))) {
          let descA = String.fromCharCode(101,110,118,101,108,111,112,101,100,95,100,95,53,49,0);
          let skipp = String.fromCharCode(97,99,99,101,112,116,95,115,95,56,54,0);
          let reminderG = 0.0;
          let chinasame5 = String.fromCharCode(118,95,56,55,0);
         matchesX &= 1 << (Math.min(1, gradlewp.length));
         descA += `${3 | skipp.length}`;
         skipp += `${parseInt(`${reminderG}`)}`;
         reminderG -= parseFloat(`${1}`);
         chinasame5 = "2";
      }
      if (1.70 < (membershipS / (Math.max(3.95, 3)))) {
         matchesX *= parseInt(`${membershipS}`) % (Math.max(5, matchesX));
      }
         gradlewp += `${gradlewp.length}`;
         gradlewp += `${matchesX}`;
         gradlewp = "1";
      linef += parseFloat(`${1 << (Math.min(2, Math.abs(q_positionP)))}`);
      handleRefresh(navId);
    }
  };
  const handleShowLoading = async () => {
       let matchesB = String.fromCharCode(110,95,57,49,95,97,97,99,99,111,100,101,114,0);
    let rewardvideoh = String.fromCharCode(109,115,118,115,95,55,95,53,56,0);
    let window_6_q = String.fromCharCode(116,95,54,54,95,115,116,97,114,114,101,100,0);
    let sportk = String.fromCharCode(114,95,51,57,95,112,102,102,102,116,0);
    let projectk = String.fromCharCode(97,108,108,101,116,95,100,95,50,52,0);
    let f_count1: Array<any> = [466, 276];
    let historyM = 2.0;
    let renewL = String.fromCharCode(115,117,98,108,97,121,111,117,116,95,57,95,54,50,0);
    let bellr = true;
    let ajaxg = String.fromCharCode(122,95,56,54,95,99,111,109,112,111,115,101,100,0);
    let viewerg = String.fromCharCode(122,95,52,48,95,109,97,116,104,0);
    let dice9 = 5.0;
    let pathy = true;
    let anytime9 = String.fromCharCode(118,116,114,107,95,102,95,54,57,0);
    let videoT = 2.0;
    let orientationN = String.fromCharCode(100,95,56,54,95,115,117,98,115,116,114,105,110,103,115,0);
      dice9 /= Math.max(4, 1 | ajaxg.length);
      viewerg += `${renewL.length}`;
   while (1 < viewerg.length) {
       let tooltipsJ: Array<any> = [581, 922, 505];
      if (tooltipsJ.length >= 3) {
          let servicey: Map<any, any> = new Map([[String.fromCharCode(103,95,54,50,95,97,108,105,103,110,109,101,110,116,0),true ], [String.fromCharCode(108,105,102,116,95,105,95,57,57,0),false ]]);
          let videocommonJ = true;
          let singaporeZ = String.fromCharCode(114,101,115,97,109,112,95,121,95,49,51,0);
          let topon7 = false;
          let floatingI = false;
         tooltipsJ.push(singaporeZ.length);
         servicey = new Map([[`${topon7}`, ((topon7 ? 3 : 4))]]);
         videocommonJ = null == servicey.get(`${videocommonJ}`);
         singaporeZ = `${(1 >> (Math.min(Math.abs((topon7 ? 3 : 1)), 3)))}`;
         floatingI = (topon7 ? videocommonJ : !topon7);
      }
      for (let d = 0; d < 1; d++) {
         tooltipsJ.push(2);
      }
         tooltipsJ = [tooltipsJ.length];
      viewerg = `${2 + parseInt(`${historyM}`)}`;
      break;
   }
      historyM *= parseFloat(`${3}`);
   let countdowny = viewerg == String.fromCharCode(56,101,116,49,0);
   do {
      viewerg += "3";
      if (countdowny) {
         break;
      }
   } while ((!viewerg.startsWith(`${dice9}`)) && countdowny);
   let memberK = rewardvideoh == String.fromCharCode(95,115,108,102,121,116,0);
   do {
      rewardvideoh = `${renewL.length}`;
      if (memberK) {
         break;
      }
   } while ((viewerg.length == rewardvideoh.length) && memberK);
   while ((matchesB.length / 4) < 3) {
      dice9 -= ajaxg.length;
      break;
   }
   while (matchesB.startsWith(`${f_count1.length}`)) {
       let launcherK: Map<any, any> = new Map([[String.fromCharCode(99,95,55,52,95,101,120,97,109,112,108,101,115,0),611], [String.fromCharCode(98,95,57,48,95,114,101,99,111,118,101,114,101,100,0),629], [String.fromCharCode(105,115,110,97,110,95,113,95,57,48,0),624]]);
       let services = false;
       let selectg = String.fromCharCode(107,95,54,0);
       let time_nN: Map<any, any> = new Map([[String.fromCharCode(97,115,99,101,110,100,101,114,95,106,95,54,54,0),978], [String.fromCharCode(116,104,117,109,98,110,97,105,108,95,53,95,53,51,0),663]]);
          let detailB = String.fromCharCode(107,95,50,50,95,108,104,97,115,104,0);
          let usernameH = 1.0;
         selectg += `${(detailB.length | (services ? 2 : 4))}`;
         detailB += `${parseInt(`${usernameH}`) / (Math.max(parseInt(`${usernameH}`), 3))}`;
         launcherK = new Map([[`${launcherK.size}`, launcherK.size]]);
      for (let g = 0; g < 1; g++) {
          let colorsd = true;
          let policyF = 5;
         services = selectg.length >= 1;
         colorsd = policyF <= 90 && !colorsd;
         policyF |= 1 * policyF;
      }
       let dataP = String.fromCharCode(109,107,118,109,117,120,101,114,116,121,112,101,115,95,115,95,54,50,0);
      let subsz = 6988722 >= launcherK.size;
      do {
         launcherK = new Map([[`${time_nN.size}`, selectg.length]]);
         if (subsz) {
            break;
         }
      } while ((!services) && subsz);
       let zhuboI = false;
       let changeT = false;
      for (let v = 0; v < 2; v++) {
          let interstitialA = String.fromCharCode(114,116,115,112,95,107,95,55,54,0);
          let configuret = String.fromCharCode(111,95,52,49,95,103,101,111,0);
          let xvodM: Array<any> = [String.fromCharCode(109,97,112,112,101,114,95,102,95,53,55,0), String.fromCharCode(121,101,116,95,57,95,53,51,0)];
          let downloadedd = true;
          let arrowc: Map<any, any> = new Map([[String.fromCharCode(112,101,114,115,112,95,55,95,56,52,0),432], [String.fromCharCode(107,95,49,49,95,109,97,106,111,114,0),843], [String.fromCharCode(120,95,56,52,95,99,102,115,116,114,101,97,109,0),713]]);
         zhuboI = launcherK.size >= 83;
         interstitialA = `${((downloadedd ? 1 : 3))}`;
         configuret += "1";
         xvodM.push(2 | configuret.length);
         arrowc = new Map([[`${arrowc.size}`, configuret.length]]);
      }
         time_nN = new Map([[selectg, 2]]);
         time_nN.set(dataP, (dataP == String.fromCharCode(89,0) ? dataP.length : time_nN.size));
      if (selectg != String.fromCharCode(49,0)) {
          let fullo = false;
         dataP = `${time_nN.size | 2}`;
         fullo = (!fullo ? !fullo : !fullo);
      }
         launcherK.set(`${selectg}`, 2 % (Math.max(1, selectg.length)));
          let indexX: Array<any> = [432, 141];
          let c_imageO = String.fromCharCode(111,95,57,53,95,99,108,111,115,101,0);
         dataP = `${(dataP == String.fromCharCode(81,0) ? dataP.length : (changeT ? 4 : 4))}`;
         indexX.push(c_imageO.length & 1);
         c_imageO = `${(String.fromCharCode(114,0) == c_imageO ? c_imageO.length : indexX.length)}`;
      matchesB += `${1 & renewL.length}`;
      break;
   }
   for (let l = 0; l < 1; l++) {
      f_count1 = [rewardvideoh.length];
   }
   if ((3 << (Math.min(5, projectk.length))) == 2) {
      f_count1.push(parseInt(`${historyM}`));
   }
   if (rewardvideoh.length == window_6_q.length) {
      window_6_q += `${projectk.length - 1}`;
   }
       let megaphoneH = String.fromCharCode(119,95,49,53,95,116,104,114,101,101,0);
      if (megaphoneH.includes(megaphoneH)) {
          let whatsappc = String.fromCharCode(99,111,110,99,97,116,101,110,97,116,101,100,95,119,95,55,57,0);
          let customw = 4.0;
          let dataF: Map<any, any> = new Map([[String.fromCharCode(100,109,105,120,95,121,95,56,55,0),143], [String.fromCharCode(100,95,55,49,95,110,97,108,115,0),508]]);
         megaphoneH = `${megaphoneH.length % 2}`;
         whatsappc = `${dataF.size}`;
         customw -= parseInt(`${customw}`);
         dataF = new Map([[`${dataF.size}`, parseInt(`${customw}`)]]);
      }
      while (megaphoneH != String.fromCharCode(73,0)) {
         megaphoneH += `${(megaphoneH == String.fromCharCode(115,0) ? megaphoneH.length : megaphoneH.length)}`;
         break;
      }
         megaphoneH += "1";
      viewerg += `${(String.fromCharCode(72,0) == sportk ? sportk.length : window_6_q.length)}`;
      sportk = `${3 << (Math.min(3, projectk.length))}`;
      pathy = !pathy;
   for (let z = 0; z < 1; z++) {
      dice9 -= rewardvideoh.length % (Math.max(7, f_count1.length));
   }
   while (viewerg == String.fromCharCode(101,0)) {
      sportk += `${sportk.length}`;
      break;
   }
   for (let m = 0; m < 1; m++) {
       let flyerL = true;
       let field6 = String.fromCharCode(105,110,116,115,95,109,95,50,52,0);
      for (let r = 0; r < 2; r++) {
         flyerL = field6.length == 64;
      }
         flyerL = (53 <= (field6.length + (!flyerL ? field6.length : 53)));
         flyerL = field6.length >= 30;
         field6 += `${(2 * (flyerL ? 4 : 1))}`;
      while (field6.endsWith(`${flyerL}`)) {
         flyerL = field6.length > 19;
         break;
      }
         flyerL = flyerL && field6.length >= 18;
      pathy = (19 == (renewL.length % (Math.max(1, (!bellr ? 19 : renewL.length)))));
   }
       let adulta = String.fromCharCode(99,111,109,98,105,110,101,114,95,98,95,57,56,0);
       let hooksK = 0.0;
       let activityc: Map<any, any> = new Map([[String.fromCharCode(115,121,110,116,104,95,99,95,53,54,0),127], [String.fromCharCode(114,101,102,101,114,101,110,99,101,100,95,104,95,53,57,0),363], [String.fromCharCode(104,95,52,51,95,117,118,108,99,0),937]]);
       let utilsU = 3;
       let videojsB = 4;
          let commenti = 1.0;
         hooksK /= Math.max(parseFloat(`${adulta.length % (Math.max(1, 6))}`), 4);
         commenti /= Math.max(3, parseFloat(`${parseInt(`${commenti}`)}`));
          let colorsu = 2;
          let holderd: Map<any, any> = new Map([[String.fromCharCode(119,114,105,116,97,98,108,101,95,50,95,56,52,0),130], [String.fromCharCode(110,95,51,54,95,101,120,99,108,117,115,105,118,101,0),81], [String.fromCharCode(110,95,55,95,105,115,111,109,0),310]]);
          let annerE = String.fromCharCode(115,101,101,95,100,95,50,50,0);
         videojsB ^= annerE.length | 3;
         colorsu /= Math.max(holderd.size, 5);
         holderd = new Map([[`${holderd.size}`, 1 ^ holderd.size]]);
         annerE = `${holderd.size}`;
      while (activityc.size > utilsU) {
          let dropdownJ = String.fromCharCode(112,97,116,104,95,49,95,55,51,0);
          let commonH = String.fromCharCode(97,95,50,49,95,110,101,101,100,108,101,0);
          let assistq = String.fromCharCode(100,95,53,57,95,97,100,115,97,114,109,97,115,109,0);
          let miniQ: Array<any> = [String.fromCharCode(116,95,51,51,95,103,114,111,117,110,100,0), String.fromCharCode(116,105,116,110,116,95,102,95,54,57,0)];
         utilsU |= assistq.length & 1;
         dropdownJ = `${dropdownJ.length ^ 2}`;
         commonH += `${dropdownJ.length}`;
         assistq = `${commonH.length * dropdownJ.length}`;
         miniQ.push((String.fromCharCode(56,0) == commonH ? miniQ.length : commonH.length));
         break;
      }
         utilsU /= Math.max(1, utilsU);
      while ((3 ^ adulta.length) == 5 || 2 == (adulta.length ^ 3)) {
         adulta += `${videojsB % 3}`;
         break;
      }
         hooksK /= Math.max(5, parseFloat(`${parseInt(`${hooksK}`)}`));
      let stringY = 7549876 >= videojsB;
      do {
          let hongkongg: Map<any, any> = new Map([[String.fromCharCode(108,95,52,53,95,102,97,99,116,111,114,97,98,108,101,0),753], [String.fromCharCode(122,95,57,50,95,97,105,109,105,110,103,0),380], [String.fromCharCode(115,95,53,55,95,97,98,111,114,116,0),945]]);
          let progress0: Array<any> = [990, 80];
         videojsB -= parseInt(`${hooksK}`) % 3;
         hongkongg.set(`${progress0.length}`, 3 - hongkongg.size);
         progress0.push(hongkongg.size);
         if (stringY) {
            break;
         }
      } while (stringY && ((utilsU * 1) <= 1 && 1 <= (utilsU * videojsB)));
         utilsU &= adulta.length / 3;
      viewerg += `${f_count1.length & renewL.length}`;
      window_6_q = `${((bellr ? 3 : 5) / (Math.max(3, parseInt(`${historyM}`))))}`;
       let helperM = String.fromCharCode(98,97,99,107,117,112,95,105,95,53,51,0);
       let chatG: Map<any, any> = new Map([[String.fromCharCode(98,95,57,51,95,110,101,119,116,101,107,0),true ], [String.fromCharCode(101,109,98,101,100,95,52,95,56,56,0),true ]]);
         chatG.set(helperM, 1);
      if (!helperM.endsWith(`${chatG.size}`)) {
          let annerr: Map<any, any> = new Map([[String.fromCharCode(107,95,50,56,95,106,111,98,113,0),String.fromCharCode(99,111,110,102,108,105,99,116,101,100,95,55,95,53,0)], [String.fromCharCode(114,111,108,101,95,52,95,52,48,0),String.fromCharCode(113,95,51,57,95,105,110,100,105,110,103,0)]]);
         helperM = `${2 >> (Math.min(2, Math.abs(chatG.size)))}`;
         annerr.set(`${annerr.size}`, 3);
      }
         helperM += `${helperM.length & chatG.size}`;
      let tempA = chatG.size <= 6857410;
      do {
         chatG = new Map([[`${chatG.size}`, helperM.length]]);
         if (tempA) {
            break;
         }
      } while ((3 > helperM.length) && tempA);
          let ballh = String.fromCharCode(99,111,110,110,101,99,116,105,118,105,116,121,95,121,95,56,53,0);
          let mbridgeO = String.fromCharCode(105,110,118,97,108,105,100,97,116,105,111,110,95,107,95,50,52,0);
         chatG.set(helperM, 1 >> (Math.min(1, helperM.length)));
         ballh += `${mbridgeO.length}`;
         mbridgeO += "1";
      if (2 >= (5 - chatG.size) || (helperM.length - chatG.size) >= 5) {
         chatG = new Map([[`${chatG.size}`, helperM.length | 3]]);
      }
      sportk = `${(rewardvideoh == String.fromCharCode(90,0) ? matchesB.length : rewardvideoh.length)}`;
   for (let a = 0; a < 1; a++) {
       let turnF = false;
      while (turnF) {
         turnF = (turnF ? !turnF : !turnF);
         break;
      }
      for (let o = 0; o < 2; o++) {
         turnF = (!turnF ? !turnF : turnF);
      }
          let panglea = String.fromCharCode(115,117,114,112,114,105,115,101,100,95,56,95,54,55,0);
         turnF = (((!turnF ? 91 : panglea.length) * panglea.length) >= 91);
      f_count1 = [(window_6_q.length >> (Math.min(2, Math.abs((bellr ? 2 : 4)))))];
   }
      viewerg = `${window_6_q.length + 2}`;
   if (5 > matchesB.length) {
      matchesB += `${((bellr ? 2 : 2) << (Math.min(viewerg.length, 5)))}`;
   }
       let umengl = String.fromCharCode(99,111,109,109,105,116,116,101,114,95,102,95,50,51,0);
      let componentH = umengl.length <= 5098084;
      do {
         umengl += `${(umengl == String.fromCharCode(53,0) ? umengl.length : umengl.length)}`;
         if (componentH) {
            break;
         }
      } while (componentH && (umengl != umengl));
      let orangeu = 6367301 >= umengl.length;
      do {
         umengl = `${umengl.length / 3}`;
         if (orangeu) {
            break;
         }
      } while ((3 < umengl.length) && orangeu);
         umengl += `${umengl.length}`;
      viewerg += "2";
      historyM *= (parseFloat(`${String.fromCharCode(69,0) == viewerg ? (pathy ? 5 : 3) : viewerg.length}`));
      renewL = `${rewardvideoh.length}`;

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
       let mbbannerB = 5.0;
    let projectF = 3.0;
    let matchesA = false;
    let formR = String.fromCharCode(110,95,53,51,95,98,105,108,105,110,0);
    let telegramc = 3.0;
    let vietnamJ = 2.0;
    let checkboxf = 3.0;
   if ((telegramc / (Math.max(vietnamJ, 7))) > 3.8) {
       let downloadingR = 5.0;
      let smallA = 6259981.0 <= downloadingR;
      do {
         downloadingR /= Math.max(4, 3);
         if (smallA) {
            break;
         }
      } while ((1.6 > (downloadingR + 5.16)) && smallA);
      for (let t = 0; t < 2; t++) {
         downloadingR -= 3;
      }
      for (let w = 0; w < 3; w++) {
          let incidentU = false;
          let questA = String.fromCharCode(110,95,50,95,111,102,102,0);
         downloadingR /= Math.max(1, (questA == String.fromCharCode(54,0) ? (incidentU ? 2 : 4) : questA.length));
      }
      vietnamJ /= Math.max(parseFloat(`${parseInt(`${checkboxf}`) * 1}`), 1);
   }
   while (checkboxf <= formR.length) {
       let connection9 = false;
       let drage = true;
       let settingsU: Map<any, any> = new Map([[String.fromCharCode(104,102,108,105,112,95,117,95,53,55,0),573], [String.fromCharCode(105,109,97,103,101,121,117,118,99,111,110,102,105,103,95,55,95,51,57,0),993], [String.fromCharCode(112,111,108,121,108,105,110,101,95,102,95,49,57,0),945]]);
       let stationsO = false;
      while (stationsO && connection9) {
          let stringR = 4.0;
          let type_j5N = 0.0;
          let n_positionz: Array<any> = [String.fromCharCode(112,95,49,49,95,115,101,114,105,97,108,108,121,0), String.fromCharCode(103,114,97,110,117,108,101,112,111,115,95,114,95,56,49,0), String.fromCharCode(101,95,55,56,95,112,114,101,100,111,119,110,108,111,97,100,0)];
          let datay = String.fromCharCode(102,116,118,102,111,108,100,101,114,111,112,101,110,95,121,95,53,57,0);
         connection9 = stringR > 94.6;
         stringR /= Math.max(3, 1);
         type_j5N *= (parseFloat(`${datay == String.fromCharCode(54,0) ? n_positionz.length : datay.length}`));
         n_positionz = [3 & parseInt(`${type_j5N}`)];
         break;
      }
       let volumeo = String.fromCharCode(114,101,109,111,118,101,100,95,102,95,51,53,0);
       let routerO = String.fromCharCode(108,95,52,57,95,115,111,99,107,101,116,115,0);
          let notificationh = String.fromCharCode(100,101,98,117,103,98,111,120,95,122,95,55,49,0);
         volumeo = `${volumeo.length << (Math.min(routerO.length, 5))}`;
         notificationh += `${notificationh.length ^ notificationh.length}`;
       let policyn = 5.0;
       let tailc = 1.0;
      if (!stationsO || !drage) {
         drage = (routerO.length << (Math.min(4, volumeo.length))) <= 24;
      }
      for (let p = 0; p < 2; p++) {
          let applicationk = 3.0;
          let material1 = 4.0;
          let spinnero = true;
          let core2 = 0;
         tailc *= parseInt(`${material1}`) | 2;
         applicationk += ((spinnero ? 3 : 3) + core2);
         material1 /= Math.max(parseInt(`${applicationk}`) & 3, 5);
         spinnero = !spinnero || 94 <= core2;
      }
      let floaterQ = stationsO ? !stationsO : stationsO;
      do {
         stationsO = !stationsO;
         if (floaterQ) {
            break;
         }
      } while (floaterQ && (policyn > 5.68));
      while (routerO.length == 1 && !drage) {
          let previewo: Map<any, any> = new Map([[String.fromCharCode(99,95,49,51,95,97,112,112,101,110,100,97,108,108,0),String.fromCharCode(114,101,102,112,108,97,110,101,95,111,95,50,54,0)], [String.fromCharCode(97,112,112,101,97,114,115,95,105,95,52,0),String.fromCharCode(105,110,115,117,102,102,105,99,105,101,110,116,95,118,95,51,57,0)]]);
          let pauseg = false;
          let settingO: Array<any> = [540, 666];
         routerO += `${volumeo.length}`;
         previewo = new Map([[`${settingO.length}`, ((pauseg ? 2 : 5) - settingO.length)]]);
         pauseg = (40 == ((pauseg ? 40 : previewo.size) / (Math.max(1, previewo.size))));
         break;
      }
         stationsO = !drage;
      let chatc = drage ? !drage : drage;
      do {
         drage = 82.84 == tailc;
         if (chatc) {
            break;
         }
      } while (chatc && (policyn <= 4.56 || (policyn * 4.56) <= 1.38));
          let malaysiaL: Array<any> = [673, 494];
          let long_82 = false;
          let logo1 = 1.0;
         connection9 = !long_82;
         malaysiaL.push(parseInt(`${logo1}`) - malaysiaL.length);
         logo1 -= parseInt(`${logo1}`) * 3;
      let tickb = tailc <= 6025284.0;
      do {
         tailc += routerO.length >> (Math.min(2, Math.abs(parseInt(`${tailc}`))));
         if (tickb) {
            break;
         }
      } while (tickb && (!drage || 5.8 > (tailc - 1.4)));
      formR += `${3 ^ parseInt(`${projectF}`)}`;
      break;
   }
      telegramc += parseFloat(`${parseInt(`${telegramc}`) | 2}`);

    if (showloading) {

       let pathR = String.fromCharCode(112,111,115,116,112,111,110,101,100,95,106,95,53,52,0);
       let placeholderR = 4.0;
         placeholderR *= pathR.length;
      while (placeholderR < pathR.length) {
         placeholderR += pathR.length & 2;
         break;
      }
      let sharedD = 8030490.0 <= placeholderR;
      do {
         placeholderR *= (pathR == String.fromCharCode(82,0) ? pathR.length : parseInt(`${placeholderR}`));
         if (sharedD) {
            break;
         }
      } while ((pathR.endsWith(`${placeholderR}`)) && sharedD);
          let grey2: Array<any> = [182, 225, 252];
          let confirmationG = String.fromCharCode(109,117,116,101,120,95,55,95,52,56,0);
         pathR = `${confirmationG.length - 1}`;
         grey2 = [2 & grey2.length];
         confirmationG = `${grey2.length}`;
         pathR += `${(pathR == String.fromCharCode(90,0) ? parseInt(`${placeholderR}`) : pathR.length)}`;
      let productL = 7534377.0 >= placeholderR;
      do {
          let gesturev = 4.0;
          let hejio = 0.0;
         placeholderR -= parseInt(`${placeholderR}`) * 1;
         gesturev /= Math.max(1, parseInt(`${hejio}`));
         hejio *= parseFloat(`${parseInt(`${gesturev}`) - parseInt(`${hejio}`)}`);
         if (productL) {
            break;
         }
      } while (productL && (!pathR.startsWith(`${placeholderR}`)));
      telegramc /= Math.max((parseFloat(`${(matchesA ? 3 : 4) & 2}`)), 5);
   while ((1 * telegramc) <= 1.45) {
       let benefith: Map<any, any> = new Map([[String.fromCharCode(122,97,108,108,111,99,95,51,95,57,56,0),817], [String.fromCharCode(109,95,52,49,95,115,117,98,110,111,100,101,0),638]]);
         benefith = new Map([[`${benefith.size}`, benefith.size % (Math.max(1, 5))]]);
          let questB = String.fromCharCode(116,97,110,103,101,110,116,95,57,95,57,48,0);
          let assist2 = 5.0;
          let relatedI = 0.0;
         benefith = new Map([[`${relatedI}`, questB.length - parseInt(`${relatedI}`)]]);
         questB = `${parseInt(`${assist2}`)}`;
         benefith.set(`${benefith.size}`, benefith.size - 2);
      checkboxf *= parseInt(`${projectF}`);
      break;
   }
      mbbannerB *= (parseInt(`${telegramc}`) & (matchesA ? 5 : 1));
      setIsRefreshing(true);
    }
    try {

   let sinaB = 8776138 >= formR.length;
   do {
      formR = `${parseInt(`${telegramc}`) >> (Math.min(formR.length, 4))}`;
      if (sinaB) {
         break;
      }
   } while ((formR.startsWith(`${vietnamJ}`)) && sinaB);
      checkboxf *= parseInt(`${telegramc}`);
      formR = `${formR.length}`;
      await queryClient.resetQueries(["HomePage", id]);

      projectF *= parseFloat(`${3}`);
   let sourceh = formR == String.fromCharCode(51,118,112,52,56,106,113,0);
   do {
      formR += "3";
      if (sourceh) {
         break;
      }
   } while ((1 >= (parseInt(`${projectF}`) + formR.length) && (formR.length & 1) >= 2) && sourceh);
       let humiditya = 3.0;
       let gesturesp: Map<any, any> = new Map([[String.fromCharCode(106,112,101,103,108,115,100,101,99,95,54,95,54,50,0),String.fromCharCode(99,105,110,101,109,97,95,119,95,57,51,0)], [String.fromCharCode(115,99,113,117,101,114,121,95,108,95,52,54,0),String.fromCharCode(104,111,117,114,95,57,95,53,0)]]);
       let bellM: Map<any, any> = new Map([[String.fromCharCode(112,95,56,53,95,115,104,111,114,116,102,108,111,97,116,0),String.fromCharCode(99,104,97,114,99,111,110,118,95,99,95,56,49,0)], [String.fromCharCode(99,104,115,99,97,108,101,95,99,95,51,52,0),String.fromCharCode(97,110,99,105,108,108,97,114,121,95,118,95,49,54,0)]]);
         gesturesp = new Map([[`${gesturesp.size}`, gesturesp.size | parseInt(`${humiditya}`)]]);
         humiditya -= parseFloat(`${2 % (Math.max(9, parseInt(`${humiditya}`)))}`);
          let next7 = 5;
          let ajaxV = 1.0;
          let switch_hnU = 2.0;
         gesturesp.set(`${ajaxV}`, next7 + parseInt(`${ajaxV}`));
         next7 /= Math.max(parseInt(`${switch_hnU}`) - parseInt(`${switch_hnU}`), 3);
         bellM.set(`${humiditya}`, 1);
      while ((parseFloat(`${gesturesp.size}`) - humiditya) == 4.53) {
         humiditya += parseFloat(`${parseInt(`${humiditya}`) >> (Math.min(Math.abs(gesturesp.size), 3))}`);
         break;
      }
      for (let g = 0; g < 2; g++) {
         humiditya *= parseFloat(`${parseInt(`${humiditya}`)}`);
      }
         gesturesp = new Map([[`${bellM.size}`, 3]]);
          let clock6 = 3.0;
          let ball3 = true;
          let appleS = 1.0;
         gesturesp.set(`${ball3}`, 3);
         clock6 *= parseFloat(`${parseInt(`${appleS}`)}`);
         appleS += parseInt(`${clock6}`) * 3;
      while (gesturesp.size > bellM.size) {
         gesturesp = new Map([[`${gesturesp.size}`, parseInt(`${humiditya}`) ^ 1]]);
         break;
      }
      telegramc -= parseFloat(`${gesturesp.size / 2}`);

      setIsRefreshing(false);

   let manifestG = vietnamJ >= 6229812.0;
   do {
      vietnamJ *= (parseFloat(`${formR == String.fromCharCode(56,0) ? parseInt(`${vietnamJ}`) : formR.length}`));
      if (manifestG) {
         break;
      }
   } while (manifestG && (5.74 == (vietnamJ * 3.17) && 3 == (formR.length * 4)));
       let guideR: Array<any> = [451, 489];
       let styleso = false;
       let sheetI = false;
      for (let c = 0; c < 3; c++) {
         sheetI = !styleso;
      }
      if ((guideR.length / (Math.max(5, 7))) < 3 || guideR.length < 5) {
         styleso = ((guideR.length << (Math.min(3, Math.abs((!sheetI ? 34 : guideR.length))))) <= 34);
      }
      checkboxf *= parseInt(`${mbbannerB}`);
   if (3.10 > projectF) {
      telegramc -= parseFloat(`${parseInt(`${checkboxf}`) / (Math.max(10, parseInt(`${vietnamJ}`)))}`);
   }
      setNavId(id);

   if (checkboxf < 3.7) {
      vietnamJ += parseFloat(`${formR.length}`);
   }
   for (let o = 0; o < 2; o++) {
       let w_player6: Array<any> = [17, 160];
       let utilsM = false;
       let vietnamK = String.fromCharCode(115,116,114,105,110,103,105,102,121,95,51,95,51,56,0);
       let crownt = String.fromCharCode(122,95,56,55,95,107,105,108,108,0);
       let bell0 = String.fromCharCode(112,95,54,48,95,115,99,116,101,0);
         bell0 = `${(String.fromCharCode(75,0) == bell0 ? w_player6.length : bell0.length)}`;
      if (4 <= vietnamK.length) {
         w_player6.push(w_player6.length);
      }
      if (4 > (1 | w_player6.length) && (bell0.length | 1) > 1) {
          let sort9 = 2.0;
          let condensedT = 5;
          let backwardY = 5;
          let placeholderh = 0.0;
          let bodan2: Array<any> = [String.fromCharCode(111,110,101,116,105,109,101,97,117,116,104,95,101,95,54,50,0), String.fromCharCode(122,95,50,48,95,99,111,114,114,117,112,116,101,100,0)];
         bell0 = `${backwardY}`;
         sort9 += condensedT;
         condensedT <<= Math.min(Math.abs(1 * condensedT), 2);
         backwardY &= condensedT * parseInt(`${placeholderh}`);
         placeholderh *= parseFloat(`${parseInt(`${sort9}`)}`);
         bodan2.push(3 ^ condensedT);
      }
      while (!utilsM) {
         utilsM = String.fromCharCode(74,0) == vietnamK;
         break;
      }
         w_player6.push(1);
         utilsM = 79 <= w_player6.length && crownt == String.fromCharCode(76,0);
      for (let l = 0; l < 2; l++) {
         utilsM = (30 > (bell0.length * (!utilsM ? 30 : bell0.length)));
      }
         vietnamK += `${((utilsM ? 3 : 1) & w_player6.length)}`;
         vietnamK += `${vietnamK.length}`;
          let orange9 = String.fromCharCode(115,95,53,54,95,112,117,114,112,108,101,0);
          let gradlew5 = String.fromCharCode(99,111,112,121,105,110,105,111,118,95,110,95,57,0);
         utilsM = gradlew5.length >= orange9.length;
       let dropdown1 = 3;
         dropdown1 &= (crownt.length & (utilsM ? 4 : 4));
      let handlert = dropdown1 >= 7699570;
      do {
         dropdown1 |= (1 + (utilsM ? 1 : 4));
         if (handlert) {
            break;
         }
      } while ((3 == (3 << (Math.min(1, vietnamK.length))) || 3 == (vietnamK.length << (Math.min(1, Math.abs(dropdown1))))) && handlert);
         crownt += `${3 + bell0.length}`;
          let logoL: Array<any> = [429, 543];
          let countdownC = 1.0;
          let eactc = true;
         utilsM = (vietnamK.length >> (Math.min(5, Math.abs(dropdown1)))) <= 57;
         logoL.push(2 | parseInt(`${countdownC}`));
         countdownC -= logoL.length | 2;
         eactc = eactc && 79.87 == countdownC;
      checkboxf += ((utilsM ? 1 : 2) ^ parseInt(`${telegramc}`));
   }
      vietnamJ *= parseFloat(`${1 >> (Math.min(Math.abs(parseInt(`${vietnamJ}`)), 4))}`);
      setShowHomeLoading(false);

       let weiboN = 4.0;
       let videocommonl = false;
       let football7 = String.fromCharCode(100,101,99,111,100,101,95,55,95,53,54,0);
         videocommonl = football7.endsWith(`${weiboN}`);
      if (videocommonl) {
         videocommonl = (((!videocommonl ? 41 : football7.length) & football7.length) == 41);
      }
         videocommonl = !videocommonl || football7.length >= 21;
         football7 = `${1 >> (Math.min(3, football7.length))}`;
          let eactr = String.fromCharCode(114,101,103,100,101,102,95,98,95,51,48,0);
          let volumex = String.fromCharCode(98,110,98,105,110,112,97,100,95,122,95,55,52,0);
         football7 = `${2 * volumex.length}`;
         eactr = `${eactr.length - 1}`;
         volumex = `${(String.fromCharCode(49,0) == eactr ? eactr.length : eactr.length)}`;
      if ((weiboN * 5.81) <= 4.13) {
          let dplusZ: Map<any, any> = new Map([[String.fromCharCode(100,109,117,108,95,51,95,52,56,0),392], [String.fromCharCode(102,95,55,95,97,103,101,0),496]]);
         videocommonl = weiboN <= 92.29 && !videocommonl;
         dplusZ.set(`${dplusZ.size}`, dplusZ.size + dplusZ.size);
      }
      for (let x = 0; x < 1; x++) {
          let tickc = String.fromCharCode(108,97,115,114,95,106,95,55,51,0);
         videocommonl = football7.length == 61;
         tickc += `${(String.fromCharCode(116,0) == tickc ? tickc.length : tickc.length)}`;
      }
         videocommonl = ((football7.length % (Math.max(6, (!videocommonl ? football7.length : 64)))) < 64);
      if (football7.length < 5) {
         weiboN += (parseInt(`${weiboN}`) << (Math.min(1, Math.abs((videocommonl ? 2 : 4)))));
      }
      matchesA = !videocommonl || 86.7 <= projectF;
      projectF *= parseFloat(`${2}`);
      telegramc += parseFloat(`${2 << (Math.min(Math.abs(parseInt(`${projectF}`)), 5))}`);

      return;
    } catch (error) {

   for (let f = 0; f < 2; f++) {
       let bottom1: Map<any, any> = new Map([[String.fromCharCode(119,105,110,100,105,110,103,95,103,95,56,49,0),92], [String.fromCharCode(110,101,97,114,95,104,95,49,48,0),675], [String.fromCharCode(122,101,114,111,109,118,95,118,95,53,50,0),926]]);
       let selected_ = String.fromCharCode(98,95,56,57,95,116,104,101,111,114,97,0);
       let episodesO = 0.0;
       let carouselw: Array<any> = [String.fromCharCode(109,105,115,115,95,120,95,49,49,0), String.fromCharCode(97,95,56,56,95,108,97,118,102,105,0), String.fromCharCode(112,108,97,121,112,97,117,115,101,95,103,95,55,52,0)];
       let selli = String.fromCharCode(109,95,56,48,95,100,101,99,108,97,114,101,0);
      for (let b = 0; b < 3; b++) {
          let sortf = 2.0;
          let viewsc: Map<any, any> = new Map([[String.fromCharCode(114,101,97,100,120,98,108,111,99,107,95,122,95,56,48,0),882], [String.fromCharCode(102,95,57,49,95,113,99,101,108,112,100,97,116,97,0),564]]);
          let miniQ = 2.0;
         selli += `${selected_.length}`;
         sortf += 3;
         viewsc = new Map([[`${sortf}`, parseInt(`${miniQ}`)]]);
      }
         selected_ = `${bottom1.size / 1}`;
       let rulesL = String.fromCharCode(115,95,51,55,95,115,121,110,99,104,114,111,110,105,122,101,97,98,108,101,0);
       let typesF = String.fromCharCode(109,105,109,101,95,109,95,54,57,0);
      while (3 < (bottom1.size - 3)) {
          let gesture3 = true;
          let videoN = 2.0;
          let mbsplash6: Map<any, any> = new Map([[String.fromCharCode(99,111,110,103,95,118,95,50,52,0),313], [String.fromCharCode(106,95,50,55,95,109,102,114,97,0),494], [String.fromCharCode(114,100,101,108,116,97,95,105,95,56,54,0),530]]);
          let overlayl: Map<any, any> = new Map([[String.fromCharCode(98,97,108,97,110,99,101,100,95,109,95,56,52,0),615], [String.fromCharCode(116,114,97,110,115,112,111,114,116,115,95,49,95,52,49,0),226], [String.fromCharCode(111,95,51,95,114,97,109,112,0),984]]);
          let favicong = 5.0;
         selli = `${typesF.length & 3}`;
         gesture3 = !gesture3;
         videoN *= overlayl.size;
         mbsplash6 = new Map([[`${overlayl.size}`, parseInt(`${favicong}`)]]);
         favicong /= Math.max(1, parseFloat(`${mbsplash6.size - 2}`));
         break;
      }
      if (rulesL.includes(`${carouselw.length}`)) {
          let gemfileW = String.fromCharCode(97,95,53,57,95,115,102,116,112,0);
          let helperU: Map<any, any> = new Map([[String.fromCharCode(109,112,99,104,117,102,102,95,121,95,55,57,0),String.fromCharCode(103,104,97,115,104,95,113,95,49,48,48,0)], [String.fromCharCode(105,110,99,108,117,100,101,115,95,116,95,51,49,0),String.fromCharCode(114,95,52,56,95,112,105,118,111,116,0)]]);
          let movieso = 0.0;
         carouselw = [bottom1.size * 3];
         gemfileW += `${3 * parseInt(`${movieso}`)}`;
         helperU.set(`${movieso}`, helperU.size | 3);
      }
      while (4 == rulesL.length) {
         carouselw.push(parseInt(`${episodesO}`) / (Math.max(typesF.length, 7)));
         break;
      }
      if (selli != String.fromCharCode(120,0)) {
         typesF = `${selli.length}`;
      }
         episodesO += parseFloat(`${selli.length << (Math.min(5, carouselw.length))}`);
         carouselw.push(selli.length + bottom1.size);
       let rules3 = String.fromCharCode(100,95,53,55,95,100,101,108,97,121,0);
       let untick3 = String.fromCharCode(117,95,50,56,95,113,117,97,114,116,0);
          let plusX = String.fromCharCode(108,95,51,54,95,97,115,115,101,109,98,108,101,0);
         selli = `${bottom1.size % (Math.max(carouselw.length, 5))}`;
         plusX += `${plusX.length & 2}`;
      telegramc += parseFloat(`${parseInt(`${checkboxf}`)}`);
   }
      projectF /= Math.max(5, parseFloat(`${parseInt(`${telegramc}`)}`));
      matchesA = !formR.includes(`${telegramc}`);
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    const handleTabPress = async () => {
       let iconL = String.fromCharCode(109,95,55,51,95,115,116,97,107,101,100,0);
    let event9 = 4.0;
    let watch3 = String.fromCharCode(102,116,115,121,121,95,97,95,56,0);
    let dialogc: Map<any, any> = new Map([[String.fromCharCode(101,110,116,101,114,105,110,103,95,107,95,57,57,0),String.fromCharCode(116,101,115,116,110,101,116,95,99,95,56,0)], [String.fromCharCode(109,108,115,100,95,57,95,54,53,0),String.fromCharCode(101,109,115,99,114,105,112,116,101,110,95,101,95,54,57,0)], [String.fromCharCode(119,95,51,95,105,110,116,101,114,97,99,116,111,114,0),String.fromCharCode(122,95,53,56,95,103,114,111,117,110,100,0)]]);
    let invite4 = 0.0;
    let ajaxR = true;
    let miniJ = String.fromCharCode(116,101,120,105,112,111,100,95,120,95,53,0);
    let emojir = String.fromCharCode(112,108,111,116,116,101,114,95,107,95,55,54,0);
    let knewsp = 3;
    let uploadw: Map<any, any> = new Map([[String.fromCharCode(111,95,50,48,95,109,97,114,107,105,110,103,0),248], [String.fromCharCode(122,95,57,55,95,113,117,111,116,101,0),478], [String.fromCharCode(111,112,116,105,111,110,97,108,108,121,95,121,95,57,0),484]]);
       let main_jm = 4.0;
       let rulesC = String.fromCharCode(100,101,112,108,111,121,95,57,95,50,54,0);
      let dplusg = String.fromCharCode(100,100,57,0) == rulesC;
      do {
          let mbsplasho = 3;
         rulesC += `${(rulesC == String.fromCharCode(48,0) ? parseInt(`${main_jm}`) : rulesC.length)}`;
         mbsplasho -= mbsplasho << (Math.min(4, Math.abs(mbsplasho)));
         if (dplusg) {
            break;
         }
      } while (dplusg && ((main_jm + rulesC.length) == 3.99));
      while (parseInt(`${main_jm}`) < rulesC.length) {
         rulesC = `${parseInt(`${main_jm}`)}`;
         break;
      }
         rulesC = `${1 & parseInt(`${main_jm}`)}`;
         rulesC += `${rulesC.length}`;
      if ((rulesC.length * 5) > 1 && 1.71 > (2.54 + main_jm)) {
          let ballu = 4.0;
          let tooltipsI = 0.0;
          let huaweid = String.fromCharCode(105,95,51,55,95,99,102,102,116,105,0);
          let dataI = 4.0;
         rulesC = "2";
         ballu -= parseFloat(`${3 * huaweid.length}`);
         tooltipsI /= Math.max(3, 1);
         huaweid += `${huaweid.length & 3}`;
         dataI -= 2 - parseInt(`${tooltipsI}`);
      }
          let closeT = String.fromCharCode(106,95,51,52,95,115,101,108,101,99,116,0);
         rulesC = `${1 | parseInt(`${main_jm}`)}`;
         closeT = `${closeT.length / 3}`;
      watch3 += "1";
   if ((parseInt(`${invite4}`) / (Math.max(dialogc.size, 5))) > 3 && (dialogc.size | 3) > 1) {
      dialogc = new Map([[`${event9}`, watch3.length + parseInt(`${event9}`)]]);
   }
   for (let v = 0; v < 1; v++) {
      event9 /= Math.max(parseFloat(`${2 + parseInt(`${event9}`)}`), 5);
   }

      if (isFocused && !isRefreshing) {

      dialogc = new Map([[`${event9}`, iconL.length - parseInt(`${event9}`)]]);
      miniJ = `${(miniJ.length >> (Math.min(3, Math.abs((ajaxR ? 1 : 3)))))}`;
      miniJ = `${watch3.length | 3}`;
        setIsRefreshing((prevIsRefreshing) => {

   let grayh = dialogc.size >= 9349165;
   do {
      dialogc = new Map([[iconL, iconL.length]]);
      if (grayh) {
         break;
      }
   } while ((!miniJ.startsWith(`${dialogc.size}`)) && grayh);
       let m_imageB = 2;
       let sportl = String.fromCharCode(113,116,112,97,108,101,116,116,101,95,99,95,54,50,0);
      for (let r = 0; r < 3; r++) {
         m_imageB >>= Math.min(sportl.length, 5);
      }
       let miniT = String.fromCharCode(114,117,115,115,105,97,110,95,110,95,52,54,0);
      let descO = sportl == String.fromCharCode(104,98,100,0);
      do {
          let hejiQ = 1.0;
          let episodeS = 0.0;
         sportl = `${sportl.length}`;
         hejiQ -= parseFloat(`${parseInt(`${episodeS}`)}`);
         episodeS -= 2;
         if (descO) {
            break;
         }
      } while ((sportl.length < 3) && descO);
      for (let c = 0; c < 1; c++) {
          let filed3 = 0.0;
          let assist2 = String.fromCharCode(98,108,111,99,107,104,97,115,104,95,111,95,54,0);
          let crownq = 1.0;
          let pangleL = String.fromCharCode(115,101,99,107,101,121,95,122,95,52,57,0);
          let transfer_ = false;
         sportl = "2";
         filed3 /= Math.max(1, 5);
         assist2 = `${3 % (Math.max(parseInt(`${crownq}`), 1))}`;
         crownq -= (parseFloat(`${(transfer_ ? 5 : 5) | assist2.length}`));
         pangleL = `${(String.fromCharCode(95,0) == assist2 ? pangleL.length : assist2.length)}`;
      }
      if (4 < miniT.length) {
         miniT = `${(sportl == String.fromCharCode(118,0) ? sportl.length : m_imageB)}`;
      }
      let score9 = 6771483 >= miniT.length;
      do {
         miniT += `${m_imageB | 3}`;
         if (score9) {
            break;
         }
      } while ((sportl.includes(miniT)) && score9);
      ajaxR = m_imageB <= 14;
   while (iconL.startsWith(`${invite4}`)) {
      iconL = `${((ajaxR ? 2 : 1))}`;
      break;
   }
          if (prevIsRefreshing) {

   for (let y = 0; y < 2; y++) {
       let colorsZ = 4;
       let dycreatord = String.fromCharCode(100,101,102,114,97,103,109,101,110,116,95,97,95,52,54,0);
       let enewinterstitial7: Array<any> = [507, 732, 490];
       let yingz: Map<any, any> = new Map([[String.fromCharCode(114,101,106,111,105,110,95,111,95,50,50,0),285], [String.fromCharCode(105,109,112,108,105,99,105,116,108,121,95,121,95,48,0),969], [String.fromCharCode(117,95,49,51,95,97,112,112,114,111,112,114,105,97,116,101,0),515]]);
      while (3 >= (yingz.size & 1) && (yingz.size & colorsZ) >= 1) {
         colorsZ >>= Math.min(enewinterstitial7.length, 5);
         break;
      }
          let middle6 = String.fromCharCode(99,111,109,112,108,101,116,105,111,110,95,98,95,50,53,0);
          let traminiZ = 5;
          let username2: Array<any> = [117, 468, 891];
         enewinterstitial7 = [traminiZ << (Math.min(username2.length, 5))];
         middle6 += "3";
         traminiZ ^= middle6.length;
      let becomeE = 6870030 <= yingz.size;
      do {
         yingz = new Map([[`${yingz.size}`, yingz.size]]);
         if (becomeE) {
            break;
         }
      } while ((dycreatord.includes(`${yingz.size}`)) && becomeE);
      for (let o = 0; o < 3; o++) {
         dycreatord += `${enewinterstitial7.length / 2}`;
      }
      while ((enewinterstitial7.length / (Math.max(4, 3))) > 1) {
         enewinterstitial7.push(enewinterstitial7.length);
         break;
      }
      if ((colorsZ % 1) == 2 || (dycreatord.length % 1) == 3) {
         dycreatord = `${dycreatord.length}`;
      }
         yingz.set(`${enewinterstitial7.length}`, enewinterstitial7.length | yingz.size);
      let invitec = colorsZ >= 8076946;
      do {
         colorsZ %= Math.max(4, enewinterstitial7.length / 2);
         if (invitec) {
            break;
         }
      } while ((dycreatord.length >= 4) && invitec);
      if (!Array.from(yingz.values()).includes(enewinterstitial7.length)) {
         enewinterstitial7.push(colorsZ / 1);
      }
          let handlerF = 2.0;
          let animationR = String.fromCharCode(97,114,116,105,99,108,101,95,100,95,56,57,0);
         dycreatord += `${enewinterstitial7.length}`;
         handlerF *= parseFloat(`${animationR.length}`);
         animationR += `${(animationR == String.fromCharCode(114,0) ? animationR.length : parseInt(`${handlerF}`))}`;
          let downloadedd: Map<any, any> = new Map([[String.fromCharCode(108,105,102,101,99,121,99,108,101,95,111,95,57,48,0),950], [String.fromCharCode(108,111,111,112,101,120,105,116,95,117,95,53,54,0),509], [String.fromCharCode(115,101,109,105,99,111,108,111,110,95,98,95,53,52,0),686]]);
          let tickedR: Array<any> = [406, 967, 650];
          let sourceH = String.fromCharCode(99,114,111,108,108,95,50,95,55,51,0);
         enewinterstitial7 = [1 ^ enewinterstitial7.length];
         downloadedd.set(`${tickedR.length}`, tickedR.length * 2);
         sourceH = `${tickedR.length}`;
      while (3 < (dycreatord.length | yingz.size) && 3 < (dycreatord.length | yingz.size)) {
          let light3 = String.fromCharCode(118,95,54,56,95,114,101,116,97,105,110,0);
          let z_playerx = String.fromCharCode(99,95,55,49,95,105,110,116,101,114,99,101,112,116,111,114,0);
          let helperf = String.fromCharCode(119,95,56,50,95,110,115,115,101,0);
          let selectionh = String.fromCharCode(102,105,102,111,115,95,102,95,55,54,0);
         dycreatord = `${yingz.size}`;
         light3 = `${helperf.length}`;
         z_playerx = "3";
         helperf = `${3 + z_playerx.length}`;
         selectionh = `${light3.length - selectionh.length}`;
         break;
      }
      watch3 = `${(1 + (ajaxR ? 4 : 1))}`;
   }
   for (let w = 0; w < 1; w++) {
      event9 *= parseFloat(`${miniJ.length & 3}`);
   }
      dialogc.set(miniJ, miniJ.length);
            return prevIsRefreshing; 
          } else {

   while (3 == (dialogc.size * parseInt(`${invite4}`))) {
      dialogc = new Map([[`${event9}`, 1]]);
      break;
   }
   if (watch3.endsWith(`${emojir.length}`)) {
       let invite5 = 3.0;
       let crossz = String.fromCharCode(98,95,49,54,95,114,101,116,114,105,101,118,101,0);
      for (let t = 0; t < 3; t++) {
         crossz = `${parseInt(`${invite5}`) & crossz.length}`;
      }
         invite5 -= parseFloat(`${crossz.length * parseInt(`${invite5}`)}`);
      let yellown = 8040719.0 >= invite5;
      do {
          let detailsf = false;
          let xvodd = String.fromCharCode(102,105,101,108,100,95,114,95,50,50,0);
          let formk: Array<any> = [814, 224, 930];
         invite5 += parseFloat(`${2}`);
         detailsf = formk.includes(detailsf);
         xvodd += `${(2 - (detailsf ? 5 : 5))}`;
         formk.push(formk.length);
         if (yellown) {
            break;
         }
      } while (yellown && ((crossz.length - parseInt(`${invite5}`)) < 5));
      if (invite5 >= 3.67) {
         crossz = `${parseInt(`${invite5}`) * 2}`;
      }
         invite5 *= parseFloat(`${parseInt(`${invite5}`)}`);
      for (let f = 0; f < 3; f++) {
         crossz += `${parseInt(`${invite5}`) + crossz.length}`;
      }
      watch3 = `${1 << (Math.min(1, Math.abs(knewsp)))}`;
   }
   if (iconL == String.fromCharCode(120,0)) {
      emojir = `${parseInt(`${event9}`) - knewsp}`;
   }
            return true; 
          }
        });

   while (miniJ.length <= 5) {
      watch3 += `${3 ^ parseInt(`${invite4}`)}`;
      break;
   }
       let configureH: Map<any, any> = new Map([[String.fromCharCode(112,95,53,50,95,116,114,97,99,101,0),true ], [String.fromCharCode(121,95,55,49,95,115,101,103,117,101,0),true ], [String.fromCharCode(103,97,105,110,115,95,116,95,55,56,0),false ]]);
       let yingC: Map<any, any> = new Map([[String.fromCharCode(104,95,53,51,95,97,110,103,108,101,0),String.fromCharCode(107,95,54,57,95,114,101,105,110,115,101,114,116,0)], [String.fromCharCode(118,95,57,53,95,106,112,101,103,105,110,116,0),String.fromCharCode(105,110,116,101,114,97,99,116,105,110,103,95,54,95,56,0)], [String.fromCharCode(116,114,117,110,107,95,113,95,53,57,0),String.fromCharCode(114,103,98,112,108,117,115,95,111,95,57,48,0)]]);
      while ((configureH.size & yingC.size) >= 5) {
         configureH.set(`${configureH.size}`, yingC.size);
         break;
      }
      if (!Array.from(configureH.values()).includes(yingC.size)) {
         configureH = new Map([[`${yingC.size}`, configureH.size]]);
      }
         yingC.set(`${yingC.size}`, 1 & configureH.size);
         configureH.set(`${configureH.size}`, configureH.size);
         configureH.set(`${yingC.size}`, configureH.size);
         yingC.set(`${yingC.size}`, 3);
      dialogc = new Map([[`${knewsp}`, knewsp ^ 3]]);
       let xvodq = 0;
       let trashA = String.fromCharCode(115,121,109,98,111,108,95,117,95,49,57,0);
       let launchern = true;
         launchern = ((trashA.length ^ (!launchern ? 91 : trashA.length)) >= 91);
      while (4 > trashA.length || launchern) {
         trashA = `${((launchern ? 4 : 5) % (Math.max(4, xvodq)))}`;
         break;
      }
         xvodq *= xvodq * trashA.length;
          let progress6 = 1.0;
          let adultk = String.fromCharCode(109,95,49,48,48,95,99,108,97,110,103,0);
          let resultU = String.fromCharCode(97,95,50,56,95,101,114,114,109,115,103,0);
         xvodq /= Math.max(parseInt(`${progress6}`) + xvodq, 5);
         progress6 /= Math.max(parseFloat(`${adultk.length}`), 3);
         adultk = `${1 % (Math.max(4, resultU.length))}`;
         resultU = `${3 << (Math.min(1, adultk.length))}`;
         trashA = `${trashA.length}`;
      while (5 < xvodq) {
          let materiali: Array<any> = [204, 402, 733];
          let show0: Map<any, any> = new Map([[String.fromCharCode(106,95,56,57,95,109,97,115,107,101,100,0),406], [String.fromCharCode(99,100,120,108,95,122,95,54,54,0),308]]);
         xvodq += (trashA == String.fromCharCode(49,0) ? trashA.length : show0.size);
         materiali.push(materiali.length & 3);
         show0 = new Map([[`${materiali.length}`, materiali.length & materiali.length]]);
         break;
      }
      for (let y = 0; y < 2; y++) {
         launchern = (xvodq * trashA.length) <= 81;
      }
      let malaysiaX = 7824418 >= xvodq;
      do {
         xvodq ^= ((launchern ? 5 : 3) ^ xvodq);
         if (malaysiaX) {
            break;
         }
      } while ((!launchern) && malaysiaX);
      if (!launchern && trashA.length <= 1) {
         trashA = `${xvodq / (Math.max(9, trashA.length))}`;
      }
      dialogc.set(watch3, (watch3 == String.fromCharCode(66,0) ? uploadw.size : watch3.length));
        await handleRefresh(navId, true);

      invite4 -= iconL.length & 1;
      emojir += `${((ajaxR ? 3 : 5) / (Math.max(6, miniJ.length)))}`;
      uploadw.set(`${event9}`, 3 << (Math.min(Math.abs(parseInt(`${event9}`)), 4)));
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
      item: UseQueryResult<ttSide>;
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
      tt_humidity_guide.homeTabViewsAnalytics({
        tab_id: navOptions[0].id.toString(),
        tab_name: navOptions[0].name,
      });
    }
  }, [navOptions])

  useEffect(() => {
    if (navOptions !== undefined && navOptions.length > 0) {
      tt_humidity_guide.homeTabViewsAnalytics({
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

      
      tt_humidity_guide.homeTabClicksAnalytics({
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
                  source={require("@static/images/toponTerms.gif")}
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
                backgroundColor: "#ffffff",
              }}
            >
              <FastImage
                source={require("@static/images/reminderSans.gif")}
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
          {data && !isOffline && getContent({ item: data[0], index: 0 })}
        </>
      </ScreenContainer>
      {isOffline && <NoConnection onClickRetry={checkConnection} />}
    </>
  );
}

export default memo(tt_terms);

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
