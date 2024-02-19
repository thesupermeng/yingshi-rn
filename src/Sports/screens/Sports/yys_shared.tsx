import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import ScreenContainer from "../../../components/container/yys_matches";
import MainHeader from "../../../components/header/yys_config_penaltygoal_header";
import { useFocusEffect, useTheme } from "@react-navigation/native";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import {
  yysArrowup,
} from "@type";
import VodPlaylist from "../../../components/playlist/yys_watchnowbg_interstitial";
import {
  BottomTabScreenProps,
  useBottomTabBarHeight,
} from "@react-navigation/bottom-tabs";
import { API_DOMAIN, MATCH_API_DOMAIN } from "@utility";
import Animated from "react-native-reanimated";
import FastImage from "react-native-fast-image";
import yysDisconnectedlogoSwitch from "../../middleware/yys_manifest";
import { Url } from "../../middleware/yys_login";
import { formatMatchDate } from "../../utility/utils";
import { yysFavoriteNetwork } from "../../types/yys_history_plash";
import MatchSchedule from "../../components/matchSchedule/yys_friends_leaguedetailsbg";
import MatchScheduleNav from "../../components/matchSchedule/yys_analytics_tumbnail_view";
import NoConnection from "./../../../components/common/yys_librrc_zhengpian";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";

import { useAppSelector, useSelector } from "@hooks";
import { yysIconclosewhiteBaiduads } from "@redux";
import { useDispatch } from "react-redux";
import BecomeVipOverlay from "../../../components/modal/yys_executor";
import { yysDownloadingCombined } from "@redux";
import yys_giftbutton_footballtrophy from "../../../../Umeng/yys_giftbutton_footballtrophy";
import { yysIconplaySuggestion } from "@redux";
import { yysIconstar } from "@models";

interface yysBgvipsportUimanager {
  has_submenu: boolean;
  ids: Array<number>;
  type: string;
}

