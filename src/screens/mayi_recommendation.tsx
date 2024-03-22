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
  ImageBackground,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";
import ScreenContainer from "../components/container/mayi_save";
import { useFocusEffect, useTheme } from "@react-navigation/native";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

import {
  BottomTabScreenProps,
  useBottomTabBarHeight,
} from "@react-navigation/bottom-tabs";
import { API_DOMAIN, MATCH_API_DOMAIN } from "@utility/mayi_middleware_apps";
import Animated from "react-native-reanimated";
import FastImage from "react-native-fast-image";
import mayi_Analytics from "../Sports/middleware/mayi_plash_basketballtrophy";
import { Url } from "../Sports/middleware/mayi_countdown_videovar";

import MatchScheduleNavVip from "../Sports/components/matchSchedule/mayi_fill_strings";
import NoConnection from "../components/common/mayi_backicon_penalty";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";

import { useAppSelector, useSelector } from "@hooks/mayi_redirect";
import { mayi_Libapminsightb } from "@redux/mayi_live_tumbnail";
import { useDispatch } from "react-redux";
import BecomeVipOverlay from "../components/modal/mayi_apps";
import { mayi_InjuryNewinterstitial } from "@redux/reducers/mayi_libavcodec_nativeex";
import mayi_push from "../../Umeng/mayi_push";
import XvodTabIcon from "@static/images/commentIconqq.svg";
import SportTabIcon from "@static/images/largesoundStationsLogin.svg";
import XVodTab from "./VipPrivilege/mayi_entry_cancel";
import { screenModel } from "@type/mayi_libfolly_inouttargetred";
import {
  disableAdultMode,
  setAutoSelectSport,
  showAdultModeDisclaimer,
} from "@redux/actions/mayi_iconorientation_chatroombackground";
import { BlurView } from "../components/blurView";
import { mayi_Librrc } from "../../mayi_gift";
import VipEntry from '@static/images/splash/greenPackage_5dAction.svg';
import { mayi_Baseline } from "@redux/reducers/mayi_chatroombackground_unlock";
import { mayi_Gift } from "@models/mayi_libjsinspector";
interface mayi_Libhermes {
  has_submenu: boolean;
  ids: Array<number>;
  type: string;
}

