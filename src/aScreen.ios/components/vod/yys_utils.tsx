import React, { useState, useMemo, RefObject, memo, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { yys_Libreact, yys_GdtadvRoboto } from '@type/yys_libzeus';
import { FlatList, GestureHandlerRootView } from 'react-native-gesture-handler';
import SortAscIcon from '@static/images/mbsplashNterstitial.svg';
import SortDescIcon from '@static/images/expandAnalytics.svg';
interface yys_ConfigureUimanager {
    onConfirm: any,
    onCancel: any,
    episodes?: yys_Libreact
    activeEpisode?: number,
    rangeSize?: number
}
function VodEpisodeSelection({ onConfirm, onCancel, episodes, activeEpisode = 0, rangeSize = 50 }: yys_ConfigureUimanager) {
    const { colors, textVariants, spacing } = useTheme();
    const EPISODE_RANGE_SIZE = rangeSize;
    const [sortBy, setSortBy] = useState('asc');
    const ranges = [...Array(episodes?.url_count === undefined ? 0 : Math.ceil(episodes.url_count / EPISODE_RANGE_SIZE)).keys()]
        .map(
            x => `${x * EPISODE_RANGE_SIZE + 1}-${Math.min((x + 1) * EPISODE_RANGE_SIZE, episodes?.url_count === undefined ? (x + 1) * EPISODE_RANGE_SIZE - 1 : episodes?.url_count)
                }`
        );
    const [currentIndex, setCurrentIndex] = useState(Math.floor(activeEpisode / EPISODE_RANGE_SIZE));
    const showEpisodeRangeStart = useMemo(() => currentIndex * EPISODE_RANGE_SIZE, [activeEpisode, currentIndex]);
    const showEpisodeRangeEnd = useMemo(
        () => Math.min(showEpisodeRangeStart + EPISODE_RANGE_SIZE,
            episodes ? episodes.url_count : showEpisodeRangeStart + EPISODE_RANGE_SIZE),
        [episodes, showEpisodeRangeStart]
    );
    const displayEpisodes = useMemo(() => {
       let libreactj: Array<any> = [139, 881, 987];
    let final_buB = false;
    let sigmob5: Array<any> = [740, 612];
    let filedp = false;
    let hejiP = String.fromCharCode(98,95,52,50,95,101,110,99,114,121,112,116,101,100,0);
    let playlist2 = 0.0;
    let pressureG: Map<any, any> = new Map([[String.fromCharCode(103,114,97,100,105,101,110,116,95,106,95,55,56,0),774], [String.fromCharCode(97,109,114,119,98,95,117,95,53,55,0),942], [String.fromCharCode(113,95,55,55,95,103,102,109,117,108,0),470]]);
    let homeu = String.fromCharCode(115,101,113,117,101,110,99,101,95,103,95,49,56,0);
    let downloading3 = 4;
    let zhengpianM = 4;
    let rootH: Map<any, any> = new Map([[String.fromCharCode(97,108,116,101,114,110,97,116,105,118,101,95,120,95,53,48,0),836], [String.fromCharCode(98,108,111,99,107,115,99,97,110,95,116,95,55,53,0),506], [String.fromCharCode(108,97,116,101,110,99,121,95,115,95,51,49,0),704]]);
    let libturbomodulejsijniZ: Array<any> = [170, 753, 348];
    let templateprocessorZ = true;
    let string0 = false;
    let mintegralt = String.fromCharCode(98,97,115,101,110,97,109,101,95,48,95,50,48,0);
    let downloadingr = true;
    let mbbidv = String.fromCharCode(105,95,54,56,95,100,101,110,115,101,0);
    let chatv = 0;
    let zhengpiany = 3.0;
    let whatsappR = 5.0;
    let privilegef: Array<any> = [878, 366];
      libreactj = [(rootH.size ^ (final_buB ? 5 : 5))];
      libreactj.push(hejiP.length % 2);
   let stringsv = libturbomodulejsijniZ.length >= 9363416;
   do {
      libturbomodulejsijniZ = [3 % (Math.max(1, zhengpianM))];
      if (stringsv) {
         break;
      }
   } while ((2 <= libturbomodulejsijniZ.length) && stringsv);
   for (let c = 0; c < 1; c++) {
      playlist2 += 1;
   }
       let index_ = String.fromCharCode(98,97,115,101,95,112,95,55,54,0);
      if (index_.startsWith(`${index_.length}`)) {
         index_ = `${index_.length ^ 3}`;
      }
      if (3 < index_.length) {
          let pressureE = 3.0;
          let yellowD = false;
          let hiadD = String.fromCharCode(101,95,55,48,95,115,116,101,108,108,97,114,0);
          let singaporeL = 1;
          let datag = true;
         index_ += `${singaporeL}`;
         pressureE += (parseFloat(`${(datag ? 5 : 5) << (Math.min(Math.abs(parseInt(`${pressureE}`)), 4))}`));
         yellowD = !hiadD.includes(`${yellowD}`);
         hiadD = `${parseInt(`${pressureE}`) % 1}`;
         singaporeL &= 1;
      }
       let teamX = 2;
       let historyf = 5;
      final_buB = 92 >= libreactj.length;
       let neon8 = String.fromCharCode(102,95,56,52,95,108,111,99,107,0);
      if (4 <= neon8.length && 4 <= neon8.length) {
          let project3 = 2;
          let typingz = 1.0;
          let libloggerY = 4.0;
         neon8 += `${parseInt(`${typingz}`)}`;
         project3 -= project3;
         typingz /= Math.max(3, parseFloat(`${project3}`));
         libloggerY -= parseFloat(`${project3}`);
      }
      if (neon8 == String.fromCharCode(107,0) && 5 > neon8.length) {
          let scrollviewa = String.fromCharCode(117,95,54,54,95,115,105,103,110,117,109,0);
          let cleart = 5.0;
         neon8 += `${(scrollviewa == String.fromCharCode(101,0) ? parseInt(`${cleart}`) : scrollviewa.length)}`;
      }
          let humidityU = String.fromCharCode(108,111,99,97,116,105,111,110,95,50,95,50,53,0);
          let playp = 3;
         neon8 += `${humidityU.length}`;
         humidityU = `${3 % (Math.max(6, playp))}`;
         playp -= playp * playp;
      templateprocessorZ = libturbomodulejsijniZ.includes(string0);
   for (let l = 0; l < 1; l++) {
      downloading3 |= 1;
   }
      sigmob5.push(sigmob5.length);
       let turnu = String.fromCharCode(98,112,114,105,110,116,95,115,95,50,49,0);
       let leagueb: Map<any, any> = new Map([[String.fromCharCode(99,95,51,48,95,114,101,115,116,114,97,105,110,0),718], [String.fromCharCode(117,95,50,48,95,114,111,117,110,100,101,100,110,101,115,115,0),832]]);
       let typinga = String.fromCharCode(115,101,115,115,111,110,95,51,95,53,57,0);
      for (let x = 0; x < 1; x++) {
          let modulek = String.fromCharCode(108,105,115,116,95,119,95,54,51,0);
          let annerJ: Map<any, any> = new Map([[String.fromCharCode(107,101,121,108,101,110,95,115,95,53,56,0),false ], [String.fromCharCode(116,95,55,51,95,115,105,103,110,105,110,103,0),true ]]);
          let dragm = String.fromCharCode(105,95,51,50,95,116,104,114,111,119,105,110,103,0);
          let relatedU = 0.0;
         typinga += `${modulek.length >> (Math.min(1, Math.abs(annerJ.size)))}`;
         modulek = `${dragm.length << (Math.min(2, Math.abs(parseInt(`${relatedU}`))))}`;
         annerJ = new Map([[`${relatedU}`, (String.fromCharCode(106,0) == dragm ? parseInt(`${relatedU}`) : dragm.length)]]);
      }
         leagueb.set(turnu, (turnu == String.fromCharCode(50,0) ? turnu.length : leagueb.size));
      if (4 < (typinga.length << (Math.min(3, Math.abs(leagueb.size))))) {
         typinga = `${leagueb.size + typinga.length}`;
      }
      for (let t = 0; t < 2; t++) {
         typinga = `${typinga.length}`;
      }
      for (let z = 0; z < 1; z++) {
         typinga += `${leagueb.size / 2}`;
      }
      while (4 <= turnu.length) {
          let fieldr: Array<any> = [567, 653, 974];
         typinga = `${turnu.length & fieldr.length}`;
         break;
      }
      for (let i = 0; i < 1; i++) {
         typinga = `${typinga.length}`;
      }
         leagueb.set(`${turnu}`, turnu.length + leagueb.size);
      while ((leagueb.size | 4) == 1 && (typinga.length | 4) == 1) {
         typinga = "2";
         break;
      }
      downloading3 |= typinga.length;

        const eps = episodes?.urls.slice(showEpisodeRangeStart, showEpisodeRangeEnd);

   if (1.53 >= (1.55 - playlist2) || (1.55 - playlist2) >= 1.35) {
       let acceptedW: Array<any> = [String.fromCharCode(118,100,112,97,117,99,111,110,116,101,120,116,95,109,95,53,53,0), String.fromCharCode(100,105,103,105,116,115,95,116,95,56,50,0), String.fromCharCode(111,95,52,57,95,114,101,103,105,115,116,101,114,0)];
       let flyer0 = 1;
       let mimoC = String.fromCharCode(111,118,101,114,108,97,121,115,95,48,95,56,57,0);
       let acceptedb = 1;
         mimoC = `${acceptedb % 3}`;
       let selectX = 3.0;
       let plusO = 2.0;
          let matchesO: Array<any> = [103, 95, 67];
          let materialH = false;
          let sideb: Array<any> = [952, 893];
         flyer0 %= Math.max(4, 2);
         matchesO.push(3 ^ matchesO.length);
         materialH = (27 < (sideb.length ^ (materialH ? 27 : sideb.length)));
          let canvasJ: Map<any, any> = new Map([[String.fromCharCode(117,95,50,50,95,97,117,116,104,114,111,114,105,122,97,116,105,111,110,0),266], [String.fromCharCode(109,97,99,114,111,115,95,106,95,57,48,0),708]]);
         plusO -= 1;
         canvasJ.set(`${canvasJ.size}`, canvasJ.size / (Math.max(3, 10)));
         acceptedb /= Math.max(1 | flyer0, 4);
          let humidityD = 1.0;
          let reminder2 = String.fromCharCode(115,101,97,108,101,100,95,52,95,51,50,0);
         mimoC = `${parseInt(`${humidityD}`)}`;
         humidityD /= Math.max(1 % (Math.max(8, reminder2.length)), 1);
         reminder2 = `${reminder2.length}`;
         acceptedb ^= 3 >> (Math.min(Math.abs(parseInt(`${selectX}`)), 5));
      for (let h = 0; h < 2; h++) {
          let becomeF = 3.0;
          let recommendationr = String.fromCharCode(119,95,52,57,0);
         flyer0 >>= Math.min(4, Math.abs(acceptedW.length & 3));
         becomeF *= parseFloat(`${recommendationr.length}`);
         recommendationr += `${parseInt(`${becomeF}`) << (Math.min(recommendationr.length, 5))}`;
      }
      while (acceptedW.length == flyer0) {
          let completeG = true;
          let mbsplashg = String.fromCharCode(97,115,115,105,103,110,95,116,95,53,52,0);
         flyer0 /= Math.max(3 & acceptedb, 2);
         completeG = ((mbsplashg.length & (!completeG ? 89 : mbsplashg.length)) < 89);
         break;
      }
      let register_4G = 8489498.0 <= selectX;
      do {
         selectX /= Math.max(2 % (Math.max(4, flyer0)), 4);
         if (register_4G) {
            break;
         }
      } while (((acceptedb / (Math.max(selectX, 7))) >= 5.11) && register_4G);
         flyer0 &= mimoC.length * 3;
      let feedbackA = selectX >= 8866745.0;
      do {
          let trash5 = String.fromCharCode(100,105,115,116,114,97,99,116,97,98,108,101,95,118,95,51,54,0);
          let splashE: Array<any> = [467, 594, 130];
          let libturbomodulejsijniR: Array<any> = [909, 611, 472];
          let favoritel = 0.0;
          let invite7 = String.fromCharCode(112,105,112,101,108,105,110,101,95,101,95,52,50,0);
         selectX *= trash5.length ^ parseInt(`${plusO}`);
         trash5 = `${libturbomodulejsijniR.length}`;
         splashE.push(libturbomodulejsijniR.length);
         favoritel -= splashE.length & 1;
         invite7 = `${(invite7 == String.fromCharCode(66,0) ? invite7.length : libturbomodulejsijniR.length)}`;
         if (feedbackA) {
            break;
         }
      } while (((acceptedb << (Math.min(Math.abs(5), 4))) >= 3 && 5 >= (parseInt(`${selectX}`) + acceptedb)) && feedbackA);
      playlist2 *= 3;
   }
   let sigmobE = mintegralt.length >= 7405493;
   do {
      mintegralt += `${(1 + (templateprocessorZ ? 1 : 5))}`;
      if (sigmobE) {
         break;
      }
   } while (sigmobE && (1 >= (1 * mintegralt.length)));
      downloading3 -= ((filedp ? 2 : 4) + 2);
   for (let w = 0; w < 3; w++) {
      homeu += `${libreactj.length}`;
   }
       let trash3 = 3.0;
          let routerV = 1.0;
          let incidentH = true;
          let condensedQ = String.fromCharCode(122,95,54,57,95,115,105,122,101,108,101,115,115,0);
         trash3 /= Math.max(1, parseFloat(`${parseInt(`${trash3}`) - parseInt(`${routerV}`)}`));
         routerV += condensedQ.length;
         incidentH = (47 < (condensedQ.length | (incidentH ? 47 : condensedQ.length)));
      if (4.54 > (trash3 / (Math.max(2, 6)))) {
         trash3 /= Math.max(parseFloat(`${1}`), 5);
      }
      if ((5.86 + trash3) < 4.15) {
         trash3 *= parseFloat(`${2}`);
      }
      rootH.set(`${string0}`, mintegralt.length << (Math.min(Math.abs(2), 5)));
      zhengpianM -= libturbomodulejsijniZ.length / (Math.max(10, parseInt(`${playlist2}`)));
   for (let e = 0; e < 3; e++) {
      playlist2 -= (3 & (downloadingr ? 4 : 2));
   }
       let libffmpegkitA: Map<any, any> = new Map([[String.fromCharCode(104,105,103,104,108,105,103,104,116,115,95,112,95,54,48,0),87], [String.fromCharCode(120,95,51,53,95,112,114,111,102,105,108,105,110,103,0),900]]);
       let graph8: Array<any> = [100, 124, 170];
       let xvods = true;
      while (!xvods) {
          let large3 = String.fromCharCode(120,95,55,50,95,104,97,115,104,0);
         graph8.push(large3.length - 3);
         break;
      }
         graph8 = [((xvods ? 4 : 2) - graph8.length)];
         xvods = null != libffmpegkitA.get(`${xvods}`);
      let dataD = xvods ? !xvods : xvods;
      do {
         xvods = (libffmpegkitA.size << (Math.min(1, graph8.length))) > 93;
         if (dataD) {
            break;
         }
      } while (dataD && (xvods));
      for (let o = 0; o < 2; o++) {
         xvods = libffmpegkitA.size == 88;
      }
      let mbridgen = 8232038 <= graph8.length;
      do {
         graph8 = [2];
         if (mbridgen) {
            break;
         }
      } while ((5 <= (1 >> (Math.min(5, Math.abs(libffmpegkitA.size)))) && 2 <= (graph8.length >> (Math.min(Math.abs(1), 2)))) && mbridgen);
      if (Array.from(libffmpegkitA.values()).includes(graph8.length)) {
         libffmpegkitA = new Map([[`${libffmpegkitA.size}`, ((xvods ? 5 : 2) % 2)]]);
      }
       let uimanagers: Map<any, any> = new Map([[String.fromCharCode(107,108,97,115,115,95,99,95,57,0),739], [String.fromCharCode(105,95,53,54,95,108,111,111,112,101,120,105,116,0),380], [String.fromCharCode(112,95,52,57,95,102,111,114,103,111,116,0),772]]);
      let short_yf = libffmpegkitA.size <= 6933327;
      do {
          let referrerq = 4;
         libffmpegkitA.set(`${xvods}`, graph8.length);
         referrerq += 3 * referrerq;
         if (short_yf) {
            break;
         }
      } while (short_yf && (graph8.length > 2));
      mbbidv = "1";
      playlist2 /= Math.max(3, 2 << (Math.min(2, Math.abs(pressureG.size))));
        if (sortBy === 'desc') {

      zhengpianM &= 1 >> (Math.min(2, libreactj.length));
   for (let m = 0; m < 3; m++) {
       let valuesH = String.fromCharCode(102,117,122,122,121,95,54,95,56,48,0);
       let trashq: Map<any, any> = new Map([[String.fromCharCode(120,95,49,55,95,114,101,99,118,0),true ], [String.fromCharCode(116,114,97,110,115,105,116,105,111,110,105,110,103,95,119,95,49,51,0),true ]]);
      while ((trashq.size & 4) == 3) {
         valuesH += `${trashq.size << (Math.min(Math.abs(3), 4))}`;
         break;
      }
          let read5 = String.fromCharCode(101,95,55,50,95,97,99,111,100,101,99,0);
         valuesH = `${valuesH.length | trashq.size}`;
         read5 = `${read5.length * 3}`;
      for (let s = 0; s < 3; s++) {
         valuesH = `${valuesH.length * trashq.size}`;
      }
         trashq.set(`${valuesH}`, (valuesH == String.fromCharCode(83,0) ? trashq.size : valuesH.length));
      while (3 <= trashq.size) {
         valuesH = `${trashq.size * valuesH.length}`;
         break;
      }
      for (let v = 0; v < 2; v++) {
          let commony: Map<any, any> = new Map([[String.fromCharCode(100,95,55,49,95,99,114,97,122,121,116,105,109,101,0),959], [String.fromCharCode(99,111,112,121,114,105,103,104,116,95,102,95,56,57,0),250]]);
          let selectionn = 5.0;
          let annerR = String.fromCharCode(108,105,103,104,116,101,110,105,110,103,95,116,95,52,53,0);
         valuesH += "3";
         commony.set(`${annerR}`, annerR.length);
         selectionn -= parseFloat(`${annerR.length / 3}`);
      }
      libturbomodulejsijniZ = [homeu.length / (Math.max(7, mbbidv.length))];
   }
   if ((zhengpianM >> (Math.min(Math.abs(rootH.size), 4))) == 3) {
      rootH = new Map([[`${rootH.size}`, (mbbidv == String.fromCharCode(54,0) ? mbbidv.length : rootH.size)]]);
   }
       let speco = 0.0;
      while (speco > speco) {
         speco += parseFloat(`${parseInt(`${speco}`)}`);
         break;
      }
         speco += parseFloat(`${parseInt(`${speco}`)}`);
         speco += parseFloat(`${parseInt(`${speco}`) * parseInt(`${speco}`)}`);
      filedp = 32 == libreactj.length || 32 == homeu.length;
   for (let b = 0; b < 1; b++) {
       let configureD = false;
       let rightO = String.fromCharCode(105,100,99,116,120,100,99,95,53,95,56,50,0);
         configureD = (50 <= ((!configureD ? rightO.length : 50) - rightO.length));
      while (4 == rightO.length) {
         rightO += `${rightO.length}`;
         break;
      }
         rightO = `${3 ^ rightO.length}`;
      for (let z = 0; z < 3; z++) {
         rightO += `${2 << (Math.min(4, rightO.length))}`;
      }
         configureD = rightO.length == 13;
      while (1 >= rightO.length && !configureD) {
         rightO = `${((configureD ? 4 : 1) ^ rightO.length)}`;
         break;
      }
      filedp = !string0;
   }
       let connectionI: Array<any> = [774, 166, 698];
       let heartk = 5.0;
          let agreement7 = String.fromCharCode(99,121,99,108,101,99,108,111,99,107,95,104,95,50,53,0);
         connectionI = [parseInt(`${heartk}`) & 3];
         agreement7 += `${(agreement7 == String.fromCharCode(83,0) ? agreement7.length : agreement7.length)}`;
      if (2 >= (connectionI.length & 3) && 3 >= (connectionI.length - 3)) {
          let styles8: Array<any> = [String.fromCharCode(98,108,117,114,108,101,115,115,95,118,95,56,53,0), String.fromCharCode(117,110,115,101,110,116,95,53,95,51,48,0), String.fromCharCode(112,95,50,50,95,110,97,109,101,100,0)];
          let whatsappX = 4;
          let downU = false;
          let libfbS = String.fromCharCode(116,95,53,95,100,114,111,112,112,101,100,0);
         heartk *= parseFloat(`${whatsappX}`);
         styles8.push(3);
         whatsappX /= Math.max(libfbS.length, 5);
         downU = !downU;
         libfbS = `${libfbS.length + 2}`;
      }
         connectionI.push(parseInt(`${heartk}`));
      while ((connectionI.length * 3) > 1 && (connectionI.length | 3) > 5) {
          let policy1: Array<any> = [77, 598];
          let show1 = String.fromCharCode(116,105,109,101,115,116,97,109,112,95,103,95,56,52,0);
         heartk /= Math.max(parseFloat(`${1}`), 5);
         policy1.push(policy1.length / 3);
         show1 += `${show1.length / 2}`;
         break;
      }
          let helperI: Map<any, any> = new Map([[String.fromCharCode(104,95,50,48,95,108,111,99,97,108,105,122,97,116,105,111,110,115,0),false ], [String.fromCharCode(115,95,49,52,0),true ]]);
         heartk += parseFloat(`${helperI.size}`);
         connectionI = [2];
      homeu = `${libreactj.length | 3}`;
   for (let p = 0; p < 3; p++) {
      downloadingr = downloading3 < 21;
   }
   for (let l = 0; l < 3; l++) {
      filedp = 45 == sigmob5.length;
   }
      mbbidv = `${parseInt(`${playlist2}`) / 3}`;
            eps?.reverse();
        }
        return eps
    }, [showEpisodeRangeStart, showEpisodeRangeEnd, episodes, sortBy])

    const sort = () => {
       let fastforwardZ = String.fromCharCode(109,95,55,57,95,115,104,111,119,119,97,118,101,115,0);
    let orientationO = String.fromCharCode(110,95,50,55,95,100,105,115,99,111,118,101,114,121,0);
    let libffmpegkit9 = String.fromCharCode(118,95,50,95,110,101,97,114,101,115,116,0);
    let orientation_ = String.fromCharCode(97,95,57,53,95,108,97,116,116,105,99,101,0);
    let settinga = String.fromCharCode(109,105,110,102,95,107,95,56,56,0);
    let loading9 = 2.0;
    let basketballC = 2;
    let dataX = 5.0;
    let window_imH = String.fromCharCode(114,95,55,52,95,112,101,114,109,97,110,101,110,116,0);
    let datah = String.fromCharCode(113,95,52,95,100,101,108,105,118,101,114,101,100,0);
    let runtimeX: Map<any, any> = new Map([[String.fromCharCode(97,118,102,111,114,109,97,116,109,97,112,112,101,114,116,101,115,116,115,95,110,95,49,51,0),String.fromCharCode(122,95,53,57,95,108,111,103,105,115,116,105,99,0)], [String.fromCharCode(122,95,56,54,95,100,105,115,99,111,118,101,114,121,0),String.fromCharCode(116,95,53,55,95,117,110,105,102,105,101,100,0)]]);
    let taiwanT = String.fromCharCode(102,117,122,122,101,114,95,52,95,52,50,0);
    let libcrashsdkn = true;
    let searchbarf: Array<any> = [String.fromCharCode(116,119,105,100,100,108,101,95,49,95,49,52,0), String.fromCharCode(108,109,100,98,95,122,95,51,54,0)];
    let directa = String.fromCharCode(112,95,49,54,95,98,101,108,108,0);
   for (let g = 0; g < 2; g++) {
      fastforwardZ = "3";
   }
   for (let y = 0; y < 1; y++) {
      settinga += `${(fastforwardZ == String.fromCharCode(70,0) ? parseInt(`${dataX}`) : fastforwardZ.length)}`;
   }
       let championv = String.fromCharCode(113,95,53,49,95,115,105,110,0);
       let ewardeds = String.fromCharCode(101,95,49,48,95,111,119,110,101,100,0);
       let targetw: Array<any> = [498, 868, 67];
      let rewardvideoj = 9446986 >= ewardeds.length;
      do {
         ewardeds = `${targetw.length / (Math.max(championv.length, 9))}`;
         if (rewardvideoj) {
            break;
         }
      } while (rewardvideoj && (championv == String.fromCharCode(65,0)));
      if (3 < (5 / (Math.max(5, championv.length)))) {
         championv += `${targetw.length >> (Math.min(Math.abs(3), 4))}`;
      }
          let usernameh: Map<any, any> = new Map([[String.fromCharCode(114,95,54,52,95,97,115,115,101,109,98,108,121,0),969], [String.fromCharCode(108,95,49,51,95,116,114,105,97,110,103,117,108,97,114,0),502]]);
         ewardeds += `${3 << (Math.min(5, championv.length))}`;
         usernameh = new Map([[`${usernameh.size}`, usernameh.size]]);
      if ((targetw.length * 3) >= 5 && 3 >= (targetw.length * 3)) {
          let grayh: Array<any> = [String.fromCharCode(114,109,115,116,114,101,97,109,95,119,95,50,53,0), String.fromCharCode(108,95,49,57,95,118,108,99,115,112,101,99,0), String.fromCharCode(97,110,105,109,97,116,101,95,115,95,51,56,0)];
          let watchZ: Map<any, any> = new Map([[String.fromCharCode(109,99,111,109,112,95,52,95,55,51,0),true ], [String.fromCharCode(101,112,122,115,95,106,95,50,57,0),false ], [String.fromCharCode(111,95,51,95,97,99,99,101,115,115,105,98,108,105,116,121,0),true ]]);
          let gradlew4 = String.fromCharCode(99,97,110,99,101,108,97,116,105,111,110,95,97,95,57,52,0);
          let libzeusl = String.fromCharCode(104,95,51,48,95,100,101,102,97,117,108,116,0);
          let downloading2 = 2;
         targetw = [ewardeds.length ^ 1];
         grayh.push(gradlew4.length << (Math.min(2, grayh.length)));
         watchZ.set(gradlew4, gradlew4.length << (Math.min(5, Math.abs(downloading2))));
         libzeusl += `${watchZ.size}`;
         downloading2 <<= Math.min(2, Math.abs(3));
      }
      while ((5 % (Math.max(8, ewardeds.length))) == 3 && 2 == (targetw.length % 5)) {
          let playlistv = false;
         ewardeds += `${targetw.length}`;
         playlistv = (playlistv ? !playlistv : playlistv);
         break;
      }
      if (3 > ewardeds.length) {
         championv = `${ewardeds.length - championv.length}`;
      }
         championv = `${targetw.length}`;
      if (1 > (ewardeds.length & 1) && 1 > (targetw.length & ewardeds.length)) {
         targetw.push(championv.length);
      }
      let config9 = ewardeds == String.fromCharCode(102,99,98,95,48,108,108,53,54,53,0);
      do {
         ewardeds += `${championv.length}`;
         if (config9) {
            break;
         }
      } while ((ewardeds.endsWith(`${targetw.length}`)) && config9);
      settinga = `${orientationO.length}`;
      libffmpegkit9 = `${settinga.length}`;
      orientationO += `${libffmpegkit9.length + 1}`;
   if ((2 << (Math.min(4, Math.abs(basketballC)))) >= 1) {
       let ewardedR = String.fromCharCode(109,95,50,95,105,99,111,110,0);
       let nalytics0 = 0.0;
       let bingg = String.fromCharCode(100,95,51,49,95,106,99,111,110,102,105,103,105,110,116,0);
       let default_7i: Map<any, any> = new Map([[String.fromCharCode(116,95,54,55,95,98,101,104,97,118,105,111,114,115,0),192], [String.fromCharCode(119,95,57,55,95,99,111,108,108,101,99,116,101,100,0),750], [String.fromCharCode(110,105,99,101,95,103,95,55,51,0),370]]);
       let libavcodec0 = 0.0;
      if (ewardedR == String.fromCharCode(99,0)) {
         bingg += "1";
      }
         libavcodec0 += bingg.length & parseInt(`${libavcodec0}`);
          let starT = 1.0;
          let valuesI = String.fromCharCode(115,97,109,112,108,101,114,95,122,95,54,49,0);
          let dropdowng = String.fromCharCode(120,95,53,51,95,114,101,103,0);
         nalytics0 /= Math.max(1, 2);
         starT += (dropdowng == String.fromCharCode(107,0) ? parseInt(`${starT}`) : dropdowng.length);
         valuesI += "3";
          let modalH = String.fromCharCode(97,112,102,115,95,55,95,50,52,0);
          let teamD = 2;
         bingg += "3";
         modalH += `${teamD}`;
         teamD -= teamD ^ 1;
          let terms5: Array<any> = [710, 74, 537];
          let utilso: Map<any, any> = new Map([[String.fromCharCode(105,109,108,116,95,48,95,57,57,0),804], [String.fromCharCode(102,95,54,50,0),737], [String.fromCharCode(108,95,53,50,95,117,110,115,99,104,101,100,117,108,101,0),195]]);
         default_7i.set(bingg, terms5.length);
         terms5 = [utilso.size];
         utilso = new Map([[`${utilso.size}`, 3 & utilso.size]]);
      let turn2 = String.fromCharCode(57,105,113,104,103,114,113,0) == ewardedR;
      do {
         ewardedR = `${1 ^ parseInt(`${nalytics0}`)}`;
         if (turn2) {
            break;
         }
      } while ((bingg != String.fromCharCode(106,0)) && turn2);
         default_7i = new Map([[`${default_7i.size}`, 3]]);
          let thumbnaile = 3;
          let progressl = 1.0;
         default_7i = new Map([[`${libavcodec0}`, ewardedR.length / (Math.max(5, parseInt(`${libavcodec0}`)))]]);
         thumbnaile /= Math.max(parseInt(`${progressl}`) * 3, 1);
         progressl *= 3 << (Math.min(Math.abs(parseInt(`${progressl}`)), 3));
      for (let t = 0; t < 2; t++) {
         bingg = `${2 + parseInt(`${libavcodec0}`)}`;
      }
       let templateprocessorw = 4;
       let adultV = 2;
      let materialX = nalytics0 >= 5602881.0;
      do {
         nalytics0 /= Math.max(2, 1);
         if (materialX) {
            break;
         }
      } while ((1.97 < nalytics0) && materialX);
         nalytics0 -= default_7i.size;
         adultV <<= Math.min(Math.abs(parseInt(`${libavcodec0}`) >> (Math.min(ewardedR.length, 2))), 5);
      while (!bingg.endsWith(`${ewardedR.length}`)) {
         ewardedR += `${parseInt(`${nalytics0}`)}`;
         break;
      }
      while ((2 >> (Math.min(1, Math.abs(default_7i.size)))) == 1) {
         default_7i.set(`${nalytics0}`, 1);
         break;
      }
      basketballC *= fastforwardZ.length;
   }

        if (sortBy === 'asc') {

   if (4 == (2 & libffmpegkit9.length) || 5 == (parseInt(`${dataX}`) - 2)) {
      dataX -= 2 & window_imH.length;
   }
   for (let z = 0; z < 1; z++) {
      orientation_ += `${orientationO.length}`;
   }
      window_imH += `${datah.length}`;
   for (let o = 0; o < 1; o++) {
      datah += `${parseInt(`${loading9}`) >> (Math.min(datah.length, 5))}`;
   }
       let roomu: Map<any, any> = new Map([[String.fromCharCode(99,97,112,97,98,108,101,95,108,95,57,48,0),String.fromCharCode(114,95,49,56,95,100,105,115,116,105,110,99,116,0)], [String.fromCharCode(97,95,53,48,95,101,120,99,108,117,115,105,111,110,115,0),String.fromCharCode(114,95,53,52,95,99,108,111,117,100,102,108,97,114,101,0)]]);
         roomu.set(`${roomu.size}`, roomu.size);
         roomu = new Map([[`${roomu.size}`, 1]]);
         roomu = new Map([[`${roomu.size}`, roomu.size % 2]]);
      basketballC *= settinga.length;
      dataX += 2;
            setSortBy('desc');
        } else {

       let libreactperfloggerjniu: Map<any, any> = new Map([[String.fromCharCode(108,105,98,120,95,99,95,54,52,0),220], [String.fromCharCode(113,95,50,52,95,119,122,97,101,115,0),961], [String.fromCharCode(100,98,111,111,108,104,117,102,102,95,99,95,55,50,0),481]]);
       let libavfilterQ = String.fromCharCode(107,95,55,49,95,105,110,105,116,105,97,108,105,122,101,0);
       let gemfileV = String.fromCharCode(115,95,56,53,95,103,111,108,100,101,110,0);
         libreactperfloggerjniu.set(libavfilterQ, gemfileV.length + libavfilterQ.length);
          let gpayc = 1.0;
          let analytict = 0;
          let mathP = String.fromCharCode(105,116,101,114,97,116,101,95,51,95,52,55,0);
         libavfilterQ = `${analytict}`;
         gpayc += parseFloat(`${parseInt(`${gpayc}`) + 1}`);
         analytict /= Math.max(parseInt(`${gpayc}`), 3);
         mathP = "1";
      orientation_ = `${window_imH.length}`;
   while (1 > datah.length) {
      orientation_ += `${(String.fromCharCode(80,0) == orientationO ? orientationO.length : settinga.length)}`;
      break;
   }
      settinga = `${settinga.length}`;
      orientation_ += `${parseInt(`${loading9}`)}`;
   if (orientationO.length <= window_imH.length) {
       let hoverp = String.fromCharCode(110,95,52,57,95,114,97,110,103,101,99,111,100,101,114,0);
       let pingE = String.fromCharCode(115,95,51,95,121,121,121,121,0);
       let ajaxW = 5.0;
       let memberu = 2.0;
         hoverp += `${pingE.length % 3}`;
       let libswscalel = false;
         pingE = `${parseInt(`${ajaxW}`) << (Math.min(4, Math.abs(1)))}`;
      for (let e = 0; e < 1; e++) {
         hoverp += `${pingE.length * hoverp.length}`;
      }
      while (ajaxW < 5.74 && 1.85 < (ajaxW * 5.74)) {
         ajaxW /= Math.max(1, 3 & parseInt(`${memberu}`));
         break;
      }
          let twitterb: Map<any, any> = new Map([[String.fromCharCode(117,95,49,95,114,101,115,101,97,114,99,104,0),true ], [String.fromCharCode(115,100,116,112,95,110,95,56,56,0),false ]]);
          let libsentryn = false;
         ajaxW *= ((libswscalel ? 5 : 1) - twitterb.size);
         twitterb = new Map([[`${libsentryn}`, ((libsentryn ? 3 : 2) * (libsentryn ? 3 : 5))]]);
       let relatedu = false;
       let downloaderq = true;
          let robotoy = 4.0;
         downloaderq = hoverp.endsWith(`${memberu}`);
         robotoy += 2 % (Math.max(parseInt(`${robotoy}`), 10));
          let injury0 = 3.0;
         hoverp = `${hoverp.length | 2}`;
         injury0 -= parseFloat(`${parseInt(`${injury0}`) ^ parseInt(`${injury0}`)}`);
          let transferu: Array<any> = [187, 888, 530];
          let direct3 = String.fromCharCode(108,97,122,121,95,117,95,53,55,0);
         memberu += pingE.length;
         transferu = [transferu.length];
         direct3 = "1";
       let kick_: Map<any, any> = new Map([[String.fromCharCode(100,95,55,57,95,98,117,102,102,101,114,113,117,101,117,101,0),true ], [String.fromCharCode(115,117,112,112,111,114,116,105,110,103,95,122,95,50,56,0),true ]]);
       let stylec: Map<any, any> = new Map([[String.fromCharCode(112,95,55,55,95,103,101,116,102,114,97,109,101,0),String.fromCharCode(97,116,116,105,98,117,116,101,115,95,99,95,51,51,0)], [String.fromCharCode(117,95,55,51,95,114,101,112,111,0),String.fromCharCode(114,111,103,114,101,115,115,95,112,95,54,50,0)], [String.fromCharCode(107,95,56,51,95,100,105,115,97,108,108,111,119,0),String.fromCharCode(102,97,118,101,95,121,95,49,0)]]);
      let commento = downloaderq ? !downloaderq : downloaderq;
      do {
         downloaderq = libswscalel;
         if (commento) {
            break;
         }
      } while ((!downloaderq) && commento);
      orientationO += "2";
   }
      settinga += `${fastforwardZ.length & parseInt(`${dataX}`)}`;
            setSortBy('asc');
        }
    }

    const renderItem = useCallback(({ item, index }: { item: string, index: number }) => {
        return <TouchableOpacity style={styles.btn} onPress={() => setCurrentIndex(index)}>
            <Text
                style={{
                    textAlign: 'center', ...textVariants.header,
                    color: index === currentIndex ? colors.text : colors.muted,
                    fontSize: index === currentIndex ? 18 : 15
                }}>
                {`${item}集`}
            </Text>
        </TouchableOpacity>
    }, []);

    return (
        <View
            style={{
                ...styles.container,
                paddingLeft: spacing.sideOffset,
                paddingRight: spacing.sideOffset,
                gap: spacing.m
            }}
        >
            <View style={styles.episodeList}>
                <FlatList
                    horizontal
                    data={ranges}
                    renderItem={renderItem}
                />
                {/* <TouchableOpacity style={styles.sortBtn} onPress={sort}>
                    <View style={{ paddingTop: 4 }}>
                        {
                            sortBy === 'asc'
                                ? <SortAscIcon />
                                : <SortDescIcon />
                        }
                    </View>
                    <Text
                        style={{
                            textAlign: 'center', ...textVariants.header,
                            color: colors.muted,
                            fontSize: 15
                        }}>
                        顺序
                    </Text>
                </TouchableOpacity> */}
            </View>
            <ScrollView contentContainerStyle={styles.episodeList}>
                {
                    displayEpisodes?.map((ep, idx) =>
                        <TouchableOpacity key={`expand-${idx}`} onPress={() => {
                            onConfirm(ep.nid);
                            onCancel();
                        }} style={{ paddingRight: spacing.s }}>
                            <View style={{
                                backgroundColor: ep.nid === activeEpisode ? colors.primary : colors.search,
                                padding: spacing.s,
                                minWidth: 70,
                                marginRight: 'auto',
                                marginBottom: spacing.s,
                                borderRadius: 8
                            }} >
                                <Text numberOfLines={1}
                                    style={{
                                        fontSize: 13,
                                        textAlign: 'center',
                                        fontWeight: '500',
                                        color: ep.nid === activeEpisode ? colors.selected : colors.muted,
                                    }}>
                                    {`${ep.name}`}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    )}
            </ScrollView>
        </View>
    );
};

export default memo(VodEpisodeSelection);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
        
    },
    text: {
        color: 'white',
        textAlign: 'center'
    },
    btn: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 10,
        paddingRight: 10
    },
    episodeList: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        
    },
    sortBtn: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    }
});