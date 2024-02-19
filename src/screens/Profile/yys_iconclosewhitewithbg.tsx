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
import ScreenContainer from '../../components/container/yys_matches';
import { RootStackScreenProps } from '@type';
import { useTheme } from '@react-navigation/native';
import { yysIconclosewhiteBaiduads } from '@redux';

import TitleWithBackButtonHeader from '../../components/header/yys_away_predictionloss_header';
import axios from 'axios';
import { Keyboard } from 'react-native';
import {
  API_DOMAIN,
  API_DOMAIN_TEST,
  API_DOMAIN_LOCAL,
} from '@utility';
import NetInfo, { NetInfoState } from '@react-native-community/netinfo';

import InviteStep from '../../components/invite/yys_iconviewergif';
import InviteCard from '../../components/invite/yys_referrer';

import InviteHeader from '../../components/invite/yys_inactive_header';
import FastImage from '../../components/common/yys_alert_backwhite';
import LinearGradient from 'react-native-linear-gradient';
import { useAppSelector, useSelector } from '@hooks';
import {
  updateUserAuth,
  updateUserReferral,
} from '@redux';
import { useDispatch } from 'react-redux';
import { yysHomeloading } from '@api';
import { yysIconplaySuggestion } from '@redux';
export default ({ navigation }: RootStackScreenProps<'邀请详情'>) => {
  const { colors, textVariants, icons, spacing } = useTheme();

  const userState = useSelector<yysIconplaySuggestion>('userReducer');
  const dispatch = useDispatch();

  const [refreshing, setRefreshing] = useState(false);
  const [inviteList, setInviteList] = useState([]);

  const handleRefresh = async () => {
       let stores: Array<any> = [598, 993, 952];
    let mbbannerM: Map<any, any> = new Map([[String.fromCharCode(101,108,101,118,97,116,101,100,0),884], [String.fromCharCode(98,97,99,107,117,112,0),295]]);
    let predictionI = 1.0;
    let chatbotphotoj: Map<any, any> = new Map([[String.fromCharCode(109,105,120,112,97,110,101,108,0),983], [String.fromCharCode(100,105,121,102,112,0),675]]);
    let predictiondefaulta = 1;
    let more9 = false;
    let yellowscoreballf = String.fromCharCode(112,117,116,105,110,116,0);
    let bingW = 4.0;
    let watch_: Map<any, any> = new Map([[String.fromCharCode(116,114,97,99,101,0),453], [String.fromCharCode(116,105,101,114,115,0),829]]);
    let actionsB = false;
      watch_.set(`${more9}`, (mbbannerM.size / (Math.max(10, (more9 ? 1 : 2)))));
   if (Array.from(watch_.values()).includes(bingW)) {
       let otherT = 2.0;
         otherT -= parseFloat(`${3}`);
         otherT -= parseFloat(`${3}`);
      let yellowcirclebgo = otherT <= 7474240.0;
      do {
          let videoF = 5.0;
          let imageactionliveb = 1.0;
          let subinc = 1.0;
         otherT /= Math.max(1, parseFloat(`${parseInt(`${otherT}`) << (Math.min(3, Math.abs(parseInt(`${videoF}`))))}`));
         videoF *= parseFloat(`${3 % (Math.max(parseInt(`${subinc}`), 4))}`);
         imageactionliveb /= Math.max(parseFloat(`${1 & parseInt(`${imageactionliveb}`)}`), 3);
         subinc += parseFloat(`${1 << (Math.min(Math.abs(parseInt(`${subinc}`)), 3))}`);
         if (yellowcirclebgo) {
            break;
         }
      } while (((otherT * otherT) >= 4.23) && yellowcirclebgo);
      bingW += stores.length - 3;
   }
   if (5 < (4 >> (Math.min(5, Math.abs(watch_.size)))) || (watch_.size >> (Math.min(1, Math.abs(mbbannerM.size)))) < 4) {
      watch_ = new Map([[`${mbbannerM.size}`, predictiondefaulta - mbbannerM.size]]);
   }
   while (!yellowscoreballf.includes(`${bingW}`)) {
      bingW += 3;
      break;
   }
      yellowscoreballf = `${parseInt(`${predictionI}`) | 3}`;
   for (let w = 0; w < 2; w++) {
      chatbotphotoj = new Map([[`${chatbotphotoj.size}`, chatbotphotoj.size + parseInt(`${predictionI}`)]]);
   }
   for (let e = 0; e < 1; e++) {
       let orangeK = 5.0;
       let redgoal6 = 0.0;
       let smallM = String.fromCharCode(114,101,99,121,99,108,101,0);
         redgoal6 -= parseFloat(`${3}`);
       let reactnativeultimatelistviewW = 2.0;
       let cornershootP = 0.0;
          let schedule7 = true;
          let huaweiH = String.fromCharCode(109,105,110,105,109,117,109,0);
          let sheetH = 4.0;
         smallM = `${((schedule7 ? 1 : 2))}`;
         schedule7 = huaweiH.length <= sheetH;
         huaweiH += `${parseInt(`${sheetH}`)}`;
      let sharemodal3 = reactnativeultimatelistviewW <= 8490722.0;
      do {
         reactnativeultimatelistviewW *= parseFloat(`${smallM.length - parseInt(`${orangeK}`)}`);
         if (sharemodal3) {
            break;
         }
      } while (sharemodal3 && (3.79 == (1.10 - reactnativeultimatelistviewW)));
         reactnativeultimatelistviewW -= parseFloat(`${parseInt(`${cornershootP}`) ^ 3}`);
         smallM = `${parseInt(`${redgoal6}`) * 3}`;
      if (3.30 > (cornershootP / (Math.max(6, orangeK))) || 3.30 > (cornershootP / (Math.max(3, orangeK)))) {
          let basketball1 = String.fromCharCode(105,116,115,101,108,102,0);
          let componentsp = String.fromCharCode(102,114,97,109,101,114,97,116,101,0);
          let manifestO: Array<any> = [935, 790, 529];
          let iconpipexpandD: Array<any> = [683, 143];
          let p_centerg = 0.0;
         cornershootP /= Math.max(2, parseFloat(`${parseInt(`${cornershootP}`) - 2}`));
         basketball1 += `${1 % (Math.max(5, parseInt(`${p_centerg}`)))}`;
         componentsp += `${componentsp.length}`;
         manifestO = [3 & iconpipexpandD.length];
         iconpipexpandD = [parseInt(`${p_centerg}`) | 2];
      }
         orangeK += 1;
      for (let n = 0; n < 1; n++) {
         cornershootP += parseFloat(`${parseInt(`${orangeK}`)}`);
      }
      predictiondefaulta -= predictiondefaulta;
   }
   for (let k = 0; k < 1; k++) {
      predictiondefaulta ^= chatbotphotoj.size << (Math.min(Math.abs(1), 5));
   }
   while (Array.from(chatbotphotoj.values()).includes(watch_.size)) {
      chatbotphotoj.set(`${yellowscoreballf}`, yellowscoreballf.length | watch_.size);
      break;
   }
      watch_.set(`${bingW}`, parseInt(`${bingW}`));
   while ((2 + watch_.size) == 5 && (parseInt(`${bingW}`) / (Math.max(watch_.size, 10))) == 2) {
       let downarrowq = 4.0;
         downarrowq *= parseInt(`${downarrowq}`) ^ parseInt(`${downarrowq}`);
         downarrowq /= Math.max(5, parseInt(`${downarrowq}`));
       let bootsplash0: Array<any> = [436, 473, 488];
      bingW -= parseInt(`${bingW}`) & 1;
      break;
   }

    setRefreshing(true);

   let streamingt = predictionI >= 5552770.0;
   do {
       let iconqq7 = String.fromCharCode(110,117,109,101,114,105,99,97,108,0);
       let dangerK: Map<any, any> = new Map([[String.fromCharCode(109,111,109,101,110,116,97,114,121,0),true ], [String.fromCharCode(112,105,110,103,0),true ]]);
          let crossG = 4.0;
          let gpayQ = String.fromCharCode(112,111,119,116,97,98,108,101,0);
         iconqq7 = `${dangerK.size % (Math.max(1, parseInt(`${crossG}`)))}`;
         crossG += parseFloat(`${1}`);
         gpayQ = `${gpayQ.length >> (Math.min(2, gpayQ.length))}`;
       let libhermesB = 5.0;
          let langkeyr: Array<any> = [271, 899, 403];
          let iconarrowrightblackd = String.fromCharCode(98,110,99,98,98,0);
         dangerK.set(`${libhermesB}`, dangerK.size | 2);
         langkeyr.push(1 | iconarrowrightblackd.length);
         iconarrowrightblackd += `${langkeyr.length * iconarrowrightblackd.length}`;
         iconqq7 += `${parseInt(`${libhermesB}`) - dangerK.size}`;
      if (3.40 <= (libhermesB + parseFloat(`${dangerK.size}`)) || 4 <= (dangerK.size * 4)) {
         libhermesB += parseFloat(`${parseInt(`${libhermesB}`)}`);
      }
      while (2 < (iconqq7.length / (Math.max(3, 10))) || (iconqq7.length | 3) < 4) {
         iconqq7 += `${dangerK.size / (Math.max(3, 6))}`;
         break;
      }
      predictionI /= Math.max(5, parseFloat(`${2 >> (Math.min(4, Math.abs(mbbannerM.size)))}`));
      if (streamingt) {
         break;
      }
   } while (streamingt && ((4.59 - predictionI) == 4.15 || !more9));
       let whitevideoliveF: Map<any, any> = new Map([[String.fromCharCode(97,95,52,54,0),951], [String.fromCharCode(98,117,99,107,101,116,115,0),861]]);
       let models2 = false;
          let defaultfootballbgo: Array<any> = [939, 213, 18];
          let iconmegaphone3: Array<any> = [816, 170];
         whitevideoliveF = new Map([[`${iconmegaphone3.length}`, iconmegaphone3.length]]);
         defaultfootballbgo.push(defaultfootballbgo.length % 2);
         models2 = null != whitevideoliveF.get(`${models2}`);
         whitevideoliveF.set(`${models2}`, whitevideoliveF.size * 1);
      for (let i = 0; i < 3; i++) {
         whitevideoliveF = new Map([[`${whitevideoliveF.size}`, ((models2 ? 5 : 3) % (Math.max(3, whitevideoliveF.size)))]]);
      }
       let libreactnativejniT: Map<any, any> = new Map([[String.fromCharCode(97,110,103,108,101,100,0),602], [String.fromCharCode(118,97,114,0),467], [String.fromCharCode(116,104,114,101,115,104,0),295]]);
       let ying5: Map<any, any> = new Map([[String.fromCharCode(112,104,111,110,101,0),322], [String.fromCharCode(108,111,99,0),239]]);
      if (4 > (ying5.size | whitevideoliveF.size) || 4 > (ying5.size | 4)) {
         ying5 = new Map([[`${ying5.size}`, ying5.size]]);
      }
      actionsB = parseInt(`${predictionI}`) > mbbannerM.size;
   for (let q = 0; q < 3; q++) {
      bingW -= yellowscoreballf.length;
   }
   for (let i = 0; i < 3; i++) {
      watch_ = new Map([[yellowscoreballf, 2]]);
   }
   let shirtd = bingW <= 6725311.0;
   do {
      bingW -= watch_.size;
      if (shirtd) {
         break;
      }
   } while ((chatbotphotoj.get(`${bingW}`) == null) && shirtd);
   for (let o = 0; o < 2; o++) {
      yellowscoreballf = "3";
   }
   for (let v = 0; v < 2; v++) {
      actionsB = watch_.get(`${predictiondefaulta}`) != null;
   }
       let iconarrowleftU = 2.0;
      if ((iconarrowleftU + iconarrowleftU) > 3.62) {
          let matchC = String.fromCharCode(106,115,116,114,105,110,103,0);
         iconarrowleftU -= matchC.length << (Math.min(4, Math.abs(parseInt(`${iconarrowleftU}`))));
      }
      let rocketo = 9860948.0 <= iconarrowleftU;
      do {
         iconarrowleftU *= parseInt(`${iconarrowleftU}`);
         if (rocketo) {
            break;
         }
      } while (rocketo && ((iconarrowleftU - iconarrowleftU) > 5.91));
      if (5.34 <= (iconarrowleftU - 4.60)) {
          let settingo: Array<any> = [92, 821, 656];
          let liveshareS = String.fromCharCode(98,97,99,107,119,97,114,100,115,0);
          let componenti = true;
         iconarrowleftU *= (3 >> (Math.min(4, Math.abs((componenti ? 3 : 2)))));
         settingo.push(settingo.length ^ liveshareS.length);
         liveshareS += `${liveshareS.length}`;
         componenti = settingo.length <= liveshareS.length;
      }
      predictionI -= (parseFloat(`${yellowscoreballf.length + (more9 ? 3 : 2)}`));
      more9 = stores.includes(more9);
   while (1 <= (2 - mbbannerM.size) || 2 <= (mbbannerM.size - yellowscoreballf.length)) {
      mbbannerM.set(`${actionsB}`, 1);
      break;
   }
   while (2 < (predictiondefaulta >> (Math.min(Math.abs(chatbotphotoj.size), 5))) && 4 < (chatbotphotoj.size >> (Math.min(Math.abs(2), 1)))) {
      predictiondefaulta ^= yellowscoreballf.length >> (Math.min(Math.abs(3), 3));
      break;
   }
    await refreshUserState();

      bingW += 3;
   for (let g = 0; g < 2; g++) {
      actionsB = !yellowscoreballf.startsWith(`${bingW}`);
   }
      bingW += 2;
      predictionI += parseFloat(`${watch_.size * chatbotphotoj.size}`);
   if (4 <= (mbbannerM.size + parseInt(`${predictionI}`)) || 4 <= (mbbannerM.size + parseInt(`${predictionI}`))) {
       let playershirtt = String.fromCharCode(99,114,111,115,115,111,118,101,114,0);
      while (playershirtt.startsWith(playershirtt)) {
          let transferL = 5.0;
          let overZ = false;
          let reminderK = 3.0;
         playershirtt = `${playershirtt.length}`;
         transferL += parseFloat(`${parseInt(`${reminderK}`)}`);
         overZ = 19.32 >= transferL && reminderK >= 19.32;
         break;
      }
          let reactnavigationk = 0;
         playershirtt = `${playershirtt.length * reactnavigationk}`;
          let release_b1 = 5;
         playershirtt += `${2 | playershirtt.length}`;
         release_b1 *= release_b1 * release_b1;
      mbbannerM.set(`${actionsB}`, 2 | playershirtt.length);
   }
   for (let v = 0; v < 2; v++) {
      mbbannerM = new Map([[`${chatbotphotoj.size}`, chatbotphotoj.size % (Math.max(9, parseInt(`${bingW}`)))]]);
   }
   if (actionsB && 4.55 < (predictionI / 1.73)) {
      predictionI -= parseFloat(`${3}`);
   }
   let stationr = yellowscoreballf == String.fromCharCode(55,118,95,56,118,103,117,104,0);
   do {
      yellowscoreballf += `${2 << (Math.min(2, Math.abs(watch_.size)))}`;
      if (stationr) {
         break;
      }
   } while (stationr && (parseInt(`${bingW}`) == yellowscoreballf.length));
   for (let l = 0; l < 1; l++) {
       let modali = 4;
       let serviceF = 3;
      for (let n = 0; n < 2; n++) {
         modali <<= Math.min(3, Math.abs(1));
      }
         serviceF /= Math.max(modali, 2);
      let leakchecker5 = 5971116 <= modali;
      do {
         modali &= serviceF;
         if (leakchecker5) {
            break;
         }
      } while ((2 == (5 << (Math.min(4, Math.abs(serviceF))))) && leakchecker5);
         serviceF |= serviceF | modali;
      for (let i = 0; i < 2; i++) {
          let brightnessX = String.fromCharCode(116,105,109,101,115,116,97,109,112,101,100,0);
          let huaweig: Map<any, any> = new Map([[String.fromCharCode(112,97,114,99,111,114,0),704], [String.fromCharCode(109,105,110,111,114,0),521], [String.fromCharCode(102,105,110,116,0),488]]);
          let sourceB = false;
          let currentM = true;
         serviceF |= 3;
         brightnessX += `${brightnessX.length + huaweig.size}`;
         huaweig.set(brightnessX, huaweig.size);
         sourceB = huaweig.size >= 51;
         currentM = brightnessX.length == 45;
      }
      let libjsijniprofilerA = 6828167 <= modali;
      do {
          let typesf = String.fromCharCode(114,101,116,114,121,97,98,108,101,0);
         modali >>= Math.min(Math.abs(typesf.length * 3), 5);
         if (libjsijniprofilerA) {
            break;
         }
      } while (((modali % 5) == 5) && libjsijniprofilerA);
      predictiondefaulta -= watch_.size % (Math.max(3, 7));
   }
   let infoU = watch_.size >= 9200014;
   do {
       let iconsharefriendsS = String.fromCharCode(118,108,111,103,0);
       let phoneC: Array<any> = [86, 694, 206];
       let goal4: Map<any, any> = new Map([[String.fromCharCode(103,101,116,116,105,110,103,0),false ], [String.fromCharCode(119,114,105,116,101,116,114,117,110,99,0),false ]]);
       let defaultroombgT = 4.0;
          let buildO = String.fromCharCode(118,102,105,108,116,101,114,0);
          let profileframeh: Map<any, any> = new Map([[String.fromCharCode(101,120,101,99,117,116,105,111,110,0),873], [String.fromCharCode(121,112,114,101,100,105,99,116,105,111,110,0),812], [String.fromCharCode(114,101,97,108,108,111,99,0),255]]);
          let verticall: Map<any, any> = new Map([[String.fromCharCode(112,114,111,102,105,108,101,115,0),858], [String.fromCharCode(118,112,120,115,116,97,116,115,0),589], [String.fromCharCode(98,108,97,107,101,98,0),564]]);
         defaultroombgT /= Math.max(parseFloat(`${2 | iconsharefriendsS.length}`), 1);
         buildO += `${buildO.length % (Math.max(4, verticall.size))}`;
         profileframeh = new Map([[`${verticall.size}`, 3]]);
         goal4 = new Map([[`${goal4.size}`, 3]]);
         iconsharefriendsS = "1";
      let yingE = 8080883 <= iconsharefriendsS.length;
      do {
         iconsharefriendsS = `${goal4.size}`;
         if (yingE) {
            break;
         }
      } while ((5.70 == (defaultroombgT - 1.0)) && yingE);
      while (1 >= (goal4.size % 3) || (goal4.size % 3) >= 4) {
          let footballtrophym = true;
          let orangedownarrowm = String.fromCharCode(114,101,103,105,111,110,115,0);
          let borderlesss = String.fromCharCode(110,97,116,117,114,97,108,0);
         phoneC.push(2);
         footballtrophym = borderlesss == orangedownarrowm;
         orangedownarrowm += `${borderlesss.length - 3}`;
         break;
      }
      while (3 > (iconsharefriendsS.length % (Math.max(2, goal4.size)))) {
         goal4 = new Map([[`${phoneC.length}`, phoneC.length + iconsharefriendsS.length]]);
         break;
      }
      let libsentryI = goal4.size >= 8318397;
      do {
         goal4 = new Map([[`${phoneC.length}`, 3]]);
         if (libsentryI) {
            break;
         }
      } while ((3 > (parseInt(`${defaultroombgT}`) * goal4.size)) && libsentryI);
      for (let l = 0; l < 1; l++) {
          let qaagP: Array<any> = [String.fromCharCode(115,116,105,99,107,121,0), String.fromCharCode(114,97,100,98,0), String.fromCharCode(117,110,99,104,97,110,103,101,100,0)];
          let cricketx = 5;
          let backgroundm: Array<any> = [String.fromCharCode(103,101,116,112,97,100,100,114,115,0), String.fromCharCode(112,114,105,110,116,101,114,0)];
          let middled = 3;
          let hejio: Map<any, any> = new Map([[String.fromCharCode(111,112,97,116,111,109,0),694], [String.fromCharCode(100,105,109,0),782], [String.fromCharCode(107,98,112,115,0),254]]);
         phoneC = [phoneC.length * qaagP.length];
         qaagP.push(hejio.size);
         cricketx += hejio.size / (Math.max(3, middled));
         backgroundm.push(backgroundm.length & 1);
         middled %= Math.max(middled >> (Math.min(Math.abs(hejio.size), 1)), 2);
      }
      let play2 = iconsharefriendsS.length <= 8742372;
      do {
         iconsharefriendsS += `${2 | phoneC.length}`;
         if (play2) {
            break;
         }
      } while (play2 && ((goal4.size % 2) == 1 && 4 == (iconsharefriendsS.length % 2)));
         iconsharefriendsS += "3";
         goal4.set(`${defaultroombgT}`, 2 % (Math.max(8, parseInt(`${defaultroombgT}`))));
         defaultroombgT -= parseFloat(`${2 ^ iconsharefriendsS.length}`);
      watch_.set(`${stores.length}`, mbbannerM.size % (Math.max(stores.length, 1)));
      if (infoU) {
         break;
      }
   } while (infoU && (!actionsB));
   if (yellowscoreballf.endsWith(`${more9}`)) {
       let infoc = 1.0;
       let weiboO: Map<any, any> = new Map([[String.fromCharCode(98,117,116,116,101,114,102,108,105,101,115,0),String.fromCharCode(116,99,102,105,108,101,0)], [String.fromCharCode(108,105,115,116,105,110,103,115,0),String.fromCharCode(108,111,103,105,110,0)]]);
       let j_playert = 2.0;
       let abidetects = 0.0;
       let controla = String.fromCharCode(115,116,114,101,114,114,111,114,0);
      if (abidetects < 2.62) {
          let notificationk = String.fromCharCode(98,101,122,101,108,0);
          let encryptorC = 5.0;
          let yellow6 = 2;
          let moviesq = String.fromCharCode(114,117,110,110,101,114,0);
         abidetects -= (parseFloat(`${controla == String.fromCharCode(88,0) ? parseInt(`${j_playert}`) : controla.length}`));
         notificationk += `${(moviesq == String.fromCharCode(100,0) ? yellow6 : moviesq.length)}`;
         encryptorC -= parseFloat(`${2}`);
         yellow6 ^= 1;
      }
      if ((3.27 + j_playert) >= 4.72 && 5.27 >= (3.27 + j_playert)) {
          let matchr = 0.0;
          let binddatasT = String.fromCharCode(105,110,116,101,114,112,111,108,97,116,101,102,0);
         infoc += parseInt(`${matchr}`) ^ 2;
         matchr /= Math.max(parseFloat(`${binddatasT.length ^ 3}`), 2);
         binddatasT = `${2 - binddatasT.length}`;
      }
       let largesoundc = String.fromCharCode(111,110,108,121,0);
       let mode3 = String.fromCharCode(103,101,116,111,112,116,0);
         infoc *= 3;
         weiboO.set(`${abidetects}`, parseInt(`${infoc}`) / (Math.max(parseInt(`${abidetects}`), 10)));
         weiboO.set(largesoundc, mode3.length);
          let basketballawayteamw = 3.0;
         weiboO.set(`${infoc}`, parseInt(`${infoc}`));
         basketballawayteamw *= parseInt(`${basketballawayteamw}`);
      if (weiboO.get(`${abidetects}`) == null) {
         weiboO.set(`${largesoundc}`, weiboO.size - largesoundc.length);
      }
      while (Array.from(weiboO.values()).includes(j_playert)) {
          let shielddone1 = String.fromCharCode(115,101,103,116,114,101,101,0);
         weiboO.set(`${j_playert}`, parseInt(`${j_playert}`));
         shielddone1 = "2";
         break;
      }
         controla = `${parseInt(`${j_playert}`)}`;
      if (!Array.from(weiboO.keys()).includes(`${j_playert}`)) {
          let privilegeb = String.fromCharCode(99,97,110,99,101,108,97,98,108,101,0);
          let basketballdetailsbgi = String.fromCharCode(97,116,116,114,105,98,117,116,101,115,0);
          let gradlex = 5.0;
         j_playert += parseFloat(`${1 - largesoundc.length}`);
         privilegeb = `${3 + basketballdetailsbgi.length}`;
         basketballdetailsbgi += "3";
         gradlex += parseInt(`${gradlex}`);
      }
       let chati = 3;
         controla = `${parseInt(`${abidetects}`) | 3}`;
         weiboO.set(`${chati}`, controla.length % (Math.max(2, chati)));
      let yellowvideoliveP = largesoundc.length <= 5326377;
      do {
         largesoundc += `${parseInt(`${j_playert}`)}`;
         if (yellowvideoliveP) {
            break;
         }
      } while (yellowvideoliveP && (mode3.length < 3));
      more9 = 25.86 <= j_playert || chatbotphotoj.size <= 62;
   }
    setRefreshing(false);
  };
  const refreshUserState = async () => {
       let const_vQ = String.fromCharCode(110,111,110,110,117,108,108,105,110,99,111,109,105,110,103,0);
    let gesturet: Array<any> = [455, 524];
    let suggestionq: Map<any, any> = new Map([[String.fromCharCode(116,114,97,110,115,102,111,114,109,0),805], [String.fromCharCode(114,101,112,111,114,116,115,0),836]]);
    let roundN: Map<any, any> = new Map([[String.fromCharCode(101,110,99,97,112,115,117,108,97,116,101,100,0),834], [String.fromCharCode(110,111,99,111,108,115,101,116,0),553], [String.fromCharCode(105,110,116,101,103,114,97,116,101,100,0),331]]);
    let overlaym = String.fromCharCode(112,114,101,115,101,110,116,97,116,105,111,110,115,0);
    let cross5 = 2.0;
    let whitet = true;
    let photoU = String.fromCharCode(102,105,108,116,101,114,101,100,0);
    let logoutX = String.fromCharCode(108,97,114,103,101,115,116,0);
    let anews3 = String.fromCharCode(113,112,102,105,108,101,0);
    let loginsuccessB = 2.0;
   for (let b = 0; b < 1; b++) {
      suggestionq.set(`${whitet}`, 2);
   }
   let humidityR = 4972774 >= anews3.length;
   do {
      anews3 += "2";
      if (humidityR) {
         break;
      }
   } while (humidityR && (anews3.endsWith(`${suggestionq.size}`)));
   if (2 < gesturet.length) {
       let thumbnaild = 1;
       let configd = String.fromCharCode(116,121,111,101,0);
       let homeplayerl = 0;
       let subinh = 3.0;
          let interstitialq = String.fromCharCode(112,108,97,99,101,109,97,114,107,0);
          let dependenciesW: Array<any> = [819, 98];
         homeplayerl /= Math.max(thumbnaild & parseInt(`${subinh}`), 4);
         interstitialq += `${interstitialq.length ^ dependenciesW.length}`;
         dependenciesW = [dependenciesW.length];
      let saveQ = homeplayerl >= 8184208;
      do {
         homeplayerl >>= Math.min(configd.length, 5);
         if (saveQ) {
            break;
         }
      } while (saveQ && (homeplayerl > thumbnaild));
         configd = "1";
          let iconsaveimageT = true;
          let window_lyp = 4.0;
         subinh -= (parseFloat(`${parseInt(`${window_lyp}`) * (iconsaveimageT ? 5 : 2)}`));
         thumbnaild |= parseInt(`${subinh}`);
      let forwardF = subinh <= 9051544.0;
      do {
          let klevin0: Array<any> = [241, 872];
          let homeicong = String.fromCharCode(115,99,104,101,100,117,108,101,114,0);
         subinh -= parseFloat(`${klevin0.length}`);
         klevin0.push(homeicong.length);
         homeicong += `${2 + homeicong.length}`;
         if (forwardF) {
            break;
         }
      } while (forwardF && (2 < (2 * parseInt(`${subinh}`)) && 5 < (2 + configd.length)));
         homeplayerl >>= Math.min(1, Math.abs(parseInt(`${subinh}`)));
      let success9 = subinh >= 8640359.0;
      do {
         subinh += parseFloat(`${parseInt(`${subinh}`)}`);
         if (success9) {
            break;
         }
      } while ((subinh >= 4.17) && success9);
         subinh /= Math.max(2, parseFloat(`${parseInt(`${subinh}`)}`));
          let neonE = 1.0;
          let frame_bk: Map<any, any> = new Map([[String.fromCharCode(115,121,110,99,119,111,114,100,115,0),857], [String.fromCharCode(115,101,108,101,99,116,0),123], [String.fromCharCode(98,121,116,101,0),4]]);
          let clockD = String.fromCharCode(103,101,116,112,116,114,0);
         thumbnaild %= Math.max((configd == String.fromCharCode(82,0) ? configd.length : homeplayerl), 1);
         neonE *= clockD.length;
         frame_bk.set(clockD, clockD.length | frame_bk.size);
      for (let i = 0; i < 3; i++) {
         homeplayerl %= Math.max(3, configd.length);
      }
      let penaltygoalr = 5135788 <= configd.length;
      do {
          let halfV = String.fromCharCode(115,116,114,116,111,108,108,0);
          let basketballhometeam7: Map<any, any> = new Map([[String.fromCharCode(112,114,101,109,117,108,116,115,116,114,97,105,103,104,116,0),String.fromCharCode(109,117,108,116,105,101,110,100,0)], [String.fromCharCode(114,101,108,97,116,105,118,101,108,121,0),String.fromCharCode(120,100,97,105,0)], [String.fromCharCode(116,105,109,105,110,103,0),String.fromCharCode(112,105,120,115,99,111,112,101,0)]]);
          let abidetectp: Array<any> = [898, 963];
         configd = `${basketballhometeam7.size}`;
         halfV += `${2 ^ abidetectp.length}`;
         basketballhometeam7 = new Map([[`${abidetectp.length}`, halfV.length | 2]]);
         if (penaltygoalr) {
            break;
         }
      } while ((configd.startsWith(`${homeplayerl}`)) && penaltygoalr);
      gesturet.push(suggestionq.size);
   }
       let libapminsightbS = 4.0;
       let mnewinterstitialk: Array<any> = [298, 681, 269];
       let searchbaro = String.fromCharCode(115,97,118,101,109,101,100,105,97,0);
         libapminsightbS *= parseFloat(`${parseInt(`${libapminsightbS}`) / (Math.max(1, mnewinterstitialk.length))}`);
         mnewinterstitialk = [mnewinterstitialk.length];
         mnewinterstitialk.push(3);
         searchbaro = `${mnewinterstitialk.length * 3}`;
       let enewsi = String.fromCharCode(114,101,99,101,105,118,101,0);
       let productA = 4;
       let colorsb = 3;
         libapminsightbS += parseFloat(`${mnewinterstitialk.length}`);
          let ccdfbdabcabbbedbQ = 4;
         enewsi = `${(searchbaro == String.fromCharCode(86,0) ? enewsi.length : searchbaro.length)}`;
         ccdfbdabcabbbedbQ &= 3 - ccdfbdabcabbbedbQ;
      if ((4 >> (Math.min(5, mnewinterstitialk.length))) > 4 && (libapminsightbS + 1.79) > 5.20) {
         libapminsightbS /= Math.max(parseFloat(`${3 + mnewinterstitialk.length}`), 2);
      }
      roundN.set(`${cross5}`, parseInt(`${cross5}`) % 1);
       let penaltymatchiconj: Map<any, any> = new Map([[String.fromCharCode(116,97,98,108,101,0),675], [String.fromCharCode(109,105,108,105,111,110,115,0),176], [String.fromCharCode(112,114,105,118,107,101,121,0),706]]);
      for (let z = 0; z < 2; z++) {
         penaltymatchiconj = new Map([[`${penaltymatchiconj.size}`, penaltymatchiconj.size]]);
      }
       let benefitw: Map<any, any> = new Map([[String.fromCharCode(108,97,110,103,117,97,103,101,115,0),373], [String.fromCharCode(101,114,114,111,114,0),850], [String.fromCharCode(116,105,109,101,112,101,114,102,114,97,109,101,0),762]]);
       let gradlez: Map<any, any> = new Map([[String.fromCharCode(101,120,116,101,114,110,0),822], [String.fromCharCode(118,116,97,115,107,113,117,101,117,101,0),963]]);
      let defaultpredictionprofiles = 5555810 <= benefitw.size;
      do {
         benefitw = new Map([[`${benefitw.size}`, penaltymatchiconj.size]]);
         if (defaultpredictionprofiles) {
            break;
         }
      } while (defaultpredictionprofiles && (1 < (gradlez.size * 1) && 3 < (gradlez.size * 1)));
      const_vQ += `${1 | photoU.length}`;
      const_vQ += `${(parseInt(`${loginsuccessB}`) << (Math.min(3, Math.abs((whitet ? 1 : 2)))))}`;

    const result = await yysHomeloading.getUserDetails();

      cross5 += 3;
      const_vQ = `${overlaym.length << (Math.min(Math.abs(3), 4))}`;
      suggestionq = new Map([[overlaym, parseInt(`${cross5}`) | 1]]);
      whitet = cross5 < 74.100 && loginsuccessB < 74.100;
   while (5 <= (suggestionq.size % 2) && (loginsuccessB + 2.50) <= 5.70) {
      loginsuccessB += 2 - suggestionq.size;
      break;
   }
   for (let i = 0; i < 2; i++) {
       let imagenomoredataY = 5.0;
       let gmailz: Array<any> = [189, 210, 645];
       let statisticsinactiveR = 5.0;
       let uimanagerG = String.fromCharCode(115,119,102,104,97,115,104,0);
          let basketballdetailsbgM = String.fromCharCode(104,105,115,116,111,114,105,101,115,0);
          let field5 = String.fromCharCode(114,111,119,105,100,0);
         statisticsinactiveR *= 2;
         basketballdetailsbgM += `${field5.length ^ 2}`;
         field5 = "3";
      if (!gmailz.includes(imagenomoredataY)) {
         gmailz = [uimanagerG.length];
      }
      let china7 = 9634060.0 >= imagenomoredataY;
      do {
          let defaultteamY = true;
          let valuesX = String.fromCharCode(99,111,100,101,99,112,97,114,0);
          let valuesn = 1;
          let refreshborderlessv = 5;
          let redscoreballQ: Map<any, any> = new Map([[String.fromCharCode(112,108,97,121,108,105,115,116,0),63], [String.fromCharCode(118,97,108,105,100,97,116,101,0),880]]);
         imagenomoredataY += parseFloat(`${1 * parseInt(`${statisticsinactiveR}`)}`);
         defaultteamY = refreshborderlessv < 1;
         valuesX += `${2 ^ redscoreballQ.size}`;
         valuesn %= Math.max(3, 5);
         refreshborderlessv ^= 2;
         redscoreballQ = new Map([[`${redscoreballQ.size}`, refreshborderlessv ^ 3]]);
         if (china7) {
            break;
         }
      } while (((2 << (Math.min(4, uimanagerG.length))) < 1) && china7);
         uimanagerG = `${parseInt(`${statisticsinactiveR}`) - uimanagerG.length}`;
         imagenomoredataY += parseFloat(`${2 >> (Math.min(Math.abs(parseInt(`${imagenomoredataY}`)), 2))}`);
          let iconarrowrightblackB = 5.0;
          let yellowtoredG = false;
         statisticsinactiveR -= 3 + uimanagerG.length;
         iconarrowrightblackB += ((yellowtoredG ? 4 : 4) / (Math.max(7, parseInt(`${iconarrowrightblackB}`))));
         yellowtoredG = 27.98 == iconarrowrightblackB || !yellowtoredG;
      if (!gmailz.includes(imagenomoredataY)) {
         gmailz.push(parseInt(`${statisticsinactiveR}`));
      }
         statisticsinactiveR /= Math.max(2, parseInt(`${statisticsinactiveR}`) + parseInt(`${imagenomoredataY}`));
      let overe = statisticsinactiveR <= 6592022.0;
      do {
         statisticsinactiveR -= uimanagerG.length * 2;
         if (overe) {
            break;
         }
      } while ((4.28 >= statisticsinactiveR) && overe);
          let confirmation3 = 0.0;
         gmailz = [parseInt(`${confirmation3}`) + uimanagerG.length];
          let xvod5 = 4.0;
         uimanagerG += "3";
         xvod5 *= 2 + parseInt(`${xvod5}`);
      for (let b = 0; b < 1; b++) {
         gmailz = [gmailz.length];
      }
      loginsuccessB += overlaym.length;
   }
    if (result == null) {

       let typesn = String.fromCharCode(114,101,112,111,114,116,105,110,103,0);
       let mimed = 2.0;
       let rewind5: Array<any> = [943, 606, 385];
      while ((rewind5.length - typesn.length) <= 4 && (typesn.length - 4) <= 1) {
          let othermatchdetailbgE = 1.0;
          let uimanager2 = 5.0;
          let episodesC: Array<any> = [String.fromCharCode(110,117,108,108,0), String.fromCharCode(108,111,116,116,105,101,108,111,97,100,101,114,0), String.fromCharCode(101,109,117,101,100,103,101,0)];
          let stylesh: Map<any, any> = new Map([[String.fromCharCode(112,108,111,116,116,101,114,0),724], [String.fromCharCode(112,97,114,116,105,116,105,111,110,115,0),309]]);
         typesn += `${parseInt(`${uimanager2}`)}`;
         othermatchdetailbgE += 1;
         uimanager2 *= 2;
         episodesC.push(episodesC.length);
         stylesh = new Map([[`${episodesC.length}`, episodesC.length * parseInt(`${othermatchdetailbgE}`)]]);
         break;
      }
      if (!rewind5.includes(mimed)) {
         mimed += parseFloat(`${1 | typesn.length}`);
      }
      for (let m = 0; m < 3; m++) {
          let recommendation9 = true;
          let topic3: Array<any> = [String.fromCharCode(97,108,97,99,0), String.fromCharCode(102,105,110,97,108,105,115,101,114,0), String.fromCharCode(97,115,105,110,107,0)];
          let vipsportt = String.fromCharCode(102,116,118,108,105,110,107,0);
          let headere: Array<any> = [55, 258, 91];
         rewind5 = [headere.length % 3];
         recommendation9 = vipsportt.length <= 77;
         topic3 = [((recommendation9 ? 4 : 4))];
         vipsportt = `${((recommendation9 ? 2 : 4) % (Math.max(vipsportt.length, 5)))}`;
         headere = [(String.fromCharCode(50,0) == vipsportt ? vipsportt.length : topic3.length)];
      }
         rewind5 = [typesn.length];
      let transferd = 5195477 <= rewind5.length;
      do {
         rewind5.push(parseInt(`${mimed}`));
         if (transferd) {
            break;
         }
      } while (transferd && (5 < (3 & rewind5.length) || (2.34 - mimed) < 5.41));
      loginsuccessB -= photoU.length;
   let gifgoalbga = logoutX == String.fromCharCode(54,113,97,109,113,108,50,107,0);
   do {
      logoutX += `${2 % (Math.max(10, roundN.size))}`;
      if (gifgoalbga) {
         break;
      }
   } while (gifgoalbga && (gesturet.length < 1));
      gesturet.push(3);
   for (let w = 0; w < 1; w++) {
      whitet = cross5 < 19.45;
   }
   while (5 <= (const_vQ.length << (Math.min(1, Math.abs(roundN.size))))) {
       let modulesH: Array<any> = [417, 779];
       let fullscreenmaxW = String.fromCharCode(108,105,98,97,118,102,105,108,116,101,114,0);
       let templateprocessorJ: Map<any, any> = new Map([[String.fromCharCode(101,116,104,114,101,97,100,105,110,103,0),String.fromCharCode(116,101,120,116,0)], [String.fromCharCode(100,117,109,112,105,110,102,111,0),String.fromCharCode(109,111,100,101,108,115,0)]]);
       let right6 = String.fromCharCode(101,110,118,0);
         modulesH.push(right6.length + templateprocessorJ.size);
      let windT = 8980435 <= templateprocessorJ.size;
      do {
         templateprocessorJ = new Map([[`${templateprocessorJ.size}`, modulesH.length]]);
         if (windT) {
            break;
         }
      } while (((3 | templateprocessorJ.size) > 3) && windT);
      while (templateprocessorJ.size > 5) {
         templateprocessorJ = new Map([[`${modulesH.length}`, right6.length]]);
         break;
      }
      if (fullscreenmaxW == right6) {
          let nextk: Array<any> = [690, 318, 673];
          let stationE = 3;
          let logouserW = false;
          let adultm = 5;
          let short_5h: Map<any, any> = new Map([[String.fromCharCode(117,110,109,111,118,101,100,0),String.fromCharCode(114,111,119,115,112,97,110,0)], [String.fromCharCode(105,105,110,116,0),String.fromCharCode(109,97,100,100,0)]]);
         right6 += `${1 + fullscreenmaxW.length}`;
         nextk = [1 / (Math.max(1, adultm))];
         stationE <<= Math.min(Math.abs(1), 4);
         logouserW = 10 < stationE;
         adultm <<= Math.min(3, Math.abs(3 >> (Math.min(Math.abs(stationE), 1))));
         short_5h = new Map([[`${short_5h.size}`, 2]]);
      }
       let actionsE = 1;
         right6 += `${templateprocessorJ.size % 2}`;
         right6 += `${(right6 == String.fromCharCode(70,0) ? right6.length : fullscreenmaxW.length)}`;
         right6 = `${(right6 == String.fromCharCode(97,0) ? right6.length : actionsE)}`;
      let aboutX = 8418911 >= templateprocessorJ.size;
      do {
          let debugs = 0.0;
          let iconcalendarM: Array<any> = [488, 230, 6];
          let libcxxcomponentsB = 5;
          let alerto = 0.0;
         templateprocessorJ.set(`${libcxxcomponentsB}`, libcxxcomponentsB + actionsE);
         debugs += parseInt(`${debugs}`) % 2;
         iconcalendarM.push(parseInt(`${debugs}`));
         alerto -= iconcalendarM.length;
         if (aboutX) {
            break;
         }
      } while ((3 >= right6.length) && aboutX);
          let small7: Map<any, any> = new Map([[String.fromCharCode(114,111,116,97,116,105,111,110,97,110,103,108,101,0),String.fromCharCode(107,101,112,116,0)], [String.fromCharCode(112,101,114,102,0),String.fromCharCode(116,116,97,99,104,109,101,110,116,0)], [String.fromCharCode(97,103,103,114,101,103,97,116,101,100,0),String.fromCharCode(117,110,115,97,116,105,115,102,105,101,100,0)]]);
         actionsE >>= Math.min(5, modulesH.length);
         small7.set(`${small7.size}`, 3);
         fullscreenmaxW += `${actionsE}`;
      while (!right6.startsWith(fullscreenmaxW)) {
          let wind5 = 4.0;
          let termsZ = String.fromCharCode(97,100,100,105,116,105,111,110,97,108,0);
         fullscreenmaxW = `${termsZ.length}`;
         wind5 *= parseFloat(`${parseInt(`${wind5}`) & parseInt(`${wind5}`)}`);
         termsZ = `${parseInt(`${wind5}`)}`;
         break;
      }
      const_vQ = `${overlaym.length << (Math.min(Math.abs(1), 5))}`;
      break;
   }
       let giftbutton6: Array<any> = [435, 114];
       let telegram0 = String.fromCharCode(112,114,101,0);
      if (telegram0.endsWith(`${giftbutton6.length}`)) {
         giftbutton6 = [telegram0.length + giftbutton6.length];
      }
      if ((giftbutton6.length / (Math.max(1, telegram0.length))) == 2) {
          let iconbellactivez = false;
         telegram0 += "2";
         iconbellactivez = iconbellactivez || !iconbellactivez;
      }
       let clocku = 3.0;
      if (1 < (telegram0.length - 1) || 1 < (giftbutton6.length - telegram0.length)) {
         telegram0 = `${giftbutton6.length}`;
      }
          let switch_z2K = String.fromCharCode(103,114,97,99,101,0);
          let libfabricjniB = false;
          let mailu = String.fromCharCode(114,101,100,118,0);
         telegram0 += `${mailu.length + giftbutton6.length}`;
         switch_z2K += `${switch_z2K.length % 3}`;
         libfabricjniB = !libfabricjniB;
         mailu += `${((libfabricjniB ? 2 : 4))}`;
      if (1 > (giftbutton6.length >> (Math.min(Math.abs(5), 2)))) {
         giftbutton6 = [giftbutton6.length % (Math.max(1, 4))];
      }
      whitet = String.fromCharCode(78,0) == overlaym;
      return;
    }

    await dispatch(updateUserAuth(result));

   let awayiconn = String.fromCharCode(105,54,55,0) == overlaym;
   do {
       let launcherH = String.fromCharCode(103,108,111,115,115,0);
       let sellg = String.fromCharCode(118,101,114,108,97,121,0);
       let controlsE = String.fromCharCode(105,109,109,117,116,97,98,108,101,0);
       let libreactnativejniD = 1;
       let leakcheckerw = 2.0;
       let type_rx = false;
       let leftT = false;
      for (let l = 0; l < 1; l++) {
          let libreactnativejni2 = 3.0;
         leftT = !leftT && sellg.length < 9;
         libreactnativejni2 -= parseFloat(`${parseInt(`${libreactnativejni2}`) & parseInt(`${libreactnativejni2}`)}`);
      }
      for (let v = 0; v < 3; v++) {
         launcherH = `${libreactnativejniD / (Math.max(sellg.length, 1))}`;
      }
         leftT = (sellg.length + launcherH.length) < 73;
         leftT = (!type_rx ? leftT : !type_rx);
      let resulti = 6950983 <= launcherH.length;
      do {
         launcherH += `${libreactnativejniD % (Math.max(2, 9))}`;
         if (resulti) {
            break;
         }
      } while ((5 < controlsE.length) && resulti);
      let downloadT = leftT ? !leftT : leftT;
      do {
          let disconnectedF = 5;
          let turndownu = String.fromCharCode(112,114,101,100,0);
         leftT = sellg.length == launcherH.length;
         disconnectedF %= Math.max(3, disconnectedF);
         turndownu = `${disconnectedF ^ 1}`;
         if (downloadT) {
            break;
         }
      } while (downloadT && (leftT));
         leakcheckerw += parseFloat(`${2}`);
         leakcheckerw /= Math.max(1, parseFloat(`${parseInt(`${leakcheckerw}`) / 1}`));
      for (let s = 0; s < 1; s++) {
          let iconmegaphoneW: Array<any> = [334, 817];
         launcherH += `${((leftT ? 2 : 2) << (Math.min(Math.abs(2), 3)))}`;
         iconmegaphoneW = [1 & iconmegaphoneW.length];
      }
      if ((launcherH.length | libreactnativejniD) > 4 && 4 > (4 | launcherH.length)) {
         libreactnativejniD *= (controlsE == String.fromCharCode(107,0) ? controlsE.length : parseInt(`${leakcheckerw}`));
      }
      let iconsubssuccessP = 5978212 <= sellg.length;
      do {
          let ewarded5 = String.fromCharCode(97,108,116,101,114,110,97,116,105,118,101,115,0);
          let othera = String.fromCharCode(116,114,97,105,108,105,110,103,0);
          let iconwechat0: Array<any> = [911, 614, 232];
         sellg = `${1 >> (Math.min(2, othera.length))}`;
         ewarded5 += `${iconwechat0.length}`;
         othera = `${iconwechat0.length}`;
         if (iconsubssuccessP) {
            break;
         }
      } while ((controlsE != sellg) && iconsubssuccessP);
         libreactnativejniD -= (sellg == String.fromCharCode(102,0) ? sellg.length : (leftT ? 5 : 4));
      if (!type_rx) {
         type_rx = (controlsE.length * libreactnativejniD) > 77;
      }
      if (!leftT) {
         launcherH = `${((type_rx ? 5 : 2))}`;
      }
      overlaym += `${anews3.length}`;
      if (awayiconn) {
         break;
      }
   } while (awayiconn && (5 > overlaym.length));
      photoU = `${logoutX.length % (Math.max(overlaym.length, 7))}`;
      gesturet.push(anews3.length | 3);
       let redscoreballm = 1;
         redscoreballm >>= Math.min(Math.abs(redscoreballm * redscoreballm), 5);
      let topicD = redscoreballm >= 7238765;
      do {
         redscoreballm &= redscoreballm << (Math.min(Math.abs(redscoreballm), 1));
         if (topicD) {
            break;
         }
      } while (topicD && (2 < (redscoreballm ^ 5)));
         redscoreballm &= 1 | redscoreballm;
      anews3 = `${parseInt(`${loginsuccessB}`) * 3}`;
   while ((logoutX.length / (Math.max(6, suggestionq.size))) < 2) {
       let yellowanimationliveQ = String.fromCharCode(98,117,116,116,101,114,102,108,121,0);
       let imagesc = true;
       let shareblacku = String.fromCharCode(101,120,112,114,0);
      let backgroundQ = imagesc ? !imagesc : imagesc;
      do {
          let iconclosewhitea = 3.0;
          let updatesI = String.fromCharCode(98,111,117,110,100,115,0);
          let nativeU: Array<any> = [571, 593];
          let vietnamY = String.fromCharCode(97,112,112,114,101,99,97,116,105,111,110,0);
         imagesc = nativeU.includes(imagesc);
         iconclosewhitea *= 1;
         updatesI = `${vietnamY.length}`;
         nativeU.push(3);
         vietnamY += `${parseInt(`${iconclosewhitea}`) / 2}`;
         if (backgroundQ) {
            break;
         }
      } while (backgroundQ && (shareblacku.length < 3 && imagesc));
          let nativeexD = 0;
          let plash0 = 4.0;
          let progressv = true;
         imagesc = !imagesc;
         nativeexD += parseInt(`${plash0}`) >> (Math.min(1, Math.abs(2)));
         plash0 /= Math.max(1, parseInt(`${plash0}`));
         progressv = plash0 >= 20.64 && 95 >= nativeexD;
         shareblacku = `${((imagesc ? 4 : 3))}`;
         shareblacku = `${((imagesc ? 5 : 3))}`;
          let sellmathbackgroundB = 0;
          let confirmationK = 2.0;
         imagesc = 75 < shareblacku.length;
         sellmathbackgroundB &= sellmathbackgroundB ^ parseInt(`${confirmationK}`);
         confirmationK -= 2;
         imagesc = 82 > shareblacku.length && String.fromCharCode(75,0) == yellowanimationliveQ;
       let iconpipexpandJ = String.fromCharCode(111,114,105,101,110,116,0);
         imagesc = iconpipexpandJ.length >= shareblacku.length;
      for (let f = 0; f < 2; f++) {
          let iconmegaphoneD = 4;
          let d_managerE = false;
         iconpipexpandJ = `${(iconmegaphoneD % (Math.max(4, (d_managerE ? 3 : 4))))}`;
      }
      suggestionq.set(photoU, 2);
      break;
   }
   for (let v = 0; v < 2; v++) {
      whitet = 90.83 == cross5 && const_vQ.length == 74;
   }

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
        displayText = item.title;
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
