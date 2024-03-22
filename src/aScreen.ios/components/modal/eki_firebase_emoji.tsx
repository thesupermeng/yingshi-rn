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
import {useTheme} from '@react-navigation/native';
import {IDelegate} from '@type/wpk_long';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import SortAscIcon from '@static/images/signinupConstants.svg';
import SortDescIcon from '@static/images/aboutRegister_j9Singapore.svg';
import BottomSheet from '../bottomSheet/uc_single';

interface XFillButton {
  onConfirm: any;
  onCancel: any;
  episodes?: IDelegate;
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
}: XFillButton) {
  const {colors, textVariants, spacing} = useTheme();
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
       let banner0 = String.fromCharCode(105,95,50,49,95,107,102,119,114,105,116,101,0);
    let indexx = 0.0;
    let vietnama = String.fromCharCode(104,95,49,49,95,97,115,115,111,99,105,97,116,101,100,0);
    let navigatione = 5.0;
    let fastforwardB = 1.0;
    let gpayH = String.fromCharCode(102,102,118,108,95,55,95,50,48,0);
    let tempa = 4.0;
    let leftt = 0.0;
    let change4 = 0.0;
    let currentV = String.fromCharCode(115,121,110,99,97,98,108,101,95,122,95,51,53,0);
    let hooksn = String.fromCharCode(118,95,57,52,95,116,119,111,112,97,115,115,0);
    let reminder3 = String.fromCharCode(102,114,97,112,115,95,98,95,54,53,0);
    let internet0: Array<any> = [713, 176, 135];
    let spinnerg = String.fromCharCode(120,95,56,53,95,99,111,117,110,116,114,105,101,115,0);
    let minivodc = 5.0;
   for (let z = 0; z < 1; z++) {
       let delegate_vfx: Map<any, any> = new Map([[String.fromCharCode(98,97,116,99,104,95,107,95,56,55,0),383], [String.fromCharCode(111,95,55,49,95,115,97,116,117,114,97,116,105,111,110,0),151], [String.fromCharCode(109,95,54,50,95,102,108,111,99,107,0),825]]);
       let filterN = String.fromCharCode(107,95,50,57,95,116,111,109,111,114,114,111,119,0);
       let bing4: Array<any> = [719, 78, 160];
       let vignetteu = String.fromCharCode(114,101,112,108,97,121,101,114,95,114,95,52,54,0);
       let fastforwardb = 3.0;
          let navigationf: Map<any, any> = new Map([[String.fromCharCode(104,109,97,99,105,100,95,103,95,55,57,0),327], [String.fromCharCode(112,105,99,107,105,110,116,101,114,95,102,95,55,53,0),211]]);
         filterN = `${(String.fromCharCode(104,0) == filterN ? filterN.length : parseInt(`${fastforwardb}`))}`;
         navigationf.set(`${navigationf.size}`, navigationf.size);
          let blacklistg = 5.0;
          let gesturesW = 1.0;
          let homek = 5.0;
         delegate_vfx = new Map([[`${blacklistg}`, vignetteu.length]]);
         blacklistg -= parseInt(`${gesturesW}`) & 1;
         gesturesW /= Math.max(2, parseFloat(`${parseInt(`${gesturesW}`) - parseInt(`${homek}`)}`));
         homek /= Math.max(3 * parseInt(`${gesturesW}`), 4);
         filterN = `${bing4.length & filterN.length}`;
      if (vignetteu != filterN) {
         filterN += `${1 << (Math.min(1, filterN.length))}`;
      }
         fastforwardb *= parseFloat(`${parseInt(`${fastforwardb}`) | 1}`);
       let team1 = 4.0;
      for (let l = 0; l < 2; l++) {
         vignetteu += `${vignetteu.length ^ parseInt(`${fastforwardb}`)}`;
      }
      if ((delegate_vfx.size << (Math.min(filterN.length, 4))) <= 4 && 1 <= (4 << (Math.min(5, Math.abs(delegate_vfx.size))))) {
         filterN = `${delegate_vfx.size & vignetteu.length}`;
      }
          let tempC = 1.0;
         bing4 = [(String.fromCharCode(71,0) == filterN ? bing4.length : filterN.length)];
         tempC -= parseFloat(`${parseInt(`${tempC}`)}`);
         vignetteu += `${delegate_vfx.size}`;
         fastforwardb *= parseFloat(`${parseInt(`${fastforwardb}`)}`);
         delegate_vfx.set(vignetteu, vignetteu.length ^ parseInt(`${fastforwardb}`));
         vignetteu = `${parseInt(`${fastforwardb}`)}`;
         filterN = `${parseInt(`${fastforwardb}`) + parseInt(`${team1}`)}`;
          let moviesX = String.fromCharCode(116,101,120,116,117,114,101,100,115,112,95,51,95,54,48,0);
         team1 -= 2 / (Math.max(5, bing4.length));
         moviesX = `${moviesX.length}`;
      currentV = `${parseInt(`${tempa}`) % (Math.max(2, 6))}`;
   }
      tempa *= (parseFloat(`${String.fromCharCode(101,0) == hooksn ? hooksn.length : parseInt(`${navigatione}`)}`));
   if ((4.16 - fastforwardB) <= 5.95) {
       let typingS = true;
       let playS = 4.0;
       let privacyI = String.fromCharCode(108,95,54,95,115,99,114,101,101,110,115,0);
       let history3 = String.fromCharCode(103,95,54,48,95,100,105,115,97,98,108,101,114,0);
       let description_8g = String.fromCharCode(106,95,50,95,116,109,112,108,0);
      let n_countL = description_8g == String.fromCharCode(99,49,108,98,120,116,0);
      do {
         description_8g = `${description_8g.length}`;
         if (n_countL) {
            break;
         }
      } while ((history3 == String.fromCharCode(69,0)) && n_countL);
         playS *= 1 >> (Math.min(Math.abs(parseInt(`${playS}`)), 2));
       let whiteX: Map<any, any> = new Map([[String.fromCharCode(102,95,49,55,95,102,111,117,114,116,104,0),String.fromCharCode(118,99,114,101,97,116,101,95,121,95,51,56,0)], [String.fromCharCode(100,111,99,107,101,114,95,52,95,50,48,0),String.fromCharCode(105,109,112,111,114,116,97,98,108,101,100,95,49,95,55,53,0)], [String.fromCharCode(104,95,56,95,118,97,114,121,0),String.fromCharCode(106,95,56,50,95,97,97,99,101,110,99,100,115,112,0)]]);
          let shareI = String.fromCharCode(115,95,56,53,95,116,114,97,105,116,115,0);
         history3 = `${privacyI.length}`;
         shareI += `${shareI.length}`;
      let yellowc = 6210164.0 <= playS;
      do {
         playS /= Math.max(whiteX.size, 1);
         if (yellowc) {
            break;
         }
      } while (yellowc && (privacyI.endsWith(`${playS}`)));
       let volumeW: Map<any, any> = new Map([[String.fromCharCode(117,95,50,95,117,110,115,117,112,112,111,114,116,101,100,0),String.fromCharCode(110,95,49,50,95,97,112,112,115,102,108,121,101,114,0)], [String.fromCharCode(119,105,110,99,101,95,113,95,55,49,0),String.fromCharCode(114,101,99,111,110,102,105,103,117,114,97,98,108,101,95,102,95,50,57,0)]]);
       let accepted4 = 0;
      if ((history3.length - playS) < 3.18 || (history3.length - parseInt(`${playS}`)) < 2) {
         history3 += `${((typingS ? 1 : 4) * description_8g.length)}`;
      }
      let nativeZ = accepted4 >= 5443668;
      do {
         accepted4 ^= privacyI.length;
         if (nativeZ) {
            break;
         }
      } while ((whiteX.get(`${accepted4}`) == null) && nativeZ);
         description_8g += `${description_8g.length | 1}`;
       let statistics8: Array<any> = [String.fromCharCode(97,115,112,101,99,116,115,95,48,95,55,54,0), String.fromCharCode(108,95,54,54,95,116,117,112,108,101,0), String.fromCharCode(104,95,49,49,95,97,112,110,103,0)];
      if ((1 | statistics8.length) >= 1) {
         typingS = !typingS;
      }
          let vignetteb = String.fromCharCode(105,95,53,56,95,117,110,112,111,105,115,111,110,0);
          let baiduF = 5.0;
          let megaphoneU: Array<any> = [442, 842];
         accepted4 >>= Math.min(4, Math.abs(1 << (Math.min(4, Math.abs(volumeW.size)))));
         vignetteb = "2";
         baiduF -= megaphoneU.length;
         megaphoneU = [parseInt(`${baiduF}`)];
      while ((whiteX.size / (Math.max(privacyI.length, 1))) >= 1) {
          let component9 = String.fromCharCode(107,95,54,57,95,114,101,113,117,105,114,101,115,0);
          let singleC = false;
          let viewerz: Array<any> = [120, 612];
          let tempI = 3.0;
          let profilei = 3.0;
         whiteX.set(`${typingS}`, 2);
         component9 += `${parseInt(`${tempI}`) ^ viewerz.length}`;
         singleC = 33.39 >= (profilei - tempI);
         viewerz.push(component9.length);
         profilei /= Math.max(parseFloat(`${parseInt(`${profilei}`) - 1}`), 5);
         break;
      }
         description_8g += `${whiteX.size ^ history3.length}`;
      hooksn += `${vietnama.length}`;
   }
      indexx += 3;
       let backgroundg = 0.0;
      let moduleC = backgroundg <= 9321938.0;
      do {
          let ranky: Array<any> = [500, 381, 796];
          let sportst = 0.0;
         backgroundg *= parseInt(`${backgroundg}`) ^ ranky.length;
         ranky = [2];
         sportst -= 3 | parseInt(`${sportst}`);
         if (moduleC) {
            break;
         }
      } while (moduleC && (2.39 > (backgroundg / (Math.max(2.58, 8)))));
         backgroundg += 2 - parseInt(`${backgroundg}`);
         backgroundg += parseInt(`${backgroundg}`);
      fastforwardB += (String.fromCharCode(50,0) == currentV ? parseInt(`${tempa}`) : currentV.length);
      navigatione -= parseInt(`${tempa}`);
      banner0 = `${parseInt(`${navigatione}`) & parseInt(`${tempa}`)}`;

    const eps = episodes?.urls?.slice(
      showEpisodeRangeStart,
      showEpisodeRangeEnd,
    );

   for (let j = 0; j < 2; j++) {
      banner0 += `${parseInt(`${navigatione}`) * 1}`;
   }
       let shrinkH = false;
       let blacklistF = 4.0;
         shrinkH = 39.83 > blacklistF;
         shrinkH = blacklistF <= 61.29;
      vietnama = `${parseInt(`${tempa}`) * currentV.length}`;
   while (fastforwardB <= reminder3.length) {
       let link7 = String.fromCharCode(98,95,57,56,95,105,116,117,110,101,115,0);
       let stepq: Map<any, any> = new Map([[String.fromCharCode(104,113,120,100,115,112,95,108,95,54,49,0),String.fromCharCode(101,108,101,118,97,116,101,95,101,95,55,56,0)], [String.fromCharCode(117,112,115,101,114,116,95,113,95,53,53,0),String.fromCharCode(116,102,104,100,95,117,95,56,48,0)], [String.fromCharCode(104,95,49,52,95,100,101,99,111,117,112,108,101,0),String.fromCharCode(99,101,108,108,115,95,115,95,51,57,0)]]);
      if (link7.startsWith(`${stepq.size}`)) {
         stepq.set(`${link7}`, link7.length);
      }
         stepq = new Map([[`${stepq.size}`, stepq.size ^ link7.length]]);
      while (link7.length >= 4) {
          let formq = String.fromCharCode(110,101,103,95,56,95,56,50,0);
         link7 = `${(String.fromCharCode(106,0) == link7 ? link7.length : stepq.size)}`;
         formq += `${formq.length * formq.length}`;
         break;
      }
      let closez = stepq.size >= 9586440;
      do {
          let emptyk = String.fromCharCode(99,95,50,52,95,99,111,109,112,108,101,116,105,111,110,0);
          let annerT = 0.0;
          let suggestionY = false;
          let adulto = false;
          let suggestionYc = String.fromCharCode(112,95,50,54,95,111,98,106,101,99,116,115,0);
         stepq.set(emptyk, (emptyk == String.fromCharCode(77,0) ? suggestionYc.length : emptyk.length));
         annerT += (parseFloat(`${(suggestionY ? 5 : 1)}`));
         suggestionY = !suggestionY;
         adulto = !adulto || annerT >= 48.89;
         suggestionYc = `${3 << (Math.min(Math.abs(parseInt(`${annerT}`)), 4))}`;
         if (closez) {
            break;
         }
      } while ((link7.endsWith(`${stepq.size}`)) && closez);
          let sinaL = String.fromCharCode(97,108,112,104,97,98,101,116,95,97,95,52,57,0);
          let baiduq = 0.0;
          let backF = 4.0;
         link7 += `${stepq.size}`;
         sinaL = `${(String.fromCharCode(51,0) == sinaL ? parseInt(`${baiduq}`) : sinaL.length)}`;
         baiduq -= parseInt(`${backF}`) & sinaL.length;
         backF *= parseFloat(`${sinaL.length / 1}`);
      for (let i = 0; i < 2; i++) {
         stepq.set(link7, link7.length);
      }
      reminder3 = `${banner0.length}`;
      break;
   }
   let heartE = 6505704 <= hooksn.length;
   do {
       let telegramV: Array<any> = [87, 690, 15];
       let splashB = true;
       let gemfiler = 1.0;
       let sheetv: Array<any> = [893, 925];
       let checkboxg = String.fromCharCode(120,95,54,49,95,114,97,115,116,101,114,105,122,101,0);
      while (parseFloat(`${checkboxg.length}`) > gemfiler) {
          let editu = 4.0;
          let starX = String.fromCharCode(115,95,50,48,95,98,98,111,120,0);
          let disconnectedV = String.fromCharCode(101,95,55,55,95,114,101,112,117,98,108,105,115,104,0);
         gemfiler /= Math.max(parseFloat(`${2}`), 5);
         editu /= Math.max(1, parseFloat(`${parseInt(`${editu}`) | disconnectedV.length}`));
         starX += "1";
         disconnectedV = `${disconnectedV.length | 3}`;
         break;
      }
         checkboxg = `${((splashB ? 1 : 5) ^ 3)}`;
      if ((3.32 - gemfiler) >= 3.39) {
          let moviesw = String.fromCharCode(108,95,57,55,95,114,101,112,101,97,116,101,100,0);
          let layouts: Map<any, any> = new Map([[String.fromCharCode(111,98,117,115,95,52,95,57,52,0),842], [String.fromCharCode(112,105,120,99,116,120,95,49,95,56,52,0),922], [String.fromCharCode(98,95,49,48,48,95,116,114,101,110,100,105,110,103,0),111]]);
          let areai = true;
         gemfiler *= parseFloat(`${3}`);
         moviesw = `${(3 >> (Math.min(2, Math.abs((areai ? 2 : 3)))))}`;
         layouts.set(moviesw, layouts.size);
         areai = 78 >= moviesw.length && 78 >= layouts.size;
      }
      let rightZ = splashB ? !splashB : splashB;
      do {
          let anner3: Array<any> = [73, 757];
         splashB = sheetv.length == 90;
         anner3.push(anner3.length + anner3.length);
         if (rightZ) {
            break;
         }
      } while (rightZ && (sheetv.length == 5));
          let shootu = false;
         gemfiler += (parseFloat(`${(shootu ? 4 : 4)}`));
          let diceu = String.fromCharCode(103,95,51,48,95,114,101,99,117,114,115,101,0);
         splashB = (diceu.length ^ sheetv.length) == 67;
       let profileE = false;
      while (1 > (2 ^ telegramV.length)) {
          let detailr = 4;
          let baidu2 = 4.0;
          let indexD = 3;
         profileE = gemfiler >= 95.44;
         detailr ^= detailr % 3;
         baidu2 /= Math.max(parseFloat(`${3 % (Math.max(10, detailr))}`), 3);
         indexD >>= Math.min(Math.abs(detailr ^ indexD), 1);
         break;
      }
      for (let z = 0; z < 3; z++) {
          let logos = 1.0;
          let trophyL = String.fromCharCode(112,114,111,116,101,99,116,111,114,95,112,95,56,51,0);
          let updatesY: Map<any, any> = new Map([[String.fromCharCode(97,100,100,95,106,95,55,49,0),860], [String.fromCharCode(116,105,112,95,54,95,53,53,0),482]]);
         splashB = String.fromCharCode(66,0) == trophyL;
         logos /= Math.max(parseFloat(`${3}`), 5);
         trophyL = `${parseInt(`${logos}`)}`;
         updatesY = new Map([[`${updatesY.size}`, updatesY.size + 2]]);
      }
      let types4 = telegramV.length <= 7285142;
      do {
         telegramV.push(checkboxg.length | 1);
         if (types4) {
            break;
         }
      } while (types4 && (sheetv.includes(telegramV.length)));
         checkboxg = "3";
      if (!profileE) {
         profileE = splashB;
      }
         checkboxg = "1";
      while (2 >= (parseInt(`${gemfiler}`) + sheetv.length)) {
         sheetv.push(3);
         break;
      }
      let china0 = checkboxg.length <= 5368077;
      do {
         checkboxg = `${((profileE ? 5 : 4) & parseInt(`${gemfiler}`))}`;
         if (china0) {
            break;
         }
      } while ((4 > checkboxg.length) && china0);
      hooksn += "3";
      if (heartE) {
         break;
      }
   } while (heartE && (!currentV.includes(`${hooksn.length}`)));
       let linex = true;
      let storeE = linex ? !linex : linex;
      do {
         linex = (!linex ? linex : linex);
         if (storeE) {
            break;
         }
      } while (storeE && (!linex));
      while (!linex && !linex) {
         linex = !linex;
         break;
      }
       let details7 = String.fromCharCode(119,95,49,52,95,97,114,97,98,105,99,0);
       let assistm = String.fromCharCode(103,95,51,57,0);
      reminder3 += `${vietnama.length}`;
       let megaphonem = 5.0;
      if ((5 - megaphonem) < 5.66) {
          let typingT = String.fromCharCode(116,95,52,52,95,101,116,104,101,114,116,117,112,108,105,115,0);
          let disconnectedH = 3;
         megaphonem -= parseFloat(`${disconnectedH}`);
         typingT = `${2 + typingT.length}`;
         disconnectedH ^= 3;
      }
         megaphonem /= Math.max(1, parseFloat(`${parseInt(`${megaphonem}`) >> (Math.min(1, Math.abs(1)))}`));
         megaphonem *= parseFloat(`${parseInt(`${megaphonem}`)}`);
      indexx *= (String.fromCharCode(74,0) == reminder3 ? parseInt(`${fastforwardB}`) : reminder3.length);
      internet0.push(parseInt(`${tempa}`) + gpayH.length);
    if (sortBy === 'desc') {

      reminder3 = `${parseInt(`${indexx}`) + 3}`;
   let lineL = String.fromCharCode(117,107,112,116,0) == hooksn;
   do {
       let historyU = String.fromCharCode(116,114,105,103,103,101,114,95,97,95,55,57,0);
       let notificationT: Map<any, any> = new Map([[String.fromCharCode(105,95,57,56,95,97,115,111,108,117,116,101,0),562], [String.fromCharCode(116,95,51,49,95,100,101,113,117,97,110,116,105,122,101,114,0),147]]);
       let minimizez = 4.0;
       let tick9 = String.fromCharCode(122,95,52,49,95,105,115,110,111,116,116,97,112,0);
       let expandg: Map<any, any> = new Map([[String.fromCharCode(98,111,117,110,100,115,95,117,95,57,54,0),710], [String.fromCharCode(99,111,110,116,101,110,116,108,101,115,115,95,103,95,54,0),543]]);
         expandg.set(`${historyU}`, 2 * historyU.length);
      for (let w = 0; w < 1; w++) {
         minimizez /= Math.max(4, expandg.size);
      }
      while ((historyU.length ^ notificationT.size) >= 4 && (historyU.length ^ notificationT.size) >= 4) {
          let configuree = String.fromCharCode(108,95,51,57,95,111,115,116,114,101,97,109,0);
          let dangerd = false;
          let filedb = String.fromCharCode(108,97,118,102,105,95,98,95,50,51,0);
          let dropdownc = 5.0;
          let register_lkT = String.fromCharCode(109,105,110,105,109,105,122,101,100,95,98,95,54,0);
         historyU += `${parseInt(`${dropdownc}`)}`;
         configuree = `${1 - filedb.length}`;
         dangerd = (filedb.length * register_lkT.length) >= 11;
         register_lkT = `${((dangerd ? 3 : 4))}`;
         break;
      }
      let bodanl = 6206354 <= expandg.size;
      do {
          let vignette8: Map<any, any> = new Map([[String.fromCharCode(97,110,105,109,97,116,101,95,111,95,57,57,0),String.fromCharCode(117,95,52,56,95,103,114,97,121,0)], [String.fromCharCode(103,95,49,49,95,116,105,108,101,100,0),String.fromCharCode(121,95,57,49,95,102,116,118,110,115,0)], [String.fromCharCode(100,101,112,101,110,100,101,110,116,95,113,95,52,52,0),String.fromCharCode(106,95,53,53,95,108,97,116,0)]]);
          let ycopy_jP = 5;
          let readN: Map<any, any> = new Map([[String.fromCharCode(105,110,116,114,110,108,95,107,95,52,50,0),191], [String.fromCharCode(108,111,111,112,102,105,108,116,101,114,95,51,95,57,54,0),211]]);
          let point_ = 0.0;
         expandg.set(`${point_}`, parseInt(`${point_}`));
         vignette8.set(`${ycopy_jP}`, 2 ^ readN.size);
         ycopy_jP -= ycopy_jP;
         readN = new Map([[`${vignette8.size}`, vignette8.size]]);
         if (bodanl) {
            break;
         }
      } while (((notificationT.size | expandg.size) == 4 && (4 | expandg.size) == 3) && bodanl);
       let watch3 = 0;
       let floaterM = 3;
         historyU = `${parseInt(`${minimizez}`)}`;
         floaterM *= parseInt(`${minimizez}`);
         floaterM *= parseInt(`${minimizez}`);
      if ((tick9.length / 5) >= 2) {
          let searchbarz = String.fromCharCode(100,95,51,53,95,115,99,114,117,98,98,101,114,0);
          let settings5: Array<any> = [241, 778];
         tick9 = `${historyU.length + 1}`;
         searchbarz += `${2 | settings5.length}`;
         settings5 = [1];
      }
      let firebasel = 8771609 <= floaterM;
      do {
          let black9 = String.fromCharCode(116,95,57,55,95,100,101,115,116,105,110,97,116,105,111,110,0);
          let yellowL = String.fromCharCode(101,95,52,54,95,100,101,109,111,0);
          let ping6: Map<any, any> = new Map([[String.fromCharCode(102,116,114,117,110,99,97,116,101,95,101,95,50,48,0),76], [String.fromCharCode(115,95,49,95,115,116,114,110,99,97,115,101,99,109,112,0),403], [String.fromCharCode(103,95,51,48,95,112,114,101,100,111,119,110,108,111,97,100,0),378]]);
          let formO = String.fromCharCode(112,105,120,101,108,102,108,111,97,116,95,51,95,54,55,0);
          let over0 = String.fromCharCode(109,115,112,101,108,95,48,95,57,53,0);
         floaterM -= floaterM;
         black9 = `${over0.length ^ formO.length}`;
         yellowL += `${formO.length % 2}`;
         ping6.set(over0, ping6.size + over0.length);
         if (firebasel) {
            break;
         }
      } while (((floaterM | 4) <= 3) && firebasel);
       let clearH = String.fromCharCode(101,95,54,52,95,115,117,98,115,101,113,117,101,110,99,101,115,0);
         watch3 >>= Math.min(Math.abs(watch3), 4);
      for (let w = 0; w < 3; w++) {
         floaterM &= expandg.size;
      }
      while (3 < (parseInt(`${minimizez}`) + tick9.length) && 5.23 < (tick9.length + minimizez)) {
          let plash8 = String.fromCharCode(98,95,51,95,115,101,116,0);
          let transferE = String.fromCharCode(118,97,114,105,97,116,105,111,110,95,105,95,53,48,0);
         minimizez *= 2;
         plash8 += `${transferE.length >> (Math.min(5, plash8.length))}`;
         transferE += `${3 % (Math.max(5, transferE.length))}`;
         break;
      }
      if (!Array.from(expandg.values()).includes(watch3)) {
         watch3 /= Math.max(1, 1 << (Math.min(3, Math.abs(expandg.size))));
      }
      hooksn = `${parseInt(`${minimizez}`) << (Math.min(Math.abs(parseInt(`${navigatione}`)), 1))}`;
      if (lineL) {
         break;
      }
   } while (lineL && (hooksn.length > 5));
   for (let h = 0; h < 2; h++) {
      indexx += 3;
   }
       let weibod: Map<any, any> = new Map([[String.fromCharCode(115,95,57,53,95,99,116,120,112,0),845], [String.fromCharCode(98,95,55,57,95,111,117,116,111,117,116,0),283]]);
         weibod = new Map([[`${weibod.size}`, weibod.size ^ 2]]);
         weibod = new Map([[`${weibod.size}`, weibod.size]]);
      if (Array.from(weibod.values()).includes(weibod.size)) {
         weibod.set(`${weibod.size}`, weibod.size ^ 1);
      }
      spinnerg += `${parseInt(`${tempa}`) >> (Math.min(Math.abs(3), 4))}`;
   while (2.44 == (hooksn.length * navigatione) && 4 == (hooksn.length ^ 3)) {
       let megaphonev: Array<any> = [858, 720];
       let overC = String.fromCharCode(100,101,108,97,95,49,95,53,50,0);
      if (overC.startsWith(`${megaphonev.length}`)) {
         overC = `${overC.length}`;
      }
      for (let y = 0; y < 2; y++) {
          let completej: Array<any> = [String.fromCharCode(120,109,97,115,109,95,103,95,49,53,0), String.fromCharCode(106,112,101,103,100,115,112,95,105,95,54,49,0), String.fromCharCode(112,95,52,55,95,119,111,114,107,105,110,103,0)];
          let controlh: Array<any> = [String.fromCharCode(102,95,57,55,95,100,115,116,114,101,97,109,0), String.fromCharCode(107,118,111,95,110,95,48,0), String.fromCharCode(109,95,50,55,95,119,104,105,116,101,108,105,115,116,0)];
          let areav = String.fromCharCode(103,95,50,50,95,112,97,100,100,105,110,103,0);
          let servicek = String.fromCharCode(97,95,57,49,95,109,109,99,111,0);
         overC = `${overC.length}`;
         completej.push(areav.length);
         controlh.push(areav.length);
         servicek += "3";
      }
         overC = `${megaphonev.length}`;
      for (let v = 0; v < 3; v++) {
         overC = `${(overC == String.fromCharCode(90,0) ? megaphonev.length : overC.length)}`;
      }
      while (1 <= (megaphonev.length * 1) && (megaphonev.length * 1) <= 3) {
         megaphonev = [(String.fromCharCode(104,0) == overC ? overC.length : megaphonev.length)];
         break;
      }
      while (overC.includes(`${megaphonev.length}`)) {
         overC += `${overC.length / 1}`;
         break;
      }
      hooksn += "2";
      break;
   }
       let umengN: Array<any> = [440, 731, 107];
      let langkeyz = 8191300 <= umengN.length;
      do {
          let crownj = String.fromCharCode(101,108,115,116,95,102,95,55,53,0);
          let combineU = 4.0;
         umengN = [crownj.length];
         crownj += "3";
         combineU += parseFloat(`${parseInt(`${combineU}`)}`);
         if (langkeyz) {
            break;
         }
      } while ((umengN.includes(umengN.length)) && langkeyz);
          let annera = 3;
         umengN.push(annera);
         umengN.push(umengN.length % (Math.max(5, umengN.length)));
      fastforwardB -= parseInt(`${tempa}`);
      reminder3 = `${parseInt(`${fastforwardB}`) / 2}`;
      eps?.reverse();
    }
    return eps;
  }, [showEpisodeRangeStart, showEpisodeRangeEnd, episodes, sortBy]);

  
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeEpisode]);

  const sort = () => {
       let annerp: Map<any, any> = new Map([[String.fromCharCode(99,95,56,95,115,112,101,101,100,104,113,0),902], [String.fromCharCode(99,104,111,112,95,103,95,54,55,0),603]]);
    let smallc = 0;
    let light2 = false;
    let typesp: Array<any> = [117, 967];
    let searchA = 1;
    let indexc = 4.0;
    let signinup9 = String.fromCharCode(98,115,102,115,95,114,95,57,54,0);
    let xvodJ = true;
    let r_positionx = String.fromCharCode(114,101,116,114,105,101,100,95,112,95,56,50,0);
    let configureY = 4.0;
   let disconnectedZ = typesp.length >= 7808399;
   do {
      typesp.push(annerp.size);
      if (disconnectedZ) {
         break;
      }
   } while (disconnectedZ && (1 <= (3 & signinup9.length)));
   for (let i = 0; i < 2; i++) {
       let episodesi = String.fromCharCode(102,108,105,103,104,116,95,50,95,54,57,0);
       let overlayK = String.fromCharCode(100,110,115,108,97,98,101,108,95,105,95,51,0);
       let becomeV = String.fromCharCode(114,101,115,112,95,112,95,49,52,0);
       let hoverA = String.fromCharCode(118,120,119,111,114,107,115,95,101,95,57,49,0);
       let statsI = String.fromCharCode(101,105,112,95,113,95,52,49,0);
       let gestureT = String.fromCharCode(118,97,110,99,95,107,95,52,0);
          let foundA = 4;
          let selectiony = String.fromCharCode(120,95,53,53,95,114,105,110,102,0);
          let sourcec = String.fromCharCode(101,95,49,51,95,102,105,110,100,101,114,0);
         gestureT = `${3 >> (Math.min(2, sourcec.length))}`;
         foundA &= 1;
         selectiony += `${foundA}`;
         sourcec = `${foundA + selectiony.length}`;
          let sideJ = true;
          let brightness3: Array<any> = [345, 390, 168];
          let volumeD = 3.0;
         episodesi = `${hoverA.length * overlayK.length}`;
         sideJ = brightness3.includes(volumeD);
         brightness3.push(parseInt(`${volumeD}`) * 2);
      while (overlayK.length >= 1) {
         overlayK = `${episodesi.length}`;
         break;
      }
         statsI += "2";
      let point3 = statsI == String.fromCharCode(117,100,107,114,97,0);
      do {
         statsI = `${overlayK.length * 3}`;
         if (point3) {
            break;
         }
      } while (point3 && (episodesi.length > statsI.length));
      if (statsI == String.fromCharCode(89,0)) {
          let userk: Array<any> = [805, 108];
          let backh: Map<any, any> = new Map([[String.fromCharCode(109,111,110,111,116,111,110,105,116,121,95,113,95,51,56,0),627], [String.fromCharCode(97,95,52,52,95,105,110,116,114,111,100,117,99,116,105,111,110,0),620]]);
          let gesturez = String.fromCharCode(101,95,56,54,95,100,111,119,110,115,104,105,102,116,0);
         gestureT = `${backh.size / (Math.max(statsI.length, 6))}`;
         userk = [gesturez.length];
         backh = new Map([[`${userk.length}`, (String.fromCharCode(100,0) == gesturez ? userk.length : gesturez.length)]]);
      }
       let fast5 = String.fromCharCode(114,95,49,48,95,97,109,114,110,98,0);
         overlayK += `${(String.fromCharCode(75,0) == overlayK ? overlayK.length : episodesi.length)}`;
      let editV = becomeV.length >= 5731818;
      do {
         becomeV += `${overlayK.length - becomeV.length}`;
         if (editV) {
            break;
         }
      } while (editV && (overlayK == String.fromCharCode(100,0)));
         becomeV = `${becomeV.length}`;
         becomeV = `${statsI.length - 2}`;
         fast5 = `${(becomeV == String.fromCharCode(101,0) ? gestureT.length : becomeV.length)}`;
      for (let w = 0; w < 3; w++) {
          let shrinkM = 3.0;
          let verticalj = String.fromCharCode(116,105,101,114,115,95,102,95,56,50,0);
          let pausev = false;
          let gpay0 = String.fromCharCode(122,95,50,52,95,100,101,109,117,120,101,114,0);
         gestureT += `${((pausev ? 2 : 4) / (Math.max(gestureT.length, 6)))}`;
         shrinkM += 2;
         verticalj = `${(verticalj == String.fromCharCode(95,0) ? parseInt(`${shrinkM}`) : verticalj.length)}`;
         pausev = 38 <= verticalj.length;
         gpay0 += `${2 ^ verticalj.length}`;
      }
      for (let m = 0; m < 1; m++) {
         becomeV = `${overlayK.length ^ 2}`;
      }
      smallc *= 3;
   }
      typesp = [2 << (Math.min(5, Math.abs(annerp.size)))];
      indexc -= 3;
       let chinay = String.fromCharCode(114,101,99,105,112,114,111,99,97,108,95,114,95,53,55,0);
       let downM = String.fromCharCode(102,97,110,99,121,95,116,95,52,52,0);
       let filledv: Array<any> = [982, 120, 345];
         filledv.push(1);
      while (chinay.length <= downM.length) {
         chinay = `${2 | downM.length}`;
         break;
      }
      if (chinay != downM) {
         downM = `${filledv.length}`;
      }
         chinay += `${chinay.length}`;
          let telegrami = 5.0;
          let termsU: Array<any> = [819, 528];
          let statistics3 = String.fromCharCode(109,112,101,103,118,108,99,95,106,95,52,52,0);
         filledv.push(parseInt(`${telegrami}`));
         telegrami += parseFloat(`${1 - termsU.length}`);
         termsU.push(statistics3.length << (Math.min(Math.abs(2), 1)));
         statistics3 += `${statistics3.length << (Math.min(Math.abs(3), 2))}`;
         downM += `${3 << (Math.min(3, downM.length))}`;
         chinay = `${filledv.length << (Math.min(Math.abs(1), 2))}`;
         downM += `${filledv.length - chinay.length}`;
      let dropdownO = downM == String.fromCharCode(56,52,54,105,101,115,102,0);
      do {
         downM += `${downM.length | filledv.length}`;
         if (dropdownO) {
            break;
         }
      } while (((filledv.length + 5) >= 4 && 4 >= (filledv.length + 5)) && dropdownO);
      indexc *= signinup9.length;
   while (!r_positionx.includes(`${light2}`)) {
      r_positionx += `${signinup9.length << (Math.min(r_positionx.length, 4))}`;
      break;
   }

    if (sortBy === 'asc') {

   if (4 <= searchA) {
      searchA |= typesp.length + 2;
   }
   if (!xvodJ) {
       let untickM = 2.0;
         untickM += parseFloat(`${parseInt(`${untickM}`)}`);
         untickM += parseFloat(`${1}`);
      if (5.32 < (untickM / 2.47) || 3.34 < (2.47 + untickM)) {
          let h_countZ = 4;
          let questj = String.fromCharCode(119,95,56,55,95,115,119,105,116,99,104,97,98,108,101,0);
          let default_wd: Map<any, any> = new Map([[String.fromCharCode(114,101,115,101,110,100,95,122,95,53,51,0),String.fromCharCode(99,111,110,116,111,108,108,101,114,95,117,95,54,55,0)], [String.fromCharCode(115,101,108,101,99,116,105,118,101,95,119,95,50,51,0),String.fromCharCode(120,95,56,50,95,115,105,122,105,110,103,0)], [String.fromCharCode(109,105,110,105,109,117,109,95,104,95,48,0),String.fromCharCode(97,121,117,118,108,101,95,113,95,54,55,0)]]);
         untickM -= parseFloat(`${1 >> (Math.min(2, Math.abs(default_wd.size)))}`);
         h_countZ /= Math.max(5, questj.length);
         questj = `${h_countZ + questj.length}`;
         default_wd.set(questj, 1);
      }
      xvodJ = r_positionx.length <= smallc;
   }
      light2 = typesp.includes(indexc);
   for (let c = 0; c < 2; c++) {
       let sinab = 0;
       let taiwanp = String.fromCharCode(104,95,52,55,95,105,110,116,101,114,108,101,97,118,101,0);
         taiwanp += `${taiwanp.length & 1}`;
      for (let a = 0; a < 2; a++) {
         taiwanp = `${sinab - taiwanp.length}`;
      }
      if (3 < sinab) {
         taiwanp = `${sinab * 3}`;
      }
      while (3 > taiwanp.length) {
         sinab ^= taiwanp.length;
         break;
      }
         taiwanp += `${2 & sinab}`;
       let becomeN = 1.0;
       let confirmationv = 2.0;
      typesp = [parseInt(`${indexc}`) / 3];
   }
   if (1 > (smallc * 1) && !light2) {
      light2 = ((r_positionx.length + (xvodJ ? 100 : r_positionx.length)) > 100);
   }
   let leagueY = 8246874.0 <= indexc;
   do {
      indexc -= annerp.size;
      if (leagueY) {
         break;
      }
   } while (leagueY && (!xvodJ));
      setSortBy('desc');
    } else {

       let f_centerI: Array<any> = [398, 711, 22];
      if (f_centerI.includes(f_centerI.length)) {
         f_centerI.push(f_centerI.length);
      }
      while ((f_centerI.length ^ f_centerI.length) > 5 || (f_centerI.length ^ 5) > 2) {
         f_centerI.push(1);
         break;
      }
      for (let o = 0; o < 2; o++) {
         f_centerI = [f_centerI.length];
      }
      searchA ^= ((light2 ? 4 : 5) & (xvodJ ? 5 : 2));
   let trashE = 6704635.0 <= indexc;
   do {
      indexc -= signinup9.length;
      if (trashE) {
         break;
      }
   } while (((signinup9.length << (Math.min(Math.abs(1), 5))) == 3) && trashE);
       let shrinkL = 3.0;
       let next6 = 5.0;
         next6 += parseFloat(`${parseInt(`${shrinkL}`) * 3}`);
       let twitter9: Map<any, any> = new Map([[String.fromCharCode(99,114,121,112,116,95,119,95,50,0),436], [String.fromCharCode(114,116,109,100,95,50,95,49,51,0),789], [String.fromCharCode(102,114,97,103,109,101,110,116,95,97,95,55,52,0),140]]);
       let fillU: Map<any, any> = new Map([[String.fromCharCode(106,95,57,53,95,97,112,112,101,110,100,97,108,108,0),491], [String.fromCharCode(105,110,118,101,114,116,101,100,95,99,95,54,54,0),876], [String.fromCharCode(119,95,55,56,95,109,97,103,121,0),908]]);
      while ((2.69 / (Math.max(1, next6))) > 4.19) {
          let long_5V = String.fromCharCode(102,95,56,57,95,115,101,110,115,105,116,105,118,105,116,121,0);
          let download9 = String.fromCharCode(101,110,99,95,53,95,54,50,0);
          let single3 = 1.0;
         next6 += parseFloat(`${parseInt(`${single3}`)}`);
         long_5V = `${download9.length}`;
         download9 = `${download9.length | long_5V.length}`;
         single3 -= 3 | long_5V.length;
         break;
      }
      let assistE = next6 <= 6486661.0;
      do {
         next6 /= Math.max(2, parseFloat(`${2}`));
         if (assistE) {
            break;
         }
      } while (assistE && ((shrinkL / 3) > 5.55));
      for (let x = 0; x < 3; x++) {
         fillU.set(`${next6}`, parseInt(`${next6}`) | 3);
      }
         twitter9 = new Map([[`${fillU.size}`, parseInt(`${next6}`) / (Math.max(fillU.size, 4))]]);
      indexc *= 3;
      xvodJ = searchA <= 6;
   let macauZ = 9376930 >= searchA;
   do {
       let searchj = String.fromCharCode(108,97,122,105,108,121,95,55,95,49,48,48,0);
       let downloadingx = String.fromCharCode(120,109,108,115,95,101,95,57,51,0);
      while (4 >= downloadingx.length) {
         searchj += `${downloadingx.length | searchj.length}`;
         break;
      }
         downloadingx = `${2 + downloadingx.length}`;
         downloadingx = `${downloadingx.length >> (Math.min(1, searchj.length))}`;
      for (let d = 0; d < 2; d++) {
         searchj = `${(downloadingx == String.fromCharCode(98,0) ? searchj.length : downloadingx.length)}`;
      }
      while (searchj == String.fromCharCode(53,0) || downloadingx != String.fromCharCode(56,0)) {
         searchj += "2";
         break;
      }
         downloadingx += "2";
      searchA += 1;
      if (macauZ) {
         break;
      }
   } while (macauZ && (3 >= (searchA * 3) && light2));
   let nativeK = smallc <= 5358553;
   do {
      smallc += (String.fromCharCode(122,0) == signinup9 ? annerp.size : signinup9.length);
      if (nativeK) {
         break;
      }
   } while (nativeK && (2 == (smallc & 2) || (smallc & 2) == 5));
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
          {`${showEpisodeRangeStart+1}-${showEpisodeRangeEnd} 集`}
        </Text>
        <TouchableOpacity activeOpacity={0.85} style={styles.sortBtn} onPress={sort}>
          <View style={{paddingTop: 4}}>
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
          <TouchableOpacity activeOpacity={0.85}
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
