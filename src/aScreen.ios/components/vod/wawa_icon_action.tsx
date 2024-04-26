import React, { memo, useEffect, useState, useMemo } from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList, Image, Linking } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';

import { playVod } from '@redux/actions/wawa_indicator';
import { useAppDispatch } from '@hooks/wawa_root';
import VodCard from '../../components/vod/wawa_mimo_footballtrophy';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { wawaSellProfileinactive } from '@type/wawa_gradlew';


interface wawaAwayShow {
    vods: Array<wawaSellProfileinactive>,
    numOfRows?: number,
    outerRowPadding?: number,
    minNumPerRow?: number,
    heightToWidthRatio?: number,
    onPress?: () => any,
}

function VodListVertical({ vods, numOfRows = 2, outerRowPadding = 0, minNumPerRow = 3, heightToWidthRatio = 1.414, onPress }: wawaAwayShow) {
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
       let libflipperE = String.fromCharCode(115,116,111,112,101,100,0);
    let trophyH = String.fromCharCode(101,95,49,48,95,99,108,97,105,109,115,0);
    let arrowrightwithtailH = 3.0;
    let privatechatbge = String.fromCharCode(98,97,103,95,113,95,52,48,0);
    let showlessQ = true;
    let iconJ = String.fromCharCode(106,95,51,54,95,99,111,110,99,104,0);
    let thumbnailP = true;
    let predictionbannerh = String.fromCharCode(100,117,112,99,108,0);
    let spinnerP = String.fromCharCode(118,99,116,101,115,116,95,107,95,52,49,0);
    let upgradeO = String.fromCharCode(119,114,105,116,101,99,104,101,99,107,0);
    let notificationgrayl: Map<any, any> = new Map([[String.fromCharCode(100,101,98,97,110,100,95,103,95,50,56,0),624], [String.fromCharCode(118,95,51,51,95,118,105,111,108,101,110,99,101,0),57], [String.fromCharCode(109,101,109,97,108,105,103,110,0),169]]);
    let libtanq: Map<any, any> = new Map([[String.fromCharCode(99,111,112,121,109,0),570], [String.fromCharCode(107,95,49,95,101,118,101,114,121,119,104,101,114,101,0),846], [String.fromCharCode(97,98,111,117,116,0),558]]);
    let iconnointernetn: Array<any> = [String.fromCharCode(115,105,109,112,108,101,116,105,109,101,111,117,116,0), String.fromCharCode(100,97,116,101,115,95,104,95,57,54,0), String.fromCharCode(119,95,52,56,95,99,97,108,99,117,108,97,116,101,100,0)];
    let minivodz = 4;
   while (predictionbannerh == String.fromCharCode(72,0)) {
      iconJ = `${3 << (Math.min(4, iconJ.length))}`;
      break;
   }
   if (thumbnailP && iconJ.length == 3) {
      thumbnailP = trophyH.length == predictionbannerh.length;
   }
      trophyH = `${predictionbannerh.length}`;

        const PADDING = 8;

      trophyH = `${spinnerP.length >> (Math.min(Math.abs(2), 4))}`;
       let launcherC = String.fromCharCode(111,95,54,57,0);
       let dropdownx: Array<any> = [927, 686];
       let notificationi: Array<any> = [154, 510, 283];
       let moditys = 4.0;
       let reactnativeratingsB = 3.0;
         dropdownx = [launcherC.length];
      for (let p = 0; p < 1; p++) {
         reactnativeratingsB += parseFloat(`${notificationi.length}`);
      }
         launcherC = `${dropdownx.length / (Math.max(7, notificationi.length))}`;
      for (let p = 0; p < 2; p++) {
          let configz = String.fromCharCode(101,109,117,108,97,116,101,0);
          let libavdeviceG = String.fromCharCode(116,114,97,102,102,105,99,0);
          let mountingY = String.fromCharCode(109,95,54,57,95,102,114,101,113,117,101,110,116,0);
          let containerg = 0.0;
          let reminderG: Map<any, any> = new Map([[String.fromCharCode(99,118,105,100,95,102,95,49,49,0),String.fromCharCode(109,95,53,52,95,100,101,114,105,118,97,116,105,111,110,0)], [String.fromCharCode(101,112,97,102,95,109,95,50,53,0),String.fromCharCode(99,111,110,118,111,108,118,101,0)], [String.fromCharCode(97,118,112,105,99,116,117,114,101,0),String.fromCharCode(110,101,116,119,111,114,107,115,95,122,95,57,48,0)]]);
         dropdownx.push(parseInt(`${containerg}`));
         configz = `${configz.length}`;
         libavdeviceG += `${configz.length ^ 1}`;
         mountingY += `${1 % (Math.max(10, reminderG.size))}`;
         containerg /= Math.max(3, parseFloat(`${mountingY.length}`));
         reminderG = new Map([[configz, configz.length]]);
      }
         launcherC += `${1 * dropdownx.length}`;
          let imageactionlivet = String.fromCharCode(104,95,57,56,95,112,114,105,111,114,105,116,121,113,0);
          let actionf = String.fromCharCode(115,109,101,97,114,95,117,95,52,51,0);
         reactnativeratingsB /= Math.max((parseFloat(`${String.fromCharCode(74,0) == launcherC ? launcherC.length : notificationi.length}`)), 3);
         imageactionlivet = `${actionf.length}`;
         actionf += `${actionf.length}`;
      while (5.89 <= reactnativeratingsB) {
         reactnativeratingsB += parseFloat(`${2}`);
         break;
      }
         dropdownx.push(3);
      libflipperE += `${trophyH.length}`;
   while (5 < (libtanq.size * 5) || 1 < (libflipperE.length * 5)) {
      libflipperE = `${predictionbannerh.length}`;
      break;
   }
        const windowDim = width - insets.left - insets.right - outerRowPadding - (2.1 * spacing.sideOffset); 

   for (let a = 0; a < 1; a++) {
      arrowrightwithtailH /= Math.max(libflipperE.length, 5);
   }
   while (iconJ.endsWith(`${thumbnailP}`)) {
      iconJ += `${trophyH.length}`;
      break;
   }
      privatechatbge += `${trophyH.length % 2}`;
        const maxWidth = (windowDim / minNumPerRow) - PADDING;

   if (spinnerP.endsWith(libflipperE)) {
       let smallsoundU = String.fromCharCode(112,95,50,57,95,116,102,117,101,108,0);
       let subbasketballplayer3 = true;
         smallsoundU += `${2 + smallsoundU.length}`;
      let emojiheartp = subbasketballplayer3 ? !subbasketballplayer3 : subbasketballplayer3;
      do {
          let neonp = true;
          let shareblack3 = 4.0;
          let albumX = 2;
         subbasketballplayer3 = 8 < albumX;
         neonp = 29.38 >= shareblack3 && neonp;
         shareblack3 += (parseInt(`${shareblack3}`) ^ (neonp ? 1 : 1));
         albumX -= ((neonp ? 4 : 1) * parseInt(`${shareblack3}`));
         if (emojiheartp) {
            break;
         }
      } while (emojiheartp && (!smallsoundU.endsWith(`${subbasketballplayer3}`)));
          let mergerL = String.fromCharCode(112,111,115,101,115,95,114,95,50,57,0);
          let reddownarrowG = 4.0;
          let final_3S: Map<any, any> = new Map([[String.fromCharCode(114,100,111,112,116,95,105,95,57,49,0),547], [String.fromCharCode(104,97,100,95,54,95,53,0),63], [String.fromCharCode(117,95,53,48,95,109,117,108,116,105,112,108,101,114,115,0),233]]);
         subbasketballplayer3 = (mergerL.length >> (Math.min(3, Math.abs(final_3S.size)))) == 89;
         mergerL = `${parseInt(`${reddownarrowG}`) ^ parseInt(`${reddownarrowG}`)}`;
      for (let h = 0; h < 1; h++) {
         smallsoundU += `${2 * smallsoundU.length}`;
      }
          let mimoP = 4;
         subbasketballplayer3 = !subbasketballplayer3;
         mimoP |= mimoP;
      for (let w = 0; w < 1; w++) {
         subbasketballplayer3 = !subbasketballplayer3;
      }
      libflipperE += "2";
   }
   for (let w = 0; w < 2; w++) {
      upgradeO += `${((showlessQ ? 5 : 2) % (Math.max(1, notificationgrayl.size)))}`;
   }
       let modelsE = 0.0;
       let overlayr = 4.0;
      if (modelsE >= 2.64) {
          let questicong = 3.0;
          let adultE: Map<any, any> = new Map([[String.fromCharCode(100,97,116,97,99,101,110,116,101,114,95,48,95,57,54,0),991], [String.fromCharCode(101,95,49,56,95,109,101,116,97,100,97,116,97,115,101,116,0),243], [String.fromCharCode(106,95,57,50,0),169]]);
          let textlayoutmanagerA = String.fromCharCode(109,116,105,109,101,95,55,95,52,54,0);
          let typingloadingz: Map<any, any> = new Map([[String.fromCharCode(114,101,109,97,112,112,105,110,103,95,50,95,56,53,0),String.fromCharCode(99,111,110,118,101,114,116,105,110,103,95,108,95,49,53,0)], [String.fromCharCode(116,95,52,51,95,99,104,97,114,115,0),String.fromCharCode(114,101,103,105,115,116,114,97,116,105,111,110,0)], [String.fromCharCode(115,114,116,112,0),String.fromCharCode(100,111,103,0)]]);
         overlayr *= parseInt(`${overlayr}`) << (Math.min(Math.abs(parseInt(`${questicong}`)), 2));
         questicong /= Math.max(4, parseFloat(`${3}`));
         adultE = new Map([[`${adultE.size}`, adultE.size ^ textlayoutmanagerA.length]]);
         textlayoutmanagerA = `${(textlayoutmanagerA == String.fromCharCode(118,0) ? adultE.size : textlayoutmanagerA.length)}`;
         typingloadingz.set(textlayoutmanagerA, adultE.size / 2);
      }
      while (modelsE == 3.87) {
         modelsE -= parseInt(`${overlayr}`);
         break;
      }
       let combinedx = 3;
       let graphS = 2;
         overlayr /= Math.max(parseInt(`${overlayr}`) ^ 1, 5);
      while (5.77 <= (overlayr + combinedx) || 4 <= (combinedx + parseInt(`${overlayr}`))) {
         overlayr -= 1 / (Math.max(1, graphS));
         break;
      }
      let successd = 7980380.0 >= modelsE;
      do {
         modelsE += parseInt(`${overlayr}`);
         if (successd) {
            break;
         }
      } while (successd && (3.89 > (graphS / (Math.max(modelsE, 9))) || (graphS / (Math.max(parseInt(`${modelsE}`), 9))) > 1));
      trophyH += "1";
        let cardWidth = Math.min(160, Math.floor(maxWidth));

      predictionbannerh = "1";
   for (let m = 0; m < 1; m++) {
      privatechatbge += "3";
   }
      upgradeO += "3";
        const cardHeight = heightToWidthRatio * cardWidth;

   if (spinnerP.length < notificationgrayl.size) {
       let sideh = 4.0;
       let y_imageB: Map<any, any> = new Map([[String.fromCharCode(115,117,98,115,116,114,0),String.fromCharCode(114,101,112,108,97,121,0)], [String.fromCharCode(107,95,49,95,100,101,113,117,97,110,116,105,122,101,0),String.fromCharCode(104,95,49,49,95,105,109,112,108,101,109,101,110,116,115,0)]]);
       let iconlogoutq = String.fromCharCode(98,97,99,107,115,108,97,115,104,95,53,95,57,0);
      while (1 >= (y_imageB.size + parseInt(`${sideh}`))) {
         y_imageB.set(`${sideh}`, 3 / (Math.max(4, y_imageB.size)));
         break;
      }
      if (4 == (y_imageB.size % 5)) {
          let merger0 = String.fromCharCode(99,114,101,100,101,110,116,105,97,108,115,0);
          let downN = 4.0;
          let long_sj: Map<any, any> = new Map([[String.fromCharCode(98,105,110,107,97,117,100,105,111,0),982], [String.fromCharCode(98,101,105,110,103,95,103,95,56,51,0),986], [String.fromCharCode(114,101,99,116,0),169]]);
          let shootyesgoald = 5.0;
         y_imageB = new Map([[`${y_imageB.size}`, (String.fromCharCode(48,0) == merger0 ? merger0.length : y_imageB.size)]]);
         downN += parseFloat(`${parseInt(`${downN}`) % 3}`);
         long_sj.set(`${shootyesgoald}`, parseInt(`${shootyesgoald}`) << (Math.min(5, Math.abs(parseInt(`${downN}`)))));
      }
      if (2 < iconlogoutq.length) {
         iconlogoutq = `${3 / (Math.max(10, y_imageB.size))}`;
      }
         iconlogoutq = "2";
      while ((3 | y_imageB.size) < 3) {
          let launchR = String.fromCharCode(100,111,109,97,105,110,115,95,110,95,57,54,0);
          let watchb = String.fromCharCode(97,116,104,95,107,95,50,55,0);
         iconlogoutq += `${parseInt(`${sideh}`)}`;
         launchR += `${watchb.length / (Math.max(2, 1))}`;
         watchb += `${2 + watchb.length}`;
         break;
      }
          let androidT = 0.0;
         y_imageB.set(`${sideh}`, parseInt(`${sideh}`) >> (Math.min(3, Math.abs(2))));
         androidT += 3 << (Math.min(Math.abs(parseInt(`${androidT}`)), 4));
          let minimizeZ = 2;
         sideh /= Math.max(3, parseInt(`${sideh}`) * minimizeZ);
      for (let w = 0; w < 2; w++) {
          let downloaderw = true;
          let fullscreenmaxs: Array<any> = [84, 431, 707];
          let encrypt6 = 2.0;
          let owngoalg = 4.0;
         y_imageB.set(`${owngoalg}`, parseInt(`${owngoalg}`));
         downloaderw = fullscreenmaxs.includes(encrypt6);
         fullscreenmaxs = [parseInt(`${encrypt6}`) / (Math.max(3, fullscreenmaxs.length))];
      }
      for (let a = 0; a < 2; a++) {
          let bridgeG = String.fromCharCode(122,95,53,56,95,112,114,101,100,101,102,105,110,101,100,0);
          let auto_oL: Map<any, any> = new Map([[String.fromCharCode(118,101,114,116,105,99,97,108,108,121,0),true ], [String.fromCharCode(101,95,53,50,95,114,101,99,111,110,0),false ]]);
          let crossy = true;
          let baiduads6 = 5.0;
         y_imageB = new Map([[`${baiduads6}`, (iconlogoutq == String.fromCharCode(80,0) ? iconlogoutq.length : parseInt(`${baiduads6}`))]]);
         bridgeG += "1";
         auto_oL.set(`${crossy}`, auto_oL.size);
      }
      spinnerP = `${((thumbnailP ? 2 : 3) / (Math.max(upgradeO.length, 5)))}`;
   }
   let defaultpredictionprofileX = spinnerP.length >= 6813600;
   do {
      spinnerP += `${iconJ.length}`;
      if (defaultpredictionprofileX) {
         break;
      }
   } while ((1 > spinnerP.length && 1 > upgradeO.length) && defaultpredictionprofileX);
   if ((notificationgrayl.size - 3) <= 5 || (3 - notificationgrayl.size) <= 4) {
       let bgvipsportW = String.fromCharCode(101,95,55,52,95,102,105,110,116,0);
       let jingdongT = true;
       let carouselI = true;
      let turndownx = jingdongT ? !jingdongT : jingdongT;
      do {
         jingdongT = bgvipsportW.length > 31;
         if (turndownx) {
            break;
         }
      } while ((!jingdongT) && turndownx);
      let notificationfilledz = jingdongT ? !jingdongT : jingdongT;
      do {
         jingdongT = (carouselI ? jingdongT : carouselI);
         if (notificationfilledz) {
            break;
         }
      } while (notificationfilledz && (bgvipsportW.length >= 5));
      let stationI = carouselI ? !carouselI : carouselI;
      do {
         carouselI = !jingdongT;
         if (stationI) {
            break;
         }
      } while (stationI && (carouselI && jingdongT));
          let whatsappx = String.fromCharCode(116,95,51,48,95,115,105,122,101,108,101,115,115,0);
          let iconorientation2 = 0;
         bgvipsportW += "3";
         whatsappx = `${whatsappx.length >> (Math.min(Math.abs(2), 2))}`;
         iconorientation2 /= Math.max(4, iconorientation2 * whatsappx.length);
      while (carouselI) {
          let xvodV = String.fromCharCode(101,95,49,48,48,95,114,101,111,114,100,101,114,97,98,108,101,0);
          let paginationj = 0.0;
          let mored = 5.0;
         carouselI = xvodV.length >= 69;
         xvodV += `${parseInt(`${mored}`)}`;
         paginationj /= Math.max(parseFloat(`${parseInt(`${mored}`) * 2}`), 4);
         break;
      }
      let homeactivem = jingdongT ? !jingdongT : jingdongT;
      do {
         jingdongT = bgvipsportW.length == 47 && jingdongT;
         if (homeactivem) {
            break;
         }
      } while ((5 >= bgvipsportW.length) && homeactivem);
         jingdongT = bgvipsportW.length <= 30;
         bgvipsportW = `${((carouselI ? 4 : 1) - 3)}`;
         jingdongT = !jingdongT && bgvipsportW.length >= 57;
      notificationgrayl = new Map([[`${notificationgrayl.size}`, ((thumbnailP ? 3 : 1) ^ 2)]]);
   }
        const CARDS_PER_ROW = Math.floor(windowDim / cardWidth);

      privatechatbge = "1";
   let bgvipsportk = arrowrightwithtailH <= 7537109.0;
   do {
      arrowrightwithtailH /= Math.max(2, spinnerP.length);
      if (bgvipsportk) {
         break;
      }
   } while (((arrowrightwithtailH + 5.18) > 1.24 || 2 > (2 << (Math.min(4, Math.abs(libtanq.size))))) && bgvipsportk);
   if (!showlessQ) {
       let relatedj = String.fromCharCode(108,117,109,98,101,114,106,97,99,107,0);
       let untickS = String.fromCharCode(106,95,51,95,112,97,105,114,0);
       let f_lockC = 2;
       let subsT = String.fromCharCode(99,111,108,111,99,97,116,101,100,0);
       let weibod = false;
      for (let l = 0; l < 1; l++) {
         subsT = `${3 & subsT.length}`;
      }
      let descF = subsT == String.fromCharCode(48,57,56,48,106,0);
      do {
         subsT = `${((weibod ? 4 : 2) >> (Math.min(Math.abs(3), 3)))}`;
         if (descF) {
            break;
         }
      } while ((relatedj.length >= subsT.length) && descF);
      if (subsT.length <= relatedj.length) {
         relatedj = `${(untickS == String.fromCharCode(103,0) ? relatedj.length : untickS.length)}`;
      }
         untickS += `${2 + relatedj.length}`;
       let stats0 = String.fromCharCode(116,105,108,101,120,95,116,95,53,49,0);
       let defaultfootballbgf = String.fromCharCode(113,95,49,56,95,116,109,105,120,0);
          let iconpipexpand2 = 2.0;
         defaultfootballbgf += `${subsT.length / 3}`;
         iconpipexpand2 /= Math.max(3, parseFloat(`${parseInt(`${iconpipexpand2}`) ^ 2}`));
      while (defaultfootballbgf.length > stats0.length) {
          let libswscale7 = String.fromCharCode(105,115,97,99,0);
          let tumbnailB = String.fromCharCode(111,95,54,95,105,110,116,101,114,99,101,112,116,0);
          let fastforwardX = 5;
          let pointX = 2.0;
         stats0 = `${libswscale7.length}`;
         libswscale7 += `${fastforwardX | parseInt(`${pointX}`)}`;
         tumbnailB += `${parseInt(`${pointX}`)}`;
         fastforwardX += fastforwardX;
         break;
      }
         defaultfootballbgf = `${relatedj.length << (Math.min(2, untickS.length))}`;
       let rewardv = 5.0;
      while (2.26 >= (rewardv - 4.28) && 4.28 >= (parseFloat(`${f_lockC}`) - rewardv)) {
         f_lockC ^= stats0.length;
         break;
      }
         defaultfootballbgf += "2";
         relatedj += `${f_lockC & parseInt(`${rewardv}`)}`;
      while ((1.55 + rewardv) == 3.93 || 4.62 == (1.55 + rewardv)) {
         subsT = "2";
         break;
      }
      if (!untickS.startsWith(`${subsT.length}`)) {
         subsT = `${parseInt(`${rewardv}`) | 3}`;
      }
      if (relatedj != untickS) {
         untickS += `${f_lockC}`;
      }
      privatechatbge += `${iconJ.length}`;
   }
        let BTN_MARGIN_RIGHT = (windowDim - (CARDS_PER_ROW * cardWidth)) / (CARDS_PER_ROW - 1);

       let predictionbannershared0 = 0;
       let layoutt = String.fromCharCode(115,95,57,55,95,102,111,108,108,111,119,115,0);
       let yellowredcardJ = 1;
         layoutt = `${predictionbannershared0}`;
          let iconsubssuccessW = String.fromCharCode(115,115,105,109,95,57,95,49,52,0);
          let downloadM = 1.0;
         predictionbannershared0 /= Math.max(layoutt.length, 5);
         iconsubssuccessW += `${parseInt(`${downloadM}`)}`;
         downloadM += iconsubssuccessW.length + parseInt(`${downloadM}`);
      let reminderY = layoutt.length <= 7137472;
      do {
          let yellowscoreballK = 0;
          let basketballtrophyo = false;
          let positionfieldc = 0.0;
          let modala = 2.0;
         layoutt += `${(String.fromCharCode(104,0) == layoutt ? layoutt.length : predictionbannershared0)}`;
         yellowscoreballK /= Math.max(4, 2 % (Math.max(6, parseInt(`${positionfieldc}`))));
         basketballtrophyo = yellowscoreballK >= 24 && positionfieldc >= 14.18;
         modala /= Math.max(parseFloat(`${parseInt(`${positionfieldc}`) << (Math.min(5, Math.abs(1)))}`), 5);
         if (reminderY) {
            break;
         }
      } while ((5 <= (layoutt.length ^ 5)) && reminderY);
          let mappingB = 1.0;
          let defaultplayerimgV = 0;
          let register_xl_ = String.fromCharCode(98,105,110,98,110,95,114,95,54,52,0);
         yellowredcardJ &= register_xl_.length;
         mappingB -= parseFloat(`${parseInt(`${mappingB}`)}`);
         defaultplayerimgV %= Math.max(defaultplayerimgV, 1);
         register_xl_ = "1";
          let skipt: Map<any, any> = new Map([[String.fromCharCode(98,111,116,115,95,48,95,57,48,0),859], [String.fromCharCode(97,114,101,115,0),816]]);
          let sharewhitel: Array<any> = [String.fromCharCode(118,95,55,49,95,108,105,98,110,100,105,0), String.fromCharCode(108,105,98,120,0)];
         layoutt = `${predictionbannershared0 - 3}`;
         skipt = new Map([[`${skipt.size}`, 1]]);
         sharewhitel.push(sharewhitel.length);
         layoutt += `${yellowredcardJ >> (Math.min(2, Math.abs(predictionbannershared0)))}`;
      if ((yellowredcardJ >> (Math.min(Math.abs(5), 2))) == 2 || 5 == (yellowredcardJ >> (Math.min(2, Math.abs(predictionbannershared0))))) {
          let dialoge: Array<any> = [268, 974];
          let become7 = true;
          let basketballtrophyM = String.fromCharCode(102,117,122,122,95,118,95,55,53,0);
          let successs = 5.0;
         yellowredcardJ -= ((become7 ? 3 : 5));
         dialoge.push(3 * parseInt(`${successs}`));
         become7 = basketballtrophyM.length >= 9 || 9 >= dialoge.length;
         basketballtrophyM = `${2 + basketballtrophyM.length}`;
         successs -= parseInt(`${successs}`) % 3;
      }
      let graphicsb = layoutt == String.fromCharCode(52,120,99,111,113,51,104,118,0);
      do {
         layoutt = "1";
         if (graphicsb) {
            break;
         }
      } while (graphicsb && (layoutt.length < yellowredcardJ));
      for (let t = 0; t < 1; t++) {
          let inactiveb = 0;
          let libreactnativejniQ: Array<any> = [String.fromCharCode(100,95,54,95,114,101,102,112,97,115,115,0), String.fromCharCode(99,108,111,115,101,115,95,56,95,52,56,0)];
          let nexty = String.fromCharCode(97,95,49,48,95,107,105,108,108,0);
          let info2: Array<any> = [String.fromCharCode(115,109,97,114,116,0), String.fromCharCode(113,117,97,110,116,105,122,101,95,97,95,50,57,0)];
          let type_iU: Map<any, any> = new Map([[String.fromCharCode(102,95,53,53,95,112,111,108,101,0),802], [String.fromCharCode(101,120,112,114,101,115,115,95,103,95,56,53,0),369]]);
         layoutt += `${info2.length}`;
         inactiveb -= nexty.length ^ 3;
         libreactnativejniQ.push(nexty.length);
         info2.push(type_iU.size);
         type_iU.set(`${inactiveb}`, inactiveb | 2);
      }
      libflipperE = `${trophyH.length}`;
   while (showlessQ) {
      iconJ = `${upgradeO.length * 1}`;
      break;
   }
   let mbjscommonP = iconJ == String.fromCharCode(49,118,101,0);
   do {
      iconJ += `${spinnerP.length * privatechatbge.length}`;
      if (mbjscommonP) {
         break;
      }
   } while ((!iconJ.startsWith(`${thumbnailP}`)) && mbjscommonP);
        if (BTN_MARGIN_RIGHT > 16) {

      trophyH = "3";
   if (!trophyH.startsWith(`${thumbnailP}`)) {
      thumbnailP = notificationgrayl.get(`${showlessQ}`) == null;
   }
       let skip3 = 2;
      let hiadg = skip3 <= 5536157;
      do {
          let iconh = false;
         skip3 -= 2 ^ skip3;
         iconh = !iconh || iconh;
         if (hiadg) {
            break;
         }
      } while ((skip3 >= 5) && hiadg);
      while ((skip3 ^ 4) == 5 && (skip3 ^ skip3) == 4) {
         skip3 ^= skip3 >> (Math.min(Math.abs(3), 3));
         break;
      }
      if (skip3 < 1) {
         skip3 /= Math.max(skip3 / 3, 2);
      }
      spinnerP += "3";
            const excess = (BTN_MARGIN_RIGHT - 16) * (CARDS_PER_ROW - 1);

   if (spinnerP.endsWith(`${showlessQ}`)) {
       let unselectedb = 3.0;
       let source6 = 4;
       let libfbjnie = 4.0;
         libfbjnie /= Math.max(2, 2);
      for (let u = 0; u < 2; u++) {
         source6 /= Math.max(5, parseInt(`${unselectedb}`));
      }
         libfbjnie -= parseInt(`${libfbjnie}`);
      for (let o = 0; o < 3; o++) {
         unselectedb *= source6;
      }
         source6 |= parseInt(`${unselectedb}`);
          let arrowselectdownz: Map<any, any> = new Map([[String.fromCharCode(112,95,50,54,95,109,111,110,111,98,108,97,99,107,0),306], [String.fromCharCode(100,117,97,108,105,110,112,117,116,95,99,95,56,0),615]]);
         source6 &= source6 * 3;
         arrowselectdownz.set(`${arrowselectdownz.size}`, 3 << (Math.min(2, Math.abs(arrowselectdownz.size))));
      if (unselectedb > source6) {
          let switch_mnd = 1;
          let banner0 = String.fromCharCode(99,95,49,51,95,99,111,109,112,97,99,116,0);
          let gesturesb = String.fromCharCode(115,101,110,100,105,110,103,95,49,95,56,56,0);
          let moonS = String.fromCharCode(114,97,105,115,101,0);
          let canvasH = String.fromCharCode(98,108,97,99,107,108,105,115,116,0);
         unselectedb *= 3 * parseInt(`${libfbjnie}`);
         switch_mnd <<= Math.min(Math.abs(switch_mnd * banner0.length), 4);
         banner0 = `${canvasH.length << (Math.min(Math.abs(3), 2))}`;
         gesturesb += `${canvasH.length}`;
         moonS += `${switch_mnd + banner0.length}`;
      }
      if (unselectedb > 1.35) {
         source6 *= 1;
      }
      while ((source6 + libfbjnie) == 5.84 && 3 == (parseInt(`${libfbjnie}`) + source6)) {
         source6 *= 3 + parseInt(`${unselectedb}`);
         break;
      }
      showlessQ = !showlessQ;
   }
      iconnointernetn = [1 / (Math.max(3, upgradeO.length))];
      showlessQ = spinnerP == String.fromCharCode(116,0);
            BTN_MARGIN_RIGHT = 16;

       let smallbrightnessD = String.fromCharCode(108,95,52,48,95,116,114,97,110,115,102,111,114,109,97,116,105,111,110,115,0);
          let nativeM = String.fromCharCode(105,110,116,101,114,102,97,99,101,95,48,95,55,53,0);
          let iconpipshrinkD = String.fromCharCode(112,101,101,108,111,102,102,95,103,95,48,0);
          let flipperD = String.fromCharCode(110,95,51,95,114,101,115,111,117,114,99,101,115,0);
         smallbrightnessD = `${flipperD.length}`;
         nativeM += `${iconpipshrinkD.length | nativeM.length}`;
         iconpipshrinkD = "2";
         flipperD = `${iconpipshrinkD.length}`;
      if (smallbrightnessD.startsWith(`${smallbrightnessD.length}`)) {
         smallbrightnessD = `${smallbrightnessD.length}`;
      }
      if (smallbrightnessD.length > smallbrightnessD.length) {
         smallbrightnessD += "2";
      }
      trophyH += `${2 & predictionbannerh.length}`;
   for (let f = 0; f < 1; f++) {
       let orangev = 5;
       let applicationP = 1.0;
       let expandm = 0.0;
       let basketballtrophyK = String.fromCharCode(115,112,97,114,115,101,110,101,115,115,95,108,95,51,51,0);
       let matchC = true;
      while (basketballtrophyK.includes(`${expandm}`)) {
          let stylesN = 3.0;
         expandm *= parseFloat(`${orangev + 2}`);
         stylesN += parseFloat(`${parseInt(`${stylesN}`)}`);
         break;
      }
      while ((3.40 + expandm) >= 3.92 || !matchC) {
          let thailandQ = true;
          let basketballplayerplaceholder0 = String.fromCharCode(109,95,56,53,95,114,101,112,108,97,99,101,109,101,110,116,115,0);
          let backiconf = String.fromCharCode(116,105,116,108,101,115,0);
          let emojiheart7 = String.fromCharCode(114,101,116,114,97,110,109,105,115,115,105,111,110,0);
          let iconrefresh_ = String.fromCharCode(105,95,50,51,95,97,118,118,115,0);
         matchC = !matchC;
         thailandQ = backiconf.includes(`${thailandQ}`);
         basketballplayerplaceholder0 = `${1 + iconrefresh_.length}`;
         backiconf = `${basketballplayerplaceholder0.length & 3}`;
         emojiheart7 += `${(String.fromCharCode(102,0) == backiconf ? basketballplayerplaceholder0.length : backiconf.length)}`;
         iconrefresh_ += `${basketballplayerplaceholder0.length}`;
         break;
      }
      if ((applicationP + 4.12) > 5.66 && 2 > (orangev << (Math.min(Math.abs(2), 1)))) {
         applicationP += parseFloat(`${orangev}`);
      }
      let borderlessL = applicationP >= 7873784.0;
      do {
         applicationP += (parseFloat(`${(matchC ? 5 : 2)}`));
         if (borderlessL) {
            break;
         }
      } while (borderlessL && ((parseInt(`${applicationP}`) * basketballtrophyK.length) <= 1 && (parseFloat(`${basketballtrophyK.length}`) * applicationP) <= 3.43));
          let themej = 2.0;
          let libffmpegkita = 2.0;
          let configk = true;
         applicationP *= (parseFloat(`${(configk ? 3 : 1) << (Math.min(Math.abs(parseInt(`${applicationP}`)), 2))}`));
         themej -= parseInt(`${libffmpegkita}`) << (Math.min(4, Math.abs(parseInt(`${themej}`))));
         libffmpegkita /= Math.max(3, parseFloat(`${parseInt(`${themej}`) + 3}`));
         configk = 33.36 >= libffmpegkita && themej >= 33.36;
      if (orangev > 1) {
          let executorY = String.fromCharCode(100,105,115,99,111,118,101,114,95,106,95,50,50,0);
          let mountingW = String.fromCharCode(111,110,101,115,95,114,95,51,0);
          let imagenetworkerrs = 3;
          let resultY = String.fromCharCode(102,95,56,50,95,114,101,99,111,110,102,105,103,117,114,97,116,105,111,110,0);
         applicationP -= parseFloat(`${orangev}`);
         executorY += `${1 + mountingW.length}`;
         mountingW += `${(String.fromCharCode(57,0) == resultY ? imagenetworkerrs : resultY.length)}`;
         imagenetworkerrs *= resultY.length >> (Math.min(4, executorY.length));
      }
      if (5.27 > (1 - expandm)) {
         applicationP *= parseFloat(`${orangev + parseInt(`${applicationP}`)}`);
      }
      for (let v = 0; v < 2; v++) {
         applicationP /= Math.max(parseFloat(`${2}`), 3);
      }
      if (orangev < 1) {
          let networkd = true;
          let grayZ = 4.0;
          let bottomA = String.fromCharCode(101,114,114,115,116,114,0);
         orangev <<= Math.min(Math.abs(parseInt(`${grayZ}`)), 5);
         networkd = bottomA.length > 53;
         grayZ -= bottomA.length;
      }
         applicationP += parseFloat(`${2}`);
          let libsentry4 = false;
          let recommendation8: Map<any, any> = new Map([[String.fromCharCode(115,101,108,95,111,95,53,53,0),String.fromCharCode(99,111,110,115,116,116,105,109,101,0)], [String.fromCharCode(119,114,105,116,101,97,108,105,103,110,95,57,95,51,0),String.fromCharCode(115,101,99,116,111,114,0)]]);
          let textp = String.fromCharCode(99,111,110,99,101,97,108,109,101,110,116,95,109,95,54,48,0);
         basketballtrophyK += `${((libsentry4 ? 5 : 2) ^ basketballtrophyK.length)}`;
         libsentry4 = (recommendation8.size - textp.length) < 36;
         recommendation8.set(`${textp}`, (textp == String.fromCharCode(113,0) ? textp.length : recommendation8.size));
      if ((3 - basketballtrophyK.length) > 2 && (4.42 / (Math.max(9, expandm))) > 5.43) {
          let w_centerp: Array<any> = [799, 730, 7];
          let viewerB = 4;
         basketballtrophyK += `${1 - basketballtrophyK.length}`;
         w_centerp = [3];
         viewerB &= 2 - w_centerp.length;
      }
      for (let o = 0; o < 1; o++) {
          let policya = String.fromCharCode(122,95,52,54,95,114,116,112,112,114,111,116,111,0);
          let referrerU = String.fromCharCode(105,100,108,105,115,116,95,115,95,49,48,0);
          let libcxxcomponents9: Map<any, any> = new Map([[String.fromCharCode(97,95,51,51,95,100,101,112,97,99,107,101,116,105,122,101,114,0),968], [String.fromCharCode(102,95,53,51,95,97,115,99,111,110,102,0),179]]);
         basketballtrophyK = "1";
         policya += `${policya.length ^ 2}`;
         referrerU += "1";
         libcxxcomponents9 = new Map([[`${libcxxcomponents9.size}`, policya.length]]);
      }
      while (3.14 <= applicationP) {
         applicationP -= parseFloat(`${parseInt(`${applicationP}`) - 1}`);
         break;
      }
      while (2 < (basketballtrophyK.length - parseInt(`${applicationP}`)) || 2.16 < (parseFloat(`${basketballtrophyK.length}`) - applicationP)) {
         applicationP += parseFloat(`${basketballtrophyK.length}`);
         break;
      }
      libtanq = new Map([[`${libtanq.size}`, parseInt(`${arrowrightwithtailH}`)]]);
   }
   while (privatechatbge.includes(`${thumbnailP}`)) {
      thumbnailP = trophyH.length < 35;
      break;
   }
            cardWidth += Math.floor(excess / CARDS_PER_ROW)  
        }

        setCardsPerRow(CARDS_PER_ROW);

   while ((1 - iconJ.length) < 4 || 1 < (iconJ.length - libtanq.size)) {
       let iconeyeC = String.fromCharCode(115,95,50,54,95,101,118,101,114,121,111,110,101,0);
       let filed: Map<any, any> = new Map([[String.fromCharCode(105,95,54,54,95,110,101,119,108,105,110,101,115,0),false ], [String.fromCharCode(114,95,57,51,95,115,105,108,101,110,99,101,0),true ]]);
       let binddatast = String.fromCharCode(115,111,108,117,116,105,111,110,95,56,95,52,49,0);
       let armva6 = String.fromCharCode(102,116,118,102,111,108,100,101,114,99,108,111,115,101,100,95,107,95,50,56,0);
       let constantsm = 5.0;
         filed = new Map([[iconeyeC, 3 + parseInt(`${constantsm}`)]]);
      if (armva6.length >= 5) {
          let notification2: Array<any> = [String.fromCharCode(117,100,116,97,95,53,95,55,56,0), String.fromCharCode(116,114,97,110,115,109,105,116,0), String.fromCharCode(119,114,105,116,101,120,95,104,95,49,0)];
          let libavutilH = String.fromCharCode(99,104,105,109,112,95,113,95,49,57,0);
          let basketballc = 2.0;
         constantsm *= filed.size;
         notification2 = [parseInt(`${basketballc}`) << (Math.min(Math.abs(2), 4))];
         libavutilH += "3";
         basketballc -= (String.fromCharCode(85,0) == libavutilH ? libavutilH.length : parseInt(`${basketballc}`));
      }
         constantsm /= Math.max(5, parseInt(`${constantsm}`) - armva6.length);
      for (let c = 0; c < 2; c++) {
          let schedulert = String.fromCharCode(114,95,52,52,95,102,111,108,100,101,114,0);
          let path9 = true;
          let reducer9 = String.fromCharCode(98,105,110,100,120,95,57,95,55,50,0);
          let tempnodatagif4 = false;
         armva6 = `${armva6.length / (Math.max(3, 10))}`;
         schedulert += `${((tempnodatagif4 ? 4 : 2) - 3)}`;
         path9 = 46 > schedulert.length;
         reducer9 += `${((tempnodatagif4 ? 4 : 4) ^ 1)}`;
      }
         armva6 = `${iconeyeC.length}`;
      for (let o = 0; o < 3; o++) {
         constantsm *= 3 % (Math.max(1, armva6.length));
      }
         iconeyeC = `${binddatast.length}`;
      let greyarrowupC = constantsm >= 5937352.0;
      do {
         constantsm += filed.size * armva6.length;
         if (greyarrowupC) {
            break;
         }
      } while (greyarrowupC && (1 == (iconeyeC.length / 2)));
         binddatast += `${armva6.length}`;
      for (let i = 0; i < 1; i++) {
          let basketballmatchdetailbgw = String.fromCharCode(116,119,101,97,107,115,95,108,95,52,54,0);
          let iconpointscoreN = 3.0;
         armva6 += `${1 * parseInt(`${iconpointscoreN}`)}`;
         basketballmatchdetailbgw = `${basketballmatchdetailbgw.length ^ 2}`;
         iconpointscoreN /= Math.max(3, parseFloat(`${basketballmatchdetailbgw.length ^ 3}`));
      }
      for (let f = 0; f < 2; f++) {
         armva6 += `${parseInt(`${constantsm}`) - filed.size}`;
      }
      while (5 == (2 - iconeyeC.length) && (iconeyeC.length - 2) == 4) {
          let whistleT = 1.0;
          let defaultteamx = 1;
          let scrollviewD = String.fromCharCode(115,99,97,108,101,0);
          let libglog4 = String.fromCharCode(100,105,97,108,111,103,117,101,115,0);
          let iconsubssuccessx: Map<any, any> = new Map([[String.fromCharCode(114,101,115,101,116,115,95,102,95,54,50,0),105], [String.fromCharCode(101,95,52,50,95,100,101,109,117,120,101,114,115,0),752], [String.fromCharCode(115,119,97,98,0),445]]);
         iconeyeC += "2";
         whistleT *= parseFloat(`${3 - libglog4.length}`);
         defaultteamx %= Math.max(parseInt(`${whistleT}`), 3);
         scrollviewD = "3";
         libglog4 = `${(libglog4 == String.fromCharCode(108,0) ? scrollviewD.length : libglog4.length)}`;
         iconsubssuccessx.set(`${defaultteamx}`, iconsubssuccessx.size);
         break;
      }
      while ((iconeyeC.length * filed.size) < 2 || (iconeyeC.length * 2) < 3) {
         filed = new Map([[iconeyeC, 2]]);
         break;
      }
      while (parseInt(`${constantsm}`) >= armva6.length) {
          let libreanimated_ = String.fromCharCode(98,95,56,54,95,117,110,109,97,112,0);
          let umengj = 2.0;
          let e_countW = 2;
         armva6 += `${libreanimated_.length ^ 2}`;
         libreanimated_ += `${2 - e_countW}`;
         umengj *= parseFloat(`${e_countW}`);
         break;
      }
          let turnM = String.fromCharCode(114,101,115,101,116,95,114,95,53,53,0);
          let pointR = String.fromCharCode(122,95,49,48,95,117,110,109,97,114,115,104,97,108,0);
         armva6 = `${armva6.length}`;
         turnM = `${turnM.length + pointR.length}`;
         pointR = `${turnM.length}`;
      iconJ = `${parseInt(`${arrowrightwithtailH}`) | libflipperE.length}`;
      break;
   }
   if (!iconJ.endsWith(`${showlessQ}`)) {
      iconJ = "3";
   }
      arrowrightwithtailH /= Math.max(spinnerP.length, 2);
        setMarginRight(BTN_MARGIN_RIGHT);

      privatechatbge = `${parseInt(`${arrowrightwithtailH}`) | iconnointernetn.length}`;
   for (let s = 0; s < 2; s++) {
       let assets8 = String.fromCharCode(99,95,53,52,95,97,114,101,110,97,115,0);
       let overlayw = 5.0;
      let dependenciesi = String.fromCharCode(109,103,99,116,0) == assets8;
      do {
          let downarrowT = 2.0;
         assets8 += `${parseInt(`${downarrowT}`)}`;
         if (dependenciesi) {
            break;
         }
      } while ((assets8.length > parseInt(`${overlayw}`)) && dependenciesi);
       let update_hb = 5.0;
       let middleh = 4.0;
      let libavfilter4 = overlayw <= 7745983.0;
      do {
          let foundp: Array<any> = [192, 110, 684];
         overlayw += parseFloat(`${assets8.length << (Math.min(3, Math.abs(parseInt(`${update_hb}`))))}`);
         foundp.push(foundp.length + foundp.length);
         if (libavfilter4) {
            break;
         }
      } while (libavfilter4 && (update_hb > 1.100));
         middleh /= Math.max(4, (assets8 == String.fromCharCode(77,0) ? parseInt(`${overlayw}`) : assets8.length));
      if ((1 - assets8.length) <= 3) {
         middleh *= parseInt(`${overlayw}`);
      }
      while (assets8.includes(`${update_hb}`)) {
         update_hb /= Math.max(5, parseInt(`${middleh}`));
         break;
      }
      iconnointernetn.push(libflipperE.length + parseInt(`${arrowrightwithtailH}`));
   }
       let imagemanagerX = true;
      while (imagemanagerX) {
          let darkN = String.fromCharCode(99,108,111,117,100,102,108,97,114,101,0);
         imagemanagerX = ((darkN.length & (imagemanagerX ? 65 : darkN.length)) >= 65);
         break;
      }
      for (let q = 0; q < 3; q++) {
         imagemanagerX = !imagemanagerX;
      }
      for (let d = 0; d < 2; d++) {
         imagemanagerX = !imagemanagerX;
      }
      arrowrightwithtailH += privatechatbge.length % (Math.max(1, 9));
        setCardWidth(cardWidth);

   while (iconJ.includes(`${showlessQ}`)) {
      iconJ += `${predictionbannerh.length}`;
      break;
   }
   while (privatechatbge.length < upgradeO.length) {
       let kuaishoup = 2;
       let scorem = true;
       let headeri = 0;
       let vipsportP: Array<any> = [String.fromCharCode(115,108,97,115,104,101,115,0), String.fromCharCode(106,95,51,48,95,100,111,119,110,108,111,97,100,105,110,103,0), String.fromCharCode(107,95,51,52,95,100,101,108,101,103,97,116,101,115,0)];
      if (5 >= (kuaishoup & 2)) {
          let weatherF: Map<any, any> = new Map([[String.fromCharCode(100,118,98,115,117,98,95,111,95,49,54,0),670], [String.fromCharCode(112,105,112,101,108,105,110,101,95,110,95,57,48,0),406], [String.fromCharCode(97,95,56,51,95,100,101,115,99,114,105,112,116,105,111,110,115,0),15]]);
          let kuaishou9 = String.fromCharCode(111,95,54,51,95,104,113,100,110,100,0);
          let stringsU = 5;
          let dacccfaabfbcbadeebddcabacdffdbl = String.fromCharCode(103,95,53,48,95,108,105,110,101,98,114,101,97,107,0);
          let album7 = String.fromCharCode(102,108,97,99,0);
         scorem = 21 <= vipsportP.length;
         weatherF = new Map([[`${weatherF.size}`, weatherF.size ^ 3]]);
         kuaishou9 = `${weatherF.size << (Math.min(Math.abs(1), 2))}`;
         stringsU |= (kuaishou9 == String.fromCharCode(52,0) ? dacccfaabfbcbadeebddcabacdffdbl.length : kuaishou9.length);
         dacccfaabfbcbadeebddcabacdffdbl += `${(String.fromCharCode(75,0) == dacccfaabfbcbadeebddcabacdffdbl ? stringsU : dacccfaabfbcbadeebddcabacdffdbl.length)}`;
         album7 = `${album7.length + weatherF.size}`;
      }
      while ((headeri & 2) < 5) {
          let subouti = String.fromCharCode(101,95,54,49,95,105,115,100,105,103,105,116,0);
         scorem = subouti.length > 6 || kuaishoup > 6;
         break;
      }
      for (let c = 0; c < 1; c++) {
          let orangedownarrows = 5.0;
          let modeb = 4.0;
          let knewsshareG = String.fromCharCode(110,95,56,54,95,105,110,102,111,115,0);
         vipsportP.push(headeri);
         orangedownarrows += knewsshareG.length >> (Math.min(5, Math.abs(parseInt(`${modeb}`))));
         modeb += parseInt(`${orangedownarrows}`) - 3;
         knewsshareG += `${1 % (Math.max(2, parseInt(`${orangedownarrows}`)))}`;
      }
         vipsportP.push(kuaishoup << (Math.min(4, Math.abs(1))));
       let lessT = String.fromCharCode(100,95,57,51,95,105,116,101,114,97,116,105,111,110,0);
       let componentsd = String.fromCharCode(100,101,99,108,0);
         lessT = `${vipsportP.length}`;
       let issuba = 0.0;
       let bootsplash1 = 1.0;
      while (vipsportP.length >= 1) {
          let profilepicA = 3.0;
          let faviconw = String.fromCharCode(115,95,49,57,95,115,99,116,112,0);
          let episodesO = String.fromCharCode(97,95,50,49,95,115,104,97,112,101,115,0);
          let setting7 = 1.0;
          let hookZ: Array<any> = [770, 21];
         vipsportP = [vipsportP.length + episodesO.length];
         profilepicA *= parseInt(`${profilepicA}`);
         faviconw += `${parseInt(`${profilepicA}`)}`;
         episodesO = `${parseInt(`${setting7}`) * hookZ.length}`;
         setting7 *= faviconw.length - 1;
         hookZ.push(hookZ.length);
         break;
      }
          let halffieldimagep = String.fromCharCode(99,108,97,115,115,95,53,95,53,56,0);
          let giflivestreamingR = 3.0;
         scorem = componentsd == String.fromCharCode(71,0);
         halffieldimagep = `${halffieldimagep.length % (Math.max(2, parseInt(`${giflivestreamingR}`)))}`;
         giflivestreamingR *= parseFloat(`${3}`);
      for (let b = 0; b < 1; b++) {
         kuaishoup /= Math.max(2, headeri + 1);
      }
         lessT = `${headeri - componentsd.length}`;
      if (3 > (2 % (Math.max(1, kuaishoup))) || 1 > (kuaishoup % 2)) {
          let guider: Array<any> = [221, 268, 636];
          let airbnbstarQ = false;
         kuaishoup &= parseInt(`${bootsplash1}`) ^ vipsportP.length;
         guider.push(((airbnbstarQ ? 1 : 3) >> (Math.min(Math.abs(3), 5))));
         airbnbstarQ = guider.length < 43;
      }
      privatechatbge = `${((thumbnailP ? 1 : 1) >> (Math.min(vipsportP.length, 1)))}`;
      break;
   }
   while (showlessQ && predictionbannerh.length >= 3) {
      predictionbannerh = `${notificationgrayl.size}`;
      break;
   }
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