import React, { memo, useEffect, useState, useMemo } from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList, Image } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';

import { playVod } from '@redux/actions/xif_layout';
import { useAppDispatch } from '@hooks/kg_index';
import VodCard from '../../components/vod/qee_dice';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { XVSScoreDark } from '@type/wpk_long';
import { disableAdultMode, enableAdultMode } from '@redux/actions/a_switch';
import DeviceInfo from 'react-native-device-info';


interface XFillButton {
    vods: Array<XVSScoreDark>,
    numOfRows?: number,
    outerRowPadding?: number,
    minNumPerRow?: number,
    heightToWidthRatio?: number,
    onPress?: ({ vodId }: { vodId: any }) => any,
    playerMode?: 'normal' | 'adult'
}

function VodListVertical({ vods, numOfRows = 2, outerRowPadding = 0, minNumPerRow = 3, heightToWidthRatio = 1.414, onPress, playerMode = 'normal' }: XFillButton) {
    const { textVariants, colors, spacing, icons } = useTheme();
    const insets = useSafeAreaInsets();
    const navigation = useNavigation();
    const dispatch = useAppDispatch();

    const [cardsPerRow, setCardsPerRow] = useState(3);
    const [marginRight, setMarginRight] = useState(5);
    const [cardWidth, setCardWidth] = useState(3);
    const [cardHeight, setCardHeight] = useState(5);

    const width = Math.min(Dimensions.get('window').width, Dimensions.get('window').height);


    const [deviceName, setDeviceName] = useState("");

    DeviceInfo.getDeviceName().then((d) => {
        setDeviceName(d.toLowerCase());
    });
    
    useEffect(() => {
        calculateDimensions;
        
        
        
        
        
        
    }, []);
    const calculateDimensions = useMemo(() => {
       let singlew = false;
    let placement9 = 2;
    let selectk = String.fromCharCode(118,95,50,55,95,102,111,114,109,97,116,115,0);
    let filede = String.fromCharCode(108,95,56,49,95,115,101,99,0);
    let videoS = true;
    let targetT = String.fromCharCode(115,101,114,105,97,108,105,122,97,98,108,101,95,108,95,49,55,0);
    let eighteene = 5.0;
    let successX = 3.0;
    let volumep: Array<any> = [685, 471];
      videoS = 23 == placement9;
   for (let g = 0; g < 1; g++) {
      filede += `${placement9 - 3}`;
   }

        const PADDING = 8;

   let aboutr = placement9 >= 6473371;
   do {
       let detailV = 5.0;
       let networkT = true;
       let loadingk: Map<any, any> = new Map([[String.fromCharCode(100,95,56,48,95,100,105,115,99,111,118,101,114,121,0),615], [String.fromCharCode(102,105,103,117,114,101,95,117,95,49,57,0),241], [String.fromCharCode(98,95,50,55,95,109,115,98,115,0),724]]);
       let unreadw = true;
      for (let v = 0; v < 2; v++) {
          let leftl = String.fromCharCode(106,95,54,50,95,118,115,99,97,108,101,0);
          let controlN = 2;
         unreadw = unreadw && loadingk.size == 83;
         leftl += `${controlN}`;
         controlN *= controlN;
      }
         detailV += loadingk.size;
      if (!unreadw && 4.37 < (detailV / 4.63)) {
         detailV += 1;
      }
         networkT = networkT || detailV <= 84.11;
          let main_xA = String.fromCharCode(107,95,51,55,95,102,117,110,103,105,98,108,101,0);
          let x_playerC: Array<any> = [String.fromCharCode(107,95,57,55,95,115,117,98,112,97,99,107,101,116,115,0), String.fromCharCode(117,110,99,111,109,112,114,101,115,115,101,100,95,109,95,57,53,0), String.fromCharCode(100,95,51,50,95,116,97,100,100,0)];
         detailV += ((networkT ? 3 : 1));
         main_xA += `${main_xA.length}`;
         x_playerC.push(1);
       let condensed7 = String.fromCharCode(111,98,118,105,111,117,115,108,121,95,103,95,55,51,0);
       let dropdown1 = String.fromCharCode(101,95,50,56,95,109,111,118,116,101,120,116,115,117,98,0);
       let humidityY = String.fromCharCode(103,101,116,98,121,116,101,95,100,95,53,56,0);
      if (dropdown1.length < loadingk.size) {
          let searchw: Array<any> = [String.fromCharCode(98,105,110,97,114,121,95,99,95,50,53,0), String.fromCharCode(114,101,115,117,109,101,95,104,95,49,51,0)];
         dropdown1 = "1";
         searchw.push(searchw.length);
      }
      placement9 /= Math.max(selectk.length * 2, 3);
      if (aboutr) {
         break;
      }
   } while (aboutr && (!singlew));
   while (2 > (filede.length & placement9) && 3 > (placement9 & 2)) {
      placement9 ^= selectk.length;
      break;
   }
        const windowDim = width - insets.left - insets.right - outerRowPadding - (2.1 * spacing.sideOffset); 

       let moonB = String.fromCharCode(109,105,110,105,109,105,122,101,100,95,106,95,52,48,0);
       let popupF = 4.0;
      while (2 >= (parseInt(`${popupF}`) + moonB.length) && (moonB.length + parseInt(`${popupF}`)) >= 2) {
         moonB += `${moonB.length | 3}`;
         break;
      }
         popupF /= Math.max(moonB.length | parseInt(`${popupF}`), 3);
          let vignettey = String.fromCharCode(103,95,54,52,95,120,97,109,112,108,101,0);
         moonB = `${vignettey.length % 3}`;
          let zhuboo = 1.0;
         popupF *= parseInt(`${zhuboo}`);
         popupF -= (String.fromCharCode(51,0) == moonB ? parseInt(`${popupF}`) : moonB.length);
       let mappingX = 4.0;
      eighteene -= targetT.length;
   if ((filede.length + eighteene) <= 3.63) {
      eighteene -= ((singlew ? 2 : 4) % (Math.max(filede.length, 6)));
   }
        const maxWidth = (windowDim / minNumPerRow) - PADDING;

      selectk = `${(targetT == String.fromCharCode(106,0) ? targetT.length : parseInt(`${eighteene}`))}`;
       let handlerI = String.fromCharCode(112,105,110,95,118,95,51,52,0);
       let checkbox7 = String.fromCharCode(110,95,50,49,95,98,108,111,99,107,101,114,0);
       let checkboxf = String.fromCharCode(118,99,111,119,112,116,114,95,52,95,56,55,0);
      if (checkboxf == String.fromCharCode(52,0)) {
          let j_lockq: Map<any, any> = new Map([[String.fromCharCode(102,105,110,100,95,50,95,49,55,0),803], [String.fromCharCode(110,111,110,113,117,111,116,101,100,95,54,95,50,57,0),631]]);
          let countdownN: Array<any> = [384, 289, 822];
          let cornerW: Array<any> = [String.fromCharCode(101,118,97,108,115,95,122,95,52,57,0), String.fromCharCode(106,95,57,50,95,105,110,99,111,110,115,105,115,116,101,110,99,121,0), String.fromCharCode(114,97,100,97,114,95,104,95,51,51,0)];
         checkbox7 = "2";
         j_lockq.set(`${countdownN.length}`, 1 - countdownN.length);
         cornerW = [j_lockq.size >> (Math.min(countdownN.length, 1))];
      }
      let smallR = checkboxf.length <= 8587100;
      do {
          let rulesQ: Array<any> = [351, 418];
          let upgradeC = String.fromCharCode(121,95,52,53,95,99,114,97,115,104,101,100,0);
          let short_es = 1.0;
         checkboxf = `${checkbox7.length}`;
         rulesQ.push(1);
         upgradeC = `${2 - rulesQ.length}`;
         short_es *= parseFloat(`${rulesQ.length % 2}`);
         if (smallR) {
            break;
         }
      } while (smallR && (checkboxf != String.fromCharCode(78,0) || checkbox7 != String.fromCharCode(86,0)));
      for (let q = 0; q < 1; q++) {
          let moona = String.fromCharCode(118,95,51,53,95,119,97,110,116,115,0);
          let selected8: Map<any, any> = new Map([[String.fromCharCode(114,101,115,116,114,97,105,110,95,110,95,52,53,0),true ], [String.fromCharCode(114,95,56,48,95,97,107,97,114,111,115,0),true ]]);
         checkbox7 += `${moona.length - 1}`;
         moona += `${selected8.size}`;
         selected8 = new Map([[`${selected8.size}`, 2]]);
      }
          let auto_vaf = 3;
          let networkm: Array<any> = [205, 235, 432];
         handlerI = `${networkm.length}`;
         auto_vaf += auto_vaf;
         networkm = [auto_vaf >> (Math.min(3, Math.abs(auto_vaf)))];
         handlerI += "3";
         checkboxf = `${checkboxf.length}`;
         handlerI += `${2 + checkbox7.length}`;
         checkboxf = `${2 - checkboxf.length}`;
      if (checkbox7 == String.fromCharCode(97,0)) {
         checkboxf += "2";
      }
      selectk = `${selectk.length - 1}`;
        let cardWidth = Math.min(160, Math.floor(maxWidth));

   let disconnectedx = selectk == String.fromCharCode(98,112,51,105,51,57,0);
   do {
      selectk = `${((videoS ? 5 : 3))}`;
      if (disconnectedx) {
         break;
      }
   } while (disconnectedx && ((selectk.length >> (Math.min(2, Math.abs(placement9)))) <= 4 && (selectk.length >> (Math.min(5, Math.abs(placement9)))) <= 4));
      placement9 /= Math.max(5, (selectk == String.fromCharCode(85,0) ? selectk.length : (videoS ? 1 : 5)));
        const includesKeywords = ['flip', 'fold', 'mate x3', 'mate xs'].some(keyword => deviceName.includes(keyword));

       let searchbars = String.fromCharCode(111,100,97,116,97,95,110,95,53,52,0);
          let submito = 5;
         searchbars += "1";
         submito -= submito;
          let singaporeo: Map<any, any> = new Map([[String.fromCharCode(111,95,53,49,95,100,101,99,111,100,105,110,103,0),420], [String.fromCharCode(108,95,55,57,95,100,101,102,105,110,105,116,105,111,110,0),306], [String.fromCharCode(98,105,110,97,115,99,105,105,95,107,95,51,48,0),379]]);
          let telegrame = String.fromCharCode(101,95,49,95,97,118,100,101,118,105,99,101,114,101,115,0);
         searchbars += "3";
         singaporeo.set(telegrame, telegrame.length);
         searchbars += `${searchbars.length * searchbars.length}`;
      singlew = videoS;
      selectk = `${(String.fromCharCode(81,0) == selectk ? placement9 : selectk.length)}`;
        if(DeviceInfo.isTablet() || includesKeywords)
        {
            cardWidth = Math.min(145, Math.floor(maxWidth));

      targetT = "3";
   for (let r = 0; r < 3; r++) {
      eighteene *= 3;
   }
        }

        const cardHeight = heightToWidthRatio * cardWidth;

   while (targetT.length <= 1) {
      singlew = 97.83 >= successX;
      break;
   }
      selectk = "3";
        const CARDS_PER_ROW = Math.floor(windowDim / cardWidth);

   for (let q = 0; q < 2; q++) {
      eighteene /= Math.max(targetT.length + 2, 1);
   }
      selectk += `${targetT.length * 3}`;
        let BTN_MARGIN_RIGHT = (windowDim - (CARDS_PER_ROW * cardWidth)) / (CARDS_PER_ROW - 1);

   if (eighteene > 5.50) {
      eighteene /= Math.max(2, 1);
   }
   for (let y = 0; y < 1; y++) {
       let scoreh = String.fromCharCode(114,95,52,48,95,101,109,98,101,100,100,101,100,0);
       let contextw = String.fromCharCode(98,102,114,97,99,116,105,111,110,95,54,95,54,56,0);
       let appsR = 3.0;
       let circles = 0.0;
       let backgroundI = String.fromCharCode(121,95,52,52,95,112,116,120,99,0);
         backgroundI += `${parseInt(`${appsR}`)}`;
       let canvasZ = false;
       let navigation2 = false;
      while (!canvasZ) {
         canvasZ = scoreh == String.fromCharCode(121,0);
         break;
      }
          let darkS = 5.0;
          let projectB = 1.0;
         circles *= (parseFloat(`${(canvasZ ? 5 : 3) & (navigation2 ? 1 : 3)}`));
         darkS *= parseInt(`${darkS}`) - 2;
         projectB += parseFloat(`${parseInt(`${darkS}`)}`);
      let robotog = 7486619.0 >= appsR;
      do {
          let j_countf: Array<any> = [String.fromCharCode(98,105,116,109,97,112,95,113,95,55,0), String.fromCharCode(104,97,108,102,108,116,117,105,110,116,95,120,95,57,51,0), String.fromCharCode(117,110,112,114,101,109,117,108,116,105,112,108,121,111,102,102,115,101,116,95,52,95,53,56,0)];
          let shootk = String.fromCharCode(100,101,112,101,110,100,101,110,116,95,105,95,50,54,0);
          let humidityx: Array<any> = [107, 763];
         appsR += parseFloat(`${1 + j_countf.length}`);
         j_countf = [shootk.length];
         shootk = `${shootk.length}`;
         humidityx = [3];
         if (robotog) {
            break;
         }
      } while (robotog && (4.63 < appsR));
      for (let a = 0; a < 1; a++) {
         contextw = `${1 | parseInt(`${circles}`)}`;
      }
      while (4 < backgroundI.length) {
         appsR -= parseFloat(`${3}`);
         break;
      }
       let telegramS = false;
       let projectQ = false;
          let lightT = String.fromCharCode(118,95,50,57,95,114,101,116,114,97,110,115,109,105,115,115,105,111,110,0);
          let chartf = String.fromCharCode(105,110,116,101,114,108,101,97,118,101,95,52,95,56,50,0);
         telegramS = 79 == contextw.length || 79 == chartf.length;
         lightT += `${lightT.length}`;
         chartf = `${lightT.length}`;
         telegramS = !navigation2 || backgroundI.length >= 48;
         projectQ = scoreh.length <= 6;
         backgroundI = "3";
          let readK = 0.0;
          let disconnected_ = 3;
         backgroundI = `${parseInt(`${readK}`) - disconnected_}`;
      if (contextw.length < scoreh.length) {
          let black9 = 4.0;
          let stationsR: Map<any, any> = new Map([[String.fromCharCode(112,97,100,100,101,100,95,107,95,52,57,0),403], [String.fromCharCode(115,95,57,55,95,114,97,116,101,99,116,114,108,0),223], [String.fromCharCode(109,97,112,115,105,122,101,95,101,95,52,0),89]]);
         contextw += `${(contextw.length >> (Math.min(3, Math.abs((telegramS ? 4 : 5)))))}`;
         black9 += parseFloat(`${stationsR.size}`);
         stationsR.set(`${black9}`, parseInt(`${black9}`) % 1);
      }
          let reminderU = true;
          let zhubos = true;
         contextw += `${(backgroundI == String.fromCharCode(57,0) ? (projectQ ? 5 : 2) : backgroundI.length)}`;
         reminderU = !zhubos;
      successX += (parseFloat(`${backgroundI == String.fromCharCode(74,0) ? contextw.length : backgroundI.length}`));
   }
        if (BTN_MARGIN_RIGHT > 16) {

   let castingc = singlew ? !singlew : singlew;
   do {
       let untickR = String.fromCharCode(111,118,101,114,114,105,100,101,115,95,49,95,49,57,0);
       let team7 = String.fromCharCode(104,95,55,52,95,105,115,115,117,101,100,0);
       let assisto: Map<any, any> = new Map([[String.fromCharCode(115,119,97,112,121,118,98,117,102,102,101,114,95,106,95,55,54,0),873], [String.fromCharCode(114,95,54,57,95,104,111,111,107,115,0),995], [String.fromCharCode(99,111,112,121,95,122,95,51,55,0),227]]);
       let filterZ = String.fromCharCode(101,95,56,53,95,118,97,114,105,97,100,105,99,0);
       let target1 = String.fromCharCode(99,95,53,55,95,105,110,116,101,114,99,101,112,116,111,114,0);
         assisto = new Map([[`${assisto.size}`, untickR.length * assisto.size]]);
       let whatsappf: Map<any, any> = new Map([[String.fromCharCode(121,95,56,52,95,121,97,114,110,0),446], [String.fromCharCode(101,113,117,97,108,95,103,95,49,57,0),182]]);
         untickR = `${assisto.size - 1}`;
         filterZ = `${whatsappf.size << (Math.min(target1.length, 3))}`;
      for (let z = 0; z < 1; z++) {
          let weibof = String.fromCharCode(100,110,115,95,49,95,49,0);
         filterZ = `${target1.length + 2}`;
         weibof += `${weibof.length - weibof.length}`;
      }
      if (5 <= (1 >> (Math.min(2, Math.abs(whatsappf.size)))) || 1 <= (whatsappf.size >> (Math.min(team7.length, 5)))) {
         whatsappf = new Map([[team7, untickR.length]]);
      }
       let acceptedm = true;
       let langl = true;
         team7 += `${whatsappf.size & assisto.size}`;
       let refresh1 = String.fromCharCode(111,95,49,49,95,115,99,104,101,100,117,108,101,100,0);
      while (2 == filterZ.length || acceptedm) {
         filterZ += `${(String.fromCharCode(111,0) == target1 ? (langl ? 1 : 1) : target1.length)}`;
         break;
      }
         refresh1 += `${target1.length}`;
         team7 = `${((langl ? 4 : 3) - refresh1.length)}`;
      for (let g = 0; g < 2; g++) {
         whatsappf.set(`${team7}`, assisto.size % (Math.max(7, team7.length)));
      }
      let expandS = acceptedm ? !acceptedm : acceptedm;
      do {
          let giftO: Array<any> = [String.fromCharCode(115,95,49,53,95,115,99,97,110,116,97,98,108,101,0), String.fromCharCode(106,95,54,52,95,109,111,100,109,0), String.fromCharCode(119,95,56,48,95,104,117,109,97,110,0)];
         acceptedm = refresh1 == String.fromCharCode(79,0) || untickR.length >= 96;
         giftO.push(giftO.length);
         if (expandS) {
            break;
         }
      } while (expandS && (whatsappf.size > 1));
          let aboutn: Array<any> = [411, 807];
         team7 = `${whatsappf.size % 3}`;
         aboutn.push(1);
      singlew = !singlew;
      if (castingc) {
         break;
      }
   } while ((singlew || videoS) && castingc);
      eighteene -= selectk.length;
            const excess = (BTN_MARGIN_RIGHT - 16) * (CARDS_PER_ROW - 1);

       let fillz = String.fromCharCode(107,95,50,49,95,114,97,110,103,101,115,0);
      if (fillz.endsWith(fillz)) {
         fillz += `${fillz.length}`;
      }
      if (fillz == String.fromCharCode(111,0)) {
          let trashq = 3.0;
          let switch_1_ = 0.0;
          let bottomS = String.fromCharCode(101,95,57,57,95,102,108,111,97,116,0);
          let promotiono = 3.0;
         fillz += `${parseInt(`${trashq}`)}`;
         trashq -= parseFloat(`${parseInt(`${promotiono}`)}`);
         switch_1_ /= Math.max(1, parseFloat(`${3}`));
         bottomS = `${(bottomS == String.fromCharCode(90,0) ? bottomS.length : parseInt(`${promotiono}`))}`;
      }
         fillz += `${fillz.length >> (Math.min(Math.abs(1), 5))}`;
      selectk += `${targetT.length % 3}`;
      eighteene *= targetT.length;
            BTN_MARGIN_RIGHT = 16;

   let editT = 6016482 >= placement9;
   do {
      placement9 ^= 2;
      if (editT) {
         break;
      }
   } while (editT && (placement9 == eighteene));
   for (let h = 0; h < 3; h++) {
       let loadingY = 1;
       let tick0: Array<any> = [505, 402, 500];
       let plus0 = false;
       let controlV = 5.0;
       let guidee: Map<any, any> = new Map([[String.fromCharCode(101,95,56,54,0),677], [String.fromCharCode(114,101,99,116,95,55,95,57,54,0),20]]);
      while (loadingY >= 5) {
          let orientationm = String.fromCharCode(100,99,98,122,108,95,112,95,57,49,0);
         loadingY &= parseInt(`${controlV}`) + 3;
         orientationm += `${orientationm.length}`;
         break;
      }
      for (let o = 0; o < 1; o++) {
          let signinupY = String.fromCharCode(111,95,48,95,114,97,110,115,102,111,114,109,101,114,0);
          let scoreS = 3;
         tick0.push(2);
         signinupY += `${signinupY.length}`;
         scoreS ^= (signinupY == String.fromCharCode(53,0) ? scoreS : signinupY.length);
      }
         controlV *= parseFloat(`${3 + tick0.length}`);
      let redirectN = loadingY >= 7100396;
      do {
         loadingY <<= Math.min(2, Math.abs(tick0.length ^ parseInt(`${controlV}`)));
         if (redirectN) {
            break;
         }
      } while ((!tick0.includes(loadingY)) && redirectN);
         plus0 = !plus0;
      if (!plus0) {
          let usernameZ = 4;
         plus0 = !plus0;
         usernameZ <<= Math.min(Math.abs(usernameZ / (Math.max(usernameZ, 2))), 2);
      }
      for (let x = 0; x < 3; x++) {
          let chat5 = String.fromCharCode(117,110,105,110,115,116,97,108,108,95,50,95,49,49,0);
          let darka = 3.0;
          let mailx = String.fromCharCode(117,95,55,51,95,98,111,117,110,100,101,100,0);
          let episode5 = 3;
          let playh = 2.0;
         controlV /= Math.max(2, parseFloat(`${parseInt(`${controlV}`)}`));
         chat5 += "1";
         darka -= parseInt(`${playh}`);
         mailx = `${episode5 * 2}`;
         episode5 %= Math.max(3, parseInt(`${playh}`));
      }
         loadingY &= 1 / (Math.max(loadingY, 2));
          let middlewareq = String.fromCharCode(108,115,112,112,111,108,121,102,95,112,95,53,55,0);
          let moditym = String.fromCharCode(105,95,51,56,95,97,108,115,97,0);
          let usernameg = String.fromCharCode(110,97,109,101,115,95,120,95,56,48,0);
         controlV /= Math.max(1, parseFloat(`${moditym.length}`));
         middlewareq += `${middlewareq.length}`;
         moditym += `${(String.fromCharCode(90,0) == usernameg ? usernameg.length : middlewareq.length)}`;
          let ewardedm = 1;
         controlV /= Math.max(parseFloat(`${guidee.size ^ ewardedm}`), 3);
      while (3.56 >= controlV) {
          let rulesq = 1.0;
         controlV *= parseFloat(`${parseInt(`${rulesq}`)}`);
         break;
      }
      for (let u = 0; u < 2; u++) {
         plus0 = tick0.length < 99;
      }
      for (let n = 0; n < 2; n++) {
         tick0 = [tick0.length];
      }
       let headerW = 2.0;
         controlV /= Math.max(4, parseFloat(`${parseInt(`${controlV}`) & loadingY}`));
      filede += `${((singlew ? 5 : 1) | (videoS ? 3 : 5))}`;
   }
            cardWidth += Math.floor(excess / CARDS_PER_ROW)
        }

        setCardsPerRow(CARDS_PER_ROW);

   for (let g = 0; g < 1; g++) {
       let leftX = true;
       let popupZ: Map<any, any> = new Map([[String.fromCharCode(109,97,103,110,105,116,117,100,101,95,48,95,54,54,0),String.fromCharCode(108,95,51,55,95,116,115,99,99,0)], [String.fromCharCode(115,95,51,95,112,101,115,113,0),String.fromCharCode(103,95,49,56,95,116,119,111,108,111,111,112,0)], [String.fromCharCode(97,112,112,101,110,100,105,110,103,95,120,95,52,50,0),String.fromCharCode(118,105,100,101,111,116,111,111,108,98,111,120,95,101,95,55,52,0)]]);
       let temperatureM = 1;
       let specO: Map<any, any> = new Map([[String.fromCharCode(118,95,55,50,95,119,97,108,108,112,97,112,101,114,0),String.fromCharCode(110,111,110,110,117,108,108,115,115,114,99,95,104,95,54,50,0)], [String.fromCharCode(112,114,101,99,97,108,99,117,108,97,116,101,95,113,95,51,50,0),String.fromCharCode(104,101,97,100,112,104,111,110,101,115,95,106,95,53,51,0)], [String.fromCharCode(110,97,116,105,118,101,108,121,95,119,95,48,0),String.fromCharCode(105,110,118,111,108,118,101,100,95,115,95,55,53,0)]]);
       let predictionh = 1.0;
         popupZ.set(`${leftX}`, ((leftX ? 3 : 4) % (Math.max(temperatureM, 8))));
         predictionh *= parseInt(`${predictionh}`) * popupZ.size;
         temperatureM /= Math.max(4, (3 << (Math.min(3, Math.abs((leftX ? 4 : 2))))));
          let singapore8: Map<any, any> = new Map([[String.fromCharCode(100,105,115,112,108,97,121,115,95,119,95,51,51,0),450], [String.fromCharCode(108,95,55,55,95,107,101,99,99,97,107,0),520]]);
          let const_iki = String.fromCharCode(109,101,115,104,101,115,95,107,95,57,48,0);
          let layoutH = true;
         popupZ.set(`${layoutH}`, (parseInt(`${predictionh}`) | (layoutH ? 4 : 1)));
         singapore8.set(`${const_iki}`, const_iki.length * 3);
          let suggestionf = String.fromCharCode(108,105,115,116,115,95,111,95,57,54,0);
          let rightC = String.fromCharCode(99,117,114,116,97,105,110,95,48,95,57,54,0);
          let readA = 5.0;
         temperatureM *= 2 & suggestionf.length;
         suggestionf = `${parseInt(`${readA}`) & 3}`;
         rightC = `${1 % (Math.max(3, rightC.length))}`;
         readA -= parseFloat(`${parseInt(`${readA}`)}`);
         leftX = 72 < temperatureM;
      let stationsZ = 7658901.0 >= predictionh;
      do {
         predictionh *= specO.size | 2;
         if (stationsZ) {
            break;
         }
      } while ((2.47 >= (predictionh - 5.4)) && stationsZ);
          let fieldh = String.fromCharCode(106,95,54,48,95,99,104,97,110,103,101,99,111,117,110,116,101,114,0);
         leftX = !leftX;
         fieldh = `${fieldh.length >> (Math.min(fieldh.length, 4))}`;
      while (leftX) {
          let baiduY = 3;
         temperatureM ^= temperatureM | 1;
         baiduY *= baiduY << (Math.min(Math.abs(baiduY), 1));
         break;
      }
      while (5 <= popupZ.size) {
         leftX = (81 == (popupZ.size - (!leftX ? popupZ.size : 72)));
         break;
      }
      while ((3 + temperatureM) < 1) {
         temperatureM *= (parseInt(`${predictionh}`) % (Math.max(4, (leftX ? 2 : 1))));
         break;
      }
         leftX = specO.get(`${temperatureM}`) == null;
      let ewarded0 = leftX ? !leftX : leftX;
      do {
         leftX = 29 >= popupZ.size;
         if (ewarded0) {
            break;
         }
      } while (ewarded0 && (leftX));
      let skip7 = popupZ.size <= 9811474;
      do {
         popupZ.set(`${predictionh}`, parseInt(`${predictionh}`) & 3);
         if (skip7) {
            break;
         }
      } while (skip7 && (Array.from(popupZ.keys()).includes(`${temperatureM}`)));
         predictionh += 1;
      placement9 *= ((leftX ? 5 : 1) * volumep.length);
   }
       let whiteY = String.fromCharCode(106,95,50,53,95,101,108,101,109,101,110,116,119,105,115,101,0);
       let source8 = false;
       let textv = String.fromCharCode(118,95,51,56,95,115,99,97,110,115,0);
      let watchs = source8 ? !source8 : source8;
      do {
         source8 = source8 && textv.length >= 54;
         if (watchs) {
            break;
         }
      } while (watchs && (whiteY.startsWith(`${source8}`)));
         textv = `${3 & textv.length}`;
      for (let r = 0; r < 2; r++) {
         source8 = whiteY.length <= textv.length;
      }
      for (let m = 0; m < 3; m++) {
          let strX = 1.0;
          let viewern = 4.0;
          let topic2: Array<any> = [758, 839];
         source8 = strX < 93.34 && !source8;
         strX *= topic2.length;
         viewern -= parseFloat(`${parseInt(`${viewern}`) & topic2.length}`);
      }
      if (!whiteY.includes(`${source8}`)) {
          let indicatorm = String.fromCharCode(108,95,49,49,95,109,97,105,108,99,104,105,109,112,0);
          let editS = String.fromCharCode(107,95,50,53,95,98,117,108,108,101,116,115,0);
         source8 = textv.length < 6;
         indicatorm += `${indicatorm.length % (Math.max(8, editS.length))}`;
         editS += `${indicatorm.length << (Math.min(Math.abs(1), 3))}`;
      }
         source8 = !whiteY.endsWith(`${source8}`);
          let s_imagex = false;
         textv += "3";
      while (source8) {
          let logoQ = String.fromCharCode(101,99,117,114,115,105,118,101,95,120,95,56,56,0);
          let searchbarX: Map<any, any> = new Map([[String.fromCharCode(98,114,105,103,104,116,110,101,115,115,95,111,95,52,51,0),String.fromCharCode(115,112,101,101,100,111,109,101,116,101,114,95,99,95,53,55,0)], [String.fromCharCode(115,95,48,95,116,105,102,102,0),String.fromCharCode(115,99,97,108,101,95,118,95,50,49,0)], [String.fromCharCode(101,110,100,115,95,120,95,48,0),String.fromCharCode(110,105,115,116,95,116,95,54,48,0)]]);
          let blackb = String.fromCharCode(105,95,57,53,95,99,114,101,97,116,105,111,110,0);
          let crownj = String.fromCharCode(114,117,108,101,115,95,109,95,53,55,0);
          let taiwanZ = true;
         source8 = (whiteY.length / (Math.max(6, textv.length))) < 61;
         logoQ = `${(String.fromCharCode(116,0) == crownj ? (taiwanZ ? 4 : 3) : crownj.length)}`;
         searchbarX.set(logoQ, crownj.length);
         blackb = `${((taiwanZ ? 2 : 5))}`;
         break;
      }
         source8 = source8 || textv.length >= 65;
      singlew = textv.includes(`${source8}`);
        setMarginRight(BTN_MARGIN_RIGHT);

       let greenA = String.fromCharCode(98,95,51,49,95,115,111,102,114,101,101,0);
       let humidityh = String.fromCharCode(102,95,54,52,95,98,97,99,107,108,105,103,104,116,0);
       let episodeY = 2.0;
         humidityh = `${(String.fromCharCode(88,0) == greenA ? humidityh.length : greenA.length)}`;
          let singleX: Array<any> = [39, 298];
         greenA = `${parseInt(`${episodeY}`)}`;
         singleX.push(singleX.length / (Math.max(8, singleX.length)));
       let networkj = String.fromCharCode(119,95,52,56,95,102,114,97,103,109,101,110,116,115,0);
         humidityh = `${parseInt(`${episodeY}`)}`;
         networkj = `${2 << (Math.min(2, networkj.length))}`;
       let fastr = true;
       let navigationz = false;
      while (humidityh.length < 5) {
         humidityh += `${((fastr ? 1 : 3) + greenA.length)}`;
         break;
      }
       let mathw = 2.0;
       let inactivei = 0.0;
      while (5.64 >= (mathw * 1.79) && navigationz) {
          let orientationt = 0.0;
          let combinedo = 2.0;
          let yingh = 1.0;
         mathw /= Math.max(((fastr ? 2 : 2) % (Math.max(4, (navigationz ? 5 : 2)))), 2);
         orientationt += 1;
         combinedo += parseFloat(`${parseInt(`${yingh}`)}`);
         yingh += parseInt(`${orientationt}`) * 1;
         break;
      }
      placement9 += greenA.length >> (Math.min(Math.abs(3), 1));
   let megaphoneC = selectk == String.fromCharCode(99,49,52,56,102,57,113,57,0);
   do {
      selectk = `${3 * targetT.length}`;
      if (megaphoneC) {
         break;
      }
   } while (megaphoneC && ((selectk.length % 2) < 2 || (selectk.length % (Math.max(2, 8))) < 3));
        setCardWidth(cardWidth);

      targetT += `${3 << (Math.min(4, volumep.length))}`;
      volumep.push(targetT.length);
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
                if (onPress) {
                    onPress({ vodId: vod?.vod_id });
                }
                dispatch(playVod(vod));
                navigation.navigate('播放', {
                    vod_id: vod?.vod_id,
                    player_mode: playerMode
                });
                
                
            }}
            index={idx}
            vod_pic_list={vod.vod_pic_list}
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

export default memo(VodListVertical);

const styles = StyleSheet.create({
    vodList: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
})