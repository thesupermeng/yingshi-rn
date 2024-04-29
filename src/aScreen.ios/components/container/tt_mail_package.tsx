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
import ShowMoreVodButton from "../button/tt_style_button";
import { ttSport, ttAppsOther, ttSide } from "@type/tt_line_borderless";
import FastImage from "../common/tt_connection";
import { ttStreaming } from "@redux/reducers/tt_configure_injury";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/tt_spec_download";
import { ttOrange } from "@redux/tt_updates_bottom";
import VodHistoryList from "../vod/tt_blacklist";
import VodLiveStationList from "../vod/tt_constants_crown";
import { API_DOMAIN, API_DOMAIN_TEST } from "@utility/tt_trophy_cross";
import VodListVertical from "../vod/tt_player";
import { playVod, viewPlaylistDetails } from "@redux/actions/tt_activity";
import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import LinearGradient from "react-native-linear-gradient";
import Carousel from "react-native-reanimated-carousel";
import CarouselPagination from "./tt_minivod_combine";
import LoadingIcon from "@static/images/catagoryShort_jPage.svg";
import { Image } from "react-native";
import { YingPingContainer } from "../container/tt_minivod_complete";
import { ttSinaPrediction, ttMbbannerMore } from "@api";
import { ttGoal } from "@redux/reducers/tt_selected";
import { ttFast } from "@models/tt_stations_right";
import { screenModel } from "@type/tt_twitter_data";
import { setYuGao } from "@redux/actions/tt_copy_heji";

