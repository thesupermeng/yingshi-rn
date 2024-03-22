import React, { useState, useMemo, RefObject, memo, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { IDelegate, USCastingControl } from '@type/wpk_long';
import { FlatList, GestureHandlerRootView } from 'react-native-gesture-handler';
import SortAscIcon from '@static/images/signinupConstants.svg';
import SortDescIcon from '@static/images/aboutRegister_j9Singapore.svg';
interface XFillButton {
    onConfirm: any,
    onCancel: any,
    episodes?: IDelegate
    activeEpisode?: number,
    rangeSize?: number
}
function VodEpisodeSelection({ onConfirm, onCancel, episodes, activeEpisode = 0, rangeSize = 50 }: XFillButton) {
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
       let gemfiles: Map<any, any> = new Map([[String.fromCharCode(109,95,57,50,95,119,109,97,118,111,105,99,101,0),String.fromCharCode(97,100,118,97,110,99,101,95,56,95,50,54,0)], [String.fromCharCode(108,111,103,105,110,95,108,95,52,55,0),String.fromCharCode(117,116,102,95,102,95,57,49,0)], [String.fromCharCode(114,101,116,117,114,110,101,100,95,97,95,49,51,0),String.fromCharCode(109,105,110,111,114,95,103,95,57,54,0)]]);
    let header6 = String.fromCharCode(107,95,52,49,95,112,114,111,112,111,115,101,0);
    let next9 = 2.0;
    let navigationd = 5;
    let time_7v = 2;
    let dropdowno = 0.0;
    let adulty = 1.0;
    let thailandU = 5;
    let time_o1 = true;
    let miniL = 2;
    let lists = true;
    let condensedm: Map<any, any> = new Map([[String.fromCharCode(113,95,55,52,95,118,112,111,105,110,116,0),false ], [String.fromCharCode(105,95,49,56,95,102,105,108,116,101,114,0),true ], [String.fromCharCode(114,101,109,111,118,101,114,95,50,95,49,52,0),false ]]);
    let gemfileL = false;
    let lineI = 3.0;
    let play4 = String.fromCharCode(105,115,122,101,114,111,95,55,95,57,56,0);
   for (let g = 0; g < 1; g++) {
       let invited = String.fromCharCode(121,95,49,54,95,100,121,110,97,109,105,99,97,108,108,121,0);
       let taiwanP = 5;
       let reporta = String.fromCharCode(110,97,118,95,54,95,49,57,0);
       let grayH: Map<any, any> = new Map([[String.fromCharCode(110,95,49,48,48,95,99,97,110,99,101,108,97,116,105,111,110,0),29], [String.fromCharCode(113,95,53,55,95,110,101,116,101,114,114,110,111,0),22], [String.fromCharCode(115,99,97,108,101,100,95,101,95,53,52,0),200]]);
       let detailh: Map<any, any> = new Map([[String.fromCharCode(97,118,117,105,95,116,95,50,51,0),646], [String.fromCharCode(115,95,51,51,95,112,114,111,100,117,99,101,0),561]]);
       let logoo = 3.0;
       let philippinesM = 3.0;
         philippinesM *= grayH.size % (Math.max(8, detailh.size));
         grayH = new Map([[`${detailh.size}`, invited.length | detailh.size]]);
      while ((taiwanP << (Math.min(reporta.length, 5))) > 2 || (2 << (Math.min(1, reporta.length))) > 2) {
          let modelk = String.fromCharCode(99,111,110,115,116,97,110,116,95,50,95,50,57,0);
          let assist0 = String.fromCharCode(105,111,115,98,117,105,108,100,95,98,95,54,54,0);
         reporta = `${reporta.length}`;
         modelk += `${assist0.length}`;
         assist0 = `${assist0.length}`;
         break;
      }
         detailh.set(`${philippinesM}`, reporta.length);
      let combinedW = reporta.length >= 8235673;
      do {
          let crownU: Array<any> = [648, 297];
          let serviceA = 4;
         reporta = `${reporta.length + 3}`;
         crownU = [crownU.length];
         serviceA <<= Math.min(5, Math.abs(serviceA));
         if (combinedW) {
            break;
         }
      } while ((!invited.endsWith(`${reporta.length}`)) && combinedW);
      let dropdownO = 5284372 >= grayH.size;
      do {
         grayH = new Map([[invited, reporta.length - invited.length]]);
         if (dropdownO) {
            break;
         }
      } while ((Array.from(grayH.keys()).includes(`${logoo}`)) && dropdownO);
          let watchf: Array<any> = [131, 515];
          let sportsJ = 4;
          let emojiF = String.fromCharCode(100,101,115,116,114,117,99,116,95,97,95,52,49,0);
         logoo += sportsJ ^ 2;
         watchf = [(emojiF == String.fromCharCode(48,0) ? emojiF.length : watchf.length)];
         sportsJ /= Math.max(2, watchf.length);
      navigationd >>= Math.min(5, Math.abs(2));
   }
      lists = thailandU > 55;
   let spinner8 = 6001759.0 <= dropdowno;
   do {
       let appsW = 4.0;
       let with_y4: Map<any, any> = new Map([[String.fromCharCode(114,101,115,97,109,112,95,56,95,57,50,0),324], [String.fromCharCode(113,95,54,56,95,116,111,112,0),216]]);
       let canvasm = false;
      if (5 == (4 - with_y4.size) && 4 == with_y4.size) {
          let lineM = true;
         canvasm = 43.45 < appsW;
         lineM = (!lineM ? !lineM : !lineM);
      }
      while (with_y4.size <= 5) {
         with_y4.set(`${canvasm}`, ((canvasm ? 1 : 1) % (Math.max(1, 3))));
         break;
      }
         with_y4.set(`${appsW}`, parseInt(`${appsW}`) >> (Math.min(Math.abs(with_y4.size), 5)));
      while (appsW == 1.56) {
         canvasm = with_y4.get(`${canvasm}`) != null;
         break;
      }
      if (canvasm) {
         with_y4.set(`${canvasm}`, (parseInt(`${appsW}`) >> (Math.min(1, Math.abs((canvasm ? 1 : 1))))));
      }
          let down5 = 3.0;
          let castingL = String.fromCharCode(111,98,106,95,56,95,57,55,0);
          let j_playerM: Array<any> = [709, 508, 856];
         appsW += parseFloat(`${castingL.length}`);
         down5 /= Math.max(4, 3);
         castingL = `${parseInt(`${down5}`)}`;
         j_playerM.push(j_playerM.length + 1);
         canvasm = 99 <= with_y4.size;
          let alertE = false;
          let hejiU = 0.0;
         appsW /= Math.max(parseFloat(`${with_y4.size << (Math.min(Math.abs(2), 1))}`), 2);
         alertE = !alertE;
         hejiU /= Math.max((parseFloat(`${parseInt(`${hejiU}`) >> (Math.min(1, Math.abs((alertE ? 1 : 5))))}`)), 3);
         with_y4.set(`${appsW}`, (parseInt(`${appsW}`) | (canvasm ? 1 : 3)));
      dropdowno *= parseFloat(`${2}`);
      if (spinner8) {
         break;
      }
   } while ((2 > (condensedm.size + parseInt(`${dropdowno}`)) || 3 > (condensedm.size % 2)) && spinner8);
      lists = dropdowno > adulty;
   if (4 == gemfiles.size) {
      gemfiles = new Map([[`${condensedm.size}`, condensedm.size]]);
   }
   if (5 < (2 - gemfiles.size) || (2 - gemfiles.size) < 1) {
      gemfiles.set(`${time_o1}`, 1);
   }
      time_o1 = !time_o1 || dropdowno == 32.77;
      condensedm.set(`${next9}`, parseInt(`${next9}`) * navigationd);
      condensedm.set(header6, (header6 == String.fromCharCode(78,0) ? time_7v : header6.length));
       let cornerR = String.fromCharCode(102,95,56,48,95,100,105,102,102,97,98,108,101,0);
         cornerR += `${3 + cornerR.length}`;
      if (!cornerR.startsWith(`${cornerR.length}`)) {
         cornerR += `${cornerR.length / 3}`;
      }
         cornerR += `${cornerR.length % (Math.max(2, cornerR.length))}`;
      header6 = `${2 & cornerR.length}`;

        const eps = episodes?.urls.slice(showEpisodeRangeStart, showEpisodeRangeEnd);

       let kickn = 0.0;
       let faviconQ = String.fromCharCode(102,95,49,53,95,101,120,101,99,117,116,101,100,0);
       let rulesP = true;
      let championt = String.fromCharCode(107,102,111,115,109,116,114,52,98,57,0) == faviconQ;
      do {
         faviconQ = `${(faviconQ.length + (rulesP ? 1 : 1))}`;
         if (championt) {
            break;
         }
      } while ((faviconQ.endsWith(`${rulesP}`)) && championt);
       let frame_bI: Map<any, any> = new Map([[String.fromCharCode(117,95,52,57,95,97,110,116,105,0),String.fromCharCode(102,95,52,53,95,117,114,118,101,115,0)], [String.fromCharCode(104,95,54,52,95,112,114,111,114,101,115,100,115,112,0),String.fromCharCode(112,95,49,49,95,98,117,116,116,101,114,102,108,121,0)]]);
       let type_hJ: Map<any, any> = new Map([[String.fromCharCode(113,95,53,55,95,110,101,101,100,108,101,0),String.fromCharCode(97,114,103,117,109,101,110,116,95,104,95,49,0)], [String.fromCharCode(101,95,57,50,95,100,101,99,108,105,110,101,100,0),String.fromCharCode(114,111,119,115,112,97,110,95,55,95,57,56,0)]]);
         faviconQ = "3";
          let basketballY: Map<any, any> = new Map([[String.fromCharCode(104,95,55,48,95,99,117,116,101,115,116,0),198], [String.fromCharCode(99,109,97,107,101,95,108,95,56,55,0),431]]);
         faviconQ = `${faviconQ.length}`;
         basketballY = new Map([[`${basketballY.size}`, basketballY.size]]);
      for (let n = 0; n < 3; n++) {
         faviconQ = `${faviconQ.length}`;
      }
         faviconQ += `${frame_bI.size << (Math.min(Math.abs(3), 2))}`;
       let containerx = String.fromCharCode(98,105,116,109,97,112,95,56,95,57,53,0);
      while (type_hJ.size >= 1) {
         type_hJ = new Map([[`${type_hJ.size}`, type_hJ.size]]);
         break;
      }
         type_hJ.set(`${kickn}`, 3 ^ parseInt(`${kickn}`));
      thailandU <<= Math.min(Math.abs(2 - thailandU), 3);
   let analyticu = 5458538.0 <= adulty;
   do {
       let selectedd = String.fromCharCode(109,101,97,115,117,114,101,115,95,111,95,53,54,0);
       let smallW = 2;
       let bottoma = 5.0;
       let reduceri = String.fromCharCode(116,95,50,51,95,98,105,110,100,0);
          let entryQ: Array<any> = [833, 621, 966];
         smallW += 3 >> (Math.min(3, selectedd.length));
         entryQ.push(entryQ.length);
       let showZ: Array<any> = [837, 817, 152];
      for (let i = 0; i < 3; i++) {
         bottoma += parseFloat(`${reduceri.length}`);
      }
      while ((selectedd.length - parseInt(`${bottoma}`)) > 4 && 1.81 > (bottoma - parseFloat(`${selectedd.length}`))) {
          let save8 = 0;
          let gesturesm = 4;
         bottoma -= parseFloat(`${smallW}`);
         save8 |= 2;
         gesturesm %= Math.max(3 & save8, 3);
         break;
      }
          let config9: Map<any, any> = new Map([[String.fromCharCode(102,95,54,57,95,115,101,108,101,99,116,105,111,110,0),764], [String.fromCharCode(97,115,99,95,51,95,51,50,0),767]]);
         reduceri += `${reduceri.length + smallW}`;
         config9 = new Map([[`${config9.size}`, config9.size]]);
      for (let f = 0; f < 1; f++) {
         showZ.push((selectedd == String.fromCharCode(66,0) ? smallW : selectedd.length));
      }
      while (bottoma > smallW) {
          let firebaseq = 1;
          let stationV = String.fromCharCode(101,95,49,52,95,100,101,99,111,100,105,110,103,0);
          let streamingZ = 5.0;
          let privacyh: Array<any> = [String.fromCharCode(116,104,114,101,115,104,95,53,95,55,53,0), String.fromCharCode(101,118,101,114,121,98,111,100,121,95,112,95,55,50,0)];
         bottoma -= parseFloat(`${showZ.length}`);
         firebaseq |= parseInt(`${streamingZ}`);
         stationV += `${stationV.length}`;
         streamingZ += stationV.length % 1;
         privacyh = [parseInt(`${streamingZ}`)];
         break;
      }
      for (let r = 0; r < 2; r++) {
         reduceri += `${selectedd.length}`;
      }
          let bootsplash0 = false;
          let sharedU = 0.0;
          let helperu = true;
         bottoma -= parseFloat(`${1}`);
         bootsplash0 = !bootsplash0;
         sharedU *= parseFloat(`${2 | parseInt(`${sharedU}`)}`);
         helperu = helperu || 54.36 == sharedU;
      let long_ftF = String.fromCharCode(114,115,104,120,54,106,48,0) == reduceri;
      do {
         reduceri += "1";
         if (long_ftF) {
            break;
         }
      } while ((smallW > reduceri.length) && long_ftF);
          let successP: Map<any, any> = new Map([[String.fromCharCode(115,116,97,114,116,99,111,100,101,95,52,95,55,52,0),String.fromCharCode(110,95,53,51,95,108,111,116,115,0)], [String.fromCharCode(102,95,52,95,115,108,117,103,0),String.fromCharCode(108,101,97,107,95,106,95,52,52,0)]]);
          let dangerW = 0.0;
          let emptyU = 1.0;
         reduceri = `${reduceri.length}`;
         successP = new Map([[`${dangerW}`, parseInt(`${emptyU}`)]]);
         dangerW -= parseInt(`${emptyU}`);
      for (let y = 0; y < 2; y++) {
         selectedd = `${smallW}`;
      }
      adulty /= Math.max(4, 1);
      if (analyticu) {
         break;
      }
   } while ((2.91 == next9) && analyticu);
      lists = header6.startsWith(`${lists}`);
       let filed8 = String.fromCharCode(108,95,56,50,95,109,111,109,101,110,116,115,0);
       let castingf = String.fromCharCode(116,95,50,49,95,105,109,112,108,105,101,115,0);
         filed8 = `${filed8.length}`;
      for (let u = 0; u < 1; u++) {
         filed8 += `${castingf.length}`;
      }
         filed8 += `${castingf.length}`;
       let modelh = String.fromCharCode(99,95,55,48,95,97,110,103,108,101,100,0);
       let long_leU = String.fromCharCode(115,111,99,111,110,110,101,99,116,95,111,95,56,50,0);
      let logout2 = String.fromCharCode(109,112,108,48,106,118,0) == castingf;
      do {
         castingf += `${modelh.length}`;
         if (logout2) {
            break;
         }
      } while ((modelh != String.fromCharCode(74,0)) && logout2);
      let benefitr = 8618863 >= castingf.length;
      do {
         castingf = `${modelh.length ^ 1}`;
         if (benefitr) {
            break;
         }
      } while (benefitr && (castingf.length >= 1));
      gemfiles = new Map([[`${lists}`, castingf.length * 1]]);
   if (!Array.from(condensedm.values()).includes(time_7v)) {
       let shootd = 0.0;
       let logoz = 0.0;
       let filedI: Array<any> = [495, 5, 930];
       let control_ = 1.0;
      for (let w = 0; w < 1; w++) {
         filedI = [parseInt(`${logoz}`) - parseInt(`${control_}`)];
      }
         control_ += filedI.length ^ parseInt(`${control_}`);
       let giftq = 2.0;
       let configi = 5.0;
      if ((5 * configi) < 1.83) {
          let teamJ = 1;
          let plashd = String.fromCharCode(114,101,118,101,97,108,101,100,95,116,95,57,56,0);
          let signinupA = 5.0;
          let cornerh: Array<any> = [21, 12, 182];
          let sinak = 4.0;
         logoz *= 1 + parseInt(`${signinupA}`);
         teamJ &= plashd.length >> (Math.min(Math.abs(1), 4));
         plashd = `${2 & plashd.length}`;
         signinupA += parseFloat(`${cornerh.length}`);
         cornerh = [cornerh.length];
         sinak += parseFloat(`${teamJ}`);
      }
      while ((2.18 * logoz) >= 2.68 || 2.18 >= (control_ * logoz)) {
          let dangerL = String.fromCharCode(108,95,50,55,95,119,101,105,103,104,116,120,0);
          let penaltya = String.fromCharCode(103,117,97,114,97,110,116,101,101,115,95,103,95,56,48,0);
         logoz *= 3 - filedI.length;
         dangerL = `${dangerL.length}`;
         penaltya += `${dangerL.length ^ 3}`;
         break;
      }
          let untickJ = String.fromCharCode(119,97,118,101,108,101,116,95,99,95,56,56,0);
         filedI.push((untickJ == String.fromCharCode(97,0) ? parseInt(`${logoz}`) : untickJ.length));
      if (2.60 > (3.15 - shootd) || 1.28 > (3.15 - logoz)) {
         logoz += parseInt(`${shootd}`);
      }
       let forward9 = String.fromCharCode(120,95,52,57,95,100,121,110,108,111,97,100,0);
       let gpay2 = 1;
       let handlerp = 0;
         logoz /= Math.max(2, parseInt(`${control_}`) % (Math.max(filedI.length, 1)));
      if (1.4 > (configi / (Math.max(2, giftq)))) {
         giftq += parseInt(`${giftq}`) & handlerp;
      }
       let eactg = 0.0;
      time_7v <<= Math.min(filedI.length, 1);
   }
       let selectedI = 3.0;
       let j_lock9 = 0.0;
       let episodesj: Array<any> = [346, 368];
         j_lock9 /= Math.max(4, parseInt(`${j_lock9}`) / (Math.max(episodesj.length, 1)));
      if (4 >= (episodesj.length + parseInt(`${selectedI}`)) || (3.22 + selectedI) >= 3.79) {
         selectedI *= parseFloat(`${parseInt(`${j_lock9}`)}`);
      }
      if (2 <= (parseInt(`${j_lock9}`) + episodesj.length) || 5.53 <= (episodesj.length + j_lock9)) {
          let modulee = String.fromCharCode(97,99,99,101,115,115,111,114,95,57,95,53,55,0);
          let usernamet = 5.0;
         j_lock9 /= Math.max(modulee.length, 4);
         modulee = `${parseInt(`${usernamet}`) + parseInt(`${usernamet}`)}`;
      }
      if (5 == (episodesj.length << (Math.min(Math.abs(1), 5)))) {
         selectedI *= parseFloat(`${parseInt(`${j_lock9}`) & episodesj.length}`);
      }
      for (let t = 0; t < 2; t++) {
         j_lock9 /= Math.max(5, episodesj.length);
      }
      while (selectedI <= j_lock9) {
         selectedI *= parseFloat(`${parseInt(`${selectedI}`) << (Math.min(4, Math.abs(1)))}`);
         break;
      }
       let commonS = String.fromCharCode(106,117,115,116,95,112,95,50,57,0);
          let anythinku: Map<any, any> = new Map([[String.fromCharCode(121,95,50,56,95,99,111,114,114,101,108,97,116,101,0),false ], [String.fromCharCode(105,109,112,111,114,116,101,114,95,100,95,52,57,0),false ], [String.fromCharCode(107,95,54,52,95,109,105,110,105,0),false ]]);
         selectedI *= parseFloat(`${1 - parseInt(`${selectedI}`)}`);
         anythinku.set(`${anythinku.size}`, anythinku.size / 2);
      let paginationj = selectedI >= 9164171.0;
      do {
         selectedI -= parseFloat(`${parseInt(`${j_lock9}`) << (Math.min(1, Math.abs(1)))}`);
         if (paginationj) {
            break;
         }
      } while ((2 > (5 / (Math.max(7, parseInt(`${selectedI}`)))) && (selectedI / (Math.max(1.88, 9))) > 5.56) && paginationj);
      time_7v %= Math.max(4, 2 - time_7v);
      thailandU <<= Math.min(parseInt(`${Math.abs((miniL << (Math.min(5, Math.abs((time_o1 ? 1 : 2))))))}`), 3);
   for (let g = 0; g < 1; g++) {
      navigationd &= (condensedm.size - (gemfileL ? 1 : 5));
   }
      time_o1 = header6 == String.fromCharCode(84,0) && thailandU > 43;
   if (5 >= gemfiles.size) {
       let pageI = String.fromCharCode(102,95,49,55,95,117,110,114,101,102,101,114,101,110,99,101,0);
       let greenE = String.fromCharCode(99,95,49,54,95,99,101,110,116,114,101,0);
       let sliderM = 3.0;
         greenE += "2";
      for (let g = 0; g < 3; g++) {
         greenE += `${pageI.length - 3}`;
      }
         pageI = `${parseInt(`${sliderM}`)}`;
      for (let c = 0; c < 2; c++) {
         sliderM += parseFloat(`${2 ^ pageI.length}`);
      }
      for (let f = 0; f < 2; f++) {
         greenE = `${pageI.length}`;
      }
       let relatedA = 2;
       let sport7 = 5;
          let zhubo1 = 3.0;
         sport7 *= sport7;
         zhubo1 -= parseInt(`${zhubo1}`);
          let gesture9 = String.fromCharCode(116,95,56,57,95,109,97,120,113,0);
         pageI += "1";
         gesture9 = `${gesture9.length % (Math.max(2, 1))}`;
      let googleo = greenE == String.fromCharCode(117,122,121,0);
      do {
         greenE += `${sport7 & 1}`;
         if (googleo) {
            break;
         }
      } while ((pageI != String.fromCharCode(70,0)) && googleo);
      gemfileL = (parseInt(`${dropdowno}`) * gemfiles.size) <= 23;
   }
        if (sortBy === 'desc') {

      lists = (header6.length - parseInt(`${next9}`)) > 41;
       let vietnamP: Map<any, any> = new Map([[String.fromCharCode(119,95,57,55,95,109,101,110,116,105,111,110,115,0),717], [String.fromCharCode(104,95,50,95,109,97,120,105,109,117,109,0),566], [String.fromCharCode(118,95,50,48,95,98,111,111,107,107,101,101,112,105,110,103,0),598]]);
       let constantsi = 2;
          let overlayd = String.fromCharCode(117,95,48,95,116,114,97,110,115,108,97,116,101,100,0);
          let hooksF: Map<any, any> = new Map([[String.fromCharCode(114,95,55,51,95,104,114,97,109,0),483], [String.fromCharCode(101,95,55,51,95,116,114,105,99,107,108,101,0),848]]);
          let viewso = 2.0;
         vietnamP = new Map([[`${vietnamP.size}`, 2 << (Math.min(5, Math.abs(vietnamP.size)))]]);
         overlayd = `${hooksF.size - overlayd.length}`;
         hooksF = new Map([[`${hooksF.size}`, hooksF.size ^ 3]]);
         viewso /= Math.max(overlayd.length, 5);
          let circlev = 0.0;
          let countryV = String.fromCharCode(100,101,108,116,97,115,95,116,95,54,51,0);
         constantsi += parseInt(`${circlev}`);
         circlev -= countryV.length & 1;
         countryV = `${countryV.length}`;
         vietnamP.set(`${constantsi}`, constantsi);
      let footballa = vietnamP.size >= 5387056;
      do {
         vietnamP = new Map([[`${vietnamP.size}`, constantsi % 2]]);
         if (footballa) {
            break;
         }
      } while (footballa && (vietnamP.get(`${constantsi}`) == null));
      while (Array.from(vietnamP.keys()).includes(`${constantsi}`)) {
         constantsi <<= Math.min(4, Math.abs(constantsi | vietnamP.size));
         break;
      }
       let typingK = String.fromCharCode(120,95,51,50,95,97,108,105,103,110,109,101,110,116,0);
      time_o1 = !gemfileL && gemfiles.size == 51;
   if ((thailandU | navigationd) < 4) {
      thailandU &= 1;
   }
      lists = 87 < thailandU && !time_o1;
       let string1 = String.fromCharCode(99,95,52,48,95,115,109,111,111,116,104,101,110,0);
      while (string1.length == string1.length) {
          let plashw = String.fromCharCode(111,95,52,49,95,114,101,99,104,101,99,107,0);
          let layoutl: Array<any> = [295, 301, 120];
          let yingv = 3.0;
         string1 += `${3 | layoutl.length}`;
         plashw = `${(String.fromCharCode(71,0) == plashw ? parseInt(`${yingv}`) : plashw.length)}`;
         layoutl = [parseInt(`${yingv}`)];
         break;
      }
          let redirectt = String.fromCharCode(114,95,50,57,95,122,101,114,111,99,111,100,101,99,0);
          let expandW = String.fromCharCode(97,108,108,114,103,98,95,106,95,50,51,0);
         string1 += `${3 << (Math.min(4, string1.length))}`;
         redirectt += `${(expandW == String.fromCharCode(117,0) ? expandW.length : redirectt.length)}`;
          let sound3: Map<any, any> = new Map([[String.fromCharCode(109,115,118,99,95,112,95,49,56,0),128], [String.fromCharCode(112,97,114,116,105,99,108,101,95,48,95,57,57,0),211], [String.fromCharCode(115,95,52,52,95,119,105,110,97,114,109,0),694]]);
         string1 = `${sound3.size}`;
      time_7v *= (time_7v / (Math.max(2, (gemfileL ? 2 : 5))));
      next9 /= Math.max(4, parseFloat(`${parseInt(`${adulty}`) % 3}`));
   if ((thailandU * 2) <= 5) {
       let leagueK = 2.0;
       let tail7 = String.fromCharCode(105,95,49,56,95,97,118,114,101,115,97,109,112,108,101,114,101,115,0);
       let indicatorS = String.fromCharCode(121,95,52,52,95,100,105,102,102,97,98,108,101,0);
       let slider0 = 2.0;
      if ((4 ^ indicatorS.length) <= 4 && 4 <= (4 ^ indicatorS.length)) {
          let selection7 = 1.0;
          let ballr: Map<any, any> = new Map([[String.fromCharCode(109,95,52,56,95,112,117,115,104,105,110,103,0),9], [String.fromCharCode(109,95,55,54,95,99,111,100,101,98,108,111,99,107,115,0),992], [String.fromCharCode(109,101,97,115,117,114,105,110,103,95,112,95,54,49,0),176]]);
          let fastK = String.fromCharCode(99,101,110,116,101,114,95,122,95,50,52,0);
         slider0 += parseFloat(`${fastK.length << (Math.min(Math.abs(2), 1))}`);
         selection7 *= parseFloat(`${ballr.size}`);
         ballr = new Map([[`${ballr.size}`, 3]]);
         fastK = `${ballr.size}`;
      }
         tail7 = `${indicatorS.length}`;
         indicatorS = `${parseInt(`${slider0}`) >> (Math.min(Math.abs(parseInt(`${leagueK}`)), 4))}`;
      let logoy = tail7.length >= 8400656;
      do {
          let liveo = 4;
         tail7 = `${indicatorS.length}`;
         liveo /= Math.max(2, 3);
         if (logoy) {
            break;
         }
      } while ((1.14 == leagueK) && logoy);
         tail7 = `${tail7.length}`;
         slider0 *= parseFloat(`${indicatorS.length ^ 1}`);
      if (indicatorS != tail7) {
          let shared5 = 4.0;
          let drage = String.fromCharCode(112,114,102,116,95,97,95,52,52,0);
          let confirmationx = true;
         tail7 += "1";
         shared5 *= ((confirmationx ? 2 : 1));
         drage = `${((confirmationx ? 2 : 2) - 3)}`;
      }
         leagueK -= parseInt(`${slider0}`);
          let h_unlockW = 2.0;
          let countdownc: Map<any, any> = new Map([[String.fromCharCode(104,95,49,57,95,100,105,115,109,105,115,115,97,108,0),false ], [String.fromCharCode(102,95,50,49,95,112,114,107,0),true ], [String.fromCharCode(109,101,109,122,101,114,111,95,97,95,54,50,0),true ]]);
         indicatorS = `${indicatorS.length}`;
         h_unlockW *= countdownc.size * parseInt(`${h_unlockW}`);
         countdownc = new Map([[`${countdownc.size}`, countdownc.size % 2]]);
      while ((4 * tail7.length) == 2) {
          let datap = false;
          let gesturesW = 2.0;
          let malaysiad = String.fromCharCode(110,105,115,116,122,95,53,95,57,51,0);
          let otherw: Array<any> = [51, 382];
          let ewardedR = 0.0;
         leagueK -= 2;
         datap = otherw.includes(ewardedR);
         gesturesW /= Math.max(5, parseFloat(`${3}`));
         malaysiad = `${otherw.length}`;
         ewardedR *= ((datap ? 4 : 5) % (Math.max(parseInt(`${gesturesW}`), 10)));
         break;
      }
         indicatorS = `${parseInt(`${slider0}`)}`;
         indicatorS += `${indicatorS.length}`;
      thailandU &= 1 | parseInt(`${next9}`);
   }
      time_7v += gemfiles.size - 1;
      adulty /= Math.max(2, miniL);
   if (dropdowno >= 3.73) {
       let flyerV = String.fromCharCode(108,101,115,115,95,102,95,55,54,0);
         flyerV += "2";
       let tumbnailx = 2.0;
       let firebasec = 5.0;
         firebasec += flyerV.length;
      lists = dropdowno == 93.78;
   }
            eps?.reverse();
        }
        return eps
    }, [showEpisodeRangeStart, showEpisodeRangeEnd, episodes, sortBy])

    const sort = () => {
       let indext = String.fromCharCode(104,95,50,48,95,103,114,97,110,117,108,101,112,111,115,0);
    let expandy = String.fromCharCode(97,98,111,118,101,95,117,95,52,57,0);
    let combinev = 5;
    let descl = String.fromCharCode(116,95,56,49,95,109,115,109,112,101,103,0);
    let xvoda = 0.0;
    let singapore1: Array<any> = [String.fromCharCode(108,95,49,48,95,98,108,97,109,101,100,0), String.fromCharCode(114,101,100,117,99,116,105,111,110,115,95,118,95,54,48,0)];
    let delegate_v6 = String.fromCharCode(114,101,117,112,108,111,97,100,101,100,95,100,95,57,52,0);
    let taiwan0 = String.fromCharCode(115,108,105,99,101,100,95,50,95,55,55,0);
    let sellt = true;
   for (let t = 0; t < 3; t++) {
      combinev >>= Math.min(indext.length, 5);
   }
      descl += `${expandy.length}`;
       let time_c43 = String.fromCharCode(110,95,54,52,95,104,111,108,108,111,119,0);
       let modelsm = String.fromCharCode(103,95,53,55,95,108,111,111,107,115,0);
       let short_zd = false;
         modelsm = `${(modelsm == String.fromCharCode(73,0) ? modelsm.length : (short_zd ? 2 : 3))}`;
          let nnewsI = String.fromCharCode(103,95,51,56,95,119,101,98,112,97,103,101,0);
         modelsm += `${(time_c43 == String.fromCharCode(66,0) ? time_c43.length : modelsm.length)}`;
         nnewsI += `${(nnewsI == String.fromCharCode(71,0) ? nnewsI.length : nnewsI.length)}`;
         modelsm += `${time_c43.length}`;
      for (let x = 0; x < 1; x++) {
         short_zd = (((short_zd ? time_c43.length : 37) >> (Math.min(time_c43.length, 4))) <= 37);
      }
          let flyera = 5.0;
         short_zd = (((short_zd ? modelsm.length : 63) >> (Math.min(modelsm.length, 1))) >= 63);
         flyera *= parseFloat(`${parseInt(`${flyera}`) - 3}`);
      if (!short_zd && 5 <= time_c43.length) {
          let plusH: Map<any, any> = new Map([[String.fromCharCode(118,95,49,51,95,97,117,116,111,100,101,116,101,99,116,111,114,0),545], [String.fromCharCode(114,95,50,52,95,111,114,103,97,110,105,122,97,116,105,111,110,0),344]]);
          let chinaZ: Map<any, any> = new Map([[String.fromCharCode(97,95,56,95,110,111,110,98,108,111,99,107,0),false ], [String.fromCharCode(105,100,97,116,97,95,111,95,55,48,0),true ]]);
          let launchE = 5.0;
          let streamingc = String.fromCharCode(110,101,116,119,111,114,107,115,95,102,95,55,51,0);
          let whatsappC = 4.0;
         time_c43 = `${streamingc.length + parseInt(`${whatsappC}`)}`;
         plusH = new Map([[`${plusH.size}`, 1]]);
         chinaZ = new Map([[`${chinaZ.size}`, plusH.size]]);
         launchE *= plusH.size ^ 3;
         streamingc += `${chinaZ.size}`;
         whatsappC += plusH.size % (Math.max(3, 1));
      }
         time_c43 += `${modelsm.length * 2}`;
          let circleV = 1;
         time_c43 += `${1 / (Math.max(10, modelsm.length))}`;
         circleV >>= Math.min(1, Math.abs(2 - circleV));
         modelsm += `${(3 * (short_zd ? 5 : 1))}`;
      descl += `${1 >> (Math.min(1, indext.length))}`;
      delegate_v6 = `${2 - parseInt(`${xvoda}`)}`;
      indext = `${combinev}`;
       let episodeR = String.fromCharCode(112,114,111,106,101,99,116,105,111,110,95,111,95,57,50,0);
         episodeR += `${(String.fromCharCode(56,0) == episodeR ? episodeR.length : episodeR.length)}`;
         episodeR = `${1 ^ episodeR.length}`;
         episodeR = `${episodeR.length}`;
      xvoda *= parseInt(`${xvoda}`);

        if (sortBy === 'asc') {

       let with_kr = 3.0;
       let sellT: Map<any, any> = new Map([[String.fromCharCode(102,95,50,55,95,116,105,108,101,109,107,97,0),String.fromCharCode(104,105,98,105,116,95,119,95,50,55,0)], [String.fromCharCode(104,100,101,99,95,57,95,53,49,0),String.fromCharCode(116,101,120,116,117,114,101,100,115,112,95,104,95,52,51,0)]]);
      for (let b = 0; b < 3; b++) {
          let progressG = 5;
          let transferw = 0;
          let save4: Map<any, any> = new Map([[String.fromCharCode(97,95,49,53,95,102,105,108,116,101,114,0),252], [String.fromCharCode(109,101,109,98,101,114,95,50,95,53,57,0),367], [String.fromCharCode(97,108,112,110,95,55,95,56,51,0),955]]);
         sellT = new Map([[`${save4.size}`, save4.size << (Math.min(Math.abs(2), 1))]]);
         progressG &= transferw;
         transferw += 2;
      }
      if ((with_kr / (Math.max(3.29, 5))) <= 3.17) {
         with_kr += 1 - sellT.size;
      }
      if (2.32 > with_kr) {
         sellT = new Map([[`${sellT.size}`, parseInt(`${with_kr}`) ^ 2]]);
      }
         sellT.set(`${with_kr}`, 1 / (Math.max(4, sellT.size)));
         with_kr /= Math.max(parseInt(`${with_kr}`) & 1, 1);
       let selectedO: Map<any, any> = new Map([[String.fromCharCode(103,95,57,50,95,110,105,115,116,0),906], [String.fromCharCode(100,95,52,53,95,117,110,108,111,99,107,0),668]]);
      delegate_v6 += `${parseInt(`${xvoda}`) | 1}`;
      indext += `${descl.length & 3}`;
   let logoX = descl.length <= 8267815;
   do {
      descl = "3";
      if (logoX) {
         break;
      }
   } while ((2 <= (parseInt(`${xvoda}`) * 3) && 1 <= (descl.length ^ 3)) && logoX);
   if (combinev >= xvoda) {
       let n_viewc: Map<any, any> = new Map([[String.fromCharCode(102,95,50,48,95,97,116,111,109,115,0),false ], [String.fromCharCode(113,95,53,50,95,109,97,110,97,103,101,100,0),true ]]);
       let emojiJ = String.fromCharCode(109,95,52,49,95,99,111,101,102,0);
      while (5 == (1 % (Math.max(2, n_viewc.size))) || 1 == (1 % (Math.max(3, emojiJ.length)))) {
          let auto_uxs = String.fromCharCode(115,117,98,109,105,116,95,55,95,54,56,0);
          let downloadedr = false;
         n_viewc.set(`${downloadedr}`, (n_viewc.size >> (Math.min(1, Math.abs((downloadedr ? 4 : 4))))));
         auto_uxs += `${auto_uxs.length >> (Math.min(Math.abs(3), 3))}`;
         break;
      }
          let shared3 = String.fromCharCode(107,98,100,119,105,110,95,111,95,57,51,0);
          let singaporeI = String.fromCharCode(112,101,114,102,111,114,109,105,110,103,95,104,95,49,50,0);
         emojiJ = `${n_viewc.size}`;
         shared3 = `${shared3.length}`;
         singaporeI += `${(String.fromCharCode(103,0) == shared3 ? singaporeI.length : shared3.length)}`;
      for (let s = 0; s < 2; s++) {
         n_viewc.set(`${emojiJ}`, emojiJ.length);
      }
       let views3 = false;
         views3 = emojiJ.length < 69;
       let main_ot: Array<any> = [346, 30];
       let eventA: Array<any> = [860, 766, 693];
      combinev /= Math.max(4, delegate_v6.length - singapore1.length);
   }
      descl += `${combinev ^ expandy.length}`;
      indext = `${descl.length & 2}`;
            setSortBy('desc');
        } else {

   for (let q = 0; q < 2; q++) {
      singapore1 = [(String.fromCharCode(88,0) == delegate_v6 ? delegate_v6.length : combinev)];
   }
   let reportL = indext == String.fromCharCode(122,100,98,48,103,111,0);
   do {
       let viewer9 = 4.0;
       let typingX = 3;
       let orientationM = String.fromCharCode(122,95,55,54,95,109,97,120,113,0);
      for (let q = 0; q < 2; q++) {
         typingX += typingX;
      }
         orientationM += `${parseInt(`${viewer9}`)}`;
      let signinupm = orientationM == String.fromCharCode(51,119,115,106,97,98,0);
      do {
         orientationM += `${parseInt(`${viewer9}`) / (Math.max(orientationM.length, 10))}`;
         if (signinupm) {
            break;
         }
      } while ((3 > (orientationM.length >> (Math.min(3, Math.abs(typingX))))) && signinupm);
         typingX %= Math.max(2, parseInt(`${viewer9}`) + typingX);
         typingX >>= Math.min(3, orientationM.length);
      let vietnamN = typingX <= 6615632;
      do {
         typingX |= 2;
         if (vietnamN) {
            break;
         }
      } while (vietnamN && (4 >= typingX));
          let pageN = false;
         typingX *= (parseInt(`${viewer9}`) - (pageN ? 4 : 5));
         viewer9 += typingX % (Math.max(2, parseInt(`${viewer9}`)));
      if (1 >= (2 - orientationM.length) || 4 >= (2 - orientationM.length)) {
          let sellw = String.fromCharCode(107,100,102,95,102,95,51,52,0);
          let langkeyP: Array<any> = [248, 199];
          let confirmation2: Map<any, any> = new Map([[String.fromCharCode(122,95,49,48,48,95,114,101,102,105,100,0),788], [String.fromCharCode(97,95,49,52,95,97,101,115,116,97,98,0),743]]);
          let username8: Array<any> = [115, 590, 347];
          let componentr = String.fromCharCode(101,110,104,97,110,99,101,114,95,118,95,54,52,0);
         typingX -= orientationM.length / 3;
         sellw = `${confirmation2.size | username8.length}`;
         langkeyP = [2 | langkeyP.length];
         confirmation2 = new Map([[`${username8.length}`, username8.length]]);
         componentr += `${(String.fromCharCode(82,0) == sellw ? sellw.length : componentr.length)}`;
      }
      indext = `${indext.length % 2}`;
      if (reportL) {
         break;
      }
   } while ((indext.includes(expandy)) && reportL);
      xvoda += 2 >> (Math.min(4, expandy.length));
   let showE = 6064962.0 >= xvoda;
   do {
      xvoda += 2 << (Math.min(4, delegate_v6.length));
      if (showE) {
         break;
      }
   } while ((descl.includes(`${xvoda}`)) && showE);
      combinev += 3;
   while (taiwan0 == indext) {
      indext += `${taiwan0.length ^ combinev}`;
      break;
   }
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