export default ({ navigation }: BottomTabScreenProps<any>) => {
  const showSport = (mayi_Librrc.instance.tabConfig != null && mayi_Librrc.instance.len == 5)
  const { textVariants, colors, spacing } = useTheme();
  const [isOffline, setIsOffline] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const dispatch = useDispatch();
  const [showBecomeVIPOverlay, setShowBecomeVIPOverlay] = useState(false);
  const userState = useSelector<mayi_Baseline>('userReducer');
  const settingsReducer: mayi_InjuryNewinterstitial = useAppSelector(
    ({ settingsReducer }: mayi_Libapminsightb) => settingsReducer
  );

  const screenState: screenModel = useAppSelector(
    ({ screenReducer }) => screenReducer
  );

  const [selectedTab, setSelectedTab] = useState(showSport ? 'sport' : screenState.showAdultTab ? 'xvod' : null);

  const handleRejectEighteenPlus = () => {
       let connectionR = true;
    let ranka: Array<any> = [905, 471];
    let customK = true;
    let albumb: Array<any> = [206, 611];
    let short_sW: Map<any, any> = new Map([[String.fromCharCode(98,97,108,97,110,99,101,115,95,105,95,50,54,0),317], [String.fromCharCode(117,95,55,56,95,110,111,99,104,101,99,107,0),745], [String.fromCharCode(120,95,50,51,95,112,108,97,116,102,111,114,109,115,0),56]]);
    let mbnativeP: Array<any> = [991, 337];
    let rewardvideox = String.fromCharCode(115,112,101,99,105,102,105,101,100,95,121,95,53,48,0);
    let qnewinterstitialZ = 2;
   if ((5 >> (Math.min(3, albumb.length))) >= 1) {
      albumb.push(rewardvideox.length);
   }
   while (connectionR) {
      ranka = [3 >> (Math.min(1, rewardvideox.length))];
      break;
   }
   for (let z = 0; z < 3; z++) {
      customK = ranka.includes(customK);
   }
   while (4 == (ranka.length / 4)) {
       let flipperG = 0.0;
       let mimor = String.fromCharCode(103,95,54,57,95,108,97,122,121,0);
       let release_5m9 = String.fromCharCode(101,120,99,101,101,100,101,100,95,121,95,50,48,0);
       let nativeh = String.fromCharCode(100,115,117,98,101,120,112,95,102,95,55,48,0);
       let imagenetworkerrg = 3;
      if (!mimor.startsWith(`${nativeh.length}`)) {
         nativeh += `${(nativeh == String.fromCharCode(71,0) ? nativeh.length : release_5m9.length)}`;
      }
      while (3.76 == (release_5m9.length - flipperG)) {
         flipperG *= imagenetworkerrg - mimor.length;
         break;
      }
      for (let z = 0; z < 2; z++) {
         flipperG += 2;
      }
      for (let e = 0; e < 1; e++) {
          let matchinactiveJ = true;
         release_5m9 += `${parseInt(`${flipperG}`)}`;
         matchinactiveJ = (!matchinactiveJ ? matchinactiveJ : matchinactiveJ);
      }
         nativeh += `${(String.fromCharCode(76,0) == nativeh ? imagenetworkerrg : nativeh.length)}`;
          let libjsi7 = 4.0;
         flipperG -= nativeh.length;
         libjsi7 /= Math.max(2, 3);
       let referrerD = 5;
         referrerD += referrerD ^ imagenetworkerrg;
         referrerD <<= Math.min(Math.abs(release_5m9.length / (Math.max(2, 1))), 4);
          let gmailY: Array<any> = [4, 947];
          let binddatas6 = String.fromCharCode(115,117,112,101,114,98,108,111,99,107,115,95,104,95,56,48,0);
         flipperG += nativeh.length | release_5m9.length;
         gmailY.push(binddatas6.length | gmailY.length);
         binddatas6 += `${gmailY.length}`;
         imagenetworkerrg -= 2 & mimor.length;
         mimor = `${referrerD * 2}`;
      for (let i = 0; i < 2; i++) {
         imagenetworkerrg >>= Math.min(5, Math.abs(release_5m9.length & 1));
      }
         referrerD += mimor.length ^ 2;
      let backiconM = mimor.length >= 8089682;
      do {
         mimor = `${mimor.length & release_5m9.length}`;
         if (backiconM) {
            break;
         }
      } while (backiconM && (2 == (1 * mimor.length)));
      ranka.push(2 + short_sW.size);
      break;
   }
   for (let l = 0; l < 3; l++) {
       let uploadz = String.fromCharCode(116,104,114,101,115,104,95,51,95,52,52,0);
       let appsV = String.fromCharCode(102,108,111,97,116,105,110,103,95,115,95,55,54,0);
       let tooltips4 = 5.0;
       let splashv = 1.0;
          let mbnativeadvanced_ = 0.0;
         splashv *= parseFloat(`${appsV.length - 2}`);
         mbnativeadvanced_ += parseFloat(`${parseInt(`${mbnativeadvanced_}`) / 1}`);
         tooltips4 *= 2 >> (Math.min(3, Math.abs(parseInt(`${tooltips4}`))));
      let hometeamfieldR = splashv >= 5825130.0;
      do {
          let form7 = false;
          let arrowM = String.fromCharCode(121,95,55,53,95,100,115,100,112,99,109,0);
          let formm = String.fromCharCode(115,116,114,101,116,99,104,95,108,95,57,48,0);
          let catalogo: Array<any> = [845, 747, 93];
         splashv /= Math.max(parseFloat(`${appsV.length * catalogo.length}`), 1);
         form7 = arrowM.length >= formm.length;
         arrowM += `${3 & formm.length}`;
         catalogo.push((formm.length >> (Math.min(1, Math.abs((form7 ? 5 : 1))))));
         if (hometeamfieldR) {
            break;
         }
      } while (hometeamfieldR && ((1.0 - tooltips4) > 5.42 && (tooltips4 - splashv) > 1.0));
         splashv *= parseFloat(`${parseInt(`${tooltips4}`)}`);
          let iconV = 1;
          let privatechatbgx: Map<any, any> = new Map([[String.fromCharCode(116,95,54,50,95,115,97,108,115,97,0),String.fromCharCode(112,95,56,54,95,115,105,109,117,108,97,116,105,111,110,0)], [String.fromCharCode(98,97,99,107,119,97,114,100,95,109,95,53,49,0),String.fromCharCode(104,95,57,53,95,99,116,111,114,0)], [String.fromCharCode(108,95,53,48,95,116,103,101,116,0),String.fromCharCode(98,105,116,95,57,95,53,56,0)]]);
         uploadz += `${iconV | 3}`;
         iconV /= Math.max(privatechatbgx.size, 4);
         privatechatbgx.set(`${privatechatbgx.size}`, privatechatbgx.size % (Math.max(privatechatbgx.size, 1)));
         tooltips4 /= Math.max(uploadz.length, 3);
         splashv -= parseFloat(`${parseInt(`${tooltips4}`)}`);
         appsV += "3";
      connectionR = (60 >= ((!connectionR ? 60 : appsV.length) % (Math.max(appsV.length, 2))));
   }
   let constantsR = customK ? !customK : customK;
   do {
      customK = !connectionR && rewardvideox.length <= 1;
      if (constantsR) {
         break;
      }
   } while ((!rewardvideox.includes(`${customK}`)) && constantsR);
   for (let o = 0; o < 3; o++) {
      albumb.push(albumb.length << (Math.min(Math.abs(2), 2)));
   }
      rewardvideox += `${short_sW.size}`;
   while (rewardvideox.includes(`${mbnativeP.length}`)) {
       let chinasamet = String.fromCharCode(117,110,114,101,102,99,111,117,110,116,95,120,95,57,52,0);
       let headerh = String.fromCharCode(104,95,55,50,95,114,100,118,111,0);
       let injuryY = String.fromCharCode(114,98,115,112,95,98,95,54,0);
       let imagemanager6 = true;
       let uploadv = String.fromCharCode(97,95,51,56,95,110,108,109,101,97,110,115,0);
      if (imagemanager6) {
         imagemanager6 = chinasamet.length == injuryY.length;
      }
      let eighteent = 7955773 >= uploadv.length;
      do {
         uploadv += `${2 - injuryY.length}`;
         if (eighteent) {
            break;
         }
      } while (eighteent && (headerh.length <= 1 && uploadv.length <= 1));
          let viewert = String.fromCharCode(100,101,99,111,114,97,116,101,95,120,95,49,52,0);
          let nterstitialb = String.fromCharCode(118,95,52,48,95,117,116,112,117,116,0);
          let penaltyshootF = String.fromCharCode(114,95,55,51,95,102,111,117,114,0);
         injuryY += "3";
         viewert = "2";
         nterstitialb = `${nterstitialb.length}`;
         penaltyshootF += "2";
      while (headerh.startsWith(chinasamet)) {
         headerh = `${3 - chinasamet.length}`;
         break;
      }
         headerh = `${(headerh == String.fromCharCode(50,0) ? injuryY.length : headerh.length)}`;
         injuryY = `${(String.fromCharCode(66,0) == injuryY ? (imagemanager6 ? 3 : 5) : injuryY.length)}`;
      for (let w = 0; w < 3; w++) {
         imagemanager6 = ((uploadv.length >> (Math.min(1, Math.abs((imagemanager6 ? uploadv.length : 2))))) < 2);
      }
       let borderless7 = String.fromCharCode(97,117,116,104,111,114,105,122,101,95,50,95,56,54,0);
       let mimot = String.fromCharCode(115,115,101,100,105,102,102,95,116,95,50,49,0);
      for (let y = 0; y < 2; y++) {
          let connectiong = String.fromCharCode(97,99,99,101,112,116,101,100,95,107,95,51,50,0);
          let animations5 = String.fromCharCode(121,95,51,56,95,112,108,117,114,97,108,0);
          let thumbnailn = 5.0;
          let viewerJ = 1.0;
          let foregroundZ: Map<any, any> = new Map([[String.fromCharCode(115,116,111,112,112,105,110,103,95,48,95,53,51,0),177], [String.fromCharCode(98,108,105,116,95,54,95,49,55,0),929]]);
         uploadv = `${(String.fromCharCode(113,0) == animations5 ? animations5.length : headerh.length)}`;
         connectiong = `${parseInt(`${viewerJ}`) + parseInt(`${thumbnailn}`)}`;
         thumbnailn += parseFloat(`${parseInt(`${viewerJ}`)}`);
         foregroundZ = new Map([[`${foregroundZ.size}`, foregroundZ.size * connectiong.length]]);
      }
      while (!headerh.endsWith(injuryY)) {
         injuryY = `${(headerh == String.fromCharCode(107,0) ? headerh.length : mimot.length)}`;
         break;
      }
      if (4 < uploadv.length) {
         uploadv += `${uploadv.length / (Math.max(3, headerh.length))}`;
      }
      let watchH = 4997289 >= mimot.length;
      do {
         mimot = `${(String.fromCharCode(55,0) == chinasamet ? borderless7.length : chinasamet.length)}`;
         if (watchH) {
            break;
         }
      } while ((3 >= mimot.length || chinasamet.length >= 3) && watchH);
          let xvodt = 4.0;
         injuryY = `${(String.fromCharCode(121,0) == uploadv ? uploadv.length : parseInt(`${xvodt}`))}`;
         borderless7 += `${injuryY.length << (Math.min(headerh.length, 2))}`;
       let matchesX = 1.0;
      rewardvideox = `${injuryY.length}`;
      break;
   }
   for (let v = 0; v < 3; v++) {
       let pangleC: Array<any> = [548, 995, 765];
       let scrollviewc = 4.0;
       let langkeyk: Map<any, any> = new Map([[String.fromCharCode(115,116,101,114,101,111,100,95,116,95,54,55,0),String.fromCharCode(109,95,49,52,95,105,110,116,101,114,112,111,108,0)], [String.fromCharCode(119,95,52,55,95,114,101,110,101,119,97,98,108,101,0),String.fromCharCode(97,95,56,51,95,115,97,105,111,0)], [String.fromCharCode(98,95,56,53,95,99,111,108,111,114,101,100,0),String.fromCharCode(97,100,100,107,101,121,95,122,95,50,52,0)]]);
       let reportt = 2.0;
       let forwardJ = String.fromCharCode(115,116,97,107,101,95,50,95,56,56,0);
         reportt /= Math.max(langkeyk.size << (Math.min(Math.abs(2), 4)), 3);
       let descl = String.fromCharCode(108,97,121,101,114,99,111,110,116,101,120,116,95,121,95,57,54,0);
       let detailsV = String.fromCharCode(115,101,108,101,99,116,105,118,101,108,121,95,119,95,54,49,0);
       let statisticsI = String.fromCharCode(104,95,52,50,95,99,114,101,97,116,111,114,115,0);
         langkeyk.set(detailsV, parseInt(`${scrollviewc}`));
          let readv = String.fromCharCode(100,101,97,99,116,105,118,97,116,105,111,110,95,113,95,49,52,0);
          let taiwan2 = true;
          let vcopy_l8 = String.fromCharCode(108,95,52,53,95,107,118,111,0);
         scrollviewc += descl.length;
         readv += `${readv.length % 2}`;
         taiwan2 = taiwan2 && vcopy_l8.length <= 70;
         vcopy_l8 = `${(String.fromCharCode(112,0) == readv ? (taiwan2 ? 3 : 5) : readv.length)}`;
       let register_x4 = String.fromCharCode(110,97,118,105,103,97,116,101,100,95,108,95,54,52,0);
         descl = `${parseInt(`${reportt}`) >> (Math.min(register_x4.length, 2))}`;
          let iconscheduleu = String.fromCharCode(101,95,54,54,95,116,101,120,116,98,111,120,0);
          let tailW = 0.0;
         langkeyk = new Map([[`${langkeyk.size}`, 2]]);
         iconscheduleu = `${(String.fromCharCode(110,0) == iconscheduleu ? iconscheduleu.length : parseInt(`${tailW}`))}`;
         tailW += iconscheduleu.length + parseInt(`${tailW}`);
          let moduley = String.fromCharCode(108,111,116,115,95,56,95,56,0);
          let giftv: Map<any, any> = new Map([[String.fromCharCode(111,112,117,115,108,97,99,105,110,103,95,121,95,50,0),String.fromCharCode(98,105,97,115,101,100,95,103,95,55,51,0)], [String.fromCharCode(100,111,119,110,95,113,95,49,48,0),String.fromCharCode(115,95,55,95,110,101,115,116,0)], [String.fromCharCode(100,105,116,97,98,108,101,95,48,95,49,51,0),String.fromCharCode(103,95,54,55,95,104,117,102,102,0)]]);
          let ycopy_aw = String.fromCharCode(102,101,111,102,95,51,95,53,56,0);
         detailsV = `${detailsV.length + 2}`;
         moduley = `${(ycopy_aw == String.fromCharCode(83,0) ? ycopy_aw.length : moduley.length)}`;
         giftv = new Map([[ycopy_aw, moduley.length]]);
       let with_qB = 3.0;
       let giftA = 3.0;
         reportt -= (String.fromCharCode(120,0) == detailsV ? detailsV.length : parseInt(`${reportt}`));
      while (detailsV.length == forwardJ.length) {
         detailsV = `${pangleC.length}`;
         break;
      }
          let plus9: Map<any, any> = new Map([[String.fromCharCode(101,110,99,111,100,101,114,115,95,53,95,52,53,0),String.fromCharCode(115,97,118,105,110,103,115,95,55,95,54,50,0)], [String.fromCharCode(109,95,55,50,95,109,98,115,101,103,109,101,110,116,97,116,105,111,110,0),String.fromCharCode(112,101,114,115,111,110,115,95,119,95,56,49,0)]]);
          let informationq: Array<any> = [530, 122, 938];
         pangleC = [3];
         plus9 = new Map([[`${plus9.size}`, informationq.length >> (Math.min(2, Math.abs(plus9.size)))]]);
         informationq = [plus9.size ^ informationq.length];
      let predictionbannersharedB = langkeyk.size <= 5433992;
      do {
         langkeyk.set(`${with_qB}`, descl.length);
         if (predictionbannersharedB) {
            break;
         }
      } while ((!Array.from(langkeyk.keys()).includes(`${reportt}`)) && predictionbannersharedB);
      if (forwardJ != String.fromCharCode(98,0) && descl.length == 2) {
         descl = `${2 << (Math.min(2, register_x4.length))}`;
      }
      rewardvideox = `${forwardJ.length}`;
   }
      short_sW.set(`${ranka.length}`, 1 >> (Math.min(4, albumb.length)));
      ranka.push(((connectionR ? 3 : 3) >> (Math.min(Math.abs(3), 4))));
   if (4 > (mbnativeP.length % (Math.max(6, short_sW.size))) && 4 > (mbnativeP.length % (Math.max(short_sW.size, 6)))) {
       let targeto = 4.0;
       let teamJ = 2.0;
       let episodesZ = 3;
       let floatingz = 1.0;
       let typingX = 3;
       let backwhiteq = true;
       let manifestd = true;
         teamJ -= (parseFloat(`${(manifestd ? 2 : 5) | parseInt(`${teamJ}`)}`));
       let helperJ = String.fromCharCode(114,95,54,56,95,103,115,116,114,105,110,103,0);
       let styles = String.fromCharCode(102,95,55,56,95,105,109,112,111,114,116,115,0);
       let nativeS = 1;
       let matcho = 3;
         styles += `${parseInt(`${floatingz}`)}`;
         typingX += matcho;
         floatingz += ((manifestd ? 3 : 3) >> (Math.min(Math.abs(1), 2)));
      for (let h = 0; h < 3; h++) {
         styles = "3";
      }
       let leagueK: Array<any> = [408, 212, 289];
       let forwarda: Array<any> = [657, 836, 924];
      let gradle3 = String.fromCharCode(98,99,113,57,0) == helperJ;
      do {
         helperJ = `${1 + helperJ.length}`;
         if (gradle3) {
            break;
         }
      } while (gradle3 && ((helperJ.length - parseInt(`${targeto}`)) >= 3 && (helperJ.length - parseInt(`${targeto}`)) >= 3));
      if (matcho > 1) {
          let navigationM = String.fromCharCode(107,95,55,57,95,100,101,99,114,101,97,115,101,0);
          let zhengpian8 = String.fromCharCode(98,100,119,110,95,97,95,49,55,0);
         backwhiteq = 36.36 < targeto;
         navigationM += `${(String.fromCharCode(99,0) == navigationM ? zhengpian8.length : navigationM.length)}`;
         zhengpian8 = `${(navigationM == String.fromCharCode(82,0) ? zhengpian8.length : navigationM.length)}`;
      }
      for (let q = 0; q < 2; q++) {
         manifestd = forwarda.length >= 6;
      }
      while (leagueK.includes(nativeS)) {
          let siden = String.fromCharCode(115,116,97,114,116,105,110,103,95,100,95,49,53,0);
          let basketballplayerplaceholderc = 0.0;
         leagueK = [1 % (Math.max(5, parseInt(`${targeto}`)))];
         siden += `${siden.length}`;
         basketballplayerplaceholderc -= parseFloat(`${parseInt(`${basketballplayerplaceholderc}`) >> (Math.min(siden.length, 1))}`);
         break;
      }
      if (4 > (5 - forwarda.length)) {
         forwarda = [parseInt(`${floatingz}`) | 2];
      }
      let weathero = backwhiteq ? !backwhiteq : backwhiteq;
      do {
         backwhiteq = targeto >= 64.57 && 78 >= styles.length;
         if (weathero) {
            break;
         }
      } while ((1 < episodesZ) && weathero);
      mbnativeP = [3];
   }
   while (3 < (1 ^ mbnativeP.length) || (mbnativeP.length ^ rewardvideox.length) < 1) {
       let iconuserS = true;
         iconuserS = (iconuserS ? !iconuserS : !iconuserS);
         iconuserS = (!iconuserS ? iconuserS : iconuserS);
         iconuserS = (!iconuserS ? !iconuserS : iconuserS);
      mbnativeP = [short_sW.size >> (Math.min(Math.abs(2), 3))];
      break;
   }
   while (!connectionR) {
      connectionR = albumb.includes(ranka[0]);
      break;
   }
       let clockK: Array<any> = [764, 550];
       let twitter2 = String.fromCharCode(101,95,49,49,95,109,97,115,116,101,114,105,110,103,0);
       let arrowe = String.fromCharCode(101,95,49,50,95,100,97,114,119,105,110,0);
          let score4 = String.fromCharCode(110,95,56,56,95,118,109,115,108,0);
          let calendar6 = String.fromCharCode(97,95,52,95,102,97,105,108,105,110,103,0);
         twitter2 += `${3 + twitter2.length}`;
         score4 += `${calendar6.length ^ score4.length}`;
         calendar6 = `${(String.fromCharCode(51,0) == score4 ? score4.length : calendar6.length)}`;
      if (1 < (clockK.length << (Math.min(Math.abs(4), 1))) || 4 < (twitter2.length << (Math.min(5, clockK.length)))) {
         twitter2 = `${clockK.length % (Math.max(5, twitter2.length))}`;
      }
      customK = ranka.includes(connectionR);
      customK = albumb.length <= 47;

    setSelectedTab("libfileHolder");
  };

  useEffect(() => {
    if (screenState.autoSelectSport == true) {
      dispatch(setAutoSelectSport(false));
      setSelectedTab("libfileHolder");
    } 
  }, [screenState.autoSelectSport])

  
  useFocusEffect(useCallback(() => {
    mayi_push.sportViewsAnalytics();
  }, []));
  

  const { data: navOptions, refetch } = useQuery({
    queryKey: ["matchesNavOptions"],
    queryFn: () =>
      mayi_Analytics.call(Url.sportTypes, {}, "GET").then((res): mayi_Libhermes[] => {
        return res.data;
      }),
  });

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
       let predictiondefaultb = String.fromCharCode(108,111,99,107,109,103,114,95,112,95,52,0);
    let close0 = String.fromCharCode(110,101,119,108,105,110,101,115,95,104,95,57,56,0);
    let materialD: Map<any, any> = new Map([[String.fromCharCode(117,95,49,53,95,112,101,99,101,110,116,0),610], [String.fromCharCode(114,100,98,120,95,106,95,51,54,0),93], [String.fromCharCode(109,95,50,48,95,115,121,110,99,115,97,102,101,0),771]]);
    let loadingy = String.fromCharCode(114,102,102,116,105,95,57,95,53,56,0);
    let langkeyK: Map<any, any> = new Map([[String.fromCharCode(110,95,56,49,95,114,103,98,116,101,115,116,0),780], [String.fromCharCode(104,101,105,103,104,116,95,120,95,57,56,0),467]]);
    let zoomW = String.fromCharCode(102,95,51,49,95,97,109,116,0);
    let gesturesP = 1.0;
    let orangep = String.fromCharCode(118,108,99,115,95,99,95,57,53,0);
    let whiteanimationlive7 = 4.0;
    let indicatorZ = String.fromCharCode(115,116,111,112,95,105,95,52,0);
    let greenD = String.fromCharCode(113,95,51,54,95,118,100,112,97,117,0);
   for (let j = 0; j < 1; j++) {
      close0 = `${materialD.size}`;
   }
       let template_gA: Map<any, any> = new Map([[String.fromCharCode(99,111,109,112,111,115,101,100,95,103,95,56,51,0),492], [String.fromCharCode(115,117,98,98,97,110,100,95,99,95,53,55,0),286]]);
       let photou = String.fromCharCode(102,97,115,116,95,115,95,49,56,0);
       let teamq = String.fromCharCode(114,111,111,116,95,113,95,55,52,0);
       let untick3 = 4.0;
      while ((untick3 + 3.65) > 5.39) {
         template_gA.set(`${untick3}`, (teamq == String.fromCharCode(53,0) ? teamq.length : parseInt(`${untick3}`)));
         break;
      }
      while (teamq != String.fromCharCode(117,0)) {
         photou = `${photou.length}`;
         break;
      }
      if ((template_gA.size * teamq.length) < 3 || 5 < (template_gA.size * 3)) {
          let mbsplash9 = 4;
          let miniF: Array<any> = [417, 746, 164];
          let iconstarc: Map<any, any> = new Map([[String.fromCharCode(105,115,108,111,119,95,56,95,55,51,0),720], [String.fromCharCode(112,95,56,53,95,108,105,109,105,116,97,116,105,111,110,0),810]]);
         teamq += `${parseInt(`${untick3}`)}`;
         mbsplash9 ^= iconstarc.size >> (Math.min(miniF.length, 5));
         miniF = [iconstarc.size & miniF.length];
      }
         photou += `${parseInt(`${untick3}`) >> (Math.min(photou.length, 3))}`;
         untick3 /= Math.max(1, (photou == String.fromCharCode(73,0) ? photou.length : template_gA.size));
          let hometeamfieldA = 5.0;
         untick3 -= photou.length;
         hometeamfieldA += parseInt(`${hometeamfieldA}`);
      for (let i = 0; i < 3; i++) {
         photou += `${2 * teamq.length}`;
      }
          let fullscreenminz: Array<any> = [622, 796, 173];
          let ballK: Array<any> = [String.fromCharCode(98,95,50,51,95,110,116,102,115,0), String.fromCharCode(117,95,51,55,95,109,101,97,115,117,114,101,0)];
          let handlerN = 4.0;
         photou = `${fullscreenminz.length / (Math.max(photou.length, 3))}`;
         fullscreenminz = [ballK.length];
         ballK = [2];
         handlerN += parseFloat(`${1 >> (Math.min(Math.abs(parseInt(`${handlerN}`)), 2))}`);
      indicatorZ = "1";
       let thumbnailw = true;
       let graphI = String.fromCharCode(103,95,56,50,95,111,108,100,108,105,115,116,0);
       let unselectedl: Array<any> = [String.fromCharCode(113,95,51,57,95,116,105,108,116,0), String.fromCharCode(108,101,97,102,95,49,95,50,57,0), String.fromCharCode(115,105,109,112,108,101,116,105,109,101,111,117,116,95,120,95,53,52,0)];
      if (2 == graphI.length) {
         thumbnailw = !thumbnailw;
      }
          let regengN = 5.0;
          let soundD = true;
         thumbnailw = unselectedl.includes(thumbnailw);
         regengN *= parseInt(`${regengN}`) - 1;
         soundD = regengN <= 74.4 || soundD;
         graphI += "3";
         graphI = `${((thumbnailw ? 2 : 4))}`;
      while (!thumbnailw) {
         thumbnailw = !thumbnailw;
         break;
      }
         graphI += `${unselectedl.length & 2}`;
      while ((unselectedl.length >> (Math.min(graphI.length, 2))) > 4 && 4 > (unselectedl.length >> (Math.min(graphI.length, 1)))) {
          let awayteamfieldt = 4;
          let libavcodecB = String.fromCharCode(106,95,52,51,95,99,97,110,99,101,108,97,98,108,101,0);
         unselectedl = [graphI.length];
         awayteamfieldt &= libavcodecB.length ^ 3;
         libavcodecB = `${libavcodecB.length}`;
         break;
      }
      while (3 <= unselectedl.length) {
          let modeX = String.fromCharCode(105,110,99,108,117,115,105,111,110,95,104,95,54,50,0);
          let windy = 5;
         graphI += `${windy}`;
         modeX += `${modeX.length & 2}`;
         windy >>= Math.min(2, modeX.length);
         break;
      }
      while (graphI.length > 2 || !thumbnailw) {
         thumbnailw = (17 > ((thumbnailw ? 17 : graphI.length) | graphI.length));
         break;
      }
      close0 += `${indicatorZ.length}`;
   for (let m = 0; m < 2; m++) {
      whiteanimationlive7 *= zoomW.length & predictiondefaultb.length;
   }
       let reactw: Array<any> = [790, 646, 705];
       let videovarc = 4.0;
       let modulej = String.fromCharCode(100,101,102,105,110,101,100,95,115,95,49,50,0);
      while ((videovarc / (Math.max(2, parseFloat(`${modulej.length}`)))) > 4.76) {
         modulej = `${parseInt(`${videovarc}`) >> (Math.min(modulej.length, 2))}`;
         break;
      }
         videovarc *= parseFloat(`${1}`);
      for (let k = 0; k < 2; k++) {
         reactw.push(1);
      }
         videovarc += parseFloat(`${parseInt(`${videovarc}`)}`);
      while ((videovarc - 5.13) > 4.92) {
         videovarc *= parseFloat(`${reactw.length}`);
         break;
      }
          let footballfieldK = String.fromCharCode(115,97,109,112,108,101,95,100,95,50,48,0);
          let splashI = 2.0;
         videovarc *= parseFloat(`${reactw.length >> (Math.min(Math.abs(3), 3))}`);
         footballfieldK += `${(String.fromCharCode(100,0) == footballfieldK ? footballfieldK.length : parseInt(`${splashI}`))}`;
         splashI /= Math.max(4, parseFloat(`${1 | parseInt(`${splashI}`)}`));
          let mail0 = String.fromCharCode(109,105,100,110,105,103,104,116,95,119,95,49,55,0);
          let v_lockl = String.fromCharCode(111,95,52,53,95,104,97,110,103,117,112,0);
         reactw.push(modulej.length - 3);
         mail0 += `${mail0.length}`;
         v_lockl += `${mail0.length - 1}`;
         modulej = `${reactw.length}`;
         videovarc += parseFloat(`${modulej.length}`);
      zoomW += "3";
   if ((close0.length | materialD.size) <= 5 || (close0.length | 5) <= 4) {
      close0 += `${orangep.length}`;
   }
   for (let g = 0; g < 1; g++) {
      gesturesP += predictiondefaultb.length ^ orangep.length;
   }

    const state = await NetInfo.fetch();

   let mbbids = loadingy.length >= 7927330;
   do {
       let progressR = String.fromCharCode(108,111,110,103,110,111,105,115,101,95,121,95,55,48,0);
      let leftQ = 5378551 <= progressR.length;
      do {
          let awayX: Array<any> = [791, 815, 91];
          let combineQ = 4;
         progressR = `${(progressR == String.fromCharCode(70,0) ? progressR.length : combineQ)}`;
         awayX.push(awayX.length >> (Math.min(Math.abs(2), 1)));
         combineQ >>= Math.min(awayX.length, 5);
         if (leftQ) {
            break;
         }
      } while (leftQ && (progressR.length < 3));
       let moonv = String.fromCharCode(105,95,56,55,95,115,116,111,114,109,98,105,114,100,0);
       let klevin7 = String.fromCharCode(110,95,51,51,95,115,105,103,105,100,0);
         moonv = `${(progressR == String.fromCharCode(51,0) ? progressR.length : klevin7.length)}`;
      loadingy += `${parseInt(`${gesturesP}`) ^ 2}`;
      if (mbbids) {
         break;
      }
   } while ((4 < (loadingy.length >> (Math.min(Math.abs(4), 1))) && 4 < (langkeyK.size >> (Math.min(loadingy.length, 2)))) && mbbids);
      gesturesP *= 1 << (Math.min(3, Math.abs(parseInt(`${gesturesP}`))));
       let pathX = 3.0;
       let aboutu = String.fromCharCode(101,95,50,52,95,103,108,111,98,0);
       let inactivea = 0.0;
      if (inactivea == 5.86) {
         inactivea *= parseInt(`${pathX}`);
      }
          let chartg = String.fromCharCode(112,95,57,53,95,115,97,110,115,0);
          let v_view6 = String.fromCharCode(111,98,106,99,95,56,95,53,54,0);
          let downloader7: Array<any> = [984, 495];
         pathX -= v_view6.length % (Math.max(2, 10));
         chartg += `${downloader7.length}`;
         v_view6 += `${chartg.length ^ 2}`;
         downloader7.push(1 ^ downloader7.length);
      if (4.31 <= (inactivea / 4.82)) {
         inactivea -= aboutu.length;
      }
         pathX -= aboutu.length * 2;
          let nalyticsl = String.fromCharCode(110,97,109,101,116,111,105,110,100,101,120,95,109,95,56,48,0);
          let awayT = String.fromCharCode(98,95,56,50,95,118,97,114,105,97,98,108,101,0);
         aboutu += `${nalyticsl.length}`;
         nalyticsl = `${awayT.length % (Math.max(awayT.length, 10))}`;
      orangep += `${loadingy.length | 3}`;
   if (2 < (5 << (Math.min(5, Math.abs(langkeyK.size)))) || 1 < (materialD.size << (Math.min(Math.abs(5), 1)))) {
      langkeyK.set(loadingy, 2);
   }
   for (let i = 0; i < 1; i++) {
       let iconarrowrightorangeQ = String.fromCharCode(112,117,108,115,101,115,98,105,116,115,95,106,95,53,51,0);
       let dependency9 = 0.0;
      if ((dependency9 / (Math.max(iconarrowrightorangeQ.length, 6))) < 1.100) {
         dependency9 *= 1;
      }
       let const_kI = String.fromCharCode(111,95,49,54,95,114,108,111,116,116,105,101,0);
       let ynewsC: Array<any> = [127, 801];
       let showl: Array<any> = [738, 948];
      let iconstaru = 8325142.0 >= dependency9;
      do {
         dependency9 -= ynewsC.length;
         if (iconstaru) {
            break;
         }
      } while (iconstaru && ((1 >> (Math.min(1, ynewsC.length))) < 2));
         const_kI = `${2 & const_kI.length}`;
      for (let a = 0; a < 1; a++) {
         iconarrowrightorangeQ += `${ynewsC.length}`;
      }
      orangep = `${predictiondefaultb.length ^ 2}`;
   }
      loadingy = "1";
   for (let s = 0; s < 2; s++) {
      langkeyK = new Map([[`${materialD.size}`, materialD.size]]);
   }
    const offline = !(state.isConnected && state.isInternetReachable);

      materialD.set(`${langkeyK.size}`, langkeyK.size & 2);
      indicatorZ += `${3 >> (Math.min(3, orangep.length))}`;
      close0 += `${indicatorZ.length}`;
   while (!loadingy.startsWith(`${whiteanimationlive7}`)) {
      whiteanimationlive7 *= 1 + indicatorZ.length;
      break;
   }
       let gradlewZ = String.fromCharCode(118,112,120,100,101,99,95,108,95,54,57,0);
       let giftH = 5.0;
         gradlewZ = `${3 >> (Math.min(3, Math.abs(parseInt(`${giftH}`))))}`;
         gradlewZ = "2";
      while (2.43 <= giftH) {
          let countryE: Array<any> = [498, 44, 314];
          let videom = 4;
          let mbnativeadvancedg = 2.0;
          let iconshareK = String.fromCharCode(112,114,101,109,117,108,116,105,112,108,121,111,102,102,115,101,116,95,98,95,50,49,0);
         giftH += parseFloat(`${gradlewZ.length}`);
         countryE.push(parseInt(`${mbnativeadvancedg}`) * 3);
         videom ^= countryE.length;
         mbnativeadvancedg /= Math.max(5, parseFloat(`${3}`));
         iconshareK = `${parseInt(`${mbnativeadvancedg}`)}`;
         break;
      }
          let airbnbstarm = String.fromCharCode(117,95,50,48,95,115,117,98,112,114,111,99,101,115,115,0);
          let libreactperfloggerjnij: Array<any> = [String.fromCharCode(99,111,110,116,101,120,116,95,97,95,51,55,0), String.fromCharCode(115,95,57,50,95,102,114,101,113,0), String.fromCharCode(99,97,108,108,101,114,95,111,95,50,55,0)];
         giftH /= Math.max(parseFloat(`${airbnbstarm.length}`), 3);
         airbnbstarm = `${libreactperfloggerjnij.length << (Math.min(4, libreactperfloggerjnij.length))}`;
         gradlewZ = `${gradlewZ.length + 3}`;
          let backO = 0;
          let bgvipxvodl = String.fromCharCode(102,97,115,116,116,101,115,116,95,116,95,49,57,0);
          let login_: Map<any, any> = new Map([[String.fromCharCode(97,95,55,49,95,102,105,108,101,114,101,97,100,115,116,114,101,97,109,0),802], [String.fromCharCode(109,105,120,112,97,110,101,108,95,102,95,56,52,0),835]]);
         giftH *= parseFloat(`${bgvipxvodl.length - 3}`);
         backO += backO;
         bgvipxvodl = `${backO >> (Math.min(Math.abs(login_.size), 1))}`;
         login_.set(`${backO}`, backO);
      close0 += `${parseInt(`${giftH}`) ^ gradlewZ.length}`;
   while (!Array.from(langkeyK.values()).includes(whiteanimationlive7)) {
       let giftbuttonz = false;
       let left_ = true;
       let mappingF = 2.0;
       let homeloadingo = 1.0;
      for (let s = 0; s < 2; s++) {
          let basketballmatchdetailbgO: Array<any> = [570, 469, 515];
         giftbuttonz = mappingF <= 43.48 && left_;
         basketballmatchdetailbgO.push(2 << (Math.min(4, basketballmatchdetailbgO.length)));
      }
      if (left_) {
         mappingF /= Math.max(parseInt(`${mappingF}`) - 2, 2);
      }
      while ((5.52 - homeloadingo) < 3.99) {
         left_ = mappingF > 38.40;
         break;
      }
      if (!left_) {
          let penaltyshootnogoald = String.fromCharCode(97,115,121,110,99,104,114,111,110,111,117,115,95,50,95,50,52,0);
          let privilegen = 3;
          let yellowanimationliveM: Array<any> = [String.fromCharCode(109,97,103,110,105,102,105,101,114,95,97,95,55,50,0), String.fromCharCode(100,105,118,105,100,101,95,119,95,54,55,0)];
          let backwhiteH = String.fromCharCode(116,95,49,55,95,109,101,97,115,117,114,101,114,0);
         homeloadingo /= Math.max((penaltyshootnogoald == String.fromCharCode(116,0) ? penaltyshootnogoald.length : (left_ ? 3 : 1)), 3);
         privilegen <<= Math.min(yellowanimationliveM.length, 1);
         yellowanimationliveM = [3];
         backwhiteH += `${privilegen}`;
      }
      while (1.32 < homeloadingo) {
         homeloadingo += (2 << (Math.min(Math.abs((giftbuttonz ? 1 : 4)), 3)));
         break;
      }
      for (let u = 0; u < 1; u++) {
         giftbuttonz = !giftbuttonz && homeloadingo <= 78.18;
      }
          let leaguedetailsbg4 = 4.0;
         left_ = !left_;
         leaguedetailsbg4 -= parseInt(`${leaguedetailsbg4}`) << (Math.min(4, Math.abs(2)));
      while (giftbuttonz) {
         left_ = 43.74 < homeloadingo;
         break;
      }
      let greenI = giftbuttonz ? !giftbuttonz : giftbuttonz;
      do {
         giftbuttonz = !giftbuttonz;
         if (greenI) {
            break;
         }
      } while ((!giftbuttonz) && greenI);
       let balli = String.fromCharCode(97,115,99,111,110,102,95,53,95,52,57,0);
      for (let s = 0; s < 1; s++) {
         balli = `${(balli.length >> (Math.min(4, Math.abs((left_ ? 2 : 4)))))}`;
      }
         homeloadingo /= Math.max(4, ((giftbuttonz ? 3 : 3) | parseInt(`${mappingF}`)));
      whiteanimationlive7 /= Math.max(2, 2);
      break;
   }
       let nbatrophy3 = false;
       let black2 = 0;
      let graphicsq = nbatrophy3 ? !nbatrophy3 : nbatrophy3;
      do {
         nbatrophy3 = 99 < black2;
         if (graphicsq) {
            break;
         }
      } while (graphicsq && (!nbatrophy3));
         black2 <<= Math.min(3, Math.abs((black2 ^ (nbatrophy3 ? 5 : 3))));
          let mimof = 5.0;
          let fastN = String.fromCharCode(97,95,55,51,95,105,110,115,116,97,110,116,0);
          let defaultroombgt: Array<any> = [67, 890, 162];
         nbatrophy3 = mimof < 75.8 && !nbatrophy3;
         mimof += parseFloat(`${defaultroombgt.length % (Math.max(fastN.length, 2))}`);
         fastN = `${fastN.length / 2}`;
         defaultroombgt = [(fastN == String.fromCharCode(104,0) ? defaultroombgt.length : fastN.length)];
      let successG = nbatrophy3 ? !nbatrophy3 : nbatrophy3;
      do {
          let fieldz = false;
          let predictionS = false;
          let cricketB = true;
          let orangeuparrowi: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,114,97,116,105,111,110,95,120,95,53,56,0),53], [String.fromCharCode(100,95,57,49,95,97,117,116,104,107,101,121,0),343], [String.fromCharCode(103,95,55,51,95,99,114,101,100,101,110,116,105,97,108,0),503]]);
          let iconsettingv = String.fromCharCode(113,95,53,52,95,112,114,111,112,115,0);
         nbatrophy3 = cricketB || !predictionS;
         fieldz = iconsettingv.length > orangeuparrowi.size;
         predictionS = orangeuparrowi.size > 84;
         cricketB = iconsettingv.length <= 59 && fieldz;
         if (successG) {
            break;
         }
      } while (successG && (5 > black2 && 1 > (black2 - 5)));
      if (4 <= black2) {
         nbatrophy3 = !nbatrophy3 && black2 >= 70;
      }
       let teami: Array<any> = [686, 354, 195];
      predictiondefaultb += `${parseInt(`${whiteanimationlive7}`) % (Math.max(3, 1))}`;
    setIsOffline(offline);

       let reportK = false;
         reportK = (!reportK ? !reportK : !reportK);
      if (reportK) {
         reportK = (!reportK ? !reportK : !reportK);
      }
      while (!reportK) {
         reportK = (!reportK ? !reportK : !reportK);
         break;
      }
      gesturesP += langkeyK.size;
   for (let w = 0; w < 1; w++) {
       let yellowanimationlivey: Map<any, any> = new Map([[String.fromCharCode(98,95,54,56,95,109,111,100,105,102,105,101,114,115,0),20], [String.fromCharCode(111,117,114,95,53,95,50,56,0),112]]);
       let windA = false;
       let h_managerm: Map<any, any> = new Map([[String.fromCharCode(116,101,108,101,112,104,111,116,111,95,120,95,49,48,0),false ], [String.fromCharCode(112,114,101,115,101,110,116,97,116,105,111,110,95,52,95,55,54,0),true ], [String.fromCharCode(101,105,103,104,116,115,118,120,95,120,95,53,55,0),false ]]);
      let current7 = h_managerm.size >= 9254544;
      do {
         h_managerm.set(`${windA}`, (3 * (windA ? 4 : 4)));
         if (current7) {
            break;
         }
      } while (current7 && ((yellowanimationlivey.size / 5) <= 2 && 5 <= (yellowanimationlivey.size / (Math.max(6, h_managerm.size)))));
         h_managerm.set(`${windA}`, h_managerm.size >> (Math.min(Math.abs(3), 3)));
         windA = h_managerm.size == 55;
         h_managerm = new Map([[`${h_managerm.size}`, h_managerm.size]]);
      while (yellowanimationlivey.size <= 2) {
         h_managerm.set(`${windA}`, yellowanimationlivey.size);
         break;
      }
      while (3 <= (yellowanimationlivey.size % 2) || 2 <= (h_managerm.size % (Math.max(yellowanimationlivey.size, 2)))) {
         yellowanimationlivey = new Map([[`${h_managerm.size}`, h_managerm.size]]);
         break;
      }
      for (let d = 0; d < 2; d++) {
          let inviteX = String.fromCharCode(103,115,116,114,105,110,103,95,113,95,51,54,0);
          let privilegeG = String.fromCharCode(110,111,114,109,97,108,95,57,95,57,0);
         windA = privilegeG.startsWith(`${windA}`);
         inviteX = `${(String.fromCharCode(88,0) == inviteX ? inviteX.length : inviteX.length)}`;
         privilegeG += `${inviteX.length % (Math.max(inviteX.length, 1))}`;
      }
       let subsQ = true;
         yellowanimationlivey = new Map([[`${yellowanimationlivey.size}`, 1]]);
      langkeyK.set(loadingy, loadingy.length + yellowanimationlivey.size);
   }
       let mbnativeQ = String.fromCharCode(108,95,52,55,95,99,104,105,108,100,0);
       let bootsplashI = String.fromCharCode(105,116,108,101,95,49,95,57,55,0);
       let refreshborderless_ = String.fromCharCode(105,100,101,110,116,105,102,105,101,114,95,111,95,57,57,0);
      while (!refreshborderless_.startsWith(mbnativeQ)) {
          let giftB = 1.0;
          let productr = true;
         mbnativeQ += `${bootsplashI.length}`;
         giftB -= (parseFloat(`${parseInt(`${giftB}`) ^ (productr ? 2 : 5)}`));
         productr = 5.19 < giftB;
         break;
      }
      let actionsz = bootsplashI == String.fromCharCode(52,106,120,56,121,54,100,121,0);
      do {
          let gesturesR: Map<any, any> = new Map([[String.fromCharCode(108,95,54,54,95,115,97,110,105,116,105,122,101,0),false ], [String.fromCharCode(119,95,57,95,98,108,111,99,107,103,114,111,117,112,0),false ]]);
          let download5: Map<any, any> = new Map([[String.fromCharCode(120,111,114,101,100,95,102,95,49,56,0),852], [String.fromCharCode(112,95,56,56,95,99,104,97,110,103,101,114,0),271]]);
          let embedT = 4.0;
          let animationsY = 0.0;
          let questm: Array<any> = [148, 295];
         bootsplashI = `${download5.size ^ 2}`;
         gesturesR = new Map([[`${questm.length}`, questm.length | parseInt(`${animationsY}`)]]);
         download5.set(`${animationsY}`, parseInt(`${animationsY}`));
         embedT *= gesturesR.size | 1;
         if (actionsz) {
            break;
         }
      } while (actionsz && (mbnativeQ != String.fromCharCode(111,0)));
      gesturesP -= loadingy.length;
      close0 = `${3 & indicatorZ.length}`;
      zoomW += `${indicatorZ.length << (Math.min(Math.abs(3), 5))}`;
      loadingy = `${3 >> (Math.min(3, loadingy.length))}`;
      gesturesP += 3;
    if (!offline) {

   let inactiveX = zoomW.length >= 5891986;
   do {
      zoomW = "3";
      if (inactiveX) {
         break;
      }
   } while (inactiveX && (4.79 < (zoomW.length - whiteanimationlive7)));
      materialD.set(`${gesturesP}`, 2 - parseInt(`${gesturesP}`));
   while (2 >= zoomW.length) {
      indicatorZ += `${zoomW.length}`;
      break;
   }
   if (indicatorZ == predictiondefaultb) {
      predictiondefaultb += `${3 << (Math.min(Math.abs(parseInt(`${gesturesP}`)), 1))}`;
   }
      whiteanimationlive7 -= 3 << (Math.min(4, Math.abs(parseInt(`${whiteanimationlive7}`))));
      indicatorZ += `${langkeyK.size}`;
       let readv = String.fromCharCode(97,95,55,51,95,108,97,103,97,114,105,116,104,114,97,99,0);
       let eact4 = true;
      if (!eact4 || readv.length < 2) {
         eact4 = readv.length > 54;
      }
      if (!eact4) {
          let e_hashs = 3;
         eact4 = (64 >= (readv.length >> (Math.min(1, Math.abs((!eact4 ? 64 : readv.length))))));
         e_hashs /= Math.max(3, e_hashs);
      }
       let binddatasz = String.fromCharCode(99,104,97,110,103,101,100,104,95,114,95,49,49,0);
       let arrowrightwithtailF: Array<any> = [827, 218, 403];
       let iconqqn: Array<any> = [132, 625];
      let showlessI = eact4 ? !eact4 : eact4;
      do {
         eact4 = iconqqn.length == 76 || !eact4;
         if (showlessI) {
            break;
         }
      } while (showlessI && (!binddatasz.startsWith(`${eact4}`)));
       let dropdownT = 5.0;
       let group2 = 4.0;
      gesturesP *= (close0 == String.fromCharCode(78,0) ? close0.length : materialD.size);
      handleRefresh();
    }
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
        handleRefresh();
      } else if (settingsReducer.isOffline) {
        return () => {
          setIsOffline(settingsReducer.isOffline);
        };
      }
    }, [settingsReducer.isOffline])
  );

  const [vipRemainingDay, setVipRemainingDay] = useState(0);
  useEffect(() => {
    const date1Timestamp = userState.user?.userCurrentTimestamp ?? '';
    const date2Timestamp = userState.user?.userMemberExpired ?? '';
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
       let path8 = 0;
    let mintegralf = 0.0;
    let redscoreballV = String.fromCharCode(97,116,116,105,98,117,116,101,115,95,107,95,53,0);
    let anytime7 = String.fromCharCode(105,95,50,50,95,112,114,111,116,111,98,117,102,0);
    let chatroombackground2 = 1.0;
    let mountingw = 4;
    let plus9 = 0.0;
    let tickR: Array<any> = [506, 662, 69];
    let bellC = 3;
    let reactnativejsN: Map<any, any> = new Map([[String.fromCharCode(104,95,51,49,95,103,101,115,116,117,114,101,0),199], [String.fromCharCode(120,95,52,51,95,97,108,108,111,119,115,0),37], [String.fromCharCode(114,101,110,100,101,114,95,122,95,52,49,0),400]]);
       let muted6 = 2.0;
         muted6 /= Math.max(3, parseFloat(`${parseInt(`${muted6}`)}`));
      let iconclosewhitebgw = 6622650.0 >= muted6;
      do {
         muted6 /= Math.max(2, parseFloat(`${2}`));
         if (iconclosewhitebgw) {
            break;
         }
      } while ((5.75 >= (1.90 - muted6) && (muted6 - muted6) >= 1.90) && iconclosewhitebgw);
      for (let p = 0; p < 3; p++) {
         muted6 += parseFloat(`${parseInt(`${muted6}`) << (Math.min(Math.abs(parseInt(`${muted6}`)), 4))}`);
      }
      tickR = [2];
       let entryQ = String.fromCharCode(97,95,53,53,95,115,101,114,105,97,108,108,121,0);
          let pauseI = 5;
         entryQ = "1";
         pauseI ^= pauseI >> (Math.min(Math.abs(pauseI), 1));
      if (entryQ != String.fromCharCode(99,0)) {
         entryQ = "3";
      }
          let minivodA = 0;
          let latnv = 3.0;
          let sliderZ: Map<any, any> = new Map([[String.fromCharCode(109,117,108,120,95,54,95,55,49,0),String.fromCharCode(114,101,108,111,103,105,110,95,120,95,57,55,0)], [String.fromCharCode(99,95,57,57,95,116,105,109,101,112,101,114,102,114,97,109,101,0),String.fromCharCode(103,95,50,55,95,112,108,97,99,101,0)], [String.fromCharCode(110,95,50,56,95,109,115,109,112,101,103,118,0),String.fromCharCode(100,95,54,55,95,112,101,114,109,117,116,101,115,0)]]);
         entryQ = `${parseInt(`${latnv}`)}`;
         minivodA /= Math.max(sliderZ.size, 1);
         latnv -= 2 * minivodA;
         sliderZ.set(`${minivodA}`, sliderZ.size >> (Math.min(1, Math.abs(minivodA))));
      bellC += entryQ.length;
   let giftbutton7 = redscoreballV == String.fromCharCode(122,97,52,109,116,109,0);
   do {
      redscoreballV = `${parseInt(`${chatroombackground2}`)}`;
      if (giftbutton7) {
         break;
      }
   } while (giftbutton7 && (3.43 < (5.44 * mintegralf) && (parseInt(`${mintegralf}`) * redscoreballV.length) < 2));
      anytime7 = "1";
      anytime7 = "3";
   let rocketO = anytime7.length <= 8661424;
   do {
       let upgradeV = String.fromCharCode(105,110,118,111,99,97,116,105,111,110,115,95,116,95,52,48,0);
       let libapminsightad = String.fromCharCode(121,95,55,53,95,105,115,119,114,105,116,101,97,98,108,101,0);
       let floatingR = String.fromCharCode(98,105,114,116,104,100,97,121,95,55,95,53,50,0);
       let yellowG: Map<any, any> = new Map([[String.fromCharCode(105,110,116,120,120,95,105,95,57,51,0),false ], [String.fromCharCode(120,108,97,98,101,108,119,105,100,116,104,95,119,95,55,50,0),false ], [String.fromCharCode(100,95,53,54,95,119,100,108,102,99,110,0),false ]]);
       let videobufferloadingf = String.fromCharCode(110,111,110,113,117,111,116,101,100,95,53,95,57,54,0);
         yellowG = new Map([[floatingR, upgradeV.length - floatingR.length]]);
         floatingR = `${videobufferloadingf.length + yellowG.size}`;
         libapminsightad += `${2 | yellowG.size}`;
         libapminsightad = `${libapminsightad.length ^ 2}`;
         yellowG = new Map([[libapminsightad, floatingR.length % (Math.max(2, 5))]]);
          let currentO = String.fromCharCode(120,95,55,54,95,101,110,99,114,121,112,116,105,111,110,0);
         libapminsightad = `${videobufferloadingf.length - currentO.length}`;
         videobufferloadingf += `${(upgradeV == String.fromCharCode(74,0) ? libapminsightad.length : upgradeV.length)}`;
         libapminsightad = `${upgradeV.length * 1}`;
      if (libapminsightad.startsWith(`${floatingR.length}`)) {
          let telegramC = true;
          let nativez: Array<any> = [502, 428, 707];
         libapminsightad = `${nativez.length}`;
         telegramC = (telegramC ? telegramC : telegramC);
         nativez = [((telegramC ? 2 : 4) & (telegramC ? 5 : 2))];
      }
      for (let d = 0; d < 2; d++) {
          let penaltys = String.fromCharCode(98,95,55,53,95,102,117,108,108,0);
          let matchesq: Array<any> = [992, 970, 814];
         yellowG.set(`${penaltys}`, 3 / (Math.max(3, penaltys.length)));
         matchesq = [3];
      }
       let homeicon0 = String.fromCharCode(108,95,57,95,122,101,114,111,109,118,0);
      while (1 <= (floatingR.length * 5)) {
         floatingR = "3";
         break;
      }
          let combine0: Map<any, any> = new Map([[String.fromCharCode(103,98,114,112,95,57,95,51,48,0),String.fromCharCode(120,95,56,50,95,102,114,101,101,108,105,115,116,0)], [String.fromCharCode(105,110,116,101,114,115,112,101,114,115,101,95,48,95,50,51,0),String.fromCharCode(99,97,115,99,97,100,101,100,95,97,95,49,50,0)]]);
         libapminsightad += `${libapminsightad.length}`;
         combine0.set(`${combine0.size}`, 1);
         floatingR += `${upgradeV.length / (Math.max(libapminsightad.length, 6))}`;
       let xvodp = 4.0;
      anytime7 = `${mountingw >> (Math.min(Math.abs(bellC), 1))}`;
      if (rocketO) {
         break;
      }
   } while (((anytime7.length - 2) >= 1) && rocketO);
      mintegralf += parseInt(`${chatroombackground2}`) ^ 2;
   if (4 > (2 * mountingw) && (mintegralf + 3.16) > 2.14) {
      mountingw |= 2;
   }

    setIsRefreshing(true);

   if (1 < redscoreballV.length) {
      redscoreballV += "3";
   }
   let refreshW = 8471795.0 >= chatroombackground2;
   do {
      chatroombackground2 -= parseFloat(`${parseInt(`${mintegralf}`) | 3}`);
      if (refreshW) {
         break;
      }
   } while ((5.64 > (3 * plus9)) && refreshW);
      bellC -= path8;
      anytime7 = "1";
   while (5 > (3 ^ tickR.length) || (path8 ^ tickR.length) > 3) {
      path8 %= Math.max(anytime7.length | mountingw, 1);
      break;
   }
      chatroombackground2 -= parseFloat(`${bellC >> (Math.min(5, Math.abs(path8)))}`);
       let filledl = 3.0;
         filledl /= Math.max(2 >> (Math.min(Math.abs(parseInt(`${filledl}`)), 2)), 4);
         filledl /= Math.max(parseInt(`${filledl}`) | parseInt(`${filledl}`), 4);
          let whitevideoliveY = String.fromCharCode(116,95,53,56,95,104,105,103,104,115,0);
         filledl /= Math.max(whitevideoliveY.length, 5);
      anytime7 = `${parseInt(`${chatroombackground2}`) - 1}`;
      mountingw *= 3;
    

      chatroombackground2 *= parseFloat(`${1}`);
       let playercommonv: Map<any, any> = new Map([[String.fromCharCode(102,117,108,108,121,95,118,95,50,57,0),true ], [String.fromCharCode(115,95,54,55,95,113,100,109,100,97,116,97,0),true ], [String.fromCharCode(115,101,101,95,104,95,53,0),false ]]);
         playercommonv.set(`${playercommonv.size}`, playercommonv.size + playercommonv.size);
          let found0 = String.fromCharCode(111,95,50,52,95,121,98,114,105,0);
          let circlea = String.fromCharCode(108,97,110,103,105,100,95,104,95,51,57,0);
         playercommonv.set(circlea, 1 | playercommonv.size);
         found0 += "1";
         circlea += `${found0.length << (Math.min(found0.length, 1))}`;
          let previewa: Map<any, any> = new Map([[String.fromCharCode(98,95,50,51,95,100,116,108,115,0),539], [String.fromCharCode(108,95,57,55,95,97,112,116,120,104,100,0),274], [String.fromCharCode(101,120,112,111,114,116,95,100,95,50,50,0),900]]);
          let dnews8 = 2.0;
         playercommonv.set(`${dnews8}`, parseInt(`${dnews8}`));
         previewa = new Map([[`${previewa.size}`, previewa.size % (Math.max(previewa.size, 8))]]);
      plus9 -= reactnativejsN.size;
   while (1.78 > chatroombackground2) {
       let reportf = String.fromCharCode(98,95,56,95,102,111,111,0);
       let imagemanagerq: Map<any, any> = new Map([[String.fromCharCode(102,95,54,95,109,101,115,97,103,101,0),32], [String.fromCharCode(99,111,110,118,101,114,116,101,100,95,50,95,57,51,0),508]]);
          let filterB = 3.0;
         imagemanagerq = new Map([[`${imagemanagerq.size}`, parseInt(`${filterB}`) >> (Math.min(Math.abs(3), 2))]]);
         reportf += "3";
       let referrer_ = 5.0;
       let classesN = 4.0;
      if (!reportf.startsWith(`${imagemanagerq.size}`)) {
          let expiredW = String.fromCharCode(105,99,111,110,105,99,95,105,95,57,51,0);
          let iconR = String.fromCharCode(109,98,114,116,104,114,101,97,100,95,98,95,57,52,0);
          let anytime7F: Array<any> = [String.fromCharCode(102,108,111,97,116,95,53,95,50,48,0), String.fromCharCode(102,95,49,51,95,105,115,111,0)];
         imagemanagerq = new Map([[iconR, iconR.length * parseInt(`${referrer_}`)]]);
         expiredW += `${expiredW.length ^ anytime7F.length}`;
         anytime7F.push(expiredW.length << (Math.min(1, anytime7F.length)));
      }
      if (3 >= (imagemanagerq.size * reportf.length)) {
         reportf = `${reportf.length}`;
      }
          let v_countc = String.fromCharCode(104,111,114,105,122,111,110,116,97,108,95,52,95,52,51,0);
          let borderlessR = 4.0;
         imagemanagerq = new Map([[`${borderlessR}`, parseInt(`${referrer_}`)]]);
         v_countc = `${v_countc.length}`;
         borderlessR /= Math.max(5, parseFloat(`${v_countc.length << (Math.min(Math.abs(2), 3))}`));
      plus9 *= (String.fromCharCode(95,0) == redscoreballV ? redscoreballV.length : tickR.length);
      break;
   }
       let audiencek = 2.0;
       let feedbackf = 0.0;
       let editu = String.fromCharCode(99,111,100,101,114,95,122,95,51,52,0);
         audiencek += 1;
         feedbackf /= Math.max(4, parseFloat(`${parseInt(`${audiencek}`) | 1}`));
      while ((audiencek - 3.97) >= 5.69) {
         audiencek /= Math.max(5, parseInt(`${audiencek}`));
         break;
      }
      for (let v = 0; v < 1; v++) {
         feedbackf -= parseFloat(`${editu.length}`);
      }
      while ((audiencek - 4.72) <= 5.59) {
          let injuryh = String.fromCharCode(106,95,51,53,95,100,101,115,116,111,114,121,0);
          let graph_ = false;
          let rooti: Map<any, any> = new Map([[String.fromCharCode(104,95,56,53,95,100,101,108,101,103,97,116,101,0),72], [String.fromCharCode(101,95,50,57,95,114,97,119,100,101,99,0),484]]);
         audiencek *= injuryh.length / (Math.max(2, 7));
         injuryh = `${((graph_ ? 3 : 2) / 3)}`;
         graph_ = rooti.size >= 48;
         rooti = new Map([[`${rooti.size}`, 3 % (Math.max(10, rooti.size))]]);
         break;
      }
      while (5.8 >= (audiencek - 4)) {
         feedbackf /= Math.max(parseFloat(`${1}`), 1);
         break;
      }
         feedbackf *= parseFloat(`${editu.length}`);
      let edith = audiencek >= 8289219.0;
      do {
         audiencek *= 2 >> (Math.min(1, editu.length));
         if (edith) {
            break;
         }
      } while (edith && (2.49 > feedbackf));
          let whiteL = String.fromCharCode(114,116,108,95,118,95,54,0);
          let templateprocessort = false;
          let soundI = String.fromCharCode(114,101,112,108,97,99,101,100,95,115,95,54,48,0);
         editu += `${soundI.length}`;
         whiteL = "1";
         templateprocessort = !whiteL.endsWith(`${templateprocessort}`);
         soundI = `${((templateprocessort ? 1 : 2) ^ whiteL.length)}`;
      mintegralf -= path8;
      chatroombackground2 -= parseFloat(`${tickR.length}`);
   while (anytime7.length >= mountingw) {
       let modelsN = String.fromCharCode(115,101,99,116,105,111,110,95,97,95,52,51,0);
       let codegenA = 0;
       let yellowtored8 = 4;
      for (let s = 0; s < 3; s++) {
          let googleY = String.fromCharCode(120,95,49,95,99,110,97,109,101,0);
          let foundq: Array<any> = [449, 485];
          let j_imageW: Array<any> = [500, 249];
          let airbnbstarA = String.fromCharCode(114,95,57,55,95,109,101,115,115,97,103,105,110,103,0);
         modelsN = `${1 * googleY.length}`;
         googleY += "3";
         foundq = [3];
         j_imageW = [2];
         airbnbstarA += `${foundq.length}`;
      }
      for (let k = 0; k < 1; k++) {
         modelsN = `${codegenA & modelsN.length}`;
      }
      let models8 = yellowtored8 >= 6073303;
      do {
         yellowtored8 >>= Math.min(Math.abs(2 + yellowtored8), 4);
         if (models8) {
            break;
         }
      } while (models8 && (3 == (codegenA - 2) && (2 - codegenA) == 2));
      if ((modelsN.length ^ codegenA) > 4 && (codegenA ^ modelsN.length) > 4) {
         codegenA <<= Math.min(modelsN.length, 1);
      }
       let activityh: Array<any> = [852, 736, 448];
      while (activityh.includes(codegenA)) {
         codegenA ^= 2 | yellowtored8;
         break;
      }
          let libyogan: Array<any> = [230, 288];
         yellowtored8 <<= Math.min(Math.abs(modelsN.length + 1), 4);
         libyogan.push(libyogan.length & libyogan.length);
      let sourceN = String.fromCharCode(107,103,119,49,100,53,104,50,101,102,0) == modelsN;
      do {
          let spinnerE = String.fromCharCode(105,95,53,50,95,112,97,117,115,101,0);
          let matchdetailbgX = 5.0;
          let lighta = 3.0;
         modelsN += `${spinnerE.length}`;
         spinnerE = "2";
         matchdetailbgX /= Math.max(4, parseInt(`${matchdetailbgX}`) / 1);
         lighta /= Math.max(4, parseInt(`${matchdetailbgX}`));
         if (sourceN) {
            break;
         }
      } while (sourceN && (yellowtored8 > modelsN.length));
      while ((yellowtored8 - codegenA) <= 4 || 3 <= (4 - yellowtored8)) {
         codegenA -= 1 >> (Math.min(1, activityh.length));
         break;
      }
      mountingw |= path8 / 2;
      break;
   }
      mintegralf *= parseInt(`${mintegralf}`) * mountingw;
       let libreactz = String.fromCharCode(111,117,116,100,97,116,101,100,95,50,95,53,0);
      while (!libreactz.includes(libreactz)) {
          let unreadh = 1;
         libreactz += `${unreadh | libreactz.length}`;
         break;
      }
      for (let q = 0; q < 1; q++) {
          let episodef = String.fromCharCode(100,95,57,52,95,114,101,99,111,103,110,105,122,101,0);
          let pauseB = 3.0;
          let arrowup1 = 1;
         libreactz = `${parseInt(`${pauseB}`)}`;
         episodef = `${1 * episodef.length}`;
         pauseB -= episodef.length ^ 1;
         arrowup1 += episodef.length;
      }
      if (libreactz.length >= 4 && libreactz.length >= 4) {
         libreactz += `${libreactz.length}`;
      }
      path8 /= Math.max(1, libreactz.length);
    await refetch();

   while ((5.5 * mintegralf) == 3.6 && (5.5 * mintegralf) == 5.14) {
      mintegralf += parseInt(`${mintegralf}`) + redscoreballV.length;
      break;
   }
       let moonE = String.fromCharCode(100,105,118,105,115,111,114,95,104,95,52,0);
       let friendsM = String.fromCharCode(120,95,53,52,95,107,101,114,110,101,108,0);
         moonE = `${moonE.length - friendsM.length}`;
      while (moonE == friendsM) {
         friendsM += "3";
         break;
      }
      while (moonE == String.fromCharCode(83,0)) {
          let filedn = true;
          let plusi = false;
          let membershipP = 5.0;
          let nalytics7 = 4.0;
         friendsM = `${moonE.length}`;
         filedn = 87.29 < membershipP;
         plusi = 61.85 >= membershipP || !filedn;
         nalytics7 -= parseFloat(`${3 - parseInt(`${membershipP}`)}`);
         break;
      }
      let macaui = friendsM.length >= 6754967;
      do {
         friendsM += `${moonE.length}`;
         if (macaui) {
            break;
         }
      } while ((!moonE.startsWith(friendsM)) && macaui);
      while (!moonE.endsWith(`${friendsM.length}`)) {
         friendsM += `${friendsM.length << (Math.min(3, moonE.length))}`;
         break;
      }
          let checkboxp = String.fromCharCode(101,95,52,50,95,97,117,120,0);
         moonE += `${moonE.length - friendsM.length}`;
         checkboxp += `${checkboxp.length}`;
      tickR.push(1);
      redscoreballV = `${parseInt(`${chatroombackground2}`)}`;
      mountingw += 2 + bellC;
   while (4.37 <= (mintegralf - path8)) {
      mintegralf /= Math.max(parseInt(`${mintegralf}`) >> (Math.min(redscoreballV.length, 3)), 2);
      break;
   }
   if ((path8 + mintegralf) >= 3.27) {
      mintegralf *= 1 - reactnativejsN.size;
   }
   let modelsx = 7837690 >= path8;
   do {
      path8 <<= Math.min(Math.abs(3), 5);
      if (modelsx) {
         break;
      }
   } while (modelsx && ((mintegralf + 5.0) >= 5.83 && (mintegralf + path8) >= 5.0));
   for (let a = 0; a < 1; a++) {
       let muted5 = String.fromCharCode(97,95,55,53,95,99,111,109,98,0);
          let owngoal2 = String.fromCharCode(97,95,55,54,95,99,111,110,110,101,99,116,0);
         muted5 += `${owngoal2.length}`;
         muted5 = `${muted5.length}`;
      while (muted5.includes(muted5)) {
         muted5 += "1";
         break;
      }
      anytime7 += `${2 ^ mountingw}`;
   }
    setIsRefreshing(false);

      tickR = [1 - parseInt(`${plus9}`)];
       let downq = String.fromCharCode(109,118,115,101,116,95,120,95,49,55,0);
       let goallogoz: Array<any> = [36, 91, 937];
          let release_yB: Map<any, any> = new Map([[String.fromCharCode(97,97,99,115,98,114,100,97,116,97,95,97,95,51,56,0),226], [String.fromCharCode(100,121,97,100,105,99,95,107,95,51,56,0),176]]);
          let switch_5k: Map<any, any> = new Map([[String.fromCharCode(100,101,99,98,110,95,122,95,54,54,0),true ], [String.fromCharCode(107,95,56,57,95,116,114,117,115,116,101,100,0),false ]]);
          let thumbnail7: Array<any> = [334, 299, 934];
         goallogoz = [release_yB.size - switch_5k.size];
         release_yB.set(`${thumbnail7.length}`, thumbnail7.length);
         switch_5k.set(`${thumbnail7.length}`, 3);
         goallogoz.push(downq.length);
          let subin9 = 1;
         goallogoz.push(downq.length);
         subin9 ^= subin9 % (Math.max(3, 5));
       let showless1 = 0;
       let robotos = String.fromCharCode(101,95,53,51,95,98,101,110,105,103,110,0);
       let regengf: Map<any, any> = new Map([[String.fromCharCode(99,105,110,118,105,100,101,111,95,118,95,50,53,0),true ], [String.fromCharCode(118,95,51,52,95,102,105,108,108,115,0),false ], [String.fromCharCode(109,117,116,97,98,108,101,95,48,95,54,51,0),true ]]);
       let whistle7: Map<any, any> = new Map([[String.fromCharCode(112,114,111,109,111,116,105,110,103,95,113,95,51,53,0),663], [String.fromCharCode(116,95,56,50,95,99,116,105,109,101,115,116,97,109,112,0),702]]);
      mintegralf /= Math.max(2, 2);
   let imagemanagerB = mountingw >= 9708816;
   do {
      mountingw &= mountingw | anytime7.length;
      if (imagemanagerB) {
         break;
      }
   } while ((3.58 < mintegralf) && imagemanagerB);
   let panglek = 4986724 <= path8;
   do {
      path8 -= redscoreballV.length;
      if (panglek) {
         break;
      }
   } while (((path8 & tickR.length) == 5) && panglek);
      tickR = [redscoreballV.length];
   let stepL = 9893340 <= reactnativejsN.size;
   do {
       let memberY = 1.0;
       let dragM = 0.0;
       let modulesK = String.fromCharCode(105,95,51,54,95,100,101,99,111,109,112,114,101,115,115,105,111,110,0);
      if ((dragM * parseFloat(`${modulesK.length}`)) == 4.63) {
         dragM *= parseFloat(`${parseInt(`${dragM}`) ^ 1}`);
      }
      let bgvipxvodD = dragM <= 5269166.0;
      do {
         dragM /= Math.max(5, parseFloat(`${parseInt(`${dragM}`) << (Math.min(3, Math.abs(1)))}`));
         if (bgvipxvodD) {
            break;
         }
      } while ((modulesK.length > parseInt(`${dragM}`)) && bgvipxvodD);
      if ((dragM * 4.62) <= 1.99 && (4.62 - memberY) <= 2.78) {
         dragM -= parseFloat(`${parseInt(`${memberY}`)}`);
      }
         memberY /= Math.max(4, modulesK.length);
          let iconsaveimage9 = 2;
         modulesK = "2";
         iconsaveimage9 <<= Math.min(2, Math.abs(iconsaveimage9 + 2));
         memberY -= modulesK.length;
      if (5.55 >= (parseFloat(`${modulesK.length}`) / (Math.max(9, dragM)))) {
          let greyarrowup0: Array<any> = [String.fromCharCode(115,116,114,101,116,99,104,97,98,108,101,95,98,95,50,54,0), String.fromCharCode(101,95,54,52,95,109,97,116,114,105,99,101,115,0)];
          let detailX = 1.0;
          let valuese = false;
         dragM -= (parseFloat(`${(valuese ? 2 : 3) * parseInt(`${memberY}`)}`));
         greyarrowup0 = [greyarrowup0.length % 3];
         detailX -= greyarrowup0.length;
         valuese = detailX < 32.75 && greyarrowup0.length < 19;
      }
      let greytickx = String.fromCharCode(108,120,110,118,0) == modulesK;
      do {
         modulesK = "3";
         if (greytickx) {
            break;
         }
      } while (greytickx && (4 <= (5 + parseInt(`${memberY}`)) || 5 <= (parseInt(`${memberY}`) + modulesK.length)));
         modulesK = `${1 / (Math.max(parseInt(`${dragM}`), 2))}`;
      reactnativejsN = new Map([[`${plus9}`, 1]]);
      if (stepL) {
         break;
      }
   } while (((bellC ^ 3) < 3 && (bellC ^ reactnativejsN.size) < 3) && stepL);
      chatroombackground2 -= parseFloat(`${mountingw}`);
      redscoreballV += `${parseInt(`${chatroombackground2}`)}`;
    return;
  }, []);
  

  const isVip = mayi_Gift.isVip(userState.user);

  useEffect(() => {
    if (selectedTab === 'xvod' && !isVip) {
      setShowBecomeVIPOverlay(true)
    } else {
      setShowBecomeVIPOverlay(false)
    }
  }, [selectedTab])
  

  return (
    <>
      <ImageBackground
        source={
          selectedTab == "libfileHolder"
            ? require("./../../static/images/iconfeedbackCountry.png")
            : screenState.showAdultTab
              ? require("./../../static/images/binddatasInactive.png")
              : require("./../../static/images/profile/qaagCommon.png")
        }
        resizeMode="cover"
        style={{ flex: 1, height: 200 }}
      >
        <ScreenContainer
          isBgHide={true}
          containerStyle={{
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: Platform.OS === "ios" ? 8 : 15,
          }}
        >
          <View
            style={{
              paddingLeft: spacing.sideOffset,
              paddingRight: spacing.sideOffset,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingTop: 8,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {showSport &&
                <TouchableOpacity
                  onPress={() => {
                    setSelectedTab("libfileHolder");
                    dispatch(disableAdultMode());
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        paddingRight: 7,
                        position: "relative",
                        bottom: 10,
                      }}
                    >
                      <SportTabIcon width={32} height={32} />
                    </View>

                    <View
                      style={{
                        flexDirection: "column",
                      }}
                    >
                      <Text
                        style={{
                          ...textVariants.bigHeader,
                          color: colors.text,
                          fontSize: selectedTab == "libfileHolder" ? 20 : 16,
                          
                          paddingBottom: 3,
                          marginBottom: 0,
                        }}
                      >
                        体育
                      </Text>

                      <View
                        style={{
                          justifyContent: "center",
                          paddingHorizontal: 12,
                        }}
                      >
                        <View
                          style={{
                            borderTopWidth: selectedTab == "libfileHolder" ? 2 : 0, 
                            borderTopColor: "#ffffff", 
                            maxWidth: 20,
                          }}
                        ></View>

                        <Text></Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              }

              {screenState.showAdultTab && (
                <>
                  <TouchableOpacity
                    onPress={() => {
                      setSelectedTab("xvod");
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        marginLeft: 15,
                      }}
                    >
                      <View
                        style={{
                          paddingRight: 7,
                          position: "relative",
                          bottom: 12,
                        }}
                      >
                        <XvodTabIcon width={32} height={32} />
                      </View>

                      <View
                        style={{
                          flexDirection: "column",
                        }}
                      >
                        <Text
                          style={{
                            ...textVariants.bigHeader,
                            color: colors.text,
                            fontSize: selectedTab == "xvod" ? 20 : 16,
                            
                            paddingBottom: 3,
                            marginBottom: 0,
                          }}
                        >
                          夜来香
                        </Text>

                        <View
                          style={{
                            justifyContent: "center",
                            paddingHorizontal: 15,
                          }}
                        >
                          <View
                            style={{
                              borderTopWidth: selectedTab == "xvod" ? 2 : 0, 
                              borderTopColor: "#ffffff", 
                              maxWidth: 22,
                            }}
                          ></View>

                          <Text></Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                </>
              )}
            </View>
            <TouchableOpacity
              activeOpacity={
                !mayi_Gift.isVip(userState.user) ||
                  mayi_Gift.isGuest(userState.user)
                  ? 0.5
                  : 1
              }
              onPress={() => {
                if (
                  !mayi_Gift.isVip(userState.user)
                ) {
                  setShowBecomeVIPOverlay(true);
                }
              }}
            >


              {!mayi_Gift.isVip(userState.user) ? (
                <>
                  <View style={styles.headerContainerRight2}>
                    <VipEntry height={30} />
                  </View>
                </>
              ) : (
                <>
                  <View style={styles.headerContainerRight}>
                    <Image
                      style={styles.iconStyle}
                      source={require("@static/images/profile/malaysiaInviteLangkey.png")}
                    />
                    <Text
                      style={{
                        color: colors.text,
                        fontSize: 14,
                      }}
                    >
                      VIP {vipRemainingDay}天
                    </Text>
                  </View>
                </>
              )}

            </TouchableOpacity>
          </View>
          {selectedTab == "libfileHolder" &&
            matchTabs &&
            matchTabs.length > 0 &&
            !isOffline && (
              <View
                style={{
                  flex: 1,
                  marginHorizontal: 10,
                  backgroundColor: "transparent",
                  
                  
                }}
              >
                <MatchScheduleNavVip
                  setShowBecomeVIPOverlay={setShowBecomeVIPOverlay}
                  tabList={matchTabs}
                />
                {!isVip &&
                  <BecomeVipOverlay
                    setShowBecomeVIPOverlay={setShowBecomeVIPOverlay}
                    showBecomeVIPOverlay={showBecomeVIPOverlay}
                    selectedTab={selectedTab}
                  />
                }
              </View>
              // <Text>sport</Text>
            )}

          {selectedTab == "xvod" && (
            <View
              style={{
                flex: 1,
                marginHorizontal: 10,
                backgroundColor: "transparent",
                marginTop: 5
                
                
              }}
            >
              <XVodTab handleRejectEighteenPlus={handleRejectEighteenPlus} />
              {!isVip &&
                <>
                  <TouchableWithoutFeedback
                    style={styles.xvodBlur}
                    onPress={() => setShowBecomeVIPOverlay(true)}
                  >
                    <BlurView
                      blurType="dark"
                      blurAmount={2}
                      style={styles.xvodBlur}
                      overlayColor="" 
                    />
                  </TouchableWithoutFeedback>
                  <BecomeVipOverlay
                    setShowBecomeVIPOverlay={setShowBecomeVIPOverlay}
                    showBecomeVIPOverlay={showBecomeVIPOverlay}
                    selectedTab={selectedTab}
                  />
                </>

              }
            </View>
          )}
          {isOffline && <NoConnection onClickRetry={checkConnection} />}
        </ScreenContainer>
      </ImageBackground>
    </>
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
  headerContainerRight: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(34, 35, 39 , 0.7)",
    paddingHorizontal: 10,
    borderRadius: 30,
    paddingVertical: 5,
    position: "relative",
    bottom: 8,
  },
  headerContainerRight2: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(34, 35, 39 , 0.7)",
    paddingHorizontal: 7,
    borderRadius: 30,
    paddingVertical: 1,
    position: "relative",
    bottom: 8,
  },
  xvodBlur: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    marginTop: 10,
    borderRadius: 15,
    
  }
});
