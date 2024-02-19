import React, {
  useState,
  useMemo,
  memo,
  useEffect,
} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import { yysSpinner } from '@type';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SortAscSvg, SortDescSvg, } from '@static';
import BottomSheet from '../bottomSheet/yys_progress_catagory';

interface yysIconarrowrightorangeStation {
  onConfirm: any;
  onCancel: any;
  episodes?: yysSpinner;
  activeEpisode?: number;
  rangeSize?: number;
  isVisible: boolean;
  handleClose: any;
}
function VodEpisodeSelectionModal({
  onConfirm,
  onCancel,
  episodes,
  isVisible,
  handleClose,
  activeEpisode = 0,
  rangeSize = 50,
}: yysIconarrowrightorangeStation) {
  const { colors, textVariants, spacing } = useTheme();
  const EPISODE_RANGE_SIZE = rangeSize;
  const insets = useSafeAreaInsets();
  const [sortBy, setSortBy] = useState('asc');
  const [currentIndex, setCurrentIndex] = useState(
    Math.floor(activeEpisode / EPISODE_RANGE_SIZE),
  );
  const showEpisodeRangeStart = useMemo(
    () => currentIndex * EPISODE_RANGE_SIZE,
    [activeEpisode, currentIndex],
  );
  const showEpisodeRangeEnd = useMemo(
    () =>
      Math.min(
        showEpisodeRangeStart + EPISODE_RANGE_SIZE,
        episodes
          ? episodes.url_count
          : showEpisodeRangeStart + EPISODE_RANGE_SIZE,
      ),
    [episodes, showEpisodeRangeStart],
  );
  const displayEpisodes = useMemo(() => {
       let logo8 = true;
    let clubV: Array<any> = [149, 57, 893];
    let sendO = false;
    let iconpipshrinkr = String.fromCharCode(115,101,116,105,118,95,109,95,50,55,0);
    let leaguedetailsbgV = String.fromCharCode(114,95,56,53,95,98,97,114,114,105,101,114,0);
    let untickv = String.fromCharCode(112,108,97,99,101,104,111,108,100,101,114,95,106,95,49,48,0);
    let teamdetailsbgx = 3.0;
    let showlessC = 3.0;
    let area9 = String.fromCharCode(103,95,51,56,0);
    let verticali = 3.0;
    let predictionbannersharedE = String.fromCharCode(117,95,54,54,95,103,105,102,115,0);
    let modules = true;
    let themeJ = String.fromCharCode(103,114,97,121,97,95,109,95,56,53,0);
   let styleJ = teamdetailsbgx <= 6266405.0;
   do {
      teamdetailsbgx *= parseInt(`${showlessC}`) * 2;
      if (styleJ) {
         break;
      }
   } while (styleJ && (5.3 < showlessC));
       let crownE = 4;
      if ((crownE - 5) <= 2 && (crownE - 5) <= 5) {
         crownE %= Math.max(crownE % (Math.max(6, crownE)), 4);
      }
      let mimeg = crownE >= 6573322;
      do {
          let sina0 = String.fromCharCode(113,95,55,50,95,110,105,101,108,115,97,100,100,0);
          let scorepopsoundb = 3.0;
         crownE >>= Math.min(Math.abs(1 << (Math.min(Math.abs(parseInt(`${scorepopsoundb}`)), 1))), 5);
         sina0 = `${sina0.length}`;
         scorepopsoundb *= sina0.length << (Math.min(sina0.length, 5));
         if (mimeg) {
            break;
         }
      } while (mimeg && (3 <= (2 << (Math.min(4, Math.abs(crownE)))) && (2 << (Math.min(2, Math.abs(crownE)))) <= 3));
      while ((crownE / (Math.max(9, crownE))) < 1 && 2 < (crownE / 1)) {
         crownE |= 1;
         break;
      }
      sendO = 50 <= untickv.length;
   let leaguep = iconpipshrinkr == String.fromCharCode(104,122,57,120,55,114,112,53,0);
   do {
      iconpipshrinkr = `${((logo8 ? 5 : 5))}`;
      if (leaguep) {
         break;
      }
   } while ((4 <= untickv.length) && leaguep);
       let acceptedR = String.fromCharCode(116,95,56,50,95,109,111,100,101,99,111,115,116,115,0);
       let binddatasT = String.fromCharCode(100,95,50,50,95,100,98,104,97,110,100,108,101,0);
       let iconwatchnowu = String.fromCharCode(115,117,112,101,114,119,105,110,100,111,119,95,53,95,56,48,0);
      for (let j = 0; j < 2; j++) {
          let minimizeS = String.fromCharCode(105,95,56,48,95,104,111,108,100,0);
          let iconeditC = String.fromCharCode(101,120,112,105,114,121,95,110,95,57,53,0);
          let videobufferloadingM: Array<any> = [392, 433, 387];
         iconwatchnowu += `${binddatasT.length >> (Math.min(2, iconwatchnowu.length))}`;
         minimizeS += `${3 >> (Math.min(5, iconeditC.length))}`;
         iconeditC += `${minimizeS.length}`;
         videobufferloadingM.push(2);
      }
       let arrowselectdowno = true;
       let reactnativeratings8 = true;
       let mini0 = true;
       let nalytics6 = false;
         nalytics6 = (((mini0 ? acceptedR.length : 94) / (Math.max(acceptedR.length, 7))) == 94);
         iconwatchnowu = `${(String.fromCharCode(95,0) == binddatasT ? (reactnativeratings8 ? 2 : 3) : binddatasT.length)}`;
         binddatasT = "2";
      while (!acceptedR.includes(`${nalytics6}`)) {
         acceptedR = `${3 * acceptedR.length}`;
         break;
      }
      while (acceptedR.length >= 4 || arrowselectdowno) {
         arrowselectdowno = acceptedR.length >= 34;
         break;
      }
         arrowselectdowno = iconwatchnowu.length >= binddatasT.length;
      teamdetailsbgx *= clubV.length;

    const eps = episodes?.urls?.slice(
      showEpisodeRangeStart,
      showEpisodeRangeEnd,
    );

      leaguedetailsbgV = `${(untickv == String.fromCharCode(80,0) ? clubV.length : untickv.length)}`;
      teamdetailsbgx -= leaguedetailsbgV.length ^ parseInt(`${teamdetailsbgx}`);
   while (logo8 || !sendO) {
      sendO = clubV.includes(sendO);
      break;
   }
   if (!clubV.includes(showlessC)) {
      showlessC /= Math.max(3 << (Math.min(Math.abs(parseInt(`${showlessC}`)), 3)), 1);
   }
    if (sortBy === 'desc') {

   while (1 >= (iconpipshrinkr.length << (Math.min(2, clubV.length)))) {
      iconpipshrinkr += `${parseInt(`${showlessC}`)}`;
      break;
   }
      clubV.push(leaguedetailsbgV.length & clubV.length);
   let sanst = sendO ? !sendO : sendO;
   do {
      sendO = (logo8 ? sendO : logo8);
      if (sanst) {
         break;
      }
   } while (sanst && (sendO));
   let sharewhite2 = 7779020 >= untickv.length;
   do {
      untickv += `${(leaguedetailsbgV.length << (Math.min(3, Math.abs((logo8 ? 5 : 3)))))}`;
      if (sharewhite2) {
         break;
      }
   } while (sharewhite2 && (!untickv.startsWith(`${logo8}`)));
      eps?.reverse();
    }
    return eps;
  }, [showEpisodeRangeStart, showEpisodeRangeEnd, episodes, sortBy]);

  
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeEpisode]);

  const sort = () => {
       let iconadslink8: Map<any, any> = new Map([[String.fromCharCode(118,95,53,54,95,112,97,112,101,114,0),669], [String.fromCharCode(118,115,117,98,113,95,102,95,56,57,0),564]]);
    let turndown0 = String.fromCharCode(116,114,97,110,115,105,101,110,116,95,101,95,53,53,0);
    let defaultpredictionprofilei: Map<any, any> = new Map([[String.fromCharCode(112,114,111,100,117,99,116,95,119,95,49,49,0),856], [String.fromCharCode(115,121,115,99,116,108,95,121,95,52,57,0),734]]);
    let iconplayP = String.fromCharCode(106,95,50,48,95,97,115,115,101,116,115,0);
    let airbnbstarselectedR = String.fromCharCode(97,95,48,95,100,101,99,111,100,101,114,115,0);
    let iconpipexpandB: Array<any> = [481, 925];
    let connectiony: Array<any> = [571, 588];
   while (iconadslink8.size > iconpipexpandB.length) {
       let shootM = String.fromCharCode(102,95,51,53,95,99,97,99,104,101,102,108,117,115,104,0);
       let otherN: Array<any> = [692, 815, 703];
       let statisticsactiveA = 3;
       let ajaxl = String.fromCharCode(98,111,111,107,109,97,114,107,115,95,108,95,53,48,0);
         shootM = `${(String.fromCharCode(118,0) == shootM ? ajaxl.length : shootM.length)}`;
      while (1 <= (shootM.length | otherN.length)) {
         otherN.push(2);
         break;
      }
          let relatedB = 5.0;
          let field0: Array<any> = [917, 466];
         otherN.push(2);
         relatedB += 3 >> (Math.min(Math.abs(parseInt(`${relatedB}`)), 4));
         field0.push(parseInt(`${relatedB}`) + 1);
      if (3 <= (shootM.length ^ statisticsactiveA) && (statisticsactiveA ^ shootM.length) <= 3) {
          let predictionbannersharedP: Array<any> = [109, 98, 285];
          let informationi = 3.0;
          let mathI = String.fromCharCode(99,104,97,99,104,97,95,121,95,52,49,0);
          let chatH = true;
         shootM += `${ajaxl.length + predictionbannersharedP.length}`;
         predictionbannersharedP.push(parseInt(`${informationi}`));
         informationi /= Math.max((parseFloat(`${String.fromCharCode(102,0) == mathI ? mathI.length : (chatH ? 4 : 2)}`)), 5);
         chatH = (((chatH ? 56 : mathI.length) % (Math.max(mathI.length, 6))) > 56);
      }
      if (3 <= shootM.length) {
         ajaxl += `${(String.fromCharCode(54,0) == ajaxl ? statisticsactiveA : ajaxl.length)}`;
      }
          let combinedK = 0.0;
          let notification0 = String.fromCharCode(116,119,111,115,116,97,103,101,95,110,95,53,51,0);
          let charto: Map<any, any> = new Map([[String.fromCharCode(105,95,56,95,97,100,118,97,110,99,101,100,0),636], [String.fromCharCode(104,100,110,111,100,101,95,105,95,50,57,0),676]]);
         shootM = `${ajaxl.length}`;
         combinedK /= Math.max(3, (parseFloat(`${String.fromCharCode(68,0) == notification0 ? charto.size : notification0.length}`)));
         charto = new Map([[notification0, 1]]);
      if ((shootM.length * 2) >= 3 && (2 * otherN.length) >= 5) {
         otherN.push((String.fromCharCode(57,0) == shootM ? shootM.length : otherN.length));
      }
         statisticsactiveA -= 2 | otherN.length;
      let submitE = 7962126 >= otherN.length;
      do {
         otherN.push(otherN.length);
         if (submitE) {
            break;
         }
      } while (submitE && (3 >= (otherN.length ^ shootM.length) && (shootM.length ^ 3) >= 4));
         ajaxl += `${statisticsactiveA + 3}`;
      if (otherN.length < shootM.length) {
         shootM += "3";
      }
         otherN.push(ajaxl.length * 2);
      iconpipexpandB = [iconadslink8.size % 1];
      break;
   }
   let faviconS = turndown0 == String.fromCharCode(52,103,113,0);
   do {
      turndown0 += `${defaultpredictionprofilei.size}`;
      if (faviconS) {
         break;
      }
   } while ((1 > turndown0.length) && faviconS);
       let valuesq = String.fromCharCode(115,113,108,105,116,101,114,101,98,97,115,101,114,95,116,95,55,48,0);
       let sound8: Map<any, any> = new Map([[String.fromCharCode(114,95,50,50,95,108,105,98,107,118,97,122,97,97,114,0),897], [String.fromCharCode(111,95,51,57,95,99,117,114,115,111,114,115,0),177], [String.fromCharCode(98,114,97,110,99,104,95,114,95,55,0),988]]);
       let topic7 = true;
      if ((sound8.size | valuesq.length) == 4) {
          let notificationgrayB = String.fromCharCode(119,95,57,52,95,110,101,116,101,114,114,110,111,0);
         valuesq = `${((topic7 ? 1 : 2) | notificationgrayB.length)}`;
      }
         sound8 = new Map([[`${sound8.size}`, 3 & sound8.size]]);
         valuesq += `${(String.fromCharCode(55,0) == valuesq ? sound8.size : valuesq.length)}`;
      for (let r = 0; r < 1; r++) {
          let iconmoreO = 1;
          let expirede = 4;
          let pluss = 2.0;
         sound8.set(`${expirede}`, 3);
         iconmoreO *= 1 | iconmoreO;
         expirede &= 3 << (Math.min(Math.abs(iconmoreO), 4));
         pluss *= parseFloat(`${1}`);
      }
      for (let r = 0; r < 2; r++) {
          let index7 = false;
         sound8 = new Map([[`${sound8.size}`, sound8.size]]);
         index7 = !index7;
      }
      let a_hashe = 8398864 <= valuesq.length;
      do {
         valuesq += `${sound8.size % (Math.max(2, 6))}`;
         if (a_hashe) {
            break;
         }
      } while (a_hashe && (4 == (3 & valuesq.length) && 1 == (3 & valuesq.length)));
      while (2 == (valuesq.length >> (Math.min(Math.abs(3), 3)))) {
          let matchinactiveM = String.fromCharCode(99,104,111,115,101,110,95,115,95,52,0);
          let dragu = String.fromCharCode(108,95,56,49,95,107,108,97,121,116,110,0);
          let executor7 = String.fromCharCode(108,97,99,101,115,95,115,95,57,55,0);
          let airbnbstarf = true;
          let imagesn = true;
         sound8.set(valuesq, 3 >> (Math.min(2, matchinactiveM.length)));
         matchinactiveM += `${dragu.length}`;
         dragu = "3";
         executor7 += `${executor7.length << (Math.min(Math.abs(3), 2))}`;
         airbnbstarf = executor7.length < 16;
         break;
      }
      if (1 == valuesq.length || topic7) {
         valuesq += `${(sound8.size - (topic7 ? 3 : 3))}`;
      }
         valuesq = `${valuesq.length}`;
      connectiony = [((topic7 ? 2 : 5) << (Math.min(turndown0.length, 3)))];
   for (let q = 0; q < 1; q++) {
      connectiony.push(connectiony.length & 2);
   }
      iconpipexpandB = [turndown0.length];

    if (sortBy === 'asc') {

      turndown0 += `${1 ^ iconadslink8.size}`;
   if (2 <= iconplayP.length) {
       let episodeH = false;
          let bellreminder8 = String.fromCharCode(109,117,108,116,105,112,108,101,114,115,95,122,95,54,55,0);
          let libapminsightaR = 4;
         episodeH = String.fromCharCode(80,0) == bellreminder8;
         bellreminder8 += `${libapminsightaR * 2}`;
         libapminsightaR *= 2 | libapminsightaR;
       let formq: Array<any> = [94, 16, 762];
      if (episodeH) {
         episodeH = episodeH && formq.length > 95;
      }
      iconplayP += `${iconplayP.length}`;
   }
      connectiony = [defaultpredictionprofilei.size + iconadslink8.size];
   for (let n = 0; n < 2; n++) {
       let nendP = String.fromCharCode(97,115,115,105,103,110,109,101,110,116,95,56,95,56,49,0);
       let libfb6 = 5.0;
       let moviesm: Map<any, any> = new Map([[String.fromCharCode(121,95,56,53,95,117,116,118,105,100,101,111,100,115,112,0),true ], [String.fromCharCode(120,95,49,51,95,101,108,105,103,105,98,108,101,0),false ]]);
          let gemfileM = true;
         libfb6 /= Math.max(parseFloat(`${moviesm.size & 2}`), 5);
      let hookt = libfb6 >= 7968520.0;
      do {
         libfb6 /= Math.max(parseFloat(`${3 >> (Math.min(5, Math.abs(moviesm.size)))}`), 2);
         if (hookt) {
            break;
         }
      } while (hookt && (!nendP.startsWith(`${libfb6}`)));
       let policys = true;
      while (!Array.from(moviesm.values()).includes(libfb6)) {
          let configure6: Map<any, any> = new Map([[String.fromCharCode(100,101,115,99,114,105,112,116,111,114,95,108,95,52,53,0),56], [String.fromCharCode(107,95,55,54,95,100,101,99,108,105,110,101,100,0),561]]);
         libfb6 /= Math.max(parseFloat(`${3}`), 4);
         configure6.set(`${configure6.size}`, 3 & configure6.size);
         break;
      }
      while (!nendP.includes(`${libfb6}`)) {
         nendP = `${3 | parseInt(`${libfb6}`)}`;
         break;
      }
         policys = moviesm.get(`${policys}`) != null;
          let emojiheartY = String.fromCharCode(116,114,97,107,95,97,95,49,48,48,0);
          let libsentrys = 3.0;
         libfb6 += parseFloat(`${1}`);
         emojiheartY += `${emojiheartY.length}`;
         libsentrys -= 3 >> (Math.min(4, emojiheartY.length));
         policys = 54.9 >= libfb6;
          let statisticsinactiveW = String.fromCharCode(100,101,97,100,105,110,101,95,99,95,53,56,0);
          let informationN: Map<any, any> = new Map([[String.fromCharCode(119,95,56,54,95,97,100,100,114,115,0),125], [String.fromCharCode(102,105,108,108,115,95,51,95,53,49,0),79], [String.fromCharCode(116,95,52,54,95,117,116,105,108,105,116,121,0),102]]);
         nendP += `${moviesm.size}`;
         statisticsinactiveW = `${(String.fromCharCode(121,0) == statisticsinactiveW ? statisticsinactiveW.length : informationN.size)}`;
         informationN = new Map([[`${informationN.size}`, informationN.size]]);
      turndown0 = `${nendP.length << (Math.min(Math.abs(2), 3))}`;
   }
       let iconchatsendu: Array<any> = [513, 510];
       let colorsS: Map<any, any> = new Map([[String.fromCharCode(105,115,111,95,118,95,51,55,0),String.fromCharCode(117,118,108,99,95,111,95,55,51,0)], [String.fromCharCode(99,117,114,115,111,114,95,104,95,52,55,0),String.fromCharCode(99,108,105,112,98,111,97,114,100,95,115,95,52,57,0)]]);
       let libfbC = 5.0;
          let shielddonev = String.fromCharCode(110,117,109,95,122,95,57,51,0);
          let pause9 = String.fromCharCode(120,99,116,101,115,116,95,119,95,56,49,0);
          let gesturesI = String.fromCharCode(106,95,56,95,97,115,109,100,101,102,115,0);
         colorsS = new Map([[`${libfbC}`, gesturesI.length % (Math.max(1, 10))]]);
         shielddonev = `${3 & shielddonev.length}`;
         pause9 += `${2 ^ shielddonev.length}`;
         gesturesI = `${pause9.length - shielddonev.length}`;
      if ((libfbC * 3.38) <= 4.16 || (3 << (Math.min(1, Math.abs(colorsS.size)))) <= 4) {
         colorsS = new Map([[`${colorsS.size}`, parseInt(`${libfbC}`)]]);
      }
          let imagemanagerx = 4.0;
         iconchatsendu.push(iconchatsendu.length);
         imagemanagerx -= parseFloat(`${1}`);
       let package_cF: Array<any> = [842, 185];
       let reminder1: Array<any> = [String.fromCharCode(112,95,49,53,0), String.fromCharCode(99,104,97,114,108,101,110,95,54,95,53,52,0), String.fromCharCode(114,101,115,104,117,102,102,108,101,95,102,95,53,0)];
         package_cF.push(3);
      let airbnbstarJ = libfbC >= 8730265.0;
      do {
          let roomq: Map<any, any> = new Map([[String.fromCharCode(108,95,54,95,109,97,110,100,97,116,111,114,121,0),false ], [String.fromCharCode(122,95,54,50,95,102,97,116,101,0),true ], [String.fromCharCode(111,114,119,97,114,100,101,100,95,52,95,52,56,0),false ]]);
         libfbC += parseFloat(`${1 >> (Math.min(3, Math.abs(roomq.size)))}`);
         if (airbnbstarJ) {
            break;
         }
      } while (airbnbstarJ && (package_cF.includes(libfbC)));
      for (let t = 0; t < 1; t++) {
         libfbC *= parseFloat(`${package_cF.length * reminder1.length}`);
      }
      for (let o = 0; o < 1; o++) {
          let layout4 = String.fromCharCode(98,95,50,52,95,112,114,101,109,117,108,116,105,112,108,105,101,100,0);
         iconchatsendu.push(reminder1.length);
         layout4 += `${layout4.length % 3}`;
      }
          let livenodatabgimgp = String.fromCharCode(105,95,51,50,95,116,114,117,110,99,97,116,101,0);
          let privilegeM = 0.0;
          let activityR = 1.0;
         colorsS = new Map([[`${package_cF.length}`, package_cF.length]]);
         livenodatabgimgp = `${parseInt(`${activityR}`) >> (Math.min(1, Math.abs(1)))}`;
         privilegeM /= Math.max(4, parseInt(`${activityR}`) | 1);
      iconpipexpandB.push(airbnbstarselectedR.length);
      setSortBy('desc');
    } else {

      iconadslink8.set(iconplayP, defaultpredictionprofilei.size);
       let libreactu = String.fromCharCode(99,104,101,99,107,98,111,120,95,53,95,49,55,0);
       let cornerkickv = 2.0;
       let backwhitev = 4.0;
       let gesture9 = 1.0;
       let clubk = 1.0;
      for (let g = 0; g < 1; g++) {
         gesture9 /= Math.max(1, 3);
      }
         gesture9 -= parseInt(`${cornerkickv}`) * 2;
      while ((libreactu.length - gesture9) > 2.24) {
         gesture9 *= libreactu.length << (Math.min(Math.abs(3), 5));
         break;
      }
      if (3.69 < cornerkickv) {
          let orangedownarrowb = 4.0;
         backwhitev += parseFloat(`${parseInt(`${cornerkickv}`)}`);
         orangedownarrowb /= Math.max(parseInt(`${orangedownarrowb}`) % (Math.max(6, parseInt(`${orangedownarrowb}`))), 4);
      }
       let iconbellM: Array<any> = [823, 774, 993];
         gesture9 /= Math.max(5, libreactu.length);
          let customp = String.fromCharCode(120,95,54,52,95,109,98,117,102,0);
          let time_kA: Array<any> = [113, 565, 78];
          let yellowvideolivej = String.fromCharCode(105,95,56,55,95,115,108,105,99,101,99,111,110,116,101,120,116,0);
         cornerkickv /= Math.max(4, parseInt(`${backwhitev}`));
         customp += `${2 - customp.length}`;
         time_kA = [customp.length % (Math.max(yellowvideolivej.length, 4))];
         yellowvideolivej = `${customp.length | 1}`;
      for (let i = 0; i < 1; i++) {
          let wcopy_jog = 5;
          let libavutilC: Map<any, any> = new Map([[String.fromCharCode(98,100,119,110,95,109,95,53,56,0),432], [String.fromCharCode(118,95,55,52,95,110,117,108,108,112,97,99,107,101,116,0),537]]);
          let basketballdetailsbgC: Map<any, any> = new Map([[String.fromCharCode(104,95,48,95,105,110,115,101,114,116,105,110,103,0),String.fromCharCode(105,95,56,56,95,100,115,112,114,0)], [String.fromCharCode(118,95,53,54,95,100,105,115,112,108,97,121,0),String.fromCharCode(100,95,55,53,95,110,101,105,103,104,98,111,114,0)]]);
         cornerkickv += libavutilC.size;
         wcopy_jog *= wcopy_jog;
         libavutilC = new Map([[`${basketballdetailsbgC.size}`, 1 >> (Math.min(1, Math.abs(wcopy_jog)))]]);
         basketballdetailsbgC = new Map([[`${basketballdetailsbgC.size}`, wcopy_jog % (Math.max(basketballdetailsbgC.size, 9))]]);
      }
      iconpipexpandB = [3 | iconadslink8.size];
   while (iconplayP.includes(turndown0)) {
       let coreV: Array<any> = [String.fromCharCode(109,97,105,110,115,116,97,103,101,95,56,95,50,50,0), String.fromCharCode(115,95,54,55,95,108,101,114,112,102,0), String.fromCharCode(99,97,116,99,104,97,98,108,101,95,106,95,49,53,0)];
       let disconnectedlogoq: Map<any, any> = new Map([[String.fromCharCode(99,104,101,99,107,109,97,114,107,115,95,99,95,55,56,0),8], [String.fromCharCode(98,121,116,101,115,116,114,101,97,109,95,99,95,55,49,0),402], [String.fromCharCode(105,110,115,112,101,99,116,95,98,95,55,57,0),462]]);
       let playlist0 = String.fromCharCode(101,95,51,95,100,118,97,117,100,105,111,0);
         disconnectedlogoq = new Map([[`${disconnectedlogoq.size}`, playlist0.length * disconnectedlogoq.size]]);
      let volumeU = playlist0 == String.fromCharCode(101,56,97,112,103,113,107,111,0);
      do {
          let halffieldimagen: Map<any, any> = new Map([[String.fromCharCode(108,95,51,50,95,104,97,100,97,109,97,114,100,0),279], [String.fromCharCode(101,118,97,108,117,97,116,101,95,52,95,56,0),306]]);
          let singleg = false;
          let mbsplashx = 5;
          let tempnodatai = String.fromCharCode(108,105,98,112,104,111,110,101,110,117,109,98,101,114,95,99,95,49,52,0);
         playlist0 += `${disconnectedlogoq.size}`;
         halffieldimagen.set(`${mbsplashx}`, mbsplashx);
         singleg = halffieldimagen.size >= 88;
         tempnodatai += `${mbsplashx}`;
         if (volumeU) {
            break;
         }
      } while (volumeU && (5 <= coreV.length));
         disconnectedlogoq.set(playlist0, coreV.length % 3);
         disconnectedlogoq.set(playlist0, playlist0.length);
          let libapminsightaE = String.fromCharCode(97,95,55,95,117,109,98,114,101,108,108,97,0);
          let turndownk = String.fromCharCode(112,95,50,55,95,109,101,97,110,105,110,103,102,117,108,0);
         playlist0 += `${playlist0.length >> (Math.min(Math.abs(2), 5))}`;
         libapminsightaE += `${(libapminsightaE == String.fromCharCode(114,0) ? turndownk.length : libapminsightaE.length)}`;
         turndownk = `${turndownk.length}`;
      iconplayP = `${defaultpredictionprofilei.size + iconpipexpandB.length}`;
      break;
   }
      iconpipexpandB.push(2);
   let hejiA = String.fromCharCode(106,53,109,117,104,119,121,51,103,114,0) == airbnbstarselectedR;
   do {
      airbnbstarselectedR = `${connectiony.length - defaultpredictionprofilei.size}`;
      if (hejiA) {
         break;
      }
   } while (hejiA && (4 < (5 + airbnbstarselectedR.length) || (defaultpredictionprofilei.size + airbnbstarselectedR.length) < 5));
      setSortBy('asc');
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
        alignItems: 'center',
      }}
      height='50%'
    >
      <View style={styles.episodeList}>
        <Text
          style={{
            ...styles.btn,
            ...textVariants.header
          }}>
          {`${showEpisodeRangeStart + 1}-${showEpisodeRangeEnd} 集`}
        </Text>
        <TouchableOpacity style={styles.sortBtn} onPress={sort}>
          <View style={{ paddingTop: 4 }}>
            {sortBy === 'asc' ? <SortAscSvg /> : <SortDescSvg />}
          </View>
          <Text
            style={{
              textAlign: 'center',
              ...textVariants.header,
              color: colors.muted,
              fontSize: 15,
            }}>
            顺序
          </Text>
        </TouchableOpacity>
      </View>
      {(displayEpisodes && isVisible) &&
        <ScrollView
          contentContainerStyle={{
            ...styles.episodeList,
            paddingBottom: insets.bottom,
          }}>
          {displayEpisodes?.map((ep, idx) => (
            <TouchableOpacity
              key={`expand-${idx}`}
              onPress={() => {
                onConfirm(ep.nid);
                onCancel();
              }}>
              <View
                style={{
                  backgroundColor:
                    ep.nid === activeEpisode ? colors.primary : colors.search,
                  padding: spacing.s,
                  minWidth: 60,
                  marginRight: 'auto',
                  marginBottom: spacing.s,
                  borderRadius: 8,
                }}>
                <Text
                  numberOfLines={1}
                  style={{
                    fontSize: 13,
                    textAlign: 'center',
                    fontWeight: '500',
                    color:
                      ep.nid === activeEpisode ? colors.selected : colors.muted,
                  }}>
                  {`${ep.name}`}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      }
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
    color: 'white',
    textAlign: 'center',
  },
  btn: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  episodeList: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    justifyContent: 'flex-start',
    paddingLeft: 8,
    marginBottom: 14,
  },
  sortBtn: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
