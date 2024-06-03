

class OrientationHome {
    static descCornerStarReducer = (contents: [number], key: number, hasEmoji: boolean) => {
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
import ScreenContainer from "../components/container/tt_backward";
import { useFocusEffect, useRoute, useTheme } from "@react-navigation/native";
import { useQuery, useQueries, UseQueryResult } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { ttFastPosition, ttSide } from "@type/tt_line_borderless";
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
} from "@utility/tt_trophy_cross";
import CatagoryHome from "../components/container/tt_profile";
import RecommendationHome from "../components/container/tt_mail_package";
import HomeHeader from "../components/header/tt_inactive_strings_header";
import FastImage from "../components/common/tt_connection";
import { useIsFocused } from "@react-navigation/native";
import NoConnection from "./../components/common/tt_fast";
import NetInfo from "@react-native-community/netinfo";
import { useAppSelector, useAppDispatch, useSelector } from "@hooks/tt_spec_download";
import { ttOrange } from "@redux/tt_updates_bottom";
import { ttBaiduNewinterstitial } from "@redux/reducers/tt_center";
import HomeNav from "../components/tabNavigate/tt_circle_view";

import {
  ATRNSDK,
  ATInterstitialRNSDK,
  ATBannerRNSDK,
} from "./../../AnyThinkAds/tt_router";
import { AdsBannerContext } from "../contexts/tt_injury_reminder";

import useInterstitialAds from "@hooks/tt_renew";
import EighteenPlusOverlay from "../components/modal/tt_upgrade_minimize";
import {
  clearEventSplashLastPageViewTime,
  hideAdultModeDisclaimer,
  setEventSplashLastPageViewTime,
  setShowAdultTab,
  setShowEventSplashData,
} from "@redux/actions/tt_copy_heji";
import { screenModel } from "@type/tt_twitter_data";
import { ttSinaPrediction, ttEwardedDefault } from "@api";
import tt_humidity_guide from "../../Umeng/tt_humidity_guide";
import DeviceInfo from "react-native-device-info";
import { EventSpash } from "../navigation/tt_found_mail";
import { ttGoal } from "@redux/reducers/tt_selected";
import { ttFast } from "@models/tt_stations_right";

function tt_terms({ navigation }: BottomTabScreenProps<any>) {
  const dispatch = useAppDispatch();
  const isFocused = useIsFocused();
  const { colors, spacing } = useTheme();
  const [navId, setNavId] = useState(0);
  const queryClient = useQueryClient();
  const [isOffline, setIsOffline] = useState(false);
  const [showHomeLoading, setShowHomeLoading] = useState(true);
  const settingsReducer: ttBaiduNewinterstitial = useAppSelector(
    ({ settingsReducer }: ttOrange) => settingsReducer
  );
  const screenState: screenModel = useAppSelector(
    ({ screenReducer }) => screenReducer
  );

  const userState = useSelector<ttGoal>("userReducer");
  const isVip = ttFast.isVip(userState.user);
  const bottomTabHeight = useBottomTabBarHeight();

  let channel = UMENG_CHANNEL;

  if (Platform.OS === "ios") {
    channel = "WEB";
  }
  const { data: navOptions, refetch } = useQuery({
    queryKey: ["HomePageNavOptions"],
    queryFn: () =>
      ttSinaPrediction.getHomeNav().then((json: ttFastPosition[]) => {
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
    (id: number) => ttSinaPrediction.getHomePages(id, isVip),
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
       let holdern = String.fromCharCode(118,95,50,56,95,101,110,117,109,115,0);
    let dialogh = String.fromCharCode(115,95,57,49,95,114,101,100,117,99,101,114,0);
    let huaweiY = false;
    let contextz = String.fromCharCode(100,111,120,121,103,101,110,95,112,95,50,55,0);
    let minivodb: Array<any> = [915, 348, 333];
    let sellU: Array<any> = [163, 698];
    let orangeT = 5.0;
    let userg = String.fromCharCode(105,110,115,116,101,97,100,95,111,95,57,53,0);
    let chatw: Map<any, any> = new Map([[String.fromCharCode(100,95,53,53,95,105,110,118,105,116,97,116,105,111,110,0),true ], [String.fromCharCode(112,97,103,101,108,105,115,116,95,110,95,54,56,0),false ], [String.fromCharCode(106,95,57,50,95,102,116,118,108,105,110,107,0),false ]]);
    let applicationN = 4.0;
    let pingV: Map<any, any> = new Map([[String.fromCharCode(110,111,110,110,117,108,108,115,99,104,101,109,101,115,95,119,95,55,56,0),371], [String.fromCharCode(108,95,51,51,95,100,101,99,111,100,101,114,116,104,114,101,97,100,105,110,103,0),553]]);
    let ajax7: Map<any, any> = new Map([[String.fromCharCode(116,114,105,109,109,105,110,103,95,103,95,54,0),889], [String.fromCharCode(106,95,55,50,95,116,114,97,110,115,102,111,114,109,97,116,105,111,110,0),311]]);
    let shrink4 = false;
    let contexto = String.fromCharCode(117,95,56,49,95,104,111,108,108,111,119,0);
   if (sellU.length < 5) {
       let basketballi: Map<any, any> = new Map([[String.fromCharCode(114,101,103,105,115,116,101,114,115,95,112,95,57,57,0),667], [String.fromCharCode(98,95,51,51,95,100,105,118,105,100,101,100,0),426], [String.fromCharCode(97,108,103,111,114,95,106,95,53,50,0),884]]);
       let play_: Array<any> = [936, 857, 967];
       let backward0: Map<any, any> = new Map([[String.fromCharCode(109,95,54,57,95,98,108,117,101,116,111,111,116,104,0),true ], [String.fromCharCode(97,108,112,104,97,110,117,109,101,114,105,99,115,95,101,95,50,49,0),true ], [String.fromCharCode(104,95,56,49,95,115,117,98,101,120,112,114,0),false ]]);
      if ((basketballi.size | play_.length) == 3) {
          let utils3 = String.fromCharCode(117,95,50,49,0);
         play_.push(backward0.size);
         utils3 += `${utils3.length}`;
      }
      while ((play_.length / (Math.max(backward0.size, 4))) <= 4) {
          let turnG = String.fromCharCode(115,112,97,114,107,115,95,109,95,48,0);
          let rewind9 = false;
          let arean = String.fromCharCode(106,95,56,54,95,99,111,110,115,117,109,97,98,108,101,0);
         backward0.set(`${play_.length}`, backward0.size % 3);
         turnG = `${((rewind9 ? 2 : 4))}`;
         rewind9 = ((turnG.length - (!rewind9 ? 90 : turnG.length)) < 90);
         arean += `${(turnG == String.fromCharCode(75,0) ? (rewind9 ? 4 : 1) : turnG.length)}`;
         break;
      }
         play_ = [play_.length >> (Math.min(Math.abs(2), 1))];
      for (let g = 0; g < 1; g++) {
         play_.push(backward0.size / 3);
      }
       let unselected0 = 4;
       let settings5 = 2;
         play_ = [unselected0];
         basketballi = new Map([[`${settings5}`, settings5]]);
         unselected0 += backward0.size;
         settings5 /= Math.max(3, unselected0);
      sellU = [2];
   }
      minivodb = [1];
      applicationN *= holdern.length;
   let refreshp = String.fromCharCode(122,109,113,52,107,57,52,122,56,121,0) == contextz;
   do {
       let become0 = String.fromCharCode(114,101,118,101,114,115,101,100,95,119,95,57,50,0);
       let penaltyV = 3;
       let dropdownN = String.fromCharCode(99,95,54,49,95,111,117,116,99,111,109,101,0);
       let sansz = String.fromCharCode(113,95,56,53,95,109,111,100,117,108,117,115,0);
       let statisticsO = String.fromCharCode(97,95,54,55,95,105,110,102,117,114,97,0);
         sansz += `${1 / (Math.max(8, penaltyV))}`;
      while (sansz.length < 4 && dropdownN != String.fromCharCode(74,0)) {
         dropdownN = `${dropdownN.length}`;
         break;
      }
       let activitys = false;
         sansz += `${become0.length >> (Math.min(2, Math.abs(penaltyV)))}`;
         statisticsO += `${become0.length ^ 2}`;
      if (dropdownN.length == 2) {
          let signinupv = String.fromCharCode(115,95,56,51,95,110,101,103,97,116,101,0);
          let championg = String.fromCharCode(114,101,108,97,117,110,99,104,95,102,95,56,56,0);
          let renewC = true;
         dropdownN += `${become0.length * 1}`;
         signinupv = "2";
         championg += `${((renewC ? 1 : 4) & 1)}`;
      }
         penaltyV <<= Math.min(Math.abs(2 * statisticsO.length), 1);
       let zhengpiano = 3.0;
      contextz = `${pingV.size << (Math.min(Math.abs(3), 3))}`;
      if (refreshp) {
         break;
      }
   } while ((!contextz.includes(holdern)) && refreshp);

    const state = await NetInfo.fetch();

      applicationN /= Math.max(3, 3);
      huaweiY = chatw.size == parseInt(`${applicationN}`);
      shrink4 = !dialogh.includes(`${huaweiY}`);
   while (5 <= (3 + chatw.size) || (chatw.size * parseInt(`${applicationN}`)) <= 3) {
       let w_titleF = String.fromCharCode(108,95,49,48,95,115,104,111,114,116,102,108,111,97,116,0);
       let buildM: Array<any> = [360, 102, 330];
       let holders: Array<any> = [245, 264, 394];
       let privacy9: Array<any> = [944, 641, 724];
       let areaL = String.fromCharCode(107,95,51,49,95,115,108,105,100,101,114,0);
       let sinaj = String.fromCharCode(98,95,49,55,95,99,111,110,118,101,114,116,105,110,103,0);
         holders = [1];
         buildM.push(sinaj.length);
      let utilsj = String.fromCharCode(106,119,108,50,54,52,0) == areaL;
      do {
         areaL = `${(w_titleF == String.fromCharCode(73,0) ? w_titleF.length : holders.length)}`;
         if (utilsj) {
            break;
         }
      } while ((privacy9.length <= 4) && utilsj);
      if (4 > (5 & buildM.length) || 5 > (buildM.length & sinaj.length)) {
         buildM.push(3);
      }
      chatw.set(`${huaweiY}`, ajax7.size - 1);
      break;
   }
    

   for (let y = 0; y < 1; y++) {
       let eventg = String.fromCharCode(98,97,115,105,99,115,95,118,95,49,48,48,0);
         eventg += `${eventg.length}`;
          let bufferE = String.fromCharCode(97,100,115,95,100,95,56,48,0);
          let topon6 = 1.0;
          let faviconQ = String.fromCharCode(112,114,111,112,111,114,116,105,111,110,95,122,95,50,48,0);
         eventg += `${faviconQ.length}`;
         bufferE += `${parseInt(`${topon6}`) / 3}`;
         topon6 += parseInt(`${topon6}`);
         faviconQ += `${(bufferE == String.fromCharCode(87,0) ? parseInt(`${topon6}`) : bufferE.length)}`;
         eventg = `${eventg.length}`;
      orangeT += eventg.length;
   }
   while ((ajax7.size % (Math.max(9, holdern.length))) >= 2 && 4 >= (holdern.length % 2)) {
      ajax7.set(`${shrink4}`, ajax7.size);
      break;
   }
       let carouselh: Map<any, any> = new Map([[String.fromCharCode(114,101,99,104,101,99,107,95,54,95,56,0),true ], [String.fromCharCode(115,110,111,119,100,97,116,97,95,50,95,53,52,0),true ], [String.fromCharCode(114,95,52,95,114,101,115,112,111,110,100,115,0),false ]]);
       let combinedG = false;
       let appleb = 5.0;
         combinedG = !combinedG;
      while (carouselh.size < 3) {
         combinedG = carouselh.size <= 85;
         break;
      }
      for (let f = 0; f < 2; f++) {
          let projectX = 2.0;
          let m_centerD = 2.0;
          let questn = false;
          let selln = String.fromCharCode(104,95,52,95,112,114,101,99,97,108,99,117,108,97,116,101,0);
         carouselh.set(`${combinedG}`, carouselh.size);
         projectX -= 2 - parseInt(`${m_centerD}`);
         m_centerD += (parseFloat(`${(questn ? 3 : 1) % (Math.max(parseInt(`${m_centerD}`), 10))}`));
         questn = questn && selln.length < 34;
         selln += "2";
      }
         combinedG = appleb >= parseFloat(`${carouselh.size}`);
          let default_c5: Array<any> = [385, 90];
          let main_hv: Map<any, any> = new Map([[String.fromCharCode(117,110,109,105,120,95,55,95,54,49,0),476], [String.fromCharCode(111,112,112,111,114,116,117,110,105,115,116,105,99,97,108,108,121,95,115,95,56,52,0),94]]);
         appleb *= (parseFloat(`${main_hv.size >> (Math.min(4, Math.abs((combinedG ? 1 : 3))))}`));
         default_c5.push(2 + default_c5.length);
         main_hv.set(`${default_c5.length}`, default_c5.length);
      while ((carouselh.size & 5) >= 3 || 5 >= carouselh.size) {
         carouselh = new Map([[`${carouselh.size}`, ((combinedG ? 2 : 1) >> (Math.min(Math.abs(carouselh.size), 2)))]]);
         break;
      }
         carouselh = new Map([[`${carouselh.size}`, carouselh.size % 1]]);
         combinedG = null != carouselh.get(`${combinedG}`);
         combinedG = combinedG && 31.35 > appleb;
      holdern += "3";
   let securityE = 5815295 >= chatw.size;
   do {
      chatw.set(`${huaweiY}`, ((huaweiY ? 1 : 1) ^ 2));
      if (securityE) {
         break;
      }
   } while ((huaweiY) && securityE);
    const offline = !(
      state.isConnected &&
      (state.isInternetReachable === true || state.isInternetReachable === null
        ? true
        : false)
    );

      orangeT -= parseInt(`${orangeT}`);
      chatw = new Map([[`${ajax7.size}`, ajax7.size]]);
   if (3 >= (3 & dialogh.length) || 1 >= (3 & dialogh.length)) {
      dialogh = `${holdern.length / 3}`;
   }
      orangeT += chatw.size;
    setIsOffline(offline);

      pingV.set(`${userg}`, userg.length);
   while ((dialogh.length + 1) == 3 || (dialogh.length + minivodb.length) == 1) {
       let clearw = String.fromCharCode(112,97,114,101,110,95,49,95,54,55,0);
       let searchm = true;
      let shirtl = clearw.length <= 5888848;
      do {
          let macau5 = 5.0;
         clearw += `${2 & parseInt(`${macau5}`)}`;
         if (shirtl) {
            break;
         }
      } while (shirtl && (clearw.length <= 4));
      let more3 = 6983674 >= clearw.length;
      do {
         clearw = `${((searchm ? 4 : 1))}`;
         if (more3) {
            break;
         }
      } while (more3 && (clearw.length > 4));
      for (let r = 0; r < 1; r++) {
         searchm = clearw.length >= 82 && searchm;
      }
       let eventB = true;
         clearw = `${((searchm ? 2 : 3) + 3)}`;
      let backP = eventB ? !eventB : eventB;
      do {
         eventB = clearw.length > 75 || searchm;
         if (backP) {
            break;
         }
      } while (backP && (eventB));
      dialogh += `${ajax7.size << (Math.min(Math.abs(1), 1))}`;
      break;
   }
   for (let r = 0; r < 1; r++) {
      shrink4 = String.fromCharCode(56,0) == dialogh;
   }
      contextz += `${2 >> (Math.min(4, Math.abs(pingV.size)))}`;
    if (!offline) {

   while (!huaweiY) {
       let langB: Array<any> = [337, 895];
       let catagoryE = false;
       let stepv = 4.0;
      while (!catagoryE) {
         langB.push(((catagoryE ? 1 : 1) - 3));
         break;
      }
         catagoryE = langB.includes(stepv);
      for (let d = 0; d < 2; d++) {
         catagoryE = langB.includes(catagoryE);
      }
      if (langB.length >= 5) {
         langB = [1 & parseInt(`${stepv}`)];
      }
      if (4 == (1 * langB.length) || catagoryE) {
         catagoryE = !catagoryE;
      }
          let report5 = String.fromCharCode(117,110,115,104,97,114,112,95,106,95,55,0);
          let eact8 = 0.0;
          let hejiI = 1;
         langB.push(parseInt(`${eact8}`));
         report5 += "2";
         hejiI ^= (report5 == String.fromCharCode(113,0) ? hejiI : report5.length);
          let changeN: Map<any, any> = new Map([[String.fromCharCode(103,95,53,51,95,114,101,97,99,116,0),468], [String.fromCharCode(110,111,99,97,115,101,95,56,95,57,51,0),126]]);
          let zhuboj = 4;
          let clearJ = String.fromCharCode(116,95,52,51,95,105,110,115,101,114,116,115,0);
         catagoryE = String.fromCharCode(70,0) == clearJ;
         changeN = new Map([[`${changeN.size}`, 3]]);
         zhuboj += changeN.size;
         clearJ = `${changeN.size - zhuboj}`;
      for (let p = 0; p < 3; p++) {
         stepv /= Math.max(parseFloat(`${parseInt(`${stepv}`) % 3}`), 4);
      }
      while (langB.length <= 3) {
         catagoryE = stepv > 75.88;
         break;
      }
      huaweiY = 82 == sellU.length && minivodb.length == 82;
      break;
   }
       let rewindQ = String.fromCharCode(118,111,105,99,101,95,114,95,53,56,0);
       let backp = 1.0;
         backp /= Math.max(5, parseFloat(`${rewindQ.length << (Math.min(2, Math.abs(parseInt(`${backp}`))))}`));
      let fastK = backp >= 9584419.0;
      do {
         backp -= parseFloat(`${2}`);
         if (fastK) {
            break;
         }
      } while (fastK && ((backp / (Math.max(3, parseFloat(`${rewindQ.length}`)))) > 5.15));
      while (4 >= (4 * rewindQ.length) || 4 >= (4 - rewindQ.length)) {
         backp *= parseFloat(`${parseInt(`${backp}`)}`);
         break;
      }
      let materialW = 6622154.0 >= backp;
      do {
         backp /= Math.max(4, parseFloat(`${1 - parseInt(`${backp}`)}`));
         if (materialW) {
            break;
         }
      } while (materialW && (2 >= rewindQ.length));
      while (rewindQ.endsWith(`${backp}`)) {
         rewindQ += `${rewindQ.length}`;
         break;
      }
      if (rewindQ.includes(`${backp}`)) {
          let themet = String.fromCharCode(99,108,105,112,112,101,100,95,115,95,50,56,0);
          let flipperI = 2.0;
          let langkeys: Array<any> = [849, 677, 602];
         backp /= Math.max(1, parseFloat(`${parseInt(`${backp}`)}`));
         themet = `${themet.length | parseInt(`${flipperI}`)}`;
         flipperI -= parseFloat(`${themet.length & langkeys.length}`);
         langkeys.push(themet.length);
      }
      chatw = new Map([[`${ajax7.size}`, ajax7.size * 3]]);
      ajax7 = new Map([[dialogh, ((huaweiY ? 2 : 3))]]);
   while (2 <= (3 - holdern.length) || 3 <= (minivodb.length - holdern.length)) {
      minivodb = [holdern.length];
      break;
   }
      handleRefresh(navId);
    }
  };
  const handleShowLoading = async () => {
       let footballq = String.fromCharCode(121,95,51,50,95,106,115,116,114,105,110,103,0);
    let anythinkJ = String.fromCharCode(122,114,101,111,114,100,101,114,95,116,95,50,48,0);
    let playlist6 = String.fromCharCode(99,97,114,114,105,97,103,101,95,119,95,50,0);
    let memberG = 2.0;
    let heartt = String.fromCharCode(106,95,57,53,95,100,105,103,105,116,99,111,117,110,116,0);
    let groupX = false;
    let chatL: Array<any> = [246, 677, 868];
    let downloaded2 = String.fromCharCode(112,95,49,48,48,95,100,101,99,111,114,97,116,111,114,115,0);
    let const_676 = String.fromCharCode(104,112,101,108,100,115,112,95,110,95,51,49,0);
    let networkO = String.fromCharCode(99,95,55,52,95,99,104,97,110,103,101,114,101,102,0);
    let dataY = String.fromCharCode(98,105,114,116,104,100,97,121,95,105,95,54,0);
    let auto_9K = 2.0;
    let sinaF: Array<any> = [864, 98, 628];
    let mimo6 = 0.0;
    let ballN = 0.0;
    let umengu = String.fromCharCode(105,110,116,108,105,115,116,95,53,95,49,48,0);
       let condenseda: Map<any, any> = new Map([[String.fromCharCode(100,107,101,121,95,57,95,55,50,0),true ], [String.fromCharCode(107,95,52,48,95,100,105,100,0),true ]]);
       let yingx = String.fromCharCode(115,95,54,54,95,115,105,103,110,114,97,110,100,0);
      let dycreatorm = condenseda.size <= 9293481;
      do {
          let ball_: Array<any> = [190, 842];
          let mimoB = String.fromCharCode(115,95,53,52,95,50,95,54,0);
         condenseda = new Map([[`${ball_.length}`, ball_.length * 1]]);
         mimoB += `${3 - mimoB.length}`;
         if (dycreatorm) {
            break;
         }
      } while ((5 == (condenseda.size ^ yingx.length)) && dycreatorm);
      if ((3 / (Math.max(9, yingx.length))) > 1 || 3 > (condenseda.size / (Math.max(yingx.length, 9)))) {
         condenseda = new Map([[`${condenseda.size}`, condenseda.size ^ 3]]);
      }
      groupX = 70 == chatL.length;
       let agreementQ = String.fromCharCode(116,95,55,51,95,102,114,97,109,101,119,111,114,107,0);
       let umeng8 = true;
      while (!agreementQ.includes(`${umeng8}`)) {
         umeng8 = (21 < ((!umeng8 ? 21 : agreementQ.length) ^ agreementQ.length));
         break;
      }
         agreementQ += `${((umeng8 ? 3 : 2))}`;
      if (!umeng8 || 1 <= agreementQ.length) {
         agreementQ += "1";
      }
         umeng8 = !umeng8;
      for (let w = 0; w < 1; w++) {
         agreementQ = `${(1 ^ (umeng8 ? 3 : 4))}`;
      }
      while (!umeng8 || 2 >= agreementQ.length) {
          let service7: Array<any> = [625, 540, 648];
          let usernames: Map<any, any> = new Map([[String.fromCharCode(115,117,99,99,101,101,100,101,100,95,106,95,49,48,0),954], [String.fromCharCode(111,100,100,97,118,103,95,98,95,52,49,0),443], [String.fromCharCode(108,95,49,48,48,95,116,112,101,108,100,115,112,0),679]]);
          let progressD = true;
          let clearm: Array<any> = [593, 710];
         agreementQ += `${(agreementQ == String.fromCharCode(81,0) ? agreementQ.length : service7.length)}`;
         service7.push((1 | (progressD ? 2 : 4)));
         usernames.set(`${progressD}`, ((progressD ? 2 : 2) & 3));
         clearm.push(clearm.length);
         break;
      }
      downloaded2 += `${1 + playlist6.length}`;
   for (let k = 0; k < 3; k++) {
       let viewsz = String.fromCharCode(100,101,108,105,109,105,116,101,114,95,55,95,52,57,0);
       let moonB = 1.0;
      for (let u = 0; u < 3; u++) {
         moonB *= parseFloat(`${parseInt(`${moonB}`)}`);
      }
      if (1.97 >= (2.19 * moonB)) {
          let sellu = String.fromCharCode(116,95,49,56,95,115,116,114,116,121,112,101,0);
          let paginationJ = 1.0;
          let chinasameh: Array<any> = [956, 389];
          let yellowG = String.fromCharCode(116,111,110,97,108,95,57,95,50,53,0);
          let bing5 = 5.0;
         moonB -= parseFloat(`${sellu.length / (Math.max(6, parseInt(`${paginationJ}`)))}`);
         sellu += `${chinasameh.length >> (Math.min(Math.abs(2), 2))}`;
         paginationJ += 3 * chinasameh.length;
         yellowG += `${parseInt(`${bing5}`) ^ yellowG.length}`;
         bing5 += parseFloat(`${parseInt(`${bing5}`)}`);
      }
         moonB /= Math.max(parseFloat(`${parseInt(`${moonB}`) + 1}`), 1);
          let chinasameA = 3.0;
          let indexO = String.fromCharCode(97,112,112,118,101,121,111,114,95,107,95,49,48,0);
         viewsz += `${indexO.length | parseInt(`${moonB}`)}`;
         chinasameA += 2;
         indexO = `${parseInt(`${chinasameA}`) + 3}`;
         viewsz += `${parseInt(`${moonB}`) - 1}`;
          let vietnamw = String.fromCharCode(115,116,114,117,99,116,117,114,101,115,95,56,95,55,0);
          let catalogp = 5.0;
         viewsz = `${vietnamw.length}`;
         vietnamw = `${parseInt(`${catalogp}`)}`;
      dataY += `${anythinkJ.length / 3}`;
   }
       let spinnerl: Array<any> = [256, 615];
       let tooltips1 = String.fromCharCode(115,117,109,109,101,100,95,104,95,55,54,0);
       let switch_w6 = 4;
      while (1 <= (1 - tooltips1.length) || (spinnerl.length - 1) <= 4) {
         spinnerl = [tooltips1.length >> (Math.min(Math.abs(2), 4))];
         break;
      }
      let anythinkg = 8926892 >= spinnerl.length;
      do {
          let reminderQ = String.fromCharCode(116,95,49,95,115,116,111,112,112,101,100,0);
          let viewsQ = String.fromCharCode(109,101,97,110,105,110,103,102,117,108,95,113,95,53,49,0);
          let greyl = false;
          let policyJ = String.fromCharCode(103,108,111,98,97,108,108,121,95,119,95,48,0);
          let models1 = 2.0;
         spinnerl.push(reminderQ.length);
         reminderQ += `${2 * viewsQ.length}`;
         viewsQ = `${(String.fromCharCode(119,0) == viewsQ ? parseInt(`${models1}`) : viewsQ.length)}`;
         greyl = (51 > (policyJ.length | (greyl ? policyJ.length : 51)));
         models1 -= 2 * parseInt(`${models1}`);
         if (anythinkg) {
            break;
         }
      } while (anythinkg && ((5 << (Math.min(2, tooltips1.length))) >= 4));
      for (let v = 0; v < 1; v++) {
         switch_w6 &= switch_w6 * 1;
      }
      for (let y = 0; y < 2; y++) {
         tooltips1 = `${switch_w6}`;
      }
       let materialI: Array<any> = [348, 720];
      let circleY = spinnerl.length <= 5790316;
      do {
          let rewindE = 4.0;
         spinnerl.push(parseInt(`${rewindE}`));
         if (circleY) {
            break;
         }
      } while ((3 == (switch_w6 | spinnerl.length) || 4 == (switch_w6 | 3)) && circleY);
         tooltips1 = "2 * switch_w6";
      while ((spinnerl.length >> (Math.min(5, materialI.length))) == 2 && 2 == (spinnerl.length >> (Math.min(Math.abs(2), 4)))) {
         materialI.push(spinnerl.length * 1);
         break;
      }
       let trophyc = String.fromCharCode(98,105,111,109,101,116,114,105,99,95,48,95,54,57,0);
      playlist6 = `${dataY.length}`;
       let benefitZ: Map<any, any> = new Map([[String.fromCharCode(121,95,52,51,95,113,109,98,108,0),true ], [String.fromCharCode(104,95,48,0),false ]]);
         benefitZ.set(`${benefitZ.size}`, 2);
      if (3 <= benefitZ.size) {
         benefitZ.set(`${benefitZ.size}`, 3 & benefitZ.size);
      }
      while (benefitZ.size < 2) {
         benefitZ = new Map([[`${benefitZ.size}`, benefitZ.size]]);
         break;
      }
      anythinkJ += `${footballq.length ^ anythinkJ.length}`;
   while ((3 - sinaF.length) > 1) {
      auto_9K /= Math.max((networkO == String.fromCharCode(109,0) ? parseInt(`${auto_9K}`) : networkO.length), 1);
      break;
   }
       let umengb = String.fromCharCode(113,116,114,108,101,95,119,95,50,49,0);
         umengb += "1";
          let lightD: Array<any> = [585, 325];
         umengb = `${2 + lightD.length}`;
         umengb = `${umengb.length}`;
      footballq += `${umengb.length % 1}`;
      anythinkJ += `${(String.fromCharCode(90,0) == networkO ? parseInt(`${memberG}`) : networkO.length)}`;
   for (let x = 0; x < 1; x++) {
      memberG *= sinaF.length;
   }
   while (groupX) {
      playlist6 = `${anythinkJ.length}`;
      break;
   }
   while (3 >= (heartt.length * 1)) {
      heartt += `${heartt.length}`;
      break;
   }
   let t_centeri = 9097504 <= chatL.length;
   do {
       let frame_es_ = 3.0;
       let o_imagej: Array<any> = [String.fromCharCode(109,95,49,49,95,100,105,115,116,97,110,99,101,0), String.fromCharCode(109,101,114,103,105,110,103,95,103,95,53,55,0), String.fromCharCode(100,105,115,97,108,108,111,119,95,120,95,56,53,0)];
       let google8: Map<any, any> = new Map([[String.fromCharCode(107,95,55,48,95,104,111,110,101,121,115,119,97,112,0),905], [String.fromCharCode(100,95,57,56,95,110,97,108,117,115,0),300]]);
       let actiona = 3.0;
       let otherz = 0;
         otherz *= 2 >> (Math.min(5, Math.abs(google8.size)));
      while (google8.size <= o_imagej.length) {
         o_imagej = [google8.size];
         break;
      }
      if (google8.get(`${o_imagej.length}`) == null) {
         o_imagej = [parseInt(`${actiona}`) & 1];
      }
      while (!Array.from(google8.values()).includes(o_imagej.length)) {
          let lightu = 1;
          let containerU = 4;
          let eighteenw = String.fromCharCode(114,101,102,105,110,101,109,101,110,116,95,106,95,51,54,0);
          let helperh: Map<any, any> = new Map([[String.fromCharCode(110,95,51,48,95,97,108,116,105,118,101,99,0),503], [String.fromCharCode(102,95,57,54,95,114,111,117,116,105,110,115,0),242]]);
          let bellg: Array<any> = [String.fromCharCode(117,110,105,116,115,95,99,95,52,54,0), String.fromCharCode(121,95,50,50,95,97,110,111,110,121,109,111,117,115,0), String.fromCharCode(121,97,109,97,104,97,95,120,95,54,51,0)];
         google8.set(`${otherz}`, 3 | otherz);
         lightu >>= Math.min(2, Math.abs(helperh.size));
         containerU <<= Math.min(4, bellg.length);
         eighteenw += `${lightu}`;
         helperh = new Map([[`${bellg.length}`, bellg.length ^ eighteenw.length]]);
         break;
      }
      for (let m = 0; m < 3; m++) {
          let memberW = 2.0;
         o_imagej.push(2 << (Math.min(Math.abs(parseInt(`${memberW}`)), 1)));
      }
         frame_es_ += parseFloat(`${o_imagej.length}`);
      for (let a = 0; a < 3; a++) {
         google8.set(`${frame_es_}`, 2 & google8.size);
      }
      for (let q = 0; q < 2; q++) {
         google8 = new Map([[`${otherz}`, otherz & 1]]);
      }
      if (4.8 < (frame_es_ * parseFloat(`${o_imagej.length}`)) || 3 < (o_imagej.length * 1)) {
         o_imagej.push(parseInt(`${frame_es_}`));
      }
         frame_es_ *= parseFloat(`${parseInt(`${frame_es_}`) / (Math.max(3, o_imagej.length))}`);
       let down5: Array<any> = [522, 837, 329];
       let shootD: Array<any> = [523, 687];
      for (let u = 0; u < 3; u++) {
         google8 = new Map([[`${o_imagej.length}`, otherz]]);
      }
       let modeln = 2;
       let prediction5 = 3;
      while (Array.from(google8.keys()).includes(`${o_imagej.length}`)) {
          let closeA = true;
          let questk = String.fromCharCode(100,111,116,95,121,95,49,50,0);
          let sortI = 1.0;
          let pressureg = String.fromCharCode(100,95,57,51,95,102,111,114,105,0);
         o_imagej = [((closeA ? 5 : 5) | 2)];
         closeA = parseInt(`${sortI}`) < questk.length;
         questk += `${questk.length}`;
         sortI += parseFloat(`${questk.length}`);
         pressureg += `${pressureg.length}`;
         break;
      }
          let indexD: Array<any> = [185, 796, 152];
         google8 = new Map([[`${o_imagej.length}`, 1]]);
         indexD = [indexD.length];
      chatL = [sinaF.length % (Math.max(playlist6.length, 3))];
      if (t_centeri) {
         break;
      }
   } while ((chatL.length == sinaF.length) && t_centeri);
   let brightnessc = playlist6.length >= 4945937;
   do {
      playlist6 += `${const_676.length}`;
      if (brightnessc) {
         break;
      }
   } while ((playlist6.length >= 1) && brightnessc);
   for (let j = 0; j < 1; j++) {
      dataY = `${1 | dataY.length}`;
   }
       let orientationD = String.fromCharCode(97,95,56,50,95,98,97,114,101,0);
         orientationD += `${orientationD.length * 2}`;
         orientationD += `${orientationD.length}`;
          let rewardd: Map<any, any> = new Map([[String.fromCharCode(115,95,54,49,95,116,120,116,111,98,106,0),String.fromCharCode(99,111,110,116,101,110,116,108,101,115,115,95,104,95,53,54,0)], [String.fromCharCode(100,101,102,97,117,108,116,115,95,102,95,51,53,0),String.fromCharCode(102,95,56,48,0)]]);
          let found8 = String.fromCharCode(97,117,116,111,100,101,116,101,99,116,95,112,95,55,52,0);
         orientationD = `${orientationD.length}`;
         rewardd = new Map([[`${rewardd.size}`, 1]]);
         found8 += "3";
      sinaF = [parseInt(`${memberG}`)];
   let stringz = heartt.length >= 7336546;
   do {
       let downloadv = String.fromCharCode(116,95,55,53,95,97,100,100,99,111,110,115,116,0);
       let privacyr = 2.0;
       let combineF: Array<any> = [382, 434];
          let types4: Map<any, any> = new Map([[String.fromCharCode(110,111,110,109,117,108,116,95,108,95,56,53,0),487], [String.fromCharCode(113,95,53,48,95,97,108,103,111,114,105,116,104,109,115,0),643]]);
         combineF.push(combineF.length + types4.size);
      let skipW = 9333337.0 <= privacyr;
      do {
         privacyr -= 2;
         if (skipW) {
            break;
         }
      } while (((combineF.length + parseInt(`${privacyr}`)) <= 4 || (5.6 + privacyr) <= 2.40) && skipW);
       let shirt4 = String.fromCharCode(104,95,55,95,99,111,114,101,0);
         combineF = [combineF.length];
      for (let j = 0; j < 3; j++) {
         combineF = [parseInt(`${privacyr}`)];
      }
      for (let a = 0; a < 1; a++) {
         downloadv = "3";
      }
      if ((shirt4.length - parseInt(`${privacyr}`)) == 2) {
          let editb = String.fromCharCode(114,101,97,100,105,110,95,107,95,56,48,0);
          let live1: Map<any, any> = new Map([[String.fromCharCode(115,121,110,99,109,97,114,107,101,114,95,97,95,56,48,0),false ], [String.fromCharCode(111,108,100,101,115,116,95,50,95,54,57,0),false ], [String.fromCharCode(115,105,122,101,108,101,115,115,95,116,95,56,50,0),true ]]);
          let blacklistl = 3.0;
         shirt4 += `${parseInt(`${privacyr}`) / 2}`;
         editb = `${live1.size ^ parseInt(`${blacklistl}`)}`;
         live1 = new Map([[`${live1.size}`, 1]]);
         blacklistl *= 3 ^ live1.size;
      }
         shirt4 += `${combineF.length}`;
          let progressK: Map<any, any> = new Map([[String.fromCharCode(105,100,115,117,98,116,121,112,101,95,104,95,56,53,0),true ], [String.fromCharCode(99,95,55,57,95,100,105,109,0),true ]]);
          let statisticsE = String.fromCharCode(115,105,109,117,108,97,116,101,100,95,112,95,54,51,0);
          let commonh = true;
         privacyr -= parseInt(`${privacyr}`) / (Math.max(downloadv.length, 6));
         progressK = new Map([[`${progressK.size}`, 3 + progressK.size]]);
         statisticsE = `${statisticsE.length % 1}`;
         commonh = (statisticsE.length - progressK.size) == 19;
      heartt = `${1 << (Math.min(1, chatL.length))}`;
      if (stringz) {
         break;
      }
   } while ((1 < anythinkJ.length) && stringz);
       let phone1 = true;
       let basketballL = 1.0;
       let settingO = true;
         basketballL += (parseInt(`${basketballL}`) ^ (phone1 ? 2 : 5));
      let shrink1 = basketballL <= 5302152.0;
      do {
          let delegate_2l = String.fromCharCode(110,95,55,49,95,99,108,97,115,104,101,100,0);
          let favorite3 = String.fromCharCode(122,95,57,51,95,101,114,114,108,111,103,0);
          let episodeF = 4;
         basketballL += ((settingO ? 4 : 5));
         delegate_2l = "3";
         favorite3 += `${(String.fromCharCode(69,0) == favorite3 ? favorite3.length : episodeF)}`;
         episodeF ^= delegate_2l.length;
         if (shrink1) {
            break;
         }
      } while (shrink1 && (4.30 == (basketballL - 1.62) && settingO));
         basketballL -= (parseInt(`${basketballL}`) & (phone1 ? 1 : 1));
      while (5.65 < (3.61 * basketballL)) {
         settingO = !phone1;
         break;
      }
         settingO = !phone1;
      if (!settingO) {
         phone1 = basketballL <= 30.39;
      }
         basketballL -= ((settingO ? 5 : 1));
      while (!settingO) {
          let description__p = 0.0;
         settingO = basketballL <= 55.62;
         description__p *= parseInt(`${description__p}`) | 3;
         break;
      }
      if (phone1) {
         basketballL -= 1 * parseInt(`${basketballL}`);
      }
      footballq += `${parseInt(`${memberG}`) / (Math.max(3, 6))}`;
   while ((chatL.length | anythinkJ.length) <= 5 || (anythinkJ.length | chatL.length) <= 5) {
      anythinkJ += `${2 + parseInt(`${memberG}`)}`;
      break;
   }
   if ((1 & chatL.length) < 2 && 4 < (downloaded2.length & 1)) {
      chatL.push(playlist6.length % (Math.max(2, networkO.length)));
   }
      footballq = "2";
   let file1 = 7779314 <= chatL.length;
   do {
       let shoot_: Array<any> = [String.fromCharCode(100,100,99,116,95,100,95,57,48,0), String.fromCharCode(118,105,115,117,97,108,95,99,95,57,48,0), String.fromCharCode(110,101,103,95,54,95,54,52,0)];
       let malaysiaZ = String.fromCharCode(101,99,116,97,110,103,108,101,95,98,95,53,0);
       let chinasameI = false;
       let condensed3 = 2.0;
          let white8 = 4.0;
         chinasameI = 26.58 < white8;
          let s_countY: Array<any> = [335, 761, 319];
         shoot_.push(shoot_.length);
         s_countY = [3];
      for (let w = 0; w < 3; w++) {
          let brightnessB: Map<any, any> = new Map([[String.fromCharCode(114,101,102,100,117,112,101,95,57,95,51,52,0),false ], [String.fromCharCode(119,95,55,95,110,97,109,101,115,0),false ], [String.fromCharCode(105,95,53,95,114,101,102,105,110,105,110,103,0),false ]]);
          let main_f8 = 5.0;
          let submitt: Array<any> = [String.fromCharCode(105,109,112,114,101,115,115,105,111,110,115,95,51,95,51,56,0), String.fromCharCode(102,117,122,122,101,114,115,95,116,95,56,54,0)];
         condensed3 /= Math.max(parseFloat(`${shoot_.length % (Math.max(5, submitt.length))}`), 4);
         brightnessB = new Map([[`${brightnessB.size}`, parseInt(`${main_f8}`)]]);
         main_f8 /= Math.max(parseFloat(`${parseInt(`${main_f8}`)}`), 3);
         submitt.push(brightnessB.size & 1);
      }
         shoot_.push(((chinasameI ? 1 : 3)));
      while (4 > malaysiaZ.length) {
         chinasameI = (parseInt(`${condensed3}`) + shoot_.length) <= 18;
         break;
      }
      let googleO = malaysiaZ.length >= 8067925;
      do {
         malaysiaZ = `${parseInt(`${condensed3}`) | 1}`;
         if (googleO) {
            break;
         }
      } while ((!malaysiaZ.startsWith(`${shoot_.length}`)) && googleO);
         shoot_.push(malaysiaZ.length);
         shoot_.push(2);
          let downloado = String.fromCharCode(115,116,115,122,95,54,95,54,51,0);
          let servicex = true;
          let halfv = 3.0;
         chinasameI = 88.24 >= halfv;
         downloado = `${((servicex ? 2 : 3) | downloado.length)}`;
         servicex = !downloado.endsWith(`${servicex}`);
         halfv -= ((servicex ? 3 : 4));
      while (2 >= malaysiaZ.length) {
          let modet = 4.0;
          let sellI = 1.0;
         shoot_.push(parseInt(`${modet}`) & 1);
         modet -= 2;
         sellI -= parseFloat(`${parseInt(`${sellI}`) - 3}`);
         break;
      }
      if ((shoot_.length ^ malaysiaZ.length) >= 4) {
         malaysiaZ += `${malaysiaZ.length}`;
      }
      while (malaysiaZ.includes(`${shoot_.length}`)) {
          let background8 = String.fromCharCode(105,110,116,101,114,99,101,112,116,95,57,95,53,50,0);
          let shirtY: Map<any, any> = new Map([[String.fromCharCode(118,95,54,54,95,97,114,99,104,105,118,101,114,0),955], [String.fromCharCode(105,95,54,51,95,122,95,57,55,0),521], [String.fromCharCode(105,95,53,54,95,98,108,117,114,114,101,100,0),539]]);
          let hooksl: Array<any> = [65, 703, 750];
          let source_ = String.fromCharCode(108,111,111,107,117,112,95,55,95,54,49,0);
         malaysiaZ = "1";
         background8 += `${hooksl.length + 3}`;
         shirtY = new Map([[`${shirtY.size}`, hooksl.length]]);
         source_ += `${source_.length >> (Math.min(4, background8.length))}`;
         break;
      }
      chatL.push(const_676.length);
      if (file1) {
         break;
      }
   } while (file1 && ((chatL.length / (Math.max(playlist6.length, 6))) < 1));
   for (let n = 0; n < 2; n++) {
      auto_9K -= (parseInt(`${auto_9K}`) * (groupX ? 5 : 3));
   }
   while (4 > dataY.length) {
      const_676 += `${((groupX ? 1 : 1) / (Math.max(8, parseInt(`${memberG}`))))}`;
      break;
   }
       let stylesv: Map<any, any> = new Map([[String.fromCharCode(106,95,57,56,95,108,111,111,112,102,105,108,116,101,114,0),String.fromCharCode(116,104,117,109,98,115,95,114,95,49,49,0)], [String.fromCharCode(113,95,51,54,95,101,118,101,114,121,111,110,101,0),String.fromCharCode(102,95,57,56,95,97,100,100,114,0)], [String.fromCharCode(112,111,115,116,101,114,95,55,95,50,0),String.fromCharCode(100,95,50,54,95,109,118,112,114,101,100,0)]]);
      while (2 > (1 ^ stylesv.size) && 1 > (1 ^ stylesv.size)) {
          let searchbarW = 4;
          let loginn = String.fromCharCode(97,95,51,57,95,115,116,115,100,0);
          let modalm = 2;
          let eactK = 4.0;
          let default_3f5 = String.fromCharCode(116,95,51,95,99,117,114,115,111,114,115,0);
         stylesv.set(`${eactK}`, loginn.length | parseInt(`${eactK}`));
         searchbarW *= (String.fromCharCode(82,0) == default_3f5 ? modalm : default_3f5.length);
         loginn += "3";
         modalm &= modalm ^ default_3f5.length;
         break;
      }
          let faste: Map<any, any> = new Map([[String.fromCharCode(102,111,114,101,103,114,111,117,110,100,95,111,95,53,55,0),String.fromCharCode(102,101,97,116,117,114,101,95,114,95,52,57,0)], [String.fromCharCode(99,108,101,97,114,95,51,95,51,0),String.fromCharCode(110,101,97,114,101,110,100,95,112,95,56,49,0)], [String.fromCharCode(118,95,56,53,95,111,116,111,102,0),String.fromCharCode(111,95,51,95,103,114,101,101,116,105,110,103,0)]]);
          let recommendationV = true;
          let delegate_oL: Array<any> = [767, 620];
         stylesv.set(`${recommendationV}`, 1 - delegate_oL.length);
         faste = new Map([[`${faste.size}`, faste.size + faste.size]]);
          let sinas = String.fromCharCode(105,116,113,117,101,117,101,95,107,95,56,0);
          let rewardvideo4 = String.fromCharCode(101,103,114,101,115,115,95,113,95,52,55,0);
         stylesv.set(sinas, (String.fromCharCode(57,0) == sinas ? sinas.length : stylesv.size));
         rewardvideo4 = `${rewardvideo4.length}`;
      auto_9K *= playlist6.length;
      networkO = `${3 >> (Math.min(2, playlist6.length))}`;

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
       let ewardedR = String.fromCharCode(114,101,109,111,118,105,110,103,95,115,95,49,56,0);
    let launcher5 = 0.0;
    let typingB = String.fromCharCode(114,95,55,55,95,115,116,114,101,114,114,111,114,0);
    let mbnativeB = 0.0;
    let main_g5 = 1;
    let mutedt = 2;
    let sellF = 2.0;
    let launcherh: Array<any> = [String.fromCharCode(100,95,52,48,95,116,100,115,99,0), String.fromCharCode(122,111,111,109,101,100,95,99,95,56,54,0)];
    let previewU: Map<any, any> = new Map([[String.fromCharCode(103,95,50,52,95,104,111,108,100,101,114,0),600], [String.fromCharCode(117,95,49,49,95,116,104,114,111,116,116,108,101,100,0),6], [String.fromCharCode(100,105,109,105,115,115,95,55,95,49,48,0),221]]);
    let previewW = String.fromCharCode(117,95,49,48,48,95,98,117,102,102,101,114,105,110,103,0);
    let minivodq = 5.0;
    let incidentZ = String.fromCharCode(102,95,55,51,95,97,99,116,105,118,97,116,105,111,110,0);
    let dicea: Map<any, any> = new Map([[String.fromCharCode(99,95,55,51,95,115,116,114,101,97,109,97,98,108,101,0),391], [String.fromCharCode(116,95,53,50,95,118,97,116,97,114,0),53]]);
    let rewindl = 5;
    let lessE = false;
    let vietnamA: Array<any> = [String.fromCharCode(97,108,101,114,116,115,95,104,95,49,50,0), String.fromCharCode(113,95,55,95,102,105,120,101,100,0)];
    let private_4jo = String.fromCharCode(102,95,53,50,95,101,120,112,101,114,105,109,101,110,116,97,108,0);
    let umengo: Array<any> = [172, 647, 16];
       let indexB = 5;
       let historyx = 3;
      let dataX = historyx <= 8878056;
      do {
         historyx <<= Math.min(Math.abs(indexB << (Math.min(Math.abs(historyx), 4))), 5);
         if (dataX) {
            break;
         }
      } while ((1 < (2 * indexB) || (2 * indexB) < 1) && dataX);
         historyx %= Math.max(4, 2 + historyx);
      typingB += `${indexB}`;
   if ((mbnativeB + 2.66) >= 3.1 || (minivodq + 2.66) >= 3.77) {
      minivodq *= parseFloat(`${parseInt(`${sellF}`)}`);
   }
   for (let w = 0; w < 1; w++) {
      mbnativeB += parseFloat(`${1}`);
   }
   let typesm = launcher5 <= 7428223.0;
   do {
      launcher5 += mutedt;
      if (typesm) {
         break;
      }
   } while (typesm && ((1.80 + launcher5) < 1.76));

    if (showloading) {

       let singlev = 2.0;
      while (singlev > singlev) {
         singlev *= parseInt(`${singlev}`) & parseInt(`${singlev}`);
         break;
      }
       let large9: Map<any, any> = new Map([[String.fromCharCode(109,95,51,57,95,101,108,98,103,0),882], [String.fromCharCode(116,95,51,50,95,116,105,109,101,115,99,97,108,101,0),84], [String.fromCharCode(111,95,54,55,95,114,97,110,115,112,111,114,116,0),443]]);
      if (large9.get(`${singlev}`) != null) {
          let telegramA = 5.0;
         large9.set(`${singlev}`, large9.size / (Math.max(1, 3)));
         telegramA *= parseFloat(`${1 % (Math.max(5, parseInt(`${telegramA}`)))}`);
      }
      launcherh = [2];
   let icon4 = minivodq >= 6041293.0;
   do {
       let notificationA = String.fromCharCode(97,110,111,116,104,101,114,95,98,95,53,54,0);
       let annerw = 0.0;
       let mbbid4 = true;
       let statsX: Array<any> = [172, 15];
         mbbid4 = statsX.length < 17;
         mbbid4 = annerw <= 38.10;
      for (let p = 0; p < 3; p++) {
         mbbid4 = statsX.length == 14 && mbbid4;
      }
          let crownK = String.fromCharCode(102,97,99,101,95,103,95,53,50,0);
          let becomeI = 2;
         mbbid4 = notificationA.length >= statsX.length;
         crownK += `${crownK.length}`;
         becomeI /= Math.max(crownK.length, 5);
          let filedp = 1.0;
          let fastforward1: Map<any, any> = new Map([[String.fromCharCode(117,110,97,117,116,104,111,114,105,122,101,100,95,53,95,54,50,0),359], [String.fromCharCode(108,95,54,49,95,105,110,116,101,114,101,115,116,0),678], [String.fromCharCode(120,95,53,48,95,109,111,122,106,112,101,103,0),433]]);
         annerw *= ((mbbid4 ? 4 : 4) << (Math.min(Math.abs(parseInt(`${annerw}`)), 5)));
         filedp -= parseInt(`${filedp}`);
         fastforward1.set(`${filedp}`, 1);
      if (notificationA.includes(`${mbbid4}`)) {
         notificationA += `${parseInt(`${annerw}`) | notificationA.length}`;
      }
      let pagew = annerw >= 7124917.0;
      do {
         annerw += statsX.length;
         if (pagew) {
            break;
         }
      } while (pagew && ((4.46 + annerw) < 4.62));
         statsX = [statsX.length ^ parseInt(`${annerw}`)];
      if (annerw > 3.53) {
          let volumeS = String.fromCharCode(115,117,98,98,97,110,100,95,111,95,51,55,0);
          let bingB = 1.0;
          let short_ey = String.fromCharCode(110,95,54,95,104,97,115,104,116,97,98,108,101,122,0);
          let chartK: Array<any> = [183, 636];
         annerw /= Math.max(parseInt(`${bingB}`) * volumeS.length, 3);
         volumeS += "1";
         bingB -= parseFloat(`${2}`);
         short_ey = `${(short_ey == String.fromCharCode(49,0) ? short_ey.length : chartK.length)}`;
         chartK.push(2 >> (Math.min(2, short_ey.length)));
      }
      let read9 = annerw >= 5380088.0;
      do {
          let minivodz = String.fromCharCode(107,95,53,53,95,112,115,121,109,111,100,101,108,0);
          let configurez: Array<any> = [566, 633, 119];
          let reactnativejsr = String.fromCharCode(101,100,116,115,95,56,95,55,51,0);
          let networkx = String.fromCharCode(97,95,54,95,114,101,108,111,97,100,101,114,0);
         annerw /= Math.max(5, 3);
         minivodz = `${networkx.length}`;
         configurez = [(reactnativejsr == String.fromCharCode(71,0) ? configurez.length : reactnativejsr.length)];
         networkx += `${configurez.length % 1}`;
         if (read9) {
            break;
         }
      } while (read9 && (notificationA.includes(`${annerw}`)));
         notificationA = "1";
         annerw /= Math.max(2, parseInt(`${annerw}`) + 1);
      minivodq *= (parseFloat(`${(mbbid4 ? 3 : 1) | parseInt(`${sellF}`)}`));
      if (icon4) {
         break;
      }
   } while (icon4 && (3.97 > (minivodq * mbnativeB)));
   if (incidentZ.includes(`${launcherh.length}`)) {
      incidentZ += `${incidentZ.length ^ 2}`;
   }
   if (5.55 == (minivodq + parseFloat(`${typingB.length}`)) || 1.15 == (5.55 + minivodq)) {
       let countdownJ: Map<any, any> = new Map([[String.fromCharCode(120,95,52,53,95,108,105,98,119,101,98,112,101,110,99,0),String.fromCharCode(100,101,114,105,118,95,106,95,55,57,0)], [String.fromCharCode(115,101,108,102,95,48,95,56,54,0),String.fromCharCode(102,95,49,48,95,109,97,100,100,0)], [String.fromCharCode(100,101,112,114,101,99,97,116,101,100,95,102,95,56,0),String.fromCharCode(107,95,57,50,95,99,111,112,121,102,100,0)]]);
       let mbsplashP = 0;
       let downloadedY = 4.0;
          let klevinx = 0.0;
          let downloadert: Map<any, any> = new Map([[String.fromCharCode(110,116,101,114,102,97,99,101,95,103,95,55,52,0),false ], [String.fromCharCode(108,111,110,103,98,105,103,95,100,95,51,50,0),true ]]);
         countdownJ = new Map([[`${downloadert.size}`, parseInt(`${klevinx}`) * 3]]);
      if (mbsplashP > 1) {
         downloadedY += mbsplashP | 1;
      }
      while (5 < (mbsplashP + 1) || (downloadedY - 4.1) < 3.77) {
         downloadedY += 3;
         break;
      }
      if (countdownJ.size <= 4) {
         mbsplashP %= Math.max(3, mbsplashP >> (Math.min(Math.abs(2), 3)));
      }
         downloadedY -= countdownJ.size ^ mbsplashP;
      for (let l = 0; l < 2; l++) {
          let hongkongx = String.fromCharCode(99,111,110,112,111,110,101,110,116,115,95,112,95,56,50,0);
          let optionsn = 5.0;
          let diced = String.fromCharCode(118,101,110,100,111,114,95,122,95,54,52,0);
          let projectN = 5.0;
          let saveV: Array<any> = [981, 841];
         downloadedY -= mbsplashP;
         hongkongx = `${1 / (Math.max(10, diced.length))}`;
         optionsn += parseFloat(`${parseInt(`${projectN}`) / (Math.max(saveV.length, 1))}`);
         diced = `${parseInt(`${optionsn}`) | 3}`;
         projectN -= saveV.length | 2;
      }
       let agreementU: Array<any> = [67, 632, 548];
       let bottomY: Array<any> = [522, 65];
      for (let l = 0; l < 1; l++) {
         bottomY.push(mbsplashP ^ 2);
      }
         agreementU.push(bottomY.length << (Math.min(Math.abs(1), 4)));
      typingB = `${typingB.length}`;
   }
      setIsRefreshing(true);
    }
    try {

      ewardedR = `${ewardedR.length % 1}`;
      mutedt ^= mutedt / (Math.max(previewW.length, 8));
       let statisticsd = String.fromCharCode(116,95,51,0);
      let basketballZ = String.fromCharCode(97,107,122,101,116,52,51,118,0) == statisticsd;
      do {
         statisticsd = `${(String.fromCharCode(115,0) == statisticsd ? statisticsd.length : statisticsd.length)}`;
         if (basketballZ) {
            break;
         }
      } while ((statisticsd == statisticsd) && basketballZ);
         statisticsd = `${statisticsd.length ^ statisticsd.length}`;
      let righto = statisticsd == String.fromCharCode(109,102,118,121,0);
      do {
         statisticsd = `${2 + statisticsd.length}`;
         if (righto) {
            break;
         }
      } while (righto && (statisticsd == statisticsd));
      minivodq += parseFloat(`${incidentZ.length}`);
   if ((5 - previewU.size) >= 2 || (5 - previewU.size) >= 1) {
       let buttonx = String.fromCharCode(115,116,97,114,114,101,100,95,54,95,53,57,0);
       let tumbnailf: Map<any, any> = new Map([[String.fromCharCode(112,95,52,53,95,102,105,108,101,102,117,110,99,0),29], [String.fromCharCode(121,95,55,55,95,112,97,116,104,110,97,109,101,0),230]]);
          let modelsi = String.fromCharCode(109,95,52,57,95,102,111,114,116,104,0);
          let default_dF: Map<any, any> = new Map([[String.fromCharCode(117,95,54,55,95,117,101,117,101,0),String.fromCharCode(114,95,53,95,111,98,116,97,105,110,0)], [String.fromCharCode(100,111,117,98,108,101,95,53,95,53,0),String.fromCharCode(114,103,98,116,111,121,118,95,51,95,51,57,0)]]);
         tumbnailf = new Map([[`${default_dF.size}`, tumbnailf.size]]);
         modelsi += `${modelsi.length % (Math.max(modelsi.length, 2))}`;
         default_dF.set(modelsi, (modelsi == String.fromCharCode(82,0) ? modelsi.length : modelsi.length));
       let ping8: Map<any, any> = new Map([[String.fromCharCode(114,101,97,115,109,95,108,95,56,55,0),155], [String.fromCharCode(108,97,116,101,115,116,95,103,95,56,54,0),704]]);
      let expiredO = 7713148 <= buttonx.length;
      do {
         buttonx = `${tumbnailf.size | 2}`;
         if (expiredO) {
            break;
         }
      } while (expiredO && (buttonx.length >= 4));
      while (2 < (2 * tumbnailf.size) && (tumbnailf.size * ping8.size) < 2) {
          let googleV = 3.0;
          let livek = 4.0;
          let klevin3: Map<any, any> = new Map([[String.fromCharCode(115,116,121,112,95,119,95,49,52,0),858], [String.fromCharCode(103,115,109,100,101,99,95,52,95,51,50,0),210], [String.fromCharCode(119,95,52,48,95,105,99,111,110,105,102,105,101,100,0),603]]);
          let whitec = 0.0;
          let untickB = true;
         tumbnailf = new Map([[`${ping8.size}`, parseInt(`${googleV}`)]]);
         googleV /= Math.max(parseFloat(`${parseInt(`${livek}`) >> (Math.min(Math.abs(klevin3.size), 5))}`), 2);
         livek -= (parseInt(`${livek}`) & (untickB ? 1 : 3));
         klevin3 = new Map([[`${klevin3.size}`, klevin3.size]]);
         whitec *= parseFloat(`${1 / (Math.max(4, parseInt(`${whitec}`)))}`);
         break;
      }
          let zhengpianZ: Map<any, any> = new Map([[String.fromCharCode(116,97,110,115,105,103,95,106,95,53,52,0),String.fromCharCode(118,97,114,121,95,113,95,56,50,0)], [String.fromCharCode(115,95,52,50,95,99,117,115,116,111,109,105,122,101,0),String.fromCharCode(108,111,110,103,101,115,116,95,100,95,51,52,0)], [String.fromCharCode(106,95,50,48,95,117,110,100,101,102,105,110,101,100,0),String.fromCharCode(109,95,49,50,95,112,104,105,0)]]);
          let zhengpianC: Map<any, any> = new Map([[String.fromCharCode(103,95,54,48,95,116,101,115,116,111,114,105,103,0),751], [String.fromCharCode(117,95,56,56,95,114,101,109,98,0),205], [String.fromCharCode(105,95,57,55,95,100,105,115,115,105,109,105,108,97,114,105,116,121,0),787]]);
          let become0: Array<any> = [689, 118, 542];
         tumbnailf = new Map([[`${tumbnailf.size}`, buttonx.length ^ tumbnailf.size]]);
         zhengpianZ.set(`${zhengpianC.size}`, 1 / (Math.max(7, zhengpianZ.size)));
         zhengpianC = new Map([[`${zhengpianC.size}`, zhengpianC.size & 1]]);
         become0 = [zhengpianZ.size];
         ping8.set(`${buttonx}`, buttonx.length);
      previewU = new Map([[`${mbnativeB}`, typingB.length - parseInt(`${mbnativeB}`)]]);
   }
      await queryClient.resetQueries(["HomePage", id]);

   let video7 = previewU.size >= 8797805;
   do {
       let sideF = false;
         sideF = (sideF ? !sideF : !sideF);
      for (let i = 0; i < 3; i++) {
         sideF = !sideF || !sideF;
      }
         sideF = !sideF;
      previewU = new Map([[`${launcherh.length}`, 1]]);
      if (video7) {
         break;
      }
   } while (video7 && (Array.from(previewU.keys()).includes(`${launcherh.length}`)));
      main_g5 /= Math.max(ewardedR.length, 5);
   if (5.7 > mbnativeB) {
      previewW = `${typingB.length >> (Math.min(Math.abs(3), 2))}`;
   }
   if ((4.40 + minivodq) <= 5.34 || 4.73 <= (4.40 + sellF)) {
       let core0 = String.fromCharCode(97,114,103,117,109,101,110,116,115,95,99,95,49,55,0);
      for (let n = 0; n < 1; n++) {
         core0 += `${core0.length}`;
      }
       let zhuboO: Map<any, any> = new Map([[String.fromCharCode(112,95,49,55,95,116,119,105,108,105,103,104,116,0),false ], [String.fromCharCode(99,111,110,102,105,103,117,114,101,100,95,100,95,55,49,0),true ]]);
      while ((4 >> (Math.min(3, core0.length))) > 1) {
          let flipperW = false;
         core0 += `${(1 & (flipperW ? 1 : 4))}`;
         break;
      }
      sellF /= Math.max(2, parseFloat(`${core0.length}`));
   }
      setIsRefreshing(false);

   let injuryQ = 9497083 <= launcherh.length;
   do {
       let zhengpianm = 0;
       let readl = 3.0;
       let infoX = 2.0;
       let regengC = String.fromCharCode(118,95,54,48,95,105,110,105,116,105,97,116,111,114,0);
         infoX /= Math.max(parseFloat(`${parseInt(`${infoX}`)}`), 5);
      for (let d = 0; d < 1; d++) {
         zhengpianm &= 2;
      }
         infoX *= parseFloat(`${regengC.length}`);
         readl *= parseFloat(`${regengC.length ^ 1}`);
      if ((4.98 * readl) <= 1.35 && 3.0 <= (4.98 * infoX)) {
          let megaphoneJ: Array<any> = [465, 495];
          let minivodT = String.fromCharCode(108,95,55,55,95,112,114,111,112,111,115,101,0);
          let changed = String.fromCharCode(105,95,51,57,95,116,119,105,99,101,0);
          let checkboxM = String.fromCharCode(112,95,56,49,95,109,100,110,115,0);
          let ecopy_sn9 = 1.0;
         readl /= Math.max(2, parseFloat(`${parseInt(`${infoX}`)}`));
         megaphoneJ.push(parseInt(`${ecopy_sn9}`) >> (Math.min(checkboxM.length, 5)));
         minivodT = "3";
         changed = `${2 | megaphoneJ.length}`;
         checkboxM = `${parseInt(`${ecopy_sn9}`) + 3}`;
      }
       let field6 = String.fromCharCode(120,95,53,54,95,97,117,116,111,114,101,118,101,114,115,101,100,0);
       let manifests = String.fromCharCode(114,95,55,51,95,110,97,110,112,97,0);
      while (2 > (3 / (Math.max(9, field6.length))) || 5 > (field6.length / 3)) {
          let catalogl = false;
         zhengpianm -= zhengpianm;
         catalogl = (!catalogl ? catalogl : !catalogl);
         break;
      }
      for (let r = 0; r < 1; r++) {
          let inactiveR = String.fromCharCode(109,95,56,54,95,116,114,101,108,108,105,115,0);
          let submito = 3.0;
          let tooltipsK = 4.0;
         field6 = `${parseInt(`${readl}`) ^ parseInt(`${infoX}`)}`;
         inactiveR += `${parseInt(`${tooltipsK}`)}`;
         submito /= Math.max(1, inactiveR.length >> (Math.min(Math.abs(2), 3)));
         tooltipsK -= parseFloat(`${parseInt(`${submito}`)}`);
      }
         field6 += `${parseInt(`${infoX}`)}`;
      for (let h = 0; h < 3; h++) {
         infoX /= Math.max(2, parseFloat(`${2 + regengC.length}`));
      }
         manifests = `${regengC.length - 2}`;
      for (let j = 0; j < 2; j++) {
         infoX += (parseFloat(`${manifests == String.fromCharCode(78,0) ? field6.length : manifests.length}`));
      }
      launcherh = [3];
      if (injuryQ) {
         break;
      }
   } while ((1 < launcherh.length) && injuryQ);
   for (let s = 0; s < 3; s++) {
      minivodq /= Math.max(4, (parseFloat(`${ewardedR == String.fromCharCode(51,0) ? ewardedR.length : parseInt(`${launcher5}`)}`)));
   }
      previewU = new Map([[`${sellF}`, 3 + parseInt(`${sellF}`)]]);
   for (let o = 0; o < 3; o++) {
       let detailsw: Array<any> = [809, 369, 791];
       let injury2 = 5.0;
       let fileu = 2.0;
       let sortS = String.fromCharCode(101,95,51,55,95,116,111,109,105,99,0);
          let mbsplashN = String.fromCharCode(120,95,54,95,112,97,114,97,109,99,104,97,110,103,101,0);
         fileu += 3;
         mbsplashN = `${mbsplashN.length}`;
      let b_imageu = 6622515.0 >= injury2;
      do {
         injury2 += parseFloat(`${parseInt(`${injury2}`)}`);
         if (b_imageu) {
            break;
         }
      } while ((3.21 == (injury2 / (Math.max(7, parseFloat(`${sortS.length}`))))) && b_imageu);
      while ((parseInt(`${injury2}`) / (Math.max(detailsw.length, 7))) == 1 || (3.20 / (Math.max(2, injury2))) == 2.63) {
         detailsw = [parseInt(`${injury2}`) & sortS.length];
         break;
      }
          let containerU = 4.0;
          let singleB = String.fromCharCode(108,111,99,97,108,105,122,97,116,105,111,110,95,97,95,56,53,0);
          let gesture3: Map<any, any> = new Map([[String.fromCharCode(115,117,98,114,101,115,117,108,116,95,57,95,51,52,0),String.fromCharCode(113,101,120,112,110,101,103,95,51,95,53,55,0)], [String.fromCharCode(117,95,51,55,95,99,111,110,102,111,114,109,97,110,99,101,0),String.fromCharCode(121,115,108,111,103,95,114,95,51,53,0)]]);
         detailsw.push(detailsw.length / 3);
         containerU += parseFloat(`${2}`);
         singleB = `${parseInt(`${containerU}`)}`;
         gesture3 = new Map([[`${gesture3.size}`, singleB.length >> (Math.min(3, Math.abs(gesture3.size)))]]);
      for (let n = 0; n < 3; n++) {
          let dycreatora = false;
          let resulto = String.fromCharCode(111,95,57,48,95,114,101,99,111,110,102,105,103,117,114,101,0);
          let fillk = 3.0;
          let temperaturer = String.fromCharCode(105,112,108,105,109,97,103,101,95,122,95,49,56,0);
         sortS = `${parseInt(`${fileu}`) / (Math.max(detailsw.length, 2))}`;
         dycreatora = temperaturer.endsWith(`${fillk}`);
         resulto += `${(resulto.length * (dycreatora ? 5 : 1))}`;
         fillk /= Math.max(3, resulto.length + parseInt(`${fillk}`));
         temperaturer = `${2 - parseInt(`${fillk}`)}`;
      }
         injury2 -= parseFloat(`${parseInt(`${injury2}`)}`);
       let analytic7 = 4;
       let q_playerc: Array<any> = [String.fromCharCode(115,116,114,101,97,109,105,110,103,95,114,95,49,48,0), String.fromCharCode(112,111,105,115,115,111,110,95,118,95,51,49,0)];
       let sigmobL: Array<any> = [241, 715, 195];
      let buildL = injury2 >= 7461442.0;
      do {
          let reactnativejs4 = 3.0;
          let e_imagei = 5.0;
          let carouseli = 5.0;
          let pauseO = String.fromCharCode(121,117,118,121,117,118,95,112,95,55,57,0);
         injury2 /= Math.max(3, parseFloat(`${parseInt(`${e_imagei}`)}`));
         reactnativejs4 *= parseFloat(`${parseInt(`${reactnativejs4}`) & parseInt(`${carouseli}`)}`);
         e_imagei += pauseO.length;
         carouseli += parseFloat(`${parseInt(`${reactnativejs4}`)}`);
         pauseO = `${pauseO.length}`;
         if (buildL) {
            break;
         }
      } while ((5 == analytic7) && buildL);
          let launchere = 0.0;
          let thumbnaill: Array<any> = [691, 240];
         q_playerc.push(3);
         launchere /= Math.max(parseFloat(`${parseInt(`${launchere}`) / (Math.max(thumbnaill.length, 10))}`), 4);
         thumbnaill = [parseInt(`${launchere}`) % 3];
          let resulti = String.fromCharCode(99,108,101,97,114,105,110,103,95,122,95,56,0);
          let topicn = 3;
         sortS += "1";
         resulti += `${topicn}`;
         topicn &= resulti.length >> (Math.min(4, Math.abs(topicn)));
      while (sortS.endsWith(`${fileu}`)) {
         fileu += analytic7;
         break;
      }
      dicea.set(typingB, typingB.length);
   }
      setNavId(id);

   while ((previewU.size * 3) == 5) {
       let popupl = String.fromCharCode(106,95,52,50,95,115,116,114,101,97,109,115,0);
       let stringsZ = String.fromCharCode(109,111,109,101,110,116,97,114,121,95,56,95,55,48,0);
       let searchF: Array<any> = [String.fromCharCode(105,109,112,114,105,110,116,95,48,95,51,52,0), String.fromCharCode(121,95,55,49,95,115,116,97,114,116,105,110,103,0), String.fromCharCode(109,105,100,110,105,103,104,116,95,112,95,52,0)];
          let benefitp = String.fromCharCode(97,95,55,52,95,112,115,102,98,0);
         stringsZ += `${(String.fromCharCode(105,0) == popupl ? benefitp.length : popupl.length)}`;
          let taiwanq: Array<any> = [442, 995];
          let countdownV = false;
         stringsZ = `${popupl.length << (Math.min(Math.abs(1), 2))}`;
         taiwanq = [(3 * (countdownV ? 5 : 2))];
         countdownV = !countdownV;
      let stationsO = stringsZ == String.fromCharCode(104,49,55,0);
      do {
         stringsZ = `${popupl.length}`;
         if (stationsO) {
            break;
         }
      } while (stationsO && ((stringsZ.length << (Math.min(1, searchF.length))) >= 3));
      for (let c = 0; c < 1; c++) {
         stringsZ = `${popupl.length ^ 1}`;
      }
         searchF.push(stringsZ.length % (Math.max(popupl.length, 10)));
         searchF.push(3 + stringsZ.length);
         searchF.push(1);
      while (popupl.length > 5) {
         popupl = `${(String.fromCharCode(81,0) == popupl ? stringsZ.length : popupl.length)}`;
         break;
      }
      if (searchF.length <= stringsZ.length) {
         stringsZ += `${3 * popupl.length}`;
      }
      previewW += `${3 << (Math.min(4, searchF.length))}`;
      break;
   }
   let stationC = 8376179 >= rewindl;
   do {
      rewindl -= previewU.size >> (Math.min(1, Math.abs(main_g5)));
      if (stationC) {
         break;
      }
   } while ((rewindl <= dicea.size) && stationC);
   let u_positionz = String.fromCharCode(55,95,99,118,53,120,0) == incidentZ;
   do {
       let sansn = 0.0;
       let settingsv = String.fromCharCode(103,95,56,95,105,110,116,101,114,108,97,99,101,100,0);
       let rewindg = 5.0;
      while (3.92 == (1.58 + rewindg) || (rewindg + 1.58) == 3.1) {
          let textr = String.fromCharCode(102,108,97,99,95,113,95,49,50,0);
          let fullL = String.fromCharCode(120,95,52,56,95,110,112,111,105,110,116,115,0);
         rewindg /= Math.max(4, textr.length % (Math.max(1, 1)));
         textr = `${2 | fullL.length}`;
         fullL += `${fullL.length >> (Math.min(Math.abs(3), 3))}`;
         break;
      }
      while (5.70 > (settingsv.length * rewindg) && 5.70 > (rewindg * settingsv.length)) {
         settingsv = `${3 + parseInt(`${rewindg}`)}`;
         break;
      }
         settingsv = `${settingsv.length}`;
      for (let j = 0; j < 1; j++) {
          let applicationK = true;
          let countdownc: Array<any> = [483, 93, 891];
          let reportN = 0.0;
          let quest1 = String.fromCharCode(109,97,110,105,102,101,115,116,95,48,95,50,51,0);
          let becomeh = 2;
         settingsv = `${quest1.length << (Math.min(Math.abs(1), 5))}`;
         applicationK = countdownc.includes(applicationK);
         countdownc.push(3 ^ countdownc.length);
         reportN /= Math.max(3 + countdownc.length, 5);
         quest1 += "2";
         becomeh &= 2;
      }
          let invite5 = String.fromCharCode(121,95,53,51,95,99,111,110,100,105,116,105,111,110,97,108,0);
          let nativeexG = 3;
         sansn += parseFloat(`${1}`);
         invite5 += `${nativeexG}`;
         nativeexG |= nativeexG;
      if (settingsv.endsWith(`${rewindg}`)) {
         settingsv += `${1 | parseInt(`${sansn}`)}`;
      }
      if ((1 + settingsv.length) < 1 || 1.35 < (4.34 * sansn)) {
          let x_center7 = 2;
          let animation9: Array<any> = [String.fromCharCode(115,99,114,117,98,98,101,114,95,110,95,49,51,0), String.fromCharCode(113,95,51,57,95,114,101,99,111,103,110,105,122,101,100,0), String.fromCharCode(100,111,119,110,108,111,97,100,95,106,95,49,50,0)];
          let bottomv = true;
          let roundV = String.fromCharCode(102,105,120,115,116,114,105,100,101,95,100,95,56,57,0);
          let projectG: Map<any, any> = new Map([[String.fromCharCode(119,95,55,95,115,117,112,101,114,118,105,101,119,0),726], [String.fromCharCode(105,109,109,101,100,105,97,116,101,108,121,95,100,95,55,50,0),387], [String.fromCharCode(97,108,116,114,101,102,95,54,95,52,0),314]]);
         settingsv = `${animation9.length % 1}`;
         x_center7 >>= Math.min(4, Math.abs(2));
         animation9.push((String.fromCharCode(75,0) == roundV ? x_center7 : roundV.length));
         bottomv = String.fromCharCode(71,0) == roundV || projectG.size > 95;
         projectG.set(`${x_center7}`, roundV.length);
      }
      let mini7 = settingsv.length >= 8899981;
      do {
         settingsv = `${parseInt(`${sansn}`)}`;
         if (mini7) {
            break;
         }
      } while (mini7 && (3.100 < sansn));
      if (4 == (settingsv.length * 5)) {
          let progressb = String.fromCharCode(115,101,116,99,116,120,95,100,95,50,49,0);
          let detailsW = 2;
          let arrowi = true;
         settingsv = "1";
         progressb += "3";
         detailsW <<= Math.min(3, progressb.length);
         arrowi = detailsW < 76;
      }
      incidentZ += `${previewU.size}`;
      if (u_positionz) {
         break;
      }
   } while (u_positionz && ((5 / (Math.max(6, incidentZ.length))) == 4 && 2.62 == (minivodq / 4.32)));
       let selectedf = String.fromCharCode(117,112,100,97,116,101,95,106,95,53,0);
       let utils9: Array<any> = [230, 895];
       let mbnativeadvancedE = 3.0;
       let countdownQ = 2.0;
       let selectc = String.fromCharCode(103,95,53,57,95,97,112,116,120,104,100,0);
       let specv = String.fromCharCode(117,110,105,111,110,101,100,95,105,95,53,49,0);
       let toponF = 1.0;
       let blacklistf = 4.0;
          let handlerJ: Map<any, any> = new Map([[String.fromCharCode(103,95,57,50,95,102,111,117,110,100,0),158], [String.fromCharCode(104,95,52,53,95,99,111,109,112,101,110,115,97,116,101,100,0),14], [String.fromCharCode(100,95,50,49,95,114,101,115,105,122,101,114,0),348]]);
         specv = `${selectedf.length}`;
         handlerJ = new Map([[`${handlerJ.size}`, handlerJ.size - handlerJ.size]]);
       let mini1 = 2.0;
       let anewinterstitialz = 5.0;
         selectedf += `${2 - parseInt(`${anewinterstitialz}`)}`;
       let photot = 1.0;
      for (let r = 0; r < 2; r++) {
         toponF *= (parseFloat(`${String.fromCharCode(97,0) == specv ? utils9.length : specv.length}`));
      }
      if (!specv.startsWith(`${countdownQ}`)) {
         countdownQ += parseFloat(`${3}`);
      }
      ewardedR += `${launcherh.length + ewardedR.length}`;
      utils9 = [parseInt(`${mbnativeadvancedE}`) & 2];
      setShowHomeLoading(false);

   let eighteenr = mbnativeB >= 9645544.0;
   do {
      mbnativeB -= parseFloat(`${parseInt(`${mbnativeB}`)}`);
      if (eighteenr) {
         break;
      }
   } while ((4 < (parseInt(`${mbnativeB}`) / (Math.max(ewardedR.length, 2))) && 5 < (ewardedR.length - 4)) && eighteenr);
   while (previewW.endsWith(typingB)) {
      previewW += `${dicea.size}`;
      break;
   }
   let fieldB = minivodq <= 7044307.0;
   do {
      minivodq -= parseFloat(`${previewU.size ^ parseInt(`${minivodq}`)}`);
      if (fieldB) {
         break;
      }
   } while (fieldB && ((4 >> (Math.min(1, previewW.length))) == 2));
      mutedt |= previewW.length;

      return;
    } catch (error) {

   if (1.38 == (minivodq / (Math.max(parseFloat(`${ewardedR.length}`), 3))) || (minivodq / (Math.max(8, parseFloat(`${ewardedR.length}`)))) == 1.38) {
      minivodq /= Math.max(2, parseFloat(`${launcherh.length << (Math.min(previewW.length, 4))}`));
   }
      launcherh.push(ewardedR.length);
      mbnativeB *= parseFloat(`${2 >> (Math.min(Math.abs(parseInt(`${launcher5}`)), 4))}`);
   let heartg = launcherh.length >= 6563993;
   do {
      launcherh.push(previewU.size << (Math.min(Math.abs(1), 4)));
      if (heartg) {
         break;
      }
   } while (heartg && (ewardedR.endsWith(`${launcherh.length}`)));
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    const handleTabPress = async () => {
       let turnM = false;
    let greya = false;
    let screenb = String.fromCharCode(100,95,50,49,95,101,113,117,97,116,97,98,108,101,0);
    let topic6 = false;
    let analytic2: Array<any> = [180, 763, 78];
    let filedX = String.fromCharCode(105,95,52,49,95,115,109,111,111,116,104,108,121,0);
    let scoreD = false;
    let quest6 = String.fromCharCode(100,95,56,54,95,115,105,116,101,109,97,112,0);
    let logoi = String.fromCharCode(98,95,56,53,95,114,101,115,116,111,114,97,116,105,111,110,0);
    let sport3 = 1;
    let auto_tks = String.fromCharCode(104,105,100,105,110,103,95,102,95,49,53,0);
    let typesW: Array<any> = [848, 463];
    let ajaxq = String.fromCharCode(98,108,111,98,95,56,95,49,54,0);
    let termsV = String.fromCharCode(109,97,112,112,105,110,103,115,95,108,95,50,56,0);
    let ticked8: Map<any, any> = new Map([[String.fromCharCode(112,97,114,97,109,95,101,95,51,54,0),110], [String.fromCharCode(105,114,97,110,100,95,104,95,54,56,0),496], [String.fromCharCode(107,95,56,50,95,99,111,108,108,97,112,115,101,100,0),496]]);
    let detailsP = true;
    let collectiont = 2.0;
   if (5 >= (1 & sport3) && 1 >= sport3) {
      greya = 99 >= sport3;
   }
      greya = typesW.length == 21;
   let launch8 = 5488202 >= analytic2.length;
   do {
       let areaG = 4.0;
       let annerS = String.fromCharCode(122,101,114,111,101,115,95,48,95,51,49,0);
      for (let o = 0; o < 1; o++) {
          let reminderj = String.fromCharCode(105,110,116,114,97,112,114,101,100,95,114,95,49,0);
          let trophyJ = String.fromCharCode(100,95,50,53,95,100,101,108,105,109,105,116,101,114,0);
         annerS = `${reminderj.length}`;
         reminderj = `${(String.fromCharCode(70,0) == trophyJ ? trophyJ.length : trophyJ.length)}`;
      }
      for (let r = 0; r < 1; r++) {
          let wnewsb = String.fromCharCode(102,108,111,111,114,115,95,97,95,54,52,0);
          let pausep = 3.0;
          let controlsW: Array<any> = [String.fromCharCode(117,95,57,57,95,118,97,114,105,110,102,111,0), String.fromCharCode(108,95,56,57,95,98,108,111,99,107,100,99,0)];
         areaG += parseFloat(`${annerS.length / 3}`);
         wnewsb = `${controlsW.length}`;
         pausep -= parseInt(`${pausep}`) << (Math.min(3, Math.abs(3)));
         controlsW.push(controlsW.length * wnewsb.length);
      }
       let scopy_4iJ: Array<any> = [797, 319, 358];
       let o_images: Array<any> = [791, 500];
      if (1 > scopy_4iJ.length) {
          let heartx: Map<any, any> = new Map([[String.fromCharCode(118,100,114,97,119,97,98,108,101,95,98,95,54,54,0),false ], [String.fromCharCode(114,111,113,118,105,100,101,111,95,111,95,52,56,0),true ], [String.fromCharCode(97,118,102,105,108,116,101,114,95,101,95,56,55,0),true ]]);
          let telegramN = 2;
         scopy_4iJ.push(heartx.size);
         heartx.set(`${telegramN}`, 3 - telegramN);
      }
         annerS = `${scopy_4iJ.length >> (Math.min(Math.abs(3), 5))}`;
       let shirtq = 0;
      analytic2.push(logoi.length);
      if (launch8) {
         break;
      }
   } while (launch8 && (turnM));
      scoreD = auto_tks.endsWith(`${sport3}`);
      filedX += `${sport3}`;

      if (isFocused && !isRefreshing) {

   let private_tn = topic6 ? !topic6 : topic6;
   do {
       let signinupz: Array<any> = [134, 167];
       let plashF = true;
       let promotionQ: Array<any> = [140, 743];
       let skip5 = 0.0;
      while (promotionQ.length <= 5) {
         promotionQ.push(parseInt(`${skip5}`) >> (Math.min(4, Math.abs(3))));
         break;
      }
         promotionQ = [3 ^ parseInt(`${skip5}`)];
      let buildI = skip5 <= 7265294.0;
      do {
         skip5 += parseFloat(`${promotionQ.length}`);
         if (buildI) {
            break;
         }
      } while ((signinupz.includes(skip5)) && buildI);
      for (let u = 0; u < 2; u++) {
          let layoutX: Map<any, any> = new Map([[String.fromCharCode(115,109,104,100,95,54,95,51,50,0),794], [String.fromCharCode(110,95,54,53,95,107,101,121,103,101,110,0),646], [String.fromCharCode(119,95,57,48,95,114,116,112,112,114,111,116,111,0),876]]);
          let alertT = String.fromCharCode(111,114,105,103,105,110,97,108,95,53,95,53,49,0);
         plashF = 32 >= promotionQ.length || alertT == String.fromCharCode(99,0);
         layoutX = new Map([[`${layoutX.size}`, layoutX.size * 3]]);
         alertT += `${layoutX.size + layoutX.size}`;
      }
      for (let f = 0; f < 3; f++) {
          let kuaishouB = 3.0;
          let nativez: Array<any> = [400, 565];
          let minivod6 = 2.0;
         promotionQ.push(1);
         kuaishouB *= nativez.length;
         nativez.push(1);
         minivod6 += parseFloat(`${2 % (Math.max(7, nativez.length))}`);
      }
      while (promotionQ.includes(skip5)) {
         skip5 /= Math.max(parseFloat(`${3 | promotionQ.length}`), 5);
         break;
      }
      for (let q = 0; q < 1; q++) {
         signinupz.push(3);
      }
       let flipperz = 3;
       let castingC = 2;
       let profilew = String.fromCharCode(113,95,55,55,95,114,101,97,100,97,98,108,101,0);
      for (let q = 0; q < 1; q++) {
         plashF = 94 <= profilew.length;
      }
       let giftt = String.fromCharCode(106,95,56,53,95,115,99,114,101,101,110,112,114,101,115,115,111,0);
      for (let e = 0; e < 1; e++) {
         signinupz.push(3);
      }
      topic6 = promotionQ.length < parseInt(`${skip5}`);
      if (private_tn) {
         break;
      }
   } while (private_tn && ((analytic2.length * 3) < 5 && 3 < analytic2.length));
       let videojs8 = 5.0;
       let layoutk: Map<any, any> = new Map([[String.fromCharCode(119,95,49,49,95,112,114,111,98,115,0),true ], [String.fromCharCode(99,95,52,51,95,99,111,112,121,116,111,0),true ]]);
       let zoome = String.fromCharCode(103,100,115,112,95,53,95,53,0);
       let listQ = String.fromCharCode(108,95,49,53,95,98,101,104,97,118,105,111,114,0);
       let flyer6 = String.fromCharCode(109,105,110,117,116,101,95,101,95,57,56,0);
      for (let g = 0; g < 3; g++) {
         videojs8 -= parseFloat(`${listQ.length}`);
      }
      let userJ = listQ.length >= 8018652;
      do {
          let with_78o = String.fromCharCode(110,95,54,53,95,116,111,112,109,111,115,116,0);
          let membershipG = String.fromCharCode(117,95,50,52,95,97,118,105,100,0);
          let hooksP = 4.0;
         listQ = `${flyer6.length}`;
         with_78o = `${membershipG.length << (Math.min(Math.abs(2), 5))}`;
         membershipG += `${1 & membershipG.length}`;
         hooksP *= parseFloat(`${2}`);
         if (userJ) {
            break;
         }
      } while (userJ && (zoome == listQ));
      for (let d = 0; d < 2; d++) {
          let component2 = 1.0;
          let uploadO: Map<any, any> = new Map([[String.fromCharCode(97,95,56,54,95,100,111,99,105,100,115,0),String.fromCharCode(98,95,49,48,95,112,114,101,115,115,105,110,103,0)], [String.fromCharCode(104,108,115,101,110,99,95,104,95,57,55,0),String.fromCharCode(116,115,99,99,95,119,95,50,57,0)], [String.fromCharCode(115,116,114,101,97,109,105,110,103,95,100,95,52,50,0),String.fromCharCode(99,111,110,116,101,120,116,99,111,110,102,105,103,95,104,95,57,57,0)]]);
          let filterd = String.fromCharCode(113,95,56,51,95,99,111,110,115,117,109,101,114,0);
          let selectM = String.fromCharCode(108,95,54,52,95,97,100,109,105,110,115,0);
          let confirmationK = String.fromCharCode(120,95,56,57,95,113,101,120,112,110,101,103,0);
         layoutk.set(`${component2}`, (String.fromCharCode(53,0) == zoome ? zoome.length : parseInt(`${component2}`)));
         uploadO.set(confirmationK, uploadO.size / 1);
         filterd = "2";
         selectM += `${confirmationK.length}`;
      }
      if (!flyer6.includes(listQ)) {
         flyer6 = `${parseInt(`${videojs8}`)}`;
      }
      let notificationJ = videojs8 <= 8705890.0;
      do {
         videojs8 /= Math.max((parseFloat(`${zoome == String.fromCharCode(66,0) ? zoome.length : layoutk.size}`)), 4);
         if (notificationJ) {
            break;
         }
      } while (notificationJ && (3 > zoome.length));
      if ((listQ.length % (Math.max(3, layoutk.size))) <= 4 && (layoutk.size % (Math.max(listQ.length, 6))) <= 4) {
         listQ = `${layoutk.size}`;
      }
          let tooltipsn: Array<any> = [918, 847];
          let analyticD = String.fromCharCode(112,99,97,99,104,101,95,56,95,51,57,0);
          let club4: Array<any> = [581, 920, 764];
         videojs8 *= parseFloat(`${parseInt(`${videojs8}`) >> (Math.min(2, Math.abs(1)))}`);
         tooltipsn = [tooltipsn.length >> (Math.min(Math.abs(3), 2))];
         analyticD += "3";
         club4 = [club4.length & 1];
          let rewindh = String.fromCharCode(99,111,100,101,100,95,53,95,55,50,0);
          let k_unlockZ = 0.0;
         flyer6 += `${3 << (Math.min(1, Math.abs(parseInt(`${videojs8}`))))}`;
         rewindh += `${rewindh.length}`;
         k_unlockZ *= (rewindh == String.fromCharCode(83,0) ? parseInt(`${k_unlockZ}`) : rewindh.length);
      analytic2 = [sport3];
   while (turnM || 4 < logoi.length) {
       let bootsplashd: Map<any, any> = new Map([[String.fromCharCode(112,95,54,55,95,111,100,100,97,118,103,0),String.fromCharCode(108,95,52,53,95,100,105,115,99,117,115,115,105,111,110,0)], [String.fromCharCode(100,101,99,101,108,101,114,97,116,101,100,95,109,95,52,51,0),String.fromCharCode(100,102,99,116,95,111,95,49,51,0)], [String.fromCharCode(116,95,56,52,95,98,105,103,0),String.fromCharCode(111,100,105,110,103,95,49,95,51,53,0)]]);
       let renewr = 2;
          let episodeR = true;
         renewr %= Math.max(1, 1);
         episodeR = !episodeR;
          let schedulez = 3.0;
          let yellow9 = 3.0;
         bootsplashd.set(`${renewr}`, renewr & 1);
         schedulez *= parseInt(`${yellow9}`);
         yellow9 /= Math.max(4, parseInt(`${schedulez}`));
      if (bootsplashd.get(`${renewr}`) == null) {
         bootsplashd = new Map([[`${bootsplashd.size}`, renewr]]);
      }
         bootsplashd = new Map([[`${bootsplashd.size}`, renewr | bootsplashd.size]]);
         bootsplashd = new Map([[`${bootsplashd.size}`, renewr * 2]]);
      for (let d = 0; d < 3; d++) {
          let target2 = 1;
         renewr <<= Math.min(Math.abs(target2 % (Math.max(4, renewr))), 5);
      }
      logoi += `${((topic6 ? 5 : 4))}`;
      break;
   }
   let brightnessb = turnM ? !turnM : turnM;
   do {
      turnM = (69 == ((topic6 ? screenb.length : 69) * screenb.length));
      if (brightnessb) {
         break;
      }
   } while (brightnessb && (analytic2.length < 2 || (2 * analytic2.length) < 2));
      turnM = (!scoreD ? !greya : !scoreD);
        setIsRefreshing((prevIsRefreshing) => {

       let launchu: Map<any, any> = new Map([[String.fromCharCode(105,116,101,114,97,116,101,95,119,95,55,48,0),223], [String.fromCharCode(104,95,57,50,95,100,105,115,99,0),695]]);
         launchu = new Map([[`${launchu.size}`, 2]]);
          let flipperq = String.fromCharCode(119,95,56,53,95,103,111,108,100,0);
          let overlay7 = 2.0;
         launchu.set(flipperq, parseInt(`${overlay7}`));
      if (!Array.from(launchu.values()).includes(launchu.size)) {
         launchu = new Map([[`${launchu.size}`, launchu.size >> (Math.min(5, Math.abs(launchu.size)))]]);
      }
      greya = (logoi.length >> (Math.min(4, analytic2.length))) <= 1;
      filedX += `${2 << (Math.min(1, quest6.length))}`;
   for (let d = 0; d < 1; d++) {
       let updatesA = String.fromCharCode(118,95,56,51,95,99,111,111,108,100,111,119,110,0);
       let dycreatorN = String.fromCharCode(98,95,52,48,95,108,111,99,107,0);
       let gradlewq: Map<any, any> = new Map([[String.fromCharCode(102,108,116,112,95,53,95,49,48,0),String.fromCharCode(97,95,51,53,95,112,114,101,115,101,114,118,101,115,0)], [String.fromCharCode(99,111,115,105,95,105,95,54,48,0),String.fromCharCode(99,111,109,112,114,101,115,115,111,114,95,50,95,53,50,0)]]);
       let less3 = false;
       let trophyg = 0.0;
          let stara: Map<any, any> = new Map([[String.fromCharCode(114,101,112,108,97,99,101,100,95,56,95,51,51,0),64], [String.fromCharCode(116,95,55,56,95,117,110,101,109,112,116,121,0),921]]);
          let indexk = String.fromCharCode(104,117,102,102,121,117,118,95,102,95,56,57,0);
          let nativem = String.fromCharCode(115,105,110,117,115,111,105,100,97,108,95,118,95,57,55,0);
         gradlewq.set(`${indexk}`, (indexk == String.fromCharCode(119,0) ? indexk.length : gradlewq.size));
         stara.set(nativem, stara.size % (Math.max(3, 5)));
         nativem = `${(String.fromCharCode(115,0) == nativem ? nativem.length : stara.size)}`;
       let styles = 0.0;
       let mbsplashw = 5.0;
          let fnewsy = String.fromCharCode(103,101,116,117,114,108,99,111,110,116,101,120,116,95,55,95,56,51,0);
         mbsplashw += parseFloat(`${parseInt(`${trophyg}`) * 2}`);
         fnewsy += `${fnewsy.length}`;
          let aboutZ = String.fromCharCode(97,117,116,111,115,99,114,111,108,108,105,110,103,95,118,95,53,52,0);
          let episodeso = String.fromCharCode(103,95,51,53,95,114,101,112,108,97,121,101,100,0);
         updatesA += "2";
         aboutZ += `${(episodeso == String.fromCharCode(121,0) ? aboutZ.length : episodeso.length)}`;
         mbsplashw += parseFloat(`${parseInt(`${styles}`) >> (Math.min(3, Math.abs(3)))}`);
          let matchesn = String.fromCharCode(103,95,54,55,95,117,110,122,116,101,108,108,0);
          let nalyticst = 1.0;
         gradlewq = new Map([[`${gradlewq.size}`, gradlewq.size << (Math.min(Math.abs(1), 3))]]);
         matchesn += `${matchesn.length}`;
         nalyticst *= parseFloat(`${matchesn.length}`);
         dycreatorN = `${updatesA.length}`;
       let updatesK: Array<any> = [String.fromCharCode(108,95,54,55,95,97,117,116,104,111,114,105,122,101,100,0), String.fromCharCode(111,95,52,56,95,112,108,97,110,0), String.fromCharCode(100,105,118,95,104,95,51,48,0)];
         less3 = String.fromCharCode(97,0) == updatesA || 52 == updatesK.length;
      if ((5 >> (Math.min(5, dycreatorN.length))) <= 1 || 4.94 <= (mbsplashw / 2.66)) {
          let videop = false;
          let backgroundM = String.fromCharCode(114,101,109,97,116,114,105,120,105,110,103,95,104,95,52,0);
         dycreatorN = `${parseInt(`${styles}`)}`;
         videop = backgroundM.length < 22;
         backgroundM += `${(1 - (videop ? 5 : 3))}`;
      }
          let livei = String.fromCharCode(100,105,115,97,98,108,105,110,103,95,53,95,53,53,0);
         dycreatorN += `${gradlewq.size | 3}`;
         livei = `${livei.length}`;
       let userG: Array<any> = [611, 685, 189];
       let updatest: Array<any> = [357, 957];
      while (less3) {
          let video6: Array<any> = [471, 264];
          let flyer_ = 2.0;
          let leaguen = true;
          let twitterx = String.fromCharCode(97,102,116,101,114,101,102,102,101,99,116,115,107,101,121,112,97,116,104,95,117,95,56,55,0);
         less3 = !leaguen;
         video6.push(video6.length);
         flyer_ /= Math.max(parseFloat(`${video6.length}`), 2);
         leaguen = 19 < video6.length && 47.91 < flyer_;
         twitterx = "1";
         break;
      }
      if ((updatest.length ^ 3) <= 2 && (updatesA.length ^ updatest.length) <= 3) {
          let redirect9: Array<any> = [660, 639];
          let viewerN = true;
          let disconnectedN: Array<any> = [307, 526];
          let pauseU = 2.0;
          let ticked3 = String.fromCharCode(115,97,109,112,108,101,102,109,116,95,53,95,54,51,0);
         updatest = [(ticked3 == String.fromCharCode(71,0) ? ticked3.length : disconnectedN.length)];
         redirect9.push(2 >> (Math.min(1, redirect9.length)));
         viewerN = pauseU > 28.83;
         disconnectedN = [((viewerN ? 3 : 1) + redirect9.length)];
         pauseU *= ((viewerN ? 1 : 5) << (Math.min(Math.abs(1), 1)));
      }
      if (!userG.includes(updatest.length)) {
         updatest = [(dycreatorN == String.fromCharCode(119,0) ? dycreatorN.length : updatesK.length)];
      }
      filedX += `${gradlewq.size}`;
   }
       let matchI: Array<any> = [170, 154];
      while ((matchI.length & 5) <= 3 && 5 <= (matchI.length & matchI.length)) {
         matchI.push(matchI.length);
         break;
      }
      let watchH = 9718344 <= matchI.length;
      do {
          let sound1 = 2.0;
          let largea = 5.0;
          let minimizeO = String.fromCharCode(102,105,110,103,101,114,112,114,105,110,116,115,95,97,95,53,53,0);
          let readH: Map<any, any> = new Map([[String.fromCharCode(115,95,50,52,95,102,109,116,99,111,110,118,101,114,116,0),989], [String.fromCharCode(99,108,97,115,115,101,115,95,109,95,54,49,0),261], [String.fromCharCode(97,118,102,105,108,116,101,114,95,121,95,54,56,0),190]]);
         matchI.push(2 ^ minimizeO.length);
         sound1 -= parseFloat(`${readH.size | 1}`);
         largea /= Math.max(parseFloat(`${parseInt(`${largea}`)}`), 2);
         minimizeO = `${parseInt(`${largea}`) % (Math.max(readH.size, 2))}`;
         if (watchH) {
            break;
         }
      } while ((matchI.includes(matchI.length)) && watchH);
          let weibon = String.fromCharCode(106,95,56,54,95,101,120,97,109,112,108,101,0);
          let member0: Map<any, any> = new Map([[String.fromCharCode(99,95,57,57,95,118,97,108,105,100,97,116,105,111,110,115,0),false ], [String.fromCharCode(107,105,116,116,121,95,119,95,52,48,0),false ]]);
         matchI.push(matchI.length);
         weibon += "3";
         member0 = new Map([[`${member0.size}`, weibon.length << (Math.min(1, Math.abs(member0.size)))]]);
      quest6 = `${((scoreD ? 4 : 4))}`;
       let mbridgei = String.fromCharCode(97,110,110,111,116,97,116,101,95,110,95,49,55,0);
          let bodanc: Map<any, any> = new Map([[String.fromCharCode(114,95,55,51,95,101,120,112,111,114,116,0),String.fromCharCode(105,95,54,53,95,99,111,108,111,99,97,116,101,100,0)], [String.fromCharCode(120,95,54,56,95,115,111,108,105,115,116,101,110,0),String.fromCharCode(111,95,49,52,95,114,101,110,100,101,114,0)]]);
          let foregroundB = 4;
         mbridgei = `${mbridgei.length}`;
         bodanc = new Map([[`${bodanc.size}`, 2 | foregroundB]]);
         foregroundB |= 2;
         mbridgei = `${mbridgei.length - mbridgei.length}`;
         mbridgei = `${mbridgei.length}`;
      filedX = `${((greya ? 2 : 5) & typesW.length)}`;
          if (prevIsRefreshing) {

   if (screenb.endsWith(`${analytic2.length}`)) {
      screenb = `${logoi.length}`;
   }
      screenb += `${screenb.length}`;
       let catagoryx: Array<any> = [257, 859, 366];
       let skipi = 5;
         catagoryx = [1 / (Math.max(skipi, 3))];
      for (let k = 0; k < 1; k++) {
         skipi |= catagoryx.length - 1;
      }
         skipi ^= skipi;
      let eactb = 9430332 >= skipi;
      do {
          let collectionL: Map<any, any> = new Map([[String.fromCharCode(114,101,105,110,105,116,95,51,95,52,50,0),293], [String.fromCharCode(119,95,50,51,95,108,97,117,110,99,104,0),195]]);
          let circle7 = String.fromCharCode(121,95,52,53,95,110,115,112,97,99,101,115,0);
          let hooksA = String.fromCharCode(120,109,112,101,103,95,119,95,57,54,0);
         skipi >>= Math.min(Math.abs(collectionL.size), 3);
         collectionL.set(circle7, 3);
         circle7 = `${hooksA.length ^ 3}`;
         hooksA += `${hooksA.length}`;
         if (eactb) {
            break;
         }
      } while ((5 < (skipi * catagoryx.length) && 2 < (5 * skipi)) && eactb);
      if ((3 >> (Math.min(2, Math.abs(skipi)))) >= 5) {
         catagoryx.push(skipi + catagoryx.length);
      }
      for (let a = 0; a < 2; a++) {
          let roomC = String.fromCharCode(110,95,50,49,95,116,120,105,100,0);
          let bufferA = String.fromCharCode(114,95,54,95,118,99,100,97,116,97,0);
          let soundM: Map<any, any> = new Map([[String.fromCharCode(101,120,101,99,95,55,95,49,48,0),82], [String.fromCharCode(97,110,99,105,108,108,97,114,121,95,56,95,54,54,0),468]]);
         catagoryx.push(catagoryx.length);
         roomC = "2";
         bufferA += `${(String.fromCharCode(73,0) == bufferA ? bufferA.length : soundM.size)}`;
         soundM = new Map([[`${soundM.size}`, roomC.length]]);
      }
      typesW.push(1 - quest6.length);
   let i_countj = analytic2.length <= 9374667;
   do {
       let banners: Map<any, any> = new Map([[String.fromCharCode(110,95,49,50,95,114,101,115,111,108,118,101,0),false ], [String.fromCharCode(117,95,54,56,95,111,114,112,104,97,110,0),false ], [String.fromCharCode(116,95,56,57,95,116,111,112,105,99,0),false ]]);
       let utilss = 2;
       let nterstitialw = String.fromCharCode(103,95,56,57,95,100,101,97,99,116,105,118,97,116,105,110,103,0);
       let dicei: Array<any> = [85, 837];
       let miniV = String.fromCharCode(109,105,110,111,114,95,48,95,53,48,0);
       let user4 = 3;
       let package_flI = 3;
          let customc = String.fromCharCode(99,102,116,109,100,108,95,106,95,53,52,0);
          let moduleE: Map<any, any> = new Map([[String.fromCharCode(106,95,55,57,95,109,97,110,116,105,115,115,97,0),false ], [String.fromCharCode(116,105,108,101,115,95,115,95,51,0),true ], [String.fromCharCode(116,117,112,108,101,115,95,110,95,53,0),false ]]);
          let mailk = true;
         nterstitialw = `${dicei.length / 3}`;
         customc = `${(moduleE.size & (mailk ? 5 : 1))}`;
         moduleE.set(`${mailk}`, (2 | (mailk ? 2 : 5)));
         dicei.push(user4);
      for (let d = 0; d < 2; d++) {
         banners = new Map([[`${banners.size}`, utilss - banners.size]]);
      }
      while (3 <= (2 ^ utilss)) {
          let guideJ = String.fromCharCode(101,95,51,56,95,115,116,105,99,107,101,114,115,101,116,0);
          let suggestionX = 3.0;
         banners.set(`${utilss}`, banners.size & 1);
         guideJ = `${3 ^ guideJ.length}`;
         suggestionX /= Math.max(2, parseFloat(`${guideJ.length}`));
         break;
      }
      while (2 >= utilss) {
         miniV = `${nterstitialw.length & 3}`;
         break;
      }
         package_flI /= Math.max(3, 3 * user4);
      if (banners.get(`${user4}`) != null) {
         banners.set(nterstitialw, banners.size * nterstitialw.length);
      }
      let albumK = 6830812 <= utilss;
      do {
         utilss -= 1 * user4;
         if (albumK) {
            break;
         }
      } while (albumK && ((nterstitialw.length << (Math.min(Math.abs(2), 4))) == 2 || 5 == (2 << (Math.min(2, nterstitialw.length)))));
       let hongkong_ = String.fromCharCode(100,114,97,119,108,105,110,101,95,56,95,53,56,0);
         nterstitialw += "2";
         banners.set(nterstitialw, dicei.length);
      for (let r = 0; r < 3; r++) {
         dicei = [miniV.length];
      }
         user4 >>= Math.min(Math.abs(1 ^ dicei.length), 2);
      if ((user4 ^ package_flI) == 2 && 5 == (2 ^ package_flI)) {
          let steps = String.fromCharCode(112,111,115,108,105,115,116,95,98,95,57,54,0);
          let matchL = String.fromCharCode(99,114,101,97,116,101,95,55,95,55,57,0);
         package_flI -= user4 - hongkong_.length;
         steps = `${matchL.length}`;
         matchL += `${steps.length << (Math.min(Math.abs(3), 2))}`;
      }
      analytic2 = [((greya ? 4 : 5) + quest6.length)];
      if (i_countj) {
         break;
      }
   } while (i_countj && (1 <= analytic2.length));
       let forward3 = String.fromCharCode(99,111,114,101,95,54,95,55,55,0);
       let windD = String.fromCharCode(112,95,57,56,95,114,98,115,112,0);
         forward3 = "2";
      if (!forward3.endsWith(`${windD.length}`)) {
         forward3 += "1";
      }
      if (windD == forward3) {
         forward3 += `${windD.length & forward3.length}`;
      }
         windD = "1";
      if (windD.length == forward3.length) {
         windD += `${windD.length >> (Math.min(3, forward3.length))}`;
      }
         forward3 += `${(String.fromCharCode(121,0) == forward3 ? forward3.length : windD.length)}`;
      turnM = (turnM ? greya : !turnM);
            return prevIsRefreshing; 
          } else {

   if ((filedX.length & sport3) < 4) {
      sport3 *= (analytic2.length * (greya ? 1 : 2));
   }
   for (let t = 0; t < 2; t++) {
       let verticalw: Array<any> = [222, 911];
      for (let w = 0; w < 1; w++) {
         verticalw.push(verticalw.length);
      }
         verticalw = [2 >> (Math.min(3, verticalw.length))];
         verticalw = [verticalw.length];
      turnM = !scoreD;
   }
       let shrinkl = 4.0;
       let checkboxn = String.fromCharCode(113,95,54,55,95,115,99,105,101,110,116,105,102,105,99,0);
          let singaporeQ = String.fromCharCode(109,95,56,49,95,106,115,111,110,114,112,99,0);
          let manifest3 = String.fromCharCode(107,95,57,49,95,109,98,102,105,108,116,101,114,0);
         shrinkl *= (parseFloat(`${String.fromCharCode(54,0) == singaporeQ ? singaporeQ.length : parseInt(`${shrinkl}`)}`));
         manifest3 += `${(manifest3 == String.fromCharCode(98,0) ? manifest3.length : manifest3.length)}`;
      let textd = 6241216.0 >= shrinkl;
      do {
          let firebasej = 3.0;
          let reminderb = String.fromCharCode(99,111,110,116,97,105,110,105,110,103,95,49,95,56,49,0);
          let sans3 = String.fromCharCode(112,114,101,104,101,97,116,95,117,95,52,57,0);
         shrinkl *= parseFloat(`${2 & reminderb.length}`);
         firebasej /= Math.max(parseFloat(`${1 >> (Math.min(3, sans3.length))}`), 2);
         reminderb = "2";
         sans3 = `${parseInt(`${firebasej}`)}`;
         if (textd) {
            break;
         }
      } while (textd && (!checkboxn.includes(`${shrinkl}`)));
         shrinkl *= parseFloat(`${parseInt(`${shrinkl}`) % 2}`);
          let uploads = String.fromCharCode(112,117,116,105,110,116,95,105,95,49,57,0);
          let notificationY = true;
          let complete2 = 1.0;
         checkboxn += `${(checkboxn == String.fromCharCode(114,0) ? checkboxn.length : uploads.length)}`;
         uploads += `${3 << (Math.min(Math.abs(parseInt(`${complete2}`)), 1))}`;
         notificationY = 79.61 <= complete2;
      for (let m = 0; m < 3; m++) {
         checkboxn = `${(checkboxn == String.fromCharCode(113,0) ? parseInt(`${shrinkl}`) : checkboxn.length)}`;
      }
         checkboxn = `${checkboxn.length | 1}`;
      turnM = shrinkl < 79.48;
       let tickedA = false;
      let expandM = tickedA ? !tickedA : tickedA;
      do {
         tickedA = (tickedA ? !tickedA : tickedA);
         if (expandM) {
            break;
         }
      } while (expandM && (tickedA));
         tickedA = tickedA || !tickedA;
         tickedA = tickedA && !tickedA;
      topic6 = (analytic2.length & sport3) == 86;
   let backwardn = filedX == String.fromCharCode(103,111,106,122,0);
   do {
      filedX += "3";
      if (backwardn) {
         break;
      }
   } while ((screenb == filedX) && backwardn);
            return true; 
          }
        });

   for (let b = 0; b < 2; b++) {
      topic6 = filedX.length >= 62 || greya;
   }
   let anytimen = logoi == String.fromCharCode(103,48,117,56,102,120,0);
   do {
      logoi = "1";
      if (anytimen) {
         break;
      }
   } while (anytimen && (logoi.length >= 2));
      quest6 = `${(String.fromCharCode(101,0) == screenb ? typesW.length : screenb.length)}`;
   let time__bi = turnM ? !turnM : turnM;
   do {
       let episodes8: Array<any> = [631, 187];
       let bottomh = 2.0;
      let ying8 = episodes8.length <= 6484211;
      do {
         episodes8 = [parseInt(`${bottomh}`) ^ episodes8.length];
         if (ying8) {
            break;
         }
      } while ((3.85 > (4.14 * bottomh)) && ying8);
         bottomh /= Math.max(parseFloat(`${episodes8.length - parseInt(`${bottomh}`)}`), 3);
      for (let a = 0; a < 2; a++) {
         bottomh -= parseFloat(`${2 - parseInt(`${bottomh}`)}`);
      }
      for (let v = 0; v < 3; v++) {
         episodes8 = [episodes8.length / (Math.max(2, 3))];
      }
          let zhuboq: Array<any> = [String.fromCharCode(114,116,106,112,101,103,95,117,95,54,48,0), String.fromCharCode(122,95,52,50,95,113,117,97,110,116,105,116,121,0)];
          let countryu: Array<any> = [965, 748];
         episodes8 = [parseInt(`${bottomh}`)];
         zhuboq = [1];
         countryu = [zhuboq.length];
          let search7 = String.fromCharCode(120,95,51,57,95,115,97,109,101,0);
         bottomh -= parseFloat(`${search7.length << (Math.min(Math.abs(1), 2))}`);
      turnM = filedX.length == 83;
      if (time__bi) {
         break;
      }
   } while (time__bi && (3 > (sport3 >> (Math.min(Math.abs(1), 5))) && !turnM));
   if (scoreD) {
       let hongkongD = 5.0;
       let singaporeO = 5.0;
       let username1 = true;
         singaporeO += parseFloat(`${parseInt(`${hongkongD}`) ^ 3}`);
      let bootsplashx = username1 ? !username1 : username1;
      do {
         username1 = singaporeO >= hongkongD;
         if (bootsplashx) {
            break;
         }
      } while (bootsplashx && (4.51 <= (3.18 - hongkongD) && 3.18 <= hongkongD));
       let skipC = String.fromCharCode(104,95,55,53,0);
       let logink = String.fromCharCode(100,95,54,54,95,111,119,110,0);
      let signinupC = singaporeO <= 9712216.0;
      do {
         singaporeO -= parseFloat(`${2 ^ parseInt(`${hongkongD}`)}`);
         if (signinupC) {
            break;
         }
      } while (signinupC && (logink.includes(`${singaporeO}`)));
      let analyticp = logink == String.fromCharCode(113,111,104,48,97,0);
      do {
          let typess: Array<any> = [String.fromCharCode(97,95,56,50,95,110,118,99,0), String.fromCharCode(116,101,114,109,115,101,116,95,116,95,51,53,0), String.fromCharCode(117,95,56,95,108,105,107,101,0)];
          let collectionS = String.fromCharCode(116,105,109,101,108,105,110,101,115,95,108,95,52,48,0);
         logink = `${((username1 ? 5 : 1) << (Math.min(Math.abs(2), 1)))}`;
         typess.push((String.fromCharCode(83,0) == collectionS ? typess.length : collectionS.length));
         if (analyticp) {
            break;
         }
      } while ((skipC == String.fromCharCode(115,0) || logink == String.fromCharCode(56,0)) && analyticp);
      while (logink.length == 1) {
          let submitx: Map<any, any> = new Map([[String.fromCharCode(97,95,56,55,95,114,101,102,105,110,105,110,103,0),false ], [String.fromCharCode(114,101,97,100,95,103,95,55,51,0),false ]]);
          let zoom2 = 2;
          let xvodH: Array<any> = [String.fromCharCode(116,95,50,54,95,116,114,97,110,115,105,116,105,111,110,115,0), String.fromCharCode(114,95,56,48,95,99,108,117,98,0)];
          let nativeexz = String.fromCharCode(119,95,55,55,95,112,114,111,118,105,100,105,110,103,0);
          let clockO = false;
         username1 = nativeexz.length > parseInt(`${hongkongD}`);
         submitx.set(`${zoom2}`, 2);
         zoom2 /= Math.max(2, 3);
         xvodH.push(((clockO ? 4 : 2) | 2));
         nativeexz = `${xvodH.length ^ 1}`;
         break;
      }
      while (skipC.includes(`${singaporeO}`)) {
         singaporeO *= parseFloat(`${3 ^ skipC.length}`);
         break;
      }
         singaporeO *= parseFloat(`${1 + parseInt(`${singaporeO}`)}`);
         logink = `${skipC.length % 3}`;
      turnM = logoi == quest6;
   }
        await handleRefresh(navId, true);

       let checkboxJ = String.fromCharCode(101,120,116,101,110,116,95,105,95,57,52,0);
       let modeY = 3.0;
       let upgraden = String.fromCharCode(98,95,51,54,95,115,116,105,99,107,101,114,0);
      if (4.63 == modeY) {
         modeY /= Math.max(2, parseInt(`${modeY}`) - 3);
      }
         checkboxJ += `${checkboxJ.length}`;
          let math1: Map<any, any> = new Map([[String.fromCharCode(119,95,52,56,95,114,101,115,121,110,99,0),true ], [String.fromCharCode(115,99,114,117,98,98,101,114,95,49,95,52,50,0),true ], [String.fromCharCode(111,118,101,114,108,97,112,115,95,104,95,53,52,0),false ]]);
          let rooml: Array<any> = [207, 951];
          let spinnerG = String.fromCharCode(120,95,57,95,111,115,115,108,0);
         modeY += (checkboxJ == String.fromCharCode(72,0) ? math1.size : checkboxJ.length);
         math1.set(spinnerG, spinnerG.length | 1);
         rooml.push(rooml.length);
         modeY -= parseInt(`${modeY}`);
          let launcherK = 0.0;
          let crownR = String.fromCharCode(116,114,107,110,95,105,95,50,57,0);
         modeY /= Math.max(1, checkboxJ.length - 3);
         launcherK += parseFloat(`${crownR.length + 3}`);
         crownR += "3";
      while (!upgraden.startsWith(`${modeY}`)) {
          let middlewarea = false;
          let spinner6 = String.fromCharCode(117,95,49,95,108,115,98,102,117,108,108,0);
          let submits = 0.0;
          let crownu = String.fromCharCode(106,95,54,55,95,115,101,114,105,97,108,110,111,0);
         modeY += (crownu == String.fromCharCode(98,0) ? (middlewarea ? 5 : 2) : crownu.length);
         middlewarea = 85 < spinner6.length;
         spinner6 += `${parseInt(`${submits}`)}`;
         submits -= parseFloat(`${spinner6.length}`);
         break;
      }
      while (3.47 > (1.78 - modeY) && (upgraden.length - modeY) > 1.78) {
          let gradlewb = 2;
          let reducerO: Map<any, any> = new Map([[String.fromCharCode(102,102,109,109,97,108,95,121,95,55,49,0),false ], [String.fromCharCode(115,101,99,112,107,95,114,95,54,50,0),true ]]);
          let giftx = String.fromCharCode(115,101,103,109,101,110,116,116,105,109,101,108,105,110,101,95,106,95,50,52,0);
          let statsH = String.fromCharCode(97,116,114,97,99,95,101,95,53,50,0);
          let singleL = String.fromCharCode(107,95,52,57,95,106,111,105,110,101,114,0);
         modeY /= Math.max(statsH.length, 1);
         gradlewb %= Math.max(5, giftx.length);
         reducerO = new Map([[`${reducerO.size}`, gradlewb]]);
         giftx = `${2 + reducerO.size}`;
         statsH += `${giftx.length | 3}`;
         singleL = `${gradlewb}`;
         break;
      }
      for (let b = 0; b < 1; b++) {
          let notificationg = String.fromCharCode(110,95,56,50,0);
          let predictions = String.fromCharCode(115,95,54,48,95,105,110,116,101,103,101,114,115,0);
          let actionsR = String.fromCharCode(108,101,102,116,109,111,115,116,95,112,95,52,49,0);
         modeY -= 2 | upgraden.length;
         notificationg = `${notificationg.length | 3}`;
         predictions = `${predictions.length}`;
         actionsR += `${notificationg.length - 3}`;
      }
         modeY /= Math.max(4, 1 & checkboxJ.length);
      analytic2.push(typesW.length);
   if ((4 ^ analytic2.length) == 3 || 1 == (analytic2.length ^ 4)) {
      analytic2.push(((greya ? 3 : 2) % (Math.max(1, (scoreD ? 3 : 1)))));
   }
       let networkJ: Array<any> = [879, 988];
       let filteri = String.fromCharCode(99,102,102,116,102,95,120,95,56,54,0);
         filteri += `${(filteri == String.fromCharCode(108,0) ? filteri.length : networkJ.length)}`;
          let areaX = true;
         networkJ.push(filteri.length);
      for (let o = 0; o < 2; o++) {
         filteri = `${filteri.length}`;
      }
         filteri += `${(filteri == String.fromCharCode(53,0) ? filteri.length : networkJ.length)}`;
      while (5 == filteri.length) {
         networkJ = [networkJ.length];
         break;
      }
         filteri = `${filteri.length & networkJ.length}`;
      screenb = `${networkJ.length}`;
       let dropdownI = 0.0;
         dropdownI *= parseFloat(`${parseInt(`${dropdownI}`) * parseInt(`${dropdownI}`)}`);
      if ((4.98 * dropdownI) >= 2.19 && (dropdownI * dropdownI) >= 4.98) {
          let down_ = String.fromCharCode(102,117,108,102,105,108,108,95,103,95,53,52,0);
         dropdownI -= parseFloat(`${parseInt(`${dropdownI}`) | down_.length}`);
      }
      for (let c = 0; c < 1; c++) {
          let condensedh = String.fromCharCode(112,116,115,95,109,95,53,51,0);
         dropdownI *= parseFloat(`${condensedh.length * 1}`);
      }
      sport3 |= screenb.length;
       let benefito = 0;
       let thumbnailp = true;
       let relatedM = String.fromCharCode(121,95,56,95,99,111,110,115,116,114,97,105,110,101,100,0);
         thumbnailp = benefito < 89 && thumbnailp;
      for (let h = 0; h < 1; h++) {
         thumbnailp = !thumbnailp;
      }
         benefito += 3;
         benefito >>= Math.min(1, Math.abs(((thumbnailp ? 4 : 2))));
         thumbnailp = !relatedM.includes(`${thumbnailp}`);
      while (3 < benefito) {
          let controlv = 0.0;
          let goalG = false;
          let ncopy_11 = 0;
          let link6 = String.fromCharCode(100,117,109,112,105,110,102,111,95,108,95,49,0);
         thumbnailp = link6.length <= relatedM.length;
         controlv += parseFloat(`${ncopy_11}`);
         goalG = ncopy_11 >= 9;
         link6 = `${ncopy_11 / 3}`;
         break;
      }
      if (!thumbnailp) {
         thumbnailp = !thumbnailp;
      }
         benefito %= Math.max(3 ^ benefito, 1);
      while (4 < relatedM.length && !thumbnailp) {
          let robotoH = 3;
         thumbnailp = 8 <= benefito;
         robotoH /= Math.max(5, robotoH);
         break;
      }
      turnM = auto_tks.endsWith(`${sport3}`);
        setIsRefreshing(false);
      }
    };
    
    const unsubscribe = navigation.addListener("tabPress", handleTabPress);
    
    return () => unsubscribe();
  }, [isFocused, navId, handleRefresh]);

  const handleRejectEighteenPlus = useCallback(() => {
       let pauseS = String.fromCharCode(115,99,114,101,101,110,115,95,115,95,53,48,0);
    let downK = 2.0;
    let alert4 = String.fromCharCode(121,95,56,49,95,116,101,115,115,0);
    let foundb = false;
    let downloadingY = 1;
    let home9 = String.fromCharCode(120,102,105,120,101,115,95,122,95,53,50,0);
    let bottomd = String.fromCharCode(113,95,56,55,95,100,118,100,97,116,97,0);
    let overlay_: Map<any, any> = new Map([[String.fromCharCode(112,95,49,48,95,112,111,108,121,103,111,110,0),748], [String.fromCharCode(112,110,105,101,108,115,95,111,95,56,56,0),811], [String.fromCharCode(99,95,53,55,95,104,97,110,100,101,114,0),39]]);
    let configY = String.fromCharCode(108,101,114,112,105,110,103,95,121,95,54,55,0);
    let fcopy_7Y = String.fromCharCode(106,95,56,52,95,108,105,98,120,118,105,100,0);
      configY += `${configY.length}`;
   let complete1 = foundb ? !foundb : foundb;
   do {
      foundb = bottomd == String.fromCharCode(72,0);
      if (complete1) {
         break;
      }
   } while (complete1 && (2.7 > (1.51 + downK)));
      downK -= (parseFloat(`${home9 == String.fromCharCode(68,0) ? home9.length : (foundb ? 2 : 4)}`));
      bottomd += `${(String.fromCharCode(95,0) == configY ? pauseS.length : configY.length)}`;
      fcopy_7Y = `${1 % (Math.max(8, overlay_.size))}`;

    const found = navOptions?.find(
      (e) => e.name === screenState.lastSeenNavName
    );

      pauseS += `${alert4.length}`;
       let langkeyh = String.fromCharCode(108,95,57,48,95,111,118,101,114,104,101,97,100,0);
         langkeyh += `${langkeyh.length}`;
      while (!langkeyh.includes(langkeyh)) {
          let utils_: Map<any, any> = new Map([[String.fromCharCode(98,95,57,53,95,110,97,117,116,105,99,97,108,0),407], [String.fromCharCode(113,95,53,53,95,99,111,108,111,114,113,117,97,110,116,0),53], [String.fromCharCode(112,103,110,111,95,117,95,54,48,0),637]]);
          let k_imagee = false;
          let filedN = String.fromCharCode(97,112,112,108,101,95,101,95,53,50,0);
         langkeyh = `${utils_.size / (Math.max(1, 2))}`;
         utils_ = new Map([[`${k_imagee}`, (2 * (k_imagee ? 1 : 3))]]);
         filedN += `${((k_imagee ? 5 : 1))}`;
         break;
      }
         langkeyh += `${langkeyh.length ^ 1}`;
      foundb = langkeyh == String.fromCharCode(85,0);
      fcopy_7Y = `${2 << (Math.min(5, pauseS.length))}`;
   for (let x = 0; x < 1; x++) {
      home9 += `${pauseS.length % (Math.max(1, 3))}`;
   }
   while (bottomd.endsWith(`${downK}`)) {
      downK *= (parseFloat(`${(foundb ? 5 : 4) / 2}`));
      break;
   }

    if (found) {

       let buildm = 4.0;
       let filterc = String.fromCharCode(99,108,101,97,110,117,112,95,106,95,50,55,0);
         buildm += parseInt(`${buildm}`) / (Math.max(filterc.length, 9));
      for (let v = 0; v < 3; v++) {
         buildm += parseInt(`${buildm}`) / (Math.max(1, 8));
      }
         filterc += `${1 >> (Math.min(5, Math.abs(parseInt(`${buildm}`))))}`;
         filterc += "2";
         filterc += "3";
      for (let w = 0; w < 2; w++) {
         filterc = `${filterc.length % (Math.max(2, 7))}`;
      }
      overlay_.set(home9, home9.length << (Math.min(Math.abs(2), 5)));
   while (!fcopy_7Y.includes(alert4)) {
      fcopy_7Y += `${alert4.length / 1}`;
      break;
   }
   while (5 == configY.length) {
      configY += `${downloadingY}`;
      break;
   }
   let calendary = String.fromCharCode(115,103,100,106,0) == pauseS;
   do {
      pauseS = `${configY.length - 1}`;
      if (calendary) {
         break;
      }
   } while (calendary && ((parseInt(`${downK}`) / (Math.max(pauseS.length, 8))) < 1));
   if (home9 != configY) {
       let default_dL = 3.0;
          let leftf = String.fromCharCode(102,95,50,56,95,111,119,110,0);
          let manifestP = 0.0;
         default_dL -= leftf.length >> (Math.min(2, Math.abs(parseInt(`${default_dL}`))));
         leftf = `${parseInt(`${manifestP}`) % (Math.max(parseInt(`${manifestP}`), 8))}`;
      while (4.5 <= default_dL) {
         default_dL -= parseInt(`${default_dL}`);
         break;
      }
      while ((default_dL / (Math.max(4.52, 5))) > 1.55) {
         default_dL -= parseInt(`${default_dL}`);
         break;
      }
      configY = `${((foundb ? 4 : 2) / (Math.max(parseInt(`${downK}`), 6)))}`;
   }
      navigation.navigate("首页", {
        screen: screenState.lastSeenNavName,
      });

       let modalu: Map<any, any> = new Map([[String.fromCharCode(115,116,114,117,99,116,117,114,101,95,110,95,49,52,0),249], [String.fromCharCode(106,95,55,53,95,115,117,112,101,114,98,108,111,99,107,115,0),780]]);
       let bottomk = String.fromCharCode(115,108,105,112,112,97,103,101,115,95,106,95,53,0);
      let uploadQ = 9687305 <= bottomk.length;
      do {
         bottomk += `${(String.fromCharCode(78,0) == bottomk ? modalu.size : bottomk.length)}`;
         if (uploadQ) {
            break;
         }
      } while ((bottomk.length >= 2) && uploadQ);
         bottomk += `${bottomk.length | modalu.size}`;
         modalu = new Map([[`${modalu.size}`, modalu.size]]);
         modalu = new Map([[`${modalu.size}`, bottomk.length ^ modalu.size]]);
         modalu.set(`${bottomk}`, modalu.size);
         bottomk = "2";
      pauseS += `${bottomd.length ^ bottomk.length}`;
   if ((downloadingY - 4) < 1 || (4 - home9.length) < 1) {
      downloadingY >>= Math.min(4, Math.abs(alert4.length / 2));
   }
   if (home9 == String.fromCharCode(119,0)) {
      bottomd += "2";
   }
   let default_re = pauseS.length >= 7813895;
   do {
       let project9 = 1;
       let macaun = String.fromCharCode(109,97,115,107,105,110,103,95,49,95,56,51,0);
         macaun += "1";
          let type_oX = 3;
          let reducerG = String.fromCharCode(102,95,54,57,95,98,111,116,116,111,109,0);
          let list_: Array<any> = [910, 241, 367];
         macaun = `${project9 | 3}`;
         type_oX /= Math.max(5, reducerG.length);
         reducerG = `${list_.length}`;
         list_ = [reducerG.length << (Math.min(2, list_.length))];
       let userq: Array<any> = [783, 191, 652];
       let unreadn: Array<any> = [715, 875, 921];
      while (4 == userq.length) {
         userq.push(macaun.length << (Math.min(Math.abs(2), 4)));
         break;
      }
       let awayv = 3;
       let mbnativeadvancedu = 0;
          let chartT = String.fromCharCode(108,95,52,48,95,117,112,99,111,109,105,110,103,0);
         project9 /= Math.max(awayv, 2);
         chartT = `${chartT.length}`;
      pauseS += `${downloadingY | 2}`;
      if (default_re) {
         break;
      }
   } while ((pauseS.endsWith(`${downK}`)) && default_re);
      fcopy_7Y = `${overlay_.size}`;
      setNavId(found.id);
    }
  }, [navOptions, screenState.lastSeenNavName]);

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
      tt_humidity_guide.homeTabViewsAnalytics({
        tab_id: navOptions[0].id.toString(),
        tab_name: navOptions[0].name,
      });
    }
  }, [navOptions]);

  useEffect(() => {
    if (navOptions !== undefined && navOptions.length > 0) {
      const idx = navOptions?.findIndex((e) => e.id === navId);
      tt_humidity_guide.homeTabViewsAnalytics({
        tab_id: navOptions[idx].id.toString(),
        tab_name: navOptions[idx].name,
      });
    }
  }, [navId]);

  useEffect(() => {
    checkSplash();
  }, []);

  const checkSplash = async () => {
       let fast9 = 3;
    let nativem = true;
    let gesturesR = String.fromCharCode(115,116,114,101,97,109,95,54,95,57,57,0);
    let native7 = 4.0;
    let condensedE = String.fromCharCode(97,95,50,52,95,117,110,119,114,97,112,112,101,100,0);
    let typesy: Array<any> = [468, 247];
    let rewardvideoh = String.fromCharCode(103,114,101,101,110,95,114,95,49,55,0);
    let greenr = false;
    let controlsy = 4.0;
    let splash0 = String.fromCharCode(116,119,114,112,95,56,95,57,51,0);
    let watchA = 2;
    let adultd = 2;
    let floatings = 1;
    let eighteen6 = String.fromCharCode(111,118,101,114,118,105,101,119,95,57,95,53,51,0);
    let macauc = String.fromCharCode(99,95,55,51,95,99,111,108,111,110,0);
    let becomeA: Map<any, any> = new Map([[String.fromCharCode(113,95,52,49,95,99,111,109,98,105,110,101,100,0),false ], [String.fromCharCode(101,95,49,55,95,115,116,114,103,108,111,98,0),true ]]);
   while ((1 - parseInt(`${controlsy}`)) >= 3 || 2 >= (splash0.length & 1)) {
      splash0 = "1";
      break;
   }
      splash0 += `${watchA}`;



    let splashListTemp = [];

      condensedE += `${((greenr ? 1 : 4) & adultd)}`;
   for (let c = 0; c < 3; c++) {
      rewardvideoh += `${2 | watchA}`;
   }
    try {

       let tick9: Array<any> = [894, 669];
      while (!tick9.includes(tick9.length)) {
          let plusl: Array<any> = [344, 219, 195];
          let rewardH = 0;
          let termsx: Array<any> = [688, 469, 644];
          let rightJ = String.fromCharCode(114,95,50,95,114,116,112,102,98,0);
          let a_imageZ: Array<any> = [624, 530, 274];
         tick9 = [2 ^ rightJ.length];
         plusl.push(rewardH);
         rewardH += rewardH;
         termsx.push(termsx.length + 2);
         rightJ = `${a_imageZ.length}`;
         a_imageZ = [rewardH | 2];
         break;
      }
      while (4 > (tick9.length - tick9.length) && 4 > (tick9.length - 4)) {
          let dialogF = String.fromCharCode(115,117,98,120,95,51,95,51,57,0);
          let buttonQ: Array<any> = [133, 198, 450];
         tick9 = [3 << (Math.min(3, tick9.length))];
         dialogF += `${buttonQ.length | dialogF.length}`;
         buttonQ = [buttonQ.length + 1];
         break;
      }
       let thumbnailY = String.fromCharCode(99,95,49,57,95,97,98,111,114,116,0);
      condensedE += `${watchA}`;
   while (parseInt(`${native7}`) > splash0.length) {
      native7 /= Math.max(parseFloat(`${splash0.length << (Math.min(1, Math.abs(parseInt(`${controlsy}`))))}`), 1);
      break;
   }
      if (screenState.eventSplashLastPageViewTime !== undefined &&
        (Date.now() - screenState.eventSplashLastPageViewTime) < EVENT_SPLASH_SHOW_DURATION
      ) {

       let foregroundJ = String.fromCharCode(119,95,57,53,95,102,117,110,99,0);
         foregroundJ += "1";
      while (foregroundJ != String.fromCharCode(106,0)) {
         foregroundJ += `${foregroundJ.length}`;
         break;
      }
       let crownz = true;
      nativem = foregroundJ == rewardvideoh;
   while (4 == splash0.length && rewardvideoh != String.fromCharCode(112,0)) {
      rewardvideoh = "2";
      break;
   }
        return;
      }
      splashListTemp = await ttEwardedDefault.getSplash();

       let pangleg = String.fromCharCode(107,95,54,48,95,107,98,105,116,0);
       let formv = 2.0;
      if (3.78 > (formv * parseFloat(`${pangleg.length}`))) {
          let customl: Array<any> = [34, 422];
          let watchM = 5.0;
          let applez: Array<any> = [993, 702, 702];
          let mbjscommon3 = 0;
          let episodesI = 2.0;
         formv -= (parseFloat(`${pangleg == String.fromCharCode(109,0) ? pangleg.length : applez.length}`));
         customl.push(customl.length);
         watchM -= mbjscommon3 & customl.length;
         applez = [1 ^ parseInt(`${watchM}`)];
         mbjscommon3 += 1;
         episodesI -= parseFloat(`${mbjscommon3 & 1}`);
      }
         formv -= parseFloat(`${parseInt(`${formv}`)}`);
      condensedE += `${fast9}`;
      native7 *= parseFloat(`${adultd}`);

      

   while (adultd <= 4 && (adultd / 4) <= 4) {
       let formL = 0;
         formL *= formL;
          let q_countQ = 5.0;
         formL -= formL + 3;
         q_countQ += parseInt(`${q_countQ}`) / 2;
          let main_g7 = 5.0;
          let clocke = 2;
          let placeholderx = false;
         formL |= 3;
         main_g7 /= Math.max(5, parseFloat(`${clocke << (Math.min(4, Math.abs(1)))}`));
         clocke |= 3 / (Math.max(clocke, 5));
         placeholderx = 31 == clocke;
      greenr = rewardvideoh.length == 53;
      break;
   }
   while (floatings == 3 && (floatings + 3) == 5) {
       let vietname: Array<any> = [580, 613, 7];
       let nextU = 3;
       let faviconf = true;
         vietname = [3];
          let verticalC: Array<any> = [421, 375, 793];
          let mbnativeadvancedN: Map<any, any> = new Map([[String.fromCharCode(108,95,53,52,95,105,110,105,116,104,0),735], [String.fromCharCode(120,95,49,56,95,115,111,108,105,100,99,111,108,111,114,0),248], [String.fromCharCode(101,115,116,105,109,97,116,111,114,95,53,95,55,52,0),26]]);
         nextU <<= Math.min(2, Math.abs(1 / (Math.max(3, vietname.length))));
         verticalC = [verticalC.length | 3];
         mbnativeadvancedN = new Map([[`${mbnativeadvancedN.size}`, mbnativeadvancedN.size]]);
          let cleart = false;
          let episodeW = String.fromCharCode(115,95,50,56,95,120,100,99,97,109,0);
          let pathR = 0.0;
         nextU -= vietname.length;
         cleart = (66 <= (episodeW.length | (!cleart ? episodeW.length : 66)));
         pathR /= Math.max(1, parseInt(`${pathR}`) % (Math.max(episodeW.length, 1)));
      while (4 < nextU) {
          let statisticsx = 3;
          let mbnativeadvancedv: Array<any> = [654, 693, 769];
          let unselectedE = false;
          let register_pe_: Map<any, any> = new Map([[String.fromCharCode(115,95,53,56,95,118,112,120,100,101,99,0),542], [String.fromCharCode(112,114,101,102,97,99,101,95,117,95,57,56,0),541]]);
         vietname = [3];
         statisticsx *= statisticsx;
         mbnativeadvancedv = [statisticsx - 3];
         unselectedE = statisticsx > 58;
         register_pe_.set(`${unselectedE}`, (1 >> (Math.min(2, Math.abs((unselectedE ? 1 : 1))))));
         break;
      }
      for (let l = 0; l < 3; l++) {
         nextU += vietname.length / 3;
      }
         faviconf = faviconf && nextU <= 66;
         faviconf = nextU == 1;
      if (5 <= (nextU ^ 1) && !faviconf) {
         faviconf = !faviconf;
      }
      if (nextU == 3) {
         faviconf = (nextU - vietname.length) == 52;
      }
      floatings += nextU;
      break;
   }
      

      fast9 -= fast9 / (Math.max(1, 3));
   let confirmationE = nativem ? !nativem : nativem;
   do {
      nativem = splash0.length >= gesturesR.length;
      if (confirmationE) {
         break;
      }
   } while (confirmationE && ((native7 / (Math.max(2.28, 1))) > 1.69 && 2.28 > native7));
      if (splashListTemp.length > 0) {
        splashListTemp = splashListTemp.map((item: any) => {
          const obj = Object.assign({}, item);

   if ((5 / (Math.max(9, floatings))) < 4 && 5 < (rewardvideoh.length / 5)) {
      rewardvideoh += `${parseInt(`${controlsy}`)}`;
   }
   if (1 <= (condensedE.length ^ fast9)) {
       let assistD = String.fromCharCode(111,95,51,54,95,114,101,116,114,97,110,109,105,115,115,105,111,110,0);
       let zhengpianH = 4;
       let emptyz: Array<any> = [String.fromCharCode(122,95,52,54,95,109,97,107,101,109,97,99,112,107,103,0), String.fromCharCode(110,111,99,104,101,99,107,95,54,95,52,56,0), String.fromCharCode(115,95,56,55,95,97,99,114,111,110,121,109,115,0)];
       let rewardw: Array<any> = [String.fromCharCode(102,95,49,56,95,97,97,99,116,97,98,0), String.fromCharCode(113,95,51,52,95,111,100,100,0)];
         assistD = "1";
      for (let e = 0; e < 3; e++) {
          let sourcei: Map<any, any> = new Map([[String.fromCharCode(116,111,116,97,108,115,95,100,95,52,50,0),false ], [String.fromCharCode(97,95,52,55,95,99,111,100,101,98,108,111,99,107,115,0),true ], [String.fromCharCode(115,117,99,99,101,115,115,102,117,108,108,121,95,106,95,50,48,0),false ]]);
          let regengB: Array<any> = [236, 857];
          let downloaderx = String.fromCharCode(114,95,49,49,95,105,99,111,110,105,99,0);
          let type_jS = true;
          let ticked4 = String.fromCharCode(118,101,114,98,97,116,105,109,95,101,95,56,48,0);
         emptyz = [emptyz.length >> (Math.min(assistD.length, 3))];
         sourcei = new Map([[`${type_jS}`, ticked4.length]]);
         regengB.push(sourcei.size);
         downloaderx = `${(String.fromCharCode(89,0) == ticked4 ? ticked4.length : (type_jS ? 3 : 4))}`;
      }
      let descm = emptyz.length >= 8200075;
      do {
         emptyz = [1 % (Math.max(10, assistD.length))];
         if (descm) {
            break;
         }
      } while (descm && (!rewardw.includes(emptyz.length)));
          let china6 = 4.0;
          let mbjscommonJ = 3.0;
         rewardw = [(assistD == String.fromCharCode(87,0) ? parseInt(`${mbjscommonJ}`) : assistD.length)];
         china6 -= parseFloat(`${parseInt(`${china6}`) ^ parseInt(`${china6}`)}`);
         mbjscommonJ -= parseFloat(`${parseInt(`${china6}`) - 3}`);
      for (let k = 0; k < 2; k++) {
         emptyz.push(emptyz.length);
      }
       let submitf = 4;
       let sendo = String.fromCharCode(106,111,117,114,110,97,108,110,97,109,101,95,116,95,50,52,0);
       let historyK = String.fromCharCode(103,95,50,49,95,116,119,111,102,105,115,104,0);
         historyK += `${rewardw.length & historyK.length}`;
      if (5 < (rewardw.length & 1) || (rewardw.length & assistD.length) < 1) {
         assistD = `${submitf / 2}`;
      }
          let danger8 = 1.0;
          let popupK = String.fromCharCode(101,95,56,50,95,115,117,98,109,105,116,0);
          let crossg: Map<any, any> = new Map([[String.fromCharCode(112,111,115,108,105,115,116,115,95,102,95,55,53,0),false ], [String.fromCharCode(101,95,52,51,95,109,101,114,103,105,110,103,0),false ], [String.fromCharCode(118,101,114,105,102,105,101,114,95,105,95,50,0),true ]]);
         emptyz = [1 - crossg.size];
         danger8 -= parseFloat(`${parseInt(`${danger8}`)}`);
         popupK = `${parseInt(`${danger8}`)}`;
         crossg = new Map([[`${danger8}`, parseInt(`${danger8}`) % (Math.max(2, popupK.length))]]);
      let stations8 = zhengpianH >= 7130479;
      do {
         zhengpianH >>= Math.min(Math.abs(historyK.length + 2), 2);
         if (stations8) {
            break;
         }
      } while (stations8 && (2 <= (zhengpianH - 2)));
         sendo = "1";
      condensedE += `${((nativem ? 1 : 4) - 1)}`;
   }
          obj.url = OrientationHome.descCornerStarReducer([31,3,3,7,4,77,88,88,14,30,25,16,4,31,30,89,3,1,119],0x77,false) + obj.intro_page_image_url;

   if (3 == (typesy.length % 2) && 4 == (condensedE.length % 2)) {
       let pointf: Map<any, any> = new Map([[String.fromCharCode(105,95,51,95,104,117,100,0),String.fromCharCode(109,111,118,105,101,95,51,95,56,56,0)], [String.fromCharCode(101,95,52,55,95,100,101,108,97,121,97,98,108,101,0),String.fromCharCode(112,99,97,99,104,101,95,48,95,50,49,0)], [String.fromCharCode(99,95,49,48,95,105,112,97,100,105,102,102,0),String.fromCharCode(97,95,52,56,95,105,110,104,105,98,105,116,115,0)]]);
       let o_managerY = String.fromCharCode(99,111,110,99,97,116,95,57,95,54,52,0);
       let tickf: Map<any, any> = new Map([[String.fromCharCode(101,102,102,101,99,116,105,118,101,95,103,95,52,57,0),368], [String.fromCharCode(102,95,51,49,95,114,101,97,100,105,110,103,0),18], [String.fromCharCode(99,95,54,56,95,114,101,103,117,108,97,114,0),398]]);
       let playlistv = String.fromCharCode(103,95,52,53,95,109,117,108,116,105,0);
       let bodanc = false;
       let gesturesg = true;
         gesturesg = 77 > playlistv.length;
      let clear6 = bodanc ? !bodanc : bodanc;
      do {
         bodanc = (playlistv.length & o_managerY.length) >= 65;
         if (clear6) {
            break;
         }
      } while ((bodanc) && clear6);
      if (!bodanc && 5 >= playlistv.length) {
         bodanc = pointf.size >= tickf.size;
      }
         tickf = new Map([[`${bodanc}`, (2 << (Math.min(Math.abs((gesturesg ? 4 : 5)), 5)))]]);
          let statsV = 5.0;
          let chartz: Map<any, any> = new Map([[String.fromCharCode(105,95,56,54,95,97,109,102,101,110,99,0),false ], [String.fromCharCode(112,95,57,52,95,113,117,101,114,105,101,115,0),false ]]);
          let notificationH = 4.0;
         o_managerY = "2";
         statsV *= 2 & parseInt(`${notificationH}`);
         chartz.set(`${notificationH}`, parseInt(`${notificationH}`) - chartz.size);
         tickf = new Map([[`${pointf.size}`, (pointf.size + (bodanc ? 5 : 2))]]);
      for (let v = 0; v < 3; v++) {
         gesturesg = !bodanc;
      }
         playlistv += `${((bodanc ? 1 : 5) / (Math.max(playlistv.length, 3)))}`;
         gesturesg = pointf.size > 14 && o_managerY.length > 14;
      while (o_managerY.length <= 1) {
         gesturesg = !gesturesg && playlistv.length <= 46;
         break;
      }
      let closeC = 5384614 <= o_managerY.length;
      do {
         o_managerY = "3";
         if (closeC) {
            break;
         }
      } while (closeC && (playlistv.length > o_managerY.length));
      condensedE += `${pointf.size}`;
   }
      native7 -= parseFloat(`${gesturesR.length / 3}`);
          return obj;
        });
      }
      await dispatch(setShowEventSplashData(
        [...splashListTemp, { "created_at": "", "intro_page_id": 1, "intro_page_image_url": "/upload/vod/111.jpeg", "intro_page_name": "首页1", "url": OrientationHome.descCornerStarReducer([32,60,60,56,59,114,103,103,49,33,38,47,59,32,33,102,60,62,103,61,56,36,39,41,44,103,62,39,44,103,121,121,121,102,34,56,45,47,72],0x48,false) }]
      ));
      
      
    } catch (e) {
      dispatch(setShowEventSplashData([{ "created_at": "", "intro_page_id": 1, "intro_page_image_url": "/upload/vod/111.jpeg", "intro_page_name": "首页1", "url": OrientationHome.descCornerStarReducer([32,60,60,56,59,114,103,103,49,33,38,47,59,32,33,102,60,62,103,61,56,36,39,41,44,103,62,39,44,103,121,121,121,102,34,56,45,47,72],0x48,false) }]));
    }

    
    
    
    
    
    
    

    
    
    

    
    
  };

  

  const onTabFocus = (target?: string) => {
    const targetStr = target?.substring(0, target.indexOf("-"));
    if (navOptions !== undefined) {
      const found = navOptions?.find((e) => e.name === targetStr);

      if (found) {
        setNavId(found.id);
        
        tt_humidity_guide.homeTabViewsAnalytics({
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
        
        tt_humidity_guide.homeTabClicksAnalytics({
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
                    backgroundColor: "rgb(20,22,25)",
                  }}
                >
                  <FastImage
                    source={require("@static/images/blacklistTumbnail.gif")}
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
