import React, { memo, useState, useRef, useEffect, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  RefreshControl,
  Dimensions,
  FlatList,
  Linking,
} from "react-native";
import { useNavigation, useTheme } from "@react-navigation/native";
import Swiper from "react-native-swiper";
import ShowMoreVodButton from "../button/yys_unlock_gpay_button";
import {
  yysArrowup,
  yysPenaltyshoot,
  yysMemberDefaultlogo,
} from "@type";
import FastImage from "../common/yys_alert_backwhite";
import { yysIconpointscoreCountdown } from "@redux";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks";
import { yysIconclosewhiteBaiduads } from "@redux";
import VodHistoryList from "../vod/yys_football_tramini";
import VodLiveStationList from "../vod/yys_libtob_predictionwin";
import { API_DOMAIN, API_DOMAIN_TEST } from "@utility";
import VodListVertical from "../vod/yys_giftbutton";
import { playVod, viewPlaylistDetails } from "@redux";
import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import LinearGradient from "react-native-linear-gradient";
import Carousel from "react-native-reanimated-carousel";

import CarouselPagination from "./yys_predictiondefault_yellowscoreball";
import { Image } from "react-native";
import { YingPingContainer } from "../container/yys_point";
import { yysCollection, yysSkip } from "@api";
import { yysIconplaySuggestion } from "@redux";
import { yysIconstar } from "@models";

interface yysBgvipsportUimanager {
  id: number;
  name: string;
}
interface yysIconarrowrightorangeStation {
  vodCarouselRes: yysMemberDefaultlogo;
  navOptions?: yysBgvipsportUimanager[] | undefined;
  onNavChange?: any;
  navId?: number;
  setScrollEnabled?: any;
  onRefresh?: any;
  refreshProp?: boolean;
  onLoad?: any;
}

