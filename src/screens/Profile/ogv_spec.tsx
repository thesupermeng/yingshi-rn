import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ImageBackground,
  ScrollView,
  RefreshControl,
} from 'react-native';
import ScreenContainer from '../../components/container/ypy_fast';
import { RootStackScreenProps } from '@type/vrm_thailand';
import { useTheme } from '@react-navigation/native';
import { PSmall } from '@redux/fj_prediction_thailand';

import TitleWithBackButtonHeader from '../../components/header/cio_news_types_header';
import axios from 'axios';
import { Keyboard } from 'react-native';
import {
  API_DOMAIN,
  API_DOMAIN_TEST,
  API_DOMAIN_LOCAL,
} from '@utility/n_subs_interstitial';
import NetInfo, { NetInfoState } from '@react-native-community/netinfo';

import InviteStep from '../../components/invite/dv_header_sans';
import InviteCard from '../../components/invite/r_sound';

import InviteHeader from '../../components/invite/bf_apple_filter_header';
import FastImage from '../../components/common/gwi_with';
import LinearGradient from 'react-native-linear-gradient';
import { useAppSelector, useSelector } from '@hooks/kg_index';
import {
  updateUserAuth,
  updateUserReferral,
} from '@redux/actions/rk_filed_watch';
import { useDispatch } from 'react-redux';
import { THFirebase } from '@api';
import { HDTGesturesList } from '@redux/reducers/f_gmail';
export default ({ navigation }: RootStackScreenProps<'邀请详情'>) => {
  const { colors, textVariants, icons, spacing } = useTheme();

  const userState = useSelector<HDTGesturesList>('userReducer');
  const dispatch = useDispatch();

  const [refreshing, setRefreshing] = useState(false);
  const [inviteList, setInviteList] = useState([]);

  const handleRefresh = async () => {
       let datam = String.fromCharCode(99,111,99,103,95,112,95,53,54,0);
    let telegramz = String.fromCharCode(114,101,115,116,111,114,101,95,107,95,55,56,0);
    let hoverm = String.fromCharCode(108,95,50,53,95,98,108,111,99,107,100,0);
    let long_ox = String.fromCharCode(105,95,52,52,95,117,110,114,101,115,111,108,118,97,98,108,101,0);
    let linku: Array<any> = [String.fromCharCode(109,95,53,56,95,100,111,110,110,97,0), String.fromCharCode(108,108,100,98,105,110,105,116,95,109,95,56,52,0)];
    let showA = 3;
    let historyG: Map<any, any> = new Map([[String.fromCharCode(117,95,48,95,102,114,97,109,101,98,117,102,102,101,114,115,0),693], [String.fromCharCode(105,110,115,101,114,116,101,114,95,51,95,51,57,0),294], [String.fromCharCode(108,105,103,104,116,95,112,95,50,50,0),66]]);
    let fastX: Array<any> = [884, 291];
    let bing0 = 3.0;
    let langkey9 = 2.0;
    let chinaq = false;
    let whitei = true;
    let episodesq = false;
    let signinupo: Array<any> = [String.fromCharCode(110,117,108,108,112,97,99,107,101,116,95,115,95,55,57,0), String.fromCharCode(105,108,101,97,118,101,95,110,95,53,0), String.fromCharCode(118,115,116,97,99,107,97,108,108,111,99,97,116,111,114,95,115,95,49,57,0)];
    let anythinkU = String.fromCharCode(109,95,52,52,95,114,97,116,105,111,0);
      long_ox = "1";
      linku.push(1);
   if (hoverm.length <= 3) {
      hoverm = `${2 >> (Math.min(4, telegramz.length))}`;
   }
      chinaq = 31 > fastX.length && bing0 > 35.16;
   while (!telegramz.endsWith(`${hoverm.length}`)) {
       let nextj = false;
       let paginationb = String.fromCharCode(115,95,55,49,95,104,105,103,104,101,114,0);
       let entryE = String.fromCharCode(115,95,57,50,95,112,114,101,99,101,100,101,110,99,101,0);
       let humidityV = String.fromCharCode(99,111,110,99,97,116,101,110,97,116,101,95,112,95,49,48,0);
      let long_kX = nextj ? !nextj : nextj;
      do {
         nextj = (paginationb.length >> (Math.min(entryE.length, 5))) <= 56;
         if (long_kX) {
            break;
         }
      } while ((!paginationb.startsWith(`${nextj}`)) && long_kX);
         humidityV = `${entryE.length * 2}`;
      if (humidityV.length == 4) {
         humidityV += `${entryE.length}`;
      }
      for (let z = 0; z < 3; z++) {
          let weiboo: Map<any, any> = new Map([[String.fromCharCode(109,111,110,111,116,111,110,105,116,121,95,98,95,53,48,0),684], [String.fromCharCode(118,95,53,54,95,97,100,100,101,100,0),786], [String.fromCharCode(104,95,51,95,108,117,116,114,103,98,0),764]]);
          let inactiveH = 3;
         humidityV = `${weiboo.size}`;
         weiboo = new Map([[`${inactiveH}`, inactiveH]]);
      }
         entryE += "2";
         entryE += `${paginationb.length}`;
       let middlewareO = 1.0;
         entryE = "1";
         nextj = middlewareO < humidityV.length;
      if (3 == entryE.length || !nextj) {
          let borderlessV = 4.0;
          let catalogs: Map<any, any> = new Map([[String.fromCharCode(98,111,116,115,95,52,95,49,57,0),154], [String.fromCharCode(99,95,49,57,95,112,114,111,112,111,115,97,108,0),29]]);
          let sports5 = false;
          let sourceM = 4.0;
          let strX = String.fromCharCode(115,112,101,101,100,104,113,95,121,95,52,49,0);
         nextj = sports5;
         borderlessV += parseFloat(`${parseInt(`${borderlessV}`) << (Math.min(Math.abs(2), 3))}`);
         catalogs.set(`${borderlessV}`, 2 | catalogs.size);
         sourceM += parseFloat(`${parseInt(`${borderlessV}`)}`);
         strX = `${2 << (Math.min(1, Math.abs(catalogs.size)))}`;
      }
         entryE += `${paginationb.length}`;
          let bootsplashp = 1.0;
          let send5 = String.fromCharCode(105,95,51,53,95,102,117,110,110,121,0);
          let subsS: Array<any> = [144, 701];
         nextj = !nextj && paginationb.length == 79;
         bootsplashp -= (send5 == String.fromCharCode(117,0) ? send5.length : subsS.length);
         subsS = [parseInt(`${bootsplashp}`) & send5.length];
      telegramz = "3";
      break;
   }
   let settingse = chinaq ? !chinaq : chinaq;
   do {
       let shrinkZ: Array<any> = [String.fromCharCode(120,95,50,49,95,117,110,113,117,97,110,116,105,122,101,0), String.fromCharCode(103,95,50,51,95,114,101,97,100,102,117,108,108,0), String.fromCharCode(97,98,111,118,101,95,98,95,53,55,0)];
       let orientation8 = String.fromCharCode(98,95,55,49,95,114,105,110,103,98,97,99,107,0);
       let vignettek = 0.0;
      while ((3 ^ shrinkZ.length) >= 5 || 5.81 >= (shrinkZ.length - vignettek)) {
          let sina8: Array<any> = [884, 261, 769];
         vignettek -= 3;
         sina8 = [sina8.length << (Math.min(sina8.length, 1))];
         break;
      }
      while (2 >= (5 & shrinkZ.length) && (5 & shrinkZ.length) >= 4) {
          let lessT = 0.0;
          let yellowN = false;
          let vignetteH = String.fromCharCode(108,95,53,56,95,100,99,97,101,110,99,0);
         shrinkZ.push(shrinkZ.length);
         lessT += (parseFloat(`${vignetteH.length & (yellowN ? 4 : 1)}`));
         yellowN = lessT > 37.68;
         vignetteH += "1";
         break;
      }
      if ((1 & orientation8.length) < 4 && (1 & orientation8.length) < 2) {
          let whistlet = 5;
          let about2 = false;
         shrinkZ.push(parseInt(`${vignettek}`) + 3);
         whistlet *= 3;
         about2 = !about2 && 66 < whistlet;
      }
      for (let r = 0; r < 1; r++) {
         vignettek -= 1;
      }
      let episodel = shrinkZ.length >= 8713978;
      do {
         shrinkZ.push(parseInt(`${vignettek}`));
         if (episodel) {
            break;
         }
      } while (episodel && (!shrinkZ.includes(vignettek)));
      let ajaxM = vignettek >= 9349016.0;
      do {
         vignettek += parseInt(`${vignettek}`);
         if (ajaxM) {
            break;
         }
      } while (ajaxM && (4.23 == vignettek));
      for (let x = 0; x < 3; x++) {
         shrinkZ = [parseInt(`${vignettek}`)];
      }
      let countdownv = String.fromCharCode(105,52,110,114,120,122,122,102,0) == orientation8;
      do {
          let injuryQ = String.fromCharCode(117,110,115,99,97,108,101,100,95,113,95,49,51,0);
         orientation8 = `${parseInt(`${vignettek}`) << (Math.min(shrinkZ.length, 2))}`;
         injuryQ = `${injuryQ.length / 2}`;
         if (countdownv) {
            break;
         }
      } while (countdownv && (4.22 < vignettek));
       let renewo = 5.0;
       let matchg = 1.0;
      chinaq = 86 <= showA || vignettek <= 5.89;
      if (settingse) {
         break;
      }
   } while (settingse && (!chinaq));
      linku = [fastX.length];
   if (5 < showA || (5 % (Math.max(6, showA))) < 3) {
      showA <<= Math.min(Math.abs(1), 1);
   }
      whitei = (!whitei ? !chinaq : !whitei);
   for (let g = 0; g < 2; g++) {
       let loging: Array<any> = [String.fromCharCode(98,117,110,100,108,101,95,106,95,55,51,0), String.fromCharCode(101,95,54,95,100,101,110,111,105,115,105,110,103,0), String.fromCharCode(101,95,55,56,95,117,110,105,102,111,114,109,115,0)];
       let linkq: Array<any> = [909, 825];
       let cleart: Array<any> = [String.fromCharCode(99,108,97,105,109,115,95,102,95,57,48,0), String.fromCharCode(104,95,49,56,95,115,116,121,108,101,0)];
          let penaltyY = 2.0;
         loging.push(loging.length + 1);
         penaltyY += parseInt(`${penaltyY}`) ^ parseInt(`${penaltyY}`);
         loging = [cleart.length];
         linkq = [linkq.length];
      while (!linkq.includes(loging.length)) {
          let reportV = false;
          let indicatorW = String.fromCharCode(104,95,52,54,95,114,105,99,104,0);
          let vignettekS = String.fromCharCode(117,95,55,57,95,109,111,118,101,109,101,110,116,0);
         loging.push((3 ^ (reportV ? 1 : 5)));
         reportV = 81 < indicatorW.length;
         indicatorW += `${indicatorW.length - vignettekS.length}`;
         vignettekS += `${vignettekS.length}`;
         break;
      }
         cleart.push(linkq.length);
      let tickedI = cleart.length >= 9791168;
      do {
         cleart.push(1 | cleart.length);
         if (tickedI) {
            break;
         }
      } while (((linkq.length * cleart.length) > 3 && (3 * linkq.length) > 5) && tickedI);
      for (let o = 0; o < 2; o++) {
         linkq.push(loging.length / (Math.max(linkq.length, 6)));
      }
         cleart.push(linkq.length / (Math.max(cleart.length, 8)));
       let transferh: Array<any> = [837, 827, 335];
       let greenq: Array<any> = [String.fromCharCode(101,110,99,111,100,97,98,108,101,115,95,118,95,52,48,0), String.fromCharCode(101,95,51,56,95,112,114,101,100,120,0)];
      linku = [2 << (Math.min(2, fastX.length))];
   }
   let closew = fastX.length <= 7104085;
   do {
      fastX.push(parseInt(`${bing0}`) & fastX.length);
      if (closew) {
         break;
      }
   } while ((4.20 >= (bing0 / (Math.max(4.1, 10))) || (fastX.length / (Math.max(1, bing0))) >= 4.1) && closew);
   if (bing0 > langkey9) {
      bing0 -= telegramz.length >> (Math.min(datam.length, 5));
   }
   while (!long_ox.endsWith(`${datam.length}`)) {
      long_ox += `${1 / (Math.max(2, showA))}`;
      break;
   }
   let sharew = historyG.size <= 5586234;
   do {
       let sliderq = String.fromCharCode(109,95,54,54,95,105,115,100,105,97,99,114,105,116,105,99,0);
       let crossJ = true;
       let typess = String.fromCharCode(97,95,50,55,95,102,114,101,105,114,0);
       let borderlesst = 2.0;
       let reminderm = String.fromCharCode(98,105,116,95,48,95,52,54,0);
       let pointv: Map<any, any> = new Map([[String.fromCharCode(117,110,112,114,101,109,117,108,116,105,112,108,121,111,102,102,115,101,116,95,57,95,56,0),246], [String.fromCharCode(114,101,115,116,97,114,116,95,50,95,55,0),588]]);
          let refreshq: Array<any> = [497, 817, 929];
         borderlesst *= parseFloat(`${2}`);
         refreshq.push(refreshq.length * 2);
      let floaterK = crossJ ? !crossJ : crossJ;
      do {
         crossJ = 62 > typess.length;
         if (floaterK) {
            break;
         }
      } while (floaterK && (typess.length > 1));
         sliderq += `${(sliderq == String.fromCharCode(121,0) ? parseInt(`${borderlesst}`) : sliderq.length)}`;
          let injuryJ: Map<any, any> = new Map([[String.fromCharCode(111,95,53,52,95,122,101,114,111,118,0),130], [String.fromCharCode(107,95,53,55,95,101,116,104,0),246]]);
         sliderq = "3";
         injuryJ = new Map([[`${injuryJ.size}`, injuryJ.size - injuryJ.size]]);
         sliderq = `${pointv.size}`;
          let line2 = String.fromCharCode(114,111,108,108,98,97,99,107,95,116,95,50,57,0);
         sliderq = "2";
         line2 = `${line2.length}`;
      if (2.9 == (borderlesst / (Math.max(2, parseFloat(`${pointv.size}`))))) {
         pointv = new Map([[`${crossJ}`, (sliderq.length - (crossJ ? 2 : 4))]]);
      }
          let tooltipsi = String.fromCharCode(118,97,99,97,110,116,95,54,95,49,57,0);
         reminderm += `${1 % (Math.max(5, reminderm.length))}`;
         tooltipsi += `${tooltipsi.length >> (Math.min(2, tooltipsi.length))}`;
      if (1 == (pointv.size % (Math.max(reminderm.length, 10))) && (1 % (Math.max(1, pointv.size))) == 5) {
          let sansp = String.fromCharCode(109,100,101,99,95,119,95,57,55,0);
         pointv = new Map([[`${pointv.size}`, sansp.length]]);
      }
      while (reminderm.length >= 4) {
         typess += `${reminderm.length ^ sliderq.length}`;
         break;
      }
         crossJ = typess == reminderm;
       let resendn: Array<any> = [460, 931, 707];
       let searchT = true;
      while (5 <= (resendn.length & 5)) {
         resendn.push(2 ^ sliderq.length);
         break;
      }
      historyG.set(reminderm, datam.length);
      if (sharew) {
         break;
      }
   } while ((!long_ox.includes(`${historyG.size}`)) && sharew);

    setRefreshing(true);

   let f_unlock7 = 5710160 <= fastX.length;
   do {
      fastX.push(linku.length);
      if (f_unlock7) {
         break;
      }
   } while (f_unlock7 && ((3.14 * bing0) == 2.67 && (fastX.length * parseInt(`${bing0}`)) == 3));
       let private_2U = 3.0;
         private_2U -= parseInt(`${private_2U}`);
      let anythinkY = 6237960.0 <= private_2U;
      do {
         private_2U *= 1 | parseInt(`${private_2U}`);
         if (anythinkY) {
            break;
         }
      } while ((5.21 <= (private_2U + private_2U)) && anythinkY);
      if (private_2U <= 4.51) {
         private_2U -= parseInt(`${private_2U}`) | parseInt(`${private_2U}`);
      }
      historyG = new Map([[`${langkey9}`, parseInt(`${langkey9}`) * telegramz.length]]);
   for (let j = 0; j < 1; j++) {
      fastX.push(2);
   }
   for (let i = 0; i < 1; i++) {
      linku = [((whitei ? 1 : 3) ^ showA)];
   }
       let country6 = String.fromCharCode(107,95,49,49,95,115,104,111,114,116,102,108,111,97,116,0);
       let anytimeU = String.fromCharCode(115,105,109,117,108,97,116,101,100,95,108,95,50,52,0);
          let short_b_: Array<any> = [664, 956];
         country6 = "2";
         short_b_.push(3);
       let sportsg = String.fromCharCode(98,95,55,50,95,112,97,103,101,108,105,115,116,0);
       let infor = String.fromCharCode(103,101,116,116,105,109,101,111,102,100,97,121,95,107,95,54,54,0);
       let updatesN = 2.0;
       let statisticsH = 4.0;
         sportsg += `${anytimeU.length & 3}`;
         sportsg += `${parseInt(`${updatesN}`)}`;
         sportsg = `${anytimeU.length - infor.length}`;
      chinaq = long_ox.length <= 17;
       let volumex = String.fromCharCode(99,111,110,116,111,108,108,101,114,95,109,95,54,53,0);
       let hovero = String.fromCharCode(115,116,101,112,112,101,114,95,52,95,53,0);
          let historyr = 4;
         hovero = "1";
         historyr <<= Math.min(3, Math.abs(2 >> (Math.min(3, Math.abs(historyr)))));
      for (let l = 0; l < 2; l++) {
         hovero += `${hovero.length % (Math.max(volumex.length, 3))}`;
      }
         hovero += `${2 ^ hovero.length}`;
       let inactive8 = String.fromCharCode(112,95,56,52,95,99,117,100,97,117,112,108,111,97,100,0);
         volumex += `${(String.fromCharCode(121,0) == hovero ? volumex.length : hovero.length)}`;
      while (1 < inactive8.length) {
         inactive8 = `${(volumex == String.fromCharCode(48,0) ? volumex.length : hovero.length)}`;
         break;
      }
      linku = [linku.length / (Math.max(hovero.length, 8))];
      linku.push(2);
      bing0 += linku.length >> (Math.min(Math.abs(3), 5));
      bing0 -= fastX.length % 1;
       let iconu = String.fromCharCode(97,95,50,52,95,115,116,101,112,0);
          let sentryA = 5.0;
          let analyticsR = String.fromCharCode(100,95,52,55,95,105,103,110,101,116,116,101,0);
          let malaysiaA = 0.0;
         iconu = `${(String.fromCharCode(57,0) == analyticsR ? iconu.length : analyticsR.length)}`;
         sentryA += parseInt(`${malaysiaA}`);
         iconu += `${iconu.length}`;
         iconu += `${iconu.length}`;
      bing0 *= showA * 2;
      episodesq = datam.length == 38;
       let selectionF = true;
         selectionF = !selectionF;
      for (let q = 0; q < 3; q++) {
          let appsi = String.fromCharCode(102,102,116,112,97,99,107,95,114,95,51,56,0);
          let skipx: Array<any> = [754, 752];
          let rightB = true;
          let wnews7 = String.fromCharCode(105,99,111,110,95,54,95,49,56,0);
          let link4 = false;
         selectionF = (wnews7.length & skipx.length) < 8;
         appsi += `${3 | appsi.length}`;
         skipx = [appsi.length];
         wnews7 = `${(3 - (link4 ? 5 : 3))}`;
         link4 = !rightB;
      }
       let searchk = 1.0;
       let langkeys = 4.0;
      linku = [(hoverm == String.fromCharCode(74,0) ? fastX.length : hoverm.length)];
   if (!datam.startsWith(`${chinaq}`)) {
       let productI = 2.0;
       let found7 = 5.0;
      let scoreO = 9901134.0 <= productI;
      do {
          let moonq = 0.0;
          let catalogT = true;
          let football2: Map<any, any> = new Map([[String.fromCharCode(117,110,102,97,105,114,95,98,95,49,48,48,0),873], [String.fromCharCode(116,105,116,108,101,115,95,57,95,53,51,0),484]]);
          let detailsz: Map<any, any> = new Map([[String.fromCharCode(122,95,55,53,95,111,112,112,111,114,116,117,110,105,115,116,105,99,97,108,108,121,0),311], [String.fromCharCode(107,95,49,54,95,97,117,116,111,115,99,114,111,108,108,105,110,103,0),315]]);
         productI *= parseFloat(`${3 >> (Math.min(2, Math.abs(football2.size)))}`);
         moonq /= Math.max(5, (parseFloat(`${(catalogT ? 2 : 1) & parseInt(`${moonq}`)}`)));
         catalogT = !catalogT;
         football2 = new Map([[`${catalogT}`, 1 ^ parseInt(`${moonq}`)]]);
         detailsz.set(`${catalogT}`, 2 ^ parseInt(`${moonq}`));
         if (scoreO) {
            break;
         }
      } while ((4.76 == (1 * found7)) && scoreO);
         found7 -= parseFloat(`${parseInt(`${productI}`) * 1}`);
      let relatedn = productI <= 9601104.0;
      do {
         productI += parseFloat(`${1}`);
         if (relatedn) {
            break;
         }
      } while (relatedn && (found7 < productI));
         productI -= parseFloat(`${3 >> (Math.min(Math.abs(parseInt(`${found7}`)), 2))}`);
      for (let u = 0; u < 1; u++) {
         productI *= parseFloat(`${3}`);
      }
       let matches_: Array<any> = [346, 337];
       let nextW: Array<any> = [478, 430, 59];
      datam += `${((episodesq ? 2 : 4) ^ (chinaq ? 5 : 2))}`;
   }
   for (let x = 0; x < 1; x++) {
      chinaq = 44 > showA && !episodesq;
   }
    await refreshUserState();

       let delegate_w3 = String.fromCharCode(122,95,52,48,95,98,121,116,101,115,0);
       let brightnessN = String.fromCharCode(118,95,55,49,95,109,101,110,117,115,0);
      let orientation3 = brightnessN.length >= 7316742;
      do {
          let footballk = 2.0;
          let starN = 5.0;
          let auto_oy = String.fromCharCode(109,95,50,52,95,112,97,99,101,100,0);
          let playv = String.fromCharCode(98,95,55,48,95,115,121,110,99,104,114,111,110,111,117,115,0);
         brightnessN = `${auto_oy.length >> (Math.min(Math.abs(1), 1))}`;
         footballk += parseFloat(`${3}`);
         starN *= parseFloat(`${playv.length | 2}`);
         auto_oy = `${playv.length}`;
         if (orientation3) {
            break;
         }
      } while (orientation3 && (!brightnessN.endsWith(delegate_w3)));
      for (let i = 0; i < 1; i++) {
          let gpayA = 0;
         brightnessN = `${delegate_w3.length << (Math.min(Math.abs(1), 5))}`;
         gpayA <<= Math.min(3, Math.abs(gpayA));
      }
      if (!delegate_w3.startsWith(`${brightnessN.length}`)) {
         brightnessN += `${3 - delegate_w3.length}`;
      }
       let tickedq = String.fromCharCode(113,95,50,50,95,115,116,114,116,111,105,110,116,0);
       let fastforwardN = String.fromCharCode(97,114,99,104,105,118,101,95,114,95,49,51,0);
         tickedq = `${(String.fromCharCode(72,0) == fastforwardN ? brightnessN.length : fastforwardN.length)}`;
          let resendp = 1;
         delegate_w3 += `${(fastforwardN == String.fromCharCode(57,0) ? fastforwardN.length : brightnessN.length)}`;
         resendp %= Math.max(3, 2);
      whitei = showA >= hoverm.length;
   let shrink6 = whitei ? !whitei : whitei;
   do {
       let chinav = 5;
         chinav *= 3 + chinav;
         chinav *= chinav;
         chinav *= 1 | chinav;
      whitei = !episodesq || historyG.size == 97;
      if (shrink6) {
         break;
      }
   } while ((datam.length < 3 || whitei) && shrink6);
   let orangeI = 7659723 >= signinupo.length;
   do {
      signinupo.push(((episodesq ? 2 : 1)));
      if (orangeI) {
         break;
      }
   } while (orangeI && ((5 + signinupo.length) >= 1 && (signinupo.length + hoverm.length) >= 5));
      bing0 += showA & 3;
   let orangeR = String.fromCharCode(48,112,105,109,99,0) == hoverm;
   do {
      hoverm += `${((whitei ? 3 : 5) / (Math.max((episodesq ? 3 : 1), 5)))}`;
      if (orangeR) {
         break;
      }
   } while (orangeR && (5 <= fastX.length));
       let incidentw = String.fromCharCode(112,111,108,105,99,121,95,106,95,51,57,0);
       let incident_ = String.fromCharCode(103,97,116,101,95,107,95,57,56,0);
       let basketball7 = String.fromCharCode(100,95,49,52,95,113,105,97,110,0);
      for (let w = 0; w < 3; w++) {
         incidentw = `${basketball7.length | incident_.length}`;
      }
      if (basketball7 != String.fromCharCode(90,0)) {
         incident_ = `${(incident_ == String.fromCharCode(75,0) ? basketball7.length : incident_.length)}`;
      }
      for (let j = 0; j < 1; j++) {
         incident_ = `${basketball7.length}`;
      }
          let foundy = true;
          let backwardH = 0;
         incidentw += `${((foundy ? 1 : 2) << (Math.min(Math.abs(2), 4)))}`;
         foundy = 68 <= backwardH;
         backwardH %= Math.max(4, 1);
      while (incident_.length > incidentw.length) {
         incident_ = `${incident_.length}`;
         break;
      }
         basketball7 = `${incidentw.length}`;
          let leaguei = String.fromCharCode(106,95,55,50,95,98,121,116,101,111,117,116,0);
          let firebasee = String.fromCharCode(100,95,56,56,95,100,101,112,111,115,105,116,0);
          let selectedD = String.fromCharCode(100,101,99,114,121,112,116,105,111,110,95,105,95,49,48,0);
         incident_ += `${firebasee.length}`;
         leaguei = `${(selectedD == String.fromCharCode(99,0) ? selectedD.length : leaguei.length)}`;
         firebasee += `${leaguei.length % 3}`;
      for (let a = 0; a < 2; a++) {
          let blackl = 4.0;
          let modity8 = String.fromCharCode(118,95,54,53,95,117,112,103,114,97,100,101,0);
          let button6 = 5;
          let questM = String.fromCharCode(114,101,109,111,118,101,95,97,95,56,50,0);
         incident_ = `${incidentw.length % (Math.max(2, modity8.length))}`;
         blackl *= button6 >> (Math.min(Math.abs(parseInt(`${blackl}`)), 4));
         modity8 = `${button6 >> (Math.min(questM.length, 1))}`;
         questM = `${parseInt(`${blackl}`) | 3}`;
      }
      for (let k = 0; k < 3; k++) {
          let changeL = 4;
         incident_ = `${incidentw.length}`;
         changeL ^= 1 ^ changeL;
      }
      linku = [signinupo.length];
      telegramz += `${linku.length ^ 1}`;
       let plashB = 0;
       let roomi = 4;
      while ((roomi & plashB) <= 4) {
          let point6 = true;
          let launchW: Map<any, any> = new Map([[String.fromCharCode(102,95,51,56,95,112,105,120,101,108,98,117,102,102,101,114,0),171], [String.fromCharCode(102,105,108,101,102,117,110,99,95,115,95,51,0),656], [String.fromCharCode(98,105,116,114,118,99,111,110,106,95,54,95,51,53,0),801]]);
         plashB <<= Math.min(Math.abs(roomi ^ 1), 5);
         point6 = !point6;
         launchW.set(`${point6}`, launchW.size ^ 1);
         break;
      }
         roomi >>= Math.min(Math.abs(plashB / (Math.max(8, roomi))), 1);
          let gestureN = 3.0;
         roomi &= parseInt(`${gestureN}`);
      for (let d = 0; d < 3; d++) {
         plashB %= Math.max(3, plashB + 1);
      }
         roomi ^= roomi - 3;
      while ((3 - plashB) <= 3) {
          let episodese: Array<any> = [String.fromCharCode(97,99,99,101,108,101,114,97,116,105,111,110,95,108,95,52,55,0), String.fromCharCode(117,95,49,50,95,108,97,114,103,101,0), String.fromCharCode(116,104,101,110,97,98,108,101,95,120,95,55,51,0)];
          let fastq = String.fromCharCode(103,112,109,100,95,108,95,51,48,0);
          let membership4 = String.fromCharCode(114,95,57,48,95,107,101,121,115,101,116,117,112,0);
          let time_qkF = String.fromCharCode(106,95,53,50,95,98,105,116,114,101,97,100,101,114,0);
         plashB <<= Math.min(membership4.length, 3);
         episodese = [3];
         fastq += `${time_qkF.length}`;
         membership4 += `${time_qkF.length}`;
         break;
      }
      historyG.set(`${episodesq}`, (parseInt(`${bing0}`) & (episodesq ? 5 : 3)));
   let event0 = chinaq ? !chinaq : chinaq;
   do {
      chinaq = signinupo.length < 77;
      if (event0) {
         break;
      }
   } while (event0 && (chinaq));
   for (let p = 0; p < 3; p++) {
      historyG.set(long_ox, long_ox.length);
   }
   while (5 < (signinupo.length % (Math.max(2, 2)))) {
      historyG = new Map([[`${fastX.length}`, 3 << (Math.min(1, fastX.length))]]);
      break;
   }
      anythinkU += `${2 & datam.length}`;
   if (fastX.length == 4) {
      fastX = [(String.fromCharCode(120,0) == telegramz ? parseInt(`${langkey9}`) : telegramz.length)];
   }
       let popupW = 4.0;
       let found2 = String.fromCharCode(105,110,99,114,95,120,95,57,49,0);
         popupW -= parseInt(`${popupW}`);
          let friends4 = String.fromCharCode(114,95,57,56,95,112,114,101,100,105,99,116,111,114,115,0);
         found2 = `${friends4.length | 2}`;
      if (found2.length < 2) {
          let anythinkY_ = 5.0;
          let listC: Array<any> = [483, 182, 828];
          let guide6: Map<any, any> = new Map([[String.fromCharCode(121,95,56,48,95,98,103,112,104,99,104,101,99,107,0),147], [String.fromCharCode(114,101,115,117,108,117,116,105,111,110,95,52,95,55,51,0),119]]);
         found2 = `${1 / (Math.max(6, guide6.size))}`;
         anythinkY_ += parseFloat(`${parseInt(`${anythinkY_}`) & listC.length}`);
         listC.push(parseInt(`${anythinkY_}`));
         guide6 = new Map([[`${listC.length}`, parseInt(`${anythinkY_}`) + listC.length]]);
      }
          let moonH = String.fromCharCode(122,95,52,95,105,110,99,111,109,112,108,101,116,101,0);
         popupW *= parseInt(`${popupW}`) / (Math.max(3, found2.length));
         moonH += "1";
      if ((parseInt(`${popupW}`) - 2) >= 4 || 4.42 >= (popupW - 5.55)) {
         popupW *= 1;
      }
      if (!found2.startsWith(`${popupW}`)) {
         found2 = `${parseInt(`${popupW}`)}`;
      }
      anythinkU += `${1 * parseInt(`${langkey9}`)}`;
    setRefreshing(false);
  };
  const refreshUserState = async () => {
       let scoreR = 1;
    let controlsS: Array<any> = [String.fromCharCode(102,101,116,99,104,95,100,95,49,48,0), String.fromCharCode(110,95,55,51,95,100,99,116,120,0)];
    let darkC: Array<any> = [199, 673, 446];
    let ewardedr = false;
    let aboutL: Array<any> = [73, 621];
    let listC: Map<any, any> = new Map([[String.fromCharCode(100,105,115,115,105,109,95,49,95,48,0),true ], [String.fromCharCode(122,95,50,56,95,102,105,108,116,101,114,0),true ]]);
    let i_lock0 = String.fromCharCode(115,116,114,111,107,101,95,113,95,55,49,0);
    let singaporeN = 5.0;
    let blackP = String.fromCharCode(99,108,97,105,109,115,95,104,95,57,52,0);
    let untick_ = false;
    let modes = 5.0;
    let suggestionA = 0.0;
    let themej = String.fromCharCode(116,95,52,56,95,108,115,98,102,117,108,108,0);
    let expand0 = 4;
       let minimizeN = String.fromCharCode(110,95,49,50,95,114,101,99,108,97,105,109,0);
         minimizeN = "3";
         minimizeN = "3";
          let splashi: Map<any, any> = new Map([[String.fromCharCode(109,117,114,109,117,114,95,104,95,49,52,0),389], [String.fromCharCode(115,99,104,101,109,101,95,103,95,49,50,0),699], [String.fromCharCode(102,95,53,56,95,97,116,111,102,0),91]]);
         minimizeN = "1";
         splashi = new Map([[`${splashi.size}`, splashi.size]]);
      ewardedr = (aboutL.length / (Math.max(minimizeN.length, 8))) < 34;
       let shrinka: Array<any> = [368, 815];
       let becomeC: Map<any, any> = new Map([[String.fromCharCode(115,105,103,110,97,108,105,110,103,95,56,95,49,56,0),false ], [String.fromCharCode(108,95,49,56,95,116,97,112,102,105,108,116,101,114,0),false ]]);
         becomeC.set(`${shrinka.length}`, shrinka.length);
         shrinka.push(shrinka.length);
         becomeC.set(`${shrinka.length}`, shrinka.length << (Math.min(Math.abs(3), 1)));
         becomeC = new Map([[`${becomeC.size}`, becomeC.size >> (Math.min(shrinka.length, 1))]]);
         shrinka.push(3 - becomeC.size);
         becomeC.set(`${shrinka.length}`, shrinka.length ^ becomeC.size);
      untick_ = (aboutL.length - parseInt(`${modes}`)) <= 10;
   for (let r = 0; r < 1; r++) {
      aboutL.push(parseInt(`${modes}`));
   }
      i_lock0 += "2";
      blackP += `${2 * aboutL.length}`;
       let types8 = 2.0;
          let statisticsQ = 4;
          let strc = false;
          let vertical0 = String.fromCharCode(112,114,105,110,116,111,117,116,95,51,95,54,50,0);
         types8 -= parseFloat(`${vertical0.length}`);
         statisticsQ -= 2;
         strc = statisticsQ == statisticsQ;
       let projectf = String.fromCharCode(108,105,116,116,108,101,95,99,95,49,56,0);
      let floatery = types8 <= 8381601.0;
      do {
         types8 += parseFloat(`${projectf.length * parseInt(`${types8}`)}`);
         if (floatery) {
            break;
         }
      } while (floatery && ((types8 + 5.21) == 3.19 || 1.88 == (types8 + 5.21)));
      blackP = `${1 & listC.size}`;

    const result = await THFirebase.getUserDetails();

   if (scoreR == 1) {
       let historyi = String.fromCharCode(117,108,97,119,95,117,95,56,50,0);
       let description_ezt = false;
       let frame_2e8 = 2.0;
       let screenW = String.fromCharCode(112,101,114,102,111,114,109,101,114,95,108,95,57,50,0);
       let showL: Map<any, any> = new Map([[String.fromCharCode(120,95,51,51,95,112,116,114,109,97,112,115,0),699], [String.fromCharCode(116,105,109,101,103,109,95,121,95,53,49,0),394], [String.fromCharCode(110,95,48,95,97,114,109,118,0),737]]);
          let layoutj = String.fromCharCode(114,101,100,117,99,101,100,95,98,95,56,49,0);
          let zhengpiank = String.fromCharCode(106,95,52,55,95,115,117,112,101,114,110,111,100,101,0);
         showL = new Map([[`${showL.size}`, showL.size ^ parseInt(`${frame_2e8}`)]]);
         layoutj += `${layoutj.length}`;
         zhengpiank = "3";
      for (let m = 0; m < 1; m++) {
         description_ezt = 72.35 >= frame_2e8;
      }
          let transferd: Map<any, any> = new Map([[String.fromCharCode(105,109,99,100,97,116,97,95,101,95,49,50,0),483], [String.fromCharCode(101,95,56,53,95,98,97,110,100,105,110,103,0),228]]);
         frame_2e8 -= screenW.length * showL.size;
         transferd.set(`${transferd.size}`, transferd.size);
      for (let u = 0; u < 2; u++) {
          let mailm = false;
          let casting2 = String.fromCharCode(102,102,118,108,95,114,95,50,49,0);
         historyi += `${(parseInt(`${frame_2e8}`) / (Math.max(8, (description_ezt ? 2 : 3))))}`;
         mailm = ((casting2.length << (Math.min(5, Math.abs((mailm ? casting2.length : 64))))) >= 64);
      }
      if (description_ezt && 3 > historyi.length) {
          let sendZ = 3.0;
          let guideB = 5;
          let sina6: Array<any> = [23, 374];
         description_ezt = sina6.length >= parseInt(`${frame_2e8}`);
         sendZ *= parseFloat(`${guideB / 3}`);
         guideB -= guideB;
         sina6.push(guideB);
      }
         description_ezt = historyi.length < 73;
         showL = new Map([[`${showL.size}`, parseInt(`${frame_2e8}`)]]);
         description_ezt = historyi.length > 92;
      for (let v = 0; v < 3; v++) {
         frame_2e8 *= historyi.length * 1;
      }
       let giftH = 2.0;
       let apple3 = 0.0;
      while (!historyi.endsWith(`${apple3}`)) {
          let crown2: Map<any, any> = new Map([[String.fromCharCode(107,95,54,52,95,99,111,109,112,111,115,105,116,105,111,110,0),false ], [String.fromCharCode(104,95,54,56,95,101,116,104,111,100,0),true ]]);
          let sharedc = 4.0;
          let p_positionw = 5.0;
          let zhengpiang: Array<any> = [String.fromCharCode(111,95,55,53,95,105,110,102,111,115,0), String.fromCharCode(114,95,51,49,95,115,101,99,112,107,0)];
          let sheetI: Map<any, any> = new Map([[String.fromCharCode(115,97,110,101,95,101,95,56,52,0),590], [String.fromCharCode(116,101,108,95,54,95,55,57,0),311]]);
         apple3 -= parseFloat(`${zhengpiang.length}`);
         crown2 = new Map([[`${sheetI.size}`, 3 * sheetI.size]]);
         sharedc -= 2 - crown2.size;
         p_positionw -= parseFloat(`${crown2.size ^ parseInt(`${sharedc}`)}`);
         zhengpiang.push(parseInt(`${p_positionw}`) >> (Math.min(Math.abs(3), 2)));
         break;
      }
      scoreR += blackP.length;
   }
   for (let q = 0; q < 1; q++) {
      darkC = [parseInt(`${singaporeN}`) >> (Math.min(3, Math.abs(2)))];
   }
   let apps0 = 8326731 >= controlsS.length;
   do {
      controlsS = [parseInt(`${singaporeN}`)];
      if (apps0) {
         break;
      }
   } while (apps0 && (scoreR >= controlsS.length));
      controlsS.push(1 + scoreR);
       let found4 = 5;
       let analyticsT = 0;
       let twitterv = 0;
      for (let l = 0; l < 3; l++) {
          let anytimei = true;
          let hooksA = 1.0;
         analyticsT ^= 3;
         anytimei = !anytimei;
         hooksA += ((anytimei ? 4 : 2) << (Math.min(Math.abs(parseInt(`${hooksA}`)), 4)));
      }
       let greyr = 3.0;
       let changeN = 1.0;
      let switch_fh = 5004807 <= found4;
      do {
         found4 %= Math.max(3 | parseInt(`${greyr}`), 3);
         if (switch_fh) {
            break;
         }
      } while (((found4 << (Math.min(2, Math.abs(analyticsT)))) <= 3 || 3 <= (analyticsT << (Math.min(Math.abs(3), 1)))) && switch_fh);
      while (4.84 == (changeN * greyr) && 4.84 == (changeN * greyr)) {
         changeN /= Math.max(3, 2 ^ found4);
         break;
      }
      for (let a = 0; a < 3; a++) {
          let p_view4 = String.fromCharCode(112,104,114,97,115,101,95,50,95,55,56,0);
         greyr /= Math.max(1, p_view4.length);
      }
         analyticsT |= 3 << (Math.min(2, Math.abs(analyticsT)));
      let vertical9 = 9540956.0 >= changeN;
      do {
         changeN += twitterv ^ parseInt(`${changeN}`);
         if (vertical9) {
            break;
         }
      } while (vertical9 && ((changeN - found4) <= 1.97 || (5 / (Math.max(3, found4))) <= 2));
       let questE = 2.0;
         found4 += 3 + parseInt(`${greyr}`);
      controlsS.push(2);
      untick_ = modes == 7.86;
    if (result == null) {

   for (let y = 0; y < 1; y++) {
      darkC = [(2 >> (Math.min(1, Math.abs((untick_ ? 5 : 3)))))];
   }
   while (3 < (aboutL.length + 1)) {
      aboutL.push(controlsS.length);
      break;
   }
      i_lock0 += `${scoreR}`;
      blackP = "3";
       let reducers = 1.0;
         reducers -= parseFloat(`${parseInt(`${reducers}`) + 2}`);
         reducers *= parseFloat(`${parseInt(`${reducers}`) | parseInt(`${reducers}`)}`);
      while (5.95 > (2.44 - reducers)) {
         reducers *= parseFloat(`${parseInt(`${reducers}`)}`);
         break;
      }
      modes -= parseFloat(`${parseInt(`${singaporeN}`)}`);
   let minimizeO = aboutL.length <= 5455710;
   do {
       let plashN = 5.0;
       let megaphonep = 1.0;
       let homeJ = String.fromCharCode(118,109,104,100,95,122,95,57,56,0);
       let splashG = true;
      if ((homeJ.length ^ 3) >= 5 && (1.67 + megaphonep) >= 2.42) {
          let relatedl = false;
          let singleA = true;
          let productD = 4;
         megaphonep *= parseFloat(`${homeJ.length * 1}`);
         relatedl = productD < 3 || !relatedl;
         singleA = relatedl;
         productD >>= Math.min(1, parseInt(`${Math.abs((productD % (Math.max(8, (relatedl ? 4 : 3)))))}`));
      }
      while ((5.34 + plashN) < 1.40) {
         homeJ += `${((splashG ? 5 : 4) % (Math.max(parseInt(`${megaphonep}`), 2)))}`;
         break;
      }
         splashG = homeJ == String.fromCharCode(78,0);
      let humidityR = 9887200 >= homeJ.length;
      do {
         homeJ += `${(String.fromCharCode(111,0) == homeJ ? parseInt(`${plashN}`) : homeJ.length)}`;
         if (humidityR) {
            break;
         }
      } while (humidityR && (4 == (homeJ.length * parseInt(`${plashN}`))));
         plashN *= (parseFloat(`${1 + (splashG ? 2 : 1)}`));
      if (!splashG || homeJ.length == 2) {
         homeJ += `${parseInt(`${plashN}`)}`;
      }
      while ((4.35 - megaphonep) < 2.76) {
         splashG = megaphonep < 84.69;
         break;
      }
          let signinupA = String.fromCharCode(99,95,51,50,95,114,101,116,105,110,97,0);
         megaphonep -= (parseFloat(`${(splashG ? 2 : 3) / (Math.max(parseInt(`${megaphonep}`), 3))}`));
         signinupA = `${signinupA.length / (Math.max(signinupA.length, 8))}`;
         homeJ += `${parseInt(`${megaphonep}`)}`;
      while (megaphonep <= 2.36) {
         megaphonep -= parseFloat(`${homeJ.length % (Math.max(9, parseInt(`${megaphonep}`)))}`);
         break;
      }
         megaphonep *= (parseFloat(`${homeJ == String.fromCharCode(48,0) ? homeJ.length : (splashG ? 2 : 1)}`));
      for (let i = 0; i < 1; i++) {
          let expandh = 0.0;
          let connectionv = 1.0;
          let fastS = false;
         plashN *= (parseFloat(`${String.fromCharCode(56,0) == homeJ ? parseInt(`${megaphonep}`) : homeJ.length}`));
         expandh /= Math.max(parseFloat(`${1}`), 4);
         connectionv -= parseInt(`${expandh}`);
         fastS = connectionv <= 11.54;
      }
      aboutL = [parseInt(`${modes}`)];
      if (minimizeO) {
         break;
      }
   } while ((!untick_ && (2 * aboutL.length) > 5) && minimizeO);
      return;
    }

    await dispatch(updateUserAuth(result));

   while (3.87 > (suggestionA / 4.53) && (aboutL.length / (Math.max(3, 8))) > 4) {
      aboutL = [(controlsS.length % (Math.max(2, (untick_ ? 2 : 4))))];
      break;
   }
       let emojiE = 2.0;
       let hooksP = false;
       let reminderA: Map<any, any> = new Map([[String.fromCharCode(100,95,54,55,95,111,112,115,99,97,108,101,0),463], [String.fromCharCode(118,111,114,98,105,115,95,108,95,50,51,0),501]]);
      for (let s = 0; s < 3; s++) {
         emojiE /= Math.max(reminderA.size, 3);
      }
       let clockv = String.fromCharCode(117,110,108,111,99,107,101,100,95,118,95,50,49,0);
          let floatinge = String.fromCharCode(117,95,49,54,95,112,97,110,0);
         emojiE += floatinge.length << (Math.min(clockv.length, 4));
      if (clockv.includes(`${reminderA.size}`)) {
          let modalA = 5.0;
          let dragF: Map<any, any> = new Map([[String.fromCharCode(112,111,115,101,115,95,108,95,53,53,0),String.fromCharCode(99,108,97,110,103,95,51,95,55,49,0)], [String.fromCharCode(115,105,98,108,105,110,103,115,95,97,95,56,50,0),String.fromCharCode(112,101,114,99,101,112,116,117,97,108,95,104,95,52,50,0)]]);
         clockv += `${dragF.size}`;
         modalA -= parseInt(`${modalA}`);
         dragF.set(`${modalA}`, parseInt(`${modalA}`));
      }
      for (let y = 0; y < 1; y++) {
         reminderA.set(clockv, (clockv == String.fromCharCode(69,0) ? reminderA.size : clockv.length));
      }
      while ((3 | reminderA.size) < 1) {
         hooksP = emojiE > 23.18;
         break;
      }
      if ((clockv.length << (Math.min(Math.abs(5), 5))) > 1 && 3 > (5 << (Math.min(2, Math.abs(reminderA.size))))) {
         reminderA = new Map([[clockv, clockv.length | parseInt(`${emojiE}`)]]);
      }
         hooksP = !hooksP;
       let paginationz = String.fromCharCode(115,95,53,54,95,105,110,116,101,114,112,111,108,97,116,101,0);
       let humidityF = String.fromCharCode(117,95,50,56,95,109,118,99,111,110,116,101,120,116,115,0);
      controlsS = [2 ^ aboutL.length];
      suggestionA -= parseFloat(`${1}`);
      blackP += `${2 & scoreR}`;
   if ((suggestionA * 4.81) <= 3.84) {
      controlsS.push(controlsS.length);
   }
      suggestionA /= Math.max(3, parseFloat(`${2 >> (Math.min(3, controlsS.length))}`));

    return;
  };

  useEffect(() => {
    

    let mergedArray;

    if (userState.user?.userUpline.created_at != '') {
      mergedArray = userState.user?.userInvitedUserList.concat(userState.user.userUpline);
    } else {
      mergedArray = userState.user.userInvitedUserList;
    }

    mergedArray.sort((a: any, b: any) => {
      let dateA: any;
      dateA = new Date(a.created_at);
      let dateB: any;

      dateB = new Date(b.created_at);
      return dateB - dateA;
    });

    mergedArray = mergedArray.map((item: any) => {
      let displayText = '';
      if (item.text) {
        displayText = item.text;
        item.invited_vip_reward_day = item.vip_reward_day;
      } else {
        displayText = item.title ;
      }

      return { ...item, displayText: displayText };
    });
    console.log('mergedArray');
    console.log(mergedArray);
    setInviteList(mergedArray);
  }, []);

  return (
    <ScreenContainer>
      <TitleWithBackButtonHeader title="累计奖励明细" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }>
        { }
        <LinearGradient
          colors={['#323638', '#1a1d20']} 
          locations={[0.1, 1]}
          start={{ x: 1, y: 0 }} 
          end={{ x: 0, y: 1 }} 
          style={{
            marginTop: 40,
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 15,
            flexDirection: 'row', 
            justifyContent: 'space-between',
            alignItems: 'center',
            minHeight: 120,
          }}>
          <View style={styles.container}>
            { }
            <Text style={styles.title}>{userState.user?.userTotalInvite}</Text>
            <Text style={styles.subTitle}>已邀请人数</Text>
          </View>

          <View style={styles.container}>
            { }
            <Text style={styles.title}>
              {userState.user?.userAccumulateRewardDay}
            </Text>
            <Text style={styles.subTitle}>累计获得天数</Text>
          </View>
        </LinearGradient>

        { }
        <View style={{ marginTop: 40, alignItems: 'center' }}>
          <Text
            style={{ ...textVariants.header, fontSize: 16, fontWeight: '700' }}>
            邀请记录
          </Text>

          {inviteList.length > 0 && (
            <View
              style={{
                marginTop: 20,
                marginBottom: 40,
                backgroundColor: '#1D2023',
                borderRadius: 15,
                overflow: 'hidden',
                width: '100%',
              }}>
              {inviteList.map(item => (
                <View
                  key={item.displayText}
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignContent: 'center',
                    paddingHorizontal: 20,
                    paddingVertical: 15,
                  }}>
                  <View style={{ flex: 1, paddingRight: 10 }}>
                    <Text
                      style={{ fontSize: 16, color: '#fff' }}
                      numberOfLines={1}
                      ellipsizeMode="tail">
                      {item.displayText}
                    </Text>
                    <Text style={{ color: '#9c9c9c' }}>{item.created_at}</Text>
                  </View>

                  <View
                    style={{
                      justifyContent: 'center',
                      alignContent: 'center',
                    }}>
                    <Text
                      style={{
                        color: colors.primary,
                        fontSize: 16,
                        flex: 1,
                      }}>
                      +{item.invited_vip_reward_day}天
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          )}

          {inviteList.length == 0 && (
            <View
              style={{
                marginTop: 20,
                marginBottom: 40,
                backgroundColor: '#1D2023',
                borderRadius: 15,
                overflow: 'hidden',
                width: '100%',
              }}>
              <View
                style={{
                  flexDirection: 'row',

                  alignContent: 'center',
                  paddingHorizontal: 20,
                  paddingVertical: 20,
                }}>
                <View>
                  <Text style={{ color: '#fff' }}>暂时无邀请记录</Text>
                </View>
              </View>
            </View>
          )}
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  loading: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
  },
  backgroundImage: {
    flex: 1, 
    resizeMode: 'cover', 
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingLeft: 25,
  },
  title: {
    color: '#fff',
    fontSize: 26,
    fontWeight: '900',
  },
  subTitle: {
    fontSize: 16,
    fontWeight: '400',
    color: '#9C9C9C',
  },
});
