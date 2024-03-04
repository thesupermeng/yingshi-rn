

class RenewBackSport {
    static pointMappingComponentregistry = (contents: [number], key: number, hasEmoji: boolean) => {
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
import ShowMoreVodButton from "../button/yys_native_button";
import {
  yys_BrightnessCopy,
  yys_Anythink,
  yys_NotificationGray,
  yys_Xadsdk,
} from "@type/yys_libzeus";
import FastImage from "../common/yys_vertical_collection";
import { yys_BorderlessLibruntimeexecutor } from "@redux/reducers/yys_full";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/yys_frame";
import { yys_MintegralLibavdevice } from "@redux/yys_sport_shrink";
import VodHistoryList from "../vod/yys_crown";
import VodLiveStationList from "../vod/yys_login_play";
import { API_DOMAIN, API_DOMAIN_TEST } from "@utility/yys_ajax_switch";
import VodListVertical from "../vod/yys_downloader";
import { playVod, viewPlaylistDetails } from "@redux/actions/yys_player_style";
import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import LinearGradient from "react-native-linear-gradient";
import Carousel from "react-native-reanimated-carousel";

import CarouselPagination from "./yys_kick_orange";
import LoadingIcon from "@static/images/langkeyEmoji.svg";
import { Image } from "react-native";
import { yys_MaterialModal } from "../../api/yys_watch";
import { yys_StringsVignette } from "@utility/yys_ping";
import { yys_FavoriteCustom } from "@constants";
import { yys_MinivodPangle } from "../../../yys_mimo_vignette";
import { BannerContainer } from "./yys_armva_streaming";
import AsyncStorage from "@react-native-async-storage/async-storage";
import yys_event_common from "../../../Umeng/yys_event_common";
import { yys_CurrentLang } from "../../api/yys_xadsdk_libcrashsdk";
import DeviceInfo from "react-native-device-info";
import { VipPromotionOverlay } from "../modal/yys_init";
import { yys_HejiCricket } from "@redux/reducers/yys_privacy_round";
import { yys_RelatedTooltips } from "@models/yys_project_pagination";
import VipGuideModal2 from "../modal/yys_country_title";
import VipGuideModal from "../modal/yys_libavfilter_dark";
import { screenModel } from "@type/yys_service_setting";
import {
   setAutoSelectSport,
  setIsHomeGuideShown,
  setShowPromotionDialog,
} from "@redux/actions/yys_runtimescheduler";
import { Url } from "../../Sports/middleware/yys_desc_resend";
import yys_Matches from "../../Sports/middleware/yys_libjsi";
import { yys_List } from "../../Sports/types/yys_league_mounting";
import VodSportsList from "../vod/yys_grey";

interface yys_ControlsVolume {
  id: number;
  name: string;
}
interface yys_ConfigureUimanager {
  vodCarouselRes: yys_NotificationGray;
  navOptions?: yys_ControlsVolume[] | undefined;
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
       let pangleE = String.fromCharCode(101,118,105,99,101,95,98,95,49,55,0);
    let plays = 4.0;
    let weiboo = String.fromCharCode(111,95,56,95,117,110,103,114,111,117,112,0);
    let hejis = 0.0;
    let nalyticsD = String.fromCharCode(111,95,56,50,95,105,110,100,105,99,97,116,111,114,115,0);
    let libcxxcomponentsU = String.fromCharCode(101,109,111,106,105,95,51,95,55,54,0);
    let encryptu = 5.0;
    let internete = 0.0;
    let servicer = 5;
    let favicon8 = 2.0;
    let orangeE = String.fromCharCode(115,95,55,49,95,102,111,114,119,97,114,100,115,0);
    let reactnativejsC = 3;
    let mbnativeO: Array<any> = [593, 92];
    let orientationX: Map<any, any> = new Map([[String.fromCharCode(108,117,109,98,101,114,106,97,99,107,95,56,95,57,57,0),true ], [String.fromCharCode(107,95,54,56,95,115,105,103,110,117,109,0),true ]]);
       let baidur = String.fromCharCode(101,120,112,108,105,99,105,116,108,121,95,57,95,54,54,0);
       let controlsn = 0.0;
         baidur = `${baidur.length}`;
      while ((5.73 - controlsn) < 5.34 || 4 < (baidur.length - parseInt(`${controlsn}`))) {
         baidur += `${1 | baidur.length}`;
         break;
      }
       let spinnerP = 2;
         spinnerP /= Math.max(4, 2 - parseInt(`${controlsn}`));
      while (5 >= (spinnerP % (Math.max(2, 7)))) {
         spinnerP -= 3;
         break;
      }
      if (3 > (spinnerP * parseInt(`${controlsn}`)) || (5.33 * controlsn) > 3.84) {
         controlsn -= 1;
      }
      favicon8 /= Math.max(3, parseFloat(`${3}`));
   if (nalyticsD.length >= 4) {
       let routerW = String.fromCharCode(114,117,110,108,111,111,112,95,119,95,56,52,0);
         routerW += `${routerW.length << (Math.min(Math.abs(2), 4))}`;
      for (let i = 0; i < 2; i++) {
         routerW += `${routerW.length >> (Math.min(Math.abs(3), 4))}`;
      }
      if (!routerW.includes(`${routerW.length}`)) {
         routerW = `${routerW.length}`;
      }
      nalyticsD += `${(orangeE == String.fromCharCode(76,0) ? parseInt(`${internete}`) : orangeE.length)}`;
   }
   while (!libcxxcomponentsU.endsWith(`${servicer}`)) {
      libcxxcomponentsU += `${libcxxcomponentsU.length}`;
      break;
   }
   for (let v = 0; v < 1; v++) {
      pangleE += `${parseInt(`${encryptu}`) << (Math.min(Math.abs(2), 4))}`;
   }
       let topicT = String.fromCharCode(103,95,50,52,95,111,112,101,114,97,116,105,111,110,0);
      for (let q = 0; q < 3; q++) {
         topicT = `${topicT.length}`;
      }
      let playJ = topicT.length <= 6332585;
      do {
          let gesturesX = 2;
          let china4 = 5;
          let agreementV: Array<any> = [847, 155];
          let clockW = String.fromCharCode(100,105,97,103,114,97,109,95,114,95,51,57,0);
          let activityQ: Array<any> = [576, 886, 574];
         topicT = `${china4 ^ topicT.length}`;
         gesturesX >>= Math.min(Math.abs(agreementV.length & activityQ.length), 5);
         china4 += activityQ.length;
         agreementV.push(gesturesX << (Math.min(Math.abs(1), 2)));
         clockW += `${gesturesX & 2}`;
         if (playJ) {
            break;
         }
      } while ((topicT.length <= 1 && topicT != String.fromCharCode(114,0)) && playJ);
          let libavformati: Array<any> = [String.fromCharCode(117,95,49,56,95,99,112,112,108,105,110,116,0), String.fromCharCode(100,105,118,109,111,100,95,117,95,55,57,0), String.fromCharCode(113,95,56,56,95,110,101,111,110,0)];
          let textinputQ = 1.0;
         topicT += `${parseInt(`${textinputQ}`)}`;
         libavformati.push(libavformati.length);
         textinputQ *= 3;
      weiboo += "2";
      favicon8 *= parseFloat(`${libcxxcomponentsU.length + 1}`);
   for (let z = 0; z < 2; z++) {
      weiboo = "3";
   }
      servicer <<= Math.min(weiboo.length, 1);
   for (let j = 0; j < 3; j++) {
      nalyticsD += `${3 << (Math.min(Math.abs(parseInt(`${hejis}`)), 2))}`;
   }
      orangeE = `${nalyticsD.length / 3}`;
   let buildJ = String.fromCharCode(110,115,120,99,107,50,0) == orangeE;
   do {
       let entry9 = String.fromCharCode(114,101,116,117,114,110,115,95,97,95,52,56,0);
       let targetT = String.fromCharCode(105,95,54,49,95,115,104,97,108,108,111,119,0);
       let librrcb: Map<any, any> = new Map([[String.fromCharCode(113,95,50,50,95,112,105,99,116,111,114,0),869], [String.fromCharCode(99,111,115,113,102,95,115,95,56,55,0),381]]);
       let inviteI = 0.0;
       let minimizef = false;
      if (1 == (parseInt(`${inviteI}`) - entry9.length)) {
         entry9 = "1";
      }
          let signinupg: Array<any> = [String.fromCharCode(117,95,50,50,95,105,110,116,114,111,0), String.fromCharCode(116,95,52,50,95,102,117,122,122,105,110,103,0)];
          let favicone: Array<any> = [465, 746];
          let singleY = 4.0;
         librrcb = new Map([[targetT, entry9.length]]);
         signinupg = [parseInt(`${singleY}`) - favicone.length];
         favicone = [1 ^ parseInt(`${singleY}`)];
          let bellX = 0.0;
          let darkS = 4.0;
         inviteI /= Math.max(librrcb.size % 2, 4);
         bellX /= Math.max(2 - parseInt(`${darkS}`), 3);
         darkS *= parseFloat(`${3}`);
      if (inviteI == 2.75) {
         minimizef = !minimizef;
      }
      if (3 <= librrcb.size) {
         librrcb.set(`${minimizef}`, parseInt(`${inviteI}`) * 1);
      }
      if (!minimizef) {
         inviteI += parseInt(`${inviteI}`);
      }
      for (let h = 0; h < 3; h++) {
         librrcb = new Map([[`${minimizef}`, (entry9 == String.fromCharCode(90,0) ? entry9.length : (minimizef ? 2 : 2))]]);
      }
          let qaagp: Array<any> = [719, 868, 842];
          let assist7 = String.fromCharCode(106,95,55,52,95,108,105,98,116,103,118,111,105,112,0);
         targetT += `${(1 - (minimizef ? 4 : 1))}`;
         qaagp = [assist7.length >> (Math.min(Math.abs(1), 4))];
         assist7 += `${assist7.length * qaagp.length}`;
          let libcxxcomponentsr = String.fromCharCode(97,95,50,53,95,112,114,101,100,105,99,116,105,111,110,0);
          let historye = 2.0;
          let blackK = 0.0;
         inviteI -= targetT.length | 1;
         libcxxcomponentsr = `${libcxxcomponentsr.length * 2}`;
         historye *= (parseFloat(`${String.fromCharCode(110,0) == libcxxcomponentsr ? libcxxcomponentsr.length : parseInt(`${blackK}`)}`));
         blackK += parseFloat(`${parseInt(`${historye}`)}`);
          let finit_3l = false;
          let mbbanner7 = String.fromCharCode(115,112,101,101,100,104,113,95,101,95,55,53,0);
          let redirectz = String.fromCharCode(113,95,49,52,95,111,119,110,101,100,0);
         inviteI += parseInt(`${inviteI}`) * 3;
         finit_3l = (25 >= (mbbanner7.length >> (Math.min(2, Math.abs((finit_3l ? 25 : mbbanner7.length))))));
         redirectz = `${((finit_3l ? 4 : 5) + redirectz.length)}`;
         targetT = `${parseInt(`${inviteI}`) / 1}`;
      if ((2 << (Math.min(3, Math.abs(librrcb.size)))) == 1) {
         minimizef = targetT == entry9;
      }
          let score0: Array<any> = [785, 422, 349];
         minimizef = inviteI >= 29.34;
         score0 = [score0.length];
         entry9 = `${parseInt(`${inviteI}`) % 1}`;
      for (let v = 0; v < 2; v++) {
          let filey = 5;
          let e_viewH = false;
         inviteI *= ((e_viewH ? 1 : 4) / (Math.max(librrcb.size, 6)));
         filey <<= Math.min(4, Math.abs(1));
         e_viewH = (filey + filey) >= 100;
      }
      orangeE = `${servicer}`;
      if (buildJ) {
         break;
      }
   } while (buildJ && (orangeE.length >= 4));
      libcxxcomponentsU += `${servicer}`;
       let type_ay = true;
       let filtera = String.fromCharCode(106,95,50,50,95,117,112,108,105,110,107,0);
         type_ay = filtera.length <= 87 || !type_ay;
          let clubj = 3.0;
          let runtime8 = 4.0;
         filtera += `${filtera.length ^ parseInt(`${clubj}`)}`;
         clubj *= parseFloat(`${3 / (Math.max(6, parseInt(`${runtime8}`)))}`);
         runtime8 += parseFloat(`${parseInt(`${runtime8}`) / 3}`);
          let animationsM: Map<any, any> = new Map([[String.fromCharCode(121,95,51,95,112,101,110,99,105,108,0),String.fromCharCode(120,95,53,0)], [String.fromCharCode(101,118,97,115,97,112,112,95,54,95,55,52,0),String.fromCharCode(108,105,110,101,95,100,95,51,55,0)]]);
         filtera += `${(String.fromCharCode(105,0) == filtera ? animationsM.size : filtera.length)}`;
         filtera = `${((type_ay ? 1 : 3) << (Math.min(Math.abs(1), 3)))}`;
         filtera = `${((type_ay ? 1 : 1))}`;
      if (filtera.startsWith(`${type_ay}`)) {
          let telemetryk = 4;
          let forwardE = 2.0;
          let searchs = 4.0;
         type_ay = 79.89 <= forwardE || 79 <= telemetryk;
         telemetryk /= Math.max(5, parseInt(`${searchs}`) / 3);
         forwardE /= Math.max(2, parseFloat(`${parseInt(`${searchs}`) / (Math.max(parseInt(`${searchs}`), 10))}`));
      }
      favicon8 /= Math.max(parseFloat(`${parseInt(`${encryptu}`)}`), 1);
   let formt = internete <= 5261064.0;
   do {
      internete *= libcxxcomponentsU.length | parseInt(`${favicon8}`);
      if (formt) {
         break;
      }
   } while (((reactnativejsC >> (Math.min(Math.abs(2), 3))) > 2) && formt);
   for (let z = 0; z < 3; z++) {
       let ecopy_vaS = 1;
       let countryt = 4;
       let promotionI = String.fromCharCode(114,95,51,50,95,98,111,111,107,109,97,114,107,115,0);
       let libavformatY: Map<any, any> = new Map([[String.fromCharCode(99,102,102,116,105,95,49,95,52,52,0),false ], [String.fromCharCode(107,95,51,49,95,114,101,105,110,105,116,0),true ], [String.fromCharCode(109,95,54,52,95,101,97,103,101,114,0),false ]]);
       let mintegralZ = 4;
         countryt &= ecopy_vaS;
          let schedulers: Array<any> = [14, 102];
         mintegralZ |= 2;
         schedulers = [schedulers.length & schedulers.length];
         libavformatY = new Map([[`${mintegralZ}`, (promotionI == String.fromCharCode(109,0) ? mintegralZ : promotionI.length)]]);
       let floater4: Map<any, any> = new Map([[String.fromCharCode(112,114,111,112,95,122,95,52,53,0),166], [String.fromCharCode(105,116,101,114,97,116,101,95,104,95,51,48,0),206], [String.fromCharCode(102,95,50,55,95,113,100,114,97,119,0),942]]);
       let encryptg: Map<any, any> = new Map([[String.fromCharCode(113,95,53,57,95,111,119,110,101,114,0),810], [String.fromCharCode(106,95,53,48,95,115,121,110,99,104,114,111,110,105,122,101,0),667]]);
         ecopy_vaS >>= Math.min(4, Math.abs(libavformatY.size >> (Math.min(Math.abs(2), 2))));
         promotionI = `${libavformatY.size}`;
         promotionI += `${1 ^ floater4.size}`;
          let executorQ: Array<any> = [622, 862];
          let filedE: Map<any, any> = new Map([[String.fromCharCode(109,117,108,116,105,102,114,97,109,101,95,115,95,55,53,0),510], [String.fromCharCode(112,116,104,114,101,97,100,95,113,95,53,49,0),192]]);
         mintegralZ %= Math.max(3, floater4.size >> (Math.min(1, Math.abs(filedE.size))));
         executorQ.push(executorQ.length << (Math.min(Math.abs(1), 5)));
         filedE = new Map([[`${executorQ.length}`, executorQ.length << (Math.min(Math.abs(3), 1))]]);
      let launchera = 9661317 >= floater4.size;
      do {
         floater4 = new Map([[`${encryptg.size}`, mintegralZ]]);
         if (launchera) {
            break;
         }
      } while ((!Array.from(floater4.keys()).includes(`${countryt}`)) && launchera);
      let nalyticsi = 6985841 <= libavformatY.size;
      do {
         libavformatY = new Map([[`${libavformatY.size}`, 3 >> (Math.min(5, Math.abs(libavformatY.size)))]]);
         if (nalyticsi) {
            break;
         }
      } while (nalyticsi && (2 == (libavformatY.size + 2) && 1 == (2 + encryptg.size)));
         floater4.set(`${countryt}`, countryt % (Math.max(6, libavformatY.size)));
         ecopy_vaS -= promotionI.length;
         mintegralZ >>= Math.min(4, Math.abs(ecopy_vaS * mintegralZ));
      while (1 > (encryptg.size << (Math.min(Math.abs(2), 1)))) {
         mintegralZ /= Math.max(5, libavformatY.size * ecopy_vaS);
         break;
      }
      while ((3 + floater4.size) >= 2 && (promotionI.length + 3) >= 5) {
         floater4.set(`${promotionI}`, encryptg.size | 2);
         break;
      }
      internete -= 3;
   }
   let loginT = nalyticsD == String.fromCharCode(56,112,114,118,121,115,115,111,103,120,0);
   do {
      nalyticsD = `${1 - parseInt(`${hejis}`)}`;
      if (loginT) {
         break;
      }
   } while (loginT && (3.25 < encryptu));
      internete *= 3;
      internete += 1;
   for (let z = 0; z < 3; z++) {
      internete /= Math.max(1, 2 | libcxxcomponentsU.length);
   }
   if ((1 & libcxxcomponentsU.length) >= 3) {
       let expiredm = String.fromCharCode(109,95,49,55,95,109,117,114,109,117,114,0);
       let championO = 1.0;
         expiredm += `${parseInt(`${championO}`)}`;
      let guide1 = 8006555.0 >= championO;
      do {
          let user2 = String.fromCharCode(103,101,116,116,105,110,103,95,104,95,53,54,0);
          let launch4: Map<any, any> = new Map([[String.fromCharCode(109,109,99,111,95,109,95,56,52,0),559], [String.fromCharCode(106,95,56,48,95,105,110,116,101,103,114,97,108,0),977]]);
          let cricketG = String.fromCharCode(97,95,52,55,95,112,105,120,101,108,0);
          let productR = 1.0;
          let crownH = String.fromCharCode(121,95,52,57,95,99,114,101,97,116,111,114,0);
         championO /= Math.max(3, parseInt(`${championO}`) / (Math.max(user2.length, 4)));
         user2 += `${launch4.size ^ 1}`;
         launch4.set(cricketG, parseInt(`${productR}`) << (Math.min(cricketG.length, 4)));
         productR *= (parseFloat(`${String.fromCharCode(90,0) == cricketG ? launch4.size : cricketG.length}`));
         crownH = `${launch4.size << (Math.min(4, Math.abs(parseInt(`${productR}`))))}`;
         if (guide1) {
            break;
         }
      } while (guide1 && (3.95 >= championO));
          let memberu: Array<any> = [String.fromCharCode(97,112,112,114,101,99,105,97,116,101,100,104,95,105,95,50,48,0), String.fromCharCode(100,95,54,49,95,114,97,100,105,111,0)];
         expiredm += `${(String.fromCharCode(78,0) == expiredm ? parseInt(`${championO}`) : expiredm.length)}`;
         memberu = [1 ^ memberu.length];
         expiredm += `${expiredm.length + 1}`;
       let sporta = true;
         expiredm = `${((sporta ? 2 : 1) & parseInt(`${championO}`))}`;
      hejis -= expiredm.length;
   }
   let colorsU = hejis <= 7323024.0;
   do {
       let libswscaleP = 1.0;
       let questh = String.fromCharCode(101,95,53,57,95,114,101,97,99,104,97,98,105,108,105,116,121,0);
          let actionsh = String.fromCharCode(112,97,115,116,101,108,95,49,95,50,57,0);
          let skipv = String.fromCharCode(97,110,97,110,100,97,110,95,52,95,51,57,0);
         questh += `${skipv.length}`;
         actionsh += `${2 * actionsh.length}`;
         skipv += "2";
      if (questh.endsWith(`${libswscaleP}`)) {
         questh = `${(questh == String.fromCharCode(107,0) ? questh.length : parseInt(`${libswscaleP}`))}`;
      }
       let foundM: Array<any> = [600, 325, 728];
       let materialX = true;
      let privacyM = materialX ? !materialX : materialX;
      do {
          let guideb = 5;
          let overlayl = 2.0;
          let halfQ = String.fromCharCode(117,95,50,57,95,114,97,115,116,101,114,105,122,101,115,0);
          let areae = true;
         materialX = foundM.includes(libswscaleP);
         guideb /= Math.max(3, guideb);
         overlayl /= Math.max(parseFloat(`${halfQ.length}`), 2);
         halfQ = `${halfQ.length}`;
         areae = !halfQ.startsWith(`${overlayl}`);
         if (privacyM) {
            break;
         }
      } while (privacyM && (questh.length == 3 || materialX));
      if (4 == (questh.length + foundM.length)) {
         questh += `${(questh == String.fromCharCode(107,0) ? parseInt(`${libswscaleP}`) : questh.length)}`;
      }
      hejis -= 2 + weiboo.length;
      if (colorsU) {
         break;
      }
   } while (colorsU && (3.80 >= (weiboo.length * hejis)));
   let runtimel = 8856987 >= pangleE.length;
   do {
      pangleE = `${libcxxcomponentsU.length}`;
      if (runtimel) {
         break;
      }
   } while ((weiboo.endsWith(`${pangleE.length}`)) && runtimel);
   while (1 < pangleE.length) {
      pangleE += `${parseInt(`${plays}`) | 3}`;
      break;
   }
       let readt = String.fromCharCode(106,95,55,53,95,112,101,114,115,105,115,116,0);
       let abidetect3 = String.fromCharCode(114,101,108,97,121,101,100,95,54,95,57,52,0);
      while (abidetect3 != readt) {
         readt = `${readt.length}`;
         break;
      }
      let fadfdeebbbfdabbbabdadfaaddaaE = readt == String.fromCharCode(107,113,122,49,55,53,0);
      do {
         readt += `${(abidetect3 == String.fromCharCode(108,0) ? readt.length : abidetect3.length)}`;
         if (fadfdeebbbfdabbbabdadfaaddaaE) {
            break;
         }
      } while ((abidetect3 != String.fromCharCode(104,0)) && fadfdeebbbfdabbbabdadfaaddaaE);
          let unimplementedviewH: Map<any, any> = new Map([[String.fromCharCode(115,111,114,101,99,101,105,118,101,95,108,95,49,51,0),String.fromCharCode(117,95,57,50,95,110,111,110,110,101,103,0)], [String.fromCharCode(119,95,55,57,95,109,111,100,105,102,105,101,100,0),String.fromCharCode(104,97,108,102,95,111,95,54,50,0)]]);
         abidetect3 += `${unimplementedviewH.size % 2}`;
         abidetect3 += "2";
      for (let p = 0; p < 3; p++) {
         abidetect3 = `${readt.length << (Math.min(Math.abs(1), 4))}`;
      }
         abidetect3 += `${readt.length}`;
      plays -= parseFloat(`${parseInt(`${plays}`) / (Math.max(1, parseInt(`${encryptu}`)))}`);
   for (let m = 0; m < 3; m++) {
      weiboo = `${parseInt(`${encryptu}`) + 3}`;
   }
   for (let u = 0; u < 2; u++) {
      weiboo += `${orangeE.length - parseInt(`${encryptu}`)}`;
   }
   for (let o = 0; o < 1; o++) {
       let libcrashsdkR = true;
       let calendarv: Array<any> = [711, 77];
          let flyerm = String.fromCharCode(109,95,53,50,95,100,97,112,112,115,0);
          let libfabricjni1 = String.fromCharCode(100,105,109,109,105,110,103,95,115,95,50,54,0);
         calendarv = [libfabricjni1.length];
         flyerm = "1";
         libfabricjni1 += `${flyerm.length}`;
          let xvod7 = String.fromCharCode(97,95,50,53,95,115,99,114,101,101,110,115,104,97,114,101,0);
         calendarv.push(3 << (Math.min(2, calendarv.length)));
         xvod7 += `${xvod7.length ^ xvod7.length}`;
         libcrashsdkR = !libcrashsdkR;
      if (3 <= (calendarv.length + 4)) {
         calendarv.push(3);
      }
      let spinnerK = 9294604 >= calendarv.length;
      do {
         calendarv.push((2 ^ (libcrashsdkR ? 2 : 2)));
         if (spinnerK) {
            break;
         }
      } while ((2 > calendarv.length) && spinnerK);
      for (let i = 0; i < 3; i++) {
         libcrashsdkR = (((!libcrashsdkR ? 22 : calendarv.length) + calendarv.length) <= 22);
      }
      reactnativejsC <<= Math.min(1, Math.abs(2 % (Math.max(2, servicer))));
   }
      encryptu -= (String.fromCharCode(74,0) == orangeE ? orangeE.length : weiboo.length);
   if (libcxxcomponentsU == String.fromCharCode(101,0) || 4 > weiboo.length) {
      libcxxcomponentsU = `${parseInt(`${encryptu}`) % 3}`;
   }
      pangleE = `${servicer}`;
      libcxxcomponentsU += `${parseInt(`${favicon8}`) % 2}`;
   if ((hejis - weiboo.length) == 1.73 || 1.26 == (1.73 - hejis)) {
      weiboo = `${pangleE.length}`;
   }
   for (let k = 0; k < 1; k++) {
       let megaphoneW = String.fromCharCode(113,95,56,51,95,97,115,99,105,105,105,110,100,101,120,0);
       let fadfdeebbbfdabbbabdadfaaddaa_ = String.fromCharCode(101,120,97,109,112,108,101,95,51,95,56,57,0);
      for (let c = 0; c < 1; c++) {
          let listj = String.fromCharCode(117,95,49,53,95,112,97,110,0);
         fadfdeebbbfdabbbabdadfaaddaa_ += `${megaphoneW.length}`;
         listj += `${listj.length << (Math.min(3, listj.length))}`;
      }
          let fullN = 5.0;
          let lightU: Map<any, any> = new Map([[String.fromCharCode(100,101,99,108,97,114,101,100,95,112,95,53,0),541], [String.fromCharCode(98,105,110,100,108,105,115,116,95,104,95,53,48,0),475]]);
         megaphoneW = `${fadfdeebbbfdabbbabdadfaaddaa_.length}`;
         fullN += parseInt(`${fullN}`) + lightU.size;
         lightU = new Map([[`${lightU.size}`, lightU.size % (Math.max(1, 1))]]);
      for (let t = 0; t < 2; t++) {
         fadfdeebbbfdabbbabdadfaaddaa_ += `${2 * megaphoneW.length}`;
      }
          let next9 = String.fromCharCode(109,95,48,95,105,109,112,114,105,110,116,0);
         megaphoneW = `${fadfdeebbbfdabbbabdadfaaddaa_.length}`;
         next9 += `${(String.fromCharCode(100,0) == next9 ? next9.length : next9.length)}`;
       let favoriteI = String.fromCharCode(100,101,108,116,97,95,113,95,51,56,0);
       let friends4 = String.fromCharCode(114,101,100,117,110,100,97,110,99,121,95,106,95,57,56,0);
      while (favoriteI.length <= 4) {
          let binddataso: Map<any, any> = new Map([[String.fromCharCode(111,95,49,54,95,105,115,111,0),832], [String.fromCharCode(111,95,54,48,95,112,101,114,109,105,115,115,105,111,110,115,0),751], [String.fromCharCode(121,95,51,57,95,105,110,100,101,102,105,110,105,116,101,108,121,0),477]]);
          let xadsdks = 1;
         friends4 += `${3 - fadfdeebbbfdabbbabdadfaaddaa_.length}`;
         binddataso.set(`${xadsdks}`, xadsdks);
         break;
      }
      pangleE = `${reactnativejsC % (Math.max(3, parseInt(`${hejis}`)))}`;
   }
       let configurem = String.fromCharCode(118,95,57,50,95,115,104,105,109,109,101,114,0);
       let catalogb = 0.0;
      for (let l = 0; l < 1; l++) {
         configurem += `${configurem.length}`;
      }
      for (let s = 0; s < 2; s++) {
          let hongkongm = String.fromCharCode(108,117,97,95,99,95,57,55,0);
          let inactivek: Map<any, any> = new Map([[String.fromCharCode(119,95,49,49,95,105,111,118,101,99,105,110,0),114], [String.fromCharCode(122,95,52,56,95,100,105,115,116,114,105,98,117,116,101,100,0),0]]);
          let nativeexv = String.fromCharCode(106,95,53,51,95,110,111,110,99,111,110,116,97,99,116,0);
          let mailk = String.fromCharCode(98,95,50,95,100,101,99,111,114,97,116,105,111,110,0);
         catalogb /= Math.max(4, (String.fromCharCode(74,0) == hongkongm ? inactivek.size : hongkongm.length));
         inactivek.set(mailk, 1);
         nativeexv = `${nativeexv.length >> (Math.min(3, mailk.length))}`;
      }
          let pluss = false;
          let countdown6 = 1.0;
          let lighti = 2;
         configurem += "1";
         pluss = countdown6 <= 99.80;
         countdown6 += parseFloat(`${3}`);
         lighti >>= Math.min(Math.abs(lighti), 3);
          let accepted6 = String.fromCharCode(116,112,101,108,95,113,95,52,50,0);
         catalogb *= configurem.length % 1;
         accepted6 += `${accepted6.length | accepted6.length}`;
      let league8 = configurem.length <= 5000690;
      do {
          let half0 = String.fromCharCode(99,95,51,51,95,105,113,109,112,0);
          let uinit_dX = String.fromCharCode(106,95,55,95,97,112,112,108,121,105,110,103,0);
         configurem += `${2 - parseInt(`${catalogb}`)}`;
         half0 += `${2 * half0.length}`;
         uinit_dX = `${uinit_dX.length % (Math.max(3, 5))}`;
         if (league8) {
            break;
         }
      } while (league8 && (4.5 == catalogb));
      for (let b = 0; b < 2; b++) {
          let debugB = 1;
          let champion4 = String.fromCharCode(101,97,115,105,110,103,95,50,95,55,57,0);
          let canvasK = false;
          let xadsdkq = 5.0;
          let sliderc = 5.0;
         configurem += `${(configurem == String.fromCharCode(73,0) ? configurem.length : parseInt(`${catalogb}`))}`;
         debugB *= champion4.length;
         champion4 += "1";
         canvasK = !canvasK;
         xadsdkq /= Math.max(5, parseInt(`${sliderc}`));
         sliderc /= Math.max(parseInt(`${xadsdkq}`) >> (Math.min(3, Math.abs(2))), 2);
      }
      servicer %= Math.max(3, parseInt(`${encryptu}`) - 3);
   let background1 = 6121409 <= nalyticsD.length;
   do {
      nalyticsD = "1";
      if (background1) {
         break;
      }
   } while (background1 && (nalyticsD.endsWith(`${favicon8}`)));
       let twitterb = 1;
       let interstitialN = String.fromCharCode(105,110,115,116,97,108,108,97,116,105,111,110,95,50,95,56,54,0);
       let animationsw = true;
       let mailB: Array<any> = [695, 40, 938];
       let google3: Array<any> = [728, 696, 832];
       let colorsI: Array<any> = [String.fromCharCode(118,101,99,116,111,114,95,98,95,51,0), String.fromCharCode(104,95,54,95,119,105,110,100,105,110,103,0)];
       let memberK = 0.0;
         mailB = [twitterb + 3];
      let sourceI = colorsI.length >= 8383511;
      do {
          let minivodo: Map<any, any> = new Map([[String.fromCharCode(114,95,57,95,112,97,110,111,114,97,109,97,0),String.fromCharCode(104,97,98,108,101,95,105,95,51,53,0)], [String.fromCharCode(101,95,52,57,95,101,120,105,115,116,115,0),String.fromCharCode(111,95,53,55,95,102,102,106,110,105,0)]]);
          let miniX = 2.0;
          let binddatasx: Map<any, any> = new Map([[String.fromCharCode(107,95,54,48,95,115,111,108,97,110,97,0),false ], [String.fromCharCode(97,115,115,101,109,98,108,101,100,95,115,95,54,54,0),true ]]);
          let untickH: Map<any, any> = new Map([[String.fromCharCode(112,95,51,49,95,109,101,109,99,112,121,0),String.fromCharCode(113,95,56,54,95,109,99,100,99,0)], [String.fromCharCode(106,95,57,95,110,111,110,110,117,108,108,111,117,116,0),String.fromCharCode(112,114,111,112,101,114,95,101,95,53,0)]]);
          let playlistp = 2.0;
         colorsI = [2];
         minivodo.set(`${playlistp}`, minivodo.size << (Math.min(Math.abs(2), 1)));
         miniX += parseInt(`${playlistp}`) % (Math.max(untickH.size, 1));
         binddatasx.set(`${miniX}`, 2);
         untickH = new Map([[`${minivodo.size}`, 2]]);
         if (sourceI) {
            break;
         }
      } while ((!colorsI.includes(twitterb)) && sourceI);
      let b_image0 = mailB.length >= 6154689;
      do {
          let statsE = true;
          let usernameL = 1.0;
         mailB.push((2 << (Math.min(3, Math.abs((statsE ? 4 : 4))))));
         statsE = usernameL == usernameL;
         if (b_image0) {
            break;
         }
      } while (b_image0 && (3 == (mailB.length | 2) || !animationsw));
      for (let i = 0; i < 2; i++) {
          let friendsA = String.fromCharCode(99,111,109,112,105,108,101,111,112,116,105,111,110,103,101,116,95,48,95,48,0);
          let playercommon2 = String.fromCharCode(113,95,57,53,95,118,108,105,110,101,0);
         mailB = [1];
         friendsA = `${1 ^ playercommon2.length}`;
         playercommon2 = `${friendsA.length}`;
      }
      if ((memberK + 1.69) == 1.30) {
         interstitialN = `${3 >> (Math.min(Math.abs(twitterb), 4))}`;
      }
       let f_managerb = String.fromCharCode(110,95,56,57,95,111,112,101,114,97,116,111,114,115,0);
       let thumbnailp = String.fromCharCode(102,112,115,95,111,95,49,49,0);
      plays -= parseFloat(`${parseInt(`${internete}`) + 1}`);
   let circle8 = internete <= 5672032.0;
   do {
      internete /= Math.max(3, 2 - orangeE.length);
      if (circle8) {
         break;
      }
   } while (circle8 && ((4 - hejis) >= 2.67));
   for (let t = 0; t < 3; t++) {
       let schedulerV: Array<any> = [266, 298];
       let short_0z = String.fromCharCode(109,101,116,97,100,97,116,97,115,101,116,95,49,95,49,57,0);
       let rootw: Array<any> = [String.fromCharCode(113,95,49,56,95,112,114,101,118,105,111,117,115,0), String.fromCharCode(108,95,55,95,112,114,101,115,101,114,118,101,0), String.fromCharCode(104,111,114,110,95,57,95,49,57,0)];
       let libjsinspectorK = 2.0;
       let chartJ: Map<any, any> = new Map([[String.fromCharCode(115,105,103,110,112,111,115,116,95,106,95,52,57,0),973], [String.fromCharCode(101,120,112,108,105,99,105,116,108,121,95,116,95,50,56,0),975], [String.fromCharCode(114,101,112,114,101,115,101,110,116,105,110,103,95,53,95,51,56,0),482]]);
      for (let r = 0; r < 2; r++) {
         schedulerV.push(short_0z.length);
      }
          let readn = String.fromCharCode(105,100,101,110,116,105,102,121,95,103,95,49,48,0);
          let descD = String.fromCharCode(115,95,52,56,95,105,110,116,101,114,115,101,99,116,115,0);
         rootw.push(rootw.length - 1);
         readn += `${2 | descD.length}`;
         descD += `${descD.length & readn.length}`;
      let settingsx = 6684584 >= rootw.length;
      do {
          let libswresampled = 5;
          let libavdevicel = String.fromCharCode(116,95,50,56,95,114,101,118,101,114,116,0);
          let relatedg = String.fromCharCode(99,104,97,110,110,101,108,115,95,115,95,57,48,0);
          let ajaxt = String.fromCharCode(122,109,113,115,104,101,108,108,95,118,95,57,55,0);
         rootw = [3];
         libswresampled *= 3;
         libavdevicel += `${(String.fromCharCode(101,0) == relatedg ? libswresampled : relatedg.length)}`;
         ajaxt += `${ajaxt.length / (Math.max(3, libswresampled))}`;
         if (settingsx) {
            break;
         }
      } while (settingsx && ((chartJ.size << (Math.min(Math.abs(4), 1))) > 2));
         libjsinspectorK -= rootw.length ^ short_0z.length;
         libjsinspectorK /= Math.max(1, 1);
          let libfbF = String.fromCharCode(120,112,114,118,95,103,95,52,54,0);
          let philippinesn = 3;
         schedulerV = [chartJ.size + 1];
         libfbF += `${philippinesn + 2}`;
         philippinesn <<= Math.min(2, Math.abs(1 * philippinesn));
      for (let v = 0; v < 1; v++) {
         chartJ = new Map([[`${rootw.length}`, rootw.length % 1]]);
      }
       let minivodo5: Map<any, any> = new Map([[String.fromCharCode(109,117,108,95,103,95,54,53,0),388], [String.fromCharCode(100,95,55,57,95,103,101,116,104,100,114,0),188]]);
       let twitterV: Map<any, any> = new Map([[String.fromCharCode(99,111,108,115,101,116,95,101,95,52,48,0),315], [String.fromCharCode(99,104,101,99,107,109,109,95,122,95,52,57,0),821]]);
      if (Array.from(twitterV.values()).includes(minivodo5.size)) {
          let nativemodule1 = 4;
          let graph4 = String.fromCharCode(116,95,51,56,95,97,99,113,117,97,110,116,0);
          let utils2: Array<any> = [493, 891];
          let privilege6: Map<any, any> = new Map([[String.fromCharCode(109,98,117,118,101,114,114,111,114,95,57,95,51,49,0),777], [String.fromCharCode(116,95,49,57,95,118,97,114,105,110,102,111,0),802]]);
          let mbsplashG = String.fromCharCode(115,101,114,105,97,108,110,111,95,48,95,54,55,0);
         twitterV.set(`${utils2.length}`, privilege6.size);
         nativemodule1 /= Math.max(nativemodule1, 3);
         graph4 = "1";
         utils2 = [graph4.length];
         privilege6.set(graph4, mbsplashG.length);
         mbsplashG += `${mbsplashG.length / 3}`;
      }
      if (4 > (twitterV.size >> (Math.min(Math.abs(1), 1)))) {
         short_0z = `${short_0z.length}`;
      }
         schedulerV.push((String.fromCharCode(116,0) == short_0z ? short_0z.length : rootw.length));
       let goall = String.fromCharCode(122,95,55,52,95,105,115,114,101,97,100,111,110,108,121,0);
       let orientation5 = String.fromCharCode(107,95,51,48,95,109,115,98,115,0);
         short_0z = `${parseInt(`${libjsinspectorK}`)}`;
      for (let n = 0; n < 2; n++) {
         rootw.push(minivodo5.size);
      }
         goall = `${3 * rootw.length}`;
      reactnativejsC -= chartJ.size;
   }
   let dicei = 9799405.0 >= plays;
   do {
      plays *= parseFloat(`${orangeE.length}`);
      if (dicei) {
         break;
      }
   } while (dicei && (4 > weiboo.length));
       let ewarded9: Array<any> = [String.fromCharCode(120,95,53,57,95,105,99,109,112,0), String.fromCharCode(119,95,53,51,95,98,101,97,116,0), String.fromCharCode(106,115,105,109,100,99,112,117,95,109,95,55,52,0)];
       let mbjscommonh = 1.0;
       let kick3 = String.fromCharCode(105,95,51,95,117,110,114,101,102,0);
         kick3 += `${parseInt(`${mbjscommonh}`) >> (Math.min(ewarded9.length, 5))}`;
       let plashd = true;
       let libreactnativejniO = false;
      for (let e = 0; e < 1; e++) {
         kick3 += `${(3 - (plashd ? 2 : 3))}`;
      }
      while (plashd && libreactnativejniO) {
         libreactnativejniO = !libreactnativejniO;
         break;
      }
      let pauseE = plashd ? !plashd : plashd;
      do {
         plashd = kick3.length == ewarded9.length;
         if (pauseE) {
            break;
         }
      } while (pauseE && (libreactnativejniO && plashd));
      let bufferr = String.fromCharCode(106,118,116,120,50,115,57,48,0) == kick3;
      do {
         kick3 = `${ewarded9.length & parseInt(`${mbjscommonh}`)}`;
         if (bufferr) {
            break;
         }
      } while (bufferr && (kick3.length <= 5 && plashd));
      if (!libreactnativejniO) {
         libreactnativejniO = !libreactnativejniO;
      }
       let libfabricjni3 = 3.0;
      while ((1.74 + mbjscommonh) <= 1.45 && (mbjscommonh + 1.74) <= 5.15) {
         mbjscommonh /= Math.max(2, 2);
         break;
      }
      reactnativejsC ^= parseInt(`${hejis}`) * parseInt(`${mbjscommonh}`);
   if (5.97 == (hejis - servicer)) {
       let controlT = true;
       let uimanageri = 0;
          let scrollview9 = 5.0;
          let anytimet: Array<any> = [566, 311];
         uimanageri |= anytimet.length * 1;
         scrollview9 += parseFloat(`${parseInt(`${scrollview9}`)}`);
         anytimet.push(parseInt(`${scrollview9}`) - parseInt(`${scrollview9}`));
      if (2 <= (1 << (Math.min(1, Math.abs(uimanageri)))) && 1 <= uimanageri) {
         controlT = !controlT;
      }
          let calendarY = 2;
          let downloaderp = String.fromCharCode(111,95,54,48,95,104,97,108,102,100,0);
          let libjsiX = 5.0;
         uimanageri &= 2;
         calendarY /= Math.max(calendarY | 1, 2);
         downloaderp = `${parseInt(`${libjsiX}`)}`;
         libjsiX /= Math.max(5, 2 * parseInt(`${libjsiX}`));
       let runtimeH: Map<any, any> = new Map([[String.fromCharCode(112,102,102,102,116,95,110,95,51,50,0),594], [String.fromCharCode(121,95,51,53,95,99,111,109,112,111,115,105,116,105,110,103,0),133]]);
       let private_9G: Map<any, any> = new Map([[String.fromCharCode(112,114,111,112,97,103,97,116,101,95,107,95,54,51,0),String.fromCharCode(108,111,99,97,108,101,115,95,108,95,57,50,0)], [String.fromCharCode(116,111,110,101,95,103,95,54,51,0),String.fromCharCode(99,117,115,116,111,109,105,122,101,95,104,95,53,51,0)], [String.fromCharCode(112,117,116,95,108,95,54,0),String.fromCharCode(115,98,105,116,115,95,49,95,51,55,0)]]);
         private_9G.set(`${uimanageri}`, runtimeH.size);
          let xadsdk5 = String.fromCharCode(118,97,97,99,97,108,99,117,108,97,116,105,111,110,95,116,95,56,52,0);
          let sigmobN: Array<any> = [748, 642];
          let libmapbufferjni8: Map<any, any> = new Map([[String.fromCharCode(108,97,116,101,95,51,95,52,52,0),901], [String.fromCharCode(116,121,112,101,115,95,110,95,54,50,0),140], [String.fromCharCode(108,101,114,112,105,110,103,95,52,95,55,56,0),227]]);
         runtimeH.set(`${sigmobN.length}`, sigmobN.length);
         xadsdk5 += `${libmapbufferjni8.size}`;
         libmapbufferjni8 = new Map([[`${libmapbufferjni8.size}`, libmapbufferjni8.size]]);
      hejis *= parseInt(`${hejis}`) / (Math.max(2, 4));
   }
      internete *= orientationX.size;
      weiboo = `${nalyticsD.length}`;
      favicon8 *= parseFloat(`${parseInt(`${plays}`)}`);
   while ((encryptu * 4.48) <= 2.54 || 4.2 <= (4.48 * plays)) {
       let libreactnativejniU: Array<any> = [568, 508];
       let chartH = String.fromCharCode(115,95,52,55,95,97,105,109,100,0);
       let runtimescheduler4 = 2;
       let auto_dnu = String.fromCharCode(97,95,49,95,115,99,111,114,101,115,0);
       let paginationQ = 3;
         chartH += `${1 & auto_dnu.length}`;
          let sanst = String.fromCharCode(112,95,51,49,95,99,111,110,118,111,108,118,101,0);
         chartH += `${paginationQ * 1}`;
         sanst = `${sanst.length}`;
       let langkeys: Array<any> = [751, 693, 337];
      while (auto_dnu.length >= 5) {
          let android6 = 5.0;
          let foundQ = String.fromCharCode(119,97,105,116,105,110,103,95,49,95,54,56,0);
          let reactnativejsd = false;
         runtimescheduler4 -= (auto_dnu == String.fromCharCode(76,0) ? langkeys.length : auto_dnu.length);
         android6 -= (parseFloat(`${(reactnativejsd ? 5 : 5) | parseInt(`${android6}`)}`));
         foundQ = `${(foundQ.length / (Math.max(7, (reactnativejsd ? 2 : 4))))}`;
         break;
      }
         langkeys = [3];
         paginationQ &= 3;
          let episodeZ = false;
          let classesb = String.fromCharCode(108,117,104,110,95,102,95,52,50,0);
         auto_dnu = `${paginationQ | 3}`;
         episodeZ = classesb.length >= 58 || episodeZ;
         classesb = "3";
         paginationQ += runtimescheduler4 % 3;
      while ((paginationQ << (Math.min(langkeys.length, 5))) >= 4) {
         paginationQ *= chartH.length;
         break;
      }
      let smallp = paginationQ >= 5547879;
      do {
         paginationQ &= runtimescheduler4 / (Math.max(libreactnativejniU.length, 5));
         if (smallp) {
            break;
         }
      } while (((libreactnativejniU.length % 1) < 1) && smallp);
         libreactnativejniU.push(chartH.length);
      if (!chartH.includes(`${langkeys.length}`)) {
          let lessR = 0;
         chartH += `${auto_dnu.length}`;
         lessR %= Math.max(1, lessR << (Math.min(Math.abs(2), 2)));
      }
         paginationQ %= Math.max((String.fromCharCode(100,0) == chartH ? libreactnativejniU.length : chartH.length), 2);
      let backwardk = 8775439 >= auto_dnu.length;
      do {
         auto_dnu += `${runtimescheduler4}`;
         if (backwardk) {
            break;
         }
      } while (backwardk && (1 < (auto_dnu.length | runtimescheduler4) && (runtimescheduler4 | auto_dnu.length) < 1));
       let libfbjnia = true;
       let with_vgA = true;
      plays /= Math.max(parseFloat(`${orientationX.size}`), 4);
      break;
   }
      favicon8 /= Math.max(1, parseFloat(`${pangleE.length << (Math.min(Math.abs(2), 2))}`));
   let servicej = 7896925 <= mbnativeO.length;
   do {
      mbnativeO = [libcxxcomponentsU.length];
      if (servicej) {
         break;
      }
   } while ((!Array.from(orientationX.values()).includes(mbnativeO.length)) && servicej);
      plays += parseFloat(`${parseInt(`${hejis}`) * nalyticsD.length}`);
      plays -= parseFloat(`${parseInt(`${encryptu}`)}`);
      orientationX.set(`${encryptu}`, parseInt(`${encryptu}`) << (Math.min(Math.abs(orientationX.size), 1)));
       let statisticsn = String.fromCharCode(105,95,51,53,95,97,99,116,111,114,115,0);
         statisticsn = `${3 | statisticsn.length}`;
      let successP = String.fromCharCode(116,48,103,95,102,49,112,0) == statisticsn;
      do {
          let pointk: Array<any> = [783, 532];
          let yellow_ = 2;
         statisticsn = `${statisticsn.length}`;
         pointk.push(2);
         yellow_ |= pointk.length;
         if (successP) {
            break;
         }
      } while (successP && (!statisticsn.endsWith(`${statisticsn.length}`)));
      let modee = String.fromCharCode(119,114,115,103,105,113,53,0) == statisticsn;
      do {
         statisticsn = "1";
         if (modee) {
            break;
         }
      } while ((statisticsn == statisticsn) && modee);
      libcxxcomponentsU = `${3 ^ orientationX.size}`;
      reactnativejsC <<= Math.min(Math.abs(mbnativeO.length / (Math.max(pangleE.length, 7))), 2);
      favicon8 /= Math.max(1, parseFloat(`${parseInt(`${favicon8}`) ^ reactnativejsC}`));
      servicer -= (String.fromCharCode(73,0) == libcxxcomponentsU ? libcxxcomponentsU.length : reactnativejsC);
       let crossU: Array<any> = [1, 514];
       let kleving = 5.0;
       let cricket7: Array<any> = [170, 527];
      if (1.99 <= (kleving + 2.32)) {
         crossU = [1 ^ crossU.length];
      }
       let tempf: Array<any> = [String.fromCharCode(105,110,99,111,109,112,97,116,105,98,108,101,95,113,95,49,50,0), String.fromCharCode(98,111,114,100,101,114,101,100,95,122,95,56,52,0), String.fromCharCode(101,116,104,101,114,95,108,95,56,56,0)];
          let giftA = String.fromCharCode(108,116,97,98,108,101,95,103,95,51,56,0);
          let goal_ = String.fromCharCode(117,95,49,95,112,97,114,97,109,101,116,114,105,99,0);
         cricket7 = [2];
         giftA = `${giftA.length >> (Math.min(goal_.length, 4))}`;
         goal_ += "2";
          let rewindJ = String.fromCharCode(109,117,116,101,120,101,115,95,55,95,56,48,0);
         cricket7.push(parseInt(`${kleving}`) ^ crossU.length);
         rewindJ = "1";
      for (let w = 0; w < 3; w++) {
         tempf = [crossU.length >> (Math.min(Math.abs(2), 4))];
      }
       let scheduleW = String.fromCharCode(105,110,112,111,115,95,103,95,54,56,0);
       let zoomF = String.fromCharCode(112,117,110,99,104,95,117,95,54,53,0);
         zoomF += `${3 ^ zoomF.length}`;
         tempf.push((String.fromCharCode(69,0) == zoomF ? cricket7.length : zoomF.length));
      for (let a = 0; a < 2; a++) {
         crossU.push(2 ^ cricket7.length);
      }
      mbnativeO = [2 % (Math.max(10, mbnativeO.length))];
      weiboo = `${weiboo.length ^ 2}`;
   let side_ = 6625162.0 <= plays;
   do {
       let searchbarV = String.fromCharCode(114,101,102,95,114,95,57,55,0);
       let sportsI: Array<any> = [276, 752];
       let handlerw: Array<any> = [977, 777];
       let gmailQ = 3.0;
       let manifestP = String.fromCharCode(102,95,48,95,101,110,115,117,114,101,100,0);
      while (gmailQ >= 3.88) {
         gmailQ /= Math.max(sportsI.length, 1);
         break;
      }
      for (let v = 0; v < 1; v++) {
         sportsI = [1 ^ sportsI.length];
      }
      let championw = 5864862 >= sportsI.length;
      do {
         sportsI = [manifestP.length % (Math.max(10, parseInt(`${gmailQ}`)))];
         if (championw) {
            break;
         }
      } while (championw && ((sportsI.length % 2) < 4));
         searchbarV += `${manifestP.length}`;
      if (3 == handlerw.length) {
          let areaZ = 3.0;
          let fillh = 2;
          let reducerd = 1.0;
         handlerw.push((searchbarV == String.fromCharCode(55,0) ? fillh : searchbarV.length));
         areaZ /= Math.max(4, parseFloat(`${parseInt(`${reducerd}`) / 1}`));
         fillh /= Math.max(parseInt(`${areaZ}`) % 1, 3);
         reducerd /= Math.max(parseFloat(`${parseInt(`${areaZ}`)}`), 1);
      }
      while (!manifestP.includes(`${handlerw.length}`)) {
         manifestP += "1";
         break;
      }
      if (4.52 == (handlerw.length / (Math.max(9, gmailQ)))) {
         handlerw = [searchbarV.length * 1];
      }
         gmailQ *= 3;
      if (5 < handlerw.length) {
         gmailQ *= manifestP.length % 1;
      }
      let gesturej = sportsI.length >= 9041803;
      do {
         sportsI = [sportsI.length];
         if (gesturej) {
            break;
         }
      } while (gesturej && ((sportsI.length / 2) < 1 || (2 / (Math.max(4, sportsI.length))) < 3));
          let filel: Array<any> = [963, 271, 978];
          let miniq = String.fromCharCode(118,112,120,100,101,99,95,111,95,50,50,0);
          let nextM = String.fromCharCode(112,97,105,114,105,110,103,115,95,119,95,54,51,0);
         manifestP += `${2 & handlerw.length}`;
         filel = [2];
         miniq += `${nextM.length & miniq.length}`;
         nextM += `${miniq.length & 1}`;
      if (3 <= (sportsI.length ^ manifestP.length) && 3 <= (sportsI.length ^ manifestP.length)) {
         sportsI = [2];
      }
      if (1 <= searchbarV.length) {
         manifestP += `${sportsI.length / 1}`;
      }
          let serviceL = 2.0;
         sportsI.push(handlerw.length % (Math.max(7, sportsI.length)));
         serviceL /= Math.max(2, parseInt(`${serviceL}`) & 2);
          let hinit_s_9: Map<any, any> = new Map([[String.fromCharCode(115,107,105,110,95,121,95,54,55,0),String.fromCharCode(114,95,52,50,95,115,117,98,118,105,100,101,111,0)], [String.fromCharCode(105,95,52,52,95,104,111,114,105,103,0),String.fromCharCode(114,116,112,101,110,99,95,98,95,56,52,0)]]);
          let tickedl = true;
          let tailz = String.fromCharCode(120,95,50,54,95,98,115,111,110,0);
         handlerw = [handlerw.length - 1];
         hinit_s_9.set(`${tickedl}`, 1);
         tailz = `${tailz.length}`;
      plays += parseFloat(`${manifestP.length}`);
      if (side_) {
         break;
      }
   } while (side_ && (plays > 3.53));
},
  isTabFocus = false,
}: yys_ConfigureUimanager) => {
  const { colors, textVariants, spacing } = useTheme();
  const vodReducer: yys_BorderlessLibruntimeexecutor = useAppSelector(
    ({ vodReducer }: yys_MintegralLibavdevice) => vodReducer
  );
  const history = vodReducer.history.filter((e) => !e.isAdultVideo);
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const [totalPage, setTotalPage] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [results, setResults] = useState<Array<yys_BrightnessCopy>>([]);
  const [bannerAd, setBannerAd] = useState<yys_Xadsdk>();
  const [bannerAdList, setBannerAdList] = useState<Array<yys_Xadsdk>>([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const carouselRef = useRef<any>();
  
  const [width, setWidth] = useState(Dimensions.get("window").width);
  const [imgRatio, setImgRatio] = useState(1.883);
  const userState = useSelector<yys_HejiCricket>("userReducer");
  const isVip = yys_RelatedTooltips.isVip(userState.user);
  const [refPosition, setRefPosition] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });
  const componentRef = useRef<View>(null); 
  const [vipGuideModal, setVipGuideModal] = useState(false);
  const [distanceToBottom, setDistanceToBottom] = useState<number>(0); 
  const [sportList, setSportList] = useState<Array<yys_List>>([]);

  const screenState: screenModel = useAppSelector(
    ({ screenReducer }) => screenReducer
  );

  useEffect(() => {
    if (screenState.isHomeGuideShown != true && !isVip) {
      
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

  const [deviceName, setDeviceName] = useState("");

  DeviceInfo.getDeviceName().then((d) => {
    setDeviceName(d.toLowerCase());
  });
  const handleTabletFold = async () => {
       let rewindm = 5.0;
    let weiboK = String.fromCharCode(118,95,57,57,95,110,115,101,103,109,101,110,116,115,0);
    let expandV = 0;
    let flyerJ = String.fromCharCode(109,95,54,52,95,101,120,112,111,114,116,0);
    let logoutG: Array<any> = [832, 828];
    let customL = true;
    let lange = String.fromCharCode(119,95,51,49,95,99,109,115,103,0);
    let encryptX = false;
    let activeE = 2.0;
    let layoutZ = 5;
    let resendR = 4.0;
    let minimizea = 4;
    let analyticsF = String.fromCharCode(111,95,51,49,95,111,112,116,0);
    let stylesE = true;
    let circleY = true;
   if (3 < weiboK.length) {
       let vignetteA = String.fromCharCode(118,97,108,105,100,97,116,105,111,110,95,51,95,50,0);
       let delegate_hD = String.fromCharCode(99,111,114,114,101,115,112,111,110,100,101,110,116,115,95,109,95,51,0);
      while (vignetteA.length >= delegate_hD.length) {
         vignetteA = `${delegate_hD.length * vignetteA.length}`;
         break;
      }
         vignetteA += `${(String.fromCharCode(85,0) == delegate_hD ? delegate_hD.length : vignetteA.length)}`;
          let libloggero: Map<any, any> = new Map([[String.fromCharCode(117,95,50,48,95,99,108,101,97,110,115,101,0),179], [String.fromCharCode(108,111,116,116,105,101,105,116,101,109,95,108,95,53,49,0),941], [String.fromCharCode(97,95,50,49,95,101,120,101,99,117,116,111,114,0),345]]);
         vignetteA += `${delegate_hD.length}`;
         libloggero = new Map([[`${libloggero.size}`, libloggero.size + libloggero.size]]);
      let rewardvideoZ = delegate_hD.length <= 7692326;
      do {
         delegate_hD = `${vignetteA.length ^ delegate_hD.length}`;
         if (rewardvideoZ) {
            break;
         }
      } while ((vignetteA == String.fromCharCode(119,0) && delegate_hD == String.fromCharCode(50,0)) && rewardvideoZ);
      if (!vignetteA.startsWith(delegate_hD)) {
          let graphr = String.fromCharCode(99,95,50,52,95,117,110,108,105,110,107,101,100,0);
         delegate_hD += "1";
         graphr = `${2 >> (Math.min(3, graphr.length))}`;
      }
      for (let f = 0; f < 1; f++) {
         delegate_hD += `${2 ^ delegate_hD.length}`;
      }
      customL = vignetteA.startsWith(`${minimizea}`);
   }
   while (expandV == rewindm) {
       let expand4: Array<any> = [56, 772, 66];
         expand4 = [1];
         expand4 = [3];
       let rounde = String.fromCharCode(110,95,56,53,95,105,99,111,110,0);
       let shareF = String.fromCharCode(97,95,53,95,103,98,114,97,112,0);
      rewindm *= 2 - parseInt(`${resendR}`);
      break;
   }
   for (let y = 0; y < 2; y++) {
      activeE += layoutZ + expandV;
   }
      encryptX = minimizea > 53;

    Dimensions.addEventListener("change", (e) => {

       let modelv = true;
       let libavcodecS = String.fromCharCode(109,106,112,101,103,101,110,99,95,119,95,53,52,0);
      while (libavcodecS.length >= 1) {
         modelv = !modelv;
         break;
      }
      let recommendation2 = libavcodecS == String.fromCharCode(113,55,120,104,108,119,95,0);
      do {
         libavcodecS = `${(libavcodecS == String.fromCharCode(113,0) ? libavcodecS.length : (modelv ? 3 : 1))}`;
         if (recommendation2) {
            break;
         }
      } while ((!modelv) && recommendation2);
      if (libavcodecS.length >= 5) {
         libavcodecS += `${((modelv ? 1 : 4) ^ 1)}`;
      }
      let gradle3 = modelv ? !modelv : modelv;
      do {
         modelv = !modelv;
         if (gradle3) {
            break;
         }
      } while ((modelv) && gradle3);
      let gradlea = modelv ? !modelv : modelv;
      do {
         modelv = !modelv;
         if (gradlea) {
            break;
         }
      } while ((modelv && 4 < libavcodecS.length) && gradlea);
      for (let j = 0; j < 2; j++) {
          let nterstitialx: Array<any> = [485, 115, 698];
         libavcodecS += `${libavcodecS.length}`;
         nterstitialx.push(nterstitialx.length);
      }
      layoutZ |= 2 & libavcodecS.length;
       let halfe = String.fromCharCode(104,95,56,52,0);
       let main_ud = true;
       let brightnessA: Map<any, any> = new Map([[String.fromCharCode(119,95,51,53,95,109,102,104,100,0),190], [String.fromCharCode(103,95,53,51,95,105,110,102,101,114,101,100,0),799]]);
          let libavfilterQ: Array<any> = [828, 475];
         brightnessA = new Map([[`${brightnessA.size}`, brightnessA.size * 2]]);
         libavfilterQ.push(libavfilterQ.length - libavfilterQ.length);
      for (let o = 0; o < 1; o++) {
         brightnessA = new Map([[`${brightnessA.size}`, brightnessA.size]]);
      }
      while (!main_ud) {
         main_ud = (((!main_ud ? 22 : brightnessA.size) & brightnessA.size) == 22);
         break;
      }
          let fastu: Array<any> = [String.fromCharCode(97,118,112,114,111,103,114,97,109,95,117,95,57,56,0), String.fromCharCode(114,95,54,51,95,97,114,109,111,110,121,0)];
          let becomee = String.fromCharCode(107,95,51,55,95,99,104,101,99,107,98,111,120,0);
         brightnessA.set(`${main_ud}`, fastu.length | 3);
         fastu = [becomee.length];
         becomee += "3";
         main_ud = !main_ud;
      for (let t = 0; t < 3; t++) {
          let sina8 = String.fromCharCode(98,117,116,116,101,114,119,111,114,116,104,95,54,95,53,48,0);
          let baidus = String.fromCharCode(118,101,114,116,101,120,95,104,95,49,54,0);
          let wcopy_jtx: Map<any, any> = new Map([[String.fromCharCode(115,95,54,52,95,108,111,103,111,0),882], [String.fromCharCode(114,116,112,112,108,97,121,95,100,95,49,0),388], [String.fromCharCode(108,95,56,49,95,105,112,97,100,105,102,102,0),965]]);
         main_ud = !sina8.includes(`${main_ud}`);
         sina8 += `${baidus.length}`;
         baidus += `${baidus.length}`;
         wcopy_jtx.set(`${baidus}`, wcopy_jtx.size ^ baidus.length);
      }
         main_ud = (((main_ud ? brightnessA.size : 17) / (Math.max(8, brightnessA.size))) > 29);
      if (!halfe.startsWith(`${main_ud}`)) {
          let specS = 5.0;
          let rooti = String.fromCharCode(100,105,109,101,110,115,105,111,110,115,95,113,95,57,51,0);
          let line_ = String.fromCharCode(116,95,53,48,95,99,111,118,101,114,97,103,101,0);
          let animation0 = String.fromCharCode(99,95,52,50,95,121,117,118,0);
          let faviconC = String.fromCharCode(100,95,53,52,95,99,111,100,101,99,99,116,108,0);
         halfe += `${(String.fromCharCode(73,0) == line_ ? faviconC.length : line_.length)}`;
         specS /= Math.max(4, (String.fromCharCode(114,0) == rooti ? animation0.length : rooti.length));
         animation0 += `${(rooti == String.fromCharCode(85,0) ? animation0.length : rooti.length)}`;
         faviconC += `${rooti.length - 2}`;
      }
      for (let v = 0; v < 2; v++) {
         brightnessA.set(`${halfe}`, halfe.length + 1);
      }
      encryptX = 41.76 == activeE;
   for (let k = 0; k < 2; k++) {
       let uimanagerh = false;
       let launchX = 0.0;
       let ginit_96 = String.fromCharCode(109,117,108,116,105,112,108,101,95,53,95,52,53,0);
       let constants5 = String.fromCharCode(117,110,99,111,109,112,114,101,115,115,101,100,95,51,95,50,55,0);
       let buttony: Array<any> = [278, 181, 513];
          let graphicsT: Map<any, any> = new Map([[String.fromCharCode(110,95,56,95,99,111,110,99,101,97,108,109,101,110,116,0),false ], [String.fromCharCode(108,95,51,51,95,117,100,105,111,0),false ], [String.fromCharCode(116,95,50,55,95,105,110,105,116,101,110,99,0),false ]]);
          let gradleb = 4.0;
          let filedE = String.fromCharCode(121,95,50,49,95,105,110,118,101,114,115,101,100,0);
         buttony.push(1 & graphicsT.size);
         graphicsT = new Map([[filedE, (String.fromCharCode(48,0) == filedE ? parseInt(`${gradleb}`) : filedE.length)]]);
         gradleb /= Math.max(parseFloat(`${filedE.length + 1}`), 4);
         ginit_96 = `${1 >> (Math.min(3, Math.abs(parseInt(`${launchX}`))))}`;
         buttony.push(1 % (Math.max(8, parseInt(`${launchX}`))));
      while (5 == (5 << (Math.min(4, ginit_96.length))) || 1 == (ginit_96.length << (Math.min(Math.abs(5), 1)))) {
          let executorg = 5;
         buttony.push(constants5.length);
         executorg ^= executorg;
         break;
      }
      let anythinkb = ginit_96 == String.fromCharCode(108,52,99,0);
      do {
         ginit_96 = "2";
         if (anythinkb) {
            break;
         }
      } while ((ginit_96.startsWith(`${buttony.length}`)) && anythinkb);
       let styles4: Array<any> = [298, 522, 439];
         styles4.push(constants5.length & buttony.length);
          let collectionW = String.fromCharCode(114,101,102,111,99,117,115,95,50,95,49,54,0);
          let libreactperfloggerjniv = String.fromCharCode(111,95,50,55,95,112,114,101,100,105,99,116,105,118,101,0);
         ginit_96 = `${libreactperfloggerjniv.length}`;
         collectionW = `${collectionW.length}`;
         libreactperfloggerjniv += `${3 % (Math.max(7, collectionW.length))}`;
          let graph4 = 5.0;
          let memberq = String.fromCharCode(97,116,116,114,105,98,117,116,101,95,114,95,49,53,0);
         ginit_96 = `${parseInt(`${launchX}`) | parseInt(`${graph4}`)}`;
         graph4 += parseFloat(`${memberq.length}`);
         memberq = `${1 ^ memberq.length}`;
      while ((2 % (Math.max(10, buttony.length))) == 3 || 2 == (buttony.length % (Math.max(constants5.length, 3)))) {
         buttony.push((constants5.length ^ (uimanagerh ? 3 : 1)));
         break;
      }
      if ((buttony.length % (Math.max(constants5.length, 2))) > 5) {
         buttony = [parseInt(`${launchX}`) >> (Math.min(3, Math.abs(3)))];
      }
         uimanagerh = !constants5.includes(`${uimanagerh}`);
         ginit_96 = `${buttony.length << (Math.min(styles4.length, 1))}`;
         launchX += parseInt(`${launchX}`) >> (Math.min(5, Math.abs(3)));
         ginit_96 = `${(String.fromCharCode(65,0) == constants5 ? (uimanagerh ? 5 : 2) : constants5.length)}`;
      expandV &= 3;
   }
       let renderH: Array<any> = [440, 995, 924];
         renderH = [renderH.length ^ 1];
      while (renderH.includes(renderH.length)) {
         renderH.push(renderH.length + 1);
         break;
      }
          let combinedw = 4;
         renderH = [3 / (Math.max(combinedw, 4))];
      flyerJ += `${3 * flyerJ.length}`;
      const includesKeywords = [
        "flip",
        "fold",
        "mate x3",
        "mate xs",
      ].some((keyword) => deviceName.includes(keyword));

   if (customL) {
      customL = encryptX;
   }
      flyerJ = `${((encryptX ? 3 : 4) - lange.length)}`;
   while (3 > (layoutZ * parseInt(`${rewindm}`)) || (parseInt(`${rewindm}`) * layoutZ) > 3) {
      rewindm /= Math.max(expandV, 5);
      break;
   }
   let playercommonq = 7794711 <= expandV;
   do {
      expandV %= Math.max(2, 3 | minimizea);
      if (playercommonq) {
         break;
      }
   } while ((!encryptX) && playercommonq);
      if (DeviceInfo.isTablet() || includesKeywords) {

   for (let a = 0; a < 1; a++) {
      resendR -= expandV / (Math.max(7, minimizea));
   }
   while (1 < (weiboK.length % 5)) {
       let background4 = true;
       let z_managern = 5.0;
         background4 = !background4;
       let controlsH = false;
       let rightt = true;
          let reducerp = true;
          let mergers = String.fromCharCode(110,111,110,122,101,114,111,95,52,95,57,55,0);
          let gdtadva = 3;
         controlsH = !reducerp && 45.45 >= z_managern;
         reducerp = (gdtadva % (Math.max(1, mergers.length))) > 22;
         mergers = `${(mergers == String.fromCharCode(117,0) ? mergers.length : gdtadva)}`;
      let statsy = rightt ? !rightt : rightt;
      do {
          let adultW = true;
          let rewindj = 2.0;
          let graph_ = 4.0;
          let progressF = 2;
          let path1 = 1.0;
         rightt = 94 == progressF;
         adultW = 100.33 >= (graph_ + rewindj);
         rewindj /= Math.max(3, (parseInt(`${path1}`) ^ (adultW ? 3 : 4)));
         graph_ /= Math.max(4, parseInt(`${rewindj}`) ^ parseInt(`${graph_}`));
         progressF /= Math.max(2, parseInt(`${graph_}`));
         path1 /= Math.max(4, (parseFloat(`${parseInt(`${rewindj}`) + (adultW ? 1 : 5)}`)));
         if (statsy) {
            break;
         }
      } while (statsy && (!rightt && !controlsH));
       let ajax_ = true;
       let paginationP = false;
      for (let d = 0; d < 3; d++) {
         ajax_ = !controlsH;
      }
      minimizea -= parseInt(`${z_managern}`);
      break;
   }
      layoutZ /= Math.max(5, logoutG.length);
       let scoreX = 0.0;
      let gift2 = 6406060.0 >= scoreX;
      do {
         scoreX -= parseFloat(`${parseInt(`${scoreX}`)}`);
         if (gift2) {
            break;
         }
      } while ((2.21 > (scoreX - 3.32) || 3.32 > (scoreX - scoreX)) && gift2);
          let sigmobw = String.fromCharCode(101,115,115,97,103,101,95,104,95,56,54,0);
          let referrerJ = String.fromCharCode(109,100,99,116,95,107,95,53,53,0);
          let matchr = String.fromCharCode(102,95,49,50,95,115,112,104,101,114,105,99,97,108,0);
         scoreX -= parseFloat(`${1}`);
         sigmobw += `${referrerJ.length % 3}`;
         referrerJ += `${(matchr == String.fromCharCode(80,0) ? sigmobw.length : matchr.length)}`;
      let paginationF = 6757712.0 >= scoreX;
      do {
          let configv = String.fromCharCode(104,113,100,110,100,95,54,95,51,50,0);
          let paginationR = String.fromCharCode(116,114,97,102,95,118,95,57,55,0);
          let crown_ = String.fromCharCode(100,101,110,105,101,100,95,103,95,49,57,0);
          let usert = 2.0;
         scoreX /= Math.max(parseFloat(`${paginationR.length}`), 2);
         configv += `${(crown_ == String.fromCharCode(84,0) ? crown_.length : parseInt(`${usert}`))}`;
         paginationR = `${parseInt(`${usert}`) << (Math.min(crown_.length, 2))}`;
         if (paginationF) {
            break;
         }
      } while (paginationF && ((scoreX * 4.85) <= 3.100));
      flyerJ = `${3 ^ parseInt(`${rewindm}`)}`;
        setWidth(Number(Dimensions.get("window").width));

   let typesO = expandV <= 6440886;
   do {
       let eventP: Array<any> = [String.fromCharCode(121,117,118,112,97,99,107,101,100,95,116,95,54,57,0), String.fromCharCode(103,95,57,48,95,112,105,120,101,108,117,116,105,108,115,0)];
         eventP.push(2 + eventP.length);
      for (let h = 0; h < 1; h++) {
          let proxyl = 2;
          let libsgcorel = 4.0;
         eventP = [3];
         proxyl %= Math.max(parseInt(`${libsgcorel}`) % 2, 4);
         libsgcorel *= parseFloat(`${1}`);
      }
         eventP.push(eventP.length);
      expandV /= Math.max(logoutG.length >> (Math.min(lange.length, 3)), 3);
      if (typesO) {
         break;
      }
   } while ((expandV == layoutZ) && typesO);
   if (lange != String.fromCharCode(69,0) || 1 < flyerJ.length) {
      flyerJ += `${3 + layoutZ}`;
   }
   for (let o = 0; o < 2; o++) {
       let commentF = String.fromCharCode(112,114,101,118,118,101,99,95,106,95,54,0);
       let episodesx = String.fromCharCode(105,95,49,48,48,95,114,111,117,110,100,115,0);
         episodesx += "3";
      while (episodesx != commentF) {
          let libjsinspectorl = String.fromCharCode(118,95,56,50,95,117,110,100,111,0);
          let tickedy = String.fromCharCode(114,116,108,95,109,95,50,48,0);
          let casting9: Map<any, any> = new Map([[String.fromCharCode(119,114,105,116,101,120,95,113,95,52,49,0),188], [String.fromCharCode(116,104,114,101,115,104,95,109,95,49,55,0),828], [String.fromCharCode(101,95,57,54,95,114,101,97,100,98,121,116,101,0),615]]);
          let libzeusX = 0.0;
          let qaags: Map<any, any> = new Map([[String.fromCharCode(104,119,114,97,110,100,95,121,95,52,53,0),false ], [String.fromCharCode(97,95,52,55,95,101,109,98,101,100,100,105,110,103,0),false ]]);
         commentF = `${parseInt(`${libzeusX}`)}`;
         libjsinspectorl = `${casting9.size}`;
         tickedy = `${casting9.size - 2}`;
         libzeusX += parseFloat(`${3}`);
         qaags.set(`${qaags.size}`, casting9.size | 1);
         break;
      }
         commentF = `${(String.fromCharCode(88,0) == episodesx ? episodesx.length : commentF.length)}`;
          let g_managerk = String.fromCharCode(103,95,54,55,95,109,115,105,122,101,0);
          let flipperl: Array<any> = [String.fromCharCode(107,95,51,54,95,115,112,101,97,107,101,114,0), String.fromCharCode(112,99,97,99,104,101,95,104,95,51,51,0)];
         episodesx += `${2 << (Math.min(3, commentF.length))}`;
         g_managerk += `${(String.fromCharCode(116,0) == g_managerk ? flipperl.length : g_managerk.length)}`;
         flipperl.push(flipperl.length / (Math.max(g_managerk.length, 3)));
      let rewardvideot = 7043918 >= episodesx.length;
      do {
         episodesx += "2";
         if (rewardvideot) {
            break;
         }
      } while ((!episodesx.includes(`${commentF.length}`)) && rewardvideot);
          let arrowv = String.fromCharCode(108,111,119,101,114,99,97,115,101,100,95,101,95,49,0);
          let classesS = 5.0;
          let benefith = String.fromCharCode(104,95,55,95,115,117,98,116,114,101,101,0);
         commentF += `${arrowv.length << (Math.min(Math.abs(3), 4))}`;
         arrowv = `${parseInt(`${classesS}`) ^ 2}`;
         classesS -= benefith.length ^ 3;
         benefith = `${benefith.length}`;
      activeE *= episodesx.length;
   }
   for (let l = 0; l < 3; l++) {
      expandV |= weiboK.length;
   }
        if (data.carousel.length > 0) {

      logoutG = [((encryptX ? 5 : 5) ^ lange.length)];
   for (let q = 0; q < 2; q++) {
       let round0: Array<any> = [18, 619];
       let white1 = 0;
      if (!round0.includes(white1)) {
         white1 |= white1;
      }
      for (let s = 0; s < 1; s++) {
          let fullp = String.fromCharCode(104,105,110,116,105,110,103,95,107,95,52,54,0);
          let sounde = 2.0;
          let adultt = String.fromCharCode(99,111,110,115,111,110,97,110,116,95,122,95,57,50,0);
          let utilsY: Map<any, any> = new Map([[String.fromCharCode(116,95,51,49,95,115,116,114,116,111,107,0),318], [String.fromCharCode(120,95,53,54,95,116,114,97,105,116,0),707], [String.fromCharCode(99,97,99,97,95,48,95,50,0),164]]);
          let backB = 0.0;
         round0 = [white1 + fullp.length];
         fullp += `${adultt.length * 2}`;
         sounde *= utilsY.size;
         adultt = "1";
         utilsY.set(adultt, adultt.length * utilsY.size);
         backB += parseFloat(`${1}`);
      }
      analyticsF += `${analyticsF.length}`;
   }
      customL = analyticsF.endsWith(`${activeE}`);
   if (lange.endsWith(`${encryptX}`)) {
       let shrinkL = String.fromCharCode(108,95,57,52,95,112,101,114,109,117,116,101,0);
       let specB = 4;
       let configureN = 3;
       let animationb = true;
       let subsq = 4;
       let graphicso = 5;
      for (let h = 0; h < 1; h++) {
         animationb = animationb && 89 < specB;
      }
         shrinkL += `${configureN}`;
          let tickf = String.fromCharCode(111,118,101,114,108,97,121,115,95,52,95,49,49,0);
         subsq += configureN >> (Math.min(Math.abs(1), 2));
         tickf += `${tickf.length & tickf.length}`;
      for (let d = 0; d < 1; d++) {
          let libfb5 = false;
          let dialogP = false;
          let classesw: Map<any, any> = new Map([[String.fromCharCode(119,114,105,116,101,111,117,116,95,122,95,53,50,0),149], [String.fromCharCode(114,101,99,111,110,102,105,103,117,114,97,116,105,111,110,95,50,95,55,55,0),925]]);
          let righth = 3.0;
          let userc = 5;
         graphicso += 1 - classesw.size;
         libfb5 = !libfb5;
         dialogP = (dialogP ? !libfb5 : !dialogP);
         classesw.set(`${libfb5}`, ((dialogP ? 1 : 3) * (libfb5 ? 1 : 1)));
         righth += (2 % (Math.max((libfb5 ? 4 : 3), 4)));
         userc /= Math.max(5, (parseInt(`${righth}`) ^ (dialogP ? 4 : 3)));
      }
         animationb = specB >= 92;
          let teamR = 4;
          let anythink4 = 2.0;
          let n_positionT: Map<any, any> = new Map([[String.fromCharCode(116,114,105,109,95,97,95,57,52,0),239], [String.fromCharCode(109,101,116,101,114,95,98,95,54,54,0),29], [String.fromCharCode(114,101,99,101,110,116,101,114,95,98,95,57,52,0),982]]);
         configureN %= Math.max(2 + configureN, 4);
         teamR <<= Math.min(1, Math.abs(parseInt(`${anythink4}`) + teamR));
         anythink4 /= Math.max(teamR, 5);
         n_positionT.set(`${teamR}`, teamR % (Math.max(parseInt(`${anythink4}`), 5)));
      if (subsq == configureN) {
          let orange0: Array<any> = [659, 368, 314];
          let componentregistryV = String.fromCharCode(103,101,111,108,111,99,97,116,105,111,110,95,57,95,53,52,0);
          let searchm = 2.0;
         configureN /= Math.max(2, specB << (Math.min(componentregistryV.length, 2)));
         orange0 = [3 % (Math.max(10, parseInt(`${searchm}`)))];
         componentregistryV += `${parseInt(`${searchm}`) - 2}`;
      }
         graphicso >>= Math.min(4, parseInt(`${Math.abs(((animationb ? 3 : 1) >> (Math.min(Math.abs(configureN), 4))))}`));
         configureN /= Math.max(1, 3);
      if ((configureN | 4) == 5) {
         configureN += subsq;
      }
         subsq -= 1 >> (Math.min(4, Math.abs(graphicso)));
      encryptX = lange.startsWith(`${customL}`);
   }
          Image.getSize(data.carousel[0].carousel_pic_mobile, (w, h) => {

      minimizea &= (3 & (encryptX ? 4 : 5));
       let tumbnail0 = String.fromCharCode(112,111,108,108,95,53,95,57,52,0);
       let topic0: Array<any> = [267, 84, 50];
       let libreactnativeblobL = 1;
      let stats5 = 8981985 >= topic0.length;
      do {
         topic0.push(libreactnativeblobL);
         if (stats5) {
            break;
         }
      } while (stats5 && (tumbnail0.endsWith(`${topic0.length}`)));
      let bottomK = tumbnail0.length <= 9312763;
      do {
         tumbnail0 += `${(tumbnail0 == String.fromCharCode(119,0) ? topic0.length : tumbnail0.length)}`;
         if (bottomK) {
            break;
         }
      } while ((2 < tumbnail0.length) && bottomK);
      let arrowz = 7607580 >= topic0.length;
      do {
         topic0.push(topic0.length * 3);
         if (arrowz) {
            break;
         }
      } while (arrowz && (topic0.includes(libreactnativeblobL)));
       let backwardO = 1.0;
         topic0.push(topic0.length << (Math.min(Math.abs(1), 2)));
      flyerJ = `${expandV}`;
   if ((resendR + layoutZ) >= 4.83) {
      resendR += lange.length << (Math.min(Math.abs(2), 4));
   }
   let redirect0 = String.fromCharCode(54,122,111,55,115,0) == weiboK;
   do {
       let detail8: Array<any> = [420, 653];
       let mbnativeadvancedN = String.fromCharCode(121,95,55,52,95,102,111,114,101,97,99,104,0);
       let predictioni = true;
       let ewardedX = 5.0;
      while (!predictioni) {
         predictioni = !predictioni;
         break;
      }
      if (detail8.length < mbnativeadvancedN.length) {
         mbnativeadvancedN += `${1 & parseInt(`${ewardedX}`)}`;
      }
         predictioni = 85.34 == ewardedX;
          let liveB = 2.0;
          let macauf = String.fromCharCode(112,114,101,115,101,110,116,95,117,95,54,48,0);
          let brightness5 = true;
         mbnativeadvancedN += `${1 << (Math.min(2, mbnativeadvancedN.length))}`;
         liveB /= Math.max((macauf.length << (Math.min(4, Math.abs((brightness5 ? 1 : 3))))), 2);
         macauf = `${macauf.length}`;
         brightness5 = (18 < (macauf.length ^ (brightness5 ? macauf.length : 18)));
         mbnativeadvancedN = `${parseInt(`${ewardedX}`)}`;
          let cricketx = 5.0;
          let modalR = String.fromCharCode(119,95,55,48,95,113,114,99,111,100,101,0);
          let libavcodec2 = 4;
         mbnativeadvancedN = `${mbnativeadvancedN.length}`;
         cricketx *= 2 * parseInt(`${cricketx}`);
         modalR += `${modalR.length - 2}`;
         libavcodec2 -= 3;
          let gdtadvS = false;
          let scheduled = 3.0;
         predictioni = mbnativeadvancedN.includes(`${ewardedX}`);
         gdtadvS = 58.30 < scheduled;
         scheduled -= parseInt(`${scheduled}`) >> (Math.min(1, Math.abs(3)));
          let policyV = 2;
         detail8.push((String.fromCharCode(99,0) == mbnativeadvancedN ? policyV : mbnativeadvancedN.length));
          let zooma = String.fromCharCode(102,116,101,108,108,95,121,95,55,57,0);
          let savey = String.fromCharCode(107,109,101,97,110,115,95,106,95,50,55,0);
         mbnativeadvancedN += `${detail8.length}`;
         zooma = `${zooma.length}`;
         savey += `${(String.fromCharCode(121,0) == savey ? savey.length : zooma.length)}`;
          let uimanager1: Map<any, any> = new Map([[String.fromCharCode(104,95,57,49,95,99,111,110,115,117,109,112,116,105,111,110,0),true ], [String.fromCharCode(112,114,101,118,105,101,119,95,99,95,57,49,0),true ]]);
          let yellowA: Array<any> = [519, 99];
         detail8 = [detail8.length << (Math.min(Math.abs(2), 4))];
         uimanager1 = new Map([[`${uimanager1.size}`, yellowA.length % 2]]);
         yellowA = [uimanager1.size << (Math.min(yellowA.length, 5))];
         ewardedX += 2;
         mbnativeadvancedN += `${((predictioni ? 1 : 5) << (Math.min(detail8.length, 4)))}`;
      weiboK = "3";
      if (redirect0) {
         break;
      }
   } while (redirect0 && (weiboK.length < 5));
            setImgRatio(w / h);
          });
        }
        handleRefresh();
      }
    });
  };

  
  const handleRefresh = async () => {
       let orangeX = String.fromCharCode(97,100,116,115,95,57,95,55,55,0);
    let matchS = 0.0;
    let runtimeschedulerZ = String.fromCharCode(119,95,56,54,95,99,117,114,116,97,105,110,0);
    let zoom0 = String.fromCharCode(120,95,57,55,95,101,110,99,111,100,101,102,114,97,109,101,0);
    let libavutilt = 1.0;
    let subsv: Array<any> = [976, 694, 240];
    let whatsappS: Map<any, any> = new Map([[String.fromCharCode(121,95,50,50,95,102,105,120,116,117,114,101,115,0),503], [String.fromCharCode(119,95,55,95,102,114,101,101,109,0),261]]);
    let matchY = String.fromCharCode(117,95,53,52,95,99,114,121,115,116,97,108,104,100,0);
    let ksadv = false;
   let detailsd = matchS <= 8069506.0;
   do {
      matchS /= Math.max(parseFloat(`${parseInt(`${libavutilt}`)}`), 5);
      if (detailsd) {
         break;
      }
   } while ((zoom0.includes(`${matchS}`)) && detailsd);
      orangeX += `${2 * parseInt(`${libavutilt}`)}`;
      orangeX = `${whatsappS.size * parseInt(`${matchS}`)}`;

    setIsRefreshing(true);

       let catagoryM = true;
       let membershipP = String.fromCharCode(101,109,111,106,105,95,103,95,53,55,0);
      while (catagoryM) {
         membershipP = "3";
         break;
      }
      let borderlessi = catagoryM ? !catagoryM : catagoryM;
      do {
          let leakchecker_ = String.fromCharCode(114,101,99,117,114,115,105,111,110,95,103,95,49,56,0);
          let uimanager9 = String.fromCharCode(111,98,115,101,114,118,97,116,105,111,110,115,95,97,95,52,52,0);
          let ewardedp = true;
         catagoryM = uimanager9.length >= 28;
         leakchecker_ = `${(3 >> (Math.min(1, Math.abs((ewardedp ? 1 : 2)))))}`;
         uimanager9 += `${(3 - (ewardedp ? 4 : 3))}`;
         if (borderlessi) {
            break;
         }
      } while (borderlessi && (catagoryM));
         membershipP = `${(membershipP.length >> (Math.min(3, Math.abs((catagoryM ? 3 : 1)))))}`;
      for (let j = 0; j < 2; j++) {
         catagoryM = !catagoryM;
      }
       let contextp = true;
         membershipP += "2";
      runtimeschedulerZ = `${zoom0.length / 2}`;
       let greenm = String.fromCharCode(117,105,111,109,111,118,101,95,53,95,54,52,0);
       let launchl = true;
       let baidum: Map<any, any> = new Map([[String.fromCharCode(119,95,52,55,95,112,117,114,101,0),887], [String.fromCharCode(110,97,108,117,95,54,95,57,51,0),572], [String.fromCharCode(102,95,54,53,95,100,105,115,109,105,115,115,101,100,0),456]]);
          let quest6: Map<any, any> = new Map([[String.fromCharCode(108,105,98,106,112,101,103,116,117,114,98,111,95,116,95,49,49,0),342], [String.fromCharCode(117,110,100,101,114,108,105,110,101,95,121,95,56,0),786], [String.fromCharCode(119,111,114,100,108,101,110,95,113,95,51,49,0),909]]);
         baidum = new Map([[`${quest6.size}`, (String.fromCharCode(50,0) == greenm ? quest6.size : greenm.length)]]);
         greenm = "1";
         greenm += `${((launchl ? 5 : 3) - 3)}`;
          let videocommonD: Array<any> = [276, 319, 536];
          let trophyK = false;
          let sendF = 3;
         baidum.set(greenm, 1);
         videocommonD = [videocommonD.length * 2];
         trophyK = ((videocommonD.length | (trophyK ? 29 : videocommonD.length)) > 29);
         sendF /= Math.max((sendF - (trophyK ? 1 : 2)), 4);
         baidum = new Map([[`${baidum.size}`, 1]]);
      while ((baidum.size % 5) > 5 && launchl) {
          let assist6 = String.fromCharCode(109,95,53,55,95,115,105,110,117,115,111,105,100,97,108,0);
          let grayu = 5;
          let countdowni = String.fromCharCode(98,95,55,57,95,117,98,108,105,99,0);
          let collectione = 2;
          let umengz: Array<any> = [String.fromCharCode(110,95,54,48,95,97,100,100,0), String.fromCharCode(108,111,103,102,110,95,113,95,57,50,0), String.fromCharCode(120,95,56,52,95,112,111,112,117,108,97,116,101,0)];
         launchl = !launchl;
         assist6 += `${countdowni.length}`;
         grayu &= collectione;
         countdowni = "2";
         collectione <<= Math.min(2, Math.abs(umengz.length + collectione));
         umengz = [3];
         break;
      }
          let floatingm = String.fromCharCode(114,97,110,100,95,112,95,52,49,0);
          let applicationo = String.fromCharCode(115,117,98,109,111,100,101,108,115,95,112,95,57,56,0);
          let indexY = String.fromCharCode(105,110,115,116,97,108,108,97,116,105,111,110,95,55,95,52,57,0);
         launchl = indexY.length == 79;
         floatingm = "3";
         applicationo = `${floatingm.length << (Math.min(4, applicationo.length))}`;
         indexY = `${3 | floatingm.length}`;
      let layouts = String.fromCharCode(120,100,120,119,0) == greenm;
      do {
         greenm += "2";
         if (layouts) {
            break;
         }
      } while ((!greenm.includes(`${launchl}`)) && layouts);
          let graphC = false;
          let listP = String.fromCharCode(107,95,57,55,95,114,110,110,111,105,115,101,0);
          let twitterm: Array<any> = [668, 366];
         launchl = listP.length <= twitterm.length;
         graphC = !graphC;
         listP = `${((graphC ? 2 : 3))}`;
      orangeX += `${baidum.size | parseInt(`${matchS}`)}`;
   for (let r = 0; r < 1; r++) {
      libavutilt *= parseFloat(`${3}`);
   }
    await onRefresh(0, true);

   if (3 == runtimeschedulerZ.length) {
      runtimeschedulerZ += "1";
   }
       let cancelk = String.fromCharCode(100,116,109,102,95,118,95,54,0);
      let bootsplash7 = 6100388 >= cancelk.length;
      do {
          let phone4 = String.fromCharCode(97,112,112,114,111,120,95,108,95,56,50,0);
          let rewarde = String.fromCharCode(100,101,99,107,108,105,110,107,95,57,95,51,50,0);
          let bellU = 3;
         cancelk += `${(cancelk == String.fromCharCode(66,0) ? rewarde.length : cancelk.length)}`;
         phone4 += `${bellU}`;
         rewarde += `${phone4.length % (Math.max(1, 3))}`;
         bellU |= phone4.length;
         if (bootsplash7) {
            break;
         }
      } while ((cancelk != String.fromCharCode(120,0)) && bootsplash7);
         cancelk = "3";
         cancelk = `${cancelk.length}`;
      whatsappS = new Map([[orangeX, orangeX.length]]);
   for (let f = 0; f < 3; f++) {
      zoom0 += `${(orangeX == String.fromCharCode(105,0) ? orangeX.length : parseInt(`${libavutilt}`))}`;
   }

    setTimeout(() => {

   for (let e = 0; e < 2; e++) {
      subsv = [runtimeschedulerZ.length];
   }
      orangeX += "1";
      runtimeschedulerZ += `${parseInt(`${matchS}`)}`;
      setActiveIndex(0);

   let libswscaleV = orangeX.length <= 4952431;
   do {
      orangeX += `${parseInt(`${matchS}`) + 3}`;
      if (libswscaleV) {
         break;
      }
   } while ((orangeX.length <= parseInt(`${matchS}`)) && libswscaleV);
       let settingw: Array<any> = [478, 303, 128];
       let actionsl = 5.0;
       let detailR = 1.0;
         settingw = [parseInt(`${detailR}`)];
          let placeholderY = 2.0;
          let delegate_geZ = true;
         actionsl -= 1 ^ parseInt(`${placeholderY}`);
         placeholderY -= (parseFloat(`${(delegate_geZ ? 1 : 4) - (delegate_geZ ? 3 : 1)}`));
       let libfbjni9 = 1;
       let classesa = 2;
       let promotionG = 2.0;
       let playlist7 = 3.0;
       let launchJ = 1.0;
       let d_viewL = 3.0;
         actionsl += parseInt(`${launchJ}`);
          let combined8 = String.fromCharCode(116,95,53,54,95,100,101,113,117,111,116,101,0);
          let directe = false;
         actionsl /= Math.max(parseInt(`${d_viewL}`) * 1, 4);
         combined8 = "3";
         directe = combined8.length == 33;
          let mbsplashi = String.fromCharCode(101,110,104,97,110,99,101,95,98,95,52,56,0);
          let quest0: Array<any> = [783, 456];
          let templateprocessorW = String.fromCharCode(108,97,98,101,108,110,115,95,122,95,51,48,0);
         classesa += 2;
         mbsplashi = `${2 >> (Math.min(2, quest0.length))}`;
         quest0.push(2 | quest0.length);
         templateprocessorW = `${templateprocessorW.length}`;
      while ((classesa + playlist7) == 3.68) {
         classesa -= 3 >> (Math.min(Math.abs(parseInt(`${detailR}`)), 4));
         break;
      }
      orangeX += "1";
   if (libavutilt > matchS) {
      matchS += parseFloat(`${parseInt(`${libavutilt}`) / (Math.max(whatsappS.size, 2))}`);
   }
      if (carouselRef) {

      orangeX = `${parseInt(`${libavutilt}`) - orangeX.length}`;
   for (let x = 0; x < 2; x++) {
       let render_ = 2;
       let debugp = 4.0;
       let clubO = 4;
       let loadingk = String.fromCharCode(106,95,51,53,95,109,117,108,115,117,98,0);
      let mode8 = debugp <= 9133374.0;
      do {
         debugp += parseFloat(`${3 & render_}`);
         if (mode8) {
            break;
         }
      } while ((debugp < 5.3) && mode8);
      for (let k = 0; k < 2; k++) {
         debugp -= parseFloat(`${parseInt(`${debugp}`)}`);
      }
      if ((clubO << (Math.min(loadingk.length, 1))) < 4 && (clubO << (Math.min(Math.abs(4), 3))) < 1) {
         loadingk += `${clubO % (Math.max(2, 6))}`;
      }
      if (render_ < clubO) {
         render_ |= parseInt(`${debugp}`) ^ 2;
      }
         debugp -= parseFloat(`${1 % (Math.max(6, loadingk.length))}`);
       let rewardM: Array<any> = [401, 676];
      for (let o = 0; o < 1; o++) {
         rewardM.push(loadingk.length);
      }
      for (let e = 0; e < 2; e++) {
          let libfbl: Map<any, any> = new Map([[String.fromCharCode(115,116,101,112,112,101,100,95,118,95,57,49,0),73], [String.fromCharCode(115,95,51,52,95,118,112,100,120,0),349]]);
         clubO /= Math.max(parseInt(`${debugp}`) ^ 2, 1);
         libfbl.set(`${libfbl.size}`, 3 + libfbl.size);
      }
      let libfabricjnii = 9094888 >= rewardM.length;
      do {
         rewardM = [loadingk.length | parseInt(`${debugp}`)];
         if (libfabricjnii) {
            break;
         }
      } while (((rewardM.length & 5) > 2 || (clubO & rewardM.length) > 5) && libfabricjnii);
         rewardM.push(parseInt(`${debugp}`) | clubO);
          let fillK: Map<any, any> = new Map([[String.fromCharCode(109,97,105,108,116,111,95,101,95,54,57,0),246], [String.fromCharCode(99,104,111,115,101,110,95,54,95,53,54,0),74]]);
          let catalogk = 4.0;
          let valuesZ = String.fromCharCode(117,114,108,115,95,100,95,55,48,0);
         clubO /= Math.max(render_, 5);
         fillK = new Map([[`${fillK.size}`, 1]]);
         catalogk -= parseFloat(`${2}`);
         valuesZ += `${fillK.size % (Math.max(2, 4))}`;
       let baseQ = true;
      orangeX += `${subsv.length}`;
   }
   for (let v = 0; v < 3; v++) {
      libavutilt *= (parseFloat(`${String.fromCharCode(51,0) == runtimeschedulerZ ? zoom0.length : runtimeschedulerZ.length}`));
   }
        setIsRefreshing(false);
        carouselRef?.current?.scrollTo({ index: 0, animated: false });
      }
    }, 0);
  };

  const getUrl = () => {
       let indexk = String.fromCharCode(116,101,108,101,103,114,97,112,104,95,49,95,50,0);
    let downloadedR = String.fromCharCode(102,95,52,50,95,101,109,117,108,97,116,101,0);
    let active4 = 1.0;
    let libavformatM: Map<any, any> = new Map([[String.fromCharCode(99,111,110,99,97,116,101,110,97,116,101,100,95,114,95,52,50,0),String.fromCharCode(115,117,98,102,105,101,108,100,115,95,113,95,52,48,0)], [String.fromCharCode(114,95,51,53,95,119,97,118,101,115,121,110,116,104,0),String.fromCharCode(110,95,52,95,114,103,98,116,111,0)]]);
    let carouselR = 5.0;
    let userj = 2.0;
    let latne = 0.0;
    let eventy = false;
    let mbnativeadvancedr = String.fromCharCode(110,95,54,52,95,116,114,105,0);
    let baidut = true;
    let w_managerz = String.fromCharCode(112,114,101,99,105,115,105,111,110,95,104,95,57,55,0);
    let usernamee = 5;
    let gpays = 3;
   for (let v = 0; v < 1; v++) {
      downloadedR = `${parseInt(`${active4}`)}`;
   }
      eventy = 99.50 >= active4 || mbnativeadvancedr == String.fromCharCode(95,0);
   for (let m = 0; m < 3; m++) {
      eventy = 12.83 == active4 && !baidut;
   }
       let videoM: Map<any, any> = new Map([[String.fromCharCode(117,110,112,114,101,109,117,108,116,105,112,108,121,95,118,95,51,50,0),696], [String.fromCharCode(113,95,56,57,95,99,104,97,114,97,99,116,101,114,105,115,116,105,99,115,0),321]]);
       let trophyj = true;
       let appleF = 3.0;
      if (5.68 >= appleF) {
          let libreacte = String.fromCharCode(114,95,48,95,109,98,97,102,102,0);
          let ballB = String.fromCharCode(120,95,53,52,95,99,111,109,112,105,108,101,0);
          let proxy3: Array<any> = [794, 193, 76];
          let crownB = 0.0;
         appleF *= (parseFloat(`${String.fromCharCode(102,0) == libreacte ? videoM.size : libreacte.length}`));
         ballB += `${1 - parseInt(`${crownB}`)}`;
         proxy3.push(3);
         crownB -= parseFloat(`${parseInt(`${crownB}`) ^ proxy3.length}`);
      }
       let reducerK = 1.0;
       let libjsinspector6 = 1.0;
       let header4 = 5.0;
       let trophys = String.fromCharCode(118,105,111,108,101,110,99,101,95,117,95,51,54,0);
       let libswresampleL = String.fromCharCode(119,95,54,55,95,117,98,115,99,114,105,98,101,114,0);
      if (libswresampleL.length < trophys.length) {
          let searchbar7 = 5;
          let delegate_rjy = 4.0;
          let modall: Map<any, any> = new Map([[String.fromCharCode(106,95,56,54,95,112,97,117,115,101,0),497], [String.fromCharCode(101,120,112,101,114,105,109,101,110,116,95,48,95,50,57,0),2]]);
          let successv = String.fromCharCode(109,97,110,97,103,101,114,95,121,95,54,48,0);
          let upgradeU: Array<any> = [419, 462];
         libswresampleL += `${successv.length}`;
         searchbar7 += upgradeU.length ^ 1;
         delegate_rjy += parseFloat(`${modall.size | upgradeU.length}`);
         modall = new Map([[`${modall.size}`, modall.size & parseInt(`${delegate_rjy}`)]]);
         successv = `${upgradeU.length}`;
      }
      for (let j = 0; j < 2; j++) {
         trophyj = !trophyj;
      }
       let libavdeviceC = String.fromCharCode(116,95,57,48,95,108,105,98,120,0);
       let sheetE = String.fromCharCode(109,111,100,105,102,105,99,97,116,105,111,110,115,95,115,95,49,50,0);
          let libavcodecq: Array<any> = [427, 749];
          let videoK = 5.0;
         trophyj = String.fromCharCode(106,0) == libswresampleL;
         libavcodecq = [1];
         videoK -= parseFloat(`${libavcodecq.length}`);
         reducerK -= 2 * parseInt(`${libjsinspector6}`);
      active4 *= indexk.length * 3;
   while ((mbnativeadvancedr.length + libavformatM.size) >= 2) {
       let anythinkf = true;
      for (let p = 0; p < 3; p++) {
         anythinkf = (anythinkf ? !anythinkf : !anythinkf);
      }
      if (!anythinkf) {
         anythinkf = (anythinkf ? !anythinkf : !anythinkf);
      }
         anythinkf = !anythinkf;
      mbnativeadvancedr += `${((anythinkf ? 4 : 2) * 3)}`;
      break;
   }
      userj -= 3 ^ indexk.length;
   for (let o = 0; o < 3; o++) {
      active4 /= Math.max((String.fromCharCode(88,0) == indexk ? parseInt(`${latne}`) : indexk.length), 4);
   }
      libavformatM = new Map([[indexk, (2 << (Math.min(2, Math.abs((eventy ? 3 : 1)))))]]);
      eventy = carouselR < 56.66;
   for (let k = 0; k < 1; k++) {
      mbnativeadvancedr += `${parseInt(`${active4}`)}`;
   }
   if (downloadedR.endsWith(`${carouselR}`)) {
      carouselR -= parseFloat(`${3 << (Math.min(4, Math.abs(libavformatM.size)))}`);
   }
   if (active4 < libavformatM.size) {
      libavformatM = new Map([[`${libavformatM.size}`, 3 + parseInt(`${active4}`)]]);
   }
      active4 += 2 % (Math.max(parseInt(`${active4}`), 1));
   if (2.10 > userj) {
      userj += (String.fromCharCode(65,0) == downloadedR ? parseInt(`${userj}`) : downloadedR.length);
   }
   while (!w_managerz.startsWith(mbnativeadvancedr)) {
       let fastforwardk = String.fromCharCode(100,95,55,51,95,102,97,99,116,111,114,97,98,108,101,0);
       let condensedb = String.fromCharCode(108,95,50,53,95,109,105,120,105,110,0);
       let x_imageU = 3.0;
          let indicatorP = String.fromCharCode(103,95,54,49,95,112,97,110,110,105,110,103,0);
          let reactr: Array<any> = [765, 664];
         x_imageU *= (fastforwardk == String.fromCharCode(48,0) ? fastforwardk.length : condensedb.length);
         indicatorP = `${(String.fromCharCode(72,0) == indicatorP ? indicatorP.length : reactr.length)}`;
         reactr = [reactr.length];
      for (let d = 0; d < 1; d++) {
         condensedb = `${2 + parseInt(`${x_imageU}`)}`;
      }
         fastforwardk += `${parseInt(`${x_imageU}`) << (Math.min(Math.abs(2), 2))}`;
      for (let b = 0; b < 3; b++) {
         x_imageU /= Math.max(2, 1);
      }
          let vignetteZ: Array<any> = [156, 276, 799];
          let libreactnativeblobo = String.fromCharCode(113,95,57,48,95,98,111,120,0);
          let update_shX = String.fromCharCode(99,95,52,54,95,100,109,97,99,0);
         fastforwardk = `${condensedb.length}`;
         vignetteZ.push(libreactnativeblobo.length >> (Math.min(3, update_shX.length)));
         libreactnativeblobo = `${2 - libreactnativeblobo.length}`;
         update_shX += `${libreactnativeblobo.length & 2}`;
      if ((fastforwardk.length - 4) >= 3) {
         fastforwardk += `${condensedb.length}`;
      }
         condensedb += `${condensedb.length}`;
         x_imageU -= condensedb.length - parseInt(`${x_imageU}`);
      let libjsiE = String.fromCharCode(108,122,110,95,108,118,122,122,0) == condensedb;
      do {
         condensedb = `${condensedb.length - 2}`;
         if (libjsiE) {
            break;
         }
      } while (libjsiE && (condensedb.startsWith(fastforwardk)));
      w_managerz += `${parseInt(`${userj}`)}`;
      break;
   }
   while (!downloadedR.includes(`${carouselR}`)) {
      downloadedR += `${3 ^ libavformatM.size}`;
      break;
   }
   if (downloadedR.length >= 2 && !baidut) {
      baidut = carouselR == 30.62;
   }
      indexk += "1";
      userj *= (w_managerz == String.fromCharCode(55,0) ? parseInt(`${latne}`) : w_managerz.length);
   for (let q = 0; q < 1; q++) {
       let libglog_: Array<any> = [998, 409];
       let main_nY = false;
       let imagemanagerj = String.fromCharCode(99,109,97,115,107,95,105,95,56,48,0);
       let settingsv: Array<any> = [String.fromCharCode(114,95,51,49,95,108,105,102,116,0), String.fromCharCode(107,95,50,55,95,100,101,114,105,118,97,116,105,118,101,0), String.fromCharCode(112,95,57,49,95,109,105,108,108,105,115,101,99,111,110,100,115,0)];
      let mathi = main_nY ? !main_nY : main_nY;
      do {
         main_nY = imagemanagerj.includes(`${main_nY}`);
         if (mathi) {
            break;
         }
      } while ((!main_nY) && mathi);
      while (imagemanagerj.startsWith(`${settingsv.length}`)) {
          let vertical3: Map<any, any> = new Map([[String.fromCharCode(112,114,111,116,101,99,116,101,100,95,120,95,49,54,0),663], [String.fromCharCode(111,105,100,97,110,121,95,109,95,56,56,0),760]]);
          let championr = String.fromCharCode(99,95,55,54,95,120,111,102,102,115,101,116,0);
          let libmapbufferjniR = String.fromCharCode(97,95,49,48,95,118,98,114,117,115,104,0);
         settingsv = [settingsv.length >> (Math.min(Math.abs(1), 2))];
         vertical3 = new Map([[`${vertical3.size}`, championr.length - 2]]);
         championr = `${(String.fromCharCode(103,0) == libmapbufferjniR ? libmapbufferjniR.length : championr.length)}`;
         break;
      }
      while ((2 >> (Math.min(1, imagemanagerj.length))) == 5 || 2 == (imagemanagerj.length >> (Math.min(4, libglog_.length)))) {
         imagemanagerj = `${1 * settingsv.length}`;
         break;
      }
          let langE = 5.0;
         main_nY = settingsv.length == 14 || String.fromCharCode(116,0) == imagemanagerj;
         langE -= parseInt(`${langE}`);
      let collectionk = main_nY ? !main_nY : main_nY;
      do {
          let tickedg = String.fromCharCode(103,117,97,114,97,110,116,101,101,95,101,95,54,54,0);
         main_nY = ((settingsv.length * (!main_nY ? settingsv.length : 48)) <= 48);
         tickedg += `${(String.fromCharCode(107,0) == tickedg ? tickedg.length : tickedg.length)}`;
         if (collectionk) {
            break;
         }
      } while (collectionk && (3 > (5 - libglog_.length)));
      while (1 == (settingsv.length - 5)) {
         settingsv = [(2 << (Math.min(5, Math.abs((main_nY ? 1 : 3)))))];
         break;
      }
      while (2 == imagemanagerj.length) {
         imagemanagerj = "2";
         break;
      }
       let libreactperfloggerjnil = String.fromCharCode(110,111,115,105,109,100,95,103,95,49,48,0);
       let gesturesb = String.fromCharCode(110,95,53,51,95,100,105,115,97,98,108,105,110,103,0);
         libglog_.push((gesturesb == String.fromCharCode(90,0) ? gesturesb.length : (main_nY ? 3 : 1)));
          let layoutQ = String.fromCharCode(99,95,53,48,95,119,97,116,101,114,109,97,114,107,115,0);
          let index8: Map<any, any> = new Map([[String.fromCharCode(111,95,56,54,95,105,109,112,111,114,116,97,98,108,101,100,0),118], [String.fromCharCode(111,95,49,49,95,116,105,103,103,108,101,0),419]]);
          let greyd = String.fromCharCode(107,95,57,57,95,112,105,101,0);
         libreactperfloggerjnil = `${gesturesb.length << (Math.min(2, settingsv.length))}`;
         layoutQ += `${(String.fromCharCode(69,0) == layoutQ ? index8.size : layoutQ.length)}`;
         index8 = new Map([[`${index8.size}`, (String.fromCharCode(100,0) == greyd ? index8.size : greyd.length)]]);
          let scrollviewe = String.fromCharCode(110,95,49,52,95,110,101,119,108,105,110,101,0);
         main_nY = !main_nY;
         scrollviewe += `${scrollviewe.length & 2}`;
      if ((libglog_.length % 5) <= 2 && 5 <= (libglog_.length % (Math.max(libreactperfloggerjnil.length, 5)))) {
          let roundZ = String.fromCharCode(113,95,57,52,95,98,97,115,101,108,105,110,101,0);
          let sharedK = false;
          let flyerA = String.fromCharCode(98,105,116,118,101,99,116,111,114,95,99,95,49,48,48,0);
          let belld = String.fromCharCode(114,95,50,48,95,102,114,97,109,101,115,105,122,101,0);
          let scheduleR: Map<any, any> = new Map([[String.fromCharCode(108,95,51,51,95,117,115,101,114,99,116,120,0),663], [String.fromCharCode(99,111,109,112,108,105,99,97,116,105,111,110,95,109,95,52,57,0),995]]);
         libreactperfloggerjnil += `${scheduleR.size % (Math.max(8, libglog_.length))}`;
         roundZ = `${(3 ^ (sharedK ? 5 : 1))}`;
         sharedK = 53 < roundZ.length;
         flyerA += `${flyerA.length}`;
         belld += "3";
         scheduleR.set(flyerA, flyerA.length);
      }
      latne += usernamee;
   }
   while (w_managerz.length >= 2 || eventy) {
      eventy = !mbnativeadvancedr.startsWith(`${baidut}`);
      break;
   }

    return `${Url.matches11}?&is_live=true`;
  };

  const fetchMatchData = useCallback(async () => {
       let contextd: Map<any, any> = new Map([[String.fromCharCode(99,111,100,105,110,103,95,50,95,56,52,0),String.fromCharCode(111,112,112,111,115,105,116,101,95,118,95,57,51,0)], [String.fromCharCode(102,116,101,108,108,95,104,95,54,48,0),String.fromCharCode(115,95,54,54,95,110,97,118,105,103,97,116,105,111,110,98,97,114,0)]]);
    let volumex = String.fromCharCode(121,95,51,95,100,101,102,101,114,114,101,100,0);
    let spece: Map<any, any> = new Map([[String.fromCharCode(97,108,108,121,117,118,95,104,95,50,0),384], [String.fromCharCode(108,95,50,55,95,97,112,112,114,101,99,97,116,105,111,110,0),978], [String.fromCharCode(112,114,101,109,117,108,116,105,112,108,121,95,101,95,51,54,0),63]]);
    let libavfilterh = 2.0;
    let footballn = 1.0;
    let verticall = true;
    let dialogW = String.fromCharCode(111,95,51,48,95,105,115,108,111,119,0);
    let mbridgeK = String.fromCharCode(116,114,117,101,109,111,116,105,111,110,95,108,95,51,55,0);
    let dragq = true;
    let animationsW = true;
   if (3 < mbridgeK.length) {
      mbridgeK += `${dialogW.length ^ 2}`;
   }
   for (let e = 0; e < 3; e++) {
      footballn *= ((verticall ? 5 : 3) % (Math.max(parseInt(`${libavfilterh}`), 9)));
   }
   if (!verticall || animationsW) {
      animationsW = dialogW.length > 66;
   }
      verticall = !dragq;
      spece.set(`${footballn}`, 3 ^ parseInt(`${footballn}`));
   for (let k = 0; k < 3; k++) {
      verticall = volumex.length <= spece.size;
   }

    const data = (await yys_Matches.call(getUrl(), {}, "GET")).data;

      verticall = (animationsW ? !verticall : !animationsW);
      verticall = !animationsW;
      mbridgeK = `${parseInt(`${libavfilterh}`) & parseInt(`${footballn}`)}`;
      volumex += `${1 / (Math.max(2, spece.size))}`;
       let green5 = 4;
       let textinputw = String.fromCharCode(109,95,56,56,95,99,105,114,99,108,101,100,0);
         textinputw += `${textinputw.length >> (Math.min(Math.abs(2), 2))}`;
      if (3 > textinputw.length) {
         textinputw = "2";
      }
          let libmapbufferjnin = true;
          let episodesl = 2.0;
         green5 |= 1 * green5;
         libmapbufferjnin = !libmapbufferjnin;
         episodesl -= parseFloat(`${parseInt(`${episodesl}`) ^ 2}`);
       let sigmobO = 5.0;
       let bing4 = 1.0;
         textinputw = `${(String.fromCharCode(86,0) == textinputw ? textinputw.length : green5)}`;
      for (let r = 0; r < 1; r++) {
         green5 *= 3 | green5;
      }
      verticall = mbridgeK.length >= 81 && !animationsW;
   if (dragq) {
      dragq = 50 >= volumex.length;
   }
    if (data !== undefined) {

   if (spece.size < 3 && (3 | spece.size) < 5) {
      animationsW = volumex.length == 24;
   }
   if (!animationsW) {
       let largeK = String.fromCharCode(99,105,112,104,101,114,98,121,110,105,100,95,105,95,54,51,0);
          let championH: Map<any, any> = new Map([[String.fromCharCode(116,97,114,103,101,116,101,100,95,50,95,57,55,0),391], [String.fromCharCode(97,117,100,105,111,95,116,95,49,48,0),255], [String.fromCharCode(117,117,105,100,112,114,111,102,95,103,95,56,52,0),972]]);
          let tailz = String.fromCharCode(99,102,116,98,115,117,98,95,99,95,56,50,0);
          let forwardK: Map<any, any> = new Map([[String.fromCharCode(114,101,118,111,99,97,116,105,111,110,95,49,95,51,51,0),true ], [String.fromCharCode(115,99,104,101,109,97,95,53,95,52,57,0),false ], [String.fromCharCode(99,106,112,101,103,95,118,95,51,53,0),true ]]);
         largeK = "2";
         championH = new Map([[`${forwardK.size}`, forwardK.size]]);
         tailz += `${forwardK.size}`;
      if (largeK == String.fromCharCode(56,0)) {
         largeK = `${(largeK == String.fromCharCode(84,0) ? largeK.length : largeK.length)}`;
      }
         largeK = `${largeK.length}`;
      animationsW = (dialogW.length & contextd.size) >= 58;
   }
      spece.set(`${footballn}`, (parseInt(`${footballn}`) / (Math.max(5, (verticall ? 5 : 3)))));
       let styleR = 5;
       let umengB = false;
       let gesturesI = String.fromCharCode(107,95,51,48,95,117,112,108,111,97,100,105,110,103,0);
      if (gesturesI.length < 5) {
         gesturesI = `${styleR}`;
      }
         styleR <<= Math.min(Math.abs((String.fromCharCode(121,0) == gesturesI ? gesturesI.length : styleR)), 1);
         umengB = (gesturesI.length - styleR) > 22;
      if (!umengB) {
         umengB = gesturesI.endsWith(`${umengB}`);
      }
      let yellowZ = umengB ? !umengB : umengB;
      do {
         umengB = ((gesturesI.length / (Math.max(3, (!umengB ? 28 : gesturesI.length)))) == 28);
         if (yellowZ) {
            break;
         }
      } while (yellowZ && (umengB && 1 < gesturesI.length));
      if (!umengB) {
          let valuesK: Map<any, any> = new Map([[String.fromCharCode(114,101,97,100,111,110,108,121,95,115,95,55,56,0),633], [String.fromCharCode(118,97,108,105,100,95,102,95,56,56,0),488], [String.fromCharCode(105,99,111,110,105,102,105,101,100,95,120,95,49,57,0),688]]);
          let country1 = 3;
          let libfbE = 4.0;
         styleR %= Math.max(country1, 2);
         valuesK.set(`${libfbE}`, valuesK.size);
         country1 %= Math.max(4, valuesK.size);
         libfbE -= parseFloat(`${3}`);
      }
      let homeb = umengB ? !umengB : umengB;
      do {
         umengB = gesturesI.startsWith(`${umengB}`);
         if (homeb) {
            break;
         }
      } while ((umengB) && homeb);
      while (!umengB) {
          let libfbjniM = String.fromCharCode(100,101,108,105,109,95,117,95,55,55,0);
          let ewardedb = String.fromCharCode(102,97,99,105,108,105,116,97,116,101,95,52,95,55,52,0);
          let shirtL = true;
         gesturesI = `${2 ^ libfbjniM.length}`;
         libfbjniM = `${ewardedb.length * 1}`;
         ewardedb += `${ewardedb.length - 3}`;
         break;
      }
         umengB = gesturesI.includes(`${umengB}`);
      verticall = 18.58 <= libavfilterh;
      volumex = `${3 ^ parseInt(`${footballn}`)}`;
      footballn /= Math.max(((dragq ? 1 : 3)), 5);
      const newArray: yys_List[] = Object.values(data)
        .flat()
        .slice(0, 20) as yys_List[];

   for (let i = 0; i < 3; i++) {
      contextd = new Map([[`${contextd.size}`, (volumex == String.fromCharCode(57,0) ? volumex.length : contextd.size)]]);
   }
      contextd = new Map([[`${contextd.size}`, (2 * (dragq ? 4 : 1))]]);
      dragq = !animationsW;
   if (2.59 == (footballn * libavfilterh) && (footballn * libavfilterh) == 2.59) {
      libavfilterh *= (parseFloat(`${1 | (dragq ? 5 : 4)}`));
   }
   for (let a = 0; a < 2; a++) {
       let alertX = 2.0;
      for (let y = 0; y < 3; y++) {
         alertX *= parseInt(`${alertX}`);
      }
         alertX /= Math.max(1, 3 - parseInt(`${alertX}`));
      if (1.10 <= (alertX * 1.90) || 1.15 <= (alertX * 1.90)) {
         alertX += parseInt(`${alertX}`);
      }
      contextd.set(mbridgeK, ((dragq ? 3 : 3)));
   }
   while (!verticall) {
       let utils3 = String.fromCharCode(105,109,109,101,100,105,97,116,101,95,117,95,57,50,0);
       let final_iD = String.fromCharCode(117,110,114,101,99,111,103,110,105,122,101,100,95,52,95,53,56,0);
       let const_ajk: Array<any> = [800, 143, 234];
       let playlist5 = false;
         const_ajk.push(1 >> (Math.min(5, utils3.length)));
      if (playlist5) {
         const_ajk.push((String.fromCharCode(112,0) == utils3 ? utils3.length : final_iD.length));
      }
          let scoreU = 2;
          let score6 = 1;
          let change2: Map<any, any> = new Map([[String.fromCharCode(108,101,97,115,116,95,113,95,52,0),false ], [String.fromCharCode(106,95,56,56,95,99,121,99,108,105,99,0),true ], [String.fromCharCode(122,95,53,51,95,110,97,109,101,115,0),false ]]);
         utils3 = `${final_iD.length}`;
         scoreU <<= Math.min(5, Math.abs(score6));
         score6 -= change2.size;
         change2 = new Map([[`${scoreU}`, scoreU & score6]]);
       let signinupC = true;
       let tooltips7 = 1.0;
       let corner6 = 4.0;
         tooltips7 -= ((playlist5 ? 2 : 2));
         playlist5 = final_iD.length > corner6;
          let l_countp = 3.0;
          let tooltipsY: Map<any, any> = new Map([[String.fromCharCode(114,95,51,48,95,107,98,105,116,0),157], [String.fromCharCode(97,95,54,48,95,114,97,116,101,115,0),662]]);
         final_iD = `${const_ajk.length}`;
         l_countp *= parseInt(`${l_countp}`) * tooltipsY.size;
         tooltipsY = new Map([[`${tooltipsY.size}`, 1 << (Math.min(1, Math.abs(parseInt(`${l_countp}`))))]]);
      while (5.5 >= (tooltips7 / (Math.max(3, final_iD.length)))) {
         tooltips7 += ((signinupC ? 3 : 1) + 3);
         break;
      }
      while (!playlist5) {
         playlist5 = corner6 > 72.22;
         break;
      }
          let gcopy_crP = String.fromCharCode(99,97,115,116,95,51,95,50,55,0);
         tooltips7 *= parseInt(`${tooltips7}`) / 3;
         gcopy_crP += `${gcopy_crP.length << (Math.min(Math.abs(3), 2))}`;
      for (let o = 0; o < 2; o++) {
         signinupC = !playlist5 && corner6 <= 5.35;
      }
      dialogW = `${const_ajk.length + parseInt(`${footballn}`)}`;
      break;
   }

      setSportList(newArray);
    }
  }, []);

  const fetchPlaylist = (page: number) =>
    yys_MaterialModal.getTopic(page).then((results: yys_Anythink) => {
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
       let forwardC = 2;
    let nterstitialr: Array<any> = [851, 405];
    let transfer9 = 2.0;
    let verticalc = String.fromCharCode(109,101,109,111,114,121,115,116,114,101,97,109,95,52,95,49,49,0);
    let gdtadvZ = 5.0;
    let textinputO: Array<any> = [492, 880];
    let pingO = String.fromCharCode(104,95,51,52,95,100,105,114,115,0);
    let redirectS: Array<any> = [515, 471, 603];
   if ((verticalc.length & 5) > 1 || (verticalc.length + 5) > 5) {
      verticalc += `${parseInt(`${gdtadvZ}`) | parseInt(`${transfer9}`)}`;
   }
   let sportsV = 6867732 >= nterstitialr.length;
   do {
      nterstitialr = [(verticalc == String.fromCharCode(97,0) ? verticalc.length : parseInt(`${transfer9}`))];
      if (sportsV) {
         break;
      }
   } while ((2 <= (1 << (Math.min(4, verticalc.length)))) && sportsV);
   while (2 > (4 << (Math.min(5, verticalc.length))) && (parseFloat(`${verticalc.length}`) / (Math.max(6, gdtadvZ))) > 1.89) {
       let anytimeb = String.fromCharCode(101,116,104,111,100,95,112,95,50,57,0);
       let launchO: Map<any, any> = new Map([[String.fromCharCode(97,99,101,108,112,95,104,95,49,50,0),String.fromCharCode(104,119,100,111,119,110,108,111,97,100,95,105,95,56,0)], [String.fromCharCode(115,95,50,49,95,97,99,99,111,114,100,105,110,103,0),String.fromCharCode(119,97,110,116,95,116,95,53,50,0)], [String.fromCharCode(100,117,109,112,101,114,95,103,95,50,57,0),String.fromCharCode(104,115,116,114,105,110,103,95,119,95,54,57,0)]]);
       let giftk = String.fromCharCode(116,95,56,56,95,98,105,108,105,110,101,97,114,0);
          let otherO = String.fromCharCode(115,117,112,111,114,116,101,100,95,97,95,49,48,48,0);
          let temperatureC: Array<any> = [140, 92, 952];
         launchO.set(otherO, temperatureC.length);
       let reactnativejsJ = String.fromCharCode(120,95,56,95,103,114,97,110,112,111,115,0);
      if (5 >= (3 * launchO.size) && 3 >= (giftk.length * 3)) {
         launchO.set(giftk, (giftk == String.fromCharCode(112,0) ? giftk.length : anytimeb.length));
      }
         launchO.set(`${anytimeb}`, launchO.size % (Math.max(anytimeb.length, 10)));
         reactnativejsJ = `${giftk.length}`;
         launchO = new Map([[giftk, anytimeb.length]]);
         launchO = new Map([[anytimeb, 3 - anytimeb.length]]);
          let megaphoneG = String.fromCharCode(110,95,52,56,95,100,101,99,107,108,105,110,107,0);
          let aboutu = 5.0;
          let robotod = false;
         giftk = `${anytimeb.length ^ 1}`;
         megaphoneG = `${(String.fromCharCode(109,0) == megaphoneG ? megaphoneG.length : parseInt(`${aboutu}`))}`;
         aboutu *= (String.fromCharCode(117,0) == megaphoneG ? megaphoneG.length : parseInt(`${aboutu}`));
         robotod = (parseInt(`${aboutu}`) / (Math.max(megaphoneG.length, 2))) <= 7;
          let foreground4 = 4.0;
         giftk += `${(giftk == String.fromCharCode(84,0) ? anytimeb.length : giftk.length)}`;
         foreground4 -= 1 % (Math.max(parseInt(`${foreground4}`), 8));
      gdtadvZ += parseFloat(`${3}`);
      break;
   }

    const bannerRes = await yys_CurrentLang.getBannerAd(100);

      verticalc += `${2 ^ verticalc.length}`;
      textinputO.push(forwardC);
      pingO = `${parseInt(`${transfer9}`) ^ 3}`;
    const banner = bannerRes.ads;

      pingO += `${textinputO.length}`;
       let builds = String.fromCharCode(104,101,108,112,101,114,95,53,95,57,54,0);
       let mbbanners = String.fromCharCode(102,114,97,109,101,115,121,110,99,95,121,95,50,49,0);
      if (!builds.includes(`${mbbanners.length}`)) {
          let fileg: Array<any> = [String.fromCharCode(100,111,119,110,108,101,102,116,95,103,95,53,57,0), String.fromCharCode(110,111,110,115,101,99,117,114,101,95,116,95,55,0), String.fromCharCode(114,101,99,101,105,118,101,95,52,95,56,57,0)];
          let stringT = String.fromCharCode(100,111,116,116,101,100,95,55,95,52,54,0);
          let utilsl = String.fromCharCode(105,95,49,55,95,100,111,119,110,115,97,109,112,108,105,110,103,0);
          let gradlej = true;
         mbbanners = "3";
         fileg.push(((gradlej ? 3 : 1) | stringT.length));
         stringT = `${fileg.length - 2}`;
         utilsl += `${fileg.length / 3}`;
      }
         mbbanners += `${mbbanners.length - builds.length}`;
      for (let j = 0; j < 1; j++) {
          let libfollym = 0.0;
          let playercommonS = 1.0;
          let nativemoduleO = true;
          let bodanB = 4.0;
         mbbanners += `${((nativemoduleO ? 3 : 3) % 1)}`;
         libfollym -= parseFloat(`${parseInt(`${playercommonS}`) * parseInt(`${bodanB}`)}`);
         playercommonS -= 3 & parseInt(`${bodanB}`);
         nativemoduleO = (libfollym / (Math.max(playercommonS, 3))) <= 17.36;
      }
      let component8 = mbbanners == String.fromCharCode(100,108,101,99,0);
      do {
          let manifestS = 2;
         mbbanners = `${builds.length * 2}`;
         manifestS >>= Math.min(4, Math.abs(2));
         if (component8) {
            break;
         }
      } while ((builds.endsWith(mbbanners)) && component8);
          let emptyP = String.fromCharCode(109,95,55,56,95,100,101,99,114,121,112,116,0);
         mbbanners += `${builds.length / (Math.max(5, emptyP.length))}`;
      let action_ = 4948461 >= builds.length;
      do {
         builds = `${builds.length}`;
         if (action_) {
            break;
         }
      } while ((builds.endsWith(`${mbbanners.length}`)) && action_);
      transfer9 *= verticalc.length;
   while (pingO.length > 2) {
      pingO += `${parseInt(`${transfer9}`) ^ 1}`;
      break;
   }
    const bannerList = bannerRes.ads_list;

   if ((textinputO.length << (Math.min(Math.abs(3), 5))) <= 4 && 3.52 <= (gdtadvZ / 5.10)) {
       let downloadd = 2.0;
      for (let k = 0; k < 1; k++) {
         downloadd *= parseFloat(`${1 | parseInt(`${downloadd}`)}`);
      }
      let viewerz = downloadd <= 6516816.0;
      do {
         downloadd /= Math.max(parseFloat(`${3 << (Math.min(Math.abs(parseInt(`${downloadd}`)), 5))}`), 2);
         if (viewerz) {
            break;
         }
      } while (viewerz && (1.89 <= downloadd));
      while (1.63 == (downloadd * downloadd)) {
         downloadd *= parseFloat(`${parseInt(`${downloadd}`)}`);
         break;
      }
      gdtadvZ -= parseFloat(`${parseInt(`${downloadd}`) % 3}`);
   }
       let vietnamq = 1.0;
       let backgroundf: Map<any, any> = new Map([[String.fromCharCode(115,101,108,101,99,116,105,118,101,108,121,95,101,95,57,0),true ], [String.fromCharCode(114,95,52,53,95,112,111,108,101,0),false ]]);
       let bottomK: Map<any, any> = new Map([[String.fromCharCode(109,97,120,105,109,117,109,95,106,95,52,51,0),843], [String.fromCharCode(111,114,105,103,105,110,95,103,95,50,50,0),226]]);
      while (backgroundf.get(`${bottomK.size}`) == null) {
         backgroundf = new Map([[`${bottomK.size}`, parseInt(`${vietnamq}`) | bottomK.size]]);
         break;
      }
         vietnamq += 1 + parseInt(`${vietnamq}`);
         vietnamq /= Math.max(4, 3);
         backgroundf = new Map([[`${backgroundf.size}`, backgroundf.size]]);
      for (let j = 0; j < 2; j++) {
         bottomK.set(`${vietnamq}`, parseInt(`${vietnamq}`));
      }
         backgroundf = new Map([[`${bottomK.size}`, backgroundf.size % (Math.max(bottomK.size, 1))]]);
         vietnamq += bottomK.size >> (Math.min(Math.abs(backgroundf.size), 4));
          let libfollyF: Map<any, any> = new Map([[String.fromCharCode(104,97,110,100,108,101,115,95,101,95,54,57,0),681], [String.fromCharCode(110,95,54,57,95,116,111,98,105,116,0),577]]);
         backgroundf = new Map([[`${libfollyF.size}`, libfollyF.size]]);
          let utilsX: Array<any> = [String.fromCharCode(117,110,99,97,99,104,101,100,95,101,95,52,57,0), String.fromCharCode(103,97,109,97,95,117,95,49,50,0), String.fromCharCode(114,101,102,105,110,101,100,95,53,95,51,51,0)];
         bottomK = new Map([[`${utilsX.length}`, parseInt(`${vietnamq}`)]]);
      nterstitialr = [1];
   if (!verticalc.endsWith(`${transfer9}`)) {
      verticalc = `${pingO.length >> (Math.min(Math.abs(1), 2))}`;
   }

    if (banner) {

   while (textinputO.length >= 5) {
      gdtadvZ += parseFloat(`${nterstitialr.length % (Math.max(2, forwardC))}`);
      break;
   }
      forwardC ^= 2 * verticalc.length;
       let injuryH: Array<any> = [String.fromCharCode(121,95,53,48,95,114,101,99,111,110,102,105,103,117,114,97,116,105,111,110,0), String.fromCharCode(119,101,98,109,100,101,99,95,119,95,53,51,0)];
       let resendx = true;
         resendx = ((injuryH.length & (!resendx ? 56 : injuryH.length)) >= 56);
       let dplusc = String.fromCharCode(112,95,57,49,95,102,108,105,112,0);
          let gradlewD = 5.0;
          let reactnativejsH = String.fromCharCode(97,118,97,116,97,114,95,104,95,55,49,0);
         dplusc = `${(parseInt(`${gradlewD}`) | (resendx ? 2 : 4))}`;
         gradlewD /= Math.max(3, 2);
         reactnativejsH += `${reactnativejsH.length % (Math.max(reactnativejsH.length, 2))}`;
      let unewsN = resendx ? !resendx : resendx;
      do {
         resendx = dplusc.length >= 92;
         if (unewsN) {
            break;
         }
      } while (unewsN && (!resendx));
          let core4 = String.fromCharCode(118,95,54,54,95,112,114,111,98,97,98,108,101,0);
          let traminis = String.fromCharCode(121,95,51,51,95,117,110,105,0);
          let executorH = String.fromCharCode(116,108,111,103,95,98,95,53,56,0);
         resendx = traminis.length < 48;
         core4 += `${executorH.length}`;
         traminis += `${(String.fromCharCode(65,0) == core4 ? core4.length : executorH.length)}`;
      while (!resendx) {
         resendx = (23 <= (dplusc.length ^ (resendx ? dplusc.length : 23)));
         break;
      }
      transfer9 /= Math.max(parseInt(`${transfer9}`) - nterstitialr.length, 3);
      setBannerAd(banner);

      textinputO.push(parseInt(`${gdtadvZ}`));
      forwardC <<= Math.min(Math.abs(nterstitialr.length & 1), 3);
       let themeF: Array<any> = [310, 721, 851];
       let constants1 = 3.0;
       let favicono: Array<any> = [0, 372, 558];
      if ((1.61 + constants1) >= 3.100 && (themeF.length | 3) >= 2) {
         themeF = [parseInt(`${constants1}`) / (Math.max(7, favicono.length))];
      }
         themeF = [1];
      if (5.11 < (constants1 * 3.21) || (3.21 * constants1) < 4.62) {
         themeF = [1];
      }
         constants1 *= parseFloat(`${themeF.length % (Math.max(2, parseInt(`${constants1}`)))}`);
      let storeR = 6047948 <= themeF.length;
      do {
          let philippinesK = 5;
         themeF.push(favicono.length);
         philippinesK += 2 & philippinesK;
         if (storeR) {
            break;
         }
      } while (((2 / (Math.max(8, themeF.length))) < 5) && storeR);
      let leftL = 8347465.0 >= constants1;
      do {
          let splashD = 4.0;
          let subsS: Array<any> = [769, 674, 916];
          let m_titleg: Map<any, any> = new Map([[String.fromCharCode(114,116,97,100,100,114,115,95,116,95,53,57,0),String.fromCharCode(121,95,53,52,95,112,114,101,118,101,110,116,115,0)], [String.fromCharCode(97,98,115,95,117,95,53,50,0),String.fromCharCode(116,114,105,101,115,95,108,95,49,49,0)]]);
          let privilegej = 4.0;
         constants1 *= parseFloat(`${subsS.length}`);
         splashD *= parseFloat(`${m_titleg.size / (Math.max(8, parseInt(`${splashD}`)))}`);
         subsS = [parseInt(`${privilegej}`)];
         m_titleg = new Map([[`${privilegej}`, parseInt(`${privilegej}`) >> (Math.min(3, Math.abs(1)))]]);
         if (leftL) {
            break;
         }
      } while (leftL && (4 >= (themeF.length & 3)));
      let detail1 = favicono.length <= 6655703;
      do {
         favicono.push(favicono.length - 1);
         if (detail1) {
            break;
         }
      } while (detail1 && (1 > favicono.length));
      let activeT = 7799736.0 <= constants1;
      do {
          let roundc: Array<any> = [String.fromCharCode(97,116,111,109,95,122,95,57,55,0), String.fromCharCode(107,95,53,57,95,115,104,97,0)];
          let filledT = String.fromCharCode(116,95,57,48,95,97,108,101,114,116,115,0);
          let productE: Array<any> = [String.fromCharCode(106,95,57,95,114,101,102,101,114,114,101,114,0), String.fromCharCode(117,110,115,105,103,110,101,100,95,122,95,54,0)];
         constants1 *= parseFloat(`${1 - themeF.length}`);
         roundc = [(String.fromCharCode(102,0) == filledT ? filledT.length : roundc.length)];
         productE = [roundc.length | 1];
         if (activeT) {
            break;
         }
      } while (activeT && (4 <= (favicono.length & 2)));
      let mountingP = favicono.length >= 9769754;
      do {
          let goal6 = String.fromCharCode(118,95,55,52,95,105,99,111,110,105,102,105,101,100,0);
          let libreanimatedv = String.fromCharCode(102,108,97,99,100,115,112,95,120,95,48,0);
          let penaltyl = String.fromCharCode(108,97,98,101,108,101,100,95,98,95,50,54,0);
          let become4 = 2.0;
         favicono.push(1);
         goal6 += `${goal6.length}`;
         libreanimatedv = `${goal6.length << (Math.min(libreanimatedv.length, 3))}`;
         penaltyl += `${penaltyl.length}`;
         become4 += 1;
         if (mountingP) {
            break;
         }
      } while (((themeF.length - 2) > 5 || (themeF.length - 2) > 3) && mountingP);
      transfer9 *= themeF.length << (Math.min(Math.abs(2), 3));
      setBannerAdList(bannerList);
    } else {

      textinputO.push((String.fromCharCode(88,0) == pingO ? verticalc.length : pingO.length));
      nterstitialr.push((String.fromCharCode(52,0) == verticalc ? textinputO.length : verticalc.length));
      nterstitialr.push(parseInt(`${transfer9}`));
      setBannerAd(undefined);

      pingO += "3";
   let analyticsJ = verticalc.length <= 8916914;
   do {
      verticalc = `${3 / (Math.max(2, parseInt(`${gdtadvZ}`)))}`;
      if (analyticsJ) {
         break;
      }
   } while ((3 == (3 + verticalc.length) || (verticalc.length & 3) == 4) && analyticsJ);
   if ((transfer9 / (Math.max(nterstitialr.length, 5))) >= 5.25 && (nterstitialr.length ^ 5) >= 4) {
      transfer9 += 1 << (Math.min(Math.abs(parseInt(`${gdtadvZ}`)), 3));
   }
      setBannerAdList([]);
    }
  };

  useEffect(() => {
    onLoad();
  }, []);

  const shouldShowAds = async () => {
       let viewsr = String.fromCharCode(116,109,105,120,95,100,95,57,54,0);
    let schedulerT = String.fromCharCode(107,101,121,99,104,97,105,110,95,49,95,50,50,0);
    let trophyP = String.fromCharCode(103,95,52,50,95,98,117,102,102,101,114,0);
    let links: Map<any, any> = new Map([[String.fromCharCode(102,95,56,53,95,100,101,109,117,120,0),517], [String.fromCharCode(107,95,56,54,95,103,101,116,116,105,110,103,0),905], [String.fromCharCode(119,95,49,48,95,119,101,98,118,116,116,0),344]]);
    let googlet: Array<any> = [String.fromCharCode(109,95,54,51,95,98,108,111,99,107,103,114,111,117,112,0), String.fromCharCode(101,95,49,48,48,95,115,103,105,114,108,101,0)];
    let graphd = 3.0;
    let unselectedJ: Map<any, any> = new Map([[String.fromCharCode(97,118,100,99,116,95,110,95,54,53,0),920], [String.fromCharCode(101,120,116,114,97,99,102,103,95,97,95,55,50,0),853]]);
    let libavformatH = false;
   while (1 < (links.size * trophyP.length)) {
       let selectedc: Array<any> = [985, 427, 543];
       let w_playerc = String.fromCharCode(99,95,49,56,95,115,104,111,114,116,99,117,116,0);
       let filled3 = String.fromCharCode(118,108,105,110,101,95,117,95,55,55,0);
       let executorg = false;
          let directO = String.fromCharCode(103,114,111,117,110,100,95,114,95,50,0);
          let listr = String.fromCharCode(97,112,112,114,111,120,105,109,97,116,105,111,110,95,110,95,55,48,0);
         selectedc = [2];
         directO = "3";
         listr += `${(String.fromCharCode(111,0) == listr ? listr.length : directO.length)}`;
      while (!filled3.includes(`${executorg}`)) {
         filled3 += `${1 ^ selectedc.length}`;
         break;
      }
       let projectM = String.fromCharCode(108,105,98,114,97,114,105,101,115,95,102,95,57,51,0);
      while (!executorg) {
          let collectionW: Array<any> = [845, 654];
         w_playerc += `${collectionW.length * projectM.length}`;
         break;
      }
       let shrinky = 0.0;
         selectedc = [selectedc.length];
      if (!filled3.includes(`${executorg}`)) {
          let shootH = 1.0;
          let librrcV = 4;
         filled3 = `${filled3.length - 1}`;
         shootH /= Math.max(2, parseFloat(`${parseInt(`${shootH}`) >> (Math.min(2, Math.abs(librrcV)))}`));
         librrcV /= Math.max(librrcV, 1);
      }
       let spinner8 = 1;
       let sigmobV = 0;
          let orientationF = 1.0;
         shrinky += 3 * selectedc.length;
         orientationF -= parseInt(`${orientationF}`);
      if (spinner8 < w_playerc.length) {
          let infoC = 1;
          let twitterg = true;
          let floaterQ: Map<any, any> = new Map([[String.fromCharCode(101,118,105,99,116,105,111,110,95,53,95,52,50,0),657], [String.fromCharCode(110,95,51,53,95,97,98,111,114,116,0),62], [String.fromCharCode(103,95,51,50,95,109,117,108,116,105,108,105,110,101,0),268]]);
          let libreact6 = true;
          let tooltipsU = 5.0;
         w_playerc += `${(sigmobV << (Math.min(2, Math.abs((twitterg ? 5 : 5)))))}`;
         infoC /= Math.max(5, infoC >> (Math.min(Math.abs(floaterQ.size), 3)));
         twitterg = 77 < infoC && 77 < floaterQ.size;
         libreact6 = 7 >= infoC;
         tooltipsU += (parseFloat(`${parseInt(`${tooltipsU}`) >> (Math.min(5, Math.abs((libreact6 ? 2 : 4))))}`));
      }
       let moduleJ: Map<any, any> = new Map([[String.fromCharCode(99,108,97,115,115,101,115,95,50,95,52,0),175], [String.fromCharCode(109,95,55,49,95,115,117,98,112,111,105,110,116,101,114,0),301], [String.fromCharCode(109,115,101,120,95,54,95,56,50,0),504]]);
       let modelG: Map<any, any> = new Map([[String.fromCharCode(101,120,116,101,110,115,105,111,110,95,103,95,52,54,0),true ], [String.fromCharCode(108,95,49,57,95,97,99,116,105,118,97,116,111,114,0),true ]]);
      for (let p = 0; p < 1; p++) {
         modelG = new Map([[`${modelG.size}`, (projectM == String.fromCharCode(82,0) ? modelG.size : projectM.length)]]);
      }
      links.set(`${trophyP}`, (String.fromCharCode(110,0) == trophyP ? trophyP.length : unselectedJ.size));
      break;
   }
      trophyP = "1";
   while (1 < (4 << (Math.min(4, Math.abs(links.size)))) && 5 < (4 << (Math.min(1, schedulerT.length)))) {
       let downloadero = String.fromCharCode(108,95,51,48,95,105,112,114,101,100,0);
      while (downloadero.endsWith(`${downloadero.length}`)) {
         downloadero += `${1 | downloadero.length}`;
         break;
      }
      while (downloadero.length >= 3 || 3 >= downloadero.length) {
          let reactn = String.fromCharCode(115,112,97,114,107,115,95,119,95,53,55,0);
          let tempe: Map<any, any> = new Map([[String.fromCharCode(97,108,108,111,119,95,98,95,56,53,0),String.fromCharCode(114,101,116,117,114,110,115,95,109,95,53,54,0)], [String.fromCharCode(111,95,51,54,95,99,121,99,108,101,115,0),String.fromCharCode(115,111,105,115,99,111,110,110,101,99,116,105,110,103,95,55,95,54,48,0)], [String.fromCharCode(101,108,101,109,101,110,116,115,95,119,95,54,51,0),String.fromCharCode(105,95,50,50,95,100,97,112,112,0)]]);
          let linkG = 1.0;
          let merger7 = String.fromCharCode(119,109,97,118,111,105,99,101,95,112,95,57,48,0);
         downloadero += "3";
         reactn = `${2 - parseInt(`${linkG}`)}`;
         tempe.set(`${linkG}`, parseInt(`${linkG}`) & merger7.length);
         merger7 += "2";
         break;
      }
      let readb = downloadero == String.fromCharCode(119,100,57,57,57,0);
      do {
         downloadero += `${2 / (Math.max(2, downloadero.length))}`;
         if (readb) {
            break;
         }
      } while (readb && (downloadero == String.fromCharCode(77,0)));
      links.set(viewsr, 1);
      break;
   }
      unselectedJ = new Map([[schedulerT, trophyP.length - 1]]);
   let libglogS = 8016799.0 >= graphd;
   do {
      graphd += unselectedJ.size;
      if (libglogS) {
         break;
      }
   } while (libglogS && (!googlet.includes(graphd)));

    if (!isVip) {

   for (let v = 0; v < 1; v++) {
      unselectedJ = new Map([[`${googlet.length}`, parseInt(`${graphd}`)]]);
   }
   let usernameT = String.fromCharCode(115,55,120,99,122,108,52,0) == trophyP;
   do {
      trophyP = `${schedulerT.length}`;
      if (usernameT) {
         break;
      }
   } while ((trophyP.includes(`${googlet.length}`)) && usernameT);
      links = new Map([[`${unselectedJ.size}`, unselectedJ.size]]);
      schedulerT += `${schedulerT.length}`;
   for (let z = 0; z < 1; z++) {
       let mounting7 = 4;
       let project6 = String.fromCharCode(118,95,49,50,95,97,110,115,119,101,114,115,0);
       let success5 = 1.0;
      if (3.73 > (success5 * 1.86) || 5 > (2 >> (Math.min(4, Math.abs(mounting7))))) {
         success5 /= Math.max(parseFloat(`${project6.length - parseInt(`${success5}`)}`), 2);
      }
       let themeL = false;
       let buttona = false;
         themeL = (project6.length + parseInt(`${success5}`)) == 29;
         mounting7 *= ((themeL ? 5 : 4) ^ parseInt(`${success5}`));
      for (let m = 0; m < 2; m++) {
         themeL = 11.57 < success5 && mounting7 < 84;
      }
          let kuaishouy = 0;
          let confirmationv: Array<any> = [721, 32, 441];
         success5 -= (parseFloat(`${(themeL ? 2 : 1) & kuaishouy}`));
         kuaishouy *= confirmationv.length + 3;
         confirmationv = [3];
      let brightnessl = 6500581 <= mounting7;
      do {
         mounting7 >>= Math.min(Math.abs((3 | (themeL ? 3 : 1))), 1);
         if (brightnessl) {
            break;
         }
      } while ((4 == (mounting7 >> (Math.min(Math.abs(1), 1)))) && brightnessl);
      if (success5 == parseFloat(`${project6.length}`)) {
         success5 *= parseFloat(`${2 >> (Math.min(Math.abs(parseInt(`${success5}`)), 3))}`);
      }
         themeL = success5 < 79.76;
      graphd -= 2;
   }
      fetchBannerAd();
    } else {

   while (2.61 >= (5.48 / (Math.max(1, graphd))) && 5 >= (parseInt(`${graphd}`) / (Math.max(2, trophyP.length)))) {
       let v_centerz = 1.0;
       let macauK = 4.0;
      for (let v = 0; v < 1; v++) {
          let libturbomodulejsijni4 = String.fromCharCode(114,101,112,111,114,116,105,110,103,95,101,95,49,51,0);
          let guideb = 4;
          let editz: Map<any, any> = new Map([[String.fromCharCode(113,115,99,97,108,101,95,51,95,52,57,0),704], [String.fromCharCode(115,117,98,114,101,115,117,108,116,115,95,101,95,50,51,0),792], [String.fromCharCode(114,101,102,105,110,101,100,95,120,95,57,52,0),623]]);
          let brightnessy = String.fromCharCode(102,95,50,51,95,100,105,102,102,101,114,101,110,99,101,115,0);
         v_centerz *= editz.size;
         libturbomodulejsijni4 = `${guideb}`;
         guideb |= (brightnessy == String.fromCharCode(111,0) ? libturbomodulejsijni4.length : brightnessy.length);
         editz = new Map([[`${guideb}`, 2]]);
      }
          let sorty = String.fromCharCode(112,111,115,116,101,114,95,49,95,53,49,0);
         v_centerz -= parseInt(`${macauK}`);
         sorty = "2";
      if ((v_centerz + macauK) <= 3.29) {
         macauK += parseInt(`${macauK}`) >> (Math.min(3, Math.abs(2)));
      }
         v_centerz -= parseInt(`${macauK}`);
      if ((macauK * 2.100) >= 4.66) {
         macauK *= 3;
      }
      for (let l = 0; l < 1; l++) {
         v_centerz /= Math.max(parseInt(`${macauK}`), 4);
      }
      graphd /= Math.max(4, viewsr.length + 3);
      break;
   }
   if (1 >= (5 << (Math.min(1, Math.abs(unselectedJ.size))))) {
      unselectedJ.set(trophyP, googlet.length);
   }
   while (!schedulerT.includes(`${unselectedJ.size}`)) {
       let sharedn = false;
       let applicationS = 4.0;
      let leagueo = applicationS <= 9468104.0;
      do {
         applicationS += parseInt(`${applicationS}`) & 2;
         if (leagueo) {
            break;
         }
      } while ((sharedn) && leagueo);
       let corea: Map<any, any> = new Map([[String.fromCharCode(116,119,105,99,101,95,105,95,57,53,0),659], [String.fromCharCode(112,95,56,52,95,107,101,121,101,100,0),99], [String.fromCharCode(98,95,50,55,95,100,111,108,98,121,0),98]]);
       let private_r9j: Map<any, any> = new Map([[String.fromCharCode(122,111,111,109,101,100,95,113,95,55,0),674], [String.fromCharCode(122,95,57,54,95,115,121,110,99,109,97,114,107,101,114,0),296], [String.fromCharCode(114,97,116,101,99,111,110,116,114,111,108,95,106,95,52,50,0),837]]);
      while (4.80 <= (applicationS * 1.94) || (parseInt(`${applicationS}`) * private_r9j.size) <= 3) {
         applicationS *= corea.size;
         break;
      }
      if ((2.0 - applicationS) >= 2.88) {
         applicationS += corea.size >> (Math.min(4, Math.abs(parseInt(`${applicationS}`))));
      }
         sharedn = !sharedn && 10.1 == applicationS;
          let graphicsD = 2.0;
          let configureA = String.fromCharCode(98,95,53,53,95,117,99,108,111,99,107,0);
          let attributedstringq = 0;
         corea.set(`${configureA}`, 2 * corea.size);
         graphicsD *= parseFloat(`${parseInt(`${graphicsD}`) << (Math.min(2, Math.abs(2)))}`);
         configureA = "3";
         attributedstringq *= parseInt(`${graphicsD}`) >> (Math.min(2, Math.abs(2)));
      schedulerT += "2";
      break;
   }
       let bannerg: Map<any, any> = new Map([[String.fromCharCode(99,111,112,121,97,100,100,95,122,95,56,49,0),255], [String.fromCharCode(120,95,50,51,95,109,111,99,107,101,100,0),71]]);
       let collectionX = 5;
      let controly = 6426093 >= collectionX;
      do {
         collectionX += bannerg.size;
         if (controly) {
            break;
         }
      } while ((bannerg.get(`${collectionX}`) == null) && controly);
          let libreactnativeblob7: Array<any> = [459, 510, 46];
          let libzeusu = String.fromCharCode(100,97,115,104,95,119,95,49,48,0);
         bannerg = new Map([[`${bannerg.size}`, bannerg.size | libzeusu.length]]);
         libreactnativeblob7.push(libreactnativeblob7.length);
         libzeusu += `${2 & libreactnativeblob7.length}`;
         collectionX %= Math.max(bannerg.size / 3, 2);
      let videog = collectionX <= 9289359;
      do {
         collectionX *= 1;
         if (videog) {
            break;
         }
      } while (videog && (3 < (collectionX << (Math.min(Math.abs(bannerg.size), 1)))));
         bannerg.set(`${collectionX}`, collectionX);
         collectionX &= bannerg.size;
      trophyP += `${links.size + 2}`;
   while (5 < (parseInt(`${graphd}`) + 2) && 5.50 < (graphd + trophyP.length)) {
      graphd *= trophyP.length;
      break;
   }
      setBannerAd(undefined);

   let frame_1vi = 5856377 >= trophyP.length;
   do {
      trophyP = `${trophyP.length}`;
      if (frame_1vi) {
         break;
      }
   } while (((trophyP.length * parseInt(`${graphd}`)) == 2 || (trophyP.length * parseInt(`${graphd}`)) == 2) && frame_1vi);
   let dragT = viewsr.length <= 5732734;
   do {
      viewsr = `${schedulerT.length << (Math.min(Math.abs(3), 1))}`;
      if (dragT) {
         break;
      }
   } while (((unselectedJ.size + 2) < 2) && dragT);
       let handlerF = String.fromCharCode(103,101,110,101,114,97,116,101,95,97,95,57,0);
      while (handlerF.length >= handlerF.length) {
          let mergery = String.fromCharCode(118,95,55,49,95,111,117,116,108,105,101,114,0);
          let resendt = String.fromCharCode(101,99,109,117,108,116,95,106,95,55,50,0);
          let langu: Map<any, any> = new Map([[String.fromCharCode(105,118,102,101,110,99,95,120,95,55,49,0),586], [String.fromCharCode(99,95,50,55,95,114,109,115,105,112,114,0),884]]);
         handlerF += "1";
         mergery += `${1 * resendt.length}`;
         resendt += `${1 * mergery.length}`;
         langu.set(resendt, mergery.length);
         break;
      }
         handlerF = `${(String.fromCharCode(54,0) == handlerF ? handlerF.length : handlerF.length)}`;
      while (handlerF.length <= 4) {
         handlerF = `${handlerF.length}`;
         break;
      }
      viewsr = "3";
   for (let h = 0; h < 1; h++) {
      graphd /= Math.max(5, 1 + unselectedJ.size);
   }
   let liveE = 5638479 <= links.size;
   do {
      links.set(trophyP, googlet.length);
      if (liveE) {
         break;
      }
   } while (liveE && (5 == viewsr.length));
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
      const currentCarousel =
        data.carousel[carouselRef.current.getCurrentIndex()];

      if (isTabFocus && carouselRef.current && currentCarousel?.is_ads) {
        yys_event_common.homeTabCarouselViewAnalytics({
          tab_id: navId?.toString() ?? "0",
          tab_name: tabName ?? "",
          ads_slot_id: currentCarousel.ads_slot_id,
          ads_id: currentCarousel.ads_id,
          ads_title: currentCarousel.ads_event_title,
          ads_name: currentCarousel.ads_name,
        });
      }
    }, [data, isTabFocus, carouselRef.current?.getCurrentIndex()])
  );

  const renderBanner = useCallback(
    (allBannerAds: yys_Xadsdk[]) => {
      if (allBannerAds.length < 1) {
        return <></>;
      }

      const ads = allBannerAds[Math.floor(Math.random() * allBannerAds.length)];

      return (
        <BannerContainer
          bannerAd={ads}
          onMount={({ id, name, slot_id, title }) => {
            yys_event_common.homeTabBannerViewAnalytics({
              tab_id: navId?.toString() ?? "0",
              tab_name: tabName ?? "",
              ads_id: id,
              ads_name: name,
              ads_slot_id: slot_id,
              ads_title: title,
            });
          }}
          onPress={({ id, name, slot_id, title }) => {
            yys_event_common.homeTabBannerClickAnalytics({
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
                item.ads_url.includes(RenewBackSport.pointMappingComponentregistry([-88,-76,-76,-80,-77,-6,-17,-17,-64],0xC0,false)) ||
                item.ads_url.includes(RenewBackSport.pointMappingComponentregistry([103,123,123,127,53,32,32,15],0xF,false))
                  ? item.ads_url
                  : RenewBackSport.pointMappingComponentregistry([-88,-76,-76,-80,-77,-6,-17,-17,-64],0xC0,false) + item.ads_url;
              Linking.openURL(url);

              yys_event_common.homeTabCarouselClickAnalytics({
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
    ({ item, index }: { item: yys_BrightnessCopy; index: number }) => (
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
       let bdxadsdks = 1;
    let mini9 = String.fromCharCode(104,111,115,116,102,108,97,103,115,95,97,95,56,48,0);
    let gradlewG = 0;
    let episodej = 5.0;
    let inviteV: Array<any> = [771, 111, 489];
    let libimagepipeline_ = true;
    let playlist0 = 3;
    let reducer_ = String.fromCharCode(109,95,52,95,104,97,110,100,111,102,102,0);
   if (reducer_ == String.fromCharCode(103,0) || 3 < mini9.length) {
      mini9 = `${mini9.length}`;
   }
      bdxadsdks -= (parseInt(`${episodej}`) ^ (libimagepipeline_ ? 1 : 4));
       let editu: Array<any> = [String.fromCharCode(99,115,114,105,100,95,107,95,51,48,0), String.fromCharCode(105,115,108,111,119,95,49,95,52,50,0), String.fromCharCode(97,112,97,114,97,109,115,95,121,95,55,55,0)];
       let constantsz: Array<any> = [723, 303];
      if (1 < (constantsz.length ^ 2) || 2 < (editu.length ^ constantsz.length)) {
          let update_9ll = String.fromCharCode(99,95,57,48,95,105,110,116,101,114,112,114,101,116,0);
          let attributedstringB = String.fromCharCode(120,95,54,50,95,116,114,117,110,0);
          let package_o7: Array<any> = [8, 258];
          let gdtadvg = false;
          let cricketR: Map<any, any> = new Map([[String.fromCharCode(112,111,115,116,101,114,115,95,100,95,55,56,0),String.fromCharCode(100,117,112,99,108,95,102,95,49,48,48,0)], [String.fromCharCode(116,95,55,57,95,100,101,109,97,110,100,0),String.fromCharCode(100,111,116,115,95,106,95,54,56,0)]]);
         editu = [2];
         update_9ll = `${attributedstringB.length}`;
         attributedstringB += `${update_9ll.length}`;
         package_o7.push(1);
         gdtadvg = package_o7.length <= 76;
         cricketR.set(`${gdtadvg}`, ((gdtadvg ? 3 : 2) + 3));
      }
      for (let p = 0; p < 3; p++) {
         editu = [editu.length >> (Math.min(constantsz.length, 2))];
      }
         editu = [editu.length];
          let ksadv = String.fromCharCode(120,95,54,52,95,112,114,101,118,105,101,119,101,100,0);
          let fastM = String.fromCharCode(101,110,99,108,111,115,105,110,103,95,57,95,55,50,0);
          let typingX = String.fromCharCode(116,101,109,112,111,114,97,114,121,95,113,95,53,54,0);
         constantsz.push(fastM.length >> (Math.min(ksadv.length, 3)));
         ksadv += "2";
         fastM = `${typingX.length}`;
      for (let k = 0; k < 3; k++) {
         constantsz = [editu.length ^ constantsz.length];
      }
          let sharee = String.fromCharCode(105,110,118,101,114,116,101,100,95,116,95,51,56,0);
          let clubS: Array<any> = [661, 692];
          let membership7 = String.fromCharCode(114,101,97,115,115,101,109,98,108,121,95,104,95,57,52,0);
         editu = [editu.length];
         sharee += `${sharee.length}`;
         clubS = [(String.fromCharCode(89,0) == membership7 ? membership7.length : clubS.length)];
      episodej /= Math.max(4, parseFloat(`${constantsz.length}`));
   while (mini9.includes(`${playlist0}`)) {
      mini9 += `${mini9.length}`;
      break;
   }

    if (componentRef.current != null) {

       let specB = 0;
      for (let w = 0; w < 1; w++) {
         specB |= specB & specB;
      }
         specB += specB | specB;
       let blackM = true;
      reducer_ += `${bdxadsdks | gradlewG}`;
      inviteV.push(parseInt(`${episodej}`) | mini9.length);
       let favoriteu = String.fromCharCode(112,95,57,49,95,102,111,114,109,97,116,115,0);
       let successp = 3.0;
       let popupk = String.fromCharCode(115,121,109,109,101,116,114,105,99,95,51,95,50,0);
       let minimizeG = String.fromCharCode(106,95,57,50,95,119,97,118,101,115,0);
         minimizeG += `${parseInt(`${successp}`) + 2}`;
         popupk = `${parseInt(`${successp}`)}`;
      if (3 > popupk.length) {
          let rewinda: Map<any, any> = new Map([[String.fromCharCode(117,110,102,97,105,114,95,118,95,49,57,0),433], [String.fromCharCode(97,95,50,95,97,116,114,97,99,0),104]]);
         minimizeG += `${rewinda.size << (Math.min(minimizeG.length, 5))}`;
      }
      for (let p = 0; p < 1; p++) {
         minimizeG += `${3 >> (Math.min(5, Math.abs(parseInt(`${successp}`))))}`;
      }
      let leakcheckerV = 8626880.0 >= successp;
      do {
          let flipperj = String.fromCharCode(110,112,111,105,110,116,115,95,109,95,49,53,0);
         successp /= Math.max(parseFloat(`${flipperj.length % 2}`), 4);
         if (leakcheckerV) {
            break;
         }
      } while ((5 <= favoriteu.length) && leakcheckerV);
      libimagepipeline_ = reducer_ == String.fromCharCode(57,0);
       let libglogd = 3;
       let guidei = String.fromCharCode(97,110,97,108,121,115,101,95,117,95,55,51,0);
         guidei += `${libglogd}`;
      while (3 >= (libglogd << (Math.min(guidei.length, 2))) && (3 << (Math.min(1, guidei.length))) >= 1) {
         libglogd >>= Math.min(Math.abs(libglogd | guidei.length), 3);
         break;
      }
      let ballp = 9168685 >= guidei.length;
      do {
          let libjsijniprofilerE = String.fromCharCode(119,95,57,57,95,111,108,100,0);
          let stationsk: Array<any> = [913, 896];
          let taill: Map<any, any> = new Map([[String.fromCharCode(116,104,114,101,97,100,110,97,109,101,95,108,95,49,49,0),String.fromCharCode(115,97,102,101,116,121,95,106,95,57,51,0)], [String.fromCharCode(116,95,50,50,95,109,97,107,101,109,97,99,112,107,103,0),String.fromCharCode(108,95,53,52,95,115,99,97,108,101,99,117,100,97,0)]]);
          let vignetter = String.fromCharCode(119,95,49,53,95,110,100,111,116,115,0);
          let share6 = String.fromCharCode(97,112,112,114,101,99,97,116,105,111,110,104,111,117,114,95,102,95,52,57,0);
         guidei = `${(String.fromCharCode(82,0) == libjsijniprofilerE ? libjsijniprofilerE.length : stationsk.length)}`;
         stationsk.push((vignetter == String.fromCharCode(82,0) ? share6.length : vignetter.length));
         taill = new Map([[`${taill.size}`, 3]]);
         share6 += `${share6.length}`;
         if (ballp) {
            break;
         }
      } while ((!guidei.startsWith(`${libglogd}`)) && ballp);
      for (let a = 0; a < 3; a++) {
          let sortp = 4.0;
          let cancela = String.fromCharCode(98,95,51,57,95,113,117,111,116,101,100,0);
         guidei = `${libglogd}`;
         sortp /= Math.max(1, parseFloat(`${3}`));
         cancela = `${cancela.length}`;
      }
      while ((libglogd - 5) > 1 || (5 - libglogd) > 5) {
          let viewsu = String.fromCharCode(119,95,57,55,95,112,108,97,121,105,110,103,0);
         libglogd >>= Math.min(Math.abs((guidei == String.fromCharCode(82,0) ? guidei.length : viewsu.length)), 1);
         break;
      }
      for (let o = 0; o < 3; o++) {
          let castg = 5.0;
          let banner8 = 4.0;
          let network1 = 0;
          let sellL = String.fromCharCode(122,95,49,56,95,114,101,99,111,103,110,105,122,101,0);
          let mapbuffer4 = 2.0;
         libglogd &= (String.fromCharCode(71,0) == sellL ? parseInt(`${mapbuffer4}`) : sellL.length);
         castg /= Math.max(2, parseInt(`${banner8}`) + network1);
         banner8 *= network1 % 1;
         mapbuffer4 /= Math.max(parseFloat(`${parseInt(`${castg}`)}`), 5);
      }
      bdxadsdks %= Math.max(1 & reducer_.length, 3);
      componentRef.current.measure((x, y, width, height, pageX, pageY) => {
        
        setRefPosition({ x: pageX, y: pageY, width: width, height: height });

        const screenHeight = Dimensions.get("window").height;

      reducer_ = `${playlist0}`;
      episodej += parseFloat(`${bdxadsdks | inviteV.length}`);
      reducer_ = `${bdxadsdks | 3}`;
   let forwardq = inviteV.length >= 5228889;
   do {
      inviteV.push(gradlewG);
      if (forwardq) {
         break;
      }
   } while (((inviteV.length | gradlewG) < 4) && forwardq);
        const distance = screenHeight - pageY - height;

   let libreactperfloggerjnin = inviteV.length >= 8039749;
   do {
       let navigationp = String.fromCharCode(112,97,114,97,109,101,116,114,105,99,95,112,95,50,52,0);
       let codegenJ = String.fromCharCode(116,105,99,107,115,95,121,95,53,55,0);
       let macaua = 1.0;
      let utilsG = 7854333.0 >= macaua;
      do {
          let policyn = false;
         macaua += (parseFloat(`${(policyn ? 1 : 2)}`));
         if (utilsG) {
            break;
         }
      } while (((3 | navigationp.length) >= 3) && utilsG);
      while (codegenJ.length < navigationp.length) {
          let starF = true;
          let readr: Map<any, any> = new Map([[String.fromCharCode(114,95,54,49,95,105,110,115,116,97,108,108,97,116,105,111,110,115,0),String.fromCharCode(100,95,55,55,95,116,101,120,116,0)], [String.fromCharCode(114,101,112,111,114,116,95,102,95,49,0),String.fromCharCode(115,120,110,101,116,95,116,95,49,50,0)]]);
         codegenJ += `${codegenJ.length}`;
         starF = !starF || readr.size >= 16;
         readr.set(`${starF}`, readr.size % (Math.max(2, 4)));
         break;
      }
      let bootsplash_ = String.fromCharCode(105,56,113,97,111,104,117,57,48,101,0) == codegenJ;
      do {
         codegenJ = `${navigationp.length * 1}`;
         if (bootsplash_) {
            break;
         }
      } while ((codegenJ.startsWith(`${macaua}`)) && bootsplash_);
      for (let g = 0; g < 1; g++) {
          let classesY: Array<any> = [58, 763, 20];
          let memberw: Map<any, any> = new Map([[String.fromCharCode(101,95,51,49,95,114,105,103,104,116,115,0),20], [String.fromCharCode(103,101,116,99,95,114,95,54,56,0),737]]);
         navigationp = `${parseInt(`${macaua}`) / 2}`;
         classesY.push(3);
         memberw.set(`${classesY.length}`, classesY.length * 1);
      }
      let description_b2 = macaua <= 7070434.0;
      do {
         macaua *= parseFloat(`${3 >> (Math.min(1, codegenJ.length))}`);
         if (description_b2) {
            break;
         }
      } while (((codegenJ.length * 5) <= 1 || 4.89 <= (parseFloat(`${codegenJ.length}`) + macaua)) && description_b2);
      for (let a = 0; a < 3; a++) {
         codegenJ = `${codegenJ.length}`;
      }
         codegenJ += `${(codegenJ == String.fromCharCode(107,0) ? parseInt(`${macaua}`) : codegenJ.length)}`;
       let textinputm = String.fromCharCode(108,95,57,49,95,114,101,97,108,116,101,120,116,0);
      let libtanw = String.fromCharCode(50,117,113,98,49,99,56,108,111,0) == codegenJ;
      do {
         codegenJ += `${textinputm.length << (Math.min(4, Math.abs(parseInt(`${macaua}`))))}`;
         if (libtanw) {
            break;
         }
      } while (libtanw && (textinputm == codegenJ));
      inviteV.push(codegenJ.length);
      if (libreactperfloggerjnin) {
         break;
      }
   } while (libreactperfloggerjnin && (!inviteV.includes(episodej)));
   if (1 <= (5 | bdxadsdks)) {
      libimagepipeline_ = 54.8 >= episodej;
   }
   while (!mini9.endsWith(`${episodej}`)) {
      episodej *= parseFloat(`${2}`);
      break;
   }
       let mbjscommonS = String.fromCharCode(114,101,109,111,118,97,108,115,95,103,95,57,53,0);
       let bodanc = false;
       let borderlessn = String.fromCharCode(110,101,97,114,98,121,95,114,95,55,52,0);
      for (let r = 0; r < 3; r++) {
          let full2 = 4;
          let stru = 3.0;
          let anythinkP: Array<any> = [String.fromCharCode(102,111,114,101,103,114,111,117,110,100,95,102,95,49,48,48,0), String.fromCharCode(121,117,108,101,95,106,95,54,51,0), String.fromCharCode(117,95,53,54,95,100,101,110,111,105,115,101,114,0)];
          let signinupw = false;
          let libfby = String.fromCharCode(108,97,118,117,95,122,95,51,53,0);
         mbjscommonS = `${mbjscommonS.length}`;
         full2 *= anythinkP.length;
         stru += 3 & anythinkP.length;
         signinupw = full2 > parseInt(`${stru}`);
         libfby = `${full2 << (Math.min(2, Math.abs(1)))}`;
      }
         mbjscommonS += `${(String.fromCharCode(79,0) == mbjscommonS ? mbjscommonS.length : (bodanc ? 3 : 5))}`;
         mbjscommonS += `${(mbjscommonS == String.fromCharCode(117,0) ? (bodanc ? 5 : 5) : mbjscommonS.length)}`;
         bodanc = mbjscommonS.includes(`${bodanc}`);
      while (borderlessn.endsWith(`${bodanc}`)) {
         bodanc = String.fromCharCode(77,0) == mbjscommonS;
         break;
      }
          let libreactnativejniz = String.fromCharCode(97,108,103,111,114,95,98,95,57,57,0);
          let sina9 = String.fromCharCode(103,101,116,104,111,115,116,98,121,110,97,109,101,95,103,95,56,56,0);
          let rulest: Array<any> = [949, 767];
         bodanc = 41 <= sina9.length || rulest.length <= 41;
         libreactnativejniz = `${3 | libreactnativejniz.length}`;
         sina9 = `${3 << (Math.min(4, libreactnativejniz.length))}`;
      let full2X = 8854927 >= borderlessn.length;
      do {
         borderlessn = `${(borderlessn.length * (bodanc ? 4 : 2))}`;
         if (full2X) {
            break;
         }
      } while ((!borderlessn.includes(`${bodanc}`)) && full2X);
      for (let b = 0; b < 1; b++) {
         mbjscommonS = `${(borderlessn == String.fromCharCode(97,0) ? borderlessn.length : (bodanc ? 1 : 2))}`;
      }
      if (mbjscommonS.startsWith(`${bodanc}`)) {
         bodanc = borderlessn.length <= 16;
      }
      libimagepipeline_ = borderlessn == String.fromCharCode(50,0) && episodej <= 76.75;
        setDistanceToBottom(distance);
      });
    }
  };

  
  
  
  
  
  
  
  //   />
  

  return (
    <View style={{ width: width }}>
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
                        onPress={() =>
                           {
                              dispatch(setAutoSelectSport(true));
                              setTimeout(() => {
                                 navigation.navigate("Home", { screen: "会员中心" })
                               }, 0);
                       
                            }
                        }
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
                  source={require("@static/images/cancelSigmobLibzeus.gif")}
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
