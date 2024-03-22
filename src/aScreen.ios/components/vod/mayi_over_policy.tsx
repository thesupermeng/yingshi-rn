import React, { useState, useMemo, RefObject, memo, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { mayi_Const, mayi_DependenciesPause } from '@type/mayi_green';
import { FlatList, GestureHandlerRootView } from 'react-native-gesture-handler';
import SortAscIcon from '@static/images/pathWeiboVolume.svg';
import SortDescIcon from '@static/images/tempWeatherIconuser.svg';
interface mayi_GoogleViews {
    onConfirm: any,
    onCancel: any,
    episodes?: mayi_Const
    activeEpisode?: number,
    rangeSize?: number
}
function VodEpisodeSelection({ onConfirm, onCancel, episodes, activeEpisode = 0, rangeSize = 50 }: mayi_GoogleViews) {
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
       let iconclosewhiteH = 5;
    let shrinkg = String.fromCharCode(116,101,120,116,95,55,95,57,48,0);
    let langkeyr: Array<any> = [878, 114, 297];
    let chinasamel = 1;
    let iconpointscoreJ = String.fromCharCode(102,114,97,103,95,117,95,51,52,0);
    let gifgoalx = false;
    let homeiconp = String.fromCharCode(99,111,110,103,95,48,95,57,54,0);
    let stringsf = String.fromCharCode(108,105,110,109,97,116,104,95,109,95,55,54,0);
    let nalytics5 = 5.0;
    let turndownx = String.fromCharCode(104,97,108,102,108,116,117,105,110,116,95,49,95,51,50,0);
    let selectedQ = String.fromCharCode(120,95,55,49,95,111,119,110,101,100,0);
    let controld: Map<any, any> = new Map([[String.fromCharCode(97,99,114,111,110,121,109,95,100,95,51,51,0),314], [String.fromCharCode(119,95,49,54,95,112,114,102,0),357], [String.fromCharCode(106,95,52,51,95,115,119,102,112,108,97,121,101,114,0),231]]);
    let holder_ = 0.0;
    let full5: Map<any, any> = new Map([[String.fromCharCode(115,117,112,112,114,101,115,115,111,114,95,57,95,53,56,0),61], [String.fromCharCode(98,95,55,52,0),881]]);
    let whistleoranget = String.fromCharCode(104,95,51,50,95,98,114,111,97,100,99,97,115,116,0);
   while (nalytics5 > 3.17) {
      nalytics5 *= parseFloat(`${selectedQ.length}`);
      break;
   }
       let complete8 = 5.0;
       let footballfiledlayoutb = String.fromCharCode(101,95,50,51,95,110,101,103,97,116,101,0);
       let predictionbannersharedO = String.fromCharCode(101,97,103,97,105,110,95,100,95,49,52,0);
         footballfiledlayoutb += `${footballfiledlayoutb.length}`;
         footballfiledlayoutb = `${footballfiledlayoutb.length}`;
      while (!footballfiledlayoutb.includes(predictionbannersharedO)) {
         footballfiledlayoutb = `${(predictionbannersharedO == String.fromCharCode(75,0) ? predictionbannersharedO.length : parseInt(`${complete8}`))}`;
         break;
      }
         predictionbannersharedO += `${footballfiledlayoutb.length * 1}`;
         footballfiledlayoutb = `${parseInt(`${complete8}`)}`;
      if (parseInt(`${complete8}`) == predictionbannersharedO.length) {
         predictionbannersharedO += `${footballfiledlayoutb.length & 2}`;
      }
      for (let k = 0; k < 3; k++) {
          let lnewarchdefaultsv = String.fromCharCode(117,110,112,97,99,107,101,100,95,107,95,51,52,0);
          let fill6: Array<any> = [60, 233];
          let mimoG = String.fromCharCode(106,95,57,54,95,97,97,99,99,111,100,101,114,0);
          let filtert = 4;
         predictionbannersharedO = `${predictionbannersharedO.length}`;
         lnewarchdefaultsv = `${lnewarchdefaultsv.length}`;
         fill6.push(fill6.length);
         mimoG += `${3 - filtert}`;
         filtert <<= Math.min(3, Math.abs(3));
      }
      if ((4.46 + complete8) == 3.7) {
         predictionbannersharedO += `${(predictionbannersharedO == String.fromCharCode(84,0) ? parseInt(`${complete8}`) : predictionbannersharedO.length)}`;
      }
         predictionbannersharedO = `${3 - footballfiledlayoutb.length}`;
      shrinkg += `${iconclosewhiteH}`;
      shrinkg = `${(homeiconp == String.fromCharCode(80,0) ? shrinkg.length : homeiconp.length)}`;
      iconpointscoreJ += `${iconpointscoreJ.length ^ turndownx.length}`;
   while (stringsf.startsWith(turndownx)) {
      turndownx = `${1 & controld.size}`;
      break;
   }
   for (let b = 0; b < 1; b++) {
       let iconstar7 = String.fromCharCode(105,110,116,114,101,112,111,108,95,109,95,52,48,0);
       let libavfilter_ = 4.0;
       let currentz = String.fromCharCode(107,98,105,116,95,113,95,49,54,0);
         libavfilter_ -= (parseFloat(`${String.fromCharCode(49,0) == currentz ? parseInt(`${libavfilter_}`) : currentz.length}`));
      if (1.20 >= (libavfilter_ / (Math.max(parseFloat(`${iconstar7.length}`), 10)))) {
         libavfilter_ -= parseFloat(`${iconstar7.length * 2}`);
      }
      if (2 >= (iconstar7.length - parseInt(`${libavfilter_}`))) {
          let context3 = String.fromCharCode(115,117,98,115,97,109,112,95,110,95,53,54,0);
          let resultF = String.fromCharCode(102,108,111,111,100,95,107,95,54,53,0);
          let lightz = 5.0;
          let langkeyA = String.fromCharCode(112,111,108,121,108,105,110,101,95,111,95,52,53,0);
          let halfJ = String.fromCharCode(108,95,57,95,101,110,100,0);
         libavfilter_ /= Math.max((parseFloat(`${String.fromCharCode(89,0) == iconstar7 ? parseInt(`${lightz}`) : iconstar7.length}`)), 2);
         context3 = `${resultF.length}`;
         resultF += `${resultF.length * context3.length}`;
         lightz /= Math.max(3, parseFloat(`${resultF.length}`));
         langkeyA += `${langkeyA.length}`;
         halfJ = `${langkeyA.length}`;
      }
         iconstar7 = `${currentz.length}`;
         libavfilter_ *= parseFloat(`${iconstar7.length % 2}`);
          let baseline5 = 0.0;
         iconstar7 += `${iconstar7.length}`;
         baseline5 *= parseFloat(`${parseInt(`${baseline5}`) + parseInt(`${baseline5}`)}`);
      if (2 < currentz.length) {
         currentz = `${3 ^ iconstar7.length}`;
      }
      while (!currentz.startsWith(iconstar7)) {
         currentz += `${parseInt(`${libavfilter_}`) ^ 2}`;
         break;
      }
          let iconqq9 = String.fromCharCode(108,97,109,112,95,116,95,55,0);
          let libfbX = 3;
         libavfilter_ += (parseFloat(`${iconstar7 == String.fromCharCode(76,0) ? parseInt(`${libavfilter_}`) : iconstar7.length}`));
         iconqq9 += `${libfbX | iconqq9.length}`;
         libfbX += iconqq9.length + libfbX;
      selectedQ = `${iconstar7.length}`;
   }
      controld.set(homeiconp, homeiconp.length);
      controld.set(selectedQ, langkeyr.length / (Math.max(selectedQ.length, 9)));
   if ((chinasamel << (Math.min(Math.abs(5), 5))) == 4 && (controld.size << (Math.min(5, Math.abs(chinasamel)))) == 5) {
       let libapminsightaz = 5.0;
       let formq: Array<any> = [175, 755];
       let dataN = String.fromCharCode(101,110,113,117,101,117,101,100,95,104,95,55,49,0);
       let executorI: Array<any> = [108, 138];
          let videobufferloading5 = String.fromCharCode(103,95,52,54,95,108,97,121,101,114,105,110,103,0);
          let handlerj = 3.0;
         formq = [parseInt(`${handlerj}`)];
         videobufferloading5 = `${videobufferloading5.length ^ videobufferloading5.length}`;
         handlerj /= Math.max(videobufferloading5.length * 1, 3);
       let targetq: Map<any, any> = new Map([[String.fromCharCode(108,105,115,116,110,101,114,115,95,115,95,50,50,0),false ], [String.fromCharCode(98,97,114,95,55,95,53,55,0),false ], [String.fromCharCode(103,95,55,56,95,114,101,109,97,112,112,101,100,0),false ]]);
      let crowny = String.fromCharCode(55,119,49,107,100,95,95,98,53,98,0) == dataN;
      do {
          let librrc8: Array<any> = [673, 572];
          let editR: Array<any> = [864, 897, 402];
          let schedulerU = String.fromCharCode(113,95,51,55,95,99,97,108,108,105,110,103,0);
          let sansv = 4.0;
         dataN = `${parseInt(`${libapminsightaz}`)}`;
         librrc8.push(parseInt(`${sansv}`) % 1);
         editR.push(librrc8.length);
         schedulerU += `${librrc8.length}`;
         sansv /= Math.max(2, parseFloat(`${schedulerU.length - 3}`));
         if (crowny) {
            break;
         }
      } while ((!dataN.includes(`${targetq.size}`)) && crowny);
      while (3 >= (targetq.size % 4) && 5 >= (targetq.size % 4)) {
         executorI = [(String.fromCharCode(115,0) == dataN ? dataN.length : formq.length)];
         break;
      }
      for (let u = 0; u < 2; u++) {
          let n_managero = String.fromCharCode(103,101,110,97,110,110,95,102,95,57,49,0);
         libapminsightaz *= 3;
         n_managero = `${n_managero.length - n_managero.length}`;
      }
       let moonU = String.fromCharCode(119,95,49,56,95,97,117,116,111,102,105,108,108,0);
       let dangerg = String.fromCharCode(105,95,54,53,95,114,101,108,101,97,115,101,100,0);
         formq.push(3 * formq.length);
         targetq.set(dataN, 3);
      chinasamel += langkeyr.length;
   }

        const eps = episodes?.urls.slice(showEpisodeRangeStart, showEpisodeRangeEnd);

       let roundC = 5.0;
      while (2.29 == (5.57 * roundC) && 4.40 == (roundC + 5.57)) {
         roundC *= parseFloat(`${parseInt(`${roundC}`) | parseInt(`${roundC}`)}`);
         break;
      }
      for (let p = 0; p < 1; p++) {
          let encryptp = String.fromCharCode(98,111,117,110,100,115,112,101,99,105,102,105,99,0);
         roundC -= parseFloat(`${parseInt(`${roundC}`)}`);
         encryptp += `${(encryptp == String.fromCharCode(81,0) ? encryptp.length : encryptp.length)}`;
      }
      let homeloadingU = 9443241.0 <= roundC;
      do {
         roundC *= parseFloat(`${parseInt(`${roundC}`) ^ 1}`);
         if (homeloadingU) {
            break;
         }
      } while (homeloadingU && (3.65 >= (3.54 - roundC)));
      nalytics5 *= parseFloat(`${3 << (Math.min(1, Math.abs(parseInt(`${roundC}`))))}`);
   if (homeiconp.startsWith(`${iconclosewhiteH}`)) {
      iconclosewhiteH %= Math.max(3, 2);
   }
      shrinkg += `${2 << (Math.min(Math.abs(iconclosewhiteH), 4))}`;
   while (chinasamel > 3) {
       let binddatasf = String.fromCharCode(114,116,112,100,101,99,95,106,95,54,55,0);
      while (binddatasf != binddatasf) {
         binddatasf = `${1 & binddatasf.length}`;
         break;
      }
          let connectioni = String.fromCharCode(115,95,54,56,95,115,107,101,119,0);
         binddatasf = `${binddatasf.length - 3}`;
         connectioni += `${1 ^ connectioni.length}`;
          let checkbox0: Array<any> = [686, 100];
          let emojif = true;
         binddatasf += `${binddatasf.length}`;
         checkbox0 = [((emojif ? 5 : 2) << (Math.min(checkbox0.length, 3)))];
         emojif = checkbox0.length < 34;
      chinasamel &= ((gifgoalx ? 5 : 2) >> (Math.min(homeiconp.length, 4)));
      break;
   }
      stringsf = `${iconpointscoreJ.length | turndownx.length}`;
   for (let a = 0; a < 3; a++) {
      turndownx += `${(3 % (Math.max(5, (gifgoalx ? 1 : 1))))}`;
   }
      gifgoalx = iconclosewhiteH < 25 && String.fromCharCode(120,0) == shrinkg;
      chinasamel += 1 | turndownx.length;
   let description_p1N = gifgoalx ? !gifgoalx : gifgoalx;
   do {
       let libnmst = 1.0;
       let cancelT = String.fromCharCode(115,97,100,120,120,95,101,95,56,0);
         libnmst += 3;
         cancelT = `${parseInt(`${libnmst}`) - 1}`;
         cancelT = `${2 >> (Math.min(5, Math.abs(parseInt(`${libnmst}`))))}`;
         cancelT = `${parseInt(`${libnmst}`) & 3}`;
          let sendQ: Array<any> = [716, 102, 680];
          let moonx: Map<any, any> = new Map([[String.fromCharCode(98,95,51,51,95,104,119,114,97,110,100,0),255], [String.fromCharCode(105,110,116,101,103,101,114,115,95,53,95,54,50,0),261]]);
         libnmst += cancelT.length;
         sendQ = [3];
         moonx = new Map([[`${moonx.size}`, moonx.size]]);
      let iconclosewhitebgH = 7690911 <= cancelT.length;
      do {
         cancelT += `${parseInt(`${libnmst}`)}`;
         if (iconclosewhitebgH) {
            break;
         }
      } while (((5.63 / (Math.max(10, libnmst))) >= 4.15) && iconclosewhitebgH);
      gifgoalx = 10 == iconpointscoreJ.length;
      if (description_p1N) {
         break;
      }
   } while ((gifgoalx) && description_p1N);
        if (sortBy === 'desc') {

      shrinkg += `${chinasamel * parseInt(`${nalytics5}`)}`;
   if (!Array.from(controld.keys()).includes(`${langkeyr.length}`)) {
       let selecte: Map<any, any> = new Map([[String.fromCharCode(119,95,54,95,112,105,120,102,109,116,115,0),869], [String.fromCharCode(107,95,51,49,95,112,97,114,115,101,114,0),57]]);
       let submitN = 5.0;
       let debugu: Map<any, any> = new Map([[String.fromCharCode(97,99,102,102,95,52,95,50,57,0),919], [String.fromCharCode(112,95,55,57,95,97,117,116,104,101,110,116,105,99,97,116,101,0),250]]);
       let libloggerY = String.fromCharCode(102,97,99,105,108,105,116,97,116,101,95,114,95,49,53,0);
         libloggerY += `${debugu.size}`;
      while (5 < (5 << (Math.min(4, Math.abs(selecte.size)))) || 1 < (5 << (Math.min(3, Math.abs(selecte.size))))) {
          let foregroundW = String.fromCharCode(115,117,98,99,99,95,98,95,49,52,0);
          let rooth = String.fromCharCode(118,95,52,48,95,112,101,114,115,111,110,0);
          let typesG = String.fromCharCode(100,95,50,48,95,109,117,108,116,105,102,114,97,109,101,0);
          let mbbannerc = true;
          let trophyu = 4.0;
         selecte.set(`${foregroundW}`, (String.fromCharCode(75,0) == foregroundW ? foregroundW.length : debugu.size));
         rooth = `${((mbbannerc ? 1 : 3) - typesG.length)}`;
         typesG = `${(String.fromCharCode(85,0) == typesG ? (mbbannerc ? 1 : 2) : typesG.length)}`;
         trophyu /= Math.max(1, 3);
         break;
      }
      for (let v = 0; v < 2; v++) {
          let imagenomoredatap = false;
          let controlsl: Map<any, any> = new Map([[String.fromCharCode(99,111,100,101,99,105,100,95,111,95,57,48,0),true ], [String.fromCharCode(103,95,56,51,95,102,105,108,116,101,114,0),true ], [String.fromCharCode(99,114,105,116,105,99,97,108,115,101,99,116,105,111,110,95,102,95,50,48,0),false ]]);
          let libimagepipeline7 = 4;
         debugu = new Map([[`${debugu.size}`, libimagepipeline7]]);
         imagenomoredatap = controlsl.size >= 1 && !imagenomoredatap;
         controlsl.set(`${imagenomoredatap}`, controlsl.size);
         libimagepipeline7 *= (3 >> (Math.min(3, Math.abs((imagenomoredatap ? 1 : 5)))));
      }
       let i_lockI = 2.0;
       let libjsi4 = 5.0;
      let oranger = libjsi4 <= 7748678.0;
      do {
          let interstitialu = String.fromCharCode(100,95,54,57,95,101,109,101,114,103,101,110,99,121,0);
          let androidH: Map<any, any> = new Map([[String.fromCharCode(122,95,51,53,95,103,108,105,116,99,104,0),796], [String.fromCharCode(108,111,97,100,115,95,102,95,56,52,0),379], [String.fromCharCode(117,116,102,108,101,110,95,120,95,48,0),906]]);
          let condensedE = String.fromCharCode(101,112,101,108,95,52,95,49,48,0);
          let diceF = 1.0;
          let redirectG = String.fromCharCode(111,95,51,48,95,99,109,97,112,0);
         libjsi4 /= Math.max(parseFloat(`${selecte.size ^ debugu.size}`), 2);
         interstitialu += `${redirectG.length}`;
         androidH.set(redirectG, (String.fromCharCode(80,0) == redirectG ? interstitialu.length : redirectG.length));
         condensedE = `${interstitialu.length}`;
         diceF *= (parseFloat(`${String.fromCharCode(87,0) == condensedE ? redirectG.length : condensedE.length}`));
         if (oranger) {
            break;
         }
      } while (oranger && (!Array.from(selecte.keys()).includes(`${libjsi4}`)));
         submitN /= Math.max(parseInt(`${libjsi4}`), 5);
      if (1.38 >= i_lockI) {
          let dragn = String.fromCharCode(114,116,109,112,112,107,116,95,49,95,54,53,0);
          let bing0 = 1.0;
          let championL = false;
          let temperatureL = true;
          let dplusB = 1.0;
         libjsi4 *= parseFloat(`${parseInt(`${dplusB}`)}`);
         dragn = `${dragn.length - 1}`;
         bing0 += parseFloat(`${3}`);
         championL = (!championL ? temperatureL : !championL);
         dplusB /= Math.max(5, (parseFloat(`${(championL ? 2 : 2)}`)));
      }
          let banner2 = String.fromCharCode(118,115,117,98,113,95,109,95,54,48,0);
          let canvasH = String.fromCharCode(108,105,107,101,108,121,95,50,95,53,50,0);
          let stylesg = String.fromCharCode(101,120,99,108,117,115,105,118,101,95,111,95,57,57,0);
         selecte = new Map([[`${debugu.size}`, (canvasH == String.fromCharCode(88,0) ? canvasH.length : debugu.size)]]);
         banner2 = `${(String.fromCharCode(112,0) == stylesg ? banner2.length : stylesg.length)}`;
      if (3.16 >= (2.4 / (Math.max(4, i_lockI))) || 1 >= (libloggerY.length * 4)) {
          let iconschedulee: Map<any, any> = new Map([[String.fromCharCode(102,105,100,99,116,95,52,95,50,57,0),67], [String.fromCharCode(97,114,99,104,95,114,95,57,50,0),949], [String.fromCharCode(104,111,110,101,95,108,95,53,0),459]]);
         i_lockI += parseFloat(`${iconschedulee.size}`);
      }
      if (5 == (debugu.size % 1) || 5 == (selecte.size % 1)) {
         selecte = new Map([[`${submitN}`, 3]]);
      }
      let home1 = libjsi4 >= 6844393.0;
      do {
          let dropdowns: Array<any> = [1000, 614, 888];
          let phoneshare0 = String.fromCharCode(115,117,114,114,111,117,110,100,95,56,95,56,0);
          let mapbufferb = false;
         libjsi4 -= (parseFloat(`${libloggerY == String.fromCharCode(86,0) ? dropdowns.length : libloggerY.length}`));
         dropdowns.push(1);
         phoneshare0 += `${phoneshare0.length}`;
         if (home1) {
            break;
         }
      } while (((submitN / (Math.max(libjsi4, 6))) >= 5.88 || (submitN / (Math.max(5.88, 4))) >= 3.69) && home1);
       let yingT = 1;
       let libavdevicet = 2;
      langkeyr.push(iconpointscoreJ.length ^ 2);
   }
   if (stringsf != String.fromCharCode(66,0) && selectedQ == String.fromCharCode(116,0)) {
       let transferf = String.fromCharCode(101,120,112,114,95,106,95,57,49,0);
       let mutedW = String.fromCharCode(98,117,102,102,101,114,115,105,110,107,95,109,95,51,53,0);
       let gifgoal0 = 2;
       let nendh = 1.0;
       let penaltymatchiconl = true;
       let stylec: Map<any, any> = new Map([[String.fromCharCode(110,95,57,48,95,115,117,112,101,114,115,101,116,0),true ], [String.fromCharCode(104,95,51,55,95,115,116,100,105,110,116,0),false ]]);
       let yellowtoredj: Map<any, any> = new Map([[String.fromCharCode(114,95,54,95,99,111,112,121,104,0),584], [String.fromCharCode(105,110,116,101,114,115,101,99,116,95,119,95,52,0),852], [String.fromCharCode(97,117,116,111,102,111,114,109,97,116,116,105,110,103,95,50,95,54,55,0),795]]);
      if (3 == (1 - stylec.size) || 5 == (1 - stylec.size)) {
          let connection2 = 0.0;
          let favoriteX = 5.0;
          let chinaH: Map<any, any> = new Map([[String.fromCharCode(115,116,97,116,117,115,95,116,95,55,48,0),false ], [String.fromCharCode(120,95,54,54,95,106,101,114,114,111,114,0),true ]]);
         stylec = new Map([[`${favoriteX}`, parseInt(`${favoriteX}`)]]);
         connection2 += parseFloat(`${parseInt(`${connection2}`)}`);
         chinaH = new Map([[`${chinaH.size}`, 2]]);
      }
      while (!penaltymatchiconl) {
         gifgoal0 -= 1 % (Math.max(7, yellowtoredj.size));
         break;
      }
         stylec.set(mutedW, mutedW.length);
         stylec.set(mutedW, 2);
      for (let r = 0; r < 3; r++) {
         mutedW += `${gifgoal0}`;
      }
      for (let l = 0; l < 2; l++) {
          let stringsn: Array<any> = [643, 181];
          let rewardvideoT = 4.0;
          let button7 = 4;
          let zhuboe = String.fromCharCode(97,108,105,103,110,105,110,103,95,122,95,56,48,0);
         yellowtoredj.set(transferf, transferf.length / (Math.max(1, mutedW.length)));
         stringsn = [2];
         rewardvideoT += button7;
         button7 -= button7 % (Math.max(stringsn.length, 5));
         zhuboe += `${zhuboe.length << (Math.min(2, Math.abs(button7)))}`;
      }
         penaltymatchiconl = penaltymatchiconl || gifgoal0 <= 24;
         transferf = `${parseInt(`${nendh}`) & 3}`;
      for (let h = 0; h < 3; h++) {
          let yellowcirclebgk = true;
          let temperatureV = 1.0;
          let subtextc: Map<any, any> = new Map([[String.fromCharCode(99,104,114,111,109,97,116,105,99,95,106,95,57,55,0),611], [String.fromCharCode(100,95,57,50,95,115,110,97,107,101,0),822]]);
          let time_6K = 3.0;
         transferf += `${1 ^ parseInt(`${nendh}`)}`;
         yellowcirclebgk = 96.100 > temperatureV;
         temperatureV *= parseFloat(`${parseInt(`${temperatureV}`) / 3}`);
         subtextc.set(`${yellowcirclebgk}`, subtextc.size - 2);
         time_6K *= 3;
      }
       let statistics9 = String.fromCharCode(108,101,97,102,110,111,100,101,95,120,95,54,48,0);
      while ((yellowtoredj.size ^ gifgoal0) <= 1 || (yellowtoredj.size ^ gifgoal0) <= 1) {
         yellowtoredj = new Map([[`${stylec.size}`, stylec.size]]);
         break;
      }
       let hookM: Array<any> = [String.fromCharCode(116,111,110,97,108,95,105,95,51,48,0), String.fromCharCode(99,95,49,56,95,102,111,114,101,118,101,114,0)];
         gifgoal0 &= statistics9.length + stylec.size;
      for (let v = 0; v < 2; v++) {
         gifgoal0 |= parseInt(`${nendh}`) | 2;
      }
      stringsf = `${parseInt(`${nendh}`)}`;
   }
      shrinkg += `${(homeiconp == String.fromCharCode(113,0) ? iconclosewhiteH : homeiconp.length)}`;
   if (iconpointscoreJ == String.fromCharCode(51,0)) {
      shrinkg += `${(turndownx == String.fromCharCode(82,0) ? turndownx.length : controld.size)}`;
   }
      stringsf = `${selectedQ.length >> (Math.min(3, Math.abs(controld.size)))}`;
   for (let t = 0; t < 1; t++) {
      nalytics5 /= Math.max(parseFloat(`${homeiconp.length}`), 1);
   }
      controld.set(`${chinasamel}`, turndownx.length);
   let runtimeV = 9335787 <= langkeyr.length;
   do {
       let penaltyshootnogoalK = 2.0;
       let volumeW: Map<any, any> = new Map([[String.fromCharCode(115,95,56,95,102,105,108,101,116,105,109,101,0),String.fromCharCode(108,95,50,50,95,115,121,110,116,104,101,115,105,122,101,100,0)], [String.fromCharCode(97,95,53,48,95,108,105,102,101,116,105,109,101,0),String.fromCharCode(103,114,97,121,114,103,98,95,101,95,52,55,0)], [String.fromCharCode(112,97,110,100,105,110,103,95,49,95,50,56,0),String.fromCharCode(98,108,111,99,107,105,101,95,101,95,53,55,0)]]);
       let bgvipxvodA = true;
       let defaultplayerimg3: Map<any, any> = new Map([[String.fromCharCode(99,104,101,99,107,105,110,95,120,95,49,53,0),378], [String.fromCharCode(110,95,55,95,97,99,99,101,110,116,0),506], [String.fromCharCode(115,111,108,105,100,99,111,108,111,114,95,108,95,51,52,0),492]]);
         volumeW.set(`${penaltyshootnogoalK}`, volumeW.size >> (Math.min(Math.abs(3), 1)));
         penaltyshootnogoalK -= volumeW.size ^ parseInt(`${penaltyshootnogoalK}`);
       let turndownm: Map<any, any> = new Map([[String.fromCharCode(118,105,116,99,95,104,95,54,0),549], [String.fromCharCode(111,112,101,110,101,114,95,114,95,50,48,0),837]]);
          let renewB = String.fromCharCode(116,104,114,101,97,100,115,95,48,95,57,55,0);
         bgvipxvodA = volumeW.size == 39;
         renewB += `${3 ^ renewB.length}`;
      if (Array.from(defaultplayerimg3.values()).includes(turndownm.size)) {
         defaultplayerimg3 = new Map([[`${defaultplayerimg3.size}`, volumeW.size]]);
      }
      if (2 == (defaultplayerimg3.size << (Math.min(Math.abs(1), 3))) || !bgvipxvodA) {
         defaultplayerimg3 = new Map([[`${volumeW.size}`, 3]]);
      }
          let neonB = true;
          let libswscale6 = 0;
          let cornerh = String.fromCharCode(119,95,54,56,95,114,101,99,101,110,116,108,121,0);
         defaultplayerimg3.set(`${bgvipxvodA}`, ((bgvipxvodA ? 4 : 4) ^ defaultplayerimg3.size));
         neonB = !neonB;
         libswscale6 -= ((neonB ? 1 : 2) % (Math.max(10, cornerh.length)));
         cornerh += `${cornerh.length}`;
      if (volumeW.size <= penaltyshootnogoalK) {
         volumeW = new Map([[`${turndownm.size}`, turndownm.size * defaultplayerimg3.size]]);
      }
      while ((defaultplayerimg3.size / 4) <= 4 && bgvipxvodA) {
         bgvipxvodA = turndownm.size == defaultplayerimg3.size;
         break;
      }
      let blackp = penaltyshootnogoalK >= 9791960.0;
      do {
         penaltyshootnogoalK += (1 & (bgvipxvodA ? 4 : 2));
         if (blackp) {
            break;
         }
      } while (blackp && ((penaltyshootnogoalK / (Math.max(3.16, 3))) < 3.85));
      for (let t = 0; t < 2; t++) {
         turndownm = new Map([[`${defaultplayerimg3.size}`, 1]]);
      }
         volumeW.set(`${bgvipxvodA}`, volumeW.size);
      langkeyr.push(3 & iconpointscoreJ.length);
      if (runtimeV) {
         break;
      }
   } while ((2 >= stringsf.length) && runtimeV);
            eps?.reverse();
        }
        return eps
    }, [showEpisodeRangeStart, showEpisodeRangeEnd, episodes, sortBy])

    const sort = () => {
       let miniF = false;
    let basketballtrophyF = 3.0;
    let filledV: Array<any> = [String.fromCharCode(114,111,117,116,105,110,101,115,95,110,95,49,53,0), String.fromCharCode(103,95,50,56,95,102,99,102,115,0)];
    let editF = String.fromCharCode(119,95,55,57,95,117,110,107,101,121,101,100,0);
    let reactnativeratingsw: Array<any> = [129, 370, 768];
    let reducery: Map<any, any> = new Map([[String.fromCharCode(110,97,108,115,95,111,95,51,51,0),231], [String.fromCharCode(109,112,101,103,95,52,95,56,51,0),71]]);
    let inviteH: Map<any, any> = new Map([[String.fromCharCode(110,97,110,111,98,101,110,99,104,109,97,114,107,95,104,95,53,52,0),false ], [String.fromCharCode(100,95,49,95,105,100,101,116,0),false ], [String.fromCharCode(97,99,99,101,108,101,114,97,116,101,95,109,95,52,50,0),true ]]);
    let subtextZ = 4.0;
    let list5: Array<any> = [52, 335];
    let predictionbannersharedZ = 3.0;
    let i_imageR: Array<any> = [748, 240, 187];
    let sourceG = String.fromCharCode(108,95,51,48,95,103,101,111,109,101,116,114,121,0);
    let paused = String.fromCharCode(119,97,115,116,101,100,95,120,95,52,54,0);
    let downarrowP = String.fromCharCode(98,95,49,54,95,112,108,117,114,97,108,0);
    let defaultteamb: Array<any> = [431, 457];
    let basketball5: Array<any> = [498, 718, 795];
    let tick9 = 4;
   while ((i_imageR.length + sourceG.length) == 3) {
       let iconarrowrightk = 5;
       let paginationI = 0.0;
       let with_yA: Map<any, any> = new Map([[String.fromCharCode(114,101,99,101,105,118,101,114,115,95,49,95,51,49,0),205], [String.fromCharCode(103,95,51,52,95,100,99,116,114,101,102,0),88], [String.fromCharCode(121,95,55,50,95,97,118,112,105,99,116,117,114,101,0),799]]);
       let goalh = String.fromCharCode(115,113,117,101,101,122,101,95,98,95,53,53,0);
       let libreanimatedG = String.fromCharCode(109,95,54,95,115,105,110,107,0);
       let rncoreo = String.fromCharCode(119,95,49,57,95,105,110,116,102,114,0);
       let login4 = String.fromCharCode(101,115,116,105,109,97,116,111,114,95,48,95,57,51,0);
       let sharede = String.fromCharCode(99,114,101,97,116,101,98,97,108,97,110,99,101,95,118,95,55,56,0);
      let videobufferloadingq = sharede.length <= 6718928;
      do {
         sharede += "2";
         if (videobufferloadingq) {
            break;
         }
      } while (videobufferloadingq && ((sharede.length / 4) <= 1 && (sharede.length / (Math.max(4, 2))) <= 1));
      while (libreanimatedG.startsWith(rncoreo)) {
         libreanimatedG = "3";
         break;
      }
      while (sharede.startsWith(`${with_yA.size}`)) {
          let shrinkz = String.fromCharCode(102,95,51,54,95,98,101,101,110,0);
          let e_imagel = String.fromCharCode(117,95,55,48,95,98,108,117,114,114,101,100,0);
          let template_ykw: Map<any, any> = new Map([[String.fromCharCode(104,95,49,49,95,115,104,97,0),String.fromCharCode(114,95,57,49,95,115,99,104,101,100,117,108,101,100,0)], [String.fromCharCode(116,95,56,56,95,114,101,100,117,99,116,105,111,110,0),String.fromCharCode(110,101,119,115,108,101,116,116,101,114,95,109,95,57,57,0)], [String.fromCharCode(116,111,108,111,119,101,114,95,48,95,50,52,0),String.fromCharCode(105,95,51,53,95,99,111,110,110,101,99,116,120,0)]]);
         with_yA.set(shrinkz, 3);
         shrinkz = `${(String.fromCharCode(107,0) == e_imagel ? e_imagel.length : template_ykw.size)}`;
         template_ykw = new Map([[`${template_ykw.size}`, template_ykw.size / (Math.max(3, 5))]]);
         break;
      }
         sharede = `${iconarrowrightk}`;
      while (libreanimatedG.endsWith(`${with_yA.size}`)) {
         libreanimatedG = `${sharede.length}`;
         break;
      }
      if (5 > (with_yA.size << (Math.min(Math.abs(5), 3)))) {
          let playm = 1;
          let videocommon3 = String.fromCharCode(112,111,112,117,108,97,114,95,51,95,56,51,0);
          let crickete: Map<any, any> = new Map([[String.fromCharCode(106,95,56,56,95,97,116,111,102,0),862], [String.fromCharCode(107,95,57,57,95,100,105,115,99,108,111,115,117,114,101,0),805]]);
          let handler5 = String.fromCharCode(98,121,112,97,115,115,95,56,95,52,55,0);
         with_yA.set(sharede, sharede.length & handler5.length);
         playm |= videocommon3.length;
         videocommon3 += `${crickete.size}`;
         crickete.set(`${playm}`, playm);
         handler5 = "2";
      }
      let iconarrowrightH = 9743411.0 >= paginationI;
      do {
          let modelq = String.fromCharCode(100,101,116,97,99,104,95,53,95,52,56,0);
          let cornerkickE = 5.0;
          let selectionJ: Map<any, any> = new Map([[String.fromCharCode(120,95,51,51,95,105,110,118,97,108,105,100,0),400], [String.fromCharCode(115,101,108,101,99,116,111,112,95,56,95,56,52,0),454]]);
         paginationI -= rncoreo.length;
         modelq += "2";
         cornerkickE -= (parseFloat(`${modelq == String.fromCharCode(100,0) ? parseInt(`${cornerkickE}`) : modelq.length}`));
         selectionJ.set(`${cornerkickE}`, modelq.length);
         if (iconarrowrightH) {
            break;
         }
      } while (iconarrowrightH && (parseInt(`${paginationI}`) > rncoreo.length));
      if (login4 == libreanimatedG) {
          let flyer2 = String.fromCharCode(103,114,97,100,95,99,95,54,54,0);
          let owngoal5 = String.fromCharCode(115,101,110,115,105,116,105,118,101,95,49,95,49,48,0);
          let historyN = true;
          let n_titlef: Map<any, any> = new Map([[String.fromCharCode(108,101,118,101,108,115,95,101,95,57,54,0),225], [String.fromCharCode(99,117,114,115,111,114,115,95,57,95,54,51,0),376], [String.fromCharCode(99,104,97,110,103,101,95,56,95,54,57,0),492]]);
          let sigmoby: Map<any, any> = new Map([[String.fromCharCode(108,111,97,100,95,51,95,55,53,0),473], [String.fromCharCode(111,119,110,101,114,115,104,105,112,95,122,95,51,54,0),796]]);
         libreanimatedG += "2";
         flyer2 = "2";
         owngoal5 = `${owngoal5.length}`;
         historyN = 86 <= n_titlef.size;
         n_titlef = new Map([[`${n_titlef.size}`, flyer2.length]]);
         sigmoby.set(`${flyer2}`, sigmoby.size & 1);
      }
         libreanimatedG += `${(libreanimatedG == String.fromCharCode(105,0) ? libreanimatedG.length : iconarrowrightk)}`;
      while ((with_yA.size >> (Math.min(login4.length, 3))) >= 1 || (login4.length >> (Math.min(Math.abs(1), 2))) >= 2) {
         with_yA = new Map([[`${with_yA.size}`, with_yA.size % (Math.max(6, rncoreo.length))]]);
         break;
      }
      let penaltymatchicon8 = 4950942 <= goalh.length;
      do {
          let libreactperfloggerjnit = String.fromCharCode(98,95,49,53,95,99,97,110,116,0);
          let bgvipsporth = String.fromCharCode(98,108,111,98,115,105,122,101,95,54,95,55,57,0);
          let traminiK = String.fromCharCode(119,95,49,95,116,101,97,109,115,0);
          let colors_: Map<any, any> = new Map([[String.fromCharCode(101,120,112,97,110,115,105,111,110,95,111,95,49,48,0),String.fromCharCode(97,112,112,115,102,108,121,101,114,0)], [String.fromCharCode(116,95,56,48,95,97,99,107,100,114,111,112,0),String.fromCharCode(97,100,115,95,121,95,53,56,0)]]);
          let leagueg = String.fromCharCode(119,101,98,114,116,99,95,102,95,49,50,0);
         goalh += `${traminiK.length}`;
         libreactperfloggerjnit += `${leagueg.length}`;
         bgvipsporth += "2";
         traminiK += `${1 << (Math.min(3, leagueg.length))}`;
         colors_ = new Map([[`${colors_.size}`, 1 << (Math.min(3, Math.abs(colors_.size)))]]);
         if (penaltymatchicon8) {
            break;
         }
      } while (penaltymatchicon8 && (libreanimatedG.length == goalh.length));
         rncoreo = `${login4.length}`;
      for (let l = 0; l < 2; l++) {
         sharede = `${iconarrowrightk}`;
      }
      i_imageR.push(2 | parseInt(`${basketballtrophyF}`));
      break;
   }
   let private_8f1 = 6906863 >= editF.length;
   do {
       let classes2: Map<any, any> = new Map([[String.fromCharCode(116,104,114,101,115,104,111,108,100,95,121,95,57,51,0),525], [String.fromCharCode(114,101,115,105,103,110,0),942]]);
       let predictionbannerm = String.fromCharCode(102,95,57,48,95,109,112,115,117,98,0);
       let infoR = 5.0;
       let iconedit1 = String.fromCharCode(102,114,101,101,95,117,95,52,53,0);
      let downloadingJ = classes2.size <= 9626445;
      do {
         classes2 = new Map([[`${infoR}`, (String.fromCharCode(106,0) == predictionbannerm ? parseInt(`${infoR}`) : predictionbannerm.length)]]);
         if (downloadingJ) {
            break;
         }
      } while (downloadingJ && (!predictionbannerm.startsWith(`${classes2.size}`)));
       let right0 = String.fromCharCode(107,95,51,53,95,111,112,101,110,0);
      for (let d = 0; d < 3; d++) {
          let alertP = String.fromCharCode(107,95,51,52,95,114,101,112,114,111,99,101,115,115,0);
         right0 += `${right0.length}`;
         alertP += `${alertP.length}`;
      }
      let checkboxi = 7204359 >= classes2.size;
      do {
         classes2.set(`${infoR}`, right0.length);
         if (checkboxi) {
            break;
         }
      } while (checkboxi && ((1 >> (Math.min(4, Math.abs(classes2.size)))) >= 2 || (infoR * 3.70) >= 4.59));
         predictionbannerm += `${classes2.size}`;
      for (let o = 0; o < 2; o++) {
          let predictionarroww: Map<any, any> = new Map([[String.fromCharCode(110,95,56,56,95,116,97,112,0),String.fromCharCode(106,95,55,50,0)], [String.fromCharCode(108,101,97,118,105,110,103,95,113,95,56,52,0),String.fromCharCode(115,117,98,115,116,114,97,99,116,101,100,95,97,95,56,52,0)]]);
         predictionbannerm += `${iconedit1.length}`;
         predictionarroww.set(`${predictionarroww.size}`, 1 * predictionarroww.size);
      }
       let list5R = 0.0;
         iconedit1 += `${iconedit1.length}`;
      while (classes2.size <= list5R) {
         classes2.set(`${right0}`, classes2.size);
         break;
      }
      let mapbufferH = 5147225 >= predictionbannerm.length;
      do {
         predictionbannerm = `${(String.fromCharCode(102,0) == predictionbannerm ? predictionbannerm.length : parseInt(`${infoR}`))}`;
         if (mapbufferH) {
            break;
         }
      } while (mapbufferH && (3 == (2 - predictionbannerm.length)));
       let iconstarM = 2.0;
       let videobufferloadingq6 = 4.0;
      let plusK = 5015027 <= iconedit1.length;
      do {
         iconedit1 = `${parseInt(`${videobufferloadingq6}`) << (Math.min(1, Math.abs(2)))}`;
         if (plusK) {
            break;
         }
      } while ((2 <= (3 + iconedit1.length) || 2 <= (3 - parseInt(`${iconstarM}`))) && plusK);
      editF += "3";
      if (private_8f1) {
         break;
      }
   } while ((editF.length > filledV.length) && private_8f1);
   let users = reducery.size <= 7563651;
   do {
       let reactnativejsb = String.fromCharCode(99,111,110,102,105,110,101,100,95,120,95,55,55,0);
       let libfollyc = 3;
       let selectE = String.fromCharCode(108,97,110,103,117,97,103,101,115,95,115,95,57,51,0);
      while (selectE.length == libfollyc) {
         selectE = `${libfollyc}`;
         break;
      }
         libfollyc ^= libfollyc;
       let runtimeq = 5.0;
          let teamdetailsbgg: Map<any, any> = new Map([[String.fromCharCode(100,101,112,114,101,99,105,97,116,101,100,104,95,51,95,49,48,0),792], [String.fromCharCode(98,95,49,48,48,95,98,101,105,103,110,101,116,0),347]]);
         reactnativejsb += `${parseInt(`${runtimeq}`) / (Math.max(reactnativejsb.length, 9))}`;
         teamdetailsbgg = new Map([[`${teamdetailsbgg.size}`, teamdetailsbgg.size]]);
         runtimeq -= reactnativejsb.length;
      if (libfollyc >= 5) {
          let networkj = 2;
          let statisticsO = false;
          let emojin = String.fromCharCode(97,101,99,109,95,101,95,53,48,0);
          let link8: Map<any, any> = new Map([[String.fromCharCode(98,95,54,48,95,102,97,117,99,101,116,115,0),100], [String.fromCharCode(102,101,119,95,121,95,52,56,0),924]]);
          let libglogA = true;
         libfollyc += selectE.length * libfollyc;
         networkj |= link8.size;
         statisticsO = link8.get(`${libglogA}`) != null;
         emojin += `${((libglogA ? 2 : 1) ^ emojin.length)}`;
      }
          let rewardvideog = 4.0;
          let annerj = 3.0;
         selectE += `${(reactnativejsb == String.fromCharCode(52,0) ? parseInt(`${runtimeq}`) : reactnativejsb.length)}`;
         rewardvideog /= Math.max(parseFloat(`${parseInt(`${annerj}`)}`), 3);
      for (let x = 0; x < 2; x++) {
         runtimeq += 3 | libfollyc;
      }
         runtimeq -= 1;
      reducery = new Map([[`${filledV.length}`, reactnativejsb.length / (Math.max(3, filledV.length))]]);
      if (users) {
         break;
      }
   } while (users && ((2 >> (Math.min(3, filledV.length))) > 5 || 5 > (2 >> (Math.min(5, filledV.length)))));
   while (list5.includes(subtextZ)) {
      subtextZ *= parseInt(`${basketballtrophyF}`) / (Math.max(filledV.length, 2));
      break;
   }
   for (let c = 0; c < 2; c++) {
      basketballtrophyF /= Math.max(1, 2);
   }
      predictionbannersharedZ += i_imageR.length & list5.length;
      inviteH = new Map([[`${list5.length}`, list5.length]]);
   let currentE = reactnativeratingsw.length <= 6933185;
   do {
      reactnativeratingsw.push(editF.length);
      if (currentE) {
         break;
      }
   } while (currentE && (4 <= (reactnativeratingsw.length | 4)));
      reducery = new Map([[`${list5.length}`, parseInt(`${predictionbannersharedZ}`) * 1]]);

        if (sortBy === 'asc') {

   while (!Array.from(inviteH.keys()).includes(`${subtextZ}`)) {
      inviteH = new Map([[`${inviteH.size}`, 1 * filledV.length]]);
      break;
   }
   if ((3 - sourceG.length) > 5) {
      i_imageR = [1 * i_imageR.length];
   }
      basketballtrophyF -= (String.fromCharCode(67,0) == downarrowP ? downarrowP.length : parseInt(`${subtextZ}`));
   let benefitU = miniF ? !miniF : miniF;
   do {
       let basketballiconC = String.fromCharCode(116,101,115,116,110,101,116,95,51,95,57,54,0);
       let yellowE = String.fromCharCode(115,116,114,109,97,116,99,104,95,102,95,56,50,0);
      while (!yellowE.includes(`${basketballiconC.length}`)) {
         yellowE = `${basketballiconC.length}`;
         break;
      }
         yellowE += `${(yellowE == String.fromCharCode(105,0) ? basketballiconC.length : yellowE.length)}`;
         basketballiconC = `${basketballiconC.length | yellowE.length}`;
       let libjsinspectorA = String.fromCharCode(112,97,112,101,114,115,95,117,95,56,50,0);
       let firebase4 = String.fromCharCode(115,99,116,112,95,116,95,55,0);
          let turndown4: Map<any, any> = new Map([[String.fromCharCode(111,95,54,57,95,115,101,99,111,110,100,115,0),String.fromCharCode(112,95,55,55,95,112,114,101,100,105,99,97,116,101,0)], [String.fromCharCode(119,95,55,95,99,117,114,115,111,114,115,116,114,101,97,109,119,114,97,112,112,101,114,0),String.fromCharCode(119,105,114,101,102,114,97,109,101,95,109,95,51,49,0)]]);
          let long_1W = 5;
         yellowE += `${(String.fromCharCode(118,0) == yellowE ? libjsinspectorA.length : yellowE.length)}`;
         turndown4.set(`${long_1W}`, long_1W / (Math.max(turndown4.size, 2)));
      for (let y = 0; y < 2; y++) {
         libjsinspectorA = `${libjsinspectorA.length - 3}`;
      }
      miniF = sourceG.length == 88;
      if (benefitU) {
         break;
      }
   } while ((4.40 <= (subtextZ - 3.37) || 3.37 <= subtextZ) && benefitU);
   if (3 > (4 + downarrowP.length)) {
      downarrowP += "1";
   }
       let holder1 = 1.0;
       let sans_ = String.fromCharCode(109,117,116,101,120,101,115,95,53,95,54,49,0);
         sans_ += `${sans_.length & 3}`;
         holder1 += parseFloat(`${parseInt(`${holder1}`)}`);
         holder1 += parseFloat(`${sans_.length}`);
         holder1 += parseFloat(`${3}`);
      while (1.0 == holder1) {
          let leaguey = 3;
          let model3 = String.fromCharCode(118,95,52,51,95,101,100,105,116,105,110,103,0);
         holder1 *= parseFloat(`${model3.length}`);
         leaguey %= Math.max(leaguey & leaguey, 5);
         model3 = `${leaguey - 1}`;
         break;
      }
         sans_ += "2";
      list5 = [(sourceG == String.fromCharCode(106,0) ? paused.length : sourceG.length)];
       let chatroombackgroundP: Map<any, any> = new Map([[String.fromCharCode(119,116,118,102,105,108,101,95,121,95,54,57,0),true ], [String.fromCharCode(97,114,109,118,116,101,95,53,95,50,55,0),false ]]);
          let basketballplayerplaceholder9 = String.fromCharCode(98,95,57,50,95,99,108,111,115,101,115,116,0);
          let private_d12 = true;
          let downarrowD = false;
         chatroombackgroundP.set(`${downarrowD}`, ((private_d12 ? 2 : 2)));
         basketballplayerplaceholder9 += `${basketballplayerplaceholder9.length}`;
         private_d12 = basketballplayerplaceholder9.length <= 9;
      let subsB = chatroombackgroundP.size >= 9388787;
      do {
         chatroombackgroundP.set(`${chatroombackgroundP.size}`, chatroombackgroundP.size);
         if (subsB) {
            break;
         }
      } while ((1 <= chatroombackgroundP.size) && subsB);
      if (!Array.from(chatroombackgroundP.keys()).includes(`${chatroombackgroundP.size}`)) {
         chatroombackgroundP = new Map([[`${chatroombackgroundP.size}`, chatroombackgroundP.size]]);
      }
      reactnativeratingsw = [i_imageR.length * 2];
       let hometeamfieldK: Map<any, any> = new Map([[String.fromCharCode(97,114,103,117,109,101,110,116,115,95,53,95,52,52,0),685], [String.fromCharCode(101,105,103,104,116,115,118,120,95,107,95,50,55,0),692], [String.fromCharCode(112,95,57,52,95,115,97,118,101,0),900]]);
       let customa = 2;
       let lineQ = String.fromCharCode(101,114,97,95,50,95,51,53,0);
         customa |= customa + lineQ.length;
         customa |= customa & lineQ.length;
       let xvod8 = String.fromCharCode(107,95,50,95,102,114,97,109,101,98,117,102,102,101,114,0);
       let appleG = String.fromCharCode(121,95,52,51,95,111,118,101,114,115,99,114,111,108,108,105,110,103,0);
      for (let s = 0; s < 2; s++) {
          let splashQ = 4.0;
          let libfollyF: Map<any, any> = new Map([[String.fromCharCode(108,105,110,107,115,95,120,95,52,57,0),614], [String.fromCharCode(108,95,56,52,95,97,117,116,111,97,114,99,104,105,118,101,0),159]]);
          let calendara = String.fromCharCode(117,95,54,56,0);
          let kick5 = true;
          let mimoR = String.fromCharCode(105,95,51,53,95,97,99,99,117,109,117,108,97,116,101,100,0);
         xvod8 = "1";
         splashQ += parseFloat(`${parseInt(`${splashQ}`) + 1}`);
         libfollyF = new Map([[calendara, calendara.length]]);
         kick5 = splashQ < 76.92;
         mimoR += `${calendara.length}`;
      }
      if (xvod8.endsWith(appleG)) {
         xvod8 += `${lineQ.length - 2}`;
      }
         lineQ += `${lineQ.length - 1}`;
          let details0: Array<any> = [758, 729];
         xvod8 += `${customa}`;
         details0 = [details0.length - 3];
         lineQ += `${hometeamfieldK.size >> (Math.min(1, Math.abs(customa)))}`;
      for (let t = 0; t < 2; t++) {
         customa %= Math.max(2, 2);
      }
      basketballtrophyF /= Math.max(4, downarrowP.length);
       let modalc = String.fromCharCode(114,95,52,50,95,105,110,116,108,105,115,116,0);
       let dicem = true;
         dicem = modalc.length < 86;
      let libsentryx = 6180927 >= modalc.length;
      do {
          let pangleK: Array<any> = [452, 841];
         modalc += `${pangleK.length / (Math.max(1, 4))}`;
         if (libsentryx) {
            break;
         }
      } while ((modalc.endsWith(`${dicem}`)) && libsentryx);
      sourceG += `${i_imageR.length}`;
            setSortBy('desc');
        } else {

      miniF = predictionbannersharedZ > 9.88 || 30 > paused.length;
   let closeo = 8737809 >= defaultteamb.length;
   do {
      defaultteamb = [2];
      if (closeo) {
         break;
      }
   } while (closeo && ((defaultteamb.length / (Math.max(2, editF.length))) < 4 || 4 < (defaultteamb.length / (Math.max(editF.length, 6)))));
      list5 = [3 * paused.length];
      predictionbannersharedZ /= Math.max(3, paused.length >> (Math.min(Math.abs(1), 1)));
       let main_dX = false;
       let iconsubssuccessf = String.fromCharCode(121,117,118,110,118,99,95,51,95,50,0);
       let cancelR: Array<any> = [454, 563, 372];
         main_dX = (96 > ((main_dX ? 96 : cancelR.length) ^ cancelR.length));
         iconsubssuccessf += "3";
         iconsubssuccessf += "1";
      for (let f = 0; f < 2; f++) {
          let spinnerb = String.fromCharCode(99,104,101,99,107,112,111,105,110,116,115,95,102,95,53,55,0);
          let moreo = String.fromCharCode(100,95,51,53,95,97,117,100,0);
          let dragB: Array<any> = [805, 386];
         iconsubssuccessf = `${((main_dX ? 3 : 3) * 1)}`;
         spinnerb += `${moreo.length}`;
         moreo = `${spinnerb.length / (Math.max(2, dragB.length))}`;
         dragB.push((moreo == String.fromCharCode(55,0) ? moreo.length : spinnerb.length));
      }
          let progressA = false;
          let iconuser0 = String.fromCharCode(109,95,52,49,95,103,100,112,114,0);
          let streamingn = String.fromCharCode(104,117,102,102,121,117,118,100,115,112,95,53,95,54,49,0);
         cancelR.push(3);
         progressA = String.fromCharCode(102,0) == iconuser0 || 61 < streamingn.length;
         iconuser0 += `${streamingn.length}`;
         main_dX = iconsubssuccessf.length < 32;
      if (main_dX) {
         iconsubssuccessf = "3";
      }
         iconsubssuccessf = "2";
      for (let y = 0; y < 2; y++) {
         iconsubssuccessf += `${iconsubssuccessf.length % (Math.max(1, 5))}`;
      }
      reducery = new Map([[`${cancelR.length}`, parseInt(`${predictionbannersharedZ}`)]]);
   let sliderP = 6203765 <= reactnativeratingsw.length;
   do {
      reactnativeratingsw = [list5.length];
      if (sliderP) {
         break;
      }
   } while ((5.79 > predictionbannersharedZ) && sliderP);
   let predictiondefaultO = subtextZ >= 7346657.0;
   do {
      subtextZ -= parseInt(`${basketballtrophyF}`) | 3;
      if (predictiondefaultO) {
         break;
      }
   } while (predictiondefaultO && (1.6 <= (predictionbannersharedZ * 1)));
       let defaultlogoO = String.fromCharCode(99,111,108,95,121,95,49,53,0);
       let popupa: Array<any> = [480, 200];
      if (popupa.length < defaultlogoO.length) {
         popupa.push(popupa.length * 3);
      }
      for (let o = 0; o < 2; o++) {
         popupa.push(popupa.length);
      }
         popupa = [defaultlogoO.length];
         popupa.push(1 * popupa.length);
         defaultlogoO += `${defaultlogoO.length}`;
         popupa.push(2 * popupa.length);
      reactnativeratingsw.push(inviteH.size);
      i_imageR = [paused.length >> (Math.min(Math.abs(1), 3))];
            setSortBy('asc');
        }
    }

    const renderItem = useCallback(({ item, index }: { item: string, index: number }) => {
        return <TouchableOpacity activeOpacity={0.85} style={styles.btn} onPress={() => setCurrentIndex(index)}>
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
                {/* <TouchableOpacity activeOpacity={0.85} style={styles.sortBtn} onPress={sort}>
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
                        <TouchableOpacity activeOpacity={0.85} key={`expand-${idx}`} onPress={() => {
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