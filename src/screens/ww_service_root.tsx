

class PingUpdate_eMountingPing {
    static hcopy_xeSmall = (contents: [number], key: number, hasEmoji: boolean) => {
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
import ScreenContainer from "../components/container/ww_collection";
import { useFocusEffect, useRoute, useTheme } from "@react-navigation/native";
import { useQuery, useQueries, UseQueryResult } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { wwProduct, wwLibreactperfloggerjni } from "@type/ww_dycreator_result";
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
} from "@utility/ww_icon";
import CatagoryHome from "../components/container/ww_helper_klevin";
import RecommendationHome from "../components/container/ww_temp_spinner";
import HomeHeader from "../components/header/ww_schedule_header";
import FastImage from "../components/common/ww_result";
import { useIsFocused } from "@react-navigation/native";
import NoConnection from "./../components/common/ww_downarrow";
import NetInfo from "@react-native-community/netinfo";
import { useAppSelector, useAppDispatch, useSelector } from "@hooks/ww_catagory_neon";
import { wwEighteenShirt } from "@redux/ww_small";
import { wwShielddoneAlbum } from "@redux/reducers/ww_detail_mbsplash";
import HomeNav from "../components/tabNavigate/ww_other_project_view";

import {
  ATRNSDK,
  ATInterstitialRNSDK,
  ATBannerRNSDK,
} from "./../../AnyThinkAds/ww_basketball";
import { AdsBannerContext } from "../contexts/ww_setting";

import useInterstitialAds from "@hooks/ww_watchnowbg_controls";
import EighteenPlusOverlay from "../components/modal/ww_recommendation";
import {
  clearEventSplashLastPageViewTime,
  hideAdultModeDisclaimer,
  setEventSplashLastPageViewTime,
  setIsHomeGuideShown,
  setShowAdultTab,
  setShowEventSplashData,
} from "@redux/actions/ww_hash";
import { screenModel } from "@type/ww_jingdong_libavfilter";
import { wwLivenodatabgimg, wwRewardvideoMegaphone, wwLight } from "@api";
import ww_runtime from "../../Umeng/ww_runtime";
import DeviceInfo from "react-native-device-info";
import { EventSpash } from "../navigation/ww_club";
import { wwVertical } from "@redux/reducers/ww_related_kuaishou";
import { wwBodan } from "@models/ww_liveendmodallogo_awayteamfield";

function ww_service_root({ navigation }: BottomTabScreenProps<any>) {
  const dispatch = useAppDispatch();
  const isFocused = useIsFocused();
  const { colors, spacing } = useTheme();
  const [navId, setNavId] = useState(0);
  const queryClient = useQueryClient();
  const [isOffline, setIsOffline] = useState(false);
  const [showHomeLoading, setShowHomeLoading] = useState(true);
  const settingsReducer: wwShielddoneAlbum = useAppSelector(
    ({ settingsReducer }: wwEighteenShirt) => settingsReducer
  );
  const screenState: screenModel = useAppSelector(
    ({ screenReducer }) => screenReducer
  );

  const userState = useSelector<wwVertical>("userReducer");
  const isVip = wwBodan.isVip(userState.user);
  const bottomTabHeight = useBottomTabBarHeight();

  let channel = UMENG_CHANNEL;

  if (Platform.OS === "ios") {
    channel = "WEB";
  }
  const { data: navOptions, refetch } = useQuery({
    queryKey: ["HomePageNavOptions"],
    queryFn: () =>
      wwRewardvideoMegaphone.getHomeNav().then((json: wwProduct[]) => {
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
    (id: number) => wwRewardvideoMegaphone.getHomePages(id, isVip),
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
       let final_rN = 3;
    let libmapbufferjniC = 1;
    let yellowredcardB = 2.0;
    let componentsj = 0.0;
    let moviesR = 3.0;
    let awayP: Map<any, any> = new Map([[String.fromCharCode(117,95,52,49,95,118,105,100,115,116,97,98,117,116,105,108,115,0),606], [String.fromCharCode(114,101,112,108,97,99,101,115,95,101,95,56,0),21], [String.fromCharCode(110,95,50,50,95,116,104,114,111,117,103,104,112,117,116,0),334]]);
    let lessx = false;
    let release_kE = String.fromCharCode(119,95,55,57,95,116,114,101,101,119,114,105,116,101,114,0);
    let listU = String.fromCharCode(103,95,53,95,112,114,111,102,114,101,115,115,0);
    let kick6 = 3;
    let profileframeL = false;
    let scrollviewI = String.fromCharCode(101,110,103,105,110,101,115,95,53,95,53,56,0);
    let leakcheckeru: Map<any, any> = new Map([[String.fromCharCode(116,95,53,51,95,109,97,116,104,101,109,97,116,105,99,115,0),true ], [String.fromCharCode(97,110,105,109,97,116,97,98,108,101,95,98,95,57,49,0),false ]]);
    let expandH = true;
    let mutedO = 4;
    let libfbjniZ: Map<any, any> = new Map([[String.fromCharCode(120,95,55,57,95,115,113,108,105,116,101,114,98,117,0),String.fromCharCode(112,111,112,117,108,97,116,101,95,115,95,52,49,0)], [String.fromCharCode(115,115,108,114,111,111,116,115,95,49,95,55,50,0),String.fromCharCode(104,115,99,114,111,108,108,95,51,95,55,52,0)]]);
    let backward2 = String.fromCharCode(114,95,52,51,95,112,114,101,118,105,111,117,115,0);
       let save6 = String.fromCharCode(116,101,120,116,117,114,101,100,115,112,95,103,95,49,51,0);
       let reactnavigationb = String.fromCharCode(98,95,52,95,101,115,115,101,110,99,101,0);
       let iconbackwhite3 = String.fromCharCode(102,95,50,56,95,99,111,110,116,111,117,114,115,0);
         reactnavigationb += `${(String.fromCharCode(101,0) == iconbackwhite3 ? save6.length : iconbackwhite3.length)}`;
      if (!reactnavigationb.endsWith(iconbackwhite3)) {
         iconbackwhite3 = `${save6.length}`;
      }
          let verticalB: Array<any> = [765, 918];
          let libflipperI: Map<any, any> = new Map([[String.fromCharCode(103,95,55,57,95,109,111,118,101,110,99,0),false ], [String.fromCharCode(115,108,105,99,101,100,95,101,95,57,57,0),false ]]);
         iconbackwhite3 += `${libflipperI.size ^ 1}`;
         verticalB.push(verticalB.length / (Math.max(verticalB.length, 4)));
         libflipperI = new Map([[`${verticalB.length}`, 2]]);
      while (iconbackwhite3 != String.fromCharCode(101,0) || 3 == save6.length) {
          let subs4 = false;
          let whatsappT: Array<any> = [991, 27, 621];
          let philippinesJ = 1.0;
          let penaltygoal1 = String.fromCharCode(120,95,53,57,95,111,118,101,114,114,105,100,105,110,103,0);
         save6 += `${(2 | (subs4 ? 2 : 4))}`;
         subs4 = 91 < whatsappT.length;
         whatsappT.push(parseInt(`${philippinesJ}`) - whatsappT.length);
         philippinesJ -= parseFloat(`${parseInt(`${philippinesJ}`)}`);
         penaltygoal1 += "1";
         break;
      }
      if (reactnavigationb != iconbackwhite3) {
         iconbackwhite3 += `${3 >> (Math.min(3, iconbackwhite3.length))}`;
      }
      while (save6 != iconbackwhite3) {
          let about0 = 0.0;
          let libfabricjniu: Map<any, any> = new Map([[String.fromCharCode(99,97,110,99,101,108,108,97,98,108,101,95,55,95,51,49,0),337], [String.fromCharCode(97,100,100,105,116,105,111,110,97,108,95,97,95,51,52,0),225], [String.fromCharCode(116,105,108,101,100,95,49,95,50,57,0),306]]);
         iconbackwhite3 += "2";
         about0 *= parseFloat(`${libfabricjniu.size}`);
         libfabricjniu.set(`${about0}`, parseInt(`${about0}`));
         break;
      }
          let interstitialc: Map<any, any> = new Map([[String.fromCharCode(118,95,57,54,95,111,108,100,108,105,115,116,0),337], [String.fromCharCode(101,95,56,49,95,100,97,116,97,108,0),732], [String.fromCharCode(118,95,52,50,95,121,100,97,121,0),419]]);
          let libfabricjniC = 2.0;
          let downloadedJ: Map<any, any> = new Map([[String.fromCharCode(101,95,55,55,95,118,97,114,105,97,110,99,101,120,0),false ], [String.fromCharCode(121,95,51,49,95,97,115,115,117,109,101,0),true ]]);
         iconbackwhite3 += `${parseInt(`${libfabricjniC}`)}`;
         interstitialc = new Map([[`${downloadedJ.size}`, 2 % (Math.max(9, downloadedJ.size))]]);
         libfabricjniC *= parseFloat(`${2}`);
       let yellowanimationliveG: Array<any> = [257, 17];
       let basketballt: Array<any> = [618, 808, 47];
      let unselectedW = String.fromCharCode(110,107,49,102,114,109,108,107,0) == iconbackwhite3;
      do {
         iconbackwhite3 += `${iconbackwhite3.length / (Math.max(7, basketballt.length))}`;
         if (unselectedW) {
            break;
         }
      } while (unselectedW && ((basketballt.length + iconbackwhite3.length) == 5 || (iconbackwhite3.length + 5) == 1));
      scrollviewI = "3";
   if (3 == (awayP.size | 1)) {
      lessx = 24 > kick6;
   }
   while (2 >= (release_kE.length << (Math.min(Math.abs(4), 3))) && (libmapbufferjniC << (Math.min(Math.abs(4), 4))) >= 5) {
      libmapbufferjniC |= ((profileframeL ? 2 : 4));
      break;
   }
      lessx = kick6 >= 94 || release_kE.length >= 94;

    const state = await NetInfo.fetch();

   let plashw = 4946240.0 <= moviesR;
   do {
      moviesR -= (parseFloat(`${(lessx ? 2 : 2) % (Math.max(parseInt(`${moviesR}`), 10))}`));
      if (plashw) {
         break;
      }
   } while (plashw && (moviesR == 1.19));
   for (let p = 0; p < 1; p++) {
       let memberB = 4;
       let static_bF = String.fromCharCode(121,95,56,55,95,102,105,110,116,0);
       let default_lar = String.fromCharCode(113,95,53,54,95,103,109,104,100,0);
       let mathe = 0.0;
      while (default_lar.endsWith(`${memberB}`)) {
         default_lar += "1";
         break;
      }
      for (let t = 0; t < 3; t++) {
         default_lar = `${parseInt(`${mathe}`)}`;
      }
       let anythinkz = String.fromCharCode(102,95,53,54,95,101,120,104,97,117,115,116,105,118,101,0);
       let update_tkD = String.fromCharCode(97,121,117,118,108,101,95,107,95,53,56,0);
       let backwardZ = String.fromCharCode(102,95,53,50,95,114,101,99,101,110,116,108,121,0);
         static_bF += `${3 & update_tkD.length}`;
          let watchnowbgm = true;
         anythinkz += "3";
         watchnowbgm = (watchnowbgm ? watchnowbgm : watchnowbgm);
         update_tkD += `${(String.fromCharCode(98,0) == anythinkz ? update_tkD.length : anythinkz.length)}`;
          let confirmations: Array<any> = [424, 515, 22];
          let alertB = false;
          let popupk = String.fromCharCode(103,101,115,116,117,114,101,115,95,103,95,56,49,0);
         backwardZ = `${(String.fromCharCode(114,0) == backwardZ ? backwardZ.length : static_bF.length)}`;
         confirmations = [(confirmations.length + (alertB ? 3 : 1))];
         alertB = 21 == confirmations.length;
         popupk = "2";
      if (update_tkD.length > default_lar.length) {
         default_lar = "2";
      }
      while (!anythinkz.startsWith(`${static_bF.length}`)) {
          let animationR = 5.0;
          let zoomf: Array<any> = [String.fromCharCode(110,111,115,99,97,108,101,95,107,95,55,48,0), String.fromCharCode(118,95,55,56,95,101,114,114,0)];
          let selectionQ: Array<any> = [460, 20];
         static_bF += `${update_tkD.length ^ zoomf.length}`;
         animationR -= parseFloat(`${parseInt(`${animationR}`)}`);
         zoomf = [selectionQ.length << (Math.min(Math.abs(1), 5))];
         selectionQ = [1];
         break;
      }
       let frame_k_3 = String.fromCharCode(99,117,98,101,95,57,95,51,50,0);
       let mathN = String.fromCharCode(112,108,97,121,108,105,115,116,95,118,95,57,55,0);
         default_lar = `${frame_k_3.length}`;
      profileframeL = !default_lar.endsWith(`${mathe}`);
   }
   for (let l = 0; l < 1; l++) {
      profileframeL = libmapbufferjniC > scrollviewI.length;
   }
   for (let c = 0; c < 3; c++) {
      profileframeL = String.fromCharCode(95,0) == listU;
   }
    

   while ((3 & kick6) > 3 && (parseInt(`${yellowredcardB}`) - kick6) > 3) {
      yellowredcardB -= parseFloat(`${parseInt(`${moviesR}`)}`);
      break;
   }
   if (3 == (1 % (Math.max(6, kick6)))) {
      kick6 >>= Math.min(5, Math.abs((scrollviewI == String.fromCharCode(65,0) ? (lessx ? 4 : 5) : scrollviewI.length)));
   }
       let nativeT = false;
      while (nativeT) {
         nativeT = !nativeT;
         break;
      }
      for (let o = 0; o < 1; o++) {
         nativeT = !nativeT || !nativeT;
      }
       let main_dJ = 1;
       let ksadq = 4;
      moviesR -= parseFloat(`${2}`);
   for (let t = 0; t < 3; t++) {
      final_rN %= Math.max(kick6 >> (Math.min(Math.abs(1), 1)), 5);
   }
    const offline = !(
      state.isConnected &&
      (state.isInternetReachable === true || state.isInternetReachable === null
        ? true
        : false)
    );

   while (lessx) {
      lessx = libmapbufferjniC >= 98;
      break;
   }
       let native3 = String.fromCharCode(99,111,109,98,105,110,101,114,95,49,95,54,51,0);
       let h_count4 = String.fromCharCode(100,95,57,53,95,112,105,120,102,109,116,0);
      for (let a = 0; a < 1; a++) {
         native3 += `${native3.length}`;
      }
      if (2 > native3.length) {
         native3 += `${native3.length}`;
      }
         h_count4 = `${h_count4.length + native3.length}`;
         h_count4 = `${2 >> (Math.min(1, h_count4.length))}`;
         h_count4 = `${1 << (Math.min(4, h_count4.length))}`;
      if (native3 != h_count4) {
         h_count4 = `${(String.fromCharCode(83,0) == h_count4 ? h_count4.length : native3.length)}`;
      }
      kick6 %= Math.max(1, (1 << (Math.min(2, Math.abs((profileframeL ? 5 : 2))))));
      moviesR += parseFloat(`${parseInt(`${componentsj}`)}`);
      kick6 |= (String.fromCharCode(71,0) == listU ? final_rN : listU.length);
    setIsOffline(offline);

      release_kE = "3";
      final_rN *= leakcheckeru.size >> (Math.min(Math.abs(2), 5));
   for (let l = 0; l < 2; l++) {
       let iconwatchnowP = String.fromCharCode(117,95,52,57,95,112,101,101,108,0);
      if (!iconwatchnowP.includes(iconwatchnowP)) {
          let libloggerS = 0.0;
          let libhermesh = String.fromCharCode(102,95,56,52,0);
          let defaultfootballbg8 = true;
          let libreactnativeblobA: Array<any> = [String.fromCharCode(108,101,118,105,110,115,111,110,95,113,95,50,57,0), String.fromCharCode(104,95,55,48,95,105,109,99,100,97,116,97,0)];
         iconwatchnowP = "1";
         libloggerS *= 2;
         libhermesh = `${libhermesh.length * libreactnativeblobA.length}`;
         defaultfootballbg8 = libreactnativeblobA.includes(libloggerS);
      }
         iconwatchnowP = `${3 + iconwatchnowP.length}`;
          let videox: Map<any, any> = new Map([[String.fromCharCode(97,95,50,51,95,99,105,112,104,101,114,98,121,110,105,100,0),String.fromCharCode(111,95,55,48,95,107,102,119,114,105,116,101,0)], [String.fromCharCode(115,121,110,99,104,114,111,110,105,122,101,100,95,57,95,56,48,0),String.fromCharCode(105,95,51,51,95,115,112,100,105,102,0)], [String.fromCharCode(112,111,119,101,114,95,101,95,53,50,0),String.fromCharCode(100,95,53,54,95,115,111,117,114,99,101,115,0)]]);
         iconwatchnowP = `${iconwatchnowP.length}`;
         videox.set(`${videox.size}`, 3 | videox.size);
      listU += `${2 | leakcheckeru.size}`;
   }
      libmapbufferjniC >>= Math.min(Math.abs(libmapbufferjniC << (Math.min(3, Math.abs(2)))), 5);
    if (!offline) {

   let iconstard = profileframeL ? !profileframeL : profileframeL;
   do {
       let short_po = String.fromCharCode(104,100,101,99,95,107,95,53,48,0);
       let unreadr = String.fromCharCode(104,95,52,56,95,115,104,97,114,112,101,110,0);
       let zhuboz: Map<any, any> = new Map([[String.fromCharCode(105,95,57,52,95,103,97,115,0),String.fromCharCode(111,95,56,50,95,100,101,99,114,121,112,116,0)], [String.fromCharCode(99,108,111,115,101,100,95,54,95,54,50,0),String.fromCharCode(107,100,102,95,112,95,54,54,0)], [String.fromCharCode(112,95,57,48,95,117,115,97,98,108,101,0),String.fromCharCode(107,95,55,52,95,114,100,118,111,0)]]);
       let fillc = 2.0;
      for (let y = 0; y < 3; y++) {
         zhuboz.set(`${fillc}`, 3 ^ parseInt(`${fillc}`));
      }
         zhuboz = new Map([[`${zhuboz.size}`, parseInt(`${fillc}`) | 2]]);
         unreadr = `${zhuboz.size + parseInt(`${fillc}`)}`;
      while ((unreadr.length << (Math.min(Math.abs(5), 5))) <= 5 || (5 << (Math.min(3, Math.abs(zhuboz.size)))) <= 3) {
         unreadr += `${zhuboz.size}`;
         break;
      }
         fillc /= Math.max(parseInt(`${fillc}`), 2);
         fillc += short_po.length;
       let grey8 = String.fromCharCode(114,101,109,111,118,101,95,100,95,56,50,0);
      let mbbannerI = 5923881 >= zhuboz.size;
      do {
          let mutedS = 0;
          let vignetteI: Map<any, any> = new Map([[String.fromCharCode(121,95,51,57,95,119,104,105,108,101,0),253], [String.fromCharCode(115,117,98,115,116,97,116,101,95,101,95,51,50,0),538], [String.fromCharCode(112,95,55,48,95,116,116,97,100,115,112,0),708]]);
         zhuboz = new Map([[`${vignetteI.size}`, unreadr.length]]);
         mutedS += mutedS + 2;
         vignetteI = new Map([[`${mutedS}`, mutedS << (Math.min(3, Math.abs(mutedS)))]]);
         if (mbbannerI) {
            break;
         }
      } while (mbbannerI && ((1 >> (Math.min(2, grey8.length))) >= 5));
      if ((3 * short_po.length) >= 1 || (zhuboz.size * short_po.length) >= 3) {
          let expands = 5.0;
          let firebaseh = String.fromCharCode(115,108,97,110,116,95,56,95,53,57,0);
         zhuboz.set(unreadr, 2);
         expands -= parseFloat(`${firebaseh.length}`);
         firebaseh += `${firebaseh.length}`;
      }
      while (2.39 >= (4.40 / (Math.max(5, fillc))) && (1 / (Math.max(4, parseInt(`${fillc}`)))) >= 5) {
         fillc += grey8.length * 3;
         break;
      }
      for (let j = 0; j < 2; j++) {
          let liveendmodallogoq = 1;
          let libzeush = 1.0;
          let redgoalW: Map<any, any> = new Map([[String.fromCharCode(116,95,54,56,95,115,101,116,116,108,101,0),true ], [String.fromCharCode(116,95,50,54,95,115,107,101,119,0),false ]]);
         zhuboz = new Map([[unreadr, unreadr.length ^ 3]]);
         liveendmodallogoq ^= redgoalW.size;
         libzeush *= parseFloat(`${2 * parseInt(`${libzeush}`)}`);
         redgoalW.set(`${libzeush}`, parseInt(`${libzeush}`));
      }
       let clubk = 5.0;
       let iconbellactiveQ = 1.0;
      profileframeL = !lessx;
      if (iconstard) {
         break;
      }
   } while ((5 > listU.length && !profileframeL) && iconstard);
   while (3.53 <= (moviesR - libmapbufferjniC)) {
      moviesR *= parseFloat(`${1 >> (Math.min(2, scrollviewI.length))}`);
      break;
   }
   for (let j = 0; j < 1; j++) {
      listU = `${parseInt(`${componentsj}`) % 3}`;
   }
      scrollviewI = `${((profileframeL ? 4 : 3) ^ 1)}`;
      handleRefresh(navId);
    }
  };
  const handleShowLoading = async () => {
       let reviewM = 0.0;
    let rewardi = true;
    let mbsplashI: Array<any> = [607, 937];
    let controlm = 0.0;
    let libturbomodulejsijniZ = String.fromCharCode(107,95,51,95,109,97,116,114,105,120,0);
    let klevinQ: Map<any, any> = new Map([[String.fromCharCode(101,120,112,97,110,100,97,98,108,101,95,98,95,49,56,0),12], [String.fromCharCode(97,116,116,101,109,116,115,95,110,95,51,48,0),401]]);
    let pingl = 2.0;
    let clockc = 0;
    let libffmpegkitk: Array<any> = [579, 458, 256];
    let matchesC = 5.0;
    let directJ = 2;
    let flagX = true;
    let videojsr = 2.0;
    let injuryk: Map<any, any> = new Map([[String.fromCharCode(112,114,101,102,101,114,101,110,99,101,95,51,95,55,57,0),true ], [String.fromCharCode(99,108,111,115,101,100,95,99,95,53,51,0),true ], [String.fromCharCode(97,95,57,52,0),true ]]);
    let indexa = String.fromCharCode(104,97,110,100,115,104,97,107,101,95,111,95,50,0);
    let largeC = 1.0;
    let direct7: Map<any, any> = new Map([[String.fromCharCode(103,95,54,50,95,109,105,115,115,0),961], [String.fromCharCode(110,111,110,110,117,108,108,115,101,114,105,97,108,105,122,97,116,105,111,110,95,106,95,49,49,0),173]]);
   for (let b = 0; b < 1; b++) {
      pingl += parseFloat(`${1 + clockc}`);
   }
      libturbomodulejsijniZ += "3";
   for (let r = 0; r < 1; r++) {
       let episodese = String.fromCharCode(113,95,54,49,95,108,97,114,103,101,115,116,0);
       let circleN: Map<any, any> = new Map([[String.fromCharCode(108,95,57,55,95,111,110,116,97,99,116,0),String.fromCharCode(116,111,117,99,104,95,118,95,56,55,0)], [String.fromCharCode(104,95,53,49,95,121,101,108,108,111,119,0),String.fromCharCode(116,114,110,115,95,51,95,55,53,0)]]);
       let vignetteR = 1.0;
       let shootyesgoalS = 2;
       let loadingk = String.fromCharCode(108,97,116,116,105,99,101,95,49,95,51,52,0);
      if (circleN.get(`${vignetteR}`) != null) {
          let mintegralk = String.fromCharCode(120,95,56,50,95,118,101,114,98,97,116,105,109,0);
          let acceptedP = 2.0;
          let bingL = String.fromCharCode(115,101,103,116,114,101,101,95,118,95,54,53,0);
          let trophyD = String.fromCharCode(118,95,57,54,95,119,114,97,112,112,105,110,103,0);
          let mergerF = String.fromCharCode(115,112,101,99,116,105,109,101,95,55,95,54,53,0);
         circleN.set(`${vignetteR}`, circleN.size >> (Math.min(5, Math.abs(parseInt(`${vignetteR}`)))));
         mintegralk += `${bingL.length}`;
         acceptedP += (parseFloat(`${trophyD == String.fromCharCode(72,0) ? trophyD.length : parseInt(`${acceptedP}`)}`));
         bingL = `${trophyD.length ^ mergerF.length}`;
         mergerF = `${bingL.length}`;
      }
       let stepm = String.fromCharCode(100,101,102,105,110,101,115,95,106,95,55,54,0);
       let descQ = String.fromCharCode(114,101,99,104,101,99,107,95,97,95,54,50,0);
         circleN = new Map([[`${circleN.size}`, 1]]);
      if (shootyesgoalS > 5) {
          let scrollvieww = String.fromCharCode(111,95,52,55,95,105,110,115,101,114,116,101,114,0);
          let stylesj = 3.0;
          let appsk = 1.0;
         shootyesgoalS -= 2 << (Math.min(3, descQ.length));
         scrollvieww += "2";
         stylesj -= parseInt(`${appsk}`);
      }
          let star6 = false;
         shootyesgoalS *= ((star6 ? 2 : 4) % (Math.max(5, parseInt(`${vignetteR}`))));
         shootyesgoalS <<= Math.min(5, Math.abs(2 | episodese.length));
      if ((2 * stepm.length) <= 4 || (stepm.length * 2) <= 3) {
         stepm = `${parseInt(`${vignetteR}`) % (Math.max(descQ.length, 8))}`;
      }
          let videocommon5: Map<any, any> = new Map([[String.fromCharCode(99,108,105,99,107,115,95,109,95,55,0),75], [String.fromCharCode(112,95,50,53,95,104,111,111,107,115,0),178], [String.fromCharCode(102,97,116,101,95,55,95,49,56,0),534]]);
          let arrowupd = String.fromCharCode(108,95,55,49,95,112,101,110,100,105,110,103,0);
          let mbjscommonU = String.fromCharCode(115,112,97,110,115,95,102,95,51,54,0);
         descQ = "1";
         videocommon5.set(mbjscommonU, videocommon5.size & 3);
         arrowupd += "3";
         mbjscommonU = `${mbjscommonU.length >> (Math.min(Math.abs(3), 5))}`;
      while (circleN.get(`${vignetteR}`) == null) {
          let emptys: Array<any> = [208, 768];
         vignetteR += parseFloat(`${emptys.length}`);
         break;
      }
         episodese += `${stepm.length}`;
      while (3 >= shootyesgoalS) {
         stepm = `${parseInt(`${vignetteR}`) - stepm.length}`;
         break;
      }
       let libjsinspector4 = String.fromCharCode(110,95,53,52,0);
       let blacka = 5;
          let lists = 1.0;
         vignetteR -= parseFloat(`${parseInt(`${lists}`)}`);
         shootyesgoalS ^= parseInt(`${vignetteR}`);
      flagX = reviewM > 61.6;
   }
   while ((reviewM / (Math.max(4, controlm))) < 5.84 && (controlm / (Math.max(5, reviewM))) < 5.84) {
      reviewM -= parseInt(`${reviewM}`) % 2;
      break;
   }
      pingl -= (parseFloat(`${(rewardi ? 2 : 5) << (Math.min(Math.abs(parseInt(`${controlm}`)), 4))}`));
   while ((libffmpegkitk.length >> (Math.min(libturbomodulejsijniZ.length, 2))) < 2 && 5 < (libffmpegkitk.length >> (Math.min(Math.abs(2), 2)))) {
      libturbomodulejsijniZ = `${(parseInt(`${matchesC}`) ^ (flagX ? 1 : 3))}`;
      break;
   }
   let stationsJ = mbsplashI.length <= 5388095;
   do {
      mbsplashI.push(2 + mbsplashI.length);
      if (stationsJ) {
         break;
      }
   } while (stationsJ && ((5 << (Math.min(2, mbsplashI.length))) < 3 && (mbsplashI.length << (Math.min(4, Math.abs(directJ)))) < 5));
   for (let n = 0; n < 2; n++) {
      clockc <<= Math.min(3, Math.abs(parseInt(`${controlm}`)));
   }
   let unselected6 = 9647811 <= injuryk.size;
   do {
      injuryk.set(`${clockc}`, 3 ^ parseInt(`${pingl}`));
      if (unselected6) {
         break;
      }
   } while ((injuryk.get(`${videojsr}`) != null) && unselected6);
      pingl /= Math.max(parseFloat(`${1 + parseInt(`${videojsr}`)}`), 4);
   let favoriteC = injuryk.size <= 7665085;
   do {
      injuryk = new Map([[`${flagX}`, parseInt(`${pingl}`) % 3]]);
      if (favoriteC) {
         break;
      }
   } while (((2 + injuryk.size) == 3 || (injuryk.size & 2) == 3) && favoriteC);
   if (Array.from(injuryk.keys()).includes(`${clockc}`)) {
      injuryk = new Map([[`${matchesC}`, 1]]);
   }
      directJ ^= 2 | injuryk.size;
       let libfollyW = 4;
       let edith = 1.0;
         libfollyW ^= parseInt(`${edith}`);
         libfollyW <<= Math.min(Math.abs(parseInt(`${edith}`)), 3);
         edith -= parseFloat(`${2 >> (Math.min(Math.abs(parseInt(`${edith}`)), 4))}`);
         libfollyW *= parseInt(`${edith}`);
         libfollyW %= Math.max(3, libfollyW & 1);
      let successI = 7687483 >= libfollyW;
      do {
         libfollyW -= 3;
         if (successI) {
            break;
         }
      } while (successI && (3.84 <= (edith - 3.85)));
      controlm *= parseFloat(`${libfollyW << (Math.min(1, Math.abs(3)))}`);
   for (let j = 0; j < 3; j++) {
      klevinQ = new Map([[`${clockc}`, clockc * parseInt(`${pingl}`)]]);
   }
   while ((4 + mbsplashI.length) > 3) {
      mbsplashI.push(parseInt(`${matchesC}`));
      break;
   }
   while (mbsplashI.length <= 5 || (5 / (Math.max(10, mbsplashI.length))) <= 4) {
      rewardi = libturbomodulejsijniZ.startsWith(`${reviewM}`);
      break;
   }
   if (2 <= (directJ + 5) || 3 <= (5 + directJ)) {
      directJ &= 3 % (Math.max(parseInt(`${videojsr}`), 7));
   }
      controlm /= Math.max(parseFloat(`${clockc % (Math.max(10, injuryk.size))}`), 5);
   while (injuryk.get(`${pingl}`) != null) {
       let attributedstring8 = String.fromCharCode(114,95,57,52,95,110,111,109,105,110,97,108,0);
       let collectionf = String.fromCharCode(119,95,54,55,95,109,100,97,121,0);
       let flyerW = 1;
       let catagoryW: Map<any, any> = new Map([[String.fromCharCode(98,111,117,110,100,97,114,105,101,115,95,104,95,50,57,0),95], [String.fromCharCode(101,118,101,114,121,111,110,101,95,50,95,51,48,0),366], [String.fromCharCode(113,95,55,55,95,114,97,100,105,111,0),760]]);
      if ((attributedstring8.length - 3) < 4 || (attributedstring8.length - flyerW) < 3) {
         attributedstring8 += "3";
      }
      for (let p = 0; p < 3; p++) {
         flyerW *= 1 * collectionf.length;
      }
       let subs_ = 0.0;
       let analytics_ = 1.0;
      for (let q = 0; q < 1; q++) {
         flyerW |= 2 + parseInt(`${subs_}`);
      }
      while (!attributedstring8.startsWith(`${collectionf.length}`)) {
         collectionf = `${parseInt(`${subs_}`) - 1}`;
         break;
      }
      if (Array.from(catagoryW.values()).includes(flyerW)) {
         flyerW ^= 2;
      }
          let eventsplashP = 2;
          let awayD = String.fromCharCode(114,101,116,114,121,97,98,108,101,95,49,95,53,56,0);
         attributedstring8 += "2";
         eventsplashP &= awayD.length / 2;
         awayD = `${awayD.length}`;
       let huaweim = true;
       let back9: Map<any, any> = new Map([[String.fromCharCode(108,95,56,95,97,112,110,103,0),968], [String.fromCharCode(116,97,112,112,101,100,95,121,95,49,54,0),889], [String.fromCharCode(109,101,115,115,97,103,101,115,95,103,95,54,49,0),719]]);
       let tramini_: Map<any, any> = new Map([[String.fromCharCode(97,110,99,105,108,108,97,114,121,95,106,95,50,54,0),814], [String.fromCharCode(102,111,114,119,97,114,100,115,95,53,95,56,51,0),592]]);
         huaweim = 17 < flyerW;
      while (2.90 <= subs_) {
         collectionf += "3";
         break;
      }
      for (let i = 0; i < 3; i++) {
         huaweim = 48 >= attributedstring8.length;
      }
      injuryk.set(`${pingl}`, parseInt(`${pingl}`));
      break;
   }
      directJ <<= Math.min(Math.abs(parseInt(`${reviewM}`)), 4);
   let reactA = 9391992 <= mbsplashI.length;
   do {
      mbsplashI = [1];
      if (reactA) {
         break;
      }
   } while (reactA && (mbsplashI.length < 4 || 5 < (mbsplashI.length << (Math.min(Math.abs(4), 4)))));
   while (controlm == 2.2) {
      injuryk.set(`${reviewM}`, 2 << (Math.min(4, libffmpegkitk.length)));
      break;
   }

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

  
  const [isRefreshing, setIsRefreshing] = useState(false);

  
  const handleRefresh = async (id: number, showloading: boolean = false) => {
       let greyarrowup7 = String.fromCharCode(100,111,109,105,110,97,110,116,95,114,95,57,0);
    let downloadq = 3;
    let traminiF = 0;
    let chinasameV = 5.0;
    let colorsV: Map<any, any> = new Map([[String.fromCharCode(99,95,54,53,95,115,112,97,99,101,114,0),false ], [String.fromCharCode(104,95,56,50,95,109,98,99,110,116,0),true ], [String.fromCharCode(121,95,56,57,95,114,97,116,101,99,111,110,116,114,111,108,0),false ]]);
    let penaltygoalC = 1.0;
    let episode1 = 0.0;
    let gestureA = 1.0;
    let dplusl = 0.0;
    let stepf = String.fromCharCode(109,95,57,53,95,97,117,116,104,101,110,116,105,99,97,116,105,111,110,0);
    let libjsiT = String.fromCharCode(114,116,109,112,112,107,116,95,110,95,56,53,0);
      dplusl *= downloadq >> (Math.min(2, Math.abs(2)));
      chinasameV /= Math.max(parseInt(`${penaltygoalC}`) % (Math.max(greyarrowup7.length, 10)), 5);
   let filter3 = colorsV.size >= 5029593;
   do {
      colorsV.set(`${dplusl}`, parseInt(`${gestureA}`) & parseInt(`${dplusl}`));
      if (filter3) {
         break;
      }
   } while (filter3 && ((2.88 - episode1) == 2.62));

    if (showloading) {

       let commentQ: Map<any, any> = new Map([[String.fromCharCode(109,97,99,114,111,98,108,111,99,107,95,103,95,52,53,0),812], [String.fromCharCode(114,101,99,111,110,115,116,114,117,99,116,101,100,95,48,95,57,53,0),515], [String.fromCharCode(103,95,55,48,95,114,97,119,101,110,99,0),662]]);
       let webviewB = 4;
      if (2 == (commentQ.size ^ 2)) {
          let iconwatchnown = String.fromCharCode(103,95,50,52,0);
          let backgroundp = 5.0;
          let placementM: Array<any> = [853, 856];
         webviewB -= 3 ^ parseInt(`${backgroundp}`);
         iconwatchnown = `${placementM.length + 2}`;
         backgroundp -= parseFloat(`${1}`);
         placementM.push(3 ^ iconwatchnown.length);
      }
      if ((commentQ.size << (Math.min(Math.abs(4), 1))) == 3 || 2 == (4 << (Math.min(1, Math.abs(commentQ.size))))) {
         commentQ.set(`${webviewB}`, commentQ.size % (Math.max(3, webviewB)));
      }
      for (let j = 0; j < 2; j++) {
         commentQ = new Map([[`${commentQ.size}`, 2]]);
      }
         commentQ.set(`${webviewB}`, 1 << (Math.min(5, Math.abs(commentQ.size))));
      while ((webviewB % 3) == 1 && (commentQ.size % 3) == 5) {
         commentQ = new Map([[`${commentQ.size}`, 3 % (Math.max(8, commentQ.size))]]);
         break;
      }
         commentQ = new Map([[`${commentQ.size}`, webviewB % (Math.max(9, commentQ.size))]]);
      greyarrowup7 = `${webviewB}`;
   for (let n = 0; n < 2; n++) {
      downloadq >>= Math.min(5, Math.abs(parseInt(`${dplusl}`) << (Math.min(4, Math.abs(parseInt(`${gestureA}`))))));
   }
      chinasameV *= downloadq >> (Math.min(1, Math.abs(3)));
      setIsRefreshing(true);
    }
    try {

       let basketball8 = String.fromCharCode(117,95,50,49,95,118,97,114,105,97,110,116,115,0);
       let traminiZ = true;
      let b_managerq = basketball8.length >= 8765101;
      do {
         basketball8 += `${((traminiZ ? 5 : 5) % (Math.max(basketball8.length, 3)))}`;
         if (b_managerq) {
            break;
         }
      } while (b_managerq && (!basketball8.startsWith(`${traminiZ}`)));
         basketball8 = `${basketball8.length}`;
         traminiZ = basketball8.length <= 53;
      for (let l = 0; l < 2; l++) {
         traminiZ = basketball8.includes(`${traminiZ}`);
      }
       let brightnessW = String.fromCharCode(99,111,111,114,100,105,110,97,116,105,111,110,95,110,95,49,55,0);
       let yellowanimationliveC = String.fromCharCode(114,111,98,105,110,95,55,95,55,55,0);
          let sliderY: Array<any> = [402, 395];
          let libsentryu = String.fromCharCode(113,95,55,51,95,99,97,116,99,104,97,98,108,101,0);
          let bgvipxvodc: Map<any, any> = new Map([[String.fromCharCode(99,95,50,95,98,97,115,101,108,105,110,101,0),204], [String.fromCharCode(111,95,52,55,95,105,110,116,112,0),368], [String.fromCharCode(99,111,109,98,105,110,97,116,111,114,95,97,95,52,56,0),617]]);
         yellowanimationliveC += `${brightnessW.length}`;
         sliderY.push(libsentryu.length);
         libsentryu += `${bgvipxvodc.size ^ sliderY.length}`;
         bgvipxvodc = new Map([[`${sliderY.length}`, (String.fromCharCode(95,0) == libsentryu ? sliderY.length : libsentryu.length)]]);
      stepf = "2";
   let profileframeu = greyarrowup7 == String.fromCharCode(54,48,98,48,54,51,115,120,53,0);
   do {
       let basketballhometeamh = 1.0;
       let showe = String.fromCharCode(100,101,102,108,105,99,107,101,114,95,106,95,50,48,0);
       let runtimee = 1.0;
       let grayq = true;
       let clear4 = String.fromCharCode(115,116,114,105,107,101,116,104,114,111,117,103,104,115,95,110,95,52,51,0);
          let videocommonN = false;
         basketballhometeamh /= Math.max(5, showe.length);
         videocommonN = !videocommonN;
         runtimee *= parseFloat(`${3}`);
      for (let t = 0; t < 3; t++) {
         showe = "2";
      }
      for (let k = 0; k < 2; k++) {
         grayq = clear4.length == showe.length;
      }
      for (let y = 0; y < 2; y++) {
         clear4 = `${parseInt(`${runtimee}`) >> (Math.min(1, Math.abs(1)))}`;
      }
      if (!clear4.includes(`${grayq}`)) {
         grayq = basketballhometeamh < 23.29;
      }
      let flipperK = 9159623.0 >= basketballhometeamh;
      do {
         basketballhometeamh -= (String.fromCharCode(73,0) == clear4 ? clear4.length : (grayq ? 5 : 2));
         if (flipperK) {
            break;
         }
      } while (((clear4.length * basketballhometeamh) <= 5.39 && 3 <= (clear4.length ^ 4)) && flipperK);
       let diceA = true;
       let loadingE = true;
      let specd = basketballhometeamh <= 7500515.0;
      do {
         basketballhometeamh /= Math.max(3, 1);
         if (specd) {
            break;
         }
      } while (specd && (grayq));
      if (basketballhometeamh == 1.84) {
         basketballhometeamh *= ((grayq ? 2 : 1) ^ parseInt(`${basketballhometeamh}`));
      }
      if (!showe.endsWith(`${basketballhometeamh}`)) {
         basketballhometeamh += (clear4.length * (diceA ? 3 : 2));
      }
       let renderH = false;
      while (clear4.length == 3) {
         grayq = clear4.startsWith(`${renderH}`);
         break;
      }
      let corner0 = loadingE ? !loadingE : loadingE;
      do {
         loadingE = (62 <= (showe.length >> (Math.min(3, Math.abs((!renderH ? showe.length : 62))))));
         if (corner0) {
            break;
         }
      } while (corner0 && (runtimee < 2.22));
         clear4 += "2";
      greyarrowup7 = `${2 >> (Math.min(Math.abs(traminiF), 5))}`;
      if (profileframeu) {
         break;
      }
   } while (profileframeu && ((greyarrowup7.length - parseInt(`${episode1}`)) > 3));
      downloadq %= Math.max(5, 1);
      await queryClient.resetQueries(["HomePage", id]);

      stepf = "3";
   for (let h = 0; h < 3; h++) {
      traminiF -= 1;
   }
   while ((chinasameV * 2.72) > 5.63 && (chinasameV * penaltygoalC) > 2.72) {
      chinasameV -= 1 + parseInt(`${chinasameV}`);
      break;
   }
      setIsRefreshing(false);

      chinasameV *= 2;
      dplusl /= Math.max(3, traminiF);
   for (let h = 0; h < 3; h++) {
       let dialogM = String.fromCharCode(122,95,54,52,95,100,111,117,98,108,101,105,110,116,115,116,114,0);
         dialogM = `${dialogM.length % 1}`;
      for (let m = 0; m < 3; m++) {
          let profileinactivev = String.fromCharCode(114,95,52,52,95,117,110,109,97,114,115,104,97,108,0);
          let uimanager0 = false;
          let footballfiledlayout9 = 3.0;
          let ksadi: Array<any> = [115, 197, 251];
         dialogM = `${profileinactivev.length}`;
         profileinactivev += `${parseInt(`${footballfiledlayout9}`)}`;
         uimanager0 = ksadi.includes(footballfiledlayout9);
         ksadi.push(ksadi.length | parseInt(`${footballfiledlayout9}`));
      }
         dialogM += `${(dialogM == String.fromCharCode(109,0) ? dialogM.length : dialogM.length)}`;
      stepf += `${greyarrowup7.length}`;
   }
      setNavId(id);

   if (!greyarrowup7.endsWith(`${gestureA}`)) {
      greyarrowup7 += `${stepf.length}`;
   }
      penaltygoalC += parseInt(`${chinasameV}`);
   if (5 == downloadq) {
      downloadq += 1;
   }
      setShowHomeLoading(false);

   for (let z = 0; z < 2; z++) {
      downloadq %= Math.max(1, 5);
   }
   for (let t = 0; t < 1; t++) {
      chinasameV += colorsV.size;
   }
   while (dplusl >= 1.74) {
       let smallF: Map<any, any> = new Map([[String.fromCharCode(99,117,114,114,95,48,95,49,53,0),true ], [String.fromCharCode(112,97,114,97,103,114,97,112,104,95,100,95,53,54,0),false ]]);
       let roomi = true;
         smallF.set(`${roomi}`, 2 * smallF.size);
      while ((3 + smallF.size) == 4 && smallF.size == 3) {
          let componentregistryn = String.fromCharCode(104,95,49,55,95,98,105,103,116,114,101,101,0);
          let c_managerA = 3;
          let flaga = String.fromCharCode(102,95,53,49,95,108,112,99,108,115,112,0);
          let agreementM = true;
         roomi = smallF.size < 67 && agreementM;
         componentregistryn = "2";
         c_managerA &= (String.fromCharCode(56,0) == flaga ? flaga.length : c_managerA);
         agreementM = c_managerA <= 25 && String.fromCharCode(56,0) == componentregistryn;
         break;
      }
      for (let z = 0; z < 1; z++) {
          let catagoryz = String.fromCharCode(102,105,120,117,112,95,104,95,56,55,0);
          let current1 = String.fromCharCode(103,95,56,54,95,104,97,114,101,0);
          let stringB: Array<any> = [String.fromCharCode(115,117,98,115,116,114,95,54,95,57,49,0), String.fromCharCode(101,95,53,57,95,112,111,105,115,115,111,110,0), String.fromCharCode(114,101,112,97,114,101,100,95,55,95,53,0)];
          let disconnectedq = String.fromCharCode(103,114,97,112,104,99,121,99,108,101,115,95,100,95,49,56,0);
          let kick4 = String.fromCharCode(100,105,102,102,97,98,108,101,95,116,95,56,49,0);
         smallF.set(`${stringB.length}`, stringB.length);
         catagoryz += `${current1.length}`;
         current1 += `${(String.fromCharCode(102,0) == disconnectedq ? current1.length : disconnectedq.length)}`;
         kick4 += "1";
      }
         roomi = smallF.size <= 23;
         smallF = new Map([[`${smallF.size}`, smallF.size / 1]]);
      while (2 >= (smallF.size - 3)) {
         roomi = smallF.get(`${roomi}`) == null;
         break;
      }
      libjsiT = `${2 - parseInt(`${episode1}`)}`;
      break;
   }

      return;
    } catch (error) {

   let iconeditq = 5217556 >= downloadq;
   do {
      downloadq += 2 | parseInt(`${gestureA}`);
      if (iconeditq) {
         break;
      }
   } while (iconeditq && (!Array.from(colorsV.keys()).includes(`${downloadq}`)));
      libjsiT = `${greyarrowup7.length}`;
   if (parseInt(`${dplusl}`) > colorsV.size) {
       let actionQ = String.fromCharCode(116,95,56,51,95,113,111,115,0);
       let middlebrightnessE: Map<any, any> = new Map([[String.fromCharCode(112,95,54,53,95,100,101,99,111,100,101,114,0),String.fromCharCode(108,95,55,53,95,98,97,114,99,111,100,101,0)], [String.fromCharCode(108,95,49,52,95,98,111,100,101,114,0),String.fromCharCode(113,95,53,53,95,115,101,108,101,99,116,105,118,101,108,121,0)]]);
      while (2 == (1 % (Math.max(10, actionQ.length))) || (actionQ.length % (Math.max(5, middlebrightnessE.size))) == 1) {
          let submitb = true;
          let d_unlockb: Map<any, any> = new Map([[String.fromCharCode(107,95,56,51,95,101,114,108,101,0),false ], [String.fromCharCode(105,95,51,51,95,111,114,105,103,105,110,97,108,0),false ]]);
          let floatingV = 3.0;
         actionQ += `${parseInt(`${floatingV}`) + 3}`;
         submitb = d_unlockb.size <= 55;
         d_unlockb.set(`${submitb}`, d_unlockb.size % (Math.max(3, 4)));
         floatingV += d_unlockb.size % 2;
         break;
      }
         actionQ += `${(String.fromCharCode(65,0) == actionQ ? actionQ.length : middlebrightnessE.size)}`;
       let graphicsz = 3.0;
       let launchg = 2.0;
         middlebrightnessE.set(actionQ, 1);
       let librrc7 = 0;
       let zhengpian2 = 5;
          let iconclosewhitebg9 = String.fromCharCode(104,95,55,50,95,100,105,115,112,108,97,121,105,110,103,0);
          let register_6k_ = String.fromCharCode(102,117,100,103,101,95,50,95,57,56,0);
         librrc7 -= zhengpian2;
         iconclosewhitebg9 = `${(String.fromCharCode(117,0) == register_6k_ ? iconclosewhitebg9.length : register_6k_.length)}`;
      dplusl /= Math.max(parseInt(`${gestureA}`) + parseInt(`${episode1}`), 1);
   }
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    const handleTabPress = async () => {
       let iconarrowrighth = String.fromCharCode(105,95,50,55,95,98,105,116,115,116,114,105,110,103,0);
    let iconbackwhiteP = String.fromCharCode(104,95,52,57,95,100,101,99,111,100,101,102,114,97,109,101,0);
    let sourceY = 1.0;
    let bingW: Array<any> = [605, 650];
    let z_playerk = 0.0;
    let gifgoalbgh: Map<any, any> = new Map([[String.fromCharCode(116,114,97,110,115,102,101,114,97,98,108,101,95,48,95,55,53,0),516], [String.fromCharCode(120,95,57,95,105,108,108,101,103,97,108,0),149]]);
    let minivod4 = 5.0;
    let penaltygoalU = 0;
    let gifgoalL = String.fromCharCode(104,95,51,49,95,112,97,103,101,111,117,116,0);
    let awayw: Array<any> = [744, 805];
    let alertN = String.fromCharCode(103,95,51,48,95,101,110,97,98,108,101,115,0);
    let qaagt = String.fromCharCode(116,114,97,99,107,105,110,103,95,114,95,56,57,0);
    let taiwanH = String.fromCharCode(106,95,55,48,95,99,97,108,99,117,108,97,116,101,0);
    let nativeex3 = String.fromCharCode(97,95,53,50,95,115,116,111,119,0);
    let eventl = 4;
    let vignette6 = String.fromCharCode(100,110,115,110,97,109,101,95,100,95,51,49,0);
   if (iconarrowrighth.includes(`${awayw.length}`)) {
      awayw = [2];
   }
      penaltygoalU ^= parseInt(`${sourceY}`) % (Math.max(iconbackwhiteP.length, 6));
      awayw = [gifgoalL.length];
   let reactY = awayw.length <= 7850389;
   do {
       let handlerl = 0;
       let reactnavigationZ = String.fromCharCode(115,101,116,116,105,109,101,111,117,116,95,101,95,50,57,0);
       let transferP = String.fromCharCode(103,95,53,52,95,112,97,115,115,98,0);
       let scrollviewA = String.fromCharCode(98,97,116,99,104,95,114,95,48,0);
         handlerl += (String.fromCharCode(77,0) == transferP ? handlerl : transferP.length);
         transferP += `${2 & transferP.length}`;
         handlerl *= transferP.length << (Math.min(Math.abs(2), 3));
      let gifte = scrollviewA.length >= 6663736;
      do {
         scrollviewA += `${reactnavigationZ.length}`;
         if (gifte) {
            break;
         }
      } while ((!transferP.startsWith(scrollviewA)) && gifte);
         transferP = `${transferP.length}`;
         transferP += "1";
          let base5 = 0.0;
          let libjsiq = String.fromCharCode(97,115,99,101,110,100,101,114,95,98,95,50,51,0);
          let configureC = String.fromCharCode(115,104,111,119,115,112,101,99,116,114,117,109,112,105,99,95,57,95,53,55,0);
         handlerl /= Math.max(2, 1);
         base5 -= (parseFloat(`${configureC == String.fromCharCode(49,0) ? libjsiq.length : configureC.length}`));
         libjsiq = `${libjsiq.length}`;
          let fast1: Array<any> = [716, 255, 559];
         handlerl -= 2 >> (Math.min(5, reactnavigationZ.length));
         fast1.push(fast1.length << (Math.min(Math.abs(3), 4)));
      for (let n = 0; n < 1; n++) {
          let iconsharez = 1.0;
          let crownC = 1.0;
         transferP = `${reactnavigationZ.length + 2}`;
         iconsharez *= 1;
         crownC -= parseFloat(`${2 % (Math.max(6, parseInt(`${crownC}`)))}`);
      }
      for (let a = 0; a < 2; a++) {
         scrollviewA = `${scrollviewA.length}`;
      }
         transferP = "3";
      let basketballx = reactnavigationZ == String.fromCharCode(121,107,114,112,119,115,51,116,0);
      do {
         reactnavigationZ += "1";
         if (basketballx) {
            break;
         }
      } while (basketballx && (2 < reactnavigationZ.length));
      awayw.push(handlerl << (Math.min(iconarrowrighth.length, 3)));
      if (reactY) {
         break;
      }
   } while (reactY && (awayw.length > 2));
      iconbackwhiteP += `${awayw.length ^ parseInt(`${sourceY}`)}`;

      if (isFocused && !isRefreshing) {

       let vietnama = 0;
       let dialogC = String.fromCharCode(115,112,108,105,110,101,95,55,95,54,48,0);
       let libcxxcomponentsA = 1;
         dialogC = `${(String.fromCharCode(89,0) == dialogC ? libcxxcomponentsA : dialogC.length)}`;
      for (let x = 0; x < 1; x++) {
         dialogC += `${vietnama | 2}`;
      }
      for (let u = 0; u < 1; u++) {
          let xvodS: Array<any> = [137, 56, 847];
          let iconwatchnow2: Array<any> = [813, 187, 261];
         dialogC += `${iconwatchnow2.length << (Math.min(2, Math.abs(vietnama)))}`;
         xvodS.push(1 >> (Math.min(5, xvodS.length)));
         iconwatchnow2.push(2);
      }
         dialogC = `${libcxxcomponentsA}`;
      if (!dialogC.includes(`${libcxxcomponentsA}`)) {
          let mbridgeM: Array<any> = [32, 41];
          let fastforwardE = String.fromCharCode(116,111,97,115,116,115,95,118,95,50,53,0);
         dialogC += `${1 << (Math.min(2, mbridgeM.length))}`;
         mbridgeM.push(fastforwardE.length % 3);
         fastforwardE = "1";
      }
      iconarrowrighth = `${gifgoalL.length - 3}`;
       let bridgeJ = 4.0;
       let basketballhometeamG = String.fromCharCode(112,97,115,115,105,118,101,95,105,95,51,48,0);
          let watchnowbgA = String.fromCharCode(105,95,50,95,111,112,115,0);
          let taiwanf = String.fromCharCode(99,95,56,95,111,98,106,110,105,100,0);
          let activityr = String.fromCharCode(105,112,111,108,95,114,95,51,56,0);
         bridgeJ /= Math.max(2 ^ activityr.length, 4);
         watchnowbgA += `${1 + taiwanf.length}`;
         taiwanf += `${watchnowbgA.length % (Math.max(taiwanf.length, 3))}`;
         activityr += `${(watchnowbgA == String.fromCharCode(97,0) ? taiwanf.length : watchnowbgA.length)}`;
       let long_tsp = true;
          let controlsw = 5.0;
          let applicationN = String.fromCharCode(99,95,57,95,115,116,114,111,107,101,115,0);
          let render5 = String.fromCharCode(107,95,50,48,95,99,111,110,102,105,114,109,97,116,105,111,110,115,0);
         basketballhometeamG += `${((long_tsp ? 4 : 5) + parseInt(`${controlsw}`))}`;
         controlsw -= 3;
         applicationN += `${(render5 == String.fromCharCode(70,0) ? render5.length : applicationN.length)}`;
         bridgeJ -= ((long_tsp ? 4 : 4));
         basketballhometeamG += `${(String.fromCharCode(54,0) == basketballhometeamG ? basketballhometeamG.length : (long_tsp ? 4 : 4))}`;
          let iconmoreu = String.fromCharCode(101,110,100,105,97,110,95,98,95,49,53,0);
          let m_playerC: Array<any> = [269, 706, 810];
          let libfbjniT = String.fromCharCode(115,99,97,108,97,114,112,114,111,100,117,99,116,95,57,95,48,0);
         long_tsp = !long_tsp;
         iconmoreu += `${2 >> (Math.min(3, libfbjniT.length))}`;
         m_playerC = [3];
         libfbjniT = `${iconmoreu.length << (Math.min(Math.abs(3), 4))}`;
      iconbackwhiteP = `${iconarrowrighth.length + 1}`;
      penaltygoalU ^= 3;
       let sportj = String.fromCharCode(99,111,110,102,105,103,117,114,101,95,107,95,55,48,0);
       let dependencyh = 1.0;
       let vignette1 = 3.0;
      if (2 == (sportj.length | 2) || 3.3 == (dependencyh + sportj.length)) {
         dependencyh -= parseInt(`${vignette1}`);
      }
          let buildH = String.fromCharCode(115,97,109,112,108,101,95,119,95,49,53,0);
          let streamingh = String.fromCharCode(121,95,56,48,95,111,98,106,101,99,116,0);
          let stylesx = false;
         vignette1 *= parseFloat(`${buildH.length}`);
         buildH = `${(String.fromCharCode(89,0) == streamingh ? streamingh.length : (stylesx ? 4 : 2))}`;
         stylesx = streamingh.endsWith(`${stylesx}`);
      let mbnativeadvancedm = 7669392.0 <= dependencyh;
      do {
         dependencyh -= parseInt(`${vignette1}`);
         if (mbnativeadvancedm) {
            break;
         }
      } while (((dependencyh * vignette1) < 5.31) && mbnativeadvancedm);
      for (let n = 0; n < 3; n++) {
         dependencyh += parseInt(`${vignette1}`);
      }
         sportj = `${parseInt(`${dependencyh}`) ^ 3}`;
          let whiteR = 3.0;
          let downL = false;
          let yellowvideoliveR = false;
         vignette1 += (parseFloat(`${sportj.length + (yellowvideoliveR ? 1 : 5)}`));
         whiteR += parseFloat(`${3 >> (Math.min(Math.abs(parseInt(`${whiteR}`)), 1))}`);
         downL = 47.10 < whiteR;
         yellowvideoliveR = 46.24 > whiteR;
         vignette1 -= parseFloat(`${2 | parseInt(`${vignette1}`)}`);
       let libswresamplet: Map<any, any> = new Map([[String.fromCharCode(103,95,51,55,95,116,97,103,97,118,114,0),String.fromCharCode(101,115,99,97,112,101,95,51,95,54,52,0)], [String.fromCharCode(98,108,117,114,108,101,115,115,95,54,95,51,48,0),String.fromCharCode(102,97,105,108,105,110,103,95,118,95,51,55,0)]]);
       let d_images: Map<any, any> = new Map([[String.fromCharCode(119,97,118,101,115,121,110,116,104,95,48,95,50,50,0),String.fromCharCode(122,95,51,49,95,112,103,115,122,0)], [String.fromCharCode(119,95,52,54,95,108,117,109,97,107,101,121,0),String.fromCharCode(115,119,97,112,121,118,98,117,102,102,101,114,95,49,95,49,57,0)]]);
      while ((2.36 - vignette1) >= 3.67) {
          let logouserL = 1.0;
          let sportsn = 1;
          let analyticsM = String.fromCharCode(113,95,54,53,95,99,111,109,112,108,101,120,105,116,121,0);
          let animationsR = 1.0;
          let backgrounde: Map<any, any> = new Map([[String.fromCharCode(97,108,112,104,97,110,117,109,101,114,105,99,95,100,95,51,0),824], [String.fromCharCode(103,95,53,55,95,114,101,109,111,118,101,103,114,97,105,110,0),684], [String.fromCharCode(111,95,54,48,95,112,114,101,115,117,109,101,0),846]]);
         vignette1 /= Math.max(2, parseFloat(`${sportj.length}`));
         logouserL *= backgrounde.size * analyticsM.length;
         sportsn ^= backgrounde.size ^ 2;
         analyticsM = `${1 % (Math.max(parseInt(`${logouserL}`), 8))}`;
         animationsR *= parseFloat(`${analyticsM.length}`);
         break;
      }
      iconarrowrighth += `${parseInt(`${vignette1}`)}`;
   while (4 == (gifgoalbgh.size << (Math.min(Math.abs(5), 4)))) {
      gifgoalbgh.set(gifgoalL, parseInt(`${sourceY}`));
      break;
   }
        setIsRefreshing((prevIsRefreshing) => {

      iconbackwhiteP += `${gifgoalbgh.size | gifgoalL.length}`;
   let telegramm = penaltygoalU <= 5781766;
   do {
      penaltygoalU &= (alertN == String.fromCharCode(68,0) ? alertN.length : bingW.length);
      if (telegramm) {
         break;
      }
   } while (telegramm && (5 > (alertN.length - 5)));
   if (iconarrowrighth.length == alertN.length) {
      alertN += `${parseInt(`${z_playerk}`)}`;
   }
   let eventsplashF = 7041269 >= awayw.length;
   do {
      awayw.push(1 / (Math.max(10, parseInt(`${sourceY}`))));
      if (eventsplashF) {
         break;
      }
   } while ((4 < (gifgoalL.length | awayw.length) || (gifgoalL.length | awayw.length) < 4) && eventsplashF);
      iconbackwhiteP += `${parseInt(`${sourceY}`) % 1}`;
          if (prevIsRefreshing) {

       let reviewW = String.fromCharCode(116,95,52,51,95,115,99,97,116,116,101,114,0);
       let chat5 = 3;
       let pingd = 4.0;
          let confirmationd = String.fromCharCode(118,101,114,116,105,99,97,108,95,119,95,57,54,0);
         pingd /= Math.max(parseFloat(`${2 + reviewW.length}`), 4);
         confirmationd = `${confirmationd.length}`;
      if ((chat5 * 4) == 3 || 5 == (4 * reviewW.length)) {
          let gifgoalW = 5.0;
          let backiconA = true;
          let shootyesgoalS: Array<any> = [723, 976];
         reviewW = `${parseInt(`${pingd}`) ^ 2}`;
         gifgoalW += parseFloat(`${1 + parseInt(`${gifgoalW}`)}`);
         backiconA = 72.15 < gifgoalW && !backiconA;
         shootyesgoalS = [2 % (Math.max(parseInt(`${gifgoalW}`), 8))];
      }
       let upload9 = String.fromCharCode(113,95,51,57,0);
       let materialE = String.fromCharCode(117,112,115,97,109,112,108,101,95,104,95,51,51,0);
       let statisticsinactivee = 5.0;
       let reactC = 1.0;
         statisticsinactivee += 2;
          let stationsi = String.fromCharCode(120,95,50,56,95,97,100,100,111,112,0);
         chat5 &= 1;
         stationsi = `${stationsi.length}`;
          let yellowredcard1: Map<any, any> = new Map([[String.fromCharCode(106,95,57,50,95,106,119,116,0),704], [String.fromCharCode(102,95,53,52,95,99,105,110,101,0),674]]);
         pingd += parseFloat(`${yellowredcard1.size}`);
      let reminderm = 8056809.0 >= reactC;
      do {
         reactC -= chat5;
         if (reminderm) {
            break;
         }
      } while ((upload9.length < 3) && reminderm);
         reviewW += `${materialE.length & reviewW.length}`;
      gifgoalL = `${awayw.length}`;
      iconarrowrighth += `${2 >> (Math.min(4, Math.abs(parseInt(`${sourceY}`))))}`;
       let roundl = String.fromCharCode(115,110,97,109,101,95,112,95,50,0);
      while (!roundl.includes(roundl)) {
         roundl += `${roundl.length}`;
         break;
      }
      for (let k = 0; k < 2; k++) {
         roundl += `${roundl.length}`;
      }
          let runtimescheduler_ = 4.0;
          let greytickA = String.fromCharCode(117,95,53,53,95,114,101,119,114,105,116,101,0);
         roundl += `${(String.fromCharCode(50,0) == greytickA ? greytickA.length : parseInt(`${runtimescheduler_}`))}`;
      penaltygoalU <<= Math.min(Math.abs(parseInt(`${z_playerk}`) >> (Math.min(bingW.length, 3))), 2);
      z_playerk += alertN.length << (Math.min(Math.abs(3), 5));
   for (let g = 0; g < 3; g++) {
      awayw.push(3 << (Math.min(3, gifgoalL.length)));
   }
            return prevIsRefreshing; 
          } else {

   for (let c = 0; c < 3; c++) {
       let screen0 = true;
       let googleQ = 4.0;
         googleQ *= (parseFloat(`${parseInt(`${googleQ}`) + (screen0 ? 2 : 4)}`));
         googleQ -= parseFloat(`${parseInt(`${googleQ}`) - 2}`);
          let libturbomodulejsijni2 = String.fromCharCode(98,101,115,116,95,56,95,57,51,0);
         googleQ *= (parseFloat(`${(screen0 ? 2 : 3) - parseInt(`${googleQ}`)}`));
         libturbomodulejsijni2 += `${libturbomodulejsijni2.length}`;
         screen0 = !screen0;
       let phoneshareS: Map<any, any> = new Map([[String.fromCharCode(97,95,52,54,95,105,110,116,101,114,115,101,99,116,105,110,103,0),953], [String.fromCharCode(116,95,52,48,95,115,105,122,101,0),740], [String.fromCharCode(111,117,98,108,101,95,121,95,50,52,0),674]]);
       let libruntimeexecutorC: Map<any, any> = new Map([[String.fromCharCode(105,110,110,101,114,95,118,95,54,50,0),231], [String.fromCharCode(112,114,101,100,105,99,97,116,101,95,55,95,49,49,0),498], [String.fromCharCode(114,101,99,111,118,101,114,95,106,95,53,54,0),565]]);
         phoneshareS = new Map([[`${phoneshareS.size}`, 1 & parseInt(`${googleQ}`)]]);
      gifgoalL = `${parseInt(`${googleQ}`) >> (Math.min(3, Math.abs(3)))}`;
   }
   let foregroundR = sourceY >= 6151555.0;
   do {
       let adult1 = String.fromCharCode(115,101,113,118,105,100,101,111,95,108,95,52,51,0);
         adult1 = `${adult1.length % 1}`;
         adult1 = `${adult1.length * adult1.length}`;
         adult1 = `${adult1.length ^ adult1.length}`;
      sourceY *= 2 >> (Math.min(4, bingW.length));
      if (foregroundR) {
         break;
      }
   } while ((5.83 >= (minivod4 / 5)) && foregroundR);
      alertN = `${awayw.length}`;
      minivod4 += parseFloat(`${2}`);
      iconbackwhiteP += "2";
            return true; 
          }
        });

      iconarrowrighth += `${penaltygoalU / (Math.max(iconarrowrighth.length, 10))}`;
       let dragclosej = String.fromCharCode(114,101,116,97,105,110,115,95,119,95,52,53,0);
       let libffmpegkitf = String.fromCharCode(121,95,57,55,95,101,113,117,105,108,105,98,114,105,117,109,0);
         dragclosej = `${libffmpegkitf.length}`;
      while (dragclosej.length < 1) {
         dragclosej += `${dragclosej.length / (Math.max(3, 5))}`;
         break;
      }
          let transferB = false;
          let iconplaye = String.fromCharCode(103,95,49,48,95,114,100,109,117,108,116,0);
         dragclosej += `${iconplaye.length << (Math.min(libffmpegkitf.length, 4))}`;
         transferB = !transferB;
         iconplaye += `${((transferB ? 4 : 3) * (transferB ? 5 : 3))}`;
      if (dragclosej != String.fromCharCode(110,0)) {
         libffmpegkitf = `${2 | libffmpegkitf.length}`;
      }
         dragclosej += `${dragclosej.length / 3}`;
         dragclosej = "2";
      sourceY += awayw.length | 3;
      minivod4 *= parseFloat(`${parseInt(`${z_playerk}`)}`);
       let regengE = String.fromCharCode(109,105,120,105,110,103,95,101,95,52,0);
       let infoX = String.fromCharCode(101,95,50,56,95,118,111,116,101,114,115,0);
       let matchesY = String.fromCharCode(117,116,109,111,115,116,95,56,95,50,57,0);
      for (let a = 0; a < 2; a++) {
          let roundo: Map<any, any> = new Map([[String.fromCharCode(109,95,57,51,95,112,114,101,118,101,110,116,115,0),String.fromCharCode(104,95,51,50,95,115,112,108,105,110,101,0)], [String.fromCharCode(114,95,54,57,95,98,97,99,107,105,110,103,0),String.fromCharCode(97,99,99,117,114,97,99,121,95,120,95,50,52,0)], [String.fromCharCode(104,95,56,51,95,115,101,97,114,99,104,0),String.fromCharCode(115,116,114,116,121,112,101,95,98,95,49,49,0)]]);
         matchesY += `${infoX.length ^ 3}`;
         roundo.set(`${roundo.size}`, roundo.size);
      }
      for (let w = 0; w < 3; w++) {
         infoX = `${regengE.length}`;
      }
         infoX = `${(String.fromCharCode(106,0) == matchesY ? matchesY.length : infoX.length)}`;
         regengE = `${regengE.length}`;
      while (infoX != String.fromCharCode(101,0)) {
          let previewx = 1.0;
          let sourcen = true;
          let libcrashsdk2 = 1.0;
          let mapbufferv = String.fromCharCode(112,97,116,104,95,114,95,49,53,0);
          let sliderp = String.fromCharCode(119,97,118,101,108,101,116,95,97,95,50,52,0);
         matchesY += `${(regengE == String.fromCharCode(71,0) ? regengE.length : matchesY.length)}`;
         previewx -= parseFloat(`${sliderp.length}`);
         sourcen = mapbufferv.length < sliderp.length;
         libcrashsdk2 *= 1 * mapbufferv.length;
         break;
      }
          let detailm = true;
         infoX = `${2 >> (Math.min(1, infoX.length))}`;
         detailm = !detailm;
         matchesY = "3";
         infoX += `${(infoX == String.fromCharCode(56,0) ? infoX.length : regengE.length)}`;
      let combineT = infoX.length <= 7344564;
      do {
         infoX = `${(regengE == String.fromCharCode(119,0) ? infoX.length : regengE.length)}`;
         if (combineT) {
            break;
         }
      } while ((!infoX.endsWith(`${matchesY.length}`)) && combineT);
      gifgoalbgh = new Map([[`${minivod4}`, parseInt(`${minivod4}`)]]);
       let mbbidk: Array<any> = [390, 179];
       let twitterh = true;
       let iconschedulem = String.fromCharCode(102,95,54,95,98,117,102,0);
      let malaysiaY = iconschedulem == String.fromCharCode(95,51,111,100,52,54,0);
      do {
         iconschedulem += `${mbbidk.length}`;
         if (malaysiaY) {
            break;
         }
      } while (malaysiaY && (twitterh && iconschedulem.length < 3));
      for (let y = 0; y < 1; y++) {
         twitterh = (mbbidk.length << (Math.min(iconschedulem.length, 3))) <= 29;
      }
      if (mbbidk.length <= 1) {
          let logousera: Map<any, any> = new Map([[String.fromCharCode(102,95,52,56,0),String.fromCharCode(122,95,51,51,95,111,99,115,112,0)], [String.fromCharCode(99,111,110,115,111,108,101,95,51,95,54,57,0),String.fromCharCode(111,95,49,55,95,109,117,108,116,105,99,97,115,116,0)]]);
         mbbidk.push(((twitterh ? 5 : 2) << (Math.min(mbbidk.length, 3))));
         logousera = new Map([[`${logousera.size}`, logousera.size & logousera.size]]);
      }
         twitterh = (65 > ((!twitterh ? 65 : iconschedulem.length) >> (Math.min(iconschedulem.length, 1))));
      while (!twitterh) {
         twitterh = iconschedulem == String.fromCharCode(102,0);
         break;
      }
      if ((mbbidk.length * 5) == 3) {
         mbbidk.push((mbbidk.length + (twitterh ? 1 : 3)));
      }
      if (!twitterh) {
         twitterh = iconschedulem.length > 27;
      }
      let modelsN = iconschedulem.length <= 7347853;
      do {
          let libfbA = false;
          let playlist6: Map<any, any> = new Map([[String.fromCharCode(100,111,99,115,105,122,101,95,115,95,52,56,0),String.fromCharCode(115,95,51,54,95,115,105,109,117,108,99,97,115,116,0)], [String.fromCharCode(114,101,112,101,97,116,95,118,95,55,57,0),String.fromCharCode(100,117,97,108,105,110,112,117,116,95,100,95,50,55,0)]]);
          let ping2 = 0.0;
          let iconpipexpand7 = String.fromCharCode(97,117,116,111,100,101,108,101,116,101,95,116,95,49,54,0);
          let iconrefreshI = 1;
         iconschedulem += `${parseInt(`${ping2}`)}`;
         libfbA = iconpipexpand7 == String.fromCharCode(68,0) && 21 >= iconrefreshI;
         playlist6.set(`${libfbA}`, (1 - (libfbA ? 5 : 2)));
         ping2 -= iconpipexpand7.length;
         iconrefreshI -= playlist6.size - 3;
         if (modelsN) {
            break;
         }
      } while (modelsN && (twitterh));
      while (!twitterh && (1 * mbbidk.length) > 2) {
         mbbidk.push(mbbidk.length | 2);
         break;
      }
      iconbackwhiteP += `${mbbidk.length}`;
        await handleRefresh(navId, true);

      gifgoalbgh = new Map([[`${gifgoalbgh.size}`, 2]]);
   let libturbomodulejsijniB = 5542605 >= gifgoalbgh.size;
   do {
      gifgoalbgh.set(`${penaltygoalU}`, penaltygoalU >> (Math.min(4, Math.abs(3))));
      if (libturbomodulejsijniB) {
         break;
      }
   } while (libturbomodulejsijniB && (iconarrowrighth.endsWith(`${gifgoalbgh.size}`)));
      bingW = [parseInt(`${minivod4}`)];
   let sentryD = 7500642 >= awayw.length;
   do {
       let weiboJ = 4.0;
       let thailandD = 5;
       let overlayb = false;
          let time_coj = 0.0;
         overlayb = 93.11 <= weiboJ && time_coj <= 93.11;
      let videor = weiboJ >= 6384441.0;
      do {
         weiboJ += parseFloat(`${thailandD & 2}`);
         if (videor) {
            break;
         }
      } while (videor && ((thailandD << (Math.min(Math.abs(2), 4))) < 5));
      let shrinko = overlayb ? !overlayb : overlayb;
      do {
         overlayb = thailandD < 28;
         if (shrinko) {
            break;
         }
      } while ((!overlayb) && shrinko);
          let scheduler_: Map<any, any> = new Map([[String.fromCharCode(118,105,98,114,97,110,99,101,95,121,95,50,50,0),String.fromCharCode(121,95,52,51,95,112,101,110,100,105,110,103,115,0)], [String.fromCharCode(99,112,105,97,95,103,95,52,56,0),String.fromCharCode(121,95,54,49,95,108,111,115,116,0)]]);
          let condensedI = String.fromCharCode(115,116,97,114,116,95,114,95,55,0);
          let flipperk = String.fromCharCode(107,105,116,116,121,95,55,95,57,48,0);
         overlayb = thailandD <= 80;
         scheduler_ = new Map([[`${scheduler_.size}`, scheduler_.size]]);
         condensedI += `${scheduler_.size & flipperk.length}`;
         flipperk = `${condensedI.length}`;
      for (let b = 0; b < 1; b++) {
         thailandD += 2;
      }
      if (weiboJ > 2.26) {
         overlayb = !overlayb;
      }
          let fillb = String.fromCharCode(116,95,56,54,95,109,112,111,110,0);
          let umeng6 = 0;
         thailandD ^= 2 & parseInt(`${weiboJ}`);
         fillb += `${(String.fromCharCode(106,0) == fillb ? fillb.length : umeng6)}`;
         umeng6 >>= Math.min(Math.abs(umeng6 / 3), 5);
      while ((thailandD - weiboJ) <= 4.69) {
          let baidun: Array<any> = [265, 182, 537];
          let anytimef = String.fromCharCode(120,95,54,53,95,105,110,116,114,97,120,104,117,102,0);
          let mbridgew = 4.0;
          let tail1 = 2.0;
          let bufferd = String.fromCharCode(108,95,49,49,95,119,97,108,108,0);
         weiboJ *= (parseFloat(`${String.fromCharCode(117,0) == anytimef ? anytimef.length : parseInt(`${tail1}`)}`));
         baidun = [baidun.length];
         mbridgew *= parseFloat(`${2 / (Math.max(3, parseInt(`${mbridgew}`)))}`);
         tail1 /= Math.max(4, parseFloat(`${parseInt(`${mbridgew}`) | 3}`));
         bufferd = `${(String.fromCharCode(70,0) == bufferd ? bufferd.length : parseInt(`${mbridgew}`))}`;
         break;
      }
       let overL: Map<any, any> = new Map([[String.fromCharCode(119,95,56,95,106,105,116,116,101,114,0),true ], [String.fromCharCode(110,95,55,48,95,117,110,99,108,105,112,112,101,100,0),false ], [String.fromCharCode(103,95,51,48,95,100,101,99,105,115,105,111,110,0),false ]]);
      awayw.push(qaagt.length);
      if (sentryD) {
         break;
      }
   } while ((3 > (3 + taiwanH.length) || 5 > (3 + awayw.length)) && sentryD);
       let kick_ = false;
      if (kick_) {
          let gemfileG: Map<any, any> = new Map([[String.fromCharCode(109,98,99,109,112,95,103,95,50,54,0),41], [String.fromCharCode(110,100,101,102,95,51,95,49,57,0),650], [String.fromCharCode(121,117,121,118,116,111,121,117,118,95,56,95,51,0),723]]);
          let changeO = 1.0;
          let libavformatg = 4.0;
         kick_ = (gemfileG.size - parseInt(`${changeO}`)) == 37;
         gemfileG = new Map([[`${libavformatg}`, parseInt(`${libavformatg}`)]]);
         changeO *= parseFloat(`${parseInt(`${libavformatg}`) - parseInt(`${libavformatg}`)}`);
      }
      for (let h = 0; h < 2; h++) {
          let zhuboP = String.fromCharCode(102,105,108,108,101,100,95,104,95,50,55,0);
          let neonz = 0.0;
          let handlerh = 5.0;
          let megaphoneS = true;
          let codeu = String.fromCharCode(120,102,101,114,95,110,95,49,0);
         kick_ = handlerh >= 77.88;
         zhuboP = `${zhuboP.length}`;
         neonz -= (parseFloat(`${parseInt(`${neonz}`) & (megaphoneS ? 2 : 5)}`));
         handlerh /= Math.max(1, 1);
         megaphoneS = codeu == zhuboP;
         codeu += `${(String.fromCharCode(106,0) == zhuboP ? (megaphoneS ? 2 : 5) : zhuboP.length)}`;
      }
          let cancelB = 4.0;
          let materialq = String.fromCharCode(121,95,51,57,95,117,110,100,101,114,102,108,111,119,0);
          let album7 = 2.0;
         kick_ = (album7 * cancelB) == 11.100;
         cancelB /= Math.max(3, materialq.length << (Math.min(Math.abs(3), 5)));
         materialq = `${materialq.length / (Math.max(materialq.length, 5))}`;
      alertN = `${qaagt.length}`;
        setIsRefreshing(false);
      }
    };
    
    const unsubscribe = navigation.addListener("tabPress", handleTabPress);
    
    return () => unsubscribe();
  }, [isFocused, navId, handleRefresh]);

  const handleRejectEighteenPlus = useCallback(() => {
       let dragD = 5.0;
    let nalyticsX = 5.0;
    let episodesW = 1.0;
    let review5 = String.fromCharCode(113,95,49,52,95,112,114,105,118,0);
    let moviesE = String.fromCharCode(115,116,114,101,114,114,111,114,95,102,95,55,52,0);
    let confirmation4 = 5.0;
    let a_players = String.fromCharCode(120,95,53,53,95,99,111,110,118,101,114,115,97,116,105,111,110,0);
    let nativeexK = String.fromCharCode(101,114,97,115,117,114,101,95,109,95,57,49,0);
    let linkI = false;
    let langkeyv = 4;
    let frame_6K = String.fromCharCode(105,95,52,54,95,115,117,99,99,101,101,100,0);
    let singleE = String.fromCharCode(99,95,50,57,95,100,101,114,105,118,97,116,105,111,110,0);
   let videovark = 9394021 <= moviesE.length;
   do {
      moviesE += `${parseInt(`${confirmation4}`) / (Math.max(a_players.length, 5))}`;
      if (videovark) {
         break;
      }
   } while ((1 == review5.length) && videovark);
   while (1.86 < (dragD * 5.22)) {
      dragD *= parseFloat(`${1}`);
      break;
   }
      nativeexK += `${nativeexK.length / (Math.max(a_players.length, 4))}`;
       let sortN = 0.0;
       let register_fbS = String.fromCharCode(110,95,53,53,95,104,105,103,104,108,105,103,104,116,105,110,103,0);
      for (let o = 0; o < 1; o++) {
          let leakchecker6 = 4;
         register_fbS += "3 | leakchecker6";
      }
          let unfillj = 3.0;
         register_fbS += `${parseInt(`${unfillj}`)}`;
       let notificationfillemptyO = String.fromCharCode(107,95,57,48,95,105,116,101,114,97,116,105,111,110,115,0);
       let statisticsf = String.fromCharCode(103,114,97,100,105,101,110,116,95,107,95,52,55,0);
          let libavfilterU = String.fromCharCode(115,105,110,101,115,95,110,95,54,57,0);
          let teamt = String.fromCharCode(116,114,97,110,115,102,111,114,109,97,98,108,101,95,122,95,55,53,0);
         notificationfillemptyO = `${libavfilterU.length}`;
         libavfilterU = `${teamt.length << (Math.min(teamt.length, 4))}`;
       let detailsL = true;
       let weibon = true;
          let modalR: Map<any, any> = new Map([[String.fromCharCode(105,95,53,50,95,114,105,115,101,0),false ], [String.fromCharCode(98,95,48,95,116,101,109,112,111,114,97,108,0),true ], [String.fromCharCode(106,95,51,55,95,118,111,114,98,105,115,100,115,112,0),false ]]);
         notificationfillemptyO = `${(modalR.size << (Math.min(5, Math.abs((weibon ? 4 : 5)))))}`;
      dragD *= parseFloat(`${moviesE.length - parseInt(`${confirmation4}`)}`);
      sortN /= Math.max(3, parseInt(`${sortN}`));
   while (4.87 > (episodesW * confirmation4)) {
      episodesW -= 1;
      break;
   }

    const found = navOptions?.find(
      (e) => e.name === screenState.lastSeenNavName
    );

      episodesW += 2;
   while (linkI) {
      linkI = 90 >= review5.length;
      break;
   }
       let episodel = 0;
       let security6 = String.fromCharCode(108,95,51,50,95,110,105,100,108,110,0);
          let gpayq = 2.0;
          let package_gt = String.fromCharCode(108,95,57,51,95,116,101,115,116,114,97,110,115,0);
         security6 += "1";
         gpayq /= Math.max(4, parseFloat(`${parseInt(`${gpayq}`) % (Math.max(7, package_gt.length))}`));
         package_gt += `${package_gt.length}`;
         security6 += `${security6.length}`;
          let selectedk = String.fromCharCode(100,95,56,55,95,112,108,97,110,97,114,116,111,117,121,118,121,0);
          let less4: Array<any> = [329, 234];
          let hoverU = String.fromCharCode(99,95,55,53,95,112,111,105,115,111,110,0);
         episodel ^= hoverU.length;
         selectedk += `${(selectedk == String.fromCharCode(90,0) ? selectedk.length : less4.length)}`;
         less4 = [2];
         hoverU = "1";
          let dependencyf = 4.0;
          let sentryY = 0;
          let hookm = 5.0;
         security6 += `${sentryY}`;
         dependencyf /= Math.max(parseFloat(`${2 - parseInt(`${hookm}`)}`), 5);
         sentryY |= parseInt(`${dependencyf}`) % (Math.max(7, parseInt(`${hookm}`)));
         security6 += `${episodel}`;
       let indicatorV: Map<any, any> = new Map([[String.fromCharCode(117,95,54,56,95,115,101,116,100,97,114,0),986], [String.fromCharCode(115,110,111,119,100,97,116,97,95,112,95,51,50,0),129]]);
      review5 += `${(parseInt(`${nalyticsX}`) | (linkI ? 1 : 3))}`;
   while ((langkeyv + parseInt(`${nalyticsX}`)) == 1 || 5.65 == (nalyticsX + 5.90)) {
      nalyticsX *= (nativeexK == String.fromCharCode(74,0) ? nativeexK.length : parseInt(`${confirmation4}`));
      break;
   }
   while (1.76 > (confirmation4 + episodesW) && (episodesW + confirmation4) > 1.76) {
      confirmation4 += parseFloat(`${parseInt(`${nalyticsX}`) & 3}`);
      break;
   }

    if (found) {

      nativeexK = "1";
       let entryM: Map<any, any> = new Map([[String.fromCharCode(115,104,105,102,116,105,110,103,115,95,122,95,51,55,0),String.fromCharCode(115,95,50,52,95,107,102,119,114,105,116,101,0)], [String.fromCharCode(105,95,56,57,95,109,105,100,108,0),String.fromCharCode(105,110,118,105,115,105,98,108,101,95,107,95,50,52,0)], [String.fromCharCode(113,95,53,57,95,100,101,113,117,97,110,116,105,122,101,0),String.fromCharCode(104,95,51,95,117,116,120,111,115,0)]]);
       let config9: Map<any, any> = new Map([[String.fromCharCode(109,95,57,50,95,98,117,116,116,101,114,119,111,114,116,104,0),716], [String.fromCharCode(114,101,113,117,101,115,116,95,97,95,51,57,0),389], [String.fromCharCode(111,95,53,51,95,114,101,115,0),8]]);
       let whiteanimationlive6 = 5.0;
         whiteanimationlive6 -= parseFloat(`${parseInt(`${whiteanimationlive6}`) << (Math.min(Math.abs(3), 3))}`);
          let commentc = String.fromCharCode(111,95,52,49,95,105,110,116,114,97,120,109,98,121,0);
          let libpangleflippedX = 5.0;
         config9 = new Map([[`${libpangleflippedX}`, 3]]);
         commentc = `${commentc.length % (Math.max(commentc.length, 4))}`;
         libpangleflippedX *= 2 >> (Math.min(3, commentc.length));
       let become7 = 1.0;
      let video9 = config9.size <= 8710312;
      do {
         config9 = new Map([[`${config9.size}`, parseInt(`${whiteanimationlive6}`) << (Math.min(Math.abs(2), 4))]]);
         if (video9) {
            break;
         }
      } while (video9 && (3.58 == (become7 - 4.0) && 3.36 == (4.0 - become7)));
         whiteanimationlive6 *= parseFloat(`${2 >> (Math.min(3, Math.abs(parseInt(`${whiteanimationlive6}`))))}`);
      while (3.4 >= whiteanimationlive6) {
         whiteanimationlive6 -= parseFloat(`${2 + entryM.size}`);
         break;
      }
      if ((2 << (Math.min(2, Math.abs(entryM.size)))) > 1 || (4.39 * whiteanimationlive6) > 3.11) {
         whiteanimationlive6 *= parseFloat(`${parseInt(`${whiteanimationlive6}`)}`);
      }
         become7 += 3;
         entryM.set(`${whiteanimationlive6}`, 1 ^ parseInt(`${become7}`));
      nativeexK += `${parseInt(`${confirmation4}`) & review5.length}`;
      moviesE += `${3 << (Math.min(Math.abs(parseInt(`${confirmation4}`)), 2))}`;
      confirmation4 += (parseFloat(`${3 << (Math.min(3, Math.abs((linkI ? 4 : 5))))}`));
      review5 = `${langkeyv % 3}`;
      navigation.navigate("首页", {
        screen: screenState.lastSeenNavName,
      });

   let kickX = moviesE.length <= 9888593;
   do {
      moviesE += `${(String.fromCharCode(77,0) == nativeexK ? nativeexK.length : parseInt(`${episodesW}`))}`;
      if (kickX) {
         break;
      }
   } while ((moviesE.endsWith(`${linkI}`)) && kickX);
   for (let t = 0; t < 2; t++) {
       let incidentY: Map<any, any> = new Map([[String.fromCharCode(117,95,57,54,95,102,115,112,112,0),850], [String.fromCharCode(116,95,54,50,95,99,97,118,115,100,115,112,0),567]]);
       let tailN = true;
       let tickedH: Array<any> = [String.fromCharCode(110,95,53,57,95,99,108,101,97,114,105,110,103,0), String.fromCharCode(112,99,97,112,95,101,95,49,0), String.fromCharCode(120,95,51,50,95,115,117,112,101,114,0)];
      while (!tailN) {
         tailN = incidentY.size <= 68;
         break;
      }
         incidentY = new Map([[`${incidentY.size}`, 2]]);
      if (!tailN) {
         tickedH.push(incidentY.size);
      }
         incidentY = new Map([[`${tickedH.length}`, 3 - tickedH.length]]);
          let iconsettingM = String.fromCharCode(108,95,49,56,95,117,110,97,118,97,105,108,97,98,101,0);
         tailN = incidentY.size > 98 || tailN;
         iconsettingM = `${iconsettingM.length << (Math.min(iconsettingM.length, 5))}`;
         incidentY.set(`${tailN}`, 2 * incidentY.size);
       let neono = false;
       let eyeopend = false;
         eyeopend = ((incidentY.size >> (Math.min(4, Math.abs((neono ? 54 : incidentY.size))))) >= 54);
      let libswscaleQ = eyeopend ? !eyeopend : eyeopend;
      do {
         eyeopend = !neono && tickedH.length >= 83;
         if (libswscaleQ) {
            break;
         }
      } while (libswscaleQ && (!neono && eyeopend));
      confirmation4 += (parseFloat(`${(tailN ? 1 : 4)}`));
   }
   let iconeditE = episodesW <= 7561031.0;
   do {
       let sendp: Map<any, any> = new Map([[String.fromCharCode(115,116,111,114,101,102,114,97,109,101,95,115,95,51,48,0),String.fromCharCode(112,95,53,51,95,109,109,120,101,120,116,0)], [String.fromCharCode(115,97,116,117,114,97,116,105,111,110,95,97,95,55,55,0),String.fromCharCode(99,111,110,116,95,105,95,55,55,0)], [String.fromCharCode(113,95,56,95,116,98,117,102,0),String.fromCharCode(99,111,110,102,108,105,99,116,95,122,95,50,48,0)]]);
       let controls = true;
       let downarrowm: Map<any, any> = new Map([[String.fromCharCode(116,95,49,55,95,116,102,114,102,0),String.fromCharCode(108,97,116,109,95,56,95,53,49,0)], [String.fromCharCode(98,95,54,53,95,111,112,101,114,97,116,105,111,110,115,0),String.fromCharCode(108,105,98,99,111,100,101,99,95,52,95,55,52,0)], [String.fromCharCode(114,101,103,105,115,116,101,114,102,100,115,95,51,95,51,57,0),String.fromCharCode(115,121,110,99,104,114,111,110,105,122,97,98,108,101,95,110,95,56,0)]]);
       let reactnativeultimatelistviewT = String.fromCharCode(114,95,53,54,95,112,115,115,104,0);
         downarrowm = new Map([[`${sendp.size}`, reactnativeultimatelistviewT.length % 2]]);
         controls = String.fromCharCode(84,0) == reactnativeultimatelistviewT;
          let package_vu = 2.0;
         downarrowm = new Map([[`${downarrowm.size}`, downarrowm.size]]);
         package_vu /= Math.max(2, parseFloat(`${1 << (Math.min(Math.abs(parseInt(`${package_vu}`)), 3))}`));
         reactnativeultimatelistviewT = `${(2 + (controls ? 1 : 3))}`;
         controls = ((reactnativeultimatelistviewT.length | (controls ? reactnativeultimatelistviewT.length : 94)) < 94);
      for (let h = 0; h < 1; h++) {
          let livenodatabgimge = 0.0;
          let iconsettingK = String.fromCharCode(115,119,101,101,112,95,105,95,50,52,0);
          let buffer6 = String.fromCharCode(104,95,51,49,95,105,110,116,114,97,102,114,97,109,101,0);
          let sigmobH = String.fromCharCode(120,95,53,54,95,114,101,97,100,115,0);
          let unselectedW = String.fromCharCode(108,111,119,101,115,116,95,116,95,57,53,0);
         controls = 10.31 > livenodatabgimge;
         livenodatabgimge -= unselectedW.length ^ 1;
         iconsettingK = `${buffer6.length - 1}`;
         buffer6 += `${1 >> (Math.min(2, sigmobH.length))}`;
         sigmobH = `${3 % (Math.max(7, buffer6.length))}`;
         unselectedW = `${(unselectedW == String.fromCharCode(122,0) ? unselectedW.length : sigmobH.length)}`;
      }
      for (let q = 0; q < 3; q++) {
          let libglogq = true;
         reactnativeultimatelistviewT = `${(sendp.size - (controls ? 2 : 2))}`;
         libglogq = (libglogq ? !libglogq : !libglogq);
      }
       let backward9 = String.fromCharCode(119,95,54,52,95,112,97,116,116,101,114,110,0);
       let plashM = String.fromCharCode(99,111,109,97,110,100,95,57,95,51,55,0);
      if (!controls || 1 > (1 / (Math.max(8, sendp.size)))) {
         sendp = new Map([[backward9, ((controls ? 4 : 5) | backward9.length)]]);
      }
         downarrowm.set(reactnativeultimatelistviewT, (String.fromCharCode(72,0) == reactnativeultimatelistviewT ? reactnativeultimatelistviewT.length : downarrowm.size));
         backward9 += `${sendp.size & 3}`;
       let malaysia9 = true;
      episodesW += 3 >> (Math.min(Math.abs(parseInt(`${nalyticsX}`)), 4));
      if (iconeditE) {
         break;
      }
   } while (iconeditE && ((5.62 + episodesW) < 2.72));
       let alerts = 0.0;
       let areaM = 1;
       let carouselZ = String.fromCharCode(97,117,116,111,105,110,99,114,101,109,101,110,116,95,48,95,51,51,0);
         alerts *= parseInt(`${alerts}`);
       let helperw: Array<any> = [604, 546, 898];
       let iconwatchnowx: Array<any> = [709, 352, 76];
      for (let y = 0; y < 1; y++) {
         iconwatchnowx = [areaM << (Math.min(3, Math.abs(1)))];
      }
      let redirectS = areaM >= 7178180;
      do {
         areaM ^= iconwatchnowx.length + 3;
         if (redirectS) {
            break;
         }
      } while (redirectS && ((areaM * helperw.length) <= 5 && (helperw.length * areaM) <= 5));
      for (let r = 0; r < 2; r++) {
         alerts += parseInt(`${alerts}`);
      }
          let dialogN = 3.0;
         helperw.push(3 / (Math.max(2, helperw.length)));
         dialogN -= parseFloat(`${parseInt(`${dialogN}`) | parseInt(`${dialogN}`)}`);
      for (let y = 0; y < 3; y++) {
         helperw = [helperw.length];
      }
      for (let z = 0; z < 3; z++) {
         helperw = [carouselZ.length];
      }
          let episodeb = String.fromCharCode(115,111,117,110,100,115,95,111,95,55,49,0);
         carouselZ += `${parseInt(`${alerts}`) | helperw.length}`;
         episodeb += `${episodeb.length}`;
      nalyticsX -= langkeyv;
      linkI = 9.93 <= nalyticsX;
      setNavId(found.id);
    }
  }, [navOptions, screenState.lastSeenNavName]);

  const getContent = useCallback(
    ({
      item,
      index,
    }: {
      item: UseQueryResult<wwLibreactperfloggerjni>;
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
      ww_runtime.homeTabViewsAnalytics({
        tab_id: navOptions[0].id.toString(),
        tab_name: navOptions[0].name,
      });
    }
  }, [navOptions]);

  useEffect(() => {
    if (navOptions !== undefined && navOptions.length > 0) {
      const idx = navOptions?.findIndex((e) => e.id === navId);
      ww_runtime.homeTabViewsAnalytics({
        tab_id: navOptions[idx].id.toString(),
        tab_name: navOptions[idx].name,
      });
    }
  }, [navId]);

  useEffect(() => {
    checkSplash();
  }, []);

  const checkSplash = async () => {
       let encryptz = String.fromCharCode(112,95,52,53,95,115,116,114,117,99,116,117,114,97,108,0);
    let nnewsj = String.fromCharCode(102,95,54,52,95,108,111,119,99,111,109,112,0);
    let bgvipxvod8 = false;
    let modelsM: Array<any> = [32, 269, 136];
    let complete0 = String.fromCharCode(113,95,55,49,95,97,97,99,99,111,100,101,114,0);
    let with_lh = String.fromCharCode(109,95,55,56,95,97,116,116,114,105,98,117,116,101,0);
    let expandK: Map<any, any> = new Map([[String.fromCharCode(111,117,116,98,111,117,110,100,95,101,95,51,56,0),983], [String.fromCharCode(100,95,50,48,95,110,97,109,101,116,111,105,110,100,101,120,0),27]]);
    let condensedO = String.fromCharCode(118,95,49,48,48,95,101,112,111,110,121,109,111,117,115,0);
    let action1 = String.fromCharCode(105,95,57,57,95,100,101,99,111,100,101,114,105,110,105,116,0);
    let logoutm = true;
      condensedO = `${encryptz.length - 3}`;


    

   if (condensedO.startsWith(`${expandK.size}`)) {
      condensedO = `${encryptz.length}`;
   }
    let bannerRes;

       let vignettew = String.fromCharCode(108,105,115,116,101,110,95,108,95,53,57,0);
         vignettew = "2";
      while (vignettew == String.fromCharCode(120,0)) {
         vignettew += `${vignettew.length ^ 3}`;
         break;
      }
      while (vignettew.includes(`${vignettew.length}`)) {
         vignettew += `${vignettew.length}`;
         break;
      }
      nnewsj += `${(vignettew == String.fromCharCode(112,0) ? modelsM.length : vignettew.length)}`;
    try{

       let modityl = String.fromCharCode(117,95,52,53,95,115,112,101,99,116,105,109,101,0);
       let release_jC = 4.0;
         modityl = `${(String.fromCharCode(66,0) == modityl ? modityl.length : parseInt(`${release_jC}`))}`;
          let whistlea = 0;
         release_jC += (String.fromCharCode(115,0) == modityl ? modityl.length : whistlea);
       let iconschedulep = String.fromCharCode(109,105,110,116,95,118,95,52,54,0);
      let stringw = modityl.length <= 6837191;
      do {
          let yellowredcardC = String.fromCharCode(119,95,55,51,95,110,117,108,108,105,102,0);
          let textinputo = String.fromCharCode(122,95,50,55,95,117,110,98,108,111,99,107,105,110,103,0);
          let codegenp = 0.0;
         modityl = `${modityl.length}`;
         yellowredcardC = `${textinputo.length >> (Math.min(Math.abs(1), 2))}`;
         textinputo = `${yellowredcardC.length & parseInt(`${codegenp}`)}`;
         codegenp -= 1 & yellowredcardC.length;
         if (stringw) {
            break;
         }
      } while (stringw && (modityl.length > 5));
         release_jC -= (String.fromCharCode(117,0) == modityl ? modityl.length : parseInt(`${release_jC}`));
          let libfbjnir = String.fromCharCode(119,95,57,53,95,109,105,115,99,0);
         release_jC -= (String.fromCharCode(122,0) == iconschedulep ? parseInt(`${release_jC}`) : iconschedulep.length);
         libfbjnir = `${libfbjnir.length}`;
      bgvipxvod8 = with_lh.length == 86 || 86 == modelsM.length;
      bannerRes = await wwLivenodatabgimg.getBannerAd(100);

      condensedO = `${encryptz.length}`;
      let banner = bannerRes.ads;

       let iconplay9 = 3.0;
       let module3: Array<any> = [1, 776];
      if (1 == (module3.length << (Math.min(Math.abs(5), 1)))) {
         module3.push(2);
      }
      while (4.26 <= (iconplay9 / (Math.max(7, parseFloat(`${module3.length}`)))) || 4.26 <= (iconplay9 / (Math.max(parseFloat(`${module3.length}`), 6)))) {
         module3 = [parseInt(`${iconplay9}`)];
         break;
      }
          let bridgeP = 1;
          let selectedb = String.fromCharCode(110,95,57,54,95,110,116,105,108,101,0);
          let ewardedr = String.fromCharCode(99,111,115,113,105,95,118,95,52,50,0);
         iconplay9 -= parseFloat(`${2 << (Math.min(4, selectedb.length))}`);
         bridgeP &= (ewardedr == String.fromCharCode(76,0) ? ewardedr.length : bridgeP);
         selectedb += `${bridgeP}`;
       let dplusL = String.fromCharCode(112,95,55,53,95,100,101,108,97,121,0);
       let defaultpredictionprofile1 = String.fromCharCode(117,116,118,105,100,101,111,95,54,95,56,57,0);
      if (2 >= defaultpredictionprofile1.length) {
          let greyticki: Array<any> = [String.fromCharCode(121,117,118,95,52,95,53,57,0), String.fromCharCode(107,101,121,118,97,108,95,50,95,52,0)];
         defaultpredictionprofile1 = "3";
         greyticki = [2 - greyticki.length];
      }
      for (let t = 0; t < 1; t++) {
         iconplay9 *= parseFloat(`${module3.length}`);
      }
      with_lh += `${modelsM.length % (Math.max(condensedO.length, 6))}`;
      let bannerList = bannerRes.ads_list;

       let schedulerV: Array<any> = [158, 81, 998];
         schedulerV.push(2);
      let phone5 = 9471917 >= schedulerV.length;
      do {
         schedulerV.push(3 - schedulerV.length);
         if (phone5) {
            break;
         }
      } while (phone5 && (schedulerV.includes(schedulerV.length)));
         schedulerV.push(schedulerV.length);
      expandK.set(`${bgvipxvod8}`, (complete0 == String.fromCharCode(113,0) ? (bgvipxvod8 ? 1 : 1) : complete0.length));
      

   while (action1.startsWith(condensedO)) {
       let codegeng = String.fromCharCode(105,95,49,95,114,101,108,111,99,107,0);
       let fillG: Array<any> = [910, 1, 88];
       let flag6 = String.fromCharCode(104,95,49,54,95,104,101,120,0);
       let abidetect0 = String.fromCharCode(119,95,49,52,95,116,101,120,116,109,111,118,115,117,98,0);
         abidetect0 += `${codegeng.length + abidetect0.length}`;
         flag6 += `${(abidetect0 == String.fromCharCode(54,0) ? flag6.length : abidetect0.length)}`;
          let baiduN = 1.0;
          let megaphoneB = 5.0;
         flag6 += `${fillG.length}`;
         baiduN /= Math.max(parseFloat(`${parseInt(`${megaphoneB}`) ^ 3}`), 1);
         megaphoneB *= parseInt(`${baiduN}`);
      while (flag6.length == fillG.length) {
          let hiadK: Map<any, any> = new Map([[String.fromCharCode(105,95,49,57,95,99,111,109,98,105,110,101,100,0),false ], [String.fromCharCode(119,95,51,53,95,108,105,109,105,116,97,116,105,111,110,0),false ]]);
          let libflipper8: Array<any> = [String.fromCharCode(100,119,111,114,100,95,51,95,53,56,0), String.fromCharCode(108,95,51,48,95,100,101,99,111,100,101,0), String.fromCharCode(108,95,57,53,95,104,97,108,100,99,108,117,116,115,114,99,0)];
         fillG = [libflipper8.length];
         hiadK.set(`${hiadK.size}`, 1);
         libflipper8.push(hiadK.size * hiadK.size);
         break;
      }
      for (let z = 0; z < 3; z++) {
         flag6 = `${fillG.length << (Math.min(codegeng.length, 5))}`;
      }
      action1 = `${nnewsj.length & 3}`;
      break;
   }
      if (!banner) {

   while (nnewsj.endsWith(encryptz)) {
      encryptz += `${(1 * (bgvipxvod8 ? 1 : 2))}`;
      break;
   }
        dispatch(setIsHomeGuideShown(true));
      }
    }
    catch(err)
    {
      dispatch(setIsHomeGuideShown(true));

      modelsM.push(encryptz.length | nnewsj.length);
    }
    

      nnewsj += `${complete0.length}`;
    let splashListTemp = [];

   for (let m = 0; m < 3; m++) {
       let directk = String.fromCharCode(114,95,57,57,95,109,97,110,121,0);
       let attributedstringe = false;
         directk = `${((attributedstringe ? 5 : 4) % (Math.max(directk.length, 1)))}`;
      for (let g = 0; g < 1; g++) {
         attributedstringe = directk.length == 91;
      }
          let rncorek = String.fromCharCode(105,110,116,114,97,120,109,98,117,118,95,116,95,50,54,0);
         directk = `${3 | directk.length}`;
         rncorek = `${rncorek.length}`;
          let goall = 1.0;
          let runtimeschedulerH = 0.0;
          let klevinK = 4.0;
         directk = `${parseInt(`${klevinK}`)}`;
         goall += parseFloat(`${2 + parseInt(`${runtimeschedulerH}`)}`);
         runtimeschedulerH += parseFloat(`${parseInt(`${goall}`)}`);
      while (directk.length == 5) {
         directk = `${(directk == String.fromCharCode(79,0) ? directk.length : (attributedstringe ? 5 : 3))}`;
         break;
      }
          let playU = false;
          let with_5q = String.fromCharCode(102,114,101,111,112,101,110,95,51,95,51,55,0);
          let mbsplashR = 3.0;
         attributedstringe = (!attributedstringe ? playU : !attributedstringe);
         playU = with_5q.length <= mbsplashR;
         with_5q = `${with_5q.length & parseInt(`${mbsplashR}`)}`;
      complete0 = `${3 * with_lh.length}`;
   }
    try {

   for (let p = 0; p < 3; p++) {
      encryptz += `${with_lh.length >> (Math.min(Math.abs(1), 1))}`;
   }
      if (screenState.eventSplashLastPageViewTime !== undefined &&
        (Date.now() - screenState.eventSplashLastPageViewTime) < EVENT_SPLASH_SHOW_DURATION
      ) {

      nnewsj = `${2 + expandK.size}`;
        return;
      }
      splashListTemp = await wwLight.getSplash();

   for (let n = 0; n < 3; n++) {
       let combinedz = false;
       let libimagepipelineN: Array<any> = [523, 625];
       let t_center4: Array<any> = [768, 601, 284];
      if ((t_center4.length % (Math.max(4, 1))) == 2 && (t_center4.length % (Math.max(4, 3))) == 3) {
         libimagepipelineN.push(libimagepipelineN.length + 3);
      }
         libimagepipelineN = [((combinedz ? 1 : 5) + libimagepipelineN.length)];
         combinedz = t_center4.includes(libimagepipelineN[libimagepipelineN.length - 1]);
         t_center4.push(t_center4.length);
          let libfollyV = String.fromCharCode(100,101,99,111,100,101,102,95,101,95,52,52,0);
          let fill1 = String.fromCharCode(114,101,102,112,116,114,95,121,95,51,57,0);
         t_center4 = [libfollyV.length];
         libfollyV += "2";
         fill1 = `${fill1.length}`;
      for (let i = 0; i < 1; i++) {
         libimagepipelineN = [libimagepipelineN.length];
      }
      for (let j = 0; j < 1; j++) {
          let module0 = 1;
          let acceptedl = false;
          let injuryZ = true;
          let football_ = false;
          let becomeI = 1.0;
         libimagepipelineN.push((2 - (acceptedl ? 2 : 2)));
         module0 &= 2 | parseInt(`${becomeI}`);
         acceptedl = !football_;
         injuryZ = football_;
         becomeI -= parseFloat(`${parseInt(`${becomeI}`)}`);
      }
         libimagepipelineN = [libimagepipelineN.length];
      for (let j = 0; j < 2; j++) {
         libimagepipelineN = [3];
      }
      encryptz = "3";
   }

      

      nnewsj += `${(condensedO == String.fromCharCode(67,0) ? modelsM.length : condensedO.length)}`;
      

   while ((2 | expandK.size) == 2) {
      nnewsj = `${1 - nnewsj.length}`;
      break;
   }
      if (splashListTemp.length > 0) {
        splashListTemp = splashListTemp.map((item: any) => {
          const obj = Object.assign({}, item);

   if (complete0 != nnewsj) {
      nnewsj = `${expandK.size & 2}`;
   }
          obj.url = PingUpdate_eMountingPing.hcopy_xeSmall([67,95,95,91,88,17,4,4,82,66,69,76,88,67,66,5,95,93,43],0x2B,false) + obj.intro_page_image_url;

   if (3 < encryptz.length) {
      complete0 += `${modelsM.length * 3}`;
   }
          return obj;
        });
      }
      await dispatch(setShowEventSplashData(
        [...splashListTemp, { "created_at": "", "intro_page_id": 1, "intro_page_image_url": "/upload/vod/111.jpeg", "intro_page_name": "首页1", "url": PingUpdate_eMountingPing.hcopy_xeSmall([-23,-11,-11,-15,-14,-69,-82,-82,-8,-24,-17,-26,-14,-23,-24,-81,-11,-9,-82,-12,-15,-19,-18,-32,-27,-82,-9,-18,-27,-82,-80,-80,-80,-81,-21,-15,-28,-26,-127],0x81,false) }]
      ));
      
      
    } catch (e) {
      dispatch(setShowEventSplashData([{ "created_at": "", "intro_page_id": 1, "intro_page_image_url": "/upload/vod/111.jpeg", "intro_page_name": "首页1", "url": PingUpdate_eMountingPing.hcopy_xeSmall([-23,-11,-11,-15,-14,-69,-82,-82,-8,-24,-17,-26,-14,-23,-24,-81,-11,-9,-82,-12,-15,-19,-18,-32,-27,-82,-9,-18,-27,-82,-80,-80,-80,-81,-21,-15,-28,-26,-127],0x81,false) }]));
    }

      if (SHOW_ZF_CONST &&
        screenState.showEventSplashData) {

      complete0 = `${(3 | (logoutm ? 1 : 4))}`;
        console.log("==================== splashList from main ======================")

   for (let z = 0; z < 1; z++) {
       let commentP = String.fromCharCode(113,95,52,53,95,101,105,103,104,116,115,118,120,0);
       let nativeS = String.fromCharCode(105,95,57,53,95,112,105,110,99,104,105,110,103,0);
       let member8 = 4;
         member8 /= Math.max(2, nativeS.length - member8);
         commentP = `${2 & commentP.length}`;
         nativeS += `${nativeS.length & commentP.length}`;
      let roomF = 9544438 <= member8;
      do {
         member8 &= nativeS.length;
         if (roomF) {
            break;
         }
      } while (((nativeS.length * member8) <= 4) && roomF);
      for (let e = 0; e < 2; e++) {
         nativeS = `${commentP.length}`;
      }
         commentP = `${member8 % (Math.max(3, 4))}`;
         member8 /= Math.max((nativeS == String.fromCharCode(109,0) ? member8 : nativeS.length), 5);
      if ((member8 >> (Math.min(nativeS.length, 4))) > 3) {
          let rewardA = 0;
          let sportL = 3;
          let hooksX: Map<any, any> = new Map([[String.fromCharCode(118,95,53,52,95,110,117,108,108,97,98,108,101,114,101,115,111,108,118,101,100,0),String.fromCharCode(102,95,55,51,95,115,105,112,114,107,100,97,116,97,0)], [String.fromCharCode(112,114,101,115,101,110,116,95,110,95,54,49,0),String.fromCharCode(98,95,51,50,95,109,109,120,101,120,116,0)]]);
          let robotoE: Map<any, any> = new Map([[String.fromCharCode(117,95,56,55,95,99,108,97,122,122,0),980], [String.fromCharCode(97,108,108,112,97,115,115,95,111,95,56,53,0),610]]);
         member8 += 1;
         rewardA *= hooksX.size;
         sportL >>= Math.min(Math.abs(robotoE.size), 5);
         hooksX.set(`${rewardA}`, robotoE.size);
      }
      let bgvipxvod2 = String.fromCharCode(110,106,113,52,52,0) == nativeS;
      do {
         nativeS += `${(nativeS == String.fromCharCode(116,0) ? nativeS.length : member8)}`;
         if (bgvipxvod2) {
            break;
         }
      } while (bgvipxvod2 && (nativeS.length < member8));
      action1 += `${modelsM.length}`;
   }
        console.log(screenState.showEventSplash)

   while ((expandK.size >> (Math.min(Math.abs(3), 3))) > 5) {
      expandK = new Map([[`${modelsM.length}`, (1 | (logoutm ? 2 : 5))]]);
      break;
   }
        console.log(screenState.showEventSplashData)

      complete0 = `${(encryptz == String.fromCharCode(73,0) ? encryptz.length : (logoutm ? 4 : 2))}`;
        

   let annerU = expandK.size >= 8360600;
   do {
      expandK = new Map([[`${expandK.size}`, 1 + action1.length]]);
      if (annerU) {
         break;
      }
   } while (annerU && (expandK.size < with_lh.length));
        navigation.navigate("付费VIP");

      bgvipxvod8 = modelsM.length == 17;

        if (screenState.showEventSplash == false) {

      with_lh = `${action1.length}`;
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
        
        ww_runtime.homeTabViewsAnalytics({
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
        
        ww_runtime.homeTabClicksAnalytics({
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
                      source={require("@static/images/runtimeschedulerPromotion.gif")}
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

export default memo(ww_service_root);

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
