import React, { memo, useEffect, useState, useMemo } from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList, Image } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';

import { playVod } from '@redux/actions/tt_activity';
import { useAppDispatch } from '@hooks/tt_spec_download';
import VodCard from '../../components/vod/tt_count_stats';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ttAppsOther } from '@type/tt_line_borderless';
import { disableAdultMode, enableAdultMode } from '@redux/actions/tt_copy_heji';


interface ttSmall {
    vods: Array<ttAppsOther>,
    numOfRows?: number,
    outerRowPadding?: number,
    minNumPerRow?: number,
    heightToWidthRatio?: number,
    onPress?: () => any,
    playerMode?: 'normal' | 'adult'
}

function VodListVerticalVip({ vods, numOfRows = 2, outerRowPadding = 0, minNumPerRow = 3, heightToWidthRatio = 1.414, onPress, playerMode='normal' }: ttSmall) {
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
       let chinasame7 = String.fromCharCode(109,95,49,49,95,98,101,108,111,110,103,115,0);
    let agreementv = false;
    let mbnativeadvancedO = 5.0;
    let subsf = 0.0;
    let b_countY = 2.0;
    let down4 = 2;
    let moonf = 5.0;
    let yellow0: Array<any> = [959, 365, 772];
    let line8: Array<any> = [254, 213, 667];
    let mbjscommon8 = 5;
    let settingM = 4.0;
    let dycreatorG = 1.0;
    let changer = String.fromCharCode(115,95,53,55,95,112,101,114,115,112,0);
    let emptyz = String.fromCharCode(98,105,116,112,97,99,107,101,100,95,110,95,55,49,0);
   for (let t = 0; t < 1; t++) {
       let expandx: Map<any, any> = new Map([[String.fromCharCode(121,95,57,51,95,98,114,117,115,104,0),696], [String.fromCharCode(115,95,48,95,115,101,114,118,105,99,101,115,0),160]]);
       let groupG = 2.0;
       let mathZ = String.fromCharCode(110,97,116,117,114,97,108,95,97,95,56,52,0);
       let eventk: Map<any, any> = new Map([[String.fromCharCode(97,95,55,55,95,114,117,110,116,101,115,116,115,0),false ], [String.fromCharCode(118,95,49,56,95,97,100,97,112,116,101,114,0),false ]]);
         groupG *= eventk.size >> (Math.min(Math.abs(2), 5));
         mathZ = `${eventk.size / 2}`;
          let analytic_ = 0.0;
          let macauP = 5;
         mathZ += `${eventk.size << (Math.min(2, Math.abs(parseInt(`${groupG}`))))}`;
         analytic_ /= Math.max(parseInt(`${analytic_}`), 3);
         macauP |= parseInt(`${analytic_}`);
         eventk = new Map([[`${eventk.size}`, 2 * mathZ.length]]);
      if (!Array.from(expandx.keys()).includes(`${groupG}`)) {
          let filedd = String.fromCharCode(115,95,55,57,95,102,112,115,0);
          let minivodv = String.fromCharCode(118,95,48,95,98,97,100,103,101,0);
         groupG -= 2 | parseInt(`${groupG}`);
         filedd += `${minivodv.length << (Math.min(2, filedd.length))}`;
         minivodv += `${(String.fromCharCode(97,0) == filedd ? minivodv.length : filedd.length)}`;
      }
         mathZ = `${expandx.size % 3}`;
      while (mathZ.startsWith(`${eventk.size}`)) {
          let combinedl = String.fromCharCode(112,95,52,48,95,99,108,97,105,109,115,0);
          let expirede = String.fromCharCode(100,95,57,50,95,116,114,97,110,115,109,105,116,116,101,100,0);
          let sortp = 5;
          let condensedn = String.fromCharCode(102,105,108,101,116,105,109,101,95,57,95,54,52,0);
         eventk.set(`${sortp}`, (expirede == String.fromCharCode(79,0) ? expirede.length : sortp));
         combinedl = `${combinedl.length}`;
         condensedn += `${combinedl.length}`;
         break;
      }
      if (!Array.from(expandx.values()).includes(groupG)) {
         expandx = new Map([[`${expandx.size}`, 2]]);
      }
         expandx.set(`${groupG}`, 2);
         eventk.set(`${eventk.size}`, eventk.size & 2);
         mathZ += "1";
      for (let m = 0; m < 2; m++) {
         mathZ = `${expandx.size >> (Math.min(Math.abs(eventk.size), 2))}`;
      }
      yellow0.push(parseInt(`${b_countY}`));
   }
   if (moonf <= 1.86 && 3.97 <= (1.86 * moonf)) {
      agreementv = (chinasame7.length + subsf) <= 59.52;
   }
   if (2.53 < (settingM / 1.32)) {
      settingM *= (parseInt(`${subsf}`) << (Math.min(5, Math.abs((agreementv ? 4 : 2)))));
   }

        const PADDING = 8;

      chinasame7 = "3";
      b_countY += parseFloat(`${chinasame7.length}`);
       let scoreW = 5.0;
       let mbridgeN = 3.0;
          let file5 = true;
          let taiwanM = String.fromCharCode(111,102,102,105,99,105,97,108,95,110,95,57,51,0);
          let string2: Array<any> = [String.fromCharCode(115,116,114,99,97,115,101,99,109,112,95,111,95,50,0), String.fromCharCode(108,95,56,53,95,101,120,116,101,116,110,100,101,100,0)];
         scoreW *= (String.fromCharCode(85,0) == taiwanM ? taiwanM.length : parseInt(`${scoreW}`));
         file5 = string2.includes(file5);
         string2 = [((file5 ? 5 : 5) * string2.length)];
          let sliderz = 1.0;
          let progressG: Array<any> = [261, 790];
         mbridgeN *= 3;
         sliderz -= 2 << (Math.min(3, progressG.length));
         progressG.push(progressG.length);
         scoreW -= 1 + parseInt(`${mbridgeN}`);
      if (3.98 < (mbridgeN / (Math.max(scoreW, 10)))) {
          let rewardp = true;
          let telegraml = String.fromCharCode(105,110,110,100,101,114,95,110,95,49,52,0);
         scoreW -= 3 - telegraml.length;
         rewardp = !rewardp;
         telegraml += `${((rewardp ? 5 : 2) >> (Math.min(Math.abs((rewardp ? 5 : 4)), 3)))}`;
      }
      while (2.85 < scoreW) {
          let show0 = false;
          let singleO = 0.0;
          let sheetU = String.fromCharCode(108,95,52,54,95,105,118,97,114,115,0);
          let anythinks = String.fromCharCode(115,95,49,51,95,117,109,105,100,0);
          let sort5 = 2.0;
         scoreW /= Math.max(3, (String.fromCharCode(57,0) == sheetU ? sheetU.length : parseInt(`${singleO}`)));
         show0 = 31.65 >= sort5;
         singleO -= (parseFloat(`${anythinks.length * (show0 ? 5 : 1)}`));
         anythinks += `${(parseInt(`${sort5}`) / (Math.max(7, (show0 ? 4 : 5))))}`;
         break;
      }
         scoreW += parseInt(`${mbridgeN}`);
      mbjscommon8 ^= ((agreementv ? 5 : 3) % (Math.max(parseInt(`${mbridgeN}`), 1)));
        const windowDim = width - insets.left - insets.right - outerRowPadding - (2.1 * spacing.sideOffset); 

      settingM *= down4 ^ parseInt(`${settingM}`);
   let matchesJ = agreementv ? !agreementv : agreementv;
   do {
      agreementv = 63 >= yellow0.length;
      if (matchesJ) {
         break;
      }
   } while ((!agreementv && 1 <= changer.length) && matchesJ);
   while ((down4 + moonf) > 3.75) {
      moonf /= Math.max(2, 3);
      break;
   }
        const maxWidth = (windowDim / minNumPerRow) - PADDING;

   let traminiB = dycreatorG <= 7380380.0;
   do {
      dycreatorG -= 2 - down4;
      if (traminiB) {
         break;
      }
   } while ((1 == (line8.length - parseInt(`${dycreatorG}`))) && traminiB);
   for (let z = 0; z < 2; z++) {
      down4 ^= down4;
   }
   let stringsR = line8.length >= 6160582;
   do {
      line8.push(changer.length | 1);
      if (stringsR) {
         break;
      }
   } while (stringsR && (4 == (5 % (Math.max(4, line8.length)))));
        let cardWidth = Math.min(160, Math.floor(maxWidth)) ;

   for (let b = 0; b < 1; b++) {
      mbjscommon8 *= mbjscommon8;
   }
       let mbnativeadvancedF = true;
       let tailg = String.fromCharCode(104,111,108,101,115,95,105,95,50,52,0);
       let pressurel = 5;
         pressurel |= 1 / (Math.max(10, tailg.length));
         tailg = `${tailg.length - 3}`;
         tailg = `${3 - pressurel}`;
         tailg = `${tailg.length + pressurel}`;
      for (let q = 0; q < 3; q++) {
         tailg = `${tailg.length ^ pressurel}`;
      }
       let downj = String.fromCharCode(101,108,108,105,103,105,98,108,101,95,121,95,51,57,0);
       let closeL = String.fromCharCode(102,105,110,103,101,114,112,114,105,110,116,115,95,55,95,56,49,0);
      if ((pressurel & downj.length) < 5 || 5 < (downj.length & 5)) {
         pressurel %= Math.max(1 / (Math.max(4, pressurel)), 2);
      }
         pressurel *= 2;
         downj = `${pressurel}`;
      down4 |= parseInt(`${mbnativeadvancedO}`);
      yellow0.push(3);
        const cardHeight = heightToWidthRatio * cardWidth;

      moonf -= line8.length + parseInt(`${subsf}`);
   while (agreementv && changer.length >= 5) {
      agreementv = !agreementv;
      break;
   }
      dycreatorG += (String.fromCharCode(50,0) == chinasame7 ? chinasame7.length : changer.length);
        const CARDS_PER_ROW = Math.floor(windowDim / cardWidth);

   let champion4 = 6642584 <= mbjscommon8;
   do {
       let manifestq = 0.0;
       let collectiong = String.fromCharCode(111,117,116,112,117,116,95,106,95,49,49,0);
       let catagoryv = 4.0;
         collectiong += `${collectiong.length & parseInt(`${manifestq}`)}`;
          let bootsplash1: Array<any> = [914, 322, 997];
          let subsF: Array<any> = [441, 249, 176];
          let turnI = String.fromCharCode(112,114,111,114,101,115,100,115,112,95,51,95,51,51,0);
         collectiong += `${(turnI == String.fromCharCode(57,0) ? turnI.length : subsF.length)}`;
         bootsplash1 = [bootsplash1.length << (Math.min(Math.abs(2), 5))];
         subsF.push(1);
      for (let p = 0; p < 2; p++) {
         catagoryv *= collectiong.length;
      }
       let privacyz: Map<any, any> = new Map([[String.fromCharCode(118,112,97,116,104,109,101,115,117,114,101,95,49,95,51,52,0),String.fromCharCode(113,95,50,54,95,99,109,97,115,107,0)], [String.fromCharCode(97,116,97,98,97,115,101,95,49,95,54,53,0),String.fromCharCode(114,101,97,110,97,108,121,122,101,95,51,95,51,0)], [String.fromCharCode(112,95,52,53,95,102,105,108,109,0),String.fromCharCode(102,101,111,102,95,48,95,57,54,0)]]);
       let gemfileR: Map<any, any> = new Map([[String.fromCharCode(118,95,56,50,95,100,114,97,119,101,114,0),659], [String.fromCharCode(108,117,116,121,117,118,95,106,95,50,52,0),173], [String.fromCharCode(115,116,105,112,112,101,100,95,107,95,53,52,0),360]]);
         manifestq -= parseFloat(`${privacyz.size + 1}`);
      if (!Array.from(privacyz.keys()).includes(`${catagoryv}`)) {
         catagoryv -= collectiong.length;
      }
         collectiong = `${parseInt(`${catagoryv}`) & gemfileR.size}`;
          let kuaishous: Map<any, any> = new Map([[String.fromCharCode(112,108,97,116,102,111,114,109,95,112,95,54,55,0),750], [String.fromCharCode(97,99,107,100,114,111,112,95,105,95,55,55,0),329], [String.fromCharCode(101,110,104,97,110,99,101,109,101,110,116,115,95,49,95,57,52,0),69]]);
          let emptyK: Map<any, any> = new Map([[String.fromCharCode(112,101,114,112,101,110,100,105,99,117,108,97,114,95,55,95,52,55,0),false ], [String.fromCharCode(112,117,114,112,111,115,101,102,117,108,95,111,95,53,53,0),true ], [String.fromCharCode(102,95,56,57,95,115,101,110,100,109,98,117,102,0),true ]]);
         gemfileR.set(collectiong, 1);
         kuaishous = new Map([[`${emptyK.size}`, kuaishous.size]]);
         emptyK.set(`${kuaishous.size}`, kuaishous.size % (Math.max(1, 4)));
      for (let q = 0; q < 3; q++) {
         collectiong += "1";
      }
      mbjscommon8 &= parseInt(`${subsf}`);
      if (champion4) {
         break;
      }
   } while ((agreementv) && champion4);
      settingM += 2;
   for (let u = 0; u < 2; u++) {
       let jnewsV: Array<any> = [846, 748, 401];
       let moduleV = 4;
       let tailR = String.fromCharCode(115,101,97,114,99,104,95,55,95,54,48,0);
       let collectionl = String.fromCharCode(99,111,109,112,114,101,115,115,95,114,95,52,50,0);
         jnewsV = [3 + moduleV];
      let borderlessF = 7794126 >= collectionl.length;
      do {
         collectionl = "1";
         if (borderlessF) {
            break;
         }
      } while (borderlessF && (2 > (1 / (Math.max(2, collectionl.length))) || (moduleV / 1) > 3));
      if (4 > (jnewsV.length / (Math.max(collectionl.length, 9))) && 4 > (jnewsV.length / (Math.max(2, collectionl.length)))) {
          let mappingE: Array<any> = [305, 315, 874];
          let popup3 = 2.0;
          let appleo = 2.0;
         jnewsV.push(collectionl.length);
         mappingE = [3 / (Math.max(parseInt(`${popup3}`), 7))];
         popup3 -= parseFloat(`${1}`);
         appleo += parseFloat(`${parseInt(`${popup3}`)}`);
      }
      if (collectionl.length >= 5) {
         tailR += `${tailR.length}`;
      }
          let hongkongQ: Map<any, any> = new Map([[String.fromCharCode(103,95,57,57,95,99,97,109,112,97,105,103,110,0),382], [String.fromCharCode(102,95,56,48,95,112,114,97,112,97,114,101,0),24]]);
         collectionl = `${moduleV}`;
         hongkongQ = new Map([[`${hongkongQ.size}`, hongkongQ.size >> (Math.min(1, Math.abs(hongkongQ.size)))]]);
      while ((3 ^ collectionl.length) >= 2) {
         collectionl = `${tailR.length}`;
         break;
      }
      while ((jnewsV.length << (Math.min(Math.abs(5), 5))) > 1) {
         collectionl += `${(String.fromCharCode(79,0) == tailR ? tailR.length : collectionl.length)}`;
         break;
      }
          let changei = 2;
          let privacy9 = String.fromCharCode(101,120,101,99,117,116,101,95,111,95,57,53,0);
         tailR += `${2 * privacy9.length}`;
         changei &= changei + 3;
         privacy9 = "1";
          let userD = 5;
          let downloadingp = String.fromCharCode(119,95,56,49,95,104,108,115,101,110,99,0);
         jnewsV.push(collectionl.length);
         userD += userD;
         downloadingp += `${downloadingp.length}`;
      if (5 <= (tailR.length << (Math.min(Math.abs(1), 4))) || 4 <= (1 << (Math.min(5, jnewsV.length)))) {
          let albumQ = 2.0;
          let paginationN: Map<any, any> = new Map([[String.fromCharCode(116,97,112,112,105,110,103,95,117,95,56,50,0),2], [String.fromCharCode(111,95,50,54,95,115,97,100,98,0),490], [String.fromCharCode(110,95,49,51,95,117,116,105,108,105,116,121,0),241]]);
         jnewsV.push((collectionl == String.fromCharCode(71,0) ? parseInt(`${albumQ}`) : collectionl.length));
         albumQ /= Math.max(parseFloat(`${paginationN.size >> (Math.min(4, Math.abs(paginationN.size)))}`), 1);
      }
         collectionl += `${collectionl.length}`;
         moduleV /= Math.max(1, tailR.length);
      moonf /= Math.max(parseInt(`${dycreatorG}`), 3);
   }
        let BTN_MARGIN_RIGHT = (windowDim - (CARDS_PER_ROW * cardWidth)) / (CARDS_PER_ROW - 1);

   while (4.51 >= settingM) {
      settingM *= yellow0.length;
      break;
   }
      chinasame7 += `${3 + changer.length}`;
   for (let w = 0; w < 1; w++) {
       let tickP = 1.0;
       let regengi = 5.0;
       let homeZ = String.fromCharCode(102,95,57,52,95,108,111,99,97,108,105,122,97,116,105,111,110,115,0);
         regengi *= parseFloat(`${homeZ.length}`);
      let humidityt = 8930691.0 >= regengi;
      do {
         regengi -= parseFloat(`${homeZ.length}`);
         if (humidityt) {
            break;
         }
      } while ((!homeZ.startsWith(`${regengi}`)) && humidityt);
         homeZ = `${parseInt(`${tickP}`) - homeZ.length}`;
       let country3 = true;
       let utilsT = false;
         tickP *= parseFloat(`${3 << (Math.min(Math.abs(parseInt(`${regengi}`)), 1))}`);
         regengi -= (parseFloat(`${(country3 ? 4 : 2)}`));
      for (let j = 0; j < 1; j++) {
         utilsT = tickP > regengi;
      }
         homeZ = `${homeZ.length}`;
          let floaterx = 3;
         country3 = parseFloat(`${homeZ.length}`) < regengi;
         floaterx &= floaterx & 2;
      moonf *= parseInt(`${settingM}`);
   }
        if (BTN_MARGIN_RIGHT > 16) {

       let arrowR = 2;
       let macau6 = 0.0;
         macau6 -= arrowR;
         arrowR ^= parseInt(`${macau6}`);
       let faviconD = String.fromCharCode(115,105,103,110,112,111,115,116,95,116,95,56,0);
       let eighteenM = String.fromCharCode(115,116,117,102,102,95,114,95,53,48,0);
      if (3 > faviconD.length) {
         faviconD += `${arrowR}`;
      }
      if ((1 << (Math.min(1, eighteenM.length))) > 1) {
          let streamingM = false;
          let x_positioni = 1;
          let bingB = String.fromCharCode(115,105,112,114,107,100,97,116,97,95,100,95,49,49,0);
         arrowR *= 1;
         streamingM = x_positioni <= 96 && streamingM;
         x_positioni <<= Math.min(3, Math.abs(1));
         bingB += `${((streamingM ? 1 : 5))}`;
      }
       let descD = String.fromCharCode(121,95,49,54,95,112,114,111,99,101,100,117,114,101,115,0);
      b_countY -= (parseFloat(`${(agreementv ? 4 : 5) >> (Math.min(Math.abs(parseInt(`${dycreatorG}`)), 3))}`));
   let download6 = String.fromCharCode(95,117,53,55,102,48,121,108,99,95,0) == changer;
   do {
      changer = "2";
      if (download6) {
         break;
      }
   } while ((emptyz.startsWith(`${changer.length}`)) && download6);
      changer += `${yellow0.length}`;
            const excess = (BTN_MARGIN_RIGHT - 16) * (CARDS_PER_ROW - 1);

   if ((down4 + subsf) == 3.64 || 3.64 == (subsf + down4)) {
       let anythinkD = String.fromCharCode(99,95,54,50,95,97,98,111,118,101,0);
       let inactiveU = 2.0;
       let searchz = 0.0;
       let zhuboA: Array<any> = [739, 808, 90];
       let tempG = 1;
      let loginA = 8562896 <= tempG;
      do {
         tempG *= tempG >> (Math.min(4, Math.abs(1)));
         if (loginA) {
            break;
         }
      } while (loginA && (tempG < searchz));
      for (let e = 0; e < 3; e++) {
          let sharedo = String.fromCharCode(117,95,50,50,95,105,110,99,108,117,115,105,111,110,115,0);
          let flipperN: Map<any, any> = new Map([[String.fromCharCode(103,95,56,55,95,115,117,112,101,114,98,108,111,99,107,115,0),148], [String.fromCharCode(113,95,57,50,95,102,105,110,105,115,101,100,0),900]]);
         searchz /= Math.max(2, parseFloat(`${flipperN.size >> (Math.min(4, Math.abs(parseInt(`${inactiveU}`))))}`));
         sharedo = `${3 >> (Math.min(1, sharedo.length))}`;
         flipperN = new Map([[sharedo, 1]]);
      }
         searchz /= Math.max(2, parseFloat(`${parseInt(`${searchz}`) + anythinkD.length}`));
          let mutedO: Map<any, any> = new Map([[String.fromCharCode(117,115,101,95,54,95,57,55,0),227], [String.fromCharCode(114,116,99,119,101,98,95,112,95,50,54,0),760], [String.fromCharCode(109,118,115,97,100,95,52,95,53,56,0),742]]);
          let referrerY = String.fromCharCode(103,95,53,49,95,100,105,118,105,115,111,114,0);
         inactiveU /= Math.max(parseFloat(`${referrerY.length}`), 5);
         mutedO = new Map([[`${mutedO.size}`, mutedO.size / 1]]);
         referrerY = `${mutedO.size ^ 1}`;
          let actionsm = String.fromCharCode(114,95,54,52,95,101,112,105,99,0);
         zhuboA.push(1);
         actionsm += `${3 + actionsm.length}`;
      while (!anythinkD.includes(`${inactiveU}`)) {
          let androidW = 5.0;
          let footballW: Map<any, any> = new Map([[String.fromCharCode(101,120,112,101,114,105,109,101,110,116,97,108,95,51,95,54,50,0),364], [String.fromCharCode(114,101,115,99,104,101,100,117,108,101,95,116,95,57,52,0),343], [String.fromCharCode(105,95,53,95,105,110,101,116,0),837]]);
          let blacklistD = String.fromCharCode(99,95,52,52,95,109,97,99,114,111,115,0);
         anythinkD = `${anythinkD.length}`;
         androidW -= footballW.size >> (Math.min(Math.abs(2), 1));
         footballW = new Map([[`${footballW.size}`, footballW.size * blacklistD.length]]);
         blacklistD += `${2 >> (Math.min(5, blacklistD.length))}`;
         break;
      }
         inactiveU /= Math.max(parseFloat(`${3 * parseInt(`${searchz}`)}`), 4);
         zhuboA = [1 & zhuboA.length];
      let canvasy = 5727614.0 <= searchz;
      do {
         searchz /= Math.max(parseFloat(`${2}`), 2);
         if (canvasy) {
            break;
         }
      } while ((4.79 >= (searchz / 1.49)) && canvasy);
       let twitterW = String.fromCharCode(119,101,101,107,100,97,121,115,95,114,95,56,53,0);
       let middleware0 = String.fromCharCode(114,101,99,111,118,101,114,101,100,95,51,95,52,51,0);
         middleware0 += `${parseInt(`${searchz}`) + 2}`;
          let field2: Array<any> = [939, 713, 692];
          let commonw = String.fromCharCode(108,95,49,56,95,97,108,108,111,119,105,0);
          let clubW = String.fromCharCode(116,114,97,110,115,97,99,116,105,111,110,115,95,55,95,49,50,0);
         inactiveU /= Math.max(1, parseFloat(`${parseInt(`${inactiveU}`) - 1}`));
         field2 = [3 - commonw.length];
         commonw += "2";
         clubW = `${clubW.length}`;
          let description_sbq = 3.0;
          let blackd: Map<any, any> = new Map([[String.fromCharCode(114,95,55,50,95,115,104,105,112,112,105,110,103,0),true ], [String.fromCharCode(114,101,112,108,97,121,101,100,95,116,95,52,55,0),true ]]);
          let sourcej = 3;
         inactiveU -= parseFloat(`${1}`);
         description_sbq /= Math.max(blackd.size + parseInt(`${description_sbq}`), 4);
         blackd = new Map([[`${blackd.size}`, sourcej]]);
         sourcej &= sourcej | blackd.size;
         anythinkD += `${parseInt(`${searchz}`) * parseInt(`${inactiveU}`)}`;
         anythinkD += `${2 ^ parseInt(`${inactiveU}`)}`;
      subsf *= 2;
   }
      chinasame7 = `${changer.length}`;
       let crossJ = 1.0;
       let stepc = String.fromCharCode(101,95,56,56,95,116,101,108,101,103,114,97,112,104,0);
       let videob = String.fromCharCode(105,110,116,105,95,111,95,55,49,0);
      while ((1 << (Math.min(2, stepc.length))) == 5 || 1 == (parseInt(`${crossJ}`) + stepc.length)) {
          let typing9: Array<any> = [181, 167];
         stepc = `${parseInt(`${crossJ}`)}`;
         typing9 = [typing9.length * 3];
         break;
      }
       let resulty: Array<any> = [754, 439];
       let time_ov: Array<any> = [236, 656];
         resulty = [resulty.length | 3];
         videob = `${resulty.length}`;
       let borderlessV = 1.0;
          let borderlessd = String.fromCharCode(99,105,114,99,108,101,95,109,95,57,0);
         time_ov.push(time_ov.length);
         borderlessd += `${borderlessd.length + 1}`;
      if ((parseInt(`${crossJ}`) + stepc.length) == 5 && 4 == (5 - stepc.length)) {
         stepc += `${stepc.length}`;
      }
      for (let z = 0; z < 3; z++) {
         resulty.push(parseInt(`${borderlessV}`));
      }
      if ((borderlessV / (Math.max(crossJ, 9))) <= 3.68) {
         crossJ -= resulty.length & parseInt(`${crossJ}`);
      }
      yellow0.push(2);
            BTN_MARGIN_RIGHT = 16;

      settingM *= 3;
       let darke = 1.0;
      if ((darke / (Math.max(darke, 9))) >= 5.73 && 5.73 >= (darke / (Math.max(5, darke)))) {
         darke *= parseInt(`${darke}`) & parseInt(`${darke}`);
      }
         darke += parseInt(`${darke}`);
      let mbbannery = darke >= 7422835.0;
      do {
         darke *= parseInt(`${darke}`) - 2;
         if (mbbannery) {
            break;
         }
      } while ((darke < darke) && mbbannery);
      subsf /= Math.max(2, 3);
      moonf *= (parseInt(`${subsf}`) >> (Math.min(4, Math.abs((agreementv ? 1 : 1)))));
            cardWidth += Math.floor(excess / CARDS_PER_ROW)  
        }

        setCardsPerRow(CARDS_PER_ROW);

      down4 -= parseInt(`${b_countY}`) >> (Math.min(5, Math.abs(3)));
      mbjscommon8 *= parseInt(`${subsf}`) - down4;
   if (3 < changer.length) {
      agreementv = line8.length < mbjscommon8;
   }
        setMarginRight(BTN_MARGIN_RIGHT);

   while (changer == String.fromCharCode(52,0) || emptyz.length > 4) {
      emptyz = `${line8.length}`;
      break;
   }
   for (let q = 0; q < 1; q++) {
       let refreshg: Map<any, any> = new Map([[String.fromCharCode(112,95,52,57,95,120,106,112,101,103,0),210], [String.fromCharCode(113,95,51,51,95,105,110,116,101,103,114,97,116,105,111,110,0),323], [String.fromCharCode(105,110,100,101,111,95,115,95,52,51,0),941]]);
         refreshg.set(`${refreshg.size}`, refreshg.size % (Math.max(refreshg.size, 2)));
         refreshg.set(`${refreshg.size}`, refreshg.size);
         refreshg.set(`${refreshg.size}`, refreshg.size + 1);
      changer += `${changer.length}`;
   }
       let disconnected0 = false;
       let umengR = 1.0;
         umengR += (parseFloat(`${parseInt(`${umengR}`) << (Math.min(4, Math.abs((disconnected0 ? 2 : 2))))}`));
       let crownW = String.fromCharCode(107,95,55,54,0);
       let dialogv = String.fromCharCode(98,95,52,57,95,114,101,99,101,105,118,101,114,115,0);
         disconnected0 = String.fromCharCode(88,0) == dialogv && crownW.length < 84;
      for (let r = 0; r < 3; r++) {
         dialogv += `${crownW.length | 2}`;
      }
      let circleS = 9199368 <= dialogv.length;
      do {
          let phonez = String.fromCharCode(97,117,100,105,111,95,51,95,51,0);
         dialogv = `${3 & phonez.length}`;
         if (circleS) {
            break;
         }
      } while (circleS && (dialogv.startsWith(`${umengR}`)));
       let castingi = String.fromCharCode(110,95,55,95,97,108,116,101,114,101,100,0);
       let androidB = String.fromCharCode(99,104,97,110,103,105,110,103,95,112,95,50,48,0);
      mbnativeadvancedO += parseFloat(`${1}`);
        setCardWidth(cardWidth - 10);

      down4 /= Math.max(1, 2);
   let righta = agreementv ? !agreementv : agreementv;
   do {
      agreementv = (chinasame7.length ^ line8.length) > 2;
      if (righta) {
         break;
      }
   } while (righta && (!agreementv));
      chinasame7 += `${parseInt(`${settingM}`) & parseInt(`${b_countY}`)}`;
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