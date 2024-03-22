import React, { memo, useState, useRef, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  FlatList,
  Dimensions,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import styles from './fgl_less_position';
import { TouchableOpacity } from 'react-native';
import { formatMatchDate } from '../../utility/utils';
import { PSmall } from '@redux/fj_prediction_thailand';
import { EALSource } from '../../types/x_home';
import { Url } from '../../middleware/aux_bootsplash_black';
import { useInfiniteQuery } from '@tanstack/react-query';
import LShrink from '../../middleware/i_favorite';
import MatchSchedule from './y_event_sort';
import FastImage from '../../../components/common/gwi_with';
import { TOPON_BANNER_HEIGHT } from '@utility/n_subs_interstitial';

interface XFillButton {
  matchTypeID: number;
  status?: number;
  setShowBecomeVIPOverlay: any;
  bgDark?:boolean
}

type BYCross = {
  date: string | undefined;
  data: EALSource | undefined;
};

type ysp_context = {
  headers: number[];
  data: BYCross[];
};

const MatchScheduleList = ({
  matchTypeID,
  status = -1,
  setShowBecomeVIPOverlay,
  bgDark = false
}: XFillButton) => {
  const { colors, textVariants, spacing } = useTheme();
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  const latestListDate = useRef<Date | undefined>();
  let flatlistRef = useRef();

  const [isFetchNext, setFetchNext] = useState(false);
  const [showLoading, setShowLoading] = useState(false);

  const [matches, setMatches] = useState<ysp_context>({
    headers: [],
    data: [],
  });

  const getUrl = () => {
       let b_titleu = 4.0;
    let stepg: Array<any> = [String.fromCharCode(111,98,106,116,120,116,95,115,95,54,0), String.fromCharCode(115,95,56,48,95,105,108,98,99,102,105,120,0)];
    let anytimeO = 0.0;
    let default_prX = 2.0;
    let rankD = 0.0;
    let models5 = String.fromCharCode(99,111,110,118,101,114,116,101,100,95,119,95,55,50,0);
    let statsp = 1.0;
    let customY = String.fromCharCode(105,110,116,101,103,101,114,115,95,51,95,56,50,0);
    let agreementO: Array<any> = [862, 313];
    let userD = String.fromCharCode(122,95,56,55,95,97,118,105,111,0);
   if ((5.17 + statsp) == 3.77 && 2.40 == (b_titleu + 5.17)) {
      b_titleu *= parseFloat(`${models5.length}`);
   }
   let topici = rankD <= 7080894.0;
   do {
       let agreementr: Array<any> = [430, 950];
       let twitterq: Map<any, any> = new Map([[String.fromCharCode(100,105,97,108,105,110,103,95,112,95,57,52,0),380], [String.fromCharCode(100,101,99,95,57,95,56,48,0),446]]);
       let zhuboq = false;
      let applez = zhuboq ? !zhuboq : zhuboq;
      do {
          let morev = 3;
          let minimizeX = 1.0;
          let strq = String.fromCharCode(121,95,57,53,95,99,121,99,108,101,115,0);
         zhuboq = strq.length > 13 && 92.36 > minimizeX;
         morev |= morev - morev;
         minimizeX -= morev - morev;
         if (applez) {
            break;
         }
      } while (((agreementr.length + 3) < 1) && applez);
          let crossu: Map<any, any> = new Map([[String.fromCharCode(99,104,97,108,108,101,110,103,101,0),692], [String.fromCharCode(104,111,108,108,111,119,95,113,95,57,56,0),45]]);
          let orangeQ = String.fromCharCode(100,105,109,101,110,115,105,111,110,95,52,95,55,48,0);
          let vietnamZ = 1;
         agreementr = [2 & vietnamZ];
         crossu.set(orangeQ, orangeQ.length % (Math.max(1, crossu.size)));
         vietnamZ += 2 >> (Math.min(2, Math.abs(crossu.size)));
      for (let p = 0; p < 1; p++) {
         twitterq = new Map([[`${twitterq.size}`, 1]]);
      }
       let umengv = String.fromCharCode(99,104,97,114,99,111,110,118,95,115,95,53,54,0);
       let mathD = String.fromCharCode(122,95,52,54,95,112,104,111,110,101,0);
         mathD += `${3 * agreementr.length}`;
         agreementr.push((String.fromCharCode(102,0) == umengv ? umengv.length : (zhuboq ? 4 : 1)));
         mathD = `${((zhuboq ? 3 : 5) & 1)}`;
       let serviceG = 5;
       let settings3 = 1;
         twitterq = new Map([[umengv, settings3 | 3]]);
      rankD /= Math.max(1, stepg.length);
      if (topici) {
         break;
      }
   } while (topici && (4.98 <= (3 + anytimeO)));

    let url = '';

   let overL = 8443959.0 <= rankD;
   do {
       let save_ = String.fromCharCode(106,95,52,49,95,99,111,110,115,116,97,110,116,115,0);
       let complete7 = 3.0;
       let disconnectedm = 4.0;
       let feedbackO = String.fromCharCode(108,100,105,115,116,95,55,95,52,51,0);
       let buffer6 = String.fromCharCode(102,111,114,119,97,114,100,101,114,95,50,95,53,57,0);
      for (let y = 0; y < 3; y++) {
          let goal_ = String.fromCharCode(117,95,49,48,95,109,97,116,104,0);
          let floatingl = String.fromCharCode(102,111,114,109,97,116,116,101,114,115,95,106,95,53,55,0);
         disconnectedm /= Math.max(2, 1);
         goal_ += `${floatingl.length}`;
         floatingl += `${floatingl.length << (Math.min(5, goal_.length))}`;
      }
      while (1 >= buffer6.length) {
         buffer6 += `${save_.length}`;
         break;
      }
       let eighteenP = false;
       let clear2 = false;
      let serviceY = feedbackO == String.fromCharCode(120,52,49,109,95,98,55,48,114,0);
      do {
         feedbackO += `${1 * parseInt(`${complete7}`)}`;
         if (serviceY) {
            break;
         }
      } while ((3 < feedbackO.length || !clear2) && serviceY);
       let downloading4 = 1;
       let hovere = 0;
         save_ = `${buffer6.length}`;
      for (let m = 0; m < 3; m++) {
         feedbackO += "1";
      }
      for (let x = 0; x < 1; x++) {
          let windz = String.fromCharCode(117,95,53,55,95,102,114,109,97,0);
          let langkeyP: Array<any> = [696, 673];
         feedbackO = `${windz.length}`;
         windz = `${langkeyP.length}`;
         langkeyP.push(langkeyP.length);
      }
      rankD *= parseInt(`${default_prX}`);
      if (overL) {
         break;
      }
   } while (overL && ((models5.length + rankD) > 1.7 && 1.7 > (rankD + models5.length)));
   if (stepg.includes(statsp)) {
      statsp -= 3 - parseInt(`${rankD}`);
   }
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
    

      rankD -= parseInt(`${anytimeO}`) ^ customY.length;
       let windM = 3.0;
      if ((5.7 / (Math.max(3, windM))) == 3.38 && 5.7 == (windM / (Math.max(windM, 1)))) {
          let giftI = 4;
          let update_wi: Array<any> = [930, 403, 462];
          let greenR: Map<any, any> = new Map([[String.fromCharCode(100,111,119,110,108,111,97,100,95,107,95,56,54,0),224], [String.fromCharCode(116,114,105,109,109,101,100,95,114,95,56,0),682], [String.fromCharCode(108,105,115,116,101,110,105,110,103,95,103,95,51,49,0),32]]);
          let clock0 = 5.0;
         windM -= parseInt(`${clock0}`);
         giftI %= Math.max(update_wi.length >> (Math.min(1, Math.abs(giftI))), 2);
         update_wi.push(3);
         greenR = new Map([[`${greenR.size}`, 3]]);
         clock0 -= update_wi.length;
      }
         windM /= Math.max(5, parseInt(`${windM}`) - parseInt(`${windM}`));
      let groupp = windM >= 8398524.0;
      do {
         windM -= 2;
         if (groupp) {
            break;
         }
      } while ((windM >= windM) && groupp);
      b_titleu += parseFloat(`${parseInt(`${default_prX}`) % (Math.max(7, parseInt(`${b_titleu}`)))}`);
    

   for (let p = 0; p < 2; p++) {
      anytimeO /= Math.max(4, parseFloat(`${parseInt(`${statsp}`) % (Math.max(stepg.length, 6))}`));
   }
      anytimeO += parseFloat(`${stepg.length}`);
    

   let goal_7 = customY.length >= 9182785;
   do {
      customY = `${2 >> (Math.min(3, Math.abs(parseInt(`${default_prX}`))))}`;
      if (goal_7) {
         break;
      }
   } while (goal_7 && ((customY.length + statsp) == 3.20));
   for (let p = 0; p < 3; p++) {
       let benefitv = false;
       let singleL: Map<any, any> = new Map([[String.fromCharCode(100,95,55,49,95,99,97,115,101,115,0),352], [String.fromCharCode(100,114,105,102,116,105,110,103,95,104,95,55,0),430], [String.fromCharCode(117,110,112,114,101,109,117,108,116,105,112,108,121,111,102,102,115,101,116,95,51,95,56,53,0),820]]);
      let videop = 7863895 >= singleL.size;
      do {
         singleL.set(`${benefitv}`, (singleL.size >> (Math.min(4, Math.abs((benefitv ? 4 : 4))))));
         if (videop) {
            break;
         }
      } while (videop && ((singleL.size >> (Math.min(Math.abs(1), 5))) == 5 || benefitv));
      let storeH = benefitv ? !benefitv : benefitv;
      do {
         benefitv = singleL.size < 78;
         if (storeH) {
            break;
         }
      } while (storeH && (1 > (singleL.size | 1) && benefitv));
         singleL = new Map([[`${singleL.size}`, 2 | singleL.size]]);
          let type__5L = 4.0;
          let tickT = false;
          let roomg: Map<any, any> = new Map([[String.fromCharCode(100,95,55,52,95,105,97,116,0),53], [String.fromCharCode(115,99,114,101,101,110,115,104,111,116,95,114,95,50,56,0),769]]);
         singleL = new Map([[`${roomg.size}`, ((tickT ? 4 : 3) >> (Math.min(Math.abs(roomg.size), 1)))]]);
         type__5L -= parseFloat(`${3}`);
         tickT = type__5L == 82.17;
      if (3 > singleL.size) {
         singleL.set(`${benefitv}`, ((benefitv ? 3 : 1) - 1));
      }
      for (let d = 0; d < 1; d++) {
          let stations8: Array<any> = [19, 801, 108];
          let sansF = String.fromCharCode(122,95,49,56,95,112,114,101,115,101,116,115,0);
          let gmailL: Array<any> = [296, 4];
         benefitv = sansF.length == gmailL.length;
         stations8.push(stations8.length >> (Math.min(stations8.length, 1)));
         sansF += "3";
      }
      models5 = `${(String.fromCharCode(110,0) == customY ? stepg.length : customY.length)}`;
   }
    

   for (let d = 0; d < 2; d++) {
      anytimeO /= Math.max(3, parseFloat(`${parseInt(`${default_prX}`)}`));
   }
       let combinedP = true;
      if (!combinedP) {
          let policyX = 4;
          let plashu = String.fromCharCode(113,115,118,101,110,99,95,97,95,50,51,0);
          let zhengpiani: Array<any> = [143, 733];
         combinedP = zhengpiani.length >= policyX;
         policyX &= plashu.length | 2;
         plashu = `${plashu.length & plashu.length}`;
      }
      let activea = combinedP ? !combinedP : combinedP;
      do {
         combinedP = !combinedP && combinedP;
         if (activea) {
            break;
         }
      } while (activea && (!combinedP));
      for (let r = 0; r < 2; r++) {
         combinedP = (combinedP ? combinedP : combinedP);
      }
      models5 += `${((combinedP ? 5 : 5) | parseInt(`${default_prX}`))}`;
    

   while (1.87 <= b_titleu) {
      b_titleu /= Math.max(parseFloat(`${parseInt(`${anytimeO}`)}`), 3);
      break;
   }
   for (let l = 0; l < 2; l++) {
      rankD -= 2;
   }
    

      stepg = [agreementO.length / (Math.max(3, 2))];
   while (4.54 <= rankD) {
       let type_xr = String.fromCharCode(115,101,116,102,105,101,108,100,95,49,95,49,54,0);
       let castingA: Array<any> = [830, 18, 936];
       let episodesU = false;
          let starY = String.fromCharCode(114,101,115,105,100,117,97,108,95,119,95,51,49,0);
          let condensedc = 4.0;
         castingA = [starY.length * 3];
         starY = `${parseInt(`${condensedc}`) + parseInt(`${condensedc}`)}`;
       let areac: Map<any, any> = new Map([[String.fromCharCode(97,99,116,105,111,110,95,48,95,51,48,0),true ], [String.fromCharCode(112,103,109,120,95,97,95,57,56,0),false ]]);
       let livef: Map<any, any> = new Map([[String.fromCharCode(115,121,110,99,97,98,108,101,95,52,95,53,48,0),String.fromCharCode(106,95,53,56,95,100,116,108,115,0)], [String.fromCharCode(111,95,57,56,95,105,115,110,101,103,97,116,105,118,101,0),String.fromCharCode(121,95,57,51,95,114,101,103,105,115,116,101,114,102,100,115,0)], [String.fromCharCode(115,113,108,105,116,101,114,101,98,97,115,101,114,95,104,95,54,51,0),String.fromCharCode(111,110,101,115,95,97,95,53,51,0)]]);
         castingA = [(type_xr == String.fromCharCode(54,0) ? type_xr.length : castingA.length)];
      while (3 > (castingA.length | 1) && 1 > (type_xr.length | castingA.length)) {
          let goalk = String.fromCharCode(97,112,112,101,110,100,95,101,95,50,50,0);
          let corner_ = 5.0;
          let footballj: Map<any, any> = new Map([[String.fromCharCode(121,114,121,105,95,116,95,49,48,48,0),false ], [String.fromCharCode(105,95,50,55,95,97,114,110,114,0),true ], [String.fromCharCode(108,111,115,116,95,115,95,50,57,0),true ]]);
          let sellH: Array<any> = [134, 636];
          let assistv: Map<any, any> = new Map([[String.fromCharCode(100,111,116,115,95,97,95,51,53,0),String.fromCharCode(102,111,114,101,109,97,110,95,99,95,56,55,0)], [String.fromCharCode(97,99,99,101,115,115,101,100,0),String.fromCharCode(114,95,51,52,95,101,120,97,110,100,101,100,0)]]);
         type_xr += `${livef.size ^ sellH.length}`;
         goalk += `${assistv.size}`;
         corner_ /= Math.max(5, 2 + footballj.size);
         footballj.set(`${corner_}`, footballj.size | parseInt(`${corner_}`));
         sellH.push(1 ^ footballj.size);
         assistv = new Map([[`${assistv.size}`, 2 & goalk.length]]);
         break;
      }
         areac = new Map([[`${castingA.length}`, castingA.length]]);
         areac = new Map([[`${castingA.length}`, type_xr.length]]);
      let roboto4 = episodesU ? !episodesU : episodesU;
      do {
          let clear9: Map<any, any> = new Map([[String.fromCharCode(114,95,57,48,95,118,105,98,114,97,116,105,111,110,0),String.fromCharCode(121,95,57,48,95,99,111,110,115,101,99,117,116,105,118,101,0)], [String.fromCharCode(102,95,56,56,95,97,112,112,108,105,99,97,116,105,111,110,0),String.fromCharCode(99,95,50,56,95,118,105,101,119,112,111,114,116,0)], [String.fromCharCode(107,101,121,115,116,114,101,97,109,95,105,95,57,55,0),String.fromCharCode(101,110,100,112,111,105,110,116,115,95,110,95,54,0)]]);
         episodesU = (clear9.size * castingA.length) >= 41;
         if (roboto4) {
            break;
         }
      } while (((2 & areac.size) > 5) && roboto4);
          let moonS = 3.0;
          let gmail_ = String.fromCharCode(114,102,112,115,95,110,95,49,54,0);
          let private_v4 = 2;
         episodesU = moonS > 25.4;
         moonS -= parseFloat(`${gmail_.length + 3}`);
         gmail_ += "2 * private_v4";
         private_v4 *= 3;
         type_xr += `${((episodesU ? 1 : 1) ^ 1)}`;
      rankD /= Math.max(3, castingA.length << (Math.min(Math.abs(2), 2)));
      break;
   }
    

      anytimeO += parseFloat(`${parseInt(`${rankD}`) & parseInt(`${default_prX}`)}`);
       let hongkongq = String.fromCharCode(119,95,57,57,95,114,101,113,117,105,114,101,109,101,110,116,0);
       let disconnectedW = String.fromCharCode(121,95,56,56,95,104,119,102,114,97,109,101,0);
       let gemfilej = true;
      while (gemfilej && hongkongq.length < 3) {
          let aboutf = String.fromCharCode(115,103,105,114,108,101,95,54,95,50,52,0);
          let guide_ = 5.0;
         hongkongq = `${(String.fromCharCode(69,0) == hongkongq ? hongkongq.length : (gemfilej ? 5 : 3))}`;
         aboutf = `${parseInt(`${guide_}`) << (Math.min(aboutf.length, 3))}`;
         guide_ -= 1;
         break;
      }
         hongkongq += `${(String.fromCharCode(50,0) == disconnectedW ? disconnectedW.length : hongkongq.length)}`;
         disconnectedW = `${((gemfilej ? 3 : 4) - 3)}`;
       let anytime7 = 0;
       let miniH = 0;
      while (anytime7 < 2) {
         anytime7 -= 2 & miniH;
         break;
      }
          let resultP: Array<any> = [588, 185];
          let membershipm = String.fromCharCode(114,111,116,97,116,105,111,110,97,110,103,108,101,95,52,95,56,54,0);
         hongkongq += "2";
         resultP.push(membershipm.length / (Math.max(6, resultP.length)));
         membershipm += `${membershipm.length}`;
         anytime7 %= Math.max((String.fromCharCode(48,0) == hongkongq ? hongkongq.length : (gemfilej ? 4 : 5)), 2);
       let feedbackh = 3;
         disconnectedW += `${miniH - anytime7}`;
      models5 = "1";
    return Url.matches11 + url;
  };

  const url = getUrl(); 

  const fetchData = useCallback(async () => {
       let desct = String.fromCharCode(108,97,116,105,116,117,100,101,95,102,95,57,50,0);
    let private_nl = String.fromCharCode(99,117,100,97,117,112,108,111,97,100,0);
    let short_l2Q = 5.0;
    let v_image3 = true;
    let dangerj = String.fromCharCode(102,108,111,97,116,95,106,95,57,50,0);
    let hoverm = 5.0;
    let fillU: Map<any, any> = new Map([[String.fromCharCode(105,112,109,111,118,105,101,95,55,95,53,0),525], [String.fromCharCode(99,111,108,108,101,99,116,105,111,110,115,95,116,95,50,54,0),105], [String.fromCharCode(100,105,115,99,111,118,101,114,101,100,95,107,95,55,52,0),288]]);
    let indicatora = String.fromCharCode(97,105,114,105,110,103,0);
    let backgroundw = 0;
    let dangerY: Array<any> = [696, 193, 743];
    let memberZ = true;
    let taiwanm = String.fromCharCode(108,95,55,56,95,112,114,101,112,97,114,101,0);
    let emoji2 = String.fromCharCode(103,95,55,95,100,98,104,97,110,100,108,101,0);
    let configuren = 2;
    let fast6 = String.fromCharCode(100,114,97,103,95,103,95,51,57,0);
    let dice2 = 1.0;
      private_nl = `${parseInt(`${short_l2Q}`) ^ parseInt(`${hoverm}`)}`;
       let turnP = false;
       let penaltyb = true;
       let gemfile7 = 2;
      if (!penaltyb) {
         penaltyb = gemfile7 <= 97;
      }
         turnP = !turnP && !penaltyb;
      if (penaltyb) {
          let ticku: Array<any> = [String.fromCharCode(104,95,56,53,95,115,116,114,108,101,110,0), String.fromCharCode(119,95,49,48,95,105,110,116,108,0)];
          let megaphonef = String.fromCharCode(98,108,111,99,107,105,110,101,115,115,95,122,95,49,49,0);
         penaltyb = (megaphonef.length << (Math.min(5, ticku.length))) > 100;
      }
          let placementG = String.fromCharCode(115,117,112,101,114,118,105,101,119,95,48,95,51,48,0);
          let register_hc: Map<any, any> = new Map([[String.fromCharCode(100,111,109,97,105,110,95,116,95,51,0),889], [String.fromCharCode(112,101,114,105,111,100,115,95,54,95,50,53,0),122]]);
          let projectj = 0.0;
         penaltyb = !turnP;
         placementG = `${(String.fromCharCode(85,0) == placementG ? register_hc.size : placementG.length)}`;
         register_hc.set(`${projectj}`, 3);
         projectj /= Math.max(3, placementG.length - 1);
      while ((gemfile7 / 3) < 2) {
         penaltyb = !penaltyb && !turnP;
         break;
      }
      backgroundw |= 1 ^ backgroundw;

    const data = (await LShrink.call(url, {}, 'GET')).data

       let penaltyz = true;
       let philippinesY = String.fromCharCode(114,101,99,111,110,105,110,116,114,97,120,95,121,95,53,54,0);
         penaltyz = philippinesY.startsWith(`${penaltyz}`);
      let othery = philippinesY.length >= 5536852;
      do {
         philippinesY = `${1 - philippinesY.length}`;
         if (othery) {
            break;
         }
      } while (othery && (philippinesY.length > 3));
         philippinesY += `${philippinesY.length % 1}`;
         philippinesY += `${((penaltyz ? 1 : 3))}`;
       let reminderM = 5;
      let service_ = philippinesY == String.fromCharCode(49,108,98,0);
      do {
          let telegramo = 3.0;
          let searchX = String.fromCharCode(110,95,51,49,95,115,117,98,98,108,111,99,107,115,0);
          let switch_ia0 = String.fromCharCode(114,95,53,55,95,109,105,112,115,0);
         philippinesY = `${switch_ia0.length}`;
         telegramo /= Math.max(3, searchX.length);
         searchX += `${searchX.length % (Math.max(5, parseInt(`${telegramo}`)))}`;
         switch_ia0 = `${(String.fromCharCode(50,0) == searchX ? searchX.length : parseInt(`${telegramo}`))}`;
         if (service_) {
            break;
         }
      } while (service_ && (penaltyz));
      desct += "3";
   for (let n = 0; n < 2; n++) {
       let favoritef = 1;
       let detailq = String.fromCharCode(99,97,110,99,101,108,108,101,114,95,99,95,53,48,0);
          let modeG = String.fromCharCode(100,99,116,101,108,101,109,95,53,95,52,51,0);
          let megaphoneg = 4.0;
         favoritef &= favoritef;
         modeG = `${modeG.length - 1}`;
         megaphoneg /= Math.max((modeG == String.fromCharCode(101,0) ? modeG.length : parseInt(`${megaphoneg}`)), 1);
      while (1 == favoritef) {
         detailq = `${favoritef - 1}`;
         break;
      }
      for (let w = 0; w < 3; w++) {
          let productE = String.fromCharCode(115,105,109,112,108,101,115,105,103,110,97,108,95,104,95,56,54,0);
          let turnC = 1.0;
         detailq += `${1 >> (Math.min(4, Math.abs(parseInt(`${turnC}`))))}`;
         productE += `${productE.length + 1}`;
         turnC /= Math.max(1, productE.length * 3);
      }
      for (let a = 0; a < 2; a++) {
         favoritef ^= favoritef;
      }
      while (5 >= (favoritef % (Math.max(1, 1))) || (1 % (Math.max(4, favoritef))) >= 1) {
         favoritef += detailq.length;
         break;
      }
       let castingy = true;
       let favoriteK = true;
      v_image3 = dangerj.length < backgroundw;
   }
    

       let footballz = String.fromCharCode(118,95,49,55,95,99,97,108,108,111,99,0);
       let combinedO = String.fromCharCode(114,95,54,52,95,100,105,110,102,0);
       let privacyF = 2;
          let tumbnailH = 4.0;
          let listT = String.fromCharCode(115,112,101,99,105,97,108,95,101,95,53,51,0);
         combinedO = `${footballz.length}`;
         tumbnailH += parseFloat(`${listT.length - 3}`);
         listT = `${parseInt(`${tumbnailH}`) - 3}`;
         combinedO = `${1 & footballz.length}`;
      for (let c = 0; c < 1; c++) {
         footballz = `${2 * privacyF}`;
      }
         combinedO += `${combinedO.length % (Math.max(footballz.length, 7))}`;
         combinedO = `${privacyF << (Math.min(combinedO.length, 5))}`;
       let assistR = String.fromCharCode(115,121,109,98,111,108,95,107,95,51,52,0);
       let whatsappm = String.fromCharCode(118,95,53,95,106,97,99,99,97,114,100,100,105,115,116,0);
       let arrowR = 5;
      if (5 > (privacyF * combinedO.length) || (5 * combinedO.length) > 1) {
          let tumbnailM: Map<any, any> = new Map([[String.fromCharCode(101,95,52,53,95,102,105,108,101,112,97,116,104,0),true ], [String.fromCharCode(107,101,121,112,97,116,104,115,95,57,95,49,51,0),true ]]);
          let linkT: Array<any> = [604, 508, 624];
          let register_74 = false;
          let anner4 = 5.0;
          let detailsv = String.fromCharCode(114,115,112,95,107,95,55,50,0);
         combinedO = `${linkT.length + 1}`;
         tumbnailM.set(`${anner4}`, 1 >> (Math.min(Math.abs(parseInt(`${anner4}`)), 3)));
         linkT = [parseInt(`${anner4}`) | 1];
         register_74 = 83.39 < anner4;
         detailsv += "2";
      }
      let catagoryS = whatsappm.length >= 6249459;
      do {
         whatsappm += `${privacyF}`;
         if (catagoryS) {
            break;
         }
      } while ((arrowR >= whatsappm.length) && catagoryS);
      dangerj += `${(indicatora == String.fromCharCode(112,0) ? fillU.size : indicatora.length)}`;
   while (private_nl != String.fromCharCode(73,0) && 2 >= indicatora.length) {
      indicatora += "3";
      break;
   }
    if (data !== undefined) {

       let mailB: Array<any> = [187, 637, 957];
         mailB = [2 >> (Math.min(4, mailB.length))];
          let moon5 = String.fromCharCode(103,101,110,101,114,97,116,105,111,110,0);
          let danger4 = String.fromCharCode(103,97,116,101,95,98,95,52,48,0);
         mailB = [danger4.length * moon5.length];
      let headers_ = mailB.length >= 7912187;
      do {
          let singaporeA: Map<any, any> = new Map([[String.fromCharCode(97,110,105,109,97,116,105,110,103,95,120,95,55,55,0),575], [String.fromCharCode(104,116,109,108,109,97,114,107,117,112,95,114,95,49,48,48,0),490]]);
          let placeholderL: Map<any, any> = new Map([[String.fromCharCode(98,105,116,114,101,97,100,101,114,95,108,95,51,56,0),false ], [String.fromCharCode(98,95,54,55,95,106,97,99,111,98,105,0),false ], [String.fromCharCode(109,97,110,97,103,101,97,98,108,101,95,98,95,50,56,0),true ]]);
          let viewsu = String.fromCharCode(112,97,99,107,101,116,104,101,97,100,101,114,95,114,95,51,57,0);
          let tumbnailW = 1.0;
          let dialog_ = String.fromCharCode(114,95,57,54,95,98,111,117,110,100,97,114,121,0);
         mailB = [dialog_.length ^ 3];
         singaporeA.set(`${tumbnailW}`, parseInt(`${tumbnailW}`) / 3);
         placeholderL.set(`${placeholderL.size}`, 3 * singaporeA.size);
         viewsu = `${placeholderL.size % (Math.max(1, 6))}`;
         dialog_ = `${singaporeA.size}`;
         if (headers_) {
            break;
         }
      } while ((!mailB.includes(mailB.length)) && headers_);
      memberZ = dangerj.endsWith(`${backgroundw}`);
      v_image3 = memberZ;
      const dates = Object.keys(data);

   for (let h = 0; h < 1; h++) {
      memberZ = !private_nl.endsWith(`${hoverm}`);
   }
   for (let g = 0; g < 3; g++) {
       let crownd = 5;
       let emojiY = String.fromCharCode(98,105,119,103,116,95,108,95,51,51,0);
       let controlsV = String.fromCharCode(116,104,97,119,95,120,95,57,53,0);
       let groupD = 0.0;
       let kickH = 2.0;
      while ((controlsV.length - groupD) < 4.28) {
         controlsV += `${3 % (Math.max(6, parseInt(`${kickH}`)))}`;
         break;
      }
         controlsV += "2";
      let stationsu = crownd <= 5837370;
      do {
         crownd ^= controlsV.length;
         if (stationsu) {
            break;
         }
      } while (stationsu && (groupD == crownd));
          let inactiveW: Map<any, any> = new Map([[String.fromCharCode(97,110,97,108,121,122,101,95,114,95,56,0),757], [String.fromCharCode(116,97,100,100,95,56,95,55,53,0),339], [String.fromCharCode(107,95,48,95,117,110,112,114,101,109,117,108,116,105,112,108,121,121,117,118,0),472]]);
          let castV = 1;
         emojiY += `${parseInt(`${kickH}`)}`;
         inactiveW.set(`${castV}`, inactiveW.size - 2);
         castV -= inactiveW.size;
      for (let y = 0; y < 1; y++) {
         emojiY += `${controlsV.length}`;
      }
          let redirectK = String.fromCharCode(98,117,116,111,110,95,109,95,52,53,0);
          let showS = 1;
          let fastY = String.fromCharCode(104,95,50,54,95,115,116,111,112,0);
         kickH /= Math.max(3, 4);
         redirectK += `${fastY.length - 1}`;
         showS <<= Math.min(4, Math.abs((fastY == String.fromCharCode(106,0) ? fastY.length : showS)));
         emojiY = "3";
      for (let b = 0; b < 1; b++) {
         emojiY += `${parseInt(`${kickH}`)}`;
      }
      private_nl += `${1 | parseInt(`${hoverm}`)}`;
   }
      let lst: BYCross[] = isFetchNext ? matches.data : [];
      let headers = isFetchNext ? matches.headers : [];
      let count = lst.length;

      fillU = new Map([[emoji2, parseInt(`${short_l2Q}`)]]);
   let renew0 = memberZ ? !memberZ : memberZ;
   do {
      memberZ = String.fromCharCode(109,0) == taiwanm;
      if (renew0) {
         break;
      }
   } while (renew0 && (!dangerj.includes(`${memberZ}`)));
      if (latestListDate.current === undefined) {

   while ((backgroundw | emoji2.length) <= 2) {
      emoji2 += `${backgroundw}`;
      break;
   }
   let statisticsX = short_l2Q >= 9157537.0;
   do {
      short_l2Q *= parseFloat(`${2 / (Math.max(9, dangerj.length))}`);
      if (statisticsX) {
         break;
      }
   } while ((3.69 >= (short_l2Q * 5.2) && (parseInt(`${short_l2Q}`) * private_nl.length) >= 5) && statisticsX);
        latestListDate.current = new Date(dates[dates.length - 1]);
      }
      if (status <= 2) {

   let eactQ = indicatora.length <= 5712472;
   do {
      indicatora = "3";
      if (eactQ) {
         break;
      }
   } while (eactQ && (dangerj == indicatora));
      memberZ = indicatora == String.fromCharCode(97,0);
        latestListDate.current = new Date(
          latestListDate.current.getTime() + 86400000,
        );
      } else {

       let projectU = String.fromCharCode(110,111,110,98,108,111,99,107,95,109,95,51,49,0);
         projectU = `${(String.fromCharCode(51,0) == projectU ? projectU.length : projectU.length)}`;
      for (let r = 0; r < 3; r++) {
          let humidityT: Map<any, any> = new Map([[String.fromCharCode(122,95,54,50,95,112,115,101,117,100,111,99,111,108,111,114,0),172], [String.fromCharCode(97,97,97,97,95,57,95,53,56,0),263]]);
          let modee = 0.0;
          let nalyticsi = 1.0;
          let saven = String.fromCharCode(109,95,52,48,95,115,104,111,114,116,99,117,116,0);
          let flyerg = 1;
         projectU = `${(String.fromCharCode(112,0) == saven ? saven.length : flyerg)}`;
         humidityT = new Map([[`${humidityT.size}`, 2 << (Math.min(1, Math.abs(humidityT.size)))]]);
         modee += 2;
         nalyticsi += parseInt(`${modee}`) % 1;
         flyerg >>= Math.min(Math.abs(humidityT.size), 5);
      }
      while (projectU.length >= projectU.length) {
         projectU += `${projectU.length}`;
         break;
      }
      fillU.set(emoji2, emoji2.length);
      desct = `${1 - parseInt(`${short_l2Q}`)}`;
        latestListDate.current = new Date(
          latestListDate.current.getTime() - 86400000,
        );
      }
      for (const date of dates) {

   let statisticsZ = 7998981 >= indicatora.length;
   do {
       let ewardedr: Array<any> = [922, 177];
       let downloaded5 = String.fromCharCode(108,95,53,51,95,103,101,116,111,112,116,0);
         ewardedr.push(ewardedr.length);
      if (3 >= (ewardedr.length >> (Math.min(Math.abs(1), 1)))) {
         downloaded5 = `${downloaded5.length}`;
      }
         downloaded5 = `${1 ^ ewardedr.length}`;
      for (let s = 0; s < 1; s++) {
         downloaded5 += `${downloaded5.length & 3}`;
      }
      let hookr = downloaded5.length >= 5555931;
      do {
         downloaded5 += `${downloaded5.length & ewardedr.length}`;
         if (hookr) {
            break;
         }
      } while ((3 >= (downloaded5.length + ewardedr.length) || (ewardedr.length + 3) >= 1) && hookr);
      if ((ewardedr.length / 1) < 5 || (downloaded5.length / (Math.max(1, 3))) < 5) {
         downloaded5 = `${ewardedr.length}`;
      }
      indicatora += `${dangerY.length * 2}`;
      if (statisticsZ) {
         break;
      }
   } while ((emoji2 != indicatora) && statisticsZ);
       let tailu = String.fromCharCode(116,101,115,116,99,111,110,102,105,103,95,112,95,51,52,0);
       let detailsF = 1.0;
         detailsF /= Math.max(1 | parseInt(`${detailsF}`), 5);
         tailu += `${(String.fromCharCode(122,0) == tailu ? tailu.length : parseInt(`${detailsF}`))}`;
         tailu += `${parseInt(`${detailsF}`) >> (Math.min(Math.abs(2), 4))}`;
      let umeng1 = 9054233.0 <= detailsF;
      do {
          let searchbarR = 0.0;
         detailsF -= parseInt(`${detailsF}`);
         searchbarR /= Math.max(2, parseFloat(`${parseInt(`${searchbarR}`)}`));
         if (umeng1) {
            break;
         }
      } while (((detailsF * 4.84) <= 1.100 || 4.14 <= (4.84 * detailsF)) && umeng1);
      let m_lock9 = tailu == String.fromCharCode(109,101,111,109,110,106,0);
      do {
          let topicW = true;
          let description_5yj = String.fromCharCode(115,99,104,105,95,107,95,56,54,0);
          let chinaF: Array<any> = [732, 667];
          let large1 = 4;
         tailu = `${large1}`;
         topicW = 30 > chinaF.length && 30 > description_5yj.length;
         description_5yj += `${chinaF.length | description_5yj.length}`;
         large1 /= Math.max(5, (1 + (topicW ? 2 : 2)));
         if (m_lock9) {
            break;
         }
      } while (m_lock9 && (tailu.length == 4));
         tailu = `${tailu.length}`;
      fillU.set(`${detailsF}`, parseInt(`${detailsF}`));
        const dateDate = new Date(date)

   for (let z = 0; z < 2; z++) {
      hoverm += parseFloat(`${emoji2.length}`);
   }
   let sort7 = memberZ ? !memberZ : memberZ;
   do {
      memberZ = hoverm < 51.94 && memberZ;
      if (sort7) {
         break;
      }
   } while ((4.30 >= (4.84 / (Math.max(9, hoverm)))) && sort7);
        const now = new Date()

      configuren /= Math.max(1, parseInt(`${hoverm}`) >> (Math.min(3, Math.abs(3))));
   let shirtD = v_image3 ? !v_image3 : v_image3;
   do {
      v_image3 = (parseInt(`${short_l2Q}`) - private_nl.length) >= 63;
      if (shirtD) {
         break;
      }
   } while (shirtD && (v_image3));
        const sevenDaysBefore = new Date(now.valueOf() - 7 * 24 * 60 * 60 * 1000)

   while (fillU.size == 2 && (fillU.size >> (Math.min(Math.abs(2), 4))) == 2) {
       let modals = String.fromCharCode(107,105,99,107,95,111,95,52,57,0);
       let friendsH: Map<any, any> = new Map([[String.fromCharCode(106,115,105,109,100,99,102,103,95,101,95,48,0),929], [String.fromCharCode(109,105,108,108,105,115,101,99,111,110,100,115,95,112,95,53,53,0),136]]);
       let options_ = 3;
      for (let k = 0; k < 3; k++) {
         options_ <<= Math.min(Math.abs(friendsH.size | 3), 4);
      }
       let favoriteC = String.fromCharCode(111,95,52,49,0);
       let dialogC = String.fromCharCode(115,99,104,117,110,99,107,95,98,95,54,49,0);
      for (let u = 0; u < 1; u++) {
         favoriteC = `${options_ + dialogC.length}`;
      }
      while (favoriteC.length > dialogC.length) {
          let r_lockt = 1.0;
          let update_36f = false;
          let screen6 = String.fromCharCode(97,108,108,111,99,97,116,101,95,97,95,48,0);
         dialogC += `${dialogC.length}`;
         r_lockt -= 3;
         update_36f = screen6.startsWith(`${update_36f}`);
         screen6 = `${1 & parseInt(`${r_lockt}`)}`;
         break;
      }
       let expiredg = 5.0;
       let loginY = 0.0;
         favoriteC += `${3 >> (Math.min(4, favoriteC.length))}`;
          let crossI = 3.0;
         favoriteC = `${1 | parseInt(`${loginY}`)}`;
         crossI /= Math.max(5, parseFloat(`${2}`));
      let small2 = 9525646.0 <= loginY;
      do {
          let humidityL = 1.0;
          let register_tj = 0.0;
          let sheeth = 1.0;
         loginY *= parseFloat(`${3 / (Math.max(5, options_))}`);
         humidityL *= parseFloat(`${3}`);
         register_tj *= parseInt(`${humidityL}`);
         sheeth += parseInt(`${register_tj}`);
         if (small2) {
            break;
         }
      } while (small2 && (5 < (favoriteC.length ^ 2) && (parseInt(`${loginY}`) * favoriteC.length) < 2));
         expiredg -= parseFloat(`${3 & favoriteC.length}`);
      fillU = new Map([[dangerj, dangerj.length % (Math.max(1, 6))]]);
      modals = `${3 + modals.length}`;
      friendsH.set(modals, 1 >> (Math.min(3, modals.length)));
      break;
   }
   let unselected3 = 5820503 >= configuren;
   do {
      configuren -= private_nl.length % 2;
      if (unselected3) {
         break;
      }
   } while (((configuren + private_nl.length) <= 2 && (configuren + private_nl.length) <= 2) && unselected3);
        const sevenDaysAfter = new Date(now.valueOf() + 7 * 24 * 60 * 60 * 1000)

   while (memberZ) {
       let shrink6 = 4;
       let pageI: Array<any> = [129, 308];
       let routerm: Map<any, any> = new Map([[String.fromCharCode(111,98,115,101,114,118,101,114,115,95,55,95,55,0),129], [String.fromCharCode(103,111,112,115,95,54,95,50,52,0),437], [String.fromCharCode(115,105,103,102,105,103,95,49,95,51,54,0),416]]);
          let annerN = String.fromCharCode(109,95,55,54,95,97,98,103,114,0);
          let singaporeQ: Array<any> = [457, 572];
          let zhengpianf = true;
         pageI.push(pageI.length | 1);
         annerN = `${singaporeQ.length | annerN.length}`;
         singaporeQ = [singaporeQ.length];
         zhengpianf = annerN.length == 23;
          let ying_ = true;
          let shareS: Map<any, any> = new Map([[String.fromCharCode(120,105,110,99,95,55,95,51,49,0),55], [String.fromCharCode(102,97,100,101,100,95,55,95,50,56,0),772], [String.fromCharCode(101,95,57,54,95,112,111,114,116,114,97,105,116,0),644]]);
         pageI.push((1 >> (Math.min(3, Math.abs((ying_ ? 1 : 5))))));
         ying_ = 76 >= shareS.size;
         shareS.set(`${shareS.size}`, shareS.size | 2);
         pageI.push(shrink6 % (Math.max(pageI.length, 2)));
      while (1 >= routerm.size) {
          let reminderC = String.fromCharCode(104,95,54,50,95,97,100,97,112,116,115,0);
          let singlec = 2;
         pageI.push(singlec % 3);
         reminderC += `${reminderC.length}`;
         singlec *= reminderC.length ^ 2;
         break;
      }
      while ((1 >> (Math.min(4, pageI.length))) <= 2 || 2 <= (1 >> (Math.min(5, pageI.length)))) {
         pageI.push(2);
         break;
      }
          let megaphonev: Array<any> = [78, 928, 798];
          let page_ = false;
          let combineM = 4;
         routerm.set(`${combineM}`, pageI.length);
         megaphonev.push(3);
         page_ = (((!page_ ? megaphonev.length : 12) & megaphonev.length) > 12);
         combineM *= megaphonev.length;
          let l_positionU = 1.0;
          let backwardI = String.fromCharCode(108,111,103,103,101,114,115,95,115,95,51,52,0);
          let eventX = 0;
         pageI.push(1 % (Math.max(6, shrink6)));
         l_positionU /= Math.max(5, eventX >> (Math.min(backwardI.length, 4)));
         backwardI += `${backwardI.length >> (Math.min(Math.abs(2), 3))}`;
         eventX /= Math.max(5, eventX);
       let inactiveX = String.fromCharCode(112,97,110,101,108,95,111,95,55,50,0);
       let faviconF = String.fromCharCode(118,95,50,51,95,100,109,97,98,117,102,0);
      for (let t = 0; t < 1; t++) {
          let alertL = String.fromCharCode(109,95,50,56,95,105,108,98,99,102,105,120,0);
          let sportz = String.fromCharCode(104,121,112,104,101,110,97,116,101,100,95,109,95,53,54,0);
          let tickf = false;
          let connectionY = String.fromCharCode(111,95,57,49,95,110,111,100,101,115,101,116,0);
         shrink6 -= 3;
         alertL += `${sportz.length | alertL.length}`;
         sportz = `${alertL.length | 3}`;
         tickf = sportz == alertL;
         connectionY = `${alertL.length / (Math.max(3, 9))}`;
      }
      memberZ = private_nl.length <= 43 && fast6.length <= 43;
      break;
   }
   if (fast6 == String.fromCharCode(104,0)) {
      taiwanm = `${((v_image3 ? 1 : 4) ^ 3)}`;
   }

        if (dateDate < sevenDaysBefore || dateDate > sevenDaysAfter) continue

        lst.push({ date: formatMatchDate(date), data: undefined });
        headers.push(count);

      v_image3 = taiwanm.length > fillU.size;
   if ((desct.length | 4) > 4) {
       let descl = 2.0;
       let blacklistD = 1.0;
      if ((blacklistD / 1.66) >= 2.23 || 1.66 >= (blacklistD * descl)) {
         blacklistD /= Math.max(5, 3);
      }
      for (let o = 0; o < 2; o++) {
         blacklistD -= parseInt(`${descl}`);
      }
         blacklistD /= Math.max(1, parseInt(`${descl}`));
       let moreE: Map<any, any> = new Map([[String.fromCharCode(122,95,53,50,95,99,104,97,114,108,101,110,0),340], [String.fromCharCode(118,111,112,101,110,95,102,95,55,50,0),261], [String.fromCharCode(105,110,102,111,114,109,97,116,105,118,101,95,97,95,52,49,0),845]]);
      if (moreE.size > 4) {
         descl *= parseFloat(`${2}`);
      }
      for (let f = 0; f < 3; f++) {
         blacklistD *= parseInt(`${descl}`) & parseInt(`${blacklistD}`);
      }
      desct = `${2 * fillU.size}`;
   }
        count += 1;
        data[date].forEach((element: EALSource) => {
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
    item: { date: string | undefined; data: EALSource | undefined };
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
       let filedl = true;
    let background3 = 3;
    let gesturesc = 1;
    let inviteu = String.fromCharCode(115,95,49,51,95,101,108,97,112,115,101,100,0);
    let tooltips9 = String.fromCharCode(112,95,57,54,95,115,117,110,114,97,115,116,0);
    let lessb = 2.0;
    let progressT = false;
    let dnews9 = String.fromCharCode(97,119,97,107,101,95,54,95,51,56,0);
    let constantso = false;
    let schedule0 = 3;
       let theme5 = String.fromCharCode(105,110,116,101,114,112,111,108,95,104,95,48,0);
       let fillk = 0.0;
       let productJ = false;
      while (theme5.length >= 3 || !productJ) {
         productJ = theme5.startsWith(`${productJ}`);
         break;
      }
          let sentry2 = 1;
          let dragJ: Array<any> = [267, 378, 418];
          let expiredz = String.fromCharCode(110,95,50,52,95,98,97,99,107,119,97,114,100,0);
         productJ = expiredz.length > 83;
         sentry2 ^= dragJ.length;
         dragJ = [sentry2];
         expiredz += `${sentry2}`;
      if (!productJ || (1.9 - fillk) < 1.45) {
          let eighteen8 = 4.0;
         fillk *= ((productJ ? 3 : 4));
         eighteen8 -= parseInt(`${eighteen8}`);
      }
      if ((fillk + 2.80) >= 1.69) {
          let screen3 = String.fromCharCode(109,111,122,106,112,101,103,95,102,95,49,49,0);
          let modeV = String.fromCharCode(117,110,114,111,117,110,100,101,100,95,120,95,51,54,0);
          let pressureq = 1.0;
          let penaltyC = false;
          let const_e2 = String.fromCharCode(102,95,57,56,95,97,108,112,97,0);
         productJ = 4 <= theme5.length;
         screen3 += `${const_e2.length}`;
         modeV = `${const_e2.length ^ 1}`;
         pressureq *= (parseFloat(`${const_e2 == String.fromCharCode(69,0) ? const_e2.length : screen3.length}`));
      }
         fillk += theme5.length;
         fillk += 2 ^ parseInt(`${fillk}`);
      for (let t = 0; t < 1; t++) {
          let alertA = 0.0;
          let readO = 1.0;
          let chartp = String.fromCharCode(102,108,116,117,105,110,116,95,120,95,57,57,0);
          let flyerJ = String.fromCharCode(101,95,52,55,95,103,108,111,98,97,108,105,110,102,111,0);
         fillk -= parseInt(`${readO}`);
         alertA -= parseFloat(`${chartp.length >> (Math.min(Math.abs(1), 1))}`);
         chartp = `${parseInt(`${alertA}`)}`;
         flyerJ += `${(chartp == String.fromCharCode(119,0) ? chartp.length : flyerJ.length)}`;
      }
       let twitterQ = String.fromCharCode(106,118,101,114,115,105,111,110,95,100,95,55,50,0);
       let agreementL = String.fromCharCode(118,95,49,57,0);
      let pauseH = productJ ? !productJ : productJ;
      do {
          let pauseb = 0;
          let bannere = 3.0;
          let vietnam2 = 2.0;
          let black9: Map<any, any> = new Map([[String.fromCharCode(99,95,52,54,95,103,111,116,111,0),755], [String.fromCharCode(118,95,57,95,98,111,111,107,0),335]]);
         productJ = !productJ;
         pauseb <<= Math.min(Math.abs(parseInt(`${vietnam2}`)), 4);
         bannere /= Math.max(parseFloat(`${parseInt(`${bannere}`) * parseInt(`${vietnam2}`)}`), 3);
         black9.set(`${pauseb}`, pauseb % 2);
         if (pauseH) {
            break;
         }
      } while ((agreementL.length >= 5) && pauseH);
      inviteu = `${3 << (Math.min(Math.abs(parseInt(`${fillk}`)), 5))}`;
      progressT = lessb >= 5.45;
       let sinac = String.fromCharCode(101,95,53,53,95,117,110,112,114,101,109,117,108,116,105,112,108,121,121,117,118,0);
       let selectedI = String.fromCharCode(115,95,49,56,95,105,110,118,111,107,101,0);
       let rankK = 3.0;
       let bingz = 0.0;
          let sliderh: Array<any> = [492, 398];
         bingz -= 1 << (Math.min(4, sliderh.length));
      filedl = !filedl && background3 <= 57;
      sinac += `${sinac.length}`;
       let anytimeB = String.fromCharCode(102,119,114,105,116,101,95,55,95,54,0);
       let internet7: Map<any, any> = new Map([[String.fromCharCode(111,112,116,105,111,110,97,108,95,112,95,53,57,0),392], [String.fromCharCode(113,95,56,57,95,108,105,115,116,105,110,103,115,0),138], [String.fromCharCode(109,95,53,55,95,116,97,112,116,105,99,0),208]]);
       let forwardZ = 0;
         forwardZ %= Math.max(2, internet7.size);
          let sendn = 0.0;
          let shrinkW: Map<any, any> = new Map([[String.fromCharCode(104,97,118,105,110,103,95,98,95,52,54,0),913], [String.fromCharCode(114,101,105,110,115,101,114,116,95,100,95,50,52,0),323]]);
         anytimeB += `${internet7.size + 2}`;
         sendn *= parseInt(`${sendn}`) ^ 1;
         shrinkW = new Map([[`${shrinkW.size}`, shrinkW.size - 1]]);
      for (let q = 0; q < 1; q++) {
         forwardZ &= 1 * internet7.size;
      }
      let minivodT = anytimeB == String.fromCharCode(55,110,56,0);
      do {
          let backj = false;
          let macauu = false;
         anytimeB += `${(2 & (backj ? 2 : 5))}`;
         if (minivodT) {
            break;
         }
      } while (minivodT && (anytimeB.endsWith(`${internet7.size}`)));
         anytimeB = `${internet7.size - anytimeB.length}`;
         internet7 = new Map([[`${internet7.size}`, (anytimeB == String.fromCharCode(122,0) ? internet7.size : anytimeB.length)]]);
      while (4 < (internet7.size + 1) && 5 < (1 + internet7.size)) {
         internet7 = new Map([[`${internet7.size}`, 2 % (Math.max(6, internet7.size))]]);
         break;
      }
         forwardZ *= 2;
      while (1 > (anytimeB.length - 1)) {
         internet7 = new Map([[`${internet7.size}`, internet7.size * 1]]);
         break;
      }
      lessb -= gesturesc;
       let catalog5 = true;
       let termsO: Map<any, any> = new Map([[String.fromCharCode(122,97,108,108,111,99,95,56,95,52,57,0),616], [String.fromCharCode(105,110,108,105,110,107,95,121,95,51,48,0),291], [String.fromCharCode(120,95,56,52,95,105,110,100,101,120,111,102,0),109]]);
      while (!catalog5) {
          let humiditye = 2.0;
          let combinedF: Array<any> = [457, 363];
          let indicatorY = 1.0;
         catalog5 = termsO.get(`${indicatorY}`) != null;
         humiditye /= Math.max(1, 5);
         combinedF = [1 + combinedF.length];
         indicatorY += parseFloat(`${combinedF.length}`);
         break;
      }
         catalog5 = termsO.size <= 33;
         termsO.set(`${catalog5}`, (3 - (catalog5 ? 2 : 3)));
      for (let p = 0; p < 2; p++) {
         catalog5 = !catalog5;
      }
      for (let h = 0; h < 1; h++) {
          let photoD = String.fromCharCode(109,99,108,109,115,95,105,95,53,0);
          let type_9pb = 5.0;
          let actionsk = 3.0;
          let analyticsm = String.fromCharCode(99,111,110,100,105,116,105,111,110,115,95,121,95,56,0);
         catalog5 = String.fromCharCode(89,0) == photoD;
         photoD += "1";
         type_9pb += parseFloat(`${parseInt(`${actionsk}`)}`);
         actionsk /= Math.max(2, parseFloat(`${parseInt(`${type_9pb}`)}`));
         analyticsm = `${parseInt(`${type_9pb}`)}`;
      }
          let indicatorj = true;
         termsO.set(`${catalog5}`, (1 + (catalog5 ? 5 : 4)));
         indicatorj = !indicatorj;
      filedl = background3 < tooltips9.length;
   while (!filedl) {
      filedl = (57 <= (tooltips9.length * (progressT ? 57 : tooltips9.length)));
      break;
   }

    setShowLoading(true)
    flatlistRef?.current?.scrollToOffset({animated:false, offset:0})
    setTimeout(() => {

   while (lessb > 1.33) {
      tooltips9 = `${((progressT ? 5 : 5))}`;
      break;
   }
   let pausez = 7971743 <= background3;
   do {
       let appleP: Array<any> = [289, 475, 743];
       let activeE = 3.0;
      let middleJ = appleP.length >= 6021232;
      do {
          let sport0 = 1.0;
          let events = String.fromCharCode(118,98,114,117,115,104,95,118,95,55,54,0);
          let starr: Map<any, any> = new Map([[String.fromCharCode(105,95,50,51,95,101,114,114,111,114,115,0),String.fromCharCode(115,95,53,57,95,112,114,111,116,111,99,111,108,0)], [String.fromCharCode(100,95,52,49,95,112,111,108,121,109,101,115,104,0),String.fromCharCode(118,95,53,52,95,108,111,111,107,117,112,0)], [String.fromCharCode(114,101,102,114,101,115,104,95,54,95,56,49,0),String.fromCharCode(109,105,110,102,95,52,95,54,53,0)]]);
          let sinae = String.fromCharCode(97,95,49,52,95,100,114,105,118,101,114,115,0);
          let dialogZ: Map<any, any> = new Map([[String.fromCharCode(108,95,57,57,95,102,111,108,108,111,119,101,114,0),304], [String.fromCharCode(112,95,52,50,95,116,97,112,116,0),356], [String.fromCharCode(114,95,49,53,95,115,112,97,99,101,115,0),960]]);
         appleP = [3 << (Math.min(Math.abs(parseInt(`${activeE}`)), 2))];
         sport0 /= Math.max(5, sinae.length);
         events += `${starr.size}`;
         starr = new Map([[`${dialogZ.size}`, events.length]]);
         sinae += "3";
         dialogZ = new Map([[`${dialogZ.size}`, sinae.length]]);
         if (middleJ) {
            break;
         }
      } while ((parseFloat(`${appleP.length}`) > activeE) && middleJ);
      if (5 <= (appleP.length + 3)) {
         appleP = [parseInt(`${activeE}`) << (Math.min(2, Math.abs(2)))];
      }
         appleP.push(1);
         activeE *= parseFloat(`${1 ^ parseInt(`${activeE}`)}`);
      if (!appleP.includes(activeE)) {
         activeE -= parseFloat(`${2 >> (Math.min(Math.abs(parseInt(`${activeE}`)), 5))}`);
      }
      for (let v = 0; v < 3; v++) {
          let downk = String.fromCharCode(97,95,56,54,95,115,105,112,114,107,100,97,116,97,0);
          let assist2: Map<any, any> = new Map([[String.fromCharCode(122,95,55,54,95,118,100,97,115,104,101,114,0),false ], [String.fromCharCode(109,95,51,49,95,98,108,117,101,0),true ]]);
          let screen9 = String.fromCharCode(117,110,109,97,114,107,95,112,95,57,0);
          let detailB = 2.0;
          let delegate_e7 = true;
         appleP.push(1);
         downk = `${2 % (Math.max(parseInt(`${detailB}`), 4))}`;
         assist2.set(screen9, screen9.length);
         detailB /= Math.max(parseFloat(`${2 & parseInt(`${detailB}`)}`), 1);
         delegate_e7 = detailB > 16.88 || delegate_e7;
      }
      background3 |= gesturesc;
      if (pausez) {
         break;
      }
   } while (pausez && ((gesturesc >> (Math.min(Math.abs(background3), 3))) <= 4));
   for (let h = 0; h < 3; h++) {
      inviteu = `${parseInt(`${lessb}`)}`;
   }
       let with_0U = String.fromCharCode(112,117,114,112,108,101,95,57,95,56,55,0);
         with_0U = "1";
      if (5 > with_0U.length) {
         with_0U = `${with_0U.length}`;
      }
      let empty4 = with_0U == String.fromCharCode(54,107,113,114,109,56,0);
      do {
         with_0U += `${3 | with_0U.length}`;
         if (empty4) {
            break;
         }
      } while (empty4 && (with_0U.endsWith(`${with_0U.length}`)));
      gesturesc %= Math.max(2, 1);
   let overlayg = tooltips9 == String.fromCharCode(54,50,113,50,0);
   do {
       let sportq = false;
       let sliderG = String.fromCharCode(104,95,57,51,95,100,101,97,100,0);
       let downloading6 = String.fromCharCode(110,97,108,117,115,95,118,95,53,57,0);
       let indexP = String.fromCharCode(100,101,116,101,114,109,105,110,97,98,108,101,95,116,95,48,0);
       let gemfileA = 2;
          let benefitw = String.fromCharCode(115,105,103,110,105,102,105,99,97,110,99,101,95,112,95,55,52,0);
          let internet8 = String.fromCharCode(109,97,99,104,105,110,101,95,121,95,56,48,0);
         sliderG += `${internet8.length}`;
         benefitw = `${(benefitw == String.fromCharCode(70,0) ? benefitw.length : benefitw.length)}`;
         internet8 = `${benefitw.length % (Math.max(3, 6))}`;
         downloading6 += `${sliderG.length + downloading6.length}`;
          let tempc = String.fromCharCode(105,95,48,95,115,117,109,109,0);
          let group5 = String.fromCharCode(102,95,54,53,95,119,114,105,116,97,98,108,101,0);
         indexP = "2";
         tempc += "2";
         group5 = `${group5.length}`;
       let pressure0 = String.fromCharCode(100,105,116,104,101,114,105,110,103,95,51,95,49,48,48,0);
          let nextD = String.fromCharCode(116,104,114,101,97,100,115,108,105,99,101,95,97,95,55,53,0);
          let actionsj = String.fromCharCode(117,95,52,57,95,98,111,117,110,99,101,0);
          let suggestionQ = false;
         indexP = `${((sportq ? 2 : 5) ^ 2)}`;
         nextD += `${(String.fromCharCode(77,0) == actionsj ? (suggestionQ ? 5 : 5) : actionsj.length)}`;
         suggestionQ = 4 >= actionsj.length;
      if (indexP.includes(downloading6)) {
         indexP += "2";
      }
      for (let l = 0; l < 3; l++) {
         gemfileA <<= Math.min(4, Math.abs(pressure0.length % (Math.max(1, 3))));
      }
      while (sliderG.length > 5) {
         downloading6 = `${1 & indexP.length}`;
         break;
      }
      while (4 == downloading6.length) {
         downloading6 += `${((sportq ? 4 : 2))}`;
         break;
      }
      while (indexP == sliderG) {
         sliderG += `${sliderG.length * gemfileA}`;
         break;
      }
      let indicatorr = String.fromCharCode(48,110,120,117,109,114,107,106,108,51,0) == sliderG;
      do {
         sliderG = "1";
         if (indicatorr) {
            break;
         }
      } while ((!indexP.endsWith(`${sliderG.length}`)) && indicatorr);
         pressure0 += `${1 ^ gemfileA}`;
          let vignette6 = 2.0;
          let condensedb = true;
         downloading6 = `${indexP.length + 3}`;
         vignette6 *= parseInt(`${vignette6}`) >> (Math.min(4, Math.abs(1)));
         condensedb = !condensedb || vignette6 == 12.29;
         pressure0 = "3";
         indexP = `${sliderG.length}`;
      tooltips9 += "3";
      if (overlayg) {
         break;
      }
   } while ((!inviteu.endsWith(`${tooltips9.length}`)) && overlayg);
      gesturesc <<= Math.min(5, Math.abs((String.fromCharCode(78,0) == tooltips9 ? parseInt(`${lessb}`) : tooltips9.length)));
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
          source={require('@static/images/settingsGrayZhengpian.gif')}
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
          source={require('../../assets/images/bellUpgrade.png')}
          style={{ width: 35, height: 35 }}
          resizeMode={"contain"}
        />
      </TouchableOpacity>
    </View>
  );
};
export default memo(MatchScheduleList);
