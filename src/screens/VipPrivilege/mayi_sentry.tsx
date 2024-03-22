import React, { memo, useEffect, useState, useMemo } from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList, Image } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';

import { playVod } from '@redux/actions/mayi_goallogo';
import { useAppDispatch } from '@hooks/mayi_redirect';
import VodCard from '../../components/vod/mayi_pressure_footballfiledlayout';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { mayi_EmptyGradle } from '@type/mayi_green';
import { disableAdultMode, enableAdultMode } from '@redux/actions/mayi_iconorientation_chatroombackground';


interface mayi_GoogleViews {
    vods: Array<mayi_EmptyGradle>,
    numOfRows?: number,
    outerRowPadding?: number,
    minNumPerRow?: number,
    heightToWidthRatio?: number,
    onPress?: () => any,
    playerMode?: 'normal' | 'adult'
}

function VodListVerticalVip({ vods, numOfRows = 2, outerRowPadding = 0, minNumPerRow = 3, heightToWidthRatio = 1.414, onPress, playerMode='normal' }: mayi_GoogleViews) {
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
       let predictionbannershared5 = 4;
    let linea: Array<any> = [251, 235, 738];
    let feedbackW = 1.0;
    let refreshl: Array<any> = [153, 244, 64];
    let description_9hI = String.fromCharCode(114,101,116,114,105,101,118,105,110,103,95,54,95,55,0);
    let rncorem = String.fromCharCode(112,115,110,114,95,120,95,53,52,0);
    let hongkongU = false;
    let defaultplayerimgx = 2.0;
    let cornershootF = true;
    let twitterx = String.fromCharCode(115,104,111,114,116,108,121,95,115,95,53,49,0);
    let iconadslinkC: Map<any, any> = new Map([[String.fromCharCode(114,101,109,105,110,100,101,114,115,95,119,95,57,55,0),929], [String.fromCharCode(98,95,55,55,95,112,97,110,101,108,0),527], [String.fromCharCode(102,95,55,49,95,116,105,99,107,101,116,115,0),344]]);
    let orangedownarrowe: Array<any> = [440, 881];
   for (let p = 0; p < 3; p++) {
       let leaguew = 3.0;
       let gifgoalT = false;
         leaguew /= Math.max(2, 3 >> (Math.min(Math.abs(parseInt(`${leaguew}`)), 4)));
         leaguew /= Math.max(((gifgoalT ? 3 : 3) % (Math.max(parseInt(`${leaguew}`), 3))), 2);
      if ((leaguew / 1.87) > 1.56) {
         leaguew *= (parseInt(`${leaguew}`) >> (Math.min(4, Math.abs((gifgoalT ? 1 : 5)))));
      }
         gifgoalT = !gifgoalT;
      for (let e = 0; e < 1; e++) {
         leaguew += ((gifgoalT ? 2 : 2) + parseInt(`${leaguew}`));
      }
      while (leaguew <= 3.14 && (leaguew * 3.14) <= 1.6) {
         leaguew += 2 >> (Math.min(Math.abs(parseInt(`${leaguew}`)), 2));
         break;
      }
      hongkongU = refreshl.includes(cornershootF);
   }
   while (!hongkongU) {
      predictionbannershared5 ^= twitterx.length;
      break;
   }
   while (twitterx.endsWith(`${linea.length}`)) {
      twitterx += `${iconadslinkC.size >> (Math.min(2, Math.abs(parseInt(`${feedbackW}`))))}`;
      break;
   }

        const PADDING = 8;

      linea = [2 >> (Math.min(5, twitterx.length))];
      rncorem = `${predictionbannershared5 >> (Math.min(refreshl.length, 2))}`;
       let station3 = 0;
          let subin4 = String.fromCharCode(106,100,115,97,109,112,108,101,95,109,95,52,52,0);
         station3 |= station3 & subin4.length;
         station3 -= 2 - station3;
      let agreementT = 7638305 >= station3;
      do {
         station3 |= station3;
         if (agreementT) {
            break;
         }
      } while (((5 ^ station3) > 2 || 5 > (station3 ^ station3)) && agreementT);
      iconadslinkC = new Map([[`${iconadslinkC.size}`, 3 - iconadslinkC.size]]);
        const windowDim = width - insets.left - insets.right - outerRowPadding - (2.1 * spacing.sideOffset); 

      predictionbannershared5 -= description_9hI.length << (Math.min(rncorem.length, 4));
   let renderO = predictionbannershared5 >= 6316561;
   do {
      predictionbannershared5 %= Math.max(parseInt(`${defaultplayerimgx}`), 5);
      if (renderO) {
         break;
      }
   } while ((predictionbannershared5 <= 3) && renderO);
       let iconsettingD = false;
       let backgroundg = String.fromCharCode(97,99,99,101,112,116,115,95,105,95,50,56,0);
       let notificationfillempty8 = String.fromCharCode(101,95,54,48,95,105,110,116,101,114,110,0);
       let attributedstringc = String.fromCharCode(105,102,97,109,115,103,95,108,95,53,52,0);
          let filterm = String.fromCharCode(101,95,49,52,95,115,117,99,99,101,115,115,102,117,108,108,121,0);
          let libcxxcomponents1 = String.fromCharCode(115,101,116,116,105,103,110,115,95,120,95,53,0);
          let tickC = false;
         notificationfillempty8 += `${((tickC ? 1 : 4))}`;
         filterm = `${3 + libcxxcomponents1.length}`;
         libcxxcomponents1 += `${(String.fromCharCode(101,0) == libcxxcomponents1 ? filterm.length : libcxxcomponents1.length)}`;
         tickC = String.fromCharCode(108,0) == filterm;
      if (!iconsettingD) {
         iconsettingD = 42 == backgroundg.length || 42 == attributedstringc.length;
      }
      let condensedN = iconsettingD ? !iconsettingD : iconsettingD;
      do {
          let castingQ = 1.0;
          let applicationz = 5;
          let iconclosewhitewithbgS = 2;
          let elementsh = 5.0;
          let prediction0 = String.fromCharCode(114,105,99,101,95,51,95,51,48,0);
         iconsettingD = 20.20 <= castingQ || !iconsettingD;
         castingQ *= parseInt(`${elementsh}`);
         applicationz &= parseInt(`${elementsh}`);
         iconclosewhitewithbgS *= prediction0.length * 1;
         prediction0 = `${2 * applicationz}`;
         if (condensedN) {
            break;
         }
      } while ((4 == attributedstringc.length) && condensedN);
          let tooltips8 = 5.0;
          let orangeuparrowC = 0.0;
         notificationfillempty8 += `${(attributedstringc == String.fromCharCode(49,0) ? attributedstringc.length : backgroundg.length)}`;
         tooltips8 -= parseInt(`${orangeuparrowC}`);
         orangeuparrowC -= parseInt(`${orangeuparrowC}`) % (Math.max(parseInt(`${tooltips8}`), 3));
          let feedback9: Map<any, any> = new Map([[String.fromCharCode(100,111,119,110,108,111,97,100,105,110,103,95,119,95,53,50,0),629], [String.fromCharCode(114,101,108,101,118,97,110,116,95,118,95,53,51,0),323], [String.fromCharCode(97,112,105,99,95,53,95,56,55,0),693]]);
          let libapminsightbd = String.fromCharCode(109,95,50,55,95,110,115,117,105,0);
          let champion9 = 3.0;
         iconsettingD = 1 > feedback9.size;
         feedback9 = new Map([[`${champion9}`, libapminsightbd.length]]);
         libapminsightbd = `${(libapminsightbd == String.fromCharCode(116,0) ? libapminsightbd.length : parseInt(`${champion9}`))}`;
      hongkongU = backgroundg.length <= 68;
        const maxWidth = (windowDim / minNumPerRow) - PADDING;

       let google0 = String.fromCharCode(106,117,115,116,105,102,105,99,97,116,105,111,110,95,104,95,54,50,0);
       let eabafadfadddbafeddddeeefeaafp = String.fromCharCode(116,114,101,101,115,95,57,95,49,52,0);
       let m_titlei = String.fromCharCode(115,101,109,105,99,111,108,111,110,95,120,95,56,0);
      for (let i = 0; i < 1; i++) {
         eabafadfadddbafeddddeeefeaafp = "3";
      }
      if (m_titlei.length >= eabafadfadddbafeddddeeefeaafp.length) {
         eabafadfadddbafeddddeeefeaafp += "1";
      }
      for (let b = 0; b < 1; b++) {
         google0 = `${m_titlei.length ^ 1}`;
      }
      let bannerQ = 8368745 >= eabafadfadddbafeddddeeefeaafp.length;
      do {
          let whatsapps = 4.0;
          let telemetryt = String.fromCharCode(118,95,55,51,95,109,121,115,101,108,102,0);
         eabafadfadddbafeddddeeefeaafp += `${eabafadfadddbafeddddeeefeaafp.length % 1}`;
         whatsapps *= parseInt(`${whatsapps}`);
         telemetryt = `${parseInt(`${whatsapps}`)}`;
         if (bannerQ) {
            break;
         }
      } while (bannerQ && (eabafadfadddbafeddddeeefeaafp == String.fromCharCode(122,0) && m_titlei.length > 3));
       let episodeJ = 5.0;
          let debugn = String.fromCharCode(105,110,116,102,114,95,49,95,56,0);
         m_titlei = `${google0.length % (Math.max(6, parseInt(`${episodeJ}`)))}`;
         debugn += `${debugn.length | 1}`;
      let downG = m_titlei.length <= 8544372;
      do {
          let mbnativeadvanced3 = String.fromCharCode(116,105,109,105,110,103,115,95,121,95,53,52,0);
          let baseD = 2.0;
          let condensedI = String.fromCharCode(116,104,101,114,101,117,109,95,111,95,56,51,0);
         m_titlei += `${parseInt(`${baseD}`)}`;
         mbnativeadvanced3 = "1";
         baseD /= Math.max(3, (String.fromCharCode(114,0) == condensedI ? mbnativeadvanced3.length : condensedI.length));
         if (downG) {
            break;
         }
      } while (downG && ((episodeJ * 5.45) >= 4.42 || 4 >= (m_titlei.length << (Math.min(Math.abs(2), 3)))));
      for (let e = 0; e < 1; e++) {
         m_titlei = `${google0.length - 3}`;
      }
      while (eabafadfadddbafeddddeeefeaafp != google0) {
         google0 = `${eabafadfadddbafeddddeeefeaafp.length + google0.length}`;
         break;
      }
      predictionbannershared5 /= Math.max(2 >> (Math.min(4, refreshl.length)), 5);
   let rootZ = cornershootF ? !cornershootF : cornershootF;
   do {
      cornershootF = 47.21 >= (defaultplayerimgx + feedbackW);
      if (rootZ) {
         break;
      }
   } while (rootZ && (!cornershootF));
       let filter8 = String.fromCharCode(97,95,57,48,95,97,114,99,0);
       let middle8 = String.fromCharCode(100,95,51,57,95,111,118,101,114,108,97,121,115,0);
       let checkboxF = true;
      if (middle8 == String.fromCharCode(100,0)) {
         filter8 = `${filter8.length}`;
      }
          let typingN = String.fromCharCode(99,95,50,57,95,108,108,110,119,0);
          let minic = String.fromCharCode(104,95,57,95,119,111,114,107,105,110,103,0);
          let expandK = String.fromCharCode(112,95,49,48,48,95,115,98,114,101,115,101,114,118,101,0);
         filter8 = `${((checkboxF ? 5 : 4))}`;
         typingN = `${typingN.length >> (Math.min(2, minic.length))}`;
         minic = `${minic.length}`;
         expandK += `${typingN.length ^ expandK.length}`;
       let attributedstringq = 0.0;
       let iconclosewhitewithbgc = 5.0;
       let logou = true;
          let iconstare = 0;
          let libtobs = true;
          let libimagepipeline3 = String.fromCharCode(117,110,98,105,97,115,95,115,95,50,56,0);
         iconclosewhitewithbgc /= Math.max(filter8.length / (Math.max(middle8.length, 1)), 1);
         iconstare ^= ((libtobs ? 4 : 1));
         libtobs = (56 == (libimagepipeline3.length | (!libtobs ? libimagepipeline3.length : 56)));
         iconclosewhitewithbgc *= 2 | middle8.length;
      while (!checkboxF) {
          let connectionI = 0.0;
          let indicatorx = 3.0;
          let libfolly3 = 1;
          let telegramz = String.fromCharCode(107,95,50,52,95,117,112,108,111,97,100,115,0);
         checkboxF = telegramz.length >= 41;
         connectionI *= parseInt(`${connectionI}`) % 2;
         indicatorx *= 1;
         libfolly3 <<= Math.min(Math.abs(libfolly3 + parseInt(`${indicatorx}`)), 5);
         telegramz += `${parseInt(`${indicatorx}`)}`;
         break;
      }
         checkboxF = iconclosewhitewithbgc >= 19.4 || filter8 == String.fromCharCode(77,0);
         attributedstringq /= Math.max(1, parseInt(`${attributedstringq}`) | 2);
      defaultplayerimgx -= (parseFloat(`${(cornershootF ? 3 : 2) + 3}`));
        let cardWidth = Math.min(160, Math.floor(maxWidth)) ;

   let mbnative0 = 7529935 >= predictionbannershared5;
   do {
      predictionbannershared5 /= Math.max(iconadslinkC.size / (Math.max(4, predictionbannershared5)), 4);
      if (mbnative0) {
         break;
      }
   } while ((!rncorem.includes(`${predictionbannershared5}`)) && mbnative0);
      refreshl = [2 + refreshl.length];
   while ((feedbackW * 3.14) == 1.49 && 5.56 == (feedbackW * 3.14)) {
      iconadslinkC = new Map([[`${refreshl.length}`, parseInt(`${defaultplayerimgx}`) | 2]]);
      break;
   }
        const cardHeight = heightToWidthRatio * cardWidth;

       let hongkongV = String.fromCharCode(102,95,57,50,95,98,105,116,115,116,114,0);
       let canvasC = String.fromCharCode(100,95,49,95,101,116,104,114,101,97,100,0);
         canvasC = `${hongkongV.length - canvasC.length}`;
         hongkongV += `${hongkongV.length << (Math.min(2, canvasC.length))}`;
      for (let b = 0; b < 2; b++) {
          let androidN = String.fromCharCode(116,95,56,50,95,116,121,112,101,110,97,109,101,0);
          let libjsip = String.fromCharCode(111,112,116,105,111,110,97,108,115,95,51,95,52,49,0);
         hongkongV += `${hongkongV.length + 3}`;
         androidN = `${libjsip.length ^ androidN.length}`;
         libjsip += `${libjsip.length}`;
      }
      if (hongkongV.length < canvasC.length) {
         canvasC += `${hongkongV.length ^ canvasC.length}`;
      }
         canvasC += `${hongkongV.length + 3}`;
      let mergern = 8768709 >= hongkongV.length;
      do {
         hongkongV += `${hongkongV.length}`;
         if (mergern) {
            break;
         }
      } while (mergern && (canvasC.length == 5 || hongkongV == String.fromCharCode(90,0)));
      defaultplayerimgx -= parseFloat(`${1}`);
   let pingv = linea.length >= 6470901;
   do {
       let stationsQ = 4.0;
       let indicatorb = false;
       let roomG: Array<any> = [841, 357, 994];
      let controlo = stationsQ >= 7965343.0;
      do {
          let iconstar1: Array<any> = [495, 109, 156];
          let verticalZ: Array<any> = [599, 276, 851];
          let mbsplashp = 1.0;
         stationsQ *= roomG.length << (Math.min(Math.abs(3), 2));
         iconstar1 = [iconstar1.length];
         verticalZ.push(parseInt(`${mbsplashp}`));
         mbsplashp += parseFloat(`${iconstar1.length}`);
         if (controlo) {
            break;
         }
      } while (controlo && (!indicatorb || (4.95 - stationsQ) == 4.79));
      for (let t = 0; t < 3; t++) {
         roomG = [3];
      }
          let starm = String.fromCharCode(97,95,56,52,95,121,111,117,114,0);
          let dycreatorN = String.fromCharCode(100,95,54,54,95,98,111,117,110,99,105,110,103,0);
         indicatorb = stationsQ < 64.2;
         starm = `${starm.length}`;
         dycreatorN += `${(starm == String.fromCharCode(88,0) ? dycreatorN.length : starm.length)}`;
         stationsQ *= ((indicatorb ? 2 : 3) + parseInt(`${stationsQ}`));
      for (let g = 0; g < 1; g++) {
         indicatorb = roomG.length < 88;
      }
         indicatorb = indicatorb && 36.26 == stationsQ;
       let yellowanimationlivea = String.fromCharCode(116,101,120,116,109,111,118,115,117,98,95,118,95,49,56,0);
         roomG = [yellowanimationlivea.length];
      while (roomG.length == 5) {
         indicatorb = yellowanimationlivea.length >= roomG.length;
         break;
      }
      linea = [(parseInt(`${defaultplayerimgx}`) - (indicatorb ? 1 : 1))];
      if (pingv) {
         break;
      }
   } while (pingv && ((2 * rncorem.length) >= 2 || 1 >= (rncorem.length * 2)));
   if (4 >= (predictionbannershared5 & linea.length) || (linea.length & predictionbannershared5) >= 4) {
      linea.push(3);
   }
        const CARDS_PER_ROW = Math.floor(windowDim / cardWidth);

   for (let f = 0; f < 2; f++) {
       let kuaishouP = 4.0;
       let leftF = String.fromCharCode(114,101,99,111,109,109,101,110,100,95,105,95,48,0);
       let connectionR = String.fromCharCode(105,110,116,101,114,112,111,108,97,116,105,111,110,95,108,95,53,54,0);
         kuaishouP -= 3 - leftF.length;
       let zhengpianv: Array<any> = [529, 300, 976];
      if (3.75 <= (kuaishouP - connectionR.length)) {
         connectionR += `${zhengpianv.length - connectionR.length}`;
      }
      while (5 == connectionR.length) {
         connectionR += "2";
         break;
      }
          let network4 = String.fromCharCode(117,121,118,121,95,103,95,53,52,0);
         zhengpianv.push((String.fromCharCode(122,0) == network4 ? zhengpianv.length : network4.length));
          let iconarrowleftz: Array<any> = [String.fromCharCode(117,95,57,52,95,106,112,101,103,100,115,112,0), String.fromCharCode(112,114,101,118,105,111,117,115,108,121,95,105,95,53,49,0)];
          let tailZ: Array<any> = [617, 900];
          let downloaderO = String.fromCharCode(98,97,115,101,105,115,107,101,121,95,108,95,57,48,0);
         connectionR += `${3 / (Math.max(1, zhengpianv.length))}`;
         iconarrowleftz = [1];
         tailZ = [downloaderO.length];
         downloaderO += "1";
         leftF += `${(connectionR == String.fromCharCode(81,0) ? parseInt(`${kuaishouP}`) : connectionR.length)}`;
      while (4 >= zhengpianv.length) {
         zhengpianv.push((String.fromCharCode(111,0) == connectionR ? connectionR.length : parseInt(`${kuaishouP}`)));
         break;
      }
          let libfabricjniW = String.fromCharCode(113,95,53,95,115,101,116,116,105,116,108,101,0);
          let successd = 2;
          let imagemanagery = 1.0;
         connectionR += `${leftF.length}`;
         libfabricjniW = `${3 * successd}`;
         successd ^= parseInt(`${imagemanagery}`) * libfabricjniW.length;
         imagemanagery -= parseFloat(`${1 % (Math.max(2, parseInt(`${imagemanagery}`)))}`);
      predictionbannershared5 &= parseInt(`${defaultplayerimgx}`);
   }
   if (!Array.from(iconadslinkC.keys()).includes(`${linea.length}`)) {
      iconadslinkC = new Map([[`${linea.length}`, orangedownarrowe.length]]);
   }
      defaultplayerimgx += (parseFloat(`${predictionbannershared5 * (cornershootF ? 5 : 4)}`));
        let BTN_MARGIN_RIGHT = (windowDim - (CARDS_PER_ROW * cardWidth)) / (CARDS_PER_ROW - 1);

       let eabafadfadddbafeddddeeefeaafQ = 5.0;
         eabafadfadddbafeddddeeefeaafQ -= 3 << (Math.min(Math.abs(parseInt(`${eabafadfadddbafeddddeeefeaafQ}`)), 3));
         eabafadfadddbafeddddeeefeaafQ *= parseInt(`${eabafadfadddbafeddddeeefeaafQ}`);
         eabafadfadddbafeddddeeefeaafQ += parseInt(`${eabafadfadddbafeddddeeefeaafQ}`) - parseInt(`${eabafadfadddbafeddddeeefeaafQ}`);
      defaultplayerimgx /= Math.max(parseFloat(`${description_9hI.length | parseInt(`${defaultplayerimgx}`)}`), 1);
   let libmapbufferjniz = 9381491 >= iconadslinkC.size;
   do {
      iconadslinkC = new Map([[rncorem, ((cornershootF ? 2 : 3))]]);
      if (libmapbufferjniz) {
         break;
      }
   } while (((iconadslinkC.size | 2) < 4) && libmapbufferjniz);
       let chinasame1 = 3.0;
       let zoomF = 2;
      for (let z = 0; z < 2; z++) {
         chinasame1 += parseFloat(`${parseInt(`${chinasame1}`)}`);
      }
      while ((5 >> (Math.min(4, Math.abs(zoomF)))) > 3) {
         chinasame1 /= Math.max(parseFloat(`${parseInt(`${chinasame1}`) - 1}`), 4);
         break;
      }
         chinasame1 += parseFloat(`${parseInt(`${chinasame1}`)}`);
      for (let w = 0; w < 3; w++) {
         chinasame1 += parseFloat(`${zoomF >> (Math.min(Math.abs(parseInt(`${chinasame1}`)), 5))}`);
      }
      while (5 >= (1 << (Math.min(5, Math.abs(zoomF)))) || (4.54 + chinasame1) >= 5.61) {
         zoomF += 3 + parseInt(`${chinasame1}`);
         break;
      }
          let tumbnailA: Array<any> = [841, 192, 2];
          let sports0 = 5;
          let rocketQ = 4;
         zoomF /= Math.max(sports0, 5);
         tumbnailA.push(rocketQ / (Math.max(tumbnailA.length, 5)));
         sports0 %= Math.max(4, tumbnailA.length);
         rocketQ %= Math.max(1, rocketQ);
      orangedownarrowe = [twitterx.length & rncorem.length];
        if (BTN_MARGIN_RIGHT > 16) {

      cornershootF = twitterx.length == orangedownarrowe.length;
   if (defaultplayerimgx >= 5.30) {
       let carouseld = 4;
       let forward7: Map<any, any> = new Map([[String.fromCharCode(106,95,53,51,95,104,121,112,104,101,110,97,116,101,100,0),176], [String.fromCharCode(116,114,97,110,115,105,116,105,111,110,95,118,95,51,0),907]]);
         carouseld *= carouseld * 3;
         forward7.set(`${carouseld}`, 2);
      let iconarrowrightwhitef = 9472813 >= carouseld;
      do {
          let halfk = String.fromCharCode(116,101,120,105,112,111,100,95,108,95,57,57,0);
          let rocketk = true;
         carouseld += carouseld >> (Math.min(Math.abs(2), 2));
         halfk = `${((rocketk ? 3 : 2) * halfk.length)}`;
         rocketk = (((rocketk ? halfk.length : 61) - halfk.length) > 61);
         if (iconarrowrightwhitef) {
            break;
         }
      } while (iconarrowrightwhitef && (carouseld == forward7.size));
         forward7 = new Map([[`${forward7.size}`, 1]]);
         forward7 = new Map([[`${forward7.size}`, carouseld]]);
      if (Array.from(forward7.values()).includes(carouseld)) {
         forward7.set(`${carouseld}`, forward7.size);
      }
      defaultplayerimgx /= Math.max(4, parseFloat(`${orangedownarrowe.length}`));
   }
   let shootyesgoalq = feedbackW <= 8184855.0;
   do {
      feedbackW -= (parseFloat(`${parseInt(`${feedbackW}`) + (hongkongU ? 5 : 2)}`));
      if (shootyesgoalq) {
         break;
      }
   } while (shootyesgoalq && ((3 << (Math.min(1, rncorem.length))) > 1));
            const excess = (BTN_MARGIN_RIGHT - 16) * (CARDS_PER_ROW - 1);

   for (let l = 0; l < 1; l++) {
      linea = [(String.fromCharCode(83,0) == rncorem ? iconadslinkC.size : rncorem.length)];
   }
   if (2 >= orangedownarrowe.length) {
      orangedownarrowe.push(iconadslinkC.size);
   }
      hongkongU = orangedownarrowe.length > iconadslinkC.size;
            BTN_MARGIN_RIGHT = 16;

      twitterx = `${linea.length + 3}`;
      defaultplayerimgx -= parseFloat(`${2 ^ parseInt(`${defaultplayerimgx}`)}`);
   while ((5 >> (Math.min(4, Math.abs(predictionbannershared5)))) <= 3 || hongkongU) {
       let feedbackY = 4.0;
         feedbackY += parseFloat(`${parseInt(`${feedbackY}`)}`);
         feedbackY /= Math.max(2, parseFloat(`${parseInt(`${feedbackY}`)}`));
         feedbackY *= parseFloat(`${parseInt(`${feedbackY}`)}`);
      hongkongU = 39 <= iconadslinkC.size || refreshl.length <= 39;
      break;
   }
            cardWidth += Math.floor(excess / CARDS_PER_ROW)  
        }

        setCardsPerRow(CARDS_PER_ROW);

   let whistleU = String.fromCharCode(57,116,112,97,95,99,0) == rncorem;
   do {
       let modulesg: Map<any, any> = new Map([[String.fromCharCode(110,111,116,99,104,101,100,95,113,95,54,52,0),499], [String.fromCharCode(115,101,116,102,100,95,97,95,54,49,0),708]]);
       let dplusW: Map<any, any> = new Map([[String.fromCharCode(100,101,112,114,101,99,97,116,101,100,95,121,95,55,51,0),865], [String.fromCharCode(98,95,51,55,95,118,105,122,105,101,114,0),19], [String.fromCharCode(109,105,110,114,95,122,95,52,51,0),887]]);
       let iconsharef = 3.0;
       let langw = 1;
       let descY = 4.0;
      if ((iconsharef / 2.19) > 1.73 || (3 * langw) > 4) {
         iconsharef /= Math.max(5, parseFloat(`${1 + parseInt(`${descY}`)}`));
      }
      while (4 < (langw + 2)) {
          let hejiu = 4.0;
          let foregroundn = 2;
          let changed = String.fromCharCode(110,111,110,100,99,95,109,95,55,48,0);
          let zoomV: Map<any, any> = new Map([[String.fromCharCode(97,112,112,118,101,121,111,114,95,111,95,51,50,0),true ], [String.fromCharCode(101,120,112,111,114,116,95,109,95,49,50,0),false ]]);
         langw <<= Math.min(Math.abs(1 << (Math.min(1, Math.abs(zoomV.size)))), 4);
         hejiu += (parseFloat(`${String.fromCharCode(53,0) == changed ? changed.length : foregroundn}`));
         foregroundn >>= Math.min(1, Math.abs(foregroundn | 3));
         zoomV.set(changed, foregroundn + changed.length);
         break;
      }
         iconsharef -= parseFloat(`${2}`);
         dplusW = new Map([[`${modulesg.size}`, modulesg.size & langw]]);
          let basel = false;
          let libjsijniprofilerB: Array<any> = [String.fromCharCode(100,101,108,97,121,95,53,95,55,53,0), String.fromCharCode(118,95,57,57,95,112,108,97,121,98,97,99,107,0), String.fromCharCode(98,95,52,57,95,119,109,97,112,114,111,100,97,116,97,0)];
          let shrink0 = 1.0;
         descY += (parseFloat(`${dplusW.size * (basel ? 4 : 4)}`));
         basel = libjsijniprofilerB.length == 31;
         libjsijniprofilerB = [3];
         shrink0 /= Math.max(parseFloat(`${1}`), 4);
       let preview4 = 4.0;
       let telegramT = 1.0;
         telegramT += parseInt(`${telegramT}`) * parseInt(`${preview4}`);
      let basketballW = langw >= 5179897;
      do {
         langw *= parseInt(`${telegramT}`) ^ 2;
         if (basketballW) {
            break;
         }
      } while (basketballW && ((3 - langw) > 3));
          let weather0 = String.fromCharCode(105,95,56,52,0);
          let arrowup6 = 4.0;
          let gesturesb = String.fromCharCode(119,114,105,116,101,108,111,99,107,95,105,95,55,48,0);
         iconsharef *= parseFloat(`${modulesg.size}`);
         weather0 = `${weather0.length | 2}`;
         arrowup6 -= weather0.length ^ gesturesb.length;
         gesturesb = `${weather0.length}`;
      for (let l = 0; l < 2; l++) {
         iconsharef -= parseFloat(`${2}`);
      }
          let confirmationr = 1.0;
         descY -= parseFloat(`${3}`);
         confirmationr += parseFloat(`${1 ^ parseInt(`${confirmationr}`)}`);
      let s_titler = preview4 >= 6749127.0;
      do {
          let backiconL: Array<any> = [String.fromCharCode(115,95,50,49,95,110,97,109,101,100,0), String.fromCharCode(115,95,50,56,95,115,99,114,97,116,99,104,0)];
          let whitetickv = String.fromCharCode(110,95,49,51,95,115,105,100,101,0);
          let sharep: Map<any, any> = new Map([[String.fromCharCode(121,95,49,54,95,115,117,98,108,97,121,111,117,116,0),17], [String.fromCharCode(116,111,114,103,98,95,110,95,53,55,0),389], [String.fromCharCode(100,95,54,48,95,105,108,115,116,0),829]]);
          let gradle4 = String.fromCharCode(117,112,108,111,97,100,95,111,95,57,57,0);
          let networkI: Array<any> = [419, 860];
         preview4 /= Math.max(5, 1);
         backiconL = [3 ^ networkI.length];
         whitetickv += `${sharep.size - 2}`;
         sharep.set(whitetickv, whitetickv.length);
         gradle4 += `${1 * backiconL.length}`;
         networkI.push(backiconL.length / (Math.max(gradle4.length, 10)));
         if (s_titler) {
            break;
         }
      } while ((1.62 >= (4.45 * preview4) || 4.45 >= (preview4 * descY)) && s_titler);
      if (langw > 3) {
         langw >>= Math.min(2, Math.abs(1));
      }
          let libffmpegkitM = false;
          let placeholder6 = 3.0;
          let wind9 = String.fromCharCode(111,95,53,56,95,104,105,116,115,0);
         dplusW.set(`${descY}`, parseInt(`${iconsharef}`) * 2);
         libffmpegkitM = !wind9.endsWith(`${placeholder6}`);
         placeholder6 /= Math.max(parseInt(`${placeholder6}`) >> (Math.min(3, Math.abs(1))), 3);
         wind9 = `${((libffmpegkitM ? 5 : 1))}`;
         preview4 *= 2 << (Math.min(5, Math.abs(parseInt(`${descY}`))));
      rncorem += `${orangedownarrowe.length << (Math.min(3, Math.abs(langw)))}`;
      if (whistleU) {
         break;
      }
   } while ((rncorem.length == refreshl.length) && whistleU);
   if (1 >= (4 * linea.length) && hongkongU) {
      linea = [3];
   }
   for (let r = 0; r < 1; r++) {
       let windd = 0.0;
       let hookM = String.fromCharCode(114,95,50,52,95,112,101,101,114,110,97,109,101,0);
       let kickH = String.fromCharCode(108,95,51,52,95,99,111,111,114,100,115,0);
      while (5.81 >= (windd * kickH.length) || 3.48 >= (5.81 * windd)) {
         windd /= Math.max(2, 5);
         break;
      }
       let combinedt: Map<any, any> = new Map([[String.fromCharCode(99,108,97,115,115,101,115,95,53,95,56,49,0),String.fromCharCode(113,95,53,51,95,115,117,98,112,97,114,116,0)], [String.fromCharCode(114,95,49,56,95,99,114,111,115,115,102,97,100,101,0),String.fromCharCode(98,95,52,52,95,115,104,111,119,105,110,103,0)]]);
      let leftG = hookM.length <= 7848046;
      do {
         hookM = "2";
         if (leftG) {
            break;
         }
      } while (((combinedt.size >> (Math.min(Math.abs(2), 5))) <= 4 && (combinedt.size >> (Math.min(hookM.length, 3))) <= 2) && leftG);
      for (let l = 0; l < 2; l++) {
          let iconclosewhitebgF: Array<any> = [631, 528, 316];
          let projectB = 4;
          let nbatrophyi = 0;
          let stringL = 3.0;
          let roundz: Array<any> = [String.fromCharCode(110,95,54,95,100,99,116,99,111,101,102,0), String.fromCharCode(117,110,102,105,108,116,101,114,101,100,95,104,95,57,54,0), String.fromCharCode(110,101,119,101,115,116,95,99,95,51,50,0)];
         combinedt.set(kickH, 1);
         iconclosewhitebgF = [iconclosewhitebgF.length >> (Math.min(1, Math.abs(nbatrophyi)))];
         projectB /= Math.max(projectB, 4);
         nbatrophyi >>= Math.min(3, Math.abs(projectB));
         stringL += parseFloat(`${nbatrophyi}`);
         roundz.push(nbatrophyi);
      }
          let clubI = 3.0;
          let colorsA = String.fromCharCode(107,95,48,95,104,97,97,114,0);
          let viewsh = String.fromCharCode(97,116,116,97,99,104,95,121,95,50,50,0);
         combinedt.set(viewsh, viewsh.length / 1);
         clubI /= Math.max(parseFloat(`${1 ^ colorsA.length}`), 5);
         colorsA = `${colorsA.length << (Math.min(Math.abs(2), 5))}`;
          let privacyy = 1.0;
         hookM = "1";
         privacyy *= parseInt(`${privacyy}`);
         windd /= Math.max(4, hookM.length % (Math.max(9, kickH.length)));
         hookM = `${combinedt.size >> (Math.min(Math.abs(2), 1))}`;
       let libcrashsdkN = String.fromCharCode(118,95,55,52,95,102,97,105,108,117,114,101,0);
       let philippines5 = String.fromCharCode(99,95,57,95,114,101,116,97,105,110,115,0);
      defaultplayerimgx /= Math.max(parseFloat(`${3 + parseInt(`${windd}`)}`), 1);
   }
        setMarginRight(BTN_MARGIN_RIGHT);

   for (let x = 0; x < 2; x++) {
      linea = [3 | linea.length];
   }
      linea = [refreshl.length];
   for (let t = 0; t < 3; t++) {
      cornershootF = parseFloat(`${predictionbannershared5}`) >= feedbackW;
   }
        setCardWidth(cardWidth - 10);

   while (3 > refreshl.length) {
      predictionbannershared5 += ((hongkongU ? 2 : 1) / (Math.max(twitterx.length, 7)));
      break;
   }
       let arrow_ = String.fromCharCode(116,105,109,101,115,99,97,108,101,95,104,95,56,51,0);
       let androidf = String.fromCharCode(116,95,56,48,95,112,117,116,115,116,114,0);
       let scheduler9 = 0;
      if (arrow_.endsWith(`${scheduler9}`)) {
          let valuesW: Map<any, any> = new Map([[String.fromCharCode(104,95,51,51,95,109,111,118,101,0),739], [String.fromCharCode(98,95,51,57,95,114,101,115,111,117,114,99,101,0),849], [String.fromCharCode(114,111,117,112,95,113,95,54,48,0),540]]);
          let football8 = String.fromCharCode(108,95,55,49,95,117,101,102,97,0);
          let rootX = 4.0;
          let indexQ = 1.0;
          let injury_ = String.fromCharCode(114,108,109,95,119,95,50,55,0);
         arrow_ = `${parseInt(`${rootX}`) % (Math.max(valuesW.size, 5))}`;
         valuesW.set(`${indexQ}`, parseInt(`${indexQ}`) - injury_.length);
         football8 = `${parseInt(`${indexQ}`) << (Math.min(injury_.length, 5))}`;
         rootX += football8.length << (Math.min(Math.abs(3), 4));
      }
      while (arrow_ != String.fromCharCode(122,0) && 1 < androidf.length) {
         androidf = "2";
         break;
      }
      while (4 == (androidf.length >> (Math.min(5, Math.abs(scheduler9))))) {
          let signinupL: Array<any> = [773, 262, 587];
          let iconsharefriendsV = String.fromCharCode(110,112,111,105,110,116,115,95,97,95,55,50,0);
          let nativemoduleG = String.fromCharCode(100,95,54,55,95,118,105,111,108,97,116,105,111,110,0);
          let handlerG = String.fromCharCode(98,95,53,49,95,118,112,97,105,110,116,101,114,0);
         scheduler9 >>= Math.min(3, arrow_.length);
         signinupL.push(nativemoduleG.length);
         iconsharefriendsV += `${nativemoduleG.length}`;
         handlerG += `${handlerG.length - 2}`;
         break;
      }
      let searchx = 8402560 >= scheduler9;
      do {
         scheduler9 -= (String.fromCharCode(86,0) == androidf ? androidf.length : arrow_.length);
         if (searchx) {
            break;
         }
      } while (searchx && (2 <= (arrow_.length & scheduler9) && (scheduler9 & 2) <= 4));
      for (let f = 0; f < 1; f++) {
         arrow_ += `${scheduler9 / (Math.max(androidf.length, 8))}`;
      }
      let vignetteO = 8359840 <= scheduler9;
      do {
          let roomf = String.fromCharCode(117,110,100,101,114,115,99,111,114,101,95,115,95,49,55,0);
          let tempnodatai = String.fromCharCode(98,95,55,53,95,108,105,115,116,101,110,101,114,115,0);
          let combineM = 1;
          let eighteenc: Map<any, any> = new Map([[String.fromCharCode(118,101,114,115,105,111,110,101,100,95,108,95,55,57,0),627], [String.fromCharCode(112,114,111,99,101,101,100,95,98,95,49,49,0),544], [String.fromCharCode(115,113,108,105,116,101,99,104,97,110,103,101,103,114,111,117,112,95,108,95,53,51,0),477]]);
         scheduler9 /= Math.max(4, scheduler9 >> (Math.min(Math.abs(3), 2)));
         roomf += "1";
         tempnodatai += `${(String.fromCharCode(55,0) == roomf ? tempnodatai.length : roomf.length)}`;
         combineM += (String.fromCharCode(112,0) == tempnodatai ? eighteenc.size : tempnodatai.length);
         eighteenc = new Map([[`${eighteenc.size}`, eighteenc.size]]);
         if (vignetteO) {
            break;
         }
      } while (((androidf.length >> (Math.min(4, Math.abs(scheduler9)))) > 3 && 5 > (scheduler9 >> (Math.min(Math.abs(3), 3)))) && vignetteO);
          let combinedp = 0.0;
         androidf = `${3 >> (Math.min(3, Math.abs(parseInt(`${combinedp}`))))}`;
         arrow_ += `${scheduler9 & androidf.length}`;
         scheduler9 |= 3;
      iconadslinkC = new Map([[`${refreshl.length}`, twitterx.length]]);
   let homeactiveH = predictionbannershared5 <= 6928341;
   do {
      predictionbannershared5 /= Math.max(3, (orangedownarrowe.length >> (Math.min(1, Math.abs((hongkongU ? 1 : 5))))));
      if (homeactiveH) {
         break;
      }
   } while ((!orangedownarrowe.includes(predictionbannershared5)) && homeactiveH);
        setCardHeight(cardHeight);
    }, []);
    
    const vodMapItem = (vod: any, idx: any) => (
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
                navigation.navigate('播放', {
                    vod_id: vod?.vod_id,
                    player_mode: playerMode
                });
                
                
            }}
            index={idx}
        />
    )
    
    return (
        <View style={styles.vodList}>
            {
                vods &&
                vods.slice(0, numOfRows * cardsPerRow).map(vodMapItem)
            }
        </View>
    )
}

export default memo(VodListVerticalVip);

const styles = StyleSheet.create({
    vodList: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
})