const RecommendationHome = ({
  vodCarouselRes: data,
  setScrollEnabled,
  onRefresh,
  refreshProp = false,
  onLoad = () => {
       let iconuserc: Array<any> = [939, 240, 765];
    let defaultroombgB = String.fromCharCode(117,95,51,52,95,102,108,97,103,0);
    let crossc = String.fromCharCode(116,104,101,114,101,117,109,95,99,95,55,48,0);
    let bgvipsporth = String.fromCharCode(120,95,53,50,95,117,110,122,105,112,0);
    let scorepopsoundx: Array<any> = [748, 744, 605];
    let stepy: Map<any, any> = new Map([[String.fromCharCode(120,114,117,110,0),908], [String.fromCharCode(108,111,103,116,97,110,0),312]]);
    let libreactperfloggerjni5 = String.fromCharCode(108,105,115,116,101,110,95,57,95,57,55,0);
    let zhuboU = 2;
       let basketballawayteamF = String.fromCharCode(101,110,116,114,105,101,115,0);
      if (basketballawayteamF.length > 1) {
          let collectionH = 5.0;
          let pauseI: Map<any, any> = new Map([[String.fromCharCode(106,95,49,55,95,102,111,114,101,109,97,110,0),940], [String.fromCharCode(105,95,53,55,95,115,122,97,98,111,115,0),610]]);
          let analyticN: Array<any> = [365, 830];
         basketballawayteamF += `${basketballawayteamF.length / (Math.max(8, analyticN.length))}`;
         collectionH -= pauseI.size - 3;
         pauseI = new Map([[`${pauseI.size}`, parseInt(`${collectionH}`) << (Math.min(Math.abs(pauseI.size), 1))]]);
         analyticN.push(parseInt(`${collectionH}`) % (Math.max(pauseI.size, 8)));
      }
      while (basketballawayteamF == String.fromCharCode(106,0) && basketballawayteamF != String.fromCharCode(101,0)) {
         basketballawayteamF += "3";
         break;
      }
         basketballawayteamF = `${basketballawayteamF.length >> (Math.min(Math.abs(1), 5))}`;
      stepy = new Map([[libreactperfloggerjni5, 2 ^ basketballawayteamF.length]]);
      scorepopsoundx.push(3);
      bgvipsporth = "3";
      bgvipsporth += "3";
   while ((3 >> (Math.min(1, Math.abs(stepy.size)))) <= 3 && (3 >> (Math.min(4, iconuserc.length))) <= 4) {
      stepy.set(`${scorepopsoundx.length}`, 3 + scorepopsoundx.length);
      break;
   }
   while ((stepy.size | scorepopsoundx.length) < 5) {
      stepy = new Map([[`${stepy.size}`, 3 | stepy.size]]);
      break;
   }
      stepy = new Map([[`${stepy.size}`, stepy.size]]);
   if (4 < (iconuserc.length | stepy.size) && (stepy.size | 4) < 4) {
      stepy.set(libreactperfloggerjni5, bgvipsporth.length);
   }
   if ((2 - scorepopsoundx.length) >= 1 || (defaultroombgB.length - 2) >= 1) {
       let favicon_ = String.fromCharCode(114,101,112,95,55,95,50,55,0);
       let sansB = 1.0;
       let libcxxcomponentss: Map<any, any> = new Map([[String.fromCharCode(117,95,54,49,95,103,101,116,0),209], [String.fromCharCode(104,95,53,50,95,110,105,115,116,122,0),401], [String.fromCharCode(118,95,52,48,95,102,102,116,112,97,99,107,0),958]]);
      for (let g = 0; g < 2; g++) {
          let middlesoundw: Array<any> = [String.fromCharCode(112,115,101,117,100,111,99,111,108,111,114,95,56,95,56,50,0), String.fromCharCode(105,109,112,108,105,101,115,95,119,95,54,55,0)];
         libcxxcomponentss.set(`${sansB}`, parseInt(`${sansB}`) << (Math.min(Math.abs(2), 4)));
         middlesoundw.push(middlesoundw.length);
      }
      let vietname = 8326238 <= libcxxcomponentss.size;
      do {
         libcxxcomponentss = new Map([[`${sansB}`, favicon_.length]]);
         if (vietname) {
            break;
         }
      } while ((3.18 >= (sansB - 5.80) && (libcxxcomponentss.size >> (Math.min(Math.abs(5), 2))) >= 4) && vietname);
          let template_p5a = String.fromCharCode(99,111,110,115,116,114,117,99,116,111,114,95,53,95,49,49,0);
          let applec = 0;
         libcxxcomponentss.set(favicon_, favicon_.length >> (Math.min(4, Math.abs(applec))));
         template_p5a = `${template_p5a.length << (Math.min(5, template_p5a.length))}`;
         applec *= (String.fromCharCode(72,0) == template_p5a ? template_p5a.length : template_p5a.length);
       let zoom1: Array<any> = [91, 742, 439];
         sansB -= parseInt(`${sansB}`);
      for (let b = 0; b < 2; b++) {
         favicon_ = `${parseInt(`${sansB}`) & 1}`;
      }
      for (let n = 0; n < 2; n++) {
          let basketballhometeam4 = 2.0;
          let yellowb: Array<any> = [688, 845];
          let icontransferclub8 = 0.0;
          let renewT = 0;
          let pingu: Map<any, any> = new Map([[String.fromCharCode(110,111,116,105,102,105,99,97,116,111,110,115,95,108,95,54,53,0),String.fromCharCode(109,95,56,56,95,116,105,109,105,110,103,115,0)], [String.fromCharCode(97,95,57,53,95,114,101,97,99,116,105,111,110,115,0),String.fromCharCode(99,95,57,55,95,115,99,101,110,101,0)], [String.fromCharCode(117,110,99,111,109,112,114,101,115,115,101,100,0),String.fromCharCode(105,95,57,56,95,103,100,112,114,0)]]);
         zoom1.push(zoom1.length);
         basketballhometeam4 *= parseInt(`${icontransferclub8}`);
         yellowb = [yellowb.length];
         icontransferclub8 /= Math.max(4, parseFloat(`${3 + pingu.size}`));
         renewT |= yellowb.length;
         pingu = new Map([[`${pingu.size}`, renewT ^ pingu.size]]);
      }
      if (!favicon_.startsWith(`${sansB}`)) {
         sansB += 1;
      }
      while ((1 | libcxxcomponentss.size) > 4 && (1 | libcxxcomponentss.size) > 2) {
          let e_titleI: Map<any, any> = new Map([[String.fromCharCode(117,110,102,108,97,116,116,101,110,101,100,95,51,95,55,55,0),String.fromCharCode(99,95,50,48,95,115,111,99,107,101,116,118,97,114,0)], [String.fromCharCode(104,115,99,97,108,101,95,48,95,56,48,0),String.fromCharCode(100,101,115,101,114,105,97,108,105,122,101,100,0)], [String.fromCharCode(117,115,101,95,53,95,57,55,0),String.fromCharCode(117,95,52,57,95,115,115,101,116,0)]]);
          let read_ = 1.0;
          let smallorangemanz = false;
          let reminder2: Map<any, any> = new Map([[String.fromCharCode(105,95,50,56,95,102,114,97,103,109,101,110,116,115,0),String.fromCharCode(101,95,55,49,95,105,112,111,100,0)], [String.fromCharCode(117,95,53,49,95,103,101,116,115,111,99,107,111,112,116,0),String.fromCharCode(120,95,53,95,99,111,110,116,111,108,108,101,114,0)]]);
          let shootnogoal2 = String.fromCharCode(118,95,52,52,95,102,109,97,100,100,0);
         zoom1.push(shootnogoal2.length % (Math.max(3, 9)));
         e_titleI = new Map([[`${e_titleI.size}`, e_titleI.size]]);
         read_ *= parseFloat(`${parseInt(`${read_}`) | 3}`);
         smallorangemanz = (((!smallorangemanz ? reminder2.size : 76) + reminder2.size) == 18);
         shootnogoal2 += `${reminder2.size ^ e_titleI.size}`;
         break;
      }
      defaultroombgB += `${parseInt(`${sansB}`) & 2}`;
   }
   if (3 < (1 * stepy.size) || 4 < (libreactperfloggerjni5.length * 1)) {
      stepy.set(defaultroombgB, 2);
   }
       let dragM = 5.0;
       let becomeM = String.fromCharCode(112,95,53,57,95,100,117,109,112,112,97,99,107,101,116,0);
      if (4 == (3 >> (Math.min(2, becomeM.length)))) {
         becomeM += `${(String.fromCharCode(112,0) == becomeM ? parseInt(`${dragM}`) : becomeM.length)}`;
      }
       let emojiheartd = String.fromCharCode(110,95,56,95,100,105,99,101,0);
       let libhermes7 = String.fromCharCode(104,97,108,102,100,0);
      for (let c = 0; c < 3; c++) {
         libhermes7 += `${parseInt(`${dragM}`) / (Math.max(emojiheartd.length, 5))}`;
      }
       let fastq = String.fromCharCode(97,99,111,110,102,105,103,95,111,95,52,53,0);
       let matchinactive_ = String.fromCharCode(114,97,100,98,95,121,95,57,51,0);
      while (emojiheartd.length <= libhermes7.length) {
         libhermes7 += `${becomeM.length - libhermes7.length}`;
         break;
      }
      let libnmsT = matchinactive_ == String.fromCharCode(51,107,53,0);
      do {
          let homeloadingv = String.fromCharCode(97,99,101,110,99,95,110,95,51,55,0);
         matchinactive_ = `${becomeM.length}`;
         homeloadingv += `${homeloadingv.length}`;
         if (libnmsT) {
            break;
         }
      } while ((emojiheartd.startsWith(matchinactive_)) && libnmsT);
      defaultroombgB = `${2 / (Math.max(2, defaultroombgB.length))}`;
       let baselineX = String.fromCharCode(114,101,103,101,116,95,122,95,55,55,0);
       let baselinet: Array<any> = [String.fromCharCode(99,95,50,50,95,103,105,116,104,117,98,0), String.fromCharCode(115,95,52,55,95,119,105,110,100,105,110,103,0)];
       let yellowredcardB = String.fromCharCode(109,97,120,105,109,117,109,0);
      if (baselinet.length > baselineX.length) {
          let inouttargetred0 = 4.0;
          let scrollviewZ = String.fromCharCode(119,101,120,112,97,110,100,95,113,95,55,52,0);
          let libffmpegkitL = 2.0;
          let successJ = String.fromCharCode(97,99,99,117,114,97,99,121,95,116,95,53,57,0);
         baselinet = [baselinet.length];
         inouttargetred0 *= parseInt(`${libffmpegkitL}`) * 1;
         scrollviewZ += `${parseInt(`${inouttargetred0}`)}`;
         libffmpegkitL -= 3 | scrollviewZ.length;
         successJ += `${parseInt(`${libffmpegkitL}`) >> (Math.min(5, Math.abs(parseInt(`${inouttargetred0}`))))}`;
      }
      if (baselineX != String.fromCharCode(67,0)) {
         yellowredcardB = `${baselineX.length}`;
      }
      while ((3 << (Math.min(2, baselineX.length))) <= 4) {
         baselinet = [baselinet.length / (Math.max(2, 2))];
         break;
      }
         yellowredcardB = `${baselineX.length % (Math.max(2, 7))}`;
      if (!baselineX.includes(`${yellowredcardB.length}`)) {
         yellowredcardB += `${yellowredcardB.length / 2}`;
      }
         baselinet = [1 >> (Math.min(3, baselinet.length))];
         baselineX = `${baselinet.length}`;
      let videojsC = 8076405 <= baselinet.length;
      do {
         baselinet = [(String.fromCharCode(81,0) == baselineX ? baselineX.length : baselinet.length)];
         if (videojsC) {
            break;
         }
      } while (videojsC && (1 == baselineX.length));
      for (let b = 0; b < 3; b++) {
         baselineX = `${(baselineX == String.fromCharCode(81,0) ? baselinet.length : baselineX.length)}`;
      }
      bgvipsporth = `${2 % (Math.max(8, crossc.length))}`;
       let statsnomoredataF = String.fromCharCode(115,116,101,112,112,101,100,95,106,95,53,51,0);
       let inactiveP = 4.0;
       let feedbackH = String.fromCharCode(98,95,51,50,95,115,97,110,100,98,111,120,0);
      if (2 == (parseInt(`${inactiveP}`) / (Math.max(6, statsnomoredataF.length)))) {
          let iconsaveimagen = 0.0;
          let scoreI: Map<any, any> = new Map([[String.fromCharCode(118,105,100,101,111,116,111,111,108,98,111,120,0),true ], [String.fromCharCode(110,101,119,114,111,119,0),true ]]);
          let libapminsightaA = 5.0;
         inactiveP /= Math.max(2, parseFloat(`${1 ^ feedbackH.length}`));
         iconsaveimagen /= Math.max(1, 2);
         scoreI.set(`${iconsaveimagen}`, 1);
         libapminsightaA *= parseInt(`${iconsaveimagen}`) + 1;
      }
      for (let m = 0; m < 3; m++) {
         inactiveP += parseFloat(`${feedbackH.length}`);
      }
      if (statsnomoredataF.length > 4) {
          let bgvipsportk = String.fromCharCode(112,114,101,115,101,110,99,101,115,95,108,95,55,50,0);
         statsnomoredataF = `${statsnomoredataF.length >> (Math.min(4, Math.abs(parseInt(`${inactiveP}`))))}`;
         bgvipsportk = `${bgvipsportk.length}`;
      }
         feedbackH += `${statsnomoredataF.length ^ parseInt(`${inactiveP}`)}`;
      while (feedbackH.length > 3) {
         inactiveP *= parseFloat(`${parseInt(`${inactiveP}`)}`);
         break;
      }
         feedbackH += "1";
      while (4 == (parseInt(`${inactiveP}`) / (Math.max(7, feedbackH.length)))) {
          let gmailT = 4.0;
          let shootN = 1.0;
          let rewardK: Array<any> = [297, 276, 72];
         inactiveP += parseFloat(`${1 & parseInt(`${gmailT}`)}`);
         gmailT *= parseInt(`${shootN}`) + rewardK.length;
         shootN -= parseFloat(`${parseInt(`${shootN}`)}`);
         rewardK = [rewardK.length * parseInt(`${shootN}`)];
         break;
      }
         statsnomoredataF += `${parseInt(`${inactiveP}`)}`;
          let iconadslinke = 1;
         feedbackH = "2";
         iconadslinke &= iconadslinke;
      scorepopsoundx = [libreactperfloggerjni5.length & 3];
       let mailT: Map<any, any> = new Map([[String.fromCharCode(122,101,114,111,115,95,121,95,54,54,0),true ], [String.fromCharCode(119,105,115,101,95,110,95,57,57,0),false ]]);
       let iconorientationu = String.fromCharCode(110,95,49,53,95,115,121,109,98,111,108,105,99,97,116,105,111,110,0);
          let nendw = 4.0;
         iconorientationu = `${mailT.size}`;
         nendw += parseInt(`${nendw}`) * parseInt(`${nendw}`);
      while (5 >= (iconorientationu.length / 5) || (mailT.size / 5) >= 4) {
         mailT.set(iconorientationu, 2);
         break;
      }
         iconorientationu += "3";
      if ((mailT.size / (Math.max(1, 1))) > 4 || (mailT.size / (Math.max(iconorientationu.length, 4))) > 1) {
          let castingS = String.fromCharCode(105,110,99,108,117,115,105,111,110,115,95,55,95,50,53,0);
         mailT.set(iconorientationu, (iconorientationu == String.fromCharCode(86,0) ? iconorientationu.length : mailT.size));
         castingS = `${castingS.length}`;
      }
          let updatesM = String.fromCharCode(108,105,98,97,111,109,95,55,95,48,0);
          let predictionbannersharedP: Array<any> = [822, 842];
          let telemetryN = String.fromCharCode(108,97,110,103,105,100,0);
         iconorientationu = `${mailT.size}`;
         updatesM += `${telemetryN.length}`;
         predictionbannersharedP.push(telemetryN.length + 3);
          let greytickS = 4;
          let flagP: Array<any> = [311, 668];
         mailT = new Map([[`${mailT.size}`, mailT.size ^ greytickS]]);
         greytickS += flagP.length % 3;
         flagP.push(flagP.length);
      scorepopsoundx.push((libreactperfloggerjni5 == String.fromCharCode(54,0) ? libreactperfloggerjni5.length : bgvipsporth.length));
       let tempnodatagif6 = 0;
       let actions9 = 2.0;
       let graphP = String.fromCharCode(98,95,54,57,95,102,108,101,120,102,101,99,0);
      for (let b = 0; b < 3; b++) {
         graphP += `${parseInt(`${actions9}`) & 1}`;
      }
      for (let i = 0; i < 3; i++) {
         tempnodatagif6 += tempnodatagif6 >> (Math.min(4, Math.abs(3)));
      }
         graphP += `${(graphP == String.fromCharCode(113,0) ? parseInt(`${actions9}`) : graphP.length)}`;
         actions9 -= tempnodatagif6 + parseInt(`${actions9}`);
         tempnodatagif6 *= tempnodatagif6 % (Math.max(3, 3));
      for (let c = 0; c < 2; c++) {
          let incidentb = 3.0;
          let gpayG = String.fromCharCode(119,95,50,49,95,119,114,105,116,101,105,110,105,116,0);
          let subsO = String.fromCharCode(97,114,99,104,105,118,101,95,100,95,54,57,0);
          let plashA = String.fromCharCode(104,111,117,114,108,121,0);
          let disconnectedK = String.fromCharCode(99,109,105,111,95,54,95,54,52,0);
         graphP += `${graphP.length}`;
         incidentb += parseFloat(`${1 ^ subsO.length}`);
         gpayG += `${3 & parseInt(`${incidentb}`)}`;
         subsO += `${(String.fromCharCode(57,0) == plashA ? subsO.length : plashA.length)}`;
         disconnectedK += "1";
      }
      while ((tempnodatagif6 >> (Math.min(graphP.length, 2))) < 5 || 2 < (5 >> (Math.min(2, Math.abs(tempnodatagif6))))) {
          let selectedm = 0.0;
          let storeN: Map<any, any> = new Map([[String.fromCharCode(118,95,54,57,95,112,114,111,114,101,115,100,115,112,0),809], [String.fromCharCode(97,95,50,52,95,102,114,111,109,0),917]]);
          let mbridgez: Map<any, any> = new Map([[String.fromCharCode(109,95,52,51,95,102,111,117,114,105,101,114,0),600], [String.fromCharCode(100,111,99,115,105,122,101,95,117,95,53,55,0),610], [String.fromCharCode(102,116,118,112,108,97,115,116,110,111,100,101,0),666]]);
         graphP = `${parseInt(`${actions9}`) << (Math.min(2, Math.abs(1)))}`;
         selectedm /= Math.max(2, parseFloat(`${parseInt(`${selectedm}`) % 2}`));
         storeN.set(`${selectedm}`, 3);
         mbridgez.set(`${mbridgez.size}`, storeN.size >> (Math.min(4, Math.abs(mbridgez.size))));
         break;
      }
          let turndown4: Array<any> = [752, 419];
          let private_znz = String.fromCharCode(108,95,55,48,95,117,112,115,104,105,102,116,101,100,0);
         tempnodatagif6 /= Math.max(3, 1 ^ graphP.length);
         turndown4.push(private_znz.length);
         private_znz += `${(private_znz == String.fromCharCode(103,0) ? turndown4.length : private_znz.length)}`;
      if (graphP.length >= 1) {
         actions9 /= Math.max(parseInt(`${actions9}`), 4);
      }
      stepy = new Map([[`${actions9}`, (String.fromCharCode(75,0) == bgvipsporth ? parseInt(`${actions9}`) : bgvipsporth.length)]]);
      scorepopsoundx = [libreactperfloggerjni5.length & iconuserc.length];
   while (5 < (stepy.size | bgvipsporth.length)) {
       let exampleimageC: Map<any, any> = new Map([[String.fromCharCode(113,95,56,52,95,105,109,112,108,105,99,105,116,101,108,121,0),402], [String.fromCharCode(109,115,109,112,101,103,118,95,108,95,53,0),256], [String.fromCharCode(112,99,98,105,110,102,111,95,118,95,56,48,0),369]]);
       let matchw = String.fromCharCode(97,99,107,95,101,95,56,52,0);
       let darkR: Array<any> = [4, 472, 278];
      for (let d = 0; d < 1; d++) {
         exampleimageC = new Map([[`${darkR.length}`, darkR.length ^ 2]]);
      }
      if (matchw.length <= 4) {
          let zhubo3 = String.fromCharCode(122,95,57,54,95,117,110,115,99,97,108,101,100,0);
          let iconsharefriendsg = 5.0;
          let profileframef = false;
          let coreR: Array<any> = [809, 302];
          let libfbA: Array<any> = [169, 843];
         matchw += "1";
         zhubo3 += `${(String.fromCharCode(101,0) == zhubo3 ? zhubo3.length : (profileframef ? 3 : 3))}`;
         iconsharefriendsg *= 1;
         coreR.push(parseInt(`${iconsharefriendsg}`) / 1);
         libfbA = [1];
      }
      let defaultteam9 = matchw == String.fromCharCode(121,115,55,0);
      do {
         matchw = "2";
         if (defaultteam9) {
            break;
         }
      } while ((5 > matchw.length) && defaultteam9);
          let playercommon2 = String.fromCharCode(116,105,109,101,108,105,110,101,0);
          let annerS = 5;
          let analytics = String.fromCharCode(122,95,56,57,95,99,97,108,108,105,115,116,111,0);
         matchw = `${playercommon2.length % 1}`;
         playercommon2 = `${annerS + analytics.length}`;
         annerS -= analytics.length;
       let zhengpianR: Array<any> = [316, 405];
       let configureM: Array<any> = [String.fromCharCode(103,95,57,52,0), String.fromCharCode(101,120,101,99,117,116,101,95,111,95,54,48,0), String.fromCharCode(102,95,53,54,95,110,97,118,105,103,97,116,105,111,110,98,97,114,0)];
          let selectiont: Array<any> = [0, 81];
          let debugT = false;
         exampleimageC = new Map([[`${darkR.length}`, 3 % (Math.max(10, darkR.length))]]);
         selectiont.push(selectiont.length ^ 1);
         debugT = selectiont.length == 17;
         exampleimageC = new Map([[`${exampleimageC.size}`, (String.fromCharCode(103,0) == matchw ? matchw.length : exampleimageC.size)]]);
         configureM.push(zhengpianR.length ^ darkR.length);
      for (let t = 0; t < 1; t++) {
          let nbatrophyG: Map<any, any> = new Map([[String.fromCharCode(115,95,50,48,95,112,114,111,112,97,103,97,116,105,111,110,0),699], [String.fromCharCode(103,95,56,95,97,100,100,114,101,115,115,101,115,0),599]]);
          let package_twe = String.fromCharCode(105,95,57,51,95,108,105,98,97,118,117,116,105,108,0);
          let forwardK: Map<any, any> = new Map([[String.fromCharCode(99,98,112,104,105,95,107,95,49,0),221], [String.fromCharCode(110,101,105,103,104,98,111,114,105,110,103,0),906], [String.fromCharCode(117,95,52,54,0),648]]);
         exampleimageC = new Map([[`${configureM.length}`, package_twe.length / (Math.max(7, configureM.length))]]);
         nbatrophyG = new Map([[`${forwardK.size}`, forwardK.size]]);
         package_twe = `${1 - forwardK.size}`;
      }
      bgvipsporth = `${1 << (Math.min(1, libreactperfloggerjni5.length))}`;
      break;
   }
       let sells = String.fromCharCode(115,112,105,110,108,111,99,107,95,115,95,55,57,0);
       let mbbannerc = String.fromCharCode(117,95,55,52,95,101,120,99,101,101,100,115,0);
       let whistleF: Map<any, any> = new Map([[String.fromCharCode(115,112,101,101,120,95,51,95,50,49,0),187], [String.fromCharCode(110,95,50,56,95,110,109,104,100,0),300]]);
         mbbannerc = `${sells.length / (Math.max(1, 2))}`;
      let membershipf = mbbannerc.length <= 6166789;
      do {
         mbbannerc += `${whistleF.size / 3}`;
         if (membershipf) {
            break;
         }
      } while ((mbbannerc.length == sells.length) && membershipf);
      let giftbuttonf = mbbannerc == String.fromCharCode(50,99,101,108,0);
      do {
          let logoutH = 5;
          let time_d46 = String.fromCharCode(110,95,56,57,95,114,116,97,100,100,114,115,0);
         mbbannerc += `${time_d46.length % 3}`;
         logoutH >>= Math.min(Math.abs(logoutH), 2);
         time_d46 += "1";
         if (giftbuttonf) {
            break;
         }
      } while ((!mbbannerc.includes(`${whistleF.size}`)) && giftbuttonf);
      while (mbbannerc == sells) {
         sells += `${whistleF.size}`;
         break;
      }
         mbbannerc = `${mbbannerc.length % (Math.max(1, 9))}`;
         whistleF = new Map([[mbbannerc, mbbannerc.length * 1]]);
       let singlea = String.fromCharCode(108,110,110,105,100,95,107,95,50,55,0);
       let defaultlogo1 = String.fromCharCode(109,111,100,105,102,105,99,97,116,105,111,110,115,95,118,95,52,48,0);
          let rocketY = true;
          let utilsD = String.fromCharCode(119,105,116,104,111,117,116,95,117,95,54,54,0);
          let embedU = 0;
         whistleF.set(defaultlogo1, defaultlogo1.length);
         rocketY = utilsD.length == embedU;
         utilsD += `${utilsD.length}`;
         embedU |= utilsD.length;
      for (let j = 0; j < 3; j++) {
         defaultlogo1 += `${whistleF.size / (Math.max(4, singlea.length))}`;
      }
      libreactperfloggerjni5 = `${whistleF.size << (Math.min(Math.abs(3), 2))}`;
      libreactperfloggerjni5 += `${libreactperfloggerjni5.length >> (Math.min(5, scorepopsoundx.length))}`;
   for (let s = 0; s < 1; s++) {
      iconuserc.push(bgvipsporth.length ^ 2);
   }
   for (let w = 0; w < 3; w++) {
      iconuserc = [3 - libreactperfloggerjni5.length];
   }
      libreactperfloggerjni5 = `${(String.fromCharCode(65,0) == libreactperfloggerjni5 ? libreactperfloggerjni5.length : iconuserc.length)}`;
   let cornerG = 6391322 >= crossc.length;
   do {
       let humidityM = 5.0;
       let logou = 3.0;
         logou += parseFloat(`${parseInt(`${logou}`) / 3}`);
      let suggestionv = humidityM >= 7533056.0;
      do {
          let defaultfootballbgh: Map<any, any> = new Map([[String.fromCharCode(103,95,54,52,95,117,110,99,104,97,110,103,101,100,0),String.fromCharCode(118,95,56,54,95,114,103,98,112,108,117,115,0)], [String.fromCharCode(104,101,97,100,95,57,95,51,57,0),String.fromCharCode(104,95,49,57,95,111,112,99,111,100,101,0)], [String.fromCharCode(108,111,97,100,101,114,95,122,95,57,56,0),String.fromCharCode(116,105,99,107,101,114,95,111,95,57,53,0)]]);
         humidityM *= parseInt(`${logou}`);
         defaultfootballbgh.set(`${defaultfootballbgh.size}`, defaultfootballbgh.size % (Math.max(6, defaultfootballbgh.size)));
         if (suggestionv) {
            break;
         }
      } while (suggestionv && (logou == humidityM));
      while ((logou / (Math.max(humidityM, 6))) > 2.47 && (humidityM * 2.47) > 3.10) {
         humidityM -= parseInt(`${logou}`) + 3;
         break;
      }
      for (let r = 0; r < 3; r++) {
         humidityM /= Math.max(5, 3);
      }
      for (let o = 0; o < 2; o++) {
          let textinputM: Map<any, any> = new Map([[String.fromCharCode(101,120,112,108,111,114,101,114,95,57,95,49,53,0),734], [String.fromCharCode(98,95,52,55,95,122,111,110,101,115,0),538], [String.fromCharCode(119,95,49,53,95,109,100,97,116,101,0),158]]);
          let tumbnailc: Map<any, any> = new Map([[String.fromCharCode(118,95,51,51,95,116,101,115,115,0),92], [String.fromCharCode(116,95,52,51,95,114,101,115,117,108,116,0),849], [String.fromCharCode(114,101,99,111,110,102,105,103,117,114,97,116,105,111,110,95,109,95,55,55,0),309]]);
         logou += parseFloat(`${textinputM.size}`);
         textinputM.set(`${tumbnailc.size}`, tumbnailc.size + 3);
      }
      for (let s = 0; s < 3; s++) {
         humidityM += 1 % (Math.max(parseInt(`${humidityM}`), 10));
      }
      crossc = "1";
      if (cornerG) {
         break;
      }
   } while ((libreactperfloggerjni5 == String.fromCharCode(109,0)) && cornerG);
      bgvipsporth = `${bgvipsporth.length}`;
      iconuserc.push(scorepopsoundx.length ^ 3);
      scorepopsoundx.push(zhuboU % (Math.max(7, stepy.size)));
      crossc += `${defaultroombgB.length}`;
      stepy.set(`${zhuboU}`, zhuboU);
   for (let a = 0; a < 2; a++) {
      libreactperfloggerjni5 += `${bgvipsporth.length >> (Math.min(Math.abs(1), 4))}`;
   }
   let refreshborderlessp = String.fromCharCode(55,49,116,50,95,0) == libreactperfloggerjni5;
   do {
      libreactperfloggerjni5 = `${3 << (Math.min(5, Math.abs(stepy.size)))}`;
      if (refreshborderlessp) {
         break;
      }
   } while ((libreactperfloggerjni5.endsWith(crossc)) && refreshborderlessp);
 },
}: yysIconarrowrightorangeStation) => {
  const { colors, textVariants, spacing } = useTheme();
  const vodReducer: yysIconpointscoreCountdown = useAppSelector(
    ({ vodReducer }: yysIconclosewhiteBaiduads) => vodReducer
  );
  const history = vodReducer.history;
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const [totalPage, setTotalPage] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [results, setResults] = useState<Array<yysArrowup>>([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const carouselRef = useRef<any>();
  
  const [width, setWidth] = useState(Dimensions.get("window").width);
  const [imgRatio, setImgRatio] = useState(1.5);

  const userState = useSelector<yysIconplaySuggestion>('userReducer');
  const isVip = yysIconstar.isVip(userState.user);

  useEffect(() => {
    setWidth(Number(Dimensions.get("window").width));

    if (data.carousel.length > 0) {
      Image.getSize(data.carousel[0].carousel_pic_mobile, (w, h) => {
        setImgRatio(w / h);
      });
    }
  }, []);
  
  const handleRefresh = async () => {
       let vipsportu = true;
    let minimizet = false;
    let showE = false;
    let humidityb = String.fromCharCode(100,101,102,105,110,101,100,0);
    let traminia = 4.0;
    let malaysia_ = 1;
    let textlayoutmanagerH = true;
    let issubD = 5.0;
    let libavdeviceq = 5.0;
    let release_qR = false;
      vipsportu = humidityb.length <= 68;
   while (textlayoutmanagerH) {
      textlayoutmanagerH = malaysia_ >= 37 || minimizet;
      break;
   }
   let topich = humidityb.length <= 5039121;
   do {
      humidityb += `${parseInt(`${traminia}`) >> (Math.min(1, Math.abs(2)))}`;
      if (topich) {
         break;
      }
   } while (topich && ((1 + malaysia_) >= 5));
   let selectedj = vipsportu ? !vipsportu : vipsportu;
   do {
      vipsportu = (humidityb.length * parseInt(`${libavdeviceq}`)) == 6;
      if (selectedj) {
         break;
      }
   } while (selectedj && (vipsportu || !minimizet));

    setIsRefreshing(true);

   for (let m = 0; m < 3; m++) {
       let stationsy = String.fromCharCode(100,95,54,50,95,115,104,117,116,116,101,114,0);
       let textinputl = 1.0;
       let buttonq = String.fromCharCode(105,109,105,116,97,116,101,95,97,95,54,56,0);
       let tempnodataK = true;
      while (textinputl > buttonq.length) {
         textinputl += ((tempnodataK ? 4 : 4) >> (Math.min(Math.abs(1), 2)));
         break;
      }
         textinputl += ((tempnodataK ? 1 : 4));
      if (1 < buttonq.length) {
          let yellowredcardk: Array<any> = [837, 50, 0];
          let downloadz = 0;
          let profileinactiveG: Map<any, any> = new Map([[String.fromCharCode(111,95,55,51,95,115,101,97,114,99,104,0),762], [String.fromCharCode(98,95,57,50,95,99,114,101,97,116,101,0),318], [String.fromCharCode(97,95,53,53,0),831]]);
          let update_oK: Array<any> = [693, 938, 796];
          let libmapbufferjnie: Array<any> = [440, 276, 832];
         buttonq = "1";
         yellowredcardk.push(2 << (Math.min(5, libmapbufferjnie.length)));
         downloadz -= 1 ^ update_oK.length;
         profileinactiveG = new Map([[`${profileinactiveG.size}`, 2]]);
         update_oK = [downloadz - yellowredcardk.length];
         libmapbufferjnie = [downloadz >> (Math.min(update_oK.length, 2))];
      }
      for (let h = 0; h < 3; h++) {
         textinputl += (stationsy.length - (tempnodataK ? 5 : 2));
      }
      if (tempnodataK) {
         tempnodataK = buttonq.length > stationsy.length;
      }
      while (textinputl <= 5.5 || (textinputl * 5.5) <= 2.26) {
          let manifestl = String.fromCharCode(101,95,51,56,95,111,109,112,114,101,115,115,111,114,0);
          let googleI: Map<any, any> = new Map([[String.fromCharCode(102,95,51,56,95,116,101,110,115,105,111,110,0),false ], [String.fromCharCode(97,95,56,53,95,117,116,118,105,100,101,111,0),false ]]);
          let chatbotphoto6: Array<any> = [491, 10];
          let playliste = String.fromCharCode(97,116,99,104,101,114,95,99,95,57,55,0);
          let banner9 = String.fromCharCode(108,95,54,95,97,114,99,104,105,118,101,0);
         textinputl += playliste.length - 3;
         manifestl = `${banner9.length}`;
         googleI = new Map([[`${googleI.size}`, googleI.size]]);
         chatbotphoto6.push(3);
         playliste += `${2 & chatbotphoto6.length}`;
         banner9 += `${banner9.length & 1}`;
         break;
      }
         stationsy = `${stationsy.length << (Math.min(Math.abs(3), 4))}`;
          let imagenomoredataR = 2.0;
         stationsy += `${2 | stationsy.length}`;
         imagenomoredataR += parseInt(`${imagenomoredataR}`) ^ 1;
      if (stationsy.endsWith(`${tempnodataK}`)) {
         tempnodataK = !buttonq.startsWith(`${textinputl}`);
      }
         textinputl -= parseInt(`${textinputl}`) * 3;
          let iconsettingR = true;
          let package_51i: Array<any> = [724, 938];
          let short_z_7 = String.fromCharCode(112,101,115,113,95,117,95,56,52,0);
         buttonq = `${(buttonq == String.fromCharCode(82,0) ? (iconsettingR ? 2 : 5) : buttonq.length)}`;
         iconsettingR = package_51i.length <= 73;
         package_51i = [(short_z_7 == String.fromCharCode(57,0) ? short_z_7.length : package_51i.length)];
         tempnodataK = String.fromCharCode(110,0) == buttonq;
      textlayoutmanagerH = vipsportu;
   }
      minimizet = 54 == malaysia_;
      minimizet = vipsportu;
   let shareS = issubD >= 5227521.0;
   do {
       let libreactk = String.fromCharCode(116,95,51,50,95,102,101,116,99,104,101,114,0);
      let notificationfilledk = 9250265 >= libreactk.length;
      do {
         libreactk += `${libreactk.length ^ libreactk.length}`;
         if (notificationfilledk) {
            break;
         }
      } while ((3 > libreactk.length && libreactk != String.fromCharCode(97,0)) && notificationfilledk);
         libreactk = "1";
       let showmoreM: Array<any> = [281, 196, 45];
      issubD /= Math.max((3 ^ (textlayoutmanagerH ? 3 : 2)), 5);
      if (shareS) {
         break;
      }
   } while ((issubD < 2.15) && shareS);
    await onRefresh(0, true);

   while (vipsportu || !showE) {
      showE = 52 < malaysia_;
      break;
   }
      traminia *= parseInt(`${issubD}`);
       let mail8 = 5.0;
         mail8 += parseFloat(`${parseInt(`${mail8}`) - 3}`);
         mail8 *= parseFloat(`${parseInt(`${mail8}`) % 1}`);
         mail8 /= Math.max(parseFloat(`${parseInt(`${mail8}`)}`), 5);
      vipsportu = 23.28 <= traminia;
       let h_titleZ = String.fromCharCode(104,111,115,116,102,108,97,103,115,0);
      let gradlewe = h_titleZ.length >= 6215202;
      do {
         h_titleZ += "2";
         if (gradlewe) {
            break;
         }
      } while ((h_titleZ != h_titleZ) && gradlewe);
       let iconf = String.fromCharCode(107,95,52,57,95,110,111,105,115,101,0);
       let refreshborderlessG = String.fromCharCode(99,104,101,99,107,115,117,109,109,101,100,95,108,95,50,54,0);
         iconf += `${2 / (Math.max(7, h_titleZ.length))}`;
      textlayoutmanagerH = 86.26 >= traminia || !textlayoutmanagerH;

    setTimeout(() => {

       let homeiconG = String.fromCharCode(97,112,112,101,110,100,95,103,95,51,51,0);
      while (homeiconG == String.fromCharCode(78,0) && homeiconG != String.fromCharCode(100,0)) {
         homeiconG = `${homeiconG.length + homeiconG.length}`;
         break;
      }
         homeiconG = `${homeiconG.length}`;
          let executoru = String.fromCharCode(102,97,97,110,100,99,116,95,120,95,53,54,0);
          let loginsuccessL: Array<any> = [767, 11, 399];
          let step5: Map<any, any> = new Map([[String.fromCharCode(101,118,111,108,118,101,95,117,95,57,51,0),847], [String.fromCharCode(97,116,116,114,105,98,115,95,49,95,53,48,0),36]]);
         homeiconG = `${1 & loginsuccessL.length}`;
         executoru = `${executoru.length}`;
         loginsuccessL.push(executoru.length * step5.size);
         step5.set(`${executoru}`, executoru.length & 3);
      issubD -= (homeiconG == String.fromCharCode(52,0) ? homeiconG.length : (minimizet ? 2 : 3));
      issubD *= (parseInt(`${libavdeviceq}`) - (textlayoutmanagerH ? 3 : 3));
      issubD += 2;
   for (let z = 0; z < 2; z++) {
       let orangetickE = 3.0;
       let imagesP = 1.0;
         imagesP *= parseFloat(`${parseInt(`${orangetickE}`) - parseInt(`${imagesP}`)}`);
      if (5.86 > (2.51 - imagesP)) {
         imagesP *= parseFloat(`${parseInt(`${orangetickE}`) | 1}`);
      }
       let diceV: Map<any, any> = new Map([[String.fromCharCode(100,95,56,54,95,97,100,100,114,101,115,115,101,115,0),String.fromCharCode(98,97,111,98,97,98,95,119,95,52,53,0)], [String.fromCharCode(97,95,51,95,109,106,112,101,103,0),String.fromCharCode(116,104,114,101,115,104,111,108,100,115,0)]]);
      for (let o = 0; o < 3; o++) {
         imagesP *= parseFloat(`${diceV.size - parseInt(`${imagesP}`)}`);
      }
      for (let w = 0; w < 2; w++) {
          let countdownI = true;
         orangetickE *= parseFloat(`${diceV.size}`);
         countdownI = !countdownI;
      }
      let arrowdownV = diceV.size >= 8205044;
      do {
          let libbufferF: Map<any, any> = new Map([[String.fromCharCode(99,95,50,49,95,100,101,110,121,0),826], [String.fromCharCode(97,115,115,105,103,110,101,100,0),596]]);
          let gesturew = 0;
          let iconpointscore3 = 4.0;
          let fastforward6: Array<any> = [246, 214, 77];
          let shirtv = String.fromCharCode(116,95,55,55,95,101,110,99,111,100,101,0);
         diceV = new Map([[`${libbufferF.size}`, fastforward6.length / (Math.max(1, libbufferF.size))]]);
         gesturew -= gesturew;
         iconpointscore3 *= (shirtv == String.fromCharCode(116,0) ? shirtv.length : parseInt(`${iconpointscore3}`));
         fastforward6.push(gesturew + 1);
         if (arrowdownV) {
            break;
         }
      } while (arrowdownV && ((parseFloat(`${diceV.size}`) + imagesP) <= 3.69 && 4 <= (4 & diceV.size)));
      textlayoutmanagerH = orangetickE < 17.65 || 17.65 < traminia;
   }
      setActiveIndex(0);

      malaysia_ |= malaysia_ % 2;
       let liveendmodallogo6 = String.fromCharCode(117,110,122,116,101,108,108,95,110,95,54,50,0);
       let smallh = String.fromCharCode(97,99,116,117,97,108,105,122,97,116,105,111,110,95,110,95,51,52,0);
       let field4 = String.fromCharCode(97,95,56,48,95,103,101,116,120,115,115,101,0);
      let iconclosef = smallh.length <= 8199025;
      do {
          let tickedi = String.fromCharCode(101,95,54,57,0);
          let cornerX = String.fromCharCode(115,104,111,114,116,108,121,95,121,95,52,54,0);
          let soundA: Map<any, any> = new Map([[String.fromCharCode(103,95,49,51,95,102,114,101,101,0),String.fromCharCode(108,95,49,50,95,97,112,112,101,97,114,101,110,99,101,0)], [String.fromCharCode(118,95,50,53,95,97,100,97,112,116,101,100,0),String.fromCharCode(100,101,99,111,100,101,102,114,97,109,101,95,98,95,51,57,0)], [String.fromCharCode(103,95,50,95,99,97,112,116,117,114,101,116,101,115,116,118,105,100,101,111,0),String.fromCharCode(97,114,99,104,105,116,101,99,116,117,114,101,95,97,95,51,50,0)]]);
          let control_ = false;
          let code5 = 1.0;
         smallh += `${field4.length}`;
         tickedi += `${((control_ ? 4 : 1) + soundA.size)}`;
         cornerX += "3";
         soundA.set(`${code5}`, 2 / (Math.max(8, parseInt(`${code5}`))));
         if (iconclosef) {
            break;
         }
      } while (iconclosef && (3 >= smallh.length && liveendmodallogo6 != String.fromCharCode(54,0)));
      if (1 < liveendmodallogo6.length || smallh.length < 1) {
          let containerH = 5.0;
          let langL = true;
          let materialT = String.fromCharCode(112,95,56,95,108,105,110,101,98,114,101,97,107,0);
          let sheetb = String.fromCharCode(101,120,112,97,110,100,95,101,95,51,55,0);
         smallh += `${liveendmodallogo6.length}`;
         containerH *= materialT.length % 2;
         langL = !materialT.startsWith(`${containerH}`);
         sheetb = "1";
      }
         liveendmodallogo6 = `${smallh.length / (Math.max(8, field4.length))}`;
         smallh += `${liveendmodallogo6.length}`;
      for (let b = 0; b < 2; b++) {
         field4 = `${field4.length / 3}`;
      }
         liveendmodallogo6 = `${field4.length}`;
       let style3 = 3.0;
       let arrowupd = 0.0;
       let configu = 0.0;
       let whitebellR = 1.0;
         smallh = `${liveendmodallogo6.length}`;
      issubD += 1;
      traminia *= parseInt(`${traminia}`) << (Math.min(1, Math.abs(3)));
      humidityb = `${((showE ? 4 : 1) % (Math.max(4, parseInt(`${libavdeviceq}`))))}`;
      if (carouselRef) {

   let stringsq = issubD <= 7360374.0;
   do {
      issubD -= parseInt(`${traminia}`) - 3;
      if (stringsq) {
         break;
      }
   } while (stringsq && (3.30 <= issubD || (3.30 - issubD) <= 2.88));
   let downloadingF = 8433604.0 >= traminia;
   do {
      traminia /= Math.max(5, parseInt(`${traminia}`) & 1);
      if (downloadingF) {
         break;
      }
   } while (downloadingF && (libavdeviceq < traminia));
      vipsportu = 19 <= malaysia_;
   for (let d = 0; d < 3; d++) {
      traminia *= parseInt(`${libavdeviceq}`);
   }
        setIsRefreshing(false);
        carouselRef?.current?.scrollTo({ index: 0, animated: false });
      }
    }, 0);
  };

  // const fetchPlaylist = (page: number) =>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  //   ({ pageParam = 1 }) => fetchPlaylist(pageParam),
  
  
  
  
  
  
  
  //       if (nextPage > totalPage && totalPage != 0) {
  
  
  
  
  
  
  
  
  
  
  

  const fetchYingPing = () =>
    yysCollection.getHomePages(1000, isVip)
      .then((data) => {
        setResults(data.topic_list);
        return data;
      });

  const { data: yingPingList, isFetching: isFetchingYingPing } = useQuery({
    queryKey: ["yingPingList"],
    queryFn: () => fetchYingPing(),
  });

  useEffect(() => {
    onLoad();
  }, []);

  const renderCarousel = useCallback(
    ({ item, index }: { item: any; index: number }) => {

      const key = item.is_ads ? (item.carousel_id + item.carousel_pic_mobile) : item.carousel_id;
      return (
        <TouchableOpacity
          key={`slider-${key}`}
          onPress={() => {
            dispatch(playVod(item.vod));
            navigation.navigate("播放IOS", {
              vod_id: item.carousel_content_id,
            });
          }}
        >
          <FastImage
            key={`slider-${key}`}
            style={styles.image}
            source={{
              uri: item.carousel_pic_mobile,
              priority: "normal",
            }}
            resizeMode={"cover"}
            useFastImage={true}
          />
          <LinearGradient
            colors={["transparent", "black"]}
            start={{ x: 0.8, y: 0 }}
            end={{ x: 0.8, y: 0.9 }}
            style={styles.bottomBlur}
          />
          <Text
            style={{
              ...textVariants.bodyBold,
              ...styles.carouselTag,
              color: "white",
            }}
            numberOfLines={1}
          >
            {item.carousel_name}
          </Text>
        </TouchableOpacity>
      );
    },
    []
  );

  const renderContent = useCallback(
    ({ item, index }: { item: yysArrowup; index: number }) => (
      <View
        style={{
          paddingLeft: spacing.sideOffset,
          paddingRight: spacing.sideOffset,
        }}
      >
        { }
        <View key={`${item.topic_name}-${index}`} style={{ paddingTop: 10 }}>
          <View style={{ paddingBottom: 5 }}>
            <ShowMoreVodButton
              text={item.topic_name}
              onPress={() => {
                dispatch(viewPlaylistDetails(item));
                navigation.navigate("PlaylistDetail", {
                  topic_id: item.topic_id,
                });
              }}
            />
          </View>
          <VodListVertical vods={item.vod_list} />
        </View>
      </View>
    ),
    []
  );

  return (
    <View style={{ width: width }}>
      {yingPingList ? (
        <FlatList
          style={{ paddingBottom: 10 }}
          refreshControl={
            <RefreshControl
              refreshing={isRefreshing}
              onRefresh={handleRefresh}
              tintColor="#FAC33D"
            />
          }
          ListHeaderComponent={
            <>
              {yingPingList?.carousel[0] && !refreshProp && (
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 17,
                    zIndex: 9999,
                  }}
                >
                  <Carousel
                    ref={carouselRef}
                    loop
                    width={width - spacing.sideOffset - spacing.sideOffset}
                    height={
                      (width - spacing.sideOffset - spacing.sideOffset) /
                      imgRatio
                    }
                    autoPlay={true}
                    data={yingPingList.carousel}
                    scrollAnimationDuration={220}
                    autoPlayInterval={2300}
                    onSnapToItem={(index) => {
                      setActiveIndex(index);
                    }}
                    onScrollEnd={(index) => {
                      setActiveIndex(index);
                    }}
                    renderItem={renderCarousel}
                  />
                  <CarouselPagination
                    data={yingPingList.carousel}
                    activeIndex={activeIndex}
                  />
                </View>
              )}
              <View>
                <View style={{ gap: spacing.m }}></View>

                {yingPingList && yingPingList.yingping_list.vod_list.length > 0 && (
                  <View
                    style={{
                      paddingLeft: spacing.sideOffset,
                      paddingRight: spacing.sideOffset,
                      gap: spacing.xxs,
                    }}
                  >
                    <ShowMoreVodButton text={yingPingList.yingping_list.type_name} />
                    {yingPingList.yingping_list.vod_list.map((item, index) => (
                      <YingPingContainer
                        key={item.vod_id}
                        vod={item}
                        width={width}
                        imgRatio={imgRatio}
                        isSlide={index % 2 !== 0}
                      />
                    ))}
                  </View>
                )}

                {/* {data?.yunying &&
                  data.yunying.length > 0 &&
                  data.yunying.map((item, index) => (
                    <View
                      key={item.type_name}
                      style={{
                        paddingLeft: spacing.sideOffset,
                        paddingRight: spacing.sideOffset,
                        gap: spacing.xxs,
                      }}
                    >
                      <View>
                        <ShowMoreVodButton
                          text={item.type_name}
                          onPress={() => {
                            navigation.navigate("片库", {
                              type_id: item.vod_list[0].type_id,
                            });
                          }}
                        />
                      </View>
                      <VodListVertical vods={item.vod_list} />
                    </View>
                  ))} */}

                {yingPingList?.categories &&
                  yingPingList.categories.length > 0 &&
                  yingPingList.categories.map((category, index) => (
                    <View
                      key={`category-${index}`}
                      style={{
                        paddingLeft: spacing.sideOffset,
                        paddingRight: spacing.sideOffset,
                        paddingTop: 5,
                      }}
                    >
                      <View
                        style={{
                          paddingBottom: 5,
                        }}
                      >
                        <ShowMoreVodButton
                          text={category.type_name}
                          onPress={() => {
                            navigation.navigate("片库", {
                              type_id: category.type_id,
                            });
                          }}
                        />
                      </View>
                      <VodListVertical vods={category.vod_list} />
                    </View>
                  ))}
              </View>
            </>
          }
          data={results}
          
          
          
          
          
          initialNumToRender={0}
          onEndReachedThreshold={0.5}
          renderItem={renderContent}
        
        //   <View style={{ ...styles.loading, marginBottom: 60 }}>
        
        
        
        
        

        
        
        
        
        
        
        //       />
        
        
        
        
        
        
        
        
        //       >
        
        //       </Text>
        
        //   </View>
        
        />
      ) : (
        <>
          <View
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "center",
            }}
          >
            <FastImage
              style={{ height: 80, width: 80 }}
              source={require("../../../../static/images/lessFullscreenmaxChatbotphoto.gif")}
              resizeMode={"contain"}
            />
          </View>
        </>
      )}
    </View>
  );
};

export default memo(RecommendationHome);

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 100,
    marginTop: 10,
    zIndex: 99,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 17,
    
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
  vod_live_station: {
    height: 90,
    width: 150,
  },
  nav: {
    flexGrow: 1,
    justifyContent: "center",
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
    height: 75,
    flex: 1,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    opacity: 0.8,
  },
  carouselTag: {
    position: "absolute",
    bottom: 25,
    left: 20,
    marginRight: 16,
  },
  loading: {
    flexDirection: "row",
    justifyContent: "center",
    flex: 1,
  },
  banner: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 4,
    marginBottom: 5,
  },
  icon: {
    color: "white",
    
    maxWidth: "15%",
    objectFix: "contain",
  },
});
