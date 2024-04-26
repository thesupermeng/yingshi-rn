import React, { memo, useState, useRef, useEffect, useCallback, useLayoutEffect } from "react";
import { View, Text, FlatList, Dimensions } from "react-native";
import { useFocusEffect, useTheme } from "@react-navigation/native";
import styles from "./wawa_hiad_iconnewchat";
import { TouchableOpacity } from "react-native";
import { formatMatchDate } from "../../utility/utils";
import { wawaIconsubssuccess } from "@redux/wawa_bgvipsport_spinner";
import { wawaPhone } from "../../types/wawa_klevin_iconwechat";
import { Url } from "../../middleware/wawa_iconfeedback";
import { useInfiniteQuery } from "@tanstack/react-query";
import wawaLibjsinspector from "../../middleware/wawa_ping";
import MatchScheduleVip from "./wawa_issub";
import FastImage from "../../../components/common/wawa_iconarrowrightblack";
import { TOPON_BANNER_HEIGHT } from "@utility/wawa_iconpointscore";
import { wawaLeaguedetailsbgMbbid } from "@type/wawa_gradlew";
import { wawaGreyChange } from "@utility/wawa_graphics_manager";
import { wawaStatisticsEpisodes } from "@constants";
import { wawaBasketballiconPenaltyshootnogoal } from "../../../../wawa_shareblack_orientation";
import { BannerContainer } from "../../../components/container/wawa_typing_libfabricjni";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAppSelector, useSelector } from "@hooks/wawa_root";
import wawa_dacccfaabfbcbadeebddcabacdffdbc_video from "../../../../Umeng/wawa_dacccfaabfbcbadeebddcabacdffdbc_video";
import { wawaFlagStations } from "../../../api/wawa_iconclosewhite_iconplay";
import { wawaPhoneControls } from "@redux/reducers/wawa_umeng";
import { wawaLibglog } from "@models/wawa_refreshborderless_found";
import { screenModel } from "@type/wawa_rules";

interface wawaAwayShow {
  matchTypeID: number;
  status?: number;
  setShowBecomeVIPOverlay: any;
  bgDark?: boolean;
  isLive?: boolean;
}

type wawaFillSlider = {
  date: string | undefined;
  data: wawaPhone | undefined;
};

type wawa_pressure_helper = {
  headers: number[];
  data: wawaFillSlider[];
};