interface ttRegister {
  id: number;
  name: string;
}
interface ttSmall {
  vodCarouselRes: any;
  navOptions?: ttRegister[] | undefined;
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
       let infow = String.fromCharCode(115,112,108,105,116,95,57,95,53,57,0);
    let chinasame3: Array<any> = [String.fromCharCode(116,95,55,49,95,105,115,112,97,116,99,104,0), String.fromCharCode(106,95,51,48,0), String.fromCharCode(100,95,52,57,95,112,111,112,117,108,97,116,101,100,0)];
    let pressureb = 5;
    let optionsI = 5.0;
    let gesturesV = 2;
    let shrinkZ: Map<any, any> = new Map([[String.fromCharCode(115,95,53,53,95,108,97,114,103,101,114,0),773], [String.fromCharCode(112,108,117,114,97,108,105,122,97,116,105,111,110,95,112,95,52,52,0),230], [String.fromCharCode(102,114,97,103,109,101,110,116,115,95,120,95,57,51,0),584]]);
    let sharedZ = 4.0;
    let anytimeA = 5;
    let unselectedZ: Array<any> = [309, 974, 937];
    let mbnativeW = false;
    let moviesR = String.fromCharCode(117,115,101,99,95,120,95,54,51,0);
    let refreshb: Array<any> = [424, 593, 746];
    let left6 = 5;
    let googleU = 3;
    let regengb: Array<any> = [597, 852, 29];
   let untick0 = 9551479 <= chinasame3.length;
   do {
       let overd = 1.0;
       let sportsH = String.fromCharCode(99,95,54,55,95,108,115,98,102,117,108,108,0);
       let notificationK = true;
       let downL: Array<any> = [825, 93];
       let activeH: Map<any, any> = new Map([[String.fromCharCode(118,105,100,101,111,115,95,52,95,52,0),300], [String.fromCharCode(112,95,50,51,95,115,116,121,112,0),316]]);
          let borderlessb = String.fromCharCode(100,113,117,111,116,101,95,111,95,50,54,0);
          let becomeU = String.fromCharCode(114,97,100,97,114,95,106,95,49,48,48,0);
         overd += parseFloat(`${becomeU.length}`);
         borderlessb += `${borderlessb.length}`;
         becomeU += `${2 * borderlessb.length}`;
          let tempn = String.fromCharCode(109,101,103,97,98,121,116,101,95,108,95,54,49,0);
         downL.push(activeH.size);
         tempn = `${tempn.length}`;
      while (1 >= (3 ^ sportsH.length) || (sportsH.length ^ activeH.size) >= 3) {
         sportsH += "2";
         break;
      }
      for (let h = 0; h < 1; h++) {
         downL.push(activeH.size);
      }
          let pressureE = String.fromCharCode(117,95,52,55,95,112,97,114,105,116,105,111,110,105,110,103,0);
          let scheduleb = String.fromCharCode(118,95,57,51,95,112,101,115,113,0);
         sportsH += `${sportsH.length - 3}`;
         pressureE = `${pressureE.length}`;
         scheduleb += `${pressureE.length}`;
      let tumbnailV = overd >= 7633832.0;
      do {
         overd *= parseFloat(`${parseInt(`${overd}`)}`);
         if (tumbnailV) {
            break;
         }
      } while ((activeH.size >= 2) && tumbnailV);
      while (1.32 >= (3.55 - overd) && 3 >= (sportsH.length + 3)) {
          let calendarn = 5.0;
         sportsH += "1";
         calendarn += 2 >> (Math.min(Math.abs(parseInt(`${calendarn}`)), 4));
         break;
      }
       let thumbnailc = false;
         notificationK = thumbnailc;
         downL = [sportsH.length];
          let brightnessP = String.fromCharCode(103,95,54,55,95,102,108,117,115,104,105,110,103,0);
          let u_centern = String.fromCharCode(118,95,51,51,95,101,120,116,101,110,115,105,111,110,0);
         overd += parseFloat(`${u_centern.length}`);
         brightnessP += `${brightnessP.length | brightnessP.length}`;
         u_centern += "2";
      let containerv = 9469755.0 >= overd;
      do {
          let servicev: Map<any, any> = new Map([[String.fromCharCode(103,95,50,56,95,114,119,103,116,0),612], [String.fromCharCode(112,111,108,108,95,118,95,56,49,0),945]]);
          let cornery = String.fromCharCode(114,101,97,108,105,102,121,95,114,95,50,0);
          let actionq: Map<any, any> = new Map([[String.fromCharCode(99,111,112,121,109,95,107,95,50,56,0),false ], [String.fromCharCode(110,95,55,48,95,113,117,97,110,116,105,122,101,114,115,0),false ], [String.fromCharCode(101,95,52,53,95,97,108,105,103,110,101,114,0),false ]]);
          let invitev = 0.0;
         overd += parseFloat(`${2}`);
         servicev = new Map([[`${actionq.size}`, parseInt(`${invitev}`) << (Math.min(Math.abs(1), 5))]]);
         cornery = "2";
         actionq = new Map([[`${actionq.size}`, actionq.size]]);
         invitev += parseFloat(`${1}`);
         if (containerv) {
            break;
         }
      } while (containerv && (overd >= 4.15));
         sportsH += `${(sportsH == String.fromCharCode(103,0) ? parseInt(`${overd}`) : sportsH.length)}`;
      while (3 > (activeH.size + 1)) {
         activeH.set(sportsH, (String.fromCharCode(90,0) == sportsH ? sportsH.length : parseInt(`${overd}`)));
         break;
      }
      while (!thumbnailc) {
         thumbnailc = !notificationK;
         break;
      }
      chinasame3 = [1];
      if (untick0) {
         break;
      }
   } while ((!chinasame3.includes(optionsI)) && untick0);
       let emojiX = 5;
      for (let v = 0; v < 1; v++) {
          let l_image6 = true;
          let materialN = String.fromCharCode(116,95,56,57,95,110,111,110,98,0);
         emojiX *= 1 | emojiX;
         l_image6 = !l_image6;
         materialN = `${((l_image6 ? 3 : 1))}`;
      }
      while ((emojiX + emojiX) == 1 && 4 == (1 + emojiX)) {
          let faviconI = 0;
          let sanso: Array<any> = [586, 93, 71];
          let hejiZ = 4.0;
          let catalog7 = 3.0;
         emojiX >>= Math.min(Math.abs(emojiX | sanso.length), 5);
         faviconI |= parseInt(`${catalog7}`);
         sanso.push(3 & faviconI);
         hejiZ += faviconI;
         break;
      }
      for (let q = 0; q < 2; q++) {
         emojiX /= Math.max(emojiX * 1, 2);
      }
      gesturesV &= parseInt(`${sharedZ}`);
      gesturesV |= 3 % (Math.max(gesturesV, 5));
       let productn = 4;
       let grayi = String.fromCharCode(109,99,111,114,101,95,111,95,51,48,0);
         productn |= productn ^ grayi.length;
          let photoI: Array<any> = [136, 71];
          let moviesa = String.fromCharCode(117,95,50,53,95,111,110,116,97,99,116,0);
         productn += moviesa.length / (Math.max(1, 8));
         photoI = [photoI.length << (Math.min(3, photoI.length))];
         moviesa = `${photoI.length | 2}`;
      let dpluss = grayi.length <= 6827462;
      do {
          let termsD = String.fromCharCode(120,116,101,97,95,119,95,56,54,0);
          let twitterb = 0;
          let blackW = 1;
          let refresh1 = String.fromCharCode(99,95,56,51,0);
         grayi += `${productn}`;
         termsD = `${termsD.length / (Math.max(4, refresh1.length))}`;
         twitterb -= 1;
         blackW /= Math.max(1, 3);
         refresh1 += `${termsD.length}`;
         if (dpluss) {
            break;
         }
      } while ((grayi.length == productn) && dpluss);
      for (let d = 0; d < 3; d++) {
          let pageu = String.fromCharCode(103,95,50,56,95,115,97,118,101,100,0);
          let skipE = 4.0;
          let settingY = true;
         productn ^= 1;
         pageu += `${((settingY ? 1 : 5))}`;
         skipE /= Math.max(((settingY ? 1 : 1) * parseInt(`${skipE}`)), 1);
      }
      for (let p = 0; p < 1; p++) {
         grayi = `${grayi.length & productn}`;
      }
         grayi = `${productn - 2}`;
      infow += "1";
       let anner2 = String.fromCharCode(120,95,51,52,95,97,103,101,0);
       let zoomZ = 3.0;
          let handler5 = 0;
          let benefitm = false;
          let yellowI = String.fromCharCode(105,116,97,108,105,97,110,95,53,95,57,54,0);
         anner2 = `${((benefitm ? 2 : 3) + yellowI.length)}`;
         handler5 <<= Math.min(3, Math.abs(1 - handler5));
         benefitm = (handler5 * handler5) <= 88;
         zoomZ -= parseFloat(`${1 + parseInt(`${zoomZ}`)}`);
          let guidew = false;
          let whistleX = String.fromCharCode(121,95,52,55,95,116,105,99,107,115,0);
         zoomZ += (parseFloat(`${whistleX == String.fromCharCode(70,0) ? whistleX.length : anner2.length}`));
         guidew = !guidew;
       let condensede = String.fromCharCode(100,101,118,105,99,101,95,103,95,52,50,0);
       let historyI = String.fromCharCode(114,95,49,55,95,112,111,116,105,115,105,111,110,0);
      let gemfileW = 6329542 >= condensede.length;
      do {
         condensede += `${historyI.length}`;
         if (gemfileW) {
            break;
         }
      } while ((condensede.length < anner2.length) && gemfileW);
      let bellT = 8068952 <= historyI.length;
      do {
         historyI += `${(String.fromCharCode(110,0) == condensede ? parseInt(`${zoomZ}`) : condensede.length)}`;
         if (bellT) {
            break;
         }
      } while (((2 >> (Math.min(2, historyI.length))) > 1) && bellT);
      unselectedZ.push(3);
      infow += `${shrinkZ.size + 1}`;
      infow += `${(infow.length * (mbnativeW ? 2 : 1))}`;
      gesturesV ^= 3;
   while ((moviesR.length >> (Math.min(3, Math.abs(anytimeA)))) == 1) {
       let stepn = 0.0;
       let humidity9 = 2.0;
      let mbbanner9 = 5944786.0 <= stepn;
      do {
         stepn *= parseInt(`${humidity9}`);
         if (mbbanner9) {
            break;
         }
      } while ((stepn == 1.50) && mbbanner9);
      while ((humidity9 - 4) == 2.69) {
          let middle6 = 3;
          let launcherG = 3;
          let annerH = 5.0;
          let slider4: Map<any, any> = new Map([[String.fromCharCode(113,95,50,51,95,101,110,116,114,111,112,121,109,118,0),false ], [String.fromCharCode(105,109,97,103,101,95,117,95,51,57,0),true ], [String.fromCharCode(111,95,53,95,102,108,97,99,100,115,112,0),true ]]);
         stepn -= parseInt(`${annerH}`) % (Math.max(7, parseInt(`${humidity9}`)));
         middle6 ^= 1 * slider4.size;
         launcherG *= launcherG + 3;
         annerH /= Math.max(2, launcherG + slider4.size);
         break;
      }
      if ((humidity9 * 1.47) <= 2.29 && 1.92 <= (humidity9 / 1.47)) {
          let tumbnailI = String.fromCharCode(108,97,110,103,115,95,121,95,56,53,0);
          let windD = 2.0;
          let pointI = 1.0;
          let over9 = String.fromCharCode(99,95,50,52,95,115,108,117,114,112,0);
         humidity9 *= parseInt(`${stepn}`) / (Math.max(tumbnailI.length, 8));
         tumbnailI += `${over9.length}`;
         windD -= 1;
         pointI *= parseFloat(`${parseInt(`${windD}`)}`);
         over9 = `${2 + over9.length}`;
      }
         humidity9 -= parseInt(`${stepn}`) / (Math.max(8, parseInt(`${humidity9}`)));
      let trophyf = stepn >= 9312993.0;
      do {
         stepn += parseInt(`${humidity9}`);
         if (trophyf) {
            break;
         }
      } while (trophyf && (4.90 == (2.100 * stepn)));
      while (4.7 > (stepn - 1.67)) {
          let albumF = String.fromCharCode(120,95,49,49,95,104,111,115,116,115,0);
          let spinnerl = String.fromCharCode(107,95,50,53,95,97,112,112,114,111,118,101,114,0);
         stepn -= parseInt(`${stepn}`) - spinnerl.length;
         albumF += "2";
         spinnerl = `${albumF.length | 3}`;
         break;
      }
      moviesR = "3";
      break;
   }
   while (4.89 > (1.19 / (Math.max(7, optionsI)))) {
      mbnativeW = refreshb.length < 80 && !mbnativeW;
      break;
   }
      moviesR = `${1 - parseInt(`${optionsI}`)}`;
   if (moviesR.endsWith(`${chinasame3.length}`)) {
      chinasame3 = [2];
   }
      gesturesV /= Math.max(pressureb, 3);
   if ((refreshb.length + 5) > 2) {
       let usernamea = String.fromCharCode(97,99,107,110,111,119,108,101,100,103,101,100,95,101,95,49,51,0);
       let stationZ = 3.0;
         usernamea += `${usernamea.length}`;
         usernamea = "2";
      if ((4 + usernamea.length) >= 1 || (parseInt(`${stationZ}`) / 4) >= 1) {
          let logoT = false;
          let reducer1 = String.fromCharCode(100,95,50,49,0);
          let eighteenk = String.fromCharCode(112,114,101,102,105,120,101,115,95,51,95,52,55,0);
         usernamea += `${eighteenk.length % (Math.max(reducer1.length, 5))}`;
         logoT = (!logoT ? logoT : logoT);
         reducer1 += `${((logoT ? 2 : 2))}`;
      }
      for (let h = 0; h < 1; h++) {
         stationZ -= parseFloat(`${1}`);
      }
      for (let g = 0; g < 2; g++) {
         usernamea += "2";
      }
      if (usernamea.endsWith(`${stationZ}`)) {
          let delegate_ykZ: Map<any, any> = new Map([[String.fromCharCode(121,95,49,57,95,116,117,114,110,111,102,102,0),362], [String.fromCharCode(118,95,55,55,95,98,97,110,100,105,110,103,0),800]]);
          let typesF = String.fromCharCode(115,95,57,56,95,112,114,105,110,116,0);
          let debugo: Array<any> = [983, 200];
         usernamea = "2";
         delegate_ykZ.set(`${debugo.length}`, 1);
         typesF = "2";
         debugo.push(typesF.length);
      }
      refreshb = [shrinkZ.size ^ anytimeA];
   }
   for (let k = 0; k < 3; k++) {
      refreshb.push(anytimeA >> (Math.min(infow.length, 4)));
   }
      refreshb.push(anytimeA >> (Math.min(moviesR.length, 2)));
   while (4 == (pressureb / (Math.max(6, anytimeA)))) {
      pressureb <<= Math.min(Math.abs(1), 4);
      break;
   }
   for (let u = 0; u < 2; u++) {
      chinasame3 = [gesturesV ^ parseInt(`${optionsI}`)];
   }
      gesturesV %= Math.max(4, parseInt(`${optionsI}`));
   while (!mbnativeW) {
       let redirectJ = 1.0;
       let inactiveP = 1;
       let statistics2 = 4.0;
      for (let f = 0; f < 2; f++) {
         inactiveP += 2 % (Math.max(8, parseInt(`${statistics2}`)));
      }
          let applicationH = true;
          let whitev = String.fromCharCode(116,95,54,50,95,112,114,105,111,114,105,116,105,101,115,0);
          let roomn = String.fromCharCode(100,101,108,115,117,112,101,114,95,49,95,49,51,0);
         statistics2 += 3;
         applicationH = roomn.length > 20;
         whitev = `${roomn.length >> (Math.min(3, whitev.length))}`;
       let linkn = String.fromCharCode(103,114,97,100,108,101,95,97,95,50,49,0);
          let switch_ker = String.fromCharCode(118,101,114,105,102,105,101,114,95,112,95,53,57,0);
          let darkx = false;
          let downloadI = 3.0;
         redirectJ -= parseFloat(`${parseInt(`${redirectJ}`) << (Math.min(3, Math.abs(1)))}`);
         switch_ker += "3";
         darkx = 33.0 < downloadI && darkx;
         downloadI *= ((darkx ? 1 : 4) - parseInt(`${downloadI}`));
      for (let e = 0; e < 1; e++) {
         statistics2 -= 2;
      }
          let applel = String.fromCharCode(114,95,53,51,95,99,114,101,97,116,105,118,101,0);
          let description_yiE = String.fromCharCode(103,95,53,54,95,115,117,98,118,105,101,119,0);
          let full6 = false;
         redirectJ -= parseFloat(`${applel.length & 2}`);
         applel += `${description_yiE.length % (Math.max(1, 6))}`;
         description_yiE += `${(description_yiE.length & (full6 ? 3 : 2))}`;
         redirectJ -= parseFloat(`${linkn.length * 1}`);
      while (1.6 <= (3.47 / (Math.max(5, redirectJ))) && (redirectJ / 3.47) <= 1.59) {
          let watchc = String.fromCharCode(122,95,51,48,95,105,110,99,111,110,115,105,115,116,101,110,99,121,0);
         linkn = `${parseInt(`${redirectJ}`) * inactiveP}`;
         watchc += `${watchc.length}`;
         break;
      }
      let lessn = 8177688.0 >= redirectJ;
      do {
         redirectJ /= Math.max(parseFloat(`${inactiveP >> (Math.min(Math.abs(parseInt(`${redirectJ}`)), 1))}`), 3);
         if (lessn) {
            break;
         }
      } while ((5.85 <= redirectJ) && lessn);
      moviesR += "2";
      break;
   }
   while ((1 & gesturesV) >= 5) {
      refreshb.push(anytimeA);
      break;
   }
      refreshb.push(2 * unselectedZ.length);
      left6 += 1 * chinasame3.length;
   while (4 >= (3 | pressureb)) {
       let phoneb = 0;
       let macauF = String.fromCharCode(115,117,112,112,111,114,116,95,109,95,57,52,0);
      if (phoneb == 5) {
         phoneb *= (macauF == String.fromCharCode(111,0) ? phoneb : macauF.length);
      }
       let countdownf = false;
      pressureb *= gesturesV;
      break;
   }
   let privilegeP = 8891606 >= infow.length;
   do {
      infow += "1";
      if (privilegeP) {
         break;
      }
   } while ((infow.length >= refreshb.length) && privilegeP);
   let clockO = mbnativeW ? !mbnativeW : mbnativeW;
   do {
      mbnativeW = optionsI <= 91.20 && 91.20 <= sharedZ;
      if (clockO) {
         break;
      }
   } while ((left6 == 3) && clockO);
      sharedZ *= parseFloat(`${shrinkZ.size * 3}`);
   for (let c = 0; c < 2; c++) {
      moviesR += `${((mbnativeW ? 5 : 2) / (Math.max(anytimeA, 8)))}`;
   }
   if ((2 | unselectedZ.length) == 5 || (pressureb | 2) == 3) {
       let starW = 5.0;
       let update_9r = String.fromCharCode(105,100,99,105,110,95,51,95,54,54,0);
          let paginationy: Array<any> = [String.fromCharCode(110,95,56,95,105,110,118,111,99,97,116,105,111,110,0), String.fromCharCode(119,114,111,116,101,95,103,95,54,48,0), String.fromCharCode(115,121,110,99,115,97,102,101,95,100,95,52,50,0)];
          let winde = 4.0;
         starW += parseInt(`${winde}`) & 3;
         paginationy = [2 & paginationy.length];
         winde -= paginationy.length << (Math.min(Math.abs(2), 3));
      for (let d = 0; d < 1; d++) {
         starW *= parseInt(`${starW}`) - update_9r.length;
      }
          let thumbnailn = 4.0;
          let humidity1 = 3;
          let traminin: Array<any> = [13, 297, 344];
         starW -= parseInt(`${starW}`);
         thumbnailn -= parseFloat(`${3}`);
         humidity1 += humidity1;
         traminin = [traminin.length];
      let fills = 9278988 >= update_9r.length;
      do {
          let pointL = 1.0;
          let foregroundo = false;
          let datag = String.fromCharCode(106,111,98,95,101,95,49,57,0);
          let floatingV = 4.0;
          let arrowR = 0.0;
         update_9r = `${datag.length}`;
         pointL /= Math.max(parseInt(`${arrowR}`) - 2, 3);
         foregroundo = arrowR > 26.17;
         datag = "3";
         floatingV -= ((foregroundo ? 4 : 3) / (Math.max(9, parseInt(`${pointL}`))));
         if (fills) {
            break;
         }
      } while (fills && (update_9r.includes(`${starW}`)));
       let alertl = true;
          let lightg = true;
          let recommendation6 = 5;
         alertl = lightg || recommendation6 == 64;
      pressureb ^= 3 | pressureb;
   }
      shrinkZ = new Map([[`${unselectedZ.length}`, unselectedZ.length + anytimeA]]);
   let userw = moviesR.length <= 6669640;
   do {
      moviesR += `${unselectedZ.length ^ 1}`;
      if (userw) {
         break;
      }
   } while (userw && (refreshb.length <= moviesR.length));
      anytimeA -= 1;
      pressureb &= 3;
      moviesR = `${refreshb.length}`;
       let smallg = String.fromCharCode(114,116,112,109,97,112,95,56,95,56,51,0);
       let short_t3Q = 4.0;
      for (let i = 0; i < 1; i++) {
         short_t3Q -= 3;
      }
          let short_be = 0;
          let switch_m5_ = true;
          let catagoryA = String.fromCharCode(113,95,49,51,95,103,97,116,104,101,114,0);
         short_t3Q *= parseInt(`${short_t3Q}`);
         short_be -= short_be;
         switch_m5_ = short_be > 41 || 41 > catagoryA.length;
         catagoryA += `${((switch_m5_ ? 5 : 5) / (Math.max(3, 7)))}`;
      while (smallg.length == 5) {
          let hooksB = String.fromCharCode(112,111,115,116,95,52,95,52,52,0);
          let fieldM = true;
          let search7 = String.fromCharCode(114,101,97,100,98,121,116,101,95,111,95,49,48,48,0);
         smallg = `${(search7 == String.fromCharCode(88,0) ? smallg.length : search7.length)}`;
         hooksB = `${hooksB.length | 2}`;
         fieldM = ((hooksB.length & (!fieldM ? hooksB.length : 92)) > 92);
         break;
      }
      if (2 >= (parseInt(`${short_t3Q}`) + 5) || (short_t3Q + 3.55) >= 2.69) {
         short_t3Q /= Math.max(parseInt(`${short_t3Q}`) | 3, 2);
      }
         short_t3Q += 2;
          let gmailh = false;
         short_t3Q += (parseInt(`${short_t3Q}`) + (gmailh ? 4 : 5));
      gesturesV >>= Math.min(5, Math.abs(parseInt(`${short_t3Q}`)));
   if (5 == (anytimeA % 4)) {
       let expandv = 0;
         expandv -= 3 >> (Math.min(3, Math.abs(expandv)));
      if (expandv > 2) {
          let langX = String.fromCharCode(106,95,56,54,95,115,108,111,119,100,111,119,110,0);
         expandv <<= Math.min(4, langX.length);
      }
      if (5 > expandv) {
          let middlewareW: Array<any> = [409, 674];
          let backgroundi = String.fromCharCode(99,95,49,57,95,102,108,111,111,114,0);
          let configures = 5.0;
          let mbbannerz = false;
         expandv -= (String.fromCharCode(73,0) == backgroundi ? expandv : backgroundi.length);
         middlewareW = [3 % (Math.max(4, parseInt(`${configures}`)))];
         configures /= Math.max(parseFloat(`${parseInt(`${configures}`) / (Math.max(middlewareW.length, 2))}`), 3);
         mbbannerz = parseFloat(`${middlewareW.length}`) < configures;
      }
      anytimeA ^= 3;
   }
   let plashn = mbnativeW ? !mbnativeW : mbnativeW;
   do {
      mbnativeW = anytimeA > 20;
      if (plashn) {
         break;
      }
   } while (plashn && (mbnativeW));
   for (let q = 0; q < 2; q++) {
       let humiditys = String.fromCharCode(114,116,112,102,98,95,122,95,49,52,0);
       let usera = 1.0;
         humiditys += `${humiditys.length}`;
         usera -= humiditys.length / 3;
      for (let z = 0; z < 3; z++) {
          let mbridgec: Map<any, any> = new Map([[String.fromCharCode(114,101,97,100,115,95,120,95,57,52,0),342], [String.fromCharCode(112,114,111,120,105,101,115,95,120,95,55,48,0),139]]);
          let mbsplashQ = 5.0;
         humiditys = `${mbridgec.size}`;
         mbridgec = new Map([[`${mbsplashQ}`, parseInt(`${mbsplashQ}`)]]);
      }
      let internet0 = usera >= 4916178.0;
      do {
         usera -= (String.fromCharCode(120,0) == humiditys ? humiditys.length : parseInt(`${usera}`));
         if (internet0) {
            break;
         }
      } while ((5.7 == (usera - 2.76) && 3.45 == (2.76 - usera)) && internet0);
         humiditys = `${parseInt(`${usera}`) + humiditys.length}`;
         humiditys += `${humiditys.length}`;
      optionsI -= 3;
   }
      googleU |= left6 * shrinkZ.size;
   if (anytimeA <= 3) {
      anytimeA *= moviesR.length % (Math.max(1, 7));
   }
   while (4.64 < (1.82 * optionsI)) {
       let teamC = String.fromCharCode(105,110,118,97,108,105,100,97,116,101,95,102,95,57,52,0);
       let plusf = String.fromCharCode(121,111,110,108,121,120,95,55,95,57,49,0);
       let casta = false;
       let signinupP = String.fromCharCode(119,95,56,53,95,115,121,109,109,101,116,114,105,99,0);
       let linez: Array<any> = [579, 563, 849];
       let volumeo = 1.0;
         signinupP += `${((casta ? 3 : 1) * teamC.length)}`;
          let adultH = 1.0;
         linez.push(2 % (Math.max(10, signinupP.length)));
         adultH += 3 & parseInt(`${adultH}`);
          let eventC = String.fromCharCode(106,100,109,97,115,116,101,114,95,101,95,52,57,0);
          let chinaa: Array<any> = [String.fromCharCode(115,116,97,114,115,95,51,95,52,50,0), String.fromCharCode(104,95,52,50,95,103,117,105,100,101,115,0), String.fromCharCode(122,95,55,53,0)];
          let rulesO = true;
         plusf = "1";
         eventC = `${((rulesO ? 5 : 1))}`;
         chinaa = [3 ^ eventC.length];
         rulesO = eventC.length <= 84;
      for (let c = 0; c < 2; c++) {
         casta = !casta;
      }
         linez = [signinupP.length];
      while (5 == teamC.length) {
          let thumbnailw = 4;
          let animationq = String.fromCharCode(115,101,99,116,111,114,95,112,95,55,55,0);
         teamC += `${3 | plusf.length}`;
         thumbnailw -= animationq.length;
         animationq = `${animationq.length | 1}`;
         break;
      }
          let streamingI = 5.0;
          let clubI = String.fromCharCode(115,95,55,52,95,108,97,110,103,117,97,103,101,0);
         signinupP += `${parseInt(`${volumeo}`)}`;
         streamingI /= Math.max(4, (parseFloat(`${String.fromCharCode(108,0) == clubI ? parseInt(`${streamingI}`) : clubI.length}`)));
          let ewardedM = String.fromCharCode(97,116,111,105,95,97,95,57,55,0);
          let h_centerm: Map<any, any> = new Map([[String.fromCharCode(109,101,116,104,111,100,95,116,95,52,53,0),String.fromCharCode(114,101,115,105,122,101,100,95,48,95,54,50,0)], [String.fromCharCode(108,105,109,105,116,97,116,105,111,110,95,107,95,54,0),String.fromCharCode(109,111,99,107,101,100,95,52,95,49,51,0)]]);
         casta = String.fromCharCode(119,0) == teamC;
         ewardedM += `${ewardedM.length * h_centerm.size}`;
         h_centerm.set(`${ewardedM}`, ewardedM.length);
      for (let i = 0; i < 3; i++) {
         casta = plusf.includes(`${casta}`);
      }
         plusf += `${plusf.length & 1}`;
      while (4 < (plusf.length * parseInt(`${volumeo}`))) {
          let w_viewd: Array<any> = [547, 19];
          let suggestionC = String.fromCharCode(118,95,54,51,95,100,101,108,97,116,101,100,0);
         plusf = `${linez.length}`;
         w_viewd = [suggestionC.length];
         suggestionC += "1";
         break;
      }
         plusf = `${(signinupP == String.fromCharCode(53,0) ? parseInt(`${volumeo}`) : signinupP.length)}`;
      while ((volumeo / 5.42) >= 2.57) {
          let singaporef = 2.0;
          let serviceY = false;
          let aboutK = String.fromCharCode(110,95,50,50,95,114,115,104,105,102,116,0);
          let countdownW = String.fromCharCode(109,111,110,111,98,105,116,95,117,95,57,57,0);
         volumeo *= parseFloat(`${teamC.length & countdownW.length}`);
         singaporef += (parseInt(`${singaporef}`) * (serviceY ? 3 : 3));
         serviceY = (((serviceY ? 61 : aboutK.length) / (Math.max(10, aboutK.length))) < 61);
         countdownW = `${((serviceY ? 5 : 5) >> (Math.min(Math.abs(parseInt(`${singaporef}`)), 1)))}`;
         break;
      }
         volumeo += (parseFloat(`${String.fromCharCode(85,0) == signinupP ? signinupP.length : linez.length}`));
      pressureb += 1 + unselectedZ.length;
      break;
   }
   if (1 >= (4 * left6) || (4 * anytimeA) >= 3) {
      left6 /= Math.max(5, unselectedZ.length & chinasame3.length);
   }
   if (4 >= (5 * gesturesV)) {
      moviesR += `${gesturesV}`;
   }
   if (5 >= (3 >> (Math.min(1, Math.abs(pressureb))))) {
      pressureb *= gesturesV;
   }
   if (optionsI <= gesturesV) {
      optionsI += googleU * shrinkZ.size;
   }
   let type_4fP = String.fromCharCode(122,54,107,102,101,0) == infow;
   do {
      infow = `${parseInt(`${sharedZ}`) & 2}`;
      if (type_4fP) {
         break;
      }
   } while (type_4fP && ((infow.length + 3) == 3));
      sharedZ -= parseFloat(`${1}`);
       let inactivej = String.fromCharCode(97,95,50,49,95,119,114,97,112,112,101,100,0);
       let scheduleI = String.fromCharCode(99,98,108,107,95,120,95,50,50,0);
      if (inactivej != String.fromCharCode(117,0)) {
         scheduleI = `${scheduleI.length}`;
      }
         scheduleI += `${inactivej.length / 2}`;
      if (inactivej.includes(scheduleI)) {
          let analyticsl = 3.0;
         inactivej = `${parseInt(`${analyticsl}`)}`;
      }
      while (inactivej.includes(scheduleI)) {
         scheduleI += `${inactivej.length | scheduleI.length}`;
         break;
      }
          let pagination0 = 4.0;
         scheduleI = `${(String.fromCharCode(69,0) == scheduleI ? parseInt(`${pagination0}`) : scheduleI.length)}`;
      let helperE = 7588171 >= inactivej.length;
      do {
         inactivej = `${3 % (Math.max(1, scheduleI.length))}`;
         if (helperE) {
            break;
         }
      } while ((inactivej.length <= 2) && helperE);
      sharedZ -= parseFloat(`${gesturesV | 2}`);
   if ((chinasame3.length << (Math.min(4, Math.abs(pressureb)))) > 5 && 5 > (chinasame3.length << (Math.min(5, Math.abs(pressureb))))) {
      pressureb %= Math.max(4, parseInt(`${optionsI}`) & moviesR.length);
   }
},
}: ttSmall) => {
  const { colors, textVariants, spacing } = useTheme();
  const vodReducer: ttStreaming = useAppSelector(
    ({ vodReducer }: ttOrange) => vodReducer
  );

  const screenState: screenModel = useAppSelector(
    ({ screenReducer }) => screenReducer
  );

  const [yuGaoList, setYuGaoList] = useState(screenState.yuGaoState);
  const history = vodReducer.history;
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const [totalPage, setTotalPage] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [results, setResults] = useState<Array<ttSport>>([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const carouselRef = useRef<any>();
  
  const [width, setWidth] = useState(Dimensions.get("window").width);
  const [imgRatio, setImgRatio] = useState(1.5);

  const userState = useSelector<ttGoal>("userReducer");
  const isVip = ttFast.isVip(userState.user);

  useEffect(() => {
    setWidth(Number(Dimensions.get("window").width));

    console.log("data 111");
    console.log(data);

    if (data?.yugaopian_list?.length > 0) {
      setYuGaoList(data.yugaopian_list);
      dispatch(setYuGao(data.yugaopian_list));
    }

    if (data?.carousel_topic_list?.length > 0) {
      console.log("data.carousel_topic_list.length");
      console.log(data.carousel_topic_list.length);
      Image.getSize(data.carousel_topic_list[0].topic_pic_thumb, (w, h) => {
        setImgRatio(w / h);
      });
    }
  }, []);
  
  const handleRefresh = async () => {
       let reactnativejss = String.fromCharCode(121,95,55,55,95,114,101,115,116,97,107,101,0);
    let aboutk = true;
    let halfh = 2;
    let langT = String.fromCharCode(110,111,116,105,102,105,99,97,116,105,111,110,95,52,95,52,55,0);
    let bellW = 0.0;
    let groups: Map<any, any> = new Map([[String.fromCharCode(101,95,54,49,95,111,98,115,101,114,118,105,110,103,0),String.fromCharCode(113,95,51,50,95,122,111,110,101,115,0)], [String.fromCharCode(105,95,54,53,95,115,116,101,112,112,101,114,0),String.fromCharCode(110,95,56,53,95,97,110,115,119,101,114,0)], [String.fromCharCode(99,108,97,122,122,95,103,95,51,51,0),String.fromCharCode(114,101,110,100,101,114,101,114,95,54,95,54,52,0)]]);
    let benefitj: Map<any, any> = new Map([[String.fromCharCode(115,95,55,52,95,101,109,97,105,108,0),true ], [String.fromCharCode(99,117,114,115,111,114,115,95,110,95,54,48,0),false ], [String.fromCharCode(98,105,116,115,116,114,105,110,103,95,54,95,53,51,0),true ]]);
    let malaysiaw = String.fromCharCode(118,95,55,55,95,114,101,100,101,116,101,99,116,0);
    let resendK = 0.0;
    let dataK = 0;
    let acceptedM = 0.0;
    let condensedL = 0.0;
    let philippinest = String.fromCharCode(110,95,50,57,95,114,101,99,111,118,101,114,97,98,108,101,0);
    let downloadedW = String.fromCharCode(112,114,101,100,105,99,116,95,122,95,51,48,0);
    let descM = String.fromCharCode(109,95,56,48,95,115,101,103,109,101,110,116,101,100,0);
   while (groups.get(`${benefitj.size}`) == null) {
       let trophyc: Array<any> = [174, 658, 148];
       let shareZ = 3.0;
       let logoutX = String.fromCharCode(115,95,51,53,95,115,116,97,114,115,0);
       let halfr = String.fromCharCode(100,95,56,95,108,111,99,108,0);
       let privilegeG = String.fromCharCode(115,95,57,95,97,100,118,97,110,99,101,109,101,110,116,0);
      let starA = logoutX == String.fromCharCode(116,107,120,103,109,57,120,121,118,104,0);
      do {
         logoutX += `${privilegeG.length}`;
         if (starA) {
            break;
         }
      } while ((logoutX.length < 4) && starA);
         shareZ -= parseFloat(`${logoutX.length}`);
         privilegeG += `${(halfr == String.fromCharCode(52,0) ? halfr.length : trophyc.length)}`;
          let analyticsT = String.fromCharCode(97,95,54,48,95,112,114,111,106,101,99,116,101,100,0);
          let refreshA = false;
         trophyc.push(halfr.length << (Math.min(Math.abs(1), 2)));
         analyticsT = `${((refreshA ? 3 : 4))}`;
         refreshA = (((!refreshA ? 37 : analyticsT.length) & analyticsT.length) == 37);
         halfr = `${parseInt(`${shareZ}`) - 3}`;
       let resultl: Array<any> = [174, 608, 121];
       let hookH: Array<any> = [876, 136, 139];
         hookH.push(privilegeG.length << (Math.min(1, Math.abs(parseInt(`${shareZ}`)))));
          let sharedW = String.fromCharCode(120,95,54,57,95,108,111,111,107,115,0);
         shareZ += parseFloat(`${1 & trophyc.length}`);
         sharedW += `${1 % (Math.max(1, sharedW.length))}`;
          let download6 = 1;
          let station0 = String.fromCharCode(98,95,55,48,0);
          let nativeX = String.fromCharCode(106,95,49,53,95,109,115,103,115,0);
         privilegeG = "2";
         download6 <<= Math.min(station0.length, 3);
         station0 = "3";
         nativeX = `${nativeX.length}`;
       let regengg = String.fromCharCode(98,95,50,48,95,115,101,103,117,101,0);
       let china3 = String.fromCharCode(107,95,49,55,95,112,97,105,114,105,110,103,0);
      let recommendationJ = 8743809.0 <= shareZ;
      do {
         shareZ /= Math.max(5, parseFloat(`${parseInt(`${shareZ}`) / (Math.max(hookH.length, 1))}`));
         if (recommendationJ) {
            break;
         }
      } while (recommendationJ && (regengg.length > parseInt(`${shareZ}`)));
      groups.set(`${shareZ}`, benefitj.size * parseInt(`${shareZ}`));
      break;
   }
   while (reactnativejss.endsWith(`${halfh}`)) {
       let anytimeP = String.fromCharCode(101,114,114,99,111,100,101,95,48,95,49,53,0);
       let confirmationp = true;
         anytimeP += `${(String.fromCharCode(90,0) == anytimeP ? anytimeP.length : (confirmationp ? 2 : 1))}`;
      while (anytimeP.length < 5) {
         confirmationp = anytimeP.length < 20;
         break;
      }
      for (let q = 0; q < 3; q++) {
         anytimeP += `${anytimeP.length}`;
      }
         confirmationp = anytimeP.endsWith(`${confirmationp}`);
          let minil = 0.0;
          let reducerI: Map<any, any> = new Map([[String.fromCharCode(113,95,51,56,95,117,115,100,0),false ], [String.fromCharCode(117,95,56,50,95,107,101,121,112,97,116,104,0),false ]]);
         anytimeP += `${3 / (Math.max(4, parseInt(`${minil}`)))}`;
         minil /= Math.max(reducerI.size & reducerI.size, 4);
      let selectionH = confirmationp ? !confirmationp : confirmationp;
      do {
         confirmationp = anytimeP.length <= 100;
         if (selectionH) {
            break;
         }
      } while (selectionH && (1 < anytimeP.length));
      reactnativejss = `${1 - dataK}`;
      break;
   }
       let matchQ = 1.0;
       let malaysia_ = 5.0;
       let favorite3 = String.fromCharCode(114,95,53,56,95,105,110,116,101,114,115,101,99,116,105,111,110,0);
      let trashm = 8752341.0 <= matchQ;
      do {
         matchQ *= parseFloat(`${parseInt(`${malaysia_}`) & favorite3.length}`);
         if (trashm) {
            break;
         }
      } while (((malaysia_ + 5) == 3.81) && trashm);
      while (2 > (favorite3.length / 3) && 4.62 > (malaysia_ / (Math.max(favorite3.length, 9)))) {
         malaysia_ += parseInt(`${matchQ}`) ^ parseInt(`${malaysia_}`);
         break;
      }
         malaysia_ /= Math.max(parseInt(`${matchQ}`) % (Math.max(4, favorite3.length)), 1);
      let detailc = favorite3.length <= 9771470;
      do {
         favorite3 += `${(String.fromCharCode(84,0) == favorite3 ? parseInt(`${malaysia_}`) : favorite3.length)}`;
         if (detailc) {
            break;
         }
      } while (((favorite3.length >> (Math.min(Math.abs(3), 5))) < 3 && (malaysia_ / (Math.max(favorite3.length, 8))) < 5.58) && detailc);
      while (favorite3.length == 5) {
         favorite3 = `${1 - parseInt(`${malaysia_}`)}`;
         break;
      }
         favorite3 += `${favorite3.length << (Math.min(2, Math.abs(parseInt(`${malaysia_}`))))}`;
      if (3.98 == (matchQ - malaysia_) || (malaysia_ - 3.98) == 3.73) {
          let actionsO = 4.0;
          let long_tlL: Map<any, any> = new Map([[String.fromCharCode(104,95,57,49,95,115,116,114,110,100,117,112,0),181], [String.fromCharCode(117,95,55,57,95,100,97,116,97,114,0),726], [String.fromCharCode(98,117,98,98,108,101,115,95,98,95,50,53,0),626]]);
          let frame_v5m = 1.0;
          let windh = String.fromCharCode(121,95,57,56,95,103,97,115,0);
          let singaporeM = String.fromCharCode(105,110,102,105,110,105,116,101,95,121,95,56,48,0);
         malaysia_ -= (String.fromCharCode(53,0) == favorite3 ? favorite3.length : parseInt(`${frame_v5m}`));
         actionsO *= long_tlL.size;
         long_tlL = new Map([[`${long_tlL.size}`, parseInt(`${actionsO}`) << (Math.min(Math.abs(long_tlL.size), 1))]]);
         frame_v5m -= parseFloat(`${singaporeM.length}`);
         windh = `${parseInt(`${actionsO}`)}`;
         singaporeM = `${windh.length + 2}`;
      }
      for (let t = 0; t < 3; t++) {
         favorite3 = `${parseInt(`${malaysia_}`)}`;
      }
          let statisticsE = String.fromCharCode(101,120,97,109,112,108,101,95,56,95,57,53,0);
         favorite3 = `${1 | parseInt(`${malaysia_}`)}`;
         statisticsE = `${2 * statisticsE.length}`;
      halfh += parseInt(`${bellW}`);
       let moviesI = String.fromCharCode(99,95,55,51,95,117,116,109,111,115,116,0);
       let recommendation3 = String.fromCharCode(116,105,108,116,95,102,95,57,0);
       let down6: Map<any, any> = new Map([[String.fromCharCode(99,111,110,110,101,99,116,95,116,95,52,50,0),893], [String.fromCharCode(112,105,99,116,117,114,101,115,95,48,95,57,50,0),151]]);
       let sorte = String.fromCharCode(121,95,56,49,95,102,114,101,101,97,100,100,114,105,110,102,111,0);
       let eighteen6 = String.fromCharCode(115,104,105,109,109,101,114,105,110,103,95,115,95,56,49,0);
      if (4 <= (recommendation3.length - 1) && (1 - down6.size) <= 4) {
         recommendation3 = `${1 + moviesI.length}`;
      }
      let headerH = recommendation3 == String.fromCharCode(116,51,107,0);
      do {
         recommendation3 = `${sorte.length}`;
         if (headerH) {
            break;
         }
      } while (headerH && (3 == (recommendation3.length % (Math.max(7, down6.size))) && 1 == (recommendation3.length % (Math.max(3, 1)))));
      for (let z = 0; z < 2; z++) {
         sorte = `${2 - down6.size}`;
      }
      for (let m = 0; m < 3; m++) {
          let send0: Map<any, any> = new Map([[String.fromCharCode(104,95,49,51,95,98,97,114,101,0),192], [String.fromCharCode(105,95,55,95,115,97,110,101,0),137], [String.fromCharCode(99,111,114,100,95,122,95,52,55,0),635]]);
          let gradlewl = 2;
          let ewardedK: Map<any, any> = new Map([[String.fromCharCode(105,95,54,52,95,104,101,118,99,100,115,112,0),true ], [String.fromCharCode(122,95,54,49,95,99,108,101,97,114,0),true ], [String.fromCharCode(118,111,99,97,98,95,51,95,52,54,0),false ]]);
         sorte += `${down6.size}`;
         send0.set(`${gradlewl}`, send0.size | gradlewl);
         ewardedK.set(`${gradlewl}`, ewardedK.size * 2);
      }
      while ((down6.size / 4) >= 5 || (down6.size / 4) >= 2) {
         recommendation3 += `${sorte.length}`;
         break;
      }
      while (eighteen6 != sorte) {
         sorte = `${down6.size}`;
         break;
      }
      while (4 > sorte.length) {
         sorte += `${sorte.length}`;
         break;
      }
      dataK &= reactnativejss.length;
   for (let t = 0; t < 3; t++) {
      reactnativejss = `${1 | langT.length}`;
   }

    setIsRefreshing(true);

   for (let v = 0; v < 3; v++) {
      reactnativejss += `${parseInt(`${resendK}`)}`;
   }
   while (5 == (benefitj.size % 5)) {
      benefitj = new Map([[`${groups.size}`, parseInt(`${bellW}`) ^ groups.size]]);
      break;
   }
       let aboutI = true;
      let editH = aboutI ? !aboutI : aboutI;
      do {
         aboutI = !aboutI || aboutI;
         if (editH) {
            break;
         }
      } while (editH && (!aboutI));
          let filterr = 3.0;
         aboutI = !aboutI && 30.46 < filterr;
      while (!aboutI || !aboutI) {
          let moviesO = 2.0;
          let layouth = false;
          let topons: Map<any, any> = new Map([[String.fromCharCode(100,95,57,49,95,114,101,108,117,0),63], [String.fromCharCode(114,95,54,53,95,99,111,117,110,116,0),644], [String.fromCharCode(101,122,105,101,114,95,51,95,57,53,0),403]]);
         aboutI = ((topons.size & (layouth ? 24 : topons.size)) > 24);
         moviesO /= Math.max(parseFloat(`${parseInt(`${moviesO}`) | 1}`), 4);
         layouth = moviesO <= 66.19;
         break;
      }
      resendK -= ((aboutI ? 5 : 4) & groups.size);
       let suggestion5 = 2.0;
      if (5.28 == (suggestion5 * suggestion5) || (suggestion5 * suggestion5) == 5.28) {
          let interstitialY = String.fromCharCode(97,101,115,110,105,95,53,95,52,51,0);
          let bodanG = String.fromCharCode(114,100,99,111,115,116,95,105,95,51,56,0);
          let arrowl = true;
          let scoreW = String.fromCharCode(122,95,50,48,95,113,115,118,100,101,105,110,116,0);
         suggestion5 /= Math.max(bodanG.length * 1, 3);
         interstitialY += `${((arrowl ? 3 : 2))}`;
         bodanG = `${scoreW.length % 2}`;
         arrowl = (80 > ((!arrowl ? 80 : interstitialY.length) - interstitialY.length));
         scoreW += "2";
      }
      if (4.8 < suggestion5) {
         suggestion5 /= Math.max(5, 1 | parseInt(`${suggestion5}`));
      }
          let scheduleN = String.fromCharCode(99,102,116,102,115,117,98,95,52,95,51,56,0);
          let toponE = String.fromCharCode(102,95,49,57,95,102,111,99,117,115,101,100,0);
          let iconw = 2;
         suggestion5 -= scheduleN.length;
         scheduleN += `${(String.fromCharCode(77,0) == toponE ? iconw : toponE.length)}`;
         iconw ^= 2 - toponE.length;
      aboutk = malaysiaw.length > 24 && 25.68 > acceptedM;
   while (3.32 > (resendK / (Math.max(5.74, 8)))) {
       let buildK: Array<any> = [21, 843, 178];
       let configP = String.fromCharCode(110,95,55,50,95,114,111,117,110,100,117,112,0);
          let helper9 = 5.0;
         buildK = [buildK.length];
         helper9 *= parseFloat(`${1}`);
      let anytimez = 5124977 <= configP.length;
      do {
         configP = `${buildK.length & 2}`;
         if (anytimez) {
            break;
         }
      } while ((2 < (buildK.length - 3)) && anytimez);
         buildK = [1 | configP.length];
      let borderlessl = 9658993 <= buildK.length;
      do {
         buildK = [configP.length];
         if (borderlessl) {
            break;
         }
      } while (borderlessl && ((buildK.length ^ 3) >= 3));
      if (!configP.endsWith(`${buildK.length}`)) {
         buildK.push(1);
      }
         configP += `${buildK.length}`;
      resendK /= Math.max(3, 1 * configP.length);
      break;
   }
    await onRefresh(0, true);

   if (5 == reactnativejss.length) {
      aboutk = langT.length < parseInt(`${acceptedM}`);
   }
      groups = new Map([[`${resendK}`, langT.length / 3]]);
      halfh &= (langT == String.fromCharCode(79,0) ? langT.length : parseInt(`${resendK}`));
   while (5.24 == (bellW * 1.27) && !aboutk) {
      bellW *= parseFloat(`${halfh | dataK}`);
      break;
   }
   if (5.73 < bellW) {
      langT = `${langT.length}`;
   }

    setTimeout(() => {

       let actionsA = 3.0;
       let telegramT = String.fromCharCode(107,95,51,54,95,101,98,117,114,0);
      for (let p = 0; p < 1; p++) {
         telegramT += `${telegramT.length >> (Math.min(Math.abs(2), 4))}`;
      }
         telegramT = `${parseInt(`${actionsA}`)}`;
         actionsA -= parseFloat(`${telegramT.length | parseInt(`${actionsA}`)}`);
         actionsA *= parseFloat(`${parseInt(`${actionsA}`) / 2}`);
      for (let y = 0; y < 2; y++) {
          let linkQ = String.fromCharCode(108,104,115,95,104,95,50,57,0);
          let forwardc = String.fromCharCode(115,104,97,95,117,95,49,48,0);
          let fillE = 4;
          let videocommon_ = String.fromCharCode(114,95,51,51,95,99,104,101,99,107,108,105,110,101,0);
         actionsA *= parseFloat(`${1}`);
         linkQ = "1";
         forwardc = "1";
         fillE *= videocommon_.length / 2;
         videocommon_ += "2";
      }
      for (let y = 0; y < 3; y++) {
          let window_568 = String.fromCharCode(105,95,50,95,115,117,98,112,97,116,104,0);
          let sportsq = 4.0;
          let checkboxz = 4.0;
          let projectN = String.fromCharCode(102,95,50,95,108,111,99,107,109,103,114,0);
         actionsA *= parseFloat(`${3}`);
         window_568 += `${window_568.length}`;
         sportsq += parseInt(`${checkboxz}`);
         checkboxz *= window_568.length & parseInt(`${sportsq}`);
         projectN += "2";
      }
      aboutk = acceptedM < 18.71;
   while (Array.from(groups.values()).includes(dataK)) {
       let sheetb: Map<any, any> = new Map([[String.fromCharCode(118,97,108,105,100,97,116,101,100,95,50,95,49,48,48,0),String.fromCharCode(120,99,104,97,99,104,97,95,56,95,51,56,0)], [String.fromCharCode(119,95,51,50,95,116,114,97,110,115,105,101,110,116,0),String.fromCharCode(110,95,57,53,95,109,97,103,110,105,116,117,100,101,115,0)]]);
       let typingj = 1.0;
       let bcopy_2eF: Map<any, any> = new Map([[String.fromCharCode(98,101,110,99,104,115,95,48,95,53,55,0),false ], [String.fromCharCode(120,95,51,55,95,115,117,98,108,97,121,101,114,115,0),true ], [String.fromCharCode(116,97,112,102,105,108,116,101,114,95,121,95,51,0),false ]]);
          let r_lock5 = String.fromCharCode(97,95,52,52,95,102,114,101,113,117,101,110,116,0);
         typingj += bcopy_2eF.size ^ r_lock5.length;
      while ((4 << (Math.min(5, Math.abs(sheetb.size)))) <= 4 || (sheetb.size * parseInt(`${typingj}`)) <= 4) {
          let feedbackz: Map<any, any> = new Map([[String.fromCharCode(102,97,105,108,101,100,95,117,95,49,48,48,0),301], [String.fromCharCode(117,105,100,115,95,57,95,52,54,0),525]]);
          let memberk: Array<any> = [589, 153];
          let c_managerU = true;
          let currentP = 3.0;
         sheetb.set(`${typingj}`, (parseInt(`${typingj}`) / (Math.max(2, (c_managerU ? 5 : 4)))));
         feedbackz = new Map([[`${memberk.length}`, 2]]);
         memberk.push(feedbackz.size);
         c_managerU = (memberk.length - currentP) > 19.35;
         currentP -= 1;
         break;
      }
         typingj /= Math.max(parseInt(`${typingj}`), 4);
      for (let c = 0; c < 2; c++) {
          let homeQ: Map<any, any> = new Map([[String.fromCharCode(105,100,99,116,95,54,95,52,49,0),String.fromCharCode(112,114,111,118,105,115,105,111,110,95,97,95,53,57,0)], [String.fromCharCode(99,95,57,49,95,97,99,99,101,115,115,111,114,115,0),String.fromCharCode(106,95,50,48,95,112,105,99,116,0)]]);
          let savet = true;
         typingj += 3 << (Math.min(4, Math.abs(bcopy_2eF.size)));
         homeQ.set(`${savet}`, (homeQ.size | (savet ? 4 : 2)));
      }
      let single9 = 5391330.0 <= typingj;
      do {
         typingj *= parseInt(`${typingj}`);
         if (single9) {
            break;
         }
      } while ((4.95 < (typingj + 3.60) || 5.82 < (typingj + 3.60)) && single9);
      let views7 = bcopy_2eF.size <= 4959181;
      do {
          let loadingK = String.fromCharCode(110,95,55,53,95,99,114,101,97,116,105,111,110,0);
          let headerI = 2.0;
          let gemfile9: Map<any, any> = new Map([[String.fromCharCode(97,117,116,111,114,101,103,114,101,115,115,105,111,110,95,117,95,51,57,0),787], [String.fromCharCode(111,95,56,54,95,114,101,108,97,121,115,0),258]]);
          let moduleB: Array<any> = [66, 238, 705];
         bcopy_2eF = new Map([[`${sheetb.size}`, 2 % (Math.max(5, sheetb.size))]]);
         loadingK += `${1 + gemfile9.size}`;
         headerI /= Math.max(1, (loadingK == String.fromCharCode(54,0) ? loadingK.length : parseInt(`${headerI}`)));
         gemfile9.set(loadingK, 3);
         moduleB = [2 & parseInt(`${headerI}`)];
         if (views7) {
            break;
         }
      } while ((bcopy_2eF.get(`${sheetb.size}`) == null) && views7);
          let gradleR = true;
          let short_ub1 = 0;
         typingj += 3;
         gradleR = gradleR && short_ub1 == 55;
         short_ub1 &= 3;
      while (bcopy_2eF.get(`${sheetb.size}`) != null) {
          let main_gO = true;
          let renewD: Array<any> = [931, 179, 967];
          let typingC = 1.0;
          let greeng = 0.0;
          let delegate_or: Map<any, any> = new Map([[String.fromCharCode(104,95,56,50,95,103,101,116,116,105,109,101,0),270], [String.fromCharCode(115,111,108,105,100,99,111,108,111,114,95,97,95,56,54,0),23], [String.fromCharCode(114,101,115,105,108,105,101,110,99,101,95,52,95,57,52,0),987]]);
         bcopy_2eF = new Map([[`${main_gO}`, ((main_gO ? 3 : 2) ^ parseInt(`${typingC}`))]]);
         renewD.push(renewD.length ^ 1);
         typingC /= Math.max(5, parseFloat(`${renewD.length}`));
         greeng *= renewD.length;
         delegate_or.set(`${greeng}`, parseInt(`${greeng}`) - 2);
         break;
      }
      for (let o = 0; o < 3; o++) {
         sheetb = new Map([[`${sheetb.size}`, parseInt(`${typingj}`) & 2]]);
      }
      groups = new Map([[reactnativejss, (langT == String.fromCharCode(122,0) ? langT.length : reactnativejss.length)]]);
      break;
   }
   if (1.61 >= resendK) {
      halfh /= Math.max(3, benefitj.size | 3);
   }
   if (4 <= benefitj.size) {
       let roundr = 1;
       let nterstitial0 = String.fromCharCode(115,112,101,97,107,95,110,95,54,54,0);
       let panglef = 2.0;
         panglef -= (nterstitial0 == String.fromCharCode(119,0) ? roundr : nterstitial0.length);
      for (let x = 0; x < 1; x++) {
         roundr |= roundr;
      }
          let readT = String.fromCharCode(102,95,49,54,95,102,108,97,103,0);
          let internetU = 3;
          let eventD = 2.0;
         nterstitial0 += `${parseInt(`${panglef}`)}`;
         readT += `${2 - parseInt(`${eventD}`)}`;
         internetU |= 3;
         eventD -= parseFloat(`${parseInt(`${eventD}`)}`);
      while (nterstitial0.length <= panglef) {
          let settingss = String.fromCharCode(115,104,97,114,100,95,117,95,54,56,0);
          let gesturesL = true;
         nterstitial0 = `${1 * settingss.length}`;
         settingss += "3";
         break;
      }
      for (let v = 0; v < 3; v++) {
         nterstitial0 = `${nterstitial0.length}`;
      }
      while (panglef == roundr) {
         panglef += nterstitial0.length ^ 3;
         break;
      }
      while (1.78 > (panglef / (Math.max(2, roundr))) || (panglef / (Math.max(7, roundr))) > 1.78) {
          let episoden: Array<any> = [943, 260];
          let tickH = String.fromCharCode(121,95,54,53,95,112,105,110,99,104,105,110,103,0);
          let sharedq = String.fromCharCode(97,116,116,114,105,98,117,116,101,95,104,95,52,48,0);
          let transferE = 3;
          let securityV = 1.0;
         roundr |= 3 + nterstitial0.length;
         episoden = [3 % (Math.max(8, sharedq.length))];
         tickH += `${episoden.length & transferE}`;
         sharedq = `${episoden.length * parseInt(`${securityV}`)}`;
         transferE &= tickH.length + transferE;
         securityV *= tickH.length;
         break;
      }
      while (nterstitial0.includes(`${roundr}`)) {
         nterstitial0 = `${parseInt(`${panglef}`)}`;
         break;
      }
          let agreementp: Array<any> = [101, 602];
         panglef *= nterstitial0.length * roundr;
         agreementp.push(agreementp.length * 1);
      malaysiaw = `${nterstitial0.length}`;
   }
   while (4 >= (malaysiaw.length - parseInt(`${resendK}`)) || 4.28 >= (malaysiaw.length - resendK)) {
      malaysiaw += "3";
      break;
   }
      setActiveIndex(0);

      acceptedM *= parseFloat(`${halfh / (Math.max(dataK, 6))}`);
       let phonem = String.fromCharCode(101,95,52,57,95,114,102,102,116,102,0);
         phonem += `${phonem.length ^ phonem.length}`;
      if (phonem != String.fromCharCode(75,0)) {
         phonem = `${3 ^ phonem.length}`;
      }
       let collectionW = 5;
      reactnativejss = `${groups.size / (Math.max(2, 4))}`;
   if (2.9 > (halfh * resendK)) {
       let analytics1 = String.fromCharCode(100,110,115,110,97,109,101,95,121,95,56,48,0);
       let bufferv = 2.0;
      if (!analytics1.includes(`${bufferv}`)) {
         analytics1 += `${analytics1.length & parseInt(`${bufferv}`)}`;
      }
      if (4 > (parseInt(`${bufferv}`) / (Math.max(8, analytics1.length)))) {
          let minivodL = String.fromCharCode(97,95,53,57,95,109,98,115,101,103,109,101,110,116,0);
          let selecteds = String.fromCharCode(106,117,115,116,95,118,95,51,49,0);
         bufferv *= parseFloat(`${1}`);
         minivodL += `${selecteds.length}`;
         selecteds += "2";
      }
      if (3 < analytics1.length) {
          let gradlen = 0.0;
          let dialogo = false;
         bufferv += parseFloat(`${parseInt(`${bufferv}`) & 3}`);
         gradlen *= parseFloat(`${parseInt(`${gradlen}`) | 2}`);
         dialogo = 60.78 <= gradlen;
      }
          let previewK = 1;
          let wind8 = true;
         analytics1 = `${(analytics1 == String.fromCharCode(120,0) ? parseInt(`${bufferv}`) : analytics1.length)}`;
         previewK -= 3;
         wind8 = 76 < previewK && !wind8;
      let closez = 5817322.0 <= bufferv;
      do {
          let middlewarep: Map<any, any> = new Map([[String.fromCharCode(113,95,55,49,95,115,97,98,101,114,0),545], [String.fromCharCode(108,95,57,54,95,102,105,110,100,0),730], [String.fromCharCode(99,95,55,57,95,121,115,108,111,103,0),424]]);
          let xvodv = 2.0;
          let shirtS = 0;
          let blacks: Map<any, any> = new Map([[String.fromCharCode(112,95,57,49,95,99,97,110,99,101,108,0),326], [String.fromCharCode(97,95,49,57,95,114,101,98,97,115,101,0),766]]);
         bufferv -= parseFloat(`${3}`);
         middlewarep.set(`${shirtS}`, middlewarep.size);
         xvodv -= 2 % (Math.max(7, shirtS));
         blacks.set(`${shirtS}`, 1);
         if (closez) {
            break;
         }
      } while (closez && (3 < (analytics1.length | 1) && 2.19 < (bufferv * parseFloat(`${analytics1.length}`))));
         bufferv -= parseFloat(`${1 & parseInt(`${bufferv}`)}`);
      resendK /= Math.max(5, (malaysiaw == String.fromCharCode(100,0) ? malaysiaw.length : parseInt(`${resendK}`)));
   }
   while (5 < (malaysiaw.length / (Math.max(4, 4))) || (parseInt(`${condensedL}`) * malaysiaw.length) < 4) {
       let clearC = 4;
         clearC += clearC ^ clearC;
       let pausee: Array<any> = [515, 598];
      if (1 == pausee.length) {
          let gestureH = String.fromCharCode(117,95,50,52,95,100,101,99,108,97,114,101,0);
          let str1 = String.fromCharCode(102,116,114,117,110,99,97,116,101,95,105,95,52,53,0);
          let targeto = String.fromCharCode(107,95,56,54,95,112,114,101,115,101,108,101,99,116,0);
          let statst: Map<any, any> = new Map([[String.fromCharCode(109,95,56,53,95,111,102,102,115,101,116,115,105,122,101,0),String.fromCharCode(99,95,49,49,95,97,115,115,105,103,110,0)], [String.fromCharCode(106,95,50,52,95,102,102,117,114,108,0),String.fromCharCode(102,105,110,97,108,105,115,101,114,95,52,95,57,49,0)], [String.fromCharCode(112,95,48,95,111,110,108,121,0),String.fromCharCode(100,95,57,48,95,98,108,111,99,107,105,110,101,115,115,0)]]);
          let malaysiav = String.fromCharCode(103,95,49,53,95,100,101,102,108,105,99,107,101,114,0);
         clearC *= 3;
         gestureH = `${targeto.length + malaysiav.length}`;
         str1 += `${gestureH.length}`;
         targeto = `${malaysiav.length * targeto.length}`;
         statst = new Map([[targeto, 2 & targeto.length]]);
      }
      condensedL /= Math.max(4, parseFloat(`${clearC}`));
      break;
   }
   let volumeg = bellW <= 8510715.0;
   do {
      bellW -= parseFloat(`${dataK - reactnativejss.length}`);
      if (volumeg) {
         break;
      }
   } while ((4.62 <= (bellW / (Math.max(5.57, 10))) || 5 <= (parseInt(`${bellW}`) / 4)) && volumeg);
      if (carouselRef) {

      langT = `${dataK}`;
      groups.set(`${halfh}`, halfh);
   while (4 < (langT.length & halfh) && (langT.length & halfh) < 4) {
      langT += `${parseInt(`${acceptedM}`) >> (Math.min(reactnativejss.length, 3))}`;
      break;
   }
      langT = `${groups.size / (Math.max(1, 6))}`;
      groups.set(`${acceptedM}`, (malaysiaw == String.fromCharCode(73,0) ? parseInt(`${acceptedM}`) : malaysiaw.length));
        setIsRefreshing(false);
        carouselRef?.current?.scrollTo({ index: 0, animated: false });
      }
    }, 1000);
  };

  // const fetchPlaylist = (page: number) =>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  //   ({ pageParam = 1 }) => fetchPlaylist(pageParam),
  
  
  
  
  
  
  
  //       if (nextPage > totalPage && totalPage != 0) {
  
  
  
  
  
  
  
  
  
  
  

  const fetchYingPing = () =>
    ttSinaPrediction.getHomePages(1001, isVip).then((data) => {
      setResults(data.topic_list);

      console.log("setYuGao");

      setYuGaoList(data.yugaopian_list);
      dispatch(setYuGao(data.yugaopian_list));

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
      const key = item.is_ads ? item.topic_id + item.topic_name : item.topic_id;
      return (
        <TouchableOpacity
          activeOpacity={0.85}
          key={`slider-${key}`}
          onPress={() => {
            console.log("onclick carousel");
            
            
            
            
          }}
        >
          <FastImage
            key={`slider-${key}`}
            style={styles.image}
            source={{
              uri: item.topic_pic_thumb,
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
            {item.topic_name}
          </Text>
        </TouchableOpacity>
      );
    },
    []
  );

  const renderContent = useCallback(
    ({ item, index }: { item: ttSport; index: number }) => <></>,
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
              {yingPingList?.carousel_topic_list[0] && !refreshProp && (
                <>
                  <View
                    key={yuGaoList.type_name}
                    style={{
                      paddingLeft: spacing.sideOffset,
                      paddingRight: spacing.sideOffset,
                      gap: spacing.xxs,
                    }}
                  >
                    <ShowMoreVodButton text={"精选专题"} />
                  </View>

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
                      data={yingPingList.carousel_topic_list}
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
                      data={yingPingList.carousel_topic_list}
                      activeIndex={activeIndex}
                    />
                  </View>
                </>
              )}
              <View>
                <View style={{ gap: spacing.m }}></View>
                { }
                {yuGaoList && (
                  <View
                    key={yuGaoList.type_name}
                    style={{
                      paddingLeft: spacing.sideOffset,
                      paddingRight: spacing.sideOffset,
                      gap: spacing.xxs,
                    }}
                  >
                    <View>
                      <ShowMoreVodButton
                        text={yuGaoList.type_name}
                        onPress={() => {
                          console.log("onpress yugao");
                        }}
                      />
                    </View>
                    <VodListVertical vods={yuGaoList.vod_list} />
                  </View>
                )}
                {yingPingList &&
                  yingPingList.yingping_list.vod_list.length > 0 && (
                    <View
                      style={{
                        paddingLeft: spacing.sideOffset,
                        paddingRight: spacing.sideOffset,
                        gap: spacing.xxs,
                      }}
                    >
                      <ShowMoreVodButton
                        text={yingPingList.yingping_list.type_name}
                      />
                      {yingPingList.yingping_list.vod_list.map(
                        (item, index) => (
                          <YingPingContainer
                            key={item.vod_id}
                            vod={item}
                            width={width}
                            imgRatio={imgRatio}
                            isSlide={index % 2 !== 0}
                          />
                        )
                      )}
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

                {/* {yingPingList?.categories &&
                  yingPingList.categories.length > 0 &&
                  yingPingList.categories.map((category, index) => (
                    <View
                      key={`category-${index}`}
                      style={{
                        paddingLeft: spacing.sideOffset,
                        paddingRight: spacing.sideOffset,
                        paddingTop: 5,
                      }}>
                      <View
                        style={{
                          paddingBottom: 5,
                        }}>
                        <ShowMoreVodButton
                          text={category.type_name}
                          onPress={() => {
                            navigation.navigate('片库', {
                              type_id: category.type_id,
                            });
                          }}
                        />
                      </View>
                      <VodListVertical vods={category.vod_list} />
                    </View>
                  ))} */}
              </View>
            </>
          }
          data={results}
          
          
          
          
          
          initialNumToRender={0}
          onEndReachedThreshold={0.5}
          renderItem={renderContent}
          ListFooterComponent={
            <View style={{ ...styles.loading, marginBottom: 120 }}>
              <Text
                style={{
                  ...textVariants.subBody,
                  color: "#2c2c2c",
                  paddingTop: 12,
                }}
              >
                已经到底了
              </Text>
            </View>
            // <View style={{ ...styles.loading, marginBottom: 60 }}>
            
            
            
            
            

            
            
            
            
            
            
            //     />
            
            
            
            
            
            
            
            
            //     >
            
            //     </Text>
            
            // </View>
          }
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
              source={require("@static/images/toponTerms.gif")}
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
