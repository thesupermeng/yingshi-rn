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
import ShowMoreVodButton from "../button/x_sheet_theme_button";
import { RBEmojiEwarded, XVSScoreDark, JClubEdit } from "@type/wpk_long";
import FastImage from "../common/gwi_with";
import { QQCenterChart } from "@redux/reducers/pxk_lang_quest";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/kg_index";
import { PSmall } from "@redux/fj_prediction_thailand";
import VodHistoryList from "../vod/jrx_sell_signinup";
import VodLiveStationList from "../vod/s_policy_calendar";
import { API_DOMAIN, API_DOMAIN_TEST } from "@utility/n_subs_interstitial";
import VodListVertical from "../vod/z_langkey";
import { playVod, viewPlaylistDetails } from "@redux/actions/xif_layout";
import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import LinearGradient from "react-native-linear-gradient";
import Carousel from "react-native-reanimated-carousel";
import CarouselPagination from "./qp_middleware";
import LoadingIcon from "@static/images/unselectedDark.svg";
import { Image } from "react-native";
import { YingPingContainer } from "../container/q_incident_cast";
import { BConfirmationGreen, RLarge } from "@api";
import { HDTGesturesList } from "@redux/reducers/f_gmail";
import { KWConstants } from "@models/kl_sheet";
import { screenModel } from "@type/nb_shared_target";
import { setYuGao } from "@redux/actions/a_switch";

