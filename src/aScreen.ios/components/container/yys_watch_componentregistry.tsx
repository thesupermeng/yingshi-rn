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
import ShowMoreVodButton from "../button/yys_native_button";
import {
  yys_BrightnessCopy,
  yys_Bing,
  yys_NotificationGray,
  yys_Encrypt,
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
import { YingPingContainer } from "../container/yys_baidu_detail";
import { yys_Context, yys_MaterialModal } from "@api";
import { yys_HejiCricket } from "@redux/reducers/yys_privacy_round";
import { yys_RelatedTooltips } from "@models/yys_project_pagination";
import { screenModel } from "@type/yys_service_setting";
import { setYuGao } from "@redux/actions/yys_runtimescheduler";

interface yys_ControlsVolume {
  id: number;
  name: string;
}
interface yys_ConfigureUimanager {
  vodCarouselRes: yys_NotificationGray;
  navOptions?: yys_ControlsVolume[] | undefined;
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
       let splashv = String.fromCharCode(102,105,110,105,115,104,101,100,95,122,95,57,51,0);
    let pathV: Map<any, any> = new Map([[String.fromCharCode(99,111,100,101,99,112,97,114,95,57,95,57,57,0),true ], [String.fromCharCode(115,95,52,51,95,118,97,114,105,97,110,99,101,115,0),true ], [String.fromCharCode(110,111,110,110,117,108,108,105,110,99,111,109,105,110,103,95,122,95,49,55,0),true ]]);
    let loadingr = false;
    let rewindc = 2.0;
    let privilegeG = 1.0;
    let grayy = 0.0;
    let layoutU = String.fromCharCode(118,95,54,95,120,97,118,115,0);
    let indicatorZ = String.fromCharCode(115,95,52,54,95,102,105,110,100,101,114,0);
    let splash8 = String.fromCharCode(111,95,49,54,0);
    let buttono: Array<any> = [312, 614];
    let borderlessI = String.fromCharCode(103,97,117,103,101,95,97,95,53,51,0);
   let expand2 = 6218408.0 >= rewindc;
   do {
      rewindc -= 3 >> (Math.min(2, indicatorZ.length));
      if (expand2) {
         break;
      }
   } while (expand2 && (3.96 == (5.47 * rewindc)));
       let footballn = true;
       let short_j6c: Array<any> = [865, 416];
       let twitterG = 5.0;
         twitterG *= (parseFloat(`${parseInt(`${twitterG}`) ^ (footballn ? 5 : 5)}`));
      let with_psb = short_j6c.length <= 7501463;
      do {
         short_j6c.push(short_j6c.length + 2);
         if (with_psb) {
            break;
         }
      } while (with_psb && ((2 << (Math.min(3, short_j6c.length))) > 3));
      let ticko = twitterG <= 5721831.0;
      do {
         twitterG -= parseFloat(`${short_j6c.length % (Math.max(1, 8))}`);
         if (ticko) {
            break;
         }
      } while (ticko && ((parseFloat(`${short_j6c.length}`) / (Math.max(8, twitterG))) == 4.27));
         footballn = twitterG < 72.71;
      if (footballn) {
          let expiredo = String.fromCharCode(105,110,116,114,97,120,98,108,111,99,107,95,104,95,54,55,0);
         footballn = short_j6c.includes(twitterG);
         expiredo = `${expiredo.length >> (Math.min(expiredo.length, 2))}`;
      }
          let pauseJ = true;
         short_j6c = [2 ^ parseInt(`${twitterG}`)];
         pauseJ = !pauseJ;
         twitterG += parseFloat(`${short_j6c.length}`);
      while ((parseFloat(`${short_j6c.length}`) * twitterG) > 2.51) {
          let submit0: Array<any> = [String.fromCharCode(116,95,49,55,95,100,114,111,112,115,0), String.fromCharCode(114,95,55,49,95,100,111,119,110,108,111,97,100,101,100,0)];
          let quest7: Map<any, any> = new Map([[String.fromCharCode(115,95,50,95,99,111,110,116,114,97,99,116,0),String.fromCharCode(114,95,52,95,115,99,104,101,100,117,108,101,100,0)], [String.fromCharCode(118,95,49,54,95,112,114,101,102,97,99,101,0),String.fromCharCode(115,95,56,57,95,108,101,101,119,97,121,0)]]);
          let reactg = String.fromCharCode(116,121,112,105,110,103,95,107,95,49,48,48,0);
          let filedd = 2.0;
          let backwarde = 4.0;
         short_j6c.push(parseInt(`${filedd}`) | 2);
         submit0 = [submit0.length % 2];
         quest7 = new Map([[`${submit0.length}`, 2]]);
         reactg = `${reactg.length << (Math.min(1, Math.abs(quest7.size)))}`;
         filedd -= parseFloat(`${1 * quest7.size}`);
         backwarde -= submit0.length - quest7.size;
         break;
      }
      if (!footballn && (twitterG + 5.36) > 2.10) {
          let switch_82X = 5;
          let stylesJ = 1.0;
          let armvai = String.fromCharCode(97,95,53,56,95,99,108,97,122,122,0);
          let sinay = 3.0;
          let sportsD = String.fromCharCode(112,114,111,99,101,115,115,101,100,95,98,95,52,52,0);
         footballn = sinay > 70.90;
         switch_82X &= (armvai == String.fromCharCode(86,0) ? switch_82X : armvai.length);
         stylesJ /= Math.max(parseFloat(`${parseInt(`${stylesJ}`) - armvai.length}`), 5);
         sinay *= parseFloat(`${1}`);
         sportsD += "1";
      }
      pathV = new Map([[layoutU, indicatorZ.length]]);
       let componentregistryp = String.fromCharCode(100,111,119,110,115,116,114,101,97,109,95,49,95,52,52,0);
       let scrollview6 = 0.0;
      while ((3 & componentregistryp.length) == 5 || 5.44 == (scrollview6 + componentregistryp.length)) {
         componentregistryp = `${parseInt(`${scrollview6}`)}`;
         break;
      }
      let with_87b = 4915257.0 >= scrollview6;
      do {
         scrollview6 -= componentregistryp.length;
         if (with_87b) {
            break;
         }
      } while (with_87b && (componentregistryp.startsWith(`${scrollview6}`)));
      for (let w = 0; w < 1; w++) {
         scrollview6 *= parseInt(`${scrollview6}`) & 1;
      }
      if ((4 >> (Math.min(3, componentregistryp.length))) <= 1) {
          let filled5 = String.fromCharCode(117,95,51,48,95,99,111,110,110,0);
          let stepG = 4;
          let gemfileX: Map<any, any> = new Map([[String.fromCharCode(100,105,109,101,110,115,105,111,110,115,95,49,95,49,48,48,0),String.fromCharCode(113,95,55,52,95,99,98,112,104,105,0)], [String.fromCharCode(104,95,54,95,109,97,114,107,101,100,0),String.fromCharCode(115,112,97,116,105,97,108,95,106,95,54,51,0)]]);
         componentregistryp = `${componentregistryp.length}`;
         filled5 += `${1 | filled5.length}`;
         stepG ^= filled5.length;
         gemfileX = new Map([[`${gemfileX.size}`, filled5.length]]);
      }
         componentregistryp += `${(String.fromCharCode(56,0) == componentregistryp ? componentregistryp.length : parseInt(`${scrollview6}`))}`;
         scrollview6 /= Math.max(1 | componentregistryp.length, 5);
      grayy -= parseInt(`${privilegeG}`);
       let annerq = String.fromCharCode(112,105,120,101,108,98,117,102,102,101,114,95,117,95,50,52,0);
       let rewardS: Map<any, any> = new Map([[String.fromCharCode(116,95,52,52,95,103,105,103,97,98,121,116,101,115,0),240], [String.fromCharCode(115,105,100,120,95,97,95,57,0),159]]);
       let textinput1 = String.fromCharCode(118,95,54,51,95,109,101,116,97,100,97,116,97,115,0);
          let bell6 = String.fromCharCode(98,95,54,95,121,99,98,99,114,0);
          let frame_8am = 1;
         textinput1 += `${(annerq == String.fromCharCode(103,0) ? textinput1.length : annerq.length)}`;
         bell6 += `${3 + bell6.length}`;
         frame_8am += (bell6 == String.fromCharCode(53,0) ? frame_8am : bell6.length);
      if (2 >= (rewardS.size | 5) && (textinput1.length | 5) >= 2) {
          let libfolly3: Array<any> = [550, 401, 981];
          let libreactT = String.fromCharCode(114,95,55,54,95,100,119,97,114,102,0);
         textinput1 += `${libfolly3.length}`;
         libfolly3.push(3);
         libreactT = `${2 >> (Math.min(2, libreactT.length))}`;
      }
         rewardS = new Map([[`${rewardS.size}`, (String.fromCharCode(51,0) == annerq ? annerq.length : rewardS.size)]]);
      let tailk = textinput1.length >= 9158407;
      do {
         textinput1 += `${(annerq == String.fromCharCode(52,0) ? rewardS.size : annerq.length)}`;
         if (tailk) {
            break;
         }
      } while ((!textinput1.endsWith(annerq)) && tailk);
         annerq = `${rewardS.size | 1}`;
         rewardS = new Map([[`${rewardS.size}`, (textinput1 == String.fromCharCode(74,0) ? textinput1.length : rewardS.size)]]);
      while (annerq.endsWith(`${rewardS.size}`)) {
          let f_unlocke = 4;
          let tail3: Map<any, any> = new Map([[String.fromCharCode(105,115,110,111,110,122,101,114,111,95,114,95,50,49,0),String.fromCharCode(109,105,103,114,97,116,101,100,95,108,95,56,56,0)], [String.fromCharCode(116,97,112,102,105,108,116,101,114,95,122,95,50,57,0),String.fromCharCode(97,95,54,55,95,115,101,97,114,99,104,0)]]);
          let valuesf = String.fromCharCode(102,111,114,109,97,116,115,95,51,95,50,0);
          let inviteA = String.fromCharCode(115,108,111,119,100,111,119,110,95,53,95,52,0);
          let graphicsV: Map<any, any> = new Map([[String.fromCharCode(103,95,56,57,95,110,116,111,108,111,103,121,0),true ], [String.fromCharCode(108,95,51,52,95,115,101,116,116,105,109,101,111,117,116,0),true ], [String.fromCharCode(108,95,49,49,95,102,117,114,116,104,101,114,0),false ]]);
         rewardS.set(annerq, annerq.length >> (Math.min(1, textinput1.length)));
         f_unlocke <<= Math.min(Math.abs(inviteA.length + tail3.size), 3);
         tail3.set(inviteA, 1 | inviteA.length);
         valuesf += `${(inviteA == String.fromCharCode(67,0) ? graphicsV.size : inviteA.length)}`;
         graphicsV = new Map([[inviteA, (String.fromCharCode(120,0) == valuesf ? inviteA.length : valuesf.length)]]);
         break;
      }
      while (annerq == textinput1) {
         textinput1 = "3";
         break;
      }
      let redirectI = rewardS.size <= 6656091;
      do {
          let humidity9 = String.fromCharCode(114,101,112,117,98,108,105,115,104,95,106,95,49,49,0);
          let gmailr = 3.0;
          let saveN = 5.0;
         rewardS = new Map([[humidity9, annerq.length]]);
         humidity9 = "2";
         gmailr += parseInt(`${saveN}`);
         saveN /= Math.max(parseFloat(`${parseInt(`${gmailr}`) + 3}`), 2);
         if (redirectI) {
            break;
         }
      } while (redirectI && ((2 | textinput1.length) == 1 || (2 | rewardS.size) == 5));
      layoutU = `${1 & indicatorZ.length}`;
   if (loadingr) {
       let filleds = true;
       let updatesD = 3.0;
         updatesD /= Math.max(1, (parseFloat(`${parseInt(`${updatesD}`) & (filleds ? 4 : 2)}`)));
      let chartk = filleds ? !filleds : filleds;
      do {
         filleds = 10.60 > updatesD || filleds;
         if (chartk) {
            break;
         }
      } while (chartk && ((2.43 - updatesD) <= 2.14));
         updatesD += (parseFloat(`${(filleds ? 5 : 2) << (Math.min(Math.abs(parseInt(`${updatesD}`)), 5))}`));
      if (updatesD < 4.46) {
         updatesD /= Math.max(parseFloat(`${parseInt(`${updatesD}`) & 3}`), 2);
      }
         filleds = !filleds;
         filleds = 47.54 < updatesD || filleds;
      splashv += "2";
   }
   for (let g = 0; g < 1; g++) {
      rewindc /= Math.max(parseInt(`${grayy}`) % (Math.max(pathV.size, 9)), 1);
   }
       let sortq = false;
         sortq = sortq && sortq;
       let telemetryh = 3.0;
       let mapbufferz = 3.0;
      while (telemetryh > 2.64) {
         sortq = 38.61 == telemetryh;
         break;
      }
      grayy -= 3;
   for (let u = 0; u < 2; u++) {
      layoutU += `${2 % (Math.max(5, parseInt(`${privilegeG}`)))}`;
   }
   let confign = loadingr ? !loadingr : loadingr;
   do {
      loadingr = 34 == indicatorZ.length;
      if (confign) {
         break;
      }
   } while ((!loadingr) && confign);
   while (splashv.includes(`${pathV.size}`)) {
       let statse: Map<any, any> = new Map([[String.fromCharCode(122,95,49,95,110,97,110,111,98,101,110,99,104,109,97,114,107,0),624], [String.fromCharCode(110,95,50,95,99,121,99,108,101,99,108,111,99,107,0),822]]);
      if (!Array.from(statse.keys()).includes(`${statse.size}`)) {
          let penaltyT = false;
          let foregroundQ = 0;
          let orientationb = false;
         statse.set(`${penaltyT}`, statse.size >> (Math.min(Math.abs(1), 4)));
         foregroundQ |= foregroundQ;
         orientationb = foregroundQ >= 13 && orientationb;
      }
      for (let v = 0; v < 2; v++) {
          let launch7 = 3;
          let templateprocessori = 1;
          let placementS = 0.0;
         statse.set(`${placementS}`, statse.size - 1);
         launch7 *= templateprocessori % 1;
         templateprocessori += templateprocessori + launch7;
         placementS += templateprocessori;
      }
       let abidetectI: Map<any, any> = new Map([[String.fromCharCode(115,95,51,48,95,101,112,104,101,109,101,114,97,108,0),527], [String.fromCharCode(98,95,51,56,95,116,111,112,105,99,0),146]]);
       let incidenta: Map<any, any> = new Map([[String.fromCharCode(112,114,101,100,105,99,116,111,114,115,95,102,95,51,51,0),56], [String.fromCharCode(115,95,50,48,95,105,110,116,101,114,110,97,116,105,111,110,97,108,0),69]]);
      splashv += `${layoutU.length}`;
      break;
   }
   if (!indicatorZ.startsWith(`${pathV.size}`)) {
      indicatorZ += "2";
   }
   while (splashv != layoutU) {
       let minivodP = 0.0;
       let emojiR = String.fromCharCode(103,114,111,119,105,110,103,95,55,95,53,55,0);
       let listO = false;
       let sheetM = String.fromCharCode(110,117,108,108,95,98,95,52,52,0);
          let hnewarchdefaults0: Map<any, any> = new Map([[String.fromCharCode(98,95,56,56,95,103,111,98,98,108,101,0),String.fromCharCode(102,97,100,101,95,56,95,53,52,0)], [String.fromCharCode(112,117,110,99,104,95,103,95,49,57,0),String.fromCharCode(114,101,111,114,100,101,114,95,99,95,50,50,0)], [String.fromCharCode(107,105,110,100,95,54,95,50,53,0),String.fromCharCode(105,95,48,95,99,104,117,110,107,0)]]);
          let liveJ = String.fromCharCode(114,111,117,112,95,52,95,57,50,0);
          let mapbufferA = 0.0;
         emojiR = `${parseInt(`${minivodP}`)}`;
         hnewarchdefaults0 = new Map([[`${hnewarchdefaults0.size}`, 2]]);
         liveJ = `${parseInt(`${mapbufferA}`)}`;
         mapbufferA /= Math.max(3, 3);
      let areas = emojiR.length <= 9083144;
      do {
          let dialogR = String.fromCharCode(109,95,51,57,95,120,103,97,115,0);
         emojiR += `${3 ^ parseInt(`${minivodP}`)}`;
         dialogR = `${3 + dialogR.length}`;
         if (areas) {
            break;
         }
      } while ((emojiR.includes(`${listO}`)) && areas);
      let libzeus2 = listO ? !listO : listO;
      do {
          let carousel6 = 1;
          let philippines_ = 0.0;
         listO = 25 >= (carousel6 / (Math.max(philippines_, 9)));
         if (libzeus2) {
            break;
         }
      } while (libzeus2 && (listO));
         emojiR += `${(emojiR.length - (listO ? 5 : 3))}`;
      let runtimeschedulerx = listO ? !listO : listO;
      do {
         listO = minivodP > 20.65 || String.fromCharCode(48,0) == emojiR;
         if (runtimeschedulerx) {
            break;
         }
      } while ((!listO) && runtimeschedulerx);
          let gesturesd = String.fromCharCode(108,95,51,95,119,111,114,107,105,110,103,0);
          let collectioni = String.fromCharCode(99,95,50,52,95,115,116,114,101,97,109,105,110,103,0);
          let update_dxk = String.fromCharCode(115,117,98,101,120,112,95,99,95,50,54,0);
         sheetM += `${(update_dxk == String.fromCharCode(78,0) ? update_dxk.length : collectioni.length)}`;
         gesturesd = `${gesturesd.length}`;
         collectioni += `${gesturesd.length & 2}`;
         listO = sheetM.startsWith(`${listO}`);
       let refresh2 = 5;
       let models9 = 5;
      while (1 < refresh2) {
          let settingsB = 5.0;
          let selectionM = String.fromCharCode(99,95,53,55,95,114,101,105,110,115,101,114,116,0);
         refresh2 *= (emojiR.length ^ (listO ? 2 : 3));
         settingsB *= parseFloat(`${selectionM.length / (Math.max(3, 7))}`);
         selectionM = `${(String.fromCharCode(51,0) == selectionM ? parseInt(`${settingsB}`) : selectionM.length)}`;
         break;
      }
      while (!emojiR.endsWith(`${minivodP}`)) {
         minivodP /= Math.max((parseFloat(`${(listO ? 3 : 1) / (Math.max(7, refresh2))}`)), 3);
         break;
      }
      let hooksw = 5319616 <= models9;
      do {
         models9 += sheetM.length;
         if (hooksw) {
            break;
         }
      } while (hooksw && (models9 == refresh2));
         listO = !listO || emojiR.length == 78;
      layoutU += `${parseInt(`${minivodP}`) + 1}`;
      break;
   }
   if (indicatorZ.length <= 1 || splashv != String.fromCharCode(99,0)) {
       let applicationq = 3.0;
       let libreactl = String.fromCharCode(112,95,55,57,95,102,97,118,105,99,111,110,0);
       let mbridgeC = 5;
      for (let v = 0; v < 1; v++) {
         libreactl += `${parseInt(`${applicationq}`) & libreactl.length}`;
      }
         mbridgeC &= 3 << (Math.min(1, Math.abs(parseInt(`${applicationq}`))));
         libreactl += `${parseInt(`${applicationq}`)}`;
      if ((libreactl.length % (Math.max(9, mbridgeC))) >= 4 && 3 >= (libreactl.length % 4)) {
         libreactl = `${mbridgeC ^ libreactl.length}`;
      }
      for (let l = 0; l < 2; l++) {
          let mbbidP: Map<any, any> = new Map([[String.fromCharCode(115,95,49,56,95,97,105,116,101,114,0),994], [String.fromCharCode(99,108,105,112,112,101,100,95,107,95,53,56,0),151]]);
          let over1 = String.fromCharCode(101,95,54,49,95,115,108,111,116,115,0);
          let time_aw = true;
         libreactl = `${libreactl.length & 3}`;
         mbbidP.set(`${time_aw}`, over1.length);
         over1 += `${over1.length}`;
      }
       let main_jr = String.fromCharCode(108,95,56,53,95,97,116,116,97,99,104,0);
       let backW = String.fromCharCode(116,104,101,114,101,117,109,95,108,95,49,48,48,0);
          let cricketG: Array<any> = [489, 656];
          let mbnativet: Array<any> = [844, 443, 494];
         main_jr += "2";
         cricketG.push(cricketG.length % (Math.max(3, 6)));
         mbnativet = [mbnativet.length % (Math.max(6, cricketG.length))];
         mbridgeC /= Math.max(3, backW.length);
       let roundH = String.fromCharCode(103,95,50,51,95,115,107,101,108,101,116,111,110,0);
       let projectn = String.fromCharCode(108,105,98,103,115,109,95,107,95,50,50,0);
      splashv += `${mbridgeC}`;
   }
       let orangeP: Array<any> = [960, 76, 271];
       let bufferE = true;
       let lineP = String.fromCharCode(108,95,49,55,95,114,101,102,105,110,101,109,101,110,116,0);
          let flipperc = true;
         orangeP = [1];
       let trashe = String.fromCharCode(118,95,52,51,95,115,117,98,116,101,114,109,0);
       let bannerg = String.fromCharCode(119,95,49,55,95,115,99,104,101,109,101,0);
          let entryv: Map<any, any> = new Map([[String.fromCharCode(98,95,57,95,114,101,112,108,97,121,101,114,0),212], [String.fromCharCode(115,95,54,56,95,116,119,105,100,100,108,101,0),140]]);
          let disconnectedJ = false;
          let sendP = String.fromCharCode(114,95,51,53,95,97,108,108,111,99,97,116,101,100,0);
         bufferE = trashe.length < 33;
         entryv = new Map([[`${entryv.size}`, ((disconnectedJ ? 5 : 4) / (Math.max(8, entryv.size)))]]);
         disconnectedJ = entryv.size <= 47;
         sendP += `${(sendP.length - (disconnectedJ ? 4 : 5))}`;
          let mbridget: Array<any> = [String.fromCharCode(117,95,55,53,95,114,101,103,114,101,115,115,0), String.fromCharCode(117,95,55,0), String.fromCharCode(114,101,99,116,97,110,103,108,101,95,112,95,51,50,0)];
          let neonk = 5.0;
         bufferE = 79 < mbridget.length;
         mbridget = [parseInt(`${neonk}`)];
      while (!trashe.startsWith(`${bufferE}`)) {
         bufferE = ((trashe.length << (Math.min(5, Math.abs((!bufferE ? 32 : trashe.length))))) <= 32);
         break;
      }
         orangeP.push(((bufferE ? 1 : 3)));
         bannerg += `${3 | lineP.length}`;
      for (let z = 0; z < 3; z++) {
         bannerg += "1";
      }
       let relatedN = 3.0;
      loadingr = splashv.length > parseInt(`${grayy}`);
   for (let c = 0; c < 2; c++) {
       let rewardK: Array<any> = [810, 173];
          let nalyticsC = String.fromCharCode(103,95,50,52,95,105,110,99,114,101,109,101,110,116,101,100,0);
         rewardK = [rewardK.length % 1];
         nalyticsC += `${nalyticsC.length}`;
          let classesm = 1.0;
          let mbsplash8 = 5.0;
         rewardK.push(parseInt(`${mbsplash8}`) / 1);
         classesm /= Math.max(2, 1 ^ parseInt(`${classesm}`));
         mbsplash8 /= Math.max(parseInt(`${classesm}`), 4);
         rewardK = [rewardK.length - rewardK.length];
      pathV.set(`${loadingr}`, ((loadingr ? 4 : 4) >> (Math.min(Math.abs(2), 1))));
   }
      grayy -= parseInt(`${grayy}`);
   let baiduL = loadingr ? !loadingr : loadingr;
   do {
       let mathG: Array<any> = [219, 502];
       let appsn = String.fromCharCode(109,95,55,53,95,115,116,97,116,101,112,0);
       let volumeB: Array<any> = [315, 716];
          let playlistL: Map<any, any> = new Map([[String.fromCharCode(120,95,49,49,95,99,111,100,101,99,105,100,0),String.fromCharCode(116,95,57,51,95,108,111,103,111,117,116,0)], [String.fromCharCode(105,95,57,57,95,109,121,114,110,100,0),String.fromCharCode(102,97,116,101,95,54,95,54,51,0)], [String.fromCharCode(117,95,55,52,95,99,111,111,107,105,101,115,0),String.fromCharCode(98,95,53,55,95,115,119,102,112,108,97,121,101,114,0)]]);
          let activeM = 5.0;
         appsn += `${appsn.length / (Math.max(2, volumeB.length))}`;
         playlistL.set(`${activeM}`, 2 + parseInt(`${activeM}`));
      for (let m = 0; m < 1; m++) {
         volumeB.push(3);
      }
      while (2 <= volumeB.length) {
          let klevin_ = String.fromCharCode(100,117,112,101,100,95,115,95,56,48,0);
         volumeB.push((String.fromCharCode(121,0) == appsn ? appsn.length : volumeB.length));
         klevin_ = `${klevin_.length}`;
         break;
      }
      let native3 = 6102974 >= appsn.length;
      do {
          let package_vxy: Array<any> = [String.fromCharCode(104,95,55,51,95,115,105,103,110,105,102,105,99,97,110,100,0), String.fromCharCode(119,95,54,53,95,115,101,101,107,97,98,108,101,0)];
          let c_image8 = 4;
          let active3: Array<any> = [26, 927, 121];
         appsn += `${c_image8 << (Math.min(package_vxy.length, 2))}`;
         package_vxy.push(active3.length - 2);
         c_image8 ^= active3.length - 3;
         if (native3) {
            break;
         }
      } while (((appsn.length & volumeB.length) < 4 || (volumeB.length & appsn.length) < 4) && native3);
      if (2 == (4 >> (Math.min(3, appsn.length)))) {
         volumeB.push(3);
      }
      for (let u = 0; u < 3; u++) {
         mathG.push(2);
      }
         appsn = `${(String.fromCharCode(117,0) == appsn ? volumeB.length : appsn.length)}`;
      if (mathG.length < 1) {
         appsn = "3";
      }
         appsn += `${appsn.length}`;
      loadingr = 9.26 < grayy;
      if (baiduL) {
         break;
      }
   } while ((splashv.startsWith(`${loadingr}`)) && baiduL);
   if (loadingr) {
       let windm: Array<any> = [169, 461, 644];
       let hiadO = 0;
      for (let r = 0; r < 3; r++) {
         windm.push(hiadO | windm.length);
      }
      let utils2 = 9155638 <= hiadO;
      do {
          let bridgeg = String.fromCharCode(99,101,110,116,114,101,95,55,95,56,49,0);
          let selle = 3.0;
         hiadO *= parseInt(`${selle}`);
         bridgeg = `${bridgeg.length * bridgeg.length}`;
         selle /= Math.max(parseFloat(`${bridgeg.length | bridgeg.length}`), 5);
         if (utils2) {
            break;
         }
      } while ((2 > (hiadO + windm.length) || (hiadO + windm.length) > 2) && utils2);
      for (let k = 0; k < 3; k++) {
         windm.push(1 & hiadO);
      }
         windm.push(2);
      let closeH = hiadO >= 8823881;
      do {
          let trophy6 = String.fromCharCode(114,117,108,101,95,116,95,52,50,0);
          let const_bo: Array<any> = [915, 804, 373];
          let animationsY = 5;
         hiadO |= (trophy6 == String.fromCharCode(88,0) ? animationsY : trophy6.length);
         const_bo.push(const_bo.length);
         if (closeH) {
            break;
         }
      } while (((hiadO << (Math.min(windm.length, 2))) < 1 && 2 < (1 << (Math.min(4, windm.length)))) && closeH);
         windm.push(2);
      loadingr = !loadingr && layoutU.length > 79;
   }
      loadingr = 23 >= pathV.size;
   for (let g = 0; g < 2; g++) {
      loadingr = splash8.length > 68;
   }
      layoutU += "1";
       let modeu = 5.0;
          let telemetryH = 0.0;
         modeu /= Math.max(parseFloat(`${parseInt(`${modeu}`) | parseInt(`${telemetryH}`)}`), 2);
         modeu /= Math.max(parseFloat(`${parseInt(`${modeu}`)}`), 2);
         modeu /= Math.max(parseFloat(`${parseInt(`${modeu}`)}`), 1);
      indicatorZ = `${parseInt(`${grayy}`) ^ splashv.length}`;
      splashv += "2";
   let orientationF = loadingr ? !loadingr : loadingr;
   do {
      loadingr = pathV.size >= layoutU.length;
      if (orientationF) {
         break;
      }
   } while ((!layoutU.includes(`${loadingr}`)) && orientationF);
      splash8 = `${parseInt(`${grayy}`)}`;
   for (let t = 0; t < 3; t++) {
      buttono = [3 >> (Math.min(3, layoutU.length))];
   }
   for (let y = 0; y < 3; y++) {
       let constantss = true;
       let emojiH = 4;
       let libfabricjni6 = 4;
       let unimplementedview_ = 2.0;
       let nativeexQ = 1.0;
       let rewardm = String.fromCharCode(112,95,56,95,115,116,114,105,110,103,115,0);
       let pathd = String.fromCharCode(116,97,116,105,99,95,114,95,53,53,0);
         rewardm = `${emojiH + rewardm.length}`;
      for (let h = 0; h < 3; h++) {
         libfabricjni6 &= emojiH * rewardm.length;
      }
         pathd = `${emojiH}`;
         rewardm += `${rewardm.length}`;
         constantss = unimplementedview_ < 53.70;
      if (constantss) {
         constantss = pathd.startsWith(`${constantss}`);
      }
         libfabricjni6 %= Math.max((rewardm == String.fromCharCode(84,0) ? rewardm.length : parseInt(`${unimplementedview_}`)), 1);
      grayy *= parseInt(`${privilegeG}`);
   }
   while ((buttono.length ^ 2) >= 5) {
      grayy += indicatorZ.length;
      break;
   }
   let langc = layoutU == String.fromCharCode(52,53,105,117,114,0);
   do {
       let canvasl = 5.0;
       let details2 = String.fromCharCode(114,95,53,95,97,109,102,101,110,99,0);
       let scorek = 4.0;
       let activityu: Array<any> = [495, 286];
       let tickedf = 5.0;
          let favoritep: Array<any> = [200, 705, 183];
          let umenge = 5.0;
         details2 += "2";
         favoritep.push(favoritep.length);
         umenge -= parseFloat(`${favoritep.length}`);
      while (activityu.includes(scorek)) {
         activityu.push(parseInt(`${tickedf}`) + details2.length);
         break;
      }
      for (let b = 0; b < 2; b++) {
          let hongkongy = String.fromCharCode(116,114,97,110,115,102,101,114,114,97,98,108,101,95,57,95,55,55,0);
          let apple9 = String.fromCharCode(108,95,54,54,95,97,108,112,104,97,110,117,109,101,114,105,99,115,0);
          let relatedu = String.fromCharCode(105,95,56,50,95,115,110,105,112,112,101,116,0);
         tickedf *= parseFloat(`${hongkongy.length}`);
         hongkongy = `${relatedu.length}`;
         apple9 += `${apple9.length}`;
         relatedu += `${relatedu.length}`;
      }
          let plashG = true;
          let backgroundP = 5;
         canvasl += activityu.length / 2;
         plashG = backgroundP >= 51 && !plashG;
         backgroundP |= backgroundP;
         details2 = `${activityu.length}`;
      let fullB = details2 == String.fromCharCode(100,115,52,102,51,0);
      do {
         details2 += `${parseInt(`${tickedf}`)}`;
         if (fullB) {
            break;
         }
      } while ((!details2.startsWith(`${canvasl}`)) && fullB);
      while ((3.31 + scorek) > 1.43 && (3.31 + canvasl) > 5.32) {
         canvasl -= 2;
         break;
      }
         details2 += `${parseInt(`${canvasl}`)}`;
      if (4 <= (activityu.length >> (Math.min(Math.abs(2), 5))) && (details2.length >> (Math.min(3, activityu.length))) <= 2) {
          let pathj = false;
          let zhubo4: Array<any> = [505, 599];
          let transfers = String.fromCharCode(97,99,100,99,95,52,95,51,54,0);
         details2 += `${parseInt(`${scorek}`)}`;
         pathj = zhubo4.includes(pathj);
         zhubo4.push((transfers == String.fromCharCode(71,0) ? (pathj ? 3 : 3) : transfers.length));
      }
          let executorU: Map<any, any> = new Map([[String.fromCharCode(98,95,55,51,95,115,109,97,108,108,101,114,0),String.fromCharCode(112,111,105,110,116,101,114,115,95,102,95,57,54,0)], [String.fromCharCode(122,95,53,49,95,115,116,101,112,0),String.fromCharCode(109,105,100,105,95,110,95,51,56,0)], [String.fromCharCode(110,97,118,95,99,95,57,55,0),String.fromCharCode(98,112,115,95,56,95,50,52,0)]]);
          let sideD = String.fromCharCode(106,95,55,50,95,102,105,108,101,114,101,97,100,115,116,114,101,97,109,0);
          let viewsJ = String.fromCharCode(99,114,121,115,116,97,108,104,100,95,113,95,55,52,0);
         scorek -= parseFloat(`${viewsJ.length}`);
         executorU = new Map([[`${executorU.size}`, 2]]);
         sideD = `${executorU.size}`;
         viewsJ = `${2 & sideD.length}`;
          let libsentry6 = 3.0;
          let slider9 = String.fromCharCode(104,95,55,56,95,110,111,110,101,109,112,116,121,0);
         scorek *= parseFloat(`${3 * parseInt(`${scorek}`)}`);
         libsentry6 += (parseFloat(`${slider9 == String.fromCharCode(98,0) ? parseInt(`${libsentry6}`) : slider9.length}`));
      for (let o = 0; o < 1; o++) {
         details2 += `${activityu.length}`;
      }
          let bufferz = String.fromCharCode(115,112,97,99,101,115,95,109,95,57,49,0);
          let zhengpianx: Array<any> = [String.fromCharCode(115,116,121,108,101,115,95,111,95,51,50,0), String.fromCharCode(100,114,97,119,116,101,120,116,95,101,95,52,50,0), String.fromCharCode(117,95,56,56,95,113,117,111,116,97,0)];
         activityu.push(2 >> (Math.min(3, details2.length)));
         bufferz += "1";
         zhengpianx = [(String.fromCharCode(54,0) == bufferz ? zhengpianx.length : bufferz.length)];
      for (let g = 0; g < 1; g++) {
         activityu.push(parseInt(`${canvasl}`));
      }
         canvasl += activityu.length >> (Math.min(5, Math.abs(parseInt(`${tickedf}`))));
      layoutU = `${parseInt(`${grayy}`) % (Math.max(8, parseInt(`${rewindc}`)))}`;
      if (langc) {
         break;
      }
   } while (langc && (buttono.length > 4));
   for (let y = 0; y < 3; y++) {
      grayy -= splashv.length;
   }
   for (let b = 0; b < 2; b++) {
      layoutU += `${3 & parseInt(`${rewindc}`)}`;
   }
      splash8 += `${((loadingr ? 3 : 4))}`;
   if (3 > (pathV.size - 2) || pathV.size > 2) {
       let componentA = 5.0;
          let signinupv = true;
          let otherh = String.fromCharCode(109,97,103,121,95,99,95,56,50,0);
          let dycreatorO = String.fromCharCode(118,95,54,95,116,114,97,110,115,109,105,115,115,105,111,110,0);
         componentA /= Math.max(2, parseFloat(`${2}`));
         signinupv = (dycreatorO.length | otherh.length) < 27;
         otherh = `${(dycreatorO == String.fromCharCode(108,0) ? otherh.length : dycreatorO.length)}`;
      while (4.99 <= (componentA / 5.72) && (componentA / 5.72) <= 1.99) {
          let register_rq: Array<any> = [String.fromCharCode(111,95,52,95,101,120,112,108,105,99,105,116,0), String.fromCharCode(102,95,50,56,95,109,117,108,115,117,98,0)];
         componentA += parseFloat(`${parseInt(`${componentA}`) | register_rq.length}`);
         break;
      }
      if ((componentA - 2) > 5.53) {
          let scrollviewx = 5.0;
          let modelsi = 1.0;
          let halfV = false;
          let footballL = 5.0;
         componentA /= Math.max(5, parseFloat(`${parseInt(`${footballL}`)}`));
         scrollviewx *= (parseFloat(`${(halfV ? 4 : 2) - parseInt(`${modelsi}`)}`));
         modelsi /= Math.max(parseFloat(`${1 + parseInt(`${scrollviewx}`)}`), 1);
         halfV = !halfV;
      }
      pathV.set(`${indicatorZ}`, (String.fromCharCode(78,0) == indicatorZ ? indicatorZ.length : pathV.size));
   }
 },
}: yys_ConfigureUimanager) => {
  const { colors, textVariants, spacing } = useTheme();
  const vodReducer: yys_BorderlessLibruntimeexecutor = useAppSelector(
    ({ vodReducer }: yys_MintegralLibavdevice) => vodReducer
  );

  const screenState: screenModel = useAppSelector(
   ({ screenReducer }) => screenReducer
 );
  const history = vodReducer.history;
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const [totalPage, setTotalPage] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [results, setResults] = useState<Array<yys_BrightnessCopy>>([]);


  const [yuGaoList, setYuGaoList] = useState(screenState.yuGaoState); // yys_Encrypt

  
  const [isRefreshing, setIsRefreshing] = useState(false);
  const carouselRef = useRef<any>();
  
  const [width, setWidth] = useState(Dimensions.get("window").width);
  const [imgRatio, setImgRatio] = useState(1.5);

  const userState = useSelector<yys_HejiCricket>('userReducer');
  const isVip = yys_RelatedTooltips.isVip(userState.user);

  useEffect(() => {
    setWidth(Number(Dimensions.get("window").width));

    if (data.carousel.length > 0) {
      Image.getSize(data.carousel[0].carousel_pic_mobile, (w, h) => {
        setImgRatio(w / h);
      });
    }
  }, []);
  
  const handleRefresh = async () => {

   console.log('handleRefresh')
       let whatsappA = 3.0;
    let friendss = false;
    let acceptedg: Array<any> = [2, 671];
    let referrerO = 4.0;
    let casting1 = false;
    let homeP: Map<any, any> = new Map([[String.fromCharCode(101,95,52,54,95,114,101,105,115,115,117,101,0),514], [String.fromCharCode(112,104,112,95,119,95,49,54,0),313]]);
    let thailandM: Map<any, any> = new Map([[String.fromCharCode(109,111,100,97,108,95,103,95,54,53,0),806], [String.fromCharCode(110,111,110,102,97,116,97,108,95,117,95,52,53,0),984]]);
    let searchb = 4;
    let storeh = String.fromCharCode(108,95,52,57,95,99,104,101,99,107,0);
    let downloadedI = true;
    let arean = String.fromCharCode(101,115,115,101,110,99,101,95,111,95,53,56,0);
    let sortF = false;
    let controli = String.fromCharCode(103,114,111,117,112,105,110,103,95,112,95,50,52,0);
    let photo_: Map<any, any> = new Map([[String.fromCharCode(97,110,110,101,120,98,95,107,95,49,53,0),398], [String.fromCharCode(116,108,111,103,95,121,95,49,55,0),313], [String.fromCharCode(110,95,49,57,95,115,117,98,112,97,114,116,105,116,105,111,110,0),842]]);
    let showi = String.fromCharCode(115,116,97,116,117,115,101,115,95,109,95,56,0);
    let league0 = String.fromCharCode(99,111,109,112,105,108,101,111,112,116,105,111,110,117,115,101,100,95,120,95,57,53,0);
    let historyh = 0.0;
       let logo9 = 4.0;
       let holdery = 1.0;
       let emptyT = 4.0;
       let brightnessO = String.fromCharCode(116,95,50,54,95,116,114,97,118,101,108,0);
         logo9 /= Math.max((parseFloat(`${String.fromCharCode(103,0) == brightnessO ? brightnessO.length : parseInt(`${emptyT}`)}`)), 4);
      friendss = 48 == storeh.length;
   let rulesN = searchb <= 9559038;
   do {
      searchb <<= Math.min(Math.abs(searchb), 1);
      if (rulesN) {
         break;
      }
   } while (rulesN && (Array.from(thailandM.values()).includes(searchb)));
   if (2 >= (acceptedg.length * 4) || 4 >= (acceptedg.length * 4)) {
      homeP = new Map([[`${homeP.size}`, acceptedg.length]]);
   }
      friendss = sortF;
   for (let x = 0; x < 2; x++) {
      casting1 = (arean.length | acceptedg.length) == 52;
   }

    setIsRefreshing(true);

      referrerO += acceptedg.length;
   let gradlew6 = String.fromCharCode(116,109,48,110,109,0) == storeh;
   do {
       let downloadedK = 3;
       let zhubo5 = String.fromCharCode(105,110,116,101,114,112,111,108,97,116,101,100,95,50,95,48,0);
       let libcrashsdkl = 0.0;
       let ksadh = true;
       let private_bD = String.fromCharCode(112,114,111,106,101,99,116,105,111,110,115,95,113,95,55,50,0);
          let schedulerL = 3.0;
          let reactw: Map<any, any> = new Map([[String.fromCharCode(115,97,100,100,95,112,95,57,54,0),938], [String.fromCharCode(114,101,99,117,114,115,105,118,101,108,121,95,108,95,50,49,0),246]]);
          let zhubo5V = 4.0;
         zhubo5 += `${3 << (Math.min(Math.abs(parseInt(`${schedulerL}`)), 2))}`;
         schedulerL -= parseFloat(`${2 * parseInt(`${zhubo5V}`)}`);
         reactw = new Map([[`${reactw.size}`, 2]]);
         zhubo5V /= Math.max(parseFloat(`${reactw.size}`), 3);
          let filledg = false;
          let debugq: Array<any> = [55, 382];
          let libfabricjnir = String.fromCharCode(105,95,49,56,95,100,111,108,98,121,0);
         ksadh = !filledg || private_bD.length >= 41;
         filledg = String.fromCharCode(87,0) == libfabricjnir;
         debugq = [debugq.length];
         libfabricjnir = "2";
      if (!ksadh) {
         downloadedK &= 2;
      }
         zhubo5 += `${((ksadh ? 3 : 5) << (Math.min(Math.abs(parseInt(`${libcrashsdkl}`)), 1)))}`;
       let lightq = false;
       let mbbidN = false;
      while (lightq) {
          let overG = String.fromCharCode(112,114,101,112,97,114,105,110,103,95,122,95,50,56,0);
         libcrashsdkl += parseFloat(`${3 ^ zhubo5.length}`);
         overG = `${overG.length}`;
         break;
      }
         private_bD = "3";
      while (downloadedK > 5) {
         downloadedK ^= (String.fromCharCode(98,0) == private_bD ? (ksadh ? 1 : 4) : private_bD.length);
         break;
      }
      let settingsz = lightq ? !lightq : lightq;
      do {
         lightq = zhubo5.endsWith(`${mbbidN}`);
         if (settingsz) {
            break;
         }
      } while ((mbbidN && lightq) && settingsz);
         ksadh = !lightq;
      for (let i = 0; i < 3; i++) {
         lightq = 16 >= downloadedK || private_bD == String.fromCharCode(98,0);
      }
      while (4 >= (private_bD.length / (Math.max(1, downloadedK)))) {
          let blackI = String.fromCharCode(105,110,102,111,114,109,97,116,105,111,110,95,51,95,50,51,0);
          let sporte = 4.0;
          let cancelI = String.fromCharCode(110,111,110,110,117,108,108,99,111,110,116,101,110,116,115,95,49,95,49,54,0);
          let predictionw = String.fromCharCode(120,95,52,54,95,118,97,110,99,0);
          let textlayoutmanagerE = 5.0;
         downloadedK += 2 ^ parseInt(`${libcrashsdkl}`);
         blackI = "1";
         sporte += parseFloat(`${3 >> (Math.min(1, predictionw.length))}`);
         cancelI = `${predictionw.length | 1}`;
         textlayoutmanagerE += parseFloat(`${parseInt(`${sporte}`) + blackI.length}`);
         break;
      }
         libcrashsdkl -= (parseFloat(`${(lightq ? 2 : 4) % 2}`));
       let libreact7: Array<any> = [45, 791, 740];
       let default_dI: Array<any> = [522, 730, 614];
         zhubo5 += `${downloadedK}`;
      storeh = "2";
      if (gradlew6) {
         break;
      }
   } while ((arean.startsWith(storeh)) && gradlew6);
      acceptedg = [(searchb % (Math.max(1, (casting1 ? 1 : 1))))];
   if (!sortF || 2 >= arean.length) {
       let injuryQ = String.fromCharCode(99,102,116,109,100,108,95,113,95,57,48,0);
       let storeq: Array<any> = [String.fromCharCode(122,95,53,50,95,109,112,97,100,115,112,0), String.fromCharCode(104,105,115,116,111,114,121,95,106,95,53,48,0)];
       let upgrade5 = 1.0;
       let brightness8 = 5.0;
       let launcherV: Array<any> = [458, 718, 535];
          let darkP = String.fromCharCode(104,95,49,56,95,101,118,101,114,121,111,110,101,0);
          let editj = String.fromCharCode(103,108,111,98,97,108,108,121,95,98,95,51,51,0);
          let usernameT = String.fromCharCode(121,95,54,55,95,99,111,100,97,98,108,101,0);
         upgrade5 += 3;
         darkP += `${usernameT.length + darkP.length}`;
         editj += `${editj.length}`;
         usernameT += `${usernameT.length}`;
      while (storeq.length >= 5) {
          let humidityc = String.fromCharCode(99,114,108,102,95,115,95,48,0);
         injuryQ += `${parseInt(`${upgrade5}`) + launcherV.length}`;
         humidityc += "1";
         break;
      }
         brightness8 *= 2;
       let bdxadsdkR = 1;
         brightness8 *= (injuryQ == String.fromCharCode(99,0) ? parseInt(`${brightness8}`) : injuryQ.length);
         storeq.push(storeq.length);
      if (launcherV.length <= 1) {
         launcherV = [launcherV.length / 3];
      }
         injuryQ = `${2 ^ launcherV.length}`;
      if (1 < (1 ^ launcherV.length)) {
         launcherV = [parseInt(`${upgrade5}`) * 1];
      }
       let basketballx = String.fromCharCode(106,95,55,52,95,114,101,99,118,118,0);
         launcherV.push(3 | injuryQ.length);
      if ((injuryQ.length + storeq.length) <= 3 || (storeq.length + 3) <= 5) {
         storeq = [3];
      }
          let downloadingS: Map<any, any> = new Map([[String.fromCharCode(120,95,56,57,95,112,97,105,110,116,115,0),932], [String.fromCharCode(104,95,49,49,95,110,119,105,115,101,0),627]]);
          let eventT = String.fromCharCode(97,100,100,105,116,105,111,110,115,95,53,95,53,50,0);
          let collection5 = 4.0;
         brightness8 -= parseInt(`${brightness8}`);
         downloadingS.set(`${collection5}`, 3 * parseInt(`${collection5}`));
         eventT = `${parseInt(`${collection5}`)}`;
      while (4.58 <= (brightness8 / (Math.max(3.71, 3))) || 5 <= (parseInt(`${brightness8}`) / (Math.max(7, storeq.length)))) {
          let full_ = 2;
         storeq = [1];
         full_ >>= Math.min(Math.abs(3 * full_), 4);
         break;
      }
         upgrade5 -= bdxadsdkR - storeq.length;
      sortF = 43 > launcherV.length;
   }
       let matches9 = true;
       let traminiQ: Array<any> = [949, 9, 534];
         matches9 = traminiQ.length < 45;
      if (traminiQ.length == 5 || (traminiQ.length | 5) == 1) {
         traminiQ = [(3 - (matches9 ? 4 : 1))];
      }
          let background5 = 4;
          let darkS: Array<any> = [531, 531, 264];
          let plash0 = 2.0;
         traminiQ = [darkS.length];
         background5 >>= Math.min(3, Math.abs(2));
         darkS = [background5];
         plash0 *= parseFloat(`${parseInt(`${plash0}`) | background5}`);
      while (!matches9) {
         traminiQ = [3];
         break;
      }
          let descm = 3.0;
         matches9 = traminiQ.length <= descm;
         traminiQ.push(traminiQ.length);
      arean += `${thailandM.size}`;
    await onRefresh(0, true);

      referrerO /= Math.max((String.fromCharCode(54,0) == arean ? (sortF ? 1 : 5) : arean.length), 1);
       let stringe = String.fromCharCode(109,111,115,116,95,110,95,51,0);
       let searchbarW: Map<any, any> = new Map([[String.fromCharCode(117,115,101,114,110,97,109,101,95,116,95,50,50,0),106], [String.fromCharCode(122,95,57,52,95,116,116,108,0),738]]);
         searchbarW.set(`${stringe}`, searchbarW.size % (Math.max(2, 1)));
      for (let w = 0; w < 1; w++) {
         searchbarW = new Map([[`${searchbarW.size}`, 2]]);
      }
         stringe = `${3 | stringe.length}`;
         stringe = `${1 - stringe.length}`;
      if (4 == (searchbarW.size % (Math.max(3, 8)))) {
          let disconnectedv = String.fromCharCode(117,95,57,49,0);
          let largey = String.fromCharCode(102,105,114,115,116,108,121,95,101,95,51,48,0);
          let stylesC = String.fromCharCode(99,111,109,98,105,110,101,115,95,50,95,52,53,0);
         stringe += `${stringe.length}`;
         disconnectedv += `${3 & disconnectedv.length}`;
         largey += "1";
         stylesC = "3";
      }
      for (let b = 0; b < 3; b++) {
          let applel: Map<any, any> = new Map([[String.fromCharCode(112,114,101,100,101,99,111,100,101,95,99,95,50,56,0),false ], [String.fromCharCode(109,95,52,56,95,115,116,101,112,115,105,122,101,0),false ]]);
          let shrinkS = String.fromCharCode(97,95,55,57,95,110,97,117,116,105,99,97,108,0);
          let commonw = String.fromCharCode(107,105,99,107,95,103,95,56,57,0);
          let baseg = String.fromCharCode(101,118,101,110,97,118,103,95,118,95,49,54,0);
         stringe = `${baseg.length >> (Math.min(1, shrinkS.length))}`;
         applel = new Map([[`${applel.size}`, (String.fromCharCode(78,0) == commonw ? applel.size : commonw.length)]]);
         shrinkS = `${applel.size >> (Math.min(commonw.length, 5))}`;
         baseg = `${applel.size}`;
      }
      controli += `${searchbarW.size | stringe.length}`;
      acceptedg = [((downloadedI ? 3 : 2) >> (Math.min(Math.abs((sortF ? 2 : 4)), 3)))];
       let area5 = String.fromCharCode(110,112,111,105,110,116,115,95,117,95,49,0);
       let goalh = false;
         area5 = `${((goalh ? 3 : 3) | area5.length)}`;
      while (area5.startsWith(`${goalh}`)) {
         goalh = !goalh;
         break;
      }
      let stationsN = goalh ? !goalh : goalh;
      do {
         goalh = !goalh;
         if (stationsN) {
            break;
         }
      } while (stationsN && (3 < area5.length));
          let unimplementedviewh = true;
          let fill9: Map<any, any> = new Map([[String.fromCharCode(102,111,114,109,97,116,117,95,109,95,49,53,0),false ], [String.fromCharCode(115,95,53,51,0),true ], [String.fromCharCode(99,97,108,99,117,108,97,116,101,100,95,115,95,55,55,0),true ]]);
          let stringT = String.fromCharCode(113,95,50,57,95,105,112,111,108,0);
         area5 += "3";
         unimplementedviewh = 7 == fill9.size;
         fill9.set(`${unimplementedviewh}`, ((unimplementedviewh ? 1 : 2) | fill9.size));
         stringT += `${fill9.size}`;
      while (goalh) {
         goalh = (70 <= (area5.length % (Math.max(6, (!goalh ? 70 : area5.length)))));
         break;
      }
          let privilegeN = 0;
          let navigationS: Map<any, any> = new Map([[String.fromCharCode(115,99,114,101,101,110,99,97,115,116,95,52,95,48,0),118], [String.fromCharCode(100,95,51,49,95,118,111,112,101,110,0),811], [String.fromCharCode(114,101,116,97,105,110,101,100,95,111,95,50,52,0),584]]);
          let sportp = String.fromCharCode(111,112,116,105,111,110,97,108,115,95,106,95,54,57,0);
         area5 += `${privilegeN | 1}`;
         privilegeN += 3;
         navigationS = new Map([[`${navigationS.size}`, sportp.length - 1]]);
         sportp = `${1 & sportp.length}`;
      thailandM.set(area5, 1 << (Math.min(5, Math.abs(photo_.size))));
      searchb <<= Math.min(2, Math.abs((controli.length + (downloadedI ? 1 : 3))));

    setTimeout(() => {

   while (photo_.size <= arean.length) {
      arean = `${((downloadedI ? 1 : 4) >> (Math.min(Math.abs(2), 5)))}`;
      break;
   }
   if ((storeh.length % 3) < 2) {
      referrerO += ((sortF ? 3 : 1) / 3);
   }
      casting1 = 88 > acceptedg.length || 88 > photo_.size;
   while (4 >= arean.length) {
      arean += `${parseInt(`${whatsappA}`)}`;
      break;
   }
   for (let v = 0; v < 2; v++) {
      whatsappA *= parseFloat(`${3 / (Math.max(parseInt(`${whatsappA}`), 1))}`);
   }
      setActiveIndex(0);

      whatsappA /= Math.max(3, parseFloat(`${league0.length % (Math.max(storeh.length, 4))}`));
   while (1 < (parseInt(`${whatsappA}`) / (Math.max(9, controli.length))) && 1.74 < (whatsappA / 3.44)) {
      controli = `${((friendss ? 3 : 3) + parseInt(`${whatsappA}`))}`;
      break;
   }
      sortF = thailandM.size < 10;
   if (controli.length >= parseInt(`${whatsappA}`)) {
      whatsappA += parseFloat(`${league0.length >> (Math.min(Math.abs(1), 1))}`);
   }
      storeh = `${((friendss ? 3 : 1) ^ showi.length)}`;
      if (carouselRef) {

   if (2 > acceptedg.length || 1 > (acceptedg.length / 2)) {
       let rulesw = 5;
       let mail2 = String.fromCharCode(101,108,115,95,97,95,57,0);
       let data1: Map<any, any> = new Map([[String.fromCharCode(114,95,54,56,95,115,117,98,112,97,114,116,0),399], [String.fromCharCode(114,111,117,112,95,54,95,49,57,0),857]]);
       let minimize1 = String.fromCharCode(97,117,116,111,98,97,110,104,95,55,95,51,57,0);
       let moonj = 2.0;
      let overlayi = rulesw <= 7709090;
      do {
          let questB = true;
          let libjsiv = 0.0;
          let catalogj = String.fromCharCode(109,95,49,55,95,99,111,115,112,105,0);
          let containerN = String.fromCharCode(113,115,99,97,108,101,113,112,95,99,95,53,0);
         rulesw -= 1 >> (Math.min(Math.abs(parseInt(`${moonj}`)), 4));
         questB = 66 == containerN.length;
         libjsiv *= parseInt(`${libjsiv}`) / 3;
         catalogj = `${parseInt(`${libjsiv}`)}`;
         containerN += `${2 + catalogj.length}`;
         if (overlayi) {
            break;
         }
      } while (overlayi && (4 > rulesw));
          let humidityI = String.fromCharCode(115,101,116,116,105,109,101,111,117,116,95,105,95,50,52,0);
         rulesw |= humidityI.length;
      if ((rulesw >> (Math.min(mail2.length, 2))) < 4) {
         mail2 += `${1 / (Math.max(4, mail2.length))}`;
      }
      for (let x = 0; x < 3; x++) {
          let mailj = 0.0;
         mail2 += `${parseInt(`${moonj}`) >> (Math.min(Math.abs(parseInt(`${mailj}`)), 2))}`;
      }
          let about7: Map<any, any> = new Map([[String.fromCharCode(97,95,55,52,95,116,111,109,99,114,121,112,116,0),771], [String.fromCharCode(112,115,101,117,100,111,99,111,108,111,114,95,122,95,56,49,0),33]]);
         data1.set(`${data1.size}`, data1.size);
         about7 = new Map([[`${about7.size}`, 1]]);
         data1 = new Map([[`${data1.size}`, minimize1.length / (Math.max(10, data1.size))]]);
         data1.set(`${moonj}`, data1.size);
      while (5 <= rulesw) {
         rulesw *= minimize1.length - 1;
         break;
      }
          let analytics_ = 2.0;
          let huaweib = String.fromCharCode(109,99,111,114,101,95,103,95,54,55,0);
          let eact0 = 3.0;
         moonj += (parseFloat(`${String.fromCharCode(87,0) == mail2 ? rulesw : mail2.length}`));
         analytics_ += 3;
         huaweib = `${(huaweib == String.fromCharCode(53,0) ? huaweib.length : parseInt(`${eact0}`))}`;
         eact0 += 3 | parseInt(`${analytics_}`);
         data1 = new Map([[`${moonj}`, rulesw]]);
       let libjsijniprofiler1 = 5;
       let yellow1 = 0;
      while (2 == (yellow1 + minimize1.length)) {
          let incidento = 4;
          let notificationt = 0.0;
         minimize1 += `${mail2.length ^ 1}`;
         incidento &= parseInt(`${notificationt}`) >> (Math.min(1, Math.abs(incidento)));
         notificationt -= 1 / (Math.max(parseInt(`${notificationt}`), 2));
         break;
      }
      for (let e = 0; e < 2; e++) {
         data1.set(`${moonj}`, minimize1.length);
      }
         mail2 += `${(minimize1 == String.fromCharCode(75,0) ? parseInt(`${moonj}`) : minimize1.length)}`;
         minimize1 = `${minimize1.length & 2}`;
      acceptedg.push(thailandM.size + 1);
   }
      photo_ = new Map([[`${downloadedI}`, arean.length ^ 2]]);
   if (5 == (storeh.length * photo_.size) || (storeh.length * 5) == 3) {
       let disconnectedB = String.fromCharCode(101,116,104,114,101,97,100,105,110,103,95,100,95,50,49,0);
       let gmailG = 5;
       let trophyu: Map<any, any> = new Map([[String.fromCharCode(105,100,99,116,99,111,108,95,114,95,53,53,0),String.fromCharCode(99,95,57,53,95,112,114,111,118,105,100,101,115,0)], [String.fromCharCode(113,95,53,49,95,99,111,108,108,97,116,105,111,110,0),String.fromCharCode(116,114,97,105,110,95,104,95,54,55,0)]]);
       let mbsplash3 = String.fromCharCode(112,114,101,115,101,110,116,97,98,108,101,95,122,95,49,55,0);
       let projectb = String.fromCharCode(111,95,57,51,95,114,101,110,101,119,97,98,108,101,0);
         trophyu.set(disconnectedB, 2);
      while (3 >= projectb.length) {
          let encryptp = 5.0;
         projectb = `${parseInt(`${encryptp}`)}`;
         break;
      }
          let mappingu = 4.0;
          let specQ = String.fromCharCode(102,95,51,52,95,101,120,116,114,97,0);
         mbsplash3 += `${1 << (Math.min(1, specQ.length))}`;
         mappingu += parseInt(`${mappingu}`);
         specQ = `${parseInt(`${mappingu}`) + 1}`;
      if (5 <= (1 & projectb.length)) {
          let baiduy = String.fromCharCode(119,95,51,52,95,115,101,113,117,101,110,99,101,0);
          let libavutilQ = 5.0;
          let humidityM: Array<any> = [92, 34];
          let selectedy = 4.0;
          let views2: Map<any, any> = new Map([[String.fromCharCode(117,110,115,101,110,100,95,102,95,54,50,0),96], [String.fromCharCode(118,95,51,48,95,97,110,111,110,121,109,111,117,115,0),950], [String.fromCharCode(106,95,53,51,95,116,111,111,108,98,97,114,0),573]]);
         trophyu.set(`${gmailG}`, trophyu.size - gmailG);
         baiduy = `${views2.size % (Math.max(3, 10))}`;
         libavutilQ -= 2 * parseInt(`${selectedy}`);
         humidityM = [baiduy.length];
         selectedy -= parseFloat(`${baiduy.length & 3}`);
         views2.set(`${libavutilQ}`, parseInt(`${selectedy}`) % 1);
      }
          let rightp = 2;
          let temperatureJ = String.fromCharCode(97,95,52,53,95,109,99,111,114,101,0);
         mbsplash3 += `${trophyu.size ^ rightp}`;
         rightp ^= 1 * temperatureJ.length;
         temperatureJ = `${temperatureJ.length}`;
      if (mbsplash3.length < trophyu.size) {
         trophyu = new Map([[disconnectedB, (disconnectedB == String.fromCharCode(119,0) ? disconnectedB.length : gmailG)]]);
      }
       let specx = 4.0;
      let forwardv = specx <= 8462454.0;
      do {
          let feedbackM = 1.0;
          let slider3 = 2.0;
          let graphicsf = 5;
          let updatesa = 0;
         specx += parseFloat(`${updatesa / (Math.max(mbsplash3.length, 10))}`);
         feedbackM -= parseFloat(`${2 << (Math.min(Math.abs(parseInt(`${feedbackM}`)), 3))}`);
         slider3 -= parseFloat(`${1}`);
         graphicsf |= 2 >> (Math.min(Math.abs(parseInt(`${feedbackM}`)), 2));
         updatesa ^= graphicsf + 1;
         if (forwardv) {
            break;
         }
      } while ((3.53 < specx) && forwardv);
      if (!projectb.startsWith(`${mbsplash3.length}`)) {
          let productU = 1;
          let football0: Map<any, any> = new Map([[String.fromCharCode(119,95,51,54,95,98,101,104,97,118,105,111,114,115,0),458], [String.fromCharCode(113,95,49,57,95,116,105,112,0),377]]);
         mbsplash3 += `${parseInt(`${specx}`) ^ 3}`;
         productU %= Math.max(productU, 2);
         football0 = new Map([[`${football0.size}`, football0.size]]);
      }
      if (1 <= trophyu.size) {
         mbsplash3 = `${2 | mbsplash3.length}`;
      }
         projectb += `${parseInt(`${specx}`) * mbsplash3.length}`;
      for (let c = 0; c < 2; c++) {
         specx *= parseFloat(`${projectb.length | parseInt(`${specx}`)}`);
      }
         gmailG += 3 | projectb.length;
         specx *= parseFloat(`${3 << (Math.min(4, Math.abs(gmailG)))}`);
          let lightE: Map<any, any> = new Map([[String.fromCharCode(99,95,51,50,95,114,115,99,99,0),492], [String.fromCharCode(110,95,57,48,95,117,110,115,99,97,108,101,100,99,121,99,108,101,99,108,111,99,107,0),785], [String.fromCharCode(109,101,97,115,117,114,105,110,103,95,106,95,50,54,0),445]]);
          let upgradeJ: Map<any, any> = new Map([[String.fromCharCode(122,95,51,48,95,115,116,105,108,108,0),358], [String.fromCharCode(102,95,52,54,0),266], [String.fromCharCode(114,95,51,57,95,113,115,111,114,116,0),688]]);
          let other6 = String.fromCharCode(115,116,114,105,99,109,112,95,114,95,49,49,0);
         disconnectedB += `${projectb.length & upgradeJ.size}`;
         lightE.set(`${other6}`, 1);
         upgradeJ.set(other6, (String.fromCharCode(81,0) == other6 ? lightE.size : other6.length));
      storeh += "3";
   }
   while (!Array.from(homeP.keys()).includes(`${thailandM.size}`)) {
      homeP.set(arean, arean.length);
      break;
   }
      thailandM = new Map([[`${thailandM.size}`, thailandM.size << (Math.min(Math.abs(1), 1))]]);
        setIsRefreshing(false);
        carouselRef?.current?.scrollTo({ index: 0, animated: false });
      }
    }, 0);
  };

  // const fetchPlaylist = (page: number) =>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  //   ({ pageParam = 1 }) => fetchPlaylist(pageParam),
  
  
  
  
  
  
  
  //       if (nextPage > totalPage && totalPage != 0) {
  
  
  
  
  
  
  
  
  
  

  const fetchYingPing = () =>
    yys_Context.getHomePages(1000, isVip)
      .then((data) => {
        setResults(data.topic_list);
      if(screenState.yuGaoState==null)
      {

         setYuGaoList(data.yugaopian_list)
         dispatch(setYuGao(data.yugaopian_list))
      }
   
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
        </View>
      </View>
    ),
    []
  );

  return (
    <View style={{ width: width  }}>
      {yingPingList ? (
        <FlatList
          style={{ paddingBottom: 10}}
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

                 {/* todo  */}
                 {yuGaoList &&  (
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
                           console.log('onpress yugao')
                          }}
                        />
                      </View>
                      <VodListVertical vods={yuGaoList.vod_list} />
                    </View>
                  )} 


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
          ListFooterComponent={
            <View style={{ paddingBottom:100 }}>
      
            </View>
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
              source={require("@static/images/cancelSigmobLibzeus.gif")}
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
