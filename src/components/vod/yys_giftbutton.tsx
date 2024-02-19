import React, { memo, useEffect, useState, useMemo } from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList, Image } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';

import { playVod } from '@redux';
import { useAppDispatch } from '@hooks';
import VodCard from '../../components/vod/yys_private';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { yysPenaltyshoot } from '@type';
import { disableAdultMode, enableAdultMode } from '@redux';
import DeviceInfo from 'react-native-device-info';


interface yysIconarrowrightorangeStation {
    vods: Array<yysPenaltyshoot>,
    numOfRows?: number,
    outerRowPadding?: number,
    minNumPerRow?: number,
    heightToWidthRatio?: number,
    onPress?: ({ vodId }: { vodId: any }) => any,
    playerMode?: 'normal' | 'adult'
}

function VodListVertical({ vods, numOfRows = 2, outerRowPadding = 0, minNumPerRow = 3, heightToWidthRatio = 1.414, onPress, playerMode = 'normal' }: yysIconarrowrightorangeStation) {
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
       let mbnativeadvancedC = 0.0;
    let chinag = 5.0;
    let libloggerX: Map<any, any> = new Map([[String.fromCharCode(101,95,57,52,95,105,110,105,116,105,97,108,105,122,97,116,105,111,110,115,0),String.fromCharCode(99,95,51,51,95,104,105,103,104,108,105,103,104,116,97,98,108,101,0)], [String.fromCharCode(109,105,110,109,97,120,95,101,95,50,55,0),String.fromCharCode(104,95,55,56,95,115,116,97,116,0)], [String.fromCharCode(118,99,104,113,95,103,95,52,53,0),String.fromCharCode(112,101,101,108,95,104,95,50,52,0)]]);
    let datas = 0.0;
    let awayv = String.fromCharCode(100,95,54,50,95,112,114,101,100,101,102,105,110,101,100,0);
    let bingA = String.fromCharCode(108,111,99,97,116,105,111,110,115,95,108,95,51,0);
    let temp4 = 1.0;
    let iconbellD = String.fromCharCode(110,95,50,55,95,115,116,115,115,0);
    let modelsX: Map<any, any> = new Map([[String.fromCharCode(105,95,49,56,95,98,115,111,108,117,116,101,0),String.fromCharCode(101,95,53,53,95,111,112,101,110,0)], [String.fromCharCode(111,95,49,57,95,102,97,118,111,114,105,116,101,0),String.fromCharCode(110,95,49,53,95,115,119,101,101,112,0)], [String.fromCharCode(100,114,97,119,97,98,108,101,95,107,95,52,54,0),String.fromCharCode(104,117,109,97,110,95,100,95,54,53,0)]]);
    let statisticsactiveK = String.fromCharCode(110,101,97,114,115,101,116,95,122,95,51,56,0);
    let typingf = 5;
    let filterN = 3;
    let dataf = true;
    let update_jay = String.fromCharCode(115,104,111,114,116,99,117,116,95,98,95,49,54,0);
    let chatD = String.fromCharCode(108,95,55,54,95,109,105,100,115,0);
    let dropdownT = String.fromCharCode(108,95,50,55,95,117,117,105,100,112,114,111,102,0);
      bingA += "2";
   while ((bingA.length / (Math.max(4, temp4))) > 4.14 || 2.90 > (temp4 / (Math.max(4.14, 8)))) {
       let merger1 = 1.0;
       let textlayoutmanagere = String.fromCharCode(108,95,57,51,95,102,116,118,112,108,97,115,116,110,111,100,101,0);
         textlayoutmanagere += `${1 | parseInt(`${merger1}`)}`;
      for (let p = 0; p < 2; p++) {
          let moon_: Array<any> = [String.fromCharCode(116,116,97,100,97,116,97,95,53,95,52,50,0), String.fromCharCode(103,95,49,51,95,115,105,109,117,108,97,116,101,0), String.fromCharCode(115,116,114,110,100,117,112,95,122,95,55,48,0)];
         merger1 *= parseFloat(`${parseInt(`${merger1}`) % 1}`);
         moon_.push(moon_.length);
      }
         merger1 += parseFloat(`${3}`);
      for (let g = 0; g < 2; g++) {
         merger1 += parseFloat(`${3 & textlayoutmanagere.length}`);
      }
      if (!textlayoutmanagere.includes(`${merger1}`)) {
          let graphq = 1.0;
          let gradlewg = String.fromCharCode(108,95,51,49,95,114,101,98,117,105,108,100,0);
          let sportsV = true;
         textlayoutmanagere += "1";
         graphq += (parseFloat(`${parseInt(`${graphq}`) / (Math.max(10, (sportsV ? 1 : 3)))}`));
         gradlewg += `${2 & parseInt(`${graphq}`)}`;
         sportsV = !sportsV;
      }
          let snewarchdefaultsL = String.fromCharCode(105,95,55,56,95,112,114,101,102,105,120,101,115,0);
          let basketballtrophyO = 3;
         merger1 += parseFloat(`${3 - parseInt(`${merger1}`)}`);
         snewarchdefaultsL = `${basketballtrophyO % (Math.max(4, snewarchdefaultsL.length))}`;
         basketballtrophyO |= basketballtrophyO;
      temp4 /= Math.max(2, parseInt(`${merger1}`));
      break;
   }
   for (let r = 0; r < 2; r++) {
      typingf /= Math.max(2, parseInt(`${mbnativeadvancedC}`) & 1);
   }

        const PADDING = 8;

       let iconsettingt = 0.0;
       let launchJ = 3.0;
       let videoB = String.fromCharCode(114,118,118,108,99,95,102,95,53,57,0);
      for (let b = 0; b < 1; b++) {
          let whitevideolive0 = false;
         launchJ /= Math.max(parseInt(`${launchJ}`) / 1, 5);
         whitevideolive0 = !whitevideolive0 || !whitevideolive0;
      }
      if (launchJ >= iconsettingt) {
          let pressuree = String.fromCharCode(119,95,57,55,95,102,111,114,101,109,97,110,0);
          let ballF = 1;
          let appleN = 0.0;
          let emojiheartP = String.fromCharCode(97,95,53,50,95,114,101,99,111,118,101,114,121,0);
         launchJ *= parseInt(`${launchJ}`) & 1;
         pressuree = `${(pressuree == String.fromCharCode(80,0) ? pressuree.length : ballF)}`;
         ballF /= Math.max(2, 1);
         appleN *= parseFloat(`${2}`);
         emojiheartP += "3";
      }
          let airbnbstarN = String.fromCharCode(115,105,110,113,105,95,49,95,50,48,0);
          let guidei = false;
          let handler1 = String.fromCharCode(122,95,51,53,95,115,101,113,0);
         launchJ += parseInt(`${iconsettingt}`) ^ videoB.length;
         airbnbstarN += `${airbnbstarN.length}`;
         guidei = !guidei;
         handler1 = `${handler1.length}`;
         launchJ *= videoB.length << (Math.min(Math.abs(3), 4));
         launchJ *= parseInt(`${iconsettingt}`) % (Math.max(6, videoB.length));
         videoB = `${parseInt(`${launchJ}`) & videoB.length}`;
      while (2 < (parseInt(`${launchJ}`) + videoB.length) || 2 < (parseInt(`${launchJ}`) + videoB.length)) {
         launchJ += 3 ^ parseInt(`${launchJ}`);
         break;
      }
         launchJ -= 2;
          let referrerC = 4.0;
         launchJ -= parseInt(`${iconsettingt}`);
         referrerC /= Math.max(4, 3 | parseInt(`${referrerC}`));
      iconbellD = `${parseInt(`${temp4}`)}`;
   while ((statisticsactiveK.length - libloggerX.size) <= 1) {
       let homeactiveI = 4.0;
       let huaweiR = 2.0;
       let fill8 = 5.0;
       let commentT = 3.0;
       let matchesr = 2.0;
      if (matchesr <= 1.6) {
         fill8 += parseFloat(`${parseInt(`${homeactiveI}`) & 3}`);
      }
         commentT += parseFloat(`${3 ^ parseInt(`${huaweiR}`)}`);
          let header_ = 0.0;
          let buildK = 0;
         matchesr /= Math.max(5, parseFloat(`${parseInt(`${fill8}`)}`));
         header_ -= 3;
         buildK /= Math.max(parseInt(`${header_}`), 2);
      for (let z = 0; z < 1; z++) {
         huaweiR -= parseInt(`${homeactiveI}`);
      }
      if (matchesr > 1.55) {
          let bootsplashO = 2.0;
          let frame_a9: Array<any> = [String.fromCharCode(119,95,49,50,95,105,110,116,114,111,100,117,99,116,105,111,110,0), String.fromCharCode(98,95,53,95,97,99,108,114,0)];
          let mimoj = 0.0;
          let userg = String.fromCharCode(114,101,107,101,121,95,110,95,52,55,0);
         matchesr /= Math.max(parseFloat(`${1}`), 5);
         bootsplashO *= parseFloat(`${3}`);
         frame_a9.push(parseInt(`${mimoj}`));
         userg = `${1 & parseInt(`${mimoj}`)}`;
      }
         commentT -= parseFloat(`${3 - parseInt(`${commentT}`)}`);
         fill8 /= Math.max(parseFloat(`${parseInt(`${huaweiR}`)}`), 2);
       let windC = String.fromCharCode(105,112,109,111,118,105,101,95,97,95,54,0);
       let imagesv = String.fromCharCode(115,109,105,108,101,95,52,95,54,55,0);
      libloggerX = new Map([[`${libloggerX.size}`, libloggerX.size]]);
      break;
   }
   if (3 == (awayv.length & modelsX.size) || 1 == (modelsX.size & 3)) {
      modelsX = new Map([[`${temp4}`, typingf - parseInt(`${temp4}`)]]);
   }
        const windowDim = width - insets.left - insets.right - outerRowPadding - (2.1 * spacing.sideOffset); 

   while (bingA.startsWith(`${filterN}`)) {
      filterN &= ((dataf ? 5 : 4) & awayv.length);
      break;
   }
       let commentx = String.fromCharCode(114,105,100,103,101,95,56,95,52,56,0);
       let orangedownarrowE: Map<any, any> = new Map([[String.fromCharCode(97,114,114,97,110,103,101,100,95,101,95,49,57,0),65], [String.fromCharCode(103,101,115,116,117,114,101,95,57,95,57,52,0),463], [String.fromCharCode(120,95,56,95,98,101,116,104,115,111,102,116,118,105,100,101,111,0),337]]);
         orangedownarrowE.set(`${commentx}`, (commentx == String.fromCharCode(122,0) ? commentx.length : orangedownarrowE.size));
         commentx += `${commentx.length | 1}`;
         orangedownarrowE.set(commentx, commentx.length);
      if ((commentx.length & 4) >= 5) {
         orangedownarrowE.set(commentx, commentx.length / 2);
      }
       let schedulerY: Map<any, any> = new Map([[String.fromCharCode(115,117,114,102,97,99,101,115,95,117,95,56,53,0),467], [String.fromCharCode(97,112,112,101,110,100,97,108,108,95,56,95,53,54,0),762], [String.fromCharCode(115,104,111,114,116,99,117,116,115,95,100,95,54,55,0),92]]);
       let iconcalendarP: Map<any, any> = new Map([[String.fromCharCode(120,95,57,55,95,101,114,114,108,111,103,0),String.fromCharCode(114,97,110,115,102,111,114,109,95,102,95,49,52,0)], [String.fromCharCode(112,95,50,54,95,101,103,114,101,115,115,0),String.fromCharCode(115,110,105,112,112,101,116,95,99,95,49,52,0)]]);
       let friendsL = 4.0;
       let mapbuffera = 5.0;
      modelsX.set(iconbellD, (String.fromCharCode(114,0) == iconbellD ? statisticsactiveK.length : iconbellD.length));
   if (bingA.startsWith(`${mbnativeadvancedC}`)) {
      mbnativeadvancedC -= filterN;
   }
        const maxWidth = (windowDim / minNumPerRow) - PADDING;

   while (3 < (statisticsactiveK.length / 5)) {
      mbnativeadvancedC /= Math.max(4, ((dataf ? 3 : 2) - modelsX.size));
      break;
   }
       let history5 = 5.0;
       let volumeM = 2.0;
          let minimizev: Array<any> = [26, 150];
          let middlebrightnessB = 3.0;
          let full4 = false;
         volumeM += parseFloat(`${parseInt(`${middlebrightnessB}`)}`);
         minimizev.push(minimizev.length);
         full4 = !full4 || minimizev.length == 12;
          let iconadslinkU = true;
          let interstitialh = 4.0;
          let currenth = String.fromCharCode(121,95,49,52,95,105,109,103,0);
         volumeM += parseFloat(`${parseInt(`${history5}`)}`);
         iconadslinkU = iconadslinkU || 32.74 < interstitialh;
         interstitialh /= Math.max(2, (parseFloat(`${(iconadslinkU ? 4 : 5)}`)));
         currenth += `${(parseInt(`${interstitialh}`) | (iconadslinkU ? 1 : 4))}`;
         volumeM *= parseFloat(`${parseInt(`${history5}`)}`);
         history5 *= parseInt(`${history5}`) | 2;
      for (let y = 0; y < 2; y++) {
         history5 += parseInt(`${volumeM}`);
      }
      let philippines7 = volumeM >= 9903454.0;
      do {
          let country7 = 1.0;
          let yellowanimationlive5 = String.fromCharCode(122,95,55,49,95,105,112,111,108,0);
          let iconcalendarE = false;
          let backiconmaskp = String.fromCharCode(114,95,53,50,0);
          let iconbellactiveX = false;
         volumeM -= parseFloat(`${yellowanimationlive5.length}`);
         country7 += parseFloat(`${parseInt(`${country7}`) - 3}`);
         yellowanimationlive5 += "2";
         iconcalendarE = country7 <= 59.30 && !iconbellactiveX;
         backiconmaskp = `${parseInt(`${country7}`) / 2}`;
         iconbellactiveX = iconcalendarE || backiconmaskp.length < 93;
         if (philippines7) {
            break;
         }
      } while ((2.9 <= history5) && philippines7);
      mbnativeadvancedC -= parseInt(`${chinag}`);
   let turndown5 = iconbellD == String.fromCharCode(113,51,115,52,117,0);
   do {
      iconbellD += "3";
      if (turndown5) {
         break;
      }
   } while (turndown5 && (!iconbellD.startsWith(`${datas}`)));
        let cardWidth = Math.min(160, Math.floor(maxWidth));

   for (let a = 0; a < 1; a++) {
       let rewardg: Map<any, any> = new Map([[String.fromCharCode(115,105,110,103,117,108,97,114,95,108,95,57,0),994], [String.fromCharCode(109,112,101,103,97,117,100,105,111,100,101,99,116,97,98,95,121,95,55,52,0),861], [String.fromCharCode(107,95,49,51,95,101,100,103,101,0),875]]);
       let qaagB = String.fromCharCode(102,95,49,53,95,99,111,109,112,108,105,97,110,116,0);
       let androidx: Map<any, any> = new Map([[String.fromCharCode(105,110,105,116,105,97,116,101,95,50,95,54,56,0),false ], [String.fromCharCode(115,95,54,55,95,109,112,101,103,112,115,0),true ], [String.fromCharCode(109,98,114,116,104,114,101,97,100,95,99,95,54,48,0),true ]]);
       let floatings = 1.0;
      while (1 < (3 >> (Math.min(1, Math.abs(androidx.size)))) && 5 < (3 >> (Math.min(2, Math.abs(androidx.size))))) {
          let placeholdero = 3.0;
          let sharewhite6 = true;
         qaagB += "3";
         placeholdero -= parseFloat(`${3 % (Math.max(6, parseInt(`${placeholdero}`)))}`);
         sharewhite6 = sharewhite6 || placeholdero == 14.72;
         break;
      }
      while ((floatings * parseFloat(`${androidx.size}`)) > 3.22) {
         androidx.set(`${floatings}`, (qaagB == String.fromCharCode(67,0) ? parseInt(`${floatings}`) : qaagB.length));
         break;
      }
      let componentd = qaagB == String.fromCharCode(121,95,103,109,95,55,114,115,49,0);
      do {
         qaagB = "2";
         if (componentd) {
            break;
         }
      } while (((floatings * 4.23) == 3.56 && (floatings * parseFloat(`${qaagB.length}`)) == 4.23) && componentd);
      for (let q = 0; q < 2; q++) {
         qaagB = `${qaagB.length}`;
      }
         rewardg.set(`${floatings}`, androidx.size - parseInt(`${floatings}`));
      if ((1 - rewardg.size) <= 4 && 1 <= (rewardg.size - androidx.size)) {
         rewardg = new Map([[`${rewardg.size}`, rewardg.size << (Math.min(qaagB.length, 3))]]);
      }
         androidx.set(qaagB, androidx.size * qaagB.length);
      while (!Array.from(rewardg.values()).includes(androidx.size)) {
          let projectZ: Map<any, any> = new Map([[String.fromCharCode(120,95,55,95,110,114,101,102,0),true ], [String.fromCharCode(99,112,105,97,95,118,95,52,56,0),true ]]);
          let privilegew = 0.0;
          let turndownr = String.fromCharCode(105,95,50,50,95,110,111,110,102,97,116,97,108,0);
         rewardg = new Map([[turndownr, 2 | turndownr.length]]);
         projectZ = new Map([[`${projectZ.size}`, parseInt(`${privilegew}`) ^ 1]]);
         privilegew -= projectZ.size;
         break;
      }
         qaagB += `${qaagB.length}`;
      while ((rewardg.size % 4) > 5 || (qaagB.length % 4) > 3) {
         qaagB += `${rewardg.size - 3}`;
         break;
      }
         androidx.set(`${floatings}`, qaagB.length + 1);
      while (3 <= qaagB.length) {
         qaagB += `${2 * parseInt(`${floatings}`)}`;
         break;
      }
      libloggerX = new Map([[qaagB, 3 & qaagB.length]]);
   }
   if (!Array.from(libloggerX.keys()).includes(`${datas}`)) {
       let fullscreenmax8 = String.fromCharCode(100,97,116,97,104,97,115,104,95,108,95,54,49,0);
       let savep = String.fromCharCode(115,108,105,100,105,110,103,95,116,95,56,52,0);
         savep += `${(fullscreenmax8 == String.fromCharCode(117,0) ? fullscreenmax8.length : savep.length)}`;
       let iconstarY: Array<any> = [546, 738, 8];
      if (2 > (fullscreenmax8.length & iconstarY.length) && 5 > (2 & fullscreenmax8.length)) {
          let description_van = String.fromCharCode(100,101,101,112,101,114,95,56,95,50,55,0);
          let descp = true;
          let photoj = 3.0;
         iconstarY = [savep.length];
         description_van += `${parseInt(`${photoj}`) & 2}`;
         descp = photoj < 13.39;
      }
         savep += `${iconstarY.length}`;
      while ((2 & iconstarY.length) < 5 && (iconstarY.length & 2) < 4) {
         iconstarY = [savep.length];
         break;
      }
       let backwardQ = String.fromCharCode(101,110,99,97,112,115,117,108,97,116,101,100,95,105,95,53,51,0);
      datas -= parseFloat(`${1 - parseInt(`${temp4}`)}`);
   }
      modelsX.set(statisticsactiveK, 1 % (Math.max(7, awayv.length)));
        const includesKeywords = ['flip', 'fold', 'mate x3', 'mate xs'].some(keyword => deviceName.includes(keyword));

   let sortW = String.fromCharCode(107,113,113,98,0) == awayv;
   do {
      awayv = "1";
      if (sortW) {
         break;
      }
   } while ((awayv.length > 2) && sortW);
      temp4 -= 1 - awayv.length;
   for (let y = 0; y < 2; y++) {
      chinag -= parseFloat(`${3 | awayv.length}`);
   }
        if (DeviceInfo.isTablet() || includesKeywords) {

   let football4 = 4993365.0 <= datas;
   do {
      datas *= parseFloat(`${parseInt(`${datas}`)}`);
      if (football4) {
         break;
      }
   } while (football4 && (datas <= temp4));
      datas *= parseFloat(`${2}`);
       let sportP = 1.0;
       let launcherZ: Map<any, any> = new Map([[String.fromCharCode(112,105,110,99,104,95,52,95,57,55,0),121], [String.fromCharCode(106,95,53,52,95,99,111,110,99,97,116,101,110,97,116,101,0),251], [String.fromCharCode(114,101,115,104,117,102,102,108,101,95,103,95,51,51,0),4]]);
       let iconpipexpandH: Array<any> = [675, 698, 615];
      if (!Array.from(launcherZ.values()).includes(sportP)) {
         launcherZ = new Map([[`${launcherZ.size}`, iconpipexpandH.length]]);
      }
      for (let l = 0; l < 3; l++) {
         launcherZ = new Map([[`${iconpipexpandH.length}`, 1]]);
      }
      if (!iconpipexpandH.includes(sportP)) {
         iconpipexpandH = [iconpipexpandH.length];
      }
      while (2 == (launcherZ.size - parseInt(`${sportP}`))) {
          let libglogw = String.fromCharCode(112,95,55,52,95,118,116,97,98,0);
          let filledx = String.fromCharCode(99,95,51,57,95,112,101,97,107,115,0);
          let greenarrowupK = String.fromCharCode(120,95,52,49,95,102,105,108,116,101,114,103,114,97,112,104,0);
          let reminderv = true;
          let catagory1 = 2;
         sportP += catagory1;
         libglogw = `${(libglogw == String.fromCharCode(98,0) ? libglogw.length : (reminderv ? 3 : 2))}`;
         filledx += `${(String.fromCharCode(86,0) == libglogw ? libglogw.length : filledx.length)}`;
         greenarrowupK = `${filledx.length}`;
         reminderv = (greenarrowupK.length * filledx.length) < 45;
         catagory1 *= 2;
         break;
      }
          let activew = String.fromCharCode(100,95,55,52,95,112,101,114,115,111,110,97,108,0);
         iconpipexpandH.push(activew.length % 2);
         launcherZ = new Map([[`${launcherZ.size}`, 2 + iconpipexpandH.length]]);
         sportP += launcherZ.size;
      for (let l = 0; l < 2; l++) {
         iconpipexpandH = [1 % (Math.max(7, launcherZ.size))];
      }
      for (let d = 0; d < 3; d++) {
         launcherZ = new Map([[`${iconpipexpandH.length}`, parseInt(`${sportP}`)]]);
      }
      statisticsactiveK = "2";
            cardWidth = Math.min(145, Math.floor(maxWidth));

       let leftM = 4.0;
       let embedb = true;
      while (!embedb) {
         embedb = 38.40 < leftM;
         break;
      }
       let penaltygoalA: Map<any, any> = new Map([[String.fromCharCode(120,95,49,49,95,115,111,119,97,107,101,117,112,0),String.fromCharCode(103,95,52,56,95,100,101,99,114,101,102,0)], [String.fromCharCode(112,95,54,54,95,98,101,108,111,119,0),String.fromCharCode(115,95,53,50,95,112,114,101,102,101,116,99,104,101,114,0)], [String.fromCharCode(121,95,55,51,95,116,119,105,100,100,108,101,115,0),String.fromCharCode(99,95,56,95,104,105,110,116,0)]]);
       let profilepic_: Map<any, any> = new Map([[String.fromCharCode(115,111,108,105,100,99,111,108,111,114,95,48,95,54,0),746], [String.fromCharCode(116,97,110,103,101,110,116,95,116,95,53,51,0),376]]);
          let mbjscommonR = String.fromCharCode(97,116,111,109,105,99,95,57,95,52,55,0);
         embedb = embedb && leftM > 4.26;
         mbjscommonR += `${mbjscommonR.length}`;
      let videojsZ = 6371804.0 >= leftM;
      do {
         leftM -= ((embedb ? 3 : 5) / (Math.max(parseInt(`${leftM}`), 8)));
         if (videojsZ) {
            break;
         }
      } while (videojsZ && (!embedb || (5.92 * leftM) <= 4.92));
       let notificationx = String.fromCharCode(115,119,105,122,122,108,101,95,48,95,49,53,0);
       let icondownimgp = String.fromCharCode(109,115,118,115,95,112,95,53,55,0);
         notificationx += `${parseInt(`${leftM}`)}`;
      temp4 /= Math.max(1, statisticsactiveK.length + 3);
      awayv = `${parseInt(`${mbnativeadvancedC}`) ^ iconbellD.length}`;
       let reactnavigationI = 0.0;
       let scrollviewB = String.fromCharCode(106,95,54,57,95,101,110,117,109,101,114,97,116,111,114,0);
      let rinit_rJ = String.fromCharCode(120,107,103,115,51,112,120,121,101,0) == scrollviewB;
      do {
         scrollviewB += "2";
         if (rinit_rJ) {
            break;
         }
      } while (rinit_rJ && (1.33 > (5.31 * reactnavigationI) && 5.31 > (parseFloat(`${scrollviewB.length}`) * reactnavigationI)));
      while (5 == (parseInt(`${reactnavigationI}`) * scrollviewB.length) && (scrollviewB.length * 5) == 1) {
         scrollviewB += "3";
         break;
      }
       let emojihearte = 5.0;
      if ((emojihearte - 4) > 3.100) {
         reactnavigationI *= parseFloat(`${2}`);
      }
      let icondefaultthumbnailv = scrollviewB == String.fromCharCode(52,107,114,101,122,51,100,103,0);
      do {
          let videovarX = true;
          let langkeyj = String.fromCharCode(104,95,56,55,95,108,97,110,103,117,97,103,101,0);
          let unewarchdefaultsS = String.fromCharCode(101,95,54,54,0);
         scrollviewB += "3";
         videovarX = unewarchdefaultsS == langkeyj;
         langkeyj = `${unewarchdefaultsS.length}`;
         if (icondefaultthumbnailv) {
            break;
         }
      } while (icondefaultthumbnailv && ((scrollviewB.length * parseInt(`${reactnavigationI}`)) == 1 && (scrollviewB.length + 1) == 4));
         scrollviewB = `${(scrollviewB == String.fromCharCode(121,0) ? scrollviewB.length : parseInt(`${reactnavigationI}`))}`;
      bingA = `${(typingf ^ (dataf ? 1 : 5))}`;
        }

        const cardHeight = heightToWidthRatio * cardWidth;

   if ((awayv.length ^ filterN) < 2 && 2 < (2 ^ awayv.length)) {
      awayv += "1";
   }
      chinag /= Math.max(parseFloat(`${filterN ^ 2}`), 3);
       let homev = String.fromCharCode(99,100,97,116,97,95,102,95,51,48,0);
         homev = `${(String.fromCharCode(102,0) == homev ? homev.length : homev.length)}`;
         homev = `${homev.length / 1}`;
       let footballfieldI = false;
      awayv = `${parseInt(`${temp4}`)}`;
        const CARDS_PER_ROW = Math.floor(windowDim / cardWidth);

      chinag -= parseFloat(`${iconbellD.length % (Math.max(3, 3))}`);
       let zoom1: Map<any, any> = new Map([[String.fromCharCode(122,95,55,56,95,114,101,116,114,97,110,109,105,115,115,105,111,110,0),578], [String.fromCharCode(97,118,105,115,121,110,116,104,95,48,95,49,53,0),567], [String.fromCharCode(114,101,115,105,122,101,95,119,95,57,56,0),324]]);
       let libcrashsdkK: Array<any> = [String.fromCharCode(109,105,108,108,105,115,101,99,111,110,100,115,95,97,95,54,50,0), String.fromCharCode(119,95,56,49,0)];
       let mbnativeadvancedU = 2.0;
          let giflivestreamingD = String.fromCharCode(98,95,55,53,95,99,112,117,102,108,97,103,115,0);
          let bgvipsportq = true;
          let telemetrye = String.fromCharCode(104,101,97,100,105,110,103,95,51,95,55,52,0);
         libcrashsdkK.push(libcrashsdkK.length);
         giflivestreamingD = `${3 % (Math.max(5, telemetrye.length))}`;
         bgvipsportq = (99 == ((bgvipsportq ? giflivestreamingD.length : 99) + giflivestreamingD.length));
         telemetrye += `${telemetrye.length}`;
         zoom1.set(`${libcrashsdkK.length}`, zoom1.size << (Math.min(Math.abs(3), 1)));
          let iconnotificationnewU = String.fromCharCode(120,95,52,56,95,116,97,107,100,115,112,0);
         mbnativeadvancedU -= parseFloat(`${parseInt(`${mbnativeadvancedU}`)}`);
         iconnotificationnewU += `${1 - iconnotificationnewU.length}`;
          let orientations = 1.0;
          let dplusT = 4.0;
          let awayteamfieldZ = 1.0;
         zoom1 = new Map([[`${mbnativeadvancedU}`, parseInt(`${mbnativeadvancedU}`)]]);
         orientations *= parseFloat(`${1 | parseInt(`${awayteamfieldZ}`)}`);
         dplusT /= Math.max(1, parseFloat(`${1}`));
         awayteamfieldZ -= parseInt(`${dplusT}`);
      if (!Array.from(zoom1.keys()).includes(`${mbnativeadvancedU}`)) {
         mbnativeadvancedU -= parseFloat(`${zoom1.size % 3}`);
      }
          let resendD = 3.0;
          let dropdownG = String.fromCharCode(112,104,111,110,101,115,95,119,95,50,49,0);
          let gestureG: Map<any, any> = new Map([[String.fromCharCode(114,101,97,100,121,95,56,95,52,55,0),824], [String.fromCharCode(107,95,53,52,95,110,97,110,112,97,0),170], [String.fromCharCode(115,98,103,112,95,106,95,55,57,0),445]]);
         zoom1 = new Map([[`${zoom1.size}`, libcrashsdkK.length % 2]]);
         resendD -= parseInt(`${resendD}`);
         dropdownG = `${dropdownG.length % (Math.max(3, 3))}`;
         gestureG.set(dropdownG, dropdownG.length);
         libcrashsdkK = [zoom1.size * libcrashsdkK.length];
      if (libcrashsdkK.includes(mbnativeadvancedU)) {
          let temp8 = false;
          let strings = String.fromCharCode(112,95,51,48,95,114,101,110,100,101,114,97,98,108,101,0);
          let uimanagerE = false;
         mbnativeadvancedU *= (parseFloat(`${(temp8 ? 4 : 1)}`));
         temp8 = uimanagerE && strings.length <= 62;
         strings = `${((uimanagerE ? 5 : 3))}`;
      }
         mbnativeadvancedU -= parseFloat(`${3 % (Math.max(6, libcrashsdkK.length))}`);
      temp4 -= (parseInt(`${mbnativeadvancedU}`) ^ (dataf ? 5 : 4));
   if (libloggerX.get(`${datas}`) == null) {
      libloggerX.set(`${mbnativeadvancedC}`, 2 & modelsX.size);
   }
        let BTN_MARGIN_RIGHT = (windowDim - (CARDS_PER_ROW * cardWidth)) / (CARDS_PER_ROW - 1);

   let popups = filterN <= 5061684;
   do {
       let smallorangemanH = 0;
       let sendY = 1.0;
       let matchactiveY = false;
       let canvasE = 3.0;
       let sellmathbackground1 = 3.0;
      if (matchactiveY || (smallorangemanH & 3) < 4) {
         matchactiveY = canvasE <= 73.27 || matchactiveY;
      }
      for (let i = 0; i < 1; i++) {
         sellmathbackground1 /= Math.max(1, parseFloat(`${3 - parseInt(`${sendY}`)}`));
      }
         sendY -= parseFloat(`${1 * parseInt(`${sellmathbackground1}`)}`);
      let selectedN = smallorangemanH <= 8332738;
      do {
         smallorangemanH /= Math.max(1, ((matchactiveY ? 5 : 3) & parseInt(`${canvasE}`)));
         if (selectedN) {
            break;
         }
      } while (((2 - smallorangemanH) >= 2) && selectedN);
         smallorangemanH += 2;
      if ((sendY + canvasE) <= 5.69) {
         canvasE += 1;
      }
      if (matchactiveY) {
          let mutedv = 5.0;
         matchactiveY = canvasE == 39.82;
         mutedv /= Math.max(1, parseInt(`${mutedv}`) ^ parseInt(`${mutedv}`));
      }
      while ((sendY / 1.56) >= 2.30 && !matchactiveY) {
         sendY -= parseFloat(`${parseInt(`${canvasE}`) - 3}`);
         break;
      }
         canvasE += 2 | smallorangemanH;
      if (3.80 == (sendY + canvasE)) {
         canvasE *= 3 << (Math.min(Math.abs(parseInt(`${canvasE}`)), 3));
      }
          let macauU: Array<any> = [460, 809];
         sendY -= parseFloat(`${macauU.length}`);
          let leaguedetailsbgB = String.fromCharCode(109,95,54,54,95,110,101,97,114,98,121,0);
         sendY /= Math.max(parseFloat(`${2}`), 1);
         leaguedetailsbgB += "2";
      for (let t = 0; t < 3; t++) {
          let floaterA = String.fromCharCode(120,95,51,57,95,114,101,116,114,121,0);
          let networkZ = String.fromCharCode(98,95,54,51,95,116,104,101,105,114,0);
          let mbridgeV: Array<any> = [String.fromCharCode(99,107,112,116,95,49,95,49,53,0), String.fromCharCode(109,117,108,116,105,115,105,103,95,102,95,56,51,0)];
         sendY -= (parseFloat(`${String.fromCharCode(88,0) == networkZ ? networkZ.length : parseInt(`${sendY}`)}`));
         floaterA += `${floaterA.length}`;
         mbridgeV.push(mbridgeV.length);
      }
         sendY *= parseFloat(`${1}`);
      while ((sellmathbackground1 + canvasE) == 2.72 && 1.8 == (2.72 + canvasE)) {
          let rocketh = String.fromCharCode(108,111,103,103,105,110,103,95,119,95,49,48,0);
         sellmathbackground1 -= (parseFloat(`${String.fromCharCode(102,0) == rocketh ? rocketh.length : parseInt(`${sendY}`)}`));
         break;
      }
      filterN += awayv.length + statisticsactiveK.length;
      if (popups) {
         break;
      }
   } while (((filterN >> (Math.min(Math.abs(modelsX.size), 2))) >= 5) && popups);
   for (let q = 0; q < 2; q++) {
       let aboutJ = String.fromCharCode(105,95,55,51,95,115,104,105,102,116,105,110,103,115,0);
       let episodeF = true;
       let emojiL = String.fromCharCode(112,97,114,97,108,108,101,108,95,108,95,53,48,0);
       let confirmation0 = 2;
         emojiL += `${emojiL.length}`;
          let themet = 5.0;
          let emojiC = 2.0;
          let leaguedetailsbga = String.fromCharCode(99,111,117,110,116,95,118,95,54,52,0);
         emojiL += `${(String.fromCharCode(77,0) == aboutJ ? parseInt(`${emojiC}`) : aboutJ.length)}`;
         themet /= Math.max(leaguedetailsbga.length, 1);
         emojiC += leaguedetailsbga.length;
          let i_locku = String.fromCharCode(116,104,97,110,95,106,95,55,51,0);
          let reducert = String.fromCharCode(99,95,57,52,95,100,105,115,99,111,110,110,101,99,116,0);
          let iconadslinke: Array<any> = [675, 902];
         episodeF = String.fromCharCode(111,0) == emojiL;
         i_locku = `${reducert.length * iconadslinke.length}`;
         reducert += `${iconadslinke.length / (Math.max(reducert.length, 6))}`;
      let containerG = aboutJ.length <= 7677831;
      do {
         aboutJ += `${2 >> (Math.min(5, aboutJ.length))}`;
         if (containerG) {
            break;
         }
      } while (containerG && (aboutJ.length < 5));
      if (!episodeF || emojiL.length == 1) {
          let basketballq = String.fromCharCode(116,95,50,48,95,121,117,108,101,0);
          let baiduadsU = String.fromCharCode(102,95,51,54,95,118,105,98,114,97,110,99,101,0);
          let yellowscoreballL = 1.0;
          let release_0G = String.fromCharCode(102,97,99,116,111,114,95,109,95,51,0);
          let rulesR = String.fromCharCode(102,111,112,101,110,95,120,95,53,57,0);
         episodeF = (basketballq.length + confirmation0) == 22;
         basketballq += `${rulesR.length & 2}`;
         baiduadsU += "1";
         yellowscoreballL += (parseFloat(`${release_0G == String.fromCharCode(98,0) ? parseInt(`${yellowscoreballL}`) : release_0G.length}`));
         rulesR = `${parseInt(`${yellowscoreballL}`)}`;
      }
      while (confirmation0 <= emojiL.length) {
         confirmation0 &= 1 & confirmation0;
         break;
      }
       let iconsubssuccessl = String.fromCharCode(104,97,108,116,95,117,95,54,0);
       let footballtrophyU = String.fromCharCode(108,95,55,51,95,111,98,106,101,99,116,115,0);
      let whitesmallticku = 6716589 <= footballtrophyU.length;
      do {
          let sentryZ = true;
          let liveH = String.fromCharCode(115,95,56,50,95,99,111,110,99,101,97,108,0);
          let iconwatcha = 5.0;
         footballtrophyU = `${parseInt(`${iconwatcha}`) * aboutJ.length}`;
         sentryZ = (2 == ((!sentryZ ? liveH.length : 2) >> (Math.min(liveH.length, 2))));
         iconwatcha += parseFloat(`${3}`);
         if (whitesmallticku) {
            break;
         }
      } while ((aboutJ.length <= 5 && footballtrophyU == String.fromCharCode(116,0)) && whitesmallticku);
         emojiL += "1";
      for (let a = 0; a < 1; a++) {
          let kickm = 1;
          let teamm = 0;
          let sigmobE: Map<any, any> = new Map([[String.fromCharCode(103,101,110,101,114,97,116,111,114,95,100,95,53,56,0),284], [String.fromCharCode(109,101,116,104,111,100,95,111,95,50,57,0),842]]);
          let loadingspinnerZ = 2;
          let modelsW = String.fromCharCode(100,111,109,101,115,116,105,99,95,102,95,54,55,0);
         emojiL += `${sigmobE.size >> (Math.min(Math.abs(3), 2))}`;
         kickm -= 2;
         teamm |= 3 | kickm;
         sigmobE = new Map([[`${loadingspinnerZ}`, 3]]);
         loadingspinnerZ |= 3;
         modelsW += `${modelsW.length ^ loadingspinnerZ}`;
      }
      while (5 == emojiL.length) {
         confirmation0 ^= aboutJ.length;
         break;
      }
      while (episodeF) {
         footballtrophyU = `${((episodeF ? 3 : 5) & emojiL.length)}`;
         break;
      }
      temp4 *= 1;
   }
      modelsX.set(bingA, 1);
        if (BTN_MARGIN_RIGHT > 16) {

   let dragcloseb = 5134300.0 <= temp4;
   do {
      temp4 *= iconbellD.length;
      if (dragcloseb) {
         break;
      }
   } while (dragcloseb && (2.65 < (bingA.length * temp4) && 2.90 < (temp4 * 2.65)));
   let modulet = iconbellD.length <= 8456895;
   do {
      iconbellD += `${3 + iconbellD.length}`;
      if (modulet) {
         break;
      }
   } while (modulet && (!iconbellD.startsWith(`${libloggerX.size}`)));
   for (let k = 0; k < 2; k++) {
      temp4 += parseInt(`${datas}`) >> (Math.min(4, Math.abs(3)));
   }
            const excess = (BTN_MARGIN_RIGHT - 16) * (CARDS_PER_ROW - 1);

      libloggerX.set(`${mbnativeadvancedC}`, parseInt(`${mbnativeadvancedC}`));
   let predictionbannerx = 7796331 <= modelsX.size;
   do {
      modelsX = new Map([[`${mbnativeadvancedC}`, chatD.length * 2]]);
      if (predictionbannerx) {
         break;
      }
   } while ((modelsX.get(`${temp4}`) != null) && predictionbannerx);
      typingf |= awayv.length;
            BTN_MARGIN_RIGHT = 16;

      datas -= (parseFloat(`${(dataf ? 5 : 1) << (Math.min(Math.abs(typingf), 4))}`));
   if (iconbellD.length >= statisticsactiveK.length) {
      iconbellD += "3";
   }
       let issub8 = 5.0;
       let hometeamfieldJ = String.fromCharCode(117,115,108,116,95,122,95,57,57,0);
       let iconcloseF: Map<any, any> = new Map([[String.fromCharCode(115,119,105,116,99,104,95,120,95,55,51,0),436], [String.fromCharCode(109,111,118,101,95,99,95,52,48,0),742], [String.fromCharCode(116,95,57,95,109,97,114,107,101,114,0),526]]);
      if (1 > (hometeamfieldJ.length / 1) || (1 >> (Math.min(4, hometeamfieldJ.length))) > 3) {
         hometeamfieldJ += `${1 ^ hometeamfieldJ.length}`;
      }
      for (let n = 0; n < 3; n++) {
         hometeamfieldJ += "1";
      }
         hometeamfieldJ = `${parseInt(`${issub8}`) * 3}`;
      while (issub8 >= 4.95) {
         issub8 += parseInt(`${issub8}`) / 3;
         break;
      }
         hometeamfieldJ += `${hometeamfieldJ.length}`;
         hometeamfieldJ += `${hometeamfieldJ.length % 2}`;
         issub8 += hometeamfieldJ.length & 1;
         issub8 -= hometeamfieldJ.length;
      let scoreK = 7729171.0 >= issub8;
      do {
          let styles_ = 5;
          let homeplayerh: Map<any, any> = new Map([[String.fromCharCode(107,105,115,115,95,55,95,55,56,0),825], [String.fromCharCode(117,95,55,49,95,118,97,108,105,100,97,116,105,111,110,115,0),579]]);
          let libloggerL = 0.0;
          let sportv = String.fromCharCode(117,95,53,55,95,115,112,97,109,0);
         issub8 -= 2;
         styles_ /= Math.max(2, styles_ - parseInt(`${libloggerL}`));
         homeplayerh.set(`${libloggerL}`, 2 / (Math.max(4, parseInt(`${libloggerL}`))));
         sportv = `${sportv.length}`;
         if (scoreK) {
            break;
         }
      } while ((2.77 < issub8) && scoreK);
      awayv += `${2 | typingf}`;
            cardWidth += Math.floor(excess / CARDS_PER_ROW)
        }

        setCardsPerRow(CARDS_PER_ROW);

      awayv += `${parseInt(`${temp4}`) & 2}`;
      datas += parseFloat(`${filterN}`);
      modelsX.set(update_jay, (1 / (Math.max(1, (dataf ? 5 : 1)))));
        setMarginRight(BTN_MARGIN_RIGHT);

       let leaguedetailsbgU: Array<any> = [255, 455, 633];
       let floatert = 1.0;
       let libloggerO = 3.0;
      if (5.20 >= (floatert - libloggerO)) {
          let iconclosewhitei = false;
         libloggerO /= Math.max(5, parseFloat(`${parseInt(`${floatert}`) >> (Math.min(1, Math.abs(1)))}`));
         iconclosewhitei = !iconclosewhitei && iconclosewhitei;
      }
         floatert *= parseFloat(`${parseInt(`${floatert}`) | leaguedetailsbgU.length}`);
      datas *= parseFloat(`${1 >> (Math.min(3, Math.abs(parseInt(`${datas}`))))}`);
   let iconeyeA = temp4 >= 6373388.0;
   do {
       let gpay8 = false;
       let internetF = 1;
       let module7: Map<any, any> = new Map([[String.fromCharCode(101,95,57,49,95,115,114,112,0),String.fromCharCode(112,95,57,53,95,116,120,116,0)], [String.fromCharCode(114,101,99,117,114,115,105,111,110,95,111,95,57,57,0),String.fromCharCode(107,95,57,52,95,102,114,97,109,101,110,117,109,0)]]);
       let nodeJ: Array<any> = [787, 460, 859];
       let auto_9ev = 4.0;
       let ping7: Array<any> = [String.fromCharCode(102,114,101,105,114,95,118,95,57,51,0), String.fromCharCode(99,97,112,116,117,114,101,116,101,115,116,118,105,100,101,111,95,110,95,56,50,0), String.fromCharCode(120,95,49,57,95,116,111,117,116,0)];
       let tickedm: Array<any> = [413, 753];
         tickedm.push(nodeJ.length | parseInt(`${auto_9ev}`));
         internetF |= ping7.length | 1;
      while (5 >= tickedm.length) {
         tickedm.push(1);
         break;
      }
      let libfiler = nodeJ.length <= 5877209;
      do {
          let finit_l6D = 0;
          let chinasameu = 2.0;
          let video4 = String.fromCharCode(103,100,112,114,95,52,95,52,57,0);
         nodeJ = [parseInt(`${auto_9ev}`)];
         finit_l6D *= finit_l6D >> (Math.min(Math.abs(parseInt(`${chinasameu}`)), 4));
         chinasameu *= 1 - video4.length;
         video4 = `${finit_l6D}`;
         if (libfiler) {
            break;
         }
      } while ((2 > nodeJ.length) && libfiler);
         ping7.push(internetF - 1);
      if (5 >= ping7.length) {
         module7 = new Map([[`${tickedm.length}`, 3]]);
      }
         ping7.push(tickedm.length);
      if ((auto_9ev * 4.60) <= 1.97 && (module7.size * parseInt(`${auto_9ev}`)) <= 5) {
         auto_9ev /= Math.max(2 * parseInt(`${auto_9ev}`), 1);
      }
          let iconmoreh = false;
          let klevinG = 0.0;
          let sentry_ = 5.0;
         module7.set(`${gpay8}`, ((gpay8 ? 4 : 2) >> (Math.min(Math.abs(parseInt(`${sentry_}`)), 4))));
         iconmoreh = iconmoreh || klevinG < 12.84;
         klevinG *= parseFloat(`${parseInt(`${klevinG}`) * 1}`);
         sentry_ *= parseInt(`${klevinG}`) >> (Math.min(3, Math.abs(1)));
         nodeJ.push(module7.size);
      while (1 >= (module7.size % 1)) {
         gpay8 = !gpay8;
         break;
      }
      let shrunki = auto_9ev <= 5557421.0;
      do {
         auto_9ev += tickedm.length + 2;
         if (shrunki) {
            break;
         }
      } while ((nodeJ.includes(auto_9ev)) && shrunki);
         ping7.push(parseInt(`${auto_9ev}`));
         internetF -= 3 - module7.size;
      temp4 *= 1;
      if (iconeyeA) {
         break;
      }
   } while (iconeyeA && (1.39 <= (temp4 / (Math.max(4.99, 10)))));
   while (!chatD.endsWith(`${bingA.length}`)) {
      chatD += `${parseInt(`${chinag}`) | bingA.length}`;
      break;
   }
        setCardWidth(cardWidth);

   for (let o = 0; o < 1; o++) {
      temp4 -= filterN;
   }
   let topicR = mbnativeadvancedC >= 6778105.0;
   do {
       let philippinesp = 4;
       let photoE = 0.0;
       let register_aH = 3.0;
      while (4.18 < (2.92 + register_aH) && 5.65 < (2.92 + photoE)) {
         register_aH += parseFloat(`${parseInt(`${register_aH}`) & parseInt(`${photoE}`)}`);
         break;
      }
          let splashx: Map<any, any> = new Map([[String.fromCharCode(117,115,101,114,110,97,109,101,95,54,95,50,48,0),String.fromCharCode(116,95,53,50,95,107,105,108,111,98,121,116,101,0)], [String.fromCharCode(101,109,117,101,100,103,101,95,108,95,55,49,0),String.fromCharCode(99,108,101,97,110,95,106,95,52,56,0)], [String.fromCharCode(121,95,52,57,95,105,115,108,101,97,112,0),String.fromCharCode(120,95,52,53,95,100,115,116,114,0)]]);
          let downJ: Map<any, any> = new Map([[String.fromCharCode(108,95,51,54,95,99,114,99,99,0),275], [String.fromCharCode(106,119,116,95,101,95,51,57,0),565]]);
          let greytickp = 5.0;
         photoE *= downJ.size % (Math.max(5, parseInt(`${register_aH}`)));
         splashx.set(`${greytickp}`, splashx.size ^ parseInt(`${greytickp}`));
         downJ = new Map([[`${splashx.size}`, splashx.size]]);
         register_aH += parseFloat(`${parseInt(`${photoE}`)}`);
       let homeA: Array<any> = [String.fromCharCode(103,95,56,55,95,115,112,97,109,0), String.fromCharCode(102,111,117,114,105,101,114,95,106,95,51,48,0)];
         homeA = [homeA.length];
          let mini8 = String.fromCharCode(101,105,112,95,108,95,55,49,0);
          let basketballicon8: Array<any> = [267, 921, 694];
         philippinesp -= 3;
         mini8 = "3";
         basketballicon8 = [1 * basketballicon8.length];
         philippinesp += homeA.length ^ 1;
      while (!homeA.includes(register_aH)) {
          let iconpipshrinkP = false;
          let videocommonC = 2.0;
          let faviconW = false;
          let diceY = String.fromCharCode(102,95,52,56,95,115,101,112,105,97,0);
          let audienceX = true;
         homeA.push((parseInt(`${photoE}`) ^ (iconpipshrinkP ? 3 : 4)));
         iconpipshrinkP = !diceY.startsWith(`${faviconW}`);
         videocommonC += parseFloat(`${2 ^ parseInt(`${videocommonC}`)}`);
         faviconW = !faviconW && diceY.length > 53;
         audienceX = diceY.length == 99;
         break;
      }
      if (2.7 >= photoE) {
          let inewsw = 5.0;
          let loginsuccessD: Array<any> = [String.fromCharCode(100,99,116,115,117,98,95,112,95,48,0), String.fromCharCode(114,95,54,56,0), String.fromCharCode(102,95,57,49,95,116,101,120,101,108,0)];
          let dragg: Map<any, any> = new Map([[String.fromCharCode(112,95,49,52,95,118,97,108,117,101,0),true ], [String.fromCharCode(101,95,49,48,95,114,101,116,114,97,110,115,109,105,115,115,105,111,110,0),false ]]);
          let whatsappB = String.fromCharCode(118,97,114,105,110,102,111,95,111,95,57,56,0);
         register_aH *= parseFloat(`${loginsuccessD.length % (Math.max(2, 10))}`);
         inewsw -= whatsappB.length;
         loginsuccessD.push(3 / (Math.max(4, whatsappB.length)));
         dragg = new Map([[`${dragg.size}`, 3 >> (Math.min(4, Math.abs(dragg.size)))]]);
      }
      mbnativeadvancedC /= Math.max(2, 4);
      if (topicR) {
         break;
      }
   } while (topicR && ((filterN + mbnativeadvancedC) >= 1.1 && 4 >= (filterN * 2)));
      dropdownT += `${3 | typingf}`;
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