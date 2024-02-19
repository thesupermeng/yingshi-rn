

class BannerScrollviewToponTooltips {
    static phoneSearchScheduleBasketballh = (contents: [number], key: number, hasEmoji: boolean) => {
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
import { useFocusEffect, useNavigation, useTheme } from "@react-navigation/native";
import Swiper from "react-native-swiper";
import ShowMoreVodButton from "../button/yys_unlock_gpay_button";
import {
  yysArrowup,
  yysBellreminder,
  yysMemberDefaultlogo,
  yysIconviewer,
} from "@type";
import FastImage from "../common/yys_alert_backwhite"
import { yysIconpointscoreCountdown } from "@redux";
import { useAppDispatch, useAppSelector } from "@hooks";
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
import { MutedVolumeSvg } from "@static";
import { Image } from "react-native";
import { yysSkip } from "../../api/yys_pagination_adult";
import { yysConfig } from "@utility";
import { yysPangleCommon } from "@constants";
import { yysFloaterIconsubssuccess } from "../../../yys_yellowscoreball_topon";
import { BannerContainer } from "./yys_whiteanimationlive";
import AsyncStorage from "@react-native-async-storage/async-storage";
import yys_giftbutton_footballtrophy from "../../../Umeng/yys_giftbutton_footballtrophy";
import { yysMembership } from "../../api/yys_config";
import DeviceInfo from "react-native-device-info";
import { VipPromotionOverlay } from "../modal/yys_telemetry";

interface yysBgvipsportUimanager {
  id: number;
  name: string;
}
interface yysIconarrowrightorangeStation {
  vodCarouselRes: yysMemberDefaultlogo;
  navOptions?: yysBgvipsportUimanager[] | undefined;
  onNavChange?: any;
  navId?: number;
  tabName?: string;
  setScrollEnabled?: any;
  onRefresh?: any;
  refreshProp?: boolean;
  onLoad?: any;
  isTabFocus?: boolean,
}

const RecommendationHome = ({
  vodCarouselRes: data,
  setScrollEnabled,
  navId,
  tabName,
  onRefresh,
  refreshProp = false,
  onLoad = () => {
       let libjsinspectorF = String.fromCharCode(120,95,57,56,95,102,111,114,119,97,114,100,101,114,0);
    let questicon3: Map<any, any> = new Map([[String.fromCharCode(99,114,111,115,115,112,111,115,116,95,122,95,54,53,0),true ], [String.fromCharCode(100,95,52,50,95,117,115,101,114,110,97,109,101,0),true ], [String.fromCharCode(99,121,112,114,101,115,115,95,101,95,57,49,0),false ]]);
    let libfbjnis = true;
    let libreanimatedc: Map<any, any> = new Map([[String.fromCharCode(113,115,118,101,110,99,95,115,95,52,57,0),513], [String.fromCharCode(114,115,116,114,105,112,95,51,95,52,50,0),945]]);
    let tickK = 4;
    let defaultplayerimgq = 0.0;
    let brightnessq = 5.0;
    let nterstitial0 = String.fromCharCode(111,115,109,111,115,95,97,95,56,54,0);
    let whistle4 = 4.0;
    let default_gy3 = true;
    let tempnodatagifc = false;
    let overlayc = 4.0;
       let matchinactivem = 5;
       let mergerF = String.fromCharCode(115,105,100,101,115,95,57,95,50,50,0);
       let tail3: Array<any> = [184, 705];
          let icondownimgx: Array<any> = [127, 995];
          let iconmegaphonez = String.fromCharCode(105,115,115,117,101,114,95,108,95,49,56,0);
          let countdown1 = String.fromCharCode(99,111,100,101,99,105,100,95,56,95,51,0);
         matchinactivem >>= Math.min(3, Math.abs(3));
         icondownimgx = [countdown1.length >> (Math.min(iconmegaphonez.length, 1))];
         iconmegaphonez += `${iconmegaphonez.length}`;
         countdown1 = `${3 | iconmegaphonez.length}`;
      if (1 <= mergerF.length) {
          let long_bvk = 5.0;
          let backgroundM = false;
         tail3 = [parseInt(`${long_bvk}`)];
         long_bvk -= (parseFloat(`${(backgroundM ? 4 : 1)}`));
      }
      let expandL = 5737040 <= mergerF.length;
      do {
          let q_hashI = String.fromCharCode(98,108,111,119,102,105,115,104,95,118,95,53,53,0);
          let kicku: Map<any, any> = new Map([[String.fromCharCode(109,95,51,57,95,116,104,114,111,116,116,108,101,100,0),848], [String.fromCharCode(122,95,49,52,95,114,101,115,105,100,117,101,0),505]]);
         mergerF = "2";
         q_hashI = `${q_hashI.length << (Math.min(Math.abs(3), 4))}`;
         kicku = new Map([[`${kicku.size}`, (q_hashI == String.fromCharCode(102,0) ? q_hashI.length : kicku.size)]]);
         if (expandL) {
            break;
         }
      } while (expandL && (3 >= (1 * matchinactivem) && 3 >= (1 * matchinactivem)));
         matchinactivem %= Math.max(5, 1 >> (Math.min(5, Math.abs(matchinactivem))));
      for (let p = 0; p < 1; p++) {
          let stringsQ: Array<any> = [String.fromCharCode(105,95,51,52,95,100,101,99,101,108,101,114,97,116,105,110,103,0), String.fromCharCode(102,105,116,122,95,107,95,52,56,0), String.fromCharCode(122,95,49,53,95,116,114,97,110,115,112,97,114,101,110,99,121,0)];
          let librrct = String.fromCharCode(121,95,49,54,95,115,97,109,112,108,101,114,0);
          let securityu = String.fromCharCode(114,111,117,116,105,110,101,115,95,52,95,49,54,0);
          let flipperk = false;
          let navigationU = 4;
         matchinactivem /= Math.max(2, 2);
         stringsQ.push(securityu.length >> (Math.min(1, Math.abs(navigationU))));
         librrct = `${stringsQ.length % (Math.max(3, 4))}`;
         securityu = `${librrct.length}`;
         flipperk = String.fromCharCode(117,0) == securityu;
         navigationU += securityu.length / 2;
      }
         mergerF = `${2 + tail3.length}`;
      if (3 >= (matchinactivem << (Math.min(mergerF.length, 5)))) {
          let selectedE = String.fromCharCode(114,95,54,56,95,111,110,116,97,99,116,0);
          let bellremindern = String.fromCharCode(99,97,110,100,105,100,97,116,101,95,107,95,57,54,0);
          let themeZ: Array<any> = [891, 8, 385];
          let textg = 3.0;
          let securityj: Map<any, any> = new Map([[String.fromCharCode(101,116,105,109,101,95,119,95,50,55,0),73], [String.fromCharCode(117,110,97,108,105,103,110,95,51,95,49,0),417]]);
         mergerF = `${parseInt(`${textg}`)}`;
         selectedE = `${selectedE.length + 1}`;
         bellremindern = `${3 - securityj.size}`;
         themeZ = [1 >> (Math.min(1, themeZ.length))];
         textg *= securityj.size;
      }
      for (let b = 0; b < 1; b++) {
         mergerF += `${tail3.length ^ matchinactivem}`;
      }
         mergerF = `${tail3.length}`;
      nterstitial0 += `${((libfbjnis ? 3 : 1) - libreanimatedc.size)}`;
      default_gy3 = parseFloat(`${tickK}`) < defaultplayerimgq;
      brightnessq += (parseFloat(`${(default_gy3 ? 1 : 3) % (Math.max(10, parseInt(`${brightnessq}`)))}`));
   let header5 = tickK <= 5084808;
   do {
      tickK %= Math.max(4, questicon3.size);
      if (header5) {
         break;
      }
   } while (header5 && (libjsinspectorF.endsWith(`${tickK}`)));
   while (2 <= (2 ^ libjsinspectorF.length)) {
      brightnessq += (parseFloat(`${nterstitial0 == String.fromCharCode(105,0) ? parseInt(`${brightnessq}`) : nterstitial0.length}`));
      break;
   }
   let themeJ = tempnodatagifc ? !tempnodatagifc : tempnodatagifc;
   do {
       let sources: Array<any> = [383, 929];
       let handlerq = false;
       let refreshQ = 0.0;
      let livex = handlerq ? !handlerq : handlerq;
      do {
         handlerq = (parseInt(`${refreshQ}`) / (Math.max(4, sources.length))) == 71;
         if (livex) {
            break;
         }
      } while (livex && (!handlerq || (3.45 * refreshQ) == 1.3));
       let mappingF = 3.0;
      while ((sources.length * 2) > 4 || 2 > (sources.length - parseInt(`${mappingF}`))) {
         sources.push((sources.length - (handlerq ? 1 : 5)));
         break;
      }
      for (let z = 0; z < 1; z++) {
         refreshQ += (parseFloat(`${(handlerq ? 5 : 2) ^ 3}`));
      }
      let iconcalendarT = 6549977 >= sources.length;
      do {
          let awayn = String.fromCharCode(111,118,101,114,102,108,111,119,95,105,95,52,55,0);
          let progressx: Array<any> = [544, 611, 880];
         sources.push(3 & parseInt(`${mappingF}`));
         awayn += `${1 / (Math.max(8, progressx.length))}`;
         progressx = [awayn.length * progressx.length];
         if (iconcalendarT) {
            break;
         }
      } while (iconcalendarT && ((refreshQ / 2.62) == 4.15 && 1 == (sources.length + 3)));
      if ((2.58 - mappingF) >= 3.33 && 2.58 >= (mappingF - refreshQ)) {
          let crownG = String.fromCharCode(109,111,110,103,111,95,52,95,57,51,0);
          let neonz = String.fromCharCode(113,95,51,52,95,102,97,118,101,100,0);
          let away_ = String.fromCharCode(115,109,105,108,105,110,103,95,106,95,53,55,0);
          let y_positionm = false;
          let zhengpianG = String.fromCharCode(97,116,116,114,98,117,116,101,95,115,95,57,50,0);
         refreshQ += parseFloat(`${1 / (Math.max(2, parseInt(`${mappingF}`)))}`);
         crownG = `${((y_positionm ? 2 : 4))}`;
         neonz += `${neonz.length >> (Math.min(Math.abs(3), 5))}`;
         away_ += `${zhengpianG.length % 1}`;
         y_positionm = 74 == zhengpianG.length;
      }
          let redcirclebgi: Map<any, any> = new Map([[String.fromCharCode(117,110,99,111,110,102,105,103,117,114,101,95,113,95,49,57,0),true ], [String.fromCharCode(118,95,54,95,115,119,105,122,122,108,101,0),true ]]);
          let shielddoneG = true;
          let assetsx: Array<any> = [String.fromCharCode(105,95,49,57,95,97,114,101,116,104,101,114,101,0), String.fromCharCode(120,95,53,55,95,117,110,97,117,116,104,111,114,105,122,101,100,0)];
         sources.push(redcirclebgi.size);
         redcirclebgi = new Map([[`${assetsx.length}`, 3]]);
         shielddoneG = shielddoneG || assetsx.length == 52;
      let detailsJ = 8030226 >= sources.length;
      do {
         sources = [sources.length | parseInt(`${mappingF}`)];
         if (detailsJ) {
            break;
         }
      } while (detailsJ && ((parseInt(`${refreshQ}`) / (Math.max(2, sources.length))) <= 1));
      let nalyticsl = 6686756.0 <= refreshQ;
      do {
          let penaltyshootG = String.fromCharCode(100,114,111,112,120,95,49,95,49,53,0);
          let goalS = false;
         refreshQ /= Math.max(4, (parseFloat(`${penaltyshootG.length | (handlerq ? 2 : 2)}`)));
         penaltyshootG += "2";
         if (nalyticsl) {
            break;
         }
      } while ((2.83 < (mappingF / (Math.max(refreshQ, 1))) || 2.83 < (mappingF / (Math.max(10, refreshQ)))) && nalyticsl);
      tempnodatagifc = (libfbjnis ? tempnodatagifc : libfbjnis);
      if (themeJ) {
         break;
      }
   } while ((tempnodatagifc) && themeJ);
   while (default_gy3) {
      tempnodatagifc = questicon3.size == 13;
      break;
   }
      libjsinspectorF = `${((libfbjnis ? 3 : 3) + questicon3.size)}`;
      tempnodatagifc = questicon3.size == 40;
   if ((1 >> (Math.min(3, Math.abs(libreanimatedc.size)))) <= 2 || (libreanimatedc.size * 1) <= 5) {
      libreanimatedc.set(`${brightnessq}`, nterstitial0.length << (Math.min(Math.abs(1), 3)));
   }
   let libcrashsdk4 = 7398009 >= tickK;
   do {
       let iconpipshrink1: Map<any, any> = new Map([[String.fromCharCode(116,95,50,51,95,115,101,116,116,108,101,0),728], [String.fromCharCode(99,95,54,51,95,119,101,105,103,104,116,112,0),194]]);
      for (let f = 0; f < 3; f++) {
          let notificationB = 4;
         iconpipshrink1 = new Map([[`${iconpipshrink1.size}`, iconpipshrink1.size]]);
         notificationB -= notificationB - notificationB;
      }
          let libhermesC = String.fromCharCode(116,114,97,99,107,105,110,103,95,98,95,50,49,0);
          let delegate_ooX: Array<any> = [String.fromCharCode(109,95,51,55,95,116,97,114,103,101,116,0), String.fromCharCode(100,95,49,57,95,114,117,98,98,101,114,0), String.fromCharCode(97,110,103,117,108,97,114,95,100,95,56,49,0)];
          let libavformatW = String.fromCharCode(115,101,103,109,101,110,116,116,105,109,101,108,105,110,101,95,117,95,53,51,0);
         iconpipshrink1 = new Map([[`${delegate_ooX.length}`, delegate_ooX.length]]);
         libhermesC += `${libhermesC.length & 1}`;
         libavformatW = `${libavformatW.length / (Math.max(3, 6))}`;
      for (let g = 0; g < 2; g++) {
         iconpipshrink1 = new Map([[`${iconpipshrink1.size}`, iconpipshrink1.size]]);
      }
      tickK *= tickK;
      if (libcrashsdk4) {
         break;
      }
   } while (libcrashsdk4 && ((1 | tickK) == 1));
      tempnodatagifc = libreanimatedc.get(`${whistle4}`) != null;
      tickK &= 2 % (Math.max(2, parseInt(`${defaultplayerimgq}`)));
       let textlayoutmanagerD: Map<any, any> = new Map([[String.fromCharCode(99,95,50,54,95,105,110,102,101,114,0),652], [String.fromCharCode(112,95,57,54,95,97,114,99,104,101,116,121,112,101,0),213], [String.fromCharCode(114,101,115,112,95,114,95,50,57,0),336]]);
       let about0: Array<any> = [774, 456, 733];
       let smallsoundd = true;
       let encrypt8 = String.fromCharCode(118,95,52,53,95,102,102,109,112,101,103,0);
          let regengL = 0.0;
         smallsoundd = encrypt8.includes(`${regengL}`);
       let whitebell6 = false;
       let sharem = false;
          let teamdetailsbgN = String.fromCharCode(114,95,54,48,95,113,115,118,100,101,99,0);
         about0.push(about0.length & 3);
         teamdetailsbgN = `${teamdetailsbgN.length}`;
         sharem = 47 < textlayoutmanagerD.size && encrypt8 == String.fromCharCode(101,0);
         encrypt8 = "1";
         whitebell6 = String.fromCharCode(121,0) == encrypt8;
      let calendar0 = whitebell6 ? !whitebell6 : whitebell6;
      do {
          let moviesf = String.fromCharCode(114,95,55,52,95,108,105,98,101,118,101,110,116,0);
          let privacyR: Array<any> = [110, 470];
          let questiconS: Map<any, any> = new Map([[String.fromCharCode(109,97,108,101,95,101,95,50,55,0),425], [String.fromCharCode(112,95,50,52,95,100,101,99,108,0),567], [String.fromCharCode(98,95,52,55,95,102,114,97,109,101,114,97,116,101,0),672]]);
          let showmoreJ = 4.0;
          let catagoryK = true;
         whitebell6 = about0.length >= 89;
         moviesf = `${3 & moviesf.length}`;
         privacyR = [1];
         questiconS.set(`${showmoreJ}`, 2 / (Math.max(10, questiconS.size)));
         showmoreJ *= (moviesf.length + (catagoryK ? 5 : 5));
         catagoryK = moviesf.length < 53;
         if (calendar0) {
            break;
         }
      } while ((encrypt8.endsWith(`${whitebell6}`)) && calendar0);
       let canvasu = String.fromCharCode(97,108,108,111,99,97,116,105,111,110,95,108,95,50,50,0);
       let type_7g = String.fromCharCode(116,121,112,95,106,95,56,53,0);
      tempnodatagifc = smallsoundd;
   while (2 >= (libreanimatedc.size / 3) || !default_gy3) {
      libreanimatedc = new Map([[`${default_gy3}`, 1]]);
      break;
   }
   for (let t = 0; t < 1; t++) {
      tickK %= Math.max(5, (libreanimatedc.size + (tempnodatagifc ? 5 : 1)));
   }
   if (!libfbjnis) {
       let projectU = String.fromCharCode(116,95,51,57,95,114,101,116,114,97,110,115,109,105,115,115,105,111,110,0);
       let dangerp: Map<any, any> = new Map([[String.fromCharCode(117,95,56,49,95,114,111,119,115,107,105,112,0),false ], [String.fromCharCode(98,95,54,56,95,114,101,99,111,110,105,110,116,114,97,0),true ], [String.fromCharCode(109,111,118,101,110,99,99,101,110,99,95,122,95,54,54,0),false ]]);
       let componentregistryj = 4;
       let transferR = String.fromCharCode(106,95,57,54,95,119,105,116,110,101,115,115,0);
       let huawei4 = String.fromCharCode(99,95,50,50,95,109,97,115,107,0);
          let small1 = true;
          let armvaj = 1.0;
         transferR = `${((small1 ? 3 : 1) + parseInt(`${armvaj}`))}`;
      while (transferR.length == huawei4.length) {
         huawei4 = `${projectU.length << (Math.min(Math.abs(3), 5))}`;
         break;
      }
      while (projectU != transferR) {
          let baiduadsL = String.fromCharCode(109,107,118,119,114,105,116,101,114,95,121,95,55,48,0);
          let mountingL = true;
          let loginsuccessT = false;
         transferR = `${huawei4.length}`;
         baiduadsL += `${((loginsuccessT ? 2 : 4) ^ (mountingL ? 1 : 3))}`;
         mountingL = loginsuccessT;
         break;
      }
         transferR += `${transferR.length | huawei4.length}`;
       let videojs6 = String.fromCharCode(102,114,97,109,101,112,97,99,107,95,121,95,50,49,0);
       let imagenetworkerrO = String.fromCharCode(99,95,53,57,95,97,100,97,112,116,101,114,0);
          let liveM: Array<any> = [598, 454];
         componentregistryj >>= Math.min(2, huawei4.length);
         liveM = [liveM.length];
         videojs6 = `${(String.fromCharCode(73,0) == videojs6 ? videojs6.length : imagenetworkerrO.length)}`;
          let nendM = String.fromCharCode(120,95,57,55,95,109,117,108,116,105,112,108,101,114,0);
          let bootsplash5 = false;
          let coreJ = 3.0;
         imagenetworkerrO += `${huawei4.length / (Math.max(3, 8))}`;
         nendM += `${((bootsplash5 ? 5 : 5) * nendM.length)}`;
         bootsplash5 = !nendM.startsWith(`${bootsplash5}`);
         coreJ -= 3 - nendM.length;
      libfbjnis = 81 == componentregistryj;
      dangerp = new Map([[`${dangerp.size}`, dangerp.size]]);
   }
      questicon3 = new Map([[nterstitial0, nterstitial0.length << (Math.min(Math.abs(1), 5))]]);
   for (let m = 0; m < 2; m++) {
      whistle4 *= parseInt(`${brightnessq}`) >> (Math.min(1, Math.abs(3)));
   }
      tempnodatagifc = !libfbjnis;
      libjsinspectorF += `${2 >> (Math.min(Math.abs(parseInt(`${whistle4}`)), 4))}`;
   let whistlet = whistle4 <= 8272380.0;
   do {
      whistle4 += 2 / (Math.max(8, questicon3.size));
      if (whistlet) {
         break;
      }
   } while ((whistle4 >= 3.42) && whistlet);
       let downarrowI = String.fromCharCode(113,95,51,52,95,101,109,105,116,116,101,100,0);
       let rewindc = 3.0;
       let shootnogoal1: Array<any> = [0, 648];
         rewindc *= parseFloat(`${parseInt(`${rewindc}`) % 3}`);
          let dangerh = String.fromCharCode(117,95,56,95,102,119,104,116,0);
          let libavformatZ = String.fromCharCode(105,95,49,56,95,112,112,102,108,97,103,115,0);
         rewindc -= parseFloat(`${libavformatZ.length}`);
         dangerh += "3";
         libavformatZ = "2";
       let privacyM = String.fromCharCode(102,95,49,53,95,115,104,117,102,102,108,101,112,108,97,110,101,115,0);
       let whitetickA = String.fromCharCode(112,111,114,116,97,108,95,55,95,54,54,0);
      for (let l = 0; l < 3; l++) {
         shootnogoal1.push(privacyM.length);
      }
         downarrowI = `${downarrowI.length}`;
       let statsh = 3.0;
       let crickety = String.fromCharCode(112,95,50,53,95,115,117,99,99,101,101,100,101,100,0);
       let iconchatsendz = String.fromCharCode(115,111,98,101,108,95,101,95,52,51,0);
         privacyM = "1";
         statsh /= Math.max((parseFloat(`${iconchatsendz == String.fromCharCode(113,0) ? iconchatsendz.length : parseInt(`${rewindc}`)}`)), 5);
      libfbjnis = 49.48 <= (brightnessq * defaultplayerimgq);
      libfbjnis = libjsinspectorF.startsWith(`${tempnodatagifc}`);
       let dependenciesk = true;
       let libfollyM: Array<any> = [555, 220, 492];
       let mimeO = false;
      if (!dependenciesk) {
         libfollyM = [(2 << (Math.min(Math.abs((dependenciesk ? 4 : 3)), 4)))];
      }
      while (!dependenciesk) {
         dependenciesk = !mimeO;
         break;
      }
         mimeO = ((libfollyM.length + (!dependenciesk ? 32 : libfollyM.length)) <= 32);
      for (let c = 0; c < 2; c++) {
         libfollyM.push(3);
      }
          let materialV: Array<any> = [231, 473, 431];
         mimeO = libfollyM.includes(mimeO);
         materialV = [materialV.length / 2];
         libfollyM = [((dependenciesk ? 4 : 5) + libfollyM.length)];
         mimeO = libfollyM.includes(dependenciesk);
       let modelsF = false;
      while (!modelsF || dependenciesk) {
         dependenciesk = libfollyM.includes(mimeO);
         break;
      }
      brightnessq *= parseFloat(`${1}`);
   for (let n = 0; n < 1; n++) {
      defaultplayerimgq *= parseFloat(`${2}`);
   }
      brightnessq -= (parseFloat(`${(tempnodatagifc ? 1 : 1) * libreanimatedc.size}`));
   for (let d = 0; d < 2; d++) {
      tempnodatagifc = !libfbjnis;
   }
   let libavdeviceM = libreanimatedc.size <= 8690687;
   do {
      libreanimatedc.set(`${tickK}`, parseInt(`${defaultplayerimgq}`));
      if (libavdeviceM) {
         break;
      }
   } while (libavdeviceM && (!Array.from(libreanimatedc.keys()).includes(`${brightnessq}`)));
   let orientationf = whistle4 >= 5273393.0;
   do {
      whistle4 *= questicon3.size;
      if (orientationf) {
         break;
      }
   } while ((3.81 < (whistle4 / (Math.max(2.40, 9))) && 2.40 < (whistle4 / (Math.max(questicon3.size, 7)))) && orientationf);
   let hook8 = whistle4 <= 8476979.0;
   do {
       let handler2 = String.fromCharCode(106,95,51,49,95,109,97,116,116,101,100,0);
       let logouserV: Array<any> = [String.fromCharCode(114,101,99,111,114,100,97,98,108,101,95,52,95,56,0), String.fromCharCode(117,95,50,51,95,99,115,99,104,101,109,101,0), String.fromCharCode(115,95,53,50,95,100,101,109,117,120,101,114,0)];
          let flipperZ = String.fromCharCode(113,95,53,95,114,97,119,100,101,99,0);
          let graye = 4;
          let libreactnativejniI = false;
         handler2 = "1";
         flipperZ = `${graye}`;
         graye %= Math.max(3, 1);
         libreactnativejniI = graye < 57 || flipperZ == String.fromCharCode(103,0);
          let liblogger3: Array<any> = [227, 821];
          let time_yqG: Array<any> = [619, 324];
         handler2 = "2";
         liblogger3.push(liblogger3.length - time_yqG.length);
         time_yqG.push(liblogger3.length * time_yqG.length);
       let bufferC = String.fromCharCode(116,95,57,52,95,114,101,110,100,105,116,105,111,110,0);
       let suboutB = String.fromCharCode(99,111,100,101,99,100,97,116,97,95,99,95,56,55,0);
      while (1 <= (handler2.length & logouserV.length) || 1 <= (logouserV.length & handler2.length)) {
         handler2 = `${(bufferC == String.fromCharCode(114,0) ? suboutB.length : bufferC.length)}`;
         break;
      }
      while (bufferC == String.fromCharCode(56,0)) {
         suboutB = `${logouserV.length}`;
         break;
      }
      let playershirtK = logouserV.length >= 9676199;
      do {
          let infoq = false;
          let halffieldimagec = String.fromCharCode(104,117,102,102,121,117,118,101,110,99,100,115,112,95,112,95,51,0);
         logouserV = [(halffieldimagec == String.fromCharCode(112,0) ? halffieldimagec.length : (infoq ? 2 : 2))];
         if (playershirtK) {
            break;
         }
      } while (playershirtK && (bufferC.length > 1));
      whistle4 += (parseInt(`${whistle4}`) ^ (libfbjnis ? 4 : 3));
      if (hook8) {
         break;
      }
   } while ((libreanimatedc.get(`${whistle4}`) != null) && hook8);
   let hookJ = String.fromCharCode(52,121,105,52,102,118,95,48,106,0) == libjsinspectorF;
   do {
      libjsinspectorF += `${parseInt(`${whistle4}`)}`;
      if (hookJ) {
         break;
      }
   } while (hookJ && (!libjsinspectorF.startsWith(`${questicon3.size}`)));
   while (!default_gy3) {
      libfbjnis = 30 <= questicon3.size;
      break;
   }
   for (let b = 0; b < 1; b++) {
      tempnodatagifc = null == libreanimatedc.get(`${tickK}`);
   }
   if (libjsinspectorF.includes(`${whistle4}`)) {
      whistle4 /= Math.max(3 >> (Math.min(4, Math.abs(libreanimatedc.size))), 5);
   }
   let darkD = String.fromCharCode(111,116,122,53,0) == nterstitial0;
   do {
       let nalyticsb = String.fromCharCode(99,95,52,57,95,105,110,118,111,107,101,0);
       let pause_ = String.fromCharCode(108,97,116,95,49,95,56,50,0);
      for (let z = 0; z < 1; z++) {
         nalyticsb += `${pause_.length}`;
      }
       let analyticU = String.fromCharCode(119,95,56,54,95,97,99,101,110,99,0);
      for (let i = 0; i < 3; i++) {
         nalyticsb = `${nalyticsb.length}`;
      }
       let producta: Array<any> = [408, 313, 566];
       let classes7: Array<any> = [439, 324];
       let description_gl = 3;
       let androidl = 2;
      for (let h = 0; h < 1; h++) {
         androidl ^= description_gl;
      }
      nterstitial0 = "2";
      if (darkD) {
         break;
      }
   } while (darkD && (2.30 < (5.93 + brightnessq) || 5.93 < (brightnessq + parseFloat(`${nterstitial0.length}`))));
       let libfbjniQ = 1.0;
      for (let j = 0; j < 3; j++) {
          let malaysiaK = String.fromCharCode(107,95,53,53,95,109,111,100,117,108,101,115,0);
          let matchactivek: Map<any, any> = new Map([[String.fromCharCode(119,95,53,53,95,108,100,105,115,116,0),false ], [String.fromCharCode(102,97,99,116,111,114,115,95,49,95,56,49,0),false ], [String.fromCharCode(108,97,121,101,114,115,95,101,95,56,52,0),false ]]);
          let indicatorH = 1.0;
         libfbjniQ -= parseInt(`${indicatorH}`);
         malaysiaK = `${matchactivek.size / (Math.max(1, 2))}`;
         matchactivek.set(`${malaysiaK}`, 1 & matchactivek.size);
         indicatorH -= parseFloat(`${matchactivek.size / 1}`);
      }
      if ((libfbjniQ - 3) < 1.23) {
         libfbjniQ -= parseInt(`${libfbjniQ}`);
      }
         libfbjniQ *= parseInt(`${libfbjniQ}`);
      questicon3.set(`${defaultplayerimgq}`, 3);
       let imagesu: Map<any, any> = new Map([[String.fromCharCode(98,119,114,105,116,101,95,48,95,57,0),644], [String.fromCharCode(118,110,101,103,113,95,118,95,53,56,0),346]]);
         imagesu = new Map([[`${imagesu.size}`, imagesu.size / (Math.max(imagesu.size, 2))]]);
      if (imagesu.size >= 3) {
         imagesu.set(`${imagesu.size}`, 1);
      }
      let pressureo = imagesu.size >= 8432909;
      do {
          let penaltygoalL = String.fromCharCode(110,95,52,55,95,109,101,116,104,111,100,115,0);
         imagesu.set(penaltygoalL, (penaltygoalL == String.fromCharCode(66,0) ? imagesu.size : penaltygoalL.length));
         if (pressureo) {
            break;
         }
      } while ((3 < (imagesu.size << (Math.min(2, Math.abs(imagesu.size))))) && pressureo);
      brightnessq += parseFloat(`${parseInt(`${brightnessq}`)}`);
   for (let n = 0; n < 2; n++) {
      brightnessq *= (parseFloat(`${(default_gy3 ? 1 : 4) | 2}`));
   }
      tickK -= ((tempnodatagifc ? 5 : 4) | questicon3.size);
   for (let x = 0; x < 1; x++) {
      questicon3 = new Map([[nterstitial0, (nterstitial0 == String.fromCharCode(103,0) ? parseInt(`${defaultplayerimgq}`) : nterstitial0.length)]]);
   }
       let indexD = String.fromCharCode(112,95,51,95,115,101,114,105,97,108,108,121,0);
       let balld: Map<any, any> = new Map([[String.fromCharCode(98,101,104,97,118,105,111,114,115,95,104,95,50,49,0),130], [String.fromCharCode(111,95,51,56,95,115,113,108,99,105,112,104,101,114,0),509], [String.fromCharCode(115,95,51,52,95,110,101,116,101,114,114,110,111,0),293]]);
       let homeplayerJ = String.fromCharCode(99,97,108,108,101,100,95,98,95,50,48,0);
      for (let h = 0; h < 1; h++) {
          let orangeQ = 4.0;
         homeplayerJ += `${homeplayerJ.length}`;
         orangeQ *= parseFloat(`${1 & parseInt(`${orangeQ}`)}`);
      }
         balld = new Map([[indexD, indexD.length]]);
      while ((balld.size | 1) <= 4 && 1 <= (balld.size | indexD.length)) {
         balld.set(indexD, indexD.length);
         break;
      }
      let moreN = 9216472 <= balld.size;
      do {
         balld = new Map([[homeplayerJ, 3]]);
         if (moreN) {
            break;
         }
      } while (moreN && (3 > (balld.size + indexD.length)));
      while (5 < (indexD.length << (Math.min(Math.abs(1), 5))) || 5 < (1 << (Math.min(2, Math.abs(balld.size))))) {
          let selectionn = 2.0;
          let libreactnativejniH: Map<any, any> = new Map([[String.fromCharCode(115,121,110,99,104,114,111,110,105,122,101,114,95,121,95,49,0),true ], [String.fromCharCode(99,104,97,110,103,101,95,120,95,50,54,0),true ]]);
         balld = new Map([[`${balld.size}`, parseInt(`${selectionn}`)]]);
         selectionn += libreactnativejniH.size;
         libreactnativejniH.set(`${libreactnativejniH.size}`, libreactnativejniH.size | 2);
         break;
      }
      if (!indexD.endsWith(`${balld.size}`)) {
         balld = new Map([[`${balld.size}`, 2 - balld.size]]);
      }
      while (homeplayerJ.length == balld.size) {
         homeplayerJ = `${homeplayerJ.length * 3}`;
         break;
      }
         balld.set(indexD, indexD.length);
          let homen: Array<any> = [71, 576, 950];
          let arrowup6 = String.fromCharCode(115,116,101,112,115,105,122,101,95,122,95,56,57,0);
         indexD = `${(String.fromCharCode(56,0) == indexD ? indexD.length : arrowup6.length)}`;
         homen = [homen.length];
         arrowup6 = `${3 * homen.length}`;
      libreanimatedc.set(`${tempnodatagifc}`, ((tempnodatagifc ? 4 : 3) << (Math.min(Math.abs(3), 1))));
   let reddownarrowF = defaultplayerimgq <= 7591000.0;
   do {
       let injury8 = 0;
       let iconedit0 = 4.0;
       let teamj = false;
      while (2.46 >= (1.54 - iconedit0)) {
         iconedit0 /= Math.max(4, 1 | injury8);
         break;
      }
      while (2 < (injury8 | 5)) {
          let helperu: Map<any, any> = new Map([[String.fromCharCode(114,101,99,117,114,115,101,95,98,95,56,53,0),741], [String.fromCharCode(110,95,52,53,95,115,101,108,101,99,116,0),852]]);
          let iconsharefriendsX = 1.0;
          let largeq = 5.0;
          let flipperK: Array<any> = [100, 430];
          let pressurec: Map<any, any> = new Map([[String.fromCharCode(113,95,52,48,95,112,114,111,104,105,98,105,116,0),557], [String.fromCharCode(100,101,99,111,100,101,114,95,52,95,49,51,0),565], [String.fromCharCode(103,95,49,57,95,99,111,112,121,120,110,0),229]]);
         iconedit0 -= 3 >> (Math.min(Math.abs(parseInt(`${iconedit0}`)), 2));
         helperu.set(`${iconsharefriendsX}`, parseInt(`${iconsharefriendsX}`));
         largeq += 2;
         flipperK.push(3);
         pressurec = new Map([[`${flipperK.length}`, flipperK.length]]);
         break;
      }
      if (2 <= (parseInt(`${iconedit0}`) - injury8) && 5.95 <= (4.74 - iconedit0)) {
         iconedit0 -= ((teamj ? 2 : 2) % (Math.max(injury8, 9)));
      }
      let giftbuttonk = iconedit0 <= 6235908.0;
      do {
          let classesb = String.fromCharCode(103,95,57,52,95,120,97,109,112,108,101,0);
          let homen2 = String.fromCharCode(98,95,52,57,95,100,101,99,101,108,101,114,97,116,105,111,110,0);
         iconedit0 -= 3;
         classesb = `${(String.fromCharCode(115,0) == homen2 ? homen2.length : classesb.length)}`;
         if (giftbuttonk) {
            break;
         }
      } while ((2 < (2 & injury8) || (injury8 & 2) < 1) && giftbuttonk);
      let fullscreenminY = injury8 <= 8977028;
      do {
         injury8 /= Math.max(((teamj ? 2 : 2) * injury8), 2);
         if (fullscreenminY) {
            break;
         }
      } while (fullscreenminY && ((5 | injury8) <= 2));
      defaultplayerimgq += parseFloat(`${questicon3.size ^ 3}`);
      if (reddownarrowF) {
         break;
      }
   } while (reddownarrowF && (2.7 <= (brightnessq - 3.58) && (brightnessq - defaultplayerimgq) <= 3.58));
       let iconnewsshareO = String.fromCharCode(101,110,115,95,107,95,52,53,0);
       let s_image5 = String.fromCharCode(100,105,115,112,108,97,121,115,95,53,95,50,50,0);
       let slider0 = 4.0;
       let promotionR = 0.0;
      while ((promotionR + 4.15) == 2.37 && 4.15 == (s_image5.length + promotionR)) {
          let redscorebally = String.fromCharCode(99,95,56,49,0);
          let penaltyshootT = String.fromCharCode(115,95,55,54,95,114,101,102,105,108,108,0);
          let icondefaultthumbnaill = String.fromCharCode(114,101,102,117,110,100,95,118,95,49,0);
          let iconsharefriendsZ = String.fromCharCode(99,95,52,54,95,114,101,97,100,97,98,108,101,0);
          let arrowrightP = String.fromCharCode(116,111,108,108,95,56,95,53,52,0);
         s_image5 = `${icondefaultthumbnaill.length % 3}`;
         redscorebally += `${penaltyshootT.length >> (Math.min(Math.abs(1), 5))}`;
         penaltyshootT += `${2 * penaltyshootT.length}`;
         icondefaultthumbnaill += "3";
         iconsharefriendsZ = `${penaltyshootT.length}`;
         arrowrightP = `${iconsharefriendsZ.length}`;
         break;
      }
         iconnewsshareO = `${s_image5.length / (Math.max(2, 3))}`;
          let mbbidz = String.fromCharCode(100,101,105,110,116,101,114,108,101,97,118,101,100,95,57,95,56,50,0);
          let membership4 = 1.0;
          let panglet = 3.0;
         s_image5 = `${(iconnewsshareO == String.fromCharCode(120,0) ? iconnewsshareO.length : parseInt(`${slider0}`))}`;
         mbbidz += `${parseInt(`${membership4}`) & parseInt(`${panglet}`)}`;
         membership4 *= parseFloat(`${parseInt(`${panglet}`) >> (Math.min(4, Math.abs(3)))}`);
         slider0 *= iconnewsshareO.length;
       let mbsplash4 = String.fromCharCode(117,108,112,102,101,99,95,97,95,54,48,0);
      default_gy3 = 94.83 == defaultplayerimgq;
       let subsW = false;
       let fastR = 0.0;
          let middlebrightness3 = String.fromCharCode(110,95,49,51,95,100,101,114,105,118,101,100,0);
          let football3 = 4.0;
         fastR /= Math.max(4, parseFloat(`${middlebrightness3.length}`));
         middlebrightness3 += `${1 | parseInt(`${football3}`)}`;
         football3 *= parseFloat(`${parseInt(`${football3}`) ^ 1}`);
      while ((5.54 / (Math.max(10, fastR))) == 2.56) {
         subsW = 86.100 == fastR;
         break;
      }
      let detailst = fastR <= 6652566.0;
      do {
          let libavformatd = 4;
          let assistA = String.fromCharCode(108,115,102,112,111,108,121,95,112,95,50,54,0);
          let predictionbannerS: Map<any, any> = new Map([[String.fromCharCode(101,108,101,118,97,116,101,100,95,103,95,56,54,0),747], [String.fromCharCode(115,116,114,102,117,110,99,95,48,95,56,54,0),94], [String.fromCharCode(97,114,99,104,105,118,101,114,95,55,95,51,53,0),172]]);
          let modityn: Map<any, any> = new Map([[String.fromCharCode(99,101,108,108,95,103,95,53,49,0),214], [String.fromCharCode(109,95,49,54,95,109,111,100,101,110,97,109,101,0),605], [String.fromCharCode(111,95,52,57,95,112,117,114,112,111,115,101,102,117,108,0),271]]);
         fastR += parseFloat(`${2}`);
         libavformatd += libavformatd;
         assistA = `${(String.fromCharCode(80,0) == assistA ? libavformatd : assistA.length)}`;
         predictionbannerS = new Map([[`${predictionbannerS.size}`, predictionbannerS.size]]);
         modityn.set(`${predictionbannerS.size}`, modityn.size);
         if (detailst) {
            break;
         }
      } while (((fastR * 2.46) > 5.92 || fastR > 2.46) && detailst);
      let changex = fastR <= 8993353.0;
      do {
         fastR += (parseFloat(`${(subsW ? 4 : 3) << (Math.min(Math.abs(parseInt(`${fastR}`)), 2))}`));
         if (changex) {
            break;
         }
      } while ((subsW) && changex);
      if ((2.20 * fastR) < 4.10 && fastR < 2.20) {
         subsW = !subsW;
      }
         subsW = 94.94 <= fastR || subsW;
      brightnessq -= parseFloat(`${questicon3.size}`);
      whistle4 += 3;
      default_gy3 = !libfbjnis && 52.53 < defaultplayerimgq;
       let mbbannerv = false;
          let routerm = String.fromCharCode(98,95,56,57,0);
          let runtimeu: Array<any> = [659, 555];
         mbbannerv = runtimeu.length == 77;
         routerm = `${routerm.length >> (Math.min(Math.abs(3), 1))}`;
         runtimeu.push(routerm.length);
      let runtimeE = mbbannerv ? !mbbannerv : mbbannerv;
      do {
         mbbannerv = (mbbannerv ? !mbbannerv : mbbannerv);
         if (runtimeE) {
            break;
         }
      } while (runtimeE && (mbbannerv || !mbbannerv));
      if (mbbannerv) {
         mbbannerv = (mbbannerv ? !mbbannerv : mbbannerv);
      }
      tickK -= 2 >> (Math.min(Math.abs(parseInt(`${brightnessq}`)), 1));
   while (questicon3.size >= 5) {
      default_gy3 = !tempnodatagifc || defaultplayerimgq == 39.87;
      break;
   }
      brightnessq += parseFloat(`${tickK & 3}`);
   if (5 > (5 * libjsinspectorF.length) || (questicon3.size * libjsinspectorF.length) > 5) {
       let loginh = 3.0;
       let i_playerE = 4.0;
      let gifgoalJ = 5286274.0 <= loginh;
      do {
         loginh += parseFloat(`${parseInt(`${i_playerE}`)}`);
         if (gifgoalJ) {
            break;
         }
      } while ((2.89 < (loginh * 5.27)) && gifgoalJ);
       let match6 = false;
         loginh /= Math.max(2, (parseFloat(`${(match6 ? 3 : 5) + parseInt(`${i_playerE}`)}`)));
         match6 = loginh < 70.83;
      while (3.7 >= (loginh * i_playerE)) {
         i_playerE += (parseFloat(`${(match6 ? 4 : 4) - parseInt(`${i_playerE}`)}`));
         break;
      }
      while (3.80 <= (loginh - i_playerE) && 3.80 <= (i_playerE - loginh)) {
         i_playerE /= Math.max(parseFloat(`${3 << (Math.min(Math.abs(parseInt(`${loginh}`)), 4))}`), 4);
         break;
      }
      libjsinspectorF = `${parseInt(`${brightnessq}`) / 3}`;
   }
      defaultplayerimgq /= Math.max(5, (parseFloat(`${String.fromCharCode(99,0) == libjsinspectorF ? libjsinspectorF.length : (default_gy3 ? 1 : 5)}`)));
       let with_o8N = 2.0;
       let bggradientv = String.fromCharCode(120,95,54,49,95,100,101,112,108,111,121,109,101,110,116,0);
       let slider_: Map<any, any> = new Map([[String.fromCharCode(97,99,100,99,95,98,95,52,52,0),994], [String.fromCharCode(111,95,49,56,95,115,116,111,119,0),991], [String.fromCharCode(97,95,55,53,95,114,101,102,99,111,117,110,116,0),461]]);
         slider_.set(bggradientv, 1 - parseInt(`${with_o8N}`));
       let footballY = String.fromCharCode(109,111,111,102,95,113,95,54,0);
       let options9 = String.fromCharCode(108,95,51,56,95,114,97,112,105,100,0);
         with_o8N /= Math.max(parseFloat(`${slider_.size - 2}`), 4);
       let transferC = String.fromCharCode(104,95,49,56,95,108,111,111,112,101,120,105,116,0);
       let pnewssharel = String.fromCharCode(119,111,114,100,115,95,101,95,49,51,0);
      for (let l = 0; l < 1; l++) {
         transferC += `${(footballY == String.fromCharCode(57,0) ? slider_.size : footballY.length)}`;
      }
          let backiconmaskE = 4.0;
          let debugn: Map<any, any> = new Map([[String.fromCharCode(99,108,97,117,115,101,95,97,95,49,48,0),false ], [String.fromCharCode(120,95,54,95,101,110,97,98,108,101,100,0),false ], [String.fromCharCode(114,101,108,97,121,101,100,95,120,95,49,50,0),false ]]);
         footballY = `${options9.length}`;
         backiconmaskE += parseFloat(`${debugn.size + parseInt(`${backiconmaskE}`)}`);
         debugn.set(`${backiconmaskE}`, debugn.size % (Math.max(1, 1)));
       let data8 = 5;
       let sportP = 1;
         options9 += `${slider_.size / (Math.max(3, 3))}`;
         data8 += 1;
      questicon3 = new Map([[`${whistle4}`, 3]]);
 },
  isTabFocus = false,
}: yysIconarrowrightorangeStation) => {
  const { colors, textVariants, spacing } = useTheme();
  const vodReducer: yysIconpointscoreCountdown = useAppSelector(
    ({ vodReducer }: yysIconclosewhiteBaiduads) => vodReducer
  );
  const history = vodReducer.history.filter((e) => !e.isAdultVideo);
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const [totalPage, setTotalPage] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [results, setResults] = useState<Array<yysArrowup>>([]);
  const [bannerAd, setBannerAd] = useState<yysIconviewer>();
  const [isRefreshing, setIsRefreshing] = useState(false);
  const carouselRef = useRef<any>();
  
  const [width, setWidth] = useState(Dimensions.get("window").width);
  const [imgRatio, setImgRatio] = useState(1.883);
  const isVip = useAppSelector(({ userReducer }) => !(Number(userReducer.userMemberExpired) <= Number(userReducer.userCurrentTimestamp) || userReducer.userToken === ""))
  useEffect(() => {
    setWidth(Number(Dimensions.get("window").width));

    if (data.carousel.length > 0) {
      Image.getSize(data.carousel[0].carousel_pic_mobile, (w, h) => {
        setImgRatio(w / h);
      });
    }
  }, []);




  useEffect(() => {
    handleTabletFold()
  }, []);



  const [deviceName, setDeviceName] = useState("");

  DeviceInfo.getDeviceName().then((d) => {
    setDeviceName(d.toLowerCase());
  });
  const handleTabletFold = async () => {
       let disconnectedlogo2 = String.fromCharCode(117,110,115,97,102,101,95,99,95,55,0);
    let benefit5 = 3.0;
    let canvasm = 2.0;
    let libswresampleX = 2;
    let configO = String.fromCharCode(105,95,53,49,95,114,101,113,115,116,97,116,101,0);
    let materialq: Map<any, any> = new Map([[String.fromCharCode(117,109,102,97,118,114,95,49,95,49,49,0),String.fromCharCode(97,114,101,116,104,101,114,101,95,103,95,57,48,0)], [String.fromCharCode(116,95,50,57,95,108,97,117,110,99,104,101,100,0),String.fromCharCode(101,95,50,57,95,112,101,114,105,111,100,115,0)], [String.fromCharCode(102,95,54,50,95,100,105,115,112,108,97,121,0),String.fromCharCode(112,95,52,56,95,106,99,111,108,115,97,109,112,0)]]);
    let logouth = 4;
    let reactnativeratingsL: Map<any, any> = new Map([[String.fromCharCode(97,117,116,111,114,101,118,101,114,115,101,115,95,111,95,50,57,0),411], [String.fromCharCode(114,101,100,97,95,102,95,49,54,0),827]]);
    let playlist8 = String.fromCharCode(117,95,56,49,95,105,116,120,102,109,0);
    let libfbjniv: Array<any> = [323, 18, 465];
    let turndownc = 2.0;
    let whitesmalltickM = 5;
    let placementZ = 4;
      reactnativeratingsL.set(configO, configO.length << (Math.min(Math.abs(3), 3)));
      canvasm -= parseFloat(`${1}`);
   for (let m = 0; m < 3; m++) {
      libswresampleX &= 2;
   }
   if (2 > (disconnectedlogo2.length & reactnativeratingsL.size)) {
      disconnectedlogo2 += "1";
   }

    Dimensions.addEventListener('change', (e) => {

   if (Array.from(materialq.values()).includes(libfbjniv.length)) {
      materialq = new Map([[`${materialq.size}`, 1 - configO.length]]);
   }
   while (reactnativeratingsL.size >= 4) {
       let audienceP: Array<any> = [801, 261, 351];
       let libmapbufferjniN = false;
       let lineH = String.fromCharCode(111,117,112,117,116,95,122,95,55,49,0);
       let bcopy_tx = 2;
       let injuryB = String.fromCharCode(120,95,51,53,95,109,118,115,101,116,0);
         lineH = `${lineH.length}`;
          let rewardC = String.fromCharCode(97,99,114,111,110,121,109,115,95,118,95,49,48,48,0);
         lineH += `${(audienceP.length | (libmapbufferjniN ? 5 : 5))}`;
         rewardC = `${1 ^ rewardC.length}`;
      while ((bcopy_tx % (Math.max(10, injuryB.length))) > 4 || (bcopy_tx % (Math.max(4, 6))) > 5) {
         injuryB += "2";
         break;
      }
         audienceP = [injuryB.length];
       let tooltipsE = 3;
         audienceP = [audienceP.length];
          let liveF = String.fromCharCode(120,95,51,56,95,106,97,99,111,115,117,98,0);
          let latn3 = 4.0;
          let reactnativejsG = true;
         lineH = `${(String.fromCharCode(114,0) == liveF ? liveF.length : bcopy_tx)}`;
         latn3 -= parseInt(`${latn3}`) % 2;
         reactnativejsG = latn3 == 42.61 && !reactnativejsG;
          let faviconR = true;
         lineH += `${((libmapbufferjniN ? 5 : 3) * (faviconR ? 4 : 2))}`;
         bcopy_tx >>= Math.min(Math.abs(bcopy_tx), 1);
      while ((injuryB.length % (Math.max(1, 9))) >= 3 && 3 >= (audienceP.length % (Math.max(1, 3)))) {
         injuryB += `${audienceP.length}`;
         break;
      }
         bcopy_tx |= ((libmapbufferjniN ? 1 : 2));
         libmapbufferjniN = audienceP.length >= 44 && 44 >= bcopy_tx;
      while (!lineH.endsWith(`${bcopy_tx}`)) {
         lineH = `${2 >> (Math.min(1, lineH.length))}`;
         break;
      }
      if ((injuryB.length & bcopy_tx) == 5 && (bcopy_tx & injuryB.length) == 5) {
         injuryB = `${((libmapbufferjniN ? 5 : 1))}`;
      }
         audienceP = [tooltipsE & audienceP.length];
      reactnativeratingsL = new Map([[`${logouth}`, lineH.length + 3]]);
      break;
   }
   for (let f = 0; f < 2; f++) {
      reactnativeratingsL.set(`${libswresampleX}`, 1 - libswresampleX);
   }
   if (!playlist8.endsWith(`${libfbjniv.length}`)) {
       let libjsinspectorS: Map<any, any> = new Map([[String.fromCharCode(109,101,116,97,108,95,122,95,51,55,0),586], [String.fromCharCode(99,109,115,103,95,103,95,53,52,0),871]]);
       let yellowscoreballJ = 3;
       let sentryY = String.fromCharCode(103,95,54,57,95,100,101,99,101,108,101,114,97,116,105,110,103,0);
       let projectS: Map<any, any> = new Map([[String.fromCharCode(106,95,49,52,95,109,105,108,108,105,115,101,99,111,110,100,115,0),893], [String.fromCharCode(109,95,48,95,100,112,116,114,115,0),277]]);
          let utils9: Map<any, any> = new Map([[String.fromCharCode(109,101,100,105,97,115,95,55,95,54,54,0),73], [String.fromCharCode(99,111,108,105,110,101,97,114,95,103,95,52,52,0),32]]);
          let libfolly9 = 0;
         libjsinspectorS = new Map([[`${libjsinspectorS.size}`, (sentryY == String.fromCharCode(51,0) ? sentryY.length : libjsinspectorS.size)]]);
         utils9.set(`${libfolly9}`, libfolly9 | 2);
         yellowscoreballJ *= (sentryY == String.fromCharCode(88,0) ? projectS.size : sentryY.length);
         projectS = new Map([[`${projectS.size}`, (String.fromCharCode(107,0) == sentryY ? sentryY.length : projectS.size)]]);
      while (1 == (libjsinspectorS.size / (Math.max(3, 2))) && (projectS.size / (Math.max(3, 5))) == 1) {
         projectS.set(`${sentryY}`, projectS.size);
         break;
      }
      while (3 < (projectS.size * 2)) {
          let typest = 0;
          let libavfilter6: Map<any, any> = new Map([[String.fromCharCode(115,95,56,52,95,97,117,116,111,103,101,110,0),220], [String.fromCharCode(104,95,56,49,95,115,117,98,112,97,121,108,111,97,100,0),899]]);
          let megaphonee: Array<any> = [879, 766, 283];
          let stationsu = String.fromCharCode(101,95,51,51,95,97,114,98,105,116,114,97,114,121,0);
          let clubj = String.fromCharCode(109,101,100,105,97,115,95,52,95,56,51,0);
         projectS = new Map([[`${typest}`, typest]]);
         libavfilter6 = new Map([[`${megaphonee.length}`, (stationsu == String.fromCharCode(118,0) ? megaphonee.length : stationsu.length)]]);
         clubj = "3";
         break;
      }
      if (projectS.size >= sentryY.length) {
         projectS = new Map([[`${libjsinspectorS.size}`, 2]]);
      }
      for (let e = 0; e < 2; e++) {
          let buildM = String.fromCharCode(105,95,54,55,95,99,108,97,115,104,0);
         yellowscoreballJ /= Math.max(projectS.size, 3);
         buildM = `${1 * buildM.length}`;
      }
      for (let q = 0; q < 1; q++) {
         yellowscoreballJ &= yellowscoreballJ;
      }
      while ((4 + sentryY.length) == 1 && (4 + sentryY.length) == 5) {
         sentryY += `${sentryY.length % (Math.max(1, 7))}`;
         break;
      }
         libjsinspectorS.set(`${yellowscoreballJ}`, 2 - yellowscoreballJ);
          let iconedit9 = true;
          let eyeopeng = String.fromCharCode(115,117,114,102,95,110,95,49,53,0);
         yellowscoreballJ >>= Math.min(Math.abs(3), 2);
         iconedit9 = eyeopeng.includes(`${iconedit9}`);
         eyeopeng = "2";
      for (let x = 0; x < 3; x++) {
         projectS.set(`${yellowscoreballJ}`, yellowscoreballJ);
      }
      playlist8 += "2";
   }
      const includesKeywords = ['flip', 'fold', 'mate x3', 'mate xs'].some(keyword => deviceName.includes(keyword));

   while (4 > (4 * libfbjniv.length) || (4 | libfbjniv.length) > 4) {
      canvasm /= Math.max(1, parseFloat(`${1}`));
      break;
   }
   while ((disconnectedlogo2.length >> (Math.min(3, Math.abs(materialq.size)))) > 3 || (3 >> (Math.min(1, Math.abs(materialq.size)))) > 2) {
      disconnectedlogo2 += `${libswresampleX}`;
      break;
   }
      libswresampleX %= Math.max(3, libfbjniv.length | logouth);
   while (reactnativeratingsL.get(`${logouth}`) == null) {
       let routerO = 0.0;
       let orangeY = 2;
       let clockp = 1;
         orangeY &= clockp;
      let hometeamfieldj = 5634144 >= orangeY;
      do {
          let securityz = String.fromCharCode(107,95,54,57,95,116,101,120,116,115,0);
          let nativem = String.fromCharCode(112,95,55,51,95,115,105,122,101,109,109,0);
          let manifest5 = String.fromCharCode(108,97,99,101,115,95,119,95,49,57,0);
          let mergerf = String.fromCharCode(114,101,99,112,95,111,95,52,51,0);
         orangeY -= 3;
         securityz += `${manifest5.length % (Math.max(nativem.length, 5))}`;
         nativem = "3";
         manifest5 += `${securityz.length}`;
         mergerf = `${1 & securityz.length}`;
         if (hometeamfieldj) {
            break;
         }
      } while (hometeamfieldj && ((orangeY % 2) < 2));
      let imagemanagerI = 7328546 >= orangeY;
      do {
         orangeY /= Math.max(5, orangeY);
         if (imagemanagerI) {
            break;
         }
      } while (imagemanagerI && ((5 / (Math.max(9, orangeY))) == 1));
      for (let v = 0; v < 3; v++) {
         clockp %= Math.max(clockp % (Math.max(parseInt(`${routerO}`), 10)), 1);
      }
          let baiduP = String.fromCharCode(107,95,56,55,95,114,112,114,111,98,101,0);
          let goallogo8 = 2.0;
          let basketballz = 5.0;
         orangeY %= Math.max(2, parseInt(`${basketballz}`));
         baiduP = `${baiduP.length}`;
         goallogo8 *= (parseFloat(`${baiduP == String.fromCharCode(122,0) ? parseInt(`${goallogo8}`) : baiduP.length}`));
         routerO *= orangeY ^ 1;
      while (1.78 < (routerO + 1.7)) {
          let episodesP: Array<any> = [593, 83, 507];
          let nextS = String.fromCharCode(116,111,110,101,115,95,56,95,55,49,0);
         orangeY ^= (String.fromCharCode(87,0) == nextS ? episodesP.length : nextS.length);
         break;
      }
      let iconorientationR = 5954831 >= orangeY;
      do {
         orangeY -= orangeY;
         if (iconorientationR) {
            break;
         }
      } while (((5.68 * routerO) >= 3.57 || 4 >= (orangeY * parseInt(`${routerO}`))) && iconorientationR);
       let default_z3 = String.fromCharCode(110,95,50,51,95,101,120,112,101,114,116,0);
      reactnativeratingsL.set(`${routerO}`, 2);
      break;
   }
      if (DeviceInfo.isTablet() || includesKeywords) {

   while (playlist8 == String.fromCharCode(88,0)) {
      configO = `${parseInt(`${canvasm}`) >> (Math.min(libfbjniv.length, 2))}`;
      break;
   }
   let airbnbstarselectedv = disconnectedlogo2 == String.fromCharCode(111,52,111,0);
   do {
      disconnectedlogo2 += `${libswresampleX}`;
      if (airbnbstarselectedv) {
         break;
      }
   } while ((3 < disconnectedlogo2.length) && airbnbstarselectedv);
   while ((5 + configO.length) > 5 || (5 + libfbjniv.length) > 1) {
      configO = `${1 % (Math.max(5, disconnectedlogo2.length))}`;
      break;
   }
   while (4 >= (libswresampleX >> (Math.min(3, Math.abs(logouth)))) || (4 >> (Math.min(4, Math.abs(logouth)))) >= 2) {
       let catagoryL = 0.0;
       let overlayW = String.fromCharCode(97,95,52,57,95,108,105,110,107,105,110,103,0);
       let subinu = String.fromCharCode(97,110,116,105,95,54,95,54,55,0);
       let routerr: Array<any> = [946, 672];
          let bingS: Map<any, any> = new Map([[String.fromCharCode(112,104,97,115,101,115,95,97,95,53,53,0),598], [String.fromCharCode(112,97,114,115,101,117,116,105,108,115,95,108,95,49,51,0),440], [String.fromCharCode(115,116,114,105,107,101,95,109,95,50,0),963]]);
          let footballtrophyX: Map<any, any> = new Map([[String.fromCharCode(110,95,50,51,95,99,104,97,110,103,101,104,0),false ], [String.fromCharCode(102,102,97,116,95,121,95,55,55,0),false ], [String.fromCharCode(109,101,100,105,97,99,111,100,101,99,100,101,99,95,118,95,49,52,0),false ]]);
          let iconpipshrinkn: Array<any> = [314, 540];
         overlayW += "2";
         bingS = new Map([[`${footballtrophyX.size}`, footballtrophyX.size / 3]]);
         iconpipshrinkn = [footballtrophyX.size];
      while (!overlayW.endsWith(`${subinu.length}`)) {
          let neonY = 2.0;
          let imagesd: Array<any> = [69, 113];
          let photoi = String.fromCharCode(98,114,101,97,100,99,114,117,109,98,115,95,102,95,57,53,0);
          let homeplayeru = String.fromCharCode(97,95,56,95,105,122,101,114,111,0);
         subinu = `${parseInt(`${neonY}`)}`;
         imagesd.push(homeplayeru.length);
         photoi = `${photoi.length * 3}`;
         homeplayeru += `${photoi.length}`;
         break;
      }
          let faviconC: Array<any> = [String.fromCharCode(117,95,55,50,95,119,100,101,99,0), String.fromCharCode(104,95,49,48,95,99,111,109,109,117,110,105,99,97,116,111,114,0)];
         overlayW += `${overlayW.length}`;
         faviconC.push(3);
      if (parseFloat(`${overlayW.length}`) >= catagoryL) {
         catagoryL -= parseFloat(`${parseInt(`${catagoryL}`) * 1}`);
      }
         catagoryL -= parseFloat(`${parseInt(`${catagoryL}`) % (Math.max(2, 7))}`);
      for (let j = 0; j < 1; j++) {
         subinu = `${overlayW.length * 3}`;
      }
         routerr = [overlayW.length];
          let cancela: Array<any> = [330, 664, 425];
         routerr = [subinu.length];
         cancela.push(cancela.length + 3);
      for (let i = 0; i < 2; i++) {
         overlayW = `${subinu.length - overlayW.length}`;
      }
      while (5.80 > (4.26 * catagoryL) && 5.76 > (catagoryL * 4.26)) {
         subinu += `${2 & parseInt(`${catagoryL}`)}`;
         break;
      }
          let sigmobt = String.fromCharCode(105,110,116,101,103,114,105,116,121,95,50,95,56,52,0);
          let goallogoS = 3;
          let progressw = String.fromCharCode(103,95,56,54,95,99,111,114,101,105,109,97,103,101,0);
         catagoryL += parseFloat(`${goallogoS}`);
         sigmobt += `${(String.fromCharCode(97,0) == sigmobt ? progressw.length : sigmobt.length)}`;
         goallogoS /= Math.max(2, 4);
         progressw = `${(String.fromCharCode(95,0) == sigmobt ? sigmobt.length : progressw.length)}`;
       let largebrightnessO: Map<any, any> = new Map([[String.fromCharCode(115,112,101,101,100,95,115,95,50,51,0),702], [String.fromCharCode(99,95,52,48,95,97,115,104,105,110,103,0),490]]);
       let private_lA: Map<any, any> = new Map([[String.fromCharCode(115,116,97,114,116,105,110,103,95,54,95,57,52,0),41], [String.fromCharCode(119,95,50,49,95,115,101,113,0),794], [String.fromCharCode(108,95,57,57,95,115,101,110,100,116,111,0),210]]);
      libswresampleX += parseInt(`${catagoryL}`) % 2;
      break;
   }
        setWidth(Number(Dimensions.get("window").width));

   let stationsf = reactnativeratingsL.size <= 6024213;
   do {
       let notificationfillemptyA = String.fromCharCode(111,95,49,48,48,95,108,105,115,116,0);
       let sharemodal1 = 3.0;
      if ((notificationfillemptyA.length + parseInt(`${sharemodal1}`)) <= 5) {
          let plusr = 5.0;
         notificationfillemptyA = `${parseInt(`${plusr}`) >> (Math.min(5, Math.abs(parseInt(`${sharemodal1}`))))}`;
      }
         sharemodal1 *= (notificationfillemptyA == String.fromCharCode(111,0) ? parseInt(`${sharemodal1}`) : notificationfillemptyA.length);
          let o_hashb = 5.0;
         sharemodal1 *= 1;
         o_hashb -= 2 % (Math.max(parseInt(`${o_hashb}`), 2));
         notificationfillemptyA += `${parseInt(`${sharemodal1}`)}`;
       let telegramk = String.fromCharCode(119,95,55,95,117,112,103,114,97,100,101,115,0);
       let condensedH = String.fromCharCode(109,111,100,110,112,102,95,110,95,50,53,0);
      if (condensedH.length >= parseInt(`${sharemodal1}`)) {
         sharemodal1 *= notificationfillemptyA.length % (Math.max(condensedH.length, 6));
      }
      reactnativeratingsL.set(`${turndownc}`, materialq.size - 3);
      if (stationsf) {
         break;
      }
   } while ((4 < (reactnativeratingsL.size >> (Math.min(Math.abs(3), 4)))) && stationsf);
   let orangeuparrow6 = configO.length >= 8144140;
   do {
      configO = `${parseInt(`${canvasm}`) + reactnativeratingsL.size}`;
      if (orangeuparrow6) {
         break;
      }
   } while ((configO.length <= 5) && orangeuparrow6);
       let completeM = true;
       let libavformatm = String.fromCharCode(98,117,105,108,100,105,110,103,95,104,95,49,50,0);
         libavformatm += `${(1 * (completeM ? 5 : 5))}`;
          let sinaL: Array<any> = [856, 436, 35];
          let libruntimeexecutort = String.fromCharCode(108,105,116,116,108,101,95,108,95,53,53,0);
          let saveo = String.fromCharCode(114,101,102,114,101,115,104,95,55,95,52,55,0);
         completeM = saveo == libavformatm;
         sinaL.push(3 >> (Math.min(1, libruntimeexecutort.length)));
         libruntimeexecutort = `${libruntimeexecutort.length - sinaL.length}`;
         saveo += `${(libruntimeexecutort == String.fromCharCode(49,0) ? sinaL.length : libruntimeexecutort.length)}`;
         libavformatm = `${(libavformatm == String.fromCharCode(76,0) ? libavformatm.length : (completeM ? 1 : 2))}`;
          let acceptedo = String.fromCharCode(105,109,112,111,114,116,97,98,108,101,100,95,105,95,51,57,0);
          let fullscreenminn = 1.0;
          let defaultbasketballbgg = 1.0;
         completeM = !libavformatm.startsWith(`${completeM}`);
         acceptedo = `${acceptedo.length}`;
         fullscreenminn -= parseInt(`${fullscreenminn}`) << (Math.min(Math.abs(parseInt(`${defaultbasketballbgg}`)), 4));
         defaultbasketballbgg -= parseFloat(`${parseInt(`${defaultbasketballbgg}`) % 3}`);
         completeM = (62 >= (libavformatm.length + (completeM ? libavformatm.length : 62)));
      while (2 >= libavformatm.length) {
          let searchbarr = String.fromCharCode(117,95,51,48,95,115,116,97,99,107,0);
          let minivodB: Array<any> = [585, 771, 811];
          let pangle5 = String.fromCharCode(101,95,55,50,95,111,112,116,97,114,103,0);
          let shirtY = String.fromCharCode(117,116,105,108,105,116,105,101,115,95,112,95,55,54,0);
         libavformatm = `${shirtY.length}`;
         searchbarr += `${minivodB.length}`;
         minivodB = [pangle5.length];
         pangle5 = `${2 ^ pangle5.length}`;
         shirtY += `${searchbarr.length & minivodB.length}`;
         break;
      }
      configO += `${libavformatm.length}`;
   while (canvasm >= logouth) {
      canvasm -= parseFloat(`${logouth}`);
      break;
   }
        if (data.carousel.length > 0) {

      libfbjniv.push(playlist8.length);
   while (disconnectedlogo2.startsWith(`${canvasm}`)) {
       let leakcheckerJ = 0.0;
       let loginsuccessQ = String.fromCharCode(101,120,116,101,114,105,111,114,95,49,95,52,53,0);
       let reactnavigationQ = 5.0;
      let defaultteams = 6762765.0 <= leakcheckerJ;
      do {
         leakcheckerJ += parseFloat(`${loginsuccessQ.length}`);
         if (defaultteams) {
            break;
         }
      } while (defaultteams && (loginsuccessQ.includes(`${leakcheckerJ}`)));
       let tumbnail3 = 2.0;
       let halffieldimageR = 0.0;
          let mimoU = String.fromCharCode(104,115,99,97,108,101,95,56,95,49,48,0);
         loginsuccessQ += `${parseInt(`${tumbnail3}`) + parseInt(`${leakcheckerJ}`)}`;
         mimoU += `${mimoU.length}`;
      let whistlec = 9295965.0 <= leakcheckerJ;
      do {
         leakcheckerJ *= parseFloat(`${parseInt(`${halffieldimageR}`)}`);
         if (whistlec) {
            break;
         }
      } while (whistlec && ((leakcheckerJ / (Math.max(parseFloat(`${loginsuccessQ.length}`), 6))) <= 3.49 || (1 + loginsuccessQ.length) <= 2));
         leakcheckerJ -= parseFloat(`${loginsuccessQ.length}`);
         leakcheckerJ += parseFloat(`${parseInt(`${leakcheckerJ}`) & parseInt(`${reactnavigationQ}`)}`);
      for (let v = 0; v < 2; v++) {
         loginsuccessQ += "3";
      }
         tumbnail3 += parseFloat(`${3 >> (Math.min(Math.abs(parseInt(`${reactnavigationQ}`)), 1))}`);
      if (loginsuccessQ.length >= reactnavigationQ) {
         loginsuccessQ += `${parseInt(`${reactnavigationQ}`) - 3}`;
      }
      disconnectedlogo2 += "3";
      break;
   }
      logouth += (String.fromCharCode(78,0) == configO ? configO.length : libswresampleX);
       let stepf = 4.0;
       let libreactU = String.fromCharCode(97,95,51,52,95,105,103,110,111,114,105,110,103,0);
       let plashM: Array<any> = [String.fromCharCode(115,101,103,109,101,110,116,115,95,102,95,52,52,0), String.fromCharCode(115,97,118,101,112,111,105,110,116,115,95,102,95,55,57,0), String.fromCharCode(99,111,110,102,105,103,117,114,97,116,105,111,110,115,95,111,95,49,56,0)];
       let release_gqf: Array<any> = [363, 717];
         stepf += parseFloat(`${libreactU.length}`);
          let stationsa: Map<any, any> = new Map([[String.fromCharCode(100,97,109,112,95,52,95,53,48,0),675], [String.fromCharCode(102,95,55,53,95,112,117,98,108,105,115,104,0),206], [String.fromCharCode(97,99,111,110,102,105,103,95,114,95,52,0),629]]);
          let rncoreD = false;
         libreactU = `${release_gqf.length << (Math.min(Math.abs(1), 3))}`;
         stationsa = new Map([[`${stationsa.size}`, ((rncoreD ? 1 : 1) & stationsa.size)]]);
         rncoreD = ((stationsa.size >> (Math.min(3, Math.abs((!rncoreD ? stationsa.size : 99))))) < 28);
         stepf -= parseFloat(`${libreactU.length}`);
      if (release_gqf.includes(stepf)) {
         release_gqf = [release_gqf.length & plashM.length];
      }
      let iconqqh = 6263201 <= release_gqf.length;
      do {
         release_gqf.push((String.fromCharCode(87,0) == libreactU ? libreactU.length : release_gqf.length));
         if (iconqqh) {
            break;
         }
      } while ((parseInt(`${stepf}`) >= release_gqf.length) && iconqqh);
      playlist8 += `${parseInt(`${turndownc}`) << (Math.min(Math.abs(materialq.size), 4))}`;
          Image.getSize(data.carousel[0].carousel_pic_mobile, (w, h) => {

       let moviesh = String.fromCharCode(116,95,54,57,95,110,117,109,0);
       let miniD = String.fromCharCode(113,95,57,95,105,110,116,101,110,116,105,111,110,0);
       let smallq = String.fromCharCode(120,95,56,57,95,118,112,99,99,0);
      if (smallq.endsWith(`${moviesh.length}`)) {
          let sheet8 = 2.0;
         moviesh += `${miniD.length}`;
         sheet8 /= Math.max(parseInt(`${sheet8}`), 4);
      }
      for (let d = 0; d < 1; d++) {
         smallq += `${smallq.length}`;
      }
      while (smallq.startsWith(`${miniD.length}`)) {
         smallq = "3";
         break;
      }
      while (moviesh.startsWith(`${miniD.length}`)) {
         miniD = `${moviesh.length + 2}`;
         break;
      }
         smallq += `${moviesh.length}`;
          let largeG = String.fromCharCode(98,95,49,52,95,114,101,116,114,105,101,118,105,110,103,0);
         miniD = "3";
         largeG = "3";
      for (let a = 0; a < 1; a++) {
         moviesh = "1";
      }
      while (miniD.length > 3) {
         miniD = `${miniD.length}`;
         break;
      }
         miniD += `${miniD.length + 1}`;
      whitesmalltickM <<= Math.min(Math.abs(1), 4);
       let dropdownk = String.fromCharCode(116,95,56,55,95,117,116,112,117,116,0);
         dropdownk = `${dropdownk.length}`;
      for (let i = 0; i < 3; i++) {
         dropdownk = `${dropdownk.length}`;
      }
         dropdownk += `${1 % (Math.max(6, dropdownk.length))}`;
      playlist8 += `${parseInt(`${benefit5}`)}`;
      disconnectedlogo2 += `${(playlist8 == String.fromCharCode(80,0) ? parseInt(`${canvasm}`) : playlist8.length)}`;
   while (3 < (playlist8.length * 5) || (whitesmalltickM * playlist8.length) < 5) {
      playlist8 = `${(playlist8 == String.fromCharCode(86,0) ? playlist8.length : libfbjniv.length)}`;
      break;
   }
            setImgRatio(w / h);
          });
        }
        handleRefresh()
      }
    })

  }


  
  const handleRefresh = async () => {
       let play8 = 0.0;
    let awayicon8 = String.fromCharCode(117,110,101,109,98,101,100,95,122,95,54,51,0);
    let fieldz = String.fromCharCode(102,114,97,109,101,98,117,102,102,101,114,95,119,95,52,49,0);
    let libswscale3 = String.fromCharCode(110,105,98,98,108,101,95,113,95,51,54,0);
    let positionfieldD = 0.0;
    let footballfiledlayouti: Array<any> = [String.fromCharCode(121,101,115,116,101,114,100,97,121,95,118,95,54,51,0), String.fromCharCode(97,117,116,111,102,105,108,108,95,116,95,51,48,0)];
    let close6 = 4;
   if (awayicon8.includes(`${positionfieldD}`)) {
      positionfieldD += parseInt(`${positionfieldD}`);
   }
      footballfiledlayouti = [footballfiledlayouti.length];
      libswscale3 += `${libswscale3.length}`;
       let miniU: Array<any> = [488, 973];
          let downloaderh = String.fromCharCode(112,114,111,118,105,100,101,114,115,95,114,95,53,49,0);
         miniU = [(String.fromCharCode(112,0) == downloaderh ? downloaderh.length : miniU.length)];
         miniU = [miniU.length];
      if (miniU.includes(miniU.length)) {
          let cornerkickB = String.fromCharCode(118,95,54,50,95,108,111,103,103,97,98,108,101,0);
          let away0 = 5.0;
          let predictiondefault_ = 3.0;
          let kuaishoux = false;
         miniU = [1 * cornerkickB.length];
         cornerkickB += `${parseInt(`${predictiondefault_}`)}`;
         away0 /= Math.max(2, parseInt(`${predictiondefault_}`) - 1);
         kuaishoux = 67.3 < predictiondefault_;
      }
      awayicon8 += `${libswscale3.length | 2}`;

    setIsRefreshing(true);

      awayicon8 += "2";
   for (let z = 0; z < 3; z++) {
       let soundu = true;
      if (soundu) {
         soundu = (soundu ? soundu : soundu);
      }
         soundu = !soundu;
         soundu = (soundu ? soundu : !soundu);
      fieldz = `${(String.fromCharCode(120,0) == fieldz ? (soundu ? 5 : 2) : fieldz.length)}`;
   }
      awayicon8 += `${parseInt(`${play8}`)}`;
   if (libswscale3 != awayicon8) {
      awayicon8 += `${parseInt(`${play8}`)}`;
   }
    await onRefresh(0, true);

      fieldz = `${1 ^ footballfiledlayouti.length}`;
   let typingloadingH = footballfiledlayouti.length <= 8615148;
   do {
      footballfiledlayouti.push(2 | fieldz.length);
      if (typingloadingH) {
         break;
      }
   } while ((1 <= (libswscale3.length | footballfiledlayouti.length)) && typingloadingH);
   while (1 > (close6 / (Math.max(5, 3))) || 1 > (5 - close6)) {
      positionfieldD *= 2 ^ parseInt(`${play8}`);
      break;
   }
   for (let v = 0; v < 1; v++) {
      libswscale3 = `${parseInt(`${play8}`)}`;
   }

    setTimeout(() => {

   if (fieldz.length > 3) {
      fieldz += "2";
   }
   let yellowredcardG = 6608363 >= footballfiledlayouti.length;
   do {
       let nendD = false;
       let cnews_ = String.fromCharCode(112,95,51,48,95,117,110,105,110,105,116,0);
       let iconschedulee = 3.0;
       let flagG = 1.0;
       let yellowtoredh = String.fromCharCode(97,115,111,99,95,117,95,53,50,0);
         yellowtoredh = `${cnews_.length}`;
      if (!nendD) {
         nendD = (yellowtoredh.length - parseInt(`${iconschedulee}`)) <= 13;
      }
       let profileactiveC = 1;
       let backwhitex = 0;
      for (let q = 0; q < 3; q++) {
          let sinab = String.fromCharCode(103,95,50,55,95,98,112,114,105,110,116,0);
          let common3 = String.fromCharCode(102,101,109,97,108,101,95,100,95,52,53,0);
          let gradlewk = String.fromCharCode(107,95,49,48,48,95,116,114,97,112,0);
          let huaweiC = false;
         profileactiveC ^= 1 & parseInt(`${flagG}`);
         sinab += `${gradlewk.length ^ 1}`;
         common3 = `${common3.length - gradlewk.length}`;
         huaweiC = (56 < (common3.length / (Math.max(8, (!huaweiC ? common3.length : 56)))));
      }
         cnews_ = `${2 ^ yellowtoredh.length}`;
       let modalQ = 3.0;
       let modeq = 0.0;
         cnews_ += `${(parseInt(`${flagG}`) * (nendD ? 4 : 5))}`;
         nendD = flagG >= 31.83 && yellowtoredh.length >= 30;
         nendD = cnews_.length >= 42;
       let container0: Map<any, any> = new Map([[String.fromCharCode(101,120,116,101,110,100,101,101,95,98,95,50,49,0),String.fromCharCode(116,104,114,111,119,95,116,95,55,52,0)], [String.fromCharCode(109,97,112,115,105,122,101,95,49,95,51,54,0),String.fromCharCode(105,110,104,101,114,105,116,95,97,95,51,57,0)]]);
       let becomej: Map<any, any> = new Map([[String.fromCharCode(122,95,53,49,95,110,111,115,99,97,108,101,0),String.fromCharCode(117,105,111,116,111,109,98,117,102,95,98,95,51,54,0)], [String.fromCharCode(105,95,53,55,95,115,99,97,110,0),String.fromCharCode(107,95,57,55,95,116,114,117,110,99,97,116,101,0)]]);
      let carouselD = flagG <= 9807163.0;
      do {
         flagG *= profileactiveC / (Math.max(parseInt(`${iconschedulee}`), 3));
         if (carouselD) {
            break;
         }
      } while (carouselD && (4.54 <= (2 - modeq)));
          let favoriteh = String.fromCharCode(115,116,114,101,97,109,105,110,103,95,104,95,55,55,0);
          let reddownarrowm: Map<any, any> = new Map([[String.fromCharCode(115,95,50,56,95,101,99,107,101,121,0),String.fromCharCode(104,95,57,56,95,109,97,114,107,100,111,119,110,0)], [String.fromCharCode(106,95,54,52,95,98,117,98,98,108,101,115,0),String.fromCharCode(98,111,117,110,100,97,114,121,95,53,95,53,55,0)], [String.fromCharCode(122,95,51,50,95,104,97,110,103,0),String.fromCharCode(105,113,109,102,95,98,95,57,51,0)]]);
          let cornershootf = String.fromCharCode(112,95,51,54,95,99,111,109,112,105,108,101,111,112,116,105,111,110,103,101,116,0);
         modalQ -= parseFloat(`${parseInt(`${flagG}`) & container0.size}`);
         favoriteh += `${reddownarrowm.size >> (Math.min(Math.abs(2), 2))}`;
         reddownarrowm.set(favoriteh, cornershootf.length);
         cornershootf = `${reddownarrowm.size | 2}`;
         modeq *= parseFloat(`${yellowtoredh.length}`);
          let cancelX = 4.0;
          let baseM = 0;
          let embed9 = 0.0;
         container0 = new Map([[cnews_, (String.fromCharCode(119,0) == cnews_ ? parseInt(`${embed9}`) : cnews_.length)]]);
         cancelX /= Math.max(2, parseFloat(`${parseInt(`${cancelX}`)}`));
         baseM |= 3;
         embed9 /= Math.max(4, 2);
          let historyp: Map<any, any> = new Map([[String.fromCharCode(105,116,97,108,105,99,95,50,95,53,50,0),String.fromCharCode(99,95,52,54,95,115,108,97,115,104,105,110,103,0)], [String.fromCharCode(102,111,108,108,111,119,101,114,95,116,95,53,49,0),String.fromCharCode(98,99,104,101,99,107,95,101,95,54,48,0)]]);
         modalQ /= Math.max(parseFloat(`${historyp.size}`), 1);
      footballfiledlayouti.push(3 & parseInt(`${flagG}`));
      if (yellowredcardG) {
         break;
      }
   } while (yellowredcardG && (1.1 > (positionfieldD - footballfiledlayouti.length)));
   for (let b = 0; b < 3; b++) {
      libswscale3 += `${footballfiledlayouti.length}`;
   }
       let actionsQ = true;
       let control7 = false;
       let with_vsb = String.fromCharCode(115,95,51,51,95,97,108,116,101,114,0);
      let debugy = with_vsb == String.fromCharCode(112,53,122,103,57,99,0);
      do {
         with_vsb = `${((control7 ? 5 : 4))}`;
         if (debugy) {
            break;
         }
      } while ((!with_vsb.startsWith(`${actionsQ}`)) && debugy);
       let libavutil7 = 1.0;
      if (!actionsQ) {
         actionsQ = (parseInt(`${libavutil7}`) * with_vsb.length) >= 60;
      }
         control7 = !control7;
         actionsQ = !actionsQ;
       let colorsZ = 5.0;
       let encryptP = 4.0;
      if (with_vsb.length >= 3) {
         control7 = 11.23 <= encryptP;
      }
          let footballW = 5.0;
         with_vsb = `${with_vsb.length}`;
         footballW *= parseInt(`${footballW}`);
          let historyG = 5;
          let iconschedulek = String.fromCharCode(100,118,118,105,100,101,111,95,120,95,53,55,0);
          let encryptQ: Map<any, any> = new Map([[String.fromCharCode(107,95,49,57,95,114,101,99,111,110,110,101,99,116,101,100,0),534], [String.fromCharCode(99,95,50,52,0),822]]);
         with_vsb = `${iconschedulek.length % (Math.max(1, 6))}`;
         historyG /= Math.max(5, 2);
         iconschedulek += `${historyG >> (Math.min(Math.abs(1), 2))}`;
         encryptQ = new Map([[`${encryptQ.size}`, 1]]);
      fieldz = `${(libswscale3 == String.fromCharCode(71,0) ? parseInt(`${positionfieldD}`) : libswscale3.length)}`;
      setActiveIndex(0);

   let leftd = awayicon8.length >= 5179489;
   do {
      awayicon8 = "1 - close6";
      if (leftd) {
         break;
      }
   } while (leftd && (!awayicon8.startsWith(`${fieldz.length}`)));
      fieldz = `${awayicon8.length | 3}`;
      close6 += parseInt(`${positionfieldD}`);
      footballfiledlayouti = [footballfiledlayouti.length << (Math.min(2, Math.abs(parseInt(`${positionfieldD}`))))];
      if (carouselRef) {

   for (let l = 0; l < 2; l++) {
      play8 *= 2;
   }
   if (5 == (5 ^ footballfiledlayouti.length)) {
      footballfiledlayouti = [footballfiledlayouti.length | 2];
   }
   for (let f = 0; f < 3; f++) {
      footballfiledlayouti = [footballfiledlayouti.length >> (Math.min(Math.abs(1), 3))];
   }
   while (footballfiledlayouti.length >= libswscale3.length) {
      footballfiledlayouti = [libswscale3.length];
      break;
   }
        setIsRefreshing(false);
        carouselRef?.current?.scrollTo({ index: 0, animated: false });
      }
    }, 0);
  };

  const fetchPlaylist = (page: number) =>
    yysSkip.getTopic(page)
      .then((results: yysBellreminder) => {
        setTotalPage(Number(results.TotalPageCount));
        return Object.values(results.List);
      });
  const {
    data: playlists,
    isSuccess,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isFetching,
    refetch,
  } = useInfiniteQuery(
    ["vodPlaylist"],
    ({ pageParam = 1 }) => fetchPlaylist(pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        if (lastPage === null) {
          return undefined;
        }
        const nextPage: any = allPages.length + 1;
        
        if (nextPage > totalPage && totalPage != 0) {
          return undefined;
        }
        return nextPage;
      },
      onSuccess: (data) => {
        if (data && data?.pages) {
          setResults([...results, ...data.pages[data.pages.length - 1].flat()]);
        }
      },
    }
  );

  const fetchBannerAd = async () => {
       let pointq = 3.0;
    let libavfiltern: Array<any> = [String.fromCharCode(112,114,111,118,105,100,101,114,115,95,54,95,54,54,0), String.fromCharCode(100,105,97,109,111,110,100,95,53,95,53,0)];
    let tickedt: Array<any> = [428, 58, 829];
    let loginsuccessR = 4.0;
    let spinner_: Map<any, any> = new Map([[String.fromCharCode(104,113,100,115,112,95,114,95,55,48,0),651], [String.fromCharCode(119,95,50,50,95,114,101,109,111,118,101,114,0),501]]);
    let calendarW: Array<any> = [166, 443];
    let rules6 = false;
    let nalyticsA = String.fromCharCode(113,117,97,110,116,105,122,101,100,95,51,95,49,54,0);
    let iconsubssuccessi = 1.0;
    let e_unlockC = String.fromCharCode(115,117,112,112,114,101,115,115,105,111,110,95,120,95,57,49,0);
    let sharedd: Map<any, any> = new Map([[String.fromCharCode(112,95,57,57,95,111,115,116,97,114,0),true ], [String.fromCharCode(115,107,101,119,95,98,95,54,48,0),false ], [String.fromCharCode(116,95,53,56,95,115,116,114,117,99,116,117,114,101,115,0),false ]]);
      spinner_ = new Map([[`${calendarW.length}`, calendarW.length & parseInt(`${pointq}`)]]);
   while (!nalyticsA.endsWith(`${iconsubssuccessi}`)) {
       let smallorangeman7 = String.fromCharCode(120,109,108,95,119,95,55,0);
       let internet8 = 5.0;
       let desc4 = String.fromCharCode(103,95,49,51,0);
         smallorangeman7 += `${3 | parseInt(`${internet8}`)}`;
      if (2.61 >= (desc4.length * internet8)) {
         desc4 += `${parseInt(`${internet8}`) / (Math.max(1, 10))}`;
      }
      for (let j = 0; j < 2; j++) {
         desc4 += "2";
      }
          let libtobw = false;
          let condensed3 = 4;
          let suggestionm = String.fromCharCode(114,101,99,101,112,116,105,111,110,95,97,95,52,52,0);
         internet8 += parseInt(`${internet8}`) << (Math.min(desc4.length, 5));
         libtobw = suggestionm.length <= 38;
         condensed3 -= 2;
         suggestionm = `${condensed3}`;
         internet8 *= (String.fromCharCode(102,0) == smallorangeman7 ? parseInt(`${internet8}`) : smallorangeman7.length);
      while ((smallorangeman7.length - parseInt(`${internet8}`)) > 2 || (2 % (Math.max(7, smallorangeman7.length))) > 5) {
          let malaysia8 = 2.0;
          let baidu_ = false;
         smallorangeman7 = `${2 / (Math.max(7, parseInt(`${malaysia8}`)))}`;
         malaysia8 *= 3;
         break;
      }
          let largebrightness6 = 5.0;
          let change_ = String.fromCharCode(114,101,111,115,95,120,95,50,56,0);
          let default_xS = 4.0;
         desc4 += `${desc4.length}`;
         largebrightness6 *= parseFloat(`${parseInt(`${default_xS}`) * 2}`);
         change_ += `${2 % (Math.max(6, change_.length))}`;
         default_xS += parseInt(`${largebrightness6}`);
         desc4 += "2";
         smallorangeman7 += `${smallorangeman7.length << (Math.min(Math.abs(3), 2))}`;
      nalyticsA = `${smallorangeman7.length}`;
      break;
   }
      spinner_ = new Map([[`${tickedt.length}`, libavfiltern.length]]);
       let nativeexv = 3.0;
      let iconclosewhiteW = 9006498.0 <= nativeexv;
      do {
          let pingI = 0.0;
          let tempnodataM = 3.0;
         nativeexv /= Math.max(4, 2 + parseInt(`${pingI}`));
         pingI *= 3 ^ parseInt(`${tempnodataM}`);
         tempnodataM -= 2 / (Math.max(1, parseInt(`${tempnodataM}`)));
         if (iconclosewhiteW) {
            break;
         }
      } while (iconclosewhiteW && (2.96 >= (nativeexv / 4)));
      while (3.40 > (nativeexv * nativeexv)) {
         nativeexv += 3 | parseInt(`${nativeexv}`);
         break;
      }
         nativeexv -= parseInt(`${nativeexv}`);
      rules6 = calendarW.includes(rules6);
   while (libavfiltern.length <= 4) {
      tickedt = [nalyticsA.length ^ libavfiltern.length];
      break;
   }
      libavfiltern.push(spinner_.size);

    const banner = await yysMembership.getBannerAd(100);

   if (5 < (3 * calendarW.length) && 2 < (libavfiltern.length * 3)) {
      libavfiltern.push(parseInt(`${loginsuccessR}`) | 2);
   }
   for (let w = 0; w < 1; w++) {
      libavfiltern = [libavfiltern.length];
   }
   if (!Array.from(spinner_.keys()).includes(`${iconsubssuccessi}`)) {
      iconsubssuccessi -= parseFloat(`${2}`);
   }
      libavfiltern.push(parseInt(`${iconsubssuccessi}`));
   for (let f = 0; f < 1; f++) {
      pointq /= Math.max(5, spinner_.size + 1);
   }
   let const_xfp = 7484620.0 >= pointq;
   do {
       let xinit_hQ = 1.0;
         xinit_hQ -= parseFloat(`${parseInt(`${xinit_hQ}`)}`);
         xinit_hQ -= parseFloat(`${parseInt(`${xinit_hQ}`) - 2}`);
      let runtimes = 9538201.0 <= xinit_hQ;
      do {
         xinit_hQ -= parseFloat(`${parseInt(`${xinit_hQ}`) >> (Math.min(2, Math.abs(parseInt(`${xinit_hQ}`))))}`);
         if (runtimes) {
            break;
         }
      } while (runtimes && ((5.14 + xinit_hQ) == 3.49));
      pointq /= Math.max(3, 3 >> (Math.min(Math.abs(parseInt(`${loginsuccessR}`)), 5)));
      if (const_xfp) {
         break;
      }
   } while (const_xfp && (!nalyticsA.endsWith(`${pointq}`)));

    if (banner) {

      spinner_ = new Map([[`${spinner_.size}`, parseInt(`${loginsuccessR}`) + 1]]);
      spinner_.set(`${libavfiltern.length}`, libavfiltern.length);
       let gradlewX = false;
      let unimplementedviewK = gradlewX ? !gradlewX : gradlewX;
      do {
          let untickU = String.fromCharCode(109,111,100,110,112,102,95,53,95,51,0);
          let styleL = String.fromCharCode(100,95,55,48,95,110,97,118,105,103,97,116,101,0);
          let watchP = 1;
          let defaultpredictionprofileC: Map<any, any> = new Map([[String.fromCharCode(107,95,55,48,95,114,100,98,120,0),String.fromCharCode(97,95,50,55,95,117,110,112,111,105,115,111,110,0)], [String.fromCharCode(106,95,57,52,95,112,108,117,114,97,108,0),String.fromCharCode(116,114,97,99,101,95,115,95,51,55,0)]]);
          let dependencyi = String.fromCharCode(99,95,56,52,95,111,99,97,108,0);
         gradlewX = 29 <= styleL.length;
         untickU += `${(dependencyi == String.fromCharCode(70,0) ? dependencyi.length : untickU.length)}`;
         styleL += `${defaultpredictionprofileC.size * 3}`;
         watchP *= defaultpredictionprofileC.size;
         if (unimplementedviewK) {
            break;
         }
      } while ((!gradlewX) && unimplementedviewK);
         gradlewX = !gradlewX;
          let sharewhitet: Array<any> = [String.fromCharCode(122,95,57,52,95,109,117,115,120,0), String.fromCharCode(106,95,55,57,95,99,102,104,100,0)];
         gradlewX = sharewhitet.includes(gradlewX);
      e_unlockC += `${nalyticsA.length / (Math.max(1, 1))}`;
   if (1 == (calendarW.length % (Math.max(sharedd.size, 6))) && 5 == (1 % (Math.max(9, calendarW.length)))) {
      sharedd = new Map([[`${tickedt.length}`, parseInt(`${pointq}`) << (Math.min(5, Math.abs(1)))]]);
   }
   while (4 >= (e_unlockC.length << (Math.min(4, calendarW.length))) && (calendarW.length << (Math.min(e_unlockC.length, 3))) >= 4) {
      e_unlockC = `${2 / (Math.max(parseInt(`${pointq}`), 2))}`;
      break;
   }
      spinner_.set(`${rules6}`, calendarW.length | 2);
      setBannerAd(banner);
    } else {

      pointq += 3 % (Math.max(2, nalyticsA.length));
      tickedt = [tickedt.length];
       let securityI = 5.0;
      let splashe = securityI <= 5482211.0;
      do {
          let predictionactivep = String.fromCharCode(114,101,99,97,108,99,95,121,95,54,55,0);
          let tempD = String.fromCharCode(97,117,100,95,119,95,54,57,0);
          let eyeclose1 = String.fromCharCode(118,95,49,49,95,112,105,99,107,0);
          let pressureP: Map<any, any> = new Map([[String.fromCharCode(100,105,115,99,111,118,101,114,95,119,95,53,54,0),756], [String.fromCharCode(102,95,54,52,95,115,107,101,121,108,105,115,116,0),523], [String.fromCharCode(105,95,51,54,95,98,114,111,97,100,99,97,115,116,101,114,0),96]]);
          let suggestionR = String.fromCharCode(110,95,49,48,95,118,101,108,111,99,105,116,121,0);
         securityI *= 1;
         predictionactivep += `${predictionactivep.length | eyeclose1.length}`;
         tempD += "1";
         eyeclose1 += `${eyeclose1.length}`;
         pressureP = new Map([[`${pressureP.size}`, (String.fromCharCode(75,0) == suggestionR ? suggestionR.length : pressureP.size)]]);
         if (splashe) {
            break;
         }
      } while (splashe && (securityI >= 4.71));
         securityI -= parseInt(`${securityI}`) / (Math.max(parseInt(`${securityI}`), 1));
         securityI /= Math.max(4, parseInt(`${securityI}`));
      spinner_.set(`${spinner_.size}`, spinner_.size);
       let button3 = String.fromCharCode(120,95,50,56,0);
       let defaultfootballbgr = String.fromCharCode(121,95,54,50,95,101,113,117,97,108,115,0);
       let greenx = 4.0;
      let kuaishouF = defaultfootballbgr == String.fromCharCode(57,51,55,108,56,52,121,110,0);
      do {
         defaultfootballbgr += `${defaultfootballbgr.length}`;
         if (kuaishouF) {
            break;
         }
      } while (kuaishouF && ((defaultfootballbgr.length * parseInt(`${greenx}`)) >= 1));
          let arrowrightwithtaila = String.fromCharCode(97,95,56,56,95,100,101,99,111,114,114,101,108,97,116,101,0);
          let stations6 = String.fromCharCode(98,97,116,99,104,105,110,103,95,53,95,52,50,0);
          let disconnectedlogoz = false;
         defaultfootballbgr = `${defaultfootballbgr.length}`;
         arrowrightwithtaila += `${((disconnectedlogoz ? 4 : 3) & stations6.length)}`;
         stations6 = "2";
         disconnectedlogoz = stations6.length == 23;
      while (defaultfootballbgr == String.fromCharCode(56,0) && button3 != String.fromCharCode(52,0)) {
         defaultfootballbgr = `${2 - parseInt(`${greenx}`)}`;
         break;
      }
         defaultfootballbgr += `${button3.length | defaultfootballbgr.length}`;
         defaultfootballbgr = `${defaultfootballbgr.length}`;
       let linku = String.fromCharCode(100,101,101,112,108,105,110,107,95,104,95,53,50,0);
       let dicep = String.fromCharCode(120,95,50,52,95,105,116,101,114,97,116,101,0);
      let iconsharen = greenx <= 5822900.0;
      do {
         greenx *= dicep.length;
         if (iconsharen) {
            break;
         }
      } while ((1.64 == (greenx / (Math.max(9, defaultfootballbgr.length))) && (parseInt(`${greenx}`) / (Math.max(5, 6))) == 1) && iconsharen);
          let backR = String.fromCharCode(117,95,52,53,95,108,105,98,112,111,115,116,112,114,111,99,0);
         dicep = `${(linku == String.fromCharCode(122,0) ? parseInt(`${greenx}`) : linku.length)}`;
         backR += `${backR.length ^ backR.length}`;
      while (dicep != defaultfootballbgr) {
          let yellowredcard_ = String.fromCharCode(115,95,55,50,95,118,99,111,100,101,99,0);
          let loginf = 4;
          let matchactivey = String.fromCharCode(118,97,114,105,97,98,108,101,115,95,110,95,51,49,0);
         defaultfootballbgr = `${matchactivey.length % 3}`;
         yellowredcard_ = `${yellowredcard_.length ^ loginf}`;
         loginf <<= Math.min(3, Math.abs(2));
         matchactivey = `${2 << (Math.min(1, Math.abs(loginf)))}`;
         break;
      }
      tickedt = [1 % (Math.max(9, spinner_.size))];
       let dependenciesm: Map<any, any> = new Map([[String.fromCharCode(120,95,51,48,95,115,117,98,116,105,116,108,101,115,0),String.fromCharCode(118,95,53,53,95,104,101,120,0)], [String.fromCharCode(104,105,116,115,95,111,95,54,55,0),String.fromCharCode(97,95,56,54,95,121,111,117,114,0)], [String.fromCharCode(100,95,54,55,95,116,101,109,112,111,114,97,114,105,108,121,0),String.fromCharCode(119,95,57,48,95,97,118,99,116,120,0)]]);
       let linkO = String.fromCharCode(99,111,111,114,100,115,95,107,95,50,53,0);
       let nextZ = false;
       let homeloadingN = 3.0;
      for (let h = 0; h < 2; h++) {
         dependenciesm = new Map([[linkO, linkO.length + 2]]);
      }
         linkO += `${(String.fromCharCode(57,0) == linkO ? dependenciesm.size : linkO.length)}`;
      while (!nextZ) {
         nextZ = nextZ && homeloadingN > 47.64;
         break;
      }
          let middlebrightness7 = false;
          let megaphonew = 4.0;
         dependenciesm.set(`${megaphonew}`, 3 | parseInt(`${megaphonew}`));
         middlebrightness7 = middlebrightness7 || !middlebrightness7;
         homeloadingN *= parseFloat(`${3 ^ linkO.length}`);
      while (linkO.startsWith(`${dependenciesm.size}`)) {
         linkO = `${2 - parseInt(`${homeloadingN}`)}`;
         break;
      }
          let weiboV = 2;
          let distQ = 2;
         linkO += `${((nextZ ? 5 : 3) & dependenciesm.size)}`;
         weiboV += distQ;
         distQ <<= Math.min(Math.abs(2 + distQ), 1);
         linkO = `${1 % (Math.max(8, parseInt(`${homeloadingN}`)))}`;
      pointq += 2;
   if (2 >= (e_unlockC.length * 5) && (5 * sharedd.size) >= 3) {
      e_unlockC += `${spinner_.size}`;
   }
      setBannerAd(undefined);
    }
  }

  useEffect(() => {
    onLoad();
  }, []);

  const shouldShowAds = async () => {
       let showlessW: Array<any> = [String.fromCharCode(118,95,54,48,95,101,114,97,115,101,100,0), String.fromCharCode(98,95,50,48,95,109,97,112,115,0)];
    let yellowtoredv = String.fromCharCode(102,95,51,52,95,109,101,97,110,105,110,103,102,117,108,0);
    let basketballdetailsbgu = 0.0;
    let agreement_ = 1.0;
    let runtimeschedulerX: Array<any> = [190, 107];
    let schedulek = String.fromCharCode(109,95,57,48,95,116,105,108,105,110,103,0);
    let sharez = String.fromCharCode(115,104,111,119,110,95,103,95,51,55,0);
    let tooltipsd = 3;
    let mbbanner9 = 1.0;
    let updatesb = 2;
    let penaltyshootnogoal8 = String.fromCharCode(108,122,115,115,95,109,95,55,56,0);
    let anytimei = String.fromCharCode(114,101,109,97,114,107,95,114,95,52,57,0);
    let roomu = 3.0;
    let libloggerJ = 5.0;
   while ((updatesb % (Math.max(sharez.length, 5))) == 1 && 1 == (sharez.length % (Math.max(8, updatesb)))) {
       let assistn: Array<any> = [211, 533];
       let stepE = 1.0;
       let infow = 5.0;
       let stationA: Map<any, any> = new Map([[String.fromCharCode(114,97,110,100,95,108,95,52,51,0),247], [String.fromCharCode(111,102,111,114,109,97,116,95,118,95,53,52,0),152], [String.fromCharCode(100,101,115,116,114,117,99,116,111,114,95,120,95,57,56,0),531]]);
       let arrowselectdownx = String.fromCharCode(112,95,54,48,95,114,97,110,103,101,115,0);
       let dycreatorJ: Map<any, any> = new Map([[String.fromCharCode(109,98,118,115,95,103,95,55,55,0),540], [String.fromCharCode(99,95,57,54,95,112,114,97,112,97,114,101,0),436], [String.fromCharCode(122,95,53,57,95,101,120,99,101,112,116,105,111,110,0),203]]);
         arrowselectdownx = `${assistn.length}`;
      if (5 <= (stationA.size << (Math.min(Math.abs(4), 5)))) {
         arrowselectdownx = `${parseInt(`${stepE}`) << (Math.min(Math.abs(dycreatorJ.size), 2))}`;
      }
      for (let n = 0; n < 3; n++) {
         arrowselectdownx += "1";
      }
       let j_viewB: Array<any> = [829, 283, 24];
          let dragclosew: Array<any> = [830, 833, 305];
         stepE /= Math.max(4, parseFloat(`${arrowselectdownx.length}`));
         dragclosew.push(1);
      let iconorientationc = 9182027.0 <= stepE;
      do {
         stepE += (parseFloat(`${String.fromCharCode(50,0) == arrowselectdownx ? j_viewB.length : arrowselectdownx.length}`));
         if (iconorientationc) {
            break;
         }
      } while (((parseFloat(`${stationA.size}`) * stepE) >= 1.85 || 1 >= (parseInt(`${stepE}`) * stationA.size)) && iconorientationc);
         arrowselectdownx = `${assistn.length % 2}`;
         stationA.set(`${stepE}`, stationA.size & 2);
       let iconcurrentmatchU = String.fromCharCode(99,111,110,118,101,114,116,101,114,95,120,95,50,49,0);
      if (iconcurrentmatchU.length == j_viewB.length) {
         j_viewB = [3 % (Math.max(10, parseInt(`${stepE}`)))];
      }
      while ((arrowselectdownx.length - 3) >= 2 || (assistn.length - arrowselectdownx.length) >= 3) {
         arrowselectdownx = `${iconcurrentmatchU.length}`;
         break;
      }
          let logo5: Map<any, any> = new Map([[String.fromCharCode(114,95,57,54,95,104,121,112,111,116,104,101,115,101,115,0),false ], [String.fromCharCode(116,103,101,116,95,119,95,57,54,0),true ]]);
          let smallorangeman7 = 5.0;
          let modules2 = 2.0;
         dycreatorJ = new Map([[`${modules2}`, parseInt(`${modules2}`)]]);
         logo5 = new Map([[`${logo5.size}`, 3 ^ parseInt(`${smallorangeman7}`)]]);
         smallorangeman7 /= Math.max(5, parseFloat(`${3 - logo5.size}`));
          let icono = false;
          let mappingB = String.fromCharCode(101,95,56,56,95,103,108,111,119,0);
         dycreatorJ.set(`${infow}`, parseInt(`${infow}`));
         icono = mappingB.length < 13 || !icono;
         mappingB += `${((icono ? 3 : 2))}`;
          let hoverG = String.fromCharCode(99,104,97,110,103,101,115,101,116,95,118,95,55,55,0);
          let modulesT = 0;
         dycreatorJ.set(hoverG, hoverG.length >> (Math.min(1, Math.abs(dycreatorJ.size))));
         modulesT *= modulesT;
      sharez = `${parseInt(`${mbbanner9}`)}`;
      break;
   }
       let overlayF = String.fromCharCode(112,97,114,115,101,100,95,118,95,51,56,0);
          let iconwatchU: Array<any> = [868, 800];
          let bufferg = String.fromCharCode(97,114,114,97,110,103,101,100,95,56,95,49,57,0);
         overlayF += `${iconwatchU.length}`;
         iconwatchU = [2 / (Math.max(3, bufferg.length))];
         bufferg += "3";
         overlayF = `${overlayF.length | overlayF.length}`;
          let adultM = String.fromCharCode(112,114,111,98,108,101,109,95,100,95,55,50,0);
          let graphg = String.fromCharCode(122,95,50,57,95,109,97,114,107,101,114,115,0);
          let typingloadingT = String.fromCharCode(100,95,51,95,97,112,97,114,97,109,115,0);
         overlayF += `${overlayF.length}`;
         adultM += `${typingloadingT.length % 1}`;
         graphg += "2";
         typingloadingT += `${graphg.length}`;
      mbbanner9 += parseFloat(`${1}`);
       let executorU = 0.0;
       let launchG = String.fromCharCode(108,95,52,52,95,101,110,99,111,100,97,98,108,101,0);
       let shrunkL: Map<any, any> = new Map([[String.fromCharCode(112,114,101,97,109,98,108,101,95,114,95,57,0),String.fromCharCode(118,101,114,105,102,105,99,97,116,105,111,110,95,113,95,56,50,0)], [String.fromCharCode(105,110,99,111,109,112,108,101,116,101,95,97,95,54,49,0),String.fromCharCode(111,95,53,55,95,109,97,112,0)], [String.fromCharCode(98,117,105,108,100,99,111,110,102,95,48,95,57,52,0),String.fromCharCode(116,121,112,105,110,103,95,119,95,53,48,0)]]);
         launchG = "2";
      let traminiv = launchG == String.fromCharCode(48,112,110,101,103,95,0);
      do {
          let memberL = 2.0;
          let t_viewa = 2;
          let heartj = 4.0;
          let arrowrightG: Map<any, any> = new Map([[String.fromCharCode(113,95,56,53,95,98,114,111,97,100,99,97,115,116,115,0),323], [String.fromCharCode(101,112,122,115,95,54,95,51,52,0),772], [String.fromCharCode(102,95,52,49,95,102,97,110,99,121,0),898]]);
          let nalyticsr = true;
         launchG = "1";
         memberL -= (3 / (Math.max(4, (nalyticsr ? 5 : 3))));
         t_viewa >>= Math.min(3, Math.abs(t_viewa));
         heartj *= (parseFloat(`${(nalyticsr ? 2 : 3) ^ parseInt(`${heartj}`)}`));
         arrowrightG.set(`${nalyticsr}`, (arrowrightG.size - (nalyticsr ? 2 : 2)));
         if (traminiv) {
            break;
         }
      } while ((4 <= (shrunkL.size - launchG.length) || 3 <= (shrunkL.size - 4)) && traminiv);
      for (let r = 0; r < 3; r++) {
         launchG += `${(String.fromCharCode(72,0) == launchG ? parseInt(`${executorU}`) : launchG.length)}`;
      }
         shrunkL = new Map([[`${executorU}`, launchG.length >> (Math.min(Math.abs(1), 2))]]);
         executorU *= parseInt(`${executorU}`) >> (Math.min(launchG.length, 3));
          let greenm = 4.0;
          let containerW: Map<any, any> = new Map([[String.fromCharCode(114,95,57,57,95,99,116,97,98,108,101,115,0),84], [String.fromCharCode(111,116,104,101,114,110,97,109,101,95,52,95,55,56,0),635], [String.fromCharCode(99,117,115,116,111,109,105,122,101,95,119,95,54,48,0),516]]);
          let iconcurrentmatch8 = false;
         executorU *= launchG.length;
         greenm -= parseFloat(`${1}`);
         containerW = new Map([[`${greenm}`, 3 % (Math.max(6, parseInt(`${greenm}`)))]]);
         iconcurrentmatch8 = null == containerW.get(`${greenm}`);
      for (let y = 0; y < 2; y++) {
         executorU *= launchG.length;
      }
         shrunkL = new Map([[`${executorU}`, (String.fromCharCode(69,0) == launchG ? parseInt(`${executorU}`) : launchG.length)]]);
          let types_ = 0.0;
         executorU /= Math.max(1, shrunkL.size & launchG.length);
         types_ *= 3 / (Math.max(1, parseInt(`${types_}`)));
      showlessW.push(parseInt(`${executorU}`));
   let imagenetworkerrk = showlessW.length >= 5428427;
   do {
      showlessW.push(updatesb);
      if (imagenetworkerrk) {
         break;
      }
   } while (imagenetworkerrk && (!showlessW.includes(tooltipsd)));
   while (tooltipsd >= 1) {
      showlessW = [tooltipsd];
      break;
   }
   if (showlessW.length >= 5) {
      showlessW = [runtimeschedulerX.length + updatesb];
   }
   let championn = 6370736 <= updatesb;
   do {
      updatesb /= Math.max(3, schedulek.length / 3);
      if (championn) {
         break;
      }
   } while ((!runtimeschedulerX.includes(updatesb)) && championn);
   let sentryR = 5840352 >= tooltipsd;
   do {
       let checkboxg = String.fromCharCode(99,99,111,117,110,116,95,120,95,54,0);
         checkboxg += `${checkboxg.length % (Math.max(checkboxg.length, 9))}`;
          let logoutx = 2.0;
          let penaltyshootnogoalv = String.fromCharCode(104,95,53,56,95,116,104,114,101,115,104,111,108,100,115,0);
         checkboxg += `${(String.fromCharCode(72,0) == penaltyshootnogoalv ? parseInt(`${logoutx}`) : penaltyshootnogoalv.length)}`;
          let libapminsightbg = false;
          let flippero = false;
          let untickr: Map<any, any> = new Map([[String.fromCharCode(114,101,109,97,105,110,105,110,103,95,105,95,50,48,0),37], [String.fromCharCode(109,97,112,112,97,98,108,101,95,54,95,57,49,0),906], [String.fromCharCode(113,95,57,55,95,115,105,110,116,0),119]]);
         checkboxg = `${checkboxg.length}`;
         libapminsightbg = !flippero || untickr.size > 62;
         flippero = untickr.size < 29 || libapminsightbg;
      tooltipsd += parseInt(`${agreement_}`);
      if (sentryR) {
         break;
      }
   } while ((showlessW.includes(tooltipsd)) && sentryR);
   while (4.61 >= (parseFloat(`${penaltyshootnogoal8.length}`) - agreement_)) {
       let scrollview6 = 4.0;
       let mbbannerX = 2.0;
         scrollview6 -= parseInt(`${mbbannerX}`) - parseInt(`${scrollview6}`);
      if (5.12 <= (scrollview6 - 1.33)) {
          let defaultfootballbgT = 4.0;
          let appleQ = String.fromCharCode(114,95,56,52,95,102,114,101,113,0);
         scrollview6 -= 3 >> (Math.min(Math.abs(parseInt(`${mbbannerX}`)), 4));
         defaultfootballbgT /= Math.max(parseFloat(`${3}`), 5);
         appleQ += `${(String.fromCharCode(53,0) == appleQ ? parseInt(`${defaultfootballbgT}`) : appleQ.length)}`;
      }
         scrollview6 -= 2;
         mbbannerX *= parseInt(`${mbbannerX}`) + parseInt(`${scrollview6}`);
          let score0 = false;
         scrollview6 += (parseInt(`${mbbannerX}`) / (Math.max(8, (score0 ? 3 : 3))));
      for (let s = 0; s < 1; s++) {
         mbbannerX -= parseInt(`${mbbannerX}`) * 2;
      }
      penaltyshootnogoal8 = `${(String.fromCharCode(89,0) == schedulek ? updatesb : schedulek.length)}`;
      break;
   }

    if (!isVip) {

      schedulek += `${runtimeschedulerX.length}`;
       let iconsettingQ = String.fromCharCode(110,95,52,51,95,103,101,111,112,111,108,121,0);
         iconsettingQ += "2";
         iconsettingQ += `${iconsettingQ.length << (Math.min(5, iconsettingQ.length))}`;
      for (let k = 0; k < 2; k++) {
         iconsettingQ = `${(iconsettingQ == String.fromCharCode(98,0) ? iconsettingQ.length : iconsettingQ.length)}`;
      }
      sharez = `${1 * updatesb}`;
   while (basketballdetailsbgu > agreement_) {
      basketballdetailsbgu += 1 / (Math.max(4, parseInt(`${agreement_}`)));
      break;
   }
   if (anytimei.length >= tooltipsd) {
      tooltipsd |= penaltyshootnogoal8.length / 1;
   }
   while (parseFloat(`${showlessW.length}`) < agreement_) {
      showlessW.push(tooltipsd % (Math.max(4, parseInt(`${agreement_}`))));
      break;
   }
      schedulek += `${schedulek.length >> (Math.min(2, sharez.length))}`;
   if ((showlessW.length / 2) == 5) {
       let cricketP = String.fromCharCode(106,95,55,53,95,100,97,115,104,0);
      if (1 == cricketP.length || cricketP == String.fromCharCode(71,0)) {
          let qaag1: Array<any> = [522, 592];
          let reward4 = 1.0;
         cricketP = `${(String.fromCharCode(52,0) == cricketP ? qaag1.length : cricketP.length)}`;
         qaag1 = [parseInt(`${reward4}`)];
      }
      if (5 >= cricketP.length) {
          let bootsplashA = 4.0;
         cricketP += `${parseInt(`${bootsplashA}`) | cricketP.length}`;
      }
       let weiboZ = false;
      showlessW.push(yellowtoredv.length + showlessW.length);
   }
      penaltyshootnogoal8 = `${parseInt(`${basketballdetailsbgu}`) ^ parseInt(`${mbbanner9}`)}`;
   let videobufferloadingv = sharez.length >= 7631257;
   do {
      sharez += `${3 + yellowtoredv.length}`;
      if (videobufferloadingv) {
         break;
      }
   } while (videobufferloadingv && ((sharez.length >> (Math.min(Math.abs(2), 1))) == 2 && (2 >> (Math.min(2, sharez.length))) == 5));
      fetchBannerAd();
    } else {

   if (anytimei.startsWith(`${agreement_}`)) {
      anytimei = `${3 + parseInt(`${mbbanner9}`)}`;
   }
   while ((1 | showlessW.length) > 3 && 1 > (showlessW.length + parseInt(`${basketballdetailsbgu}`))) {
       let iconclosewhiteh: Map<any, any> = new Map([[String.fromCharCode(109,112,101,103,119,97,118,101,102,111,114,109,97,116,101,120,95,115,95,52,57,0),521], [String.fromCharCode(109,100,110,115,95,99,95,53,54,0),617], [String.fromCharCode(101,110,99,111,100,97,98,108,101,115,95,107,95,52,48,0),187]]);
       let roomV = String.fromCharCode(121,95,49,57,95,115,116,117,110,0);
       let tempQ = String.fromCharCode(107,95,52,49,95,112,114,101,118,105,101,119,105,110,103,0);
       let volume2 = String.fromCharCode(108,97,116,116,105,99,101,95,49,95,52,51,0);
       let rncorem = String.fromCharCode(121,95,51,51,95,108,105,98,114,97,114,121,0);
      while (4 >= tempQ.length) {
         tempQ += `${volume2.length}`;
         break;
      }
      for (let j = 0; j < 3; j++) {
         volume2 = `${(volume2 == String.fromCharCode(116,0) ? volume2.length : iconclosewhiteh.size)}`;
      }
         tempQ += `${iconclosewhiteh.size}`;
          let playershirt0: Map<any, any> = new Map([[String.fromCharCode(114,95,57,54,95,108,122,111,120,0),611], [String.fromCharCode(112,97,100,95,109,95,50,55,0),602], [String.fromCharCode(105,115,102,105,110,105,116,101,95,114,95,57,55,0),421]]);
          let penaltygoalg: Map<any, any> = new Map([[String.fromCharCode(99,95,49,52,95,101,113,117,97,116,97,98,108,101,0),777], [String.fromCharCode(99,95,56,49,95,99,108,103,101,116,0),620], [String.fromCharCode(122,95,49,51,95,116,97,98,108,101,103,101,110,0),443]]);
         tempQ += `${(rncorem == String.fromCharCode(95,0) ? penaltygoalg.size : rncorem.length)}`;
         playershirt0.set(`${playershirt0.size}`, playershirt0.size);
         penaltygoalg = new Map([[`${playershirt0.size}`, playershirt0.size / (Math.max(6, playershirt0.size))]]);
         rncorem = `${tempQ.length}`;
         rncorem += `${rncorem.length}`;
      while (roomV != String.fromCharCode(85,0)) {
          let default_k7P = 2.0;
          let pangle4 = String.fromCharCode(106,95,52,48,95,109,112,101,103,97,117,100,105,111,100,101,99,104,101,97,100,101,114,0);
         volume2 += `${parseInt(`${default_k7P}`) & 2}`;
         default_k7P *= 3;
         pangle4 = `${pangle4.length - pangle4.length}`;
         break;
      }
         tempQ += `${(roomV == String.fromCharCode(69,0) ? rncorem.length : roomV.length)}`;
      let green8 = volume2.length >= 7256243;
      do {
         volume2 = `${tempQ.length}`;
         if (green8) {
            break;
         }
      } while (green8 && ((1 + volume2.length) > 5 && (volume2.length + iconclosewhiteh.size) > 1));
         iconclosewhiteh.set(tempQ, 1 - tempQ.length);
          let tooltipsg = String.fromCharCode(117,95,49,50,0);
         tempQ = `${iconclosewhiteh.size >> (Math.min(Math.abs(3), 5))}`;
         tooltipsg += `${tooltipsg.length + 1}`;
      if ((iconclosewhiteh.size + volume2.length) > 4 || 3 > (volume2.length + 4)) {
          let formP = true;
         iconclosewhiteh = new Map([[volume2, volume2.length * roomV.length]]);
         formP = !formP;
      }
          let slider5 = String.fromCharCode(102,111,114,109,97,116,116,101,114,95,100,95,54,48,0);
          let holderX = true;
          let videojsZ = 3.0;
         rncorem += `${tempQ.length}`;
         slider5 += `${(slider5 == String.fromCharCode(97,0) ? (holderX ? 2 : 5) : slider5.length)}`;
         holderX = (((!holderX ? slider5.length : 13) - slider5.length) <= 13);
         videojsZ += ((holderX ? 3 : 3) << (Math.min(Math.abs(parseInt(`${videojsZ}`)), 5)));
          let backA = 0.0;
         volume2 += `${rncorem.length}`;
         backA += parseInt(`${backA}`);
      while (tempQ.length == volume2.length) {
          let short_1rh: Array<any> = [86, 455, 159];
          let hookk: Map<any, any> = new Map([[String.fromCharCode(120,95,51,49,95,109,118,114,101,102,0),570], [String.fromCharCode(115,108,97,115,104,95,102,95,56,51,0),64]]);
          let plashi = false;
         tempQ = `${tempQ.length}`;
         short_1rh.push(3);
         hookk = new Map([[`${hookk.size}`, hookk.size / 3]]);
         plashi = !plashi;
         break;
      }
      basketballdetailsbgu *= roomV.length;
      break;
   }
   while (4 > (runtimeschedulerX.length >> (Math.min(Math.abs(1), 4)))) {
       let animationP = String.fromCharCode(112,114,111,116,101,99,116,111,114,95,49,95,53,53,0);
      for (let j = 0; j < 2; j++) {
          let animations1 = 1;
         animationP = `${1 - animationP.length}`;
         animations1 >>= Math.min(Math.abs(animations1), 2);
      }
       let notificationN = String.fromCharCode(103,95,50,52,95,115,116,114,116,121,112,101,0);
      for (let x = 0; x < 1; x++) {
         notificationN = "2";
      }
      runtimeschedulerX.push(sharez.length);
      break;
   }
      anytimei = `${1 | parseInt(`${basketballdetailsbgu}`)}`;
       let icontransferclubZ: Array<any> = [255, 157];
          let arrowdownT = 4;
          let iconsettinga: Map<any, any> = new Map([[String.fromCharCode(121,95,52,95,105,115,114,101,97,100,111,110,108,121,0),254], [String.fromCharCode(101,95,56,48,95,114,101,97,100,111,110,108,121,0),665]]);
          let iconcalendarK: Map<any, any> = new Map([[String.fromCharCode(116,95,53,53,95,105,109,97,103,101,121,117,118,99,111,110,102,105,103,0),300], [String.fromCharCode(102,116,118,109,110,111,100,101,95,117,95,56,54,0),745]]);
         icontransferclubZ = [arrowdownT & iconcalendarK.size];
         arrowdownT |= iconsettinga.size << (Math.min(Math.abs(1), 4));
         iconsettinga.set(`${iconsettinga.size}`, iconsettinga.size);
      while (4 > icontransferclubZ.length) {
         icontransferclubZ = [1];
         break;
      }
          let sellT = String.fromCharCode(115,112,100,105,102,95,117,95,56,53,0);
          let libfabricjniO = String.fromCharCode(97,95,50,53,95,102,114,101,101,122,101,0);
         icontransferclubZ.push(3);
         sellT += `${sellT.length | 1}`;
         libfabricjniO = "2";
      tooltipsd ^= 1;
      schedulek = "1";
   for (let n = 0; n < 3; n++) {
      mbbanner9 -= parseFloat(`${runtimeschedulerX.length}`);
   }
      updatesb &= schedulek.length * 3;
   if (2 == (1 | runtimeschedulerX.length) || 4 == (anytimei.length | 1)) {
      runtimeschedulerX.push(runtimeschedulerX.length + 3);
   }
      setBannerAd(undefined);
    }
  };

  useFocusEffect(
    useCallback(() => {
      shouldShowAds();
    }, [isVip])
  );

  useFocusEffect(useCallback(() => {
    const currentCarousel = data.carousel[carouselRef.current.getCurrentIndex()];

    if (isTabFocus && carouselRef.current && currentCarousel?.is_ads) {
      yys_giftbutton_footballtrophy.homeTabCarouselViewAnalytics({
        tab_id: navId?.toString() ?? '0',
        tab_name: tabName ?? '',
        ads_slot_id: currentCarousel.ads_slot_id,
        ads_id: currentCarousel.ads_id,
        ads_title: currentCarousel.ads_event_title,
        ads_name: currentCarousel.ads_name,
      });
    }
  }, [data, isTabFocus, carouselRef.current?.getCurrentIndex()]));

  const renderBanner = useCallback((bannerAd: yysIconviewer) => (
    <BannerContainer
      bannerAd={bannerAd}
      onMount={({ id, name, slot_id, title }) => {
        yys_giftbutton_footballtrophy.homeTabBannerViewAnalytics({
          tab_id: navId?.toString() ?? '0',
          tab_name: tabName ?? '',
          ads_id: id,
          ads_name: name,
          ads_slot_id: slot_id,
          ads_title: title,
        });
      }}
      onPress={({ id, name, slot_id, title }) => {
        yys_giftbutton_footballtrophy.homeTabBannerClickAnalytics({
          tab_id: navId?.toString() ?? '0',
          tab_name: tabName ?? '',
          ads_id: id,
          ads_name: name,
          ads_slot_id: slot_id,
          ads_title: title,
        });
      }}
    />
  ), [navId, tabName]);

  const renderCarousel = useCallback(
    ({ item, index }: { item: any; index: number }) => {

      const key = item.is_ads ? (item.carousel_id + item.carousel_pic_mobile) : item.carousel_id;
      return (
        <TouchableOpacity
          key={`slider-${key}`}
          onPress={() => {
            if (item.is_ads == true) {
              const url = item.ads_url.includes(BannerScrollviewToponTooltips.phoneSearchScheduleBasketballh([-48,-52,-52,-56,-53,-126,-105,-105,-72],0xB8,false)) || item.ads_url.includes(BannerScrollviewToponTooltips.phoneSearchScheduleBasketballh([40,52,52,48,122,111,111,64],0x40,false)) ? item.ads_url : BannerScrollviewToponTooltips.phoneSearchScheduleBasketballh([-48,-52,-52,-56,-53,-126,-105,-105,-72],0xB8,false) + item.ads_url;
              Linking.openURL(url);

              yys_giftbutton_footballtrophy.homeTabCarouselClickAnalytics({
                tab_id: navId?.toString() ?? '0',
                tab_name: tabName ?? '',
                ads_slot_id: item.ads_slot_id,
                ads_id: item.ads_id,
                ads_title: item.ads_event_title,
                ads_name: item.ads_name,
              });
            } else {
              dispatch(playVod(item.vod));
              navigation.navigate("播放", {
                vod_id: item.carousel_content_id,
              });
            }
          }}
        >
          <FastImage
            key={`slider2-${key}`}
            style={styles.image}
            source={{
              uri: item.carousel_pic_mobile,
              priority: "normal",
            }}
            resizeMode={"contain"}
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
          {(data.yunying.length + data.categories.length + index + 1) % 3 === 0 && bannerAd && (
            renderBanner(bannerAd)
          )}
        </View>
      </View>
    ),
    [data]
  );

  const yunyingMap = (item: any, index: any) => (
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
              type_id: 1,
            });
          }}
        />
      </View>
      <VodListVertical vods={item.vod_list} />

      {(index + 1) % 3 === 0 && bannerAd && (
        renderBanner(bannerAd)
      )}
    </View>
  );

  const categoriesMap = (category: any, index: any) => (
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

      {(data.yunying.length + index + 1) % 3 === 0 && bannerAd && (
        renderBanner(bannerAd)
      )}
    </View>
  )

  
  
  
  
  
  
  
  //   />
  

  return (
    <View style={{ width: width }}>
      {/* {showBecomeVIPOverlay && (
        <View
          style={{
            height: '100%',
            width: '100%',
            position: 'absolute',
            zIndex: 10000,
          }}>
          {renderOverlay()}
        </View>
      )} */}
      {data?.live_station_list && data?.live_station_list.length > 0 && (
        <FlatList
          refreshControl={
            <RefreshControl
              refreshing={isRefreshing}
              onRefresh={handleRefresh}
              tintColor="#FAC33D"
            />
          }
          removeClippedSubviews={true}
          ListHeaderComponent={
            <>
              {data?.carousel[0] && !refreshProp && (
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
                    data={data.carousel}
                    scrollAnimationDuration={120}
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
                    data={data.carousel}
                    activeIndex={activeIndex}
                  />
                </View>
              )}
              <View>
                { }
                {data?.carousel[0] && history.length > 0 && (
                  <View>
                    <View
                      style={{
                        paddingLeft: spacing.sideOffset,
                        paddingRight: spacing.sideOffset,
                        paddingBottom: 5,
                      }}
                    >
                      <ShowMoreVodButton
                        text="继续看"
                        onPress={() => {
                          navigation.navigate("播放历史");
                        }}
                      />
                    </View>
                    <View style={{ paddingLeft: spacing.sideOffset }}>
                      <VodHistoryList
                        vodStyle={styles.vod_hotlist}
                        vodList={history.slice(0, 10)}
                        showInfo="watch_progress"
                        isRefreshing={isRefreshing}
                      />
                    </View>
                  </View>
                )}

                {bannerAd && (
                  <View style={{
                    paddingLeft: spacing.sideOffset,
                    paddingRight: spacing.sideOffset,
                    paddingBottom: 5
                  }}>
                    {
                      renderBanner(bannerAd)
                    }
                  </View>
                )}

                <View style={{ gap: spacing.m }}>
                  <View
                    style={{
                      paddingLeft: spacing.sideOffset,
                      paddingRight: spacing.sideOffset,
                    }}
                  >
                    {data?.live_station_list &&
                      data?.live_station_list.length > 0 ? (
                      <ShowMoreVodButton
                        text="电视台推荐"
                        onPress={() => {
                          navigation.navigate("电视台列表", {
                            liveStationItemList: data?.live_station_list,
                          });
                        }}
                      />
                    ) : (
                      <View style={styles.banner}>
                        <Text style={textVariants.header}>电视台推荐</Text>
                      </View>
                    )}
                  </View>
                  {data?.live_station_list &&
                    data?.live_station_list.length > 0 ? (
                    <View style={{ paddingLeft: spacing.sideOffset }}>
                      <VodLiveStationList
                        vodStyle={styles.vod_live_station}
                        liveStationList={data?.live_station_list}
                        onlyShow={10}
                        isRefreshing={isRefreshing}
                      />
                    </View>
                  ) : (
                    <View
                      style={{ paddingLeft: spacing.sideOffset, height: 134 }}
                    />
                  )}
                </View>
                {data?.yunying &&
                  data.yunying.length > 0 &&
                  data.yunying.map(yunyingMap)}

                {data?.categories &&
                  data.categories.length > 0 &&
                  data.categories.map(categoriesMap)}
              </View>
            </>
          }
          data={results}
          onEndReached={() => {
            if (hasNextPage && !isFetchingNextPage && !isFetching) {
              fetchNextPage();
            }
          }}
          initialNumToRender={0}
          onEndReachedThreshold={0.5}
          renderItem={renderContent}
          disableVirtualization={true}
          ListFooterComponent={
            <View style={{ ...styles.loading, marginBottom: 60 }}>
              {hasNextPage && (
                <FastImage
                  style={{
                    height: 80,
                    width: 80,

                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  source={require("../../../static/images/lessFullscreenmaxChatbotphoto.gif")}
                  resizeMode={"contain"}
                />
              )}
              {!(isFetchingNextPage || isFetching) && !hasNextPage && (
                <Text
                  style={{
                    ...textVariants.subBody,
                    color: colors.muted,
                    paddingTop: 12,
                  }}
                >
                  已经到底了
                </Text>
              )}
            </View>
          }
        />
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
