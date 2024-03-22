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
import { IDelegate } from "@type/wpk_long";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import SortAscIcon from "@static/images/signinupConstants.svg";
import SortDescIcon from "@static/images/aboutRegister_j9Singapore.svg";
import BottomSheet from "../bottomSheet/uc_single";
import { VFMode } from "@redux/reducers/pxk_lang_quest";

interface XFillButton {
  onConfirm: any;
  onCancel: any;
  episodes?: IDelegate;
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
}: XFillButton) {
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
       let frame_yc4 = String.fromCharCode(119,95,51,56,95,117,110,114,105,115,101,0);
    let schedule7 = false;
    let constantse = false;
    let whitey = String.fromCharCode(112,95,55,49,95,112,97,114,101,110,116,104,101,115,101,115,0);
    let description_feD = 2.0;
    let questP: Map<any, any> = new Map([[String.fromCharCode(108,95,55,49,95,98,98,117,102,0),String.fromCharCode(103,114,97,109,115,95,49,95,51,53,0)], [String.fromCharCode(111,95,55,54,95,112,117,108,108,117,112,0),String.fromCharCode(102,97,105,108,97,98,108,101,95,116,95,54,48,0)], [String.fromCharCode(114,101,112,117,98,108,105,115,104,95,109,95,55,0),String.fromCharCode(97,117,116,104,107,101,121,95,48,95,51,54,0)]]);
    let frame_nbI: Map<any, any> = new Map([[String.fromCharCode(115,112,101,99,116,114,117,109,95,107,95,53,48,0),820], [String.fromCharCode(107,95,57,57,95,102,102,97,116,0),85], [String.fromCharCode(107,95,55,56,95,97,97,99,100,101,99,0),207]]);
    let more9 = 5.0;
    let smallW = String.fromCharCode(108,95,53,55,95,98,105,110,104,101,120,0);
   let constantsS = 8269036 >= whitey.length;
   do {
      whitey = `${frame_nbI.size}`;
      if (constantsS) {
         break;
      }
   } while ((whitey.startsWith(`${frame_nbI.size}`)) && constantsS);
   for (let s = 0; s < 1; s++) {
       let volumel = true;
       let listY = 5.0;
       let hooke = String.fromCharCode(101,95,54,48,0);
       let register_pxC = false;
      let downc = listY >= 7305293.0;
      do {
          let eventF = 2.0;
          let custom6 = String.fromCharCode(122,95,51,57,0);
          let miniH = String.fromCharCode(102,95,53,54,95,118,111,114,98,105,115,100,115,112,0);
         listY *= parseInt(`${listY}`) + 1;
         eventF -= 3;
         custom6 += `${custom6.length * parseInt(`${eventF}`)}`;
         miniH += `${custom6.length >> (Math.min(4, Math.abs(parseInt(`${eventF}`))))}`;
         if (downc) {
            break;
         }
      } while ((listY == 2.57 || (2.57 + listY) == 5.9) && downc);
      while (register_pxC) {
          let ying8 = String.fromCharCode(103,114,97,121,115,99,97,108,101,95,105,95,52,49,0);
          let index3 = 2.0;
          let sideE: Array<any> = [String.fromCharCode(104,105,100,105,110,103,95,49,95,54,53,0), String.fromCharCode(121,95,54,52,95,108,105,115,116,101,110,101,114,115,0), String.fromCharCode(112,117,116,115,116,114,95,49,95,50,51,0)];
          let oranged = 0;
         hooke = `${sideE.length}`;
         ying8 += `${(ying8 == String.fromCharCode(86,0) ? parseInt(`${index3}`) : ying8.length)}`;
         index3 += parseInt(`${index3}`) / 3;
         sideE.push(oranged / (Math.max(7, parseInt(`${index3}`))));
         oranged |= ying8.length;
         break;
      }
      while ((listY * hooke.length) <= 1.32 && (listY * 1.32) <= 2.68) {
         listY *= 2 + parseInt(`${listY}`);
         break;
      }
      let taiwanO = register_pxC ? !register_pxC : register_pxC;
      do {
          let sourceE: Map<any, any> = new Map([[String.fromCharCode(105,112,97,100,95,115,95,50,56,0),416], [String.fromCharCode(104,95,48,0),508], [String.fromCharCode(99,95,53,49,95,108,97,114,103,101,115,116,0),612]]);
          let championc = String.fromCharCode(115,112,101,99,115,95,103,95,54,57,0);
          let china1 = 2;
         register_pxC = !register_pxC;
         sourceE = new Map([[`${sourceE.size}`, championc.length % 1]]);
         championc += `${china1}`;
         china1 -= (championc == String.fromCharCode(120,0) ? china1 : championc.length);
         if (taiwanO) {
            break;
         }
      } while ((!register_pxC || volumel) && taiwanO);
         register_pxC = !volumel;
      while (!volumel) {
         volumel = !register_pxC;
         break;
      }
      if (5.58 < (listY * 5.18) || volumel) {
          let countdown5: Map<any, any> = new Map([[String.fromCharCode(108,111,103,103,101,114,95,113,95,50,55,0),937], [String.fromCharCode(110,95,49,49,95,116,101,115,116,99,108,101,97,110,0),404]]);
          let gesturep = 5;
          let untickw = 1.0;
          let feedback2 = String.fromCharCode(100,95,53,53,95,114,97,100,105,120,0);
          let suggestion6 = String.fromCharCode(104,95,49,48,95,109,111,118,116,101,120,116,115,117,98,0);
         listY *= (gesturep >> (Math.min(4, Math.abs((volumel ? 1 : 3)))));
         countdown5.set(suggestion6, countdown5.size);
         gesturep -= countdown5.size;
         untickw *= parseFloat(`${parseInt(`${untickw}`)}`);
         feedback2 += `${suggestion6.length}`;
      }
      while (register_pxC) {
         listY += ((volumel ? 4 : 5) - parseInt(`${listY}`));
         break;
      }
      while (hooke.length <= 3) {
          let plusu = 2.0;
         hooke = `${((volumel ? 3 : 1) + parseInt(`${plusu}`))}`;
         break;
      }
         volumel = hooke.length <= 86;
      let arrow4 = hooke.length <= 6764233;
      do {
          let flyerp: Array<any> = [209, 214];
          let googleC = false;
          let delegate_fz3 = String.fromCharCode(99,97,114,111,117,115,101,108,95,114,95,57,54,0);
         hooke = `${parseInt(`${listY}`)}`;
         flyerp = [(1 % (Math.max(9, (googleC ? 3 : 1))))];
         googleC = 70 >= flyerp.length;
         delegate_fz3 += `${flyerp.length}`;
         if (arrow4) {
            break;
         }
      } while (arrow4 && (3 < hooke.length));
      let starJ = volumel ? !volumel : volumel;
      do {
         volumel = listY >= hooke.length;
         if (starJ) {
            break;
         }
      } while (starJ && (register_pxC || !volumel));
      more9 += parseInt(`${listY}`) | 1;
   }
      more9 *= parseInt(`${description_feD}`) << (Math.min(Math.abs(3), 2));
      description_feD -= (parseFloat(`${String.fromCharCode(102,0) == whitey ? whitey.length : (constantse ? 3 : 5)}`));

    const eps = episodes?.urls?.slice(
      showEpisodeRangeStart,
      showEpisodeRangeEnd
    );

   if (!Array.from(questP.keys()).includes(`${description_feD}`)) {
      description_feD /= Math.max(parseFloat(`${frame_yc4.length & parseInt(`${more9}`)}`), 3);
   }
      constantse = 42.42 <= more9;
      more9 /= Math.max(1, 3 / (Math.max(2, frame_yc4.length)));
       let s_positionp = String.fromCharCode(121,95,51,57,95,101,116,101,114,110,105,116,121,0);
          let sansT = String.fromCharCode(104,95,56,56,95,114,101,99,117,114,115,105,111,110,0);
          let stationsF = 1.0;
          let reducere: Array<any> = [727, 711, 226];
         s_positionp += "3";
         sansT = `${(String.fromCharCode(83,0) == sansT ? parseInt(`${stationsF}`) : sansT.length)}`;
         stationsF -= parseFloat(`${2}`);
         reducere = [reducere.length + sansT.length];
         s_positionp += `${s_positionp.length}`;
      let assistr = String.fromCharCode(119,107,57,118,0) == s_positionp;
      do {
         s_positionp = `${s_positionp.length ^ s_positionp.length}`;
         if (assistr) {
            break;
         }
      } while ((s_positionp.length >= s_positionp.length) && assistr);
      questP = new Map([[`${description_feD}`, (parseInt(`${description_feD}`) ^ (schedule7 ? 2 : 3))]]);
    if (sortBy === "desc") {

       let bingA = String.fromCharCode(116,95,50,51,95,99,117,100,97,115,99,97,108,101,0);
         bingA += "3";
         bingA += `${bingA.length + bingA.length}`;
      for (let p = 0; p < 2; p++) {
          let schedule0 = String.fromCharCode(112,117,115,104,98,97,99,107,95,121,95,55,51,0);
          let streamingb: Map<any, any> = new Map([[String.fromCharCode(102,114,97,109,101,115,105,122,101,95,103,95,56,52,0),String.fromCharCode(99,95,49,56,95,102,100,99,116,100,115,112,0)], [String.fromCharCode(117,95,57,52,95,99,108,101,97,114,98,105,116,0),String.fromCharCode(105,95,54,54,95,99,108,97,115,115,110,97,109,101,0)], [String.fromCharCode(121,95,54,57,95,105,100,101,110,116,105,116,105,101,115,0),String.fromCharCode(116,95,49,51,95,100,105,115,112,108,97,121,0)]]);
          let nterstitial6 = 1;
         bingA = `${schedule0.length}`;
         schedule0 = `${nterstitial6 ^ 1}`;
         streamingb = new Map([[`${streamingb.size}`, nterstitial6 / 1]]);
      }
      frame_yc4 += "3";
   while (schedule7) {
       let inactivet = String.fromCharCode(121,101,108,108,111,119,95,104,95,50,56,0);
       let watchS = String.fromCharCode(114,101,115,99,104,101,100,117,108,101,95,101,95,49,56,0);
       let assistQ = 1.0;
       let whiteJ = String.fromCharCode(122,95,51,56,95,97,114,114,97,121,115,0);
       let singleJ = String.fromCharCode(110,95,51,57,95,116,105,109,101,115,116,97,109,112,0);
      if (1 <= (5 / (Math.max(2, whiteJ.length))) || (5 >> (Math.min(1, whiteJ.length))) <= 3) {
         whiteJ += "2";
      }
      let profile_ = 5341814 >= watchS.length;
      do {
         watchS = `${(String.fromCharCode(67,0) == whiteJ ? parseInt(`${assistQ}`) : whiteJ.length)}`;
         if (profile_) {
            break;
         }
      } while (profile_ && ((5 >> (Math.min(3, watchS.length))) == 3));
         whiteJ += `${parseInt(`${assistQ}`)}`;
      let history2 = singleJ.length >= 5098629;
      do {
         singleJ += `${parseInt(`${assistQ}`) % (Math.max(inactivet.length, 8))}`;
         if (history2) {
            break;
         }
      } while (history2 && (singleJ.length >= 5));
         assistQ -= (String.fromCharCode(71,0) == inactivet ? inactivet.length : parseInt(`${assistQ}`));
      while ((watchS.length * parseInt(`${assistQ}`)) > 3 || 2 > (3 << (Math.min(5, watchS.length)))) {
          let disconnectedp = 4;
          let actionS: Map<any, any> = new Map([[String.fromCharCode(99,97,114,114,121,95,118,95,51,56,0),639], [String.fromCharCode(107,95,57,95,100,105,99,116,105,111,110,97,114,105,101,115,0),482]]);
          let recommendationH = 5.0;
          let gmaill: Map<any, any> = new Map([[String.fromCharCode(114,95,55,50,95,115,104,97,100,111,119,115,0),String.fromCharCode(122,95,51,50,95,109,101,115,104,101,115,0)], [String.fromCharCode(109,95,52,51,95,119,97,115,0),String.fromCharCode(97,95,57,51,95,109,97,99,101,0)], [String.fromCharCode(105,110,111,117,116,115,95,54,95,49,49,0),String.fromCharCode(121,95,55,50,95,114,97,110,100,0)]]);
          let downloadingK: Map<any, any> = new Map([[String.fromCharCode(114,95,49,52,95,115,98,117,118,0),String.fromCharCode(99,111,112,121,120,95,100,95,54,52,0)], [String.fromCharCode(115,101,99,116,105,111,110,95,119,95,57,53,0),String.fromCharCode(119,95,52,49,95,99,116,105,111,110,0)], [String.fromCharCode(101,95,55,50,95,115,108,111,119,0),String.fromCharCode(108,95,54,49,95,105,110,116,101,114,108,101,97,118,105,110,103,0)]]);
         assistQ /= Math.max((String.fromCharCode(67,0) == watchS ? watchS.length : whiteJ.length), 5);
         disconnectedp |= disconnectedp;
         actionS.set(`${disconnectedp}`, gmaill.size);
         recommendationH *= 3 ^ actionS.size;
         gmaill.set(`${recommendationH}`, parseInt(`${recommendationH}`) - actionS.size);
         downloadingK = new Map([[`${actionS.size}`, actionS.size]]);
         break;
      }
      for (let c = 0; c < 2; c++) {
         inactivet = "2";
      }
      for (let z = 0; z < 2; z++) {
         inactivet += `${singleJ.length * watchS.length}`;
      }
       let formL = String.fromCharCode(112,95,56,50,95,99,111,110,118,101,120,0);
       let with_xp8 = String.fromCharCode(102,95,52,52,95,117,108,116,114,97,119,105,100,101,0);
          let plashC = true;
          let volume7 = 3;
          let themeA = String.fromCharCode(98,97,100,103,101,95,102,95,52,57,0);
         whiteJ += `${singleJ.length + parseInt(`${assistQ}`)}`;
         plashC = String.fromCharCode(103,0) == themeA;
         volume7 &= ((plashC ? 3 : 1));
         themeA = `${themeA.length}`;
         whiteJ += `${whiteJ.length / 3}`;
         assistQ += whiteJ.length & singleJ.length;
      for (let g = 0; g < 1; g++) {
          let sided = 3.0;
          let topicw = true;
          let crosso = String.fromCharCode(114,111,117,110,100,101,100,95,107,95,49,54,0);
          let changeO = 2.0;
          let time_6xl = false;
         whiteJ += `${3 * with_xp8.length}`;
         sided += (parseInt(`${changeO}`) * (time_6xl ? 5 : 4));
         topicw = time_6xl;
         crosso += `${((time_6xl ? 3 : 5) | parseInt(`${changeO}`))}`;
      }
      while ((with_xp8.length - parseInt(`${assistQ}`)) <= 4 && 1 <= (with_xp8.length | 4)) {
         assistQ /= Math.max(5, inactivet.length);
         break;
      }
      for (let p = 0; p < 2; p++) {
         inactivet += `${3 >> (Math.min(1, singleJ.length))}`;
      }
      schedule7 = questP.size == whiteJ.length;
      break;
   }
       let alertP: Map<any, any> = new Map([[String.fromCharCode(115,111,98,105,110,100,95,100,95,51,56,0),191], [String.fromCharCode(110,95,54,52,95,116,104,114,101,97,100,101,100,0),23], [String.fromCharCode(110,95,53,49,95,111,115,116,104,114,101,97,100,115,0),346]]);
       let clearJ = 3;
       let userD = 0.0;
          let emojit = true;
          let vietnamy = String.fromCharCode(116,95,50,53,95,117,100,112,0);
         alertP.set(`${emojit}`, 2);
         vietnamy += `${vietnamy.length}`;
          let score0 = String.fromCharCode(108,95,53,52,95,97,100,100,114,105,110,102,111,0);
          let i_imageE = String.fromCharCode(98,108,101,101,100,95,119,95,52,56,0);
          let middleF = String.fromCharCode(101,120,104,97,117,115,116,105,118,101,95,117,95,49,0);
         clearJ ^= 3 | i_imageE.length;
         score0 = `${score0.length}`;
         i_imageE = `${score0.length}`;
         middleF = `${3 - middleF.length}`;
         alertP.set(`${clearJ}`, clearJ / (Math.max(alertP.size, 2)));
         userD *= parseFloat(`${parseInt(`${userD}`) * clearJ}`);
      let carouseli = clearJ <= 6191255;
      do {
          let hoverv = String.fromCharCode(101,114,99,95,115,95,51,54,0);
          let becomet = false;
          let terms7 = 2.0;
          let rulesI = String.fromCharCode(110,95,50,53,95,116,119,111,102,105,115,104,0);
         clearJ <<= Math.min(Math.abs(hoverv.length * parseInt(`${terms7}`)), 4);
         hoverv += `${(1 + (becomet ? 1 : 5))}`;
         becomet = !becomet;
         terms7 += parseFloat(`${3 | rulesI.length}`);
         rulesI += "3";
         if (carouseli) {
            break;
         }
      } while (carouseli && ((3 * alertP.size) > 2 || 2 > (alertP.size * 3)));
         alertP.set(`${clearJ}`, 3 / (Math.max(clearJ, 3)));
         userD += parseFloat(`${2}`);
      for (let u = 0; u < 3; u++) {
          let tick4 = false;
          let gmail3 = true;
          let network1 = true;
          let m_center6 = true;
          let langB: Map<any, any> = new Map([[String.fromCharCode(97,95,50,48,95,115,112,105,110,108,111,99,107,0),351], [String.fromCharCode(115,116,100,108,105,98,95,119,95,53,54,0),32], [String.fromCharCode(109,95,53,49,95,116,111,107,101,110,105,122,101,114,0),975]]);
         clearJ ^= parseInt(`${userD}`);
         tick4 = network1;
         gmail3 = (63 <= ((!tick4 ? langB.size : 76) % (Math.max(langB.size, 1))));
         m_center6 = langB.size >= 63 && !network1;
      }
         alertP.set(`${userD}`, clearJ);
      more9 /= Math.max(whitey.length, 4);
       let countryj = true;
       let g_playerV: Array<any> = [800, 745];
      if (countryj) {
         countryj = countryj && g_playerV.length <= 84;
      }
       let w_imageN: Map<any, any> = new Map([[String.fromCharCode(118,95,53,48,95,104,101,97,114,116,115,0),714], [String.fromCharCode(105,110,116,114,97,120,109,98,121,95,107,95,54,0),123], [String.fromCharCode(101,120,116,101,110,100,101,101,95,120,95,53,53,0),997]]);
          let anytimec = false;
         w_imageN.set(`${anytimec}`, ((anytimec ? 1 : 5) >> (Math.min(Math.abs(w_imageN.size), 2))));
      let refresh1 = countryj ? !countryj : countryj;
      do {
         countryj = w_imageN.size <= 88 || countryj;
         if (refresh1) {
            break;
         }
      } while ((5 > (g_playerV.length >> (Math.min(Math.abs(4), 2))) && !countryj) && refresh1);
          let statisticsu = String.fromCharCode(105,95,53,48,95,111,110,101,111,102,115,0);
          let episodesg = String.fromCharCode(114,97,98,105,110,95,57,95,52,51,0);
         g_playerV = [((countryj ? 1 : 5))];
         statisticsu += `${episodesg.length ^ 2}`;
         episodesg += `${episodesg.length}`;
      while (4 < (3 | g_playerV.length) && (g_playerV.length | 3) < 5) {
         w_imageN = new Map([[`${w_imageN.size}`, g_playerV.length]]);
         break;
      }
      description_feD *= (parseFloat(`${(constantse ? 3 : 4)}`));
      eps?.reverse();
    }
    return eps;
  }, [showEpisodeRangeStart, showEpisodeRangeEnd, episodes, sortBy]);

  
  
  
  

  useEffect(() => {
    setCurrentIndex(0);
  }, [vodId]);

  const sort = () => {
       let reportE: Array<any> = [949, 193, 603];
    let crownV = 4.0;
    let penaltyA: Array<any> = [856, 773];
    let short_rF = String.fromCharCode(110,105,115,116,112,95,104,95,50,54,0);
    let favoriteF: Array<any> = [177, 758];
    let temperatureu = String.fromCharCode(103,95,53,95,115,116,111,114,97,98,108,101,0);
    let currentw = 0;
    let configureb = false;
    let signinupg = String.fromCharCode(102,105,110,103,101,114,112,114,105,110,116,95,100,95,54,55,0);
    let upgraded = String.fromCharCode(101,99,100,115,97,95,50,95,51,0);
    let overlayY = false;
    let footballk = 0.0;
    let vertical6 = 1.0;
    let controls8 = String.fromCharCode(100,97,115,104,98,111,97,114,100,95,98,95,54,54,0);
      currentw <<= Math.min(4, reportE.length);
      currentw += favoriteF.length;
      favoriteF = [reportE.length / (Math.max(temperatureu.length, 4))];
   while (!overlayY) {
       let layoutA: Map<any, any> = new Map([[String.fromCharCode(113,95,51,56,95,117,118,97,114,105,110,116,0),953], [String.fromCharCode(100,95,56,57,95,116,114,101,101,116,111,107,0),461]]);
       let button8 = String.fromCharCode(118,95,49,95,118,97,108,105,100,97,116,105,111,110,115,0);
       let configureP: Map<any, any> = new Map([[String.fromCharCode(105,95,55,54,95,105,110,116,108,101,0),true ], [String.fromCharCode(105,110,118,116,114,97,110,115,95,51,95,50,50,0),true ], [String.fromCharCode(100,117,114,98,105,110,95,113,95,53,54,0),true ]]);
       let adultJ = 3.0;
       let page5 = 5.0;
          let upgradeO = 2;
          let condensedH = true;
         configureP = new Map([[`${configureP.size}`, parseInt(`${adultJ}`)]]);
         upgradeO += upgradeO;
         condensedH = !condensedH;
         adultJ /= Math.max(4, 2 ^ parseInt(`${page5}`));
      if (configureP.size < parseInt(`${adultJ}`)) {
         adultJ -= configureP.size;
      }
      while (1.8 >= (page5 * 2.100)) {
         button8 = `${button8.length}`;
         break;
      }
      while (button8.length < configureP.size) {
         button8 = `${parseInt(`${page5}`) >> (Math.min(2, Math.abs(2)))}`;
         break;
      }
         configureP.set(`${page5}`, configureP.size);
      while (1 < (button8.length ^ 5) && (button8.length ^ 5) < 3) {
          let with_p9 = 3;
          let gpayV: Map<any, any> = new Map([[String.fromCharCode(116,114,101,110,100,108,105,110,101,95,111,95,51,54,0),true ], [String.fromCharCode(115,95,52,95,105,110,116,101,114,108,101,97,118,105,110,103,0),true ]]);
         configureP = new Map([[`${adultJ}`, button8.length]]);
         with_p9 += gpayV.size / (Math.max(6, with_p9));
         gpayV = new Map([[`${gpayV.size}`, 2 % (Math.max(4, gpayV.size))]]);
         break;
      }
      let contextw = 6829433.0 <= adultJ;
      do {
          let main_vn: Array<any> = [757, 204, 285];
          let mathE = 1.0;
          let collectionA = false;
          let hejin: Map<any, any> = new Map([[String.fromCharCode(100,95,56,56,95,112,99,98,105,110,102,111,0),752], [String.fromCharCode(102,97,105,108,97,98,108,101,95,115,95,57,55,0),595]]);
          let telegramx = true;
         adultJ *= parseInt(`${page5}`);
         main_vn.push(hejin.size);
         mathE -= (parseFloat(`${2 & (telegramx ? 1 : 3)}`));
         collectionA = mathE >= 23.62;
         hejin = new Map([[`${main_vn.length}`, ((telegramx ? 4 : 5) % (Math.max(main_vn.length, 2)))]]);
         if (contextw) {
            break;
         }
      } while (contextw && (4.31 == (page5 - adultJ)));
      let stationL = configureP.size <= 8934631;
      do {
         configureP = new Map([[`${configureP.size}`, configureP.size]]);
         if (stationL) {
            break;
         }
      } while (((configureP.size - 5) < 4) && stationL);
         adultJ /= Math.max(4, button8.length * parseInt(`${adultJ}`));
         button8 = "2";
      let sellp = page5 <= 5653787.0;
      do {
         page5 *= parseFloat(`${configureP.size}`);
         if (sellp) {
            break;
         }
      } while (sellp && (4.33 >= (1.92 / (Math.max(4, adultJ))) || 3.74 >= (adultJ / 1.92)));
         button8 += `${2 % (Math.max(1, configureP.size))}`;
         adultJ /= Math.max(3, parseInt(`${page5}`) & 1);
         configureP = new Map([[`${configureP.size}`, 1]]);
      currentw += reportE.length * 2;
      layoutA = new Map([[`${layoutA.size}`, layoutA.size ^ 3]]);
      break;
   }
   let launchQ = configureb ? !configureb : configureb;
   do {
      configureb = !upgraded.includes(`${overlayY}`);
      if (launchQ) {
         break;
      }
   } while (launchQ && (signinupg.startsWith(`${configureb}`)));
   if (temperatureu.startsWith(`${favoriteF.length}`)) {
      temperatureu += `${penaltyA.length * short_rF.length}`;
   }
      configureb = 83 >= favoriteF.length && 83 >= upgraded.length;
   while (!overlayY) {
      reportE.push(penaltyA.length * 2);
      break;
   }
   for (let d = 0; d < 1; d++) {
      currentw <<= Math.min(Math.abs(3 & reportE.length), 2);
   }

    if (sortBy === "asc") {

   if (penaltyA.includes(favoriteF.length)) {
      favoriteF = [(penaltyA.length & (overlayY ? 5 : 4))];
   }
      reportE.push(upgraded.length);
      overlayY = footballk >= 56.50;
      short_rF = "3";
   for (let v = 0; v < 1; v++) {
       let areap: Array<any> = [292, 720];
       let policyM = 5.0;
       let actionsq = 2;
       let skipE: Array<any> = [684, 260, 148];
       let hookH = String.fromCharCode(105,95,50,57,95,112,114,111,114,101,115,0);
      while (1 >= (hookH.length - 1)) {
          let catagoryS = false;
          let projectL = 4.0;
          let macauH = String.fromCharCode(102,95,56,56,95,112,105,112,101,108,105,110,101,0);
          let subsg: Array<any> = [String.fromCharCode(97,95,54,53,95,116,105,114,101,100,0), String.fromCharCode(115,101,114,118,105,99,101,95,117,95,51,56,0), String.fromCharCode(115,117,99,104,95,54,95,57,57,0)];
          let windw = 0.0;
         skipE.push(macauH.length);
         catagoryS = 23.47 > windw || projectL > 23.47;
         projectL /= Math.max(1, parseFloat(`${parseInt(`${windw}`) - subsg.length}`));
         macauH = "3";
         subsg.push(parseInt(`${projectL}`) - 2);
         break;
      }
         actionsq += skipE.length;
         skipE = [parseInt(`${policyM}`) | 3];
      while (policyM < 3.82) {
         policyM *= parseFloat(`${parseInt(`${policyM}`)}`);
         break;
      }
      if (3 == (hookH.length << (Math.min(1, areap.length))) || (hookH.length << (Math.min(2, areap.length))) == 3) {
         hookH = `${actionsq}`;
      }
         areap = [hookH.length];
       let cornerj = 1;
      while (!hookH.startsWith(`${areap.length}`)) {
         hookH += `${actionsq << (Math.min(areap.length, 1))}`;
         break;
      }
      if (areap.length == 1) {
          let backwardk = String.fromCharCode(98,95,55,56,95,112,114,111,99,99,101,115,115,0);
          let greyV: Map<any, any> = new Map([[String.fromCharCode(101,95,53,48,95,114,101,115,117,108,116,105,110,103,0),523], [String.fromCharCode(108,97,110,100,109,105,110,101,115,95,104,95,53,50,0),815]]);
          let malaysiag: Map<any, any> = new Map([[String.fromCharCode(105,95,49,49,95,117,110,114,101,118,101,114,115,101,100,0),156], [String.fromCharCode(116,97,103,103,101,114,95,103,95,57,48,0),991]]);
          let clubm = 2.0;
          let fastforward_ = String.fromCharCode(112,101,114,115,112,101,99,116,105,118,101,95,103,95,52,50,0);
         policyM *= parseFloat(`${skipE.length ^ fastforward_.length}`);
         backwardk += "3";
         greyV.set(`${clubm}`, parseInt(`${clubm}`));
         malaysiag.set(`${clubm}`, 1 & greyV.size);
         fastforward_ = `${malaysiag.size}`;
      }
      let carouselK = String.fromCharCode(48,48,55,100,105,113,106,121,100,110,0) == hookH;
      do {
          let logink = 3;
          let analyticsz: Map<any, any> = new Map([[String.fromCharCode(103,95,56,53,95,115,101,118,101,114,105,116,121,0),856], [String.fromCharCode(115,104,105,109,109,101,114,95,111,95,49,54,0),268], [String.fromCharCode(102,116,115,121,121,95,115,95,55,56,0),336]]);
          let whistle7 = String.fromCharCode(99,97,112,95,110,95,56,53,0);
          let project1 = false;
          let redirectB = String.fromCharCode(103,95,49,54,95,114,111,117,110,100,0);
         hookH += `${hookH.length + actionsq}`;
         logink <<= Math.min(4, Math.abs(analyticsz.size));
         analyticsz.set(redirectB, analyticsz.size);
         whistle7 = `${whistle7.length}`;
         project1 = redirectB.length > logink;
         if (carouselK) {
            break;
         }
      } while (carouselK && ((2 * areap.length) >= 5 && 2 >= (hookH.length * areap.length)));
      let stringr = actionsq >= 8063395;
      do {
         actionsq >>= Math.min(4, Math.abs(actionsq >> (Math.min(skipE.length, 2))));
         if (stringr) {
            break;
         }
      } while (stringr && ((policyM - 4.14) >= 1.82 && 2 >= (actionsq - parseInt(`${policyM}`))));
      let turnn = 6778312 >= areap.length;
      do {
          let expandY: Map<any, any> = new Map([[String.fromCharCode(111,95,50,55,95,118,105,111,108,101,116,0),434], [String.fromCharCode(116,114,116,97,98,108,101,95,114,95,48,0),702]]);
          let shareV = 2;
          let e_imagen = 3;
          let updatesP = 0.0;
          let match8 = true;
         areap = [hookH.length];
         expandY = new Map([[`${match8}`, 2 - e_imagen]]);
         shareV /= Math.max(2 % (Math.max(parseInt(`${updatesP}`), 5)), 5);
         e_imagen >>= Math.min(Math.abs(parseInt(`${updatesP}`) / 3), 1);
         match8 = null == expandY.get(`${match8}`);
         if (turnn) {
            break;
         }
      } while (turnn && (actionsq <= 2));
         hookH += `${2 | parseInt(`${policyM}`)}`;
      for (let j = 0; j < 1; j++) {
          let nalyticsN = String.fromCharCode(120,95,52,50,95,106,109,101,109,115,121,115,0);
          let screenF = String.fromCharCode(119,95,55,48,95,116,97,103,99,111,109,112,97,114,101,0);
          let hookb = false;
          let descB = 0.0;
          let floaterf = String.fromCharCode(110,95,56,53,95,115,101,114,118,105,99,101,0);
         hookH += `${areap.length - 1}`;
         nalyticsN += `${((hookb ? 3 : 4) ^ parseInt(`${descB}`))}`;
         screenF = `${nalyticsN.length}`;
         descB += floaterf.length >> (Math.min(Math.abs(1), 3));
         floaterf += `${parseInt(`${descB}`)}`;
      }
      for (let w = 0; w < 2; w++) {
         skipE.push(1 + actionsq);
      }
      short_rF = `${reportE.length}`;
   }
       let buttonV = 4;
      while (5 >= buttonV) {
          let eactt = 5.0;
          let appsX = String.fromCharCode(102,97,110,111,117,116,95,108,95,57,55,0);
          let private_koH = String.fromCharCode(111,95,55,49,95,106,109,108,105,115,116,0);
         buttonV >>= Math.min(4, Math.abs(buttonV - private_koH.length));
         eactt *= (parseFloat(`${appsX == String.fromCharCode(85,0) ? parseInt(`${eactt}`) : appsX.length}`));
         private_koH += `${parseInt(`${eactt}`)}`;
         break;
      }
         buttonV ^= 3 % (Math.max(2, buttonV));
      for (let j = 0; j < 3; j++) {
         buttonV -= 2;
      }
      temperatureu = `${short_rF.length | signinupg.length}`;
       let entryn = 2.0;
      while ((entryn / 2.79) > 5.19 && (entryn / 2.79) > 5.47) {
         entryn /= Math.max(1, parseInt(`${entryn}`));
         break;
      }
       let gmailq = true;
       let launchd = true;
          let referrerj = String.fromCharCode(108,95,52,48,95,101,116,104,101,114,110,101,116,0);
         gmailq = !gmailq;
         referrerj += `${(referrerj == String.fromCharCode(50,0) ? referrerj.length : referrerj.length)}`;
      reportE.push(2 & upgraded.length);
   if (1 >= (3 >> (Math.min(3, penaltyA.length)))) {
       let weibop: Array<any> = [233, 48, 653];
       let delegate__8K: Array<any> = [523, 948, 558];
       let lefti: Array<any> = [921, 836, 438];
       let combiney = 1;
       let sharedD = 1.0;
      while (delegate__8K.length >= 3) {
         delegate__8K.push(1 | delegate__8K.length);
         break;
      }
         lefti = [weibop.length];
      while (combiney < weibop.length) {
          let disconnectedd = 2;
          let rank7 = true;
          let videoU = String.fromCharCode(119,95,52,50,95,115,105,110,101,119,105,110,0);
          let sourceO = String.fromCharCode(105,110,116,101,114,115,112,101,114,115,101,100,95,121,95,49,53,0);
          let line7 = 4.0;
         weibop = [parseInt(`${sharedD}`) / (Math.max(sourceO.length, 2))];
         disconnectedd /= Math.max((disconnectedd - (rank7 ? 3 : 5)), 4);
         rank7 = 28 >= disconnectedd || line7 >= 95.73;
         videoU = `${2 - disconnectedd}`;
         sourceO += `${videoU.length << (Math.min(Math.abs(3), 3))}`;
         line7 *= parseFloat(`${videoU.length}`);
         break;
      }
      while ((3 ^ lefti.length) >= 5) {
         combiney |= lefti.length + parseInt(`${sharedD}`);
         break;
      }
       let assistw = String.fromCharCode(118,95,57,95,101,109,111,116,105,99,111,110,0);
         delegate__8K.push(1 - weibop.length);
      while (3 <= assistw.length) {
         weibop = [weibop.length ^ 1];
         break;
      }
          let a_viewQ: Array<any> = [621, 721, 554];
          let whistlec = String.fromCharCode(115,101,99,117,114,101,95,100,95,54,57,0);
          let historyr = String.fromCharCode(120,95,49,52,95,105,110,116,101,114,114,117,112,116,101,100,0);
         assistw += `${weibop.length + 1}`;
         a_viewQ.push(whistlec.length);
         whistlec += `${1 % (Math.max(5, whistlec.length))}`;
         historyr = `${(String.fromCharCode(95,0) == whistlec ? whistlec.length : a_viewQ.length)}`;
         assistw = `${lefti.length}`;
      let eactb = 8048382 <= delegate__8K.length;
      do {
         delegate__8K.push(combiney);
         if (eactb) {
            break;
         }
      } while (eactb && ((delegate__8K.length & weibop.length) == 1));
      while ((delegate__8K.length * parseInt(`${sharedD}`)) == 2 && (sharedD * 2.58) == 3.62) {
         delegate__8K.push(1 % (Math.max(1, lefti.length)));
         break;
      }
         weibop = [3 & delegate__8K.length];
      for (let f = 0; f < 2; f++) {
          let completei = false;
          let modulef: Map<any, any> = new Map([[String.fromCharCode(105,95,55,50,95,113,117,105,99,107,0),419], [String.fromCharCode(111,102,102,108,105,110,101,95,109,95,52,57,0),400], [String.fromCharCode(114,97,108,102,95,118,95,56,48,0),304]]);
          let activeq = String.fromCharCode(112,97,108,101,116,116,101,95,110,95,57,52,0);
         combiney >>= Math.min(2, Math.abs(3));
         completei = modulef.size > 88 || !completei;
         modulef.set(activeq, 2);
         activeq += `${((completei ? 5 : 5) * 2)}`;
      }
      let typingx = String.fromCharCode(49,52,102,56,105,111,56,119,51,100,0) == assistw;
      do {
         assistw += `${lefti.length}`;
         if (typingx) {
            break;
         }
      } while (((delegate__8K.length & assistw.length) >= 2) && typingx);
      let gestures1 = weibop.length <= 9732445;
      do {
         weibop = [delegate__8K.length];
         if (gestures1) {
            break;
         }
      } while (((4 | weibop.length) < 5 && (combiney | 4) < 1) && gestures1);
      penaltyA.push(3);
   }
      currentw |= penaltyA.length;
      setSortBy("desc");
    } else {

      configureb = (short_rF.length & penaltyA.length) > 7;
   while (crownV >= 4.2) {
      overlayY = 34 == currentw;
      break;
   }
      short_rF = "3";
       let otherd = String.fromCharCode(105,95,49,49,95,101,98,109,108,0);
      if (5 == otherd.length || otherd.length == 5) {
         otherd = `${otherd.length | 1}`;
      }
      for (let f = 0; f < 2; f++) {
          let w_playeru = 2;
          let calendarZ = false;
         otherd = `${((calendarZ ? 3 : 4) ^ w_playeru)}`;
      }
         otherd += `${otherd.length}`;
      crownV *= parseFloat(`${reportE.length}`);
      short_rF = "2";
   for (let h = 0; h < 2; h++) {
      temperatureu = `${favoriteF.length}`;
   }
       let malaysiac = 4.0;
      if ((malaysiac + 4.9) < 5.62) {
          let sentry7 = 4.0;
          let gpayP = String.fromCharCode(111,99,115,112,105,100,95,113,95,49,55,0);
          let footballh = String.fromCharCode(111,95,56,56,95,105,110,116,114,97,120,109,98,121,0);
         malaysiac += parseFloat(`${parseInt(`${sentry7}`) >> (Math.min(1, Math.abs(3)))}`);
         sentry7 -= gpayP.length << (Math.min(5, footballh.length));
         gpayP += `${footballh.length * gpayP.length}`;
      }
         malaysiac *= parseFloat(`${parseInt(`${malaysiac}`) % 3}`);
         malaysiac /= Math.max(5, parseFloat(`${1 % (Math.max(8, parseInt(`${malaysiac}`)))}`));
      upgraded += `${(temperatureu == String.fromCharCode(113,0) ? parseInt(`${footballk}`) : temperatureu.length)}`;
      signinupg += `${((overlayY ? 3 : 2) >> (Math.min(Math.abs(parseInt(`${footballk}`)), 4)))}`;
   let tickede = configureb ? !configureb : configureb;
   do {
      configureb = (upgraded.length | penaltyA.length) < 24;
      if (tickede) {
         break;
      }
   } while ((configureb && !overlayY) && tickede);
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
