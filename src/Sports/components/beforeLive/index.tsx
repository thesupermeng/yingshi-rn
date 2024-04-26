import React, { useEffect, useState } from 'react';
import { Text, View, Image, ImageBackground } from 'react-native';
import styles from './ww_utils_orangeclock';
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
  
} from '../../utility/ww_uimanager';
import { useNavigation } from '@react-navigation/native';
import { useCountdown } from '../../utility/ww_match_gemfile';
import { useDispatch, useSelector } from 'react-redux';
import { showToast } from '../../utility/ww_ying';
import {
  getMatchStatus,
  getMatchScore,
  calculateScore,
} from '../../utility/utils';
import { matchOnTime, matchRunningStatusBasketball } from '../../utility/ww_uimanager';
import { wwShirtBdxadsdk } from '../../types/ww_sina_liblogger';
import { wwInfo, wwControls } from '../../types/ww_dice';
import { wwWhistleorange } from '../../types/ww_chinasame';
import DefaultTeamIcon from '../ww_club_gpay';

interface wwIndexDice {
  listLiveDetails?: wwShirtBdxadsdk,
  setVideoSource?: any,
  liveDataState?: wwInfo,
  listLiveMatchDetailsUpdates?: wwWhistleorange
  dataLive?: wwControls[],
  onOpenLive?: () => any
  onOpenAnimation?: any
}

