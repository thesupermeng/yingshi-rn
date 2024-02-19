

class StationVignetteGradle {
    static bangFootballfield = (contents: [number], key: number, hasEmoji: boolean) => {
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
import ScreenContainer from "../components/container/yys_matches";
import { useFocusEffect, useRoute, useTheme } from "@react-navigation/native";
import { useQuery, useQueries, UseQueryResult } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { yysHolder, yysMemberDefaultlogo } from "@type";
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
  UMENG_CHANNEL,
} from "@utility";
import CatagoryHome from "../components/container/yys_background";
import RecommendationHome from "../components/container/yys_more_phone";
import HomeHeader from "../components/header/yys_config_penaltygoal_header";
import FastImage from "../components/common/yys_alert_backwhite";
import { useIsFocused } from "@react-navigation/native";
import NoConnection from "./../components/common/yys_librrc_zhengpian";
import NetInfo from "@react-native-community/netinfo";
import { useAppSelector, useAppDispatch, useSelector } from "@hooks";
import { yysIconclosewhiteBaiduads } from "@redux";
import { yysDownloadingCombined } from "@redux";
import HomeNav from "../components/tabNavigate/yys_iconwechat_profileactive_view";

import {
  ATRNSDK,
  ATInterstitialRNSDK,
  ATBannerRNSDK,
} from "./../../AnyThinkAds/yys_redirect_megaphone";
import { AdsBannerContext } from "../contexts/yys_libreactperfloggerjni_defaultroombg";

import { useInterstitialAds } from "@hooks";
import EighteenPlusOverlay from "../components/modal/yys_libimagepipeline_vietnam";
import {
  clearEventSplashLastPageViewTime,
  hideAdultModeDisclaimer,
  setEventSplashLastPageViewTime,
  setShowAdultTab,
  setShowEventSplashData,
} from "@redux";
import { screenModel } from "@type";
import { yysCollection, yysNterstitialInfo } from "@api";
import yys_giftbutton_footballtrophy from "../../Umeng/yys_giftbutton_footballtrophy";
import DeviceInfo from "react-native-device-info";
import { EventSpash } from "../navigation/yys_mbsplash_indicator";
import { yysIconplaySuggestion } from "@redux";
import { yysIconstar } from "@models";

function yys_calendar({ navigation }: BottomTabScreenProps<any>) {
  const dispatch = useAppDispatch();
  const isFocused = useIsFocused();
  const { colors, spacing } = useTheme();
  const [navId, setNavId] = useState(0);
  const queryClient = useQueryClient();
  const [isOffline, setIsOffline] = useState(false);
  const [showHomeLoading, setShowHomeLoading] = useState(true);
  const settingsReducer: yysDownloadingCombined = useAppSelector(
    ({ settingsReducer }: yysIconclosewhiteBaiduads) => settingsReducer
  );
  const screenState: screenModel = useAppSelector(
    ({ screenReducer }) => screenReducer
  );

  const userState = useSelector<yysIconplaySuggestion>("userReducer");
  const isVip = yysIconstar.isVip(userState.user);
  const bottomTabHeight = useBottomTabBarHeight();

  let channel = UMENG_CHANNEL;

  if (Platform.OS === "ios") {
    channel = "WEB";
  }
  const { data: navOptions, refetch } = useQuery({
    queryKey: ["HomePageNavOptions"],
    queryFn: () =>
      yysCollection.getHomeNav().then((json: yysHolder[]) => {
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
    (id: number) => yysCollection.getHomePages(id, isVip),
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
       let condensede: Map<any, any> = new Map([[String.fromCharCode(116,105,99,107,115,95,54,95,57,48,0),7], [String.fromCharCode(105,95,49,53,95,115,101,116,116,101,114,0),5], [String.fromCharCode(107,95,57,50,95,115,104,111,119,99,113,116,0),960]]);
    let matchZ = String.fromCharCode(110,111,110,110,117,108,108,97,100,100,114,101,115,115,95,99,95,57,56,0);
    let shareX = String.fromCharCode(100,101,97,108,108,111,99,97,116,105,111,110,95,122,95,54,57,0);
    let liveY = 0;
    let logoL: Map<any, any> = new Map([[String.fromCharCode(117,95,52,54,95,98,111,111,116,115,116,114,97,112,0),String.fromCharCode(108,95,51,95,102,114,97,109,101,119,111,114,107,0)], [String.fromCharCode(113,95,54,55,95,102,105,110,116,0),String.fromCharCode(115,116,111,112,95,120,95,55,51,0)]]);
    let smallbrightnessf = 3.0;
    let leaguedetailsbgM = String.fromCharCode(118,111,116,101,114,95,55,95,53,49,0);
    let iconrightorangeZ = 0.0;
    let playercommonz: Map<any, any> = new Map([[String.fromCharCode(99,95,56,55,95,100,120,116,121,0),true ], [String.fromCharCode(99,111,109,98,105,110,101,114,95,100,95,54,53,0),true ], [String.fromCharCode(111,95,53,52,95,99,104,101,99,107,112,97,99,107,101,116,0),true ]]);
    let uimanager5 = String.fromCharCode(105,100,101,110,116,105,102,105,101,100,95,108,95,57,50,0);
    let telegramN = 3.0;
    let humidityC = String.fromCharCode(121,95,49,95,97,108,112,105,110,101,0);
    let inactivel = String.fromCharCode(106,95,54,48,95,121,109,111,100,101,0);
    let routerb = 5.0;
    let dialogK = 1;
    let searchh = 4.0;
    let reminderX = String.fromCharCode(105,112,99,95,106,95,56,51,0);
   if (3 >= (logoL.size - 1) || 5 >= (1 * logoL.size)) {
       let reacts = 2;
       let sourceQ = String.fromCharCode(99,108,105,112,115,95,121,95,54,56,0);
       let application5 = String.fromCharCode(115,105,103,110,117,109,95,110,95,54,51,0);
       let sigmob4 = 4.0;
       let chartR = String.fromCharCode(111,95,51,54,95,98,117,116,116,101,114,119,111,114,116,104,0);
       let mailB = String.fromCharCode(105,95,50,50,95,115,119,105,116,99,104,105,110,103,0);
      if (mailB.includes(`${chartR.length}`)) {
         mailB = `${chartR.length}`;
      }
      if (application5.startsWith(`${reacts}`)) {
          let iconarrowrightorangeV = String.fromCharCode(109,95,55,95,97,108,108,0);
         application5 = `${reacts << (Math.min(Math.abs(1), 4))}`;
         iconarrowrightorangeV += `${iconarrowrightorangeV.length}`;
      }
          let iconcloseR = 2.0;
          let awayplayere = false;
         reacts -= 2;
         iconcloseR *= parseInt(`${iconcloseR}`) % 2;
         awayplayere = !awayplayere;
       let step1: Map<any, any> = new Map([[String.fromCharCode(105,110,118,105,116,101,115,95,55,95,52,51,0),String.fromCharCode(113,100,101,108,116,97,95,108,95,57,55,0)], [String.fromCharCode(106,95,57,55,95,114,101,97,100,98,105,116,115,0),String.fromCharCode(98,95,55,54,95,115,119,105,116,99,104,0)]]);
       let faviconb: Map<any, any> = new Map([[String.fromCharCode(114,105,103,104,116,115,95,118,95,55,51,0),String.fromCharCode(109,101,116,114,105,99,95,109,95,53,0)], [String.fromCharCode(103,100,115,112,95,105,95,49,48,48,0),String.fromCharCode(108,95,56,51,95,112,111,115,116,105,110,105,116,0)]]);
         step1 = new Map([[`${faviconb.size}`, parseInt(`${sigmob4}`)]]);
         faviconb.set(`${faviconb.size}`, faviconb.size);
       let codeS = 4.0;
       let aboutV = 3.0;
         aboutV += parseFloat(`${faviconb.size}`);
       let searchbarv = String.fromCharCode(112,105,120,101,108,95,57,95,50,56,0);
       let icondefaultthumbnailu = String.fromCharCode(100,111,99,117,109,101,110,116,115,95,107,95,55,50,0);
          let middlesoundD = 3.0;
          let main_eM = 1;
         reacts /= Math.max(1, 2);
         middlesoundD -= parseInt(`${middlesoundD}`) >> (Math.min(2, Math.abs(main_eM)));
         main_eM *= 2;
       let logouser4 = String.fromCharCode(115,105,103,110,97,108,105,110,103,95,53,95,51,54,0);
       let package_az2 = String.fromCharCode(108,95,51,95,114,111,102,105,108,101,0);
      logoL.set(`${liveY}`, liveY / (Math.max(1, 9)));
      sourceQ = `${sourceQ.length}`;
   }
   while ((parseInt(`${smallbrightnessf}`) / (Math.max(10, shareX.length))) >= 4) {
      smallbrightnessf *= parseInt(`${telegramN}`) + 3;
      break;
   }
      matchZ = `${playercommonz.size}`;
   for (let l = 0; l < 1; l++) {
      uimanager5 += `${parseInt(`${smallbrightnessf}`)}`;
   }
   while ((4 * matchZ.length) > 2 || (4 * playercommonz.size) > 2) {
       let telegramj = String.fromCharCode(97,110,115,119,101,114,95,117,95,52,51,0);
       let imagewatchlive6 = String.fromCharCode(105,95,57,56,95,100,112,114,105,110,116,0);
       let classesa = 3.0;
       let teamdetailsbgZ = String.fromCharCode(118,114,101,112,95,110,95,49,55,0);
         teamdetailsbgZ = `${parseInt(`${classesa}`) - 1}`;
         teamdetailsbgZ += `${imagewatchlive6.length << (Math.min(4, Math.abs(parseInt(`${classesa}`))))}`;
         imagewatchlive6 = `${(imagewatchlive6 == String.fromCharCode(57,0) ? teamdetailsbgZ.length : imagewatchlive6.length)}`;
      for (let f = 0; f < 3; f++) {
         telegramj = `${parseInt(`${classesa}`)}`;
      }
      if (1.57 > (teamdetailsbgZ.length * classesa) && (teamdetailsbgZ.length * parseInt(`${classesa}`)) > 5) {
         classesa += imagewatchlive6.length | parseInt(`${classesa}`);
      }
         imagewatchlive6 = `${imagewatchlive6.length >> (Math.min(Math.abs(1), 4))}`;
         classesa += teamdetailsbgZ.length;
      let diceM = imagewatchlive6 == String.fromCharCode(52,98,114,101,114,0);
      do {
         imagewatchlive6 += `${imagewatchlive6.length}`;
         if (diceM) {
            break;
         }
      } while ((!imagewatchlive6.startsWith(`${classesa}`)) && diceM);
         imagewatchlive6 = "1";
         telegramj += `${imagewatchlive6.length}`;
          let libcrashsdkC: Map<any, any> = new Map([[String.fromCharCode(113,117,97,110,116,105,122,101,114,95,115,95,57,52,0),String.fromCharCode(101,95,50,49,95,106,112,101,103,116,97,98,108,101,115,0)], [String.fromCharCode(117,95,50,56,95,97,108,112,104,97,108,101,115,115,0),String.fromCharCode(116,95,57,57,95,110,101,119,101,115,116,0)]]);
          let malaysiah = String.fromCharCode(120,95,49,48,48,95,115,117,98,116,114,101,101,0);
         telegramj = `${imagewatchlive6.length}`;
         libcrashsdkC = new Map([[`${libcrashsdkC.size}`, libcrashsdkC.size / (Math.max(1, malaysiah.length))]]);
         malaysiah += `${libcrashsdkC.size / (Math.max(1, 8))}`;
          let scoreT = true;
          let footballP = String.fromCharCode(97,118,97,116,97,114,95,55,95,56,54,0);
          let back9 = String.fromCharCode(102,95,54,95,115,116,100,108,105,98,0);
         imagewatchlive6 = "3";
         scoreT = !scoreT && back9.length < 78;
         footballP = `${(String.fromCharCode(107,0) == footballP ? footballP.length : (scoreT ? 3 : 2))}`;
         back9 = `${((scoreT ? 3 : 3))}`;
      playercommonz.set(`${iconrightorangeZ}`, parseInt(`${iconrightorangeZ}`) & 2);
      break;
   }

    const state = await NetInfo.fetch();

   if ((4 | shareX.length) >= 4 && (5.60 / (Math.max(9, iconrightorangeZ))) >= 3.22) {
       let popupS = 4.0;
       let becomeM = 5;
       let defaultroombgI: Array<any> = [String.fromCharCode(111,95,51,54,95,105,103,110,97,108,0), String.fromCharCode(102,101,116,99,104,101,115,95,116,95,54,55,0)];
       let singaporek = 3.0;
       let redgoal6 = true;
       let guideY = false;
      while ((defaultroombgI.length ^ 4) > 1) {
         guideY = singaporek > 4.15;
         break;
      }
         singaporek /= Math.max(2 * becomeM, 3);
      let combinek = redgoal6 ? !redgoal6 : redgoal6;
      do {
         redgoal6 = 90.99 >= singaporek;
         if (combinek) {
            break;
         }
      } while (combinek && ((3.45 * popupS) < 2.91));
       let fastforwardb = String.fromCharCode(112,107,99,114,121,112,116,95,56,95,56,48,0);
         redgoal6 = 32 >= fastforwardb.length;
      for (let s = 0; s < 2; s++) {
          let audiencen = String.fromCharCode(112,95,57,52,0);
          let recommendationA = String.fromCharCode(108,111,103,105,115,116,105,99,95,113,95,55,57,0);
          let downloadinge: Map<any, any> = new Map([[String.fromCharCode(114,101,97,108,108,111,99,95,106,95,52,51,0),258], [String.fromCharCode(108,111,99,97,116,105,111,110,95,102,95,49,57,0),487], [String.fromCharCode(105,95,55,52,95,101,120,116,101,110,115,105,98,108,101,0),310]]);
         redgoal6 = recommendationA.length == defaultroombgI.length;
         audiencen = `${downloadinge.size ^ 2}`;
         recommendationA += `${audiencen.length % 2}`;
         downloadinge = new Map([[`${downloadinge.size}`, downloadinge.size]]);
      }
          let imagenomoredataz = 2.0;
         singaporek += becomeM << (Math.min(1, Math.abs(1)));
         imagenomoredataz *= parseFloat(`${2 ^ parseInt(`${imagenomoredataz}`)}`);
          let libreactperfloggerjniz = String.fromCharCode(115,105,103,110,114,97,110,100,95,108,95,55,49,0);
          let controlk: Map<any, any> = new Map([[String.fromCharCode(115,119,105,122,122,108,101,100,95,54,95,51,51,0),String.fromCharCode(100,101,98,108,111,99,107,105,110,103,95,51,95,55,49,0)], [String.fromCharCode(112,108,97,116,101,97,117,95,114,95,52,49,0),String.fromCharCode(114,95,55,50,95,112,114,101,112,97,114,101,100,0)]]);
         redgoal6 = controlk.size >= defaultroombgI.length;
         libreactperfloggerjniz += `${libreactperfloggerjniz.length}`;
         controlk = new Map([[libreactperfloggerjniz, 1 + libreactperfloggerjniz.length]]);
       let loadingY = 3.0;
       let predictionlossv = 2.0;
      for (let h = 0; h < 1; h++) {
          let gradlewi = String.fromCharCode(118,95,54,56,95,111,110,121,120,0);
          let auto_mb = String.fromCharCode(114,101,99,104,117,110,107,95,50,95,52,0);
          let middlesound_ = 0.0;
          let redirectN: Map<any, any> = new Map([[String.fromCharCode(108,95,57,55,95,101,110,117,109,118,97,108,117,101,0),561], [String.fromCharCode(98,114,117,115,104,95,101,95,54,52,0),662]]);
          let muted6: Array<any> = [21, 605];
         predictionlossv *= 1 * parseInt(`${loadingY}`);
         gradlewi = `${redirectN.size}`;
         auto_mb += `${muted6.length % (Math.max(2, 9))}`;
         middlesound_ -= muted6.length ^ parseInt(`${middlesound_}`);
         redirectN.set(`${middlesound_}`, parseInt(`${middlesound_}`));
      }
         defaultroombgI.push(parseInt(`${popupS}`) - parseInt(`${predictionlossv}`));
      iconrightorangeZ *= becomeM + parseInt(`${singaporek}`);
   }
   if (matchZ.startsWith(uimanager5)) {
       let predictionbuttont = String.fromCharCode(112,97,114,116,121,95,57,95,50,0);
       let homeinactiveL = false;
       let moon_ = String.fromCharCode(117,95,51,56,95,99,111,110,115,117,109,97,98,108,101,0);
       let alertF = 4;
       let pagex = 0.0;
         moon_ = "1";
      if (1 < moon_.length) {
         moon_ = `${(String.fromCharCode(79,0) == moon_ ? parseInt(`${pagex}`) : moon_.length)}`;
      }
      if (alertF >= 3) {
          let pressureK = String.fromCharCode(100,95,49,55,95,101,120,116,0);
          let quest5 = 2.0;
          let greenh = String.fromCharCode(105,110,116,101,114,110,95,107,95,57,52,0);
         pagex += parseInt(`${quest5}`);
         pressureK = "3";
         quest5 *= parseFloat(`${1}`);
         greenh += `${pressureK.length}`;
      }
      if (moon_.length == 4 && homeinactiveL) {
         homeinactiveL = homeinactiveL || predictionbuttont.length >= 75;
      }
          let teamn = String.fromCharCode(98,101,103,117,110,95,48,95,48,0);
         moon_ += "3";
         teamn = `${teamn.length * teamn.length}`;
      while (homeinactiveL) {
         homeinactiveL = moon_ == predictionbuttont;
         break;
      }
      let moduleU = 6399176 <= alertF;
      do {
         alertF /= Math.max(1, 2 * parseInt(`${pagex}`));
         if (moduleU) {
            break;
         }
      } while (moduleU && ((pagex * 2.34) == 3.87));
      for (let x = 0; x < 1; x++) {
          let cross5: Array<any> = [String.fromCharCode(99,95,51,53,95,104,97,110,100,108,101,0), String.fromCharCode(121,95,56,48,95,115,122,97,98,111,0), String.fromCharCode(102,95,52,50,95,105,100,101,110,116,105,116,121,0)];
          let libnmsJ = String.fromCharCode(108,95,56,57,95,114,97,115,116,101,114,105,122,101,0);
          let activityk = true;
          let baiduR = 4.0;
          let dialogJ = String.fromCharCode(120,95,56,49,95,108,115,112,114,0);
         moon_ = `${moon_.length}`;
         cross5 = [parseInt(`${baiduR}`) / (Math.max(8, dialogJ.length))];
         libnmsJ += `${1 - parseInt(`${baiduR}`)}`;
         activityk = (libnmsJ.length << (Math.min(3, cross5.length))) >= 16;
         dialogJ += `${cross5.length + dialogJ.length}`;
      }
      while (2 >= (4 - parseInt(`${pagex}`)) && 5.90 >= (pagex - 1.27)) {
          let gesturesz: Array<any> = [5, 797];
          let crowno = 1.0;
          let termsV = 5.0;
         pagex /= Math.max(parseInt(`${termsV}`), 3);
         gesturesz.push(1 << (Math.min(Math.abs(parseInt(`${crowno}`)), 1)));
         crowno *= parseInt(`${crowno}`) * gesturesz.length;
         termsV /= Math.max(gesturesz.length % 2, 2);
         break;
      }
      if (moon_.length < 3) {
         homeinactiveL = 42.66 < pagex;
      }
         homeinactiveL = !homeinactiveL || predictionbuttont.length <= 64;
      if (predictionbuttont.length >= 1) {
         predictionbuttont += `${2 + predictionbuttont.length}`;
      }
      while ((pagex * 3.71) >= 4.25) {
         homeinactiveL = 1.99 == pagex;
         break;
      }
      if (predictionbuttont.length > 4 && homeinactiveL) {
         homeinactiveL = (54 < ((!homeinactiveL ? moon_.length : 54) + moon_.length));
      }
      while ((pagex - 2.8) < 5.32 && !homeinactiveL) {
         pagex *= alertF << (Math.min(5, Math.abs(2)));
         break;
      }
      matchZ = `${predictionbuttont.length % (Math.max(1, 10))}`;
   }
       let twitterS = String.fromCharCode(118,95,51,51,95,110,111,110,102,97,116,97,108,0);
       let profileactive5: Array<any> = [320, 876];
       let room9 = String.fromCharCode(114,101,102,99,111,117,110,116,101,100,111,98,106,101,99,116,95,55,95,55,0);
         room9 += `${room9.length}`;
      let nodeX = room9 == String.fromCharCode(57,111,109,103,113,53,49,0);
      do {
          let imagenetworkerrL = String.fromCharCode(99,95,56,55,95,99,111,111,108,100,111,119,110,115,0);
          let showmoreu = false;
         room9 = `${(imagenetworkerrL.length | (showmoreu ? 4 : 4))}`;
         if (nodeX) {
            break;
         }
      } while (nodeX && (1 <= room9.length));
          let inouttargetredC = 5;
         twitterS += "2";
         inouttargetredC *= 1 - inouttargetredC;
      while (twitterS != String.fromCharCode(119,0)) {
         room9 = `${room9.length}`;
         break;
      }
      for (let k = 0; k < 2; k++) {
          let button1: Map<any, any> = new Map([[String.fromCharCode(99,95,52,50,95,109,105,100,105,0),true ], [String.fromCharCode(109,105,115,115,105,110,103,95,116,95,53,54,0),true ]]);
          let privatechatbge: Array<any> = [724, 563, 670];
          let androidj = 1.0;
          let imagenetworkerr7 = true;
         room9 += `${twitterS.length >> (Math.min(Math.abs(3), 4))}`;
         button1 = new Map([[`${privatechatbge.length}`, parseInt(`${androidj}`) / 3]]);
         privatechatbge = [3 >> (Math.min(Math.abs(parseInt(`${androidj}`)), 5))];
         imagenetworkerr7 = 92 < privatechatbge.length && 92 < button1.size;
      }
      for (let z = 0; z < 3; z++) {
          let awayiconP = String.fromCharCode(104,95,52,50,95,99,111,108,111,114,101,100,0);
          let combinedR = false;
          let awayz: Map<any, any> = new Map([[String.fromCharCode(112,97,116,104,95,114,95,51,0),246], [String.fromCharCode(105,109,112,117,108,115,101,95,56,95,55,57,0),831], [String.fromCharCode(103,114,111,101,115,116,108,95,102,95,57,57,0),157]]);
          let reactnavigation_ = 5.0;
          let nterstitial5 = String.fromCharCode(103,101,116,104,100,114,95,51,95,57,54,0);
         profileactive5.push(room9.length ^ 2);
         awayiconP = `${awayiconP.length}`;
         combinedR = awayiconP.includes(`${combinedR}`);
         awayz = new Map([[`${reactnavigation_}`, parseInt(`${reactnavigation_}`) + nterstitial5.length]]);
         nterstitial5 += `${nterstitial5.length}`;
      }
         profileactive5.push(2);
         profileactive5 = [2 % (Math.max(9, profileactive5.length))];
      while (twitterS.length >= room9.length) {
          let verticalE: Map<any, any> = new Map([[String.fromCharCode(102,114,105,101,110,100,95,48,95,51,0),493], [String.fromCharCode(104,101,114,101,95,55,95,52,53,0),309], [String.fromCharCode(112,114,110,103,95,57,95,53,50,0),699]]);
          let mimox = String.fromCharCode(97,103,103,114,101,103,97,116,101,115,95,121,95,55,50,0);
          let inactiveO = 5.0;
          let oinit_z8d = 3.0;
         room9 += `${parseInt(`${oinit_z8d}`)}`;
         verticalE = new Map([[mimox, 1 / (Math.max(10, mimox.length))]]);
         inactiveO += 1 | verticalE.size;
         break;
      }
      iconrightorangeZ *= 3 - logoL.size;
   while (!shareX.startsWith(`${liveY}`)) {
       let whitetick2 = String.fromCharCode(116,97,114,103,97,95,53,95,50,54,0);
       let side8 = 5;
       let lightD = 3.0;
       let temperaturex = String.fromCharCode(101,120,112,105,114,97,116,105,111,110,95,117,95,50,55,0);
       let unimplementedviewl = 4;
         temperaturex = `${whitetick2.length}`;
      for (let b = 0; b < 1; b++) {
         temperaturex = `${2 << (Math.min(Math.abs(parseInt(`${lightD}`)), 4))}`;
      }
      if (whitetick2.length > unimplementedviewl) {
          let binddataso = 3;
          let slideru = false;
          let viewerX = 5.0;
          let animations5 = 0.0;
         whitetick2 += `${(whitetick2 == String.fromCharCode(71,0) ? binddataso : whitetick2.length)}`;
         binddataso /= Math.max(5, parseInt(`${animations5}`));
         slideru = 41.88 > animations5;
         viewerX *= (parseInt(`${animations5}`) ^ (slideru ? 1 : 3));
      }
         whitetick2 += `${temperaturex.length * 2}`;
       let backgroundx = 2;
       let volume8 = 5;
         whitetick2 += "2";
          let catalogp = 0;
         unimplementedviewl *= (String.fromCharCode(57,0) == temperaturex ? catalogp : temperaturex.length);
         volume8 -= 3;
      let soundx = temperaturex.length >= 5888071;
      do {
         temperaturex = `${whitetick2.length << (Math.min(Math.abs(2), 4))}`;
         if (soundx) {
            break;
         }
      } while ((temperaturex.endsWith(`${unimplementedviewl}`)) && soundx);
      while (5 < (unimplementedviewl / (Math.max(7, side8))) || 5 < (unimplementedviewl / (Math.max(5, 9)))) {
         unimplementedviewl ^= side8 | parseInt(`${lightD}`);
         break;
      }
      if (2.19 <= (5.69 + lightD)) {
         lightD -= parseFloat(`${1 / (Math.max(parseInt(`${lightD}`), 3))}`);
      }
          let dycreatorP = String.fromCharCode(103,95,53,49,95,99,114,97,122,121,116,105,109,101,0);
         whitetick2 = `${volume8 ^ 1}`;
         dycreatorP += `${dycreatorP.length}`;
      if (2 < (2 | whitetick2.length) || (side8 | 2) < 2) {
         whitetick2 = `${temperaturex.length}`;
      }
         side8 -= (String.fromCharCode(101,0) == whitetick2 ? whitetick2.length : volume8);
      while (parseFloat(`${temperaturex.length}`) > lightD) {
         temperaturex = `${unimplementedviewl >> (Math.min(Math.abs(2), 2))}`;
         break;
      }
      liveY ^= condensede.size;
      break;
   }
       let interstitialN: Map<any, any> = new Map([[String.fromCharCode(112,111,108,105,99,105,101,115,95,120,95,55,48,0),false ], [String.fromCharCode(108,117,109,98,101,114,106,97,99,107,95,98,95,49,48,48,0),true ]]);
         interstitialN.set(`${interstitialN.size}`, interstitialN.size << (Math.min(Math.abs(interstitialN.size), 5)));
         interstitialN = new Map([[`${interstitialN.size}`, interstitialN.size]]);
      if ((2 ^ interstitialN.size) <= 3 && (2 ^ interstitialN.size) <= 2) {
         interstitialN.set(`${interstitialN.size}`, interstitialN.size << (Math.min(2, Math.abs(interstitialN.size))));
      }
      leaguedetailsbgM = `${(String.fromCharCode(108,0) == shareX ? shareX.length : parseInt(`${telegramN}`))}`;
    

   if (4.54 <= (telegramN + parseFloat(`${leaguedetailsbgM.length}`)) || (telegramN + 4.54) <= 2.62) {
      leaguedetailsbgM += `${leaguedetailsbgM.length}`;
   }
       let details7: Array<any> = [String.fromCharCode(100,105,99,116,105,111,110,97,114,121,95,98,95,57,53,0), String.fromCharCode(99,111,109,112,97,114,95,104,95,54,54,0), String.fromCharCode(106,95,57,48,95,101,120,116,101,110,115,105,111,110,0)];
       let scoreS: Map<any, any> = new Map([[String.fromCharCode(106,95,52,51,95,99,108,97,115,104,101,100,0),836], [String.fromCharCode(100,95,50,49,95,99,114,108,102,0),150]]);
       let anner9 = 4.0;
      while (2 <= (parseInt(`${anner9}`) / (Math.max(details7.length, 2))) || 2 <= (details7.length * 2)) {
         details7.push(1);
         break;
      }
      if (!Array.from(scoreS.values()).includes(details7.length)) {
          let awaym = 5.0;
          let nterstitialj = String.fromCharCode(103,95,54,57,95,98,105,116,118,101,99,116,111,114,0);
          let iconrefresh4 = String.fromCharCode(115,98,115,112,108,105,116,95,104,95,52,48,0);
         details7 = [iconrefresh4.length % (Math.max(2, scoreS.size))];
         awaym += parseFloat(`${nterstitialj.length}`);
         nterstitialj += `${(String.fromCharCode(51,0) == nterstitialj ? parseInt(`${awaym}`) : nterstitialj.length)}`;
         iconrefresh4 = `${nterstitialj.length}`;
      }
      if ((anner9 / 5.87) > 5.2) {
         anner9 += parseFloat(`${parseInt(`${anner9}`) ^ 2}`);
      }
      for (let h = 0; h < 1; h++) {
         anner9 -= parseFloat(`${scoreS.size & parseInt(`${anner9}`)}`);
      }
       let package_zl: Array<any> = [551, 723, 832];
       let materialb: Array<any> = [892, 433, 25];
          let videobufferloadingW = 4.0;
         package_zl.push(materialb.length * 1);
         videobufferloadingW += 1 - parseInt(`${videobufferloadingW}`);
         scoreS.set(`${package_zl.length}`, materialb.length);
         details7.push(3 - scoreS.size);
      if (materialb.includes(package_zl.length)) {
          let submitX = String.fromCharCode(112,111,115,105,116,105,111,110,95,49,95,50,53,0);
          let t_title1 = 4;
          let middleD = String.fromCharCode(121,95,51,95,114,101,115,101,97,114,99,104,0);
         package_zl.push(submitX.length);
         submitX = `${t_title1 - 1}`;
         t_title1 &= 1;
         middleD = "1 * t_title1";
      }
      shareX = "1";
      logoL.set(`${telegramN}`, logoL.size + 1);
   if ((liveY / (Math.max(uimanager5.length, 5))) > 3 && (3 / (Math.max(9, liveY))) > 5) {
       let eact6 = true;
       let armvaB = String.fromCharCode(115,116,111,112,112,101,100,95,51,95,52,0);
       let phonesharei: Array<any> = [111, 748, 297];
       let statsnomoredataK = 3.0;
      for (let j = 0; j < 1; j++) {
         armvaB += "2";
      }
         phonesharei = [(parseInt(`${statsnomoredataK}`) * (eact6 ? 3 : 4))];
      while (phonesharei.includes(statsnomoredataK)) {
         phonesharei.push((String.fromCharCode(55,0) == armvaB ? phonesharei.length : armvaB.length));
         break;
      }
      let whiteanimationlive7 = 8689124.0 <= statsnomoredataK;
      do {
          let elementsC = 4.0;
          let homeactiveV = String.fromCharCode(116,95,50,54,95,114,101,107,101,121,0);
          let rewind4: Map<any, any> = new Map([[String.fromCharCode(110,95,49,53,95,111,112,116,97,98,108,101,0),244], [String.fromCharCode(114,101,97,99,104,101,100,95,100,95,50,52,0),535], [String.fromCharCode(115,116,97,98,108,101,95,106,95,51,52,0),440]]);
          let settingg = 5;
          let playershirtV = 4.0;
         statsnomoredataK /= Math.max(parseFloat(`${armvaB.length}`), 3);
         elementsC += (homeactiveV == String.fromCharCode(73,0) ? parseInt(`${playershirtV}`) : homeactiveV.length);
         rewind4 = new Map([[`${rewind4.size}`, (String.fromCharCode(115,0) == homeactiveV ? rewind4.size : homeactiveV.length)]]);
         settingg >>= Math.min(Math.abs(1), 5);
         playershirtV -= parseFloat(`${1 * parseInt(`${playershirtV}`)}`);
         if (whiteanimationlive7) {
            break;
         }
      } while (whiteanimationlive7 && ((1 >> (Math.min(3, phonesharei.length))) < 5 && (1.44 * statsnomoredataK) < 2.26));
      let airbnbstard = armvaB.length >= 8449702;
      do {
         armvaB += `${parseInt(`${statsnomoredataK}`)}`;
         if (airbnbstard) {
            break;
         }
      } while (airbnbstard && (armvaB.length > 2));
      for (let f = 0; f < 2; f++) {
         statsnomoredataK -= (parseFloat(`${(eact6 ? 2 : 5) << (Math.min(armvaB.length, 3))}`));
      }
         statsnomoredataK *= (parseFloat(`${(eact6 ? 3 : 1) >> (Math.min(armvaB.length, 5))}`));
      while (!armvaB.includes(`${eact6}`)) {
         eact6 = phonesharei.length >= 23 && 23 >= armvaB.length;
         break;
      }
          let vignetteQ = 0.0;
         phonesharei = [1];
         vignetteQ *= parseFloat(`${parseInt(`${vignetteQ}`) | 3}`);
          let libtobO = String.fromCharCode(105,95,51,49,95,98,105,108,105,110,101,97,114,0);
          let smallorangemani: Map<any, any> = new Map([[String.fromCharCode(103,111,116,95,97,95,50,48,0),339], [String.fromCharCode(115,99,97,110,110,105,110,103,95,121,95,56,56,0),982]]);
         eact6 = libtobO.length <= 40;
         libtobO += `${3 | smallorangemani.size}`;
         smallorangemani = new Map([[`${smallorangemani.size}`, smallorangemani.size >> (Math.min(Math.abs(1), 1))]]);
      while (parseFloat(`${phonesharei.length}`) <= statsnomoredataK) {
          let pagination2 = String.fromCharCode(102,114,97,103,95,118,95,51,51,0);
          let icondownimgc = 3.0;
         statsnomoredataK += parseFloat(`${pagination2.length >> (Math.min(Math.abs(1), 4))}`);
         pagination2 += `${parseInt(`${icondownimgc}`) - parseInt(`${icondownimgc}`)}`;
         break;
      }
         eact6 = !eact6 && statsnomoredataK < 16.9;
      uimanager5 += `${((eact6 ? 2 : 1) & 2)}`;
   }
   if (1 <= uimanager5.length) {
      inactivel = `${1 / (Math.max(10, parseInt(`${smallbrightnessf}`)))}`;
   }
    const offline = !(
      state.isConnected &&
      (state.isInternetReachable === true || state.isInternetReachable === null
        ? true
        : false)
    );

   while (humidityC.length > shareX.length) {
       let inactivev = false;
       let halfW = String.fromCharCode(99,95,56,95,103,101,115,116,117,114,101,0);
       let overlayK = false;
       let reactnativeratingsp = false;
       let iconbellz = String.fromCharCode(99,111,109,98,105,110,101,114,95,55,95,53,55,0);
         halfW += `${((overlayK ? 3 : 4))}`;
          let inouttargetyellowN = String.fromCharCode(100,95,56,54,95,99,97,118,115,100,115,112,0);
         halfW += `${1 + inouttargetyellowN.length}`;
         reactnativeratingsp = !overlayK || reactnativeratingsp;
      let downloaderF = reactnativeratingsp ? !reactnativeratingsp : reactnativeratingsp;
      do {
          let login0 = String.fromCharCode(99,108,97,115,115,105,102,115,95,106,95,52,48,0);
          let reactnativeratingse: Map<any, any> = new Map([[String.fromCharCode(117,105,110,116,108,101,95,106,95,50,54,0),89], [String.fromCharCode(99,95,49,48,95,115,99,114,101,97,109,0),823]]);
          let gesturesC = String.fromCharCode(113,95,52,55,95,117,110,115,97,102,101,0);
          let securityM: Array<any> = [760, 349, 183];
         reactnativeratingsp = gesturesC.length == 37;
         login0 += `${securityM.length & reactnativeratingse.size}`;
         reactnativeratingse.set(`${securityM.length}`, 3);
         gesturesC = `${reactnativeratingse.size % 2}`;
         if (downloaderF) {
            break;
         }
      } while (downloaderF && (overlayK));
      let greytickU = halfW == String.fromCharCode(103,110,50,55,114,51,95,0);
      do {
         halfW = "3";
         if (greytickU) {
            break;
         }
      } while (greytickU && (!halfW.includes(`${inactivev}`)));
      while (iconbellz.length == 3) {
         iconbellz = "2";
         break;
      }
      for (let b = 0; b < 2; b++) {
         halfW += `${((inactivev ? 2 : 3))}`;
      }
      if (5 < iconbellz.length || !overlayK) {
          let membershipr: Array<any> = [244, 9];
         iconbellz += `${iconbellz.length / (Math.max(2, 10))}`;
         membershipr = [membershipr.length & 2];
      }
      if (reactnativeratingsp) {
         reactnativeratingsp = !halfW.endsWith(`${inactivev}`);
      }
      for (let q = 0; q < 2; q++) {
          let searchbaru: Array<any> = [898, 416, 579];
         iconbellz = `${halfW.length}`;
         searchbaru = [searchbaru.length];
      }
          let penaltyp = 5;
         reactnativeratingsp = !iconbellz.startsWith(`${inactivev}`);
         penaltyp *= penaltyp;
      humidityC = `${uimanager5.length}`;
      break;
   }
       let mbridgeb = 0;
       let iconarrowrightwhitet = 3;
       let expiredO: Array<any> = [170, 627, 780];
         iconarrowrightwhitet &= iconarrowrightwhitet ^ expiredO.length;
      let zhuboG = expiredO.length >= 9587664;
      do {
         expiredO.push(iconarrowrightwhitet);
         if (zhuboG) {
            break;
         }
      } while (((mbridgeb + expiredO.length) < 1) && zhuboG);
       let searchp: Array<any> = [847, 213, 414];
      while ((searchp.length - expiredO.length) == 4 || 2 == (searchp.length - 4)) {
         searchp = [3 << (Math.min(Math.abs(mbridgeb), 4))];
         break;
      }
      let sheet3 = 5716706 >= searchp.length;
      do {
         searchp.push(expiredO.length >> (Math.min(Math.abs(1), 5)));
         if (sheet3) {
            break;
         }
      } while ((!searchp.includes(mbridgeb)) && sheet3);
          let searchG = 0.0;
          let nativeG = 2;
          let page8 = 0.0;
         iconarrowrightwhitet ^= parseInt(`${page8}`);
         searchG /= Math.max(parseFloat(`${parseInt(`${searchG}`)}`), 2);
         nativeG ^= 1;
         page8 += parseFloat(`${2}`);
          let cornershootr = 5.0;
          let penaltymatchicon9 = String.fromCharCode(116,95,50,52,95,101,120,112,111,110,101,110,116,105,97,108,0);
          let dependenciesD = 3.0;
         searchp.push(parseInt(`${dependenciesD}`));
         cornershootr *= parseFloat(`${penaltymatchicon9.length}`);
         penaltymatchicon9 += `${parseInt(`${cornershootr}`) >> (Math.min(Math.abs(2), 5))}`;
         dependenciesD += parseFloat(`${3 + penaltymatchicon9.length}`);
      if (4 < mbridgeb) {
         iconarrowrightwhitet *= searchp.length - 3;
      }
         iconarrowrightwhitet /= Math.max(searchp.length ^ mbridgeb, 1);
      logoL = new Map([[`${telegramN}`, 3]]);
   if (routerb <= 3.56) {
      routerb += parseFloat(`${logoL.size}`);
   }
       let inouttargetyellowz = false;
          let androidO: Array<any> = [625, 667];
         inouttargetyellowz = inouttargetyellowz && androidO.length == 37;
         inouttargetyellowz = (inouttargetyellowz ? inouttargetyellowz : !inouttargetyellowz);
      let castingc = inouttargetyellowz ? !inouttargetyellowz : inouttargetyellowz;
      do {
         inouttargetyellowz = !inouttargetyellowz;
         if (castingc) {
            break;
         }
      } while ((inouttargetyellowz) && castingc);
      condensede.set(`${iconrightorangeZ}`, playercommonz.size << (Math.min(3, Math.abs(parseInt(`${iconrightorangeZ}`)))));
      telegramN -= parseFloat(`${liveY >> (Math.min(1, Math.abs(2)))}`);
    setIsOffline(offline);

   while (liveY > 2) {
      liveY >>= Math.min(Math.abs(logoL.size), 2);
      break;
   }
   for (let a = 0; a < 2; a++) {
      smallbrightnessf -= condensede.size | parseInt(`${iconrightorangeZ}`);
   }
       let chinasameQ = 0.0;
       let borderless1 = 3.0;
       let linit_fm: Map<any, any> = new Map([[String.fromCharCode(114,95,57,51,95,112,117,98,108,105,99,107,101,121,115,0),362], [String.fromCharCode(117,110,115,101,110,116,95,97,95,56,53,0),846], [String.fromCharCode(100,111,119,110,119,97,114,100,95,110,95,51,54,0),20]]);
         borderless1 /= Math.max(2, parseFloat(`${parseInt(`${borderless1}`)}`));
         linit_fm = new Map([[`${linit_fm.size}`, 1]]);
          let sentrye = 4.0;
          let valuesn = 0.0;
          let teamdetailsbgZ_ = String.fromCharCode(111,95,52,53,0);
         borderless1 -= parseFloat(`${parseInt(`${sentrye}`) ^ parseInt(`${valuesn}`)}`);
         sentrye += parseFloat(`${3}`);
         valuesn /= Math.max(parseFloat(`${3 << (Math.min(2, teamdetailsbgZ_.length))}`), 5);
         borderless1 *= parseFloat(`${parseInt(`${chinasameQ}`)}`);
       let lineD = String.fromCharCode(101,95,54,50,95,111,98,109,99,0);
       let changeV = String.fromCharCode(116,95,55,54,95,105,100,101,110,116,0);
          let list7 = true;
          let whatsapp4: Map<any, any> = new Map([[String.fromCharCode(113,95,52,56,95,99,111,108,108,105,100,101,114,0),String.fromCharCode(104,111,116,95,97,95,53,0)], [String.fromCharCode(104,105,110,116,95,112,95,52,56,0),String.fromCharCode(111,95,57,95,108,105,112,98,111,97,114,100,0)], [String.fromCharCode(119,95,51,49,95,118,105,97,98,108,101,0),String.fromCharCode(108,105,112,98,111,97,114,100,95,115,95,56,49,0)]]);
         lineD = `${parseInt(`${borderless1}`) / (Math.max(2, lineD.length))}`;
         list7 = (((!list7 ? whatsapp4.size : 32) + whatsapp4.size) > 59);
          let androidS = true;
          let iconeyeH: Array<any> = [677, 838, 70];
          let moreQ = 3.0;
         borderless1 -= parseFloat(`${linit_fm.size}`);
         androidS = (iconeyeH.length * parseInt(`${moreQ}`)) > 67;
         iconeyeH.push(iconeyeH.length ^ 2);
         moreQ += (parseFloat(`${(androidS ? 5 : 1) % (Math.max(2, 8))}`));
         lineD += `${lineD.length - 2}`;
      let securityr = linit_fm.size <= 9158643;
      do {
         linit_fm = new Map([[`${linit_fm.size}`, parseInt(`${chinasameQ}`)]]);
         if (securityr) {
            break;
         }
      } while ((lineD.includes(`${linit_fm.size}`)) && securityr);
      humidityC += `${leaguedetailsbgM.length + playercommonz.size}`;
   for (let u = 0; u < 2; u++) {
       let backgroundT = String.fromCharCode(114,101,109,111,116,101,108,121,95,119,95,54,50,0);
       let yellowvideoliveK = String.fromCharCode(115,116,114,97,116,101,103,121,95,103,95,49,52,0);
       let fulle: Array<any> = [String.fromCharCode(113,95,55,57,95,116,105,108,101,100,0), String.fromCharCode(104,95,50,55,95,115,108,111,119,100,111,119,110,0)];
       let condensedI: Array<any> = [468, 202];
      if ((condensedI.length >> (Math.min(Math.abs(4), 2))) == 5 || 4 == (fulle.length >> (Math.min(Math.abs(4), 5)))) {
          let shareN = 5;
          let canvasy = String.fromCharCode(97,95,50,56,95,114,101,118,101,114,115,101,100,0);
         condensedI.push(2);
         shareN /= Math.max(3, shareN);
         canvasy = "2";
      }
         yellowvideoliveK += `${condensedI.length / (Math.max(3, 9))}`;
          let downarrowm: Array<any> = [304, 230];
          let referrerA = String.fromCharCode(105,109,101,110,115,105,111,110,95,99,95,49,53,0);
          let turndownp = 3.0;
         backgroundT = "1";
         downarrowm.push(2 ^ referrerA.length);
         referrerA += `${downarrowm.length >> (Math.min(Math.abs(1), 5))}`;
         turndownp -= downarrowm.length | 2;
         yellowvideoliveK = `${(String.fromCharCode(56,0) == backgroundT ? backgroundT.length : condensedI.length)}`;
      for (let n = 0; n < 1; n++) {
          let mergerl = String.fromCharCode(111,95,51,48,95,116,105,109,105,110,103,0);
         condensedI.push(yellowvideoliveK.length);
         mergerl += `${(String.fromCharCode(53,0) == mergerl ? mergerl.length : mergerl.length)}`;
      }
       let package_dmv = false;
          let statistics0 = String.fromCharCode(116,95,55,54,95,105,110,116,101,102,97,99,101,0);
          let soundV = false;
          let splashr: Map<any, any> = new Map([[String.fromCharCode(110,95,55,56,95,116,121,112,101,115,116,114,0),String.fromCharCode(109,117,108,116,105,115,116,101,112,95,97,95,57,55,0)], [String.fromCharCode(107,95,53,49,95,113,100,109,99,0),String.fromCharCode(99,95,55,95,101,115,100,115,0)], [String.fromCharCode(112,95,57,55,95,111,108,100,0),String.fromCharCode(98,95,56,48,95,115,116,114,101,101,116,0)]]);
         condensedI.push(backgroundT.length | 3);
         statistics0 += `${splashr.size}`;
         soundV = statistics0.length < 5 && soundV;
         splashr.set(`${statistics0}`, 1 - statistics0.length);
         package_dmv = (yellowvideoliveK.length & backgroundT.length) < 42;
         condensedI.push((backgroundT == String.fromCharCode(122,0) ? backgroundT.length : condensedI.length));
      let whiteticko = package_dmv ? !package_dmv : package_dmv;
      do {
         package_dmv = condensedI.length < 91 || package_dmv;
         if (whiteticko) {
            break;
         }
      } while (whiteticko && (2 == condensedI.length));
         fulle.push((condensedI.length * (package_dmv ? 4 : 4)));
         backgroundT += `${backgroundT.length << (Math.min(Math.abs(3), 4))}`;
      uimanager5 = `${matchZ.length % (Math.max(3, fulle.length))}`;
   }
      inactivel = "1";
    if (!offline) {

   for (let r = 0; r < 3; r++) {
      inactivel = `${matchZ.length & parseInt(`${telegramN}`)}`;
   }
   let unselectedy = telegramN <= 8705602.0;
   do {
      telegramN -= parseFloat(`${liveY << (Math.min(3, Math.abs(3)))}`);
      if (unselectedy) {
         break;
      }
   } while ((uimanager5.startsWith(`${telegramN}`)) && unselectedy);
   for (let i = 0; i < 2; i++) {
      iconrightorangeZ -= (inactivel == String.fromCharCode(52,0) ? inactivel.length : matchZ.length);
   }
   for (let z = 0; z < 1; z++) {
       let defaultplayerimgJ = false;
       let iconarrowrightblackf = String.fromCharCode(112,111,108,121,109,111,100,95,49,95,51,48,0);
       let with_mue: Array<any> = [587, 84, 203];
       let fastX = true;
         with_mue = [2];
      while (!fastX) {
         iconarrowrightblackf = `${1 << (Math.min(1, iconarrowrightblackf.length))}`;
         break;
      }
       let description_j0 = 0;
       let homev = 1;
      if (with_mue.length >= 3) {
          let connectionQ = String.fromCharCode(122,95,56,53,95,97,112,102,115,0);
          let playlistY = String.fromCharCode(112,108,97,110,97,114,116,111,117,121,118,121,95,56,95,57,50,0);
          let stationE = 2.0;
         fastX = connectionQ == String.fromCharCode(72,0);
         connectionQ += `${parseInt(`${stationE}`) << (Math.min(playlistY.length, 3))}`;
         playlistY += `${parseInt(`${stationE}`) % 2}`;
      }
          let libfile3 = String.fromCharCode(106,95,56,51,95,105,110,100,101,112,101,110,100,101,100,0);
          let details1 = String.fromCharCode(106,95,55,54,95,115,101,110,100,0);
          let completeT = String.fromCharCode(113,95,51,50,95,110,111,108,111,99,107,0);
         iconarrowrightblackf += `${homev}`;
         libfile3 += `${libfile3.length - completeT.length}`;
         details1 += "2";
         completeT += `${3 ^ details1.length}`;
       let n_countl = String.fromCharCode(101,109,98,101,100,100,105,110,103,95,49,95,56,57,0);
      for (let k = 0; k < 3; k++) {
         homev <<= Math.min(iconarrowrightblackf.length, 2);
      }
      let ajaxf = description_j0 >= 9734064;
      do {
         description_j0 <<= Math.min(2, Math.abs(2));
         if (ajaxf) {
            break;
         }
      } while ((3 >= description_j0 || 2 >= (description_j0 ^ 3)) && ajaxf);
      while ((iconarrowrightblackf.length / (Math.max(9, with_mue.length))) >= 3) {
          let weiboz = 5.0;
          let moonH = String.fromCharCode(97,109,112,108,105,116,117,100,101,95,112,95,51,48,0);
          let floaterd = 4.0;
         iconarrowrightblackf = `${parseInt(`${floaterd}`) * 2}`;
         weiboz += parseFloat(`${parseInt(`${weiboz}`)}`);
         moonH = "3";
         floaterd *= (String.fromCharCode(67,0) == moonH ? parseInt(`${weiboz}`) : moonH.length);
         break;
      }
          let huaweiD = String.fromCharCode(116,95,50,95,101,110,115,117,114,101,100,0);
          let backk: Array<any> = [277, 982, 552];
          let disconnectedlogon = String.fromCharCode(98,95,51,55,95,112,114,101,97,108,108,111,99,97,116,101,0);
         iconarrowrightblackf = `${(disconnectedlogon == String.fromCharCode(112,0) ? homev : disconnectedlogon.length)}`;
         huaweiD = `${2 & huaweiD.length}`;
         backk.push(1 * huaweiD.length);
         homev ^= (String.fromCharCode(103,0) == iconarrowrightblackf ? iconarrowrightblackf.length : description_j0);
         description_j0 ^= ((fastX ? 3 : 4));
      uimanager5 = `${humidityC.length}`;
   }
   if (2.47 < (1.61 / (Math.max(8, smallbrightnessf))) && (1.61 / (Math.max(5, telegramN))) < 4.88) {
      telegramN /= Math.max(parseFloat(`${uimanager5.length}`), 2);
   }
      handleRefresh(navId);
    }
  };
  const handleShowLoading = async () => {
       let time_nlX = String.fromCharCode(105,110,100,101,110,116,97,116,105,111,110,95,114,95,53,54,0);
    let with_zC = true;
    let questiconL = 1.0;
    let store2 = String.fromCharCode(97,95,51,95,109,117,116,117,97,108,0);
    let y_viewL = 4;
    let moon4 = 4.0;
    let basketballplayerplaceholderE = String.fromCharCode(108,95,57,48,95,115,105,103,115,0);
    let inactive9 = 1.0;
    let profileactivex = String.fromCharCode(104,95,57,57,0);
    let colors3 = 2.0;
    let exampleimageD: Array<any> = [95, 683];
      store2 = `${(store2.length << (Math.min(3, Math.abs((with_zC ? 1 : 2)))))}`;
      with_zC = store2 == String.fromCharCode(71,0) && time_nlX.length > 59;
   for (let w = 0; w < 1; w++) {
      moon4 /= Math.max(2, (parseFloat(`${String.fromCharCode(101,0) == time_nlX ? parseInt(`${inactive9}`) : time_nlX.length}`)));
   }
      time_nlX += "2";
      y_viewL &= (parseInt(`${inactive9}`) >> (Math.min(1, Math.abs((with_zC ? 5 : 2)))));
   if (moon4 < 3.59) {
      moon4 *= parseFloat(`${y_viewL << (Math.min(Math.abs(1), 2))}`);
   }
   if (1.55 <= (moon4 + inactive9)) {
      moon4 -= parseFloat(`${y_viewL}`);
   }
   while (1 > time_nlX.length) {
      with_zC = time_nlX.length == 56;
      break;
   }
      moon4 -= parseFloat(`${y_viewL}`);
      basketballplayerplaceholderE += `${parseInt(`${questiconL}`) + 1}`;
   let ginit_92 = basketballplayerplaceholderE.length >= 7043347;
   do {
      basketballplayerplaceholderE += `${(String.fromCharCode(71,0) == profileactivex ? parseInt(`${moon4}`) : profileactivex.length)}`;
      if (ginit_92) {
         break;
      }
   } while ((!basketballplayerplaceholderE.startsWith(`${inactive9}`)) && ginit_92);
       let fieldO = 4;
       let libloggerM = 0.0;
       let canvas8 = 2.0;
          let libswscalew = 0.0;
          let episodesb = String.fromCharCode(116,111,107,101,110,110,102,116,116,120,95,120,95,57,53,0);
          let auto_tsO = 4.0;
         libloggerM -= (episodesb == String.fromCharCode(75,0) ? episodesb.length : parseInt(`${libswscalew}`));
         libswscalew /= Math.max(parseFloat(`${1 / (Math.max(parseInt(`${auto_tsO}`), 1))}`), 1);
         fieldO &= parseInt(`${libloggerM}`);
      let rulesh = 8701101.0 >= libloggerM;
      do {
         libloggerM /= Math.max(2, parseInt(`${canvas8}`));
         if (rulesh) {
            break;
         }
      } while ((canvas8 < 3.68) && rulesh);
         canvas8 -= 3 * parseInt(`${libloggerM}`);
      let windK = 8514139.0 <= libloggerM;
      do {
         libloggerM /= Math.max(2, 5);
         if (windK) {
            break;
         }
      } while (windK && (fieldO <= libloggerM));
       let flipperg = 2;
      for (let i = 0; i < 3; i++) {
         flipperg |= 1 * fieldO;
      }
      while (fieldO > flipperg) {
         flipperg %= Math.max(3, 1 % (Math.max(10, parseInt(`${canvas8}`))));
         break;
      }
      while (4.26 >= (canvas8 - 4.40)) {
         flipperg /= Math.max(3, 4);
         break;
      }
      basketballplayerplaceholderE += `${1 << (Math.min(Math.abs(parseInt(`${inactive9}`)), 5))}`;
      moon4 /= Math.max(parseFloat(`${parseInt(`${moon4}`) * 1}`), 2);
      inactive9 -= parseInt(`${inactive9}`);
      store2 = "1";
   let internetp = basketballplayerplaceholderE.length >= 9286943;
   do {
      basketballplayerplaceholderE += `${parseInt(`${moon4}`) * store2.length}`;
      if (internetp) {
         break;
      }
   } while (internetp && (2 > (2 * parseInt(`${colors3}`)) || 1.88 > (3.4 * colors3)));
   for (let r = 0; r < 1; r++) {
      basketballplayerplaceholderE += `${store2.length & 1}`;
   }
      moon4 /= Math.max(parseFloat(`${2}`), 5);

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
       let zoomD = String.fromCharCode(117,95,53,53,95,108,101,110,0);
    let penaltyb = String.fromCharCode(112,101,114,99,101,110,116,97,103,101,95,119,95,52,55,0);
    let rooto = String.fromCharCode(113,95,54,54,95,112,101,115,113,0);
    let iconarrowrightd: Array<any> = [733, 363];
    let matchR = String.fromCharCode(120,95,55,95,115,111,102,97,108,105,122,101,114,0);
    let mbsplashZ = 4.0;
    let basketballdetailsbg2: Map<any, any> = new Map([[String.fromCharCode(102,114,111,110,116,95,119,95,52,57,0),701], [String.fromCharCode(107,95,53,55,95,117,110,115,97,102,101,0),596]]);
    let middlesoundP = 3.0;
    let bang4: Array<any> = [179, 863, 307];
    let index2 = 1.0;
    let eactu: Array<any> = [537, 99, 846];
    let details7 = String.fromCharCode(115,104,97,114,112,101,110,95,106,95,52,50,0);
    let release_23I = String.fromCharCode(116,95,52,52,95,107,101,101,112,0);
    let viewerm = 2.0;
    let paginationH = 1.0;
    let whitebellb = String.fromCharCode(113,95,57,55,95,116,104,101,105,114,0);
    let plashD = true;
       let rulesv = String.fromCharCode(97,114,99,104,101,116,121,112,101,95,117,95,55,50,0);
       let areaV = String.fromCharCode(112,101,117,107,101,114,95,121,95,57,54,0);
       let manifestH = String.fromCharCode(115,95,53,56,95,115,117,109,115,113,0);
      for (let h = 0; h < 1; h++) {
          let related8 = 1;
          let eventL = false;
          let dicelogoN = String.fromCharCode(97,108,109,111,115,116,95,120,95,50,55,0);
          let airbnbstarselectedK = String.fromCharCode(115,117,98,115,101,113,117,101,110,116,95,118,95,52,51,0);
         rulesv += `${airbnbstarselectedK.length}`;
         related8 *= ((eventL ? 2 : 3) | 1);
         eventL = ((dicelogoN.length ^ (eventL ? 26 : dicelogoN.length)) > 26);
         airbnbstarselectedK += `${related8}`;
      }
       let codegenF = 5.0;
       let mapbuffers = 5.0;
      if (codegenF < 2.85) {
         codegenF += areaV.length - 3;
      }
      if (!areaV.includes(`${rulesv.length}`)) {
          let updatesp = 5.0;
          let collectionA = 0;
          let sellmathbackgroundY: Map<any, any> = new Map([[String.fromCharCode(103,95,52,51,95,109,97,116,116,101,100,0),954], [String.fromCharCode(103,95,51,56,95,117,110,116,121,112,101,100,0),128], [String.fromCharCode(99,95,50,50,95,98,110,99,98,98,0),31]]);
         areaV += `${collectionA / 3}`;
         updatesp += sellmathbackgroundY.size;
         collectionA >>= Math.min(Math.abs(3 ^ parseInt(`${updatesp}`)), 5);
         sellmathbackgroundY.set(`${updatesp}`, parseInt(`${updatesp}`) & 2);
      }
       let pingA = 0.0;
         areaV += `${parseInt(`${pingA}`)}`;
         codegenF -= areaV.length << (Math.min(Math.abs(2), 2));
       let screenR = String.fromCharCode(115,99,97,108,101,109,111,100,101,95,50,95,52,48,0);
      middlesoundP -= parseInt(`${mbsplashZ}`) + 2;
   if (details7.length < bang4.length) {
       let penaltymatchiconT: Map<any, any> = new Map([[String.fromCharCode(110,97,116,105,111,110,97,108,105,116,121,95,109,95,50,48,0),37], [String.fromCharCode(112,114,111,112,101,114,116,121,95,113,95,53,49,0),90]]);
       let moonK = 2.0;
       let hookb: Array<any> = [743, 356, 497];
       let stationsY = 0.0;
         penaltymatchiconT.set(`${stationsY}`, 3);
         penaltymatchiconT = new Map([[`${moonK}`, parseInt(`${moonK}`) >> (Math.min(Math.abs(parseInt(`${stationsY}`)), 1))]]);
          let currentQ = String.fromCharCode(105,95,52,49,95,115,116,97,99,104,0);
         moonK += currentQ.length * parseInt(`${moonK}`);
      while ((5 | penaltymatchiconT.size) > 4) {
          let internet7 = String.fromCharCode(121,95,55,51,95,99,97,99,104,101,0);
          let refreshborderlessG = 1.0;
          let targetd = String.fromCharCode(99,97,112,116,117,114,101,116,101,115,116,118,105,100,101,111,95,114,95,54,56,0);
          let pauseE = true;
          let weatherk = 5;
         penaltymatchiconT.set(`${moonK}`, parseInt(`${moonK}`) ^ 1);
         internet7 += `${((pauseE ? 5 : 3) % (Math.max(1, weatherk)))}`;
         refreshborderlessG -= parseFloat(`${2 - internet7.length}`);
         targetd += "1";
         weatherk -= (String.fromCharCode(121,0) == targetd ? targetd.length : parseInt(`${refreshborderlessG}`));
         break;
      }
      for (let m = 0; m < 1; m++) {
          let mountingx: Map<any, any> = new Map([[String.fromCharCode(116,95,57,54,0),798], [String.fromCharCode(100,101,112,95,49,95,52,52,0),99]]);
          let becomeN = 5.0;
         hookb.push(2);
         mountingx.set(`${becomeN}`, parseInt(`${becomeN}`) | 3);
      }
       let whistleW: Map<any, any> = new Map([[String.fromCharCode(110,111,115,99,97,108,101,95,57,95,49,48,0),false ], [String.fromCharCode(112,97,114,116,105,97,108,95,98,95,51,52,0),false ]]);
         stationsY -= parseFloat(`${parseInt(`${stationsY}`) & hookb.length}`);
         moonK /= Math.max(parseInt(`${stationsY}`) & 3, 3);
          let calendarY = 5.0;
          let runtimep: Array<any> = [725, 233, 344];
          let runtimeo = String.fromCharCode(106,95,57,49,95,114,97,100,102,0);
         moonK += runtimep.length;
         calendarY -= parseFloat(`${parseInt(`${calendarY}`) % (Math.max(6, runtimeo.length))}`);
         runtimep.push(parseInt(`${calendarY}`) * 2);
         runtimeo += "1";
          let typesq = String.fromCharCode(104,119,99,111,110,102,105,103,95,106,95,49,55,0);
         whistleW = new Map([[`${whistleW.size}`, parseInt(`${stationsY}`) & whistleW.size]]);
         typesq = `${typesq.length}`;
      let iconbackwhiteF = stationsY >= 8664500.0;
      do {
          let main_vK = String.fromCharCode(103,95,50,54,95,119,114,105,116,97,98,108,101,0);
          let iconrefreshj = String.fromCharCode(118,97,114,105,110,102,111,95,110,95,51,53,0);
          let libapminsightbx = 1.0;
          let mintegralg = String.fromCharCode(97,95,57,48,95,108,101,118,105,110,115,111,110,0);
          let baiduads6 = 2.0;
         stationsY *= parseFloat(`${3}`);
         main_vK = `${2 % (Math.max(4, mintegralg.length))}`;
         iconrefreshj += `${parseInt(`${libapminsightbx}`)}`;
         libapminsightbx += parseFloat(`${2}`);
         mintegralg = `${2 + parseInt(`${baiduads6}`)}`;
         baiduads6 += main_vK.length + iconrefreshj.length;
         if (iconbackwhiteF) {
            break;
         }
      } while (iconbackwhiteF && (whistleW.get(`${stationsY}`) == null));
         stationsY /= Math.max(parseFloat(`${2}`), 4);
      bang4 = [1];
   }
   let hookC = String.fromCharCode(106,121,109,56,109,111,97,121,0) == details7;
   do {
      details7 = `${details7.length + 3}`;
      if (hookC) {
         break;
      }
   } while (hookC && (1.29 == (mbsplashZ / (Math.max(details7.length, 8)))));
   for (let n = 0; n < 1; n++) {
      mbsplashZ += basketballdetailsbg2.size;
   }

    if (showloading) {

      iconarrowrightd = [parseInt(`${index2}`)];
   for (let t = 0; t < 3; t++) {
      index2 *= parseInt(`${middlesoundP}`);
   }
   let middlebrightnessD = 7073599 <= release_23I.length;
   do {
       let nativemoduleu = true;
       let anythinkw = String.fromCharCode(97,95,51,49,95,116,100,115,99,0);
       let acceptedF = 5.0;
         acceptedF *= parseInt(`${acceptedF}`);
          let reactnativejs0 = String.fromCharCode(98,95,50,51,95,104,100,114,115,0);
          let downloaded7: Array<any> = [852, 697, 746];
         acceptedF /= Math.max(1, (reactnativejs0.length * (nativemoduleu ? 1 : 5)));
         reactnativejs0 = `${3 ^ downloaded7.length}`;
         downloaded7 = [downloaded7.length | downloaded7.length];
      let profileX = acceptedF >= 8367219.0;
      do {
         acceptedF -= 2;
         if (profileX) {
            break;
         }
      } while (((acceptedF - anythinkw.length) >= 5.89 && 5.89 >= (acceptedF - anythinkw.length)) && profileX);
      for (let u = 0; u < 3; u++) {
          let rocketQ = String.fromCharCode(97,114,103,117,109,101,110,116,115,95,115,95,53,50,0);
         anythinkw = `${((nativemoduleu ? 4 : 2) * 3)}`;
         rocketQ += `${rocketQ.length & 3}`;
      }
       let temperature8 = 4;
       let sigmobg = 3;
         acceptedF /= Math.max(((nativemoduleu ? 4 : 4) ^ temperature8), 4);
         anythinkw = `${anythinkw.length}`;
         acceptedF *= ((nativemoduleu ? 5 : 5) ^ parseInt(`${acceptedF}`));
      let tumbnail8 = 8759017 >= sigmobg;
      do {
          let giftbuttonO = 2;
          let greenarrowups = 0.0;
          let textlayoutmanagerk = 5.0;
         sigmobg <<= Math.min(Math.abs((parseInt(`${acceptedF}`) - (nativemoduleu ? 2 : 1))), 4);
         giftbuttonO ^= parseInt(`${textlayoutmanagerk}`) & parseInt(`${greenarrowups}`);
         greenarrowups -= 1 << (Math.min(Math.abs(parseInt(`${textlayoutmanagerk}`)), 3));
         if (tumbnail8) {
            break;
         }
      } while (tumbnail8 && (nativemoduleu));
      release_23I += `${release_23I.length}`;
      if (middlebrightnessD) {
         break;
      }
   } while ((matchR.length >= 5) && middlebrightnessD);
   if (penaltyb.includes(`${index2}`)) {
       let e_imageM = String.fromCharCode(108,95,55,51,95,108,105,112,98,111,97,114,100,0);
       let servicet: Array<any> = [677, 104, 681];
       let activeN = String.fromCharCode(104,95,51,49,95,116,104,97,110,0);
       let iconarrowrightorangee = false;
       let grayt: Array<any> = [313, 665];
          let feedbacke: Array<any> = [312, 190, 33];
         grayt = [servicet.length - 2];
         feedbacke.push(feedbacke.length - feedbacke.length);
          let crownL = String.fromCharCode(99,111,110,116,111,117,114,95,121,95,48,0);
         iconarrowrightorangee = (grayt.length / (Math.max(crownL.length, 1))) <= 30;
      let selectedu = servicet.length <= 8441957;
      do {
         servicet = [(1 + (iconarrowrightorangee ? 4 : 1))];
         if (selectedu) {
            break;
         }
      } while (selectedu && (servicet.length > e_imageM.length));
          let predictiondefault2 = String.fromCharCode(100,95,49,50,95,104,111,117,114,0);
         iconarrowrightorangee = (((!iconarrowrightorangee ? servicet.length : 57) % (Math.max(servicet.length, 3))) <= 57);
         predictiondefault2 = `${(predictiondefault2 == String.fromCharCode(53,0) ? predictiondefault2.length : predictiondefault2.length)}`;
      while (4 <= (servicet.length + 4) || (activeN.length + 4) <= 5) {
          let spinnerA = false;
         activeN = `${((iconarrowrightorangee ? 5 : 5))}`;
         break;
      }
      while ((grayt.length | activeN.length) >= 2) {
          let componentsv = 1.0;
          let iconwechatC = true;
          let iconarrowleftZ = 2.0;
          let skipe = String.fromCharCode(101,114,114,110,111,95,57,95,49,49,0);
         grayt = [e_imageM.length + 3];
         componentsv += ((iconwechatC ? 1 : 1) + parseInt(`${componentsv}`));
         iconwechatC = skipe.length > iconarrowleftZ;
         iconarrowleftZ += (parseInt(`${componentsv}`) - (iconwechatC ? 3 : 4));
         skipe += `${(parseInt(`${iconarrowleftZ}`) & (iconwechatC ? 1 : 5))}`;
         break;
      }
      let chatbotphoto3 = activeN == String.fromCharCode(114,110,56,120,119,0);
      do {
         activeN = `${((iconarrowrightorangee ? 2 : 1) | 3)}`;
         if (chatbotphoto3) {
            break;
         }
      } while ((activeN.length < e_imageM.length) && chatbotphoto3);
      let pathP = 6995362 <= e_imageM.length;
      do {
          let iconplay8 = false;
          let yellowtoredZ: Map<any, any> = new Map([[String.fromCharCode(116,114,117,110,99,97,116,101,100,95,111,95,56,57,0),92], [String.fromCharCode(106,95,52,52,95,116,97,103,97,118,114,0),572], [String.fromCharCode(109,112,101,103,97,117,100,105,111,100,97,116,97,95,115,95,52,56,0),607]]);
         e_imageM = `${grayt.length}`;
         iconplay8 = yellowtoredZ.size >= 9;
         yellowtoredZ = new Map([[`${yellowtoredZ.size}`, yellowtoredZ.size]]);
         if (pathP) {
            break;
         }
      } while (pathP && (e_imageM.endsWith(`${grayt.length}`)));
          let libreactnativejnic = 5.0;
          let dycreatore = 2.0;
          let whitetickt = 2;
         activeN += `${(activeN == String.fromCharCode(54,0) ? activeN.length : (iconarrowrightorangee ? 3 : 5))}`;
         libreactnativejnic *= parseInt(`${dycreatore}`);
         dycreatore -= parseInt(`${libreactnativejnic}`) * parseInt(`${dycreatore}`);
         whitetickt <<= Math.min(Math.abs(whitetickt), 4);
         servicet.push(e_imageM.length & activeN.length);
         e_imageM += `${(e_imageM == String.fromCharCode(50,0) ? e_imageM.length : (iconarrowrightorangee ? 3 : 1))}`;
      for (let t = 0; t < 2; t++) {
         grayt.push(grayt.length);
      }
      for (let e = 0; e < 3; e++) {
         iconarrowrightorangee = activeN == String.fromCharCode(116,0);
      }
      for (let r = 0; r < 3; r++) {
         grayt.push(activeN.length);
      }
         servicet.push(grayt.length);
      penaltyb = `${bang4.length}`;
   }
      setIsRefreshing(true);
    }
    try {

       let iconpointscore1: Map<any, any> = new Map([[String.fromCharCode(98,95,56,49,95,114,101,113,117,105,114,101,109,101,110,116,115,0),683], [String.fromCharCode(107,95,52,57,95,100,101,118,105,100,101,0),429]]);
      for (let g = 0; g < 3; g++) {
          let showmoreR: Map<any, any> = new Map([[String.fromCharCode(112,107,99,115,95,107,95,49,52,0),118], [String.fromCharCode(114,97,115,116,101,114,105,122,101,95,103,95,55,51,0),514], [String.fromCharCode(104,95,51,51,95,98,117,116,111,110,0),534]]);
          let gesturem = String.fromCharCode(98,95,56,51,95,108,122,115,115,0);
          let watchc = String.fromCharCode(100,114,97,119,97,98,108,101,115,95,48,95,55,49,0);
          let actionE = 0.0;
          let cricket3 = 3.0;
         iconpointscore1 = new Map([[`${iconpointscore1.size}`, (watchc == String.fromCharCode(115,0) ? iconpointscore1.size : watchc.length)]]);
         showmoreR = new Map([[`${actionE}`, parseInt(`${cricket3}`) ^ 2]]);
         gesturem += `${parseInt(`${cricket3}`) << (Math.min(5, Math.abs(2)))}`;
         actionE *= parseFloat(`${parseInt(`${cricket3}`)}`);
      }
          let eyeopene = 2;
          let libloggeru = String.fromCharCode(116,114,97,110,115,95,53,95,53,52,0);
          let predictionarrowf = 3;
         iconpointscore1 = new Map([[`${iconpointscore1.size}`, (libloggeru == String.fromCharCode(114,0) ? iconpointscore1.size : libloggeru.length)]]);
         eyeopene *= predictionarrowf;
         predictionarrowf |= eyeopene;
         iconpointscore1.set(`${iconpointscore1.size}`, iconpointscore1.size >> (Math.min(Math.abs(iconpointscore1.size), 5)));
      penaltyb = `${rooto.length & parseInt(`${index2}`)}`;
   for (let r = 0; r < 1; r++) {
      bang4 = [3];
   }
   let hoverr = mbsplashZ >= 8723495.0;
   do {
      mbsplashZ -= parseInt(`${index2}`);
      if (hoverr) {
         break;
      }
   } while ((5 >= basketballdetailsbg2.size) && hoverr);
      bang4.push(parseInt(`${index2}`) % (Math.max(5, zoomD.length)));
      await queryClient.resetQueries(["HomePage", id]);

      iconarrowrightd.push(parseInt(`${index2}`) ^ 1);
   if (4.72 >= index2) {
       let countdownH = 0;
         countdownH /= Math.max(countdownH - countdownH, 5);
      if ((countdownH + countdownH) == 2) {
         countdownH %= Math.max(2, countdownH);
      }
      let unreadY = countdownH <= 5027758;
      do {
          let imagewatchlive1 = String.fromCharCode(98,117,102,102,101,114,105,110,103,95,122,95,49,55,0);
          let stationsi = 2;
          let sliderK = String.fromCharCode(111,95,49,54,95,114,111,108,108,0);
         countdownH <<= Math.min(3, imagewatchlive1.length);
         imagewatchlive1 += `${stationsi * 2}`;
         stationsi *= stationsi / (Math.max(sliderK.length, 4));
         sliderK = "2";
         if (unreadY) {
            break;
         }
      } while (unreadY && (5 >= (countdownH / 4)));
      eactu = [parseInt(`${mbsplashZ}`)];
   }
   for (let p = 0; p < 1; p++) {
      index2 -= matchR.length >> (Math.min(Math.abs(2), 2));
   }
   let whistleS = 6785247 >= bang4.length;
   do {
       let n_player1 = String.fromCharCode(109,95,54,95,117,97,110,0);
       let current7: Map<any, any> = new Map([[String.fromCharCode(105,110,116,114,101,97,100,119,114,105,116,101,95,119,95,54,49,0),525], [String.fromCharCode(116,111,111,116,105,112,95,99,95,55,57,0),163]]);
       let confirmationR = String.fromCharCode(98,95,54,53,95,104,99,109,99,0);
      if ((current7.size - 4) >= 4 || (confirmationR.length - 4) >= 4) {
         confirmationR = `${current7.size | confirmationR.length}`;
      }
         current7.set(confirmationR, current7.size << (Math.min(confirmationR.length, 2)));
      for (let m = 0; m < 2; m++) {
         confirmationR += `${n_player1.length}`;
      }
       let gestures8 = 5;
         n_player1 += `${current7.size / (Math.max(n_player1.length, 10))}`;
         gestures8 &= current7.size % 1;
         current7.set(`${gestures8}`, n_player1.length & gestures8);
       let type__eN: Map<any, any> = new Map([[String.fromCharCode(107,95,57,51,95,112,111,108,108,105,110,103,0),false ], [String.fromCharCode(117,95,52,54,95,112,111,114,116,97,105,116,0),true ], [String.fromCharCode(121,95,51,48,95,116,101,115,116,111,114,105,103,0),true ]]);
      for (let q = 0; q < 1; q++) {
         n_player1 = `${confirmationR.length}`;
      }
      bang4.push(penaltyb.length + 2);
      if (whistleS) {
         break;
      }
   } while ((bang4.length > parseInt(`${mbsplashZ}`)) && whistleS);
      setIsRefreshing(false);

   while (3 <= rooto.length) {
       let iconmegaphoneA = String.fromCharCode(103,95,49,52,95,114,116,114,101,101,100,101,112,116,104,0);
       let condensedx = String.fromCharCode(116,114,97,100,101,95,111,95,51,53,0);
       let bridgeI = String.fromCharCode(117,95,49,56,95,120,114,101,115,0);
       let libswscaleS = 5.0;
          let macauj = 2;
          let mode2 = 3.0;
          let target1 = false;
         iconmegaphoneA += `${parseInt(`${mode2}`) * 1}`;
         macauj &= 3 * macauj;
         mode2 /= Math.max(macauj, 2);
         target1 = !target1;
      while ((parseInt(`${libswscaleS}`) * bridgeI.length) == 2 || (libswscaleS * 4.9) == 4.32) {
          let controlss = String.fromCharCode(104,95,54,56,95,97,99,116,105,118,97,116,105,111,110,115,0);
          let libfiler = String.fromCharCode(111,114,105,103,110,97,108,95,101,95,52,54,0);
         bridgeI += `${(controlss == String.fromCharCode(95,0) ? controlss.length : parseInt(`${libswscaleS}`))}`;
         libfiler += "1";
         break;
      }
         iconmegaphoneA = `${bridgeI.length}`;
       let securityz = 1.0;
       let iconarrowrightwhitev = 2.0;
         iconmegaphoneA = `${parseInt(`${securityz}`)}`;
      let armvaD = condensedx == String.fromCharCode(48,116,50,112,0);
      do {
         condensedx = `${3 | parseInt(`${securityz}`)}`;
         if (armvaD) {
            break;
         }
      } while (armvaD && (condensedx.length >= 2));
         condensedx = `${3 ^ parseInt(`${libswscaleS}`)}`;
          let long_jyD: Map<any, any> = new Map([[String.fromCharCode(113,95,54,56,95,105,102,97,109,115,103,0),710], [String.fromCharCode(97,116,97,98,97,115,101,95,106,95,53,51,0),862], [String.fromCharCode(103,101,116,115,111,99,107,111,112,116,95,106,95,49,49,0),176]]);
          let predictionlosse: Map<any, any> = new Map([[String.fromCharCode(118,115,110,112,114,105,110,116,102,95,55,95,55,55,0),832], [String.fromCharCode(112,97,99,107,101,116,112,101,101,107,95,102,95,51,54,0),264], [String.fromCharCode(109,95,57,56,95,115,105,103,110,114,97,110,100,0),851]]);
          let libavfilterW: Map<any, any> = new Map([[String.fromCharCode(109,112,111,115,95,101,95,51,50,0),51], [String.fromCharCode(107,95,54,51,95,115,105,103,110,97,116,117,114,101,115,0),771]]);
         securityz *= parseFloat(`${parseInt(`${securityz}`) & parseInt(`${iconarrowrightwhitev}`)}`);
         long_jyD.set(`${long_jyD.size}`, 3 / (Math.max(5, long_jyD.size)));
         predictionlosse = new Map([[`${predictionlosse.size}`, 1]]);
         libavfilterW.set(`${libavfilterW.size}`, libavfilterW.size * predictionlosse.size);
      while (1.75 >= securityz) {
         condensedx += "2";
         break;
      }
      let libffmpegkitJ = libswscaleS <= 6946046.0;
      do {
         libswscaleS -= 2 - parseInt(`${securityz}`);
         if (libffmpegkitJ) {
            break;
         }
      } while ((iconmegaphoneA.includes(`${libswscaleS}`)) && libffmpegkitJ);
         condensedx = `${parseInt(`${libswscaleS}`) >> (Math.min(bridgeI.length, 5))}`;
          let yellowtored7 = String.fromCharCode(112,114,101,112,114,111,103,114,97,109,109,101,100,95,57,95,52,52,0);
         condensedx += `${2 << (Math.min(2, condensedx.length))}`;
         yellowtored7 = `${yellowtored7.length}`;
      penaltyb += `${bridgeI.length % (Math.max(2, 6))}`;
      break;
   }
   for (let v = 0; v < 1; v++) {
      details7 += "2";
   }
      index2 *= 3 & matchR.length;
      index2 -= eactu.length | basketballdetailsbg2.size;
      setNavId(id);

   if (zoomD.length > matchR.length) {
      zoomD += `${details7.length * eactu.length}`;
   }
       let specJ = String.fromCharCode(97,112,115,95,103,95,54,55,0);
          let j_imagec = 0.0;
         specJ += `${2 + parseInt(`${j_imagec}`)}`;
         specJ = `${specJ.length}`;
         specJ += `${specJ.length / (Math.max(3, specJ.length))}`;
      details7 += `${basketballdetailsbg2.size << (Math.min(4, Math.abs(parseInt(`${index2}`))))}`;
   if (4.24 > (index2 - 5.35) || (5.35 - mbsplashZ) > 4.67) {
      mbsplashZ /= Math.max(2, rooto.length / (Math.max(zoomD.length, 2)));
   }
   while (5 < (iconarrowrightd.length & 5)) {
      middlesoundP /= Math.max(parseInt(`${mbsplashZ}`), 1);
      break;
   }
      setShowHomeLoading(false);

      details7 += `${rooto.length}`;
   while ((zoomD.length - 3) == 1 && (3 - zoomD.length) == 4) {
      basketballdetailsbg2.set(`${middlesoundP}`, iconarrowrightd.length | parseInt(`${middlesoundP}`));
      break;
   }
      mbsplashZ /= Math.max(3, zoomD.length);
   while (release_23I == String.fromCharCode(77,0)) {
       let playr: Array<any> = [602, 893, 298];
       let heartF = true;
         heartF = playr.includes(heartF);
      let shielddoneQ = playr.length <= 6022534;
      do {
          let filed2 = String.fromCharCode(110,95,54,48,95,110,111,110,102,97,116,97,108,0);
          let imagemanagere: Array<any> = [String.fromCharCode(109,95,52,57,95,97,102,105,108,116,101,114,0), String.fromCharCode(115,95,49,49,95,102,102,97,116,0)];
          let iconpipexpandL = 1.0;
         playr = [playr.length / (Math.max(1, 4))];
         filed2 += "1";
         imagemanagere = [filed2.length];
         iconpipexpandL /= Math.max(3, 4);
         if (shielddoneQ) {
            break;
         }
      } while (shielddoneQ && ((playr.length ^ 1) <= 1 || playr.length <= 1));
         playr = [playr.length - 3];
         heartF = !heartF;
      let stationC = playr.length <= 8080222;
      do {
          let borderlessp = String.fromCharCode(110,111,116,105,102,105,99,97,116,105,111,110,95,52,95,55,56,0);
          let iconmoreq = String.fromCharCode(120,100,99,97,109,95,105,95,49,55,0);
          let uimanagera = 4.0;
          let iconclosewhitewithbg1 = 1;
         playr.push(iconclosewhitewithbg1 / 2);
         borderlessp = `${parseInt(`${uimanagera}`)}`;
         iconmoreq += `${parseInt(`${uimanagera}`)}`;
         iconclosewhitewithbg1 -= iconmoreq.length / (Math.max(2, 8));
         if (stationC) {
            break;
         }
      } while ((heartF) && stationC);
         heartF = (16 == ((!heartF ? 16 : playr.length) % (Math.max(playr.length, 2))));
      details7 = "1";
      break;
   }

      return;
    } catch (error) {

      details7 += `${parseInt(`${index2}`)}`;
       let sellmathbackgroundg = 2;
         sellmathbackgroundg *= sellmathbackgroundg;
         sellmathbackgroundg /= Math.max(4, sellmathbackgroundg >> (Math.min(Math.abs(2), 3)));
      if (4 < (sellmathbackgroundg + sellmathbackgroundg) && 4 < (sellmathbackgroundg + sellmathbackgroundg)) {
         sellmathbackgroundg += 3;
      }
      zoomD = `${parseInt(`${mbsplashZ}`)}`;
      details7 = `${2 | iconarrowrightd.length}`;
   let attributedstringP = 9463812 <= matchR.length;
   do {
      matchR += `${details7.length - bang4.length}`;
      if (attributedstringP) {
         break;
      }
   } while ((details7 != String.fromCharCode(97,0)) && attributedstringP);
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    const handleTabPress = async () => {
       let handlerS = 4.0;
    let contextC = 0;
    let descG = false;
    let templateprocessorV = String.fromCharCode(118,101,114,116,105,99,97,108,108,121,95,105,95,56,52,0);
    let iconnewchat8 = 3.0;
    let benefiti = String.fromCharCode(119,114,97,112,112,105,110,103,95,49,95,50,0);
    let friendsX = String.fromCharCode(116,105,109,101,103,109,95,120,95,52,57,0);
    let binddatasW: Array<any> = [690, 956, 335];
    let liney = String.fromCharCode(101,110,100,112,111,105,110,116,115,95,105,95,52,50,0);
   let typingloadingE = handlerS >= 8710457.0;
   do {
      handlerS -= parseFloat(`${parseInt(`${iconnewchat8}`)}`);
      if (typingloadingE) {
         break;
      }
   } while ((handlerS >= 5.73) && typingloadingE);
      handlerS += parseFloat(`${benefiti.length}`);
   while (benefiti.startsWith(`${friendsX.length}`)) {
      benefiti += `${friendsX.length}`;
      break;
   }
      descG = friendsX == benefiti;

      if (isFocused && !isRefreshing) {

   while (templateprocessorV.length == parseInt(`${handlerS}`)) {
      templateprocessorV += "3";
      break;
   }
   if (3 >= templateprocessorV.length) {
      contextC <<= Math.min(4, templateprocessorV.length);
   }
      benefiti += `${friendsX.length}`;
   if (4 > binddatasW.length || 4 > (binddatasW.length - 4)) {
       let weatherj: Map<any, any> = new Map([[String.fromCharCode(119,95,57,49,95,115,105,103,104,0),String.fromCharCode(99,95,52,54,95,112,111,114,116,97,108,0)], [String.fromCharCode(112,117,98,101,120,112,95,54,95,55,55,0),String.fromCharCode(121,95,52,49,95,120,109,117,108,116,0)], [String.fromCharCode(106,95,56,55,95,105,109,112,97,99,116,0),String.fromCharCode(99,108,101,97,114,95,111,95,53,55,0)]]);
       let icontransferclubc = String.fromCharCode(100,101,99,108,105,110,101,100,95,51,95,56,48,0);
       let loginsuccess4 = String.fromCharCode(99,95,54,52,95,98,114,111,97,100,99,97,115,116,115,0);
       let arrowupy = true;
       let subbasketballplayeri: Map<any, any> = new Map([[String.fromCharCode(104,95,55,49,0),String.fromCharCode(98,117,109,112,95,53,95,49,0)], [String.fromCharCode(117,108,111,110,103,95,101,95,52,49,0),String.fromCharCode(104,101,97,100,112,104,111,110,101,95,102,95,56,52,0)]]);
      if (1 == loginsuccess4.length) {
         icontransferclubc = `${icontransferclubc.length}`;
      }
         icontransferclubc = `${weatherj.size}`;
       let qaagm = String.fromCharCode(111,95,48,95,114,101,102,112,105,99,0);
      while (2 < (subbasketballplayeri.size & weatherj.size) && 2 < (weatherj.size & subbasketballplayeri.size)) {
          let subsi = String.fromCharCode(105,110,116,101,114,112,111,108,95,115,95,55,55,0);
          let navigation2: Array<any> = [574, 135, 313];
          let executorR = String.fromCharCode(110,95,53,49,95,116,101,115,115,0);
          let templateprocessor2 = 2;
         weatherj.set(icontransferclubc, icontransferclubc.length + subsi.length);
         subsi += `${(String.fromCharCode(85,0) == executorR ? templateprocessor2 : executorR.length)}`;
         navigation2 = [navigation2.length ^ executorR.length];
         templateprocessor2 |= 3 + navigation2.length;
         break;
      }
      while (5 == (1 + subbasketballplayeri.size) && 1 == (subbasketballplayeri.size + qaagm.length)) {
         qaagm += `${(loginsuccess4 == String.fromCharCode(105,0) ? subbasketballplayeri.size : loginsuccess4.length)}`;
         break;
      }
       let iconnotificationnewZ = String.fromCharCode(105,109,112,108,105,99,105,116,101,108,121,95,116,95,57,0);
      while (4 < loginsuccess4.length) {
         arrowupy = 75 <= weatherj.size;
         break;
      }
         loginsuccess4 = `${subbasketballplayeri.size}`;
      for (let l = 0; l < 1; l++) {
         arrowupy = iconnotificationnewZ.length <= 90;
      }
      if (2 < icontransferclubc.length) {
         qaagm += `${weatherj.size}`;
      }
         arrowupy = (icontransferclubc.length / (Math.max(9, loginsuccess4.length))) > 69;
      let middleY = 5325863 <= icontransferclubc.length;
      do {
         icontransferclubc = "3";
         if (middleY) {
            break;
         }
      } while ((!icontransferclubc.endsWith(`${iconnotificationnewZ.length}`)) && middleY);
          let telemetryt: Map<any, any> = new Map([[String.fromCharCode(99,121,117,118,95,120,95,54,55,0),887], [String.fromCharCode(99,111,109,112,111,115,105,116,101,95,98,95,53,55,0),131]]);
         qaagm = `${subbasketballplayeri.size}`;
         telemetryt = new Map([[`${telemetryt.size}`, telemetryt.size | telemetryt.size]]);
      let libavutilc = subbasketballplayeri.size >= 9418962;
      do {
          let recommendation6 = 4.0;
          let mathr = String.fromCharCode(104,95,50,48,95,101,120,116,101,114,110,97,108,108,121,0);
         subbasketballplayeri = new Map([[`${arrowupy}`, ((arrowupy ? 1 : 1))]]);
         recommendation6 += (parseFloat(`${String.fromCharCode(70,0) == mathr ? mathr.length : parseInt(`${recommendation6}`)}`));
         if (libavutilc) {
            break;
         }
      } while (libavutilc && (5 <= (5 >> (Math.min(1, Math.abs(subbasketballplayeri.size))))));
          let description_gx = 0;
          let predictionlossK = String.fromCharCode(100,101,98,97,110,100,95,106,95,50,52,0);
          let imageactionliveu: Map<any, any> = new Map([[String.fromCharCode(112,105,112,101,108,105,110,105,110,103,95,105,95,49,52,0),696], [String.fromCharCode(101,120,112,111,110,101,110,116,115,95,107,95,56,51,0),652], [String.fromCharCode(105,114,114,101,108,118,97,110,116,95,111,95,51,48,0),25]]);
         subbasketballplayeri.set(qaagm, (String.fromCharCode(89,0) == qaagm ? predictionlossK.length : qaagm.length));
         description_gx &= imageactionliveu.size & description_gx;
         predictionlossK = `${description_gx - imageactionliveu.size}`;
      descG = subbasketballplayeri.get(`${handlerS}`) != null;
   }
        setIsRefreshing((prevIsRefreshing) => {

   if (templateprocessorV != String.fromCharCode(84,0)) {
      benefiti = `${benefiti.length}`;
   }
      iconnewchat8 += parseInt(`${handlerS}`) ^ 1;
      handlerS += parseFloat(`${parseInt(`${iconnewchat8}`) / 3}`);
      handlerS += (parseFloat(`${String.fromCharCode(73,0) == templateprocessorV ? templateprocessorV.length : parseInt(`${handlerS}`)}`));
          if (prevIsRefreshing) {

   let ajaxi = 7444589.0 >= handlerS;
   do {
      handlerS += parseFloat(`${contextC}`);
      if (ajaxi) {
         break;
      }
   } while (((contextC ^ 1) < 5 && (contextC * 1) < 1) && ajaxi);
      iconnewchat8 *= (3 * (descG ? 4 : 1));
      handlerS /= Math.max(3, parseFloat(`${parseInt(`${handlerS}`)}`));
   if (binddatasW.length == 3 || 3 == (binddatasW.length % 3)) {
      descG = benefiti == String.fromCharCode(120,0);
   }
            return prevIsRefreshing; 
          } else {

   for (let q = 0; q < 2; q++) {
       let leakchecker7: Map<any, any> = new Map([[String.fromCharCode(112,115,110,114,95,116,95,52,53,0),919], [String.fromCharCode(104,95,52,51,95,107,101,121,112,97,116,104,0),768], [String.fromCharCode(104,95,57,48,95,115,95,53,0),657]]);
       let iconvieweri = 2;
       let gesturesn = true;
       let chatbotphotov = String.fromCharCode(107,95,54,52,95,115,104,105,109,0);
       let w_positionE = String.fromCharCode(101,95,50,55,95,97,110,100,0);
         gesturesn = String.fromCharCode(108,0) == chatbotphotov;
      if (!gesturesn) {
         iconvieweri &= ((gesturesn ? 2 : 4) / (Math.max(3, 3)));
      }
          let mintegralr: Array<any> = [606, 377];
         chatbotphotov = `${((gesturesn ? 2 : 2) & leakchecker7.size)}`;
         mintegralr.push(mintegralr.length);
      let playlistP = w_positionE == String.fromCharCode(103,105,109,102,118,0);
      do {
          let drag5 = String.fromCharCode(103,101,110,99,102,103,115,95,52,95,52,51,0);
          let calendarW = false;
          let humidityl: Array<any> = [675, 597, 727];
          let configurew = String.fromCharCode(117,112,103,114,97,100,101,95,113,95,53,51,0);
          let render9 = 1.0;
         w_positionE += `${(parseInt(`${render9}`) >> (Math.min(2, Math.abs((calendarW ? 4 : 4)))))}`;
         drag5 += `${humidityl.length | 3}`;
         calendarW = (humidityl.length - configurew.length) >= 81;
         configurew += `${drag5.length & 1}`;
         render9 *= drag5.length;
         if (playlistP) {
            break;
         }
      } while (playlistP && (5 > w_positionE.length && !gesturesn));
      while (1 == (leakchecker7.size | 4)) {
          let subtextC = 3.0;
         leakchecker7 = new Map([[`${iconvieweri}`, 1 + iconvieweri]]);
         subtextC /= Math.max(parseFloat(`${3 & parseInt(`${subtextC}`)}`), 5);
         break;
      }
          let streamingS = 4.0;
         gesturesn = w_positionE.startsWith(`${iconvieweri}`);
         streamingS -= parseFloat(`${3 / (Math.max(5, parseInt(`${streamingS}`)))}`);
         iconvieweri ^= leakchecker7.size;
         gesturesn = 48 > iconvieweri;
       let predictionbannersharedA = String.fromCharCode(103,111,112,115,95,116,95,51,57,0);
      while (2 >= (leakchecker7.size / (Math.max(chatbotphotov.length, 10))) && 2 >= (leakchecker7.size / (Math.max(10, chatbotphotov.length)))) {
         chatbotphotov = `${predictionbannersharedA.length / (Math.max(1, 2))}`;
         break;
      }
          let colorsK: Map<any, any> = new Map([[String.fromCharCode(114,97,100,102,95,110,95,50,52,0),false ], [String.fromCharCode(103,95,50,56,0),true ]]);
          let homeinactivev = 4;
         predictionbannersharedA = `${3 & homeinactivev}`;
         colorsK.set(`${colorsK.size}`, colorsK.size ^ 2);
         homeinactivev &= colorsK.size / (Math.max(7, colorsK.size));
          let goaly = 2.0;
         chatbotphotov += `${(chatbotphotov.length | (gesturesn ? 3 : 3))}`;
         goaly -= parseInt(`${goaly}`);
      for (let q = 0; q < 3; q++) {
         iconvieweri <<= Math.min(Math.abs(((gesturesn ? 2 : 2))), 1);
      }
      for (let p = 0; p < 1; p++) {
         chatbotphotov += `${leakchecker7.size & predictionbannersharedA.length}`;
      }
      while (5 == iconvieweri) {
         iconvieweri %= Math.max(1, predictionbannersharedA.length & 1);
         break;
      }
      binddatasW.push(2 << (Math.min(Math.abs(contextC), 1)));
   }
      iconnewchat8 /= Math.max(1, 3);
   let audiencef = iconnewchat8 <= 6963487.0;
   do {
      iconnewchat8 /= Math.max(friendsX.length % (Math.max(3, 1)), 5);
      if (audiencef) {
         break;
      }
   } while (audiencef && (contextC <= 5));
   for (let d = 0; d < 1; d++) {
       let icondownimg5 = 3;
       let sansO: Map<any, any> = new Map([[String.fromCharCode(99,111,110,110,101,99,116,105,111,110,115,95,56,95,53,54,0),181], [String.fromCharCode(104,95,55,52,95,101,110,100,97,0),419], [String.fromCharCode(117,95,55,57,95,102,105,110,100,110,101,116,0),477]]);
      for (let e = 0; e < 2; e++) {
         sansO = new Map([[`${sansO.size}`, icondownimg5]]);
      }
         icondownimg5 += 2 << (Math.min(1, Math.abs(icondownimg5)));
      let modalL = sansO.size >= 7407626;
      do {
         sansO = new Map([[`${sansO.size}`, sansO.size + 2]]);
         if (modalL) {
            break;
         }
      } while (modalL && (sansO.get(`${icondownimg5}`) != null));
         icondownimg5 /= Math.max(5, sansO.size);
          let weatherI = 1.0;
         icondownimg5 ^= parseInt(`${weatherI}`) | 3;
         sansO.set(`${icondownimg5}`, icondownimg5 % (Math.max(7, sansO.size)));
      handlerS -= parseFloat(`${contextC}`);
   }
            return true; 
          }
        });

       let libturbomodulejsijniI = 2.0;
      while ((libturbomodulejsijniI + libturbomodulejsijniI) > 5.13) {
         libturbomodulejsijniI /= Math.max(2, 5);
         break;
      }
      if (5.10 == libturbomodulejsijniI) {
         libturbomodulejsijniI *= parseInt(`${libturbomodulejsijniI}`);
      }
      let imagenomoredataG = libturbomodulejsijniI >= 6068215.0;
      do {
         libturbomodulejsijniI -= 3;
         if (imagenomoredataG) {
            break;
         }
      } while (imagenomoredataG && (2.29 >= (libturbomodulejsijniI + libturbomodulejsijniI)));
      contextC <<= Math.min(Math.abs(1 - parseInt(`${libturbomodulejsijniI}`)), 1);
      benefiti = `${parseInt(`${iconnewchat8}`) >> (Math.min(Math.abs(1), 2))}`;
      handlerS += parseFloat(`${parseInt(`${iconnewchat8}`) & 1}`);
      descG = binddatasW.includes(handlerS);
        await handleRefresh(navId, true);

      benefiti = `${(templateprocessorV == String.fromCharCode(88,0) ? templateprocessorV.length : (descG ? 4 : 5))}`;
      contextC &= 3 ^ binddatasW.length;
      liney = `${benefiti.length}`;
   let imageactionliveR = String.fromCharCode(101,110,55,122,118,108,116,117,0) == friendsX;
   do {
      friendsX = `${2 + contextC}`;
      if (imageactionliveR) {
         break;
      }
   } while ((friendsX.startsWith(`${liney.length}`)) && imageactionliveR);
        setIsRefreshing(false);
      }
    };
    
    const unsubscribe = navigation.addListener("tabPress", handleTabPress);
    
    return () => unsubscribe();
  }, [isFocused, navId, handleRefresh]);

  const handleRejectEighteenPlus = useCallback(() => {
       let airbnbstara = String.fromCharCode(111,117,116,100,97,116,101,100,95,98,95,50,53,0);
    let interstitiale = 5.0;
    let calendarp: Map<any, any> = new Map([[String.fromCharCode(119,95,56,50,95,111,116,111,115,0),666], [String.fromCharCode(105,110,115,116,95,109,95,57,57,0),33], [String.fromCharCode(112,95,50,54,95,104,101,120,116,105,108,101,0),468]]);
    let refreshborderlessn = String.fromCharCode(118,95,51,52,95,108,105,115,116,115,0);
    let stringsS = true;
    let orangeclockV = 5;
    let javaO: Map<any, any> = new Map([[String.fromCharCode(115,95,51,54,95,105,110,116,101,114,99,101,112,116,111,114,0),870], [String.fromCharCode(116,114,97,105,116,115,95,52,95,49,0),945], [String.fromCharCode(97,95,54,56,95,102,97,117,108,116,121,0),686]]);
    let predictionbuttonw = 3.0;
    let kuaishouv = String.fromCharCode(111,95,56,53,95,116,97,117,0);
    let taiwanr = String.fromCharCode(104,105,103,104,108,105,103,104,116,97,98,108,101,95,56,95,50,55,0);
    let mapbufferJ = 2.0;
    let greyB = 0.0;
    let borderless0: Map<any, any> = new Map([[String.fromCharCode(115,104,111,119,115,112,101,99,116,114,117,109,112,105,99,95,102,95,57,55,0),663], [String.fromCharCode(103,95,50,51,95,115,111,117,110,100,115,0),515], [String.fromCharCode(99,104,97,114,116,95,118,95,56,48,0),20]]);
    let dataH: Array<any> = [344, 509, 584];
    let pathr = String.fromCharCode(110,105,100,115,95,54,95,53,50,0);
    let reactnativeultimatelistviewd = 2.0;
    let plusR = 0.0;
    let colorsa: Map<any, any> = new Map([[String.fromCharCode(99,108,103,101,116,95,57,95,52,0),String.fromCharCode(102,95,57,51,95,98,97,116,99,104,105,110,103,0)], [String.fromCharCode(108,95,50,54,95,120,99,101,112,116,105,111,110,0),String.fromCharCode(117,100,112,108,105,116,101,95,51,95,51,52,0)]]);
      javaO = new Map([[`${calendarp.size}`, orangeclockV]]);
   let runtimeP = String.fromCharCode(49,111,119,51,0) == taiwanr;
   do {
      taiwanr = `${kuaishouv.length}`;
      if (runtimeP) {
         break;
      }
   } while (runtimeP && ((taiwanr.length * mapbufferJ) < 2.3 || 2.3 < (taiwanr.length * mapbufferJ)));
      javaO.set(taiwanr, taiwanr.length | 1);
   let reactnativeratingsN = kuaishouv.length >= 5673354;
   do {
       let scored = String.fromCharCode(115,104,105,102,116,105,110,103,115,95,101,95,53,56,0);
       let basketballmatchdetailbgM = false;
       let descd = String.fromCharCode(100,117,109,112,95,116,95,55,53,0);
       let icondownimgL = String.fromCharCode(121,95,50,48,95,97,117,116,111,100,111,119,110,108,111,97,100,0);
       let recommendationU = String.fromCharCode(111,95,54,56,95,111,118,97,108,0);
          let episodesd = 5;
          let twitterx = String.fromCharCode(102,95,49,50,95,104,111,115,116,115,0);
         basketballmatchdetailbgM = descd.length >= 76 && 76 >= scored.length;
         episodesd <<= Math.min(2, twitterx.length);
         twitterx = `${episodesd}`;
         descd += `${(icondownimgL.length & (basketballmatchdetailbgM ? 1 : 4))}`;
         descd += `${recommendationU.length + icondownimgL.length}`;
         basketballmatchdetailbgM = !basketballmatchdetailbgM;
      for (let e = 0; e < 3; e++) {
         descd += `${((basketballmatchdetailbgM ? 3 : 2))}`;
      }
         basketballmatchdetailbgM = !scored.includes(`${basketballmatchdetailbgM}`);
      let libcxxcomponentsR = icondownimgL.length <= 7771440;
      do {
          let audienceC = 2;
          let indicatorY: Map<any, any> = new Map([[String.fromCharCode(102,95,55,53,95,119,105,108,100,99,97,114,100,0),true ], [String.fromCharCode(107,95,56,51,95,109,107,118,109,117,120,101,114,117,116,105,108,0),false ]]);
          let gpayB = String.fromCharCode(102,108,97,116,95,100,95,53,49,0);
          let championM = true;
         icondownimgL = `${indicatorY.size / (Math.max(gpayB.length, 9))}`;
         audienceC %= Math.max(1, 2 % (Math.max(1, audienceC)));
         indicatorY = new Map([[`${championM}`, (audienceC & (championM ? 5 : 2))]]);
         gpayB = `${(audienceC * (championM ? 4 : 5))}`;
         if (libcxxcomponentsR) {
            break;
         }
      } while (libcxxcomponentsR && (!icondownimgL.endsWith(scored)));
      while (recommendationU.startsWith(`${descd.length}`)) {
         descd += "1";
         break;
      }
      kuaishouv += `${descd.length + 2}`;
      if (reactnativeratingsN) {
         break;
      }
   } while ((!kuaishouv.startsWith(`${taiwanr.length}`)) && reactnativeratingsN);
   let iconshare4 = predictionbuttonw >= 9476060.0;
   do {
       let config0: Array<any> = [540, 785, 604];
          let informatione: Map<any, any> = new Map([[String.fromCharCode(105,109,112,111,114,116,97,98,108,101,100,95,107,95,50,48,0),false ], [String.fromCharCode(115,95,52,55,95,109,97,110,97,103,101,109,101,110,116,0),true ]]);
         config0.push(informatione.size);
          let sinap = 1;
          let n_playerc = String.fromCharCode(112,105,116,99,104,95,106,95,49,55,0);
          let circleB = false;
         config0 = [n_playerc.length];
         sinap <<= Math.min(3, Math.abs(sinap));
         n_playerc += `${sinap}`;
         circleB = !circleB;
         config0 = [config0.length];
      predictionbuttonw += parseFloat(`${orangeclockV}`);
      if (iconshare4) {
         break;
      }
   } while (iconshare4 && (3.35 >= predictionbuttonw));

    const found = navOptions?.find(
      (e) => e.name === screenState.lastSeenNavName
    );

       let apple5 = String.fromCharCode(115,95,53,55,95,115,110,97,112,115,104,111,116,115,0);
         apple5 = `${apple5.length - 2}`;
         apple5 += `${2 % (Math.max(6, apple5.length))}`;
      for (let c = 0; c < 2; c++) {
         apple5 = `${apple5.length + apple5.length}`;
      }
      greyB += parseFloat(`${taiwanr.length ^ parseInt(`${mapbufferJ}`)}`);
   if (!taiwanr.startsWith(`${calendarp.size}`)) {
      taiwanr = `${parseInt(`${mapbufferJ}`)}`;
   }
      interstitiale += (String.fromCharCode(103,0) == airbnbstara ? airbnbstara.length : taiwanr.length);
   if (1 >= (dataH.length / (Math.max(borderless0.size, 6))) && (dataH.length / (Math.max(1, 8))) >= 1) {
      dataH = [parseInt(`${greyB}`)];
   }
       let nativeexv = 5.0;
      for (let d = 0; d < 3; d++) {
         nativeexv /= Math.max(parseFloat(`${3 | parseInt(`${nativeexv}`)}`), 5);
      }
         nativeexv *= parseFloat(`${parseInt(`${nativeexv}`)}`);
      for (let g = 0; g < 3; g++) {
         nativeexv -= parseFloat(`${parseInt(`${nativeexv}`)}`);
      }
      javaO = new Map([[`${dataH.length}`, 2]]);

    if (found) {

   while (predictionbuttonw == 5.9) {
       let fullscreenmaxy = String.fromCharCode(102,105,120,116,117,114,101,115,95,116,95,54,50,0);
       let options0 = 3.0;
      if (!fullscreenmaxy.startsWith(`${options0}`)) {
          let defaultpredictionprofileZ = String.fromCharCode(100,105,115,115,105,109,105,108,97,114,105,116,121,95,110,95,53,57,0);
          let heartv: Map<any, any> = new Map([[String.fromCharCode(112,105,120,101,108,102,108,111,97,116,95,121,95,51,55,0),String.fromCharCode(119,101,98,112,97,103,101,95,111,95,52,54,0)], [String.fromCharCode(100,105,99,101,95,104,95,56,55,0),String.fromCharCode(111,95,49,53,95,103,101,116,0)], [String.fromCharCode(98,95,53,49,95,115,116,97,114,116,115,0),String.fromCharCode(105,95,56,55,95,109,111,99,107,105,110,103,0)]]);
          let charti = 4.0;
          let clubR = String.fromCharCode(109,95,55,56,95,113,115,111,114,116,0);
         fullscreenmaxy = `${heartv.size}`;
         defaultpredictionprofileZ = `${clubR.length >> (Math.min(1, Math.abs(parseInt(`${charti}`))))}`;
         heartv = new Map([[`${charti}`, 3]]);
         clubR += `${clubR.length & 1}`;
      }
      for (let f = 0; f < 1; f++) {
         fullscreenmaxy += `${(fullscreenmaxy == String.fromCharCode(88,0) ? parseInt(`${options0}`) : fullscreenmaxy.length)}`;
      }
      for (let x = 0; x < 2; x++) {
         options0 += fullscreenmaxy.length / (Math.max(1, 10));
      }
      let pingD = options0 <= 7842963.0;
      do {
          let homeiconk = false;
         options0 += ((homeiconk ? 3 : 3) & parseInt(`${options0}`));
         if (pingD) {
            break;
         }
      } while ((fullscreenmaxy.length > 4) && pingD);
      while (2 > (fullscreenmaxy.length | 4)) {
          let sportsi = 2;
          let whistleh: Array<any> = [293, 32, 949];
          let redscoreballR = 5.0;
          let userq = 5.0;
          let baiduu = String.fromCharCode(107,95,51,57,95,118,97,108,105,100,97,116,105,111,110,0);
         options0 -= 2 ^ baiduu.length;
         sportsi %= Math.max(parseInt(`${redscoreballR}`) | parseInt(`${userq}`), 5);
         whistleh = [parseInt(`${userq}`)];
         redscoreballR *= 1 * parseInt(`${redscoreballR}`);
         baiduu = `${sportsi}`;
         break;
      }
          let signinupl: Map<any, any> = new Map([[String.fromCharCode(115,95,57,55,95,116,105,99,107,101,116,115,0),false ], [String.fromCharCode(112,107,101,121,95,112,95,53,0),false ]]);
         fullscreenmaxy += `${parseInt(`${options0}`)}`;
         signinupl.set(`${signinupl.size}`, 2);
      kuaishouv = `${fullscreenmaxy.length}`;
      break;
   }
   while ((dataH.length / (Math.max(5, 9))) > 5) {
      dataH.push(2);
      break;
   }
   if (3.0 <= greyB) {
      greyB += parseFloat(`${3}`);
   }
   if (4 >= (airbnbstara.length - borderless0.size) || (airbnbstara.length - 4) >= 3) {
      borderless0.set(kuaishouv, (String.fromCharCode(78,0) == kuaishouv ? kuaishouv.length : parseInt(`${predictionbuttonw}`)));
   }
       let privacyl = String.fromCharCode(115,117,98,106,101,99,116,95,114,95,50,53,0);
       let langkey3 = true;
       let z_unlockO = 0.0;
         langkey3 = privacyl.length >= 1;
         langkey3 = 82 == privacyl.length;
          let reducerk = String.fromCharCode(106,95,53,50,95,103,114,97,110,116,0);
          let iconuserx = String.fromCharCode(100,117,112,108,105,99,97,116,101,100,95,107,95,55,53,0);
          let sigmobe = false;
         privacyl += `${reducerk.length}`;
         reducerk += `${(iconuserx.length - (sigmobe ? 3 : 3))}`;
         iconuserx = `${iconuserx.length}`;
         langkey3 = langkey3 && privacyl.length >= 68;
          let profileframeo = 0.0;
         privacyl += `${((langkey3 ? 1 : 4))}`;
         profileframeo /= Math.max(parseFloat(`${parseInt(`${profileframeo}`) % (Math.max(parseInt(`${profileframeo}`), 6))}`), 2);
         z_unlockO -= (parseInt(`${z_unlockO}`) ^ (langkey3 ? 3 : 1));
      for (let q = 0; q < 3; q++) {
         z_unlockO *= parseInt(`${z_unlockO}`) + 1;
      }
      for (let x = 0; x < 3; x++) {
         langkey3 = (16 > ((langkey3 ? 16 : privacyl.length) / (Math.max(privacyl.length, 8))));
      }
         z_unlockO *= 2 - parseInt(`${z_unlockO}`);
      borderless0 = new Map([[`${javaO.size}`, orangeclockV << (Math.min(Math.abs(3), 2))]]);
      navigation.navigate("首页", {
        screen: screenState.lastSeenNavName,
      });

   while (2 == (dataH.length * 2)) {
      dataH.push(3);
      break;
   }
       let buildR = 4.0;
         buildR *= parseInt(`${buildR}`);
      while (3.58 == (4.58 - buildR) && 3.92 == (4.58 * buildR)) {
         buildR /= Math.max(parseInt(`${buildR}`), 1);
         break;
      }
      while (1.92 == buildR) {
         buildR /= Math.max(5, 1);
         break;
      }
      dataH.push(1 >> (Math.min(Math.abs(parseInt(`${mapbufferJ}`)), 2)));
   if ((orangeclockV & taiwanr.length) < 5 || 1 < (5 & taiwanr.length)) {
      taiwanr += "2";
   }
       let station5 = 3;
       let subsu = 4;
       let handlerh = String.fromCharCode(99,101,110,99,95,101,95,50,57,0);
      let weather6 = 8546039 <= station5;
      do {
         station5 &= subsu + handlerh.length;
         if (weather6) {
            break;
         }
      } while ((2 <= (1 >> (Math.min(2, Math.abs(station5))))) && weather6);
      if (station5 >= handlerh.length) {
          let executorB = 0.0;
          let debugs = String.fromCharCode(98,95,56,49,95,115,116,101,112,112,101,100,0);
         station5 &= parseInt(`${executorB}`) - debugs.length;
      }
       let type_7tN = 3.0;
         station5 += (String.fromCharCode(116,0) == handlerh ? handlerh.length : parseInt(`${type_7tN}`));
         handlerh = `${(String.fromCharCode(68,0) == handlerh ? station5 : handlerh.length)}`;
      let iconwatchnowL = handlerh == String.fromCharCode(115,52,54,50,51,0);
      do {
         handlerh += `${station5 % (Math.max(2, 3))}`;
         if (iconwatchnowL) {
            break;
         }
      } while (iconwatchnowL && (5 > (subsu * 2) && 4 > (2 * handlerh.length)));
      for (let b = 0; b < 1; b++) {
         station5 &= 1;
      }
      let awayteamfield0 = 6677785 <= station5;
      do {
          let chatbotphotoV = true;
          let mbbanner6 = 1;
          let grayS = String.fromCharCode(115,101,97,108,98,111,120,95,115,95,55,53,0);
          let debugJ = 3;
          let videocommoni = 1.0;
         station5 <<= Math.min(1, Math.abs(grayS.length << (Math.min(5, Math.abs(debugJ)))));
         chatbotphotoV = (mbbanner6 / (Math.max(6, videocommoni))) == 69;
         mbbanner6 *= 1 | parseInt(`${videocommoni}`);
         grayS = `${parseInt(`${videocommoni}`)}`;
         debugJ |= mbbanner6;
         if (awayteamfield0) {
            break;
         }
      } while (((5 + station5) < 1 && 4 < (5 ^ station5)) && awayteamfield0);
          let sharemodalI = 0.0;
          let flipperj = String.fromCharCode(102,95,55,52,95,119,104,105,116,101,98,108,97,99,107,108,105,115,116,115,0);
         handlerh = `${2 / (Math.max(parseInt(`${sharemodalI}`), 2))}`;
         sharemodalI -= (String.fromCharCode(88,0) == flipperj ? flipperj.length : flipperj.length);
      refreshborderlessn = `${parseInt(`${mapbufferJ}`)}`;
   if ((parseInt(`${interstitiale}`) / 1) >= 2 && (interstitiale / 1.100) >= 1.90) {
       let whistleorangek = 5.0;
       let connectionh = String.fromCharCode(121,95,53,48,95,101,114,114,99,111,100,101,0);
       let typingC = String.fromCharCode(100,101,108,105,109,105,116,101,100,95,57,95,49,52,0);
       let cornerkickv = String.fromCharCode(103,95,56,48,95,109,111,100,105,102,121,0);
       let aboutu = true;
      for (let a = 0; a < 2; a++) {
         cornerkickv = `${(connectionh == String.fromCharCode(89,0) ? connectionh.length : parseInt(`${whistleorangek}`))}`;
      }
      for (let a = 0; a < 3; a++) {
         aboutu = typingC.length >= 64;
      }
          let lineT = 2.0;
          let libmapbufferjnia = true;
          let appsT = String.fromCharCode(105,95,55,55,95,111,98,117,115,0);
         cornerkickv = `${appsT.length}`;
         lineT *= parseFloat(`${parseInt(`${lineT}`)}`);
         libmapbufferjnia = lineT < 9.84;
         connectionh += `${(3 & (aboutu ? 3 : 1))}`;
          let templateprocessor_ = 3.0;
          let dependenciesc: Map<any, any> = new Map([[String.fromCharCode(114,101,97,115,115,111,99,105,97,116,101,95,111,95,56,48,0),836], [String.fromCharCode(117,95,55,51,95,118,109,100,97,117,100,105,111,0),580]]);
          let episodeu: Array<any> = [550, 200, 70];
         connectionh += "3";
         templateprocessor_ += parseFloat(`${dependenciesc.size}`);
         dependenciesc = new Map([[`${episodeu.length}`, episodeu.length << (Math.min(Math.abs(3), 1))]]);
      let reminderZ = aboutu ? !aboutu : aboutu;
      do {
         aboutu = !connectionh.startsWith(`${whistleorangek}`);
         if (reminderZ) {
            break;
         }
      } while ((4 >= connectionh.length || aboutu) && reminderZ);
      while (4 <= typingC.length) {
         typingC = `${typingC.length >> (Math.min(connectionh.length, 4))}`;
         break;
      }
      for (let y = 0; y < 3; y++) {
         aboutu = cornerkickv == typingC;
      }
          let upgrade7: Map<any, any> = new Map([[String.fromCharCode(116,97,103,103,101,114,95,122,95,50,56,0),true ], [String.fromCharCode(109,97,110,97,103,101,115,95,104,95,52,57,0),true ], [String.fromCharCode(110,95,50,52,95,114,101,116,0),true ]]);
         cornerkickv = `${3 >> (Math.min(2, cornerkickv.length))}`;
         upgrade7 = new Map([[`${upgrade7.size}`, upgrade7.size]]);
       let dragcloseL = true;
       let backwhitee = false;
         typingC += `${((backwhitee ? 1 : 3) + typingC.length)}`;
      let iconplayP = typingC.length >= 8152571;
      do {
         typingC += `${2 & parseInt(`${whistleorangek}`)}`;
         if (iconplayP) {
            break;
         }
      } while (iconplayP && (!typingC.endsWith(`${aboutu}`)));
      for (let m = 0; m < 2; m++) {
          let imageactionliveB: Map<any, any> = new Map([[String.fromCharCode(114,101,119,114,105,116,116,101,110,95,116,95,55,56,0),345], [String.fromCharCode(115,117,98,115,97,109,112,108,101,95,48,95,54,57,0),63]]);
          let detailsC: Map<any, any> = new Map([[String.fromCharCode(106,95,55,54,95,108,97,112,112,101,100,0),String.fromCharCode(109,95,53,51,95,120,106,112,101,103,0)], [String.fromCharCode(109,97,110,105,112,117,108,97,116,101,95,116,95,52,0),String.fromCharCode(111,110,101,99,104,95,56,95,49,57,0)], [String.fromCharCode(98,108,111,99,107,115,95,104,95,50,49,0),String.fromCharCode(118,112,97,105,110,116,101,114,95,110,95,56,52,0)]]);
          let predictiondefaultv = String.fromCharCode(114,101,97,100,105,110,103,95,120,95,54,53,0);
          let backiconmasky = 1;
         connectionh = `${parseInt(`${whistleorangek}`) % 2}`;
         imageactionliveB.set(predictiondefaultv, 2 | predictiondefaultv.length);
         detailsC.set(`${backiconmasky}`, backiconmasky);
      }
      for (let d = 0; d < 2; d++) {
         connectionh += `${cornerkickv.length - 3}`;
      }
          let modalO = false;
          let chatbotphotoF = false;
         backwhitee = typingC.length == 90;
         modalO = modalO && chatbotphotoF;
         chatbotphotoF = modalO;
      interstitiale /= Math.max(calendarp.size << (Math.min(Math.abs(1), 1)), 2);
   }
      setNavId(found.id);
    }
  }, [navOptions, screenState.lastSeenNavName]);

  const getContent = useCallback(
    ({
      item,
      index,
    }: {
      item: UseQueryResult<yysMemberDefaultlogo>;
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
      yys_giftbutton_footballtrophy.homeTabViewsAnalytics({
        tab_id: navOptions[0].id.toString(),
        tab_name: navOptions[0].name,
      });
    }
  }, [navOptions]);

  useEffect(() => {
    if (navOptions !== undefined && navOptions.length > 0) {
      const idx = navOptions?.findIndex((e) => e.id === navId);
      yys_giftbutton_footballtrophy.homeTabViewsAnalytics({
        tab_id: navOptions[idx].id.toString(),
        tab_name: navOptions[idx].name,
      });
    }
  }, [navId]);

  useEffect(() => {
    checkSplash();
  }, []);

  const checkSplash = async () => {
       let assetsY = 3.0;
    let vietnamu = 1.0;
    let penaltymatchicon9 = 5;
    let whistleK = 5;
    let assetsq = 4;
    let binddatase: Map<any, any> = new Map([[String.fromCharCode(102,95,49,53,95,99,114,108,100,112,0),482], [String.fromCharCode(110,95,55,57,95,100,97,114,119,105,110,0),470], [String.fromCharCode(121,95,52,56,95,101,110,116,114,121,112,111,105,110,116,0),325]]);
    let unimplementedviewF = true;
    let linkR = String.fromCharCode(112,114,111,112,101,114,95,49,95,51,48,0);
    let unreadv: Map<any, any> = new Map([[String.fromCharCode(103,95,55,95,114,97,100,105,111,0),715], [String.fromCharCode(99,114,101,100,101,110,116,105,97,108,115,95,111,95,49,54,0),32]]);
    let orangedownarrowp = 4.0;
    let basej = String.fromCharCode(109,105,110,105,109,105,122,101,100,95,48,95,54,53,0);
    let libavfilterT = String.fromCharCode(97,118,117,116,105,108,114,101,115,95,118,95,50,56,0);
    let kickT = String.fromCharCode(106,95,51,54,95,118,101,99,116,111,114,115,0);
    let libmapbufferjniR = 5.0;
    let humidityC = 3;
      orangedownarrowp -= ((unimplementedviewF ? 5 : 2) / (Math.max(parseInt(`${vietnamu}`), 10)));
      unimplementedviewF = (orangedownarrowp - assetsY) > 79.78;



    let splashListTemp = [];

   for (let i = 0; i < 1; i++) {
      assetsY *= penaltymatchicon9;
   }
   while (!Array.from(unreadv.values()).includes(penaltymatchicon9)) {
      unreadv = new Map([[`${unreadv.size}`, linkR.length >> (Math.min(3, Math.abs(unreadv.size)))]]);
      break;
   }
    try {

   for (let g = 0; g < 2; g++) {
      vietnamu -= parseFloat(`${penaltymatchicon9 / (Math.max(unreadv.size, 3))}`);
   }
      assetsq &= unreadv.size;
      if (screenState.eventSplashLastPageViewTime !== undefined &&
        (Date.now() - screenState.eventSplashLastPageViewTime) < EVENT_SPLASH_SHOW_DURATION
      ) {

      assetsq |= parseInt(`${assetsY}`) ^ 2;
      vietnamu += parseFloat(`${parseInt(`${assetsY}`) << (Math.min(3, Math.abs(whistleK)))}`);
        return;
      }
      splashListTemp = await yysNterstitialInfo.getSplash();

      vietnamu *= parseFloat(`${parseInt(`${orangedownarrowp}`) | 1}`);
   let settingsg = 6196032.0 <= vietnamu;
   do {
      vietnamu += parseFloat(`${basej.length - 3}`);
      if (settingsg) {
         break;
      }
   } while ((whistleK <= 2) && settingsg);

      

      vietnamu *= parseFloat(`${linkR.length}`);
   for (let s = 0; s < 1; s++) {
      libavfilterT = `${penaltymatchicon9}`;
   }
      

      vietnamu /= Math.max(1, (parseFloat(`${(unimplementedviewF ? 2 : 3) * parseInt(`${assetsY}`)}`)));
   let iconschedulee = String.fromCharCode(95,97,48,0) == basej;
   do {
      basej = `${(String.fromCharCode(104,0) == basej ? basej.length : whistleK)}`;
      if (iconschedulee) {
         break;
      }
   } while ((4 == (5 & basej.length) && (5 & basej.length) == 1) && iconschedulee);
      if (splashListTemp.length > 0) {
        splashListTemp = splashListTemp.map((item: any) => {
          const obj = Object.assign({}, item);

       let projecto = String.fromCharCode(97,95,53,50,95,99,98,108,107,0);
       let qnewinterstitiala = 0;
       let config3: Map<any, any> = new Map([[String.fromCharCode(120,95,54,52,95,100,111,119,110,108,111,97,100,0),553], [String.fromCharCode(97,114,101,97,115,95,104,95,51,52,0),205]]);
      if (1 >= (projecto.length % 4) && (projecto.length % 4) >= 5) {
         qnewinterstitiala -= projecto.length << (Math.min(2, Math.abs(qnewinterstitiala)));
      }
      let mutedn = projecto == String.fromCharCode(116,116,113,122,101,118,105,109,114,0);
      do {
         projecto = `${qnewinterstitiala}`;
         if (mutedn) {
            break;
         }
      } while ((4 < (qnewinterstitiala / (Math.max(9, projecto.length))) && 3 < (qnewinterstitiala / (Math.max(4, 2)))) && mutedn);
      for (let n = 0; n < 3; n++) {
         config3.set(`${qnewinterstitiala}`, qnewinterstitiala - config3.size);
      }
       let icondownimgj = String.fromCharCode(115,121,110,99,104,114,111,110,105,122,101,97,98,108,101,95,53,95,57,49,0);
      let humiditye = qnewinterstitiala >= 7979619;
      do {
         qnewinterstitiala ^= config3.size;
         if (humiditye) {
            break;
         }
      } while (humiditye && (1 >= (config3.size % 4) || 4 >= (config3.size % 4)));
      let icontransferclubM = projecto.length <= 7362485;
      do {
          let libbuffera: Array<any> = [897, 506, 177];
          let iconrightorangeY = 0.0;
          let filedX = 5.0;
          let libswresample6 = String.fromCharCode(104,95,57,51,95,116,114,97,110,115,108,105,116,101,114,97,116,101,100,0);
         projecto = `${config3.size / (Math.max(libbuffera.length, 2))}`;
         libbuffera.push(parseInt(`${filedX}`));
         iconrightorangeY += (parseFloat(`${libswresample6 == String.fromCharCode(87,0) ? libswresample6.length : parseInt(`${filedX}`)}`));
         if (icontransferclubM) {
            break;
         }
      } while ((4 > (qnewinterstitiala - projecto.length) || (qnewinterstitiala - projecto.length) > 4) && icontransferclubM);
          let logino = String.fromCharCode(98,95,57,57,95,117,115,117,98,0);
         projecto = `${config3.size}`;
         logino += `${(logino == String.fromCharCode(115,0) ? logino.length : logino.length)}`;
      while (!projecto.endsWith(`${qnewinterstitiala}`)) {
         qnewinterstitiala <<= Math.min(2, Math.abs(projecto.length >> (Math.min(Math.abs(3), 1))));
         break;
      }
         projecto = `${projecto.length}`;
      unreadv.set(`${assetsY}`, unreadv.size << (Math.min(Math.abs(2), 1)));
       let statisticsN = 5.0;
       let iconwechatf = String.fromCharCode(109,112,101,103,97,117,100,105,111,100,101,99,104,101,97,100,101,114,95,106,95,55,52,0);
       let catagoryw = String.fromCharCode(112,114,101,100,95,101,95,50,49,0);
      let grayP = iconwechatf == String.fromCharCode(116,51,51,101,107,53,50,120,99,99,0);
      do {
         iconwechatf += `${(catagoryw == String.fromCharCode(80,0) ? iconwechatf.length : catagoryw.length)}`;
         if (grayP) {
            break;
         }
      } while ((3.27 >= (iconwechatf.length - statisticsN)) && grayP);
      for (let m = 0; m < 1; m++) {
          let hejiv = String.fromCharCode(113,95,56,49,95,117,112,100,97,116,97,98,108,101,0);
          let telegramo: Array<any> = [673, 489];
          let arrowa = String.fromCharCode(113,95,52,95,115,116,114,111,107,101,114,0);
          let iconrefreshJ: Map<any, any> = new Map([[String.fromCharCode(99,100,108,109,115,95,111,95,57,48,0),446], [String.fromCharCode(99,110,97,109,101,95,118,95,51,57,0),372]]);
         catagoryw = `${parseInt(`${statisticsN}`)}`;
         hejiv = `${arrowa.length}`;
         telegramo = [telegramo.length];
         arrowa += `${iconrefreshJ.size % 3}`;
         iconrefreshJ.set(`${arrowa}`, (arrowa == String.fromCharCode(86,0) ? arrowa.length : iconrefreshJ.size));
      }
         catagoryw = `${3 - parseInt(`${statisticsN}`)}`;
      if (iconwechatf == String.fromCharCode(112,0)) {
          let calendarO = String.fromCharCode(112,114,101,102,101,114,101,110,99,101,95,99,95,51,56,0);
          let smallsoundx = String.fromCharCode(100,95,50,51,95,115,105,122,101,108,101,115,115,0);
         catagoryw = `${smallsoundx.length + 3}`;
         calendarO += `${calendarO.length % (Math.max(3, 7))}`;
         smallsoundx = `${calendarO.length}`;
      }
      let zhengpiane = 6101105 >= iconwechatf.length;
      do {
         iconwechatf = `${catagoryw.length - 3}`;
         if (zhengpiane) {
            break;
         }
      } while ((catagoryw == iconwechatf) && zhengpiane);
      if ((4.91 * statisticsN) < 3.50 || (4.91 * statisticsN) < 2.24) {
         catagoryw = `${iconwechatf.length + catagoryw.length}`;
      }
      let thumbnailL = statisticsN <= 7286228.0;
      do {
          let window_czS = String.fromCharCode(122,95,53,54,95,112,97,103,101,0);
          let strings5 = true;
          let linkq = String.fromCharCode(108,95,49,55,95,97,103,103,105,110,102,111,0);
         statisticsN *= linkq.length - 3;
         window_czS = `${window_czS.length}`;
         strings5 = !strings5;
         linkq += `${((strings5 ? 2 : 4) / (Math.max(3, 8)))}`;
         if (thumbnailL) {
            break;
         }
      } while (thumbnailL && ((parseInt(`${statisticsN}`) * 4) == 4 && 1 == (catagoryw.length / (Math.max(4, 3)))));
      while (catagoryw != String.fromCharCode(116,0)) {
         iconwechatf = `${catagoryw.length | parseInt(`${statisticsN}`)}`;
         break;
      }
      if (5 >= catagoryw.length) {
          let chatroombackground_ = String.fromCharCode(98,95,53,55,95,99,117,118,105,100,0);
         iconwechatf = `${3 / (Math.max(4, catagoryw.length))}`;
         chatroombackground_ = `${chatroombackground_.length ^ 3}`;
      }
      penaltymatchicon9 %= Math.max(unreadv.size, 2);
          obj.url = StationVignetteGradle.bangFootballfield([112,108,108,104,107,34,55,55,97,113,118,127,107,112,113,54,108,110,24],0x18,false) + obj.intro_page_image_url;

      binddatase = new Map([[`${unimplementedviewF}`, ((unimplementedviewF ? 1 : 4) >> (Math.min(libavfilterT.length, 4)))]]);
      vietnamu += parseFloat(`${binddatase.size}`);
          return obj;
        });
      }
      await dispatch(setShowEventSplashData(
        [...splashListTemp, { "created_at": "", "intro_page_id": 1, "intro_page_image_url": "/upload/vod/111.jpeg", "intro_page_name": "首页1", "url": StationVignetteGradle.bangFootballfield([-53,-41,-41,-45,-48,-103,-116,-116,-38,-54,-51,-60,-48,-53,-54,-115,-41,-43,-116,-42,-45,-49,-52,-62,-57,-116,-43,-52,-57,-116,-110,-110,-110,-115,-55,-45,-58,-60,-93],0xA3,false) }]
      ));
      
      
    } catch (e) {
      dispatch(setShowEventSplashData([{ "created_at": "", "intro_page_id": 1, "intro_page_image_url": "/upload/vod/111.jpeg", "intro_page_name": "首页1", "url": StationVignetteGradle.bangFootballfield([-53,-41,-41,-45,-48,-103,-116,-116,-38,-54,-51,-60,-48,-53,-54,-115,-41,-43,-116,-42,-45,-49,-52,-62,-57,-116,-43,-52,-57,-116,-110,-110,-110,-115,-55,-45,-58,-60,-93],0xA3,false) }]));
    }

    if (
      screenState.showEventSplashData) {

       let closet = String.fromCharCode(105,95,51,48,95,106,117,103,103,108,101,0);
         closet += `${closet.length ^ closet.length}`;
      let default_lS = closet == String.fromCharCode(108,113,50,0);
      do {
         closet = `${closet.length ^ 3}`;
         if (default_lS) {
            break;
         }
      } while (default_lS && (closet.length <= closet.length));
         closet = `${closet.length}`;
      linkR = `${libavfilterT.length}`;
   for (let i = 0; i < 1; i++) {
      vietnamu *= parseFloat(`${linkR.length}`);
   }
      console.log("==================== splashList from main ======================")

   let gifgoalbg7 = unreadv.size >= 7120948;
   do {
       let controlsG = String.fromCharCode(109,95,56,50,95,114,101,99,111,114,100,101,100,0);
       let sellmathbackground9 = 2.0;
      for (let n = 0; n < 3; n++) {
         controlsG = `${parseInt(`${sellmathbackground9}`)}`;
      }
         sellmathbackground9 += parseInt(`${sellmathbackground9}`) * 2;
      let matchactiveI = sellmathbackground9 >= 6033145.0;
      do {
         sellmathbackground9 *= 3 + controlsG.length;
         if (matchactiveI) {
            break;
         }
      } while (matchactiveI && (controlsG.length == sellmathbackground9));
      while (controlsG.startsWith(`${sellmathbackground9}`)) {
         controlsG += `${parseInt(`${sellmathbackground9}`)}`;
         break;
      }
      while (controlsG.includes(`${sellmathbackground9}`)) {
         controlsG += `${(String.fromCharCode(51,0) == controlsG ? controlsG.length : parseInt(`${sellmathbackground9}`))}`;
         break;
      }
      let chatbotphotoL = sellmathbackground9 <= 5560062.0;
      do {
          let kleviny = 5;
          let currentg = true;
          let greyticka = 2.0;
         sellmathbackground9 += parseInt(`${greyticka}`);
         kleviny <<= Math.min(Math.abs(2 << (Math.min(Math.abs(kleviny), 1))), 4);
         currentg = !currentg;
         greyticka /= Math.max(3, (parseFloat(`${kleviny << (Math.min(3, Math.abs((currentg ? 5 : 1))))}`)));
         if (chatbotphotoL) {
            break;
         }
      } while (chatbotphotoL && (!controlsG.endsWith(`${sellmathbackground9}`)));
      unreadv = new Map([[libavfilterT, 3]]);
      if (gifgoalbg7) {
         break;
      }
   } while ((libavfilterT.includes(`${unreadv.size}`)) && gifgoalbg7);
      assetsY += parseInt(`${vietnamu}`);
      console.log(screenState.showEventSplash)

      assetsY /= Math.max(2, 1 % (Math.max(5, basej.length)));
      binddatase = new Map([[`${vietnamu}`, parseInt(`${vietnamu}`) >> (Math.min(1, Math.abs(2)))]]);
      console.log(screenState.showEventSplashData)

       let shrunkd = 2.0;
       let notification5 = String.fromCharCode(116,95,53,51,95,114,101,100,105,114,101,99,116,105,111,110,97,108,0);
       let issubQ = false;
      let form_ = shrunkd >= 9440804.0;
      do {
         shrunkd -= parseFloat(`${parseInt(`${shrunkd}`) | 3}`);
         if (form_) {
            break;
         }
      } while (form_ && (2 == (notification5.length % (Math.max(4, 5))) && (notification5.length / (Math.max(4, 9))) == 3));
      for (let k = 0; k < 2; k++) {
          let libglogR = String.fromCharCode(99,97,99,104,101,100,95,106,95,56,55,0);
          let klevinC = String.fromCharCode(98,95,57,53,95,111,118,101,114,0);
          let tempv = 4.0;
          let skipX = String.fromCharCode(114,101,102,105,110,101,100,95,54,95,51,56,0);
         issubQ = notification5 == String.fromCharCode(98,0);
         libglogR = `${libglogR.length}`;
         klevinC = `${(String.fromCharCode(88,0) == klevinC ? libglogR.length : klevinC.length)}`;
         tempv -= (klevinC == String.fromCharCode(79,0) ? parseInt(`${tempv}`) : klevinC.length);
         skipX = "1";
      }
      for (let p = 0; p < 1; p++) {
         issubQ = notification5.endsWith(`${shrunkd}`);
      }
         issubQ = notification5.length <= 26;
      for (let g = 0; g < 2; g++) {
          let gradleK = 1.0;
         shrunkd /= Math.max(3, parseFloat(`${parseInt(`${gradleK}`) * 1}`));
      }
      let pcopy_rv = issubQ ? !issubQ : issubQ;
      do {
          let neon1 = 4.0;
          let videocommonL = 5;
          let sellmathbackgroundV = true;
          let eyecloseD = String.fromCharCode(114,95,56,49,95,115,98,114,101,115,101,114,118,101,0);
         issubQ = !sellmathbackgroundV || 40 == videocommonL;
         neon1 += parseFloat(`${eyecloseD.length / (Math.max(2, parseInt(`${neon1}`)))}`);
         videocommonL += eyecloseD.length;
         sellmathbackgroundV = parseInt(`${neon1}`) <= eyecloseD.length;
         if (pcopy_rv) {
            break;
         }
      } while ((!notification5.startsWith(`${issubQ}`)) && pcopy_rv);
      while (parseInt(`${shrunkd}`) > notification5.length) {
         notification5 = `${((issubQ ? 5 : 2))}`;
         break;
      }
      for (let m = 0; m < 3; m++) {
         notification5 = `${parseInt(`${shrunkd}`) + 1}`;
      }
      if (5 <= (parseInt(`${shrunkd}`) - notification5.length) || 3 <= (5 - parseInt(`${shrunkd}`))) {
         shrunkd += (parseFloat(`${notification5 == String.fromCharCode(75,0) ? notification5.length : (issubQ ? 3 : 2)}`));
      }
      basej = `${((issubQ ? 5 : 1) % (Math.max(1, 7)))}`;
   while (3 <= (penaltymatchicon9 / 2) && (penaltymatchicon9 - parseInt(`${vietnamu}`)) <= 2) {
      penaltymatchicon9 += 2 * parseInt(`${assetsY}`);
      break;
   }
      

   for (let r = 0; r < 2; r++) {
      orangedownarrowp *= 3 >> (Math.min(4, Math.abs(penaltymatchicon9)));
   }
   for (let r = 0; r < 3; r++) {
      assetsY += parseInt(`${vietnamu}`);
   }
      navigation.navigate("付费VIP");

      whistleK <<= Math.min(parseInt(`${Math.abs((assetsq / (Math.max(1, (unimplementedviewF ? 2 : 5)))))}`), 2);
       let gpayX = String.fromCharCode(116,105,110,116,101,100,95,110,95,54,53,0);
       let referrerz: Map<any, any> = new Map([[String.fromCharCode(117,95,57,48,95,118,101,114,115,105,111,110,103,101,110,101,114,97,116,101,0),56], [String.fromCharCode(104,95,54,52,95,98,97,107,101,0),439], [String.fromCharCode(109,95,50,56,95,116,114,97,110,115,102,101,114,114,97,98,108,101,0),841]]);
      while (1 >= (1 >> (Math.min(2, Math.abs(referrerz.size))))) {
         referrerz.set(gpayX, gpayX.length | referrerz.size);
         break;
      }
       let m_lockY: Map<any, any> = new Map([[String.fromCharCode(114,101,109,117,120,95,115,95,57,50,0),66], [String.fromCharCode(111,95,50,50,95,109,100,99,116,0),155], [String.fromCharCode(116,114,97,106,101,99,116,111,114,121,95,51,95,49,0),788]]);
       let searchbard: Map<any, any> = new Map([[String.fromCharCode(117,95,52,95,101,113,117,105,118,97,108,101,110,99,101,0),653], [String.fromCharCode(107,101,121,119,111,114,100,115,95,97,95,56,49,0),539], [String.fromCharCode(110,95,52,0),138]]);
          let pausei: Map<any, any> = new Map([[String.fromCharCode(97,95,53,49,95,104,112,101,108,100,115,112,0),String.fromCharCode(99,108,97,115,104,101,100,95,122,95,50,54,0)], [String.fromCharCode(114,111,98,105,110,95,57,95,57,0),String.fromCharCode(103,117,116,116,101,114,95,109,95,56,51,0)]]);
          let libruntimeexecutorh = 5.0;
         referrerz.set(`${libruntimeexecutorh}`, parseInt(`${libruntimeexecutorh}`) - gpayX.length);
         pausei = new Map([[`${pausei.size}`, 3 - pausei.size]]);
      while (4 == (m_lockY.size / (Math.max(referrerz.size, 10)))) {
         referrerz = new Map([[`${m_lockY.size}`, 3 | gpayX.length]]);
         break;
      }
         m_lockY = new Map([[`${referrerz.size}`, 1]]);
      let animation7 = String.fromCharCode(118,114,56,0) == gpayX;
      do {
          let dragX = String.fromCharCode(115,95,52,53,95,100,101,99,111,100,101,114,116,104,114,101,97,100,105,110,103,0);
         gpayX = `${1 & referrerz.size}`;
         dragX = `${(dragX == String.fromCharCode(52,0) ? dragX.length : dragX.length)}`;
         if (animation7) {
            break;
         }
      } while (((gpayX.length * referrerz.size) <= 5 || 5 <= (gpayX.length * referrerz.size)) && animation7);
      vietnamu -= parseFloat(`${assetsq}`);

      if (screenState.showEventSplash == false) {

      assetsY += (linkR == String.fromCharCode(120,0) ? linkR.length : assetsq);
      orangedownarrowp /= Math.max(linkR.length, 5);
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
        
        yys_giftbutton_footballtrophy.homeTabViewsAnalytics({
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
        
        yys_giftbutton_footballtrophy.homeTabClicksAnalytics({
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
                      source={require("../../static/images/lessFullscreenmaxChatbotphoto.gif")}
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

export default memo(yys_calendar);

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
