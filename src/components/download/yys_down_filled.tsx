import React, { useState, useMemo, memo, useEffect, useRef, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Animated,
  FlatList,
  Platform
} from "react-native";
import { useNavigation, useTheme } from "@react-navigation/native";
import { yysSpinner, yysDefaultbasketballbg } from "@type";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { DownloadSvg } from '@static';
import { DownloadIconSvg, VipIconSvg, DownloadedIconSvg, } from "@static";
import { IConfirmationLibffmpegkit, yysStatistics } from "@type";
import { useAppSelector } from "@hooks";
import { yysIconclosewhiteBaiduads } from "@redux";
import DeviceInfo from "react-native-device-info";
import { Provider, Toast } from "@ant-design/react-native";
import { debounce, throttle } from "lodash";
import { yysHomeinactiveUntick } from "@utility";
import { DOWNLOAD_FEATURE_MAX_QUEUE } from "@utility";

const throttledToast = debounce((msg: string) => {
  yysHomeinactiveUntick.showToast(msg)
}, 1000)


interface yysIconarrowrightorangeStation {
  vodId?: number;
  isVip: boolean;
  source?: number;
  screen: string;
  episodes?: yysSpinner;
  handleClose: any;
  rangeSize?: number;
  activeEpisode?: number;
  onDownload: (nid: number) => void;
  setShowAdOverlay: (show: boolean) => void;
  onPressToDownload: () => void,
}
function SelectDownloadComponent({
  vodId,
  isVip,
  source,
  screen,
  episodes,
  handleClose,
  rangeSize = 50,
  activeEpisode = 0,
  onDownload,
  setShowAdOverlay,
  onPressToDownload,
}: yysIconarrowrightorangeStation) {
  const { colors, textVariants, spacing } = useTheme();
  const EPISODE_RANGE_SIZE = rangeSize;
  const insets = useSafeAreaInsets();
  const itemPerRow = 5;
  const gapSize = 8;
  const windowWidth = screen === 'landscape' ? Dimensions.get('window').width / 2 : Dimensions.get('window').width;
  const width = windowWidth - 15 - spacing.sideOffset * 4;
  const height = Dimensions.get('window').height / 2 * (screen === 'landscape' ? 0.8 : 0.55);
  const childWidth = (width - gapSize) / itemPerRow;
  const [episodeHeight, setHeight] = useState(0);
  const [episodeWidth, setWidth] = useState(0);
  const navigation = useNavigation();
  const downloadVideoReducer: yysStatistics = useAppSelector(
    ({ downloadVideoReducer }: yysIconclosewhiteBaiduads) => downloadVideoReducer
  );
  const [iosCustomToastIsVisible, setIosCustomToastIsVisible] = useState(false)
  const [iosCustomToastText, setIosCustomToastText] = useState("已加入下载队列，请查看‘我的下载’")

  const debouncedSetIosCustomToastIsVisibleTrue = debounce(() => {
       let stats9 = true;
    let chatroombackground7 = 1.0;
    let overlayH = String.fromCharCode(108,95,52,53,95,115,116,111,114,101,0);
    let producta: Map<any, any> = new Map([[String.fromCharCode(102,105,108,116,101,114,103,114,97,112,104,95,102,95,52,51,0),176], [String.fromCharCode(112,108,97,121,98,97,99,107,95,51,95,55,55,0),928], [String.fromCharCode(107,95,54,50,95,116,111,98,105,116,0),897]]);
    let settingA = 2;
    let downloadedD = 1.0;
    let redcirclebgk = 1.0;
    let pangleV = String.fromCharCode(97,95,51,49,95,109,105,110,115,0);
    let confirmationu = 1.0;
    let rulesz: Map<any, any> = new Map([[String.fromCharCode(112,95,53,52,95,116,101,115,116,0),928], [String.fromCharCode(115,105,116,101,95,113,95,57,55,0),923], [String.fromCharCode(100,95,54,50,95,98,103,109,99,0),348]]);
    let positionfieldW = 1.0;
    let main_z4 = true;
   let pageJ = stats9 ? !stats9 : stats9;
   do {
      stats9 = 81.72 <= redcirclebgk;
      if (pageJ) {
         break;
      }
   } while (pageJ && (pangleV.length > 1));
   if ((parseInt(`${chatroombackground7}`) * pangleV.length) > 4 && 1.6 > (parseFloat(`${pangleV.length}`) * chatroombackground7)) {
      pangleV = "1";
   }
      overlayH += `${((stats9 ? 1 : 5) + parseInt(`${confirmationu}`))}`;
       let phoneP = String.fromCharCode(109,112,105,98,110,95,106,95,49,0);
         phoneP += `${(phoneP == String.fromCharCode(79,0) ? phoneP.length : phoneP.length)}`;
      let embed9 = 8676467 >= phoneP.length;
      do {
         phoneP = `${(String.fromCharCode(77,0) == phoneP ? phoneP.length : phoneP.length)}`;
         if (embed9) {
            break;
         }
      } while ((phoneP.length > 2) && embed9);
      if (phoneP.length > 2) {
          let regengb: Array<any> = [921, 74];
          let tickedn = String.fromCharCode(118,101,108,97,112,115,101,100,116,105,109,101,114,95,113,95,50,52,0);
          let clubu = 2.0;
          let owngoalU = String.fromCharCode(120,95,50,95,109,111,109,101,110,116,117,109,0);
          let screenm = 4.0;
         phoneP += `${(String.fromCharCode(53,0) == owngoalU ? owngoalU.length : parseInt(`${clubu}`))}`;
         regengb = [tickedn.length];
         tickedn += `${tickedn.length}`;
         clubu /= Math.max(1, parseFloat(`${tickedn.length}`));
         screenm *= parseFloat(`${1}`);
      }
      settingA *= ((stats9 ? 4 : 4) >> (Math.min(Math.abs(parseInt(`${chatroombackground7}`)), 5)));
       let gradle7 = String.fromCharCode(97,118,102,105,108,116,101,114,95,110,95,57,54,0);
       let clockm = 0.0;
      for (let n = 0; n < 2; n++) {
          let rootv = String.fromCharCode(118,95,54,57,95,100,98,108,112,0);
          let livenodatabgimgi = 1;
          let gradleX = true;
          let orientationg: Map<any, any> = new Map([[String.fromCharCode(99,95,55,54,95,97,110,103,108,101,0),String.fromCharCode(108,95,50,54,95,109,97,116,114,105,120,0)], [String.fromCharCode(105,110,116,101,114,112,111,108,97,116,97,98,108,101,95,115,95,53,57,0),String.fromCharCode(99,104,101,99,107,112,111,105,110,116,115,95,114,95,52,53,0)]]);
          let downloadedU = false;
         clockm *= 1;
         rootv += "2";
         livenodatabgimgi |= (String.fromCharCode(101,0) == rootv ? (gradleX ? 5 : 1) : rootv.length);
         orientationg = new Map([[`${orientationg.size}`, ((gradleX ? 3 : 5) * orientationg.size)]]);
         downloadedU = !downloadedU;
      }
          let playlistI = 1;
          let libglogz = String.fromCharCode(97,95,49,50,95,106,115,116,114,105,110,103,0);
          let faviconR = String.fromCharCode(111,95,51,95,112,111,108,108,0);
         clockm -= (gradle7 == String.fromCharCode(79,0) ? gradle7.length : playlistI);
         playlistI ^= faviconR.length;
         libglogz += `${libglogz.length << (Math.min(3, faviconR.length))}`;
      if (1 < (gradle7.length | 1)) {
          let selectu = 0.0;
          let incidentv = String.fromCharCode(105,95,53,53,95,97,112,105,99,0);
          let iconnointernetF = 0.0;
          let questiconB: Array<any> = [String.fromCharCode(115,116,121,108,101,115,95,109,95,50,56,0), String.fromCharCode(99,95,49,54,95,115,104,111,114,116,102,108,111,97,116,0)];
          let elementsB = String.fromCharCode(99,99,111,117,110,116,95,98,95,57,50,0);
         gradle7 += "3";
         selectu /= Math.max(3, 3);
         incidentv = "2";
         iconnointernetF /= Math.max(4, 3);
         questiconB = [2 << (Math.min(3, questiconB.length))];
         elementsB = `${parseInt(`${iconnointernetF}`)}`;
      }
       let pushK = String.fromCharCode(101,95,54,48,95,115,116,114,115,116,97,114,116,0);
      while (5 > gradle7.length) {
         pushK += `${(String.fromCharCode(105,0) == gradle7 ? parseInt(`${clockm}`) : gradle7.length)}`;
         break;
      }
      if (gradle7.length <= 1) {
         gradle7 += `${pushK.length}`;
      }
      redcirclebgk /= Math.max(4, parseInt(`${clockm}`) >> (Math.min(Math.abs(1), 1)));
       let countdownY = String.fromCharCode(119,95,51,54,95,99,111,110,116,105,110,117,101,0);
       let predictionactivee: Map<any, any> = new Map([[String.fromCharCode(97,112,102,115,95,116,95,51,51,0),793], [String.fromCharCode(105,95,52,53,95,117,110,97,118,97,105,98,108,101,0),432], [String.fromCharCode(115,99,114,117,98,98,105,110,103,95,113,95,52,54,0),277]]);
         predictionactivee = new Map([[`${predictionactivee.size}`, predictionactivee.size ^ countdownY.length]]);
      if (3 > (predictionactivee.size / 2) || 2 > (predictionactivee.size / (Math.max(countdownY.length, 2)))) {
         countdownY += `${predictionactivee.size}`;
      }
      let subtext4 = predictionactivee.size <= 5039297;
      do {
         predictionactivee.set(`${countdownY}`, predictionactivee.size & countdownY.length);
         if (subtext4) {
            break;
         }
      } while ((!countdownY.startsWith(`${predictionactivee.size}`)) && subtext4);
      let minivodR = 8516739 <= countdownY.length;
      do {
         countdownY += `${countdownY.length ^ 3}`;
         if (minivodR) {
            break;
         }
      } while (minivodR && (!countdownY.endsWith(`${predictionactivee.size}`)));
         predictionactivee = new Map([[`${predictionactivee.size}`, countdownY.length]]);
         predictionactivee.set(countdownY, countdownY.length);
      chatroombackground7 -= (parseFloat(`${(stats9 ? 3 : 5) ^ parseInt(`${chatroombackground7}`)}`));
       let feedback7: Map<any, any> = new Map([[String.fromCharCode(105,112,114,101,100,95,97,95,52,57,0),true ], [String.fromCharCode(119,97,116,99,104,101,115,95,101,95,50,55,0),true ]]);
       let orangetickl: Array<any> = [String.fromCharCode(100,101,116,97,105,108,101,100,95,51,95,53,55,0), String.fromCharCode(120,95,57,53,95,99,111,110,102,105,110,101,100,0)];
       let suboutj = 3.0;
      let iconfeedbackj = orangetickl.length <= 8867466;
      do {
          let basketballmatchdetailbgR = String.fromCharCode(99,111,110,99,101,97,108,109,101,110,116,95,99,95,49,48,48,0);
         orangetickl = [basketballmatchdetailbgR.length];
         if (iconfeedbackj) {
            break;
         }
      } while ((1 <= feedback7.size) && iconfeedbackj);
      for (let f = 0; f < 1; f++) {
         feedback7 = new Map([[`${feedback7.size}`, parseInt(`${suboutj}`)]]);
      }
       let cricketm = 4.0;
         feedback7 = new Map([[`${suboutj}`, parseInt(`${cricketm}`)]]);
      if ((suboutj + 5.26) <= 2.98 || 5.26 <= (cricketm + suboutj)) {
          let defaultteamX: Array<any> = [686, 312, 751];
         suboutj *= parseFloat(`${defaultteamX.length}`);
      }
         cricketm /= Math.max(5, 2 * orangetickl.length);
         suboutj /= Math.max(4, parseFloat(`${1 ^ parseInt(`${suboutj}`)}`));
         suboutj += parseFloat(`${3 >> (Math.min(Math.abs(parseInt(`${cricketm}`)), 3))}`);
      let short_sl = 7003566 <= feedback7.size;
      do {
         feedback7 = new Map([[`${orangetickl.length}`, orangetickl.length % (Math.max(1, 7))]]);
         if (short_sl) {
            break;
         }
      } while (short_sl && (4 <= (parseInt(`${suboutj}`) / (Math.max(8, feedback7.size)))));
      producta = new Map([[`${chatroombackground7}`, 2]]);
      redcirclebgk *= (pangleV.length ^ (stats9 ? 5 : 4));
   let template_sgl = 9104766.0 >= downloadedD;
   do {
      downloadedD -= parseFloat(`${settingA | 3}`);
      if (template_sgl) {
         break;
      }
   } while (template_sgl && ((3 ^ settingA) < 5 || (5.14 - downloadedD) < 4.49));
   for (let d = 0; d < 3; d++) {
       let mapping1 = 2;
       let defaultfootballbgX = String.fromCharCode(120,95,56,53,95,115,117,98,118,105,101,119,101,114,0);
       let sporth = false;
       let iconuserY: Map<any, any> = new Map([[String.fromCharCode(109,111,114,101,95,53,95,54,48,0),false ], [String.fromCharCode(109,95,50,55,95,97,121,98,114,0),true ], [String.fromCharCode(117,110,114,101,102,101,114,101,110,99,101,95,97,95,57,54,0),false ]]);
       let backiconmaskW = false;
      for (let m = 0; m < 3; m++) {
         sporth = backiconmaskW || 89 < mapping1;
      }
      while (sporth) {
         sporth = 58 > mapping1;
         break;
      }
      for (let c = 0; c < 1; c++) {
          let yellowtoredw: Array<any> = [406, 533, 835];
          let backwhitem = true;
          let gifgoalbgN: Array<any> = [518, 682, 889];
          let selectedZ = String.fromCharCode(109,101,97,115,117,114,101,115,95,118,95,57,0);
          let subbasketballplayerW = 1.0;
         defaultfootballbgX = `${gifgoalbgN.length * 2}`;
         yellowtoredw.push(1 >> (Math.min(Math.abs(parseInt(`${subbasketballplayerW}`)), 3)));
         backwhitem = yellowtoredw.includes(backwhitem);
         gifgoalbgN = [2];
         selectedZ = `${(String.fromCharCode(67,0) == selectedZ ? selectedZ.length : yellowtoredw.length)}`;
         subbasketballplayerW /= Math.max(1, parseInt(`${subbasketballplayerW}`));
      }
          let android1 = String.fromCharCode(117,95,56,56,95,102,111,99,117,115,97,98,108,101,0);
         defaultfootballbgX = `${mapping1 % (Math.max(1, 10))}`;
         android1 += `${android1.length}`;
          let questiconS: Map<any, any> = new Map([[String.fromCharCode(118,95,49,52,95,115,117,98,102,114,97,109,101,115,0),308], [String.fromCharCode(105,95,51,95,100,105,109,101,110,115,105,111,110,0),806]]);
          let componentsU = String.fromCharCode(116,105,109,101,105,110,102,111,114,99,101,95,115,95,52,49,0);
         defaultfootballbgX = `${(1 | (sporth ? 5 : 3))}`;
         questiconS.set(componentsU, 3);
         componentsU = `${questiconS.size}`;
      let homeactived = backiconmaskW ? !backiconmaskW : backiconmaskW;
      do {
         backiconmaskW = 14 == mapping1 && defaultfootballbgX.length == 14;
         if (homeactived) {
            break;
         }
      } while (homeactived && (2 == defaultfootballbgX.length && backiconmaskW));
      while (!backiconmaskW) {
         backiconmaskW = iconuserY.get(`${mapping1}`) == null;
         break;
      }
         mapping1 += mapping1;
          let redscoreballT = 4;
          let libavfilter2: Array<any> = [103, 960];
         iconuserY.set(defaultfootballbgX, libavfilter2.length);
         redscoreballT &= redscoreballT;
         libavfilter2.push(2 & redscoreballT);
         defaultfootballbgX = "3";
         iconuserY = new Map([[`${backiconmaskW}`, ((backiconmaskW ? 1 : 4) % (Math.max(mapping1, 1)))]]);
          let unimplementedviewx = 3.0;
         sporth = mapping1 < 70 || backiconmaskW;
         unimplementedviewx += 3 - parseInt(`${unimplementedviewx}`);
      if (2 <= mapping1) {
          let defaultteamN: Array<any> = [958, 333];
          let libyoga1: Array<any> = [542, 38];
          let mapbufferX = String.fromCharCode(99,104,114,111,109,97,107,101,121,95,118,95,55,51,0);
          let phonem: Array<any> = [910, 401, 342];
          let giftbuttonb = false;
         mapping1 ^= 1;
         defaultteamN.push((String.fromCharCode(98,0) == mapbufferX ? mapbufferX.length : phonem.length));
         libyoga1 = [phonem.length & 1];
         giftbuttonb = 100 <= phonem.length;
      }
      let predictionwin8 = backiconmaskW ? !backiconmaskW : backiconmaskW;
      do {
          let footballfiledlayout2 = String.fromCharCode(102,95,52,51,95,97,108,103,0);
          let leftf: Array<any> = [141, 768];
          let iconrightorangeu: Array<any> = [970, 465];
         backiconmaskW = sporth;
         footballfiledlayout2 = `${footballfiledlayout2.length / 1}`;
         leftf.push(leftf.length + footballfiledlayout2.length);
         iconrightorangeu = [leftf.length << (Math.min(iconrightorangeu.length, 3))];
         if (predictionwin8) {
            break;
         }
      } while ((defaultfootballbgX.includes(`${backiconmaskW}`)) && predictionwin8);
         iconuserY.set(`${sporth}`, 2);
      confirmationu /= Math.max(parseFloat(`${1}`), 5);
   }
   if ((pangleV.length + parseInt(`${redcirclebgk}`)) == 1) {
      pangleV = `${1 | overlayH.length}`;
   }
       let textlayoutmanagerf = String.fromCharCode(113,112,113,115,99,97,108,101,95,115,95,54,55,0);
       let eighteenE = true;
       let bootsplashu = 2;
          let type_7h = String.fromCharCode(101,120,99,108,117,100,101,100,95,118,95,56,0);
          let whitevideolive6 = 2.0;
          let iconshareG = true;
         bootsplashu += 1;
         type_7h = `${parseInt(`${whitevideolive6}`) >> (Math.min(4, Math.abs(1)))}`;
         whitevideolive6 /= Math.max((parseFloat(`${String.fromCharCode(86,0) == type_7h ? type_7h.length : parseInt(`${whitevideolive6}`)}`)), 5);
         iconshareG = !iconshareG;
      for (let h = 0; h < 2; h++) {
          let iconcalendarH: Array<any> = [161, 684];
         eighteenE = bootsplashu < 78;
         iconcalendarH = [2 - iconcalendarH.length];
      }
          let smallsoundW = String.fromCharCode(119,105,110,100,111,119,101,100,95,102,95,57,0);
          let overlayG = String.fromCharCode(114,101,112,114,101,115,101,110,116,97,116,105,111,110,115,95,49,95,53,57,0);
          let cancelH = true;
         bootsplashu %= Math.max(4, ((eighteenE ? 3 : 2) + 2));
         smallsoundW += `${smallsoundW.length & overlayG.length}`;
         overlayG += `${((cancelH ? 4 : 5) | overlayG.length)}`;
         cancelH = overlayG.length > 95 && cancelH;
      if (eighteenE) {
         eighteenE = 84 < bootsplashu && !eighteenE;
      }
         eighteenE = textlayoutmanagerf.length <= 66 && !eighteenE;
       let analyticsV = true;
       let armvao: Array<any> = [944, 954, 446];
         analyticsV = textlayoutmanagerf.length < 16;
         analyticsV = !textlayoutmanagerf.endsWith(`${eighteenE}`);
      confirmationu *= parseFloat(`${producta.size}`);
      stats9 = pangleV.length >= 98;
   if (3.60 == redcirclebgk) {
       let tempnodataF = true;
       let shootq = String.fromCharCode(100,95,50,54,95,115,97,98,101,114,0);
       let panglex = String.fromCharCode(111,95,49,53,95,105,108,108,101,103,97,108,0);
      if (panglex == shootq) {
         shootq += `${((tempnodataF ? 4 : 3) << (Math.min(shootq.length, 1)))}`;
      }
         shootq += `${panglex.length}`;
         panglex = `${((tempnodataF ? 5 : 5) + 3)}`;
         shootq = `${((tempnodataF ? 1 : 2))}`;
      while (tempnodataF && 4 >= shootq.length) {
         shootq = `${panglex.length}`;
         break;
      }
         shootq = `${(shootq == String.fromCharCode(65,0) ? (tempnodataF ? 5 : 2) : shootq.length)}`;
         panglex += `${(1 | (tempnodataF ? 4 : 2))}`;
      let modelB = tempnodataF ? !tempnodataF : tempnodataF;
      do {
          let statsnomoredatak: Array<any> = [String.fromCharCode(115,121,109,98,111,108,105,99,97,116,101,100,95,115,95,49,51,0), String.fromCharCode(103,101,111,99,111,100,101,114,95,51,95,55,55,0), String.fromCharCode(112,95,55,56,95,105,110,102,117,114,97,0)];
         tempnodataF = statsnomoredatak.length > 65;
         if (modelB) {
            break;
         }
      } while ((!tempnodataF) && modelB);
       let baiduadsx: Map<any, any> = new Map([[String.fromCharCode(104,95,49,50,95,110,111,110,110,117,108,108,105,110,99,111,109,105,110,103,0),520], [String.fromCharCode(105,95,51,48,95,109,111,100,97,108,108,121,0),273], [String.fromCharCode(112,97,114,101,110,116,104,101,115,105,115,95,100,95,49,48,48,0),406]]);
       let screenc: Map<any, any> = new Map([[String.fromCharCode(109,105,100,110,105,103,104,116,95,120,95,49,53,0),411], [String.fromCharCode(101,95,51,56,0),334]]);
      downloadedD *= parseFloat(`${3}`);
   }
   let auto_xrn = producta.size >= 7848354;
   do {
      producta = new Map([[`${redcirclebgk}`, 2]]);
      if (auto_xrn) {
         break;
      }
   } while (auto_xrn && (pangleV.startsWith(`${producta.size}`)));
      confirmationu *= parseFloat(`${overlayH.length}`);
       let scoreO = 0;
       let googleA = String.fromCharCode(114,101,115,101,116,95,120,95,50,51,0);
       let teamdetailsbgc = String.fromCharCode(115,95,53,49,95,116,111,112,109,111,115,116,0);
       let arrowdownP = String.fromCharCode(99,116,120,95,121,95,49,51,0);
       let backiconmaskm = String.fromCharCode(118,120,119,111,114,107,115,95,103,95,53,57,0);
      for (let b = 0; b < 3; b++) {
          let v_manager7: Array<any> = [889, 464, 239];
          let roomq = String.fromCharCode(97,95,53,50,95,101,105,116,104,101,114,0);
          let membert = 2;
         backiconmaskm += "2";
         v_manager7 = [1 - roomq.length];
         roomq += `${v_manager7.length}`;
         membert *= 2 + v_manager7.length;
      }
         teamdetailsbgc = `${teamdetailsbgc.length}`;
      while (backiconmaskm.endsWith(arrowdownP)) {
         backiconmaskm += `${(arrowdownP == String.fromCharCode(51,0) ? arrowdownP.length : scoreO)}`;
         break;
      }
      for (let n = 0; n < 1; n++) {
          let baiduk = 4.0;
          let shrinkd: Array<any> = [String.fromCharCode(111,95,52,53,95,112,97,99,107,101,116,104,101,97,100,101,114,0), String.fromCharCode(108,97,116,101,115,116,95,111,95,51,0)];
          let sharewhiteI = true;
          let searchbarQ = 5.0;
          let libmapbufferjnie = String.fromCharCode(111,95,51,49,95,98,121,114,121,105,0);
         teamdetailsbgc = `${scoreO % 1}`;
         baiduk /= Math.max(5, ((sharewhiteI ? 5 : 3) / (Math.max(8, shrinkd.length))));
         shrinkd = [((sharewhiteI ? 1 : 5) | 3)];
         searchbarQ /= Math.max(parseFloat(`${parseInt(`${baiduk}`) % (Math.max(9, libmapbufferjnie.length))}`), 3);
         libmapbufferjnie = `${3 ^ libmapbufferjnie.length}`;
      }
      while (teamdetailsbgc.includes(`${arrowdownP.length}`)) {
          let iconmoreZ = 1.0;
          let ewardedb = String.fromCharCode(115,117,112,101,114,95,50,95,49,51,0);
          let redirectC = 4.0;
         teamdetailsbgc = `${parseInt(`${redirectC}`) + 1}`;
         iconmoreZ += parseFloat(`${1}`);
         ewardedb += `${ewardedb.length}`;
         redirectC += parseFloat(`${ewardedb.length}`);
         break;
      }
         googleA = "3";
          let huaweio = String.fromCharCode(111,112,101,110,105,110,103,95,51,95,57,49,0);
         scoreO <<= Math.min(4, Math.abs(3));
         huaweio = `${huaweio.length}`;
       let giflivestreaming7: Map<any, any> = new Map([[String.fromCharCode(99,104,114,111,109,97,116,105,99,95,101,95,54,52,0),false ], [String.fromCharCode(115,105,110,107,115,95,113,95,49,55,0),false ]]);
       let renderD: Map<any, any> = new Map([[String.fromCharCode(112,95,52,57,95,114,101,116,114,97,110,115,109,105,116,115,0),true ], [String.fromCharCode(108,95,56,52,95,115,101,109,97,112,104,111,114,101,0),false ]]);
      confirmationu -= (parseFloat(`${(stats9 ? 2 : 4) ^ parseInt(`${chatroombackground7}`)}`));
      pangleV = `${parseInt(`${chatroombackground7}`) | overlayH.length}`;
       let sharedE = 0;
          let singley: Map<any, any> = new Map([[String.fromCharCode(98,95,49,95,98,111,108,100,0),339], [String.fromCharCode(121,95,49,57,95,115,100,107,0),629]]);
          let backiconmaskt = String.fromCharCode(101,95,51,95,117,110,108,111,99,107,0);
          let downarrowy = 3;
         sharedE <<= Math.min(Math.abs(1), 3);
         singley.set(`${backiconmaskt}`, 1);
         backiconmaskt += `${backiconmaskt.length ^ 1}`;
         downarrowy /= Math.max(2, 4);
      let iconplayi = sharedE >= 5933043;
      do {
         sharedE += 2;
         if (iconplayi) {
            break;
         }
      } while (iconplayi && (3 == (2 - sharedE) || 4 == (2 - sharedE)));
       let tempnodatagifn: Map<any, any> = new Map([[String.fromCharCode(102,108,97,99,100,115,112,95,51,95,51,56,0),true ], [String.fromCharCode(100,97,115,104,101,110,99,95,108,95,49,57,0),true ]]);
       let iconwatchnowE: Map<any, any> = new Map([[String.fromCharCode(112,111,115,116,112,114,111,99,114,101,115,95,120,95,56,54,0),602], [String.fromCharCode(110,95,53,95,103,114,97,116,105,99,117,108,101,0),203]]);
      settingA |= 3 + pangleV.length;
   for (let g = 0; g < 2; g++) {
      confirmationu /= Math.max(parseFloat(`${pangleV.length / (Math.max(8, parseInt(`${redcirclebgk}`)))}`), 1);
   }
      redcirclebgk *= 3;
       let libreactnativeblobL = String.fromCharCode(115,95,51,52,95,100,101,99,111,100,101,0);
       let awayteamfieldC = 2.0;
      let inactivec = libreactnativeblobL.length <= 6119601;
      do {
         libreactnativeblobL += `${parseInt(`${awayteamfieldC}`)}`;
         if (inactivec) {
            break;
         }
      } while (inactivec && (2 < (libreactnativeblobL.length + 4) || 5 < (4 + parseInt(`${awayteamfieldC}`))));
         libreactnativeblobL += `${parseInt(`${awayteamfieldC}`) % (Math.max(libreactnativeblobL.length, 7))}`;
      while (!libreactnativeblobL.startsWith(`${awayteamfieldC}`)) {
          let header6 = String.fromCharCode(115,110,97,112,115,104,111,116,95,49,95,56,55,0);
          let gifgoalbg7 = 2.0;
          let recommendationD = 3;
         awayteamfieldC /= Math.max(header6.length & 2, 4);
         header6 = `${2 ^ parseInt(`${gifgoalbg7}`)}`;
         gifgoalbg7 += parseFloat(`${parseInt(`${gifgoalbg7}`) / (Math.max(6, recommendationD))}`);
         recommendationD >>= Math.min(1, Math.abs(parseInt(`${gifgoalbg7}`)));
         break;
      }
      while (3.28 == (3.52 * awayteamfieldC) || (libreactnativeblobL.length / (Math.max(1, 8))) == 4) {
         libreactnativeblobL = "3";
         break;
      }
      while (libreactnativeblobL.endsWith(`${awayteamfieldC}`)) {
         awayteamfieldC /= Math.max(1 | parseInt(`${awayteamfieldC}`), 4);
         break;
      }
      if (!libreactnativeblobL.startsWith(`${awayteamfieldC}`)) {
         libreactnativeblobL += `${libreactnativeblobL.length}`;
      }
      stats9 = !stats9;
      redcirclebgk -= 1;
   while ((settingA * 2) < 5 || 4.56 < (redcirclebgk + 4.70)) {
       let issubl = String.fromCharCode(112,114,101,115,115,117,114,101,95,100,95,55,50,0);
       let renderK: Array<any> = [168, 818, 839];
       let tempnodataX = 4.0;
      let fastforwards = 8479367 <= issubl.length;
      do {
         issubl = `${renderK.length}`;
         if (fastforwards) {
            break;
         }
      } while ((4 == (1 | renderK.length)) && fastforwards);
         tempnodataX *= parseInt(`${tempnodataX}`) / (Math.max(renderK.length, 2));
      if (5 == (issubl.length >> (Math.min(Math.abs(3), 2)))) {
         issubl = `${renderK.length << (Math.min(Math.abs(3), 4))}`;
      }
      for (let q = 0; q < 2; q++) {
         tempnodataX /= Math.max(parseInt(`${tempnodataX}`) + renderK.length, 4);
      }
       let fullscreenminh = String.fromCharCode(109,95,56,57,95,97,116,114,105,109,0);
         fullscreenminh += `${renderK.length}`;
         renderK = [renderK.length & parseInt(`${tempnodataX}`)];
         renderK.push(issubl.length);
       let statisticsinactiveS = String.fromCharCode(110,111,114,109,97,108,105,122,101,100,95,121,95,53,50,0);
      settingA <<= Math.min(2, Math.abs(parseInt(`${redcirclebgk}`) & 3));
      break;
   }
      downloadedD += parseFloat(`${3}`);
      confirmationu *= parseFloat(`${1}`);
   let robotoj = chatroombackground7 <= 5339442.0;
   do {
      chatroombackground7 *= (parseFloat(`${String.fromCharCode(84,0) == pangleV ? (stats9 ? 2 : 4) : pangleV.length}`));
      if (robotoj) {
         break;
      }
   } while (robotoj && (5.55 >= (chatroombackground7 + 5.23) && 5.20 >= (5.23 + chatroombackground7)));
      rulesz.set(pangleV, pangleV.length - 1);
      stats9 = pangleV.startsWith(`${stats9}`);
   if (stats9) {
      stats9 = 5.1 == downloadedD;
   }
   if ((rulesz.size * 1) <= 4 && (chatroombackground7 + parseFloat(`${rulesz.size}`)) <= 4.36) {
      rulesz.set(`${settingA}`, 1 << (Math.min(3, Math.abs(settingA))));
   }
   for (let s = 0; s < 1; s++) {
      producta.set(overlayH, overlayH.length);
   }
   let whiteanimationlivei = 6306143.0 <= redcirclebgk;
   do {
       let libfbjnis = String.fromCharCode(102,111,114,109,97,116,115,95,101,95,55,56,0);
       let largesoundd: Array<any> = [70, 919, 388];
         libfbjnis = `${2 * libfbjnis.length}`;
      let reactnativeultimatelistviewU = 9375177 <= largesoundd.length;
      do {
         largesoundd = [libfbjnis.length];
         if (reactnativeultimatelistviewU) {
            break;
         }
      } while (reactnativeultimatelistviewU && ((largesoundd.length / (Math.max(1, libfbjnis.length))) >= 1 && (largesoundd.length / (Math.max(libfbjnis.length, 7))) >= 1));
      for (let a = 0; a < 2; a++) {
          let zhubog: Array<any> = [String.fromCharCode(106,95,51,95,114,101,109,101,109,98,101,114,101,100,0), String.fromCharCode(115,117,98,99,99,95,102,95,53,54,0)];
          let u_hashF = 3.0;
          let mutedc = 2.0;
          let yellowc: Array<any> = [525, 880];
          let zhubo3 = true;
         largesoundd.push(parseInt(`${u_hashF}`) | 2);
         zhubog = [zhubog.length ^ parseInt(`${mutedc}`)];
         u_hashF -= parseFloat(`${zhubog.length}`);
         mutedc /= Math.max(yellowc.length >> (Math.min(2, Math.abs(parseInt(`${mutedc}`)))), 2);
         yellowc = [((zhubo3 ? 5 : 2) % 1)];
      }
      while (4 < (largesoundd.length % 1) || 1 < (largesoundd.length % (Math.max(libfbjnis.length, 8)))) {
         libfbjnis += `${largesoundd.length >> (Math.min(libfbjnis.length, 4))}`;
         break;
      }
         largesoundd = [largesoundd.length];
         largesoundd = [largesoundd.length + libfbjnis.length];
      redcirclebgk += 2;
      if (whiteanimationlivei) {
         break;
      }
   } while ((rulesz.get(`${redcirclebgk}`) != null) && whiteanimationlivei);
       let videobufferloadingf = 0.0;
       let register_h9k: Array<any> = [669, 297];
       let incidentZ: Array<any> = [179, 803];
      if (3 > (incidentZ.length % 3)) {
         register_h9k.push(parseInt(`${videobufferloadingf}`) * 2);
      }
          let bellremindera = String.fromCharCode(97,99,99,111,114,100,105,110,103,95,121,95,49,52,0);
          let giflivestreamingA = 1.0;
         register_h9k = [bellremindera.length >> (Math.min(Math.abs(1), 1))];
         bellremindera = "1";
         giflivestreamingA -= 2;
      if (5 <= register_h9k.length) {
         videobufferloadingf /= Math.max(3, parseFloat(`${1 | register_h9k.length}`));
      }
      let bellreminder5 = videobufferloadingf >= 7149640.0;
      do {
         videobufferloadingf *= parseFloat(`${2 << (Math.min(1, incidentZ.length))}`);
         if (bellreminder5) {
            break;
         }
      } while (bellreminder5 && ((videobufferloadingf + parseFloat(`${register_h9k.length}`)) >= 2.30 || 2.30 >= (parseFloat(`${register_h9k.length}`) + videobufferloadingf)));
         register_h9k.push(2 & register_h9k.length);
      for (let v = 0; v < 1; v++) {
         incidentZ = [register_h9k.length ^ 1];
      }
      if (parseFloat(`${register_h9k.length}`) == videobufferloadingf) {
         videobufferloadingf -= parseFloat(`${incidentZ.length}`);
      }
       let subinc = String.fromCharCode(115,95,51,56,95,108,105,98,121,117,118,0);
      if (2 <= (1 << (Math.min(4, register_h9k.length))) && 4 <= (register_h9k.length % (Math.max(1, 8)))) {
         videobufferloadingf -= parseFloat(`${2}`);
      }
      rulesz = new Map([[`${register_h9k.length}`, pangleV.length >> (Math.min(5, register_h9k.length))]]);
   while (rulesz.get(`${redcirclebgk}`) == null) {
      redcirclebgk += settingA / (Math.max(3, parseInt(`${downloadedD}`)));
      break;
   }
      downloadedD -= parseFloat(`${1 << (Math.min(Math.abs(parseInt(`${chatroombackground7}`)), 1))}`);
      positionfieldW -= parseFloat(`${pangleV.length}`);
      downloadedD /= Math.max(parseFloat(`${1 - rulesz.size}`), 5);
      settingA *= rulesz.size;
 setIosCustomToastIsVisible(true) }, 1000)

  const ranges = [
    ...Array(
      episodes?.url_count === undefined
        ? 0
        : Math.ceil(episodes.url_count / EPISODE_RANGE_SIZE)
    ).keys(),
  ].map(
    (x) =>
      `${x * EPISODE_RANGE_SIZE + 1}-${Math.min(
        (x + 1) * EPISODE_RANGE_SIZE,
        episodes?.url_count === undefined
          ? (x + 1) * EPISODE_RANGE_SIZE - 1
          : episodes?.url_count
      )}`
  );

  const [currentIndex, setCurrentIndex] = useState(
    Math.floor(activeEpisode / EPISODE_RANGE_SIZE)
  );
  const showEpisodeRangeStart = useMemo(
    () => currentIndex * EPISODE_RANGE_SIZE,
    [activeEpisode, currentIndex]
  );

  const showEpisodeRangeEnd = useMemo(
    () =>
      Math.min(
        showEpisodeRangeStart + EPISODE_RANGE_SIZE,
        episodes
          ? episodes.url_count
          : showEpisodeRangeStart + EPISODE_RANGE_SIZE
      ),
    [episodes, showEpisodeRangeStart]
  );

  const displayEpisodes = useMemo(() => {
       let backiconmaskU = false;
    let mbjscommonX: Array<any> = [907, 831, 265];
    let arrowselectdowns = String.fromCharCode(101,120,112,114,95,50,95,49,49,0);
    let eighteenB = String.fromCharCode(109,97,107,101,110,97,110,95,121,95,52,49,0);
    let baiduads5 = true;
    let mime2 = 0.0;
    let downloaderE: Map<any, any> = new Map([[String.fromCharCode(119,95,50,57,95,117,110,97,114,99,104,105,118,101,100,0),String.fromCharCode(100,111,119,110,115,97,109,112,108,105,110,103,95,111,95,51,54,0)], [String.fromCharCode(120,95,56,56,95,99,97,108,99,117,108,97,116,105,110,103,0),String.fromCharCode(97,118,101,114,114,111,114,95,114,95,57,53,0)], [String.fromCharCode(108,97,98,101,108,101,100,95,54,95,57,55,0),String.fromCharCode(97,95,55,51,95,116,111,108,101,114,97,110,99,101,0)]]);
    let assistv = true;
    let loadingO = String.fromCharCode(117,95,57,57,95,112,114,101,115,101,110,116,101,114,0);
   if (1 <= (downloaderE.size & 1)) {
      downloaderE = new Map([[`${downloaderE.size}`, 2 % (Math.max(8, mbjscommonX.length))]]);
   }
   let tooltipsP = backiconmaskU ? !backiconmaskU : backiconmaskU;
   do {
      backiconmaskU = (!backiconmaskU ? assistv : backiconmaskU);
      if (tooltipsP) {
         break;
      }
   } while ((!backiconmaskU) && tooltipsP);
   while (5.43 >= (mime2 * 1.97)) {
      baiduads5 = 3 <= loadingO.length;
      break;
   }
      eighteenB = `${(2 + (assistv ? 3 : 3))}`;
      mbjscommonX = [(String.fromCharCode(53,0) == arrowselectdowns ? arrowselectdowns.length : downloaderE.size)];
       let reminderR = 0;
       let dependencyA = 0.0;
       let modulesv = 3.0;
      for (let o = 0; o < 3; o++) {
         dependencyA += 1;
      }
          let iconarrowrightblackY = String.fromCharCode(110,105,98,95,50,95,52,48,0);
          let heart7 = String.fromCharCode(112,95,57,51,95,114,101,99,111,109,98,105,110,101,0);
          let notificationfillemptyA = 1.0;
         reminderR &= iconarrowrightblackY.length;
         iconarrowrightblackY = `${parseInt(`${notificationfillemptyA}`)}`;
         heart7 += `${heart7.length}`;
         notificationfillemptyA /= Math.max(parseFloat(`${2 + heart7.length}`), 4);
      downloaderE.set(`${mime2}`, (loadingO == String.fromCharCode(84,0) ? loadingO.length : parseInt(`${mime2}`)));

    const eps = episodes?.urls?.slice(
      showEpisodeRangeStart,
      showEpisodeRangeEnd
    );

      assistv = !baiduads5 || eighteenB.length == 72;
   while ((loadingO.length | mbjscommonX.length) >= 3 && (loadingO.length | 3) >= 5) {
      mbjscommonX.push(((backiconmaskU ? 5 : 1) - mbjscommonX.length));
      break;
   }
       let renewQ = 4.0;
         renewQ += parseFloat(`${1 - parseInt(`${renewQ}`)}`);
         renewQ /= Math.max(parseFloat(`${parseInt(`${renewQ}`) >> (Math.min(3, Math.abs(parseInt(`${renewQ}`))))}`), 3);
      for (let f = 0; f < 1; f++) {
          let eactO = String.fromCharCode(104,97,114,100,119,97,114,101,95,106,95,53,49,0);
          let iconbellactiveu = true;
         renewQ *= parseFloat(`${3 >> (Math.min(1, eactO.length))}`);
         eactO = "2";
      }
      eighteenB = `${1 & parseInt(`${renewQ}`)}`;
      assistv = mbjscommonX.length < 41;
   for (let e = 0; e < 3; e++) {
      mime2 *= (parseFloat(`${(baiduads5 ? 4 : 3) * (assistv ? 2 : 3)}`));
   }
   if ((mime2 + 2.83) > 2.70) {
       let routerR = 1.0;
         routerR /= Math.max(1, parseFloat(`${1 * parseInt(`${routerR}`)}`));
      while (routerR < 1.30) {
          let footballtrophyq = String.fromCharCode(109,101,109,115,101,116,95,55,95,52,55,0);
         routerR -= parseFloat(`${1}`);
         footballtrophyq = `${footballtrophyq.length >> (Math.min(Math.abs(3), 5))}`;
         break;
      }
      let libfb7 = routerR <= 8289157.0;
      do {
          let defaultlogoC = 0;
          let signinupp = 2;
          let backiconS = 4.0;
          let sharede = 4.0;
         routerR /= Math.max(3, parseFloat(`${3 << (Math.min(Math.abs(parseInt(`${routerR}`)), 5))}`));
         defaultlogoC <<= Math.min(2, Math.abs(parseInt(`${backiconS}`) | parseInt(`${sharede}`)));
         signinupp *= defaultlogoC;
         backiconS /= Math.max(1, 2 ^ signinupp);
         sharede *= defaultlogoC | parseInt(`${sharede}`);
         if (libfb7) {
            break;
         }
      } while ((5.72 == (2 / (Math.max(6, routerR)))) && libfb7);
      baiduads5 = parseFloat(`${mbjscommonX.length}`) > mime2;
   }

    return eps;
  }, [showEpisodeRangeStart, showEpisodeRangeEnd, episodes]);

  const handleContainerLayout = (e) => {
       let foundu = String.fromCharCode(121,95,56,53,95,118,100,101,99,0);
    let analytict: Map<any, any> = new Map([[String.fromCharCode(120,95,54,48,95,108,97,110,103,0),816], [String.fromCharCode(109,98,102,105,108,116,101,114,95,110,95,54,54,0),452]]);
    let t_unlock5 = String.fromCharCode(104,101,108,112,95,98,95,52,56,0);
    let orangetick0: Map<any, any> = new Map([[String.fromCharCode(115,112,105,110,110,101,114,95,112,95,56,57,0),false ], [String.fromCharCode(116,95,54,49,95,110,111,99,104,101,99,107,0),true ]]);
    let default_04: Array<any> = [269, 96];
    let sentrye = 0.0;
    let arrowL = String.fromCharCode(116,105,109,101,118,97,108,95,102,95,52,52,0);
    let iconrefreshC = 0;
    let videoX: Map<any, any> = new Map([[String.fromCharCode(112,104,111,116,111,115,95,107,95,50,54,0),104], [String.fromCharCode(115,95,52,57,95,115,105,108,101,110,99,101,100,0),68], [String.fromCharCode(118,115,102,114,97,109,101,95,51,95,53,55,0),277]]);
    let confirmationc = String.fromCharCode(112,95,56,55,95,99,111,117,110,116,101,114,0);
   let searchF = 6906745 >= orangetick0.size;
   do {
       let weatherK = String.fromCharCode(102,105,110,97,108,105,122,101,100,95,111,95,57,57,0);
      if (weatherK == String.fromCharCode(109,0)) {
          let iconarrowrightblackw = String.fromCharCode(105,95,51,54,95,110,112,97,116,99,104,101,115,0);
          let gifta = true;
          let promotionh = 5.0;
          let textinputc = 4;
          let analyticd = 2.0;
         weatherK = `${parseInt(`${promotionh}`) % (Math.max(10, textinputc))}`;
         iconarrowrightblackw = `${(iconarrowrightblackw == String.fromCharCode(52,0) ? iconarrowrightblackw.length : parseInt(`${analyticd}`))}`;
         gifta = String.fromCharCode(68,0) == iconarrowrightblackw;
         promotionh += parseFloat(`${2 ^ parseInt(`${analyticd}`)}`);
         textinputc ^= 2 / (Math.max(parseInt(`${analyticd}`), 6));
      }
      for (let d = 0; d < 3; d++) {
         weatherK += `${(String.fromCharCode(101,0) == weatherK ? weatherK.length : weatherK.length)}`;
      }
       let defaultpredictionprofileG = 0.0;
      orangetick0 = new Map([[t_unlock5, t_unlock5.length]]);
      if (searchF) {
         break;
      }
   } while (searchF && (default_04.length == 3));
       let libreactL = 5;
       let playlistu = 3.0;
       let unimplementedviewj = true;
          let penaltyN: Map<any, any> = new Map([[String.fromCharCode(114,101,115,101,101,107,95,110,95,48,0),118], [String.fromCharCode(99,97,112,97,98,105,108,105,116,121,95,107,95,53,0),733], [String.fromCharCode(105,110,102,101,114,101,100,95,105,95,52,0),652]]);
          let episodesy: Map<any, any> = new Map([[String.fromCharCode(97,95,49,53,95,115,112,97,99,101,115,0),String.fromCharCode(121,95,49,51,95,112,114,111,106,101,99,116,101,100,0)], [String.fromCharCode(120,116,101,110,115,105,111,110,95,120,95,56,52,0),String.fromCharCode(97,114,99,104,105,118,101,114,95,107,95,52,49,0)]]);
         unimplementedviewj = ((episodesy.size + (!unimplementedviewj ? episodesy.size : 100)) == 49);
         penaltyN = new Map([[`${penaltyN.size}`, penaltyN.size % (Math.max(penaltyN.size, 6))]]);
         playlistu *= parseFloat(`${3 >> (Math.min(Math.abs(parseInt(`${playlistu}`)), 3))}`);
         unimplementedviewj = libreactL > 40 || unimplementedviewj;
          let footballfiledlayoutP = 0;
         playlistu *= parseFloat(`${2}`);
         footballfiledlayoutP |= footballfiledlayoutP % 1;
          let floater9 = true;
          let historyt = 2.0;
         libreactL >>= Math.min(3, Math.abs(parseInt(`${playlistu}`) ^ 1));
         floater9 = !floater9 && 66.68 < historyt;
         historyt += ((floater9 ? 5 : 1) & parseInt(`${historyt}`));
         unimplementedviewj = libreactL > 44 || playlistu > 52.91;
          let anner5 = 2.0;
          let submita: Array<any> = [935, 897];
          let largeC: Array<any> = [701, 756];
         unimplementedviewj = submita.includes(libreactL);
         anner5 /= Math.max(parseFloat(`${largeC.length}`), 3);
         submita.push(1);
         largeC = [parseInt(`${anner5}`)];
          let arrowrightwithtaile = 0;
          let eventR: Map<any, any> = new Map([[String.fromCharCode(107,95,56,54,95,103,115,116,114,105,110,103,0),false ], [String.fromCharCode(99,104,101,99,107,115,117,109,95,103,95,53,56,0),false ], [String.fromCharCode(116,95,53,49,95,115,111,99,114,101,97,116,101,0),false ]]);
          let collectionI = String.fromCharCode(105,95,53,55,95,104,97,108,100,99,108,117,116,0);
         libreactL <<= Math.min(5, Math.abs(eventR.size));
         arrowrightwithtaile -= collectionI.length;
         eventR.set(`${arrowrightwithtaile}`, arrowrightwithtaile / 3);
         collectionI += `${arrowrightwithtaile * collectionI.length}`;
       let sentryt = 4.0;
       let downarrown = 5.0;
      analytict.set(foundu, libreactL >> (Math.min(Math.abs(2), 3)));
   let privacyJ = 7405273 <= iconrefreshC;
   do {
       let register_qg = String.fromCharCode(108,111,103,111,117,114,108,95,121,95,55,55,0);
       let holdery = 1.0;
      while (register_qg.length == holdery) {
         holdery -= parseInt(`${holdery}`);
         break;
      }
       let images8 = false;
       let chatK = true;
          let regengb: Map<any, any> = new Map([[String.fromCharCode(99,97,118,115,105,100,99,116,95,48,95,52,55,0),true ], [String.fromCharCode(97,109,116,95,109,95,56,48,0),false ]]);
         images8 = holdery > 31.19 || images8;
         regengb = new Map([[`${regengb.size}`, regengb.size % (Math.max(regengb.size, 6))]]);
         register_qg = `${register_qg.length & 2}`;
          let libavutilb = 0;
          let greenf = String.fromCharCode(111,95,54,53,95,99,111,110,116,114,111,108,108,101,114,0);
         chatK = register_qg.length >= 87;
         libavutilb ^= (greenf == String.fromCharCode(79,0) ? libavutilb : greenf.length);
      if (4 > register_qg.length || chatK) {
         chatK = images8 || 100.73 < holdery;
      }
      iconrefreshC ^= videoX.size;
      if (privacyJ) {
         break;
      }
   } while ((!Array.from(videoX.keys()).includes(`${iconrefreshC}`)) && privacyJ);
   if (!t_unlock5.startsWith(`${arrowL.length}`)) {
      arrowL = `${t_unlock5.length * foundu.length}`;
   }
   let weiboF = foundu == String.fromCharCode(50,95,117,114,116,54,113,109,100,108,0);
   do {
      foundu = `${t_unlock5.length}`;
      if (weiboF) {
         break;
      }
   } while ((t_unlock5.endsWith(`${foundu.length}`)) && weiboF);
       let questicon_ = String.fromCharCode(122,105,112,102,95,104,95,52,50,0);
         questicon_ += `${1 | questicon_.length}`;
          let iconsaveimageR = 5.0;
          let promotionN = true;
         questicon_ += `${parseInt(`${iconsaveimageR}`) / 2}`;
         iconsaveimageR *= 2;
         questicon_ = "1";
      sentrye /= Math.max(analytict.size, 1);
   for (let a = 0; a < 3; a++) {
       let icontransferclube = 1.0;
       let javaz = 1.0;
       let chinaf = String.fromCharCode(114,95,52,95,115,112,97,99,101,114,0);
       let start = String.fromCharCode(111,102,102,105,99,105,97,108,95,57,95,53,48,0);
       let smallsoundo = 0;
         icontransferclube -= (parseFloat(`${chinaf == String.fromCharCode(76,0) ? start.length : chinaf.length}`));
      let update_33O = icontransferclube >= 6704111.0;
      do {
          let subbasketballplayer0 = String.fromCharCode(115,95,56,54,95,102,99,109,117,108,0);
          let resendw = 1;
          let homeinactiver: Array<any> = [405, 468, 556];
          let iconwatchnowx: Array<any> = [String.fromCharCode(116,95,49,48,48,95,109,101,109,117,116,105,108,0), String.fromCharCode(111,103,103,112,97,99,107,95,55,95,54,51,0)];
          let schedulerO = String.fromCharCode(110,95,48,95,112,105,120,109,97,112,0);
         icontransferclube += parseFloat(`${3 | schedulerO.length}`);
         subbasketballplayer0 += `${subbasketballplayer0.length % (Math.max(8, iconwatchnowx.length))}`;
         resendw %= Math.max(1, subbasketballplayer0.length * 1);
         homeinactiver.push(homeinactiver.length);
         iconwatchnowx.push(2 | resendw);
         schedulerO = `${1 % (Math.max(7, homeinactiver.length))}`;
         if (update_33O) {
            break;
         }
      } while (((5.1 - javaz) <= 3.8 || 3.52 <= (5.1 - javaz)) && update_33O);
          let activityr = String.fromCharCode(112,97,116,104,109,116,117,95,115,95,56,49,0);
          let inviteZ = String.fromCharCode(97,95,49,54,95,104,111,115,116,110,97,109,101,0);
         start = `${3 - smallsoundo}`;
         activityr = "2";
         inviteZ = `${inviteZ.length * activityr.length}`;
         icontransferclube -= parseFloat(`${1}`);
      for (let m = 0; m < 3; m++) {
         smallsoundo >>= Math.min(Math.abs((String.fromCharCode(80,0) == start ? start.length : smallsoundo)), 1);
      }
         javaz -= parseFloat(`${1 | parseInt(`${icontransferclube}`)}`);
          let gmailp = String.fromCharCode(103,97,116,101,100,95,104,95,50,53,0);
         chinaf += `${parseInt(`${javaz}`) / 2}`;
         gmailp += `${gmailp.length >> (Math.min(gmailp.length, 5))}`;
      let subtext3 = icontransferclube >= 8798500.0;
      do {
         icontransferclube *= parseFloat(`${parseInt(`${javaz}`)}`);
         if (subtext3) {
            break;
         }
      } while (((parseFloat(`${start.length}`) + icontransferclube) < 2.26) && subtext3);
         javaz *= parseFloat(`${start.length}`);
       let spinnerV = String.fromCharCode(100,98,115,105,122,101,95,122,95,53,52,0);
       let containeru = String.fromCharCode(98,109,111,100,101,95,56,95,49,57,0);
         chinaf += `${(chinaf == String.fromCharCode(56,0) ? chinaf.length : spinnerV.length)}`;
      let reducer6 = spinnerV.length >= 6931880;
      do {
         spinnerV += `${(containeru == String.fromCharCode(81,0) ? parseInt(`${icontransferclube}`) : containeru.length)}`;
         if (reducer6) {
            break;
         }
      } while (reducer6 && (start != spinnerV));
         containeru = `${(String.fromCharCode(86,0) == start ? start.length : smallsoundo)}`;
       let subsa = String.fromCharCode(104,95,49,48,48,95,112,97,115,116,101,100,0);
       let logouto = String.fromCharCode(99,97,109,101,108,95,108,95,56,51,0);
         logouto += `${3 + smallsoundo}`;
      videoX.set(t_unlock5, parseInt(`${javaz}`) - 2);
   }
      orangetick0 = new Map([[`${default_04.length}`, parseInt(`${sentrye}`)]]);

    const epHeight = e.nativeEvent.layout.height;

       let orangeR = String.fromCharCode(122,95,51,57,95,98,114,111,119,115,101,0);
      if (orangeR.includes(`${orangeR.length}`)) {
         orangeR += `${(String.fromCharCode(98,0) == orangeR ? orangeR.length : orangeR.length)}`;
      }
      for (let q = 0; q < 1; q++) {
         orangeR += `${orangeR.length % (Math.max(1, 4))}`;
      }
      for (let l = 0; l < 2; l++) {
         orangeR += "2";
      }
      default_04 = [(arrowL == String.fromCharCode(82,0) ? arrowL.length : default_04.length)];
      foundu += `${1 + default_04.length}`;
      iconrefreshC ^= 1;
      orangetick0.set(`${iconrefreshC}`, iconrefreshC / (Math.max(1, videoX.size)));
       let whitebelll = 5.0;
       let descz = String.fromCharCode(99,111,110,118,111,108,117,116,105,111,110,95,56,95,57,56,0);
      while (1 > descz.length) {
         whitebelll -= parseFloat(`${descz.length}`);
         break;
      }
         whitebelll /= Math.max(4, parseFloat(`${parseInt(`${whitebelll}`) ^ descz.length}`));
         descz = `${descz.length << (Math.min(3, Math.abs(parseInt(`${whitebelll}`))))}`;
      for (let v = 0; v < 1; v++) {
         whitebelll -= parseFloat(`${parseInt(`${whitebelll}`)}`);
      }
      let infoy = whitebelll >= 9131347.0;
      do {
         whitebelll -= parseFloat(`${3}`);
         if (infoy) {
            break;
         }
      } while ((5.65 > whitebelll) && infoy);
         whitebelll *= (parseFloat(`${descz == String.fromCharCode(67,0) ? parseInt(`${whitebelll}`) : descz.length}`));
      videoX = new Map([[t_unlock5, (String.fromCharCode(120,0) == foundu ? foundu.length : t_unlock5.length)]]);
   while (!t_unlock5.includes(`${orangetick0.size}`)) {
       let libfbi = false;
       let profileK = String.fromCharCode(106,95,53,53,95,115,98,108,111,103,0);
       let internetv = String.fromCharCode(114,101,100,101,108,105,118,101,114,121,95,103,95,57,57,0);
       let greenb = String.fromCharCode(118,112,99,120,95,52,95,57,48,0);
       let fullscreenminh = 5.0;
         profileK += `${profileK.length}`;
          let gemfileZ: Map<any, any> = new Map([[String.fromCharCode(105,95,50,49,95,109,111,110,111,98,105,116,0),301], [String.fromCharCode(117,100,116,97,95,99,95,52,52,0),952], [String.fromCharCode(104,95,56,53,95,103,122,105,112,112,101,100,0),545]]);
          let backwardT = String.fromCharCode(121,95,54,53,95,109,102,114,97,0);
         profileK = "3";
         gemfileZ = new Map([[`${gemfileZ.size}`, backwardT.length * 1]]);
         backwardT += `${1 & gemfileZ.size}`;
          let smallz = 3;
          let yellowvideoliveh = String.fromCharCode(100,95,52,55,95,114,111,116,111,0);
         greenb = `${((libfbi ? 1 : 5))}`;
         smallz *= smallz - yellowvideoliveh.length;
         yellowvideoliveh = `${(String.fromCharCode(113,0) == yellowvideoliveh ? smallz : yellowvideoliveh.length)}`;
         libfbi = !libfbi;
      while (4 < (parseInt(`${fullscreenminh}`) / (Math.max(4, greenb.length))) && (fullscreenminh / (Math.max(1.1, 7))) < 1.79) {
         greenb += `${(String.fromCharCode(52,0) == internetv ? internetv.length : parseInt(`${fullscreenminh}`))}`;
         break;
      }
         profileK += `${greenb.length >> (Math.min(5, Math.abs(parseInt(`${fullscreenminh}`))))}`;
          let mintegralX = 4.0;
          let librrcs = String.fromCharCode(115,117,103,103,101,115,116,105,111,110,95,120,95,55,55,0);
          let emptyg = 0.0;
         libfbi = 83.83 == emptyg;
         mintegralX -= parseFloat(`${1 * parseInt(`${mintegralX}`)}`);
         librrcs += `${parseInt(`${mintegralX}`)}`;
         emptyg -= parseInt(`${mintegralX}`) % (Math.max(librrcs.length, 6));
          let orangeuparrowN = String.fromCharCode(109,112,101,103,118,105,100,101,111,100,97,116,97,95,50,95,57,49,0);
          let analyticn = 2.0;
         profileK += `${internetv.length >> (Math.min(profileK.length, 1))}`;
         orangeuparrowN += `${orangeuparrowN.length}`;
         analyticn /= Math.max(5, 3 + parseInt(`${analyticn}`));
          let serviceF = 1;
          let homeM = String.fromCharCode(120,95,52,53,95,104,108,105,110,101,0);
          let form2: Array<any> = [853, 420];
         libfbi = 19 >= form2.length;
         serviceF >>= Math.min(homeM.length, 5);
         homeM += `${serviceF}`;
         form2 = [3 ^ serviceF];
      while (5 > greenb.length) {
         greenb += `${greenb.length % 3}`;
         break;
      }
      if (2 >= profileK.length) {
         profileK = `${profileK.length - 3}`;
      }
      for (let u = 0; u < 2; u++) {
         fullscreenminh *= greenb.length & 2;
      }
      while (1 < profileK.length) {
         internetv = `${profileK.length}`;
         break;
      }
      for (let p = 0; p < 3; p++) {
          let taiwanm = String.fromCharCode(114,101,115,111,108,118,101,114,95,105,95,56,54,0);
          let sportO = String.fromCharCode(111,95,54,48,95,99,111,109,112,105,108,101,111,112,116,105,111,110,117,115,101,100,0);
         libfbi = 34 <= internetv.length || 34 <= greenb.length;
         taiwanm = `${taiwanm.length}`;
         sportO += `${1 | taiwanm.length}`;
      }
      if ((fullscreenminh / 2.54) >= 3.0) {
         fullscreenminh /= Math.max(3 | parseInt(`${fullscreenminh}`), 2);
      }
      orangetick0.set(`${arrowL}`, orangetick0.size);
      break;
   }
      t_unlock5 = `${analytict.size | videoX.size}`;
      orangetick0 = new Map([[`${sentrye}`, parseInt(`${sentrye}`) & 2]]);
    const epWidth = e.nativeEvent.layout.width;

   while (t_unlock5.startsWith(`${sentrye}`)) {
      t_unlock5 += `${orangetick0.size / 2}`;
      break;
   }
   while (analytict.size <= arrowL.length) {
      analytict = new Map([[`${default_04.length}`, (String.fromCharCode(75,0) == t_unlock5 ? default_04.length : t_unlock5.length)]]);
      break;
   }
      t_unlock5 = "3";
   for (let k = 0; k < 3; k++) {
       let libswscaleL = String.fromCharCode(97,95,57,49,95,114,101,115,101,101,107,0);
       let d_titlez = String.fromCharCode(115,117,98,115,116,105,116,117,116,101,100,95,115,95,50,52,0);
       let middlebrightnessM = String.fromCharCode(110,118,101,110,99,95,102,95,53,50,0);
         d_titlez += `${(d_titlez == String.fromCharCode(71,0) ? middlebrightnessM.length : d_titlez.length)}`;
         d_titlez += "1";
         d_titlez += "2";
      let defaultfootballbg6 = String.fromCharCode(114,117,53,109,55,97,118,56,55,97,0) == libswscaleL;
      do {
          let terms7: Array<any> = [444, 353, 884];
         libswscaleL += `${d_titlez.length}`;
         terms7 = [3];
         if (defaultfootballbg6) {
            break;
         }
      } while (defaultfootballbg6 && (libswscaleL.startsWith(`${middlebrightnessM.length}`)));
          let iconscheduleK = false;
          let projectp = String.fromCharCode(120,119,109,97,95,103,95,49,49,0);
          let iconarrowright6: Map<any, any> = new Map([[String.fromCharCode(100,101,99,111,114,114,101,108,97,116,105,111,110,95,113,95,53,52,0),String.fromCharCode(110,101,97,114,101,115,116,95,120,95,49,51,0)], [String.fromCharCode(105,95,55,57,95,104,97,110,100,101,114,0),String.fromCharCode(116,111,107,101,110,105,122,101,95,108,95,53,57,0)]]);
         libswscaleL = `${d_titlez.length >> (Math.min(Math.abs(2), 1))}`;
         iconscheduleK = 94 > iconarrowright6.size;
         projectp += `${iconarrowright6.size + 2}`;
      for (let w = 0; w < 3; w++) {
          let mountingL: Map<any, any> = new Map([[String.fromCharCode(113,95,49,56,95,118,99,120,112,114,111,106,0),false ], [String.fromCharCode(122,95,49,95,112,117,98,107,101,121,0),false ]]);
          let searchX = 2;
          let applicationl = 5.0;
          let storeV = true;
          let largeQ = String.fromCharCode(103,95,51,50,95,117,112,99,97,108,108,0);
         libswscaleL += `${d_titlez.length}`;
         mountingL = new Map([[`${searchX}`, 2 & searchX]]);
         applicationl += parseFloat(`${searchX >> (Math.min(Math.abs(mountingL.size), 1))}`);
         storeV = !storeV;
         largeQ += `${largeQ.length % 1}`;
      }
      if (libswscaleL.length < middlebrightnessM.length) {
          let inactivex = 0;
          let componentsf = true;
          let leftT = 3.0;
         libswscaleL = `${libswscaleL.length}`;
         inactivex |= inactivex;
         componentsf = 50 > inactivex;
         leftT /= Math.max(5, (parseFloat(`${parseInt(`${leftT}`) | (componentsf ? 4 : 5)}`)));
      }
      while (2 == libswscaleL.length) {
          let stats3 = String.fromCharCode(97,95,56,53,95,100,105,115,109,105,115,115,0);
          let forwardj = 3.0;
          let textM = 4;
         middlebrightnessM = "3";
         stats3 += `${textM}`;
         forwardj /= Math.max(parseFloat(`${textM}`), 5);
         break;
      }
         middlebrightnessM += "1";
      foundu += `${orangetick0.size ^ 3}`;
   }
       let orangeclockF: Map<any, any> = new Map([[String.fromCharCode(115,101,99,111,110,100,112,97,115,115,95,117,95,53,56,0),false ], [String.fromCharCode(111,109,109,111,110,95,120,95,57,57,0),false ], [String.fromCharCode(106,95,55,57,95,99,97,112,112,101,100,0),true ]]);
          let chartj = 1.0;
          let headerc = String.fromCharCode(114,95,51,53,95,115,101,99,116,105,110,115,0);
          let expandZ = 0;
         orangeclockF.set(`${expandZ}`, expandZ / 2);
         chartj /= Math.max(2, parseFloat(`${parseInt(`${chartj}`) / (Math.max(3, headerc.length))}`));
         headerc += `${3 >> (Math.min(2, headerc.length))}`;
         orangeclockF.set(`${orangeclockF.size}`, 3 / (Math.max(2, orangeclockF.size)));
         orangeclockF.set(`${orangeclockF.size}`, orangeclockF.size);
      t_unlock5 = `${2 | iconrefreshC}`;
   if (iconrefreshC < 1) {
      iconrefreshC += analytict.size;
   }
      videoX.set(`${sentrye}`, 1 | parseInt(`${sentrye}`));
      arrowL = `${iconrefreshC * analytict.size}`;
    setHeight(epHeight);

   let libimagepipelinez = iconrefreshC >= 8340121;
   do {
      iconrefreshC += 2 + t_unlock5.length;
      if (libimagepipelinez) {
         break;
      }
   } while (((5 & iconrefreshC) <= 2 && 2 <= (iconrefreshC & 5)) && libimagepipelinez);
      arrowL = `${(t_unlock5 == String.fromCharCode(107,0) ? orangetick0.size : t_unlock5.length)}`;
   if (3 < (5 ^ default_04.length) && 5 < (iconrefreshC ^ 5)) {
      iconrefreshC &= 2;
   }
      sentrye /= Math.max(analytict.size >> (Math.min(t_unlock5.length, 2)), 4);
       let minivodq: Array<any> = [183, 634];
          let bgvipxvodZ = true;
          let full2 = String.fromCharCode(97,99,116,117,97,108,105,122,101,95,117,95,51,51,0);
         minivodq.push((minivodq.length | (bgvipxvodZ ? 1 : 3)));
         bgvipxvodZ = full2.length < full2.length;
      let roomf = minivodq.length >= 9338088;
      do {
         minivodq = [1 >> (Math.min(1, minivodq.length))];
         if (roomf) {
            break;
         }
      } while ((3 <= minivodq.length) && roomf);
      let combinedj = 7123157 <= minivodq.length;
      do {
          let chatbotphotow = 2.0;
          let reactnativeratings2 = String.fromCharCode(115,95,54,48,95,101,120,97,110,100,101,100,0);
          let viewsq = 0.0;
         minivodq.push(reactnativeratings2.length >> (Math.min(5, Math.abs(parseInt(`${chatbotphotow}`)))));
         chatbotphotow -= parseFloat(`${parseInt(`${viewsq}`)}`);
         reactnativeratings2 = `${parseInt(`${viewsq}`)}`;
         if (combinedj) {
            break;
         }
      } while (combinedj && (minivodq.length == 2));
      videoX.set(confirmationc, 1);
      analytict.set(`${default_04.length}`, analytict.size & 1);
      foundu += `${default_04.length ^ iconrefreshC}`;
   for (let b = 0; b < 2; b++) {
      confirmationc = `${2 * analytict.size}`;
   }
    setWidth(epWidth);
  }

  const displayEpisodesWithStatus = useMemo(() => {
       let whitebellz = String.fromCharCode(101,110,116,105,114,101,108,121,95,112,95,54,52,0);
    let libavcodecx = String.fromCharCode(114,95,55,55,95,100,102,108,97,0);
    let time_3T = String.fromCharCode(110,95,55,56,95,114,108,109,0);
    let chinasamec = String.fromCharCode(108,95,48,95,117,114,108,99,111,110,116,101,120,116,0);
    let backiconmaskq = 1.0;
    let dices = String.fromCharCode(104,95,57,55,95,116,114,97,110,115,112,111,114,116,115,0);
    let redgoalT = String.fromCharCode(111,111,108,98,97,114,95,112,95,51,53,0);
    let spinnere = 3.0;
    let smallsound4 = 1.0;
    let executoru = 3.0;
    let mail8 = 5.0;
    let crownp = String.fromCharCode(112,114,111,109,105,115,101,115,95,119,95,50,50,0);
    let reducery = String.fromCharCode(112,95,52,55,95,104,121,115,116,101,114,101,115,105,115,0);
       let libhermesK = 5.0;
       let catalogD = true;
       let shareblackQ = String.fromCharCode(119,100,108,102,99,110,95,109,95,55,56,0);
         libhermesK /= Math.max(5, (parseFloat(`${shareblackQ.length % (Math.max(2, (catalogD ? 1 : 5)))}`)));
      if (!catalogD) {
         catalogD = shareblackQ.length >= 23;
      }
         catalogD = 97.41 <= libhermesK && catalogD;
         catalogD = shareblackQ.startsWith(`${libhermesK}`);
       let icontransferclubL = String.fromCharCode(119,97,108,107,101,114,95,112,95,49,53,0);
      if (libhermesK == 3.81) {
         libhermesK /= Math.max(parseFloat(`${parseInt(`${libhermesK}`) % 3}`), 1);
      }
       let libturbomodulejsijniq = String.fromCharCode(101,110,116,114,111,112,121,109,111,100,101,95,114,95,52,48,0);
       let armvab = String.fromCharCode(109,111,100,101,120,112,95,111,95,56,49,0);
       let armvaW = String.fromCharCode(109,97,116,114,111,115,107,97,95,121,95,52,53,0);
          let bellX = String.fromCharCode(104,95,52,57,95,115,117,99,99,101,115,115,99,98,0);
         catalogD = String.fromCharCode(56,0) == libturbomodulejsijniq;
         bellX = `${bellX.length}`;
      dices += `${time_3T.length + parseInt(`${spinnere}`)}`;
      executoru -= dices.length;

    const vodInfo = downloadVideoReducer.downloads.find(
      (download) => download.vod.vod_id === vodId
    );

      chinasamec += `${3 & parseInt(`${spinnere}`)}`;
   let liblogger0 = smallsound4 <= 8901287.0;
   do {
      smallsound4 += parseFloat(`${2}`);
      if (liblogger0) {
         break;
      }
   } while (liblogger0 && (4.38 > backiconmaskq));

    if (!vodInfo) {

       let strings5 = 0.0;
       let paginationM = String.fromCharCode(105,116,117,110,101,115,95,113,95,51,49,0);
       let libcrashsdkL = 2.0;
      for (let u = 0; u < 3; u++) {
         strings5 -= 2 + paginationM.length;
      }
      if (paginationM.includes(`${libcrashsdkL}`)) {
          let analyticsQ = 1.0;
          let rewardvideoK = String.fromCharCode(108,111,111,112,95,52,95,57,51,0);
          let crownQ = String.fromCharCode(112,115,102,105,108,101,95,104,95,53,50,0);
          let hejiC = String.fromCharCode(115,117,98,102,114,97,109,101,95,103,95,50,53,0);
          let contextm: Array<any> = [753, 11];
         libcrashsdkL -= crownQ.length - hejiC.length;
         analyticsQ *= parseFloat(`${contextm.length}`);
         rewardvideoK = "2";
         crownQ += `${rewardvideoK.length << (Math.min(3, contextm.length))}`;
         hejiC += "3";
      }
      for (let n = 0; n < 3; n++) {
         paginationM += `${paginationM.length}`;
      }
       let policyP = String.fromCharCode(100,111,103,95,105,95,54,53,0);
       let moreB = String.fromCharCode(113,95,49,95,109,97,103,110,105,116,117,100,101,0);
          let sortL = String.fromCharCode(103,114,101,97,116,101,114,95,103,95,57,53,0);
          let awayplayerC: Array<any> = [344, 420];
          let tailH = String.fromCharCode(109,97,116,114,105,120,101,110,99,95,53,95,54,52,0);
         strings5 *= parseInt(`${strings5}`) ^ sortL.length;
         sortL = `${tailH.length ^ 3}`;
         awayplayerC = [3 * tailH.length];
         libcrashsdkL -= paginationM.length;
      for (let d = 0; d < 1; d++) {
         strings5 += parseInt(`${strings5}`);
      }
      for (let a = 0; a < 1; a++) {
          let steph = String.fromCharCode(120,95,50,49,95,115,101,108,102,105,101,0);
          let pagination4 = 5.0;
          let iconrightorangeN = String.fromCharCode(116,114,97,99,105,110,103,95,51,95,56,54,0);
         paginationM = `${iconrightorangeN.length >> (Math.min(5, Math.abs(parseInt(`${pagination4}`))))}`;
         steph = `${steph.length % (Math.max(7, steph.length))}`;
         pagination4 += (parseFloat(`${String.fromCharCode(74,0) == steph ? steph.length : steph.length}`));
      }
      if (policyP == String.fromCharCode(72,0)) {
          let libbufferZ = 4.0;
          let ballM: Map<any, any> = new Map([[String.fromCharCode(113,95,48,95,109,97,115,107,115,0),false ], [String.fromCharCode(119,95,54,95,101,107,121,0),true ]]);
          let basketballhometeamr = String.fromCharCode(104,101,118,99,100,101,99,95,112,95,51,48,0);
         moreB += `${(policyP == String.fromCharCode(107,0) ? parseInt(`${strings5}`) : policyP.length)}`;
         libbufferZ *= parseFloat(`${parseInt(`${libbufferZ}`)}`);
         ballM.set(`${libbufferZ}`, 1 * parseInt(`${libbufferZ}`));
         basketballhometeamr = `${parseInt(`${libbufferZ}`)}`;
      }
      smallsound4 /= Math.max(2, parseFloat(`${2}`));
       let unreadK = 2;
       let pushu: Map<any, any> = new Map([[String.fromCharCode(100,101,108,101,116,105,111,110,115,95,122,95,50,57,0),true ], [String.fromCharCode(110,95,55,48,95,115,101,110,100,97,108,108,0),true ], [String.fromCharCode(108,95,54,95,100,101,98,108,111,99,107,105,110,103,0),true ]]);
       let awayiconL = 4.0;
          let holder4 = String.fromCharCode(101,120,105,115,116,115,95,107,95,50,54,0);
          let iconclosewhitewithbgV = 1.0;
          let basketballicon7 = true;
         awayiconL *= ((basketballicon7 ? 2 : 3) << (Math.min(Math.abs(parseInt(`${iconclosewhitewithbgV}`)), 4)));
         holder4 += `${holder4.length / (Math.max(holder4.length, 8))}`;
         iconclosewhitewithbgV += 1;
      let found_ = unreadK >= 6463856;
      do {
         unreadK <<= Math.min(5, Math.abs(unreadK));
         if (found_) {
            break;
         }
      } while (found_ && (!Array.from(pushu.values()).includes(unreadK)));
      for (let g = 0; g < 1; g++) {
         unreadK += 2 & pushu.size;
      }
          let privacyC = String.fromCharCode(114,95,56,54,95,98,105,114,116,104,100,97,121,0);
         unreadK &= 1 / (Math.max(5, parseInt(`${awayiconL}`)));
         privacyC += `${1 >> (Math.min(3, privacyC.length))}`;
      let defaultbasketballbgT = 8620462 >= unreadK;
      do {
         unreadK ^= pushu.size;
         if (defaultbasketballbgT) {
            break;
         }
      } while (((3 >> (Math.min(2, Math.abs(pushu.size)))) > 2 || (pushu.size >> (Math.min(2, Math.abs(unreadK)))) > 3) && defaultbasketballbgT);
      for (let l = 0; l < 3; l++) {
          let middlebrightnessF = 3.0;
         unreadK -= 1 & parseInt(`${awayiconL}`);
         middlebrightnessF += parseFloat(`${2}`);
      }
         pushu.set(`${unreadK}`, unreadK);
          let predictionbannershared6 = false;
          let eventT = String.fromCharCode(107,105,99,107,101,100,95,116,95,56,48,0);
          let tailG = String.fromCharCode(101,95,53,55,95,99,111,110,110,101,99,116,105,110,103,0);
         awayiconL -= pushu.size / (Math.max(3, unreadK));
         predictionbannershared6 = tailG == eventT;
         eventT += "3";
         tailG += `${(String.fromCharCode(81,0) == eventT ? (predictionbannershared6 ? 4 : 3) : eventT.length)}`;
      if (4 <= (pushu.size ^ 2) && 2 <= (pushu.size ^ unreadK)) {
          let codegenk = String.fromCharCode(115,103,105,114,108,101,95,118,95,56,57,0);
          let singleo = String.fromCharCode(122,95,52,55,95,119,97,118,101,102,111,114,109,0);
          let i_unlockt: Map<any, any> = new Map([[String.fromCharCode(100,117,114,97,116,105,111,110,95,110,95,53,50,0),976], [String.fromCharCode(121,95,57,54,95,109,98,99,115,0),784]]);
          let shootyesgoalt: Array<any> = [477, 987, 137];
         unreadK ^= 2 << (Math.min(1, singleo.length));
         codegenk += `${codegenk.length}`;
         singleo = `${i_unlockt.size >> (Math.min(shootyesgoalt.length, 1))}`;
         i_unlockt = new Map([[`${i_unlockt.size}`, (String.fromCharCode(57,0) == codegenk ? i_unlockt.size : codegenk.length)]]);
         shootyesgoalt = [(String.fromCharCode(80,0) == codegenk ? i_unlockt.size : codegenk.length)];
      }
      libavcodecx += `${(libavcodecx == String.fromCharCode(69,0) ? libavcodecx.length : parseInt(`${smallsound4}`))}`;
      return displayEpisodes as yysDefaultbasketballbg[]
    }

    return displayEpisodes?.map((ep) => {
      const episodeInfo = vodInfo && !vodInfo.vodIsAdult ?
        vodInfo.episodes.find(
          (episode) => episode.vodUrlNid === ep.nid && episode.vodSourceId === source
        )
        :
        vodInfo.episodes.find(
          (episode) => episode.vodUrlNid === ep.nid
        )

      if (vodInfo && episodeInfo) {

       let default_ekH = 3.0;
      while (4.12 <= default_ekH) {
         default_ekH *= parseFloat(`${3 + parseInt(`${default_ekH}`)}`);
         break;
      }
          let disconnected1 = 4.0;
         default_ekH *= parseFloat(`${parseInt(`${disconnected1}`)}`);
       let reactnavigationl: Map<any, any> = new Map([[String.fromCharCode(116,95,57,48,95,97,114,103,120,0),897], [String.fromCharCode(97,95,51,51,95,108,97,112,110,100,122,0),118], [String.fromCharCode(102,95,49,50,95,112,108,97,99,101,109,97,114,107,0),371]]);
      smallsound4 /= Math.max(parseFloat(`${3}`), 3);
   let gradleY = time_3T.length <= 6370276;
   do {
      time_3T += `${parseInt(`${smallsound4}`) / (Math.max(parseInt(`${spinnere}`), 5))}`;
      if (gradleY) {
         break;
      }
   } while (gradleY && (!time_3T.includes(`${spinnere}`)));
        const isDownloading = episodeInfo.status === IConfirmationLibffmpegkit.ICrown;

      libavcodecx = `${2 * time_3T.length}`;
      whitebellz = `${libavcodecx.length}`;
        const isDownloaded = episodeInfo.status === IConfirmationLibffmpegkit.IPointStar;

       let stationsH = false;
       let iconqq5 = 3.0;
       let l_manager9 = String.fromCharCode(122,95,54,51,95,121,111,103,97,0);
      let iconpointscore_ = l_manager9.length >= 8503981;
      do {
          let livec = 1;
          let gradle8 = 1.0;
          let shrinkL = 0.0;
         l_manager9 = "1";
         livec *= 2 - parseInt(`${gradle8}`);
         gradle8 += parseInt(`${gradle8}`) + livec;
         shrinkL += parseFloat(`${3 % (Math.max(2, parseInt(`${gradle8}`)))}`);
         if (iconpointscore_) {
            break;
         }
      } while ((!stationsH && 4 >= l_manager9.length) && iconpointscore_);
         l_manager9 += `${(String.fromCharCode(97,0) == l_manager9 ? l_manager9.length : (stationsH ? 3 : 3))}`;
          let bodanC: Array<any> = [435, 220];
         iconqq5 /= Math.max(parseFloat(`${bodanC.length}`), 3);
      if (iconqq5 < 2.13) {
          let regengM = 4.0;
          let defaultpredictionprofileG = true;
         iconqq5 -= parseFloat(`${parseInt(`${regengM}`) | 1}`);
         regengM *= ((defaultpredictionprofileG ? 4 : 1));
      }
          let gradle7 = String.fromCharCode(98,95,57,53,95,98,117,116,116,101,114,119,111,114,116,104,0);
          let config_ = 5;
          let cross7 = 3;
         stationsH = cross7 <= 4 && l_manager9.length <= 4;
         gradle7 += `${1 + gradle7.length}`;
         config_ -= (String.fromCharCode(75,0) == gradle7 ? gradle7.length : config_);
         cross7 >>= Math.min(4, gradle7.length);
      for (let i = 0; i < 3; i++) {
         stationsH = 94 >= l_manager9.length;
      }
      if (!l_manager9.includes(`${iconqq5}`)) {
         iconqq5 /= Math.max(parseFloat(`${1}`), 2);
      }
         iconqq5 /= Math.max(3, parseFloat(`${parseInt(`${iconqq5}`) - 1}`));
          let arrowselectdowni = 3.0;
          let buildy = String.fromCharCode(102,95,49,56,0);
         stationsH = l_manager9.length <= 18;
         arrowselectdowni -= parseFloat(`${1}`);
         buildy = `${1 | buildy.length}`;
      whitebellz += `${(String.fromCharCode(82,0) == dices ? parseInt(`${spinnere}`) : dices.length)}`;
      redgoalT = `${parseInt(`${executoru}`)}`;

        return {
          ...ep,
          isDownloading: !!isDownloading,
          isDownloaded: !!isDownloaded,
          progress: episodeInfo.progress,
        } as yysDefaultbasketballbg;
      }

      return {
        ...ep,
        isDownloading: false,
        isDownloaded: false,
        progress: { percentage: 0, bytes: 0 }
      } as yysDefaultbasketballbg;
    });
  }, [displayEpisodes, downloadVideoReducer.downloads, vodId]);

  useEffect(() => {
    setCurrentIndex(0);
  }, [vodId]);

  const renderItem = useCallback(({ item, index }: { item: string; index: number }) => {
    return (
      <TouchableOpacity
        style={styles.btn}
        onPress={() => setCurrentIndex(index)}
      >
        <Text
          style={{
            textAlign: "center",
            ...textVariants.header,
            color: index === currentIndex ? colors.text : colors.muted,
            fontSize: index === currentIndex ? 18 : 15,
          }}
        >
          {`${item}集`}
        </Text>
      </TouchableOpacity>
    );
  }, [ranges])

  useEffect(() => {
    if (iosCustomToastIsVisible) {
      setTimeout(() => {
        setIosCustomToastIsVisible(false)
      }, 2000);
    }
  }, [iosCustomToastIsVisible])

  return (
    <>
      {iosCustomToastIsVisible && screen === 'landscape' && Platform.OS === 'ios' && <View style={{
        opacity: 0.8,
        backgroundColor: 'black',
        position: 'absolute',
        top: '50%',
        left: '-50%',
        padding: 8,
        borderRadius: 4
      }}>
        <Text style={{ color: 'white', fontSize: 16 }}>
          {iosCustomToastText}
        </Text>
      </View>}
      {screen === 'potrait' && (
        <View
          style={{
            ...styles.header, marginHorizontal: 30,
          }}>
          <Text
            style={[
              styles.title,
              textVariants.header
            ]}>
            下载
          </Text>
        </View>
      )}

      <FlatList
        horizontal
        data={ranges}
        renderItem={renderItem}
      />

      {displayEpisodesWithStatus && (
        <>
          <ScrollView
            style={{
              height: height,
              marginBottom: 15,
              marginHorizontal: spacing.sideOffset,
            }}
            contentContainerStyle={{
              ...styles.episodeList,
              paddingTop: 10,
              paddingBottom: insets.bottom,
              paddingHorizontal: 5,
            }}
            nestedScrollEnabled={true}
          >
            {displayEpisodesWithStatus?.map((ep, idx) => (
              <TouchableOpacity
                key={`expand-${idx}`}
                onPress={() => {
                  if (!isVip) {
                    handleClose();
                    setShowAdOverlay(true);
                  } else {
                    if (downloadVideoReducer.queue.length + downloadVideoReducer.currentDownloading.length >= DOWNLOAD_FEATURE_MAX_QUEUE) {
                      setIosCustomToastText('最多同时下载10个视频，请稍后继续')
                      if (screen === 'landscape' && Platform.OS === 'ios') debouncedSetIosCustomToastIsVisibleTrue() 
                      else yysHomeinactiveUntick.showToast('最多同时下载10个视频，请稍后继续')
                    } else {
                      setIosCustomToastText('已加入下载队列，请查看‘我的下载’')
                      onDownload(ep.nid);
                      
                      //   content: <Text style={{color: 'white', top:-100, backgroundColor: '#00000080', padding: 5}}>'已加入下载队列，请查看‘我的下载’'</Text>, 
                      
                      
                      
                      if (screen === 'landscape' && Platform.OS === 'ios') debouncedSetIosCustomToastIsVisibleTrue() 
                      else throttledToast('已加入下载队列，请查看‘我的下载’')
                    }
                  }
                }}
                disabled={ep.isDownloaded || ep.isDownloading}
              >
                <View
                  style={{
                    backgroundColor: colors.search,
                    padding: spacing.s,
                    minWidth: childWidth,
                    marginBottom: spacing.s,
                    borderRadius: 8,
                    position: "relative",
                  }}
                  onLayout={episodeHeight === 0 || episodeWidth === 0 ? handleContainerLayout : undefined}
                >
                  {ep.isDownloading && (
                    <Animated.View style={{
                      backgroundColor: ep.isDownloading ? '#FAC33D' : colors.search,
                      position: "absolute",
                      bottom: 0,
                      height: ep.progress.percentage / 100 * episodeHeight,
                      width: episodeWidth,
                      borderRadius: 8,
                    }}>
                    </Animated.View>
                  )}

                  <Text
                    numberOfLines={1}
                    style={{
                      fontSize: 13,
                      textAlign: "center",
                      fontWeight: "500",
                      color: colors.muted,
                    }}
                  >
                    {`${ep.name}`}
                  </Text>

                  {ep.isDownloading && (
                    <DownloadIconSvg
                      style={{
                        position: "absolute",
                        right: -8,
                        top: -5
                      }}
                    />
                  )}

                  {ep.isDownloaded && (
                    <View style={{
                      ...styles.legend,
                      backgroundColor: '#FAC33D29',
                      borderTopRightRadius: 8,
                      borderBottomLeftRadius: 8
                    }}>
                      <DownloadedIconSvg
                        width={10}
                        height={10}
                      />
                    </View>
                  )}

                  {!isVip && !ep.isDownloaded && (
                    <View style={{ ...styles.legend }}>
                      <VipIconSvg
                        width={14}
                        height={14}
                      />
                    </View>
                  )}
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {isVip ? (
            <TouchableOpacity
              style={{
                backgroundColor: colors.search,
                marginHorizontal: spacing.sideOffset + 5,
                padding: spacing.s,
                borderRadius: 8,
                flexDirection: "row",
                justifyContent: "center",
                gap: 5,
                marginBottom: insets.bottom,
              }}
              onPress={() => {
                onPressToDownload();
              }}
            >
              <DownloadSvg width={24} height={24} />
              <Text
                style={{
                  ...styles.title,
                  ...textVariants.header,
                  fontSize: 15,
                  color: colors.muted,
                  paddingBottom: 3,
                }}
              >
                我的下载
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={{
                backgroundColor: colors.primary,
                marginHorizontal: spacing.sideOffset + 5,
                padding: spacing.s,
                borderRadius: 8,
                marginBottom: insets.bottom,
              }}
              onPress={() => {
                handleClose();
                setShowAdOverlay(true);
              }}
            >
              <Text
                style={{
                  ...styles.title,
                  ...textVariants.header,
                  fontSize: 15,
                  color: !isVip ? colors.selected : colors.muted,
                }}
              >
                下载功能仅对VIP会员开放
              </Text>
            </TouchableOpacity>
          )}
        </>
      )}
    </>
  );
}

export default memo(SelectDownloadComponent);

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  title: {
    alignSelf: 'center',
    textAlign: "center",
  },
  episodeList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    gap: 10,
    marginBottom: 14,
  },
  legend: {
    position: 'absolute',
    top: 0,
    right: 0,
    paddingVertical: 3,
    paddingHorizontal: 6,
    overflow: 'hidden'
  },
  btn: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
});
