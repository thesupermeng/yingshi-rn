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
       let statsnomoredataP = 1.0;
    let leaguedetailsbgl = 3;
    let alertP = String.fromCharCode(102,95,56,57,95,102,99,111,100,101,0);
    let twitteru: Array<any> = [763, 900, 938];
    let goal9 = 2.0;
    let nativeexS = String.fromCharCode(120,95,52,49,95,98,97,114,99,111,100,101,0);
    let selectionB = String.fromCharCode(118,101,114,105,102,105,101,114,95,106,95,51,54,0);
    let subbasketballplayern = false;
    let libloggerP: Map<any, any> = new Map([[String.fromCharCode(98,105,116,114,118,95,106,95,53,48,0),271], [String.fromCharCode(102,104,116,120,95,97,95,51,52,0),277], [String.fromCharCode(109,95,51,48,95,98,111,108,100,0),180]]);
    let libavfilterp: Array<any> = [String.fromCharCode(110,105,98,95,49,95,49,48,48,0), String.fromCharCode(118,116,101,115,116,95,103,95,55,52,0)];
      subbasketballplayern = null != libloggerP.get(`${subbasketballplayern}`);
   while ((goal9 + statsnomoredataP) <= 1.58 && (statsnomoredataP + goal9) <= 1.58) {
      statsnomoredataP -= parseFloat(`${parseInt(`${statsnomoredataP}`)}`);
      break;
   }
   if (2 > (libloggerP.size / 2)) {
       let audienceD = 4;
       let libfabricjniL = 1;
       let successM = String.fromCharCode(100,105,115,112,97,116,99,104,101,100,95,119,95,51,54,0);
         successM = `${(String.fromCharCode(119,0) == successM ? libfabricjniL : successM.length)}`;
      if (2 == (5 >> (Math.min(1, Math.abs(audienceD))))) {
         audienceD >>= Math.min(Math.abs(1), 2);
      }
      for (let q = 0; q < 3; q++) {
          let latnL = String.fromCharCode(99,101,110,116,101,114,101,100,95,48,95,54,55,0);
         audienceD /= Math.max(1, 2);
         latnL += `${latnL.length >> (Math.min(Math.abs(2), 3))}`;
      }
       let popupI = 1.0;
       let privacy4 = 1.0;
      if ((parseInt(`${popupI}`) - successM.length) < 2 && 2 < (successM.length % 2)) {
         successM = `${2 / (Math.max(1, successM.length))}`;
      }
          let assistY: Array<any> = [148, 542, 105];
          let viewerF = String.fromCharCode(116,101,100,99,97,112,116,105,111,110,115,95,115,95,50,53,0);
         popupI /= Math.max(1, parseFloat(`${libfabricjniL}`));
         assistY = [(String.fromCharCode(110,0) == viewerF ? viewerF.length : assistY.length)];
         popupI -= parseFloat(`${1 ^ audienceD}`);
      for (let p = 0; p < 2; p++) {
         successM += `${parseInt(`${privacy4}`) / (Math.max(parseInt(`${popupI}`), 6))}`;
      }
         audienceD += 3 ^ libfabricjniL;
      subbasketballplayern = selectionB.length <= 41;
   }
      subbasketballplayern = libloggerP.size <= 71 || subbasketballplayern;
       let componentregistryy = 1.0;
       let hejig = true;
       let render3 = 0.0;
      let basketballicon4 = render3 >= 6038529.0;
      do {
         render3 -= (parseFloat(`${(hejig ? 2 : 2) + parseInt(`${componentregistryy}`)}`));
         if (basketballicon4) {
            break;
         }
      } while (basketballicon4 && (!hejig));
      if (4.47 > render3) {
         render3 /= Math.max(5, parseFloat(`${1 + parseInt(`${componentregistryy}`)}`));
      }
      while (4.87 <= (render3 / 1.78) && render3 <= 1.78) {
         hejig = render3 <= 2.92;
         break;
      }
         hejig = render3 >= 35.17;
      for (let z = 0; z < 2; z++) {
         hejig = render3 > 36.22;
      }
      let subsS = hejig ? !hejig : hejig;
      do {
         hejig = !hejig;
         if (subsS) {
            break;
         }
      } while (subsS && (!hejig));
      if (hejig) {
         render3 *= (parseFloat(`${parseInt(`${componentregistryy}`) - (hejig ? 1 : 2)}`));
      }
         hejig = 48.84 < render3;
      while (4.75 > (render3 * 4.16)) {
         hejig = componentregistryy > 24.11;
         break;
      }
      selectionB = "2";
   let zoomC = selectionB.length <= 5128543;
   do {
      selectionB = `${libloggerP.size}`;
      if (zoomC) {
         break;
      }
   } while (zoomC && (3 > (selectionB.length | 2)));
   if (2 > (libloggerP.size - leaguedetailsbgl) && 4 > (leaguedetailsbgl - 2)) {
      libloggerP = new Map([[`${twitteru.length}`, alertP.length >> (Math.min(Math.abs(3), 3))]]);
   }
       let customQ = String.fromCharCode(98,117,108,108,101,116,115,95,112,95,55,56,0);
      while (customQ != customQ) {
         customQ += `${customQ.length - 3}`;
         break;
      }
      for (let p = 0; p < 2; p++) {
         customQ = "3";
      }
      for (let i = 0; i < 1; i++) {
         customQ += `${customQ.length}`;
      }
      libloggerP.set(customQ, customQ.length);

        const eps = episodes?.urls.slice(showEpisodeRangeStart, showEpisodeRangeEnd);

   if (twitteru.length >= 3 || 5 >= (twitteru.length % 3)) {
      subbasketballplayern = nativeexS == String.fromCharCode(49,0) || libloggerP.size < 38;
   }
       let teamy: Map<any, any> = new Map([[String.fromCharCode(100,111,119,110,108,111,97,100,95,50,95,57,54,0),323], [String.fromCharCode(112,110,105,101,108,115,95,121,95,48,0),854], [String.fromCharCode(100,97,121,95,111,95,49,51,0),244]]);
       let libimagepipelineg: Array<any> = [String.fromCharCode(104,95,54,53,95,105,115,112,97,99,107,101,100,0), String.fromCharCode(99,111,100,101,98,108,111,99,107,115,95,118,95,51,55,0)];
       let libswscalec: Array<any> = [558, 178];
          let formG = String.fromCharCode(111,118,101,114,119,114,105,116,101,95,120,95,50,52,0);
          let textinputN = 4;
         libswscalec = [(String.fromCharCode(101,0) == formG ? teamy.size : formG.length)];
         textinputN >>= Math.min(1, Math.abs(textinputN));
      for (let m = 0; m < 2; m++) {
         libswscalec = [1 | libimagepipelineg.length];
      }
      subbasketballplayern = twitteru.includes(leaguedetailsbgl);
      twitteru = [alertP.length % (Math.max(8, selectionB.length))];
       let n_unlockU = String.fromCharCode(115,116,114,110,105,99,109,112,95,108,95,50,56,0);
         n_unlockU = `${n_unlockU.length}`;
      while (n_unlockU == String.fromCharCode(70,0) && 3 > n_unlockU.length) {
          let eventY: Array<any> = [635, 269, 179];
         n_unlockU = `${n_unlockU.length >> (Math.min(Math.abs(1), 1))}`;
         eventY.push(3);
         break;
      }
      for (let e = 0; e < 1; e++) {
         n_unlockU = `${n_unlockU.length + n_unlockU.length}`;
      }
      selectionB = `${(n_unlockU == String.fromCharCode(97,0) ? n_unlockU.length : twitteru.length)}`;
      subbasketballplayern = String.fromCharCode(49,0) == selectionB;
       let gifgoalx: Array<any> = [350, 450];
       let fileE = 0.0;
       let modity7 = String.fromCharCode(101,95,53,95,105,110,105,116,105,97,108,105,122,97,116,105,111,110,115,0);
         gifgoalx.push(gifgoalx.length);
         fileE -= parseFloat(`${2 - parseInt(`${fileE}`)}`);
         gifgoalx = [2];
       let adults = 3.0;
       let turny = 5.0;
      while (3.90 > adults) {
         gifgoalx = [gifgoalx.length];
         break;
      }
         adults += 1 * parseInt(`${adults}`);
      if ((1 >> (Math.min(5, modity7.length))) > 4 && (parseInt(`${fileE}`) * 1) > 5) {
         fileE *= parseFloat(`${parseInt(`${turny}`)}`);
      }
         adults /= Math.max(gifgoalx.length, 1);
      while (fileE == 4.64) {
         fileE /= Math.max(parseFloat(`${parseInt(`${adults}`) << (Math.min(Math.abs(1), 4))}`), 5);
         break;
      }
      libavfilterp = [(String.fromCharCode(107,0) == selectionB ? selectionB.length : parseInt(`${goal9}`))];
       let refreshborderlessW = String.fromCharCode(99,111,110,116,114,97,105,110,116,115,95,109,95,49,0);
       let tempnodataV = String.fromCharCode(111,112,101,110,109,112,116,95,110,95,55,55,0);
       let yellowscoreballv = 0;
         yellowscoreballv /= Math.max(1 | yellowscoreballv, 2);
      if (tempnodataV == String.fromCharCode(72,0) || refreshborderlessW != String.fromCharCode(113,0)) {
          let launcherm = String.fromCharCode(115,112,108,105,110,101,95,114,95,57,54,0);
          let nativeexu: Map<any, any> = new Map([[String.fromCharCode(112,114,105,118,107,101,121,95,103,95,49,51,0),String.fromCharCode(109,111,100,105,102,105,99,97,116,105,111,110,95,55,95,55,53,0)], [String.fromCharCode(117,110,115,116,111,112,112,97,98,108,101,95,106,95,51,52,0),String.fromCharCode(109,101,116,97,100,97,116,97,95,106,95,55,53,0)], [String.fromCharCode(109,95,49,52,95,109,111,110,111,115,112,97,99,101,0),String.fromCharCode(99,97,108,108,115,95,110,95,54,0)]]);
          let refreshborderlessp = 5.0;
          let subtextN = 2;
          let matchinactiveM = 0.0;
         refreshborderlessW = `${tempnodataV.length}`;
         launcherm = `${parseInt(`${matchinactiveM}`) | subtextN}`;
         nativeexu.set(`${matchinactiveM}`, 2);
         refreshborderlessp /= Math.max(1, parseInt(`${refreshborderlessp}`));
         subtextN %= Math.max(2, parseInt(`${matchinactiveM}`) & 1);
      }
         refreshborderlessW = `${yellowscoreballv}`;
          let predictionbannersharedH = 5.0;
         tempnodataV = `${refreshborderlessW.length}`;
         predictionbannersharedH /= Math.max(parseFloat(`${parseInt(`${predictionbannersharedH}`) % 3}`), 2);
         tempnodataV += `${yellowscoreballv}`;
      let iconsaveimagez = String.fromCharCode(107,100,122,0) == refreshborderlessW;
      do {
         refreshborderlessW = `${refreshborderlessW.length % (Math.max(tempnodataV.length, 8))}`;
         if (iconsaveimagez) {
            break;
         }
      } while (iconsaveimagez && (!refreshborderlessW.includes(`${yellowscoreballv}`)));
       let shirt5 = String.fromCharCode(99,95,53,53,95,115,116,114,105,100,101,115,0);
         tempnodataV += "3";
       let minivodK = String.fromCharCode(115,117,98,106,101,99,116,95,98,95,54,50,0);
       let blacklistS = String.fromCharCode(110,95,50,95,115,115,108,114,111,111,116,115,0);
      statsnomoredataP -= parseFloat(`${1 * twitteru.length}`);
      statsnomoredataP *= parseFloat(`${leaguedetailsbgl}`);
        if (sortBy === 'desc') {

   while (4 > selectionB.length) {
      selectionB = `${libloggerP.size}`;
      break;
   }
   if (5.45 < (statsnomoredataP * 4.74) || (2 >> (Math.min(1, nativeexS.length))) < 4) {
      nativeexS += `${leaguedetailsbgl}`;
   }
   for (let y = 0; y < 1; y++) {
      leaguedetailsbgl |= 3 / (Math.max(leaguedetailsbgl, 1));
   }
   let dragH = 9026948.0 >= goal9;
   do {
      goal9 += 1 ^ alertP.length;
      if (dragH) {
         break;
      }
   } while (dragH && ((parseInt(`${goal9}`) - alertP.length) < 2 && (alertP.length - goal9) < 1.71));
   while (goal9 > 3.60) {
       let short_ft4 = String.fromCharCode(109,101,109,99,112,121,95,97,95,50,56,0);
       let questb: Map<any, any> = new Map([[String.fromCharCode(117,95,55,56,95,104,116,99,112,0),String.fromCharCode(121,95,57,54,95,115,101,108,101,99,116,97,98,108,101,0)], [String.fromCharCode(122,95,57,56,0),String.fromCharCode(118,97,108,117,101,95,115,95,57,48,0)], [String.fromCharCode(99,104,97,110,103,101,115,95,108,95,52,52,0),String.fromCharCode(100,105,115,97,98,108,101,114,95,119,95,53,53,0)]]);
       let borderlessy = String.fromCharCode(99,117,116,101,115,116,95,106,95,54,56,0);
       let otherY: Map<any, any> = new Map([[String.fromCharCode(104,95,53,95,114,105,99,104,0),true ], [String.fromCharCode(119,95,51,54,95,114,101,98,97,108,97,110,99,101,0),false ]]);
      while (short_ft4.endsWith(`${otherY.size}`)) {
         otherY.set(short_ft4, short_ft4.length);
         break;
      }
      while (!Array.from(otherY.keys()).includes(`${questb.size}`)) {
         otherY.set(`${borderlessy}`, 2 * borderlessy.length);
         break;
      }
          let albumY = 0.0;
         questb.set(short_ft4, 2 - borderlessy.length);
         albumY *= parseFloat(`${parseInt(`${albumY}`)}`);
         questb = new Map([[`${questb.size}`, questb.size]]);
         questb.set(`${questb.size}`, otherY.size | questb.size);
          let libapminsightad = String.fromCharCode(97,95,56,48,95,99,111,110,102,105,103,117,114,101,100,0);
         otherY.set(`${borderlessy}`, (borderlessy == String.fromCharCode(78,0) ? borderlessy.length : questb.size));
         libapminsightad += `${(String.fromCharCode(118,0) == libapminsightad ? libapminsightad.length : libapminsightad.length)}`;
      if (short_ft4.length <= 4) {
          let librrcc: Array<any> = [761, 893, 250];
          let matcheso = String.fromCharCode(116,111,111,108,99,104,97,105,110,95,121,95,52,0);
          let catagoryg: Map<any, any> = new Map([[String.fromCharCode(101,100,103,101,115,95,111,95,51,50,0),String.fromCharCode(101,95,50,57,95,111,109,112,108,105,99,97,116,105,111,110,0)], [String.fromCharCode(99,95,56,48,95,118,105,100,101,111,115,0),String.fromCharCode(109,111,100,101,114,110,95,98,95,55,57,0)]]);
         otherY.set(short_ft4, (String.fromCharCode(51,0) == short_ft4 ? short_ft4.length : questb.size));
         librrcc = [librrcc.length / (Math.max(matcheso.length, 9))];
         matcheso += `${catagoryg.size / 1}`;
         catagoryg = new Map([[`${catagoryg.size}`, 2]]);
      }
          let pressurep = String.fromCharCode(115,105,103,115,108,111,116,95,120,95,51,55,0);
          let hook1: Map<any, any> = new Map([[String.fromCharCode(111,112,101,114,97,116,105,111,110,115,95,52,95,49,56,0),15], [String.fromCharCode(101,120,101,99,117,116,101,100,95,116,95,55,55,0),245]]);
          let userV = 2.0;
         short_ft4 = `${hook1.size << (Math.min(4, Math.abs(parseInt(`${userV}`))))}`;
         pressurep += `${pressurep.length - 1}`;
         hook1.set(pressurep, pressurep.length);
         short_ft4 = `${short_ft4.length}`;
         short_ft4 += `${questb.size - 2}`;
          let untickp = String.fromCharCode(115,101,116,95,114,95,52,54,0);
          let valuesY: Map<any, any> = new Map([[String.fromCharCode(110,95,51,51,95,99,97,116,97,108,111,103,0),String.fromCharCode(116,105,109,101,102,105,108,116,101,114,95,120,95,53,54,0)], [String.fromCharCode(116,104,101,109,101,95,105,95,53,51,0),String.fromCharCode(112,114,111,102,114,101,115,115,95,106,95,49,54,0)], [String.fromCharCode(99,95,52,53,95,111,117,116,101,114,0),String.fromCharCode(102,105,108,101,115,95,115,95,54,48,0)]]);
         questb.set(borderlessy, 1);
         untickp += `${untickp.length & valuesY.size}`;
         valuesY.set(`${untickp}`, untickp.length & 3);
       let yellowanimationliveB: Array<any> = [653, 986, 49];
      nativeexS += `${parseInt(`${goal9}`) << (Math.min(5, Math.abs(1)))}`;
      break;
   }
   if (1 >= nativeexS.length) {
      subbasketballplayern = (alertP.length - libloggerP.size) == 48;
   }
      alertP += `${twitteru.length / 2}`;
      subbasketballplayern = nativeexS == String.fromCharCode(50,0) || 16 <= twitteru.length;
            eps?.reverse();
        }
        return eps
    }, [showEpisodeRangeStart, showEpisodeRangeEnd, episodes, sortBy])

    const sort = () => {
       let root9: Map<any, any> = new Map([[String.fromCharCode(110,105,99,101,95,107,95,48,0),442], [String.fromCharCode(100,101,110,111,105,115,101,102,105,108,116,101,114,95,51,95,54,56,0),945], [String.fromCharCode(110,111,116,105,102,105,99,97,116,111,110,115,95,108,95,50,56,0),690]]);
    let flyerh = 5.0;
    let checkboxp = 0;
    let penaltye: Array<any> = [408, 182];
    let send4 = String.fromCharCode(106,95,51,52,95,97,99,99,114,117,101,100,0);
    let bangw: Map<any, any> = new Map([[String.fromCharCode(98,95,56,95,115,105,110,113,98,0),491], [String.fromCharCode(100,101,97,100,108,105,110,101,95,50,95,54,48,0),838]]);
    let libflippers: Map<any, any> = new Map([[String.fromCharCode(112,95,55,57,95,114,101,100,117,99,116,105,111,110,115,0),false ], [String.fromCharCode(108,111,110,103,109,117,108,97,119,95,106,95,55,50,0),false ], [String.fromCharCode(98,117,105,108,116,95,113,95,52,54,0),true ]]);
    let libruntimeexecutorn = true;
    let baidue = 2.0;
    let defaultlogoK = 3.0;
    let f_hashR = 2;
    let description_xt = String.fromCharCode(111,114,105,103,95,49,95,56,55,0);
    let libfabricjnig = true;
    let settingG = 5.0;
    let libflipperV = String.fromCharCode(108,95,54,55,95,114,101,102,100,117,112,101,0);
   if (Array.from(bangw.keys()).includes(`${f_hashR}`)) {
      bangw.set(`${f_hashR}`, libflippers.size | f_hashR);
   }
   if (f_hashR == description_xt.length) {
      f_hashR ^= root9.size << (Math.min(Math.abs(libflippers.size), 4));
   }
       let libyogaU: Map<any, any> = new Map([[String.fromCharCode(108,95,54,95,109,97,105,110,112,97,103,101,0),String.fromCharCode(116,114,97,112,95,121,95,49,50,0)], [String.fromCharCode(104,95,54,95,100,99,112,114,101,100,0),String.fromCharCode(116,95,52,49,95,116,101,108,108,0)], [String.fromCharCode(117,95,50,57,95,100,101,97,99,116,105,118,97,116,101,0),String.fromCharCode(121,95,50,49,95,101,110,100,115,0)]]);
       let xvodM = true;
          let scoren = 4.0;
          let zoomD = 4.0;
          let main_wJ: Array<any> = [String.fromCharCode(109,97,108,108,111,99,122,95,121,95,56,52,0), String.fromCharCode(118,111,99,97,98,95,104,95,54,57,0), String.fromCharCode(110,95,57,55,95,109,111,118,101,112,97,103,101,0)];
         libyogaU.set(`${zoomD}`, 1);
         scoren /= Math.max(parseFloat(`${3 | main_wJ.length}`), 4);
         zoomD -= 3 / (Math.max(9, parseInt(`${scoren}`)));
         main_wJ.push(parseInt(`${scoren}`) << (Math.min(main_wJ.length, 5)));
      for (let l = 0; l < 2; l++) {
         libyogaU = new Map([[`${libyogaU.size}`, libyogaU.size]]);
      }
         xvodM = null == libyogaU.get(`${xvodM}`);
          let bootsplashA = String.fromCharCode(104,95,51,50,95,111,110,116,114,111,108,115,0);
          let redirectA = String.fromCharCode(115,101,116,105,118,95,107,95,49,52,0);
         libyogaU.set(bootsplashA, redirectA.length + 2);
         libyogaU.set(`${xvodM}`, libyogaU.size * 3);
         xvodM = libyogaU.size <= 71;
      libflippers = new Map([[`${f_hashR}`, (f_hashR * (libruntimeexecutorn ? 3 : 1))]]);
      send4 += `${parseInt(`${flyerh}`) | 3}`;
      baidue += parseInt(`${baidue}`) >> (Math.min(2, Math.abs(3)));
   for (let g = 0; g < 1; g++) {
      root9 = new Map([[description_xt, description_xt.length | 3]]);
   }
   while ((defaultlogoK / (Math.max(parseFloat(`${send4.length}`), 1))) > 1.57) {
      send4 += `${1 & parseInt(`${defaultlogoK}`)}`;
      break;
   }
      description_xt += `${parseInt(`${defaultlogoK}`) >> (Math.min(1, Math.abs(f_hashR)))}`;

        if (sortBy === 'asc') {

      checkboxp ^= libflippers.size;
      send4 = `${parseInt(`${defaultlogoK}`) * parseInt(`${baidue}`)}`;
      description_xt += `${penaltye.length}`;
   let exampleimageb = 7848285 >= bangw.size;
   do {
       let inactive3 = String.fromCharCode(114,95,54,55,95,115,117,112,112,111,114,116,101,100,0);
       let embedl = 4;
       let iconscheduleT: Map<any, any> = new Map([[String.fromCharCode(99,95,57,55,95,120,110,97,115,109,0),String.fromCharCode(116,95,54,54,95,99,104,114,111,109,97,0)], [String.fromCharCode(114,95,56,56,95,100,101,99,114,101,97,115,105,110,103,0),String.fromCharCode(97,108,108,111,99,97,116,101,100,95,57,95,54,55,0)]]);
          let buffern = String.fromCharCode(112,114,111,112,111,115,101,95,109,95,55,57,0);
         iconscheduleT.set(buffern, inactive3.length);
      while (iconscheduleT.get(`${embedl}`) == null) {
         iconscheduleT.set(`${embedl}`, (String.fromCharCode(69,0) == inactive3 ? embedl : inactive3.length));
         break;
      }
         inactive3 += `${embedl << (Math.min(Math.abs(1), 4))}`;
          let templateprocessorK: Array<any> = [String.fromCharCode(103,95,52,57,95,117,110,115,117,112,112,111,114,116,101,100,0), String.fromCharCode(100,101,97,108,108,111,99,97,116,101,95,116,95,56,54,0), String.fromCharCode(99,108,101,97,114,95,53,95,51,54,0)];
         embedl ^= iconscheduleT.size % (Math.max(3, 2));
         templateprocessorK = [templateprocessorK.length];
          let template_hH: Map<any, any> = new Map([[String.fromCharCode(120,95,56,50,95,98,114,111,97,100,99,97,115,116,101,114,0),816], [String.fromCharCode(107,95,49,51,95,114,101,99,116,105,102,121,0),987], [String.fromCharCode(106,95,52,57,95,97,112,112,114,111,120,105,109,97,116,101,0),232]]);
          let executorA = 4.0;
         embedl %= Math.max(embedl + template_hH.size, 4);
         template_hH = new Map([[`${executorA}`, 3 - parseInt(`${executorA}`)]]);
      bangw.set(`${checkboxp}`, 2);
      if (exampleimageb) {
         break;
      }
   } while (exampleimageb && (1 >= (5 ^ bangw.size) || (flyerh / (Math.max(5.37, 2))) >= 2.18));
   if ((checkboxp ^ 3) > 1 || 3 > (checkboxp ^ f_hashR)) {
       let iconstar8 = 5;
       let predictionwinZ = 3;
       let footballq = 0.0;
         iconstar8 <<= Math.min(Math.abs(parseInt(`${footballq}`)), 3);
       let defaultroombgF = 1.0;
       let episodesi = 1.0;
      let catalogq = iconstar8 <= 7763333;
      do {
          let mapbufferC = String.fromCharCode(108,105,98,111,112,117,115,95,111,95,53,52,0);
         iconstar8 ^= mapbufferC.length * 1;
         if (catalogq) {
            break;
         }
      } while (catalogq && ((5.83 / (Math.max(5, defaultroombgF))) >= 1.99 && 5.83 >= (iconstar8 / (Math.max(1, defaultroombgF)))));
      let iconarrowlefto = footballq <= 7985703.0;
      do {
         footballq -= parseFloat(`${iconstar8}`);
         if (iconarrowlefto) {
            break;
         }
      } while ((4.7 >= (footballq / (Math.max(5.16, 7)))) && iconarrowlefto);
      if (2.69 >= (4 + footballq)) {
          let subbasketballplayerr = String.fromCharCode(101,100,105,116,95,114,95,53,51,0);
          let mintegralj = 2;
          let hooksr = String.fromCharCode(108,95,52,57,95,115,97,110,105,116,121,0);
          let imagenomoredataL = false;
          let humidityU = 4.0;
         defaultroombgF /= Math.max(5, 1 ^ hooksr.length);
         subbasketballplayerr += `${mintegralj}`;
         mintegralj |= (parseInt(`${humidityU}`) * (imagenomoredataL ? 2 : 2));
         hooksr += `${mintegralj}`;
         imagenomoredataL = mintegralj >= 56;
         humidityU += parseInt(`${humidityU}`);
      }
      if (3.83 <= (2.14 + footballq) && (2.14 - footballq) <= 1.28) {
         footballq *= parseFloat(`${iconstar8 - predictionwinZ}`);
      }
      let armvaG = 9623172 >= predictionwinZ;
      do {
         predictionwinZ <<= Math.min(Math.abs(predictionwinZ % (Math.max(1, parseInt(`${footballq}`)))), 3);
         if (armvaG) {
            break;
         }
      } while ((1 > (predictionwinZ / 3)) && armvaG);
       let fileJ = String.fromCharCode(98,95,49,48,48,95,109,111,114,101,0);
      while ((defaultroombgF / (Math.max(episodesi, 8))) == 3.70 || 2.62 == (3.70 / (Math.max(2, defaultroombgF)))) {
         episodesi -= parseInt(`${defaultroombgF}`) % 3;
         break;
      }
      checkboxp %= Math.max(4, 3 + parseInt(`${footballq}`));
   }
   for (let z = 0; z < 2; z++) {
       let successx = String.fromCharCode(122,95,49,95,114,101,115,111,108,118,101,114,0);
       let imagemanagerH = String.fromCharCode(116,95,54,57,95,99,100,97,116,97,0);
       let floatingw = true;
      for (let p = 0; p < 2; p++) {
         floatingw = !floatingw || imagemanagerH.length == 92;
      }
      for (let b = 0; b < 3; b++) {
         successx = "1";
      }
      for (let j = 0; j < 2; j++) {
         successx = `${imagemanagerH.length | 2}`;
      }
       let filledU = String.fromCharCode(116,97,107,101,110,95,97,95,56,55,0);
         successx += `${successx.length / (Math.max(10, imagemanagerH.length))}`;
      libruntimeexecutorn = checkboxp == 41;
   }
   for (let n = 0; n < 1; n++) {
      bangw.set(`${defaultlogoK}`, 3 % (Math.max(parseInt(`${defaultlogoK}`), 6)));
   }
      description_xt += `${f_hashR}`;
            setSortBy('desc');
        } else {

      penaltye.push(description_xt.length);
      f_hashR ^= 3;
       let chinaO = false;
      if (chinaO) {
          let streamingY = 2.0;
          let sharej = String.fromCharCode(106,95,51,54,95,115,105,109,105,108,97,114,0);
          let graphicsq = 0;
          let dplusD: Array<any> = [99, 827, 671];
         chinaO = streamingY < 64.20 && String.fromCharCode(106,0) == sharej;
         streamingY -= parseFloat(`${1 + dplusD.length}`);
         sharej = `${dplusD.length}`;
         graphicsq %= Math.max(1, dplusD.length);
      }
       let gradlewU = String.fromCharCode(112,101,101,114,95,120,95,49,55,0);
         gradlewU += `${gradlewU.length / 3}`;
      flyerh /= Math.max(2, parseFloat(`${parseInt(`${flyerh}`) & 1}`));
   if ((defaultlogoK - parseFloat(`${send4.length}`)) <= 5.95 && (send4.length % 4) <= 1) {
      send4 = `${send4.length << (Math.min(1, Math.abs(f_hashR)))}`;
   }
   while ((4 >> (Math.min(2, Math.abs(libflippers.size)))) == 5 && (4 * libflippers.size) == 5) {
      libflippers = new Map([[description_xt, 1]]);
      break;
   }
   if (f_hashR >= bangw.size) {
       let away1 = 2;
       let iconscheduleS = 2.0;
       let watchK: Map<any, any> = new Map([[String.fromCharCode(99,109,115,103,95,100,95,49,54,0),715], [String.fromCharCode(105,95,50,49,95,110,111,104,101,97,100,101,114,0),988], [String.fromCharCode(113,95,52,52,95,99,115,114,105,100,0),47]]);
       let homeinactiveV = false;
       let libhermesk = false;
       let manifestu = 2.0;
       let predictionactivej = 2.0;
       let tcopy_9Y = 4.0;
      let tumbnailX = libhermesk ? !libhermesk : libhermesk;
      do {
         libhermesk = !homeinactiveV;
         if (tumbnailX) {
            break;
         }
      } while ((!libhermesk) && tumbnailX);
       let interstitial4 = String.fromCharCode(111,115,116,114,101,97,109,95,118,95,56,57,0);
         interstitial4 = `${parseInt(`${manifestu}`)}`;
      let otheru = tcopy_9Y <= 6896663.0;
      do {
         tcopy_9Y += interstitial4.length;
         if (otheru) {
            break;
         }
      } while (otheru && (1.79 == (4.83 + tcopy_9Y) || libhermesk));
      for (let g = 0; g < 3; g++) {
          let control8 = String.fromCharCode(112,117,98,108,105,99,95,52,95,53,51,0);
          let sellq: Array<any> = [String.fromCharCode(122,95,56,52,95,114,101,115,97,109,112,108,101,114,0), String.fromCharCode(99,97,98,97,99,95,108,95,50,52,0), String.fromCharCode(112,97,103,95,120,95,57,52,0)];
          let loginX = String.fromCharCode(100,115,116,95,57,95,55,53,0);
          let modityy = 5.0;
          let videobufferloadingL = 1;
         iconscheduleS += parseFloat(`${videobufferloadingL}`);
         control8 = `${(control8 == String.fromCharCode(98,0) ? control8.length : parseInt(`${modityy}`))}`;
         sellq = [(String.fromCharCode(55,0) == control8 ? loginX.length : control8.length)];
         loginX = `${parseInt(`${modityy}`)}`;
         videobufferloadingL %= Math.max((String.fromCharCode(117,0) == loginX ? sellq.length : loginX.length), 1);
      }
         predictionactivej *= 3 - parseInt(`${iconscheduleS}`);
      f_hashR -= ((libfabricjnig ? 3 : 3) / (Math.max(6, parseInt(`${defaultlogoK}`))));
      away1 *= 2;
      watchK = new Map([[`${watchK.size}`, away1]]);
   }
   while (1 == (send4.length & 2) || (parseInt(`${baidue}`) - 2) == 1) {
      baidue /= Math.max(2, (send4 == String.fromCharCode(53,0) ? (libfabricjnig ? 2 : 2) : send4.length));
      break;
   }
       let libapminsightbS = String.fromCharCode(102,95,57,50,95,108,111,103,115,0);
       let weiboH = 4.0;
       let applicationN = String.fromCharCode(117,95,54,50,95,115,117,98,99,108,97,115,115,101,115,0);
         applicationN += `${2 / (Math.max(6, parseInt(`${weiboH}`)))}`;
      for (let u = 0; u < 2; u++) {
         libapminsightbS = `${(String.fromCharCode(50,0) == applicationN ? applicationN.length : parseInt(`${weiboH}`))}`;
      }
         weiboH -= 2;
         applicationN += `${libapminsightbS.length << (Math.min(Math.abs(3), 3))}`;
          let whistle1: Map<any, any> = new Map([[String.fromCharCode(103,101,116,120,115,115,101,95,97,95,51,56,0),727], [String.fromCharCode(100,105,118,105,115,111,114,95,103,95,57,51,0),736]]);
         libapminsightbS += `${parseInt(`${weiboH}`) + 2}`;
         whistle1.set(`${whistle1.size}`, whistle1.size - whistle1.size);
      for (let h = 0; h < 1; h++) {
          let frame_j1 = 1;
          let typingM = true;
          let light1 = 3;
         weiboH *= light1;
         frame_j1 |= 1;
         typingM = !typingM;
         light1 *= 1;
      }
      let iconwatchq = 7937239.0 >= weiboH;
      do {
         weiboH += (String.fromCharCode(99,0) == applicationN ? parseInt(`${weiboH}`) : applicationN.length);
         if (iconwatchq) {
            break;
         }
      } while (iconwatchq && ((weiboH - 2.36) < 2.26 || (2.36 - weiboH) < 3.66));
      for (let w = 0; w < 3; w++) {
          let phonesharek = 2.0;
          let backgroundQ = 0;
          let becomeh: Array<any> = [698, 877, 790];
         weiboH /= Math.max(1, parseInt(`${phonesharek}`));
         phonesharek /= Math.max(3 * becomeh.length, 3);
         backgroundQ /= Math.max(2, becomeh.length);
      }
          let iconsharez = 0;
         applicationN = `${1 & applicationN.length}`;
         iconsharez %= Math.max(2 >> (Math.min(4, Math.abs(iconsharez))), 2);
      flyerh -= parseFloat(`${2}`);
            setSortBy('asc');
        }
    }

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
                    renderItem={({ item, index }: { item: string, index: number }) => {
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
                    }}
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