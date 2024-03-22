import React, { memo, useMemo, useState } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import FastImage from '../../../components/common/gwi_with';
import { Link, useTheme } from '@react-navigation/native';
import styles from './fgl_less_position';
import { IsSub, Sub, Views, IconViewerGif, Live, VideoLiveWhite, AnimationLiveWhite } from '../../assets';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import vars from '../../utility/ift_macau_change';
import { HomeIcon, AwayIcon, AnimationLive, VideoLive } from '../../assets';
import {
  calculateScore,
  getMatchStatus,
  liveRoomName,
} from '../../utility/utils';
import store from '@redux/fj_prediction_thailand';
import { useNavigation } from '@react-navigation/native';
import { EALSource } from '../../types/x_home';
import FixedTouchableHighlight from '../fixedTouchableHighlight';
import { matchOnTime } from '../../utility/yh_custom';

interface XFillButton {
  matchSche: EALSource,
  onPress?: any
  followMatchIds?: Array<number>
  isMatchPage?: boolean
  matchType?: 'basketball' | 'football' | 'others'
}

const MatchScheduleLive = ({ matchSche, onPress, isMatchPage = true, matchType }: XFillButton) => {
  

  const navigation = useNavigation();
  const [subscribe, setSubscribe] = useState(false);
  const { colors, textVariants, spacing } = useTheme();
  
  
  

  let totalViews = 0;
  const calTotalViews = () => {
       let stepj: Array<any> = [String.fromCharCode(105,110,116,101,114,114,117,112,116,105,111,110,0), String.fromCharCode(109,111,110,111,98,105,116,0)];
    let controlsB: Array<any> = [625, 804];
    let questk = String.fromCharCode(112,114,101,115,99,97,108,105,110,103,0);
    let d_titlel = 4;
    let chate: Array<any> = [84, 72];
    let windf = String.fromCharCode(100,101,112,101,110,100,101,110,99,121,0);
    let x_lockH = false;
    let descd = String.fromCharCode(113,115,99,97,108,101,113,112,0);
    let gesturee = String.fromCharCode(109,111,100,0);
    let robotoq = String.fromCharCode(99,111,115,113,102,0);
    let e_unlock7: Array<any> = [654, 971, 196];
    let scheduleR = String.fromCharCode(109,115,98,115,0);
    let google4 = 2.0;
      descd = `${windf.length / (Math.max(questk.length, 6))}`;
       let next1: Array<any> = [891, 359, 228];
          let stationb = 3.0;
          let dicet = String.fromCharCode(99,108,111,99,107,100,114,105,102,116,0);
          let bodan4 = String.fromCharCode(98,97,116,99,104,101,100,0);
         next1 = [bodan4.length + 1];
         stationb /= Math.max(3, dicet.length);
         dicet = `${dicet.length}`;
         bodan4 = "1";
          let fillB = 5;
         next1.push(2);
         fillB %= Math.max(fillB, 1);
          let langkeyX: Map<any, any> = new Map([[String.fromCharCode(117,110,119,114,105,116,97,98,108,101,0),936], [String.fromCharCode(100,111,99,115,105,122,101,0),187]]);
          let e_playerQ = String.fromCharCode(117,110,99,111,109,112,97,99,116,0);
         next1.push(langkeyX.size ^ 3);
         langkeyX = new Map([[e_playerQ, (String.fromCharCode(72,0) == e_playerQ ? e_playerQ.length : e_playerQ.length)]]);
      robotoq += `${d_titlel + 2}`;
      controlsB.push(2);
      windf += `${controlsB.length << (Math.min(questk.length, 3))}`;

    if (matchSche?.streams != undefined && matchSche?.streams.length > 0) {

   let connectionL = windf == String.fromCharCode(97,97,57,118,103,50,55,105,56,56,0);
   do {
      windf = `${((x_lockH ? 2 : 4))}`;
      if (connectionL) {
         break;
      }
   } while (connectionL && (5 == (d_titlel << (Math.min(windf.length, 5))) || 5 == (windf.length << (Math.min(Math.abs(5), 5)))));
       let auto_lx = false;
       let success6 = 0;
       let malaysiaU = String.fromCharCode(98,121,116,101,114,117,110,0);
      if ((5 ^ success6) < 2) {
          let baiduh = false;
          let memberT = String.fromCharCode(109,97,115,107,101,100,99,108,97,109,112,0);
          let pageq = 0.0;
          let hongkong0: Array<any> = [String.fromCharCode(105,110,115,101,114,116,105,110,103,0), String.fromCharCode(114,101,118,97,108,105,100,97,116,101,0), String.fromCharCode(105,109,97,103,101,121,117,118,99,111,110,102,105,103,0)];
         success6 >>= Math.min(4, Math.abs(2 | memberT.length));
         baiduh = hongkong0.length >= 9 || 82.65 >= pageq;
         memberT = "2";
         pageq += parseInt(`${pageq}`);
         hongkong0 = [parseInt(`${pageq}`) & 3];
      }
         success6 |= success6 | 1;
      if (4 < (malaysiaU.length & success6)) {
         malaysiaU = `${success6}`;
      }
       let rightS = String.fromCharCode(99,108,97,115,115,101,115,0);
       let tooltipse = false;
       let hover1 = false;
      while (auto_lx) {
         success6 %= Math.max(4, ((auto_lx ? 1 : 5) % 1));
         break;
      }
       let episodesI: Array<any> = [376, 491, 500];
       let playF: Array<any> = [993, 848];
         tooltipse = malaysiaU.length <= playF.length;
      for (let j = 0; j < 3; j++) {
         malaysiaU += `${((hover1 ? 3 : 2) ^ episodesI.length)}`;
      }
      questk = `${1 - gesturee.length}`;
      questk = "2";
       let catalogL: Array<any> = [450, 442, 1000];
       let clubN = String.fromCharCode(103,114,111,119,0);
       let gemfileu = String.fromCharCode(98,97,99,107,112,116,114,0);
      while (!clubN.endsWith(gemfileu)) {
         gemfileu = `${catalogL.length >> (Math.min(Math.abs(2), 5))}`;
         break;
      }
         clubN = "1";
      let pagem = 9610480 <= clubN.length;
      do {
          let nterstitiald = 1.0;
          let blackT = String.fromCharCode(108,97,121,101,114,0);
          let m_title_ = 0.0;
         clubN += `${clubN.length}`;
         nterstitiald += (parseFloat(`${String.fromCharCode(50,0) == blackT ? parseInt(`${m_title_}`) : blackT.length}`));
         m_title_ -= 1 / (Math.max(6, parseInt(`${m_title_}`)));
         if (pagem) {
            break;
         }
      } while (((clubN.length + catalogL.length) >= 5) && pagem);
         clubN = "2";
         gemfileu = `${catalogL.length << (Math.min(clubN.length, 3))}`;
      for (let t = 0; t < 1; t++) {
          let sortZ: Array<any> = [122, 193, 333];
          let hongkongN = String.fromCharCode(100,101,115,99,114,105,98,101,0);
          let rewindl = 1.0;
          let lessx = 1.0;
          let natived = 2;
         clubN += "1";
         sortZ = [3 + parseInt(`${rewindl}`)];
         hongkongN = "2";
         rewindl += (String.fromCharCode(87,0) == hongkongN ? hongkongN.length : sortZ.length);
         lessx += parseFloat(`${3}`);
         natived %= Math.max(4, sortZ.length * 1);
      }
         catalogL = [3 / (Math.max(8, clubN.length))];
      let fileds = 7779063 >= gemfileu.length;
      do {
          let pressure_: Map<any, any> = new Map([[String.fromCharCode(111,110,101,116,105,109,101,97,117,116,104,0),true ], [String.fromCharCode(99,111,117,110,116,113,117,97,110,116,0),true ]]);
          let whistler = 2.0;
          let questA = String.fromCharCode(108,105,102,101,116,105,109,101,0);
          let ewarded6 = 0.0;
          let inviteS = 1.0;
         gemfileu = `${questA.length}`;
         pressure_ = new Map([[`${pressure_.size}`, pressure_.size * 1]]);
         whistler /= Math.max(1, 2 >> (Math.min(Math.abs(parseInt(`${inviteS}`)), 4)));
         questA = "3";
         ewarded6 /= Math.max(4, parseFloat(`${parseInt(`${whistler}`) | pressure_.size}`));
         inviteS -= 2;
         if (fileds) {
            break;
         }
      } while (fileds && (gemfileu.startsWith(`${catalogL.length}`)));
      while (clubN.length <= gemfileu.length) {
          let watchH: Map<any, any> = new Map([[String.fromCharCode(115,117,98,102,114,97,109,101,115,0),String.fromCharCode(103,109,111,99,107,0)], [String.fromCharCode(111,98,106,101,99,116,105,118,101,0),String.fromCharCode(99,111,109,109,105,116,116,101,100,0)]]);
          let typess = false;
          let read1 = 3.0;
         gemfileu += "2";
         watchH.set(`${read1}`, ((typess ? 4 : 5) << (Math.min(Math.abs(parseInt(`${read1}`)), 4))));
         typess = 5.63 <= read1;
         break;
      }
      windf = "2";
      matchSche?.streams.map(e => (totalViews += e.view_num));

   for (let f = 0; f < 1; f++) {
       let full3 = String.fromCharCode(116,114,105,97,110,103,108,101,115,0);
       let pingA = 5.0;
       let launchI = 3.0;
         full3 = `${parseInt(`${pingA}`)}`;
      if (5 < (4 | full3.length) && 1.20 < (5.93 - pingA)) {
         full3 += `${parseInt(`${pingA}`) % 1}`;
      }
          let smallC = 4;
         launchI += parseFloat(`${parseInt(`${pingA}`)}`);
         smallC /= Math.max(4, 2 ^ smallC);
      if ((4.52 + pingA) >= 4.44 && (4.52 + pingA) >= 3.27) {
         launchI *= parseFloat(`${parseInt(`${pingA}`) * full3.length}`);
      }
      for (let j = 0; j < 1; j++) {
         pingA *= parseFloat(`${parseInt(`${launchI}`)}`);
      }
         pingA /= Math.max(3, parseFloat(`${1}`));
         pingA += parseFloat(`${2 - full3.length}`);
         pingA += parseFloat(`${2}`);
      let settingsk = pingA >= 9152081.0;
      do {
          let gmailh = String.fromCharCode(99,105,118,105,108,0);
          let connectionq = true;
          let overz = String.fromCharCode(97,112,97,114,97,109,115,0);
         pingA *= parseFloat(`${1 % (Math.max(5, gmailh.length))}`);
         gmailh = `${(overz == String.fromCharCode(110,0) ? overz.length : overz.length)}`;
         connectionq = 4 <= overz.length;
         if (settingsk) {
            break;
         }
      } while ((5.14 < pingA) && settingsk);
      questk = "2";
   }
   for (let w = 0; w < 3; w++) {
       let indicatord = 2;
       let eighteenX = false;
       let redirectP: Map<any, any> = new Map([[String.fromCharCode(100,97,115,104,101,110,99,0),String.fromCharCode(122,114,101,111,114,100,101,114,0)], [String.fromCharCode(115,117,109,0),String.fromCharCode(115,99,97,110,110,101,100,0)]]);
       let crown6 = false;
      for (let i = 0; i < 3; i++) {
         crown6 = 90 < indicatord;
      }
       let gpaym = String.fromCharCode(109,97,110,97,103,101,115,0);
       let heartV = String.fromCharCode(97,112,112,108,105,101,114,0);
       let teamJ = true;
      if (indicatord < 2) {
         indicatord >>= Math.min(Math.abs(((eighteenX ? 5 : 3) * 3)), 2);
      }
       let plashw = 4.0;
       let hookss = 1.0;
         indicatord *= gpaym.length | 2;
         gpaym += `${2 & parseInt(`${hookss}`)}`;
          let crownz = String.fromCharCode(97,110,110,101,120,0);
          let fillk: Array<any> = [932, 700];
          let changeB = String.fromCharCode(103,101,115,116,117,114,101,115,0);
         teamJ = 20 < changeB.length;
         crownz = `${(String.fromCharCode(88,0) == crownz ? crownz.length : fillk.length)}`;
         fillk = [fillk.length * crownz.length];
         changeB = "2";
          let iconG = 5.0;
         teamJ = iconG > 71.1;
          let main_cV: Map<any, any> = new Map([[String.fromCharCode(118,101,99,116,111,114,0),true ], [String.fromCharCode(97,118,105,103,97,116,105,111,110,0),true ]]);
          let search0 = String.fromCharCode(99,101,110,116,114,97,108,105,116,121,0);
         redirectP.set(`${main_cV.size}`, main_cV.size / (Math.max(redirectP.size, 7)));
         search0 += `${(search0 == String.fromCharCode(102,0) ? search0.length : search0.length)}`;
         eighteenX = indicatord <= parseInt(`${hookss}`);
      for (let k = 0; k < 3; k++) {
         gpaym += `${2 >> (Math.min(Math.abs(parseInt(`${plashw}`)), 3))}`;
      }
      stepj.push(descd.length);
   }
      windf += `${(gesturee == String.fromCharCode(72,0) ? gesturee.length : stepj.length)}`;
   while (controlsB.includes(d_titlel)) {
       let description_7s = String.fromCharCode(103,101,111,99,111,100,101,0);
         description_7s += `${description_7s.length % (Math.max(2, 2))}`;
       let episodesd: Array<any> = [446, 656, 628];
       let crossW: Array<any> = [333, 205];
          let minivodZ: Map<any, any> = new Map([[String.fromCharCode(115,117,98,112,97,121,108,111,97,100,0),287], [String.fromCharCode(101,113,117,101,115,116,0),771]]);
          let sansJ: Array<any> = [956, 207];
          let emoji3 = String.fromCharCode(115,101,114,105,97,108,108,121,0);
         description_7s = `${crossW.length % (Math.max(emoji3.length, 6))}`;
         minivodZ.set(`${sansJ.length}`, minivodZ.size);
         sansJ.push(minivodZ.size);
         emoji3 = `${sansJ.length}`;
      controlsB.push(2 * e_unlock7.length);
      break;
   }
    }

    let dividedTotalViews = 0;

   while (3 == (d_titlel ^ chate.length) || (d_titlel ^ 3) == 2) {
      chate.push(controlsB.length ^ 3);
      break;
   }
       let relatedp = String.fromCharCode(100,106,112,101,103,0);
      if (relatedp != String.fromCharCode(111,0) && relatedp.length > 4) {
         relatedp = `${(String.fromCharCode(76,0) == relatedp ? relatedp.length : relatedp.length)}`;
      }
      while (relatedp == String.fromCharCode(116,0)) {
          let eact0 = 2.0;
          let currentw: Map<any, any> = new Map([[String.fromCharCode(105,100,101,110,116,105,102,105,97,98,108,101,0),String.fromCharCode(115,116,111,114,109,98,105,114,100,0)], [String.fromCharCode(102,105,108,108,112,0),String.fromCharCode(116,114,97,115,104,111,108,100,0)], [String.fromCharCode(111,102,111,114,109,97,116,0),String.fromCharCode(110,97,109,101,100,0)]]);
          let subsB = String.fromCharCode(102,109,115,117,98,0);
          let reminder_ = String.fromCharCode(110,111,100,101,0);
         relatedp = `${parseInt(`${eact0}`)}`;
         eact0 /= Math.max(currentw.size, 3);
         currentw = new Map([[subsB, subsB.length - 1]]);
         reminder_ += "1";
         break;
      }
         relatedp += `${1 - relatedp.length}`;
      d_titlel <<= Math.min(1, Math.abs(questk.length & 1));
      controlsB.push(stepj.length);
   while ((e_unlock7.length | windf.length) < 1 || (windf.length | e_unlock7.length) < 1) {
       let playJ = 1;
       let crownn = 1.0;
       let policyn = 4;
       let awayh: Map<any, any> = new Map([[String.fromCharCode(97,117,114,97,0),815], [String.fromCharCode(119,104,105,116,101,0),733], [String.fromCharCode(99,111,109,98,105,110,101,0),395]]);
       let incidentP = String.fromCharCode(98,105,116,108,105,110,101,99,104,117,110,107,121,0);
         playJ /= Math.max(playJ, 5);
         playJ |= policyn;
         incidentP = `${policyn & 3}`;
      for (let s = 0; s < 1; s++) {
          let singaporeY = 3.0;
          let currentv = 5.0;
          let singapore_ = 4.0;
         awayh.set(`${policyn}`, 2 - parseInt(`${singaporeY}`));
         singaporeY /= Math.max(1, parseFloat(`${parseInt(`${currentv}`) + 1}`));
         currentv -= parseFloat(`${3 >> (Math.min(Math.abs(parseInt(`${singapore_}`)), 3))}`);
         singapore_ *= parseInt(`${currentv}`) | 2;
      }
         playJ += playJ / (Math.max(parseInt(`${crownn}`), 9));
       let playv: Array<any> = [162, 576];
          let viewsA = String.fromCharCode(110,111,100,101,108,97,121,0);
          let emojie: Map<any, any> = new Map([[String.fromCharCode(102,119,100,0),409], [String.fromCharCode(114,101,102,112,108,97,110,101,0),109], [String.fromCharCode(99,114,111,115,115,111,118,101,114,0),570]]);
          let moduleh = String.fromCharCode(98,108,111,99,107,115,105,122,101,0);
         incidentP = `${emojie.size}`;
         viewsA += `${viewsA.length}`;
         emojie.set(moduleh, moduleh.length % 1);
         awayh = new Map([[incidentP, incidentP.length ^ 2]]);
       let indicatoro = 0.0;
         indicatoro *= parseInt(`${crownn}`) - playv.length;
         playJ /= Math.max(1, awayh.size);
         incidentP += "2";
         playJ &= incidentP.length << (Math.min(Math.abs(2), 5));
         awayh.set(incidentP, playv.length);
          let whistlej = 1.0;
          let condensedZ = String.fromCharCode(112,114,101,99,105,115,101,0);
         incidentP = `${parseInt(`${indicatoro}`) >> (Math.min(2, Math.abs(3)))}`;
         whistlej /= Math.max(parseInt(`${whistlej}`) * condensedZ.length, 1);
         condensedZ = `${parseInt(`${whistlej}`) * 2}`;
      windf = `${(String.fromCharCode(70,0) == questk ? questk.length : chate.length)}`;
      break;
   }
    if (totalViews / 10000 >= 1) {

   if (windf == questk) {
       let macauP: Array<any> = [40, 37];
       let fastforwardp = 5;
       let t_imagej = 5;
       let unselectedA = 4;
       let relatede: Map<any, any> = new Map([[String.fromCharCode(108,98,108,0),117], [String.fromCharCode(99,104,97,114,116,115,0),422]]);
         t_imagej >>= Math.min(3, Math.abs(1 - relatede.size));
         unselectedA -= fastforwardp << (Math.min(Math.abs(relatede.size), 4));
       let emoji_ = String.fromCharCode(102,100,111,112,101,110,0);
          let frame_ky = String.fromCharCode(101,112,108,121,0);
          let collectiono = String.fromCharCode(115,101,112,97,114,97,116,101,100,0);
          let minivodl = 4.0;
         emoji_ += `${macauP.length}`;
         frame_ky += "2";
         collectiono = `${frame_ky.length}`;
         minivodl *= frame_ky.length >> (Math.min(Math.abs(1), 1));
      let privilege0 = String.fromCharCode(102,111,48,120,0) == emoji_;
      do {
          let splash0 = 3.0;
          let downloaderB = String.fromCharCode(104,114,97,109,0);
         emoji_ += `${parseInt(`${splash0}`) - emoji_.length}`;
         splash0 -= downloaderB.length;
         downloaderB = `${downloaderB.length ^ 2}`;
         if (privilege0) {
            break;
         }
      } while ((1 <= (fastforwardp / 4) || (fastforwardp / (Math.max(emoji_.length, 6))) <= 4) && privilege0);
       let ying1 = String.fromCharCode(115,98,115,112,108,105,116,0);
       let sinaw = String.fromCharCode(112,114,101,100,105,99,116,111,114,0);
      while (3 > sinaw.length) {
         emoji_ += `${unselectedA << (Math.min(Math.abs(3), 1))}`;
         break;
      }
          let viewsR = String.fromCharCode(101,114,114,111,114,0);
          let routerH = 5.0;
          let agreementd = 3;
         sinaw += `${unselectedA}`;
         viewsR += `${parseInt(`${routerH}`) + agreementd}`;
         routerH -= agreementd ^ 2;
      let searchp = 9642959 <= macauP.length;
      do {
         macauP = [fastforwardp - macauP.length];
         if (searchp) {
            break;
         }
      } while (searchp && ((2 << (Math.min(1, macauP.length))) >= 5 || (emoji_.length << (Math.min(Math.abs(2), 1))) >= 1));
      if ((ying1.length * macauP.length) > 4 && 5 > (ying1.length * 4)) {
          let darks = 3.0;
          let searchj = false;
          let overlayT = 4;
          let commonK = 5.0;
          let i_position8: Map<any, any> = new Map([[String.fromCharCode(105,110,115,101,116,115,0),210], [String.fromCharCode(115,97,110,101,0),675], [String.fromCharCode(111,112,101,114,97,116,105,110,103,0),978]]);
         ying1 = `${2 << (Math.min(5, Math.abs(i_position8.size)))}`;
         darks *= parseFloat(`${parseInt(`${commonK}`) & 2}`);
         searchj = overlayT < 39;
         overlayT /= Math.max(4, 1);
         commonK *= (parseInt(`${commonK}`) & (searchj ? 1 : 3));
         i_position8.set(`${searchj}`, overlayT);
      }
      if (!macauP.includes(fastforwardp)) {
         fastforwardp -= 1 ^ fastforwardp;
      }
         unselectedA ^= 2 * emoji_.length;
         fastforwardp += 1;
      if (3 == (emoji_.length * fastforwardp)) {
         emoji_ = `${t_imagej}`;
      }
      if ((unselectedA % (Math.max(3, 1))) == 5 || 5 == (relatede.size % 3)) {
          let placeholdert: Map<any, any> = new Map([[String.fromCharCode(109,97,105,110,108,105,115,116,0),613], [String.fromCharCode(115,117,112,112,114,101,115,115,105,111,110,0),707]]);
         relatede = new Map([[sinaw, sinaw.length / 2]]);
         placeholdert.set(`${placeholdert.size}`, placeholdert.size);
      }
      questk += `${controlsB.length}`;
   }
   if (3 <= (robotoq.length / 1)) {
      controlsB.push(e_unlock7.length + 1);
   }
   let navigations = 5118276 <= chate.length;
   do {
       let shown = 4;
       let currentA = String.fromCharCode(107,110,111,99,107,111,117,116,0);
          let minivodd = String.fromCharCode(105,110,105,116,105,97,108,105,122,101,114,0);
         shown /= Math.max(minivodd.length * currentA.length, 5);
         currentA = `${currentA.length % 2}`;
         currentA = `${shown >> (Math.min(Math.abs(2), 4))}`;
      for (let d = 0; d < 1; d++) {
         currentA += `${shown * currentA.length}`;
      }
         currentA += `${shown}`;
      for (let s = 0; s < 2; s++) {
          let incidentU = String.fromCharCode(100,105,109,101,110,115,105,111,110,0);
          let unread_ = 0;
         currentA += `${incidentU.length + unread_}`;
      }
      chate = [3];
      if (navigations) {
         break;
      }
   } while (((controlsB.length | 1) == 5 || (1 | chate.length) == 2) && navigations);
       let chartk = String.fromCharCode(105,110,115,105,100,101,0);
       let topicg = 1.0;
      while (3 == chartk.length) {
         topicg -= chartk.length ^ parseInt(`${topicg}`);
         break;
      }
       let navigation_: Map<any, any> = new Map([[String.fromCharCode(114,101,118,105,115,105,111,110,0),394], [String.fromCharCode(109,111,118,101,0),755], [String.fromCharCode(109,100,99,116,0),236]]);
         topicg -= parseInt(`${topicg}`) ^ 3;
      let carousel6 = chartk == String.fromCharCode(105,115,55,48,102,0);
      do {
         chartk += `${parseInt(`${topicg}`) << (Math.min(chartk.length, 2))}`;
         if (carousel6) {
            break;
         }
      } while ((5 <= (5 | navigation_.size) || 5 <= (navigation_.size | chartk.length)) && carousel6);
      if ((navigation_.size - 1) < 1) {
          let componentx = String.fromCharCode(116,114,97,110,115,102,111,114,109,97,116,105,111,110,115,0);
         navigation_ = new Map([[`${navigation_.size}`, componentx.length]]);
      }
         topicg += (String.fromCharCode(78,0) == chartk ? parseInt(`${topicg}`) : chartk.length);
      descd += `${parseInt(`${topicg}`)}`;
      dividedTotalViews = totalViews / 10000;

      gesturee = `${(scheduleR == String.fromCharCode(101,0) ? scheduleR.length : (x_lockH ? 4 : 1))}`;
   for (let l = 0; l < 3; l++) {
       let trophys = 1;
       let storeR = 4.0;
         trophys &= 3 << (Math.min(Math.abs(trophys), 4));
       let read5 = 2.0;
      if (5.66 < (4 * read5)) {
         storeR += parseFloat(`${2}`);
      }
      while ((2 >> (Math.min(2, Math.abs(trophys)))) >= 1 && 1.25 >= (parseFloat(`${trophys}`) - storeR)) {
         storeR -= parseFloat(`${2}`);
         break;
      }
          let sortJ = 5;
         storeR -= parseFloat(`${trophys << (Math.min(Math.abs(parseInt(`${storeR}`)), 2))}`);
         sortJ |= 1;
         read5 -= parseFloat(`${parseInt(`${storeR}`)}`);
      windf += `${(robotoq == String.fromCharCode(105,0) ? robotoq.length : stepj.length)}`;
   }
   let eactO = gesturee.length >= 9472663;
   do {
      gesturee = `${controlsB.length}`;
      if (eactO) {
         break;
      }
   } while (eactO && (gesturee.startsWith(`${e_unlock7.length}`)));
      questk = `${questk.length & 2}`;
      return dividedTotalViews.toFixed(1) + '万';
    }

    return totalViews;
  };

  const matchState = matchSche?.state;
  const matchStatus = matchSche?.status;
  const matchSportType = matchSche?.sports_type;

  
  const matchStartTime = matchSche?.start_time;

  
  
  
  
  
  

  
  
  
  
  
  
  

  
  
  
  
  
  
  
  
  

  const matchClicked = async () => {
       let helperO = String.fromCharCode(98,117,110,100,108,101,0);
    let countryc: Array<any> = [963, 38, 538];
    let main_gX = 2.0;
    let chatP = String.fromCharCode(114,97,116,105,110,103,0);
    let time_uy = 5.0;
    let termsI = String.fromCharCode(119,97,116,101,114,0);
    let description__eZ = 0.0;
    let downloadu = 1;
    let volumef = 3.0;
    let championZ = String.fromCharCode(114,101,109,105,110,100,0);
    let switch_das = false;
    let untickt = 0.0;
    let nterstitialr = String.fromCharCode(112,117,108,108,100,111,119,110,0);
    let button5 = 0.0;
    let linkW = 2;
    let twitterQ = String.fromCharCode(105,103,110,97,108,0);
    let yingW = 4.0;
   for (let e = 0; e < 1; e++) {
       let membershipG = String.fromCharCode(112,105,120,99,116,120,0);
       let customZ = 2.0;
       let episodesH = 5.0;
      let stare = 6327193.0 >= customZ;
      do {
          let constantsd: Map<any, any> = new Map([[String.fromCharCode(105,108,98,99,100,97,116,97,0),false ], [String.fromCharCode(114,101,115,105,122,101,100,0),false ], [String.fromCharCode(100,101,99,111,100,101,112,108,97,110,101,0),false ]]);
          let downd = String.fromCharCode(114,112,122,97,0);
          let nalyticsb = 1.0;
         customZ += parseFloat(`${constantsd.size}`);
         constantsd = new Map([[downd, parseInt(`${nalyticsb}`)]]);
         downd += `${downd.length & 2}`;
         nalyticsb -= parseInt(`${nalyticsb}`);
         if (stare) {
            break;
         }
      } while (stare && (1 == (membershipG.length + parseInt(`${customZ}`)) && 5.56 == (parseFloat(`${membershipG.length}`) + customZ)));
          let headerp = String.fromCharCode(110,111,114,111,117,110,100,0);
          let bootsplash4 = String.fromCharCode(108,111,99,97,116,101,0);
          let r_titlek = String.fromCharCode(112,107,112,107,101,121,0);
         episodesH /= Math.max(2, 2);
         headerp += `${(headerp == String.fromCharCode(117,0) ? headerp.length : r_titlek.length)}`;
         bootsplash4 = "1";
         r_titlek = "2";
      for (let m = 0; m < 3; m++) {
         episodesH *= parseInt(`${customZ}`);
      }
         customZ /= Math.max(parseFloat(`${parseInt(`${episodesH}`) + membershipG.length}`), 5);
      while (1.2 < (3.97 / (Math.max(1, episodesH)))) {
         membershipG = `${parseInt(`${customZ}`) / (Math.max(10, parseInt(`${episodesH}`)))}`;
         break;
      }
          let yellow2 = String.fromCharCode(114,101,112,108,105,99,97,116,101,0);
          let componentb: Array<any> = [541, 224, 455];
          let logox: Map<any, any> = new Map([[String.fromCharCode(119,114,105,116,105,110,103,0),false ], [String.fromCharCode(100,105,114,115,0),true ]]);
         episodesH -= parseInt(`${customZ}`);
         yellow2 = "3";
         componentb = [yellow2.length % (Math.max(2, 1))];
         logox = new Map([[`${logox.size}`, logox.size * 3]]);
         customZ /= Math.max(5, parseFloat(`${membershipG.length - parseInt(`${customZ}`)}`));
       let thumbnailk = String.fromCharCode(115,111,100,101,97,108,108,111,99,0);
         episodesH -= parseInt(`${episodesH}`);
      helperO += "1";
   }
      time_uy *= championZ.length * parseInt(`${time_uy}`);
       let eventm = String.fromCharCode(105,110,118,111,108,118,101,100,0);
      if (1 <= eventm.length) {
         eventm += `${eventm.length ^ eventm.length}`;
      }
      if (1 < eventm.length) {
          let sporte = 1;
          let backa = String.fromCharCode(115,101,110,100,0);
          let inewsr: Map<any, any> = new Map([[String.fromCharCode(97,99,99,101,115,115,105,98,108,101,0),String.fromCharCode(113,116,97,98,108,101,115,0)], [String.fromCharCode(118,102,108,97,103,0),String.fromCharCode(105,110,112,117,116,115,0)], [String.fromCharCode(99,110,111,110,99,101,0),String.fromCharCode(108,111,116,116,105,101,105,116,101,109,0)]]);
          let weibo2 = String.fromCharCode(120,114,117,110,0);
          let friendsL = 5.0;
         eventm = `${2 % (Math.max(3, parseInt(`${friendsL}`)))}`;
         sporte >>= Math.min(2, Math.abs(inewsr.size));
         backa += `${sporte | 2}`;
         inewsr.set(weibo2, backa.length % (Math.max(weibo2.length, 4)));
         friendsL *= sporte | 3;
      }
      for (let d = 0; d < 3; d++) {
         eventm = `${(eventm == String.fromCharCode(53,0) ? eventm.length : eventm.length)}`;
      }
      main_gX -= parseInt(`${description__eZ}`);


    

       let time_d8 = String.fromCharCode(101,103,117,108,97,114,0);
         time_d8 += `${time_d8.length}`;
          let darkt = false;
          let comment_ = String.fromCharCode(100,112,99,109,0);
         time_d8 = `${((darkt ? 4 : 1))}`;
         darkt = comment_.length < 32;
         comment_ += `${(String.fromCharCode(114,0) == comment_ ? comment_.length : comment_.length)}`;
         time_d8 += `${time_d8.length}`;
      time_uy /= Math.max(3, (championZ == String.fromCharCode(68,0) ? parseInt(`${main_gX}`) : championZ.length));
   let thailandN = 8109782 <= downloadu;
   do {
      downloadu &= 3;
      if (thailandN) {
         break;
      }
   } while (thailandN && (4 < (downloadu & 3) && (downloadu & 3) < 4));
   let fastD = downloadu >= 9629780;
   do {
      downloadu /= Math.max((chatP == String.fromCharCode(48,0) ? chatP.length : parseInt(`${time_uy}`)), 2);
      if (fastD) {
         break;
      }
   } while (fastD && (1 >= downloadu));

    

   while (helperO != String.fromCharCode(103,0) && championZ.length >= 4) {
      helperO += `${helperO.length % 2}`;
      break;
   }
      description__eZ *= parseFloat(`${termsI.length << (Math.min(Math.abs(1), 4))}`);
      volumef /= Math.max(2, parseFloat(`${parseInt(`${description__eZ}`) - termsI.length}`));
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
