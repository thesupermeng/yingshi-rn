import React, { useEffect, useState } from 'react';
import { Text, View, Image, ImageBackground } from 'react-native';
import styles from './fgl_less_position';
import {
  BackWhite,
  Notification,
  BasketballMatchDetailBG,
  MatchDetailBG,
  NotificationFilled,
  VideoLive,
  AnimationLive,
  OtherMatchDetailBG,
} from '../../assets';
import { TouchableOpacity } from 'react-native';
import {
  dateFormat,
  parseDate,
  parseStringToDate,
  
  formatDateTime,
  
} from '../../utility/yh_custom';
import { useNavigation } from '@react-navigation/native';
import { useCountdown } from '../../utility/q_refresh';
import { useDispatch, useSelector } from 'react-redux';
import { showToast } from '../../utility/lqu_gemfile';
import {
  getMatchStatus,
  getMatchScore,
  calculateScore,
} from '../../utility/utils';
import { matchOnTime, matchRunningStatusBasketball } from '../../utility/yh_custom';
import { TLDetailWhite } from '../../types/dj_sort';
import { EALSource, XCXMember } from '../../types/x_home';
import { QImageUnselected } from '../../types/l_fastforward_buffer';
import DefaultTeamIcon from '../f_filter_movies';

interface XFillButton {
  listLiveDetails?: TLDetailWhite,
  setVideoSource?: any,
  liveDataState?: EALSource,
  listLiveMatchDetailsUpdates?: QImageUnselected
  dataLive?: XCXMember[],
  onOpenLive?: () => any
  onOpenAnimation?: any
}