interface YCUFrameYing {
   id: number;
   name: string;
}
interface XFillButton {
   vodCarouselRes: any;
   navOptions?: YCUFrameYing[] | undefined;
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
      let emojiR = String.fromCharCode(115, 95, 55, 51, 95, 100, 101, 97, 100, 105, 110, 101, 0);
      let benefitB = String.fromCharCode(110, 95, 56, 57, 95, 116, 97, 98, 0);
      let suggestionj = 2;
      let clockY = 1.0;
      let terms5 = String.fromCharCode(108, 108, 118, 105, 100, 101, 110, 99, 100, 115, 112, 95, 103, 95, 53, 52, 0);
      let streaming2 = String.fromCharCode(116, 95, 49, 57, 95, 121, 101, 115, 116, 101, 114, 100, 97, 121, 0);
      let description_di = 5.0;
      let verticalC = 3;
      let singleN = String.fromCharCode(97, 117, 116, 111, 114, 101, 109, 111, 118, 101, 95, 56, 95, 54, 57, 0);
      let backwardA = 5;
      let shirty = 3;
      if (benefitB.endsWith(streaming2)) {
         benefitB = `${1 - emojiR.length}`;
      }
      if (streaming2.includes(`${emojiR.length}`)) {
         let memberu = false;
         let clearr: Map<any, any> = new Map([[String.fromCharCode(97, 95, 57, 55, 95, 116, 114, 97, 110, 115, 109, 105, 115, 115, 105, 111, 110, 0), String.fromCharCode(108, 111, 111, 112, 115, 95, 108, 95, 49, 57, 0)], [String.fromCharCode(115, 95, 55, 50, 95, 102, 105, 110, 100, 97, 115, 115, 111, 99, 105, 97, 116, 105, 111, 110, 0), String.fromCharCode(108, 111, 99, 97, 116, 101, 95, 48, 95, 50, 53, 0)], [String.fromCharCode(99, 111, 109, 112, 97, 99, 116, 101, 100, 95, 118, 95, 57, 51, 0), String.fromCharCode(114, 95, 51, 48, 95, 114, 101, 102, 112, 105, 99, 0)]]);
         let sportp: Array<any> = [137, 203, 337];
         clearr = new Map([[`${sportp.length}`, sportp.length]]);
         while (clearr.size <= 3 && 2 <= (3 % (Math.max(4, clearr.size)))) {
            memberu = !memberu;
            break;
         }
         for (let h = 0; h < 1; h++) {
            clearr = new Map([[`${clearr.size}`, 2 & clearr.size]]);
         }
         clearr = new Map([[`${clearr.size}`, clearr.size | 1]]);
         let theme8 = 9858641 <= sportp.length;
         do {
            let temperaturel: Map<any, any> = new Map([[String.fromCharCode(118, 97, 108, 105, 100, 97, 116, 105, 110, 103, 95, 110, 95, 55, 55, 0), 385], [String.fromCharCode(113, 95, 56, 95, 110, 101, 119, 101, 115, 116, 0), 767], [String.fromCharCode(114, 101, 100, 105, 114, 101, 99, 116, 105, 111, 110, 95, 56, 95, 57, 50, 0), 896]]);
            let profileL: Map<any, any> = new Map([[String.fromCharCode(118, 95, 56, 48, 95, 99, 108, 111, 115, 101, 99, 98, 0), 569], [String.fromCharCode(102, 102, 116, 112, 97, 99, 107, 95, 109, 95, 51, 48, 0), 993], [String.fromCharCode(102, 111, 99, 117, 115, 101, 100, 95, 110, 95, 51, 54, 0), 267]]);
            sportp.push(profileL.size & 1);
            temperaturel = new Map([[`${temperaturel.size}`, temperaturel.size ^ 3]]);
            profileL.set(`${temperaturel.size}`, temperaturel.size);
            if (theme8) {
               break;
            }
         } while (theme8 && (sportp.length <= 1 || (sportp.length >> (Math.min(Math.abs(1), 5))) <= 3));
         let common1 = clearr.size <= 6020168;
         do {
            let aboutC = 5.0;
            let sinaw = 0.0;
            clearr.set(`${sinaw}`, 3);
            aboutC *= parseFloat(`${parseInt(`${aboutC}`)}`);
            sinaw -= parseFloat(`${parseInt(`${aboutC}`)}`);
            if (common1) {
               break;
            }
         } while (common1 && (1 >= clearr.size));
         while (Array.from(clearr.keys()).includes(`${sportp.length}`)) {
            let headert = 2.0;
            let footballp = true;
            let grayF = String.fromCharCode(106, 95, 54, 56, 95, 108, 105, 98, 120, 109, 108, 0);
            let hookl = 0;
            clearr.set(`${footballp}`, ((footballp ? 3 : 2) / (Math.max(sportp.length, 2))));
            headert += hookl;
            grayF += `${hookl * grayF.length}`;
            break;
         }
         let spinnerg = clearr.size >= 6254962;
         do {
            let trophyL = String.fromCharCode(102, 117, 110, 103, 105, 98, 108, 101, 115, 95, 109, 95, 51, 48, 0);
            clearr.set(`${memberu}`, clearr.size);
            trophyL += `${2 | trophyL.length}`;
            if (spinnerg) {
               break;
            }
         } while ((2 <= clearr.size && 4 <= (2 >> (Math.min(3, Math.abs(clearr.size))))) && spinnerg);
         for (let q = 0; q < 3; q++) {
            memberu = (clearr.size - sportp.length) < 21;
         }
         streaming2 += `${((memberu ? 3 : 4) | 2)}`;
      }
      let interstitialt = singleN == String.fromCharCode(49, 117, 113, 0);
      do {
         singleN = `${singleN.length << (Math.min(5, Math.abs(parseInt(`${clockY}`))))}`;
         if (interstitialt) {
            break;
         }
      } while (interstitialt && (streaming2 != singleN));
      singleN += `${singleN.length}`;
      let tailX = clockY <= 8314931.0;
      do {
         let fill3: Map<any, any> = new Map([[String.fromCharCode(105, 110, 116, 101, 114, 112, 111, 108, 97, 116, 97, 98, 108, 101, 95, 115, 95, 54, 55, 0), true], [String.fromCharCode(103, 95, 57, 48, 95, 109, 97, 114, 107, 100, 111, 119, 110, 0), false]]);
         let transferm = 1;
         let mutedM = 3;
         fill3.set(`${mutedM}`, 2);
         let floater1 = mutedM >= 5273961;
         do {
            mutedM -= transferm;
            if (floater1) {
               break;
            }
         } while (floater1 && ((mutedM * fill3.size) < 3 && 5 < (3 * fill3.size)));
         if (fill3.size <= 3) {
            fill3 = new Map([[`${fill3.size}`, 1]]);
         }
         let calendarR = String.fromCharCode(106, 95, 55, 48, 95, 108, 111, 110, 0);
         let miniR = String.fromCharCode(97, 95, 56, 49, 95, 115, 104, 97, 114, 101, 100, 107, 101, 121, 0);
         let usernamet = String.fromCharCode(113, 95, 55, 52, 95, 112, 97, 99, 107, 101, 116, 105, 110, 0);
         mutedM &= 1 << (Math.min(4, Math.abs(fill3.size)));
         calendarR += `${calendarR.length << (Math.min(Math.abs(1), 4))}`;
         miniR += `${usernamet.length}`;
         usernamet += `${1 ^ miniR.length}`;
         if (mutedM > 1) {
            fill3 = new Map([[`${fill3.size}`, mutedM % (Math.max(fill3.size, 2))]]);
         }
         fill3.set(`${mutedM}`, 1 ^ mutedM);
         while (3 <= (fill3.size >> (Math.min(Math.abs(5), 4)))) {
            let viewerd = 4.0;
            let launchq: Array<any> = [311, 97];
            let hooksu: Map<any, any> = new Map([[String.fromCharCode(97, 118, 117, 116, 105, 108, 114, 101, 115, 95, 116, 95, 53, 51, 0), 110], [String.fromCharCode(106, 117, 108, 105, 97, 110, 95, 50, 95, 55, 56, 0), 134]]);
            fill3.set(`${transferm}`, fill3.size);
            viewerd += launchq.length - 2;
            launchq.push(hooksu.size % (Math.max(launchq.length, 4)));
            hooksu.set(`${launchq.length}`, hooksu.size);
            break;
         }
         transferm &= 1;
         let countryR = fill3.size <= 7661268;
         do {
            let buffera = 4.0;
            let mail7 = String.fromCharCode(116, 95, 52, 55, 95, 108, 111, 103, 105, 115, 116, 105, 99, 0);
            let history6 = 4.0;
            let termsM: Array<any> = [974, 705];
            fill3.set(`${transferm}`, 1);
            buffera *= parseFloat(`${parseInt(`${buffera}`)}`);
            mail7 += `${1 * parseInt(`${buffera}`)}`;
            history6 /= Math.max(parseFloat(`${3}`), 4);
            termsM = [parseInt(`${history6}`)];
            if (countryR) {
               break;
            }
         } while (((2 ^ transferm) == 2) && countryR);
         clockY /= Math.max(2, verticalC - 2);
         if (tailX) {
            break;
         }
      } while ((2.66 < clockY) && tailX);
      streaming2 += `${singleN.length % (Math.max(streaming2.length, 4))}`;
      emojiR = `${suggestionj & 2}`;
      let refreshh = 8880878.0 <= description_di;
      do {
         let specZ = String.fromCharCode(104, 97, 115, 104, 116, 97, 98, 108, 101, 95, 103, 95, 57, 51, 0);
         let backgroundR = true;
         let gesturesN = 1.0;
         while (2 >= (specZ.length / (Math.max(1, parseInt(`${gesturesN}`)))) && (specZ.length / (Math.max(6, parseInt(`${gesturesN}`)))) >= 2) {
            gesturesN /= Math.max(specZ.length, 1);
            break;
         }
         let back_ = specZ.length <= 7155243;
         do {
            let awaym: Map<any, any> = new Map([[String.fromCharCode(117, 116, 109, 111, 115, 116, 95, 112, 95, 57, 50, 0), String.fromCharCode(106, 95, 55, 53, 95, 115, 104, 111, 119, 0)], [String.fromCharCode(119, 95, 54, 56, 95, 111, 116, 104, 101, 114, 119, 105, 115, 101, 0), String.fromCharCode(98, 117, 102, 115, 95, 54, 95, 57, 48, 0)]]);
            specZ += `${awaym.size % (Math.max(1, 10))}`;
            if (back_) {
               break;
            }
         } while ((specZ.length > 3 && backgroundR) && back_);
         let weibo1 = backgroundR ? !backgroundR : backgroundR;
         do {
            backgroundR = gesturesN > 67.55;
            if (weibo1) {
               break;
            }
         } while ((specZ.length >= 3) && weibo1);
         if (5 > (specZ.length * parseInt(`${gesturesN}`))) {
            let anytime_ = String.fromCharCode(116, 104, 114, 111, 119, 105, 110, 103, 95, 116, 95, 49, 54, 0);
            let linkW = String.fromCharCode(99, 111, 112, 121, 118, 95, 120, 95, 53, 53, 0);
            specZ = `${specZ.length}`;
            anytime_ += "3";
            linkW = `${anytime_.length ^ linkW.length}`;
         }
         gesturesN *= 1 >> (Math.min(Math.abs(parseInt(`${gesturesN}`)), 5));
         let hooksv = 0.0;
         let auto_3vT = 3.0;
         hooksv -= parseFloat(`${specZ.length}`);
         let dialogI = String.fromCharCode(118, 95, 53, 53, 95, 109, 111, 117, 115, 0);
         let k_titleu = String.fromCharCode(121, 95, 50, 50, 95, 118, 97, 108, 105, 100, 97, 116, 111, 114, 0);
         while ((4 & specZ.length) == 2 && (gesturesN - 4.9) == 3.25) {
            gesturesN += parseInt(`${auto_3vT}`) & 1;
            break;
         }
         description_di *= parseFloat(`${streaming2.length - 2}`);
         if (refreshh) {
            break;
         }
      } while (refreshh && ((1.44 - description_di) <= 5.84));
      let constantsv = 3;
      let private_7gG: Map<any, any> = new Map([[String.fromCharCode(97, 95, 49, 50, 95, 115, 116, 114, 101, 97, 109, 0), 997], [String.fromCharCode(112, 97, 114, 101, 110, 116, 104, 101, 115, 105, 115, 95, 101, 95, 56, 56, 0), 116]]);
      let halfw = 7181285 <= constantsv;
      do {
         let area_ = 1.0;
         constantsv ^= constantsv;
         area_ += parseFloat(`${parseInt(`${area_}`) | parseInt(`${area_}`)}`);
         if (halfw) {
            break;
         }
      } while (halfw && (3 == constantsv));
      private_7gG.set(`${constantsv}`, 2 - private_7gG.size);
      while (private_7gG.size == constantsv) {
         let inviteh = 3.0;
         let backwardO = String.fromCharCode(104, 119, 97, 101, 115, 95, 115, 95, 51, 50, 0);
         let inactive0 = 3.0;
         constantsv <<= Math.min(4, Math.abs(parseInt(`${inviteh}`)));
         inviteh *= backwardO.length << (Math.min(4, Math.abs(parseInt(`${inactive0}`))));
         backwardO += `${3 ^ parseInt(`${inactive0}`)}`;
         break;
      }
      for (let m = 0; m < 2; m++) {
         private_7gG = new Map([[`${private_7gG.size}`, 1]]);
      }
      let leftY: Map<any, any> = new Map([[String.fromCharCode(97, 100, 115, 95, 111, 95, 53, 49, 0), false], [String.fromCharCode(109, 101, 115, 104, 95, 115, 95, 54, 55, 0), false], [String.fromCharCode(108, 97, 117, 110, 99, 104, 101, 114, 95, 56, 95, 53, 55, 0), false]]);
      private_7gG.set(`${constantsv}`, constantsv);
      leftY = new Map([[`${leftY.size}`, leftY.size & leftY.size]]);
      let score9 = String.fromCharCode(112, 97, 115, 115, 116, 104, 114, 111, 117, 103, 104, 95, 112, 95, 53, 0);
      let minimizex = String.fromCharCode(111, 95, 49, 54, 95, 111, 116, 111, 98, 0);
      private_7gG = new Map([[`${private_7gG.size}`, minimizex.length]]);
      score9 += "2";
      minimizex = `${3 | score9.length}`;
      description_di += parseFloat(`${1 * suggestionj}`);
      streaming2 = "3";
      benefitB += `${singleN.length}`;
      singleN += `${backwardA}`;
      let delegate_se = 4.0;
      let time_9ho: Array<any> = [715, 467];
      let floaterq = String.fromCharCode(98, 97, 115, 101, 117, 114, 108, 95, 52, 95, 52, 51, 0);
      let unticky = false;
      let arrows = 3;
      time_9ho = [2 << (Math.min(3, floaterq.length))];
      floaterq += `${arrows >> (Math.min(Math.abs(arrows), 5))}`;
      unticky = 83 >= arrows || arrows >= 83;
      if (parseFloat(`${time_9ho.length}`) > delegate_se) {
         time_9ho.push(time_9ho.length);
      }
      while (3 > (time_9ho.length >> (Math.min(Math.abs(4), 5))) && 4.37 > (delegate_se / 2.36)) {
         time_9ho.push(time_9ho.length - 3);
         break;
      }
      let pageC = delegate_se >= 8304609.0;
      do {
         delegate_se += parseFloat(`${1 << (Math.min(Math.abs(parseInt(`${delegate_se}`)), 3))}`);
         if (pageC) {
            break;
         }
      } while ((3 == time_9ho.length) && pageC);
      let aboutw: Array<any> = [String.fromCharCode(122, 95, 57, 49, 95, 115, 108, 97, 115, 104, 0), String.fromCharCode(100, 98, 108, 113, 117, 111, 116, 101, 95, 110, 95, 54, 55, 0)];
      time_9ho = [aboutw.length];
      while ((time_9ho.length >> (Math.min(Math.abs(4), 5))) <= 5) {
         time_9ho.push(3);
         break;
      }
      benefitB += `${(singleN == String.fromCharCode(120, 0) ? time_9ho.length : singleN.length)}`;
      let remindert = String.fromCharCode(100, 111, 119, 110, 103, 114, 97, 100, 101, 95, 99, 95, 50, 49, 0);
      let reportn: Array<any> = [480, 230, 235];
      let description_ky: Array<any> = [String.fromCharCode(114, 111, 111, 116, 115, 95, 98, 95, 57, 55, 0), String.fromCharCode(103, 95, 49, 55, 95, 111, 102, 102, 101, 114, 0)];
      reportn.push(3);
      if ((3 ^ remindert.length) == 1 && 2 == (remindert.length ^ 3)) {
         remindert += `${description_ky.length}`;
      }
      remindert = `${reportn.length}`;
      while (5 == (description_ky.length / (Math.max(3, reportn.length)))) {
         let halfA: Map<any, any> = new Map([[String.fromCharCode(98, 95, 50, 56, 95, 101, 108, 105, 115, 116, 0), 409], [String.fromCharCode(98, 95, 56, 51, 95, 115, 109, 112, 116, 101, 104, 100, 98, 97, 114, 115, 0), 697], [String.fromCharCode(116, 105, 109, 101, 105, 110, 102, 111, 95, 101, 95, 50, 53, 0), 186]]);
         description_ky.push(remindert.length);
         halfA.set(`${halfA.size}`, 3);
         break;
      }
      let selectedT = 7807976 >= description_ky.length;
      do {
         let dragH = String.fromCharCode(99, 95, 55, 57, 95, 102, 111, 117, 114, 115, 113, 117, 97, 114, 101, 0);
         let strV = false;
         let away8: Array<any> = [850, 878, 183];
         description_ky.push(away8.length);
         dragH = `${dragH.length / (Math.max(3, 5))}`;
         strV = dragH.length < 37;
         away8 = [(String.fromCharCode(101, 0) == dragH ? (strV ? 1 : 4) : dragH.length)];
         if (selectedT) {
            break;
         }
      } while ((!reportn.includes(description_ky.length)) && selectedT);
      while (5 >= (3 % (Math.max(6, description_ky.length))) || (3 % (Math.max(5, reportn.length))) >= 1) {
         let pressurez = true;
         let inactive8: Array<any> = [String.fromCharCode(97, 115, 104, 105, 110, 103, 95, 103, 95, 55, 51, 0), String.fromCharCode(102, 111, 114, 109, 97, 116, 116, 105, 110, 103, 95, 56, 95, 52, 54, 0)];
         let strE = String.fromCharCode(116, 105, 109, 101, 115, 116, 97, 109, 112, 95, 102, 95, 55, 54, 0);
         let overlayg = false;
         let shrinkp = String.fromCharCode(97, 95, 54, 49, 95, 109, 100, 105, 97, 0);
         reportn = [remindert.length];
         pressurez = strE.length < 47 || !pressurez;
         inactive8 = [3];
         strE += `${inactive8.length}`;
         overlayg = !pressurez;
         shrinkp += `${((pressurez ? 3 : 1) * inactive8.length)}`;
         break;
      }
      let membero = String.fromCharCode(101, 95, 50, 52, 95, 100, 105, 115, 112, 108, 97, 121, 0);
      reportn = [1];
      membero = `${(membero == String.fromCharCode(88, 0) ? membero.length : membero.length)}`;
      let nalyticsF = String.fromCharCode(113, 95, 54, 55, 95, 114, 105, 110, 103, 98, 117, 102, 102, 101, 114, 0);
      let data8 = String.fromCharCode(113, 95, 57, 53, 95, 102, 114, 97, 109, 101, 115, 101, 116, 116, 101, 114, 0);
      for (let v = 0; v < 2; v++) {
         remindert += `${data8.length & 1}`;
      }
      description_di += parseFloat(`${remindert.length / 1}`);
      let handlerr = 3;
      let const_vK = 4.0;
      let calendarw: Array<any> = [465, 682];
      let typingS = 6689815 >= handlerr;
      do {
         let readS = String.fromCharCode(119, 100, 108, 116, 95, 116, 95, 49, 57, 0);
         let x_lockA = 3;
         let sportg = 2.0;
         let benefitF = true;
         handlerr %= Math.max(5, ((benefitF ? 2 : 2) >> (Math.min(Math.abs(handlerr), 1))));
         readS = `${x_lockA}`;
         x_lockA %= Math.max(3, x_lockA - readS.length);
         sportg -= parseFloat(`${parseInt(`${sportg}`)}`);
         benefitF = readS.startsWith(`${x_lockA}`);
         if (typingS) {
            break;
         }
      } while (typingS && (calendarw.length > 4));
      let sharej = String.fromCharCode(121, 99, 98, 99, 114, 95, 101, 95, 50, 0);
      sharej += `${sharej.length}`;
      while (sharej.startsWith(`${handlerr}`)) {
         let historyT: Map<any, any> = new Map([[String.fromCharCode(115, 100, 112, 95, 98, 95, 51, 0), 407], [String.fromCharCode(114, 101, 111, 115, 95, 103, 95, 50, 56, 0), 894]]);
         let clock7 = 2.0;
         let blackY: Array<any> = [72, 527];
         let favoriteR = 5.0;
         let register_ds = 4;
         handlerr <<= Math.min(5, Math.abs(register_ds));
         historyT = new Map([[`${blackY.length}`, parseInt(`${clock7}`) >> (Math.min(2, Math.abs(1)))]]);
         clock7 /= Math.max(blackY.length & historyT.size, 1);
         favoriteR /= Math.max(5, parseFloat(`${blackY.length}`));
         register_ds >>= Math.min(Math.abs(2 << (Math.min(Math.abs(parseInt(`${clock7}`)), 1))), 5);
         break;
      }
      let countrye = String.fromCharCode(115, 95, 55, 48, 95, 99, 117, 114, 114, 114, 101, 110, 116, 0);
      let sharedQ = String.fromCharCode(119, 95, 55, 48, 95, 100, 101, 108, 101, 103, 97, 116, 111, 114, 0);
      let mathc = String.fromCharCode(111, 117, 98, 108, 101, 95, 107, 95, 52, 53, 0);
      sharej += "1";
      calendarw = [sharedQ.length / (Math.max(1, parseInt(`${const_vK}`)))];
      let componentN = 7072927 >= sharedQ.length;
      do {
         sharedQ = `${countrye.length << (Math.min(Math.abs(1), 1))}`;
         if (componentN) {
            break;
         }
      } while (componentN && (sharej.startsWith(`${sharedQ.length}`)));
      terms5 += `${terms5.length | 3}`;
      emojiR = `${streaming2.length}`;
      while (singleN.endsWith(emojiR)) {
         emojiR += `${parseInt(`${description_di}`)}`;
         break;
      }
      let brightnessB = String.fromCharCode(98, 95, 57, 48, 95, 117, 110, 115, 104, 105, 102, 116, 0);
      let modelL = 0;
      let catalogq: Array<any> = [606, 696, 790];
      catalogq.push(modelL);
      for (let f = 0; f < 1; f++) {
         let smallJ = String.fromCharCode(109, 95, 56, 56, 95, 115, 110, 97, 112, 115, 104, 111, 116, 116, 101, 114, 0);
         let m_imagel: Map<any, any> = new Map([[String.fromCharCode(108, 95, 50, 55, 95, 99, 114, 111, 112, 112, 101, 100, 0), 963], [String.fromCharCode(115, 119, 114, 105, 95, 52, 95, 52, 51, 0), 865], [String.fromCharCode(99, 104, 101, 99, 107, 115, 95, 108, 95, 55, 49, 0), 77]]);
         let ewarded4: Map<any, any> = new Map([[String.fromCharCode(116, 95, 49, 54, 95, 98, 102, 114, 97, 99, 116, 105, 111, 110, 0), 903], [String.fromCharCode(108, 95, 55, 51, 95, 115, 116, 97, 109, 112, 0), 652], [String.fromCharCode(100, 95, 53, 48, 95, 99, 105, 116, 121, 0), 114]]);
         catalogq = [2 % (Math.max(4, brightnessB.length))];
         smallJ = `${ewarded4.size}`;
         m_imagel.set(`${ewarded4.size}`, ewarded4.size);
      }
      if (catalogq.includes(modelL)) {
         let roomM = 0.0;
         let temperatureI: Array<any> = [45, 866, 508];
         let placeholder8 = 5.0;
         let entryD = true;
         catalogq = [1 / (Math.max(7, temperatureI.length))];
         roomM /= Math.max(4, parseFloat(`${1}`));
         temperatureI.push(((entryD ? 1 : 3) % (Math.max(parseInt(`${placeholder8}`), 10))));
         placeholder8 -= parseInt(`${placeholder8}`) & 3;
         entryD = (placeholder8 - roomM) < 74.15;
      }
      let searchR = modelL <= 6749401;
      do {
         modelL %= Math.max(catalogq.length % 1, 5);
         if (searchR) {
            break;
         }
      } while ((5 <= (modelL + catalogq.length) || 2 <= (modelL + 5)) && searchR);
      modelL &= modelL;
      while ((brightnessB.length & 3) <= 5) {
         let k_titleH = 5.0;
         let statisticsg: Array<any> = [String.fromCharCode(97, 108, 116, 101, 114, 95, 111, 95, 50, 48, 0), String.fromCharCode(97, 95, 55, 51, 95, 105, 109, 103, 117, 116, 105, 108, 115, 0), String.fromCharCode(114, 101, 99, 111, 110, 105, 110, 116, 114, 97, 120, 95, 102, 95, 49, 57, 0)];
         let whistleD: Map<any, any> = new Map([[String.fromCharCode(104, 95, 53, 54, 95, 117, 99, 104, 97, 114, 0), String.fromCharCode(98, 108, 111, 99, 107, 115, 95, 112, 95, 52, 50, 0)], [String.fromCharCode(114, 95, 57, 51, 95, 100, 101, 116, 101, 114, 109, 105, 110, 105, 115, 116, 105, 99, 0), String.fromCharCode(99, 95, 51, 50, 95, 100, 105, 109, 101, 110, 115, 105, 111, 110, 0)]]);
         let serviceL = 5.0;
         let expired3 = true;
         catalogq.push(parseInt(`${serviceL}`));
         k_titleH += (whistleD.size - (expired3 ? 2 : 2));
         statisticsg = [(whistleD.size | (expired3 ? 2 : 4))];
         serviceL /= Math.max(4, whistleD.size);
         break;
      }
      let settingsJ = String.fromCharCode(100, 101, 99, 105, 109, 97, 108, 95, 103, 95, 55, 52, 0);
      settingsJ = `${modelL << (Math.min(4, Math.abs(3)))}`;
      let philippinesU = String.fromCharCode(119, 95, 49, 50, 95, 117, 110, 104, 105, 100, 101, 0);
      let time_3J: Map<any, any> = new Map([[String.fromCharCode(102, 95, 53, 57, 95, 97, 116, 116, 97, 99, 104, 109, 101, 110, 116, 0), 539], [String.fromCharCode(111, 95, 52, 53, 95, 99, 98, 117, 102, 0), 376]]);
      brightnessB += `${settingsJ.length}`;
      philippinesU += `${philippinesU.length % (Math.max(1, 6))}`;
      time_3J = new Map([[`${time_3J.size}`, 3]]);
      terms5 = `${parseInt(`${description_di}`)}`;
      let containerw = false;
      let zhengpian0 = 0;
      let minix = String.fromCharCode(122, 95, 55, 56, 95, 99, 111, 110, 102, 105, 103, 117, 114, 101, 100, 0);
      minix += `${((containerw ? 2 : 3))}`;
      let privileges = String.fromCharCode(114, 116, 109, 112, 101, 95, 57, 95, 50, 51, 0);
      let viewsB = String.fromCharCode(99, 117, 100, 97, 95, 117, 95, 57, 57, 0);
      let sansB = String.fromCharCode(103, 95, 56, 57, 95, 102, 108, 97, 116, 116, 101, 110, 101, 100, 0);
      privileges = `${viewsB.length}`;
      viewsB += `${sansB.length + 3}`;
      sansB += "3";
      let settingR = String.fromCharCode(121, 95, 57, 56, 95, 105, 115, 101, 120, 112, 108, 97, 105, 110, 0);
      let dialog4 = String.fromCharCode(114, 95, 51, 95, 116, 114, 97, 105, 116, 115, 0);
      containerw = minix == settingR;
      settingR = `${dialog4.length % 2}`;
      dialog4 = "3";
      let downloadedk = String.fromCharCode(119, 95, 56, 51, 95, 116, 97, 99, 107, 0);
      while (!minix.endsWith(`${privileges.length}`)) {
         let matchesq = 2.0;
         let groupG = String.fromCharCode(116, 95, 50, 54, 95, 100, 97, 115, 104, 101, 115, 0);
         let more5 = String.fromCharCode(100, 95, 49, 54, 95, 115, 101, 97, 108, 97, 110, 116, 0);
         let actionZ = 5;
         minix += `${minix.length >> (Math.min(Math.abs(1), 5))}`;
         matchesq -= 1;
         groupG += `${actionZ}`;
         more5 += `${groupG.length}`;
         actionZ *= actionZ;
         break;
      }
      if (3 <= privileges.length) {
         privileges += `${((containerw ? 2 : 3) % 3)}`;
      }
      containerw = zhengpian0 >= downloadedk.length;
      let catalogu = minix == String.fromCharCode(111, 49, 110, 113, 0);
      do {
         minix = `${(minix == String.fromCharCode(107, 0) ? (containerw ? 3 : 2) : minix.length)}`;
         if (catalogu) {
            break;
         }
      } while ((minix.startsWith(downloadedk)) && catalogu);
      suggestionj &= 1;
      clockY -= benefitB.length;
      singleN = `${1 / (Math.max(9, parseInt(`${description_di}`)))}`;
      let malaysiaA: Map<any, any> = new Map([[String.fromCharCode(117, 110, 109, 97, 115, 107, 95, 101, 95, 53, 56, 0), String.fromCharCode(113, 95, 49, 50, 95, 107, 97, 116, 0)], [String.fromCharCode(103, 95, 49, 53, 95, 104, 101, 97, 112, 0), String.fromCharCode(97, 95, 52, 55, 95, 109, 97, 108, 108, 111, 99, 122, 0)]]);
      let sliderL = true;
      for (let k = 0; k < 3; k++) {
         malaysiaA.set(`${sliderL}`, (3 ^ (sliderL ? 2 : 5)));
      }
      let nextt = String.fromCharCode(103, 95, 56, 56, 95, 114, 101, 112, 108, 105, 99, 97, 116, 101, 100, 0);
      let floatert: Array<any> = [768, 760];
      let tempg = String.fromCharCode(97, 95, 57, 53, 95, 101, 110, 100, 101, 100, 0);
      let linkw = String.fromCharCode(99, 110, 116, 95, 49, 95, 53, 49, 0);
      sliderL = floatert.length < 87 || tempg == String.fromCharCode(84, 0);
      floatert = [(String.fromCharCode(74, 0) == linkw ? linkw.length : linkw.length)];
      tempg = `${1 ^ linkw.length}`;
      malaysiaA.set(`${sliderL}`, 2 % (Math.max(5, nextt.length)));
      for (let i = 0; i < 3; i++) {
         let commone = String.fromCharCode(99, 116, 105, 109, 101, 115, 116, 97, 109, 112, 95, 48, 95, 50, 52, 0);
         let formo = String.fromCharCode(121, 95, 52, 95, 115, 117, 110, 114, 105, 115, 101, 115, 101, 116, 0);
         let changer = String.fromCharCode(119, 95, 57, 95, 117, 110, 105, 116, 0);
         sliderL = commone.endsWith(`${sliderL}`);
         commone += `${formo.length - changer.length}`;
         formo = `${changer.length | formo.length}`;
      }
      let blacklist3 = nextt.length <= 9035667;
      do {
         let crossx: Array<any> = [530, 699, 213];
         let common2 = true;
         let loadingT = true;
         let membershipT: Array<any> = [514, 66];
         let modityG = String.fromCharCode(107, 95, 57, 49, 95, 116, 99, 109, 105, 0);
         nextt = `${modityG.length}`;
         crossx.push((membershipT.length | (common2 ? 1 : 5)));
         common2 = membershipT.length >= crossx.length;
         loadingT = (20 < ((!common2 ? 20 : crossx.length) ^ crossx.length));
         modityG = "1";
         if (blacklist3) {
            break;
         }
      } while (((malaysiaA.size ^ nextt.length) >= 2) && blacklist3);
      singleN = `${streaming2.length}`;
      while (emojiR.endsWith(streaming2)) {
         streaming2 = `${suggestionj}`;
         break;
      }
      for (let c = 0; c < 3; c++) {
         backwardA ^= backwardA * 2;
      }
      let splash0 = String.fromCharCode(98, 110, 97, 115, 56, 57, 52, 0) == singleN;
      do {
         singleN = `${benefitB.length | emojiR.length}`;
         if (splash0) {
            break;
         }
      } while (splash0 && (1 == (singleN.length % 5) || 5 == (singleN.length % (Math.max(1, verticalC)))));
      for (let e = 0; e < 2; e++) {
         benefitB = "3";
      }
      let loadingb = 6490020 >= suggestionj;
      do {
         suggestionj >>= Math.min(Math.abs(parseInt(`${description_di}`)), 2);
         if (loadingb) {
            break;
         }
      } while (((suggestionj + benefitB.length) >= 4 || 4 >= (benefitB.length + 4)) && loadingb);
      while (terms5.includes(streaming2)) {
         terms5 += `${suggestionj % (Math.max(emojiR.length, 6))}`;
         break;
      }
      emojiR = `${streaming2.length}`;
      let sheetW = false;
      let inactivef = true;
      for (let l = 0; l < 2; l++) {
         sheetW = (sheetW ? !inactivef : sheetW);
      }
      while (sheetW) {
         let placeholderG = String.fromCharCode(120, 95, 53, 95, 101, 118, 105, 99, 116, 105, 111, 110, 0);
         sheetW = inactivef;
         placeholderG = "2";
         break;
      }
      inactivef = (!sheetW ? !inactivef : sheetW);
      let style2 = 4;
      sheetW = !inactivef;
      style2 &= 2 ^ style2;
      for (let f = 0; f < 2; f++) {
         sheetW = inactivef;
      }
      let kickx = inactivef ? !inactivef : inactivef;
      do {
         inactivef = !sheetW;
         if (kickx) {
            break;
         }
      } while ((!inactivef) && kickx);
      benefitB = `${emojiR.length}`;
      verticalC >>= Math.min(Math.abs(terms5.length - 3), 3);
      singleN = `${benefitB.length}`;
      terms5 = `${suggestionj >> (Math.min(emojiR.length, 5))}`;
      backwardA += verticalC / (Math.max(parseInt(`${clockY}`), 9));
      while (4 >= terms5.length) {
         let controlP = String.fromCharCode(101, 95, 52, 55, 95, 116, 98, 117, 102, 0);
         let infoe = 5;
         let constantsvH = 5.0;
         let telegramz: Array<any> = [845, 930, 639];
         let target6: Array<any> = [681, 115, 152];
         let header6 = 2;
         let diceW: Map<any, any> = new Map([[String.fromCharCode(109, 117, 108, 116, 105, 99, 97, 115, 116, 95, 115, 95, 52, 55, 0), false], [String.fromCharCode(100, 95, 54, 53, 95, 114, 101, 115, 111, 117, 114, 99, 101, 0), true], [String.fromCharCode(116, 114, 97, 110, 115, 105, 116, 95, 101, 95, 52, 49, 0), true]]);
         constantsvH -= parseFloat(`${diceW.size * parseInt(`${constantsvH}`)}`);
         target6 = [target6.length];
         header6 /= Math.max(2, header6 | 1);
         diceW = new Map([[`${target6.length}`, target6.length >> (Math.min(1, Math.abs(header6)))]]);
         for (let b = 0; b < 1; b++) {
            let animationE = 4.0;
            controlP = `${controlP.length - parseInt(`${constantsvH}`)}`;
            animationE += 3;
         }
         let saver = telegramz.length <= 9023747;
         do {
            telegramz.push(parseInt(`${constantsvH}`));
            if (saver) {
               break;
            }
         } while ((!telegramz.includes(infoe)) && saver);
         let gemfileI: Array<any> = [265, 300, 306];
         let screeny: Array<any> = [594, 377];
         controlP += `${3 * parseInt(`${constantsvH}`)}`;
         while (gemfileI.length >= 3) {
            controlP += `${(controlP == String.fromCharCode(73, 0) ? infoe : controlP.length)}`;
            break;
         }
         let sinab = 5.0;
         let photoS = String.fromCharCode(120, 95, 50, 48, 95, 97, 114, 116, 105, 102, 97, 99, 116, 0);
         screeny = [photoS.length / 3];
         sinab *= parseInt(`${sinab}`);
         photoS += `${2 + parseInt(`${sinab}`)}`;
         if (3.29 == (constantsvH + 3.21) && (screeny.length << (Math.min(Math.abs(1), 3))) == 2) {
            let album2 = 1;
            let acceptedu = 0.0;
            let friendsP: Array<any> = [788, 505];
            screeny.push(infoe);
            album2 <<= Math.min(Math.abs(3), 5);
            acceptedu /= Math.max(2, 3);
            friendsP.push(friendsP.length);
         }
         if (3 <= screeny.length) {
            screeny = [parseInt(`${constantsvH}`) * gemfileI.length];
         }
         let plashe = 4;
         let report9 = 4;
         telegramz = [plashe ^ parseInt(`${constantsvH}`)];
         report9 <<= Math.min(3, Math.abs(3 % (Math.max(4, report9))));
         let expiredl = String.fromCharCode(112, 95, 55, 55, 95, 109, 97, 114, 115, 104, 97, 108, 0);
         let downloaded5 = 5.0;
         let project6 = 1;
         constantsvH += parseFloat(`${1}`);
         expiredl += "2";
         downloaded5 /= Math.max(parseFloat(`${project6}`), 5);
         project6 -= project6;
         terms5 = "1";
         break;
      }
      if (terms5.includes(streaming2)) {
         let unreadY = false;
         let castq: Map<any, any> = new Map([[String.fromCharCode(119, 95, 57, 55, 95, 97, 99, 102, 105, 108, 116, 101, 114, 0), 770], [String.fromCharCode(114, 101, 99, 111, 109, 98, 105, 110, 101, 95, 118, 95, 52, 0), 301]]);
         let saveL = unreadY ? !unreadY : unreadY;
         do {
            unreadY = castq.size <= 7 || !unreadY;
            if (saveL) {
               break;
            }
         } while (saveL && (!unreadY));
         castq.set(`${unreadY}`, castq.size / 3);
         castq = new Map([[`${castq.size}`, castq.size]]);
         let q_count7 = unreadY ? !unreadY : unreadY;
         do {
            let alertd = false;
            let catagoryJ = 2;
            let commonK: Map<any, any> = new Map([[String.fromCharCode(119, 95, 57, 51, 95, 100, 99, 115, 116, 114, 0), 327], [String.fromCharCode(109, 117, 116, 101, 120, 95, 121, 95, 51, 48, 0), 484]]);
            let playlistY = String.fromCharCode(115, 101, 115, 115, 105, 111, 110, 105, 100, 95, 120, 95, 56, 56, 0);
            let guideD = String.fromCharCode(116, 114, 97, 118, 101, 114, 115, 101, 95, 107, 95, 52, 50, 0);
            unreadY = playlistY.length == 66;
            alertd = !alertd;
            catagoryJ %= Math.max(2, guideD.length);
            commonK = new Map([[`${commonK.size}`, (commonK.size & (alertd ? 3 : 3))]]);
            playlistY += `${(String.fromCharCode(68, 0) == guideD ? guideD.length : commonK.size)}`;
            if (q_count7) {
               break;
            }
         } while (q_count7 && (1 < castq.size));
         for (let d = 0; d < 1; d++) {
            castq = new Map([[`${castq.size}`, castq.size / 2]]);
         }
         for (let d = 0; d < 3; d++) {
            castq.set(`${unreadY}`, ((unreadY ? 1 : 5) << (Math.min(Math.abs(castq.size), 3))));
         }
         streaming2 += `${((unreadY ? 3 : 2) >> (Math.min(Math.abs(3), 1)))}`;
      }
      shirty |= singleN.length + shirty;
      if ((clockY - shirty) > 3.71) {
         shirty *= parseInt(`${clockY}`) * 2;
      }
      let miniJ = 7852149 >= suggestionj;
      do {
         suggestionj *= streaming2.length;
         if (miniJ) {
            break;
         }
      } while (((verticalC << (Math.min(Math.abs(suggestionj), 2))) > 2) && miniJ);
      verticalC %= Math.max(3, emojiR.length);
      for (let a = 0; a < 1; a++) {
         terms5 = `${singleN.length ^ 1}`;
      }
      let recommendationn: Array<any> = [441, 173];
      let brightness8 = String.fromCharCode(103, 95, 55, 56, 95, 114, 116, 112, 100, 101, 99, 0);
      let register_yyP = String.fromCharCode(114, 101, 97, 116, 116, 97, 99, 104, 95, 115, 95, 50, 50, 0);
      for (let s = 0; s < 1; s++) {
         let placeholder2: Array<any> = [554, 715, 336];
         recommendationn.push(register_yyP.length);
         placeholder2 = [2];
      }
      let detailsi = false;
      let playlist8 = false;
      recommendationn.push(3);
      detailsi = playlist8;
      let auto_48v = 2;
      let sharede = 1;
      brightness8 += `${register_yyP.length}`;
      auto_48v |= 2 | sharede;
      sharede %= Math.max(sharede / (Math.max(auto_48v, 4)), 4);
      let firebasex = String.fromCharCode(113, 95, 54, 54, 95, 102, 111, 114, 119, 97, 114, 100, 101, 114, 0);
      let hooky = String.fromCharCode(112, 95, 54, 50, 95, 99, 109, 111, 118, 101, 0);
      recommendationn.push(1);
      register_yyP += `${register_yyP.length}`;
      if ((recommendationn.length ^ 4) == 1 || 3 == (4 ^ firebasex.length)) {
         let fastforwards = 5.0;
         let confirmation5 = 1.0;
         firebasex = "1";
         fastforwards *= 2 & parseInt(`${fastforwards}`);
         confirmation5 /= Math.max(2, parseFloat(`${3}`));
      }
      let default_oht = 5324727 <= firebasex.length;
      do {
         firebasex += `${hooky.length - recommendationn.length}`;
         if (default_oht) {
            break;
         }
      } while (default_oht && (hooky != String.fromCharCode(111, 0)));
      for (let v = 0; v < 2; v++) {
         register_yyP = `${(hooky == String.fromCharCode(90, 0) ? hooky.length : register_yyP.length)}`;
      }
      singleN += `${verticalC % 2}`;
      if ((description_di + 5.4) > 5.19) {
         shirty -= suggestionj;
      }
      let description_uu = 0;
      if (description_uu > 2) {
         description_uu += description_uu;
      }
      while ((description_uu + description_uu) <= 3 || (description_uu + 3) <= 2) {
         let rewindE = 5.0;
         let auto_1s8 = 4.0;
         let referrer5 = 1;
         let videor = true;
         description_uu >>= Math.min(Math.abs(referrer5 * 2), 2);
         rewindE += ((videor ? 2 : 1) % (Math.max(parseInt(`${auto_1s8}`), 10)));
         auto_1s8 *= parseInt(`${rewindE}`) ^ 2;
         referrer5 += 1 ^ parseInt(`${auto_1s8}`);
         videor = 54.15 > auto_1s8 || videor;
         break;
      }
      if (3 <= (description_uu + 4) && (description_uu + 4) <= 3) {
         let moviesC = 4.0;
         let greyR: Array<any> = [662, 718, 459];
         let fillm = 4;
         let header5 = String.fromCharCode(99, 95, 56, 55, 95, 99, 108, 105, 99, 107, 115, 0);
         let playlist4 = false;
         description_uu /= Math.max(1, (header5 == String.fromCharCode(109, 0) ? (playlist4 ? 2 : 2) : header5.length));
         moviesC /= Math.max(parseFloat(`${greyR.length}`), 2);
         greyR.push(1);
         fillm |= parseInt(`${moviesC}`);
         playlist4 = (fillm % (Math.max(greyR.length, 4))) <= 94;
      }
      verticalC /= Math.max(suggestionj, 1);
      while (2 >= benefitB.length) {
         let floaterp = true;
         if (floaterp) {
            floaterp = (floaterp ? !floaterp : !floaterp);
         }
         let progressr = String.fromCharCode(108, 95, 55, 49, 95, 103, 97, 109, 109, 97, 118, 97, 108, 0);
         floaterp = progressr.startsWith(`${floaterp}`);
         let e_imagen = false;
         floaterp = !e_imagen && floaterp;
         benefitB = `${parseInt(`${clockY}`) >> (Math.min(Math.abs(3), 1))}`;
         break;
      }
   },
}: XFillButton) => {
   const { colors, textVariants, spacing } = useTheme();
   const vodReducer: QQCenterChart = useAppSelector(
      ({ vodReducer }: PSmall) => vodReducer
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
   const [results, setResults] = useState<Array<RBEmojiEwarded>>([]);
   const [isRefreshing, setIsRefreshing] = useState(false);
   const carouselRef = useRef<any>();

   const [width, setWidth] = useState(Dimensions.get("window").width);
   const [imgRatio, setImgRatio] = useState(1.5);

   const userState = useSelector<HDTGesturesList>("userReducer");
   const isVip = KWConstants.isVip(userState.user);

   useEffect(() => {
      setWidth(Number(Dimensions.get("window").width));

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
      let clockv = String.fromCharCode(97, 112, 112, 108, 101, 95, 109, 95, 55, 56, 0);
      let faviconY = String.fromCharCode(119, 95, 57, 57, 95, 99, 111, 100, 105, 110, 103, 116, 121, 112, 101, 0);
      let controld = String.fromCharCode(114, 95, 53, 56, 95, 115, 116, 97, 107, 101, 100, 0);
      let crossg: Map<any, any> = new Map([[String.fromCharCode(114, 95, 56, 50, 95, 115, 101, 109, 97, 110, 116, 105, 99, 97, 108, 108, 121, 0), 112], [String.fromCharCode(99, 116, 120, 105, 100, 120, 105, 110, 99, 95, 111, 95, 55, 49, 0), 378], [String.fromCharCode(114, 102, 112, 115, 95, 114, 95, 50, 49, 0), 558]]);
      let indexM = true;
      let changeH: Array<any> = [287, 723, 680];
      let yinge = String.fromCharCode(117, 116, 116, 111, 110, 95, 111, 95, 51, 48, 0);
      let emptyX = String.fromCharCode(111, 118, 101, 114, 115, 104, 111, 111, 116, 95, 108, 95, 50, 50, 0);
      let subsy: Array<any> = [905, 293];
      let videoQ = 4.0;
      let twitterc = false;
      let guideo = String.fromCharCode(100, 101, 99, 111, 100, 101, 109, 118, 95, 57, 95, 51, 55, 0);
      controld += `${(parseInt(`${videoQ}`) >> (Math.min(1, Math.abs((indexM ? 3 : 1)))))}`;
      while ((2 - crossg.size) > 1) {
         crossg.set(clockv, clockv.length);
         break;
      }
      faviconY = `${(String.fromCharCode(111, 0) == emptyX ? crossg.size : emptyX.length)}`;
      if (controld.length > crossg.size) {
         controld = `${parseInt(`${videoQ}`) ^ faviconY.length}`;
      }

      setIsRefreshing(true);

      faviconY = `${subsy.length}`;
      for (let h = 0; h < 2; h++) {
         crossg.set(clockv, 2 >> (Math.min(4, clockv.length)));
      }
      let streamingp: Map<any, any> = new Map([[String.fromCharCode(110, 95, 50, 51, 95, 105, 108, 111, 103, 0), String.fromCharCode(119, 95, 55, 48, 95, 121, 98, 121, 114, 0)], [String.fromCharCode(119, 95, 57, 50, 95, 99, 116, 120, 112, 0), String.fromCharCode(104, 95, 55, 51, 95, 118, 101, 114, 105, 102, 121, 105, 110, 103, 0)]]);
      let actionsa = String.fromCharCode(109, 95, 51, 95, 116, 114, 97, 110, 115, 102, 111, 114, 109, 0);
      let formT: Array<any> = [227, 969];
      let turnp = 4;
      formT = [2];
      turnp ^= 3;
      formT.push(streamingp.size / 2);
      if (5 == (actionsa.length + streamingp.size)) {
         actionsa = `${streamingp.size << (Math.min(Math.abs(2), 3))}`;
      }
      while (5 > (streamingp.size >> (Math.min(actionsa.length, 3))) && (actionsa.length >> (Math.min(3, Math.abs(streamingp.size)))) > 5) {
         let modityT = 5.0;
         actionsa = `${parseInt(`${modityT}`) + formT.length}`;
         break;
      }
      streamingp.set(`${formT.length}`, formT.length % 3);
      while (2 <= (streamingp.size * 3) || (actionsa.length * 3) <= 4) {
         streamingp.set(`${actionsa}`, streamingp.size * actionsa.length);
         break;
      }
      let searchbarO = String.fromCharCode(111, 116, 111, 98, 95, 104, 95, 57, 52, 0);
      for (let h = 0; h < 2; h++) {
         streamingp = new Map([[`${streamingp.size}`, 1]]);
      }
      let bodanO = 5283193 <= actionsa.length;
      do {
         actionsa += `${actionsa.length}`;
         if (bodanO) {
            break;
         }
      } while ((5 == (2 * streamingp.size) || (actionsa.length * streamingp.size) == 2) && bodanO);
      faviconY = `${faviconY.length}`;
      let nexth = changeH.length <= 9108777;
      do {
         changeH.push(2 | yinge.length);
         if (nexth) {
            break;
         }
      } while (nexth && ((changeH.length - crossg.size) <= 5));
      await onRefresh(0, true);

      clockv = `${((indexM ? 2 : 1) | yinge.length)}`;
      subsy = [changeH.length];
      let episodesU = 9278628 <= subsy.length;
      do {
         subsy = [3];
         if (episodesU) {
            break;
         }
      } while ((yinge.includes(`${subsy.length}`)) && episodesU);
      while (videoQ < parseFloat(`${faviconY.length}`)) {
         faviconY += `${changeH.length + 1}`;
         break;
      }

      setTimeout(() => {

         while (controld.length < 4) {
            let macaup = 0.0;
            let stringp = String.fromCharCode(101, 110, 117, 109, 95, 48, 95, 56, 57, 0);
            let guidey = String.fromCharCode(122, 95, 53, 53, 95, 100, 105, 115, 109, 105, 115, 115, 101, 100, 0);
            let episode7 = 5;
            if (5 <= (parseInt(`${macaup}`) * 2) || 5 <= (stringp.length << (Math.min(Math.abs(2), 1)))) {
               stringp += `${episode7}`;
            }
            let pointt = 3.0;
            let clockR = 0.0;
            episode7 -= parseInt(`${macaup}`) << (Math.min(stringp.length, 4));
            clockR -= parseFloat(`${parseInt(`${clockR}`) * 3}`);
            let groupU = String.fromCharCode(117, 95, 51, 49, 95, 108, 111, 99, 105, 0);
            let storeA = 0;
            let ballO = String.fromCharCode(112, 111, 105, 115, 111, 110, 95, 115, 95, 51, 0);
            pointt += parseFloat(`${1}`);
            groupU += `${2 | storeA}`;
            storeA %= Math.max(ballO.length >> (Math.min(Math.abs(2), 2)), 2);
            ballO = `${2 / (Math.max(4, ballO.length))}`;
            stringp = `${stringp.length}`;
            while (macaup > 3.87) {
               stringp = "1";
               break;
            }
            let megaphone5 = 0.0;
            let borderlessP: Array<any> = [269, 866];
            let dragB = 1.0;
            stringp += `${parseInt(`${pointt}`) % 1}`;
            megaphone5 -= parseFloat(`${2}`);
            borderlessP = [borderlessP.length + 2];
            dragB *= parseInt(`${megaphone5}`) >> (Math.min(3, Math.abs(1)));
            episode7 >>= Math.min(1, Math.abs(guidey.length - 3));
            let z_titleP = episode7 <= 8938751;
            do {
               let analytics1 = true;
               let backwardQ = String.fromCharCode(116, 95, 51, 48, 95, 119, 101, 105, 103, 104, 116, 101, 100, 0);
               let completei = String.fromCharCode(100, 105, 115, 109, 105, 115, 115, 97, 108, 95, 51, 95, 55, 49, 0);
               let privilegei = 5.0;
               let malaysiaD: Map<any, any> = new Map([[String.fromCharCode(121, 95, 57, 56, 95, 98, 111, 100, 121, 115, 105, 100, 0), 195], [String.fromCharCode(115, 95, 54, 57, 95, 99, 111, 100, 105, 110, 103, 116, 121, 112, 101, 0), 919], [String.fromCharCode(97, 99, 99, 101, 115, 115, 105, 98, 105, 108, 105, 116, 121, 95, 100, 95, 53, 55, 0), 546]]);
               episode7 >>= Math.min(3, parseInt(`${Math.abs(((analytics1 ? 5 : 2) / (Math.max(3, guidey.length))))}`));
               analytics1 = malaysiaD.size == backwardQ.length;
               backwardQ += `${completei.length * 1}`;
               completei = "1";
               privilegei *= parseInt(`${privilegei}`);
               malaysiaD = new Map([[`${malaysiaD.size}`, malaysiaD.size << (Math.min(3, Math.abs(parseInt(`${privilegei}`))))]]);
               if (z_titleP) {
                  break;
               }
            } while (z_titleP && (episode7 < guidey.length));
            let temperaturey = 1.0;
            let groupo: Map<any, any> = new Map([[String.fromCharCode(116, 95, 54, 51, 95, 101, 114, 97, 115, 101, 0), true], [String.fromCharCode(101, 95, 51, 53, 95, 118, 105, 122, 105, 101, 114, 0), false]]);
            let middlewarem: Map<any, any> = new Map([[String.fromCharCode(98, 108, 97, 99, 107, 115, 95, 107, 95, 49, 51, 0), 552], [String.fromCharCode(114, 101, 112, 114, 101, 115, 101, 110, 116, 97, 98, 108, 101, 95, 57, 95, 49, 54, 0), 132], [String.fromCharCode(112, 95, 54, 95, 116, 101, 115, 116, 105, 109, 103, 97, 114, 105, 0), 630]]);
            episode7 <<= Math.min(3, Math.abs(parseInt(`${pointt}`)));
            temperaturey /= Math.max(parseFloat(`${parseInt(`${temperaturey}`) << (Math.min(Math.abs(middlewarem.size), 1))}`), 3);
            groupo.set(`${temperaturey}`, groupo.size << (Math.min(4, Math.abs(parseInt(`${temperaturey}`)))));
            middlewarem = new Map([[`${middlewarem.size}`, groupo.size % 3]]);
            while (5 > (stringp.length & 2)) {
               let otherR = 3;
               let description_q4O = String.fromCharCode(110, 101, 97, 114, 98, 121, 95, 51, 95, 56, 54, 0);
               let blackJ: Array<any> = [237, 502];
               let fcopy_mmF: Map<any, any> = new Map([[String.fromCharCode(114, 118, 118, 108, 99, 95, 107, 95, 54, 48, 0), 682], [String.fromCharCode(100, 101, 99, 111, 100, 101, 102, 114, 97, 109, 101, 95, 104, 95, 51, 57, 0), 865], [String.fromCharCode(97, 95, 49, 51, 95, 110, 97, 116, 105, 118, 101, 0), 354]]);
               let twitterL = 1.0;
               stringp = "2";
               otherR %= Math.max(4, description_q4O.length | 2);
               description_q4O = `${parseInt(`${twitterL}`) * 2}`;
               blackJ.push(otherR);
               fcopy_mmF = new Map([[`${twitterL}`, 2 - description_q4O.length]]);
               break;
            }
            stringp += `${stringp.length}`;
            controld = "1";
            break;
         }
         let gmailj = 6358323 <= changeH.length;
         do {
            changeH.push(subsy.length);
            if (gmailj) {
               break;
            }
         } while ((5 >= (3 << (Math.min(3, changeH.length)))) && gmailj);
         let googlea = String.fromCharCode(99, 97, 108, 99, 117, 108, 97, 116, 105, 110, 103, 95, 52, 95, 51, 52, 0);
         let headerr: Map<any, any> = new Map([[String.fromCharCode(115, 116, 111, 114, 105, 110, 103, 95, 48, 95, 56, 57, 0), 69], [String.fromCharCode(99, 111, 109, 112, 108, 105, 97, 110, 116, 95, 117, 95, 57, 51, 0), 131], [String.fromCharCode(101, 95, 53, 95, 98, 97, 116, 99, 104, 0), 581]]);
         if (googlea.includes(`${headerr.size}`)) {
            headerr = new Map([[`${headerr.size}`, headerr.size]]);
         }
         while ((5 ^ headerr.size) > 5 || (5 ^ googlea.length) > 1) {
            headerr.set(googlea, 2);
            break;
         }
         let filled0: Array<any> = [21, 762, 895];
         let f_playern: Array<any> = [String.fromCharCode(120, 95, 53, 55, 95, 104, 111, 108, 100, 101, 114, 115, 0), String.fromCharCode(105, 110, 116, 101, 114, 99, 101, 112, 116, 111, 114, 95, 101, 95, 55, 48, 0), String.fromCharCode(117, 105, 100, 115, 95, 51, 95, 52, 49, 0)];
         headerr.set(googlea, headerr.size);
         while (!Array.from(headerr.values()).includes(f_playern.length)) {
            f_playern = [googlea.length];
            break;
         }
         googlea += "1";
         clockv = `${headerr.size}`;
         videoQ /= Math.max(2, parseFloat(`${yinge.length}`));
         setActiveIndex(0);

         let leftI = true;
         let malaysian: Map<any, any> = new Map([[String.fromCharCode(121, 95, 51, 57, 95, 101, 100, 105, 116, 97, 98, 108, 101, 0), 540], [String.fromCharCode(114, 95, 55, 56, 95, 102, 114, 97, 109, 101, 115, 101, 116, 116, 101, 114, 0), 498], [String.fromCharCode(100, 101, 99, 108, 105, 110, 101, 95, 53, 95, 54, 48, 0), 346]]);
         let o_centeri: Map<any, any> = new Map([[String.fromCharCode(105, 115, 110, 97, 110, 95, 49, 95, 56, 50, 0), false], [String.fromCharCode(101, 95, 51, 51, 95, 115, 105, 116, 101, 0), false]]);
         let tickedO: Array<any> = [726, 565, 588];
         while (malaysian.size > 1) {
            malaysian.set(`${leftI}`, malaysian.size);
            break;
         }
         while (!leftI || 5 == (o_centeri.size / 2)) {
            let plash7: Array<any> = [685, 888, 99];
            leftI = (((leftI ? malaysian.size : 93) % (Math.max(malaysian.size, 6))) >= 78);
            plash7 = [plash7.length + plash7.length];
            break;
         }
         leftI = 22 >= o_centeri.size && 22 >= tickedO.length;
         for (let m = 0; m < 2; m++) {
            let guided = 4.0;
            leftI = (tickedO.length * malaysian.size) < 92;
            guided *= parseFloat(`${2 - parseInt(`${guided}`)}`);
         }
         let interstitialm = 0.0;
         let mutedi = String.fromCharCode(118, 108, 99, 115, 95, 99, 95, 50, 49, 0);
         let thailandG = String.fromCharCode(99, 111, 102, 102, 105, 110, 95, 53, 95, 57, 50, 0);
         malaysian = new Map([[`${tickedO.length}`, parseInt(`${interstitialm}`) | 2]]);
         mutedi = `${thailandG.length << (Math.min(Math.abs(1), 2))}`;
         thailandG += `${thailandG.length & 2}`;
         for (let l = 0; l < 2; l++) {
            tickedO = [o_centeri.size];
         }
         if ((malaysian.size / (Math.max(2, 4))) >= 1) {
            let untick_ = 0;
            let o_positionW = String.fromCharCode(109, 95, 56, 48, 95, 100, 99, 111, 110, 108, 121, 0);
            let assistf = String.fromCharCode(105, 115, 116, 114, 101, 97, 109, 95, 112, 95, 50, 48, 0);
            let formo = String.fromCharCode(98, 95, 52, 50, 95, 102, 105, 110, 0);
            leftI = malaysian.size > 72 || 72 > o_centeri.size;
            untick_ %= Math.max(formo.length, 4);
            o_positionW += `${3 - assistf.length}`;
            assistf = `${untick_}`;
            formo += `${assistf.length * 1}`;
         }
         changeH.push(faviconY.length % 2);
         clockv = `${subsy.length * 3}`;
         faviconY = "2";
         yinge += `${subsy.length ^ crossg.size}`;
         if (carouselRef) {

            yinge += "1";
            while ((3 / (Math.max(1, clockv.length))) < 3) {
               clockv = `${1 - yinge.length}`;
               break;
            }
            while (changeH.length > 4) {
               changeH.push(((twitterc ? 4 : 3) | parseInt(`${videoQ}`)));
               break;
            }
            while (subsy.length < 1) {
               let textR: Array<any> = [282, 338, 508];
               let downloadU: Map<any, any> = new Map([[String.fromCharCode(110, 95, 52, 48, 95, 97, 99, 116, 117, 97, 108, 105, 122, 97, 116, 105, 111, 110, 0), 844], [String.fromCharCode(101, 120, 116, 101, 110, 100, 95, 50, 95, 55, 54, 0), 84]]);
               let specI = String.fromCharCode(111, 95, 52, 49, 95, 112, 105, 101, 99, 101, 119, 105, 115, 101, 0);
               let back0 = String.fromCharCode(122, 95, 55, 52, 95, 103, 122, 105, 112, 112, 101, 100, 0);
               if ((back0.length | 5) >= 2 && (5 | back0.length) >= 3) {
                  downloadU = new Map([[`${textR.length}`, 2 * textR.length]]);
               }
               if (textR.length == 5) {
                  let moren = String.fromCharCode(98, 105, 116, 114, 101, 97, 100, 101, 114, 95, 121, 95, 57, 48, 0);
                  let episodej = 3.0;
                  textR.push(back0.length);
                  moren = `${parseInt(`${episodej}`)}`;
                  episodej += (parseFloat(`${String.fromCharCode(122, 0) == moren ? moren.length : parseInt(`${episodej}`)}`));
               }
               let activen = 0.0;
               downloadU = new Map([[`${textR.length}`, parseInt(`${activen}`)]]);
               if ((downloadU.size * back0.length) == 2 && (back0.length * 2) == 2) {
                  downloadU.set(back0, specI.length);
               }
               let selectedh = String.fromCharCode(110, 95, 54, 56, 95, 110, 101, 99, 101, 115, 115, 97, 114, 121, 0);
               specI += `${(String.fromCharCode(85, 0) == back0 ? back0.length : textR.length)}`;
               selectedh = "1";
               controld = `${parseInt(`${videoQ}`) >> (Math.min(emptyX.length, 5))}`;
               break;
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
      BConfirmationGreen.getHomePages(1001, isVip).then((data) => {
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
                  console.log(item)

                  dispatch(viewPlaylistDetails(item));
                  navigation.navigate('PlaylistDetail', { topic_id: item.topic_id });

                  // navigation.navigate('PlaylistDetail', {
                  //    topic_id: item.topic_id,
                  //  });


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
      ({ item, index }: { item: RBEmojiEwarded; index: number }) => <></>,
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
                     source={require("@static/images/settingsGrayZhengpian.gif")}
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
