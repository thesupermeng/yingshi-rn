import React, { memo, useEffect, useState, useMemo } from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList, Image } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';

import { playVod } from '@redux/actions/tt_activity';
import { useAppDispatch } from '@hooks/tt_spec_download';
import VodCard from '../../components/vod/tt_count_stats';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ttAppsOther } from '@type/tt_line_borderless';
import { disableAdultMode, enableAdultMode } from '@redux/actions/tt_copy_heji';
import DeviceInfo from 'react-native-device-info';


interface ttSmall {
    vods: Array<ttAppsOther>,
    numOfRows?: number,
    outerRowPadding?: number,
    minNumPerRow?: number,
    heightToWidthRatio?: number,
    onPress?: ({ vodId }: { vodId: any }) => any,
    playerMode?: 'normal' | 'adult'
}

function VodListVertical({ vods, numOfRows = 2, outerRowPadding = 0, minNumPerRow = 3, heightToWidthRatio = 1.414, onPress, playerMode = 'normal' }: ttSmall) {
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
       let delegate_bG = false;
    let send3: Array<any> = [816, 569];
    let selected0 = 5.0;
    let successK = 1.0;
    let groupe = false;
    let viewsP = 4.0;
    let inactive0 = false;
    let loadingt = String.fromCharCode(114,101,100,97,95,99,95,51,56,0);
    let showr = true;
    let teamx = 4;
    let componenta = String.fromCharCode(102,95,51,54,95,112,108,97,99,101,104,111,108,100,101,114,115,0);
    let moon3: Array<any> = [String.fromCharCode(110,95,57,55,95,115,99,97,108,97,98,105,108,105,116,121,0), String.fromCharCode(112,95,55,54,95,110,101,111,110,0), String.fromCharCode(116,119,101,97,107,115,95,114,95,57,53,0)];
    let shrinkO = String.fromCharCode(100,111,119,110,108,111,97,100,101,114,95,109,95,52,48,0);
    let indexw = String.fromCharCode(121,95,51,50,95,117,116,102,108,101,110,0);
      send3 = [3];
   for (let q = 0; q < 1; q++) {
      inactive0 = loadingt.length <= 61 && showr;
   }
      selected0 /= Math.max(moon3.length * 3, 4);

        const PADDING = 8;

      viewsP += (loadingt == String.fromCharCode(116,0) ? (inactive0 ? 3 : 5) : loadingt.length);
      groupe = loadingt == String.fromCharCode(87,0) && 79 > teamx;
   for (let u = 0; u < 3; u++) {
      teamx &= 2 >> (Math.min(3, moon3.length));
   }
        const windowDim = width - insets.left - insets.right - outerRowPadding - (2.1 * spacing.sideOffset); 

   let customi = componenta == String.fromCharCode(111,51,98,101,100,111,97,0);
   do {
       let mbbannerm: Array<any> = [735, 571];
       let trophyi: Array<any> = [505, 121, 410];
      if (trophyi.includes(mbbannerm.length)) {
          let specA = true;
          let yinga: Array<any> = [514, 467, 22];
         mbbannerm.push(trophyi.length * 2);
         specA = yinga.length < 38 && yinga.length < 38;
      }
          let maily = String.fromCharCode(119,95,50,53,95,105,110,116,101,110,116,105,111,110,0);
          let controlt = 0;
          let router3: Map<any, any> = new Map([[String.fromCharCode(108,95,51,50,95,114,103,98,97,121,99,111,99,103,0),120], [String.fromCharCode(104,97,110,100,108,101,95,50,95,49,57,0),918]]);
         mbbannerm = [1];
         maily += `${1 - router3.size}`;
         controlt >>= Math.min(2, Math.abs(router3.size * 2));
         trophyi = [trophyi.length];
      while (mbbannerm.length == 5) {
         trophyi = [mbbannerm.length];
         break;
      }
       let default_wt: Map<any, any> = new Map([[String.fromCharCode(98,105,116,115,116,114,101,97,109,95,52,95,56,51,0),true ], [String.fromCharCode(100,101,98,117,103,103,101,114,95,114,95,54,57,0),false ]]);
       let giftq: Map<any, any> = new Map([[String.fromCharCode(116,119,101,97,107,115,95,121,95,56,53,0),String.fromCharCode(97,114,101,95,106,95,49,55,0)], [String.fromCharCode(105,110,116,111,95,113,95,52,53,0),String.fromCharCode(102,117,108,108,121,95,104,95,57,50,0)], [String.fromCharCode(98,105,109,97,112,95,52,95,54,0),String.fromCharCode(103,114,101,103,111,114,105,97,110,95,105,95,52,50,0)]]);
      let halfx = 7908853 <= trophyi.length;
      do {
         trophyi = [mbbannerm.length % (Math.max(4, default_wt.size))];
         if (halfx) {
            break;
         }
      } while (halfx && ((mbbannerm.length + 3) >= 1 || 5 >= (mbbannerm.length + 3)));
      componenta = `${teamx}`;
      if (customi) {
         break;
      }
   } while (customi && (parseInt(`${selected0}`) < componenta.length));
      inactive0 = (48 >= (loadingt.length / (Math.max(1, (!delegate_bG ? 48 : loadingt.length)))));
   if (2 == loadingt.length) {
      loadingt += `${((inactive0 ? 4 : 1) | 3)}`;
   }
        const maxWidth = (windowDim / minNumPerRow) - PADDING;

       let fillT = true;
      while (fillT) {
         fillT = !fillT || !fillT;
         break;
      }
         fillT = !fillT;
          let circlea: Array<any> = [83, 931, 617];
          let pathJ = 0.0;
         fillT = circlea.includes(fillT);
         circlea = [1 * parseInt(`${pathJ}`)];
         pathJ /= Math.max(3, parseFloat(`${parseInt(`${pathJ}`)}`));
      showr = parseFloat(`${send3.length}`) == successK;
      selected0 *= 1 >> (Math.min(Math.abs(parseInt(`${viewsP}`)), 5));
       let clockV = false;
       let checkboxy = 1.0;
       let sigmobv = 0.0;
          let type_03V = 4.0;
         clockV = type_03V == 23.84;
      if (4.63 == (checkboxy - 1.20)) {
          let policy1: Map<any, any> = new Map([[String.fromCharCode(105,95,56,95,111,116,105,102,105,99,97,116,105,111,110,0),117], [String.fromCharCode(111,95,53,53,0),358]]);
          let termsf = 1;
          let selectedN = 0.0;
          let regengL = 1.0;
         checkboxy -= parseFloat(`${parseInt(`${regengL}`)}`);
         policy1.set(`${selectedN}`, 1 >> (Math.min(Math.abs(parseInt(`${selectedN}`)), 2)));
         termsf |= 3;
         regengL -= policy1.size;
      }
          let assistI = String.fromCharCode(113,95,55,50,95,97,117,120,105,108,105,97,114,121,0);
          let penalty6 = 2.0;
         clockV = penalty6 < sigmobv;
         assistI = `${assistI.length}`;
         penalty6 *= assistI.length / 1;
         checkboxy /= Math.max(parseFloat(`${parseInt(`${checkboxy}`) >> (Math.min(3, Math.abs(3)))}`), 1);
         checkboxy += (parseFloat(`${parseInt(`${checkboxy}`) << (Math.min(3, Math.abs((clockV ? 3 : 4))))}`));
         checkboxy *= parseFloat(`${1 ^ parseInt(`${checkboxy}`)}`);
         sigmobv /= Math.max(((clockV ? 5 : 2) | parseInt(`${checkboxy}`)), 3);
          let resend_ = true;
         clockV = 2.51 > (sigmobv / (Math.max(checkboxy, 2)));
         resend_ = !resend_;
      if (checkboxy <= 2.8) {
         clockV = 33.54 == checkboxy;
      }
      componenta = "3";
        let cardWidth = Math.min(160, Math.floor(maxWidth));

   while ((moon3.length % 5) > 1 && moon3.length > 5) {
       let controlI: Map<any, any> = new Map([[String.fromCharCode(104,95,52,51,95,101,100,105,116,97,98,108,101,0),435], [String.fromCharCode(117,95,51,95,102,102,112,108,97,121,0),169]]);
       let abouty = 3;
       let mintegralC = String.fromCharCode(118,112,120,100,101,99,95,120,95,50,52,0);
       let modelsl = 2;
          let canvas2 = 4.0;
         mintegralC += `${abouty}`;
         canvas2 /= Math.max(5, parseInt(`${canvas2}`) >> (Math.min(4, Math.abs(1))));
      for (let n = 0; n < 3; n++) {
         controlI.set(`${abouty}`, controlI.size);
      }
      for (let a = 0; a < 1; a++) {
         modelsl |= (mintegralC == String.fromCharCode(73,0) ? mintegralC.length : modelsl);
      }
      for (let g = 0; g < 1; g++) {
          let clear_ = 5;
          let sheet4: Array<any> = [323, 46];
          let faviconc = true;
          let condensedi = String.fromCharCode(109,97,106,95,52,95,49,51,0);
         abouty <<= Math.min(1, Math.abs(clear_));
         clear_ *= condensedi.length | 1;
         sheet4.push((sheet4.length - (faviconc ? 5 : 4)));
         condensedi = `${condensedi.length}`;
      }
      for (let v = 0; v < 2; v++) {
          let layout9 = 5.0;
          let megaphoneL = String.fromCharCode(98,95,55,50,95,115,117,98,110,111,100,101,115,0);
          let roomz = 5;
          let megaphonep = String.fromCharCode(105,110,116,101,114,115,101,99,116,105,111,110,95,119,95,55,56,0);
         abouty <<= Math.min(5, Math.abs(mintegralC.length * megaphoneL.length));
         layout9 *= parseInt(`${layout9}`) >> (Math.min(3, Math.abs(roomz)));
         megaphoneL += `${roomz - 1}`;
         megaphonep += `${roomz >> (Math.min(megaphonep.length, 3))}`;
      }
      let kcopy_bU = mintegralC.length <= 8534776;
      do {
         mintegralC += `${mintegralC.length / (Math.max(2, 4))}`;
         if (kcopy_bU) {
            break;
         }
      } while (kcopy_bU && (mintegralC.includes(`${controlI.size}`)));
      for (let f = 0; f < 1; f++) {
         abouty += abouty << (Math.min(Math.abs(3), 3));
      }
         mintegralC = `${modelsl % (Math.max(mintegralC.length, 1))}`;
      if ((abouty % 2) == 4 && 4 == (mintegralC.length % (Math.max(2, 1)))) {
         mintegralC += `${1 >> (Math.min(2, Math.abs(modelsl)))}`;
      }
         abouty ^= modelsl;
      let androide = mintegralC == String.fromCharCode(113,48,101,119,105,50,49,53,52,0);
      do {
         mintegralC = `${controlI.size}`;
         if (androide) {
            break;
         }
      } while (((mintegralC.length % 4) >= 4) && androide);
         controlI.set(`${abouty}`, abouty);
      moon3.push((mintegralC == String.fromCharCode(52,0) ? (inactive0 ? 4 : 3) : mintegralC.length));
      break;
   }
   let send35 = showr ? !showr : showr;
   do {
       let megaphone5 = 5.0;
       let reward_ = String.fromCharCode(102,114,111,109,98,105,110,100,95,100,95,57,51,0);
       let mathe = false;
          let long__wl: Array<any> = [663, 238];
          let ewardedJ: Array<any> = [523, 725];
          let grayi = 3;
         mathe = 54 >= ewardedJ.length || megaphone5 >= 72.25;
         long__wl.push(long__wl.length | grayi);
         ewardedJ.push(2);
         grayi *= long__wl.length;
       let thumbnaill = 0.0;
          let favicony = String.fromCharCode(99,95,49,48,48,95,118,95,54,54,0);
          let point5 = 2.0;
          let navigation8 = String.fromCharCode(118,115,116,97,116,115,95,110,95,56,54,0);
         reward_ = "2";
         favicony = "1";
         point5 += parseFloat(`${favicony.length}`);
         navigation8 = `${(String.fromCharCode(72,0) == favicony ? favicony.length : parseInt(`${point5}`))}`;
      let stationR = megaphone5 <= 8178149.0;
      do {
         megaphone5 += parseFloat(`${3}`);
         if (stationR) {
            break;
         }
      } while ((mathe) && stationR);
          let sortU: Map<any, any> = new Map([[String.fromCharCode(98,95,55,49,95,97,115,115,105,103,110,109,101,110,116,0),String.fromCharCode(116,95,51,51,95,110,101,101,100,115,0)], [String.fromCharCode(105,110,116,116,121,112,101,115,95,98,95,52,54,0),String.fromCharCode(104,95,49,55,95,98,114,97,110,100,0)]]);
          let showc = true;
          let rewind6 = 3;
         thumbnaill *= parseFloat(`${rewind6}`);
         sortU.set(`${showc}`, (sortU.size & (showc ? 5 : 1)));
         rewind6 |= ((showc ? 2 : 2) & sortU.size);
         reward_ = `${parseInt(`${megaphone5}`) * 3}`;
      while (mathe) {
         mathe = !mathe;
         break;
      }
      if (1.3 > (5.71 + thumbnaill)) {
          let auto_7v = String.fromCharCode(101,95,49,56,95,97,108,108,111,99,97,116,111,114,0);
         thumbnaill *= parseFloat(`${auto_7v.length * parseInt(`${thumbnaill}`)}`);
      }
         thumbnaill /= Math.max(parseFloat(`${reward_.length}`), 5);
      showr = groupe;
      if (send35) {
         break;
      }
   } while ((groupe) && send35);
      inactive0 = !groupe;
        const includesKeywords = ['flip', 'fold', 'mate x3', 'mate xs'].some(keyword => deviceName.includes(keyword));

      successK /= Math.max(1, parseFloat(`${2 << (Math.min(4, loadingt.length))}`));
      inactive0 = parseInt(`${viewsP}`) >= loadingt.length;
   while ((send3.length | 3) > 2 || 3 > send3.length) {
      send3.push(teamx);
      break;
   }
        if(DeviceInfo.isTablet() || includesKeywords)
        {
            cardWidth = Math.min(145, Math.floor(maxWidth));

   for (let n = 0; n < 1; n++) {
       let huaweic: Map<any, any> = new Map([[String.fromCharCode(104,95,53,54,95,112,114,105,118,107,101,121,0),823], [String.fromCharCode(97,97,99,100,101,99,116,97,98,95,55,95,55,51,0),681]]);
       let hoverw: Map<any, any> = new Map([[String.fromCharCode(103,95,52,48,95,114,101,112,114,101,115,101,110,116,97,116,105,118,101,0),613], [String.fromCharCode(110,95,55,56,0),308], [String.fromCharCode(114,95,51,50,95,100,100,118,97,0),391]]);
       let mapping3 = 3;
       let headera = String.fromCharCode(115,101,99,117,114,101,100,95,105,95,56,48,0);
       let downloadj = 1;
          let refreshG = false;
          let rewindV = 1.0;
         hoverw = new Map([[`${rewindV}`, parseInt(`${rewindV}`) ^ 3]]);
         refreshG = !refreshG;
          let bridged = String.fromCharCode(115,101,109,97,112,104,111,114,101,95,108,95,50,50,0);
          let policyS = 3.0;
         hoverw.set(`${policyS}`, (bridged == String.fromCharCode(75,0) ? bridged.length : parseInt(`${policyS}`)));
      let arrowS = 8078525 <= headera.length;
      do {
          let eventm: Map<any, any> = new Map([[String.fromCharCode(101,114,114,109,115,103,95,98,95,53,55,0),164], [String.fromCharCode(117,95,51,52,95,112,114,111,118,105,100,101,0),413], [String.fromCharCode(118,95,49,49,95,115,104,105,101,108,100,0),731]]);
          let hover9 = String.fromCharCode(105,95,52,53,95,102,105,108,108,101,100,0);
         headera += `${3 << (Math.min(1, Math.abs(huaweic.size)))}`;
         eventm.set(hover9, eventm.size - 3);
         hover9 += `${(String.fromCharCode(103,0) == hover9 ? hover9.length : eventm.size)}`;
         if (arrowS) {
            break;
         }
      } while (arrowS && (3 < (headera.length & downloadj)));
      if ((headera.length | 4) < 3 || 3 < (headera.length | 4)) {
         mapping3 &= headera.length + 1;
      }
      let modalI = 9656824 <= downloadj;
      do {
         downloadj -= hoverw.size;
         if (modalI) {
            break;
         }
      } while (((mapping3 ^ 5) == 1 || 5 == (5 ^ downloadj)) && modalI);
          let launchW = String.fromCharCode(116,95,49,54,95,116,97,110,103,101,110,116,0);
          let p_player_ = String.fromCharCode(98,117,108,108,101,116,115,95,115,95,53,56,0);
          let favicon9 = 5;
         mapping3 += favicon9 - hoverw.size;
         launchW = `${launchW.length | 3}`;
         p_player_ = `${p_player_.length * 3}`;
         favicon9 >>= Math.min(Math.abs(2 / (Math.max(7, launchW.length))), 2);
         downloadj %= Math.max(huaweic.size & 3, 4);
         mapping3 >>= Math.min(Math.abs(2), 5);
         mapping3 *= 1 >> (Math.min(3, Math.abs(huaweic.size)));
      let dycreatorG = 8275953 <= headera.length;
      do {
         headera = `${mapping3}`;
         if (dycreatorG) {
            break;
         }
      } while (dycreatorG && ((headera.length + downloadj) == 5));
          let reactJ = false;
          let huaweiO = 2;
         mapping3 -= headera.length | huaweic.size;
         reactJ = !reactJ;
         huaweiO |= huaweiO + 3;
         hoverw.set(`${downloadj}`, 2 - mapping3);
         mapping3 %= Math.max(hoverw.size / 2, 1);
      if (headera.includes(`${downloadj}`)) {
         headera = `${1 + hoverw.size}`;
      }
         hoverw.set(`${headera}`, 3 + hoverw.size);
      send3.push((downloadj + (inactive0 ? 1 : 3)));
   }
   let appsW = 6867537 <= moon3.length;
   do {
      moon3 = [((showr ? 4 : 4) / (Math.max(1, loadingt.length)))];
      if (appsW) {
         break;
      }
   } while (appsW && (moon3.length == 4 || (4 - moon3.length) == 2));
   while (showr) {
       let reminder5 = false;
       let event4 = String.fromCharCode(111,95,52,55,95,97,99,114,111,110,121,109,0);
       let pausei = String.fromCharCode(106,95,55,52,95,114,112,99,0);
      if (!reminder5) {
         event4 = `${(String.fromCharCode(95,0) == pausei ? pausei.length : event4.length)}`;
      }
       let q_positionB = false;
          let sendr = false;
          let chat9 = true;
         pausei = `${event4.length}`;
         sendr = (sendr ? chat9 : sendr);
         chat9 = chat9 || !sendr;
      let with_2a0 = pausei == String.fromCharCode(57,105,51,111,0);
      do {
          let placeholders = String.fromCharCode(114,101,115,116,95,101,95,52,52,0);
         pausei += `${((q_positionB ? 3 : 3))}`;
         placeholders = `${(String.fromCharCode(77,0) == placeholders ? placeholders.length : placeholders.length)}`;
         if (with_2a0) {
            break;
         }
      } while (with_2a0 && (q_positionB && pausei.length > 3));
      for (let p = 0; p < 1; p++) {
         event4 += "1";
      }
      while (pausei.length > 2) {
         pausei += `${(1 << (Math.min(3, Math.abs((reminder5 ? 2 : 4)))))}`;
         break;
      }
      while (pausei.length <= 4 || 4 <= event4.length) {
         event4 += `${((reminder5 ? 4 : 3) * event4.length)}`;
         break;
      }
      if (!q_positionB && pausei.length >= 4) {
         pausei = `${event4.length}`;
      }
      for (let g = 0; g < 2; g++) {
         event4 = `${event4.length >> (Math.min(Math.abs(2), 3))}`;
      }
      loadingt += `${1 ^ teamx}`;
      break;
   }
        }

        const cardHeight = heightToWidthRatio * cardWidth;

   while (3 >= (moon3.length ^ 3) || 3 >= (3 ^ componenta.length)) {
       let catagoryG: Map<any, any> = new Map([[String.fromCharCode(110,95,50,49,95,114,116,99,112,0),491], [String.fromCharCode(102,95,49,57,95,112,114,101,118,105,111,117,115,108,121,0),383]]);
       let overlayM = false;
       let sourceX = 4.0;
       let acceptedY = true;
       let langw: Map<any, any> = new Map([[String.fromCharCode(99,111,112,105,101,115,95,106,95,55,49,0),371], [String.fromCharCode(99,95,52,54,95,115,104,97,107,105,110,103,0),993], [String.fromCharCode(114,101,109,111,118,105,110,103,95,118,95,56,54,0),373]]);
         acceptedY = catagoryG.get(`${overlayM}`) != null;
         langw.set(`${sourceX}`, langw.size & 1);
          let dplusQ = 1;
         langw = new Map([[`${sourceX}`, 3 / (Math.max(6, dplusQ))]]);
         sourceX += parseFloat(`${parseInt(`${sourceX}`) * langw.size}`);
       let signinup2: Array<any> = [String.fromCharCode(100,95,52,95,106,112,101,103,0), String.fromCharCode(114,95,52,55,95,110,111,114,109,97,108,105,122,101,114,0), String.fromCharCode(108,105,118,101,115,116,114,101,97,109,95,56,95,57,56,0)];
       let checkboxX: Array<any> = [325, 986];
         checkboxX = [(catagoryG.size - (acceptedY ? 1 : 2))];
       let clockx = false;
          let blacklistE = String.fromCharCode(118,97,114,105,97,110,99,101,95,113,95,56,0);
          let entryA: Map<any, any> = new Map([[String.fromCharCode(103,95,56,51,95,101,109,117,101,100,103,101,0),String.fromCharCode(112,95,50,51,95,117,108,112,102,101,99,0)], [String.fromCharCode(115,111,99,107,95,52,95,54,54,0),String.fromCharCode(113,95,53,48,95,110,101,97,114,98,121,0)]]);
         catagoryG = new Map([[`${signinup2.length}`, 3 / (Math.max(9, signinup2.length))]]);
         blacklistE += `${(String.fromCharCode(66,0) == blacklistE ? blacklistE.length : entryA.size)}`;
         entryA = new Map([[`${entryA.size}`, blacklistE.length]]);
         acceptedY = !overlayM || signinup2.length == 89;
          let langr = String.fromCharCode(110,95,52,49,95,100,105,103,105,116,0);
         clockx = checkboxX.length >= catagoryG.size;
         langr = `${langr.length}`;
      for (let a = 0; a < 3; a++) {
         sourceX *= parseFloat(`${checkboxX.length | 2}`);
      }
         sourceX += parseFloat(`${3}`);
         signinup2 = [(parseInt(`${sourceX}`) & (overlayM ? 1 : 3))];
      let activity7 = overlayM ? !overlayM : overlayM;
      do {
         overlayM = checkboxX.length < 79;
         if (activity7) {
            break;
         }
      } while (activity7 && (sourceX >= 3.95));
          let const_kP = 3.0;
         catagoryG = new Map([[`${const_kP}`, ((acceptedY ? 1 : 3) ^ parseInt(`${const_kP}`))]]);
      componenta += "3";
      break;
   }
   let plashv = 9752292.0 <= selected0;
   do {
      selected0 *= parseInt(`${viewsP}`) ^ 1;
      if (plashv) {
         break;
      }
   } while ((teamx == 2) && plashv);
   while (inactive0) {
      inactive0 = teamx > send3.length;
      break;
   }
        const CARDS_PER_ROW = Math.floor(windowDim / cardWidth);

   if ((2 ^ teamx) == 5) {
       let targetV = String.fromCharCode(111,116,111,105,95,117,95,56,56,0);
       let streamingX = 1;
       let brightnessB = false;
       let tumbnailZ = true;
       let alert3 = true;
      let nalyticsq = alert3 ? !alert3 : alert3;
      do {
          let editr = 0;
          let tempM = String.fromCharCode(115,95,55,50,95,100,105,118,105,100,101,110,100,0);
         alert3 = tumbnailZ && editr > 34;
         editr *= 3;
         tempM += `${1 & tempM.length}`;
         if (nalyticsq) {
            break;
         }
      } while ((tumbnailZ) && nalyticsq);
      if (alert3) {
         alert3 = brightnessB;
      }
         alert3 = targetV.startsWith(`${brightnessB}`);
      for (let h = 0; h < 3; h++) {
         targetV += "2";
      }
         targetV += `${((tumbnailZ ? 2 : 4))}`;
         brightnessB = tumbnailZ;
      for (let t = 0; t < 1; t++) {
          let floatingu = true;
          let customQ: Map<any, any> = new Map([[String.fromCharCode(110,95,53,49,95,101,108,97,112,115,101,100,0),262], [String.fromCharCode(99,95,57,53,95,109,97,107,101,119,116,0),200]]);
         targetV += `${1 + customQ.size}`;
         floatingu = (!floatingu ? !floatingu : floatingu);
         customQ.set(`${floatingu}`, 2);
      }
      let long_1r = tumbnailZ ? !tumbnailZ : tumbnailZ;
      do {
         tumbnailZ = String.fromCharCode(97,0) == targetV;
         if (long_1r) {
            break;
         }
      } while (long_1r && (tumbnailZ || alert3));
         streamingX &= ((tumbnailZ ? 5 : 3) % (Math.max(7, (alert3 ? 2 : 4))));
       let completeK = 1.0;
       let shirtt: Array<any> = [String.fromCharCode(103,95,54,55,95,105,115,101,109,112,116,121,0), String.fromCharCode(117,110,99,111,110,115,117,109,101,100,95,113,95,54,57,0)];
       let bannerZ: Array<any> = [502, 110, 955];
      while (alert3) {
         completeK += streamingX;
         break;
      }
         bannerZ = [((tumbnailZ ? 5 : 4) + (alert3 ? 4 : 4))];
       let faviconh = String.fromCharCode(114,115,104,105,102,116,95,48,95,52,54,0);
      let watchl = targetV == String.fromCharCode(111,52,115,55,108,108,0);
      do {
         targetV = `${parseInt(`${completeK}`)}`;
         if (watchl) {
            break;
         }
      } while ((alert3) && watchl);
      groupe = 63 > (viewsP + teamx);
   }
   while (!showr) {
       let showU: Map<any, any> = new Map([[String.fromCharCode(106,95,49,53,95,102,101,97,116,117,114,101,115,0),String.fromCharCode(110,95,56,53,95,112,111,108,105,99,101,0)], [String.fromCharCode(120,95,50,48,95,101,112,105,99,0),String.fromCharCode(111,112,101,110,95,118,95,57,54,0)], [String.fromCharCode(112,95,54,56,95,118,97,114,105,97,98,108,101,0),String.fromCharCode(117,116,103,111,105,110,103,95,112,95,56,0)]]);
       let sellI = 2;
      let goalm = 8594136 >= showU.size;
      do {
          let modal8: Map<any, any> = new Map([[String.fromCharCode(109,95,56,95,98,117,105,108,100,0),505], [String.fromCharCode(104,95,56,56,0),227]]);
          let inactive6 = 5;
         showU = new Map([[`${showU.size}`, sellI / (Math.max(showU.size, 2))]]);
         modal8 = new Map([[`${modal8.size}`, modal8.size]]);
         inactive6 *= inactive6;
         if (goalm) {
            break;
         }
      } while (((showU.size * sellI) >= 3) && goalm);
      while (!Array.from(showU.values()).includes(sellI)) {
         showU = new Map([[`${showU.size}`, 2 | sellI]]);
         break;
      }
      for (let e = 0; e < 1; e++) {
         sellI *= sellI % (Math.max(1, 4));
      }
       let usernameV = 1.0;
       let sans8 = 4.0;
       let downR: Array<any> = [215, 951, 631];
          let dplusQ4 = String.fromCharCode(99,95,51,57,95,101,110,99,108,111,115,105,110,103,0);
         downR.push(parseInt(`${usernameV}`) ^ 2);
         dplusQ4 += `${dplusQ4.length >> (Math.min(dplusQ4.length, 2))}`;
      showr = sellI >= 94;
      break;
   }
      componenta = `${((groupe ? 4 : 5))}`;
        let BTN_MARGIN_RIGHT = (windowDim - (CARDS_PER_ROW * cardWidth)) / (CARDS_PER_ROW - 1);

      viewsP /= Math.max(2, parseInt(`${successK}`));
      teamx &= parseInt(`${viewsP}`) & 3;
   while (showr) {
      showr = 30.21 >= viewsP;
      break;
   }
        if (BTN_MARGIN_RIGHT > 16) {

   let foregrounds = groupe ? !groupe : groupe;
   do {
      groupe = (showr ? delegate_bG : showr);
      if (foregrounds) {
         break;
      }
   } while (foregrounds && (2 < moon3.length));
       let assist7 = String.fromCharCode(102,95,49,52,95,109,106,112,101,103,98,0);
       let profile6 = 0.0;
      for (let t = 0; t < 1; t++) {
         profile6 -= assist7.length & parseInt(`${profile6}`);
      }
         assist7 += `${parseInt(`${profile6}`)}`;
      for (let m = 0; m < 2; m++) {
          let otherN = 2;
          let statsd = 4.0;
          let closef = 0.0;
         assist7 = `${parseInt(`${statsd}`) | parseInt(`${closef}`)}`;
         otherN &= 3;
         statsd += parseFloat(`${otherN}`);
      }
         profile6 += assist7.length;
         assist7 = `${parseInt(`${profile6}`)}`;
         assist7 = `${parseInt(`${profile6}`) & assist7.length}`;
      teamx <<= Math.min(3, Math.abs((componenta == String.fromCharCode(112,0) ? (inactive0 ? 5 : 5) : componenta.length)));
   let flippers = selected0 <= 7938185.0;
   do {
      selected0 += parseInt(`${selected0}`);
      if (flippers) {
         break;
      }
   } while ((selected0 < 2.21) && flippers);
            const excess = (BTN_MARGIN_RIGHT - 16) * (CARDS_PER_ROW - 1);

   let transferU = 7853216.0 <= viewsP;
   do {
      viewsP += ((inactive0 ? 1 : 5) % 1);
      if (transferU) {
         break;
      }
   } while ((!moon3.includes(viewsP)) && transferU);
   let macauy = 8412958 >= moon3.length;
   do {
      moon3.push(send3.length * parseInt(`${selected0}`));
      if (macauy) {
         break;
      }
   } while ((componenta.length == moon3.length) && macauy);
   for (let i = 0; i < 2; i++) {
      componenta += `${parseInt(`${viewsP}`) | 2}`;
   }
            BTN_MARGIN_RIGHT = 16;

      selected0 += 1 << (Math.min(1, componenta.length));
      showr = String.fromCharCode(88,0) == componenta;
   while (4 <= teamx) {
       let inactived = String.fromCharCode(97,95,50,48,95,97,117,100,105,111,115,101,114,118,105,99,101,116,121,112,101,0);
       let toponA = String.fromCharCode(97,95,56,55,95,109,105,110,105,109,105,122,101,97,98,108,101,0);
       let eventK = 4.0;
       let privilegeE = true;
       let morep: Map<any, any> = new Map([[String.fromCharCode(114,95,57,57,95,114,101,119,97,114,100,115,0),String.fromCharCode(101,110,116,105,116,105,101,115,95,100,95,53,49,0)], [String.fromCharCode(112,111,112,117,108,97,116,101,100,95,55,95,57,50,0),String.fromCharCode(104,119,100,101,118,105,99,101,95,100,95,55,56,0)]]);
      while (toponA.length >= 2) {
         inactived += `${morep.size}`;
         break;
      }
       let orangeT: Map<any, any> = new Map([[String.fromCharCode(101,120,116,101,110,115,105,98,105,108,105,116,121,95,49,95,48,0),513], [String.fromCharCode(119,95,50,51,95,112,97,110,100,105,110,103,0),722], [String.fromCharCode(105,95,56,54,95,97,99,100,115,112,0),751]]);
      for (let y = 0; y < 3; y++) {
         privilegeE = !privilegeE || toponA.length > 60;
      }
      let datax = toponA.length <= 9325782;
      do {
          let backU: Array<any> = [String.fromCharCode(122,95,49,55,95,103,101,116,116,101,114,0), String.fromCharCode(112,105,118,111,116,95,121,95,50,52,0), String.fromCharCode(106,95,53,48,95,115,104,111,114,116,101,115,116,0)];
         toponA += `${backU.length}`;
         if (datax) {
            break;
         }
      } while (datax && (inactived == String.fromCharCode(89,0)));
      for (let a = 0; a < 2; a++) {
          let darke: Map<any, any> = new Map([[String.fromCharCode(103,110,111,115,105,115,95,105,95,52,0),832], [String.fromCharCode(108,111,103,111,95,57,95,56,52,0),311]]);
          let langkeyi = 5.0;
          let paginationw = 4.0;
         toponA += `${1 | inactived.length}`;
         darke.set(`${langkeyi}`, darke.size);
         langkeyi += parseFloat(`${2 << (Math.min(3, Math.abs(parseInt(`${langkeyi}`))))}`);
         paginationw -= parseFloat(`${3 / (Math.max(1, parseInt(`${langkeyi}`)))}`);
      }
      let catalogC = privilegeE ? !privilegeE : privilegeE;
      do {
         privilegeE = inactived.length > toponA.length;
         if (catalogC) {
            break;
         }
      } while ((!privilegeE) && catalogC);
         orangeT.set(`${inactived}`, morep.size);
       let holderb = String.fromCharCode(110,95,51,53,95,115,113,108,105,116,101,112,97,103,101,114,0);
       let watchA = String.fromCharCode(119,101,98,109,95,100,95,57,57,0);
      let long_x_Z = 8783913 >= inactived.length;
      do {
          let ping1 = String.fromCharCode(114,95,55,57,95,115,119,105,116,99,104,0);
          let guideI = 4;
          let notificationx: Array<any> = [52, 459];
          let episodesL = String.fromCharCode(101,99,116,97,110,103,108,101,95,113,95,49,48,0);
          let agreementz = String.fromCharCode(121,95,56,54,95,97,112,112,114,111,120,0);
         inactived += `${ping1.length ^ parseInt(`${eventK}`)}`;
         ping1 = `${(String.fromCharCode(122,0) == agreementz ? agreementz.length : guideI)}`;
         guideI >>= Math.min(2, Math.abs(1));
         notificationx.push(agreementz.length ^ episodesL.length);
         episodesL = `${guideI + episodesL.length}`;
         if (long_x_Z) {
            break;
         }
      } while (long_x_Z && (toponA.length >= inactived.length));
      for (let i = 0; i < 3; i++) {
         inactived = "3";
      }
      for (let o = 0; o < 3; o++) {
          let matchh = 4;
          let modelsE: Map<any, any> = new Map([[String.fromCharCode(117,95,54,57,95,99,111,110,99,101,97,108,109,101,110,116,0),550], [String.fromCharCode(112,101,110,100,105,110,103,95,51,95,53,50,0),228]]);
          let corei = 3;
          let bellT = 3.0;
          let sortZ = 3.0;
         toponA += `${parseInt(`${eventK}`) ^ 3}`;
         matchh += corei;
         modelsE = new Map([[`${matchh}`, 3 << (Math.min(Math.abs(parseInt(`${bellT}`)), 4))]]);
         bellT /= Math.max(matchh, 3);
         sortZ -= parseFloat(`${modelsE.size}`);
      }
      if (watchA.length == 1) {
         watchA += `${orangeT.size << (Math.min(inactived.length, 5))}`;
      }
      if (4.60 == (eventK / (Math.max(1, orangeT.size)))) {
         eventK /= Math.max(5, 1 << (Math.min(1, inactived.length)));
      }
      while (orangeT.size <= toponA.length) {
         orangeT = new Map([[toponA, inactived.length % 2]]);
         break;
      }
          let flipperL = true;
          let blackR = true;
         holderb = `${parseInt(`${eventK}`)}`;
         flipperL = !blackR;
         blackR = flipperL;
      teamx /= Math.max(2, 2);
      break;
   }
            cardWidth += Math.floor(excess / CARDS_PER_ROW)
        }

        setCardsPerRow(CARDS_PER_ROW);

      loadingt = "3";
   while ((1 & componenta.length) > 3 && 5.32 > (selected0 * 4.43)) {
      componenta = "2";
      break;
   }
      inactive0 = !loadingt.startsWith(`${groupe}`);
        setMarginRight(BTN_MARGIN_RIGHT);

      delegate_bG = !inactive0;
   let orientationg = inactive0 ? !inactive0 : inactive0;
   do {
       let langkeyJ = 3.0;
         langkeyJ += 2 << (Math.min(Math.abs(parseInt(`${langkeyJ}`)), 1));
      if (5.28 < langkeyJ) {
         langkeyJ -= 2 + parseInt(`${langkeyJ}`);
      }
         langkeyJ -= parseInt(`${langkeyJ}`) - 3;
      inactive0 = (inactive0 ? !delegate_bG : inactive0);
      if (orientationg) {
         break;
      }
   } while ((groupe) && orientationg);
   for (let g = 0; g < 1; g++) {
      viewsP /= Math.max(((groupe ? 4 : 2)), 1);
   }
        setCardWidth(cardWidth);

   let tumbnail2 = viewsP <= 7309001.0;
   do {
      viewsP /= Math.max(2, parseInt(`${viewsP}`) | 3);
      if (tumbnail2) {
         break;
      }
   } while (tumbnail2 && ((3.30 - viewsP) > 5.30));
      inactive0 = !inactive0;
       let downloadG = String.fromCharCode(117,97,100,100,95,119,95,54,51,0);
       let roomP = String.fromCharCode(100,105,115,116,114,105,98,117,116,101,100,95,119,95,51,49,0);
       let bufferh = String.fromCharCode(119,111,114,107,101,114,95,122,95,56,49,0);
      while (!downloadG.includes(`${roomP.length}`)) {
         roomP += `${downloadG.length}`;
         break;
      }
      if (!roomP.startsWith(`${downloadG.length}`)) {
         roomP = `${(roomP == String.fromCharCode(57,0) ? roomP.length : downloadG.length)}`;
      }
          let linkR = String.fromCharCode(98,101,116,97,95,99,95,49,48,0);
         downloadG = `${linkR.length}`;
       let styleG = 4.0;
       let entryX = 2.0;
      while (2.3 > (styleG + parseFloat(`${bufferh.length}`)) && (2 ^ bufferh.length) > 3) {
         styleG -= parseFloat(`${parseInt(`${styleG}`) | bufferh.length}`);
         break;
      }
       let detailsQ = String.fromCharCode(105,110,116,114,105,110,115,105,99,95,103,95,52,50,0);
      for (let n = 0; n < 1; n++) {
          let holderT = 2;
          let filter0: Array<any> = [19, 908];
          let detailH = false;
          let zoomx = true;
          let sheet5 = String.fromCharCode(115,101,113,95,102,95,55,53,0);
         roomP = `${2 * downloadG.length}`;
         holderT |= 3;
         filter0 = [((detailH ? 1 : 4))];
         detailH = (detailH ? zoomx : detailH);
         sheet5 = `${((detailH ? 2 : 5))}`;
      }
      while (detailsQ == String.fromCharCode(122,0)) {
         roomP += `${detailsQ.length / 2}`;
         break;
      }
         styleG -= parseFloat(`${bufferh.length & roomP.length}`);
      moon3 = [loadingt.length / (Math.max(1, 6))];
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