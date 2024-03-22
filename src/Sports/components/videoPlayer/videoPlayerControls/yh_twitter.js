import {useEffect, useState} from 'react';
import {
  Animated,
  ImageBackground,
  Platform,
  SafeAreaView,
  useWindowDimensions,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {VideoLiveType} from '../../../global/wd_group_recommendation';
import {useAnimation} from '@hooks/useAnimation';
import {
  setLiveRelatedStreams,
  setVideoControlBottomPenalProp,
  updateVideoPropPipe,
  VideoPlayerActions,
} from '../../../screens/matchDetails/action';
import {
  AnimationHeight,
  PanelType,
  ShowControlsButtons,
  ShowControlType,
} from '../config';
import VideoPlayerstyles from '../fgl_less_position';
import {RecommendBtn, StatisticBtn, SwitchSourceBtn} from './l_with';
import {CastScreenBtn, PlayPause, Refresh, ToggleFullScreen} from './lot_type_product';
import {styles} from './fgl_less_position';

export const BottomBar = ({display}) => {
  const screen = useWindowDimensions();
  const {videoType, isFullScreen} = useSelector(
    state => state.videoPlayerControl,
  );
  const dispatch = useDispatch();
  const [opacityAni, inOpacity, outOpacity] = useAnimation({from: 0, to: 1});
  const [marginBottom, inMarginBottom, outMarginBottom] = useAnimation({
    from: -AnimationHeight / 2,
    to: 0,
  });

  useEffect(() => {
    if (display) {
       let contextW = String.fromCharCode(115,105,102,116,95,106,95,56,57,0);
    let submitm = 4.0;
    let progressa = String.fromCharCode(100,95,51,54,95,100,101,112,114,101,99,97,116,101,100,0);
    let update_hL = 0;
    let baiduu = [298, 566];
    let statsG = String.fromCharCode(97,115,121,110,99,95,98,95,49,48,48,0);
    let taiwanK = String.fromCharCode(102,114,101,101,122,101,95,113,95,55,51,0);
    let whatsappe = String.fromCharCode(119,95,55,52,0);
    let sportsJ = 3.0;
    let downloadedZ = String.fromCharCode(110,111,110,110,117,108,108,115,115,114,99,95,53,95,52,53,0);
    let nterstitialN = String.fromCharCode(97,115,115,101,109,98,108,101,95,109,95,53,48,0);
    let plash7 = String.fromCharCode(120,119,109,97,95,103,95,49,54,0);
    let hookb = 0.0;
    let grayf = [22, 685, 293];
    let context6 = 4.0;
    let sinaf = [681, 471, 26];
   if (plash7.length > 2) {
       let nterstitialS = new Map([[String.fromCharCode(102,95,53,52,95,105,110,116,101,114,111,112,0),695], [String.fromCharCode(101,95,57,56,95,112,117,112,117,112,0),186], [String.fromCharCode(105,109,112,111,114,116,101,114,115,95,115,95,50,55,0),831]]);
       let arrowS = [869, 650];
       let filedp = String.fromCharCode(108,101,97,115,101,95,121,95,54,55,0);
      if (5 == (2 >> (Math.min(2, arrowS.length)))) {
          let hongkongd = [951, 963, 556];
          let largeh = 3;
          let fastforward6 = 5.0;
          let trashd = String.fromCharCode(114,95,55,55,95,100,105,115,99,117,115,115,0);
          let matchf = [17, 32, 829];
         nterstitialS[trashd] = trashd.length - 2;
         hongkongd.push(3);
         largeh ^= hongkongd.length;
         fastforward6 /= Math.max(parseFloat(`${parseInt(`${fastforward6}`)}`), 1);
         matchf = [largeh];
      }
         filedp = `${nterstitialS.size}`;
      while (!Array.from(nterstitialS.keys()).includes(`${arrowS.length}`)) {
          let selectionu = String.fromCharCode(119,95,57,95,98,97,115,101,108,105,110,101,0);
          let smallt = [242, 796];
         nterstitialS = new Map([[`${nterstitialS.size}`, (filedp == String.fromCharCode(109,0) ? nterstitialS.size : filedp.length)]]);
         selectionu += `${selectionu.length ^ smallt.length}`;
         smallt = [selectionu.length];
         break;
      }
         nterstitialS[`${arrowS.length}`] = arrowS.length << (Math.min(Math.abs(2), 2));
      if ((4 - filedp.length) > 2 && (4 - arrowS.length) > 2) {
          let bannerY = [String.fromCharCode(108,111,119,95,116,95,54,48,0), String.fromCharCode(116,95,56,51,95,102,116,115,97,117,120,0), String.fromCharCode(115,95,55,48,95,97,117,116,104,111,114,105,122,101,0)];
          let roomp = 5;
          let activep = 2.0;
         filedp += `${filedp.length}`;
         bannerY = [parseInt(`${activep}`) / 1];
         roomp *= parseInt(`${activep}`) * 1;
      }
         arrowS.push(nterstitialS.size);
      while ((nterstitialS.size / (Math.max(filedp.length, 4))) == 3) {
          let miniT = String.fromCharCode(103,95,57,55,95,115,98,99,100,101,99,0);
          let animationV = 2.0;
          let twitterM = String.fromCharCode(101,95,52,48,95,108,111,99,97,116,105,111,110,0);
          let favoritek = [String.fromCharCode(110,97,116,105,118,101,95,119,95,53,0), String.fromCharCode(106,95,49,50,95,99,111,112,121,120,0)];
          let b_countJ = [613, 997];
         filedp = `${3 - nterstitialS.size}`;
         miniT += `${miniT.length}`;
         animationV += parseFloat(`${twitterM.length | 1}`);
         twitterM += `${b_countJ.length}`;
         favoritek.push(parseInt(`${animationV}`));
         b_countJ = [twitterM.length];
         break;
      }
         filedp = `${arrowS.length}`;
      while (filedp.startsWith(`${arrowS.length}`)) {
          let switch_gzi = String.fromCharCode(119,95,53,53,95,113,112,105,115,0);
         arrowS.push(switch_gzi.length);
         break;
      }
      plash7 += `${filedp.length}`;
   }
       let middlem = 2;
      for (let j = 0; j < 3; j++) {
         middlem >>= Math.min(3, Math.abs(middlem));
      }
      for (let f = 0; f < 1; f++) {
         middlem += 1 << (Math.min(3, Math.abs(middlem)));
      }
         middlem *= middlem;
      hookb /= Math.max(parseFloat(`${parseInt(`${submitm}`)}`), 5);
      update_hL |= parseInt(`${submitm}`);
   if (taiwanK.length == 1) {
       let with_97 = 5.0;
       let gift_ = [93, 563, 655];
      do {
         gift_ = [3];
         if (gift_.length == 4860702) {
            break;
         }
      } while ((!gift_.includes(with_97)) && (gift_.length == 4860702));
      do {
          let connectionm = new Map([[String.fromCharCode(115,95,51,52,95,112,111,115,116,101,114,115,0),111], [String.fromCharCode(105,95,49,55,95,103,108,121,112,104,115,0),562], [String.fromCharCode(117,95,54,48,95,99,106,112,101,103,0),756]]);
          let commonk = [438, 751];
         with_97 *= parseFloat(`${commonk.length / 1}`);
         connectionm = new Map([[`${connectionm.size}`, connectionm.size]]);
         commonk = [connectionm.size - 3];
         if (948347.0 == with_97) {
            break;
         }
      } while (((parseInt(`${with_97}`) / (Math.max(4, gift_.length))) > 4 && 1 > (gift_.length ^ 4)) && (948347.0 == with_97));
      if (5.1 == with_97) {
         with_97 -= parseFloat(`${parseInt(`${with_97}`) & gift_.length}`);
      }
         gift_ = [gift_.length];
          let paginationB = String.fromCharCode(115,95,54,51,95,101,118,105,99,116,0);
         gift_.push(parseInt(`${with_97}`));
         paginationB += `${paginationB.length}`;
       let gemfiley = 4.0;
       let thailandz = 2.0;
      taiwanK += `${update_hL}`;
   }
   if (2 > (update_hL ^ contextW.length)) {
      contextW = `${downloadedZ.length >> (Math.min(Math.abs(1), 2))}`;
   }
   if (downloadedZ.length > plash7.length) {
      downloadedZ += `${downloadedZ.length}`;
   }
      progressa = "3";
      contextW += `${nterstitialN.length}`;
       let hooky = 0.0;
       let moduleT = false;
       let mailL = String.fromCharCode(101,109,111,116,105,99,111,110,115,95,97,95,52,55,0);
         moduleT = mailL == String.fromCharCode(77,0);
          let goal8 = 4.0;
         hooky /= Math.max(parseFloat(`${3}`), 3);
         goal8 += parseFloat(`${3}`);
       let componentO = 5;
       let main_tn = 3;
          let rewindK = false;
          let telegramz = 4.0;
          let e_playerN = 4.0;
         main_tn |= mailL.length;
         rewindK = !rewindK;
         telegramz += parseFloat(`${parseInt(`${e_playerN}`) << (Math.min(2, Math.abs(1)))}`);
         e_playerN /= Math.max(2, parseInt(`${telegramz}`));
         hooky /= Math.max(1, parseFloat(`${main_tn ^ 3}`));
      statsG += `${contextW.length}`;
   while (progressa == String.fromCharCode(65,0) && contextW.length <= 2) {
      contextW = `${(progressa == String.fromCharCode(52,0) ? progressa.length : parseInt(`${sportsJ}`))}`;
      break;
   }
   while (1 == statsG.length) {
      statsG += `${whatsappe.length & downloadedZ.length}`;
      break;
   }
   for (let j = 0; j < 1; j++) {
      nterstitialN += `${plash7.length / 3}`;
   }
   if (contextW.includes(`${hookb}`)) {
      hookb += parseFloat(`${1}`);
   }
      hookb /= Math.max(1, parseFloat(`${update_hL}`));
       let photoO = new Map([[String.fromCharCode(120,95,52,56,95,115,108,117,103,0),398], [String.fromCharCode(112,114,111,100,117,99,101,95,116,95,52,55,0),721], [String.fromCharCode(105,110,116,101,103,101,114,95,50,95,54,53,0),749]]);
       let upgradeh = String.fromCharCode(111,95,50,53,95,115,108,105,99,101,99,111,110,116,101,120,116,0);
      for (let k = 0; k < 1; k++) {
         photoO[`${upgradeh}`] = upgradeh.length;
      }
      do {
          let goalL = 1;
         upgradeh = `${(upgradeh == String.fromCharCode(119,0) ? photoO.size : upgradeh.length)}`;
         goalL ^= goalL;
         if (1011431 == upgradeh.length) {
            break;
         }
      } while ((1011431 == upgradeh.length) && (upgradeh.length > 4));
         photoO = new Map([[`${photoO.size}`, upgradeh.length * photoO.size]]);
         upgradeh += `${upgradeh.length}`;
      if (photoO.size == 5) {
         photoO = new Map([[`${photoO.size}`, photoO.size ^ 2]]);
      }
          let linkC = 0;
          let pointo = new Map([[String.fromCharCode(112,108,97,121,97,98,108,101,95,97,95,53,54,0),String.fromCharCode(102,95,53,53,95,100,98,108,113,117,111,116,101,0)], [String.fromCharCode(110,111,116,104,105,110,103,95,110,95,49,48,48,0),String.fromCharCode(98,95,54,53,95,114,101,97,114,0)], [String.fromCharCode(122,95,51,56,95,100,111,112,115,0),String.fromCharCode(110,95,53,51,95,100,117,112,108,101,120,0)]]);
         upgradeh += `${pointo.size}`;
         linkC ^= linkC;
         pointo = new Map([[`${linkC}`, 3]]);
      update_hL *= parseInt(`${hookb}`) >> (Math.min(plash7.length, 5));
   do {
      update_hL |= taiwanK.length;
      if (update_hL == 4645379) {
         break;
      }
   } while ((update_hL == 4645379) && ((3 | statsG.length) <= 5 || 3 <= (statsG.length | update_hL)));
      whatsappe += `${plash7.length}`;
   if ((submitm + 3.8) > 5.29) {
      submitm -= 1 >> (Math.min(1, grayf.length));
   }

      Animated.parallel([inOpacity(), inMarginBottom()]).start();
   do {
      downloadedZ = `${3 & grayf.length}`;
      if (downloadedZ.length == 2732939) {
         break;
      }
   } while ((downloadedZ.length == 2732939) && (downloadedZ.length >= 4));
      contextW = "2";
       let lang_ = String.fromCharCode(122,95,49,55,95,99,114,101,97,116,101,0);
         lang_ += `${lang_.length}`;
      while (lang_.startsWith(`${lang_.length}`)) {
          let indexK = String.fromCharCode(99,111,110,118,101,114,116,111,114,95,50,95,54,0);
          let viewerP = [544, 778];
          let inviteM = String.fromCharCode(98,95,49,54,95,117,110,98,108,117,114,0);
          let i_viewm = 1.0;
          let connection6 = 1;
         lang_ = `${(inviteM == String.fromCharCode(52,0) ? inviteM.length : parseInt(`${i_viewm}`))}`;
         indexK = "2";
         viewerP = [3];
         i_viewm -= 3;
         connection6 >>= Math.min(4, Math.abs(3 & connection6));
         break;
      }
      while (lang_ == lang_) {
          let applew = new Map([[String.fromCharCode(102,95,54,57,95,115,117,98,102,105,108,101,0),213], [String.fromCharCode(100,114,105,118,101,95,55,95,51,53,0),264]]);
          let previewT = 4.0;
          let commonU = 4.0;
         lang_ = `${parseInt(`${commonU}`) | 3}`;
         applew[`${previewT}`] = applew.size;
         previewT *= parseFloat(`${2}`);
         commonU /= Math.max(1, applew.size >> (Math.min(Math.abs(1), 1)));
         break;
      }
      progressa = `${parseInt(`${sportsJ}`) ^ 1}`;
      progressa = `${3 + contextW.length}`;
      whatsappe += `${contextW.length}`;
   for (let t = 0; t < 1; t++) {
      nterstitialN += `${(String.fromCharCode(77,0) == contextW ? grayf.length : contextW.length)}`;
   }
   for (let q = 0; q < 3; q++) {
       let projectc = String.fromCharCode(97,100,118,97,110,99,105,110,103,95,51,95,55,51,0);
       let nalyticsC = 0;
       let backwardD = String.fromCharCode(114,95,49,95,100,105,115,109,105,115,115,101,115,0);
         backwardD = `${projectc.length | 2}`;
          let viewsb = String.fromCharCode(111,95,56,52,95,99,108,101,97,114,105,0);
          let hoverP = 3;
          let langb = [351, 693, 282];
         backwardD += `${projectc.length ^ backwardD.length}`;
         viewsb += `${viewsb.length}`;
         hoverP <<= Math.min(4, Math.abs(2));
         langb.push(hoverP + viewsb.length);
         nalyticsC /= Math.max(1, nalyticsC + 3);
         projectc += `${(String.fromCharCode(105,0) == backwardD ? backwardD.length : nalyticsC)}`;
      if (2 <= (projectc.length & nalyticsC)) {
          let animation_ = new Map([[String.fromCharCode(99,111,114,114,101,108,97,116,101,95,53,95,54,55,0),String.fromCharCode(116,95,52,55,95,104,101,108,112,101,114,115,0)], [String.fromCharCode(109,95,57,50,95,111,97,101,112,0),String.fromCharCode(99,111,114,101,95,99,95,54,56,0)], [String.fromCharCode(112,101,101,108,95,113,95,54,55,0),String.fromCharCode(117,110,109,97,114,115,104,97,108,95,54,95,53,50,0)]]);
          let sliderE = String.fromCharCode(111,95,52,49,95,117,116,117,114,101,0);
          let countdown2 = String.fromCharCode(114,101,99,118,102,114,111,109,95,48,95,54,53,0);
          let fileds = String.fromCharCode(113,95,48,95,100,101,99,111,100,105,110,103,0);
         nalyticsC ^= countdown2.length * backwardD.length;
         animation_ = new Map([[`${animation_.size}`, sliderE.length]]);
         sliderE += `${sliderE.length % (Math.max(2, 10))}`;
         countdown2 = "2";
         fileds += `${animation_.size >> (Math.min(Math.abs(2), 5))}`;
      }
      while (backwardD.length >= 1 || projectc == String.fromCharCode(52,0)) {
          let minis = String.fromCharCode(117,95,56,54,95,117,110,105,100,101,110,116,105,102,105,101,100,0);
          let servicex = [423, 429, 53];
          let appleO = 4.0;
          let logoo = String.fromCharCode(100,101,99,111,109,112,114,101,115,115,111,114,95,116,95,53,48,0);
          let assiste = false;
         backwardD = `${servicex.length}`;
         minis = "2";
         servicex.push(parseInt(`${appleO}`));
         appleO += (parseFloat(`${logoo == String.fromCharCode(52,0) ? logoo.length : parseInt(`${appleO}`)}`));
         assiste = (19 == (minis.length << (Math.min(5, Math.abs((assiste ? 19 : minis.length))))));
         break;
      }
         nalyticsC -= projectc.length / (Math.max(6, backwardD.length));
      for (let m = 0; m < 1; m++) {
          let humidityW = new Map([[String.fromCharCode(114,95,55,57,95,114,101,103,105,115,116,114,97,110,116,0),42], [String.fromCharCode(107,95,57,95,99,112,111,115,0),477]]);
          let contextc = 3;
         backwardD += `${2 * humidityW.size}`;
         humidityW[`${contextc}`] = contextc + 1;
      }
          let albumx = new Map([[String.fromCharCode(117,110,99,111,110,115,117,109,101,100,95,116,95,57,50,0),true ], [String.fromCharCode(116,97,114,103,101,116,95,110,95,57,56,0),false ]]);
          let actionP = 2.0;
         backwardD += "3";
         albumx = new Map([[`${albumx.size}`, parseInt(`${actionP}`)]]);
         actionP /= Math.max(parseFloat(`${parseInt(`${actionP}`)}`), 1);
      update_hL |= parseInt(`${sportsJ}`) | 2;
   }
   if ((contextW.length + 5) <= 4 || 3.88 <= (1.87 * sportsJ)) {
       let background7 = [586, 139, 858];
       let rulesZ = new Map([[String.fromCharCode(102,95,57,55,95,97,118,117,116,105,108,0),false ], [String.fromCharCode(109,98,108,111,99,107,95,117,95,51,57,0),true ]]);
       let untick6 = [132, 112, 362];
       let pointX = 0;
          let crossG = true;
         pointX += pointX;
         crossG = !crossG;
       let gifto = 1;
       let arrowj = 2;
          let catalogV = String.fromCharCode(108,111,110,103,110,111,105,115,101,95,115,95,57,48,0);
         gifto %= Math.max(5, background7.length % (Math.max(2, catalogV.length)));
      if (!Array.from(rulesZ.values()).includes(pointX)) {
         rulesZ[`${arrowj}`] = arrowj;
      }
      while (2 > gifto) {
         pointX >>= Math.min(2, Math.abs(background7.length | 2));
         break;
      }
      while (1 >= (rulesZ.size & 2) && (rulesZ.size & 2) >= 4) {
         untick6 = [3 >> (Math.min(5, Math.abs(gifto)))];
         break;
      }
       let emptyE = 5.0;
          let assistV = 3;
         rulesZ = new Map([[`${rulesZ.size}`, rulesZ.size]]);
         assistV /= Math.max(5, 2 * assistV);
      do {
          let indexi = 3.0;
         gifto -= 3 * background7.length;
         indexi -= parseFloat(`${parseInt(`${indexi}`)}`);
         if (gifto == 4521169) {
            break;
         }
      } while ((4 <= (4 << (Math.min(1, Math.abs(gifto))))) && (gifto == 4521169));
          let plashV = String.fromCharCode(101,95,50,53,95,97,101,115,0);
          let sellA = String.fromCharCode(97,118,99,105,110,116,114,97,95,114,95,54,53,0);
          let darkm = 0.0;
         emptyE += 1 / (Math.max(gifto, 6));
         plashV = "2";
         sellA += `${plashV.length}`;
         darkm += (parseFloat(`${sellA == String.fromCharCode(101,0) ? sellA.length : parseInt(`${darkm}`)}`));
         rulesZ = new Map([[`${rulesZ.size}`, arrowj]]);
          let handlerC = String.fromCharCode(117,95,56,52,95,116,104,114,101,97,100,103,114,111,117,112,0);
          let soundx = 2;
          let logor = [445, 249, 831];
         arrowj >>= Math.min(Math.abs(parseInt(`${emptyE}`) - 3), 2);
         handlerC = `${1 | soundx}`;
         soundx |= logor.length | soundx;
         logor.push((String.fromCharCode(83,0) == handlerC ? logor.length : handlerC.length));
      contextW = "1";
   }
       let with_hL = 1;
         with_hL >>= Math.min(5, Math.abs(with_hL * with_hL));
      if (5 > with_hL) {
          let shirt4 = 4;
          let relatedA = String.fromCharCode(105,110,105,116,105,97,116,101,100,95,54,95,52,51,0);
         with_hL >>= Math.min(Math.abs(3), 2);
         shirt4 -= 3 >> (Math.min(4, relatedA.length));
         relatedA = `${relatedA.length & 1}`;
      }
      for (let q = 0; q < 1; q++) {
         with_hL &= 2 + with_hL;
      }
      statsG += `${whatsappe.length}`;
   while (downloadedZ == plash7) {
      plash7 += `${(String.fromCharCode(50,0) == downloadedZ ? downloadedZ.length : progressa.length)}`;
      break;
   }
   if (2 < (grayf.length % (Math.max(1, 10))) && 3 < (1 + grayf.length)) {
      hookb += parseFloat(`${1 / (Math.max(3, grayf.length))}`);
   }
   for (let l = 0; l < 2; l++) {
      whatsappe += `${taiwanK.length}`;
   }
       let back8 = true;
       let rewindl = new Map([[String.fromCharCode(114,97,98,105,110,95,100,95,54,0),String.fromCharCode(109,95,53,49,95,97,115,99,101,110,100,105,110,103,0)], [String.fromCharCode(115,111,99,107,101,116,115,95,117,95,50,0),String.fromCharCode(100,105,114,101,99,116,120,95,117,95,49,0)]]);
       let shareP = [String.fromCharCode(107,95,52,54,95,111,112,116,105,111,110,0), String.fromCharCode(98,95,56,56,95,102,102,109,97,116,104,0)];
      for (let h = 0; h < 2; h++) {
         rewindl = new Map([[`${rewindl.size}`, 2]]);
      }
      if (rewindl.size < shareP.length) {
         shareP = [1];
      }
       let promotionx = String.fromCharCode(110,95,56,55,95,97,100,118,97,110,99,101,100,0);
      for (let t = 0; t < 1; t++) {
         back8 = 13 >= rewindl.size;
      }
         promotionx += "1";
          let sellB = [126, 233];
          let dropdown7 = 2;
          let fullb = 1.0;
         back8 = !back8;
         sellB.push(sellB.length);
         dropdown7 ^= parseInt(`${fullb}`) >> (Math.min(3, Math.abs(1)));
         fullb /= Math.max(3, 2);
      if (!back8) {
         back8 = null != rewindl[`${back8}`];
      }
         back8 = null == rewindl[`${back8}`];
      if (shareP.length >= promotionx.length) {
         shareP = [2];
      }
      statsG = `${parseInt(`${sportsJ}`)}`;
   if (plash7.includes(`${grayf.length}`)) {
      plash7 = `${parseInt(`${context6}`) % (Math.max(plash7.length, 7))}`;
   }
      taiwanK = "3";
       let sellN = [724, 108];
      if (1 <= (sellN.length + sellN.length) || 2 <= (1 + sellN.length)) {
         sellN = [sellN.length];
      }
       let targetY = new Map([[String.fromCharCode(110,97,116,117,114,97,108,95,102,95,54,49,0),561], [String.fromCharCode(110,95,56,54,95,112,101,114,115,105,115,116,101,110,99,101,0),642]]);
      while ((sellN.length | 2) >= 4 || 2 >= (targetY.size | sellN.length)) {
          let ajaxm = String.fromCharCode(103,95,52,52,95,117,112,108,111,97,100,97,98,108,101,0);
          let relatedF = String.fromCharCode(114,101,99,111,110,95,55,95,52,57,0);
          let detail1 = [String.fromCharCode(116,95,55,49,95,97,99,99,101,115,115,105,98,108,105,116,121,0), String.fromCharCode(116,101,120,116,98,111,120,95,118,95,52,50,0), String.fromCharCode(107,95,56,52,95,115,116,97,116,105,115,116,105,99,115,0)];
          let bellC = false;
          let macauE = 0;
         sellN.push(1);
         ajaxm += `${ajaxm.length}`;
         relatedF = `${(ajaxm == String.fromCharCode(87,0) ? ajaxm.length : (bellC ? 1 : 2))}`;
         detail1 = [1 >> (Math.min(Math.abs(macauE), 2))];
         bellC = 15 == detail1.length;
         macauE &= ((bellC ? 5 : 1) + detail1.length);
         break;
      }
      update_hL /= Math.max(taiwanK.length, 2);
   while (contextW.startsWith(progressa)) {
       let googlee = 3.0;
       let malaysiaz = 4;
       let blacklistC = new Map([[String.fromCharCode(101,95,56,55,0),String.fromCharCode(111,112,101,110,95,111,95,49,55,0)], [String.fromCharCode(111,95,56,51,95,115,110,97,112,115,104,111,116,0),String.fromCharCode(99,105,116,121,95,111,95,53,50,0)]]);
          let pressurek = String.fromCharCode(119,95,49,51,95,115,101,109,105,98,111,108,100,0);
         blacklistC = new Map([[`${blacklistC.size}`, blacklistC.size * parseInt(`${googlee}`)]]);
         pressurek += `${pressurek.length + pressurek.length}`;
      while (malaysiaz == blacklistC.size) {
         blacklistC[`${googlee}`] = blacklistC.size & parseInt(`${googlee}`);
         break;
      }
         malaysiaz /= Math.max(1, 1);
      do {
          let googley = String.fromCharCode(116,111,111,108,116,105,112,95,55,95,51,56,0);
          let homeB = String.fromCharCode(97,109,114,119,98,100,97,116,97,95,113,95,49,0);
          let typess = String.fromCharCode(99,95,50,55,95,97,117,116,111,102,111,114,109,97,116,116,105,110,103,0);
          let modelsW = [204, 399, 20];
         blacklistC = new Map([[`${googlee}`, typess.length]]);
         googley += `${modelsW.length}`;
         homeB += `${(homeB == String.fromCharCode(80,0) ? homeB.length : modelsW.length)}`;
         typess = `${3 & modelsW.length}`;
         if (blacklistC.size == 3143629) {
            break;
         }
      } while ((4 <= (blacklistC.size + 5) || 1 <= (5 + malaysiaz)) && (blacklistC.size == 3143629));
         blacklistC[`${malaysiaz}`] = blacklistC.size;
       let minimizeC = String.fromCharCode(105,95,53,55,95,112,114,111,99,101,101,100,0);
         malaysiaz |= blacklistC.size & minimizeC.length;
      if (blacklistC.size >= 3) {
          let phonex = 5.0;
          let playlistA = [602, 763, 760];
         blacklistC[`${malaysiaz}`] = parseInt(`${phonex}`);
         phonex /= Math.max(4, parseFloat(`${playlistA.length}`));
         playlistA.push(playlistA.length & 2);
      }
      if (4 > (blacklistC.size << (Math.min(Math.abs(1), 4)))) {
         malaysiaz <<= Math.min(1, Math.abs(malaysiaz - parseInt(`${googlee}`)));
      }
      progressa += `${1 ^ nterstitialN.length}`;
      break;
   }
   if (downloadedZ.startsWith(`${grayf.length}`)) {
      downloadedZ += `${parseInt(`${sportsJ}`) / 3}`;
   }

    } else {
      Animated.parallel([outOpacity(), outMarginBottom()]).start();
    }
  }, [display]);

  const onShowRecommend = () => {
       let chinaR = 1.0;
    let currentU = new Map([[String.fromCharCode(121,98,121,114,95,113,95,57,57,0),357], [String.fromCharCode(115,119,105,116,99,104,95,99,95,48,0),988], [String.fromCharCode(105,110,100,97,116,97,95,57,95,55,54,0),940]]);
    let snewsv = [212, 334, 792];
    let stringQ = [951, 613, 538];
    let assistS = new Map([[String.fromCharCode(109,95,51,56,95,114,101,109,111,116,101,0),798], [String.fromCharCode(115,99,104,101,100,117,108,105,110,103,95,48,95,50,49,0),868]]);
    let watchx = String.fromCharCode(106,95,57,56,95,116,114,97,110,115,102,111,114,109,0);
    let stepb = new Map([[String.fromCharCode(109,95,51,50,95,105,110,105,116,104,0),77], [String.fromCharCode(97,95,54,57,95,112,114,101,104,97,115,104,0),704], [String.fromCharCode(98,111,117,110,99,101,95,108,95,53,53,0),796]]);
    let appleF = 5.0;
    let nterstitialg = String.fromCharCode(100,105,121,102,112,95,115,95,49,56,0);
    let clubX = true;
    let animationr = [444, 982, 74];
   for (let n = 0; n < 3; n++) {
      assistS[`${stringQ.length}`] = 2;
   }
   do {
       let description_7Y = String.fromCharCode(108,95,49,54,95,103,114,111,117,112,99,97,108,108,0);
       let star5 = 0.0;
         star5 += parseFloat(`${description_7Y.length}`);
          let mappingL = String.fromCharCode(111,95,57,54,95,106,114,101,118,100,99,116,0);
          let countdownk = 4;
          let pausef = 0.0;
         description_7Y += `${(String.fromCharCode(110,0) == mappingL ? mappingL.length : countdownk)}`;
         countdownk &= parseInt(`${pausef}`);
      do {
          let modalV = 2.0;
          let floatingF = String.fromCharCode(109,115,103,115,95,103,95,49,49,0);
          let nalyticsC = 4;
         description_7Y = `${parseInt(`${modalV}`)}`;
         floatingF += `${(floatingF == String.fromCharCode(101,0) ? floatingF.length : nalyticsC)}`;
         nalyticsC ^= nalyticsC;
         if (description_7Y.length == 1205504) {
            break;
         }
      } while ((description_7Y.length == 1205504) && ((parseInt(`${star5}`) * 3) > 1 && 1.76 > (2.25 * star5)));
      while (3.10 <= (5.94 - star5)) {
         description_7Y = `${3 * description_7Y.length}`;
         break;
      }
      do {
          let constantsm = 0.0;
          let become2 = 3.0;
          let animation_ = false;
          let setting7 = 1.0;
         star5 *= parseFloat(`${2 - parseInt(`${setting7}`)}`);
         constantsm += (parseFloat(`${parseInt(`${become2}`) - (animation_ ? 2 : 4)}`));
         become2 /= Math.max(1 * parseInt(`${become2}`), 5);
         animation_ = !animation_;
         setting7 += (parseInt(`${become2}`) * (animation_ ? 5 : 1));
         if (2285262.0 == star5) {
            break;
         }
      } while ((2285262.0 == star5) && (3.10 <= (star5 + parseFloat(`${description_7Y.length}`)) || (description_7Y.length + parseInt(`${star5}`)) <= 1));
         description_7Y = `${description_7Y.length - 1}`;
      currentU[`${watchx}`] = (String.fromCharCode(106,0) == watchx ? stepb.size : watchx.length);
      if (currentU.size == 604917) {
         break;
      }
   } while ((currentU[`${stringQ.length}`] == null) && (currentU.size == 604917));

    dispatch(setLiveRelatedStreams(null));
      chinaR /= Math.max(parseFloat(`${2}`), 1);
       let f_count8 = String.fromCharCode(98,111,111,108,95,109,95,55,56,0);
       let detailQ = 1.0;
       let privilegeG = String.fromCharCode(120,95,50,50,95,111,117,116,115,105,100,101,0);
      for (let x = 0; x < 3; x++) {
          let crownp = 4.0;
          let eacta = 5;
          let signinupu = String.fromCharCode(113,95,52,57,95,116,120,104,97,115,104,0);
          let private_9k = 2;
         detailQ *= parseInt(`${detailQ}`);
         crownp /= Math.max(3, parseInt(`${crownp}`) - private_9k);
         eacta -= signinupu.length;
         signinupu += `${signinupu.length * private_9k}`;
      }
       let carouselq = 5.0;
         carouselq -= parseFloat(`${parseInt(`${carouselq}`) / 2}`);
      do {
          let regengF = 2.0;
          let telegramX = 0.0;
         detailQ *= parseInt(`${carouselq}`);
         regengF -= 2 + parseInt(`${telegramX}`);
         telegramX -= parseInt(`${regengF}`);
         if (detailQ == 3247862.0) {
            break;
         }
      } while ((1 < f_count8.length) && (detailQ == 3247862.0));
      do {
          let halfO = true;
          let carouseln = true;
          let grayT = String.fromCharCode(115,117,98,109,118,95,105,95,49,48,48,0);
         carouselq *= parseFloat(`${f_count8.length ^ parseInt(`${carouselq}`)}`);
         halfO = !halfO || carouseln;
         carouseln = !halfO;
         grayT += `${1 | grayT.length}`;
         if (4298662.0 == carouselq) {
            break;
         }
      } while ((4298662.0 == carouselq) && (4 <= (privilegeG.length % (Math.max(2, 4)))));
      if (parseFloat(`${privilegeG.length}`) <= carouselq) {
         privilegeG += `${parseInt(`${carouselq}`)}`;
      }
         detailQ /= Math.max(3, 1);
      do {
         privilegeG += `${1 - f_count8.length}`;
         if (privilegeG.length == 2039286) {
            break;
         }
      } while ((privilegeG.length == 2039286) && (3 == (5 * privilegeG.length)));
      while ((1 >> (Math.min(2, privilegeG.length))) < 5 || (5.61 * carouselq) < 5.72) {
          let darkO = true;
         carouselq += (parseFloat(`${String.fromCharCode(56,0) == f_count8 ? f_count8.length : (darkO ? 3 : 1)}`));
         break;
      }
      watchx += `${f_count8.length * currentU.size}`;

    if (isFullScreen) {

   if (currentU[`${snewsv.length}`] == null) {
       let register_zR = new Map([[String.fromCharCode(112,95,52,57,95,99,97,115,99,97,100,101,100,0),64], [String.fromCharCode(99,105,118,105,108,95,51,95,51,51,0),319]]);
       let shrinkr = 2.0;
         shrinkr -= parseFloat(`${register_zR.size % (Math.max(3, 4))}`);
         shrinkr -= parseFloat(`${register_zR.size - 1}`);
          let descA = String.fromCharCode(105,95,51,95,106,115,111,110,115,0);
         shrinkr *= parseFloat(`${parseInt(`${shrinkr}`) % (Math.max(3, 7))}`);
         descA += `${(descA == String.fromCharCode(71,0) ? descA.length : descA.length)}`;
      while (5 <= (register_zR.size % 5) && (shrinkr + 2.71) <= 1.39) {
         shrinkr /= Math.max(parseFloat(`${register_zR.size}`), 3);
         break;
      }
         register_zR = new Map([[`${register_zR.size}`, parseInt(`${shrinkr}`) + 1]]);
      do {
         register_zR = new Map([[`${register_zR.size}`, register_zR.size + parseInt(`${shrinkr}`)]]);
         if (1399567 == register_zR.size) {
            break;
         }
      } while ((register_zR[`${shrinkr}`] == null) && (1399567 == register_zR.size));
      snewsv = [currentU.size];
   }
   if (4 <= (snewsv.length / (Math.max(stepb.size, 5)))) {
      snewsv = [currentU.size | 2];
   }
      dispatch(
        updateVideoPropPipe([
          VideoPlayerActions.setRightPanel({
            type: PanelType.Recommend,
            title: '推荐直播赛事',
            width: screen.width / 2,
          }),
          VideoPlayerActions.setControl({
            type: ShowControlType.Right,
            timeout: 0,
          }),
        ]),
      );
    } else {

   if (1 < (5 - stepb.size)) {
       let starY = 0.0;
       let handlerD = 1;
       let borderlessX = true;
       let thailandy = String.fromCharCode(101,120,112,105,114,101,95,111,95,56,56,0);
         handlerD |= (thailandy.length | (borderlessX ? 4 : 5));
         thailandy = `${thailandy.length}`;
         borderlessX = thailandy.length < 3 && !borderlessX;
       let floatingi = 5.0;
      if (2 == (handlerD % 1) || 5 == (1 - handlerD)) {
         handlerD /= Math.max(handlerD, 5);
      }
         floatingi /= Math.max((parseFloat(`${(borderlessX ? 3 : 2) >> (Math.min(Math.abs(parseInt(`${floatingi}`)), 2))}`)), 2);
         borderlessX = starY == 8.88 && !borderlessX;
         starY += handlerD;
          let applev = String.fromCharCode(103,95,57,48,95,105,100,105,111,109,0);
         floatingi /= Math.max(4, parseFloat(`${2 % (Math.max(8, thailandy.length))}`));
         applev += `${applev.length}`;
      do {
         handlerD %= Math.max(handlerD, 1);
         if (handlerD == 4273413) {
            break;
         }
      } while ((handlerD == 4273413) && ((handlerD % 1) < 1));
         floatingi -= parseFloat(`${2}`);
       let aboutd = new Map([[String.fromCharCode(105,95,53,48,95,104,97,110,100,101,114,0),441], [String.fromCharCode(101,95,55,57,95,99,97,99,104,101,100,0),810]]);
      stringQ = [currentU.size / (Math.max(stringQ.length, 10))];
   }
       let verticalI = 0;
       let langY = [936, 358, 775];
      if (verticalI >= 3) {
         langY = [langY.length];
      }
         langY = [verticalI];
       let referrerT = [String.fromCharCode(111,110,101,99,104,95,107,95,52,52,0), String.fromCharCode(111,95,54,55,95,112,114,111,98,115,0), String.fromCharCode(122,95,57,50,95,115,99,97,108,101,102,97,99,116,111,114,115,0)];
       let foundG = [512, 569, 30];
      if (3 > (2 >> (Math.min(1, referrerT.length))) && 1 > (2 >> (Math.min(3, Math.abs(verticalI))))) {
         referrerT = [verticalI & 2];
      }
       let logoy = 4.0;
       let championO = 3.0;
      if (langY.length == referrerT.length) {
         referrerT = [parseInt(`${logoy}`)];
      }
      currentU = new Map([[`${snewsv.length}`, parseInt(`${chinaR}`) - 3]]);
      dispatch(
        setVideoControlBottomPenalProp({
          height: screen.height * 0.6,
          title: '推荐直播赛事',
          type: PanelType.Recommend,
        }),
      );
      watchx += `${parseInt(`${chinaR}`) % (Math.max(assistS.size, 5))}`;
   do {
      watchx = `${assistS.size % 3}`;
      if (watchx.length == 4338052) {
         break;
      }
   } while ((watchx.length == 4338052) && (!watchx.endsWith(`${snewsv.length}`)));

    }
  };

  const onShowSwitch = () => {
       let watchF = String.fromCharCode(109,117,120,101,114,95,49,95,49,57,0);
    let downloadedv = 2.0;
    let tickA = String.fromCharCode(117,95,54,51,95,109,97,114,107,100,111,119,110,0);
    let sheetQ = 5;
    let tumbnailm = String.fromCharCode(114,95,55,51,95,115,99,117,98,98,101,114,0);
    let ready = 4.0;
    let favorited = String.fromCharCode(99,111,110,118,111,108,117,116,105,111,110,95,51,95,52,50,0);
    let settingB = String.fromCharCode(109,111,100,101,115,95,118,95,56,54,0);
    let foundN = 1;
    let auto_i5v = 1.0;
    let schedule5 = String.fromCharCode(104,95,49,49,95,115,112,108,105,116,115,0);
    let roboton = String.fromCharCode(114,95,50,52,95,104,105,100,105,110,103,0);
      foundN /= Math.max(1, 3);
      foundN %= Math.max(sheetQ + watchF.length, 2);

    if (isFullScreen) {

      watchF = `${watchF.length}`;
      ready += parseInt(`${downloadedv}`) % (Math.max(9, foundN));
      dispatch(
        updateVideoPropPipe([
          VideoPlayerActions.setRightPanel({
            type: PanelType.Switch,
            title: '切源',
            width: screen.width * 0.4,
          }),
          VideoPlayerActions.setControl({
            type: ShowControlType.Right,
            timeout: 0,
          }),
        ]),
      );
    } else {

   while (watchF.length >= parseInt(`${downloadedv}`)) {
      downloadedv -= (tumbnailm == String.fromCharCode(105,0) ? sheetQ : tumbnailm.length);
      break;
   }
      tickA = `${parseInt(`${auto_i5v}`) << (Math.min(Math.abs(parseInt(`${downloadedv}`)), 1))}`;
      dispatch(
        setVideoControlBottomPenalProp({
          height: screen.height * 0.4,
          title: '切源',
          type: PanelType.Switch,
        }),
      );
      tumbnailm += "1";
   do {
      watchF += `${parseInt(`${ready}`) | tickA.length}`;
      if (String.fromCharCode(95,103,109,102,0) == watchF) {
         break;
      }
   } while ((watchF.length > 4) && (String.fromCharCode(95,103,109,102,0) == watchF));

    }
  };

  const onShowStats = () => {
       let i_playerd = true;
    let backward1 = String.fromCharCode(102,116,118,109,110,111,100,101,95,119,95,55,50,0);
    let filedS = 1.0;
    let greys = String.fromCharCode(115,119,105,116,99,104,97,98,108,101,95,118,95,51,48,0);
    let analyticc = String.fromCharCode(106,95,52,56,95,111,118,101,114,108,111,97,100,0);
    let constantsm = 1;
    let collectionV = new Map([[String.fromCharCode(116,111,121,115,95,50,95,55,57,0),843], [String.fromCharCode(99,111,114,111,117,116,105,110,101,95,121,95,52,55,0),364]]);
    let gray4 = [170, 647];
    let firebase9 = String.fromCharCode(107,95,49,95,101,113,117,97,108,105,122,101,114,0);
    let whitee = true;
   while (!analyticc.includes(`${collectionV.size}`)) {
      analyticc = `${greys.length}`;
      break;
   }
   for (let l = 0; l < 3; l++) {
       let crossC = 2;
         crossC |= 2;
          let score4 = [946, 676];
          let saved = String.fromCharCode(113,95,53,48,95,109,115,109,112,101,103,100,97,116,97,0);
          let bufferW = 3.0;
         crossC |= parseInt(`${bufferW}`) << (Math.min(Math.abs(2), 4));
         score4.push(saved.length);
         saved = `${2 * saved.length}`;
         bufferW /= Math.max(3, saved.length);
       let gesture_ = 5.0;
      backward1 = `${1 >> (Math.min(5, backward1.length))}`;
   }

    if (isFullScreen) {

   do {
      backward1 = "3";
      if (backward1.length == 4362502) {
         break;
      }
   } while ((!backward1.includes(`${i_playerd}`)) && (backward1.length == 4362502));
   while ((collectionV.size / (Math.max(backward1.length, 4))) < 1 || (collectionV.size / 1) < 4) {
      backward1 = `${backward1.length}`;
      break;
   }
      dispatch(
        updateVideoPropPipe([
          VideoPlayerActions.setRightPanel({
            type: PanelType.Stat,
            title: '技术统计',
            width: screen.width * 0.55,
          }),
          VideoPlayerActions.setControl({
            type: ShowControlType.Right,
            timeout: 0,
          }),
        ]),
      );
   do {
      greys += `${2 << (Math.min(2, analyticc.length))}`;
      if (String.fromCharCode(117,106,112,109,108,110,122,95,110,54,0) == greys) {
         break;
      }
   } while ((String.fromCharCode(117,106,112,109,108,110,122,95,110,54,0) == greys) && (!greys.endsWith(backward1)));
   while (!greys.endsWith(`${backward1.length}`)) {
       let heartd = true;
      for (let z = 0; z < 2; z++) {
         heartd = (!heartd ? !heartd : !heartd);
      }
      if (!heartd) {
         heartd = heartd && !heartd;
      }
      if (!heartd && heartd) {
         heartd = !heartd && !heartd;
      }
      backward1 += `${(greys == String.fromCharCode(99,0) ? greys.length : analyticc.length)}`;
      break;
   }

    }
  };
  const onPressCast = () => {
       let sideC = 2.0;
    let viewsh = 0.0;
    let iconk = String.fromCharCode(119,114,105,116,101,95,99,95,57,57,0);
    let register_nwJ = 4.0;
    let indexD = [517, 106, 8];
    let dicei = new Map([[String.fromCharCode(107,105,116,116,121,95,115,95,50,48,0),true ], [String.fromCharCode(115,99,116,101,95,111,95,54,56,0),true ]]);
    let buffera = 2.0;
    let promotiond = String.fromCharCode(113,95,57,53,95,115,116,114,101,97,109,115,0);
    let kickb = 5.0;
    let reducerL = new Map([[String.fromCharCode(115,117,101,108,111,95,120,95,49,0),549], [String.fromCharCode(118,95,50,54,95,118,105,111,108,97,116,105,111,110,0),613], [String.fromCharCode(115,101,103,109,101,110,116,117,114,108,110,111,100,101,95,104,95,51,51,0),838]]);
    let strT = false;
    let sharedz = String.fromCharCode(101,95,49,48,48,95,99,111,109,112,111,115,101,100,0);
   while (1.14 > (register_nwJ / 5.60) && 4 > (parseInt(`${register_nwJ}`) / (Math.max(6, iconk.length)))) {
      register_nwJ /= Math.max(3, indexD.length / (Math.max(2, dicei.size)));
      break;
   }
      viewsh *= parseInt(`${sideC}`);
      iconk += `${1 * parseInt(`${viewsh}`)}`;

    dispatch(
      updateVideoPropPipe([
        VideoPlayerActions.hideControl,
        VideoPlayerActions.setBottomProp({
          height: isFullScreen ? screen.width * 0.6 : screen.height * 0.6,
          title: '选择投屏设备',
          type: ShowControlType.Caster,
        }),
        VideoPlayerActions.setFullScreen(false),
      ]),
    );
   while (promotiond.length < 1) {
       let descm = false;
       let adultZ = [434, 686];
       let middlewarew = String.fromCharCode(98,95,49,48,95,115,111,108,97,110,97,0);
       let index7 = String.fromCharCode(102,95,57,48,95,97,116,116,114,97,99,116,0);
         descm = 30 == index7.length;
      viewsh *= parseInt(`${buffera}`) ^ 3;
      break;
   }
   if (3.79 <= register_nwJ) {
       let s_centerk = String.fromCharCode(108,111,111,112,105,110,103,95,99,95,51,55,0);
      do {
         s_centerk += `${s_centerk.length}`;
         if (s_centerk == String.fromCharCode(109,104,113,117,105,0)) {
            break;
         }
      } while ((!s_centerk.includes(s_centerk)) && (s_centerk == String.fromCharCode(109,104,113,117,105,0)));
       let goale = String.fromCharCode(120,95,50,49,95,97,117,103,109,101,110,116,0);
       let icono = String.fromCharCode(102,108,111,111,100,95,100,95,49,54,0);
         goale += `${goale.length}`;
      indexD.push(parseInt(`${register_nwJ}`) ^ iconk.length);
   }
   for (let g = 0; g < 1; g++) {
       let combinel = String.fromCharCode(119,95,49,53,95,111,102,102,0);
       let register_ru = 4.0;
       let promotionK = 1.0;
         combinel += `${combinel.length - 3}`;
       let layoutU = String.fromCharCode(112,114,111,100,117,99,116,115,95,117,95,50,49,0);
       let searchn = String.fromCharCode(114,95,49,48,95,113,117,101,117,101,0);
      register_nwJ += combinel.length - 3;
   }

  };
  return (
    <Animated.View
      style={[
        styles.bottom,
        {
          opacity: opacityAni,
          marginBottom: marginBottom,
        },
      ]}>
      <ImageBackground
        resizeMode="stretch"
        source={require('../images/icons/policyBall.png')}
        style={[styles.imageBackground]}
        imageStyle={[VideoPlayerstyles.controls.vignette]}>
        { }
        <SafeAreaView style={[styles.bottomControlGroup]}>
          <PlayPause />
          {videoType === VideoLiveType.LIVE && <Refresh />}
          <View style={{flexDirection: 'row', flex: 1, marginLeft: 10}}>
            <RecommendBtn
              display={ShowControlsButtons[videoType][PanelType.Recommend]}
              onPress={onShowRecommend}
            />
            <SwitchSourceBtn
              display={ShowControlsButtons[videoType][PanelType.Switch]}
              onPress={onShowSwitch}
            />
            <StatisticBtn
              display={
                ShowControlsButtons[videoType][PanelType.Stat] && isFullScreen
              }
              onPress={onShowStats}
            />
          </View>
          <View styles={{flex: 1}} />
          {videoType === VideoLiveType.LIVE && Platform.OS === 'ios' ? (
            <CastScreenBtn onPress={onPressCast} />
          ) : null}
          <ToggleFullScreen />
        </SafeAreaView>
      </ImageBackground>
    </Animated.View>
  );
};
