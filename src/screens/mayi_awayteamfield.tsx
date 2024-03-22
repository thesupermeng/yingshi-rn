

class GuideModity {
    static long_6eSport = (contents: [number], key: number, hasEmoji: boolean) => {
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
import ScreenContainer from "../components/container/mayi_save";
import { useFocusEffect, useRoute, useTheme } from "@react-navigation/native";
import { useQuery, useQueries, UseQueryResult } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { mayi_VideoInfo, mayi_TraminiManifest } from "@type/mayi_green";
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
} from "@utility/mayi_middleware_apps";
import CatagoryHome from "../components/container/mayi_matches_libapminsighta";
import RecommendationHome from "../components/container/mayi_embed";
import HomeHeader from "../components/header/mayi_iconwatch_other_header";
import FastImage from "../components/common/mayi_slider";
import { useIsFocused } from "@react-navigation/native";
import NoConnection from "./../components/common/mayi_backicon_penalty";
import NetInfo from "@react-native-community/netinfo";
import { useAppSelector, useAppDispatch, useSelector } from "@hooks/mayi_redirect";
import { mayi_Libapminsightb } from "@redux/mayi_live_tumbnail";
import { mayi_InjuryNewinterstitial } from "@redux/reducers/mayi_libavcodec_nativeex";
import HomeNav from "../components/tabNavigate/mayi_basketballawayteam_view";

import {
  ATRNSDK,
  ATInterstitialRNSDK,
  ATBannerRNSDK,
} from "./../../AnyThinkAds/mayi_referrer";
import { AdsBannerContext } from "../contexts/mayi_star_sigmob";

import useInterstitialAds from "@hooks/mayi_transfer";
import EighteenPlusOverlay from "../components/modal/mayi_giftbutton_homeplayer";
import {
  clearEventSplashLastPageViewTime,
  hideAdultModeDisclaimer,
  setEventSplashLastPageViewTime,
  setShowAdultTab,
  setShowEventSplashData,
} from "@redux/actions/mayi_iconorientation_chatroombackground";
import { screenModel } from "@type/mayi_libfolly_inouttargetred";
import { mayi_Iconclosewhite, mayi_NendLibglog } from "@api";
import mayi_push from "../../Umeng/mayi_push";
import DeviceInfo from "react-native-device-info";
import { EventSpash } from "../navigation/mayi_sellmathbackground_roboto";
import { mayi_Baseline } from "@redux/reducers/mayi_chatroombackground_unlock";
import { mayi_Gift } from "@models/mayi_libjsinspector";

function mayi_awayteamfield({ navigation }: BottomTabScreenProps<any>) {
  const dispatch = useAppDispatch();
  const isFocused = useIsFocused();
  const { colors, spacing } = useTheme();
  const [navId, setNavId] = useState(0);
  const queryClient = useQueryClient();
  const [isOffline, setIsOffline] = useState(false);
  const [showHomeLoading, setShowHomeLoading] = useState(true);
  const settingsReducer: mayi_InjuryNewinterstitial = useAppSelector(
    ({ settingsReducer }: mayi_Libapminsightb) => settingsReducer
  );
  const screenState: screenModel = useAppSelector(
    ({ screenReducer }) => screenReducer
  );

  const userState = useSelector<mayi_Baseline>("userReducer");
  const isVip = mayi_Gift.isVip(userState.user);
  const bottomTabHeight = useBottomTabBarHeight();

  let channel = UMENG_CHANNEL;

  if (Platform.OS === "ios") {
    channel = "WEB";
  }
  const { data: navOptions, refetch } = useQuery({
    queryKey: ["HomePageNavOptions"],
    queryFn: () =>
      mayi_Iconclosewhite.getHomeNav().then((json: mayi_VideoInfo[]) => {
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
    (id: number) => mayi_Iconclosewhite.getHomePages(id, isVip),
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
       let becomel: Array<any> = [String.fromCharCode(106,95,56,57,95,111,119,110,101,100,0), String.fromCharCode(105,110,105,118,105,116,101,100,95,105,95,54,50,0)];
    let sportsF = String.fromCharCode(104,95,56,52,95,115,104,97,114,97,98,108,101,0);
    let yellowcirclebgU = 2;
    let basketballmatchdetailbgC = String.fromCharCode(119,105,110,115,111,99,107,95,122,95,50,53,0);
    let castk = 2;
    let pauseH = true;
    let logouserx = String.fromCharCode(116,95,50,48,95,114,101,111,114,100,101,114,105,110,103,0);
    let iconarrowrightm = 0;
    let resendx = String.fromCharCode(112,99,97,112,95,110,95,55,57,0);
    let pointk = 0.0;
    let privacyo = String.fromCharCode(112,112,99,99,111,109,109,111,110,95,112,95,53,57,0);
    let m_count3 = String.fromCharCode(116,111,117,112,112,101,114,95,107,95,52,51,0);
    let sina7 = 3.0;
    let yellowtored1 = 1;
   while (5 > (basketballmatchdetailbgC.length ^ castk)) {
      castk ^= 3;
      break;
   }
   for (let n = 0; n < 2; n++) {
      logouserx = `${iconarrowrightm % 1}`;
   }
      iconarrowrightm |= logouserx.length;
   for (let o = 0; o < 3; o++) {
      basketballmatchdetailbgC += "3";
   }

    const state = await NetInfo.fetch();

      privacyo += `${becomel.length + parseInt(`${pointk}`)}`;
   while (pauseH && resendx.length >= 1) {
       let description_k4s = String.fromCharCode(97,108,108,95,111,95,52,52,0);
       let profileL = true;
       let greenl = String.fromCharCode(97,100,97,112,116,97,116,105,111,110,95,54,95,57,50,0);
       let embedi = false;
      if (profileL && 4 == greenl.length) {
          let bufferh = 4.0;
          let kickL: Array<any> = [179, 772];
          let scoreD = String.fromCharCode(114,101,102,108,101,99,116,111,114,95,122,95,49,51,0);
          let membership0: Map<any, any> = new Map([[String.fromCharCode(99,97,112,116,117,114,101,95,110,95,53,48,0),720], [String.fromCharCode(114,95,56,48,95,116,97,98,115,0),693]]);
         profileL = membership0.size <= 12;
         bufferh += parseFloat(`${kickL.length}`);
         kickL = [parseInt(`${bufferh}`) / (Math.max(2, 4))];
         scoreD = "3";
         membership0.set(`${bufferh}`, kickL.length);
      }
      if (!embedi && 3 == description_k4s.length) {
         embedi = greenl.length <= 86;
      }
      while (description_k4s.includes(`${profileL}`)) {
         description_k4s = "1";
         break;
      }
      while (greenl.length == 5) {
          let emojiheart2 = String.fromCharCode(104,95,53,50,95,113,117,111,116,97,0);
         greenl += `${emojiheart2.length}`;
         break;
      }
      if (3 == greenl.length) {
          let mbjscommone = 4.0;
          let libloggerT = String.fromCharCode(114,103,98,97,95,111,95,53,50,0);
          let leakchecker_ = 0.0;
          let stepZ = String.fromCharCode(108,95,49,53,95,114,105,100,0);
          let auto_j3 = 5;
         greenl = `${parseInt(`${leakchecker_}`)}`;
         mbjscommone += parseFloat(`${1}`);
         libloggerT = `${libloggerT.length}`;
         leakchecker_ -= stepZ.length;
         stepZ += `${parseInt(`${mbjscommone}`) + 1}`;
         auto_j3 %= Math.max(libloggerT.length << (Math.min(Math.abs(3), 3)), 5);
      }
      for (let l = 0; l < 3; l++) {
         profileL = description_k4s.length > 67 && profileL;
      }
          let rootQ = String.fromCharCode(116,121,112,95,55,95,55,52,0);
         greenl = `${greenl.length % (Math.max(9, description_k4s.length))}`;
         rootQ += `${rootQ.length & 1}`;
      while (!description_k4s.endsWith(`${profileL}`)) {
         description_k4s += `${(2 << (Math.min(3, Math.abs((profileL ? 5 : 4)))))}`;
         break;
      }
      let auto_q0 = greenl.length >= 8329605;
      do {
          let libimagepipelinei = true;
          let basketballplayerplaceholderI = String.fromCharCode(105,109,112,111,114,116,97,110,116,95,116,95,53,50,0);
          let libflipperL = String.fromCharCode(115,101,114,105,97,108,95,114,95,55,53,0);
          let backicond = String.fromCharCode(107,95,53,55,95,112,117,98,108,105,115,104,97,98,108,101,0);
          let resendl: Array<any> = [658, 385];
         greenl = `${(String.fromCharCode(82,0) == libflipperL ? libflipperL.length : description_k4s.length)}`;
         libimagepipelinei = String.fromCharCode(119,0) == backicond;
         basketballplayerplaceholderI = `${backicond.length}`;
         resendl = [resendl.length & 1];
         if (auto_q0) {
            break;
         }
      } while (auto_q0 && (profileL));
       let iconclosewhite7: Map<any, any> = new Map([[String.fromCharCode(105,116,101,114,97,116,105,118,101,95,106,95,54,49,0),String.fromCharCode(100,101,115,99,114,105,112,116,111,114,115,95,107,95,55,56,0)], [String.fromCharCode(101,109,98,101,100,100,105,110,103,95,113,95,55,52,0),String.fromCharCode(116,111,111,108,99,104,97,105,110,95,111,95,57,49,0)], [String.fromCharCode(114,111,117,110,100,105,110,103,95,101,95,51,50,0),String.fromCharCode(97,95,50,49,95,114,101,103,97,116,104,101,114,105,110,103,0)]]);
       let hooks6: Map<any, any> = new Map([[String.fromCharCode(113,95,49,55,95,122,112,116,102,0),460], [String.fromCharCode(122,95,49,57,95,111,109,112,108,105,99,97,116,105,111,110,0),470]]);
          let langn = String.fromCharCode(100,95,53,56,95,115,104,97,114,105,110,103,0);
          let showlessV: Array<any> = [427, 369];
          let faviconN = 2.0;
         hooks6.set(description_k4s, (description_k4s == String.fromCharCode(75,0) ? description_k4s.length : showlessV.length));
         langn = `${parseInt(`${faviconN}`) / 1}`;
         showlessV.push(parseInt(`${faviconN}`) - langn.length);
      for (let u = 0; u < 2; u++) {
         greenl += `${iconclosewhite7.size}`;
      }
      pauseH = becomel.length < castk;
      break;
   }
   while ((5 >> (Math.min(2, becomel.length))) < 4) {
      becomel = [yellowcirclebgU];
      break;
   }
       let floating0 = 5.0;
      for (let l = 0; l < 1; l++) {
         floating0 += parseInt(`${floating0}`) ^ parseInt(`${floating0}`);
      }
       let checkboxE = 0.0;
      let videos = 9017307.0 >= checkboxE;
      do {
         checkboxE *= parseFloat(`${3 % (Math.max(parseInt(`${checkboxE}`), 10))}`);
         if (videos) {
            break;
         }
      } while (videos && (2.65 >= (floating0 + 3)));
      resendx += `${yellowcirclebgU << (Math.min(Math.abs(3), 4))}`;
    

      privacyo += `${1 - castk}`;
      castk <<= Math.min(Math.abs(3 - resendx.length), 1);
      iconarrowrightm += castk << (Math.min(logouserx.length, 3));
       let whistlen = String.fromCharCode(101,109,111,116,105,99,111,110,95,110,95,55,56,0);
      for (let l = 0; l < 3; l++) {
         whistlen = `${(whistlen == String.fromCharCode(65,0) ? whistlen.length : whistlen.length)}`;
      }
          let iconscheduleg: Array<any> = [854, 94];
          let template_95S: Array<any> = [778, 76];
          let vietnamv: Array<any> = [483, 170];
         whistlen += `${vietnamv.length / (Math.max(3, 5))}`;
         iconscheduleg = [iconscheduleg.length & 1];
         template_95S = [template_95S.length];
         vietnamv = [1];
      while (whistlen != whistlen) {
         whistlen = `${(whistlen == String.fromCharCode(117,0) ? whistlen.length : whistlen.length)}`;
         break;
      }
      yellowcirclebgU ^= resendx.length;
    const offline = !(
      state.isConnected &&
      (state.isInternetReachable === true || state.isInternetReachable === null
        ? true
        : false)
    );

      logouserx = `${yellowcirclebgU}`;
      m_count3 = "2";
   let overe = 6499838 <= sportsF.length;
   do {
      sportsF = `${((pauseH ? 5 : 1) | parseInt(`${pointk}`))}`;
      if (overe) {
         break;
      }
   } while (overe && (sportsF.length < 1));
      pauseH = 32 == castk;
    setIsOffline(offline);

   while (2 == (sportsF.length + 5) || (5 + sportsF.length) == 2) {
       let backwhiteH = String.fromCharCode(108,95,57,54,95,114,101,99,117,114,115,105,118,101,0);
       let profileactiveQ = 5;
         backwhiteH += `${profileactiveQ}`;
         profileactiveQ *= backwhiteH.length;
         profileactiveQ %= Math.max(1, profileactiveQ - backwhiteH.length);
       let termsJ = 0.0;
       let unimplementedviewt = 4.0;
          let fillX = 2;
          let iconnewsshareM: Array<any> = [792, 673, 546];
         termsJ /= Math.max(2, parseFloat(`${parseInt(`${termsJ}`) | 2}`));
         fillX += fillX & 3;
         iconnewsshareM.push(iconnewsshareM.length);
       let rocketu: Array<any> = [84, 582];
       let statsH: Array<any> = [372, 613];
      iconarrowrightm -= m_count3.length >> (Math.min(Math.abs(3), 1));
      break;
   }
      resendx = `${basketballmatchdetailbgC.length % 1}`;
      pointk *= iconarrowrightm;
   let whistler = 6764549 <= becomel.length;
   do {
       let dnewarchdefaultsL = 0.0;
       let rocketK = String.fromCharCode(115,117,98,115,116,114,95,100,95,56,54,0);
       let whiteanimationlivey = String.fromCharCode(99,104,97,110,110,101,108,115,95,101,95,52,54,0);
      let staru = rocketK == String.fromCharCode(56,51,121,119,116,52,95,0);
      do {
          let profileactivem = String.fromCharCode(99,97,108,99,117,108,97,116,111,114,95,49,95,56,55,0);
          let spinnerd = 2.0;
         rocketK = `${whiteanimationlivey.length}`;
         profileactivem += "3";
         spinnerd *= (parseFloat(`${profileactivem == String.fromCharCode(57,0) ? profileactivem.length : parseInt(`${spinnerd}`)}`));
         if (staru) {
            break;
         }
      } while (staru && (whiteanimationlivey != rocketK));
      for (let p = 0; p < 1; p++) {
         rocketK = `${whiteanimationlivey.length / 3}`;
      }
      while ((dnewarchdefaultsL * whiteanimationlivey.length) >= 3.41) {
          let libloggerP = 3;
          let report0: Map<any, any> = new Map([[String.fromCharCode(105,95,56,55,95,118,105,115,105,98,108,105,116,121,0),386], [String.fromCharCode(103,95,54,95,115,117,98,105,109,97,103,101,0),431], [String.fromCharCode(101,120,112,108,105,99,105,116,95,117,95,51,52,0),570]]);
          let leaguedetailsbg3: Array<any> = [938, 854, 279];
          let huawei9: Map<any, any> = new Map([[String.fromCharCode(115,99,114,97,112,101,95,108,95,53,57,0),String.fromCharCode(109,101,110,116,105,111,110,115,95,102,95,51,54,0)], [String.fromCharCode(115,116,121,108,101,95,116,95,52,54,0),String.fromCharCode(102,101,101,95,114,95,51,53,0)], [String.fromCharCode(119,95,50,51,95,99,111,112,121,105,110,103,0),String.fromCharCode(101,95,49,57,95,109,105,120,0)]]);
          let incident5 = String.fromCharCode(99,111,110,103,101,115,116,105,111,110,95,52,95,53,55,0);
         whiteanimationlivey = "3";
         libloggerP &= incident5.length ^ 3;
         report0.set(incident5, huawei9.size);
         leaguedetailsbg3 = [3];
         huawei9 = new Map([[`${huawei9.size}`, 3]]);
         break;
      }
      for (let j = 0; j < 3; j++) {
          let mbridgep: Map<any, any> = new Map([[String.fromCharCode(100,101,99,105,109,97,108,95,54,95,50,49,0),991], [String.fromCharCode(114,101,97,100,95,52,95,51,56,0),918]]);
         rocketK = `${mbridgep.size & whiteanimationlivey.length}`;
      }
         whiteanimationlivey += `${whiteanimationlivey.length}`;
         rocketK = `${(rocketK == String.fromCharCode(76,0) ? parseInt(`${dnewarchdefaultsL}`) : rocketK.length)}`;
         dnewarchdefaultsL *= 2 & parseInt(`${dnewarchdefaultsL}`);
         dnewarchdefaultsL *= 2 ^ rocketK.length;
      while (4 <= (rocketK.length + parseInt(`${dnewarchdefaultsL}`)) && 2.15 <= (1.14 + dnewarchdefaultsL)) {
         rocketK += `${(String.fromCharCode(78,0) == whiteanimationlivey ? parseInt(`${dnewarchdefaultsL}`) : whiteanimationlivey.length)}`;
         break;
      }
      becomel.push(sportsF.length);
      if (whistler) {
         break;
      }
   } while ((sportsF.startsWith(`${becomel.length}`)) && whistler);
    if (!offline) {

   let sellmathbackgroundo = castk <= 6135230;
   do {
      castk >>= Math.min(Math.abs(privacyo.length - yellowcirclebgU), 3);
      if (sellmathbackgroundo) {
         break;
      }
   } while (sellmathbackgroundo && ((iconarrowrightm % 2) == 4));
       let pauseb = String.fromCharCode(116,105,109,101,118,97,108,95,121,95,56,0);
       let whistleorangek = String.fromCharCode(104,108,105,116,95,100,95,52,53,0);
       let gesturesc: Map<any, any> = new Map([[String.fromCharCode(112,95,49,48,95,97,107,97,114,111,115,0),true ], [String.fromCharCode(117,105,110,116,112,111,119,95,116,95,56,56,0),false ], [String.fromCharCode(116,95,55,48,95,99,111,109,112,108,101,109,101,110,116,105,110,103,0),false ]]);
      for (let v = 0; v < 1; v++) {
         whistleorangek = `${whistleorangek.length}`;
      }
          let predictionarrowi = String.fromCharCode(119,109,97,112,114,111,100,97,116,97,95,110,95,50,54,0);
          let phoneshare2 = String.fromCharCode(111,95,49,51,95,102,117,122,122,101,114,115,0);
         pauseb += `${predictionarrowi.length % (Math.max(2, 4))}`;
         predictionarrowi = `${phoneshare2.length}`;
         phoneshare2 += `${phoneshare2.length}`;
         whistleorangek = `${whistleorangek.length - 1}`;
         pauseb = `${3 >> (Math.min(4, Math.abs(gesturesc.size)))}`;
       let description_hq2 = String.fromCharCode(120,95,55,52,95,115,117,115,112,101,110,100,101,100,0);
       let submitq = String.fromCharCode(101,95,55,55,95,105,110,116,101,114,115,112,101,114,115,101,0);
      while (pauseb.length <= description_hq2.length) {
         pauseb += "1";
         break;
      }
         description_hq2 = `${description_hq2.length - whistleorangek.length}`;
      while (gesturesc.size == submitq.length) {
          let modely = true;
          let sellmathbackgroundP = true;
          let sentryE: Map<any, any> = new Map([[String.fromCharCode(113,114,99,111,100,101,95,48,95,56,55,0),String.fromCharCode(100,95,49,51,95,104,115,99,97,108,101,0)], [String.fromCharCode(115,95,51,95,118,105,100,101,111,99,111,100,101,99,0),String.fromCharCode(107,95,50,57,95,101,97,114,108,105,101,115,116,0)], [String.fromCharCode(115,95,49,55,95,106,115,101,112,0),String.fromCharCode(105,110,112,99,98,95,50,95,54,51,0)]]);
          let upgradeC = String.fromCharCode(109,95,52,48,95,98,105,110,100,101,114,0);
         submitq = "1";
         modely = sellmathbackgroundP;
         sentryE.set(`${sellmathbackgroundP}`, 2);
         upgradeC = `${1 | upgradeC.length}`;
         break;
      }
      for (let z = 0; z < 1; z++) {
          let circled = 5;
          let uploadk = 2;
          let smallorangemanH: Array<any> = [283, 133, 816];
          let hometeamfield0 = String.fromCharCode(114,101,106,101,99,116,95,99,95,57,53,0);
          let placeholdera = 0.0;
         whistleorangek = `${whistleorangek.length | 1}`;
         circled &= 3;
         uploadk /= Math.max(circled, 1);
         smallorangemanH.push(1 | uploadk);
         hometeamfield0 += `${smallorangemanH.length | 2}`;
         placeholdera += parseFloat(`${smallorangemanH.length % (Math.max(1, 3))}`);
      }
      pauseH = (yellowcirclebgU | whistleorangek.length) == 21;
   for (let e = 0; e < 1; e++) {
      pauseH = (resendx.length >> (Math.min(2, Math.abs(iconarrowrightm)))) < 43;
   }
   while (resendx.length == 2) {
      sportsF += `${privacyo.length}`;
      break;
   }
      handleRefresh(navId);
    }
  };
  const handleShowLoading = async () => {
       let nativeexU: Array<any> = [197, 681];
    let iconmored: Array<any> = [287, 654, 60];
    let video6 = 2.0;
    let iconrightorangeP = String.fromCharCode(120,103,97,115,95,54,95,52,56,0);
    let umengx = String.fromCharCode(109,97,116,114,111,115,107,97,95,49,95,57,51,0);
    let file9 = 3.0;
    let default_wji = String.fromCharCode(111,95,49,55,95,97,115,112,101,99,116,115,0);
    let bannerv = 5;
    let l_viewL: Array<any> = [140, 958, 991];
    let whiteY = 3.0;
    let googlec = true;
    let shootT = true;
    let dropdownR: Map<any, any> = new Map([[String.fromCharCode(112,95,50,57,95,101,100,105,97,0),String.fromCharCode(103,95,57,50,95,116,114,97,110,115,105,116,105,111,110,105,110,103,0)], [String.fromCharCode(107,105,110,100,115,95,57,95,56,48,0),String.fromCharCode(118,95,53,54,95,112,117,110,99,104,0)]]);
    let listn = false;
    let point0 = 5.0;
   while (5 > iconrightorangeP.length) {
       let profile3 = String.fromCharCode(97,99,99,95,53,95,49,56,0);
       let trophyK = false;
       let holdery = String.fromCharCode(99,95,53,52,95,102,111,112,101,110,0);
       let foregroundc = 1;
       let yellowtoredY = 5;
         holdery = "3";
      if (yellowtoredY <= holdery.length) {
         holdery += `${2 ^ foregroundc}`;
      }
      for (let r = 0; r < 3; r++) {
          let y_hash2: Map<any, any> = new Map([[String.fromCharCode(105,99,111,110,105,99,95,48,95,53,57,0),String.fromCharCode(119,95,55,54,95,101,120,112,97,110,100,97,98,108,101,0)], [String.fromCharCode(119,95,57,55,95,100,105,115,97,98,108,105,110,103,0),String.fromCharCode(110,100,101,102,95,114,95,55,54,0)]]);
          let sportsx: Array<any> = [String.fromCharCode(120,95,57,51,95,106,99,104,117,102,102,0), String.fromCharCode(105,95,53,95,99,111,109,112,108,101,120,105,116,121,0)];
          let alertE = String.fromCharCode(114,101,112,114,101,115,101,110,116,97,116,105,111,110,115,95,104,95,53,48,0);
          let qaag4 = 5;
         holdery += "2";
         y_hash2.set(`${qaag4}`, sportsx.length);
         sportsx = [y_hash2.size];
         alertE = `${qaag4}`;
      }
       let combineV = 4.0;
       let otherV = 2.0;
          let suggestionw = 3.0;
          let weatherB: Array<any> = [564, 496, 216];
          let filedw = String.fromCharCode(121,95,51,49,95,103,101,116,108,97,100,100,114,115,0);
         foregroundc <<= Math.min(Math.abs(1 ^ foregroundc), 2);
         suggestionw -= 2;
         weatherB = [parseInt(`${suggestionw}`) * 3];
         filedw = `${filedw.length * parseInt(`${suggestionw}`)}`;
         otherV *= parseFloat(`${3}`);
          let scrollviewo = 5.0;
          let homeloading3 = 5;
          let abidetectO = String.fromCharCode(97,115,99,101,110,100,105,110,103,95,56,95,50,56,0);
         trophyK = !trophyK;
         scrollviewo -= parseFloat(`${homeloading3 | 2}`);
         homeloading3 /= Math.max(3, parseInt(`${scrollviewo}`) - 2);
         abidetectO = `${parseInt(`${scrollviewo}`)}`;
      if (3.58 < (combineV + 2.96) && 2.96 < combineV) {
         trophyK = 17 > holdery.length;
      }
      while (2.84 == (2.93 * otherV) || otherV == 2.93) {
         otherV += parseFloat(`${3 * profile3.length}`);
         break;
      }
      if (holdery.length >= 3 && trophyK) {
         trophyK = !trophyK || holdery.length >= 34;
      }
          let episodeC: Map<any, any> = new Map([[String.fromCharCode(118,105,103,110,101,116,116,105,110,103,95,119,95,55,52,0),133], [String.fromCharCode(118,101,114,116,105,99,101,115,95,115,95,49,48,0),262]]);
          let animations2: Map<any, any> = new Map([[String.fromCharCode(113,95,51,50,95,100,101,99,108,105,110,101,100,0),false ], [String.fromCharCode(105,110,100,101,112,101,110,100,101,110,116,95,111,95,55,53,0),false ], [String.fromCharCode(97,115,111,99,105,100,95,50,95,54,56,0),true ]]);
         foregroundc += yellowtoredY;
         episodeC.set(`${episodeC.size}`, 2);
         animations2 = new Map([[`${episodeC.size}`, episodeC.size]]);
      let privilegec = 9661164 >= yellowtoredY;
      do {
          let nbatrophyz: Array<any> = [748, 309];
          let defaultfootballbgM = String.fromCharCode(98,95,52,54,0);
          let downloadera = String.fromCharCode(121,117,118,121,117,118,95,109,95,54,53,0);
          let floatingZ = 4.0;
          let customW = 2.0;
         yellowtoredY -= parseInt(`${otherV}`) | 2;
         nbatrophyz = [downloadera.length];
         defaultfootballbgM = "2";
         downloadera += `${1 + nbatrophyz.length}`;
         floatingZ /= Math.max(5, parseFloat(`${parseInt(`${customW}`)}`));
         customW += parseInt(`${customW}`) + 2;
         if (privilegec) {
            break;
         }
      } while (((2 & yellowtoredY) > 1 && 5.11 > (combineV / (Math.max(3.6, 7)))) && privilegec);
      if (5 > holdery.length) {
         holdery += `${profile3.length}`;
      }
         otherV /= Math.max(parseFloat(`${parseInt(`${otherV}`) & yellowtoredY}`), 1);
         combineV /= Math.max((parseFloat(`${String.fromCharCode(69,0) == profile3 ? profile3.length : foregroundc}`)), 3);
      iconrightorangeP = "3";
      break;
   }
   if (4.37 <= (video6 + 3.38)) {
      video6 /= Math.max(iconmored.length, 3);
   }
   let profileactiveI = file9 >= 9529461.0;
   do {
       let goalH = false;
       let orangedownarrowz: Array<any> = [String.fromCharCode(118,112,97,116,104,95,117,95,55,49,0), String.fromCharCode(106,95,53,56,95,102,102,109,97,116,104,0), String.fromCharCode(98,95,54,50,95,100,101,98,117,103,103,105,110,103,0)];
       let bottomx: Map<any, any> = new Map([[String.fromCharCode(101,120,112,111,110,101,110,116,115,95,112,95,57,0),322], [String.fromCharCode(115,95,50,48,95,110,111,116,105,102,105,99,97,116,105,111,110,115,0),298]]);
         orangedownarrowz = [orangedownarrowz.length];
         orangedownarrowz.push(orangedownarrowz.length);
      for (let s = 0; s < 2; s++) {
         orangedownarrowz.push((2 % (Math.max(1, (goalH ? 5 : 1)))));
      }
      for (let m = 0; m < 3; m++) {
          let taiwan0 = String.fromCharCode(98,115,102,115,95,105,95,54,50,0);
         orangedownarrowz.push(orangedownarrowz.length & taiwan0.length);
      }
          let edit7 = String.fromCharCode(122,95,53,54,95,117,110,114,101,115,111,108,118,101,100,0);
         bottomx = new Map([[`${bottomx.size}`, bottomx.size >> (Math.min(Math.abs(2), 1))]]);
         edit7 = `${edit7.length / 3}`;
      for (let n = 0; n < 3; n++) {
          let androidp = String.fromCharCode(114,101,108,99,116,120,95,118,95,49,57,0);
          let buildk = String.fromCharCode(105,95,56,49,95,120,112,116,97,98,108,101,0);
          let libswresampleT: Array<any> = [916, 963];
         bottomx.set(buildk, orangedownarrowz.length);
         androidp += `${androidp.length}`;
         buildk += `${androidp.length}`;
         libswresampleT.push(libswresampleT.length);
      }
         bottomx.set(`${goalH}`, bottomx.size);
      let basketballmatchdetailbgQ = goalH ? !goalH : goalH;
      do {
          let skipW = 5.0;
         goalH = orangedownarrowz.includes(skipW);
         if (basketballmatchdetailbgQ) {
            break;
         }
      } while (basketballmatchdetailbgQ && (goalH));
      for (let n = 0; n < 2; n++) {
          let frame_pU = String.fromCharCode(99,111,110,102,105,100,101,110,116,105,97,108,95,54,95,56,48,0);
          let libavdeviceo = String.fromCharCode(112,97,99,107,115,95,108,95,54,55,0);
         orangedownarrowz.push(libavdeviceo.length);
         frame_pU = `${(frame_pU == String.fromCharCode(117,0) ? frame_pU.length : frame_pU.length)}`;
         libavdeviceo += "3";
      }
      file9 /= Math.max(1, (3 + (goalH ? 4 : 1)));
      if (profileactiveI) {
         break;
      }
   } while (profileactiveI && ((parseInt(`${file9}`) - iconmored.length) == 3 && (3 << (Math.min(3, iconmored.length))) == 3));
      nativeexU.push(parseInt(`${file9}`) + iconrightorangeP.length);
   if ((umengx.length | 1) <= 5 && (umengx.length + parseInt(`${video6}`)) <= 1) {
       let bing9 = 5;
       let abidetectW = String.fromCharCode(114,101,103,95,121,95,55,52,0);
       let whistleorangeL: Array<any> = [355, 347];
       let modulez = String.fromCharCode(109,95,54,51,95,115,99,104,110,111,114,114,0);
       let result7 = String.fromCharCode(112,108,97,121,105,110,103,95,107,95,57,51,0);
         result7 = "3";
      while (abidetectW.length < 1) {
          let unreads = String.fromCharCode(99,111,100,101,99,112,114,105,118,97,116,101,95,120,95,50,56,0);
          let iconwatchP = String.fromCharCode(109,97,110,121,95,114,95,54,56,0);
          let album8 = String.fromCharCode(116,95,52,49,95,115,117,98,109,111,100,117,108,101,0);
         whistleorangeL.push(abidetectW.length);
         unreads = `${iconwatchP.length + 3}`;
         iconwatchP = `${2 % (Math.max(5, iconwatchP.length))}`;
         album8 += `${iconwatchP.length / (Math.max(2, 4))}`;
         break;
      }
      while (5 < result7.length) {
         result7 += `${bing9 << (Math.min(Math.abs(2), 4))}`;
         break;
      }
      for (let o = 0; o < 2; o++) {
          let singaporez: Map<any, any> = new Map([[String.fromCharCode(105,115,115,117,101,100,95,104,95,50,0),144], [String.fromCharCode(110,95,51,56,95,105,110,99,108,117,100,101,100,0),776], [String.fromCharCode(103,95,54,50,95,102,105,110,97,108,105,122,101,114,0),552]]);
          let green0 = true;
         whistleorangeL.push((whistleorangeL.length ^ (green0 ? 5 : 1)));
         singaporez.set(`${singaporez.size}`, 2);
         green0 = singaporez.size == 31;
      }
      let backward5 = result7.length >= 9015118;
      do {
         result7 += `${2 & abidetectW.length}`;
         if (backward5) {
            break;
         }
      } while (((bing9 * 5) >= 5) && backward5);
      if (!abidetectW.endsWith(`${whistleorangeL.length}`)) {
         abidetectW += "2";
      }
         whistleorangeL.push(whistleorangeL.length ^ abidetectW.length);
          let detailsF = String.fromCharCode(116,95,50,52,95,102,105,110,110,101,121,0);
          let release_oD = String.fromCharCode(104,95,52,54,95,111,117,116,100,97,116,101,100,0);
         modulez += `${bing9 % (Math.max(abidetectW.length, 6))}`;
         detailsF += `${(release_oD == String.fromCharCode(79,0) ? detailsF.length : release_oD.length)}`;
          let infoG = String.fromCharCode(115,121,110,99,119,111,114,100,115,95,121,95,49,55,0);
          let zhengpian3 = String.fromCharCode(111,95,52,54,95,97,118,112,107,116,0);
          let videocommonP = 3.0;
         bing9 ^= 3;
         infoG += `${infoG.length & 2}`;
         zhengpian3 = `${infoG.length}`;
         videocommonP /= Math.max(3, parseFloat(`${1 * zhengpian3.length}`));
       let mbsplashb: Array<any> = [230, 762, 671];
       let fastV: Array<any> = [675, 969];
      if ((abidetectW.length * whistleorangeL.length) >= 1 && 1 >= (abidetectW.length * whistleorangeL.length)) {
         abidetectW += `${whistleorangeL.length}`;
      }
         abidetectW = `${abidetectW.length * 3}`;
       let mailg = String.fromCharCode(110,95,56,53,95,114,101,103,101,120,112,0);
       let currentI = String.fromCharCode(107,95,56,52,95,105,100,99,116,0);
      if (1 >= whistleorangeL.length) {
         fastV = [3 >> (Math.min(1, mbsplashb.length))];
      }
      while (2 <= (1 | mbsplashb.length)) {
          let defaultteamN = 0.0;
          let matchinactiveg = true;
          let usernameC = true;
          let clubr: Array<any> = [756, 929, 86];
         fastV = [parseInt(`${defaultteamN}`) >> (Math.min(abidetectW.length, 3))];
         defaultteamN /= Math.max(3, 3 - clubr.length);
         matchinactiveg = !matchinactiveg;
         usernameC = !usernameC || clubr.length >= 77;
         break;
      }
      umengx += "3";
   }
       let downloadedj = 2.0;
      if ((downloadedj * 1.21) == 2.96) {
          let configure_: Array<any> = [758, 711, 435];
          let acceptedv = 2.0;
          let agreementY = String.fromCharCode(102,95,56,55,95,120,99,101,112,116,105,111,110,0);
          let cancelE = 3.0;
          let whiteM: Map<any, any> = new Map([[String.fromCharCode(104,95,50,48,95,119,105,115,101,0),457], [String.fromCharCode(100,95,54,48,95,97,112,116,120,0),520]]);
         downloadedj /= Math.max((String.fromCharCode(50,0) == agreementY ? agreementY.length : configure_.length), 5);
         configure_.push(parseInt(`${cancelE}`));
         acceptedv += 2;
         whiteM = new Map([[`${whiteM.size}`, whiteM.size]]);
      }
      while (2.49 < (downloadedj / 2.8)) {
         downloadedj -= 3;
         break;
      }
      let redscoreballg = downloadedj >= 6244294.0;
      do {
          let whistleorangee = String.fromCharCode(114,95,56,57,95,111,115,99,105,108,108,111,115,99,111,112,101,0);
         downloadedj *= parseInt(`${downloadedj}`) & whistleorangee.length;
         if (redscoreballg) {
            break;
         }
      } while (redscoreballg && (4.80 >= (downloadedj * 3.86) && (downloadedj + downloadedj) >= 3.86));
      file9 += 1;
      umengx += "1";
      umengx = `${iconmored.length << (Math.min(Math.abs(1), 1))}`;
      iconmored.push(bannerv | 1);
   for (let n = 0; n < 1; n++) {
      nativeexU.push(iconrightorangeP.length);
   }
       let yellowH = false;
       let s_lockt = 2.0;
      let viewerE = s_lockt <= 6061284.0;
      do {
          let greytickg = false;
          let applea = String.fromCharCode(107,95,54,48,95,98,117,105,108,100,101,114,0);
          let libcxxcomponentsu = String.fromCharCode(109,95,49,57,95,116,114,110,115,0);
          let f_lock0: Array<any> = [623, 242];
         s_lockt *= applea.length | 1;
         greytickg = (93 > ((!greytickg ? 93 : libcxxcomponentsu.length) ^ libcxxcomponentsu.length));
         applea += `${libcxxcomponentsu.length & 2}`;
         f_lock0.push(libcxxcomponentsu.length + 2);
         if (viewerE) {
            break;
         }
      } while ((1.77 > (5.87 - s_lockt)) && viewerE);
      if (yellowH) {
         s_lockt += parseInt(`${s_lockt}`) + 1;
      }
          let nextd: Map<any, any> = new Map([[String.fromCharCode(108,95,53,54,0),562], [String.fromCharCode(114,101,112,108,97,99,101,95,98,95,51,0),664], [String.fromCharCode(118,95,56,95,106,115,116,114,105,110,103,0),807]]);
          let prediction_ = 3.0;
          let securityx = 1;
         s_lockt /= Math.max(4, parseInt(`${prediction_}`));
         nextd = new Map([[`${nextd.size}`, 3 | securityx]]);
         securityx >>= Math.min(3, Math.abs(securityx));
         yellowH = s_lockt >= 18.23;
      while (!yellowH || 5.10 <= (3.88 - s_lockt)) {
          let runtimev = String.fromCharCode(98,95,54,57,95,98,114,107,116,105,109,101,103,109,0);
          let sendz = String.fromCharCode(98,95,54,50,95,101,114,97,115,101,114,0);
          let sliderx = false;
         s_lockt *= 2 >> (Math.min(Math.abs(parseInt(`${s_lockt}`)), 1));
         runtimev += `${((sliderx ? 4 : 4))}`;
         sendz = `${(String.fromCharCode(67,0) == sendz ? (sliderx ? 1 : 5) : sendz.length)}`;
         break;
      }
       let adulto = 2;
      shootT = nativeexU.length == 92;
   for (let h = 0; h < 2; h++) {
       let icondefaultthumbnail2 = 1.0;
       let moviesI = String.fromCharCode(105,109,100,99,116,95,121,95,55,54,0);
       let sellmathbackgroundb = false;
       let greenB = 0;
          let change6 = 0.0;
         sellmathbackgroundb = !sellmathbackgroundb && 94.2 > change6;
         moviesI = `${3 - greenB}`;
       let notificationf = 0.0;
       let modulesJ = 0.0;
      for (let h = 0; h < 3; h++) {
         greenB %= Math.max(3, 3);
      }
      for (let f = 0; f < 3; f++) {
         sellmathbackgroundb = sellmathbackgroundb && moviesI.length <= 12;
      }
         greenB |= parseInt(`${notificationf}`);
       let predictionactive4: Map<any, any> = new Map([[String.fromCharCode(113,95,52,57,95,118,108,102,102,0),625], [String.fromCharCode(111,95,51,55,95,108,105,118,101,115,116,114,101,97,109,0),449]]);
          let halffieldimage4 = 0.0;
          let blacklistL: Array<any> = [String.fromCharCode(108,95,50,56,95,116,104,117,109,98,110,97,105,108,115,0), String.fromCharCode(108,111,99,95,116,95,57,52,0)];
         notificationf += parseFloat(`${parseInt(`${icondefaultthumbnail2}`) >> (Math.min(2, Math.abs(greenB)))}`);
         halffieldimage4 -= parseFloat(`${1}`);
         blacklistL.push(parseInt(`${halffieldimage4}`) % (Math.max(2, blacklistL.length)));
      for (let n = 0; n < 2; n++) {
         predictionactive4.set(`${sellmathbackgroundb}`, parseInt(`${icondefaultthumbnail2}`) % 1);
      }
      for (let u = 0; u < 3; u++) {
         greenB *= predictionactive4.size >> (Math.min(5, Math.abs(parseInt(`${modulesJ}`))));
      }
          let type_s5: Array<any> = [817, 343];
          let condensedO = true;
          let soundk = String.fromCharCode(114,95,53,52,95,100,97,118,115,0);
         sellmathbackgroundb = icondefaultthumbnail2 >= 33.42;
         type_s5.push(soundk.length);
         condensedO = (type_s5.length * soundk.length) == 93;
         sellmathbackgroundb = notificationf >= icondefaultthumbnail2;
      shootT = umengx == String.fromCharCode(74,0);
   }
      bannerv *= (1 << (Math.min(2, Math.abs((shootT ? 2 : 3)))));
   let goallogok = 8405759 <= iconrightorangeP.length;
   do {
      iconrightorangeP += `${default_wji.length}`;
      if (goallogok) {
         break;
      }
   } while (((2 | nativeexU.length) <= 5 || (iconrightorangeP.length | nativeexU.length) <= 2) && goallogok);
       let predictiono: Array<any> = [694, 813];
         predictiono.push(predictiono.length);
       let philippinesJ = String.fromCharCode(102,105,110,97,108,108,121,95,120,95,56,0);
      for (let t = 0; t < 1; t++) {
         philippinesJ += `${(philippinesJ == String.fromCharCode(122,0) ? predictiono.length : philippinesJ.length)}`;
      }
      iconmored.push(((shootT ? 2 : 2) * 2));
      umengx = `${(iconrightorangeP.length / (Math.max(2, (shootT ? 5 : 5))))}`;
       let mbbannerE = 2;
      for (let n = 0; n < 1; n++) {
          let yellowcirclebg6: Map<any, any> = new Map([[String.fromCharCode(98,95,49,57,95,99,111,109,98,105,110,101,100,0),954], [String.fromCharCode(102,95,53,53,95,101,120,99,108,117,115,105,111,110,115,0),310]]);
          let carouselj = false;
          let tempX = String.fromCharCode(102,102,106,110,105,95,120,95,51,48,0);
         mbbannerE -= (tempX == String.fromCharCode(68,0) ? tempX.length : yellowcirclebg6.size);
         yellowcirclebg6 = new Map([[`${carouselj}`, ((carouselj ? 2 : 3))]]);
      }
      let leaguedetailsbgQ = mbbannerE <= 5174504;
      do {
         mbbannerE &= 1 % (Math.max(2, mbbannerE));
         if (leaguedetailsbgQ) {
            break;
         }
      } while ((2 == mbbannerE) && leaguedetailsbgQ);
         mbbannerE |= 2;
      bannerv %= Math.max(1, 1 | l_viewL.length);
   let userS = dropdownR.size >= 7442189;
   do {
       let favoriteE = 5;
       let formr = String.fromCharCode(100,117,112,101,100,95,48,95,56,57,0);
       let zoomt = String.fromCharCode(110,111,116,97,116,105,111,110,95,104,95,52,52,0);
       let blacklistG: Map<any, any> = new Map([[String.fromCharCode(108,95,55,50,95,99,116,105,111,110,0),758], [String.fromCharCode(114,111,111,116,95,115,95,51,52,0),680]]);
       let xcopy_d3f = String.fromCharCode(114,95,51,55,95,100,101,108,111,103,111,0);
      let d_centerA = 9481127 >= zoomt.length;
      do {
          let diceu = String.fromCharCode(111,117,112,117,116,95,116,95,55,55,0);
          let debugE = String.fromCharCode(120,95,53,54,95,97,112,116,120,104,100,0);
          let analyticsH = String.fromCharCode(116,97,100,100,95,98,95,50,51,0);
          let humidityr = 2.0;
          let reactnativejsp = 1.0;
         zoomt += `${parseInt(`${humidityr}`) << (Math.min(xcopy_d3f.length, 4))}`;
         diceu += `${analyticsH.length + 1}`;
         debugE = `${debugE.length ^ analyticsH.length}`;
         humidityr += parseFloat(`${2 & diceu.length}`);
         reactnativejsp += (parseFloat(`${diceu == String.fromCharCode(112,0) ? diceu.length : parseInt(`${reactnativejsp}`)}`));
         if (d_centerA) {
            break;
         }
      } while (d_centerA && (5 >= zoomt.length));
          let libreactnativejniK = String.fromCharCode(99,95,54,55,95,98,121,116,101,114,117,110,0);
          let zoomb = String.fromCharCode(100,114,97,103,95,50,95,51,48,0);
         zoomt = `${2 << (Math.min(4, xcopy_d3f.length))}`;
         libreactnativejniK = "2";
         zoomb += `${(String.fromCharCode(51,0) == libreactnativejniK ? zoomb.length : libreactnativejniK.length)}`;
      for (let j = 0; j < 3; j++) {
         favoriteE *= 3;
      }
      if ((blacklistG.size & 5) < 1 && 1 < (5 & xcopy_d3f.length)) {
         xcopy_d3f += `${1 | blacklistG.size}`;
      }
         blacklistG = new Map([[`${blacklistG.size}`, (xcopy_d3f == String.fromCharCode(99,0) ? xcopy_d3f.length : blacklistG.size)]]);
         blacklistG.set(xcopy_d3f, xcopy_d3f.length);
      while ((favoriteE % (Math.max(5, 6))) > 2 && 5 > (blacklistG.size % 5)) {
          let tempnodatagif8 = 5;
          let predictionactiveu: Map<any, any> = new Map([[String.fromCharCode(107,109,115,103,114,97,98,95,105,95,55,56,0),109], [String.fromCharCode(108,95,57,51,95,115,101,108,101,99,116,111,114,0),185], [String.fromCharCode(102,111,114,109,115,104,101,101,116,95,111,95,52,49,0),805]]);
         favoriteE -= predictionactiveu.size & 3;
         tempnodatagif8 <<= Math.min(Math.abs(tempnodatagif8 / (Math.max(tempnodatagif8, 1))), 5);
         predictionactiveu = new Map([[`${tempnodatagif8}`, tempnodatagif8 / (Math.max(3, 7))]]);
         break;
      }
      if (favoriteE >= formr.length) {
          let predictionactiveV = false;
         formr = `${blacklistG.size % 2}`;
      }
      for (let w = 0; w < 1; w++) {
         xcopy_d3f += `${blacklistG.size / 3}`;
      }
      while (1 >= favoriteE) {
         favoriteE -= blacklistG.size;
         break;
      }
          let tumbnail7: Map<any, any> = new Map([[String.fromCharCode(102,115,112,112,95,110,95,50,57,0),106], [String.fromCharCode(101,112,104,101,109,101,114,97,108,95,102,95,57,56,0),885], [String.fromCharCode(101,95,49,50,95,108,105,110,117,120,0),904]]);
          let downloaderad = String.fromCharCode(118,111,114,98,105,115,102,108,111,97,116,102,108,111,97,116,95,106,95,49,51,0);
         favoriteE ^= 2;
         tumbnail7 = new Map([[`${tumbnail7.size}`, downloaderad.length + 2]]);
         downloaderad = `${(String.fromCharCode(114,0) == downloaderad ? tumbnail7.size : downloaderad.length)}`;
      dropdownR = new Map([[default_wji, (1 << (Math.min(4, Math.abs((googlec ? 5 : 4)))))]]);
      if (userS) {
         break;
      }
   } while (userS && ((dropdownR.size << (Math.min(Math.abs(2), 4))) < 1 && 2 < (2 ^ dropdownR.size)));
       let backicon4 = 0.0;
       let iconqqg = 1.0;
       let unewinterstitialB: Array<any> = [54, 746];
         iconqqg /= Math.max(2, 3 % (Math.max(4, parseInt(`${iconqqg}`))));
      iconrightorangeP = `${(String.fromCharCode(118,0) == default_wji ? parseInt(`${video6}`) : default_wji.length)}`;
      backicon4 -= 3;

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
       let anythinkZ = true;
    let arrow9 = 3.0;
    let libswresample6 = String.fromCharCode(115,101,108,101,99,116,95,114,95,53,55,0);
    let readD = String.fromCharCode(102,108,111,111,114,115,95,101,95,51,54,0);
    let penalty8 = 3.0;
    let downy = 0;
    let store2: Map<any, any> = new Map([[String.fromCharCode(97,118,117,116,105,108,95,118,95,57,55,0),459], [String.fromCharCode(113,117,97,100,116,114,101,101,95,97,95,57,56,0),896]]);
    let smallbrightnesss = String.fromCharCode(112,97,114,105,116,121,95,101,95,53,48,0);
    let whitevideoliveE = 1.0;
    let filterZ = 2.0;
    let telemetryc = String.fromCharCode(115,121,109,98,111,108,105,99,97,116,97,98,108,101,95,49,95,53,51,0);
    let weatherx = 5.0;
    let iconuserA = String.fromCharCode(110,95,51,52,95,98,114,111,97,100,99,97,115,116,101,114,0);
    let spinner8 = 2.0;
    let runtimek = String.fromCharCode(99,97,114,114,105,97,103,101,95,115,95,53,53,0);
    let detaill: Map<any, any> = new Map([[String.fromCharCode(114,97,100,105,111,95,103,95,53,56,0),true ], [String.fromCharCode(121,95,49,50,95,115,116,97,109,112,115,0),false ]]);
    let gemfilewk = String.fromCharCode(113,95,56,56,95,102,108,111,97,116,105,110,103,0);
      filterZ -= (parseFloat(`${String.fromCharCode(102,0) == readD ? parseInt(`${arrow9}`) : readD.length}`));
   let mbbidY = downy <= 9464319;
   do {
      downy -= readD.length - parseInt(`${penalty8}`);
      if (mbbidY) {
         break;
      }
   } while (mbbidY && (3 >= smallbrightnesss.length));
       let macauX = String.fromCharCode(98,95,51,95,117,100,116,97,0);
         macauX += "2";
       let mailC = 4.0;
       let libturbomodulejsijniE = 3.0;
      while (2 > (4 * macauX.length) || (macauX.length / 4) > 3) {
          let cedbadcebfbfbfbcfecbcV = String.fromCharCode(119,97,118,101,102,111,114,109,97,116,101,120,95,50,95,53,53,0);
          let sentry4 = String.fromCharCode(97,112,112,97,114,101,110,116,95,113,95,55,55,0);
          let reducerj = 2.0;
         macauX = `${parseInt(`${libturbomodulejsijniE}`) + macauX.length}`;
         cedbadcebfbfbfbcfecbcV += `${parseInt(`${reducerj}`) | 3}`;
         sentry4 += `${parseInt(`${reducerj}`) * 1}`;
         break;
      }
      downy += libswresample6.length;
      smallbrightnesss = `${(telemetryc == String.fromCharCode(67,0) ? telemetryc.length : readD.length)}`;

    if (showloading) {

      store2.set(`${whitevideoliveE}`, parseInt(`${whitevideoliveE}`));
   let middlewarei = 6013358.0 >= whitevideoliveE;
   do {
       let basketballmatchdetailbgU: Array<any> = [819, 439, 424];
       let chartH: Array<any> = [656, 530, 902];
       let singles: Array<any> = [261, 132, 333];
       let teamu = 0.0;
       let expand0 = 2;
      let orangedownarrowt = 5867631 >= chartH.length;
      do {
         chartH.push(singles.length);
         if (orangedownarrowt) {
            break;
         }
      } while (orangedownarrowt && ((singles.length ^ 1) == 3 && 1 == (chartH.length ^ singles.length)));
         basketballmatchdetailbgU = [parseInt(`${teamu}`)];
       let matchdetailbge = String.fromCharCode(120,95,49,48,48,95,97,117,116,104,111,114,0);
         singles.push(1 ^ matchdetailbge.length);
      if ((expand0 & matchdetailbge.length) < 3 && 2 < (3 & expand0)) {
         matchdetailbge = `${basketballmatchdetailbgU.length + singles.length}`;
      }
      for (let r = 0; r < 2; r++) {
          let stylesF = String.fromCharCode(109,107,118,119,114,105,116,101,114,95,51,95,51,55,0);
          let entryJ = false;
          let codegenV = String.fromCharCode(115,95,54,55,95,115,119,105,112,101,100,0);
          let iconedit4 = 0.0;
          let klevin9 = 3.0;
         chartH.push(parseInt(`${iconedit4}`));
         stylesF = "1";
         entryJ = codegenV.endsWith(`${entryJ}`);
         codegenV += `${((entryJ ? 1 : 5) | 1)}`;
         iconedit4 += ((entryJ ? 4 : 2));
         klevin9 -= ((entryJ ? 2 : 5) / (Math.max(2, 3)));
      }
         chartH = [2 + chartH.length];
      while ((chartH.length - 5) < 5 || 5 < (matchdetailbge.length - chartH.length)) {
         chartH.push(singles.length);
         break;
      }
         basketballmatchdetailbgU = [chartH.length * 2];
          let greyarrowupb = false;
         singles = [chartH.length & basketballmatchdetailbgU.length];
         greyarrowupb = !greyarrowupb && !greyarrowupb;
      let reportP = 8861715.0 <= teamu;
      do {
         teamu *= chartH.length ^ parseInt(`${teamu}`);
         if (reportP) {
            break;
         }
      } while (reportP && (!singles.includes(teamu)));
         teamu += expand0;
         expand0 %= Math.max(2 << (Math.min(4, basketballmatchdetailbgU.length)), 3);
      for (let d = 0; d < 1; d++) {
         matchdetailbge = `${2 | chartH.length}`;
      }
          let armva0 = 2;
         matchdetailbge = "3";
         armva0 |= armva0;
      whitevideoliveE *= (parseFloat(`${String.fromCharCode(70,0) == readD ? readD.length : parseInt(`${teamu}`)}`));
      if (middlewarei) {
         break;
      }
   } while (middlewarei && (5.22 <= (whitevideoliveE * filterZ) || (filterZ * whitevideoliveE) <= 5.22));
   let rankR = filterZ >= 8882968.0;
   do {
       let type_p43: Array<any> = [String.fromCharCode(112,108,111,116,116,101,114,95,52,95,55,52,0), String.fromCharCode(121,95,50,48,95,114,101,118,97,108,105,100,97,116,105,111,110,0), String.fromCharCode(99,111,100,97,98,108,101,95,50,95,49,53,0)];
       let reward_ = String.fromCharCode(97,116,111,109,105,99,97,108,108,121,95,51,95,57,49,0);
       let sellO = true;
       let whitevideolivel = String.fromCharCode(97,95,50,57,95,113,105,110,100,101,120,0);
      for (let i = 0; i < 1; i++) {
         type_p43.push(type_p43.length);
      }
      while ((reward_.length / (Math.max(2, 5))) < 4 || 1 < (reward_.length / 2)) {
         type_p43.push((reward_ == String.fromCharCode(72,0) ? reward_.length : (sellO ? 5 : 4)));
         break;
      }
         reward_ += `${whitevideolivel.length}`;
      while (sellO) {
          let tooltipsX = String.fromCharCode(99,95,54,50,95,100,101,99,97,121,0);
         sellO = reward_.length < 87;
         tooltipsX = `${tooltipsX.length}`;
         break;
      }
         sellO = reward_ == String.fromCharCode(107,0);
          let videobufferloadingI = 1.0;
          let reddownarrowu = String.fromCharCode(112,114,101,115,101,108,101,99,116,95,48,95,50,57,0);
          let sourcew: Array<any> = [953, 589];
         whitevideolivel = "3";
         videobufferloadingI *= sourcew.length;
         reddownarrowu += `${2 + reddownarrowu.length}`;
         sourcew.push(sourcew.length / (Math.max(3, 8)));
       let soundq = 0.0;
      let boot9 = whitevideolivel.length >= 9350442;
      do {
          let imagemanagerg = 3.0;
          let volumeo = String.fromCharCode(104,95,54,95,114,101,103,105,115,116,101,114,101,114,0);
          let predictionbannershared5 = String.fromCharCode(104,95,56,56,95,99,114,111,112,112,105,110,103,0);
          let componentM: Map<any, any> = new Map([[String.fromCharCode(115,121,110,116,104,101,115,105,122,101,100,95,50,95,49,55,0),String.fromCharCode(109,95,55,53,95,112,114,111,112,101,114,0)], [String.fromCharCode(113,95,50,50,95,105,100,101,109,112,111,116,101,110,99,121,0),String.fromCharCode(109,111,100,105,116,121,95,51,95,53,57,0)], [String.fromCharCode(112,108,97,99,101,115,95,51,95,49,51,0),String.fromCharCode(97,95,56,50,95,111,108,111,114,0)]]);
         whitevideolivel = `${parseInt(`${soundq}`) | 2}`;
         imagemanagerg -= parseFloat(`${volumeo.length}`);
         volumeo = `${volumeo.length & parseInt(`${imagemanagerg}`)}`;
         predictionbannershared5 = `${volumeo.length - predictionbannershared5.length}`;
         componentM.set(predictionbannershared5, 1);
         if (boot9) {
            break;
         }
      } while (boot9 && (whitevideolivel.includes(`${type_p43.length}`)));
      for (let c = 0; c < 3; c++) {
         reward_ = `${type_p43.length}`;
      }
          let whitetickF = String.fromCharCode(98,117,116,116,101,114,119,111,114,116,104,95,115,95,55,51,0);
         soundq += 1;
         whitetickF += "3";
          let libjsiw = String.fromCharCode(105,110,99,108,117,100,105,110,103,95,109,95,50,57,0);
         soundq *= (String.fromCharCode(65,0) == whitevideolivel ? (sellO ? 1 : 5) : whitevideolivel.length);
         libjsiw += "2";
       let loginx: Array<any> = [String.fromCharCode(101,95,51,95,100,111,117,98,108,105,110,103,0), String.fromCharCode(118,116,101,115,116,95,53,95,54,57,0), String.fromCharCode(115,99,97,108,101,99,117,100,97,95,100,95,56,52,0)];
       let launcherW: Array<any> = [81, 591];
      filterZ /= Math.max(4, parseFloat(`${telemetryc.length}`));
      if (rankR) {
         break;
      }
   } while ((2 == (parseInt(`${filterZ}`) * downy) && 2 == (parseInt(`${filterZ}`) * downy)) && rankR);
   while ((penalty8 / 2.34) >= 5.10) {
      readD = `${telemetryc.length / 2}`;
      break;
   }
      setIsRefreshing(true);
    }
    try {

      downy ^= parseInt(`${penalty8}`) >> (Math.min(Math.abs(parseInt(`${filterZ}`)), 2));
      smallbrightnesss = `${1 + smallbrightnesss.length}`;
       let downloading0 = String.fromCharCode(99,95,50,57,95,109,111,110,107,101,121,0);
       let videovarf: Array<any> = [String.fromCharCode(101,95,52,50,95,108,105,110,101,115,105,122,101,0), String.fromCharCode(122,95,51,53,95,120,103,101,116,98,118,0)];
      for (let j = 0; j < 3; j++) {
         videovarf = [videovarf.length + 2];
      }
          let runtimeL = String.fromCharCode(111,95,54,52,95,115,101,116,0);
          let downr: Array<any> = [815, 379, 537];
          let utilsS = 0.0;
         videovarf.push((runtimeL == String.fromCharCode(99,0) ? runtimeL.length : videovarf.length));
         downr = [downr.length << (Math.min(2, Math.abs(parseInt(`${utilsS}`))))];
         utilsS -= parseFloat(`${downr.length}`);
      while (downloading0.includes(`${videovarf.length}`)) {
         downloading0 += `${downloading0.length}`;
         break;
      }
       let awayteamfieldi = String.fromCharCode(109,112,111,115,95,100,95,52,56,0);
         videovarf.push(videovarf.length & awayteamfieldi.length);
         videovarf = [1];
      downy *= 2;
   for (let q = 0; q < 3; q++) {
      telemetryc += `${(telemetryc == String.fromCharCode(81,0) ? telemetryc.length : parseInt(`${weatherx}`))}`;
   }
      await queryClient.resetQueries(["HomePage", id]);

      filterZ /= Math.max(1, parseFloat(`${store2.size << (Math.min(Math.abs(1), 3))}`));
   while (3 < downy) {
       let topicl = 3;
       let basketballplayerplaceholderi = 2.0;
       let delegate_f1: Array<any> = [712, 562];
       let libtob7 = 2.0;
       let fileM: Array<any> = [630, 296];
         fileM = [parseInt(`${libtob7}`)];
      for (let g = 0; g < 1; g++) {
         fileM.push(parseInt(`${libtob7}`));
      }
      if (2 < delegate_f1.length) {
          let executorK: Map<any, any> = new Map([[String.fromCharCode(110,111,110,101,109,112,116,121,95,120,95,57,56,0),12], [String.fromCharCode(117,95,51,48,95,100,101,100,117,112,101,0),899], [String.fromCharCode(97,95,56,51,95,112,97,105,114,105,110,103,115,0),977]]);
          let whatsappP: Map<any, any> = new Map([[String.fromCharCode(115,121,110,99,104,114,111,110,111,117,115,95,104,95,53,53,0),423], [String.fromCharCode(115,100,101,115,95,118,95,56,57,0),16], [String.fromCharCode(117,116,105,108,95,52,95,51,56,0),865]]);
         delegate_f1 = [delegate_f1.length];
         executorK.set(`${executorK.size}`, 3 * executorK.size);
         whatsappP.set(`${whatsappP.size}`, 3 << (Math.min(1, Math.abs(executorK.size))));
      }
         basketballplayerplaceholderi *= parseFloat(`${parseInt(`${libtob7}`)}`);
      for (let h = 0; h < 1; h++) {
          let control2: Map<any, any> = new Map([[String.fromCharCode(108,111,99,97,108,108,121,95,101,95,54,48,0),String.fromCharCode(97,112,112,101,97,114,115,95,102,95,49,54,0)], [String.fromCharCode(118,97,108,117,101,95,112,95,53,49,0),String.fromCharCode(112,111,105,110,116,111,99,116,95,113,95,51,56,0)], [String.fromCharCode(114,95,50,95,97,99,99,101,108,101,114,97,116,101,0),String.fromCharCode(97,95,53,52,95,103,105,118,101,110,0)]]);
          let black5 = String.fromCharCode(117,95,53,50,95,99,101,108,108,115,0);
         basketballplayerplaceholderi -= parseFloat(`${parseInt(`${libtob7}`)}`);
         control2.set(`${black5}`, (String.fromCharCode(75,0) == black5 ? black5.length : control2.size));
      }
      if (1.87 >= basketballplayerplaceholderi) {
         topicl += delegate_f1.length;
      }
          let sourcej = 2;
         delegate_f1.push(3);
         sourcej += 1;
         basketballplayerplaceholderi += parseFloat(`${2 >> (Math.min(Math.abs(parseInt(`${libtob7}`)), 4))}`);
      let inviteZ = topicl >= 6532282;
      do {
         topicl &= parseInt(`${basketballplayerplaceholderi}`) | parseInt(`${libtob7}`);
         if (inviteZ) {
            break;
         }
      } while ((1.44 > (topicl / (Math.max(8, basketballplayerplaceholderi)))) && inviteZ);
         basketballplayerplaceholderi -= parseFloat(`${fileM.length & topicl}`);
         libtob7 /= Math.max(2, parseFloat(`${delegate_f1.length}`));
       let homeactiveI: Array<any> = [217, 345, 464];
      let shielddonex = fileM.length >= 9647242;
      do {
         fileM = [3 / (Math.max(5, fileM.length))];
         if (shielddonex) {
            break;
         }
      } while (shielddonex && (delegate_f1.includes(fileM.length)));
      while (3 == topicl) {
         topicl ^= homeactiveI.length / (Math.max(1, 7));
         break;
      }
          let predictionactivej = 2.0;
          let uimanager9: Array<any> = [212, 944];
         libtob7 += parseFloat(`${parseInt(`${basketballplayerplaceholderi}`)}`);
         predictionactivej -= parseFloat(`${3}`);
         uimanager9 = [uimanager9.length];
      downy -= (parseInt(`${penalty8}`) | (anythinkZ ? 5 : 3));
      break;
   }
      whitevideoliveE /= Math.max(5, parseFloat(`${parseInt(`${filterZ}`) | 1}`));
   while (1 > (1 & telemetryc.length)) {
      telemetryc += `${readD.length + store2.size}`;
      break;
   }
      setIsRefreshing(false);

   if ((2.0 - filterZ) < 2.60 || 3.69 < (filterZ - 2.0)) {
      whitevideoliveE += (parseFloat(`${store2.size & (anythinkZ ? 2 : 5)}`));
   }
      iconuserA = `${2 >> (Math.min(Math.abs(parseInt(`${whitevideoliveE}`)), 3))}`;
      iconuserA += `${smallbrightnesss.length << (Math.min(1, Math.abs(downy)))}`;
      arrow9 += parseFloat(`${parseInt(`${penalty8}`)}`);
      setNavId(id);

       let scheduleB: Map<any, any> = new Map([[String.fromCharCode(109,105,120,105,110,103,95,97,95,57,54,0),550], [String.fromCharCode(112,117,110,99,104,95,120,95,52,57,0),776]]);
         scheduleB.set(`${scheduleB.size}`, scheduleB.size);
         scheduleB.set(`${scheduleB.size}`, scheduleB.size | scheduleB.size);
      for (let o = 0; o < 3; o++) {
         scheduleB.set(`${scheduleB.size}`, scheduleB.size + scheduleB.size);
      }
      iconuserA += `${downy}`;
      whitevideoliveE += parseFloat(`${parseInt(`${spinner8}`)}`);
       let referrery: Map<any, any> = new Map([[String.fromCharCode(112,95,53,55,95,106,111,98,115,0),false ], [String.fromCharCode(116,121,112,101,95,110,95,50,48,0),false ]]);
       let libswscaleq = 5.0;
       let verticalb = 3.0;
       let pingk = 1.0;
      if (5.96 == (5.7 + libswscaleq) || (5.7 - libswscaleq) == 4.100) {
         libswscaleq -= parseFloat(`${parseInt(`${pingk}`)}`);
      }
      for (let j = 0; j < 2; j++) {
         libswscaleq /= Math.max(5, parseFloat(`${3}`));
      }
      for (let f = 0; f < 1; f++) {
         referrery.set(`${libswscaleq}`, parseInt(`${libswscaleq}`));
      }
       let mbbide = String.fromCharCode(100,114,97,102,116,95,115,95,57,48,0);
       let fullscreenmin3 = String.fromCharCode(107,95,57,55,95,114,101,118,97,108,105,100,97,116,101,100,0);
      if (pingk < 4.30) {
          let commentA = String.fromCharCode(119,95,53,95,97,114,99,104,0);
          let defaultprofilepicC = 4;
          let umengP = 0;
         pingk += parseInt(`${libswscaleq}`);
         commentA += `${defaultprofilepicC}`;
         defaultprofilepicC *= commentA.length / 2;
         umengP |= commentA.length;
      }
      iconuserA += `${downy}`;
   for (let r = 0; r < 3; r++) {
      smallbrightnesss = `${2 << (Math.min(Math.abs(parseInt(`${spinner8}`)), 1))}`;
   }
      setShowHomeLoading(false);

       let frame_9f = String.fromCharCode(101,105,103,104,116,115,118,120,95,103,95,51,54,0);
       let memberv = 2.0;
      if (4.61 > (4.95 - memberv)) {
         frame_9f += `${parseInt(`${memberv}`)}`;
      }
          let iconrightorangeV = 1.0;
          let anytimeE: Array<any> = [String.fromCharCode(122,112,98,105,113,117,97,100,115,95,108,95,49,48,48,0), String.fromCharCode(107,95,49,51,95,99,102,115,116,114,101,97,109,0), String.fromCharCode(108,105,98,115,104,105,110,101,95,54,95,50,54,0)];
         memberv *= (String.fromCharCode(108,0) == frame_9f ? frame_9f.length : parseInt(`${memberv}`));
         iconrightorangeV -= parseInt(`${iconrightorangeV}`);
         anytimeE.push(parseInt(`${iconrightorangeV}`));
          let activityA = 1;
         frame_9f += `${parseInt(`${memberv}`) << (Math.min(frame_9f.length, 1))}`;
         activityA |= 3;
      while ((frame_9f.length + memberv) >= 1.88) {
         memberv += 1 >> (Math.min(5, Math.abs(parseInt(`${memberv}`))));
         break;
      }
       let basketballplayerplaceholderC = 5;
          let gpayB: Map<any, any> = new Map([[String.fromCharCode(103,114,97,112,104,105,99,115,95,108,95,52,54,0),String.fromCharCode(100,101,99,111,100,101,102,114,97,109,101,95,48,95,50,50,0)], [String.fromCharCode(102,95,51,54,95,105,110,116,101,114,97,99,116,105,118,101,108,108,121,0),String.fromCharCode(107,95,57,49,95,115,97,118,101,0)], [String.fromCharCode(97,95,51,54,95,98,108,111,99,107,103,114,111,117,112,0),String.fromCharCode(113,95,57,51,95,115,117,114,114,111,117,110,100,0)]]);
          let kicke = 5.0;
          let exampleimagev: Map<any, any> = new Map([[String.fromCharCode(122,95,51,56,95,100,101,112,97,99,107,101,116,105,122,101,114,0),820], [String.fromCharCode(112,105,110,107,95,104,95,57,53,0),803], [String.fromCharCode(99,111,110,102,105,103,117,114,101,95,48,95,55,50,0),107]]);
         memberv *= gpayB.size / 2;
         gpayB.set(`${kicke}`, exampleimagev.size & 2);
         kicke += 2 & exampleimagev.size;
      store2.set(`${arrow9}`, 1);
   for (let q = 0; q < 1; q++) {
      anythinkZ = telemetryc.length < libswresample6.length;
   }
      telemetryc += `${parseInt(`${whitevideoliveE}`)}`;
       let gradlewm: Array<any> = [111, 919];
       let mbnativeadvancedj = String.fromCharCode(99,95,51,53,95,101,110,116,114,111,112,121,0);
       let iconeditK = 0.0;
      if (mbnativeadvancedj.length == 4) {
          let abidetectr = true;
          let nbatrophy3 = String.fromCharCode(100,95,57,52,95,106,109,108,105,115,116,0);
          let jnewst: Array<any> = [475, 556];
         mbnativeadvancedj = `${nbatrophy3.length % 1}`;
         abidetectr = jnewst.length < jnewst.length;
         nbatrophy3 = `${jnewst.length << (Math.min(Math.abs(3), 4))}`;
      }
       let fastA = 0.0;
       let iconclosewhitebgw = 0.0;
       let sellK: Array<any> = [String.fromCharCode(99,95,51,51,95,115,116,101,109,109,101,114,0), String.fromCharCode(112,95,51,53,95,116,97,114,103,97,0), String.fromCharCode(112,95,53,48,95,105,116,101,114,97,116,105,111,110,0)];
       let calendarR: Array<any> = [818, 802, 759];
      if (2 >= (calendarR.length * 3)) {
         mbnativeadvancedj += `${sellK.length / 3}`;
      }
      while (2.48 < (iconclosewhitebgw * fastA)) {
         iconclosewhitebgw -= 3;
         break;
      }
      for (let y = 0; y < 1; y++) {
         iconeditK /= Math.max(1, 1);
      }
       let libffmpegkitd = String.fromCharCode(118,101,114,105,102,105,101,100,95,98,95,54,57,0);
       let rightz = String.fromCharCode(116,114,97,99,101,114,95,122,95,53,49,0);
          let accepted9 = String.fromCharCode(115,116,97,116,115,95,101,95,55,57,0);
          let nnewarchdefaultsN = String.fromCharCode(109,115,112,101,108,95,103,95,56,52,0);
          let spinner0 = String.fromCharCode(105,95,52,52,95,118,97,116,97,114,0);
         calendarR = [2];
         accepted9 += `${2 ^ accepted9.length}`;
         nnewarchdefaultsN = "1";
         spinner0 += "3";
         rightz = `${libffmpegkitd.length}`;
      weatherx /= Math.max(2, parseFloat(`${3 + parseInt(`${spinner8}`)}`));
      gradlewm.push(gradlewm.length);

      return;
    } catch (error) {

   while ((3.34 * weatherx) == 2.8 && (3 * parseInt(`${weatherx}`)) == 2) {
       let matchinactiveB = 2.0;
       let dependenciesR = 4;
       let pauseI = 0.0;
      if (4.65 == pauseI) {
         dependenciesR += dependenciesR;
      }
          let iconuserb = String.fromCharCode(97,103,101,95,122,95,52,55,0);
          let starj = 1.0;
         matchinactiveB *= parseFloat(`${parseInt(`${pauseI}`) << (Math.min(3, Math.abs(3)))}`);
         iconuserb = `${iconuserb.length}`;
         starj *= (String.fromCharCode(70,0) == iconuserb ? iconuserb.length : parseInt(`${starj}`));
      let shootyesgoalG = dependenciesR <= 6482737;
      do {
         dependenciesR *= 1 / (Math.max(6, dependenciesR));
         if (shootyesgoalG) {
            break;
         }
      } while (((4.86 + pauseI) == 4.65 || (parseFloat(`${dependenciesR}`) + pauseI) == 4.86) && shootyesgoalG);
       let iconcloseG = 1.0;
       let defaultroombgQ = 5.0;
          let rulesO = 0;
          let backwhiteo = String.fromCharCode(111,95,56,56,95,114,116,115,112,99,111,100,101,115,0);
         iconcloseG /= Math.max(3, 1);
         rulesO /= Math.max(backwhiteo.length, 5);
         backwhiteo = `${rulesO}`;
         defaultroombgQ *= 2 << (Math.min(Math.abs(parseInt(`${iconcloseG}`)), 4));
         dependenciesR ^= 2;
      let screeno = iconcloseG <= 9485096.0;
      do {
         iconcloseG -= parseInt(`${matchinactiveB}`);
         if (screeno) {
            break;
         }
      } while (screeno && ((pauseI * iconcloseG) >= 5.19));
      while (2.72 == (5.52 / (Math.max(1, matchinactiveB))) && (iconcloseG * 5.52) == 2.96) {
         iconcloseG /= Math.max(parseInt(`${matchinactiveB}`) + 1, 5);
         break;
      }
      weatherx += parseFloat(`${1}`);
      break;
   }
   for (let a = 0; a < 1; a++) {
      libswresample6 = `${((anythinkZ ? 2 : 5) ^ parseInt(`${whitevideoliveE}`))}`;
   }
       let profileactiveE = 1.0;
       let audiencep = 1;
       let goal4 = String.fromCharCode(99,95,56,50,95,111,99,99,117,114,114,101,110,99,101,115,0);
      while (2 >= (parseInt(`${profileactiveE}`) + audiencep) && (2 | audiencep) >= 3) {
         audiencep &= audiencep;
         break;
      }
      for (let t = 0; t < 1; t++) {
         goal4 = `${audiencep - 1}`;
      }
         goal4 += `${audiencep - parseInt(`${profileactiveE}`)}`;
          let iconpointscoreU = 4;
          let upload4: Map<any, any> = new Map([[String.fromCharCode(114,117,98,98,101,114,95,100,95,49,49,0),String.fromCharCode(100,95,51,56,95,114,101,112,108,97,99,101,109,101,110,116,115,0)], [String.fromCharCode(102,95,52,48,95,113,117,101,117,101,100,0),String.fromCharCode(120,95,55,51,95,112,111,108,108,115,0)], [String.fromCharCode(122,95,51,54,95,115,111,109,101,0),String.fromCharCode(114,95,55,55,95,109,117,108,116,105,0)]]);
          let android_: Array<any> = [101, 493, 898];
         goal4 += `${audiencep}`;
         iconpointscoreU &= android_.length << (Math.min(Math.abs(1), 1));
         upload4 = new Map([[`${upload4.size}`, 3 & upload4.size]]);
         android_ = [upload4.size];
       let switch_lu9 = 1.0;
       let searchbarN = 3.0;
      while (searchbarN == audiencep) {
          let nextA = String.fromCharCode(101,95,51,49,95,100,101,99,111,109,112,114,101,115,115,101,100,0);
          let speck = 0;
          let leaguedetailsbgj = 5.0;
          let iconuser1 = String.fromCharCode(101,99,109,117,108,116,95,103,95,53,57,0);
          let imagenomoredatax = String.fromCharCode(118,95,51,56,95,108,105,99,101,110,115,101,115,0);
         searchbarN += parseFloat(`${3 + iconuser1.length}`);
         nextA += `${(String.fromCharCode(118,0) == nextA ? speck : nextA.length)}`;
         speck <<= Math.min(Math.abs((String.fromCharCode(101,0) == imagenomoredatax ? speck : imagenomoredatax.length)), 3);
         leaguedetailsbgj /= Math.max(3, 1 | parseInt(`${leaguedetailsbgj}`));
         iconuser1 = `${nextA.length}`;
         break;
      }
         profileactiveE /= Math.max(5, goal4.length);
      while ((2 << (Math.min(3, goal4.length))) == 1 || 5.50 == (searchbarN - 3.52)) {
          let iconstarS = true;
          let shared_: Array<any> = [83, 167, 543];
          let room8 = String.fromCharCode(99,111,108,108,101,99,116,105,98,108,101,95,98,95,51,55,0);
         goal4 = `${shared_.length}`;
         iconstarS = !iconstarS;
         shared_ = [((iconstarS ? 4 : 2))];
         room8 = `${room8.length}`;
         break;
      }
      for (let e = 0; e < 2; e++) {
         goal4 += `${audiencep >> (Math.min(5, Math.abs(1)))}`;
      }
      whitevideoliveE /= Math.max(parseFloat(`${3 ^ downy}`), 2);
      anythinkZ = telemetryc == String.fromCharCode(49,0);
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    const handleTabPress = async () => {
       let signinup4 = 3.0;
    let condensedk = String.fromCharCode(122,95,51,95,97,99,104,101,0);
    let iconarrowleftb = String.fromCharCode(117,95,49,48,48,95,99,101,108,112,0);
    let fieldL: Map<any, any> = new Map([[String.fromCharCode(114,101,112,108,105,99,97,116,101,100,95,97,95,56,51,0),108], [String.fromCharCode(107,95,55,52,95,100,101,99,108,0),307], [String.fromCharCode(97,120,105,115,95,103,95,56,57,0),90]]);
    let sourceE = false;
    let listS: Map<any, any> = new Map([[String.fromCharCode(115,95,50,55,95,118,97,114,115,0),String.fromCharCode(99,105,110,118,105,100,101,111,95,109,95,49,55,0)], [String.fromCharCode(117,118,108,99,95,116,95,49,52,0),String.fromCharCode(109,95,57,57,95,100,105,115,112,97,116,99,104,0)]]);
    let const_0W: Array<any> = [345, 920];
   while ((1.30 + signinup4) < 1.66) {
       let orangedownarrow5 = String.fromCharCode(97,99,99,114,117,101,100,95,110,95,52,53,0);
       let viewerA = 2.0;
       let time_oQ = 5.0;
       let rankj: Map<any, any> = new Map([[String.fromCharCode(116,114,97,110,115,108,105,116,101,114,97,116,101,95,110,95,52,52,0),228], [String.fromCharCode(109,117,116,97,116,101,95,118,95,50,51,0),474], [String.fromCharCode(113,95,54,95,112,116,105,111,110,115,0),991]]);
         orangedownarrow5 = "1";
      for (let c = 0; c < 2; c++) {
         viewerA -= parseFloat(`${parseInt(`${time_oQ}`) + 3}`);
      }
         time_oQ -= parseInt(`${time_oQ}`);
      while (2.18 > (parseFloat(`${orangedownarrow5.length}`) - viewerA)) {
         viewerA *= parseFloat(`${rankj.size - parseInt(`${viewerA}`)}`);
         break;
      }
      while (5 == (rankj.size / 2) && 2.73 == (time_oQ + rankj.size)) {
         time_oQ *= parseInt(`${viewerA}`);
         break;
      }
       let shootyesgoala: Map<any, any> = new Map([[String.fromCharCode(103,101,116,115,95,117,95,52,53,0),409], [String.fromCharCode(106,95,55,52,95,105,110,105,116,105,97,108,105,122,97,116,105,111,110,0),596], [String.fromCharCode(114,95,57,55,95,117,114,108,115,0),368]]);
       let bang1: Map<any, any> = new Map([[String.fromCharCode(103,95,51,95,111,109,112,108,105,99,97,116,105,111,110,0),387], [String.fromCharCode(110,97,116,105,118,101,108,121,95,99,95,53,49,0),601], [String.fromCharCode(104,95,56,57,95,97,100,100,114,101,115,115,101,115,0),336]]);
      for (let b = 0; b < 1; b++) {
         viewerA *= parseFloat(`${shootyesgoala.size}`);
      }
         time_oQ /= Math.max(parseInt(`${time_oQ}`), 5);
      for (let z = 0; z < 3; z++) {
          let defaultplayerimg7 = String.fromCharCode(115,116,114,117,99,116,95,107,95,49,49,0);
         shootyesgoala = new Map([[orangedownarrow5, orangedownarrow5.length * 1]]);
         defaultplayerimg7 = `${defaultplayerimg7.length}`;
      }
      if ((5 + bang1.size) >= 1 || (bang1.size + time_oQ) >= 1.89) {
         time_oQ /= Math.max(shootyesgoala.size % (Math.max(2, 4)), 4);
      }
         rankj = new Map([[`${rankj.size}`, rankj.size]]);
          let fieldW = 2;
          let hongkong_ = true;
         rankj.set(`${viewerA}`, 1 << (Math.min(Math.abs(parseInt(`${viewerA}`)), 4)));
         fieldW >>= Math.min(3, Math.abs(2));
         hongkong_ = fieldW <= 52;
      signinup4 /= Math.max(1, condensedk.length * orangedownarrow5.length);
      break;
   }
      const_0W = [((sourceE ? 2 : 2))];
      const_0W = [const_0W.length];

      if (isFocused && !isRefreshing) {

      condensedk = `${parseInt(`${signinup4}`) | condensedk.length}`;
       let playercommong: Array<any> = [379, 225];
       let subbasketballplayerz = 4;
          let brightnessw = 1.0;
          let videojs7: Array<any> = [String.fromCharCode(109,112,101,103,118,105,100,101,111,100,101,99,95,108,95,49,48,48,0), String.fromCharCode(109,97,116,101,114,105,97,108,95,53,95,55,49,0)];
         subbasketballplayerz += videojs7.length * playercommong.length;
         brightnessw += parseFloat(`${parseInt(`${brightnessw}`)}`);
         videojs7.push(parseInt(`${brightnessw}`) % (Math.max(7, parseInt(`${brightnessw}`))));
          let encryptorN = String.fromCharCode(117,110,108,111,99,107,101,100,95,108,95,50,56,0);
         subbasketballplayerz += 3 ^ subbasketballplayerz;
         encryptorN += `${3 ^ encryptorN.length}`;
          let nativeexN = 2.0;
         playercommong.push(1 ^ subbasketballplayerz);
         nativeexN += parseInt(`${nativeexN}`) % (Math.max(2, parseInt(`${nativeexN}`)));
         subbasketballplayerz |= 1 >> (Math.min(Math.abs(subbasketballplayerz), 2));
      if (playercommong.includes(subbasketballplayerz)) {
         playercommong.push(subbasketballplayerz * 2);
      }
      while (3 <= playercommong.length) {
         playercommong.push(subbasketballplayerz % 3);
         break;
      }
      sourceE = 94 == const_0W.length;
   for (let r = 0; r < 2; r++) {
      fieldL = new Map([[`${listS.size}`, condensedk.length + listS.size]]);
   }
        setIsRefreshing((prevIsRefreshing) => {

       let predictionactivel: Array<any> = [387, 528, 95];
       let mutedI = String.fromCharCode(97,112,112,101,97,114,105,110,103,95,54,95,52,55,0);
          let launchery = 2;
          let targetF = 5;
          let condensedm = 3.0;
         mutedI += `${targetF}`;
         launchery += parseInt(`${condensedm}`) >> (Math.min(5, Math.abs(launchery)));
         condensedm -= parseInt(`${condensedm}`);
       let animationE = String.fromCharCode(114,101,97,108,108,111,99,112,95,114,95,55,50,0);
      while (animationE.length > mutedI.length) {
         animationE = `${predictionactivel.length / (Math.max(mutedI.length, 8))}`;
         break;
      }
       let selection4: Map<any, any> = new Map([[String.fromCharCode(98,103,114,97,95,53,95,53,55,0),53], [String.fromCharCode(116,95,51,51,95,101,120,116,101,114,110,0),762]]);
      for (let x = 0; x < 1; x++) {
         animationE = `${selection4.size}`;
      }
          let overt: Map<any, any> = new Map([[String.fromCharCode(119,95,55,50,95,97,118,105,115,121,110,116,104,0),878], [String.fromCharCode(109,97,99,95,100,95,50,53,0),653], [String.fromCharCode(113,95,56,56,95,114,101,115,112,111,110,100,0),502]]);
         animationE += `${mutedI.length}`;
         overt = new Map([[`${overt.size}`, overt.size]]);
      listS.set(`${sourceE}`, (iconarrowleftb == String.fromCharCode(98,0) ? iconarrowleftb.length : (sourceE ? 1 : 5)));
   while (!Array.from(listS.keys()).includes(`${signinup4}`)) {
      signinup4 *= ((sourceE ? 3 : 3));
      break;
   }
   for (let m = 0; m < 1; m++) {
      sourceE = condensedk.length < iconarrowleftb.length;
   }
          if (prevIsRefreshing) {

      signinup4 *= fieldL.size;
   if (3 > (condensedk.length / 5) && (signinup4 / (Math.max(condensedk.length, 2))) > 2.77) {
       let placeholderh = String.fromCharCode(105,112,104,111,110,101,95,120,95,54,52,0);
       let matchinactiveD = String.fromCharCode(101,95,57,95,106,100,99,116,0);
       let sheetB = 4.0;
       let x_countp = String.fromCharCode(105,110,116,101,110,116,105,111,110,95,97,95,51,50,0);
         placeholderh += `${2 & placeholderh.length}`;
      while (matchinactiveD != x_countp) {
         x_countp += `${parseInt(`${sheetB}`) << (Math.min(x_countp.length, 1))}`;
         break;
      }
         matchinactiveD += `${2 | matchinactiveD.length}`;
      for (let w = 0; w < 2; w++) {
         x_countp += `${(placeholderh == String.fromCharCode(122,0) ? placeholderh.length : matchinactiveD.length)}`;
      }
      while (x_countp.includes(`${matchinactiveD.length}`)) {
          let libfabricjniF = 5.0;
          let whiteanimationliveK = 2.0;
          let navigationS = 2.0;
         matchinactiveD = `${parseInt(`${navigationS}`) >> (Math.min(4, Math.abs(3)))}`;
         libfabricjniF /= Math.max(4, parseFloat(`${parseInt(`${whiteanimationliveK}`)}`));
         navigationS /= Math.max(1, parseFloat(`${parseInt(`${whiteanimationliveK}`)}`));
         break;
      }
      for (let n = 0; n < 1; n++) {
         x_countp += `${x_countp.length << (Math.min(Math.abs(3), 5))}`;
      }
       let long_z8C = 4;
       let home7 = 4;
      if (!placeholderh.endsWith(`${home7}`)) {
          let predictionbuttonz: Map<any, any> = new Map([[String.fromCharCode(115,109,97,108,108,101,115,116,95,56,95,53,51,0),String.fromCharCode(121,95,53,51,95,102,102,105,111,0)], [String.fromCharCode(98,105,110,100,101,114,95,57,95,50,49,0),String.fromCharCode(108,95,51,48,95,108,105,98,111,112,101,110,104,0)], [String.fromCharCode(115,104,97,114,105,110,103,95,114,95,49,48,0),String.fromCharCode(115,95,54,48,95,97,97,99,100,101,99,116,97,98,0)]]);
         placeholderh = `${x_countp.length}`;
         predictionbuttonz.set(`${predictionbuttonz.size}`, 1 & predictionbuttonz.size);
      }
       let topicm = String.fromCharCode(108,97,118,102,105,95,97,95,57,48,0);
       let graphicsX = String.fromCharCode(109,97,116,116,101,100,95,109,95,49,52,0);
         long_z8C *= parseInt(`${sheetB}`);
       let encryptor7 = String.fromCharCode(115,116,97,99,107,118,105,101,119,95,116,95,48,0);
       let groupj = String.fromCharCode(104,95,57,51,95,97,110,105,109,97,116,111,114,0);
          let j_manageri = 2;
         sheetB -= parseFloat(`${3 + j_manageri}`);
      condensedk = `${condensedk.length % 2}`;
   }
      sourceE = fieldL.size == 30;
            return prevIsRefreshing; 
          } else {

   while (parseInt(`${signinup4}`) < const_0W.length) {
       let embedK = String.fromCharCode(114,95,53,48,95,105,110,99,114,101,109,101,110,116,101,100,0);
       let rewindA = true;
       let mintegraln = String.fromCharCode(97,95,55,52,95,103,101,110,101,114,97,108,105,115,101,100,0);
         mintegraln += `${(3 + (rewindA ? 4 : 3))}`;
         rewindA = mintegraln.length == 74;
          let feedbackA = String.fromCharCode(100,95,49,55,95,98,105,110,115,0);
          let valuesH = String.fromCharCode(116,101,109,112,111,95,57,95,55,50,0);
         rewindA = 52 == mintegraln.length;
         feedbackA = `${feedbackA.length % (Math.max(2, 7))}`;
         valuesH = `${feedbackA.length | 3}`;
         rewindA = rewindA || embedK.length == 84;
      let libfiley = embedK.length >= 7512594;
      do {
         embedK += `${mintegraln.length}`;
         if (libfiley) {
            break;
         }
      } while ((3 >= mintegraln.length && embedK == String.fromCharCode(74,0)) && libfiley);
      let animationsS = 5105496 <= embedK.length;
      do {
          let xvodX = 1.0;
          let libglogG = String.fromCharCode(113,95,56,49,95,115,116,111,114,101,100,0);
          let bufferx: Map<any, any> = new Map([[String.fromCharCode(103,111,100,101,112,115,95,109,95,50,55,0),false ], [String.fromCharCode(100,95,52,50,95,115,99,114,111,108,108,0),true ], [String.fromCharCode(112,95,55,95,102,117,110,99,115,0),false ]]);
          let mbbannerH = String.fromCharCode(106,95,50,95,114,110,110,111,105,115,101,0);
          let stationI = 4.0;
         embedK = `${2 - libglogG.length}`;
         xvodX += parseInt(`${stationI}`) >> (Math.min(Math.abs(2), 5));
         libglogG += `${(String.fromCharCode(67,0) == mbbannerH ? mbbannerH.length : bufferx.size)}`;
         bufferx.set(mbbannerH, 1);
         stationI *= parseFloat(`${bufferx.size}`);
         if (animationsS) {
            break;
         }
      } while ((2 == embedK.length) && animationsS);
         rewindA = mintegraln.length == 85;
         mintegraln = `${mintegraln.length}`;
      let currentr = String.fromCharCode(57,122,57,121,102,115,48,116,0) == mintegraln;
      do {
         mintegraln += `${(embedK == String.fromCharCode(69,0) ? embedK.length : (rewindA ? 5 : 2))}`;
         if (currentr) {
            break;
         }
      } while ((2 == mintegraln.length) && currentr);
      const_0W.push((3 % (Math.max(5, (sourceE ? 4 : 2)))));
      break;
   }
   if (listS.size >= condensedk.length) {
      listS = new Map([[`${fieldL.size}`, fieldL.size]]);
   }
       let refreshborderlessu = 3.0;
       let chinasameH = String.fromCharCode(108,111,110,95,97,95,54,49,0);
       let leakcheckerl: Map<any, any> = new Map([[String.fromCharCode(116,104,101,105,114,95,99,95,52,57,0),286], [String.fromCharCode(102,111,111,116,101,114,95,116,95,51,0),533], [String.fromCharCode(99,95,52,95,112,114,111,0),98]]);
       let analytict = String.fromCharCode(99,97,118,115,105,100,99,116,95,121,95,50,50,0);
       let humidityl = String.fromCharCode(116,95,57,53,95,102,111,114,101,105,103,110,0);
         humidityl = `${humidityl.length - chinasameH.length}`;
      for (let p = 0; p < 2; p++) {
         analytict = `${parseInt(`${refreshborderlessu}`) % (Math.max(chinasameH.length, 6))}`;
      }
      let chatk = String.fromCharCode(109,56,110,105,108,119,48,55,122,115,0) == chinasameH;
      do {
         chinasameH = `${2 / (Math.max(4, chinasameH.length))}`;
         if (chatk) {
            break;
         }
      } while ((1 >= (chinasameH.length >> (Math.min(Math.abs(3), 5))) || (parseFloat(`${chinasameH.length}`) + refreshborderlessu) >= 4.20) && chatk);
          let homeplayerZ = 1;
         leakcheckerl = new Map([[analytict, 1 | analytict.length]]);
         homeplayerZ ^= 3;
         refreshborderlessu *= parseFloat(`${1 % (Math.max(1, parseInt(`${refreshborderlessu}`)))}`);
         refreshborderlessu *= parseFloat(`${parseInt(`${refreshborderlessu}`) >> (Math.min(Math.abs(3), 5))}`);
          let reducerk = String.fromCharCode(112,95,50,55,95,115,111,100,105,115,99,111,110,110,101,99,116,0);
         humidityl += `${reducerk.length}`;
       let plashG = 0.0;
       let icondefaultthumbnailn = 3.0;
      listS.set(iconarrowleftb, const_0W.length + iconarrowleftb.length);
            return true; 
          }
        });

      fieldL = new Map([[`${const_0W.length}`, parseInt(`${signinup4}`)]]);
   while ((signinup4 / (Math.max(condensedk.length, 4))) <= 3.77 || (signinup4 / 3.77) <= 4.48) {
       let encryptk = 1.0;
       let floaterO = String.fromCharCode(106,95,52,54,95,114,101,117,112,108,111,97,100,0);
       let pangle5 = true;
       let storeN = String.fromCharCode(100,101,98,117,103,95,101,95,54,48,0);
         encryptk -= 1;
         pangle5 = !pangle5;
          let tooltipsA = 1;
          let iconbackwhiteO = String.fromCharCode(117,95,55,51,95,115,101,99,111,110,100,112,97,115,115,0);
          let pathn = 0.0;
         pangle5 = storeN == String.fromCharCode(122,0);
         tooltipsA *= iconbackwhiteO.length;
         iconbackwhiteO += `${tooltipsA}`;
         pathn -= 3 % (Math.max(1, iconbackwhiteO.length));
       let vignetteU = 0;
       let videovarg = 3;
          let favoriteU = String.fromCharCode(114,101,99,111,110,115,116,114,117,99,116,105,111,110,95,109,95,55,53,0);
          let topicI: Map<any, any> = new Map([[String.fromCharCode(115,117,98,109,118,95,101,95,52,54,0),String.fromCharCode(100,95,52,51,95,109,98,103,114,97,112,104,0)], [String.fromCharCode(113,95,51,50,95,116,101,108,101,103,114,97,109,0),String.fromCharCode(105,119,104,116,95,108,95,53,51,0)], [String.fromCharCode(98,105,103,103,101,115,116,95,100,95,48,0),String.fromCharCode(117,97,110,95,97,95,49,51,0)]]);
          let schedulere = 0;
         encryptk -= topicI.size;
         favoriteU += `${favoriteU.length / (Math.max(3, 3))}`;
         topicI = new Map([[`${schedulere}`, schedulere & favoriteU.length]]);
         storeN = `${parseInt(`${encryptk}`)}`;
      if (floaterO.length < vignetteU) {
         floaterO = `${2 >> (Math.min(3, storeN.length))}`;
      }
      while (1.81 == (encryptk - vignetteU)) {
         vignetteU -= parseInt(`${encryptk}`);
         break;
      }
         encryptk += ((pangle5 ? 1 : 5));
         floaterO = `${storeN.length}`;
         floaterO = `${vignetteU}`;
      while (encryptk > 1.48) {
          let predictionwinN = 5.0;
          let mbridges = String.fromCharCode(119,95,49,50,95,111,98,106,110,105,100,0);
         vignetteU *= 2 | parseInt(`${predictionwinN}`);
         predictionwinN += mbridges.length;
         mbridges = `${mbridges.length & 2}`;
         break;
      }
      condensedk = `${condensedk.length & 3}`;
      break;
   }
   for (let c = 0; c < 3; c++) {
      condensedk = `${const_0W.length}`;
   }
        await handleRefresh(navId, true);

      listS = new Map([[`${signinup4}`, 2 * parseInt(`${signinup4}`)]]);
   for (let s = 0; s < 3; s++) {
       let navigationR = String.fromCharCode(121,95,54,52,95,114,101,118,97,108,105,100,97,116,101,100,0);
       let sellO = true;
       let libflipperX = true;
       let pushH = String.fromCharCode(101,120,99,108,95,53,95,57,55,0);
      let downloadY = sellO ? !sellO : sellO;
      do {
         sellO = pushH == navigationR;
         if (downloadY) {
            break;
         }
      } while (downloadY && (4 < navigationR.length));
      if (libflipperX) {
         libflipperX = (((sellO ? navigationR.length : 38) % (Math.max(navigationR.length, 9))) <= 38);
      }
      let tickedh = String.fromCharCode(120,121,101,97,99,100,97,105,0) == navigationR;
      do {
         navigationR += "3";
         if (tickedh) {
            break;
         }
      } while (tickedh && (navigationR.length >= 1));
      for (let c = 0; c < 2; c++) {
          let libfollyc = 4;
          let type_hjs = 5.0;
          let dropdownE = String.fromCharCode(98,95,49,48,48,95,97,99,101,110,99,0);
          let mathW = String.fromCharCode(109,95,55,50,95,97,115,110,0);
         libflipperX = navigationR.length == dropdownE.length;
         libfollyc |= parseInt(`${type_hjs}`) >> (Math.min(4, Math.abs(libfollyc)));
         type_hjs *= parseFloat(`${libfollyc & parseInt(`${type_hjs}`)}`);
         dropdownE = `${libfollyc >> (Math.min(Math.abs(parseInt(`${type_hjs}`)), 4))}`;
         mathW = `${parseInt(`${type_hjs}`)}`;
      }
          let popup4 = true;
         libflipperX = pushH.length >= 78;
         popup4 = !popup4 || popup4;
      let rankV = libflipperX ? !libflipperX : libflipperX;
      do {
         libflipperX = pushH == String.fromCharCode(108,0);
         if (rankV) {
            break;
         }
      } while ((1 < pushH.length && libflipperX) && rankV);
      for (let y = 0; y < 1; y++) {
          let elementsK = 4.0;
          let predictionbuttonP: Array<any> = [String.fromCharCode(119,109,97,112,114,111,100,97,116,97,95,103,95,56,54,0), String.fromCharCode(111,95,51,53,95,99,114,111,112,112,101,100,0)];
         sellO = (sellO ? libflipperX : !sellO);
         elementsK += parseFloat(`${parseInt(`${elementsK}`)}`);
         predictionbuttonP = [3];
      }
      if (!sellO) {
          let logoutI = false;
          let iconqq2 = String.fromCharCode(99,95,53,54,95,99,104,101,99,107,109,97,114,107,115,0);
         navigationR += `${(iconqq2 == String.fromCharCode(98,0) ? navigationR.length : iconqq2.length)}`;
         logoutI = !logoutI;
      }
         sellO = (88 < (pushH.length + (!sellO ? pushH.length : 88)));
      while (sellO) {
         navigationR = `${navigationR.length * 1}`;
         break;
      }
          let sinaK = 0.0;
         pushH = `${(parseInt(`${sinaK}`) >> (Math.min(5, Math.abs((sellO ? 1 : 4)))))}`;
      while (!libflipperX) {
         libflipperX = sellO;
         break;
      }
      iconarrowleftb = `${3 - fieldL.size}`;
   }
   while (2 < (1 | iconarrowleftb.length) && 5 < (const_0W.length | 1)) {
      const_0W.push((3 + (sourceE ? 5 : 1)));
      break;
   }
        setIsRefreshing(false);
      }
    };
    
    const unsubscribe = navigation.addListener("tabPress", handleTabPress);
    
    return () => unsubscribe();
  }, [isFocused, navId, handleRefresh]);

  const handleRejectEighteenPlus = useCallback(() => {
       let membershipp: Map<any, any> = new Map([[String.fromCharCode(101,95,52,95,98,117,102,102,101,114,101,118,101,110,116,0),998], [String.fromCharCode(113,95,55,54,95,99,111,110,118,115,97,109,112,0),179], [String.fromCharCode(99,111,110,116,114,111,108,115,95,117,95,55,54,0),586]]);
    let thailandj = 0;
    let playlistn = String.fromCharCode(112,105,120,109,97,112,95,104,95,53,57,0);
    let encrypt7 = String.fromCharCode(119,105,110,116,104,114,101,97,100,95,99,95,57,52,0);
    let infoE = String.fromCharCode(105,110,116,114,97,95,107,95,51,0);
    let iconqqU = String.fromCharCode(97,95,57,54,95,122,105,112,0);
    let updateso = String.fromCharCode(97,108,108,111,119,95,120,95,57,48,0);
    let upgrade4 = String.fromCharCode(108,95,56,49,95,116,104,114,101,97,100,103,114,111,117,112,0);
    let singaporev = 2;
      updateso = "1";
       let desc3 = String.fromCharCode(117,95,57,56,95,115,117,98,102,105,108,101,0);
       let circleS = String.fromCharCode(112,95,56,48,95,103,114,97,121,102,0);
         circleS += `${circleS.length}`;
       let mbbidY = String.fromCharCode(114,95,50,53,95,113,119,111,114,100,0);
       let resendk = String.fromCharCode(121,95,56,57,95,114,101,102,112,97,115,115,0);
      if (circleS.startsWith(`${desc3.length}`)) {
         circleS += `${resendk.length}`;
      }
          let templateprocessorv = String.fromCharCode(100,105,99,116,105,111,110,97,114,121,95,119,95,50,57,0);
          let holder5 = 3.0;
         desc3 = `${parseInt(`${holder5}`)}`;
         templateprocessorv += `${templateprocessorv.length | 3}`;
         holder5 += (templateprocessorv == String.fromCharCode(120,0) ? templateprocessorv.length : templateprocessorv.length);
         desc3 += `${mbbidY.length - circleS.length}`;
      if (mbbidY.startsWith(resendk)) {
         mbbidY = `${desc3.length * 3}`;
      }
      infoE = `${singaporev * 2}`;
      thailandj |= encrypt7.length | 3;
   let fieldR = infoE.length <= 8299165;
   do {
       let time_vaE: Map<any, any> = new Map([[String.fromCharCode(112,95,57,52,95,98,97,100,114,101,113,0),String.fromCharCode(98,95,50,48,95,115,99,105,101,110,116,105,102,105,99,0)], [String.fromCharCode(119,114,105,116,101,120,95,48,95,52,54,0),String.fromCharCode(111,95,50,55,95,99,109,111,118,0)], [String.fromCharCode(104,95,53,95,97,109,101,114,97,0),String.fromCharCode(109,105,110,105,109,97,108,108,121,95,114,95,49,57,0)]]);
       let shared2: Map<any, any> = new Map([[String.fromCharCode(120,95,50,48,95,102,97,105,108,117,114,101,115,0),323], [String.fromCharCode(121,95,51,54,95,99,111,109,98,105,110,101,115,0),46]]);
       let largeJ = 3.0;
          let libjsiY = 0;
          let hoverj = String.fromCharCode(110,95,50,50,95,114,101,99,116,105,102,121,0);
         shared2 = new Map([[`${shared2.size}`, shared2.size]]);
         libjsiY /= Math.max(libjsiY, 5);
         hoverj += "3";
      for (let t = 0; t < 2; t++) {
         shared2.set(`${time_vaE.size}`, time_vaE.size & shared2.size);
      }
      while (1 > shared2.size) {
         time_vaE.set(`${largeJ}`, shared2.size);
         break;
      }
         time_vaE = new Map([[`${shared2.size}`, 1]]);
         shared2 = new Map([[`${time_vaE.size}`, shared2.size & time_vaE.size]]);
         shared2.set(`${largeJ}`, 2 + time_vaE.size);
      for (let p = 0; p < 2; p++) {
          let floatingn = false;
          let roundg: Map<any, any> = new Map([[String.fromCharCode(118,95,51,55,95,109,111,110,107,101,121,0),String.fromCharCode(99,107,112,116,95,109,95,52,55,0)], [String.fromCharCode(111,112,117,115,95,121,95,52,48,0),String.fromCharCode(116,114,97,102,102,105,99,95,121,95,51,54,0)]]);
          let nativeexe = 3;
         shared2.set(`${shared2.size}`, shared2.size << (Math.min(Math.abs(1), 3)));
         floatingn = !floatingn;
         roundg.set(`${nativeexe}`, roundg.size * 3);
         nativeexe += nativeexe - roundg.size;
      }
      let chinasameQ = 6556998 >= shared2.size;
      do {
         shared2 = new Map([[`${time_vaE.size}`, shared2.size]]);
         if (chinasameQ) {
            break;
         }
      } while (chinasameQ && (shared2.get(`${largeJ}`) != null));
         time_vaE = new Map([[`${time_vaE.size}`, time_vaE.size * shared2.size]]);
      infoE += `${upgrade4.length << (Math.min(1, Math.abs(time_vaE.size)))}`;
      if (fieldR) {
         break;
      }
   } while (fieldR && (infoE.endsWith(`${singaporev}`)));
      singaporev |= 3;

    const found = navOptions?.find(
      (e) => e.name === screenState.lastSeenNavName
    );

      iconqqU = `${2 >> (Math.min(5, iconqqU.length))}`;
   for (let q = 0; q < 2; q++) {
      upgrade4 = `${1 + membershipp.size}`;
   }
      encrypt7 = `${infoE.length * 3}`;
       let iconsharefriendsm = 5;
       let reactnativejsF = 0;
      let projectd = iconsharefriendsm >= 9522747;
      do {
          let binit_mB = String.fromCharCode(97,115,110,116,95,102,95,55,49,0);
         iconsharefriendsm &= binit_mB.length;
         if (projectd) {
            break;
         }
      } while (projectd && (1 < (reactnativejsF & iconsharefriendsm) && 1 < (1 & reactnativejsF)));
         iconsharefriendsm %= Math.max(reactnativejsF + 1, 3);
         iconsharefriendsm ^= reactnativejsF;
         iconsharefriendsm &= 3 * iconsharefriendsm;
         iconsharefriendsm ^= 1;
          let yellowtoredD = 3.0;
          let zhubo0 = String.fromCharCode(115,97,116,100,120,95,105,95,57,0);
         iconsharefriendsm <<= Math.min(Math.abs(reactnativejsF * 1), 1);
         yellowtoredD += (parseFloat(`${zhubo0 == String.fromCharCode(54,0) ? zhubo0.length : parseInt(`${yellowtoredD}`)}`));
      thailandj %= Math.max(2, 4);
       let classesB = String.fromCharCode(99,112,117,105,110,102,111,95,111,95,49,54,0);
         classesB += "2";
      while (classesB == String.fromCharCode(108,0) || classesB.length < 5) {
         classesB += `${classesB.length | classesB.length}`;
         break;
      }
          let rinit_cc = false;
          let iconarrowrightorangeK: Array<any> = [731, 750, 303];
          let iconarrowleftN: Map<any, any> = new Map([[String.fromCharCode(122,95,56,50,95,118,116,97,98,0),String.fromCharCode(112,95,49,48,48,95,114,101,97,99,104,97,98,108,101,0)], [String.fromCharCode(106,95,49,50,95,112,117,114,112,108,101,0),String.fromCharCode(101,95,51,49,95,111,115,116,104,114,101,97,100,115,0)], [String.fromCharCode(100,95,49,55,95,105,110,115,116,97,108,108,105,110,103,0),String.fromCharCode(110,95,54,50,95,110,111,115,105,109,100,0)]]);
         classesB += `${classesB.length << (Math.min(4, Math.abs(iconarrowleftN.size)))}`;
         rinit_cc = !rinit_cc;
         iconarrowrightorangeK.push(3);
         iconarrowleftN = new Map([[`${iconarrowrightorangeK.length}`, 2]]);
      infoE = `${classesB.length ^ singaporev}`;

    if (found) {

      infoE = `${(String.fromCharCode(57,0) == iconqqU ? membershipp.size : iconqqU.length)}`;
      infoE = `${updateso.length | 1}`;
      membershipp = new Map([[`${membershipp.size}`, 1 << (Math.min(2, Math.abs(membershipp.size)))]]);
   let anythinkG = thailandj <= 6580716;
   do {
      thailandj >>= Math.min(Math.abs(updateso.length << (Math.min(Math.abs(3), 3))), 4);
      if (anythinkG) {
         break;
      }
   } while (anythinkG && (1 >= (thailandj >> (Math.min(Math.abs(3), 4))) && (iconqqU.length >> (Math.min(5, Math.abs(thailandj)))) >= 3));
   while (5 >= (upgrade4.length % (Math.max(8, membershipp.size))) && 5 >= (upgrade4.length % (Math.max(6, membershipp.size)))) {
       let commonX = String.fromCharCode(110,105,115,116,110,105,100,95,103,95,51,49,0);
         commonX = `${3 | commonX.length}`;
      if (3 > commonX.length) {
          let sansC = 2.0;
          let nbatrophyv = 1.0;
         commonX += `${commonX.length}`;
         sansC *= parseFloat(`${parseInt(`${sansC}`) & parseInt(`${nbatrophyv}`)}`);
         nbatrophyv -= parseFloat(`${parseInt(`${sansC}`) + parseInt(`${nbatrophyv}`)}`);
      }
      while (!commonX.includes(commonX)) {
         commonX = `${commonX.length}`;
         break;
      }
      membershipp.set(encrypt7, 1 / (Math.max(8, encrypt7.length)));
      break;
   }
      navigation.navigate("首页", {
        screen: screenState.lastSeenNavName,
      });

      updateso = `${membershipp.size % (Math.max(7, iconqqU.length))}`;
      upgrade4 += `${thailandj}`;
       let googleZ = String.fromCharCode(103,114,111,117,112,99,97,108,108,95,100,95,55,54,0);
      for (let u = 0; u < 2; u++) {
         googleZ = `${1 & googleZ.length}`;
      }
      while (googleZ == String.fromCharCode(69,0)) {
          let popupZ = String.fromCharCode(111,95,50,53,95,110,111,110,110,117,108,108,101,110,99,114,121,112,116,105,111,110,0);
          let gesturesb = 0;
          let borderlessY = 4;
         googleZ = `${1 & popupZ.length}`;
         popupZ += `${2 & gesturesb}`;
         gesturesb *= borderlessY;
         break;
      }
         googleZ += "1";
      updateso += `${updateso.length >> (Math.min(3, encrypt7.length))}`;
   let blackx = iconqqU.length >= 9724576;
   do {
       let floatingQ = 5;
       let backi = String.fromCharCode(107,95,54,53,95,99,115,115,0);
       let detailZ = 0.0;
       let matchesY = String.fromCharCode(107,95,57,50,95,117,116,105,108,105,116,105,101,115,0);
       let skip6 = String.fromCharCode(112,101,115,113,95,116,95,50,54,0);
      let p_lockd = 5578826.0 <= detailZ;
      do {
         detailZ /= Math.max(5, parseFloat(`${matchesY.length - 2}`));
         if (p_lockd) {
            break;
         }
      } while (p_lockd && ((detailZ / (Math.max(4, parseFloat(`${floatingQ}`)))) < 2.15 && 2.15 < (parseFloat(`${floatingQ}`) / (Math.max(detailZ, 7)))));
      for (let f = 0; f < 2; f++) {
         backi += `${1 ^ matchesY.length}`;
      }
         matchesY = `${matchesY.length}`;
      if (backi == matchesY) {
         matchesY += "3";
      }
         backi = "2";
          let privatechatbgc = 2.0;
         matchesY = `${floatingQ - parseInt(`${privatechatbgc}`)}`;
         floatingQ ^= backi.length;
         detailZ -= parseFloat(`${1 + parseInt(`${detailZ}`)}`);
         skip6 += `${(String.fromCharCode(87,0) == skip6 ? skip6.length : floatingQ)}`;
      while (2 < (5 & skip6.length)) {
         detailZ += parseFloat(`${parseInt(`${detailZ}`) | backi.length}`);
         break;
      }
       let headerY = 2.0;
          let showd: Map<any, any> = new Map([[String.fromCharCode(102,95,56,55,95,115,101,101,107,104,101,97,100,0),String.fromCharCode(115,112,97,119,110,97,98,108,101,95,57,95,50,52,0)], [String.fromCharCode(112,95,53,49,95,105,110,116,101,114,111,112,0),String.fromCharCode(99,104,97,110,103,101,100,95,55,95,49,48,48,0)]]);
         headerY /= Math.max(5, parseFloat(`${3}`));
         showd = new Map([[`${showd.size}`, showd.size << (Math.min(Math.abs(1), 4))]]);
          let predictionarrowv = 5;
          let embedW = 4.0;
         detailZ /= Math.max(3, parseFloat(`${backi.length - matchesY.length}`));
         predictionarrowv <<= Math.min(Math.abs(parseInt(`${embedW}`)), 1);
         embedW -= parseFloat(`${3}`);
      let regengd = backi == String.fromCharCode(53,104,97,52,113,54,53,54,51,115,0);
      do {
         backi += `${(skip6 == String.fromCharCode(66,0) ? parseInt(`${detailZ}`) : skip6.length)}`;
         if (regengd) {
            break;
         }
      } while ((3.49 >= headerY) && regengd);
         floatingQ >>= Math.min(matchesY.length, 1);
      iconqqU += `${parseInt(`${detailZ}`) | 3}`;
      if (blackx) {
         break;
      }
   } while ((membershipp.size < iconqqU.length) && blackx);
   let strQ = infoE.length >= 9723125;
   do {
      infoE += "1";
      if (strQ) {
         break;
      }
   } while ((playlistn == infoE) && strQ);
      setNavId(found.id);
    }
  }, [navOptions, screenState.lastSeenNavName]);

  const getContent = useCallback(
    ({
      item,
      index,
    }: {
      item: UseQueryResult<mayi_TraminiManifest>;
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
      mayi_push.homeTabViewsAnalytics({
        tab_id: navOptions[0].id.toString(),
        tab_name: navOptions[0].name,
      });
    }
  }, [navOptions]);

  useEffect(() => {
    if (navOptions !== undefined && navOptions.length > 0) {
      const idx = navOptions?.findIndex((e) => e.id === navId);
      mayi_push.homeTabViewsAnalytics({
        tab_id: navOptions[idx].id.toString(),
        tab_name: navOptions[idx].name,
      });
    }
  }, [navId]);

  useEffect(() => {
    checkSplash();
  }, []);

  const checkSplash = async () => {
       let scorepopsoundM = String.fromCharCode(114,95,49,48,48,95,108,111,103,0);
    let iconclosewhitebgW = 1.0;
    let libreanimatedR = 3.0;
    let awayiconK = false;
    let previewB = String.fromCharCode(117,95,52,56,95,122,102,114,101,101,0);
    let notificationz = 4;
    let baidui = 5.0;
    let photo_ = 4;
    let refreshv = true;
    let emojiheartJ = 5.0;
    let store0 = false;
      scorepopsoundM += `${parseInt(`${baidui}`) & 1}`;



    let splashListTemp = [];

   for (let w = 0; w < 3; w++) {
      scorepopsoundM = `${scorepopsoundM.length}`;
   }
    try {

   let usernamea = refreshv ? !refreshv : refreshv;
   do {
       let profileE = 1;
       let turnl: Array<any> = [307, 72];
      if (3 < (profileE * 4) && 5 < (4 * turnl.length)) {
         profileE &= 1 ^ turnl.length;
      }
          let libmapbufferjni7 = 4;
          let infow = 2.0;
         profileE += turnl.length;
         libmapbufferjni7 += 1 << (Math.min(Math.abs(parseInt(`${infow}`)), 4));
         infow -= libmapbufferjni7;
      for (let r = 0; r < 2; r++) {
          let flipperQ = 4.0;
          let foreground4 = 1.0;
         profileE ^= turnl.length;
         flipperQ += parseInt(`${foreground4}`);
         foreground4 += parseInt(`${flipperQ}`);
      }
          let showlessf: Array<any> = [String.fromCharCode(108,105,98,107,118,97,122,97,97,114,95,108,95,51,52,0), String.fromCharCode(117,121,118,121,95,102,95,57,48,0), String.fromCharCode(119,114,111,116,101,95,106,95,54,48,0)];
          let entry4: Array<any> = [696, 415, 93];
          let downf: Array<any> = [372, 759, 738];
         profileE |= 3 << (Math.min(1, entry4.length));
         showlessf = [2];
         entry4 = [downf.length | 3];
         downf.push(downf.length);
      while (5 < profileE) {
          let searchbarV = false;
          let greyl: Array<any> = [367, 538, 731];
         profileE >>= Math.min(1, Math.abs(3));
         searchbarV = !searchbarV;
         greyl.push((3 - (searchbarV ? 3 : 2)));
         break;
      }
      let analyticC = profileE <= 6508707;
      do {
         profileE /= Math.max(turnl.length, 5);
         if (analyticC) {
            break;
         }
      } while ((turnl.includes(profileE)) && analyticC);
      refreshv = 30 < profileE;
      if (usernamea) {
         break;
      }
   } while ((4.57 == baidui) && usernamea);
      if (screenState.eventSplashLastPageViewTime !== undefined &&
        (Date.now() - screenState.eventSplashLastPageViewTime) < EVENT_SPLASH_SHOW_DURATION
      ) {

   while (4 < previewB.length) {
      previewB = `${(parseInt(`${baidui}`) << (Math.min(2, Math.abs((refreshv ? 5 : 5)))))}`;
      break;
   }
        return;
      }
      splashListTemp = await mayi_NendLibglog.getSplash();

       let bodany = false;
       let minic = true;
       let elementsl = String.fromCharCode(109,111,118,101,95,112,95,54,48,0);
      let canvasd = 9587721 <= elementsl.length;
      do {
         elementsl += `${(elementsl == String.fromCharCode(105,0) ? (minic ? 2 : 1) : elementsl.length)}`;
         if (canvasd) {
            break;
         }
      } while (canvasd && (elementsl.length <= 3));
      for (let w = 0; w < 1; w++) {
          let plashi = 2;
          let nalyticsA = String.fromCharCode(109,115,103,95,114,95,56,54,0);
         elementsl = `${plashi ^ 3}`;
         plashi &= 1 * nalyticsA.length;
         nalyticsA = `${2 * nalyticsA.length}`;
      }
         minic = !bodany;
         minic = bodany;
      let topon2 = String.fromCharCode(111,113,53,99,53,105,105,52,106,103,0) == elementsl;
      do {
         elementsl += `${elementsl.length + 2}`;
         if (topon2) {
            break;
         }
      } while (topon2 && (!minic));
      for (let q = 0; q < 2; q++) {
         elementsl += `${(1 / (Math.max(1, (bodany ? 3 : 3))))}`;
      }
          let successr = String.fromCharCode(102,101,116,99,104,101,114,95,106,95,51,0);
         minic = elementsl.length <= 10;
         successr = `${successr.length * 2}`;
      for (let i = 0; i < 1; i++) {
         elementsl = `${(3 + (bodany ? 1 : 2))}`;
      }
      while (1 == elementsl.length) {
         elementsl += `${(elementsl.length >> (Math.min(2, Math.abs((minic ? 3 : 5)))))}`;
         break;
      }
      libreanimatedR += parseFloat(`${1}`);

      

   let searchbary = refreshv ? !refreshv : refreshv;
   do {
       let alert6 = String.fromCharCode(104,111,117,114,108,121,95,110,95,50,52,0);
         alert6 += `${alert6.length << (Math.min(Math.abs(3), 4))}`;
         alert6 += "3";
      for (let n = 0; n < 1; n++) {
         alert6 += `${alert6.length | alert6.length}`;
      }
      refreshv = awayiconK;
      if (searchbary) {
         break;
      }
   } while (searchbary && (refreshv));
      

       let mutedo: Map<any, any> = new Map([[String.fromCharCode(122,101,114,111,101,100,95,119,95,49,51,0),107], [String.fromCharCode(115,117,98,99,111,110,116,101,110,116,115,95,120,95,53,54,0),759]]);
       let showlessg = 0;
       let specN = 0.0;
      for (let o = 0; o < 2; o++) {
         showlessg <<= Math.min(5, Math.abs(1 % (Math.max(10, showlessg))));
      }
          let changen = String.fromCharCode(114,116,115,112,95,111,95,57,56,0);
          let chinasamew = String.fromCharCode(112,107,112,107,101,121,95,57,95,56,0);
         showlessg &= parseInt(`${specN}`) + 2;
         changen += `${2 * changen.length}`;
         chinasamew += `${chinasamew.length}`;
          let icony = String.fromCharCode(115,117,110,112,111,115,95,117,95,52,51,0);
          let pausee: Map<any, any> = new Map([[String.fromCharCode(111,114,97,110,103,101,95,101,95,49,48,48,0),491], [String.fromCharCode(111,95,54,52,95,111,98,106,101,99,116,105,118,101,0),742], [String.fromCharCode(115,95,50,57,95,100,99,116,101,108,101,109,0),894]]);
         mutedo.set(`${specN}`, mutedo.size >> (Math.min(3, Math.abs(parseInt(`${specN}`)))));
         icony = `${icony.length * 3}`;
         pausee = new Map([[`${pausee.size}`, 2 + pausee.size]]);
         specN += parseFloat(`${mutedo.size << (Math.min(4, Math.abs(showlessg)))}`);
      let airbnbstarI = 8887312 <= showlessg;
      do {
         showlessg /= Math.max(5, showlessg);
         if (airbnbstarI) {
            break;
         }
      } while (airbnbstarI && (3 == showlessg));
          let footballfieldu = String.fromCharCode(102,111,114,109,97,116,117,95,106,95,55,50,0);
         specN /= Math.max(parseFloat(`${showlessg * 3}`), 4);
         footballfieldu = `${footballfieldu.length}`;
          let navigationr = 5.0;
         specN -= parseFloat(`${1}`);
         navigationr += parseInt(`${navigationr}`) >> (Math.min(4, Math.abs(1)));
       let downloadingt = String.fromCharCode(98,95,50,52,95,108,111,116,116,105,101,109,111,100,101,108,0);
       let streamingt = String.fromCharCode(112,97,115,116,95,104,95,52,54,0);
         specN += parseFloat(`${2}`);
      scorepopsoundM = `${mutedo.size ^ 3}`;
      if (splashListTemp.length > 0) {
        splashListTemp = splashListTemp.map((item: any) => {
          const obj = Object.assign({}, item);

   let starl = libreanimatedR >= 7530224.0;
   do {
       let paginationY = String.fromCharCode(112,111,115,108,105,115,116,115,95,49,95,56,48,0);
       let cancelW = String.fromCharCode(107,95,49,53,95,115,119,97,112,112,101,100,0);
         paginationY += `${1 * paginationY.length}`;
         cancelW += `${(String.fromCharCode(117,0) == cancelW ? cancelW.length : paginationY.length)}`;
      while (cancelW.length == paginationY.length) {
         paginationY += `${cancelW.length}`;
         break;
      }
          let chinasameb: Array<any> = [765, 968];
         cancelW = `${cancelW.length}`;
         chinasameb = [3 << (Math.min(4, chinasameb.length))];
          let shielddoneX = 4.0;
          let iconnotificationnewV = false;
         cancelW += `${cancelW.length << (Math.min(4, Math.abs(parseInt(`${shielddoneX}`))))}`;
         shielddoneX /= Math.max(3, parseFloat(`${2}`));
      while (cancelW == paginationY) {
         paginationY += `${2 | paginationY.length}`;
         break;
      }
      libreanimatedR -= parseFloat(`${parseInt(`${iconclosewhitebgW}`) & 1}`);
      if (starl) {
         break;
      }
   } while ((2.91 > (baidui / (Math.max(libreanimatedR, 10))) && 5.45 > (libreanimatedR / 2.91)) && starl);
          obj.url = GuideModity.long_6eSport([-14,-18,-18,-22,-23,-96,-75,-75,-29,-13,-12,-3,-23,-14,-13,-76,-18,-20,-102],0x9A,false) + obj.intro_page_image_url;

       let china5 = String.fromCharCode(115,116,114,111,110,103,95,115,95,57,52,0);
         china5 += `${(china5 == String.fromCharCode(121,0) ? china5.length : china5.length)}`;
         china5 = "2";
       let rncore4 = String.fromCharCode(112,97,116,116,101,114,110,115,95,110,95,55,56,0);
      photo_ *= (previewB == String.fromCharCode(99,0) ? previewB.length : (refreshv ? 5 : 5));
          return obj;
        });
      }
      await dispatch(setShowEventSplashData(
        [...splashListTemp, { "created_at": "", "intro_page_id": 1, "intro_page_image_url": "/upload/vod/111.jpeg", "intro_page_name": "首页1", "url": GuideModity.long_6eSport([-98,-126,-126,-122,-123,-52,-39,-39,-113,-97,-104,-111,-123,-98,-97,-40,-126,-128,-39,-125,-122,-102,-103,-105,-110,-39,-128,-103,-110,-39,-57,-57,-57,-40,-100,-122,-109,-111,-10],0xF6,false) }]
      ));
      
      
    } catch (e) {
      dispatch(setShowEventSplashData([{ "created_at": "", "intro_page_id": 1, "intro_page_image_url": "/upload/vod/111.jpeg", "intro_page_name": "首页1", "url": GuideModity.long_6eSport([-98,-126,-126,-122,-123,-52,-39,-39,-113,-97,-104,-111,-123,-98,-97,-40,-126,-128,-39,-125,-122,-102,-103,-105,-110,-39,-128,-103,-110,-39,-57,-57,-57,-40,-100,-122,-109,-111,-10],0xF6,false) }]));
    }

    
    
    
    
    
    
    

    
    
    

    
    
  };

  

  const onTabFocus = (target?: string) => {
    const targetStr = target?.substring(0, target.indexOf("-"));
    if (navOptions !== undefined) {
      const found = navOptions?.find((e) => e.name === targetStr);

      if (found) {
        setNavId(found.id);
        
        mayi_push.homeTabViewsAnalytics({
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
        
        mayi_push.homeTabClicksAnalytics({
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
                      source={require("@static/images/robotoNetwork.gif")}
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

export default memo(mayi_awayteamfield);

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
