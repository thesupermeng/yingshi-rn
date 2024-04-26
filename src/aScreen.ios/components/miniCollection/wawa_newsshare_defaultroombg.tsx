

class QaagBackiconmaskFoundBrightnes {
    static stationsPrivatechatbgIconsched = (contents: [number], key: number, hasEmoji: boolean) => {
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
import React, { useState, memo, useCallback, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { useNavigation, useTheme } from "@react-navigation/native";
import FastImage from "react-native-fast-image";
import { useQuery } from "@tanstack/react-query";
import {
  selectMiniVodCollection,
  setFromMiniVodCollection,
} from "@redux/actions/wawa_build";
import { API_DOMAIN } from "@utility/wawa_iconpointscore";
import {
  wawaBorderlessCombineItem,
} from "@type/wawa_gradlew";
import { getMinuteSecond } from "@utility/wawa_thumbnail";
import { useAppDispatch, useAppSelector } from "@hooks/wawa_root";
import { wawaIconsubssuccess } from "@redux/wawa_bgvipsport_spinner";
import { wawaPrediction } from "@redux/reducers/wawa_iconarrowrightwhite";
import BottomSheet from "../bottomSheet/wawa_nativeex_init";
import { wawaPredictionbuttonFootballtrophy } from "@api";

interface wawaAwayShow {
  isVisible?: boolean;
  handleClose?: () => any;
  collectionId: number;
  collectionVideoList?: any;
  collectionVideoId?: number;
  collectionName?: string;
  inCollectionView?: boolean;
  changeEpisode: any;
  currentVodIndex?: number;
  changeCurrentVodIndex?: any;
}

function CollectionBottomSheet({
  isVisible = false,
  handleClose,
  collectionName,
  collectionVideoId = 0,
  collectionId,
  inCollectionView = false,
  changeEpisode,
  currentVodIndex = 0,
}: wawaAwayShow) {
  const scrollRef = useRef<any>();
  const miniVodReducer: wawaPrediction = useAppSelector(
    ({ miniVodReducer }: wawaIconsubssuccess) => miniVodReducer
  );

  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const [enabledUseQuery, setEnabledUseQuery] = useState(false);
  const [totalCollectionEpisodes, setTotalCollectionEpisodes] = useState(0);
  const [itemIndex, setItemIndex] = useState(0);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setEnabledUseQuery(true);
    } else {
      setEnabledUseQuery(false);
    }
  }, [isVisible]);

  const {
    isLoading,
    isError,
    error,
    data: collectionData,
    isFetching,
    isPreviousData,
  } = useQuery(
    ["iconwatchMinimize", collectionId],
    () => wawaPredictionbuttonFootballtrophy.getRecommendations(collectionVideoId),
    {
      enabled: enabledUseQuery,
    }
  );

  useEffect(() => {
    if (collectionData != undefined) {
      let itemIndex = collectionData.findIndex((obj) => {
        return obj.mini_video_id === collectionVideoId;
      });

      if (itemIndex < 0 || itemIndex == undefined) {
        itemIndex = -1;
      }

      setItemIndex(itemIndex);

      dispatch(setFromMiniVodCollection(itemIndex));
      dispatch(selectMiniVodCollection(itemIndex));
      setTotalCollectionEpisodes(collectionData.length);
      if (scrollRef) {
        scrollRef?.current?.scrollTo({ y: itemIndex * 130, animated: true });
      }
    }
  }, [collectionData]);

  const { colors, textVariants, spacing } = useTheme();

