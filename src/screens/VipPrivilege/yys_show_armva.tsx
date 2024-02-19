import React, { memo, useEffect, useState, useMemo } from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList, Image } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';

import { playVod } from '@redux';
import { useAppDispatch } from '@hooks';
import VodCard from '../../components/vod/yys_private';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { yysPenaltyshoot } from '@type';
import { disableAdultMode, enableAdultMode } from '@redux';


interface yysIconarrowrightorangeStation {
    vods: Array<yysPenaltyshoot>,
    numOfRows?: number,
    outerRowPadding?: number,
    minNumPerRow?: number,
    heightToWidthRatio?: number,
    onPress?: () => any,
    playerMode?: 'normal' | 'adult'
}

function VodListVerticalVip({ vods, numOfRows = 2, outerRowPadding = 0, minNumPerRow = 3, heightToWidthRatio = 1.414, onPress, playerMode = 'normal' }: yysIconarrowrightorangeStation) {
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
       let kuaishou5 = String.fromCharCode(120,95,50,51,95,109,111,118,116,101,120,116,115,117,98,0);
    let orientation3: Map<any, any> = new Map([[String.fromCharCode(99,95,50,54,95,101,120,116,101,110,115,105,111,110,115,0),940], [String.fromCharCode(109,95,49,95,106,111,121,102,117,108,0),806], [String.fromCharCode(101,120,112,108,105,99,105,116,108,121,95,115,95,49,51,0),723]]);
    let sellmathbackgrounde: Map<any, any> = new Map([[String.fromCharCode(105,110,116,112,95,55,95,49,0),156], [String.fromCharCode(108,101,118,105,110,115,111,110,95,121,95,56,55,0),819]]);
    let loadingspinnerp = String.fromCharCode(102,102,116,115,95,121,95,51,50,0);
    let defaultlogo9: Array<any> = [String.fromCharCode(108,95,55,52,95,102,101,97,116,117,114,101,100,0), String.fromCharCode(99,110,116,95,98,95,54,54,0)];
    let fieldV = 4;
    let gpayg = String.fromCharCode(115,116,111,114,97,103,101,95,98,95,54,48,0);
    let libcxxcomponentsr: Map<any, any> = new Map([[String.fromCharCode(100,101,115,99,114,105,112,116,111,114,115,95,102,95,56,52,0),true ], [String.fromCharCode(119,105,110,100,105,110,103,95,98,95,56,52,0),true ], [String.fromCharCode(111,95,56,57,95,121,97,98,101,0),true ]]);
    let ginit_kH = 3;
    let dependenciesq = String.fromCharCode(112,101,114,112,101,110,100,105,99,117,108,97,114,95,52,95,52,55,0);
   let twitterD = 7050379 <= defaultlogo9.length;
   do {
      defaultlogo9.push((String.fromCharCode(54,0) == gpayg ? gpayg.length : loadingspinnerp.length));
      if (twitterD) {
         break;
      }
   } while ((2 == (orientation3.size & defaultlogo9.length)) && twitterD);
   while (kuaishou5 != loadingspinnerp) {
       let yellowvideoliveu = String.fromCharCode(116,114,97,110,115,108,105,116,101,114,97,116,101,100,95,51,95,49,50,0);
       let homeactiven = String.fromCharCode(122,95,54,49,95,103,108,111,98,97,108,0);
       let disconnectedF = 4;
       let navigationK = String.fromCharCode(100,95,52,55,95,116,111,97,115,116,0);
       let dropdown2 = 3.0;
      let arrowrightT = 6389518 >= homeactiven.length;
      do {
         homeactiven += `${homeactiven.length}`;
         if (arrowrightT) {
            break;
         }
      } while ((homeactiven.length == 4) && arrowrightT);
      for (let x = 0; x < 3; x++) {
          let filedJ = 5;
          let events: Array<any> = [68, 728];
          let connectionA = String.fromCharCode(110,95,50,55,95,116,105,110,116,101,100,0);
         homeactiven += `${yellowvideoliveu.length | navigationK.length}`;
         filedJ >>= Math.min(5, Math.abs(connectionA.length - 3));
         events.push(events.length ^ 1);
         connectionA += "1";
      }
          let mappingj = false;
          let matchZ = 4.0;
         homeactiven = `${((mappingj ? 2 : 3) >> (Math.min(Math.abs(parseInt(`${matchZ}`)), 1)))}`;
         navigationK = `${disconnectedF}`;
          let middlesoundh = false;
         navigationK += `${3 | parseInt(`${dropdown2}`)}`;
         middlesoundh = (middlesoundh ? !middlesoundh : !middlesoundh);
      for (let j = 0; j < 3; j++) {
         yellowvideoliveu = `${(String.fromCharCode(107,0) == navigationK ? disconnectedF : navigationK.length)}`;
      }
          let temperature0: Array<any> = [469, 539];
         disconnectedF /= Math.max(parseInt(`${dropdown2}`) + navigationK.length, 2);
         temperature0 = [temperature0.length | 3];
          let catagoryn: Array<any> = [496, 670];
          let phoneshareX = 4;
          let runtimeb = 4.0;
         yellowvideoliveu += `${yellowvideoliveu.length / (Math.max(3, catagoryn.length))}`;
         catagoryn = [phoneshareX];
         phoneshareX += parseInt(`${runtimeb}`) & phoneshareX;
         runtimeb -= parseFloat(`${3}`);
      for (let l = 0; l < 1; l++) {
         disconnectedF <<= Math.min(2, Math.abs(yellowvideoliveu.length + 3));
      }
      while (!yellowvideoliveu.includes(`${disconnectedF}`)) {
         yellowvideoliveu = `${disconnectedF}`;
         break;
      }
         navigationK += `${homeactiven.length}`;
         dropdown2 *= disconnectedF;
          let grey3: Array<any> = [188, 661];
         disconnectedF &= yellowvideoliveu.length >> (Math.min(5, homeactiven.length));
         grey3 = [grey3.length % (Math.max(grey3.length, 1))];
         homeactiven = `${(homeactiven == String.fromCharCode(115,0) ? disconnectedF : homeactiven.length)}`;
         navigationK = "2";
      loadingspinnerp += `${fieldV | orientation3.size}`;
      break;
   }

        const PADDING = 8;

   if ((5 << (Math.min(4, Math.abs(sellmathbackgrounde.size)))) < 1) {
       let reactL = 4.0;
       let j_view8 = String.fromCharCode(97,118,101,114,114,111,114,95,97,95,50,54,0);
       let iconbellactiveR: Map<any, any> = new Map([[String.fromCharCode(105,100,105,111,109,95,101,95,54,56,0),153], [String.fromCharCode(106,95,55,56,95,101,109,112,105,114,105,99,97,108,108,121,0),612]]);
       let brightnessg = 3.0;
       let halfj = 3.0;
      while (2.84 <= (4.93 + reactL)) {
         reactL *= parseInt(`${reactL}`);
         break;
      }
      if ((brightnessg / (Math.max(halfj, 7))) > 1.62) {
          let libbufferu: Array<any> = [428, 583];
          let gemfileo = String.fromCharCode(99,95,50,55,95,114,97,112,112,101,114,0);
          let main_l7 = 0.0;
          let mutedg: Array<any> = [662, 855];
         halfj *= 2;
         libbufferu = [gemfileo.length + libbufferu.length];
         gemfileo = `${parseInt(`${main_l7}`)}`;
         main_l7 += parseFloat(`${libbufferu.length}`);
         mutedg = [(gemfileo == String.fromCharCode(109,0) ? gemfileo.length : parseInt(`${main_l7}`))];
      }
         reactL += (j_view8 == String.fromCharCode(52,0) ? parseInt(`${halfj}`) : j_view8.length);
         j_view8 += `${(j_view8 == String.fromCharCode(104,0) ? iconbellactiveR.size : j_view8.length)}`;
         brightnessg -= parseFloat(`${parseInt(`${brightnessg}`) ^ parseInt(`${halfj}`)}`);
         reactL -= iconbellactiveR.size & 1;
      while (3 == iconbellactiveR.size) {
         j_view8 = `${2 / (Math.max(6, parseInt(`${halfj}`)))}`;
         break;
      }
      for (let f = 0; f < 2; f++) {
         iconbellactiveR = new Map([[`${reactL}`, j_view8.length * 1]]);
      }
          let detail5: Map<any, any> = new Map([[String.fromCharCode(105,110,115,116,97,108,108,97,116,105,111,110,115,95,104,95,50,54,0),720], [String.fromCharCode(122,95,52,57,95,115,108,111,119,0),909], [String.fromCharCode(115,95,56,50,95,101,120,97,99,116,0),66]]);
         brightnessg -= parseFloat(`${iconbellactiveR.size * 3}`);
         detail5.set(`${detail5.size}`, detail5.size | detail5.size);
      while (3.64 <= (3.52 * reactL)) {
          let sports4 = String.fromCharCode(114,101,116,97,105,110,95,56,95,53,56,0);
          let halffieldimageR = 5;
         j_view8 = `${parseInt(`${reactL}`)}`;
         sports4 += `${halffieldimageR}`;
         halffieldimageR ^= halffieldimageR;
         break;
      }
         j_view8 = `${iconbellactiveR.size}`;
      while ((j_view8.length >> (Math.min(Math.abs(1), 3))) > 1 || 1 > (1 * parseInt(`${reactL}`))) {
          let nativeexB: Array<any> = [894, 642];
          let short_jr = String.fromCharCode(101,120,99,101,101,100,95,108,95,49,51,0);
          let ping0 = String.fromCharCode(107,95,53,54,95,108,101,118,105,110,115,111,110,0);
         j_view8 += "3";
         nativeexB = [(String.fromCharCode(107,0) == ping0 ? short_jr.length : ping0.length)];
         short_jr = `${short_jr.length}`;
         break;
      }
      while (1.94 >= (brightnessg - 1.93)) {
         brightnessg /= Math.max(4, parseFloat(`${parseInt(`${brightnessg}`) >> (Math.min(Math.abs(iconbellactiveR.size), 2))}`));
         break;
      }
      let predictionbuttonl = String.fromCharCode(112,105,107,56,120,48,0) == j_view8;
      do {
         j_view8 += `${2 & parseInt(`${halfj}`)}`;
         if (predictionbuttonl) {
            break;
         }
      } while (((iconbellactiveR.size / 5) > 2 && (j_view8.length / 5) > 5) && predictionbuttonl);
         iconbellactiveR = new Map([[j_view8, (String.fromCharCode(81,0) == j_view8 ? j_view8.length : parseInt(`${halfj}`))]]);
      sellmathbackgrounde = new Map([[gpayg, (loadingspinnerp == String.fromCharCode(88,0) ? loadingspinnerp.length : gpayg.length)]]);
   }
   for (let o = 0; o < 1; o++) {
      loadingspinnerp += `${2 >> (Math.min(2, defaultlogo9.length))}`;
   }
        const windowDim = width - insets.left - insets.right - outerRowPadding - (2.1 * spacing.sideOffset); 

      fieldV += (kuaishou5 == String.fromCharCode(108,0) ? kuaishou5.length : sellmathbackgrounde.size);
       let gifgoalbgW = false;
       let iconpipshrinkg: Map<any, any> = new Map([[String.fromCharCode(115,111,117,114,99,101,115,95,120,95,56,50,0),333], [String.fromCharCode(115,119,105,122,122,108,101,95,110,95,56,50,0),306], [String.fromCharCode(109,111,100,105,116,121,95,102,95,55,56,0),685]]);
       let iconscheduleU = String.fromCharCode(114,101,99,97,108,99,117,108,97,116,101,95,114,95,52,55,0);
       let customb = String.fromCharCode(104,95,57,56,95,114,101,112,111,114,116,105,110,103,0);
      let filedC = gifgoalbgW ? !gifgoalbgW : gifgoalbgW;
      do {
         gifgoalbgW = customb == String.fromCharCode(56,0);
         if (filedC) {
            break;
         }
      } while (filedC && (!gifgoalbgW));
      if (iconscheduleU.length > customb.length) {
         customb = "3";
      }
      for (let n = 0; n < 3; n++) {
         iconpipshrinkg = new Map([[iconscheduleU, (String.fromCharCode(52,0) == customb ? customb.length : iconscheduleU.length)]]);
      }
         iconscheduleU += `${customb.length - 3}`;
         customb += `${iconpipshrinkg.size}`;
      sellmathbackgrounde = new Map([[`${sellmathbackgrounde.size}`, fieldV ^ sellmathbackgrounde.size]]);
        const maxWidth = (windowDim / minNumPerRow) - PADDING;

   while (4 == (2 / (Math.max(1, fieldV))) && (kuaishou5.length / 2) == 5) {
      kuaishou5 += `${loadingspinnerp.length}`;
      break;
   }
      kuaishou5 = "1";
        let cardWidth = Math.min(160, Math.floor(maxWidth));

   for (let l = 0; l < 1; l++) {
      defaultlogo9.push(loadingspinnerp.length | sellmathbackgrounde.size);
   }
       let modeQ: Map<any, any> = new Map([[String.fromCharCode(113,117,101,115,116,105,111,110,95,50,95,56,51,0),String.fromCharCode(117,112,97,116,101,100,95,122,95,51,0)], [String.fromCharCode(106,95,54,50,95,99,108,116,111,115,116,114,0),String.fromCharCode(115,110,97,109,101,95,108,95,49,51,0)], [String.fromCharCode(100,108,115,121,109,95,49,95,54,55,0),String.fromCharCode(114,95,53,50,95,97,103,97,116,101,0)]]);
       let libturbomodulejsijniH: Array<any> = [String.fromCharCode(112,95,57,49,95,113,116,112,97,108,101,116,116,101,0), String.fromCharCode(103,95,53,51,95,97,108,115,97,115,121,109,98,111,108,116,97,98,108,101,0), String.fromCharCode(98,117,99,107,101,116,95,105,95,50,50,0)];
      if (Array.from(modeQ.values()).includes(libturbomodulejsijniH.length)) {
          let serviceb = 1;
          let policyF = String.fromCharCode(110,109,118,106,111,105,110,116,115,97,100,99,111,115,116,95,118,95,53,57,0);
          let latnY = 3.0;
          let yellowtoredZ = String.fromCharCode(103,101,116,114,97,110,100,111,109,95,49,95,51,0);
         libturbomodulejsijniH.push(2);
         serviceb %= Math.max(3, 4);
         policyF += "1";
         latnY /= Math.max(serviceb, 2);
         yellowtoredZ = `${parseInt(`${latnY}`)}`;
      }
          let pangleS = String.fromCharCode(112,95,49,48,95,103,114,111,117,112,105,110,103,0);
          let const_l7 = String.fromCharCode(103,101,111,99,111,100,101,95,110,95,54,53,0);
          let robotoj = 5.0;
         modeQ.set(`${robotoj}`, (String.fromCharCode(48,0) == const_l7 ? parseInt(`${robotoj}`) : const_l7.length));
         pangleS += `${pangleS.length}`;
      while (libturbomodulejsijniH.length > modeQ.size) {
          let type_s8 = 2.0;
          let pausey = String.fromCharCode(102,95,49,55,95,112,114,101,100,105,99,116,105,111,110,115,0);
         modeQ.set(`${libturbomodulejsijniH.length}`, modeQ.size % 2);
         type_s8 -= (parseFloat(`${pausey == String.fromCharCode(75,0) ? pausey.length : parseInt(`${type_s8}`)}`));
         break;
      }
      while (!Array.from(modeQ.values()).includes(libturbomodulejsijniH.length)) {
         modeQ = new Map([[`${modeQ.size}`, libturbomodulejsijniH.length * modeQ.size]]);
         break;
      }
      while ((modeQ.size * 2) > 2 || (modeQ.size * libturbomodulejsijniH.length) > 2) {
          let benefitH = String.fromCharCode(99,95,49,95,102,105,108,116,101,114,115,0);
         modeQ = new Map([[`${modeQ.size}`, 3]]);
         benefitH = `${3 | benefitH.length}`;
         break;
      }
      if (modeQ.size <= libturbomodulejsijniH.length) {
          let predictionbannershared2 = false;
          let privacyr: Map<any, any> = new Map([[String.fromCharCode(120,95,54,48,95,104,111,116,0),false ], [String.fromCharCode(111,108,100,101,115,116,95,49,95,51,49,0),false ]]);
          let predictionbanneru = String.fromCharCode(112,105,120,100,101,115,99,95,98,95,55,51,0);
          let specK = String.fromCharCode(102,111,108,100,95,97,95,50,57,0);
          let v_hash6: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,103,101,114,105,102,121,95,103,95,54,57,0),false ], [String.fromCharCode(119,95,53,95,114,101,99,111,103,110,105,122,101,100,0),false ]]);
         modeQ.set(`${predictionbannershared2}`, ((predictionbannershared2 ? 1 : 2) * v_hash6.size));
         privacyr = new Map([[`${privacyr.size}`, specK.length << (Math.min(Math.abs(1), 2))]]);
         predictionbanneru += `${1 - privacyr.size}`;
         specK = `${predictionbanneru.length}`;
         v_hash6.set(specK, 3 >> (Math.min(5, specK.length)));
      }
      gpayg += "1";
        const cardHeight = heightToWidthRatio * cardWidth;

       let unreadG = String.fromCharCode(108,95,52,51,95,119,97,118,112,97,99,107,101,110,99,0);
       let macauw = String.fromCharCode(115,101,99,116,105,111,110,95,108,95,52,54,0);
         macauw += `${(macauw == String.fromCharCode(108,0) ? macauw.length : unreadG.length)}`;
         unreadG += `${(String.fromCharCode(83,0) == unreadG ? unreadG.length : macauw.length)}`;
          let splash3 = 1;
          let statsnomoredata0 = String.fromCharCode(100,118,98,115,117,98,95,52,95,57,56,0);
          let orangedownarrow0 = 5;
         unreadG += `${(statsnomoredata0 == String.fromCharCode(77,0) ? statsnomoredata0.length : splash3)}`;
         splash3 += orangedownarrow0;
          let googleG: Map<any, any> = new Map([[String.fromCharCode(103,95,51,48,95,98,97,115,107,101,116,98,97,108,108,0),String.fromCharCode(109,95,55,49,95,104,105,103,104,101,115,116,0)], [String.fromCharCode(114,95,49,55,95,110,100,111,116,115,0),String.fromCharCode(115,101,116,105,118,95,53,95,57,52,0)], [String.fromCharCode(115,117,99,99,101,115,115,111,114,95,97,95,54,57,0),String.fromCharCode(97,114,99,104,95,116,95,55,55,0)]]);
          let bgvipxvodE = 5.0;
         macauw += `${macauw.length / (Math.max(1, 1))}`;
         googleG.set(`${bgvipxvodE}`, parseInt(`${bgvipxvodE}`));
      if (macauw == String.fromCharCode(114,0) || unreadG == String.fromCharCode(50,0)) {
          let mbbidy = 2.0;
          let dark2 = String.fromCharCode(108,95,54,51,95,120,109,112,101,103,0);
         unreadG = `${unreadG.length}`;
         mbbidy += dark2.length;
         dark2 += `${(String.fromCharCode(71,0) == dark2 ? parseInt(`${mbbidy}`) : dark2.length)}`;
      }
         unreadG += `${macauw.length}`;
      loadingspinnerp = `${fieldV}`;
   for (let k = 0; k < 2; k++) {
       let iconcurrentmatchS = 0.0;
       let graphq = true;
      if ((1.56 / (Math.max(4, iconcurrentmatchS))) == 4.50) {
         iconcurrentmatchS *= ((graphq ? 3 : 2) << (Math.min(Math.abs(parseInt(`${iconcurrentmatchS}`)), 3)));
      }
         graphq = !graphq || iconcurrentmatchS <= 92.43;
          let profileactiveG = 2.0;
         graphq = !graphq;
         profileactiveG /= Math.max(parseInt(`${profileactiveG}`), 3);
      if (5.19 < (iconcurrentmatchS / 3.23)) {
         graphq = iconcurrentmatchS >= 10.98 || !graphq;
      }
         iconcurrentmatchS *= 1 % (Math.max(1, parseInt(`${iconcurrentmatchS}`)));
      if (!graphq) {
         graphq = !graphq;
      }
      gpayg = `${fieldV}`;
   }
        const CARDS_PER_ROW = Math.floor(windowDim / cardWidth);

      fieldV %= Math.max(libcxxcomponentsr.size * 1, 3);
   let coreO = 7690038 >= orientation3.size;
   do {
      orientation3.set(kuaishou5, 1 & kuaishou5.length);
      if (coreO) {
         break;
      }
   } while (((2 + orientation3.size) < 1 && (orientation3.size + 2) < 5) && coreO);
        let BTN_MARGIN_RIGHT = (windowDim - (CARDS_PER_ROW * cardWidth)) / (CARDS_PER_ROW - 1);

   while ((defaultlogo9.length * kuaishou5.length) < 4 || 2 < (defaultlogo9.length * 4)) {
      defaultlogo9.push(libcxxcomponentsr.size / (Math.max(gpayg.length, 8)));
      break;
   }
      loadingspinnerp += `${defaultlogo9.length + fieldV}`;
        if (BTN_MARGIN_RIGHT > 16) {

   let iconplayN = sellmathbackgrounde.size <= 8404193;
   do {
       let long_u67 = 0;
         long_u67 |= 1 >> (Math.min(3, Math.abs(long_u67)));
         long_u67 *= long_u67;
         long_u67 /= Math.max(3, 1 ^ long_u67);
      sellmathbackgrounde = new Map([[`${defaultlogo9.length}`, (String.fromCharCode(55,0) == kuaishou5 ? defaultlogo9.length : kuaishou5.length)]]);
      if (iconplayN) {
         break;
      }
   } while ((sellmathbackgrounde.get(`${libcxxcomponentsr.size}`) == null) && iconplayN);
   if (sellmathbackgrounde.size <= 5) {
       let closej = 5;
       let resendq: Map<any, any> = new Map([[String.fromCharCode(119,114,105,116,101,99,111,112,121,95,107,95,49,51,0),152], [String.fromCharCode(113,95,51,50,95,109,112,101,103,118,105,100,101,111,100,115,112,0),597], [String.fromCharCode(112,114,101,101,109,112,116,105,118,101,95,122,95,55,57,0),344]]);
       let predictionwinJ = 2;
       let iconeyeJ = String.fromCharCode(115,116,114,112,116,105,109,101,95,55,95,55,51,0);
      for (let y = 0; y < 3; y++) {
          let mergerW = String.fromCharCode(106,95,56,48,95,100,111,119,110,108,105,110,107,0);
         predictionwinJ -= closej << (Math.min(Math.abs(2), 4));
         mergerW += `${mergerW.length}`;
      }
          let teamz = String.fromCharCode(119,95,56,48,95,118,105,111,108,101,110,99,101,0);
         closej -= predictionwinJ - resendq.size;
         teamz = "3";
         iconeyeJ = `${resendq.size / 3}`;
          let iconpointscore2 = String.fromCharCode(105,95,52,54,95,109,117,116,101,120,0);
          let wifirouterS = String.fromCharCode(115,117,98,109,105,116,95,53,95,52,0);
         predictionwinJ %= Math.max(1, 3);
         iconpointscore2 = `${wifirouterS.length}`;
         wifirouterS += `${iconpointscore2.length}`;
         closej -= predictionwinJ;
         predictionwinJ -= 2;
      if ((3 >> (Math.min(3, Math.abs(resendq.size)))) == 2 || (resendq.size >> (Math.min(iconeyeJ.length, 4))) == 3) {
         iconeyeJ += `${1 / (Math.max(3, iconeyeJ.length))}`;
      }
      let whitebelly = iconeyeJ == String.fromCharCode(104,105,95,98,106,97,98,98,102,0);
      do {
         iconeyeJ = `${(iconeyeJ == String.fromCharCode(117,0) ? iconeyeJ.length : predictionwinJ)}`;
         if (whitebelly) {
            break;
         }
      } while (whitebelly && (4 <= (5 & iconeyeJ.length)));
      while ((resendq.size % (Math.max(4, 9))) > 1 && 3 > (4 % (Math.max(1, resendq.size)))) {
         resendq.set(`${closej}`, 3);
         break;
      }
      let privatechatbgl = iconeyeJ == String.fromCharCode(100,109,105,119,114,113,114,52,0);
      do {
         iconeyeJ += `${iconeyeJ.length}`;
         if (privatechatbgl) {
            break;
         }
      } while ((3 >= (iconeyeJ.length | predictionwinJ) && (iconeyeJ.length | predictionwinJ) >= 3) && privatechatbgl);
      let settingsN = 9570682 <= predictionwinJ;
      do {
          let eyeopenm = 4.0;
          let volumed = true;
          let bell6 = 1.0;
          let orangeclock7 = 4.0;
         predictionwinJ <<= Math.min(Math.abs(((volumed ? 5 : 3) + 3)), 1);
         eyeopenm *= parseInt(`${orangeclock7}`);
         volumed = 66.35 < orangeclock7;
         bell6 /= Math.max(parseInt(`${orangeclock7}`), 5);
         if (settingsN) {
            break;
         }
      } while (((4 - predictionwinJ) == 5) && settingsN);
         resendq = new Map([[`${predictionwinJ}`, iconeyeJ.length]]);
      kuaishou5 += `${(iconeyeJ == String.fromCharCode(75,0) ? defaultlogo9.length : iconeyeJ.length)}`;
   }
            const excess = (BTN_MARGIN_RIGHT - 16) * (CARDS_PER_ROW - 1);

       let react1 = 4.0;
       let imagenetworkerr3 = String.fromCharCode(105,110,116,101,114,110,97,116,105,111,110,97,108,108,121,95,115,95,53,0);
       let predictionactivep = String.fromCharCode(100,111,109,97,105,110,115,95,97,95,50,57,0);
          let backgroundM = false;
          let shootnogoalD = String.fromCharCode(102,97,99,101,95,110,95,52,0);
          let championc: Map<any, any> = new Map([[String.fromCharCode(115,117,98,115,97,109,112,108,105,110,103,95,115,95,49,55,0),968], [String.fromCharCode(112,95,56,50,95,97,117,116,104,101,110,116,105,99,97,116,101,0),459]]);
         react1 /= Math.max(4, parseFloat(`${shootnogoalD.length % (Math.max(1, championc.size))}`));
         backgroundM = (!backgroundM ? !backgroundM : backgroundM);
         shootnogoalD += `${((backgroundM ? 5 : 4) | 1)}`;
         predictionactivep += `${1 | parseInt(`${react1}`)}`;
      while (predictionactivep.length <= imagenetworkerr3.length) {
         imagenetworkerr3 = `${imagenetworkerr3.length}`;
         break;
      }
         predictionactivep = `${predictionactivep.length}`;
         predictionactivep += `${imagenetworkerr3.length}`;
         react1 -= (parseFloat(`${predictionactivep == String.fromCharCode(67,0) ? predictionactivep.length : parseInt(`${react1}`)}`));
         imagenetworkerr3 = `${(imagenetworkerr3 == String.fromCharCode(105,0) ? imagenetworkerr3.length : parseInt(`${react1}`))}`;
         imagenetworkerr3 += `${2 & parseInt(`${react1}`)}`;
      if ((imagenetworkerr3.length * 4) < 4 || (4 % (Math.max(3, imagenetworkerr3.length))) < 1) {
          let iconwatchS = 1.0;
          let elements9 = String.fromCharCode(110,95,51,50,95,112,97,114,115,101,0);
         imagenetworkerr3 += `${imagenetworkerr3.length & parseInt(`${react1}`)}`;
         iconwatchS -= parseFloat(`${parseInt(`${iconwatchS}`) - elements9.length}`);
         elements9 += "1";
      }
      defaultlogo9 = [parseInt(`${react1}`)];
      fieldV /= Math.max(3, fieldV % (Math.max(defaultlogo9.length, 3)));
            BTN_MARGIN_RIGHT = 16;

       let servicer = String.fromCharCode(114,101,109,111,118,101,103,114,97,105,110,95,120,95,55,55,0);
       let iconpipshrinki = String.fromCharCode(100,101,115,116,114,117,99,116,95,106,95,51,53,0);
       let disconnectedlogos = 1.0;
      for (let a = 0; a < 3; a++) {
         iconpipshrinki += `${servicer.length}`;
      }
      let logoutM = String.fromCharCode(100,54,101,117,103,0) == servicer;
      do {
          let assist7 = 5.0;
          let huaweiX: Map<any, any> = new Map([[String.fromCharCode(107,95,50,0),339], [String.fromCharCode(106,102,105,101,108,100,115,95,107,95,55,0),591]]);
          let plus3: Map<any, any> = new Map([[String.fromCharCode(111,95,51,51,95,101,110,117,109,101,114,97,116,111,114,0),574], [String.fromCharCode(106,95,50,52,95,112,105,112,101,108,105,110,101,0),911], [String.fromCharCode(109,95,54,52,95,117,110,100,101,114,115,99,111,114,101,0),884]]);
         servicer = `${iconpipshrinki.length | parseInt(`${assist7}`)}`;
         assist7 += parseFloat(`${plus3.size / (Math.max(3, 2))}`);
         huaweiX.set(`${huaweiX.size}`, 1 + plus3.size);
         if (logoutM) {
            break;
         }
      } while (logoutM && (iconpipshrinki == String.fromCharCode(84,0)));
      let iconR = servicer == String.fromCharCode(97,103,56,119,97,119,0);
      do {
         servicer += `${servicer.length}`;
         if (iconR) {
            break;
         }
      } while ((!iconpipshrinki.includes(servicer)) && iconR);
       let playershirtI = 5;
       let shootE = 0;
      while ((servicer.length - 2) >= 3 && (playershirtI - servicer.length) >= 2) {
         playershirtI -= shootE;
         break;
      }
       let abidetectq = true;
      while ((4 * servicer.length) <= 5 || (servicer.length - 4) <= 3) {
         disconnectedlogos /= Math.max(parseInt(`${disconnectedlogos}`) % (Math.max(1, playershirtI)), 5);
         break;
      }
      let penalty5 = abidetectq ? !abidetectq : abidetectq;
      do {
          let matchdetailbgX = String.fromCharCode(108,95,49,48,48,95,97,117,116,104,101,110,116,105,99,97,116,101,0);
          let libyogaV = String.fromCharCode(120,95,56,48,95,116,98,108,101,110,100,0);
          let imageactionlivex = String.fromCharCode(115,101,110,115,105,116,105,118,105,116,121,95,114,95,56,48,0);
          let skipp = false;
         abidetectq = playershirtI <= parseInt(`${disconnectedlogos}`);
         matchdetailbgX = `${matchdetailbgX.length * libyogaV.length}`;
         libyogaV = `${(String.fromCharCode(81,0) == libyogaV ? imageactionlivex.length : libyogaV.length)}`;
         imageactionlivex = "2";
         skipp = libyogaV.length >= matchdetailbgX.length;
         if (penalty5) {
            break;
         }
      } while (penalty5 && (2 >= iconpipshrinki.length));
      while (!iconpipshrinki.startsWith(`${shootE}`)) {
         shootE >>= Math.min(Math.abs(2 * shootE), 3);
         break;
      }
      libcxxcomponentsr = new Map([[kuaishou5, 3]]);
       let iconplayB = true;
       let materialv = String.fromCharCode(105,115,115,117,101,114,95,102,95,50,50,0);
      let mbnativeadvancedo = materialv == String.fromCharCode(119,56,115,103,119,122,0);
      do {
          let bannerc = true;
          let holdero = String.fromCharCode(115,101,116,115,104,97,114,101,95,54,95,57,48,0);
          let telegramR = String.fromCharCode(115,102,116,112,95,116,95,52,50,0);
          let sellmathbackgroundb: Map<any, any> = new Map([[String.fromCharCode(116,95,53,49,95,105,115,116,97,112,0),true ], [String.fromCharCode(115,109,111,111,116,104,95,119,95,49,48,0),true ], [String.fromCharCode(99,111,112,121,104,95,116,95,49,57,0),false ]]);
         materialv = "3";
         bannerc = !holdero.includes(`${bannerc}`);
         holdero = `${telegramR.length}`;
         telegramR = `${(String.fromCharCode(113,0) == telegramR ? (bannerc ? 4 : 5) : telegramR.length)}`;
         sellmathbackgroundb.set(holdero, (1 | (bannerc ? 2 : 4)));
         if (mbnativeadvancedo) {
            break;
         }
      } while ((materialv.length >= 4) && mbnativeadvancedo);
      let iconsaveimages = iconplayB ? !iconplayB : iconplayB;
      do {
          let changew = String.fromCharCode(110,95,49,56,95,115,116,97,110,100,97,114,100,105,122,101,0);
          let kick8 = 4.0;
          let libcxxcomponents3: Array<any> = [728, 234];
         iconplayB = (79 == (changew.length | (!iconplayB ? changew.length : 79)));
         kick8 += parseInt(`${kick8}`);
         libcxxcomponents3.push(2);
         if (iconsaveimages) {
            break;
         }
      } while ((!materialv.startsWith(`${iconplayB}`)) && iconsaveimages);
         materialv += `${(materialv == String.fromCharCode(107,0) ? (iconplayB ? 1 : 5) : materialv.length)}`;
      if (materialv.startsWith(`${iconplayB}`)) {
         iconplayB = materialv.length >= 52 || iconplayB;
      }
         iconplayB = (((!iconplayB ? 83 : materialv.length) ^ materialv.length) < 83);
          let searchl = String.fromCharCode(106,95,57,51,95,117,112,115,116,114,101,97,109,0);
         materialv = `${(searchl.length + (iconplayB ? 1 : 4))}`;
      orientation3.set(`${materialv}`, libcxxcomponentsr.size - materialv.length);
            cardWidth += Math.floor(excess / CARDS_PER_ROW)
        }

        setCardsPerRow(CARDS_PER_ROW);

      libcxxcomponentsr = new Map([[`${defaultlogo9.length}`, fieldV]]);
   while (2 > (2 + sellmathbackgrounde.size)) {
      sellmathbackgrounde = new Map([[`${orientation3.size}`, 1 + defaultlogo9.length]]);
      break;
   }
        setMarginRight(BTN_MARGIN_RIGHT);

   for (let j = 0; j < 1; j++) {
      loadingspinnerp += `${kuaishou5.length}`;
   }
   if ((kuaishou5.length * orientation3.size) == 1 || (kuaishou5.length * 1) == 2) {
       let anythinkw = 1.0;
       let ninit_5H = String.fromCharCode(104,97,112,116,105,99,95,109,95,50,57,0);
         anythinkw += parseFloat(`${ninit_5H.length}`);
         anythinkw -= parseFloat(`${parseInt(`${anythinkw}`)}`);
         ninit_5H = `${parseInt(`${anythinkw}`) | 3}`;
         ninit_5H += `${ninit_5H.length % 1}`;
         anythinkw += parseFloat(`${ninit_5H.length - 1}`);
      for (let d = 0; d < 2; d++) {
          let dependencyf = String.fromCharCode(97,99,116,105,111,110,95,113,95,57,53,0);
          let greyK: Map<any, any> = new Map([[String.fromCharCode(117,110,109,97,114,107,95,118,95,56,53,0),961], [String.fromCharCode(105,95,54,55,95,100,105,97,108,105,110,103,0),800], [String.fromCharCode(102,95,50,56,95,109,117,108,116,105,99,111,100,101,99,0),456]]);
         ninit_5H += "3";
         dependencyf += `${(String.fromCharCode(65,0) == dependencyf ? dependencyf.length : greyK.size)}`;
         greyK = new Map([[`${greyK.size}`, greyK.size | dependencyf.length]]);
      }
      kuaishou5 = `${2 / (Math.max(7, gpayg.length))}`;
   }
        setCardWidth(cardWidth - 10);

   let iconsharefriends9 = 8729462 <= kuaishou5.length;
   do {
       let kuaishouS = true;
       let dangerz = String.fromCharCode(117,110,97,118,97,105,108,97,98,101,95,102,95,57,56,0);
         dangerz += `${((kuaishouS ? 1 : 2) - 1)}`;
      let adultZ = 7117181 <= dangerz.length;
      do {
         dangerz += `${((kuaishouS ? 4 : 1))}`;
         if (adultZ) {
            break;
         }
      } while (adultZ && (dangerz.length == 3));
         kuaishouS = dangerz.length == 25;
      while (2 == dangerz.length || kuaishouS) {
         kuaishouS = (62 >= (dangerz.length - (kuaishouS ? dangerz.length : 62)));
         break;
      }
         kuaishouS = dangerz.length <= 61;
       let libfabricjniQ = 1;
      kuaishou5 += `${(1 + (kuaishouS ? 3 : 5))}`;
      if (iconsharefriends9) {
         break;
      }
   } while (iconsharefriends9 && (3 > kuaishou5.length));
   if (5 < ginit_kH) {
      dependenciesq = `${3 >> (Math.min(2, Math.abs(fieldV)))}`;
   }
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