export default ({ navigation }: BottomTabScreenProps<any>) => {
  const { textVariants, colors, spacing } = useTheme();
  const [isOffline, setIsOffline] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const dispatch = useDispatch();
  const [showBecomeVIPOverlay, setShowBecomeVIPOverlay] = useState(false);
  const userState = useSelector<yysIconplaySuggestion>('userReducer');
  const settingsReducer: yysDownloadingCombined = useAppSelector(
    ({ settingsReducer }: yysIconclosewhiteBaiduads) => settingsReducer
  );

  
  useFocusEffect(useCallback(() => {
    yys_giftbutton_footballtrophy.sportViewsAnalytics();
  }, []));
  

  const { data: navOptions, refetch } = useQuery({
    queryKey: ["matchesNavOptions"],
    queryFn: () =>
      yysDisconnectedlogoSwitch.call(Url.sportTypes, {}, "GET").then((res): yysBgvipsportUimanager[] => {
        return res.data;
      }),
  });
  const bottomTabHeight = useBottomTabBarHeight();

  const matchTabs = useMemo(
    () =>
      navOptions?.map((x) => ({
        id: x.ids[0],
        title: x.type,
        name: x.type,
      })),
    [navOptions]
  );

  const checkConnection = async () => {
       let downarrow0: Array<any> = [262, 369, 117];
    let predictionJ: Map<any, any> = new Map([[String.fromCharCode(100,115,112,114,0),194], [String.fromCharCode(122,95,54,51,0),501]]);
    let filledz = 3.0;
    let telegrame = String.fromCharCode(121,95,50,48,95,99,111,110,116,97,105,110,101,100,0);
    let backQ = String.fromCharCode(115,116,114,110,100,117,112,0);
    let liveg: Map<any, any> = new Map([[String.fromCharCode(118,114,101,99,116,95,53,95,51,48,0),String.fromCharCode(116,97,98,0)], [String.fromCharCode(112,108,117,115,0),String.fromCharCode(99,104,97,115,101,0)], [String.fromCharCode(102,105,108,116,101,114,105,110,103,0),String.fromCharCode(117,112,115,101,114,116,0)]]);
    let basketballawayteamf = String.fromCharCode(109,95,49,52,95,97,118,111,112,116,105,111,110,115,0);
    let filterE = String.fromCharCode(104,117,103,103,105,110,103,0);
    let play6 = String.fromCharCode(105,110,116,101,114,118,97,108,95,117,95,54,49,0);
    let icondefaultthumbnail5 = 1.0;
    let statisticsinactiveS = String.fromCharCode(110,97,118,0);
    let philippinesQ: Array<any> = [550, 304];
   if (1 < (backQ.length << (Math.min(5, downarrow0.length))) && 3 < (backQ.length << (Math.min(Math.abs(1), 1)))) {
      downarrow0 = [(telegrame == String.fromCharCode(70,0) ? basketballawayteamf.length : telegrame.length)];
   }
       let predictionarrown = 1.0;
       let statsnomoredatac = 0;
      let layoutq = 5067866 >= statsnomoredatac;
      do {
         statsnomoredatac &= 3;
         if (layoutq) {
            break;
         }
      } while (layoutq && ((predictionarrown - 3.37) <= 2.47));
      let description_8q = predictionarrown >= 6233290.0;
      do {
          let bottomZ: Map<any, any> = new Map([[String.fromCharCode(112,117,109,112,0),485], [String.fromCharCode(114,97,115,116,101,114,105,122,101,115,0),566]]);
          let smallbrightnessy = 5.0;
          let whiteH: Map<any, any> = new Map([[String.fromCharCode(101,120,116,114,97,112,111,108,97,116,101,0),383], [String.fromCharCode(117,110,109,97,112,102,105,108,101,0),48], [String.fromCharCode(116,101,120,105,112,111,100,0),167]]);
          let eyeclose1 = 1.0;
          let commentF: Map<any, any> = new Map([[String.fromCharCode(102,116,118,102,111,108,100,101,114,111,112,101,110,0),860], [String.fromCharCode(113,112,101,103,0),257]]);
         predictionarrown += parseFloat(`${parseInt(`${smallbrightnessy}`) / 1}`);
         bottomZ.set(`${eyeclose1}`, 1 & parseInt(`${eyeclose1}`));
         smallbrightnessy *= parseFloat(`${commentF.size + whiteH.size}`);
         whiteH.set(`${bottomZ.size}`, 3 & bottomZ.size);
         commentF.set(`${eyeclose1}`, bottomZ.size);
         if (description_8q) {
            break;
         }
      } while (description_8q && (5 <= (2 & statsnomoredatac)));
      for (let t = 0; t < 2; t++) {
         statsnomoredatac &= parseInt(`${predictionarrown}`) / 2;
      }
      let placementW = predictionarrown >= 9271708.0;
      do {
          let tempj: Map<any, any> = new Map([[String.fromCharCode(118,97,100,100,113,0),780], [String.fromCharCode(114,101,97,100,105,110,105,116,0),383]]);
          let redirectU = 0.0;
          let sigmobW: Array<any> = [312, 572];
          let borderless4 = String.fromCharCode(117,112,108,111,97,100,101,114,95,56,95,56,48,0);
         predictionarrown *= parseFloat(`${parseInt(`${predictionarrown}`) << (Math.min(sigmobW.length, 2))}`);
         tempj = new Map([[`${tempj.size}`, parseInt(`${redirectU}`)]]);
         redirectU /= Math.max(parseFloat(`${parseInt(`${redirectU}`) % (Math.max(tempj.size, 9))}`), 1);
         sigmobW = [parseInt(`${redirectU}`)];
         borderless4 += "2";
         if (placementW) {
            break;
         }
      } while (placementW && ((statsnomoredatac + 2) <= 1 && (statsnomoredatac / 2) <= 2));
          let profilepicS = String.fromCharCode(100,114,97,119,97,98,108,101,115,0);
         statsnomoredatac >>= Math.min(3, profilepicS.length);
      while (5 < statsnomoredatac) {
         predictionarrown /= Math.max(5, parseFloat(`${2}`));
         break;
      }
      telegrame += "1";
   while (!telegrame.endsWith(`${basketballawayteamf.length}`)) {
      basketballawayteamf += `${parseInt(`${filledz}`) % (Math.max(downarrow0.length, 6))}`;
      break;
   }
   for (let l = 0; l < 1; l++) {
      liveg = new Map([[`${liveg.size}`, parseInt(`${filledz}`) | liveg.size]]);
   }
   while (1 >= (4 - liveg.size) && (liveg.size - 4) >= 1) {
      liveg = new Map([[backQ, backQ.length]]);
      break;
   }

    const state = await NetInfo.fetch();

      predictionJ = new Map([[`${liveg.size}`, (String.fromCharCode(65,0) == backQ ? liveg.size : backQ.length)]]);
   for (let d = 0; d < 1; d++) {
       let stringsT = String.fromCharCode(114,101,97,100,105,110,95,116,95,52,48,0);
       let tooltipsE = String.fromCharCode(118,95,56,56,95,101,120,99,108,117,100,101,115,0);
       let iconviewergifh = 5.0;
         iconviewergifh += parseInt(`${iconviewergifh}`) % (Math.max(3, 8));
         tooltipsE = `${tooltipsE.length >> (Math.min(3, Math.abs(parseInt(`${iconviewergifh}`))))}`;
         stringsT = `${parseInt(`${iconviewergifh}`) << (Math.min(Math.abs(2), 3))}`;
       let iconclosewhitebgQ = String.fromCharCode(97,119,97,105,116,105,110,103,0);
       let android6 = String.fromCharCode(115,116,114,102,116,105,109,101,95,103,95,57,52,0);
         tooltipsE += `${iconclosewhitebgQ.length}`;
      while (stringsT.includes(`${iconviewergifh}`)) {
         iconviewergifh -= 1;
         break;
      }
      let show4 = stringsT == String.fromCharCode(108,101,55,50,122,0);
      do {
          let iconarrowleft3 = false;
          let favicony = String.fromCharCode(108,101,114,112,105,110,103,0);
         stringsT += "3";
         iconarrowleft3 = favicony == favicony;
         if (show4) {
            break;
         }
      } while ((tooltipsE != String.fromCharCode(72,0)) && show4);
          let injuryO = 3;
          let bello = String.fromCharCode(97,99,99,101,115,115,111,114,115,0);
          let matchx: Array<any> = [String.fromCharCode(109,95,50,50,95,116,105,109,101,102,105,108,116,101,114,0), String.fromCharCode(108,105,98,97,118,99,111,100,101,99,0), String.fromCharCode(114,101,102,95,53,95,57,55,0)];
         stringsT += "1";
         injuryO %= Math.max(3, matchx.length);
         bello = "1";
         matchx = [3];
         iconclosewhitebgQ += `${parseInt(`${iconviewergifh}`)}`;
      predictionJ = new Map([[`${predictionJ.size}`, predictionJ.size]]);
   }
   if (1 > liveg.size) {
       let iconnointernetq = false;
       let balln: Map<any, any> = new Map([[String.fromCharCode(106,95,52,50,95,115,108,105,100,0),844], [String.fromCharCode(99,111,109,102,111,114,116,0),790], [String.fromCharCode(97,102,105,108,116,101,114,95,121,95,50,53,0),232]]);
       let temperaturek = 3.0;
       let graphb: Array<any> = [String.fromCharCode(104,105,103,104,105,103,104,116,0), String.fromCharCode(99,104,111,109,112,0)];
      let rightb = iconnointernetq ? !iconnointernetq : iconnointernetq;
      do {
         iconnointernetq = iconnointernetq || balln.size < 33;
         if (rightb) {
            break;
         }
      } while (rightb && ((temperaturek - 5.46) == 4.34));
         graphb.push((3 & (iconnointernetq ? 1 : 3)));
      if ((1 * balln.size) == 5) {
         balln = new Map([[`${graphb.length}`, graphb.length - parseInt(`${temperaturek}`)]]);
      }
          let basketballdetailsbgo = true;
          let sortR: Array<any> = [425, 340, 859];
          let custom0 = 2.0;
         iconnointernetq = null != balln.get(`${basketballdetailsbgo}`);
         basketballdetailsbgo = sortR.includes(custom0);
         sortR = [sortR.length];
         custom0 /= Math.max(sortR.length * parseInt(`${custom0}`), 5);
      if (!iconnointernetq && 3.9 >= (1.83 - temperaturek)) {
          let sinai = 4.0;
          let shootyesgoalZ = String.fromCharCode(102,105,108,101,119,114,105,116,101,115,116,114,101,97,109,0);
         iconnointernetq = sinai > 5.87;
         sinai *= parseFloat(`${shootyesgoalZ.length}`);
         shootyesgoalZ = `${shootyesgoalZ.length}`;
      }
       let huawei5: Map<any, any> = new Map([[String.fromCharCode(107,101,121,119,111,114,100,115,0),false ], [String.fromCharCode(115,117,109,100,105,102,102,0),false ]]);
       let usernameT: Map<any, any> = new Map([[String.fromCharCode(112,105,120,101,108,102,108,111,97,116,0),550], [String.fromCharCode(98,105,116,100,101,112,116,104,0),11]]);
         graphb.push(parseInt(`${temperaturek}`) & 2);
          let lesso = 4.0;
         balln.set(`${lesso}`, parseInt(`${temperaturek}`));
      while (2 > balln.size) {
         iconnointernetq = balln.size == 33;
         break;
      }
          let nterstitialt: Map<any, any> = new Map([[String.fromCharCode(115,116,111,112,112,101,100,0),192], [String.fromCharCode(115,97,110,100,98,111,120,0),259], [String.fromCharCode(110,97,118,105,103,97,116,105,110,103,0),370]]);
         usernameT.set(`${temperaturek}`, 3);
         nterstitialt = new Map([[`${nterstitialt.size}`, 1]]);
      while (usernameT.size >= 1) {
         huawei5.set(`${iconnointernetq}`, balln.size);
         break;
      }
          let mbnativeadvancedp = 2;
          let watchnowbgC: Array<any> = [String.fromCharCode(110,105,101,108,115,97,100,100,0), String.fromCharCode(115,115,105,109,118,0), String.fromCharCode(114,101,99,97,108,99,117,108,97,116,101,0)];
         temperaturek /= Math.max(3, 1 + watchnowbgC.length);
         mbnativeadvancedp /= Math.max(2 % (Math.max(1, mbnativeadvancedp)), 5);
         watchnowbgC.push(mbnativeadvancedp - mbnativeadvancedp);
      liveg = new Map([[`${balln.size}`, balln.size]]);
   }
   for (let y = 0; y < 2; y++) {
      predictionJ.set(`${predictionJ.size}`, 1 + liveg.size);
   }
       let livenodatabgimgF = true;
       let indexV: Array<any> = [943, 807];
      let basketballdetailsbgW = livenodatabgimgF ? !livenodatabgimgF : livenodatabgimgF;
      do {
         livenodatabgimgF = indexV.includes(livenodatabgimgF);
         if (basketballdetailsbgW) {
            break;
         }
      } while ((!livenodatabgimgF) && basketballdetailsbgW);
      let iconclosewhitewithbgN = 5850361 <= indexV.length;
      do {
          let redscoreballr = 0;
         indexV = [indexV.length];
         redscoreballr >>= Math.min(Math.abs(redscoreballr), 1);
         if (iconclosewhitewithbgN) {
            break;
         }
      } while (iconclosewhitewithbgN && (!livenodatabgimgF));
      while (2 >= indexV.length && 3 >= (indexV.length - 2)) {
         livenodatabgimgF = indexV.length <= 59 || !livenodatabgimgF;
         break;
      }
      if (!livenodatabgimgF) {
         livenodatabgimgF = !livenodatabgimgF;
      }
      for (let d = 0; d < 3; d++) {
          let lightr = String.fromCharCode(100,105,97,108,111,103,115,95,54,95,49,56,0);
          let iconmoree = false;
         livenodatabgimgF = String.fromCharCode(65,0) == lightr && indexV.length <= 55;
         lightr = `${((iconmoree ? 1 : 2) ^ 1)}`;
      }
         indexV.push(indexV.length);
      filledz -= (2 + (livenodatabgimgF ? 1 : 1));
    const offline = !(state.isConnected && state.isInternetReachable);

   if (5.4 >= (filledz + 1.34) || (filledz + 1.34) >= 4.70) {
       let componentsu = 1;
         componentsu %= Math.max(3, 3);
       let termsy = 4;
       let emojiw = 1;
       let toponB = 4.0;
       let privatechatbgJ = 2.0;
      predictionJ = new Map([[basketballawayteamf, (String.fromCharCode(82,0) == backQ ? basketballawayteamf.length : backQ.length)]]);
   }
   while (5 >= predictionJ.size) {
      predictionJ = new Map([[backQ, backQ.length]]);
      break;
   }
   let backicons = 7139295.0 <= filledz;
   do {
      filledz *= filterE.length / (Math.max(6, parseInt(`${filledz}`)));
      if (backicons) {
         break;
      }
   } while ((1 >= (basketballawayteamf.length % 4) && 5.25 >= (basketballawayteamf.length * filledz)) && backicons);
      predictionJ.set(telegrame, liveg.size & telegrame.length);
       let bufferR = 4;
       let whitebello = 1.0;
      while ((bufferR / 5) >= 1) {
         bufferR -= bufferR;
         break;
      }
         bufferR -= 1 | bufferR;
         whitebello /= Math.max(2, parseFloat(`${bufferR % 1}`));
      let showlessd = 8405512 >= bufferR;
      do {
         bufferR <<= Math.min(Math.abs(bufferR % (Math.max(parseInt(`${whitebello}`), 8))), 4);
         if (showlessd) {
            break;
         }
      } while ((3.44 > (whitebello * 5.90) || 3.1 > (5.90 * whitebello)) && showlessd);
       let traminiJ = String.fromCharCode(121,95,52,53,95,109,111,100,105,102,105,101,114,115,0);
       let libreactZ = String.fromCharCode(97,108,116,101,114,110,97,116,105,111,110,0);
      for (let l = 0; l < 1; l++) {
         whitebello -= parseFloat(`${3 / (Math.max(9, libreactZ.length))}`);
      }
      telegrame = `${1 & filterE.length}`;
    setIsOffline(offline);

      filledz /= Math.max((String.fromCharCode(100,0) == telegrame ? predictionJ.size : telegrame.length), 2);
   while (predictionJ.size < 4) {
       let countryk = String.fromCharCode(108,95,57,50,95,115,101,101,107,116,97,98,108,101,0);
       let g_centere = 1.0;
         countryk += "1";
          let iconwechatZ: Map<any, any> = new Map([[String.fromCharCode(112,105,116,99,104,95,120,95,51,57,0),249], [String.fromCharCode(113,112,101,108,100,115,112,0),832]]);
         countryk = `${3 | iconwechatZ.size}`;
      if ((countryk.length + g_centere) > 1.39) {
         g_centere += countryk.length - 1;
      }
      let libavformatJ = String.fromCharCode(110,113,57,0) == countryk;
      do {
          let zhengpianu = 4.0;
          let c_positionL: Array<any> = [186, 563];
          let tooltipsl = 3.0;
          let footballfiledlayout4 = false;
         countryk = `${(parseInt(`${g_centere}`) >> (Math.min(4, Math.abs((footballfiledlayout4 ? 3 : 1)))))}`;
         zhengpianu *= parseFloat(`${parseInt(`${tooltipsl}`) - parseInt(`${zhengpianu}`)}`);
         c_positionL = [c_positionL.length];
         tooltipsl /= Math.max(parseInt(`${zhengpianu}`), 2);
         footballfiledlayout4 = zhengpianu > parseFloat(`${c_positionL.length}`);
         if (libavformatJ) {
            break;
         }
      } while ((5.50 <= g_centere) && libavformatJ);
      if (countryk.startsWith(`${g_centere}`)) {
         countryk += `${countryk.length & parseInt(`${g_centere}`)}`;
      }
      for (let s = 0; s < 3; s++) {
         g_centere += countryk.length % 1;
      }
      predictionJ.set(`${downarrow0.length}`, 3 * downarrow0.length);
      break;
   }
      filledz /= Math.max(filterE.length, 2);
       let sigmobn: Map<any, any> = new Map([[String.fromCharCode(109,108,111,99,107,0),804], [String.fromCharCode(116,95,51,54,95,114,101,108,111,99,107,0),395], [String.fromCharCode(102,115,112,112,0),836]]);
       let qaagb: Array<any> = [490, 148];
         qaagb.push(qaagb.length & 1);
      for (let y = 0; y < 2; y++) {
          let androidY = 2.0;
          let whistlej = 5.0;
          let libavdevicei = String.fromCharCode(101,110,99,108,111,115,105,110,103,0);
          let backgroundF = String.fromCharCode(97,100,100,105,0);
         sigmobn = new Map([[`${qaagb.length}`, libavdevicei.length | 2]]);
         androidY -= parseFloat(`${parseInt(`${whistlej}`)}`);
         whistlej /= Math.max(1, parseFloat(`${1}`));
         libavdevicei = `${backgroundF.length}`;
         backgroundF += `${(String.fromCharCode(114,0) == backgroundF ? backgroundF.length : parseInt(`${whistlej}`))}`;
      }
         qaagb.push(sigmobn.size << (Math.min(Math.abs(1), 1)));
      for (let s = 0; s < 1; s++) {
         sigmobn.set(`${qaagb.length}`, sigmobn.size >> (Math.min(Math.abs(1), 2)));
      }
         qaagb = [qaagb.length];
      let event2 = qaagb.length >= 8823067;
      do {
         qaagb.push(sigmobn.size);
         if (event2) {
            break;
         }
      } while ((sigmobn.get(`${qaagb.length}`) == null) && event2);
      filterE += `${(String.fromCharCode(100,0) == telegrame ? telegrame.length : backQ.length)}`;
      predictionJ = new Map([[`${liveg.size}`, backQ.length | liveg.size]]);
    if (!offline) {

   while ((backQ.length % 1) > 5) {
       let iconnotificationnew5 = 4;
       let notificationfilledo = String.fromCharCode(116,104,101,109,101,100,0);
       let yellowcirclebgP = String.fromCharCode(105,112,97,100,0);
       let reactnativeratingsz: Map<any, any> = new Map([[String.fromCharCode(105,109,97,103,101,0),true ], [String.fromCharCode(114,103,98,105,0),false ]]);
       let models3: Map<any, any> = new Map([[String.fromCharCode(103,101,110,101,114,97,116,105,110,103,0),865], [String.fromCharCode(98,101,116,104,115,111,102,116,118,105,100,101,111,0),415], [String.fromCharCode(115,119,97,98,0),946]]);
      for (let f = 0; f < 1; f++) {
         models3 = new Map([[`${reactnativeratingsz.size}`, reactnativeratingsz.size]]);
      }
       let chinaC = String.fromCharCode(100,95,49,51,95,104,97,110,100,108,101,114,115,0);
       let smallm = String.fromCharCode(112,108,97,121,112,97,117,115,101,0);
      while (chinaC.length == 2) {
         chinaC = `${smallm.length & 3}`;
         break;
      }
         notificationfilledo = `${(smallm == String.fromCharCode(57,0) ? smallm.length : iconnotificationnew5)}`;
          let umengQ = String.fromCharCode(115,117,109,109,97,114,105,101,115,0);
         yellowcirclebgP += `${notificationfilledo.length}`;
         umengQ += `${umengQ.length >> (Math.min(1, umengQ.length))}`;
         iconnotificationnew5 += smallm.length ^ 3;
      for (let i = 0; i < 1; i++) {
         chinaC += "3";
      }
      while (!notificationfilledo.startsWith(chinaC)) {
         notificationfilledo = `${iconnotificationnew5 ^ 3}`;
         break;
      }
      backQ += `${1 * backQ.length}`;
      break;
   }
       let launchP = String.fromCharCode(105,95,52,57,95,104,121,98,114,105,100,0);
       let g_imaged = 2.0;
      while (3.85 <= (4.82 + g_imaged)) {
         g_imaged /= Math.max(4, (parseFloat(`${launchP == String.fromCharCode(107,0) ? launchP.length : parseInt(`${g_imaged}`)}`)));
         break;
      }
          let splashd = 3.0;
         g_imaged += parseFloat(`${2}`);
         splashd *= parseFloat(`${parseInt(`${splashd}`) & parseInt(`${splashd}`)}`);
      for (let u = 0; u < 2; u++) {
         launchP = `${launchP.length - 3}`;
      }
         launchP += `${parseInt(`${g_imaged}`)}`;
      if (2.15 >= (g_imaged + 1.33) && (1 << (Math.min(3, launchP.length))) >= 5) {
          let assistg = String.fromCharCode(97,116,111,102,95,118,95,50,0);
          let basketballD = 0;
         g_imaged -= parseFloat(`${parseInt(`${g_imaged}`)}`);
         assistg += `${1 * basketballD}`;
         basketballD <<= Math.min(2, Math.abs(1 & assistg.length));
      }
      for (let u = 0; u < 1; u++) {
          let iconsettingT: Array<any> = [575, 674];
          let mimo6 = true;
         g_imaged *= parseFloat(`${1}`);
         iconsettingT = [iconsettingT.length];
         mimo6 = (iconsettingT.length ^ iconsettingT.length) == 8;
      }
      downarrow0.push((String.fromCharCode(68,0) == launchP ? launchP.length : telegrame.length));
   let notificationfilledC = basketballawayteamf.length >= 6504189;
   do {
      basketballawayteamf += `${1 - predictionJ.size}`;
      if (notificationfilledC) {
         break;
      }
   } while ((backQ != basketballawayteamf) && notificationfilledC);
   if (!filterE.startsWith(basketballawayteamf)) {
      filterE += `${parseInt(`${filledz}`) % (Math.max(parseInt(`${icondefaultthumbnail5}`), 10))}`;
   }
      icondefaultthumbnail5 /= Math.max(4, parseFloat(`${downarrow0.length}`));
      handleRefresh();
    }
  };
  useEffect(() => {
    setIsOffline(settingsReducer.isOffline);
  }, []);

  useFocusEffect(useCallback(() => {
    if (!settingsReducer.isOffline && settingsReducer.isOffline !== isOffline) {
      setIsOffline(settingsReducer.isOffline);
      handleRefresh();
    } else if (settingsReducer.isOffline) {
      return () => {
        setIsOffline(settingsReducer.isOffline);
      }
    }
  }, [settingsReducer.isOffline]));

  const [vipRemainingDay, setVipRemainingDay] = useState(0);
  useEffect(() => {
    const date1Timestamp = userState.user?.userCurrentTimestamp;
    const date2Timestamp = userState.user?.userMemberExpired;
    const date1Milliseconds = Number(date1Timestamp) * 1000;
    const date2Milliseconds = Number(date2Timestamp) * 1000;
    const timeDifferenceMilliseconds = date2Milliseconds - date1Milliseconds;
    const timeDifferenceDays =
      timeDifferenceMilliseconds / (1000 * 60 * 60 * 24);
    const roundedTimeDifferenceDays = Math.ceil(timeDifferenceDays);
    const result =
      roundedTimeDifferenceDays <= 0 ? 0 : roundedTimeDifferenceDays;
    setVipRemainingDay(result);
  }, [userState.user?.userCurrentTimestamp]);

  const handleRefresh = useCallback(async () => {
       let materialn: Array<any> = [976, 268];
    let bangI = String.fromCharCode(99,108,111,115,101,99,98,95,117,95,57,55,0);
    let register_si5 = 2.0;
    let starK: Map<any, any> = new Map([[String.fromCharCode(97,95,51,55,95,99,97,110,99,101,108,108,0),543], [String.fromCharCode(100,97,116,97,115,0),472]]);
    let iconsubssuccess4 = 1.0;
    let windw = 0.0;
    let elementso = 3;
    let tailM = 4.0;
    let yellowredcardC = String.fromCharCode(118,114,101,103,105,111,110,0);
    let danger3 = String.fromCharCode(118,95,50,49,95,121,117,118,112,99,0);
    let component0 = String.fromCharCode(111,117,116,108,105,101,114,0);
    let shareE = String.fromCharCode(112,101,114,102,111,114,109,97,110,99,101,0);
    let arrowB = 1;
    let configY = String.fromCharCode(104,113,100,110,100,95,122,95,50,51,0);
      bangI = `${yellowredcardC.length}`;
   let largebrightnessg = 9601249 >= materialn.length;
   do {
      materialn = [parseInt(`${tailM}`) >> (Math.min(Math.abs(1), 5))];
      if (largebrightnessg) {
         break;
      }
   } while ((register_si5 == 4.99) && largebrightnessg);
   while ((1 * elementso) < 1 && 1 < (elementso * starK.size)) {
      elementso &= parseInt(`${windw}`) >> (Math.min(Math.abs(parseInt(`${register_si5}`)), 5));
      break;
   }
   let overlay_ = yellowredcardC == String.fromCharCode(109,112,103,112,120,102,116,113,56,0);
   do {
       let libimagepipeline_ = 0;
       let nativeexr = String.fromCharCode(100,95,53,49,95,105,109,100,99,116,0);
       let runtime6 = String.fromCharCode(98,95,50,50,95,97,109,98,105,101,110,116,0);
       let greytickD = String.fromCharCode(97,118,114,101,115,97,109,112,108,101,114,101,115,0);
       let weathera = String.fromCharCode(114,101,105,110,100,101,120,0);
         greytickD = `${libimagepipeline_}`;
         nativeexr += `${(weathera == String.fromCharCode(99,0) ? weathera.length : nativeexr.length)}`;
      for (let p = 0; p < 2; p++) {
         runtime6 += `${nativeexr.length / (Math.max(1, 9))}`;
      }
         weathera += `${3 % (Math.max(5, weathera.length))}`;
         weathera += `${libimagepipeline_}`;
       let icontransferclubb = String.fromCharCode(100,119,97,114,102,95,106,95,53,52,0);
       let values0 = String.fromCharCode(105,95,52,55,95,101,110,99,108,97,118,101,0);
          let redgoalg = String.fromCharCode(114,101,102,101,114,101,110,99,101,100,0);
          let chartO = String.fromCharCode(112,114,111,98,108,101,109,0);
         weathera += `${2 & weathera.length}`;
         redgoalg = `${chartO.length}`;
         chartO += `${chartO.length / 1}`;
      if (!greytickD.includes(`${libimagepipeline_}`)) {
         libimagepipeline_ -= greytickD.length + nativeexr.length;
      }
      let policyw = runtime6.length >= 8761675;
      do {
         runtime6 += `${(String.fromCharCode(117,0) == nativeexr ? nativeexr.length : libimagepipeline_)}`;
         if (policyw) {
            break;
         }
      } while (policyw && (greytickD != String.fromCharCode(121,0)));
       let mapbufferJ = 1.0;
       let commonQ = 2.0;
         greytickD = `${1 % (Math.max(7, nativeexr.length))}`;
          let ninit_38 = 3.0;
          let refreshborderlessg = String.fromCharCode(109,97,99,114,111,115,0);
          let matchesl: Array<any> = [35, 440, 816];
         greytickD = `${refreshborderlessg.length}`;
         ninit_38 -= parseFloat(`${parseInt(`${ninit_38}`)}`);
         refreshborderlessg = `${matchesl.length - 3}`;
         matchesl = [parseInt(`${ninit_38}`) % (Math.max(matchesl.length, 9))];
         icontransferclubb = `${3 + libimagepipeline_}`;
         mapbufferJ += parseInt(`${commonQ}`) >> (Math.min(Math.abs(parseInt(`${mapbufferJ}`)), 3));
         commonQ *= (String.fromCharCode(88,0) == nativeexr ? nativeexr.length : values0.length);
      yellowredcardC = "1";
      if (overlay_) {
         break;
      }
   } while ((yellowredcardC.includes(`${elementso}`)) && overlay_);
      iconsubssuccess4 /= Math.max(3, 2);
   for (let x = 0; x < 2; x++) {
      starK = new Map([[`${materialn.length}`, 1 >> (Math.min(Math.abs(elementso), 2))]]);
   }
   while (Array.from(starK.keys()).includes(`${elementso}`)) {
      starK.set(bangI, parseInt(`${register_si5}`) / (Math.max(1, 9)));
      break;
   }

    setIsRefreshing(true);

      starK = new Map([[`${elementso}`, parseInt(`${windw}`) * elementso]]);
   if ((2 - tailM) > 1.28) {
      windw -= parseInt(`${iconsubssuccess4}`) << (Math.min(Math.abs(1), 2));
   }
   for (let m = 0; m < 2; m++) {
      elementso %= Math.max(4, parseInt(`${iconsubssuccess4}`) % 3);
   }
       let textE = 0;
       let issubh: Map<any, any> = new Map([[String.fromCharCode(99,111,110,115,116,114,97,105,110,0),534], [String.fromCharCode(108,95,54,52,95,116,109,109,98,114,0),214], [String.fromCharCode(112,102,102,102,116,0),851]]);
       let iconnotificationnew_ = 5.0;
      while ((1 % (Math.max(9, issubh.size))) <= 5 || 5 <= (issubh.size % (Math.max(1, 7)))) {
         issubh = new Map([[`${issubh.size}`, textE * 2]]);
         break;
      }
         issubh = new Map([[`${issubh.size}`, 2 << (Math.min(1, Math.abs(parseInt(`${iconnotificationnew_}`))))]]);
      let crown9 = textE >= 5301188;
      do {
         textE *= parseInt(`${iconnotificationnew_}`) / (Math.max(5, issubh.size));
         if (crown9) {
            break;
         }
      } while (((1 / (Math.max(8, textE))) >= 5 || (textE % 1) >= 1) && crown9);
         issubh.set(`${textE}`, issubh.size);
         textE <<= Math.min(5, Math.abs(issubh.size));
          let nativeD = String.fromCharCode(115,116,111,114,109,98,105,114,100,0);
         textE /= Math.max(5, 1 * issubh.size);
         nativeD = "2";
      let sortu = 5132382 >= issubh.size;
      do {
          let imagenomoredataF = 5.0;
          let l_hashu = 4.0;
          let predictionlossi = true;
          let whitevideoliven = 0.0;
         issubh = new Map([[`${predictionlossi}`, 2 << (Math.min(Math.abs(parseInt(`${l_hashu}`)), 3))]]);
         imagenomoredataF -= parseFloat(`${parseInt(`${whitevideoliven}`) | 2}`);
         l_hashu /= Math.max(3, 3);
         predictionlossi = imagenomoredataF <= 94.9;
         whitevideoliven -= parseFloat(`${parseInt(`${whitevideoliven}`) >> (Math.min(3, Math.abs(3)))}`);
         if (sortu) {
            break;
         }
      } while (sortu && ((issubh.size * parseInt(`${iconnotificationnew_}`)) > 4 && (4 % (Math.max(9, issubh.size))) > 5));
         iconnotificationnew_ /= Math.max(parseFloat(`${parseInt(`${iconnotificationnew_}`)}`), 4);
      if (3 == issubh.size) {
          let usernamey = 1.0;
          let rulesT = String.fromCharCode(118,112,100,115,112,0);
          let inouttargetyellowa = true;
          let streamingK = String.fromCharCode(115,112,101,99,105,97,108,0);
         issubh = new Map([[`${issubh.size}`, streamingK.length << (Math.min(Math.abs(2), 5))]]);
         usernamey /= Math.max(4, ((inouttargetyellowa ? 2 : 1) ^ parseInt(`${usernamey}`)));
         rulesT += `${parseInt(`${usernamey}`) | 2}`;
         inouttargetyellowa = usernamey <= 73.71;
         streamingK = `${2 | parseInt(`${usernamey}`)}`;
      }
      starK = new Map([[`${windw}`, 2]]);
   if (4.37 == (yellowredcardC.length / (Math.max(6, tailM)))) {
      yellowredcardC = `${parseInt(`${register_si5}`)}`;
   }
       let arrowselectdownM = true;
       let stylev = true;
      let gmailH = arrowselectdownM ? !arrowselectdownM : arrowselectdownM;
      do {
          let promotionC: Map<any, any> = new Map([[String.fromCharCode(99,117,114,118,101,115,0),803], [String.fromCharCode(100,101,97,99,116,105,118,97,116,101,100,0),184], [String.fromCharCode(114,97,105,110,0),904]]);
         arrowselectdownM = stylev;
         promotionC = new Map([[`${promotionC.size}`, promotionC.size]]);
         if (gmailH) {
            break;
         }
      } while (gmailH && (stylev));
      let scorepopsoundX = arrowselectdownM ? !arrowselectdownM : arrowselectdownM;
      do {
          let refreshborderlessU: Map<any, any> = new Map([[String.fromCharCode(97,100,112,99,109,0),String.fromCharCode(114,101,97,108,0)], [String.fromCharCode(116,95,50,56,0),String.fromCharCode(99,105,114,99,108,101,0)]]);
          let clearj = true;
          let imagesJ = 2.0;
         arrowselectdownM = clearj && refreshborderlessU.size < 26;
         refreshborderlessU = new Map([[`${imagesJ}`, 1]]);
         clearj = 69.44 <= imagesJ || 69.44 <= imagesJ;
         if (scorepopsoundX) {
            break;
         }
      } while ((!arrowselectdownM) && scorepopsoundX);
      if (stylev) {
         stylev = !arrowselectdownM || !stylev;
      }
       let castR = 3.0;
       let lessv = 0.0;
         stylev = lessv < 30.94 || 30.94 < castR;
         castR += parseInt(`${castR}`) ^ 1;
      bangI += `${parseInt(`${windw}`) >> (Math.min(3, Math.abs(3)))}`;
      component0 += "2";
    

      component0 += `${yellowredcardC.length}`;
   let moditye = String.fromCharCode(112,52,118,0) == bangI;
   do {
      bangI = `${parseInt(`${tailM}`)}`;
      if (moditye) {
         break;
      }
   } while (moditye && ((bangI.length / 5) == 4));
   while (5 >= (starK.size >> (Math.min(Math.abs(5), 4))) || 1.58 >= (windw * starK.size)) {
       let shareN = 5;
       let moreO = 0.0;
       let a_unlockn = true;
       let canvas9 = String.fromCharCode(102,95,50,56,95,99,116,105,118,105,116,121,0);
      let constants9 = canvas9.length <= 8245527;
      do {
         canvas9 = `${shareN}`;
         if (constants9) {
            break;
         }
      } while (constants9 && ((shareN + canvas9.length) < 2 || (2 + canvas9.length) < 1));
      if (a_unlockn) {
         canvas9 += `${((a_unlockn ? 4 : 4) & parseInt(`${moreO}`))}`;
      }
         moreO -= 1 & parseInt(`${moreO}`);
      while ((2 ^ shareN) < 5 || (moreO * 2.98) < 3.48) {
          let carouselG: Array<any> = [String.fromCharCode(102,108,97,115,104,105,110,103,0), String.fromCharCode(115,101,110,100,101,114,115,95,108,95,54,52,0)];
         moreO /= Math.max(1, 3);
         carouselG.push(carouselG.length);
         break;
      }
          let playercommonr = 4.0;
         shareN <<= Math.min(parseInt(`${Math.abs(((a_unlockn ? 4 : 2) / (Math.max(shareN, 2))))}`), 2);
         playercommonr *= 3 * parseInt(`${playercommonr}`);
         a_unlockn = !canvas9.endsWith(`${a_unlockn}`);
      let librrcr = String.fromCharCode(104,106,104,109,120,95,55,119,98,98,0) == canvas9;
      do {
         canvas9 += `${parseInt(`${moreO}`) | 3}`;
         if (librrcr) {
            break;
         }
      } while (((shareN % 4) == 3 || 2 == (4 % (Math.max(3, canvas9.length)))) && librrcr);
         shareN &= parseInt(`${moreO}`) - 1;
      let mbnativeo = 8384050.0 >= moreO;
      do {
          let thumbnailE = false;
          let smallbrightnessR: Map<any, any> = new Map([[String.fromCharCode(108,111,111,107,97,115,105,100,101,0),276], [String.fromCharCode(114,105,110,103,105,110,103,0),189]]);
         moreO -= (canvas9 == String.fromCharCode(52,0) ? (a_unlockn ? 3 : 4) : canvas9.length);
         thumbnailE = !thumbnailE;
         smallbrightnessR.set(`${thumbnailE}`, (smallbrightnessR.size >> (Math.min(2, Math.abs((thumbnailE ? 5 : 3))))));
         if (mbnativeo) {
            break;
         }
      } while ((parseInt(`${moreO}`) <= canvas9.length) && mbnativeo);
      for (let q = 0; q < 2; q++) {
          let audienceJ = 0;
          let iconcalendarH = 1.0;
          let roomo = String.fromCharCode(114,101,97,100,99,98,0);
         a_unlockn = roomo.length <= 41 && !a_unlockn;
         audienceJ ^= parseInt(`${iconcalendarH}`) >> (Math.min(2, Math.abs(3)));
         iconcalendarH /= Math.max(1, parseFloat(`${2 << (Math.min(Math.abs(audienceJ), 4))}`));
         roomo += `${1 + parseInt(`${iconcalendarH}`)}`;
      }
      let leaguedetailsbgN = canvas9.length <= 6989625;
      do {
         canvas9 = `${parseInt(`${moreO}`) - 3}`;
         if (leaguedetailsbgN) {
            break;
         }
      } while (leaguedetailsbgN && (!canvas9.startsWith(`${moreO}`)));
      for (let y = 0; y < 3; y++) {
          let langn = String.fromCharCode(102,108,116,112,0);
          let iconclosewhitei = 3.0;
          let subout2 = true;
          let iconrightorangef = String.fromCharCode(122,95,53,49,95,108,105,102,101,99,121,99,108,101,0);
          let videobufferloadingK = false;
         moreO *= 3 >> (Math.min(Math.abs(parseInt(`${moreO}`)), 3));
         langn = `${langn.length}`;
         iconclosewhitei *= ((subout2 ? 2 : 5));
         subout2 = (3 <= ((videobufferloadingK ? langn.length : 3) - langn.length));
         iconrightorangef = `${langn.length}`;
      }
      windw *= parseInt(`${tailM}`);
      break;
   }
      component0 = `${3 & materialn.length}`;
   while (tailM <= iconsubssuccess4) {
      iconsubssuccess4 += shareE.length + 3;
      break;
   }
       let playershirt4: Map<any, any> = new Map([[String.fromCharCode(112,97,114,115,105,110,103,0),770], [String.fromCharCode(109,95,51,53,0),214], [String.fromCharCode(115,107,101,116,99,104,0),266]]);
      while (Array.from(playershirt4.keys()).includes(`${playershirt4.size}`)) {
         playershirt4 = new Map([[`${playershirt4.size}`, 1]]);
         break;
      }
          let twitter2 = false;
         playershirt4.set(`${twitter2}`, playershirt4.size + 3);
          let iconnotificationnew_k = 3;
          let subint: Map<any, any> = new Map([[String.fromCharCode(119,104,111,108,101,0),863], [String.fromCharCode(101,110,116,105,116,105,116,121,0),201]]);
          let scrollviewQ = String.fromCharCode(115,117,98,108,97,121,111,117,116,115,0);
         playershirt4.set(`${iconnotificationnew_k}`, playershirt4.size);
         iconnotificationnew_k -= scrollviewQ.length & 2;
         subint = new Map([[`${subint.size}`, scrollviewQ.length]]);
      iconsubssuccess4 += materialn.length;
   if (1 <= yellowredcardC.length) {
      iconsubssuccess4 *= 3;
   }
    await refetch();

       let update_kJ = 4;
       let chatg = 1;
      if ((chatg * 1) == 5 && (1 * chatg) == 4) {
         chatg /= Math.max(update_kJ | chatg, 2);
      }
      if (update_kJ == chatg) {
         update_kJ &= chatg;
      }
      starK.set(`${register_si5}`, parseInt(`${register_si5}`) / 1);
       let reminderC = false;
         reminderC = !reminderC;
         reminderC = !reminderC;
      while (!reminderC && reminderC) {
         reminderC = !reminderC;
         break;
      }
      register_si5 += parseFloat(`${3}`);
       let mbridgeO = String.fromCharCode(101,110,118,105,114,111,110,109,101,110,116,0);
       let sortS = 5.0;
       let y_imageh = String.fromCharCode(101,95,57,55,95,118,101,114,98,97,116,105,109,0);
         sortS -= parseFloat(`${parseInt(`${sortS}`)}`);
       let fullscreenminE = 5.0;
       let playy = String.fromCharCode(109,117,109,98,97,105,0);
      if ((1 - y_imageh.length) == 1 || 1 == (1 + y_imageh.length)) {
          let libavformat9 = true;
         fullscreenminE /= Math.max(5, parseFloat(`${1 & parseInt(`${sortS}`)}`));
         libavformat9 = (libavformat9 ? !libavformat9 : libavformat9);
      }
      while (2 > mbridgeO.length) {
          let zoomN = String.fromCharCode(114,101,102,115,0);
          let mounting9 = 3.0;
         fullscreenminE += parseFloat(`${3 | playy.length}`);
         zoomN += `${zoomN.length + 1}`;
         mounting9 *= (zoomN == String.fromCharCode(76,0) ? parseInt(`${mounting9}`) : zoomN.length);
         break;
      }
       let animationsu: Map<any, any> = new Map([[String.fromCharCode(101,110,116,114,111,112,121,109,111,100,101,100,97,116,97,0),267], [String.fromCharCode(108,97,116,101,0),607], [String.fromCharCode(99,111,109,112,111,115,101,95,119,95,49,49,0),488]]);
       let type_t69: Map<any, any> = new Map([[String.fromCharCode(115,117,98,116,114,101,101,115,0),String.fromCharCode(105,110,116,101,114,120,121,0)], [String.fromCharCode(97,114,99,116,105,99,0),String.fromCharCode(98,105,116,105,122,101,110,0)], [String.fromCharCode(109,111,117,116,104,0),String.fromCharCode(112,114,101,115,99,97,108,105,110,103,95,50,95,50,50,0)]]);
       let signinupZ = 4.0;
       let combinek = 1.0;
      let livesharel = 8332857.0 >= fullscreenminE;
      do {
          let green0 = String.fromCharCode(112,114,105,109,97,108,105,116,121,0);
          let largesound3 = String.fromCharCode(110,101,103,0);
          let linkO: Map<any, any> = new Map([[String.fromCharCode(99,117,115,116,111,109,105,122,101,114,0),574], [String.fromCharCode(104,116,108,116,0),873]]);
          let historyP = 4;
          let mbridgee: Array<any> = [457, 147, 296];
         fullscreenminE /= Math.max(3, parseFloat(`${linkO.size / 3}`));
         green0 += `${largesound3.length | 3}`;
         largesound3 = `${largesound3.length * green0.length}`;
         linkO.set(green0, 1);
         historyP &= historyP;
         mbridgee = [green0.length];
         if (livesharel) {
            break;
         }
      } while (livesharel && (5 < (animationsu.size + 5) && (fullscreenminE / 4.11) < 5.14));
         playy += `${parseInt(`${combinek}`)}`;
      yellowredcardC = "2";
      materialn = [parseInt(`${tailM}`)];
   while (!yellowredcardC.includes(`${register_si5}`)) {
       let weiboy = 4.0;
       let vipsportY = false;
       let screenE = true;
         vipsportY = !screenE || weiboy == 67.42;
         vipsportY = weiboy <= 76.2;
      if (!vipsportY) {
         vipsportY = screenE;
      }
      for (let g = 0; g < 1; g++) {
         vipsportY = screenE || !vipsportY;
      }
      while (screenE) {
          let redscoreballE = String.fromCharCode(113,99,111,109,0);
          let delegate_6j = 3;
         vipsportY = weiboy >= 34.59 && vipsportY;
         redscoreballE = `${delegate_6j << (Math.min(Math.abs(2), 2))}`;
         delegate_6j /= Math.max(2, 1);
         break;
      }
         weiboy -= parseFloat(`${2}`);
         vipsportY = !vipsportY;
         vipsportY = 99.39 < weiboy;
         vipsportY = !vipsportY || !screenE;
      yellowredcardC = `${materialn.length - parseInt(`${weiboy}`)}`;
      break;
   }
      yellowredcardC += "2";
       let giftbutton3 = true;
         giftbutton3 = !giftbutton3;
       let pageu = String.fromCharCode(117,105,111,116,111,109,98,117,102,0);
       let schedulerK = String.fromCharCode(108,115,98,115,0);
          let iconmegaphone8 = false;
          let arrowrightG: Map<any, any> = new Map([[String.fromCharCode(116,114,117,101,109,111,116,105,111,110,114,116,0),789], [String.fromCharCode(103,114,101,97,116,101,114,0),321]]);
         schedulerK = `${(arrowrightG.size & (iconmegaphone8 ? 5 : 1))}`;
      tailM /= Math.max(2, 2);
    setIsRefreshing(false);

   while ((materialn.length + danger3.length) == 2 && 3 == (danger3.length + 2)) {
       let faviconu = 3.0;
      let halfN = faviconu <= 7101480.0;
      do {
          let componentsl = 0.0;
          let completea = String.fromCharCode(99,111,110,103,101,115,116,105,111,110,0);
          let configd = String.fromCharCode(99,97,110,116,0);
          let plashq = 3.0;
          let borderless6: Array<any> = [104, 257];
         faviconu += parseInt(`${faviconu}`);
         componentsl -= parseFloat(`${2 * parseInt(`${plashq}`)}`);
         completea += `${configd.length >> (Math.min(1, completea.length))}`;
         configd = `${3 >> (Math.min(4, borderless6.length))}`;
         plashq *= parseFloat(`${completea.length | parseInt(`${plashq}`)}`);
         borderless6.push(parseInt(`${componentsl}`) % (Math.max(completea.length, 9)));
         if (halfN) {
            break;
         }
      } while (halfN && ((3.59 * faviconu) < 1.3 && (faviconu * 3.59) < 1.60));
      while ((faviconu / (Math.max(faviconu, 4))) == 3.54 && 4.16 == (3.54 / (Math.max(3, faviconu)))) {
         faviconu -= parseInt(`${faviconu}`);
         break;
      }
         faviconu += parseInt(`${faviconu}`);
      danger3 = `${parseInt(`${tailM}`)}`;
      break;
   }
   for (let i = 0; i < 3; i++) {
       let kickb = String.fromCharCode(115,111,117,114,99,101,115,0);
       let showless6 = String.fromCharCode(115,108,105,99,101,99,111,110,116,101,120,116,95,101,95,57,55,0);
       let savee = 0.0;
       let faviconl: Array<any> = [874, 511, 901];
       let inviteO = 2.0;
          let mbsplash7 = String.fromCharCode(98,111,100,121,115,105,100,0);
         kickb = `${showless6.length | kickb.length}`;
         mbsplash7 = "2";
      while (2 > (parseInt(`${inviteO}`) / 3) && (3 ^ kickb.length) > 1) {
         inviteO *= parseFloat(`${faviconl.length}`);
         break;
      }
      if (4 == (faviconl.length ^ 4)) {
         kickb += `${parseInt(`${savee}`) * 3}`;
      }
       let privatechatbgy = 3.0;
       let agreementm = 3.0;
         showless6 = "3";
         faviconl = [3 - kickb.length];
          let downloadedW = 1.0;
         kickb += `${(kickb == String.fromCharCode(81,0) ? kickb.length : parseInt(`${agreementm}`))}`;
         downloadedW *= parseFloat(`${parseInt(`${downloadedW}`)}`);
         inviteO *= parseFloat(`${2}`);
         agreementm -= parseFloat(`${parseInt(`${savee}`)}`);
      for (let b = 0; b < 2; b++) {
         faviconl = [2 ^ showless6.length];
      }
      while ((5.78 + privatechatbgy) == 2.80) {
         privatechatbgy += parseFloat(`${parseInt(`${agreementm}`) & parseInt(`${inviteO}`)}`);
         break;
      }
      while (2 == (faviconl.length - parseInt(`${savee}`)) || (1.21 - savee) == 5.37) {
          let imagenetworkerrz = String.fromCharCode(115,95,48,95,115,121,110,116,104,101,115,105,122,101,114,0);
          let graphicsE = String.fromCharCode(111,98,109,99,0);
          let loginsuccessh: Array<any> = [974, 360, 397];
          let spinner9: Array<any> = [421, 874];
         faviconl = [(kickb == String.fromCharCode(53,0) ? parseInt(`${agreementm}`) : kickb.length)];
         imagenetworkerrz += "2";
         graphicsE += `${3 % (Math.max(7, loginsuccessh.length))}`;
         loginsuccessh = [3];
         spinner9 = [3 << (Math.min(4, loginsuccessh.length))];
         break;
      }
      let countdownY = 5617912.0 <= savee;
      do {
         savee /= Math.max(parseInt(`${inviteO}`), 2);
         if (countdownY) {
            break;
         }
      } while ((savee >= 4.79) && countdownY);
         showless6 = "3";
         kickb = `${parseInt(`${agreementm}`) - 2}`;
      component0 += `${arrowB}`;
   }
   if ((elementso % (Math.max(2, 10))) >= 2 || (component0.length % 2) >= 3) {
      elementso <<= Math.min(1, Math.abs((bangI == String.fromCharCode(113,0) ? parseInt(`${iconsubssuccess4}`) : bangI.length)));
   }
   for (let f = 0; f < 3; f++) {
       let redgoalV = String.fromCharCode(116,104,101,111,114,97,0);
       let libswscaleq = 0.0;
       let iconpointscore2 = 1;
       let libavfilterP: Map<any, any> = new Map([[String.fromCharCode(115,116,97,121,0),String.fromCharCode(112,114,111,116,111,99,111,108,0)], [String.fromCharCode(108,97,122,105,108,121,0),String.fromCharCode(122,95,57,55,95,112,104,97,115,101,0)]]);
      let phoneK = 5956769.0 <= libswscaleq;
      do {
         libswscaleq -= 2 << (Math.min(4, redgoalV.length));
         if (phoneK) {
            break;
         }
      } while (phoneK && (Array.from(libavfilterP.keys()).includes(`${libswscaleq}`)));
         libavfilterP.set(`${iconpointscore2}`, 3);
         libswscaleq *= libavfilterP.size;
         libswscaleq += libavfilterP.size;
         libswscaleq += iconpointscore2 + libavfilterP.size;
       let result8 = String.fromCharCode(115,116,114,107,0);
      let cornert = libswscaleq <= 9344214.0;
      do {
          let typingloading1 = 0.0;
          let moreR = 0.0;
          let defaultteam_ = 4.0;
          let questicon9 = String.fromCharCode(115,104,114,117,110,107,0);
          let accepted2: Array<any> = [663, 852];
         libswscaleq += parseInt(`${moreR}`) + accepted2.length;
         typingloading1 -= parseFloat(`${2}`);
         moreR *= (parseFloat(`${questicon9 == String.fromCharCode(114,0) ? questicon9.length : parseInt(`${defaultteam_}`)}`));
         defaultteam_ -= parseFloat(`${parseInt(`${typingloading1}`)}`);
         accepted2.push(1 * parseInt(`${defaultteam_}`));
         if (cornert) {
            break;
         }
      } while ((3.30 >= (redgoalV.length - libswscaleq)) && cornert);
          let dicelogov = String.fromCharCode(104,116,109,108,109,97,114,107,117,112,95,115,95,56,48,0);
          let topicq = String.fromCharCode(114,101,116,114,97,110,115,109,105,115,115,105,111,110,0);
         result8 += `${topicq.length & 1}`;
         dicelogov = `${(String.fromCharCode(110,0) == dicelogov ? dicelogov.length : dicelogov.length)}`;
         topicq = `${(String.fromCharCode(90,0) == dicelogov ? dicelogov.length : dicelogov.length)}`;
         redgoalV += "1";
       let iconwatchB = String.fromCharCode(100,101,108,97,95,108,95,57,56,0);
      for (let n = 0; n < 1; n++) {
         iconwatchB = `${(String.fromCharCode(73,0) == redgoalV ? redgoalV.length : parseInt(`${libswscaleq}`))}`;
      }
      while (iconwatchB.length < result8.length) {
         result8 = `${1 & result8.length}`;
         break;
      }
      shareE = "3 & iconpointscore2";
   }
   let upgrade_ = iconsubssuccess4 >= 8271714.0;
   do {
       let inactived = String.fromCharCode(115,105,109,112,108,101,116,97,103,95,108,95,52,49,0);
          let playershirt1: Array<any> = [String.fromCharCode(116,116,114,105,98,117,116,101,100,0), String.fromCharCode(101,120,112,97,110,115,105,111,110,0)];
         inactived = `${3 << (Math.min(2, playershirt1.length))}`;
          let injuryY: Map<any, any> = new Map([[String.fromCharCode(99,101,108,116,95,53,95,52,48,0),746], [String.fromCharCode(100,120,103,105,0),117]]);
         inactived += `${injuryY.size}`;
      for (let n = 0; n < 1; n++) {
         inactived = `${(inactived == String.fromCharCode(103,0) ? inactived.length : inactived.length)}`;
      }
      iconsubssuccess4 *= 1 | materialn.length;
      if (upgrade_) {
         break;
      }
   } while (((5.7 - iconsubssuccess4) < 1.65) && upgrade_);
   if (component0.includes(`${register_si5}`)) {
      component0 = `${parseInt(`${windw}`) - starK.size}`;
   }
   while (3 > (parseInt(`${register_si5}`) - elementso) || 2.32 > (4.57 - register_si5)) {
       let combinedH = String.fromCharCode(111,110,116,114,111,108,0);
       let iconviewergifS = 1.0;
       let predictionarrowK = String.fromCharCode(104,99,115,99,97,108,101,0);
       let subbasketballplayer6: Array<any> = [599, 74];
          let vinit_nbw = String.fromCharCode(97,117,116,111,114,101,118,101,114,115,101,100,0);
          let libcrashsdkP = 1.0;
          let downloaderT = String.fromCharCode(100,111,117,98,108,101,115,0);
         predictionarrowK += `${parseInt(`${libcrashsdkP}`) * downloaderT.length}`;
         vinit_nbw += `${vinit_nbw.length}`;
         libcrashsdkP /= Math.max(2 + vinit_nbw.length, 5);
       let iconwechats = 5.0;
       let unselectedu = false;
          let kick5 = true;
          let selectionS = String.fromCharCode(112,95,50,50,95,115,116,114,101,97,109,105,110,103,0);
          let canvask = 3.0;
         iconwechats += parseFloat(`${selectionS.length}`);
         kick5 = 8.6 >= canvask || kick5;
         selectionS += `${(parseInt(`${canvask}`) / (Math.max(10, (kick5 ? 5 : 2))))}`;
         iconviewergifS += 3;
      let loadingspinnerH = predictionarrowK == String.fromCharCode(50,120,98,54,122,52,104,113,0);
      do {
          let libavcodecz = 0;
         predictionarrowK += `${(parseInt(`${iconwechats}`) & (unselectedu ? 2 : 5))}`;
         libavcodecz |= libavcodecz;
         if (loadingspinnerH) {
            break;
         }
      } while ((predictionarrowK.length < 2) && loadingspinnerH);
          let iconcalendar7 = String.fromCharCode(112,97,115,115,116,104,114,111,117,103,104,0);
         unselectedu = 84.52 == iconviewergifS;
         iconcalendar7 += `${iconcalendar7.length}`;
          let bellreminderI = 0;
          let bgvipxvodC = String.fromCharCode(122,95,49,51,95,104,101,114,101,0);
          let libyogaf = 0.0;
         combinedH += `${bellreminderI}`;
         bellreminderI /= Math.max(4, bgvipxvodC.length ^ 2);
         bgvipxvodC += `${parseInt(`${libyogaf}`) - 2}`;
         libyogaf *= parseFloat(`${2}`);
      for (let v = 0; v < 1; v++) {
          let whistleg = 5.0;
          let empty7 = 3;
         iconwechats *= parseFloat(`${2 * predictionarrowK.length}`);
         whistleg /= Math.max(4, 2);
         empty7 -= parseInt(`${whistleg}`);
      }
      if ((iconviewergifS + 5.98) >= 4.26) {
         subbasketballplayer6.push(parseInt(`${iconwechats}`));
      }
          let eyeclosei: Array<any> = [570, 566];
          let searchbarM = 4.0;
          let attributedstringW = String.fromCharCode(110,111,116,105,102,105,101,100,0);
         subbasketballplayer6.push(1);
         eyeclosei = [1];
         searchbarM /= Math.max((parseFloat(`${String.fromCharCode(113,0) == attributedstringW ? eyeclosei.length : attributedstringW.length}`)), 5);
          let yingP: Array<any> = [666, 330];
          let awayf: Array<any> = [929, 86, 868];
         iconwechats *= parseFloat(`${2 >> (Math.min(1, combinedH.length))}`);
         yingP = [2];
         awayf = [yingP.length];
      register_si5 += parseFloat(`${starK.size}`);
      break;
   }
    return;
  }, []);

  return (
    <ScreenContainer containerStyle={{ paddingLeft: 0, paddingRight: 0 }}>
      <BecomeVipOverlay
        setShowBecomeVIPOverlay={setShowBecomeVIPOverlay}
        showBecomeVIPOverlay={showBecomeVIPOverlay}
        selectedTab="linkOther"
      />

      <View
        style={{
          backgroundColor: colors.background,
          paddingLeft: spacing.sideOffset,
          
          paddingRight: spacing.sideOffset + 90,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingVertical: 8,
        }}
      >
        <Text
          style={{
            ...textVariants.bigHeader,
            color: colors.text,
            fontSize: 22,
            ...styles.header,
          }}
        >
          体育
        </Text>

        <TouchableOpacity
          activeOpacity={!yysIconstar.isVip(userState.user)
            ? 0.5
            : 1
          }
          onPress={() => {
            if (!yysIconstar.isVip(userState.user)) {
              setShowBecomeVIPOverlay(true);
            }
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#222327",
              paddingHorizontal: 10,
              borderRadius: 30,
              paddingVertical: 5,
              position: "relative",
              top: 5,
            }}
          >
            <Image
              style={styles.iconStyle}
              source={require("../../../../static/images/profile/canvasLibloggerReddownarrow.png")}
            />

            {!yysIconstar.isVip(userState.user) ? (
              <Text
                style={{
                  color: colors.text,
                  fontSize: 14,
                }}
              >
                成为VIP
              </Text>
            ) : (
              <Text
                style={{
                  color: colors.text,
                  fontSize: 14,
                }}
              >
                VIP {vipRemainingDay}天
              </Text>
            )}
          </View>
        </TouchableOpacity>
      </View>

      {matchTabs && matchTabs.length > 0 && !isOffline && (
        <MatchScheduleNav
          setShowBecomeVIPOverlay={setShowBecomeVIPOverlay}
          tabList={matchTabs}
        />
      )}

      {isOffline && <NoConnection onClickRetry={checkConnection} />}
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
  },
  loading: {
    flexDirection: "row",
    justifyContent: "center",
    flex: 1,
  },
  nav: {
    flexGrow: 1,
    justifyContent: "center",
    marginBottom: 10,
  },
  iconStyle: {
    height: 18,
    width: 18,
    marginRight: 5,
  },
});