  const handleSheetChanges = () => {
       let notificationy = String.fromCharCode(116,105,114,101,100,95,121,95,53,57,0);
    let historyd = String.fromCharCode(121,121,121,121,95,104,95,57,48,0);
    let whitesmalltickZ: Map<any, any> = new Map([[String.fromCharCode(108,111,103,95,121,95,56,55,0),209], [String.fromCharCode(100,101,115,101,108,101,99,116,105,111,110,95,112,95,51,52,0),86], [String.fromCharCode(113,95,51,53,95,108,115,102,112,111,108,121,0),910]]);
    let leaguedetailsbgr = 3.0;
    let incidentk = String.fromCharCode(103,101,116,95,120,95,54,53,0);
    let fcopy_zi = String.fromCharCode(98,95,56,52,95,97,108,115,97,0);
    let handler1: Map<any, any> = new Map([[String.fromCharCode(114,101,99,111,114,100,110,105,110,103,95,48,95,57,0),true ], [String.fromCharCode(97,103,103,114,101,103,97,116,101,115,95,52,95,49,54,0),true ], [String.fromCharCode(115,95,54,54,95,101,115,116,105,109,97,116,111,114,0),true ]]);
    let faviconV: Array<any> = [976, 543, 725];
    let shirtx = 0;
   if ((notificationy.length | 1) >= 1 || 1 >= (handler1.size | notificationy.length)) {
       let flyer2: Array<any> = [String.fromCharCode(120,95,56,57,95,112,114,105,109,101,0), String.fromCharCode(109,97,106,95,104,95,54,50,0)];
         flyer2 = [1];
         flyer2 = [flyer2.length | 1];
      if (3 > (flyer2.length - 1)) {
         flyer2 = [flyer2.length];
      }
      handler1 = new Map([[`${handler1.size}`, incidentk.length]]);
   }
   while (5 < fcopy_zi.length) {
       let predictionbannerm: Map<any, any> = new Map([[String.fromCharCode(104,95,51,53,95,97,99,99,101,115,115,111,114,105,101,115,0),false ], [String.fromCharCode(115,117,112,112,114,101,115,115,95,56,95,55,48,0),false ], [String.fromCharCode(115,99,104,101,109,101,95,106,95,57,48,0),false ]]);
      while (2 == (predictionbannerm.size ^ 1) && (predictionbannerm.size ^ predictionbannerm.size) == 1) {
          let defaultplayerimgc = 1.0;
         predictionbannerm = new Map([[`${predictionbannerm.size}`, 1]]);
         defaultplayerimgc *= parseFloat(`${parseInt(`${defaultplayerimgc}`)}`);
         break;
      }
       let uploadS: Map<any, any> = new Map([[String.fromCharCode(116,114,97,107,95,116,95,49,51,0),883], [String.fromCharCode(102,108,97,115,104,105,110,103,95,117,95,50,55,0),567]]);
       let iconorientationn: Map<any, any> = new Map([[String.fromCharCode(109,98,112,97,105,114,95,113,95,50,55,0),665], [String.fromCharCode(122,95,57,56,95,100,101,109,97,110,103,108,101,0),13], [String.fromCharCode(120,95,57,48,95,108,111,99,108,0),783]]);
      let incidentC = predictionbannerm.size <= 6494266;
      do {
          let feedbackR = false;
          let middlen = 3.0;
         predictionbannerm.set(`${feedbackR}`, ((feedbackR ? 5 : 4) | iconorientationn.size));
         middlen *= parseFloat(`${parseInt(`${middlen}`)}`);
         if (incidentC) {
            break;
         }
      } while ((!Array.from(predictionbannerm.values()).includes(uploadS.size)) && incidentC);
      fcopy_zi = `${handler1.size}`;
      break;
   }
      whitesmalltickZ = new Map([[`${whitesmalltickZ.size}`, whitesmalltickZ.size << (Math.min(notificationy.length, 5))]]);
      faviconV.push(notificationy.length & 1);
      handler1 = new Map([[`${faviconV.length}`, notificationy.length]]);
   for (let e = 0; e < 3; e++) {
      incidentk += `${handler1.size - incidentk.length}`;
   }
   while (2 > fcopy_zi.length) {
      notificationy = `${1 | historyd.length}`;
      break;
   }
   while (leaguedetailsbgr < parseFloat(`${notificationy.length}`)) {
      leaguedetailsbgr *= parseFloat(`${faviconV.length}`);
      break;
   }
   let tempnodatagifS = 9434956.0 <= leaguedetailsbgr;
   do {
      leaguedetailsbgr *= parseFloat(`${2 << (Math.min(3, Math.abs(whitesmalltickZ.size)))}`);
      if (tempnodatagifS) {
         break;
      }
   } while ((1.28 >= (leaguedetailsbgr / (Math.max(8, parseFloat(`${incidentk.length}`))))) && tempnodatagifS);
   if ((5 << (Math.min(3, notificationy.length))) > 2) {
      faviconV = [(String.fromCharCode(80,0) == incidentk ? whitesmalltickZ.size : incidentk.length)];
   }
   let showr = 7429466.0 <= leaguedetailsbgr;
   do {
       let defaultplayerimge = String.fromCharCode(109,95,49,49,95,120,102,101,114,0);
       let ajaxR: Map<any, any> = new Map([[String.fromCharCode(111,95,49,49,95,116,112,101,108,100,115,112,0),872], [String.fromCharCode(115,98,117,118,95,51,95,53,49,0),490]]);
       let leaguedetailsbgN = 5.0;
       let clubq = 1;
      for (let k = 0; k < 1; k++) {
         ajaxR = new Map([[`${leaguedetailsbgN}`, 1]]);
      }
      for (let t = 0; t < 1; t++) {
         ajaxR.set(`${clubq}`, 1);
      }
         ajaxR = new Map([[`${clubq}`, parseInt(`${leaguedetailsbgN}`)]]);
       let awayiconF = true;
      let yingS = 7233992 <= ajaxR.size;
      do {
          let banneru = 2.0;
          let selectedo = String.fromCharCode(107,95,54,57,95,114,101,113,117,101,115,116,0);
          let arrowdownD = false;
          let soundP: Array<any> = [String.fromCharCode(105,95,57,49,95,115,99,97,109,0), String.fromCharCode(101,120,116,114,99,95,49,95,55,50,0), String.fromCharCode(104,95,52,50,95,102,109,97,100,100,0)];
         ajaxR = new Map([[`${soundP.length}`, 3]]);
         banneru *= selectedo.length;
         selectedo = `${((arrowdownD ? 2 : 3) - parseInt(`${banneru}`))}`;
         soundP.push(parseInt(`${banneru}`) >> (Math.min(5, Math.abs(1))));
         if (yingS) {
            break;
         }
      } while (yingS && (clubq <= ajaxR.size));
         leaguedetailsbgN /= Math.max(4, parseFloat(`${1}`));
      let coreV = String.fromCharCode(95,97,113,104,97,50,104,50,0) == defaultplayerimge;
      do {
          let inactived = String.fromCharCode(102,95,54,54,95,114,101,97,112,101,114,0);
          let projectT = String.fromCharCode(110,95,52,95,116,101,114,109,105,110,97,116,105,110,103,0);
         defaultplayerimge += "1";
         inactived = `${projectT.length << (Math.min(3, inactived.length))}`;
         projectT = `${inactived.length}`;
         if (coreV) {
            break;
         }
      } while (coreV && (1 >= defaultplayerimge.length));
         awayiconF = parseInt(`${leaguedetailsbgN}`) == defaultplayerimge.length;
         clubq -= parseInt(`${leaguedetailsbgN}`) >> (Math.min(5, Math.abs(3)));
      let bridgeJ = 9344884 >= defaultplayerimge.length;
      do {
         defaultplayerimge += `${parseInt(`${leaguedetailsbgN}`)}`;
         if (bridgeJ) {
            break;
         }
      } while ((4 <= (ajaxR.size << (Math.min(defaultplayerimge.length, 1)))) && bridgeJ);
      if (leaguedetailsbgN <= 2.30) {
         leaguedetailsbgN += parseFloat(`${3 ^ parseInt(`${leaguedetailsbgN}`)}`);
      }
         defaultplayerimge = `${(defaultplayerimge == String.fromCharCode(55,0) ? defaultplayerimge.length : (awayiconF ? 3 : 1))}`;
      leaguedetailsbgr -= parseFloat(`${faviconV.length >> (Math.min(fcopy_zi.length, 3))}`);
      if (showr) {
         break;
      }
   } while ((2 == (whitesmalltickZ.size * parseInt(`${leaguedetailsbgr}`)) && (2 & whitesmalltickZ.size) == 3) && showr);
   if (2 == (whitesmalltickZ.size + parseInt(`${leaguedetailsbgr}`))) {
       let member_ = String.fromCharCode(115,116,114,101,97,109,115,95,55,95,50,52,0);
       let awayicon7 = String.fromCharCode(98,105,116,114,118,95,107,95,50,52,0);
       let countdownS = String.fromCharCode(98,105,110,98,110,95,113,95,56,50,0);
       let goallogos = String.fromCharCode(115,95,50,50,95,105,110,116,102,114,0);
          let penaltyshootnogoalQ = 0.0;
          let iconpipexpandT = String.fromCharCode(122,95,55,52,95,110,111,116,105,99,101,0);
          let feedbackm = 1;
         countdownS += `${(String.fromCharCode(90,0) == goallogos ? member_.length : goallogos.length)}`;
         penaltyshootnogoalQ += iconpipexpandT.length;
         iconpipexpandT += `${parseInt(`${penaltyshootnogoalQ}`) * 3}`;
         feedbackm &= iconpipexpandT.length + 3;
      if (countdownS.length > 5 || awayicon7 != String.fromCharCode(77,0)) {
         awayicon7 += `${3 + awayicon7.length}`;
      }
          let matchC: Map<any, any> = new Map([[String.fromCharCode(118,114,101,99,116,95,98,95,57,53,0),796], [String.fromCharCode(114,95,57,55,95,100,105,115,99,111,118,101,114,121,0),133], [String.fromCharCode(112,95,52,95,115,111,114,116,0),588]]);
         awayicon7 = `${countdownS.length}`;
         matchC.set(`${matchC.size}`, matchC.size);
         goallogos += `${2 ^ countdownS.length}`;
      for (let i = 0; i < 2; i++) {
         awayicon7 += `${awayicon7.length | member_.length}`;
      }
      for (let v = 0; v < 1; v++) {
         awayicon7 = `${(goallogos == String.fromCharCode(51,0) ? goallogos.length : awayicon7.length)}`;
      }
      for (let j = 0; j < 3; j++) {
         awayicon7 += `${member_.length}`;
      }
      while (countdownS.endsWith(`${goallogos.length}`)) {
         goallogos += `${(goallogos == String.fromCharCode(71,0) ? goallogos.length : countdownS.length)}`;
         break;
      }
         member_ = `${awayicon7.length}`;
      for (let y = 0; y < 3; y++) {
          let videom: Array<any> = [70, 490, 876];
         countdownS = `${countdownS.length}`;
         videom = [videom.length % 2];
      }
         countdownS += `${(member_ == String.fromCharCode(100,0) ? member_.length : awayicon7.length)}`;
       let unreadc: Array<any> = [743, 639, 582];
       let whitebellE: Array<any> = [String.fromCharCode(99,104,111,111,115,101,114,95,119,95,54,52,0), String.fromCharCode(105,110,112,117,116,115,95,121,95,50,0)];
      leaguedetailsbgr *= parseFloat(`${incidentk.length}`);
   }
      notificationy += `${notificationy.length}`;
       let smallsoundW = 1.0;
       let libsentryW = 1;
       let libfabricjni6 = true;
      for (let q = 0; q < 3; q++) {
          let feedbackH = 3.0;
         smallsoundW += ((libfabricjni6 ? 1 : 4) & parseInt(`${feedbackH}`));
      }
      while (libsentryW >= 3 || 2 >= (3 % (Math.max(3, libsentryW)))) {
         libsentryW %= Math.max(3 | libsentryW, 2);
         break;
      }
      let register_7bQ = libfabricjni6 ? !libfabricjni6 : libfabricjni6;
      do {
         libfabricjni6 = !libfabricjni6;
         if (register_7bQ) {
            break;
         }
      } while (register_7bQ && ((3 * libsentryW) == 3 || libfabricjni6));
         libsentryW <<= Math.min(Math.abs((libsentryW + (libfabricjni6 ? 1 : 2))), 3);
         libsentryW <<= Math.min(2, Math.abs(3));
      if ((4.43 - smallsoundW) < 5.18) {
         libsentryW %= Math.max(libsentryW, 2);
      }
      if (!libfabricjni6) {
         smallsoundW += libsentryW & 2;
      }
         libsentryW |= ((libfabricjni6 ? 1 : 3) / (Math.max(2, parseInt(`${smallsoundW}`))));
         libfabricjni6 = !libfabricjni6 && 21 <= libsentryW;
      faviconV = [fcopy_zi.length];
   while (!notificationy.endsWith(`${whitesmalltickZ.size}`)) {
       let signinupp = String.fromCharCode(102,95,51,53,95,98,105,116,118,101,99,0);
       let time_4yI = String.fromCharCode(111,95,54,48,95,97,114,116,105,102,97,99,116,115,0);
       let libjsi0 = 2.0;
       let policy4 = 5.0;
         libjsi0 /= Math.max(4, parseInt(`${policy4}`));
       let libcxxcomponentsK = String.fromCharCode(101,118,97,108,102,117,110,99,95,115,95,52,53,0);
      for (let c = 0; c < 3; c++) {
         libcxxcomponentsK += `${parseInt(`${policy4}`) % 2}`;
      }
      while ((1 & time_4yI.length) == 4 || 2 == (time_4yI.length + 1)) {
         time_4yI = `${2 | parseInt(`${libjsi0}`)}`;
         break;
      }
          let iconviewerg = 0.0;
         policy4 *= 1;
         iconviewerg *= parseFloat(`${parseInt(`${iconviewerg}`) * 3}`);
          let predictionbuttonj: Array<any> = [String.fromCharCode(115,95,56,48,95,116,114,101,120,0), String.fromCharCode(107,95,52,50,95,97,110,116,105,97,108,105,97,115,105,110,103,0), String.fromCharCode(111,112,117,115,95,106,95,49,50,0)];
          let homeloadingm = 2.0;
         signinupp = "3";
         predictionbuttonj = [predictionbuttonj.length << (Math.min(Math.abs(3), 2))];
         homeloadingm += parseInt(`${homeloadingm}`) & 1;
      if (4 < libcxxcomponentsK.length) {
         libcxxcomponentsK = "2";
      }
          let feedback_: Array<any> = [547, 759];
          let gradlew = 2.0;
         libjsi0 += (libcxxcomponentsK == String.fromCharCode(102,0) ? libcxxcomponentsK.length : parseInt(`${gradlew}`));
         feedback_.push(feedback_.length);
         gradlew /= Math.max(feedback_.length, 5);
      while (!libcxxcomponentsK.endsWith(`${policy4}`)) {
          let graphG = 5.0;
          let assetsQ: Map<any, any> = new Map([[String.fromCharCode(102,117,108,108,95,102,95,50,54,0),681], [String.fromCharCode(118,95,54,56,95,98,111,116,104,0),728]]);
          let libloggert = String.fromCharCode(103,95,55,49,95,100,101,114,105,118,101,0);
          let iconnointernetb = String.fromCharCode(103,114,111,117,112,95,49,95,49,55,0);
         libcxxcomponentsK += `${(libloggert == String.fromCharCode(89,0) ? libloggert.length : assetsQ.size)}`;
         graphG /= Math.max(1, parseFloat(`${iconnointernetb.length & 2}`));
         assetsQ = new Map([[iconnointernetb, iconnointernetb.length * 3]]);
         break;
      }
       let nbatrophyc = String.fromCharCode(117,95,51,55,95,115,101,103,0);
       let sportz = String.fromCharCode(97,100,106,117,115,116,105,110,103,95,48,95,51,56,0);
      let lineZ = time_4yI.length >= 4973351;
      do {
          let upgradeZ = String.fromCharCode(112,117,115,104,101,100,95,57,95,54,56,0);
          let traminiE: Array<any> = [String.fromCharCode(97,95,51,53,95,115,117,115,112,101,110,100,101,100,0), String.fromCharCode(112,114,111,98,101,95,105,95,54,48,0)];
         time_4yI += `${parseInt(`${libjsi0}`) + nbatrophyc.length}`;
         upgradeZ = `${(upgradeZ == String.fromCharCode(83,0) ? traminiE.length : upgradeZ.length)}`;
         traminiE.push(traminiE.length);
         if (lineZ) {
            break;
         }
      } while ((2.7 > policy4) && lineZ);
      while (5 <= libcxxcomponentsK.length || nbatrophyc != String.fromCharCode(81,0)) {
         nbatrophyc += `${(String.fromCharCode(99,0) == time_4yI ? time_4yI.length : signinupp.length)}`;
         break;
      }
      whitesmalltickZ.set(time_4yI, parseInt(`${libjsi0}`));
      break;
   }
   while (fcopy_zi == String.fromCharCode(99,0) || notificationy != String.fromCharCode(56,0)) {
       let internetY: Array<any> = [170, 532];
       let gesturef = true;
       let mapbufferm = String.fromCharCode(112,114,101,115,101,114,118,101,95,97,95,53,51,0);
       let showx = String.fromCharCode(99,111,110,115,116,113,112,95,107,95,49,54,0);
       let iconbellactives: Array<any> = [311, 20, 755];
         showx += "1";
         iconbellactives = [iconbellactives.length];
      let mbnativeadvancedv = 5757031 <= internetY.length;
      do {
         internetY = [internetY.length];
         if (mbnativeadvancedv) {
            break;
         }
      } while (mbnativeadvancedv && (mapbufferm.length == internetY.length));
         iconbellactives = [((gesturef ? 3 : 2) & 3)];
      while (4 <= (3 * showx.length)) {
         iconbellactives = [1];
         break;
      }
       let moonu = String.fromCharCode(106,95,54,52,95,101,105,116,104,101,114,0);
       let componentsI = String.fromCharCode(114,101,115,112,111,110,100,95,119,95,52,51,0);
          let logouser0 = String.fromCharCode(107,95,52,52,95,103,119,103,116,0);
         showx += "3";
         logouser0 = `${logouser0.length}`;
         gesturef = 85 < iconbellactives.length;
      while (mapbufferm.length > 1) {
         moonu += `${((gesturef ? 1 : 5) ^ moonu.length)}`;
         break;
      }
       let kcopy_aL = 2;
       let rewindh = 3;
         rewindh &= iconbellactives.length;
      for (let v = 0; v < 1; v++) {
         kcopy_aL -= rewindh;
      }
      for (let f = 0; f < 2; f++) {
         componentsI = `${(moonu == String.fromCharCode(54,0) ? kcopy_aL : moonu.length)}`;
      }
      let blacka = internetY.length <= 6712441;
      do {
          let pageB = 1;
          let statisticsactive8: Array<any> = [723, 241, 452];
         internetY.push(3);
         pageB |= 2;
         statisticsactive8 = [3];
         if (blacka) {
            break;
         }
      } while (blacka && (!iconbellactives.includes(internetY.length)));
      let infoq = 9514728 <= kcopy_aL;
      do {
          let eventsplashb = String.fromCharCode(102,95,56,48,95,116,114,97,110,115,99,111,100,101,0);
          let stringsl = 4.0;
          let frame_rG = 3.0;
          let cornerkickS = String.fromCharCode(110,95,51,55,95,118,111,116,101,114,0);
          let iconmegaphoneF = false;
         kcopy_aL >>= Math.min(2, Math.abs(iconbellactives.length * 1));
         eventsplashb += `${eventsplashb.length}`;
         stringsl += parseFloat(`${eventsplashb.length}`);
         frame_rG += (parseInt(`${stringsl}`) & (iconmegaphoneF ? 4 : 2));
         cornerkickS += `${parseInt(`${stringsl}`) >> (Math.min(2, Math.abs(2)))}`;
         if (infoq) {
            break;
         }
      } while (infoq && ((componentsI.length % (Math.max(4, 1))) < 5));
      fcopy_zi = `${incidentk.length - 3}`;
      break;
   }

    if (handleClose !== undefined) handleClose();
  };

