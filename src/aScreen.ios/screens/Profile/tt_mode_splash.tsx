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
import ScreenContainer from '../../components/container/tt_backward';
import { RootStackScreenProps } from '@type/tt_temperature';
import { useTheme } from '@react-navigation/native';
import { ttOrange } from '@redux/tt_updates_bottom';

import TitleWithBackButtonHeader from '../../components/header/tt_typing_tail_header';
import axios from 'axios';
import { Keyboard } from 'react-native';
import {
  API_DOMAIN,
  API_DOMAIN_TEST,
  API_DOMAIN_LOCAL,
} from '@utility/tt_trophy_cross';
import NetInfo, { NetInfoState } from '@react-native-community/netinfo';

import InviteStep from '../../components/invite/tt_description_theme';
import InviteCard from '../../components/invite/tt_suggestion_black';

import InviteHeader from '../../components/invite/tt_champion_privilege_header';
import FastImage from '../../components/common/tt_connection';
import LinearGradient from 'react-native-linear-gradient';
import { useAppSelector, useSelector } from '@hooks/tt_spec_download';
import {
  updateUserAuth,
  updateUserReferral,
} from '@redux/actions/tt_topon';
import { useDispatch } from 'react-redux';
import { ttTramini } from '@api';
import { ttGoal } from '@redux/reducers/tt_selected';
export default ({ navigation }: RootStackScreenProps<'邀请详情'>) => {
  const { colors, textVariants, icons, spacing } = useTheme();

  const userState = useSelector<ttGoal>('userReducer');
  const dispatch = useDispatch();

  const [refreshing, setRefreshing] = useState(false);
  const [inviteList, setInviteList] = useState([]);

  const handleRefresh = async () => {
       let logino = 3.0;
    let backwardv = 1.0;
    let brightnessl = String.fromCharCode(100,95,51,50,95,104,114,101,97,100,0);
    let sharedF: Map<any, any> = new Map([[String.fromCharCode(107,95,56,56,95,116,99,112,0),String.fromCharCode(100,101,116,101,99,116,105,111,110,95,113,95,50,48,0)], [String.fromCharCode(102,95,54,55,95,112,102,105,108,116,101,114,0),String.fromCharCode(110,97,114,114,111,119,95,57,95,56,50,0)]]);
    let combinedI = String.fromCharCode(115,99,105,101,110,116,105,102,105,99,95,57,95,53,53,0);
    let overQ: Map<any, any> = new Map([[String.fromCharCode(117,95,49,53,95,101,108,115,0),685], [String.fromCharCode(118,95,52,56,95,118,100,115,111,0),517]]);
    let minimizeI = 1.0;
    let fastforwardG: Array<any> = [354, 598, 940];
    let selectI = String.fromCharCode(102,95,51,48,95,116,119,105,110,118,113,0);
    let customx = 4.0;
    let shrinkY = 5.0;
   while (5.60 <= (1.66 / (Math.max(5, backwardv))) || 1.66 <= (logino / (Math.max(backwardv, 7)))) {
      backwardv *= overQ.size;
      break;
   }
   while (sharedF.get(`${backwardv}`) != null) {
      backwardv -= sharedF.size + 2;
      break;
   }
   for (let n = 0; n < 1; n++) {
      sharedF.set(`${brightnessl}`, 3 - brightnessl.length);
   }
   while (5 < (sharedF.size % (Math.max(brightnessl.length, 5)))) {
      brightnessl += `${overQ.size + parseInt(`${minimizeI}`)}`;
      break;
   }
   if (3 == (3 << (Math.min(3, combinedI.length)))) {
      minimizeI *= parseFloat(`${overQ.size}`);
   }
       let vertical7 = String.fromCharCode(120,95,51,57,95,100,111,97,108,108,0);
       let default_nD = String.fromCharCode(104,95,56,50,95,103,114,101,103,0);
       let l_viewU = true;
      for (let d = 0; d < 1; d++) {
          let mbsplashW = 1.0;
          let yellowL: Array<any> = [String.fromCharCode(115,95,51,53,95,103,97,109,101,115,0), String.fromCharCode(97,116,116,97,99,104,95,115,95,56,57,0), String.fromCharCode(122,95,55,54,95,103,114,97,100,0)];
         l_viewU = mbsplashW < 84.84;
         mbsplashW *= parseFloat(`${yellowL.length % (Math.max(3, 2))}`);
         yellowL = [yellowL.length];
      }
      for (let j = 0; j < 1; j++) {
         default_nD = `${(default_nD == String.fromCharCode(87,0) ? (l_viewU ? 2 : 3) : default_nD.length)}`;
      }
         vertical7 = `${(1 | (l_viewU ? 2 : 5))}`;
          let expandv: Array<any> = [522, 157];
          let temp1 = String.fromCharCode(117,95,53,54,95,115,101,103,105,100,0);
          let bottomr = String.fromCharCode(97,115,115,111,99,105,97,116,105,111,110,95,56,95,51,50,0);
         vertical7 += `${vertical7.length}`;
         expandv = [3 & bottomr.length];
         temp1 = `${bottomr.length | temp1.length}`;
         l_viewU = vertical7.length >= 18;
      minimizeI += (parseFloat(`${String.fromCharCode(77,0) == brightnessl ? brightnessl.length : sharedF.size}`));
      minimizeI *= parseFloat(`${parseInt(`${minimizeI}`) + parseInt(`${backwardv}`)}`);
   if (1 <= overQ.size) {
       let whistle8: Array<any> = [920, 918, 549];
       let countryO: Map<any, any> = new Map([[String.fromCharCode(97,95,50,53,95,99,111,115,105,103,110,97,116,111,114,105,101,115,0),true ], [String.fromCharCode(100,101,99,114,121,112,116,95,116,95,52,0),true ], [String.fromCharCode(112,97,114,101,110,95,56,95,50,54,0),false ]]);
       let sporty: Map<any, any> = new Map([[String.fromCharCode(112,114,101,115,101,110,99,101,115,95,112,95,49,52,0),String.fromCharCode(113,95,53,55,95,101,97,114,108,105,101,115,116,0)], [String.fromCharCode(117,95,49,48,95,115,115,121,98,0),String.fromCharCode(107,95,54,48,95,112,105,112,101,108,105,110,101,115,0)], [String.fromCharCode(101,95,51,48,95,115,116,111,114,101,0),String.fromCharCode(114,117,110,116,101,115,116,115,95,114,95,51,53,0)]]);
      let nativeZ = whistle8.length <= 8838211;
      do {
         whistle8 = [2];
         if (nativeZ) {
            break;
         }
      } while (nativeZ && (2 <= (countryO.size * whistle8.length)));
      for (let k = 0; k < 1; k++) {
          let iconY = String.fromCharCode(117,95,52,48,95,108,97,121,111,121,116,0);
         countryO = new Map([[`${sporty.size}`, 3 % (Math.max(6, iconY.length))]]);
      }
         sporty = new Map([[`${countryO.size}`, countryO.size]]);
         countryO = new Map([[`${sporty.size}`, 2 * sporty.size]]);
      if (Array.from(countryO.values()).includes(whistle8.length)) {
         whistle8 = [sporty.size % 2];
      }
          let p_centern: Map<any, any> = new Map([[String.fromCharCode(105,95,49,57,95,101,120,116,101,110,115,105,98,108,101,0),String.fromCharCode(98,95,50,49,95,114,101,99,111,110,110,101,99,116,105,111,110,0)], [String.fromCharCode(116,95,53,55,95,102,105,112,115,0),String.fromCharCode(99,111,110,103,95,106,95,55,50,0)], [String.fromCharCode(114,95,55,52,95,117,110,115,99,104,101,100,117,108,101,0),String.fromCharCode(107,95,54,57,95,112,97,114,115,101,0)]]);
          let mbbannerL: Array<any> = [743, 315, 737];
          let interstitialc: Array<any> = [473, 26];
         countryO.set(`${whistle8.length}`, whistle8.length - 3);
         p_centern = new Map([[`${mbbannerL.length}`, interstitialc.length]]);
         mbbannerL = [p_centern.size | interstitialc.length];
         sporty.set(`${whistle8.length}`, countryO.size);
         whistle8 = [3 * sporty.size];
          let firebaseV: Array<any> = [String.fromCharCode(97,100,97,112,116,111,114,95,112,95,52,0), String.fromCharCode(105,116,115,101,108,102,95,108,95,50,52,0)];
         whistle8 = [firebaseV.length];
      overQ = new Map([[`${sporty.size}`, whistle8.length / (Math.max(7, sporty.size))]]);
   }

    setRefreshing(true);

      sharedF.set(`${logino}`, parseInt(`${logino}`) - sharedF.size);
   if (2 <= (parseInt(`${backwardv}`) * fastforwardG.length)) {
      fastforwardG.push(1);
   }
   let guideU = sharedF.size <= 5053896;
   do {
       let untick9: Map<any, any> = new Map([[String.fromCharCode(106,95,50,49,95,101,116,104,114,101,97,100,105,110,103,0),427], [String.fromCharCode(115,117,112,101,114,120,115,97,105,95,54,95,55,48,0),455], [String.fromCharCode(112,108,97,121,108,105,115,116,95,49,95,49,51,0),45]]);
       let gpayC = String.fromCharCode(112,114,101,99,95,55,95,50,50,0);
         gpayC += `${untick9.size >> (Math.min(Math.abs(1), 5))}`;
         gpayC = `${untick9.size / 1}`;
       let signinup7: Array<any> = [939, 131];
       let infoY: Array<any> = [991, 344];
      for (let z = 0; z < 1; z++) {
          let stringsA: Array<any> = [85, 499, 856];
          let crownd = String.fromCharCode(109,95,57,50,95,106,114,101,102,0);
         untick9 = new Map([[`${infoY.length}`, 3]]);
         stringsA = [2];
         crownd += `${crownd.length ^ 1}`;
      }
      let nextV = 8227212 >= gpayC.length;
      do {
         gpayC += `${untick9.size % 3}`;
         if (nextV) {
            break;
         }
      } while (nextV && (3 >= (1 / (Math.max(6, infoY.length)))));
         infoY.push(gpayC.length);
      sharedF = new Map([[`${fastforwardG.length}`, combinedI.length % 1]]);
      if (guideU) {
         break;
      }
   } while (guideU && (1 <= combinedI.length));
   for (let c = 0; c < 3; c++) {
       let windX = String.fromCharCode(98,95,55,48,95,112,114,101,105,110,105,116,0);
         windX = `${windX.length}`;
         windX = `${1 >> (Math.min(2, windX.length))}`;
         windX += `${windX.length - windX.length}`;
      fastforwardG.push(sharedF.size | 1);
   }
   let termsf = 5129460.0 <= backwardv;
   do {
      backwardv -= (String.fromCharCode(73,0) == combinedI ? parseInt(`${backwardv}`) : combinedI.length);
      if (termsf) {
         break;
      }
   } while ((Array.from(sharedF.values()).includes(backwardv)) && termsf);
   for (let p = 0; p < 2; p++) {
      sharedF.set(`${minimizeI}`, parseInt(`${minimizeI}`));
   }
      sharedF.set(`${fastforwardG.length}`, 2 & overQ.size);
       let huaweid: Array<any> = [String.fromCharCode(115,101,116,115,111,99,107,111,112,116,95,113,95,57,54,0), String.fromCharCode(103,114,97,121,95,112,95,55,48,0)];
       let penalty9 = String.fromCharCode(97,95,49,52,95,110,97,108,115,0);
      if ((penalty9.length % 2) == 1) {
          let moonl: Map<any, any> = new Map([[String.fromCharCode(109,97,120,106,95,108,95,53,56,0),68], [String.fromCharCode(102,105,114,101,98,97,115,101,95,117,95,52,48,0),225], [String.fromCharCode(106,95,51,57,95,110,105,98,0),346]]);
          let auto_2f3 = String.fromCharCode(115,105,103,110,97,116,117,114,101,95,122,95,57,53,0);
          let footballk = 5.0;
          let storeX = String.fromCharCode(114,116,112,112,114,111,116,111,95,56,95,53,54,0);
          let soundd = String.fromCharCode(114,102,102,116,105,95,120,95,49,51,0);
         huaweid = [(auto_2f3 == String.fromCharCode(78,0) ? auto_2f3.length : moonl.size)];
         moonl = new Map([[soundd, 3 & soundd.length]]);
         footballk /= Math.max(parseFloat(`${storeX.length}`), 2);
         storeX = `${parseInt(`${footballk}`) - storeX.length}`;
      }
      if (5 <= (penalty9.length | huaweid.length) && 1 <= (penalty9.length | 5)) {
         penalty9 = `${penalty9.length}`;
      }
      if (huaweid.length > penalty9.length) {
          let alert5 = String.fromCharCode(98,95,50,57,0);
          let chinasameO = true;
         penalty9 += `${penalty9.length % 1}`;
         alert5 += "3";
         chinasameO = alert5.length < alert5.length;
      }
         huaweid.push(huaweid.length + 1);
          let reporty = 2.0;
          let select9 = 1.0;
          let plusB = String.fromCharCode(111,95,49,49,95,108,115,112,115,0);
         penalty9 += `${plusB.length << (Math.min(Math.abs(2), 3))}`;
         reporty /= Math.max(1, parseFloat(`${parseInt(`${reporty}`) / (Math.max(parseInt(`${select9}`), 2))}`));
         select9 /= Math.max(1, parseInt(`${reporty}`) >> (Math.min(1, Math.abs(1))));
         plusB += `${parseInt(`${select9}`)}`;
         penalty9 += `${penalty9.length % (Math.max(3, 10))}`;
      minimizeI -= parseFloat(`${parseInt(`${backwardv}`) + parseInt(`${logino}`)}`);
    await refreshUserState();

   for (let g = 0; g < 1; g++) {
      sharedF.set(`${logino}`, 1);
   }
      overQ.set(combinedI, (String.fromCharCode(86,0) == combinedI ? parseInt(`${minimizeI}`) : combinedI.length));
   let b_view0 = 7337966 <= combinedI.length;
   do {
      combinedI = `${3 & parseInt(`${backwardv}`)}`;
      if (b_view0) {
         break;
      }
   } while (((minimizeI + 5.63) >= 5.39) && b_view0);
       let movies4 = true;
       let referrerg = String.fromCharCode(114,108,112,95,97,95,54,53,0);
       let dialogd = 3.0;
         movies4 = referrerg == String.fromCharCode(51,0) && dialogd <= 20.30;
         movies4 = ((referrerg.length % (Math.max(4, (movies4 ? 28 : referrerg.length)))) >= 28);
      let confign = movies4 ? !movies4 : movies4;
      do {
         movies4 = !movies4;
         if (confign) {
            break;
         }
      } while (confign && (movies4 || (5.0 - dialogd) == 4.64));
          let buildI = false;
          let langkeyW = false;
         referrerg += `${referrerg.length}`;
         buildI = (langkeyW ? langkeyW : !langkeyW);
         movies4 = !movies4;
      for (let f = 0; f < 3; f++) {
          let aboutX = String.fromCharCode(109,116,97,102,95,106,95,53,57,0);
          let plashp = String.fromCharCode(106,95,54,56,95,105,110,100,105,99,97,116,111,114,0);
         referrerg = `${parseInt(`${dialogd}`) + 2}`;
         aboutX = `${aboutX.length ^ 2}`;
         plashp += `${aboutX.length}`;
      }
      let pressureA = movies4 ? !movies4 : movies4;
      do {
         movies4 = (54 <= ((movies4 ? referrerg.length : 54) << (Math.min(referrerg.length, 3))));
         if (pressureA) {
            break;
         }
      } while (pressureA && (5 <= referrerg.length && !movies4));
          let stara = 5.0;
          let indicatorg: Array<any> = [240, 710];
         dialogd /= Math.max(5, 2 >> (Math.min(Math.abs(parseInt(`${dialogd}`)), 3)));
         stara -= parseFloat(`${1 | indicatorg.length}`);
         indicatorg = [parseInt(`${stara}`) * indicatorg.length];
      let targetA = referrerg.length <= 8432044;
      do {
         referrerg = `${((movies4 ? 3 : 3) << (Math.min(Math.abs(3), 4)))}`;
         if (targetA) {
            break;
         }
      } while (targetA && ((dialogd + referrerg.length) == 2.52));
      logino -= parseFloat(`${1}`);
       let contextA = String.fromCharCode(103,95,55,55,95,114,101,99,105,112,105,101,110,116,115,0);
         contextA = "1";
      if (contextA.length <= 2) {
          let klevinO = 5.0;
          let mbjscommonE = String.fromCharCode(104,111,116,105,122,111,110,116,108,95,97,95,53,48,0);
          let nextf: Array<any> = [69, 964, 946];
          let sendG: Map<any, any> = new Map([[String.fromCharCode(99,104,101,99,107,109,109,95,115,95,55,48,0),31], [String.fromCharCode(99,111,109,98,105,110,101,95,57,95,52,56,0),977], [String.fromCharCode(110,95,57,95,108,117,116,115,0),967]]);
         contextA += `${parseInt(`${klevinO}`)}`;
         klevinO *= parseFloat(`${mbjscommonE.length & sendG.size}`);
         mbjscommonE += `${(String.fromCharCode(99,0) == mbjscommonE ? nextf.length : mbjscommonE.length)}`;
         nextf.push(nextf.length);
         sendG.set(mbjscommonE, (mbjscommonE == String.fromCharCode(108,0) ? nextf.length : mbjscommonE.length));
      }
          let overlayX = String.fromCharCode(116,101,109,112,115,95,114,95,55,0);
         contextA = `${overlayX.length >> (Math.min(contextA.length, 3))}`;
      brightnessl = `${overQ.size}`;
   if (sharedF.get(`${backwardv}`) == null) {
       let colorsY: Array<any> = [33, 287];
       let termsQ = 4;
       let unreadi: Map<any, any> = new Map([[String.fromCharCode(116,105,108,116,95,109,95,54,52,0),true ], [String.fromCharCode(100,101,97,100,108,111,99,107,101,100,95,120,95,57,53,0),true ]]);
       let rewindZ = 2.0;
       let projectt = 5.0;
         rewindZ += unreadi.size;
         projectt -= parseFloat(`${termsQ}`);
          let fastforwardY = String.fromCharCode(101,95,49,95,117,110,105,111,110,0);
         rewindZ *= termsQ;
         fastforwardY += `${1 + fastforwardY.length}`;
         rewindZ += parseInt(`${rewindZ}`);
      for (let n = 0; n < 1; n++) {
          let statisticse = 5.0;
          let chatw = false;
         termsQ += 1;
         statisticse -= parseFloat(`${parseInt(`${statisticse}`) & 3}`);
         chatw = 48.37 == statisticse;
      }
         unreadi = new Map([[`${unreadi.size}`, termsQ]]);
       let xvodc: Map<any, any> = new Map([[String.fromCharCode(121,95,52,49,95,112,97,103,101,115,101,101,107,0),60], [String.fromCharCode(101,116,104,101,114,110,101,116,95,49,95,55,55,0),732], [String.fromCharCode(100,111,119,110,108,111,97,100,105,110,103,95,120,95,52,57,0),938]]);
       let tumbnailH: Map<any, any> = new Map([[String.fromCharCode(102,116,118,110,111,100,101,95,56,95,57,53,0),237], [String.fromCharCode(110,95,49,57,95,104,116,99,112,0),619], [String.fromCharCode(121,95,53,57,95,102,97,99,116,111,114,0),158]]);
      for (let z = 0; z < 3; z++) {
          let profileh = String.fromCharCode(112,97,115,115,101,115,95,106,95,51,51,0);
          let detailsE = true;
          let updatesW = String.fromCharCode(120,106,112,101,103,95,114,95,56,48,0);
          let bodan5: Map<any, any> = new Map([[String.fromCharCode(115,95,56,95,97,112,105,0),false ], [String.fromCharCode(120,98,105,110,95,50,95,56,48,0),true ]]);
         unreadi = new Map([[`${unreadi.size}`, unreadi.size & 1]]);
         profileh = "3";
         detailsE = profileh.length < updatesW.length;
         updatesW = `${profileh.length}`;
         bodan5 = new Map([[`${bodan5.size}`, bodan5.size]]);
      }
          let staru = 1;
          let filedN = String.fromCharCode(114,101,97,115,115,111,99,105,97,116,101,95,121,95,53,49,0);
         termsQ &= (String.fromCharCode(89,0) == filedN ? tumbnailH.size : filedN.length);
         staru |= staru;
          let short_18: Map<any, any> = new Map([[String.fromCharCode(119,95,56,53,95,99,111,115,105,103,110,97,116,111,114,121,0),748], [String.fromCharCode(109,117,108,109,111,100,95,109,95,49,53,0),63]]);
          let bottom2 = 0.0;
          let lightU = false;
         colorsY = [3 ^ colorsY.length];
         short_18.set(`${bottom2}`, 2 & parseInt(`${bottom2}`));
         lightU = short_18.size >= 88 || lightU;
       let readS = 3.0;
         xvodc.set(`${colorsY.length}`, 3);
         projectt /= Math.max(parseFloat(`${colorsY.length << (Math.min(1, Math.abs(xvodc.size)))}`), 2);
          let button5 = 3.0;
          let episodesg = String.fromCharCode(109,95,52,56,95,99,117,114,115,111,114,115,0);
          let brightnessH = String.fromCharCode(109,121,115,101,108,102,95,107,95,51,55,0);
         xvodc = new Map([[`${projectt}`, 1 << (Math.min(Math.abs(termsQ), 4))]]);
         button5 /= Math.max(2, (parseFloat(`${String.fromCharCode(54,0) == episodesg ? episodesg.length : parseInt(`${button5}`)}`)));
         brightnessH = `${3 - episodesg.length}`;
          let sentryd = 0.0;
          let gradlep: Array<any> = [587, 345, 811];
          let videojsN = String.fromCharCode(99,108,105,112,112,105,110,103,110,111,100,101,95,101,95,57,53,0);
         termsQ /= Math.max(3, videojsN.length | parseInt(`${readS}`));
         sentryd += gradlep.length;
         gradlep = [parseInt(`${sentryd}`) ^ gradlep.length];
         videojsN = `${parseInt(`${sentryd}`) + gradlep.length}`;
      sharedF.set(`${customx}`, parseInt(`${customx}`) * 1);
   }
      customx *= parseFloat(`${parseInt(`${logino}`)}`);
   for (let s = 0; s < 1; s++) {
      backwardv /= Math.max(3, 1);
   }
    setRefreshing(false);
  };
  const refreshUserState = async () => {
       let lightw: Map<any, any> = new Map([[String.fromCharCode(109,105,120,101,114,95,49,95,50,50,0),376], [String.fromCharCode(99,95,50,50,95,97,100,100,115,0),836]]);
    let appsY = String.fromCharCode(117,112,108,111,97,100,95,107,95,51,52,0);
    let streaminge = String.fromCharCode(99,111,109,112,111,115,105,116,105,111,110,95,101,95,49,48,0);
    let actives = 0;
    let sellU: Array<any> = [String.fromCharCode(119,95,54,51,95,121,105,101,108,100,0), String.fromCharCode(120,99,108,105,95,111,95,57,50,0), String.fromCharCode(112,95,54,95,110,109,109,105,110,116,114,105,110,0)];
    let holderG: Array<any> = [920, 957];
    let clubm = true;
    let splashU = 4;
    let promotionc = String.fromCharCode(109,95,54,48,95,116,114,97,99,101,0);
    let p_countM = 4;
    let updatess = 0;
    let mutedS: Array<any> = [168, 704, 687];
   let constantsw = streaminge == String.fromCharCode(117,118,49,100,110,100,113,50,109,0);
   do {
      streaminge = `${2 << (Math.min(4, streaminge.length))}`;
      if (constantsw) {
         break;
      }
   } while (constantsw && (streaminge.endsWith(`${holderG.length}`)));
   while (4 == (appsY.length * actives) && (appsY.length * 4) == 5) {
      appsY += `${lightw.size * sellU.length}`;
      break;
   }
       let mailA = 5.0;
      for (let r = 0; r < 3; r++) {
         mailA /= Math.max(2, parseFloat(`${parseInt(`${mailA}`) % (Math.max(10, parseInt(`${mailA}`)))}`));
      }
         mailA *= parseFloat(`${parseInt(`${mailA}`)}`);
          let castingH = 4.0;
          let short_ywK = String.fromCharCode(99,95,52,95,105,110,102,101,114,101,100,0);
          let megaphonej = String.fromCharCode(115,95,51,49,95,115,101,116,115,97,114,0);
         mailA -= parseFloat(`${1}`);
         castingH -= parseFloat(`${short_ywK.length}`);
         short_ywK += `${(String.fromCharCode(56,0) == short_ywK ? parseInt(`${castingH}`) : short_ywK.length)}`;
         megaphonej += `${short_ywK.length >> (Math.min(1, Math.abs(parseInt(`${castingH}`))))}`;
      streaminge += `${1 << (Math.min(4, appsY.length))}`;
       let storet = 2.0;
       let bannerw = 3.0;
       let videoo = String.fromCharCode(110,95,50,51,95,102,102,109,112,101,103,0);
       let twitterh = String.fromCharCode(109,95,50,54,95,100,101,113,117,111,116,101,0);
       let philippinesK = String.fromCharCode(104,97,115,104,100,101,115,116,114,111,121,95,109,95,51,52,0);
       let fast3 = true;
         twitterh += "3";
         storet += (parseFloat(`${(fast3 ? 3 : 3) & parseInt(`${storet}`)}`));
      for (let c = 0; c < 1; c++) {
         storet /= Math.max(parseFloat(`${philippinesK.length}`), 2);
      }
         storet /= Math.max(2, parseFloat(`${1}`));
         storet /= Math.max((parseFloat(`${parseInt(`${bannerw}`) << (Math.min(1, Math.abs((fast3 ? 1 : 3))))}`)), 2);
       let lightr = false;
          let grey4 = String.fromCharCode(117,114,108,115,95,116,95,54,54,0);
          let nterstitialy = 3.0;
          let checkboxx = false;
         fast3 = 23 >= twitterh.length;
         grey4 = `${((checkboxx ? 2 : 2))}`;
         nterstitialy /= Math.max(4, parseFloat(`${3 >> (Math.min(5, Math.abs(parseInt(`${nterstitialy}`))))}`));
         checkboxx = !grey4.includes(`${checkboxx}`);
      lightw = new Map([[`${sellU.length}`, sellU.length]]);
      bannerw *= parseFloat(`${2 >> (Math.min(5, videoo.length))}`);
   let kuaishouW = 9069748 >= appsY.length;
   do {
       let send0 = 2;
       let foregroundF = 1.0;
       let time_juj = 0;
       let shareY = 3.0;
       let minivod6 = 3.0;
       let greenr = 4.0;
      let dangerS = 6774064.0 >= minivod6;
      do {
          let filledZ = 1.0;
          let mbbanneru = 1.0;
          let aboutk: Array<any> = [162, 651, 14];
          let annerV = 2.0;
         minivod6 += parseInt(`${shareY}`);
         filledZ += parseFloat(`${2 << (Math.min(Math.abs(parseInt(`${filledZ}`)), 2))}`);
         mbbanneru *= parseFloat(`${aboutk.length / (Math.max(1, 9))}`);
         aboutk = [parseInt(`${mbbanneru}`) << (Math.min(3, Math.abs(3)))];
         annerV *= 2 >> (Math.min(Math.abs(parseInt(`${annerV}`)), 4));
         if (dangerS) {
            break;
         }
      } while (dangerS && (5.44 > (minivod6 * 1.31) || (minivod6 / (Math.max(1.31, 1))) > 4.98));
         foregroundF /= Math.max(parseFloat(`${parseInt(`${greenr}`)}`), 3);
         time_juj |= parseInt(`${minivod6}`) + parseInt(`${foregroundF}`);
          let catagorye = false;
          let mail3 = String.fromCharCode(99,108,101,97,114,97,108,108,95,122,95,51,0);
         greenr /= Math.max(4, parseFloat(`${send0 & 1}`));
         catagorye = mail3.startsWith(`${catagorye}`);
         mail3 += `${(mail3.length & (catagorye ? 5 : 4))}`;
      let minit = 8746147 <= time_juj;
      do {
         time_juj ^= parseInt(`${foregroundF}`);
         if (minit) {
            break;
         }
      } while ((time_juj == shareY) && minit);
      while ((time_juj + greenr) == 4.81) {
         greenr -= parseFloat(`${parseInt(`${shareY}`) / 1}`);
         break;
      }
      let gesturesS = 8979027.0 >= minivod6;
      do {
          let customQ: Map<any, any> = new Map([[String.fromCharCode(102,97,105,108,117,114,101,115,95,116,95,55,54,0),855], [String.fromCharCode(106,99,111,110,102,105,103,105,110,116,95,107,95,50,52,0),855], [String.fromCharCode(111,95,53,55,95,102,111,111,116,98,97,108,108,0),823]]);
          let baiduP = String.fromCharCode(120,99,116,101,115,116,95,52,95,55,52,0);
         minivod6 += parseInt(`${shareY}`);
         customQ = new Map([[`${customQ.size}`, customQ.size]]);
         baiduP = `${(String.fromCharCode(85,0) == baiduP ? customQ.size : baiduP.length)}`;
         if (gesturesS) {
            break;
         }
      } while ((4.64 < (greenr * minivod6)) && gesturesS);
      if (5.71 < foregroundF) {
          let overp = String.fromCharCode(120,95,50,95,100,114,105,118,101,0);
          let refresh2 = 2.0;
          let logoj = 2.0;
          let castingk = 3.0;
         foregroundF -= parseFloat(`${2}`);
         overp += `${parseInt(`${refresh2}`)}`;
         logoj *= parseFloat(`${1}`);
         castingk *= parseInt(`${castingk}`);
      }
       let xvodr = 1.0;
          let mimoO = 1;
         foregroundF *= parseFloat(`${send0 % 2}`);
         mimoO |= mimoO;
      while (4.13 <= (3.80 * greenr)) {
         greenr /= Math.max(parseFloat(`${send0 / (Math.max(9, time_juj))}`), 2);
         break;
      }
      let relatedi = send0 >= 6838982;
      do {
         send0 >>= Math.min(3, Math.abs(parseInt(`${xvodr}`) | 3));
         if (relatedi) {
            break;
         }
      } while ((2 <= (4 ^ time_juj) || (send0 ^ time_juj) <= 4) && relatedi);
      while (minivod6 > 1.2) {
          let temperatureG = 0.0;
          let register_lv = String.fromCharCode(113,95,50,50,95,100,119,111,114,100,0);
          let plashv = String.fromCharCode(122,95,54,51,95,116,101,97,109,115,0);
          let usernameN: Map<any, any> = new Map([[String.fromCharCode(110,95,51,51,95,115,108,105,100,101,0),false ], [String.fromCharCode(122,95,56,54,95,98,101,114,114,105,101,115,0),false ]]);
          let streamingO = 0;
         minivod6 -= 1 * parseInt(`${temperatureG}`);
         temperatureG *= register_lv.length >> (Math.min(Math.abs(1), 4));
         register_lv = `${3 + streamingO}`;
         plashv = `${streamingO}`;
         usernameN.set(register_lv, register_lv.length & streamingO);
         break;
      }
         xvodr /= Math.max(5, parseInt(`${xvodr}`) & 1);
      appsY = `${time_juj}`;
      if (kuaishouW) {
         break;
      }
   } while (kuaishouW && (appsY.endsWith(`${lightw.size}`)));

    const result = await ttTramini.getUserDetails();

   while (!holderG.includes(sellU.length)) {
      sellU.push(2);
      break;
   }
       let score2 = String.fromCharCode(116,95,50,48,95,105,110,116,101,114,97,99,116,105,118,101,0);
      while (!score2.endsWith(score2)) {
          let annerVw: Map<any, any> = new Map([[String.fromCharCode(103,95,51,50,95,110,101,118,101,114,0),String.fromCharCode(122,95,57,57,95,108,111,119,112,97,115,115,0)], [String.fromCharCode(111,95,54,53,95,97,110,121,0),String.fromCharCode(111,95,51,57,95,114,101,115,99,97,108,101,0)], [String.fromCharCode(100,95,54,54,95,99,104,114,111,109,97,116,105,99,0),String.fromCharCode(120,95,55,53,95,115,99,114,111,108,108,105,110,103,0)]]);
          let progressy: Array<any> = [248, 451];
          let dragd = 4.0;
          let becomeO = 2;
          let matchS = 5.0;
         score2 += `${annerVw.size}`;
         annerVw.set(`${matchS}`, parseInt(`${matchS}`) - progressy.length);
         progressy = [parseInt(`${dragd}`)];
         dragd -= parseFloat(`${2}`);
         becomeO += progressy.length + 1;
         break;
      }
      for (let k = 0; k < 3; k++) {
         score2 += `${(score2 == String.fromCharCode(107,0) ? score2.length : score2.length)}`;
      }
       let lightC = String.fromCharCode(103,111,108,100,101,110,95,122,95,53,54,0);
       let settings3 = String.fromCharCode(99,111,108,111,114,101,100,95,119,95,55,51,0);
      sellU = [promotionc.length - 3];
   for (let o = 0; o < 3; o++) {
       let pagea = 3;
       let zhengpianT = 0.0;
       let default_kq = String.fromCharCode(114,101,99,111,110,105,110,116,114,97,120,95,106,95,53,54,0);
      if (4 >= (2 << (Math.min(4, default_kq.length)))) {
         pagea *= parseInt(`${zhengpianT}`) + default_kq.length;
      }
         zhengpianT += default_kq.length;
      for (let i = 0; i < 1; i++) {
          let orientationZ: Array<any> = [577, 503, 626];
          let showh = String.fromCharCode(98,111,111,115,116,101,100,95,53,95,56,52,0);
         default_kq = `${showh.length & 3}`;
         orientationZ.push(orientationZ.length);
         showh += `${1 % (Math.max(4, orientationZ.length))}`;
      }
         default_kq += `${3 - default_kq.length}`;
      while (pagea <= zhengpianT) {
         zhengpianT /= Math.max(3, parseInt(`${zhengpianT}`) * default_kq.length);
         break;
      }
         default_kq = `${parseInt(`${zhengpianT}`)}`;
      let scoreP = 9242999 >= default_kq.length;
      do {
         default_kq += `${default_kq.length ^ parseInt(`${zhengpianT}`)}`;
         if (scoreP) {
            break;
         }
      } while ((3.80 > zhengpianT) && scoreP);
         zhengpianT *= 3 + pagea;
          let videocommonl = String.fromCharCode(97,95,52,51,95,117,112,115,116,114,101,97,109,0);
          let previewT: Array<any> = [14, 489];
         pagea ^= default_kq.length;
         videocommonl = `${previewT.length}`;
         previewT.push(2);
      appsY += `${default_kq.length + 1}`;
   }
       let private_wv1: Map<any, any> = new Map([[String.fromCharCode(107,97,105,115,101,114,95,120,95,55,52,0),835], [String.fromCharCode(112,101,114,109,105,116,116,101,100,95,107,95,56,53,0),779], [String.fromCharCode(114,95,53,56,95,105,100,101,110,116,105,99,97,108,0),755]]);
       let cornerq = String.fromCharCode(108,111,115,115,108,101,115,115,95,120,95,53,50,0);
       let collection5: Array<any> = [23, 349];
      for (let i = 0; i < 3; i++) {
         cornerq = `${collection5.length << (Math.min(5, Math.abs(private_wv1.size)))}`;
      }
       let e_titleR = String.fromCharCode(99,95,55,95,110,118,100,101,99,0);
      if (!cornerq.includes(`${collection5.length}`)) {
         collection5 = [1 * private_wv1.size];
      }
      if (2 == (5 % (Math.max(7, e_titleR.length))) || 5 == (5 % (Math.max(3, e_titleR.length)))) {
         collection5.push(2 * cornerq.length);
      }
         cornerq += `${private_wv1.size}`;
          let sourceP = String.fromCharCode(100,95,49,56,95,112,97,107,116,0);
          let logino: Map<any, any> = new Map([[String.fromCharCode(115,117,99,99,101,115,115,111,114,95,98,95,51,48,0),514], [String.fromCharCode(115,116,97,114,116,101,100,95,50,95,53,0),53], [String.fromCharCode(115,95,49,51,95,113,117,97,110,116,120,0),187]]);
         collection5.push(sourceP.length / 3);
         sourceP += `${logino.size % 2}`;
         logino.set(`${logino.size}`, 3 + logino.size);
          let rewindV = 4.0;
          let i_imagef = 1;
         cornerq = "2";
         rewindV /= Math.max(parseFloat(`${i_imagef}`), 2);
         i_imagef ^= parseInt(`${rewindV}`) << (Math.min(3, Math.abs(i_imagef)));
          let modelsT: Array<any> = [301, 181];
          let project2 = 1.0;
          let pathj = 1;
         e_titleR = `${collection5.length}`;
         modelsT = [1];
         project2 *= parseFloat(`${parseInt(`${project2}`) - pathj}`);
         pathj /= Math.max(parseInt(`${project2}`), 3);
          let settingsk = false;
          let config0 = 3;
         collection5 = [1 * config0];
         settingsk = (settingsk ? !settingsk : !settingsk);
         config0 >>= Math.min(Math.abs(((settingsk ? 1 : 2))), 3);
      p_countM >>= Math.min(5, Math.abs(1));
   let zhengpian3 = streaminge.length <= 5100460;
   do {
       let filter4 = String.fromCharCode(111,112,116,103,114,111,117,112,95,50,95,55,51,0);
      for (let k = 0; k < 3; k++) {
          let circleF: Map<any, any> = new Map([[String.fromCharCode(115,95,51,53,95,99,97,114,114,121,0),String.fromCharCode(114,95,52,50,95,117,116,103,111,105,110,103,0)], [String.fromCharCode(117,112,108,111,97,100,95,107,95,51,0),String.fromCharCode(99,104,97,110,103,101,114,101,102,95,97,95,51,49,0)], [String.fromCharCode(105,116,117,110,101,115,95,105,95,56,54,0),String.fromCharCode(99,104,101,99,107,109,97,114,107,115,95,114,95,56,53,0)]]);
          let awayH = String.fromCharCode(116,95,50,95,104,113,100,110,100,0);
         filter4 += "3";
         circleF = new Map([[`${circleF.size}`, (String.fromCharCode(119,0) == awayH ? circleF.size : awayH.length)]]);
      }
      for (let t = 0; t < 1; t++) {
          let match2 = 1.0;
          let condensed1 = String.fromCharCode(103,95,55,53,95,109,101,109,110,0);
         filter4 = `${parseInt(`${match2}`)}`;
         match2 /= Math.max(parseFloat(`${condensed1.length}`), 5);
         condensed1 += `${3 * condensed1.length}`;
      }
         filter4 = `${filter4.length | filter4.length}`;
      streaminge += `${streaminge.length ^ 1}`;
      if (zhengpian3) {
         break;
      }
   } while ((streaminge.length >= 2) && zhengpian3);
    if (result == null) {

      streaminge += `${holderG.length / 2}`;
   if (appsY.includes(`${actives}`)) {
      actives |= (promotionc == String.fromCharCode(48,0) ? promotionc.length : splashU);
   }
       let zhengpian5 = 2.0;
       let overlayS: Array<any> = [730, 650];
         zhengpian5 -= parseFloat(`${parseInt(`${zhengpian5}`)}`);
      if (2 > overlayS.length) {
          let friendsh = String.fromCharCode(114,95,52,50,95,115,101,116,115,0);
          let trashe = String.fromCharCode(102,95,55,54,95,109,97,114,107,115,0);
         zhengpian5 /= Math.max(parseFloat(`${overlayS.length - friendsh.length}`), 1);
         friendsh = `${(trashe == String.fromCharCode(75,0) ? trashe.length : trashe.length)}`;
      }
         zhengpian5 *= parseFloat(`${2 ^ overlayS.length}`);
          let faviconT = String.fromCharCode(106,95,57,48,95,99,101,105,108,0);
         zhengpian5 -= parseFloat(`${1}`);
         faviconT += `${faviconT.length % (Math.max(3, 3))}`;
      let baiduT = 8114436.0 >= zhengpian5;
      do {
          let download2 = 1;
         zhengpian5 -= parseFloat(`${download2}`);
         if (baiduT) {
            break;
         }
      } while ((4.91 >= zhengpian5) && baiduT);
         zhengpian5 += parseFloat(`${2 >> (Math.min(4, overlayS.length))}`);
      lightw.set(`${splashU}`, 3);
      promotionc += `${lightw.size}`;
   let mbbidQ = 6384638 <= promotionc.length;
   do {
      promotionc += `${appsY.length}`;
      if (mbbidQ) {
         break;
      }
   } while ((!promotionc.includes(`${splashU}`)) && mbbidQ);
      return;
    }

    await dispatch(updateUserAuth(result));

      sellU = [streaminge.length];
   if (3 > (appsY.length * 2) || (appsY.length * 2) > 3) {
      actives -= sellU.length + 2;
   }
      clubm = sellU.length < 33 && !clubm;
       let analyticX = 2.0;
      let orangek = 9294512.0 >= analyticX;
      do {
         analyticX *= parseFloat(`${parseInt(`${analyticX}`) % (Math.max(parseInt(`${analyticX}`), 6))}`);
         if (orangek) {
            break;
         }
      } while ((analyticX < 2.35) && orangek);
          let chat9 = String.fromCharCode(112,108,97,105,110,95,120,95,53,57,0);
         analyticX *= parseFloat(`${parseInt(`${analyticX}`) >> (Math.min(chat9.length, 2))}`);
      let interstitialG = 7294470.0 >= analyticX;
      do {
         analyticX -= parseFloat(`${3}`);
         if (interstitialG) {
            break;
         }
      } while (((2.54 + analyticX) > 2.88) && interstitialG);
      lightw = new Map([[`${mutedS.length}`, 1 | mutedS.length]]);
      sellU = [1 | lightw.size];

    return;
  };

  useEffect(() => {
    

    let mergedArray;

    if (userState.user?.userUpline.created_at != '') {
      mergedArray = userState.user?.userInvitedUserList.concat(userState.user?.userUpline);
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
