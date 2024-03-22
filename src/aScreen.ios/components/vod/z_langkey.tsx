import React, { memo, useEffect, useState, useMemo } from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList, Image, Linking } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';

import { playVod } from '@redux/actions/xif_layout';
import { useAppDispatch } from '@hooks/kg_index';
import VodCard from '../../components/vod/qee_dice';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { XVSScoreDark } from '@type/wpk_long';


interface XFillButton {
    vods: Array<XVSScoreDark>,
    numOfRows?: number,
    outerRowPadding?: number,
    minNumPerRow?: number,
    heightToWidthRatio?: number,
    onPress?: () => any,
}

function VodListVertical({ vods, numOfRows = 2, outerRowPadding = 0, minNumPerRow = 3, heightToWidthRatio = 1.414, onPress }: XFillButton) {
    const { textVariants, colors, spacing, icons } = useTheme();
    const insets = useSafeAreaInsets();
    const navigation = useNavigation();
    const dispatch = useAppDispatch();

    const [cardsPerRow, setCardsPerRow] = useState(3);
    const [marginRight, setMarginRight] = useState(5);
    const [cardWidth, setCardWidth] = useState(3);
    const [cardHeight, setCardHeight] = useState(5);

    const width = Math.min(Dimensions.get('window').width, Dimensions.get('window').height);

    useEffect(() => {
        calculateDimensions;
    }, []);

    const calculateDimensions = useMemo(() => {
       let streamingE = 1;
    let playK = String.fromCharCode(102,109,116,99,111,110,118,101,114,116,0);
    let u_titlel = 3.0;
    let morey = String.fromCharCode(109,112,106,112,101,103,0);
    let jnewst: Array<any> = [977, 234];
    let halfB = false;
    let bootsplashO = 1.0;
    let selectedx = String.fromCharCode(104,101,97,114,98,101,97,116,0);
    let whatsapp3 = false;
   if (!morey.startsWith(`${bootsplashO}`)) {
      morey += `${parseInt(`${bootsplashO}`) % 2}`;
   }
      playK += `${(playK == String.fromCharCode(77,0) ? parseInt(`${bootsplashO}`) : playK.length)}`;
       let gemfile_ = String.fromCharCode(118,112,100,115,112,0);
       let pressure5 = 1.0;
          let interstitiald = 5.0;
         gemfile_ += `${gemfile_.length / (Math.max(1, 7))}`;
         interstitiald /= Math.max(parseFloat(`${3}`), 2);
         pressure5 /= Math.max(3, parseFloat(`${3}`));
         gemfile_ = "1";
         pressure5 /= Math.max(1, parseFloat(`${parseInt(`${pressure5}`) / (Math.max(1, 7))}`));
         gemfile_ += `${(gemfile_ == String.fromCharCode(72,0) ? parseInt(`${pressure5}`) : gemfile_.length)}`;
          let screenZ = 4.0;
         gemfile_ = `${parseInt(`${pressure5}`) | 1}`;
         screenZ -= parseInt(`${screenZ}`);
      u_titlel /= Math.max(2, selectedx.length - 1);

        const PADDING = 8;

   while (4 >= (2 << (Math.min(3, Math.abs(streamingE)))) && 2 >= (2 << (Math.min(5, Math.abs(streamingE))))) {
       let muted7 = String.fromCharCode(116,116,97,103,0);
       let chartK = true;
      for (let o = 0; o < 2; o++) {
         chartK = muted7.length == 67;
      }
      if (muted7.length > 4) {
         chartK = chartK && muted7.length < 55;
      }
      for (let n = 0; n < 1; n++) {
         muted7 = "1";
      }
         chartK = muted7.length <= 56;
      if (chartK) {
          let configr = 1.0;
          let h_imageC = String.fromCharCode(115,111,114,116,101,114,0);
         chartK = !chartK;
         configr *= h_imageC.length;
         h_imageC += `${parseInt(`${configr}`)}`;
      }
      if (!chartK || 1 <= muted7.length) {
         chartK = muted7.length == 87 && !chartK;
      }
      morey += `${(parseInt(`${bootsplashO}`) ^ (halfB ? 3 : 3))}`;
      break;
   }
      streamingE %= Math.max(4, 3 >> (Math.min(1, Math.abs(parseInt(`${u_titlel}`)))));
   for (let c = 0; c < 3; c++) {
       let backwardQ = 1.0;
      if ((backwardQ * backwardQ) == 5.29 || (5.29 * backwardQ) == 4.9) {
          let privacyZ: Array<any> = [15, 9];
          let groupP = 4.0;
          let sportx: Map<any, any> = new Map([[String.fromCharCode(115,109,105,108,105,110,103,0),false ], [String.fromCharCode(103,101,115,116,117,114,101,0),false ]]);
          let downloaderK = String.fromCharCode(100,105,115,101,109,118,111,119,101,108,101,100,0);
          let mappingv = 4.0;
         backwardQ /= Math.max(parseFloat(`${parseInt(`${mappingv}`)}`), 5);
         privacyZ.push(1 - sportx.size);
         groupP += 1;
         sportx = new Map([[`${sportx.size}`, privacyZ.length]]);
         downloaderK = `${downloaderK.length}`;
         mappingv *= 2;
      }
      let nterstitialv = 6952197.0 <= backwardQ;
      do {
         backwardQ /= Math.max(parseFloat(`${parseInt(`${backwardQ}`)}`), 1);
         if (nterstitialv) {
            break;
         }
      } while (((5 + backwardQ) == 3.83) && nterstitialv);
       let actionsi = String.fromCharCode(112,114,101,102,101,116,99,104,105,110,103,0);
       let topicw = String.fromCharCode(105,110,104,105,98,105,116,0);
      u_titlel += parseInt(`${backwardQ}`) + morey.length;
   }
        const windowDim = width - insets.left - insets.right - outerRowPadding - (2.1 * spacing.sideOffset); 

   for (let c = 0; c < 3; c++) {
       let sideH = String.fromCharCode(107,101,121,0);
       let closeR = false;
       let hook_ = true;
       let trophy9 = true;
       let room5 = String.fromCharCode(116,104,117,109,98,110,97,105,108,0);
         hook_ = room5.length <= 29 || !hook_;
      for (let e = 0; e < 2; e++) {
         hook_ = (38 <= (room5.length & (hook_ ? room5.length : 38)));
      }
      if (hook_) {
         hook_ = !trophy9;
      }
          let sharel = String.fromCharCode(106,107,101,110,99,0);
         hook_ = sideH.length >= 49;
         sharel += `${sharel.length}`;
      for (let z = 0; z < 3; z++) {
         hook_ = (hook_ ? !trophy9 : !hook_);
      }
      if (sideH.startsWith(room5)) {
          let r_titlet = String.fromCharCode(97,114,101,97,115,0);
         room5 = "3";
         r_titlet = `${r_titlet.length}`;
      }
         trophy9 = room5.length >= 100;
         sideH = `${(sideH == String.fromCharCode(75,0) ? sideH.length : (closeR ? 4 : 4))}`;
      let starp = closeR ? !closeR : closeR;
      do {
         closeR = room5.length < 74 || hook_;
         if (starp) {
            break;
         }
      } while (starp && (!closeR && !hook_));
         trophy9 = sideH.length < room5.length;
         hook_ = !trophy9;
      for (let a = 0; a < 3; a++) {
         room5 = `${room5.length >> (Math.min(Math.abs(3), 3))}`;
      }
         sideH = `${(3 | (hook_ ? 5 : 5))}`;
      for (let n = 0; n < 3; n++) {
          let episodeP: Map<any, any> = new Map([[String.fromCharCode(116,104,114,111,119,105,110,103,0),true ], [String.fromCharCode(103,101,116,110,109,115,101,100,101,99,0),false ]]);
          let dialogE = String.fromCharCode(104,105,103,104,112,111,114,116,0);
          let with_jN = 3;
          let notificationg = String.fromCharCode(115,116,114,117,99,116,117,114,101,0);
          let settings_: Map<any, any> = new Map([[String.fromCharCode(114,111,117,112,0),String.fromCharCode(109,109,99,111,0)], [String.fromCharCode(108,105,98,0),String.fromCharCode(114,97,110,107,0)], [String.fromCharCode(111,110,108,121,0),String.fromCharCode(99,97,112,112,101,100,0)]]);
         room5 += `${((hook_ ? 4 : 1) - 2)}`;
         episodeP = new Map([[`${episodeP.size}`, episodeP.size / (Math.max(3, 2))]]);
         dialogE = `${episodeP.size}`;
         with_jN /= Math.max(1 << (Math.min(2, dialogE.length)), 3);
         notificationg += `${dialogE.length}`;
         settings_.set(`${with_jN}`, with_jN);
      }
       let modityT = 0.0;
       let macauV = 4.0;
      morey += `${(sideH.length ^ (closeR ? 5 : 2))}`;
   }
   if (2.58 <= (jnewst.length + u_titlel) || 4 <= (jnewst.length + parseInt(`${u_titlel}`))) {
       let tumbnail2 = String.fromCharCode(108,111,103,111,115,0);
       let controlk = String.fromCharCode(99,97,114,100,104,111,108,100,101,114,0);
       let loginy = 3;
       let bottomQ = false;
       let internetn = String.fromCharCode(100,101,99,114,121,112,116,0);
         controlk += `${controlk.length << (Math.min(4, Math.abs(loginy)))}`;
         internetn += `${controlk.length}`;
         controlk += `${((bottomQ ? 1 : 2) ^ loginy)}`;
      let weiboU = 7426407 <= controlk.length;
      do {
          let renew5 = String.fromCharCode(110,97,109,101,115,112,97,99,101,115,0);
          let footballZ = String.fromCharCode(100,105,115,112,111,115,97,98,108,101,115,0);
          let screenv = 2;
          let roomI = true;
          let unselectedf = 3.0;
         controlk = `${(internetn == String.fromCharCode(57,0) ? (bottomQ ? 2 : 4) : internetn.length)}`;
         renew5 += `${(footballZ == String.fromCharCode(69,0) ? footballZ.length : renew5.length)}`;
         screenv %= Math.max(2, footballZ.length);
         roomI = unselectedf == 23.67 || roomI;
         unselectedf += parseFloat(`${2}`);
         if (weiboU) {
            break;
         }
      } while ((controlk.length == 2) && weiboU);
       let sentry8: Map<any, any> = new Map([[String.fromCharCode(97,100,109,105,110,0),614], [String.fromCharCode(115,101,116,102,105,101,108,100,0),912], [String.fromCharCode(98,101,103,105,110,110,105,110,103,0),872]]);
       let grayU: Map<any, any> = new Map([[String.fromCharCode(98,105,116,115,116,114,0),String.fromCharCode(115,112,111,110,115,111,114,101,100,0)], [String.fromCharCode(100,97,109,112,105,110,103,0),String.fromCharCode(115,107,105,112,115,0)], [String.fromCharCode(105,110,118,105,116,97,116,105,111,110,0),String.fromCharCode(115,101,97,108,0)]]);
       let splash7 = String.fromCharCode(119,101,105,103,104,116,112,0);
       let hongkongk = String.fromCharCode(112,101,114,109,117,116,97,116,105,111,110,115,0);
      for (let g = 0; g < 1; g++) {
         splash7 += `${tumbnail2.length}`;
      }
      while (!Array.from(grayU.values()).includes(sentry8.size)) {
         grayU = new Map([[`${sentry8.size}`, 3 & sentry8.size]]);
         break;
      }
      while (loginy < 2) {
         bottomQ = 19 >= grayU.size || splash7 == String.fromCharCode(69,0);
         break;
      }
      if (sentry8.size < 2) {
         hongkongk = `${hongkongk.length << (Math.min(Math.abs(2), 2))}`;
      }
         sentry8 = new Map([[`${loginy}`, 1]]);
         loginy ^= 1;
      if (tumbnail2.endsWith(`${sentry8.size}`)) {
         tumbnail2 = `${internetn.length}`;
      }
          let sheetL = String.fromCharCode(111,98,115,101,114,118,101,100,0);
          let update_dup = 1.0;
          let clock9 = 2.0;
         hongkongk = `${sentry8.size % (Math.max(4, grayU.size))}`;
         sheetL = `${parseInt(`${update_dup}`) - 2}`;
         update_dup /= Math.max(parseFloat(`${2 & sheetL.length}`), 1);
         clock9 -= (String.fromCharCode(55,0) == sheetL ? parseInt(`${clock9}`) : sheetL.length);
      if (2 < (tumbnail2.length - loginy) || (loginy - 2) < 3) {
          let verticalC = String.fromCharCode(99,104,114,111,109,105,110,97,110,99,101,0);
          let searchbarL = String.fromCharCode(101,110,116,101,114,0);
          let faviconS = 5.0;
          let agreementp = true;
         loginy *= searchbarL.length << (Math.min(Math.abs(2), 5));
         verticalC += `${(parseInt(`${faviconS}`) & (agreementp ? 2 : 2))}`;
         searchbarL += `${(String.fromCharCode(90,0) == verticalC ? verticalC.length : (agreementp ? 5 : 2))}`;
         faviconS -= (parseFloat(`${parseInt(`${faviconS}`) ^ (agreementp ? 2 : 4)}`));
      }
      jnewst.push((String.fromCharCode(90,0) == selectedx ? parseInt(`${bootsplashO}`) : selectedx.length));
   }
      morey += `${morey.length - playK.length}`;
        const maxWidth = (windowDim / minNumPerRow) - PADDING;

   if (!halfB) {
       let auto_v6U: Map<any, any> = new Map([[String.fromCharCode(116,97,117,0),false ], [String.fromCharCode(116,104,114,111,116,116,108,105,110,103,0),false ]]);
      let animation1 = auto_v6U.size <= 9609304;
      do {
         auto_v6U.set(`${auto_v6U.size}`, 1 + auto_v6U.size);
         if (animation1) {
            break;
         }
      } while ((Array.from(auto_v6U.keys()).includes(`${auto_v6U.size}`)) && animation1);
       let trophya = 3.0;
      while (2.25 == (4.11 + trophya)) {
         auto_v6U = new Map([[`${auto_v6U.size}`, 2]]);
         break;
      }
      halfB = !halfB;
   }
   for (let s = 0; s < 1; s++) {
       let reportv = true;
       let placeholder3: Map<any, any> = new Map([[String.fromCharCode(106,112,101,103,116,97,98,108,101,115,0),102], [String.fromCharCode(115,101,97,108,101,100,0),80], [String.fromCharCode(109,100,116,97,0),789]]);
       let layout7 = 1.0;
       let middleQ = String.fromCharCode(117,114,108,115,0);
          let paginationL = String.fromCharCode(105,108,108,101,103,97,108,0);
          let whatsappp = 0.0;
          let ajax6 = 4;
         reportv = whatsappp == 44.79 || ajax6 == 68;
         paginationL = `${paginationL.length}`;
         whatsappp += parseFloat(`${paginationL.length}`);
         middleQ += `${parseInt(`${layout7}`) / 2}`;
      for (let u = 0; u < 1; u++) {
         layout7 -= parseFloat(`${placeholder3.size & middleQ.length}`);
      }
      while (2.48 > (layout7 - 5.38) || 1.45 > (5.38 - layout7)) {
         middleQ += `${((reportv ? 2 : 4) % (Math.max(placeholder3.size, 1)))}`;
         break;
      }
          let searcha = 1.0;
          let login7 = String.fromCharCode(98,105,116,112,97,99,107,101,100,0);
          let grayS = 5.0;
         placeholder3 = new Map([[`${reportv}`, parseInt(`${grayS}`) | 1]]);
         searcha *= parseInt(`${searcha}`) - 2;
         login7 += `${3 * parseInt(`${searcha}`)}`;
         grayS *= parseFloat(`${1 * parseInt(`${searcha}`)}`);
         reportv = !reportv;
      let playJ = layout7 <= 4924645.0;
      do {
         layout7 /= Math.max((parseFloat(`${parseInt(`${layout7}`) << (Math.min(4, Math.abs((reportv ? 2 : 2))))}`)), 5);
         if (playJ) {
            break;
         }
      } while ((middleQ.length < parseInt(`${layout7}`)) && playJ);
      while (placeholder3.get(`${layout7}`) != null) {
         layout7 /= Math.max(4, (parseFloat(`${(reportv ? 2 : 2) - middleQ.length}`)));
         break;
      }
      morey = `${jnewst.length | 1}`;
   }
   let analyticsp = 6062737 >= streamingE;
   do {
      streamingE *= selectedx.length * 2;
      if (analyticsp) {
         break;
      }
   } while ((!jnewst.includes(streamingE)) && analyticsp);
        let cardWidth = Math.min(160, Math.floor(maxWidth));

   while (selectedx.startsWith(`${morey.length}`)) {
      selectedx += `${3 / (Math.max(5, jnewst.length))}`;
      break;
   }
   let othern = String.fromCharCode(111,57,54,54,0) == playK;
   do {
      playK += `${2 - morey.length}`;
      if (othern) {
         break;
      }
   } while ((playK.length <= morey.length) && othern);
      playK += `${2 << (Math.min(Math.abs(parseInt(`${bootsplashO}`)), 5))}`;
        const cardHeight = heightToWidthRatio * cardWidth;

       let indicatoro = String.fromCharCode(97,110,115,119,101,114,115,0);
       let delegate_lY = 3.0;
      while (indicatoro.startsWith(`${delegate_lY}`)) {
         indicatoro += `${indicatoro.length}`;
         break;
      }
          let calendar_: Array<any> = [411, 639, 891];
          let tickedy = String.fromCharCode(99,101,108,108,117,108,97,114,0);
          let sharedA = true;
         indicatoro += `${indicatoro.length}`;
         calendar_.push(((sharedA ? 4 : 5)));
         tickedy += `${((sharedA ? 4 : 4))}`;
      for (let v = 0; v < 1; v++) {
         delegate_lY += 1;
      }
          let basketballd = String.fromCharCode(100,99,112,114,101,100,0);
         indicatoro = `${indicatoro.length}`;
         basketballd = `${basketballd.length / (Math.max(2, 9))}`;
      while (indicatoro.length < 4) {
         delegate_lY /= Math.max(5, 2 - indicatoro.length);
         break;
      }
      while (5.54 == (delegate_lY + 1.92) && 1.92 == (delegate_lY + indicatoro.length)) {
         delegate_lY += (indicatoro == String.fromCharCode(113,0) ? indicatoro.length : parseInt(`${delegate_lY}`));
         break;
      }
      jnewst.push(parseInt(`${delegate_lY}`) + 3);
   for (let z = 0; z < 2; z++) {
      morey = `${(String.fromCharCode(76,0) == morey ? jnewst.length : morey.length)}`;
   }
   for (let x = 0; x < 3; x++) {
      morey += `${3 & parseInt(`${bootsplashO}`)}`;
   }
        const CARDS_PER_ROW = Math.floor(windowDim / cardWidth);

   while (playK.startsWith(`${u_titlel}`)) {
      playK = `${jnewst.length}`;
      break;
   }
      streamingE <<= Math.min(Math.abs(parseInt(`${bootsplashO}`)), 2);
   while (halfB) {
      halfB = u_titlel > 26.67;
      break;
   }
        let BTN_MARGIN_RIGHT = (windowDim - (CARDS_PER_ROW * cardWidth)) / (CARDS_PER_ROW - 1);

       let miniu = String.fromCharCode(103,98,114,112,0);
       let full0 = String.fromCharCode(112,114,101,115,115,0);
       let selectedC = true;
      while (3 >= full0.length) {
         full0 += `${((selectedC ? 4 : 4) / (Math.max(8, miniu.length)))}`;
         break;
      }
       let philippinesy = String.fromCharCode(120,109,117,108,116,105,112,108,101,0);
      if (!selectedC) {
         full0 += `${full0.length * 1}`;
      }
      if (philippinesy.startsWith(`${selectedC}`)) {
         selectedC = full0 == String.fromCharCode(52,0);
      }
      for (let c = 0; c < 3; c++) {
         full0 = `${miniu.length}`;
      }
      jnewst.push(jnewst.length);
   while (3.12 <= (playK.length - u_titlel)) {
       let weiboc = String.fromCharCode(99,105,114,99,108,101,0);
       let circleJ: Map<any, any> = new Map([[String.fromCharCode(116,111,97,115,116,115,0),22], [String.fromCharCode(115,117,98,115,116,114,97,99,116,101,100,0),688], [String.fromCharCode(98,111,100,121,115,105,100,0),718]]);
       let tick8 = String.fromCharCode(101,118,97,108,117,108,97,116,101,0);
      let otherQ = circleJ.size >= 9888654;
      do {
          let full9 = String.fromCharCode(115,104,111,114,116,102,108,111,97,116,0);
         circleJ.set(`${tick8}`, 1 * tick8.length);
         full9 += `${full9.length / 3}`;
         if (otherQ) {
            break;
         }
      } while (otherQ && (!weiboc.endsWith(`${circleJ.size}`)));
      let teamY = circleJ.size <= 6912631;
      do {
         circleJ.set(`${tick8}`, tick8.length + 3);
         if (teamY) {
            break;
         }
      } while (teamY && (1 <= (weiboc.length & circleJ.size) || 1 <= (weiboc.length & circleJ.size)));
       let showo = String.fromCharCode(115,116,97,103,101,0);
      while (showo.length <= tick8.length) {
         showo = `${weiboc.length}`;
         break;
      }
      if (!showo.startsWith(`${tick8.length}`)) {
          let team1 = 5.0;
          let productj: Array<any> = [284, 296];
          let temp3 = 2.0;
          let profileJ = false;
          let goalF = 0;
         showo = `${goalF}`;
         team1 -= (parseFloat(`${parseInt(`${temp3}`) | (profileJ ? 1 : 4)}`));
         productj = [((profileJ ? 3 : 5) | parseInt(`${team1}`))];
         temp3 += (parseFloat(`${(profileJ ? 3 : 4) + parseInt(`${temp3}`)}`));
         goalF &= ((profileJ ? 1 : 1) << (Math.min(Math.abs(parseInt(`${temp3}`)), 2)));
      }
      let paginationv = 9718828 >= circleJ.size;
      do {
          let basketball4: Array<any> = [410, 580];
          let ewardedw = true;
          let gesturej = String.fromCharCode(115,105,110,102,0);
          let sortW = 3.0;
         circleJ.set(showo, 1);
         basketball4 = [gesturej.length];
         ewardedw = !ewardedw;
         gesturej += `${((ewardedw ? 1 : 2))}`;
         sortW *= parseFloat(`${gesturej.length}`);
         if (paginationv) {
            break;
         }
      } while ((3 == circleJ.size) && paginationv);
       let description_3qM = String.fromCharCode(114,97,98,98,105,116,0);
          let areaj = 0;
          let pause3 = 1.0;
          let gesture0 = true;
         tick8 += `${showo.length}`;
         areaj %= Math.max(5, 3 / (Math.max(3, parseInt(`${pause3}`))));
         pause3 *= areaj | parseInt(`${pause3}`);
         gesture0 = areaj == 100 || !gesture0;
       let typingb = 2.0;
       let rewind6 = 3.0;
      u_titlel += (String.fromCharCode(86,0) == weiboc ? weiboc.length : selectedx.length);
      break;
   }
   let downloadingw = 4997336.0 >= bootsplashO;
   do {
       let loadingW = String.fromCharCode(97,117,116,111,114,101,115,105,122,101,115,0);
       let rulesX = String.fromCharCode(112,97,114,115,101,100,0);
       let starJ: Map<any, any> = new Map([[String.fromCharCode(114,112,99,0),190], [String.fromCharCode(102,105,108,108,101,114,0),715]]);
       let areao: Map<any, any> = new Map([[String.fromCharCode(98,114,105,103,104,116,110,101,115,115,0),311], [String.fromCharCode(102,111,117,114,99,99,0),899]]);
       let edit8 = String.fromCharCode(116,114,101,102,0);
      let refreshc = areao.size >= 7911189;
      do {
         areao.set(loadingW, 1 | edit8.length);
         if (refreshc) {
            break;
         }
      } while (((rulesX.length - 1) <= 5 && (rulesX.length - areao.size) <= 1) && refreshc);
         areao.set(`${rulesX}`, rulesX.length);
         edit8 += "2";
       let moviesU = String.fromCharCode(105,115,97,108,110,117,109,0);
       let selected9 = String.fromCharCode(115,105,103,110,97,116,117,114,101,115,0);
       let darki = 5;
      if (5 > (darki / 1)) {
          let description_wsz = String.fromCharCode(119,104,105,108,101,0);
          let middleware8: Map<any, any> = new Map([[String.fromCharCode(98,105,97,115,0),920], [String.fromCharCode(119,101,98,118,116,116,0),139]]);
          let langX: Map<any, any> = new Map([[String.fromCharCode(104,111,108,108,111,119,0),251], [String.fromCharCode(120,99,117,114,115,111,114,0),852]]);
         darki /= Math.max(1, 2);
         description_wsz += `${langX.size % 3}`;
         middleware8 = new Map([[`${middleware8.size}`, middleware8.size * description_wsz.length]]);
         langX.set(`${middleware8.size}`, middleware8.size);
      }
          let expand5: Array<any> = [604, 26, 626];
          let serviceU = String.fromCharCode(114,101,115,121,110,99,0);
          let turnf = String.fromCharCode(97,108,112,104,97,98,101,116,115,0);
         edit8 = `${(loadingW == String.fromCharCode(105,0) ? serviceU.length : loadingW.length)}`;
         expand5.push(3);
         serviceU = `${turnf.length | 2}`;
         turnf += `${expand5.length}`;
          let chinan = 2;
          let brightnesse = true;
          let lessh = 4.0;
         edit8 = `${starJ.size}`;
         chinan &= 3 * chinan;
         brightnesse = !brightnesse;
         lessh /= Math.max(5, 2);
         starJ.set(loadingW, loadingW.length);
       let countrym: Map<any, any> = new Map([[String.fromCharCode(98,121,116,101,99,111,100,101,118,116,97,98,0),369], [String.fromCharCode(97,99,114,111,110,121,109,115,0),840], [String.fromCharCode(114,101,117,112,108,111,97,100,101,100,0),295]]);
         moviesU = `${edit8.length | 3}`;
      for (let o = 0; o < 3; o++) {
         countrym = new Map([[`${countrym.size}`, countrym.size >> (Math.min(1, Math.abs(areao.size)))]]);
      }
      for (let w = 0; w < 2; w++) {
          let tail5: Map<any, any> = new Map([[String.fromCharCode(101,120,105,115,116,115,0),492], [String.fromCharCode(110,116,101,114,102,97,99,101,0),682], [String.fromCharCode(117,110,100,101,108,101,103,97,116,101,0),224]]);
          let lightl = String.fromCharCode(100,101,109,111,116,101,0);
          let chato: Array<any> = [189, 981];
         loadingW = `${loadingW.length & 2}`;
         tail5 = new Map([[`${tail5.size}`, lightl.length * 1]]);
         lightl += `${chato.length >> (Math.min(1, Math.abs(tail5.size)))}`;
         chato.push(chato.length / (Math.max(lightl.length, 1)));
      }
      if (2 == (darki << (Math.min(Math.abs(4), 4))) || (darki << (Math.min(Math.abs(4), 5))) == 2) {
         loadingW += `${(loadingW == String.fromCharCode(50,0) ? countrym.size : loadingW.length)}`;
      }
         starJ = new Map([[`${starJ.size}`, 1 << (Math.min(4, Math.abs(starJ.size)))]]);
      bootsplashO -= parseInt(`${bootsplashO}`);
      if (downloadingw) {
         break;
      }
   } while ((bootsplashO > selectedx.length) && downloadingw);
        if (BTN_MARGIN_RIGHT > 16) {

      playK = `${(playK.length << (Math.min(2, Math.abs((whatsapp3 ? 1 : 4)))))}`;
       let signinupF: Array<any> = [177, 908];
       let emojiG = String.fromCharCode(99,111,110,99,114,101,116,101,0);
       let acceptedP = String.fromCharCode(115,111,100,105,115,99,111,110,110,101,99,116,0);
      if (emojiG.includes(`${signinupF.length}`)) {
         emojiG = `${signinupF.length * emojiG.length}`;
      }
         signinupF.push((emojiG == String.fromCharCode(73,0) ? emojiG.length : signinupF.length));
      playK = `${jnewst.length & signinupF.length}`;
   for (let o = 0; o < 1; o++) {
       let footballz = 0.0;
       let default_lsN = String.fromCharCode(114,101,100,101,101,109,0);
       let analytich = 1.0;
          let close3 = 1.0;
          let commonW = String.fromCharCode(119,97,118,101,115,0);
          let screenj = true;
         default_lsN = `${1 - default_lsN.length}`;
         close3 -= parseFloat(`${1}`);
         commonW += `${commonW.length}`;
         screenj = !commonW.includes(`${screenj}`);
       let gesturesQ = String.fromCharCode(105,100,102,97,0);
      if (gesturesQ == String.fromCharCode(107,0)) {
         default_lsN += `${2 >> (Math.min(4, gesturesQ.length))}`;
      }
      for (let i = 0; i < 2; i++) {
         gesturesQ = `${parseInt(`${analytich}`)}`;
      }
         default_lsN += "2";
      let episodesM = analytich >= 7276957.0;
      do {
         analytich -= default_lsN.length + parseInt(`${analytich}`);
         if (episodesM) {
            break;
         }
      } while (episodesM && ((parseInt(`${analytich}`) + default_lsN.length) >= 5));
          let routerU = String.fromCharCode(97,114,101,118,101,114,115,101,0);
          let screenw = true;
          let descP = String.fromCharCode(118,109,110,99,0);
         footballz *= ((screenw ? 1 : 1));
         routerU = `${routerU.length >> (Math.min(Math.abs(2), 5))}`;
         screenw = 76 == descP.length;
         descP = `${routerU.length >> (Math.min(Math.abs(2), 4))}`;
         default_lsN = `${parseInt(`${footballz}`) * parseInt(`${analytich}`)}`;
      let formT = 7406554.0 <= analytich;
      do {
         analytich -= (String.fromCharCode(114,0) == gesturesQ ? parseInt(`${analytich}`) : gesturesQ.length);
         if (formT) {
            break;
         }
      } while (((analytich / 3.51) < 4.70) && formT);
      morey = "3";
   }
            const excess = (BTN_MARGIN_RIGHT - 16) * (CARDS_PER_ROW - 1);

      selectedx = `${1 % (Math.max(2, streamingE))}`;
      selectedx = `${parseInt(`${u_titlel}`)}`;
      u_titlel += 3;
            BTN_MARGIN_RIGHT = 16;

       let controlb: Array<any> = [String.fromCharCode(98,115,101,114,118,101,114,0), String.fromCharCode(116,109,112,111,0), String.fromCharCode(105,110,116,101,114,120,0)];
       let containerb = String.fromCharCode(100,111,119,110,108,111,97,100,97,98,108,101,0);
      if (4 == controlb.length) {
         containerb += `${containerb.length}`;
      }
      if (!containerb.includes(`${controlb.length}`)) {
         controlb.push(3 | controlb.length);
      }
       let mathn: Map<any, any> = new Map([[String.fromCharCode(118,105,115,105,98,105,116,121,0),String.fromCharCode(117,110,112,105,110,0)], [String.fromCharCode(99,97,112,97,98,105,108,105,116,105,101,115,0),String.fromCharCode(101,110,99,104,0)], [String.fromCharCode(105,110,103,114,101,115,115,0),String.fromCharCode(99,111,109,109,97,110,100,0)]]);
       let mappingR: Map<any, any> = new Map([[String.fromCharCode(115,116,114,105,110,103,105,102,121,0),true ], [String.fromCharCode(109,111,122,97,114,116,0),false ], [String.fromCharCode(111,110,101,0),true ]]);
         controlb.push(controlb.length);
          let short_jtg = String.fromCharCode(102,108,97,116,110,101,115,115,0);
         controlb = [short_jtg.length | containerb.length];
         containerb = `${mathn.size}`;
      jnewst = [streamingE];
      playK = `${playK.length & 1}`;
   let gpayY = 8748251.0 <= bootsplashO;
   do {
       let ranky = 3;
          let assistK = String.fromCharCode(101,115,99,97,112,101,100,0);
          let nalyticsW = String.fromCharCode(112,114,101,114,101,108,101,97,115,101,0);
          let videoo: Map<any, any> = new Map([[String.fromCharCode(101,111,99,100,0),String.fromCharCode(102,105,110,100,0)], [String.fromCharCode(114,101,108,97,121,111,117,116,0),String.fromCharCode(98,108,111,99,107,100,115,112,0)], [String.fromCharCode(100,117,97,108,105,110,112,117,116,0),String.fromCharCode(100,121,97,100,105,99,0)]]);
         ranky <<= Math.min(Math.abs(ranky), 1);
         assistK += `${nalyticsW.length % 3}`;
         nalyticsW = `${videoo.size}`;
         videoo = new Map([[nalyticsW, nalyticsW.length * 2]]);
      for (let w = 0; w < 1; w++) {
         ranky *= ranky >> (Math.min(Math.abs(3), 5));
      }
         ranky += ranky;
      bootsplashO += morey.length;
      if (gpayY) {
         break;
      }
   } while (((bootsplashO + 5.23) <= 3.33 || bootsplashO <= 5.23) && gpayY);
            cardWidth += Math.floor(excess / CARDS_PER_ROW)  
        }

        setCardsPerRow(CARDS_PER_ROW);

   while (jnewst.includes(bootsplashO)) {
      jnewst.push(parseInt(`${u_titlel}`) << (Math.min(4, Math.abs(2))));
      break;
   }
   let loadingi = bootsplashO >= 8738775.0;
   do {
       let selectedW: Map<any, any> = new Map([[String.fromCharCode(115,101,109,97,112,104,111,114,101,0),108], [String.fromCharCode(101,105,103,104,116,0),383]]);
       let whitec = 4.0;
       let sportA = 4.0;
       let analyticse = 2;
       let greenW = String.fromCharCode(97,98,111,117,116,115,0);
       let overlay0 = 5;
      for (let o = 0; o < 1; o++) {
          let clearx: Array<any> = [String.fromCharCode(100,101,112,114,101,99,97,116,105,111,110,0), String.fromCharCode(98,105,116,109,97,115,107,0), String.fromCharCode(100,105,115,112,111,115,105,116,105,111,110,0)];
         analyticse ^= analyticse;
         clearx = [3];
      }
          let settingZ = String.fromCharCode(116,108,117,116,0);
          let score5 = 2.0;
         whitec *= greenW.length;
         settingZ = `${parseInt(`${score5}`) | settingZ.length}`;
         score5 /= Math.max(parseFloat(`${1 & parseInt(`${score5}`)}`), 2);
       let main_mW: Array<any> = [146, 953];
       let basketball9 = String.fromCharCode(111,114,100,101,114,0);
         main_mW.push(analyticse);
      let filterv = sportA <= 5695753.0;
      do {
         sportA /= Math.max(3, analyticse);
         if (filterv) {
            break;
         }
      } while ((5 > (parseInt(`${sportA}`) * basketball9.length) && 5 > (parseInt(`${sportA}`) * basketball9.length)) && filterv);
       let arrowR = 3.0;
         analyticse &= overlay0;
          let modelsl = String.fromCharCode(100,101,103,114,97,100,97,116,105,111,110,0);
         whitec += greenW.length;
         modelsl += `${modelsl.length / (Math.max(9, modelsl.length))}`;
       let window_h1 = String.fromCharCode(103,114,97,100,105,101,110,116,115,0);
       let whiten = String.fromCharCode(112,111,114,116,97,105,116,0);
       let countdownV: Array<any> = [653, 609, 226];
       let episodep: Array<any> = [748, 306];
         basketball9 += `${whiten.length}`;
       let custom7 = String.fromCharCode(116,111,111,108,115,0);
       let long_iz2 = String.fromCharCode(109,97,120,0);
         window_h1 = `${analyticse}`;
      bootsplashO *= (1 / (Math.max(3, (whatsapp3 ? 5 : 4))));
      selectedW.set(`${selectedW.size}`, 1);
      if (loadingi) {
         break;
      }
   } while (loadingi && (bootsplashO > 5.53));
       let register_zr8: Map<any, any> = new Map([[String.fromCharCode(97,117,116,111,99,111,114,114,101,108,97,116,105,111,110,0),1], [String.fromCharCode(104,97,115,104,116,97,98,108,101,0),222]]);
       let vietnamL = 3;
      while (register_zr8.get(`${vietnamL}`) == null) {
         vietnamL -= 1;
         break;
      }
      while (register_zr8.get(`${vietnamL}`) == null) {
         register_zr8.set(`${vietnamL}`, register_zr8.size);
         break;
      }
      let changeZ = 9842502 >= vietnamL;
      do {
          let referrerG = 4.0;
          let progress7 = String.fromCharCode(117,105,110,116,108,101,0);
          let referrerR = 0.0;
          let relatedW: Map<any, any> = new Map([[String.fromCharCode(112,111,115,116,105,110,103,0),String.fromCharCode(101,110,117,109,115,0)], [String.fromCharCode(99,97,116,97,112,117,108,116,0),String.fromCharCode(99,108,97,115,104,0)], [String.fromCharCode(115,119,105,116,99,104,0),String.fromCharCode(99,121,99,108,105,99,0)]]);
         vietnamL >>= Math.min(progress7.length, 5);
         referrerG /= Math.max(3, parseFloat(`${parseInt(`${referrerR}`) - 3}`));
         progress7 += `${1 + relatedW.size}`;
         referrerR += parseFloat(`${3}`);
         relatedW = new Map([[`${referrerG}`, 3 & parseInt(`${referrerR}`)]]);
         if (changeZ) {
            break;
         }
      } while ((register_zr8.get(`${vietnamL}`) != null) && changeZ);
      for (let v = 0; v < 2; v++) {
         register_zr8 = new Map([[`${register_zr8.size}`, register_zr8.size]]);
      }
          let logout0 = String.fromCharCode(117,112,99,97,108,108,0);
          let xvodj: Array<any> = [221, 249];
          let project7 = 1;
         vietnamL %= Math.max(5, 3);
         logout0 += `${logout0.length / (Math.max(3, 6))}`;
         xvodj = [1];
         project7 |= 1;
         register_zr8.set(`${vietnamL}`, vietnamL / 1);
      jnewst = [morey.length];
        setMarginRight(BTN_MARGIN_RIGHT);

       let detailz = 4;
       let plashh = false;
       let commonP: Array<any> = [104, 438, 280];
      let closeB = detailz <= 6292068;
      do {
         detailz |= detailz;
         if (closeB) {
            break;
         }
      } while (((3 << (Math.min(3, Math.abs(detailz)))) == 1 || !plashh) && closeB);
      for (let w = 0; w < 3; w++) {
          let stationsk = true;
          let sheet9: Map<any, any> = new Map([[String.fromCharCode(116,102,120,100,0),151], [String.fromCharCode(110,101,103,111,116,105,97,116,101,100,0),20], [String.fromCharCode(97,99,99,101,115,115,111,114,0),646]]);
          let carousel8 = String.fromCharCode(116,104,101,110,0);
         detailz ^= 2 / (Math.max(7, detailz));
         stationsk = 86 > carousel8.length;
         sheet9 = new Map([[`${sheet9.size}`, sheet9.size / (Math.max(carousel8.length, 5))]]);
      }
      let giftS = detailz >= 9570952;
      do {
         detailz |= 2;
         if (giftS) {
            break;
         }
      } while (giftS && (2 >= (1 | detailz) && (detailz | commonP.length) >= 1));
      if (!plashh) {
         plashh = !plashh;
      }
      while ((2 | detailz) <= 4 && (2 | commonP.length) <= 2) {
         detailz -= 1;
         break;
      }
         detailz &= detailz;
      if (2 == (4 << (Math.min(3, Math.abs(detailz)))) || plashh) {
          let handlern = String.fromCharCode(101,100,105,116,0);
          let whistlen = String.fromCharCode(100,101,116,101,114,109,105,110,101,100,0);
          let internetu = String.fromCharCode(109,97,108,108,111,99,122,0);
          let info_ = String.fromCharCode(112,114,101,109,117,108,116,115,116,114,97,105,103,104,116,0);
         detailz *= whistlen.length << (Math.min(internetu.length, 5));
         handlern = `${handlern.length << (Math.min(3, info_.length))}`;
         whistlen = `${handlern.length ^ 1}`;
         internetu += `${(info_ == String.fromCharCode(72,0) ? handlern.length : info_.length)}`;
      }
         plashh = detailz > 66;
         detailz &= 2 ^ detailz;
      morey += "2";
        setCardWidth(cardWidth);
        setCardHeight(cardHeight);
    }, []);
    
    return (
        <View style={styles.vodList}>
            {
                vods &&
                vods.slice(0, numOfRows * cardsPerRow).map((vod, idx) => (
                    <VodCard
                        key={`${vod.vod_id}`}
                        vod_name={vod?.vod_name}
                        vod_pic={vod?.vod_pic}
                        showInfo={vod?.vod_remarks}
                        vodImageStyle={{
                            width: cardWidth,
                            height: cardHeight,
                            marginRight: (idx % cardsPerRow) === cardsPerRow - 1 ? 0 : marginRight,
                        }}
                        vodCardContainerStyle={{
                            marginBottom: Math.min(marginRight, 14)
                        }}
                        onPress={() => {
                            if(onPress){
                                onPress();
                            }
                            dispatch(playVod(vod));
                            navigation.navigate('播放IOS', {
                                vod_id: vod?.vod_id,
                            });
                        }}
                        index={idx}
                    />
                ))
            }
        </View>
    )
}

export default memo(VodListVertical);

const styles = StyleSheet.create({
    vodList: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
})