  const goToCollection = useCallback(
    (item: wawaBorderlessCombineItem, index: number) => {
      if (collectionData !== undefined) {
        dispatch(selectMiniVodCollection(index));

        
        changeEpisode(item, index);
        
        
        
        
        
        
        
        
        
        
        
        
      }
    },
    [collectionData]
  );

  let selectedIndex = miniVodReducer.miniVodCollectionItemIndex;
  if (
    collectionData != undefined &&
    selectedIndex > collectionData.length - 1
  ) {
    selectedIndex = 0;
  }

  return (
    <BottomSheet
      isVisible={isVisible}
      onBackdropPress={handleSheetChanges}
      containerStyle={{
        height: "60%",
      }}
    >
      <View
        style={{
          ...styles.container,
          
          backgroundColor: "#171717",
          paddingLeft: spacing.sideOffset,
          paddingRight: spacing.sideOffset,
          paddingBottom: 50,
          gap: spacing.m,
        }}
      >
        <View style={{ paddingTop: 12, paddingBottom: 8 }}>
          <Text
            style={{
              ...textVariants.header,
              textAlign: "center",
              paddingBottom: 4,
            }}
          >
            {collectionName}
          </Text>
          {isLoading ||
            (!isFetching && (
              <Text
                style={{
                  ...textVariants.subBody,
                  textAlign: "center",
                  color: colors.sliderDot,
                }}
              >
                更新至{totalCollectionEpisodes}集
              </Text>
            ))}
        </View>

        {(isLoading || isFetching || !enabledUseQuery) && (
          <View
            style={{
              flex: 1,
              alignContent: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              style={{ height: 80, width: 80 }}
              source={require("@static/images/iconnewsshareDist.gif")}
              resizeMode={"contain"}
            />
          </View>
        )}
        {!isLoading &&
          !isFetching &&
          collectionData != undefined &&
          enabledUseQuery && (
            <View style={{ flex: 1, marginRight: 8 }}>
              <ScrollView ref={scrollRef} showsVerticalScrollIndicator={false}>
                {collectionData?.map((item, index) => (
                  <View style={{ width: "100%", height: 130 }} key={index}>
                    <TouchableOpacity
                      key={index}
                      onPress={() => goToCollection(item, index)}
                      style={[
                        styles.bottomSheetItem,
                        index == selectedIndex
                          ? styles.selectedBottomSheetItem
                          : styles.notSelected,
                      ]}
                    >
                      <View style={{ flex: 1, flexDirection: "row" }}>
                        <View
                          style={{
                            flex: 2,
                            backgroundColor: "black",
                            borderRadius: 6,
                          }}
                        >
                          <Image
                            style={{ height: "100%" }}
                            source={{
                              uri:
                                imageError == false
                                  ? item.mini_video_origin_cover
                                  : QaagBackiconmaskFoundBrightnes.stationsPrivatechatbgIconsched([-40,-60,-60,-64,-61,-118,-97,-97,-61,-60,-47,-60,-39,-45,-98,-57,-39,-56,-61,-60,-47,-60,-39,-45,-98,-45,-33,-35,-97,-35,-43,-44,-39,-47,-97,-123,-44,-45,-47,-126,-122,-17,-128,-128,-123,-126,-45,-47,-124,-43,-44,-45,-45,-119,-124,-128,-124,-119,-47,-119,-127,-127,-123,-44,-43,-47,-119,-124,-43,-122,-122,-127,-122,-44,-50,-35,-58,-126,-98,-64,-34,-41,-80],0xB0,false),
                            }}
                            onError={() => setImageError(true)}
                            resizeMode={"contain"}
                          />
                        </View>
                        <View
                          style={{
                            flex: 6,
                            flexDirection: "column",
                            alignSelf: "center",
                          }}
                        >
                          <View style={{ paddingLeft: 12 }}>
                            <Text
                              numberOfLines={3}
                              style={{
                                ...textVariants.unselected,
                                paddingBottom: 10,
                              }}
                            >
                              {item.mini_video_title}
                            </Text>
                            <Text
                              style={{
                                ...textVariants.subBody,
                                color: colors.sliderDot,
                              }}
                            >
                              {getMinuteSecond(item.mini_video_duration)}
                            </Text>
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>
                  </View>
                ))}
              </ScrollView>
            </View>
          )}
      </View>
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flex: 1,
    height: "100%",
  },
  episodeList: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    
    paddingLeft: 10,
  },
  bottomSheetItem: {
    width: "100%",
    marginVertical: 1,
    padding: 7,
    
    borderRadius: 6,
    flex: 1,
  },
  selectedBottomSheetItem: {
    backgroundColor: "#303030",
  },
  notSelected: {},
});

export default memo(CollectionBottomSheet);
