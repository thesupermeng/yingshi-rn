import React, { memo, useEffect, useState, useMemo } from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList, Image, Linking } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';

import { playVod } from '@redux/actions/mayi_goallogo';
import { useAppDispatch } from '@hooks/mayi_redirect';
import VodCard from '../../components/vod/mayi_pressure_footballfiledlayout';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { mayi_EmptyGradle } from '@type/mayi_green';


interface mayi_GoogleViews {
    vods: Array<mayi_EmptyGradle>,
    numOfRows?: number,
    outerRowPadding?: number,
    minNumPerRow?: number,
    heightToWidthRatio?: number,
    onPress?: () => any,
}

function VodListVertical({ vods, numOfRows = 2, outerRowPadding = 0, minNumPerRow = 3, heightToWidthRatio = 1.414, onPress }: mayi_GoogleViews) {
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
       let favoritew = String.fromCharCode(120,95,57,54,95,114,101,99,105,112,114,111,99,97,108,0);
    let promotionS: Array<any> = [29, 981, 849];
    let iconclosewhitewithbgW: Array<any> = [399, 578];
    let sansr = String.fromCharCode(102,117,110,99,116,105,111,110,95,105,95,51,52,0);
    let list6 = String.fromCharCode(121,95,49,49,95,116,121,112,0);
    let redirect1 = 5.0;
    let iconmoreB: Map<any, any> = new Map([[String.fromCharCode(121,98,114,105,95,104,95,57,52,0),126], [String.fromCharCode(112,95,50,57,95,105,110,100,101,111,100,97,116,97,0),188], [String.fromCharCode(115,116,114,101,115,115,95,57,95,50,48,0),813]]);
    let nbatrophym = String.fromCharCode(107,95,50,54,95,101,114,97,115,101,100,0);
    let promotionq = String.fromCharCode(97,95,49,54,95,101,110,117,109,0);
    let homeJ = 1;
    let types3 = String.fromCharCode(97,112,112,101,110,100,95,117,95,55,53,0);
    let libfileW = 2;
    let colorsX: Array<any> = [String.fromCharCode(117,95,56,49,95,117,110,109,111,118,101,100,0), String.fromCharCode(116,95,49,52,95,115,116,114,116,111,105,110,116,0)];
      iconmoreB.set(types3, parseInt(`${redirect1}`));
   for (let c = 0; c < 2; c++) {
      list6 = "3";
   }
   while (4 >= (homeJ << (Math.min(nbatrophym.length, 4)))) {
      homeJ ^= 3;
      break;
   }

        const PADDING = 8;

   let closeD = 9246867 <= homeJ;
   do {
      homeJ |= 3;
      if (closeD) {
         break;
      }
   } while (closeD && (redirect1 > 3.97));
   let reactnativejsO = iconmoreB.size >= 6229013;
   do {
       let castingK: Map<any, any> = new Map([[String.fromCharCode(117,110,100,101,114,115,99,111,114,101,95,108,95,55,51,0),505], [String.fromCharCode(97,109,114,110,98,95,113,95,55,51,0),906]]);
       let stationO = 5.0;
       let ajaxW = false;
       let feedbackq = String.fromCharCode(104,95,57,50,95,101,114,114,111,114,99,98,0);
      if (1.81 >= stationO) {
         stationO += 3 & parseInt(`${stationO}`);
      }
      while (1.30 < stationO || (stationO * 1.30) < 2.71) {
         ajaxW = (feedbackq.length + parseInt(`${stationO}`)) >= 14;
         break;
      }
         feedbackq += `${(3 - (ajaxW ? 2 : 5))}`;
      for (let t = 0; t < 3; t++) {
         ajaxW = stationO == 30.59;
      }
         stationO -= (String.fromCharCode(113,0) == feedbackq ? feedbackq.length : (ajaxW ? 1 : 5));
      for (let i = 0; i < 3; i++) {
         stationO /= Math.max(((ajaxW ? 5 : 5) | 3), 1);
      }
         stationO /= Math.max(castingK.size | parseInt(`${stationO}`), 3);
         stationO += (1 & (ajaxW ? 3 : 4));
       let mbsplashN: Map<any, any> = new Map([[String.fromCharCode(117,95,56,56,95,108,97,98,101,108,0),329], [String.fromCharCode(115,119,115,99,97,108,101,114,101,115,95,116,95,49,49,0),142], [String.fromCharCode(114,114,111,114,95,102,95,51,0),467]]);
       let becomeX: Map<any, any> = new Map([[String.fromCharCode(102,95,50,50,95,99,104,97,112,116,101,114,0),true ], [String.fromCharCode(108,95,55,48,95,99,104,97,110,103,101,115,0),false ]]);
       let guideX: Map<any, any> = new Map([[String.fromCharCode(99,111,100,101,98,111,111,107,95,53,95,54,49,0),String.fromCharCode(102,95,56,95,100,99,116,114,101,102,0)], [String.fromCharCode(118,95,56,55,95,101,109,111,116,105,99,111,110,0),String.fromCharCode(111,95,52,51,95,114,116,112,115,101,110,100,101,114,0)]]);
         guideX = new Map([[`${castingK.size}`, 3]]);
          let libbuffero = false;
          let subtextl: Array<any> = [String.fromCharCode(121,95,51,51,95,99,107,115,117,109,0), String.fromCharCode(116,111,110,95,52,95,51,52,0)];
          let anythink0 = 5;
         becomeX.set(`${libbuffero}`, castingK.size % (Math.max(3, 2)));
         subtextl.push(3 & subtextl.length);
         anythink0 >>= Math.min(1, Math.abs(3 / (Math.max(9, anythink0))));
      iconmoreB.set(`${stationO}`, favoritew.length / (Math.max(3, 9)));
      if (reactnativejsO) {
         break;
      }
   } while (reactnativejsO && (1 == iconmoreB.size));
      homeJ += promotionS.length;
        const windowDim = width - insets.left - insets.right - outerRowPadding - (2.1 * spacing.sideOffset); 

   if (4 < sansr.length) {
      promotionq += `${(String.fromCharCode(53,0) == types3 ? types3.length : iconclosewhitewithbgW.length)}`;
   }
      promotionq = `${promotionq.length}`;
   let ewardedp = promotionq.length <= 5022215;
   do {
      promotionq += `${list6.length ^ sansr.length}`;
      if (ewardedp) {
         break;
      }
   } while (ewardedp && (5 == (promotionq.length >> (Math.min(Math.abs(1), 3)))));
        const maxWidth = (windowDim / minNumPerRow) - PADDING;

      iconmoreB.set(`${redirect1}`, promotionq.length * 1);
   let redscoreballa = 8970051 <= iconclosewhitewithbgW.length;
   do {
       let project1 = true;
       let y_centera: Array<any> = [911, 333];
       let cornershootQ = 4.0;
       let iconpointscore3 = 4;
       let liveshareR = 0;
         y_centera.push(iconpointscore3);
      let bodan0 = 8965356 >= liveshareR;
      do {
         liveshareR <<= Math.min(parseInt(`${Math.abs((iconpointscore3 << (Math.min(2, Math.abs((project1 ? 4 : 4))))))}`), 5);
         if (bodan0) {
            break;
         }
      } while ((2 >= (2 * liveshareR)) && bodan0);
      let data5 = cornershootQ >= 6906448.0;
      do {
         cornershootQ += liveshareR;
         if (data5) {
            break;
         }
      } while (data5 && ((iconpointscore3 / (Math.max(cornershootQ, 1))) >= 5.14));
      if ((5 + liveshareR) >= 2 && 5 >= (y_centera.length + liveshareR)) {
         y_centera.push(2 / (Math.max(2, iconpointscore3)));
      }
         iconpointscore3 -= 2;
       let shared2: Array<any> = [184, 366];
      for (let n = 0; n < 2; n++) {
         liveshareR ^= 3 - iconpointscore3;
      }
      for (let v = 0; v < 1; v++) {
          let plusx = 0.0;
          let componenti: Map<any, any> = new Map([[String.fromCharCode(107,105,110,100,115,95,122,95,53,52,0),String.fromCharCode(115,95,49,56,95,114,101,115,116,111,114,101,0)], [String.fromCharCode(121,95,56,48,95,115,104,101,108,108,0),String.fromCharCode(97,95,57,55,95,115,99,111,114,101,0)]]);
          let bootsplash9 = String.fromCharCode(117,95,51,52,95,101,100,105,97,0);
         liveshareR &= componenti.size - 3;
         plusx /= Math.max(4, 3 - bootsplash9.length);
         componenti.set(`${plusx}`, 2 * bootsplash9.length);
      }
      iconclosewhitewithbgW = [iconclosewhitewithbgW.length * parseInt(`${cornershootQ}`)];
      if (redscoreballa) {
         break;
      }
   } while ((iconclosewhitewithbgW.length > promotionS.length) && redscoreballa);
       let viewerw = 1.0;
       let defaultlogoA = String.fromCharCode(98,105,110,107,100,115,112,95,100,95,57,53,0);
      if (defaultlogoA.endsWith(`${viewerw}`)) {
         viewerw *= parseFloat(`${defaultlogoA.length ^ 1}`);
      }
      while (5 == (defaultlogoA.length - 2) || (parseFloat(`${defaultlogoA.length}`) * viewerw) == 4.54) {
          let unselectedc = true;
          let predictionbannersharedK = String.fromCharCode(101,120,101,99,117,116,105,110,103,95,102,95,50,53,0);
         viewerw /= Math.max(parseFloat(`${defaultlogoA.length - parseInt(`${viewerw}`)}`), 2);
         unselectedc = !predictionbannersharedK.startsWith(`${unselectedc}`);
         predictionbannersharedK = `${predictionbannersharedK.length}`;
         break;
      }
         defaultlogoA = `${parseInt(`${viewerw}`)}`;
          let mailt = String.fromCharCode(100,101,99,105,109,97,108,115,95,97,95,50,56,0);
          let fullscreenminq = 5.0;
         defaultlogoA += `${defaultlogoA.length}`;
         mailt += `${3 | parseInt(`${fullscreenminq}`)}`;
         fullscreenminq -= mailt.length & parseInt(`${fullscreenminq}`);
          let middlewarei: Array<any> = [45, 368];
          let predictionbannershared2 = String.fromCharCode(116,114,117,101,109,111,116,105,111,110,100,97,116,97,95,51,95,52,49,0);
          let shielddone4 = String.fromCharCode(97,112,101,114,95,51,95,49,51,0);
         viewerw /= Math.max(parseFloat(`${middlewarei.length}`), 5);
         middlewarei.push(shielddone4.length << (Math.min(predictionbannershared2.length, 1)));
         predictionbannershared2 += "2";
         shielddone4 += `${predictionbannershared2.length}`;
         defaultlogoA = `${3 << (Math.min(2, defaultlogoA.length))}`;
      redirect1 += 1;
        let cardWidth = Math.min(160, Math.floor(maxWidth));

   while (!promotionq.endsWith(list6)) {
       let icontransferclubp = 2.0;
       let t_unlockG = true;
      while (4.18 > icontransferclubp) {
         t_unlockG = !t_unlockG;
         break;
      }
      let detailsd = icontransferclubp >= 9648066.0;
      do {
         icontransferclubp += (parseFloat(`${parseInt(`${icontransferclubp}`) >> (Math.min(4, Math.abs((t_unlockG ? 2 : 5))))}`));
         if (detailsd) {
            break;
         }
      } while (detailsd && ((icontransferclubp - 4.71) <= 4.37 || 4.71 <= icontransferclubp));
          let typesT: Array<any> = [953, 340];
          let dragm = String.fromCharCode(108,111,97,100,115,95,121,95,51,51,0);
         icontransferclubp -= parseFloat(`${2 % (Math.max(10, typesT.length))}`);
         typesT.push(dragm.length);
         dragm += "1";
       let commono: Array<any> = [201, 622];
         icontransferclubp -= parseFloat(`${1 & parseInt(`${icontransferclubp}`)}`);
         t_unlockG = (((t_unlockG ? 45 : commono.length) - commono.length) <= 45);
      promotionq += `${(3 >> (Math.min(1, Math.abs((t_unlockG ? 1 : 3)))))}`;
      break;
   }
       let iconarrowleftX = String.fromCharCode(114,101,102,101,114,95,105,95,50,57,0);
       let typingg = 3.0;
       let mappingg = 4;
         mappingg %= Math.max(iconarrowleftX.length * 1, 3);
         typingg -= mappingg / 1;
         typingg *= parseInt(`${typingg}`) / (Math.max(iconarrowleftX.length, 2));
      for (let l = 0; l < 1; l++) {
         mappingg ^= (iconarrowleftX == String.fromCharCode(110,0) ? iconarrowleftX.length : parseInt(`${typingg}`));
      }
      while (3.94 > (typingg * iconarrowleftX.length) || (iconarrowleftX.length - 4) > 5) {
         iconarrowleftX += `${parseInt(`${typingg}`)}`;
         break;
      }
       let countryv: Map<any, any> = new Map([[String.fromCharCode(99,117,115,116,111,109,95,100,95,52,0),String.fromCharCode(97,95,50,51,95,112,114,111,112,111,114,116,105,111,110,97,108,0)], [String.fromCharCode(107,95,54,95,99,111,109,112,105,108,101,111,112,116,105,111,110,0),String.fromCharCode(107,95,51,51,95,103,101,111,98,116,97,103,0)]]);
       let iconqqN: Map<any, any> = new Map([[String.fromCharCode(98,117,108,108,101,116,115,95,101,95,53,50,0),971], [String.fromCharCode(105,116,97,108,105,97,110,95,52,95,54,0),684]]);
      if (3 <= (countryv.size % (Math.max(iconarrowleftX.length, 1))) || (countryv.size % (Math.max(3, 8))) <= 5) {
         iconarrowleftX += `${countryv.size}`;
      }
         countryv = new Map([[`${countryv.size}`, iconqqN.size | 3]]);
          let selectedl = String.fromCharCode(98,114,105,110,103,95,113,95,53,50,0);
         countryv = new Map([[`${iconqqN.size}`, iconqqN.size >> (Math.min(5, Math.abs(parseInt(`${typingg}`))))]]);
         selectedl += `${selectedl.length}`;
      iconmoreB.set(iconarrowleftX, 2 - mappingg);
       let animations2 = false;
       let schedulev: Array<any> = [String.fromCharCode(109,117,108,116,105,112,108,121,95,106,95,56,54,0), String.fromCharCode(99,97,110,99,101,108,108,105,110,103,95,117,95,56,56,0), String.fromCharCode(99,99,111,117,110,116,95,112,95,56,55,0)];
      let sellv = schedulev.length <= 5640199;
      do {
          let fill7: Array<any> = [238, 697, 817];
          let historyF = String.fromCharCode(112,111,115,116,115,99,97,108,101,95,50,95,51,51,0);
          let previewX = String.fromCharCode(113,95,57,53,95,97,99,107,115,0);
         schedulev.push(2 - previewX.length);
         fill7.push(fill7.length ^ 1);
         historyF = `${fill7.length % 1}`;
         previewX = `${historyF.length % 1}`;
         if (sellv) {
            break;
         }
      } while (sellv && (5 > schedulev.length || (5 - schedulev.length) > 3));
         schedulev.push(2);
         animations2 = !animations2 && schedulev.length <= 60;
      if (schedulev.length > 2) {
         schedulev = [((animations2 ? 1 : 5) ^ schedulev.length)];
      }
         animations2 = animations2 || schedulev.length <= 64;
         animations2 = schedulev.includes(animations2);
      iconclosewhitewithbgW = [(list6 == String.fromCharCode(68,0) ? homeJ : list6.length)];
        const cardHeight = heightToWidthRatio * cardWidth;

   let holderV = 6360398 <= homeJ;
   do {
      homeJ /= Math.max(promotionq.length / (Math.max(2, 7)), 2);
      if (holderV) {
         break;
      }
   } while ((1 >= (favoritew.length ^ 4)) && holderV);
      list6 = `${iconmoreB.size}`;
   let iconarrowleftZ = iconmoreB.size >= 8569578;
   do {
      iconmoreB.set(types3, homeJ);
      if (iconarrowleftZ) {
         break;
      }
   } while (iconarrowleftZ && (iconmoreB.size < 5));
        const CARDS_PER_ROW = Math.floor(windowDim / cardWidth);

   for (let z = 0; z < 2; z++) {
      sansr = `${sansr.length + parseInt(`${redirect1}`)}`;
   }
      promotionS = [sansr.length];
      libfileW /= Math.max(4, homeJ);
        let BTN_MARGIN_RIGHT = (windowDim - (CARDS_PER_ROW * cardWidth)) / (CARDS_PER_ROW - 1);

   let chatroombackgroundH = sansr.length <= 8328860;
   do {
       let ewardedd = 0.0;
       let whatsappq: Array<any> = [671, 516, 205];
       let audiences = false;
       let assistW = false;
       let share9 = true;
      let notificationC = share9 ? !share9 : share9;
      do {
         share9 = (74 <= ((!assistW ? whatsappq.length : 74) >> (Math.min(whatsappq.length, 2))));
         if (notificationC) {
            break;
         }
      } while (notificationC && (!share9 || audiences));
         whatsappq = [(2 >> (Math.min(Math.abs((share9 ? 5 : 2)), 1)))];
          let tick2 = 3.0;
          let searchbarG = String.fromCharCode(112,97,105,114,105,110,103,95,107,95,57,57,0);
         audiences = (!assistW ? share9 : assistW);
         tick2 /= Math.max(2, parseFloat(`${parseInt(`${tick2}`) - 2}`));
         searchbarG += `${searchbarG.length}`;
      let expandk = assistW ? !assistW : assistW;
      do {
          let cedbadcebfbfbfbcfecbck = String.fromCharCode(112,114,101,97,108,108,111,99,95,106,95,51,48,0);
          let homeactivew = String.fromCharCode(116,111,107,104,122,95,53,95,57,0);
          let videoR = 3;
         assistW = 52 == videoR || audiences;
         cedbadcebfbfbfbcfecbck += `${cedbadcebfbfbfbcfecbck.length | 1}`;
         homeactivew += `${cedbadcebfbfbfbcfecbck.length / (Math.max(homeactivew.length, 7))}`;
         videoR >>= Math.min(Math.abs(cedbadcebfbfbfbcfecbck.length / 1), 5);
         if (expandk) {
            break;
         }
      } while (expandk && ((whatsappq.length & 5) >= 5));
       let saveI = String.fromCharCode(112,95,51,57,95,105,110,100,101,112,101,110,100,101,110,99,101,0);
       let hejih = String.fromCharCode(108,105,103,104,116,95,118,95,55,51,0);
          let yellowtoredL = 0;
          let source9 = true;
          let typesM = String.fromCharCode(121,95,49,48,48,95,97,116,99,104,0);
         whatsappq.push(((audiences ? 1 : 3) + (share9 ? 5 : 4)));
         yellowtoredL -= ((source9 ? 3 : 4));
         source9 = typesM.length > 98;
         typesM = `${((source9 ? 4 : 5) ^ yellowtoredL)}`;
      if (!share9) {
         share9 = String.fromCharCode(78,0) == saveI;
      }
          let appleT = 4.0;
          let unselectedZ: Array<any> = [454, 607];
          let materialc = String.fromCharCode(97,99,99,101,108,101,114,97,116,105,111,110,95,48,95,53,53,0);
         assistW = whatsappq.length <= 70;
         appleT *= parseFloat(`${materialc.length}`);
         unselectedZ.push(parseInt(`${appleT}`));
         materialc += `${(materialc == String.fromCharCode(79,0) ? unselectedZ.length : materialc.length)}`;
      if (hejih != String.fromCharCode(77,0) || saveI == String.fromCharCode(85,0)) {
          let search3 = 3.0;
          let sortJ = 2.0;
          let blackh = String.fromCharCode(103,95,53,57,95,112,97,103,101,108,105,115,116,0);
          let themem: Map<any, any> = new Map([[String.fromCharCode(111,95,57,57,95,100,105,115,109,105,115,115,105,110,103,0),338], [String.fromCharCode(118,95,49,51,95,102,105,114,101,0),761], [String.fromCharCode(97,108,108,111,119,105,95,110,95,48,0),995]]);
          let black1: Array<any> = [String.fromCharCode(99,102,116,98,115,117,98,95,57,95,52,57,0), String.fromCharCode(111,95,56,52,95,97,114,99,104,105,118,101,0), String.fromCharCode(97,110,103,117,108,97,114,95,103,95,54,53,0)];
         hejih += `${parseInt(`${ewardedd}`) ^ 2}`;
         search3 /= Math.max(parseInt(`${sortJ}`), 3);
         sortJ += parseInt(`${sortJ}`) & 2;
         blackh = `${parseInt(`${search3}`) - 3}`;
         themem = new Map([[`${themem.size}`, (blackh == String.fromCharCode(70,0) ? themem.size : blackh.length)]]);
         black1.push(2 + blackh.length);
      }
          let libhermesl = 4;
         share9 = (!audiences ? !assistW : audiences);
         libhermesl -= libhermesl;
      let fillT = saveI.length >= 8859067;
      do {
          let watch6: Map<any, any> = new Map([[String.fromCharCode(115,99,97,108,97,98,105,108,105,116,121,95,57,95,55,49,0),208], [String.fromCharCode(98,95,49,56,95,114,101,109,111,118,101,103,114,97,105,110,0),568]]);
          let defaultplayerimgv = 2;
         saveI += `${whatsappq.length}`;
         watch6.set(`${defaultplayerimgv}`, watch6.size * 3);
         defaultplayerimgv *= defaultplayerimgv << (Math.min(Math.abs(watch6.size), 5));
         if (fillT) {
            break;
         }
      } while (fillT && (3 == hejih.length || saveI == String.fromCharCode(75,0)));
         assistW = !hejih.includes(`${ewardedd}`);
         saveI += `${saveI.length >> (Math.min(Math.abs(3), 4))}`;
      for (let g = 0; g < 3; g++) {
          let phonesharev = true;
          let yellowanimationliveD: Array<any> = [596, 616];
          let nterstitialN: Array<any> = [396, 79, 927];
         hejih += `${parseInt(`${ewardedd}`) << (Math.min(2, Math.abs(2)))}`;
         phonesharev = !phonesharev;
         yellowanimationliveD = [yellowanimationliveD.length];
         nterstitialN.push(((phonesharev ? 3 : 2) - nterstitialN.length));
      }
      for (let j = 0; j < 1; j++) {
         share9 = ewardedd >= 82.60;
      }
      sansr += `${whatsappq.length % 1}`;
      if (chatroombackgroundH) {
         break;
      }
   } while ((nbatrophym.length < 3 || sansr != String.fromCharCode(88,0)) && chatroombackgroundH);
      iconmoreB.set(favoritew, 1 | favoritew.length);
   for (let u = 0; u < 2; u++) {
      list6 = `${iconclosewhitewithbgW.length >> (Math.min(Math.abs(3), 2))}`;
   }
        if (BTN_MARGIN_RIGHT > 16) {

   if ((nbatrophym.length >> (Math.min(Math.abs(2), 4))) <= 4 || 2 <= (nbatrophym.length >> (Math.min(Math.abs(2), 1)))) {
      nbatrophym += `${3 - favoritew.length}`;
   }
      homeJ <<= Math.min(3, Math.abs(2));
   for (let u = 0; u < 3; u++) {
      redirect1 += iconmoreB.size;
   }
            const excess = (BTN_MARGIN_RIGHT - 16) * (CARDS_PER_ROW - 1);

      homeJ -= iconmoreB.size;
      redirect1 -= sansr.length % 2;
   while (3 == (homeJ | 3)) {
      homeJ %= Math.max(1, 2);
      break;
   }
            BTN_MARGIN_RIGHT = 16;

       let predictionbuttonS = String.fromCharCode(101,103,119,105,116,95,115,95,54,52,0);
       let gifty = true;
       let iconfeedbackc = String.fromCharCode(101,120,116,114,97,99,102,103,95,107,95,52,50,0);
         predictionbuttonS = "2";
         iconfeedbackc = `${(predictionbuttonS == String.fromCharCode(51,0) ? iconfeedbackc.length : predictionbuttonS.length)}`;
         predictionbuttonS += `${((gifty ? 1 : 5))}`;
      let changeK = gifty ? !gifty : gifty;
      do {
          let uploadD = String.fromCharCode(108,115,112,112,111,108,121,102,0);
          let owngoalp = String.fromCharCode(113,116,97,98,108,101,115,95,113,95,57,50,0);
          let static_55 = 5.0;
          let basketballR = 3.0;
          let settingx = false;
         gifty = (iconfeedbackc.length / (Math.max(6, parseInt(`${static_55}`)))) <= 96;
         uploadD = `${parseInt(`${basketballR}`)}`;
         owngoalp += "3";
         static_55 += (owngoalp == String.fromCharCode(100,0) ? uploadD.length : owngoalp.length);
         basketballR /= Math.max(parseFloat(`${owngoalp.length / 1}`), 3);
         if (changeK) {
            break;
         }
      } while (changeK && (!predictionbuttonS.endsWith(`${gifty}`)));
      while (!gifty) {
          let iconwatchq = false;
         iconfeedbackc += `${predictionbuttonS.length}`;
         break;
      }
         gifty = (28 > (iconfeedbackc.length ^ (!gifty ? 28 : iconfeedbackc.length)));
       let giftbuttonc = 0.0;
       let gestureV = 2.0;
      while (!predictionbuttonS.includes(iconfeedbackc)) {
          let reactnativeratingsU = false;
          let awayq: Array<any> = [983, 863];
          let predictionwinM = String.fromCharCode(108,105,98,120,95,103,95,50,57,0);
         predictionbuttonS += `${(predictionwinM.length & (reactnativeratingsU ? 5 : 5))}`;
         reactnativeratingsU = awayq.includes(awayq[awayq.length - 1]);
         break;
      }
      while (!gifty) {
         predictionbuttonS += `${(String.fromCharCode(53,0) == iconfeedbackc ? predictionbuttonS.length : iconfeedbackc.length)}`;
         break;
      }
      nbatrophym += `${nbatrophym.length}`;
      iconmoreB.set(list6, list6.length | 2);
   while (1 == (iconmoreB.size - 2)) {
       let libfollyX = 4.0;
       let philippinesg: Map<any, any> = new Map([[String.fromCharCode(114,95,49,52,95,98,111,100,105,101,115,0),822], [String.fromCharCode(99,111,109,112,108,101,116,101,95,56,95,57,53,0),953]]);
       let chartx = 2.0;
       let select1 = true;
      let volumeI = select1 ? !select1 : select1;
      do {
         select1 = !select1;
         if (volumeI) {
            break;
         }
      } while ((select1 && (5 - philippinesg.size) >= 4) && volumeI);
       let informationO: Map<any, any> = new Map([[String.fromCharCode(97,95,54,55,95,116,120,116,0),true ], [String.fromCharCode(108,95,56,50,95,110,111,110,110,117,108,108,100,101,115,116,105,110,97,116,105,111,110,0),true ]]);
       let iconarrowrightorangeP = 0.0;
       let vietnam1 = 1.0;
         libfollyX += parseFloat(`${1 % (Math.max(parseInt(`${chartx}`), 8))}`);
      let j_imageK = 5294914.0 >= vietnam1;
      do {
         vietnam1 /= Math.max(parseFloat(`${3}`), 2);
         if (j_imageK) {
            break;
         }
      } while ((!select1) && j_imageK);
         iconarrowrightorangeP /= Math.max(1, parseFloat(`${informationO.size + 2}`));
         informationO.set(`${libfollyX}`, parseInt(`${libfollyX}`) * parseInt(`${chartx}`));
         libfollyX *= parseFloat(`${3}`);
         libfollyX -= parseFloat(`${parseInt(`${iconarrowrightorangeP}`)}`);
       let china6 = String.fromCharCode(115,112,101,99,116,114,97,95,107,95,49,48,48,0);
         informationO.set(`${vietnam1}`, (china6 == String.fromCharCode(74,0) ? parseInt(`${vietnam1}`) : china6.length));
      if (libfollyX > 2.15) {
         select1 = chartx > 57.39 && 57.39 > iconarrowrightorangeP;
      }
      iconmoreB = new Map([[list6, libfileW]]);
      break;
   }
            cardWidth += Math.floor(excess / CARDS_PER_ROW)  
        }

        setCardsPerRow(CARDS_PER_ROW);

   for (let r = 0; r < 1; r++) {
      sansr = `${iconmoreB.size}`;
   }
      nbatrophym = `${(String.fromCharCode(110,0) == sansr ? sansr.length : homeJ)}`;
   if (libfileW > promotionq.length) {
      libfileW >>= Math.min(1, Math.abs(libfileW / (Math.max(types3.length, 1))));
   }
        setMarginRight(BTN_MARGIN_RIGHT);

   if ((libfileW % (Math.max(9, favoritew.length))) < 2 && (favoritew.length % 2) < 2) {
      libfileW *= iconmoreB.size;
   }
   while (homeJ > sansr.length) {
      sansr = `${homeJ}`;
      break;
   }
   for (let n = 0; n < 3; n++) {
      iconmoreB = new Map([[`${promotionS.length}`, (list6 == String.fromCharCode(122,0) ? promotionS.length : list6.length)]]);
   }
        setCardWidth(cardWidth);

   if (!favoritew.includes(`${iconmoreB.size}`)) {
       let mbsplashw = 4.0;
       let sports1 = 4;
       let animationn = 3;
         sports1 &= sports1 % (Math.max(parseInt(`${mbsplashw}`), 3));
          let iconsaveimage9 = String.fromCharCode(115,104,111,114,116,102,108,111,97,116,95,56,95,49,48,0);
          let hometeamfield9: Array<any> = [456, 739, 507];
         animationn -= sports1 & animationn;
         iconsaveimage9 += `${hometeamfield9.length ^ iconsaveimage9.length}`;
         hometeamfield9.push(1 + hometeamfield9.length);
      favoritew = `${nbatrophym.length}`;
   }
       let playlist9: Map<any, any> = new Map([[String.fromCharCode(112,97,115,115,101,115,95,98,95,48,0),241], [String.fromCharCode(99,97,108,108,111,117,116,95,108,95,52,53,0),341], [String.fromCharCode(100,95,52,54,95,99,97,112,116,105,111,110,0),659]]);
      if (3 > playlist9.size) {
          let expiredU = String.fromCharCode(97,98,111,114,116,95,122,95,57,53,0);
         playlist9 = new Map([[`${playlist9.size}`, playlist9.size * 2]]);
         expiredU += `${expiredU.length + 2}`;
      }
         playlist9.set(`${playlist9.size}`, 2);
      let eventR = playlist9.size <= 5295390;
      do {
         playlist9.set(`${playlist9.size}`, 1 - playlist9.size);
         if (eventR) {
            break;
         }
      } while (eventR && (!Array.from(playlist9.values()).includes(playlist9.size)));
      promotionS = [3];
   let cancel1 = 8172367 >= iconmoreB.size;
   do {
      iconmoreB = new Map([[`${promotionS.length}`, 2]]);
      if (cancel1) {
         break;
      }
   } while ((1 <= (2 - nbatrophym.length) || (2 - iconmoreB.size) <= 1) && cancel1);
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