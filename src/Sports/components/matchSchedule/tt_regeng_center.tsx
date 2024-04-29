import React, {memo, useState} from 'react';
import {View, Text, ImageBackground} from 'react-native';
import FastImage from '../../../components/common/tt_connection';
import {useTheme} from '@react-navigation/native';
import styles from './tt_with_success';
import {IconViewerGif} from '../../assets';
import {TouchableOpacity} from 'react-native';
import {HomeIcon, AwayIcon, AnimationLive, VideoLive} from '../../assets';
import {
  calculateScore,
  getMatchStatus,
  liveRoomName,
} from '../../utility/utils';
import store, {ttOrange} from '@redux/tt_updates_bottom';
import {useNavigation} from '@react-navigation/native';
import {ttAway} from '../../types/tt_zhubo';
import BecomeVipOverlay from '../../../components/modal/tt_type';
import {useAppSelector, useSelector} from '@hooks/tt_spec_download';
import {showBecomeVip} from '@redux/actions/tt_copy_heji';
import {useDispatch} from 'react-redux';
import {screenModel} from '@type/tt_twitter_data';
import tt_humidity_guide from '../../../../Umeng/tt_humidity_guide';

interface ttSmall {
  matchSche: ttAway;
  onPress?: () => any;
  followMatchIds?: Array<number>;
  isMatchPage?: boolean;
  setShowBecomeVIPOverlay: any;
  bgDark?: boolean;
}

