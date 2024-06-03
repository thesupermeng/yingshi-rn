import React, { memo, useState, useRef, useEffect, useCallback, useLayoutEffect } from "react";
import { View, Text, FlatList, Dimensions } from "react-native";
import { useFocusEffect, useTheme } from "@react-navigation/native";
import styles from "./tt_with_success";
import { TouchableOpacity } from "react-native";
import { formatMatchDate } from "../../utility/utils";
import { ttOrange } from "@redux/tt_updates_bottom";
import { ttAway } from "../../types/tt_zhubo";
import { Url } from "../../middleware/tt_field";
import { useInfiniteQuery } from "@tanstack/react-query";
import ttDescTerms from "../../middleware/tt_chat";
import MatchScheduleVip from "./tt_membership";
import FastImage from "../../../components/common/tt_connection";
import { TOPON_BANNER_HEIGHT } from "@utility/tt_trophy_cross";
import { ttAnalytics } from "@type/tt_line_borderless";
import { ttReactnativejsMalaysia } from "@utility/tt_side_description";
import { ttGemfile } from "@constants";
import { ttConfigRecommendation } from "../../../../tt_copy_floater";
import { BannerContainer } from "../../../components/container/tt_injury";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAppSelector, useSelector } from "@hooks/tt_spec_download";
import tt_humidity_guide from "../../../../Umeng/tt_humidity_guide";
import { ttDropdown } from "../../../api/tt_refresh_friends";
import { ttGoal } from "@redux/reducers/tt_selected";
import { ttFast } from "@models/tt_stations_right";
import { screenModel } from "@type/tt_twitter_data";

interface ttSmall {
  matchTypeID: number;
  status?: number;
  setShowBecomeVIPOverlay: any;
  bgDark?: boolean;
  isLive?: boolean;
}

type ttBackgroundDefault = {
  date: string | undefined;
  data: ttAway | undefined;
};

type tt_change_trash = {
  headers: number[];
  data: ttBackgroundDefault[];
};

