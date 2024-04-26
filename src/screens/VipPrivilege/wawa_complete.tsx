import React, { memo, useEffect, useState, useMemo } from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList, Image } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';

import { playVod } from '@redux/actions/wawa_indicator';
import { useAppDispatch } from '@hooks/wawa_root';
import VodCard from '../../components/vod/wawa_mimo_footballtrophy';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { wawaSellProfileinactive } from '@type/wawa_gradlew';
import { disableAdultMode, enableAdultMode } from '@redux/actions/wawa_related';


interface wawaAwayShow {
    vods: Array<wawaSellProfileinactive>,
    numOfRows?: number,
    outerRowPadding?: number,
    minNumPerRow?: number,
    heightToWidthRatio?: number,
    onPress?: () => any,
    playerMode?: 'normal' | 'adult'
}

function VodListVerticalVip({ vods, numOfRows = 2, outerRowPadding = 0, minNumPerRow = 3, heightToWidthRatio = 1.414, onPress, playerMode='normal' }: wawaAwayShow) {
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
       let hometeamfieldK: Map<any, any> = new Map([[String.fromCharCode(115,95,56,50,95,116,101,97,114,0),false ], [String.fromCharCode(98,95,57,49,95,103,115,116,114,105,110,103,0),true ], [String.fromCharCode(111,95,55,48,95,117,110,101,100,105,116,97,98,108,101,0),true ]]);
    let profileinactiveN = 5.0;
    let runtimeschedulerr: Map<any, any> = new Map([[String.fromCharCode(118,95,52,57,0),886], [String.fromCharCode(101,120,112,110,97,100,101,100,95,116,95,56,52,0),334], [String.fromCharCode(115,116,115,115,95,112,95,54,57,0),122]]);
    let libpangleflipped1 = 5.0;
    let privilegeV = 4;
    let colors1 = String.fromCharCode(112,114,111,103,114,97,109,95,97,95,53,48,0);
    let basketballawayteamU: Map<any, any> = new Map([[String.fromCharCode(116,95,56,52,95,116,97,98,108,101,115,0),String.fromCharCode(109,95,55,50,95,112,97,100,100,105,110,103,0)], [String.fromCharCode(119,95,54,95,101,120,112,101,99,116,115,0),String.fromCharCode(109,112,100,98,95,57,95,56,53,0)]]);
    let shirtN: Array<any> = [String.fromCharCode(97,95,51,51,95,108,111,99,107,0), String.fromCharCode(105,95,54,53,95,109,101,116,114,105,99,115,0), String.fromCharCode(108,122,111,120,95,110,95,52,55,0)];
    let tickedF = 5.0;
    let areax: Array<any> = [687, 720, 334];
   let overlayA = privilegeV >= 7055006;
   do {
      privilegeV &= hometeamfieldK.size - parseInt(`${libpangleflipped1}`);
      if (overlayA) {
         break;
      }
   } while ((5 == basketballawayteamU.size) && overlayA);
      profileinactiveN *= basketballawayteamU.size % (Math.max(3, 5));

        const PADDING = 8;

   let reactnativeratingsq = String.fromCharCode(108,122,48,101,120,115,49,0) == colors1;
   do {
       let gesturesr = String.fromCharCode(114,115,116,114,105,112,95,57,95,49,51,0);
       let combinea = 0.0;
      for (let a = 0; a < 2; a++) {
         combinea /= Math.max(gesturesr.length, 2);
      }
      while (1.84 <= (combinea / 2.88)) {
          let defaultprofilepicm = String.fromCharCode(99,104,101,99,107,115,117,109,95,117,95,54,56,0);
          let detailU: Map<any, any> = new Map([[String.fromCharCode(117,112,108,111,97,100,95,53,95,53,56,0),994], [String.fromCharCode(107,95,54,51,95,99,104,97,110,103,101,115,101,116,0),469], [String.fromCharCode(99,95,49,50,95,100,101,102,97,117,108,116,0),258]]);
          let yellowcirclebgN = String.fromCharCode(107,95,56,53,95,97,114,101,118,101,114,115,101,0);
         gesturesr = `${1 & yellowcirclebgN.length}`;
         defaultprofilepicm = `${(defaultprofilepicm == String.fromCharCode(119,0) ? defaultprofilepicm.length : detailU.size)}`;
         detailU = new Map([[`${detailU.size}`, 2]]);
         yellowcirclebgN = `${2 * detailU.size}`;
         break;
      }
         combinea /= Math.max(3, parseInt(`${combinea}`));
          let iconqqA = String.fromCharCode(112,101,114,102,111,114,109,95,102,95,54,54,0);
         gesturesr += `${gesturesr.length}`;
         iconqqA = `${2 % (Math.max(4, iconqqA.length))}`;
       let baiduv = 4;
      for (let s = 0; s < 1; s++) {
         gesturesr = `${2 * parseInt(`${combinea}`)}`;
      }
      colors1 += `${hometeamfieldK.size ^ parseInt(`${profileinactiveN}`)}`;
      if (reactnativeratingsq) {
         break;
      }
   } while ((colors1.startsWith(`${basketballawayteamU.size}`)) && reactnativeratingsq);
   let backgroundb = 8699135 >= colors1.length;
   do {
      colors1 = `${hometeamfieldK.size}`;
      if (backgroundb) {
         break;
      }
   } while (backgroundb && (5 == (runtimeschedulerr.size * 1) && (runtimeschedulerr.size * colors1.length) == 1));
        const windowDim = width - insets.left - insets.right - outerRowPadding - (2.1 * spacing.sideOffset); 

       let eactq = 5;
       let themel: Array<any> = [137, 467, 803];
      if (2 > themel.length) {
         eactq &= eactq / (Math.max(themel.length, 6));
      }
         eactq -= themel.length;
      let pageN = themel.length >= 6211916;
      do {
         themel = [themel.length - eactq];
         if (pageN) {
            break;
         }
      } while ((2 == (eactq / (Math.max(6, themel.length))) || 2 == (eactq / (Math.max(10, themel.length)))) && pageN);
          let reviewX: Map<any, any> = new Map([[String.fromCharCode(116,114,97,99,107,95,119,95,55,48,0),String.fromCharCode(97,114,109,108,105,110,107,95,55,95,51,57,0)], [String.fromCharCode(121,95,49,57,95,106,97,99,111,98,105,0),String.fromCharCode(117,95,49,56,95,112,115,110,114,104,118,115,0)], [String.fromCharCode(104,119,99,97,112,95,112,95,50,57,0),String.fromCharCode(105,100,101,97,108,95,113,95,56,56,0)]]);
          let chatroombackgroundg = String.fromCharCode(108,105,110,117,120,95,109,95,52,55,0);
         themel.push(eactq);
         reviewX.set(chatroombackgroundg, 1 ^ chatroombackgroundg.length);
      for (let w = 0; w < 3; w++) {
         eactq ^= eactq / (Math.max(themel.length, 1));
      }
      let left8 = 6310595 <= themel.length;
      do {
         themel.push(eactq & 3);
         if (left8) {
            break;
         }
      } while ((4 > themel.length) && left8);
      hometeamfieldK.set(`${privilegeV}`, privilegeV | 2);
   if ((colors1.length & 1) > 4 || 1 > (basketballawayteamU.size & colors1.length)) {
       let activitye = 3.0;
       let area_: Map<any, any> = new Map([[String.fromCharCode(115,101,103,109,101,110,116,101,100,95,102,95,53,55,0),194], [String.fromCharCode(97,99,101,108,112,95,122,95,55,56,0),143], [String.fromCharCode(109,105,99,114,111,100,118,100,95,48,95,54,56,0),996]]);
       let flyeri = true;
       let megaphoneG = String.fromCharCode(117,95,57,51,95,108,111,103,103,101,100,0);
      if (!Array.from(area_.values()).includes(activitye)) {
         area_.set(megaphoneG, megaphoneG.length & 2);
      }
          let topic5 = 4.0;
          let holderz = 3.0;
         flyeri = String.fromCharCode(114,0) == megaphoneG && 16.32 == topic5;
         topic5 /= Math.max(5, parseInt(`${holderz}`));
      for (let e = 0; e < 3; e++) {
         activitye += (parseFloat(`${(flyeri ? 2 : 4) >> (Math.min(Math.abs(parseInt(`${activitye}`)), 3))}`));
      }
         megaphoneG += `${megaphoneG.length}`;
      if ((parseFloat(`${area_.size}`) * activitye) == 4.55 || 2 == (area_.size * parseInt(`${activitye}`))) {
          let auto_bJ = 4.0;
          let component9: Map<any, any> = new Map([[String.fromCharCode(118,95,53,95,114,101,108,99,116,120,0),77], [String.fromCharCode(121,95,49,51,95,99,111,110,102,105,103,117,114,101,100,0),33]]);
          let result0 = 4.0;
          let downarrowb: Map<any, any> = new Map([[String.fromCharCode(113,95,57,50,95,109,111,115,97,105,99,0),782], [String.fromCharCode(112,114,111,103,114,101,115,115,105,118,101,95,52,95,50,57,0),343]]);
          let with_0wJ = String.fromCharCode(104,97,110,100,108,101,95,118,95,50,56,0);
         activitye += parseFloat(`${parseInt(`${result0}`) - 3}`);
         auto_bJ += parseInt(`${auto_bJ}`) * with_0wJ.length;
         component9.set(with_0wJ, (String.fromCharCode(87,0) == with_0wJ ? downarrowb.size : with_0wJ.length));
         result0 -= parseFloat(`${1}`);
         downarrowb = new Map([[with_0wJ, parseInt(`${auto_bJ}`) << (Math.min(Math.abs(2), 1))]]);
      }
      for (let q = 0; q < 2; q++) {
         flyeri = ((megaphoneG.length ^ (!flyeri ? 65 : megaphoneG.length)) > 65);
      }
      while ((3 ^ megaphoneG.length) <= 1) {
          let flippert = true;
         area_ = new Map([[megaphoneG, 1]]);
         flippert = !flippert && !flippert;
         break;
      }
         activitye /= Math.max((parseFloat(`${1 - (flyeri ? 3 : 3)}`)), 1);
      basketballawayteamU.set(`${activitye}`, 1 / (Math.max(2, parseInt(`${activitye}`))));
   }
        const maxWidth = (windowDim / minNumPerRow) - PADDING;

      privilegeV /= Math.max(privilegeV, 1);
   if ((runtimeschedulerr.size % (Math.max(1, colors1.length))) < 5 || (runtimeschedulerr.size % 5) < 4) {
       let grayL = true;
       let with_1d8: Array<any> = [String.fromCharCode(97,95,54,49,95,99,104,97,110,103,101,108,111,103,0), String.fromCharCode(100,97,117,100,95,98,95,57,50,0)];
       let footballr = String.fromCharCode(99,95,53,54,95,112,97,114,116,105,116,105,111,110,101,100,0);
      for (let e = 0; e < 3; e++) {
         grayL = grayL && footballr.length >= 20;
      }
         grayL = String.fromCharCode(66,0) == footballr && with_1d8.length == 94;
         with_1d8.push(footballr.length);
       let fileI = String.fromCharCode(116,105,109,101,115,95,53,95,56,48,0);
       let disconnectedlogou = String.fromCharCode(102,114,101,101,108,105,115,116,95,118,95,57,51,0);
      for (let k = 0; k < 2; k++) {
         footballr = `${disconnectedlogou.length - 3}`;
      }
       let auto_l0Y = String.fromCharCode(103,95,50,49,95,99,111,108,108,101,99,116,105,111,110,115,0);
      let soundQ = 8004009 <= footballr.length;
      do {
         footballr += `${1 << (Math.min(1, with_1d8.length))}`;
         if (soundQ) {
            break;
         }
      } while (soundQ && (footballr.length > fileI.length));
      let rewindG = with_1d8.length >= 6780948;
      do {
          let videovark = String.fromCharCode(114,101,99,117,114,115,105,118,101,95,57,95,53,48,0);
          let trophy9 = 2.0;
          let entryU = String.fromCharCode(120,95,54,55,95,114,101,99,111,110,115,116,114,117,99,116,0);
         with_1d8 = [((grayL ? 3 : 2))];
         videovark += `${parseInt(`${trophy9}`)}`;
         trophy9 /= Math.max(parseFloat(`${1 * videovark.length}`), 4);
         entryU += `${(entryU == String.fromCharCode(57,0) ? entryU.length : parseInt(`${trophy9}`))}`;
         if (rewindG) {
            break;
         }
      } while (rewindG && (5 == (with_1d8.length | 3) && 3 == with_1d8.length));
         with_1d8.push((String.fromCharCode(72,0) == footballr ? fileI.length : footballr.length));
      runtimeschedulerr = new Map([[`${shirtN.length}`, shirtN.length]]);
   }
        let cardWidth = Math.min(160, Math.floor(maxWidth)) ;

       let awayteamfieldQ: Map<any, any> = new Map([[String.fromCharCode(103,95,52,49,95,104,116,99,112,0),43], [String.fromCharCode(98,95,55,55,95,112,114,101,102,97,99,101,0),623], [String.fromCharCode(102,100,101,99,95,114,95,56,0),789]]);
       let v_imageh = String.fromCharCode(117,112,100,97,116,101,100,95,105,95,57,53,0);
      while ((awayteamfieldQ.size / (Math.max(v_imageh.length, 6))) < 1 || (v_imageh.length / (Math.max(1, 8))) < 3) {
         v_imageh = `${awayteamfieldQ.size % (Math.max(v_imageh.length, 3))}`;
         break;
      }
      let rankr = v_imageh.length >= 6854245;
      do {
          let filled0 = String.fromCharCode(111,114,112,104,97,110,95,102,95,57,53,0);
          let whitebellw = 3.0;
         v_imageh += `${(String.fromCharCode(88,0) == v_imageh ? awayteamfieldQ.size : v_imageh.length)}`;
         filled0 = `${(filled0 == String.fromCharCode(107,0) ? parseInt(`${whitebellw}`) : filled0.length)}`;
         whitebellw *= filled0.length;
         if (rankr) {
            break;
         }
      } while (rankr && ((awayteamfieldQ.size - v_imageh.length) >= 1 || (awayteamfieldQ.size - v_imageh.length) >= 1));
      let iconarrowrightwhiteL = v_imageh.length <= 8338915;
      do {
         v_imageh += `${awayteamfieldQ.size & v_imageh.length}`;
         if (iconarrowrightwhiteL) {
            break;
         }
      } while ((1 > (v_imageh.length & awayteamfieldQ.size) && 3 > (1 & v_imageh.length)) && iconarrowrightwhiteL);
       let moviesm = String.fromCharCode(118,97,108,105,100,97,116,105,110,103,95,105,95,52,54,0);
       let turndownx = String.fromCharCode(115,110,97,107,101,95,114,95,50,55,0);
         v_imageh += `${awayteamfieldQ.size << (Math.min(Math.abs(3), 5))}`;
          let bellreminderu = 4.0;
         awayteamfieldQ = new Map([[`${awayteamfieldQ.size}`, awayteamfieldQ.size]]);
         bellreminderu *= parseInt(`${bellreminderu}`);
      colors1 += `${parseInt(`${tickedF}`) >> (Math.min(5, Math.abs(3)))}`;
   while (5 == (runtimeschedulerr.size / (Math.max(6, parseInt(`${libpangleflipped1}`)))) || (libpangleflipped1 / (Math.max(runtimeschedulerr.size, 10))) == 5.47) {
      runtimeschedulerr = new Map([[`${shirtN.length}`, 2 * parseInt(`${profileinactiveN}`)]]);
      break;
   }
        const cardHeight = heightToWidthRatio * cardWidth;

   for (let d = 0; d < 3; d++) {
       let indexH = false;
       let bodanD: Map<any, any> = new Map([[String.fromCharCode(116,104,114,101,115,95,115,95,56,55,0),true ], [String.fromCharCode(99,97,108,108,105,110,103,95,102,95,55,53,0),true ]]);
          let nalyticsZ = String.fromCharCode(117,112,108,111,97,100,95,49,95,55,51,0);
          let tick7 = String.fromCharCode(98,95,49,52,95,112,114,101,109,117,108,116,115,116,114,97,105,103,104,116,0);
          let selection9 = String.fromCharCode(105,110,116,101,114,95,57,95,51,56,0);
         bodanD.set(nalyticsZ, nalyticsZ.length / 3);
         tick7 += "3";
         selection9 = "2";
       let notificationfillemptyT = String.fromCharCode(103,95,49,49,95,118,97,108,117,108,101,0);
         bodanD = new Map([[`${bodanD.size}`, (2 << (Math.min(1, Math.abs((indexH ? 2 : 2)))))]]);
          let klevins: Array<any> = [604, 494, 758];
          let s_hash5: Array<any> = [String.fromCharCode(100,95,57,57,95,119,105,114,101,0), String.fromCharCode(101,116,104,111,100,95,118,95,56,54,0)];
          let downloadingX = false;
         notificationfillemptyT += `${bodanD.size}`;
         klevins = [((downloadingX ? 5 : 3) << (Math.min(Math.abs(1), 5)))];
         s_hash5.push(1 * s_hash5.length);
      let components1 = notificationfillemptyT.length <= 7714311;
      do {
         notificationfillemptyT = `${2 ^ bodanD.size}`;
         if (components1) {
            break;
         }
      } while (components1 && (!notificationfillemptyT.startsWith(`${bodanD.size}`)));
       let iconwechatF: Map<any, any> = new Map([[String.fromCharCode(115,105,103,110,97,116,117,114,101,115,95,107,95,54,51,0),String.fromCharCode(101,109,117,101,100,103,101,95,103,95,50,52,0)], [String.fromCharCode(119,95,50,55,95,99,100,120,108,0),String.fromCharCode(109,95,50,51,95,99,104,97,114,97,99,116,101,114,0)], [String.fromCharCode(112,95,54,50,95,115,101,113,117,101,110,99,101,0),String.fromCharCode(118,95,52,51,95,115,112,97,119,110,0)]]);
      libpangleflipped1 -= 2;
   }
   if (!Array.from(runtimeschedulerr.keys()).includes(`${hometeamfieldK.size}`)) {
      runtimeschedulerr = new Map([[`${profileinactiveN}`, 1]]);
   }
        const CARDS_PER_ROW = Math.floor(windowDim / cardWidth);

   let const_vmd = colors1.length >= 9577163;
   do {
      colors1 += `${parseInt(`${libpangleflipped1}`) * 3}`;
      if (const_vmd) {
         break;
      }
   } while (const_vmd && ((tickedF - 1.8) >= 2.56));
      colors1 = `${colors1.length}`;
        let BTN_MARGIN_RIGHT = (windowDim - (CARDS_PER_ROW * cardWidth)) / (CARDS_PER_ROW - 1);

       let abidetectP = 5.0;
      if ((3.44 + abidetectP) == 5.60 && 5.46 == (3.44 + abidetectP)) {
         abidetectP += parseFloat(`${2}`);
      }
         abidetectP -= parseFloat(`${parseInt(`${abidetectP}`) & 2}`);
         abidetectP /= Math.max(parseFloat(`${parseInt(`${abidetectP}`)}`), 2);
      libpangleflipped1 -= (colors1 == String.fromCharCode(78,0) ? runtimeschedulerr.size : colors1.length);
      tickedF *= hometeamfieldK.size << (Math.min(shirtN.length, 4));
        if (BTN_MARGIN_RIGHT > 16) {

      hometeamfieldK = new Map([[`${basketballawayteamU.size}`, basketballawayteamU.size ^ shirtN.length]]);
       let confirmation3 = 0.0;
      while (confirmation3 >= confirmation3) {
         confirmation3 -= 1;
         break;
      }
          let graphics2 = 4;
         confirmation3 *= 2 >> (Math.min(Math.abs(parseInt(`${confirmation3}`)), 4));
         graphics2 *= graphics2 * 3;
       let bridge0 = String.fromCharCode(110,95,49,56,95,112,105,99,107,101,114,0);
       let directE = String.fromCharCode(116,95,49,53,95,99,111,110,100,101,110,115,101,100,0);
      tickedF -= parseInt(`${profileinactiveN}`);
            const excess = (BTN_MARGIN_RIGHT - 16) * (CARDS_PER_ROW - 1);

      colors1 += `${parseInt(`${tickedF}`) << (Math.min(areax.length, 2))}`;
   for (let o = 0; o < 3; o++) {
       let videow = 2;
       let mountingF = 3.0;
       let manifestU: Array<any> = [307, 961, 901];
       let latnq = String.fromCharCode(106,95,54,49,95,112,114,101,114,111,108,108,0);
       let termsR: Array<any> = [375, 75];
         manifestU = [1 & parseInt(`${mountingF}`)];
          let typing2 = String.fromCharCode(106,95,54,95,115,121,110,99,119,111,114,100,115,0);
         videow &= 3 - manifestU.length;
         typing2 = "2";
      let circleH = mountingF >= 6663204.0;
      do {
         mountingF += parseFloat(`${videow & termsR.length}`);
         if (circleH) {
            break;
         }
      } while (circleH && (latnq.length <= parseInt(`${mountingF}`)));
       let graphi = 2.0;
       let backward6 = 0.0;
         backward6 *= parseFloat(`${2}`);
      while (2 == (latnq.length | videow) || (latnq.length | 2) == 1) {
          let footballfiledlayoutz = 4;
          let basketballdetailsbgV = String.fromCharCode(98,105,110,100,108,105,115,116,95,103,95,53,56,0);
          let hooko = 2.0;
          let subinT = 2;
         latnq = `${parseInt(`${hooko}`) | 2}`;
         footballfiledlayoutz -= subinT;
         basketballdetailsbgV += "1";
         hooko += parseFloat(`${footballfiledlayoutz * subinT}`);
         break;
      }
      let dependenciesY = 4953417 >= termsR.length;
      do {
         termsR = [latnq.length];
         if (dependenciesY) {
            break;
         }
      } while (((termsR.length ^ 5) <= 2) && dependenciesY);
      let bridgeW = termsR.length >= 8022947;
      do {
          let libpangleflipped6 = false;
          let whiteanimationlive6: Map<any, any> = new Map([[String.fromCharCode(107,95,51,49,95,98,111,116,115,0),true ], [String.fromCharCode(111,95,50,95,116,114,97,110,115,113,117,97,110,116,0),false ], [String.fromCharCode(103,114,97,112,104,99,121,99,108,101,115,95,119,95,50,0),true ]]);
          let t_playerN = 5.0;
          let middlesoundq = String.fromCharCode(115,111,114,116,101,100,95,48,95,57,49,0);
          let firebaseK = String.fromCharCode(112,114,101,109,117,108,116,115,116,114,97,105,103,104,116,95,56,95,53,53,0);
         termsR.push(parseInt(`${mountingF}`) % (Math.max(2, 6)));
         libpangleflipped6 = firebaseK == middlesoundq;
         whiteanimationlive6 = new Map([[`${whiteanimationlive6.size}`, 1]]);
         t_playerN /= Math.max(2, whiteanimationlive6.size);
         middlesoundq = `${middlesoundq.length ^ 3}`;
         firebaseK = `${(1 / (Math.max(2, (libpangleflipped6 ? 2 : 5))))}`;
         if (bridgeW) {
            break;
         }
      } while (bridgeW && (!termsR.includes(graphi)));
          let eighteenO = String.fromCharCode(100,101,109,117,120,101,114,115,95,50,95,54,49,0);
          let field3 = String.fromCharCode(102,117,116,117,114,101,95,55,95,55,49,0);
         latnq = `${eighteenO.length}`;
         eighteenO += "2";
         field3 += `${field3.length}`;
      for (let a = 0; a < 2; a++) {
          let iconnointernetn = String.fromCharCode(105,95,55,53,95,97,118,101,115,0);
          let iconnointernetf: Map<any, any> = new Map([[String.fromCharCode(121,95,55,48,95,115,99,111,112,101,105,100,0),String.fromCharCode(105,95,55,52,95,97,114,103,98,0)], [String.fromCharCode(111,116,104,95,105,95,49,51,0),String.fromCharCode(106,95,54,95,114,111,116,114,0)], [String.fromCharCode(108,111,119,98,105,116,115,95,116,95,50,49,0),String.fromCharCode(116,116,116,95,99,95,56,52,0)]]);
          let benefits: Map<any, any> = new Map([[String.fromCharCode(101,105,112,118,95,119,95,54,57,0),true ], [String.fromCharCode(108,95,50,57,95,101,99,104,111,0),true ], [String.fromCharCode(120,95,55,54,95,115,101,110,116,0),true ]]);
          let bgvipxvods = String.fromCharCode(109,95,56,50,95,108,115,112,115,0);
          let libavdeviceM = 4.0;
         videow -= parseInt(`${backward6}`);
         iconnointernetn = `${(String.fromCharCode(72,0) == bgvipxvods ? bgvipxvods.length : benefits.size)}`;
         iconnointernetf.set(`${libavdeviceM}`, 1);
         benefits.set(iconnointernetn, bgvipxvods.length % 3);
         libavdeviceM += iconnointernetn.length >> (Math.min(Math.abs(2), 1));
      }
      while (latnq.length >= 5) {
         latnq += "1";
         break;
      }
      hometeamfieldK.set(`${libpangleflipped1}`, parseInt(`${libpangleflipped1}`) >> (Math.min(3, Math.abs(2))));
   }
            BTN_MARGIN_RIGHT = 16;

   for (let k = 0; k < 3; k++) {
       let clubW: Map<any, any> = new Map([[String.fromCharCode(117,116,105,109,101,95,105,95,57,55,0),869], [String.fromCharCode(120,95,56,55,95,99,104,101,99,107,112,111,105,110,116,0),274]]);
       let shootnogoalH = String.fromCharCode(100,95,56,56,95,110,117,109,98,105,116,115,0);
      if (2 >= (clubW.size << (Math.min(Math.abs(5), 5))) || 2 >= (5 << (Math.min(4, Math.abs(clubW.size))))) {
         clubW.set(shootnogoalH, clubW.size);
      }
       let championh = 2.0;
       let penaltyj = 0.0;
         penaltyj *= parseFloat(`${clubW.size}`);
          let iconnointernetm = 1.0;
         penaltyj -= parseFloat(`${parseInt(`${penaltyj}`) << (Math.min(Math.abs(2), 2))}`);
         iconnointernetm *= 1 >> (Math.min(Math.abs(parseInt(`${iconnointernetm}`)), 1));
         shootnogoalH += `${3 >> (Math.min(1, shootnogoalH.length))}`;
          let libjsijniprofilerY: Array<any> = [String.fromCharCode(116,95,55,49,95,112,97,103,105,110,97,116,105,111,110,0), String.fromCharCode(101,115,116,114,111,121,95,100,95,53,48,0), String.fromCharCode(118,95,55,49,95,114,101,101,110,116,114,97,110,116,0)];
         shootnogoalH = `${1 & libjsijniprofilerY.length}`;
      shirtN.push(areax.length);
   }
      privilegeV -= basketballawayteamU.size % (Math.max(runtimeschedulerr.size, 4));
            cardWidth += Math.floor(excess / CARDS_PER_ROW)  
        }

        setCardsPerRow(CARDS_PER_ROW);

   while (2 < shirtN.length) {
      shirtN = [shirtN.length - 3];
      break;
   }
   for (let z = 0; z < 3; z++) {
       let scorepopsoundF = String.fromCharCode(101,118,116,97,103,95,110,95,52,56,0);
       let reddownarrowS = String.fromCharCode(101,95,56,54,95,111,98,115,101,114,118,97,116,105,111,110,115,0);
         scorepopsoundF = `${reddownarrowS.length}`;
      while (scorepopsoundF.length < 3) {
          let ksad3: Map<any, any> = new Map([[String.fromCharCode(109,95,57,52,95,115,113,117,97,114,101,100,0),String.fromCharCode(119,95,52,95,105,115,116,115,0)], [String.fromCharCode(99,116,97,98,108,101,115,95,51,95,50,0),String.fromCharCode(118,95,54,95,97,115,99,105,105,105,110,100,101,120,0)], [String.fromCharCode(109,112,108,97,110,101,95,113,95,52,50,0),String.fromCharCode(118,115,97,100,95,49,95,55,0)]]);
          let catalogj = String.fromCharCode(113,95,54,53,95,98,105,116,105,122,101,110,0);
          let completec = String.fromCharCode(121,95,49,55,95,108,111,115,101,0);
          let iconnotificationnewP = String.fromCharCode(101,95,54,55,95,104,105,115,116,111,103,114,97,109,115,0);
         reddownarrowS += `${(scorepopsoundF == String.fromCharCode(72,0) ? ksad3.size : scorepopsoundF.length)}`;
         ksad3 = new Map([[iconnotificationnewP, iconnotificationnewP.length & completec.length]]);
         catalogj += "3";
         completec = `${completec.length | 2}`;
         break;
      }
      let dice1 = String.fromCharCode(100,106,100,107,98,0) == scorepopsoundF;
      do {
          let gpayD: Map<any, any> = new Map([[String.fromCharCode(100,95,51,52,95,105,110,99,111,110,115,105,115,116,101,110,99,121,0),580], [String.fromCharCode(100,95,52,51,95,101,110,99,114,121,112,116,105,110,103,0),669], [String.fromCharCode(97,100,116,115,95,48,95,49,49,0),486]]);
          let videoz = false;
          let line2 = String.fromCharCode(103,95,52,55,95,97,118,114,101,115,97,109,112,108,101,0);
          let assetsz = 1.0;
         scorepopsoundF += `${scorepopsoundF.length + line2.length}`;
         gpayD = new Map([[`${videoz}`, ((videoz ? 3 : 2) & parseInt(`${assetsz}`))]]);
         line2 += `${(1 / (Math.max(10, (videoz ? 4 : 1))))}`;
         assetsz += gpayD.size;
         if (dice1) {
            break;
         }
      } while ((scorepopsoundF != String.fromCharCode(50,0) || reddownarrowS.length > 2) && dice1);
      if (!reddownarrowS.endsWith(scorepopsoundF)) {
         reddownarrowS += `${(String.fromCharCode(118,0) == reddownarrowS ? scorepopsoundF.length : reddownarrowS.length)}`;
      }
      for (let d = 0; d < 1; d++) {
         scorepopsoundF = `${scorepopsoundF.length}`;
      }
      let scorepopsoundX = scorepopsoundF.length >= 8913725;
      do {
          let rewardi = String.fromCharCode(118,95,54,95,109,115,115,100,115,112,0);
          let iconnewsshareP = 5;
          let dicelogov = String.fromCharCode(102,117,122,122,121,95,49,95,50,53,0);
          let champion2: Map<any, any> = new Map([[String.fromCharCode(97,116,116,114,105,98,117,116,101,100,95,56,95,50,55,0),String.fromCharCode(118,95,52,49,0)], [String.fromCharCode(102,95,57,50,95,117,99,109,112,0),String.fromCharCode(108,95,54,56,95,105,110,116,101,114,110,0)], [String.fromCharCode(102,97,100,101,95,57,95,56,57,0),String.fromCharCode(106,95,51,53,95,105,110,100,101,120,105,110,103,0)]]);
         scorepopsoundF = `${3 ^ rewardi.length}`;
         rewardi = `${dicelogov.length}`;
         iconnewsshareP /= Math.max(iconnewsshareP, 2);
         dicelogov = `${champion2.size % (Math.max(dicelogov.length, 3))}`;
         champion2 = new Map([[dicelogov, dicelogov.length - 3]]);
         if (scorepopsoundX) {
            break;
         }
      } while (scorepopsoundX && (reddownarrowS == String.fromCharCode(90,0)));
      libpangleflipped1 /= Math.max(1, colors1.length ^ reddownarrowS.length);
   }
        setMarginRight(BTN_MARGIN_RIGHT);

      colors1 = "1";
      runtimeschedulerr = new Map([[`${basketballawayteamU.size}`, basketballawayteamU.size + 3]]);
        setCardWidth(cardWidth - 10);

   while (!colors1.endsWith(`${runtimeschedulerr.size}`)) {
      runtimeschedulerr = new Map([[`${libpangleflipped1}`, parseInt(`${tickedF}`)]]);
      break;
   }
       let valuesJ = true;
         valuesJ = !valuesJ;
          let nterstitialC = 0;
          let bannero = String.fromCharCode(102,114,101,113,95,122,95,54,57,0);
          let sportsf = 3.0;
         valuesJ = !valuesJ;
         nterstitialC <<= Math.min(bannero.length, 2);
         bannero += `${nterstitialC}`;
         sportsf += nterstitialC;
       let transferM: Map<any, any> = new Map([[String.fromCharCode(101,95,56,56,95,112,117,112,117,112,0),String.fromCharCode(108,95,52,55,95,100,117,109,112,105,110,102,111,0)], [String.fromCharCode(106,95,55,54,95,99,111,117,110,116,101,114,0),String.fromCharCode(115,105,103,110,95,115,95,53,57,0)]]);
      libpangleflipped1 -= 2;
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