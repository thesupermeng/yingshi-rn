import React, { memo, useEffect, useState, useMemo } from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList, Image } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';

import { playVod } from '@redux/actions/yys_player_style';
import { useAppDispatch } from '@hooks/yys_frame';
import VodCard from '../../components/vod/yys_singapore';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { yys_Bing } from '@type/yys_libzeus';
import { disableAdultMode, enableAdultMode } from '@redux/actions/yys_runtimescheduler';


interface yys_ConfigureUimanager {
    vods: Array<yys_Bing>,
    numOfRows?: number,
    outerRowPadding?: number,
    minNumPerRow?: number,
    heightToWidthRatio?: number,
    onPress?: () => any,
    playerMode?: 'normal' | 'adult'
}

function VodListVerticalVip({ vods, numOfRows = 2, outerRowPadding = 0, minNumPerRow = 3, heightToWidthRatio = 1.414, onPress, playerMode='normal' }: yys_ConfigureUimanager) {
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
       let fastforwarda = String.fromCharCode(104,97,110,100,108,101,100,95,50,95,56,51,0);
    let guide0 = 3.0;
    let baseT = String.fromCharCode(109,121,114,110,100,95,114,95,57,56,0);
    let default_wm = String.fromCharCode(108,95,53,95,106,115,105,109,100,0);
    let componentregistryK = String.fromCharCode(116,114,105,103,103,101,114,95,52,95,53,50,0);
    let circleM = String.fromCharCode(101,95,55,50,95,98,101,120,116,0);
    let resendL = String.fromCharCode(118,95,51,51,95,99,102,109,116,0);
    let showC = String.fromCharCode(102,115,121,110,99,95,108,95,52,51,0);
    let favoriteB = 2.0;
    let libhermesz: Array<any> = [386, 947, 610];
    let plashP = 3.0;
    let scheduleP = 4.0;
    let refreshD = String.fromCharCode(120,95,56,51,95,117,99,104,97,114,0);
      circleM += `${default_wm.length / (Math.max(3, 8))}`;
       let casts = String.fromCharCode(115,110,97,109,101,95,105,95,55,56,0);
       let areag: Array<any> = [781, 62];
         casts += `${areag.length << (Math.min(Math.abs(3), 5))}`;
      while ((areag.length - casts.length) < 4 && (casts.length - 4) < 2) {
          let frame_etO = String.fromCharCode(110,101,97,114,115,101,116,95,114,95,53,54,0);
          let countryy = 2.0;
         areag.push(2 << (Math.min(3, frame_etO.length)));
         frame_etO = `${parseInt(`${countryy}`)}`;
         break;
      }
      let indicatorV = casts == String.fromCharCode(103,53,95,119,0);
      do {
          let libhermesi = String.fromCharCode(99,109,111,118,95,110,95,57,52,0);
          let navigationC = String.fromCharCode(105,95,55,48,95,99,98,112,104,105,0);
         casts += `${(String.fromCharCode(102,0) == navigationC ? navigationC.length : libhermesi.length)}`;
         if (indicatorV) {
            break;
         }
      } while ((1 > (casts.length << (Math.min(Math.abs(5), 1))) && 5 > (casts.length << (Math.min(5, areag.length)))) && indicatorV);
      if (4 == (casts.length / (Math.max(4, areag.length)))) {
          let lightQ = String.fromCharCode(115,108,111,119,109,111,100,101,95,120,95,51,49,0);
         areag.push(casts.length);
         lightQ = `${lightQ.length}`;
      }
         casts += `${casts.length}`;
         areag.push(2);
      circleM = `${parseInt(`${guide0}`)}`;
   if (resendL.length < 4) {
       let mailW: Array<any> = [57, 144];
       let libtanU: Array<any> = [451, 19];
       let hoverr = String.fromCharCode(98,95,51,54,95,119,104,116,120,0);
       let searchbare = 3.0;
      for (let s = 0; s < 3; s++) {
         hoverr += `${hoverr.length}`;
      }
      while (mailW.includes(libtanU.length)) {
         libtanU.push(hoverr.length);
         break;
      }
         libtanU.push(2);
         libtanU = [libtanU.length / (Math.max(mailW.length, 9))];
         mailW.push(parseInt(`${searchbare}`));
         searchbare *= libtanU.length | 3;
         libtanU.push(parseInt(`${searchbare}`));
          let moont = 5;
          let controlsu = String.fromCharCode(116,97,103,103,101,100,95,49,95,48,0);
          let soundz: Array<any> = [101, 159];
         hoverr += `${moont + soundz.length}`;
         moont *= 2 << (Math.min(2, controlsu.length));
         controlsu = `${controlsu.length}`;
         libtanU.push(hoverr.length * 3);
         hoverr = `${hoverr.length - libtanU.length}`;
       let resendk = String.fromCharCode(102,95,55,52,95,119,97,110,116,0);
       let libfabricjni_ = String.fromCharCode(109,117,108,116,105,98,97,115,101,95,118,95,57,49,0);
         searchbare *= libfabricjni_.length ^ resendk.length;
      resendL += `${3 % (Math.max(4, resendL.length))}`;
   }

        const PADDING = 8;

      baseT = `${(circleM == String.fromCharCode(50,0) ? circleM.length : componentregistryK.length)}`;
   while (default_wm == baseT) {
      baseT += `${3 + fastforwarda.length}`;
      break;
   }
      favoriteB += 2;
        const windowDim = width - insets.left - insets.right - outerRowPadding - (2.1 * spacing.sideOffset); 

   if (!resendL.startsWith(componentregistryK)) {
      resendL += `${default_wm.length << (Math.min(Math.abs(3), 3))}`;
   }
   if (3 > (baseT.length % 3) && (guide0 * 3.53) > 3.21) {
      baseT = `${circleM.length}`;
   }
      guide0 *= circleM.length;
        const maxWidth = (windowDim / minNumPerRow) - PADDING;

   while (baseT == componentregistryK) {
      componentregistryK = `${parseInt(`${guide0}`)}`;
      break;
   }
      favoriteB -= fastforwarda.length % 1;
      showC = `${resendL.length * 3}`;
        let cardWidth = Math.min(160, Math.floor(maxWidth)) ;

      default_wm = `${circleM.length << (Math.min(resendL.length, 5))}`;
   while (2.44 == (4.32 + favoriteB)) {
      favoriteB /= Math.max((circleM == String.fromCharCode(87,0) ? fastforwarda.length : circleM.length), 2);
      break;
   }
   while (5.15 == favoriteB) {
       let libreactZ = 5.0;
       let checkboxU = false;
       let libglogy = 3;
      let libswscalev = libreactZ >= 8993614.0;
      do {
         libreactZ /= Math.max(5, (parseFloat(`${parseInt(`${libreactZ}`) | (checkboxU ? 3 : 1)}`)));
         if (libswscalev) {
            break;
         }
      } while (libswscalev && (libreactZ < libglogy));
       let toponE = 1.0;
         toponE -= parseInt(`${toponE}`) % 2;
      let tempb = 9362483.0 <= toponE;
      do {
         toponE -= parseInt(`${libreactZ}`) << (Math.min(1, Math.abs(2)));
         if (tempb) {
            break;
         }
      } while ((libglogy >= 5) && tempb);
         checkboxU = libglogy < parseInt(`${libreactZ}`);
      if (libreactZ == 4.49) {
         checkboxU = (libglogy - toponE) == 19;
      }
         checkboxU = toponE == 31.47;
         libglogy -= ((checkboxU ? 5 : 3) & parseInt(`${toponE}`));
          let delegate_8v = String.fromCharCode(98,95,56,57,95,102,97,115,116,102,105,114,115,116,112,97,115,115,0);
          let libfbV = String.fromCharCode(116,97,98,108,101,105,110,105,116,95,49,95,56,54,0);
         libglogy %= Math.max(5, libfbV.length);
         delegate_8v = `${delegate_8v.length}`;
         libfbV = `${delegate_8v.length}`;
      favoriteB -= (default_wm == String.fromCharCode(121,0) ? (checkboxU ? 5 : 3) : default_wm.length);
      break;
   }
        const cardHeight = heightToWidthRatio * cardWidth;

   let pageK = String.fromCharCode(105,57,108,57,122,99,0) == showC;
   do {
       let hiadK = String.fromCharCode(110,95,52,95,97,108,116,101,114,101,100,0);
       let line3: Map<any, any> = new Map([[String.fromCharCode(97,112,112,95,101,95,56,48,0),32], [String.fromCharCode(113,95,56,57,95,115,116,100,111,117,116,0),254], [String.fromCharCode(105,95,55,56,95,115,105,103,109,97,0),534]]);
       let searchbarm = true;
       let frame_poc = 2.0;
       let suggestionr = String.fromCharCode(98,105,108,97,116,101,114,97,108,95,48,95,52,57,0);
         searchbarm = 24.51 == frame_poc || String.fromCharCode(118,0) == suggestionr;
      for (let j = 0; j < 1; j++) {
         frame_poc += parseFloat(`${line3.size * 1}`);
      }
      for (let x = 0; x < 2; x++) {
         hiadK += `${2 - hiadK.length}`;
      }
         searchbarm = (line3.size * parseInt(`${frame_poc}`)) == 9;
      let chatj = 6230906 <= suggestionr.length;
      do {
         suggestionr += `${line3.size / 1}`;
         if (chatj) {
            break;
         }
      } while ((!searchbarm) && chatj);
      let upgrades = suggestionr == String.fromCharCode(100,117,118,113,121,102,118,121,98,121,0);
      do {
         suggestionr += `${suggestionr.length}`;
         if (upgrades) {
            break;
         }
      } while ((hiadK == String.fromCharCode(100,0)) && upgrades);
       let editQ = 3.0;
       let gemfileY = 4.0;
       let libimagepipelineN: Map<any, any> = new Map([[String.fromCharCode(113,109,98,108,95,115,95,52,50,0),false ], [String.fromCharCode(114,101,107,101,121,95,120,95,50,48,0),false ], [String.fromCharCode(117,95,50,55,95,102,111,114,109,97,116,0),true ]]);
         line3.set(`${searchbarm}`, (parseInt(`${gemfileY}`) >> (Math.min(5, Math.abs((searchbarm ? 3 : 4))))));
      for (let t = 0; t < 3; t++) {
         line3.set(`${frame_poc}`, 3 ^ parseInt(`${frame_poc}`));
      }
         hiadK += `${line3.size << (Math.min(Math.abs(1), 3))}`;
         hiadK = `${parseInt(`${gemfileY}`) >> (Math.min(Math.abs(parseInt(`${frame_poc}`)), 2))}`;
         frame_poc -= parseFloat(`${hiadK.length << (Math.min(4, Math.abs(parseInt(`${editQ}`))))}`);
         editQ *= parseFloat(`${parseInt(`${frame_poc}`)}`);
         gemfileY *= parseFloat(`${parseInt(`${editQ}`)}`);
      showC += `${showC.length >> (Math.min(Math.abs(3), 4))}`;
      if (pageK) {
         break;
      }
   } while (pageK && (2 <= baseT.length || showC == String.fromCharCode(69,0)));
   for (let y = 0; y < 3; y++) {
      favoriteB *= 3;
   }
       let sounda: Array<any> = [902, 566, 674];
         sounda = [2 + sounda.length];
      for (let s = 0; s < 3; s++) {
         sounda = [sounda.length / (Math.max(sounda.length, 4))];
      }
       let canvasm = String.fromCharCode(114,95,51,49,95,98,105,116,114,97,116,101,0);
       let containerD = String.fromCharCode(100,101,99,101,108,101,114,97,116,105,111,110,95,49,95,51,57,0);
      libhermesz = [sounda.length / (Math.max(4, baseT.length))];
        const CARDS_PER_ROW = Math.floor(windowDim / cardWidth);

   if (showC.length <= refreshD.length) {
       let notificationT = String.fromCharCode(103,101,116,117,114,108,99,111,110,116,101,120,116,95,101,95,52,0);
       let middleP: Map<any, any> = new Map([[String.fromCharCode(98,117,116,116,101,114,119,111,114,116,104,95,117,95,56,49,0),String.fromCharCode(103,95,56,54,95,99,111,114,111,117,116,105,110,101,0)], [String.fromCharCode(98,105,116,114,118,99,111,110,106,95,52,95,53,57,0),String.fromCharCode(122,95,49,50,95,114,97,110,115,105,116,105,111,110,0)]]);
          let temperature3 = 2.0;
          let profile9 = true;
          let register_276 = false;
         middleP.set(notificationT, parseInt(`${temperature3}`));
         temperature3 -= (parseFloat(`${(register_276 ? 2 : 1) + 1}`));
         profile9 = register_276 && !profile9;
      if (5 <= (notificationT.length << (Math.min(Math.abs(1), 4))) || 4 <= (notificationT.length << (Math.min(Math.abs(1), 3)))) {
         notificationT = `${notificationT.length + middleP.size}`;
      }
      let paged = notificationT.length <= 4999785;
      do {
         notificationT = `${middleP.size ^ 2}`;
         if (paged) {
            break;
         }
      } while (paged && (3 <= notificationT.length));
         notificationT = `${notificationT.length * middleP.size}`;
      for (let m = 0; m < 2; m++) {
          let shareo: Map<any, any> = new Map([[String.fromCharCode(115,121,115,108,111,103,95,57,95,55,57,0),false ], [String.fromCharCode(120,95,49,53,95,97,99,116,105,118,101,0),true ], [String.fromCharCode(102,111,117,110,100,95,48,95,53,56,0),true ]]);
         middleP = new Map([[`${shareo.size}`, 3 / (Math.max(5, middleP.size))]]);
      }
      for (let p = 0; p < 1; p++) {
          let rewardvideoP = String.fromCharCode(103,105,116,104,117,98,95,100,95,57,48,0);
         notificationT += "1";
         rewardvideoP += "3";
      }
      showC += `${3 - resendL.length}`;
   }
      showC = "2";
      showC = `${parseInt(`${scheduleP}`) >> (Math.min(fastforwarda.length, 5))}`;
        let BTN_MARGIN_RIGHT = (windowDim - (CARDS_PER_ROW * cardWidth)) / (CARDS_PER_ROW - 1);

   for (let a = 0; a < 1; a++) {
      resendL = `${(showC == String.fromCharCode(97,0) ? parseInt(`${scheduleP}`) : showC.length)}`;
   }
   let lighta = resendL == String.fromCharCode(101,97,122,118,116,51,0);
   do {
      resendL += `${(String.fromCharCode(115,0) == resendL ? refreshD.length : resendL.length)}`;
      if (lighta) {
         break;
      }
   } while (lighta && (resendL.length >= showC.length));
      favoriteB -= circleM.length / (Math.max(7, componentregistryK.length));
        if (BTN_MARGIN_RIGHT > 16) {

   while (!componentregistryK.startsWith(`${baseT.length}`)) {
      baseT = `${fastforwarda.length * componentregistryK.length}`;
      break;
   }
   while (fastforwarda.length >= 2) {
      fastforwarda = `${parseInt(`${guide0}`)}`;
      break;
   }
       let tooltips_: Map<any, any> = new Map([[String.fromCharCode(99,95,51,52,95,114,101,115,116,97,114,116,0),535], [String.fromCharCode(97,95,49,56,95,116,114,105,112,108,101,116,0),831]]);
       let signinup3: Map<any, any> = new Map([[String.fromCharCode(102,105,108,101,119,114,105,116,101,115,116,114,101,97,109,95,109,95,54,56,0),866], [String.fromCharCode(105,109,112,108,105,99,105,116,95,100,95,51,48,0),912]]);
      for (let y = 0; y < 3; y++) {
         tooltips_.set(`${signinup3.size}`, signinup3.size >> (Math.min(Math.abs(tooltips_.size), 2)));
      }
         tooltips_ = new Map([[`${tooltips_.size}`, 1]]);
      let relatedH = signinup3.size <= 5210320;
      do {
         signinup3.set(`${signinup3.size}`, 3 & tooltips_.size);
         if (relatedH) {
            break;
         }
      } while ((!Array.from(signinup3.keys()).includes(`${tooltips_.size}`)) && relatedH);
         signinup3 = new Map([[`${tooltips_.size}`, 2 & tooltips_.size]]);
          let ksady: Map<any, any> = new Map([[String.fromCharCode(119,97,105,116,95,103,95,51,0),String.fromCharCode(100,101,114,105,118,101,95,104,95,57,55,0)], [String.fromCharCode(103,95,55,53,95,109,95,53,0),String.fromCharCode(105,95,50,51,95,99,108,105,112,98,111,97,114,100,0)]]);
         signinup3.set(`${ksady.size}`, 2);
         tooltips_.set(`${signinup3.size}`, signinup3.size / (Math.max(tooltips_.size, 2)));
      componentregistryK += `${(circleM == String.fromCharCode(69,0) ? parseInt(`${plashP}`) : circleM.length)}`;
            const excess = (BTN_MARGIN_RIGHT - 16) * (CARDS_PER_ROW - 1);

   while ((favoriteB - showC.length) > 2.32) {
       let slider8 = false;
       let armvac: Array<any> = [String.fromCharCode(100,101,99,111,109,112,114,101,115,115,105,111,110,95,56,95,55,0), String.fromCharCode(105,95,56,56,95,99,111,100,101,115,0), String.fromCharCode(97,115,115,101,116,115,95,117,95,53,0)];
       let splash_ = true;
       let sideB = String.fromCharCode(103,95,53,51,95,101,120,112,105,114,101,100,0);
         sideB = `${armvac.length}`;
         armvac.push((3 | (slider8 ? 2 : 2)));
         slider8 = (98 > ((splash_ ? sideB.length : 98) & sideB.length));
       let stationF: Array<any> = [String.fromCharCode(100,101,99,108,95,119,95,53,52,0), String.fromCharCode(104,95,57,56,95,115,104,111,119,0)];
       let injurya: Array<any> = [797, 110];
          let reducerF = false;
         slider8 = armvac.length <= 14;
         reducerF = (!reducerF ? reducerF : reducerF);
      while (2 >= armvac.length || (armvac.length | 2) >= 5) {
          let datag: Array<any> = [858, 599];
          let catagory6 = String.fromCharCode(116,119,111,108,97,109,101,95,98,95,52,49,0);
          let sourcem = 2.0;
         slider8 = datag.length >= 37;
         datag.push(2);
         catagory6 += `${parseInt(`${sourcem}`) >> (Math.min(catagory6.length, 4))}`;
         sourcem *= parseFloat(`${catagory6.length}`);
         break;
      }
      if (5 >= armvac.length) {
          let g_viewB: Array<any> = [453, 495];
          let floater5 = 2;
          let libloggerw = 0.0;
          let settingsu = true;
          let blackK = 4.0;
         slider8 = (((slider8 ? g_viewB.length : 61) ^ g_viewB.length) >= 61);
         floater5 %= Math.max(3 % (Math.max(parseInt(`${libloggerw}`), 1)), 2);
         libloggerw += ((settingsu ? 2 : 1) + parseInt(`${libloggerw}`));
         settingsu = 45.26 > libloggerw;
         blackK /= Math.max(3 - floater5, 3);
      }
       let libreanimatedW = String.fromCharCode(109,118,100,97,116,97,95,100,95,56,50,0);
       let sell5 = String.fromCharCode(116,95,49,48,48,95,115,99,97,109,0);
      let diceZ = libreanimatedW.length <= 6738790;
      do {
         libreanimatedW = "2";
         if (diceZ) {
            break;
         }
      } while (((armvac.length - libreanimatedW.length) < 2) && diceZ);
      while (libreanimatedW.length < 4) {
          let h_imageU: Array<any> = [577, 508, 568];
          let mapbufferG: Array<any> = [String.fromCharCode(98,101,99,97,117,115,101,95,50,95,54,0), String.fromCharCode(114,111,117,110,100,115,95,110,95,49,48,0)];
          let thailandi = 4.0;
         libreanimatedW += `${2 / (Math.max(10, h_imageU.length))}`;
         h_imageU = [mapbufferG.length];
         mapbufferG = [mapbufferG.length];
         thailandi -= parseFloat(`${parseInt(`${thailandi}`)}`);
         break;
      }
         stationF.push(injurya.length + armvac.length);
      for (let t = 0; t < 1; t++) {
         sell5 = `${injurya.length}`;
      }
      showC += `${armvac.length}`;
      break;
   }
   if (3.34 > (plashP - 2.64) && 5.22 > (scheduleP - 2.64)) {
      plashP /= Math.max((String.fromCharCode(108,0) == componentregistryK ? resendL.length : componentregistryK.length), 1);
   }
   let danger5 = 5440359 >= libhermesz.length;
   do {
      libhermesz = [fastforwarda.length << (Math.min(Math.abs(3), 3))];
      if (danger5) {
         break;
      }
   } while (danger5 && (3 >= (libhermesz.length % 3) && 2 >= (3 % (Math.max(8, showC.length)))));
            BTN_MARGIN_RIGHT = 16;

   for (let z = 0; z < 1; z++) {
      scheduleP -= parseInt(`${scheduleP}`);
   }
      componentregistryK += `${refreshD.length}`;
   let productZ = String.fromCharCode(56,108,54,101,114,119,100,0) == componentregistryK;
   do {
       let philippines4 = String.fromCharCode(117,95,49,54,95,97,118,101,115,0);
      let fieldH = String.fromCharCode(116,117,118,108,113,108,0) == philippines4;
      do {
         philippines4 += `${philippines4.length}`;
         if (fieldH) {
            break;
         }
      } while (fieldH && (philippines4 != String.fromCharCode(77,0)));
         philippines4 = `${2 << (Math.min(2, philippines4.length))}`;
         philippines4 += `${philippines4.length}`;
      componentregistryK += `${(String.fromCharCode(79,0) == baseT ? philippines4.length : baseT.length)}`;
      if (productZ) {
         break;
      }
   } while (productZ && (!componentregistryK.endsWith(showC)));
            cardWidth += Math.floor(excess / CARDS_PER_ROW)  
        }

        setCardsPerRow(CARDS_PER_ROW);

   while (favoriteB < refreshD.length) {
       let policyo: Array<any> = [275, 604, 619];
       let renewF = String.fromCharCode(99,95,49,48,95,102,99,117,110,112,117,98,108,105,115,104,0);
       let actionsb = String.fromCharCode(115,101,99,117,114,101,100,95,109,95,57,48,0);
       let savea = String.fromCharCode(98,95,52,56,95,100,101,114,105,118,97,116,105,111,110,0);
      let catagoryl = savea.length >= 9714348;
      do {
         savea = `${savea.length}`;
         if (catagoryl) {
            break;
         }
      } while ((!savea.includes(`${renewF.length}`)) && catagoryl);
       let emptye = String.fromCharCode(118,95,57,55,95,115,117,102,102,105,120,0);
       let sinaC = String.fromCharCode(103,95,56,51,95,116,104,97,119,101,100,0);
          let referrerf = String.fromCharCode(113,112,101,103,95,113,95,49,48,0);
          let diceH = String.fromCharCode(116,111,112,95,107,95,49,57,0);
         renewF = `${diceH.length << (Math.min(referrerf.length, 5))}`;
      if (savea == String.fromCharCode(108,0)) {
          let chinasameD = String.fromCharCode(100,97,114,107,101,110,105,110,103,95,98,95,50,49,0);
          let pangleK = String.fromCharCode(115,117,112,101,114,95,55,95,54,56,0);
          let nextC = 5.0;
          let iconO = String.fromCharCode(100,95,56,48,95,116,117,110,110,101,108,101,100,0);
         renewF += `${1 * actionsb.length}`;
         chinasameD += "1";
         pangleK += `${(iconO == String.fromCharCode(121,0) ? iconO.length : parseInt(`${nextC}`))}`;
         nextC += parseInt(`${nextC}`) - pangleK.length;
      }
          let description_4xT = String.fromCharCode(117,110,112,117,98,108,105,115,104,95,107,95,54,51,0);
         policyo.push(1 & policyo.length);
         description_4xT += `${(String.fromCharCode(83,0) == description_4xT ? description_4xT.length : description_4xT.length)}`;
          let uimanagerz = true;
         policyo = [policyo.length + 2];
      if (5 >= (actionsb.length % (Math.max(4, policyo.length)))) {
          let checkboxO = String.fromCharCode(111,95,56,57,95,100,101,112,101,110,100,115,0);
          let shoote = String.fromCharCode(114,101,100,115,112,97,114,107,95,99,95,51,49,0);
          let episodez = String.fromCharCode(117,95,56,54,95,110,112,112,115,99,97,108,101,0);
          let stard = String.fromCharCode(97,95,50,55,95,104,101,118,99,112,114,101,100,0);
          let downloaderO = 3;
         actionsb += `${renewF.length ^ 2}`;
         checkboxO += `${checkboxO.length << (Math.min(Math.abs(3), 5))}`;
         shoote += `${(String.fromCharCode(52,0) == stard ? downloaderO : stard.length)}`;
         episodez += `${(checkboxO == String.fromCharCode(115,0) ? shoote.length : checkboxO.length)}`;
         downloaderO += shoote.length;
      }
       let pingy = 4.0;
      favoriteB /= Math.max((String.fromCharCode(48,0) == fastforwarda ? parseInt(`${guide0}`) : fastforwarda.length), 1);
      break;
   }
      baseT = `${parseInt(`${plashP}`)}`;
       let libfbjnik = 2.0;
       let modef = String.fromCharCode(115,95,55,50,0);
       let cricket1: Map<any, any> = new Map([[String.fromCharCode(99,100,120,108,95,103,95,54,48,0),String.fromCharCode(122,95,50,57,95,97,116,111,102,0)], [String.fromCharCode(112,95,56,53,95,99,114,121,112,116,0),String.fromCharCode(97,114,98,105,116,114,117,109,95,118,95,54,48,0)], [String.fromCharCode(111,110,101,108,105,110,101,95,112,95,51,56,0),String.fromCharCode(118,95,55,95,114,97,100,105,117,115,0)]]);
         modef += `${parseInt(`${libfbjnik}`)}`;
          let listy: Array<any> = [753, 994];
          let shrinkC = 1.0;
         libfbjnik += parseFloat(`${listy.length ^ 1}`);
         listy = [parseInt(`${shrinkC}`) + 2];
         shrinkC *= parseInt(`${shrinkC}`) & 1;
          let type_ioe = String.fromCharCode(105,110,102,111,114,109,95,104,95,49,57,0);
          let statisticsq = String.fromCharCode(110,95,49,48,95,114,101,115,0);
         modef += `${2 - modef.length}`;
         type_ioe = `${(String.fromCharCode(87,0) == type_ioe ? type_ioe.length : statisticsq.length)}`;
         statisticsq = `${(statisticsq == String.fromCharCode(102,0) ? type_ioe.length : statisticsq.length)}`;
      if (2 > cricket1.size) {
         cricket1.set(`${libfbjnik}`, (String.fromCharCode(53,0) == modef ? parseInt(`${libfbjnik}`) : modef.length));
      }
      for (let f = 0; f < 1; f++) {
         cricket1 = new Map([[`${cricket1.size}`, (modef == String.fromCharCode(77,0) ? cricket1.size : modef.length)]]);
      }
         modef += "3";
          let linkM: Map<any, any> = new Map([[String.fromCharCode(102,105,114,101,95,112,95,53,53,0),163], [String.fromCharCode(117,95,48,95,115,113,108,105,116,101,0),76], [String.fromCharCode(111,112,97,100,95,104,95,56,54,0),676]]);
          let mimoa: Array<any> = [143, 898];
          let libavcodecZ = String.fromCharCode(119,95,55,52,95,115,116,114,105,110,103,0);
         modef = `${modef.length >> (Math.min(4, Math.abs(cricket1.size)))}`;
         linkM = new Map([[`${linkM.size}`, mimoa.length]]);
         mimoa = [1];
         libavcodecZ = `${(libavcodecZ == String.fromCharCode(100,0) ? libavcodecZ.length : mimoa.length)}`;
          let foundL = 2.0;
          let rewind7: Map<any, any> = new Map([[String.fromCharCode(119,101,105,103,104,116,101,100,95,57,95,53,53,0),261], [String.fromCharCode(116,95,55,53,95,109,117,116,97,116,101,0),122]]);
         modef += "2";
         foundL *= parseFloat(`${parseInt(`${foundL}`)}`);
         rewind7 = new Map([[`${rewind7.size}`, rewind7.size]]);
       let libpangleflippedV = String.fromCharCode(105,95,52,48,95,103,101,116,101,110,118,0);
       let bufferC = String.fromCharCode(102,102,109,109,97,108,95,53,95,57,48,0);
      componentregistryK += `${baseT.length}`;
        setMarginRight(BTN_MARGIN_RIGHT);

   if (1 >= (5 ^ libhermesz.length) && (libhermesz.length ^ 5) >= 1) {
      libhermesz = [1];
   }
   if (circleM.length < 1) {
      componentregistryK += `${parseInt(`${guide0}`)}`;
   }
       let goalr = String.fromCharCode(122,95,51,53,95,114,101,119,97,114,100,0);
         goalr += `${goalr.length}`;
      for (let h = 0; h < 1; h++) {
         goalr = `${goalr.length}`;
      }
      let dnewsZ = goalr == String.fromCharCode(119,106,53,107,108,0);
      do {
         goalr += `${goalr.length >> (Math.min(Math.abs(1), 5))}`;
         if (dnewsZ) {
            break;
         }
      } while (dnewsZ && (goalr != goalr));
      circleM = `${libhermesz.length ^ parseInt(`${plashP}`)}`;
        setCardWidth(cardWidth - 10);

      scheduleP += parseInt(`${plashP}`) << (Math.min(Math.abs(3), 5));
      showC = `${libhermesz.length}`;
   while (circleM.length == 2) {
       let buttonq: Array<any> = [686, 668, 676];
       let runtimeG = String.fromCharCode(97,95,52,48,95,114,101,100,105,114,101,99,116,0);
         buttonq = [runtimeG.length | 3];
         runtimeG += `${runtimeG.length}`;
          let turn7: Array<any> = [752, 279];
         buttonq.push(3 | runtimeG.length);
         turn7.push(2);
          let video0 = 3.0;
         runtimeG = `${runtimeG.length}`;
         video0 -= parseFloat(`${1 - parseInt(`${video0}`)}`);
         runtimeG += "2";
      while (1 <= buttonq.length) {
          let with_zJ = true;
          let libswscalet = String.fromCharCode(116,95,50,53,95,114,101,115,111,108,117,116,105,111,110,0);
          let blackg = true;
          let hearth = String.fromCharCode(109,95,49,50,95,119,101,105,103,104,116,115,0);
         runtimeG = `${1 & hearth.length}`;
         with_zJ = !libswscalet.includes(`${with_zJ}`);
         libswscalet = `${2 * libswscalet.length}`;
         blackg = libswscalet.endsWith(`${with_zJ}`);
         hearth += `${libswscalet.length}`;
         break;
      }
      circleM = `${refreshD.length}`;
      break;
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