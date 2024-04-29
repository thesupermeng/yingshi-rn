import React, { memo, useState, useRef, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  FlatList,
  Dimensions,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import styles from './tt_with_success';
import { TouchableOpacity } from 'react-native';
import { formatMatchDate } from '../../utility/utils';
import { ttOrange } from '@redux/tt_updates_bottom';
import { ttAway } from '../../types/tt_zhubo';
import { Url } from '../../middleware/tt_field';
import { useInfiniteQuery } from '@tanstack/react-query';
import ttDescTerms from '../../middleware/tt_chat';
import MatchSchedule from './tt_regeng_center';
import FastImage from '../../../components/common/tt_connection';
import { TOPON_BANNER_HEIGHT } from '@utility/tt_trophy_cross';

interface ttSmall {
  matchTypeID: number;
  status?: number;
  setShowBecomeVIPOverlay: any;
  bgDark?:boolean
}

type ttBackgroundDefault = {
  date: string | undefined;
  data: ttAway | undefined;
};

type tt_change_trash = {
  headers: number[];
  data: ttBackgroundDefault[];
};

const MatchScheduleList = ({
  matchTypeID,
  status = -1,
  setShowBecomeVIPOverlay,
  bgDark = false
}: ttSmall) => {
  const { colors, textVariants, spacing } = useTheme();
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  const latestListDate = useRef<Date | undefined>();
  let flatlistRef = useRef();

  const [isFetchNext, setFetchNext] = useState(false);
  const [showLoading, setShowLoading] = useState(false);

  const [matches, setMatches] = useState<tt_change_trash>({
    headers: [],
    data: [],
  });

  const getUrl = () => {
       let k_imageb = 5.0;
    let headerd: Map<any, any> = new Map([[String.fromCharCode(107,95,52,95,97,108,105,97,115,101,115,0),529], [String.fromCharCode(108,97,115,114,95,54,95,55,53,0),492], [String.fromCharCode(120,95,54,53,95,115,117,109,115,113,0),388]]);
    let xvodi = false;
    let networkb = 0.0;
    let flyerD = 5.0;
    let reactnativejsL: Map<any, any> = new Map([[String.fromCharCode(97,108,108,111,119,95,57,95,55,48,0),877], [String.fromCharCode(116,114,101,120,95,115,95,49,53,0),346]]);
    let stylen: Map<any, any> = new Map([[String.fromCharCode(114,95,55,54,95,106,117,109,112,0),642], [String.fromCharCode(102,108,97,116,116,101,110,95,118,95,57,53,0),453], [String.fromCharCode(110,95,53,54,95,101,118,101,114,121,0),680]]);
    let moditys: Map<any, any> = new Map([[String.fromCharCode(117,95,53,50,95,114,111,116,97,116,101,100,0),String.fromCharCode(113,95,53,95,118,105,98,114,97,116,105,111,110,0)], [String.fromCharCode(117,115,101,114,99,116,120,95,106,95,56,50,0),String.fromCharCode(109,98,116,114,101,101,95,55,95,49,49,0)], [String.fromCharCode(112,114,101,102,101,114,95,120,95,53,57,0),String.fromCharCode(101,120,101,99,117,116,101,95,120,95,53,50,0)]]);
    let fasta = 4.0;
    let filterI = 2.0;
    let showh: Map<any, any> = new Map([[String.fromCharCode(115,95,50,52,95,116,97,103,115,116,114,0),String.fromCharCode(119,95,49,48,95,110,101,97,114,101,114,0)], [String.fromCharCode(118,95,56,51,95,117,110,118,111,116,101,0),String.fromCharCode(106,95,57,51,95,109,112,101,103,97,117,100,105,111,100,97,116,97,0)], [String.fromCharCode(120,95,57,52,95,117,110,114,101,118,101,114,115,101,100,0),String.fromCharCode(115,95,55,53,95,98,97,107,101,100,0)]]);
    let activity_ = String.fromCharCode(102,114,101,101,108,105,115,116,95,116,95,53,55,0);
    let downloaderY: Array<any> = [33, 78];
    let mbjscommon_ = String.fromCharCode(102,114,101,113,95,113,95,56,53,0);
    let about0 = 4.0;
      showh = new Map([[`${xvodi}`, (parseInt(`${flyerD}`) + (xvodi ? 5 : 1))]]);
       let mbbannerq = String.fromCharCode(112,95,57,55,95,116,101,120,105,100,101,112,0);
       let eventR = 3;
       let type_oY: Array<any> = [851, 726, 865];
       let filed9: Array<any> = [514, 219, 410];
       let episodesm: Array<any> = [479, 953];
       let stringsA = String.fromCharCode(102,114,97,109,101,113,117,101,117,101,95,54,95,55,54,0);
      let volume1 = 9245219 >= eventR;
      do {
         eventR %= Math.max(stringsA.length, 3);
         if (volume1) {
            break;
         }
      } while ((1 > (stringsA.length - 4) && 4 > (stringsA.length - eventR)) && volume1);
      let vignetteU = mbbannerq.length >= 7915984;
      do {
          let nterstitialS = String.fromCharCode(99,111,110,118,101,114,103,101,110,99,101,95,109,95,55,48,0);
          let mbnativeq = 4;
          let package_bp = String.fromCharCode(114,101,113,117,97,110,116,95,110,95,57,55,0);
          let plusF = 5;
         mbbannerq += `${package_bp.length | 3}`;
         nterstitialS += `${2 << (Math.min(1, Math.abs(mbnativeq)))}`;
         mbnativeq <<= Math.min(Math.abs(plusF * mbnativeq), 1);
         package_bp = `${mbnativeq}`;
         plusF += mbnativeq;
         if (vignetteU) {
            break;
         }
      } while ((mbbannerq.length <= stringsA.length) && vignetteU);
       let assist6 = 1.0;
         type_oY = [eventR - 1];
         eventR &= episodesm.length;
       let chinaG = String.fromCharCode(116,95,53,53,95,97,99,116,105,111,110,115,0);
       let gift3 = String.fromCharCode(103,101,116,112,95,49,95,49,48,48,0);
         type_oY = [1 & eventR];
      activity_ += `${showh.size}`;
      filterI -= parseInt(`${fasta}`);

    let url = '';

   for (let w = 0; w < 1; w++) {
       let giftl: Map<any, any> = new Map([[String.fromCharCode(117,116,105,108,95,51,95,56,57,0),true ], [String.fromCharCode(112,95,57,53,95,116,117,114,98,111,106,112,101,103,0),true ], [String.fromCharCode(107,95,51,48,95,101,107,121,0),false ]]);
       let teamn = String.fromCharCode(102,95,49,48,48,95,98,111,117,110,100,101,100,0);
       let layoutE = true;
       let toponq = true;
       let collectionw = 0.0;
         toponq = 9.60 == collectionw;
          let humidityl: Array<any> = [String.fromCharCode(112,111,115,105,116,105,111,110,115,95,52,95,54,0), String.fromCharCode(98,95,54,55,95,115,109,106,112,101,103,0), String.fromCharCode(101,120,116,114,101,109,101,95,119,95,49,48,48,0)];
         collectionw -= parseFloat(`${giftl.size}`);
         humidityl.push(humidityl.length | 2);
      let const_xhi = layoutE ? !layoutE : layoutE;
      do {
         layoutE = (teamn.length + parseInt(`${collectionw}`)) >= 61;
         if (const_xhi) {
            break;
         }
      } while ((4 == teamn.length) && const_xhi);
         layoutE = 55.90 < collectionw && !toponq;
      stylen.set(`${fasta}`, activity_.length ^ parseInt(`${fasta}`));
   }
   let friendsy = 9006445.0 <= networkb;
   do {
      networkb += parseFloat(`${2 >> (Math.min(5, Math.abs(parseInt(`${fasta}`))))}`);
      if (friendsy) {
         break;
      }
   } while ((xvodi) && friendsy);
      filterI -= parseInt(`${networkb}`);
    if (matchTypeID !== -1) {
      url += `?sports_type=${matchTypeID}`;
    }
    if (url === '') {
      url = '?';
    }
    if (status !== -1) {
      url += `&status=${status}`;
    } else {
      url += `&is_live=${true}`;
    }
    

   for (let y = 0; y < 2; y++) {
       let wind9 = 5;
       let sportsk = true;
       let stringt = String.fromCharCode(109,107,100,105,114,95,101,95,50,55,0);
       let x_center9 = String.fromCharCode(97,108,116,101,114,110,97,116,101,95,99,95,56,57,0);
       let cast3 = 4.0;
       let playlistv = String.fromCharCode(100,105,115,116,95,117,95,57,51,0);
       let descQ = String.fromCharCode(110,95,49,56,95,98,111,116,104,0);
          let gesturesj = false;
         cast3 -= 3;
         gesturesj = (!gesturesj ? gesturesj : gesturesj);
         cast3 /= Math.max(2, (String.fromCharCode(85,0) == x_center9 ? descQ.length : x_center9.length));
         cast3 += ((sportsk ? 2 : 3) & 1);
       let downloaderT = 0;
      let moden = 5290514 <= wind9;
      do {
         wind9 *= playlistv.length;
         if (moden) {
            break;
         }
      } while ((wind9 <= 3) && moden);
          let playercommonl = 2.0;
          let dropdown4 = String.fromCharCode(107,95,50,55,95,100,111,110,97,116,101,0);
          let mutede: Map<any, any> = new Map([[String.fromCharCode(117,95,50,55,95,112,101,114,0),false ], [String.fromCharCode(97,100,100,95,50,95,53,53,0),true ]]);
         stringt += `${(x_center9 == String.fromCharCode(106,0) ? wind9 : x_center9.length)}`;
         playercommonl -= parseFloat(`${3}`);
         dropdown4 += "1";
         mutede.set(`${dropdown4}`, dropdown4.length);
      while (stringt.startsWith(`${wind9}`)) {
         stringt = `${descQ.length}`;
         break;
      }
         descQ = "2 * wind9";
       let yingO = 1.0;
       let shootF = 5.0;
         x_center9 = `${stringt.length}`;
      for (let t = 0; t < 2; t++) {
         downloaderT += downloaderT ^ 3;
      }
      if ((wind9 + cast3) == 2.64) {
          let heartv = 2;
          let slider_ = 3.0;
         cast3 -= 2;
         heartv &= parseInt(`${slider_}`) >> (Math.min(3, Math.abs(1)));
         slider_ *= parseFloat(`${heartv + parseInt(`${slider_}`)}`);
      }
      if (5 == (3 + downloaderT)) {
         downloaderT <<= Math.min(4, Math.abs(3 + wind9));
      }
      activity_ += `${showh.size + x_center9.length}`;
   }
   if (5 < activity_.length) {
       let annerD = 3.0;
       let strings3 = String.fromCharCode(117,108,116,114,97,119,105,100,101,95,110,95,53,48,0);
       let langa = true;
         langa = strings3 == String.fromCharCode(52,0) || 68.33 < annerD;
      if ((2.30 + annerD) >= 2.49 && 2.30 >= annerD) {
          let nativeK = String.fromCharCode(101,95,55,53,95,112,105,99,116,121,112,101,0);
          let e_manageri = String.fromCharCode(110,117,108,108,105,102,95,56,95,49,48,0);
         annerD += strings3.length * parseInt(`${annerD}`);
         nativeK += `${nativeK.length % 2}`;
         e_manageri = `${nativeK.length + 3}`;
      }
       let component5 = 1.0;
       let signinupl = 5.0;
         langa = signinupl >= component5;
         signinupl /= Math.max(parseFloat(`${strings3.length}`), 5);
          let playercommong: Array<any> = [267, 886];
         signinupl *= parseFloat(`${playercommong.length ^ 2}`);
      let starW = component5 >= 9647625.0;
      do {
         component5 *= parseFloat(`${3 >> (Math.min(Math.abs(parseInt(`${annerD}`)), 5))}`);
         if (starW) {
            break;
         }
      } while (starW && (annerD >= component5));
      for (let i = 0; i < 1; i++) {
         strings3 += `${(parseInt(`${signinupl}`) + (langa ? 3 : 3))}`;
      }
      let langD = signinupl <= 6447350.0;
      do {
         signinupl += parseFloat(`${strings3.length % 2}`);
         if (langD) {
            break;
         }
      } while (langD && (signinupl == 5.96));
      filterI *= parseInt(`${k_imageb}`) + downloaderY.length;
   }
       let megaphoneZ: Map<any, any> = new Map([[String.fromCharCode(102,114,97,109,101,115,105,122,101,95,111,95,50,53,0),786], [String.fromCharCode(116,95,51,51,95,102,108,97,116,0),644], [String.fromCharCode(117,95,51,48,95,102,101,116,99,104,101,115,0),520]]);
       let productZ: Array<any> = [322, 442];
      if (megaphoneZ.get(`${productZ.length}`) == null) {
          let streamingu = String.fromCharCode(104,97,110,103,117,112,95,115,95,54,48,0);
          let vnewinterstitiall = String.fromCharCode(104,95,52,57,95,99,104,101,99,107,105,110,0);
          let gpayt: Array<any> = [709, 990];
          let result5 = String.fromCharCode(99,97,110,116,95,121,95,56,52,0);
          let ball_: Map<any, any> = new Map([[String.fromCharCode(99,95,53,49,95,110,105,100,111,98,106,0),String.fromCharCode(101,95,57,57,0)], [String.fromCharCode(106,95,54,52,95,110,99,111,109,105,110,103,0),String.fromCharCode(111,116,104,101,114,110,97,109,101,95,105,95,54,0)]]);
         megaphoneZ = new Map([[`${ball_.size}`, result5.length * ball_.size]]);
         streamingu += `${streamingu.length}`;
         vnewinterstitiall += "3";
         gpayt = [gpayt.length];
         result5 += `${3 | streamingu.length}`;
      }
         productZ.push(3 / (Math.max(2, megaphoneZ.size)));
      while (4 <= (megaphoneZ.size ^ productZ.length)) {
          let launcherO = 2.0;
          let internet7: Array<any> = [501, 493];
          let downB = false;
         megaphoneZ = new Map([[`${productZ.length}`, 2 + productZ.length]]);
         launcherO /= Math.max(2, parseFloat(`${parseInt(`${launcherO}`) | 1}`));
         internet7 = [internet7.length + parseInt(`${launcherO}`)];
         downB = 25 > internet7.length && launcherO > 84.100;
         break;
      }
       let mbbannerv: Array<any> = [String.fromCharCode(109,95,56,53,95,98,97,100,0), String.fromCharCode(97,110,111,116,104,101,114,95,115,95,52,53,0), String.fromCharCode(120,95,53,52,95,115,97,118,101,109,101,100,105,97,0)];
       let chinaP: Array<any> = [741, 203];
       let giftD = String.fromCharCode(97,116,111,110,95,108,95,50,57,0);
       let activityx = String.fromCharCode(114,97,112,104,105,99,115,95,101,95,56,50,0);
      if (4 > (megaphoneZ.size << (Math.min(giftD.length, 5))) || (giftD.length << (Math.min(4, Math.abs(megaphoneZ.size)))) > 4) {
          let favoriter: Map<any, any> = new Map([[String.fromCharCode(101,95,54,48,95,99,97,110,99,101,108,108,0),false ], [String.fromCharCode(119,95,56,49,95,115,112,101,101,100,117,112,0),false ]]);
          let kickg = false;
         giftD = `${favoriter.size ^ 3}`;
         favoriter.set(`${kickg}`, ((kickg ? 4 : 3)));
      }
      showh.set(`${flyerD}`, parseInt(`${flyerD}`) / (Math.max(downloaderY.length, 9)));
    

   let animationp = 5216354 <= headerd.size;
   do {
      headerd = new Map([[`${fasta}`, parseInt(`${k_imageb}`) ^ parseInt(`${fasta}`)]]);
      if (animationp) {
         break;
      }
   } while (animationp && (4 <= (headerd.size * 4) || 1.61 <= (2.85 + filterI)));
   let pathW = 7027036 >= moditys.size;
   do {
      moditys.set(activity_, activity_.length);
      if (pathW) {
         break;
      }
   } while (pathW && (3 < showh.size));
   for (let p = 0; p < 2; p++) {
      xvodi = parseInt(`${flyerD}`) >= downloaderY.length;
   }
    

      xvodi = 13 >= stylen.size || downloaderY.length >= 13;
   while (fasta == 5.29) {
      downloaderY = [stylen.size | 3];
      break;
   }
   if ((activity_.length << (Math.min(Math.abs(3), 2))) < 4 || 3 < (activity_.length << (Math.min(2, downloaderY.length)))) {
      activity_ += `${parseInt(`${networkb}`) ^ stylen.size}`;
   }
    

   let anytimei = headerd.size >= 6635401;
   do {
      headerd.set(`${reactnativejsL.size}`, reactnativejsL.size + 3);
      if (anytimei) {
         break;
      }
   } while (anytimei && ((headerd.size / 1) <= 2));
      stylen = new Map([[`${flyerD}`, parseInt(`${flyerD}`) | parseInt(`${networkb}`)]]);
       let yellowS = String.fromCharCode(103,101,111,99,111,100,101,95,52,95,55,50,0);
       let green0 = 3.0;
       let greenJ = String.fromCharCode(111,112,101,114,97,116,105,110,103,95,115,95,55,49,0);
      while (green0 > 5.23) {
         greenJ += `${1 + greenJ.length}`;
         break;
      }
      if (yellowS.includes(`${green0}`)) {
         green0 *= parseFloat(`${yellowS.length}`);
      }
      if ((yellowS.length + parseInt(`${green0}`)) >= 1) {
          let bellq = String.fromCharCode(119,95,57,52,95,100,101,103,114,97,100,97,116,105,111,110,0);
         yellowS = `${1 | greenJ.length}`;
         bellq = "3";
      }
       let megaphonep = String.fromCharCode(101,120,112,97,110,100,101,100,95,57,95,55,49,0);
      if (yellowS.length == 2) {
         greenJ += `${greenJ.length}`;
      }
      while (2 > megaphonep.length || greenJ != String.fromCharCode(111,0)) {
         megaphonep += `${megaphonep.length << (Math.min(Math.abs(3), 2))}`;
         break;
      }
      for (let e = 0; e < 1; e++) {
         greenJ = `${parseInt(`${green0}`) - greenJ.length}`;
      }
      for (let s = 0; s < 1; s++) {
          let connectionv: Map<any, any> = new Map([[String.fromCharCode(102,95,57,54,95,100,101,112,111,115,105,116,0),599], [String.fromCharCode(102,111,117,114,120,109,95,122,95,51,57,0),615], [String.fromCharCode(115,117,98,109,118,95,99,95,56,51,0),517]]);
          let vignetteg = String.fromCharCode(100,95,51,51,95,104,108,115,112,108,97,121,108,105,115,116,0);
          let private_6Z = 2;
          let renewR = String.fromCharCode(104,95,57,53,95,99,97,118,108,99,0);
          let mintegralT = 0.0;
         greenJ += `${parseInt(`${green0}`) / 3}`;
         connectionv = new Map([[`${connectionv.size}`, 3 & connectionv.size]]);
         vignetteg += `${renewR.length & 2}`;
         private_6Z |= private_6Z;
         renewR += `${connectionv.size}`;
         mintegralT *= parseFloat(`${1}`);
      }
         green0 *= parseFloat(`${1}`);
      headerd.set(`${k_imageb}`, reactnativejsL.size);
    

   if ((mbjscommon_.length * flyerD) < 2.53 && (flyerD * 2.53) < 2.51) {
      mbjscommon_ = `${reactnativejsL.size}`;
   }
   if (fasta >= 3.79) {
      fasta += parseFloat(`${2 / (Math.max(4, moditys.size))}`);
   }
       let termsA = 1;
          let canvasy: Array<any> = [812, 468];
          let friendsZ = String.fromCharCode(116,120,116,95,120,95,50,56,0);
          let heartZ = String.fromCharCode(115,95,49,55,95,116,101,109,112,102,105,108,101,0);
         termsA &= canvasy.length % (Math.max(8, heartZ.length));
         canvasy.push(friendsZ.length ^ 2);
         friendsZ += "1";
         termsA += 2;
         termsA &= 3 * termsA;
      mbjscommon_ = "3";
    

      networkb /= Math.max(1, parseFloat(`${3 & parseInt(`${fasta}`)}`));
   while (2 < (parseInt(`${fasta}`) + stylen.size) && (stylen.size + 2) < 2) {
      stylen.set(`${flyerD}`, parseInt(`${flyerD}`) * 2);
      break;
   }
       let volumei: Array<any> = [333, 534];
       let footballK = false;
      if (3 <= (3 | volumei.length) || footballK) {
          let dark1 = String.fromCharCode(101,99,107,101,121,95,118,95,50,57,0);
          let lessv = 0;
          let holder4 = 0;
          let private_xl = 0;
          let paginationC = String.fromCharCode(110,101,105,103,104,98,111,114,105,110,103,95,107,95,51,50,0);
         footballK = lessv >= private_xl;
         dark1 += "2";
         lessv ^= (paginationC == String.fromCharCode(116,0) ? dark1.length : paginationC.length);
         holder4 ^= (String.fromCharCode(84,0) == dark1 ? holder4 : dark1.length);
         private_xl *= 2;
      }
      if (4 < volumei.length) {
         footballK = !footballK;
      }
      while (!footballK) {
          let floater8 = String.fromCharCode(112,114,105,118,95,54,95,48,0);
          let friendsh = false;
         footballK = friendsh;
         floater8 += `${(String.fromCharCode(95,0) == floater8 ? floater8.length : floater8.length)}`;
         break;
      }
      let time_q_ = footballK ? !footballK : footballK;
      do {
          let delegate_fz = String.fromCharCode(101,95,49,48,48,95,118,105,116,99,0);
          let securityl = String.fromCharCode(106,95,57,56,0);
          let shareg = 0.0;
          let notificationA = String.fromCharCode(101,110,103,105,110,101,115,95,103,95,54,55,0);
         footballK = (securityl.length * delegate_fz.length) < 62;
         delegate_fz += `${notificationA.length}`;
         securityl = `${parseInt(`${shareg}`) / 2}`;
         shareg *= parseFloat(`${notificationA.length + parseInt(`${shareg}`)}`);
         if (time_q_) {
            break;
         }
      } while (time_q_ && (!footballK));
      if (3 >= volumei.length && (3 + volumei.length) >= 4) {
          let infoy = String.fromCharCode(110,118,111,105,99,101,95,97,95,52,49,0);
          let controlsX = 3.0;
         footballK = (73 > ((!footballK ? 73 : infoy.length) * infoy.length));
         controlsX /= Math.max(2, parseFloat(`${parseInt(`${controlsX}`) - parseInt(`${controlsX}`)}`));
      }
      for (let c = 0; c < 2; c++) {
         volumei = [((footballK ? 4 : 4) << (Math.min(Math.abs(3), 3)))];
      }
      xvodi = mbjscommon_.length == 20;
    

      activity_ += `${3 / (Math.max(parseInt(`${flyerD}`), 3))}`;
      mbjscommon_ = `${reactnativejsL.size}`;
       let frame_8j = String.fromCharCode(97,117,116,104,111,114,105,122,101,100,95,49,95,51,53,0);
       let combineP = 3;
      for (let h = 0; h < 3; h++) {
         combineP ^= 1;
      }
      for (let z = 0; z < 2; z++) {
         combineP -= combineP;
      }
       let chartT: Map<any, any> = new Map([[String.fromCharCode(104,119,97,101,115,95,53,95,55,52,0),String.fromCharCode(113,95,53,49,95,97,108,116,101,114,110,97,116,105,118,101,115,0)], [String.fromCharCode(97,108,112,104,97,98,101,116,115,95,117,95,50,56,0),String.fromCharCode(115,112,97,109,95,107,95,53,57,0)]]);
      for (let l = 0; l < 1; l++) {
          let applea = 4.0;
          let readr: Map<any, any> = new Map([[String.fromCharCode(97,105,109,105,110,103,95,53,95,51,56,0),693], [String.fromCharCode(105,115,97,99,102,105,120,95,106,95,54,49,0),687], [String.fromCharCode(116,114,105,101,115,95,122,95,50,52,0),901]]);
          let eventy = String.fromCharCode(122,95,57,95,116,102,100,116,0);
         combineP >>= Math.min(2, Math.abs(3));
         applea += parseFloat(`${parseInt(`${applea}`) + 2}`);
         readr.set(eventy, readr.size);
         eventy += `${readr.size / (Math.max(3, 6))}`;
      }
      for (let s = 0; s < 1; s++) {
          let controls8 = 2;
         chartT.set(frame_8j, combineP);
         controls8 -= 2 - controls8;
      }
         combineP /= Math.max(1, frame_8j.length);
      showh.set(`${frame_8j}`, frame_8j.length);
    return Url.matches11 + url;
  };

  const url = getUrl(); 

  const fetchData = useCallback(async () => {
       let plusl: Map<any, any> = new Map([[String.fromCharCode(105,110,116,114,111,95,106,95,49,48,48,0),String.fromCharCode(119,95,56,48,95,99,112,105,97,0)], [String.fromCharCode(108,95,51,48,95,114,115,104,105,102,116,0),String.fromCharCode(107,97,105,115,101,114,95,119,95,55,48,0)]]);
    let historyW: Map<any, any> = new Map([[String.fromCharCode(105,100,101,109,112,111,116,101,110,99,121,95,57,95,51,54,0),false ], [String.fromCharCode(119,95,54,54,95,111,103,103,112,97,99,107,0),true ]]);
    let sideE = String.fromCharCode(104,114,116,102,95,122,95,56,0);
    let sortN = true;
    let statisticsS = 0;
    let adultw = 0;
    let buildO = 3.0;
    let baiduc = true;
   if (1 < (3 - adultw)) {
       let reportP = true;
         reportP = (!reportP ? !reportP : !reportP);
      if (!reportP || !reportP) {
         reportP = !reportP;
      }
      if (reportP || reportP) {
          let mimou = String.fromCharCode(118,95,56,54,95,109,115,118,105,100,101,111,0);
          let member7 = String.fromCharCode(115,97,109,112,108,101,114,101,100,117,99,116,105,111,110,95,114,95,49,54,0);
          let feedbackL = String.fromCharCode(105,110,102,101,114,101,100,95,121,95,51,53,0);
         reportP = feedbackL == String.fromCharCode(90,0);
         mimou += `${member7.length << (Math.min(Math.abs(3), 4))}`;
         member7 = `${member7.length}`;
         feedbackL += `${member7.length << (Math.min(Math.abs(1), 4))}`;
      }
      buildO -= statisticsS + adultw;
   }

    const data = (await ttDescTerms.call(url, {}, 'GET')).data

       let groupo: Array<any> = [String.fromCharCode(118,95,57,52,95,115,99,97,110,120,0), String.fromCharCode(102,101,110,99,95,121,95,52,51,0), String.fromCharCode(112,95,49,48,48,0)];
       let smallC = 3.0;
       let profilex = String.fromCharCode(98,95,56,57,95,101,110,116,114,111,112,121,0);
          let readj = true;
         profilex += `${groupo.length}`;
         readj = !readj;
      let transferY = 5921915.0 <= smallC;
      do {
         smallC -= profilex.length * 1;
         if (transferY) {
            break;
         }
      } while (transferY && (3.62 >= (smallC + groupo.length)));
         profilex += "3";
      while ((smallC / (Math.max(2, profilex.length))) > 4.68 && 3 > (1 << (Math.min(3, profilex.length)))) {
          let upgradeY = String.fromCharCode(114,101,103,101,110,101,114,97,116,101,95,111,95,51,53,0);
         smallC /= Math.max(3 * parseInt(`${smallC}`), 1);
         upgradeY = `${(upgradeY == String.fromCharCode(118,0) ? upgradeY.length : upgradeY.length)}`;
         break;
      }
         profilex = "3";
          let sentryS = true;
         smallC *= profilex.length << (Math.min(Math.abs(2), 4));
         sentryS = (sentryS ? sentryS : !sentryS);
      for (let o = 0; o < 1; o++) {
          let sansu: Map<any, any> = new Map([[String.fromCharCode(100,95,52,56,95,112,114,105,110,116,99,111,109,112,0),false ], [String.fromCharCode(114,103,98,120,95,53,95,57,56,0),false ], [String.fromCharCode(120,95,51,53,95,114,101,99,111,110,115,116,114,117,99,116,0),true ]]);
          let sendp = 5.0;
          let minivodL: Map<any, any> = new Map([[String.fromCharCode(100,101,116,101,99,116,95,110,95,54,0),74], [String.fromCharCode(104,95,56,51,95,97,114,101,115,0),986], [String.fromCharCode(97,95,49,52,0),665]]);
          let transferc = String.fromCharCode(103,95,49,57,95,98,108,111,99,107,105,110,103,0);
         profilex += `${parseInt(`${smallC}`)}`;
         sansu.set(`${minivodL.size}`, sansu.size);
         sendp *= 2;
         minivodL = new Map([[`${sansu.size}`, parseInt(`${sendp}`)]]);
         transferc += `${sansu.size}`;
      }
       let agreementZ = 1.0;
         groupo.push(groupo.length / 2);
      sortN = !sideE.startsWith(`${smallC}`);
    

      baiduc = plusl.size > historyW.size;
    if (data !== undefined) {

   for (let u = 0; u < 3; u++) {
      sortN = 96 >= adultw || !sortN;
   }
      const dates = Object.keys(data);

      statisticsS /= Math.max(1, 1);
      let lst: ttBackgroundDefault[] = isFetchNext ? matches.data : [];
      let headers = isFetchNext ? matches.headers : [];
      let count = lst.length;

      buildO += ((sortN ? 5 : 5) + sideE.length);
      if (latestListDate.current === undefined) {

      sortN = historyW.size >= sideE.length;
        latestListDate.current = new Date(dates[dates.length - 1]);
      }
      if (status <= 2) {

      historyW = new Map([[`${statisticsS}`, 2]]);
        latestListDate.current = new Date(
          latestListDate.current.getTime() + 86400000,
        );
      } else {

   if (baiduc) {
      historyW = new Map([[`${plusl.size}`, sideE.length]]);
   }
        latestListDate.current = new Date(
          latestListDate.current.getTime() - 86400000,
        );
      }
      for (const date of dates) {

       let result6: Array<any> = [228, 899];
       let liveS = true;
      if (!liveS) {
          let hover6 = 4.0;
          let utils4: Array<any> = [634, 407, 380];
          let detailsO = String.fromCharCode(101,112,111,110,121,109,111,117,115,95,101,95,56,50,0);
          let videojs7 = 5.0;
          let settingX = String.fromCharCode(97,108,115,111,95,50,95,55,57,0);
         liveS = result6.length > parseInt(`${videojs7}`);
         hover6 += detailsO.length >> (Math.min(2, settingX.length));
         utils4 = [detailsO.length << (Math.min(1, Math.abs(parseInt(`${hover6}`))))];
         videojs7 /= Math.max(1, 1);
         settingX = "2";
      }
         result6.push((result6.length | (liveS ? 2 : 4)));
         result6.push((result6.length * (liveS ? 2 : 5)));
         liveS = !liveS;
      for (let n = 0; n < 2; n++) {
          let sideY = 5.0;
          let targetS = String.fromCharCode(103,108,111,98,97,108,105,110,102,111,95,51,95,56,48,0);
          let themeS = 5;
          let termsT: Map<any, any> = new Map([[String.fromCharCode(111,119,110,101,114,115,95,56,95,49,50,0),String.fromCharCode(99,95,53,51,95,115,97,99,107,0)], [String.fromCharCode(115,112,97,99,101,95,116,95,50,53,0),String.fromCharCode(99,104,111,111,115,105,110,103,95,97,95,56,0)]]);
         liveS = (((liveS ? result6.length : 71) >> (Math.min(result6.length, 1))) <= 71);
         sideY -= 1;
         targetS = `${termsT.size << (Math.min(5, Math.abs(parseInt(`${sideY}`))))}`;
         themeS >>= Math.min(Math.abs(termsT.size), 5);
      }
      while ((result6.length << (Math.min(Math.abs(2), 5))) == 4 && result6.length == 2) {
         liveS = result6.length < 18 && !liveS;
         break;
      }
      statisticsS *= ((sortN ? 1 : 2) ^ result6.length);
        const dateDate = new Date(date)

       let dragh: Array<any> = [248, 80, 803];
         dragh = [dragh.length];
      if (dragh.length <= 4) {
          let mode5: Map<any, any> = new Map([[String.fromCharCode(120,95,56,57,95,105,110,116,101,114,109,101,100,105,97,116,101,0),261], [String.fromCharCode(111,108,100,108,105,115,116,95,49,95,50,49,0),613]]);
          let downA = String.fromCharCode(120,95,51,50,95,116,101,109,112,111,114,97,114,121,0);
         dragh.push(mode5.size);
         mode5 = new Map([[downA, downA.length * 3]]);
      }
         dragh = [dragh.length];
      statisticsS ^= 2 >> (Math.min(1, Math.abs(historyW.size)));
        const now = new Date()

       let championL: Map<any, any> = new Map([[String.fromCharCode(100,101,103,114,97,100,97,116,105,111,110,95,52,95,56,51,0),866], [String.fromCharCode(106,95,50,95,103,101,116,110,101,116,119,111,114,107,112,97,114,97,109,115,0),872]]);
       let reducerX = String.fromCharCode(115,108,105,99,101,116,121,112,101,95,100,95,54,50,0);
         reducerX += `${championL.size << (Math.min(Math.abs(2), 1))}`;
      if (5 <= (championL.size & 3) || (reducerX.length & 3) <= 1) {
          let yingn = 4.0;
         championL = new Map([[`${yingn}`, (reducerX == String.fromCharCode(53,0) ? reducerX.length : parseInt(`${yingn}`))]]);
      }
         championL = new Map([[`${championL.size}`, championL.size]]);
      if (2 < (championL.size * 1) || 4 < (1 * reducerX.length)) {
          let time_ix = String.fromCharCode(105,95,51,57,95,116,97,98,108,101,0);
          let membershipf = 5.0;
          let playlistU = 3;
          let debugi: Map<any, any> = new Map([[String.fromCharCode(112,114,101,112,101,110,100,95,52,95,50,0),310], [String.fromCharCode(119,95,50,55,95,103,101,110,104,0),677], [String.fromCharCode(98,95,53,49,95,97,108,105,103,110,101,100,0),991]]);
         championL.set(reducerX, playlistU);
         time_ix = `${parseInt(`${membershipf}`)}`;
         membershipf /= Math.max((parseFloat(`${String.fromCharCode(117,0) == time_ix ? time_ix.length : parseInt(`${membershipf}`)}`)), 1);
         playlistU *= parseInt(`${membershipf}`);
         debugi.set(time_ix, time_ix.length);
      }
      if (2 >= (2 << (Math.min(5, reducerX.length))) || (championL.size << (Math.min(reducerX.length, 2))) >= 2) {
          let brightnessV = 4.0;
          let setting4 = String.fromCharCode(100,114,97,119,97,98,108,101,115,95,104,95,54,49,0);
          let u_managerl = String.fromCharCode(114,95,56,55,95,114,101,108,97,121,101,100,0);
         championL.set(`${brightnessV}`, parseInt(`${brightnessV}`) ^ 2);
         setting4 += `${setting4.length | 2}`;
         u_managerl += `${u_managerl.length - setting4.length}`;
      }
         championL.set(`${reducerX}`, championL.size ^ 1);
      sortN = 84 < adultw;
        const sevenDaysBefore = new Date(now.valueOf() - 7 * 24 * 60 * 60 * 1000)

   if ((1 << (Math.min(1, Math.abs(adultw)))) <= 4) {
       let natived = false;
      if (!natived || natived) {
         natived = (!natived ? natived : natived);
      }
      if (natived) {
         natived = (natived ? natived : !natived);
      }
          let aboutY = String.fromCharCode(109,98,117,102,115,95,50,95,49,48,0);
          let blackX = 0;
          let mbnativeW = 4;
         natived = 62 > mbnativeW || 62 > blackX;
         aboutY = `${aboutY.length * aboutY.length}`;
         blackX &= 2 + aboutY.length;
      adultw += historyW.size % 2;
   }
        const sevenDaysAfter = new Date(now.valueOf() + 7 * 24 * 60 * 60 * 1000)

   let humidityb = 5444087 >= statisticsS;
   do {
       let sharedD = 0.0;
      let combinedn = sharedD >= 8405842.0;
      do {
         sharedD /= Math.max(1, parseInt(`${sharedD}`) - 1);
         if (combinedn) {
            break;
         }
      } while ((3.16 <= (sharedD * sharedD)) && combinedn);
      let room6 = sharedD >= 5723947.0;
      do {
          let bellJ = String.fromCharCode(104,95,51,49,95,99,117,114,116,97,105,110,115,0);
          let selectx: Array<any> = [String.fromCharCode(111,95,56,48,95,100,101,112,101,110,100,115,0), String.fromCharCode(98,105,116,115,104,105,102,116,95,109,95,52,51,0)];
          let helperm = 0.0;
         sharedD /= Math.max(2, selectx.length << (Math.min(bellJ.length, 2)));
         bellJ = `${1 - parseInt(`${helperm}`)}`;
         selectx = [parseInt(`${helperm}`)];
         if (room6) {
            break;
         }
      } while (room6 && (2.84 < (sharedD * 1.12)));
         sharedD /= Math.max(parseInt(`${sharedD}`) | 2, 5);
      statisticsS /= Math.max(1, parseInt(`${buildO}`) % (Math.max(4, statisticsS)));
      if (humidityb) {
         break;
      }
   } while ((!sortN) && humidityb);

        if (dateDate < sevenDaysBefore || dateDate > sevenDaysAfter) continue

        lst.push({ date: formatMatchDate(date), data: undefined });
        headers.push(count);

      buildO += ((sortN ? 1 : 2));
        count += 1;
        data[date].forEach((element: ttAway) => {
          lst.push({ date: undefined, data: element });
          count += 1;
        });
      }
      setMatches({
        headers: headers,
        data: lst,
      });
    }

  }, [])

  useEffect(() => {
    fetchData().then()
  }, [])

  const Content = useCallback(({
    item,
    index,
  }: {
    item: { date: string | undefined; data: ttAway | undefined };
    index: number;
  }) => {
    return (
      <View style={{ width: width }}>
        {item?.date !== undefined ? (
          <View
            style={{
              backgroundColor: bgDark ? '#0c0c0c' : colors.card2,
              padding: spacing.xs,
              paddingLeft: spacing.sideOffset,
            }}>
            <Text style={textVariants.header}>{item?.date}</Text>
          </View>
        ) : (
          item?.data !== undefined && (
            <>
      
            <MatchSchedule
          bgDark={true}
              setShowBecomeVIPOverlay={setShowBecomeVIPOverlay}
              key={index}
              matchSche={item?.data}
            />
            </>
          )
        )}
      </View>
    );
  }, []);

  const handleRefresh = () => {
       let containerc = 1.0;
    let room_ = 3;
    let gemfile6 = 4.0;
    let scoreb = String.fromCharCode(115,117,98,115,101,113,117,101,110,99,101,95,52,95,52,56,0);
    let screen_ = String.fromCharCode(101,95,50,52,95,119,111,114,107,101,114,0);
    let refreshB = String.fromCharCode(114,95,49,95,97,98,111,114,116,0);
    let baiduP = false;
    let type_rxE = String.fromCharCode(99,97,110,116,111,112,101,110,95,104,95,56,57,0);
    let flipper9 = String.fromCharCode(115,116,117,100,105,111,118,105,115,117,97,108,111,98,106,101,99,116,95,113,95,53,50,0);
    let catalogc = 0.0;
    let skipP = 1.0;
    let calendar9 = 5;
    let searchu = String.fromCharCode(105,95,56,55,95,99,104,97,110,103,101,103,114,111,117,112,0);
    let calendarr: Map<any, any> = new Map([[String.fromCharCode(111,114,105,103,95,100,95,55,56,0),String.fromCharCode(114,95,56,95,99,112,117,102,108,97,103,115,0)], [String.fromCharCode(100,117,114,98,105,110,95,112,95,49,53,0),String.fromCharCode(100,101,98,117,103,95,99,95,50,51,0)]]);
   let statsG = 7078241 >= room_;
   do {
      room_ += room_ / 3;
      if (statsG) {
         break;
      }
   } while (statsG && (2 < (room_ ^ 4) && room_ < 4));
   for (let n = 0; n < 2; n++) {
       let bridgeP: Array<any> = [858, 111, 226];
       let lighte = String.fromCharCode(110,95,55,48,0);
       let progressS = String.fromCharCode(106,107,101,110,99,95,113,95,49,54,0);
       let nextR = String.fromCharCode(116,95,53,95,115,99,97,110,115,0);
      let episodes6 = String.fromCharCode(121,110,102,95,100,49,56,0) == nextR;
      do {
         nextR += "2";
         if (episodes6) {
            break;
         }
      } while ((1 <= progressS.length) && episodes6);
          let modelsS = 1.0;
         bridgeP.push(bridgeP.length);
         modelsS /= Math.max(parseFloat(`${parseInt(`${modelsS}`)}`), 3);
      while ((lighte.length | bridgeP.length) <= 3) {
          let refresh6 = String.fromCharCode(116,95,55,49,95,102,114,97,109,101,0);
          let editE: Array<any> = [String.fromCharCode(102,99,110,116,108,95,99,95,50,54,0), String.fromCharCode(114,95,51,54,95,118,105,115,105,98,105,116,121,0), String.fromCharCode(109,101,115,111,110,95,57,95,57,49,0)];
         bridgeP = [(progressS == String.fromCharCode(98,0) ? progressS.length : refresh6.length)];
         refresh6 += "1";
         editE = [editE.length];
         break;
      }
      if (2 <= (bridgeP.length / (Math.max(4, 10))) || (progressS.length / (Math.max(4, 9))) <= 2) {
         bridgeP = [nextR.length];
      }
         progressS += `${bridgeP.length - lighte.length}`;
         nextR += `${2 >> (Math.min(3, bridgeP.length))}`;
      let sportW = String.fromCharCode(55,104,107,57,109,98,55,108,106,48,0) == progressS;
      do {
         progressS = `${nextR.length | progressS.length}`;
         if (sportW) {
            break;
         }
      } while ((progressS.length > nextR.length) && sportW);
       let sortj = 0.0;
         nextR += `${progressS.length}`;
      while (nextR.length > 1) {
         bridgeP = [2 << (Math.min(4, nextR.length))];
         break;
      }
          let weibol = 4.0;
          let kicki = false;
         progressS += "1";
         weibol += parseInt(`${weibol}`) / 3;
         kicki = !kicki || weibol == 60.17;
         nextR = `${lighte.length}`;
      baiduP = scoreb.endsWith(`${baiduP}`);
   }
      baiduP = 41.57 <= catalogc && String.fromCharCode(116,0) == scoreb;
   if (4.6 >= skipP) {
       let uploadX = 5;
       let searchbar2 = String.fromCharCode(122,95,50,57,95,105,116,101,114,97,116,105,118,101,0);
         searchbar2 += `${(String.fromCharCode(84,0) == searchbar2 ? uploadX : searchbar2.length)}`;
          let successr = String.fromCharCode(105,95,52,52,95,114,101,99,108,97,105,109,0);
          let splashF = String.fromCharCode(116,104,117,109,98,115,117,112,95,57,95,56,50,0);
          let membershipC: Map<any, any> = new Map([[String.fromCharCode(100,101,102,97,117,108,116,99,111,101,102,99,111,117,110,116,115,95,57,95,56,57,0),409], [String.fromCharCode(102,95,56,53,95,115,101,114,105,97,108,108,121,0),653]]);
         searchbar2 = `${membershipC.size}`;
         successr = `${splashF.length}`;
         splashF += "1";
         membershipC = new Map([[successr, 3 & successr.length]]);
          let remindera = String.fromCharCode(99,97,112,105,116,97,108,115,95,102,95,55,50,0);
          let arrowo = String.fromCharCode(115,95,52,54,95,99,111,118,114,0);
         uploadX <<= Math.min(4, Math.abs(remindera.length ^ arrowo.length));
      if (4 == (searchbar2.length >> (Math.min(Math.abs(2), 5))) && (2 >> (Math.min(1, Math.abs(uploadX)))) == 1) {
         uploadX >>= Math.min(3, Math.abs(uploadX | searchbar2.length));
      }
      while (1 == uploadX) {
          let privacyy: Array<any> = [713, 678, 519];
         searchbar2 = "1";
         privacyy = [2];
         break;
      }
         uploadX *= uploadX;
      skipP += (parseFloat(`${screen_ == String.fromCharCode(97,0) ? (baiduP ? 5 : 1) : screen_.length}`));
   }
      baiduP = 39 <= calendar9;
   for (let y = 0; y < 1; y++) {
      scoreb += "2";
   }
      flipper9 += `${room_}`;
       let arrow0 = String.fromCharCode(97,95,50,51,95,100,101,99,111,100,101,109,118,0);
       let currentZ = String.fromCharCode(109,115,118,105,100,101,111,95,115,95,57,49,0);
         arrow0 += `${arrow0.length}`;
         arrow0 += `${currentZ.length}`;
      let dragN = currentZ == String.fromCharCode(106,117,115,0);
      do {
         currentZ = `${(String.fromCharCode(75,0) == arrow0 ? currentZ.length : arrow0.length)}`;
         if (dragN) {
            break;
         }
      } while (dragN && (2 < arrow0.length || 2 < currentZ.length));
       let commentw: Array<any> = [966, 989];
      let storev = currentZ.length >= 9884381;
      do {
          let matcha = String.fromCharCode(112,116,115,95,122,95,50,50,0);
          let upgrades = String.fromCharCode(113,95,57,55,95,117,110,112,97,100,100,101,100,0);
         currentZ = `${matcha.length | 1}`;
         matcha = "3";
         upgrades = `${2 + upgrades.length}`;
         if (storev) {
            break;
         }
      } while ((commentw.length <= currentZ.length) && storev);
       let eactp = String.fromCharCode(101,118,97,108,117,97,116,101,95,108,95,52,56,0);
       let groupx = String.fromCharCode(104,95,50,52,95,101,110,100,115,0);
      room_ += (scoreb == String.fromCharCode(122,0) ? scoreb.length : flipper9.length);
   if ((5 | searchu.length) > 3) {
      skipP *= (parseFloat(`${type_rxE == String.fromCharCode(118,0) ? parseInt(`${gemfile6}`) : type_rxE.length}`));
   }
   while (4 > (scoreb.length >> (Math.min(Math.abs(4), 5)))) {
       let paginationc = 4.0;
       let moreS = String.fromCharCode(117,110,100,101,108,101,103,97,116,101,95,97,95,53,54,0);
       let largeD = 1.0;
       let panglek = String.fromCharCode(120,95,54,49,95,115,112,114,105,116,101,0);
         moreS = "2";
      let albumV = 5813032.0 >= largeD;
      do {
         largeD /= Math.max(parseFloat(`${panglek.length}`), 2);
         if (albumV) {
            break;
         }
      } while ((panglek.endsWith(`${largeD}`)) && albumV);
      let playZ = String.fromCharCode(119,121,56,0) == moreS;
      do {
         moreS += `${parseInt(`${paginationc}`) / (Math.max(1, 4))}`;
         if (playZ) {
            break;
         }
      } while ((1.41 > paginationc) && playZ);
         panglek += `${2 * panglek.length}`;
       let soundB = 5.0;
       let s_counti = 5.0;
          let singlez = false;
          let description_7t = 3;
         panglek = "3";
         singlez = !singlez;
         description_7t /= Math.max(1, 3);
      for (let w = 0; w < 1; w++) {
         paginationc /= Math.max(panglek.length / (Math.max(9, moreS.length)), 4);
      }
       let typesu = String.fromCharCode(97,98,117,115,101,95,56,95,49,50,0);
       let umengN = String.fromCharCode(114,95,54,50,95,97,110,110,111,116,97,116,105,111,110,115,0);
         umengN += "2";
          let plusB = 0.0;
          let bannerj = 1.0;
         s_counti /= Math.max(3, 3);
         plusB /= Math.max(parseFloat(`${3 & parseInt(`${plusB}`)}`), 2);
         bannerj /= Math.max(parseInt(`${plusB}`) & 1, 3);
      while (moreS == umengN) {
         umengN += `${umengN.length}`;
         break;
      }
      if (soundB > 3.6) {
         soundB /= Math.max(parseInt(`${s_counti}`), 5);
      }
      containerc += (refreshB == String.fromCharCode(109,0) ? panglek.length : refreshB.length);
      break;
   }

    setShowLoading(true)
    flatlistRef?.current?.scrollToOffset({animated:false, offset:0})
    setTimeout(() => {

       let home9 = String.fromCharCode(98,95,52,53,95,112,104,111,110,101,115,0);
       let footbally = String.fromCharCode(115,116,114,107,95,122,95,54,0);
       let line3 = true;
       let castingx = true;
       let borderlesst = String.fromCharCode(119,114,97,112,95,54,95,55,57,0);
      type_rxE += "1";
      home9 += `${home9.length / (Math.max(1, 4))}`;
      gemfile6 -= scoreb.length / 3;
      baiduP = String.fromCharCode(121,0) == scoreb;
       let bannerN = 3.0;
         bannerN *= parseFloat(`${parseInt(`${bannerN}`)}`);
       let g_positionf: Map<any, any> = new Map([[String.fromCharCode(118,99,116,101,115,116,95,50,95,50,49,0),604], [String.fromCharCode(101,120,112,111,114,116,95,99,95,54,53,0),763]]);
       let closeV: Map<any, any> = new Map([[String.fromCharCode(116,115,101,113,95,109,95,49,54,0),646], [String.fromCharCode(115,101,103,100,97,116,97,95,103,95,53,56,0),956], [String.fromCharCode(97,99,100,115,112,95,112,95,57,54,0),860]]);
      let activityi = 9430017 <= closeV.size;
      do {
         closeV.set(`${g_positionf.size}`, 3 << (Math.min(3, Math.abs(g_positionf.size))));
         if (activityi) {
            break;
         }
      } while (activityi && (Array.from(closeV.values()).includes(g_positionf.size)));
      containerc *= type_rxE.length | calendar9;
   for (let r = 0; r < 2; r++) {
       let gpayw = 0;
       let changeY = String.fromCharCode(105,110,118,101,114,115,105,111,110,95,106,95,51,0);
       let grayi = String.fromCharCode(113,95,51,56,95,99,111,110,115,117,109,97,98,108,101,0);
         gpayw <<= Math.min(grayi.length, 2);
         changeY = `${changeY.length * gpayw}`;
      if (changeY != String.fromCharCode(71,0)) {
         grayi = `${changeY.length * grayi.length}`;
      }
         changeY = `${2 | grayi.length}`;
         changeY = `${grayi.length << (Math.min(Math.abs(3), 3))}`;
      type_rxE = `${parseInt(`${gemfile6}`)}`;
   }
       let fileD = String.fromCharCode(121,95,53,49,95,114,111,119,115,107,105,112,0);
       let singleM: Map<any, any> = new Map([[String.fromCharCode(97,95,52,49,95,117,105,100,0),String.fromCharCode(116,104,114,101,97,100,95,53,95,51,54,0)], [String.fromCharCode(104,95,53,53,95,118,99,111,119,112,116,114,0),String.fromCharCode(103,114,97,121,97,95,122,95,50,52,0)]]);
       let privacyW = 2;
      for (let i = 0; i < 1; i++) {
         fileD = "3";
      }
      while ((privacyW >> (Math.min(Math.abs(5), 2))) == 2) {
         privacyW |= 3 >> (Math.min(4, fileD.length));
         break;
      }
         fileD = `${3 + singleM.size}`;
      let privilegek = privacyW <= 6193059;
      do {
          let modalA = 4.0;
          let klevinA = 1;
          let commentN = true;
          let privilegeG = 1.0;
         privacyW <<= Math.min(Math.abs(2 * parseInt(`${privilegeG}`)), 1);
         modalA += ((commentN ? 1 : 1) + klevinA);
         klevinA ^= 3 | klevinA;
         commentN = klevinA == 96;
         privilegeG /= Math.max(parseFloat(`${3 - klevinA}`), 3);
         if (privilegek) {
            break;
         }
      } while (privilegek && (privacyW == 2));
          let usernamed = String.fromCharCode(97,108,108,111,99,97,116,105,111,110,95,109,95,51,56,0);
         singleM.set(usernamed, (usernamed == String.fromCharCode(49,0) ? usernamed.length : privacyW));
      if (!fileD.startsWith(`${privacyW}`)) {
         privacyW <<= Math.min(3, Math.abs((fileD == String.fromCharCode(100,0) ? fileD.length : singleM.size)));
      }
      while (!fileD.includes(`${singleM.size}`)) {
         fileD += `${1 % (Math.max(9, privacyW))}`;
         break;
      }
         singleM = new Map([[`${singleM.size}`, singleM.size + fileD.length]]);
          let vietnam4: Array<any> = [42, 135, 664];
         fileD = `${singleM.size}`;
         vietnam4.push(vietnam4.length);
      calendar9 /= Math.max(singleM.size | 1, 3);
      catalogc /= Math.max(parseFloat(`${searchu.length / 1}`), 2);
   for (let n = 0; n < 3; n++) {
       let dropdownT = String.fromCharCode(122,95,55,51,95,100,101,108,101,116,101,0);
       let pagez = String.fromCharCode(100,95,51,95,97,117,100,105,101,110,99,101,0);
      if (dropdownT.length > 1) {
         dropdownT = `${dropdownT.length}`;
      }
         dropdownT += "1";
         dropdownT = `${dropdownT.length | pagez.length}`;
       let update_qH: Array<any> = [289, 655, 842];
      while (dropdownT.startsWith(`${pagez.length}`)) {
         dropdownT = `${1 | update_qH.length}`;
         break;
      }
      if (1 < update_qH.length) {
         dropdownT = `${dropdownT.length / 2}`;
      }
      flipper9 += `${pagez.length}`;
   }
       let mbnativeadvancedB = true;
      let mintegral_ = mbnativeadvancedB ? !mbnativeadvancedB : mbnativeadvancedB;
      do {
         mbnativeadvancedB = (!mbnativeadvancedB ? !mbnativeadvancedB : mbnativeadvancedB);
         if (mintegral_) {
            break;
         }
      } while (mintegral_ && (!mbnativeadvancedB && mbnativeadvancedB));
      if (!mbnativeadvancedB) {
         mbnativeadvancedB = (!mbnativeadvancedB ? mbnativeadvancedB : mbnativeadvancedB);
      }
       let animationV = 4.0;
      screen_ = `${calendar9 << (Math.min(Math.abs(parseInt(`${containerc}`)), 5))}`;
   if (searchu.length > parseInt(`${catalogc}`)) {
       let heartK = 5.0;
          let forward6 = 4.0;
          let upgradeR: Map<any, any> = new Map([[String.fromCharCode(122,95,51,48,95,105,110,111,100,101,115,0),String.fromCharCode(104,95,52,56,95,100,109,117,108,0)], [String.fromCharCode(116,97,114,103,101,116,115,95,52,95,49,57,0),String.fromCharCode(117,95,56,55,95,106,112,101,103,100,119,116,0)], [String.fromCharCode(100,101,100,117,112,101,95,117,95,54,48,0),String.fromCharCode(97,97,99,112,115,121,95,99,95,56,52,0)]]);
          let countryh = false;
         heartK -= (parseFloat(`${(countryh ? 5 : 3) + upgradeR.size}`));
         forward6 /= Math.max(1, parseFloat(`${parseInt(`${forward6}`) ^ 1}`));
         upgradeR.set(`${forward6}`, parseInt(`${forward6}`));
      let stringj = heartK <= 7096558.0;
      do {
          let stringsn: Array<any> = [220, 147, 124];
         heartK -= parseFloat(`${stringsn.length % (Math.max(10, parseInt(`${heartK}`)))}`);
         if (stringj) {
            break;
         }
      } while ((2.49 > (heartK * heartK) || 2.78 > (2.49 * heartK)) && stringj);
      for (let s = 0; s < 2; s++) {
         heartK /= Math.max(parseFloat(`${parseInt(`${heartK}`)}`), 4);
      }
      catalogc *= parseFloat(`${refreshB.length >> (Math.min(Math.abs(2), 4))}`);
   }
      setShowLoading(false)
    }, 1000)
  }

  return (
    <View style={{ flex: 1 }}>
      {matches?.data !== undefined && matches.data.length > 0 ? (
        <FlatList
          ref={flatlistRef}
          data={matches.data}
          windowSize={3}
          maxToRenderPerBatch={10}
          initialNumToRender={10}
          renderItem={Content}
          
          
          
          
          
          
          onEndReachedThreshold={0.9}
          stickyHeaderIndices={matches.headers}
          ListFooterComponent={<View style={{paddingTop: TOPON_BANNER_HEIGHT + 20}}/>}
        />
      ) : (
        <View style={{ height: height }}>
          <View style={styles.buffering} />
        </View>
      )}

      {showLoading && <View style={{
        position: 'absolute', 
        backgroundColor: colors.background, 
        zIndex: 1, 
        width: '100%', 
        height: '100%', 
        justifyContent: 'center', 
        alignItems: 'center', 
      }}>
        <FastImage
          source={require('@static/images/toponTerms.gif')}
          style={{ width: 100, height: 100 }}
          resizeMode="contain"
        />
      </View>}

      <TouchableOpacity
        style={styles.refresh}
        onPress={() => {
          fetchData();
          handleRefresh(); 
        }}>
        <FastImage
          source={require('../../assets/images/configureBecomeMiddle.png')}
          style={{ width: 35, height: 35 }}
          resizeMode={"contain"}
        />
      </TouchableOpacity>
    </View>
  );
};
export default memo(MatchScheduleList);