const MatchSchedule = ({
  matchSche,
  onPress = () => {
       let short_bk = 1;
    let sport2 = String.fromCharCode(121,117,118,112,97,99,107,101,100,95,106,95,51,55,0);
    let thumbnailf = false;
    let countryQ = String.fromCharCode(121,95,54,95,111,112,99,111,100,101,115,0);
    let sport9 = String.fromCharCode(114,101,106,101,99,116,95,113,95,54,52,0);
    let transfer6 = String.fromCharCode(105,110,102,111,108,100,101,114,95,53,95,53,0);
    let hoverN = String.fromCharCode(101,95,49,54,95,119,101,98,112,0);
    let firebasea = String.fromCharCode(115,111,97,108,108,111,99,95,115,95,56,54,0);
    let homeI = String.fromCharCode(115,109,115,95,119,95,53,55,0);
    let minimize2 = 4;
    let rank9 = 5.0;
    let indexS = 4;
    let info0: Array<any> = [969, 175];
    let floaterj = false;
    let firebaseC = String.fromCharCode(118,95,51,95,101,110,118,0);
    let mintegrala = String.fromCharCode(99,117,118,105,100,95,118,95,50,0);
    let mutedY = 1.0;
   let buttonq = rank9 <= 5724896.0;
   do {
       let context8 = 3.0;
       let playercommonn = 3.0;
       let forwardO = String.fromCharCode(104,119,99,111,110,116,101,120,116,95,102,95,50,53,0);
       let settings5 = String.fromCharCode(109,95,56,51,95,101,110,117,109,101,114,97,116,111,114,0);
      if (settings5 != String.fromCharCode(55,0)) {
         forwardO += "2";
      }
      let short_st = String.fromCharCode(100,48,117,109,120,0) == forwardO;
      do {
         forwardO = `${forwardO.length}`;
         if (short_st) {
            break;
         }
      } while ((settings5 == String.fromCharCode(102,0)) && short_st);
         context8 -= parseFloat(`${forwardO.length}`);
         context8 /= Math.max(1, parseFloat(`${parseInt(`${playercommonn}`) ^ 3}`));
         playercommonn *= (parseFloat(`${String.fromCharCode(83,0) == settings5 ? settings5.length : parseInt(`${playercommonn}`)}`));
       let activityb = 5.0;
          let path8 = true;
          let eighteenS = true;
          let castingu: Map<any, any> = new Map([[String.fromCharCode(120,95,53,57,95,121,114,121,105,0),String.fromCharCode(120,118,109,99,95,57,95,53,55,0)], [String.fromCharCode(115,105,110,101,119,105,110,95,109,95,50,56,0),String.fromCharCode(106,95,52,48,0)], [String.fromCharCode(104,95,51,49,95,100,105,118,105,100,111,114,0),String.fromCharCode(107,95,57,54,95,114,97,116,105,111,0)]]);
         context8 += parseFloat(`${settings5.length}`);
         path8 = castingu.size == 43 && !eighteenS;
         eighteenS = castingu.size == 21;
         context8 *= parseFloat(`${forwardO.length}`);
      rank9 /= Math.max(1, 2 >> (Math.min(4, sport9.length)));
      if (buttonq) {
         break;
      }
   } while (buttonq && (!sport2.startsWith(`${rank9}`)));
   while (1 > (short_bk - 5)) {
       let toponj: Map<any, any> = new Map([[String.fromCharCode(108,111,97,100,120,95,52,95,53,57,0),114], [String.fromCharCode(117,95,56,95,108,105,109,105,116,97,116,105,111,110,0),388], [String.fromCharCode(114,95,54,51,95,117,95,55,48,0),924]]);
       let dangere = String.fromCharCode(103,117,116,116,101,114,95,104,95,51,51,0);
          let gradlem = 0.0;
          let moviesr: Array<any> = [356, 209, 600];
         dangere += `${dangere.length}`;
         gradlem *= parseFloat(`${moviesr.length}`);
         moviesr = [parseInt(`${gradlem}`)];
      if (3 >= (toponj.size << (Math.min(dangere.length, 2))) || (dangere.length << (Math.min(Math.abs(3), 4))) >= 3) {
         toponj.set(`${dangere}`, 2);
      }
       let inactiveE: Array<any> = [604, 692, 255];
       let gmail0: Array<any> = [285, 185];
      let fieldG = 9705500 >= gmail0.length;
      do {
          let photos = 2.0;
         gmail0.push(2);
         photos -= 3;
         if (fieldG) {
            break;
         }
      } while (fieldG && ((gmail0.length % (Math.max(10, inactiveE.length))) < 2 || 2 < (inactiveE.length % 2)));
      let memberS = inactiveE.length <= 4973275;
      do {
          let middlewarek = false;
          let viewerx = false;
         inactiveE.push(((viewerx ? 3 : 5)));
         if (memberS) {
            break;
         }
      } while (((inactiveE.length >> (Math.min(Math.abs(3), 2))) <= 1 && 3 <= (gmail0.length >> (Math.min(4, inactiveE.length)))) && memberS);
      if (2 == (5 & dangere.length) || (gmail0.length & 5) == 3) {
         dangere += `${(String.fromCharCode(90,0) == dangere ? gmail0.length : dangere.length)}`;
      }
      thumbnailf = !thumbnailf;
      break;
   }
   if (countryQ == String.fromCharCode(116,0)) {
      homeI = `${((thumbnailf ? 1 : 2) * 2)}`;
   }
   if (5 > (1 >> (Math.min(3, Math.abs(indexS)))) && 5 > (indexS - 1)) {
       let pointO = String.fromCharCode(109,111,118,105,110,103,95,110,95,50,55,0);
       let basketballW = String.fromCharCode(116,114,97,105,108,105,110,103,95,121,95,57,52,0);
       let clockE = 4.0;
      while (pointO != String.fromCharCode(115,0) || basketballW != String.fromCharCode(67,0)) {
         basketballW = `${parseInt(`${clockE}`)}`;
         break;
      }
      let link2 = 5405851 <= basketballW.length;
      do {
          let completeW = true;
         basketballW += `${basketballW.length << (Math.min(Math.abs(2), 2))}`;
         completeW = !completeW;
         if (link2) {
            break;
         }
      } while (link2 && (!basketballW.includes(`${clockE}`)));
         pointO += `${(String.fromCharCode(48,0) == basketballW ? basketballW.length : pointO.length)}`;
          let time_cV: Map<any, any> = new Map([[String.fromCharCode(103,95,55,55,95,115,98,99,100,101,99,0),String.fromCharCode(100,101,99,108,105,110,101,95,48,95,54,53,0)], [String.fromCharCode(105,115,110,97,110,95,48,95,51,54,0),String.fromCharCode(105,110,118,116,114,97,110,115,95,120,95,53,57,0)], [String.fromCharCode(109,100,97,121,95,112,95,54,55,0),String.fromCharCode(114,101,105,110,105,116,95,57,95,51,55,0)]]);
          let injuryk = false;
          let phoneG = String.fromCharCode(111,95,49,54,95,111,115,116,114,105,110,103,115,116,114,101,97,109,0);
         clockE -= parseFloat(`${time_cV.size}`);
         time_cV = new Map([[phoneG, (phoneG == String.fromCharCode(109,0) ? phoneG.length : phoneG.length)]]);
         injuryk = String.fromCharCode(75,0) == phoneG;
      for (let q = 0; q < 3; q++) {
          let mbbidf: Array<any> = [341, 104];
         basketballW = "2";
         mbbidf.push(mbbidf.length & 3);
      }
         basketballW += `${basketballW.length}`;
      while (clockE > 4.57) {
         clockE -= parseFloat(`${basketballW.length}`);
         break;
      }
         clockE += (parseFloat(`${pointO == String.fromCharCode(53,0) ? parseInt(`${clockE}`) : pointO.length}`));
      while ((3 - basketballW.length) > 1 || 2.49 > (clockE + parseFloat(`${basketballW.length}`))) {
         basketballW = `${pointO.length}`;
         break;
      }
      rank9 *= short_bk | parseInt(`${rank9}`);
   }
       let bootsplashh: Array<any> = [729, 325];
       let animation9 = String.fromCharCode(118,95,52,54,95,98,108,97,107,101,115,0);
       let aboutg = String.fromCharCode(100,110,115,110,97,109,101,95,57,95,55,48,0);
      for (let z = 0; z < 2; z++) {
          let downloadingF = String.fromCharCode(99,114,111,119,100,105,110,95,113,95,50,53,0);
          let type_odj: Array<any> = [124, 7];
          let targetr = 3.0;
          let time_i9: Array<any> = [21, 466];
          let mnewinterstitial0 = false;
         animation9 = `${aboutg.length >> (Math.min(Math.abs(1), 2))}`;
         downloadingF += `${(3 & (mnewinterstitial0 ? 2 : 4))}`;
         type_odj.push(time_i9.length);
         targetr -= parseFloat(`${2}`);
         time_i9.push(2 << (Math.min(4, type_odj.length)));
      }
         bootsplashh.push(bootsplashh.length / (Math.max(animation9.length, 10)));
          let invite5 = 5;
          let zoomX = String.fromCharCode(109,118,99,111,117,110,116,95,107,95,53,50,0);
         aboutg = `${aboutg.length ^ 2}`;
         invite5 %= Math.max(2, 2);
         zoomX = `${invite5 << (Math.min(Math.abs(3), 1))}`;
      for (let u = 0; u < 2; u++) {
          let mnewsQ = true;
          let downloadingf = false;
          let bellA = false;
          let calendarr = String.fromCharCode(111,102,102,101,114,115,95,108,95,50,56,0);
          let hejio = 3.0;
         animation9 += `${animation9.length}`;
         mnewsQ = calendarr.startsWith(`${downloadingf}`);
         downloadingf = 13.29 >= hejio;
         bellA = downloadingf;
         calendarr += `${parseInt(`${hejio}`) % 3}`;
      }
         aboutg += `${bootsplashh.length / (Math.max(aboutg.length, 4))}`;
      while (aboutg == String.fromCharCode(55,0)) {
         animation9 += `${3 | aboutg.length}`;
         break;
      }
         bootsplashh.push(aboutg.length - 1);
      if ((bootsplashh.length + 4) == 5) {
         animation9 = `${3 & animation9.length}`;
      }
      for (let j = 0; j < 1; j++) {
          let contextI = true;
         bootsplashh = [(String.fromCharCode(75,0) == aboutg ? aboutg.length : bootsplashh.length)];
         contextI = (!contextI ? !contextI : !contextI);
      }
      indexS &= sport2.length / (Math.max(2, 1));
   let step2 = short_bk <= 6182625;
   do {
       let interstitialn = 1;
       let orientation9 = 4;
       let androidW = 1;
      let reactI = 9779629 >= androidW;
      do {
         androidW >>= Math.min(2, Math.abs(orientation9 % (Math.max(2, 2))));
         if (reactI) {
            break;
         }
      } while ((androidW > interstitialn) && reactI);
         interstitialn *= 3 - orientation9;
      while ((interstitialn >> (Math.min(4, Math.abs(orientation9)))) >= 1 && 5 >= (interstitialn >> (Math.min(Math.abs(1), 5)))) {
         interstitialn ^= 1;
         break;
      }
         androidW <<= Math.min(Math.abs(1), 2);
          let incidentU = String.fromCharCode(103,114,101,101,100,121,95,57,95,49,54,0);
          let brightnessE = String.fromCharCode(99,111,110,116,114,97,99,116,115,95,53,95,56,51,0);
          let gpay3: Array<any> = [416, 319, 370];
         orientation9 <<= Math.min(Math.abs(orientation9 % (Math.max(androidW, 7))), 4);
         incidentU = `${2 * incidentU.length}`;
         brightnessE = `${brightnessE.length}`;
         gpay3 = [(String.fromCharCode(52,0) == brightnessE ? brightnessE.length : gpay3.length)];
      let invitey = 8887264 >= orientation9;
      do {
         orientation9 /= Math.max(2, interstitialn - androidW);
         if (invitey) {
            break;
         }
      } while ((4 < (4 ^ androidW) && 4 < (orientation9 ^ 4)) && invitey);
         orientation9 >>= Math.min(1, Math.abs(2));
         interstitialn ^= 1;
         interstitialn &= androidW + 2;
      short_bk %= Math.max(3, sport9.length - countryQ.length);
      if (step2) {
         break;
      }
   } while (((countryQ.length / 3) <= 3) && step2);
   let fieldr = homeI == String.fromCharCode(115,115,113,0);
   do {
       let cross6 = 4;
       let disconnectedC = true;
       let analyticT = String.fromCharCode(109,98,101,100,103,101,95,104,95,50,50,0);
       let animationX: Array<any> = [565, 762];
      while (analyticT.startsWith(`${animationX.length}`)) {
         analyticT = "1";
         break;
      }
         disconnectedC = animationX.includes(disconnectedC);
         analyticT = `${2 >> (Math.min(Math.abs(cross6), 2))}`;
      while ((cross6 / (Math.max(7, animationX.length))) >= 1 || (animationX.length / 1) >= 3) {
         cross6 &= 1 >> (Math.min(Math.abs(cross6), 3));
         break;
      }
      if (5 >= analyticT.length) {
         disconnectedC = 32 >= cross6;
      }
       let traminiv = String.fromCharCode(105,110,116,101,114,114,117,112,116,95,111,95,50,52,0);
         cross6 /= Math.max(5, 3 * analyticT.length);
      if (traminiv.length <= 4) {
         cross6 += (String.fromCharCode(87,0) == traminiv ? analyticT.length : traminiv.length);
      }
         animationX.push(cross6);
         analyticT = `${animationX.length}`;
         traminiv = `${traminiv.length}`;
         disconnectedC = !disconnectedC;
      homeI = `${cross6 * sport2.length}`;
      if (fieldr) {
         break;
      }
   } while ((sport9 == String.fromCharCode(81,0)) && fieldr);
   for (let a = 0; a < 3; a++) {
      rank9 *= ((thumbnailf ? 2 : 4) ^ 2);
   }
      minimize2 >>= Math.min(2, homeI.length);
      hoverN += `${indexS % (Math.max(9, countryQ.length))}`;
       let philippinesS = false;
      for (let w = 0; w < 3; w++) {
          let unread6 = false;
         philippinesS = (!philippinesS ? !unread6 : philippinesS);
      }
         philippinesS = !philippinesS || !philippinesS;
      while (philippinesS) {
          let updatesT: Map<any, any> = new Map([[String.fromCharCode(112,97,114,99,111,114,95,99,95,57,53,0),913], [String.fromCharCode(112,97,103,101,115,101,101,107,95,112,95,49,48,48,0),876], [String.fromCharCode(99,95,54,52,95,99,111,109,112,105,108,101,111,112,116,105,111,110,117,115,101,100,0),105]]);
          let inactiveZ = 0;
          let robotoo: Map<any, any> = new Map([[String.fromCharCode(109,95,49,57,95,115,116,115,122,0),841], [String.fromCharCode(110,95,52,53,95,98,99,100,117,105,110,116,0),372], [String.fromCharCode(105,101,101,101,95,111,95,51,53,0),652]]);
          let constantsp = String.fromCharCode(112,114,101,118,95,100,95,56,0);
          let mimoI = 2.0;
         philippinesS = 22 >= (mimoI * inactiveZ);
         updatesT = new Map([[`${robotoo.size}`, 2 & constantsp.length]]);
         inactiveZ <<= Math.min(5, Math.abs(constantsp.length * robotoo.size));
         mimoI += parseFloat(`${robotoo.size | 3}`);
         break;
      }
      sport2 = `${sport2.length << (Math.min(Math.abs(3), 1))}`;
   let success2 = 8962285 <= minimize2;
   do {
      minimize2 += 3 + info0.length;
      if (success2) {
         break;
      }
   } while (success2 && ((minimize2 + short_bk) <= 1));
      countryQ += `${2 >> (Math.min(2, homeI.length))}`;
       let time_zr4 = String.fromCharCode(104,101,97,114,116,95,114,95,54,51,0);
      let appsx = String.fromCharCode(109,52,57,104,104,0) == time_zr4;
      do {
          let placeholder7 = 4.0;
          let backwardr = false;
          let rank5 = 5;
          let upgrade4 = 1.0;
         time_zr4 = `${rank5}`;
         placeholder7 += (parseFloat(`${parseInt(`${upgrade4}`) | (backwardr ? 4 : 2)}`));
         backwardr = upgrade4 < placeholder7;
         rank5 <<= Math.min(3, Math.abs(parseInt(`${upgrade4}`)));
         if (appsx) {
            break;
         }
      } while ((4 > time_zr4.length) && appsx);
       let lcopy__R = String.fromCharCode(114,95,49,56,95,101,113,117,97,108,115,0);
       let emojiA = String.fromCharCode(101,118,105,99,116,105,111,110,95,105,95,56,54,0);
         time_zr4 += `${time_zr4.length}`;
      hoverN = `${firebasea.length | info0.length}`;
   for (let g = 0; g < 1; g++) {
      minimize2 <<= Math.min(Math.abs(3 | homeI.length), 3);
   }
   let castingj = homeI.length <= 8547248;
   do {
       let alertR = String.fromCharCode(114,103,98,116,101,115,116,95,112,95,50,52,0);
       let button6 = 5.0;
       let datar: Array<any> = [103, 418, 963];
      for (let a = 0; a < 3; a++) {
          let downloadingW = 5;
          let editU = 4.0;
          let windM = 3.0;
          let expiredN = 0.0;
         datar = [parseInt(`${windM}`)];
         downloadingW *= parseInt(`${editU}`);
         editU -= parseFloat(`${2}`);
         expiredN /= Math.max(parseFloat(`${3 >> (Math.min(Math.abs(downloadingW), 3))}`), 5);
      }
      for (let b = 0; b < 2; b++) {
          let dycreatorN = String.fromCharCode(98,95,52,52,95,102,101,116,99,104,101,100,0);
         button6 *= 3;
         dycreatorN += `${(dycreatorN == String.fromCharCode(49,0) ? dycreatorN.length : dycreatorN.length)}`;
      }
          let buttonK: Array<any> = [591, 710];
          let customY = 1.0;
          let photoq = String.fromCharCode(108,101,109,111,110,95,53,95,56,57,0);
         button6 -= 2;
         buttonK.push(parseInt(`${customY}`));
         customY += 1;
         photoq += `${buttonK.length % (Math.max(3, 6))}`;
         alertR = `${datar.length & 2}`;
      if (5 <= (parseInt(`${button6}`) / (Math.max(datar.length, 2))) && (datar.length + 5) <= 5) {
         button6 *= parseInt(`${button6}`) | datar.length;
      }
       let blacks: Map<any, any> = new Map([[String.fromCharCode(111,95,55,53,95,110,105,98,98,108,101,0),418], [String.fromCharCode(110,95,54,57,95,102,114,97,109,101,114,0),136], [String.fromCharCode(100,101,116,101,99,116,105,110,103,95,107,95,54,53,0),686]]);
       let adultI: Map<any, any> = new Map([[String.fromCharCode(98,102,114,97,99,116,105,111,110,95,55,95,55,53,0),219], [String.fromCharCode(120,95,52,48,95,102,108,105,112,112,101,100,0),65], [String.fromCharCode(104,95,49,57,0),691]]);
          let rightz = 2.0;
          let windE = String.fromCharCode(99,111,118,97,108,101,110,116,95,120,95,56,53,0);
         adultI = new Map([[`${button6}`, parseInt(`${button6}`) & 1]]);
         rightz /= Math.max(3, 3);
         windE = `${parseInt(`${rightz}`) | windE.length}`;
          let video6 = 2.0;
          let delegate_9um: Map<any, any> = new Map([[String.fromCharCode(102,95,57,48,95,99,97,108,99,117,97,108,116,101,0),653], [String.fromCharCode(109,95,57,95,108,108,97,117,100,100,115,112,0),893]]);
         blacks = new Map([[`${adultI.size}`, 2]]);
         video6 -= parseFloat(`${delegate_9um.size}`);
         delegate_9um = new Map([[`${delegate_9um.size}`, delegate_9um.size % 3]]);
      if (adultI.get(`${button6}`) != null) {
         button6 /= Math.max(adultI.size - 2, 3);
      }
      homeI = `${sport9.length}`;
      if (castingj) {
         break;
      }
   } while (castingj && (2 < (1 ^ homeI.length) && (homeI.length ^ 1) < 4));
   for (let o = 0; o < 1; o++) {
       let pathZ = 5.0;
         pathZ /= Math.max(parseInt(`${pathZ}`), 2);
       let episoded = String.fromCharCode(109,95,57,54,0);
         pathZ *= parseInt(`${pathZ}`) + episoded.length;
      short_bk >>= Math.min(Math.abs(firebasea.length / (Math.max(6, hoverN.length))), 3);
   }
       let darku = 5.0;
       let modalO = true;
      for (let t = 0; t < 2; t++) {
         modalO = darku >= 77.28;
      }
      let episodes2 = modalO ? !modalO : modalO;
      do {
         modalO = 74.55 <= darku;
         if (episodes2) {
            break;
         }
      } while ((modalO) && episodes2);
         darku /= Math.max((parseInt(`${darku}`) + (modalO ? 5 : 2)), 2);
          let linej = 3;
          let transfer9 = String.fromCharCode(107,95,53,48,95,115,101,103,109,101,110,116,115,0);
         modalO = !modalO;
         linej /= Math.max(1, 4);
         transfer9 = `${transfer9.length}`;
         modalO = !modalO && darku < 49.33;
      for (let u = 0; u < 3; u++) {
          let auto_wmZ: Map<any, any> = new Map([[String.fromCharCode(121,95,57,52,95,98,111,110,100,0),108], [String.fromCharCode(99,95,53,50,95,105,109,112,108,105,99,105,116,101,108,121,0),625], [String.fromCharCode(103,101,116,115,95,50,95,53,53,0),827]]);
         modalO = auto_wmZ.size < 4;
      }
      short_bk >>= Math.min(Math.abs((String.fromCharCode(82,0) == transfer6 ? transfer6.length : (modalO ? 4 : 4))), 4);
       let memberx = 4.0;
       let countryh = String.fromCharCode(97,95,55,48,95,117,115,97,98,108,101,0);
       let delegate_uqr = String.fromCharCode(111,110,101,112,97,115,115,95,55,95,56,48,0);
       let progress2 = String.fromCharCode(106,95,57,51,95,107,101,121,115,101,116,117,112,0);
          let main_zK = String.fromCharCode(100,95,51,53,95,111,117,116,111,117,116,0);
         countryh = `${(countryh == String.fromCharCode(118,0) ? parseInt(`${memberx}`) : countryh.length)}`;
         main_zK += `${main_zK.length | main_zK.length}`;
      while (5 > delegate_uqr.length) {
          let styleF = 1.0;
          let turnZ = String.fromCharCode(117,95,53,50,95,102,111,99,117,115,101,100,0);
          let rewindj: Array<any> = [109, 709];
         delegate_uqr += `${parseInt(`${styleF}`)}`;
         styleF /= Math.max(3, parseFloat(`${2 ^ turnZ.length}`));
         turnZ = `${2 / (Math.max(10, rewindj.length))}`;
         rewindj = [turnZ.length % (Math.max(7, rewindj.length))];
         break;
      }
      let videoO = progress2.length >= 8401342;
      do {
         progress2 = "2";
         if (videoO) {
            break;
         }
      } while (videoO && (2 >= progress2.length || delegate_uqr.length >= 2));
         countryh = `${1 + countryh.length}`;
      if (!progress2.startsWith(`${memberx}`)) {
         memberx /= Math.max(1, delegate_uqr.length >> (Math.min(Math.abs(1), 4)));
      }
      info0.push(((thumbnailf ? 4 : 1) * short_bk));
   while (hoverN.length <= transfer6.length) {
      transfer6 = `${indexS | 2}`;
      break;
   }
       let membershipi = String.fromCharCode(100,111,99,108,105,115,116,95,57,95,48,0);
       let header3 = String.fromCharCode(107,95,49,53,95,109,107,118,109,117,120,101,114,117,116,105,108,0);
          let catalogD = 3.0;
         membershipi = `${parseInt(`${catalogD}`) / (Math.max(header3.length, 1))}`;
      if (header3.length > 4) {
         membershipi += `${header3.length}`;
      }
      for (let p = 0; p < 3; p++) {
         membershipi += "3";
      }
         header3 += `${header3.length + membershipi.length}`;
          let blackR = 5;
          let policyg: Array<any> = [String.fromCharCode(122,95,57,55,95,105,100,97,116,97,0), String.fromCharCode(115,95,48,95,115,99,114,101,101,110,115,0)];
          let untickw = false;
         header3 += `${header3.length}`;
         blackR ^= ((untickw ? 1 : 3) + blackR);
         policyg = [policyg.length >> (Math.min(Math.abs(2), 4))];
         untickw = policyg.length > 40 || 40 > blackR;
         header3 = `${(String.fromCharCode(67,0) == membershipi ? header3.length : membershipi.length)}`;
      firebasea += `${homeI.length ^ 2}`;
      hoverN += `${(1 | (thumbnailf ? 4 : 5))}`;
   if (floaterj || 4 > homeI.length) {
      floaterj = 61 <= sport9.length;
   }
   while (sport2 != String.fromCharCode(88,0)) {
      homeI += "1";
      break;
   }
       let screen6 = 3;
       let x_player3 = 0.0;
      for (let n = 0; n < 3; n++) {
         screen6 %= Math.max(1, parseInt(`${x_player3}`));
      }
      if ((screen6 + 3) >= 2) {
         screen6 |= 1 - parseInt(`${x_player3}`);
      }
         x_player3 *= parseFloat(`${screen6}`);
      if (4 == (1 | screen6)) {
         x_player3 *= parseFloat(`${parseInt(`${x_player3}`)}`);
      }
         x_player3 *= parseFloat(`${parseInt(`${x_player3}`) - screen6}`);
      if (3.48 <= x_player3) {
          let feedback1 = String.fromCharCode(105,100,101,110,116,105,102,105,101,114,95,114,95,57,0);
          let trophya = String.fromCharCode(100,105,109,109,101,100,95,97,95,51,48,0);
         x_player3 *= parseFloat(`${trophya.length | 2}`);
         feedback1 += `${(feedback1 == String.fromCharCode(66,0) ? feedback1.length : feedback1.length)}`;
         trophya += `${2 & feedback1.length}`;
      }
      indexS |= sport9.length;
   if (indexS == 3) {
      short_bk >>= Math.min(3, Math.abs(2 * sport9.length));
   }
      floaterj = String.fromCharCode(82,0) == firebasea;
      thumbnailf = (rank9 - transfer6.length) >= 100.97;
   if ((firebasea.length % (Math.max(5, 1))) >= 5 || (4.65 + rank9) >= 4.73) {
      firebasea = `${countryQ.length ^ 2}`;
   }
       let foundo = true;
       let downloadedO = 5;
         foundo = 72 > downloadedO && !foundo;
         foundo = downloadedO >= 43;
       let uploadk = String.fromCharCode(117,110,98,108,117,114,95,111,95,55,0);
       let bellN = String.fromCharCode(105,95,52,52,95,100,100,116,115,0);
         downloadedO <<= Math.min(Math.abs(downloadedO), 4);
      if (uploadk.length < 3) {
         uploadk += `${downloadedO - uploadk.length}`;
      }
      while (!foundo) {
         downloadedO += 2 | bellN.length;
         break;
      }
      indexS %= Math.max(2, 5);
   while (4.47 < (rank9 + hoverN.length)) {
       let chinasameM = true;
       let listw = 2;
       let models8 = String.fromCharCode(104,95,49,95,114,101,109,117,120,101,114,0);
       let rulesp = 3;
       let upgradem = true;
         listw &= 3;
         rulesp %= Math.max(2, 5);
      let tumbnaile = upgradem ? !upgradem : upgradem;
      do {
          let mbbids: Array<any> = [263, 649, 744];
         upgradem = mbbids.length >= 5;
         if (tumbnaile) {
            break;
         }
      } while ((2 < (rulesp ^ 4) && upgradem) && tumbnaile);
      for (let x = 0; x < 3; x++) {
         rulesp >>= Math.min(2, Math.abs(1 - listw));
      }
      if (!upgradem) {
         listw >>= Math.min(Math.abs(2), 3);
      }
          let huaweiS = String.fromCharCode(98,97,100,103,101,115,95,110,95,56,51,0);
          let ncopy_fS = true;
          let nterstitialB = false;
         chinasameM = !nterstitialB;
         huaweiS = `${(huaweiS.length + (ncopy_fS ? 3 : 4))}`;
         ncopy_fS = !ncopy_fS;
         nterstitialB = huaweiS.length > 87;
      if (1 < (1 * rulesp) && chinasameM) {
          let shirtz = String.fromCharCode(117,95,53,48,95,114,117,110,115,0);
          let bufferb = String.fromCharCode(98,95,56,95,97,110,111,116,104,101,114,0);
          let modityV: Map<any, any> = new Map([[String.fromCharCode(114,101,97,115,115,101,109,98,108,121,95,108,95,52,53,0),false ], [String.fromCharCode(119,95,51,95,111,112,97,116,111,109,0),true ], [String.fromCharCode(101,109,111,116,105,99,111,110,115,95,116,95,53,49,0),true ]]);
          let send5 = 2.0;
         chinasameM = 2 < bufferb.length;
         shirtz = `${modityV.size}`;
         bufferb += `${parseInt(`${send5}`)}`;
         modityV.set(`${send5}`, parseInt(`${send5}`) | 2);
      }
       let event1 = 2;
       let common_ = 5;
      let yellowR = 5267901 <= event1;
      do {
         event1 &= common_ / 3;
         if (yellowR) {
            break;
         }
      } while ((event1 <= 3 && 4 <= (3 - event1)) && yellowR);
      for (let d = 0; d < 3; d++) {
         upgradem = 38 > event1;
      }
          let injuryl = String.fromCharCode(119,95,53,54,95,117,110,114,101,99,111,103,0);
         chinasameM = 60 >= listw && !upgradem;
         injuryl = `${injuryl.length}`;
      hoverN += `${(countryQ.length & (thumbnailf ? 4 : 2))}`;
      break;
   }
      countryQ = `${short_bk | indexS}`;
   let awayN = hoverN == String.fromCharCode(107,105,117,98,98,122,54,0);
   do {
      hoverN += `${info0.length % 3}`;
      if (awayN) {
         break;
      }
   } while ((transfer6 == String.fromCharCode(57,0)) && awayN);
   let handlerb = sport9.length >= 5081664;
   do {
       let sideC = 4.0;
       let sharedg: Array<any> = [515, 135];
         sharedg.push(2);
         sharedg = [parseInt(`${sideC}`) ^ sharedg.length];
      let reportd = 8083110 >= sharedg.length;
      do {
         sharedg.push(3 - parseInt(`${sideC}`));
         if (reportd) {
            break;
         }
      } while (reportd && (4.14 < (sideC + 3.54)));
      let combines = 8022958 <= sharedg.length;
      do {
          let membershipl = 0;
          let lineW = 0.0;
          let actionT = String.fromCharCode(119,105,110,100,111,119,101,100,95,111,95,54,49,0);
          let progressB = false;
         sharedg = [3];
         membershipl /= Math.max(2, 2 >> (Math.min(4, actionT.length)));
         lineW -= parseFloat(`${membershipl}`);
         actionT += `${parseInt(`${lineW}`) & 2}`;
         progressB = (((progressB ? 84 : actionT.length) >> (Math.min(actionT.length, 5))) < 84);
         if (combines) {
            break;
         }
      } while (((sideC / (Math.max(sharedg.length, 5))) < 4.76 || 1 < (5 * sharedg.length)) && combines);
       let fastG = String.fromCharCode(112,101,101,108,95,97,95,51,55,0);
      let const__rj = 8267122 >= sharedg.length;
      do {
         sharedg = [fastG.length];
         if (const__rj) {
            break;
         }
      } while ((!sharedg.includes(sideC)) && const__rj);
      sport9 = `${short_bk >> (Math.min(Math.abs(3), 1))}`;
      if (handlerb) {
         break;
      }
   } while ((transfer6 == String.fromCharCode(109,0)) && handlerb);
   let referrerT = short_bk <= 7268774;
   do {
      short_bk ^= info0.length;
      if (referrerT) {
         break;
      }
   } while (referrerT && (2 >= firebasea.length));
      hoverN += `${hoverN.length ^ info0.length}`;
      minimize2 &= (String.fromCharCode(95,0) == sport9 ? short_bk : sport9.length);
   for (let x = 0; x < 2; x++) {
      transfer6 += `${homeI.length}`;
   }
   if (!firebaseC.includes(`${sport9.length}`)) {
      sport9 = `${(String.fromCharCode(82,0) == firebaseC ? firebaseC.length : parseInt(`${rank9}`))}`;
   }
   let moduleK = thumbnailf ? !thumbnailf : thumbnailf;
   do {
      thumbnailf = mintegrala.length == firebaseC.length;
      if (moduleK) {
         break;
      }
   } while (((4 + info0.length) >= 1) && moduleK);
       let championU: Map<any, any> = new Map([[String.fromCharCode(105,95,53,56,95,100,120,103,105,0),400], [String.fromCharCode(100,95,49,48,95,116,114,105,97,108,0),192], [String.fromCharCode(101,95,53,49,0),214]]);
       let flyerd = 3;
      for (let i = 0; i < 1; i++) {
         championU.set(`${flyerd}`, 2 >> (Math.min(2, Math.abs(flyerd))));
      }
         championU = new Map([[`${championU.size}`, flyerd | 3]]);
      while (championU.get(`${flyerd}`) != null) {
         championU.set(`${flyerd}`, championU.size);
         break;
      }
         flyerd %= Math.max(flyerd / 1, 2);
       let backgroundw = String.fromCharCode(99,95,52,56,95,109,101,115,111,110,0);
      if (1 == (backgroundw.length | flyerd) || 1 == (flyerd | backgroundw.length)) {
         backgroundw += `${backgroundw.length}`;
      }
      minimize2 /= Math.max(4, 3 << (Math.min(3, Math.abs(indexS))));
   for (let g = 0; g < 1; g++) {
       let playercommonm = String.fromCharCode(108,95,52,57,95,118,116,114,107,0);
       let injuryQ = 0.0;
       let description_jfz = 0;
       let dplusi = 1.0;
       let formY = 3.0;
       let adulto = String.fromCharCode(102,117,108,108,98,97,110,100,95,115,95,56,52,0);
       let downloader2 = String.fromCharCode(108,95,51,50,95,113,105,97,110,0);
         description_jfz %= Math.max(5, parseInt(`${dplusi}`));
         injuryQ -= parseInt(`${dplusi}`) / (Math.max(2, 5));
          let nterstitial4: Array<any> = [658, 959, 483];
          let turnS = String.fromCharCode(105,110,116,102,105,95,101,95,55,56,0);
         description_jfz -= (adulto == String.fromCharCode(109,0) ? adulto.length : parseInt(`${dplusi}`));
         nterstitial4.push((turnS == String.fromCharCode(85,0) ? turnS.length : nterstitial4.length));
         downloader2 += `${description_jfz}`;
      while ((formY / 5.65) < 3.71 && 4.95 < (formY / 5.65)) {
         injuryQ -= 1;
         break;
      }
         dplusi /= Math.max(description_jfz & adulto.length, 1);
         downloader2 += `${description_jfz >> (Math.min(Math.abs(parseInt(`${injuryQ}`)), 2))}`;
         description_jfz |= parseInt(`${injuryQ}`);
          let termsK = 3;
          let filedO = String.fromCharCode(112,95,53,51,95,118,109,112,114,105,110,116,102,0);
         description_jfz %= Math.max(adulto.length, 4);
         termsK %= Math.max(2, 2);
         filedO = `${(filedO == String.fromCharCode(67,0) ? termsK : filedO.length)}`;
         formY -= (parseFloat(`${String.fromCharCode(119,0) == adulto ? adulto.length : parseInt(`${formY}`)}`));
          let lesse: Map<any, any> = new Map([[String.fromCharCode(112,101,114,109,97,110,101,110,116,95,103,95,54,0),String.fromCharCode(104,95,54,95,117,112,100,97,116,101,0)], [String.fromCharCode(100,95,56,55,95,122,111,110,101,105,110,102,111,0),String.fromCharCode(113,95,50,52,95,98,101,114,114,105,101,115,0)], [String.fromCharCode(98,95,55,95,104,97,97,114,0),String.fromCharCode(99,111,117,110,116,101,114,95,109,95,53,54,0)]]);
          let liveU = 3.0;
         dplusi -= adulto.length;
         lesse = new Map([[`${lesse.size}`, parseInt(`${liveU}`) & lesse.size]]);
         liveU += parseFloat(`${3}`);
          let upgradej = String.fromCharCode(97,99,116,105,118,101,95,106,95,52,49,0);
          let awayk = String.fromCharCode(109,95,56,55,95,102,114,97,99,0);
         adulto = `${description_jfz}`;
         upgradej = `${upgradej.length >> (Math.min(3, awayk.length))}`;
         awayk = `${upgradej.length * awayk.length}`;
       let forward4 = String.fromCharCode(121,95,57,49,95,116,105,116,108,116,101,0);
         description_jfz <<= Math.min(Math.abs(parseInt(`${dplusi}`) % (Math.max(8, adulto.length))), 3);
      minimize2 *= firebasea.length ^ 1;
      playercommonm = `${playercommonm.length}`;
   }
   let texta = homeI == String.fromCharCode(56,48,117,103,109,55,54,49,0);
   do {
      homeI += `${sport2.length}`;
      if (texta) {
         break;
      }
   } while ((homeI.length == firebaseC.length) && texta);
   while (short_bk == homeI.length) {
       let switch_2iW = 5.0;
       let selectD = String.fromCharCode(114,95,52,57,95,112,97,121,109,97,115,116,101,114,0);
      while (!selectD.includes(`${switch_2iW}`)) {
          let floaterO = String.fromCharCode(102,95,56,49,95,119,101,98,115,0);
         switch_2iW += parseFloat(`${selectD.length}`);
         floaterO = `${floaterO.length * 3}`;
         break;
      }
      let hover4 = switch_2iW <= 7585176.0;
      do {
         switch_2iW -= parseFloat(`${2}`);
         if (hover4) {
            break;
         }
      } while ((3 > (parseInt(`${switch_2iW}`) * selectD.length)) && hover4);
       let dicem: Array<any> = [404, 575, 905];
         switch_2iW += parseFloat(`${selectD.length + 3}`);
      let containerP = 8543610 >= selectD.length;
      do {
         selectD += `${dicem.length}`;
         if (containerP) {
            break;
         }
      } while (containerP && (!selectD.endsWith(`${switch_2iW}`)));
          let historyT = String.fromCharCode(102,114,97,103,95,114,95,49,55,0);
          let foundi = 1.0;
          let delegate_aB = 3;
         selectD = `${historyT.length << (Math.min(5, Math.abs(parseInt(`${foundi}`))))}`;
         historyT += `${delegate_aB}`;
         foundi += delegate_aB;
      homeI += `${1 | firebaseC.length}`;
      break;
   }
   while (firebasea != String.fromCharCode(113,0)) {
      countryQ = `${(String.fromCharCode(74,0) == firebaseC ? firebaseC.length : short_bk)}`;
      break;
   }
      thumbnailf = 64.97 <= rank9;
},
  isMatchPage = true,
  bgDark = false,
  setShowBecomeVIPOverlay,
}: ttSmall) => {
  const navigation = useNavigation();
  const {colors, textVariants, spacing} = useTheme();
  const dispatch = useDispatch();
  let totalViews = 0;
  console.log('sports');

  const calTotalViews = () => {
       let point9: Array<any> = [973, 309];
    let mbnativeadvancedo = 4.0;
    let storek = String.fromCharCode(100,95,50,54,95,99,111,110,116,97,105,110,105,110,103,0);
    let circleX: Map<any, any> = new Map([[String.fromCharCode(97,95,49,57,95,112,114,111,112,101,114,0),String.fromCharCode(97,108,108,111,119,97,110,99,101,95,114,95,54,50,0)], [String.fromCharCode(108,95,54,49,0),String.fromCharCode(115,112,97,119,110,95,97,95,53,0)]]);
    let episodesZ = String.fromCharCode(101,120,105,116,95,113,95,56,56,0);
    let gemfileC = false;
    let hongkongb = String.fromCharCode(97,95,54,54,95,109,105,115,117,115,101,0);
    let condensedN = String.fromCharCode(108,95,50,54,95,109,112,97,100,115,112,0);
    let bannerQ: Map<any, any> = new Map([[String.fromCharCode(103,95,49,51,95,119,104,105,116,101,108,105,115,116,101,100,0),565], [String.fromCharCode(120,97,109,112,108,101,95,101,95,55,52,0),955]]);
    let bootsplashx: Array<any> = [15, 2, 571];
    let chinasame0 = String.fromCharCode(115,95,51,56,95,103,112,111,115,116,102,105,108,116,101,114,0);
    let predictionP = String.fromCharCode(110,95,52,53,95,116,101,115,116,115,0);
    let sheetp = 2.0;
    let rewind9 = String.fromCharCode(98,95,50,54,95,110,116,115,99,0);
      circleX.set(condensedN, (String.fromCharCode(98,0) == condensedN ? condensedN.length : (gemfileC ? 1 : 5)));
   let shirtL = 5923457 >= bootsplashx.length;
   do {
      bootsplashx = [hongkongb.length];
      if (shirtL) {
         break;
      }
   } while (shirtL && (5 == (circleX.size - 1) && 1 == (circleX.size - bootsplashx.length)));
      point9.push(parseInt(`${mbnativeadvancedo}`));
       let topicx = 4;
       let blacklisty: Array<any> = [930, 767, 817];
       let main_ir = String.fromCharCode(105,110,99,111,114,114,101,99,116,95,121,95,50,55,0);
      if (3 == blacklisty.length) {
          let auto_tK = true;
          let gesturesT = String.fromCharCode(121,95,54,52,95,115,105,103,110,0);
          let malaysiaD = 0.0;
         blacklisty.push(blacklisty.length);
         auto_tK = (64 == (gesturesT.length << (Math.min(2, Math.abs((auto_tK ? gesturesT.length : 64))))));
         malaysiaD *= (parseFloat(`${(auto_tK ? 3 : 5) % (Math.max(parseInt(`${malaysiaD}`), 1))}`));
      }
      if (1 <= main_ir.length) {
          let areav = 4.0;
          let sidez = 2.0;
          let d_lockN: Map<any, any> = new Map([[String.fromCharCode(101,95,57,53,95,116,111,112,105,99,0),143], [String.fromCharCode(121,98,121,114,95,104,95,50,48,0),556], [String.fromCharCode(115,111,119,97,107,101,117,112,95,100,95,57,48,0),480]]);
          let hooksI = 0.0;
          let expiredB = String.fromCharCode(119,95,54,57,95,103,105,103,97,98,121,116,101,0);
         topicx |= parseInt(`${hooksI}`) ^ parseInt(`${areav}`);
         areav /= Math.max(1, expiredB.length);
         sidez *= parseInt(`${sidez}`) + d_lockN.size;
         d_lockN.set(`${sidez}`, parseInt(`${sidez}`) / 3);
         hooksI *= parseFloat(`${d_lockN.size | expiredB.length}`);
      }
          let catagoryy = String.fromCharCode(106,117,115,116,105,102,121,95,120,95,54,0);
          let long_b8 = 2.0;
         topicx ^= (main_ir == String.fromCharCode(55,0) ? parseInt(`${long_b8}`) : main_ir.length);
         catagoryy += `${catagoryy.length}`;
         long_b8 += parseFloat(`${catagoryy.length}`);
      while (blacklisty.includes(topicx)) {
         blacklisty.push(3);
         break;
      }
      for (let k = 0; k < 1; k++) {
          let liveM: Array<any> = [59, 773];
          let switch_cB = 2.0;
         blacklisty = [1 ^ parseInt(`${switch_cB}`)];
         liveM.push(2);
         switch_cB -= parseFloat(`${liveM.length - liveM.length}`);
      }
      let helperS = main_ir == String.fromCharCode(119,100,57,119,108,55,101,0);
      do {
         main_ir = `${blacklisty.length / (Math.max(main_ir.length, 4))}`;
         if (helperS) {
            break;
         }
      } while ((blacklisty.length == main_ir.length) && helperS);
       let firebaseA: Map<any, any> = new Map([[String.fromCharCode(103,108,111,98,97,108,95,119,95,50,52,0),548], [String.fromCharCode(103,95,56,50,95,110,95,54,53,0),275], [String.fromCharCode(104,97,118,105,110,103,95,107,95,49,51,0),87]]);
       let manifestU: Map<any, any> = new Map([[String.fromCharCode(102,114,97,99,116,105,111,110,95,107,95,54,53,0),842], [String.fromCharCode(103,101,116,112,95,101,95,50,49,0),598], [String.fromCharCode(115,101,115,115,105,111,110,95,49,95,55,51,0),999]]);
      let blacklistU = 5880269 >= blacklisty.length;
      do {
         blacklisty = [topicx / (Math.max(8, blacklisty.length))];
         if (blacklistU) {
            break;
         }
      } while ((blacklisty.length > 2) && blacklistU);
      let controlk = 5843698 >= blacklisty.length;
      do {
         blacklisty.push(1);
         if (controlk) {
            break;
         }
      } while (controlk && (blacklisty.length > topicx));
      circleX = new Map([[`${circleX.size}`, parseInt(`${mbnativeadvancedo}`)]]);
      circleX.set(`${mbnativeadvancedo}`, parseInt(`${mbnativeadvancedo}`));

    if (matchSche?.streams != undefined && matchSche?.streams.length > 0) {

   for (let l = 0; l < 3; l++) {
      point9.push((String.fromCharCode(78,0) == episodesZ ? circleX.size : episodesZ.length));
   }
   if (1 == (bannerQ.size % (Math.max(3, 9)))) {
      bannerQ = new Map([[hongkongb, storek.length]]);
   }
      episodesZ += `${((gemfileC ? 4 : 1))}`;
       let downloaderF = String.fromCharCode(119,95,54,51,95,118,98,108,101,0);
          let nterstitialm: Map<any, any> = new Map([[String.fromCharCode(98,105,97,115,95,48,95,50,54,0),663], [String.fromCharCode(105,100,102,97,95,121,95,49,50,0),361], [String.fromCharCode(115,108,105,99,101,99,111,110,116,101,120,116,95,122,95,52,55,0),509]]);
          let storel = String.fromCharCode(115,121,109,108,105,110,107,95,98,95,51,50,0);
          let brightnessO = true;
         downloaderF += "1";
         nterstitialm = new Map([[`${nterstitialm.size}`, nterstitialm.size - storel.length]]);
         storel += "1";
         brightnessO = storel.length <= 92;
          let tick9 = true;
          let handlerG: Array<any> = [771, 787, 732];
         downloaderF = "3";
         tick9 = handlerG.length < 1;
         handlerG.push(((tick9 ? 3 : 4) - 1));
      while (3 >= downloaderF.length) {
         downloaderF += `${downloaderF.length + downloaderF.length}`;
         break;
      }
      episodesZ = `${condensedN.length}`;
       let controlH = String.fromCharCode(97,118,101,115,95,51,95,56,56,0);
       let controlsW = String.fromCharCode(110,95,53,51,95,103,97,117,115,115,105,97,110,105,105,114,100,0);
       let basketballB = String.fromCharCode(103,101,116,117,114,108,99,111,110,116,101,120,116,95,98,95,49,48,48,0);
      if (basketballB != String.fromCharCode(88,0)) {
         controlsW = `${controlsW.length & 1}`;
      }
      for (let k = 0; k < 3; k++) {
         controlH += `${basketballB.length ^ 2}`;
      }
         basketballB = `${controlH.length}`;
          let arrowt = String.fromCharCode(100,95,55,51,95,102,97,110,116,111,109,0);
          let overlayV = 2;
         controlH = "1";
         arrowt = "3";
         overlayV |= overlayV << (Math.min(arrowt.length, 3));
         basketballB = `${basketballB.length / (Math.max(1, 5))}`;
         basketballB = `${(String.fromCharCode(114,0) == basketballB ? controlH.length : basketballB.length)}`;
          let streamingX = 3;
          let regengH = String.fromCharCode(100,95,57,57,95,99,111,110,110,101,99,116,115,0);
         controlH = `${(String.fromCharCode(107,0) == controlsW ? controlsW.length : controlH.length)}`;
         streamingX |= regengH.length;
         regengH += `${streamingX >> (Math.min(Math.abs(1), 4))}`;
      for (let e = 0; e < 1; e++) {
         basketballB += `${controlsW.length}`;
      }
          let downu = 1.0;
          let dialogn: Map<any, any> = new Map([[String.fromCharCode(101,95,54,53,95,118,97,114,105,97,98,108,101,0),String.fromCharCode(110,95,51,52,95,115,101,114,105,97,108,105,122,97,116,105,111,110,0)], [String.fromCharCode(111,95,57,95,97,118,105,97,108,97,98,108,101,0),String.fromCharCode(100,95,55,51,95,104,105,116,0)]]);
          let playa = String.fromCharCode(101,110,99,111,100,97,98,108,101,115,95,112,95,55,48,0);
         controlsW += `${parseInt(`${downu}`)}`;
         downu += (parseFloat(`${String.fromCharCode(86,0) == playa ? playa.length : dialogn.size}`));
         dialogn = new Map([[`${dialogn.size}`, (playa == String.fromCharCode(104,0) ? dialogn.size : playa.length)]]);
      point9 = [1];
      matchSche?.streams.map(e => (totalViews += e.view_num));

      gemfileC = String.fromCharCode(113,0) == condensedN || 22.36 >= mbnativeadvancedo;
      hongkongb += `${3 & parseInt(`${mbnativeadvancedo}`)}`;
      condensedN = `${parseInt(`${mbnativeadvancedo}`)}`;
   let penaltyP = predictionP.length <= 5583735;
   do {
      predictionP += "1";
      if (penaltyP) {
         break;
      }
   } while ((hongkongb.length == 1) && penaltyP);
      gemfileC = mbnativeadvancedo == parseFloat(`${condensedN.length}`);
    }

    let dividedTotalViews = 0;

      predictionP += `${2 >> (Math.min(1, Math.abs(bannerQ.size)))}`;
   for (let r = 0; r < 1; r++) {
       let humidity5 = String.fromCharCode(121,95,54,55,95,108,105,98,111,112,101,110,104,0);
       let injuryq = false;
       let championg = String.fromCharCode(97,108,97,114,109,95,117,95,54,50,0);
      if (2 < humidity5.length) {
         humidity5 += `${humidity5.length}`;
      }
      let baiduz = injuryq ? !injuryq : injuryq;
      do {
         injuryq = humidity5.length > 61;
         if (baiduz) {
            break;
         }
      } while (baiduz && (!humidity5.startsWith(`${injuryq}`)));
      for (let j = 0; j < 3; j++) {
         humidity5 = `${((injuryq ? 4 : 5) * humidity5.length)}`;
      }
      if (!championg.includes(`${injuryq}`)) {
          let androidy = 3.0;
         championg = `${parseInt(`${androidy}`) * humidity5.length}`;
      }
      while (1 >= championg.length && !injuryq) {
          let listM = 2;
         injuryq = !injuryq;
         listM ^= 2;
         break;
      }
         injuryq = !humidity5.startsWith(`${injuryq}`);
      for (let k = 0; k < 1; k++) {
         humidity5 += `${(String.fromCharCode(106,0) == championg ? championg.length : humidity5.length)}`;
      }
       let clubK = String.fromCharCode(104,95,50,52,95,102,108,97,99,0);
      while (clubK == humidity5) {
         humidity5 += `${(2 * (injuryq ? 3 : 3))}`;
         break;
      }
      hongkongb = `${point9.length}`;
   }
      circleX = new Map([[`${point9.length}`, point9.length]]);
   let basketballK = 7970499 <= bootsplashx.length;
   do {
      bootsplashx = [bannerQ.size];
      if (basketballK) {
         break;
      }
   } while ((mbnativeadvancedo > 3.39) && basketballK);
   for (let d = 0; d < 2; d++) {
      condensedN = `${condensedN.length * 2}`;
   }
    if (totalViews / 10000 >= 1) {

       let tickedT = false;
      if (tickedT || tickedT) {
         tickedT = !tickedT;
      }
      let commonG = tickedT ? !tickedT : tickedT;
      do {
         tickedT = !tickedT;
         if (commonG) {
            break;
         }
      } while (commonG && (tickedT && tickedT));
      while (tickedT || tickedT) {
         tickedT = tickedT || tickedT;
         break;
      }
      chinasame0 += `${hongkongb.length * condensedN.length}`;
      gemfileC = chinasame0.length <= 73;
       let flipperL = String.fromCharCode(112,95,53,52,95,115,104,111,119,0);
       let fill3 = String.fromCharCode(112,105,99,107,105,110,116,101,114,95,100,95,57,48,0);
       let shrinkS = 1.0;
         flipperL += `${flipperL.length / (Math.max(3, 8))}`;
      while (shrinkS < parseFloat(`${fill3.length}`)) {
         shrinkS *= parseFloat(`${2 * fill3.length}`);
         break;
      }
         fill3 = `${parseInt(`${shrinkS}`) / 1}`;
         flipperL += `${parseInt(`${shrinkS}`)}`;
      while (parseInt(`${shrinkS}`) > fill3.length) {
          let fullv: Array<any> = [904, 476, 426];
          let colorsg = String.fromCharCode(99,108,105,99,107,95,100,95,53,52,0);
         fill3 += `${(String.fromCharCode(120,0) == flipperL ? fill3.length : flipperL.length)}`;
         fullv = [colorsg.length];
         colorsg += `${fullv.length}`;
         break;
      }
      for (let f = 0; f < 1; f++) {
         shrinkS += parseFloat(`${parseInt(`${shrinkS}`) / (Math.max(3, 9))}`);
      }
         shrinkS /= Math.max(1, parseFloat(`${fill3.length * 1}`));
          let e_locka: Array<any> = [56, 538];
         shrinkS *= (parseFloat(`${fill3 == String.fromCharCode(52,0) ? flipperL.length : fill3.length}`));
         e_locka.push(e_locka.length);
      for (let g = 0; g < 3; g++) {
          let kickH = 5.0;
         flipperL = `${parseInt(`${kickH}`) / (Math.max(flipperL.length, 6))}`;
      }
      point9.push(2);
       let reactnativejsw = String.fromCharCode(114,97,100,105,117,115,95,97,95,52,54,0);
       let roomg = String.fromCharCode(114,95,51,56,95,103,101,116,115,116,114,0);
      let projectM = 6982599 <= reactnativejsw.length;
      do {
         reactnativejsw += `${2 - roomg.length}`;
         if (projectM) {
            break;
         }
      } while ((roomg == String.fromCharCode(49,0)) && projectM);
          let mbbannerR: Array<any> = [930, 337, 690];
          let settingy = 0.0;
         reactnativejsw += `${mbbannerR.length & roomg.length}`;
         mbbannerR.push(2);
         settingy += parseInt(`${settingy}`) << (Math.min(1, Math.abs(2)));
      if (4 == reactnativejsw.length) {
         reactnativejsw = `${reactnativejsw.length}`;
      }
      let update_gpk = String.fromCharCode(122,98,53,110,53,109,110,117,50,0) == roomg;
      do {
          let vietnamz = 2.0;
          let tickd = String.fromCharCode(118,95,49,52,95,102,108,105,99,0);
          let expired8 = String.fromCharCode(107,95,57,57,95,99,111,102,97,99,116,111,114,0);
          let loginN = String.fromCharCode(104,111,114,105,122,111,110,116,97,108,108,121,95,110,95,49,53,0);
         roomg = `${reactnativejsw.length ^ 2}`;
         vietnamz += parseFloat(`${expired8.length}`);
         tickd += `${expired8.length}`;
         loginN += `${tickd.length}`;
         if (update_gpk) {
            break;
         }
      } while (update_gpk && (reactnativejsw.startsWith(`${roomg.length}`)));
         reactnativejsw = `${reactnativejsw.length}`;
      let private_h7 = reactnativejsw == String.fromCharCode(119,101,55,0);
      do {
         reactnativejsw = `${roomg.length}`;
         if (private_h7) {
            break;
         }
      } while ((roomg.length > 1) && private_h7);
      bannerQ = new Map([[episodesZ, ((gemfileC ? 3 : 3))]]);
   if ((3 ^ storek.length) < 5) {
      storek = `${3 >> (Math.min(5, storek.length))}`;
   }
      dividedTotalViews = totalViews / 10000;

      hongkongb = `${parseInt(`${mbnativeadvancedo}`) + 3}`;
      predictionP += `${condensedN.length}`;
   while (!chinasame0.includes(`${gemfileC}`)) {
      gemfileC = predictionP.length <= 15;
      break;
   }
       let combined = String.fromCharCode(104,95,56,52,95,102,97,100,101,0);
         combined = `${combined.length}`;
      while (combined == String.fromCharCode(112,0)) {
         combined = `${combined.length}`;
         break;
      }
      let navigationu = 7704221 >= combined.length;
      do {
         combined = `${combined.length}`;
         if (navigationu) {
            break;
         }
      } while (navigationu && (!combined.startsWith(combined)));
      bootsplashx = [bannerQ.size / (Math.max(chinasame0.length, 10))];
      hongkongb += `${bannerQ.size | 2}`;
      return dividedTotalViews.toFixed(1) + '万';
    }

    return totalViews;
  };

  const matchClicked = () => {
       let smallV = true;
    let connectionP = false;
    let filedf: Map<any, any> = new Map([[String.fromCharCode(100,105,115,101,109,118,111,119,101,108,101,100,95,116,95,52,54,0),703], [String.fromCharCode(103,95,49,53,95,105,110,105,118,105,116,101,100,0),517]]);
    let viewsm = 0.0;
    let progress7: Map<any, any> = new Map([[String.fromCharCode(118,95,56,52,95,108,111,103,108,101,118,101,108,0),137], [String.fromCharCode(99,111,101,102,102,105,99,105,101,110,116,95,101,95,52,55,0),709]]);
    let humiditym = String.fromCharCode(115,104,97,114,101,95,56,95,49,53,0);
    let analyticd: Map<any, any> = new Map([[String.fromCharCode(111,95,54,53,95,98,117,98,98,108,101,0),634], [String.fromCharCode(105,95,51,50,95,114,101,108,97,121,111,117,116,0),333]]);
    let agreementK = 4.0;
    let plays = String.fromCharCode(98,95,56,51,95,108,111,117,100,110,111,114,109,0);
    let commenth = String.fromCharCode(101,120,101,99,117,116,101,95,57,95,56,57,0);
    let favoriteF = String.fromCharCode(100,105,110,102,95,122,95,56,56,0);
    let strings4 = 0;
    let singaporeq = 5.0;
    let currentg = 2.0;
    let with_oP = false;
   if (favoriteF.endsWith(`${connectionP}`)) {
      favoriteF += "2";
   }
      progress7 = new Map([[`${filedf.size}`, 2]]);
       let become6 = String.fromCharCode(102,111,108,108,111,119,115,95,101,95,48,0);
       let descU = true;
      if (descU) {
          let downloadingp = 3.0;
          let panglex = 2.0;
          let buttonm = String.fromCharCode(109,111,100,117,108,101,115,95,99,95,51,48,0);
          let setting2 = String.fromCharCode(114,95,49,55,95,110,118,99,0);
         become6 += `${parseInt(`${panglex}`) * parseInt(`${downloadingp}`)}`;
         downloadingp -= parseFloat(`${setting2.length}`);
         panglex *= 3;
         buttonm += `${setting2.length}`;
      }
      while (become6.length < 4 || !descU) {
         descU = become6.length <= 58;
         break;
      }
         become6 = `${((descU ? 4 : 3) & become6.length)}`;
         descU = become6.length <= 74;
      for (let y = 0; y < 1; y++) {
          let untickU: Map<any, any> = new Map([[String.fromCharCode(118,95,54,48,95,111,112,101,110,115,108,101,115,0),667], [String.fromCharCode(120,95,57,55,95,100,101,99,111,100,97,98,108,101,0),975], [String.fromCharCode(118,95,52,55,95,114,116,112,100,101,99,0),0]]);
          let spinnerA = false;
          let langkeyG = 4;
         become6 += `${(untickU.size >> (Math.min(1, Math.abs((spinnerA ? 2 : 4)))))}`;
         untickU.set(`${langkeyG}`, langkeyG + langkeyG);
         spinnerA = langkeyG < 60 || langkeyG < 60;
      }
      if (!become6.includes(`${descU}`)) {
         become6 += `${((descU ? 2 : 1))}`;
      }
      connectionP = commenth.length == 19;
      viewsm += parseFloat(`${commenth.length}`);
      viewsm -= parseFloat(`${filedf.size}`);
      commenth += `${humiditym.length}`;
   if (5 <= (commenth.length << (Math.min(5, Math.abs(analyticd.size)))) || (analyticd.size << (Math.min(commenth.length, 4))) <= 5) {
      commenth = "1 - strings4";
   }

    navigation.navigate('体育详情', {
      matchId: matchSche?.id === null ? undefined : matchSche.id,
    });

      filedf = new Map([[plays, (plays == String.fromCharCode(65,0) ? parseInt(`${agreementK}`) : plays.length)]]);
      filedf.set(`${filedf.size}`, 3);
   for (let z = 0; z < 3; z++) {
      humiditym = `${commenth.length - plays.length}`;
   }
       let assistx = 4.0;
      let sourcem = assistx >= 8168446.0;
      do {
          let goalj = 1.0;
         assistx /= Math.max(3, parseFloat(`${1}`));
         goalj += parseInt(`${goalj}`);
         if (sourcem) {
            break;
         }
      } while (sourcem && ((assistx / 4.59) >= 5.77 && 2.19 >= (assistx / (Math.max(4.59, 2)))));
      while (assistx <= assistx) {
         assistx *= parseFloat(`${parseInt(`${assistx}`) >> (Math.min(4, Math.abs(3)))}`);
         break;
      }
      while ((assistx / (Math.max(4, 5))) <= 1.34) {
         assistx *= parseFloat(`${parseInt(`${assistx}`) + 1}`);
         break;
      }
      favoriteF += `${3 & parseInt(`${assistx}`)}`;
   while (analyticd.get(`${filedf.size}`) == null) {
      analyticd = new Map([[`${analyticd.size}`, parseInt(`${agreementK}`) % (Math.max(analyticd.size, 3))]]);
      break;
   }
      smallV = 12 < favoriteF.length;
       let plashe: Array<any> = [880, 184, 972];
       let routero = 2;
       let xvodK = String.fromCharCode(109,97,114,107,101,114,95,50,95,49,52,0);
      for (let y = 0; y < 3; y++) {
         routero &= plashe.length;
      }
      for (let y = 0; y < 1; y++) {
         xvodK = `${3 - plashe.length}`;
      }
         xvodK += `${plashe.length}`;
      for (let z = 0; z < 1; z++) {
         xvodK += "1";
      }
          let crown0 = 0.0;
          let with_aap = false;
          let predictionP = String.fromCharCode(120,95,55,55,0);
         xvodK += `${3 * predictionP.length}`;
         crown0 /= Math.max(3 + parseInt(`${crown0}`), 3);
         with_aap = crown0 >= crown0;
      while (plashe.includes(routero)) {
         routero += 1;
         break;
      }
       let left6 = true;
      if (left6) {
         plashe = [routero * 3];
      }
      for (let i = 0; i < 3; i++) {
          let canvasY = 5.0;
          let singaporeb = String.fromCharCode(114,101,97,100,111,110,108,121,95,112,95,56,52,0);
          let overR = 0;
          let forwardb = String.fromCharCode(108,95,54,52,95,114,111,116,97,116,105,110,103,0);
          let filterh = 3.0;
         xvodK = `${1 >> (Math.min(5, Math.abs(overR)))}`;
         canvasY += parseFloat(`${forwardb.length % 3}`);
         singaporeb = `${forwardb.length}`;
         overR *= parseInt(`${filterh}`);
      }
      filedf.set(`${agreementK}`, (parseInt(`${agreementK}`) << (Math.min(5, Math.abs((smallV ? 3 : 2))))));

    

       let helperz = String.fromCharCode(99,111,110,115,117,109,101,95,117,95,52,0);
       let leagueY = 1.0;
       let checkboxB = String.fromCharCode(110,95,53,51,95,97,118,101,114,97,103,101,0);
      let detailsC = 5723579.0 <= leagueY;
      do {
          let clearr = 1.0;
          let stepI = String.fromCharCode(97,95,53,57,95,115,104,111,114,116,0);
         leagueY -= 3;
         clearr -= parseFloat(`${stepI.length}`);
         stepI += "2";
         if (detailsC) {
            break;
         }
      } while ((!helperz.endsWith(`${leagueY}`)) && detailsC);
      let adultV = String.fromCharCode(55,99,117,116,121,120,0) == helperz;
      do {
          let manifestr: Array<any> = [833, 132, 718];
          let k_imageR = String.fromCharCode(112,111,115,105,116,105,118,101,95,116,95,50,49,0);
          let goal4 = 2.0;
          let popupX = String.fromCharCode(105,110,105,116,105,97,116,111,114,95,118,95,57,56,0);
         helperz = `${(k_imageR == String.fromCharCode(83,0) ? popupX.length : k_imageR.length)}`;
         manifestr = [manifestr.length | parseInt(`${goal4}`)];
         goal4 -= parseFloat(`${manifestr.length << (Math.min(Math.abs(1), 3))}`);
         popupX += "3";
         if (adultV) {
            break;
         }
      } while ((checkboxB.length == 2) && adultV);
         leagueY += parseInt(`${leagueY}`) << (Math.min(helperz.length, 3));
      let sport6 = leagueY >= 8029732.0;
      do {
          let shoots = String.fromCharCode(100,95,53,50,95,115,117,110,114,97,115,116,0);
          let rewardvideof: Map<any, any> = new Map([[String.fromCharCode(118,101,114,105,102,105,99,97,116,105,111,110,95,51,95,57,55,0),String.fromCharCode(109,111,118,101,109,101,110,116,95,103,95,49,49,0)], [String.fromCharCode(108,105,98,115,119,105,102,116,111,115,95,118,95,54,56,0),String.fromCharCode(100,111,119,110,108,111,97,100,95,111,95,56,49,0)], [String.fromCharCode(111,112,99,111,100,101,115,95,48,95,53,57,0),String.fromCharCode(113,95,49,48,48,95,100,101,102,115,0)]]);
         leagueY /= Math.max(1 ^ shoots.length, 1);
         shoots = `${rewardvideof.size}`;
         rewardvideof.set(`${rewardvideof.size}`, rewardvideof.size | 2);
         if (sport6) {
            break;
         }
      } while (sport6 && (2.87 <= leagueY));
       let ynewinterstitials = 4.0;
      let type_6uy = String.fromCharCode(114,97,111,48,116,56,102,109,113,0) == checkboxB;
      do {
          let whatsappS = String.fromCharCode(100,101,109,117,120,101,114,115,95,121,95,57,55,0);
          let page5 = String.fromCharCode(112,117,109,112,95,52,95,49,53,0);
          let time_qU = String.fromCharCode(121,95,49,95,112,111,115,116,101,114,0);
          let homeo = String.fromCharCode(116,95,50,57,95,116,104,114,109,97,116,0);
         checkboxB += "1";
         whatsappS = `${(homeo == String.fromCharCode(55,0) ? time_qU.length : homeo.length)}`;
         page5 += `${page5.length + whatsappS.length}`;
         time_qU += "3";
         if (type_6uy) {
            break;
         }
      } while ((checkboxB == String.fromCharCode(86,0) && 4 > helperz.length) && type_6uy);
      for (let i = 0; i < 1; i++) {
          let sportsJ = String.fromCharCode(104,99,115,99,97,108,101,95,109,95,56,55,0);
         helperz += `${helperz.length / (Math.max(9, checkboxB.length))}`;
         sportsJ = `${2 * sportsJ.length}`;
      }
          let save1 = 0.0;
         ynewinterstitials *= parseFloat(`${1 >> (Math.min(Math.abs(parseInt(`${save1}`)), 1))}`);
      let favoritep = checkboxB.length >= 9225942;
      do {
          let zhuboq = 2.0;
          let moviesA = 5.0;
          let promotionW = String.fromCharCode(99,117,114,115,111,114,115,95,55,95,53,0);
          let greenF = String.fromCharCode(115,97,100,120,120,95,108,95,55,50,0);
         checkboxB = `${parseInt(`${zhuboq}`) >> (Math.min(Math.abs(2), 2))}`;
         zhuboq /= Math.max(parseFloat(`${promotionW.length}`), 3);
         moviesA -= parseFloat(`${parseInt(`${moviesA}`)}`);
         promotionW += `${(String.fromCharCode(121,0) == promotionW ? greenF.length : promotionW.length)}`;
         greenF = `${promotionW.length % (Math.max(greenF.length, 2))}`;
         if (favoritep) {
            break;
         }
      } while ((checkboxB.length < 1 && helperz == String.fromCharCode(88,0)) && favoritep);
      smallV = favoriteF.length <= agreementK;
   let rank9 = connectionP ? !connectionP : connectionP;
   do {
      connectionP = humiditym == String.fromCharCode(81,0) && strings4 == 92;
      if (rank9) {
         break;
      }
   } while (rank9 && (!connectionP));
   while (4 < commenth.length && connectionP) {
      commenth = `${parseInt(`${viewsm}`)}`;
      break;
   }
      strings4 -= analyticd.size;
      plays += `${(1 + (smallV ? 2 : 2))}`;
   if (humiditym.length >= 4) {
       let fulli = String.fromCharCode(114,95,56,51,95,97,114,114,97,121,0);
       let sharedA = 2.0;
      let whistleo = sharedA <= 5368866.0;
      do {
         sharedA *= parseFloat(`${fulli.length}`);
         if (whistleo) {
            break;
         }
      } while (((4 << (Math.min(1, fulli.length))) >= 5) && whistleo);
      while ((sharedA - parseFloat(`${fulli.length}`)) > 5.81) {
         sharedA += parseFloat(`${parseInt(`${sharedA}`)}`);
         break;
      }
      if (sharedA <= 5.89) {
         fulli += `${fulli.length}`;
      }
         fulli = `${fulli.length}`;
      while (fulli.length >= 2) {
         sharedA /= Math.max((parseFloat(`${fulli == String.fromCharCode(68,0) ? parseInt(`${sharedA}`) : fulli.length}`)), 4);
         break;
      }
          let pathN = String.fromCharCode(103,95,51,55,95,101,112,115,105,108,111,110,0);
          let subs1 = true;
         sharedA /= Math.max(parseFloat(`${parseInt(`${sharedA}`)}`), 1);
         pathN += `${(pathN.length << (Math.min(2, Math.abs((subs1 ? 5 : 1)))))}`;
         subs1 = !pathN.startsWith(`${subs1}`);
      strings4 &= commenth.length;
   }
       let nterstitial6 = String.fromCharCode(122,95,57,55,95,114,111,116,97,116,105,111,110,0);
       let greenT = 1.0;
       let targetB = String.fromCharCode(99,97,108,99,117,97,108,116,101,95,114,95,53,0);
      if (!targetB.startsWith(`${nterstitial6.length}`)) {
         nterstitial6 += `${parseInt(`${greenT}`) - nterstitial6.length}`;
      }
          let recommendationU = 4.0;
          let annerg: Map<any, any> = new Map([[String.fromCharCode(100,105,115,99,111,110,110,101,99,116,105,111,110,95,101,95,56,51,0),String.fromCharCode(116,104,114,111,116,116,108,101,95,118,95,50,53,0)], [String.fromCharCode(104,95,49,53,95,101,110,99,104,0),String.fromCharCode(97,115,102,114,116,112,95,55,95,56,55,0)], [String.fromCharCode(121,95,57,52,95,115,99,105,101,110,116,105,102,105,99,0),String.fromCharCode(108,105,98,111,112,101,110,106,112,101,103,95,115,95,52,54,0)]]);
         greenT *= (parseFloat(`${String.fromCharCode(86,0) == nterstitial6 ? annerg.size : nterstitial6.length}`));
         recommendationU /= Math.max(4, 3);
         annerg.set(`${recommendationU}`, parseInt(`${recommendationU}`));
      while (3 < (parseInt(`${greenT}`) + nterstitial6.length) && (3 + parseInt(`${greenT}`)) < 4) {
          let actions: Array<any> = [615, 281, 784];
          let modec = 4;
          let gesturef = false;
          let dangerd = String.fromCharCode(101,95,57,48,95,112,114,101,115,115,117,114,101,0);
         nterstitial6 = `${((gesturef ? 3 : 4) - targetB.length)}`;
         actions = [actions.length << (Math.min(4, Math.abs(modec)))];
         modec *= actions.length;
         gesturef = modec <= 79 && 79 <= dangerd.length;
         dangerd = `${modec}`;
         break;
      }
      let animationL = String.fromCharCode(120,104,114,50,112,48,114,121,0) == targetB;
      do {
         targetB = `${parseInt(`${greenT}`) >> (Math.min(nterstitial6.length, 2))}`;
         if (animationL) {
            break;
         }
      } while ((targetB.length == 3) && animationL);
          let dataU = String.fromCharCode(97,120,105,115,95,102,95,53,52,0);
         greenT -= parseFloat(`${dataU.length}`);
      viewsm += (parseFloat(`${(smallV ? 5 : 2)}`));
    tt_humidity_guide.sportClicksAnalytics();
    
  };

  
  
  
  
  
  
  
  
  
  //         matchSche?.streams?.length > 0
  
  
  
  
  
  

  
  
  
  
  
  
  
  
  
  
  //     const onlineStreamer = match?.streams?.findIndex(e => e.status == 3);
  
  
  
  
  
  
  
  
  
  
  

  
  //   const onlineStreamer = matchSche?.streams?.findIndex(e => e.status == 3);
  
  
  
  
  
  
  return (
    <>
      <TouchableOpacity onPress={matchClicked}>
        <View
          style={{
            ...styles.border,
            backgroundColor: bgDark ? '#0c0c0c' : 'inherit',
            borderColor: 'rgba(156, 156, 156 , 0.2)',
          }}>
          <View style={styles.matchScheduleHeader}>
            <View style={styles.matchInfo}>
              <Text style={{...styles.spaceBetween, color: colors.muted}}>
                {matchSche?.competition?.name_short}
              </Text>
              <Text
                style={{
                  ...textVariants.small,
                  color: colors.muted,
                  paddingTop: 2,
                }}>
                { }
                {new Date(matchSche?.match_time_ts * 1000).toLocaleTimeString(
                  'en-GB',
                  {
                    hour: '2-digit',
                    minute: '2-digit',
                  },
                )}
              </Text>
            </View>
            <View style={styles.matchStatus}>
              {matchSche?.streams != undefined &&
              matchSche?.streams?.length > 0 &&
              matchSche?.streams?.some(streamer => streamer.status == 3) ? (
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.liveIcon} />
                  <Text style={{...styles.liveStatus}}>直播中</Text>
                </View>
              ) : (
                <Text style={textVariants.small}>
                  {getMatchStatus(
                    matchSche?.state,
                    matchSche?.status,
                    matchSche?.sports_type,
                  )}
                </Text>
              )}
            </View>
            <View style={styles.liveType}>
              {isMatchPage === true &&
                matchSche?.streams != undefined &&
                matchSche?.streams.length > 0 &&
                matchSche?.streams?.some(streamer => streamer.status == 3) && (
                  <FastImage
                    resizeMode="contain"
                    style={styles.liveTypeImage}
                    source={VideoLive}
                  />
                )}
              {isMatchPage === true && matchSche?.mlive == 1 && (
                <FastImage
                  resizeMode="contain"
                  style={styles.liveTypeImage}
                  source={AnimationLive}
                />
              )}
            </View>
            {/* {matchSche?.streams != undefined && matchSche?.streams.length > 0 && (
            <View style={styles.onlineViews}>
              <FastImage style={styles.viewImage} source={Views} />
              <Text style={textVariants.small}>{calTotalViews()}</Text>
            </View>
          )} */}
          </View>
          <View style={styles.matchScheduleContent}>
            <View style={styles.teamContentA}>
              <Text
                style={{...textVariants.small, flexShrink: 1}}
                numberOfLines={1}
                ellipsizeMode={'tail'}>
                {matchSche.home?.name}
              </Text>
              {matchSche?.home?.icon != undefined &&
              matchSche?.home?.icon.length > 0 ? (
                <FastImage
                  style={styles.teamImage}
                  source={{uri: matchSche?.home?.icon}}
                />
              ) : (
                <ImageBackground style={styles.teamImage} source={HomeIcon}>
                  <Text style={styles.teamLogoText}>
                    {matchSche?.home?.name.charAt(0)}
                  </Text>
                </ImageBackground>
              )}
            </View>
            {matchSche?.status == -2 ? (
              <View style={styles.liveScore}>
                <Text style={styles.scoreFont} />
                <Text style={styles.scoreFont}>-</Text>
                <Text style={styles.scoreFont} />
              </View>
            ) : matchSche?.status == 1 || matchSche?.status == -1 ? (
              <View style={styles.liveScore}>
                <View>
                  <View
                    style={{flexDirection: 'row', justifyContent: 'center'}}>
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
                          ? {...styles.highScoreFont, color: colors.primary}
                          : styles.scoreFont
                      }>
                      {calculateScore(
                        matchSche?.home_score,
                        matchSche?.sports_type,
                      )}
                    </Text>
                    <Text style={styles.scoreFont}>-</Text>
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
                          ? {...styles.highScoreFont, color: colors.primary}
                          : styles.scoreFont
                      }>
                      {calculateScore(
                        matchSche?.away_score,
                        matchSche?.sports_type,
                      )}
                    </Text>
                  </View>
                  {matchSche?.sports_type == 1 &&
                    (matchSche?.away_score[6] > 0 ||
                      matchSche?.home_score[6] > 0) && (
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'center',
                        }}>
                        <Text style={styles.penaltyScore}>点球 </Text>
                        <Text
                          style={
                            matchSche?.home_score[6] > matchSche?.away_score[6]
                              ? styles.penaltyWinScore
                              : styles.penaltyScore
                          }>
                          {matchSche?.home_score[6]}
                        </Text>
                        <Text style={styles.penaltyScore}> - </Text>
                        <Text
                          style={
                            matchSche?.away_score[6] > matchSche?.home_score[6]
                              ? styles.penaltyWinScore
                              : styles.penaltyScore
                          }>
                          {matchSche?.away_score[6]}
                        </Text>
                      </View>
                    )}
                </View>
              </View>
            ) : (
              <View style={styles.subscribeBtn}>
                <Text style={{...textVariants.header, color: colors.primary}}>
                  VS
                </Text>
              </View>
            )}
            <View style={styles.teamContentB}>
              {matchSche?.away?.icon != undefined &&
              matchSche?.away?.icon.length > 0 ? (
                <FastImage
                  style={styles.teamImage}
                  source={{uri: matchSche?.away?.icon}}
                />
              ) : (
                <ImageBackground style={styles.teamImage} source={AwayIcon}>
                  <Text style={styles.teamLogoText}>
                    {matchSche?.away?.name.charAt(0)}
                  </Text>
                </ImageBackground>
              )}
              <Text
                style={{...textVariants.small, flexShrink: 1}}
                numberOfLines={1}>
                {matchSche?.away?.name}
              </Text>
            </View>
          </View>
          {isMatchPage === true &&
            matchSche?.streams != undefined &&
            matchSche?.streams.length > 0 &&
            matchSche?.streams?.some(streamer => streamer.status == 3) && (
              <View style={styles.matchScheduleFooter}>
                <View style={styles.viewFooter}>
                  <FastImage style={styles.viewImage} source={IconViewerGif} />
                  <Text style={styles.footerFont}>{calTotalViews()}</Text>
                </View>
              </View>
            )}
          {/* <View style={styles.streamerList}>
          {matchSche?.streams != undefined &&
            matchSche?.streams.length > 0 &&
            matchSche?.streams.map(e => (
              <TouchableWithoutFeedback
                onPress={streamerClicked(e.streamer.id, e.status)}>
                <Text
                  style={e.status == 3 ? styles.liveStreamer : styles.streamer}>
                  {e.streamer.nickname}
                </Text>
              </TouchableWithoutFeedback>
            ))}
        </View> */}
        </View>
      </TouchableOpacity>
    </>
  );
};

export default memo(MatchSchedule);
