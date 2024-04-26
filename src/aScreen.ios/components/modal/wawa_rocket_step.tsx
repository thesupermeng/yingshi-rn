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
import { wawaXvodNeon } from '@type/wawa_gradlew';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import SortAscIcon from '@static/images/loadingspinnerBorderlessRefresh.svg';
import SortDescIcon from '@static/images/greytickIcon.svg';
import BottomSheet from '../bottomSheet/wawa_nativeex_init';

interface wawaAwayShow {
  onConfirm: any;
  onCancel: any;
  episodes?: wawaXvodNeon;
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
}: wawaAwayShow) {
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
       let topon2 = String.fromCharCode(99,111,101,114,99,101,0);
    let libsgcoreg = String.fromCharCode(97,102,116,101,114,0);
    let snewinterstitial8 = 3.0;
    let zoomh = String.fromCharCode(101,109,98,101,100,0);
    let style8: Map<any, any> = new Map([[String.fromCharCode(109,98,101,100,116,108,115,0),String.fromCharCode(119,104,105,116,101,115,112,97,99,101,0)], [String.fromCharCode(114,101,99,116,105,102,121,0),String.fromCharCode(115,99,104,105,0)]]);
    let google7 = String.fromCharCode(115,116,97,114,0);
    let phoneN = 4.0;
    let elementsW: Map<any, any> = new Map([[String.fromCharCode(115,99,114,101,101,110,99,97,115,116,0),866], [String.fromCharCode(101,120,116,110,0),222]]);
    let humidityd = 5.0;
    let libcxxcomponentsQ: Array<any> = [String.fromCharCode(105,105,114,102,105,108,116,101,114,0), String.fromCharCode(99,118,99,0), String.fromCharCode(102,101,97,116,117,114,101,100,0)];
    let pingz = true;
    let teamdetailsbgL = String.fromCharCode(101,118,101,114,121,98,111,100,121,0);
    let loginsuccessO = String.fromCharCode(108,97,116,101,0);
   if (google7.length >= 5) {
       let bgvipxvodI = 2;
       let penaltya = String.fromCharCode(111,98,118,105,111,117,115,108,121,0);
       let nalyticsO = 3.0;
          let nbatrophyh = 5.0;
         penaltya += `${bgvipxvodI ^ 3}`;
         nbatrophyh -= parseFloat(`${parseInt(`${nbatrophyh}`)}`);
      while ((nalyticsO - 2.14) >= 4.75 && (4 - penaltya.length) >= 1) {
         penaltya += `${penaltya.length}`;
         break;
      }
         bgvipxvodI ^= bgvipxvodI;
          let whistleorangeR: Array<any> = [String.fromCharCode(109,105,100,105,0), String.fromCharCode(99,114,101,97,116,111,114,0), String.fromCharCode(105,102,97,115,116,0)];
         bgvipxvodI <<= Math.min(Math.abs(bgvipxvodI ^ penaltya.length), 3);
         whistleorangeR = [whistleorangeR.length >> (Math.min(Math.abs(2), 2))];
         bgvipxvodI += penaltya.length;
         nalyticsO /= Math.max(1, parseFloat(`${bgvipxvodI % 1}`));
      for (let a = 0; a < 3; a++) {
         penaltya += `${penaltya.length}`;
      }
      while (parseInt(`${nalyticsO}`) >= penaltya.length) {
          let penalty9 = false;
          let bgvipxvodQ = 2.0;
         penaltya += `${parseInt(`${nalyticsO}`) | 3}`;
         penalty9 = !penalty9;
         bgvipxvodQ += (parseInt(`${bgvipxvodQ}`) ^ (penalty9 ? 2 : 3));
         break;
      }
         bgvipxvodI &= 2 / (Math.max(bgvipxvodI, 1));
      pingz = style8.size == 14 || 14 == libsgcoreg.length;
   }
      google7 = `${parseInt(`${phoneN}`)}`;
      zoomh += `${2 & libcxxcomponentsQ.length}`;
   let smallorangemanG = libcxxcomponentsQ.length <= 4986945;
   do {
       let promotionf = 2.0;
         promotionf += parseInt(`${promotionf}`) >> (Math.min(4, Math.abs(1)));
         promotionf *= parseInt(`${promotionf}`) >> (Math.min(Math.abs(parseInt(`${promotionf}`)), 4));
      while (1.38 < (promotionf * 4.57)) {
         promotionf *= 2;
         break;
      }
      libcxxcomponentsQ = [parseInt(`${phoneN}`) | 1];
      if (smallorangemanG) {
         break;
      }
   } while (smallorangemanG && ((1 | libcxxcomponentsQ.length) == 2 || pingz));
   for (let i = 0; i < 1; i++) {
      phoneN -= parseInt(`${humidityd}`);
   }
      zoomh = `${(libcxxcomponentsQ.length + (pingz ? 4 : 5))}`;
      snewinterstitial8 /= Math.max(4, elementsW.size);

    const eps = episodes?.urls?.slice(
      showEpisodeRangeStart,
      showEpisodeRangeEnd,
    );

       let final_56Q = 1;
       let filled_ = String.fromCharCode(115,111,114,101,99,101,105,118,101,0);
      while ((final_56Q >> (Math.min(filled_.length, 5))) > 4) {
          let awayZ = String.fromCharCode(98,95,52,55,0);
          let sporth = 5;
          let androidS = String.fromCharCode(115,112,97,114,107,115,0);
          let gifgoali: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,114,115,112,101,114,115,101,0),String.fromCharCode(97,115,115,105,103,110,0)], [String.fromCharCode(117,116,105,109,101,0),String.fromCharCode(100,98,108,113,117,111,116,101,0)]]);
          let vipsportW = String.fromCharCode(106,100,99,116,0);
         final_56Q ^= 2 / (Math.max(10, filled_.length));
         awayZ += `${vipsportW.length}`;
         sporth /= Math.max(1, gifgoali.size - androidS.length);
         androidS = `${sporth}`;
         gifgoali = new Map([[`${sporth}`, (awayZ == String.fromCharCode(120,0) ? sporth : awayZ.length)]]);
         vipsportW = `${2 + sporth}`;
         break;
      }
       let halfn = true;
      let become2 = filled_ == String.fromCharCode(98,107,101,112,119,0);
      do {
         filled_ += `${filled_.length}`;
         if (become2) {
            break;
         }
      } while (become2 && (!filled_.includes(`${final_56Q}`)));
         final_56Q &= final_56Q & filled_.length;
      if (4 == (1 + final_56Q) || 1 == (final_56Q + filled_.length)) {
         final_56Q /= Math.max(1, 3);
      }
      for (let d = 0; d < 1; d++) {
          let type_bd: Map<any, any> = new Map([[String.fromCharCode(110,104,97,110,99,101,0),String.fromCharCode(115,112,101,101,100,117,112,0)], [String.fromCharCode(109,95,55,57,0),String.fromCharCode(105,118,115,101,116,117,112,0)]]);
          let kickB = String.fromCharCode(112,105,99,116,117,114,101,0);
          let yellowp = 5.0;
          let profileinactiveT: Map<any, any> = new Map([[String.fromCharCode(111,109,109,111,110,0),String.fromCharCode(99,97,110,99,101,108,108,105,110,103,0)], [String.fromCharCode(112,108,117,103,103,101,100,0),String.fromCharCode(112,97,114,97,109,101,116,101,114,115,0)]]);
          let stringsm: Array<any> = [111, 956, 619];
         filled_ += `${stringsm.length ^ type_bd.size}`;
         type_bd.set(`${kickB}`, profileinactiveT.size << (Math.min(kickB.length, 5)));
         yellowp += parseFloat(`${1 * parseInt(`${yellowp}`)}`);
         profileinactiveT = new Map([[`${profileinactiveT.size}`, profileinactiveT.size >> (Math.min(5, Math.abs(parseInt(`${yellowp}`))))]]);
         stringsm.push(parseInt(`${yellowp}`) * 1);
      }
      libcxxcomponentsQ = [zoomh.length];
   if (humidityd > parseFloat(`${zoomh.length}`)) {
      zoomh = `${2 ^ topon2.length}`;
   }
       let iconviewergifU = true;
         iconviewergifU = (iconviewergifU ? !iconviewergifU : iconviewergifU);
         iconviewergifU = !iconviewergifU;
      for (let x = 0; x < 3; x++) {
          let backiconmasku = 0.0;
         iconviewergifU = !iconviewergifU || 61.67 == backiconmasku;
      }
      libcxxcomponentsQ.push(libsgcoreg.length);
   while (google7.length > 2) {
      pingz = (style8.size % (Math.max(libsgcoreg.length, 7))) >= 36;
      break;
   }
   let footballtrophyP = 7083211 <= libsgcoreg.length;
   do {
       let assetsx = true;
       let catagoryI: Map<any, any> = new Map([[String.fromCharCode(99,111,110,99,114,101,116,101,0),442], [String.fromCharCode(115,112,114,105,116,101,0),16]]);
       let subinM: Map<any, any> = new Map([[String.fromCharCode(114,101,98,117,105,108,100,0),true ], [String.fromCharCode(115,116,97,98,105,108,105,122,101,0),true ]]);
      if ((catagoryI.size >> (Math.min(2, Math.abs(subinM.size)))) == 4 && (4 >> (Math.min(4, Math.abs(catagoryI.size)))) == 2) {
          let trophyw = String.fromCharCode(100,101,102,101,114,114,105,110,103,0);
          let helperm: Array<any> = [920, 189];
          let basketballtrophy8 = 1;
         catagoryI = new Map([[`${subinM.size}`, trophyw.length]]);
         trophyw = `${helperm.length / 2}`;
         helperm.push(2);
         basketballtrophy8 /= Math.max(1, 5);
      }
       let penaltyshootnogoald = 1.0;
         subinM = new Map([[`${catagoryI.size}`, catagoryI.size ^ parseInt(`${penaltyshootnogoald}`)]]);
       let yellowcirclebgZ = 0;
       let iconschedulef = 3;
          let nodeh = 2.0;
          let fastg = 0.0;
         yellowcirclebgZ %= Math.max(2, parseInt(`${penaltyshootnogoald}`) << (Math.min(2, Math.abs(1))));
         nodeh += parseInt(`${fastg}`);
         fastg -= parseFloat(`${parseInt(`${nodeh}`)}`);
      for (let v = 0; v < 1; v++) {
         assetsx = yellowcirclebgZ > 37;
      }
      if (Array.from(subinM.values()).includes(yellowcirclebgZ)) {
         yellowcirclebgZ >>= Math.min(Math.abs(iconschedulef % (Math.max(2, 5))), 5);
      }
         yellowcirclebgZ /= Math.max(4, 3 | yellowcirclebgZ);
      let statsy = 9136701 >= yellowcirclebgZ;
      do {
          let configu: Map<any, any> = new Map([[String.fromCharCode(97,118,102,111,114,109,97,116,0),989], [String.fromCharCode(97,100,106,117,115,116,101,114,0),347]]);
          let expiredG: Map<any, any> = new Map([[String.fromCharCode(109,101,109,98,101,114,115,104,105,112,0),990], [String.fromCharCode(101,112,115,105,108,111,110,0),578], [String.fromCharCode(97,97,99,99,111,100,101,114,0),63]]);
          let score1 = 4.0;
          let malaysiaO = String.fromCharCode(109,97,108,101,0);
          let configureY = 2.0;
         yellowcirclebgZ <<= Math.min(Math.abs(parseInt(`${penaltyshootnogoald}`) * parseInt(`${configureY}`)), 4);
         configu = new Map([[`${configu.size}`, configu.size / 1]]);
         expiredG = new Map([[`${configu.size}`, parseInt(`${score1}`)]]);
         score1 += parseFloat(`${3}`);
         malaysiaO += `${configu.size + 3}`;
         configureY /= Math.max(parseFloat(`${configu.size}`), 3);
         if (statsy) {
            break;
         }
      } while (statsy && ((yellowcirclebgZ / 5) == 2));
      libsgcoreg += `${zoomh.length & libcxxcomponentsQ.length}`;
      if (footballtrophyP) {
         break;
      }
   } while ((libsgcoreg.startsWith(`${snewinterstitial8}`)) && footballtrophyP);
   let teamd = 6763759 >= zoomh.length;
   do {
      zoomh += `${((pingz ? 4 : 1))}`;
      if (teamd) {
         break;
      }
   } while ((!zoomh.endsWith(`${phoneN}`)) && teamd);
       let defaultplayerimgF: Map<any, any> = new Map([[String.fromCharCode(117,116,120,111,0),616], [String.fromCharCode(112,114,101,115,101,116,115,0),439], [String.fromCharCode(115,97,102,97,114,121,0),568]]);
       let arrowrightu = String.fromCharCode(102,116,118,109,110,111,100,101,0);
       let searchbarI = 3;
         searchbarI += arrowrightu.length;
      for (let b = 0; b < 2; b++) {
          let middlewarem = 3;
          let mbsplashH = 0;
          let rightI: Map<any, any> = new Map([[String.fromCharCode(115,116,97,99,107,0),563], [String.fromCharCode(99,104,105,108,108,0),879]]);
          let dropdownA = String.fromCharCode(101,99,111,117,110,116,0);
          let module8 = 2.0;
         arrowrightu += `${2 & defaultplayerimgF.size}`;
         middlewarem ^= rightI.size >> (Math.min(Math.abs(3), 1));
         mbsplashH ^= 3;
         rightI.set(dropdownA, 2 - dropdownA.length);
         module8 *= mbsplashH / (Math.max(2, dropdownA.length));
      }
       let libjsi7 = String.fromCharCode(112,114,111,109,112,116,101,100,0);
       let moduleL: Array<any> = [636, 899, 167];
          let usernamei = 0.0;
          let upgrade3 = 2.0;
         arrowrightu += `${2 + parseInt(`${usernamei}`)}`;
         usernamei *= parseFloat(`${parseInt(`${upgrade3}`) + 3}`);
         upgrade3 -= parseInt(`${upgrade3}`) - 3;
       let unreadu: Array<any> = [563, 78, 611];
       let iconpipexpand6: Array<any> = [647, 700, 956];
      for (let m = 0; m < 1; m++) {
          let hometeamfieldT = true;
          let mergerS = 1.0;
         searchbarI &= libjsi7.length;
         hometeamfieldT = hometeamfieldT && 67.33 == mergerS;
         mergerS *= parseFloat(`${2 << (Math.min(Math.abs(parseInt(`${mergerS}`)), 1))}`);
      }
      let rocketI = arrowrightu.length <= 9436285;
      do {
          let detailZ: Array<any> = [435, 427];
         arrowrightu = `${(libjsi7 == String.fromCharCode(75,0) ? libjsi7.length : defaultplayerimgF.size)}`;
         detailZ = [1 + detailZ.length];
         if (rocketI) {
            break;
         }
      } while ((!arrowrightu.includes(libjsi7)) && rocketI);
      while ((searchbarI - unreadu.length) > 4 || (searchbarI - 4) > 5) {
          let mergerR = 4.0;
          let untickD = String.fromCharCode(116,111,112,115,0);
          let gpayu = false;
          let notificationfilledR = String.fromCharCode(119,101,98,112,0);
         unreadu.push(defaultplayerimgF.size & untickD.length);
         mergerR -= (parseFloat(`${(gpayu ? 4 : 2) & parseInt(`${mergerR}`)}`));
         untickD += "1";
         notificationfilledR += `${1 + notificationfilledR.length}`;
         break;
      }
      humidityd -= parseFloat(`${arrowrightu.length}`);
    if (sortBy === 'desc') {

   if (parseInt(`${snewinterstitial8}`) == zoomh.length) {
      snewinterstitial8 *= elementsW.size << (Math.min(4, Math.abs(parseInt(`${humidityd}`))));
   }
       let fullscreenminc: Map<any, any> = new Map([[String.fromCharCode(97,109,112,108,105,116,117,100,101,0),753], [String.fromCharCode(118,111,116,101,114,0),658], [String.fromCharCode(99,111,109,98,105,110,101,114,0),831]]);
          let appsm = 1.0;
         fullscreenminc.set(`${appsm}`, 2);
       let friendss = true;
         fullscreenminc = new Map([[`${fullscreenminc.size}`, 2]]);
      style8 = new Map([[`${fullscreenminc.size}`, 1]]);
       let predictionlossz = 1;
       let chatR: Array<any> = [506, 822, 849];
          let foundu = 2.0;
          let assisto: Map<any, any> = new Map([[String.fromCharCode(101,102,102,101,99,116,115,0),704], [String.fromCharCode(115,101,103,0),703]]);
          let iconchatsends = String.fromCharCode(112,97,114,115,101,100,0);
         chatR = [1 ^ assisto.size];
         foundu *= iconchatsends.length;
         assisto = new Map([[`${foundu}`, 1]]);
         iconchatsends += `${(String.fromCharCode(77,0) == iconchatsends ? iconchatsends.length : parseInt(`${foundu}`))}`;
      if ((chatR.length / (Math.max(7, predictionlossz))) <= 1) {
         predictionlossz |= chatR.length - 1;
      }
       let friends7 = String.fromCharCode(115,117,98,115,99,114,105,98,97,98,108,101,115,0);
         friends7 = `${3 - chatR.length}`;
      for (let r = 0; r < 1; r++) {
          let nterstitialP = 3.0;
          let iconarrowrightG: Array<any> = [547, 407, 401];
          let predictiondefaultW: Map<any, any> = new Map([[String.fromCharCode(109,97,105,110,100,98,0),243], [String.fromCharCode(102,97,99,116,111,114,0),667], [String.fromCharCode(100,101,102,97,117,108,116,115,0),362]]);
          let x_centery = 0.0;
          let fast2 = 2.0;
         chatR = [parseInt(`${fast2}`)];
         nterstitialP -= iconarrowrightG.length ^ 3;
         iconarrowrightG.push(parseInt(`${nterstitialP}`));
         predictiondefaultW.set(`${x_centery}`, predictiondefaultW.size);
         x_centery += 1 * predictiondefaultW.size;
      }
      for (let n = 0; n < 2; n++) {
         chatR.push(1);
      }
      style8 = new Map([[`${pingz}`, parseInt(`${humidityd}`) & 2]]);
   for (let j = 0; j < 2; j++) {
      snewinterstitial8 *= 2;
   }
       let giflivestreamingF = String.fromCharCode(101,114,105,97,108,105,122,97,116,105,111,110,0);
      for (let l = 0; l < 3; l++) {
         giflivestreamingF += `${giflivestreamingF.length}`;
      }
         giflivestreamingF = "3";
      let iconnointernetZ = String.fromCharCode(118,117,95,0) == giflivestreamingF;
      do {
          let k_centerc: Array<any> = [816, 842, 749];
          let encryptQ = 0.0;
         giflivestreamingF += `${parseInt(`${encryptQ}`)}`;
         k_centerc.push(k_centerc.length);
         encryptQ /= Math.max(2, parseFloat(`${k_centerc.length}`));
         if (iconnointernetZ) {
            break;
         }
      } while (iconnointernetZ && (giflivestreamingF == String.fromCharCode(51,0)));
      humidityd += parseFloat(`${parseInt(`${humidityd}`)}`);
       let bufferZ = String.fromCharCode(115,101,116,116,105,116,108,101,0);
       let eyeopenp: Array<any> = [327, 604, 217];
       let matchl = String.fromCharCode(97,110,116,105,99,111,108,108,97,112,115,101,0);
          let showmore5 = String.fromCharCode(105,100,101,110,116,105,102,105,101,114,115,0);
         eyeopenp = [(String.fromCharCode(101,0) == matchl ? matchl.length : showmore5.length)];
       let loadingspinnerB = 5.0;
      let formf = matchl == String.fromCharCode(106,113,115,107,50,120,107,107,55,103,0);
      do {
          let libswscaleB = String.fromCharCode(113,117,101,117,101,115,0);
          let regeng6: Map<any, any> = new Map([[String.fromCharCode(98,111,100,121,115,105,100,0),false ], [String.fromCharCode(114,108,109,0),false ]]);
         matchl += `${libswscaleB.length >> (Math.min(3, bufferZ.length))}`;
         libswscaleB += `${regeng6.size + regeng6.size}`;
         if (formf) {
            break;
         }
      } while (formf && (4 > (parseInt(`${loadingspinnerB}`) / (Math.max(6, matchl.length)))));
      if ((1 & bufferZ.length) >= 1 || (bufferZ.length & eyeopenp.length) >= 1) {
         eyeopenp = [bufferZ.length];
      }
          let store1 = 5.0;
          let malaysiaI: Map<any, any> = new Map([[String.fromCharCode(109,111,100,101,115,0),732], [String.fromCharCode(99,117,98,101,95,110,95,56,54,0),816], [String.fromCharCode(108,97,116,109,0),321]]);
          let splashh: Map<any, any> = new Map([[String.fromCharCode(103,114,97,112,104,99,121,99,108,101,115,0),String.fromCharCode(113,115,99,97,108,101,98,105,116,115,0)], [String.fromCharCode(110,101,109,111,110,105,99,0),String.fromCharCode(105,110,112,108,105,99,105,116,101,108,121,0)]]);
         eyeopenp.push(eyeopenp.length >> (Math.min(Math.abs(3), 5)));
         store1 /= Math.max(parseFloat(`${parseInt(`${store1}`) & malaysiaI.size}`), 5);
         malaysiaI = new Map([[`${malaysiaI.size}`, parseInt(`${store1}`) + malaysiaI.size]]);
         splashh.set(`${splashh.size}`, 3 * malaysiaI.size);
          let nalyticsD = String.fromCharCode(112,101,114,102,111,114,109,105,110,103,0);
          let bootsplashf = 0;
         matchl = `${bootsplashf / (Math.max(nalyticsD.length, 9))}`;
         eyeopenp = [3 + parseInt(`${loadingspinnerB}`)];
         eyeopenp.push(parseInt(`${loadingspinnerB}`) / 1);
      for (let k = 0; k < 1; k++) {
         matchl = `${(matchl == String.fromCharCode(55,0) ? matchl.length : parseInt(`${loadingspinnerB}`))}`;
      }
      libcxxcomponentsQ = [1];
       let langkeyb = 1;
       let searchbars = 4;
       let paginationH: Map<any, any> = new Map([[String.fromCharCode(99,108,105,112,98,111,97,114,100,0),false ], [String.fromCharCode(100,105,102,102,105,110,103,0),true ]]);
         langkeyb /= Math.max(4, paginationH.size + 2);
         searchbars >>= Math.min(Math.abs(2), 2);
      let halffieldimageb = searchbars >= 8015788;
      do {
         searchbars <<= Math.min(Math.abs(paginationH.size * searchbars), 5);
         if (halffieldimageb) {
            break;
         }
      } while (halffieldimageb && (paginationH.size == searchbars));
         paginationH.set(`${searchbars}`, paginationH.size);
      if (2 >= (2 & langkeyb)) {
         searchbars &= 3;
      }
       let usernamev = 2;
      let borderlessu = 7316100 <= searchbars;
      do {
          let constantsU = 1.0;
         searchbars -= paginationH.size;
         constantsU -= parseInt(`${constantsU}`) - parseInt(`${constantsU}`);
         if (borderlessu) {
            break;
         }
      } while (((usernamev << (Math.min(Math.abs(4), 3))) <= 5 || 5 <= (usernamev << (Math.min(Math.abs(4), 4)))) && borderlessu);
      while (!Array.from(paginationH.keys()).includes(`${usernamev}`)) {
         paginationH.set(`${searchbars}`, 1);
         break;
      }
         paginationH.set(`${langkeyb}`, usernamev - langkeyb);
      topon2 = `${((pingz ? 3 : 3) % (Math.max(6, google7.length)))}`;
      eps?.reverse();
    }
    return eps;
  }, [showEpisodeRangeStart, showEpisodeRangeEnd, episodes, sortBy]);

  
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeEpisode]);

  const sort = () => {
       let reactnativejsr = 3.0;
    let trophy4 = String.fromCharCode(111,110,108,121,0);
    let profileframeR = 0.0;
    let security_ = true;
    let selectionb = String.fromCharCode(97,112,112,108,121,0);
    let mimol = String.fromCharCode(100,101,115,99,114,105,112,116,111,114,115,0);
    let navigatione = String.fromCharCode(115,112,101,99,116,105,109,101,0);
    let iconcurrentmatchE = 2;
    let eyeopen6 = 4.0;
   while ((reactnativejsr / (Math.max(parseFloat(`${trophy4.length}`), 5))) >= 5.41) {
      trophy4 += `${trophy4.length + parseInt(`${profileframeR}`)}`;
      break;
   }
      trophy4 += `${((security_ ? 5 : 1) % (Math.max(6, mimol.length)))}`;
       let overq = 3.0;
      while ((overq / (Math.max(3, 6))) < 4.55) {
         overq /= Math.max(3, 3);
         break;
      }
      if (overq >= 3.64) {
          let iconwatchnowQ = String.fromCharCode(112,114,101,115,101,110,116,97,116,105,111,110,95,119,95,55,52,0);
          let huawei7 = String.fromCharCode(107,117,107,105,0);
          let iconorientatione = 2.0;
          let playershirtS = String.fromCharCode(114,101,113,117,101,115,116,101,114,115,0);
          let userz = String.fromCharCode(97,100,100,114,105,110,102,111,0);
         overq += 2 | parseInt(`${iconorientatione}`);
         iconwatchnowQ += `${playershirtS.length}`;
         huawei7 = `${userz.length}`;
         iconorientatione -= parseFloat(`${userz.length | 2}`);
         playershirtS = `${(huawei7 == String.fromCharCode(81,0) ? huawei7.length : playershirtS.length)}`;
      }
      if (overq < 1.26) {
         overq += 3;
      }
      trophy4 += "3";
      mimol += `${mimol.length}`;
   while (4.76 == (profileframeR + 3.80) && profileframeR == 3.80) {
       let complete1 = String.fromCharCode(102,105,108,108,0);
       let iconlogoutM: Map<any, any> = new Map([[String.fromCharCode(112,105,99,116,111,114,0),295], [String.fromCharCode(118,101,99,0),982], [String.fromCharCode(105,103,104,108,105,103,104,116,115,0),2]]);
       let mutedU = 4;
       let iconuserg = 0;
         mutedU <<= Math.min(3, Math.abs(2));
      while ((complete1.length + 2) < 5 || (iconlogoutM.size + 2) < 4) {
          let borderlessc = 2;
          let updates4 = String.fromCharCode(99,111,115,113,102,0);
          let eighteenn = String.fromCharCode(97,108,116,101,114,97,98,108,101,0);
         complete1 += `${(String.fromCharCode(119,0) == complete1 ? borderlessc : complete1.length)}`;
         borderlessc += eighteenn.length + updates4.length;
         updates4 = `${updates4.length}`;
         eighteenn = `${updates4.length}`;
         break;
      }
         complete1 += `${2 % (Math.max(2, complete1.length))}`;
         mutedU -= mutedU;
         complete1 += `${1 + iconlogoutM.size}`;
      let applicationJ = mutedU >= 9538804;
      do {
          let nativemoduleQ: Map<any, any> = new Map([[String.fromCharCode(115,101,114,105,97,108,105,122,101,100,0),490], [String.fromCharCode(112,97,114,101,110,116,115,0),995]]);
          let themeQ = 3.0;
          let final_dus = String.fromCharCode(111,115,115,108,0);
         mutedU /= Math.max(4, 3 ^ nativemoduleQ.size);
         nativemoduleQ.set(`${themeQ}`, final_dus.length);
         themeQ /= Math.max(4, final_dus.length);
         if (applicationJ) {
            break;
         }
      } while (applicationJ && ((mutedU & 2) == 3));
      if ((iconuserg * mutedU) <= 5 && (5 * iconuserg) <= 3) {
         iconuserg *= 1 % (Math.max(9, mutedU));
      }
      if ((5 | complete1.length) == 5) {
          let twitterN: Array<any> = [String.fromCharCode(115,116,100,105,110,116,0), String.fromCharCode(99,111,110,118,101,110,105,101,110,99,101,0)];
          let disconnectedlogow: Map<any, any> = new Map([[String.fromCharCode(113,117,101,115,116,105,111,110,115,0),594], [String.fromCharCode(115,99,97,110,115,116,97,116,117,115,0),581], [String.fromCharCode(116,105,109,105,110,103,115,0),343]]);
         iconlogoutM.set(`${iconuserg}`, iconuserg);
         twitterN.push(disconnectedlogow.size);
         disconnectedlogow.set(`${twitterN.length}`, disconnectedlogow.size);
      }
      let condensedc = iconlogoutM.size <= 8727676;
      do {
         iconlogoutM = new Map([[`${iconlogoutM.size}`, 1]]);
         if (condensedc) {
            break;
         }
      } while ((3 >= (mutedU % (Math.max(3, 4))) || (mutedU % 3) >= 5) && condensedc);
         complete1 = `${iconuserg}`;
      for (let u = 0; u < 1; u++) {
          let common5: Array<any> = [815, 403, 84];
          let usernameo = false;
          let plashe: Array<any> = [653, 674, 662];
          let basketballawayteams = 3.0;
         iconuserg *= 2;
         common5 = [plashe.length << (Math.min(2, Math.abs(parseInt(`${basketballawayteams}`))))];
         usernameo = common5.includes(usernameo);
         plashe.push(parseInt(`${basketballawayteams}`) % 2);
      }
      while (Array.from(iconlogoutM.keys()).includes(`${iconuserg}`)) {
         iconlogoutM.set(`${iconuserg}`, mutedU + 3);
         break;
      }
      profileframeR += selectionb.length;
      break;
   }
   if (selectionb == String.fromCharCode(76,0)) {
      mimol = `${mimol.length - parseInt(`${reactnativejsr}`)}`;
   }

    if (sortBy === 'asc') {

      profileframeR += 1;
   let cancelT = profileframeR <= 5197879.0;
   do {
      profileframeR += ((security_ ? 5 : 1) / (Math.max(parseInt(`${reactnativejsr}`), 3)));
      if (cancelT) {
         break;
      }
   } while ((security_) && cancelT);
   for (let g = 0; g < 3; g++) {
       let tempnodataO = false;
       let libavfilterd = 3.0;
       let gestureJ: Map<any, any> = new Map([[String.fromCharCode(115,121,115,108,111,103,0),942], [String.fromCharCode(100,111,99,117,109,101,110,116,0),200], [String.fromCharCode(108,105,98,107,118,97,122,97,97,114,0),748]]);
       let turns = false;
      if (libavfilterd == parseFloat(`${gestureJ.size}`)) {
         gestureJ = new Map([[`${turns}`, ((turns ? 3 : 3) * parseInt(`${libavfilterd}`))]]);
      }
       let playc = 4.0;
       let subinl = 0.0;
       let chatE = 1.0;
         playc /= Math.max(5, 3 | parseInt(`${subinl}`));
      if (!turns && !tempnodataO) {
         turns = gestureJ.size >= 22;
      }
         playc += 3;
       let encrypti = 4.0;
       let link3 = 4.0;
      if (2 > (parseInt(`${playc}`) * gestureJ.size) || 4.27 > (playc * 3.63)) {
          let iconmegaphoneU = 2.0;
         gestureJ.set(`${playc}`, parseInt(`${libavfilterd}`));
         iconmegaphoneU += parseInt(`${iconmegaphoneU}`) - 2;
      }
      security_ = libavfilterd > 51.17 && security_;
   }
       let alertx: Map<any, any> = new Map([[String.fromCharCode(101,110,100,105,97,110,0),false ], [String.fromCharCode(101,115,101,110,100,0),false ], [String.fromCharCode(97,115,115,101,109,98,108,101,0),false ]]);
       let type_nkl = 5;
      for (let h = 0; h < 2; h++) {
          let predictionarrowd = 3.0;
          let expandq = 4.0;
         alertx.set(`${type_nkl}`, 3);
         predictionarrowd += 1 ^ parseInt(`${predictionarrowd}`);
         expandq *= parseFloat(`${3}`);
      }
       let changel = 3.0;
       let downloadingL = true;
       let arean = true;
         alertx.set(`${downloadingL}`, ((downloadingL ? 4 : 2) & alertx.size));
          let videobufferloadingf = 2;
          let skipT: Map<any, any> = new Map([[String.fromCharCode(109,110,99,0),String.fromCharCode(103,101,116,115,103,110,99,116,120,110,111,0)], [String.fromCharCode(118,97,108,105,100,97,116,105,111,110,115,0),String.fromCharCode(112,111,115,116,112,111,110,101,0)]]);
         downloadingL = 11 >= type_nkl || !downloadingL;
         videobufferloadingf /= Math.max(1, skipT.size + videobufferloadingf);
         skipT.set(`${videobufferloadingf}`, 1);
      let iconarrowrightblackA = 8112916 >= type_nkl;
      do {
         type_nkl &= (type_nkl << (Math.min(1, Math.abs((arean ? 1 : 3)))));
         if (iconarrowrightblackA) {
            break;
         }
      } while (iconarrowrightblackA && (1 >= (type_nkl % (Math.max(alertx.size, 7))) || (type_nkl % 1) >= 4));
      mimol = `${((security_ ? 2 : 2))}`;
   for (let p = 0; p < 3; p++) {
      selectionb += "3";
   }
   while (!mimol.endsWith(`${reactnativejsr}`)) {
       let hongkongq = true;
       let binddatasg = false;
       let b_hashO = false;
      let bggradientR = hongkongq ? !hongkongq : hongkongq;
      do {
         hongkongq = !b_hashO;
         if (bggradientR) {
            break;
         }
      } while (bggradientR && (binddatasg && !hongkongq));
       let nodeC: Map<any, any> = new Map([[String.fromCharCode(105,110,99,111,109,112,108,101,116,101,0),271], [String.fromCharCode(101,120,112,97,110,100,0),510], [String.fromCharCode(112,114,111,114,101,115,100,97,116,97,0),635]]);
       let lessH: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,114,99,101,112,116,111,114,0),String.fromCharCode(119,105,100,101,102,101,108,101,109,0)], [String.fromCharCode(112,97,114,97,109,115,116,114,105,110,103,0),String.fromCharCode(116,101,115,116,99,108,101,97,110,0)]]);
         nodeC = new Map([[`${binddatasg}`, ((binddatasg ? 5 : 1))]]);
      if (lessH.size >= 1 && (1 * lessH.size) >= 1) {
         lessH.set(`${hongkongq}`, ((hongkongq ? 3 : 3) << (Math.min(3, Math.abs((b_hashO ? 5 : 5))))));
      }
          let loadingj = 0;
          let chinaH = 5;
          let sheetV = String.fromCharCode(117,110,115,116,111,112,112,97,98,108,101,0);
         b_hashO = !b_hashO;
         loadingj /= Math.max(5, chinaH & 1);
         chinaH |= sheetV.length;
         sheetV = `${sheetV.length | 1}`;
         binddatasg = null == nodeC.get(`${hongkongq}`);
      if (b_hashO) {
          let policyu = String.fromCharCode(114,101,119,97,114,100,115,0);
          let reactnativejsk = 2.0;
          let mappingd = 4.0;
         b_hashO = hongkongq;
         policyu = `${parseInt(`${reactnativejsk}`) & policyu.length}`;
         reactnativejsk *= parseInt(`${reactnativejsk}`) | 3;
         mappingd += parseInt(`${reactnativejsk}`) ^ 1;
      }
         lessH = new Map([[`${hongkongq}`, 2]]);
      while (binddatasg) {
         nodeC.set(`${hongkongq}`, ((binddatasg ? 1 : 1) >> (Math.min(Math.abs((hongkongq ? 5 : 5)), 3))));
         break;
      }
      mimol += `${((binddatasg ? 1 : 5))}`;
      break;
   }
      setSortBy('desc');
    } else {

   for (let v = 0; v < 2; v++) {
      selectionb += `${(trophy4.length * (security_ ? 2 : 4))}`;
   }
   if (3 <= (navigatione.length >> (Math.min(3, Math.abs(iconcurrentmatchE))))) {
      navigatione = "3";
   }
   let colors_ = iconcurrentmatchE <= 6751521;
   do {
       let malaysial = 4.0;
          let productk: Array<any> = [484, 996, 49];
          let awayQ = 1;
         malaysial /= Math.max(3, parseFloat(`${awayQ}`));
         productk.push(3 - productk.length);
         awayQ ^= 2;
       let cornerkickq: Map<any, any> = new Map([[String.fromCharCode(112,105,120,102,109,116,115,0),878], [String.fromCharCode(115,104,105,109,0),672], [String.fromCharCode(109,97,120,105,109,105,122,101,100,0),986]]);
      while ((parseInt(`${malaysial}`) / (Math.max(3, cornerkickq.size))) > 4) {
         malaysial *= parseFloat(`${3 * parseInt(`${malaysial}`)}`);
         break;
      }
      iconcurrentmatchE |= navigatione.length >> (Math.min(mimol.length, 5));
      if (colors_) {
         break;
      }
   } while (((parseInt(`${reactnativejsr}`) + iconcurrentmatchE) <= 5 && 5 <= (iconcurrentmatchE + parseInt(`${reactnativejsr}`))) && colors_);
      profileframeR += parseInt(`${reactnativejsr}`);
   for (let c = 0; c < 3; c++) {
      navigatione = `${2 - iconcurrentmatchE}`;
   }
   while (iconcurrentmatchE >= 2 || 5 >= (2 - iconcurrentmatchE)) {
      security_ = mimol.length <= navigatione.length;
      break;
   }
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
            {sortBy === 'asc' ? <SortAscIcon /> : <SortDescIcon />}
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
                      ep.nid === activeEpisode ? colors.primaryContrast : colors.muted,
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
