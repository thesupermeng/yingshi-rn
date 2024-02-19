import React, { memo, useState, useRef, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  FlatList,
  Dimensions,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import styles from './yys_nbatrophy';
import { TouchableOpacity } from 'react-native';
import { formatMatchDate } from '../../utility/utils';
import { yysIconclosewhiteBaiduads } from '@redux';
import { yysFavoriteNetwork } from '../../types/yys_history_plash';
import { Url } from '../../middleware/yys_login';
import { useInfiniteQuery } from '@tanstack/react-query';
import yysDisconnectedlogoSwitch from '../../middleware/yys_manifest';
import MatchSchedule from './yys_friends_leaguedetailsbg';
import FastImage from '../../../components/common/yys_alert_backwhite';
import { TOPON_BANNER_HEIGHT } from '@utility';

interface yysIconarrowrightorangeStation {
  matchTypeID: number;
  status?: number;
  setShowBecomeVIPOverlay: any;
  bgDark?: boolean
}

type yysLibfbjni = {
  date: string | undefined;
  data: yysFavoriteNetwork | undefined;
};

type yys_shared = {
  headers: number[];
  data: yysLibfbjni[];
};

const MatchScheduleList = ({
  matchTypeID,
  status = -1,
  setShowBecomeVIPOverlay,
  bgDark = false
}: yysIconarrowrightorangeStation) => {
  const { colors, textVariants, spacing } = useTheme();
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  const latestListDate = useRef<Date | undefined>();
  let flatlistRef = useRef();

  const [isFetchNext, setFetchNext] = useState(false);
  const [showLoading, setShowLoading] = useState(false);

  const [matches, setMatches] = useState<yys_shared>({
    headers: [],
    data: [],
  });

  const getUrl = () => {
       let emojim = String.fromCharCode(119,105,110,100,111,119,101,100,95,120,95,56,0);
    let iconnewsshareD: Array<any> = [763, 207];
    let regeng5 = false;
    let styleo = 2.0;
    let statisticsw: Array<any> = [945, 609, 385];
    let awayplayerp = String.fromCharCode(100,95,52,55,95,114,101,102,115,0);
    let ccdfbdabcabbbedbi = String.fromCharCode(101,108,101,109,115,95,108,95,49,48,0);
    let faviconI = String.fromCharCode(98,111,111,115,116,101,100,95,109,95,54,0);
    let referrerT = 0;
    let orangeuparrowg = String.fromCharCode(115,95,57,57,95,115,111,108,105,100,0);
    let found8: Array<any> = [983, 834];
    let arrowdownD = true;
    let mbjscommonX = String.fromCharCode(111,95,57,52,95,102,105,110,97,108,100,0);
    let playercommonF = String.fromCharCode(100,101,100,117,112,101,95,104,95,54,54,0);
    let profileinactivea = 0.0;
    let mbnativeadvancedN = 1.0;
    let loadingspinnerS = String.fromCharCode(110,95,48,95,116,114,97,110,115,112,111,114,116,0);
    let basketballmatchdetailbgn: Array<any> = [841, 735];
    let streaming5 = true;
    let clubZ = 2;
    let iconarrowrightwhite_ = String.fromCharCode(103,95,52,95,115,111,114,116,105,110,103,0);
      iconnewsshareD = [(found8.length + (regeng5 ? 2 : 3))];
       let imagewatchlivew = String.fromCharCode(114,95,55,48,95,116,101,99,104,110,111,108,111,103,121,0);
       let disconnected7 = String.fromCharCode(108,101,114,112,114,103,98,95,115,95,57,56,0);
         disconnected7 += `${2 * disconnected7.length}`;
         imagewatchlivew += `${imagewatchlivew.length ^ 2}`;
          let iconschedulem: Map<any, any> = new Map([[String.fromCharCode(97,99,107,110,111,119,108,101,100,103,101,100,95,104,95,53,50,0),602], [String.fromCharCode(114,101,99,101,110,116,108,121,95,98,95,55,51,0),329]]);
          let tempnodatagifH = String.fromCharCode(115,117,98,106,101,99,116,115,95,107,95,57,49,0);
         disconnected7 = `${iconschedulem.size}`;
         iconschedulem = new Map([[tempnodatagifH, tempnodatagifH.length & 1]]);
      while (imagewatchlivew.startsWith(`${disconnected7.length}`)) {
         disconnected7 = `${imagewatchlivew.length | 3}`;
         break;
      }
      if (5 <= imagewatchlivew.length) {
         disconnected7 += `${imagewatchlivew.length}`;
      }
      for (let l = 0; l < 2; l++) {
         imagewatchlivew += `${imagewatchlivew.length % (Math.max(3, 10))}`;
      }
      referrerT &= (String.fromCharCode(106,0) == orangeuparrowg ? awayplayerp.length : orangeuparrowg.length);
      styleo /= Math.max(parseFloat(`${orangeuparrowg.length}`), 3);

    let url = '';

      faviconI = `${parseInt(`${styleo}`)}`;
   while ((awayplayerp.length >> (Math.min(4, found8.length))) == 3) {
       let iconclosewhitek = String.fromCharCode(112,95,56,55,95,116,105,109,101,115,116,97,109,112,0);
       let orangeM: Map<any, any> = new Map([[String.fromCharCode(112,111,108,105,99,105,101,115,95,109,95,51,49,0),234], [String.fromCharCode(100,120,116,111,114,121,95,51,95,56,51,0),570]]);
       let canvasw = 4;
         canvasw ^= canvasw;
      while ((canvasw | orangeM.size) <= 3 && (orangeM.size | 3) <= 3) {
         orangeM.set(iconclosewhitek, canvasw / 3);
         break;
      }
      for (let u = 0; u < 2; u++) {
         iconclosewhitek = "2";
      }
      if ((canvasw | iconclosewhitek.length) < 3) {
         canvasw ^= canvasw / (Math.max(9, iconclosewhitek.length));
      }
      while ((5 - iconclosewhitek.length) <= 5 && 2 <= (canvasw - 5)) {
         iconclosewhitek += `${canvasw - 1}`;
         break;
      }
      while (4 > (canvasw << (Math.min(Math.abs(3), 5)))) {
         canvasw |= orangeM.size / (Math.max(3, 1));
         break;
      }
       let chartw = String.fromCharCode(105,95,54,56,95,101,108,101,109,0);
       let profileM = String.fromCharCode(114,101,112,111,114,116,115,95,55,95,54,0);
      while (chartw.endsWith(profileM)) {
          let loginW = 3.0;
         chartw += `${(String.fromCharCode(109,0) == profileM ? profileM.length : canvasw)}`;
         loginW *= parseInt(`${loginW}`);
         break;
      }
      if ((1 - orangeM.size) == 4 || (iconclosewhitek.length - 1) == 2) {
         iconclosewhitek += `${chartw.length >> (Math.min(3, Math.abs(canvasw)))}`;
      }
      awayplayerp += `${(ccdfbdabcabbbedbi == String.fromCharCode(76,0) ? ccdfbdabcabbbedbi.length : referrerT)}`;
      break;
   }
       let leagueR = String.fromCharCode(109,97,116,99,104,105,110,102,111,95,49,95,56,56,0);
       let philippinesL = String.fromCharCode(117,95,53,50,95,113,115,111,114,116,0);
       let armvac = 2.0;
       let sportsQ = String.fromCharCode(111,95,53,54,95,115,117,98,116,114,97,99,116,0);
       let starS = String.fromCharCode(109,95,50,48,95,106,99,111,110,102,105,103,0);
      let renew2 = philippinesL == String.fromCharCode(52,104,52,120,113,115,119,116,0);
      do {
         philippinesL += `${sportsQ.length ^ philippinesL.length}`;
         if (renew2) {
            break;
         }
      } while (renew2 && ((philippinesL.length * 4) > 2 && 1.34 > (armvac + 4.76)));
         philippinesL = `${leagueR.length - philippinesL.length}`;
      while (sportsQ.length < 5 && leagueR.length < 5) {
         sportsQ += `${starS.length}`;
         break;
      }
         leagueR = `${philippinesL.length}`;
      faviconI += `${1 & orangeuparrowg.length}`;
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
    

   if (arrowdownD) {
      arrowdownD = 41 >= referrerT;
   }
      arrowdownD = arrowdownD && referrerT > 17;
   let textlayoutmanagera = iconnewsshareD.length >= 6121983;
   do {
      iconnewsshareD.push(3);
      if (textlayoutmanagera) {
         break;
      }
   } while (textlayoutmanagera && (1 > (iconnewsshareD.length / (Math.max(7, faviconI.length)))));
    

      referrerT >>= Math.min(5, awayplayerp.length);
      faviconI = `${(String.fromCharCode(57,0) == orangeuparrowg ? orangeuparrowg.length : referrerT)}`;
   while (!awayplayerp.includes(`${styleo}`)) {
      awayplayerp += `${statisticsw.length}`;
      break;
   }
    

      iconnewsshareD.push(found8.length);
      emojim = `${(String.fromCharCode(104,0) == emojim ? emojim.length : (arrowdownD ? 1 : 2))}`;
       let contextH = 5.0;
       let iconsettingr = 0.0;
       let turndowny = String.fromCharCode(110,95,54,53,95,115,121,115,99,116,108,115,0);
      for (let q = 0; q < 2; q++) {
         contextH *= parseFloat(`${turndowny.length}`);
      }
      let profilepicT = iconsettingr <= 8090071.0;
      do {
          let mathI = String.fromCharCode(98,105,103,105,110,116,95,100,95,50,50,0);
          let carousel6 = String.fromCharCode(105,95,52,95,110,101,119,108,121,0);
          let switch_6co = String.fromCharCode(97,95,50,49,95,112,97,115,116,101,108,0);
          let viewerT = 1.0;
          let combinev = String.fromCharCode(104,95,49,56,95,97,105,109,100,0);
         iconsettingr += carousel6.length;
         mathI += `${parseInt(`${viewerT}`)}`;
         carousel6 += `${parseInt(`${viewerT}`) / 3}`;
         switch_6co = `${(String.fromCharCode(111,0) == mathI ? mathI.length : switch_6co.length)}`;
         combinev = `${combinev.length}`;
         if (profilepicT) {
            break;
         }
      } while (profilepicT && (4.53 < (contextH * iconsettingr) || 4.53 < (contextH * iconsettingr)));
       let hover_ = 4.0;
       let minimize8 = 2.0;
         minimize8 *= parseInt(`${iconsettingr}`);
       let runtime6 = String.fromCharCode(116,95,53,51,95,97,115,115,101,114,116,115,0);
       let iconplayu = String.fromCharCode(99,95,49,55,95,101,114,105,97,108,105,122,97,116,105,111,110,0);
      found8.push((parseInt(`${iconsettingr}`) & (regeng5 ? 4 : 2)));
    

       let classes8 = 1;
         classes8 &= 2 ^ classes8;
      for (let n = 0; n < 1; n++) {
         classes8 %= Math.max(5, classes8 << (Math.min(4, Math.abs(classes8))));
      }
          let inouttargetyellowh = String.fromCharCode(117,95,56,53,95,114,101,102,101,116,99,104,0);
          let pushX: Array<any> = [String.fromCharCode(100,95,53,52,95,111,109,112,108,105,99,97,116,105,111,110,0), String.fromCharCode(102,95,55,48,95,114,117,110,116,101,115,116,115,0)];
         classes8 /= Math.max(inouttargetyellowh.length, 5);
         inouttargetyellowh = `${pushX.length * 1}`;
         pushX = [pushX.length];
      found8 = [((regeng5 ? 2 : 4) & 2)];
       let klevin6 = String.fromCharCode(112,95,57,54,95,112,111,115,116,98,111,120,0);
       let valuesv = false;
       let whitesmalltickI = String.fromCharCode(98,95,49,55,95,105,100,101,97,108,0);
          let overo = 3.0;
          let matchb = String.fromCharCode(97,116,111,105,95,110,95,53,48,0);
          let tempK = String.fromCharCode(115,112,105,110,110,101,114,95,103,95,51,48,0);
         valuesv = whitesmalltickI.length < 11;
         overo -= tempK.length / 3;
         matchb = `${3 & matchb.length}`;
         tempK += `${parseInt(`${overo}`) ^ matchb.length}`;
         valuesv = klevin6.length > 33;
          let iconnewchatd = String.fromCharCode(116,105,116,108,101,115,95,119,95,51,0);
          let collectionu = 1.0;
          let commonx: Array<any> = [173, 981];
         valuesv = (96 > (klevin6.length >> (Math.min(3, Math.abs((!valuesv ? 96 : klevin6.length))))));
         iconnewchatd += `${commonx.length | iconnewchatd.length}`;
         collectionu /= Math.max(1 << (Math.min(3, commonx.length)), 4);
      while (klevin6.length == 4) {
         whitesmalltickI = `${((valuesv ? 1 : 2) / (Math.max(1, 2)))}`;
         break;
      }
         klevin6 += `${(1 << (Math.min(1, Math.abs((valuesv ? 1 : 4)))))}`;
      while (valuesv) {
         valuesv = (80 >= ((!valuesv ? 80 : whitesmalltickI.length) / (Math.max(whitesmalltickI.length, 9))));
         break;
      }
      for (let p = 0; p < 2; p++) {
          let whitesmalltickM = 4.0;
          let trophyX = 4.0;
          let styles2: Array<any> = [String.fromCharCode(99,111,100,101,99,112,114,105,118,95,113,95,51,56,0), String.fromCharCode(103,95,52,50,95,105,115,122,101,114,111,0), String.fromCharCode(115,99,97,108,101,95,120,95,55,49,0)];
          let mbjscommon2 = String.fromCharCode(100,101,116,101,114,109,105,110,101,95,53,95,55,49,0);
          let tumbnail1: Array<any> = [971, 453, 430];
         valuesv = !whitesmalltickI.startsWith(`${trophyX}`);
         whitesmalltickM -= styles2.length;
         trophyX /= Math.max(parseFloat(`${1 ^ mbjscommon2.length}`), 5);
         styles2.push(styles2.length << (Math.min(Math.abs(1), 1)));
         mbjscommon2 += "3";
         tumbnail1.push(2);
      }
         whitesmalltickI += "3";
          let redcirclebga = 2.0;
         klevin6 += "2";
         redcirclebga += parseFloat(`${parseInt(`${redcirclebga}`)}`);
      iconnewsshareD.push(2);
   if (parseInt(`${styleo}`) < ccdfbdabcabbbedbi.length) {
      ccdfbdabcabbbedbi += `${awayplayerp.length - ccdfbdabcabbbedbi.length}`;
   }
    

       let resend_ = 5;
       let lightC: Map<any, any> = new Map([[String.fromCharCode(107,98,105,116,95,53,95,53,57,0),577], [String.fromCharCode(103,95,49,51,95,115,105,109,112,108,105,102,105,101,100,0),743]]);
       let moviesq: Array<any> = [852, 702, 473];
      if (3 < (resend_ | moviesq.length) || 3 < (moviesq.length | resend_)) {
         resend_ -= lightC.size;
      }
         moviesq = [moviesq.length];
      if ((4 & lightC.size) == 3 || (lightC.size & resend_) == 4) {
          let pauset = String.fromCharCode(108,95,50,51,95,116,111,110,103,117,101,0);
          let mutedU = String.fromCharCode(100,105,115,112,95,107,95,54,49,0);
          let traminiZ = 3.0;
          let penaltygoalr: Map<any, any> = new Map([[String.fromCharCode(115,95,52,55,95,115,104,117,116,100,111,119,110,0),644], [String.fromCharCode(103,95,49,51,95,100,98,108,105,110,116,0),233], [String.fromCharCode(110,95,53,49,0),954]]);
         lightC.set(`${resend_}`, moviesq.length);
         pauset += `${mutedU.length}`;
         mutedU = `${1 + mutedU.length}`;
         traminiZ -= (parseFloat(`${String.fromCharCode(88,0) == mutedU ? pauset.length : mutedU.length}`));
         penaltygoalr = new Map([[pauset, pauset.length >> (Math.min(Math.abs(1), 1))]]);
      }
      if (4 <= (resend_ ^ lightC.size)) {
          let sportE = String.fromCharCode(98,95,57,53,95,114,101,109,111,118,97,98,108,101,0);
          let unticki = 5.0;
         resend_ |= sportE.length ^ 2;
         sportE = `${parseInt(`${unticki}`) % (Math.max(parseInt(`${unticki}`), 2))}`;
      }
      for (let q = 0; q < 2; q++) {
         lightC.set(`${resend_}`, 3 + resend_);
      }
         moviesq.push(2);
      let privatechatbgW = 7833362 <= moviesq.length;
      do {
          let forwardQ = String.fromCharCode(111,95,49,50,95,114,101,102,105,110,101,114,0);
         moviesq.push(1);
         forwardQ = `${1 + forwardQ.length}`;
         if (privatechatbgW) {
            break;
         }
      } while (privatechatbgW && ((moviesq.length / (Math.max(lightC.size, 5))) <= 3 || 5 <= (3 / (Math.max(6, lightC.size)))));
          let dicelogow = String.fromCharCode(122,101,114,111,105,110,103,95,51,95,52,56,0);
          let defaultpredictionprofileD: Map<any, any> = new Map([[String.fromCharCode(102,109,117,108,95,113,95,50,51,0),272], [String.fromCharCode(122,95,53,57,95,101,114,114,0),625]]);
         lightC = new Map([[`${lightC.size}`, lightC.size]]);
         dicelogow += `${dicelogow.length * defaultpredictionprofileD.size}`;
         defaultpredictionprofileD = new Map([[`${defaultpredictionprofileD.size}`, defaultpredictionprofileD.size * 2]]);
      while (lightC.get(`${resend_}`) == null) {
         lightC.set(`${resend_}`, lightC.size ^ resend_);
         break;
      }
      playercommonF += `${1 * orangeuparrowg.length}`;
      emojim += `${(String.fromCharCode(104,0) == faviconI ? playercommonF.length : faviconI.length)}`;
   for (let s = 0; s < 1; s++) {
      profileinactivea *= (emojim == String.fromCharCode(82,0) ? ccdfbdabcabbbedbi.length : emojim.length);
   }
    

   for (let g = 0; g < 3; g++) {
      styleo += parseFloat(`${1 & parseInt(`${styleo}`)}`);
   }
      iconnewsshareD.push((orangeuparrowg == String.fromCharCode(98,0) ? awayplayerp.length : orangeuparrowg.length));
       let basketballhometeamw = 2.0;
      if (1.79 <= (basketballhometeamw / 1.56)) {
         basketballhometeamw /= Math.max(parseInt(`${basketballhometeamw}`) - 2, 5);
      }
      while (1.91 <= (4 * basketballhometeamw)) {
         basketballhometeamw += 3 + parseInt(`${basketballhometeamw}`);
         break;
      }
         basketballhometeamw /= Math.max(parseInt(`${basketballhometeamw}`) << (Math.min(5, Math.abs(2))), 4);
      styleo += parseFloat(`${orangeuparrowg.length}`);
    

   while (faviconI == mbjscommonX) {
      mbjscommonX += "3";
      break;
   }
   for (let r = 0; r < 3; r++) {
      orangeuparrowg += `${iconnewsshareD.length - 2}`;
   }
   while (mbnativeadvancedN < 5.92) {
       let imagenomoredatae = String.fromCharCode(112,105,110,103,95,110,95,54,51,0);
       let privacyj = String.fromCharCode(120,111,102,102,115,101,116,95,57,95,52,50,0);
      let halffieldimage_ = imagenomoredatae.length >= 9887215;
      do {
         imagenomoredatae += `${privacyj.length | imagenomoredatae.length}`;
         if (halffieldimage_) {
            break;
         }
      } while ((!imagenomoredatae.includes(`${privacyj.length}`)) && halffieldimage_);
       let fileG = String.fromCharCode(102,95,54,95,111,112,116,97,114,103,0);
         imagenomoredatae = "3";
      for (let o = 0; o < 2; o++) {
          let collection3: Array<any> = [912, 626];
          let favorite0 = 1.0;
          let streaming7 = String.fromCharCode(115,99,111,114,101,115,95,122,95,53,54,0);
          let event7: Array<any> = [832, 722, 19];
         imagenomoredatae += `${privacyj.length}`;
         collection3.push(collection3.length);
         favorite0 += parseFloat(`${3}`);
         streaming7 += `${parseInt(`${favorite0}`) | streaming7.length}`;
         event7.push(parseInt(`${favorite0}`) & collection3.length);
      }
      while (privacyj.length <= 4) {
         privacyj += "3";
         break;
      }
      for (let c = 0; c < 1; c++) {
          let refreshc = 5.0;
          let handlery: Map<any, any> = new Map([[String.fromCharCode(108,95,50,49,95,115,115,116,104,114,101,115,104,0),718], [String.fromCharCode(105,113,109,112,95,118,95,50,56,0),212], [String.fromCharCode(97,117,116,104,114,111,114,105,122,97,116,105,111,110,95,49,95,54,56,0),573]]);
          let bridgeX = 3;
         fileG += `${1 | privacyj.length}`;
         refreshc /= Math.max(2, 1 & parseInt(`${refreshc}`));
         handlery.set(`${bridgeX}`, 2 & bridgeX);
      }
      orangeuparrowg = "2";
      break;
   }
    return Url.matches11 + url;
  };

  const url = getUrl();

  const fetchData = useCallback(async () => {
       let iconsharem = 2.0;
    let settings8 = String.fromCharCode(98,95,49,56,95,118,108,99,115,0);
    let libffmpegkitR = String.fromCharCode(117,95,55,95,116,104,117,110,107,0);
    let classesq = String.fromCharCode(113,95,53,54,95,115,105,122,101,98,105,116,114,97,116,101,0);
    let helperb = 5.0;
    let gradle_ = String.fromCharCode(98,95,51,56,95,115,111,114,116,101,114,0);
    let refresh_: Map<any, any> = new Map([[String.fromCharCode(99,111,112,121,116,111,95,108,95,56,48,0),89], [String.fromCharCode(117,95,49,55,0),680]]);
    let securityp: Array<any> = [286, 603, 86];
    let iconshareg = String.fromCharCode(121,95,50,56,95,99,108,111,99,107,0);
    let goalQ = false;
    let orangetickf = String.fromCharCode(103,95,52,49,95,104,105,115,116,0);
    let referrer9 = 2.0;
    let sellmathbackgroundu = String.fromCharCode(103,108,107,95,118,95,52,53,0);
       let faviconq = String.fromCharCode(120,95,52,53,95,112,115,104,0);
      for (let c = 0; c < 1; c++) {
         faviconq = `${faviconq.length}`;
      }
      if (!faviconq.includes(`${faviconq.length}`)) {
         faviconq = `${faviconq.length}`;
      }
      if (!faviconq.endsWith(`${faviconq.length}`)) {
         faviconq += `${faviconq.length}`;
      }
      classesq += `${(gradle_ == String.fromCharCode(78,0) ? parseInt(`${iconsharem}`) : gradle_.length)}`;

    const data = (await yysDisconnectedlogoSwitch.call(url, {}, 'GET')).data

   while (!gradle_.startsWith(`${refresh_.size}`)) {
      gradle_ = `${parseInt(`${iconsharem}`)}`;
      break;
   }

    if (data !== undefined) {

   if (2 > (classesq.length / (Math.max(1, parseInt(`${iconsharem}`))))) {
      iconsharem -= parseInt(`${helperb}`) % 3;
   }
      const dates = Object.keys(data);

   for (let o = 0; o < 3; o++) {
       let customq = String.fromCharCode(105,95,55,48,95,100,101,113,117,97,110,116,0);
       let subs6 = 1;
         customq = `${subs6 | 2}`;
       let profileactiveZ = String.fromCharCode(115,118,97,103,95,121,95,54,55,0);
         subs6 >>= Math.min(Math.abs(customq.length * 2), 4);
      if (customq.length < subs6) {
         subs6 >>= Math.min(customq.length, 3);
      }
      if (1 >= (subs6 / (Math.max(9, customq.length)))) {
         subs6 >>= Math.min(4, Math.abs(2 * subs6));
      }
          let showmore0: Array<any> = [201, 628];
         profileactiveZ = `${customq.length % (Math.max(6, subs6))}`;
         showmore0.push(showmore0.length << (Math.min(Math.abs(3), 5)));
      securityp.push(settings8.length);
   }
      let lst: yysLibfbjni[] = isFetchNext ? matches.data : [];
      let headers = isFetchNext ? matches.headers : [];
      let count = lst.length;

   while ((gradle_.length + parseInt(`${iconsharem}`)) > 4) {
      gradle_ += `${gradle_.length}`;
      break;
   }
      if (latestListDate.current === undefined) {

   let transferQ = String.fromCharCode(100,98,108,97,118,111,105,103,0) == libffmpegkitR;
   do {
       let fastforwarda = String.fromCharCode(110,95,53,55,95,97,99,99,117,109,117,108,97,116,101,100,0);
          let mergerk = String.fromCharCode(106,95,55,51,95,105,110,116,101,114,97,99,116,105,111,110,0);
          let bridgeC = 5.0;
         fastforwarda += "3";
         mergerk = `${mergerk.length}`;
         bridgeC *= parseInt(`${bridgeC}`) & 3;
         fastforwarda = `${fastforwarda.length}`;
         fastforwarda += `${fastforwarda.length & 1}`;
      libffmpegkitR += "3";
      if (transferQ) {
         break;
      }
   } while (transferQ && (libffmpegkitR.length > classesq.length));
        latestListDate.current = new Date(dates[dates.length - 1]);
      }
      if (status <= 2) {

       let mbnativeX = String.fromCharCode(112,101,114,109,101,97,116,101,95,55,95,52,51,0);
       let libnmso = String.fromCharCode(109,95,51,50,95,112,103,109,120,0);
         mbnativeX = `${mbnativeX.length}`;
      for (let c = 0; c < 1; c++) {
         mbnativeX += `${2 * libnmso.length}`;
      }
       let fullscreenminX = String.fromCharCode(99,100,102,116,95,48,95,55,52,0);
       let selected7 = String.fromCharCode(118,114,101,112,95,109,95,51,50,0);
       let iconviewergif6 = String.fromCharCode(121,95,51,51,95,104,97,110,100,108,101,0);
      for (let w = 0; w < 2; w++) {
          let libturbomodulejsijnie = true;
          let descv = true;
          let kuaishouC = String.fromCharCode(122,95,53,53,95,103,97,109,117,116,115,0);
          let dplusc = String.fromCharCode(118,97,116,97,114,95,122,95,52,51,0);
          let darka = String.fromCharCode(116,114,97,110,115,102,101,114,114,101,100,95,118,95,56,54,0);
         fullscreenminX += `${kuaishouC.length * darka.length}`;
         libturbomodulejsijnie = ((dplusc.length & (!libturbomodulejsijnie ? dplusc.length : 12)) <= 12);
         descv = (!descv ? !libturbomodulejsijnie : descv);
         kuaishouC = "1";
         darka = `${((libturbomodulejsijnie ? 2 : 1))}`;
      }
          let privacyz = String.fromCharCode(101,95,55,53,95,112,114,111,98,108,101,109,115,0);
         fullscreenminX = "1";
         privacyz = "2";
      gradle_ = `${2 | libnmso.length}`;
        latestListDate.current = new Date(
          latestListDate.current.getTime() + 86400000,
        );
      } else {

   for (let f = 0; f < 1; f++) {
       let mimev = String.fromCharCode(112,101,114,115,105,115,116,101,100,95,51,95,54,49,0);
       let iconpipshrinkX = String.fromCharCode(114,95,54,49,95,121,97,98,101,0);
       let bannerg: Map<any, any> = new Map([[String.fromCharCode(116,95,49,51,95,114,101,115,116,97,114,116,0),955], [String.fromCharCode(108,111,103,115,116,101,114,101,111,95,97,95,51,48,0),15], [String.fromCharCode(104,97,100,100,95,108,95,57,56,0),6]]);
         mimev = "1";
      for (let b = 0; b < 3; b++) {
         bannerg.set(mimev, mimev.length);
      }
      for (let v = 0; v < 3; v++) {
          let assetsB = true;
          let iconviewergifF = 2.0;
          let iconsettingM: Array<any> = [619, 161];
         mimev += `${parseInt(`${iconviewergifF}`) - 2}`;
         assetsB = iconsettingM.length <= 29 || !assetsB;
         iconviewergifF *= 3 << (Math.min(5, iconsettingM.length));
      }
          let moonx = 3;
          let product2 = String.fromCharCode(100,95,50,53,95,115,117,98,118,105,101,119,0);
         mimev = `${mimev.length / (Math.max(4, iconpipshrinkX.length))}`;
         moonx ^= product2.length;
         product2 += "2";
          let skipb = 0.0;
         iconpipshrinkX += `${bannerg.size}`;
         skipb /= Math.max(1 ^ parseInt(`${skipb}`), 3);
         mimev = `${iconpipshrinkX.length}`;
      while (mimev != String.fromCharCode(76,0)) {
         iconpipshrinkX += `${iconpipshrinkX.length | 3}`;
         break;
      }
       let logouserA = String.fromCharCode(108,105,98,114,115,118,103,95,57,95,54,52,0);
       let libtobx = String.fromCharCode(114,101,97,112,101,114,95,113,95,57,54,0);
         bannerg.set(`${libtobx}`, libtobx.length);
      helperb /= Math.max(4, parseFloat(`${libffmpegkitR.length + bannerg.size}`));
   }
        latestListDate.current = new Date(
          latestListDate.current.getTime() - 86400000,
        );
      }
      for (const date of dates) {

      securityp.push(libffmpegkitR.length % 2);
        const dateDate = new Date(date)

      gradle_ = `${2 & settings8.length}`;
        const now = new Date()

       let iconlogout1 = 0.0;
       let eyeopenC = 2.0;
      while (eyeopenC > 4.77) {
         iconlogout1 -= parseFloat(`${parseInt(`${eyeopenC}`) & parseInt(`${iconlogout1}`)}`);
         break;
      }
         iconlogout1 *= parseFloat(`${2 + parseInt(`${iconlogout1}`)}`);
          let smallorangemanX = String.fromCharCode(107,95,48,95,117,110,114,101,97,100,0);
          let playercommons = String.fromCharCode(117,100,116,97,95,108,95,57,56,0);
         eyeopenC -= parseInt(`${iconlogout1}`);
         smallorangemanX = `${smallorangemanX.length}`;
         playercommons = "1";
      while ((1.72 * iconlogout1) > 2.15 && 3.23 > (1.72 - eyeopenC)) {
          let tickedZ = String.fromCharCode(118,95,53,54,95,111,109,112,108,105,99,97,116,105,111,110,0);
          let foregroundZ: Array<any> = [57, 65, 166];
         eyeopenC /= Math.max(5, foregroundZ.length);
         tickedZ += `${tickedZ.length - tickedZ.length}`;
         foregroundZ = [tickedZ.length >> (Math.min(tickedZ.length, 2))];
         break;
      }
      if (3.66 >= (iconlogout1 / (Math.max(eyeopenC, 1))) && 2.23 >= (iconlogout1 / 3.66)) {
         eyeopenC *= parseInt(`${iconlogout1}`) ^ parseInt(`${eyeopenC}`);
      }
      let zhubo5 = 8445354.0 >= iconlogout1;
      do {
         iconlogout1 -= parseFloat(`${parseInt(`${eyeopenC}`)}`);
         if (zhubo5) {
            break;
         }
      } while (zhubo5 && (3.82 == (1.74 - iconlogout1)));
      iconsharem /= Math.max(parseInt(`${iconsharem}`) + 3, 2);
        const sevenDaysBefore = new Date(now.valueOf() - 7 * 24 * 60 * 60 * 1000)

   while (helperb > parseFloat(`${gradle_.length}`)) {
      gradle_ += `${gradle_.length >> (Math.min(1, Math.abs(refresh_.size)))}`;
      break;
   }
        const sevenDaysAfter = new Date(now.valueOf() + 7 * 24 * 60 * 60 * 1000)

      libffmpegkitR = "3";

        if (dateDate < sevenDaysBefore || dateDate > sevenDaysAfter) continue

        lst.push({ date: formatMatchDate(date), data: undefined });
        headers.push(count);

      settings8 = `${parseInt(`${iconsharem}`)}`;
        count += 1;
        data[date].forEach((element: yysFavoriteNetwork) => {
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
    item: { date: string | undefined; data: yysFavoriteNetwork | undefined };
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
       let l_positionh = String.fromCharCode(103,95,50,50,95,118,111,105,112,0);
    let ajaxw: Map<any, any> = new Map([[String.fromCharCode(115,95,53,50,95,115,97,118,101,100,0),true ], [String.fromCharCode(111,117,116,101,114,95,109,95,49,50,0),true ], [String.fromCharCode(106,95,50,52,95,112,101,114,112,101,110,100,105,99,117,108,97,114,0),true ]]);
    let indexd = 0.0;
    let type_enQ = false;
    let shootyesgoalk = String.fromCharCode(112,114,101,99,105,115,105,111,110,95,53,95,57,55,0);
    let smallW: Map<any, any> = new Map([[String.fromCharCode(116,114,116,97,98,108,101,95,116,95,56,49,0),456], [String.fromCharCode(117,95,49,48,95,115,101,97,114,99,104,97,98,108,101,0),510]]);
    let injury8 = String.fromCharCode(112,95,56,53,95,115,105,110,102,0);
    let store2 = true;
    let dangerk = 2.0;
    let statisticsb = String.fromCharCode(98,111,97,116,95,117,95,56,48,0);
    let selected6 = String.fromCharCode(105,100,99,116,108,108,109,95,97,95,54,49,0);
    let predictionbannerM = String.fromCharCode(121,95,50,52,95,98,111,111,116,115,116,114,97,112,0);
    let carouselu = false;
    let eyeclosej = true;
    let iconnotificationnewP = String.fromCharCode(119,95,56,48,95,98,99,100,117,105,110,116,0);
      shootyesgoalk = `${(String.fromCharCode(100,0) == l_positionh ? l_positionh.length : selected6.length)}`;
   if (4 >= statisticsb.length) {
      dangerk -= smallW.size;
   }
   for (let a = 0; a < 2; a++) {
       let spec5 = String.fromCharCode(112,101,101,114,110,97,109,101,95,120,95,55,54,0);
       let coreM: Map<any, any> = new Map([[String.fromCharCode(114,95,51,51,95,105,110,116,114,105,110,0),false ], [String.fromCharCode(107,95,55,56,95,105,110,116,114,101,112,111,108,0),false ], [String.fromCharCode(104,95,53,53,95,111,110,116,114,111,108,0),true ]]);
       let indexP = 2;
      while ((2 * spec5.length) <= 5) {
          let arrowrightwithtailh: Array<any> = [String.fromCharCode(115,118,103,95,121,95,57,56,0), String.fromCharCode(107,95,54,54,95,105,110,100,101,120,111,102,0)];
          let notificationE = 4.0;
          let backy = String.fromCharCode(110,95,56,48,95,116,114,97,110,115,109,105,116,0);
          let arrowdownT = 3.0;
          let resendj: Map<any, any> = new Map([[String.fromCharCode(116,111,103,103,108,105,110,103,95,121,95,57,52,0),130], [String.fromCharCode(109,95,55,55,95,111,112,101,110,99,108,0),621], [String.fromCharCode(100,95,50,54,95,109,105,110,113,0),397]]);
         spec5 = `${parseInt(`${arrowdownT}`)}`;
         arrowrightwithtailh = [parseInt(`${notificationE}`)];
         notificationE /= Math.max((backy == String.fromCharCode(119,0) ? resendj.size : backy.length), 2);
         arrowdownT -= resendj.size;
         break;
      }
      let shootnogoalx = 5208506 <= coreM.size;
      do {
         coreM = new Map([[`${coreM.size}`, 3]]);
         if (shootnogoalx) {
            break;
         }
      } while (shootnogoalx && (3 >= (coreM.size / 4) || 4 >= (coreM.size / (Math.max(5, indexP)))));
      let gifgoalV = 8239522 >= coreM.size;
      do {
          let videobufferloadingm = false;
          let iconclosewhitebgg = String.fromCharCode(105,110,115,116,97,108,108,95,122,95,49,49,0);
          let long_g2z = String.fromCharCode(110,95,53,52,95,115,101,116,116,105,109,101,111,117,116,0);
         coreM.set(iconclosewhitebgg, coreM.size);
         videobufferloadingm = long_g2z.includes(`${videobufferloadingm}`);
         iconclosewhitebgg += `${(long_g2z.length << (Math.min(3, Math.abs((videobufferloadingm ? 3 : 5)))))}`;
         if (gifgoalV) {
            break;
         }
      } while (((coreM.size << (Math.min(4, Math.abs(indexP)))) < 3 && 4 < (3 << (Math.min(5, Math.abs(indexP))))) && gifgoalV);
      for (let q = 0; q < 3; q++) {
         indexP -= coreM.size ^ indexP;
      }
      if (3 >= (5 | spec5.length) || 4 >= (5 | indexP)) {
          let iconnewchatJ = false;
          let floatert = String.fromCharCode(102,109,105,120,95,120,95,56,0);
          let anytimef = false;
         spec5 = `${(spec5 == String.fromCharCode(115,0) ? spec5.length : (anytimef ? 2 : 3))}`;
         iconnewchatJ = !iconnewchatJ;
         floatert = `${(3 << (Math.min(3, Math.abs((iconnewchatJ ? 5 : 2)))))}`;
         anytimef = iconnewchatJ;
      }
      while ((coreM.size ^ spec5.length) <= 2) {
         coreM = new Map([[spec5, 1 + spec5.length]]);
         break;
      }
         spec5 = `${1 + spec5.length}`;
         coreM = new Map([[`${coreM.size}`, coreM.size]]);
         spec5 += `${coreM.size}`;
      l_positionh = `${1 % (Math.max(7, parseInt(`${indexd}`)))}`;
   }
   if (selected6.length > 4) {
       let mbbidu = String.fromCharCode(106,95,49,48,95,109,100,99,116,0);
      let appleo = mbbidu == String.fromCharCode(119,49,118,48,0);
      do {
         mbbidu = "1";
         if (appleo) {
            break;
         }
      } while ((mbbidu.length > 2) && appleo);
      let icon0 = mbbidu.length >= 9757970;
      do {
         mbbidu += `${2 + mbbidu.length}`;
         if (icon0) {
            break;
         }
      } while (icon0 && (mbbidu != String.fromCharCode(117,0)));
          let iconbellQ = String.fromCharCode(113,95,54,56,95,114,97,110,107,115,0);
          let scorepopsoundO = String.fromCharCode(118,95,55,56,95,97,118,112,107,116,0);
         mbbidu += "2";
         iconbellQ = `${1 | iconbellQ.length}`;
         scorepopsoundO = `${(String.fromCharCode(120,0) == scorepopsoundO ? scorepopsoundO.length : iconbellQ.length)}`;
      statisticsb = `${parseInt(`${dangerk}`)}`;
   }
   let pathM = store2 ? !store2 : store2;
   do {
      store2 = ajaxw.size <= smallW.size;
      if (pathM) {
         break;
      }
   } while ((!selected6.endsWith(`${store2}`)) && pathM);
      smallW = new Map([[`${dangerk}`, 2 ^ parseInt(`${dangerk}`)]]);
      statisticsb += `${1 >> (Math.min(3, Math.abs(smallW.size)))}`;
   for (let m = 0; m < 2; m++) {
       let videovarB = true;
         videovarB = (!videovarB ? videovarB : !videovarB);
         videovarB = (!videovarB ? !videovarB : videovarB);
      if (videovarB) {
          let projectv = String.fromCharCode(112,95,52,48,95,98,105,100,105,114,101,99,116,105,111,110,97,108,0);
         videovarB = projectv.length <= 25 && !videovarB;
      }
      indexd += parseInt(`${dangerk}`) ^ 2;
   }
   let emojiheartf = String.fromCharCode(108,54,119,109,114,57,0) == l_positionh;
   do {
      l_positionh = `${parseInt(`${dangerk}`) ^ 1}`;
      if (emojiheartf) {
         break;
      }
   } while (emojiheartf && (l_positionh.startsWith(`${type_enQ}`)));

    setShowLoading(true)
    flatlistRef?.current?.scrollToOffset({ animated: false, offset: 0 })
    setTimeout(() => {

   for (let g = 0; g < 2; g++) {
       let trashb: Array<any> = [561, 385];
       let mbnativeadvanced7 = 3.0;
      for (let r = 0; r < 1; r++) {
         trashb.push(parseInt(`${mbnativeadvanced7}`) * trashb.length);
      }
      if (mbnativeadvanced7 > 2.23) {
         mbnativeadvanced7 /= Math.max(parseInt(`${mbnativeadvanced7}`) % 2, 3);
      }
      selected6 += `${((store2 ? 4 : 5) / (Math.max(selected6.length, 6)))}`;
   }
   for (let g = 0; g < 1; g++) {
      statisticsb = `${((type_enQ ? 1 : 4) + parseInt(`${indexd}`))}`;
   }
   while (type_enQ) {
      indexd += injury8.length;
      break;
   }
       let weibow = true;
       let bodanE = 2.0;
       let saveu = 3.0;
      for (let c = 0; c < 3; c++) {
         saveu /= Math.max(5, (parseFloat(`${(weibow ? 3 : 1) - parseInt(`${bodanE}`)}`)));
      }
       let lightV = 1;
       let leaguedetailsbgj = 5;
      while (4 <= (leaguedetailsbgj >> (Math.min(Math.abs(lightV), 3))) && 5 <= (4 >> (Math.min(2, Math.abs(leaguedetailsbgj))))) {
         lightV |= leaguedetailsbgj / (Math.max(parseInt(`${bodanE}`), 10));
         break;
      }
      let smallbrightness5 = 5850313.0 >= saveu;
      do {
         saveu -= parseFloat(`${parseInt(`${bodanE}`) * 2}`);
         if (smallbrightness5) {
            break;
         }
      } while ((5.32 == saveu) && smallbrightness5);
         bodanE *= parseFloat(`${parseInt(`${saveu}`)}`);
         lightV >>= Math.min(Math.abs(parseInt(`${saveu}`) | 3), 3);
      let whitez = 5237867.0 <= bodanE;
      do {
         bodanE += parseFloat(`${lightV * 1}`);
         if (whitez) {
            break;
         }
      } while (whitez && (bodanE <= 1.9));
          let patho = false;
         leaguedetailsbgj |= 3;
      if (!weibow) {
         leaguedetailsbgj <<= Math.min(Math.abs(parseInt(`${bodanE}`)), 2);
      }
      ajaxw = new Map([[`${indexd}`, parseInt(`${indexd}`) + 2]]);
       let notificationgrayO = 2.0;
         notificationgrayO /= Math.max(parseFloat(`${parseInt(`${notificationgrayO}`) + 3}`), 5);
      for (let n = 0; n < 2; n++) {
          let defaultprofilepicv = 0.0;
          let libswresamplec = String.fromCharCode(116,95,55,56,95,109,98,101,100,0);
         notificationgrayO /= Math.max(parseFloat(`${parseInt(`${notificationgrayO}`) + 3}`), 1);
         defaultprofilepicv -= parseFloat(`${libswresamplec.length}`);
         libswresamplec = `${parseInt(`${defaultprofilepicv}`) | libswresamplec.length}`;
      }
          let questE = false;
         notificationgrayO += (parseFloat(`${(questE ? 2 : 5) << (Math.min(Math.abs(parseInt(`${notificationgrayO}`)), 1))}`));
      ajaxw.set(shootyesgoalk, shootyesgoalk.length & parseInt(`${indexd}`));
   for (let a = 0; a < 1; a++) {
      shootyesgoalk = `${((store2 ? 4 : 2) | ajaxw.size)}`;
   }
   let bootsplash_ = l_positionh == String.fromCharCode(117,104,110,108,0);
   do {
       let qaagW: Map<any, any> = new Map([[String.fromCharCode(101,118,101,110,95,118,95,56,53,0),String.fromCharCode(99,95,49,50,95,108,112,99,108,115,112,0)], [String.fromCharCode(117,95,50,51,95,117,110,105,111,110,0),String.fromCharCode(104,95,49,56,95,97,117,116,111,114,101,115,105,122,105,110,103,0)]]);
       let animationsZ = String.fromCharCode(99,95,52,52,95,112,111,111,112,0);
       let gmaila: Array<any> = [660, 504, 501];
      while (Array.from(qaagW.keys()).includes(`${gmaila.length}`)) {
          let static_j1b = true;
          let handlers = false;
          let readu = String.fromCharCode(113,117,97,110,116,95,57,95,50,53,0);
         gmaila = [gmaila.length];
         static_j1b = (handlers ? !static_j1b : !handlers);
         readu = `${(String.fromCharCode(66,0) == readu ? (handlers ? 2 : 3) : readu.length)}`;
         break;
      }
         gmaila.push(gmaila.length);
         animationsZ += `${gmaila.length % 2}`;
      for (let f = 0; f < 1; f++) {
         animationsZ = `${qaagW.size >> (Math.min(gmaila.length, 2))}`;
      }
         gmaila.push(gmaila.length);
       let countdownD = 5;
       let iconstaro: Array<any> = [577, 237, 883];
       let footballu: Array<any> = [31, 50, 328];
         iconstaro = [footballu.length >> (Math.min(1, Math.abs(qaagW.size)))];
         qaagW = new Map([[`${iconstaro.length}`, iconstaro.length]]);
      l_positionh = `${shootyesgoalk.length}`;
      if (bootsplash_) {
         break;
      }
   } while ((1 > l_positionh.length) && bootsplash_);
      smallW = new Map([[`${store2}`, statisticsb.length]]);
   if (injury8.length < statisticsb.length) {
       let default_bj: Array<any> = [String.fromCharCode(115,109,112,116,101,95,121,95,55,50,0), String.fromCharCode(121,95,53,56,95,105,110,118,97,108,105,100,97,116,101,0)];
         default_bj.push(default_bj.length >> (Math.min(Math.abs(1), 5)));
      let predictionactiveC = default_bj.length >= 9044856;
      do {
          let resultC = String.fromCharCode(99,108,111,99,107,95,53,95,52,55,0);
          let baiduadsE = String.fromCharCode(103,95,51,52,95,109,115,114,108,101,100,101,99,0);
         default_bj.push(default_bj.length | baiduadsE.length);
         resultC += `${(String.fromCharCode(105,0) == resultC ? resultC.length : resultC.length)}`;
         baiduadsE = `${(String.fromCharCode(120,0) == resultC ? resultC.length : resultC.length)}`;
         if (predictionactiveC) {
            break;
         }
      } while ((default_bj.length > 3) && predictionactiveC);
         default_bj.push(default_bj.length & 2);
      statisticsb += `${statisticsb.length / (Math.max(injury8.length, 1))}`;
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
          ListFooterComponent={<View style={{ paddingTop: TOPON_BANNER_HEIGHT + 20 }} />}
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
          source={require('../../../../static/images/lessFullscreenmaxChatbotphoto.gif')}
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
          source={require('../../assets/images/iconmoreIncidentBaidu.png')}
          style={{ width: 35, height: 35 }}
          resizeMode={"contain"}
        />
      </TouchableOpacity>
    </View>
  );
};
export default memo(MatchScheduleList);
