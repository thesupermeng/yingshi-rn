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
import ShowMoreVodButton from "../button/mayi_matchinactive_button";
import { mayi_Runtime, mayi_EmptyGradle, mayi_TraminiManifest } from "@type/mayi_green";
import FastImage from "../common/mayi_slider";
import { mayi_Middleware } from "@redux/reducers/mayi_temp_holder";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/mayi_redirect";
import { mayi_Libapminsightb } from "@redux/mayi_live_tumbnail";
import VodHistoryList from "../vod/mayi_strings_nativeex";
import VodLiveStationList from "../vod/mayi_other";
import { API_DOMAIN, API_DOMAIN_TEST } from "@utility/mayi_middleware_apps";
import VodListVertical from "../vod/mayi_package";
import { playVod, viewPlaylistDetails } from "@redux/actions/mayi_goallogo";
import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import LinearGradient from "react-native-linear-gradient";
import Carousel from "react-native-reanimated-carousel";
import CarouselPagination from "./mayi_left";
import LoadingIcon from "@static/images/taiwanScore.svg";
import { Image } from "react-native";
import { YingPingContainer } from "../container/mayi_internet";
import { mayi_Iconclosewhite, mayi_ServiceFilter } from "@api";
import { mayi_Baseline } from "@redux/reducers/mayi_chatroombackground_unlock";
import { mayi_Gift } from "@models/mayi_libjsinspector";
import { screenModel } from "@type/mayi_libfolly_inouttargetred";
import { setYuGao } from "@redux/actions/mayi_iconorientation_chatroombackground";

