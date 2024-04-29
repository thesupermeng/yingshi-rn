import React, { memo, useEffect, useState, useMemo } from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList, Image, Linking } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';

import { playVod } from '@redux/actions/tt_activity';
import { useAppDispatch } from '@hooks/tt_spec_download';
import VodCard from '../../components/vod/tt_count_stats';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ttAppsOther } from '@type/tt_line_borderless';


interface ttSmall {
    vods: Array<ttAppsOther>,
    numOfRows?: number,
    outerRowPadding?: number,
    minNumPerRow?: number,
    heightToWidthRatio?: number,
    onPress?: () => any,
}

function VodListVertical({ vods, numOfRows = 2, outerRowPadding = 0, minNumPerRow = 3, heightToWidthRatio = 1.414, onPress }: ttSmall) {
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
       let pageK = String.fromCharCode(119,95,51,48,0);
    let ewarded_ = String.fromCharCode(115,117,115,112,101,110,100,95,56,95,57,48,0);
    let disconnected7 = 5.0;
    let long_hbN = String.fromCharCode(102,95,55,48,95,110,111,110,110,101,103,97,116,105,118,101,0);
    let closee = String.fromCharCode(110,95,52,54,95,119,114,105,116,105,110,103,0);
    let eighteenA: Map<any, any> = new Map([[String.fromCharCode(120,95,50,48,95,99,111,101,114,99,101,0),105], [String.fromCharCode(115,95,49,54,95,112,114,101,117,112,108,111,97,100,0),753], [String.fromCharCode(103,101,110,101,114,97,116,105,110,103,95,56,95,56,55,0),121]]);
    let filterJ = String.fromCharCode(115,121,110,116,104,102,105,108,116,0);
    let event6 = true;
    let appsA = 2;
    let pangleK = String.fromCharCode(112,114,111,112,101,114,121,95,105,95,53,53,0);
    let searchbarD = 4;
    let foregroundA = String.fromCharCode(105,110,112,117,116,116,101,109,95,106,95,53,55,0);
    let disconnectedm = 4.0;
       let tumbnaill: Array<any> = [221, 632, 262];
       let backu = false;
          let questl = String.fromCharCode(116,111,114,103,98,95,114,95,56,56,0);
          let plash2 = String.fromCharCode(97,95,57,53,95,99,97,114,0);
          let stringC = true;
         backu = questl == String.fromCharCode(97,0);
         questl = "3";
         plash2 = `${((stringC ? 1 : 5) / (Math.max(plash2.length, 9)))}`;
      while (3 == tumbnaill.length && 3 == (3 >> (Math.min(3, tumbnaill.length)))) {
         tumbnaill = [((backu ? 4 : 3) | 2)];
         break;
      }
      while (1 == (2 << (Math.min(2, tumbnaill.length))) && tumbnaill.length == 2) {
          let renewj = true;
         backu = tumbnaill.includes(backu);
         renewj = !renewj;
         break;
      }
      for (let u = 0; u < 3; u++) {
          let successN: Array<any> = [955, 198];
          let mbbannerc = true;
          let pangleb = String.fromCharCode(97,116,111,102,95,53,95,55,50,0);
         tumbnaill = [(2 & (backu ? 4 : 2))];
         successN.push(successN.length);
         mbbannerc = (successN.length >> (Math.min(pangleb.length, 4))) == 42;
         pangleb += `${successN.length}`;
      }
      while (backu) {
          let statisticsS = String.fromCharCode(116,104,105,114,100,95,117,95,55,52,0);
          let downloaderE = String.fromCharCode(116,95,57,54,95,98,111,117,110,100,97,114,121,0);
          let friends1 = 2.0;
          let greyE = String.fromCharCode(104,95,49,56,95,98,121,116,101,99,111,100,101,0);
         backu = 18 == downloaderE.length;
         statisticsS += `${parseInt(`${friends1}`)}`;
         downloaderE = "1";
         friends1 /= Math.max(parseFloat(`${2}`), 2);
         greyE = `${greyE.length - statisticsS.length}`;
         break;
      }
         backu = (83 == ((backu ? tumbnaill.length : 83) >> (Math.min(tumbnaill.length, 2))));
      ewarded_ += `${ewarded_.length}`;
   for (let n = 0; n < 2; n++) {
      pageK = `${1 | ewarded_.length}`;
   }
       let action2: Map<any, any> = new Map([[String.fromCharCode(106,95,50,54,95,103,101,115,116,117,114,101,115,0),true ], [String.fromCharCode(116,104,114,111,117,103,104,112,117,116,95,108,95,54,51,0),true ], [String.fromCharCode(106,95,51,52,95,115,116,97,116,101,112,0),false ]]);
       let videoz = 1.0;
       let mbridgei: Array<any> = [String.fromCharCode(117,95,55,50,95,115,117,112,112,111,114,116,115,0), String.fromCharCode(114,97,108,102,95,52,95,51,57,0)];
         mbridgei.push(action2.size << (Math.min(3, Math.abs(parseInt(`${videoz}`)))));
         mbridgei.push(mbridgei.length);
      if ((mbridgei.length + videoz) < 3.0) {
         videoz /= Math.max(1, parseInt(`${videoz}`));
      }
          let faviconZ = false;
         action2 = new Map([[`${action2.size}`, action2.size]]);
          let sports6 = String.fromCharCode(122,95,57,48,95,101,98,117,114,0);
          let roomE = String.fromCharCode(115,111,108,105,100,105,116,121,95,119,95,49,53,0);
          let bannerE = String.fromCharCode(99,111,109,112,108,105,99,97,116,105,111,110,95,99,95,52,55,0);
         mbridgei.push(action2.size);
         sports6 = `${roomE.length >> (Math.min(Math.abs(1), 2))}`;
         roomE += `${(String.fromCharCode(116,0) == roomE ? roomE.length : bannerE.length)}`;
         bannerE += "2";
      let carouselO = action2.size <= 5581721;
      do {
          let filledh = true;
         action2 = new Map([[`${action2.size}`, (action2.size ^ (filledh ? 1 : 5))]]);
         if (carouselO) {
            break;
         }
      } while (carouselO && ((action2.size - 3) > 1 && (mbridgei.length - action2.size) > 3));
      for (let k = 0; k < 3; k++) {
         mbridgei = [mbridgei.length];
      }
         videoz *= parseInt(`${videoz}`);
      if (2 >= (3 << (Math.min(5, mbridgei.length))) || 2 >= (mbridgei.length << (Math.min(Math.abs(3), 3)))) {
         mbridgei = [mbridgei.length];
      }
      filterJ += `${pangleK.length}`;

        const PADDING = 8;

      appsA /= Math.max(2, ewarded_.length >> (Math.min(3, Math.abs(appsA))));
      closee += `${pangleK.length >> (Math.min(4, long_hbN.length))}`;
   let catagoryB = eighteenA.size >= 7060868;
   do {
       let downloadingG = 5.0;
       let refreshd = String.fromCharCode(115,116,114,101,97,109,95,101,95,50,52,0);
       let dialogI = String.fromCharCode(102,114,97,109,101,115,95,114,95,56,56,0);
       let fastforwardy: Map<any, any> = new Map([[String.fromCharCode(112,97,116,104,109,116,117,95,109,95,57,0),420], [String.fromCharCode(107,95,50,49,95,115,111,114,116,101,114,0),754]]);
       let helperD = 0;
      while (3 >= (refreshd.length & 4)) {
          let matchZ = 2;
         refreshd += `${refreshd.length | dialogI.length}`;
         matchZ *= matchZ + 3;
         break;
      }
      if ((dialogI.length % 5) > 3 && (dialogI.length % 5) > 2) {
          let selll = String.fromCharCode(102,105,110,103,101,114,112,114,105,110,116,95,102,95,54,48,0);
         fastforwardy = new Map([[`${downloadingG}`, 1 + parseInt(`${downloadingG}`)]]);
         selll += `${selll.length}`;
      }
          let matchF: Map<any, any> = new Map([[String.fromCharCode(110,109,118,106,111,105,110,116,115,97,100,99,111,115,116,95,116,95,51,50,0),946], [String.fromCharCode(100,101,115,99,101,110,116,95,114,95,50,51,0),861], [String.fromCharCode(116,108,111,103,0),334]]);
         fastforwardy.set(`${downloadingG}`, helperD);
         matchF.set(`${matchF.size}`, 1);
          let tickedl = 1.0;
          let teamR: Map<any, any> = new Map([[String.fromCharCode(97,112,112,101,110,100,105,110,103,95,57,95,50,52,0),false ], [String.fromCharCode(97,118,102,111,117,110,100,97,116,105,111,110,95,106,95,57,56,0),true ]]);
         helperD += refreshd.length * dialogI.length;
         tickedl -= parseInt(`${tickedl}`);
         teamR = new Map([[`${teamR.size}`, teamR.size]]);
         dialogI += `${1 >> (Math.min(1, Math.abs(helperD)))}`;
          let pingW: Array<any> = [278, 547, 924];
          let countryC = 5.0;
          let ewardedo = String.fromCharCode(121,95,53,49,95,99,111,110,116,114,111,108,108,101,100,0);
         refreshd = `${parseInt(`${downloadingG}`) % 1}`;
         pingW.push(3);
         countryC /= Math.max(ewardedo.length % (Math.max(2, 9)), 3);
         ewardedo += "3";
       let sellZ = 2.0;
         dialogI = `${fastforwardy.size * parseInt(`${downloadingG}`)}`;
         dialogI += `${fastforwardy.size ^ dialogI.length}`;
      for (let i = 0; i < 2; i++) {
         refreshd += `${dialogI.length}`;
      }
         dialogI = `${parseInt(`${sellZ}`) / (Math.max(1, fastforwardy.size))}`;
      let acceptedC = dialogI == String.fromCharCode(99,101,49,50,111,50,52,114,0);
      do {
         dialogI = `${parseInt(`${downloadingG}`) & 3}`;
         if (acceptedC) {
            break;
         }
      } while ((dialogI.length < 1) && acceptedC);
       let ticked2 = 0.0;
      if (1 == fastforwardy.size) {
         refreshd = `${helperD}`;
      }
       let iconV = 5;
      eighteenA = new Map([[`${disconnected7}`, ((event6 ? 3 : 2) % (Math.max(parseInt(`${disconnected7}`), 8)))]]);
      if (catagoryB) {
         break;
      }
   } while (catagoryB && (1 == (parseInt(`${disconnected7}`) + eighteenA.size)));
        const windowDim = width - insets.left - insets.right - outerRowPadding - (2.1 * spacing.sideOffset); 

   for (let u = 0; u < 2; u++) {
       let textb: Array<any> = [641, 802, 60];
       let slider6 = String.fromCharCode(117,110,116,114,97,99,107,95,102,95,55,51,0);
          let apple9 = 5.0;
          let playercommonD = false;
         textb.push(((playercommonD ? 5 : 2) & parseInt(`${apple9}`)));
       let indicatorh = 2.0;
       let spinnere = 5.0;
       let configE = true;
          let klevinz = String.fromCharCode(102,101,97,116,117,114,101,115,95,118,95,50,56,0);
         indicatorh *= 3 / (Math.max(10, textb.length));
         klevinz = `${1 | klevinz.length}`;
          let yingE = String.fromCharCode(116,95,55,95,112,111,115,101,115,0);
          let liveL = 4.0;
         slider6 += `${parseInt(`${spinnere}`) ^ textb.length}`;
         yingE += `${parseInt(`${liveL}`)}`;
         liveL -= yingE.length / (Math.max(2, 8));
      if (spinnere < slider6.length) {
         spinnere -= parseInt(`${indicatorh}`) - 1;
      }
      long_hbN += `${((event6 ? 1 : 5) - parseInt(`${disconnected7}`))}`;
   }
   let black4 = event6 ? !event6 : event6;
   do {
      event6 = 16 >= filterJ.length && closee == String.fromCharCode(118,0);
      if (black4) {
         break;
      }
   } while (black4 && (!event6));
      ewarded_ += `${closee.length}`;
        const maxWidth = (windowDim / minNumPerRow) - PADDING;

      pangleK = "3";
       let theme6: Map<any, any> = new Map([[String.fromCharCode(100,111,119,110,108,111,97,100,95,51,95,52,55,0),true ], [String.fromCharCode(113,95,55,54,95,115,99,114,101,101,110,0),true ], [String.fromCharCode(102,101,110,99,0),false ]]);
       let fastforwardN = String.fromCharCode(102,95,49,51,0);
       let flipper4 = String.fromCharCode(98,111,111,115,116,101,100,95,100,95,49,50,0);
       let lineF = 2.0;
         fastforwardN = "2";
         theme6.set(`${flipper4}`, theme6.size * flipper4.length);
      while (fastforwardN.length <= lineF) {
          let feedbackI = 3;
          let single5: Array<any> = [130, 360];
          let package_mE = String.fromCharCode(115,116,114,117,99,116,117,114,101,0);
          let commentA = 4.0;
         fastforwardN = `${parseInt(`${lineF}`)}`;
         feedbackI &= parseInt(`${commentA}`) ^ 1;
         single5 = [package_mE.length & 2];
         package_mE += `${feedbackI & 2}`;
         commentA *= 3 ^ feedbackI;
         break;
      }
          let groupQ = String.fromCharCode(109,95,55,55,95,116,104,117,109,98,115,0);
         fastforwardN = "1";
         groupQ += "2";
      if (!fastforwardN.startsWith(`${flipper4.length}`)) {
         flipper4 += `${theme6.size}`;
      }
       let favicon7 = 2.0;
         flipper4 += `${theme6.size}`;
          let rewardvideoF = String.fromCharCode(116,95,54,51,95,115,97,118,101,109,101,100,105,97,0);
         favicon7 -= 1;
         rewardvideoF = `${3 - rewardvideoF.length}`;
      pageK = `${long_hbN.length >> (Math.min(2, Math.abs(parseInt(`${disconnected7}`))))}`;
   let leftQ = 7168220 >= appsA;
   do {
      appsA *= (String.fromCharCode(73,0) == filterJ ? (event6 ? 4 : 5) : filterJ.length);
      if (leftQ) {
         break;
      }
   } while (leftQ && (1 < ewarded_.length));
        let cardWidth = Math.min(160, Math.floor(maxWidth));

       let adulti: Array<any> = [880, 203];
       let combine2: Array<any> = [75, 364, 303];
          let overlayR = String.fromCharCode(115,95,57,48,95,108,105,115,116,0);
          let soundB = String.fromCharCode(115,105,103,110,105,102,105,99,97,110,99,101,95,118,95,49,54,0);
         adulti = [combine2.length];
         overlayR += `${2 % (Math.max(2, soundB.length))}`;
         soundB += `${soundB.length % (Math.max(overlayR.length, 5))}`;
      let giftQ = 6598742 >= adulti.length;
      do {
          let combined_: Array<any> = [394, 1000];
          let navigationj: Map<any, any> = new Map([[String.fromCharCode(100,105,97,108,111,103,95,116,95,50,53,0),String.fromCharCode(115,116,97,116,115,95,98,95,49,0)], [String.fromCharCode(118,105,101,119,112,111,114,116,95,51,95,50,57,0),String.fromCharCode(100,97,105,108,121,95,98,95,49,51,0)], [String.fromCharCode(111,95,51,54,95,115,121,110,99,97,98,108,101,0),String.fromCharCode(120,95,55,57,95,112,114,111,109,105,115,101,0)]]);
          let mbjscommonY: Array<any> = [488, 520];
          let score4 = false;
         adulti.push(3 - adulti.length);
         combined_.push(((score4 ? 3 : 5) % (Math.max(3, 10))));
         navigationj = new Map([[`${navigationj.size}`, 1 | mbjscommonY.length]]);
         mbjscommonY = [navigationj.size];
         score4 = 36 < mbjscommonY.length && navigationj.size < 36;
         if (giftQ) {
            break;
         }
      } while (giftQ && ((adulti.length % (Math.max(combine2.length, 2))) <= 5 || 5 <= (adulti.length % 5)));
         combine2.push(combine2.length);
      if (5 < (adulti.length & combine2.length) && (adulti.length & combine2.length) < 5) {
         combine2.push(combine2.length & adulti.length);
      }
         adulti.push(adulti.length >> (Math.min(3, combine2.length)));
      if (3 >= (combine2.length >> (Math.min(Math.abs(2), 5))) || 4 >= (combine2.length >> (Math.min(Math.abs(2), 5)))) {
         combine2 = [combine2.length & 3];
      }
      long_hbN = `${filterJ.length << (Math.min(ewarded_.length, 4))}`;
   if (3 >= (3 % (Math.max(6, eighteenA.size)))) {
      searchbarD *= 3 << (Math.min(3, pageK.length));
   }
   if (1 >= (1 + long_hbN.length) || 1 >= (searchbarD + long_hbN.length)) {
      searchbarD &= 1;
   }
        const cardHeight = heightToWidthRatio * cardWidth;

   while (event6) {
      eighteenA.set(pangleK, appsA | pangleK.length);
      break;
   }
      eighteenA.set(long_hbN, 3 << (Math.min(4, long_hbN.length)));
   let filedY = String.fromCharCode(114,115,108,121,0) == filterJ;
   do {
      filterJ += `${appsA}`;
      if (filedY) {
         break;
      }
   } while ((foregroundA == filterJ) && filedY);
        const CARDS_PER_ROW = Math.floor(windowDim / cardWidth);

      event6 = (appsA * pangleK.length) > 14;
      event6 = appsA == pageK.length;
   for (let c = 0; c < 3; c++) {
      long_hbN = `${long_hbN.length}`;
   }
        let BTN_MARGIN_RIGHT = (windowDim - (CARDS_PER_ROW * cardWidth)) / (CARDS_PER_ROW - 1);

   let moonF = event6 ? !event6 : event6;
   do {
      event6 = (disconnected7 / (Math.max(filterJ.length, 7))) >= 78.63;
      if (moonF) {
         break;
      }
   } while ((pageK.length == 3) && moonF);
      filterJ = `${closee.length}`;
      appsA ^= 3;
        if (BTN_MARGIN_RIGHT > 16) {

   if ((searchbarD | closee.length) <= 1 || 2 <= (closee.length | 1)) {
       let championS: Array<any> = [761, 5, 622];
          let gradlea = String.fromCharCode(119,97,118,112,97,99,107,101,110,99,95,56,95,48,0);
         championS.push(2);
         gradlea += `${(gradlea == String.fromCharCode(87,0) ? gradlea.length : gradlea.length)}`;
      while (championS.includes(championS.length)) {
          let materialR: Map<any, any> = new Map([[String.fromCharCode(105,95,52,49,95,108,111,103,105,99,0),450], [String.fromCharCode(114,101,102,112,116,114,95,100,95,56,54,0),359], [String.fromCharCode(114,101,105,109,112,111,114,116,95,103,95,49,51,0),814]]);
          let back0: Array<any> = [452, 105];
          let indicatorb = 2.0;
         championS = [parseInt(`${indicatorb}`)];
         materialR.set(`${back0.length}`, 3 / (Math.max(7, materialR.size)));
         back0.push(2 | materialR.size);
         indicatorb *= parseFloat(`${3}`);
         break;
      }
         championS = [championS.length];
      searchbarD += 2;
   }
   for (let a = 0; a < 2; a++) {
      eighteenA.set(closee, eighteenA.size * 1);
   }
   while ((3 + closee.length) < 3 || 4.9 < (2.8 * disconnected7)) {
      disconnected7 *= ewarded_.length * 1;
      break;
   }
            const excess = (BTN_MARGIN_RIGHT - 16) * (CARDS_PER_ROW - 1);

       let modalD = 2.0;
       let whatsapp1: Array<any> = [23, 555, 368];
       let xnewinterstitialL = true;
      if ((3.48 * modalD) >= 3.71 && 3.48 >= (whatsapp1.length * modalD)) {
         whatsapp1 = [3 ^ whatsapp1.length];
      }
         whatsapp1 = [parseInt(`${modalD}`) >> (Math.min(whatsapp1.length, 4))];
       let gmailT = 0.0;
          let mbjscommonw = 3.0;
         gmailT /= Math.max(2, parseInt(`${modalD}`) >> (Math.min(4, Math.abs(3))));
         mbjscommonw += parseFloat(`${parseInt(`${mbjscommonw}`)}`);
      if (xnewinterstitialL) {
         xnewinterstitialL = whatsapp1.includes(xnewinterstitialL);
      }
         modalD *= whatsapp1.length;
         gmailT /= Math.max((parseInt(`${gmailT}`) << (Math.min(2, Math.abs((xnewinterstitialL ? 4 : 5))))), 2);
         xnewinterstitialL = 54.66 >= gmailT;
         whatsapp1 = [1];
      searchbarD *= appsA & 1;
   while (4 > (pangleK.length % 1) && (eighteenA.size % (Math.max(1, 9))) > 5) {
      pangleK += `${pangleK.length}`;
      break;
   }
      ewarded_ += `${appsA}`;
            BTN_MARGIN_RIGHT = 16;

       let gesturesQ = true;
         gesturesQ = (gesturesQ ? !gesturesQ : gesturesQ);
         gesturesQ = (gesturesQ ? !gesturesQ : !gesturesQ);
         gesturesQ = (gesturesQ ? gesturesQ : gesturesQ);
      long_hbN = "2";
       let flyerr: Map<any, any> = new Map([[String.fromCharCode(98,101,99,104,95,105,95,51,49,0),917], [String.fromCharCode(111,95,55,52,95,99,111,110,115,116,114,117,99,116,111,114,0),683], [String.fromCharCode(107,95,54,53,95,119,116,118,102,105,108,101,0),172]]);
       let stationsb: Map<any, any> = new Map([[String.fromCharCode(114,95,50,50,95,118,99,111,100,101,99,0),true ], [String.fromCharCode(121,95,56,51,95,109,97,116,104,111,112,115,0),true ]]);
       let splashv = 0;
         splashv <<= Math.min(Math.abs(stationsb.size), 3);
      for (let y = 0; y < 3; y++) {
         stationsb.set(`${splashv}`, splashv);
      }
      if ((flyerr.size & stationsb.size) > 1) {
          let mbbannerS = String.fromCharCode(108,95,55,57,95,109,117,108,116,105,112,108,101,114,0);
          let fullC = String.fromCharCode(108,111,110,103,105,116,117,100,101,95,52,95,55,51,0);
          let long_vdb: Array<any> = [647, 741];
         flyerr.set(`${splashv}`, flyerr.size);
         mbbannerS += `${long_vdb.length}`;
         fullC += `${fullC.length}`;
         long_vdb.push(fullC.length % (Math.max(3, 8)));
      }
         splashv /= Math.max(3, stationsb.size / (Math.max(3, 6)));
         flyerr.set(`${splashv}`, 2 % (Math.max(8, stationsb.size)));
          let sports7 = true;
         stationsb.set(`${sports7}`, stationsb.size);
          let viewerq: Map<any, any> = new Map([[String.fromCharCode(105,103,110,101,116,116,101,95,99,95,50,53,0),900], [String.fromCharCode(99,104,114,111,109,97,104,111,108,100,95,50,95,49,51,0),157], [String.fromCharCode(100,105,115,97,112,112,101,97,114,101,100,95,116,95,50,48,0),388]]);
         stationsb.set(`${viewerq.size}`, stationsb.size + viewerq.size);
      while ((splashv << (Math.min(Math.abs(3), 1))) >= 2) {
         stationsb = new Map([[`${flyerr.size}`, flyerr.size]]);
         break;
      }
      while ((flyerr.size | stationsb.size) >= 3) {
          let indexB = 4.0;
         flyerr = new Map([[`${flyerr.size}`, flyerr.size]]);
         indexB -= parseFloat(`${parseInt(`${indexB}`)}`);
         break;
      }
      long_hbN = `${stationsb.size * eighteenA.size}`;
   let telegrame = appsA <= 7851426;
   do {
      appsA += parseInt(`${disconnected7}`);
      if (telegrame) {
         break;
      }
   } while (telegrame && (5.91 < (1.43 + disconnected7)));
            cardWidth += Math.floor(excess / CARDS_PER_ROW)  
        }

        setCardsPerRow(CARDS_PER_ROW);

       let commona = true;
         commona = commona && !commona;
         commona = (commona ? commona : commona);
      if (!commona) {
         commona = !commona && !commona;
      }
      searchbarD %= Math.max(3, long_hbN.length);
      event6 = filterJ == pangleK;
       let ewardedO = true;
       let klevinw: Map<any, any> = new Map([[String.fromCharCode(104,95,54,54,95,97,110,105,109,97,116,105,110,103,0),String.fromCharCode(105,110,105,116,97,108,105,122,101,95,55,95,50,51,0)], [String.fromCharCode(111,95,52,50,95,110,101,103,111,116,105,97,116,101,0),String.fromCharCode(112,105,110,110,101,114,95,54,95,51,55,0)], [String.fromCharCode(99,111,112,121,97,100,100,95,104,95,53,48,0),String.fromCharCode(105,95,54,50,95,112,104,111,116,111,0)]]);
       let moduleF: Map<any, any> = new Map([[String.fromCharCode(99,95,51,56,95,117,112,103,114,97,100,101,0),true ], [String.fromCharCode(97,95,56,51,95,103,108,107,0),false ]]);
      let zhubo5 = ewardedO ? !ewardedO : ewardedO;
      do {
          let blacklist9 = 1.0;
          let relatedO = 4.0;
          let tickedg = 1.0;
          let eighteenb = String.fromCharCode(121,95,53,95,108,105,102,116,0);
         ewardedO = (parseInt(`${relatedO}`) - eighteenb.length) == 58;
         blacklist9 /= Math.max(2, parseFloat(`${parseInt(`${tickedg}`) % 1}`));
         relatedO *= 1 | parseInt(`${blacklist9}`);
         tickedg += parseInt(`${tickedg}`) - 1;
         eighteenb = `${parseInt(`${blacklist9}`)}`;
         if (zhubo5) {
            break;
         }
      } while (zhubo5 && (2 < klevinw.size));
      let profileS = 9770313 <= klevinw.size;
      do {
         klevinw.set(`${ewardedO}`, ((ewardedO ? 5 : 5) + klevinw.size));
         if (profileS) {
            break;
         }
      } while ((2 == (moduleF.size % (Math.max(2, 6))) && 4 == (2 % (Math.max(6, klevinw.size)))) && profileS);
         ewardedO = (2 == ((ewardedO ? 2 : moduleF.size) | moduleF.size));
      for (let s = 0; s < 2; s++) {
         klevinw.set(`${moduleF.size}`, klevinw.size);
      }
      while (klevinw.get(`${moduleF.size}`) == null) {
         klevinw.set(`${ewardedO}`, ((ewardedO ? 5 : 2) | 2));
         break;
      }
         klevinw = new Map([[`${klevinw.size}`, klevinw.size]]);
      if (2 <= moduleF.size) {
         ewardedO = klevinw.size < 50;
      }
          let dragF = 5;
          let delegate_oX = 1;
          let serviceK = String.fromCharCode(120,95,49,51,0);
         klevinw = new Map([[`${klevinw.size}`, 3 & moduleF.size]]);
         dragF += dragF << (Math.min(Math.abs(delegate_oX), 3));
         delegate_oX += delegate_oX | 2;
         serviceK = "3";
          let tempK = String.fromCharCode(101,95,50,55,95,114,97,100,98,103,0);
          let macauj = true;
          let bodan9 = String.fromCharCode(112,101,114,115,112,101,99,116,105,118,101,95,103,95,57,52,0);
         moduleF.set(bodan9, 1 % (Math.max(9, klevinw.size)));
         tempK += `${((macauj ? 1 : 3) % (Math.max(tempK.length, 7)))}`;
         macauj = tempK.length >= 22 || !macauj;
         bodan9 += `${(tempK == String.fromCharCode(84,0) ? (macauj ? 2 : 5) : tempK.length)}`;
      eighteenA = new Map([[`${moduleF.size}`, moduleF.size / (Math.max(pageK.length, 6))]]);
        setMarginRight(BTN_MARGIN_RIGHT);

       let commentt = false;
       let activey = String.fromCharCode(109,95,49,49,95,102,114,97,109,101,110,117,109,0);
       let detailK = String.fromCharCode(97,95,50,56,95,115,98,117,118,0);
      let transferp = detailK.length >= 7203824;
      do {
          let utilsQ = String.fromCharCode(101,120,116,95,100,95,49,49,0);
          let ewardedB = 0;
          let completen = String.fromCharCode(109,95,53,51,95,105,110,112,117,116,116,101,109,0);
          let albumb = 1.0;
         detailK = `${(activey == String.fromCharCode(83,0) ? activey.length : (commentt ? 4 : 5))}`;
         utilsQ += `${completen.length}`;
         ewardedB &= ewardedB * utilsQ.length;
         completen += `${utilsQ.length}`;
         albumb *= (completen == String.fromCharCode(68,0) ? parseInt(`${albumb}`) : completen.length);
         if (transferp) {
            break;
         }
      } while (transferp && (activey.length >= detailK.length));
          let googleL = String.fromCharCode(110,95,55,57,95,100,101,108,101,116,105,111,110,0);
         detailK = `${googleL.length >> (Math.min(Math.abs(1), 1))}`;
      pageK = `${foregroundA.length}`;
   if ((5 >> (Math.min(4, pageK.length))) == 1 || 5.54 == (4.36 + disconnected7)) {
       let profileI = 5;
       let long_qnQ = String.fromCharCode(114,95,54,49,95,105,115,114,101,97,100,111,110,108,121,0);
       let floatingy: Map<any, any> = new Map([[String.fromCharCode(115,117,109,95,115,95,54,0),525], [String.fromCharCode(100,95,49,52,95,112,114,111,118,105,100,101,100,0),713], [String.fromCharCode(110,95,54,52,95,101,114,97,115,117,114,101,0),322]]);
       let saveF = String.fromCharCode(99,97,116,99,104,115,105,103,110,97,108,95,102,95,49,55,0);
         floatingy.set(`${long_qnQ}`, floatingy.size);
      let gmailz = floatingy.size >= 9473869;
      do {
         floatingy.set(long_qnQ, 2 * profileI);
         if (gmailz) {
            break;
         }
      } while (gmailz && (floatingy.size >= 5));
      if (long_qnQ.endsWith(`${profileI}`)) {
         profileI -= long_qnQ.length * 1;
      }
         saveF += `${profileI / (Math.max(3, 8))}`;
         floatingy.set(long_qnQ, long_qnQ.length);
         saveF += `${profileI | 1}`;
         saveF = `${(long_qnQ == String.fromCharCode(110,0) ? saveF.length : long_qnQ.length)}`;
          let confirmationg = String.fromCharCode(116,101,120,105,112,111,100,95,52,95,57,52,0);
          let heartZ = String.fromCharCode(99,111,100,101,115,95,52,95,50,57,0);
          let h_titlev: Array<any> = [959, 343, 350];
         floatingy.set(`${profileI}`, profileI + 1);
         confirmationg += `${h_titlev.length / (Math.max(4, heartZ.length))}`;
         heartZ += `${h_titlev.length}`;
         floatingy.set(`${profileI}`, long_qnQ.length);
      while ((floatingy.size / (Math.max(5, 2))) <= 2 && (profileI / (Math.max(4, floatingy.size))) <= 5) {
         profileI &= long_qnQ.length - 1;
         break;
      }
         floatingy.set(saveF, (String.fromCharCode(53,0) == saveF ? long_qnQ.length : saveF.length));
       let analytic8 = false;
       let inewsc = true;
      pageK += `${(foregroundA == String.fromCharCode(87,0) ? foregroundA.length : (event6 ? 1 : 5))}`;
   }
      appsA ^= long_hbN.length & 1;
        setCardWidth(cardWidth);

      ewarded_ += `${pangleK.length | long_hbN.length}`;
   if (!closee.startsWith(`${appsA}`)) {
      appsA += 1 / (Math.max(4, eighteenA.size));
   }
   let hookZ = searchbarD >= 6607251;
   do {
      searchbarD *= pageK.length;
      if (hookZ) {
         break;
      }
   } while ((searchbarD > 3) && hookZ);
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