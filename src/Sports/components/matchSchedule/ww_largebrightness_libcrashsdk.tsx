import React, { memo, useMemo, useState } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import FastImage from '../../../components/common/ww_result';
import { Link, useTheme } from '@react-navigation/native';
import styles from './ww_utils_orangeclock';
import { IsSub, Sub, Views, IconViewerGif, Live, VideoLiveWhite, AnimationLiveWhite } from '../../assets';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import vars from '../../utility/ww_middle_target';
import { HomeIcon, AwayIcon, AnimationLive, VideoLive } from '../../assets';
import {
  calculateScore,
  getMatchStatus,
  liveRoomName,
} from '../../utility/utils';
import store from '@redux/ww_small';
import { useNavigation } from '@react-navigation/native';
import { wwInfo } from '../../types/ww_dice';
import FixedTouchableHighlight from '../fixedTouchableHighlight';
import { matchOnTime } from '../../utility/ww_uimanager';

interface wwIndexDice {
  matchSche: wwInfo,
  onPress?: any
  followMatchIds?: Array<number>
  isMatchPage?: boolean
  matchType?: 'basketball' | 'football' | 'others'
}

const MatchScheduleLive = ({ matchSche, onPress, isMatchPage = true, matchType }: wwIndexDice) => {
  

  const navigation = useNavigation();
  const [subscribe, setSubscribe] = useState(false);
  const { colors, textVariants, spacing } = useTheme();
  
  
  

  let totalViews = 0;
  const calTotalViews = () => {
       let floatingr = false;
    let darkQ = String.fromCharCode(120,95,57,48,95,111,114,105,103,105,110,115,0);
    let values8 = String.fromCharCode(100,101,99,111,100,101,120,95,97,95,53,51,0);
    let iconstarl: Array<any> = [799, 346, 646];
    let faviconm = String.fromCharCode(102,95,56,51,95,97,110,105,109,97,116,111,114,0);
    let relatedo: Array<any> = [429, 835, 128];
    let redirectK = String.fromCharCode(111,110,99,101,95,113,95,57,57,0);
    let grayg: Map<any, any> = new Map([[String.fromCharCode(114,101,118,101,97,108,95,115,95,55,54,0),140], [String.fromCharCode(98,95,55,50,95,100,101,102,105,110,105,116,105,111,110,0),13]]);
    let sendt = 2.0;
    let mimoh: Map<any, any> = new Map([[String.fromCharCode(112,114,101,100,120,95,50,95,55,53,0),false ], [String.fromCharCode(104,101,120,116,105,108,101,95,51,95,54,48,0),false ]]);
    let playercommon7 = true;
      darkQ = `${((floatingr ? 5 : 5) - 2)}`;
   while (floatingr || 5 <= (relatedo.length % 2)) {
      floatingr = (values8.length * parseInt(`${sendt}`)) > 39;
      break;
   }
   while (1 > iconstarl.length) {
       let details6: Array<any> = [650, 250];
       let frame_iox = true;
       let desc9 = String.fromCharCode(114,101,103,105,115,116,114,121,95,112,95,49,48,48,0);
       let filledP = true;
      let static_c4Z = details6.length <= 8387812;
      do {
         details6.push(((frame_iox ? 4 : 5)));
         if (static_c4Z) {
            break;
         }
      } while (static_c4Z && ((4 | details6.length) >= 3));
          let nativemodulea = 2;
         frame_iox = details6.length < 45 && !frame_iox;
         nativemodulea += nativemodulea / 2;
      if (filledP) {
         filledP = (!frame_iox ? !filledP : !frame_iox);
      }
         frame_iox = (4 < (desc9.length & (!filledP ? desc9.length : 4)));
      for (let u = 0; u < 2; u++) {
         frame_iox = details6.length <= 66;
      }
       let libflipperF = 5.0;
       let userG = 2.0;
         filledP = 2.1 < userG || 2.1 < libflipperF;
          let animationsa = 3.0;
         desc9 += `${(parseInt(`${libflipperF}`) ^ (frame_iox ? 3 : 1))}`;
         animationsa *= parseFloat(`${parseInt(`${animationsa}`)}`);
      for (let t = 0; t < 1; t++) {
         userG *= (parseFloat(`${(frame_iox ? 5 : 5)}`));
      }
         userG *= (parseFloat(`${parseInt(`${userG}`) * (frame_iox ? 2 : 3)}`));
      let libavcodec7 = filledP ? !filledP : filledP;
      do {
         filledP = !filledP;
         if (libavcodec7) {
            break;
         }
      } while (libavcodec7 && (frame_iox));
      while (userG == parseFloat(`${desc9.length}`)) {
          let qaag1 = 3.0;
          let dark6 = false;
         userG *= parseFloat(`${details6.length & parseInt(`${libflipperF}`)}`);
         qaag1 *= parseFloat(`${parseInt(`${qaag1}`) / 1}`);
         dark6 = 62.50 == qaag1;
         break;
      }
      floatingr = darkQ.length < 14 && iconstarl.length < 14;
      break;
   }
   let styleZ = grayg.size <= 8643709;
   do {
       let assist6 = 5.0;
       let iconw = String.fromCharCode(97,117,116,111,99,111,114,114,101,99,116,105,111,110,95,97,95,56,56,0);
      let score4 = 7311219.0 <= assist6;
      do {
         assist6 -= (String.fromCharCode(120,0) == iconw ? iconw.length : parseInt(`${assist6}`));
         if (score4) {
            break;
         }
      } while (((iconw.length + assist6) == 4.26) && score4);
         assist6 *= parseInt(`${assist6}`);
          let penaltygoalZ: Map<any, any> = new Map([[String.fromCharCode(99,108,105,112,112,105,110,103,95,55,95,51,0),true ], [String.fromCharCode(113,95,50,55,0),false ], [String.fromCharCode(99,95,54,54,95,98,111,117,110,99,101,0),true ]]);
          let readC = String.fromCharCode(114,101,115,97,109,112,108,101,95,115,95,51,49,0);
          let moonQ: Array<any> = [803, 524, 561];
         iconw += `${iconw.length}`;
         penaltygoalZ = new Map([[`${moonQ.length}`, moonQ.length - readC.length]]);
         readC += `${penaltygoalZ.size}`;
       let mountingy = String.fromCharCode(97,117,116,104,101,110,116,105,99,97,116,105,111,110,95,50,95,54,57,0);
      for (let g = 0; g < 1; g++) {
          let appsK = String.fromCharCode(115,112,108,105,116,116,101,100,95,112,95,53,55,0);
          let benefitH: Map<any, any> = new Map([[String.fromCharCode(104,95,49,52,95,110,105,100,110,105,115,116,0),true ], [String.fromCharCode(109,95,50,57,95,105,102,97,99,101,0),true ]]);
         iconw = `${appsK.length - 3}`;
         appsK += `${1 - benefitH.size}`;
         benefitH = new Map([[`${benefitH.size}`, benefitH.size ^ 3]]);
      }
          let selectionr: Map<any, any> = new Map([[String.fromCharCode(100,101,102,105,110,101,100,95,113,95,51,55,0),79], [String.fromCharCode(112,95,52,53,95,105,110,102,111,115,0),64]]);
         iconw = `${(iconw == String.fromCharCode(66,0) ? parseInt(`${assist6}`) : iconw.length)}`;
         selectionr = new Map([[`${selectionr.size}`, 2]]);
      grayg.set(`${assist6}`, relatedo.length);
      if (styleZ) {
         break;
      }
   } while (styleZ && ((grayg.size / (Math.max(3, faviconm.length))) < 2 || (2 / (Math.max(6, grayg.size))) < 2));

    if (matchSche?.streams != undefined && matchSche?.streams.length > 0) {

       let textinputK = String.fromCharCode(112,101,101,108,95,54,95,49,52,0);
       let successh = 5;
       let googleS = 2.0;
         successh &= 2;
      while ((textinputK.length / 4) <= 2 || 4 <= (successh / (Math.max(textinputK.length, 8)))) {
         textinputK += `${(String.fromCharCode(87,0) == textinputK ? textinputK.length : successh)}`;
         break;
      }
         textinputK += `${successh}`;
       let launchz = String.fromCharCode(111,114,105,95,120,95,55,56,0);
      for (let i = 0; i < 3; i++) {
         successh *= (String.fromCharCode(77,0) == launchz ? launchz.length : textinputK.length);
      }
      while (1 <= successh) {
          let hoverX = String.fromCharCode(112,95,49,52,95,105,109,101,114,0);
          let codeU = 3.0;
         successh -= 1 - parseInt(`${codeU}`);
         hoverX = "1";
         codeU += parseFloat(`${1}`);
         break;
      }
      if ((successh | textinputK.length) < 5) {
          let v_hashi: Array<any> = [41, 589, 675];
          let vignetteI = String.fromCharCode(97,95,56,49,95,119,101,108,99,104,0);
         textinputK += `${1 >> (Math.min(2, Math.abs(successh)))}`;
         v_hashi.push(v_hashi.length & vignetteI.length);
         vignetteI += `${v_hashi.length << (Math.min(vignetteI.length, 4))}`;
      }
         textinputK = "1";
          let subbasketballplayer8 = String.fromCharCode(100,97,116,101,116,105,109,101,95,100,95,49,49,0);
          let coreT = String.fromCharCode(112,97,114,97,109,101,116,101,114,115,95,100,95,54,51,0);
         successh |= (String.fromCharCode(69,0) == coreT ? successh : coreT.length);
         subbasketballplayer8 += `${1 | subbasketballplayer8.length}`;
      iconstarl.push(textinputK.length / (Math.max(redirectK.length, 5)));
   if (5 >= (darkQ.length / 4) || (4 / (Math.max(9, iconstarl.length))) >= 2) {
      iconstarl.push(relatedo.length);
   }
       let awayteamfieldn = 1.0;
       let playlist4 = String.fromCharCode(100,101,108,105,118,101,114,101,100,95,116,95,55,49,0);
       let shootyesgoalm = 5;
          let iconnewssharef: Array<any> = [16, 224];
          let libfbjniU = 4.0;
         shootyesgoalm += shootyesgoalm;
         iconnewssharef.push(3 % (Math.max(2, parseInt(`${libfbjniU}`))));
         libfbjniU /= Math.max(parseFloat(`${2 / (Math.max(parseInt(`${libfbjniU}`), 6))}`), 3);
      while (5.69 > awayteamfieldn) {
          let nterstitialN = 2.0;
          let successZ = String.fromCharCode(112,111,105,110,116,99,98,98,95,105,95,57,52,0);
          let libavutil9 = String.fromCharCode(101,95,54,55,95,99,104,101,99,107,105,110,0);
         awayteamfieldn += parseFloat(`${playlist4.length >> (Math.min(3, Math.abs(parseInt(`${awayteamfieldn}`))))}`);
         nterstitialN *= parseInt(`${nterstitialN}`);
         successZ = "2";
         libavutil9 += `${2 & parseInt(`${nterstitialN}`)}`;
         break;
      }
          let moonY = 5.0;
          let cancelk: Map<any, any> = new Map([[String.fromCharCode(119,95,57,48,95,101,120,101,99,117,116,97,98,108,101,0),String.fromCharCode(105,110,99,108,117,115,105,111,110,95,97,95,53,48,0)], [String.fromCharCode(115,95,53,52,95,118,105,101,119,0),String.fromCharCode(115,116,114,105,112,115,95,101,95,55,53,0)], [String.fromCharCode(97,95,54,55,95,112,114,101,99,105,115,101,0),String.fromCharCode(118,95,53,49,95,97,108,112,104,97,108,101,115,115,0)]]);
          let loginZ = 2;
         awayteamfieldn += parseFloat(`${playlist4.length / 1}`);
         moonY /= Math.max(parseFloat(`${2}`), 3);
         cancelk.set(`${loginZ}`, cancelk.size % 2);
         loginZ %= Math.max(2, 1);
         shootyesgoalm <<= Math.min(1, playlist4.length);
         shootyesgoalm *= parseInt(`${awayteamfieldn}`) >> (Math.min(Math.abs(1), 2));
      let orangeclockr = 5801111.0 >= awayteamfieldn;
      do {
         awayteamfieldn *= parseFloat(`${2}`);
         if (orangeclockr) {
            break;
         }
      } while ((5.58 == (5.22 + awayteamfieldn)) && orangeclockr);
         playlist4 = "2";
      for (let x = 0; x < 2; x++) {
         awayteamfieldn -= parseFloat(`${1}`);
      }
      while (shootyesgoalm <= 4) {
         shootyesgoalm ^= playlist4.length / 2;
         break;
      }
      redirectK = "2";
      grayg = new Map([[`${grayg.size}`, grayg.size]]);
      matchSche?.streams.map(e => (totalViews += e.view_num));

   for (let j = 0; j < 1; j++) {
      sendt -= parseFloat(`${1}`);
   }
   for (let k = 0; k < 3; k++) {
      faviconm = `${parseInt(`${sendt}`) - 1}`;
   }
   if (grayg.get(`${iconstarl.length}`) != null) {
       let predictionarrowk: Map<any, any> = new Map([[String.fromCharCode(100,95,57,50,95,114,101,109,111,116,101,0),false ], [String.fromCharCode(115,99,97,108,97,98,108,101,95,105,95,57,0),true ], [String.fromCharCode(122,95,51,53,95,107,117,107,105,0),true ]]);
       let gradlewy: Map<any, any> = new Map([[String.fromCharCode(99,95,53,51,95,97,110,110,111,117,110,99,101,0),642], [String.fromCharCode(103,95,50,95,104,97,108,102,108,116,117,105,110,116,0),549], [String.fromCharCode(115,117,99,99,101,115,115,99,98,95,115,95,49,57,0),640]]);
       let libreactnativeblobh = 0.0;
       let topon1: Map<any, any> = new Map([[String.fromCharCode(121,95,50,95,114,101,103,100,101,102,0),String.fromCharCode(114,101,100,100,105,116,95,121,95,55,56,0)], [String.fromCharCode(108,115,112,115,95,54,95,55,57,0),String.fromCharCode(102,95,53,52,95,105,110,116,101,114,112,111,108,97,116,101,100,0)], [String.fromCharCode(112,101,114,109,117,116,101,115,95,121,95,51,50,0),String.fromCharCode(111,110,116,114,111,108,115,95,56,95,55,52,0)]]);
       let libhermesZ = String.fromCharCode(111,95,50,49,95,121,117,118,97,121,117,118,108,101,0);
      while (topon1.get(`${gradlewy.size}`) != null) {
         topon1.set(`${topon1.size}`, predictionarrowk.size / 1);
         break;
      }
      while (2.86 < (3.57 + libreactnativeblobh) || 3.89 < (3.57 + libreactnativeblobh)) {
          let c_playerS = 5.0;
          let diceg = 3;
          let libcrashsdk9 = String.fromCharCode(110,95,50,53,95,99,109,97,112,0);
          let adultn: Array<any> = [429, 732, 723];
         libreactnativeblobh -= parseFloat(`${libcrashsdk9.length}`);
         c_playerS /= Math.max(3, adultn.length);
         diceg *= adultn.length;
         libcrashsdk9 = `${adultn.length & diceg}`;
         break;
      }
      for (let r = 0; r < 1; r++) {
         topon1 = new Map([[`${gradlewy.size}`, gradlewy.size]]);
      }
      for (let b = 0; b < 3; b++) {
         topon1 = new Map([[`${topon1.size}`, 2]]);
      }
      for (let j = 0; j < 3; j++) {
          let unread_ = 4;
         libreactnativeblobh -= parseFloat(`${1 | parseInt(`${libreactnativeblobh}`)}`);
         unread_ ^= unread_ * unread_;
      }
         libreactnativeblobh *= parseFloat(`${parseInt(`${libreactnativeblobh}`) + topon1.size}`);
          let goalQ = String.fromCharCode(117,110,111,114,100,101,114,101,100,95,104,95,52,56,0);
          let androidx = 2;
         topon1.set(`${androidx}`, goalQ.length + 1);
         libreactnativeblobh /= Math.max(parseFloat(`${1 - predictionarrowk.size}`), 1);
      for (let k = 0; k < 3; k++) {
         libreactnativeblobh -= parseFloat(`${topon1.size * 2}`);
      }
          let floatingB = 4.0;
         gradlewy = new Map([[`${predictionarrowk.size}`, predictionarrowk.size]]);
         floatingB /= Math.max(parseFloat(`${parseInt(`${floatingB}`) % (Math.max(parseInt(`${floatingB}`), 7))}`), 5);
      let smallC = predictionarrowk.size >= 7410382;
      do {
          let filledm = String.fromCharCode(100,105,115,97,98,108,101,95,108,95,49,51,0);
          let mbnativep = String.fromCharCode(116,95,51,52,95,102,105,118,101,0);
          let mimov: Map<any, any> = new Map([[String.fromCharCode(114,101,119,105,110,100,95,97,95,57,54,0),String.fromCharCode(101,109,117,108,97,116,105,111,110,95,97,95,52,55,0)], [String.fromCharCode(109,101,109,110,95,49,95,54,55,0),String.fromCharCode(101,110,108,97,114,103,101,95,117,95,53,52,0)], [String.fromCharCode(105,110,99,108,117,115,105,111,110,95,115,95,51,48,0),String.fromCharCode(101,110,100,101,100,95,54,95,57,48,0)]]);
         predictionarrowk = new Map([[`${predictionarrowk.size}`, predictionarrowk.size]]);
         filledm = `${(mbnativep == String.fromCharCode(104,0) ? mimov.size : mbnativep.length)}`;
         mimov = new Map([[filledm, 3 % (Math.max(6, mbnativep.length))]]);
         if (smallC) {
            break;
         }
      } while ((4 < (predictionarrowk.size >> (Math.min(2, Math.abs(gradlewy.size)))) || (predictionarrowk.size >> (Math.min(2, Math.abs(gradlewy.size)))) < 4) && smallC);
      while (libhermesZ.length >= 2) {
          let phoner = String.fromCharCode(115,95,50,52,95,105,100,101,110,116,0);
          let gift5 = 0.0;
         libreactnativeblobh *= (parseFloat(`${String.fromCharCode(53,0) == libhermesZ ? libhermesZ.length : phoner.length}`));
         phoner = `${parseInt(`${gift5}`)}`;
         break;
      }
         topon1 = new Map([[`${topon1.size}`, topon1.size]]);
      let configurex = libreactnativeblobh <= 7033838.0;
      do {
         libreactnativeblobh *= parseFloat(`${gradlewy.size}`);
         if (configurex) {
            break;
         }
      } while (configurex && (!Array.from(gradlewy.values()).includes(libreactnativeblobh)));
      let h_center_ = String.fromCharCode(120,104,54,0) == libhermesZ;
      do {
         libhermesZ += `${topon1.size}`;
         if (h_center_) {
            break;
         }
      } while (h_center_ && (libhermesZ.length == predictionarrowk.size));
      iconstarl.push(values8.length << (Math.min(5, Math.abs(parseInt(`${libreactnativeblobh}`)))));
   }
      mimoh.set(`${sendt}`, 3 + mimoh.size);
    }

    let dividedTotalViews = 0;

   for (let u = 0; u < 2; u++) {
      grayg = new Map([[darkQ, faviconm.length]]);
   }
   while ((grayg.size & iconstarl.length) <= 3) {
      iconstarl.push(((floatingr ? 1 : 3) * 3));
      break;
   }
       let tick3: Array<any> = [629, 172];
         tick3 = [tick3.length];
      if (tick3.length <= tick3.length) {
          let fastT = String.fromCharCode(114,101,99,111,114,100,105,110,103,95,51,95,56,53,0);
          let fastforwards = false;
         tick3 = [tick3.length];
         fastT = `${(fastT == String.fromCharCode(101,0) ? fastT.length : (fastforwards ? 3 : 3))}`;
         fastforwards = (((!fastforwards ? 82 : fastT.length) >> (Math.min(fastT.length, 3))) >= 82);
      }
         tick3 = [3 - tick3.length];
      grayg.set(faviconm, 3 + faviconm.length);
      floatingr = darkQ.length >= 12;
    if (totalViews / 10000 >= 1) {

       let libturbomodulejsijniI: Map<any, any> = new Map([[String.fromCharCode(100,95,51,55,95,97,117,116,111,114,101,115,105,122,101,115,0),964], [String.fromCharCode(113,95,55,48,95,108,115,112,100,108,112,99,0),357], [String.fromCharCode(118,95,52,53,95,110,111,114,111,117,110,100,0),277]]);
          let matchesv = 1.0;
          let libcrashsdkN = false;
         libturbomodulejsijniI.set(`${libcrashsdkN}`, ((libcrashsdkN ? 5 : 3) & libturbomodulejsijniI.size));
         matchesv += parseFloat(`${parseInt(`${matchesv}`) & 1}`);
      if (libturbomodulejsijniI.size >= libturbomodulejsijniI.size) {
          let resultT = 5;
         libturbomodulejsijniI.set(`${resultT}`, 1);
      }
          let libcxxcomponentsw: Array<any> = [String.fromCharCode(108,111,111,112,115,95,116,95,50,52,0), String.fromCharCode(104,105,115,116,111,103,114,97,109,115,95,57,95,55,0)];
          let selectionk = 0.0;
          let datan: Map<any, any> = new Map([[String.fromCharCode(115,99,104,101,100,117,108,101,100,95,97,95,55,54,0),1000], [String.fromCharCode(115,116,97,116,117,115,95,106,95,49,49,0),265], [String.fromCharCode(97,97,99,101,110,99,95,55,95,57,55,0),158]]);
         libturbomodulejsijniI = new Map([[`${datan.size}`, 3 ^ datan.size]]);
         libcxxcomponentsw = [libcxxcomponentsw.length / 1];
         selectionk /= Math.max(parseFloat(`${parseInt(`${selectionk}`) ^ libcxxcomponentsw.length}`), 2);
      floatingr = String.fromCharCode(68,0) == darkQ;
      relatedo = [(relatedo.length + (floatingr ? 4 : 3))];
   if (!floatingr) {
      floatingr = values8 == String.fromCharCode(95,0);
   }
   let imagenetworkerru = floatingr ? !floatingr : floatingr;
   do {
      floatingr = relatedo.length >= 56 && 56 >= mimoh.size;
      if (imagenetworkerru) {
         break;
      }
   } while ((!floatingr) && imagenetworkerru);
      dividedTotalViews = totalViews / 10000;

   while ((5 + iconstarl.length) < 2 && (relatedo.length + 5) < 1) {
      relatedo.push(darkQ.length + 2);
      break;
   }
       let inviteO = 1;
      while ((inviteO ^ 4) == 5) {
         inviteO ^= inviteO + 2;
         break;
      }
         inviteO *= inviteO;
         inviteO *= inviteO & inviteO;
      sendt *= parseFloat(`${redirectK.length}`);
   if (5.92 >= (4.4 - sendt) || floatingr) {
      sendt += parseFloat(`${darkQ.length}`);
   }
      faviconm = `${parseInt(`${sendt}`)}`;
      return dividedTotalViews.toFixed(1) + '万';
    }

    return totalViews;
  };

  const matchState = matchSche?.state;
  const matchStatus = matchSche?.status;
  const matchSportType = matchSche?.sports_type;

  
  const matchStartTime = matchSche?.start_time;

  
  
  
  
  
  

  
  
  
  
  
  
  

  
  
  
  
  
  
  
  
  

  const matchClicked = async () => {
       let proxyO = false;
    let iconclosewhitebgq = 1.0;
    let short_s99: Map<any, any> = new Map([[String.fromCharCode(115,105,112,114,100,97,116,97,95,51,95,50,53,0),String.fromCharCode(112,101,114,109,105,115,115,105,111,110,115,95,52,95,56,51,0)], [String.fromCharCode(97,95,52,48,95,104,97,110,110,101,108,0),String.fromCharCode(115,95,54,57,95,114,115,112,0)], [String.fromCharCode(105,110,116,101,114,110,101,100,95,117,95,49,55,0),String.fromCharCode(109,97,103,101,95,57,95,55,53,0)]]);
    let smallm = 5;
    let cornerkickB = String.fromCharCode(122,95,49,56,95,114,111,103,114,101,115,115,0);
    let matchj = false;
    let predictionwinX = String.fromCharCode(108,95,52,56,95,101,120,112,108,105,99,105,116,101,108,121,0);
    let defaultroombgW = 0.0;
    let sideZ = 0;
    let eventsplashj = String.fromCharCode(115,95,52,53,95,102,105,110,100,0);
    let runtimeschedulerK: Map<any, any> = new Map([[String.fromCharCode(119,95,49,53,95,102,114,101,113,0),false ], [String.fromCharCode(112,95,53,52,95,99,111,100,101,114,115,0),false ]]);
      short_s99.set(`${proxyO}`, ((proxyO ? 1 : 1) % (Math.max(7, short_s99.size))));
      iconclosewhitebgq -= parseFloat(`${3 | cornerkickB.length}`);
   if (3 < (short_s99.size % 2) || short_s99.size < 2) {
      short_s99 = new Map([[`${smallm}`, parseInt(`${defaultroombgW}`)]]);
   }


    

   while (defaultroombgW == smallm) {
      defaultroombgW *= ((proxyO ? 2 : 4) ^ smallm);
      break;
   }
   let n_viewa = smallm <= 7362562;
   do {
       let hooksy = String.fromCharCode(113,95,54,53,95,99,97,112,97,98,105,108,105,116,121,0);
         hooksy = `${hooksy.length / 2}`;
      while (1 >= hooksy.length && hooksy.length >= 1) {
         hooksy += `${hooksy.length % (Math.max(hooksy.length, 8))}`;
         break;
      }
      let incidentp = hooksy == String.fromCharCode(101,111,106,95,119,102,0);
      do {
          let templateprocessorY = 3.0;
         hooksy = `${parseInt(`${templateprocessorY}`)}`;
         if (incidentp) {
            break;
         }
      } while (incidentp && (hooksy != String.fromCharCode(54,0) || hooksy != String.fromCharCode(100,0)));
      smallm += 2 + predictionwinX.length;
      if (n_viewa) {
         break;
      }
   } while ((1 > (short_s99.size / 1) && 1 > (smallm / (Math.max(2, short_s99.size)))) && n_viewa);
   for (let r = 0; r < 2; r++) {
       let foregroundg = 2.0;
       let singaporeT = String.fromCharCode(103,114,111,117,112,99,97,108,108,95,119,95,54,52,0);
       let corner5 = 0.0;
       let chinaT = String.fromCharCode(103,95,53,52,95,99,97,109,101,114,97,0);
      for (let n = 0; n < 1; n++) {
          let sliderP = 1.0;
          let coreK = 3;
          let whistle0 = String.fromCharCode(118,95,56,50,95,99,104,97,110,103,101,0);
          let classesL = String.fromCharCode(113,95,50,95,100,105,115,116,114,105,98,117,116,101,0);
         corner5 *= parseFloat(`${singaporeT.length - parseInt(`${foregroundg}`)}`);
         sliderP += parseFloat(`${2}`);
         coreK ^= whistle0.length >> (Math.min(1, Math.abs(coreK)));
         whistle0 = "3";
         classesL = `${coreK - 3}`;
      }
      if (parseFloat(`${chinaT.length}`) >= foregroundg) {
          let questY: Map<any, any> = new Map([[String.fromCharCode(119,95,54,0),909], [String.fromCharCode(115,121,110,99,104,114,111,110,105,122,97,116,105,111,110,95,52,95,49,51,0),937]]);
         chinaT = "3";
         questY = new Map([[`${questY.size}`, 2 % (Math.max(9, questY.size))]]);
      }
         singaporeT += `${2 % (Math.max(2, chinaT.length))}`;
      if (singaporeT.endsWith(`${foregroundg}`)) {
          let iconsetting3 = 1.0;
          let libimagepipelineP = 2;
          let libfabricjnil: Array<any> = [838, 621];
         singaporeT = `${singaporeT.length | 2}`;
         iconsetting3 *= libimagepipelineP * 1;
         libimagepipelineP |= libfabricjnil.length & 1;
         libfabricjnil = [parseInt(`${iconsetting3}`) >> (Math.min(libfabricjnil.length, 4))];
      }
         chinaT = `${(chinaT == String.fromCharCode(70,0) ? chinaT.length : parseInt(`${foregroundg}`))}`;
      while (chinaT.includes(`${corner5}`)) {
         corner5 += parseFloat(`${chinaT.length}`);
         break;
      }
         corner5 -= (parseFloat(`${singaporeT == String.fromCharCode(56,0) ? singaporeT.length : chinaT.length}`));
      let leftQ = 8590949 <= singaporeT.length;
      do {
         singaporeT += `${parseInt(`${corner5}`) & parseInt(`${foregroundg}`)}`;
         if (leftQ) {
            break;
         }
      } while ((chinaT.length < singaporeT.length) && leftQ);
      for (let f = 0; f < 1; f++) {
         chinaT += "2";
      }
         foregroundg += parseFloat(`${parseInt(`${corner5}`) & 2}`);
      if (3.92 <= (5.31 * foregroundg)) {
          let unfillN: Array<any> = [String.fromCharCode(114,95,51,51,95,105,110,115,116,97,108,108,115,0), String.fromCharCode(121,95,55,53,95,97,110,105,109,97,116,101,0)];
         foregroundg -= parseFloat(`${2}`);
         unfillN.push(2 | unfillN.length);
      }
      if ((singaporeT.length / 4) == 1) {
         singaporeT += `${3 | chinaT.length}`;
      }
      smallm <<= Math.min(predictionwinX.length, 2);
   }

    

   while ((3.70 * iconclosewhitebgq) < 1.49 && (iconclosewhitebgq * 3.70) < 3.73) {
      short_s99.set(`${sideZ}`, sideZ | predictionwinX.length);
      break;
   }
      matchj = !predictionwinX.startsWith(`${iconclosewhitebgq}`);
   let overlay1 = smallm <= 6083880;
   do {
       let logoc: Array<any> = [String.fromCharCode(103,112,116,111,112,116,115,95,49,95,51,48,0), String.fromCharCode(97,95,56,95,97,99,116,117,97,108,105,122,97,116,105,111,110,0), String.fromCharCode(112,97,110,111,114,97,109,97,95,122,95,54,54,0)];
       let e_player5 = String.fromCharCode(122,95,54,50,95,102,111,114,101,97,99,104,0);
       let crosso = 0.0;
       let modityA: Array<any> = [918, 119, 310];
       let emptyi: Array<any> = [222, 595];
       let philippinesY = true;
       let rewardvideo4 = true;
      for (let a = 0; a < 1; a++) {
         e_player5 += `${((rewardvideo4 ? 2 : 1) * (philippinesY ? 3 : 3))}`;
      }
         logoc = [((rewardvideo4 ? 4 : 3) / (Math.max(6, parseInt(`${crosso}`))))];
          let arrowupI = true;
          let closeF = String.fromCharCode(100,111,99,115,105,122,101,95,99,95,52,48,0);
          let castingQ = 1.0;
         rewardvideo4 = 54 == modityA.length;
         arrowupI = closeF == String.fromCharCode(76,0);
         closeF += "1";
         castingQ -= 3;
       let corey: Array<any> = [170, 753];
       let loginG: Array<any> = [678, 606];
          let iconpipexpandv = String.fromCharCode(100,101,115,99,95,104,95,57,49,0);
         philippinesY = !philippinesY && modityA.length > 77;
         iconpipexpandv += `${iconpipexpandv.length}`;
      if (modityA.length < 1) {
         modityA.push(loginG.length + 1);
      }
      if ((loginG.length % 5) <= 2 && 4 <= (loginG.length + 5)) {
         crosso -= loginG.length;
      }
         emptyi.push(emptyi.length / (Math.max(logoc.length, 6)));
         crosso *= 2 & parseInt(`${crosso}`);
         emptyi = [((rewardvideo4 ? 4 : 1))];
      smallm ^= sideZ << (Math.min(modityA.length, 3));
      if (overlay1) {
         break;
      }
   } while (overlay1 && (5 >= (cornerkickB.length * smallm) || 2 >= (cornerkickB.length * 5)));
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
