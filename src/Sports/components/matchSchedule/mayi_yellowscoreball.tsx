import React, { memo, useMemo, useState } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import FastImage from '../../../components/common/mayi_slider';
import { Link, useTheme } from '@react-navigation/native';
import styles from './mayi_iconarrowrightwhite';
import { IsSub, Sub, Views, IconViewerGif, Live, VideoLiveWhite, AnimationLiveWhite } from '../../assets';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import vars from '../../utility/mayi_mbjscommon_register';
import { HomeIcon, AwayIcon, AnimationLive, VideoLive } from '../../assets';
import {
  calculateScore,
  getMatchStatus,
  liveRoomName,
} from '../../utility/utils';
import store from '@redux/mayi_live_tumbnail';
import { useNavigation } from '@react-navigation/native';
import { mayi_Default } from '../../types/mayi_homeinactive';
import FixedTouchableHighlight from '../fixedTouchableHighlight';
import { matchOnTime } from '../../utility/mayi_newinterstitial';

interface mayi_GoogleViews {
  matchSche: mayi_Default,
  onPress?: any
  followMatchIds?: Array<number>
  isMatchPage?: boolean
  matchType?: 'basketball' | 'football' | 'others'
}

const MatchScheduleLive = ({ matchSche, onPress, isMatchPage = true, matchType }: mayi_GoogleViews) => {
  

  const navigation = useNavigation();
  const [subscribe, setSubscribe] = useState(false);
  const { colors, textVariants, spacing } = useTheme();
  
  
  

  let totalViews = 0;
  const calTotalViews = () => {
       let statsv = String.fromCharCode(108,95,49,56,95,110,97,109,101,0);
    let iconrightorangep = 2;
    let blackp = String.fromCharCode(111,117,116,112,117,116,95,50,95,52,52,0);
    let expiredX = false;
    let embedl = String.fromCharCode(109,97,105,110,112,97,103,101,95,53,95,49,48,48,0);
    let rewardr = false;
    let user7 = 1.0;
    let combine_ = 3.0;
    let playy: Map<any, any> = new Map([[String.fromCharCode(112,95,51,54,95,108,111,117,100,115,112,101,97,107,101,114,0),String.fromCharCode(116,101,120,116,117,114,101,115,95,54,95,51,49,0)], [String.fromCharCode(113,95,54,50,95,100,101,115,99,114,0),String.fromCharCode(104,95,53,56,95,51,95,55,54,0)]]);
    let telegramM: Map<any, any> = new Map([[String.fromCharCode(97,116,111,109,105,99,115,95,114,95,50,55,0),417], [String.fromCharCode(114,100,99,111,115,116,95,111,95,56,48,0),623]]);
   while (2 == statsv.length || expiredX) {
      expiredX = rewardr;
      break;
   }
      blackp = `${1 / (Math.max(parseInt(`${user7}`), 5))}`;
      rewardr = blackp.length == 81;
       let shoote = 3.0;
       let push0 = String.fromCharCode(108,101,100,103,101,114,95,115,95,56,48,0);
          let sorty = 1.0;
         push0 += `${push0.length}`;
         sorty -= 2 | parseInt(`${sorty}`);
         push0 = `${3 << (Math.min(3, push0.length))}`;
      for (let a = 0; a < 2; a++) {
         shoote += 3 - push0.length;
      }
         push0 += `${push0.length & parseInt(`${shoote}`)}`;
          let schedulet = 1;
          let schedule6 = 3.0;
         shoote /= Math.max(1, 2);
         schedulet >>= Math.min(2, Math.abs(schedulet));
         schedule6 -= 1 % (Math.max(schedulet, 1));
         push0 += `${push0.length + parseInt(`${shoote}`)}`;
      embedl += `${parseInt(`${combine_}`)}`;

    if (matchSche?.streams != undefined && matchSche?.streams.length > 0) {

   for (let q = 0; q < 3; q++) {
      iconrightorangep ^= 2;
   }
   if (playy.size > 5 && (playy.size * 5) > 1) {
      rewardr = blackp == String.fromCharCode(119,0);
   }
   if ((embedl.length / 1) <= 2 || 1 <= (embedl.length / 1)) {
      embedl = `${statsv.length * 2}`;
   }
   if (2.97 < (user7 + 4.98)) {
      user7 *= parseFloat(`${1}`);
   }
      matchSche?.streams.map(e => (totalViews += e.view_num));

       let runtime_ = 5.0;
       let nnewinterstitialf = 5;
          let left1 = 1;
         nnewinterstitialf ^= left1;
      for (let n = 0; n < 3; n++) {
         runtime_ += parseFloat(`${2 / (Math.max(6, nnewinterstitialf))}`);
      }
       let middleware2 = String.fromCharCode(105,109,105,113,95,54,95,55,51,0);
         runtime_ /= Math.max(parseFloat(`${parseInt(`${runtime_}`) - 1}`), 4);
          let libcxxcomponentsi = String.fromCharCode(101,95,50,57,95,114,101,109,111,118,101,114,0);
          let commonx = false;
         nnewinterstitialf &= parseInt(`${runtime_}`);
         libcxxcomponentsi = `${((commonx ? 1 : 2))}`;
         commonx = libcxxcomponentsi.length >= 26;
          let schedulez = String.fromCharCode(117,95,57,95,115,121,109,98,111,108,105,99,97,116,101,100,0);
          let classes0: Map<any, any> = new Map([[String.fromCharCode(98,95,56,57,95,111,108,100,108,105,115,116,0),487], [String.fromCharCode(114,101,102,112,116,114,95,50,95,55,53,0),199]]);
         nnewinterstitialf |= middleware2.length;
         schedulez = `${schedulez.length << (Math.min(Math.abs(1), 5))}`;
         classes0.set(`${schedulez}`, (String.fromCharCode(77,0) == schedulez ? schedulez.length : classes0.size));
      embedl += "1";
   for (let i = 0; i < 2; i++) {
       let reddownarrowX: Map<any, any> = new Map([[String.fromCharCode(102,117,110,99,95,114,95,57,51,0),183], [String.fromCharCode(108,105,98,99,95,52,95,56,55,0),397], [String.fromCharCode(101,95,51,49,95,115,116,114,105,112,0),242]]);
       let turndownX: Array<any> = [444, 215];
       let controlx = String.fromCharCode(106,95,51,52,95,118,111,105,99,101,109,97,105,108,0);
       let sentryT = String.fromCharCode(100,101,99,111,109,112,95,118,95,51,55,0);
       let iconusers = String.fromCharCode(98,108,111,99,107,100,95,99,95,49,53,0);
         controlx += `${reddownarrowX.size % (Math.max(1, turndownX.length))}`;
          let vipsportR = String.fromCharCode(104,105,100,105,110,103,95,110,95,54,56,0);
         iconusers = `${sentryT.length}`;
         vipsportR += `${vipsportR.length}`;
      for (let j = 0; j < 1; j++) {
         reddownarrowX.set(sentryT, sentryT.length - reddownarrowX.size);
      }
      if (iconusers.length <= sentryT.length) {
          let eact7 = String.fromCharCode(117,95,51,53,95,103,116,101,115,116,0);
          let schedulerL = String.fromCharCode(111,95,51,50,95,103,114,101,101,116,105,110,103,0);
          let whistleorangey = 3.0;
          let middlewarew = String.fromCharCode(103,95,52,52,95,100,97,121,0);
          let mathP = true;
         iconusers += `${(3 & (mathP ? 2 : 3))}`;
         eact7 = "1";
         schedulerL += "2";
         whistleorangey /= Math.max(4, parseFloat(`${middlewarew.length}`));
         middlewarew = `${schedulerL.length >> (Math.min(5, middlewarew.length))}`;
         mathP = String.fromCharCode(122,0) == middlewarew;
      }
         sentryT += `${controlx.length}`;
       let teame = String.fromCharCode(116,119,101,97,107,95,107,95,54,56,0);
      let plusg = iconusers.length <= 8642405;
      do {
         iconusers += `${turndownX.length ^ 3}`;
         if (plusg) {
            break;
         }
      } while (plusg && (controlx == iconusers));
      for (let l = 0; l < 3; l++) {
         iconusers += `${teame.length / 1}`;
      }
      if (4 == (iconusers.length << (Math.min(5, Math.abs(reddownarrowX.size))))) {
         reddownarrowX = new Map([[iconusers, iconusers.length | 2]]);
      }
         turndownX = [teame.length | 1];
         sentryT = `${controlx.length}`;
       let plashB = 0.0;
       let typingQ = 3.0;
      if ((typingQ * 2.5) >= 3.14 && 5 >= (sentryT.length | 5)) {
         sentryT += "1";
      }
      if (iconusers == String.fromCharCode(116,0) && teame == String.fromCharCode(79,0)) {
         iconusers += `${iconusers.length}`;
      }
      let bootsplashQ = 4915894.0 <= typingQ;
      do {
         typingQ *= sentryT.length + turndownX.length;
         if (bootsplashQ) {
            break;
         }
      } while (bootsplashQ && (1.64 == plashB));
      telegramM = new Map([[`${telegramM.size}`, telegramM.size]]);
   }
   if ((iconrightorangep - statsv.length) > 2 || 1 > (statsv.length - 2)) {
      iconrightorangep *= telegramM.size | statsv.length;
   }
   for (let h = 0; h < 2; h++) {
      embedl = `${3 | parseInt(`${combine_}`)}`;
   }
    }

    let dividedTotalViews = 0;

      statsv += "1";
   let penaltyshootnogoalN = statsv.length >= 7322718;
   do {
       let save6 = 0.0;
       let qaagp = 3;
       let componentregistry9 = String.fromCharCode(121,111,110,108,121,120,95,118,95,56,54,0);
       let stationl = true;
      while (save6 == 4.82 && 3.50 == (4.82 * save6)) {
          let codeT = 3.0;
          let windP = String.fromCharCode(115,95,50,55,95,97,97,102,99,0);
          let whitevideoliveG = true;
          let thailandV = String.fromCharCode(119,95,55,51,95,99,104,97,110,110,101,108,115,0);
          let modes = String.fromCharCode(100,121,110,97,109,105,99,97,108,108,121,95,98,95,53,55,0);
         save6 *= parseFloat(`${3}`);
         codeT += parseFloat(`${windP.length}`);
         windP += `${(String.fromCharCode(121,0) == windP ? (whitevideoliveG ? 3 : 5) : windP.length)}`;
         whitevideoliveG = modes.length > 31 || thailandV.length > 31;
         thailandV = `${parseInt(`${codeT}`)}`;
         modes = `${((whitevideoliveG ? 2 : 1) >> (Math.min(modes.length, 3)))}`;
         break;
      }
         componentregistry9 = `${2 & qaagp}`;
      let commonm = stationl ? !stationl : stationl;
      do {
          let valuest: Map<any, any> = new Map([[String.fromCharCode(102,111,114,99,101,95,110,95,55,49,0),false ], [String.fromCharCode(99,111,100,101,98,111,111,107,95,100,95,52,55,0),true ], [String.fromCharCode(119,111,114,107,95,105,95,54,49,0),false ]]);
          let libapminsightam: Array<any> = [String.fromCharCode(114,95,55,53,95,98,117,99,107,101,116,0), String.fromCharCode(106,95,55,50,95,105,110,99,114,109,101,114,103,101,0), String.fromCharCode(122,95,55,53,95,109,97,103,110,105,116,117,100,101,115,0)];
          let runtimen: Map<any, any> = new Map([[String.fromCharCode(106,95,54,52,95,99,111,114,114,101,99,116,101,100,0),false ], [String.fromCharCode(104,95,55,48,95,99,111,109,112,111,115,105,116,105,111,110,0),false ]]);
          let modalP = String.fromCharCode(99,102,116,102,115,117,98,95,112,95,51,56,0);
          let username9 = false;
         stationl = modalP.length <= 78 || username9;
         valuest = new Map([[`${runtimen.size}`, libapminsightam.length - runtimen.size]]);
         libapminsightam.push(3);
         modalP += "1";
         username9 = runtimen.size >= 38;
         if (commonm) {
            break;
         }
      } while ((stationl || 3.59 > (3.61 * save6)) && commonm);
      if (componentregistry9.endsWith(`${stationl}`)) {
          let bottomS = String.fromCharCode(99,95,56,55,95,114,111,119,107,101,121,0);
          let connectionQ = 0.0;
         stationl = !stationl;
         bottomS += `${bottomS.length * 2}`;
         connectionQ += parseFloat(`${2}`);
      }
      while (!stationl && 2 <= componentregistry9.length) {
          let i_playerm = String.fromCharCode(106,95,53,57,95,100,97,116,101,115,0);
         componentregistry9 += `${i_playerm.length}`;
         break;
      }
         qaagp += componentregistry9.length;
         componentregistry9 += `${qaagp << (Math.min(Math.abs(3), 5))}`;
         stationl = (save6 - parseFloat(`${componentregistry9.length}`)) >= 52.57;
      let carouselA = qaagp <= 7581348;
      do {
         qaagp %= Math.max(3, qaagp);
         if (carouselA) {
            break;
         }
      } while (((save6 + parseFloat(`${qaagp}`)) >= 3.92 || (save6 + parseFloat(`${qaagp}`)) >= 3.92) && carouselA);
      while (2 <= (4 % (Math.max(1, qaagp))) || 4 <= (componentregistry9.length % (Math.max(2, qaagp)))) {
         componentregistry9 = `${qaagp >> (Math.min(componentregistry9.length, 3))}`;
         break;
      }
      if (stationl || 1 > componentregistry9.length) {
         componentregistry9 += `${qaagp * 2}`;
      }
      let hongkongP = componentregistry9.length >= 6059418;
      do {
         componentregistry9 += `${(componentregistry9 == String.fromCharCode(65,0) ? componentregistry9.length : (stationl ? 5 : 1))}`;
         if (hongkongP) {
            break;
         }
      } while ((!stationl && componentregistry9.length >= 2) && hongkongP);
      statsv += `${iconrightorangep - 2}`;
      if (penaltyshootnogoalN) {
         break;
      }
   } while (penaltyshootnogoalN && (rewardr));
   for (let t = 0; t < 3; t++) {
       let bingm = String.fromCharCode(121,95,53,52,95,99,105,112,104,101,114,98,121,110,97,109,101,0);
       let formH = 5.0;
       let const_zs = String.fromCharCode(97,100,100,114,101,115,115,95,55,95,51,56,0);
       let filterf = 4.0;
       let filed_ = 1;
      let libflipperM = 9551471.0 <= filterf;
      do {
         filterf -= parseInt(`${formH}`) << (Math.min(Math.abs(1), 5));
         if (libflipperM) {
            break;
         }
      } while ((const_zs.length >= parseInt(`${filterf}`)) && libflipperM);
      if (2.30 <= formH) {
         formH *= parseFloat(`${parseInt(`${formH}`) + 1}`);
      }
         const_zs = `${parseInt(`${filterf}`)}`;
         filterf -= 3 / (Math.max(4, filed_));
         filterf -= const_zs.length;
      if ((const_zs.length / (Math.max(2, 2))) == 5) {
          let lineI = true;
          let neonM = String.fromCharCode(116,121,112,101,115,116,114,95,112,95,55,53,0);
          let libbufferC = 4.0;
         formH -= (parseFloat(`${(lineI ? 4 : 3) << (Math.min(Math.abs(1), 2))}`));
         lineI = String.fromCharCode(95,0) == neonM;
         neonM = `${parseInt(`${libbufferC}`) / 2}`;
         libbufferC -= neonM.length % 3;
      }
      for (let b = 0; b < 1; b++) {
         filed_ /= Math.max((String.fromCharCode(72,0) == const_zs ? parseInt(`${formH}`) : const_zs.length), 2);
      }
      if ((bingm.length + parseInt(`${formH}`)) > 3 && (bingm.length - 3) > 1) {
         formH *= parseFloat(`${1}`);
      }
         filed_ -= 2;
      if (formH > parseFloat(`${const_zs.length}`)) {
         const_zs = "1";
      }
         bingm = `${bingm.length}`;
         filed_ >>= Math.min(Math.abs(bingm.length - 1), 3);
          let icontransferclubo = 4.0;
          let away6 = true;
          let countryv = 3;
         formH /= Math.max(parseFloat(`${parseInt(`${icontransferclubo}`) % 1}`), 5);
         icontransferclubo -= parseFloat(`${countryv / 1}`);
         away6 = away6 && 76 > countryv;
         filed_ %= Math.max(parseInt(`${filterf}`), 5);
       let resendh = String.fromCharCode(112,105,120,101,108,115,120,95,54,95,49,53,0);
       let m_positionK = String.fromCharCode(114,101,112,108,97,121,101,100,95,113,95,52,56,0);
      iconrightorangep += parseInt(`${user7}`);
   }
       let modelsw = String.fromCharCode(117,110,115,116,97,107,101,95,110,95,50,53,0);
       let iconsaveimageN = 2;
      let unimplementedview0 = modelsw == String.fromCharCode(52,101,52,57,108,103,100,101,102,102,0);
      do {
         modelsw = `${modelsw.length << (Math.min(3, Math.abs(iconsaveimageN)))}`;
         if (unimplementedview0) {
            break;
         }
      } while (unimplementedview0 && ((iconsaveimageN - modelsw.length) == 5 || 5 == (iconsaveimageN - modelsw.length)));
      for (let v = 0; v < 2; v++) {
         modelsw = `${(modelsw == String.fromCharCode(68,0) ? iconsaveimageN : modelsw.length)}`;
      }
      for (let f = 0; f < 1; f++) {
         iconsaveimageN &= modelsw.length;
      }
         iconsaveimageN %= Math.max(iconsaveimageN, 4);
         modelsw = `${2 ^ modelsw.length}`;
      if ((iconsaveimageN >> (Math.min(modelsw.length, 3))) == 2 || 4 == (modelsw.length >> (Math.min(Math.abs(2), 2)))) {
         iconsaveimageN += iconsaveimageN * modelsw.length;
      }
      playy = new Map([[modelsw, iconsaveimageN | 1]]);
    if (totalViews / 10000 >= 1) {

   let libmapbufferjniz = 8869669.0 >= combine_;
   do {
       let colorsM = true;
       let privatechatbgP = 4;
       let bgvipsportV = 1.0;
       let collection1 = 0.0;
         privatechatbgP >>= Math.min(Math.abs(parseInt(`${bgvipsportV}`) >> (Math.min(5, Math.abs(1)))), 4);
      if (2 >= (2 + privatechatbgP) || !colorsM) {
          let iconsetting4 = 0;
          let reddownarrowY: Array<any> = [String.fromCharCode(99,111,110,116,97,105,110,105,110,103,95,121,95,52,54,0), String.fromCharCode(111,98,116,97,105,110,101,114,95,105,95,53,55,0), String.fromCharCode(105,95,49,50,95,98,111,117,110,99,101,0)];
         colorsM = !colorsM;
         iconsetting4 <<= Math.min(Math.abs(reddownarrowY.length / 1), 3);
         reddownarrowY = [iconsetting4];
      }
         privatechatbgP -= privatechatbgP & parseInt(`${bgvipsportV}`);
         collection1 -= parseInt(`${bgvipsportV}`) << (Math.min(2, Math.abs(3)));
      let suggestionL = 5565197 <= privatechatbgP;
      do {
         privatechatbgP <<= Math.min(Math.abs(parseInt(`${bgvipsportV}`) * 3), 4);
         if (suggestionL) {
            break;
         }
      } while (suggestionL && (1 >= (4 & privatechatbgP) && (privatechatbgP * parseInt(`${collection1}`)) >= 4));
         privatechatbgP *= privatechatbgP % (Math.max(6, parseInt(`${collection1}`)));
         privatechatbgP /= Math.max(2, privatechatbgP);
         collection1 -= parseInt(`${bgvipsportV}`) + 3;
          let collectionV = String.fromCharCode(117,110,112,114,111,116,101,99,116,95,57,95,50,54,0);
          let googlez = String.fromCharCode(108,101,97,102,110,111,100,101,95,52,95,53,48,0);
         collection1 -= parseInt(`${collection1}`) | 2;
         collectionV = `${collectionV.length << (Math.min(Math.abs(2), 3))}`;
         googlez += `${googlez.length}`;
          let predictionbannersharedK = 2.0;
          let transfer1: Map<any, any> = new Map([[String.fromCharCode(102,95,56,53,95,115,108,105,100,0),String.fromCharCode(115,99,104,101,100,117,108,101,100,95,100,95,54,53,0)], [String.fromCharCode(121,95,51,48,95,115,117,98,116,97,115,107,0),String.fromCharCode(121,95,49,52,95,104,109,104,100,0)]]);
          let hookt: Array<any> = [634, 915, 437];
         privatechatbgP |= hookt.length / 1;
         predictionbannersharedK -= parseFloat(`${3 * parseInt(`${predictionbannersharedK}`)}`);
         transfer1 = new Map([[`${transfer1.size}`, transfer1.size * parseInt(`${predictionbannersharedK}`)]]);
         hookt = [transfer1.size / (Math.max(3, parseInt(`${predictionbannersharedK}`)))];
         privatechatbgP += 3;
         bgvipsportV += 1 - privatechatbgP;
      combine_ /= Math.max(4, parseFloat(`${parseInt(`${combine_}`)}`));
      if (libmapbufferjniz) {
         break;
      }
   } while ((4 < (playy.size - parseInt(`${combine_}`)) && (4 - playy.size) < 2) && libmapbufferjniz);
      embedl += `${(iconrightorangep * (expiredX ? 4 : 1))}`;
      playy.set(`${iconrightorangep}`, 2 << (Math.min(5, blackp.length)));
      embedl = `${playy.size}`;
      dividedTotalViews = totalViews / 10000;

      user7 -= parseFloat(`${parseInt(`${combine_}`)}`);
      embedl = "1";
   while (!blackp.includes(`${expiredX}`)) {
       let taild = String.fromCharCode(107,95,49,50,95,97,112,110,115,0);
       let componentregistrym = true;
       let airbnbstarG = String.fromCharCode(99,102,102,116,102,95,100,95,54,50,0);
      if (componentregistrym || taild.length >= 5) {
         componentregistrym = (((componentregistrym ? taild.length : 76) - taild.length) <= 76);
      }
          let dangerh: Map<any, any> = new Map([[String.fromCharCode(108,95,49,51,95,97,118,97,105,108,97,98,105,108,105,116,121,0),754], [String.fromCharCode(122,95,49,51,95,98,105,116,119,114,105,116,101,114,0),211]]);
         componentregistrym = dangerh.size <= 27;
      while (taild.length <= 3) {
         componentregistrym = !airbnbstarG.startsWith(`${componentregistrym}`);
         break;
      }
       let mbridgef = 4;
         airbnbstarG += `${(airbnbstarG == String.fromCharCode(79,0) ? (componentregistrym ? 5 : 1) : airbnbstarG.length)}`;
       let libglogu = 2.0;
       let footballfieldJ = 4.0;
       let libavcodech = 3.0;
         libglogu -= parseFloat(`${1}`);
       let frame_cgP = String.fromCharCode(111,95,56,49,95,100,105,115,112,111,115,97,98,108,101,0);
      expiredX = embedl.length == statsv.length;
      break;
   }
   let typingW = expiredX ? !expiredX : expiredX;
   do {
      expiredX = (30 == ((expiredX ? playy.size : 37) ^ playy.size));
      if (typingW) {
         break;
      }
   } while ((1 <= playy.size) && typingW);
      return dividedTotalViews.toFixed(1) + '万';
    }

    return totalViews;
  };

  const matchState = matchSche?.state;
  const matchStatus = matchSche?.status;
  const matchSportType = matchSche?.sports_type;

  
  const matchStartTime = matchSche?.start_time;

  
  
  
  
  
  

  
  
  
  
  
  
  

  
  
  
  
  
  
  
  
  

  const matchClicked = async () => {
       let mutedq: Array<any> = [9, 175, 422];
    let predictionbannerh = true;
    let tempnodata1 = true;
    let cornerA = false;
    let eabafadfadddbafeddddeeefeaafd = 0;
    let teamG = 4.0;
    let predictionactivex: Map<any, any> = new Map([[String.fromCharCode(101,118,100,110,115,95,105,95,55,55,0),753], [String.fromCharCode(100,111,117,98,108,105,110,103,95,122,95,55,50,0),824], [String.fromCharCode(110,117,109,112,97,100,95,98,95,49,48,48,0),47]]);
    let whitevideoliveS = String.fromCharCode(108,111,116,116,105,101,95,108,95,55,51,0);
    let libfb0 = 5.0;
    let match1: Map<any, any> = new Map([[String.fromCharCode(115,95,49,51,95,110,112,117,116,0),104], [String.fromCharCode(114,97,110,107,95,114,95,56,54,0),963]]);
    let basketballiconI = String.fromCharCode(111,95,55,57,95,118,101,114,115,105,111,110,103,101,110,101,114,97,116,101,0);
    let libnmsm = true;
      tempnodata1 = !tempnodata1;
   while (tempnodata1) {
       let homeloadingO: Map<any, any> = new Map([[String.fromCharCode(112,95,54,54,95,114,101,112,108,97,121,0),249], [String.fromCharCode(100,111,99,95,57,95,49,48,0),444], [String.fromCharCode(111,95,51,50,95,112,114,105,109,97,108,105,116,121,0),527]]);
       let sina8: Map<any, any> = new Map([[String.fromCharCode(98,95,57,54,95,116,114,117,101,0),645], [String.fromCharCode(108,95,56,95,115,117,98,114,97,110,103,101,0),415], [String.fromCharCode(97,95,49,57,95,116,105,108,101,104,100,114,0),778]]);
       let middle6: Array<any> = [24, 845, 294];
       let singaporeo: Array<any> = [611, 771, 820];
       let sheetu = String.fromCharCode(108,97,117,110,99,104,101,114,95,110,95,54,57,0);
         singaporeo.push(1);
         sheetu += `${middle6.length >> (Math.min(sheetu.length, 2))}`;
          let const_1wm: Map<any, any> = new Map([[String.fromCharCode(108,97,116,101,110,99,121,95,114,95,57,50,0),421], [String.fromCharCode(115,95,53,52,95,103,101,111,107,101,121,0),417]]);
          let twitterp = 4.0;
         sheetu += `${homeloadingO.size}`;
         const_1wm.set(`${twitterp}`, 1);
         twitterp += const_1wm.size;
      while ((3 ^ homeloadingO.size) < 4 || 3 < (homeloadingO.size ^ middle6.length)) {
          let flippers = String.fromCharCode(114,111,117,110,100,105,110,103,95,104,95,53,51,0);
          let homeL: Array<any> = [545, 104];
          let notificationX = String.fromCharCode(97,117,116,111,99,104,101,99,107,112,111,105,110,116,95,54,95,55,0);
         homeloadingO = new Map([[`${singaporeo.length}`, middle6.length << (Math.min(Math.abs(1), 2))]]);
         flippers = `${(notificationX == String.fromCharCode(81,0) ? notificationX.length : homeL.length)}`;
         homeL.push(homeL.length * notificationX.length);
         break;
      }
      for (let c = 0; c < 3; c++) {
         middle6.push(sina8.size / (Math.max(1, singaporeo.length)));
      }
      if ((middle6.length / (Math.max(5, 6))) < 2 || (sina8.size / 5) < 2) {
          let unimplementedview5 = 2.0;
          let elementse: Map<any, any> = new Map([[String.fromCharCode(109,95,56,50,95,120,112,97,116,104,0),986], [String.fromCharCode(99,111,109,112,105,108,101,111,112,116,105,111,110,117,115,101,100,95,103,95,49,49,0),144], [String.fromCharCode(119,95,54,54,95,103,101,116,101,110,118,0),575]]);
          let dataV = String.fromCharCode(113,95,57,48,95,115,117,99,99,101,101,100,101,100,0);
          let scorepopsoundp = String.fromCharCode(119,114,97,112,112,101,114,95,102,95,51,51,0);
         sina8 = new Map([[dataV, dataV.length - scorepopsoundp.length]]);
         unimplementedview5 += parseFloat(`${elementse.size % (Math.max(1, 4))}`);
         elementse.set(`${unimplementedview5}`, parseInt(`${unimplementedview5}`) | elementse.size);
         scorepopsoundp = "1";
      }
      let short_wzT = singaporeo.length >= 5469320;
      do {
          let modalw = String.fromCharCode(100,105,115,97,112,112,101,97,114,97,110,99,101,95,51,95,52,51,0);
          let binddatas_ = 5.0;
          let matchi = 1.0;
          let libavfilter2 = String.fromCharCode(99,114,101,100,101,110,116,105,97,108,115,95,114,95,53,53,0);
         singaporeo = [(String.fromCharCode(66,0) == modalw ? parseInt(`${matchi}`) : modalw.length)];
         binddatas_ += parseInt(`${binddatas_}`) % (Math.max(2, 1));
         matchi += parseFloat(`${libavfilter2.length % 3}`);
         libavfilter2 = `${2 >> (Math.min(3, libavfilter2.length))}`;
         if (short_wzT) {
            break;
         }
      } while (short_wzT && (5 >= (singaporeo.length / 1) || (sheetu.length / (Math.max(1, 9))) >= 3));
      for (let u = 0; u < 3; u++) {
         middle6.push(middle6.length);
      }
      if (Array.from(sina8.keys()).includes(`${singaporeo.length}`)) {
         singaporeo.push(sheetu.length & homeloadingO.size);
      }
         sheetu += `${middle6.length / 3}`;
      for (let j = 0; j < 3; j++) {
         singaporeo.push((sheetu == String.fromCharCode(97,0) ? sheetu.length : singaporeo.length));
      }
      while ((middle6.length - 3) <= 3) {
         homeloadingO = new Map([[`${sina8.size}`, (sheetu == String.fromCharCode(108,0) ? sheetu.length : sina8.size)]]);
         break;
      }
      for (let e = 0; e < 2; e++) {
          let gmailF = false;
          let helper1 = String.fromCharCode(118,95,50,55,95,97,115,111,99,0);
          let zhengpianL = 0;
          let filledJ = String.fromCharCode(122,95,54,50,95,101,110,104,97,110,99,101,0);
         sina8.set(`${zhengpianL}`, middle6.length);
         gmailF = filledJ.length == 43;
         helper1 = `${(filledJ == String.fromCharCode(110,0) ? helper1.length : filledJ.length)}`;
         zhengpianL &= ((gmailF ? 2 : 4) << (Math.min(Math.abs(3), 5)));
      }
          let handlerh = true;
          let becomeN = String.fromCharCode(105,95,55,56,95,109,105,100,110,105,103,104,116,0);
          let comment1 = String.fromCharCode(101,110,116,105,114,101,108,121,95,112,95,56,52,0);
         sina8 = new Map([[`${middle6.length}`, (middle6.length & (handlerh ? 4 : 5))]]);
         handlerh = becomeN.length <= comment1.length;
         becomeN = "2";
         comment1 = "2";
      if (sina8.size <= 5) {
         sina8.set(`${middle6.length}`, middle6.length);
      }
      tempnodata1 = 67 >= eabafadfadddbafeddddeeefeaafd;
      break;
   }
      whitevideoliveS = `${parseInt(`${teamG}`)}`;


    

   if (!tempnodata1) {
       let sigmobX = String.fromCharCode(102,95,53,52,95,112,101,114,109,0);
       let n_unlockf: Array<any> = [649, 337, 330];
       let bridgem = 5;
       let current3 = String.fromCharCode(97,112,112,108,121,105,110,103,95,48,95,56,50,0);
       let basketballmatchdetailbgn = String.fromCharCode(104,101,120,98,105,110,95,98,95,51,51,0);
      while (4 > (n_unlockf.length << (Math.min(current3.length, 1)))) {
         n_unlockf.push(current3.length);
         break;
      }
         current3 += `${n_unlockf.length}`;
          let thumbnailv = String.fromCharCode(117,95,53,54,95,99,114,99,116,97,98,108,101,0);
         bridgem %= Math.max(3, 1);
         thumbnailv += `${thumbnailv.length % (Math.max(2, 9))}`;
       let iconclosed = String.fromCharCode(118,95,53,95,97,116,117,114,97,116,105,111,110,0);
      if (3 >= (5 & n_unlockf.length)) {
         iconclosed += `${basketballmatchdetailbgn.length | 1}`;
      }
       let libhermesY = String.fromCharCode(111,95,54,95,98,105,116,101,0);
       let yellowi = String.fromCharCode(105,95,54,55,95,108,105,98,119,101,98,112,101,110,99,0);
          let modulesg = 2;
          let mountingB = String.fromCharCode(101,95,56,52,0);
          let skipE: Array<any> = [473, 581, 801];
         n_unlockf = [n_unlockf.length | 2];
         modulesg += (String.fromCharCode(115,0) == mountingB ? mountingB.length : modulesg);
         skipE.push(2);
      let reducer7 = n_unlockf.length <= 8513689;
      do {
         n_unlockf = [1 & iconclosed.length];
         if (reducer7) {
            break;
         }
      } while (((2 >> (Math.min(4, basketballmatchdetailbgn.length))) > 1) && reducer7);
       let gradlewq = false;
          let statsnomoredata9 = 3.0;
          let minivodA: Array<any> = [620, 15, 166];
          let pushj = 4;
         bridgem ^= 2 >> (Math.min(2, basketballmatchdetailbgn.length));
         statsnomoredata9 += minivodA.length % (Math.max(2, 3));
         minivodA.push(minivodA.length);
         pushj += minivodA.length << (Math.min(Math.abs(3), 5));
      let filledk = String.fromCharCode(103,115,114,107,117,98,0) == sigmobX;
      do {
          let expiredW = String.fromCharCode(99,108,97,115,115,105,99,95,119,95,57,48,0);
         sigmobX += `${bridgem / (Math.max(2, n_unlockf.length))}`;
         expiredW = `${expiredW.length ^ 2}`;
         if (filledk) {
            break;
         }
      } while (filledk && (basketballmatchdetailbgn != String.fromCharCode(77,0)));
          let videov = String.fromCharCode(103,97,109,109,97,118,97,108,95,109,95,50,51,0);
          let nalyticsq = 0.0;
         bridgem -= ((gradlewq ? 1 : 3) >> (Math.min(Math.abs(1), 2)));
         videov += "1";
         nalyticsq += 1 << (Math.min(5, Math.abs(parseInt(`${nalyticsq}`))));
         current3 += "2";
      for (let m = 0; m < 1; m++) {
          let owngoalb = 1;
          let halffieldimageG: Map<any, any> = new Map([[String.fromCharCode(117,95,52,48,95,116,101,114,109,105,110,97,108,0),386], [String.fromCharCode(119,95,52,53,95,116,109,109,98,114,0),260], [String.fromCharCode(110,111,108,111,99,107,95,117,95,51,57,0),228]]);
          let bodanJ = 1;
         libhermesY += `${((gradlewq ? 2 : 3))}`;
         owngoalb *= halffieldimageG.size / (Math.max(2, owngoalb));
         halffieldimageG.set(`${bodanJ}`, halffieldimageG.size + 1);
         bodanJ <<= Math.min(Math.abs(1), 1);
      }
          let blacklist2: Map<any, any> = new Map([[String.fromCharCode(118,108,99,115,112,101,99,95,53,95,50,54,0),553], [String.fromCharCode(111,95,54,95,114,101,99,101,105,118,105,110,103,0),335], [String.fromCharCode(99,98,117,102,95,116,95,56,57,0),744]]);
         current3 = `${sigmobX.length & 2}`;
         blacklist2 = new Map([[`${blacklist2.size}`, blacklist2.size >> (Math.min(Math.abs(blacklist2.size), 2))]]);
      teamG *= n_unlockf.length * 1;
   }
   if (2 <= predictionactivex.size) {
      predictionactivex = new Map([[`${predictionbannerh}`, 3]]);
   }
       let dicef = 0.0;
       let fasta = String.fromCharCode(116,95,51,95,119,105,112,101,0);
       let sharewhiteZ: Array<any> = [177, 12, 575];
         fasta += `${3 * sharewhiteZ.length}`;
         sharewhiteZ.push(sharewhiteZ.length);
      for (let g = 0; g < 1; g++) {
         sharewhiteZ = [1 << (Math.min(4, sharewhiteZ.length))];
      }
       let overlayQ = String.fromCharCode(114,95,53,55,95,99,97,110,99,101,108,0);
         sharewhiteZ.push(overlayQ.length);
      if (overlayQ.startsWith(`${sharewhiteZ.length}`)) {
         sharewhiteZ.push(2);
      }
         fasta = "3";
      for (let v = 0; v < 3; v++) {
         overlayQ = `${(overlayQ == String.fromCharCode(50,0) ? fasta.length : overlayQ.length)}`;
      }
      let sharedF = 7548539.0 >= dicef;
      do {
          let audienced = String.fromCharCode(102,95,56,95,117,105,111,109,111,118,101,0);
         dicef *= sharewhiteZ.length;
         audienced = "2";
         if (sharedF) {
            break;
         }
      } while (sharedF && (fasta.length >= 1));
      predictionbannerh = null != match1.get(`${libfb0}`);

    

      teamG -= parseInt(`${libfb0}`);
   let customJ = predictionactivex.size <= 8361743;
   do {
      predictionactivex = new Map([[`${predictionactivex.size}`, predictionactivex.size]]);
      if (customJ) {
         break;
      }
   } while (((4 % (Math.max(6, whitevideoliveS.length))) > 3) && customJ);
   for (let v = 0; v < 3; v++) {
      predictionactivex.set(whitevideoliveS, ((predictionbannerh ? 3 : 3) + 2));
   }
    let route: '体育详情' | '足球详情' | '篮球详情' = '体育详情';
    if (matchType === 'football') {
      route = '足球详情';
    } else if (matchType === 'basketball') {
      route = '篮球详情'
    }
    navigation.navigate('体育详情', {
      matchId: matchSche?.id === null ? undefined : matchSche.id,
      streamerId:
        matchSche?.streams?.length > 0
          ? matchSche?.streams[0]?.streamer_id
          : undefined,
      sportType: '足球'
    });
  }



  
  
  
  
  
  
  
  
  
  //         matchSche?.streams?.length > 0
  
  
  
  
  
  

  
  
  
  
  
  
  
  
  
  
  //     const onlineStreamer = match?.streams?.findIndex(e => e.status == 3);
  
  
  
  
  
  
  
  
  
  
  

  
  //   const onlineStreamer = matchSche?.streams?.findIndex(e => e.status == 3);
  
  
  
  
  
  

  return (
    <FixedTouchableHighlight onPress={matchClicked} >
      <View style={styles.live}>
        <View style={styles.verticalBar}></View>
        <View style={{
          height: 90, display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingLeft: 16,
          paddingRight: 16
        }}>
          <View style={styles.liveContent}>
            <View>
              {matchSche?.streams != undefined &&
                matchSche?.streams?.length > 0 &&
                matchSche?.streams?.some(streamer => streamer.status == 3) && (
                  <View>
                    {
                      matchSche?.status === 1
                        ?
                        <View style={styles.pill}>
                          <FastImage style={{
                            width: 20,
                            height: 20,
                          }} source={Live} />
                          <Text style={{ ...textVariants.subBody, color: colors.primary }}>
                            {
                              matchOnTime(
                                matchStartTime,
                                matchSportType,
                                matchStatus,
                                matchState,
                              )
                            }
                          </Text>
                        </View>
                        :
                        <View style={styles.schedule}>
                          <Text style={{ color: colors.muted, textAlign: 'center' }}>
                            {matchSche?.competition?.name_short}
                          </Text>
                          <Text style={{ ...textVariants.small, color: colors.muted, textAlign: 'center' }}>
                            {('0' + new Date(matchSche?.match_time_ts).getHours()).slice(-2) +
                              ':' +
                              ('0' + new Date(matchSche?.match_time).getMinutes()).slice(-2)}
                          </Text>
                        </View>
                    }
                  </View>
                )}
            </View>
            <View style={{ gap: 8 }}>
              <View style={{ ...styles.teamContentB, gap: 10, width: 150 }}>
                {matchSche?.home?.icon != undefined &&
                  matchSche?.home?.icon.length > 0 ? (
                  <FastImage
                    style={styles.teamImage}
                    source={{ uri: matchSche?.home?.icon }}
                  />
                ) : (
                  <ImageBackground style={styles.teamImage} source={HomeIcon}>
                    <Text style={styles.teamLogoText}>
                      {matchSche?.home?.name.charAt(0)}
                    </Text>
                  </ImageBackground>
                )}
                <Text
                  style={{ ...textVariants.small, flexShrink: 1 }}
                  numberOfLines={1}
                  ellipsizeMode={'tail'}>
                  {matchSche.home?.name}
                </Text>
              </View>
              <View style={{ ...styles.teamContentB, gap: 10, width: 150 }}>
                {matchSche?.away?.icon != undefined &&
                  matchSche?.away?.icon.length > 0 ? (
                  <FastImage
                    style={styles.teamImage}
                    source={{ uri: matchSche?.away?.icon }}
                  />
                ) : (
                  <ImageBackground style={styles.teamImage} source={AwayIcon}>
                    <Text style={styles.teamLogoText}>
                      {matchSche?.away?.name.charAt(0)}
                    </Text>
                  </ImageBackground>
                )}
                <Text style={{ ...textVariants.small, flexShrink: 1 }} numberOfLines={1}>
                  {matchSche?.away?.name}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.liveContent}>
            {
              matchSche.status === 1
                ? <>
                  <View>
                    <Text
                      style={
                        calculateScore(
                          matchSche?.home_score,
                          matchSche?.sports_type,
                        ) >
                          calculateScore(
                            matchSche?.away_score,
                            matchSche?.sports_type,
                          )
                          ? { ...styles.highScoreFont, color: colors.primary, fontFamily: '045-SSYiFeiTi' }
                          : { ...styles.scoreFont, fontFamily: '045-SSYiFeiTi' }
                      }>
                      {calculateScore(
                        matchSche?.home_score,
                        matchSche?.sports_type,
                      )}
                    </Text>
                    <Text
                      style={
                        calculateScore(
                          matchSche?.away_score,
                          matchSche?.sports_type,
                        ) >
                          calculateScore(
                            matchSche?.home_score,
                            matchSche?.sports_type,
                          )
                          ? { ...styles.highScoreFont, color: colors.primary, fontFamily: '045-SSYiFeiTi' }
                          : { ...styles.scoreFont, fontFamily: '045-SSYiFeiTi' }
                      }>
                      {calculateScore(
                        matchSche?.away_score,
                        matchSche?.sports_type,
                      )}
                    </Text>
                  </View>
                  <View style={{ gap: 8 }}>
                    {isMatchPage === true &&
                      matchSche?.streams != undefined &&
                      matchSche?.streams.length > 0 &&
                      matchSche?.streams?.some(streamer => streamer.status == 3) && (
                        <FastImage style={{ height: 22, width: 22 }} source={VideoLiveWhite} resizeMode='contain' />
                      )}
                    {isMatchPage === true && matchSche?.mlive == 1 && (
                      <FastImage style={{ height: 22, width: 22 }} resizeMode='contain' source={AnimationLiveWhite} />
                    )}
                  </View>
                </>
                : <Text style={{ ...textVariants.subBody }}>
                  {
                    matchOnTime(
                      matchStartTime,
                      matchSportType,
                      matchStatus,
                      matchState,
                    )
                  }
                </Text>
            }
          </View>
        </View>
      </View>
    </FixedTouchableHighlight>
  )

};

export default memo(MatchScheduleLive);