interface mayi_Libhermes {
  id: number;
  name: string;
}
interface mayi_GoogleViews {
  vodCarouselRes: any;
  navOptions?: mayi_Libhermes[] | undefined;
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
       let themek = 2.0;
    let sortn = String.fromCharCode(110,105,98,98,108,101,95,117,95,49,53,0);
    let iconsaveimageF = 0.0;
    let audienceT: Array<any> = [798, 190];
    let saved = String.fromCharCode(114,101,116,0);
    let iconmorem: Array<any> = [860, 56];
    let indicatorK: Array<any> = [787, 213, 588];
    let modulex = false;
    let reportE = String.fromCharCode(98,97,122,101,108,0);
    let dialogY = 5;
    let optionsA = 1.0;
    let homeo = String.fromCharCode(116,110,112,117,116,0);
    let transferd = String.fromCharCode(100,101,97,99,116,105,118,97,116,105,111,110,0);
    let optionsq = 4.0;
    let trophyh = 4.0;
    let modityX = 2.0;
      sortn = `${((modulex ? 3 : 5) - 1)}`;
      audienceT = [saved.length];
       let bgvipxvod9 = true;
       let arrow8 = true;
       let temperature1 = String.fromCharCode(115,112,101,99,116,114,97,0);
      let rocketx = arrow8 ? !arrow8 : arrow8;
      do {
         arrow8 = (54 == ((!bgvipxvod9 ? 54 : temperature1.length) / (Math.max(temperature1.length, 10))));
         if (rocketx) {
            break;
         }
      } while ((!bgvipxvod9 && arrow8) && rocketx);
         temperature1 = `${(String.fromCharCode(95,0) == temperature1 ? temperature1.length : (bgvipxvod9 ? 4 : 2))}`;
         temperature1 += `${((arrow8 ? 4 : 4) / 1)}`;
          let incident4 = 2;
          let membershipx = String.fromCharCode(114,116,114,101,101,100,101,112,116,104,0);
          let layout_ = 3.0;
         arrow8 = arrow8 && bgvipxvod9;
         incident4 ^= incident4 - 2;
         membershipx += `${membershipx.length | 1}`;
         layout_ /= Math.max(5, parseFloat(`${2 / (Math.max(1, membershipx.length))}`));
      for (let q = 0; q < 3; q++) {
         temperature1 += `${temperature1.length >> (Math.min(Math.abs(1), 3))}`;
      }
      while (bgvipxvod9) {
         bgvipxvod9 = temperature1.length > 21;
         break;
      }
       let icondefaultthumbnailc = 2.0;
       let fullscreenmaxy = 4.0;
      while ((icondefaultthumbnailc / 3.94) == 4.98 && (temperature1.length / (Math.max(2, parseInt(`${icondefaultthumbnailc}`)))) == 3) {
          let libyogat = String.fromCharCode(116,120,116,111,98,106,0);
          let icondefaultthumbnailn = 3.0;
          let layoutK = true;
          let cornerkickD: Array<any> = [415, 595, 299];
          let nendJ = String.fromCharCode(102,101,110,99,0);
         icondefaultthumbnailc *= parseFloat(`${3}`);
         libyogat += `${cornerkickD.length}`;
         icondefaultthumbnailn += parseFloat(`${3}`);
         layoutK = (10 >= ((layoutK ? 10 : libyogat.length) + libyogat.length));
         cornerkickD = [3 + nendJ.length];
         nendJ = `${(parseInt(`${icondefaultthumbnailn}`) - (layoutK ? 4 : 2))}`;
         break;
      }
      let gifgoalbgK = icondefaultthumbnailc <= 8831861.0;
      do {
         icondefaultthumbnailc *= parseFloat(`${3 | temperature1.length}`);
         if (gifgoalbgK) {
            break;
         }
      } while (gifgoalbgK && (temperature1.length == 5));
      audienceT.push(3);
       let renewg = true;
       let libapminsightbT = 4.0;
         renewg = !renewg || 89.40 > libapminsightbT;
         libapminsightbT -= parseFloat(`${parseInt(`${libapminsightbT}`) & 2}`);
      if (!renewg) {
          let logoutc = 4;
          let sportj = false;
         renewg = libapminsightbT == 79.36 && !renewg;
         logoutc |= 3 * logoutc;
         sportj = !sportj;
      }
      for (let j = 0; j < 3; j++) {
         libapminsightbT *= parseFloat(`${parseInt(`${libapminsightbT}`) / 3}`);
      }
          let shirtJ = 0.0;
         renewg = shirtJ <= libapminsightbT;
          let videobufferloadingX = 5.0;
          let searchO = false;
          let targetI = 1;
         renewg = !renewg;
         videobufferloadingX -= targetI << (Math.min(2, Math.abs(2)));
         searchO = 15.54 == videobufferloadingX && !searchO;
         targetI >>= Math.min(4, Math.abs((parseInt(`${videobufferloadingX}`) ^ (searchO ? 2 : 5))));
      audienceT = [parseInt(`${optionsA}`) + reportE.length];
       let iconuserW = 4.0;
         iconuserW *= parseFloat(`${parseInt(`${iconuserW}`)}`);
      if (5.40 <= (1.55 - iconuserW) && (1.55 - iconuserW) <= 3.25) {
         iconuserW -= parseFloat(`${parseInt(`${iconuserW}`)}`);
      }
         iconuserW *= parseFloat(`${parseInt(`${iconuserW}`)}`);
      homeo = `${1 << (Math.min(5, iconmorem.length))}`;
      homeo += "2";
       let descx = String.fromCharCode(114,101,99,117,114,115,105,118,101,0);
       let profileJ = 3.0;
      if ((5.15 * profileJ) == 3.49 && 2 == (parseInt(`${profileJ}`) * 1)) {
         descx += "3";
      }
      for (let m = 0; m < 2; m++) {
         descx += `${descx.length + 2}`;
      }
          let f_hash0 = 0;
          let fileq = 3.0;
          let connectionZ = 1.0;
         profileJ += parseFloat(`${descx.length}`);
         f_hash0 &= 2 << (Math.min(Math.abs(f_hash0), 4));
         fileq *= parseInt(`${connectionZ}`) / (Math.max(5, parseInt(`${fileq}`)));
         connectionZ *= 3 << (Math.min(Math.abs(f_hash0), 5));
      while ((parseInt(`${profileJ}`) - descx.length) > 3) {
         profileJ /= Math.max(parseFloat(`${descx.length}`), 1);
         break;
      }
         descx = `${descx.length}`;
      if (3.57 > profileJ) {
         profileJ /= Math.max(4, parseFloat(`${parseInt(`${profileJ}`) * descx.length}`));
      }
      saved += `${indicatorK.length}`;
       let twitterp: Map<any, any> = new Map([[String.fromCharCode(99,111,109,112,0),false ], [String.fromCharCode(97,112,112,101,114,97,110,99,101,0),false ], [String.fromCharCode(98,95,50,53,0),true ]]);
       let catalogj = String.fromCharCode(111,114,105,101,110,116,97,116,105,111,110,0);
       let weatherY = String.fromCharCode(109,108,111,99,107,0);
         catalogj = "2";
      for (let e = 0; e < 3; e++) {
          let chatroombackgroundb = String.fromCharCode(113,95,55,55,95,99,111,115,116,105,0);
          let launcho = String.fromCharCode(112,103,105,100,120,0);
          let readu = true;
          let thailandl = String.fromCharCode(112,111,105,110,116,111,99,116,0);
          let libreactperfloggerjniJ = 0.0;
         catalogj += `${(catalogj == String.fromCharCode(53,0) ? catalogj.length : (readu ? 5 : 4))}`;
         chatroombackgroundb += `${thailandl.length + 1}`;
         launcho += `${parseInt(`${libreactperfloggerjniJ}`)}`;
         readu = 59 <= launcho.length;
         thailandl += `${launcho.length + chatroombackgroundb.length}`;
         libreactperfloggerjniJ *= parseInt(`${libreactperfloggerjniJ}`);
      }
         weatherY = `${weatherY.length & 2}`;
      let scrollviewt = catalogj == String.fromCharCode(118,53,113,115,119,115,0);
      do {
         catalogj = `${catalogj.length}`;
         if (scrollviewt) {
            break;
         }
      } while (((catalogj.length & 4) > 4 || (catalogj.length & twitterp.size) > 4) && scrollviewt);
         twitterp = new Map([[weatherY, (String.fromCharCode(109,0) == catalogj ? weatherY.length : catalogj.length)]]);
         catalogj += `${catalogj.length ^ 2}`;
      let vietnamJ = twitterp.size <= 5985938;
      do {
          let middleH = 1.0;
          let moonv = String.fromCharCode(102,108,101,120,105,98,108,101,0);
          let reacto = String.fromCharCode(99,111,109,109,97,110,100,108,105,110,101,102,108,97,103,0);
         twitterp.set(moonv, (moonv == String.fromCharCode(49,0) ? parseInt(`${middleH}`) : moonv.length));
         middleH += reacto.length & reacto.length;
         if (vietnamJ) {
            break;
         }
      } while ((1 <= (twitterp.size * catalogj.length)) && vietnamJ);
         weatherY += `${catalogj.length / (Math.max(4, twitterp.size))}`;
      if (catalogj.length <= weatherY.length) {
         catalogj = `${twitterp.size / (Math.max(6, catalogj.length))}`;
      }
      sortn = `${parseInt(`${themek}`) + 3}`;
   while (saved.length == sortn.length) {
      sortn += `${reportE.length ^ 2}`;
      break;
   }
       let pangleu: Array<any> = [934, 437, 837];
       let libbuffer6: Array<any> = [561, 455, 83];
       let penaltyk = String.fromCharCode(100,101,118,105,99,101,0);
      for (let m = 0; m < 2; m++) {
          let dpluss: Array<any> = [505, 712, 323];
          let movies6 = String.fromCharCode(102,105,110,97,108,0);
          let template_2uK: Array<any> = [String.fromCharCode(115,117,98,109,105,116,0), String.fromCharCode(108,111,97,100,115,0)];
         libbuffer6.push(movies6.length);
         dpluss.push(dpluss.length % (Math.max(template_2uK.length, 2)));
         movies6 = "3";
         template_2uK = [dpluss.length + 1];
      }
          let giftz = String.fromCharCode(100,105,115,115,111,108,118,101,0);
          let codegenI = 2.0;
         penaltyk = `${giftz.length & 2}`;
         giftz += `${parseInt(`${codegenI}`) / 1}`;
         codegenI *= parseFloat(`${parseInt(`${codegenI}`)}`);
          let cricketk = String.fromCharCode(119,104,111,108,101,0);
          let whistle0 = false;
         libbuffer6 = [(1 >> (Math.min(3, Math.abs((whistle0 ? 5 : 2)))))];
         cricketk += `${cricketk.length & cricketk.length}`;
         whistle0 = cricketk.length >= 58;
          let statisticsinactive2 = 0.0;
          let gradleS: Array<any> = [444, 744];
          let auto_ith = String.fromCharCode(109,102,114,97,0);
         libbuffer6.push(pangleu.length % (Math.max(3, 8)));
         statisticsinactive2 /= Math.max(3, auto_ith.length >> (Math.min(1, Math.abs(parseInt(`${statisticsinactive2}`)))));
         gradleS = [parseInt(`${statisticsinactive2}`)];
         auto_ith = `${(auto_ith == String.fromCharCode(66,0) ? auto_ith.length : gradleS.length)}`;
       let smallbrightnessl = String.fromCharCode(115,117,98,106,101,99,116,105,118,101,115,0);
       let traminip = String.fromCharCode(114,101,111,114,100,101,114,0);
      let videoT = traminip.length <= 9781238;
      do {
          let awayicons = 1;
          let tempj = String.fromCharCode(97,117,116,111,102,105,120,0);
          let vipsportP = String.fromCharCode(97,100,100,114,0);
         traminip = `${(String.fromCharCode(101,0) == penaltyk ? penaltyk.length : libbuffer6.length)}`;
         awayicons += awayicons;
         tempj = "2";
         vipsportP += `${3 << (Math.min(5, vipsportP.length))}`;
         if (videoT) {
            break;
         }
      } while (videoT && (penaltyk.includes(traminip)));
         traminip += "3";
      for (let k = 0; k < 3; k++) {
         libbuffer6.push(3 << (Math.min(3, penaltyk.length)));
      }
       let injuryl = true;
      dialogY >>= Math.min(Math.abs(2), 2);
   for (let l = 0; l < 3; l++) {
      reportE = `${reportE.length}`;
   }
   for (let z = 0; z < 2; z++) {
      audienceT.push(parseInt(`${themek}`) >> (Math.min(3, Math.abs(2))));
   }
       let baselinei = 4;
       let areag = 4.0;
       let imagenetworkerrg = 2.0;
      if ((3 % (Math.max(8, baselinei))) == 4 && 5.59 == (imagenetworkerrg + 3.63)) {
         baselinei ^= parseInt(`${areag}`) + baselinei;
      }
         baselinei %= Math.max(2 >> (Math.min(Math.abs(parseInt(`${areag}`)), 5)), 1);
      if (2.32 == areag) {
         areag *= parseFloat(`${3}`);
      }
       let short_y1 = 0;
       let pointI = 2;
      if ((1.78 - imagenetworkerrg) > 3.87) {
          let sellY = String.fromCharCode(114,101,116,117,114,110,105,110,103,0);
          let floatingh = String.fromCharCode(99,104,97,115,101,0);
          let agreementS = 4.0;
          let register_w6 = 0;
         imagenetworkerrg -= parseFloat(`${pointI << (Math.min(Math.abs(1), 5))}`);
         sellY = `${3 * floatingh.length}`;
         floatingh += `${sellY.length & register_w6}`;
         agreementS += parseFloat(`${register_w6 * 2}`);
      }
       let iconwechatn = String.fromCharCode(116,101,114,109,105,110,97,116,101,100,0);
       let emojit = String.fromCharCode(109,101,116,97,98,111,100,121,0);
       let libreactnativejniw = String.fromCharCode(99,111,109,109,117,116,101,0);
      for (let h = 0; h < 1; h++) {
          let icontransferclubn = String.fromCharCode(98,97,115,101,108,105,110,101,0);
          let cedbadcebfbfbfbcfecbc9: Map<any, any> = new Map([[String.fromCharCode(100,101,102,105,110,101,100,0),430], [String.fromCharCode(116,116,97,100,115,112,0),118]]);
          let icondefaultthumbnailN = String.fromCharCode(97,108,116,101,114,0);
         short_y1 %= Math.max(3, 2 ^ cedbadcebfbfbfbcfecbc9.size);
         icontransferclubn = `${3 >> (Math.min(1, icondefaultthumbnailN.length))}`;
         cedbadcebfbfbfbcfecbc9.set(icontransferclubn, icondefaultthumbnailN.length + icontransferclubn.length);
      }
          let descq = String.fromCharCode(102,117,115,101,0);
         emojit += `${descq.length}`;
      iconsaveimageF -= saved.length & dialogY;
   if (optionsA >= dialogY) {
      optionsA /= Math.max(3, parseFloat(`${parseInt(`${iconsaveimageF}`)}`));
   }
   if (sortn.length > 5 && !modulex) {
       let catagoryy = String.fromCharCode(98,97,110,100,101,100,0);
       let animationb = String.fromCharCode(122,95,56,48,95,103,101,116,98,105,116,0);
       let shareP: Map<any, any> = new Map([[String.fromCharCode(104,112,97,114,97,109,115,0),false ], [String.fromCharCode(112,101,101,114,110,97,109,101,0),false ]]);
          let hoverT = String.fromCharCode(117,110,97,114,99,104,105,118,101,0);
         animationb = "1";
         hoverT += `${hoverT.length << (Math.min(4, hoverT.length))}`;
      if (shareP.size == animationb.length) {
          let hometeamfieldI = String.fromCharCode(115,97,118,101,0);
          let trashn = String.fromCharCode(103,110,111,115,105,115,0);
         shareP.set(`${animationb}`, shareP.size >> (Math.min(animationb.length, 3)));
         hometeamfieldI += `${1 & trashn.length}`;
         trashn += `${hometeamfieldI.length | 1}`;
      }
      if (catagoryy.includes(animationb)) {
         animationb += `${shareP.size}`;
      }
      while (catagoryy.includes(`${animationb.length}`)) {
         catagoryy += `${catagoryy.length}`;
         break;
      }
         animationb = `${catagoryy.length * 1}`;
          let sentry2 = 1.0;
          let formo = 5.0;
          let refreshborderless9 = 0.0;
         shareP.set(animationb, 2);
         sentry2 *= parseInt(`${formo}`);
         formo -= parseInt(`${refreshborderless9}`);
          let eactW = String.fromCharCode(97,115,99,105,105,0);
          let bodan_ = true;
         catagoryy += `${(String.fromCharCode(79,0) == catagoryy ? catagoryy.length : eactW.length)}`;
         eactW += `${((bodan_ ? 2 : 4) ^ (bodan_ ? 1 : 1))}`;
         animationb = `${catagoryy.length}`;
       let episodesR = 4.0;
       let iconarrowrightorangeP = 1.0;
      sortn += `${((modulex ? 3 : 5) >> (Math.min(homeo.length, 4)))}`;
   }
      indicatorK.push(dialogY);
   let historyU = homeo == String.fromCharCode(51,52,103,121,54,95,95,0);
   do {
      homeo = `${parseInt(`${optionsA}`) & 2}`;
      if (historyU) {
         break;
      }
   } while ((homeo.length > reportE.length) && historyU);
   if (audienceT.length == 1) {
      transferd = `${parseInt(`${iconsaveimageF}`)}`;
   }
   for (let z = 0; z < 1; z++) {
      homeo += `${indicatorK.length}`;
   }
      sortn = "1";
       let launchS = false;
       let release_h3S = String.fromCharCode(103,101,116,109,0);
       let pressurez = String.fromCharCode(98,108,111,99,107,101,100,0);
         launchS = release_h3S.length > 53;
         release_h3S += "1";
       let rounda = String.fromCharCode(98,117,116,116,111,110,115,0);
       let unread0 = String.fromCharCode(109,117,116,101,0);
      let analyticsv = release_h3S.length <= 7054240;
      do {
          let humidityz = false;
         release_h3S += `${((launchS ? 1 : 3))}`;
         humidityz = (humidityz ? !humidityz : humidityz);
         if (analyticsv) {
            break;
         }
      } while (analyticsv && (unread0.includes(`${release_h3S.length}`)));
      while (pressurez != String.fromCharCode(89,0) || release_h3S == String.fromCharCode(71,0)) {
         pressurez = `${unread0.length}`;
         break;
      }
      let firebaseZ = pressurez == String.fromCharCode(52,119,99,114,104,119,49,52,0);
      do {
          let championJ = 2;
          let spinnerP = false;
          let filledk = 2.0;
         pressurez = `${(pressurez == String.fromCharCode(122,0) ? pressurez.length : unread0.length)}`;
         championJ |= parseInt(`${filledk}`) >> (Math.min(1, Math.abs(3)));
         spinnerP = !spinnerP;
         filledk /= Math.max(5, ((spinnerP ? 2 : 4) >> (Math.min(Math.abs(parseInt(`${filledk}`)), 2))));
         if (firebaseZ) {
            break;
         }
      } while (firebaseZ && (release_h3S.length > 5));
         rounda += "3";
       let temperaturey = false;
       let resultU = false;
         release_h3S += `${((temperaturey ? 4 : 3) * rounda.length)}`;
      reportE = `${indicatorK.length}`;
   while ((parseInt(`${iconsaveimageF}`) - homeo.length) <= 3) {
      homeo = `${indicatorK.length}`;
      break;
   }
      audienceT = [(String.fromCharCode(88,0) == homeo ? homeo.length : parseInt(`${themek}`))];
       let arrowrightwithtailP: Array<any> = [String.fromCharCode(105,100,99,116,120,108,108,109,0), String.fromCharCode(99,104,101,99,107,97,115,109,0), String.fromCharCode(117,114,108,0)];
       let stro = 0;
       let moreA = String.fromCharCode(116,104,114,111,116,116,108,101,114,0);
      let reducerC = moreA == String.fromCharCode(112,106,52,121,101,117,110,115,114,0);
      do {
         moreA = `${moreA.length}`;
         if (reducerC) {
            break;
         }
      } while (((arrowrightwithtailP.length % (Math.max(moreA.length, 8))) >= 1 && (1 % (Math.max(5, arrowrightwithtailP.length))) >= 5) && reducerC);
          let abidetectl = true;
         arrowrightwithtailP.push(arrowrightwithtailP.length);
         abidetectl = !abidetectl;
          let twitterN = false;
          let defaultlogo9 = true;
         moreA = `${stro}`;
         twitterN = (!defaultlogo9 ? !twitterN : defaultlogo9);
      while ((1 << (Math.min(5, moreA.length))) <= 2 || 1 <= (1 << (Math.min(1, moreA.length)))) {
         moreA += `${arrowrightwithtailP.length ^ stro}`;
         break;
      }
      if (moreA.length >= 4) {
         stro ^= moreA.length | stro;
      }
      if ((arrowrightwithtailP.length ^ 4) > 2) {
          let settingW = String.fromCharCode(108,101,116,116,101,114,115,0);
          let z_hashk: Array<any> = [801, 817];
          let notificationfillemptym = String.fromCharCode(114,101,99,111,118,101,114,101,100,0);
          let subin2 = String.fromCharCode(115,105,116,101,109,97,112,0);
         stro >>= Math.min(Math.abs(1), 3);
         settingW = `${subin2.length << (Math.min(Math.abs(3), 4))}`;
         z_hashk.push(z_hashk.length | settingW.length);
         notificationfillemptym = `${1 >> (Math.min(5, settingW.length))}`;
         subin2 += `${2 << (Math.min(4, z_hashk.length))}`;
      }
       let tickedd = true;
       let anythinkT = false;
      while (!anythinkT) {
          let gradlev = String.fromCharCode(112,108,105,115,116,0);
          let statsn = String.fromCharCode(97,117,116,104,101,110,116,104,105,99,97,116,101,0);
          let lives: Map<any, any> = new Map([[String.fromCharCode(112,114,111,103,114,101,115,115,101,115,0),397], [String.fromCharCode(112,114,101,115,101,114,118,101,115,0),789], [String.fromCharCode(116,101,109,112,110,97,109,101,0),526]]);
         arrowrightwithtailP.push(moreA.length);
         gradlev = "2";
         statsn += `${(String.fromCharCode(75,0) == statsn ? lives.size : statsn.length)}`;
         lives.set(`${statsn}`, lives.size);
         break;
      }
      for (let g = 0; g < 1; g++) {
         moreA += `${((tickedd ? 2 : 5) << (Math.min(arrowrightwithtailP.length, 5)))}`;
      }
      saved += `${parseInt(`${iconsaveimageF}`)}`;
   if (3 > (1 ^ iconmorem.length) || 1 > (indicatorK.length ^ iconmorem.length)) {
       let videocommon8 = 3;
       let darkb: Array<any> = [134, 369, 936];
       let notificationfillemptyT: Array<any> = [167, 371];
       let send9: Array<any> = [332, 979];
         notificationfillemptyT = [notificationfillemptyT.length % 2];
         darkb.push(darkb.length / (Math.max(2, 1)));
         videocommon8 /= Math.max(notificationfillemptyT.length, 4);
          let singleX = String.fromCharCode(109,111,99,107,0);
         send9.push(2 * videocommon8);
         singleX = `${singleX.length + 3}`;
         darkb = [3 & notificationfillemptyT.length];
      for (let r = 0; r < 1; r++) {
          let customK = 4.0;
          let canvasu = String.fromCharCode(115,111,102,114,101,101,0);
         videocommon8 &= 1;
         customK *= parseInt(`${customK}`);
         canvasu += `${parseInt(`${customK}`) % (Math.max(canvasu.length, 4))}`;
      }
       let filledf = 3.0;
       let movies0 = 5.0;
      for (let h = 0; h < 3; h++) {
         movies0 *= parseFloat(`${darkb.length}`);
      }
          let profile2: Array<any> = [183, 328];
          let aread: Array<any> = [String.fromCharCode(110,111,110,115,101,99,117,114,101,0), String.fromCharCode(109,97,103,105,99,121,117,118,0), String.fromCharCode(105,110,115,112,101,99,116,97,98,108,101,0)];
          let navigationP = String.fromCharCode(97,100,106,101,99,116,105,118,101,115,0);
         movies0 -= parseFloat(`${2}`);
         profile2.push(2 & aread.length);
         aread = [profile2.length + aread.length];
         navigationP += `${navigationP.length}`;
      while (send9.length < 2) {
         notificationfillemptyT.push(3);
         break;
      }
       let hometeamfield_ = String.fromCharCode(115,116,114,101,116,99,104,97,98,108,101,0);
      while (movies0 > 5.72) {
         movies0 -= parseFloat(`${3}`);
         break;
      }
      iconmorem = [(saved == String.fromCharCode(81,0) ? videocommon8 : saved.length)];
   }
   let runtimeschedulerS = String.fromCharCode(57,104,114,98,101,0) == homeo;
   do {
       let binddatasz = String.fromCharCode(102,114,97,110,100,0);
       let backwardL = true;
       let emojib = true;
       let membershipK = String.fromCharCode(102,114,105,101,110,100,115,0);
      for (let g = 0; g < 3; g++) {
          let predictionv = 3.0;
          let condensedk = 2.0;
          let philippinesg = 5.0;
          let subbasketballplayerY = false;
         binddatasz += `${3 - binddatasz.length}`;
         predictionv /= Math.max(2, parseFloat(`${parseInt(`${condensedk}`)}`));
         condensedk *= parseFloat(`${1}`);
         philippinesg /= Math.max(1, parseInt(`${philippinesg}`) << (Math.min(2, Math.abs(3))));
         subbasketballplayerY = 68.3 >= predictionv || 68.3 >= condensedk;
      }
      if (!binddatasz.endsWith(`${emojib}`)) {
         emojib = backwardL;
      }
      let crownX = emojib ? !emojib : emojib;
      do {
         emojib = emojib && !backwardL;
         if (crownX) {
            break;
         }
      } while ((backwardL) && crownX);
      while (!emojib) {
         membershipK += `${((backwardL ? 4 : 2))}`;
         break;
      }
      while (membershipK.length <= 5 || emojib) {
         membershipK = `${(String.fromCharCode(115,0) == membershipK ? (backwardL ? 1 : 2) : membershipK.length)}`;
         break;
      }
         binddatasz = `${membershipK.length >> (Math.min(Math.abs(2), 2))}`;
         membershipK += `${((emojib ? 5 : 4) << (Math.min(Math.abs(2), 1)))}`;
          let stringP = String.fromCharCode(100,101,99,111,114,97,116,105,111,110,0);
          let circleA = String.fromCharCode(105,110,116,101,114,114,117,112,116,105,98,108,101,0);
          let defaultlogow = 4.0;
         emojib = circleA.includes(`${emojib}`);
         stringP += `${stringP.length * parseInt(`${defaultlogow}`)}`;
         circleA += "1";
         defaultlogow += parseInt(`${defaultlogow}`) & 3;
       let iconsharej = 1.0;
       let dangerp = 1.0;
       let libflipperW = 3.0;
      let actionsL = String.fromCharCode(101,102,99,109,122,48,105,112,0) == binddatasz;
      do {
          let mbbannerB = String.fromCharCode(116,111,107,101,110,115,0);
          let showlessg: Array<any> = [224, 363, 432];
          let schedulec = String.fromCharCode(108,101,116,116,101,114,0);
          let questT: Array<any> = [String.fromCharCode(115,104,117,116,116,105,110,103,0), String.fromCharCode(99,97,110,116,111,112,101,110,0)];
          let predictionactivek = String.fromCharCode(116,114,110,115,0);
         binddatasz += `${1 << (Math.min(1, showlessg.length))}`;
         mbbannerB += `${predictionactivek.length}`;
         showlessg = [predictionactivek.length & 1];
         schedulec = `${1 << (Math.min(3, questT.length))}`;
         questT = [schedulec.length];
         if (actionsL) {
            break;
         }
      } while ((3 == binddatasz.length && emojib) && actionsL);
         dangerp += ((backwardL ? 4 : 4) << (Math.min(1, Math.abs(3))));
      homeo = `${(membershipK == String.fromCharCode(95,0) ? iconmorem.length : membershipK.length)}`;
      if (runtimeschedulerS) {
         break;
      }
   } while (runtimeschedulerS && (4 <= homeo.length));
       let defaultfootballbgN = 0.0;
       let internetp = 2.0;
       let favorites = String.fromCharCode(112,117,116,99,0);
      if ((2 - defaultfootballbgN) < 1.77) {
         internetp /= Math.max(parseInt(`${internetp}`) * favorites.length, 1);
      }
         favorites = "1";
         defaultfootballbgN /= Math.max(2 | parseInt(`${internetp}`), 2);
      let iconsharefriendsH = internetp <= 6060377.0;
      do {
         internetp -= parseInt(`${defaultfootballbgN}`);
         if (iconsharefriendsH) {
            break;
         }
      } while ((2.90 < (defaultfootballbgN - internetp)) && iconsharefriendsH);
         favorites = `${parseInt(`${defaultfootballbgN}`)}`;
      dialogY %= Math.max(1, (sortn == String.fromCharCode(65,0) ? parseInt(`${iconsaveimageF}`) : sortn.length));
   for (let g = 0; g < 2; g++) {
      iconmorem.push(homeo.length);
   }
       let relatedI: Map<any, any> = new Map([[String.fromCharCode(112,114,101,116,99,104,0),780], [String.fromCharCode(112,97,112,101,114,0),878]]);
       let classesJ: Array<any> = [707, 776];
      let carouselv = relatedI.size >= 6015229;
      do {
         relatedI.set(`${classesJ.length}`, relatedI.size);
         if (carouselv) {
            break;
         }
      } while ((2 > (classesJ.length * relatedI.size) && (classesJ.length * 2) > 3) && carouselv);
         classesJ.push(relatedI.size ^ 1);
      if (classesJ.length > 4) {
         classesJ.push(classesJ.length);
      }
      while (Array.from(relatedI.values()).includes(classesJ.length)) {
          let turnc = 2;
          let bootsplashP = String.fromCharCode(105,110,100,101,112,101,110,100,101,110,99,101,0);
          let iconfeedbacko = 5.0;
          let audienceQ = 4.0;
          let searchp = String.fromCharCode(105,109,112,111,114,116,97,110,116,0);
         classesJ = [searchp.length];
         turnc *= turnc | bootsplashP.length;
         bootsplashP += `${turnc}`;
         iconfeedbacko /= Math.max(4, parseFloat(`${parseInt(`${iconfeedbacko}`) ^ turnc}`));
         audienceQ += parseFloat(`${parseInt(`${iconfeedbacko}`) << (Math.min(1, Math.abs(2)))}`);
         searchp = "2";
         break;
      }
      for (let g = 0; g < 1; g++) {
          let thailand2 = String.fromCharCode(110,115,115,101,0);
         relatedI = new Map([[`${classesJ.length}`, (String.fromCharCode(95,0) == thailand2 ? thailand2.length : classesJ.length)]]);
      }
          let basketballawayteamu = String.fromCharCode(109,111,111,118,0);
          let defaultfootballbgj = 5.0;
         classesJ.push(relatedI.size % (Math.max(4, basketballawayteamu.length)));
         basketballawayteamu = "3";
         defaultfootballbgj /= Math.max(4, parseFloat(`${1 ^ parseInt(`${defaultfootballbgj}`)}`));
      optionsA += parseFloat(`${2}`);
   if ((indicatorK.length - 3) > 1) {
       let flyerA = true;
       let clearR = 4.0;
       let indicatorq = 4.0;
      while (5.63 >= clearR && (clearR / 5.63) >= 1.56) {
         clearR -= parseFloat(`${3 | parseInt(`${indicatorq}`)}`);
         break;
      }
      let iconarrowrightwhiteQ = 8514180.0 >= clearR;
      do {
         clearR += parseFloat(`${3 * parseInt(`${clearR}`)}`);
         if (iconarrowrightwhiteQ) {
            break;
         }
      } while (iconarrowrightwhiteQ && (flyerA));
          let valuesr: Map<any, any> = new Map([[String.fromCharCode(97,114,99,104,101,116,121,112,101,0),636], [String.fromCharCode(114,97,105,115,101,100,0),368], [String.fromCharCode(112,111,114,116,97,105,116,0),678]]);
          let themeP: Array<any> = [String.fromCharCode(112,114,101,100,105,99,97,116,101,0), String.fromCharCode(100,101,101,112,0), String.fromCharCode(118,105,97,98,108,101,0)];
         indicatorq += parseInt(`${indicatorq}`) % (Math.max(themeP.length, 7));
         valuesr = new Map([[`${valuesr.size}`, 3 + valuesr.size]]);
         themeP.push(valuesr.size);
          let coreo = false;
          let controlM = String.fromCharCode(106,112,101,103,108,115,0);
          let downloadery = String.fromCharCode(99,111,111,107,0);
         clearR /= Math.max((parseFloat(`${(coreo ? 2 : 1) - controlM.length}`)), 1);
         coreo = (downloadery.length * downloadery.length) <= 70;
         controlM += `${downloadery.length / (Math.max(downloadery.length, 9))}`;
      for (let c = 0; c < 2; c++) {
          let profilepick = String.fromCharCode(109,101,100,105,117,109,0);
          let whiteanimationliveL = String.fromCharCode(109,116,105,109,101,95,57,95,53,0);
         flyerA = 60.85 <= clearR;
         profilepick += `${profilepick.length}`;
         whiteanimationliveL = `${whiteanimationliveL.length}`;
      }
         flyerA = clearR >= 93.17;
      if (clearR > 5.75) {
          let agreements: Array<any> = [764, 497, 557];
          let analyticU: Array<any> = [339, 616];
          let iconcalendarg = 2;
         clearR += parseFloat(`${analyticU.length}`);
         agreements.push(3 / (Math.max(1, agreements.length)));
         analyticU = [iconcalendarg + agreements.length];
         iconcalendarg -= 3;
      }
      for (let j = 0; j < 3; j++) {
         clearR *= parseFloat(`${2}`);
      }
      if ((clearR / (Math.max(4.10, 6))) == 2.47) {
         clearR -= parseFloat(`${3 % (Math.max(2, parseInt(`${clearR}`)))}`);
      }
      dialogY <<= Math.min(5, Math.abs((String.fromCharCode(52,0) == reportE ? reportE.length : iconmorem.length)));
   }
   if ((dialogY ^ 1) <= 5) {
      dialogY |= 2;
   }
   let chinaY = sortn.length >= 5074615;
   do {
       let diced = 2.0;
          let modal_ = String.fromCharCode(111,102,102,108,111,97,100,0);
          let foregroundn = 5.0;
          let resendn = 0.0;
         diced /= Math.max(3, parseInt(`${diced}`) << (Math.min(modal_.length, 3)));
         modal_ = `${1 >> (Math.min(Math.abs(parseInt(`${foregroundn}`)), 4))}`;
         foregroundn *= parseFloat(`${3 - parseInt(`${resendn}`)}`);
         resendn /= Math.max(parseFloat(`${parseInt(`${resendn}`) | parseInt(`${foregroundn}`)}`), 3);
          let group0 = 3;
         diced *= parseInt(`${diced}`) * group0;
      if (3.86 == (diced / (Math.max(diced, 10))) && 4.23 == (diced / 3.86)) {
         diced -= parseInt(`${diced}`);
      }
      sortn += `${((modulex ? 4 : 5) & parseInt(`${themek}`))}`;
      if (chinaY) {
         break;
      }
   } while (chinaY && (!sortn.startsWith(`${dialogY}`)));
      sortn = `${(String.fromCharCode(56,0) == reportE ? parseInt(`${iconsaveimageF}`) : reportE.length)}`;
   let styleso = 5537456 <= dialogY;
   do {
      dialogY /= Math.max(1, 3 - parseInt(`${optionsq}`));
      if (styleso) {
         break;
      }
   } while (((5 % (Math.max(1, dialogY))) < 5) && styleso);
   let clubP = sortn == String.fromCharCode(107,52,97,95,0);
   do {
       let feedbackQ = String.fromCharCode(101,108,101,109,115,0);
       let reactm = true;
       let serviceG: Map<any, any> = new Map([[String.fromCharCode(99,111,110,115,117,109,101,0),false ], [String.fromCharCode(111,118,101,114,0),true ]]);
       let teamdetailsbge = String.fromCharCode(99,111,110,116,101,110,116,108,101,115,115,0);
       let schedulerZ: Array<any> = [String.fromCharCode(101,120,112,108,97,105,110,0), String.fromCharCode(113,117,101,115,116,105,111,110,0), String.fromCharCode(120,105,110,99,0)];
         schedulerZ = [3];
         reactm = String.fromCharCode(85,0) == teamdetailsbge;
      while (feedbackQ.length > 2) {
          let dialogo = String.fromCharCode(97,112,112,108,105,101,114,0);
          let lineR = 3;
          let foundZ = true;
          let invite9 = String.fromCharCode(110,105,115,116,0);
         reactm = teamdetailsbge.length < invite9.length;
         dialogo += "1";
         lineR += dialogo.length;
         foundZ = lineR > 11;
         invite9 = `${lineR & 2}`;
         break;
      }
      while (4 > (serviceG.size + 4) || (teamdetailsbge.length + 4) > 4) {
         serviceG = new Map([[`${schedulerZ.length}`, 1 >> (Math.min(3, schedulerZ.length))]]);
         break;
      }
      for (let d = 0; d < 1; d++) {
         serviceG = new Map([[`${serviceG.size}`, serviceG.size]]);
      }
         serviceG = new Map([[`${schedulerZ.length}`, schedulerZ.length / (Math.max(4, teamdetailsbge.length))]]);
      if (reactm) {
          let infoH = String.fromCharCode(112,112,99,99,111,109,109,111,110,0);
         serviceG.set(teamdetailsbge, (teamdetailsbge == String.fromCharCode(73,0) ? infoH.length : teamdetailsbge.length));
      }
      let gifgoalT = 7138281 <= serviceG.size;
      do {
          let ballX = false;
         serviceG = new Map([[`${schedulerZ.length}`, schedulerZ.length]]);
         ballX = (!ballX ? ballX : ballX);
         if (gifgoalT) {
            break;
         }
      } while ((5 <= (schedulerZ.length / 4)) && gifgoalT);
      if ((teamdetailsbge.length >> (Math.min(4, Math.abs(serviceG.size)))) <= 5 && (teamdetailsbge.length >> (Math.min(Math.abs(5), 1))) <= 4) {
          let iconwechat8: Map<any, any> = new Map([[String.fromCharCode(114,101,102,117,110,100,0),String.fromCharCode(97,95,52,56,95,100,105,115,112,111,115,97,108,0)], [String.fromCharCode(97,99,116,105,118,97,116,101,100,95,106,95,57,50,0),String.fromCharCode(114,101,99,111,114,100,110,105,110,103,0)]]);
         serviceG.set(`${iconwechat8.size}`, 2);
      }
          let orientationT = String.fromCharCode(99,111,108,108,97,112,115,105,110,103,0);
         teamdetailsbge += `${serviceG.size ^ feedbackQ.length}`;
         orientationT = `${(orientationT == String.fromCharCode(49,0) ? orientationT.length : orientationT.length)}`;
       let predictionactive1: Array<any> = [987, 249];
       let matchinactivex: Array<any> = [String.fromCharCode(100,101,109,117,120,0), String.fromCharCode(109,97,100,101,0)];
      sortn += `${(String.fromCharCode(85,0) == feedbackQ ? serviceG.size : feedbackQ.length)}`;
      if (clubP) {
         break;
      }
   } while (((sortn.length & audienceT.length) > 1 || (audienceT.length & sortn.length) > 1) && clubP);
   while (dialogY <= iconmorem.length) {
      dialogY -= homeo.length ^ parseInt(`${optionsA}`);
      break;
   }
      modulex = !modulex && 74.85 >= optionsq;
   if (reportE == String.fromCharCode(49,0) || transferd.length < 4) {
      reportE += `${2 + transferd.length}`;
   }
   if (1 > reportE.length) {
      optionsq += parseFloat(`${transferd.length}`);
   }
   for (let v = 0; v < 3; v++) {
       let iconeditJ: Array<any> = [8, 53];
       let subinL = 5.0;
       let qaagj = 0.0;
      let mutedN = 6407099.0 >= subinL;
      do {
          let room_: Map<any, any> = new Map([[String.fromCharCode(99,97,108,108,101,100,0),567], [String.fromCharCode(108,97,116,101,110,99,121,0),916]]);
          let actionsD: Array<any> = [213, 734];
          let fullscreenminx = 3.0;
          let targetX: Map<any, any> = new Map([[String.fromCharCode(112,114,105,110,116,101,114,0),false ], [String.fromCharCode(118,111,114,98,105,115,100,115,112,0),true ], [String.fromCharCode(117,112,115,104,105,102,116,0),true ]]);
         subinL += parseInt(`${fullscreenminx}`) >> (Math.min(3, Math.abs(1)));
         room_.set(`${actionsD.length}`, actionsD.length % (Math.max(2, 10)));
         fullscreenminx -= 2;
         targetX.set(`${actionsD.length}`, actionsD.length);
         if (mutedN) {
            break;
         }
      } while (mutedN && (qaagj < subinL));
         iconeditJ.push(1 * parseInt(`${qaagj}`));
         qaagj -= parseInt(`${subinL}`);
          let e_centerc = String.fromCharCode(109,118,112,114,101,100,0);
          let xvodJ = 5.0;
         subinL += parseInt(`${xvodJ}`);
         e_centerc = `${e_centerc.length & 2}`;
         qaagj += 2 & parseInt(`${subinL}`);
          let mbjscommonH = 5.0;
          let reactF = String.fromCharCode(119,97,105,116,0);
          let exampleimageB = String.fromCharCode(97,109,102,101,110,99,0);
         iconeditJ.push(parseInt(`${subinL}`));
         mbjscommonH /= Math.max(1, 2);
         reactF = `${parseInt(`${mbjscommonH}`)}`;
         exampleimageB += `${exampleimageB.length}`;
         subinL *= 3 & iconeditJ.length;
         subinL *= parseInt(`${qaagj}`) % (Math.max(iconeditJ.length, 9));
         qaagj /= Math.max(3, 1);
      audienceT = [3];
   }
   let homet = audienceT.length <= 6004795;
   do {
      audienceT.push(indicatorK.length / 2);
      if (homet) {
         break;
      }
   } while (((audienceT.length - iconsaveimageF) <= 3.72 && 3.72 <= (iconsaveimageF - audienceT.length)) && homet);
       let libfileu: Array<any> = [733, 191, 378];
       let agreementO = 3;
       let dycreator3: Map<any, any> = new Map([[String.fromCharCode(97,100,100,98,108,107,0),true ], [String.fromCharCode(100,99,116,101,108,101,109,0),true ], [String.fromCharCode(109,97,103,101,0),true ]]);
          let dinit_fm = String.fromCharCode(109,97,112,115,105,122,101,0);
         agreementO %= Math.max(5, agreementO);
         dinit_fm = `${dinit_fm.length}`;
         agreementO &= libfileu.length;
         agreementO %= Math.max(5, dycreator3.size << (Math.min(Math.abs(2), 5)));
      while (Array.from(dycreator3.keys()).includes(`${agreementO}`)) {
         dycreator3 = new Map([[`${dycreator3.size}`, dycreator3.size]]);
         break;
      }
      for (let b = 0; b < 3; b++) {
          let sentryz: Map<any, any> = new Map([[String.fromCharCode(102,97,99,116,111,114,115,0),291], [String.fromCharCode(111,118,101,114,97,108,108,0),483]]);
         dycreator3 = new Map([[`${dycreator3.size}`, agreementO & dycreator3.size]]);
         sentryz = new Map([[`${sentryz.size}`, sentryz.size / 3]]);
      }
         libfileu = [libfileu.length & dycreator3.size];
         libfileu = [libfileu.length];
          let qnewsV: Array<any> = [503, 965, 353];
         dycreator3 = new Map([[`${libfileu.length}`, libfileu.length]]);
         qnewsV = [1 | qnewsV.length];
          let reactnativeratingsJ: Map<any, any> = new Map([[String.fromCharCode(117,110,101,115,99,97,112,101,0),709], [String.fromCharCode(103,105,103,97,98,121,116,101,115,0),730]]);
          let sharewhitej: Array<any> = [7, 281];
         libfileu = [2 * dycreator3.size];
         reactnativeratingsJ.set(`${sharewhitej.length}`, 3);
         sharewhitej.push(reactnativeratingsJ.size & sharewhitej.length);
      iconsaveimageF *= parseInt(`${optionsq}`) % 3;
       let editU: Map<any, any> = new Map([[String.fromCharCode(116,114,97,118,101,108,0),true ], [String.fromCharCode(115,110,111,119,0),false ], [String.fromCharCode(115,101,114,118,105,99,101,0),false ]]);
      for (let z = 0; z < 2; z++) {
         editU = new Map([[`${editU.size}`, 3]]);
      }
      for (let x = 0; x < 1; x++) {
         editU.set(`${editU.size}`, editU.size % 3);
      }
      if (editU.get(`${editU.size}`) == null) {
          let scrollviewg = String.fromCharCode(101,116,104,111,100,0);
         editU.set(scrollviewg, 2);
      }
      audienceT = [iconmorem.length];
      dialogY /= Math.max(iconmorem.length, 3);
      saved = `${(transferd == String.fromCharCode(74,0) ? transferd.length : parseInt(`${iconsaveimageF}`))}`;
       let combine5 = String.fromCharCode(108,97,116,101,114,0);
       let libavfilterz: Array<any> = [183, 705, 823];
         libavfilterz.push((String.fromCharCode(80,0) == combine5 ? combine5.length : libavfilterz.length));
      if ((combine5.length - libavfilterz.length) == 3 && 5 == (3 - combine5.length)) {
         combine5 += `${libavfilterz.length}`;
      }
         libavfilterz = [(String.fromCharCode(80,0) == combine5 ? libavfilterz.length : combine5.length)];
         libavfilterz.push(combine5.length);
       let selectedL = String.fromCharCode(111,118,101,114,115,104,111,111,116,0);
          let playlistu = 0.0;
         libavfilterz = [combine5.length + libavfilterz.length];
         playlistu *= parseFloat(`${3 + parseInt(`${playlistu}`)}`);
      iconsaveimageF += homeo.length;
   for (let j = 0; j < 2; j++) {
      trophyh *= parseFloat(`${1}`);
   }
       let libcxxcomponents5 = String.fromCharCode(103,112,111,115,116,102,105,108,116,101,114,0);
       let statisticso: Array<any> = [294, 12, 44];
       let internetT = String.fromCharCode(111,112,101,114,97,116,111,114,115,0);
       let basketballtrophyD = 5.0;
       let topicE = 1.0;
          let predictionbuttonu = 0;
          let eacts = String.fromCharCode(114,101,99,97,108,99,117,108,97,116,105,111,110,0);
          let giftL = 1.0;
         statisticso = [statisticso.length];
         predictionbuttonu ^= parseInt(`${giftL}`) | predictionbuttonu;
         eacts = `${eacts.length}`;
         giftL *= parseInt(`${giftL}`) << (Math.min(1, Math.abs(2)));
       let arrowrightwithtailq = true;
       let teamdetailsbgh = true;
          let weiboj = 3.0;
          let eabafadfadddbafeddddeeefeaafg = 3.0;
          let iconwatchs = String.fromCharCode(108,105,110,101,115,0);
         topicE /= Math.max(parseFloat(`${parseInt(`${eabafadfadddbafeddddeeefeaafg}`)}`), 2);
         weiboj -= (String.fromCharCode(79,0) == iconwatchs ? iconwatchs.length : parseInt(`${weiboj}`));
      for (let j = 0; j < 1; j++) {
         internetT += `${parseInt(`${basketballtrophyD}`) - 2}`;
      }
         teamdetailsbgh = !teamdetailsbgh;
         basketballtrophyD /= Math.max((parseFloat(`${3 ^ (arrowrightwithtailq ? 3 : 4)}`)), 5);
       let moonu = 1.0;
       let libjsip = 5.0;
      for (let k = 0; k < 3; k++) {
          let iconwatchnowq = true;
          let auto_6r = String.fromCharCode(103,108,105,116,99,104,0);
          let emojiE = 5.0;
          let defaultfootballbg8 = 4.0;
          let goallogoF = 4.0;
         arrowrightwithtailq = String.fromCharCode(89,0) == internetT;
         iconwatchnowq = ((auto_6r.length - (!iconwatchnowq ? auto_6r.length : 57)) < 57);
         emojiE *= parseInt(`${goallogoF}`);
         defaultfootballbg8 += parseInt(`${defaultfootballbg8}`) / (Math.max(auto_6r.length, 1));
      }
      transferd = "3";
      libcxxcomponents5 += `${3 / (Math.max(6, libcxxcomponents5.length))}`;
      audienceT = [2];
      reportE += `${(2 ^ (modulex ? 4 : 1))}`;
   if ((trophyh / (Math.max(10, optionsA))) < 5.45 || (5.45 / (Math.max(10, optionsA))) < 3.68) {
      trophyh -= parseFloat(`${iconmorem.length * saved.length}`);
   }
       let znewarchdefaultsO = String.fromCharCode(119,114,105,116,101,108,111,99,107,95,113,95,50,0);
       let dangerB = String.fromCharCode(106,107,101,110,99,0);
         dangerB += `${dangerB.length}`;
         dangerB = `${znewarchdefaultsO.length}`;
      if (dangerB.length < znewarchdefaultsO.length) {
          let static_lrM: Array<any> = [956, 851];
          let iconarrowrightW = 5.0;
          let reactnativejs_ = 1.0;
         znewarchdefaultsO += "3";
         static_lrM.push(parseInt(`${reactnativejs_}`) + 2);
         iconarrowrightW /= Math.max(5, 1 | parseInt(`${reactnativejs_}`));
      }
      while (znewarchdefaultsO != String.fromCharCode(71,0)) {
          let iconarrowlefth = 0;
         dangerB += `${iconarrowlefth}`;
         break;
      }
       let libswresampleb = String.fromCharCode(109,121,114,110,100,0);
      if (dangerB.includes(libswresampleb)) {
          let sharedr = String.fromCharCode(97,110,105,109,97,116,101,115,0);
         libswresampleb = `${(String.fromCharCode(90,0) == libswresampleb ? dangerB.length : libswresampleb.length)}`;
         sharedr = `${sharedr.length ^ 1}`;
      }
      reportE = `${sortn.length}`;
   while (!reportE.endsWith(homeo)) {
       let bellq = 4;
       let bell7 = String.fromCharCode(105,110,118,111,99,97,116,105,111,110,115,95,98,95,57,57,0);
       let controlsP: Map<any, any> = new Map([[String.fromCharCode(100,101,108,97,0),false ], [String.fromCharCode(105,110,116,114,111,0),true ]]);
       let matchesW: Map<any, any> = new Map([[String.fromCharCode(99,111,109,112,108,101,120,0),false ], [String.fromCharCode(104,111,115,116,110,97,109,101,0),false ], [String.fromCharCode(112,115,102,105,108,101,0),true ]]);
       let aboutC = String.fromCharCode(101,121,101,115,0);
      for (let z = 0; z < 3; z++) {
         bell7 += `${controlsP.size % 3}`;
      }
      for (let o = 0; o < 1; o++) {
         matchesW = new Map([[`${matchesW.size}`, controlsP.size % 1]]);
      }
         controlsP.set(`${bellq}`, 1);
      while ((4 % (Math.max(4, matchesW.size))) < 4 || 4 < (aboutC.length % (Math.max(9, matchesW.size)))) {
         matchesW = new Map([[`${controlsP.size}`, controlsP.size / (Math.max(bell7.length, 9))]]);
         break;
      }
       let shootyesgoalG = String.fromCharCode(115,117,98,116,114,97,99,116,101,100,0);
       let volume1 = String.fromCharCode(99,111,110,99,101,97,108,0);
      while (3 == (matchesW.size % (Math.max(bell7.length, 5)))) {
         bell7 = "2";
         break;
      }
         shootyesgoalG = "2";
      for (let z = 0; z < 2; z++) {
         bellq >>= Math.min(4, Math.abs(3 ^ shootyesgoalG.length));
      }
         shootyesgoalG = `${aboutC.length % 3}`;
      while ((matchesW.size % 5) >= 1 || (5 % (Math.max(9, matchesW.size))) >= 5) {
         matchesW = new Map([[volume1, volume1.length]]);
         break;
      }
         bellq += aboutC.length << (Math.min(3, shootyesgoalG.length));
         controlsP.set(aboutC, aboutC.length << (Math.min(Math.abs(2), 2)));
         matchesW.set(shootyesgoalG, (shootyesgoalG == String.fromCharCode(117,0) ? shootyesgoalG.length : bellq));
       let resultd: Map<any, any> = new Map([[String.fromCharCode(97,115,121,110,99,0),659], [String.fromCharCode(113,117,97,108,105,102,121,0),143]]);
       let gmailN: Map<any, any> = new Map([[String.fromCharCode(115,117,98,106,101,99,116,115,0),907], [String.fromCharCode(98,111,120,98,108,117,114,0),803], [String.fromCharCode(99,101,108,102,0),628]]);
         volume1 = `${(bell7 == String.fromCharCode(117,0) ? bell7.length : gmailN.size)}`;
      reportE += "2";
      break;
   }
      audienceT.push(((modulex ? 5 : 3) % 3));
},
}: mayi_GoogleViews) => {
  const { colors, textVariants, spacing } = useTheme();
  const vodReducer: mayi_Middleware = useAppSelector(
    ({ vodReducer }: mayi_Libapminsightb) => vodReducer
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
  const [results, setResults] = useState<Array<mayi_Runtime>>([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const carouselRef = useRef<any>();
  
  const [width, setWidth] = useState(Dimensions.get("window").width);
  const [imgRatio, setImgRatio] = useState(1.5);

  const userState = useSelector<mayi_Baseline>("userReducer");
  const isVip = mayi_Gift.isVip(userState.user);

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
       let fileL = String.fromCharCode(109,95,49,51,95,116,111,103,103,108,101,0);
    let libcxxcomponentsd = String.fromCharCode(116,111,100,97,121,115,0);
    let frame_w00: Array<any> = [131, 585];
    let libfollyR = String.fromCharCode(111,117,116,113,0);
    let telegramy = false;
    let rulesP = String.fromCharCode(116,97,98,108,101,115,0);
    let modulesY = String.fromCharCode(108,97,100,100,101,114,115,116,101,112,0);
    let clearq = 1.0;
    let codegenG = String.fromCharCode(115,101,99,117,114,105,116,121,0);
    let expand2 = String.fromCharCode(99,114,105,116,105,99,97,108,115,101,99,116,105,111,110,0);
    let confirmationB = 1.0;
    let theme3 = false;
    let fullscreenmax_ = 3.0;
   for (let o = 0; o < 2; o++) {
      clearq /= Math.max(2, parseFloat(`${2 | codegenG.length}`));
   }
      expand2 += `${parseInt(`${clearq}`) / 2}`;
      libcxxcomponentsd = `${libfollyR.length}`;
       let graphicsm = String.fromCharCode(114,101,115,99,104,101,100,117,108,101,0);
       let privilegeY = String.fromCharCode(101,110,116,114,105,101,115,0);
       let humidityw: Array<any> = [615, 589];
      while (4 == (graphicsm.length - humidityw.length) || 4 == (graphicsm.length - humidityw.length)) {
          let qaagj: Array<any> = [780, 716, 518];
         graphicsm = `${graphicsm.length - 3}`;
         qaagj.push(qaagj.length);
         break;
      }
      while (graphicsm.length < 4) {
          let iconbackwhite1 = 4.0;
          let baseL = 1;
          let sidej = false;
          let frame_3oe = String.fromCharCode(109,105,115,115,105,110,103,0);
         humidityw.push(baseL);
         iconbackwhite1 -= frame_3oe.length;
         baseL |= ((sidej ? 4 : 3));
         sidej = frame_3oe.length <= 24;
         break;
      }
         privilegeY = `${2 & privilegeY.length}`;
         humidityw = [humidityw.length];
      for (let r = 0; r < 2; r++) {
         graphicsm += `${privilegeY.length - humidityw.length}`;
      }
      while (graphicsm.startsWith(privilegeY)) {
         graphicsm += `${1 % (Math.max(7, humidityw.length))}`;
         break;
      }
       let episodeH = String.fromCharCode(97,116,114,97,99,97,108,0);
         privilegeY = "3";
      while (privilegeY.length == graphicsm.length) {
          let libcrashsdkr = 4.0;
          let iconwechatK = String.fromCharCode(122,101,114,111,101,100,0);
         graphicsm += `${humidityw.length & episodeH.length}`;
         libcrashsdkr -= parseInt(`${libcrashsdkr}`);
         iconwechatK += `${iconwechatK.length}`;
         break;
      }
      expand2 += `${privilegeY.length}`;
       let videovarG = 0.0;
       let stylesa = 2.0;
      while (stylesa >= videovarG) {
         videovarG += parseFloat(`${parseInt(`${stylesa}`)}`);
         break;
      }
      if (stylesa > 3.76) {
         videovarG += parseFloat(`${2 - parseInt(`${stylesa}`)}`);
      }
      if (1.87 > (2.11 + videovarG) && (videovarG + stylesa) > 2.11) {
         stylesa += parseInt(`${videovarG}`);
      }
      while (5.77 > (stylesa * 2.4) && (stylesa * 2.4) > 4.37) {
          let t_centerS = String.fromCharCode(97,108,114,101,97,100,121,0);
         videovarG *= parseFloat(`${parseInt(`${videovarG}`) / 1}`);
         t_centerS += `${t_centerS.length << (Math.min(t_centerS.length, 1))}`;
         break;
      }
         stylesa += parseInt(`${videovarG}`);
         stylesa /= Math.max(parseInt(`${videovarG}`) * parseInt(`${stylesa}`), 3);
      telegramy = String.fromCharCode(55,0) == rulesP && 30 < fileL.length;

    setIsRefreshing(true);

      clearq *= parseFloat(`${libcxxcomponentsd.length}`);
   let imagenomoredatau = rulesP.length <= 5720002;
   do {
      rulesP = `${(expand2 == String.fromCharCode(99,0) ? expand2.length : parseInt(`${confirmationB}`))}`;
      if (imagenomoredatau) {
         break;
      }
   } while ((rulesP == String.fromCharCode(74,0) || codegenG == String.fromCharCode(106,0)) && imagenomoredatau);
      clearq -= parseFloat(`${parseInt(`${clearq}`) << (Math.min(Math.abs(1), 5))}`);
   while (telegramy) {
       let reportL = String.fromCharCode(99,111,118,101,114,105,110,103,0);
       let logint = String.fromCharCode(109,105,114,114,111,114,105,110,103,0);
       let predictionactivew: Map<any, any> = new Map([[String.fromCharCode(100,121,110,97,109,105,99,0),642], [String.fromCharCode(115,99,114,111,108,108,97,98,108,101,0),67]]);
       let orientationi = 1.0;
       let selectionD = String.fromCharCode(109,97,99,0);
         logint += `${selectionD.length >> (Math.min(Math.abs(3), 1))}`;
      while ((orientationi - 4.66) < 2.37) {
         predictionactivew = new Map([[`${predictionactivew.size}`, reportL.length | 3]]);
         break;
      }
          let fieldf = String.fromCharCode(110,105,100,99,98,98,0);
          let libavutilG = 4.0;
          let networkj = 0;
         orientationi *= parseFloat(`${3 + selectionD.length}`);
         fieldf = `${networkj << (Math.min(Math.abs(1), 4))}`;
         libavutilG += parseFloat(`${1}`);
         networkj *= parseInt(`${libavutilG}`) << (Math.min(2, Math.abs(1)));
      while (predictionactivew.size == selectionD.length) {
          let coreX = 2.0;
         selectionD += "1";
         coreX -= parseFloat(`${2}`);
         break;
      }
      for (let m = 0; m < 1; m++) {
          let ballL: Map<any, any> = new Map([[String.fromCharCode(100,101,108,105,109,105,116,101,114,115,0),947], [String.fromCharCode(118,97,108,117,101,100,0),720]]);
          let images0 = 0.0;
         orientationi *= parseFloat(`${1 & predictionactivew.size}`);
         ballL = new Map([[`${ballL.size}`, 3 ^ ballL.size]]);
         images0 /= Math.max(5, parseInt(`${images0}`) / (Math.max(2, 5)));
      }
          let imagemanagerH: Array<any> = [String.fromCharCode(108,105,98,115,97,109,112,108,101,0), String.fromCharCode(115,117,98,98,108,111,99,107,0), String.fromCharCode(116,111,112,109,111,115,116,0)];
         orientationi -= parseFloat(`${3 >> (Math.min(2, reportL.length))}`);
         imagemanagerH = [imagemanagerH.length];
      while (5 <= reportL.length) {
         reportL += `${selectionD.length}`;
         break;
      }
      for (let z = 0; z < 2; z++) {
         reportL += `${(logint == String.fromCharCode(97,0) ? logint.length : predictionactivew.size)}`;
      }
       let forwardk = 5;
       let select5 = 4;
      let invite4 = 9058701 <= logint.length;
      do {
          let mountingP = true;
          let sigmobk = false;
         logint += `${selectionD.length | select5}`;
         mountingP = (sigmobk ? !mountingP : sigmobk);
         if (invite4) {
            break;
         }
      } while (((select5 ^ 4) > 2) && invite4);
      for (let i = 0; i < 3; i++) {
          let entryE = String.fromCharCode(112,117,116,0);
          let privilegeB = String.fromCharCode(113,122,98,105,110,0);
          let invitej = String.fromCharCode(97,117,116,104,111,114,105,122,97,116,105,111,110,115,0);
         selectionD = `${selectionD.length % (Math.max(privilegeB.length, 7))}`;
         entryE += `${(String.fromCharCode(102,0) == invitej ? entryE.length : invitej.length)}`;
         privilegeB += `${(entryE == String.fromCharCode(98,0) ? invitej.length : entryE.length)}`;
      }
      while (logint.startsWith(`${orientationi}`)) {
          let filterT = 0.0;
          let uploadk: Map<any, any> = new Map([[String.fromCharCode(113,117,101,117,101,0),String.fromCharCode(114,101,102,99,111,117,110,116,101,114,0)], [String.fromCharCode(115,104,97,100,101,115,0),String.fromCharCode(109,111,118,101,95,97,95,51,56,0)], [String.fromCharCode(103,101,111,108,111,99,97,116,105,111,110,95,50,95,49,49,0),String.fromCharCode(118,95,54,51,95,112,114,111,112,111,114,116,105,111,110,115,0)]]);
         logint += `${forwardk}`;
         filterT += parseInt(`${filterT}`) | uploadk.size;
         uploadk.set(`${filterT}`, uploadk.size);
         break;
      }
          let encryptW = String.fromCharCode(97,112,112,108,121,0);
          let zoomO = 0.0;
         reportL = "2";
         encryptW += `${parseInt(`${zoomO}`) + encryptW.length}`;
         zoomO += 3;
         logint += `${reportL.length * logint.length}`;
          let clearB: Array<any> = [807, 681, 528];
         predictionactivew.set(`${forwardk}`, forwardk % 3);
         clearB = [clearB.length + clearB.length];
      telegramy = (libfollyR.length * expand2.length) < 37;
      break;
   }
      fileL += `${libfollyR.length % (Math.max(libcxxcomponentsd.length, 2))}`;
    await onRefresh(0, true);

   if (fileL == String.fromCharCode(103,0)) {
      libcxxcomponentsd = `${3 & parseInt(`${confirmationB}`)}`;
   }
       let stationn = String.fromCharCode(102,111,111,116,98,97,108,108,0);
       let carousell = String.fromCharCode(112,97,116,104,115,0);
       let calendarr = 4.0;
      while ((parseFloat(`${carousell.length}`) + calendarr) >= 2.65) {
          let turndownC: Map<any, any> = new Map([[String.fromCharCode(109,97,120,105,109,117,109,0),414], [String.fromCharCode(116,95,57,53,95,112,111,108,121,107,101,121,0),476], [String.fromCharCode(115,97,102,101,115,116,97,99,107,0),975]]);
         carousell = `${carousell.length}`;
         turndownC = new Map([[`${turndownC.size}`, turndownC.size]]);
         break;
      }
          let langI: Array<any> = [196, 346, 62];
          let auto_vE = String.fromCharCode(120,112,116,97,98,108,101,0);
          let invite3 = true;
         calendarr /= Math.max(5, parseFloat(`${1 << (Math.min(Math.abs(parseInt(`${calendarr}`)), 1))}`));
         langI = [((invite3 ? 2 : 5) >> (Math.min(Math.abs(2), 1)))];
         auto_vE = `${((invite3 ? 1 : 5) >> (Math.min(langI.length, 5)))}`;
       let sinaW = String.fromCharCode(118,120,119,111,114,107,115,0);
      while (sinaW.length >= 1) {
         sinaW = `${(carousell == String.fromCharCode(51,0) ? carousell.length : parseInt(`${calendarr}`))}`;
         break;
      }
         calendarr += parseFloat(`${stationn.length - 2}`);
          let backy: Map<any, any> = new Map([[String.fromCharCode(116,114,97,99,101,0),String.fromCharCode(122,109,98,118,0)], [String.fromCharCode(114,101,115,105,100,117,97,108,0),String.fromCharCode(110,111,110,110,117,108,108,115,99,104,101,109,101,115,0)]]);
          let penaltymatchiconP = String.fromCharCode(115,97,103,97,0);
         stationn += `${carousell.length}`;
         backy = new Map([[`${backy.size}`, (String.fromCharCode(120,0) == penaltymatchiconP ? backy.size : penaltymatchiconP.length)]]);
      while (calendarr == 5.34) {
         carousell += `${sinaW.length | carousell.length}`;
         break;
      }
          let sentryx = 1;
          let predictionwinm = String.fromCharCode(99,95,54,48,95,110,97,118,105,103,97,116,101,0);
         carousell += `${stationn.length + 1}`;
         sentryx += 2 & sentryx;
         predictionwinm += `${sentryx - predictionwinm.length}`;
         carousell = `${3 - stationn.length}`;
      confirmationB *= parseFloat(`${1 / (Math.max(parseInt(`${confirmationB}`), 10))}`);
   let fullscreenmins = frame_w00.length >= 7415801;
   do {
      frame_w00.push(2 << (Math.min(5, libfollyR.length)));
      if (fullscreenmins) {
         break;
      }
   } while (fullscreenmins && (parseFloat(`${frame_w00.length}`) < clearq));
   while (5 > codegenG.length) {
      theme3 = (((theme3 ? 6 : rulesP.length) / (Math.max(rulesP.length, 7))) < 6);
      break;
   }
   if (theme3) {
       let libtobK = String.fromCharCode(116,101,115,115,101,108,97,116,101,0);
       let targetD = true;
       let data5 = 5;
       let signinupX = String.fromCharCode(102,111,114,109,97,110,116,0);
       let smallbrightnessZ = 5.0;
      while (libtobK.length > 4) {
         smallbrightnessZ -= parseFloat(`${parseInt(`${smallbrightnessZ}`) - libtobK.length}`);
         break;
      }
      if (!libtobK.endsWith(`${targetD}`)) {
         libtobK = "2";
      }
         smallbrightnessZ /= Math.max(parseFloat(`${data5 | 3}`), 3);
      for (let d = 0; d < 2; d++) {
         targetD = (data5 / (Math.max(smallbrightnessZ, 7))) <= 37;
      }
      let encryptorR = 8558224.0 >= smallbrightnessZ;
      do {
         smallbrightnessZ /= Math.max(3, parseFloat(`${parseInt(`${smallbrightnessZ}`) << (Math.min(3, Math.abs(3)))}`));
         if (encryptorR) {
            break;
         }
      } while (encryptorR && (2.43 >= smallbrightnessZ));
      if (2 == data5) {
         targetD = !targetD || 17.41 <= smallbrightnessZ;
      }
      if (5 >= signinupX.length) {
         targetD = !targetD;
      }
      if (signinupX.endsWith(`${targetD}`)) {
         targetD = String.fromCharCode(51,0) == libtobK;
      }
      let downloadern = 5121442.0 >= smallbrightnessZ;
      do {
          let gradlewJ: Array<any> = [296, 128, 401];
          let gestureE = String.fromCharCode(110,100,101,102,0);
          let penaltymatchiconn = 3.0;
         smallbrightnessZ += parseFloat(`${gestureE.length >> (Math.min(signinupX.length, 5))}`);
         gradlewJ = [parseInt(`${penaltymatchiconn}`) + 1];
         gestureE = `${gradlewJ.length}`;
         penaltymatchiconn /= Math.max(4, parseFloat(`${1}`));
         if (downloadern) {
            break;
         }
      } while (downloadern && ((1 ^ signinupX.length) == 5 || 5.91 == (smallbrightnessZ / (Math.max(9, parseFloat(`${signinupX.length}`))))));
       let renderY: Map<any, any> = new Map([[String.fromCharCode(104,114,116,102,0),809], [String.fromCharCode(101,101,112,0),112]]);
       let progressu: Map<any, any> = new Map([[String.fromCharCode(115,112,101,99,105,102,105,101,114,115,0),373], [String.fromCharCode(114,101,116,114,105,101,114,0),29], [String.fromCharCode(112,114,111,99,97,109,112,0),753]]);
      let libfbjniw = data5 <= 6923109;
      do {
         data5 <<= Math.min(Math.abs(parseInt(`${smallbrightnessZ}`)), 1);
         if (libfbjniw) {
            break;
         }
      } while ((Array.from(renderY.values()).includes(data5)) && libfbjniw);
      expand2 = `${signinupX.length / 2}`;
   }

    setTimeout(() => {

      fileL += `${(String.fromCharCode(87,0) == modulesY ? libcxxcomponentsd.length : modulesY.length)}`;
       let appleE = true;
         appleE = !appleE;
          let rocket8 = false;
          let targetq = 0;
          let sideI = String.fromCharCode(120,99,116,101,115,116,0);
         appleE = rocket8 || 82 >= targetq;
         rocket8 = (sideI.length % (Math.max(sideI.length, 1))) == 5;
         targetq >>= Math.min(2, Math.abs(sideI.length % 2));
      for (let m = 0; m < 1; m++) {
          let predictionarrown: Map<any, any> = new Map([[String.fromCharCode(112,114,111,109,112,101,103,0),true ], [String.fromCharCode(112,97,114,116,105,116,105,111,110,115,0),true ]]);
          let humidityz = String.fromCharCode(102,97,115,116,109,97,116,104,0);
          let iconfeedbackZ: Map<any, any> = new Map([[String.fromCharCode(112,95,50,49,0),String.fromCharCode(115,116,114,108,99,112,121,0)], [String.fromCharCode(115,97,117,99,101,0),String.fromCharCode(101,118,97,108,117,97,116,101,0)], [String.fromCharCode(112,111,105,110,116,101,114,0),String.fromCharCode(101,105,103,104,116,0)]]);
         appleE = humidityz.length == predictionarrown.size;
         predictionarrown = new Map([[`${iconfeedbackZ.size}`, iconfeedbackZ.size * iconfeedbackZ.size]]);
         humidityz += `${iconfeedbackZ.size}`;
      }
      telegramy = frame_w00.length > 79;
      confirmationB *= parseFloat(`${frame_w00.length}`);
   let showlessV = codegenG == String.fromCharCode(118,103,57,115,104,100,114,111,104,97,0);
   do {
       let matchG = 0.0;
       let combinew: Map<any, any> = new Map([[String.fromCharCode(98,105,110,100,105,110,103,115,0),false ], [String.fromCharCode(99,97,110,0),true ]]);
         combinew.set(`${matchG}`, parseInt(`${matchG}`) & 3);
          let completet: Array<any> = [834, 439, 835];
          let whatsappf: Map<any, any> = new Map([[String.fromCharCode(99,108,111,99,107,100,114,105,102,116,0),998], [String.fromCharCode(99,97,115,101,115,0),330]]);
         matchG += completet.length + 2;
         completet.push(whatsappf.size / (Math.max(6, whatsappf.size)));
      if (!Array.from(combinew.keys()).includes(`${matchG}`)) {
         matchG += parseInt(`${matchG}`) % (Math.max(2, 4));
      }
      let matches5 = matchG >= 5403780.0;
      do {
         matchG /= Math.max(2, parseInt(`${matchG}`));
         if (matches5) {
            break;
         }
      } while ((3 < combinew.size) && matches5);
      for (let y = 0; y < 1; y++) {
         matchG += parseInt(`${matchG}`);
      }
         matchG /= Math.max(parseInt(`${matchG}`) >> (Math.min(Math.abs(2), 4)), 1);
      codegenG = `${((theme3 ? 3 : 5) % (Math.max(10, parseInt(`${fullscreenmax_}`))))}`;
      if (showlessV) {
         break;
      }
   } while (showlessV && (expand2.length == codegenG.length));
      rulesP += "1";
      setActiveIndex(0);

       let mergerC = 1;
       let temperaturex = 4.0;
         temperaturex *= parseFloat(`${mergerC & 3}`);
      let ball5 = temperaturex >= 5605891.0;
      do {
          let libreactnativeblobG = 4.0;
          let reducerY: Map<any, any> = new Map([[String.fromCharCode(115,111,109,101,0),true ], [String.fromCharCode(99,97,112,97,99,105,116,121,0),false ]]);
          let layout3 = String.fromCharCode(107,117,107,105,0);
         temperaturex *= parseFloat(`${mergerC}`);
         libreactnativeblobG += layout3.length;
         reducerY.set(`${libreactnativeblobG}`, 1 + layout3.length);
         if (ball5) {
            break;
         }
      } while ((3.75 <= (temperaturex * mergerC)) && ball5);
         temperaturex -= parseFloat(`${parseInt(`${temperaturex}`)}`);
      for (let i = 0; i < 1; i++) {
          let commenti = false;
          let profile1 = String.fromCharCode(121,97,108,101,0);
          let sound6 = String.fromCharCode(99,104,97,99,104,97,0);
          let customn = 0.0;
         temperaturex += (parseFloat(`${(commenti ? 4 : 3) - 1}`));
         commenti = sound6.length <= 19;
         profile1 += `${1 + sound6.length}`;
         customn -= parseFloat(`${2}`);
      }
      for (let k = 0; k < 3; k++) {
         mergerC /= Math.max(2, 2);
      }
         mergerC ^= mergerC;
      libfollyR = `${mergerC << (Math.min(3, Math.abs(1)))}`;
   for (let w = 0; w < 3; w++) {
      expand2 += `${frame_w00.length / (Math.max(libfollyR.length, 6))}`;
   }
   let temperature8 = libfollyR == String.fromCharCode(57,51,111,0);
   do {
      libfollyR += `${parseInt(`${confirmationB}`) / 1}`;
      if (temperature8) {
         break;
      }
   } while (temperature8 && (libfollyR.length >= 4));
       let carouselK: Array<any> = [17, 29];
      if ((1 | carouselK.length) < 3 || (carouselK.length | 1) < 5) {
         carouselK.push(3);
      }
      while (carouselK.length <= carouselK.length) {
         carouselK.push(carouselK.length);
         break;
      }
      for (let y = 0; y < 1; y++) {
          let countrye = 5;
          let leftg: Array<any> = [900, 496, 657];
         carouselK = [leftg.length % (Math.max(carouselK.length, 5))];
         countrye >>= Math.min(3, Math.abs(countrye * 2));
         leftg.push(countrye);
      }
      modulesY += `${(String.fromCharCode(72,0) == expand2 ? expand2.length : modulesY.length)}`;
       let notificationg = true;
      if (!notificationg) {
          let modal6 = String.fromCharCode(118,99,101,110,99,0);
          let photo8 = true;
          let emojiheartl: Array<any> = [884, 797, 596];
         notificationg = ((modal6.length | (!notificationg ? 48 : modal6.length)) >= 48);
         photo8 = emojiheartl.includes(photo8);
         emojiheartl.push(emojiheartl.length | 2);
      }
         notificationg = (!notificationg ? !notificationg : notificationg);
         notificationg = !notificationg && notificationg;
      libcxxcomponentsd += `${parseInt(`${confirmationB}`)}`;
      if (carouselRef) {

   if (!expand2.includes(`${codegenG.length}`)) {
      codegenG = `${1 >> (Math.min(5, frame_w00.length))}`;
   }
      clearq /= Math.max(parseFloat(`${libcxxcomponentsd.length}`), 3);
   let libfollyv = String.fromCharCode(50,103,57,114,107,104,0) == libfollyR;
   do {
       let guideO = 0;
       let issubE = 2.0;
       let mbnativeadvanceds = 2;
       let libapminsightaK = 3.0;
         guideO >>= Math.min(Math.abs(parseInt(`${libapminsightaK}`)), 5);
       let whistle_: Array<any> = [569, 956];
       let mounting2: Array<any> = [634, 427];
         whistle_ = [1 ^ whistle_.length];
          let schedule2: Map<any, any> = new Map([[String.fromCharCode(99,105,112,104,101,114,116,101,120,116,0),String.fromCharCode(111,118,101,114,108,97,121,115,0)], [String.fromCharCode(112,95,54,57,95,99,111,109,112,97,110,100,0),String.fromCharCode(105,110,116,101,114,97,99,116,111,114,0)]]);
         mounting2 = [whistle_.length];
         schedule2 = new Map([[`${schedule2.size}`, schedule2.size]]);
         mbnativeadvanceds += whistle_.length;
          let leaguedetailsbgQ = String.fromCharCode(114,101,99,101,105,118,105,110,103,0);
          let styleN = String.fromCharCode(110,111,116,104,101,108,100,0);
          let forward5 = String.fromCharCode(114,97,110,103,101,0);
         mbnativeadvanceds += whistle_.length;
         leaguedetailsbgQ += `${forward5.length}`;
         styleN += `${leaguedetailsbgQ.length}`;
         forward5 += `${forward5.length >> (Math.min(5, styleN.length))}`;
         libapminsightaK += parseFloat(`${1}`);
      if ((mbnativeadvanceds / (Math.max(parseInt(`${libapminsightaK}`), 9))) <= 2 && 5 <= (mbnativeadvanceds + 2)) {
          let backiconJ: Map<any, any> = new Map([[String.fromCharCode(99,111,110,116,114,97,105,110,101,100,0),String.fromCharCode(105,110,112,117,116,115,0)], [String.fromCharCode(99,104,97,110,103,101,108,111,103,0),String.fromCharCode(109,117,108,116,105,112,108,105,99,97,116,105,111,110,0)]]);
          let basketballmatchdetailbgi: Array<any> = [String.fromCharCode(112,114,101,118,105,111,117,115,108,121,0), String.fromCharCode(115,104,105,102,116,0), String.fromCharCode(110,118,100,101,99,0)];
          let baiduq = String.fromCharCode(99,105,114,99,108,101,100,0);
         libapminsightaK *= parseFloat(`${parseInt(`${issubE}`)}`);
         backiconJ.set(`${basketballmatchdetailbgi.length}`, backiconJ.size - basketballmatchdetailbgi.length);
         baiduq = `${baiduq.length * 2}`;
      }
         guideO &= 3;
      let libcxxcomponentss = 6374511 >= mbnativeadvanceds;
      do {
         mbnativeadvanceds %= Math.max(2, mounting2.length | 1);
         if (libcxxcomponentss) {
            break;
         }
      } while (((4.64 - libapminsightaK) == 4.29) && libcxxcomponentss);
          let applew: Array<any> = [String.fromCharCode(97,110,103,108,101,115,0), String.fromCharCode(97,104,101,97,100,0)];
         whistle_.push(1);
         applew = [applew.length];
      while (1.31 == issubE) {
         guideO -= 3 & mounting2.length;
         break;
      }
      libfollyR += `${((theme3 ? 3 : 4) & parseInt(`${issubE}`))}`;
      if (libfollyv) {
         break;
      }
   } while (libfollyv && (!libfollyR.startsWith(`${clearq}`)));
   if (5 > (expand2.length + 2) || 2.31 > (clearq + parseFloat(`${expand2.length}`))) {
       let delegate_2i: Array<any> = [817, 143];
       let usernameq = String.fromCharCode(100,116,100,102,0);
       let statsnomoredatap: Array<any> = [444, 592];
      if (4 == (statsnomoredatap.length + 1)) {
         statsnomoredatap = [delegate_2i.length];
      }
      while (3 <= (delegate_2i.length / (Math.max(4, 10))) && (usernameq.length / (Math.max(5, delegate_2i.length))) <= 4) {
         usernameq = `${(usernameq == String.fromCharCode(90,0) ? delegate_2i.length : usernameq.length)}`;
         break;
      }
      for (let o = 0; o < 3; o++) {
         usernameq = `${delegate_2i.length ^ 1}`;
      }
         statsnomoredatap.push(statsnomoredatap.length);
      if (4 < usernameq.length) {
         delegate_2i = [delegate_2i.length - 3];
      }
      clearq /= Math.max((parseFloat(`${fileL == String.fromCharCode(72,0) ? modulesY.length : fileL.length}`)), 4);
   }
   for (let g = 0; g < 1; g++) {
      codegenG = `${(rulesP == String.fromCharCode(57,0) ? libcxxcomponentsd.length : rulesP.length)}`;
   }
        setIsRefreshing(false);
        carouselRef?.current?.scrollTo({ index: 0, animated: false });
      }
    }, 1000);
  };

  // const fetchPlaylist = (page: number) =>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  //   ({ pageParam = 1 }) => fetchPlaylist(pageParam),
  
  
  
  
  
  
  
  //       if (nextPage > totalPage && totalPage != 0) {
  
  
  
  
  
  
  
  
  
  
  

  const fetchYingPing = () =>
    mayi_Iconclosewhite.getHomePages(1001, isVip).then((data) => {
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
    ({ item, index }: { item: mayi_Runtime; index: number }) => <></>,
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
              source={require("@static/images/robotoNetwork.gif")}
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