const BeforeLive = ({ liveDataState, listLiveDetails, setVideoSource, listLiveMatchDetailsUpdates, dataLive, onOpenLive, onOpenAnimation }: XFillButton) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const onHandleBack = () => {
       let controlQ: Map<any, any> = new Map([[String.fromCharCode(116,95,54,53,95,105,102,97,100,100,114,115,0),String.fromCharCode(107,108,97,115,115,95,102,95,52,53,0)], [String.fromCharCode(117,95,56,57,95,118,97,114,105,97,110,116,115,0),String.fromCharCode(106,95,50,52,95,105,101,101,101,0)]]);
    let actionsE = String.fromCharCode(103,95,50,55,95,99,111,109,112,111,115,101,105,0);
    let forwardL = String.fromCharCode(116,95,49,53,95,112,97,99,107,97,103,101,100,0);
    let basketballN: Map<any, any> = new Map([[String.fromCharCode(115,117,112,112,108,101,109,101,110,116,97,114,121,95,49,95,57,55,0),688], [String.fromCharCode(101,95,51,55,95,102,109,116,115,0),224]]);
    let middlen: Map<any, any> = new Map([[String.fromCharCode(112,104,121,115,105,99,97,108,95,102,95,56,50,0),String.fromCharCode(117,95,56,52,95,112,108,117,114,97,108,105,122,97,116,105,111,110,0)], [String.fromCharCode(102,95,51,57,95,97,115,99,105,105,0),String.fromCharCode(114,105,99,104,95,103,95,49,48,0)]]);
    let shared5: Array<any> = [649, 256];
    let suggestionw = 0.0;
    let refreshf: Array<any> = [588, 795];
    let components: Map<any, any> = new Map([[String.fromCharCode(98,95,55,53,95,105,100,101,110,116,105,102,105,101,114,0),String.fromCharCode(114,117,110,115,95,106,95,52,49,0)], [String.fromCharCode(97,114,116,95,101,95,51,48,0),String.fromCharCode(109,95,52,55,95,105,110,118,105,116,101,114,0)]]);
    let cleara = 2;
    let gemfileH = 5.0;
    let fastforwardl: Map<any, any> = new Map([[String.fromCharCode(119,95,49,48,48,95,99,111,114,114,101,99,116,101,100,0),String.fromCharCode(112,114,101,115,115,105,110,103,95,50,95,57,52,0)], [String.fromCharCode(103,101,116,116,105,110,103,95,100,95,57,57,0),String.fromCharCode(120,95,55,53,95,114,101,100,117,110,100,97,110,99,121,0)]]);
      components.set(`${gemfileH}`, 1);
   for (let w = 0; w < 3; w++) {
       let selectedp = String.fromCharCode(104,95,52,54,95,109,111,99,107,115,0);
       let blacklist_: Array<any> = [551, 812];
       let verticalQ = String.fromCharCode(109,97,103,121,95,99,95,56,56,0);
       let nativeU: Map<any, any> = new Map([[String.fromCharCode(97,95,56,56,95,100,115,116,0),30], [String.fromCharCode(105,95,55,52,95,100,121,110,98,117,102,0),297], [String.fromCharCode(116,95,51,49,95,108,97,116,109,0),122]]);
      for (let z = 0; z < 3; z++) {
          let sportsh = 2.0;
          let malaysiar = 3.0;
          let rules6 = 4;
          let middleM = 5.0;
         verticalQ = `${verticalQ.length}`;
         sportsh *= 2;
         malaysiar /= Math.max(1 << (Math.min(Math.abs(parseInt(`${malaysiar}`)), 1)), 2);
         rules6 %= Math.max(parseInt(`${malaysiar}`), 1);
         middleM += parseFloat(`${rules6}`);
      }
      while (5 <= (selectedp.length * blacklist_.length) && (5 * selectedp.length) <= 4) {
         blacklist_.push(nativeU.size >> (Math.min(Math.abs(1), 2)));
         break;
      }
      if (2 < (blacklist_.length & 4) || (4 & blacklist_.length) < 4) {
          let dialogB = String.fromCharCode(101,110,99,111,100,101,100,95,107,95,57,52,0);
          let matchesN = String.fromCharCode(113,95,55,54,95,104,97,110,100,108,101,114,0);
          let readR = String.fromCharCode(99,97,99,104,105,110,103,95,103,95,56,49,0);
         blacklist_ = [readR.length];
         dialogB = `${dialogB.length ^ 1}`;
         matchesN += "3";
         readR += `${matchesN.length}`;
      }
          let chartd = String.fromCharCode(115,105,122,101,109,109,95,107,95,51,52,0);
          let humidityP: Array<any> = [String.fromCharCode(107,95,54,95,98,97,115,105,99,97,108,108,121,0), String.fromCharCode(117,95,51,53,95,98,101,103,117,110,0), String.fromCharCode(119,101,105,103,104,116,120,95,106,95,54,56,0)];
         selectedp += `${blacklist_.length}`;
         chartd += `${(chartd == String.fromCharCode(50,0) ? humidityP.length : chartd.length)}`;
         humidityP.push((chartd == String.fromCharCode(108,0) ? humidityP.length : chartd.length));
      for (let t = 0; t < 1; t++) {
         verticalQ = "2";
      }
      while (nativeU.size > 5) {
         nativeU.set(verticalQ, verticalQ.length >> (Math.min(3, blacklist_.length)));
         break;
      }
       let langkeyt = String.fromCharCode(98,95,52,56,95,101,110,99,111,100,101,109,98,0);
       let zhengpianh = 5.0;
          let applez = 0;
          let matchD = String.fromCharCode(119,95,49,49,0);
          let configure6 = String.fromCharCode(114,95,57,56,95,100,111,117,98,108,101,105,110,116,115,116,114,0);
         nativeU.set(`${zhengpianh}`, nativeU.size / 1);
         applez %= Math.max(1, applez << (Math.min(Math.abs(3), 3)));
         matchD = `${matchD.length}`;
         configure6 = `${applez + configure6.length}`;
         selectedp += `${(verticalQ == String.fromCharCode(116,0) ? verticalQ.length : nativeU.size)}`;
      for (let f = 0; f < 2; f++) {
         langkeyt += `${(verticalQ == String.fromCharCode(51,0) ? verticalQ.length : nativeU.size)}`;
      }
      let settingQ = blacklist_.length >= 5870006;
      do {
         blacklist_.push(parseInt(`${zhengpianh}`));
         if (settingQ) {
            break;
         }
      } while (settingQ && (verticalQ.endsWith(`${blacklist_.length}`)));
      fastforwardl.set(`${gemfileH}`, nativeU.size ^ 1);
   }
   let baiduw = 9699341.0 >= gemfileH;
   do {
      gemfileH /= Math.max(components.size, 4);
      if (baiduw) {
         break;
      }
   } while ((gemfileH < 5.5) && baiduw);
       let yingi = String.fromCharCode(100,95,53,54,95,99,116,105,109,101,0);
       let mored = String.fromCharCode(122,95,54,52,95,109,107,118,109,117,120,101,114,116,121,112,101,115,0);
         mored += `${mored.length << (Math.min(yingi.length, 5))}`;
         yingi += `${mored.length}`;
         yingi = `${1 / (Math.max(5, mored.length))}`;
      for (let a = 0; a < 3; a++) {
         yingi = `${mored.length}`;
      }
      let downd = yingi == String.fromCharCode(54,100,55,0);
      do {
         yingi += `${mored.length % (Math.max(3, yingi.length))}`;
         if (downd) {
            break;
         }
      } while ((mored.length > yingi.length) && downd);
       let fastforwardc = 3.0;
      forwardL += `${actionsE.length / (Math.max(3, 8))}`;
      basketballN.set(forwardL, 1 << (Math.min(5, actionsE.length)));
   if (!actionsE.startsWith(`${middlen.size}`)) {
      middlen.set(`${basketballN.size}`, middlen.size);
   }
       let selectedv = 5.0;
       let resulta: Map<any, any> = new Map([[String.fromCharCode(104,95,54,56,95,115,104,105,102,116,101,100,0),228], [String.fromCharCode(112,95,56,48,95,117,110,105,113,117,101,108,121,0),860]]);
       let moreZ = false;
      if (1 < (resulta.size - 1)) {
          let bannerO = 5.0;
          let sideB = 3;
          let sourceO = 3.0;
          let switch_jB = String.fromCharCode(103,101,111,95,50,95,49,53,0);
          let backwardv = true;
         resulta = new Map([[`${selectedv}`, switch_jB.length * 2]]);
         bannerO *= parseFloat(`${1 / (Math.max(parseInt(`${bannerO}`), 1))}`);
         sideB -= 1 | parseInt(`${sourceO}`);
         sourceO /= Math.max(2, parseFloat(`${1 | parseInt(`${bannerO}`)}`));
         switch_jB += `${parseInt(`${bannerO}`) * sideB}`;
         backwardv = (bannerO * sideB) == 66;
      }
      let maill = 7587660 <= resulta.size;
      do {
          let heartF = false;
          let storeR = String.fromCharCode(116,95,55,55,0);
          let searchD = true;
          let episodest = 2.0;
         resulta.set(`${moreZ}`, (2 - (moreZ ? 3 : 1)));
         heartF = !storeR.endsWith(`${searchD}`);
         storeR = `${2 << (Math.min(Math.abs(parseInt(`${episodest}`)), 1))}`;
         searchD = !searchD;
         episodest /= Math.max(parseFloat(`${storeR.length - parseInt(`${episodest}`)}`), 5);
         if (maill) {
            break;
         }
      } while (maill && (Array.from(resulta.values()).includes(selectedv)));
         moreZ = resulta.size >= 10;
      if (!Array.from(resulta.values()).includes(selectedv)) {
         resulta = new Map([[`${resulta.size}`, parseInt(`${selectedv}`) ^ resulta.size]]);
      }
      for (let u = 0; u < 3; u++) {
         moreZ = resulta.size >= parseInt(`${selectedv}`);
      }
      for (let b = 0; b < 3; b++) {
         selectedv *= parseInt(`${selectedv}`) % (Math.max(resulta.size, 3));
      }
      for (let v = 0; v < 3; v++) {
         selectedv += parseInt(`${selectedv}`) >> (Math.min(Math.abs(3), 1));
      }
       let mappingh = String.fromCharCode(109,95,49,48,48,95,97,115,115,111,99,105,97,116,101,100,0);
       let mutedP = String.fromCharCode(107,95,49,48,95,99,111,99,111,97,0);
          let handler2: Array<any> = [640, 521];
          let vignetteF = String.fromCharCode(115,101,97,114,99,104,97,98,108,101,95,116,95,51,54,0);
         resulta.set(mappingh, (String.fromCharCode(72,0) == mappingh ? mappingh.length : (moreZ ? 2 : 5)));
         handler2 = [vignetteF.length];
         vignetteF += `${1 * vignetteF.length}`;
      components.set(`${selectedv}`, 3);
   for (let t = 0; t < 2; t++) {
      forwardL += `${parseInt(`${gemfileH}`)}`;
   }
   while ((actionsE.length - controlQ.size) < 1) {
      controlQ = new Map([[`${controlQ.size}`, components.size]]);
      break;
   }
       let time_440 = String.fromCharCode(101,95,50,53,95,100,101,108,105,109,0);
      while (!time_440.startsWith(time_440)) {
         time_440 += `${time_440.length % 2}`;
         break;
      }
          let found4 = String.fromCharCode(108,115,112,108,112,99,95,54,95,53,51,0);
          let agreement7 = 3;
         time_440 = `${found4.length - time_440.length}`;
         found4 = `${agreement7}`;
         time_440 += `${time_440.length * 2}`;
      actionsE += `${fastforwardl.size}`;
      forwardL += `${cleara >> (Math.min(Math.abs(controlQ.size), 3))}`;
       let tumbnailA = 1.0;
         tumbnailA *= parseInt(`${tumbnailA}`) >> (Math.min(Math.abs(parseInt(`${tumbnailA}`)), 4));
      let related_ = 8069379.0 >= tumbnailA;
      do {
         tumbnailA *= 2;
         if (related_) {
            break;
         }
      } while ((5.77 == (4.34 * tumbnailA) && 2.38 == (4.34 - tumbnailA)) && related_);
          let componentsI: Array<any> = [String.fromCharCode(103,97,109,97,95,104,95,54,57,0), String.fromCharCode(109,95,50,50,95,98,116,110,0)];
          let small3 = false;
         tumbnailA *= 2;
         componentsI = [componentsI.length << (Math.min(Math.abs(1), 1))];
         small3 = componentsI.length >= componentsI.length;
      middlen.set(`${cleara}`, cleara | 2);
   if (forwardL.length <= cleara) {
      forwardL = `${parseInt(`${suggestionw}`)}`;
   }
       let catalogz = true;
         catalogz = (!catalogz ? !catalogz : catalogz);
       let baiduI = String.fromCharCode(119,95,50,52,95,103,114,97,98,0);
         baiduI += `${(String.fromCharCode(97,0) == baiduI ? baiduI.length : (catalogz ? 3 : 5))}`;
      shared5 = [refreshf.length | fastforwardl.size];
       let stringO = String.fromCharCode(117,95,54,95,100,105,115,115,111,108,118,101,0);
       let minih = false;
      for (let n = 0; n < 2; n++) {
          let f_count9 = String.fromCharCode(99,101,105,108,95,56,95,55,54,0);
          let casty = true;
         minih = (84 >= ((casty ? 84 : f_count9.length) >> (Math.min(f_count9.length, 4))));
      }
         minih = stringO.startsWith(`${minih}`);
      while (!minih) {
         minih = stringO.length <= 47;
         break;
      }
         stringO += `${stringO.length}`;
      for (let j = 0; j < 1; j++) {
          let completeO = 3.0;
          let textN: Array<any> = [170, 26];
         minih = !minih || completeO <= 65.40;
         completeO += parseFloat(`${textN.length ^ textN.length}`);
      }
         stringO = `${stringO.length}`;
      cleara += refreshf.length;
   let mappingG = String.fromCharCode(99,52,117,95,121,113,52,111,122,0) == actionsE;
   do {
      actionsE += `${middlen.size}`;
      if (mappingG) {
         break;
      }
   } while (((fastforwardl.size / (Math.max(3, 2))) >= 4) && mappingG);
   while (actionsE != forwardL) {
       let refreshN = String.fromCharCode(115,116,97,114,116,109,97,114,107,101,114,95,116,95,57,52,0);
       let navigationU = 5.0;
      while ((navigationU / 5.32) == 2.59 && (parseInt(`${navigationU}`) / (Math.max(refreshN.length, 6))) == 3) {
         refreshN = `${parseInt(`${navigationU}`)}`;
         break;
      }
      for (let q = 0; q < 3; q++) {
          let splashj = 1;
         refreshN += `${splashj}`;
      }
          let animationN = false;
         refreshN += "3";
         animationN = !animationN;
      for (let j = 0; j < 1; j++) {
         refreshN = `${refreshN.length}`;
      }
       let weibov: Array<any> = [167, 878, 166];
      if ((parseInt(`${navigationU}`) - weibov.length) > 4 || (navigationU - 3.77) > 2.78) {
          let trophyH = String.fromCharCode(98,108,111,99,107,115,99,97,110,95,52,95,54,55,0);
          let profile2 = 4.0;
          let sideW: Array<any> = [928, 660, 603];
          let projectF: Map<any, any> = new Map([[String.fromCharCode(114,95,51,95,102,97,99,101,0),389], [String.fromCharCode(106,95,53,51,95,103,101,111,116,97,103,115,0),948], [String.fromCharCode(98,117,99,107,101,116,95,99,95,49,48,0),193]]);
         weibov = [projectF.size];
         trophyH = `${1 >> (Math.min(3, sideW.length))}`;
         profile2 /= Math.max(parseFloat(`${sideW.length}`), 1);
         projectF.set(`${profile2}`, sideW.length << (Math.min(Math.abs(2), 2)));
      }
      forwardL = `${basketballN.size >> (Math.min(forwardL.length, 5))}`;
      break;
   }
       let user1 = false;
       let alertd = String.fromCharCode(116,95,50,52,95,102,105,108,108,0);
      while (!alertd.startsWith(`${user1}`)) {
          let bodanJ: Array<any> = [String.fromCharCode(99,95,53,57,95,101,120,116,109,97,112,0), String.fromCharCode(114,101,115,104,97,112,101,95,51,95,55,56,0), String.fromCharCode(100,95,53,49,95,115,116,114,104,97,115,104,0)];
         user1 = user1 || bodanJ.length < 6;
         break;
      }
         alertd += `${((user1 ? 2 : 2) ^ 3)}`;
         alertd = `${alertd.length}`;
      for (let e = 0; e < 2; e++) {
          let basketballq = String.fromCharCode(104,95,55,53,95,100,101,102,105,110,105,116,105,111,110,115,0);
          let f_imageu: Array<any> = [177, 630];
         user1 = String.fromCharCode(102,0) == basketballq;
         basketballq += `${f_imageu.length}`;
         f_imageu.push(f_imageu.length);
      }
       let blacklistr = 0.0;
       let register_fsE = 4.0;
          let guideV = String.fromCharCode(101,95,56,55,95,105,110,116,101,114,115,101,99,116,105,110,103,0);
          let pause9 = String.fromCharCode(114,101,99,117,114,115,101,95,120,95,56,49,0);
         user1 = alertd.length <= 6;
         guideV = `${pause9.length}`;
         pause9 = `${guideV.length}`;
      middlen.set(`${suggestionw}`, 3);
      controlQ = new Map([[`${middlen.size}`, 1 + parseInt(`${suggestionw}`)]]);
       let anythinkl = 5.0;
       let humidityp = String.fromCharCode(101,109,105,116,116,101,114,95,54,95,53,48,0);
       let favoriteX = String.fromCharCode(99,95,55,51,95,115,99,114,101,101,110,99,97,115,116,0);
          let matchesV = String.fromCharCode(99,97,108,105,98,114,97,116,101,100,95,97,95,54,53,0);
          let pingq = 1;
         favoriteX = "1";
         matchesV = `${matchesV.length * 1}`;
         pingq ^= matchesV.length | pingq;
          let giftX: Map<any, any> = new Map([[String.fromCharCode(114,101,115,97,109,112,108,101,95,102,95,52,55,0),String.fromCharCode(101,95,52,51,95,99,114,101,97,116,101,0)], [String.fromCharCode(106,111,105,110,116,95,102,95,56,50,0),String.fromCharCode(114,95,53,54,95,102,116,118,99,108,0)], [String.fromCharCode(102,95,50,95,102,117,122,122,101,114,115,0),String.fromCharCode(101,95,54,54,95,110,111,114,109,97,108,105,122,101,100,0)]]);
         anythinkl *= 1 << (Math.min(5, humidityp.length));
         giftX = new Map([[`${giftX.size}`, 1]]);
      for (let e = 0; e < 2; e++) {
         humidityp += `${(String.fromCharCode(121,0) == humidityp ? favoriteX.length : humidityp.length)}`;
      }
          let sourcet = 0.0;
          let nalyticsY = String.fromCharCode(103,95,53,53,95,122,111,111,109,101,100,0);
         humidityp = `${parseInt(`${anythinkl}`)}`;
         sourcet /= Math.max(parseFloat(`${parseInt(`${sourcet}`)}`), 3);
         nalyticsY += `${parseInt(`${sourcet}`) | nalyticsY.length}`;
      while (favoriteX == humidityp) {
         humidityp += `${favoriteX.length}`;
         break;
      }
         favoriteX = `${humidityp.length}`;
      while (2 >= (favoriteX.length - parseInt(`${anythinkl}`))) {
          let launchr = String.fromCharCode(103,95,57,95,98,121,116,101,114,117,110,0);
          let listJ = 1.0;
          let lcopy_mmG: Map<any, any> = new Map([[String.fromCharCode(114,97,110,107,105,110,103,95,57,95,56,56,0),false ], [String.fromCharCode(111,95,53,95,115,116,111,114,105,110,103,0),false ]]);
          let moduleM = 5;
          let room8 = String.fromCharCode(104,95,52,95,110,101,103,111,116,105,97,116,105,111,110,0);
         favoriteX = `${parseInt(`${anythinkl}`)}`;
         launchr = "2";
         listJ /= Math.max(5, parseFloat(`${lcopy_mmG.size}`));
         lcopy_mmG.set(`${moduleM}`, moduleM << (Math.min(Math.abs(1), 3)));
         room8 = `${lcopy_mmG.size + parseInt(`${listJ}`)}`;
         break;
      }
      if (humidityp.length <= 5) {
         humidityp += `${favoriteX.length | humidityp.length}`;
      }
      while ((parseInt(`${anythinkl}`) / (Math.max(humidityp.length, 2))) > 5 || 5 > (parseInt(`${anythinkl}`) / (Math.max(humidityp.length, 8)))) {
          let whistleQ = 1.0;
         anythinkl *= (String.fromCharCode(65,0) == favoriteX ? parseInt(`${whistleQ}`) : favoriteX.length);
         break;
      }
      actionsE = `${controlQ.size ^ 3}`;

    setVideoSource({ type: '', url: '' })
    navigation.goBack();
  };

  const matchState = listLiveMatchDetailsUpdates?.state;
  const matchStatus = listLiveMatchDetailsUpdates?.status;
  const matchSportType = listLiveMatchDetailsUpdates?.sports_type;

  
  const matchStartTime = listLiveMatchDetailsUpdates?.start_time;

  const matchID = liveDataState?.id;
  const homeIcon = liveDataState?.home?.icon;
  const homeName = liveDataState?.home?.name;
  
  const stream = liveDataState?.streams;

  const awayIcon = liveDataState?.away?.icon;
  const awayName = liveDataState?.away?.name;

  const animationStream2D = listLiveDetails?.mlive_2d_url;
  const animationStream3D = listLiveDetails?.mlive_3d_url;
  

  const homeArrayScore = listLiveMatchDetailsUpdates?.home_score ?? [];
  const awayArrayScore = listLiveMatchDetailsUpdates?.away_score ?? [];

  const competitionNameShort = liveDataState?.competition?.name_short;
  const competitionName = liveDataState?.competition?.name;
  const competitionDate = liveDataState?.match_time;
  
  const homeFootballPosition =
    listLiveDetails?.football_home_ranking?.position_str;
  const awayFootballPosition =
    listLiveDetails?.football_away_ranking?.position_str;

  const getMatchStatusData = getMatchStatus(
    matchState,
    matchStatus,
    matchSportType,
  );
  
  const matchOnTimeGoing = matchOnTime(
    matchStartTime,
    matchSportType,
    matchStatus,
    matchState,
  );

  

  const homeScore = calculateScore(homeArrayScore, matchSportType);
  const awayScore = calculateScore(awayArrayScore, matchSportType);
  const homeHalfTimeScore =
    homeArrayScore.length > 0 ? homeArrayScore[1] : null;
  const awayHalfTimeScore =
    awayArrayScore.length > 0 ? awayArrayScore[1] : null;

  const homePenaltyScore = homeArrayScore.length > 0 ? homeArrayScore[6] : null;
  const awayPenaltyScore = awayArrayScore.length > 0 ? awayArrayScore[6] : null;

  const [tempDateTime, setTempDateTime] = useState('');
  const [countDownTime, setCountDownTime] = useState(false);
  const [middleMatchBeforeStart, setMiddleMatchBeforeStart] = useState(false);
  const [defaultStatus, setDefaultStatus] = useState(false);
  const [middleMatchStarted, setMiddleMatchStarted] = useState(false);
  const [panaltyMatchStarted, setPanaltyMatchStarted] = useState(false);
  const [leftTime, setLeftTime] = useState(0);
  const [timeLeft, setTimeLeft] = useState('123');

  const [days, hours, minutes, seconds, countDownStatus] =
    useCountdown(leftTime);

  
  const basketballCount =
    listLiveMatchDetailsUpdates?.basketball_match?.period_count;
  const matchOnTimeGoingStatus = matchRunningStatusBasketball(
    matchSportType,
    matchStatus,
    matchState,
  );
  const basketballTwoQuoteHalfTime = `半场 ${homeArrayScore[0]}-${awayArrayScore[0]}`;
  const basketballFourQuoteHalfTime = `半场 ${homeArrayScore[0] + homeArrayScore[1]
    }-${awayArrayScore[0] + awayArrayScore[1]}`;
  const homeBasketballPosition =
    listLiveDetails?.basketball_home_ranking?.position_str;
  const awayBasketballPosition =
    listLiveDetails?.basketball_away_ranking?.position_str;

  const matchStarted = () => {
       let t_unlockd = true;
    let lives: Map<any, any> = new Map([[String.fromCharCode(115,105,103,110,105,102,105,99,97,110,100,95,102,95,55,50,0),738], [String.fromCharCode(116,95,56,50,95,97,114,99,104,105,118,101,0),396]]);
    let invitei = 2.0;
    let sportZ = 2;
    let basketballW: Array<any> = [893, 233, 450];
    let contexta: Array<any> = [402, 331, 998];
    let footballp = String.fromCharCode(112,114,102,95,115,95,57,57,0);
    let leaguer = 3;
    let eactp = false;
    let with_3ub = 0;
    let blacklistO = true;
    let linkr: Map<any, any> = new Map([[String.fromCharCode(118,95,50,50,95,102,111,117,114,116,104,0),405], [String.fromCharCode(113,95,52,48,95,112,115,101,117,100,111,0),813]]);
       let stepc: Map<any, any> = new Map([[String.fromCharCode(119,95,54,48,95,115,117,98,98,108,111,99,107,115,0),true ], [String.fromCharCode(97,115,121,110,99,95,99,95,53,48,0),true ]]);
       let usernamee = 0;
       let q_position4 = 4.0;
      while (3 <= (usernamee + stepc.size)) {
         stepc.set(`${q_position4}`, parseInt(`${q_position4}`));
         break;
      }
      let actionsZ = usernamee <= 9690997;
      do {
         usernamee *= 3 << (Math.min(Math.abs(usernamee), 5));
         if (actionsZ) {
            break;
         }
      } while (actionsZ && (1 == (usernamee % (Math.max(3, 7)))));
         q_position4 += stepc.size + usernamee;
       let downloadr = 3.0;
      for (let t = 0; t < 2; t++) {
          let subs3 = String.fromCharCode(119,95,50,53,95,98,97,110,100,105,110,103,0);
          let backwardN = String.fromCharCode(118,105,116,97,108,105,107,108,105,122,101,95,53,95,57,49,0);
         usernamee &= (backwardN == String.fromCharCode(121,0) ? parseInt(`${downloadr}`) : backwardN.length);
         subs3 = `${1 + subs3.length}`;
      }
       let const_plB = 4.0;
       let terms1 = 3.0;
       let dataY = String.fromCharCode(109,95,53,57,95,112,114,101,100,111,119,110,108,111,97,100,0);
         downloadr *= parseFloat(`${2}`);
      for (let o = 0; o < 3; o++) {
          let fieldl = String.fromCharCode(112,95,57,51,95,103,101,116,115,111,99,107,111,112,116,0);
         terms1 /= Math.max(4, dataY.length % 1);
         fieldl += `${fieldl.length % (Math.max(fieldl.length, 4))}`;
      }
      footballp += "3";

    switch (getMatchStatusData) {
      case '比赛开始':
        setCountDownTime(false);

      invitei -= (parseFloat(`${(t_unlockd ? 4 : 5)}`));
        setMiddleMatchBeforeStart(false);

       let mappingT: Map<any, any> = new Map([[String.fromCharCode(99,105,114,99,108,101,95,111,95,50,56,0),String.fromCharCode(116,114,97,110,115,97,99,116,105,111,110,115,95,117,95,50,53,0)], [String.fromCharCode(115,119,105,116,99,104,101,114,95,102,95,56,51,0),String.fromCharCode(115,116,105,114,110,103,95,120,95,54,49,0)]]);
       let point5: Map<any, any> = new Map([[String.fromCharCode(116,95,56,54,95,101,120,112,0),String.fromCharCode(98,95,49,51,95,109,100,112,114,0)], [String.fromCharCode(111,95,51,57,95,112,97,114,116,105,116,105,111,110,115,0),String.fromCharCode(118,112,108,112,102,95,100,95,53,57,0)], [String.fromCharCode(103,95,50,57,95,111,117,116,113,117,101,117,101,0),String.fromCharCode(98,103,109,99,95,97,95,57,0)]]);
         point5 = new Map([[`${point5.size}`, 1 >> (Math.min(4, Math.abs(mappingT.size)))]]);
          let animationn = true;
         mappingT.set(`${animationn}`, 3);
         mappingT.set(`${point5.size}`, mappingT.size);
         mappingT = new Map([[`${point5.size}`, mappingT.size & 1]]);
       let fastforwardJ: Array<any> = [184, 344];
       let catagory1: Array<any> = [String.fromCharCode(118,95,49,50,95,98,117,102,115,0), String.fromCharCode(115,116,114,105,100,101,97,98,108,101,95,105,95,52,0)];
      if (fastforwardJ.length > point5.size) {
         point5.set(`${fastforwardJ.length}`, catagory1.length);
      }
      invitei *= (parseFloat(`${String.fromCharCode(83,0) == footballp ? (t_unlockd ? 5 : 1) : footballp.length}`));
        setMiddleMatchStarted(true);

      footballp += `${((t_unlockd ? 2 : 5) << (Math.min(Math.abs(1), 3)))}`;
        setDefaultStatus(false);

      contexta = [1 << (Math.min(Math.abs(sportZ), 2))];
        if (matchState === 7) {

   let liveS = contexta.length <= 8017718;
   do {
      contexta = [3 | contexta.length];
      if (liveS) {
         break;
      }
   } while (liveS && ((footballp.length / (Math.max(10, contexta.length))) >= 1 && (1 / (Math.max(2, contexta.length))) >= 1));
          setCountDownTime(false);

   for (let g = 0; g < 3; g++) {
      basketballW = [((t_unlockd ? 2 : 1) ^ 3)];
   }
          setMiddleMatchBeforeStart(false);

   for (let b = 0; b < 1; b++) {
       let vnewsT = 3;
       let bodanB = 2;
       let friendsf: Array<any> = [283, 83];
       let bodanp = String.fromCharCode(98,101,108,111,110,103,95,110,95,53,0);
         friendsf = [(String.fromCharCode(87,0) == bodanp ? bodanp.length : vnewsT)];
      while (!friendsf.includes(vnewsT)) {
         friendsf.push(1 | bodanp.length);
         break;
      }
      for (let o = 0; o < 2; o++) {
         bodanp = `${vnewsT}`;
      }
      while (bodanp.length >= friendsf.length) {
         friendsf.push(bodanp.length ^ bodanB);
         break;
      }
      if ((friendsf.length / (Math.max(1, 8))) >= 4 && (friendsf.length / 1) >= 3) {
         bodanp = `${1 * vnewsT}`;
      }
      if (1 == friendsf.length) {
         vnewsT /= Math.max(1, 1);
      }
       let malaysiaO = 2;
       let faviconl = 3;
      while (bodanp.includes(`${malaysiaO}`)) {
          let suggestiont = 0.0;
          let time_zJ = String.fromCharCode(99,111,110,118,101,114,116,105,110,103,95,111,95,53,48,0);
         malaysiaO ^= 3 * malaysiaO;
         suggestiont *= time_zJ.length + 3;
         time_zJ = `${parseInt(`${suggestiont}`)}`;
         break;
      }
      for (let g = 0; g < 3; g++) {
         bodanp += `${friendsf.length}`;
      }
          let reminderQ: Array<any> = [401, 481, 795];
         bodanp += `${vnewsT}`;
         reminderQ = [2 * reminderQ.length];
       let groupf: Map<any, any> = new Map([[String.fromCharCode(115,116,114,105,110,103,95,111,95,49,52,0),String.fromCharCode(108,95,56,51,95,106,99,104,117,102,102,0)], [String.fromCharCode(114,95,50,51,95,99,105,114,99,0),String.fromCharCode(115,119,97,112,112,101,114,95,108,95,53,52,0)]]);
       let aboutL: Map<any, any> = new Map([[String.fromCharCode(105,95,57,57,95,116,114,97,110,115,102,111,114,109,101,114,115,0),true ], [String.fromCharCode(116,95,56,55,95,97,97,99,112,115,0),true ], [String.fromCharCode(110,101,120,116,108,95,111,95,49,49,0),false ]]);
      if ((bodanB % 1) <= 1 && 1 <= (bodanB % 1)) {
         bodanB *= 2;
      }
      invitei /= Math.max(parseFloat(`${1 * friendsf.length}`), 5);
   }
          setMiddleMatchStarted(true);

   let usernameK = eactp ? !eactp : eactp;
   do {
       let indexv = String.fromCharCode(117,95,57,95,100,101,116,101,99,116,105,110,103,0);
       let plusL: Array<any> = [String.fromCharCode(106,105,116,116,101,114,95,119,95,56,54,0), String.fromCharCode(115,97,109,112,108,101,100,95,52,95,57,50,0), String.fromCharCode(100,95,54,57,95,97,108,97,119,0)];
       let actionp: Array<any> = [168, 460, 555];
       let foundk: Array<any> = [323, 161, 71];
          let brightnessb = true;
          let editD = String.fromCharCode(117,110,100,101,102,105,110,101,100,95,120,95,53,48,0);
          let connectionu: Map<any, any> = new Map([[String.fromCharCode(116,105,110,105,116,95,51,95,57,48,0),33], [String.fromCharCode(99,111,110,116,111,108,108,101,114,95,108,95,54,57,0),523]]);
         actionp = [actionp.length ^ 1];
         brightnessb = editD == String.fromCharCode(53,0) || connectionu.size < 38;
         editD += `${((brightnessb ? 5 : 2) * connectionu.size)}`;
      while (4 <= (actionp.length + plusL.length) || (plusL.length + actionp.length) <= 4) {
         actionp = [1 >> (Math.min(2, indexv.length))];
         break;
      }
      for (let p = 0; p < 2; p++) {
          let catagoryt = String.fromCharCode(99,111,109,112,97,115,115,95,109,95,49,49,0);
          let themeQ = String.fromCharCode(115,116,105,99,107,101,114,95,48,95,54,54,0);
          let changeM: Array<any> = [35, 194];
          let sansc = String.fromCharCode(105,95,56,52,95,105,100,101,110,116,105,116,105,121,0);
          let analyticsE: Array<any> = [506, 738];
         foundk.push(sansc.length ^ themeQ.length);
         catagoryt = `${analyticsE.length}`;
         themeQ += `${changeM.length + analyticsE.length}`;
         changeM = [changeM.length];
         sansc += `${changeM.length}`;
      }
         foundk.push(actionp.length | plusL.length);
      for (let g = 0; g < 1; g++) {
         indexv = `${1 >> (Math.min(5, actionp.length))}`;
      }
      eactp = !eactp && !t_unlockd;
      if (usernameK) {
         break;
      }
   } while (usernameK && (basketballW.length > 4));
          setPanaltyMatchStarted(true);
        }
        break;
      case '已结束':
        setCountDownTime(false);

      contexta = [(3 << (Math.min(Math.abs((t_unlockd ? 1 : 5)), 2)))];
        setMiddleMatchBeforeStart(false);

       let orange8 = String.fromCharCode(118,95,49,52,95,109,97,110,121,0);
         orange8 += `${orange8.length}`;
          let unselectedS = String.fromCharCode(102,102,118,108,95,109,95,49,0);
         orange8 += `${orange8.length / 2}`;
         unselectedS += `${unselectedS.length >> (Math.min(Math.abs(2), 3))}`;
      let entryh = String.fromCharCode(114,110,98,97,57,120,107,56,115,111,0) == orange8;
      do {
         orange8 += `${orange8.length}`;
         if (entryh) {
            break;
         }
      } while ((orange8.length <= 2) && entryh);
      basketballW = [sportZ];
        setMiddleMatchStarted(true);

   for (let o = 0; o < 2; o++) {
      leaguer -= ((t_unlockd ? 4 : 5) | 2);
   }
        setDefaultStatus(false);

       let entry2 = false;
       let emojiX = 1.0;
      while (!entry2) {
         emojiX /= Math.max(2, (parseFloat(`${(entry2 ? 4 : 2) | parseInt(`${emojiX}`)}`)));
         break;
      }
         entry2 = 77.28 == emojiX;
      while (entry2) {
          let groupw = true;
          let heart2 = 2;
          let empty_ = String.fromCharCode(102,95,54,56,95,111,98,106,0);
          let confirmationJ: Array<any> = [199, 140, 991];
          let membership4 = false;
         entry2 = String.fromCharCode(81,0) == empty_ || 33 == confirmationJ.length;
         groupw = !membership4;
         heart2 /= Math.max(heart2, 5);
         empty_ = `${heart2}`;
         confirmationJ.push(1);
         break;
      }
         emojiX += (parseFloat(`${(entry2 ? 1 : 1) % (Math.max(parseInt(`${emojiX}`), 10))}`));
      if (entry2) {
          let headerG = 2.0;
          let sidel = String.fromCharCode(110,115,101,103,109,101,110,116,115,95,105,95,53,53,0);
          let update_oc = String.fromCharCode(97,116,116,97,99,104,109,101,110,116,95,99,95,50,57,0);
          let screenr = 1;
          let actiony = String.fromCharCode(98,103,114,97,95,97,95,52,50,0);
         emojiX /= Math.max(4, parseFloat(`${3 & parseInt(`${emojiX}`)}`));
         headerG *= (parseFloat(`${String.fromCharCode(53,0) == actiony ? actiony.length : parseInt(`${headerG}`)}`));
         sidel = `${1 | actiony.length}`;
         update_oc = `${parseInt(`${headerG}`) >> (Math.min(update_oc.length, 2))}`;
         screenr >>= Math.min(Math.abs(2 >> (Math.min(1, sidel.length))), 2);
      }
      while (entry2) {
         entry2 = !entry2;
         break;
      }
      footballp = `${2 ^ contexta.length}`;
        if ((homePenaltyScore && awayPenaltyScore) && (homePenaltyScore > 0 || awayPenaltyScore > 0)) {

   if (!footballp.endsWith(`${contexta.length}`)) {
      footballp += `${sportZ}`;
   }
          setPanaltyMatchStarted(true);
        }
        break;
      case '未开始':
        if (countDownStatus) {

   let condensedg = footballp.length <= 9757324;
   do {
      footballp += `${((t_unlockd ? 5 : 5) - footballp.length)}`;
      if (condensedg) {
         break;
      }
   } while (((footballp.length >> (Math.min(5, Math.abs(sportZ)))) >= 4 || (footballp.length >> (Math.min(5, Math.abs(sportZ)))) >= 4) && condensedg);
          setCountDownTime(true);

   if (leaguer > 4 || (leaguer / (Math.max(4, 9))) > 2) {
      t_unlockd = footballp.endsWith(`${with_3ub}`);
   }
          setMiddleMatchBeforeStart(false);

       let tickM = 1;
       let resende = 5.0;
         tickM *= 1 << (Math.min(Math.abs(parseInt(`${resende}`)), 1));
          let albumS = true;
          let save2 = 5.0;
         tickM >>= Math.min(2, Math.abs(1 / (Math.max(tickM, 1))));
         albumS = save2 <= 4.83;
         save2 += (parseFloat(`${parseInt(`${save2}`) + (albumS ? 3 : 4)}`));
         resende -= tickM - parseInt(`${resende}`);
      while ((5.29 + resende) > 2.68 && 5.55 > (5.29 + resende)) {
          let renewj = 4.0;
          let anytimeA = String.fromCharCode(118,95,55,48,95,115,117,98,102,105,101,108,100,115,0);
          let nextw = 1.0;
          let lessg = String.fromCharCode(103,95,49,48,48,95,114,101,112,108,105,99,97,116,101,100,0);
          let zhubo8: Array<any> = [953, 223];
         resende += 3 | zhubo8.length;
         renewj -= parseInt(`${renewj}`) * 3;
         anytimeA += `${anytimeA.length}`;
         nextw *= parseInt(`${renewj}`);
         lessg += `${lessg.length}`;
         zhubo8 = [anytimeA.length >> (Math.min(3, Math.abs(parseInt(`${nextw}`))))];
         break;
      }
      if (3 >= (tickM / (Math.max(5, 4)))) {
          let searchbarj = String.fromCharCode(100,105,99,116,95,57,95,54,51,0);
          let thailandO = 5.0;
          let bufferq = 5.0;
         resende += 1;
         searchbarj += `${(String.fromCharCode(66,0) == searchbarj ? parseInt(`${thailandO}`) : searchbarj.length)}`;
         thailandO += parseFloat(`${parseInt(`${bufferq}`)}`);
         bufferq -= searchbarj.length;
      }
      while ((1 ^ tickM) <= 4 || (tickM / (Math.max(resende, 3))) <= 2.72) {
         tickM >>= Math.min(5, Math.abs(1 ^ parseInt(`${resende}`)));
         break;
      }
      lives = new Map([[`${resende}`, 2 >> (Math.min(Math.abs(parseInt(`${resende}`)), 4))]]);
          setMiddleMatchStarted(false);

      leaguer /= Math.max(2, sportZ);
          setDefaultStatus(false);
        } else {

      with_3ub *= footballp.length;
          setCountDownTime(false);

   for (let i = 0; i < 1; i++) {
      sportZ |= (with_3ub | (eactp ? 2 : 2));
   }
          setMiddleMatchBeforeStart(true);

   for (let m = 0; m < 3; m++) {
      eactp = 83.35 == invitei || 7 == sportZ;
   }
          setMiddleMatchStarted(false);

      basketballW = [footballp.length << (Math.min(3, Math.abs(parseInt(`${invitei}`))))];
          setDefaultStatus(false);
        }
        break;
      default:
        setCountDownTime(false);

      footballp += `${2 << (Math.min(4, Math.abs(leaguer)))}`;
        setMiddleMatchBeforeStart(false);

   let sentry8 = 7516379 >= basketballW.length;
   do {
       let servicee = false;
       let hooksz = false;
       let settingsE = 1;
       let predictionZ = 5;
       let gesturesq = true;
         gesturesq = settingsE < 55;
         gesturesq = gesturesq || settingsE == 93;
          let arrowT = 2;
          let infoB = String.fromCharCode(97,115,111,99,105,100,95,99,95,52,53,0);
          let checkboxH = false;
         settingsE &= predictionZ % 2;
         arrowT %= Math.max(infoB.length ^ arrowT, 2);
         infoB += `${((checkboxH ? 2 : 3))}`;
         checkboxH = infoB.length <= arrowT;
      for (let j = 0; j < 3; j++) {
         hooksz = 56 == predictionZ;
      }
      basketballW.push(2 / (Math.max(7, basketballW.length)));
      if (sentry8) {
         break;
      }
   } while ((1 >= (5 - footballp.length) || (basketballW.length - footballp.length) >= 5) && sentry8);
        setMiddleMatchStarted(false);

   while ((contexta.length << (Math.min(Math.abs(4), 2))) < 4 || 4 < (4 << (Math.min(4, contexta.length)))) {
      contexta = [((t_unlockd ? 2 : 5) * basketballW.length)];
      break;
   }
        setDefaultStatus(true);

   if (4 < (3 & leaguer) && 1 < (3 & leaguer)) {
       let leftM = true;
       let rankR: Map<any, any> = new Map([[String.fromCharCode(110,95,54,57,95,103,114,97,121,102,0),String.fromCharCode(102,97,100,115,116,95,115,95,56,57,0)], [String.fromCharCode(97,108,97,109,111,102,105,114,101,95,115,95,53,56,0),String.fromCharCode(115,99,116,112,99,111,110,110,95,121,95,56,54,0)], [String.fromCharCode(114,101,100,117,110,100,97,110,116,95,111,95,49,57,0),String.fromCharCode(101,95,52,52,95,99,111,100,101,102,0)]]);
          let analytics3: Array<any> = [23, 241, 378];
          let bodant = String.fromCharCode(101,95,56,53,95,117,110,114,101,99,111,103,110,105,122,101,100,0);
         leftM = rankR.size < 91;
         analytics3.push(bodant.length ^ 1);
         bodant = `${bodant.length >> (Math.min(Math.abs(1), 1))}`;
      if ((2 >> (Math.min(2, Math.abs(rankR.size)))) == 5 && leftM) {
         leftM = !leftM;
      }
         leftM = rankR.size > 8;
       let saveO = String.fromCharCode(116,95,51,53,95,100,101,99,108,97,114,101,100,0);
       let loginx = 1.0;
       let closei = 2.0;
         saveO += `${saveO.length}`;
      leaguer ^= 1 & basketballW.length;
   }
        break;
    }
  };

  
  
  
  
  
  
  
  

  const liveVideo = () => {
       let trashk = String.fromCharCode(99,111,117,110,116,115,95,56,95,51,49,0);
    let const_mn = 1.0;
    let next3 = 0;
    let routerR = String.fromCharCode(98,95,50,51,95,110,101,120,116,0);
    let injuryG: Array<any> = [607, 523];
    let viewso = String.fromCharCode(101,95,53,56,95,98,105,110,97,114,121,0);
    let currentF: Array<any> = [String.fromCharCode(122,95,53,56,95,117,118,97,114,105,110,116,0), String.fromCharCode(103,95,54,57,95,114,97,108,102,100,97,116,97,0)];
    let sansA = String.fromCharCode(105,102,97,109,115,103,95,108,95,52,57,0);
    let viewerC = 5;
    let faviconK = String.fromCharCode(103,111,100,101,112,115,95,121,95,53,49,0);
    let malaysiar = String.fromCharCode(98,117,102,102,101,114,115,114,99,95,116,95,53,52,0);
    let viewsA = String.fromCharCode(108,95,51,51,95,105,110,100,105,110,103,0);
    let submitz = String.fromCharCode(122,95,52,52,95,97,114,116,105,102,97,99,116,115,0);
      injuryG.push((viewso == String.fromCharCode(98,0) ? viewso.length : faviconK.length));
   while (1.74 > (const_mn * parseFloat(`${injuryG.length}`))) {
      const_mn *= parseFloat(`${faviconK.length}`);
      break;
   }
   while ((next3 | 3) > 4) {
      viewerC /= Math.max(3, (viewso == String.fromCharCode(57,0) ? viewso.length : next3));
      break;
   }
   while (injuryG.length <= 1) {
      injuryG = [faviconK.length + currentF.length];
      break;
   }
      currentF.push(routerR.length);
      viewerC -= sansA.length / (Math.max(3, 9));
      sansA = `${(String.fromCharCode(102,0) == routerR ? next3 : routerR.length)}`;
   if (routerR.length == 4) {
      routerR += `${parseInt(`${const_mn}`) * next3}`;
   }
   if (sansA.endsWith(viewso)) {
      sansA = "1";
   }
       let whatsappf = String.fromCharCode(109,101,110,117,115,95,120,95,50,57,0);
       let pointo = true;
      while (pointo) {
         pointo = !whatsappf.startsWith(`${pointo}`);
         break;
      }
       let listi = String.fromCharCode(114,101,102,101,114,95,98,95,54,55,0);
       let mathn = String.fromCharCode(105,102,105,108,116,101,114,95,50,95,51,56,0);
         mathn += `${mathn.length}`;
         listi = `${listi.length - whatsappf.length}`;
      let dialogz = listi.length >= 5145608;
      do {
         listi = `${(String.fromCharCode(97,0) == mathn ? listi.length : mathn.length)}`;
         if (dialogz) {
            break;
         }
      } while (dialogz && (3 <= listi.length));
         pointo = mathn == String.fromCharCode(67,0);
      currentF = [injuryG.length];
       let viewsl: Map<any, any> = new Map([[String.fromCharCode(100,105,100,95,106,95,56,48,0),false ], [String.fromCharCode(100,95,49,54,95,109,117,108,116,105,112,108,105,99,97,116,105,111,110,0),true ]]);
         viewsl = new Map([[`${viewsl.size}`, viewsl.size | viewsl.size]]);
      for (let h = 0; h < 3; h++) {
         viewsl.set(`${viewsl.size}`, 2 - viewsl.size);
      }
      for (let j = 0; j < 3; j++) {
          let w_playerR = String.fromCharCode(116,97,114,103,101,116,95,117,95,51,49,0);
          let crownr: Map<any, any> = new Map([[String.fromCharCode(117,121,118,121,95,51,95,55,54,0),429], [String.fromCharCode(107,95,49,54,95,99,111,100,105,110,103,0),0], [String.fromCharCode(114,101,97,100,99,98,95,105,95,54,48,0),182]]);
          let screenI = 3.0;
          let moon0 = 5;
          let leftT = 5.0;
         viewsl = new Map([[`${moon0}`, (w_playerR == String.fromCharCode(50,0) ? w_playerR.length : moon0)]]);
         crownr.set(`${leftT}`, crownr.size ^ 3);
         screenI += parseFloat(`${3}`);
         leftT /= Math.max(parseFloat(`${1 >> (Math.min(5, Math.abs(parseInt(`${screenI}`))))}`), 3);
      }
      faviconK = `${injuryG.length | 1}`;
      const_mn /= Math.max(2, parseFloat(`${3 - routerR.length}`));

    if (onOpenLive) {

      viewerC -= parseInt(`${const_mn}`) >> (Math.min(5, Math.abs(next3)));
   for (let h = 0; h < 3; h++) {
      currentF.push(injuryG.length);
   }
   for (let w = 0; w < 3; w++) {
       let stations0 = 2.0;
       let shareH = 4.0;
       let vignetteE = 1;
         vignetteE >>= Math.min(4, Math.abs(1));
         vignetteE >>= Math.min(Math.abs(parseInt(`${stations0}`)), 4);
      while ((vignetteE - parseInt(`${shareH}`)) < 1 && 4.55 < (1.37 - shareH)) {
         vignetteE &= parseInt(`${shareH}`);
         break;
      }
         shareH *= vignetteE / (Math.max(parseInt(`${shareH}`), 8));
      let productF = vignetteE >= 8467557;
      do {
          let mailf = String.fromCharCode(110,111,110,110,117,108,108,111,117,116,95,110,95,57,54,0);
          let signinupC = String.fromCharCode(104,97,100,97,109,97,114,100,120,95,54,95,50,48,0);
          let layoutD = 5.0;
          let clubP = String.fromCharCode(97,110,105,109,97,116,101,95,51,95,57,54,0);
         vignetteE &= signinupC.length;
         mailf += `${(mailf == String.fromCharCode(122,0) ? parseInt(`${layoutD}`) : mailf.length)}`;
         signinupC = "1";
         layoutD /= Math.max((parseFloat(`${clubP == String.fromCharCode(119,0) ? parseInt(`${layoutD}`) : clubP.length}`)), 5);
         if (productF) {
            break;
         }
      } while (productF && (vignetteE >= 1));
          let loadingA = true;
          let signinup3 = true;
          let nterstitialo = 1;
         vignetteE <<= Math.min(Math.abs(nterstitialo << (Math.min(Math.abs(parseInt(`${shareH}`)), 5))), 1);
         loadingA = (signinup3 ? loadingA : signinup3);
         nterstitialo |= 2;
      let fillI = 6908183 >= vignetteE;
      do {
         vignetteE -= parseInt(`${shareH}`);
         if (fillI) {
            break;
         }
      } while (fillI && (3.13 < (shareH * vignetteE)));
      let fastforward3 = 8668368 <= vignetteE;
      do {
          let episodeC = 4.0;
         vignetteE /= Math.max(5, parseInt(`${stations0}`));
         episodeC -= parseInt(`${episodeC}`);
         if (fastforward3) {
            break;
         }
      } while (fastforward3 && ((shareH / 5.51) <= 4.65 && 4 <= (vignetteE / (Math.max(parseInt(`${shareH}`), 4)))));
         stations0 /= Math.max(2 % (Math.max(vignetteE, 5)), 1);
      const_mn += parseFloat(`${parseInt(`${stations0}`) & injuryG.length}`);
   }
   while (5 >= trashk.length) {
      viewso = `${1 % (Math.max(2, sansA.length))}`;
      break;
   }
   while (1 < (viewerC * currentF.length) && (viewerC * currentF.length) < 1) {
       let bodan3: Map<any, any> = new Map([[String.fromCharCode(99,101,105,108,95,105,95,56,51,0),339], [String.fromCharCode(101,95,57,53,95,101,115,99,97,112,101,0),562]]);
         bodan3.set(`${bodan3.size}`, bodan3.size - bodan3.size);
      for (let x = 0; x < 2; x++) {
         bodan3.set(`${bodan3.size}`, bodan3.size & 3);
      }
      for (let f = 0; f < 3; f++) {
          let c_lockk = 0.0;
          let incidentm: Array<any> = [587, 498, 56];
         bodan3 = new Map([[`${incidentm.length}`, parseInt(`${c_lockk}`) ^ incidentm.length]]);
      }
      currentF = [1];
      break;
   }
      sansA = `${1 / (Math.max(3, parseInt(`${const_mn}`)))}`;
   for (let u = 0; u < 2; u++) {
       let vignettep = String.fromCharCode(100,101,110,121,95,116,95,50,0);
       let strq: Array<any> = [393, 96];
       let native1 = 4.0;
       let playm = String.fromCharCode(110,95,51,53,95,102,114,97,109,101,115,105,122,101,0);
         native1 += parseFloat(`${parseInt(`${native1}`) & playm.length}`);
          let popupc = 5.0;
         native1 += parseFloat(`${strq.length}`);
         popupc -= parseFloat(`${3 & parseInt(`${popupc}`)}`);
          let anytimex = true;
          let report9 = 4.0;
         playm += `${(playm == String.fromCharCode(113,0) ? parseInt(`${native1}`) : playm.length)}`;
         anytimex = 29.68 <= report9 && !anytimex;
         report9 *= parseFloat(`${2 - parseInt(`${report9}`)}`);
         native1 /= Math.max(3, parseFloat(`${parseInt(`${native1}`)}`));
      if (3 < vignettep.length) {
          let downloaderh = String.fromCharCode(109,95,49,53,0);
          let previewZ = 2.0;
          let confirmationj = 5.0;
         vignettep += `${1 << (Math.min(Math.abs(parseInt(`${previewZ}`)), 4))}`;
         downloaderh = `${downloaderh.length}`;
         previewZ -= (parseFloat(`${downloaderh == String.fromCharCode(109,0) ? parseInt(`${confirmationj}`) : downloaderh.length}`));
         confirmationj *= parseFloat(`${parseInt(`${confirmationj}`) & 2}`);
      }
         playm = `${strq.length >> (Math.min(4, Math.abs(parseInt(`${native1}`))))}`;
      for (let u = 0; u < 3; u++) {
         native1 -= parseFloat(`${strq.length | 1}`);
      }
      for (let c = 0; c < 1; c++) {
         vignettep += `${strq.length}`;
      }
      let placeholderA = String.fromCharCode(104,49,118,112,0) == playm;
      do {
          let transferg = String.fromCharCode(115,112,114,105,110,103,95,121,95,57,55,0);
          let chatN = 1.0;
          let tooltipsY: Array<any> = [809, 148];
          let thumbnailW = 2.0;
         playm += `${parseInt(`${thumbnailW}`) * playm.length}`;
         transferg += `${parseInt(`${chatN}`)}`;
         chatN /= Math.max(5, tooltipsY.length);
         tooltipsY.push((String.fromCharCode(100,0) == transferg ? parseInt(`${chatN}`) : transferg.length));
         thumbnailW -= 2 % (Math.max(8, transferg.length));
         if (placeholderA) {
            break;
         }
      } while (placeholderA && (playm.length >= vignettep.length));
      let greenq = 9466403 <= strq.length;
      do {
         strq.push(strq.length % (Math.max(7, parseInt(`${native1}`))));
         if (greenq) {
            break;
         }
      } while (greenq && ((4 << (Math.min(5, strq.length))) < 3 && 3 < (strq.length << (Math.min(Math.abs(4), 1)))));
      if (5.53 >= (native1 * 1.39) && (parseInt(`${native1}`) * strq.length) >= 3) {
         native1 *= parseFloat(`${1 * vignettep.length}`);
      }
         vignettep = `${(String.fromCharCode(49,0) == vignettep ? vignettep.length : strq.length)}`;
      currentF.push(parseInt(`${native1}`) % 3);
   }
   if (!trashk.endsWith(`${sansA.length}`)) {
      sansA += `${1 & currentF.length}`;
   }
       let modeo = 0.0;
       let step6 = 0.0;
      let usero = step6 >= 8089408.0;
      do {
         step6 *= parseFloat(`${parseInt(`${modeo}`) & parseInt(`${step6}`)}`);
         if (usero) {
            break;
         }
      } while ((modeo > 3.42) && usero);
         step6 -= parseFloat(`${parseInt(`${modeo}`) - 2}`);
         step6 += parseFloat(`${parseInt(`${modeo}`)}`);
      while (5.17 >= (modeo * step6) && (step6 * 5.17) >= 3.8) {
          let subsg: Map<any, any> = new Map([[String.fromCharCode(104,95,57,55,95,115,105,103,110,97,108,0),String.fromCharCode(109,97,115,115,95,115,95,50,48,0)], [String.fromCharCode(100,95,55,52,0),String.fromCharCode(109,95,50,56,95,115,111,102,114,101,101,0)], [String.fromCharCode(101,115,99,97,112,105,110,103,95,56,95,57,49,0),String.fromCharCode(116,97,110,115,105,103,95,120,95,54,0)]]);
         modeo -= parseFloat(`${parseInt(`${modeo}`)}`);
         subsg = new Map([[`${subsg.size}`, subsg.size % (Math.max(subsg.size, 10))]]);
         break;
      }
         step6 *= parseFloat(`${parseInt(`${modeo}`)}`);
      let descP = step6 >= 9291065.0;
      do {
         step6 /= Math.max(parseFloat(`${parseInt(`${modeo}`)}`), 1);
         if (descP) {
            break;
         }
      } while (descP && ((step6 * 3.76) < 5.52));
      next3 ^= parseInt(`${modeo}`) % 2;
   if (5 == (next3 & currentF.length) || 5 == (next3 & currentF.length)) {
      currentF = [viewso.length];
   }
   while (faviconK != trashk) {
      trashk += `${viewso.length ^ 2}`;
      break;
   }
       let z_unlockn = 0;
      while (2 > (1 * z_unlockn)) {
          let indicatorI = 4;
          let plashY: Map<any, any> = new Map([[String.fromCharCode(103,95,54,57,95,99,114,101,97,116,101,0),361], [String.fromCharCode(99,121,99,108,101,95,104,95,57,52,0),188]]);
          let usernameO = 2.0;
          let condensedl = true;
         z_unlockn += plashY.size;
         indicatorI ^= parseInt(`${usernameO}`);
         plashY = new Map([[`${condensedl}`, ((condensedl ? 2 : 3) & parseInt(`${usernameO}`))]]);
         break;
      }
      let yingH = z_unlockn >= 8241203;
      do {
         z_unlockn %= Math.max(1, 1);
         if (yingH) {
            break;
         }
      } while (yingH && (z_unlockn > z_unlockn));
         z_unlockn |= z_unlockn;
      faviconK = "2";
      onOpenLive();
    }
  };

  const liveAnimationVideo = () => {
       let placeholderH = 3.0;
    let changeY = String.fromCharCode(117,115,101,100,95,51,95,49,48,0);
    let charti = String.fromCharCode(112,111,111,112,95,53,95,55,52,0);
    let modityL: Map<any, any> = new Map([[String.fromCharCode(101,95,52,57,95,112,114,101,99,104,101,99,107,111,117,116,0),String.fromCharCode(108,97,114,103,101,95,120,95,54,0)], [String.fromCharCode(115,107,101,121,108,105,115,116,95,120,95,50,53,0),String.fromCharCode(115,117,110,114,105,115,101,95,99,95,48,0)], [String.fromCharCode(103,95,51,52,95,117,110,115,104,97,114,112,0),String.fromCharCode(120,95,49,49,95,100,105,115,99,97,114,100,0)]]);
    let auto_gli = 3.0;
    let wind0 = 1.0;
    let miniW = 2;
    let overZ: Map<any, any> = new Map([[String.fromCharCode(112,95,51,95,98,101,115,115,101,108,0),true ], [String.fromCharCode(105,110,105,116,105,97,108,105,122,101,114,95,120,95,53,52,0),true ], [String.fromCharCode(112,121,116,104,111,110,95,57,95,50,51,0),true ]]);
    let infoe = 5.0;
    let castA = String.fromCharCode(100,105,115,116,114,105,98,117,116,105,111,110,95,49,95,50,53,0);
    let enewsL = 1.0;
    let internetX = true;
    let anythinkL = String.fromCharCode(98,108,111,99,107,113,117,111,116,101,95,121,95,50,52,0);
    let changeu = 5;
    let minin = String.fromCharCode(101,120,116,101,110,100,95,107,95,52,51,0);
   for (let w = 0; w < 1; w++) {
      wind0 /= Math.max(parseFloat(`${changeY.length}`), 2);
   }
   if (3 <= (parseInt(`${auto_gli}`) - changeY.length) && (parseInt(`${auto_gli}`) - 3) <= 5) {
      changeY += `${(String.fromCharCode(52,0) == castA ? castA.length : parseInt(`${infoe}`))}`;
   }
   for (let x = 0; x < 2; x++) {
       let stepR = 0;
       let statsk: Array<any> = [555, 265];
       let shirt3: Map<any, any> = new Map([[String.fromCharCode(97,95,49,56,95,98,111,117,110,100,97,114,105,101,115,0),true ], [String.fromCharCode(99,111,108,111,114,107,101,121,95,105,95,50,0),true ], [String.fromCharCode(115,115,121,98,95,50,95,56,55,0),true ]]);
       let borderlessy = String.fromCharCode(119,95,49,53,95,117,110,105,0);
         shirt3 = new Map([[`${stepR}`, stepR % (Math.max(borderlessy.length, 1))]]);
          let fills: Map<any, any> = new Map([[String.fromCharCode(117,110,105,110,115,116,97,108,108,95,115,95,53,52,0),true ], [String.fromCharCode(115,95,57,52,95,110,101,103,97,116,105,118,101,0),false ], [String.fromCharCode(105,110,108,105,103,104,116,95,51,95,50,0),true ]]);
          let greenF = 2.0;
          let gesture8: Map<any, any> = new Map([[String.fromCharCode(114,95,53,49,95,109,111,100,97,108,0),711], [String.fromCharCode(104,95,52,54,95,111,112,101,110,115,108,101,115,0),417]]);
         statsk = [2];
         fills.set(`${greenF}`, gesture8.size);
         greenF += parseFloat(`${fills.size * 1}`);
         gesture8 = new Map([[`${fills.size}`, gesture8.size]]);
         shirt3.set(`${borderlessy}`, shirt3.size + 1);
      while ((statsk.length % (Math.max(9, borderlessy.length))) <= 3 || 2 <= (3 % (Math.max(6, borderlessy.length)))) {
          let turnr = String.fromCharCode(118,95,50,52,95,103,101,116,112,97,103,101,115,105,122,101,0);
          let searchbarp = String.fromCharCode(114,101,109,111,118,101,114,95,97,95,53,51,0);
         borderlessy += `${shirt3.size / (Math.max(statsk.length, 9))}`;
         turnr = `${turnr.length - 3}`;
         searchbarp = "1";
         break;
      }
       let emojiD = String.fromCharCode(101,95,52,56,95,97,118,103,0);
         borderlessy = `${stepR << (Math.min(borderlessy.length, 2))}`;
      let detailsE = 5267599 <= stepR;
      do {
          let screenY = String.fromCharCode(122,95,51,55,95,100,97,118,115,0);
          let homeA: Array<any> = [725, 851];
          let blacklistp = 2;
          let optionsL = String.fromCharCode(108,95,51,54,95,112,97,114,97,109,101,116,101,114,0);
          let down8 = 0.0;
         stepR |= 2 | optionsL.length;
         screenY += `${homeA.length | 2}`;
         homeA.push(blacklistp - 2);
         blacklistp %= Math.max(3 % (Math.max(blacklistp, 9)), 4);
         optionsL += `${screenY.length}`;
         down8 /= Math.max(parseFloat(`${blacklistp}`), 3);
         if (detailsE) {
            break;
         }
      } while ((4 >= (5 - stepR)) && detailsE);
      while (shirt3.get(`${statsk.length}`) != null) {
         statsk.push((borderlessy == String.fromCharCode(104,0) ? emojiD.length : borderlessy.length));
         break;
      }
       let shoot8 = 2.0;
          let baidur: Map<any, any> = new Map([[String.fromCharCode(104,109,97,99,95,108,95,52,49,0),814], [String.fromCharCode(109,95,51,53,95,114,97,110,115,105,116,105,111,110,0),941], [String.fromCharCode(116,101,109,112,108,97,116,101,100,95,104,95,51,50,0),24]]);
          let updatess = String.fromCharCode(112,97,99,107,101,100,95,121,95,53,53,0);
         stepR |= baidur.size;
         baidur = new Map([[updatess, updatess.length | 3]]);
      if (4 < (3 ^ shirt3.size)) {
         shirt3 = new Map([[`${shoot8}`, parseInt(`${shoot8}`) >> (Math.min(3, Math.abs(stepR)))]]);
      }
      while (stepR == emojiD.length) {
         stepR |= stepR | 3;
         break;
      }
      castA += `${castA.length | 2}`;
   }
       let buffer_ = String.fromCharCode(118,95,51,53,95,105,110,118,101,114,115,101,0);
          let commonD: Map<any, any> = new Map([[String.fromCharCode(100,111,119,110,108,101,102,116,95,109,95,49,51,0),true ], [String.fromCharCode(99,111,109,112,117,116,101,95,120,95,49,56,0),true ]]);
          let watchg = String.fromCharCode(117,95,57,56,95,105,109,112,108,105,99,105,116,101,108,121,0);
          let hejiu = true;
         buffer_ += `${buffer_.length}`;
         commonD = new Map([[watchg, 2]]);
         watchg += `${(watchg == String.fromCharCode(114,0) ? watchg.length : commonD.size)}`;
         hejiu = (((hejiu ? 67 : commonD.size) + commonD.size) > 67);
      for (let u = 0; u < 1; u++) {
         buffer_ = `${buffer_.length & buffer_.length}`;
      }
         buffer_ = `${buffer_.length + buffer_.length}`;
      anythinkL += "2";
   if (modityL.size > 1) {
       let overlayB: Array<any> = [814, 681];
       let yingi = String.fromCharCode(97,101,97,100,95,102,95,50,56,0);
       let viewsu = 4;
       let clockE = 5;
       let moonW = 4.0;
         clockE %= Math.max(viewsu, 5);
       let ewardedc = 4;
       let private_fbj: Map<any, any> = new Map([[String.fromCharCode(114,95,52,51,95,112,108,97,105,110,116,101,120,116,0),false ], [String.fromCharCode(105,109,109,101,100,105,97,116,101,108,121,95,106,95,49,0),false ]]);
      for (let j = 0; j < 1; j++) {
         ewardedc <<= Math.min(overlayB.length, 4);
      }
      while ((yingi.length % 4) > 3 || (yingi.length & 4) > 1) {
          let foundP = String.fromCharCode(98,105,115,101,99,116,95,122,95,56,56,0);
          let showW = String.fromCharCode(112,101,97,107,115,95,109,95,56,50,0);
          let vcopy_eyn = String.fromCharCode(116,95,52,50,95,115,117,112,101,114,110,111,100,101,115,0);
          let entryG = true;
          let o_centerE = String.fromCharCode(98,95,57,50,95,100,101,109,97,116,101,114,105,97,108,105,122,101,0);
         yingi += "2";
         foundP += `${o_centerE.length / (Math.max(3, 8))}`;
         showW += `${(foundP == String.fromCharCode(82,0) ? foundP.length : o_centerE.length)}`;
         vcopy_eyn = `${foundP.length}`;
         entryG = !vcopy_eyn.includes(`${entryG}`);
         break;
      }
      for (let q = 0; q < 3; q++) {
         ewardedc &= 3 | ewardedc;
      }
          let lightV = 1.0;
          let incidentq: Array<any> = [472, 72, 58];
         overlayB.push(viewsu << (Math.min(Math.abs(1), 4)));
         lightV /= Math.max(5, incidentq.length);
         incidentq = [1];
      let sharedP = 8643999 >= private_fbj.size;
      do {
         private_fbj = new Map([[`${overlayB.length}`, yingi.length]]);
         if (sharedP) {
            break;
         }
      } while ((4 > (private_fbj.size * 5) || 3 > (ewardedc * 5)) && sharedP);
          let heartJ = false;
          let ranka = 4.0;
          let blackm = String.fromCharCode(118,101,99,116,111,114,115,95,109,95,52,52,0);
         ewardedc -= 1;
         heartJ = !heartJ;
         ranka -= (parseFloat(`${blackm == String.fromCharCode(101,0) ? (heartJ ? 2 : 2) : blackm.length}`));
      let castK = 9897952 >= overlayB.length;
      do {
         overlayB = [parseInt(`${moonW}`) % 2];
         if (castK) {
            break;
         }
      } while ((yingi.length <= 4) && castK);
          let model5 = String.fromCharCode(104,99,109,99,95,51,95,50,54,0);
          let progressr = 2;
          let rewind6 = 5;
         yingi = `${yingi.length}`;
         model5 += `${progressr}`;
         rewind6 <<= Math.min(Math.abs(rewind6 | model5.length), 2);
      for (let b = 0; b < 3; b++) {
         ewardedc |= clockE - viewsu;
      }
          let favorite7: Map<any, any> = new Map([[String.fromCharCode(98,95,50,51,95,98,108,111,99,107,120,0),String.fromCharCode(97,118,115,116,114,105,110,103,95,114,95,56,57,0)], [String.fromCharCode(117,95,56,49,95,106,100,99,116,0),String.fromCharCode(114,103,98,105,95,99,95,55,49,0)], [String.fromCharCode(101,115,116,105,109,97,116,105,110,103,95,106,95,50,52,0),String.fromCharCode(115,105,110,103,108,101,116,97,98,108,101,95,51,95,57,54,0)]]);
          let agreement1 = true;
         private_fbj.set(`${viewsu}`, 1 % (Math.max(3, viewsu)));
         favorite7.set(`${agreement1}`, favorite7.size >> (Math.min(Math.abs(1), 3)));
      while (yingi.startsWith(`${viewsu}`)) {
         yingi = `${overlayB.length}`;
         break;
      }
      while ((overlayB.length + 2) >= 3 && (viewsu + overlayB.length) >= 2) {
         overlayB = [1 | yingi.length];
         break;
      }
      placeholderH -= 1;
   }
   for (let n = 0; n < 2; n++) {
      changeY = `${parseInt(`${auto_gli}`) ^ parseInt(`${wind0}`)}`;
   }
      overZ.set(charti, miniW);

    

      placeholderH -= ((internetX ? 1 : 3));
      miniW |= ((internetX ? 1 : 2) | 2);
       let controlsE: Map<any, any> = new Map([[String.fromCharCode(97,105,114,105,110,103,95,53,95,49,48,0),905], [String.fromCharCode(109,111,118,101,112,97,103,101,95,115,95,49,52,0),143], [String.fromCharCode(117,95,52,49,95,108,114,111,110,100,0),773]]);
       let predictionl = String.fromCharCode(117,115,116,111,109,95,116,95,57,53,0);
         predictionl = `${predictionl.length % 1}`;
      let e_count4 = controlsE.size >= 7425527;
      do {
         controlsE.set(`${predictionl}`, (String.fromCharCode(110,0) == predictionl ? predictionl.length : controlsE.size));
         if (e_count4) {
            break;
         }
      } while (e_count4 && (predictionl.length <= 2));
      while ((2 | predictionl.length) <= 5 && (2 | controlsE.size) <= 5) {
         predictionl += `${1 >> (Math.min(3, predictionl.length))}`;
         break;
      }
      while (5 >= controlsE.size) {
          let notificationz = String.fromCharCode(120,95,49,51,95,100,101,110,111,105,115,101,102,105,108,116,101,114,0);
          let bingJ = 0.0;
          let upgradeZ = false;
         controlsE = new Map([[`${controlsE.size}`, controlsE.size << (Math.min(Math.abs(1), 1))]]);
         notificationz = `${((upgradeZ ? 2 : 3) << (Math.min(Math.abs(parseInt(`${bingJ}`)), 3)))}`;
         bingJ /= Math.max(1, notificationz.length);
         upgradeZ = notificationz.length < bingJ;
         break;
      }
      if (predictionl.length < controlsE.size) {
         predictionl = `${controlsE.size << (Math.min(Math.abs(2), 1))}`;
      }
      let blacklista = predictionl == String.fromCharCode(104,102,113,97,0);
      do {
         predictionl = `${(predictionl == String.fromCharCode(68,0) ? controlsE.size : predictionl.length)}`;
         if (blacklista) {
            break;
         }
      } while (((2 * controlsE.size) < 1) && blacklista);
      overZ = new Map([[`${overZ.size}`, (String.fromCharCode(72,0) == charti ? charti.length : overZ.size)]]);
   for (let v = 0; v < 3; v++) {
       let heartP = 0.0;
       let canvasy = 5;
       let flyerh = 5;
      if (3.35 >= (heartP - 2.92) && (canvasy * 2) >= 3) {
         canvasy <<= Math.min(2, Math.abs(1));
      }
      for (let p = 0; p < 2; p++) {
         flyerh ^= parseInt(`${heartP}`) & flyerh;
      }
      let shirt0 = 5992816.0 >= heartP;
      do {
         heartP -= 3;
         if (shirt0) {
            break;
         }
      } while (shirt0 && (heartP == 1.55));
       let mutedr = String.fromCharCode(102,114,101,113,117,101,110,116,95,100,95,57,0);
          let upload2 = 0;
          let subsW = String.fromCharCode(104,95,52,52,95,112,97,115,115,0);
         flyerh <<= Math.min(Math.abs(upload2 % (Math.max(flyerh, 4))), 3);
         upload2 %= Math.max(subsW.length, 1);
         subsW = `${1 * subsW.length}`;
       let ping9 = 4;
       let serviceQ = 4;
         serviceQ >>= Math.min(Math.abs(ping9), 4);
      if (3 < (2 + serviceQ) && (serviceQ + 2) < 3) {
         serviceQ >>= Math.min(Math.abs(serviceQ / (Math.max(7, mutedr.length))), 3);
      }
      while (3 >= (serviceQ >> (Math.min(4, Math.abs(ping9))))) {
         serviceQ /= Math.max(3, 2);
         break;
      }
      enewsL /= Math.max(3, parseFloat(`${3}`));
   }
   let listC = 7845055 >= overZ.size;
   do {
      overZ.set(`${wind0}`, ((internetX ? 5 : 1) + parseInt(`${wind0}`)));
      if (listC) {
         break;
      }
   } while ((1 > (miniW & overZ.size) || 4 > (miniW & 1)) && listC);
       let fullt = 1.0;
      while (1.21 <= (4.20 * fullt) || 4.20 <= (fullt * fullt)) {
         fullt /= Math.max(parseFloat(`${3}`), 3);
         break;
      }
         fullt -= parseFloat(`${parseInt(`${fullt}`) - parseInt(`${fullt}`)}`);
         fullt += parseFloat(`${parseInt(`${fullt}`) / (Math.max(4, parseInt(`${fullt}`)))}`);
      changeY += `${2 * parseInt(`${enewsL}`)}`;
   for (let s = 0; s < 3; s++) {
      miniW &= parseInt(`${infoe}`);
   }
    if (onOpenAnimation) {

      anythinkL = `${1 + parseInt(`${placeholderH}`)}`;
       let macaur = String.fromCharCode(109,95,49,49,95,116,101,109,112,102,105,108,101,0);
          let albumu = String.fromCharCode(109,95,53,48,95,115,111,99,107,97,100,100,114,0);
          let orange5: Map<any, any> = new Map([[String.fromCharCode(119,95,55,48,95,102,109,116,99,111,110,118,101,114,116,0),913], [String.fromCharCode(100,95,52,53,95,114,101,109,111,118,105,110,103,0),105]]);
          let description_55 = String.fromCharCode(104,105,110,116,101,100,95,98,95,53,55,0);
         macaur = `${2 >> (Math.min(5, albumu.length))}`;
         albumu += `${(description_55 == String.fromCharCode(90,0) ? description_55.length : orange5.size)}`;
         orange5.set(description_55, orange5.size ^ 3);
         macaur += `${(macaur == String.fromCharCode(56,0) ? macaur.length : macaur.length)}`;
      if (macaur.length > 3) {
          let combine3 = 2.0;
          let targeto = 4.0;
          let skipO = String.fromCharCode(97,108,112,104,97,110,117,109,101,114,105,99,95,107,95,51,0);
          let auto_3B = String.fromCharCode(100,95,55,53,95,101,110,118,105,114,111,110,109,101,110,116,0);
          let expandO: Array<any> = [212, 911, 117];
         macaur += `${(skipO == String.fromCharCode(99,0) ? parseInt(`${targeto}`) : skipO.length)}`;
         combine3 += parseFloat(`${parseInt(`${combine3}`)}`);
         targeto -= expandO.length;
         auto_3B += `${1 - parseInt(`${combine3}`)}`;
         expandO = [parseInt(`${combine3}`) | 2];
      }
      charti += `${castA.length << (Math.min(1, Math.abs(changeu)))}`;
      internetX = modityL.get(`${placeholderH}`) != null;
   if (!changeY.includes(`${miniW}`)) {
       let uploadS = String.fromCharCode(119,104,105,116,101,108,105,115,116,101,100,95,111,95,49,48,48,0);
       let downloadedK: Map<any, any> = new Map([[String.fromCharCode(103,95,51,56,95,115,99,97,110,116,97,98,108,101,115,0),false ], [String.fromCharCode(118,95,53,48,95,97,99,107,115,0),true ]]);
       let arrowK = String.fromCharCode(108,95,53,55,0);
       let langk: Array<any> = [16, 943];
      for (let u = 0; u < 3; u++) {
          let mappingq = 0.0;
          let analytico: Map<any, any> = new Map([[String.fromCharCode(114,101,102,99,111,117,110,116,101,114,95,97,95,54,55,0),746], [String.fromCharCode(121,95,54,57,95,111,112,101,110,109,112,116,0),605], [String.fromCharCode(116,95,51,50,95,115,104,97,0),574]]);
          let mutedm = String.fromCharCode(115,116,114,102,116,105,109,101,95,108,95,50,56,0);
          let redirect_ = true;
         uploadS = "1";
         mappingq /= Math.max(parseFloat(`${mutedm.length}`), 4);
         analytico.set(`${mutedm}`, mutedm.length);
         redirect_ = analytico.size == 11;
      }
      for (let a = 0; a < 2; a++) {
         uploadS += `${(arrowK == String.fromCharCode(88,0) ? arrowK.length : langk.length)}`;
      }
          let switch_iuH: Array<any> = [String.fromCharCode(103,95,49,54,0), String.fromCharCode(114,101,99,111,114,100,105,110,103,99,111,110,110,95,121,95,50,48,0)];
          let storen = false;
          let fastforwarde = String.fromCharCode(112,104,111,110,101,98,111,111,107,95,100,95,51,53,0);
         arrowK = `${arrowK.length / (Math.max(2, 4))}`;
         switch_iuH = [fastforwarde.length - 1];
         storen = (55 == ((storen ? switch_iuH.length : 55) + switch_iuH.length));
         fastforwarde = `${fastforwarde.length}`;
       let fastD = 4;
       let typingZ = 2;
          let weibom: Array<any> = [String.fromCharCode(118,95,55,52,95,117,110,115,97,102,101,0), String.fromCharCode(117,95,48,95,102,111,110,116,115,105,122,101,0), String.fromCharCode(112,97,115,116,101,95,119,95,52,49,0)];
          let othera = 2.0;
          let tickedB = true;
         langk.push(1);
         weibom.push(((tickedB ? 2 : 3) / (Math.max(weibom.length, 1))));
         othera *= parseFloat(`${1 & weibom.length}`);
      for (let a = 0; a < 1; a++) {
          let models7 = String.fromCharCode(103,95,56,50,95,107,101,114,110,101,114,0);
         uploadS = "3";
         models7 = `${models7.length}`;
      }
      let listJ = 6696508 >= arrowK.length;
      do {
         arrowK = `${1 & typingZ}`;
         if (listJ) {
            break;
         }
      } while (listJ && ((arrowK.length & 4) <= 4 || 1 <= (arrowK.length & 4)));
         downloadedK = new Map([[`${langk.length}`, langk.length]]);
      for (let f = 0; f < 1; f++) {
         arrowK += `${1 << (Math.min(4, Math.abs(typingZ)))}`;
      }
       let trasht: Array<any> = [37, 479];
       let middlewarey = String.fromCharCode(109,97,99,114,111,115,95,49,95,52,56,0);
         typingZ %= Math.max(2, typingZ / 3);
      miniW /= Math.max(5, 1);
   }
      anythinkL = `${3 + charti.length}`;
       let vignetted = 0;
       let sansE = 4.0;
          let updatesW: Array<any> = [String.fromCharCode(98,105,116,108,105,110,101,99,104,117,110,107,121,95,51,95,50,53,0), String.fromCharCode(104,95,54,50,0), String.fromCharCode(113,95,50,51,95,100,105,114,115,0)];
         sansE *= 1;
         updatesW = [updatesW.length];
          let componentJ = String.fromCharCode(103,95,54,53,95,109,97,99,0);
          let arrowb = 3.0;
          let pingA = 4.0;
         vignetted %= Math.max(3, 2);
         componentJ += `${componentJ.length | 3}`;
         arrowb += parseInt(`${arrowb}`) * componentJ.length;
         pingA *= parseFloat(`${parseInt(`${arrowb}`)}`);
       let indicatorL = false;
       let configE = true;
         sansE *= parseInt(`${sansE}`) % (Math.max(1, vignetted));
      while (configE && 2.72 >= (sansE * 3.26)) {
         configE = !configE && 65 > vignetted;
         break;
      }
         indicatorL = configE && sansE <= 13.11;
      modityL.set(`${miniW}`, miniW + 2);
   let frame_3pY = 9378053 >= miniW;
   do {
      miniW &= (charti == String.fromCharCode(122,0) ? charti.length : parseInt(`${wind0}`));
      if (frame_3pY) {
         break;
      }
   } while (frame_3pY && (!Array.from(modityL.keys()).includes(`${miniW}`)));
      if (animationStream3D) {

   let clubP = wind0 >= 5403252.0;
   do {
      wind0 *= parseFloat(`${1 << (Math.min(4, Math.abs(miniW)))}`);
      if (clubP) {
         break;
      }
   } while (clubP && ((infoe / 3) >= 4.25));
       let animationU = 5.0;
      while (1.47 < animationU) {
         animationU -= parseInt(`${animationU}`);
         break;
      }
       let tailC = String.fromCharCode(122,95,57,50,95,116,121,112,101,100,101,102,115,0);
       let singlea = String.fromCharCode(97,95,53,48,95,116,105,108,116,0);
         animationU /= Math.max(4, 1 | singlea.length);
      internetX = 25.98 == placeholderH;
      miniW *= 1 >> (Math.min(4, anythinkL.length));
       let promotionM = 1.0;
       let leftV = String.fromCharCode(99,97,109,101,114,97,95,51,95,54,48,0);
         promotionM -= parseFloat(`${leftV.length}`);
         promotionM *= parseFloat(`${1}`);
         promotionM -= parseFloat(`${leftV.length}`);
         promotionM -= parseFloat(`${2 - parseInt(`${promotionM}`)}`);
       let screenM: Array<any> = [String.fromCharCode(116,95,50,57,95,103,97,117,115,115,0), String.fromCharCode(104,95,57,51,95,105,112,118,105,100,101,111,0)];
       let invitej: Array<any> = [173, 861, 343];
      let settingsd = leftV.length <= 5703772;
      do {
         leftV = `${invitej.length * 1}`;
         if (settingsd) {
            break;
         }
      } while (settingsd && (3 > screenM.length));
      miniW *= parseInt(`${placeholderH}`) & 1;
   while ((miniW % (Math.max(1, castA.length))) >= 4 || 5 >= (4 % (Math.max(3, castA.length)))) {
      miniW &= changeu ^ parseInt(`${infoe}`);
      break;
   }
   while ((castA.length % 1) < 4) {
      wind0 += parseFloat(`${3 + parseInt(`${wind0}`)}`);
      break;
   }
   let whistleg = internetX ? !internetX : internetX;
   do {
       let b_centerH = 3.0;
       let plashV = String.fromCharCode(117,95,54,50,95,105,103,110,111,114,105,110,103,0);
       let leftU = String.fromCharCode(115,97,109,101,95,48,95,54,54,0);
      let hearta = leftU.length >= 7748340;
      do {
          let champione = String.fromCharCode(122,105,112,95,112,95,51,52,0);
          let style7 = 5.0;
         leftU += `${plashV.length ^ parseInt(`${b_centerH}`)}`;
         champione = "3";
         style7 /= Math.max(champione.length, 2);
         if (hearta) {
            break;
         }
      } while (hearta && (3 > (leftU.length << (Math.min(Math.abs(1), 3)))));
         b_centerH += parseFloat(`${parseInt(`${b_centerH}`) | leftU.length}`);
      for (let s = 0; s < 2; s++) {
         b_centerH += parseFloat(`${leftU.length}`);
      }
          let ranku: Map<any, any> = new Map([[String.fromCharCode(111,95,51,51,95,111,105,100,97,110,121,0),79], [String.fromCharCode(119,95,52,56,95,108,111,116,116,105,101,108,111,97,100,101,114,0),247]]);
          let usera = String.fromCharCode(101,95,52,52,95,117,110,99,97,99,104,101,100,0);
          let clock2: Array<any> = [716, 835, 124];
         leftU += `${ranku.size}`;
         ranku = new Map([[`${clock2.length}`, clock2.length % (Math.max(usera.length, 7))]]);
         usera = `${clock2.length}`;
       let tooltipsw = 5;
       let whistleS = 1;
      for (let l = 0; l < 2; l++) {
          let sideg = String.fromCharCode(114,116,99,119,101,98,95,122,95,49,49,0);
          let statisticsi: Map<any, any> = new Map([[String.fromCharCode(105,95,57,55,95,99,101,108,112,0),765], [String.fromCharCode(116,101,115,116,115,95,105,95,56,55,0),578]]);
          let selectedL: Map<any, any> = new Map([[String.fromCharCode(112,95,50,54,95,100,101,99,111,109,112,0),885], [String.fromCharCode(97,118,117,105,95,107,95,56,0),721]]);
          let contexth = true;
          let chartV = String.fromCharCode(99,114,101,97,116,101,100,95,98,95,53,50,0);
         leftU += `${statisticsi.size}`;
         sideg += `${selectedL.size ^ 2}`;
         statisticsi = new Map([[sideg, sideg.length]]);
         selectedL.set(chartV, 3);
         contexth = chartV.length >= 77;
      }
          let country7: Map<any, any> = new Map([[String.fromCharCode(114,95,49,51,95,100,97,116,97,116,121,112,101,115,0),String.fromCharCode(115,101,116,116,105,103,110,115,95,102,95,49,48,48,0)], [String.fromCharCode(112,97,99,107,101,116,101,100,95,49,95,55,56,0),String.fromCharCode(105,110,115,116,97,110,116,95,104,95,53,55,0)]]);
          let cornerJ = 5.0;
         whistleS %= Math.max(1, parseInt(`${b_centerH}`) & tooltipsw);
         country7 = new Map([[`${country7.size}`, 1]]);
         cornerJ *= parseInt(`${cornerJ}`);
      for (let u = 0; u < 1; u++) {
         b_centerH *= parseFloat(`${leftU.length}`);
      }
         leftU += `${1 - plashV.length}`;
      internetX = castA.length == 3;
      if (whistleg) {
         break;
      }
   } while (whistleg && (internetX));
        onOpenAnimation(animationStream3D);
      } else if (animationStream2D) {

      miniW ^= parseInt(`${infoe}`);
   while ((1 - wind0) >= 1.50) {
      infoe -= parseFloat(`${parseInt(`${enewsL}`) & 3}`);
      break;
   }
   let emptyw = changeY == String.fromCharCode(103,120,111,57,49,118,95,0);
   do {
      changeY = `${1 - minin.length}`;
      if (emptyw) {
         break;
      }
   } while (emptyw && (changeu > changeY.length));
      infoe /= Math.max(2, parseFloat(`${miniW}`));
      auto_gli /= Math.max(5, parseFloat(`${modityL.size >> (Math.min(Math.abs(2), 1))}`));
       let stations0 = String.fromCharCode(114,95,54,54,95,116,104,105,115,0);
         stations0 = `${stations0.length + 2}`;
          let privacyZ = 2.0;
          let penaltyn = 1;
         stations0 += `${parseInt(`${privacyZ}`)}`;
         privacyZ -= penaltyn + penaltyn;
          let logoutJ = String.fromCharCode(97,95,49,95,99,111,109,112,97,115,115,0);
          let routerL = 0.0;
         stations0 += `${parseInt(`${routerL}`) >> (Math.min(Math.abs(1), 4))}`;
         logoutJ += `${logoutJ.length | logoutJ.length}`;
         routerL /= Math.max((logoutJ == String.fromCharCode(83,0) ? logoutJ.length : logoutJ.length), 5);
      internetX = 71.99 < placeholderH;
      infoe -= (parseFloat(`${(internetX ? 2 : 3) ^ parseInt(`${wind0}`)}`));
        onOpenAnimation(animationStream2D);
      }
    }
  };

  
  
  
  
  

  
  
  
  

  useEffect(() => {
    matchStarted();
  });

  useEffect(() => {
    const temp = competitionDate;
    if (temp) {
      setLeftTime(parseInt(temp));
    }
    setTempDateTime(formatDateTime(temp));
  }, [competitionDate]);

  
  
  
  
  
  
  
  
  
  
  

  return (
    <View style={styles.container}>
      <ImageBackground
        source={
          matchSportType === 1
            ? MatchDetailBG
            : matchSportType === 2
              ? BasketballMatchDetailBG
              : OtherMatchDetailBG
        }
        resizeMode="stretch"
        style={{ flex: 1 }}>
        <View style={styles.topBannerCotainer}>
          <TouchableOpacity
            style={styles.backButtonTouch}
            onPress={() => onHandleBack()}>
            <Image
              resizeMode="contain"
              style={styles.backButtonIcon}
              source={BackWhite}></Image>
          </TouchableOpacity>

          {countDownTime || middleMatchStarted ? (
            <View style={styles.alignCenterTopBannerContainer}>
              <Text style={styles.middleTitleName}>{competitionNameShort}</Text>
              <Text style={styles.middleTitleName}>{` |  `}</Text>
              <Text style={styles.middleTitleName}>{tempDateTime}</Text>
            </View>
          ) : (
            <View style={styles.alignCenterTopBannerContainer}></View>
          )}

          {/* {(countDownTime || middleMatchBeforeStart) && (
            <TouchableOpacity
              style={styles.notificationButtonTouch}
              onPress={handleFollow}>
              <Image
                resizeMode="contain"
                style={styles.backButtonIcon}
                source={isSub ? NotificationFilled : Notification}></Image>
            </TouchableOpacity>
          )} */}
        </View>

        <View style={styles.matchDetailContainer}>
          <View style={styles.middleContainer}>
            <View style={styles.alignCenterContainer}>
              {homeIcon ? (
                <Image
                  resizeMode="contain"
                  style={styles.teamIconImage}
                  source={{ uri: homeIcon }}></Image>
              ) : (
                <DefaultTeamIcon
                  isHome={true}
                  iconSize={34}
                  textSize={16}
                  text={homeName ? homeName : ''}
                />
              )}

              <Text style={styles.smallTitleName}>{homeName}</Text>
              {(homeFootballPosition || homeBasketballPosition) &&
                (matchSportType === 1 ? (
                  <Text
                    style={
                      styles.smallTitleName
                    }>{`[${homeFootballPosition}]`}</Text>
                ) : (
                  

                  
                  <Text
                    style={
                      styles.smallTitleName
                    }>{`[${homeBasketballPosition}]`}</Text>
                ))}
            </View>
            {middleMatchBeforeStart && (
              <View style={styles.alignCenterMiddleContainer}>
                <Text style={styles.middleTitleName}>
                  {competitionNameShort}
                </Text>

                <Text style={styles.middleTitleName}>{tempDateTime}</Text>
              </View>
            )}

            {defaultStatus && (
              <View style={styles.alignCenterMiddleContainer}>
                <Text style={styles.middleTitleName}>
                  {competitionNameShort}
                </Text>

                <Text style={styles.middleTitleName}>{getMatchStatusData}</Text>
              </View>
            )}

            {middleMatchStarted &&
              (matchSportType === 1 ? (
                
                <View style={styles.alignCenterMiddleMatchStartContainer}>
                  <Text
                    style={
                      styles.middleTitleName
                    }>{`${matchOnTimeGoing}`}</Text>

                  <Text
                    style={
                      styles.middleTitleScoreName
                    }>{`${homeScore} - ${awayScore}`}</Text>
                  <Text style={styles.middleTitleSubeName}>
                    {`半场 ${homeHalfTimeScore}-${awayHalfTimeScore}`}
                    {panaltyMatchStarted
                      ? ` | 点球 ${homePenaltyScore}-${awayPenaltyScore}`
                      : ''}
                  </Text>
                </View>
              ) : matchSportType === 2 ? (
                
                <View style={styles.alignCenterMiddleMatchStartContainer}>
                  <Text
                    style={
                      styles.middleTitleName
                    }>{`${matchOnTimeGoing}`}</Text>

                  <Text
                    style={
                      styles.middleTitleScoreName
                    }>{`${homeScore} - ${awayScore}`}</Text>

                  <Text style={styles.middleTitleNameStatus}>
                    {matchOnTimeGoingStatus
                      ? matchOnTimeGoingStatus
                      : basketballCount === 4
                        ? basketballFourQuoteHalfTime
                        : basketballTwoQuoteHalfTime}
                  </Text>
                </View>
              ) : (
                ''
              ))}

            {countDownTime && (
              <View style={styles.alignCenterMiddleCountdownContainer}>
                <Text style={styles.middleCountTitleName}>距离开赛时间</Text>
                <Text
                  style={
                    styles.middleTitleName
                  }>{`${hours} : ${minutes} : ${seconds} `}</Text>
              </View>
            )}
            <View style={styles.alignCenterContainer}>
              {awayIcon ? (
                <Image
                  resizeMode="contain"
                  style={styles.teamIconImage}
                  source={{ uri: awayIcon }}></Image>
              ) : (
                <DefaultTeamIcon
                  isHome={false}
                  iconSize={34}
                  textSize={16}
                  text={awayName ? awayName : ''}
                />
              )}

              <Text style={styles.smallTitleName}>{awayName}</Text>
              {(awayFootballPosition || awayBasketballPosition) &&
                (matchSportType === 1 ? (
                  
                  <Text
                    style={
                      styles.smallTitleName
                    }>{`[${awayFootballPosition}]`}</Text>
                ) : (
                  
                  <Text
                    style={
                      styles.smallTitleName
                    }>{`[${awayBasketballPosition}]`}</Text>
                ))}
            </View>
          </View>
        </View>
        {/* <TouchableOpacity
          style={isSub ? styles.bookingButtonActive : styles.bookingButton}
          onPress={handleFollow}>
          <View style={styles.bookSmallContainer}>
            <Image
              resizeMode="stretch"
              style={styles.subIcon}
              source={isSub ? WhiteTick : Notification}></Image>
            <Text style={styles.bookingTitleName}>预约</Text>
          </View>
          <View>
            <Text
              style={
                styles.smallTitleName
              }>{`距离开赛时间: ${days}天 ${hours} 小時 ${minutes} 分鐘 ${seconds} 秒`}</Text>
          </View>
        </TouchableOpacity> */}
        <View style={styles.bottomButtonContainer}>
          {dataLive !== undefined && dataLive.length > 0 && dataLive.some(streamer => streamer.status == 3) && (
            <TouchableOpacity onPress={liveVideo} style={styles.liveButton}>
              <Image
                resizeMode="contain"
                style={styles.subIcon}
                source={VideoLive}></Image>
              <Text style={styles.bookingTitleName}>视频直播</Text>
            </TouchableOpacity>
          )}
          {(animationStream2D || animationStream3D) && (
            <TouchableOpacity
              onPress={liveAnimationVideo}
              style={styles.liveButton}>
              <Image
                resizeMode="contain"
                style={styles.subIcon}
                source={AnimationLive}></Image>
              <Text style={styles.bookingTitleName}>动画直播</Text>
            </TouchableOpacity>
          )}
        </View>
      </ImageBackground>
    </View>
  );
};

export default BeforeLive;