const MatchScheduleList = ({
  matchTypeID,
  status = -1,
  setShowBecomeVIPOverlay,
  bgDark = false,
  isLive = false,
}: ttSmall) => {
  const { colors, textVariants, spacing } = useTheme();
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  const latestListDate = useRef<Date | undefined>();
  let flatlistRef = useRef();

  const [isFetchNext, setFetchNext] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [showLoading2, setShowLoading2] = useState(false);
  const [bannerAd, setBannerAd] = useState<ttAnalytics>();
  const [bannerAdList, setBannerAdList] = useState<Array<ttAnalytics>>([]);
  const userState = useSelector<ttGoal>('userReducer');
  const isVip = ttFast.isVip(userState.user);
  const screenState = useSelector<screenModel>('screenReducer');


  const [matches, setMatches] = useState<tt_change_trash>({
    headers: [],
    data: [],
  });

  const getUrl = () => {
       let detailW = String.fromCharCode(110,95,49,49,95,101,109,98,101,100,100,101,100,0);
    let reactnativejsH = String.fromCharCode(99,104,101,99,107,112,111,105,110,116,95,105,95,55,50,0);
    let edit5 = false;
    let tempV = false;
    let window_np = String.fromCharCode(98,117,99,107,101,116,115,95,111,95,49,55,0);
    let short_juP = 5.0;
    let networkr = String.fromCharCode(97,117,100,105,111,100,115,112,95,122,95,54,57,0);
    let corner9: Array<any> = [289, 609];
      window_np += `${window_np.length}`;
       let panglew = String.fromCharCode(117,95,53,52,95,99,108,111,115,101,115,116,0);
         panglew += "1";
      let nterstitialn = panglew.length >= 8574842;
      do {
         panglew = "3";
         if (nterstitialn) {
            break;
         }
      } while (nterstitialn && (!panglew.includes(panglew)));
       let modulek = true;
       let history1 = false;
      window_np = `${((edit5 ? 4 : 5) << (Math.min(networkr.length, 3)))}`;

    let url = "";

       let penaltyl: Map<any, any> = new Map([[String.fromCharCode(106,95,53,57,95,97,117,116,111,100,101,116,101,99,116,111,114,0),String.fromCharCode(114,101,99,111,118,101,114,121,95,117,95,56,53,0)], [String.fromCharCode(98,95,54,53,95,108,105,98,97,118,100,101,118,105,99,101,0),String.fromCharCode(114,101,99,118,95,104,95,53,0)]]);
       let matchesH = 1.0;
       let g_managerB = String.fromCharCode(98,97,99,107,115,108,97,115,104,95,113,95,50,53,0);
      while (5 == g_managerB.length) {
          let starO = 0;
         g_managerB = `${penaltyl.size - 1}`;
         starO %= Math.max(starO, 3);
         break;
      }
      while (penaltyl.get(`${matchesH}`) != null) {
          let detailso = 0.0;
          let editN = String.fromCharCode(105,110,116,101,114,110,97,108,95,111,95,57,53,0);
          let indicatorL = 3;
          let nalyticsF: Array<any> = [563, 880];
          let description_qR = 0;
         matchesH /= Math.max(3, parseFloat(`${editN.length}`));
         detailso += parseFloat(`${indicatorL ^ description_qR}`);
         editN += `${nalyticsF.length}`;
         indicatorL ^= indicatorL << (Math.min(Math.abs(parseInt(`${detailso}`)), 4));
         nalyticsF.push(nalyticsF.length >> (Math.min(Math.abs(2), 1)));
         description_qR >>= Math.min(Math.abs(description_qR & 1), 3);
         break;
      }
      for (let b = 0; b < 2; b++) {
         penaltyl.set(g_managerB, g_managerB.length | penaltyl.size);
      }
      let ying6 = 6411041.0 >= matchesH;
      do {
         matchesH += parseFloat(`${parseInt(`${matchesH}`)}`);
         if (ying6) {
            break;
         }
      } while (ying6 && (!Array.from(penaltyl.values()).includes(matchesH)));
      for (let i = 0; i < 3; i++) {
          let empty6 = String.fromCharCode(115,116,111,114,101,95,111,95,49,56,0);
          let countdownN = true;
         penaltyl.set(empty6, empty6.length);
         countdownN = (!countdownN ? !countdownN : !countdownN);
      }
       let stringsI = String.fromCharCode(100,99,109,112,95,102,95,51,51,0);
         g_managerB = `${penaltyl.size}`;
      if ((matchesH * 5.32) > 1.53) {
          let quest1: Array<any> = [124, 600];
          let sheetj = false;
          let successk = 3.0;
          let yingD = String.fromCharCode(97,95,53,54,95,116,103,99,97,108,108,115,0);
          let watcho = 0.0;
         matchesH *= parseFloat(`${penaltyl.size}`);
         quest1 = [3];
         sheetj = 62.69 <= successk;
         successk += 3 >> (Math.min(Math.abs(parseInt(`${watcho}`)), 1));
         yingD = `${quest1.length}`;
         watcho -= (parseFloat(`${parseInt(`${successk}`) - (sheetj ? 3 : 3)}`));
      }
         stringsI = "1";
      reactnativejsH = `${((tempV ? 1 : 4))}`;
       let feedbackd = true;
       let soundY: Array<any> = [300, 86];
      let themeD = 5767789 <= soundY.length;
      do {
          let whistlel = 5.0;
         soundY = [(1 - (feedbackd ? 2 : 4))];
         whistlel += parseFloat(`${parseInt(`${whistlel}`) << (Math.min(1, Math.abs(3)))}`);
         if (themeD) {
            break;
         }
      } while (((4 % (Math.max(9, soundY.length))) > 4 || 4 > soundY.length) && themeD);
         feedbackd = soundY.length >= 72 && !feedbackd;
         feedbackd = soundY.includes(feedbackd);
          let roundC: Array<any> = [750, 680, 200];
          let nativeZ: Map<any, any> = new Map([[String.fromCharCode(111,117,116,108,105,110,101,95,50,95,57,51,0),420], [String.fromCharCode(101,95,54,52,95,108,111,99,107,101,100,0),428], [String.fromCharCode(116,121,112,105,110,103,95,113,95,50,49,0),74]]);
          let mimow = 5.0;
         feedbackd = 35.60 > mimow;
         roundC = [roundC.length ^ 1];
         nativeZ.set(`${roundC.length}`, 3);
         mimow -= roundC.length;
         soundY.push(soundY.length);
      let chinasameZ = soundY.length >= 6750401;
      do {
          let penaltyg = true;
          let ajaxI = false;
         soundY.push(((ajaxI ? 1 : 5) | soundY.length));
         penaltyg = (!penaltyg ? penaltyg : penaltyg);
         ajaxI = !penaltyg && !penaltyg;
         if (chinasameZ) {
            break;
         }
      } while (chinasameZ && (4 > (soundY.length + 5)));
      detailW = `${((edit5 ? 2 : 1))}`;
    if (matchTypeID !== -1) {
      url += `?sports_type=${matchTypeID}`;
    }
    if (url === "") {
      url = "?";
    }
    if (status !== -1) {
      url += `&status=${status}`;
    } else {
      url += `&is_live=${true}`;
    }
    

       let footballQ = String.fromCharCode(109,95,51,55,95,115,117,98,120,0);
       let commentE = String.fromCharCode(99,111,110,102,108,105,99,116,101,100,95,112,95,57,0);
       let matchw: Map<any, any> = new Map([[String.fromCharCode(104,97,114,100,95,114,95,55,0),false ], [String.fromCharCode(99,95,55,53,95,102,117,122,122,101,114,115,0),true ], [String.fromCharCode(97,121,111,117,116,95,105,95,55,53,0),true ]]);
          let custom5 = String.fromCharCode(112,95,53,53,95,103,101,115,116,117,114,101,115,0);
          let volumeH = 3.0;
          let userY = String.fromCharCode(115,117,112,112,114,101,115,115,101,115,95,102,95,55,49,0);
         footballQ = `${userY.length}`;
         custom5 += `${parseInt(`${volumeH}`)}`;
         volumeH -= parseFloat(`${3 - custom5.length}`);
         userY = "1";
          let ecopy_xN: Array<any> = [88, 245, 979];
          let readC = String.fromCharCode(102,95,52,51,95,108,111,99,105,0);
         commentE += `${ecopy_xN.length / (Math.max(commentE.length, 9))}`;
         ecopy_xN.push(3 | readC.length);
         readC += `${2 | readC.length}`;
      if (!commentE.startsWith(`${matchw.size}`)) {
         matchw = new Map([[`${matchw.size}`, footballQ.length << (Math.min(1, Math.abs(matchw.size)))]]);
      }
          let sigmobV = 4;
         commentE = `${(String.fromCharCode(52,0) == footballQ ? commentE.length : footballQ.length)}`;
         sigmobV ^= sigmobV;
         matchw.set(`${commentE}`, 3);
      while (!commentE.startsWith(footballQ)) {
         footballQ = `${commentE.length >> (Math.min(1, Math.abs(matchw.size)))}`;
         break;
      }
      for (let x = 0; x < 1; x++) {
          let telegramy: Array<any> = [28, 403];
          let activej = String.fromCharCode(114,95,50,50,95,115,117,103,103,101,115,116,0);
          let umengs = String.fromCharCode(108,95,50,48,95,114,117,108,101,115,0);
          let logind = 2;
         footballQ += `${(String.fromCharCode(114,0) == activej ? activej.length : footballQ.length)}`;
         telegramy = [1 - logind];
         umengs += `${logind}`;
      }
         matchw.set(`${footballQ}`, matchw.size);
         commentE = `${footballQ.length << (Math.min(4, Math.abs(matchw.size)))}`;
      window_np += `${((edit5 ? 4 : 2))}`;
      detailW += `${3 | window_np.length}`;
    

   for (let d = 0; d < 1; d++) {
      tempV = !edit5;
   }
      short_juP -= (parseFloat(`${(edit5 ? 4 : 3)}`));
    

      short_juP -= parseFloat(`${window_np.length}`);
   for (let v = 0; v < 3; v++) {
       let time_ot = String.fromCharCode(118,95,57,57,95,100,114,111,112,111,102,102,0);
       let championU = String.fromCharCode(100,95,53,54,95,102,114,97,109,101,115,101,116,116,101,114,0);
      for (let t = 0; t < 2; t++) {
          let firebaseJ = String.fromCharCode(114,111,116,97,116,105,111,110,97,110,103,108,101,95,103,95,51,54,0);
          let moonw = 1.0;
          let stationc: Map<any, any> = new Map([[String.fromCharCode(116,97,107,101,111,118,101,114,95,111,95,56,51,0),190], [String.fromCharCode(111,95,50,52,95,99,104,101,99,107,101,114,0),189], [String.fromCharCode(105,110,116,101,114,115,112,101,114,115,101,100,95,106,95,50,50,0),832]]);
          let brightnessV: Map<any, any> = new Map([[String.fromCharCode(110,95,56,53,95,115,122,97,98,111,0),863], [String.fromCharCode(102,95,54,48,95,115,117,98,98,108,111,99,107,115,0),900], [String.fromCharCode(99,104,114,111,109,97,95,111,95,50,57,0),912]]);
         championU += `${(String.fromCharCode(76,0) == firebaseJ ? firebaseJ.length : brightnessV.size)}`;
         moonw -= 2;
         stationc.set(`${moonw}`, stationc.size);
         brightnessV.set(`${moonw}`, 2);
      }
      while (championU.length < time_ot.length) {
         championU = `${championU.length}`;
         break;
      }
      let notificationv = String.fromCharCode(95,108,120,119,55,113,52,50,0) == championU;
      do {
          let plashh = String.fromCharCode(97,95,52,54,95,98,101,116,104,115,111,102,116,118,105,100,101,111,0);
         championU = `${championU.length}`;
         plashh += "3";
         if (notificationv) {
            break;
         }
      } while (notificationv && (championU.length == time_ot.length));
      while (championU.length >= 2) {
         championU = `${championU.length & 1}`;
         break;
      }
         championU = `${time_ot.length}`;
          let homeW = 3;
          let handlerI = String.fromCharCode(118,105,100,101,111,114,101,110,100,101,114,101,114,95,118,95,50,49,0);
          let complete7 = 3.0;
         time_ot = `${(championU == String.fromCharCode(51,0) ? championU.length : homeW)}`;
         homeW %= Math.max(4, handlerI.length * parseInt(`${complete7}`));
         handlerI += `${handlerI.length}`;
         complete7 -= parseFloat(`${parseInt(`${complete7}`)}`);
      window_np = `${(String.fromCharCode(65,0) == time_ot ? detailW.length : time_ot.length)}`;
   }
    

   for (let i = 0; i < 3; i++) {
       let unticka = String.fromCharCode(120,95,50,48,95,119,101,98,0);
       let match5 = 3.0;
       let carouselD = String.fromCharCode(119,95,53,53,95,121,99,98,99,114,0);
         carouselD = "2";
         match5 -= parseFloat(`${3 | unticka.length}`);
         match5 *= parseFloat(`${1 - unticka.length}`);
      for (let x = 0; x < 1; x++) {
         match5 *= parseFloat(`${3}`);
      }
         match5 += parseFloat(`${3}`);
      tempV = networkr.length == 47 && 47 == unticka.length;
   }
      short_juP += parseFloat(`${networkr.length & reactnativejsH.length}`);
    

      networkr = `${networkr.length | parseInt(`${short_juP}`)}`;
   for (let y = 0; y < 1; y++) {
       let profile1 = String.fromCharCode(116,120,104,97,115,104,95,105,95,50,0);
      for (let e = 0; e < 1; e++) {
         profile1 = `${(profile1 == String.fromCharCode(71,0) ? profile1.length : profile1.length)}`;
      }
         profile1 += "1";
         profile1 += `${(profile1 == String.fromCharCode(57,0) ? profile1.length : profile1.length)}`;
      window_np += `${(String.fromCharCode(100,0) == profile1 ? parseInt(`${short_juP}`) : profile1.length)}`;
   }
    

       let frame_fm = String.fromCharCode(113,95,51,57,95,116,114,117,110,99,97,116,105,111,110,0);
      for (let a = 0; a < 1; a++) {
         frame_fm += `${frame_fm.length}`;
      }
          let philippinesP = 0;
          let dplusM: Array<any> = [678, 810];
          let gemfileI = String.fromCharCode(120,95,55,53,95,97,117,116,111,102,105,108,108,0);
         frame_fm = `${dplusM.length | gemfileI.length}`;
         philippinesP <<= Math.min(Math.abs(philippinesP), 4);
         dplusM.push(philippinesP % (Math.max(5, philippinesP)));
      for (let x = 0; x < 1; x++) {
         frame_fm = `${frame_fm.length + 1}`;
      }
      corner9.push(((tempV ? 2 : 3) % (Math.max(3, 3))));
       let nalyticsE = String.fromCharCode(98,105,110,97,114,121,95,104,95,57,55,0);
       let teams = String.fromCharCode(117,95,54,54,95,115,116,99,98,0);
       let bridgeB = 1.0;
         teams = "2";
       let notificationk: Array<any> = [431, 30];
         notificationk.push(3);
         nalyticsE = "3";
      let streamingc = String.fromCharCode(113,50,107,114,118,53,54,119,0) == teams;
      do {
          let nalytics6: Array<any> = [48, 437, 198];
          let soundk: Map<any, any> = new Map([[String.fromCharCode(102,95,51,53,95,115,111,100,101,97,108,108,111,99,0),false ], [String.fromCharCode(117,95,54,51,95,109,117,108,114,101,115,0),false ]]);
          let weiboa = 3;
         teams = `${teams.length % (Math.max(1, 7))}`;
         nalytics6 = [3];
         soundk = new Map([[`${soundk.size}`, soundk.size]]);
         weiboa *= 2 & nalytics6.length;
         if (streamingc) {
            break;
         }
      } while ((1 >= (teams.length ^ 2)) && streamingc);
       let historyn = 3;
      while (4.95 >= (bridgeB + 5.73) && (5.73 + bridgeB) >= 5.36) {
         historyn |= parseInt(`${bridgeB}`) * nalyticsE.length;
         break;
      }
      let tumbnailH = 6751110 >= nalyticsE.length;
      do {
         nalyticsE += "3";
         if (tumbnailH) {
            break;
         }
      } while ((teams == nalyticsE) && tumbnailH);
         notificationk = [historyn];
      reactnativejsH += `${parseInt(`${bridgeB}`) % (Math.max(teams.length, 6))}`;
    

   if (reactnativejsH != String.fromCharCode(72,0)) {
       let logini = 3.0;
       let plashE = String.fromCharCode(112,114,101,109,117,108,116,115,116,114,97,105,103,104,116,95,53,95,48,0);
         logini *= 1;
      let becomep = plashE.length >= 7642195;
      do {
         plashE += `${plashE.length * 1}`;
         if (becomep) {
            break;
         }
      } while (becomep && (logini == plashE.length));
      while ((logini * 5.42) < 5.50 && 5 < (parseInt(`${logini}`) * plashE.length)) {
          let downQ = false;
          let modalu: Array<any> = [51, 980];
          let vcopy_31 = String.fromCharCode(120,95,52,57,95,117,110,105,116,121,0);
          let fileR = 4.0;
          let layouth = String.fromCharCode(115,121,109,98,111,108,105,99,97,116,101,95,108,95,57,57,0);
         plashE = `${parseInt(`${fileR}`) * modalu.length}`;
         downQ = !layouth.startsWith(`${downQ}`);
         modalu.push(((downQ ? 5 : 5) - vcopy_31.length));
         vcopy_31 = `${layouth.length << (Math.min(vcopy_31.length, 1))}`;
         fileR += (parseFloat(`${vcopy_31 == String.fromCharCode(49,0) ? vcopy_31.length : (downQ ? 4 : 2)}`));
         break;
      }
       let indicatorI = String.fromCharCode(104,95,50,54,95,101,100,105,116,97,98,108,101,0);
       let selectx = String.fromCharCode(99,97,114,101,116,95,120,95,50,51,0);
          let materialZ: Map<any, any> = new Map([[String.fromCharCode(116,104,97,119,95,51,95,54,54,0),831], [String.fromCharCode(119,95,50,50,95,115,97,109,112,108,101,102,109,116,0),564]]);
          let splash8 = String.fromCharCode(98,95,49,95,116,97,100,100,0);
         indicatorI = `${(plashE == String.fromCharCode(98,0) ? plashE.length : parseInt(`${logini}`))}`;
         materialZ = new Map([[`${materialZ.size}`, 1]]);
         splash8 = `${splash8.length}`;
          let eventF: Array<any> = [String.fromCharCode(100,111,99,116,111,116,97,108,95,120,95,52,53,0), String.fromCharCode(110,95,57,48,95,112,111,115,116,97,108,0)];
          let mbjscommon7 = false;
          let renewP = 3.0;
         indicatorI = `${((mbjscommon7 ? 1 : 1) / (Math.max(parseInt(`${renewP}`), 8)))}`;
         eventF = [eventF.length];
         mbjscommon7 = eventF.length <= 6 || 6 <= eventF.length;
      networkr = "3";
   }
   for (let k = 0; k < 3; k++) {
       let dicea = String.fromCharCode(118,111,105,99,101,109,97,105,108,95,99,95,51,48,0);
       let firebasei = String.fromCharCode(108,95,56,50,95,99,111,100,101,99,115,117,98,98,108,111,99,107,0);
       let sheetJ = String.fromCharCode(108,111,97,100,95,110,95,55,48,0);
       let watchi = String.fromCharCode(97,108,115,97,115,121,109,98,111,108,116,97,98,108,101,95,49,95,57,54,0);
          let crossG = 3;
         sheetJ += "3";
         crossG %= Math.max(4, crossG & 3);
      while (3 > watchi.length) {
         watchi += `${(watchi == String.fromCharCode(56,0) ? watchi.length : firebasei.length)}`;
         break;
      }
      while (!dicea.includes(`${firebasei.length}`)) {
         dicea = `${watchi.length % 1}`;
         break;
      }
         watchi += `${firebasei.length}`;
         dicea += `${dicea.length}`;
      if (sheetJ.length == 2) {
          let diceX: Array<any> = [728, 355, 361];
         firebasei = `${watchi.length}`;
         diceX = [3];
      }
         firebasei += `${watchi.length >> (Math.min(Math.abs(2), 3))}`;
      let bellZ = 6999171 >= sheetJ.length;
      do {
         sheetJ += `${sheetJ.length ^ 3}`;
         if (bellZ) {
            break;
         }
      } while ((3 < watchi.length || sheetJ.length < 3) && bellZ);
      networkr += `${((edit5 ? 4 : 2))}`;
   }
    return Url.matches11 + url;
  };

  const url = getUrl();

  const fetchData = useCallback(async () => {
       let untickz: Map<any, any> = new Map([[String.fromCharCode(114,95,49,57,95,115,116,111,114,109,98,105,114,100,0),221], [String.fromCharCode(109,95,51,53,95,114,101,115,116,97,107,101,0),820]]);
    let downloadedV = String.fromCharCode(113,95,52,53,95,119,122,97,101,115,0);
    let shareH: Array<any> = [String.fromCharCode(112,114,101,109,105,117,109,95,99,95,50,0), String.fromCharCode(115,99,114,101,97,109,95,118,95,53,57,0), String.fromCharCode(109,101,109,106,114,110,108,95,117,95,50,52,0)];
    let castingT = 3;
    let textc = true;
    let calendar5 = 2;
    let viewerR = true;
    let sider = String.fromCharCode(100,95,56,51,95,97,100,97,112,116,105,118,101,0);
    let androidr = String.fromCharCode(110,95,54,95,115,104,105,102,116,0);
    let stationsh = String.fromCharCode(115,116,111,114,101,95,118,95,52,48,0);
    let malaysia8: Array<any> = [779, 229, 770];
   let cornerU = stationsh.length >= 5374773;
   do {
      stationsh += `${untickz.size & downloadedV.length}`;
      if (cornerU) {
         break;
      }
   } while ((2 >= (shareH.length ^ 1) && 5 >= (1 ^ stationsh.length)) && cornerU);
      calendar5 -= 1;

    const data = (await ttDescTerms.call(url, {}, "GET")).data;

   while (5 == downloadedV.length) {
      downloadedV = `${((textc ? 1 : 1) | 1)}`;
      break;
   }
      sider = `${((viewerR ? 5 : 1) & 2)}`;

    if (data !== undefined) {

      shareH = [downloadedV.length];
   let edit8 = stationsh == String.fromCharCode(54,53,101,112,120,106,55,0);
   do {
       let trophyT = String.fromCharCode(115,116,111,114,109,98,105,114,100,95,118,95,49,57,0);
       let j_playerH = 4;
       let stringZ: Map<any, any> = new Map([[String.fromCharCode(99,111,114,114,101,108,97,116,105,111,110,95,49,95,53,57,0),202], [String.fromCharCode(118,95,51,49,95,114,101,99,111,114,100,101,100,0),451], [String.fromCharCode(108,105,103,104,116,101,110,105,110,103,95,119,95,56,49,0),130]]);
       let modee = String.fromCharCode(99,111,101,102,102,115,112,95,113,95,49,48,0);
         trophyT = `${j_playerH % (Math.max(modee.length, 8))}`;
      for (let p = 0; p < 2; p++) {
         trophyT += `${(modee == String.fromCharCode(112,0) ? stringZ.size : modee.length)}`;
      }
       let mbbidq = 0;
       let leagueB = 2;
      while (trophyT.startsWith(`${leagueB}`)) {
         trophyT += `${mbbidq}`;
         break;
      }
          let floateru: Array<any> = [915, 151, 632];
          let fillo = 1.0;
          let pagew = false;
         stringZ = new Map([[`${stringZ.size}`, ((pagew ? 3 : 5) >> (Math.min(Math.abs(3), 1)))]]);
         floateru.push(parseInt(`${fillo}`));
         fillo *= parseFloat(`${2}`);
         pagew = 66.74 <= fillo;
      for (let s = 0; s < 3; s++) {
         trophyT += "2";
      }
         modee += "3";
         leagueB /= Math.max(3, j_playerH >> (Math.min(2, Math.abs(mbbidq))));
      if (trophyT.includes(`${stringZ.size}`)) {
         trophyT += `${trophyT.length}`;
      }
          let tooltipsY: Array<any> = [609, 318, 558];
          let actiony = String.fromCharCode(99,111,110,116,114,111,108,108,101,114,115,95,121,95,52,50,0);
         mbbidq -= leagueB;
         tooltipsY = [(actiony == String.fromCharCode(78,0) ? tooltipsY.length : actiony.length)];
      while (1 >= (1 - stringZ.size) && (stringZ.size - 1) >= 3) {
         trophyT += "1";
         break;
      }
          let detailp = 3.0;
         stringZ = new Map([[`${leagueB}`, modee.length]]);
         detailp /= Math.max(3, 3);
      stationsh = `${(String.fromCharCode(101,0) == sider ? stationsh.length : sider.length)}`;
      if (edit8) {
         break;
      }
   } while (edit8 && (!viewerR || 5 >= stationsh.length));
      const dates = Object.keys(data);

       let pagination2 = false;
      for (let z = 0; z < 2; z++) {
          let settingg = String.fromCharCode(97,115,115,101,114,116,115,95,107,95,53,49,0);
          let sliderm = String.fromCharCode(114,101,119,97,114,100,115,95,49,95,53,0);
          let thailand2: Map<any, any> = new Map([[String.fromCharCode(100,101,99,98,110,95,57,95,54,57,0),427], [String.fromCharCode(119,95,49,55,95,97,99,116,105,118,97,116,101,100,0),798], [String.fromCharCode(117,95,49,48,95,110,116,101,114,110,97,108,0),40]]);
         pagination2 = 80 <= sliderm.length;
         settingg += `${thailand2.size - settingg.length}`;
         sliderm += `${settingg.length / (Math.max(3, 2))}`;
         thailand2.set(settingg, thailand2.size - 2);
      }
      if (!pagination2) {
          let pangleb: Array<any> = [String.fromCharCode(111,102,102,115,99,114,101,101,110,95,48,95,55,53,0), String.fromCharCode(101,95,57,55,95,116,105,109,101,111,117,116,115,0), String.fromCharCode(99,117,114,108,95,97,95,53,52,0)];
         pagination2 = ((pangleb.length >> (Math.min(1, Math.abs((pagination2 ? 70 : pangleb.length))))) == 70);
      }
      let castingI = pagination2 ? !pagination2 : pagination2;
      do {
         pagination2 = (pagination2 ? pagination2 : !pagination2);
         if (castingI) {
            break;
         }
      } while ((!pagination2 && !pagination2) && castingI);
      untickz = new Map([[stationsh, stationsh.length]]);
      sider += `${((textc ? 2 : 2))}`;
      let lst: ttBackgroundDefault[] = isFetchNext ? matches.data : [];
      let headers = isFetchNext ? matches.headers : [];
      let count = lst.length;

   for (let h = 0; h < 1; h++) {
      viewerR = shareH.length == downloadedV.length;
   }
      calendar5 <<= Math.min(2, Math.abs(2));
      if (latestListDate.current === undefined) {

      viewerR = shareH.length < sider.length;
      androidr = `${(String.fromCharCode(105,0) == sider ? castingT : sider.length)}`;
        latestListDate.current = new Date(dates[dates.length - 1]);
      }
      if (status <= 2) {

      sider += `${(sider == String.fromCharCode(82,0) ? untickz.size : sider.length)}`;
       let appsk = 1.0;
       let notificationg: Map<any, any> = new Map([[String.fromCharCode(116,104,101,109,101,95,99,95,53,57,0),184], [String.fromCharCode(112,114,111,106,101,99,116,105,111,110,95,114,95,49,48,0),346], [String.fromCharCode(97,112,112,114,111,118,97,108,95,116,95,51,53,0),924]]);
       let privacy8: Map<any, any> = new Map([[String.fromCharCode(114,101,99,111,118,101,114,95,112,95,57,57,0),String.fromCharCode(115,97,116,117,114,97,116,101,95,98,95,56,52,0)], [String.fromCharCode(112,95,51,56,95,110,111,110,110,117,108,108,100,101,115,116,105,110,97,116,105,111,110,0),String.fromCharCode(102,95,52,53,95,116,111,111,98,105,103,0)], [String.fromCharCode(116,95,48,95,109,98,118,115,0),String.fromCharCode(97,102,105,114,95,51,95,55,52,0)]]);
       let redirects = String.fromCharCode(116,95,53,48,95,105,110,118,111,107,101,114,0);
       let flipperO = String.fromCharCode(117,110,112,105,110,110,101,100,95,114,95,49,51,0);
      let streamingk = 7418127.0 >= appsk;
      do {
         appsk -= parseFloat(`${1}`);
         if (streamingk) {
            break;
         }
      } while (streamingk && ((flipperO.length & 2) == 1 || (3.69 * appsk) == 1.77));
      textc = (parseFloat(`${stationsh.length}`) - appsk) > 58.93;
        latestListDate.current = new Date(
          latestListDate.current.getTime() + 86400000
        );
      } else {

      downloadedV = "1";
      downloadedV += `${(String.fromCharCode(102,0) == stationsh ? stationsh.length : shareH.length)}`;
        latestListDate.current = new Date(
          latestListDate.current.getTime() - 86400000
        );
      }
      for (const date of dates) {

   if (5 > (castingT / (Math.max(androidr.length, 5))) && (5 / (Math.max(1, castingT))) > 3) {
      castingT ^= androidr.length;
   }
      viewerR = 71 <= androidr.length || stationsh == String.fromCharCode(87,0);
        const dateDate = new Date(date);

   if (textc) {
      shareH = [((textc ? 2 : 3))];
   }
      androidr += `${((viewerR ? 4 : 5) - (textc ? 1 : 5))}`;
        const now = new Date();

   for (let q = 0; q < 3; q++) {
      textc = sider.endsWith(`${textc}`);
   }
      textc = (calendar5 % (Math.max(downloadedV.length, 9))) > 90;
        const sevenDaysBefore = new Date(
          now.valueOf() - 7 * 24 * 60 * 60 * 1000
        );

   if (androidr.endsWith(`${viewerR}`)) {
      viewerR = 56 <= androidr.length;
   }
      downloadedV = "3";
        const sevenDaysAfter = new Date(
          now.valueOf() + 7 * 24 * 60 * 60 * 1000
        );

      shareH.push(calendar5);
   if (!sider.endsWith(androidr)) {
      sider += `${(stationsh.length % (Math.max(4, (textc ? 5 : 3))))}`;
   }

        if (dateDate < sevenDaysBefore || dateDate > sevenDaysAfter) continue;

        lst.push({ date: formatMatchDate(date), data: undefined });
        headers.push(count);

   while (1 <= (5 ^ calendar5)) {
      calendar5 %= Math.max(2 >> (Math.min(3, downloadedV.length)), 4);
      break;
   }
       let o_titleG: Map<any, any> = new Map([[String.fromCharCode(102,105,114,115,116,95,118,95,50,51,0),111], [String.fromCharCode(117,95,55,51,95,111,114,105,103,110,97,108,0),177], [String.fromCharCode(107,95,54,54,95,109,97,120,113,0),803]]);
       let mappingZ = 1.0;
       let sinaK = 1.0;
      while (Array.from(o_titleG.keys()).includes(`${sinaK}`)) {
         o_titleG.set(`${sinaK}`, parseInt(`${mappingZ}`) >> (Math.min(4, Math.abs(3))));
         break;
      }
       let upgrade5 = 3.0;
       let mbbidD = 3.0;
          let pause_ = 4;
          let middleW = String.fromCharCode(104,102,121,117,95,52,95,57,55,0);
         o_titleG.set(`${sinaK}`, parseInt(`${sinaK}`) << (Math.min(Math.abs(o_titleG.size), 3)));
         pause_ /= Math.max(1, 1);
         middleW += "2";
          let cnewinterstitial_ = String.fromCharCode(101,108,108,105,103,105,98,108,101,95,48,95,56,56,0);
          let default_py0 = 5.0;
         sinaK /= Math.max(parseFloat(`${parseInt(`${mbbidD}`) << (Math.min(1, Math.abs(parseInt(`${upgrade5}`))))}`), 1);
         cnewinterstitial_ = `${cnewinterstitial_.length}`;
         default_py0 *= parseFloat(`${cnewinterstitial_.length}`);
      if ((sinaK + mappingZ) <= 5.61 || 3.89 <= (sinaK + 5.61)) {
          let sortP = 3;
          let entryB: Array<any> = [528, 102];
         sinaK *= parseFloat(`${entryB.length * o_titleG.size}`);
         sortP %= Math.max(1 & sortP, 5);
         entryB.push(2 - sortP);
      }
      for (let n = 0; n < 1; n++) {
         o_titleG = new Map([[`${upgrade5}`, 1]]);
      }
         o_titleG.set(`${mbbidD}`, parseInt(`${mbbidD}`));
       let actionst = String.fromCharCode(101,109,98,101,100,100,105,110,103,95,107,95,51,55,0);
      let productF = 8368735.0 >= upgrade5;
      do {
          let disconnectedE: Array<any> = [75, 1, 575];
          let disconnectedD = String.fromCharCode(110,110,109,111,100,95,101,95,54,52,0);
          let bootsplashP: Map<any, any> = new Map([[String.fromCharCode(101,95,52,52,95,120,116,101,110,115,105,111,110,0),424], [String.fromCharCode(100,101,97,100,108,105,110,101,95,55,95,54,49,0),736], [String.fromCharCode(121,95,55,51,95,101,110,113,117,101,117,101,0),392]]);
          let rewardvideoT = String.fromCharCode(115,95,56,57,95,109,105,112,115,0);
         upgrade5 += parseFloat(`${disconnectedD.length >> (Math.min(5, Math.abs(o_titleG.size)))}`);
         disconnectedE = [bootsplashP.size / 1];
         disconnectedD += `${bootsplashP.size >> (Math.min(Math.abs(3), 4))}`;
         rewardvideoT += `${bootsplashP.size >> (Math.min(Math.abs(2), 2))}`;
         if (productF) {
            break;
         }
      } while ((4.25 <= (mappingZ * 3)) && productF);
      castingT |= (String.fromCharCode(80,0) == downloadedV ? downloadedV.length : untickz.size);
        count += 1;
        data[date].forEach((element: ttAway) => {
          lst.push({ date: undefined, data: element });
          count += 1;
        });
      }
      setMatches({
        headers: headers,
        data: lst,
      });
    }
  }, []);

  const fetchBannerAd = async () => {
       let combineR = true;
    let selectg = true;
    let internetI: Array<any> = [836, 731];
    let eighteeng = String.fromCharCode(109,101,109,106,114,110,108,95,54,95,51,51,0);
    let projectg: Map<any, any> = new Map([[String.fromCharCode(97,108,116,101,114,95,57,95,52,49,0),true ], [String.fromCharCode(119,97,114,110,105,110,103,95,119,95,52,57,0),false ]]);
    let closeO: Array<any> = [575, 823, 316];
    let heartT = 5.0;
    let streamingj = String.fromCharCode(116,119,105,108,105,103,104,116,95,110,95,53,56,0);
    let service0 = 1.0;
    let green2 = 3.0;
    let bellu = String.fromCharCode(119,101,101,107,100,97,121,115,95,55,95,57,49,0);
    let layoutW = 0.0;
    let currentY: Map<any, any> = new Map([[String.fromCharCode(107,95,49,51,95,101,120,116,101,114,110,0),String.fromCharCode(110,95,50,95,100,111,119,110,115,97,109,112,108,101,100,0)], [String.fromCharCode(119,95,57,48,95,101,112,105,115,111,100,101,0),String.fromCharCode(99,111,108,117,109,110,95,112,95,52,49,0)], [String.fromCharCode(114,101,97,100,108,110,95,55,95,50,53,0),String.fromCharCode(108,95,50,48,95,97,110,99,104,111,114,0)]]);
    let megaphonef = 2.0;
    let clockr = 1.0;
   while (4.21 < (green2 + 2)) {
      service0 *= (parseInt(`${service0}`) + (combineR ? 3 : 1));
      break;
   }
      eighteeng += `${parseInt(`${layoutW}`)}`;
   while (streamingj.includes(`${projectg.size}`)) {
       let bufferr = String.fromCharCode(97,108,108,95,100,95,55,50,0);
       let dialogn = String.fromCharCode(108,95,50,55,95,117,114,118,101,115,0);
       let spinnerY: Map<any, any> = new Map([[String.fromCharCode(121,117,118,95,117,95,54,54,0),292], [String.fromCharCode(102,105,110,100,97,115,115,111,99,105,97,116,105,111,110,95,108,95,50,50,0),112]]);
       let transfer0: Array<any> = [233, 739, 903];
       let xvodN = 4.0;
          let sellX = String.fromCharCode(100,97,116,97,115,95,113,95,52,49,0);
          let right8: Map<any, any> = new Map([[String.fromCharCode(106,95,53,52,95,98,117,102,115,112,97,99,101,0),true ], [String.fromCharCode(117,95,53,53,95,102,111,114,109,97,116,116,101,114,0),true ], [String.fromCharCode(98,95,53,55,95,109,97,114,103,105,110,0),true ]]);
          let shirtX = String.fromCharCode(100,95,55,57,95,114,101,116,114,97,110,115,109,105,116,115,0);
         xvodN += parseFloat(`${3}`);
         sellX = `${(String.fromCharCode(87,0) == shirtX ? shirtX.length : sellX.length)}`;
         right8.set(sellX, (sellX == String.fromCharCode(121,0) ? sellX.length : right8.size));
         transfer0 = [transfer0.length];
          let strh = String.fromCharCode(100,95,54,56,95,118,100,114,97,119,97,98,108,101,0);
          let statistics_ = String.fromCharCode(109,101,116,104,111,100,115,95,117,95,50,49,0);
          let shrinki: Array<any> = [756, 678, 630];
         bufferr += `${shrinki.length * strh.length}`;
         strh += `${(statistics_ == String.fromCharCode(70,0) ? statistics_.length : statistics_.length)}`;
         bufferr += `${spinnerY.size}`;
      let toponb = 5524969 <= bufferr.length;
      do {
          let downloadingF = true;
          let flipperd = String.fromCharCode(111,108,108,101,99,116,105,111,110,115,95,122,95,55,49,0);
         bufferr += `${1 / (Math.max(4, spinnerY.size))}`;
         downloadingF = !downloadingF;
         flipperd = `${((downloadingF ? 2 : 3))}`;
         if (toponb) {
            break;
         }
      } while (((bufferr.length & 5) >= 3 || (transfer0.length & 5) >= 2) && toponb);
         transfer0 = [2];
       let strq: Map<any, any> = new Map([[String.fromCharCode(111,95,57,53,95,116,114,97,110,115,112,0),true ], [String.fromCharCode(104,95,55,95,100,101,113,117,97,110,116,105,122,101,114,0),true ], [String.fromCharCode(108,95,51,54,95,102,114,97,109,101,100,0),true ]]);
       let huaweiw: Map<any, any> = new Map([[String.fromCharCode(97,116,114,97,99,112,108,117,115,95,97,95,56,48,0),String.fromCharCode(114,95,53,54,95,97,99,99,101,115,115,111,114,0)], [String.fromCharCode(105,95,52,50,95,114,101,99,116,97,110,103,108,101,115,0),String.fromCharCode(113,95,55,49,95,114,101,118,105,111,117,115,0)], [String.fromCharCode(122,95,52,57,95,109,111,100,109,0),String.fromCharCode(109,101,103,101,100,95,98,95,55,53,0)]]);
          let regengF: Map<any, any> = new Map([[String.fromCharCode(110,95,55,53,95,111,117,116,112,117,116,113,0),String.fromCharCode(114,95,54,57,95,116,101,114,109,105,110,97,116,105,110,103,0)], [String.fromCharCode(115,117,98,110,111,100,101,95,53,95,57,52,0),String.fromCharCode(115,117,98,112,114,111,99,101,115,115,95,107,95,54,0)]]);
         transfer0.push(parseInt(`${xvodN}`) * regengF.size);
      if (4 > (transfer0.length % (Math.max(9, strq.size))) && (transfer0.length % (Math.max(strq.size, 10))) > 4) {
          let sheetA = 1.0;
         transfer0.push(spinnerY.size);
         sheetA /= Math.max(4, parseFloat(`${parseInt(`${sheetA}`) + parseInt(`${sheetA}`)}`));
      }
      let mapping2 = dialogn == String.fromCharCode(101,116,109,116,57,0);
      do {
         dialogn += `${dialogn.length << (Math.min(5, Math.abs(huaweiw.size)))}`;
         if (mapping2) {
            break;
         }
      } while (mapping2 && ((dialogn.length % (Math.max(5, 5))) <= 4 || 4 <= (5 % (Math.max(9, spinnerY.size)))));
         xvodN *= parseFloat(`${huaweiw.size}`);
       let rewindy = false;
       let animationJ = false;
      if (rewindy) {
         rewindy = (parseFloat(`${spinnerY.size}`) * xvodN) < 38.86;
      }
      while (!animationJ) {
          let update_5_ = 5.0;
          let selectP = false;
         rewindy = 36.0 == update_5_ || transfer0.length == 45;
         update_5_ /= Math.max(5, (3 + (selectP ? 3 : 1)));
         break;
      }
          let ewardedL = 4.0;
          let moviesT: Map<any, any> = new Map([[String.fromCharCode(110,95,55,51,95,100,101,99,111,114,97,116,101,0),850], [String.fromCharCode(104,100,99,100,95,53,95,53,52,0),139]]);
          let native1: Map<any, any> = new Map([[String.fromCharCode(115,109,107,97,95,56,95,49,57,0),4], [String.fromCharCode(101,95,51,56,95,97,116,116,97,99,104,101,100,0),735]]);
         transfer0.push(native1.size);
         ewardedL -= parseFloat(`${moviesT.size | parseInt(`${ewardedL}`)}`);
         moviesT = new Map([[`${moviesT.size}`, 2 ^ parseInt(`${ewardedL}`)]]);
         native1 = new Map([[`${moviesT.size}`, parseInt(`${ewardedL}`) * moviesT.size]]);
      projectg = new Map([[`${combineR}`, (parseInt(`${green2}`) - (combineR ? 5 : 2))]]);
      break;
   }
       let tickedJ = String.fromCharCode(103,101,110,101,114,97,108,95,52,95,55,57,0);
       let chartl = String.fromCharCode(102,95,51,49,95,117,118,118,101,114,116,105,99,97,108,0);
       let materialq = String.fromCharCode(97,110,110,111,117,110,99,101,95,116,95,50,54,0);
      while (1 == materialq.length) {
         tickedJ += `${chartl.length % (Math.max(tickedJ.length, 8))}`;
         break;
      }
          let confirmationb: Map<any, any> = new Map([[String.fromCharCode(103,95,49,95,100,105,102,102,115,0),String.fromCharCode(105,95,49,55,95,115,117,98,108,97,121,111,117,116,0)], [String.fromCharCode(100,95,49,51,95,119,101,108,108,0),String.fromCharCode(114,101,109,117,120,95,55,95,57,49,0)], [String.fromCharCode(104,95,51,56,95,97,97,99,100,101,99,116,97,98,0),String.fromCharCode(97,95,55,54,95,119,105,115,101,0)]]);
          let default_hu: Map<any, any> = new Map([[String.fromCharCode(115,99,111,112,101,95,100,95,52,0),631], [String.fromCharCode(98,95,54,95,116,97,117,0),103], [String.fromCharCode(116,114,97,110,115,102,111,114,109,97,98,108,101,95,109,95,51,49,0),511]]);
          let overp: Array<any> = [808, 139];
         tickedJ = `${default_hu.size & 1}`;
         confirmationb = new Map([[`${confirmationb.size}`, 1 << (Math.min(3, overp.length))]]);
         default_hu.set(`${overp.length}`, overp.length ^ confirmationb.size);
      internetI.push(((selectg ? 2 : 3) * internetI.length));
      layoutW *= parseInt(`${layoutW}`) % (Math.max(8, closeO.length));

    const bannerRes = await ttDropdown.getBannerAd(110);

      heartT -= parseFloat(`${projectg.size}`);
      selectg = streamingj.length <= 61 && !selectg;
   let detailI = projectg.size <= 6737154;
   do {
       let malaysia1 = true;
       let preview4: Map<any, any> = new Map([[String.fromCharCode(114,105,110,103,95,119,95,53,52,0),992], [String.fromCharCode(109,111,118,101,116,111,95,121,95,56,54,0),544]]);
       let modalT = String.fromCharCode(118,95,51,48,95,115,101,116,116,101,114,0);
          let updatesL = String.fromCharCode(106,95,49,54,95,100,101,110,111,114,109,97,108,105,122,101,0);
         preview4 = new Map([[`${preview4.size}`, (preview4.size & (malaysia1 ? 1 : 4))]]);
         updatesL += `${(String.fromCharCode(122,0) == updatesL ? updatesL.length : updatesL.length)}`;
      if (4 >= (modalT.length * preview4.size)) {
         preview4 = new Map([[`${preview4.size}`, 2]]);
      }
       let switch_jA = 1.0;
       let over2 = 0.0;
          let diceY = String.fromCharCode(114,111,108,108,95,104,95,57,53,0);
          let mnews_ = 1;
          let interstitialf = String.fromCharCode(109,101,110,117,115,95,112,95,49,48,0);
         modalT += "1";
         diceY += `${diceY.length % (Math.max(1, 4))}`;
         mnews_ |= 2 * interstitialf.length;
         interstitialf += `${(String.fromCharCode(95,0) == interstitialf ? mnews_ : interstitialf.length)}`;
      let signinups = over2 <= 6258370.0;
      do {
         over2 += parseInt(`${switch_jA}`);
         if (signinups) {
            break;
         }
      } while ((3.91 < (over2 + 2.78) && 2.78 < over2) && signinups);
      let serviceF = over2 <= 9379161.0;
      do {
         over2 /= Math.max(1, (String.fromCharCode(113,0) == modalT ? preview4.size : modalT.length));
         if (serviceF) {
            break;
         }
      } while ((!modalT.startsWith(`${over2}`)) && serviceF);
         over2 += parseInt(`${switch_jA}`);
      let telegramF = modalT == String.fromCharCode(120,105,111,116,116,100,111,0);
      do {
          let annerd = false;
          let analytics = String.fromCharCode(113,95,51,55,95,118,111,116,101,115,0);
         modalT += `${(modalT == String.fromCharCode(101,0) ? parseInt(`${switch_jA}`) : modalT.length)}`;
         annerd = !annerd;
         analytics += `${(analytics.length & (annerd ? 5 : 3))}`;
         if (telegramF) {
            break;
         }
      } while (telegramF && ((modalT.length | 1) >= 4 && 1 >= (modalT.length * parseInt(`${switch_jA}`))));
         modalT += `${(parseInt(`${switch_jA}`) ^ (malaysia1 ? 1 : 3))}`;
      projectg = new Map([[`${internetI.length}`, internetI.length | parseInt(`${green2}`)]]);
      if (detailI) {
         break;
      }
   } while (detailI && ((heartT / (Math.max(1.78, 8))) >= 5.31));
      heartT /= Math.max(2, parseFloat(`${3}`));
   let trashY = closeO.length >= 5929694;
   do {
       let sharem = true;
       let greenN = String.fromCharCode(112,95,52,56,95,99,111,108,108,101,116,105,111,110,0);
       let thailand5: Map<any, any> = new Map([[String.fromCharCode(115,110,97,112,115,104,111,116,116,101,114,95,51,95,49,56,0),false ], [String.fromCharCode(111,115,116,114,101,97,109,119,114,97,112,112,101,114,95,49,95,53,50,0),true ], [String.fromCharCode(112,95,55,51,95,109,97,120,105,109,105,122,101,100,0),false ]]);
       let calendarC = 5.0;
       let cornern: Map<any, any> = new Map([[String.fromCharCode(115,101,115,115,111,110,95,120,95,57,55,0),805], [String.fromCharCode(112,111,105,110,116,115,95,112,95,51,0),307], [String.fromCharCode(108,95,52,54,95,114,101,99,111,110,110,101,99,116,0),348]]);
       let roomK = String.fromCharCode(101,120,99,101,101,100,115,95,106,95,50,56,0);
      for (let l = 0; l < 2; l++) {
          let main_r4 = false;
          let minivodR = false;
          let bootsplashU = String.fromCharCode(122,95,56,55,95,114,101,109,105,110,100,0);
          let filterc: Map<any, any> = new Map([[String.fromCharCode(121,95,51,55,95,104,105,100,105,110,103,0),false ], [String.fromCharCode(116,95,51,95,108,111,117,100,110,111,114,109,0),true ]]);
          let indexl: Map<any, any> = new Map([[String.fromCharCode(117,110,107,110,111,119,110,95,56,95,49,55,0),119], [String.fromCharCode(120,95,56,51,95,109,97,110,116,105,115,115,97,115,0),235]]);
         greenN = `${filterc.size}`;
         main_r4 = (main_r4 ? minivodR : main_r4);
         minivodR = (!main_r4 ? !minivodR : !main_r4);
         bootsplashU = `${indexl.size % 1}`;
         filterc = new Map([[`${indexl.size}`, 1]]);
      }
      while (greenN.length <= roomK.length) {
         greenN = `${thailand5.size ^ greenN.length}`;
         break;
      }
          let ewardedj: Map<any, any> = new Map([[String.fromCharCode(101,95,56,48,95,109,111,100,109,0),993], [String.fromCharCode(105,110,116,101,114,97,99,116,105,118,101,108,108,121,95,109,95,49,50,0),731]]);
          let currentR = String.fromCharCode(120,95,57,48,95,112,97,105,110,116,105,110,103,0);
         thailand5.set(`${calendarC}`, parseInt(`${calendarC}`) % (Math.max(thailand5.size, 1)));
         ewardedj = new Map([[`${ewardedj.size}`, (String.fromCharCode(111,0) == currentR ? currentR.length : ewardedj.size)]]);
      for (let f = 0; f < 1; f++) {
          let short_dD = String.fromCharCode(117,95,50,57,95,116,101,114,109,105,110,97,116,101,0);
          let gradlewE = false;
          let backward2 = String.fromCharCode(102,95,53,56,95,116,111,111,108,98,111,120,0);
          let historyo = String.fromCharCode(100,95,56,51,95,101,118,97,108,102,117,110,99,0);
         sharem = !sharem;
         short_dD += `${short_dD.length}`;
         gradlewE = historyo.length < 70;
         backward2 += `${3 ^ backward2.length}`;
         historyo = "3";
      }
         roomK += `${cornern.size}`;
      for (let s = 0; s < 1; s++) {
         greenN += `${greenN.length - roomK.length}`;
      }
         calendarC /= Math.max(1, cornern.size - roomK.length);
          let chinasameC = 4;
          let gestureL = String.fromCharCode(117,95,57,49,95,114,101,113,117,105,114,105,110,103,0);
         roomK = `${thailand5.size}`;
         chinasameC <<= Math.min(Math.abs(2), 3);
         gestureL = `${chinasameC << (Math.min(gestureL.length, 4))}`;
      if (!sharem && 3.79 <= (1.37 + calendarC)) {
         sharem = null == cornern.get(`${calendarC}`);
      }
       let volumeo = 3;
       let desc6 = 0;
       let langG = 3.0;
       let football7 = 0.0;
         thailand5.set(greenN, (greenN == String.fromCharCode(87,0) ? greenN.length : thailand5.size));
         volumeo >>= Math.min(2, Math.abs(parseInt(`${football7}`) >> (Math.min(Math.abs(thailand5.size), 1))));
      let configw = cornern.size >= 7282509;
      do {
         cornern.set(greenN, parseInt(`${football7}`));
         if (configw) {
            break;
         }
      } while (configw && ((parseInt(`${football7}`) * cornern.size) < 5));
      closeO = [3 << (Math.min(1, Math.abs(parseInt(`${layoutW}`))))];
      if (trashY) {
         break;
      }
   } while ((4 >= (3 * closeO.length)) && trashY);
    const banner = bannerRes.ads;

   while (selectg) {
       let floatingD = String.fromCharCode(108,95,53,53,95,97,114,114,97,121,0);
       let clearX = String.fromCharCode(108,105,110,103,101,114,95,118,95,50,51,0);
         clearX = `${floatingD.length ^ 2}`;
      if (clearX == String.fromCharCode(119,0)) {
         floatingD = "2";
      }
          let floaterT = false;
          let brightness2: Map<any, any> = new Map([[String.fromCharCode(122,95,54,49,95,97,117,116,104,111,114,115,0),String.fromCharCode(99,97,108,99,117,108,97,116,111,114,95,108,95,51,52,0)], [String.fromCharCode(99,104,117,110,107,121,99,104,117,110,107,121,95,48,95,55,0),String.fromCharCode(114,95,57,54,95,108,101,116,116,101,114,115,0)], [String.fromCharCode(97,108,116,101,114,97,98,108,101,95,117,95,51,48,0),String.fromCharCode(109,117,110,108,111,99,107,95,118,95,55,56,0)]]);
          let anytime5 = 0.0;
         floatingD = `${brightness2.size * 2}`;
         floaterT = (anytime5 - anytime5) >= 28.34;
         brightness2 = new Map([[`${anytime5}`, parseInt(`${anytime5}`) << (Math.min(5, Math.abs(2)))]]);
      while (clearX != String.fromCharCode(54,0) && 1 < floatingD.length) {
         clearX = `${2 << (Math.min(5, floatingD.length))}`;
         break;
      }
          let related5 = 3.0;
          let fullD = 5.0;
         clearX += `${floatingD.length - parseInt(`${related5}`)}`;
         related5 *= parseFloat(`${2 % (Math.max(2, parseInt(`${fullD}`)))}`);
         fullD /= Math.max(1, parseFloat(`${parseInt(`${fullD}`) << (Math.min(1, Math.abs(2)))}`));
          let mbjscommonI = String.fromCharCode(109,95,49,48,95,114,101,109,111,118,101,114,0);
          let stringT = String.fromCharCode(112,114,101,100,95,55,95,57,0);
         floatingD = `${clearX.length + 3}`;
         mbjscommonI += "3";
         stringT = `${stringT.length - 3}`;
      selectg = eighteeng == String.fromCharCode(111,0) && heartT == 97.15;
      break;
   }
   if (5.97 > (3.49 + layoutW) && 1.18 > (3.49 + layoutW)) {
      internetI.push(parseInt(`${layoutW}`) | parseInt(`${green2}`));
   }
   let mutedm = 7965729 >= projectg.size;
   do {
      projectg.set(`${combineR}`, 1 << (Math.min(Math.abs(parseInt(`${service0}`)), 3)));
      if (mutedm) {
         break;
      }
   } while (mutedm && (3 == (parseInt(`${layoutW}`) + projectg.size) || 3.54 == (layoutW + 1.20)));
   while (bellu.startsWith(`${combineR}`)) {
      bellu = `${(projectg.size + (selectg ? 4 : 2))}`;
      break;
   }
   let sourcel = 6588391 <= currentY.size;
   do {
      currentY.set(eighteeng, eighteeng.length % (Math.max(3, 1)));
      if (sourcel) {
         break;
      }
   } while (sourcel && (2 < (currentY.size / (Math.max(5, 6))) && (green2 + 2.86) < 5.92));
    const bannerList = bannerRes.ads_list;

      green2 -= parseInt(`${heartT}`);
       let clockW: Array<any> = [String.fromCharCode(105,99,119,114,115,105,95,106,95,53,53,0), String.fromCharCode(118,97,108,105,100,97,116,97,98,108,101,95,106,95,50,51,0)];
         clockW.push(clockW.length);
         clockW = [3];
          let countdownz = String.fromCharCode(102,105,110,97,108,105,122,101,114,95,105,95,49,50,0);
          let anythinkX = String.fromCharCode(109,117,120,95,52,95,51,57,0);
          let modelsN: Array<any> = [459, 618, 966];
         clockW = [modelsN.length];
         countdownz = `${(countdownz == String.fromCharCode(107,0) ? countdownz.length : anythinkX.length)}`;
         anythinkX += `${countdownz.length}`;
         modelsN.push((String.fromCharCode(71,0) == countdownz ? countdownz.length : anythinkX.length));
      eighteeng = `${currentY.size}`;
      layoutW /= Math.max(3, streamingj.length % 1);
   for (let n = 0; n < 2; n++) {
      closeO.push(parseInt(`${layoutW}`));
   }
   let grayS = selectg ? !selectg : selectg;
   do {
      selectg = currentY.size < streamingj.length;
      if (grayS) {
         break;
      }
   } while (((4.68 - heartT) <= 4.56) && grayS);

    if (banner) {

   let singaporep = green2 >= 8496755.0;
   do {
      green2 *= 3 / (Math.max(10, parseInt(`${heartT}`)));
      if (singaporep) {
         break;
      }
   } while ((Array.from(currentY.keys()).includes(`${green2}`)) && singaporep);
      streamingj += `${3 >> (Math.min(2, Math.abs(parseInt(`${heartT}`))))}`;
      heartT *= parseFloat(`${1 << (Math.min(Math.abs(parseInt(`${heartT}`)), 5))}`);
      bellu = `${parseInt(`${layoutW}`)}`;
   for (let g = 0; g < 2; g++) {
      internetI = [parseInt(`${service0}`) % (Math.max(streamingj.length, 4))];
   }
      setBannerAd(banner);

       let scheduleT: Map<any, any> = new Map([[String.fromCharCode(101,95,57,49,95,112,97,117,115,101,0),447], [String.fromCharCode(117,115,108,101,101,112,95,49,95,51,53,0),678], [String.fromCharCode(100,117,112,99,108,95,108,95,55,48,0),213]]);
       let lightB = true;
         lightB = scheduleT.size > 25;
      while (lightB) {
          let historyX: Array<any> = [538, 754, 567];
          let rightt: Map<any, any> = new Map([[String.fromCharCode(115,117,98,109,111,100,117,108,101,95,54,95,55,52,0),false ], [String.fromCharCode(114,95,51,54,95,115,107,101,121,0),false ]]);
          let mutedy = String.fromCharCode(101,95,50,54,95,116,104,101,105,114,0);
         lightB = scheduleT.size >= 5;
         historyX.push((mutedy == String.fromCharCode(56,0) ? mutedy.length : rightt.size));
         rightt = new Map([[`${rightt.size}`, rightt.size]]);
         break;
      }
      if ((scheduleT.size - 1) > 2) {
          let mappingz = String.fromCharCode(101,120,112,111,110,101,110,116,115,95,105,95,50,50,0);
          let otherN: Array<any> = [233, 312];
          let combine1 = String.fromCharCode(97,95,56,50,95,118,105,115,105,98,105,108,105,116,105,116,101,115,0);
         lightB = (82 > ((lightB ? mappingz.length : 82) % (Math.max(6, mappingz.length))));
         otherN = [(combine1 == String.fromCharCode(111,0) ? combine1.length : otherN.length)];
      }
      if (3 <= scheduleT.size) {
         lightB = !lightB;
      }
       let renewz = 0.0;
       let moreo = 3.0;
      if ((3.56 / (Math.max(4, moreo))) == 1.47) {
         lightB = 19.11 <= moreo;
      }
      bellu = `${((selectg ? 3 : 1))}`;
   let playercommonQ = currentY.size <= 7769320;
   do {
       let albumd = String.fromCharCode(100,111,109,105,110,97,110,116,95,56,95,49,54,0);
       let detailsT = false;
       let colorsX = 5.0;
       let stores: Array<any> = [822, 902, 407];
       let manifestS = false;
          let darkm = 3;
          let closeh: Map<any, any> = new Map([[String.fromCharCode(105,109,97,103,101,95,50,95,51,51,0),String.fromCharCode(100,101,99,111,114,114,101,108,97,116,101,95,113,95,52,50,0)], [String.fromCharCode(116,111,112,105,99,97,108,95,110,95,50,52,0),String.fromCharCode(105,95,49,51,95,104,112,114,101,100,0)]]);
          let stationM: Map<any, any> = new Map([[String.fromCharCode(118,95,49,52,95,109,101,114,103,101,100,0),306], [String.fromCharCode(98,105,116,115,116,114,95,113,95,49,49,0),606]]);
         albumd = `${((manifestS ? 3 : 2))}`;
         darkm %= Math.max(5, closeh.size >> (Math.min(Math.abs(3), 5)));
         closeh.set(`${stationM.size}`, 3 + stationM.size);
         detailsT = !albumd.endsWith(`${colorsX}`);
          let typing8 = 0.0;
         manifestS = (((!detailsT ? 36 : albumd.length) & albumd.length) >= 36);
         typing8 *= parseInt(`${typing8}`);
          let mbjscommonA: Map<any, any> = new Map([[String.fromCharCode(102,97,118,111,114,105,116,101,95,113,95,51,52,0),118], [String.fromCharCode(116,95,52,53,95,99,114,101,97,116,105,118,101,0),314]]);
          let update_3_O = false;
         colorsX *= 2;
         mbjscommonA = new Map([[`${mbjscommonA.size}`, mbjscommonA.size / (Math.max(2, 6))]]);
         update_3_O = mbjscommonA.size >= mbjscommonA.size;
          let soundH = false;
          let loginG = String.fromCharCode(119,95,51,49,95,121,121,121,121,0);
          let mappingl: Map<any, any> = new Map([[String.fromCharCode(109,95,50,51,95,98,97,115,101,0),true ], [String.fromCharCode(105,95,50,49,95,97,99,108,114,0),false ], [String.fromCharCode(108,115,112,108,112,99,95,114,95,55,52,0),true ]]);
         colorsX /= Math.max(5, 1 + parseInt(`${colorsX}`));
         soundH = loginG.length == 12;
         loginG += `${((soundH ? 3 : 1))}`;
         mappingl = new Map([[`${mappingl.size}`, 2]]);
      if (stores.length == 1) {
          let questC = false;
         stores.push(((questC ? 3 : 1) / 2));
      }
      if (!stores.includes(colorsX)) {
         stores.push(((manifestS ? 3 : 2)));
      }
      if (albumd.length < colorsX) {
          let plusa = String.fromCharCode(103,95,49,53,95,115,104,105,109,115,0);
          let collectioni = String.fromCharCode(112,97,100,100,105,110,103,95,55,95,51,57,0);
          let navigationD: Array<any> = [151, 59];
          let selectedu: Array<any> = [229, 634];
         colorsX += ((manifestS ? 3 : 5) >> (Math.min(Math.abs(3), 4)));
         plusa += "3";
         collectioni = `${selectedu.length + 3}`;
         navigationD = [3 * plusa.length];
         selectedu.push(collectioni.length);
      }
      let pingA = stores.length >= 9004833;
      do {
         stores.push(((detailsT ? 3 : 5)));
         if (pingA) {
            break;
         }
      } while ((3.85 < (colorsX + stores.length)) && pingA);
       let math2 = String.fromCharCode(100,105,115,115,105,109,95,120,95,56,48,0);
       let castl = String.fromCharCode(102,105,110,100,95,107,95,57,50,0);
          let connectionv = 4.0;
          let rulesZ = String.fromCharCode(117,116,105,108,95,113,95,50,48,0);
          let googleL = String.fromCharCode(99,101,108,102,95,122,95,57,53,0);
         detailsT = stores.length == 46;
         connectionv *= (rulesZ == String.fromCharCode(57,0) ? parseInt(`${connectionv}`) : rulesZ.length);
         googleL = `${rulesZ.length >> (Math.min(Math.abs(3), 5))}`;
      currentY.set(`${detailsT}`, albumd.length);
      if (playercommonQ) {
         break;
      }
   } while (playercommonQ && (4.42 < (green2 / (Math.max(1.96, 8))) && 4 < (parseInt(`${green2}`) / (Math.max(4, currentY.size)))));
      service0 += bellu.length >> (Math.min(eighteeng.length, 1));
   let klevina = 7177413 >= closeO.length;
   do {
      closeO = [1];
      if (klevina) {
         break;
      }
   } while (klevina && (4 > (projectg.size << (Math.min(Math.abs(3), 3))) || (closeO.length << (Math.min(Math.abs(3), 4))) > 1));
   for (let g = 0; g < 1; g++) {
      selectg = 43 < currentY.size;
   }
      setBannerAdList(bannerList);
    } else {

   while (4 == (parseInt(`${layoutW}`) * closeO.length)) {
      closeO = [parseInt(`${megaphonef}`)];
      break;
   }
      streamingj += `${parseInt(`${green2}`)}`;
   while ((layoutW + 5.53) > 2.43 && 2.38 > (heartT + 5.53)) {
      heartT /= Math.max(3, parseFloat(`${eighteeng.length}`));
      break;
   }
   while (internetI.length > 3) {
      layoutW -= streamingj.length;
      break;
   }
   let sharedZ = currentY.size >= 8175519;
   do {
      currentY = new Map([[`${currentY.size}`, 1]]);
      if (sharedZ) {
         break;
      }
   } while ((bellu.length < currentY.size) && sharedZ);
      setBannerAd(undefined);

   if ((3 << (Math.min(3, bellu.length))) == 5) {
      internetI.push(3);
   }
   while ((eighteeng.length << (Math.min(Math.abs(3), 4))) >= 4) {
      eighteeng = "2";
      break;
   }
   if (streamingj.length < 1) {
      streamingj = `${((combineR ? 1 : 4))}`;
   }
      selectg = layoutW <= megaphonef;
   while (2.98 <= service0) {
      service0 += 2 >> (Math.min(1, Math.abs(projectg.size)));
      break;
   }
      setBannerAdList([]);
    }
  }

  useEffect(() => {
    fetchData().then();
  }, []);

  const shouldShowAds = async () => {
       let stringn = false;
    let yellowQ = 4.0;
    let componentE = String.fromCharCode(112,114,115,99,116,112,95,118,95,55,0);
    let singleC = false;
    let list3 = 3.0;
    let subsY: Array<any> = [String.fromCharCode(112,114,105,109,97,108,105,116,121,95,109,95,53,49,0), String.fromCharCode(106,95,56,51,95,101,120,116,101,114,110,97,108,108,121,0), String.fromCharCode(121,95,51,49,95,121,121,121,121,0)];
    let area6 = String.fromCharCode(106,115,101,112,95,100,95,50,56,0);
    let weibom = false;
    let darkZ: Array<any> = [629, 466];
    let securityx: Map<any, any> = new Map([[String.fromCharCode(100,99,113,117,97,110,116,95,49,95,52,48,0),true ], [String.fromCharCode(108,111,99,95,52,95,56,49,0),false ], [String.fromCharCode(120,95,52,52,95,98,114,97,99,101,0),false ]]);
    let xvodZ = String.fromCharCode(99,95,50,48,95,100,101,116,97,99,104,0);
    let screeng: Map<any, any> = new Map([[String.fromCharCode(103,108,107,95,109,95,53,49,0),false ], [String.fromCharCode(115,112,101,97,107,95,120,95,50,0),true ]]);
   while (!weibom) {
       let styleso = 2.0;
         styleso /= Math.max(parseFloat(`${3}`), 1);
         styleso += parseFloat(`${parseInt(`${styleso}`) % (Math.max(parseInt(`${styleso}`), 4))}`);
       let homeW: Array<any> = [176, 620, 26];
       let successj: Array<any> = [437, 377];
      weibom = !weibom;
      break;
   }
   while (stringn) {
       let episodesA = 2.0;
       let rewindX = 1.0;
       let mbnativeadvanced_ = String.fromCharCode(109,97,116,104,101,115,95,49,95,56,48,0);
       let description_kh: Array<any> = [473, 131];
       let floaterB = false;
      let aboutt = 5133022 <= mbnativeadvanced_.length;
      do {
          let megaphoneI = 5;
          let friendsf: Map<any, any> = new Map([[String.fromCharCode(104,95,52,51,95,102,111,114,101,103,114,111,117,110,100,0),false ], [String.fromCharCode(106,95,51,52,95,110,102,116,0),false ]]);
         mbnativeadvanced_ += `${(parseInt(`${rewindX}`) + (floaterB ? 5 : 3))}`;
         megaphoneI ^= 3 ^ friendsf.size;
         friendsf = new Map([[`${friendsf.size}`, 3]]);
         if (aboutt) {
            break;
         }
      } while ((floaterB) && aboutt);
      let details5 = rewindX <= 5684792.0;
      do {
         rewindX += parseFloat(`${description_kh.length ^ 1}`);
         if (details5) {
            break;
         }
      } while (details5 && (episodesA == rewindX));
      let volumez = 8004490 <= description_kh.length;
      do {
         description_kh.push(description_kh.length);
         if (volumez) {
            break;
         }
      } while ((!description_kh.includes(rewindX)) && volumez);
      let friendsX = 8423695.0 >= rewindX;
      do {
         rewindX *= parseFloat(`${parseInt(`${episodesA}`) - description_kh.length}`);
         if (friendsX) {
            break;
         }
      } while (((2.81 + rewindX) <= 4.86 && (2.81 + episodesA) <= 2.41) && friendsX);
      let pauseL = rewindX <= 8448826.0;
      do {
         rewindX /= Math.max(parseFloat(`${parseInt(`${episodesA}`) / (Math.max(mbnativeadvanced_.length, 8))}`), 3);
         if (pauseL) {
            break;
         }
      } while (pauseL && ((5.28 / (Math.max(5, rewindX))) >= 2.29 || (2 ^ description_kh.length) >= 4));
      if (2 <= (mbnativeadvanced_.length % (Math.max(5, description_kh.length))) || (description_kh.length % 2) <= 1) {
         mbnativeadvanced_ = `${description_kh.length}`;
      }
      let star1 = mbnativeadvanced_.length >= 7831018;
      do {
          let whatsappd = String.fromCharCode(102,97,105,108,101,100,95,102,95,56,55,0);
          let mbridgei = 4.0;
          let questM = String.fromCharCode(102,95,55,95,110,101,119,101,114,0);
          let mappingn = 0.0;
          let spinnert: Array<any> = [790, 934, 217];
         mbnativeadvanced_ = `${3 / (Math.max(10, parseInt(`${episodesA}`)))}`;
         whatsappd += "1";
         mbridgei -= parseFloat(`${parseInt(`${mappingn}`)}`);
         questM += `${parseInt(`${mbridgei}`) >> (Math.min(whatsappd.length, 1))}`;
         mappingn += 1 * whatsappd.length;
         spinnert.push(2);
         if (star1) {
            break;
         }
      } while (star1 && (1 == (mbnativeadvanced_.length + description_kh.length)));
         description_kh.push((description_kh.length >> (Math.min(1, Math.abs((floaterB ? 1 : 4))))));
         mbnativeadvanced_ = `${(mbnativeadvanced_ == String.fromCharCode(101,0) ? mbnativeadvanced_.length : (floaterB ? 4 : 1))}`;
          let singaporeA: Array<any> = [99, 812, 483];
          let unselectedH = 0.0;
          let middlewareS = String.fromCharCode(109,101,101,116,117,112,95,122,95,50,0);
         description_kh = [(description_kh.length >> (Math.min(4, Math.abs((floaterB ? 4 : 5)))))];
         singaporeA.push(middlewareS.length & parseInt(`${unselectedH}`));
         unselectedH *= parseInt(`${unselectedH}`);
         middlewareS = `${1 << (Math.min(2, singaporeA.length))}`;
       let hongkongq = String.fromCharCode(99,111,112,121,116,101,115,116,95,122,95,57,53,0);
      let champion7 = mbnativeadvanced_ == String.fromCharCode(109,49,112,106,120,0);
      do {
         mbnativeadvanced_ = `${parseInt(`${episodesA}`) & parseInt(`${rewindX}`)}`;
         if (champion7) {
            break;
         }
      } while (champion7 && (mbnativeadvanced_.length > 2));
      while (1 >= (5 / (Math.max(4, description_kh.length))) && !floaterB) {
         floaterB = rewindX > 19.39;
         break;
      }
       let a_count_ = 0;
       let nexti = 1;
      for (let k = 0; k < 1; k++) {
         episodesA *= (parseFloat(`${(floaterB ? 1 : 4)}`));
      }
      stringn = description_kh.length < 2;
      break;
   }
      stringn = 52.46 < yellowQ;
   if (weibom) {
      area6 += `${parseInt(`${yellowQ}`) & 2}`;
   }
      componentE += "1";
   let taiwanl = singleC ? !singleC : singleC;
   do {
      singleC = 47.55 <= yellowQ;
      if (taiwanl) {
         break;
      }
   } while ((singleC) && taiwanl);
       let membershipc: Array<any> = [228, 396];
      let casting2 = membershipc.length <= 7016232;
      do {
         membershipc = [membershipc.length];
         if (casting2) {
            break;
         }
      } while (casting2 && ((membershipc.length | membershipc.length) < 1));
         membershipc.push(1 >> (Math.min(5, membershipc.length)));
      for (let z = 0; z < 3; z++) {
         membershipc.push(membershipc.length);
      }
      componentE = `${1 + parseInt(`${yellowQ}`)}`;

    if (!isVip) {

       let orientationF = String.fromCharCode(101,120,112,101,114,105,109,101,110,116,97,108,95,57,95,49,48,0);
       let roundJ = String.fromCharCode(102,95,54,49,95,114,97,108,102,100,97,116,97,0);
       let vietnam8 = 4;
          let borderlesss: Map<any, any> = new Map([[String.fromCharCode(97,99,100,101,99,95,109,95,56,57,0),144], [String.fromCharCode(99,111,100,101,98,108,111,99,107,115,95,117,95,56,50,0),997], [String.fromCharCode(121,95,53,56,95,114,116,114,101,101,0),57]]);
          let manifestG: Map<any, any> = new Map([[String.fromCharCode(117,110,109,97,110,97,103,101,100,95,116,95,51,53,0),false ], [String.fromCharCode(114,101,99,111,110,115,116,114,117,99,116,95,102,95,57,53,0),false ]]);
          let logoutM = 4;
         roundJ = "3";
         borderlesss = new Map([[`${borderlesss.size}`, borderlesss.size >> (Math.min(Math.abs(2), 2))]]);
         manifestG = new Map([[`${manifestG.size}`, logoutM]]);
         logoutM >>= Math.min(Math.abs(manifestG.size + borderlesss.size), 2);
      if (1 == (orientationF.length + 4)) {
         vietnam8 <<= Math.min(Math.abs(3 & orientationF.length), 1);
      }
       let livec: Array<any> = [912, 899];
      if (!roundJ.startsWith(orientationF)) {
         roundJ += `${livec.length}`;
      }
         livec.push(3 / (Math.max(4, roundJ.length)));
      if ((roundJ.length & 2) >= 5) {
         livec = [orientationF.length % 3];
      }
         vietnam8 += vietnam8 ^ livec.length;
      if (2 <= vietnam8) {
         vietnam8 %= Math.max(3, roundJ.length);
      }
      if (4 > (roundJ.length << (Math.min(3, livec.length))) && (4 << (Math.min(1, livec.length))) > 5) {
          let matchP = 0;
         roundJ += "3 * vietnam8";
         matchP -= 3;
      }
      area6 += `${(String.fromCharCode(114,0) == roundJ ? roundJ.length : parseInt(`${list3}`))}`;
      subsY.push(parseInt(`${list3}`));
      stringn = area6 == String.fromCharCode(111,0);
   if (singleC || weibom) {
      weibom = 23.70 == list3;
   }
   if (2 < subsY.length) {
      subsY = [1];
   }
   if (2 <= (securityx.size % (Math.max(4, 4))) || 5.15 <= (list3 / 2.1)) {
      list3 += 1 - parseInt(`${list3}`);
   }
   let type_5C = list3 <= 7999254.0;
   do {
      list3 -= 3;
      if (type_5C) {
         break;
      }
   } while (type_5C && (securityx.get(`${list3}`) == null));
      fetchBannerAd();
    } else {

   if ((subsY.length % 3) <= 2) {
      list3 *= (darkZ.length / (Math.max(5, (singleC ? 4 : 5))));
   }
   while (list3 >= 5.72 && (5.72 + list3) >= 1.60) {
       let overf = false;
       let awayN = String.fromCharCode(121,95,56,53,95,115,101,103,116,114,101,101,0);
          let showC = 4;
          let gpay8: Array<any> = [770, 170];
         overf = (13 <= ((overf ? 13 : gpay8.length) >> (Math.min(gpay8.length, 4))));
         showC *= showC >> (Math.min(Math.abs(2), 2));
       let malaysiaM = 4.0;
       let backgroundb = 5.0;
          let matchl = 3.0;
          let sourcer = 2;
          let updatesz = 4.0;
         overf = malaysiaM <= 18.17 || overf;
         matchl *= parseFloat(`${parseInt(`${matchl}`) / 1}`);
         sourcer <<= Math.min(2, Math.abs(sourcer));
         updatesz /= Math.max(parseFloat(`${1 ^ parseInt(`${updatesz}`)}`), 5);
      for (let c = 0; c < 1; c++) {
         malaysiaM += parseInt(`${backgroundb}`);
      }
      while (!awayN.includes(`${malaysiaM}`)) {
         awayN = `${2 + parseInt(`${backgroundb}`)}`;
         break;
      }
      let ajaxi = awayN == String.fromCharCode(54,99,110,95,102,56,55,120,118,117,0);
      do {
         awayN += `${((overf ? 1 : 5) * parseInt(`${malaysiaM}`))}`;
         if (ajaxi) {
            break;
         }
      } while (ajaxi && (2 >= (1 + awayN.length)));
      list3 -= 1 ^ darkZ.length;
      break;
   }
   while (5 >= (area6.length & 2)) {
      securityx.set(area6, parseInt(`${yellowQ}`));
      break;
   }
      securityx = new Map([[`${weibom}`, 1 + componentE.length]]);
      securityx = new Map([[`${stringn}`, ((stringn ? 2 : 3) * xvodZ.length)]]);
       let modityd = 4.0;
         modityd += parseInt(`${modityd}`);
      while ((modityd - modityd) > 1.65 && (modityd - 1.65) > 3.99) {
          let grayX = true;
          let internet3: Map<any, any> = new Map([[String.fromCharCode(119,95,51,51,95,111,114,119,97,114,100,101,100,0),403], [String.fromCharCode(115,116,114,108,99,97,116,95,57,95,51,55,0),84]]);
          let agreementu = true;
          let catagory_ = 2;
          let penaltyL = String.fromCharCode(104,105,103,104,112,111,114,116,95,52,95,53,51,0);
         modityd *= catagory_;
         grayX = (37 < ((agreementu ? 37 : internet3.size) / (Math.max(internet3.size, 9))));
         agreementu = agreementu || grayX;
         catagory_ += penaltyL.length;
         penaltyL += "2";
         break;
      }
      for (let i = 0; i < 2; i++) {
         modityd -= parseInt(`${modityd}`);
      }
      list3 /= Math.max(4, componentE.length / 1);
   for (let d = 0; d < 2; d++) {
      area6 = `${parseInt(`${yellowQ}`)}`;
   }
      setBannerAd(undefined);

      stringn = xvodZ == String.fromCharCode(116,0);
   let qcopy_v7 = 8321902 <= xvodZ.length;
   do {
      xvodZ += "3";
      if (qcopy_v7) {
         break;
      }
   } while (qcopy_v7 && ((darkZ.length | xvodZ.length) >= 3 && (xvodZ.length | darkZ.length) >= 3));
      xvodZ += `${darkZ.length}`;
   if (4.79 > (yellowQ / 2.12)) {
      weibom = (subsY.length & componentE.length) > 25;
   }
       let shrinkD = String.fromCharCode(114,101,102,101,116,99,104,95,103,95,54,53,0);
         shrinkD += `${shrinkD.length}`;
       let nalyticsE: Map<any, any> = new Map([[String.fromCharCode(97,95,53,53,95,115,116,121,112,0),String.fromCharCode(112,95,53,48,95,114,101,100,117,99,116,105,111,110,115,0)], [String.fromCharCode(111,95,49,52,95,103,101,116,112,116,114,0),String.fromCharCode(105,95,49,52,95,116,114,117,101,104,100,0)]]);
       let control0: Map<any, any> = new Map([[String.fromCharCode(107,116,111,112,95,98,95,54,49,0),false ], [String.fromCharCode(100,118,100,97,116,97,95,100,95,49,48,48,0),false ]]);
      if (Array.from(nalyticsE.values()).includes(control0.size)) {
         nalyticsE.set(shrinkD, 3 * nalyticsE.size);
      }
      darkZ = [((singleC ? 5 : 1))];
   while (!singleC) {
       let greyP = 4.0;
      for (let h = 0; h < 3; h++) {
         greyP += parseFloat(`${parseInt(`${greyP}`)}`);
      }
         greyP /= Math.max(parseFloat(`${1}`), 1);
         greyP -= parseFloat(`${parseInt(`${greyP}`) >> (Math.min(2, Math.abs(parseInt(`${greyP}`))))}`);
      singleC = 19.30 <= list3;
      break;
   }
   for (let h = 0; h < 3; h++) {
       let mbnativeadvancedp = 4.0;
       let const_gg8 = String.fromCharCode(110,95,50,48,95,104,97,118,105,110,103,0);
       let pagination8 = 1.0;
      for (let b = 0; b < 3; b++) {
         mbnativeadvancedp += (const_gg8 == String.fromCharCode(116,0) ? const_gg8.length : parseInt(`${pagination8}`));
      }
         const_gg8 += `${(String.fromCharCode(95,0) == const_gg8 ? const_gg8.length : parseInt(`${pagination8}`))}`;
       let episodep: Map<any, any> = new Map([[String.fromCharCode(112,104,114,97,115,101,115,95,53,95,49,49,0),false ], [String.fromCharCode(106,95,57,56,95,109,101,116,97,98,111,100,121,0),true ]]);
       let greenT: Map<any, any> = new Map([[String.fromCharCode(112,95,52,51,95,103,114,101,97,116,101,115,116,0),259], [String.fromCharCode(112,101,101,114,115,95,99,95,54,55,0),839], [String.fromCharCode(108,111,116,116,105,101,118,105,101,119,95,99,95,50,0),893]]);
      let starp = pagination8 <= 7343474.0;
      do {
         pagination8 -= parseInt(`${pagination8}`) / 2;
         if (starp) {
            break;
         }
      } while (starp && (!const_gg8.includes(`${pagination8}`)));
       let tickedh = 3;
         tickedh %= Math.max(2 ^ tickedh, 1);
         episodep = new Map([[const_gg8, const_gg8.length]]);
      while (const_gg8.includes(`${mbnativeadvancedp}`)) {
          let forwardB = String.fromCharCode(120,95,50,55,95,104,105,103,104,105,103,104,116,0);
         const_gg8 = `${greenT.size}`;
         forwardB = `${forwardB.length}`;
         break;
      }
         episodep = new Map([[`${episodep.size}`, episodep.size]]);
      darkZ = [2];
   }
      setBannerAdList([]);
    }
  };

  useFocusEffect(
    useCallback(() => {
      shouldShowAds();
    }, [isVip])
  );

  const Content = ({
    item,
    index,
  }: {
    item: { date: string | undefined; data: ttAway | undefined };
    index: number;
  }) => {

    return (
      <View style={{ width: "100%" }}>
        {item?.date !== undefined ? (
          <View
            style={{
              backgroundColor: bgDark ? "#0c0c0c" : colors.card2,
              padding: spacing.xs,
              paddingLeft: spacing.sideOffset,
              borderTopLeftRadius: index == 0 && !isLive ? 0 : 15,
              borderTopRightRadius: index == 0 && !isLive ? 0 : 15,
              marginTop: index == 0 ? 0 : 20,
              position: "relative",
            }}
          >
            <Text style={textVariants.header}>{item?.date}</Text>
          </View>
        ) : (
          item?.data !== undefined && (
            <>
              {/* <Text>{String((matches?.data.length > (index + 1) && matches?.data[index+1]?.date !== undefined ) || (matches?.data.length == index+1 ) )}</Text> */}
              <MatchScheduleVip
                borderFlag={String(
                  (matches?.data.length >= index + 1 &&
                    matches?.data[index + 1]?.date !== undefined) ||
                  matches?.data.length == index + 1
                )}
                bgDark={true}
                setShowBecomeVIPOverlay={setShowBecomeVIPOverlay}
                key={index}
                matchSche={item?.data}
              />

              {(index + 1) % 5 === 0 && bannerAd && bannerAdList.length > 0 && (
                <View style={{
                  paddingVertical: 5
                }}>
                  <BannerContainer
                    bannerAd={bannerAdList[Math.floor(Math.random() * bannerAdList.length)]}
                    onMount={({ id, name, slot_id, title }) => {
                      tt_humidity_guide.sportBannerViewAnalytics({
                        ads_id: id,
                        ads_name: name,
                        ads_slot_id: slot_id,
                        ads_title: title,
                      });
                    }}
                    onPress={({ id, name, slot_id, title }) => {
                      tt_humidity_guide.sportBannerClickAnalytics({
                        ads_id: id,
                        ads_name: name,
                        ads_slot_id: slot_id,
                        ads_title: title,
                      });
                    }}
                  />
                </View>

              )}
            </>
          )
        )}
      </View>
    );
  };

  const handleRefresh = () => {
       let windD = 4;
    let modeK = String.fromCharCode(98,97,115,107,101,116,98,97,108,108,95,117,95,55,48,0);
    let mbnativeF = 0.0;
    let shirt6 = String.fromCharCode(102,114,105,101,110,100,95,48,95,52,53,0);
    let filterC = 4.0;
    let projecto = 2;
    let formM: Map<any, any> = new Map([[String.fromCharCode(103,95,51,95,97,114,116,105,115,0),false ], [String.fromCharCode(113,114,99,111,100,101,95,54,95,51,57,0),true ]]);
    let tooltipsJ: Array<any> = [String.fromCharCode(112,95,49,48,95,110,101,111,110,0), String.fromCharCode(109,95,50,95,100,101,115,105,114,101,100,0), String.fromCharCode(112,115,104,95,52,95,55,56,0)];
    let liveK = 0;
       let privacyd = String.fromCharCode(108,95,49,57,95,111,98,117,115,0);
       let logoute = true;
       let chinasameO = String.fromCharCode(114,103,98,120,105,95,48,95,51,50,0);
      if (2 <= chinasameO.length) {
         chinasameO = `${((logoute ? 1 : 4))}`;
      }
         chinasameO += "2";
      if (logoute) {
         logoute = (chinasameO.length % (Math.max(8, privacyd.length))) <= 93;
      }
         chinasameO += `${((logoute ? 3 : 1) & 3)}`;
          let zhuboR = String.fromCharCode(117,95,56,55,95,103,114,111,117,112,105,110,103,0);
          let strp: Map<any, any> = new Map([[String.fromCharCode(114,101,97,108,108,121,95,104,95,57,51,0),517], [String.fromCharCode(103,95,52,57,95,101,109,109,105,110,116,114,105,110,0),635], [String.fromCharCode(106,115,111,110,115,95,108,95,54,50,0),766]]);
          let downloader1 = 3.0;
         logoute = (chinasameO.length - strp.size) < 44;
         zhuboR += `${zhuboR.length % 1}`;
         strp = new Map([[zhuboR, parseInt(`${downloader1}`) << (Math.min(Math.abs(1), 5))]]);
         downloader1 -= parseFloat(`${1}`);
         logoute = privacyd.length <= chinasameO.length;
      if (chinasameO.length == 1 || !logoute) {
         chinasameO += `${2 << (Math.min(4, privacyd.length))}`;
      }
      while (logoute && privacyd.length > 4) {
         privacyd += `${chinasameO.length - 1}`;
         break;
      }
      let interstitialw = logoute ? !logoute : logoute;
      do {
         logoute = (((logoute ? 91 : chinasameO.length) / (Math.max(3, chinasameO.length))) == 91);
         if (interstitialw) {
            break;
         }
      } while ((!logoute) && interstitialw);
      windD |= 3;
   while (4.38 <= (4.43 + mbnativeF)) {
      mbnativeF *= shirt6.length;
      break;
   }
      tooltipsJ = [2];
      formM.set(modeK, 3);

    setShowLoading(true);
    flatlistRef?.current?.scrollToOffset({ animated: false, offset: 0 });

    setTimeout(() => {

   let package_9n = 9786126.0 <= mbnativeF;
   do {
      mbnativeF /= Math.max(shirt6.length * 3, 2);
      if (package_9n) {
         break;
      }
   } while ((2 >= windD) && package_9n);
   for (let h = 0; h < 1; h++) {
      formM = new Map([[shirt6, shirt6.length]]);
   }
   for (let b = 0; b < 2; b++) {
      shirt6 = `${2 - modeK.length}`;
   }
   let splash2 = 8259466.0 >= mbnativeF;
   do {
      mbnativeF /= Math.max(4, 2 & modeK.length);
      if (splash2) {
         break;
      }
   } while (splash2 && ((projecto - mbnativeF) < 4.78 || (1 * projecto) < 5));
      

   while (shirt6.length >= 4) {
      shirt6 = `${parseInt(`${mbnativeF}`) % 1}`;
      break;
   }
   let scorel = 8930610 <= windD;
   do {
      windD <<= Math.min(2, modeK.length);
      if (scorel) {
         break;
      }
   } while (((3 & modeK.length) > 4) && scorel);
   while (!shirt6.startsWith(`${formM.size}`)) {
       let cataloge = 1.0;
       let rewardvideoy = 5.0;
       let stylesS: Array<any> = [12, 903];
       let homeH = String.fromCharCode(115,111,105,115,99,111,110,110,101,99,116,101,100,95,103,95,48,0);
       let traminit = 3.0;
      for (let f = 0; f < 3; f++) {
         cataloge *= stylesS.length;
      }
      let floaterL = 7991931.0 >= traminit;
      do {
         traminit /= Math.max(3, 1);
         if (floaterL) {
            break;
         }
      } while ((2.25 >= traminit) && floaterL);
          let overd = String.fromCharCode(103,95,57,53,95,105,110,105,116,105,97,108,105,122,97,116,105,111,110,115,0);
          let configurej = String.fromCharCode(99,95,49,57,95,114,101,115,99,104,101,100,117,108,101,0);
         cataloge *= stylesS.length;
         overd += `${overd.length - configurej.length}`;
         configurej = `${configurej.length}`;
          let inviteB = 5;
         cataloge *= 2 >> (Math.min(Math.abs(parseInt(`${rewardvideoy}`)), 5));
         inviteB &= inviteB >> (Math.min(Math.abs(1), 4));
       let rightg = false;
      for (let m = 0; m < 2; m++) {
          let redirectO = String.fromCharCode(98,97,114,99,111,100,101,95,121,95,52,53,0);
          let shirtr = String.fromCharCode(106,95,54,50,95,98,108,97,99,107,0);
          let hongkongE: Array<any> = [412, 792, 625];
          let lives: Map<any, any> = new Map([[String.fromCharCode(99,111,114,110,101,114,115,95,115,95,55,53,0),false ], [String.fromCharCode(121,95,53,53,95,115,119,114,0),false ]]);
         traminit -= lives.size;
         redirectO = "3";
         shirtr += `${3 / (Math.max(2, redirectO.length))}`;
         hongkongE.push(redirectO.length);
         lives = new Map([[`${hongkongE.length}`, hongkongE.length << (Math.min(shirtr.length, 4))]]);
      }
       let transferk: Map<any, any> = new Map([[String.fromCharCode(102,95,55,57,95,114,116,112,112,114,111,116,111,0),395], [String.fromCharCode(98,103,114,97,95,107,95,53,48,0),258]]);
      for (let l = 0; l < 3; l++) {
         stylesS = [3 | parseInt(`${cataloge}`)];
      }
      if (!stylesS.includes(cataloge)) {
         stylesS.push(stylesS.length);
      }
      for (let w = 0; w < 2; w++) {
         rightg = null == transferk.get(`${rewardvideoy}`);
      }
      while (2.90 < cataloge) {
         rewardvideoy += (parseFloat(`${parseInt(`${rewardvideoy}`) / (Math.max(5, (rightg ? 2 : 4)))}`));
         break;
      }
      if (rightg) {
         stylesS = [2 / (Math.max(9, transferk.size))];
      }
         traminit -= parseInt(`${rewardvideoy}`);
      let const_ihw = 8370421 >= stylesS.length;
      do {
         stylesS.push(parseInt(`${rewardvideoy}`));
         if (const_ihw) {
            break;
         }
      } while (((stylesS.length - parseInt(`${rewardvideoy}`)) < 4) && const_ihw);
      while (transferk.size <= parseInt(`${rewardvideoy}`)) {
         rewardvideoy /= Math.max(4, (parseFloat(`${(rightg ? 5 : 5) / (Math.max(9, transferk.size))}`)));
         break;
      }
      shirt6 += `${homeH.length}`;
      break;
   }
   if ((mbnativeF - 1.47) == 4.51) {
      shirt6 = `${parseInt(`${mbnativeF}`)}`;
   }
      setShowLoading(false);
    }, 1200);
  };

  
  
  
  
  
  
  
  
  

  const handleInitialLoading = useCallback(() => {
       let dangerF: Map<any, any> = new Map([[String.fromCharCode(99,111,108,111,99,97,116,101,100,95,116,95,53,50,0),false ], [String.fromCharCode(114,101,103,105,115,116,114,97,110,116,95,107,95,54,53,0),true ]]);
    let blackY = 1;
    let pauseA = 3.0;
    let textV = String.fromCharCode(99,95,57,57,95,109,112,101,103,97,117,100,105,111,100,101,99,104,101,97,100,101,114,0);
    let countdownv = 1;
    let nextq = true;
    let lineq = true;
    let bottomq = String.fromCharCode(118,95,53,53,95,113,117,101,117,101,115,0);
    let small5 = String.fromCharCode(103,95,51,49,95,115,115,121,98,0);
    let dicep = 1.0;
    let clockm = String.fromCharCode(116,105,109,101,111,117,116,115,95,112,95,54,54,0);
      pauseA /= Math.max(parseFloat(`${1}`), 2);
       let phoneI = String.fromCharCode(102,119,104,116,95,97,95,49,0);
       let umengD = 4.0;
         phoneI += `${phoneI.length}`;
      let alertC = 8810052.0 >= umengD;
      do {
          let eactl = String.fromCharCode(112,95,54,48,95,98,114,111,97,100,99,97,115,116,115,0);
          let videoF = 3.0;
          let stringD: Map<any, any> = new Map([[String.fromCharCode(121,95,51,50,95,101,120,116,114,97,99,116,105,111,110,0),false ], [String.fromCharCode(103,101,116,110,101,116,119,111,114,107,112,97,114,97,109,115,95,50,95,57,48,0),true ]]);
          let networkv = 2.0;
          let coreb = 0.0;
         umengD *= parseFloat(`${parseInt(`${videoF}`) % 1}`);
         eactl += `${(String.fromCharCode(111,0) == eactl ? parseInt(`${coreb}`) : eactl.length)}`;
         videoF /= Math.max(3 * eactl.length, 5);
         stringD.set(`${eactl}`, eactl.length);
         networkv *= parseFloat(`${1 * stringD.size}`);
         coreb *= parseFloat(`${stringD.size}`);
         if (alertC) {
            break;
         }
      } while ((!phoneI.startsWith(`${umengD}`)) && alertC);
      for (let h = 0; h < 1; h++) {
          let refreshA: Map<any, any> = new Map([[String.fromCharCode(100,95,56,49,95,105,103,110,97,108,0),true ], [String.fromCharCode(105,110,116,101,114,115,101,99,116,105,110,103,95,113,95,56,0),false ]]);
          let questh: Array<any> = [String.fromCharCode(104,95,50,95,112,105,120,98,108,111,99,107,100,115,112,0), String.fromCharCode(115,101,112,105,97,95,122,95,56,49,0)];
          let firebasev: Map<any, any> = new Map([[String.fromCharCode(115,101,97,114,99,104,95,110,95,56,57,0),String.fromCharCode(113,117,97,100,114,95,56,95,55,57,0)], [String.fromCharCode(116,111,112,115,95,122,95,50,53,0),String.fromCharCode(97,116,111,109,105,99,97,108,108,121,95,101,95,49,55,0)], [String.fromCharCode(103,95,52,55,95,101,110,102,111,114,99,101,0),String.fromCharCode(110,95,55,55,0)]]);
         phoneI = `${questh.length}`;
         refreshA.set(`${refreshA.size}`, firebasev.size);
         questh = [3];
         firebasev.set(`${firebasev.size}`, 2 << (Math.min(1, Math.abs(refreshA.size))));
      }
         umengD /= Math.max(4, parseFloat(`${phoneI.length}`));
         umengD /= Math.max((parseFloat(`${String.fromCharCode(118,0) == phoneI ? phoneI.length : parseInt(`${umengD}`)}`)), 2);
      while (3 >= phoneI.length) {
         phoneI = `${parseInt(`${umengD}`)}`;
         break;
      }
      small5 += `${3 / (Math.max(8, parseInt(`${pauseA}`)))}`;
       let gradleC = String.fromCharCode(104,95,53,53,95,115,101,108,101,99,116,105,118,101,0);
          let mini9 = 0.0;
          let mini_ = String.fromCharCode(112,111,115,115,105,98,108,121,95,52,95,55,48,0);
          let trophyS = String.fromCharCode(101,95,57,54,95,105,110,118,97,108,105,100,97,116,101,0);
         gradleC = `${mini_.length}`;
         mini9 -= parseFloat(`${trophyS.length}`);
         mini_ += "2";
         trophyS = `${parseInt(`${mini9}`) >> (Math.min(Math.abs(1), 4))}`;
      for (let z = 0; z < 2; z++) {
         gradleC += "2";
      }
         gradleC = `${gradleC.length}`;
      blackY |= small5.length;
   for (let l = 0; l < 3; l++) {
      pauseA -= parseFloat(`${3 - parseInt(`${pauseA}`)}`);
   }
   for (let e = 0; e < 1; e++) {
      dicep -= (parseFloat(`${(nextq ? 3 : 2) ^ parseInt(`${dicep}`)}`));
   }
   while (dangerF.get(`${pauseA}`) == null) {
      dangerF.set(`${countdownv}`, bottomq.length + 1);
      break;
   }
   while (dangerF.size >= 1) {
      dangerF.set(textV, (textV == String.fromCharCode(55,0) ? textV.length : countdownv));
      break;
   }


    setShowLoading2(true);

      blackY -= textV.length << (Math.min(Math.abs(2), 1));
       let shared = 3.0;
         shared *= parseFloat(`${parseInt(`${shared}`) + 2}`);
          let mintegralZ = String.fromCharCode(103,95,53,54,95,116,104,114,101,101,115,116,97,116,101,0);
         shared += parseFloat(`${mintegralZ.length}`);
      if (shared < 1.62) {
         shared /= Math.max(parseFloat(`${parseInt(`${shared}`)}`), 4);
      }
      textV = "3";
      countdownv <<= Math.min(Math.abs(3), 4);
      small5 = `${(small5 == String.fromCharCode(74,0) ? bottomq.length : small5.length)}`;
   let sportg = dicep >= 9238228.0;
   do {
       let submit3 = 0.0;
       let downloadingk = false;
       let chinasamez: Map<any, any> = new Map([[String.fromCharCode(100,120,116,97,95,112,95,50,52,0),665], [String.fromCharCode(112,97,99,107,101,116,101,100,95,49,95,51,51,0),925], [String.fromCharCode(112,111,108,105,99,121,95,103,95,55,56,0),438]]);
       let constants5: Map<any, any> = new Map([[String.fromCharCode(97,120,112,95,54,95,49,57,0),String.fromCharCode(108,95,50,51,95,110,117,109,115,0)], [String.fromCharCode(112,95,52,55,95,105,112,108,99,111,110,118,107,101,114,110,101,108,0),String.fromCharCode(120,95,51,54,95,110,101,97,114,101,114,0)]]);
          let matchk = 5;
          let combineK: Map<any, any> = new Map([[String.fromCharCode(98,105,116,101,120,97,99,116,110,101,115,115,95,106,95,53,50,0),767], [String.fromCharCode(115,95,56,52,95,104,105,103,104,108,105,103,104,116,97,98,108,101,0),907]]);
          let debugf = String.fromCharCode(115,116,114,105,112,101,95,107,95,51,53,0);
         constants5 = new Map([[`${constants5.size}`, 3 ^ constants5.size]]);
         matchk %= Math.max(debugf.length, 3);
         combineK.set(`${matchk}`, (String.fromCharCode(76,0) == debugf ? debugf.length : matchk));
      for (let w = 0; w < 2; w++) {
         downloadingk = 99.85 > submit3 || !downloadingk;
      }
          let dcopy_a1u = String.fromCharCode(109,95,56,50,95,118,111,116,101,0);
          let schedulew = String.fromCharCode(114,101,97,100,113,95,116,95,56,53,0);
         chinasamez.set(`${downloadingk}`, ((downloadingk ? 2 : 2) % 1));
         dcopy_a1u = "2";
         schedulew += "3";
         submit3 *= 2 / (Math.max(7, constants5.size));
         chinasamez = new Map([[`${chinasamez.size}`, constants5.size * 3]]);
      dicep -= parseFloat(`${blackY >> (Math.min(Math.abs(3), 2))}`);
      if (sportg) {
         break;
      }
   } while (sportg && ((textV.length % 3) < 2 || 4 < (textV.length / 3)));
      nextq = pauseA > 52.88;
      small5 += `${parseInt(`${dicep}`)}`;
    setTimeout(() => {

   let colorsz = 8923018 <= blackY;
   do {
      blackY /= Math.max(3, 3);
      if (colorsz) {
         break;
      }
   } while (((3 % (Math.max(9, blackY))) >= 2 || lineq) && colorsz);
   while (5.40 < dicep) {
       let connections: Map<any, any> = new Map([[String.fromCharCode(104,95,55,56,95,109,105,100,116,111,110,101,115,0),414], [String.fromCharCode(111,95,54,57,95,97,98,111,117,116,115,0),67], [String.fromCharCode(114,101,115,101,101,107,95,52,95,56,55,0),80]]);
       let tempe = 1;
       let select4 = String.fromCharCode(97,117,116,104,111,114,105,122,101,100,95,105,95,49,52,0);
         select4 = `${(select4 == String.fromCharCode(101,0) ? select4.length : tempe)}`;
      while (connections.size >= select4.length) {
         select4 = `${connections.size}`;
         break;
      }
          let flyerR = 1.0;
          let leftD: Array<any> = [String.fromCharCode(106,95,49,50,95,101,118,101,110,97,118,103,0), String.fromCharCode(97,95,57,51,95,100,101,99,105,112,104,101,114,0), String.fromCharCode(115,95,57,57,95,102,108,97,116,116,101,110,0)];
         tempe /= Math.max((select4 == String.fromCharCode(79,0) ? select4.length : leftD.length), 1);
         flyerR *= parseFloat(`${1}`);
         leftD.push(2);
         select4 += `${select4.length}`;
      for (let t = 0; t < 2; t++) {
         select4 = "1";
      }
      let long_3yI = tempe <= 4914307;
      do {
          let pressurev = String.fromCharCode(99,95,56,51,95,110,105,109,97,116,105,111,110,0);
          let with_a0: Array<any> = [String.fromCharCode(108,95,49,51,95,115,116,105,108,108,0), String.fromCharCode(97,115,111,108,117,116,101,95,122,95,50,57,0), String.fromCharCode(117,110,112,114,111,99,101,115,115,101,100,95,101,95,52,54,0)];
          let hearte = 1;
          let switch_6fW = 5.0;
         tempe &= tempe;
         pressurev += `${(String.fromCharCode(90,0) == pressurev ? pressurev.length : hearte)}`;
         with_a0 = [(String.fromCharCode(67,0) == pressurev ? hearte : pressurev.length)];
         switch_6fW /= Math.max(3, parseFloat(`${with_a0.length}`));
         if (long_3yI) {
            break;
         }
      } while (((tempe >> (Math.min(Math.abs(2), 2))) <= 2 || 5 <= (2 >> (Math.min(5, Math.abs(tempe))))) && long_3yI);
      let viewerO = connections.size >= 9062801;
      do {
         connections.set(`${tempe}`, 2 % (Math.max(3, connections.size)));
         if (viewerO) {
            break;
         }
      } while (viewerO && ((2 >> (Math.min(1, Math.abs(connections.size)))) < 2));
      for (let u = 0; u < 1; u++) {
          let robotoi = 4;
          let episodesv = String.fromCharCode(116,97,98,108,101,115,95,55,95,49,50,0);
          let savez = String.fromCharCode(98,95,52,52,95,112,117,109,112,0);
          let flyerg = String.fromCharCode(109,117,108,116,105,115,116,101,112,95,54,95,54,54,0);
         connections.set(flyerg, tempe >> (Math.min(flyerg.length, 5)));
         robotoi ^= robotoi + savez.length;
         episodesv += `${robotoi * 2}`;
         savez += `${savez.length % (Math.max(1, 2))}`;
      }
         select4 = `${connections.size % 1}`;
      dicep -= (parseFloat(`${dangerF.size / (Math.max(2, (lineq ? 2 : 3)))}`));
      break;
   }
       let mbsplashE = String.fromCharCode(99,104,105,109,112,95,101,95,57,55,0);
         mbsplashE += `${mbsplashE.length + 1}`;
      let xvodl = 5911482 <= mbsplashE.length;
      do {
          let heart2: Map<any, any> = new Map([[String.fromCharCode(102,95,55,56,95,114,101,103,0),String.fromCharCode(114,95,54,49,95,99,104,114,111,109,97,116,105,99,0)], [String.fromCharCode(99,111,109,109,97,110,100,108,105,110,101,102,108,97,103,95,55,95,57,0),String.fromCharCode(119,95,49,48,95,112,111,119,101,114,102,117,108,0)], [String.fromCharCode(120,95,50,49,95,114,103,116,99,117,0),String.fromCharCode(100,95,52,57,95,117,110,109,97,114,107,0)]]);
          let basketball3 = 2.0;
          let mbbannerP = String.fromCharCode(106,95,53,56,95,101,120,104,97,117,115,116,101,100,0);
          let shoote = false;
          let icony = String.fromCharCode(98,97,111,98,97,98,95,54,95,57,49,0);
         mbsplashE += `${(1 ^ (shoote ? 2 : 1))}`;
         heart2 = new Map([[`${heart2.size}`, 3]]);
         basketball3 -= 2;
         mbbannerP = "2";
         shoote = parseInt(`${basketball3}`) == mbbannerP.length;
         icony = `${heart2.size}`;
         if (xvodl) {
            break;
         }
      } while ((mbsplashE != mbsplashE) && xvodl);
      while (mbsplashE != String.fromCharCode(120,0)) {
         mbsplashE = `${mbsplashE.length}`;
         break;
      }
      bottomq += `${textV.length}`;
      blackY -= 1;
   if (!small5.startsWith(bottomq)) {
      small5 += `${((lineq ? 5 : 2) + 3)}`;
   }
   for (let x = 0; x < 3; x++) {
       let penaltyY = false;
       let signinupR: Map<any, any> = new Map([[String.fromCharCode(120,100,97,105,95,114,95,52,0),278], [String.fromCharCode(109,111,114,112,104,101,100,95,116,95,52,49,0),239]]);
       let logoutR = 4.0;
         signinupR.set(`${logoutR}`, signinupR.size);
         signinupR = new Map([[`${signinupR.size}`, signinupR.size]]);
         logoutR += parseFloat(`${1 * parseInt(`${logoutR}`)}`);
         penaltyY = (parseFloat(`${signinupR.size}`) - logoutR) == 50.57;
          let downloadingo = String.fromCharCode(109,95,53,57,95,97,114,109,108,105,110,107,0);
         logoutR *= (parseFloat(`${(penaltyY ? 5 : 1) & parseInt(`${logoutR}`)}`));
         downloadingo += `${downloadingo.length}`;
          let leagueu = String.fromCharCode(99,98,115,110,105,100,95,48,95,50,54,0);
         logoutR += parseFloat(`${3}`);
         leagueu = `${leagueu.length - leagueu.length}`;
      for (let q = 0; q < 1; q++) {
          let clockd = 2;
          let mbnativeadvancedU = true;
         signinupR = new Map([[`${signinupR.size}`, signinupR.size]]);
         clockd <<= Math.min(parseInt(`${Math.abs(((mbnativeadvancedU ? 2 : 1) % (Math.max(clockd, 1))))}`), 2);
         mbnativeadvancedU = 7 > clockd;
      }
      for (let r = 0; r < 1; r++) {
          let shrinkX: Map<any, any> = new Map([[String.fromCharCode(112,114,101,99,111,109,112,111,115,101,100,95,53,95,52,48,0),227], [String.fromCharCode(110,101,97,114,108,121,95,110,95,50,51,0),96]]);
          let disconnectedi = String.fromCharCode(99,95,49,55,95,112,108,97,105,110,0);
          let membershipC = String.fromCharCode(108,95,51,56,95,109,97,116,114,105,120,0);
          let areae = 2.0;
         penaltyY = logoutR < 7.80;
         shrinkX = new Map([[membershipC, parseInt(`${areae}`) | membershipC.length]]);
         disconnectedi += "3";
         areae -= parseFloat(`${membershipC.length << (Math.min(4, Math.abs(parseInt(`${areae}`))))}`);
      }
      while (!penaltyY) {
         logoutR += parseFloat(`${signinupR.size}`);
         break;
      }
      bottomq += `${3 ^ bottomq.length}`;
   }
      bottomq = `${(textV.length >> (Math.min(1, Math.abs((nextq ? 4 : 2)))))}`;
      setShowLoading2(false);
    }, 1200);

  }, []);

  useEffect(() => {
    handleInitialLoading();
  }, [handleInitialLoading]);

  useEffect(() => {
    flatlistRef
  }, []);

  useEffect(() => {
    if (screenState.autoSelectSport == true) {
      handleRefresh();
    }
  }, [screenState.autoSelectSport])

  return (
    <View style={{ flex: 1 }}>

      {showLoading2 && (
        <View
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            zIndex: 1000,
            backgroundColor: "#0c0c0c",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 20,
          }}
        >
          <FastImage
            style={{ height: 150, width: 150 }}
            source={require("@static/images/blacklistTumbnail.gif")}
            resizeMode={"contain"}
          />
        </View>

      )}


      {matches?.data !== undefined && matches.data.length > 0 ? (
        <View>
          <FlatList
            ref={flatlistRef}
            data={matches.data}
            windowSize={3}
            
            maxToRenderPerBatch={10}
            initialNumToRender={10}
            renderItem={Content}
            
            
            
            
            
            
            onEndReachedThreshold={0.9}
            
            ListFooterComponent={
              <View style={{ paddingTop: TOPON_BANNER_HEIGHT + 20 }} />
            }
          />
        </View>
      ) : (
        <></>
      )}

      {matches?.data !== undefined && matches.data.length == 0 && (
        <View
          style={{
            height: 100,
            backgroundColor: "#0c0c0c",
            justifyContent: "center",
            alignItems: "center",
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
          }}
        >
          <Text style={{ color: "#9c9c9c", fontStyle: "italic" }}>
            暂无赛事
          </Text>
        </View>
      )}

      {showLoading && (
        <View
          style={{
            position: "absolute",
            
            backgroundColor: "#0c0c0c",
            zIndex: 1,
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 15,
          }}
        >
          <FastImage
            source={require("@static/images/toponTerms.gif")}
            style={{ width: 100, height: 100 }}
            resizeMode="contain"
          />
        </View>
      )}

      <TouchableOpacity
        style={styles.refresh}
        onPress={() => {
          fetchData();
          handleRefresh();
        }}
      >
        <FastImage
          source={require("../../assets/images/configureBecomeMiddle.png")}
          style={{ width: 35, height: 35 }}
          resizeMode={"contain"}
        />
      </TouchableOpacity>
    </View>
  );
};
export default memo(MatchScheduleList);
