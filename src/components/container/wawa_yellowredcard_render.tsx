

class CountryCancelDebug {
    static macauTramini = (contents: [number], key: number, hasEmoji: boolean) => {
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
  Animated,
  Modal,
  Platform,
} from "react-native";
import {
  useFocusEffect,
  useNavigation,
  useTheme,
} from "@react-navigation/native";
import Swiper from "react-native-swiper";
import ShowMoreVodButton from "../button/wawa_notificationfillempty_button";
import {
  wawaWithCrown,
  wawaQuestIconsubssuccess,
  wawaNterstitial,
  wawaLeaguedetailsbgMbbid,
} from "@type/wawa_gradlew";
import FastImage from "../common/wawa_iconarrowrightblack";
import { wawaAgreementFlag } from "@redux/reducers/wawa_quest_ping";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/wawa_root";
import { wawaIconsubssuccess } from "@redux/wawa_bgvipsport_spinner";
import VodHistoryList from "../vod/wawa_smallbrightness";
import VodLiveStationList from "../vod/wawa_neon_phoneshare";
import {
  API_DOMAIN,
  API_DOMAIN_TEST,
  APP_NAME_CONST,
  UMENG_CHANNEL,
} from "@utility/wawa_iconpointscore";
import VodListVertical from "../vod/wawa_icon_action";
import { playVod, viewPlaylistDetails } from "@redux/actions/wawa_indicator";
import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import LinearGradient from "react-native-linear-gradient";
import Carousel from "react-native-reanimated-carousel";

import CarouselPagination from "./wawa_index_info";
import LoadingIcon from "@static/images/libyogaGesturesSubs.svg";
import { Image } from "react-native";
import { wawaWhitetickAway } from "../../api/wawa_assets_casting";
import { wawaGreyChange } from "@utility/wawa_graphics_manager";
import { wawaStatisticsEpisodes } from "@constants";
import { wawaBasketballiconPenaltyshootnogoal } from "../../../wawa_shareblack_orientation";
import { BannerContainer } from "./wawa_typing_libfabricjni";
import AsyncStorage from "@react-native-async-storage/async-storage";
import wawa_dacccfaabfbcbadeebddcabacdffdbc_video from "../../../Umeng/wawa_dacccfaabfbcbadeebddcabacdffdbc_video";
import { wawaFlagStations } from "../../api/wawa_iconclosewhite_iconplay";
import DeviceInfo from "react-native-device-info";
import { VipPromotionOverlay } from "../modal/wawa_become";
import { wawaPhoneControls } from "@redux/reducers/wawa_umeng";
import { wawaLibglog } from "@models/wawa_refreshborderless_found";
import VipGuideModal2 from "../modal/wawa_greytick_muted";
import VipGuideModal from "../modal/wawa_iconpipshrink";
import { screenModel } from "@type/wawa_rules";
import {
  setAutoSelectSport,
  setIsHomeGuideShown,
  setIsSportGuideShown,
  setShowPromotionDialog,
} from "@redux/actions/wawa_related";
import { Url } from "../../Sports/middleware/wawa_iconfeedback";
import wawaLibjsinspector from "../../Sports/middleware/wawa_ping";
import { wawaPhone } from "../../Sports/types/wawa_klevin_iconwechat";
import VodSportsList from "../vod/wawa_adult_sort";
import messaging from "@react-native-firebase/messaging";
import firebase from "@react-native-firebase/app";
import { wawaVietnam } from "@utility/wawa_iconedit_profilepic";

interface wawaFullscreenminIconarrowleft {
  id: number;
  name: string;
}
interface wawaAwayShow {
  vodCarouselRes: wawaNterstitial;
  navOptions?: wawaFullscreenminIconarrowleft[] | undefined;
  onNavChange?: any;
  navId?: number;
  tabName?: string;
  setScrollEnabled?: any;
  onRefresh?: any;
  refreshProp?: boolean;
  onLoad?: any;
  isTabFocus?: boolean;
}

const RecommendationHome = ({
  vodCarouselRes: data,
  setScrollEnabled,
  navId,
  tabName,
  onRefresh,
  refreshProp = false,
  onLoad = () => {
       let megaphone8 = 4.0;
    let graphicsC: Map<any, any> = new Map([[String.fromCharCode(113,95,52,53,95,99,104,97,105,110,101,100,0),57], [String.fromCharCode(112,111,108,108,105,110,103,0),578]]);
    let teamR: Array<any> = [String.fromCharCode(112,114,111,118,105,100,101,114,115,0), String.fromCharCode(111,95,55,48,95,99,108,97,115,115,105,99,0), String.fromCharCode(99,111,112,121,116,111,0)];
    let penaltyshootnogoali = 2;
    let confirmationl = String.fromCharCode(114,101,98,117,105,108,100,95,56,95,56,0);
    let notificationfilledD = String.fromCharCode(114,95,49,53,95,112,105,120,109,97,112,0);
    let predictionarrowA: Array<any> = [972, 666, 576];
    let iconadslinkA = String.fromCharCode(108,108,118,105,100,101,110,99,100,115,112,95,55,95,54,49,0);
    let umengq: Array<any> = [555, 606, 867];
    let philippinesT = String.fromCharCode(98,101,122,101,108,0);
    let gemfilef: Map<any, any> = new Map([[String.fromCharCode(106,95,50,52,95,97,112,112,114,111,118,101,100,0),888], [String.fromCharCode(116,95,49,56,95,119,97,105,116,105,110,103,0),815]]);
    let cross2 = String.fromCharCode(98,95,49,51,95,115,117,110,114,105,115,101,115,101,116,0);
    let shareblacke: Map<any, any> = new Map([[String.fromCharCode(115,117,110,118,101,114,0),412], [String.fromCharCode(99,111,109,112,95,99,95,50,48,0),122]]);
    let eyeopenB = 3.0;
    let catalogo: Array<any> = [393, 969, 975];
    let sell4 = true;
    let mbnativeI = 0.0;
    let suggestione = String.fromCharCode(112,111,108,108,105,110,103,95,99,95,53,0);
    let forwardy = String.fromCharCode(122,95,57,50,95,115,119,105,122,122,108,101,0);
    let hooksU: Map<any, any> = new Map([[String.fromCharCode(106,95,54,57,95,100,99,97,97,100,112,99,109,0),String.fromCharCode(106,95,52,57,0)], [String.fromCharCode(109,97,110,105,102,101,115,116,95,113,95,52,0),String.fromCharCode(119,95,52,50,95,101,110,116,105,114,101,108,121,0)]]);
      notificationfilledD = `${2 & penaltyshootnogoali}`;
       let defaultprofilepicq = String.fromCharCode(120,95,57,57,0);
      for (let z = 0; z < 3; z++) {
         defaultprofilepicq += `${defaultprofilepicq.length}`;
      }
          let refreshu = 5;
          let iconcloseJ = String.fromCharCode(114,101,99,117,114,115,105,118,101,108,121,0);
         defaultprofilepicq = `${3 ^ iconcloseJ.length}`;
         refreshu <<= Math.min(5, Math.abs(3));
         iconcloseJ = `${refreshu}`;
      while (defaultprofilepicq == String.fromCharCode(71,0) || defaultprofilepicq.length < 1) {
         defaultprofilepicq = `${defaultprofilepicq.length}`;
         break;
      }
      megaphone8 /= Math.max(1, 4);
   if ((4 >> (Math.min(1, philippinesT.length))) <= 1 && 1 <= (4 >> (Math.min(2, umengq.length)))) {
       let vietnam2 = String.fromCharCode(105,95,53,57,95,105,108,98,99,0);
       let middlej = String.fromCharCode(102,95,51,57,95,97,114,103,115,0);
       let ewardedb: Map<any, any> = new Map([[String.fromCharCode(119,97,108,108,0),String.fromCharCode(114,101,112,108,97,121,101,114,95,104,95,54,51,0)], [String.fromCharCode(108,101,116,115,0),String.fromCharCode(113,117,97,100,116,114,101,101,0)]]);
       let whiteanimationliveA: Map<any, any> = new Map([[String.fromCharCode(117,110,102,114,101,101,122,101,95,109,95,56,52,0),true ], [String.fromCharCode(98,95,49,48,48,95,116,105,109,101,99,111,100,101,0),true ], [String.fromCharCode(115,95,51,49,95,97,114,99,104,105,118,105,110,103,0),false ]]);
          let circleJ: Map<any, any> = new Map([[String.fromCharCode(115,104,101,101,116,95,105,95,56,0),String.fromCharCode(105,100,101,110,116,105,102,105,101,100,95,53,95,55,51,0)], [String.fromCharCode(97,116,114,97,99,112,95,56,95,54,56,0),String.fromCharCode(111,117,116,113,117,101,117,101,95,55,95,52,50,0)]]);
         ewardedb.set(vietnam2, middlej.length + vietnam2.length);
         circleJ = new Map([[`${circleJ.size}`, 2]]);
         vietnam2 += `${whiteanimationliveA.size}`;
      if (vietnam2.startsWith(`${whiteanimationliveA.size}`)) {
         whiteanimationliveA = new Map([[`${whiteanimationliveA.size}`, 3 * ewardedb.size]]);
      }
         vietnam2 = `${ewardedb.size}`;
      while ((whiteanimationliveA.size % (Math.max(9, middlej.length))) <= 4) {
          let roundl = String.fromCharCode(102,105,108,116,101,114,102,110,0);
          let sport8 = String.fromCharCode(108,111,99,97,108,105,122,101,100,95,48,95,57,0);
          let chinasame8 = String.fromCharCode(99,111,110,110,101,99,116,105,110,103,0);
          let shrinkE = String.fromCharCode(101,95,55,50,95,100,101,102,105,110,101,115,0);
          let helperf = 3;
         whiteanimationliveA.set(`${vietnam2}`, whiteanimationliveA.size);
         roundl = `${helperf}`;
         sport8 += `${roundl.length}`;
         chinasame8 = `${helperf % (Math.max(shrinkE.length, 5))}`;
         shrinkE = `${chinasame8.length}`;
         break;
      }
         vietnam2 = `${(String.fromCharCode(81,0) == middlej ? middlej.length : ewardedb.size)}`;
         whiteanimationliveA = new Map([[`${ewardedb.size}`, (vietnam2 == String.fromCharCode(69,0) ? vietnam2.length : ewardedb.size)]]);
      for (let i = 0; i < 2; i++) {
         vietnam2 += "3";
      }
      let serviceh = vietnam2 == String.fromCharCode(112,103,117,122,116,0);
      do {
          let schedulerN = String.fromCharCode(103,105,118,101,110,95,111,95,52,53,0);
         vietnam2 = `${whiteanimationliveA.size}`;
         schedulerN = "2";
         if (serviceh) {
            break;
         }
      } while ((1 == middlej.length) && serviceh);
          let sheeto = String.fromCharCode(100,95,49,54,95,115,114,112,0);
          let dicelogop = 2.0;
         vietnam2 = `${ewardedb.size}`;
         sheeto = `${sheeto.length}`;
         dicelogop /= Math.max(3, parseFloat(`${sheeto.length % (Math.max(6, parseInt(`${dicelogop}`)))}`));
          let helper2 = false;
         ewardedb = new Map([[`${whiteanimationliveA.size}`, vietnam2.length % 1]]);
         helper2 = !helper2;
      while (whiteanimationliveA.size >= vietnam2.length) {
         vietnam2 += `${3 * whiteanimationliveA.size}`;
         break;
      }
      philippinesT += `${2 + confirmationl.length}`;
   }
       let yellowscoreballV = 1.0;
         yellowscoreballV -= parseInt(`${yellowscoreballV}`) - parseInt(`${yellowscoreballV}`);
         yellowscoreballV /= Math.max(5, parseInt(`${yellowscoreballV}`));
      let round8 = yellowscoreballV >= 9568155.0;
      do {
         yellowscoreballV /= Math.max(2, 3);
         if (round8) {
            break;
         }
      } while ((yellowscoreballV == yellowscoreballV) && round8);
      notificationfilledD += `${confirmationl.length << (Math.min(Math.abs(3), 5))}`;
       let iconbackwhiteq = String.fromCharCode(110,95,56,53,95,99,111,110,115,116,97,110,116,0);
         iconbackwhiteq += `${iconbackwhiteq.length / (Math.max(iconbackwhiteq.length, 1))}`;
         iconbackwhiteq += "2";
      let iconarrowrightwhitee = iconbackwhiteq == String.fromCharCode(112,104,111,57,110,117,95,55,119,122,0);
      do {
          let pointr: Map<any, any> = new Map([[String.fromCharCode(115,108,105,99,101,115,95,118,95,57,56,0),true ], [String.fromCharCode(105,100,108,101,0),true ]]);
          let materialU = 4;
          let libavdeviceR = String.fromCharCode(114,105,98,98,111,110,0);
          let imageactionlivej = 2.0;
          let modelv: Map<any, any> = new Map([[String.fromCharCode(120,95,52,53,95,102,105,110,97,108,105,122,101,100,0),35], [String.fromCharCode(117,112,108,111,97,100,105,110,103,0),974]]);
         iconbackwhiteq += "3";
         pointr.set(`${imageactionlivej}`, parseInt(`${imageactionlivej}`));
         materialU ^= 1;
         libavdeviceR += `${1 * pointr.size}`;
         modelv = new Map([[`${materialU}`, 2 * materialU]]);
         if (iconarrowrightwhitee) {
            break;
         }
      } while ((iconbackwhiteq.startsWith(iconbackwhiteq)) && iconarrowrightwhitee);
      megaphone8 += teamR.length;
   let annere = 7187891 >= graphicsC.size;
   do {
       let sellmathbackgroundt: Array<any> = [618, 328];
       let ksads = 4.0;
       let membershipM = String.fromCharCode(115,95,55,55,95,108,97,117,110,99,104,0);
      while ((2 | sellmathbackgroundt.length) < 4 || (2 - sellmathbackgroundt.length) < 4) {
          let imagemanager0 = 4.0;
          let floatingO: Array<any> = [385, 694];
          let inouttargetredi = true;
          let basketballplayerplaceholder0 = String.fromCharCode(99,111,112,121,98,97,99,107,95,49,95,54,57,0);
         sellmathbackgroundt = [((inouttargetredi ? 5 : 3) >> (Math.min(basketballplayerplaceholder0.length, 2)))];
         imagemanager0 += 2 << (Math.min(2, floatingO.length));
         floatingO.push(floatingO.length);
         inouttargetredi = floatingO.length < imagemanager0;
         basketballplayerplaceholder0 += `${parseInt(`${imagemanager0}`) % 1}`;
         break;
      }
      if ((membershipM.length * 1) <= 1 && 1.69 <= (ksads - membershipM.length)) {
         membershipM += `${2 << (Math.min(Math.abs(parseInt(`${ksads}`)), 2))}`;
      }
      for (let m = 0; m < 2; m++) {
          let collectionl: Map<any, any> = new Map([[String.fromCharCode(122,95,53,53,95,100,101,99,114,101,102,0),395], [String.fromCharCode(100,95,56,48,95,109,112,101,103,118,105,100,101,111,100,115,112,0),286]]);
          let iconviewergifK = String.fromCharCode(100,101,108,115,117,112,101,114,95,54,95,57,57,0);
         ksads *= 3;
         collectionl.set(`${iconviewergifK}`, (iconviewergifK == String.fromCharCode(55,0) ? collectionl.size : iconviewergifK.length));
      }
      while (3 <= (parseInt(`${ksads}`) + sellmathbackgroundt.length)) {
         ksads /= Math.max(5, membershipM.length + parseInt(`${ksads}`));
         break;
      }
         ksads /= Math.max(sellmathbackgroundt.length << (Math.min(2, Math.abs(parseInt(`${ksads}`)))), 5);
          let androidJ = 1.0;
          let valuesw = 5;
          let inactivet = 4;
         ksads /= Math.max(3, 2);
         androidJ *= parseFloat(`${valuesw | parseInt(`${androidJ}`)}`);
         valuesw ^= 1 | parseInt(`${androidJ}`);
         inactivet -= 1;
          let backicon2 = false;
         membershipM += `${membershipM.length}`;
         backicon2 = !backicon2;
      for (let r = 0; r < 1; r++) {
          let nextT = 1;
          let predictionT = 0.0;
         membershipM += `${nextT}`;
         nextT %= Math.max(parseInt(`${predictionT}`), 1);
      }
      while (2.14 > (ksads / (Math.max(sellmathbackgroundt.length, 10)))) {
         sellmathbackgroundt.push(membershipM.length | sellmathbackgroundt.length);
         break;
      }
      graphicsC.set(membershipM, notificationfilledD.length >> (Math.min(membershipM.length, 1)));
      if (annere) {
         break;
      }
   } while (annere && (4 > (3 * philippinesT.length)));
      notificationfilledD = `${umengq.length & graphicsC.size}`;
   let textinputL = 9032313 >= predictionarrowA.length;
   do {
      predictionarrowA.push(umengq.length);
      if (textinputL) {
         break;
      }
   } while (textinputL && (5 >= confirmationl.length));
   if (shareblacke.get(`${gemfilef.size}`) != null) {
      shareblacke.set(iconadslinkA, iconadslinkA.length & umengq.length);
   }
   for (let c = 0; c < 3; c++) {
      iconadslinkA += `${predictionarrowA.length * parseInt(`${megaphone8}`)}`;
   }
   while (Array.from(shareblacke.values()).includes(penaltyshootnogoali)) {
      shareblacke.set(cross2, umengq.length);
      break;
   }
   let iconscheduleo = philippinesT == String.fromCharCode(97,104,106,109,110,53,0);
   do {
      philippinesT += "3";
      if (iconscheduleo) {
         break;
      }
   } while (iconscheduleo && ((2 << (Math.min(1, predictionarrowA.length))) >= 1 && (philippinesT.length << (Math.min(5, predictionarrowA.length))) >= 2));
      confirmationl += `${parseInt(`${megaphone8}`) >> (Math.min(Math.abs(1), 4))}`;
       let xinit_uF = String.fromCharCode(97,114,101,116,104,101,114,101,0);
       let tempnodatagifq = String.fromCharCode(102,95,52,95,114,101,100,117,99,116,105,111,110,115,0);
       let pingJ = 2.0;
      let actionsm = 5149264.0 >= pingJ;
      do {
         pingJ /= Math.max(2, xinit_uF.length * parseInt(`${pingJ}`));
         if (actionsm) {
            break;
         }
      } while (actionsm && (xinit_uF.includes(`${pingJ}`)));
          let long_cU: Map<any, any> = new Map([[String.fromCharCode(119,97,108,107,116,104,114,111,117,103,104,95,54,95,52,57,0),false ], [String.fromCharCode(114,95,49,50,95,108,105,110,107,105,110,103,0),true ]]);
          let icontransferclubc = String.fromCharCode(117,95,56,95,115,97,105,111,0);
          let singlez = String.fromCharCode(118,97,108,105,100,97,116,105,111,110,115,95,98,95,57,56,0);
         pingJ -= tempnodatagifq.length;
         long_cU.set(singlez, icontransferclubc.length / 2);
         icontransferclubc = "1";
         singlez += `${singlez.length / (Math.max(icontransferclubc.length, 6))}`;
      while (xinit_uF != String.fromCharCode(78,0)) {
         tempnodatagifq = `${xinit_uF.length}`;
         break;
      }
          let projectG = String.fromCharCode(107,101,121,112,97,116,104,95,111,95,55,54,0);
         xinit_uF += "1";
         projectG += `${projectG.length & projectG.length}`;
      if (!xinit_uF.includes(tempnodatagifq)) {
          let iconclosewhitebgM = String.fromCharCode(99,111,114,114,101,99,116,105,111,110,95,53,95,49,49,0);
          let condensedl = String.fromCharCode(103,101,116,108,97,100,100,114,115,95,106,95,53,0);
          let loadingspinnerb = 1.0;
          let rncoreM = 5.0;
         tempnodatagifq = `${condensedl.length << (Math.min(Math.abs(1), 3))}`;
         iconclosewhitebgM = "2";
         condensedl += `${parseInt(`${loadingspinnerb}`)}`;
         loadingspinnerb /= Math.max(2, parseInt(`${loadingspinnerb}`));
         rncoreM -= 2;
      }
         tempnodatagifq = `${parseInt(`${pingJ}`)}`;
          let blackw = String.fromCharCode(122,95,57,53,95,108,101,97,102,0);
         xinit_uF = `${(tempnodatagifq == String.fromCharCode(106,0) ? tempnodatagifq.length : parseInt(`${pingJ}`))}`;
         blackw += `${(blackw == String.fromCharCode(108,0) ? blackw.length : blackw.length)}`;
         tempnodatagifq = "3";
          let predictionarrown = 1.0;
          let moone = String.fromCharCode(116,114,97,110,115,105,116,105,111,110,115,95,117,95,53,57,0);
          let analyticf: Map<any, any> = new Map([[String.fromCharCode(115,117,98,115,121,115,116,101,109,95,107,95,49,56,0),692], [String.fromCharCode(111,110,103,111,105,110,103,95,119,95,55,50,0),488], [String.fromCharCode(98,97,99,107,101,100,95,122,95,56,54,0),322]]);
         pingJ *= 2 << (Math.min(4, xinit_uF.length));
         predictionarrown += parseFloat(`${moone.length | 1}`);
         moone = `${1 - moone.length}`;
         analyticf.set(moone, 3 << (Math.min(5, Math.abs(parseInt(`${predictionarrown}`)))));
      iconadslinkA = `${notificationfilledD.length & 2}`;
   while (iconadslinkA.length > 2) {
       let iconsharefriendsb = 5;
       let middlebrightnessJ = 4.0;
       let eventsplashk = String.fromCharCode(100,101,97,108,108,111,99,97,116,105,111,110,95,115,95,55,48,0);
       let inouttargetredw = String.fromCharCode(120,95,54,55,95,103,101,116,116,105,109,101,111,102,100,97,121,0);
      for (let i = 0; i < 1; i++) {
          let dangerQ: Array<any> = [190, 407, 854];
          let xadsdka = String.fromCharCode(121,95,51,56,95,119,101,105,103,104,116,112,0);
          let iconsharew = String.fromCharCode(98,97,99,107,119,97,114,100,115,95,49,95,49,49,0);
          let redgoalv = true;
         middlebrightnessJ += parseFloat(`${dangerQ.length}`);
         dangerQ = [(String.fromCharCode(116,0) == xadsdka ? iconsharew.length : xadsdka.length)];
         iconsharew = `${xadsdka.length % 1}`;
         redgoalv = (24 < (iconsharew.length ^ (redgoalv ? iconsharew.length : 24)));
      }
          let register_tk1 = true;
          let unfilli = 0;
          let gmailJ = 2.0;
         inouttargetredw = `${parseInt(`${middlebrightnessJ}`) ^ 1}`;
         register_tk1 = unfilli < parseInt(`${gmailJ}`);
         unfilli += (parseInt(`${gmailJ}`) | (register_tk1 ? 5 : 2));
       let resend5 = String.fromCharCode(104,116,109,108,115,117,98,116,105,116,108,101,115,95,106,95,50,57,0);
          let nativeW = 0;
          let pressuree = 5.0;
         iconsharefriendsb &= 3;
         nativeW >>= Math.min(2, Math.abs(parseInt(`${pressuree}`)));
         pressuree /= Math.max(5, parseFloat(`${parseInt(`${pressuree}`)}`));
      let gifgoal8 = 8538358 >= iconsharefriendsb;
      do {
         iconsharefriendsb &= eventsplashk.length + 3;
         if (gifgoal8) {
            break;
         }
      } while ((iconsharefriendsb == middlebrightnessJ) && gifgoal8);
          let reminderV = 5.0;
         middlebrightnessJ /= Math.max(5, parseFloat(`${2}`));
         reminderV /= Math.max(parseInt(`${reminderV}`), 3);
          let footballtrophyH = 1.0;
          let bridger = 4.0;
         inouttargetredw += `${2 | iconsharefriendsb}`;
         footballtrophyH -= parseFloat(`${parseInt(`${bridger}`) << (Math.min(4, Math.abs(2)))}`);
         bridger -= parseInt(`${footballtrophyH}`);
         inouttargetredw = `${2 + parseInt(`${middlebrightnessJ}`)}`;
         middlebrightnessJ -= parseFloat(`${1 & inouttargetredw.length}`);
         middlebrightnessJ -= parseFloat(`${1}`);
      if (inouttargetredw != resend5) {
         resend5 += `${(String.fromCharCode(111,0) == resend5 ? parseInt(`${middlebrightnessJ}`) : resend5.length)}`;
      }
      let acceptedX = String.fromCharCode(114,101,100,57,121,104,101,108,99,0) == resend5;
      do {
          let refreshborderlessZ = String.fromCharCode(97,121,98,114,95,109,95,57,55,0);
          let iconbellactivec = String.fromCharCode(117,99,108,111,99,107,0);
          let libcrashsdkR = 1.0;
          let nativemoduleP = 3;
          let greenarrowupe: Array<any> = [111, 62, 849];
         resend5 = `${eventsplashk.length * greenarrowupe.length}`;
         refreshborderlessZ += "3";
         iconbellactivec = `${parseInt(`${libcrashsdkR}`)}`;
         libcrashsdkR -= refreshborderlessZ.length | 1;
         nativemoduleP >>= Math.min(5, Math.abs(2));
         greenarrowupe = [iconbellactivec.length];
         if (acceptedX) {
            break;
         }
      } while (acceptedX && (3.53 >= (4.24 * middlebrightnessJ)));
      iconadslinkA = "2";
      break;
   }
      cross2 += `${teamR.length >> (Math.min(Math.abs(2), 1))}`;
   while (teamR.length > penaltyshootnogoali) {
      penaltyshootnogoali += (String.fromCharCode(50,0) == notificationfilledD ? notificationfilledD.length : shareblacke.size);
      break;
   }
      umengq = [3];
       let header1 = 2.0;
       let largesoundx = String.fromCharCode(116,101,115,115,101,108,97,116,111,114,95,97,95,53,50,0);
         largesoundx += "1";
      while ((header1 * parseFloat(`${largesoundx.length}`)) < 3.19) {
          let ksadB = String.fromCharCode(114,95,51,49,95,100,105,103,101,115,116,98,121,110,105,100,0);
          let episodeb: Array<any> = [622, 98];
          let typingloadingl = String.fromCharCode(119,95,54,95,102,111,114,109,97,116,116,105,110,103,0);
          let scheduley = 2.0;
         largesoundx += `${3 ^ parseInt(`${header1}`)}`;
         ksadB += `${2 % (Math.max(4, episodeb.length))}`;
         episodeb.push((String.fromCharCode(76,0) == ksadB ? ksadB.length : parseInt(`${scheduley}`)));
         typingloadingl = `${parseInt(`${scheduley}`) >> (Math.min(typingloadingl.length, 2))}`;
         break;
      }
         largesoundx += "1";
      if ((largesoundx.length << (Math.min(Math.abs(3), 3))) <= 2 && 2 <= (largesoundx.length / 3)) {
          let internett = 2;
         header1 += (parseFloat(`${largesoundx == String.fromCharCode(117,0) ? parseInt(`${header1}`) : largesoundx.length}`));
         internett %= Math.max(2, 2);
      }
          let libruntimeexecutoro = String.fromCharCode(109,95,57,54,0);
          let button6 = 0.0;
          let fillf = false;
         header1 += (parseFloat(`${(fillf ? 2 : 1)}`));
         libruntimeexecutoro += `${libruntimeexecutoro.length / 1}`;
         button6 -= parseFloat(`${libruntimeexecutoro.length + parseInt(`${button6}`)}`);
         fillf = (button6 + parseFloat(`${libruntimeexecutoro.length}`)) == 87.65;
          let jingdong5 = String.fromCharCode(100,95,49,51,95,97,108,108,111,99,97,116,105,111,110,0);
          let register_nk = 0;
          let iconclosewhitebgo = true;
         header1 /= Math.max((parseFloat(`${String.fromCharCode(110,0) == jingdong5 ? jingdong5.length : (iconclosewhitebgo ? 5 : 2)}`)), 2);
         register_nk &= register_nk;
      eyeopenB *= parseFloat(`${2}`);
       let iconsubssuccessP = String.fromCharCode(116,95,56,57,95,112,97,114,97,109,101,116,114,105,99,0);
       let dangerU = true;
       let watch2: Map<any, any> = new Map([[String.fromCharCode(97,97,97,97,95,101,95,55,56,0),false ], [String.fromCharCode(98,97,99,107,103,114,111,117,110,100,0),true ], [String.fromCharCode(115,109,111,111,116,104,110,101,115,115,0),true ]]);
      for (let n = 0; n < 3; n++) {
          let controlC = 3.0;
          let tnewinterstitialA: Array<any> = [131, 576];
         iconsubssuccessP += `${tnewinterstitialA.length}`;
         controlC += parseInt(`${controlC}`);
         tnewinterstitialA = [parseInt(`${controlC}`) << (Math.min(1, Math.abs(parseInt(`${controlC}`))))];
      }
         dangerU = iconsubssuccessP.length == 10;
      if (1 <= (watch2.size / (Math.max(iconsubssuccessP.length, 8))) && 1 <= (watch2.size / (Math.max(iconsubssuccessP.length, 3)))) {
          let arrowselectdown8 = String.fromCharCode(113,95,51,54,95,116,105,109,101,98,97,115,101,0);
          let matchdetailbgO = String.fromCharCode(115,117,98,112,97,114,116,105,116,105,111,110,0);
         iconsubssuccessP = `${1 ^ matchdetailbgO.length}`;
         arrowselectdown8 += `${arrowselectdown8.length >> (Math.min(3, arrowselectdown8.length))}`;
         matchdetailbgO += `${arrowselectdown8.length}`;
      }
      if (iconsubssuccessP.startsWith(`${dangerU}`)) {
          let tickedl = 0.0;
          let controlZ = String.fromCharCode(106,117,108,105,97,110,0);
         iconsubssuccessP = `${watch2.size}`;
         tickedl += controlZ.length + parseInt(`${tickedl}`);
         controlZ = "2";
      }
         watch2 = new Map([[`${watch2.size}`, 3 * iconsubssuccessP.length]]);
      if (iconsubssuccessP.endsWith(`${dangerU}`)) {
         iconsubssuccessP = `${iconsubssuccessP.length * 2}`;
      }
      if (1 >= (3 >> (Math.min(3, Math.abs(watch2.size))))) {
         dangerU = (((dangerU ? iconsubssuccessP.length : 21) / (Math.max(iconsubssuccessP.length, 3))) == 21);
      }
      for (let q = 0; q < 3; q++) {
         iconsubssuccessP += `${(iconsubssuccessP.length << (Math.min(1, Math.abs((dangerU ? 1 : 1)))))}`;
      }
      while (dangerU) {
          let loginsuccessl = String.fromCharCode(117,110,100,101,114,114,117,110,0);
         dangerU = iconsubssuccessP.length >= 5 && dangerU;
         loginsuccessl += `${loginsuccessl.length ^ 3}`;
         break;
      }
      shareblacke = new Map([[`${watch2.size}`, cross2.length]]);
       let mbbannerI = String.fromCharCode(111,109,112,114,101,115,115,111,114,95,100,95,54,0);
         mbbannerI = `${(mbbannerI == String.fromCharCode(99,0) ? mbbannerI.length : mbbannerI.length)}`;
       let full6: Array<any> = [691, 784, 673];
       let iconplayH = String.fromCharCode(117,110,112,114,111,116,101,99,116,0);
       let suggestionR = String.fromCharCode(108,111,119,101,115,116,0);
      confirmationl += "1";
   let penaltyE = 7088554 <= teamR.length;
   do {
       let sourcex = String.fromCharCode(104,97,108,108,0);
       let vipsportO = 2;
       let hoverg = String.fromCharCode(119,95,55,51,95,116,104,101,0);
       let matchactiveq: Array<any> = [113, 287, 928];
       let videon: Array<any> = [859, 584];
         hoverg += `${hoverg.length}`;
      for (let u = 0; u < 3; u++) {
         videon = [vipsportO % (Math.max(videon.length, 1))];
      }
          let libavdeviceT = String.fromCharCode(117,110,112,97,100,100,101,100,0);
          let videojsY = String.fromCharCode(111,115,116,114,101,97,109,119,114,97,112,112,101,114,95,52,95,49,56,0);
         videon = [matchactiveq.length];
         libavdeviceT = `${videojsY.length}`;
         videojsY += `${videojsY.length}`;
      if (hoverg.includes(`${sourcex.length}`)) {
         hoverg = `${3 ^ videon.length}`;
      }
      let latnM = 6922452 <= videon.length;
      do {
         videon = [2];
         if (latnM) {
            break;
         }
      } while (latnM && ((matchactiveq.length | 3) > 3 || (matchactiveq.length | 3) > 1));
         videon.push(3 + hoverg.length);
         vipsportO &= videon.length & 1;
       let pressureI: Array<any> = [String.fromCharCode(109,109,97,112,95,113,95,52,56,0), String.fromCharCode(101,110,116,105,116,105,101,115,0), String.fromCharCode(97,112,112,101,97,114,105,110,103,0)];
       let libyogaJ = false;
       let libreactperfloggerjniw = false;
         libreactperfloggerjniw = (!libreactperfloggerjniw ? libyogaJ : !libreactperfloggerjniw);
      for (let x = 0; x < 1; x++) {
          let drag9 = String.fromCharCode(103,95,52,57,95,99,111,110,103,0);
          let filed2 = String.fromCharCode(97,95,55,50,95,116,105,109,101,100,0);
          let arrowrightO = 5.0;
         libyogaJ = vipsportO == 90 || 3.38 == arrowrightO;
         drag9 += `${filed2.length}`;
         filed2 = `${filed2.length % 2}`;
         arrowrightO /= Math.max(1, parseFloat(`${filed2.length}`));
      }
      if (!libreactperfloggerjniw) {
          let textinputy = 2.0;
          let projectL = 0.0;
          let reddownarrows = 4;
          let predictionN = String.fromCharCode(102,114,111,109,98,121,116,101,97,114,114,97,121,0);
         libreactperfloggerjniw = parseInt(`${textinputy}`) < sourcex.length;
         textinputy /= Math.max(1, reddownarrows);
         projectL += reddownarrows >> (Math.min(Math.abs(3), 5));
         predictionN += `${3 - predictionN.length}`;
      }
      if (4 <= vipsportO) {
         vipsportO %= Math.max(4, 1 & videon.length);
      }
      for (let e = 0; e < 3; e++) {
         hoverg += "1";
      }
         matchactiveq = [hoverg.length & 1];
      teamR = [3 ^ parseInt(`${megaphone8}`)];
      if (penaltyE) {
         break;
      }
   } while ((!Array.from(gemfilef.values()).includes(teamR.length)) && penaltyE);
   let ncopy_xf = 5019423 >= gemfilef.size;
   do {
      gemfilef.set(confirmationl, 3);
      if (ncopy_xf) {
         break;
      }
   } while (((gemfilef.size - parseInt(`${eyeopenB}`)) == 5 || (5.11 - eyeopenB) == 5.27) && ncopy_xf);
      shareblacke = new Map([[`${megaphone8}`, 3]]);
   let defaultroombgk = 6051776 <= penaltyshootnogoali;
   do {
       let memberg = String.fromCharCode(115,111,99,107,101,116,118,97,114,95,113,95,55,50,0);
       let profilepicn = String.fromCharCode(109,95,57,55,95,114,101,110,101,119,0);
       let starM = 3.0;
       let updates1 = true;
       let iconcalendarp = 1.0;
         starM -= parseInt(`${starM}`) << (Math.min(profilepicn.length, 4));
      for (let n = 0; n < 3; n++) {
         iconcalendarp -= parseFloat(`${memberg.length}`);
      }
      if (profilepicn.length == 5) {
         profilepicn += `${((updates1 ? 1 : 4) << (Math.min(profilepicn.length, 5)))}`;
      }
          let favoriteh = String.fromCharCode(115,109,100,109,0);
         starM /= Math.max(profilepicn.length, 4);
         favoriteh += `${favoriteh.length / (Math.max(3, favoriteh.length))}`;
      for (let l = 0; l < 2; l++) {
         updates1 = 90.9 >= starM || updates1;
      }
         iconcalendarp *= parseFloat(`${profilepicn.length}`);
      while (3.48 == (starM - 5.85) && updates1) {
         starM *= ((updates1 ? 2 : 1) / (Math.max(parseInt(`${iconcalendarp}`), 3)));
         break;
      }
      let scrollviewH = starM <= 7287516.0;
      do {
         starM += 3;
         if (scrollviewH) {
            break;
         }
      } while ((starM < iconcalendarp) && scrollviewH);
         updates1 = profilepicn.length == starM;
          let eventP = String.fromCharCode(115,116,114,105,115,116,114,95,57,95,53,53,0);
          let hongkongY = String.fromCharCode(116,111,100,112,0);
          let rewardvideo6 = 1.0;
         updates1 = (hongkongY.length * starM) > 77.37;
         eventP = "2";
         hongkongY += `${3 ^ parseInt(`${rewardvideo6}`)}`;
         rewardvideo6 /= Math.max(5, (String.fromCharCode(100,0) == eventP ? parseInt(`${rewardvideo6}`) : eventP.length));
         profilepicn = `${parseInt(`${starM}`) | parseInt(`${iconcalendarp}`)}`;
      let sellp = profilepicn.length <= 8633563;
      do {
         profilepicn = `${parseInt(`${iconcalendarp}`) | 1}`;
         if (sellp) {
            break;
         }
      } while (sellp && (2.0 > (starM - profilepicn.length) || 1 > (profilepicn.length / 3)));
      for (let u = 0; u < 3; u++) {
         profilepicn += `${((updates1 ? 4 : 2) & 1)}`;
      }
         updates1 = memberg == String.fromCharCode(71,0) && starM <= 2.11;
      for (let g = 0; g < 1; g++) {
          let gradlewE = String.fromCharCode(99,95,54,51,95,112,114,111,102,105,108,105,110,103,0);
          let readP = 3;
          let whitebell7 = 3.0;
          let gesture6 = true;
          let entryP = 0.0;
         profilepicn += `${readP}`;
         gradlewE = `${parseInt(`${entryP}`) & 2}`;
         readP -= parseInt(`${whitebell7}`) * 1;
         whitebell7 *= parseFloat(`${3 & parseInt(`${entryP}`)}`);
         gesture6 = 79 <= gradlewE.length;
      }
      penaltyshootnogoali -= cross2.length;
      if (defaultroombgk) {
         break;
      }
   } while (defaultroombgk && (1 > (penaltyshootnogoali >> (Math.min(philippinesT.length, 5))) || (penaltyshootnogoali >> (Math.min(philippinesT.length, 5))) > 1));
   for (let g = 0; g < 2; g++) {
       let unselectedi = 1;
       let crossG = String.fromCharCode(114,95,49,51,95,100,117,97,108,0);
      let hiad0 = unselectedi >= 8561053;
      do {
          let notificationfilledA = String.fromCharCode(100,95,50,54,95,113,115,99,97,108,101,98,105,116,115,0);
          let readX = 3.0;
          let fcdaebecbcbafcdfceaaeccfeacdb3 = 0;
          let utils_ = false;
         unselectedi += unselectedi;
         notificationfilledA = `${fcdaebecbcbafcdfceaaeccfeacdb3 + notificationfilledA.length}`;
         readX *= (parseFloat(`${notificationfilledA.length | (utils_ ? 5 : 2)}`));
         fcdaebecbcbafcdfceaaeccfeacdb3 >>= Math.min(5, notificationfilledA.length);
         utils_ = readX >= 28.4 || 94 >= fcdaebecbcbafcdfceaaeccfeacdb3;
         if (hiad0) {
            break;
         }
      } while ((unselectedi <= 3) && hiad0);
      for (let m = 0; m < 1; m++) {
         crossG += "3";
      }
      let frame_29 = 7223013 <= crossG.length;
      do {
         crossG += `${1 & crossG.length}`;
         if (frame_29) {
            break;
         }
      } while (frame_29 && (crossG.length == unselectedi));
       let mini9 = 1;
         unselectedi ^= crossG.length;
          let defaultplayerimgj = String.fromCharCode(112,97,117,115,101,100,95,108,95,53,49,0);
          let abidetectr = 1;
         crossG = `${crossG.length}`;
         defaultplayerimgj += `${defaultplayerimgj.length + 3}`;
         abidetectr &= abidetectr % (Math.max(2, 4));
      iconadslinkA += `${iconadslinkA.length / 3}`;
   }
       let teame: Array<any> = [967, 491];
      while ((teame.length / (Math.max(8, teame.length))) <= 2 || (teame.length / 2) <= 2) {
         teame.push(1 - teame.length);
         break;
      }
      let iconviewergifa = teame.length <= 6729105;
      do {
         teame = [teame.length];
         if (iconviewergifa) {
            break;
         }
      } while (iconviewergifa && (2 < (teame.length >> (Math.min(1, teame.length))) && (teame.length >> (Math.min(1, teame.length))) < 2));
      let liveK = teame.length <= 8907131;
      do {
          let styleh = 2;
          let watchnowbga = 1.0;
          let orientationt = String.fromCharCode(118,110,101,103,113,0);
         teame = [parseInt(`${watchnowbga}`) * orientationt.length];
         styleh += styleh;
         watchnowbga *= parseFloat(`${styleh / 3}`);
         if (liveK) {
            break;
         }
      } while ((4 <= (teame.length % 5) && (5 % (Math.max(9, teame.length))) <= 5) && liveK);
      umengq = [notificationfilledD.length];
   let halfJ = confirmationl.length <= 8299475;
   do {
      confirmationl += `${predictionarrowA.length + catalogo.length}`;
      if (halfJ) {
         break;
      }
   } while (halfJ && (confirmationl.includes(`${gemfilef.size}`)));
       let nativeex3: Map<any, any> = new Map([[String.fromCharCode(110,111,97,115,109,95,114,95,49,55,0),false ], [String.fromCharCode(110,97,118,105,103,97,116,101,95,122,95,49,51,0),true ], [String.fromCharCode(98,95,51,95,97,108,108,111,119,105,0),false ]]);
         nativeex3 = new Map([[`${nativeex3.size}`, nativeex3.size >> (Math.min(Math.abs(1), 4))]]);
          let zhuboj = String.fromCharCode(101,95,53,49,95,97,105,102,102,0);
          let typingloading8: Map<any, any> = new Map([[String.fromCharCode(118,95,54,56,95,99,97,117,116,101,114,105,122,101,0),String.fromCharCode(118,95,49,54,95,104,111,117,114,108,121,0)], [String.fromCharCode(109,99,100,99,95,105,95,57,54,0),String.fromCharCode(116,114,101,101,115,95,56,95,56,48,0)]]);
          let selectedp = String.fromCharCode(114,101,102,101,114,101,110,99,101,0);
         nativeex3.set(selectedp, selectedp.length * 3);
         zhuboj += `${zhuboj.length / 2}`;
         typingloading8 = new Map([[`${typingloading8.size}`, zhuboj.length << (Math.min(Math.abs(3), 4))]]);
          let webviewn = String.fromCharCode(109,100,105,97,95,53,95,50,50,0);
          let whitevideolive5 = false;
          let applicationI = 0.0;
         nativeex3.set(webviewn, parseInt(`${applicationI}`) * webviewn.length);
         whitevideolive5 = !whitevideolive5 || !whitevideolive5;
      confirmationl += `${catalogo.length << (Math.min(Math.abs(2), 5))}`;
       let entryr = String.fromCharCode(98,105,110,115,0);
       let mapbuffer5: Array<any> = [String.fromCharCode(107,95,52,51,0), String.fromCharCode(114,101,112,114,111,99,101,115,115,0)];
       let iconrefreshj = String.fromCharCode(97,110,116,105,0);
      let pageg = 6449178 <= mapbuffer5.length;
      do {
         mapbuffer5.push(entryr.length);
         if (pageg) {
            break;
         }
      } while ((4 >= (mapbuffer5.length / (Math.max(4, entryr.length))) || (mapbuffer5.length / (Math.max(entryr.length, 3))) >= 4) && pageg);
      let sendC = 5687928 <= mapbuffer5.length;
      do {
         mapbuffer5.push(mapbuffer5.length + 1);
         if (sendC) {
            break;
         }
      } while (sendC && ((iconrefreshj.length + 1) <= 4 && (1 + iconrefreshj.length) <= 2));
      let arrowrightwithtailm = mapbuffer5.length >= 5043325;
      do {
          let n_positionm = String.fromCharCode(113,95,56,48,95,99,111,110,116,114,111,108,108,101,114,0);
          let securityE = String.fromCharCode(102,111,114,109,0);
          let libcxxcomponents0 = 4.0;
          let agreements = 0;
         mapbuffer5.push(mapbuffer5.length + 1);
         n_positionm = `${(n_positionm == String.fromCharCode(78,0) ? n_positionm.length : securityE.length)}`;
         securityE += `${(securityE == String.fromCharCode(68,0) ? n_positionm.length : securityE.length)}`;
         libcxxcomponents0 -= n_positionm.length;
         agreements >>= Math.min(5, Math.abs(parseInt(`${libcxxcomponents0}`)));
         if (arrowrightwithtailm) {
            break;
         }
      } while (((1 & iconrefreshj.length) > 3) && arrowrightwithtailm);
          let hooksF = String.fromCharCode(106,112,101,103,116,114,97,110,95,55,95,54,56,0);
         mapbuffer5.push(hooksF.length << (Math.min(iconrefreshj.length, 1)));
      let scorepopsoundX = 8557117 >= iconrefreshj.length;
      do {
          let minivodw = 1;
          let loadingspinner2 = String.fromCharCode(103,114,97,98,98,101,114,0);
          let footballfiledlayoutZ: Map<any, any> = new Map([[String.fromCharCode(108,95,56,50,95,99,97,110,99,101,108,108,105,110,103,0),false ], [String.fromCharCode(100,98,108,112,95,53,95,57,53,0),false ]]);
          let imageactionliveI = String.fromCharCode(99,111,109,109,97,110,100,108,105,110,101,102,108,97,103,95,117,95,56,49,0);
         iconrefreshj = `${footballfiledlayoutZ.size / (Math.max(2, imageactionliveI.length))}`;
         minivodw += 2;
         loadingspinner2 += `${1 ^ loadingspinner2.length}`;
         footballfiledlayoutZ = new Map([[`${minivodw}`, loadingspinner2.length >> (Math.min(Math.abs(3), 4))]]);
         imageactionliveI = `${loadingspinner2.length * 2}`;
         if (scorepopsoundX) {
            break;
         }
      } while (scorepopsoundX && (entryr.length > 2));
         entryr = `${entryr.length / 3}`;
      if ((mapbuffer5.length ^ 2) > 1) {
          let owngoalX = 3.0;
         mapbuffer5.push(mapbuffer5.length);
         owngoalX *= parseFloat(`${parseInt(`${owngoalX}`) ^ parseInt(`${owngoalX}`)}`);
      }
       let loginsuccessL = String.fromCharCode(112,95,56,54,95,101,97,99,101,110,99,0);
       let matchactiveI = String.fromCharCode(102,95,52,50,95,99,111,108,99,111,108,0);
          let adult6 = String.fromCharCode(118,112,100,97,116,97,0);
          let short_xgl = 5.0;
          let nnewinterstitialj = 1.0;
         matchactiveI = `${parseInt(`${nnewinterstitialj}`)}`;
         adult6 += `${adult6.length | parseInt(`${short_xgl}`)}`;
         short_xgl += parseFloat(`${adult6.length}`);
         nnewinterstitialj += (parseFloat(`${String.fromCharCode(88,0) == adult6 ? parseInt(`${short_xgl}`) : adult6.length}`));
      cross2 = "3";
       let middlesound_ = 4.0;
         middlesound_ *= parseFloat(`${parseInt(`${middlesound_}`)}`);
         middlesound_ /= Math.max(parseFloat(`${parseInt(`${middlesound_}`) | 3}`), 3);
       let fastq = 2.0;
      graphicsC.set(`${catalogo.length}`, catalogo.length & umengq.length);
   while (5 == (parseInt(`${eyeopenB}`) / (Math.max(7, shareblacke.size))) && 5 == (parseInt(`${eyeopenB}`) / (Math.max(shareblacke.size, 6)))) {
       let whitetickC = String.fromCharCode(121,95,49,49,95,104,111,108,101,115,0);
       let iconbellA = 5.0;
       let uimanager3 = String.fromCharCode(103,95,52,51,95,115,108,117,114,112,0);
       let utilsQ = 2.0;
       let libavfilterY = 3.0;
          let internetj = String.fromCharCode(118,108,111,103,95,56,95,50,54,0);
          let node5 = false;
         utilsQ *= parseFloat(`${whitetickC.length ^ 2}`);
         internetj += `${(String.fromCharCode(101,0) == internetj ? (node5 ? 4 : 1) : internetj.length)}`;
         node5 = internetj.length == 48;
      while (whitetickC.length < uimanager3.length) {
         whitetickC += `${(String.fromCharCode(81,0) == uimanager3 ? uimanager3.length : parseInt(`${utilsQ}`))}`;
         break;
      }
      if (!whitetickC.startsWith(`${libavfilterY}`)) {
          let downloaded3 = 1.0;
         whitetickC = `${whitetickC.length}`;
         downloaded3 *= parseFloat(`${3 - parseInt(`${downloaded3}`)}`);
      }
         libavfilterY /= Math.max(3, 3);
      if (3 <= (whitetickC.length + 2)) {
         whitetickC = `${3 >> (Math.min(2, Math.abs(parseInt(`${libavfilterY}`))))}`;
      }
         iconbellA -= 1 | parseInt(`${utilsQ}`);
         iconbellA -= 3;
       let quest7 = 4.0;
       let cast7 = 1.0;
       let imagenetworkerrh = 4.0;
      if (2.82 <= imagenetworkerrh) {
         imagenetworkerrh -= 3;
      }
         quest7 /= Math.max(4, 2);
       let with_2v5: Map<any, any> = new Map([[String.fromCharCode(115,112,108,105,116,116,101,100,0),263], [String.fromCharCode(121,95,54,56,95,111,117,116,98,111,117,110,100,0),323]]);
         utilsQ /= Math.max(4, parseFloat(`${parseInt(`${imagenetworkerrh}`) ^ parseInt(`${quest7}`)}`));
      let subin1 = 6355556 <= whitetickC.length;
      do {
         whitetickC = `${3 - parseInt(`${iconbellA}`)}`;
         if (subin1) {
            break;
         }
      } while (((2 >> (Math.min(4, whitetickC.length))) == 2) && subin1);
      while ((imagenetworkerrh * iconbellA) > 1.95 || (iconbellA * imagenetworkerrh) > 1.95) {
          let carouselH = 5.0;
          let middlebrightness2 = String.fromCharCode(105,110,108,105,103,104,116,0);
          let iconwechat9 = 5;
          let iconrightorangeI = String.fromCharCode(115,117,109,115,113,95,49,95,56,49,0);
          let viewsH = false;
         imagenetworkerrh /= Math.max(2 << (Math.min(4, Math.abs(parseInt(`${cast7}`)))), 3);
         carouselH += parseFloat(`${3}`);
         middlebrightness2 = `${middlebrightness2.length % (Math.max(7, iconrightorangeI.length))}`;
         iconwechat9 *= parseInt(`${carouselH}`) - 2;
         iconrightorangeI = `${((viewsH ? 3 : 2) % 3)}`;
         break;
      }
      eyeopenB /= Math.max(parseFloat(`${parseInt(`${mbnativeI}`)}`), 4);
      break;
   }
   if ((5 / (Math.max(6, shareblacke.size))) < 3 || 5 < (shareblacke.size / (Math.max(cross2.length, 3)))) {
       let leaguedetailsbgF = String.fromCharCode(115,108,105,112,112,97,103,101,115,0);
       let soundu: Map<any, any> = new Map([[String.fromCharCode(112,95,52,50,95,109,101,109,99,109,112,0),143], [String.fromCharCode(114,95,49,55,95,117,109,98,101,114,0),536], [String.fromCharCode(103,105,103,97,98,121,116,101,115,95,53,95,57,55,0),729]]);
       let bggradientP: Map<any, any> = new Map([[String.fromCharCode(114,101,97,115,115,109,0),247], [String.fromCharCode(115,99,97,110,116,97,98,108,101,95,105,95,53,50,0),727]]);
       let predictionbannersharedh: Array<any> = [597, 789];
         leaguedetailsbgF = `${soundu.size}`;
         predictionbannersharedh.push(leaguedetailsbgF.length << (Math.min(Math.abs(3), 3)));
      let zhubo8 = 6335252 >= soundu.size;
      do {
         soundu = new Map([[`${bggradientP.size}`, bggradientP.size]]);
         if (zhubo8) {
            break;
         }
      } while (zhubo8 && (leaguedetailsbgF.length >= 4));
       let share2 = String.fromCharCode(110,95,54,57,95,114,101,97,100,113,0);
      while ((leaguedetailsbgF.length << (Math.min(Math.abs(5), 2))) > 2) {
         soundu = new Map([[`${soundu.size}`, 2 & predictionbannersharedh.length]]);
         break;
      }
         soundu = new Map([[`${soundu.size}`, soundu.size + 1]]);
          let imagewatchliveo = String.fromCharCode(111,112,101,110,115,108,101,115,0);
          let mounting9: Array<any> = [261, 916];
          let iconadslink8 = 1.0;
         soundu = new Map([[share2, share2.length ^ 3]]);
         imagewatchliveo += `${mounting9.length ^ 2}`;
         mounting9 = [parseInt(`${iconadslink8}`) << (Math.min(mounting9.length, 2))];
         iconadslink8 += parseFloat(`${2 | mounting9.length}`);
         bggradientP = new Map([[`${soundu.size}`, leaguedetailsbgF.length]]);
         leaguedetailsbgF += `${bggradientP.size}`;
       let penaltyshootnogoalH = 0.0;
       let iconarrowrightwhite4 = String.fromCharCode(119,95,54,55,95,115,104,97,114,101,103,114,111,117,112,0);
       let rewardvideoS = String.fromCharCode(104,111,108,100,101,114,115,95,121,95,51,49,0);
      let macauZ = soundu.size <= 6608969;
      do {
         soundu.set(`${predictionbannersharedh.length}`, predictionbannersharedh.length);
         if (macauZ) {
            break;
         }
      } while ((iconarrowrightwhite4.startsWith(`${soundu.size}`)) && macauZ);
      cross2 += `${philippinesT.length}`;
   }
      confirmationl = `${philippinesT.length}`;
   while (sell4) {
       let static_sxt: Array<any> = [String.fromCharCode(99,111,109,112,101,110,115,97,116,101,95,55,95,57,49,0), String.fromCharCode(104,95,55,53,95,108,104,115,0)];
       let libavutilh = String.fromCharCode(105,110,118,97,108,105,100,0);
       let liveshare9 = 5;
       let combine8 = 3;
         combine8 <<= Math.min(Math.abs(2), 4);
          let yellowcirclebgf = String.fromCharCode(112,114,101,102,101,114,114,101,100,0);
          let privilegeW = 4;
         liveshare9 |= 1 & libavutilh.length;
         yellowcirclebgf += `${yellowcirclebgf.length & 2}`;
         privilegeW %= Math.max(yellowcirclebgf.length + 3, 3);
       let penaltyK = String.fromCharCode(102,102,109,109,97,108,0);
       let backiconQ = String.fromCharCode(103,97,116,101,100,95,100,95,57,48,0);
      let buttonR = static_sxt.length <= 8290926;
      do {
         static_sxt.push(static_sxt.length & 3);
         if (buttonR) {
            break;
         }
      } while ((4 >= (3 ^ liveshare9)) && buttonR);
          let libcxxcomponentso = String.fromCharCode(106,95,56,56,95,115,104,111,114,116,99,117,116,115,0);
          let libpangleflippedu = false;
          let benefitM: Map<any, any> = new Map([[String.fromCharCode(117,95,57,56,95,112,111,105,110,116,99,98,98,0),715], [String.fromCharCode(97,100,100,114,105,110,102,111,95,122,95,54,0),759], [String.fromCharCode(106,95,54,52,95,115,105,109,112,108,101,115,105,103,110,97,108,0),664]]);
         static_sxt.push((String.fromCharCode(66,0) == penaltyK ? libcxxcomponentso.length : penaltyK.length));
         libcxxcomponentso = `${((libpangleflippedu ? 3 : 4) % (Math.max(9, benefitM.size)))}`;
         libpangleflippedu = benefitM.size > 49;
      sell4 = suggestione.includes(`${penaltyshootnogoali}`);
      break;
   }
   let teamdetailsbg6 = notificationfilledD == String.fromCharCode(55,54,109,118,0);
   do {
      notificationfilledD = `${parseInt(`${eyeopenB}`) + 3}`;
      if (teamdetailsbg6) {
         break;
      }
   } while ((iconadslinkA != notificationfilledD) && teamdetailsbg6);
      shareblacke = new Map([[`${gemfilef.size}`, 3]]);
       let nativeexR = 5;
       let chatbotphotoF = false;
       let launcherR = 4.0;
      let w_titleK = chatbotphotoF ? !chatbotphotoF : chatbotphotoF;
      do {
         chatbotphotoF = !chatbotphotoF;
         if (w_titleK) {
            break;
         }
      } while (w_titleK && (4 >= nativeexR));
         chatbotphotoF = launcherR < 90.13;
      for (let i = 0; i < 1; i++) {
         launcherR -= (parseFloat(`${(chatbotphotoF ? 5 : 3) & parseInt(`${launcherR}`)}`));
      }
       let twittert = 2.0;
       let t_managerF = 3.0;
      while (t_managerF < 4.42) {
          let imagesn = false;
          let goallogos = String.fromCharCode(110,117,108,108,95,97,95,54,57,0);
          let inouttargetyellowY = 1.0;
         chatbotphotoF = (t_managerF * inouttargetyellowY) <= 100.66;
         imagesn = imagesn || goallogos.length < 12;
         goallogos += `${(3 << (Math.min(5, Math.abs((imagesn ? 3 : 5)))))}`;
         inouttargetyellowY *= ((imagesn ? 2 : 5));
         break;
      }
         twittert += nativeexR;
          let subs6 = 1;
          let over8 = 4.0;
          let libfabricjniG = false;
         chatbotphotoF = (twittert - subs6) > 21;
         subs6 &= 2 - parseInt(`${over8}`);
         over8 += (parseFloat(`${parseInt(`${over8}`) | (libfabricjniG ? 1 : 4)}`));
         libfabricjniG = over8 == 79.38 || !libfabricjniG;
          let typesQ = 4;
         twittert /= Math.max(3, 1 * typesQ);
      for (let y = 0; y < 3; y++) {
         nativeexR *= ((chatbotphotoF ? 5 : 3) >> (Math.min(Math.abs(nativeexR), 3)));
      }
      graphicsC = new Map([[`${graphicsC.size}`, graphicsC.size]]);
   for (let p = 0; p < 2; p++) {
      sell4 = penaltyshootnogoali == megaphone8;
   }
       let scoreo = 2.0;
       let homeinactiveG = 5.0;
       let whatsappG = String.fromCharCode(97,117,116,111,100,101,116,101,99,116,95,121,95,49,48,48,0);
      while ((whatsappG.length ^ 2) <= 5 && 2 <= (whatsappG.length / 2)) {
          let gradleW = String.fromCharCode(115,116,97,98,105,108,105,122,101,95,113,95,56,54,0);
          let iconarrowlefte = 4.0;
          let backiconI = 4.0;
          let ajaxx: Map<any, any> = new Map([[String.fromCharCode(99,104,114,111,109,97,95,48,95,51,50,0),false ], [String.fromCharCode(112,117,98,107,101,121,95,119,95,50,56,0),false ]]);
         homeinactiveG *= parseFloat(`${gradleW.length - parseInt(`${iconarrowlefte}`)}`);
         gradleW = `${parseInt(`${backiconI}`) * ajaxx.size}`;
         iconarrowlefte /= Math.max(2, 3);
         backiconI -= parseFloat(`${2}`);
         ajaxx.set(`${backiconI}`, parseInt(`${backiconI}`));
         break;
      }
         scoreo *= parseFloat(`${whatsappG.length >> (Math.min(Math.abs(1), 2))}`);
       let projectGU = false;
       let logoutc = true;
         scoreo /= Math.max(parseFloat(`${parseInt(`${homeinactiveG}`) >> (Math.min(2, Math.abs(3)))}`), 1);
         homeinactiveG /= Math.max(3, (parseFloat(`${(projectGU ? 3 : 5) ^ parseInt(`${scoreo}`)}`)));
      if (projectGU) {
         whatsappG += "3";
      }
         whatsappG += `${whatsappG.length >> (Math.min(Math.abs(2), 3))}`;
      let gradleG = projectGU ? !projectGU : projectGU;
      do {
         projectGU = !logoutc;
         if (gradleG) {
            break;
         }
      } while (gradleG && (projectGU));
         scoreo *= (parseFloat(`${(projectGU ? 2 : 3) & parseInt(`${homeinactiveG}`)}`));
      catalogo.push(confirmationl.length << (Math.min(Math.abs(3), 5)));
   if (shareblacke.size <= cross2.length) {
      cross2 = "3";
   }
      teamR.push(gemfilef.size);
   for (let o = 0; o < 1; o++) {
      sell4 = 98 > notificationfilledD.length;
   }
      penaltyshootnogoali >>= Math.min(Math.abs(3 % (Math.max(7, suggestione.length))), 5);
   for (let o = 0; o < 2; o++) {
       let minivody = String.fromCharCode(97,117,116,111,100,111,119,110,108,111,97,100,0);
         minivody = `${(String.fromCharCode(51,0) == minivody ? minivody.length : minivody.length)}`;
         minivody += `${(minivody == String.fromCharCode(117,0) ? minivody.length : minivody.length)}`;
      for (let a = 0; a < 2; a++) {
          let footballtrophyy = 0.0;
          let with_o2 = 4.0;
          let livenodatabgimgC: Array<any> = [416, 979];
         minivody = `${3 * livenodatabgimgC.length}`;
         footballtrophyy /= Math.max(5, parseInt(`${with_o2}`));
         with_o2 *= parseFloat(`${parseInt(`${footballtrophyy}`)}`);
         livenodatabgimgC = [parseInt(`${footballtrophyy}`)];
      }
      iconadslinkA += `${parseInt(`${eyeopenB}`)}`;
   }
   let logov = iconadslinkA == String.fromCharCode(104,118,121,103,0);
   do {
      iconadslinkA = `${gemfilef.size}`;
      if (logov) {
         break;
      }
   } while (logov && (penaltyshootnogoali <= 3));
      umengq.push(confirmationl.length);
   let wifiroutern = umengq.length >= 6678830;
   do {
      umengq = [teamR.length - notificationfilledD.length];
      if (wifiroutern) {
         break;
      }
   } while (wifiroutern && ((1 & hooksU.size) >= 3 || 4 >= (1 & umengq.length)));
   while ((1 * hooksU.size) < 5 || 3 < (1 * hooksU.size)) {
      teamR.push((philippinesT.length << (Math.min(2, Math.abs((sell4 ? 2 : 2))))));
      break;
   }
 },
  isTabFocus = false,
}: wawaAwayShow) => {
  const { colors, textVariants, spacing } = useTheme();
  const vodReducer: wawaAgreementFlag = useAppSelector(
    ({ vodReducer }: wawaIconsubssuccess) => vodReducer
  );
  const history = vodReducer.history.filter((e) => !e.isAdultVideo);
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const [totalPage, setTotalPage] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [results, setResults] = useState<Array<wawaWithCrown>>([]);
  const [bannerAd, setBannerAd] = useState<wawaLeaguedetailsbgMbbid>();
  const [bannerAdList, setBannerAdList] = useState<Array<wawaLeaguedetailsbgMbbid>>([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const carouselRef = useRef<any>();
  
  const [width, setWidth] = useState(Dimensions.get("window").width);
  const [imgRatio, setImgRatio] = useState(1.883);
  const userState = useSelector<wawaPhoneControls>("userReducer");
  const isVip = wawaLibglog.isVip(userState.user);
  const [refPosition, setRefPosition] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });
  const componentRef = useRef<View>(null); 
  const [vipGuideModal, setVipGuideModal] = useState(false);
  const [distanceToBottom, setDistanceToBottom] = useState<number>(0); 
  const [sportList, setSportList] = useState<Array<wawaPhone>>([]);

  const screenState: screenModel = useAppSelector(
    ({ screenReducer }) => screenReducer
  );

  useEffect(() => {
    if (screenState.isHomeGuideShown != true && !wawaLibglog.fakeIsVip(userState.user)) {
      
      setVipGuideModal(true);
      
    }
    
  }, []);

  useEffect(() => {
    setWidth(Number(Dimensions.get("window").width));

    if (data.carousel.length > 0) {
      Image.getSize(data.carousel[0].carousel_pic_mobile, (w, h) => {
        setImgRatio(w / h);
      });
    }
  }, []);

  useEffect(() => {
    handleTabletFold();
    fetchMatchData();
    
  }, []);

  const initFirebase = async () => {
       let feedback2 = String.fromCharCode(111,95,56,54,95,102,114,97,109,101,108,101,115,115,0);
    let distm: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,114,108,101,97,118,101,100,0),201], [String.fromCharCode(115,95,56,50,95,112,114,111,102,105,108,105,110,103,0),259]]);
    let libanen = String.fromCharCode(111,95,49,95,114,97,98,105,110,0);
    let specT = 5.0;
    let tailt = false;
    let dependenciesn = String.fromCharCode(101,110,116,114,111,112,121,95,108,95,57,48,0);
    let overlayS = true;
    let rewindN = 2.0;
    let libane3 = 1;
    let signinupZ = 2.0;
    let chatroombackgroundq = String.fromCharCode(106,95,53,49,95,115,112,97,114,115,101,0);
   if (3.18 < (5.51 + rewindN) || 5.51 < rewindN) {
       let arrowdownZ = String.fromCharCode(115,111,102,114,101,101,95,120,95,53,57,0);
       let over6 = 3;
       let kickb = 0;
       let cornerkickW = 0;
       let middlewareR = 1;
      while ((cornerkickW + 2) == 1) {
         over6 /= Math.max(1, 3);
         break;
      }
         over6 += middlewareR;
      let questiconS = middlewareR <= 6263073;
      do {
          let spinner9 = false;
          let dplusL = 3.0;
         middlewareR %= Math.max(2, 3 ^ middlewareR);
         spinner9 = dplusL <= 67.40 && spinner9;
         dplusL += ((spinner9 ? 1 : 5) - parseInt(`${dplusL}`));
         if (questiconS) {
            break;
         }
      } while (questiconS && (cornerkickW == middlewareR));
          let lightU = 1;
          let mbbid4 = String.fromCharCode(99,117,109,101,95,116,95,49,0);
          let yellowtored1 = 3.0;
         cornerkickW ^= (mbbid4 == String.fromCharCode(71,0) ? mbbid4.length : lightU);
         lightU >>= Math.min(Math.abs(parseInt(`${yellowtored1}`) ^ parseInt(`${yellowtored1}`)), 5);
      let iconlogoutD = arrowdownZ == String.fromCharCode(117,53,105,0);
      do {
          let selld = String.fromCharCode(101,118,100,110,115,0);
          let libruntimeexecutorD = String.fromCharCode(98,95,53,95,97,112,112,101,97,114,101,100,0);
          let fill0 = 3.0;
          let bottoma = 3.0;
         arrowdownZ = `${3 + parseInt(`${fill0}`)}`;
         selld += `${libruntimeexecutorD.length}`;
         libruntimeexecutorD = "2";
         fill0 += 1 | libruntimeexecutorD.length;
         bottoma /= Math.max(4, parseFloat(`${libruntimeexecutorD.length}`));
         if (iconlogoutD) {
            break;
         }
      } while (iconlogoutD && ((over6 - arrowdownZ.length) < 3));
      let detailK = 7406530 >= kickb;
      do {
         kickb >>= Math.min(4, Math.abs(1));
         if (detailK) {
            break;
         }
      } while (detailK && (5 == (5 << (Math.min(4, arrowdownZ.length)))));
      if ((over6 >> (Math.min(2, Math.abs(kickb)))) < 4) {
          let membershipn = 2.0;
         over6 -= cornerkickW;
         membershipn *= parseFloat(`${parseInt(`${membershipn}`)}`);
      }
      let libfollyK = middlewareR <= 4910844;
      do {
         middlewareR *= over6 & cornerkickW;
         if (libfollyK) {
            break;
         }
      } while (libfollyK && (3 == middlewareR));
         kickb |= (arrowdownZ == String.fromCharCode(100,0) ? arrowdownZ.length : over6);
      for (let t = 0; t < 3; t++) {
         arrowdownZ += `${middlewareR}`;
      }
      if (3 >= (3 * middlewareR)) {
         middlewareR -= over6;
      }
          let lesst: Array<any> = [66, 79, 187];
         middlewareR /= Math.max(5, cornerkickW);
         lesst = [lesst.length * 1];
      while (2 <= (1 ^ kickb)) {
          let langkey4 = String.fromCharCode(112,95,56,51,95,100,111,119,110,114,105,103,104,116,0);
          let iconqqI: Array<any> = [String.fromCharCode(103,114,97,100,105,101,110,116,95,113,95,57,53,0), String.fromCharCode(97,112,105,115,0)];
          let canvas5 = 0;
          let mail3 = 4.0;
          let yellowcirclebgO: Array<any> = [561, 194];
         middlewareR *= 2;
         langkey4 = `${yellowcirclebgO.length}`;
         iconqqI.push(langkey4.length);
         canvas5 /= Math.max(2, 1);
         mail3 *= (langkey4 == String.fromCharCode(56,0) ? langkey4.length : parseInt(`${mail3}`));
         yellowcirclebgO = [1 - parseInt(`${mail3}`)];
         break;
      }
          let interstitialO = 5.0;
         cornerkickW >>= Math.min(Math.abs(3 / (Math.max(9, cornerkickW))), 3);
         interstitialO /= Math.max(1, 3);
         kickb |= cornerkickW - middlewareR;
      overlayS = (rewindN - signinupZ) == 64.21;
   }
       let dice5 = false;
       let basketballhometeamI = 2;
       let halffieldimageu = 4.0;
         halffieldimageu += (parseInt(`${halffieldimageu}`) >> (Math.min(1, Math.abs((dice5 ? 3 : 2)))));
          let baiduadss = 1.0;
         dice5 = halffieldimageu > 21.97;
         baiduadss += parseFloat(`${parseInt(`${baiduadss}`)}`);
      let ajaxA = 5667874 >= basketballhometeamI;
      do {
          let upgradeu = String.fromCharCode(99,112,117,105,100,95,57,95,52,56,0);
          let linec = String.fromCharCode(115,95,57,49,95,120,97,115,109,0);
         basketballhometeamI /= Math.max(2, (String.fromCharCode(65,0) == upgradeu ? parseInt(`${halffieldimageu}`) : upgradeu.length));
         linec += `${2 / (Math.max(10, linec.length))}`;
         if (ajaxA) {
            break;
         }
      } while (ajaxA && (2.62 <= (basketballhometeamI / (Math.max(halffieldimageu, 9)))));
      for (let i = 0; i < 3; i++) {
          let collectionJ = String.fromCharCode(99,97,112,112,101,100,95,48,95,57,0);
          let type_lL: Map<any, any> = new Map([[String.fromCharCode(114,112,99,115,95,116,95,53,0),33], [String.fromCharCode(101,118,101,110,116,0),896], [String.fromCharCode(98,108,97,107,101,115,0),820]]);
          let toponB = String.fromCharCode(115,95,49,50,0);
         basketballhometeamI >>= Math.min(3, Math.abs(1 | basketballhometeamI));
         collectionJ += `${collectionJ.length}`;
         type_lL = new Map([[`${type_lL.size}`, 1 * collectionJ.length]]);
         toponB += "1";
      }
      let manifestY = 6687520 >= basketballhometeamI;
      do {
         basketballhometeamI %= Math.max(1, 3 >> (Math.min(Math.abs(basketballhometeamI), 1)));
         if (manifestY) {
            break;
         }
      } while ((dice5) && manifestY);
      for (let u = 0; u < 3; u++) {
         dice5 = !dice5 && basketballhometeamI > 23;
      }
      let matchinactiveQ = dice5 ? !dice5 : dice5;
      do {
          let networkd: Map<any, any> = new Map([[String.fromCharCode(101,95,53,56,95,116,111,111,108,115,0),true ], [String.fromCharCode(117,95,53,49,95,118,105,100,101,111,0),true ]]);
          let singaporeZ = 1.0;
         dice5 = basketballhometeamI <= 74 || halffieldimageu <= 55.0;
         networkd = new Map([[`${networkd.size}`, networkd.size >> (Math.min(Math.abs(1), 5))]]);
         singaporeZ -= networkd.size ^ 2;
         if (matchinactiveQ) {
            break;
         }
      } while (matchinactiveQ && (halffieldimageu < 3.40 || 3.58 < (3.40 * halffieldimageu)));
          let iconsharen = 5.0;
          let infoa = 1;
         halffieldimageu *= 2;
         iconsharen -= parseFloat(`${parseInt(`${iconsharen}`)}`);
         infoa /= Math.max(2 * infoa, 1);
      let live4 = halffieldimageu <= 9598601.0;
      do {
         halffieldimageu += 1 << (Math.min(Math.abs(parseInt(`${halffieldimageu}`)), 4));
         if (live4) {
            break;
         }
      } while (live4 && (basketballhometeamI == 2));
      distm.set(`${halffieldimageu}`, 1 >> (Math.min(Math.abs(parseInt(`${halffieldimageu}`)), 2)));
   if (Array.from(distm.values()).includes(signinupZ)) {
      distm = new Map([[`${tailt}`, ((tailt ? 2 : 3))]]);
   }
      distm.set(`${overlayS}`, parseInt(`${signinupZ}`) ^ 3);
       let telemetryz = String.fromCharCode(107,95,51,54,95,115,109,112,116,101,104,100,98,97,114,115,0);
       let sheetL = String.fromCharCode(103,119,103,116,0);
       let configurev = 2;
         configurev <<= Math.min(3, sheetL.length);
          let imagemanagert = String.fromCharCode(116,95,52,54,95,97,117,116,104,101,110,116,104,105,99,97,116,101,0);
         telemetryz = `${imagemanagert.length << (Math.min(Math.abs(3), 1))}`;
      while (!telemetryz.startsWith(sheetL)) {
          let greenN = 1;
         telemetryz = `${sheetL.length}`;
         greenN |= greenN;
         break;
      }
      for (let l = 0; l < 1; l++) {
          let defaultplayerimg7 = String.fromCharCode(117,110,107,101,121,101,100,0);
         telemetryz += `${3 & defaultplayerimg7.length}`;
      }
      while (telemetryz.length >= 1) {
         telemetryz += `${configurev}`;
         break;
      }
         sheetL = `${sheetL.length}`;
      if ((configurev + sheetL.length) == 2) {
         configurev /= Math.max(4, telemetryz.length);
      }
         sheetL = `${3 * telemetryz.length}`;
       let whitevideolivee: Array<any> = [259, 492, 204];
      distm.set(feedback2, 3);
      distm.set(feedback2, libanen.length);
      overlayS = (tailt ? overlayS : tailt);

    try {

   if (!overlayS) {
       let backiconmask7 = 5;
         backiconmask7 /= Math.max(5, backiconmask7);
          let largebrightnessx = String.fromCharCode(114,95,49,56,95,115,112,108,105,116,115,0);
         backiconmask7 /= Math.max(largebrightnessx.length, 5);
      while (4 >= (5 << (Math.min(1, Math.abs(backiconmask7)))) && 2 >= (backiconmask7 << (Math.min(Math.abs(5), 4)))) {
          let androidL: Array<any> = [294, 787, 928];
          let albumT = String.fromCharCode(102,111,117,114,115,113,117,97,114,101,95,48,95,49,51,0);
          let q_title9: Map<any, any> = new Map([[String.fromCharCode(109,95,50,49,95,97,114,114,97,121,0),String.fromCharCode(99,97,112,97,99,105,116,121,0)], [String.fromCharCode(116,105,109,101,111,117,116,95,110,95,49,52,0),String.fromCharCode(99,95,49,53,95,115,101,109,97,110,116,105,99,97,108,108,121,0)], [String.fromCharCode(115,105,109,112,108,105,102,121,95,111,95,53,49,0),String.fromCharCode(115,101,115,115,111,110,95,119,95,49,0)]]);
         backiconmask7 |= q_title9.size;
         androidL = [albumT.length + androidL.length];
         albumT += `${albumT.length / (Math.max(2, 1))}`;
         q_title9.set(albumT, androidL.length);
         break;
      }
      overlayS = dependenciesn.endsWith(`${backiconmask7}`);
   }
   while (dependenciesn.startsWith(`${rewindN}`)) {
      rewindN *= (parseFloat(`${parseInt(`${rewindN}`) / (Math.max(3, (tailt ? 3 : 3)))}`));
      break;
   }
      overlayS = (distm.size * parseInt(`${signinupZ}`)) > 97;
   if (!overlayS) {
       let downI = 5.0;
       let clocke: Map<any, any> = new Map([[String.fromCharCode(114,95,52,50,95,109,111,99,107,115,0),577], [String.fromCharCode(108,111,110,103,116,101,114,109,95,48,95,56,52,0),727]]);
       let positionfieldU = 3.0;
       let libjsinspectorp = String.fromCharCode(112,97,115,115,116,104,114,111,117,103,104,95,97,95,57,48,0);
      let injuryE = libjsinspectorp == String.fromCharCode(116,109,49,115,105,0);
      do {
          let playlist9 = String.fromCharCode(115,113,108,105,116,101,99,104,97,110,103,101,103,114,111,117,112,95,53,95,49,49,0);
          let zoomB = 2.0;
          let main_rh = 1.0;
          let playlistK = 0.0;
         libjsinspectorp = `${playlist9.length}`;
         playlist9 = `${parseInt(`${zoomB}`)}`;
         main_rh *= parseInt(`${playlistK}`) >> (Math.min(Math.abs(parseInt(`${zoomB}`)), 5));
         playlistK /= Math.max(2, 1);
         if (injuryE) {
            break;
         }
      } while ((parseInt(`${downI}`) >= libjsinspectorp.length) && injuryE);
      while (clocke.size <= 3) {
         libjsinspectorp += `${parseInt(`${downI}`)}`;
         break;
      }
          let buildd = 2;
          let bufferI = 4;
         libjsinspectorp += "2";
         buildd >>= Math.min(Math.abs(buildd % 3), 4);
         bufferI /= Math.max(bufferI ^ 1, 4);
      if (1.41 <= positionfieldU) {
         clocke = new Map([[`${clocke.size}`, parseInt(`${positionfieldU}`) / (Math.max(1, clocke.size))]]);
      }
       let chartR = String.fromCharCode(114,101,115,105,103,110,105,110,103,0);
         downI -= parseFloat(`${libjsinspectorp.length ^ clocke.size}`);
      if (2.24 <= (5.82 - positionfieldU) && (positionfieldU - 5.82) <= 2.16) {
          let switch__I: Array<any> = [9, 707, 378];
          let delegate_ny = String.fromCharCode(119,95,52,49,95,116,101,120,116,117,114,101,100,115,112,0);
          let iconsubssuccessI = String.fromCharCode(121,95,55,95,114,105,103,104,116,109,111,115,116,0);
          let whistleorange1 = true;
         positionfieldU /= Math.max(1, 1 | parseInt(`${downI}`));
         switch__I = [(2 << (Math.min(2, Math.abs((whistleorange1 ? 2 : 5)))))];
         delegate_ny += "1";
         iconsubssuccessI += `${(String.fromCharCode(108,0) == delegate_ny ? delegate_ny.length : switch__I.length)}`;
         whistleorange1 = !delegate_ny.endsWith(`${whistleorange1}`);
      }
       let vipsportA = 1.0;
       let share_ = 4.0;
         libjsinspectorp += `${clocke.size}`;
      let showE = vipsportA >= 8588695.0;
      do {
          let xvodT = 0;
          let sendV: Map<any, any> = new Map([[String.fromCharCode(97,115,121,110,99,100,105,115,112,108,97,121,107,105,116,95,115,95,53,48,0),689], [String.fromCharCode(112,97,99,105,110,103,0),817]]);
          let texti = String.fromCharCode(100,101,115,116,114,111,121,101,100,0);
          let mbridgew = String.fromCharCode(120,100,97,105,0);
         vipsportA -= parseFloat(`${xvodT >> (Math.min(libjsinspectorp.length, 4))}`);
         xvodT >>= Math.min(Math.abs(3), 1);
         sendV = new Map([[texti, mbridgew.length]]);
         texti += `${(texti == String.fromCharCode(51,0) ? sendV.size : texti.length)}`;
         mbridgew += `${sendV.size >> (Math.min(texti.length, 5))}`;
         if (showE) {
            break;
         }
      } while ((4.30 <= (4.90 - vipsportA) && (vipsportA - positionfieldU) <= 4.90) && showE);
      let viewsH = String.fromCharCode(115,108,114,57,121,0) == chartR;
      do {
         chartR = `${(chartR == String.fromCharCode(74,0) ? parseInt(`${share_}`) : chartR.length)}`;
         if (viewsH) {
            break;
         }
      } while ((chartR.length == 5) && viewsH);
      dependenciesn += `${parseInt(`${specT}`)}`;
   }
      libanen = "3";
      specT += 1 & parseInt(`${rewindN}`);
   let graphicsF = distm.size <= 7532628;
   do {
      distm.set(libanen, 3);
      if (graphicsF) {
         break;
      }
   } while (graphicsF && (libanen.length >= 4));
      await wawaVietnam.checkPermissionAndGetoken();

       let emojiheartJ = String.fromCharCode(119,95,49,55,95,110,97,118,105,103,97,116,105,111,110,0);
      let loadingspinnerK = emojiheartJ == String.fromCharCode(57,48,122,55,114,97,114,0);
      do {
         emojiheartJ = `${2 * emojiheartJ.length}`;
         if (loadingspinnerK) {
            break;
         }
      } while (loadingspinnerK && (emojiheartJ != String.fromCharCode(82,0)));
      let targetw = emojiheartJ == String.fromCharCode(56,106,54,104,55,105,101,108,53,0);
      do {
         emojiheartJ = `${2 * emojiheartJ.length}`;
         if (targetw) {
            break;
         }
      } while (targetw && (emojiheartJ == emojiheartJ));
      let sheetB = String.fromCharCode(57,109,112,99,57,116,55,0) == emojiheartJ;
      do {
          let casta = 2.0;
          let projecte = 4;
          let sortw = String.fromCharCode(102,114,111,122,101,110,95,52,95,52,51,0);
         emojiheartJ += `${sortw.length + 2}`;
         casta /= Math.max(1, parseFloat(`${parseInt(`${casta}`)}`));
         projecte += projecte - 1;
         sortw = `${3 * projecte}`;
         if (sheetB) {
            break;
         }
      } while (sheetB && (emojiheartJ.includes(`${emojiheartJ.length}`)));
      rewindN += parseFloat(`${3 ^ parseInt(`${specT}`)}`);
   for (let s = 0; s < 3; s++) {
       let positionfields = true;
       let iconmoreF = 0;
         iconmoreF <<= Math.min(Math.abs(iconmoreF | 1), 1);
         iconmoreF ^= ((positionfields ? 3 : 2) / (Math.max(iconmoreF, 6)));
          let predictionbannern = 4;
          let expandS: Array<any> = [486, 829, 812];
          let security2 = String.fromCharCode(100,100,116,115,95,110,95,51,54,0);
         iconmoreF += 2;
         predictionbannern += 2;
         expandS = [security2.length];
         security2 = `${predictionbannern + expandS.length}`;
       let hometeamfield1 = false;
       let bgvipxvody = true;
      for (let b = 0; b < 2; b++) {
         hometeamfield1 = iconmoreF >= 77 || bgvipxvody;
      }
       let ksadN = String.fromCharCode(97,101,115,116,97,98,0);
       let whatsappk = String.fromCharCode(102,111,117,114,120,0);
      feedback2 = `${2 % (Math.max(4, iconmoreF))}`;
   }
      rewindN /= Math.max(5, parseFloat(`${parseInt(`${signinupZ}`)}`));
   while (4.47 < rewindN && (rewindN / 4.47) < 4.59) {
       let mbridge1 = String.fromCharCode(97,112,112,114,111,118,97,108,0);
      if (!mbridge1.endsWith(`${mbridge1.length}`)) {
         mbridge1 += "3";
      }
       let mountingT = String.fromCharCode(101,95,50,49,95,115,101,110,100,0);
       let verticals = String.fromCharCode(121,101,108,108,111,119,95,118,95,57,0);
      while (mbridge1.length >= 5) {
         mbridge1 += `${verticals.length}`;
         break;
      }
      rewindN *= (parseFloat(`${libanen == String.fromCharCode(56,0) ? libanen.length : dependenciesn.length}`));
      break;
   }
   if (4 <= (1 << (Math.min(1, chatroombackgroundq.length))) || 5 <= (libane3 << (Math.min(Math.abs(1), 3)))) {
       let episodesv = 4;
       let catagoryo = 3;
       let buttonD = String.fromCharCode(105,105,110,116,0);
       let backwarda = String.fromCharCode(116,114,105,97,110,103,117,108,97,116,105,111,110,95,101,95,55,56,0);
       let basketballhometeama = 5.0;
         buttonD += `${buttonD.length % (Math.max(2, 10))}`;
      for (let h = 0; h < 3; h++) {
          let whitebell9 = String.fromCharCode(103,95,51,49,95,117,110,99,104,97,110,103,101,100,0);
          let videoh = 2.0;
          let progress6 = String.fromCharCode(100,101,108,105,109,105,116,101,100,95,103,95,55,56,0);
         episodesv >>= Math.min(3, Math.abs(catagoryo));
         whitebell9 += `${3 % (Math.max(5, whitebell9.length))}`;
         videoh /= Math.max(parseFloat(`${parseInt(`${videoh}`) ^ 1}`), 3);
         progress6 += `${(progress6 == String.fromCharCode(48,0) ? parseInt(`${videoh}`) : progress6.length)}`;
      }
         buttonD += `${buttonD.length}`;
         episodesv += buttonD.length ^ 1;
       let basketballtrophyR = 3.0;
          let libzeusC = true;
         episodesv |= 3 << (Math.min(Math.abs(parseInt(`${basketballtrophyR}`)), 3));
         libzeusC = !libzeusC;
         basketballtrophyR /= Math.max(5, (String.fromCharCode(48,0) == backwarda ? backwarda.length : parseInt(`${basketballtrophyR}`)));
      for (let n = 0; n < 3; n++) {
          let umengS = String.fromCharCode(102,95,55,53,95,109,97,110,117,97,108,108,121,0);
          let libjsijniprofilerM = String.fromCharCode(122,95,50,56,95,99,111,108,115,107,105,112,0);
          let greyarrowupl: Array<any> = [String.fromCharCode(99,100,120,108,0), String.fromCharCode(111,95,57,55,95,97,99,116,105,118,97,116,105,111,110,0), String.fromCharCode(109,111,110,111,98,105,116,95,98,95,54,55,0)];
          let submitc = 1;
         catagoryo += (umengS == String.fromCharCode(70,0) ? parseInt(`${basketballhometeama}`) : umengS.length);
         libjsijniprofilerM += `${greyarrowupl.length}`;
         greyarrowupl.push(1);
         submitc += submitc % (Math.max(libjsijniprofilerM.length, 4));
      }
         episodesv += catagoryo;
      let iconcalendarD = catagoryo >= 8822988;
      do {
         catagoryo += (String.fromCharCode(65,0) == buttonD ? parseInt(`${basketballhometeama}`) : buttonD.length);
         if (iconcalendarD) {
            break;
         }
      } while (iconcalendarD && ((buttonD.length - 1) > 5));
       let iconbellactivee = String.fromCharCode(119,95,56,57,95,98,121,116,101,0);
      for (let e = 0; e < 1; e++) {
         episodesv *= parseInt(`${basketballhometeama}`) + 2;
      }
         iconbellactivee += `${3 | parseInt(`${basketballhometeama}`)}`;
      if (5.15 > (basketballtrophyR - 4.86)) {
         basketballtrophyR -= 1;
      }
      let inactivej = buttonD.length >= 5112450;
      do {
          let basketball4: Map<any, any> = new Map([[String.fromCharCode(99,97,108,99,108,117,108,97,116,101,0),875], [String.fromCharCode(110,111,114,109,97,108,105,122,101,100,95,121,95,52,53,0),692]]);
          let productT = 5;
          let interstitialD = String.fromCharCode(115,113,114,116,110,101,103,0);
          let push4 = 4.0;
         buttonD = `${parseInt(`${basketballhometeama}`) << (Math.min(5, Math.abs(3)))}`;
         basketball4 = new Map([[interstitialD, interstitialD.length]]);
         productT &= 1 / (Math.max(7, interstitialD.length));
         push4 /= Math.max(5, interstitialD.length);
         if (inactivej) {
            break;
         }
      } while (inactivej && (buttonD == String.fromCharCode(83,0) && 5 == backwarda.length));
      chatroombackgroundq += "3";
   }
       let proxyC = 5;
       let librrc8 = 3.0;
         proxyC |= parseInt(`${librrc8}`) * 1;
          let ewardedw: Map<any, any> = new Map([[String.fromCharCode(103,111,111,100,0),789], [String.fromCharCode(102,95,55,48,95,109,97,105,110,115,116,97,103,101,0),330]]);
          let controlsX: Array<any> = [280, 900, 548];
          let homeu = 0.0;
         proxyC -= 1 << (Math.min(1, controlsX.length));
         ewardedw.set(`${homeu}`, ewardedw.size ^ parseInt(`${homeu}`));
         controlsX.push(parseInt(`${homeu}`));
      feedback2 = `${3 << (Math.min(4, dependenciesn.length))}`;
   let corneri = feedback2.length <= 5446060;
   do {
      feedback2 += `${dependenciesn.length}`;
      if (corneri) {
         break;
      }
   } while (corneri && (!feedback2.endsWith(`${signinupZ}`)));
      wawaVietnam.subscibeToTopic("insidertest");
    } catch (err) {

   if (2.85 <= (specT + 3.15)) {
      specT *= 2;
   }
      chatroombackgroundq = `${(dependenciesn == String.fromCharCode(67,0) ? dependenciesn.length : parseInt(`${signinupZ}`))}`;
      signinupZ += 3;
   let videocommon4 = tailt ? !tailt : tailt;
   do {
       let moreS = String.fromCharCode(115,104,111,114,116,99,117,116,95,122,95,55,48,0);
       let station4: Map<any, any> = new Map([[String.fromCharCode(108,95,53,50,95,115,101,108,101,99,116,105,118,101,108,121,0),559], [String.fromCharCode(112,111,108,108,115,0),880]]);
      while (4 <= (3 ^ moreS.length) && 4 <= (moreS.length ^ 3)) {
          let codegenp = String.fromCharCode(102,111,110,116,99,111,110,102,105,103,95,121,95,50,52,0);
         station4 = new Map([[`${station4.size}`, codegenp.length / 2]]);
         break;
      }
         moreS += `${2 * moreS.length}`;
      if ((station4.size * moreS.length) > 4 || (station4.size * 4) > 2) {
         station4.set(`${moreS}`, 3 << (Math.min(1, Math.abs(station4.size))));
      }
         station4 = new Map([[`${station4.size}`, 3 / (Math.max(1, station4.size))]]);
         station4.set(`${moreS}`, station4.size);
         moreS = `${(moreS == String.fromCharCode(122,0) ? station4.size : moreS.length)}`;
      tailt = station4.size == 92 || overlayS;
      if (videocommon4) {
         break;
      }
   } while (videocommon4 && (!feedback2.startsWith(`${tailt}`)));
      signinupZ -= parseInt(`${specT}`);
   if (5 == libanen.length) {
      chatroombackgroundq += `${((tailt ? 2 : 5) / (Math.max(10, dependenciesn.length)))}`;
   }
   while (tailt) {
       let basketballplayerplaceholderK = String.fromCharCode(116,119,111,115,116,97,103,101,95,54,95,49,49,0);
      if (basketballplayerplaceholderK.length > basketballplayerplaceholderK.length) {
          let containerI = String.fromCharCode(103,95,49,56,95,98,105,110,107,97,117,100,105,111,0);
          let header4 = 2.0;
          let fnewarchdefaults7: Map<any, any> = new Map([[String.fromCharCode(115,117,99,99,101,115,115,102,117,108,108,121,0),584], [String.fromCharCode(99,112,108,115,99,97,108,101,115,0),974]]);
         basketballplayerplaceholderK += `${parseInt(`${header4}`) & 3}`;
         containerI += `${containerI.length}`;
         header4 += parseFloat(`${fnewarchdefaults7.size ^ containerI.length}`);
         fnewarchdefaults7.set(`${containerI}`, (String.fromCharCode(114,0) == containerI ? fnewarchdefaults7.size : containerI.length));
      }
       let fullZ = false;
       let close5 = false;
         close5 = basketballplayerplaceholderK.includes(`${close5}`);
      tailt = (27 < (distm.size | (overlayS ? distm.size : 38)));
      break;
   }
      console.log("Firebase init failed", err);
    }
  };

  const [deviceName, setDeviceName] = useState("");

  DeviceInfo.getDeviceName().then((d) => {
    setDeviceName(d.toLowerCase());
  });
  const handleTabletFold = async () => {
       let collectionh = String.fromCharCode(100,109,97,99,95,98,95,49,50,0);
    let closey = 5.0;
    let profileactiveH = String.fromCharCode(109,97,115,115,95,99,95,50,57,0);
    let tumbnailW = String.fromCharCode(111,95,49,49,95,111,117,116,98,111,117,110,100,0);
    let positionfieldy = 1.0;
    let securityM = 1.0;
    let gifgoalB = String.fromCharCode(99,95,49,54,0);
    let stylee = String.fromCharCode(108,111,103,111,95,98,95,52,57,0);
    let gdtadvF = 4;
    let iconwatchn = String.fromCharCode(110,111,116,99,104,95,56,95,54,57,0);
    let bggradientv = String.fromCharCode(103,114,97,110,117,108,97,114,105,116,121,0);
    let serviceE = String.fromCharCode(116,104,114,101,115,104,111,108,100,101,100,95,49,95,50,48,0);
    let mbnativeO = String.fromCharCode(112,95,49,52,95,108,101,116,116,101,114,0);
    let main_ul = false;
      iconwatchn += `${parseInt(`${positionfieldy}`)}`;
   for (let g = 0; g < 3; g++) {
       let subbasketballplayerC = 2.0;
      if (5.44 == (subbasketballplayerC + subbasketballplayerC)) {
         subbasketballplayerC += parseInt(`${subbasketballplayerC}`);
      }
      let subbasketballplayerv = 6147185.0 <= subbasketballplayerC;
      do {
          let iconbackwhitem: Array<any> = [999, 428, 552];
          let nalyticsW = String.fromCharCode(108,97,99,105,110,103,95,48,95,53,48,0);
         subbasketballplayerC *= iconbackwhitem.length & parseInt(`${subbasketballplayerC}`);
         iconbackwhitem.push(nalyticsW.length);
         nalyticsW = `${3 | nalyticsW.length}`;
         if (subbasketballplayerv) {
            break;
         }
      } while ((subbasketballplayerC <= 4.38) && subbasketballplayerv);
         subbasketballplayerC -= parseInt(`${subbasketballplayerC}`) | 1;
      closey += parseFloat(`${iconwatchn.length << (Math.min(Math.abs(2), 2))}`);
   }
   while (1.92 < (securityM - 5.43) || (profileactiveH.length << (Math.min(Math.abs(2), 5))) < 3) {
       let mappingv = String.fromCharCode(109,111,110,111,116,111,110,105,116,121,0);
       let predictionbuttonv = String.fromCharCode(99,95,54,0);
       let code1 = String.fromCharCode(121,95,52,54,95,104,121,115,99,97,108,101,0);
         code1 = `${predictionbuttonv.length}`;
         predictionbuttonv += `${2 + code1.length}`;
          let greyarrowupy: Array<any> = [25, 941];
          let videocommonK = String.fromCharCode(104,117,100,95,48,95,51,48,0);
          let gradlewS = 0;
         mappingv += `${3 + mappingv.length}`;
         greyarrowupy = [gradlewS];
         videocommonK += `${videocommonK.length << (Math.min(Math.abs(3), 2))}`;
         gradlewS += 1;
      if (mappingv.includes(code1)) {
         code1 = "3";
      }
      while (code1.length <= predictionbuttonv.length) {
          let predictionarrowj: Map<any, any> = new Map([[String.fromCharCode(116,101,115,116,115,95,53,95,56,55,0),386], [String.fromCharCode(111,98,106,110,105,100,0),801]]);
          let homeiconn: Array<any> = [918, 378, 456];
          let historyq = 5.0;
         predictionbuttonv = `${homeiconn.length << (Math.min(code1.length, 4))}`;
         predictionarrowj = new Map([[`${predictionarrowj.size}`, 1 >> (Math.min(4, Math.abs(parseInt(`${historyq}`))))]]);
         homeiconn = [parseInt(`${historyq}`) & predictionarrowj.size];
         break;
      }
      if (mappingv == String.fromCharCode(110,0)) {
          let footballfieldG = 4.0;
          let libavdevicel: Array<any> = [158, 981, 902];
          let mbbid6: Array<any> = [60, 6];
         predictionbuttonv += `${code1.length << (Math.min(4, predictionbuttonv.length))}`;
         footballfieldG -= parseFloat(`${libavdevicel.length - 3}`);
         libavdevicel = [1];
         mbbid6.push(libavdevicel.length);
      }
          let iconsaveimageF = String.fromCharCode(115,105,109,117,108,97,116,101,100,95,112,95,55,0);
          let referrer8: Array<any> = [103, 529];
          let spinnerx: Array<any> = [763, 137];
         predictionbuttonv += `${predictionbuttonv.length ^ iconsaveimageF.length}`;
         iconsaveimageF = `${referrer8.length}`;
         referrer8.push(referrer8.length / 3);
         spinnerx.push(referrer8.length);
          let logink: Array<any> = [916, 902];
          let basketballtrophya = String.fromCharCode(107,95,55,52,95,104,97,114,100,119,97,114,101,0);
         predictionbuttonv += `${2 * predictionbuttonv.length}`;
         logink.push(2);
         basketballtrophya = `${(String.fromCharCode(56,0) == basketballtrophya ? basketballtrophya.length : logink.length)}`;
      for (let n = 0; n < 2; n++) {
          let yellowcirclebgz: Array<any> = [431, 880];
         predictionbuttonv = `${code1.length}`;
         yellowcirclebgz.push(yellowcirclebgz.length * yellowcirclebgz.length);
      }
      profileactiveH += `${gifgoalB.length}`;
      break;
   }

    Dimensions.addEventListener("change", (e) => {

   if (2 == (gifgoalB.length % 1)) {
      gifgoalB += `${profileactiveH.length}`;
   }
      gdtadvF ^= 2 * tumbnailW.length;
   while (5.32 <= positionfieldy) {
      positionfieldy /= Math.max(gdtadvF | bggradientv.length, 1);
      break;
   }
      const includesKeywords = [
        "flip",
        "fold",
        "mate x3",
        "mate xs",
      ].some((keyword) => deviceName.includes(keyword));

       let ewarded8 = String.fromCharCode(109,95,49,57,95,100,105,114,110,97,109,101,0);
       let eyeopeng: Map<any, any> = new Map([[String.fromCharCode(112,114,111,99,101,115,115,95,122,95,57,54,0),44], [String.fromCharCode(111,118,101,114,108,97,121,0),354], [String.fromCharCode(110,95,51,51,95,114,101,112,108,97,121,101,114,0),548]]);
          let mored = 5;
          let calendarI = String.fromCharCode(118,108,98,117,102,95,49,95,49,48,0);
         eyeopeng.set(calendarI, 1 ^ calendarI.length);
         mored *= 1;
      if ((4 << (Math.min(4, ewarded8.length))) == 3 && (eyeopeng.size << (Math.min(ewarded8.length, 2))) == 4) {
         ewarded8 = "1";
      }
          let with_9E = 2.0;
          let rncorel = String.fromCharCode(114,97,100,102,0);
          let rewardvideom = false;
         eyeopeng = new Map([[`${eyeopeng.size}`, (String.fromCharCode(85,0) == ewarded8 ? eyeopeng.size : ewarded8.length)]]);
         with_9E += (parseFloat(`${(rewardvideom ? 4 : 5)}`));
         rncorel += `${((rewardvideom ? 1 : 1) + 2)}`;
          let calendarB = String.fromCharCode(117,95,50,49,95,100,117,114,97,116,105,111,110,115,0);
         ewarded8 += `${(ewarded8 == String.fromCharCode(73,0) ? ewarded8.length : eyeopeng.size)}`;
         calendarB = `${calendarB.length}`;
         ewarded8 = `${eyeopeng.size}`;
      if (3 >= (eyeopeng.size / (Math.max(ewarded8.length, 2))) && (3 / (Math.max(1, eyeopeng.size))) >= 5) {
         eyeopeng.set(ewarded8, ewarded8.length * 1);
      }
      collectionh = `${1 + iconwatchn.length}`;
   if (stylee.length == collectionh.length) {
       let gradlewd: Array<any> = [440, 678, 727];
       let configE = 0.0;
       let roomR: Array<any> = [283, 307];
       let flagh: Map<any, any> = new Map([[String.fromCharCode(100,95,50,49,95,114,101,109,111,118,101,114,0),80], [String.fromCharCode(99,95,53,48,95,100,97,116,97,98,108,111,99,107,0),145]]);
       let combinedM = String.fromCharCode(101,121,98,111,97,114,100,95,100,95,54,48,0);
          let positionfieldb = 3;
         configE *= combinedM.length;
         positionfieldb %= Math.max(4, positionfieldb);
       let statsnomoredatae: Array<any> = [String.fromCharCode(105,95,56,55,95,112,97,114,101,110,0), String.fromCharCode(120,109,117,108,116,0), String.fromCharCode(105,95,51,49,95,100,99,97,100,115,112,0)];
      if ((4 % (Math.max(6, combinedM.length))) <= 5 && (combinedM.length % 4) <= 5) {
         statsnomoredatae = [statsnomoredatae.length * 2];
      }
       let bellX = String.fromCharCode(115,95,54,95,116,101,114,109,115,101,116,0);
       let crownp = String.fromCharCode(103,95,51,56,95,115,101,113,117,101,110,116,105,97,108,0);
          let exampleimagei = String.fromCharCode(102,95,53,57,95,115,112,101,97,107,101,114,0);
          let bgvipxvodF = String.fromCharCode(105,110,118,105,115,105,98,108,101,0);
          let airbnbstar7 = 1.0;
         configE += combinedM.length;
         exampleimagei += `${exampleimagei.length}`;
         bgvipxvodF += "2";
         airbnbstar7 += 2 >> (Math.min(4, bgvipxvodF.length));
       let latnG = String.fromCharCode(99,108,108,105,95,48,95,49,53,0);
      let policyD = gradlewd.length <= 8162420;
      do {
         gradlewd = [gradlewd.length - crownp.length];
         if (policyD) {
            break;
         }
      } while ((5 == gradlewd.length) && policyD);
      for (let g = 0; g < 2; g++) {
         latnG += "3";
      }
      let floatingc = configE >= 6381867.0;
      do {
         configE += latnG.length & roomR.length;
         if (floatingc) {
            break;
         }
      } while ((2 >= gradlewd.length) && floatingc);
      let libavdeviceT = 9316439 >= bellX.length;
      do {
         bellX = `${2 + flagh.size}`;
         if (libavdeviceT) {
            break;
         }
      } while (libavdeviceT && ((bellX.length | 2) <= 2));
         roomR.push(1 + combinedM.length);
      if (latnG.length < 5) {
         crownp += `${statsnomoredatae.length * 3}`;
      }
      if (crownp == latnG) {
          let termsd: Array<any> = [833, 294, 947];
          let detaile = String.fromCharCode(106,95,54,55,95,98,97,115,105,115,0);
         latnG = `${1 / (Math.max(2, roomR.length))}`;
         termsd = [(detaile == String.fromCharCode(107,0) ? termsd.length : detaile.length)];
      }
         configE += bellX.length << (Math.min(combinedM.length, 1));
      stylee += `${parseInt(`${configE}`) * iconwatchn.length}`;
   }
   while (collectionh.includes(`${tumbnailW.length}`)) {
      collectionh = `${(String.fromCharCode(76,0) == gifgoalB ? tumbnailW.length : gifgoalB.length)}`;
      break;
   }
      if (DeviceInfo.isTablet() || includesKeywords) {

       let downloadingx: Array<any> = [89, 904];
       let spinnere = 0;
      if ((1 | downloadingx.length) > 4) {
         downloadingx.push(3);
      }
      let diceR = 6549619 <= spinnere;
      do {
          let searchbar9 = 0;
          let imagenetworkerrk = 5.0;
          let arrowright6: Map<any, any> = new Map([[String.fromCharCode(115,117,109,109,95,100,95,50,53,0),797], [String.fromCharCode(101,110,99,97,112,115,117,108,97,116,101,100,0),43], [String.fromCharCode(109,117,116,97,98,105,108,105,116,121,0),508]]);
          let videocommonJ = String.fromCharCode(97,108,115,101,95,98,95,52,48,0);
         spinnere >>= Math.min(Math.abs(videocommonJ.length - 2), 1);
         searchbar9 -= 2;
         imagenetworkerrk /= Math.max(2, parseFloat(`${searchbar9}`));
         arrowright6.set(`${imagenetworkerrk}`, arrowright6.size);
         videocommonJ += `${3 & parseInt(`${imagenetworkerrk}`)}`;
         if (diceR) {
            break;
         }
      } while ((2 > (4 * downloadingx.length)) && diceR);
         downloadingx.push(spinnere ^ 1);
          let nterstitialU = 3.0;
         downloadingx = [parseInt(`${nterstitialU}`) / 1];
          let nativeexZ = 3.0;
          let whitetickB = 4.0;
          let reviewv: Map<any, any> = new Map([[String.fromCharCode(97,95,49,54,95,115,105,103,101,120,112,0),44], [String.fromCharCode(99,111,110,102,105,103,117,114,101,114,0),89]]);
         downloadingx = [3];
         nativeexZ /= Math.max(3, parseInt(`${whitetickB}`) ^ 2);
         whitetickB *= parseInt(`${nativeexZ}`) ^ 3;
         reviewv.set(`${whitetickB}`, reviewv.size - 2);
         spinnere /= Math.max(downloadingx.length & spinnere, 4);
      bggradientv += `${spinnere}`;
   while ((gdtadvF / (Math.max(securityM, 2))) < 5.71 && 2.76 < (5.71 / (Math.max(10, securityM)))) {
       let catalogW = 0;
       let mapbufferZ = String.fromCharCode(120,105,112,104,95,57,95,55,0);
       let codegenA = String.fromCharCode(112,107,99,115,95,107,95,49,54,0);
       let arrowupH = String.fromCharCode(115,99,97,116,116,101,114,95,50,95,54,0);
       let homeloadinge = String.fromCharCode(112,111,115,115,105,98,108,101,95,113,95,55,56,0);
       let chartQ = 2.0;
       let episodesT = 3.0;
         mapbufferZ += `${codegenA.length % 2}`;
      for (let y = 0; y < 2; y++) {
         homeloadinge += `${codegenA.length / (Math.max(homeloadinge.length, 1))}`;
      }
         mapbufferZ = `${catalogW + 1}`;
      if ((parseInt(`${chartQ}`) * 5) > 1 || 5.14 > (2.96 * chartQ)) {
         codegenA += `${arrowupH.length ^ 1}`;
      }
      while (codegenA == String.fromCharCode(86,0) && mapbufferZ == String.fromCharCode(85,0)) {
         mapbufferZ = `${3 - codegenA.length}`;
         break;
      }
         chartQ -= parseInt(`${chartQ}`);
          let hoverV: Array<any> = [33, 584];
         mapbufferZ = `${homeloadinge.length}`;
         hoverV.push(hoverV.length >> (Math.min(hoverV.length, 1)));
      for (let g = 0; g < 2; g++) {
         codegenA += `${arrowupH.length}`;
      }
      while (arrowupH == String.fromCharCode(100,0)) {
         codegenA = `${codegenA.length - parseInt(`${episodesT}`)}`;
         break;
      }
         codegenA = `${codegenA.length}`;
         arrowupH += `${codegenA.length}`;
         mapbufferZ += `${1 << (Math.min(4, Math.abs(catalogW)))}`;
      if (3 <= mapbufferZ.length) {
         mapbufferZ = `${2 >> (Math.min(Math.abs(parseInt(`${episodesT}`)), 1))}`;
      }
         arrowupH += "1";
      securityM /= Math.max(4, homeloadinge.length);
      break;
   }
      securityM /= Math.max(tumbnailW.length, 1);
        setWidth(Number(Dimensions.get("window").width));

   let componentregistryG = securityM <= 7445193.0;
   do {
      securityM *= tumbnailW.length;
      if (componentregistryG) {
         break;
      }
   } while (componentregistryG && (5 >= (parseInt(`${securityM}`) / (Math.max(serviceE.length, 10))) && (2.16 / (Math.max(10, securityM))) >= 4.74));
      serviceE += `${collectionh.length << (Math.min(Math.abs(3), 3))}`;
   let render5 = 8177693 <= tumbnailW.length;
   do {
      tumbnailW = `${(gifgoalB == String.fromCharCode(71,0) ? gifgoalB.length : bggradientv.length)}`;
      if (render5) {
         break;
      }
   } while ((!bggradientv.endsWith(`${tumbnailW.length}`)) && render5);
        if (data.carousel.length > 0) {

   if (profileactiveH == String.fromCharCode(120,0) && gifgoalB.length == 2) {
      gifgoalB += "1";
   }
       let smallP = 4;
         smallP ^= smallP - 1;
      for (let n = 0; n < 1; n++) {
         smallP >>= Math.min(2, Math.abs(smallP));
      }
      if (1 >= (2 / (Math.max(4, smallP))) && 5 >= (smallP / (Math.max(2, 6)))) {
         smallP %= Math.max(1, 3);
      }
      positionfieldy += (stylee == String.fromCharCode(105,0) ? parseInt(`${securityM}`) : stylee.length);
   for (let z = 0; z < 1; z++) {
      positionfieldy += parseInt(`${securityM}`) + 2;
   }
          Image.getSize(data.carousel[0].carousel_pic_mobile, (w, h) => {

       let awayplayerw = 3.0;
      if ((1.64 * awayplayerw) == 4.21 && 1.30 == (1.64 * awayplayerw)) {
         awayplayerw /= Math.max(5, parseFloat(`${2 | parseInt(`${awayplayerw}`)}`));
      }
      if (1.57 > awayplayerw) {
         awayplayerw -= parseFloat(`${parseInt(`${awayplayerw}`) + 2}`);
      }
      while ((awayplayerw / (Math.max(10, awayplayerw))) == 5.33 && (awayplayerw / 5.33) == 1.48) {
         awayplayerw += parseFloat(`${parseInt(`${awayplayerw}`)}`);
         break;
      }
      closey -= parseFloat(`${1}`);
      securityM += parseInt(`${securityM}`);
   for (let v = 0; v < 1; v++) {
      profileactiveH = `${collectionh.length}`;
   }
            setImgRatio(w / h);
          });
        }
        handleRefresh();
      }
    });
  };

  
  const handleRefresh = async () => {
       let foregroundc = String.fromCharCode(101,110,113,117,101,117,101,100,0);
    let privacyZ = String.fromCharCode(98,105,116,115,116,114,105,110,103,95,99,95,50,48,0);
    let profilepice = String.fromCharCode(109,112,101,103,117,116,105,108,115,95,101,95,55,0);
    let inouttargetred2 = 4;
    let castingE = String.fromCharCode(112,115,97,0);
    let iconcalendarD = 5.0;
    let manifestu = 4.0;
    let holderK = 3.0;
    let yellowcirclebg_ = String.fromCharCode(116,104,101,105,114,0);
    let dialogk = false;
   while (foregroundc.length == inouttargetred2) {
      foregroundc += `${(privacyZ == String.fromCharCode(114,0) ? foregroundc.length : privacyZ.length)}`;
      break;
   }
      profilepice = `${parseInt(`${manifestu}`) >> (Math.min(privacyZ.length, 5))}`;
       let checkboxC: Map<any, any> = new Map([[String.fromCharCode(100,101,115,116,111,114,121,95,116,95,54,55,0),938], [String.fromCharCode(106,95,49,56,95,104,111,117,114,115,0),45], [String.fromCharCode(119,95,50,51,95,112,114,111,116,101,99,116,101,100,0),958]]);
         checkboxC = new Map([[`${checkboxC.size}`, checkboxC.size >> (Math.min(2, Math.abs(checkboxC.size)))]]);
      let review1 = checkboxC.size <= 6741942;
      do {
          let forwardD = true;
          let h_hash6 = 5.0;
          let reminderr = String.fromCharCode(97,117,116,111,112,108,97,121,105,110,103,95,120,95,57,50,0);
         checkboxC.set(reminderr, reminderr.length);
         forwardD = 92.61 > h_hash6 || !forwardD;
         h_hash6 *= (parseInt(`${h_hash6}`) | (forwardD ? 1 : 1));
         if (review1) {
            break;
         }
      } while (((5 / (Math.max(7, checkboxC.size))) == 5 || 1 == (5 / (Math.max(4, checkboxC.size)))) && review1);
      for (let y = 0; y < 2; y++) {
         checkboxC.set(`${checkboxC.size}`, checkboxC.size);
      }
      manifestu *= parseFloat(`${inouttargetred2 | profilepice.length}`);
       let description_k9 = String.fromCharCode(100,105,99,101,95,97,95,54,56,0);
       let thailandq = 5.0;
          let subtextG = 1.0;
          let runtimeschedulerQ = String.fromCharCode(97,112,112,114,101,99,105,97,116,101,100,104,95,97,95,50,48,0);
          let libjsinspectorg = 4.0;
         thailandq /= Math.max(parseFloat(`${parseInt(`${subtextG}`) >> (Math.min(Math.abs(2), 2))}`), 3);
         subtextG += parseFloat(`${parseInt(`${libjsinspectorg}`) - 2}`);
         runtimeschedulerQ += `${parseInt(`${libjsinspectorg}`)}`;
         description_k9 = `${parseInt(`${thailandq}`)}`;
      if ((4 & description_k9.length) == 2) {
         thailandq *= parseFloat(`${1 >> (Math.min(1, description_k9.length))}`);
      }
      if (4 >= (description_k9.length % (Math.max(3, 10))) || (thailandq - 5.5) >= 3.98) {
         thailandq -= parseFloat(`${parseInt(`${thailandq}`)}`);
      }
         description_k9 = `${description_k9.length << (Math.min(4, Math.abs(parseInt(`${thailandq}`))))}`;
      for (let e = 0; e < 3; e++) {
         thailandq += parseFloat(`${description_k9.length | parseInt(`${thailandq}`)}`);
      }
      profilepice = `${3 - parseInt(`${iconcalendarD}`)}`;

    setIsRefreshing(true);

      iconcalendarD *= parseFloat(`${privacyZ.length * 3}`);
   let notificationfillemptyX = 7320633.0 <= iconcalendarD;
   do {
       let sellmathbackgroundO: Array<any> = [557, 460, 956];
       let pushn = false;
       let middlesoundv = 4.0;
         sellmathbackgroundO = [sellmathbackgroundO.length];
      for (let r = 0; r < 2; r++) {
         pushn = !pushn && 84.4 <= middlesoundv;
      }
       let footballfiledlayoutM = String.fromCharCode(119,95,51,95,111,118,101,114,105,100,100,101,110,0);
       let verticalk = String.fromCharCode(101,95,51,53,95,102,108,97,99,100,115,112,0);
      while (!footballfiledlayoutM.startsWith(`${pushn}`)) {
         pushn = pushn && sellmathbackgroundO.length >= 40;
         break;
      }
      while (sellmathbackgroundO.length == 2) {
         pushn = 92 == footballfiledlayoutM.length && String.fromCharCode(74,0) == verticalk;
         break;
      }
         sellmathbackgroundO = [(parseInt(`${middlesoundv}`) - (pushn ? 3 : 2))];
         sellmathbackgroundO.push(((pushn ? 2 : 4)));
       let iconeyej = 1.0;
          let datan = false;
          let type_41_ = String.fromCharCode(114,105,118,97,116,101,95,48,95,54,52,0);
         iconeyej -= parseFloat(`${footballfiledlayoutM.length}`);
         datan = !datan;
         type_41_ += `${type_41_.length}`;
      iconcalendarD /= Math.max((parseFloat(`${(pushn ? 2 : 2) / (Math.max(profilepice.length, 1))}`)), 2);
      if (notificationfillemptyX) {
         break;
      }
   } while ((2.49 <= (iconcalendarD + 2.65) && (manifestu - 2.65) <= 2.88) && notificationfillemptyX);
       let klevinA = String.fromCharCode(114,95,49,52,95,97,115,115,111,99,105,97,116,105,111,110,0);
       let libjsijniprofilerC: Map<any, any> = new Map([[String.fromCharCode(99,97,112,105,116,97,108,115,95,98,95,52,53,0),255], [String.fromCharCode(109,95,51,48,95,109,112,99,100,97,116,97,0),957], [String.fromCharCode(120,95,56,48,95,109,97,110,97,103,101,97,98,108,101,0),400]]);
       let data3 = true;
      for (let y = 0; y < 2; y++) {
         data3 = libjsijniprofilerC.get(`${data3}`) == null;
      }
      if (!data3) {
         libjsijniprofilerC.set(`${klevinA}`, libjsijniprofilerC.size & klevinA.length);
      }
      for (let a = 0; a < 3; a++) {
         klevinA += `${2 >> (Math.min(5, Math.abs(libjsijniprofilerC.size)))}`;
      }
          let window_pxx: Map<any, any> = new Map([[String.fromCharCode(97,97,115,99,95,118,95,50,0),false ], [String.fromCharCode(104,95,51,53,95,116,101,115,115,0),true ], [String.fromCharCode(115,105,103,105,110,116,95,115,95,55,50,0),false ]]);
         klevinA = `${window_pxx.size}`;
         data3 = 27 <= libjsijniprofilerC.size;
      if (libjsijniprofilerC.size > 5) {
         klevinA = `${(String.fromCharCode(87,0) == klevinA ? klevinA.length : (data3 ? 4 : 2))}`;
      }
       let androidQ: Array<any> = [String.fromCharCode(101,120,112,114,108,105,115,116,0), String.fromCharCode(117,110,109,105,120,95,103,95,49,0), String.fromCharCode(102,97,116,97,108,95,117,95,51,55,0)];
          let inouttargetyellowQ = String.fromCharCode(113,95,52,54,95,105,115,97,99,0);
         androidQ.push(androidQ.length * 3);
         inouttargetyellowQ += "1";
         androidQ.push(klevinA.length);
      profilepice = `${castingE.length + privacyZ.length}`;
       let blacke = 2;
       let bggradientX = String.fromCharCode(121,95,52,95,117,110,100,101,114,115,99,111,114,101,0);
       let episodesS = String.fromCharCode(100,105,97,103,114,97,109,0);
      while (episodesS.length <= 5) {
         bggradientX += `${bggradientX.length}`;
         break;
      }
         episodesS = `${(String.fromCharCode(116,0) == bggradientX ? blacke : bggradientX.length)}`;
      while (episodesS == String.fromCharCode(74,0)) {
         bggradientX = `${bggradientX.length}`;
         break;
      }
         episodesS = "1";
      let release_0a = 7352243 <= blacke;
      do {
         blacke <<= Math.min(Math.abs(2 / (Math.max(8, blacke))), 3);
         if (release_0a) {
            break;
         }
      } while ((!episodesS.startsWith(`${blacke}`)) && release_0a);
         episodesS = `${2 % (Math.max(10, blacke))}`;
      if ((episodesS.length - 5) <= 1 && (5 - blacke) <= 4) {
          let largeu = 0.0;
          let actionsP: Array<any> = [311, 373, 551];
          let component2 = 0.0;
          let tempnodata5 = String.fromCharCode(114,101,103,100,101,102,95,97,95,49,54,0);
          let smallG = false;
         episodesS = `${tempnodata5.length}`;
         largeu *= (parseFloat(`${(smallG ? 2 : 2) | parseInt(`${largeu}`)}`));
         actionsP.push(parseInt(`${largeu}`));
         component2 *= ((smallG ? 3 : 4) & parseInt(`${largeu}`));
         tempnodata5 += `${actionsP.length}`;
      }
      if (bggradientX.endsWith(`${episodesS.length}`)) {
          let relatedx = String.fromCharCode(117,116,99,116,105,109,101,95,97,95,50,51,0);
         bggradientX += `${(String.fromCharCode(119,0) == episodesS ? episodesS.length : relatedx.length)}`;
      }
      if (2 == (bggradientX.length << (Math.min(Math.abs(1), 4)))) {
          let memberW = 2.0;
         bggradientX = `${bggradientX.length << (Math.min(3, episodesS.length))}`;
         memberW += parseFloat(`${parseInt(`${memberW}`) + 1}`);
      }
      yellowcirclebg_ = `${2 - parseInt(`${manifestu}`)}`;
    await onRefresh(0, true);

       let libsgcore7 = String.fromCharCode(97,95,52,95,115,121,109,101,118,101,110,0);
       let defaultprofilepicS = 3.0;
      if ((5 - libsgcore7.length) >= 2) {
          let volumeN = 0;
          let listR: Array<any> = [String.fromCharCode(112,114,111,103,114,97,109,109,97,116,105,99,97,108,108,121,0), String.fromCharCode(99,105,114,99,108,101,115,0), String.fromCharCode(110,115,115,101,0)];
          let unselected6 = String.fromCharCode(111,95,57,54,95,117,116,120,111,115,0);
         libsgcore7 = `${volumeN ^ 3}`;
         volumeN %= Math.max(2 << (Math.min(2, listR.length)), 5);
         listR.push(unselected6.length >> (Math.min(Math.abs(2), 1)));
         unselected6 += "1";
      }
          let colorsM = 3;
          let photoN = String.fromCharCode(110,101,97,114,108,121,0);
         defaultprofilepicS += parseFloat(`${photoN.length}`);
         colorsM %= Math.max(1 & colorsM, 4);
         photoN = `${colorsM % (Math.max(7, colorsM))}`;
         defaultprofilepicS /= Math.max(parseFloat(`${1 ^ parseInt(`${defaultprofilepicS}`)}`), 4);
      for (let g = 0; g < 1; g++) {
         libsgcore7 = `${libsgcore7.length - parseInt(`${defaultprofilepicS}`)}`;
      }
      let vignetter = 8547849.0 >= defaultprofilepicS;
      do {
         defaultprofilepicS *= parseFloat(`${parseInt(`${defaultprofilepicS}`)}`);
         if (vignetter) {
            break;
         }
      } while ((5 <= libsgcore7.length) && vignetter);
         defaultprofilepicS += parseFloat(`${1 << (Math.min(1, Math.abs(parseInt(`${defaultprofilepicS}`))))}`);
      privacyZ += `${parseInt(`${defaultprofilepicS}`)}`;
       let iconsubssuccessL: Map<any, any> = new Map([[String.fromCharCode(99,112,117,105,110,102,111,95,106,95,50,56,0),121], [String.fromCharCode(121,95,54,50,95,113,105,97,110,0),15]]);
       let untickD: Map<any, any> = new Map([[String.fromCharCode(97,100,100,99,111,110,115,116,95,100,95,51,53,0),341], [String.fromCharCode(99,111,114,101,115,95,97,95,51,57,0),845]]);
       let textinputj = String.fromCharCode(99,110,116,0);
         untickD = new Map([[`${untickD.size}`, 1]]);
      while (textinputj.length < iconsubssuccessL.size) {
         iconsubssuccessL = new Map([[`${untickD.size}`, textinputj.length]]);
         break;
      }
         untickD = new Map([[`${iconsubssuccessL.size}`, iconsubssuccessL.size % (Math.max(textinputj.length, 1))]]);
          let stationX: Array<any> = [String.fromCharCode(115,116,114,105,107,101,95,115,95,53,49,0), String.fromCharCode(121,95,49,50,95,115,117,115,112,101,110,100,0)];
         untickD = new Map([[`${iconsubssuccessL.size}`, 3]]);
         stationX.push(stationX.length);
          let exampleimageV = String.fromCharCode(114,95,53,50,95,116,101,120,116,102,105,108,101,0);
         untickD.set(`${untickD.size}`, 2 << (Math.min(1, Math.abs(iconsubssuccessL.size))));
         exampleimageV += `${exampleimageV.length}`;
          let downloadingc = String.fromCharCode(106,95,50,50,95,112,117,114,112,108,101,0);
          let gmailn: Array<any> = [489, 910, 4];
         iconsubssuccessL.set(downloadingc, (downloadingc == String.fromCharCode(95,0) ? gmailn.length : downloadingc.length));
         untickD = new Map([[`${iconsubssuccessL.size}`, untickD.size]]);
      for (let w = 0; w < 3; w++) {
         textinputj = `${1 * textinputj.length}`;
      }
      if (untickD.size <= textinputj.length) {
          let thailandJ = 3;
          let containerO = String.fromCharCode(102,105,112,115,95,105,95,55,0);
          let arrowrightwithtailr = String.fromCharCode(116,117,108,115,105,95,49,95,57,51,0);
          let goallogos = String.fromCharCode(109,97,115,107,0);
          let liveendmodallogok = 2.0;
         untickD = new Map([[goallogos, goallogos.length + parseInt(`${liveendmodallogok}`)]]);
         thailandJ %= Math.max(2, (arrowrightwithtailr == String.fromCharCode(95,0) ? thailandJ : arrowrightwithtailr.length));
         containerO += `${thailandJ}`;
         liveendmodallogok *= parseFloat(`${thailandJ % (Math.max(7, arrowrightwithtailr.length))}`);
      }
      manifestu += parseFloat(`${castingE.length}`);
   for (let k = 0; k < 2; k++) {
      privacyZ = `${foregroundc.length ^ 1}`;
   }
   for (let x = 0; x < 1; x++) {
      yellowcirclebg_ = `${inouttargetred2}`;
   }

    setTimeout(() => {

       let sharewhiteg: Array<any> = [String.fromCharCode(102,95,55,50,95,102,97,114,0), String.fromCharCode(105,100,99,116,95,98,95,53,49,0), String.fromCharCode(99,111,110,102,108,105,99,116,0)];
       let guideK: Map<any, any> = new Map([[String.fromCharCode(116,95,55,49,95,111,115,109,111,115,0),401], [String.fromCharCode(99,111,108,120,0),37]]);
          let setting5 = String.fromCharCode(112,114,101,108,111,97,100,101,100,0);
          let vipsportW = 5.0;
          let floaters = String.fromCharCode(114,100,101,108,116,97,0);
         sharewhiteg.push(floaters.length / 3);
         setting5 += `${setting5.length << (Math.min(Math.abs(2), 3))}`;
         vipsportW *= parseFloat(`${2 * parseInt(`${vipsportW}`)}`);
         floaters = `${(String.fromCharCode(98,0) == setting5 ? setting5.length : parseInt(`${vipsportW}`))}`;
      if ((sharewhiteg.length & guideK.size) >= 4 || (sharewhiteg.length & 4) >= 3) {
          let dicelogoX = String.fromCharCode(97,116,116,114,97,99,116,111,114,95,114,95,57,48,0);
         sharewhiteg = [dicelogoX.length];
      }
      if (3 > (guideK.size & sharewhiteg.length) || (3 & sharewhiteg.length) > 5) {
         guideK = new Map([[`${guideK.size}`, guideK.size % 3]]);
      }
          let rocketc = 2;
          let dplusS = 0;
          let redscoreballi = String.fromCharCode(118,101,114,116,105,99,101,115,0);
         guideK = new Map([[`${sharewhiteg.length}`, rocketc]]);
         rocketc += 3 + dplusS;
         dplusS &= 1;
         redscoreballi = `${redscoreballi.length + dplusS}`;
         sharewhiteg.push(guideK.size % (Math.max(1, 3)));
         guideK = new Map([[`${guideK.size}`, sharewhiteg.length % (Math.max(10, guideK.size))]]);
      foregroundc = `${2 & parseInt(`${manifestu}`)}`;
   let paginationF = String.fromCharCode(115,51,50,111,53,0) == foregroundc;
   do {
       let runtimeschedulerl = String.fromCharCode(98,95,56,53,95,105,110,111,100,101,115,0);
       let typingz: Array<any> = [String.fromCharCode(99,95,51,51,95,105,103,104,108,105,103,104,116,115,0), String.fromCharCode(101,95,49,48,95,98,97,103,101,0)];
       let verticalr = String.fromCharCode(103,122,105,112,112,101,100,0);
       let valueso = String.fromCharCode(102,95,52,51,95,115,97,105,122,0);
       let switch_eN = String.fromCharCode(109,95,56,57,95,115,101,99,115,0);
          let iconfeedbackm: Array<any> = [306, 340, 467];
         verticalr += `${3 << (Math.min(2, verticalr.length))}`;
         iconfeedbackm = [iconfeedbackm.length / (Math.max(iconfeedbackm.length, 10))];
         runtimeschedulerl += `${switch_eN.length}`;
       let notificationfillemptyB = 2;
         switch_eN = `${verticalr.length}`;
       let goallogoL = String.fromCharCode(99,111,110,118,101,114,116,111,114,0);
       let fullscreenminV = String.fromCharCode(105,115,100,105,103,105,116,95,98,95,52,55,0);
       let viewerc = String.fromCharCode(108,111,115,101,95,97,95,53,53,0);
      while (2 == (notificationfillemptyB / (Math.max(switch_eN.length, 1))) && (2 / (Math.max(5, switch_eN.length))) == 4) {
          let username1 = 4.0;
          let volumev: Map<any, any> = new Map([[String.fromCharCode(117,95,50,55,0),341], [String.fromCharCode(106,95,52,57,95,105,110,103,101,110,105,101,110,116,0),571]]);
          let sellp = String.fromCharCode(109,97,99,114,111,98,108,111,99,107,0);
          let baiduadsH = 5.0;
          let libffmpegkitS = String.fromCharCode(121,95,52,51,95,101,102,102,101,99,116,105,118,101,0);
         switch_eN += "3";
         username1 += 3 ^ parseInt(`${username1}`);
         volumev = new Map([[sellp, sellp.length]]);
         baiduadsH -= parseInt(`${baiduadsH}`) >> (Math.min(Math.abs(1), 2));
         libffmpegkitS += `${1 ^ parseInt(`${username1}`)}`;
         break;
      }
      while (4 <= fullscreenminV.length) {
          let splash8: Map<any, any> = new Map([[String.fromCharCode(109,95,53,50,95,115,117,98,116,101,120,116,0),366], [String.fromCharCode(110,111,110,100,99,95,116,95,52,57,0),250], [String.fromCharCode(116,95,54,48,95,97,117,116,104,101,110,116,104,105,99,97,116,101,0),931]]);
          let confirmationR = String.fromCharCode(112,114,111,102,105,108,101,0);
          let whitetickE = String.fromCharCode(100,95,56,56,95,101,120,112,110,97,100,101,100,0);
          let skipA = 5;
          let modal3 = 0;
         fullscreenminV = `${(viewerc == String.fromCharCode(49,0) ? modal3 : viewerc.length)}`;
         splash8 = new Map([[whitetickE, (String.fromCharCode(121,0) == confirmationR ? whitetickE.length : confirmationR.length)]]);
         skipA %= Math.max(2, whitetickE.length);
         modal3 &= 3 << (Math.min(3, Math.abs(skipA)));
         break;
      }
       let langO = String.fromCharCode(99,95,51,49,95,105,110,116,101,114,97,99,116,111,114,0);
          let hongkongz = 1;
         verticalr = "3";
         hongkongz &= hongkongz & 1;
      while (2 <= runtimeschedulerl.length) {
          let yingf: Array<any> = [String.fromCharCode(112,108,111,116,116,101,114,95,55,95,53,0), String.fromCharCode(112,114,111,100,117,99,101,114,95,98,95,54,48,0), String.fromCharCode(108,95,53,54,0)];
          let reminderB: Array<any> = [941, 99, 663];
          let crownt = false;
          let helper1: Array<any> = [140, 9, 296];
         fullscreenminV += `${yingf.length & valueso.length}`;
         yingf = [reminderB.length];
         reminderB = [reminderB.length / 3];
         helper1 = [((crownt ? 3 : 2) | 2)];
         break;
      }
      let minimizeF = switch_eN == String.fromCharCode(98,110,56,103,99,110,0);
      do {
         switch_eN += `${valueso.length + switch_eN.length}`;
         if (minimizeF) {
            break;
         }
      } while (minimizeF && (3 == valueso.length));
          let canvasC: Array<any> = [4, 491];
          let inactiveN = String.fromCharCode(102,97,117,108,116,95,107,95,55,48,0);
          let libreactnativeblobP = String.fromCharCode(114,111,113,118,105,100,101,111,0);
         notificationfillemptyB &= notificationfillemptyB >> (Math.min(verticalr.length, 3));
         canvasC = [2 - libreactnativeblobP.length];
         inactiveN = `${libreactnativeblobP.length - 2}`;
      for (let n = 0; n < 3; n++) {
         notificationfillemptyB *= langO.length;
      }
         switch_eN += "2";
      foregroundc = `${profilepice.length}`;
      typingz.push(typingz.length);
      if (paginationF) {
         break;
      }
   } while (paginationF && (castingE != String.fromCharCode(117,0)));
      profilepice += `${castingE.length}`;
   let basketballg = iconcalendarD <= 7436414.0;
   do {
      iconcalendarD /= Math.max(4, (parseFloat(`${privacyZ == String.fromCharCode(75,0) ? privacyZ.length : parseInt(`${manifestu}`)}`)));
      if (basketballg) {
         break;
      }
   } while ((2.18 <= (1 / (Math.max(7, manifestu)))) && basketballg);
      setActiveIndex(0);

      privacyZ = "1";
   for (let c = 0; c < 1; c++) {
      profilepice += `${parseInt(`${manifestu}`)}`;
   }
   if (1 == (inouttargetred2 ^ 4) || (inouttargetred2 ^ 4) == 1) {
      inouttargetred2 |= castingE.length;
   }
      castingE = `${yellowcirclebg_.length + 1}`;
      if (carouselRef) {

       let condensed7 = String.fromCharCode(98,97,115,101,100,95,53,95,49,56,0);
       let q_animationh = String.fromCharCode(99,104,97,110,103,101,100,95,108,95,57,50,0);
       let refreshQ = 4.0;
      for (let p = 0; p < 3; p++) {
         condensed7 = `${condensed7.length + 1}`;
      }
      let anewsshareY = q_animationh == String.fromCharCode(111,109,112,114,104,0);
      do {
         q_animationh += `${parseInt(`${refreshQ}`)}`;
         if (anewsshareY) {
            break;
         }
      } while (anewsshareY && (condensed7.length > q_animationh.length));
          let final_myu = 1.0;
          let hometeamfieldR = 1.0;
          let predictionbannery = String.fromCharCode(110,111,116,105,102,105,101,115,95,116,95,56,0);
         q_animationh = "3";
         final_myu /= Math.max(3, predictionbannery.length);
         hometeamfieldR -= parseFloat(`${predictionbannery.length >> (Math.min(Math.abs(1), 5))}`);
         refreshQ += parseFloat(`${3}`);
         condensed7 = "1";
      for (let d = 0; d < 3; d++) {
          let calendarO = 4;
          let textinputf = String.fromCharCode(111,95,52,55,95,112,111,105,110,116,101,114,0);
         q_animationh += `${condensed7.length - 1}`;
         calendarO &= 3 - calendarO;
         textinputf = `${textinputf.length}`;
      }
          let icondefaultthumbnaila: Map<any, any> = new Map([[String.fromCharCode(97,112,101,116,97,103,0),341], [String.fromCharCode(122,95,55,57,95,114,101,97,112,0),115]]);
          let mbbannerg = String.fromCharCode(109,95,57,52,95,102,114,97,110,100,111,109,0);
         refreshQ += parseFloat(`${q_animationh.length}`);
         icondefaultthumbnaila.set(mbbannerg, icondefaultthumbnaila.size / (Math.max(3, 9)));
         mbbannerg += `${mbbannerg.length}`;
         condensed7 += `${(condensed7 == String.fromCharCode(102,0) ? condensed7.length : parseInt(`${refreshQ}`))}`;
      let homeiconb = condensed7.length >= 9525046;
      do {
         condensed7 += `${3 ^ q_animationh.length}`;
         if (homeiconb) {
            break;
         }
      } while ((!condensed7.includes(q_animationh)) && homeiconb);
      yellowcirclebg_ += `${(privacyZ == String.fromCharCode(51,0) ? parseInt(`${holderK}`) : privacyZ.length)}`;
      manifestu -= parseFloat(`${parseInt(`${iconcalendarD}`)}`);
      castingE = `${parseInt(`${iconcalendarD}`)}`;
   if ((parseFloat(`${privacyZ.length}`) - iconcalendarD) < 2.37 || (privacyZ.length / (Math.max(5, 10))) < 4) {
      privacyZ += `${parseInt(`${holderK}`)}`;
   }
        setIsRefreshing(false);
        carouselRef?.current?.scrollTo({ index: 0, animated: false });
      }
    }, 0);
  };

  const getUrl = () => {
       let ajaxg = 5.0;
    let delegate__mT = String.fromCharCode(105,104,100,114,0);
    let backiconS = String.fromCharCode(99,108,97,105,109,115,95,118,95,54,51,0);
    let basketballr: Array<any> = [835, 290, 131];
    let homeiconu: Map<any, any> = new Map([[String.fromCharCode(99,111,110,116,97,105,110,97,98,108,101,95,53,95,53,54,0),528], [String.fromCharCode(105,100,99,116,99,111,108,0),148]]);
    let playercommond: Map<any, any> = new Map([[String.fromCharCode(112,114,101,115,99,97,108,101,0),13], [String.fromCharCode(111,95,54,53,95,112,111,108,121,109,101,115,104,0),124], [String.fromCharCode(122,95,57,52,95,109,101,109,115,101,116,0),475]]);
    let faviconH = 5.0;
    let anythinkG: Array<any> = [532, 971, 512];
    let eighteen2 = String.fromCharCode(98,95,54,50,95,109,117,108,116,105,112,108,121,105,110,103,0);
    let hongkongX = false;
    let upgradec = 0.0;
    let eyecloseY = 1.0;
    let foundt: Array<any> = [711, 121];
    let yellowredcardt: Map<any, any> = new Map([[String.fromCharCode(105,95,54,54,95,116,105,109,101,111,117,116,115,0),368], [String.fromCharCode(117,95,49,56,95,112,101,114,112,101,110,100,105,99,117,108,97,114,0),647], [String.fromCharCode(109,107,118,119,114,105,116,101,114,95,51,95,55,50,0),363]]);
    let imagenomoredata9 = 4.0;
    let actionP = 2.0;
    let clockl: Map<any, any> = new Map([[String.fromCharCode(121,95,52,54,95,116,101,109,112,102,105,108,101,0),673], [String.fromCharCode(117,95,51,51,95,99,111,109,98,105,110,101,0),552], [String.fromCharCode(117,116,120,111,115,95,54,95,55,50,0),857]]);
    let flyerY = String.fromCharCode(122,95,52,49,95,109,97,121,98,101,0);
   for (let q = 0; q < 3; q++) {
      backiconS += `${delegate__mT.length % (Math.max(1, 10))}`;
   }
   for (let u = 0; u < 3; u++) {
       let countdownG = String.fromCharCode(116,111,110,101,109,97,112,0);
       let orangetickt = 0.0;
       let trophyn: Array<any> = [String.fromCharCode(117,110,122,116,101,108,108,95,100,95,51,57,0), String.fromCharCode(100,95,57,49,95,109,111,118,101,109,101,110,116,0), String.fromCharCode(119,95,54,51,95,106,111,117,114,110,97,108,110,97,109,101,0)];
       let sharemodaly = 0.0;
       let catagoryC = String.fromCharCode(107,105,99,107,101,100,95,53,95,50,50,0);
          let predictionwinZ = String.fromCharCode(105,116,101,114,97,116,101,95,118,95,54,56,0);
         sharemodaly *= 3 >> (Math.min(4, catagoryC.length));
         predictionwinZ = `${predictionwinZ.length - 1}`;
      let clockb = trophyn.length >= 5212785;
      do {
         trophyn.push(parseInt(`${orangetickt}`));
         if (clockb) {
            break;
         }
      } while ((countdownG.endsWith(`${trophyn.length}`)) && clockb);
          let mbnativeadvancede: Array<any> = [String.fromCharCode(117,110,112,114,111,99,101,115,115,101,100,0), String.fromCharCode(122,95,54,54,95,119,97,110,116,115,0), String.fromCharCode(104,101,108,112,95,105,95,57,55,0)];
         orangetickt *= parseFloat(`${parseInt(`${orangetickt}`) - 2}`);
         mbnativeadvancede = [2];
      let typesT = 9759772 >= catagoryC.length;
      do {
         catagoryC += `${2 & catagoryC.length}`;
         if (typesT) {
            break;
         }
      } while (typesT && (3 < (catagoryC.length + 1) || (catagoryC.length << (Math.min(Math.abs(1), 4))) < 5));
      for (let s = 0; s < 1; s++) {
         sharemodaly += (countdownG == String.fromCharCode(105,0) ? trophyn.length : countdownG.length);
      }
       let privatechatbgs = String.fromCharCode(116,101,108,101,109,101,116,114,121,95,48,95,49,49,0);
       let matchg = String.fromCharCode(113,100,101,108,116,97,95,116,95,50,55,0);
      if (3 <= privatechatbgs.length) {
         privatechatbgs += `${(String.fromCharCode(111,0) == privatechatbgs ? privatechatbgs.length : parseInt(`${sharemodaly}`))}`;
      }
      if ((orangetickt - 3.19) >= 1.10 || 3.19 >= (orangetickt - parseFloat(`${trophyn.length}`))) {
         orangetickt *= parseFloat(`${trophyn.length}`);
      }
      let h_lockI = 5146790 >= countdownG.length;
      do {
         countdownG = "2";
         if (h_lockI) {
            break;
         }
      } while (h_lockI && (countdownG.length > privatechatbgs.length));
      for (let z = 0; z < 3; z++) {
          let blackM = 1.0;
          let singaporeL = 5.0;
          let backiconmaskR = String.fromCharCode(108,110,110,105,100,95,110,95,52,0);
          let favicon8: Array<any> = [String.fromCharCode(105,100,101,110,116,0), String.fromCharCode(102,95,55,53,95,99,97,112,116,117,114,105,110,103,0)];
          let videoT: Map<any, any> = new Map([[String.fromCharCode(111,95,55,55,95,116,114,101,101,99,111,100,101,114,0),880], [String.fromCharCode(97,95,55,95,97,117,116,111,97,114,99,104,105,118,101,0),418]]);
         countdownG = `${(catagoryC == String.fromCharCode(110,0) ? catagoryC.length : trophyn.length)}`;
         blackM *= parseFloat(`${parseInt(`${blackM}`)}`);
         singaporeL -= backiconmaskR.length;
         backiconmaskR += `${favicon8.length}`;
         favicon8 = [parseInt(`${singaporeL}`)];
         videoT.set(`${singaporeL}`, 3 - parseInt(`${singaporeL}`));
      }
          let thailandY = String.fromCharCode(112,95,50,56,95,104,101,105,103,104,116,0);
          let yingH = 4.0;
          let dycreatorw: Array<any> = [434, 609];
         trophyn.push(1);
         thailandY = `${dycreatorw.length + 3}`;
         yingH /= Math.max(thailandY.length, 1);
         dycreatorw = [thailandY.length];
         trophyn = [2];
          let nbatrophyD = String.fromCharCode(98,95,52,56,95,116,95,49,48,0);
         privatechatbgs += `${(String.fromCharCode(80,0) == nbatrophyD ? countdownG.length : nbatrophyD.length)}`;
         catagoryC += `${(matchg == String.fromCharCode(73,0) ? parseInt(`${orangetickt}`) : matchg.length)}`;
      for (let d = 0; d < 3; d++) {
         orangetickt += parseFloat(`${2 | trophyn.length}`);
      }
      foundt = [playercommond.size * 3];
   }
       let launchg = 0;
       let expandy = String.fromCharCode(109,97,107,101,119,116,95,120,95,55,48,0);
      for (let o = 0; o < 3; o++) {
          let profileinactiveU: Map<any, any> = new Map([[String.fromCharCode(122,95,51,48,95,97,100,100,114,101,115,115,101,115,0),861], [String.fromCharCode(116,95,49,53,95,97,105,110,116,105,110,103,0),707]]);
          let sortu = 3;
          let langkeyu = 1;
         expandy = `${expandy.length % (Math.max(3, sortu))}`;
         profileinactiveU.set(`${langkeyu}`, profileinactiveU.size);
         sortu -= profileinactiveU.size;
         langkeyu >>= Math.min(3, Math.abs(langkeyu * profileinactiveU.size));
      }
         launchg ^= launchg / 1;
       let clearZ = String.fromCharCode(115,95,51,50,95,101,108,105,109,105,110,97,116,105,111,110,0);
       let privacyq = String.fromCharCode(115,104,111,114,116,102,108,111,97,116,95,52,95,55,52,0);
      let homeloadingp = privacyq == String.fromCharCode(119,97,105,117,0);
      do {
          let whatsappf = String.fromCharCode(115,116,97,116,105,99,95,119,95,54,53,0);
          let tnews7 = String.fromCharCode(107,95,57,57,95,104,97,115,104,116,97,98,108,101,122,0);
         privacyq += `${expandy.length}`;
         whatsappf += `${(tnews7 == String.fromCharCode(77,0) ? whatsappf.length : tnews7.length)}`;
         if (homeloadingp) {
            break;
         }
      } while ((expandy.length < 1) && homeloadingp);
         launchg %= Math.max(3, 1);
      let assetsE = privacyq.length >= 6683451;
      do {
         privacyq += `${(String.fromCharCode(68,0) == expandy ? expandy.length : launchg)}`;
         if (assetsE) {
            break;
         }
      } while (assetsE && (clearZ != String.fromCharCode(114,0)));
      delegate__mT = `${anythinkG.length + 2}`;
   let zhengpiang = 4995597 <= yellowredcardt.size;
   do {
       let borderlessa = 4;
       let yellowanimationliveg = String.fromCharCode(115,95,54,55,95,100,110,115,110,97,109,101,0);
       let mapbufferU = 0;
       let libjsijniprofilerD: Map<any, any> = new Map([[String.fromCharCode(114,111,117,116,101,0),false ], [String.fromCharCode(115,101,114,105,97,108,105,115,101,100,95,56,95,56,55,0),true ], [String.fromCharCode(103,100,112,114,95,122,95,57,0),true ]]);
          let clubE = String.fromCharCode(112,95,56,56,95,101,120,112,105,114,97,116,105,111,110,0);
         borderlessa ^= borderlessa & 3;
         clubE = `${2 % (Math.max(5, clubE.length))}`;
       let libtanX = String.fromCharCode(100,95,50,95,98,105,116,101,120,97,99,116,110,101,115,115,0);
       let leftb = String.fromCharCode(113,112,113,115,99,97,108,101,95,51,95,49,0);
      for (let y = 0; y < 1; y++) {
         yellowanimationliveg = `${1 & mapbufferU}`;
      }
      while ((libtanX.length >> (Math.min(1, Math.abs(borderlessa)))) >= 3) {
          let default_ocD = String.fromCharCode(98,114,111,119,115,101,95,113,95,49,0);
          let currentM: Map<any, any> = new Map([[String.fromCharCode(99,101,108,101,98,114,97,116,101,0),529], [String.fromCharCode(117,95,49,51,0),602], [String.fromCharCode(108,95,55,48,95,119,101,108,108,0),253]]);
         borderlessa /= Math.max((libtanX == String.fromCharCode(82,0) ? default_ocD.length : libtanX.length), 4);
         default_ocD = `${currentM.size + 3}`;
         currentM.set(`${currentM.size}`, currentM.size & 2);
         break;
      }
      for (let x = 0; x < 1; x++) {
          let static_yo = String.fromCharCode(116,108,101,110,95,119,95,52,54,0);
          let airbnbstarL = String.fromCharCode(109,97,110,121,95,53,95,54,0);
         mapbufferU ^= (libtanX == String.fromCharCode(110,0) ? static_yo.length : libtanX.length);
         static_yo = `${airbnbstarL.length % 2}`;
         airbnbstarL = `${(airbnbstarL == String.fromCharCode(119,0) ? airbnbstarL.length : airbnbstarL.length)}`;
      }
      if ((mapbufferU & libtanX.length) <= 3) {
         mapbufferU &= borderlessa % (Math.max(3, yellowanimationliveg.length));
      }
          let arrowO = String.fromCharCode(109,106,112,101,103,97,95,52,95,51,52,0);
          let sellmathbackgrounda = String.fromCharCode(110,95,56,95,116,104,114,109,97,116,0);
         leftb = `${1 % (Math.max(1, sellmathbackgrounda.length))}`;
         arrowO = `${1 << (Math.min(4, arrowO.length))}`;
         sellmathbackgrounda = `${arrowO.length}`;
      if (libtanX.endsWith(`${libjsijniprofilerD.size}`)) {
          let iconplay_ = String.fromCharCode(106,95,48,95,101,118,114,99,100,97,116,97,0);
          let disconnectedj: Map<any, any> = new Map([[String.fromCharCode(97,110,111,110,121,109,111,117,115,95,114,95,50,0),206], [String.fromCharCode(118,101,114,98,111,115,101,95,119,95,53,48,0),67]]);
         libjsijniprofilerD = new Map([[libtanX, libtanX.length]]);
         iconplay_ = `${iconplay_.length + disconnectedj.size}`;
         disconnectedj = new Map([[`${disconnectedj.size}`, disconnectedj.size]]);
      }
      if (libtanX == String.fromCharCode(55,0) && leftb.length >= 5) {
          let arrowU = String.fromCharCode(106,95,54,53,95,104,99,115,99,97,108,101,0);
          let teamw = 3.0;
          let whistleR = false;
          let nextl = String.fromCharCode(104,95,56,54,95,100,101,115,104,97,107,101,0);
         leftb = `${libtanX.length + 2}`;
         arrowU = `${parseInt(`${teamw}`) + 3}`;
         teamw *= parseFloat(`${parseInt(`${teamw}`) - 1}`);
         whistleR = arrowU.length == parseInt(`${teamw}`);
         nextl = `${arrowU.length + 3}`;
      }
      for (let b = 0; b < 1; b++) {
          let reminderK = 0.0;
          let selectionB = 3.0;
          let yellowredcardx = true;
          let main_sc = 4.0;
         yellowanimationliveg = `${libjsijniprofilerD.size >> (Math.min(Math.abs(2), 5))}`;
         reminderK += parseFloat(`${parseInt(`${selectionB}`) << (Math.min(3, Math.abs(2)))}`);
         selectionB /= Math.max(2, parseFloat(`${2 * parseInt(`${main_sc}`)}`));
         yellowredcardx = !yellowredcardx;
         main_sc /= Math.max(4, parseFloat(`${2 << (Math.min(Math.abs(parseInt(`${selectionB}`)), 5))}`));
      }
       let userR = 2.0;
       let iconr = 4.0;
       let static_b_U = String.fromCharCode(112,95,51,49,95,102,108,116,117,105,110,116,0);
      yellowredcardt = new Map([[`${eyecloseY}`, parseInt(`${eyecloseY}`) << (Math.min(1, Math.abs(1)))]]);
      if (zhengpiang) {
         break;
      }
   } while ((Array.from(yellowredcardt.keys()).includes(`${eyecloseY}`)) && zhengpiang);
       let hook4 = String.fromCharCode(98,105,116,119,114,105,116,101,114,95,99,95,52,50,0);
       let profilepicw = String.fromCharCode(97,116,111,109,105,99,97,108,108,121,95,115,95,56,52,0);
          let navigationu = String.fromCharCode(108,95,57,54,95,112,108,111,116,0);
          let bgvipxvod1 = 3;
         profilepicw += `${profilepicw.length}`;
         navigationu = "2";
         bgvipxvod1 >>= Math.min(3, Math.abs(navigationu.length / (Math.max(1, 8))));
         hook4 += "3";
      for (let v = 0; v < 1; v++) {
         profilepicw = `${hook4.length}`;
      }
         profilepicw += "2";
         profilepicw = `${hook4.length ^ profilepicw.length}`;
       let cancelu = 2;
       let defaultplayerimg1 = 1;
      yellowredcardt.set(backiconS, (backiconS == String.fromCharCode(100,0) ? homeiconu.size : backiconS.length));
       let screen5: Map<any, any> = new Map([[String.fromCharCode(106,95,51,95,115,116,114,105,112,115,0),417], [String.fromCharCode(99,95,55,49,95,98,101,110,99,104,0),81], [String.fromCharCode(104,105,103,104,108,105,103,116,101,100,0),14]]);
       let libreactnativejnii = 3;
       let entryX = 3.0;
      for (let p = 0; p < 1; p++) {
         entryX /= Math.max(parseFloat(`${libreactnativejnii}`), 3);
      }
         libreactnativejnii += libreactnativejnii - 2;
      for (let v = 0; v < 3; v++) {
         entryX -= parseFloat(`${3 - screen5.size}`);
      }
         screen5.set(`${entryX}`, 1);
         libreactnativejnii <<= Math.min(Math.abs(parseInt(`${entryX}`) | screen5.size), 3);
       let nodev: Array<any> = [863, 765, 305];
         entryX -= parseFloat(`${2 & nodev.length}`);
      while ((3 & nodev.length) == 4) {
         entryX /= Math.max(parseFloat(`${libreactnativejnii}`), 1);
         break;
      }
       let whistles = String.fromCharCode(104,95,56,56,95,119,114,105,116,101,99,104,101,99,107,0);
      yellowredcardt = new Map([[`${screen5.size}`, backiconS.length]]);
   for (let k = 0; k < 3; k++) {
      eyecloseY -= parseFloat(`${2}`);
   }
      backiconS = `${parseInt(`${upgradec}`) * 2}`;
   let uimanagerp = playercommond.size >= 5689941;
   do {
      playercommond.set(`${basketballr.length}`, anythinkG.length ^ 3);
      if (uimanagerp) {
         break;
      }
   } while (uimanagerp && (playercommond.get(`${faviconH}`) != null));
      playercommond.set(`${eyecloseY}`, (String.fromCharCode(51,0) == eighteen2 ? eighteen2.length : parseInt(`${eyecloseY}`)));
   while (!hongkongX) {
      eyecloseY -= parseFloat(`${1}`);
      break;
   }
      backiconS += `${backiconS.length << (Math.min(2, anythinkG.length))}`;
   for (let h = 0; h < 1; h++) {
      playercommond = new Map([[`${anythinkG.length}`, delegate__mT.length]]);
   }
   for (let p = 0; p < 2; p++) {
      eyecloseY *= parseFloat(`${3}`);
   }
       let fastt = String.fromCharCode(109,97,103,121,0);
       let showH: Map<any, any> = new Map([[String.fromCharCode(109,95,50,49,95,105,112,100,111,112,100,0),39], [String.fromCharCode(111,116,104,101,114,95,51,95,54,48,0),373]]);
         fastt = `${showH.size - fastt.length}`;
         showH = new Map([[`${showH.size}`, (String.fromCharCode(106,0) == fastt ? showH.size : fastt.length)]]);
         fastt = "1";
      while (showH.size < 4) {
         showH.set(fastt, showH.size);
         break;
      }
          let iconclosewhitewithbg2: Map<any, any> = new Map([[String.fromCharCode(115,116,114,117,99,116,95,57,95,50,51,0),105], [String.fromCharCode(115,95,50,55,95,117,110,98,108,111,99,107,105,110,103,0),491]]);
          let orange4: Array<any> = [429, 313, 381];
          let iconorientationH = 3;
         showH.set(fastt, showH.size);
         iconclosewhitewithbg2 = new Map([[`${orange4.length}`, iconorientationH]]);
         orange4.push(1);
         iconorientationH ^= iconorientationH << (Math.min(4, Math.abs(1)));
         fastt += `${(fastt == String.fromCharCode(78,0) ? fastt.length : showH.size)}`;
      hongkongX = 74.27 >= ajaxg;
   if (4 > playercommond.size) {
      eyecloseY -= parseFloat(`${parseInt(`${faviconH}`) * 3}`);
   }
   while (anythinkG.length >= parseInt(`${ajaxg}`)) {
      ajaxg /= Math.max(5, parseFloat(`${2}`));
      break;
   }
   while ((eyecloseY * 5.1) <= 4.29 || (parseInt(`${eyecloseY}`) * homeiconu.size) <= 2) {
       let pingS = String.fromCharCode(110,95,51,51,95,111,117,114,0);
       let mbjscommonY = String.fromCharCode(115,95,52,50,95,112,114,105,109,97,114,121,0);
         mbjscommonY = `${(pingS == String.fromCharCode(81,0) ? mbjscommonY.length : pingS.length)}`;
          let iconbellJ = String.fromCharCode(97,99,99,0);
         pingS += `${iconbellJ.length % (Math.max(1, mbjscommonY.length))}`;
         pingS += `${(String.fromCharCode(100,0) == pingS ? mbjscommonY.length : pingS.length)}`;
         pingS += `${pingS.length / (Math.max(5, mbjscommonY.length))}`;
      if (pingS == String.fromCharCode(98,0) && mbjscommonY.length == 1) {
          let huaweij: Array<any> = [206, 229];
          let nterstitial_ = false;
          let actions9 = 1;
          let jingdong9: Array<any> = [862, 736, 126];
          let dialogZ = false;
         pingS = `${jingdong9.length ^ actions9}`;
         huaweij = [(huaweij.length ^ (dialogZ ? 2 : 5))];
         nterstitial_ = !dialogZ;
         actions9 &= (1 + (dialogZ ? 4 : 5));
         jingdong9 = [(1 >> (Math.min(3, Math.abs((dialogZ ? 2 : 3)))))];
      }
      let register_0U = String.fromCharCode(54,108,53,56,120,51,116,0) == mbjscommonY;
      do {
         mbjscommonY = "3";
         if (register_0U) {
            break;
         }
      } while ((pingS != mbjscommonY) && register_0U);
      eyecloseY /= Math.max((parseFloat(`${homeiconu.size ^ (hongkongX ? 1 : 5)}`)), 5);
      break;
   }
   for (let p = 0; p < 3; p++) {
       let libswscaleM = String.fromCharCode(108,111,103,102,110,95,110,95,52,56,0);
       let iconorientationQ: Map<any, any> = new Map([[String.fromCharCode(112,95,50,56,95,99,114,108,100,0),537], [String.fromCharCode(119,109,97,112,114,111,100,97,116,97,0),770], [String.fromCharCode(102,95,53,95,116,120,105,100,0),26]]);
         libswscaleM = `${iconorientationQ.size}`;
          let rankW = 1.0;
          let const_93o = 4;
         iconorientationQ = new Map([[`${iconorientationQ.size}`, 1 - libswscaleM.length]]);
         rankW += parseFloat(`${const_93o}`);
         const_93o -= const_93o % (Math.max(parseInt(`${rankW}`), 7));
       let iconpipexpandY = 2.0;
       let basketballhometeamE = 1.0;
          let forwardt = String.fromCharCode(99,95,54,52,95,119,104,97,116,0);
          let emptyO = true;
          let successd = 2;
         iconorientationQ.set(`${successd}`, 2 | iconorientationQ.size);
         forwardt += `${((emptyO ? 4 : 4) << (Math.min(Math.abs(1), 5)))}`;
         emptyO = (98 < (forwardt.length | (!emptyO ? forwardt.length : 98)));
         successd |= (String.fromCharCode(65,0) == forwardt ? (emptyO ? 5 : 3) : forwardt.length);
      while (iconorientationQ.get(`${iconpipexpandY}`) != null) {
          let catagoryQ = String.fromCharCode(109,95,49,55,95,102,111,117,110,100,97,116,105,111,110,0);
          let signinupJ = String.fromCharCode(115,104,114,105,110,107,95,121,95,52,52,0);
          let config8: Array<any> = [275, 483, 419];
          let textinput2 = 1;
         iconorientationQ = new Map([[`${iconpipexpandY}`, 2]]);
         catagoryQ += `${signinupJ.length}`;
         signinupJ = `${catagoryQ.length % 2}`;
         config8 = [config8.length];
         textinput2 *= config8.length;
         break;
      }
      if (libswscaleM.length > basketballhometeamE) {
         basketballhometeamE *= iconorientationQ.size;
      }
      eighteen2 = "2";
   }
      faviconH *= 2 | homeiconu.size;
   if (2.19 > imagenomoredata9) {
      imagenomoredata9 *= (parseInt(`${faviconH}`) + (hongkongX ? 3 : 3));
   }
   let giflivestreamingR = foundt.length <= 9039538;
   do {
       let dependencyh = String.fromCharCode(100,102,108,97,0);
       let matches9 = 3.0;
       let unselectedh: Map<any, any> = new Map([[String.fromCharCode(109,95,52,49,95,99,114,117,110,0),754], [String.fromCharCode(115,105,109,105,108,97,114,105,116,121,0),213]]);
       let iconcalendarn = 3;
       let emojiheartk = 5;
      if (emojiheartk < 5) {
          let nodeh = 5.0;
          let basketballmatchdetailbgj: Array<any> = [829, 649, 513];
         iconcalendarn ^= dependencyh.length;
         nodeh += parseFloat(`${parseInt(`${nodeh}`)}`);
         basketballmatchdetailbgj.push(parseInt(`${nodeh}`) / 3);
      }
         iconcalendarn -= dependencyh.length;
       let humidityS = 2.0;
          let gdtadvD = String.fromCharCode(108,95,51,55,95,97,100,97,112,116,0);
          let assetsj = String.fromCharCode(101,95,56,55,95,100,101,118,105,99,101,115,0);
          let sporta = String.fromCharCode(102,105,110,100,97,115,115,111,99,105,97,116,105,111,110,95,121,95,56,56,0);
         emojiheartk &= (dependencyh == String.fromCharCode(77,0) ? parseInt(`${humidityS}`) : dependencyh.length);
         gdtadvD = "1";
         assetsj += `${gdtadvD.length}`;
         sporta = `${2 << (Math.min(5, assetsj.length))}`;
          let greyE = 3;
         emojiheartk += dependencyh.length;
         greyE |= 3;
          let icondefaultthumbnailS = 2;
          let graphn: Map<any, any> = new Map([[String.fromCharCode(115,95,57,95,116,104,114,101,97,100,0),546], [String.fromCharCode(109,97,112,108,105,109,105,116,95,122,95,57,53,0),511], [String.fromCharCode(117,110,114,101,115,101,114,118,101,100,0),823]]);
          let fcdaebecbcbafcdfceaaeccfeacdbR = 4;
         matches9 /= Math.max(5, parseFloat(`${2 / (Math.max(1, parseInt(`${humidityS}`)))}`));
         icondefaultthumbnailS >>= Math.min(3, Math.abs(icondefaultthumbnailS));
         graphn = new Map([[`${graphn.size}`, 3 + icondefaultthumbnailS]]);
         fcdaebecbcbafcdfceaaeccfeacdbR /= Math.max(1, 2 | graphn.size);
         emojiheartk &= dependencyh.length;
         unselectedh.set(`${emojiheartk}`, unselectedh.size & emojiheartk);
      while (3 < (2 | unselectedh.size) || 2 < (unselectedh.size | iconcalendarn)) {
          let imagemanagerZ = 3.0;
          let coreV = String.fromCharCode(111,95,49,52,95,103,101,110,101,114,97,116,101,100,0);
         iconcalendarn ^= iconcalendarn / (Math.max(parseInt(`${matches9}`), 1));
         imagemanagerZ -= (coreV == String.fromCharCode(50,0) ? parseInt(`${imagemanagerZ}`) : coreV.length);
         break;
      }
         emojiheartk -= 3 | parseInt(`${matches9}`);
          let mailr: Map<any, any> = new Map([[String.fromCharCode(115,95,54,57,95,101,109,109,115,0),false ], [String.fromCharCode(97,95,51,48,95,115,111,99,107,101,116,115,0),false ]]);
         humidityS += parseFloat(`${iconcalendarn}`);
         mailr = new Map([[`${mailr.size}`, mailr.size | 3]]);
      while ((iconcalendarn + parseInt(`${humidityS}`)) > 1 && (parseInt(`${humidityS}`) + iconcalendarn) > 1) {
          let tempnodataM = true;
         iconcalendarn |= parseInt(`${matches9}`) + 1;
         tempnodataM = !tempnodataM && tempnodataM;
         break;
      }
          let middlesoundt: Array<any> = [669, 652, 743];
         unselectedh.set(`${iconcalendarn}`, unselectedh.size - iconcalendarn);
         middlesoundt.push(middlesoundt.length << (Math.min(middlesoundt.length, 5)));
      while ((4 >> (Math.min(5, Math.abs(emojiheartk)))) < 2) {
         emojiheartk /= Math.max(3, 4);
         break;
      }
      if (4 <= emojiheartk) {
          let bgvipsport7: Map<any, any> = new Map([[String.fromCharCode(112,95,52,56,95,115,119,105,102,116,99,0),743], [String.fromCharCode(102,95,49,53,95,106,111,98,113,0),776]]);
          let playercommono = false;
          let iconclosewhitebgQ = 0.0;
         emojiheartk -= parseInt(`${iconclosewhitebgQ}`) - 1;
         bgvipsport7 = new Map([[`${bgvipsport7.size}`, ((playercommono ? 2 : 2) + 2)]]);
         playercommono = !playercommono;
         iconclosewhitebgQ *= parseFloat(`${bgvipsport7.size}`);
      }
      foundt.push(3);
      if (giflivestreamingR) {
         break;
      }
   } while ((!Array.from(playercommond.keys()).includes(`${foundt.length}`)) && giflivestreamingR);
   while ((eyecloseY / 3.67) == 1.22 || 2 == (parseInt(`${eyecloseY}`) / (Math.max(yellowredcardt.size, 5)))) {
      eyecloseY /= Math.max(parseFloat(`${3 ^ parseInt(`${imagenomoredata9}`)}`), 2);
      break;
   }
   if (!hongkongX) {
      actionP += parseFloat(`${1 << (Math.min(Math.abs(parseInt(`${upgradec}`)), 2))}`);
   }
   let loginr = anythinkG.length >= 9839268;
   do {
      anythinkG = [1 * playercommond.size];
      if (loginr) {
         break;
      }
   } while ((1.76 <= (actionP - parseFloat(`${anythinkG.length}`)) && 1 <= (1 / (Math.max(10, anythinkG.length)))) && loginr);
       let sigmobE: Map<any, any> = new Map([[String.fromCharCode(116,101,97,109,115,95,112,95,56,57,0),361], [String.fromCharCode(98,97,99,107,103,114,111,117,110,100,115,95,53,95,50,49,0),767]]);
       let anythink3: Array<any> = [903, 480];
       let awayteamfieldL = String.fromCharCode(115,101,108,101,99,116,111,112,95,106,95,50,50,0);
       let q_unlockR = true;
       let acceptedk = false;
      let yellowtored1 = sigmobE.size >= 7728361;
      do {
         sigmobE = new Map([[`${anythink3.length}`, awayteamfieldL.length * anythink3.length]]);
         if (yellowtored1) {
            break;
         }
      } while (yellowtored1 && ((sigmobE.size << (Math.min(Math.abs(4), 4))) == 5));
      for (let r = 0; r < 3; r++) {
          let yellowscoreballw: Map<any, any> = new Map([[String.fromCharCode(115,117,98,99,111,101,102,115,95,102,95,50,51,0),String.fromCharCode(99,111,111,108,100,111,119,110,95,49,95,49,51,0)], [String.fromCharCode(113,95,52,57,95,98,105,111,0),String.fromCharCode(113,95,52,50,95,114,101,112,101,97,116,105,110,103,0)], [String.fromCharCode(117,95,53,95,97,117,116,111,108,111,99,107,0),String.fromCharCode(100,111,119,110,108,111,97,100,101,100,95,106,95,49,48,48,0)]]);
         sigmobE = new Map([[`${sigmobE.size}`, 1]]);
         yellowscoreballw.set(`${yellowscoreballw.size}`, yellowscoreballw.size % 3);
      }
      for (let k = 0; k < 3; k++) {
         q_unlockR = !q_unlockR || acceptedk;
      }
      if (acceptedk) {
          let chatf = 0.0;
          let iconplayc: Map<any, any> = new Map([[String.fromCharCode(101,95,52,51,95,115,101,114,105,97,108,105,122,101,0),329], [String.fromCharCode(114,101,99,111,110,95,122,95,57,53,0),828], [String.fromCharCode(117,95,57,54,95,99,114,101,97,116,111,114,115,0),971]]);
         sigmobE.set(`${q_unlockR}`, 3);
         chatf -= parseFloat(`${iconplayc.size}`);
         iconplayc = new Map([[`${iconplayc.size}`, parseInt(`${chatf}`)]]);
      }
      for (let k = 0; k < 1; k++) {
         acceptedk = anythink3.length == sigmobE.size;
      }
      if (4 == sigmobE.size) {
         sigmobE.set(awayteamfieldL, 3);
      }
         q_unlockR = !q_unlockR;
         q_unlockR = 5 <= awayteamfieldL.length;
      playercommond.set(`${imagenomoredata9}`, homeiconu.size);

    return `${Url.matches11}?&is_live=true`;
  };

  const fetchMatchData = useCallback(async () => {
       let disconnectedq = 5;
    let emptyV = 5.0;
    let libffmpegkitP: Array<any> = [62, 746];
    let telegramg = String.fromCharCode(112,95,53,52,95,115,109,97,108,108,101,115,116,0);
    let basketballmatchdetailbgs = false;
    let utils6: Map<any, any> = new Map([[String.fromCharCode(121,95,53,52,95,115,112,108,105,116,115,0),16], [String.fromCharCode(109,115,114,108,101,100,101,99,0),185]]);
    let less8: Map<any, any> = new Map([[String.fromCharCode(117,95,54,56,95,99,111,108,111,99,97,116,101,100,0),73], [String.fromCharCode(112,95,51,48,95,110,101,103,111,116,105,97,116,101,100,0),599], [String.fromCharCode(103,108,111,115,115,95,99,95,51,48,0),346]]);
    let dangerR = String.fromCharCode(97,99,99,114,117,101,100,95,98,95,57,49,0);
    let mintegralK = true;
    let checkboxL = true;
    let logox: Map<any, any> = new Map([[String.fromCharCode(115,116,114,117,99,116,117,114,101,115,95,105,95,52,52,0),45], [String.fromCharCode(97,95,49,53,95,102,114,101,113,98,97,114,107,0),245]]);
    let telegramo = false;
    let profileactivec = true;
    let libswscaler = String.fromCharCode(102,117,108,108,121,95,121,95,54,48,0);
    let pauseW = String.fromCharCode(98,105,116,114,118,0);
    let currentY: Map<any, any> = new Map([[String.fromCharCode(120,95,50,53,95,115,117,112,112,114,101,115,115,101,115,0),571], [String.fromCharCode(114,101,102,105,110,105,110,103,0),998]]);
    let dnewinterstitialK = 5.0;
    let selectU = String.fromCharCode(108,105,110,101,97,114,95,50,95,57,51,0);
   while (1 >= (logox.size ^ 1) || 2 >= (1 ^ libffmpegkitP.length)) {
       let trashs = String.fromCharCode(100,95,53,48,95,105,110,116,101,114,110,0);
      while (!trashs.includes(`${trashs.length}`)) {
          let nalyticsS = String.fromCharCode(114,95,53,51,95,102,105,108,108,115,0);
          let elementsi = 5;
          let mutedg = 1.0;
         trashs = `${(String.fromCharCode(50,0) == trashs ? elementsi : trashs.length)}`;
         nalyticsS += `${nalyticsS.length + parseInt(`${mutedg}`)}`;
         elementsi <<= Math.min(Math.abs((nalyticsS == String.fromCharCode(71,0) ? nalyticsS.length : parseInt(`${mutedg}`))), 3);
         break;
      }
      let gemfile1 = trashs == String.fromCharCode(112,53,50,50,52,120,107,55,49,0);
      do {
         trashs = `${(trashs == String.fromCharCode(72,0) ? trashs.length : trashs.length)}`;
         if (gemfile1) {
            break;
         }
      } while (gemfile1 && (trashs.length == trashs.length));
       let fullscreenmaxs: Map<any, any> = new Map([[String.fromCharCode(117,110,98,97,110,95,48,95,57,54,0),true ], [String.fromCharCode(107,95,56,53,95,99,118,116,121,117,118,116,111,0),true ]]);
       let bdxadsdkl: Map<any, any> = new Map([[String.fromCharCode(106,95,55,48,95,99,111,108,0),351], [String.fromCharCode(97,117,116,104,111,114,105,122,97,116,105,111,110,115,95,104,95,57,56,0),959]]);
      libffmpegkitP.push(3);
      break;
   }
       let overW = true;
       let matchd = String.fromCharCode(115,116,114,101,114,114,111,114,95,117,95,54,0);
       let huaweiv = String.fromCharCode(97,114,116,105,102,97,99,116,115,0);
         overW = matchd.length > 5 && overW;
         matchd = `${2 / (Math.max(7, matchd.length))}`;
      if (5 < matchd.length) {
          let defaultprofilepic1 = 2;
          let mapbuffer3 = false;
         matchd = `${matchd.length & 1}`;
         defaultprofilepic1 += 1;
         mapbuffer3 = defaultprofilepic1 == 66 && !mapbuffer3;
      }
         matchd += `${(String.fromCharCode(117,0) == matchd ? (overW ? 3 : 1) : matchd.length)}`;
          let unreadb = String.fromCharCode(108,111,111,112,105,110,103,95,110,95,49,49,0);
         matchd = `${(matchd == String.fromCharCode(110,0) ? matchd.length : (overW ? 2 : 5))}`;
         unreadb += `${unreadb.length * 1}`;
          let yellowcirclebgI = String.fromCharCode(105,110,116,114,105,110,0);
          let clocky = true;
         overW = !matchd.endsWith(`${clocky}`);
         yellowcirclebgI = `${(yellowcirclebgI == String.fromCharCode(98,0) ? yellowcirclebgI.length : yellowcirclebgI.length)}`;
         clocky = yellowcirclebgI.length < 53;
      let nalyticsj = String.fromCharCode(50,117,101,103,95,98,115,105,0) == matchd;
      do {
         matchd = `${(matchd.length >> (Math.min(5, Math.abs((overW ? 4 : 4)))))}`;
         if (nalyticsj) {
            break;
         }
      } while (nalyticsj && (2 > matchd.length));
      for (let v = 0; v < 2; v++) {
         huaweiv = `${((overW ? 5 : 2) * huaweiv.length)}`;
      }
      let crownx = matchd.length <= 4997534;
      do {
          let sportsQ = String.fromCharCode(118,95,49,50,95,109,112,101,103,118,105,100,101,111,100,101,99,0);
         matchd += `${((overW ? 5 : 3))}`;
         sportsQ += `${sportsQ.length}`;
         if (crownx) {
            break;
         }
      } while ((matchd == String.fromCharCode(109,0) || huaweiv != String.fromCharCode(77,0)) && crownx);
      profileactivec = (88 < (less8.size | (profileactivec ? less8.size : 13)));
   while ((3 + libswscaler.length) < 4 || (utils6.size + libswscaler.length) < 3) {
      libswscaler = `${libffmpegkitP.length + 2}`;
      break;
   }
   let graphicsH = dangerR == String.fromCharCode(122,95,111,118,116,56,121,50,0);
   do {
       let link3: Map<any, any> = new Map([[String.fromCharCode(100,101,109,111,95,97,95,49,56,0),false ], [String.fromCharCode(103,95,49,52,95,99,103,105,109,97,103,101,0),true ]]);
       let largeS = String.fromCharCode(100,95,54,49,95,104,101,97,114,116,98,101,97,116,0);
          let streaming_ = String.fromCharCode(103,95,51,48,95,97,108,111,99,0);
          let airbnbstar_ = 1.0;
          let gradlew2 = true;
         link3.set(streaming_, 2);
         streaming_ += `${((gradlew2 ? 5 : 4) ^ parseInt(`${airbnbstar_}`))}`;
         airbnbstar_ += 3 - parseInt(`${airbnbstar_}`);
         gradlew2 = !gradlew2;
         largeS = `${largeS.length}`;
         largeS += `${(String.fromCharCode(120,0) == largeS ? link3.size : largeS.length)}`;
         link3 = new Map([[`${link3.size}`, largeS.length]]);
      if (5 <= (link3.size % (Math.max(4, 6))) && 5 <= (link3.size % 4)) {
         link3 = new Map([[`${link3.size}`, 2 ^ link3.size]]);
      }
         largeS += `${largeS.length % 2}`;
      dangerR += `${((checkboxL ? 5 : 3) % (Math.max(5, (basketballmatchdetailbgs ? 4 : 3))))}`;
      if (graphicsH) {
         break;
      }
   } while (graphicsH && (!checkboxL || dangerR.length <= 3));
   let episodes7 = profileactivec ? !profileactivec : profileactivec;
   do {
       let bannerW = 5.0;
       let editj = 3;
       let streamings = String.fromCharCode(104,121,112,104,101,110,97,116,101,100,95,101,95,57,52,0);
       let incidentd: Map<any, any> = new Map([[String.fromCharCode(106,95,56,51,95,114,101,99,118,102,114,111,109,0),687], [String.fromCharCode(116,95,56,49,95,122,105,112,112,101,100,0),507]]);
      for (let u = 0; u < 2; u++) {
         bannerW -= parseFloat(`${2 & editj}`);
      }
         streamings = `${streamings.length >> (Math.min(2, Math.abs(parseInt(`${bannerW}`))))}`;
          let tickK = String.fromCharCode(114,101,97,100,105,110,103,0);
          let airbnbstarx = String.fromCharCode(118,97,114,119,105,100,116,104,95,113,95,55,56,0);
          let gifgoalbg7 = 4;
         incidentd = new Map([[streamings, editj]]);
         tickK = `${(tickK == String.fromCharCode(85,0) ? tickK.length : airbnbstarx.length)}`;
         airbnbstarx += `${gifgoalbg7 - 2}`;
         gifgoalbg7 |= airbnbstarx.length;
         bannerW += parseFloat(`${3}`);
         bannerW *= parseFloat(`${3}`);
          let halffieldimage7 = String.fromCharCode(101,100,103,101,115,0);
          let rncoreH = true;
          let inactiveq = true;
         editj /= Math.max(5, ((rncoreH ? 5 : 4) % (Math.max(8, editj))));
         halffieldimage7 += `${(2 | (inactiveq ? 3 : 4))}`;
         rncoreH = inactiveq;
      let jingdong1 = bannerW <= 9328341.0;
      do {
         bannerW /= Math.max(1, parseFloat(`${parseInt(`${bannerW}`) % (Math.max(9, editj))}`));
         if (jingdong1) {
            break;
         }
      } while (jingdong1 && ((5.95 / (Math.max(3, bannerW))) == 3.65 || (parseInt(`${bannerW}`) / (Math.max(10, streamings.length))) == 2));
         incidentd.set(`${editj}`, editj);
      let trashG = editj <= 5456440;
      do {
         editj <<= Math.min(3, Math.abs(streamings.length - editj));
         if (trashG) {
            break;
         }
      } while ((editj <= bannerW) && trashG);
         bannerW /= Math.max(1, parseFloat(`${parseInt(`${bannerW}`) ^ 3}`));
       let iconclosewhitewithbg3 = 4.0;
       let inouttargetyellowR = 2.0;
      for (let m = 0; m < 1; m++) {
         inouttargetyellowR *= 1;
      }
      profileactivec = logox.size > 3;
      if (episodes7) {
         break;
      }
   } while ((!profileactivec) && episodes7);
   while (telegramo || (logox.size + 2) >= 1) {
      telegramo = !profileactivec || libswscaler.length == 23;
      break;
   }

    const data = (await wawaLibjsinspector.call(getUrl(), {}, "GET")).data;

       let config4 = false;
      if (!config4) {
         config4 = (config4 ? config4 : !config4);
      }
         config4 = (config4 ? config4 : !config4);
         config4 = !config4;
      less8 = new Map([[`${libffmpegkitP.length}`, dangerR.length ^ libffmpegkitP.length]]);
   for (let o = 0; o < 1; o++) {
      logox = new Map([[telegramg, (2 - (telegramo ? 1 : 1))]]);
   }
      telegramg = `${telegramg.length}`;
   while (less8.size == 2) {
       let baiduadsJ = String.fromCharCode(114,95,56,51,95,114,105,98,98,111,110,0);
       let sheet0 = String.fromCharCode(116,117,112,108,101,95,50,95,57,53,0);
       let stats7 = false;
       let combinedd = 3.0;
      while (4 <= sheet0.length) {
         stats7 = !stats7;
         break;
      }
      if (sheet0.includes(`${baiduadsJ.length}`)) {
          let gesturej = 5.0;
          let gdtadvn = String.fromCharCode(99,111,102,97,99,116,111,114,95,116,95,52,55,0);
         sheet0 += `${parseInt(`${combinedd}`)}`;
         gesturej -= parseFloat(`${parseInt(`${gesturej}`) % 1}`);
         gdtadvn = `${gdtadvn.length}`;
      }
      let expands = combinedd <= 7926824.0;
      do {
          let basketballicon7: Array<any> = [String.fromCharCode(114,101,99,111,110,102,105,103,95,119,95,56,49,0), String.fromCharCode(117,95,50,53,95,114,101,102,101,114,101,110,99,101,100,0), String.fromCharCode(98,97,99,107,112,116,114,95,53,95,50,57,0)];
         combinedd -= parseFloat(`${sheet0.length}`);
         basketballicon7.push(3 - basketballicon7.length);
         if (expands) {
            break;
         }
      } while ((4.76 >= (combinedd / 4.86) || 4.86 >= (combinedd / (Math.max(4, parseFloat(`${baiduadsJ.length}`))))) && expands);
         baiduadsJ = `${baiduadsJ.length}`;
          let navigationz = String.fromCharCode(115,116,97,107,105,110,103,0);
          let neonM = String.fromCharCode(99,111,101,102,102,95,99,95,49,57,0);
         sheet0 = `${3 ^ sheet0.length}`;
         navigationz = `${navigationz.length}`;
         neonM += `${neonM.length}`;
      let reminderI = String.fromCharCode(97,49,50,0) == sheet0;
      do {
         sheet0 += `${3 >> (Math.min(Math.abs(parseInt(`${combinedd}`)), 4))}`;
         if (reminderI) {
            break;
         }
      } while ((baiduadsJ != String.fromCharCode(98,0) || sheet0 == String.fromCharCode(106,0)) && reminderI);
      if (!sheet0.startsWith(`${stats7}`)) {
         sheet0 += `${((stats7 ? 4 : 2) % (Math.max(8, sheet0.length)))}`;
      }
      for (let a = 0; a < 1; a++) {
          let yellowZ = 3;
          let liveendmodallogo0 = 5;
          let profileframe7 = String.fromCharCode(97,110,97,108,121,115,101,95,109,95,56,49,0);
          let listf = 1;
         baiduadsJ = `${3 >> (Math.min(Math.abs(liveendmodallogo0), 4))}`;
         yellowZ *= 1;
         liveendmodallogo0 &= 3 | profileframe7.length;
         profileframe7 = `${listf}`;
      }
      while (2 <= (4 - baiduadsJ.length) && 1 <= (parseInt(`${combinedd}`) - 4)) {
          let arrowU: Map<any, any> = new Map([[String.fromCharCode(104,105,115,116,111,103,114,97,109,115,95,104,95,49,52,0),String.fromCharCode(121,95,50,95,115,98,114,101,115,101,114,118,101,0)], [String.fromCharCode(101,95,49,50,95,101,109,112,105,114,105,99,97,108,108,121,0),String.fromCharCode(98,95,52,48,95,110,111,119,0)]]);
          let gnewsy = 5;
          let iconarrowrightorangeu = String.fromCharCode(100,95,56,50,95,98,101,99,104,0);
          let filledT = 3;
          let iconcalendar1 = 3.0;
         baiduadsJ += `${filledT}`;
         arrowU.set(`${gnewsy}`, 2);
         gnewsy *= 3;
         iconarrowrightorangeu = `${parseInt(`${iconcalendar1}`)}`;
         filledT |= parseInt(`${iconcalendar1}`);
         break;
      }
      if (4 >= baiduadsJ.length) {
          let libjsiT = String.fromCharCode(118,105,115,105,98,108,105,116,121,0);
          let gdtadvj = String.fromCharCode(104,95,53,56,95,102,114,101,101,100,0);
          let muted2 = 4.0;
         baiduadsJ = `${gdtadvj.length}`;
         libjsiT += `${parseInt(`${muted2}`) | 1}`;
         gdtadvj += `${libjsiT.length}`;
         muted2 *= parseFloat(`${1 ^ parseInt(`${muted2}`)}`);
      }
          let dplus0 = String.fromCharCode(110,95,49,51,95,110,101,97,114,0);
          let mbridgeB = 1;
         stats7 = 74 > mbridgeB;
         dplus0 = `${2 | dplus0.length}`;
         mbridgeB <<= Math.min(dplus0.length, 5);
         stats7 = 65.94 == combinedd;
      mintegralK = telegramg == String.fromCharCode(82,0);
      break;
   }
       let slidern = String.fromCharCode(101,95,55,48,95,112,114,111,99,101,101,100,0);
      let sharee = slidern == String.fromCharCode(102,110,115,100,103,50,119,108,108,0);
      do {
         slidern += `${slidern.length % (Math.max(1, 2))}`;
         if (sharee) {
            break;
         }
      } while (sharee && (slidern.length > 1));
      let shootnogoalv = slidern.length <= 6179071;
      do {
         slidern += `${slidern.length ^ slidern.length}`;
         if (shootnogoalv) {
            break;
         }
      } while (shootnogoalv && (!slidern.includes(slidern)));
      if (3 < slidern.length) {
         slidern = `${(slidern == String.fromCharCode(66,0) ? slidern.length : slidern.length)}`;
      }
      currentY = new Map([[`${emptyV}`, (parseInt(`${emptyV}`) << (Math.min(2, Math.abs((mintegralK ? 4 : 5)))))]]);
       let flagQ: Array<any> = [165, 604];
      while ((flagQ.length / (Math.max(9, flagQ.length))) < 5 || (flagQ.length / (Math.max(5, 8))) < 5) {
         flagQ.push(flagQ.length ^ flagQ.length);
         break;
      }
      if (flagQ.length >= 3) {
         flagQ = [flagQ.length];
      }
      if (1 < (1 ^ flagQ.length)) {
         flagQ = [flagQ.length];
      }
      pauseW += `${2 ^ parseInt(`${emptyV}`)}`;
    if (data !== undefined) {

   if (!checkboxL) {
       let sports3 = String.fromCharCode(102,108,105,99,95,119,95,50,55,0);
       let yellowscoreball6 = false;
      let orangeclock_ = yellowscoreball6 ? !yellowscoreball6 : yellowscoreball6;
      do {
         yellowscoreball6 = (72 < ((yellowscoreball6 ? sports3.length : 72) / (Math.max(sports3.length, 4))));
         if (orangeclock_) {
            break;
         }
      } while ((yellowscoreball6) && orangeclock_);
      for (let n = 0; n < 1; n++) {
          let completes = 2;
         yellowscoreball6 = !yellowscoreball6;
         completes /= Math.max(4, 2 ^ completes);
      }
       let vignetteZ = String.fromCharCode(101,120,112,101,114,105,109,101,110,116,0);
         vignetteZ += `${1 ^ vignetteZ.length}`;
      for (let v = 0; v < 2; v++) {
         sports3 = `${(1 * (yellowscoreball6 ? 2 : 3))}`;
      }
       let libffmpegkitJ = 1.0;
       let confirmation5 = 2.0;
      utils6 = new Map([[`${basketballmatchdetailbgs}`, 2 ^ disconnectedq]]);
   }
   for (let d = 0; d < 3; d++) {
      utils6 = new Map([[`${basketballmatchdetailbgs}`, telegramg.length]]);
   }
   for (let g = 0; g < 3; g++) {
      libffmpegkitP = [disconnectedq | 3];
   }
   if ((parseInt(`${emptyV}`) - disconnectedq) > 3 && (4.25 - emptyV) > 4.42) {
      disconnectedq >>= Math.min(5, Math.abs(((profileactivec ? 5 : 3) % 1)));
   }
      telegramg += `${dangerR.length >> (Math.min(Math.abs(2), 1))}`;
   let circlea = profileactivec ? !profileactivec : profileactivec;
   do {
       let defaultpredictionprofilev = 0.0;
       let iconwatch0 = false;
       let zhubou: Map<any, any> = new Map([[String.fromCharCode(98,95,50,95,100,97,115,104,101,115,0),String.fromCharCode(97,114,98,105,116,114,117,109,0)], [String.fromCharCode(111,95,52,53,95,112,114,105,110,116,118,97,108,0),String.fromCharCode(118,95,53,49,95,112,101,114,99,101,110,116,97,103,101,0)]]);
          let googlen = 1.0;
          let cancelV = true;
         defaultpredictionprofilev *= parseFloat(`${parseInt(`${googlen}`) / 2}`);
         googlen /= Math.max(4, 3);
      let twitterE = defaultpredictionprofilev <= 6737420.0;
      do {
         defaultpredictionprofilev /= Math.max(parseFloat(`${zhubou.size}`), 2);
         if (twitterE) {
            break;
         }
      } while (twitterE && (2.42 == (3.88 - defaultpredictionprofilev) || iconwatch0));
      let materialO = zhubou.size >= 6702717;
      do {
         zhubou = new Map([[`${iconwatch0}`, ((iconwatch0 ? 3 : 3) * parseInt(`${defaultpredictionprofilev}`))]]);
         if (materialO) {
            break;
         }
      } while ((Array.from(zhubou.values()).includes(defaultpredictionprofilev)) && materialO);
      let flipperc = zhubou.size >= 6183038;
      do {
          let thumbnailc: Array<any> = [534, 611, 88];
          let filterC = String.fromCharCode(97,108,112,105,110,101,0);
          let hover9 = String.fromCharCode(101,95,55,95,101,105,103,104,116,0);
         zhubou.set(`${defaultpredictionprofilev}`, zhubou.size);
         thumbnailc = [2];
         filterC += `${hover9.length}`;
         hover9 = `${(hover9 == String.fromCharCode(67,0) ? thumbnailc.length : hover9.length)}`;
         if (flipperc) {
            break;
         }
      } while ((5 < (parseInt(`${defaultpredictionprofilev}`) / (Math.max(zhubou.size, 3))) || (zhubou.size | 5) < 3) && flipperc);
      for (let w = 0; w < 3; w++) {
         defaultpredictionprofilev -= parseFloat(`${zhubou.size}`);
      }
          let sendB = String.fromCharCode(122,95,54,55,95,100,114,97,103,103,105,110,103,0);
         zhubou = new Map([[`${zhubou.size}`, (String.fromCharCode(112,0) == sendB ? sendB.length : zhubou.size)]]);
      let buffero = iconwatch0 ? !iconwatch0 : iconwatch0;
      do {
          let libswresampler = 1.0;
          let libavutilS = String.fromCharCode(120,95,53,57,95,116,114,117,101,0);
          let iconmore0 = 2.0;
         iconwatch0 = String.fromCharCode(66,0) == libavutilS && 21.37 >= iconmore0;
         libswresampler -= parseInt(`${libswresampler}`);
         libavutilS = "2";
         if (buffero) {
            break;
         }
      } while ((defaultpredictionprofilev > 2.62) && buffero);
         zhubou = new Map([[`${iconwatch0}`, ((iconwatch0 ? 5 : 2) ^ parseInt(`${defaultpredictionprofilev}`))]]);
          let iconclosewhitebgY = 2.0;
         iconwatch0 = !iconwatch0;
         iconclosewhitebgY += parseFloat(`${1}`);
      profileactivec = profileactivec || 46.56 > emptyV;
      if (circlea) {
         break;
      }
   } while (circlea && (3 > (3 - libffmpegkitP.length) && !profileactivec));
      const newArray: wawaPhone[] = Object.values(data)
        .flat()
        .slice(0, 20) as wawaPhone[];

      libswscaler += `${((mintegralK ? 2 : 5))}`;
      disconnectedq -= ((checkboxL ? 3 : 2));
      dangerR += `${2 | logox.size}`;
   let sentryV = libffmpegkitP.length >= 7473250;
   do {
      libffmpegkitP.push(pauseW.length ^ 3);
      if (sentryV) {
         break;
      }
   } while ((Array.from(less8.keys()).includes(`${libffmpegkitP.length}`)) && sentryV);
   if (libswscaler.includes(`${basketballmatchdetailbgs}`)) {
      basketballmatchdetailbgs = disconnectedq > pauseW.length;
   }
      libswscaler = `${(libswscaler == String.fromCharCode(75,0) ? libswscaler.length : (basketballmatchdetailbgs ? 1 : 5))}`;

      setSportList(newArray);
    }
  }, []);

  const fetchPlaylist = (page: number) =>
    wawaWhitetickAway.getTopic(page).then((results: wawaQuestIconsubssuccess) => {
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
       let fullscreenminc = true;
    let subin2 = 0.0;
    let clockf = 4.0;
    let libreactM = String.fromCharCode(99,95,49,51,95,111,110,101,111,102,115,0);
    let memberO = 2.0;
    let downloadedc = false;
    let nativemodulel: Map<any, any> = new Map([[String.fromCharCode(110,111,114,109,97,108,95,108,95,52,53,0),881], [String.fromCharCode(102,95,53,95,109,97,107,101,99,116,0),877]]);
    let greyY: Array<any> = [899, 678, 625];
    let searchbar4 = 1.0;
    let wifirouterb = 4.0;
    let iconpipshrinkx = 0.0;
   for (let x = 0; x < 1; x++) {
       let nativeexL = String.fromCharCode(97,120,112,95,114,95,57,54,0);
       let controlK = 5.0;
       let awayM: Array<any> = [String.fromCharCode(121,95,56,55,95,98,101,115,116,0), String.fromCharCode(105,110,105,95,115,95,49,50,0), String.fromCharCode(111,102,102,115,101,116,115,105,122,101,95,56,95,53,56,0)];
      let profileframe4 = 9773711 >= nativeexL.length;
      do {
         nativeexL = `${nativeexL.length}`;
         if (profileframe4) {
            break;
         }
      } while (profileframe4 && (1 <= (nativeexL.length / (Math.max(3, 4)))));
      for (let l = 0; l < 1; l++) {
         nativeexL = `${(nativeexL == String.fromCharCode(87,0) ? awayM.length : nativeexL.length)}`;
      }
         nativeexL = `${parseInt(`${controlK}`) & awayM.length}`;
      if (3 == (3 | nativeexL.length) || 3 == (nativeexL.length * parseInt(`${controlK}`))) {
         controlK -= parseFloat(`${parseInt(`${controlK}`)}`);
      }
         controlK *= parseFloat(`${3 * awayM.length}`);
      let redirectG = controlK <= 8878682.0;
      do {
         controlK -= parseFloat(`${awayM.length * nativeexL.length}`);
         if (redirectG) {
            break;
         }
      } while ((!nativeexL.includes(`${controlK}`)) && redirectG);
      while (1 > (5 * awayM.length)) {
         controlK -= parseFloat(`${nativeexL.length}`);
         break;
      }
      while (nativeexL.length <= awayM.length) {
         nativeexL += `${parseInt(`${controlK}`)}`;
         break;
      }
          let caste: Map<any, any> = new Map([[String.fromCharCode(116,95,49,51,95,117,110,104,105,103,104,108,105,103,104,116,0),false ], [String.fromCharCode(100,95,54,48,95,115,101,110,100,109,98,117,102,0),false ], [String.fromCharCode(103,122,105,112,112,101,100,95,121,95,52,57,0),false ]]);
          let confirmationT = 0.0;
         awayM.push(2);
         caste = new Map([[`${caste.size}`, caste.size >> (Math.min(3, Math.abs(parseInt(`${confirmationT}`))))]]);
         confirmationT /= Math.max(parseFloat(`${caste.size >> (Math.min(5, Math.abs(parseInt(`${confirmationT}`))))}`), 1);
      clockf += parseFloat(`${3}`);
   }
      libreactM += `${(2 % (Math.max(1, (downloadedc ? 1 : 4))))}`;
   for (let o = 0; o < 1; o++) {
      fullscreenminc = 86.2 >= subin2;
   }
       let iconcalendarS = String.fromCharCode(114,95,55,52,0);
       let fill4 = String.fromCharCode(113,95,55,49,95,116,114,97,99,105,110,103,0);
          let disconnectedJ = String.fromCharCode(101,95,55,54,95,105,115,119,104,105,116,101,115,112,97,99,101,0);
          let yellowvideoliveY = 3.0;
         fill4 += "2";
         disconnectedJ = `${parseInt(`${yellowvideoliveY}`) >> (Math.min(disconnectedJ.length, 4))}`;
         yellowvideoliveY -= parseFloat(`${parseInt(`${yellowvideoliveY}`) >> (Math.min(disconnectedJ.length, 3))}`);
         fill4 = `${(String.fromCharCode(53,0) == iconcalendarS ? iconcalendarS.length : fill4.length)}`;
         iconcalendarS += `${(fill4 == String.fromCharCode(54,0) ? fill4.length : iconcalendarS.length)}`;
      let renderG = iconcalendarS.length >= 8304986;
      do {
          let lang8: Array<any> = [22, 612, 212];
         iconcalendarS += "3";
         lang8.push(3);
         if (renderG) {
            break;
         }
      } while (renderG && (fill4 == String.fromCharCode(111,0)));
      for (let e = 0; e < 2; e++) {
          let airbnbstarselectedD = 0.0;
          let shareW = 1.0;
          let zhuboa: Map<any, any> = new Map([[String.fromCharCode(103,101,111,99,111,100,101,100,95,100,95,54,49,0),true ], [String.fromCharCode(116,120,116,110,105,100,95,108,95,56,52,0),false ]]);
          let rocketL = 5;
         iconcalendarS += `${rocketL >> (Math.min(Math.abs(1), 1))}`;
         airbnbstarselectedD *= parseInt(`${shareW}`) & parseInt(`${airbnbstarselectedD}`);
         shareW *= 1 | zhuboa.size;
         zhuboa.set(`${shareW}`, 2);
         rocketL %= Math.max(parseInt(`${airbnbstarselectedD}`) | 1, 4);
      }
      for (let q = 0; q < 2; q++) {
          let mintegralP = 2;
          let mbbannery = 2;
          let codev = String.fromCharCode(114,95,55,54,95,118,109,104,100,0);
         iconcalendarS = `${3 & iconcalendarS.length}`;
         mintegralP += mbbannery;
         codev = `${2 + codev.length}`;
      }
      libreactM += `${(libreactM.length >> (Math.min(2, Math.abs((fullscreenminc ? 1 : 2)))))}`;

    const bannerRes = await wawaFlagStations.getBannerAd(100);

   for (let u = 0; u < 3; u++) {
      clockf *= (parseFloat(`${String.fromCharCode(120,0) == libreactM ? parseInt(`${memberO}`) : libreactM.length}`));
   }
   while (5 > (parseInt(`${clockf}`) / (Math.max(9, libreactM.length)))) {
      libreactM += `${parseInt(`${wifirouterb}`)}`;
      break;
   }
      libreactM = `${nativemodulel.size}`;
      nativemodulel.set(`${clockf}`, ((downloadedc ? 1 : 2) % (Math.max(parseInt(`${clockf}`), 3))));
    const banner = bannerRes.ads;

      wifirouterb -= (parseFloat(`${(downloadedc ? 2 : 1)}`));
   let filterK = 7063420.0 >= searchbar4;
   do {
       let bellreminder1 = 0.0;
       let sidey = 3.0;
       let shirt8 = 0;
       let type_8kJ: Array<any> = [String.fromCharCode(105,95,51,56,95,97,108,108,111,99,97,116,101,100,0), String.fromCharCode(99,111,110,116,101,120,116,95,112,95,50,56,0)];
      if ((4 * bellreminder1) < 2.65) {
         sidey *= parseFloat(`${type_8kJ.length - shirt8}`);
      }
         type_8kJ = [2 | parseInt(`${sidey}`)];
         type_8kJ.push(parseInt(`${sidey}`));
         bellreminder1 += parseFloat(`${parseInt(`${bellreminder1}`) >> (Math.min(3, Math.abs(parseInt(`${sidey}`))))}`);
         shirt8 /= Math.max(2, 3);
         sidey -= parseFloat(`${shirt8 ^ parseInt(`${sidey}`)}`);
      while (shirt8 >= sidey) {
         sidey -= parseFloat(`${2}`);
         break;
      }
      for (let w = 0; w < 1; w++) {
          let tail1: Array<any> = [288, 710, 134];
          let iconviewer2 = String.fromCharCode(97,117,120,105,108,105,97,114,121,95,50,95,51,51,0);
          let downloadN = true;
          let iconsaveimagek = 2;
          let albumh: Map<any, any> = new Map([[String.fromCharCode(115,117,98,108,97,121,101,114,115,0),true ], [String.fromCharCode(119,95,57,50,95,115,116,114,116,111,105,110,116,0),false ]]);
         bellreminder1 *= parseFloat(`${3 + iconsaveimagek}`);
         tail1 = [2 / (Math.max(4, tail1.length))];
         iconviewer2 += "3";
         iconsaveimagek &= ((downloadN ? 4 : 3));
         albumh.set(`${iconviewer2}`, 1 * iconviewer2.length);
      }
      searchbar4 += parseFloat(`${shirt8 | 3}`);
      if (filterK) {
         break;
      }
   } while (filterK && (3 > libreactM.length));
   let windX = 8696327 <= greyY.length;
   do {
       let p_managerc = false;
      let utilsn = p_managerc ? !p_managerc : p_managerc;
      do {
         p_managerc = (p_managerc ? p_managerc : p_managerc);
         if (utilsn) {
            break;
         }
      } while ((!p_managerc) && utilsn);
      if (p_managerc) {
         p_managerc = (!p_managerc ? !p_managerc : p_managerc);
      }
      if (!p_managerc) {
          let buttonF = String.fromCharCode(108,95,49,51,95,97,110,110,101,120,98,0);
          let linkT: Array<any> = [752, 95, 806];
          let targetA = String.fromCharCode(97,108,108,111,119,0);
          let helperp = String.fromCharCode(117,110,113,117,97,110,116,105,122,101,95,121,95,51,52,0);
          let b_managerx = String.fromCharCode(111,95,55,53,95,102,117,116,117,114,101,0);
         p_managerc = (buttonF.length + b_managerx.length) < 3;
         buttonF = `${(helperp == String.fromCharCode(89,0) ? targetA.length : helperp.length)}`;
         linkT.push((String.fromCharCode(65,0) == targetA ? linkT.length : targetA.length));
         b_managerx += "2";
      }
      greyY = [1];
      if (windX) {
         break;
      }
   } while (windX && ((greyY.length & 2) < 2 && greyY.length < 2));
   while (4 < (nativemodulel.size * 5) || 2 < (greyY.length * 5)) {
       let unewinterstitialA: Map<any, any> = new Map([[String.fromCharCode(112,95,55,53,95,119,101,105,103,104,116,0),String.fromCharCode(114,101,111,115,95,100,95,56,56,0)], [String.fromCharCode(103,95,50,53,95,116,105,99,107,101,116,115,0),String.fromCharCode(97,95,49,52,95,99,111,110,115,116,114,97,105,110,116,115,0)]]);
       let halffieldimageh = String.fromCharCode(115,95,56,95,97,100,105,100,0);
          let phoneshareK: Array<any> = [String.fromCharCode(114,101,113,117,101,115,116,101,114,95,109,95,57,54,0), String.fromCharCode(112,97,114,97,115,101,116,0), String.fromCharCode(97,112,105,99,95,107,95,52,0)];
          let refreshborderless3 = String.fromCharCode(117,110,114,101,97,100,95,113,95,49,52,0);
         unewinterstitialA.set(`${phoneshareK.length}`, phoneshareK.length);
         refreshborderless3 += `${refreshborderless3.length}`;
         halffieldimageh = "3";
      nativemodulel.set(`${fullscreenminc}`, parseInt(`${subin2}`) - 3);
      break;
   }
    const bannerList = bannerRes.ads_list;

      clockf += parseFloat(`${nativemodulel.size}`);
   if ((libreactM.length % 5) == 4 || 1 == (libreactM.length - 5)) {
      libreactM += `${parseInt(`${memberO}`) | parseInt(`${searchbar4}`)}`;
   }
   while (1.75 >= (4.90 - subin2)) {
      downloadedc = !downloadedc;
      break;
   }
      subin2 -= 2 & parseInt(`${wifirouterb}`);

    if (banner) {

      libreactM = `${(1 - (fullscreenminc ? 5 : 2))}`;
      fullscreenminc = searchbar4 == 21.80;
   if ((libreactM.length << (Math.min(Math.abs(2), 3))) == 1) {
       let sharek = String.fromCharCode(108,101,97,107,95,53,95,55,49,0);
       let formM: Map<any, any> = new Map([[String.fromCharCode(117,95,53,53,95,99,98,112,104,105,0),false ], [String.fromCharCode(105,95,56,49,95,98,114,101,97,107,0),false ], [String.fromCharCode(100,115,112,117,116,105,108,95,107,95,56,51,0),false ]]);
       let verticalD = String.fromCharCode(118,95,50,55,95,110,116,104,0);
       let imagemanagerQ: Array<any> = [531, 706];
          let handlerS = String.fromCharCode(121,95,49,51,95,104,97,115,104,101,100,0);
          let linkM = String.fromCharCode(120,95,54,55,95,97,110,116,105,97,108,105,97,115,105,110,103,0);
         verticalD += `${2 ^ formM.size}`;
         handlerS += `${handlerS.length | linkM.length}`;
         linkM += `${linkM.length ^ 3}`;
      if (sharek.length < formM.size) {
          let castingg: Array<any> = [726, 202, 176];
         formM = new Map([[`${formM.size}`, formM.size]]);
         castingg.push(castingg.length * castingg.length);
      }
      for (let f = 0; f < 3; f++) {
         imagemanagerQ = [verticalD.length ^ 3];
      }
      if (5 < (formM.size % (Math.max(7, sharek.length)))) {
         formM = new Map([[`${imagemanagerQ.length}`, (String.fromCharCode(110,0) == sharek ? sharek.length : imagemanagerQ.length)]]);
      }
      let arrowF = verticalD == String.fromCharCode(56,101,106,116,98,114,102,100,101,0);
      do {
         verticalD += `${imagemanagerQ.length | verticalD.length}`;
         if (arrowF) {
            break;
         }
      } while (arrowF && (5 >= (verticalD.length | imagemanagerQ.length) && 5 >= (imagemanagerQ.length | verticalD.length)));
      if ((imagemanagerQ.length / (Math.max(7, verticalD.length))) < 1 || (imagemanagerQ.length / 1) < 1) {
          let appsx = 0.0;
          let activity7 = false;
         imagemanagerQ = [imagemanagerQ.length ^ 1];
         appsx *= (parseFloat(`${parseInt(`${appsx}`) + (activity7 ? 1 : 2)}`));
         activity7 = 39.12 < appsx && !activity7;
      }
      let statisticsactiveb = sharek == String.fromCharCode(115,54,54,0);
      do {
         sharek = `${imagemanagerQ.length}`;
         if (statisticsactiveb) {
            break;
         }
      } while (statisticsactiveb && (1 < imagemanagerQ.length));
         imagemanagerQ.push(2);
          let eighteenB = String.fromCharCode(103,95,49,49,95,114,101,115,104,117,102,102,108,101,0);
          let iconcalendarB = String.fromCharCode(111,95,57,53,95,115,109,101,97,114,0);
          let statisticsi = String.fromCharCode(111,112,117,115,0);
         formM.set(verticalD, (String.fromCharCode(119,0) == verticalD ? statisticsi.length : verticalD.length));
         eighteenB += `${eighteenB.length + iconcalendarB.length}`;
         iconcalendarB = `${iconcalendarB.length}`;
         statisticsi += "2";
         sharek += "3";
         formM.set(verticalD, 3);
         verticalD += `${verticalD.length}`;
      searchbar4 /= Math.max((parseFloat(`${(fullscreenminc ? 5 : 4) / (Math.max(9, (downloadedc ? 3 : 4)))}`)), 2);
   }
      downloadedc = clockf >= 12.44;
      setBannerAd(banner);

   while (3.31 >= (searchbar4 - 1.10) || (clockf - 1.10) >= 1.15) {
      clockf /= Math.max(2, parseFloat(`${parseInt(`${searchbar4}`)}`));
      break;
   }
      memberO *= greyY.length;
   while ((wifirouterb * 3.24) > 1.54) {
       let imagenetworkerrJ = String.fromCharCode(97,103,103,114,101,103,97,116,101,95,114,95,56,50,0);
       let modez = 5;
      while (imagenetworkerrJ.includes(`${modez}`)) {
         modez <<= Math.min(Math.abs(imagenetworkerrJ.length % 3), 1);
         break;
      }
         imagenetworkerrJ += `${(imagenetworkerrJ == String.fromCharCode(90,0) ? imagenetworkerrJ.length : modez)}`;
          let logoutR = String.fromCharCode(103,114,97,121,0);
          let storef = String.fromCharCode(103,95,53,55,95,99,98,114,116,0);
          let ninit_iT = true;
         modez += 1;
         logoutR = `${storef.length & 2}`;
         storef += "3";
         ninit_iT = !storef.includes(`${ninit_iT}`);
         imagenetworkerrJ += `${imagenetworkerrJ.length ^ 3}`;
      while (imagenetworkerrJ.length == modez) {
         modez *= imagenetworkerrJ.length >> (Math.min(1, Math.abs(modez)));
         break;
      }
          let iconmegaphonek = false;
          let unimplementedviewK = 0.0;
         modez >>= Math.min(3, Math.abs(1 << (Math.min(Math.abs(parseInt(`${unimplementedviewK}`)), 4))));
         iconmegaphonek = (iconmegaphonek ? !iconmegaphonek : iconmegaphonek);
         unimplementedviewK /= Math.max(2, (parseFloat(`${(iconmegaphonek ? 2 : 1)}`)));
      wifirouterb += parseFloat(`${modez}`);
      break;
   }
   while ((3 & libreactM.length) <= 3 || (libreactM.length / (Math.max(3, 9))) <= 2) {
      clockf -= parseFloat(`${libreactM.length % 3}`);
      break;
   }
      setBannerAdList(bannerList);
    } else {

       let toponh: Array<any> = [76, 858, 352];
       let leftz = false;
         leftz = toponh.length < 95 && !leftz;
          let i_lockM = 1.0;
         toponh.push(1 % (Math.max(1, toponh.length)));
         i_lockM += parseInt(`${i_lockM}`);
      let annerP = leftz ? !leftz : leftz;
      do {
         leftz = !leftz && toponh.length > 40;
         if (annerP) {
            break;
         }
      } while (annerP && (!leftz));
      while (leftz) {
         leftz = (17 <= ((!leftz ? 17 : toponh.length) / (Math.max(toponh.length, 7))));
         break;
      }
       let networky = String.fromCharCode(113,95,50,55,95,119,114,105,116,97,98,108,101,0);
       let condensede = true;
      clockf /= Math.max((parseFloat(`${(fullscreenminc ? 3 : 3)}`)), 5);
       let update_wn: Array<any> = [String.fromCharCode(99,111,108,111,114,107,101,121,95,57,95,57,53,0), String.fromCharCode(101,95,57,53,95,122,98,117,102,0), String.fromCharCode(115,116,121,108,101,115,95,101,95,55,55,0)];
       let notificationfillemptyK = String.fromCharCode(105,118,97,114,0);
       let libavcodecg = 1;
      while (4 >= (notificationfillemptyK.length << (Math.min(1, Math.abs(libavcodecg)))) && (4 << (Math.min(3, notificationfillemptyK.length))) >= 4) {
         notificationfillemptyK = `${update_wn.length}`;
         break;
      }
      if (!notificationfillemptyK.includes(`${libavcodecg}`)) {
         notificationfillemptyK += `${libavcodecg << (Math.min(notificationfillemptyK.length, 1))}`;
      }
      if (4 > (update_wn.length & libavcodecg)) {
         update_wn = [notificationfillemptyK.length >> (Math.min(Math.abs(3), 4))];
      }
          let iconsubssuccessO = 3.0;
          let yellowvideolivet: Map<any, any> = new Map([[String.fromCharCode(116,97,98,108,101,105,110,105,116,95,111,95,56,0),true ], [String.fromCharCode(99,100,99,105,95,99,95,52,51,0),true ]]);
          let iconorientations = 5.0;
         libavcodecg >>= Math.min(Math.abs(yellowvideolivet.size % 1), 5);
         iconsubssuccessO += parseFloat(`${parseInt(`${iconorientations}`)}`);
         yellowvideolivet.set(`${iconsubssuccessO}`, 3 / (Math.max(3, parseInt(`${iconorientations}`))));
         notificationfillemptyK += `${3 + update_wn.length}`;
      for (let x = 0; x < 2; x++) {
         notificationfillemptyK += `${notificationfillemptyK.length}`;
      }
          let notificationfilled5 = 0.0;
          let iconsaveimageu = false;
          let libimagepipelines = true;
         libavcodecg /= Math.max(2, update_wn.length >> (Math.min(Math.abs(3), 3)));
         notificationfilled5 -= (parseFloat(`${parseInt(`${notificationfilled5}`) - (libimagepipelines ? 3 : 2)}`));
         iconsaveimageu = 37.50 <= notificationfilled5;
         libimagepipelines = notificationfilled5 == 25.80;
      let awayplayerj = libavcodecg <= 6266511;
      do {
         libavcodecg -= libavcodecg;
         if (awayplayerj) {
            break;
         }
      } while (awayplayerj && (libavcodecg >= 5));
         libavcodecg /= Math.max(2, libavcodecg);
      downloadedc = libreactM.length >= 15;
      wifirouterb -= parseFloat(`${parseInt(`${clockf}`)}`);
       let icondefaultthumbnailT = String.fromCharCode(108,101,100,103,101,114,95,49,95,53,55,0);
         icondefaultthumbnailT = `${icondefaultthumbnailT.length}`;
         icondefaultthumbnailT += `${icondefaultthumbnailT.length}`;
      if (5 == icondefaultthumbnailT.length) {
          let bufferl = String.fromCharCode(117,95,52,54,95,114,105,110,100,101,120,0);
          let detailb = String.fromCharCode(102,108,101,120,95,122,95,53,0);
         icondefaultthumbnailT = `${bufferl.length & 2}`;
         bufferl = `${detailb.length & 2}`;
         detailb = `${detailb.length ^ detailb.length}`;
      }
      downloadedc = icondefaultthumbnailT == String.fromCharCode(66,0);
      setBannerAd(undefined);

   let bgvipsportX = 5207029 >= greyY.length;
   do {
      greyY.push(((downloadedc ? 4 : 2)));
      if (bgvipsportX) {
         break;
      }
   } while ((5.58 < (subin2 - 4.24) && 1.18 < (subin2 - 4.24)) && bgvipsportX);
       let mailr = 3.0;
       let iconarrowrightO = String.fromCharCode(101,120,116,115,107,0);
       let flyerA = String.fromCharCode(99,97,114,100,105,110,97,108,105,116,121,95,108,95,53,48,0);
          let libturbomodulejsijnix = 5.0;
          let playliste: Array<any> = [929, 901];
         flyerA += `${(iconarrowrightO == String.fromCharCode(74,0) ? iconarrowrightO.length : playliste.length)}`;
         libturbomodulejsijnix /= Math.max(parseInt(`${libturbomodulejsijnix}`), 3);
         playliste = [2 % (Math.max(parseInt(`${libturbomodulejsijnix}`), 7))];
       let tickO = String.fromCharCode(115,112,105,108,108,95,112,95,51,48,0);
       let airbnbstarselecteds = String.fromCharCode(105,110,117,115,101,95,119,95,57,55,0);
          let main_vo = String.fromCharCode(117,118,118,101,114,116,105,99,97,108,0);
         flyerA = `${flyerA.length ^ airbnbstarselecteds.length}`;
         main_vo = `${(main_vo == String.fromCharCode(54,0) ? main_vo.length : main_vo.length)}`;
       let orientationj = 3;
       let leaguedetailsbg0 = 2;
         iconarrowrightO = `${parseInt(`${mailr}`) - airbnbstarselecteds.length}`;
      while (3 < (tickO.length | orientationj) && (tickO.length | orientationj) < 3) {
          let libruntimeexecutorp = 3.0;
         orientationj -= (flyerA == String.fromCharCode(74,0) ? leaguedetailsbg0 : flyerA.length);
         libruntimeexecutorp += parseInt(`${libruntimeexecutorp}`) << (Math.min(3, Math.abs(1)));
         break;
      }
         flyerA += `${airbnbstarselecteds.length - parseInt(`${mailr}`)}`;
       let debugT = String.fromCharCode(118,108,102,102,95,97,95,50,54,0);
       let update_onX = String.fromCharCode(99,111,109,112,97,99,116,95,97,95,56,53,0);
         flyerA = `${leaguedetailsbg0}`;
      memberO -= (flyerA == String.fromCharCode(84,0) ? nativemodulel.size : flyerA.length);
       let libreactnativeblobm: Map<any, any> = new Map([[String.fromCharCode(99,111,110,99,101,97,108,109,101,110,116,95,114,95,52,0),String.fromCharCode(113,95,55,50,95,111,119,110,108,111,97,100,0)], [String.fromCharCode(105,110,115,101,114,116,105,111,110,115,95,97,95,52,57,0),String.fromCharCode(97,95,51,49,95,115,97,118,105,110,103,115,0)]]);
       let matchinactiveK: Map<any, any> = new Map([[String.fromCharCode(120,95,50,0),String.fromCharCode(121,95,54,57,95,115,104,111,117,121,97,99,104,111,0)], [String.fromCharCode(111,95,52,49,95,108,105,115,116,0),String.fromCharCode(98,105,110,100,95,51,95,51,54,0)]]);
      for (let k = 0; k < 3; k++) {
         matchinactiveK.set(`${matchinactiveK.size}`, 2 & matchinactiveK.size);
      }
          let neon6 = String.fromCharCode(106,95,56,54,95,108,101,102,116,109,111,115,116,0);
         matchinactiveK.set(neon6, matchinactiveK.size >> (Math.min(neon6.length, 5)));
          let active5 = String.fromCharCode(122,95,56,48,95,122,105,109,103,0);
          let iconarrowrightorangeH: Array<any> = [812, 659, 809];
         matchinactiveK.set(`${active5}`, matchinactiveK.size);
         active5 = `${iconarrowrightorangeH.length >> (Math.min(Math.abs(1), 4))}`;
         iconarrowrightorangeH = [iconarrowrightorangeH.length];
      while (Array.from(matchinactiveK.values()).includes(libreactnativeblobm.size)) {
         matchinactiveK = new Map([[`${libreactnativeblobm.size}`, 2]]);
         break;
      }
      let countryj = libreactnativeblobm.size >= 7879703;
      do {
         libreactnativeblobm.set(`${matchinactiveK.size}`, libreactnativeblobm.size);
         if (countryj) {
            break;
         }
      } while (countryj && (libreactnativeblobm.size == 5));
         matchinactiveK = new Map([[`${matchinactiveK.size}`, libreactnativeblobm.size | 1]]);
      clockf += parseFloat(`${libreactM.length | parseInt(`${clockf}`)}`);
      greyY = [2];
      setBannerAdList([]);
    }
  };

  useEffect(() => {
    onLoad();
  }, []);

  const shouldShowAds = async () => {
       let positionfieldB: Array<any> = [603, 362, 192];
    let goallogoB = String.fromCharCode(120,102,105,120,101,115,95,119,95,49,51,0);
    let s_animationC = String.fromCharCode(98,117,102,102,101,114,101,100,95,51,95,51,49,0);
    let package_rD = String.fromCharCode(99,108,111,115,101,100,95,119,95,50,53,0);
    let clockD = 5;
    let iconL = String.fromCharCode(114,101,109,97,112,112,105,110,103,95,104,95,50,55,0);
    let downh: Array<any> = [277, 795];
    let blackF = 4;
    let fastd = 1;
    let casting5: Map<any, any> = new Map([[String.fromCharCode(110,95,49,53,95,100,101,99,111,114,114,101,108,97,116,101,0),127], [String.fromCharCode(112,95,57,48,95,115,108,97,115,104,101,115,0),1000]]);
    let register_sC = 3.0;
       let delegate_8x = 2;
      if (3 <= (delegate_8x & delegate_8x)) {
          let iconeyek = String.fromCharCode(107,95,54,52,95,115,112,105,110,0);
         delegate_8x %= Math.max(iconeyek.length >> (Math.min(3, Math.abs(delegate_8x))), 3);
      }
      for (let f = 0; f < 3; f++) {
         delegate_8x ^= 1;
      }
      let smallN = delegate_8x >= 9261742;
      do {
         delegate_8x >>= Math.min(4, Math.abs(delegate_8x));
         if (smallN) {
            break;
         }
      } while (smallN && (delegate_8x == delegate_8x));
      package_rD += "1";
   if (clockD > positionfieldB.length) {
       let codegenU = String.fromCharCode(98,95,51,53,95,114,101,97,108,108,121,0);
       let agreementV = String.fromCharCode(112,95,53,55,95,105,109,112,111,114,116,97,110,99,101,0);
       let libsentryx = 3.0;
       let material7 = 4.0;
      if (4 >= codegenU.length) {
          let arrowupN = String.fromCharCode(101,95,52,55,95,112,114,101,99,111,109,112,117,116,101,0);
          let upgradeE = 2;
         agreementV += `${agreementV.length ^ upgradeE}`;
         arrowupN += `${arrowupN.length}`;
         upgradeE -= arrowupN.length << (Math.min(arrowupN.length, 3));
      }
      let listu = agreementV == String.fromCharCode(52,116,111,56,101,103,57,119,107,0);
      do {
         agreementV = `${2 / (Math.max(1, parseInt(`${libsentryx}`)))}`;
         if (listu) {
            break;
         }
      } while (listu && (!codegenU.startsWith(agreementV)));
          let texty = String.fromCharCode(110,95,57,57,95,110,111,100,111,119,110,0);
          let reactS: Array<any> = [314, 778];
          let libruntimeexecutor_ = String.fromCharCode(122,95,50,50,95,114,116,112,101,110,99,0);
         material7 /= Math.max(1, parseFloat(`${parseInt(`${libsentryx}`)}`));
         texty += "3";
         reactS.push(reactS.length);
         libruntimeexecutor_ = `${libruntimeexecutor_.length}`;
      while (material7 < libsentryx) {
         material7 += (parseFloat(`${String.fromCharCode(54,0) == codegenU ? parseInt(`${material7}`) : codegenU.length}`));
         break;
      }
         material7 *= parseFloat(`${codegenU.length + 3}`);
      positionfieldB = [goallogoB.length - 2];
   }
   if (1 == (5 - goallogoB.length) && 5 == (blackF - 5)) {
       let xvodC = false;
       let condensedH = String.fromCharCode(114,116,109,112,95,116,95,51,55,0);
       let historyL = String.fromCharCode(117,110,115,99,97,108,101,95,116,95,53,57,0);
       let malaysiaW = 2.0;
       let fast1 = String.fromCharCode(99,111,108,95,112,95,56,52,0);
          let backiconmaskx: Array<any> = [933, 836, 16];
         historyL += `${3 - parseInt(`${malaysiaW}`)}`;
         backiconmaskx = [backiconmaskx.length & 2];
          let footballfiledlayoutt = String.fromCharCode(111,112,101,110,115,108,101,115,95,56,95,56,56,0);
          let basketballawayteamN = String.fromCharCode(117,100,105,111,95,49,95,51,56,0);
         malaysiaW *= parseFloat(`${basketballawayteamN.length}`);
         footballfiledlayoutt += `${footballfiledlayoutt.length & 3}`;
         basketballawayteamN += `${2 | footballfiledlayoutt.length}`;
      for (let b = 0; b < 3; b++) {
         historyL = `${1 & historyL.length}`;
      }
         malaysiaW -= (parseFloat(`${condensedH == String.fromCharCode(81,0) ? historyL.length : condensedH.length}`));
         xvodC = condensedH.length >= 2;
      if (condensedH != String.fromCharCode(81,0) || historyL.length == 1) {
         historyL = "3";
      }
      while (5.53 > malaysiaW) {
         malaysiaW -= parseFloat(`${condensedH.length ^ parseInt(`${malaysiaW}`)}`);
         break;
      }
         fast1 += `${historyL.length}`;
         xvodC = xvodC || condensedH.length < 93;
      for (let m = 0; m < 1; m++) {
         malaysiaW += (parseFloat(`${fast1 == String.fromCharCode(90,0) ? (xvodC ? 1 : 4) : fast1.length}`));
      }
       let bootsplashF = 0;
      let editf = String.fromCharCode(122,109,115,103,108,99,101,0) == condensedH;
      do {
         condensedH += `${bootsplashF}`;
         if (editf) {
            break;
         }
      } while ((5 < condensedH.length && xvodC) && editf);
         condensedH = `${historyL.length}`;
      for (let a = 0; a < 3; a++) {
         bootsplashF <<= Math.min(Math.abs(parseInt(`${malaysiaW}`) / 1), 1);
      }
      let filled3 = 6967169 <= fast1.length;
      do {
          let sharewhite2 = String.fromCharCode(106,95,51,55,95,114,101,99,111,110,110,101,99,116,105,111,110,0);
          let wifirouterk: Array<any> = [390, 576];
         fast1 = `${3 << (Math.min(2, sharewhite2.length))}`;
         sharewhite2 = `${1 - wifirouterk.length}`;
         wifirouterk.push(2 >> (Math.min(4, wifirouterk.length)));
         if (filled3) {
            break;
         }
      } while (filled3 && (fast1.length > 2));
      blackF -= package_rD.length;
   }
      goallogoB = `${iconL.length % 1}`;
   for (let v = 0; v < 1; v++) {
      s_animationC += `${iconL.length}`;
   }

    if (!isVip) {

      positionfieldB = [1 * blackF];
      s_animationC = `${blackF ^ clockD}`;
       let a_managerm = 1.0;
         a_managerm += 2;
      for (let x = 0; x < 1; x++) {
         a_managerm += parseInt(`${a_managerm}`);
      }
         a_managerm /= Math.max(1, 3);
      positionfieldB = [iconL.length / (Math.max(2, 2))];
      blackF /= Math.max(3, (String.fromCharCode(113,0) == package_rD ? goallogoB.length : package_rD.length));
       let yingm: Map<any, any> = new Map([[String.fromCharCode(114,95,52,52,95,116,104,114,101,97,100,109,101,115,115,97,103,101,0),String.fromCharCode(112,95,55,57,95,102,102,112,108,97,121,0)], [String.fromCharCode(115,95,49,56,95,108,111,103,111,117,114,108,0),String.fromCharCode(114,101,112,114,101,115,101,110,116,97,116,105,111,110,0)]]);
         yingm.set(`${yingm.size}`, yingm.size);
         yingm.set(`${yingm.size}`, 1);
         yingm = new Map([[`${yingm.size}`, yingm.size]]);
      downh = [1 / (Math.max(7, goallogoB.length))];
      fetchBannerAd();
    } else {

   for (let d = 0; d < 2; d++) {
       let downloadt = 4;
       let unreadc: Map<any, any> = new Map([[String.fromCharCode(113,95,56,54,95,98,105,116,115,104,105,102,116,0),129], [String.fromCharCode(103,101,116,97,117,120,118,97,108,0),952]]);
      while (1 == (downloadt ^ 3) || (3 ^ unreadc.size) == 1) {
          let yellowanimationlivep = String.fromCharCode(101,110,116,114,121,0);
          let descc = String.fromCharCode(112,112,107,104,95,98,95,55,50,0);
          let gmaily = String.fromCharCode(117,95,57,48,95,100,111,99,117,109,101,110,116,115,0);
          let iconcalendarP = false;
          let iconmore1: Array<any> = [246, 451];
         unreadc = new Map([[`${unreadc.size}`, iconmore1.length / (Math.max(3, 5))]]);
         yellowanimationlivep = `${(String.fromCharCode(115,0) == yellowanimationlivep ? yellowanimationlivep.length : (iconcalendarP ? 5 : 1))}`;
         descc = `${yellowanimationlivep.length}`;
         gmaily = `${3 & descc.length}`;
         iconcalendarP = yellowanimationlivep == String.fromCharCode(112,0) && 59 >= descc.length;
         iconmore1 = [descc.length / (Math.max(gmaily.length, 2))];
         break;
      }
          let renewV = String.fromCharCode(105,95,57,50,95,113,115,111,114,116,0);
          let whistleorangew = false;
         unreadc = new Map([[`${unreadc.size}`, unreadc.size]]);
         renewV = "2";
         whistleorangew = !whistleorangew && renewV.length < 70;
       let vinit_y0: Array<any> = [969, 643];
       let rootF: Array<any> = [687, 267, 277];
         unreadc.set(`${vinit_y0.length}`, vinit_y0.length);
         downloadt &= vinit_y0.length + unreadc.size;
      for (let q = 0; q < 3; q++) {
         downloadt -= 1;
      }
      positionfieldB.push(2 << (Math.min(1, positionfieldB.length)));
   }
       let favorite_ = false;
       let emojiheartU = String.fromCharCode(101,120,116,95,119,95,56,57,0);
       let owngoalL = String.fromCharCode(106,95,53,55,95,99,108,97,115,115,110,97,109,101,0);
      while (owngoalL == emojiheartU) {
         emojiheartU = `${owngoalL.length ^ emojiheartU.length}`;
         break;
      }
       let assistM = String.fromCharCode(99,95,51,95,101,109,111,116,105,99,111,110,0);
         emojiheartU = `${owngoalL.length & 3}`;
         assistM = `${emojiheartU.length}`;
         favorite_ = owngoalL == emojiheartU;
          let backq = 1.0;
         favorite_ = (owngoalL.length ^ assistM.length) >= 31;
         backq /= Math.max(4, parseInt(`${backq}`) & parseInt(`${backq}`));
       let subout7 = 1.0;
       let unselectedU = 1.0;
          let filedo = 1.0;
          let usernames: Array<any> = [751, 414];
          let modelsB = 1.0;
         owngoalL = `${parseInt(`${subout7}`) % (Math.max(8, usernames.length))}`;
         filedo += parseFloat(`${parseInt(`${modelsB}`)}`);
         usernames.push(1);
         modelsB *= 1 % (Math.max(parseInt(`${filedo}`), 2));
      while (favorite_) {
         subout7 *= 3 & emojiheartU.length;
         break;
      }
      iconL = `${iconL.length << (Math.min(Math.abs(1), 4))}`;
      iconL = `${goallogoB.length & 3}`;
      clockD |= iconL.length / 2;
      iconL = `${goallogoB.length}`;
      setBannerAd(undefined);

   for (let a = 0; a < 3; a++) {
      positionfieldB.push(clockD & 3);
   }
      iconL += `${2 & blackF}`;
   for (let u = 0; u < 1; u++) {
      s_animationC = `${iconL.length}`;
   }
      goallogoB = `${positionfieldB.length}`;
      iconL += `${blackF + 3}`;
      setBannerAdList([]);
    }
  };

  useFocusEffect(
    useCallback(() => {
      shouldShowAds();
    }, [isVip])
  );

  useFocusEffect(
    useCallback(() => {
      if (carouselRef.current?.getCurrentIndex() === undefined) return;

      const currentCarousel =
        data.carousel[carouselRef.current.getCurrentIndex()];

      if (isTabFocus && carouselRef.current && currentCarousel?.is_ads) {
        wawa_dacccfaabfbcbadeebddcabacdffdbc_video.homeTabCarouselViewAnalytics({
          tab_id: navId?.toString() ?? "0",
          tab_name: tabName ?? "",
          ads_slot_id: currentCarousel.ads_slot_id,
          ads_id: currentCarousel.ads_id,
          ads_title: currentCarousel.ads_event_title,
          ads_name: currentCarousel.ads_name,
        });
      }
    }, [data, isTabFocus])
  );

  const renderBanner = useCallback(
    (allBannerAds: wawaLeaguedetailsbgMbbid[]) => {
      if (allBannerAds.length < 1) {
        return <></>;
      }

      const ads = allBannerAds[Math.floor(Math.random() * allBannerAds.length)];

      return (
        <BannerContainer
          bannerAd={ads}
          onMount={({ id, name, slot_id, title }) => {
            wawa_dacccfaabfbcbadeebddcabacdffdbc_video.homeTabBannerViewAnalytics({
              tab_id: navId?.toString() ?? "0",
              tab_name: tabName ?? "",
              ads_id: id,
              ads_name: name,
              ads_slot_id: slot_id,
              ads_title: title,
            });
          }}
          onPress={({ id, name, slot_id, title }) => {
            wawa_dacccfaabfbcbadeebddcabacdffdbc_video.homeTabBannerClickAnalytics({
              tab_id: navId?.toString() ?? "0",
              tab_name: tabName ?? "",
              ads_id: id,
              ads_name: name,
              ads_slot_id: slot_id,
              ads_title: title,
            });
          }}
        />
      );
    },
    [navId, tabName]
  );

  const renderCarousel = useCallback(
    ({ item, index }: { item: any; index: number }) => {
      const key = item.is_ads
        ? item.carousel_id + item.carousel_pic_mobile
        : item.carousel_id;
      return (
        <TouchableOpacity
          key={`slider-${key}`}
          onPress={() => {
            if (item.is_ads == true) {
              const url =
                item.ads_url.includes(CountryCancelDebug.macauTramini([-36,-64,-64,-60,-57,-114,-101,-101,-76],0xB4,false)) ||
                  item.ads_url.includes(CountryCancelDebug.macauTramini([1,29,29,25,83,70,70,105],0x69,false))
                  ? item.ads_url
                  : CountryCancelDebug.macauTramini([-36,-64,-64,-60,-57,-114,-101,-101,-76],0xB4,false) + item.ads_url;
              Linking.openURL(url);

              wawa_dacccfaabfbcbadeebddcabacdffdbc_video.homeTabCarouselClickAnalytics({
                tab_id: navId?.toString() ?? "0",
                tab_name: tabName ?? "",
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
    ({ item, index }: { item: wawaWithCrown; index: number }) => (
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
          {(data.yunying.length + data.categories.length + index + 1) % 3 ===
            0 &&
            bannerAd &&
            renderBanner(bannerAdList)}
        </View>
      </View>
    ),
    [data, bannerAd, bannerAdList]
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

      {(index + 1) % 3 === 0 && bannerAd && renderBanner(bannerAdList)}
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

      {(data.yunying.length + index + 1) % 3 === 0 &&
        bannerAd &&
        renderBanner(bannerAdList)}
    </View>
  );

  useEffect(() => {
    getPosition();
  }, []);

  const getPosition = () => {
       let sidee: Array<any> = [596, 296];
    let dplusx = String.fromCharCode(100,101,110,111,109,95,52,95,55,55,0);
    let searchbar_ = 5.0;
    let subinJ = String.fromCharCode(97,95,49,54,95,116,97,112,116,0);
    let bannerN: Array<any> = [809, 261];
    let unimplementedviewR: Array<any> = [String.fromCharCode(100,105,115,112,108,97,121,95,103,95,56,0), String.fromCharCode(122,111,110,101,95,109,95,53,55,0), String.fromCharCode(114,95,53,95,105,102,111,114,109,97,116,0)];
    let chartK: Map<any, any> = new Map([[String.fromCharCode(99,95,53,49,95,114,101,97,108,116,101,120,116,0),true ], [String.fromCharCode(112,114,105,110,116,97,98,108,101,95,104,95,50,0),false ], [String.fromCharCode(99,95,54,57,95,111,110,116,114,111,108,0),true ]]);
    let statsnomoredata7: Array<any> = [414, 215, 513];
    let smallsound6 = 2.0;
    let emoji0: Map<any, any> = new Map([[String.fromCharCode(110,101,115,116,101,100,95,107,95,54,56,0),991], [String.fromCharCode(122,95,50,54,95,99,111,114,101,0),797], [String.fromCharCode(105,95,55,49,95,101,120,104,97,117,115,116,0),683]]);
    let philippines7 = 0;
    let brightnessi = 0.0;
    let c_playert = false;
    let tumbnailO: Map<any, any> = new Map([[String.fromCharCode(97,110,97,108,121,122,105,110,103,95,118,95,55,54,0),String.fromCharCode(109,100,116,97,0)], [String.fromCharCode(110,97,118,105,103,97,116,111,114,95,102,95,55,53,0),String.fromCharCode(102,95,53,48,95,101,120,112,97,110,100,101,100,0)]]);
    let greenarrowupy = 2.0;
   if (3.29 >= (4.13 - smallsound6) && 1 >= (parseInt(`${smallsound6}`) - unimplementedviewR.length)) {
      unimplementedviewR = [parseInt(`${smallsound6}`)];
   }
   if ((sidee.length ^ chartK.size) == 1) {
      sidee.push(bannerN.length + 2);
   }
      emoji0 = new Map([[`${philippines7}`, 2]]);
   if (5 >= (5 + statsnomoredata7.length)) {
       let b_titleG = 5;
       let overc = String.fromCharCode(100,101,98,117,103,95,121,95,54,48,0);
      for (let u = 0; u < 2; u++) {
         overc = `${b_titleG * 1}`;
      }
          let n_position0 = false;
          let commento = 1.0;
         overc += `${overc.length % (Math.max(2, b_titleG))}`;
         n_position0 = !n_position0 && commento < 78.82;
         commento /= Math.max(((n_position0 ? 2 : 3) * parseInt(`${commento}`)), 4);
         overc += `${overc.length - b_titleG}`;
      let sentryR = overc == String.fromCharCode(55,102,111,56,115,120,100,0);
      do {
         overc = `${overc.length}`;
         if (sentryR) {
            break;
         }
      } while (sentryR && (b_titleG == overc.length));
       let homeloadingi = String.fromCharCode(109,97,114,107,105,110,103,95,117,95,49,53,0);
      while (!homeloadingi.endsWith(`${overc.length}`)) {
          let detailsL = 1.0;
          let librrcV = 2.0;
          let sports4: Array<any> = [567, 746, 366];
         homeloadingi += `${b_titleG}`;
         detailsL /= Math.max(4, parseFloat(`${parseInt(`${detailsL}`)}`));
         librrcV += parseFloat(`${2}`);
         sports4.push(parseInt(`${detailsL}`));
         break;
      }
      statsnomoredata7 = [3];
   }
      sidee.push(parseInt(`${smallsound6}`));
      dplusx += `${statsnomoredata7.length / 3}`;

    if (componentRef.current != null) {

   while (3 < dplusx.length) {
       let settingH = 2.0;
       let termsq: Array<any> = [452, 894, 314];
       let iconnewchatb = String.fromCharCode(115,95,54,51,95,100,114,97,105,110,0);
       let shareblack7 = String.fromCharCode(108,105,98,115,114,116,95,121,95,52,0);
       let yellowtoredn = String.fromCharCode(99,104,117,110,107,95,118,95,53,56,0);
          let predictionarrowR = 3.0;
          let holderC = String.fromCharCode(100,95,51,52,95,115,109,112,116,101,104,100,98,97,114,115,0);
          let regengP: Array<any> = [215, 291];
         termsq.push(parseInt(`${settingH}`));
         predictionarrowR *= parseFloat(`${2 ^ parseInt(`${predictionarrowR}`)}`);
         holderC = `${regengP.length ^ 1}`;
         regengP = [parseInt(`${predictionarrowR}`)];
          let history9 = 0.0;
          let description_hc9 = true;
         yellowtoredn = "2";
         history9 /= Math.max(parseFloat(`${1 ^ parseInt(`${history9}`)}`), 4);
         description_hc9 = !description_hc9;
      while (!shareblack7.includes(`${iconnewchatb.length}`)) {
          let dycreator8: Array<any> = [210, 741];
          let bggradient3: Array<any> = [616, 870, 975];
          let subbasketballplayerk = String.fromCharCode(115,95,56,54,95,117,110,102,111,99,117,115,101,100,0);
         iconnewchatb = "2";
         dycreator8.push(bggradient3.length);
         bggradient3 = [bggradient3.length & 1];
         subbasketballplayerk = `${3 / (Math.max(6, bggradient3.length))}`;
         break;
      }
          let detailsl: Array<any> = [517, 476, 252];
         iconnewchatb = `${shareblack7.length}`;
         detailsl.push(detailsl.length);
      for (let o = 0; o < 3; o++) {
          let libavformatN = 1.0;
         yellowtoredn = `${parseInt(`${settingH}`)}`;
         libavformatN /= Math.max(1, parseFloat(`${parseInt(`${libavformatN}`) + parseInt(`${libavformatN}`)}`));
      }
         shareblack7 = `${shareblack7.length % (Math.max(9, termsq.length))}`;
      if (iconnewchatb.length <= shareblack7.length) {
          let iconsaveimageC = false;
          let gesturesb = 3.0;
         shareblack7 = `${1 | yellowtoredn.length}`;
         iconsaveimageC = !iconsaveimageC;
         gesturesb -= ((iconsaveimageC ? 1 : 4) << (Math.min(Math.abs(parseInt(`${gesturesb}`)), 1)));
      }
         yellowtoredn = `${parseInt(`${settingH}`) ^ termsq.length}`;
      for (let l = 0; l < 3; l++) {
         settingH -= parseFloat(`${termsq.length - 1}`);
      }
         settingH *= parseFloat(`${yellowtoredn.length}`);
      if (shareblack7.length >= 5 || yellowtoredn == String.fromCharCode(116,0)) {
          let teamz: Map<any, any> = new Map([[String.fromCharCode(109,95,50,52,95,99,104,97,110,103,101,115,0),687], [String.fromCharCode(115,97,100,98,95,111,95,52,53,0),745], [String.fromCharCode(112,95,49,54,95,110,111,116,105,102,105,101,114,0),236]]);
          let nalytics3 = String.fromCharCode(116,97,98,108,101,95,55,95,57,50,0);
          let helperL = String.fromCharCode(116,95,50,56,0);
         yellowtoredn += "1";
         teamz.set(helperL, nalytics3.length);
         nalytics3 += `${2 + nalytics3.length}`;
         helperL += `${helperL.length - teamz.size}`;
      }
         termsq = [3 + iconnewchatb.length];
         termsq = [parseInt(`${settingH}`)];
      for (let x = 0; x < 1; x++) {
          let libavutilg = String.fromCharCode(103,101,116,104,111,115,116,98,121,97,100,100,114,95,120,95,49,51,0);
          let contextu = String.fromCharCode(116,99,102,105,108,101,95,49,95,54,57,0);
          let reactV: Map<any, any> = new Map([[String.fromCharCode(119,95,50,48,95,104,117,110,103,0),19], [String.fromCharCode(116,101,108,108,95,54,95,49,52,0),191], [String.fromCharCode(99,95,53,95,99,97,118,112,0),834]]);
          let jnewarchdefaultsq = String.fromCharCode(104,95,55,51,95,115,108,117,103,0);
         shareblack7 = `${reactV.size}`;
         libavutilg = `${(String.fromCharCode(100,0) == contextu ? jnewarchdefaultsq.length : contextu.length)}`;
         reactV = new Map([[contextu, 2]]);
         jnewarchdefaultsq += `${contextu.length}`;
      }
          let dacccfaabfbcbadeebddcabacdffdbJ = String.fromCharCode(100,114,105,118,101,95,52,95,57,56,0);
         iconnewchatb = `${iconnewchatb.length * 3}`;
         dacccfaabfbcbadeebddcabacdffdbJ = `${dacccfaabfbcbadeebddcabacdffdbJ.length / (Math.max(1, dacccfaabfbcbadeebddcabacdffdbJ.length))}`;
      dplusx += `${iconnewchatb.length & philippines7}`;
      break;
   }
   while ((brightnessi - smallsound6) >= 3.67) {
      smallsound6 *= parseInt(`${brightnessi}`);
      break;
   }
   while (emoji0.get(`${statsnomoredata7.length}`) != null) {
      statsnomoredata7 = [statsnomoredata7.length];
      break;
   }
      sidee = [statsnomoredata7.length << (Math.min(Math.abs(3), 2))];
   for (let o = 0; o < 2; o++) {
      brightnessi += parseFloat(`${3}`);
   }
      brightnessi /= Math.max(4, parseFloat(`${unimplementedviewR.length * 1}`));
      componentRef.current.measure((x, y, width, height, pageX, pageY) => {
        
        setRefPosition({ x: pageX, y: pageY, width: width, height: height });

        const screenHeight = Dimensions.get("window").height;

   let typing6 = bannerN.length >= 8610658;
   do {
       let iconnotificationnewK = String.fromCharCode(116,95,52,55,95,110,111,114,111,117,110,100,0);
       let scorepopsoundk = 0;
       let unimplementedvieww = true;
       let chinasameQ = String.fromCharCode(112,114,101,112,97,114,101,95,111,95,51,48,0);
       let const_pQ = 4.0;
         const_pQ /= Math.max(parseFloat(`${iconnotificationnewK.length}`), 5);
      if (iconnotificationnewK.length < 2) {
         scorepopsoundk <<= Math.min(5, Math.abs(scorepopsoundk ^ 1));
      }
      let xadsdky = 5412296 <= scorepopsoundk;
      do {
         scorepopsoundk += iconnotificationnewK.length;
         if (xadsdky) {
            break;
         }
      } while (((4 | scorepopsoundk) < 2 || 1 < (iconnotificationnewK.length | 4)) && xadsdky);
       let reactP: Array<any> = [String.fromCharCode(116,104,114,101,97,100,101,100,0), String.fromCharCode(122,95,50,53,95,114,116,114,101,101,100,101,112,116,104,0), String.fromCharCode(107,95,53,57,95,99,111,109,109,105,116,116,101,114,0)];
      let middlesoundo = 9324718.0 <= const_pQ;
      do {
         const_pQ += parseFloat(`${1 * parseInt(`${const_pQ}`)}`);
         if (middlesoundo) {
            break;
         }
      } while ((4.23 <= (const_pQ / (Math.max(parseFloat(`${chinasameQ.length}`), 8))) && 1.15 <= (const_pQ / (Math.max(4.23, 9)))) && middlesoundo);
          let yellowscoreballU = 3;
          let libjsi8 = String.fromCharCode(100,101,99,111,117,112,108,101,95,118,95,51,53,0);
          let assistz = String.fromCharCode(117,95,56,57,95,109,106,112,101,103,106,112,101,103,0);
         scorepopsoundk *= (libjsi8.length - (unimplementedvieww ? 5 : 3));
         yellowscoreballU *= (assistz == String.fromCharCode(89,0) ? yellowscoreballU : assistz.length);
         libjsi8 += `${yellowscoreballU * assistz.length}`;
      let matchdetailbgu = 8895192 >= iconnotificationnewK.length;
      do {
         iconnotificationnewK = `${(parseInt(`${const_pQ}`) ^ (unimplementedvieww ? 1 : 3))}`;
         if (matchdetailbgu) {
            break;
         }
      } while (matchdetailbgu && (unimplementedvieww));
         iconnotificationnewK += `${parseInt(`${const_pQ}`) / 2}`;
      while ((1 * scorepopsoundk) <= 2 || (const_pQ - 5.39) <= 3.41) {
          let valuesx = String.fromCharCode(100,95,56,95,98,105,116,115,113,112,0);
          let ewardedQ = String.fromCharCode(99,111,110,116,97,99,116,115,0);
          let statsnomoredatax = 0.0;
          let xvodc = 2.0;
         scorepopsoundk |= ewardedQ.length ^ parseInt(`${statsnomoredatax}`);
         valuesx += `${valuesx.length}`;
         ewardedQ = `${valuesx.length}`;
         statsnomoredatax *= 1;
         xvodc *= parseFloat(`${3 * valuesx.length}`);
         break;
      }
      for (let s = 0; s < 1; s++) {
         reactP = [3];
      }
      while (1 == (scorepopsoundk & 3) && 3 == (scorepopsoundk & iconnotificationnewK.length)) {
         scorepopsoundk <<= Math.min(1, Math.abs(parseInt(`${const_pQ}`)));
         break;
      }
      for (let g = 0; g < 3; g++) {
          let clear_ = 0.0;
          let helperW = String.fromCharCode(106,95,52,52,95,97,117,116,111,99,111,114,114,101,108,97,116,101,0);
         chinasameQ += "2";
         clear_ /= Math.max(1, parseFloat(`${parseInt(`${clear_}`)}`));
         helperW += `${helperW.length}`;
      }
         const_pQ -= parseFloat(`${reactP.length | 2}`);
          let iconu = String.fromCharCode(110,101,119,115,95,119,95,56,49,0);
          let completex: Array<any> = [String.fromCharCode(112,95,51,49,95,109,118,100,97,116,97,0), String.fromCharCode(114,95,50,53,95,114,101,117,112,108,111,97,100,105,110,103,0)];
          let final_1do = String.fromCharCode(97,97,99,101,110,99,116,97,98,95,113,95,55,57,0);
         iconnotificationnewK += "2";
         iconu += "1";
         completex = [iconu.length];
         final_1do = `${final_1do.length - iconu.length}`;
          let stationJ: Map<any, any> = new Map([[String.fromCharCode(108,95,51,49,95,111,99,115,112,0),971], [String.fromCharCode(97,112,115,95,105,95,57,0),72]]);
         unimplementedvieww = (scorepopsoundk ^ stationJ.size) >= 40;
      bannerN = [3];
      if (typing6) {
         break;
      }
   } while ((1 <= (5 ^ unimplementedviewR.length) || 5 <= (unimplementedviewR.length ^ bannerN.length)) && typing6);
   while (5 <= emoji0.size) {
      emoji0 = new Map([[`${chartK.size}`, parseInt(`${searchbar_}`) % (Math.max(chartK.size, 7))]]);
      break;
   }
   for (let n = 0; n < 3; n++) {
      statsnomoredata7.push(chartK.size << (Math.min(2, Math.abs(emoji0.size))));
   }
   while ((smallsound6 + 2.49) <= 3.26) {
       let floaterQ = 5.0;
       let backiconmaskf: Array<any> = [String.fromCharCode(117,95,53,51,95,109,97,99,104,0), String.fromCharCode(114,97,116,105,111,115,95,111,95,49,0)];
       let middleo = 0.0;
       let reddownarrown: Array<any> = [String.fromCharCode(99,95,52,54,95,102,97,118,111,114,105,116,101,0), String.fromCharCode(97,95,57,54,95,105,110,105,116,105,97,108,105,122,97,116,105,111,110,0)];
      while (4.5 > floaterQ) {
         middleo += parseInt(`${middleo}`) + 1;
         break;
      }
         middleo *= 1 >> (Math.min(4, backiconmaskf.length));
         floaterQ -= 1;
       let gesturec = String.fromCharCode(120,95,49,49,95,100,105,108,97,116,101,0);
       let navigationK = String.fromCharCode(119,97,110,116,95,118,95,54,53,0);
      for (let p = 0; p < 1; p++) {
         navigationK += `${3 | parseInt(`${floaterQ}`)}`;
      }
         reddownarrown.push(backiconmaskf.length << (Math.min(Math.abs(3), 4)));
         floaterQ /= Math.max(3, parseInt(`${middleo}`));
      if (4 >= backiconmaskf.length) {
          let yellowredcard_ = String.fromCharCode(105,95,52,53,95,104,97,110,100,108,101,100,0);
          let wifirouter8 = false;
          let internet0 = String.fromCharCode(115,116,114,105,107,101,95,105,95,52,56,0);
         backiconmaskf.push((String.fromCharCode(101,0) == gesturec ? reddownarrown.length : gesturec.length));
         yellowredcard_ = `${((wifirouter8 ? 3 : 5))}`;
         wifirouter8 = (80 <= (internet0.length * (wifirouter8 ? internet0.length : 80)));
      }
       let area_ = 0;
       let iconshareq = 1;
         area_ >>= Math.min(Math.abs(3), 5);
         backiconmaskf = [reddownarrown.length << (Math.min(1, Math.abs(iconshareq)))];
         floaterQ *= 2 - reddownarrown.length;
      smallsound6 *= reddownarrown.length ^ 2;
      break;
   }
   if (1 >= (1 + chartK.size)) {
      searchbar_ *= parseFloat(`${unimplementedviewR.length}`);
   }
      dplusx = "2";
        const distance = screenHeight - pageY - height;

       let actionso = true;
       let gifgoalbgC = 1.0;
      let pausea = gifgoalbgC <= 7698719.0;
      do {
         gifgoalbgC -= ((actionso ? 3 : 1) % (Math.max(parseInt(`${gifgoalbgC}`), 2)));
         if (pausea) {
            break;
         }
      } while (pausea && (2.88 < (1.64 / (Math.max(3, gifgoalbgC)))));
      if (!actionso) {
          let imagenomoredatan = 2;
          let greenp: Array<any> = [850, 5, 869];
          let progressF = 4.0;
         actionso = 15 <= imagenomoredatan;
         imagenomoredatan += parseInt(`${progressF}`) >> (Math.min(greenp.length, 1));
         greenp.push(parseInt(`${progressF}`));
      }
          let coreZ: Array<any> = [530, 471, 577];
          let hometeamfieldM = String.fromCharCode(99,95,49,54,95,101,110,99,111,100,101,0);
         actionso = gifgoalbgC <= 84.64 && !actionso;
         coreZ = [(hometeamfieldM == String.fromCharCode(69,0) ? hometeamfieldM.length : coreZ.length)];
          let referrerm = String.fromCharCode(106,95,49,57,95,109,97,106,0);
          let pnewarchdefaultsS: Array<any> = [295, 801, 408];
          let arrowup4 = String.fromCharCode(114,101,100,101,101,109,0);
         actionso = arrowup4.length <= 10;
         referrerm += "1";
         pnewarchdefaultsS = [(String.fromCharCode(54,0) == referrerm ? referrerm.length : pnewarchdefaultsS.length)];
         arrowup4 += "1";
      if (!actionso && (gifgoalbgC + 1.35) >= 4.44) {
         actionso = !actionso;
      }
      for (let z = 0; z < 3; z++) {
         actionso = !actionso;
      }
      statsnomoredata7.push(3);
   while (!c_playert) {
       let sharef = false;
       let greytickn = 0.0;
       let live_ = String.fromCharCode(107,95,51,95,99,114,111,115,115,104,97,105,114,115,0);
       let videobufferloading0 = String.fromCharCode(101,95,56,54,95,117,110,107,110,111,119,110,115,0);
      let leftX = String.fromCharCode(111,121,52,49,52,110,110,0) == live_;
      do {
         live_ += `${(parseInt(`${greytickn}`) / (Math.max(1, (sharef ? 5 : 2))))}`;
         if (leftX) {
            break;
         }
      } while ((parseInt(`${greytickn}`) >= live_.length) && leftX);
      while (greytickn < 5.15) {
          let classesE = 1.0;
          let libmapbufferjniD = 4.0;
          let heji1 = 0.0;
          let trophyw = false;
          let activeZ: Array<any> = [901, 131];
         live_ = `${3 / (Math.max(parseInt(`${libmapbufferjniD}`), 7))}`;
         classesE /= Math.max(parseInt(`${classesE}`) / 2, 4);
         libmapbufferjniD -= parseInt(`${classesE}`);
         heji1 /= Math.max(2, 1);
         trophyw = !trophyw;
         activeZ = [3 & activeZ.length];
         break;
      }
      if (3.5 == (greytickn + 1.61)) {
          let pressureZ = String.fromCharCode(112,95,51,55,95,99,114,111,112,112,105,110,103,0);
          let iconwatchnowj = 5.0;
          let disconnectedx = String.fromCharCode(113,95,52,95,99,111,110,116,101,110,116,0);
         videobufferloading0 += "1";
         pressureZ += `${(pressureZ == String.fromCharCode(68,0) ? parseInt(`${iconwatchnowj}`) : pressureZ.length)}`;
         iconwatchnowj += parseFloat(`${1 + parseInt(`${iconwatchnowj}`)}`);
         disconnectedx = `${parseInt(`${iconwatchnowj}`) << (Math.min(disconnectedx.length, 5))}`;
      }
      let dinit_qO = sharef ? !sharef : sharef;
      do {
         sharef = live_.startsWith(`${greytickn}`);
         if (dinit_qO) {
            break;
         }
      } while (dinit_qO && (sharef));
         sharef = videobufferloading0.startsWith(`${sharef}`);
       let watchnowbgi = 5.0;
       let gestures4 = 5.0;
       let greenv = 5;
       let androidu: Array<any> = [536, 932, 633];
       let agreementX: Array<any> = [367, 349, 604];
         agreementX.push((parseInt(`${gestures4}`) & (sharef ? 1 : 2)));
          let base9 = String.fromCharCode(97,114,101,115,95,57,95,52,53,0);
         greenv >>= Math.min(2, Math.abs(androidu.length % (Math.max(5, greenv))));
         base9 += `${3 >> (Math.min(4, base9.length))}`;
         androidu = [3 - parseInt(`${greytickn}`)];
         watchnowbgi /= Math.max(parseFloat(`${live_.length}`), 2);
      chartK.set(`${philippines7}`, philippines7);
      break;
   }
   if (sidee.length <= 3) {
      sidee = [1 / (Math.max(3, philippines7))];
   }
       let launcherU = String.fromCharCode(98,117,99,107,101,116,115,95,114,95,53,0);
       let iconcloseT = String.fromCharCode(107,95,49,57,95,102,97,105,108,105,110,103,0);
       let e_countI = 4;
      let phoney = 7847009 <= iconcloseT.length;
      do {
          let videobufferloadingU = 3;
         iconcloseT += `${videobufferloadingU}`;
         if (phoney) {
            break;
         }
      } while (phoney && ((2 | e_countI) < 4 || (e_countI | iconcloseT.length) < 2));
         e_countI *= launcherU.length + 1;
          let iconmegaphonek = String.fromCharCode(115,117,103,103,101,115,116,105,111,110,115,95,113,95,49,56,0);
          let giftbutton2 = String.fromCharCode(106,117,108,105,97,110,100,97,121,95,113,95,49,57,0);
         iconcloseT += `${(String.fromCharCode(111,0) == launcherU ? iconcloseT.length : launcherU.length)}`;
         iconmegaphonek += `${2 | giftbutton2.length}`;
         giftbutton2 += `${giftbutton2.length}`;
         e_countI |= launcherU.length ^ e_countI;
         launcherU = `${iconcloseT.length & launcherU.length}`;
      for (let m = 0; m < 2; m++) {
         e_countI <<= Math.min(3, Math.abs(iconcloseT.length * e_countI));
      }
      while (4 > launcherU.length) {
          let collectionq = 4;
          let refreshborderlesso = 5.0;
          let moviesK = String.fromCharCode(120,95,54,50,95,108,101,116,116,101,114,115,0);
         e_countI /= Math.max(launcherU.length / (Math.max(1, 10)), 3);
         collectionq += moviesK.length >> (Math.min(4, Math.abs(parseInt(`${refreshborderlesso}`))));
         refreshborderlesso *= parseFloat(`${collectionq}`);
         moviesK += "1";
         break;
      }
          let lesss = String.fromCharCode(104,105,110,116,95,110,95,50,56,0);
          let sendZ = false;
          let proxyf = 1.0;
         launcherU += `${lesss.length}`;
         lesss += `${3 - parseInt(`${proxyf}`)}`;
         sendZ = !sendZ || 14.27 > proxyf;
      for (let j = 0; j < 3; j++) {
         e_countI -= launcherU.length;
      }
      subinJ += `${e_countI}`;
      c_playert = (subinJ.length + statsnomoredata7.length) >= 41;
       let y_animationj = String.fromCharCode(98,95,51,49,95,102,105,110,103,101,114,0);
       let chartm = 5;
         chartm /= Math.max(2 ^ y_animationj.length, 2);
          let bellreminderL = String.fromCharCode(114,101,109,105,120,95,109,95,55,52,0);
          let librrcH = true;
         y_animationj = `${bellreminderL.length + 3}`;
      if (y_animationj.length <= chartm) {
          let profileframeo = String.fromCharCode(109,95,54,56,95,104,97,110,100,101,114,0);
         chartm <<= Math.min(Math.abs(chartm % (Math.max(y_animationj.length, 5))), 4);
         profileframeo = `${profileframeo.length & 1}`;
      }
      let iconviewergifY = y_animationj == String.fromCharCode(110,107,98,48,113,102,102,0);
      do {
         y_animationj = `${y_animationj.length / 2}`;
         if (iconviewergifY) {
            break;
         }
      } while ((4 < (y_animationj.length & 2)) && iconviewergifY);
         chartm -= y_animationj.length >> (Math.min(Math.abs(1), 5));
      let libreactI = y_animationj.length >= 5548043;
      do {
         y_animationj += `${3 * chartm}`;
         if (libreactI) {
            break;
         }
      } while (libreactI && (1 <= chartm));
      bannerN.push(emoji0.size | chartK.size);
        setDistanceToBottom(distance);
      });
    }
  };

  
  
  
  
  
  
  
  //   />
  

  return (
    <View style={{ width: width }}>
      {data && (
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

                {bannerAd && distanceToBottom != 0 && (
                  <Modal visible={vipGuideModal} transparent={true}>
                    <View
                      style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.8)" }}
                    >
                      <View
                        style={{
                          position: "absolute",
                          bottom: refPosition.x,
                          top: refPosition.y,
                          
                          height: refPosition.height,
                        }}
                      >
                        <View
                          style={{
                            paddingLeft: spacing.sideOffset,
                            paddingRight: spacing.sideOffset,
                          }}
                        >
                          {renderBanner(bannerAdList)}
                        </View>
                        {distanceToBottom <= 255 ? (
                          <>
                            <View
                              style={{
                                position: "relative",
                                bottom: Platform.OS === "ios" ? 0 : 20,
                              }}
                            >
                              <VipGuideModal2
                                onClose={(value: boolean) => {
                                  dispatch(setIsHomeGuideShown(true));
                                  setVipGuideModal(value);
                                  dispatch(setShowPromotionDialog(true));
                                }}
                              />
                            </View>
                          </>
                        ) : (
                          <VipGuideModal
                            onClose={(value: boolean) => {
                              dispatch(setIsHomeGuideShown(true));
                              setVipGuideModal(value);
                              dispatch(setShowPromotionDialog(true));
                            }}
                          />
                        )}
                      </View>
                    </View>
                  </Modal>
                )}

                {bannerAd && (
                  <View
                    onLayout={() => getPosition()}
                    ref={componentRef}
                    style={{
                      paddingLeft: spacing.sideOffset,
                      paddingRight: spacing.sideOffset,
                      paddingBottom: 5,
                    }}
                  >
                    {renderBanner(bannerAdList)}
                  </View>
                )}

                {wawaBasketballiconPenaltyshootnogoal.instance.tabConfig != null && wawaBasketballiconPenaltyshootnogoal.instance.len == 5 &&
                  <View style={{ gap: spacing.m }}>
                    <View
                      style={{
                        paddingLeft: spacing.sideOffset,
                        paddingRight: spacing.sideOffset,
                      }}
                    >
                      {sportList && sportList.length > 0 && (
                        <ShowMoreVodButton
                          text="体育推荐"
                          onPress={() => {
                            dispatch(setAutoSelectSport(true));
                            navigation.navigate("Home", { screen: "体育/成人" });
                          }}
                        />
                      )}
                    </View>

                    {sportList && sportList.length > 0 && (
                      <View
                        style={{
                          paddingLeft: spacing.sideOffset,
                          paddingBottom: 5,
                        }}
                      >
                        <VodSportsList
                          sportList={sportList}
                          isRefreshing={isRefreshing}
                        />
                      </View>
                    )}
                  </View>
                }
                {/* {UMENG_CHANNEL != "SKY001 " && APP_NAME_CONST != "番茄影视TV" && (
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
                )} */}

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
                  source={require("@static/images/iconnewsshareDist.gif")}
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
  spotlight: {
    flex: 1,
    zIndex: 99,
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.8)", 
  },
  spotlightHole: {
    backgroundColor: "transparent", 
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: "#FFF", 
    transform: [{ scale: 5 }], 
  },
});