const BeforeLive = ({ liveDataState, listLiveDetails, setVideoSource, listLiveMatchDetailsUpdates, dataLive, onOpenLive, onOpenAnimation }: wwIndexDice) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const onHandleBack = () => {
       let nterstitiald = 5.0;
    let reminder6 = String.fromCharCode(114,95,53,53,0);
    let yellowredcardx = String.fromCharCode(99,108,117,98,95,122,95,55,0);
    let basketballB = String.fromCharCode(113,95,54,55,95,102,97,110,111,117,116,0);
    let changeI = true;
    let shootyesgoalT = true;
    let fileC = false;
    let edita = String.fromCharCode(115,111,117,110,95,114,95,49,55,0);
    let screeni: Map<any, any> = new Map([[String.fromCharCode(115,104,97,112,101,95,50,95,55,50,0),String.fromCharCode(122,95,50,50,95,111,103,103,101,114,0)], [String.fromCharCode(98,97,110,100,95,49,95,57,53,0),String.fromCharCode(109,100,99,116,95,122,95,49,49,0)]]);
    let downarrowZ = String.fromCharCode(115,101,103,109,101,110,116,97,116,105,111,110,95,51,95,49,52,0);
    let libturbomodulejsijniD = false;
    let green_ = String.fromCharCode(100,110,120,104,100,95,50,95,56,51,0);
    let referrern = String.fromCharCode(108,111,119,98,100,95,99,95,49,57,0);
      yellowredcardx = `${((changeI ? 1 : 2))}`;
   if (fileC) {
      edita += `${(screeni.size + (changeI ? 4 : 2))}`;
   }
   while (!basketballB.includes(`${screeni.size}`)) {
      screeni.set(yellowredcardx, (yellowredcardx == String.fromCharCode(101,0) ? yellowredcardx.length : edita.length));
      break;
   }
   while (yellowredcardx.startsWith(reminder6)) {
      yellowredcardx = `${edita.length}`;
      break;
   }
   for (let b = 0; b < 1; b++) {
       let greyarrowupQ = String.fromCharCode(100,117,115,116,95,105,95,52,0);
       let inouttargetredQ = 3;
         inouttargetredQ -= (String.fromCharCode(88,0) == greyarrowupQ ? inouttargetredQ : greyarrowupQ.length);
      for (let p = 0; p < 2; p++) {
          let modulesa = String.fromCharCode(109,95,50,53,95,117,110,115,99,97,108,101,100,99,121,99,108,101,99,108,111,99,107,0);
          let searchR = true;
          let actionsS = String.fromCharCode(109,111,100,105,102,121,95,108,95,51,0);
         inouttargetredQ ^= actionsS.length - 2;
         modulesa = `${3 - modulesa.length}`;
         searchR = !searchR;
         actionsS += `${modulesa.length}`;
      }
      for (let a = 0; a < 2; a++) {
         inouttargetredQ += 2 >> (Math.min(5, Math.abs(inouttargetredQ)));
      }
         greyarrowupQ += `${inouttargetredQ >> (Math.min(greyarrowupQ.length, 3))}`;
      if (greyarrowupQ.length <= 5) {
         greyarrowupQ = `${greyarrowupQ.length}`;
      }
      if ((4 * greyarrowupQ.length) >= 2 && 3 >= (4 * greyarrowupQ.length)) {
         greyarrowupQ += "2";
      }
      changeI = reminder6.length >= 8;
   }
      fileC = 42 <= reminder6.length;
   let typingP = String.fromCharCode(108,110,114,101,106,108,0) == basketballB;
   do {
      basketballB = "2";
      if (typingP) {
         break;
      }
   } while ((basketballB.length < 1 || edita == String.fromCharCode(72,0)) && typingP);
      nterstitiald /= Math.max(3, ((shootyesgoalT ? 3 : 2)));
   if (!libturbomodulejsijniD && edita.length <= 5) {
      edita += `${(yellowredcardx.length * (shootyesgoalT ? 4 : 1))}`;
   }
   let thumbnailq = yellowredcardx == String.fromCharCode(50,119,52,104,119,99,0);
   do {
      yellowredcardx += `${screeni.size / 3}`;
      if (thumbnailq) {
         break;
      }
   } while (thumbnailq && (yellowredcardx.length <= basketballB.length));
   let storen = shootyesgoalT ? !shootyesgoalT : shootyesgoalT;
   do {
      shootyesgoalT = String.fromCharCode(112,0) == downarrowZ || 70 < screeni.size;
      if (storen) {
         break;
      }
   } while ((!libturbomodulejsijniD) && storen);
   while (!reminder6.endsWith(`${nterstitiald}`)) {
      nterstitiald *= ((libturbomodulejsijniD ? 5 : 2));
      break;
   }

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
       let mbsplasha = true;
    let grayR = String.fromCharCode(97,117,116,111,109,97,116,105,99,95,54,95,51,54,0);
    let libswresample2 = String.fromCharCode(98,95,52,48,95,101,108,101,109,0);
    let textlayoutmanagerY = String.fromCharCode(113,95,49,52,95,111,112,116,105,111,110,0);
    let latne: Map<any, any> = new Map([[String.fromCharCode(114,103,98,97,108,101,95,54,95,55,57,0),true ], [String.fromCharCode(102,95,56,52,95,114,101,100,101,116,101,99,116,0),false ]]);
    let yingI: Map<any, any> = new Map([[String.fromCharCode(101,112,111,110,121,109,111,117,115,95,101,95,56,53,0),368], [String.fromCharCode(111,95,55,49,95,116,97,103,103,105,110,103,0),439], [String.fromCharCode(118,95,54,48,95,121,101,97,114,0),833]]);
    let mbnativeR: Array<any> = [373, 64];
    let dragclosez = 2.0;
    let leagueu = 4;
    let sharew = true;
    let shareI = false;
    let fnewsY: Array<any> = [87, 398, 900];
       let mbridgep = String.fromCharCode(121,99,111,99,103,114,103,98,97,95,119,95,51,53,0);
      let sigmob9 = 6470199 >= mbridgep.length;
      do {
          let bangk = String.fromCharCode(99,95,51,52,95,112,108,117,103,105,110,0);
         mbridgep = `${3 >> (Math.min(5, bangk.length))}`;
         if (sigmob9) {
            break;
         }
      } while (sigmob9 && (mbridgep.length == 2));
       let footballfiledlayoutz = 0;
       let libjsiC = 4;
         footballfiledlayoutz <<= Math.min(2, Math.abs(3));
      dragclosez *= parseFloat(`${mbnativeR.length}`);

    switch (getMatchStatusData) {
      case '比赛开始':
        setCountDownTime(false);

   let lightA = 9497152.0 <= dragclosez;
   do {
       let hookU = String.fromCharCode(112,95,56,51,95,100,117,109,112,105,110,102,111,0);
       let renderw = true;
          let orangeL = String.fromCharCode(122,95,51,50,95,98,101,108,108,0);
          let regeng3 = false;
          let show9 = 1.0;
         hookU = `${parseInt(`${show9}`) % 1}`;
         orangeL = `${((regeng3 ? 4 : 4) & 3)}`;
         regeng3 = (((regeng3 ? orangeL.length : 24) << (Math.min(orangeL.length, 3))) == 24);
         show9 /= Math.max(1, parseFloat(`${orangeL.length}`));
         renderw = hookU.length < 7;
         renderw = hookU.includes(`${renderw}`);
         hookU = `${((renderw ? 4 : 2) | hookU.length)}`;
      let middlebrightness8 = renderw ? !renderw : renderw;
      do {
         renderw = hookU.length >= 35;
         if (middlebrightness8) {
            break;
         }
      } while (middlebrightness8 && (!renderw && 3 < hookU.length));
      if (!renderw) {
          let indicatory = String.fromCharCode(98,111,120,101,115,95,115,95,54,55,0);
          let project2: Map<any, any> = new Map([[String.fromCharCode(102,97,100,101,111,117,116,95,54,95,52,56,0),461], [String.fromCharCode(112,95,49,50,95,97,118,112,105,99,116,117,114,101,0),343], [String.fromCharCode(102,111,114,101,103,114,111,117,110,100,95,113,95,54,48,0),422]]);
          let transferr = String.fromCharCode(120,95,54,51,95,114,101,99,111,109,109,101,110,100,0);
          let filedY: Map<any, any> = new Map([[String.fromCharCode(120,95,50,55,95,112,97,99,101,100,0),String.fromCharCode(109,95,52,50,95,98,107,116,114,0)], [String.fromCharCode(99,112,117,105,100,95,48,95,50,50,0),String.fromCharCode(111,110,121,120,95,98,95,55,56,0)], [String.fromCharCode(114,95,55,53,95,116,101,120,105,112,111,100,0),String.fromCharCode(111,95,57,54,95,97,109,112,108,105,116,117,100,101,0)]]);
          let bootS = 4;
         hookU = `${((renderw ? 3 : 3) / (Math.max(hookU.length, 4)))}`;
         indicatory = `${transferr.length}`;
         project2.set(`${bootS}`, 1);
         transferr += `${3 << (Math.min(5, transferr.length))}`;
         filedY.set(transferr, filedY.size);
         bootS &= indicatory.length;
      }
      dragclosez /= Math.max(5, parseFloat(`${1 | grayR.length}`));
      if (lightA) {
         break;
      }
   } while ((4 <= (parseInt(`${dragclosez}`) - leagueu) || (parseFloat(`${leagueu}`) - dragclosez) <= 2.63) && lightA);
        setMiddleMatchBeforeStart(false);

      grayR += `${1 - mbnativeR.length}`;
        setMiddleMatchStarted(true);

      textlayoutmanagerY += `${(libswresample2 == String.fromCharCode(86,0) ? (mbsplasha ? 5 : 5) : libswresample2.length)}`;
        setDefaultStatus(false);

   let macauV = 5938253 >= yingI.size;
   do {
      yingI = new Map([[`${leagueu}`, grayR.length % 2]]);
      if (macauV) {
         break;
      }
   } while (macauV && (Array.from(yingI.values()).includes(mbnativeR.length)));
        if (matchState === 7) {

      grayR = `${latne.size}`;
          setCountDownTime(false);

       let iconuserI = 0.0;
       let playlist4: Map<any, any> = new Map([[String.fromCharCode(116,111,110,103,117,101,95,52,95,54,51,0),String.fromCharCode(120,95,53,95,111,112,116,105,109,105,115,116,105,99,0)], [String.fromCharCode(112,114,101,99,101,100,101,110,99,101,95,113,95,56,55,0),String.fromCharCode(107,95,56,57,95,100,101,108,97,121,115,0)], [String.fromCharCode(99,95,56,55,95,109,101,114,103,101,0),String.fromCharCode(112,95,56,54,95,114,101,97,99,104,97,98,108,101,0)]]);
       let nextL: Array<any> = [520, 192];
       let sinav = true;
          let reviewE: Array<any> = [String.fromCharCode(114,95,55,52,95,99,114,101,97,116,111,114,0), String.fromCharCode(116,95,56,57,95,114,101,99,118,118,0)];
         sinav = (iconuserI / (Math.max(parseFloat(`${reviewE.length}`), 9))) >= 100.4;
         nextL = [2];
      for (let d = 0; d < 3; d++) {
          let typesX = false;
          let ticked0: Map<any, any> = new Map([[String.fromCharCode(116,95,57,48,95,118,105,115,105,98,108,101,0),548], [String.fromCharCode(108,95,57,48,95,99,97,110,99,101,108,108,97,116,105,111,110,0),68], [String.fromCharCode(115,95,52,57,95,116,111,111,108,115,0),382]]);
          let pushR = String.fromCharCode(112,114,101,117,112,100,97,116,101,95,121,95,54,56,0);
          let favoriteC = String.fromCharCode(111,95,56,53,0);
         playlist4.set(`${typesX}`, pushR.length << (Math.min(Math.abs(1), 4)));
         ticked0.set(`${favoriteC}`, favoriteC.length);
         pushR += `${ticked0.size}`;
      }
      for (let k = 0; k < 3; k++) {
         playlist4 = new Map([[`${playlist4.size}`, nextL.length]]);
      }
      while (iconuserI == parseFloat(`${playlist4.size}`)) {
         iconuserI -= parseFloat(`${parseInt(`${iconuserI}`) ^ 2}`);
         break;
      }
      let modez = iconuserI <= 8277604.0;
      do {
          let verticalL = String.fromCharCode(112,95,57,50,95,103,97,109,109,97,102,105,108,116,101,114,0);
          let logoQ: Map<any, any> = new Map([[String.fromCharCode(114,101,113,117,105,114,101,115,95,115,95,51,50,0),String.fromCharCode(112,97,105,114,95,98,95,56,57,0)], [String.fromCharCode(115,105,110,101,115,95,108,95,57,57,0),String.fromCharCode(104,97,112,116,105,99,95,55,95,57,50,0)], [String.fromCharCode(97,100,106,117,115,116,101,100,95,48,95,53,56,0),String.fromCharCode(115,105,110,107,95,116,95,53,49,0)]]);
          let subtextn = 5;
          let codegenQ = 2.0;
          let libhermes9 = 5;
         iconuserI /= Math.max(parseFloat(`${verticalL.length << (Math.min(Math.abs(2), 4))}`), 3);
         verticalL = `${parseInt(`${codegenQ}`)}`;
         logoQ.set(`${codegenQ}`, logoQ.size);
         subtextn += 2 - parseInt(`${codegenQ}`);
         libhermes9 |= subtextn << (Math.min(Math.abs(2), 2));
         if (modez) {
            break;
         }
      } while (modez && ((iconuserI - 5.64) == 1.15));
      while (playlist4.size > 1) {
         playlist4 = new Map([[`${playlist4.size}`, nextL.length]]);
         break;
      }
       let uimanagerf = 0;
       let sharemodalS = 3;
      latne = new Map([[`${playlist4.size}`, 2]]);
          setMiddleMatchBeforeStart(false);

   while (4 < libswresample2.length) {
      libswresample2 += `${latne.size}`;
      break;
   }
          setMiddleMatchStarted(true);

      mbnativeR.push(textlayoutmanagerY.length ^ latne.size);
          setPanaltyMatchStarted(true);
        }
        break;
      case '已结束':
        setCountDownTime(false);

      latne.set(grayR, 1 & libswresample2.length);
        setMiddleMatchBeforeStart(false);

   for (let q = 0; q < 2; q++) {
      dragclosez *= parseFloat(`${yingI.size}`);
   }
        setMiddleMatchStarted(true);

       let predictionbannersharedt = false;
       let styleh = String.fromCharCode(114,101,97,108,108,111,99,112,95,116,95,50,53,0);
       let predictionwinE: Array<any> = [String.fromCharCode(114,95,49,95,105,111,115,0), String.fromCharCode(111,98,106,101,99,116,105,118,101,95,114,95,52,55,0)];
       let libtann = true;
       let iconclosewhitebgJ = true;
      for (let z = 0; z < 1; z++) {
          let settingz = String.fromCharCode(117,110,119,105,110,100,95,119,95,57,54,0);
          let over7 = false;
          let upgradef = String.fromCharCode(116,121,112,95,122,95,55,49,0);
          let scheduleH = 5;
         styleh += `${((predictionbannersharedt ? 5 : 5) % (Math.max(2, 10)))}`;
         settingz += `${((over7 ? 2 : 2))}`;
         over7 = settingz.length > 20 || over7;
         upgradef += "3";
         scheduleH %= Math.max(((over7 ? 3 : 1)), 3);
      }
          let humidityE: Array<any> = [568, 986];
          let middlebrightnessM = String.fromCharCode(109,95,54,48,95,99,109,105,111,0);
          let ajaxi = String.fromCharCode(118,95,54,50,95,115,111,105,115,99,111,110,110,101,99,116,101,100,0);
         predictionwinE.push(1 & predictionwinE.length);
         humidityE = [1];
         middlebrightnessM += `${humidityE.length}`;
         ajaxi += `${middlebrightnessM.length}`;
         iconclosewhitebgJ = !libtann;
         predictionbannersharedt = styleh.length > 28 && !predictionbannersharedt;
      if (libtann) {
         styleh += `${styleh.length}`;
      }
       let libreanimatedF: Array<any> = [776, 662, 196];
       let coreB: Array<any> = [933, 219, 807];
         iconclosewhitebgJ = String.fromCharCode(88,0) == styleh;
         predictionbannersharedt = styleh.length > 25 && predictionbannersharedt;
      yingI.set(textlayoutmanagerY, predictionwinE.length);
        setDefaultStatus(false);

   for (let d = 0; d < 1; d++) {
       let bridgeG: Array<any> = [158, 494];
       let y_hashP = String.fromCharCode(99,97,115,101,95,53,95,57,50,0);
       let backicon3: Map<any, any> = new Map([[String.fromCharCode(103,101,110,101,114,97,108,95,57,95,53,51,0),true ], [String.fromCharCode(115,95,54,53,95,98,101,99,104,0),true ]]);
       let profiley: Map<any, any> = new Map([[String.fromCharCode(120,95,51,53,95,115,116,111,114,105,110,103,0),803], [String.fromCharCode(115,116,114,111,107,101,100,95,105,95,54,55,0),122], [String.fromCharCode(112,95,50,55,0),700]]);
       let turndownS = false;
         turndownS = y_hashP.length > backicon3.size;
          let libfbjniX = 2.0;
          let gpayD: Map<any, any> = new Map([[String.fromCharCode(114,103,116,99,115,95,117,95,49,57,0),277], [String.fromCharCode(102,95,49,54,95,104,111,114,105,122,111,110,116,97,108,108,121,0),467], [String.fromCharCode(102,95,57,55,95,117,110,100,101,114,101,115,116,105,109,97,116,101,100,0),463]]);
          let hooks4 = 2.0;
         backicon3 = new Map([[`${gpayD.size}`, gpayD.size]]);
         libfbjniX += 3;
         hooks4 -= parseFloat(`${2 << (Math.min(Math.abs(parseInt(`${libfbjniX}`)), 4))}`);
      while (1 >= y_hashP.length && !turndownS) {
         turndownS = 58 == bridgeG.length;
         break;
      }
      if (turndownS) {
         turndownS = y_hashP == String.fromCharCode(116,0);
      }
         turndownS = !turndownS;
         y_hashP = `${y_hashP.length}`;
         turndownS = profiley.size == 45;
      while (1 <= (1 | bridgeG.length) && (y_hashP.length | bridgeG.length) <= 1) {
          let yellowvideoliveC = String.fromCharCode(101,95,57,51,95,121,117,118,112,0);
          let agreementk = 2.0;
          let iconscheduleX = String.fromCharCode(97,95,56,57,95,113,115,99,97,108,101,98,105,116,115,0);
          let iconrefresh8 = String.fromCharCode(117,95,57,95,112,97,114,116,105,99,108,101,0);
          let tickedz = 4.0;
         y_hashP = `${(yellowvideoliveC == String.fromCharCode(66,0) ? yellowvideoliveC.length : iconrefresh8.length)}`;
         agreementk *= parseFloat(`${iconscheduleX.length}`);
         iconscheduleX = "1";
         iconrefresh8 = `${parseInt(`${tickedz}`)}`;
         break;
      }
         backicon3.set(`${bridgeG.length}`, 3 >> (Math.min(2, Math.abs(backicon3.size))));
         backicon3 = new Map([[`${backicon3.size}`, 1]]);
         turndownS = !y_hashP.startsWith(`${turndownS}`);
      let scoreu = 6719592 <= y_hashP.length;
      do {
         y_hashP += "3";
         if (scoreu) {
            break;
         }
      } while (((y_hashP.length & bridgeG.length) > 4 && (4 & bridgeG.length) > 3) && scoreu);
      for (let w = 0; w < 2; w++) {
          let rulesK = String.fromCharCode(97,117,116,104,111,114,105,122,101,95,56,95,57,0);
          let switch_yp = 1.0;
          let pushI: Array<any> = [String.fromCharCode(109,95,52,52,95,102,117,100,103,101,0), String.fromCharCode(99,111,110,116,111,117,114,95,98,95,52,56,0), String.fromCharCode(102,95,51,57,95,110,105,108,115,0)];
          let flipperv = String.fromCharCode(115,112,105,110,110,105,110,103,95,104,95,54,51,0);
          let anythinkn = 5.0;
         turndownS = (bridgeG.length / (Math.max(profiley.size, 5))) >= 9;
         rulesK += `${3 + rulesK.length}`;
         switch_yp += 2;
         pushI = [pushI.length << (Math.min(flipperv.length, 4))];
         flipperv = `${parseInt(`${anythinkn}`)}`;
      }
         turndownS = (backicon3.size & profiley.size) == 10;
         profiley.set(`${turndownS}`, backicon3.size);
      dragclosez /= Math.max(parseFloat(`${backicon3.size / (Math.max(mbnativeR.length, 6))}`), 3);
   }
        if ((homePenaltyScore && awayPenaltyScore) && (homePenaltyScore > 0 || awayPenaltyScore > 0)) {

      dragclosez -= parseFloat(`${1}`);
          setPanaltyMatchStarted(true);
        }
        break;
      case '未开始':
        if (countDownStatus) {

   let iconsharei = yingI.size <= 4987215;
   do {
      yingI = new Map([[`${yingI.size}`, yingI.size]]);
      if (iconsharei) {
         break;
      }
   } while (iconsharei && (3 == (3 + yingI.size) && yingI.size == 3));
          setCountDownTime(true);

      textlayoutmanagerY += "1";
          setMiddleMatchBeforeStart(false);

   let xadsdkc = 4923213.0 <= dragclosez;
   do {
      dragclosez /= Math.max((parseFloat(`${(mbsplasha ? 5 : 3) | 1}`)), 5);
      if (xadsdkc) {
         break;
      }
   } while (xadsdkc && ((3 >> (Math.min(5, mbnativeR.length))) == 1 && 2 == (3 + mbnativeR.length)));
          setMiddleMatchStarted(false);

       let listf = 1.0;
       let fcdaebecbcbafcdfceaaeccfeacdbv = true;
       let productN = true;
      while (!fcdaebecbcbafcdfceaaeccfeacdbv) {
          let yellowredcardA = String.fromCharCode(99,95,56,54,95,98,114,97,110,99,104,0);
          let volumeP = 3.0;
          let context6 = 0.0;
          let streamingL = 5.0;
         productN = !productN;
         yellowredcardA += `${parseInt(`${context6}`) ^ 2}`;
         volumeP *= yellowredcardA.length;
         context6 -= parseFloat(`${parseInt(`${volumeP}`) * 1}`);
         streamingL += parseInt(`${context6}`);
         break;
      }
          let libswresampleW = true;
          let pathM = 3.0;
         fcdaebecbcbafcdfceaaeccfeacdbv = productN && pathM > 17.25;
         libswresampleW = !libswresampleW;
         pathM -= (1 / (Math.max((libswresampleW ? 1 : 2), 7)));
      grayR += `${((mbsplasha ? 4 : 4) + 2)}`;
      listf -= parseInt(`${listf}`);
          setDefaultStatus(false);
        } else {

       let modity_ = 1.0;
          let clubp: Array<any> = [271, 848];
         modity_ -= parseFloat(`${parseInt(`${modity_}`)}`);
         clubp = [clubp.length];
          let trophyI = 0.0;
          let starq = String.fromCharCode(121,117,118,114,103,98,95,121,95,50,54,0);
          let loginW = false;
         modity_ /= Math.max(1, parseFloat(`${parseInt(`${trophyI}`) % (Math.max(3, 4))}`));
         trophyI *= 3;
         starq = `${((loginW ? 5 : 1) << (Math.min(starq.length, 5)))}`;
      if ((modity_ + 5) < 2.66) {
         modity_ -= parseFloat(`${parseInt(`${modity_}`) - parseInt(`${modity_}`)}`);
      }
      latne.set(`${modity_}`, parseInt(`${modity_}`));
          setCountDownTime(false);

   while (2.81 < (dragclosez / (Math.max(1.81, 1))) && 2.65 < (1.81 / (Math.max(4, dragclosez)))) {
      textlayoutmanagerY += `${mbnativeR.length & latne.size}`;
      break;
   }
          setMiddleMatchBeforeStart(true);

      libswresample2 = "3";
          setMiddleMatchStarted(false);

   if (!mbsplasha) {
       let libzeusT = 2.0;
         libzeusT += parseInt(`${libzeusT}`);
         libzeusT *= 1;
         libzeusT /= Math.max(4, parseInt(`${libzeusT}`));
      yingI = new Map([[`${dragclosez}`, 2]]);
   }
          setDefaultStatus(false);
        }
        break;
      default:
        setCountDownTime(false);

      yingI = new Map([[`${latne.size}`, latne.size / 3]]);
        setMiddleMatchBeforeStart(false);

   let iconclosewhitebgv = mbsplasha ? !mbsplasha : mbsplasha;
   do {
       let halffieldimageC: Map<any, any> = new Map([[String.fromCharCode(98,108,111,99,107,115,95,119,95,52,52,0),String.fromCharCode(117,95,56,54,95,108,105,109,105,116,97,116,105,111,110,0)], [String.fromCharCode(105,115,101,109,112,116,121,95,112,95,56,57,0),String.fromCharCode(100,105,115,99,111,118,101,114,95,105,95,52,57,0)], [String.fromCharCode(109,95,49,53,95,114,101,98,117,105,108,100,0),String.fromCharCode(109,95,54,53,95,112,114,111,109,111,116,101,0)]]);
       let neon7: Array<any> = [523, 367];
       let upgradek = String.fromCharCode(115,95,51,56,95,103,111,111,103,0);
       let formM = String.fromCharCode(112,95,57,52,95,118,105,115,105,98,105,108,105,116,105,116,101,115,0);
       let iconsubssuccess9 = String.fromCharCode(101,95,51,56,95,114,101,119,105,110,100,0);
      let libmapbufferjniZ = iconsubssuccess9 == String.fromCharCode(121,118,102,50,115,110,97,105,54,120,0);
      do {
         iconsubssuccess9 = `${halffieldimageC.size}`;
         if (libmapbufferjniZ) {
            break;
         }
      } while ((formM != iconsubssuccess9) && libmapbufferjniZ);
         halffieldimageC.set(`${upgradek}`, (upgradek == String.fromCharCode(108,0) ? upgradek.length : halffieldimageC.size));
         formM = `${formM.length}`;
      if ((neon7.length + 5) < 3) {
         upgradek = `${neon7.length}`;
      }
          let pressureI = String.fromCharCode(105,95,54,55,95,115,99,117,98,98,101,114,0);
          let anythinkg = true;
          let turn_ = 1.0;
         formM += `${((anythinkg ? 2 : 3) >> (Math.min(Math.abs(2), 2)))}`;
         pressureI += `${parseInt(`${turn_}`)}`;
         anythinkg = (pressureI.length / (Math.max(7, parseInt(`${turn_}`)))) <= 65;
          let iconsaveimagep = String.fromCharCode(97,99,107,117,112,95,50,95,55,52,0);
          let gmailn: Map<any, any> = new Map([[String.fromCharCode(103,95,57,57,95,105,100,108,101,0),597], [String.fromCharCode(103,95,53,57,95,98,111,117,110,100,97,108,108,0),314], [String.fromCharCode(109,101,116,114,105,99,95,109,95,53,51,0),736]]);
          let bootD = 3;
         neon7.push(3);
         iconsaveimagep += `${bootD ^ iconsaveimagep.length}`;
         gmailn = new Map([[iconsaveimagep, 3 << (Math.min(4, iconsaveimagep.length))]]);
         bootD += 2;
      while (iconsubssuccess9.includes(`${formM.length}`)) {
         formM = `${neon7.length}`;
         break;
      }
          let iconnointernetr = String.fromCharCode(112,97,115,116,101,108,95,56,95,57,0);
          let connectionB = true;
          let libswscalef = 2.0;
         neon7 = [3];
         iconnointernetr = `${parseInt(`${libswscalef}`) >> (Math.min(2, Math.abs(2)))}`;
         connectionB = (((!connectionB ? iconnointernetr.length : 42) / (Math.max(3, iconnointernetr.length))) == 42);
         libswscalef /= Math.max(1, 1);
      for (let p = 0; p < 1; p++) {
          let editr = 1.0;
          let whiteh = 2;
         halffieldimageC.set(formM, neon7.length & 1);
         editr /= Math.max(5, parseInt(`${editr}`) << (Math.min(3, Math.abs(whiteh))));
         whiteh /= Math.max(3, whiteh >> (Math.min(1, Math.abs(3))));
      }
       let sortU = String.fromCharCode(100,97,115,104,101,115,95,54,95,52,55,0);
         neon7 = [sortU.length];
      let serviceg = 7821246 >= upgradek.length;
      do {
          let middlew = String.fromCharCode(99,97,112,116,105,111,110,95,54,95,51,55,0);
         upgradek += "3";
         middlew = "3";
         if (serviceg) {
            break;
         }
      } while ((2 <= upgradek.length || sortU == String.fromCharCode(100,0)) && serviceg);
         iconsubssuccess9 = `${iconsubssuccess9.length + 2}`;
       let pangles: Array<any> = [681, 662];
          let ajaxz = String.fromCharCode(107,116,111,112,95,51,95,49,52,0);
          let skip6 = 3;
         sortU += `${upgradek.length - neon7.length}`;
         ajaxz = `${ajaxz.length | skip6}`;
         skip6 ^= ajaxz.length / 1;
      mbsplasha = iconsubssuccess9 == String.fromCharCode(73,0);
      if (iconclosewhitebgv) {
         break;
      }
   } while ((4 <= textlayoutmanagerY.length || !mbsplasha) && iconclosewhitebgv);
        setMiddleMatchStarted(false);

   if (1 == leagueu) {
       let starqh = 3;
       let watchX = String.fromCharCode(114,101,116,114,97,110,115,95,115,95,53,51,0);
       let utilsV = String.fromCharCode(99,111,108,111,114,113,117,97,110,116,95,98,95,49,53,0);
         starqh &= (String.fromCharCode(99,0) == watchX ? starqh : watchX.length);
      while (3 >= (watchX.length / 3) && 2 >= (3 / (Math.max(6, watchX.length)))) {
          let pangle6 = String.fromCharCode(120,95,53,56,95,115,98,114,100,115,112,0);
          let logoutW = 1;
         starqh -= (pangle6 == String.fromCharCode(105,0) ? starqh : pangle6.length);
         logoutW &= logoutW & 1;
         break;
      }
      if (1 >= (3 >> (Math.min(4, Math.abs(starqh)))) || 3 >= (starqh >> (Math.min(utilsV.length, 4)))) {
         starqh *= watchX.length / (Math.max(2, starqh));
      }
         starqh *= 2 - utilsV.length;
      let armva4 = utilsV.length >= 6315183;
      do {
         utilsV = `${2 % (Math.max(10, watchX.length))}`;
         if (armva4) {
            break;
         }
      } while (armva4 && (watchX != utilsV));
         watchX += `${(String.fromCharCode(89,0) == utilsV ? utilsV.length : starqh)}`;
      while ((utilsV.length * 3) <= 5) {
         utilsV = `${watchX.length}`;
         break;
      }
         starqh >>= Math.min(Math.abs(utilsV.length - 3), 4);
      if (3 < (utilsV.length >> (Math.min(Math.abs(1), 5))) || (1 >> (Math.min(1, utilsV.length))) < 4) {
         utilsV = `${starqh & 3}`;
      }
      dragclosez += parseFloat(`${grayR.length}`);
   }
        setDefaultStatus(true);

      yingI.set(`${leagueu}`, 1);
        break;
    }
  };

  
  
  
  
  
  
  
  

  const liveVideo = () => {
       let sidem = 2;
    let gradleN = true;
    let stations3 = String.fromCharCode(114,101,99,101,105,118,101,95,49,95,57,0);
    let episodes = String.fromCharCode(107,97,116,95,109,95,48,0);
    let complete8 = 1.0;
    let foundV: Array<any> = [String.fromCharCode(114,101,111,112,101,110,95,49,95,50,52,0), String.fromCharCode(120,95,56,52,95,115,101,109,97,110,116,105,99,115,0)];
    let checkboxv = String.fromCharCode(114,95,57,57,95,99,108,99,112,0);
    let latnC = String.fromCharCode(116,101,114,109,105,110,97,116,101,95,120,95,56,49,0);
   if ((complete8 - 4.86) == 5.76 && (sidem - 5) == 3) {
      complete8 *= parseFloat(`${stations3.length + checkboxv.length}`);
   }
   while (5 < sidem) {
       let proxyE = 4.0;
       let iconplay7 = String.fromCharCode(107,95,54,54,95,102,97,97,110,100,99,116,0);
       let actionsr: Array<any> = [923, 582, 374];
       let mutedT = 0.0;
       let changeB: Map<any, any> = new Map([[String.fromCharCode(114,101,108,97,121,111,117,116,95,113,95,56,48,0),159], [String.fromCharCode(120,95,51,56,95,100,116,100,102,0),579]]);
       let desce = 2.0;
       let middleH = 0.0;
      for (let y = 0; y < 1; y++) {
         proxyE -= parseInt(`${mutedT}`) >> (Math.min(actionsr.length, 2));
      }
          let final_2z = String.fromCharCode(97,114,99,104,105,118,105,110,103,95,52,95,52,53,0);
          let volumey = String.fromCharCode(109,105,120,105,110,103,95,101,95,48,0);
          let eighteenz = String.fromCharCode(115,111,108,105,100,99,111,108,111,114,95,119,95,48,0);
         middleH /= Math.max(1, 3);
         final_2z += `${volumey.length}`;
         volumey = `${3 % (Math.max(6, eighteenz.length))}`;
         eighteenz += "2";
      for (let c = 0; c < 2; c++) {
         desce *= 3;
      }
          let profileinactiveM = String.fromCharCode(99,111,108,108,105,115,116,95,119,95,56,54,0);
          let hinit_2e = 4.0;
         iconplay7 += "1";
         profileinactiveM += `${profileinactiveM.length}`;
         hinit_2e *= parseFloat(`${parseInt(`${hinit_2e}`)}`);
         iconplay7 = "2";
      while (5.89 > (4.22 * middleH) || (middleH * mutedT) > 4.22) {
         mutedT += parseFloat(`${1 | parseInt(`${desce}`)}`);
         break;
      }
       let crossj: Array<any> = [String.fromCharCode(105,110,100,101,110,116,95,49,95,53,49,0), String.fromCharCode(103,101,116,99,117,116,95,109,95,55,49,0), String.fromCharCode(112,105,110,95,57,95,57,52,0)];
      while (2.53 > (mutedT + desce)) {
          let userE: Map<any, any> = new Map([[String.fromCharCode(100,101,116,101,114,109,105,110,101,100,95,97,95,53,52,0),710], [String.fromCharCode(120,95,55,51,95,115,112,97,109,0),229], [String.fromCharCode(118,97,108,117,101,100,95,115,95,56,53,0),819]]);
          let logoutT: Map<any, any> = new Map([[String.fromCharCode(97,95,54,50,0),true ], [String.fromCharCode(99,95,54,55,95,97,114,116,119,111,114,107,0),true ], [String.fromCharCode(114,103,116,99,117,95,103,95,53,54,0),false ]]);
          let result7: Map<any, any> = new Map([[String.fromCharCode(104,105,103,104,101,114,95,54,95,52,0),331], [String.fromCharCode(99,104,97,110,103,101,100,95,116,95,49,0),616], [String.fromCharCode(97,115,115,101,109,98,108,101,114,95,116,95,54,49,0),922]]);
          let greyticki = true;
          let root4 = String.fromCharCode(106,95,49,55,95,100,111,117,103,108,97,115,0);
         mutedT *= parseFloat(`${crossj.length | 1}`);
         userE = new Map([[`${logoutT.size}`, result7.size % 3]]);
         logoutT = new Map([[`${result7.size}`, ((greyticki ? 3 : 3) | result7.size)]]);
         greyticki = root4 == String.fromCharCode(50,0);
         root4 = `${result7.size}`;
         break;
      }
      for (let u = 0; u < 2; u++) {
         proxyE += parseInt(`${mutedT}`);
      }
      for (let c = 0; c < 1; c++) {
          let ninit_lX: Map<any, any> = new Map([[String.fromCharCode(100,101,110,111,105,115,101,95,103,95,52,51,0),true ], [String.fromCharCode(102,95,57,50,95,116,105,109,105,110,103,115,0),false ]]);
         changeB = new Map([[`${changeB.size}`, changeB.size]]);
         ninit_lX = new Map([[`${ninit_lX.size}`, ninit_lX.size | ninit_lX.size]]);
      }
       let preview_ = 5.0;
       let downloadera = 2.0;
          let statisticsinactiveG = String.fromCharCode(103,95,54,95,109,97,103,101,0);
          let with_qyw = String.fromCharCode(97,115,105,110,107,95,102,95,49,52,0);
         middleH -= 3 ^ parseInt(`${middleH}`);
         statisticsinactiveG = `${(String.fromCharCode(67,0) == with_qyw ? with_qyw.length : statisticsinactiveG.length)}`;
         proxyE /= Math.max(parseInt(`${middleH}`), 2);
         desce -= parseInt(`${downloadera}`);
      sidem |= 1;
      break;
   }
   if (checkboxv.includes(episodes)) {
      episodes = `${foundV.length / (Math.max(stations3.length, 5))}`;
   }
      gradleN = 83 >= stations3.length;
   let libavfilterJ = checkboxv == String.fromCharCode(51,110,53,106,121,110,54,52,119,115,0);
   do {
      checkboxv += `${checkboxv.length}`;
      if (libavfilterJ) {
         break;
      }
   } while (libavfilterJ && (!checkboxv.includes(`${stations3.length}`)));
   if (5 < foundV.length) {
       let shoot7 = String.fromCharCode(104,95,56,48,95,114,101,115,101,101,107,0);
         shoot7 = `${2 ^ shoot7.length}`;
         shoot7 = `${shoot7.length}`;
          let libavfilterk = String.fromCharCode(104,105,116,115,95,101,95,55,0);
         shoot7 += `${libavfilterk.length * shoot7.length}`;
      checkboxv = `${shoot7.length}`;
   }
      sidem %= Math.max(1, (3 + (gradleN ? 5 : 5)));

    if (onOpenLive) {

      checkboxv += `${((gradleN ? 4 : 1) & parseInt(`${complete8}`))}`;
       let videovarO = String.fromCharCode(99,111,110,115,116,115,95,100,95,53,0);
         videovarO = `${videovarO.length}`;
      for (let v = 0; v < 3; v++) {
          let backgroundh: Map<any, any> = new Map([[String.fromCharCode(102,95,50,56,95,112,114,101,116,101,110,100,0),309], [String.fromCharCode(106,95,52,57,95,100,109,97,98,117,102,0),942], [String.fromCharCode(120,95,49,95,98,111,116,0),470]]);
          let yellowanimationlive6: Map<any, any> = new Map([[String.fromCharCode(100,109,97,98,117,102,95,51,95,50,49,0),742], [String.fromCharCode(107,110,111,99,107,111,117,116,95,51,95,53,48,0),439]]);
         videovarO = `${backgroundh.size + 2}`;
         backgroundh.set(`${yellowanimationlive6.size}`, yellowanimationlive6.size);
      }
          let webviewk = String.fromCharCode(97,99,116,111,114,95,103,95,50,50,0);
         videovarO += `${1 + webviewk.length}`;
      checkboxv = `${(String.fromCharCode(86,0) == stations3 ? stations3.length : parseInt(`${complete8}`))}`;
      stations3 = "1";
       let description_df1 = String.fromCharCode(112,100,102,95,109,95,54,57,0);
       let recommendationc = String.fromCharCode(105,95,56,53,95,112,114,101,115,101,108,101,99,116,0);
       let networkl = 2.0;
      let routerK = 5959574 >= recommendationc.length;
      do {
         recommendationc = "3";
         if (routerK) {
            break;
         }
      } while ((description_df1.length >= 1) && routerK);
          let navigation7 = String.fromCharCode(109,95,50,56,95,101,110,108,97,114,103,101,0);
          let typingd = String.fromCharCode(117,110,113,117,97,110,116,105,122,101,95,53,95,49,54,0);
         recommendationc = `${(navigation7 == String.fromCharCode(66,0) ? navigation7.length : parseInt(`${networkl}`))}`;
         typingd = `${typingd.length}`;
      for (let y = 0; y < 3; y++) {
         recommendationc = `${1 - description_df1.length}`;
      }
       let orientationS: Array<any> = [368, 379, 394];
       let livenodatabgimg8: Array<any> = [319, 109, 927];
      while ((orientationS.length / (Math.max(livenodatabgimg8.length, 4))) <= 4 || (orientationS.length / (Math.max(livenodatabgimg8.length, 7))) <= 4) {
         orientationS.push(description_df1.length - 2);
         break;
      }
         description_df1 = `${parseInt(`${networkl}`) | orientationS.length}`;
      for (let z = 0; z < 1; z++) {
         orientationS.push(3);
      }
      let mathW = String.fromCharCode(52,48,118,50,0) == recommendationc;
      do {
          let productV = 2.0;
          let anytimer = String.fromCharCode(104,95,49,48,48,95,115,101,116,116,97,98,108,101,0);
         recommendationc = `${orientationS.length}`;
         productV += parseFloat(`${anytimer.length}`);
         anytimer = `${anytimer.length ^ 3}`;
         if (mathW) {
            break;
         }
      } while ((3 == (orientationS.length & recommendationc.length) || 5 == (3 & recommendationc.length)) && mathW);
         livenodatabgimg8.push(2);
      latnC = `${checkboxv.length}`;
   if ((1.99 - complete8) <= 5.52) {
       let roomP = 4.0;
       let lightV = String.fromCharCode(97,116,116,114,98,117,116,101,95,50,95,52,57,0);
       let streamingJ: Map<any, any> = new Map([[String.fromCharCode(119,95,52,95,105,110,116,101,114,108,101,97,118,101,0),String.fromCharCode(100,95,54,54,95,102,114,105,101,110,100,108,121,0)], [String.fromCharCode(115,110,97,112,115,104,111,116,115,95,113,95,52,50,0),String.fromCharCode(104,95,52,53,95,109,105,115,99,0)], [String.fromCharCode(97,110,99,104,111,114,115,95,54,95,55,53,0),String.fromCharCode(97,95,57,55,95,109,97,112,112,101,114,0)]]);
      while (2 > lightV.length) {
         lightV += `${streamingJ.size}`;
         break;
      }
          let darkB = String.fromCharCode(99,104,101,99,107,95,106,95,55,49,0);
         streamingJ = new Map([[`${streamingJ.size}`, 1]]);
         darkB += `${(darkB == String.fromCharCode(122,0) ? darkB.length : darkB.length)}`;
      while ((streamingJ.size >> (Math.min(lightV.length, 2))) <= 1 && 1 <= (streamingJ.size >> (Math.min(lightV.length, 3)))) {
         lightV = "2";
         break;
      }
      for (let n = 0; n < 1; n++) {
         lightV = `${streamingJ.size}`;
      }
          let hongkongF = String.fromCharCode(103,112,111,115,116,102,105,108,116,101,114,95,122,95,54,50,0);
          let clubk = 2;
          let iconnointernetf = String.fromCharCode(111,95,54,52,95,116,101,115,116,105,109,103,105,110,116,0);
         lightV += `${iconnointernetf.length & clubk}`;
         hongkongF = `${hongkongF.length << (Math.min(4, hongkongF.length))}`;
         clubk -= hongkongF.length;
         streamingJ.set(`${lightV}`, (lightV == String.fromCharCode(101,0) ? lightV.length : streamingJ.size));
      if (4 <= (lightV.length - parseInt(`${roomP}`))) {
          let mimoZ: Map<any, any> = new Map([[String.fromCharCode(112,95,49,55,95,115,115,101,114,116,0),false ], [String.fromCharCode(105,95,56,53,95,114,101,115,116,111,114,101,0),true ]]);
          let securityh = 4.0;
          let profilez = 4.0;
         roomP *= parseFloat(`${mimoZ.size}`);
         mimoZ.set(`${profilez}`, parseInt(`${profilez}`) >> (Math.min(1, Math.abs(parseInt(`${securityh}`)))));
         securityh -= parseFloat(`${parseInt(`${profilez}`)}`);
      }
       let scoreB = 1.0;
          let l_countR = String.fromCharCode(111,95,56,53,95,97,114,116,105,99,108,101,115,0);
          let clock5 = String.fromCharCode(97,95,50,54,95,116,111,111,108,98,97,114,115,0);
          let chinaD = String.fromCharCode(111,95,51,50,95,100,105,115,97,112,112,101,97,114,97,110,99,101,0);
         streamingJ.set(`${roomP}`, 3);
         l_countR += `${chinaD.length}`;
         clock5 = `${clock5.length}`;
         chinaD += `${l_countR.length}`;
      latnC = `${(episodes == String.fromCharCode(121,0) ? parseInt(`${complete8}`) : episodes.length)}`;
   }
      sidem += stations3.length;
   while (2 <= (4 - checkboxv.length) || (4 - foundV.length) <= 5) {
      checkboxv += `${1 >> (Math.min(5, checkboxv.length))}`;
      break;
   }
      onOpenLive();
    }
  };

  const liveAnimationVideo = () => {
       let annerg = 5.0;
    let memberW = 0.0;
    let arrowrightu = String.fromCharCode(104,95,50,52,95,97,102,102,101,99,116,0);
    let overlayn: Map<any, any> = new Map([[String.fromCharCode(98,95,53,51,95,97,115,115,111,99,105,97,116,105,111,110,0),512], [String.fromCharCode(115,117,112,112,111,114,116,101,100,95,97,95,49,50,0),851], [String.fromCharCode(117,95,55,95,119,97,114,110,0),849]]);
    let sentryO: Array<any> = [String.fromCharCode(115,95,50,49,95,116,114,117,110,99,0), String.fromCharCode(117,95,49,52,95,110,111,114,109,97,108,105,122,101,0), String.fromCharCode(101,120,101,99,117,116,101,95,104,95,56,57,0)];
    let filledz = 5;
    let hoverK = String.fromCharCode(114,97,99,101,95,117,95,57,48,0);
    let macau2 = String.fromCharCode(115,101,116,117,112,100,95,118,95,57,52,0);
    let sharemodalN = String.fromCharCode(121,95,57,54,95,101,110,99,111,100,101,100,115,116,114,101,97,109,0);
    let annert = 2.0;
   for (let d = 0; d < 3; d++) {
      filledz >>= Math.min(hoverK.length, 4);
   }
   let videojsq = macau2 == String.fromCharCode(100,116,51,54,122,114,0);
   do {
      macau2 = `${1 & sentryO.length}`;
      if (videojsq) {
         break;
      }
   } while (videojsq && (2 < hoverK.length));
       let libsgcoreU = String.fromCharCode(116,114,117,101,109,111,116,105,111,110,114,116,95,122,95,49,57,0);
          let libimagepipelineK: Map<any, any> = new Map([[String.fromCharCode(117,95,52,49,95,116,104,114,101,97,100,103,114,111,117,112,0),String.fromCharCode(114,95,53,49,95,99,111,100,105,110,103,0)], [String.fromCharCode(111,95,56,55,95,104,101,120,98,105,110,0),String.fromCharCode(101,95,51,49,95,112,97,103,101,115,105,122,101,0)], [String.fromCharCode(111,117,116,102,105,108,101,95,118,95,56,56,0),String.fromCharCode(99,95,55,51,95,116,98,108,101,110,100,0)]]);
          let controlm = 2;
          let membershipr = 2;
         libsgcoreU = `${controlm | membershipr}`;
         libimagepipelineK.set(`${libimagepipelineK.size}`, 1);
         controlm ^= libimagepipelineK.size;
      let benefitG = 5593012 <= libsgcoreU.length;
      do {
         libsgcoreU = `${libsgcoreU.length}`;
         if (benefitG) {
            break;
         }
      } while (benefitG && (3 < libsgcoreU.length));
      if (libsgcoreU == String.fromCharCode(99,0) && libsgcoreU == String.fromCharCode(98,0)) {
          let unfillc = String.fromCharCode(99,97,118,115,100,115,112,95,56,95,53,51,0);
          let sentryy = String.fromCharCode(103,101,116,116,105,110,103,95,49,95,49,54,0);
          let release_u6a = String.fromCharCode(107,95,55,55,95,118,100,98,101,0);
          let reactnativeratings6 = 5.0;
          let bnewsshare3 = String.fromCharCode(120,95,49,56,95,97,100,97,112,116,105,118,101,0);
         libsgcoreU += `${release_u6a.length * parseInt(`${reactnativeratings6}`)}`;
         unfillc = "2";
         sentryy += `${2 * bnewsshare3.length}`;
         release_u6a = `${sentryy.length | unfillc.length}`;
         reactnativeratings6 -= parseFloat(`${3}`);
         bnewsshare3 += `${unfillc.length}`;
      }
      memberW -= macau2.length;
   for (let a = 0; a < 3; a++) {
      filledz |= sharemodalN.length;
   }
       let unimplementedviewL = String.fromCharCode(100,95,54,52,95,119,97,108,108,0);
      let unreadw = unimplementedviewL == String.fromCharCode(55,104,111,0);
      do {
          let gradlews = 2;
         unimplementedviewL += `${unimplementedviewL.length}`;
         gradlews <<= Math.min(Math.abs(gradlews % 1), 4);
         if (unreadw) {
            break;
         }
      } while (unreadw && (unimplementedviewL.length <= 1));
          let ksadU = String.fromCharCode(118,95,50,50,95,100,105,103,105,116,0);
         unimplementedviewL = `${unimplementedviewL.length}`;
         ksadU += `${(ksadU == String.fromCharCode(57,0) ? ksadU.length : ksadU.length)}`;
      if (unimplementedviewL.length == unimplementedviewL.length) {
         unimplementedviewL += "2";
      }
      sentryO = [sentryO.length];

    

   while (arrowrightu.endsWith(`${memberW}`)) {
      memberW += hoverK.length | 2;
      break;
   }
      sharemodalN += `${filledz - parseInt(`${annerg}`)}`;
   let appsh = 6854885 <= sentryO.length;
   do {
      sentryO.push(macau2.length + 2);
      if (appsh) {
         break;
      }
   } while ((sentryO.length == 2) && appsh);
      arrowrightu += `${overlayn.size}`;
   for (let j = 0; j < 1; j++) {
      arrowrightu += `${overlayn.size * sentryO.length}`;
   }
    if (onOpenAnimation) {

   while (macau2.length <= 1) {
      macau2 = `${macau2.length / 2}`;
      break;
   }
      macau2 = `${1 | sentryO.length}`;
   while (5 > (3 ^ hoverK.length) || 1 > (3 ^ hoverK.length)) {
      hoverK = `${overlayn.size}`;
      break;
   }
   while ((hoverK.length >> (Math.min(Math.abs(3), 2))) < 2 || (overlayn.size >> (Math.min(hoverK.length, 2))) < 3) {
      hoverK = "2";
      break;
   }
       let policy2 = 3;
         policy2 <<= Math.min(4, Math.abs(1));
          let agreement9 = 1;
         policy2 |= agreement9;
         policy2 += policy2;
      annerg += parseFloat(`${2}`);
      if (animationStream3D) {

   if (arrowrightu != String.fromCharCode(109,0) && hoverK.length <= 1) {
      hoverK = `${hoverK.length}`;
   }
      sharemodalN = `${filledz}`;
   for (let n = 0; n < 3; n++) {
      arrowrightu += `${hoverK.length ^ overlayn.size}`;
   }
   let inouttargetreds = sharemodalN.length >= 8200609;
   do {
      sharemodalN = `${hoverK.length}`;
      if (inouttargetreds) {
         break;
      }
   } while (inouttargetreds && (3.77 >= annerg));
   for (let w = 0; w < 3; w++) {
      memberW *= 3;
   }
        onOpenAnimation(animationStream3D);
      } else if (animationStream2D) {

   for (let f = 0; f < 3; f++) {
      sharemodalN += "2";
   }
       let activityN = String.fromCharCode(97,112,112,108,105,101,114,95,48,95,56,57,0);
       let libcxxcomponents3 = String.fromCharCode(121,95,50,95,109,97,105,110,110,101,116,0);
      for (let c = 0; c < 1; c++) {
          let proxyp = 3.0;
          let service7 = String.fromCharCode(97,95,52,95,100,101,99,101,108,101,114,97,116,105,110,103,0);
          let selectedY = String.fromCharCode(105,109,112,108,105,99,105,116,108,121,95,101,95,54,57,0);
         activityN = `${selectedY.length}`;
         proxyp -= parseInt(`${proxyp}`) << (Math.min(Math.abs(1), 4));
         service7 += `${service7.length}`;
         selectedY = `${(String.fromCharCode(48,0) == service7 ? parseInt(`${proxyp}`) : service7.length)}`;
      }
         libcxxcomponents3 = "2";
          let yingh = String.fromCharCode(118,95,51,56,95,116,114,97,110,115,108,97,116,111,110,0);
         libcxxcomponents3 += `${activityN.length}`;
         yingh += "1";
      while (libcxxcomponents3.length < 2) {
          let gesturesl = 5;
          let ranka: Array<any> = [String.fromCharCode(111,95,51,48,95,115,117,98,116,101,114,109,0), String.fromCharCode(97,95,54,52,95,116,111,116,97,108,115,0), String.fromCharCode(100,105,115,99,117,115,115,95,51,95,55,49,0)];
          let modeB: Map<any, any> = new Map([[String.fromCharCode(116,104,101,109,101,100,95,114,95,52,52,0),677], [String.fromCharCode(112,114,105,110,116,101,114,95,113,95,51,48,0),275], [String.fromCharCode(101,95,57,49,95,109,97,105,110,110,101,116,0),332]]);
         activityN += `${activityN.length}`;
         gesturesl &= 1 + gesturesl;
         ranka = [gesturesl + 2];
         modeB.set(`${gesturesl}`, 3);
         break;
      }
          let robotoK = false;
          let watchL = String.fromCharCode(112,101,110,99,105,108,95,48,95,55,48,0);
          let stationk: Array<any> = [String.fromCharCode(107,95,56,57,95,102,105,108,101,115,0), String.fromCharCode(98,112,115,95,48,95,53,49,0)];
         activityN += `${1 % (Math.max(1, libcxxcomponents3.length))}`;
         robotoK = stationk.includes(robotoK);
         watchL += `${1 ^ stationk.length}`;
         libcxxcomponents3 += `${activityN.length}`;
      arrowrightu = `${sentryO.length - 2}`;
      sentryO.push(parseInt(`${annerg}`));
      sentryO = [macau2.length << (Math.min(2, sharemodalN.length))];
       let questX = false;
       let icono = 4.0;
       let mbnativeadvancedZ = String.fromCharCode(120,95,53,57,95,100,98,112,97,103,101,0);
      for (let h = 0; h < 1; h++) {
          let whistleu = String.fromCharCode(105,110,116,101,114,99,101,112,116,111,114,95,52,95,52,55,0);
          let macau5: Array<any> = [39, 29];
          let executorh = String.fromCharCode(109,105,103,114,97,116,101,95,113,95,54,56,0);
          let executore = String.fromCharCode(99,97,115,116,115,95,55,95,53,56,0);
          let cleari = false;
         mbnativeadvancedZ += `${((questX ? 1 : 4) << (Math.min(executore.length, 3)))}`;
         whistleu = `${1 - macau5.length}`;
         macau5 = [((cleari ? 5 : 4))];
         executorh = `${executorh.length}`;
         executore = "3";
      }
      if (1 > mbnativeadvancedZ.length) {
         mbnativeadvancedZ += `${parseInt(`${icono}`) / 2}`;
      }
       let imagesF: Array<any> = [String.fromCharCode(112,117,115,104,95,120,95,49,48,48,0), String.fromCharCode(105,115,105,95,56,95,50,52,0)];
      while (!questX && 3 == (imagesF.length | 5)) {
         imagesF.push(3 - imagesF.length);
         break;
      }
      if ((imagesF.length << (Math.min(mbnativeadvancedZ.length, 2))) <= 5) {
          let private_9oO = false;
         imagesF.push(imagesF.length ^ 2);
         private_9oO = (private_9oO ? private_9oO : private_9oO);
      }
      macau2 = `${sentryO.length & 1}`;
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