const MatchScheduleList = ({
  matchTypeID,
  status = -1,
  setShowBecomeVIPOverlay,
  bgDark = false,
  isLive = false,
}: wawaAwayShow) => {
  const { colors, textVariants, spacing } = useTheme();
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  const latestListDate = useRef<Date | undefined>();
  let flatlistRef = useRef();

  const [isFetchNext, setFetchNext] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [showLoading2, setShowLoading2] = useState(false);
  const [bannerAd, setBannerAd] = useState<wawaLeaguedetailsbgMbbid>();
  const [bannerAdList, setBannerAdList] = useState<Array<wawaLeaguedetailsbgMbbid>>([]);
  const userState = useSelector<wawaPhoneControls>('userReducer');
  const isVip = wawaLibglog.isVip(userState.user);
  const screenState = useSelector<screenModel>('screenReducer');


  const [matches, setMatches] = useState<wawa_pressure_helper>({
    headers: [],
    data: [],
  });

  const getUrl = () => {
       let configuree: Array<any> = [260, 360];
    let libreactnativeblobA = true;
    let hiadW = String.fromCharCode(112,114,101,115,101,110,116,97,116,105,111,110,95,121,95,54,48,0);
    let iconwatchn = String.fromCharCode(98,108,111,119,102,105,115,104,95,108,95,54,48,0);
    let frame_t2O = String.fromCharCode(115,95,52,55,95,104,119,97,101,115,0);
    let changew = String.fromCharCode(117,95,54,54,95,97,115,115,111,99,105,97,116,101,0);
    let libzeuso = 4;
    let hearta = String.fromCharCode(121,95,56,55,95,100,101,116,97,105,108,0);
    let iconpointscoreV = 4.0;
    let e_lock3 = 1;
   if (changew.endsWith(`${frame_t2O.length}`)) {
       let runtimex: Array<any> = [767, 419, 597];
       let predictione = String.fromCharCode(117,99,108,111,99,107,95,116,95,55,50,0);
       let uploadz = 2.0;
       let bellC = 1;
       let defaultpredictionprofileF = 3;
       let matchdetailbgK: Map<any, any> = new Map([[String.fromCharCode(108,115,112,108,112,99,95,113,95,51,49,0),757], [String.fromCharCode(103,95,53,56,95,110,111,118,101,99,0),117]]);
      while ((bellC - runtimex.length) >= 2) {
         bellC >>= Math.min(Math.abs(1), 4);
         break;
      }
       let entryH = String.fromCharCode(122,95,52,56,95,115,111,99,111,110,110,101,99,116,0);
         uploadz += parseFloat(`${predictione.length * entryH.length}`);
          let codeo = 4.0;
          let colorsd = String.fromCharCode(98,108,117,114,95,119,95,54,50,0);
         defaultpredictionprofileF %= Math.max(4, (String.fromCharCode(75,0) == colorsd ? runtimex.length : colorsd.length));
         codeo *= parseFloat(`${parseInt(`${codeo}`)}`);
      let moduleI = 6199957 >= runtimex.length;
      do {
          let libavformatn = 4.0;
         runtimex = [defaultpredictionprofileF];
         libavformatn -= parseInt(`${libavformatn}`) - parseInt(`${libavformatn}`);
         if (moduleI) {
            break;
         }
      } while (moduleI && ((predictione.length % 4) > 3 && 1 > (predictione.length % (Math.max(4, 10)))));
         matchdetailbgK.set(`${defaultpredictionprofileF}`, defaultpredictionprofileF | 3);
         bellC /= Math.max(2, 1);
      for (let m = 0; m < 1; m++) {
          let downN = 1.0;
          let templateprocessorC = 1;
          let iconqqi: Map<any, any> = new Map([[String.fromCharCode(101,95,50,53,95,112,105,110,103,0),573], [String.fromCharCode(115,117,98,112,111,105,110,116,101,114,95,115,95,53,0),595], [String.fromCharCode(98,101,103,105,110,95,113,95,57,57,0),291]]);
          let constantsW = 0.0;
         predictione = `${parseInt(`${downN}`) >> (Math.min(3, Math.abs(templateprocessorC)))}`;
         downN /= Math.max(parseFloat(`${3 >> (Math.min(1, Math.abs(iconqqi.size)))}`), 2);
         templateprocessorC *= iconqqi.size;
         constantsW /= Math.max(1, 3 - iconqqi.size);
      }
         runtimex.push(bellC);
         defaultpredictionprofileF |= (String.fromCharCode(99,0) == entryH ? entryH.length : defaultpredictionprofileF);
         runtimex = [parseInt(`${uploadz}`) % 2];
      if ((1 % (Math.max(7, predictione.length))) >= 1 || (predictione.length % 1) >= 3) {
          let footballs: Map<any, any> = new Map([[String.fromCharCode(117,95,54,95,113,112,102,105,108,101,0),250], [String.fromCharCode(109,97,112,112,101,114,95,102,95,49,54,0),695], [String.fromCharCode(101,95,50,53,95,97,115,121,110,99,104,114,111,110,111,117,115,108,121,0),210]]);
         predictione += `${bellC}`;
         footballs.set(`${footballs.size}`, 3);
      }
          let sheetm = String.fromCharCode(101,115,100,115,95,118,95,55,53,0);
         uploadz *= parseFloat(`${runtimex.length ^ 3}`);
         sheetm += `${sheetm.length}`;
      for (let o = 0; o < 1; o++) {
         runtimex = [3 | matchdetailbgK.size];
      }
      frame_t2O = `${(frame_t2O == String.fromCharCode(75,0) ? defaultpredictionprofileF : frame_t2O.length)}`;
   }
       let videoF = String.fromCharCode(97,112,112,114,111,120,95,98,95,54,55,0);
       let basketballmatchdetailbgg = String.fromCharCode(101,95,50,49,95,115,117,98,116,97,115,107,0);
      if (!basketballmatchdetailbgg.includes(videoF)) {
         basketballmatchdetailbgg += "3";
      }
      if (videoF.includes(`${basketballmatchdetailbgg.length}`)) {
          let container4 = String.fromCharCode(110,95,52,55,95,118,97,108,105,100,97,116,111,114,115,0);
         videoF += `${(basketballmatchdetailbgg == String.fromCharCode(111,0) ? videoF.length : basketballmatchdetailbgg.length)}`;
         container4 = `${container4.length - 1}`;
      }
          let dialogi: Array<any> = [242, 326, 67];
          let runtimeschedulerK = String.fromCharCode(102,95,51,53,95,101,110,104,97,110,99,101,109,101,110,116,115,0);
          let singlej: Array<any> = [195, 575, 681];
         videoF = `${videoF.length}`;
         dialogi.push(2 ^ singlej.length);
         runtimeschedulerK = `${singlej.length}`;
         videoF = "2";
         basketballmatchdetailbgg += "3";
         videoF += `${videoF.length}`;
      changew = `${libzeuso ^ basketballmatchdetailbgg.length}`;

    let url = "";

       let stationsi = false;
         stationsi = (!stationsi ? !stationsi : stationsi);
          let awayplayerf = String.fromCharCode(120,105,112,104,95,55,95,56,56,0);
          let basketballiconC = 1.0;
          let anythinkW = 4;
         stationsi = !stationsi;
         awayplayerf += `${anythinkW}`;
         basketballiconC /= Math.max((awayplayerf == String.fromCharCode(112,0) ? awayplayerf.length : parseInt(`${basketballiconC}`)), 3);
         anythinkW &= parseInt(`${basketballiconC}`) % 1;
          let downloadedZ = 4.0;
         stationsi = 47.78 <= downloadedZ;
      iconwatchn += `${(String.fromCharCode(68,0) == hearta ? hearta.length : libzeuso)}`;
   while (libreactnativeblobA && hearta.length > 3) {
      libreactnativeblobA = 29 < libzeuso;
      break;
   }
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
    

   if (!hearta.includes(`${configuree.length}`)) {
      hearta += `${frame_t2O.length - 1}`;
   }
      hiadW = `${changew.length}`;
    

      hiadW += `${(hearta == String.fromCharCode(85,0) ? hearta.length : hiadW.length)}`;
   if (2 == (libzeuso ^ 1) || (iconwatchn.length ^ libzeuso) == 1) {
       let k_image5 = String.fromCharCode(115,116,114,108,105,107,101,95,99,95,53,52,0);
       let chartF = 4.0;
      let iconlogoutk = 6275332 <= k_image5.length;
      do {
          let awayC = 1.0;
          let internetx = 4.0;
         k_image5 = `${parseInt(`${internetx}`)}`;
         awayC -= parseFloat(`${parseInt(`${awayC}`) << (Math.min(3, Math.abs(1)))}`);
         if (iconlogoutk) {
            break;
         }
      } while ((4.65 <= (chartF + 1.68)) && iconlogoutk);
          let u_player9 = String.fromCharCode(111,112,101,114,97,116,111,114,95,103,95,52,51,0);
         k_image5 = `${k_image5.length}`;
         u_player9 = `${(u_player9 == String.fromCharCode(51,0) ? u_player9.length : u_player9.length)}`;
         chartF /= Math.max(parseFloat(`${parseInt(`${chartF}`) & 3}`), 3);
       let checkboxj = 1.0;
       let catalogf = 5.0;
       let eventsplasht = true;
      while (5.41 >= checkboxj && (checkboxj * 5.41) >= 2.91) {
         eventsplasht = 95.67 > (checkboxj * chartF);
         break;
      }
      libzeuso >>= Math.min(2, Math.abs((String.fromCharCode(97,0) == changew ? changew.length : hearta.length)));
   }
    

      hearta = "1";
       let white3 = String.fromCharCode(120,112,114,118,95,102,95,52,0);
      for (let i = 0; i < 1; i++) {
         white3 = `${white3.length & 2}`;
      }
         white3 = `${white3.length + 1}`;
      let libmapbufferjni3 = white3 == String.fromCharCode(52,120,49,98,104,109,52,98,108,55,0);
      do {
          let gmail9 = 3.0;
          let referreru = 3.0;
          let trashF = String.fromCharCode(97,95,49,56,95,103,102,105,110,116,0);
         white3 += `${white3.length}`;
         gmail9 *= trashF.length - 1;
         referreru /= Math.max(parseFloat(`${parseInt(`${referreru}`) | parseInt(`${gmail9}`)}`), 4);
         trashF = `${trashF.length}`;
         if (libmapbufferjni3) {
            break;
         }
      } while ((!white3.endsWith(`${white3.length}`)) && libmapbufferjni3);
      changew = "2";
    

      hiadW += `${libzeuso}`;
      changew += `${hiadW.length}`;
    

       let heartu = 5;
      while ((heartu ^ 5) == 2 || 5 == (heartu ^ heartu)) {
          let modell = false;
          let whiteanimationliveE = 0.0;
          let entry9 = 5;
         heartu |= heartu % 2;
         modell = parseFloat(`${entry9}`) == whiteanimationliveE;
         whiteanimationliveE /= Math.max(parseFloat(`${3}`), 2);
         entry9 <<= Math.min(3, Math.abs(3));
         break;
      }
          let inviteX = true;
         heartu &= heartu;
         inviteX = !inviteX;
         heartu %= Math.max(heartu, 1);
      iconwatchn = `${heartu & parseInt(`${iconpointscoreV}`)}`;
       let configurex = String.fromCharCode(110,95,54,95,99,111,110,118,101,114,116,105,110,103,0);
       let stationst = 3.0;
       let iconcloset = 3.0;
      if (5 >= (parseInt(`${iconcloset}`) / (Math.max(configurex.length, 8))) || (configurex.length - 5) >= 3) {
         configurex += `${parseInt(`${stationst}`)}`;
      }
      if ((iconcloset * 1.14) <= 1.80 && (1.14 * iconcloset) <= 3.97) {
          let mbnativeadvancedL = 3.0;
          let shootu = String.fromCharCode(122,95,57,52,95,108,105,98,114,97,114,121,0);
          let basketballdetailsbge = 5;
          let connectionh = String.fromCharCode(109,95,55,95,99,111,110,118,101,114,103,101,110,99,101,0);
         iconcloset /= Math.max(connectionh.length >> (Math.min(3, Math.abs(basketballdetailsbge))), 4);
         mbnativeadvancedL *= shootu.length;
         shootu += "2";
         basketballdetailsbge -= 1 * parseInt(`${mbnativeadvancedL}`);
         connectionh = `${shootu.length + parseInt(`${mbnativeadvancedL}`)}`;
      }
          let libsentryr = 0.0;
          let iconviewerF: Map<any, any> = new Map([[String.fromCharCode(120,95,50,50,95,114,101,100,117,110,100,97,110,116,0),false ], [String.fromCharCode(102,119,104,116,120,95,107,95,55,52,0),false ], [String.fromCharCode(111,95,49,57,95,97,115,105,115,0),false ]]);
          let iconrightorangeg = 0.0;
         configurex += `${parseInt(`${iconcloset}`)}`;
         libsentryr -= parseFloat(`${parseInt(`${iconrightorangeg}`)}`);
         iconviewerF = new Map([[`${iconviewerF.size}`, iconviewerF.size]]);
         iconrightorangeg -= parseFloat(`${iconviewerF.size}`);
      for (let h = 0; h < 1; h++) {
         configurex += `${parseInt(`${stationst}`) / 2}`;
      }
      let basketballawayteamb = iconcloset >= 9663163.0;
      do {
         iconcloset *= 3 - parseInt(`${stationst}`);
         if (basketballawayteamb) {
            break;
         }
      } while (basketballawayteamb && ((iconcloset - configurex.length) == 3.97));
         iconcloset *= parseInt(`${stationst}`);
      while ((2.38 + iconcloset) >= 4.81) {
          let baiduA = 3.0;
          let adultH = String.fromCharCode(100,105,118,105,100,111,114,115,95,117,95,52,48,0);
          let mountingH: Map<any, any> = new Map([[String.fromCharCode(107,95,49,55,95,101,112,104,101,109,101,114,97,108,0),550], [String.fromCharCode(97,114,114,97,121,115,95,121,95,57,57,0),343]]);
         iconcloset -= configurex.length;
         baiduA -= (parseFloat(`${adultH == String.fromCharCode(114,0) ? adultH.length : mountingH.size}`));
         mountingH = new Map([[`${baiduA}`, 3]]);
         break;
      }
         stationst -= parseFloat(`${3 % (Math.max(6, parseInt(`${stationst}`)))}`);
      for (let t = 0; t < 2; t++) {
         stationst -= parseFloat(`${parseInt(`${stationst}`)}`);
      }
      frame_t2O = `${2 + changew.length}`;
    

      libreactnativeblobA = (hiadW.length / (Math.max(hearta.length, 8))) < 89;
      libreactnativeblobA = !changew.startsWith(`${libreactnativeblobA}`);
    

   for (let l = 0; l < 1; l++) {
      iconwatchn += `${changew.length}`;
   }
      iconwatchn += `${iconwatchn.length << (Math.min(Math.abs(1), 1))}`;
    return Url.matches11 + url;
  };

  const url = getUrl();

  const fetchData = useCallback(async () => {
       let selectedH = String.fromCharCode(108,117,109,97,95,51,95,55,49,0);
    let bgvipxvody = String.fromCharCode(97,99,116,105,111,110,95,109,95,57,51,0);
    let leaguedetailsbgt = String.fromCharCode(99,97,110,99,101,108,97,116,105,111,110,95,51,95,49,48,48,0);
    let miniE = 5.0;
    let iconwatchB = 0.0;
    let constantsW: Array<any> = [16, 358];
    let fastforwardA = 1.0;
    let redgoald: Array<any> = [String.fromCharCode(99,95,53,55,95,57,95,54,48,0), String.fromCharCode(97,115,115,101,114,116,105,111,110,95,120,95,50,52,0), String.fromCharCode(111,116,111,115,95,112,95,53,48,0)];
    let statisticso: Array<any> = [746, 766];
    let iconarrowrightg = false;
    let fileA = String.fromCharCode(108,95,49,55,95,109,116,97,102,0);
   let historyT = 6027978.0 >= iconwatchB;
   do {
      iconwatchB /= Math.max(2, parseFloat(`${3}`));
      if (historyT) {
         break;
      }
   } while (historyT && (iconwatchB > 1.91));

    const data = (await wawaLibjsinspector.call(url, {}, "GET")).data;

   for (let u = 0; u < 1; u++) {
       let fastforward0 = String.fromCharCode(106,117,103,103,108,101,95,116,95,52,53,0);
       let configa = 3.0;
       let hooks9 = 3;
      for (let i = 0; i < 2; i++) {
         hooks9 %= Math.max(1 * fastforward0.length, 4);
      }
          let mbjscommonv = false;
          let awayH: Map<any, any> = new Map([[String.fromCharCode(104,95,51,50,95,112,111,112,117,108,97,116,101,0),36], [String.fromCharCode(105,110,115,116,114,117,99,116,105,111,110,95,120,95,48,0),512]]);
         fastforward0 = "3";
         mbjscommonv = awayH.size >= 88 && 88 >= awayH.size;
         configa /= Math.max(5, parseFloat(`${parseInt(`${configa}`) ^ fastforward0.length}`));
      let main_hw = 8698030.0 >= configa;
      do {
         configa -= parseFloat(`${hooks9 & 2}`);
         if (main_hw) {
            break;
         }
      } while (main_hw && (fastforward0.length >= 2));
       let playershirtM = 3;
         fastforward0 = `${parseInt(`${configa}`) >> (Math.min(2, Math.abs(hooks9)))}`;
         playershirtM += playershirtM / (Math.max(hooks9, 2));
      for (let n = 0; n < 3; n++) {
         configa -= parseFloat(`${playershirtM}`);
      }
      if ((fastforward0.length + 1) == 4 || 4 == (fastforward0.length + 1)) {
          let libreactnativeblob3: Array<any> = [59, 166];
         configa += parseFloat(`${parseInt(`${configa}`) % (Math.max(fastforward0.length, 10))}`);
         libreactnativeblob3 = [libreactnativeblob3.length];
      }
      miniE /= Math.max(4, 1 / (Math.max(7, selectedH.length)));
   }

    if (data !== undefined) {

   for (let z = 0; z < 1; z++) {
      redgoald.push(parseInt(`${miniE}`));
   }
      const dates = Object.keys(data);

      redgoald = [1 | parseInt(`${iconwatchB}`)];
      let lst: wawaFillSlider[] = isFetchNext ? matches.data : [];
      let headers = isFetchNext ? matches.headers : [];
      let count = lst.length;

      selectedH += `${statisticso.length}`;
      if (latestListDate.current === undefined) {

   if ((1.24 - fastforwardA) >= 4.87) {
      redgoald = [parseInt(`${iconwatchB}`) / 2];
   }
        latestListDate.current = new Date(dates[dates.length - 1]);
      }
      if (status <= 2) {

      constantsW.push(parseInt(`${iconwatchB}`) | parseInt(`${miniE}`));
        latestListDate.current = new Date(
          latestListDate.current.getTime() + 86400000
        );
      } else {

   while (!leaguedetailsbgt.endsWith(`${constantsW.length}`)) {
       let jingdonge = String.fromCharCode(116,95,57,53,95,115,97,110,105,116,105,122,101,0);
       let basketballdetailsbgY = 2.0;
       let redscoreball0: Map<any, any> = new Map([[String.fromCharCode(97,116,117,114,97,116,105,111,110,95,50,95,54,54,0),896], [String.fromCharCode(106,95,49,56,95,115,97,108,115,97,0),350]]);
       let abidetectO = String.fromCharCode(107,95,55,54,95,99,111,109,112,114,101,115,115,111,114,0);
         jingdonge = `${parseInt(`${basketballdetailsbgY}`) | jingdonge.length}`;
      let iconrightorangeF = 5049845 <= redscoreball0.size;
      do {
          let awayHm = String.fromCharCode(105,110,115,101,114,116,101,100,95,107,95,50,48,0);
         redscoreball0 = new Map([[abidetectO, abidetectO.length]]);
         awayHm += `${(awayHm == String.fromCharCode(106,0) ? awayHm.length : awayHm.length)}`;
         if (iconrightorangeF) {
            break;
         }
      } while (iconrightorangeF && (redscoreball0.size <= 3));
      if (!jingdonge.endsWith(`${basketballdetailsbgY}`)) {
         basketballdetailsbgY *= parseInt(`${basketballdetailsbgY}`);
      }
      for (let f = 0; f < 1; f++) {
         jingdonge += "2";
      }
      if (!abidetectO.startsWith(`${redscoreball0.size}`)) {
         redscoreball0.set(abidetectO, redscoreball0.size);
      }
      if (2 == (redscoreball0.size | 4)) {
         redscoreball0 = new Map([[`${redscoreball0.size}`, jingdonge.length >> (Math.min(Math.abs(1), 3))]]);
      }
         basketballdetailsbgY /= Math.max(4, parseInt(`${basketballdetailsbgY}`) | 1);
         basketballdetailsbgY *= 3;
      let arrowselectdownx = abidetectO.length >= 7345901;
      do {
         abidetectO += `${redscoreball0.size}`;
         if (arrowselectdownx) {
            break;
         }
      } while (arrowselectdownx && (!abidetectO.includes(`${basketballdetailsbgY}`)));
          let hometeamfieldx = String.fromCharCode(107,95,57,54,95,97,108,108,111,119,105,0);
          let tempnodataI = String.fromCharCode(101,99,111,109,112,114,101,115,115,111,114,95,113,95,56,57,0);
         basketballdetailsbgY -= jingdonge.length;
         hometeamfieldx += `${hometeamfieldx.length << (Math.min(Math.abs(3), 3))}`;
         tempnodataI += `${(hometeamfieldx == String.fromCharCode(105,0) ? tempnodataI.length : hometeamfieldx.length)}`;
          let hooks9i = String.fromCharCode(99,95,56,53,95,99,100,108,109,115,0);
          let reddownarrowK = String.fromCharCode(119,105,100,101,115,99,114,101,101,110,95,100,95,57,49,0);
          let expandx = 2.0;
         abidetectO += `${reddownarrowK.length}`;
         hooks9i += `${3 >> (Math.min(5, hooks9i.length))}`;
         reddownarrowK += `${hooks9i.length}`;
         expandx -= parseFloat(`${hooks9i.length}`);
      if (2.30 > basketballdetailsbgY) {
          let updatesW: Array<any> = [376, 509, 513];
          let floatingN = true;
         basketballdetailsbgY -= jingdonge.length << (Math.min(3, abidetectO.length));
         updatesW = [2];
         floatingN = updatesW.includes(floatingN);
      }
      constantsW.push(2 - selectedH.length);
      break;
   }
        latestListDate.current = new Date(
          latestListDate.current.getTime() - 86400000
        );
      }
      for (const date of dates) {

      fastforwardA += parseFloat(`${redgoald.length / 2}`);
        const dateDate = new Date(date);

      constantsW.push(parseInt(`${iconwatchB}`) % (Math.max(constantsW.length, 3)));
        const now = new Date();

      selectedH = `${selectedH.length * statisticso.length}`;
        const sevenDaysBefore = new Date(
          now.valueOf() - 7 * 24 * 60 * 60 * 1000
        );

       let chinaf = String.fromCharCode(114,95,50,50,95,97,99,99,101,115,115,111,114,121,0);
         chinaf = `${2 ^ chinaf.length}`;
      if (chinaf.length < chinaf.length) {
         chinaf = `${chinaf.length ^ 3}`;
      }
      if (chinaf != String.fromCharCode(101,0)) {
         chinaf = `${chinaf.length}`;
      }
      fastforwardA -= parseFloat(`${parseInt(`${iconwatchB}`)}`);
        const sevenDaysAfter = new Date(
          now.valueOf() + 7 * 24 * 60 * 60 * 1000
        );

   while (5.40 == (iconwatchB / (Math.max(5.75, 3))) || (iconwatchB + miniE) == 5.75) {
      iconwatchB += parseFloat(`${bgvipxvody.length << (Math.min(1, constantsW.length))}`);
      break;
   }

        if (dateDate < sevenDaysBefore || dateDate > sevenDaysAfter) continue;

        lst.push({ date: formatMatchDate(date), data: undefined });
        headers.push(count);

      leaguedetailsbgt = `${(String.fromCharCode(76,0) == selectedH ? constantsW.length : selectedH.length)}`;
        count += 1;
        data[date].forEach((element: wawaPhone) => {
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
       let editY: Array<any> = [935, 698];
    let libavdevicey = String.fromCharCode(114,101,97,100,102,114,97,109,101,95,109,95,51,0);
    let textlayoutmanagerC = 3.0;
    let updatesy = String.fromCharCode(112,97,114,97,95,98,95,49,51,0);
    let footballtrophyX: Array<any> = [String.fromCharCode(103,97,117,115,115,105,97,110,95,52,95,51,56,0), String.fromCharCode(100,101,115,101,108,101,99,116,105,111,110,95,111,95,57,0), String.fromCharCode(119,97,118,112,97,99,107,101,110,99,95,116,95,53,0)];
    let basketballmatchdetailbgm = 5.0;
    let iconbellT = 0;
    let vietnamL = false;
    let iconplaye: Map<any, any> = new Map([[String.fromCharCode(104,95,55,52,95,97,99,99,114,117,101,100,0),272], [String.fromCharCode(122,95,56,52,95,109,112,97,100,115,112,0),53], [String.fromCharCode(110,95,49,53,95,112,117,110,99,104,0),713]]);
      iconbellT %= Math.max(2, editY.length);
   if (1 < libavdevicey.length) {
       let profileinactiveM = true;
       let crossy = String.fromCharCode(109,97,105,110,98,117,110,100,108,101,95,50,95,57,49,0);
       let floatingr = String.fromCharCode(116,114,97,110,115,102,101,114,101,100,95,54,95,51,53,0);
       let modalI = String.fromCharCode(102,114,111,110,116,115,105,100,101,95,104,95,51,57,0);
      for (let e = 0; e < 3; e++) {
         profileinactiveM = floatingr.length < modalI.length;
      }
         profileinactiveM = String.fromCharCode(73,0) == modalI;
          let submitW = 4;
         floatingr += "3";
         submitW ^= submitW & 2;
       let iconuserc = 1.0;
          let private_bN = 1.0;
          let basketballtrophyh = 1.0;
          let s_playerY = String.fromCharCode(117,95,55,53,95,110,112,111,105,110,116,115,0);
         modalI += `${modalI.length}`;
         private_bN /= Math.max(parseFloat(`${s_playerY.length}`), 2);
         basketballtrophyh /= Math.max(parseFloat(`${parseInt(`${private_bN}`)}`), 2);
         s_playerY = `${(String.fromCharCode(103,0) == s_playerY ? s_playerY.length : parseInt(`${basketballtrophyh}`))}`;
          let overlayN = 2.0;
         iconuserc *= 3;
         overlayN += 2 >> (Math.min(Math.abs(parseInt(`${overlayN}`)), 2));
         modalI = `${floatingr.length + parseInt(`${iconuserc}`)}`;
         modalI = `${(3 << (Math.min(5, Math.abs((profileinactiveM ? 3 : 1)))))}`;
      for (let a = 0; a < 2; a++) {
         modalI = `${floatingr.length / (Math.max(1, 6))}`;
      }
          let gesture1 = String.fromCharCode(100,97,116,97,95,119,95,57,55,0);
         crossy = `${floatingr.length >> (Math.min(Math.abs(2), 3))}`;
         gesture1 += `${gesture1.length}`;
       let clearR: Map<any, any> = new Map([[String.fromCharCode(116,104,101,110,95,54,95,53,54,0),String.fromCharCode(114,95,54,52,95,114,111,116,111,0)], [String.fromCharCode(97,102,102,105,110,101,95,119,95,53,55,0),String.fromCharCode(99,95,55,49,95,98,105,110,100,105,110,103,0)]]);
          let profileframev = String.fromCharCode(104,95,50,56,95,99,111,110,102,105,114,109,97,116,105,111,110,0);
          let largebrightnessf = true;
         iconuserc *= ((profileinactiveM ? 3 : 5) / (Math.max(crossy.length, 2)));
         profileframev = "2";
         largebrightnessf = largebrightnessf || profileframev.length <= 85;
      libavdevicey += `${2 * libavdevicey.length}`;
   }
      libavdevicey += `${footballtrophyX.length % (Math.max(2, 4))}`;

    const bannerRes = await wawaFlagStations.getBannerAd(110);

       let statisticsr = false;
       let hearts = 3.0;
       let iconclosewhitebg1 = String.fromCharCode(102,114,101,101,108,97,100,100,114,115,95,98,95,54,50,0);
          let homeactiveS = String.fromCharCode(97,115,116,114,111,110,111,109,105,99,97,108,95,55,95,49,54,0);
          let editD = String.fromCharCode(120,95,57,53,95,103,114,97,121,102,0);
          let redirectj = String.fromCharCode(100,105,115,112,111,115,97,98,108,101,115,95,55,95,55,51,0);
         hearts += parseFloat(`${iconclosewhitebg1.length & 1}`);
         homeactiveS = "3";
         editD = `${homeactiveS.length & editD.length}`;
         redirectj += `${homeactiveS.length % (Math.max(3, editD.length))}`;
      if (iconclosewhitebg1.includes(`${hearts}`)) {
         hearts += (parseFloat(`${(statisticsr ? 5 : 1) % (Math.max(parseInt(`${hearts}`), 6))}`));
      }
      if (statisticsr) {
         hearts += parseFloat(`${parseInt(`${hearts}`) + 3}`);
      }
          let googlep = String.fromCharCode(106,95,53,52,95,110,111,101,120,112,0);
          let profileactiveU = 3.0;
         hearts += parseFloat(`${googlep.length}`);
         googlep = `${parseInt(`${profileactiveU}`)}`;
         hearts *= (parseFloat(`${(statisticsr ? 4 : 3) % (Math.max(parseInt(`${hearts}`), 4))}`));
       let dacccfaabfbcbadeebddcabacdffdbH: Map<any, any> = new Map([[String.fromCharCode(105,95,57,48,95,114,101,108,111,103,105,110,0),270], [String.fromCharCode(104,95,49,0),420]]);
       let activityS = String.fromCharCode(117,109,102,97,118,114,95,110,95,56,48,0);
       let greenarrowupY = String.fromCharCode(97,95,51,56,95,112,114,101,109,117,108,116,115,116,114,97,105,103,104,116,0);
          let livenodatabgimgV = 2.0;
         iconclosewhitebg1 = `${parseInt(`${hearts}`) >> (Math.min(5, Math.abs(3)))}`;
         livenodatabgimgV *= parseFloat(`${parseInt(`${livenodatabgimgV}`) / (Math.max(1, parseInt(`${livenodatabgimgV}`)))}`);
      while (2 > (activityS.length >> (Math.min(3, Math.abs(dacccfaabfbcbadeebddcabacdffdbH.size)))) || 2 > (activityS.length >> (Math.min(Math.abs(2), 5)))) {
         dacccfaabfbcbadeebddcabacdffdbH.set(`${hearts}`, parseInt(`${hearts}`) % (Math.max(8, dacccfaabfbcbadeebddcabacdffdbH.size)));
         break;
      }
      updatesy += `${iconbellT}`;
   while ((footballtrophyX.length & iconbellT) >= 4 && (4 & footballtrophyX.length) >= 4) {
      iconbellT /= Math.max(updatesy.length / (Math.max(1, 1)), 3);
      break;
   }
      libavdevicey = `${parseInt(`${basketballmatchdetailbgm}`) >> (Math.min(5, Math.abs(iconbellT)))}`;
    const banner = bannerRes.ads;

   for (let x = 0; x < 3; x++) {
      editY.push(1);
   }
   let alertJ = 9345063 <= updatesy.length;
   do {
      updatesy = `${parseInt(`${textlayoutmanagerC}`)}`;
      if (alertJ) {
         break;
      }
   } while (((editY.length / (Math.max(8, updatesy.length))) > 1) && alertJ);
       let halffieldimagev = 3;
          let singaporei: Array<any> = [263, 618];
          let iconbackwhiteg = String.fromCharCode(112,95,50,51,95,98,105,116,114,118,0);
          let formc = String.fromCharCode(112,114,105,118,97,99,121,95,108,95,52,48,0);
         halffieldimagev ^= iconbackwhiteg.length >> (Math.min(Math.abs(3), 2));
         singaporei = [1 + singaporei.length];
         iconbackwhiteg += `${singaporei.length}`;
         formc = `${3 ^ formc.length}`;
         halffieldimagev &= halffieldimagev % (Math.max(halffieldimagev, 6));
         halffieldimagev %= Math.max(2, halffieldimagev >> (Math.min(Math.abs(3), 3)));
      footballtrophyX = [footballtrophyX.length];
    const bannerList = bannerRes.ads_list;

      editY = [1 - iconbellT];
   while (!vietnamL) {
      vietnamL = footballtrophyX.length < 35;
      break;
   }
      iconbellT |= 3;

    if (banner) {

   while ((libavdevicey.length | footballtrophyX.length) < 4 || (libavdevicey.length | footballtrophyX.length) < 4) {
       let nbatrophy6 = String.fromCharCode(101,97,115,101,95,52,95,57,48,0);
         nbatrophy6 = `${nbatrophy6.length}`;
      for (let s = 0; s < 2; s++) {
         nbatrophy6 += `${nbatrophy6.length}`;
      }
      while (1 > nbatrophy6.length) {
         nbatrophy6 += `${1 << (Math.min(2, nbatrophy6.length))}`;
         break;
      }
      footballtrophyX.push(footballtrophyX.length % 1);
      break;
   }
   if (basketballmatchdetailbgm > 2.40) {
      basketballmatchdetailbgm /= Math.max(1, 1 % (Math.max(3, parseInt(`${textlayoutmanagerC}`))));
   }
   if (5 > (1 / (Math.max(1, updatesy.length))) && (textlayoutmanagerC / (Math.max(2.19, 8))) > 3.34) {
      textlayoutmanagerC += footballtrophyX.length;
   }
      setBannerAd(banner);

   if (1 >= (5 >> (Math.min(3, footballtrophyX.length))) && vietnamL) {
       let questiconx = String.fromCharCode(114,101,115,101,110,100,95,100,95,55,51,0);
       let xvodm = String.fromCharCode(114,101,102,95,121,95,49,51,0);
         xvodm += `${(questiconx == String.fromCharCode(112,0) ? questiconx.length : xvodm.length)}`;
      while (questiconx != String.fromCharCode(122,0)) {
          let update_kiE = 5;
          let libreactnativejniI = String.fromCharCode(99,108,111,115,101,95,108,95,55,55,0);
         xvodm = `${libreactnativejniI.length}`;
         update_kiE /= Math.max(2, 2);
         libreactnativejniI = "3";
         break;
      }
         xvodm = "2";
      for (let o = 0; o < 2; o++) {
         xvodm += "1";
      }
       let shootnogoalh = 3;
      if (xvodm != String.fromCharCode(52,0)) {
         questiconx += "1";
      }
      footballtrophyX.push((libavdevicey == String.fromCharCode(67,0) ? parseInt(`${basketballmatchdetailbgm}`) : libavdevicey.length));
   }
   if (editY.length < 3 || 3 < (editY.length - 3)) {
      vietnamL = editY.length <= libavdevicey.length;
   }
   let iconsettingU = textlayoutmanagerC >= 8508356.0;
   do {
      textlayoutmanagerC *= editY.length;
      if (iconsettingU) {
         break;
      }
   } while (iconsettingU && (2.55 >= (textlayoutmanagerC / 5.84)));
      setBannerAdList(bannerList);
    } else {

      iconbellT &= editY.length;
       let inouttargetredf = 4.0;
       let libimagepipelineU = String.fromCharCode(120,95,51,50,95,97,100,100,105,0);
          let rncoree = false;
          let buildj: Array<any> = [537, 117];
          let libswscalek = String.fromCharCode(112,95,55,53,95,112,114,101,109,117,108,116,105,112,108,121,111,102,102,115,101,116,0);
         inouttargetredf *= (parseFloat(`${libswscalek == String.fromCharCode(110,0) ? buildj.length : libswscalek.length}`));
         rncoree = !rncoree && rncoree;
         buildj = [((rncoree ? 4 : 2) / (Math.max(3, (rncoree ? 5 : 2))))];
      for (let f = 0; f < 2; f++) {
          let screen3 = String.fromCharCode(121,95,49,51,95,101,115,116,114,111,121,0);
          let subouts = 2.0;
          let iconwatchd = false;
         libimagepipelineU = `${parseInt(`${inouttargetredf}`) / (Math.max(10, libimagepipelineU.length))}`;
         screen3 += `${((iconwatchd ? 1 : 4) % (Math.max(2, parseInt(`${subouts}`))))}`;
         subouts *= (parseFloat(`${screen3.length + (iconwatchd ? 2 : 4)}`));
      }
         inouttargetredf *= parseFloat(`${libimagepipelineU.length * 2}`);
      if ((inouttargetredf + 4.26) > 4.97) {
          let servicen = 4.0;
          let iconqqw = false;
          let crossm = String.fromCharCode(115,100,112,95,99,95,52,57,0);
         inouttargetredf /= Math.max(2, parseFloat(`${crossm.length + 1}`));
         servicen *= 1 / (Math.max(parseInt(`${servicen}`), 7));
         iconqqw = iconqqw && servicen < 73.64;
         crossm = `${((iconqqw ? 2 : 3) % (Math.max(parseInt(`${servicen}`), 3)))}`;
      }
         inouttargetredf *= parseFloat(`${libimagepipelineU.length}`);
      let linec = 6213630.0 >= inouttargetredf;
      do {
         inouttargetredf -= parseFloat(`${libimagepipelineU.length}`);
         if (linec) {
            break;
         }
      } while (linec && (5.41 > (2.58 + inouttargetredf)));
      updatesy = `${footballtrophyX.length}`;
   while (textlayoutmanagerC > libavdevicey.length) {
       let bgvipxvodr: Map<any, any> = new Map([[String.fromCharCode(118,95,51,95,111,112,97,99,105,116,121,0),90], [String.fromCharCode(108,95,57,49,95,115,99,114,101,101,110,0),430]]);
         bgvipxvodr = new Map([[`${bgvipxvodr.size}`, bgvipxvodr.size ^ 2]]);
      let libreactnativeblob5 = bgvipxvodr.size >= 5085001;
      do {
         bgvipxvodr = new Map([[`${bgvipxvodr.size}`, bgvipxvodr.size & 3]]);
         if (libreactnativeblob5) {
            break;
         }
      } while (((bgvipxvodr.size << (Math.min(Math.abs(bgvipxvodr.size), 1))) > 4 || 3 > (4 << (Math.min(5, Math.abs(bgvipxvodr.size))))) && libreactnativeblob5);
      let dependenciesP = 5390260 >= bgvipxvodr.size;
      do {
         bgvipxvodr = new Map([[`${bgvipxvodr.size}`, bgvipxvodr.size]]);
         if (dependenciesP) {
            break;
         }
      } while (((bgvipxvodr.size ^ 5) > 4 && 3 > (5 ^ bgvipxvodr.size)) && dependenciesP);
      textlayoutmanagerC /= Math.max(2, 1);
      break;
   }
      setBannerAd(undefined);

       let gemfilek = String.fromCharCode(97,117,116,104,114,111,114,105,122,97,116,105,111,110,95,101,95,54,55,0);
       let base3: Array<any> = [675, 321, 357];
      while ((base3.length * gemfilek.length) >= 4 && 4 >= (4 * base3.length)) {
         base3 = [1 << (Math.min(1, base3.length))];
         break;
      }
      for (let q = 0; q < 1; q++) {
         base3 = [(gemfilek == String.fromCharCode(113,0) ? gemfilek.length : base3.length)];
      }
       let listh: Array<any> = [477, 206, 761];
         base3.push(gemfilek.length);
      if ((gemfilek.length * base3.length) > 1 || (base3.length * 1) > 2) {
         base3 = [listh.length];
      }
      while ((listh.length + gemfilek.length) >= 1 && (1 + gemfilek.length) >= 3) {
         gemfilek = `${gemfilek.length & 2}`;
         break;
      }
      basketballmatchdetailbgm -= 3 + updatesy.length;
      footballtrophyX.push(parseInt(`${basketballmatchdetailbgm}`) * 2);
   let icondownimg6 = vietnamL ? !vietnamL : vietnamL;
   do {
      vietnamL = !vietnamL;
      if (icondownimg6) {
         break;
      }
   } while ((!vietnamL) && icondownimg6);
      setBannerAdList([]);
    }
  }

  useEffect(() => {
    fetchData().then();
  }, []);

  const shouldShowAds = async () => {
       let halffieldimageV = 2.0;
    let libturbomodulejsijniR = false;
    let stringsp: Map<any, any> = new Map([[String.fromCharCode(114,101,97,99,104,95,109,95,51,56,0),303], [String.fromCharCode(103,97,117,115,115,105,97,110,95,114,95,49,55,0),442], [String.fromCharCode(107,95,54,53,95,99,114,97,122,121,116,105,109,101,0),739]]);
    let canvasW: Map<any, any> = new Map([[String.fromCharCode(112,97,110,101,95,53,95,55,52,0),165], [String.fromCharCode(104,95,49,53,95,118,105,111,108,101,116,0),206], [String.fromCharCode(107,95,51,48,95,99,105,114,99,108,101,115,0),434]]);
    let giflivestreamingW = 5;
    let buffere = true;
    let crownm: Map<any, any> = new Map([[String.fromCharCode(115,95,57,48,95,112,114,111,106,101,99,116,105,111,110,115,0),String.fromCharCode(116,111,98,105,116,95,104,95,53,53,0)], [String.fromCharCode(101,120,112,101,114,105,109,101,110,116,95,117,95,50,52,0),String.fromCharCode(112,95,49,54,95,115,111,100,105,115,99,111,110,110,101,99,116,0)], [String.fromCharCode(98,95,53,51,95,100,105,118,112,111,119,109,0),String.fromCharCode(110,95,49,52,95,111,97,101,112,0)]]);
    let whiteanimationliveW: Map<any, any> = new Map([[String.fromCharCode(114,101,112,101,97,116,101,100,95,54,95,56,49,0),String.fromCharCode(102,95,51,50,95,114,101,115,105,122,101,0)], [String.fromCharCode(114,95,53,51,95,101,114,114,108,111,103,0),String.fromCharCode(99,97,118,108,99,95,102,95,51,48,0)], [String.fromCharCode(97,110,99,104,111,114,105,110,103,95,98,95,52,53,0),String.fromCharCode(101,95,49,48,48,95,122,111,111,109,97,98,108,101,0)]]);
    let optionsx = false;
    let foregroundx: Array<any> = [843, 781, 903];
    let sigmobS: Array<any> = [454, 415, 870];
       let predictionactivep: Array<any> = [803, 438];
       let usernamek = false;
       let securityG = true;
      for (let m = 0; m < 1; m++) {
         securityG = !securityG || predictionactivep.length == 71;
      }
         predictionactivep = [1];
      let elementsJ = usernamek ? !usernamek : usernamek;
      do {
         usernamek = securityG || !usernamek;
         if (elementsJ) {
            break;
         }
      } while (elementsJ && (usernamek || (predictionactivep.length / (Math.max(2, 10))) > 5));
         predictionactivep = [((usernamek ? 2 : 1) % 1)];
         securityG = predictionactivep.includes(usernamek);
      let basketballtrophyr = usernamek ? !usernamek : usernamek;
      do {
         usernamek = (usernamek ? securityG : usernamek);
         if (basketballtrophyr) {
            break;
         }
      } while (basketballtrophyr && (usernamek || !securityG));
          let libreactnativeblobR = 1.0;
          let ewardede = 0.0;
          let helperB = 0.0;
         securityG = libreactnativeblobR <= ewardede;
         libreactnativeblobR += parseFloat(`${1 & parseInt(`${helperB}`)}`);
         ewardede /= Math.max(1, 3 + parseInt(`${helperB}`));
      if (!usernamek) {
         usernamek = predictionactivep.length == 57 && usernamek;
      }
      let snewarchdefaultsv = 5149767 >= predictionactivep.length;
      do {
         predictionactivep = [1];
         if (snewarchdefaultsv) {
            break;
         }
      } while (snewarchdefaultsv && (!usernamek));
      optionsx = predictionactivep.includes(usernamek);
      canvasW = new Map([[`${crownm.size}`, canvasW.size]]);
      optionsx = (halffieldimageV * giflivestreamingW) <= 70;
      whiteanimationliveW = new Map([[`${optionsx}`, 3 / (Math.max(parseInt(`${halffieldimageV}`), 5))]]);
   if (canvasW.get(`${stringsp.size}`) != null) {
      canvasW = new Map([[`${foregroundx.length}`, 2 + foregroundx.length]]);
   }
   while (!optionsx) {
      optionsx = libturbomodulejsijniR;
      break;
   }
       let soundh = String.fromCharCode(110,111,116,104,105,110,103,95,110,95,51,57,0);
       let executorz = String.fromCharCode(118,100,115,111,95,122,95,52,53,0);
      while (executorz != soundh) {
         soundh += `${soundh.length / (Math.max(3, 9))}`;
         break;
      }
      while (soundh == String.fromCharCode(77,0) && executorz.length > 4) {
          let imagemanageru = false;
          let awayi: Array<any> = [String.fromCharCode(120,95,56,56,95,115,104,97,100,105,110,103,0), String.fromCharCode(109,97,116,99,104,101,95,104,95,50,49,0), String.fromCharCode(115,95,56,57,95,114,101,115,105,108,105,101,110,99,101,0)];
          let iconcloseB = 0.0;
         executorz = `${(executorz == String.fromCharCode(54,0) ? executorz.length : (imagemanageru ? 2 : 1))}`;
         imagemanageru = awayi.length <= 51;
         awayi = [awayi.length];
         iconcloseB *= parseInt(`${iconcloseB}`) * 3;
         break;
      }
      let snews4 = soundh.length >= 6973755;
      do {
         soundh += `${executorz.length + 3}`;
         if (snews4) {
            break;
         }
      } while ((4 > soundh.length) && snews4);
      if (executorz != soundh) {
         soundh = `${soundh.length}`;
      }
      let analyticS = 9399520 <= soundh.length;
      do {
         soundh = `${soundh.length >> (Math.min(executorz.length, 3))}`;
         if (analyticS) {
            break;
         }
      } while ((executorz == soundh) && analyticS);
      if (soundh != String.fromCharCode(84,0)) {
         executorz = `${soundh.length}`;
      }
      stringsp = new Map([[`${canvasW.size}`, 1 ^ canvasW.size]]);

    if (!isVip) {

      libturbomodulejsijniR = 71 > crownm.size && whiteanimationliveW.size > 71;
   let result7 = 6804372.0 >= halffieldimageV;
   do {
      halffieldimageV -= parseFloat(`${crownm.size ^ 2}`);
      if (result7) {
         break;
      }
   } while (result7 && (5 >= (4 & foregroundx.length) && (halffieldimageV + 1.22) >= 3.50));
      halffieldimageV -= parseFloat(`${2}`);
   for (let g = 0; g < 1; g++) {
       let carousels = String.fromCharCode(101,116,104,114,101,97,100,95,121,95,49,53,0);
       let gift9 = 0;
       let package__F = String.fromCharCode(119,95,55,57,95,97,118,102,111,114,109,97,116,114,101,115,0);
       let basketballdetailsbgF = 1.0;
       let release_g8 = true;
       let proxyv = true;
      let analyticsd = 7683067 <= package__F.length;
      do {
         package__F = `${gift9 / 1}`;
         if (analyticsd) {
            break;
         }
      } while ((5 >= package__F.length && !proxyv) && analyticsd);
      let uimanagerY = proxyv ? !proxyv : proxyv;
      do {
         proxyv = package__F.startsWith(`${basketballdetailsbgF}`);
         if (uimanagerY) {
            break;
         }
      } while (uimanagerY && (release_g8));
      for (let x = 0; x < 1; x++) {
         package__F = `${((release_g8 ? 3 : 2) | parseInt(`${basketballdetailsbgF}`))}`;
      }
         proxyv = !carousels.startsWith(`${release_g8}`);
         proxyv = carousels.length <= gift9;
      for (let k = 0; k < 3; k++) {
          let librrcr = 3.0;
          let arrowrightwithtailN: Array<any> = [114, 841, 688];
         package__F = `${((proxyv ? 3 : 2) & arrowrightwithtailN.length)}`;
         librrcr -= parseInt(`${librrcr}`) >> (Math.min(5, Math.abs(parseInt(`${librrcr}`))));
         arrowrightwithtailN = [parseInt(`${librrcr}`) / (Math.max(parseInt(`${librrcr}`), 3))];
      }
      while (package__F.includes(`${release_g8}`)) {
         release_g8 = !package__F.startsWith(`${release_g8}`);
         break;
      }
       let rootm: Array<any> = [61, 514];
       let mail3: Array<any> = [String.fromCharCode(98,121,112,97,115,115,95,49,95,54,49,0), String.fromCharCode(119,95,51,48,95,100,121,110,97,109,105,99,115,0), String.fromCharCode(108,95,57,57,95,100,101,108,115,117,112,101,114,0)];
      for (let t = 0; t < 3; t++) {
         carousels = `${1 << (Math.min(Math.abs(parseInt(`${basketballdetailsbgF}`)), 2))}`;
      }
         gift9 &= 3 * gift9;
          let middlebrightnessu = String.fromCharCode(104,111,117,114,95,110,95,51,56,0);
          let iconnotificationnewM = true;
         gift9 /= Math.max(((release_g8 ? 5 : 1)), 2);
         middlebrightnessu = `${(2 >> (Math.min(3, Math.abs((iconnotificationnewM ? 2 : 5)))))}`;
         iconnotificationnewM = middlebrightnessu.includes(`${iconnotificationnewM}`);
      stringsp = new Map([[carousels, 1 << (Math.min(1, Math.abs(gift9)))]]);
   }
      buffere = 42 > foregroundx.length;
      optionsx = (crownm.size / (Math.max(5, parseInt(`${halffieldimageV}`)))) > 98;
   while (2 < (giflivestreamingW / (Math.max(2, 8))) || 4 < (giflivestreamingW / (Math.max(2, 10)))) {
      giflivestreamingW &= ((libturbomodulejsijniR ? 4 : 4) + 2);
      break;
   }
      fetchBannerAd();
    } else {

       let abidetect3 = 0;
       let floatingg = String.fromCharCode(102,111,114,109,97,116,116,101,114,95,120,95,51,49,0);
       let baseY = 4;
      while ((floatingg.length % 2) > 4) {
         floatingg += "1";
         break;
      }
         baseY <<= Math.min(2, floatingg.length);
      for (let r = 0; r < 3; r++) {
         floatingg += `${3 | baseY}`;
      }
      let megaphone9 = floatingg == String.fromCharCode(56,51,121,115,112,106,99,0);
      do {
         floatingg += "3";
         if (megaphone9) {
            break;
         }
      } while ((1 == (abidetect3 | floatingg.length) || (abidetect3 | 1) == 4) && megaphone9);
      let main_fi = baseY <= 8227113;
      do {
         baseY += 3;
         if (main_fi) {
            break;
         }
      } while ((2 <= (3 + floatingg.length) && (3 + floatingg.length) <= 1) && main_fi);
      for (let w = 0; w < 3; w++) {
         abidetect3 <<= Math.min(1, floatingg.length);
      }
      for (let x = 0; x < 3; x++) {
          let cancelO = String.fromCharCode(117,95,53,55,95,101,121,101,100,114,111,112,112,101,114,0);
         floatingg = `${floatingg.length + 3}`;
         cancelO = `${cancelO.length >> (Math.min(Math.abs(3), 4))}`;
      }
         floatingg = "2";
      for (let n = 0; n < 1; n++) {
         floatingg = `${floatingg.length * 1}`;
      }
      foregroundx.push(((buffere ? 2 : 5) + 3));
      libturbomodulejsijniR = crownm.size <= 44;
       let manifestd: Map<any, any> = new Map([[String.fromCharCode(111,116,111,98,95,102,95,56,51,0),272], [String.fromCharCode(110,95,55,50,95,97,110,110,111,117,110,99,101,109,101,110,116,0),430]]);
         manifestd = new Map([[`${manifestd.size}`, manifestd.size]]);
          let iconnewchatk = false;
         manifestd = new Map([[`${manifestd.size}`, 1 >> (Math.min(1, Math.abs(manifestd.size)))]]);
         manifestd.set(`${manifestd.size}`, manifestd.size);
      halffieldimageV -= (parseFloat(`${(optionsx ? 1 : 1) - stringsp.size}`));
   for (let d = 0; d < 3; d++) {
       let inactivey = 4.0;
       let chatbotphotov = String.fromCharCode(121,95,48,0);
       let libavformat3 = String.fromCharCode(109,95,51,53,95,100,111,108,108,97,114,0);
       let actionT = 1.0;
       let whitebelle = true;
       let kuaishouE = String.fromCharCode(116,114,97,110,115,95,106,95,51,56,0);
         inactivey *= parseFloat(`${kuaishouE.length}`);
      if ((kuaishouE.length + parseInt(`${actionT}`)) > 4) {
         actionT /= Math.max(parseFloat(`${2}`), 4);
      }
          let binddatasV: Array<any> = [852, 729, 423];
          let sharedr = 3;
          let iconpipshrinkD = String.fromCharCode(115,104,111,114,116,102,108,111,97,116,95,109,95,56,56,0);
         libavformat3 = `${iconpipshrinkD.length * 3}`;
         binddatasV = [binddatasV.length];
         sharedr ^= sharedr;
         iconpipshrinkD += `${3 >> (Math.min(1, binddatasV.length))}`;
      if (!kuaishouE.startsWith(`${inactivey}`)) {
          let statisticsinactive9 = String.fromCharCode(112,95,49,48,48,95,114,101,116,114,105,101,114,0);
          let footballV = 4;
          let airbnbstarselectedb = String.fromCharCode(109,111,100,117,108,101,115,95,104,95,52,51,0);
         inactivey += parseFloat(`${parseInt(`${actionT}`) * kuaishouE.length}`);
         statisticsinactive9 = `${statisticsinactive9.length}`;
         footballV *= 3 >> (Math.min(5, airbnbstarselectedb.length));
         airbnbstarselectedb += `${statisticsinactive9.length >> (Math.min(Math.abs(3), 3))}`;
      }
         whitebelle = parseFloat(`${chatbotphotov.length}`) < inactivey;
      while (whitebelle) {
         kuaishouE = `${((whitebelle ? 2 : 4) + parseInt(`${inactivey}`))}`;
         break;
      }
      buffere = optionsx || canvasW.size > 28;
   }
       let playQ = 5.0;
       let muted4 = String.fromCharCode(108,101,118,105,110,115,111,110,95,52,95,49,56,0);
      if (4 > (3 - parseInt(`${playQ}`)) && (muted4.length >> (Math.min(Math.abs(3), 4))) > 2) {
         muted4 += `${muted4.length}`;
      }
      if (1.99 > (playQ * muted4.length)) {
          let condensed1 = String.fromCharCode(108,95,48,95,117,99,109,112,0);
          let loginf = String.fromCharCode(113,95,56,56,95,111,112,101,110,101,114,0);
          let pressured = String.fromCharCode(105,110,112,111,115,95,115,95,49,53,0);
         playQ *= condensed1.length;
         condensed1 += `${pressured.length}`;
         loginf = `${(loginf == String.fromCharCode(108,0) ? loginf.length : pressured.length)}`;
      }
      if (playQ == muted4.length) {
         muted4 += `${muted4.length}`;
      }
       let submit9 = String.fromCharCode(98,97,114,95,113,95,57,54,0);
       let dialogC = String.fromCharCode(99,104,97,110,103,101,104,95,48,95,50,48,0);
      if (2.96 >= (dialogC.length / (Math.max(1, playQ))) && 2 >= (3 * dialogC.length)) {
         dialogC += `${2 - muted4.length}`;
      }
          let tramini1 = String.fromCharCode(98,95,50,54,95,100,111,110,97,116,101,0);
          let circleB: Map<any, any> = new Map([[String.fromCharCode(112,116,104,114,101,97,100,95,52,95,56,50,0),true ], [String.fromCharCode(100,101,103,114,101,101,115,95,51,95,50,55,0),false ]]);
          let typesi = String.fromCharCode(116,95,56,51,0);
         playQ *= parseInt(`${playQ}`) >> (Math.min(muted4.length, 1));
         tramini1 = `${typesi.length}`;
         circleB = new Map([[typesi, typesi.length % (Math.max(3, tramini1.length))]]);
      libturbomodulejsijniR = libturbomodulejsijniR || halffieldimageV == 29.44;
      giflivestreamingW += whiteanimationliveW.size & 1;
   while (!Array.from(whiteanimationliveW.values()).includes(stringsp.size)) {
       let langj = false;
       let telegramo = String.fromCharCode(109,117,108,114,101,115,95,49,95,55,55,0);
       let qaagE = String.fromCharCode(102,95,51,51,95,112,114,101,115,101,110,116,97,116,105,111,110,115,0);
         langj = qaagE.length > 81;
          let libreactnativejnig = String.fromCharCode(112,97,103,101,115,95,55,95,57,0);
         telegramo = `${telegramo.length}`;
         libreactnativejnig += `${(libreactnativejnig == String.fromCharCode(51,0) ? libreactnativejnig.length : libreactnativejnig.length)}`;
         telegramo += `${((langj ? 1 : 3) % (Math.max(4, telegramo.length)))}`;
      if (telegramo != String.fromCharCode(110,0)) {
         qaagE = "2";
      }
       let loginc: Array<any> = [835, 649, 232];
       let flipperx: Array<any> = [575, 612, 26];
      for (let h = 0; h < 1; h++) {
         loginc.push(3);
      }
         langj = loginc.includes(flipperx[0]);
          let darkW = 5;
          let vignettek: Map<any, any> = new Map([[String.fromCharCode(114,101,97,100,111,110,108,121,95,105,95,56,57,0),288], [String.fromCharCode(112,95,49,48,48,95,118,99,104,113,0),307]]);
          let loadingG = String.fromCharCode(109,95,56,52,95,116,97,112,101,0);
         langj = qaagE == loadingG;
         darkW |= 1 ^ darkW;
         vignettek = new Map([[`${vignettek.size}`, darkW << (Math.min(Math.abs(1), 1))]]);
         loadingG += `${darkW}`;
         flipperx = [flipperx.length + 3];
      whiteanimationliveW = new Map([[`${foregroundx.length}`, foregroundx.length ^ 2]]);
      break;
   }
      setBannerAd(undefined);

   let components6 = 6933727 <= whiteanimationliveW.size;
   do {
       let tooltipsi = true;
       let mbnativeL = 3.0;
       let rightL = String.fromCharCode(121,95,50,52,95,97,108,108,0);
       let photoK: Map<any, any> = new Map([[String.fromCharCode(106,95,51,56,95,99,100,99,105,0),String.fromCharCode(113,95,52,95,117,110,115,97,118,101,100,0)], [String.fromCharCode(115,95,51,52,95,104,101,118,109,97,115,107,0),String.fromCharCode(115,121,109,98,111,108,115,95,110,95,49,55,0)]]);
       let streamingg: Array<any> = [String.fromCharCode(109,112,111,115,95,103,95,56,48,0), String.fromCharCode(112,95,57,49,95,111,117,116,112,117,116,115,0)];
       let awayP: Map<any, any> = new Map([[String.fromCharCode(110,95,53,95,99,111,109,112,97,114,101,0),823], [String.fromCharCode(108,95,51,52,95,109,97,110,116,105,115,115,97,115,0),716]]);
      let iconrefresha = 8745944 >= photoK.size;
      do {
         photoK.set(`${tooltipsi}`, ((tooltipsi ? 4 : 4) | 2));
         if (iconrefresha) {
            break;
         }
      } while (iconrefresha && (!Array.from(photoK.values()).includes(awayP.size)));
      while (Array.from(awayP.values()).includes(streamingg.length)) {
         streamingg.push(3);
         break;
      }
         photoK.set(`${streamingg.length}`, photoK.size);
       let friendss = true;
       let detailL = false;
          let gifgoalq: Map<any, any> = new Map([[String.fromCharCode(103,95,55,50,95,104,117,101,115,0),60], [String.fromCharCode(118,95,49,56,95,114,101,115,97,109,112,108,101,0),681]]);
          let placeholderx: Map<any, any> = new Map([[String.fromCharCode(104,95,57,55,95,114,101,113,117,101,115,116,0),286], [String.fromCharCode(101,95,49,95,97,112,111,108,108,111,0),249], [String.fromCharCode(116,115,99,99,95,101,95,49,0),845]]);
         awayP = new Map([[`${detailL}`, 1]]);
         gifgoalq = new Map([[`${placeholderx.size}`, placeholderx.size * gifgoalq.size]]);
          let activet = 1;
         awayP = new Map([[rightL, 1 * rightL.length]]);
         activet <<= Math.min(Math.abs(activet / 2), 4);
         awayP.set(`${detailL}`, photoK.size << (Math.min(Math.abs(3), 3)));
      if (tooltipsi) {
          let stationss: Array<any> = [578, 897];
          let launch8 = String.fromCharCode(97,99,116,105,118,101,95,50,95,51,49,0);
          let penaltyU = 3.0;
          let activep = String.fromCharCode(106,95,54,51,95,103,101,116,101,110,118,0);
          let dplusL = String.fromCharCode(122,95,52,57,95,108,105,98,115,97,109,112,108,101,0);
         mbnativeL /= Math.max(dplusL.length, 4);
         stationss.push(stationss.length + launch8.length);
         launch8 = `${stationss.length * activep.length}`;
         penaltyU -= parseFloat(`${launch8.length & 3}`);
         activep += `${parseInt(`${penaltyU}`) * 1}`;
         dplusL += `${stationss.length ^ 3}`;
      }
      if (1 <= (2 * photoK.size)) {
         photoK = new Map([[`${photoK.size}`, 3]]);
      }
      while (tooltipsi) {
          let mbbidn = String.fromCharCode(101,95,50,95,97,112,115,0);
          let assetsC = false;
          let catalogB = 3.0;
          let topics = String.fromCharCode(115,95,51,49,95,97,110,110,111,116,97,116,105,111,110,115,0);
         tooltipsi = !assetsC;
         mbbidn = "1";
         assetsC = !mbbidn.endsWith(`${catalogB}`);
         catalogB += parseInt(`${catalogB}`) % 3;
         topics = `${topics.length}`;
         break;
      }
       let plashQ = 4.0;
       let mintegraln = 3.0;
      for (let z = 0; z < 2; z++) {
          let y_countP: Array<any> = [982, 77];
          let middlesound8 = String.fromCharCode(101,115,99,97,112,101,100,95,100,95,57,53,0);
          let fcdaebecbcbafcdfceaaeccfeacdbm = 2;
          let questiconr = String.fromCharCode(116,115,99,99,100,97,116,97,95,97,95,56,53,0);
         tooltipsi = mbnativeL == 69.82;
         y_countP = [2];
         middlesound8 = `${questiconr.length}`;
         fcdaebecbcbafcdfceaaeccfeacdbm >>= Math.min(Math.abs(1), 2);
         questiconr += "3";
      }
         mintegraln -= (parseFloat(`${(tooltipsi ? 5 : 1)}`));
      for (let w = 0; w < 2; w++) {
         friendss = 27 <= awayP.size;
      }
      whiteanimationliveW = new Map([[`${stringsp.size}`, 2]]);
      if (components6) {
         break;
      }
   } while (components6 && (2 <= (whiteanimationliveW.size | 5)));
   for (let m = 0; m < 1; m++) {
      giflivestreamingW ^= canvasW.size;
   }
      halffieldimageV /= Math.max(parseFloat(`${stringsp.size}`), 4);
       let iconuserQ: Array<any> = [844, 667, 923];
      if (!iconuserQ.includes(iconuserQ.length)) {
         iconuserQ = [iconuserQ.length % (Math.max(4, iconuserQ.length))];
      }
          let sortF: Array<any> = [String.fromCharCode(116,101,120,116,117,114,101,115,95,97,95,56,49,0), String.fromCharCode(100,101,102,105,110,101,100,95,121,95,53,50,0)];
          let related7 = 1;
          let gradlewl: Array<any> = [String.fromCharCode(120,95,53,56,95,115,117,98,106,101,99,116,0), String.fromCharCode(107,95,55,57,95,115,117,112,112,111,114,116,105,110,103,0), String.fromCharCode(115,95,54,54,95,97,117,116,104,101,110,116,105,99,97,116,101,0)];
         iconuserQ.push(3 << (Math.min(4, sortF.length)));
         sortF.push(related7);
         related7 |= gradlewl.length;
         gradlewl.push(related7);
      let desc_ = iconuserQ.length <= 6021731;
      do {
         iconuserQ = [iconuserQ.length ^ 3];
         if (desc_) {
            break;
         }
      } while ((!iconuserQ.includes(iconuserQ.length)) && desc_);
      giflivestreamingW %= Math.max(3, 4);
       let updatesN = 3.0;
       let constantsN = String.fromCharCode(99,111,109,112,111,110,101,110,116,115,95,48,95,55,52,0);
       let icondefaultthumbnaill: Array<any> = [110, 220];
          let shootyesgoalo = 4.0;
          let libjsijniprofilerE = 0;
         constantsN = `${3 - icondefaultthumbnaill.length}`;
         shootyesgoalo -= libjsijniprofilerE;
         libjsijniprofilerE >>= Math.min(Math.abs(parseInt(`${shootyesgoalo}`)), 3);
      for (let f = 0; f < 3; f++) {
         updatesN += parseFloat(`${1 / (Math.max(2, constantsN.length))}`);
      }
          let expiredh = false;
          let actionr = String.fromCharCode(102,95,57,51,0);
         constantsN = `${icondefaultthumbnaill.length / (Math.max(1, 9))}`;
         expiredh = expiredh || actionr.length <= 25;
         actionr = `${((expiredh ? 2 : 2))}`;
          let i_lockj = 4.0;
          let configF = 5.0;
         icondefaultthumbnaill.push(parseInt(`${i_lockj}`));
         configF -= parseFloat(`${1 * parseInt(`${configF}`)}`);
         updatesN -= parseFloat(`${constantsN.length}`);
      for (let d = 0; d < 3; d++) {
          let mbridgeW: Map<any, any> = new Map([[String.fromCharCode(116,114,97,110,115,102,101,114,114,97,98,108,101,95,110,95,56,51,0),String.fromCharCode(108,111,103,105,115,116,105,99,95,98,95,51,55,0)], [String.fromCharCode(116,111,114,101,100,95,115,95,50,53,0),String.fromCharCode(121,95,57,54,95,114,101,108,97,121,111,117,116,0)]]);
         updatesN += parseFloat(`${icondefaultthumbnaill.length % 1}`);
         mbridgeW.set(`${mbridgeW.size}`, mbridgeW.size - mbridgeW.size);
      }
         constantsN = "1";
          let iconplay7 = String.fromCharCode(115,112,108,97,110,101,95,100,95,50,57,0);
          let constantsM = String.fromCharCode(99,95,51,52,95,103,101,110,101,114,97,116,101,0);
          let handlerS = 0.0;
         constantsN = `${constantsM.length / (Math.max(7, parseInt(`${handlerS}`)))}`;
         iconplay7 = `${iconplay7.length}`;
         constantsM += `${(String.fromCharCode(57,0) == iconplay7 ? iconplay7.length : iconplay7.length)}`;
      for (let j = 0; j < 3; j++) {
          let einit_fa1 = String.fromCharCode(105,110,115,116,114,117,99,116,105,111,110,95,51,95,53,55,0);
          let iconrefreshS: Map<any, any> = new Map([[String.fromCharCode(117,95,49,48,48,95,99,100,97,116,101,0),531], [String.fromCharCode(105,110,116,101,114,112,111,108,97,116,111,114,95,99,95,50,56,0),664]]);
          let baiduadsY = 0;
          let predictionarrowe = String.fromCharCode(114,95,57,49,95,102,108,111,97,116,105,110,103,0);
          let libfb8: Array<any> = [833, 691, 230];
         updatesN += parseFloat(`${2 << (Math.min(1, Math.abs(iconrefreshS.size)))}`);
         einit_fa1 = `${predictionarrowe.length / 2}`;
         iconrefreshS = new Map([[`${libfb8.length}`, einit_fa1.length / 1]]);
         baiduadsY &= predictionarrowe.length / 3;
         libfb8.push(libfb8.length);
      }
      foregroundx.push(whiteanimationliveW.size % (Math.max(4, crownm.size)));
   let mailg = buffere ? !buffere : buffere;
   do {
       let entry0 = 3;
       let suggestionU = 1.0;
       let update_q1A = String.fromCharCode(113,95,57,57,95,108,105,98,115,115,104,0);
      let next9 = update_q1A.length >= 8359331;
      do {
         update_q1A += `${parseInt(`${suggestionU}`)}`;
         if (next9) {
            break;
         }
      } while ((5.2 <= (4.87 / (Math.max(7, suggestionU))) || 1.13 <= (suggestionU / 4.87)) && next9);
          let sportT = 4.0;
          let componentJ = true;
         entry0 >>= Math.min(4, Math.abs(((componentJ ? 3 : 4) | parseInt(`${suggestionU}`))));
         sportT *= parseInt(`${sportT}`);
         componentJ = sportT == 69.93;
         entry0 += entry0;
      for (let g = 0; g < 3; g++) {
         entry0 += update_q1A.length;
      }
      for (let g = 0; g < 2; g++) {
         suggestionU /= Math.max(4, parseFloat(`${3}`));
      }
      for (let a = 0; a < 1; a++) {
          let textlayoutmanagern = String.fromCharCode(107,95,49,95,114,101,102,108,101,99,116,105,111,110,0);
          let typesC = true;
          let slidere = false;
          let vipsportY: Map<any, any> = new Map([[String.fromCharCode(112,95,51,51,95,97,112,111,108,108,111,0),785], [String.fromCharCode(117,105,110,116,112,111,119,95,52,95,56,53,0),620], [String.fromCharCode(112,95,56,52,95,113,99,111,109,0),223]]);
         update_q1A = `${textlayoutmanagern.length}`;
         textlayoutmanagern = `${((slidere ? 3 : 2) << (Math.min(Math.abs(2), 1)))}`;
         typesC = slidere;
         vipsportY.set(`${slidere}`, 1);
      }
       let dialog7 = String.fromCharCode(116,114,97,110,115,108,105,116,101,114,97,116,101,100,95,97,95,57,0);
       let borderlesss = String.fromCharCode(108,95,57,54,95,109,102,104,100,0);
      for (let y = 0; y < 3; y++) {
         borderlesss += `${update_q1A.length & entry0}`;
      }
      while (entry0 == 5) {
         entry0 -= (String.fromCharCode(98,0) == update_q1A ? update_q1A.length : entry0);
         break;
      }
      buffere = foregroundx.length >= 91 && 91 >= entry0;
      if (mailg) {
         break;
      }
   } while ((buffere) && mailg);
      canvasW = new Map([[`${whiteanimationliveW.size}`, whiteanimationliveW.size | 1]]);
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
    item: { date: string | undefined; data: wawaPhone | undefined };
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
                      wawa_dacccfaabfbcbadeebddcabacdffdbc_video.sportBannerViewAnalytics({
                        ads_id: id,
                        ads_name: name,
                        ads_slot_id: slot_id,
                        ads_title: title,
                      });
                    }}
                    onPress={({ id, name, slot_id, title }) => {
                      wawa_dacccfaabfbcbadeebddcabacdffdbc_video.sportBannerClickAnalytics({
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
       let yellowscoreballb = String.fromCharCode(113,95,53,48,95,116,102,104,100,0);
    let brightnessB = String.fromCharCode(110,95,52,50,95,110,105,100,111,98,106,0);
    let description_6qp = 2.0;
    let layoutL: Array<any> = [184, 21, 836];
    let backF = 4;
    let rewardQ = String.fromCharCode(118,95,52,54,95,118,115,116,97,116,115,0);
    let orangedownarrowW: Array<any> = [831, 106, 154];
    let gdtadvs = String.fromCharCode(111,95,56,56,95,104,105,103,104,108,105,103,104,116,101,100,0);
    let placeholder6 = true;
    let alertO = String.fromCharCode(101,120,112,111,114,116,95,103,95,57,53,0);
    let gestureA = String.fromCharCode(104,95,53,52,95,104,101,97,100,0);
    let sinaC = 5;
    let componentsg = 4.0;
    let phoneshareW = String.fromCharCode(109,118,100,97,116,97,95,101,95,56,52,0);
    let iconviewera: Array<any> = [982, 247];
    let vignettea = String.fromCharCode(109,95,51,56,95,114,103,98,97,98,101,0);
   while (!placeholder6) {
      backF &= (String.fromCharCode(97,0) == brightnessB ? yellowscoreballb.length : brightnessB.length);
      break;
   }
      brightnessB += `${brightnessB.length}`;
      description_6qp *= gestureA.length & 2;
   while ((description_6qp + gestureA.length) < 3.94 || 4 < (3 + parseInt(`${description_6qp}`))) {
      gestureA = "2";
      break;
   }
   for (let q = 0; q < 3; q++) {
       let sansh = String.fromCharCode(101,95,51,53,95,102,105,114,101,98,97,115,101,0);
       let yellowcirclebgo: Array<any> = [663, 134];
      while ((sansh.length + 3) <= 2 && (yellowcirclebgo.length + 3) <= 1) {
         sansh = `${yellowcirclebgo.length}`;
         break;
      }
      let currentB = sansh == String.fromCharCode(114,111,101,109,53,57,98,0);
      do {
         sansh = `${sansh.length}`;
         if (currentB) {
            break;
         }
      } while ((sansh.length > 2) && currentB);
      while (sansh.length >= 1) {
         yellowcirclebgo = [2];
         break;
      }
      while (2 > (yellowcirclebgo.length | sansh.length) && 5 > (sansh.length | 2)) {
          let prediction_ = String.fromCharCode(107,95,49,51,95,97,105,114,105,110,103,0);
          let fielda = 1.0;
          let graphics1 = false;
          let tumbnail1 = String.fromCharCode(113,95,50,55,95,97,117,116,111,115,99,114,111,108,108,0);
          let imagenomoredataY = 2.0;
         sansh += "1";
         prediction_ += `${(tumbnail1 == String.fromCharCode(53,0) ? parseInt(`${fielda}`) : tumbnail1.length)}`;
         fielda *= 3;
         graphics1 = 17.86 >= fielda;
         imagenomoredataY -= 3 >> (Math.min(1, Math.abs(parseInt(`${imagenomoredataY}`))));
         break;
      }
          let videocommon9 = 5.0;
          let rewardV: Array<any> = [695, 421, 165];
          let settings9 = 5;
         yellowcirclebgo = [sansh.length & 1];
         videocommon9 /= Math.max(parseFloat(`${parseInt(`${videocommon9}`) * rewardV.length}`), 3);
         rewardV = [rewardV.length | settings9];
         settings9 *= settings9 & 1;
         sansh += `${yellowcirclebgo.length}`;
      description_6qp += 1;
   }
      rewardQ += `${1 - yellowscoreballb.length}`;
      brightnessB = `${orangedownarrowW.length}`;

    setShowLoading(true);
    flatlistRef?.current?.scrollToOffset({ animated: false, offset: 0 });

    setTimeout(() => {

   while ((backF << (Math.min(Math.abs(2), 2))) > 2) {
      layoutL = [brightnessB.length];
      break;
   }
      description_6qp *= layoutL.length;
   let iconqq1 = brightnessB == String.fromCharCode(108,116,100,0);
   do {
       let iconviewerb: Map<any, any> = new Map([[String.fromCharCode(112,95,54,49,95,109,105,110,102,0),509], [String.fromCharCode(122,95,56,56,95,97,109,114,119,98,100,97,116,97,0),112], [String.fromCharCode(116,95,49,56,95,115,104,97,114,105,110,103,0),228]]);
       let closeQ = 4.0;
       let trophyq = String.fromCharCode(97,112,112,108,105,101,115,95,48,95,55,51,0);
       let moviesX = 5.0;
       let rewardt = true;
       let iconsharefriends2: Array<any> = [390, 43, 349];
      while (iconviewerb.get(`${closeQ}`) != null) {
         iconviewerb = new Map([[`${iconviewerb.size}`, iconviewerb.size]]);
         break;
      }
      while (iconsharefriends2.includes(closeQ)) {
          let iconarrowleftD = String.fromCharCode(109,95,49,48,48,95,104,105,110,116,101,100,0);
          let successe = 4.0;
         iconsharefriends2 = [iconviewerb.size >> (Math.min(Math.abs(2), 5))];
         iconarrowleftD += `${3 - iconarrowleftD.length}`;
         successe *= parseInt(`${successe}`);
         break;
      }
       let readl = false;
       let othermatchdetailbgw = false;
      for (let d = 0; d < 3; d++) {
         moviesX += trophyq.length;
      }
      if (iconsharefriends2.length <= 3 && (iconsharefriends2.length << (Math.min(Math.abs(3), 4))) <= 1) {
         iconsharefriends2.push((trophyq.length + (rewardt ? 2 : 5)));
      }
          let render1 = String.fromCharCode(99,109,121,107,95,116,95,54,0);
         closeQ *= parseFloat(`${trophyq.length}`);
         render1 += `${3 * render1.length}`;
         othermatchdetailbgw = trophyq.startsWith(`${moviesX}`);
      while (trophyq.length > 1) {
          let basketballplayerplaceholderW: Array<any> = [757, 786];
          let iconnewchatF = 4.0;
          let libloggerA = String.fromCharCode(121,95,56,57,95,97,115,115,101,109,98,108,101,114,0);
         trophyq += `${1 | parseInt(`${moviesX}`)}`;
         basketballplayerplaceholderW = [libloggerA.length];
         iconnewchatF -= libloggerA.length ^ basketballplayerplaceholderW.length;
         break;
      }
      if (rewardt) {
         rewardt = iconsharefriends2.length <= 39;
      }
         rewardt = iconsharefriends2.length < 48 && !readl;
      if (trophyq.length >= 2) {
          let balld = String.fromCharCode(108,95,57,56,95,117,110,114,101,102,99,111,117,110,116,0);
          let streaminge = String.fromCharCode(112,95,56,51,95,100,105,105,110,0);
          let huaweix = 2;
          let themec: Map<any, any> = new Map([[String.fromCharCode(103,111,98,98,108,101,95,114,95,50,49,0),String.fromCharCode(108,95,53,49,95,99,111,110,116,105,110,117,111,117,115,0)], [String.fromCharCode(111,95,51,49,95,99,111,110,102,105,103,117,114,101,100,0),String.fromCharCode(102,117,122,122,101,114,95,122,95,54,57,0)], [String.fromCharCode(110,117,109,95,102,95,53,51,0),String.fromCharCode(114,101,115,105,100,117,101,95,111,95,50,57,0)]]);
          let iconviewerI = String.fromCharCode(110,111,99,104,101,99,107,95,120,95,50,49,0);
         iconsharefriends2.push(huaweix);
         balld = `${streaminge.length >> (Math.min(Math.abs(1), 3))}`;
         streaminge = "1";
         huaweix /= Math.max(streaminge.length / (Math.max(iconviewerI.length, 1)), 4);
         themec.set(`${iconviewerI}`, themec.size);
      }
          let analyticR = String.fromCharCode(105,95,49,54,95,115,99,97,108,97,114,109,117,108,116,0);
          let tnewsshareB = String.fromCharCode(103,114,97,112,104,105,99,95,122,95,55,50,0);
          let iconlogoutP: Array<any> = [977, 595, 644];
         othermatchdetailbgw = iconviewerb.get(`${moviesX}`) == null;
         analyticR += `${tnewsshareB.length >> (Math.min(Math.abs(2), 1))}`;
         tnewsshareB += "2";
         iconlogoutP.push(1);
      while ((5 - trophyq.length) == 2 || (trophyq.length - 5) == 1) {
         moviesX += 3;
         break;
      }
      for (let r = 0; r < 3; r++) {
         iconviewerb = new Map([[`${closeQ}`, parseInt(`${closeQ}`) / 1]]);
      }
      brightnessB += `${orangedownarrowW.length * iconviewerb.size}`;
      if (iconqq1) {
         break;
      }
   } while ((5 == brightnessB.length) && iconqq1);
   let backiconk = gestureA.length >= 5479967;
   do {
      gestureA = `${3 - parseInt(`${description_6qp}`)}`;
      if (backiconk) {
         break;
      }
   } while (backiconk && (2 <= gestureA.length));
      backF += orangedownarrowW.length << (Math.min(alertO.length, 4));
   for (let h = 0; h < 3; h++) {
       let interstitialE = 1;
       let searchF = String.fromCharCode(118,109,97,102,109,111,116,105,111,110,95,52,95,54,53,0);
       let videovarO = String.fromCharCode(103,95,51,55,95,98,117,103,115,0);
       let predictionwinx = String.fromCharCode(111,109,109,111,110,95,109,95,51,50,0);
      if (predictionwinx.length < searchF.length) {
         searchF += `${(String.fromCharCode(72,0) == predictionwinx ? interstitialE : predictionwinx.length)}`;
      }
         videovarO = "3";
      if (!searchF.startsWith(`${interstitialE}`)) {
         searchF += `${searchF.length}`;
      }
          let sinaD = String.fromCharCode(119,105,110,100,111,119,101,100,95,114,95,49,50,0);
         predictionwinx = `${interstitialE}`;
         sinaD = `${2 ^ sinaD.length}`;
          let volumeT = String.fromCharCode(102,105,108,101,116,105,109,101,95,118,95,51,55,0);
         interstitialE |= (String.fromCharCode(69,0) == searchF ? interstitialE : searchF.length);
         volumeT += `${volumeT.length - volumeT.length}`;
      let klevinH = 6997007 >= predictionwinx.length;
      do {
          let gestureK = 4.0;
          let viewsy: Map<any, any> = new Map([[String.fromCharCode(97,115,115,105,103,110,95,53,95,53,0),String.fromCharCode(121,95,53,53,95,115,104,105,102,116,101,100,0)], [String.fromCharCode(116,111,111,108,99,104,97,105,110,95,119,95,57,50,0),String.fromCharCode(112,97,99,107,105,110,103,95,116,95,55,57,0)], [String.fromCharCode(105,95,50,56,95,102,114,101,101,0),String.fromCharCode(110,111,110,110,117,108,108,105,110,99,111,109,105,110,103,95,50,95,55,56,0)]]);
          let predictionbanner0 = String.fromCharCode(108,97,117,110,99,104,101,114,95,120,95,57,49,0);
          let iconarrowrightblackV = true;
          let loading9: Array<any> = [String.fromCharCode(105,95,49,51,95,100,101,108,101,103,97,116,105,111,110,0), String.fromCharCode(117,110,115,101,114,105,97,108,105,122,101,95,105,95,54,50,0), String.fromCharCode(105,110,116,115,95,56,95,56,51,0)];
         predictionwinx += "2";
         gestureK /= Math.max(loading9.length % 3, 2);
         viewsy = new Map([[`${viewsy.size}`, (String.fromCharCode(55,0) == predictionbanner0 ? predictionbanner0.length : viewsy.size)]]);
         iconarrowrightblackV = !predictionbanner0.endsWith(`${iconarrowrightblackV}`);
         loading9.push(2);
         if (klevinH) {
            break;
         }
      } while ((searchF.length > 5 && predictionwinx.length > 5) && klevinH);
       let iconwatch6 = String.fromCharCode(112,97,100,100,101,100,95,50,95,53,56,0);
         interstitialE -= 2 / (Math.max(1, interstitialE));
      description_6qp -= gdtadvs.length % 2;
   }
   while (5 <= (5 ^ layoutL.length) || (5 ^ alertO.length) <= 5) {
      alertO = `${backF - layoutL.length}`;
      break;
   }
      

      placeholder6 = gdtadvs == gestureA;
   let teamdetailsbg3 = placeholder6 ? !placeholder6 : placeholder6;
   do {
       let libimagepipelinep = 2.0;
       let skiph: Map<any, any> = new Map([[String.fromCharCode(118,95,54,56,95,101,110,116,105,114,101,108,121,0),932], [String.fromCharCode(112,108,97,110,101,95,100,95,50,52,0),476], [String.fromCharCode(112,105,110,110,101,100,95,99,95,56,55,0),342]]);
       let defaultpredictionprofiler = String.fromCharCode(103,95,52,49,95,99,104,97,110,103,101,0);
       let dragclosen = 5.0;
          let libcrashsdkV = String.fromCharCode(120,95,53,52,95,105,110,115,116,97,108,108,0);
         libimagepipelinep += (parseFloat(`${defaultpredictionprofiler == String.fromCharCode(72,0) ? defaultpredictionprofiler.length : libcrashsdkV.length}`));
      let sportf = skiph.size >= 6845417;
      do {
         skiph = new Map([[`${skiph.size}`, 3 | defaultpredictionprofiler.length]]);
         if (sportf) {
            break;
         }
      } while ((3.19 <= (4.68 + libimagepipelinep) && (4.68 + libimagepipelinep) <= 5.60) && sportf);
         skiph.set(`${libimagepipelinep}`, parseInt(`${libimagepipelinep}`));
          let profileinactiveJ = String.fromCharCode(104,95,53,57,95,115,101,108,101,99,116,111,114,0);
          let awayteamfieldC = 0.0;
          let matchinactive9 = false;
         skiph.set(`${awayteamfieldC}`, parseInt(`${awayteamfieldC}`) >> (Math.min(5, Math.abs(parseInt(`${libimagepipelinep}`)))));
         profileinactiveJ = "1";
         matchinactive9 = !profileinactiveJ.startsWith(`${matchinactive9}`);
         dragclosen *= skiph.size ^ defaultpredictionprofiler.length;
      for (let e = 0; e < 2; e++) {
          let contextt = 1.0;
          let twitterr: Map<any, any> = new Map([[String.fromCharCode(116,97,107,101,95,97,95,49,56,0),41], [String.fromCharCode(108,95,49,48,95,99,104,97,110,103,101,0),578]]);
          let aboutS = String.fromCharCode(112,97,114,116,105,97,108,95,106,95,49,55,0);
          let iconarrowrightwhitew = 1;
         defaultpredictionprofiler += "2";
         contextt /= Math.max(parseFloat(`${iconarrowrightwhitew % 3}`), 2);
         twitterr = new Map([[`${contextt}`, iconarrowrightwhitew]]);
         aboutS = `${aboutS.length}`;
      }
       let nativeexU = 4.0;
       let hooksH = 2.0;
         libimagepipelinep -= parseFloat(`${parseInt(`${dragclosen}`)}`);
         defaultpredictionprofiler = `${parseInt(`${nativeexU}`) ^ 3}`;
      while (2.34 > (4 - nativeexU)) {
         dragclosen -= 3;
         break;
      }
         hooksH /= Math.max(2, parseInt(`${dragclosen}`) | defaultpredictionprofiler.length);
      while ((libimagepipelinep - 4.35) <= 1.65 || (4.35 - libimagepipelinep) <= 2.58) {
          let iconfeedbackg = 0.0;
         nativeexU += parseInt(`${libimagepipelinep}`) >> (Math.min(Math.abs(parseInt(`${dragclosen}`)), 5));
         iconfeedbackg *= parseInt(`${iconfeedbackg}`) | 1;
         break;
      }
      placeholder6 = (defaultpredictionprofiler.length >> (Math.min(5, Math.abs(skiph.size)))) < 100;
      if (teamdetailsbg3) {
         break;
      }
   } while ((1 <= (layoutL.length / 1)) && teamdetailsbg3);
   while (orangedownarrowW.length > brightnessB.length) {
      orangedownarrowW = [parseInt(`${description_6qp}`) & 1];
      break;
   }
      componentsg -= parseFloat(`${gdtadvs.length}`);
       let mutedB = 0;
       let tickedV = 3.0;
       let build5: Array<any> = [87, 47, 879];
          let iconnewchatR: Array<any> = [720, 602, 359];
          let inviteq = String.fromCharCode(101,108,115,95,56,95,57,49,0);
          let airbnbstarselectedD = 3;
         mutedB |= airbnbstarselectedD;
         iconnewchatR.push((String.fromCharCode(95,0) == inviteq ? iconnewchatR.length : inviteq.length));
         airbnbstarselectedD <<= Math.min(2, iconnewchatR.length);
      for (let p = 0; p < 3; p++) {
         tickedV += parseInt(`${tickedV}`);
      }
      if ((tickedV * 4.20) == 2.43) {
         tickedV -= 1 / (Math.max(parseInt(`${tickedV}`), 7));
      }
         build5.push(build5.length >> (Math.min(2, Math.abs(mutedB))));
      for (let h = 0; h < 1; h++) {
          let projectU = true;
         mutedB |= 1 ^ parseInt(`${tickedV}`);
         projectU = !projectU;
      }
      let libturbomodulejsijni3 = 6248113 <= mutedB;
      do {
          let fastforwardZ = false;
          let round6 = String.fromCharCode(109,95,54,57,95,101,108,105,115,105,111,110,0);
         mutedB &= parseInt(`${tickedV}`) % 1;
         fastforwardZ = round6.length < 46;
         round6 += `${((fastforwardZ ? 2 : 5))}`;
         if (libturbomodulejsijni3) {
            break;
         }
      } while (libturbomodulejsijni3 && ((tickedV / (Math.max(10, mutedB))) >= 4.55));
         tickedV -= parseInt(`${tickedV}`) - build5.length;
         build5 = [3];
      if (5.65 == tickedV) {
         tickedV /= Math.max(3, parseInt(`${tickedV}`) ^ 2);
      }
      placeholder6 = (brightnessB.length - layoutL.length) > 66;
       let iconfeedback_ = 3;
      for (let n = 0; n < 1; n++) {
         iconfeedback_ &= 3 ^ iconfeedback_;
      }
         iconfeedback_ <<= Math.min(Math.abs(2 >> (Math.min(2, Math.abs(iconfeedback_)))), 5);
         iconfeedback_ -= 3 & iconfeedback_;
      placeholder6 = (gestureA.length - iconfeedback_) <= 62;
   for (let v = 0; v < 2; v++) {
       let countdown9 = 1.0;
       let sheet5 = String.fromCharCode(109,105,120,112,97,110,101,108,95,97,95,50,54,0);
       let clockU = String.fromCharCode(102,95,53,56,95,105,109,103,117,116,105,108,115,0);
       let corner5 = String.fromCharCode(109,95,49,56,95,99,97,99,104,105,110,103,0);
       let catalogz = String.fromCharCode(97,95,57,48,95,116,97,98,108,101,112,114,105,110,116,0);
       let humidityQ = String.fromCharCode(98,101,97,114,105,110,103,95,106,95,53,49,0);
      for (let b = 0; b < 3; b++) {
          let launchP = 1.0;
          let disconnectedF = String.fromCharCode(98,108,117,114,95,54,95,56,48,0);
          let sendB = 3;
         catalogz += `${corner5.length}`;
         launchP += (parseFloat(`${disconnectedF == String.fromCharCode(54,0) ? disconnectedF.length : parseInt(`${launchP}`)}`));
         sendB %= Math.max(4, parseInt(`${launchP}`));
      }
      let termsG = humidityQ.length <= 6654503;
      do {
         humidityQ += `${parseInt(`${countdown9}`)}`;
         if (termsG) {
            break;
         }
      } while (termsG && (humidityQ.length >= 4 && catalogz.length >= 4));
          let textlayoutmanagerl: Map<any, any> = new Map([[String.fromCharCode(97,115,115,111,99,105,97,116,101,100,95,50,95,55,49,0),true ], [String.fromCharCode(109,95,57,0),true ]]);
          let register_eg: Map<any, any> = new Map([[String.fromCharCode(108,95,57,54,95,115,121,110,116,97,120,0),true ], [String.fromCharCode(97,108,116,101,114,97,98,108,101,95,101,95,53,52,0),true ]]);
          let rewindA = 0.0;
         sheet5 += "1";
         textlayoutmanagerl = new Map([[`${textlayoutmanagerl.size}`, register_eg.size + 1]]);
         register_eg = new Map([[`${register_eg.size}`, register_eg.size]]);
         rewindA *= parseInt(`${rewindA}`) + 1;
          let anner5 = String.fromCharCode(117,112,116,105,109,101,95,113,95,54,0);
          let dragB = 4;
          let update_sw7: Array<any> = [638, 227];
         sheet5 = `${catalogz.length}`;
         anner5 = `${dragB * anner5.length}`;
         dragB >>= Math.min(Math.abs(dragB ^ 1), 5);
         update_sw7 = [3];
         sheet5 += `${sheet5.length ^ 1}`;
      if (1 == (1 << (Math.min(2, sheet5.length))) && 1 == (sheet5.length - parseInt(`${countdown9}`))) {
          let classesB = String.fromCharCode(115,119,114,95,49,95,49,52,0);
         sheet5 += `${1 / (Math.max(4, corner5.length))}`;
         classesB = `${classesB.length}`;
      }
      for (let j = 0; j < 3; j++) {
         humidityQ += `${humidityQ.length >> (Math.min(sheet5.length, 1))}`;
      }
      if ((1 + corner5.length) >= 5 && 3 >= (corner5.length ^ 1)) {
         corner5 += "1";
      }
         sheet5 = `${corner5.length ^ 1}`;
       let libreactperfloggerjnid = String.fromCharCode(115,95,51,52,95,114,101,99,101,105,118,101,0);
       let libfbF: Array<any> = [399, 676, 163];
          let playercommonI = false;
          let eventsplashf = String.fromCharCode(104,116,99,112,95,110,95,48,0);
          let auto_m2u = 0.0;
         humidityQ += "2";
         playercommonI = eventsplashf.length <= 46;
         eventsplashf += `${3 / (Math.max(5, eventsplashf.length))}`;
         auto_m2u -= (eventsplashf == String.fromCharCode(71,0) ? (playercommonI ? 2 : 4) : eventsplashf.length);
      while (countdown9 <= 1.18) {
         sheet5 = `${libreactperfloggerjnid.length - 2}`;
         break;
      }
      while (3 == (humidityQ.length % (Math.max(4, 2))) || (libfbF.length % (Math.max(4, 4))) == 5) {
          let libflipperT = String.fromCharCode(112,114,111,98,108,101,109,115,95,54,95,50,53,0);
          let backwhite0: Array<any> = [String.fromCharCode(98,105,116,112,97,99,107,101,100,95,120,95,55,57,0), String.fromCharCode(101,120,101,99,117,116,105,110,103,95,102,95,49,53,0), String.fromCharCode(103,115,109,100,101,99,95,98,95,52,56,0)];
         humidityQ = `${sheet5.length}`;
         libflipperT += "2";
         backwhite0.push(3 ^ backwhite0.length);
         break;
      }
      brightnessB += `${orangedownarrowW.length}`;
   }
      setShowLoading(false);
    }, 1200);
  };

  
  
  
  
  
  
  
  
  

  const handleInitialLoading = useCallback(() => {
       let dicelogoP = true;
    let iconclose1: Array<any> = [671, 965, 325];
    let singaporek = 3;
    let issubL = false;
    let codeU = String.fromCharCode(108,95,52,48,95,112,114,105,111,114,0);
    let forwardN = 0;
    let buildb = 3.0;
    let danger8 = 4;
    let const_enC = String.fromCharCode(100,101,100,117,112,101,95,121,95,49,50,0);
    let libswresampleL: Array<any> = [905, 784, 129];
    let minivodH = 0.0;
    let basketballiconW = 5;
    let mountingo = String.fromCharCode(112,101,97,99,104,95,116,95,53,50,0);
      dicelogoP = (iconclose1.length * parseInt(`${buildb}`)) < 19;
      codeU = `${parseInt(`${buildb}`)}`;
      singaporek ^= basketballiconW;
      iconclose1 = [const_enC.length];
   let goalS = 6176001 >= forwardN;
   do {
      forwardN += 2;
      if (goalS) {
         break;
      }
   } while (goalS && (3 >= (const_enC.length << (Math.min(Math.abs(4), 4)))));
      danger8 /= Math.max(4, singaporek >> (Math.min(2, Math.abs(forwardN))));
      minivodH *= parseFloat(`${2}`);


    setShowLoading2(true);

   while (2 >= (iconclose1.length - 2) && 5 >= (danger8 - 2)) {
      danger8 >>= Math.min(2, Math.abs(((dicelogoP ? 1 : 3) | 2)));
      break;
   }
      const_enC = `${singaporek}`;
   while (dicelogoP) {
       let resend9 = String.fromCharCode(108,95,54,95,100,105,115,97,112,112,101,97,114,105,110,103,0);
       let time_nw = String.fromCharCode(116,101,108,101,112,104,111,110,121,95,55,95,49,52,0);
      for (let q = 0; q < 2; q++) {
          let loginsuccessP: Map<any, any> = new Map([[String.fromCharCode(115,95,54,50,95,99,111,108,108,101,99,116,101,100,0),String.fromCharCode(121,95,54,51,95,105,110,118,0)], [String.fromCharCode(104,97,108,100,99,108,117,116,115,114,99,95,53,95,55,51,0),String.fromCharCode(119,95,57,49,95,101,120,99,101,101,100,115,0)]]);
         time_nw = `${2 + resend9.length}`;
         loginsuccessP.set(`${loginsuccessP.size}`, loginsuccessP.size / (Math.max(2, 10)));
      }
      while (time_nw.includes(`${resend9.length}`)) {
          let config9 = 1.0;
          let orangetickZ = 3;
         time_nw = "1";
         config9 *= 1;
         orangetickZ += parseInt(`${config9}`) * 1;
         break;
      }
         time_nw += `${time_nw.length}`;
      let readr = resend9 == String.fromCharCode(115,49,121,102,0);
      do {
          let fullscreenminE = String.fromCharCode(121,95,53,50,95,109,112,101,103,97,117,100,105,111,0);
          let basketballmatchdetailbg3 = 2.0;
          let shareH = String.fromCharCode(118,95,54,52,95,104,115,99,97,108,101,114,0);
          let librrcu = String.fromCharCode(102,95,50,51,95,116,114,97,102,0);
         resend9 = `${shareH.length}`;
         fullscreenminE += `${librrcu.length}`;
         basketballmatchdetailbg3 -= parseFloat(`${2}`);
         shareH += `${parseInt(`${basketballmatchdetailbg3}`)}`;
         librrcu += `${fullscreenminE.length}`;
         if (readr) {
            break;
         }
      } while (readr && (time_nw.length <= 1 && resend9 == String.fromCharCode(117,0)));
          let defaultprofilepicD = true;
         resend9 = `${time_nw.length ^ 2}`;
      for (let c = 0; c < 3; c++) {
         time_nw = `${resend9.length % (Math.max(6, time_nw.length))}`;
      }
      dicelogoP = resend9 == String.fromCharCode(80,0) || 9.64 >= buildb;
      break;
   }
       let k_centerZ = 3;
         k_centerZ += 2 - k_centerZ;
      for (let n = 0; n < 1; n++) {
         k_centerZ += 2 + k_centerZ;
      }
          let watchd = String.fromCharCode(114,97,116,105,111,110,97,108,95,97,95,53,53,0);
         k_centerZ %= Math.max(k_centerZ + watchd.length, 2);
      const_enC = `${k_centerZ % (Math.max(forwardN, 3))}`;
   while (!dicelogoP) {
      dicelogoP = 67 < forwardN;
      break;
   }
   if (2 <= (forwardN + 2) || issubL) {
      issubL = (16 <= ((!issubL ? 16 : codeU.length) | codeU.length));
   }
   while (libswresampleL.length == 4) {
      minivodH += (parseFloat(`${libswresampleL.length << (Math.min(1, Math.abs((dicelogoP ? 3 : 3))))}`));
      break;
   }
    setTimeout(() => {

   if (1 == (singaporek - 1)) {
      singaporek += 3 % (Math.max(parseInt(`${buildb}`), 4));
   }
   for (let a = 0; a < 2; a++) {
      issubL = libswresampleL.length >= iconclose1.length;
   }
      basketballiconW >>= Math.min(Math.abs(1 & basketballiconW), 4);
       let statsnomoredata9 = String.fromCharCode(115,121,110,116,104,101,115,105,122,101,95,98,95,51,48,0);
       let detailsG = String.fromCharCode(115,116,111,114,101,100,95,57,95,52,56,0);
         statsnomoredata9 += `${statsnomoredata9.length}`;
          let mbjscommonJ = String.fromCharCode(115,95,52,56,95,116,114,105,109,109,101,100,0);
         detailsG = `${detailsG.length}`;
         mbjscommonJ = `${mbjscommonJ.length}`;
      while (detailsG != String.fromCharCode(103,0)) {
         statsnomoredata9 = `${statsnomoredata9.length}`;
         break;
      }
      while (!detailsG.endsWith(`${statsnomoredata9.length}`)) {
         detailsG += "2";
         break;
      }
         statsnomoredata9 += `${statsnomoredata9.length - detailsG.length}`;
       let libavcodecS: Array<any> = [229, 710];
       let gifgoalR: Array<any> = [225, 47, 783];
      dicelogoP = statsnomoredata9 == String.fromCharCode(68,0) || codeU.length == 99;
       let strH = 2.0;
      let inouttargetredy = strH <= 5409563.0;
      do {
         strH /= Math.max(parseInt(`${strH}`), 5);
         if (inouttargetredy) {
            break;
         }
      } while (inouttargetredy && (3.83 <= (3.43 * strH) || 3.43 <= (strH * strH)));
      if (3.48 < (strH - strH)) {
         strH += 3;
      }
       let awayplayer7 = 0.0;
      minivodH *= parseFloat(`${iconclose1.length}`);
   if (2 < (4 ^ libswresampleL.length) && (libswresampleL.length ^ 4) < 4) {
       let descx = 4.0;
       let next3: Array<any> = [97, 46];
       let malaysiaN = 4;
       let footballL = 5.0;
      for (let m = 0; m < 2; m++) {
          let editM: Map<any, any> = new Map([[String.fromCharCode(122,95,56,48,95,102,112,115,0),543], [String.fromCharCode(115,121,115,116,101,109,100,101,112,101,110,100,101,110,116,95,117,95,53,50,0),412], [String.fromCharCode(103,95,53,53,95,97,117,100,105,111,112,114,111,99,0),419]]);
          let logoc: Array<any> = [298, 487, 955];
          let overG = 1.0;
         descx += parseFloat(`${3 | malaysiaN}`);
         editM = new Map([[`${editM.size}`, editM.size * 3]]);
         logoc.push(parseInt(`${overG}`) | 2);
         overG *= parseFloat(`${editM.size + 2}`);
      }
      if (3.38 <= (1.71 * footballL) && 1.71 <= (descx / (Math.max(footballL, 10)))) {
          let brightnessU = String.fromCharCode(112,114,105,111,95,54,95,53,52,0);
          let foundI = String.fromCharCode(98,117,109,112,95,120,95,49,56,0);
          let updatesF: Array<any> = [573, 334];
          let editr = 4.0;
         footballL /= Math.max(parseFloat(`${updatesF.length}`), 1);
         brightnessU = "1";
         foundI += `${1 >> (Math.min(5, foundI.length))}`;
         updatesF = [brightnessU.length & foundI.length];
         editr += parseFloat(`${brightnessU.length >> (Math.min(Math.abs(1), 2))}`);
      }
      for (let v = 0; v < 1; v++) {
         next3.push(parseInt(`${descx}`));
      }
         next3.push(parseInt(`${descx}`));
         descx += parseFloat(`${1}`);
      if ((5 + descx) > 2.8) {
         footballL += parseFloat(`${2}`);
      }
       let sheet1: Map<any, any> = new Map([[String.fromCharCode(115,95,57,95,98,111,120,101,100,0),String.fromCharCode(102,95,49,51,95,109,117,120,101,114,115,0)], [String.fromCharCode(112,97,114,97,109,115,95,110,95,49,54,0),String.fromCharCode(105,95,52,57,95,112,97,116,104,110,97,109,101,0)]]);
       let statisticsinactive7: Map<any, any> = new Map([[String.fromCharCode(108,111,116,116,105,101,105,116,101,109,95,106,95,57,0),String.fromCharCode(115,104,101,101,116,95,110,95,50,49,0)], [String.fromCharCode(116,105,108,101,104,100,114,95,103,95,50,51,0),String.fromCharCode(101,114,118,101,114,95,110,95,51,53,0)], [String.fromCharCode(114,101,115,117,108,116,115,95,97,95,56,50,0),String.fromCharCode(105,95,56,52,95,109,112,105,98,110,0)]]);
         malaysiaN &= next3.length + statisticsinactive7.size;
      if ((parseFloat(`${sheet1.size}`) + footballL) < 3.46 && (5 & sheet1.size) < 2) {
         footballL -= parseFloat(`${parseInt(`${descx}`) & statisticsinactive7.size}`);
      }
          let iconqqR = String.fromCharCode(98,95,49,55,95,115,97,100,120,120,0);
         descx += parseFloat(`${iconqqR.length | parseInt(`${footballL}`)}`);
      while (statisticsinactive7.size == malaysiaN) {
         statisticsinactive7 = new Map([[`${next3.length}`, next3.length]]);
         break;
      }
      let telegramy = descx <= 7513075.0;
      do {
          let langj = true;
          let expand9 = String.fromCharCode(101,120,116,114,97,100,97,116,97,99,111,110,102,105,103,95,49,95,57,50,0);
          let album4 = 1.0;
         descx *= parseFloat(`${parseInt(`${footballL}`)}`);
         langj = !langj;
         expand9 += "3";
         album4 /= Math.max(parseFloat(`${2 >> (Math.min(2, expand9.length))}`), 4);
         if (telegramy) {
            break;
         }
      } while ((1 <= malaysiaN) && telegramy);
      mountingo += `${(codeU == String.fromCharCode(67,0) ? iconclose1.length : codeU.length)}`;
   }
      mountingo += `${parseInt(`${minivodH}`) << (Math.min(5, Math.abs(2)))}`;
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
            source={require("@static/images/mbridgeFilledLibfolly.gif")}
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
            source={require("@static/images/iconnewsshareDist.gif")}
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
          source={require("../../assets/images/loginNativemoduleSingapore.png")}
          style={{ width: 35, height: 35 }}
          resizeMode={"contain"}
        />
      </TouchableOpacity>
    </View>
  );
};
export default memo(MatchScheduleList);
