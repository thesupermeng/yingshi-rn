import React, { memo, useEffect, useState, useMemo } from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList, Image } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';

import { playVod } from '@redux/actions/wawa_indicator';
import { useAppDispatch } from '@hooks/wawa_root';
import VodCard from '../../components/vod/wawa_mimo_footballtrophy';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { wawaSellProfileinactive } from '@type/wawa_gradlew';
import { disableAdultMode, enableAdultMode } from '@redux/actions/wawa_related';
import DeviceInfo from 'react-native-device-info';


interface wawaAwayShow {
    vods: Array<wawaSellProfileinactive>,
    numOfRows?: number,
    outerRowPadding?: number,
    minNumPerRow?: number,
    heightToWidthRatio?: number,
    onPress?: ({ vodId }: { vodId: any }) => any,
    playerMode?: 'normal' | 'adult'
}

function VodListVertical({ vods, numOfRows = 2, outerRowPadding = 0, minNumPerRow = 3, heightToWidthRatio = 1.414, onPress, playerMode = 'normal' }: wawaAwayShow) {
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
       let dropdown3: Map<any, any> = new Map([[String.fromCharCode(104,95,53,52,95,99,111,110,115,116,97,110,116,0),757], [String.fromCharCode(116,95,56,55,95,103,114,97,121,114,103,98,0),35], [String.fromCharCode(97,95,56,57,95,115,117,98,102,105,101,108,100,115,0),172]]);
    let singaporeZ = false;
    let macau2 = true;
    let filledn = String.fromCharCode(115,107,105,112,105,110,116,114,97,95,108,95,52,0);
    let stepU = String.fromCharCode(111,95,55,51,95,103,109,104,100,0);
    let remindery: Map<any, any> = new Map([[String.fromCharCode(98,121,112,97,115,115,95,122,95,52,51,0),141], [String.fromCharCode(118,95,54,95,97,116,116,97,99,104,109,101,110,116,115,0),370], [String.fromCharCode(111,95,49,57,95,108,97,114,103,101,0),2]]);
    let anythinkd = String.fromCharCode(114,111,119,95,117,95,55,54,0);
    let rocketx = String.fromCharCode(115,108,105,100,101,115,104,111,119,95,118,95,56,54,0);
    let checkboxe = String.fromCharCode(114,99,111,110,95,101,95,53,0);
    let show2 = 0;
    let fullscreenminR = false;
   while (show2 <= 3) {
       let componentd = String.fromCharCode(111,117,116,103,111,105,110,103,95,50,95,49,51,0);
       let nativeex9 = 3;
      let philippines4 = nativeex9 <= 9717451;
      do {
         nativeex9 += nativeex9 >> (Math.min(componentd.length, 3));
         if (philippines4) {
            break;
         }
      } while (philippines4 && (5 == (nativeex9 >> (Math.min(Math.abs(1), 3)))));
      while (3 > (3 << (Math.min(1, Math.abs(nativeex9)))) || 3 > (nativeex9 << (Math.min(componentd.length, 1)))) {
         componentd = `${componentd.length}`;
         break;
      }
         componentd += `${nativeex9 + 2}`;
         nativeex9 >>= Math.min(4, Math.abs(3 << (Math.min(2, componentd.length))));
         componentd += "1 + nativeex9";
      while (!componentd.startsWith(`${nativeex9}`)) {
          let calendara: Map<any, any> = new Map([[String.fromCharCode(117,110,115,117,112,112,111,114,116,101,100,95,54,95,56,48,0),750], [String.fromCharCode(97,95,52,54,95,104,119,99,111,110,116,101,120,116,0),451], [String.fromCharCode(97,112,112,114,111,120,105,109,97,116,105,111,110,95,49,95,53,52,0),313]]);
         nativeex9 ^= calendara.size << (Math.min(Math.abs(2), 2));
         break;
      }
      remindery = new Map([[rocketx, componentd.length * rocketx.length]]);
      break;
   }
      macau2 = filledn.length < checkboxe.length;
   for (let m = 0; m < 2; m++) {
       let mountingR = 2.0;
       let rootE = String.fromCharCode(103,114,97,118,105,116,121,95,121,95,56,52,0);
       let nodel = String.fromCharCode(112,114,105,109,101,95,120,95,52,53,0);
       let infoN = 4;
       let rightT: Map<any, any> = new Map([[String.fromCharCode(118,95,51,49,95,109,103,109,116,0),777], [String.fromCharCode(112,97,105,110,116,95,50,95,54,49,0),401]]);
      for (let h = 0; h < 3; h++) {
          let larged = String.fromCharCode(101,95,56,55,95,115,119,105,102,116,0);
          let volumeP: Map<any, any> = new Map([[String.fromCharCode(117,114,108,115,95,111,95,51,56,0),316], [String.fromCharCode(101,113,117,105,108,105,98,114,105,117,109,95,48,95,53,48,0),424], [String.fromCharCode(115,113,117,97,114,101,100,95,97,95,51,50,0),920]]);
          let libavfilterH = 4;
         rootE = `${1 - libavfilterH}`;
         larged = `${volumeP.size + 2}`;
         volumeP = new Map([[`${volumeP.size}`, 1]]);
         libavfilterH |= larged.length;
      }
         rootE += `${rootE.length % 1}`;
      if (rootE.endsWith(`${infoN}`)) {
         infoN %= Math.max(1, rootE.length);
      }
      while (2 <= (nodel.length - parseInt(`${mountingR}`))) {
         nodel += "1";
         break;
      }
          let canceln = true;
         rootE += `${((canceln ? 5 : 1) / (Math.max(4, rootE.length)))}`;
      let bannerw = nodel.length >= 9628350;
      do {
         nodel += `${rootE.length - 3}`;
         if (bannerw) {
            break;
         }
      } while (bannerw && (nodel.includes(`${infoN}`)));
          let subinM: Array<any> = [795, 561, 388];
          let kuaishouf = String.fromCharCode(112,95,56,53,95,108,105,112,98,111,97,114,100,0);
          let basketballicon3: Array<any> = [String.fromCharCode(98,95,55,56,95,115,121,115,105,110,102,111,0), String.fromCharCode(114,109,115,116,114,101,97,109,95,120,95,53,51,0)];
         nodel += `${parseInt(`${mountingR}`)}`;
         subinM = [subinM.length / 1];
         kuaishouf += `${kuaishouf.length & 3}`;
         basketballicon3.push(basketballicon3.length);
          let componentsx = String.fromCharCode(122,95,55,54,95,114,101,116,97,105,110,101,100,0);
          let settings_ = 1.0;
         rightT.set(`${settings_}`, parseInt(`${settings_}`) / 3);
         componentsx = `${componentsx.length}`;
          let matchdetailbgx = true;
         rightT = new Map([[rootE, 1]]);
         matchdetailbgx = matchdetailbgx && !matchdetailbgx;
      if (4 == rootE.length) {
         rootE += `${rootE.length}`;
      }
         nodel += `${rootE.length}`;
         rightT.set(`${infoN}`, 3);
      while ((mountingR - 5.93) == 5.95 && 2.35 == (5.93 - mountingR)) {
          let handlerr = 4.0;
         infoN += infoN;
         handlerr += parseInt(`${handlerr}`) & 3;
         break;
      }
         rootE += `${nodel.length}`;
         infoN -= rightT.size;
      checkboxe = "1";
   }

        const PADDING = 8;

      singaporeZ = 41 < anythinkd.length && remindery.size < 41;
   for (let i = 0; i < 3; i++) {
      singaporeZ = checkboxe == rocketx;
   }
      singaporeZ = (((!singaporeZ ? 38 : checkboxe.length) * checkboxe.length) == 38);
        const windowDim = width - insets.left - insets.right - outerRowPadding - (2.1 * spacing.sideOffset); 

   while (!singaporeZ) {
      singaporeZ = 98 <= stepU.length;
      break;
   }
   if (stepU.startsWith(`${dropdown3.size}`)) {
      stepU += `${rocketx.length | show2}`;
   }
       let filedW: Map<any, any> = new Map([[String.fromCharCode(105,110,99,114,109,101,114,103,101,95,122,95,51,49,0),871], [String.fromCharCode(99,111,111,107,105,101,115,95,121,95,49,52,0),881], [String.fromCharCode(101,112,104,101,109,101,114,97,108,95,52,95,52,53,0),35]]);
       let predictiondefaultp = 2;
      while (filedW.get(`${predictiondefaultp}`) != null) {
         filedW.set(`${predictiondefaultp}`, predictiondefaultp);
         break;
      }
         filedW = new Map([[`${filedW.size}`, 1 & filedW.size]]);
         filedW.set(`${predictiondefaultp}`, predictiondefaultp << (Math.min(Math.abs(filedW.size), 1)));
      while (predictiondefaultp > filedW.size) {
         filedW = new Map([[`${filedW.size}`, predictiondefaultp]]);
         break;
      }
      let inouttargetyellowv = filedW.size >= 9626024;
      do {
         filedW = new Map([[`${filedW.size}`, 2]]);
         if (inouttargetyellowv) {
            break;
         }
      } while (inouttargetyellowv && ((filedW.size + 4) >= 2 && 4 >= (filedW.size + 4)));
         filedW = new Map([[`${filedW.size}`, predictiondefaultp]]);
      stepU = `${3 & predictiondefaultp}`;
        const maxWidth = (windowDim / minNumPerRow) - PADDING;

   let leftj = 8202408 <= stepU.length;
   do {
      stepU = `${checkboxe.length}`;
      if (leftj) {
         break;
      }
   } while (leftj && (1 == (stepU.length << (Math.min(Math.abs(3), 1)))));
       let eyecloseJ = 3;
      let mappingg = eyecloseJ <= 8344571;
      do {
         eyecloseJ *= eyecloseJ * 1;
         if (mappingg) {
            break;
         }
      } while ((5 == (eyecloseJ % 3)) && mappingg);
         eyecloseJ /= Math.max(eyecloseJ, 5);
      let umengU = 9738600 <= eyecloseJ;
      do {
         eyecloseJ -= eyecloseJ >> (Math.min(Math.abs(2), 1));
         if (umengU) {
            break;
         }
      } while (((eyecloseJ | 5) > 3) && umengU);
      show2 *= anythinkd.length;
      singaporeZ = String.fromCharCode(55,0) == anythinkd;
        let cardWidth = Math.min(160, Math.floor(maxWidth));

       let manifestg = String.fromCharCode(110,95,49,48,48,95,109,111,115,116,0);
       let baselineu = 1.0;
         baselineu -= (parseFloat(`${manifestg == String.fromCharCode(86,0) ? manifestg.length : parseInt(`${baselineu}`)}`));
      if ((5.63 - baselineu) <= 4.99 || 5.63 <= (parseFloat(`${manifestg.length}`) - baselineu)) {
          let scrollviewT: Map<any, any> = new Map([[String.fromCharCode(115,97,118,101,109,101,100,105,97,95,101,95,57,54,0),408], [String.fromCharCode(104,101,118,99,112,114,101,100,95,116,95,56,50,0),92]]);
         baselineu += parseFloat(`${scrollviewT.size + 3}`);
      }
         manifestg += `${manifestg.length}`;
         manifestg += `${(String.fromCharCode(110,0) == manifestg ? parseInt(`${baselineu}`) : manifestg.length)}`;
          let hooksb = 2.0;
         baselineu -= (parseFloat(`${manifestg == String.fromCharCode(103,0) ? parseInt(`${hooksb}`) : manifestg.length}`));
      while ((1 % (Math.max(2, manifestg.length))) <= 2 && (manifestg.length * 1) <= 3) {
         manifestg = `${parseInt(`${baselineu}`)}`;
         break;
      }
      anythinkd = `${checkboxe.length / 2}`;
   while (3 < (show2 << (Math.min(Math.abs(3), 5)))) {
       let darkk = String.fromCharCode(119,105,100,101,115,99,114,101,101,110,95,99,95,55,52,0);
      if (darkk.length > 1) {
         darkk += `${darkk.length}`;
      }
         darkk = `${darkk.length - 2}`;
          let livew = 4.0;
          let privatechatbgw: Array<any> = [String.fromCharCode(103,97,117,103,101,95,50,95,49,0), String.fromCharCode(114,95,50,56,95,114,101,97,100,120,98,108,111,99,107,0), String.fromCharCode(115,101,103,109,101,110,116,117,114,108,110,111,100,101,95,99,95,54,0)];
          let leagueD = String.fromCharCode(101,114,114,111,114,118,95,99,95,55,51,0);
         darkk += `${(leagueD == String.fromCharCode(85,0) ? leagueD.length : darkk.length)}`;
         livew -= parseInt(`${livew}`);
         privatechatbgw = [1];
      fullscreenminR = remindery.size > 18 && darkk == String.fromCharCode(120,0);
      break;
   }
   while (!checkboxe.includes(`${singaporeZ}`)) {
       let xvodO = String.fromCharCode(105,115,97,99,95,97,95,50,49,0);
       let basketballmatchdetailbgl: Map<any, any> = new Map([[String.fromCharCode(102,95,50,57,95,102,108,97,116,116,101,110,0),375], [String.fromCharCode(115,101,116,114,97,110,103,101,95,100,95,57,54,0),851]]);
       let libjsii: Map<any, any> = new Map([[String.fromCharCode(121,95,56,48,95,99,116,97,98,108,101,115,0),508], [String.fromCharCode(99,95,49,55,95,104,105,103,104,98,105,116,115,0),223], [String.fromCharCode(112,97,114,97,109,101,116,101,114,115,95,108,95,49,50,0),117]]);
       let regengy = 1.0;
      for (let h = 0; h < 3; h++) {
         xvodO = `${(String.fromCharCode(85,0) == xvodO ? xvodO.length : libjsii.size)}`;
      }
         basketballmatchdetailbgl.set(xvodO, xvodO.length);
         libjsii.set(`${xvodO}`, libjsii.size * xvodO.length);
          let iconbackwhitef = String.fromCharCode(100,95,53,56,95,116,104,114,111,116,116,108,101,100,0);
          let dropdownh = String.fromCharCode(111,112,112,111,115,105,116,101,95,101,95,55,53,0);
          let iconclosewhite1 = 4.0;
         libjsii = new Map([[`${basketballmatchdetailbgl.size}`, (String.fromCharCode(54,0) == iconbackwhitef ? basketballmatchdetailbgl.size : iconbackwhitef.length)]]);
         dropdownh = `${2 + dropdownh.length}`;
         iconclosewhite1 += (parseFloat(`${dropdownh == String.fromCharCode(66,0) ? dropdownh.length : parseInt(`${iconclosewhite1}`)}`));
      if (3 == (1 ^ xvodO.length) && 5 == (xvodO.length ^ 1)) {
         xvodO += `${xvodO.length}`;
      }
       let libjsinspectorT = 4.0;
       let defaultfootballbgx = 2.0;
      while (Array.from(libjsii.values()).includes(libjsinspectorT)) {
          let iconarrowrightblackS = 3;
          let bannerX = 2.0;
          let main_dw = String.fromCharCode(109,95,51,56,95,108,115,112,102,108,112,99,0);
          let homek = String.fromCharCode(103,95,53,55,95,116,97,100,100,0);
         libjsinspectorT /= Math.max(3, libjsii.size * 3);
         iconarrowrightblackS %= Math.max(parseInt(`${bannerX}`) - iconarrowrightblackS, 3);
         bannerX += 1 - iconarrowrightblackS;
         main_dw = `${iconarrowrightblackS}`;
         homek += `${(String.fromCharCode(49,0) == main_dw ? iconarrowrightblackS : main_dw.length)}`;
         break;
      }
      if (2.18 == defaultfootballbgx) {
         regengy *= libjsii.size + basketballmatchdetailbgl.size;
      }
         basketballmatchdetailbgl.set(`${regengy}`, parseInt(`${defaultfootballbgx}`) - 1);
          let philippinesa: Array<any> = [763, 856, 454];
         regengy /= Math.max(1, 1);
         philippinesa.push(philippinesa.length ^ philippinesa.length);
         xvodO = "1";
         defaultfootballbgx /= Math.max(parseInt(`${regengy}`), 5);
      singaporeZ = remindery.size <= 94 && stepU.length <= 94;
      break;
   }
        const includesKeywords = ['flip', 'fold', 'mate x3', 'mate xs'].some(keyword => deviceName.includes(keyword));

   for (let j = 0; j < 3; j++) {
       let mbbidr = true;
       let tempnodatagif4 = true;
       let nativeexj = String.fromCharCode(114,112,99,95,101,95,54,54,0);
       let blackT = 2.0;
      while (nativeexj.length > blackT) {
          let downloadedc: Map<any, any> = new Map([[String.fromCharCode(109,95,53,52,95,100,111,108,98,121,0),975], [String.fromCharCode(113,95,56,50,95,104,108,115,112,108,97,121,108,105,115,116,0),977], [String.fromCharCode(112,105,99,116,117,114,101,115,95,56,95,56,49,0),871]]);
          let schedulerL = 4.0;
         blackT /= Math.max(1, ((tempnodatagif4 ? 4 : 4) / (Math.max(parseInt(`${blackT}`), 5))));
         downloadedc.set(`${schedulerL}`, parseInt(`${schedulerL}`));
         break;
      }
      let completes = 5057238.0 >= blackT;
      do {
         blackT /= Math.max(3 * nativeexj.length, 2);
         if (completes) {
            break;
         }
      } while (completes && (nativeexj.length <= 1));
          let libavformatT = 2.0;
          let iconclosewhitebgw = String.fromCharCode(101,110,116,114,121,95,56,95,52,49,0);
          let temperaturem = String.fromCharCode(98,95,52,48,95,105,110,116,101,114,109,101,100,105,97,116,101,0);
         tempnodatagif4 = temperaturem.length == parseInt(`${libavformatT}`);
         libavformatT /= Math.max(4, iconclosewhitebgw.length % 1);
         iconclosewhitebgw += `${2 >> (Math.min(4, iconclosewhitebgw.length))}`;
      while (mbbidr) {
         mbbidr = 60.22 < blackT;
         break;
      }
      if (nativeexj.includes(`${tempnodatagif4}`)) {
         nativeexj = `${((mbbidr ? 1 : 1) & 2)}`;
      }
      for (let b = 0; b < 3; b++) {
         nativeexj += `${((mbbidr ? 3 : 2) & (tempnodatagif4 ? 4 : 1))}`;
      }
      if (nativeexj.length < parseInt(`${blackT}`)) {
          let gradleJ = 3;
          let checkboxU = 2.0;
          let imagemanager7 = String.fromCharCode(118,95,57,56,95,114,99,111,110,0);
          let default_ugi = 0.0;
         blackT += gradleJ;
         gradleJ &= parseInt(`${checkboxU}`);
         checkboxU -= imagemanager7.length & parseInt(`${checkboxU}`);
         imagemanager7 += `${imagemanager7.length}`;
         default_ugi *= parseFloat(`${3 * imagemanager7.length}`);
      }
      for (let j = 0; j < 3; j++) {
         mbbidr = nativeexj.length < 48 && mbbidr;
      }
      let sans2 = String.fromCharCode(102,51,99,111,51,50,109,0) == nativeexj;
      do {
         nativeexj = `${(1 + (tempnodatagif4 ? 4 : 4))}`;
         if (sans2) {
            break;
         }
      } while (sans2 && (1.30 > (nativeexj.length - blackT) && 1.30 > (blackT - nativeexj.length)));
      while (!nativeexj.endsWith(`${tempnodatagif4}`)) {
         tempnodatagif4 = (!mbbidr ? !tempnodatagif4 : mbbidr);
         break;
      }
      let predictionbannersharedi = tempnodatagif4 ? !tempnodatagif4 : tempnodatagif4;
      do {
          let nativeex2 = true;
          let fullscreenmaxs: Array<any> = [16, 813];
          let paginationw = String.fromCharCode(105,110,116,101,114,97,99,116,105,111,110,115,95,121,95,56,0);
          let gifgoalbgj = String.fromCharCode(119,95,49,52,95,112,97,99,107,0);
         tempnodatagif4 = !paginationw.includes(`${tempnodatagif4}`);
         nativeex2 = String.fromCharCode(86,0) == gifgoalbgj;
         fullscreenmaxs = [((nativeex2 ? 5 : 3) / (Math.max(9, gifgoalbgj.length)))];
         paginationw = `${fullscreenmaxs.length * 1}`;
         if (predictionbannersharedi) {
            break;
         }
      } while (predictionbannersharedi && (mbbidr));
         nativeexj = `${nativeexj.length / 2}`;
      rocketx = `${show2}`;
   }
   if (4 == (dropdown3.size % 3)) {
      dropdown3 = new Map([[`${macau2}`, 3]]);
   }
       let iconpipexpand8 = 2.0;
       let indicator9 = true;
       let teamt = false;
          let anner3 = String.fromCharCode(97,95,55,54,95,115,101,103,109,101,110,116,101,100,0);
         iconpipexpand8 += (parseFloat(`${(indicator9 ? 5 : 2)}`));
         anner3 += `${anner3.length}`;
      let hiadz = iconpipexpand8 <= 8528524.0;
      do {
          let native8 = String.fromCharCode(118,95,52,57,95,116,114,116,97,98,108,101,0);
          let codegeno: Array<any> = [624, 302, 617];
          let defaultfootballbgw = String.fromCharCode(113,95,54,53,95,109,97,114,107,100,111,119,110,0);
          let suggestionN = String.fromCharCode(100,95,54,53,95,102,114,97,112,115,0);
          let overlayh: Array<any> = [838, 679, 226];
         iconpipexpand8 *= parseFloat(`${codegeno.length}`);
         native8 = `${1 - suggestionN.length}`;
         codegeno = [(String.fromCharCode(67,0) == defaultfootballbgw ? defaultfootballbgw.length : suggestionN.length)];
         overlayh = [defaultfootballbgw.length | suggestionN.length];
         if (hiadz) {
            break;
         }
      } while ((!indicator9) && hiadz);
      macau2 = 22 >= show2;
        if(DeviceInfo.isTablet() || includesKeywords)
        {
            cardWidth = Math.min(145, Math.floor(maxWidth));

       let rulese: Array<any> = [51, 975];
       let countryw = String.fromCharCode(116,105,109,101,111,117,116,95,115,95,50,49,0);
         rulese = [rulese.length];
       let previewj = 0.0;
       let manifestr = 1.0;
          let countdown_ = true;
         rulese = [countryw.length >> (Math.min(5, rulese.length))];
         countdown_ = (countdown_ ? countdown_ : !countdown_);
       let uimanager8 = String.fromCharCode(107,95,55,48,95,111,112,116,105,111,110,97,108,0);
         previewj *= countryw.length;
         countryw += `${3 + uimanager8.length}`;
      macau2 = !singaporeZ;
      fullscreenminR = checkboxe == String.fromCharCode(70,0) || 99 == remindery.size;
      macau2 = rocketx.length == 30;
        }

        const cardHeight = heightToWidthRatio * cardWidth;

   while ((stepU.length - remindery.size) <= 4 || (4 - remindery.size) <= 3) {
      stepU = `${(filledn == String.fromCharCode(120,0) ? (fullscreenminR ? 1 : 4) : filledn.length)}`;
      break;
   }
       let networko = 5;
       let tempnodatagifY: Array<any> = [String.fromCharCode(101,110,99,111,100,101,109,98,95,117,95,53,57,0), String.fromCharCode(99,109,97,99,95,112,95,57,48,0), String.fromCharCode(112,114,111,103,114,97,109,109,97,116,105,99,97,108,108,121,95,111,95,54,48,0)];
       let streamings: Map<any, any> = new Map([[String.fromCharCode(108,111,99,107,95,105,95,50,50,0),String.fromCharCode(111,110,108,121,95,115,95,52,52,0)], [String.fromCharCode(121,95,57,54,95,102,111,114,109,97,116,0),String.fromCharCode(101,109,117,108,97,116,101,100,95,115,95,56,48,0)], [String.fromCharCode(116,95,56,95,100,101,108,97,0),String.fromCharCode(110,95,49,55,95,97,116,116,101,109,112,116,0)]]);
       let minimizey: Map<any, any> = new Map([[String.fromCharCode(116,95,51,55,95,97,108,112,104,97,98,101,116,115,0),String.fromCharCode(111,103,103,108,101,95,50,95,50,53,0)], [String.fromCharCode(116,114,97,110,102,115,101,114,95,51,95,54,49,0),String.fromCharCode(122,95,57,50,95,109,111,118,101,99,98,0)], [String.fromCharCode(110,95,51,95,108,115,112,114,0),String.fromCharCode(109,95,54,51,0)]]);
         minimizey = new Map([[`${tempnodatagifY.length}`, tempnodatagifY.length]]);
         minimizey = new Map([[`${streamings.size}`, 3]]);
       let libfbjnit: Map<any, any> = new Map([[String.fromCharCode(110,112,112,115,99,97,108,101,95,105,95,52,52,0),false ], [String.fromCharCode(103,95,51,48,95,100,108,115,121,109,0),false ], [String.fromCharCode(113,95,51,52,95,105,100,101,110,116,105,102,105,101,114,0),false ]]);
         libfbjnit.set(`${networko}`, 1);
      let predictionlossQ = networko >= 8408404;
      do {
         networko *= 1 << (Math.min(5, tempnodatagifY.length));
         if (predictionlossQ) {
            break;
         }
      } while (((4 ^ networko) < 1) && predictionlossQ);
      dropdown3.set(`${macau2}`, ((macau2 ? 3 : 2) >> (Math.min(Math.abs(3), 4))));
      singaporeZ = (macau2 ? !fullscreenminR : !macau2);
        const CARDS_PER_ROW = Math.floor(windowDim / cardWidth);

   if (!singaporeZ) {
      show2 += 1;
   }
      anythinkd += `${remindery.size / (Math.max(filledn.length, 1))}`;
   for (let l = 0; l < 1; l++) {
      anythinkd = `${checkboxe.length}`;
   }
        let BTN_MARGIN_RIGHT = (windowDim - (CARDS_PER_ROW * cardWidth)) / (CARDS_PER_ROW - 1);

      macau2 = fullscreenminR;
   while (4 == filledn.length) {
      filledn = `${remindery.size}`;
      break;
   }
   if (stepU == String.fromCharCode(114,0)) {
      anythinkd = `${(filledn == String.fromCharCode(52,0) ? filledn.length : (macau2 ? 3 : 5))}`;
   }
        if (BTN_MARGIN_RIGHT > 16) {

   let penaltyshootnogoala = 8058619 >= filledn.length;
   do {
      filledn = `${rocketx.length}`;
      if (penaltyshootnogoala) {
         break;
      }
   } while (penaltyshootnogoala && (5 <= filledn.length));
      stepU += "3";
   if (filledn.startsWith(`${macau2}`)) {
       let castingI = 4.0;
         castingI /= Math.max(parseFloat(`${1}`), 2);
          let resends = 0.0;
          let default_05 = false;
          let temperatureg = String.fromCharCode(101,110,117,109,115,95,115,95,54,52,0);
         castingI += (parseFloat(`${parseInt(`${resends}`) >> (Math.min(2, Math.abs((default_05 ? 3 : 5))))}`));
         resends /= Math.max((parseFloat(`${String.fromCharCode(74,0) == temperatureg ? temperatureg.length : temperatureg.length}`)), 5);
         default_05 = temperatureg.length >= 69;
      while (4.100 == castingI) {
         castingI *= parseFloat(`${2 & parseInt(`${castingI}`)}`);
         break;
      }
      filledn += `${remindery.size % (Math.max(checkboxe.length, 10))}`;
   }
            const excess = (BTN_MARGIN_RIGHT - 16) * (CARDS_PER_ROW - 1);

      singaporeZ = 10 == stepU.length;
   for (let t = 0; t < 2; t++) {
      fullscreenminR = (dropdown3.size / (Math.max(rocketx.length, 7))) < 33;
   }
   for (let i = 0; i < 2; i++) {
      filledn += `${stepU.length | show2}`;
   }
            BTN_MARGIN_RIGHT = 16;

       let debugX = true;
         debugX = (!debugX ? debugX : debugX);
         debugX = (debugX ? !debugX : debugX);
         debugX = !debugX || debugX;
      filledn = `${((singaporeZ ? 1 : 1) % (Math.max(checkboxe.length, 10)))}`;
   for (let b = 0; b < 2; b++) {
      checkboxe = `${stepU.length * remindery.size}`;
   }
   if (!stepU.includes(filledn)) {
       let fieldC: Map<any, any> = new Map([[String.fromCharCode(110,95,49,49,95,114,101,115,112,111,110,115,97,98,108,101,0),true ], [String.fromCharCode(100,95,51,56,95,100,109,105,120,0),true ]]);
       let macauo = String.fromCharCode(101,95,51,51,95,112,114,111,98,101,114,0);
       let basketballF = 1.0;
         fieldC.set(`${macauo}`, (macauo == String.fromCharCode(122,0) ? fieldC.size : macauo.length));
      while (fieldC.size >= macauo.length) {
         macauo += "1";
         break;
      }
      let gmail5 = String.fromCharCode(120,57,102,0) == macauo;
      do {
         macauo += `${parseInt(`${basketballF}`)}`;
         if (gmail5) {
            break;
         }
      } while (gmail5 && (!macauo.includes(`${fieldC.size}`)));
         fieldC = new Map([[`${fieldC.size}`, fieldC.size]]);
          let circleM = 4.0;
          let moviest = String.fromCharCode(112,95,54,55,95,108,111,103,0);
         macauo += `${fieldC.size}`;
         circleM -= moviest.length;
         moviest = `${parseInt(`${circleM}`)}`;
         fieldC = new Map([[`${fieldC.size}`, (String.fromCharCode(65,0) == macauo ? macauo.length : fieldC.size)]]);
         macauo += "1";
      let libfbJ = 5868491 >= macauo.length;
      do {
         macauo += `${parseInt(`${basketballF}`)}`;
         if (libfbJ) {
            break;
         }
      } while ((macauo.endsWith(`${fieldC.size}`)) && libfbJ);
      let notificationI = 5432749 <= macauo.length;
      do {
         macauo += `${2 - fieldC.size}`;
         if (notificationI) {
            break;
         }
      } while ((3 < (4 | macauo.length) || 5.56 < (basketballF + macauo.length)) && notificationI);
      filledn = "3";
   }
            cardWidth += Math.floor(excess / CARDS_PER_ROW)
        }

        setCardsPerRow(CARDS_PER_ROW);

   while (filledn.length <= 4) {
      fullscreenminR = 94 > remindery.size;
      break;
   }
   while (2 == (remindery.size & 5)) {
      remindery.set(filledn, 1);
      break;
   }
      dropdown3.set(stepU, remindery.size & stepU.length);
        setMarginRight(BTN_MARGIN_RIGHT);

   while (2 >= checkboxe.length) {
      checkboxe += `${remindery.size}`;
      break;
   }
   let mappingK = fullscreenminR ? !fullscreenminR : fullscreenminR;
   do {
       let slider1 = true;
       let predictionbannern = true;
         predictionbannern = (!slider1 ? !predictionbannern : slider1);
         slider1 = predictionbannern;
      if (predictionbannern || slider1) {
         slider1 = (!slider1 ? !predictionbannern : slider1);
      }
         predictionbannern = predictionbannern || slider1;
         slider1 = predictionbannern;
         predictionbannern = (predictionbannern ? !slider1 : !predictionbannern);
      fullscreenminR = 7 < checkboxe.length;
      if (mappingK) {
         break;
      }
   } while (mappingK && ((dropdown3.size & 3) < 5));
      rocketx = `${remindery.size - anythinkd.length}`;
        setCardWidth(cardWidth);

   if (rocketx != filledn) {
       let questq = String.fromCharCode(102,99,112,117,98,108,105,115,104,95,100,95,56,49,0);
       let libruntimeexecutorL = String.fromCharCode(122,95,57,52,95,118,112,114,105,110,116,102,0);
          let castingo = String.fromCharCode(115,116,117,98,95,108,95,52,51,0);
         questq = `${questq.length >> (Math.min(1, castingo.length))}`;
      for (let k = 0; k < 2; k++) {
         questq += "3";
      }
      while (libruntimeexecutorL.length <= 2) {
         questq += `${questq.length / 1}`;
         break;
      }
      while (!libruntimeexecutorL.endsWith(questq)) {
          let loginsuccessu = 0.0;
          let liner = 5;
         libruntimeexecutorL = `${libruntimeexecutorL.length + parseInt(`${loginsuccessu}`)}`;
         loginsuccessu *= 1;
         liner ^= 3 * liner;
         break;
      }
      for (let d = 0; d < 3; d++) {
         questq += `${2 >> (Math.min(5, questq.length))}`;
      }
      for (let y = 0; y < 1; y++) {
         questq += `${questq.length}`;
      }
      filledn += "2";
   }
      dropdown3 = new Map([[`${macau2}`, show2]]);
   for (let r = 0; r < 3; r++) {
      remindery = new Map([[filledn, filledn.length % (Math.max(stepU.length, 6))]]);
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