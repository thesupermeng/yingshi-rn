import React, { useState, useMemo, memo, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  FlatList,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { yys_Libreact } from "@type/yys_libzeus";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import SortAscIcon from "@static/images/mbsplashNterstitial.svg";
import SortDescIcon from "@static/images/expandAnalytics.svg";
import BottomSheet from "../bottomSheet/yys_proxy";
import { yys_CountdownSubmit } from "@redux/reducers/yys_full";

interface yys_ConfigureUimanager {
  onConfirm: any;
  onCancel: any;
  episodes?: yys_Libreact;
  activeEpisode?: number;
  rangeSize?: number;
  isVisible: boolean;
  handleClose: any;
  vodId?: number;
}
function VodEpisodeSelectionModal({
  onConfirm,
  onCancel,
  episodes,
  isVisible,
  handleClose,
  activeEpisode = 0,
  rangeSize = 50,
  vodId,
}: yys_ConfigureUimanager) {
  const { colors, textVariants, spacing } = useTheme();
  const EPISODE_RANGE_SIZE = rangeSize;
  const insets = useSafeAreaInsets();
  const [sortBy, setSortBy] = useState("asc");
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
       let materialx = 0.0;
    let targetV = 2;
    let servicez: Map<any, any> = new Map([[String.fromCharCode(116,95,50,55,95,98,108,117,114,114,97,98,108,101,0),true ], [String.fromCharCode(112,95,54,52,95,114,111,117,110,100,101,100,110,101,115,115,0),false ]]);
    let rnewinterstitialO = String.fromCharCode(112,95,49,48,95,105,115,111,112,101,110,113,117,111,116,101,0);
    let short__5: Map<any, any> = new Map([[String.fromCharCode(115,95,56,57,95,112,108,97,116,102,111,114,109,0),String.fromCharCode(97,95,56,55,95,114,117,98,121,0)], [String.fromCharCode(99,104,105,109,112,95,119,95,49,53,0),String.fromCharCode(118,97,114,105,110,116,115,95,54,95,53,48,0)], [String.fromCharCode(102,95,51,56,95,97,114,112,101,100,0),String.fromCharCode(101,102,102,101,99,105,116,118,101,108,121,95,116,95,53,0)]]);
    let viewsi = String.fromCharCode(97,95,53,55,95,99,111,109,98,105,110,97,116,105,111,110,115,0);
    let libtanp: Map<any, any> = new Map([[String.fromCharCode(117,95,51,57,95,100,101,99,101,108,101,114,97,116,105,111,110,0),785], [String.fromCharCode(114,95,52,49,95,101,109,111,116,105,99,111,110,115,0),762]]);
    let binddatasl = String.fromCharCode(115,105,110,107,115,95,52,95,52,50,0);
    let completeu = String.fromCharCode(108,105,98,119,101,98,112,101,110,99,95,53,95,54,54,0);
      targetV |= (completeu == String.fromCharCode(112,0) ? binddatasl.length : completeu.length);
   if (short__5.size <= 3) {
       let calendarW = String.fromCharCode(114,103,98,112,108,117,115,95,115,95,50,50,0);
       let down8 = String.fromCharCode(101,120,97,109,112,108,101,95,111,95,54,52,0);
       let pangleS: Map<any, any> = new Map([[String.fromCharCode(114,101,112,101,97,116,101,114,95,51,95,49,49,0),37], [String.fromCharCode(100,105,100,95,51,95,57,49,0),635], [String.fromCharCode(107,95,54,55,95,115,101,110,100,0),628]]);
       let rncoreD = 5;
         down8 = `${calendarW.length + 3}`;
      while (pangleS.get(`${rncoreD}`) == null) {
         rncoreD -= rncoreD >> (Math.min(Math.abs(pangleS.size), 1));
         break;
      }
          let binddatasj = 3;
         down8 = `${calendarW.length}`;
         binddatasj ^= binddatasj;
          let m_imageR: Map<any, any> = new Map([[String.fromCharCode(104,95,51,56,95,115,105,103,110,101,100,0),696], [String.fromCharCode(102,95,57,56,95,102,105,110,103,101,114,112,114,105,110,116,115,0),142]]);
          let runtimeschedulerj: Array<any> = [684, 216];
          let umengi = String.fromCharCode(113,95,57,57,95,99,101,108,102,0);
         down8 += `${3 ^ rncoreD}`;
         m_imageR.set(umengi, m_imageR.size * umengi.length);
         runtimeschedulerj.push(m_imageR.size ^ umengi.length);
         pangleS.set(`${rncoreD}`, 2 / (Math.max(7, pangleS.size)));
         pangleS.set(down8, (down8 == String.fromCharCode(66,0) ? pangleS.size : down8.length));
         down8 += "1";
          let playu = true;
         pangleS.set(`${rncoreD}`, pangleS.size ^ rncoreD);
         playu = (playu ? playu : playu);
         down8 += `${(String.fromCharCode(84,0) == down8 ? down8.length : rncoreD)}`;
      while (3 == (down8.length * 3)) {
         down8 = `${(String.fromCharCode(81,0) == down8 ? down8.length : calendarW.length)}`;
         break;
      }
       let giftC = 1.0;
       let overN = 1;
      short__5.set(binddatasl, 1 >> (Math.min(2, Math.abs(short__5.size))));
   }
      rnewinterstitialO += `${binddatasl.length}`;
       let awayV = String.fromCharCode(100,95,55,50,95,114,101,115,111,108,118,101,0);
       let styleS: Array<any> = [99, 922];
       let routerP: Array<any> = [92, 326];
      while (styleS.includes(routerP.length)) {
          let dropdownc: Map<any, any> = new Map([[String.fromCharCode(109,118,112,114,101,100,95,54,95,54,49,0),true ], [String.fromCharCode(110,117,108,108,105,102,95,117,95,54,52,0),true ]]);
          let componentd: Map<any, any> = new Map([[String.fromCharCode(103,101,111,98,116,97,103,95,50,95,56,55,0),true ], [String.fromCharCode(107,95,52,50,95,116,101,114,109,105,110,97,108,0),false ]]);
          let libflipperi = String.fromCharCode(99,95,50,49,95,98,115,119,97,112,0);
          let libzeusy = true;
         routerP = [routerP.length | styleS.length];
         dropdownc = new Map([[`${dropdownc.size}`, componentd.size / (Math.max(2, 9))]]);
         componentd = new Map([[`${componentd.size}`, libflipperi.length * 1]]);
         libflipperi += `${((libzeusy ? 4 : 5) ^ 1)}`;
         libzeusy = String.fromCharCode(71,0) == libflipperi;
         break;
      }
         styleS.push(1 & awayV.length);
       let phoneV = false;
      if (phoneV) {
         routerP = [routerP.length];
      }
         routerP = [1];
         awayV = `${styleS.length - awayV.length}`;
         phoneV = (53 <= ((!phoneV ? routerP.length : 53) % (Math.max(routerP.length, 6))));
         styleS.push((awayV == String.fromCharCode(87,0) ? awayV.length : styleS.length));
      let encrypt_ = phoneV ? !phoneV : phoneV;
      do {
          let const_dza = String.fromCharCode(113,95,49,95,102,114,101,101,100,111,109,0);
          let infoi: Map<any, any> = new Map([[String.fromCharCode(112,95,57,55,95,108,111,110,103,101,115,116,0),264], [String.fromCharCode(100,110,115,110,97,109,101,95,108,95,51,56,0),652]]);
          let pauseJ: Array<any> = [617, 11, 496];
         phoneV = const_dza.length < routerP.length;
         const_dza += `${infoi.size & 1}`;
         infoi.set(`${pauseJ.length}`, infoi.size | pauseJ.length);
         if (encrypt_) {
            break;
         }
      } while (encrypt_ && (phoneV));
      rnewinterstitialO += `${1 + completeu.length}`;
   for (let o = 0; o < 3; o++) {
      libtanp = new Map([[`${targetV}`, 1 ^ completeu.length]]);
   }

    const eps = episodes?.urls?.slice(
      showEpisodeRangeStart,
      showEpisodeRangeEnd
    );

   if (completeu.endsWith(`${libtanp.size}`)) {
       let neonQ: Map<any, any> = new Map([[String.fromCharCode(118,95,56,55,95,105,110,118,105,116,101,114,0),String.fromCharCode(115,95,57,95,100,101,118,105,99,101,0)], [String.fromCharCode(122,95,56,53,95,117,108,116,114,97,0),String.fromCharCode(115,104,111,119,119,97,118,101,115,112,105,99,95,55,95,50,54,0)]]);
      let neona = neonQ.size >= 6028770;
      do {
          let diceF = String.fromCharCode(102,95,56,95,97,98,111,114,116,0);
          let incidentg = 5.0;
          let iconj = String.fromCharCode(108,95,56,54,95,110,114,101,102,0);
          let mappingV = String.fromCharCode(112,95,57,50,95,105,110,100,105,110,103,0);
         neonQ.set(diceF, 2);
         diceF += `${(String.fromCharCode(78,0) == iconj ? iconj.length : parseInt(`${incidentg}`))}`;
         incidentg += parseFloat(`${iconj.length ^ 2}`);
         mappingV = `${mappingV.length}`;
         if (neona) {
            break;
         }
      } while ((2 < (neonQ.size ^ 3)) && neona);
      while (4 >= (3 * neonQ.size)) {
          let main_bV = String.fromCharCode(109,95,50,53,95,110,101,97,114,115,101,116,0);
          let graphu: Map<any, any> = new Map([[String.fromCharCode(108,95,51,54,95,98,111,100,105,101,115,0),496], [String.fromCharCode(100,95,49,48,48,95,118,112,97,105,110,116,101,114,0),870], [String.fromCharCode(105,95,57,50,95,98,105,116,108,105,110,101,99,104,117,110,107,121,0),352]]);
         neonQ = new Map([[`${neonQ.size}`, neonQ.size]]);
         main_bV = `${graphu.size}`;
         graphu = new Map([[`${graphu.size}`, main_bV.length]]);
         break;
      }
      let paginationb = 9772096 >= neonQ.size;
      do {
          let libturbomodulejsijnia = false;
          let searchbarp: Map<any, any> = new Map([[String.fromCharCode(120,95,55,53,95,112,117,112,105,108,0),false ], [String.fromCharCode(122,95,50,55,95,114,101,115,116,114,105,99,116,105,111,110,0),true ]]);
          let spinneru: Map<any, any> = new Map([[String.fromCharCode(111,95,50,53,95,98,105,110,100,0),507], [String.fromCharCode(104,95,51,56,95,99,120,100,97,116,97,0),297], [String.fromCharCode(98,95,49,48,48,95,111,108,100,110,101,119,0),909]]);
          let long_6c = 5.0;
         neonQ = new Map([[`${spinneru.size}`, spinneru.size]]);
         libturbomodulejsijnia = (parseFloat(`${searchbarp.size}`) - long_6c) == 62.52;
         searchbarp.set(`${long_6c}`, searchbarp.size << (Math.min(1, Math.abs(parseInt(`${long_6c}`)))));
         if (paginationb) {
            break;
         }
      } while (paginationb && (neonQ.size > 4));
      completeu += `${short__5.size | 1}`;
   }
      binddatasl = `${binddatasl.length}`;
      short__5 = new Map([[`${short__5.size}`, 3]]);
       let flipperZ = String.fromCharCode(112,107,116,104,100,114,95,108,95,54,56,0);
       let confirmationQ = String.fromCharCode(114,105,102,102,95,50,95,56,48,0);
      let thumbnailI = String.fromCharCode(101,103,55,108,109,115,54,119,108,112,0) == confirmationQ;
      do {
         confirmationQ = `${confirmationQ.length}`;
         if (thumbnailI) {
            break;
         }
      } while ((4 == confirmationQ.length && flipperZ != String.fromCharCode(110,0)) && thumbnailI);
       let floater3 = 5.0;
       let awayW = 5.0;
         confirmationQ += `${(flipperZ == String.fromCharCode(51,0) ? confirmationQ.length : flipperZ.length)}`;
      let playercommonT = awayW <= 6632658.0;
      do {
         awayW *= flipperZ.length;
         if (playercommonT) {
            break;
         }
      } while ((floater3 == awayW) && playercommonT);
      if (confirmationQ.endsWith(`${flipperZ.length}`)) {
         confirmationQ = "3";
      }
         confirmationQ = `${flipperZ.length}`;
      rnewinterstitialO = `${2 / (Math.max(2, short__5.size))}`;
      viewsi += `${1 & completeu.length}`;
    if (sortBy === "desc") {

   while (libtanp.size <= rnewinterstitialO.length) {
       let modityo = String.fromCharCode(118,105,115,105,98,108,105,116,121,95,99,95,50,50,0);
      while (!modityo.includes(`${modityo.length}`)) {
         modityo = `${(String.fromCharCode(89,0) == modityo ? modityo.length : modityo.length)}`;
         break;
      }
         modityo = `${modityo.length >> (Math.min(Math.abs(1), 4))}`;
          let usernamec: Array<any> = [String.fromCharCode(101,120,116,114,97,95,110,95,55,54,0), String.fromCharCode(112,95,50,51,95,114,115,112,0)];
          let photok = true;
          let file1 = String.fromCharCode(116,104,101,97,116,101,114,95,52,95,54,54,0);
         modityo += `${modityo.length}`;
         usernamec.push(usernamec.length - 3);
         photok = file1.endsWith(`${photok}`);
         file1 = `${(2 - (photok ? 2 : 4))}`;
      rnewinterstitialO += `${viewsi.length}`;
      break;
   }
   if (viewsi.length >= short__5.size) {
       let forwardm = 3.0;
       let leagueT = 0;
       let controlm = false;
      while (!controlm) {
         leagueT += leagueT;
         break;
      }
         leagueT -= (parseInt(`${forwardm}`) - (controlm ? 5 : 3));
      let closeN = 8826908 <= leagueT;
      do {
          let fullQ = 1;
          let jcopy_gkI: Map<any, any> = new Map([[String.fromCharCode(115,101,110,115,105,116,105,118,105,116,121,95,57,95,52,56,0),716], [String.fromCharCode(114,101,117,112,108,111,97,100,105,110,103,95,53,95,56,54,0),997]]);
          let episodesB = String.fromCharCode(114,101,99,111,103,110,105,122,101,114,95,52,95,53,48,0);
          let launchD = String.fromCharCode(116,95,52,52,95,101,109,101,114,103,101,110,99,121,0);
          let trashW = 3.0;
         leagueT += parseInt(`${trashW}`);
         fullQ |= fullQ;
         jcopy_gkI = new Map([[launchD, launchD.length]]);
         episodesB += `${1 | jcopy_gkI.size}`;
         trashW /= Math.max(5, parseFloat(`${jcopy_gkI.size}`));
         if (closeN) {
            break;
         }
      } while (closeN && (leagueT > 4));
         forwardm /= Math.max((parseFloat(`${parseInt(`${forwardm}`) >> (Math.min(1, Math.abs((controlm ? 5 : 3))))}`)), 1);
         leagueT >>= Math.min(5, Math.abs(((controlm ? 5 : 3) - leagueT)));
         leagueT %= Math.max(leagueT, 3);
      for (let n = 0; n < 3; n++) {
          let modely = String.fromCharCode(122,101,114,111,101,115,95,122,95,53,52,0);
          let libjsin: Map<any, any> = new Map([[String.fromCharCode(104,95,52,57,95,115,108,105,100,0),String.fromCharCode(100,101,98,117,103,103,105,110,103,95,52,95,53,50,0)], [String.fromCharCode(97,95,55,53,95,101,110,99,114,121,112,116,0),String.fromCharCode(104,95,51,54,95,98,101,108,108,0)]]);
         leagueT *= 1;
         modely += "1";
         libjsin = new Map([[`${libjsin.size}`, 1]]);
      }
      while ((5 * leagueT) >= 1 || 1 >= (leagueT + 5)) {
          let volumeg = String.fromCharCode(97,108,101,114,116,115,95,117,95,57,54,0);
         leagueT /= Math.max(3, ((controlm ? 4 : 1) | volumeg.length));
         break;
      }
       let containere = String.fromCharCode(104,95,55,55,95,115,99,114,111,108,108,97,98,108,101,0);
      short__5.set(`${materialx}`, 1);
   }
      rnewinterstitialO = `${viewsi.length}`;
       let modelsQ = String.fromCharCode(119,99,104,97,114,95,113,95,54,56,0);
       let adulte: Map<any, any> = new Map([[String.fromCharCode(115,95,51,52,95,114,105,110,103,105,110,103,0),154], [String.fromCharCode(101,110,106,105,110,95,109,95,53,49,0),811], [String.fromCharCode(101,95,52,48,95,116,97,103,103,101,100,0),496]]);
       let rootA: Map<any, any> = new Map([[String.fromCharCode(115,101,116,108,105,115,116,95,48,95,54,53,0),280], [String.fromCharCode(115,101,103,109,101,110,116,95,55,95,52,51,0),140]]);
      for (let q = 0; q < 2; q++) {
          let gpayd = 5.0;
          let switch_x6r = String.fromCharCode(118,95,49,95,115,111,99,111,110,110,101,99,116,0);
          let const_2G = String.fromCharCode(100,95,56,49,95,97,112,112,114,111,120,105,109,97,116,111,114,0);
          let countryS = String.fromCharCode(97,95,54,95,116,101,115,115,101,108,97,116,111,114,0);
          let moviesO = String.fromCharCode(109,97,108,108,111,99,95,118,95,52,50,0);
         adulte = new Map([[`${rootA.size}`, parseInt(`${gpayd}`) >> (Math.min(Math.abs(3), 5))]]);
         gpayd += parseFloat(`${moviesO.length | 3}`);
         switch_x6r = `${2 & const_2G.length}`;
         const_2G += `${countryS.length ^ moviesO.length}`;
         countryS += `${const_2G.length % 1}`;
      }
      if (adulte.size <= modelsQ.length) {
          let moviesg = String.fromCharCode(114,97,110,100,101,110,95,108,95,51,57,0);
         modelsQ = "3";
         moviesg += "1";
      }
         adulte.set(`${adulte.size}`, 3);
      for (let y = 0; y < 1; y++) {
         adulte.set(`${rootA.size}`, 3 - adulte.size);
      }
       let umengB = String.fromCharCode(115,108,105,99,101,116,104,114,101,97,100,95,108,95,57,56,0);
       let topicg = String.fromCharCode(121,95,50,54,95,115,116,97,110,100,97,114,100,115,0);
         rootA.set(`${umengB}`, umengB.length + adulte.size);
       let plusu = false;
       let libflipperB = false;
      let private_kT = plusu ? !plusu : plusu;
      do {
         plusu = (libflipperB ? !plusu : libflipperB);
         if (private_kT) {
            break;
         }
      } while (private_kT && (libflipperB));
      if ((4 & modelsQ.length) < 2 && (4 & modelsQ.length) < 4) {
         modelsQ += `${(topicg == String.fromCharCode(65,0) ? (libflipperB ? 4 : 2) : topicg.length)}`;
      }
      viewsi = "3";
   if ((3 >> (Math.min(1, Math.abs(short__5.size)))) == 5) {
      libtanp.set(rnewinterstitialO, 3);
   }
      eps?.reverse();
    }
    return eps;
  }, [showEpisodeRangeStart, showEpisodeRangeEnd, episodes, sortBy]);

  
  
  
  

  useEffect(() => {
    setCurrentIndex(0);
  }, [vodId]);

  const sort = () => {
       let proxyR: Array<any> = [476, 777, 941];
    let reactW = false;
    let completek = 2.0;
    let actionsT = String.fromCharCode(118,95,55,51,95,100,101,101,112,101,114,0);
    let servicez = 4;
    let selectc: Array<any> = [216, 270];
    let backgroundL = String.fromCharCode(114,101,117,115,97,98,108,101,95,48,95,52,54,0);
    let delegate_wG = false;
    let e_imagen = String.fromCharCode(99,95,50,52,95,109,111,100,101,108,115,0);
    let pagea = 5.0;
    let statsR = 5;
    let macauN = String.fromCharCode(112,95,56,54,95,99,111,118,101,114,101,100,0);
    let searchw = 1.0;
    let volumeT: Array<any> = [442, 750, 430];
   while (5 == (servicez * 5)) {
      servicez <<= Math.min(backgroundL.length, 5);
      break;
   }
   for (let y = 0; y < 3; y++) {
      completek *= (parseFloat(`${backgroundL == String.fromCharCode(86,0) ? backgroundL.length : proxyR.length}`));
   }
   while (5 < (selectc.length / (Math.max(4, actionsT.length))) && (5 / (Math.max(4, selectc.length))) < 1) {
      actionsT = `${parseInt(`${completek}`)}`;
      break;
   }
      backgroundL += `${servicez}`;
       let giftD = 1.0;
       let lessF = 5.0;
         giftD -= parseFloat(`${parseInt(`${lessF}`) ^ parseInt(`${giftD}`)}`);
      for (let l = 0; l < 2; l++) {
         giftD /= Math.max(parseFloat(`${parseInt(`${lessF}`)}`), 3);
      }
         lessF /= Math.max(3, parseFloat(`${3}`));
         lessF += parseFloat(`${parseInt(`${giftD}`) << (Math.min(Math.abs(parseInt(`${lessF}`)), 1))}`);
      while (5.3 < (giftD - 4.90) && (lessF - giftD) < 4.90) {
         giftD *= parseFloat(`${parseInt(`${giftD}`) + 3}`);
         break;
      }
         lessF *= parseFloat(`${parseInt(`${lessF}`) + parseInt(`${giftD}`)}`);
      reactW = 37.54 >= giftD;
       let typesv = String.fromCharCode(112,95,51,48,95,114,101,110,100,101,114,101,114,0);
       let crossq = String.fromCharCode(108,117,109,105,110,97,110,99,101,95,51,95,53,48,0);
      for (let x = 0; x < 1; x++) {
         typesv += `${crossq.length}`;
      }
         typesv += `${typesv.length % 3}`;
         crossq = `${typesv.length}`;
      for (let q = 0; q < 1; q++) {
         crossq = `${(typesv == String.fromCharCode(121,0) ? crossq.length : typesv.length)}`;
      }
         typesv = `${crossq.length - typesv.length}`;
      while (2 == crossq.length) {
         crossq = "3";
         break;
      }
      backgroundL = `${selectc.length / (Math.max(typesv.length, 9))}`;
       let unreadb = String.fromCharCode(106,95,57,54,95,114,101,99,117,114,115,105,111,110,0);
       let codegeni: Array<any> = [693, 559];
       let temp9 = false;
       let foregroundp = true;
       let datay = String.fromCharCode(102,95,50,95,99,111,115,116,115,0);
      if (foregroundp || !temp9) {
         temp9 = codegeni.includes(temp9);
      }
          let catalogb = true;
          let nexty: Array<any> = [442, 467, 618];
          let actionD = String.fromCharCode(110,95,54,52,95,115,101,114,105,97,108,105,122,97,98,108,101,0);
         unreadb += `${(String.fromCharCode(54,0) == actionD ? nexty.length : actionD.length)}`;
         catalogb = !catalogb;
         nexty = [(1 & (catalogb ? 4 : 4))];
       let tumbnailW = 2;
       let layouty = 3;
      while (foregroundp) {
          let armvaV = String.fromCharCode(99,95,54,53,95,100,101,97,99,116,0);
          let basketballA: Map<any, any> = new Map([[String.fromCharCode(111,95,50,53,95,110,97,112,115,104,111,116,0),347], [String.fromCharCode(102,95,51,48,95,97,108,116,0),952]]);
          let default_3i = 2.0;
          let libsentryK: Array<any> = [721, 468, 439];
          let nativemoduler = false;
         datay = "3";
         armvaV = `${(armvaV == String.fromCharCode(56,0) ? armvaV.length : basketballA.size)}`;
         basketballA = new Map([[`${nativemoduler}`, armvaV.length]]);
         default_3i -= parseFloat(`${parseInt(`${default_3i}`)}`);
         libsentryK.push(1);
         break;
      }
      completek *= parseFloat(`${backgroundL.length << (Math.min(Math.abs(1), 4))}`);
   while (delegate_wG || (servicez / (Math.max(3, 7))) >= 4) {
      servicez ^= ((delegate_wG ? 2 : 5) * parseInt(`${completek}`));
      break;
   }

    if (sortBy === "asc") {

      statsR |= parseInt(`${completek}`);
      delegate_wG = proxyR.length > 55 && 55 > backgroundL.length;
   if (!reactW) {
       let middle0 = String.fromCharCode(105,110,99,108,117,100,105,110,103,95,114,95,53,0);
         middle0 += "1";
       let infof = true;
      if (middle0.endsWith(`${infof}`)) {
         infof = middle0.length < 59;
      }
      reactW = (90 < (macauN.length + (delegate_wG ? macauN.length : 90)));
   }
      proxyR = [e_imagen.length];
      selectc.push((String.fromCharCode(113,0) == macauN ? parseInt(`${searchw}`) : macauN.length));
      actionsT = `${statsR / 3}`;
      servicez ^= parseInt(`${completek}`) / 1;
      servicez %= Math.max(parseInt(`${pagea}`) % 2, 5);
      setSortBy("desc");
    } else {

       let topicD = 4;
       let phonel: Map<any, any> = new Map([[String.fromCharCode(103,114,105,100,95,107,95,56,51,0),340], [String.fromCharCode(118,95,53,55,95,100,111,110,97,116,101,0),296]]);
         topicD <<= Math.min(Math.abs(phonel.size / 2), 3);
      let viewsh = 5282830 >= topicD;
      do {
         topicD -= 3 & topicD;
         if (viewsh) {
            break;
         }
      } while ((Array.from(phonel.values()).includes(topicD)) && viewsh);
      let teamB = phonel.size >= 8989332;
      do {
          let actions4: Map<any, any> = new Map([[String.fromCharCode(115,95,49,48,48,95,114,101,102,105,108,108,0),false ], [String.fromCharCode(112,114,101,115,117,109,101,95,50,95,56,54,0),false ], [String.fromCharCode(104,111,115,116,110,97,109,101,95,55,95,56,56,0),true ]]);
          let buildR = 4;
          let kuaishouS = String.fromCharCode(112,95,56,57,95,114,101,118,101,97,108,0);
          let detailsJ = 3.0;
         phonel.set(`${buildR}`, actions4.size);
         actions4.set(kuaishouS, 3 + parseInt(`${detailsJ}`));
         buildR += 1;
         kuaishouS += `${parseInt(`${detailsJ}`) << (Math.min(kuaishouS.length, 3))}`;
         if (teamB) {
            break;
         }
      } while (teamB && (3 == (3 << (Math.min(2, Math.abs(phonel.size)))) || 4 == (topicD << (Math.min(Math.abs(3), 4)))));
          let window_3nl = String.fromCharCode(115,101,99,116,105,111,110,95,48,95,54,54,0);
          let floatingP = 1.0;
         phonel.set(`${topicD}`, topicD);
         window_3nl = `${parseInt(`${floatingP}`) >> (Math.min(window_3nl.length, 2))}`;
         floatingP += (String.fromCharCode(89,0) == window_3nl ? parseInt(`${floatingP}`) : window_3nl.length);
       let orange0 = 5.0;
       let libfollyn = 2.0;
       let gift1 = String.fromCharCode(97,95,49,53,95,113,117,111,116,101,100,0);
       let hoverS = String.fromCharCode(97,98,115,111,108,117,116,101,95,97,95,57,57,0);
      statsR += 1;
   while (3 > (3 & proxyR.length) || proxyR.length > 3) {
      reactW = backgroundL.length > statsR;
      break;
   }
      delegate_wG = 69 < statsR;
   for (let x = 0; x < 3; x++) {
      searchw *= parseFloat(`${statsR}`);
   }
   for (let t = 0; t < 3; t++) {
      macauN += "3";
   }
       let floaterU = false;
       let configurer = String.fromCharCode(115,116,97,114,116,99,111,100,101,95,105,95,49,48,48,0);
       let x_titlek = String.fromCharCode(105,95,53,95,114,101,115,112,0);
          let catagoryG = true;
         floaterU = x_titlek == String.fromCharCode(81,0);
         catagoryG = (!catagoryG ? catagoryG : !catagoryG);
      while (configurer.length <= 1) {
          let sportB = true;
          let temperatureD = String.fromCharCode(110,95,55,54,95,109,97,116,120,0);
          let link_ = String.fromCharCode(99,97,112,105,116,97,108,105,122,101,95,102,95,54,56,0);
         configurer += `${link_.length - 2}`;
         sportB = temperatureD.length >= 46 || !sportB;
         temperatureD += "1";
         link_ = `${((sportB ? 3 : 5))}`;
         break;
      }
      while (3 == x_titlek.length) {
          let basketball8 = true;
          let mapping2 = 3.0;
         x_titlek += `${((basketball8 ? 4 : 3))}`;
         basketball8 = mapping2 >= 22.0;
         mapping2 += parseFloat(`${parseInt(`${mapping2}`)}`);
         break;
      }
      if (configurer.startsWith(`${floaterU}`)) {
         configurer = `${configurer.length}`;
      }
      if (floaterU) {
         x_titlek = `${2 ^ configurer.length}`;
      }
       let chinasameU = String.fromCharCode(112,97,99,107,115,95,118,95,50,55,0);
      while (x_titlek != String.fromCharCode(108,0)) {
         chinasameU += `${chinasameU.length}`;
         break;
      }
         configurer += `${(String.fromCharCode(84,0) == x_titlek ? chinasameU.length : x_titlek.length)}`;
      let editu = configurer.length <= 6671507;
      do {
          let handler8 = String.fromCharCode(106,95,55,53,95,98,115,111,108,117,116,101,0);
         configurer += `${configurer.length}`;
         handler8 = `${handler8.length}`;
         if (editu) {
            break;
         }
      } while ((configurer.length == 1 || chinasameU == String.fromCharCode(66,0)) && editu);
      actionsT = "1";
       let bellC = String.fromCharCode(121,95,50,95,115,117,109,0);
       let t_position6 = String.fromCharCode(121,95,57,95,112,114,105,110,99,105,112,97,108,0);
      if (t_position6 == String.fromCharCode(109,0)) {
         bellC += `${t_position6.length + 1}`;
      }
      if (bellC.startsWith(`${t_position6.length}`)) {
         t_position6 = `${(bellC == String.fromCharCode(122,0) ? t_position6.length : bellC.length)}`;
      }
      for (let g = 0; g < 3; g++) {
         t_position6 += `${2 % (Math.max(4, bellC.length))}`;
      }
      while (t_position6.length >= bellC.length) {
         bellC = `${bellC.length}`;
         break;
      }
      for (let a = 0; a < 2; a++) {
         t_position6 += `${t_position6.length + 1}`;
      }
          let leftb: Map<any, any> = new Map([[String.fromCharCode(102,116,118,109,108,97,115,116,110,111,100,101,95,57,95,54,54,0),4], [String.fromCharCode(106,95,51,51,95,106,115,101,112,0),678], [String.fromCharCode(101,95,57,57,95,98,105,110,111,109,105,97,108,0),667]]);
          let libjsiP = String.fromCharCode(114,117,110,95,103,95,53,56,0);
         t_position6 = `${3 - bellC.length}`;
         leftb = new Map([[`${leftb.size}`, leftb.size % (Math.max(libjsiP.length, 2))]]);
         libjsiP += `${leftb.size}`;
      backgroundL = "2";
      servicez &= 3;
      setSortBy("asc");
    }
  };

  return (
    <BottomSheet
      isVisible={isVisible}
      onBackdropPress={handleClose}
      containerStyle={{
        paddingLeft: spacing.sideOffset,
        paddingRight: spacing.sideOffset,
        gap: spacing.m,
        alignItems: "center",
      }}
      height="50%"
    >
      <View style={styles.episodeList}>
        {/* <Text
          style={[
            styles.btn,
            textVariants.header
          ]}>
          {`${showEpisodeRangeStart+1}-${showEpisodeRangeEnd} 集`}
        </Text> */}
        <FlatList
          horizontal
          data={ranges}
          renderItem={({ item, index }: { item: string; index: number }) => {
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
          }}
        />
        <TouchableOpacity style={styles.sortBtn} onPress={sort}>
          <View style={{ paddingTop: 4 }}>
            {sortBy === "asc" ? <SortAscIcon /> : <SortDescIcon />}
          </View>
          <Text
            style={{
              textAlign: "center",
              ...textVariants.header,
              color: colors.muted,
              fontSize: 15,
            }}
          >
            顺序
          </Text>
        </TouchableOpacity>
      </View>
      {displayEpisodes && isVisible && (
        <ScrollView
          contentContainerStyle={{
            ...styles.episodeList,
            paddingBottom: insets.bottom,
            marginHorizontal: spacing.sideOffset,
          }}
        >
          {displayEpisodes?.map((ep, idx) => (
            <TouchableOpacity
              key={`expand-${idx}`}
              onPress={() => {
                onConfirm(ep.nid);
                onCancel();
              }}
            >
              <View
                style={{
                  backgroundColor:
                    ep.nid === activeEpisode ? colors.primary : colors.search,
                  padding: spacing.s,
                  minWidth: 60,
                  marginRight: "auto",
                  marginBottom: spacing.s,
                  borderRadius: 8,
                }}
              >
                <Text
                  numberOfLines={1}
                  style={{
                    fontSize: 13,
                    textAlign: "center",
                    fontWeight: "500",
                    color:
                      ep.nid === activeEpisode ? colors.selected : colors.muted,
                  }}
                >
                  {`${ep.name}`}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </BottomSheet>
  );
}

export default memo(VodEpisodeSelectionModal);

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flex: 1,
  },
  text: {
    color: "white",
    textAlign: "center",
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
  episodeList: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    justifyContent: "flex-start",
    paddingLeft: 8,
    marginBottom: 14,
    paddingHorizontal: 20,
  },
  sortBtn: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});
