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
import { ttWeibo } from "@type/tt_line_borderless";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import SortAscIcon from "@static/images/bootTemperatureRoboto.svg";
import SortDescIcon from "@static/images/countryChatSpinner.svg";
import BottomSheet from "../bottomSheet/tt_apple_bridge";
import { ttExpired } from "@redux/reducers/tt_configure_injury";

interface ttSmall {
  onConfirm: any;
  onCancel: any;
  episodes?: ttWeibo;
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
}: ttSmall) {
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
       let privacyV = String.fromCharCode(105,109,112,111,114,116,97,110,116,0);
    let config_ = String.fromCharCode(109,112,115,117,98,0);
    let customG = 0.0;
    let white8 = 5;
    let interstitial4: Array<any> = [157, 683, 968];
    let googleY: Array<any> = [524, 132, 131];
    let pauseK: Array<any> = [711, 177];
    let filterm: Array<any> = [String.fromCharCode(98,101,116,104,115,111,102,116,118,105,100,0), String.fromCharCode(121,101,115,116,101,114,100,97,121,0)];
    let unselectedw = false;
   if (!config_.includes(`${googleY.length}`)) {
      googleY = [parseInt(`${customG}`)];
   }
   for (let e = 0; e < 3; e++) {
       let lineH = 2.0;
       let ewardedm: Map<any, any> = new Map([[String.fromCharCode(115,110,105,112,112,101,116,0),false ], [String.fromCharCode(116,119,105,116,99,104,0),true ], [String.fromCharCode(115,99,113,117,101,114,121,0),false ]]);
      if ((ewardedm.size * lineH) < 1.30 && (ewardedm.size + 3) < 2) {
         ewardedm = new Map([[`${ewardedm.size}`, parseInt(`${lineH}`) / (Math.max(ewardedm.size, 5))]]);
      }
         lineH -= 1 + parseInt(`${lineH}`);
      let ticks = 7538781.0 >= lineH;
      do {
         lineH /= Math.max(2, ewardedm.size);
         if (ticks) {
            break;
         }
      } while ((Array.from(ewardedm.values()).includes(lineH)) && ticks);
       let rankI = String.fromCharCode(111,118,101,114,114,105,100,100,101,110,0);
       let sidez = String.fromCharCode(116,104,101,114,101,0);
       let cornert = 5.0;
      while (sidez == String.fromCharCode(90,0)) {
          let episodeT = String.fromCharCode(99,104,101,99,107,115,117,109,115,0);
          let sheet6 = String.fromCharCode(109,97,110,105,112,117,108,97,116,111,114,0);
          let predictionl = String.fromCharCode(101,118,100,110,115,0);
          let unreadq = String.fromCharCode(105,112,118,105,100,101,111,0);
         rankI = `${parseInt(`${lineH}`) >> (Math.min(Math.abs(3), 3))}`;
         episodeT += "1";
         sheet6 += "2";
         predictionl = "1";
         unreadq += `${sheet6.length ^ 2}`;
         break;
      }
      customG *= parseInt(`${customG}`) + 2;
   }
      customG /= Math.max(googleY.length & white8, 5);
      privacyV = `${pauseK.length % 3}`;

    const eps = episodes?.urls?.slice(
      showEpisodeRangeStart,
      showEpisodeRangeEnd
    );

   while (config_ != privacyV) {
      privacyV += `${googleY.length ^ pauseK.length}`;
      break;
   }
      config_ = `${white8}`;
       let friendsd = String.fromCharCode(115,116,97,110,100,97,114,100,0);
         friendsd += `${friendsd.length}`;
          let huaweib = 1.0;
          let yellowE = 3.0;
          let private_ol = String.fromCharCode(112,111,108,108,0);
         friendsd += `${2 % (Math.max(4, parseInt(`${yellowE}`)))}`;
         huaweib += parseFloat(`${private_ol.length}`);
         yellowE += (private_ol == String.fromCharCode(87,0) ? parseInt(`${huaweib}`) : private_ol.length);
      while (friendsd.length <= 4) {
          let serviceA: Array<any> = [String.fromCharCode(102,114,101,101,112,0), String.fromCharCode(117,100,112,108,105,116,101,0)];
          let calendar1 = 3.0;
          let episodem = String.fromCharCode(105,110,105,116,105,97,108,105,122,97,116,105,111,110,0);
          let targetv = String.fromCharCode(111,110,121,120,99,0);
         friendsd += `${serviceA.length}`;
         serviceA.push(1 << (Math.min(3, episodem.length)));
         calendar1 /= Math.max(parseFloat(`${targetv.length}`), 5);
         episodem = "3";
         targetv += `${targetv.length / (Math.max(2, 6))}`;
         break;
      }
      googleY.push(3);
   for (let c = 0; c < 1; c++) {
      googleY.push(2);
   }
    if (sortBy === "desc") {

   for (let d = 0; d < 3; d++) {
       let y_positionl = 5.0;
       let dangerr = String.fromCharCode(100,97,115,104,98,111,97,114,100,0);
       let fullY = 3;
       let terms1 = String.fromCharCode(104,101,97,100,112,104,111,110,101,0);
       let rewindA = false;
      for (let p = 0; p < 2; p++) {
         terms1 += "1";
      }
      while ((dangerr.length ^ 5) <= 2 && (dangerr.length - 5) <= 5) {
         dangerr += `${((rewindA ? 3 : 2) >> (Math.min(Math.abs(parseInt(`${y_positionl}`)), 5)))}`;
         break;
      }
         terms1 += "1";
      let starS = fullY <= 6297598;
      do {
         fullY %= Math.max(fullY % 3, 4);
         if (starS) {
            break;
         }
      } while ((fullY >= y_positionl) && starS);
      let away6 = terms1 == String.fromCharCode(53,107,109,122,122,95,103,105,108,0);
      do {
         terms1 = `${dangerr.length}`;
         if (away6) {
            break;
         }
      } while (away6 && ((fullY | 5) == 5));
          let formV: Map<any, any> = new Map([[String.fromCharCode(115,112,101,99,105,102,105,101,100,0),278], [String.fromCharCode(115,95,56,51,95,111,116,104,101,114,115,0),32], [String.fromCharCode(99,97,112,115,0),589]]);
          let wind0 = String.fromCharCode(105,108,108,105,113,97,0);
          let actionp: Map<any, any> = new Map([[String.fromCharCode(120,118,97,103,0),384], [String.fromCharCode(101,109,98,101,100,100,105,110,103,0),134]]);
         rewindA = 38 < fullY || rewindA;
         formV = new Map([[`${formV.size}`, 3 & wind0.length]]);
         wind0 = `${formV.size >> (Math.min(wind0.length, 3))}`;
         actionp = new Map([[`${actionp.size}`, actionp.size / (Math.max(wind0.length, 10))]]);
      let pingM = y_positionl >= 5944752.0;
      do {
         y_positionl += parseFloat(`${parseInt(`${y_positionl}`)}`);
         if (pingM) {
            break;
         }
      } while ((3 > dangerr.length) && pingM);
      for (let p = 0; p < 1; p++) {
         y_positionl *= parseFloat(`${fullY ^ 3}`);
      }
      if ((dangerr.length % 5) <= 4 || (y_positionl + parseFloat(`${dangerr.length}`)) <= 4.68) {
          let livex = String.fromCharCode(99,111,110,116,101,120,116,115,0);
          let w_positionw = String.fromCharCode(115,111,108,105,100,99,111,108,111,114,0);
          let resend8 = 0.0;
          let bootsplashG = String.fromCharCode(112,104,111,110,101,98,111,111,107,0);
         y_positionl /= Math.max(5, parseFloat(`${parseInt(`${y_positionl}`) ^ 3}`));
         livex += `${w_positionw.length}`;
         w_positionw += `${2 - parseInt(`${resend8}`)}`;
         resend8 *= 3;
         bootsplashG += "3";
      }
         terms1 = `${2 ^ parseInt(`${y_positionl}`)}`;
         rewindA = dangerr.length < 97 || !rewindA;
         fullY /= Math.max(5, 1);
      let saveG = 8260555 <= terms1.length;
      do {
         terms1 += `${parseInt(`${y_positionl}`) | 2}`;
         if (saveG) {
            break;
         }
      } while (saveG && (2 > (terms1.length * fullY) || (fullY * 2) > 4));
         dangerr += `${2 & terms1.length}`;
         y_positionl *= parseFloat(`${fullY}`);
      white8 >>= Math.min(Math.abs(1 / (Math.max(parseInt(`${customG}`), 10))), 3);
   }
      white8 %= Math.max(3, 1 & interstitial4.length);
   while (4 == googleY.length) {
      googleY.push(googleY.length);
      break;
   }
   while (pauseK.length == 2) {
       let launchv: Map<any, any> = new Map([[String.fromCharCode(109,101,110,117,115,0),605], [String.fromCharCode(115,108,97,118,101,115,0),242], [String.fromCharCode(99,111,110,102,105,114,109,97,116,105,111,110,0),75]]);
       let modelsu = String.fromCharCode(109,101,115,115,97,103,105,110,103,0);
       let iconK: Array<any> = [36, 265];
       let loadingk = 4.0;
       let eighteeng = true;
      if ((4.67 / (Math.max(8, loadingk))) < 2.39) {
          let roomd = true;
         eighteeng = launchv.size < 89;
         roomd = !roomd || !roomd;
      }
      let internetj = loadingk >= 5037729.0;
      do {
          let greenA = 4.0;
          let moviesO = 5.0;
          let cross9 = String.fromCharCode(103,101,110,99,102,103,115,0);
          let pagep = 3;
         loadingk += parseFloat(`${2}`);
         greenA /= Math.max(4, parseFloat(`${parseInt(`${moviesO}`)}`));
         moviesO -= parseFloat(`${parseInt(`${greenA}`)}`);
         cross9 = `${pagep >> (Math.min(Math.abs(parseInt(`${greenA}`)), 4))}`;
         pagep >>= Math.min(5, Math.abs(pagep + 1));
         if (internetj) {
            break;
         }
      } while ((!eighteeng || 3.93 == (5.36 + loadingk)) && internetj);
         modelsu = `${2 + launchv.size}`;
       let product_ = true;
          let episodesd = 4.0;
         product_ = !eighteeng;
         episodesd -= parseFloat(`${1 % (Math.max(parseInt(`${episodesd}`), 6))}`);
      for (let h = 0; h < 3; h++) {
         loadingk += parseFloat(`${3}`);
      }
         modelsu += `${launchv.size}`;
      for (let w = 0; w < 3; w++) {
          let type_2V = 3.0;
          let clubU = false;
          let checkbox5 = String.fromCharCode(114,101,99,111,118,101,114,97,98,108,101,0);
         product_ = loadingk > 62.22;
         type_2V += ((clubU ? 3 : 3) >> (Math.min(Math.abs(parseInt(`${type_2V}`)), 5)));
         clubU = !clubU || type_2V >= 26.16;
         checkbox5 = `${1 >> (Math.min(5, Math.abs(parseInt(`${type_2V}`))))}`;
      }
         iconK = [2];
      while (3 <= iconK.length) {
         eighteeng = ((modelsu.length & (!product_ ? 80 : modelsu.length)) == 80);
         break;
      }
      let ball8 = launchv.size >= 8705590;
      do {
         launchv = new Map([[`${eighteeng}`, ((eighteeng ? 5 : 4) | parseInt(`${loadingk}`))]]);
         if (ball8) {
            break;
         }
      } while ((eighteeng) && ball8);
          let type_523 = String.fromCharCode(109,105,100,105,0);
          let clearx = String.fromCharCode(104,97,114,100,116,104,114,101,115,104,0);
          let progressW = 2;
         iconK = [3];
         type_523 += "2";
         clearx = `${(String.fromCharCode(116,0) == clearx ? clearx.length : type_523.length)}`;
         progressW *= progressW;
      while (!modelsu.startsWith(`${launchv.size}`)) {
          let utilsD: Map<any, any> = new Map([[String.fromCharCode(116,105,109,105,110,103,0),748], [String.fromCharCode(115,117,110,114,105,115,101,0),238]]);
          let condensedV = false;
          let fillE = 1.0;
          let package_jkk: Array<any> = [460, 452];
          let clubI: Array<any> = [743, 218];
         launchv = new Map([[modelsu, ((eighteeng ? 1 : 3) - modelsu.length)]]);
         utilsD = new Map([[`${fillE}`, ((condensedV ? 3 : 2) * parseInt(`${fillE}`))]]);
         condensedV = utilsD.size > clubI.length;
         package_jkk = [((condensedV ? 3 : 1) + 2)];
         clubI = [(package_jkk.length >> (Math.min(4, Math.abs((condensedV ? 1 : 3)))))];
         break;
      }
      for (let u = 0; u < 3; u++) {
         loadingk /= Math.max(parseFloat(`${modelsu.length}`), 1);
      }
      if (2 <= iconK.length) {
         loadingk *= (parseFloat(`${(eighteeng ? 3 : 5) & parseInt(`${loadingk}`)}`));
      }
      pauseK = [(parseInt(`${customG}`) - (eighteeng ? 1 : 1))];
      break;
   }
      eps?.reverse();
    }
    return eps;
  }, [showEpisodeRangeStart, showEpisodeRangeEnd, episodes, sortBy]);

  
  
  
  

  useEffect(() => {
    setCurrentIndex(0);
  }, [vodId]);

  const sort = () => {
       let temperature7: Map<any, any> = new Map([[String.fromCharCode(116,114,97,110,115,108,97,116,105,111,110,0),824], [String.fromCharCode(117,110,119,114,97,112,0),445], [String.fromCharCode(115,117,98,115,101,113,117,101,110,99,101,115,0),487]]);
    let clock3 = true;
    let hongkongo = false;
    let indexI = 0.0;
    let nalyticsY: Array<any> = [394, 766, 497];
    let downloadI: Map<any, any> = new Map([[String.fromCharCode(115,105,110,101,0),872], [String.fromCharCode(102,102,117,114,108,0),477], [String.fromCharCode(97,100,100,114,105,110,102,111,0),453]]);
    let filei = 5.0;
    let fullm = String.fromCharCode(100,105,115,97,98,108,101,100,0);
    let readt = false;
    let uploadh: Map<any, any> = new Map([[String.fromCharCode(99,111,109,112,108,105,97,110,116,0),92], [String.fromCharCode(112,114,105,118,97,116,101,0),268]]);
    let gemfile8 = 1;
    let volumes: Array<any> = [598, 13];
    let buildB = 5.0;
    let flipperC: Map<any, any> = new Map([[String.fromCharCode(97,108,108,114,103,98,0),true ], [String.fromCharCode(100,95,55,48,95,112,97,110,101,108,0),true ], [String.fromCharCode(108,101,114,112,102,0),false ]]);
    let viewer5 = String.fromCharCode(115,116,97,114,115,0);
   if (fullm.length >= 1) {
      fullm = `${1 | parseInt(`${filei}`)}`;
   }
      indexI -= parseInt(`${indexI}`);
      indexI *= 2;
       let roomm = String.fromCharCode(105,110,116,101,114,97,99,116,105,118,101,0);
         roomm += `${3 ^ roomm.length}`;
      for (let d = 0; d < 1; d++) {
         roomm += `${roomm.length | 3}`;
      }
         roomm += "1";
      filei /= Math.max(fullm.length / (Math.max(9, parseInt(`${indexI}`))), 3);
      nalyticsY = [1];
   let indexC = 8478025.0 >= indexI;
   do {
      indexI *= ((clock3 ? 1 : 2));
      if (indexC) {
         break;
      }
   } while ((4.15 == filei) && indexC);
   for (let r = 0; r < 3; r++) {
      indexI *= nalyticsY.length;
   }
   for (let t = 0; t < 1; t++) {
      clock3 = (fullm.length % (Math.max(8, uploadh.size))) == 78;
   }

    if (sortBy === "asc") {

   for (let j = 0; j < 2; j++) {
      indexI /= Math.max(5, 3);
   }
      fullm = `${gemfile8 + 2}`;
      filei *= gemfile8 ^ fullm.length;
   if (nalyticsY.length >= 3 && (nalyticsY.length / 3) >= 2) {
      clock3 = !readt;
   }
   if (!fullm.includes(`${hongkongo}`)) {
      fullm = `${gemfile8}`;
   }
   let enewsj = 8645542 <= fullm.length;
   do {
       let bannerl = String.fromCharCode(115,117,98,114,97,110,103,101,115,0);
       let volumeA = String.fromCharCode(102,108,111,97,116,105,110,103,0);
       let mutedB = true;
          let sides = 0.0;
          let crossG = String.fromCharCode(115,117,98,112,97,99,107,101,116,115,0);
          let albumY = String.fromCharCode(121,117,118,103,98,114,112,0);
         bannerl += `${((mutedB ? 4 : 5))}`;
         sides /= Math.max(2 >> (Math.min(4, Math.abs(parseInt(`${sides}`)))), 3);
         crossG += `${albumY.length}`;
         albumY = `${crossG.length}`;
      while (volumeA == bannerl) {
         bannerl += `${(1 ^ (mutedB ? 3 : 2))}`;
         break;
      }
      for (let t = 0; t < 3; t++) {
         bannerl += `${(String.fromCharCode(107,0) == bannerl ? (mutedB ? 5 : 3) : bannerl.length)}`;
      }
      while (mutedB || 3 <= bannerl.length) {
         mutedB = (26 == ((!mutedB ? volumeA.length : 26) % (Math.max(8, volumeA.length))));
         break;
      }
         volumeA += "2";
      let minivodq = 9219129 >= volumeA.length;
      do {
         volumeA += `${((mutedB ? 1 : 5))}`;
         if (minivodq) {
            break;
         }
      } while ((bannerl == String.fromCharCode(88,0)) && minivodq);
      for (let w = 0; w < 1; w++) {
         volumeA += `${(String.fromCharCode(48,0) == bannerl ? (mutedB ? 3 : 1) : bannerl.length)}`;
      }
         volumeA += `${(volumeA == String.fromCharCode(84,0) ? volumeA.length : (mutedB ? 2 : 1))}`;
       let downloaderV = 0;
       let backwardT = 1;
      fullm = "2";
      if (enewsj) {
         break;
      }
   } while (enewsj && (fullm.length == 2));
       let baiduY = 5;
       let modityw = 2.0;
       let temperatureA = String.fromCharCode(108,97,121,101,114,0);
       let plusd = 3.0;
       let sheetD = 0.0;
      let launcherA = String.fromCharCode(102,122,121,109,119,110,0) == temperatureA;
      do {
          let progressx = 4.0;
          let share5 = 2.0;
          let lightG: Array<any> = [326, 70];
          let loadingA = 0;
         temperatureA += `${loadingA + temperatureA.length}`;
         progressx /= Math.max(2, parseInt(`${progressx}`) | parseInt(`${share5}`));
         share5 -= parseFloat(`${3}`);
         lightG = [1];
         loadingA /= Math.max(4, 2 - lightG.length);
         if (launcherA) {
            break;
         }
      } while (launcherA && (4 < (temperatureA.length ^ 4) && (modityw * 2.35) < 1.33));
      let darkI = plusd >= 7713305.0;
      do {
          let mimoF = 2.0;
         plusd /= Math.max(4, parseFloat(`${3 | parseInt(`${mimoF}`)}`));
         if (darkI) {
            break;
         }
      } while (darkI && (3.41 <= (5.92 * plusd) || (sheetD * 5.92) <= 5.31));
      while (2 == (parseInt(`${modityw}`) - 5) || (modityw - 4.69) == 3.32) {
          let orientation0: Array<any> = [158, 592, 419];
         temperatureA += `${parseInt(`${modityw}`)}`;
         orientation0.push(3 % (Math.max(9, orientation0.length)));
         break;
      }
       let gradles = false;
       let debugN = false;
      let annerc = modityw <= 8873663.0;
      do {
         modityw += 2 >> (Math.min(Math.abs(parseInt(`${modityw}`)), 3));
         if (annerc) {
            break;
         }
      } while (annerc && ((1 + temperatureA.length) <= 2 || (3.85 / (Math.max(3, modityw))) <= 3.41));
      while (sheetD <= baiduY) {
         sheetD += parseFloat(`${1 & baiduY}`);
         break;
      }
      for (let p = 0; p < 1; p++) {
         sheetD *= (parseFloat(`${parseInt(`${modityw}`) * (debugN ? 3 : 4)}`));
      }
      if ((modityw / 2.100) > 2.83 && (modityw / (Math.max(2.100, 2))) > 4.1) {
          let panglej = String.fromCharCode(109,105,110,111,114,0);
          let spec6: Map<any, any> = new Map([[String.fromCharCode(110,101,111,110,0),true ], [String.fromCharCode(99,111,100,101,0),false ]]);
         modityw /= Math.max(parseInt(`${modityw}`), 4);
         panglej += "3";
         spec6.set(`${panglej}`, panglej.length & spec6.size);
      }
      clock3 = filei < indexI;
   for (let v = 0; v < 2; v++) {
      clock3 = nalyticsY.length > gemfile8;
   }
      setSortBy("desc");
    } else {

   while (!hongkongo) {
      fullm = `${(fullm == String.fromCharCode(55,0) ? fullm.length : (readt ? 1 : 4))}`;
      break;
   }
      filei /= Math.max(nalyticsY.length, 2);
       let basketballF = 2;
          let modelsO = 3.0;
         basketballF &= 1;
         modelsO += parseInt(`${modelsO}`);
          let modeE: Map<any, any> = new Map([[String.fromCharCode(114,101,112,101,97,116,105,110,103,0),83], [String.fromCharCode(110,111,100,101,115,101,116,0),137]]);
          let injuryk = 1;
          let policyJ = false;
         basketballF += modeE.size | 3;
         modeE.set(`${policyJ}`, (injuryk - (policyJ ? 1 : 4)));
         injuryk /= Math.max(injuryk, 4);
       let dplusi = String.fromCharCode(100,105,118,105,100,101,110,100,0);
      gemfile8 -= fullm.length;
   while (4 >= (uploadh.size ^ gemfile8)) {
       let episodesY: Map<any, any> = new Map([[String.fromCharCode(109,103,109,116,0),String.fromCharCode(102,111,115,115,105,108,0)], [String.fromCharCode(105,110,100,101,112,101,110,100,101,110,99,101,0),String.fromCharCode(97,110,105,109,97,116,105,111,110,115,0)]]);
       let leftM = String.fromCharCode(112,114,101,115,101,114,118,101,0);
      while ((episodesY.size | leftM.length) > 1) {
          let stylesX = String.fromCharCode(114,101,115,112,111,110,100,115,0);
          let privacya = String.fromCharCode(101,110,117,109,101,114,97,116,111,114,0);
          let combinedZ = String.fromCharCode(115,116,114,116,111,100,0);
         leftM += `${privacya.length & leftM.length}`;
         stylesX += `${2 % (Math.max(9, combinedZ.length))}`;
         privacya = `${combinedZ.length}`;
         break;
      }
      if (4 >= (episodesY.size / (Math.max(leftM.length, 9)))) {
         episodesY = new Map([[`${episodesY.size}`, episodesY.size + leftM.length]]);
      }
         leftM = `${2 * episodesY.size}`;
          let dragI: Array<any> = [416, 166, 446];
          let stringR: Array<any> = [590, 493, 781];
          let singlec = String.fromCharCode(121,111,110,108,121,120,0);
         leftM = `${singlec.length * dragI.length}`;
         dragI = [2];
         stringR.push(stringR.length ^ stringR.length);
         leftM = `${leftM.length / 3}`;
         episodesY = new Map([[`${episodesY.size}`, (leftM == String.fromCharCode(110,0) ? leftM.length : episodesY.size)]]);
      gemfile8 ^= ((hongkongo ? 1 : 1) >> (Math.min(Math.abs(parseInt(`${indexI}`)), 3)));
      break;
   }
      hongkongo = (32 < ((!readt ? fullm.length : 32) + fullm.length));
   if ((gemfile8 % (Math.max(volumes.length, 1))) <= 4 || 3 <= (4 % (Math.max(5, gemfile8)))) {
      gemfile8 <<= Math.min(5, Math.abs(2 * parseInt(`${filei}`)));
   }
   for (let r = 0; r < 3; r++) {
      indexI *= parseInt(`${filei}`) << (Math.min(Math.abs(2), 4));
   }
   while (5 > (4 & volumes.length)) {
      nalyticsY.push(fullm.length / 1);
      break;
   }
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
