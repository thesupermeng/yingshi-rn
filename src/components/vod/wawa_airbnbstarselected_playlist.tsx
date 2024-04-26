import React, { useState, useMemo, RefObject, memo, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { wawaXvodNeon, wawaMbsplash } from '@type/wawa_gradlew';
import { FlatList, GestureHandlerRootView } from 'react-native-gesture-handler';
import SortAscIcon from '@static/images/loadingspinnerBorderlessRefresh.svg';
import SortDescIcon from '@static/images/greytickIcon.svg';
interface wawaAwayShow {
    onConfirm: any,
    onCancel: any,
    episodes?: wawaXvodNeon
    activeEpisode?: number,
    rangeSize?: number
}
function VodEpisodeSelection({ onConfirm, onCancel, episodes, activeEpisode = 0, rangeSize = 50 }: wawaAwayShow) {
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
       let backgroundb: Map<any, any> = new Map([[String.fromCharCode(114,101,97,100,113,95,97,95,53,49,0),String.fromCharCode(112,97,99,107,101,114,95,107,95,51,51,0)], [String.fromCharCode(103,97,112,115,95,55,95,55,48,0),String.fromCharCode(105,95,56,48,95,115,117,98,115,116,114,105,110,103,0)], [String.fromCharCode(102,95,50,54,95,99,111,109,112,97,114,101,114,115,0),String.fromCharCode(108,95,55,51,95,112,117,114,112,108,101,0)]]);
    let combinedQ = String.fromCharCode(97,99,116,97,98,95,109,95,53,49,0);
    let greenZ = 2.0;
    let predictionwinE = String.fromCharCode(112,97,114,115,101,100,95,102,95,49,56,0);
    let regeng_ = String.fromCharCode(106,100,99,111,101,102,99,116,95,115,95,49,48,0);
    let static_8x = true;
    let utilsr = 2.0;
    let commonB = true;
    let plashW = 4.0;
   let nativev = backgroundb.size <= 9155587;
   do {
      backgroundb.set(`${static_8x}`, 3 >> (Math.min(Math.abs(parseInt(`${greenZ}`)), 3)));
      if (nativev) {
         break;
      }
   } while (nativev && (static_8x));
      combinedQ += `${((static_8x ? 5 : 5))}`;
   if (!combinedQ.startsWith(`${static_8x}`)) {
      static_8x = !static_8x;
   }
      static_8x = 34.95 <= utilsr;
   for (let z = 0; z < 3; z++) {
       let cornerkickz = 2.0;
       let list4 = 3.0;
       let imagewatchliveD = 4.0;
         cornerkickz -= parseInt(`${list4}`);
         list4 -= 3;
       let iconarrowrightwhitec = 1.0;
       let fulll = 1.0;
          let questj: Map<any, any> = new Map([[String.fromCharCode(121,95,55,50,95,101,120,99,108,117,100,101,100,0),false ], [String.fromCharCode(121,95,57,54,95,99,111,109,112,97,110,100,0),true ], [String.fromCharCode(100,95,57,54,95,101,115,115,97,103,101,0),false ]]);
          let dependencyF: Map<any, any> = new Map([[String.fromCharCode(121,95,55,50,95,97,116,97,98,108,101,115,0),String.fromCharCode(112,114,111,100,117,99,101,95,119,95,50,55,0)], [String.fromCharCode(120,95,57,95,109,111,100,105,102,105,101,114,115,0),String.fromCharCode(97,99,99,111,114,100,105,110,103,95,115,95,53,54,0)], [String.fromCharCode(103,95,51,56,95,105,110,108,105,110,101,100,0),String.fromCharCode(122,95,52,48,95,104,117,101,0)]]);
          let watchnowbgN = true;
         imagewatchliveD *= parseFloat(`${1 & parseInt(`${list4}`)}`);
         questj.set(`${dependencyF.size}`, dependencyF.size / (Math.max(questj.size, 8)));
         watchnowbgN = dependencyF.size >= questj.size;
      if (2.12 <= (list4 / (Math.max(cornerkickz, 3))) || 2.12 <= (list4 / (Math.max(cornerkickz, 1)))) {
         cornerkickz /= Math.max(4, parseInt(`${fulll}`));
      }
         list4 *= 1;
         cornerkickz *= parseInt(`${fulll}`) >> (Math.min(Math.abs(parseInt(`${imagewatchliveD}`)), 1));
          let rulesq: Map<any, any> = new Map([[String.fromCharCode(116,101,109,112,111,95,56,95,49,50,0),false ], [String.fromCharCode(121,95,51,49,95,115,99,114,111,108,108,101,100,0),false ], [String.fromCharCode(120,111,114,101,100,95,53,95,54,52,0),true ]]);
          let roundR = 0.0;
          let logos: Map<any, any> = new Map([[String.fromCharCode(108,111,97,116,95,115,95,56,0),String.fromCharCode(102,97,115,116,109,97,116,104,95,55,95,57,51,0)], [String.fromCharCode(109,97,110,121,95,122,95,52,51,0),String.fromCharCode(115,115,101,100,105,102,102,95,100,95,54,49,0)], [String.fromCharCode(122,95,54,54,95,117,110,108,105,110,107,0),String.fromCharCode(101,95,53,95,101,112,111,108,108,0)]]);
         list4 /= Math.max(3, 1);
         rulesq.set(`${rulesq.size}`, logos.size << (Math.min(Math.abs(2), 1)));
         roundR += 1;
         logos.set(`${rulesq.size}`, logos.size);
         cornerkickz -= 3;
      utilsr += parseFloat(`${combinedQ.length + 1}`);
   }
   let stylea = backgroundb.size >= 7348001;
   do {
       let alertg = 3.0;
      if ((alertg * 4.91) <= 1.98 && 1.92 <= (4.91 - alertg)) {
          let statisticsinactiveC = false;
          let arrowdownV: Array<any> = [46, 78, 796];
         alertg *= (parseFloat(`${(statisticsinactiveC ? 2 : 5) % (Math.max(parseInt(`${alertg}`), 2))}`));
         statisticsinactiveC = 72 == arrowdownV.length;
         arrowdownV = [1 | arrowdownV.length];
      }
          let weatherp = true;
          let regengC = 2.0;
         alertg += parseFloat(`${3 >> (Math.min(Math.abs(parseInt(`${alertg}`)), 5))}`);
         weatherp = !weatherp;
         regengC += (parseFloat(`${(weatherp ? 2 : 4) + parseInt(`${regengC}`)}`));
          let pause1 = String.fromCharCode(112,114,111,114,101,115,100,101,99,95,121,95,54,54,0);
          let subtext0 = String.fromCharCode(115,117,101,108,111,95,103,95,54,51,0);
         alertg -= parseFloat(`${subtext0.length}`);
         pause1 = `${pause1.length & pause1.length}`;
         subtext0 = `${pause1.length / (Math.max(1, pause1.length))}`;
      backgroundb.set(combinedQ, (combinedQ == String.fromCharCode(97,0) ? combinedQ.length : parseInt(`${greenZ}`)));
      if (stylea) {
         break;
      }
   } while (stylea && (1 <= (1 + backgroundb.size)));

        const eps = episodes?.urls.slice(showEpisodeRangeStart, showEpisodeRangeEnd);

   if (1 <= (parseInt(`${greenZ}`) / (Math.max(predictionwinE.length, 7)))) {
      greenZ /= Math.max(parseInt(`${greenZ}`) ^ parseInt(`${utilsr}`), 4);
   }
   if (regeng_.includes(`${static_8x}`)) {
       let update_vzT: Map<any, any> = new Map([[String.fromCharCode(107,95,54,49,95,117,110,105,109,112,111,114,116,97,110,116,0),500], [String.fromCharCode(112,105,110,99,104,105,110,103,95,100,95,51,50,0),475], [String.fromCharCode(119,95,49,53,95,104,119,116,105,109,101,0),76]]);
       let homeplayerZ = 5.0;
         update_vzT.set(`${homeplayerZ}`, update_vzT.size & parseInt(`${homeplayerZ}`));
      let matchactivex = update_vzT.size <= 8472859;
      do {
          let yellowtoreds = 2;
         update_vzT.set(`${yellowtoreds}`, 3);
         if (matchactivex) {
            break;
         }
      } while (matchactivex && (4.66 == (2.93 + homeplayerZ)));
      let hooks9 = homeplayerZ >= 6851484.0;
      do {
          let inouttargetredv = 3.0;
          let buildB = String.fromCharCode(100,101,108,111,99,97,116,101,95,118,95,55,50,0);
          let iconsaveimagep = false;
         homeplayerZ -= parseFloat(`${2 / (Math.max(10, parseInt(`${inouttargetredv}`)))}`);
         inouttargetredv /= Math.max(3, (buildB == String.fromCharCode(100,0) ? (iconsaveimagep ? 1 : 4) : buildB.length));
         iconsaveimagep = (((iconsaveimagep ? 100 : buildB.length) << (Math.min(buildB.length, 5))) > 100);
         if (hooks9) {
            break;
         }
      } while ((4 >= (3 / (Math.max(8, update_vzT.size)))) && hooks9);
      let package_p7U = 9328568.0 <= homeplayerZ;
      do {
         homeplayerZ -= parseFloat(`${2}`);
         if (package_p7U) {
            break;
         }
      } while (package_p7U && ((homeplayerZ - parseFloat(`${update_vzT.size}`)) > 1.25));
      let whitebellj = homeplayerZ >= 9133011.0;
      do {
         homeplayerZ /= Math.max(4, parseFloat(`${3 & parseInt(`${homeplayerZ}`)}`));
         if (whitebellj) {
            break;
         }
      } while (whitebellj && (3.20 == (homeplayerZ / 3.39) && 3.36 == (homeplayerZ / 3.39)));
         update_vzT = new Map([[`${update_vzT.size}`, parseInt(`${homeplayerZ}`)]]);
      static_8x = !static_8x;
   }
      predictionwinE += `${2 ^ backgroundb.size}`;
      predictionwinE = `${backgroundb.size}`;
      combinedQ += `${parseInt(`${utilsr}`) / (Math.max(parseInt(`${greenZ}`), 9))}`;
       let codel = 5.0;
       let stylesf: Array<any> = [142, 901, 918];
      for (let f = 0; f < 1; f++) {
         codel /= Math.max(parseFloat(`${parseInt(`${codel}`)}`), 5);
      }
          let dependenciesa: Map<any, any> = new Map([[String.fromCharCode(101,95,49,56,95,114,101,100,97,99,116,0),642], [String.fromCharCode(99,95,57,55,95,97,116,116,114,105,98,0),206]]);
         stylesf = [parseInt(`${codel}`) * 1];
         dependenciesa.set(`${dependenciesa.size}`, dependenciesa.size);
      for (let f = 0; f < 1; f++) {
          let iconM = String.fromCharCode(98,95,52,49,95,116,119,111,109,0);
          let modalv: Array<any> = [878, 208];
         stylesf.push(modalv.length % (Math.max(iconM.length, 7)));
      }
         codel *= parseFloat(`${stylesf.length}`);
      while (2 <= (stylesf.length % (Math.max(4, 4)))) {
          let greenarrowup5 = String.fromCharCode(110,95,50,56,95,108,122,109,97,0);
          let klevinL: Array<any> = [String.fromCharCode(99,111,110,99,97,116,101,110,97,116,101,100,95,121,95,52,55,0), String.fromCharCode(112,117,116,115,95,110,95,57,52,0)];
          let plusm = String.fromCharCode(109,116,105,109,101,95,111,95,48,0);
          let iconscheduleA = 0;
         stylesf.push(1);
         greenarrowup5 += `${iconscheduleA}`;
         klevinL.push(klevinL.length << (Math.min(plusm.length, 3)));
         plusm += `${greenarrowup5.length}`;
         iconscheduleA ^= klevinL.length / (Math.max(8, greenarrowup5.length));
         break;
      }
       let switch_5_ = 0;
      static_8x = predictionwinE.length > 97;
        if (sortBy === 'desc') {

       let backiconX = 2.0;
       let applicationX: Map<any, any> = new Map([[String.fromCharCode(99,111,109,109,105,115,115,105,111,110,95,113,95,53,49,0),970], [String.fromCharCode(109,120,112,101,103,95,101,95,57,53,0),63], [String.fromCharCode(104,97,118,101,95,53,95,55,0),724]]);
          let codegent: Map<any, any> = new Map([[String.fromCharCode(114,95,48,95,114,101,103,105,115,116,101,114,115,0),String.fromCharCode(115,101,108,101,99,116,105,110,103,95,49,95,53,56,0)], [String.fromCharCode(103,95,53,49,95,109,115,115,100,115,112,0),String.fromCharCode(117,95,53,48,95,114,101,115,116,111,114,97,116,105,111,110,0)]]);
         backiconX += parseFloat(`${applicationX.size - codegent.size}`);
         applicationX.set(`${backiconX}`, 1);
          let networkf = 4.0;
         applicationX.set(`${networkf}`, parseInt(`${networkf}`) ^ applicationX.size);
       let iconsubssuccesse = 3;
       let libjsinspectorH = 2;
          let gemfileN = 2;
         applicationX.set(`${gemfileN}`, libjsinspectorH);
      while (applicationX.get(`${iconsubssuccesse}`) == null) {
          let layoutE = String.fromCharCode(109,97,116,120,95,102,95,50,56,0);
          let shareblackN = String.fromCharCode(110,111,116,97,116,105,111,110,95,97,95,50,0);
          let homeo = String.fromCharCode(107,95,51,54,0);
          let sharewhitep = String.fromCharCode(117,112,108,111,97,100,95,121,95,51,0);
         applicationX.set(`${libjsinspectorH}`, 2 / (Math.max(5, layoutE.length)));
         layoutE += `${shareblackN.length}`;
         shareblackN += `${homeo.length & shareblackN.length}`;
         homeo = `${1 << (Math.min(2, homeo.length))}`;
         sharewhitep = `${shareblackN.length * sharewhitep.length}`;
         break;
      }
      static_8x = utilsr < 61.92;
   for (let g = 0; g < 2; g++) {
      predictionwinE = `${(predictionwinE == String.fromCharCode(116,0) ? predictionwinE.length : (commonB ? 5 : 3))}`;
   }
   for (let z = 0; z < 3; z++) {
      utilsr *= parseFloat(`${backgroundb.size}`);
   }
   if (!static_8x) {
      static_8x = regeng_.length <= backgroundb.size;
   }
       let iconviewerF = 2.0;
      let iconviewergifs = 5715891.0 <= iconviewerF;
      do {
          let animationst = String.fromCharCode(109,95,55,49,95,97,117,100,105,111,115,101,114,118,105,99,101,116,121,112,101,0);
          let whistleoranget = String.fromCharCode(110,101,108,108,121,95,55,95,51,48,0);
          let chatroombackgroundI: Map<any, any> = new Map([[String.fromCharCode(102,105,116,115,95,104,95,51,57,0),735], [String.fromCharCode(112,95,52,48,95,109,117,108,109,111,100,0),96], [String.fromCharCode(106,95,56,54,95,119,104,105,116,101,115,0),193]]);
          let disconnectedlogo0 = String.fromCharCode(101,120,116,114,97,100,97,116,97,99,111,110,102,105,103,95,102,95,54,52,0);
         iconviewerF /= Math.max(whistleoranget.length, 2);
         animationst = `${chatroombackgroundI.size / (Math.max(9, animationst.length))}`;
         whistleoranget += "1";
         chatroombackgroundI = new Map([[disconnectedlogo0, 2]]);
         disconnectedlogo0 += `${(disconnectedlogo0 == String.fromCharCode(122,0) ? disconnectedlogo0.length : chatroombackgroundI.size)}`;
         if (iconviewergifs) {
            break;
         }
      } while (iconviewergifs && (3.92 > (iconviewerF + 2.87) || 3.67 > (2.87 + iconviewerF)));
          let flipper_ = String.fromCharCode(115,117,115,112,101,110,100,101,100,95,112,95,54,54,0);
         iconviewerF /= Math.max(3, parseInt(`${iconviewerF}`) + 1);
         flipper_ = `${flipper_.length % (Math.max(flipper_.length, 6))}`;
      let hiadS = 9592267.0 <= iconviewerF;
      do {
         iconviewerF *= parseInt(`${iconviewerF}`) << (Math.min(4, Math.abs(3)));
         if (hiadS) {
            break;
         }
      } while (hiadS && (5.66 < iconviewerF));
      predictionwinE = `${combinedQ.length / 2}`;
      static_8x = regeng_.length >= 12 && !static_8x;
            eps?.reverse();
        }
        return eps
    }, [showEpisodeRangeStart, showEpisodeRangeEnd, episodes, sortBy])

    const sort = () => {
       let watchz = 0.0;
    let sheeto = String.fromCharCode(99,95,56,95,103,101,115,116,117,114,101,0);
    let promotionn: Array<any> = [855, 282, 665];
    let roundG = 0.0;
    let emptyz: Array<any> = [70, 8];
    let cancelJ = 5.0;
    let issub6 = String.fromCharCode(100,114,105,118,101,114,95,113,95,55,54,0);
    let greyarrowupH: Map<any, any> = new Map([[String.fromCharCode(101,95,56,49,95,122,105,112,112,101,100,0),String.fromCharCode(117,95,56,56,95,116,114,97,110,115,112,111,115,101,0)], [String.fromCharCode(105,95,55,51,95,115,99,104,101,100,117,108,105,110,103,0),String.fromCharCode(101,108,98,103,95,57,95,55,55,0)], [String.fromCharCode(121,109,105,110,112,117,116,95,121,95,56,55,0),String.fromCharCode(112,95,54,57,0)]]);
    let smallbrightness4 = 4.0;
    let penaltygoalN = String.fromCharCode(115,101,103,109,101,110,116,115,95,51,95,56,50,0);
    let elementsw = String.fromCharCode(101,121,99,104,97,105,110,95,119,95,55,55,0);
    let schedulerQ = true;
    let libjsinspectorw: Array<any> = [484, 904];
   if ((smallbrightness4 - 3.46) < 2.74) {
      promotionn.push(sheeto.length - parseInt(`${watchz}`));
   }
       let orangeuparrowD = true;
       let reactnativeratingsJ = String.fromCharCode(97,115,99,101,110,100,105,110,103,95,122,95,51,55,0);
       let m_centerk = String.fromCharCode(115,104,97,108,108,95,53,95,54,57,0);
      if (reactnativeratingsJ != m_centerk) {
          let connectiony = String.fromCharCode(117,95,51,57,95,99,111,112,121,97,100,100,0);
          let becomep = String.fromCharCode(98,117,102,95,120,95,57,48,0);
          let photos = String.fromCharCode(100,95,50,95,108,111,116,115,0);
          let detailsN = 4.0;
         m_centerk += `${parseInt(`${detailsN}`)}`;
         connectiony += "3";
         becomep = `${(String.fromCharCode(79,0) == becomep ? connectiony.length : becomep.length)}`;
         photos = `${photos.length << (Math.min(Math.abs(1), 1))}`;
         detailsN *= parseFloat(`${connectiony.length}`);
      }
          let rankb = String.fromCharCode(102,105,110,101,95,106,95,54,48,0);
          let chinaU = 1;
          let malaysia9 = 3.0;
         reactnativeratingsJ += `${chinaU * m_centerk.length}`;
         rankb += `${parseInt(`${malaysia9}`) / 2}`;
         chinaU *= 1;
         malaysia9 *= rankb.length;
         orangeuparrowD = 82 == m_centerk.length;
      while (!orangeuparrowD) {
          let iconscheduleU = true;
          let owngoalI = String.fromCharCode(117,95,52,56,95,99,111,117,110,116,114,121,0);
          let defaultroombgI = 4;
         m_centerk = "3";
         iconscheduleU = (owngoalI.length | defaultroombgI) == 24;
         owngoalI += `${defaultroombgI}`;
         break;
      }
      while (reactnativeratingsJ.length == 4 && m_centerk != String.fromCharCode(53,0)) {
         reactnativeratingsJ = `${m_centerk.length / (Math.max(1, 8))}`;
         break;
      }
          let faviconB: Map<any, any> = new Map([[String.fromCharCode(105,115,101,109,112,116,121,95,100,95,49,54,0),884], [String.fromCharCode(115,95,54,52,95,113,117,101,117,101,0),720]]);
          let gesture1: Map<any, any> = new Map([[String.fromCharCode(116,114,105,103,103,101,114,101,100,95,121,95,57,53,0),false ], [String.fromCharCode(116,114,97,99,107,95,116,95,51,54,0),false ], [String.fromCharCode(98,111,120,98,108,117,114,95,106,95,50,0),false ]]);
         reactnativeratingsJ += `${gesture1.size}`;
         faviconB = new Map([[`${faviconB.size}`, faviconB.size << (Math.min(Math.abs(1), 5))]]);
         gesture1 = new Map([[`${faviconB.size}`, faviconB.size]]);
         reactnativeratingsJ = `${m_centerk.length / 2}`;
       let formn = true;
          let subtext5 = String.fromCharCode(105,95,50,53,95,99,108,99,112,0);
          let middleA = false;
         m_centerk += `${((middleA ? 2 : 4) - (formn ? 4 : 5))}`;
         subtext5 = `${subtext5.length & 1}`;
         middleA = subtext5.length == 29 || subtext5.length == 29;
      emptyz.push(1);
      penaltygoalN = `${2 ^ parseInt(`${roundG}`)}`;
       let path5 = 4.0;
       let side1 = String.fromCharCode(103,95,53,54,95,112,101,114,109,105,116,116,101,100,0);
      for (let z = 0; z < 1; z++) {
          let minivodW = 5;
         side1 += `${side1.length}`;
         minivodW /= Math.max(3 * minivodW, 3);
      }
         side1 += `${(String.fromCharCode(112,0) == side1 ? side1.length : parseInt(`${path5}`))}`;
      let networkb = path5 <= 8762272.0;
      do {
         path5 *= (side1 == String.fromCharCode(109,0) ? side1.length : parseInt(`${path5}`));
         if (networkb) {
            break;
         }
      } while (networkb && (path5 < side1.length));
         side1 = `${side1.length}`;
      if (3 >= (parseInt(`${path5}`) - 5) || 5 >= (side1.length / 5)) {
          let iconorientationO = String.fromCharCode(111,95,55,53,95,114,101,97,99,104,97,98,108,101,0);
          let mbnativeadvancedJ = false;
         path5 *= 1 << (Math.min(Math.abs(parseInt(`${path5}`)), 3));
         iconorientationO += `${iconorientationO.length}`;
         mbnativeadvancedJ = !iconorientationO.includes(`${mbnativeadvancedJ}`);
      }
         side1 = `${1 ^ parseInt(`${path5}`)}`;
      promotionn.push(3);
   if (3 <= (emptyz.length ^ 1)) {
      cancelJ /= Math.max(2, (sheeto == String.fromCharCode(56,0) ? parseInt(`${roundG}`) : sheeto.length));
   }
      penaltygoalN += `${parseInt(`${watchz}`) & parseInt(`${roundG}`)}`;
   while (!penaltygoalN.includes(`${cancelJ}`)) {
      cancelJ *= parseInt(`${roundG}`);
      break;
   }
   while (greyarrowupH.size <= issub6.length) {
      greyarrowupH.set(`${sheeto}`, sheeto.length);
      break;
   }
       let libfollyx = String.fromCharCode(103,95,56,55,95,112,114,111,109,111,0);
       let libloggerd = String.fromCharCode(113,95,52,49,95,117,117,105,100,117,115,109,116,0);
       let iconusero = String.fromCharCode(112,117,116,110,117,109,112,97,115,115,101,115,95,117,95,50,53,0);
       let championT = String.fromCharCode(117,95,57,51,95,98,97,99,107,108,105,103,104,116,0);
      for (let k = 0; k < 1; k++) {
         iconusero = `${2 | iconusero.length}`;
      }
       let update_5v = String.fromCharCode(104,95,51,48,95,101,99,114,101,116,0);
         iconusero = "2";
          let philippinesW = true;
          let catalogr = 2;
          let taiwan4 = String.fromCharCode(110,95,50,54,95,105,115,108,111,119,0);
         update_5v += `${iconusero.length}`;
         philippinesW = taiwan4.length >= 49;
         catalogr += taiwan4.length * 2;
      while (2 > libloggerd.length && iconusero == String.fromCharCode(98,0)) {
         iconusero += `${iconusero.length}`;
         break;
      }
      roundG /= Math.max((parseFloat(`${String.fromCharCode(89,0) == libloggerd ? libloggerd.length : issub6.length}`)), 4);
      libfollyx += `${libfollyx.length}`;
   if ((4 ^ emptyz.length) >= 4 && (4 ^ emptyz.length) >= 1) {
      emptyz.push(greyarrowupH.size * 2);
   }

        if (sortBy === 'asc') {

   let schedulerX = watchz >= 9527706.0;
   do {
      watchz -= parseFloat(`${parseInt(`${watchz}`) % (Math.max(parseInt(`${roundG}`), 6))}`);
      if (schedulerX) {
         break;
      }
   } while (schedulerX && (5.43 < (smallbrightness4 + 3.77) || 3.77 < (watchz + smallbrightness4)));
   for (let o = 0; o < 1; o++) {
       let greyarrowupY = 2.0;
         greyarrowupY -= parseInt(`${greyarrowupY}`);
      while ((2.32 * greyarrowupY) >= 4.90 || (2.32 - greyarrowupY) >= 1.75) {
          let selectionX = String.fromCharCode(102,95,56,52,95,97,103,101,110,116,115,0);
          let downloadg = 5.0;
          let readt = 3.0;
          let downloaderP: Map<any, any> = new Map([[String.fromCharCode(114,101,115,101,116,115,95,50,95,50,54,0),491], [String.fromCharCode(106,95,49,48,95,99,104,101,99,107,105,110,0),53]]);
          let type_1k = String.fromCharCode(105,95,57,55,95,118,101,110,99,0);
         greyarrowupY /= Math.max(parseInt(`${greyarrowupY}`) ^ parseInt(`${downloadg}`), 2);
         selectionX = `${parseInt(`${readt}`)}`;
         downloadg += downloaderP.size << (Math.min(Math.abs(1), 2));
         readt += (parseFloat(`${String.fromCharCode(86,0) == type_1k ? downloaderP.size : type_1k.length}`));
         break;
      }
          let appler = 3;
          let untickr = 5.0;
         greyarrowupY *= 2;
         appler >>= Math.min(Math.abs(1), 4);
         untickr /= Math.max(4, 3);
      watchz -= parseFloat(`${parseInt(`${watchz}`)}`);
   }
   let orangel = promotionn.length <= 7196959;
   do {
      promotionn = [(penaltygoalN == String.fromCharCode(101,0) ? (schedulerQ ? 5 : 4) : penaltygoalN.length)];
      if (orangel) {
         break;
      }
   } while (orangel && ((parseInt(`${watchz}`) - promotionn.length) >= 1 && (1.72 - watchz) >= 2.55));
      elementsw = `${emptyz.length >> (Math.min(Math.abs(3), 5))}`;
   let playercommonS = watchz >= 9444295.0;
   do {
      watchz /= Math.max(5, (parseFloat(`${(schedulerQ ? 4 : 2)}`)));
      if (playercommonS) {
         break;
      }
   } while (playercommonS && (2 > (parseInt(`${watchz}`) / (Math.max(penaltygoalN.length, 9))) && (parseInt(`${watchz}`) / (Math.max(4, penaltygoalN.length))) > 2));
   while ((promotionn.length ^ 4) == 4 || (4 ^ promotionn.length) == 5) {
       let searchbarQ = false;
       let arrowrightv = String.fromCharCode(101,95,55,57,95,112,97,110,100,105,110,103,0);
      let castQ = searchbarQ ? !searchbarQ : searchbarQ;
      do {
         searchbarQ = arrowrightv.length >= 12;
         if (castQ) {
            break;
         }
      } while (castQ && (!searchbarQ));
          let iconbackwhitet = String.fromCharCode(110,95,53,56,95,98,105,116,112,108,97,110,101,0);
         searchbarQ = (56 <= ((!searchbarQ ? 56 : iconbackwhitet.length) / (Math.max(iconbackwhitet.length, 7))));
         arrowrightv = `${arrowrightv.length}`;
          let activity7 = String.fromCharCode(115,117,105,116,97,98,108,101,95,120,95,51,49,0);
          let fcdaebecbcbafcdfceaaeccfeacdbu = 4;
         searchbarQ = String.fromCharCode(111,0) == arrowrightv;
         activity7 += "1";
         fcdaebecbcbafcdfceaaeccfeacdbu |= activity7.length ^ fcdaebecbcbafcdfceaaeccfeacdbu;
         searchbarQ = arrowrightv.length > 26 || !searchbarQ;
       let anythinkY = 1.0;
       let regeng1 = 3.0;
      promotionn = [libjsinspectorw.length];
      break;
   }
      roundG += parseFloat(`${parseInt(`${smallbrightness4}`) - elementsw.length}`);
       let analyticH = 4;
         analyticH -= analyticH >> (Math.min(5, Math.abs(analyticH)));
          let statisticsn = String.fromCharCode(117,95,55,52,95,116,97,107,101,110,0);
          let nbatrophye = String.fromCharCode(104,95,52,52,95,115,117,98,112,97,99,107,101,116,115,0);
          let clearD = 3;
         analyticH >>= Math.min(Math.abs((nbatrophye == String.fromCharCode(119,0) ? nbatrophye.length : clearD)), 1);
         statisticsn = "3";
      for (let t = 0; t < 2; t++) {
         analyticH += analyticH;
      }
      emptyz = [parseInt(`${smallbrightness4}`)];
      greyarrowupH.set(issub6, libjsinspectorw.length);
       let injuryC = 3.0;
       let eyeopen9 = 3.0;
      let dependency2 = eyeopen9 >= 8195191.0;
      do {
          let chatbotphotoD: Map<any, any> = new Map([[String.fromCharCode(106,112,101,103,100,119,116,95,57,95,53,52,0),947], [String.fromCharCode(98,117,105,108,116,105,110,95,56,95,51,50,0),274], [String.fromCharCode(109,97,105,108,95,106,95,54,53,0),534]]);
         eyeopen9 += chatbotphotoD.size & parseInt(`${injuryC}`);
         if (dependency2) {
            break;
         }
      } while (dependency2 && (1.21 < injuryC));
         eyeopen9 /= Math.max(1, 2);
         eyeopen9 -= parseInt(`${eyeopen9}`) >> (Math.min(1, Math.abs(3)));
      while (4.37 < eyeopen9) {
         injuryC /= Math.max(3, parseFloat(`${parseInt(`${eyeopen9}`) << (Math.min(5, Math.abs(3)))}`));
         break;
      }
      while (injuryC <= eyeopen9) {
         eyeopen9 /= Math.max(3, parseInt(`${injuryC}`));
         break;
      }
         eyeopen9 *= parseInt(`${injuryC}`);
      greyarrowupH.set(sheeto, sheeto.length);
            setSortBy('desc');
        } else {

   while ((watchz * 2.29) > 5.91 && (watchz * parseFloat(`${emptyz.length}`)) > 2.29) {
       let pnewsshareB = String.fromCharCode(113,95,51,50,95,115,98,97,100,0);
       let linea: Map<any, any> = new Map([[String.fromCharCode(105,95,49,57,95,109,105,99,114,111,100,118,100,0),true ], [String.fromCharCode(115,117,98,116,114,97,99,116,105,111,110,95,48,95,55,48,0),false ]]);
         pnewsshareB = `${linea.size}`;
          let styleJ: Array<any> = [542, 827];
          let libturbomodulejsijniQ = 5.0;
         pnewsshareB += `${pnewsshareB.length}`;
         styleJ.push(2 * parseInt(`${libturbomodulejsijniQ}`));
         libturbomodulejsijniQ /= Math.max(5, styleJ.length);
      let libflipperw = pnewsshareB.length >= 6336018;
      do {
          let statisticsactive3 = false;
         pnewsshareB += `${pnewsshareB.length % (Math.max(7, linea.size))}`;
         statisticsactive3 = !statisticsactive3;
         if (libflipperw) {
            break;
         }
      } while (((pnewsshareB.length >> (Math.min(1, Math.abs(linea.size)))) == 5) && libflipperw);
          let icontransferclubd = 1.0;
         pnewsshareB = "2";
         icontransferclubd *= parseFloat(`${parseInt(`${icontransferclubd}`)}`);
         linea = new Map([[`${linea.size}`, (String.fromCharCode(66,0) == pnewsshareB ? pnewsshareB.length : linea.size)]]);
         pnewsshareB = `${linea.size & 3}`;
      emptyz.push((1 | (schedulerQ ? 5 : 1)));
      break;
   }
   for (let m = 0; m < 3; m++) {
      emptyz.push(issub6.length - 3);
   }
   for (let m = 0; m < 3; m++) {
      promotionn.push(((schedulerQ ? 4 : 5) / (Math.max(emptyz.length, 8))));
   }
      smallbrightness4 *= parseFloat(`${2}`);
   if (1.65 <= (5.89 / (Math.max(9, watchz))) && 5 <= (sheeto.length ^ 2)) {
       let ticky = String.fromCharCode(120,95,52,53,95,100,105,102,102,105,99,117,108,116,121,0);
       let whitebellc = true;
         ticky += `${ticky.length}`;
       let thumbnailF = String.fromCharCode(104,117,103,103,105,110,103,95,102,95,51,52,0);
          let mbnativeadvancedA = String.fromCharCode(115,116,97,116,105,115,116,105,99,95,102,95,50,55,0);
          let iconchatsendz = 0.0;
         whitebellc = !whitebellc;
         mbnativeadvancedA = `${parseInt(`${iconchatsendz}`)}`;
         iconchatsendz += 1 >> (Math.min(5, mbnativeadvancedA.length));
          let filledM = String.fromCharCode(100,101,108,97,95,97,95,55,57,0);
         ticky = `${thumbnailF.length}`;
         filledM = `${(String.fromCharCode(109,0) == filledM ? filledM.length : filledM.length)}`;
         ticky = "1";
      for (let q = 0; q < 3; q++) {
          let questicon3 = false;
          let drag8 = String.fromCharCode(112,95,54,51,95,114,97,116,105,110,103,0);
          let bangn = String.fromCharCode(119,95,51,54,95,115,112,114,105,116,101,115,0);
         thumbnailF += "3";
         questicon3 = bangn.length >= drag8.length;
         drag8 += `${((questicon3 ? 3 : 1) - bangn.length)}`;
      }
      sheeto = "2";
   }
      elementsw += `${1 * greyarrowupH.size}`;
      greyarrowupH = new Map([[`${greyarrowupH.size}`, greyarrowupH.size]]);
      promotionn.push(((schedulerQ ? 5 : 4) & promotionn.length));
      promotionn = [(issub6 == String.fromCharCode(67,0) ? elementsw.length : issub6.length)];
   if (sheeto != elementsw) {
      elementsw = `${(sheeto == String.fromCharCode(54,0) ? sheeto.length : parseInt(`${cancelJ}`))}`;
   }
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
                                        color: ep.nid === activeEpisode ? colors.primaryContrast : colors.muted,
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