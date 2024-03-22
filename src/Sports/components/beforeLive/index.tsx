import React, { useEffect, useState } from 'react';
import { Text, View, Image, ImageBackground } from 'react-native';
import styles from './mayi_iconarrowrightwhite';
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
  
} from '../../utility/mayi_newinterstitial';
import { useNavigation } from '@react-navigation/native';
import { useCountdown } from '../../utility/mayi_news';
import { useDispatch, useSelector } from 'react-redux';
import { showToast } from '../../utility/mayi_manager_libflipper';
import {
  getMatchStatus,
  getMatchScore,
  calculateScore,
} from '../../utility/utils';
import { matchOnTime, matchRunningStatusBasketball } from '../../utility/mayi_newinterstitial';
import { mayi_Cast } from '../../types/mayi_search';
import { mayi_Default, mayi_IconsettingChat } from '../../types/mayi_homeinactive';
import { mayi_Humidity } from '../../types/mayi_predictionarrow_langkey';
import DefaultTeamIcon from '../mayi_const';

interface mayi_GoogleViews {
  listLiveDetails?: mayi_Cast,
  setVideoSource?: any,
  liveDataState?: mayi_Default,
  listLiveMatchDetailsUpdates?: mayi_Humidity
  dataLive?: mayi_IconsettingChat[],
  onOpenLive?: () => any
  onOpenAnimation?: any
}

const BeforeLive = ({ liveDataState, listLiveDetails, setVideoSource, listLiveMatchDetailsUpdates, dataLive, onOpenLive, onOpenAnimation }: mayi_GoogleViews) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const onHandleBack = () => {
       let soundF: Array<any> = [424, 496];
    let turnh = 0.0;
    let gifgoal4 = String.fromCharCode(114,101,112,108,105,101,114,115,95,113,95,53,52,0);
    let largem: Map<any, any> = new Map([[String.fromCharCode(115,95,55,53,95,108,97,117,110,99,104,105,110,103,0),String.fromCharCode(108,111,111,112,101,120,105,116,95,55,95,57,55,0)], [String.fromCharCode(114,97,105,115,101,95,53,95,55,55,0),String.fromCharCode(115,116,97,98,105,108,105,122,101,95,105,95,50,57,0)], [String.fromCharCode(98,117,115,121,95,107,95,50,54,0),String.fromCharCode(121,95,53,49,95,99,111,110,102,105,103,117,114,97,116,105,111,110,115,0)]]);
    let playlistH = 1.0;
    let robotoT = 2;
    let package_2y = 4.0;
    let scoreh = String.fromCharCode(120,95,52,95,100,117,109,112,105,110,103,0);
    let internetN = 2.0;
   while (3.75 < (3.25 / (Math.max(1, package_2y)))) {
      package_2y *= parseFloat(`${parseInt(`${playlistH}`)}`);
      break;
   }
      robotoT |= 3;
   if (3.21 >= (playlistH * 1.87)) {
      robotoT <<= Math.min(5, Math.abs(parseInt(`${turnh}`) * soundF.length));
   }
      playlistH /= Math.max(5, parseFloat(`${2}`));
       let progressY = String.fromCharCode(101,95,57,50,95,97,105,109,105,110,103,0);
       let textlayoutmanagerJ = false;
      for (let r = 0; r < 2; r++) {
         textlayoutmanagerJ = textlayoutmanagerJ || progressY.length >= 49;
      }
         textlayoutmanagerJ = ((progressY.length ^ (textlayoutmanagerJ ? progressY.length : 76)) <= 76);
      let nbatrophys = progressY.length <= 8248170;
      do {
         progressY = `${progressY.length % 1}`;
         if (nbatrophys) {
            break;
         }
      } while ((textlayoutmanagerJ) && nbatrophys);
         textlayoutmanagerJ = textlayoutmanagerJ || progressY.length >= 11;
          let libfileV = 3;
         progressY += "3";
         libfileV |= 3;
         textlayoutmanagerJ = ((progressY.length - (textlayoutmanagerJ ? 20 : progressY.length)) == 20);
      robotoT /= Math.max(progressY.length / 3, 4);
      gifgoal4 = `${parseInt(`${package_2y}`) ^ 3}`;
       let eabafadfadddbafeddddeeefeaafe: Array<any> = [591, 206, 929];
       let predictionbuttond = false;
      for (let b = 0; b < 2; b++) {
         predictionbuttond = eabafadfadddbafeddddeeefeaafe.length < 51;
      }
          let launchP = String.fromCharCode(121,95,56,50,95,112,97,99,107,97,103,101,115,0);
          let penalty5: Array<any> = [String.fromCharCode(106,95,49,95,105,110,116,114,111,100,117,99,116,105,111,110,0), String.fromCharCode(104,111,116,95,104,95,56,54,0), String.fromCharCode(98,95,49,51,95,99,97,99,104,101,115,105,122,101,0)];
          let bottomd = String.fromCharCode(102,105,110,105,115,104,101,100,95,105,95,56,49,0);
         predictionbuttond = !bottomd.includes(`${predictionbuttond}`);
         launchP = "1";
         penalty5.push(penalty5.length << (Math.min(Math.abs(2), 3)));
         bottomd += `${penalty5.length}`;
         eabafadfadddbafeddddeeefeaafe.push(3);
       let temperatureW = String.fromCharCode(121,114,121,105,95,121,95,53,57,0);
      while (temperatureW.includes(`${predictionbuttond}`)) {
         predictionbuttond = !temperatureW.startsWith(`${predictionbuttond}`);
         break;
      }
         predictionbuttond = !predictionbuttond || eabafadfadddbafeddddeeefeaafe.length < 32;
      soundF.push(parseInt(`${package_2y}`) % 1);
   while (3 <= (parseInt(`${package_2y}`) - robotoT) || 2.14 <= (package_2y - 5.12)) {
       let greyS = String.fromCharCode(110,114,101,102,95,118,95,50,52,0);
       let sans8 = 1.0;
      while (2 < (greyS.length * 2) && (sans8 * 2.16) < 2.64) {
         sans8 += parseFloat(`${3 | greyS.length}`);
         break;
      }
      while (5.61 == (sans8 + 5.56)) {
         sans8 /= Math.max(4, parseFloat(`${1 ^ parseInt(`${sans8}`)}`));
         break;
      }
       let topicT: Array<any> = [685, 509, 941];
      for (let i = 0; i < 3; i++) {
         sans8 *= parseFloat(`${parseInt(`${sans8}`) % (Math.max(2, 3))}`);
      }
         sans8 -= parseFloat(`${parseInt(`${sans8}`) << (Math.min(topicT.length, 4))}`);
         sans8 -= parseFloat(`${greyS.length}`);
      package_2y /= Math.max(5, parseFloat(`${1 + greyS.length}`));
      break;
   }
   let vietnamC = playlistH <= 9106872.0;
   do {
      playlistH -= parseFloat(`${2}`);
      if (vietnamC) {
         break;
      }
   } while ((5.18 <= (playlistH / 1.47) || (scoreh.length / 1) <= 2) && vietnamC);
      playlistH += parseFloat(`${parseInt(`${package_2y}`) << (Math.min(2, Math.abs(2)))}`);
   while (3 < (gifgoal4.length % (Math.max(2, largem.size))) && 4 < (gifgoal4.length % 3)) {
       let codegenV: Array<any> = [863, 956, 79];
       let gift_ = String.fromCharCode(99,111,110,110,95,110,95,50,52,0);
      while (2 == (codegenV.length + gift_.length)) {
          let libreactperfloggerjniu = 2.0;
          let disconnectedk: Map<any, any> = new Map([[String.fromCharCode(106,95,56,56,95,105,103,110,101,116,116,101,0),756], [String.fromCharCode(118,95,54,48,95,115,101,110,100,105,110,103,0),349]]);
         codegenV = [gift_.length << (Math.min(Math.abs(2), 5))];
         libreactperfloggerjniu /= Math.max(5, parseFloat(`${disconnectedk.size - 3}`));
         disconnectedk.set(`${libreactperfloggerjniu}`, disconnectedk.size + 3);
         break;
      }
         codegenV = [gift_.length << (Math.min(Math.abs(1), 5))];
      for (let f = 0; f < 3; f++) {
         gift_ += `${gift_.length | codegenV.length}`;
      }
      let mappingY = gift_ == String.fromCharCode(122,103,109,112,106,53,0);
      do {
         gift_ += `${gift_.length}`;
         if (mappingY) {
            break;
         }
      } while (mappingY && (5 >= (codegenV.length % 1) && (gift_.length % (Math.max(9, codegenV.length))) >= 1));
      if (4 > codegenV.length) {
          let shirt6 = false;
          let verticali = 4.0;
          let libreanimatedV = 3.0;
          let plus9 = 4;
          let matchdetailbgo = String.fromCharCode(105,110,116,101,114,97,99,116,105,118,101,108,121,95,98,95,54,51,0);
         gift_ = `${((shirt6 ? 2 : 5) / 2)}`;
         shirt6 = 24 < matchdetailbgo.length;
         verticali += plus9;
         libreanimatedV += 2 + parseInt(`${verticali}`);
         plus9 ^= parseInt(`${verticali}`) + 3;
         matchdetailbgo += `${parseInt(`${libreanimatedV}`) << (Math.min(1, Math.abs(plus9)))}`;
      }
         codegenV = [codegenV.length / (Math.max(gift_.length, 1))];
      gifgoal4 = `${parseInt(`${package_2y}`)}`;
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
       let floater9: Array<any> = [String.fromCharCode(97,95,52,55,95,98,114,101,97,100,99,114,117,109,98,115,0), String.fromCharCode(107,95,51,95,108,111,115,101,0)];
    let libswresampleN: Array<any> = [281, 701, 829];
    let footballfiledlayouty: Array<any> = [String.fromCharCode(119,95,54,56,95,111,112,97,113,117,101,0), String.fromCharCode(118,95,54,50,95,99,97,114,114,121,111,117,116,0)];
    let langkeyV: Map<any, any> = new Map([[String.fromCharCode(104,95,54,55,95,106,112,101,103,108,105,98,0),String.fromCharCode(109,111,100,101,99,111,115,116,115,95,114,95,55,52,0)], [String.fromCharCode(116,95,50,52,95,102,105,110,103,101,114,0),String.fromCharCode(116,97,114,103,97,95,118,95,55,51,0)], [String.fromCharCode(98,95,52,49,95,111,117,116,112,117,116,115,0),String.fromCharCode(103,95,56,95,98,121,116,101,115,116,114,105,110,103,0)]]);
    let modityO: Map<any, any> = new Map([[String.fromCharCode(107,95,50,54,95,109,109,99,111,115,0),736], [String.fromCharCode(101,95,56,50,95,100,97,116,101,115,0),916]]);
    let videocommonr = String.fromCharCode(107,95,55,53,95,108,111,99,107,105,110,103,0);
    let libavformats = 1.0;
    let routerP = String.fromCharCode(97,99,116,105,118,97,116,101,95,57,95,56,57,0);
    let libfolly7 = String.fromCharCode(119,114,105,116,101,116,114,117,110,99,95,120,95,52,52,0);
    let libruntimeexecutor8 = String.fromCharCode(115,112,108,105,116,116,101,114,95,104,95,53,57,0);
    let filedX: Array<any> = [752, 228, 814];
    let resultq = 1.0;
    let overE = false;
      modityO.set(`${resultq}`, 1 - modityO.size);
   if (floater9.length == parseInt(`${libavformats}`)) {
       let sharedf = 3.0;
         sharedf *= parseInt(`${sharedf}`);
          let windt = 3.0;
          let middlewareg = String.fromCharCode(99,95,53,55,95,112,104,97,115,101,115,0);
         sharedf *= parseInt(`${sharedf}`) % 1;
         windt -= (parseFloat(`${String.fromCharCode(88,0) == middlewareg ? parseInt(`${windt}`) : middlewareg.length}`));
         sharedf *= parseInt(`${sharedf}`) ^ 1;
      floater9 = [parseInt(`${libavformats}`) ^ parseInt(`${sharedf}`)];
   }

    switch (getMatchStatusData) {
      case '比赛开始':
        setCountDownTime(false);

       let buttonI = String.fromCharCode(120,95,49,57,95,106,111,98,0);
       let renewO = 5.0;
       let forwardZ = String.fromCharCode(98,108,117,114,114,101,100,95,118,95,55,51,0);
      let albumA = 6821580.0 <= renewO;
      do {
          let downloadingJ = 2.0;
          let telegramk = String.fromCharCode(113,95,54,51,95,101,109,111,114,121,0);
         renewO /= Math.max(parseFloat(`${1 & forwardZ.length}`), 1);
         downloadingJ -= parseFloat(`${telegramk.length}`);
         telegramk = `${parseInt(`${downloadingJ}`) >> (Math.min(Math.abs(3), 1))}`;
         if (albumA) {
            break;
         }
      } while (((forwardZ.length * 3) > 4 && (forwardZ.length << (Math.min(Math.abs(3), 4))) > 3) && albumA);
      let friendsn = 8759408.0 <= renewO;
      do {
         renewO += parseFloat(`${parseInt(`${renewO}`) ^ 2}`);
         if (friendsn) {
            break;
         }
      } while ((!forwardZ.includes(`${renewO}`)) && friendsn);
      while (5.58 < (renewO + parseFloat(`${buttonI.length}`)) && 5.58 < (renewO + parseFloat(`${buttonI.length}`))) {
         buttonI = `${buttonI.length}`;
         break;
      }
         forwardZ = "1";
       let iconrightorangej = 5.0;
         forwardZ = `${buttonI.length / (Math.max(6, parseInt(`${renewO}`)))}`;
      let countryM = forwardZ == String.fromCharCode(56,122,113,112,0);
      do {
         forwardZ = `${(forwardZ == String.fromCharCode(52,0) ? forwardZ.length : parseInt(`${renewO}`))}`;
         if (countryM) {
            break;
         }
      } while ((2 < (3 * forwardZ.length) || 4 < (3 & forwardZ.length)) && countryM);
       let gradleO = String.fromCharCode(114,101,112,101,97,116,101,114,95,108,95,49,48,0);
      if ((5 & gradleO.length) < 3 && (gradleO.length * 5) < 1) {
         gradleO = `${parseInt(`${iconrightorangej}`) % 1}`;
      }
      floater9 = [2 + routerP.length];
       let iconclosey: Map<any, any> = new Map([[String.fromCharCode(107,95,55,57,95,115,116,114,110,99,97,115,101,99,109,112,0),975], [String.fromCharCode(112,101,114,109,117,116,97,116,105,111,110,115,95,121,95,57,53,0),558]]);
       let iconsettingB = 1.0;
      while ((5.64 - iconsettingB) <= 5.48 || 5.38 <= (iconsettingB - 5.64)) {
          let sheeto: Map<any, any> = new Map([[String.fromCharCode(115,116,105,99,107,101,114,95,106,95,51,49,0),388], [String.fromCharCode(112,95,50,52,0),458]]);
          let iconnotificationnewL = String.fromCharCode(105,110,100,105,99,97,116,105,111,110,95,115,95,57,0);
          let codeb = 4;
          let orangeA = String.fromCharCode(97,95,55,95,99,97,118,108,99,0);
          let related3 = String.fromCharCode(99,111,110,118,101,114,116,111,114,95,100,95,52,48,0);
         iconsettingB *= (String.fromCharCode(114,0) == orangeA ? orangeA.length : codeb);
         sheeto.set(iconnotificationnewL, 2);
         iconnotificationnewL = `${iconnotificationnewL.length >> (Math.min(Math.abs(2), 3))}`;
         codeb >>= Math.min(3, Math.abs(sheeto.size * related3.length));
         related3 = `${related3.length}`;
         break;
      }
          let basketballiconu = String.fromCharCode(104,95,57,50,95,97,117,116,111,115,99,114,111,108,108,105,110,103,0);
         iconclosey.set(basketballiconu, 3 + iconclosey.size);
          let binddatasF = String.fromCharCode(112,95,56,49,0);
         iconsettingB += 2;
         binddatasF += `${binddatasF.length}`;
         iconsettingB -= parseInt(`${iconsettingB}`) / 2;
      while (1 < (parseInt(`${iconsettingB}`) + iconclosey.size) && 5.15 < (2.63 + iconsettingB)) {
         iconsettingB /= Math.max(1 | iconclosey.size, 5);
         break;
      }
          let mbjscommonQ: Map<any, any> = new Map([[String.fromCharCode(100,105,115,112,108,97,121,95,49,95,50,51,0),889], [String.fromCharCode(102,95,51,50,95,111,99,116,101,116,0),791], [String.fromCharCode(122,95,55,51,95,97,115,102,114,116,112,0),635]]);
          let iconqqs = 4.0;
          let imagenomoredatai = 3.0;
         iconclosey.set(`${iconsettingB}`, parseInt(`${iconsettingB}`) >> (Math.min(Math.abs(iconclosey.size), 5)));
         mbjscommonQ = new Map([[`${mbjscommonQ.size}`, mbjscommonQ.size]]);
         iconqqs *= 3;
         imagenomoredatai *= parseFloat(`${parseInt(`${imagenomoredatai}`) >> (Math.min(1, Math.abs(2)))}`);
      routerP = `${floater9.length}`;
        setMiddleMatchBeforeStart(false);

      routerP += `${filedX.length}`;
   let refreshborderlessx = modityO.size >= 9609083;
   do {
      modityO.set(`${videocommonr}`, videocommonr.length);
      if (refreshborderlessx) {
         break;
      }
   } while ((5 > (modityO.size << (Math.min(Math.abs(2), 5))) && 1 > (modityO.size << (Math.min(Math.abs(2), 2)))) && refreshborderlessx);
        setMiddleMatchStarted(true);

      filedX = [(String.fromCharCode(83,0) == videocommonr ? videocommonr.length : modityO.size)];
   for (let e = 0; e < 1; e++) {
       let smallbrightnessS = 5.0;
       let nativer: Map<any, any> = new Map([[String.fromCharCode(115,95,51,48,95,100,105,115,109,105,115,115,101,100,0),969], [String.fromCharCode(116,95,49,56,95,99,117,114,114,0),576], [String.fromCharCode(115,121,110,99,104,114,111,110,105,115,101,100,95,109,95,49,49,0),551]]);
       let libjsijniprofilerM = String.fromCharCode(110,95,55,53,95,114,101,112,117,98,108,105,115,104,0);
       let shielddone7 = String.fromCharCode(110,111,110,98,108,111,99,107,105,110,103,95,98,95,51,56,0);
      let bgvipsportE = libjsijniprofilerM == String.fromCharCode(98,120,52,117,115,0);
      do {
         libjsijniprofilerM = "2";
         if (bgvipsportE) {
            break;
         }
      } while ((2 < (libjsijniprofilerM.length << (Math.min(Math.abs(2), 2)))) && bgvipsportE);
      while (libjsijniprofilerM.includes(`${shielddone7.length}`)) {
         libjsijniprofilerM = `${(libjsijniprofilerM == String.fromCharCode(71,0) ? nativer.size : libjsijniprofilerM.length)}`;
         break;
      }
         nativer.set(shielddone7, shielddone7.length / 1);
         smallbrightnessS += nativer.size;
      for (let r = 0; r < 1; r++) {
          let bangf = 0.0;
          let actions2 = 0;
          let episodes3 = 0;
          let matchA = String.fromCharCode(115,112,105,110,95,120,95,56,51,0);
          let modityOX = 0.0;
         libjsijniprofilerM = "1";
         bangf += parseFloat(`${parseInt(`${modityOX}`) & 2}`);
         actions2 >>= Math.min(Math.abs(episodes3 / 3), 1);
         episodes3 *= 2;
         matchA = `${matchA.length}`;
         modityOX *= 3;
      }
       let imagenomoredatan = false;
       let favoriteU = false;
          let live_ = String.fromCharCode(116,101,109,112,111,114,97,108,95,117,95,55,48,0);
         smallbrightnessS *= 3;
         live_ = `${live_.length & 3}`;
       let tempnodataP = false;
       let const_c3 = false;
         nativer = new Map([[`${imagenomoredatan}`, ((imagenomoredatan ? 5 : 4) ^ parseInt(`${smallbrightnessS}`))]]);
      for (let n = 0; n < 1; n++) {
         shielddone7 = `${parseInt(`${smallbrightnessS}`) * nativer.size}`;
      }
          let models1: Array<any> = [String.fromCharCode(99,97,115,104,116,97,103,95,108,95,49,50,0), String.fromCharCode(119,114,111,110,103,95,99,95,54,50,0)];
          let relatedv = 4.0;
         tempnodataP = !const_c3 || relatedv == 38.51;
         models1 = [3];
         relatedv /= Math.max(2, 1);
      let disconnectedy = libjsijniprofilerM == String.fromCharCode(121,108,49,54,118,115,111,0);
      do {
         libjsijniprofilerM = "3";
         if (disconnectedy) {
            break;
         }
      } while ((!imagenomoredatan) && disconnectedy);
      libruntimeexecutor8 += `${libruntimeexecutor8.length}`;
   }
        setDefaultStatus(false);

   let minib = 8332342 >= routerP.length;
   do {
      routerP += `${parseInt(`${resultq}`)}`;
      if (minib) {
         break;
      }
   } while (minib && (4 >= footballfiledlayouty.length));
   let feedbacku = modityO.size <= 6332543;
   do {
      modityO = new Map([[`${langkeyV.size}`, modityO.size]]);
      if (feedbacku) {
         break;
      }
   } while (feedbacku && (langkeyV.size <= 3));
        if (matchState === 7) {

       let corea = 2.0;
         corea *= parseFloat(`${parseInt(`${corea}`) * parseInt(`${corea}`)}`);
       let audience_ = 3;
       let transferV = 4;
      let assistW = corea >= 8605755.0;
      do {
          let predictionactiveZ = String.fromCharCode(113,95,48,95,114,97,115,116,101,114,105,122,101,115,0);
          let anytimeD = String.fromCharCode(104,105,103,104,119,97,116,101,114,95,107,95,54,50,0);
         corea *= parseFloat(`${audience_ - transferV}`);
         predictionactiveZ = "3";
         anytimeD += `${predictionactiveZ.length * 1}`;
         if (assistW) {
            break;
         }
      } while (assistW && (4 <= transferV));
      langkeyV = new Map([[`${footballfiledlayouty.length}`, footballfiledlayouty.length % (Math.max(1, videocommonr.length))]]);
      floater9.push(libswresampleN.length << (Math.min(4, floater9.length)));
          setCountDownTime(false);

      libruntimeexecutor8 = `${libfolly7.length & footballfiledlayouty.length}`;
       let frame_yp0: Array<any> = [607, 355, 202];
          let corek = 3;
          let thailandc: Map<any, any> = new Map([[String.fromCharCode(105,97,100,115,116,95,107,95,54,53,0),String.fromCharCode(110,95,55,55,95,111,117,116,103,111,105,110,103,0)], [String.fromCharCode(112,99,109,98,95,99,95,52,56,0),String.fromCharCode(97,117,120,95,99,95,57,0)]]);
         frame_yp0.push(1 * frame_yp0.length);
         corek |= thailandc.size;
         thailandc.set(`${corek}`, corek);
      if ((frame_yp0.length << (Math.min(Math.abs(5), 1))) == 1 && 5 == (frame_yp0.length << (Math.min(Math.abs(5), 4)))) {
         frame_yp0.push(frame_yp0.length);
      }
          let actionss: Array<any> = [685, 610, 205];
         frame_yp0.push(frame_yp0.length / (Math.max(10, actionss.length)));
      videocommonr += `${libruntimeexecutor8.length % (Math.max(1, 1))}`;
          setMiddleMatchBeforeStart(false);

      resultq /= Math.max(langkeyV.size % (Math.max(modityO.size, 2)), 4);
      libavformats /= Math.max(parseFloat(`${1 + footballfiledlayouty.length}`), 5);
          setMiddleMatchStarted(true);

      videocommonr = `${videocommonr.length + libfolly7.length}`;
      libruntimeexecutor8 = `${libfolly7.length}`;
          setPanaltyMatchStarted(true);
        }
        break;
      case '已结束':
        setCountDownTime(false);

      libswresampleN.push(3 >> (Math.min(1, libfolly7.length)));
      langkeyV.set(`${overE}`, ((overE ? 4 : 3) / (Math.max(6, langkeyV.size))));
        setMiddleMatchBeforeStart(false);

      videocommonr = `${1 >> (Math.min(Math.abs(parseInt(`${resultq}`)), 5))}`;
   while (libfolly7.includes(`${libruntimeexecutor8.length}`)) {
       let emptyG: Array<any> = [424, 631, 473];
       let privatechatbg8 = 1.0;
       let libmapbufferjniR = String.fromCharCode(115,95,51,53,95,116,104,101,105,114,0);
       let friendsL: Map<any, any> = new Map([[String.fromCharCode(104,95,57,49,95,105,110,118,105,116,101,100,0),397], [String.fromCharCode(112,95,57,54,95,114,101,99,117,114,115,105,111,110,0),398], [String.fromCharCode(99,95,53,52,95,110,118,100,101,99,0),811]]);
       let math4 = 5;
      let backwardx = friendsL.size >= 8640015;
      do {
         friendsL.set(`${emptyG.length}`, friendsL.size << (Math.min(Math.abs(1), 4)));
         if (backwardx) {
            break;
         }
      } while ((2 == (3 << (Math.min(4, Math.abs(math4)))) && 3 == (math4 << (Math.min(Math.abs(friendsL.size), 4)))) && backwardx);
      for (let l = 0; l < 1; l++) {
         emptyG = [3 + emptyG.length];
      }
      for (let q = 0; q < 2; q++) {
          let commonK: Array<any> = [513, 738, 753];
          let sellc = String.fromCharCode(97,95,56,53,95,112,114,101,118,105,101,119,112,112,0);
          let minid = 0;
          let phonek = String.fromCharCode(105,95,57,51,95,105,110,118,101,114,118,97,108,0);
         emptyG.push(commonK.length);
         commonK.push(1 - minid);
         sellc += `${phonek.length << (Math.min(3, Math.abs(minid)))}`;
         phonek += `${sellc.length}`;
      }
      while (1 > (libmapbufferjniR.length % 3) && (libmapbufferjniR.length % 3) > 3) {
         libmapbufferjniR = "2";
         break;
      }
         emptyG = [(libmapbufferjniR == String.fromCharCode(75,0) ? libmapbufferjniR.length : friendsL.size)];
      if (4 < math4) {
          let combined5 = String.fromCharCode(111,95,53,54,95,114,101,116,97,105,110,0);
          let group9: Array<any> = [714, 515];
          let sellmathbackgroundw = String.fromCharCode(101,118,97,108,95,56,95,51,51,0);
          let launchery: Map<any, any> = new Map([[String.fromCharCode(111,95,50,56,95,109,97,110,105,112,117,108,97,116,101,0),734], [String.fromCharCode(99,108,111,115,101,95,50,95,56,48,0),463], [String.fromCharCode(100,112,116,114,115,95,57,95,52,50,0),289]]);
          let znewarchdefaultsl = String.fromCharCode(109,117,108,116,105,101,110,100,95,49,95,57,51,0);
         libmapbufferjniR = `${friendsL.size}`;
         combined5 = `${launchery.size ^ group9.length}`;
         group9 = [group9.length >> (Math.min(Math.abs(3), 1))];
         sellmathbackgroundw = "1";
         launchery.set(`${combined5}`, combined5.length / 3);
         znewarchdefaultsl = `${1 << (Math.min(5, Math.abs(launchery.size)))}`;
      }
      for (let u = 0; u < 3; u++) {
         emptyG.push(parseInt(`${privatechatbg8}`));
      }
       let dplusj = String.fromCharCode(107,97,105,115,101,114,95,51,95,51,57,0);
         friendsL = new Map([[`${math4}`, math4 - 2]]);
         friendsL = new Map([[`${friendsL.size}`, friendsL.size % 2]]);
      while (!dplusj.startsWith(`${emptyG.length}`)) {
          let iconsharefriendsR = 1.0;
          let appleF = 0.0;
          let model2 = String.fromCharCode(115,95,49,95,120,102,101,114,0);
         emptyG = [dplusj.length | libmapbufferjniR.length];
         iconsharefriendsR += parseFloat(`${parseInt(`${iconsharefriendsR}`)}`);
         appleF /= Math.max(parseFloat(`${2}`), 5);
         model2 += `${parseInt(`${appleF}`) | parseInt(`${iconsharefriendsR}`)}`;
         break;
      }
         math4 /= Math.max(parseInt(`${privatechatbg8}`), 3);
      if (dplusj.length > 5) {
          let indicatorB = 5.0;
          let crossj = String.fromCharCode(116,114,117,110,99,97,116,105,111,110,95,120,95,49,51,0);
          let editT = 3.0;
         friendsL = new Map([[dplusj, math4 & 2]]);
         indicatorB *= parseInt(`${editT}`) * crossj.length;
         crossj = `${crossj.length}`;
         editT -= (parseFloat(`${String.fromCharCode(69,0) == crossj ? parseInt(`${editT}`) : crossj.length}`));
      }
      if ((friendsL.size / 5) < 3 && (friendsL.size * privatechatbg8) < 3.39) {
         friendsL.set(`${privatechatbg8}`, 1);
      }
      for (let w = 0; w < 1; w++) {
         privatechatbg8 -= dplusj.length >> (Math.min(Math.abs(2), 2));
      }
      libfolly7 += `${emptyG.length | 2}`;
      break;
   }
        setMiddleMatchStarted(true);

       let iconstarY = 5;
       let checkboxM = 1.0;
       let reddownarrowB: Array<any> = [416, 749];
         checkboxM /= Math.max(1, parseFloat(`${iconstarY * 1}`));
          let graphicsU = String.fromCharCode(102,114,101,111,112,101,110,95,106,95,54,51,0);
          let f_unlockl = 3.0;
         reddownarrowB = [3];
         graphicsU = `${graphicsU.length >> (Math.min(5, Math.abs(parseInt(`${f_unlockl}`))))}`;
         f_unlockl *= parseFloat(`${3}`);
          let langkeyQ = true;
          let defaultlogof: Map<any, any> = new Map([[String.fromCharCode(114,101,97,116,116,97,99,104,95,103,95,50,49,0),866], [String.fromCharCode(112,111,115,115,105,98,108,101,95,120,95,54,0),620], [String.fromCharCode(100,105,97,103,110,111,115,116,105,99,115,95,52,95,55,56,0),131]]);
          let regeng9 = String.fromCharCode(118,95,51,50,95,112,114,111,99,101,115,115,101,100,0);
         iconstarY -= 1 * regeng9.length;
         langkeyQ = !langkeyQ;
         defaultlogof.set(`${langkeyQ}`, 2);
         regeng9 = `${(1 + (langkeyQ ? 3 : 3))}`;
      let wind7 = iconstarY >= 9759365;
      do {
         iconstarY += reddownarrowB.length & iconstarY;
         if (wind7) {
            break;
         }
      } while (wind7 && (iconstarY <= 5));
         iconstarY += iconstarY ^ 1;
      while ((iconstarY % 4) >= 2 || (4 % (Math.max(1, reddownarrowB.length))) >= 3) {
         reddownarrowB.push(3);
         break;
      }
      let darkC = checkboxM >= 9823919.0;
      do {
          let fullT = 3.0;
          let executor4 = String.fromCharCode(115,95,53,52,95,101,114,97,115,105,110,103,0);
          let teamQ: Array<any> = [895, 758];
          let rooml = 2;
          let theme2 = String.fromCharCode(116,101,109,112,95,57,95,56,53,0);
         checkboxM += parseFloat(`${3}`);
         fullT /= Math.max(rooml, 1);
         executor4 = "3";
         teamQ = [teamQ.length / (Math.max(executor4.length, 10))];
         rooml <<= Math.min(Math.abs((theme2 == String.fromCharCode(103,0) ? teamQ.length : theme2.length)), 1);
         if (darkC) {
            break;
         }
      } while ((1.74 > checkboxM) && darkC);
         checkboxM -= parseFloat(`${1 | reddownarrowB.length}`);
      while (3.92 < (2.17 - checkboxM) && (2 + iconstarY) < 1) {
         checkboxM /= Math.max(parseFloat(`${2}`), 2);
         break;
      }
      libruntimeexecutor8 += `${(String.fromCharCode(54,0) == libruntimeexecutor8 ? libruntimeexecutor8.length : libfolly7.length)}`;
      libswresampleN.push((String.fromCharCode(65,0) == libruntimeexecutor8 ? modityO.size : libruntimeexecutor8.length));
        setDefaultStatus(false);

   let pressureq = 9191858 <= langkeyV.size;
   do {
       let embed5 = String.fromCharCode(118,101,114,105,102,105,101,114,95,110,95,53,51,0);
         embed5 += `${embed5.length}`;
         embed5 = `${1 + embed5.length}`;
       let send7 = 2.0;
      langkeyV = new Map([[`${langkeyV.size}`, 1 * langkeyV.size]]);
      if (pressureq) {
         break;
      }
   } while (pressureq && ((libswresampleN.length ^ 4) == 3));
       let rewardvideo2 = false;
       let materialu = String.fromCharCode(115,109,111,111,116,104,110,101,115,115,95,102,95,51,53,0);
          let codeJ = String.fromCharCode(100,101,115,99,101,110,116,95,98,95,53,57,0);
         rewardvideo2 = codeJ.length < 31;
      if (4 <= materialu.length) {
         rewardvideo2 = !rewardvideo2;
      }
          let codegenr: Array<any> = [606, 813];
         materialu += `${((rewardvideo2 ? 3 : 1))}`;
         codegenr.push(3);
          let private_yK = String.fromCharCode(102,116,101,108,108,95,122,95,57,57,0);
          let ball2 = String.fromCharCode(101,115,115,101,110,99,101,95,121,95,54,52,0);
          let iconrightorangei = String.fromCharCode(121,95,54,95,108,111,119,114,101,115,0);
         materialu = `${1 - ball2.length}`;
         private_yK = `${private_yK.length}`;
         ball2 = `${private_yK.length}`;
         iconrightorangei += `${iconrightorangei.length}`;
      for (let h = 0; h < 1; h++) {
          let emojihearty = String.fromCharCode(113,95,51,53,95,112,105,110,110,105,110,103,0);
          let iconlogoutk: Array<any> = [749, 257, 971];
          let confirmationR: Map<any, any> = new Map([[String.fromCharCode(118,105,100,115,116,97,98,117,116,105,108,115,95,98,95,51,57,0),String.fromCharCode(115,117,109,120,95,118,95,53,48,0)], [String.fromCharCode(112,102,102,102,116,95,103,95,52,50,0),String.fromCharCode(114,101,102,101,114,101,110,99,101,95,53,95,55,50,0)]]);
         rewardvideo2 = String.fromCharCode(107,0) == emojihearty;
         emojihearty = "2";
         iconlogoutk = [iconlogoutk.length | 3];
         confirmationR = new Map([[`${confirmationR.size}`, confirmationR.size / (Math.max(3, iconlogoutk.length))]]);
      }
         materialu += `${(2 - (rewardvideo2 ? 1 : 3))}`;
      libavformats *= parseFloat(`${2 - libfolly7.length}`);
        if ((homePenaltyScore && awayPenaltyScore) && (homePenaltyScore > 0 || awayPenaltyScore > 0)) {

      overE = 49.93 > resultq;
      langkeyV.set(`${overE}`, (1 >> (Math.min(5, Math.abs((overE ? 4 : 5))))));
          setPanaltyMatchStarted(true);
        }
        break;
      case '未开始':
        if (countDownStatus) {

      libruntimeexecutor8 += `${(libruntimeexecutor8 == String.fromCharCode(118,0) ? footballfiledlayouty.length : libruntimeexecutor8.length)}`;
   if (!Array.from(langkeyV.values()).includes(floater9.length)) {
      floater9 = [footballfiledlayouty.length | 1];
   }
          setCountDownTime(true);

   while (4 >= (3 / (Math.max(4, floater9.length))) || (floater9.length * parseInt(`${resultq}`)) >= 3) {
      resultq -= parseInt(`${resultq}`) % 1;
      break;
   }
   while (5 <= (routerP.length / (Math.max(4, 4))) || 4 <= (4 >> (Math.min(4, routerP.length)))) {
      routerP += `${2 & langkeyV.size}`;
      break;
   }
          setMiddleMatchBeforeStart(false);

   if ((1 >> (Math.min(5, filedX.length))) >= 4) {
      overE = parseInt(`${resultq}`) >= libswresampleN.length;
   }
   while ((resultq / 4.60) < 5.22) {
      footballfiledlayouty.push(1);
      break;
   }
          setMiddleMatchStarted(false);

       let greyarrowupY = true;
       let thumbnailN = String.fromCharCode(114,95,53,53,95,100,117,109,112,105,110,102,111,0);
       let halffieldimageH = 5.0;
      for (let l = 0; l < 2; l++) {
         greyarrowupY = !greyarrowupY;
      }
      for (let t = 0; t < 1; t++) {
          let membershiph = false;
          let ninit_3c = 2;
          let zhubo0 = String.fromCharCode(100,105,115,97,98,108,101,100,95,111,95,50,56,0);
         thumbnailN += `${thumbnailN.length}`;
         membershiph = ninit_3c < 75;
         ninit_3c ^= 3 + ninit_3c;
         zhubo0 = `${zhubo0.length % (Math.max(1, 3))}`;
      }
      if (thumbnailN.includes(`${greyarrowupY}`)) {
         greyarrowupY = 50.78 <= halffieldimageH && 87 <= thumbnailN.length;
      }
          let eventQ = String.fromCharCode(108,115,112,112,111,108,121,95,100,95,52,52,0);
          let sheet8 = String.fromCharCode(98,111,111,115,116,101,100,95,117,95,50,52,0);
          let halffieldimageR = String.fromCharCode(108,95,56,95,108,111,103,115,97,109,112,108,101,0);
         thumbnailN = `${eventQ.length}`;
         eventQ = `${sheet8.length}`;
         sheet8 += "3";
         halffieldimageR += `${(String.fromCharCode(119,0) == sheet8 ? halffieldimageR.length : sheet8.length)}`;
      for (let n = 0; n < 3; n++) {
         halffieldimageH -= (String.fromCharCode(74,0) == thumbnailN ? parseInt(`${halffieldimageH}`) : thumbnailN.length);
      }
      if (halffieldimageH < 4.14) {
          let rules3 = true;
          let watchv = String.fromCharCode(113,95,55,51,95,115,121,110,99,104,114,111,110,105,122,101,114,0);
          let vignetteG: Array<any> = [17, 318];
          let downarrow9 = 5.0;
          let actionsE = String.fromCharCode(99,97,108,108,111,117,116,95,52,95,55,54,0);
         halffieldimageH -= 2 - thumbnailN.length;
         rules3 = 53 > actionsE.length;
         watchv += `${parseInt(`${downarrow9}`)}`;
         vignetteG = [vignetteG.length];
         downarrow9 /= Math.max(parseFloat(`${1 % (Math.max(4, watchv.length))}`), 5);
         actionsE = "2";
      }
         halffieldimageH *= 3 ^ parseInt(`${halffieldimageH}`);
      if (halffieldimageH < 1.85) {
          let dycreatorT = 5.0;
         halffieldimageH += ((greyarrowupY ? 5 : 1) / (Math.max(thumbnailN.length, 8)));
         dycreatorT += 3 - parseInt(`${dycreatorT}`);
      }
         thumbnailN = `${thumbnailN.length}`;
      routerP += `${videocommonr.length}`;
   while (3 < (3 * langkeyV.size)) {
      langkeyV.set(libruntimeexecutor8, (String.fromCharCode(101,0) == libruntimeexecutor8 ? libruntimeexecutor8.length : videocommonr.length));
      break;
   }
          setDefaultStatus(false);
        } else {

   for (let k = 0; k < 3; k++) {
       let libreactnativejni6 = String.fromCharCode(105,95,53,50,95,99,114,101,97,116,105,111,110,0);
          let flipperX = String.fromCharCode(100,97,109,112,95,108,95,55,53,0);
          let livesharei = true;
          let mathz: Map<any, any> = new Map([[String.fromCharCode(103,95,57,95,105,112,104,111,110,101,0),String.fromCharCode(114,101,99,101,110,116,108,121,95,48,95,57,48,0)], [String.fromCharCode(97,99,99,101,115,115,111,114,121,95,98,95,53,48,0),String.fromCharCode(104,95,54,48,95,115,117,98,116,105,116,108,101,115,0)], [String.fromCharCode(100,105,115,109,105,115,115,101,115,95,118,95,55,57,0),String.fromCharCode(107,95,56,51,95,119,97,116,99,104,105,110,103,0)]]);
         libreactnativejni6 = "2";
         flipperX = `${flipperX.length | 2}`;
         livesharei = 47 < flipperX.length;
         mathz.set(flipperX, flipperX.length ^ mathz.size);
      while (libreactnativejni6 != libreactnativejni6) {
         libreactnativejni6 = `${libreactnativejni6.length | 3}`;
         break;
      }
      for (let q = 0; q < 2; q++) {
         libreactnativejni6 = `${libreactnativejni6.length | 1}`;
      }
      footballfiledlayouty = [filedX.length % 2];
   }
   while (1.87 >= (resultq - libruntimeexecutor8.length)) {
      resultq /= Math.max(parseInt(`${resultq}`) - 1, 2);
      break;
   }
          setCountDownTime(false);

       let selectq = 4.0;
       let mbnativeadvancedp = String.fromCharCode(111,95,49,55,95,116,101,120,116,117,114,101,100,115,112,101,110,99,0);
          let albumZ = String.fromCharCode(110,97,118,105,103,97,116,105,110,103,95,108,95,55,53,0);
         mbnativeadvancedp += `${albumZ.length}`;
      while (!mbnativeadvancedp.endsWith(`${selectq}`)) {
         selectq += (String.fromCharCode(101,0) == mbnativeadvancedp ? mbnativeadvancedp.length : parseInt(`${selectq}`));
         break;
      }
          let manifestF = String.fromCharCode(100,101,99,108,97,114,101,95,51,95,51,55,0);
          let defaultfootballbgr = 4;
         mbnativeadvancedp = `${3 & mbnativeadvancedp.length}`;
         manifestF += `${manifestF.length}`;
         defaultfootballbgr <<= Math.min(manifestF.length, 1);
      let control4 = mbnativeadvancedp.length <= 5359701;
      do {
          let appsB = String.fromCharCode(122,95,50,53,95,115,117,98,115,116,114,0);
          let predictionwino = 0.0;
         mbnativeadvancedp += `${mbnativeadvancedp.length}`;
         appsB = `${parseInt(`${predictionwino}`)}`;
         predictionwino -= parseInt(`${predictionwino}`) * 1;
         if (control4) {
            break;
         }
      } while (control4 && ((selectq * 3.57) < 2.31));
      while (parseInt(`${selectq}`) == mbnativeadvancedp.length) {
          let ticked4 = 5.0;
          let telemetryn = true;
          let changeu: Map<any, any> = new Map([[String.fromCharCode(103,101,111,109,95,119,95,53,49,0),417], [String.fromCharCode(101,109,117,101,100,103,101,95,103,95,50,54,0),935]]);
          let nativeex7 = false;
          let chatroombackground8 = String.fromCharCode(101,112,122,115,95,108,95,53,55,0);
         mbnativeadvancedp = `${(mbnativeadvancedp.length << (Math.min(4, Math.abs((nativeex7 ? 5 : 3)))))}`;
         ticked4 *= parseFloat(`${changeu.size}`);
         telemetryn = changeu.size <= 82 && telemetryn;
         nativeex7 = chatroombackground8.length == 11 && telemetryn;
         chatroombackground8 += `${1 >> (Math.min(2, Math.abs(changeu.size)))}`;
         break;
      }
      while ((mbnativeadvancedp.length / (Math.max(5, parseInt(`${selectq}`)))) < 1) {
          let statsD = String.fromCharCode(120,95,50,54,95,115,117,99,99,101,101,100,0);
          let armvaF = false;
          let iconarrowrightB = true;
          let privacyE = String.fromCharCode(99,111,110,116,111,117,114,95,114,95,52,48,0);
          let libreactb = String.fromCharCode(118,95,56,52,95,112,114,105,111,114,105,116,121,0);
         mbnativeadvancedp = `${privacyE.length << (Math.min(statsD.length, 5))}`;
         statsD += `${libreactb.length / 2}`;
         armvaF = libreactb.includes(`${iconarrowrightB}`);
         privacyE += `${(String.fromCharCode(116,0) == libreactb ? libreactb.length : (iconarrowrightB ? 3 : 1))}`;
         break;
      }
      footballfiledlayouty = [3];
   for (let v = 0; v < 3; v++) {
      floater9 = [libruntimeexecutor8.length - footballfiledlayouty.length];
   }
          setMiddleMatchBeforeStart(true);

      resultq -= parseInt(`${resultq}`);
      libavformats += parseFloat(`${libruntimeexecutor8.length << (Math.min(Math.abs(1), 4))}`);
          setMiddleMatchStarted(false);

      filedX.push(libruntimeexecutor8.length & 3);
       let robotog = true;
      for (let p = 0; p < 1; p++) {
         robotog = (!robotog ? !robotog : robotog);
      }
      while (robotog) {
         robotog = !robotog;
         break;
      }
       let eactM = false;
      floater9.push(1);
          setDefaultStatus(false);
        }
        break;
      default:
        setCountDownTime(false);

      overE = (footballfiledlayouty.length << (Math.min(Math.abs(modityO.size), 2))) <= 66;
   if (4 <= (4 | libswresampleN.length)) {
       let grays = String.fromCharCode(100,95,54,57,95,99,104,101,99,107,98,111,120,0);
       let castD: Array<any> = [124, 388, 865];
      if (1 > (grays.length % 3) && (grays.length % (Math.max(3, 3))) > 3) {
         grays = `${castD.length - grays.length}`;
      }
       let humidityo = String.fromCharCode(121,113,117,97,110,116,95,103,95,52,54,0);
       let heartI = String.fromCharCode(109,109,105,117,116,105,108,115,95,56,95,54,55,0);
          let bnewarchdefaultsV: Array<any> = [533, 824, 387];
          let renewr = 0;
         grays = `${heartI.length}`;
         bnewarchdefaultsV = [renewr];
         renewr *= 1;
          let static_ahQ = String.fromCharCode(112,95,52,57,95,109,111,110,111,98,108,97,99,107,0);
          let minimizez = String.fromCharCode(102,95,56,49,95,103,114,97,121,97,0);
         castD = [humidityo.length % (Math.max(6, static_ahQ.length))];
         static_ahQ = `${minimizez.length ^ minimizez.length}`;
      if (!heartI.endsWith(humidityo)) {
         humidityo = `${humidityo.length * castD.length}`;
      }
         humidityo += `${(String.fromCharCode(68,0) == grays ? grays.length : castD.length)}`;
      footballfiledlayouty.push(parseInt(`${resultq}`));
   }
        setMiddleMatchBeforeStart(false);

   if (!libfolly7.includes(`${footballfiledlayouty.length}`)) {
      libfolly7 = "2";
   }
   while (4 <= libruntimeexecutor8.length) {
       let imagemanager8 = 4;
       let bridge3 = String.fromCharCode(109,101,116,114,105,99,95,53,95,51,50,0);
       let statsnomoredataI = String.fromCharCode(99,111,110,115,117,109,101,95,52,95,55,52,0);
       let issubR = String.fromCharCode(109,95,56,95,109,112,100,98,0);
          let teamdetailsbgr: Array<any> = [String.fromCharCode(100,101,115,99,114,105,112,116,105,111,110,115,95,98,95,53,49,0), String.fromCharCode(110,111,97,108,108,111,99,95,54,95,56,48,0)];
          let regengX = 4.0;
          let iconnotificationnewl: Map<any, any> = new Map([[String.fromCharCode(114,101,99,111,103,110,105,116,105,111,110,95,54,95,55,52,0),755], [String.fromCharCode(101,95,56,50,95,117,116,105,108,105,116,105,101,115,0),905], [String.fromCharCode(102,111,99,117,115,101,100,95,102,95,56,54,0),848]]);
         statsnomoredataI += `${(statsnomoredataI == String.fromCharCode(71,0) ? statsnomoredataI.length : teamdetailsbgr.length)}`;
         teamdetailsbgr.push(parseInt(`${regengX}`) - iconnotificationnewl.size);
         regengX -= parseFloat(`${2}`);
         iconnotificationnewl.set(`${regengX}`, iconnotificationnewl.size);
      while (bridge3.endsWith(`${imagemanager8}`)) {
          let arrowH: Array<any> = [281, 865, 781];
          let nativemoduleB = 0.0;
          let rewardvideor = false;
          let yellowanimationliveK = String.fromCharCode(99,111,100,105,110,103,95,115,95,52,54,0);
         imagemanager8 /= Math.max(1, (String.fromCharCode(119,0) == issubR ? statsnomoredataI.length : issubR.length));
         arrowH.push(arrowH.length ^ 1);
         nativemoduleB -= (String.fromCharCode(122,0) == yellowanimationliveK ? arrowH.length : yellowanimationliveK.length);
         rewardvideor = !rewardvideor;
         break;
      }
       let minivodw = String.fromCharCode(112,114,111,109,105,110,101,110,116,95,113,95,51,52,0);
       let statisticsinactivez = String.fromCharCode(115,117,98,108,101,110,103,116,104,95,108,95,53,51,0);
       let downarrowl: Array<any> = [806, 520, 710];
       let footballfiledlayout3: Array<any> = [885, 535];
      for (let a = 0; a < 1; a++) {
          let pinge = String.fromCharCode(116,114,97,110,115,105,116,105,111,110,101,100,95,54,95,56,52,0);
          let iconarrowleftX: Map<any, any> = new Map([[String.fromCharCode(102,105,108,101,112,97,116,104,95,121,95,55,53,0),12], [String.fromCharCode(102,105,108,101,114,101,97,100,115,116,114,101,97,109,95,116,95,50,48,0),950]]);
          let imagesy = String.fromCharCode(115,108,97,118,101,95,111,95,55,48,0);
          let reactnativeultimatelistviewL: Array<any> = [536, 974, 656];
         imagemanager8 <<= Math.min(bridge3.length, 1);
         pinge = `${reactnativeultimatelistviewL.length & 3}`;
         iconarrowleftX = new Map([[`${reactnativeultimatelistviewL.length}`, reactnativeultimatelistviewL.length]]);
         imagesy += `${pinge.length}`;
      }
      overE = libswresampleN.includes(overE);
      break;
   }
        setMiddleMatchStarted(false);

      libruntimeexecutor8 = `${1 + parseInt(`${libavformats}`)}`;
   while (1 > (2 / (Math.max(1, libruntimeexecutor8.length)))) {
      libruntimeexecutor8 = `${langkeyV.size / (Math.max(1, 7))}`;
      break;
   }
        setDefaultStatus(true);

       let profileactivew = String.fromCharCode(97,115,115,101,116,115,95,121,95,51,56,0);
       let detail7 = String.fromCharCode(103,95,57,49,95,112,101,114,109,117,116,97,116,105,111,110,0);
       let playT = 1;
         detail7 = `${2 & detail7.length}`;
      let phonesharev = 7177609 <= detail7.length;
      do {
          let favoriteo = String.fromCharCode(100,95,56,52,95,114,101,100,101,108,101,103,97,116,101,0);
          let flyerz = false;
         detail7 += `${playT | 3}`;
         favoriteo = `${(favoriteo == String.fromCharCode(86,0) ? favoriteo.length : (flyerz ? 1 : 3))}`;
         flyerz = !flyerz;
         if (phonesharev) {
            break;
         }
      } while ((detail7.startsWith(`${playT}`)) && phonesharev);
         playT |= (String.fromCharCode(77,0) == profileactivew ? profileactivew.length : playT);
         playT /= Math.max(3, 3 ^ detail7.length);
      while (detail7.length > 5) {
         playT += detail7.length;
         break;
      }
         playT &= playT;
          let private_ov4: Array<any> = [354, 65];
          let unreadY = String.fromCharCode(101,98,109,108,110,117,109,95,52,95,55,53,0);
         profileactivew += "2";
         private_ov4.push(1 + unreadY.length);
         unreadY = `${private_ov4.length % (Math.max(unreadY.length, 8))}`;
      let predictiondefaulty = playT <= 6077574;
      do {
          let empty6 = 2;
          let countryR = false;
         playT += profileactivew.length ^ 2;
         empty6 ^= 3;
         countryR = 90 < empty6;
         if (predictiondefaulty) {
            break;
         }
      } while ((4 == playT) && predictiondefaulty);
         profileactivew = `${detail7.length}`;
      libswresampleN.push(3);
      libswresampleN.push(libfolly7.length + 1);
        break;
    }
  };

  
  
  
  
  
  
  
  

  const liveVideo = () => {
       let yellowcirclebgS = String.fromCharCode(116,114,97,110,115,102,111,114,109,101,114,95,118,95,50,49,0);
    let runtimeQ: Array<any> = [480, 288];
    let pingq = String.fromCharCode(118,95,51,48,95,97,118,97,116,97,114,0);
    let iconsaveimagee = String.fromCharCode(121,95,52,52,95,109,105,110,117,116,101,115,0);
    let checkboxD = String.fromCharCode(112,97,99,107,97,103,101,115,95,104,95,49,53,0);
    let footballtrophyU: Array<any> = [446, 738];
    let downu: Array<any> = [647, 814];
    let tailp = false;
    let ewardedb = String.fromCharCode(97,112,112,114,101,99,97,116,105,111,110,95,57,95,56,51,0);
    let navigationm = 5;
      footballtrophyU.push(iconsaveimagee.length);
   let catalogL = 5220697 >= downu.length;
   do {
       let contexty = String.fromCharCode(121,117,118,112,116,111,117,121,118,121,95,113,95,56,54,0);
       let reactnavigationp: Array<any> = [150, 157, 617];
       let leftH = String.fromCharCode(119,95,56,55,95,98,111,114,105,110,103,115,115,108,0);
       let nterstitialK = String.fromCharCode(97,95,52,49,95,113,117,97,100,116,114,101,101,0);
       let theme1: Array<any> = [String.fromCharCode(97,108,108,112,97,115,115,95,50,95,55,56,0), String.fromCharCode(99,104,97,115,101,95,106,95,49,50,0), String.fromCharCode(105,115,112,111,115,97,98,108,101,95,56,95,49,57,0)];
          let sheetk = true;
          let iconwechatK = String.fromCharCode(115,113,108,105,116,101,114,101,98,97,115,101,114,95,99,95,53,49,0);
          let dycreatorf = 4;
         nterstitialK = "3";
         sheetk = iconwechatK.length > dycreatorf;
         iconwechatK += `${(3 << (Math.min(1, Math.abs((sheetk ? 2 : 3)))))}`;
         dycreatorf -= dycreatorf / (Math.max(iconwechatK.length, 1));
      if (nterstitialK.length >= 4) {
         nterstitialK = `${nterstitialK.length + leftH.length}`;
      }
      for (let s = 0; s < 1; s++) {
          let drag0 = 3.0;
          let inouttargetred_ = 2;
          let iconsetting5 = String.fromCharCode(98,95,55,95,111,98,106,101,99,116,0);
         contexty = `${inouttargetred_ / (Math.max(theme1.length, 2))}`;
         drag0 *= (parseFloat(`${String.fromCharCode(115,0) == iconsetting5 ? iconsetting5.length : parseInt(`${drag0}`)}`));
         inouttargetred_ /= Math.max(1, (String.fromCharCode(108,0) == iconsetting5 ? parseInt(`${drag0}`) : iconsetting5.length));
      }
          let tempnodatagifH = String.fromCharCode(101,95,49,54,95,108,105,110,101,115,0);
          let hometeamfieldh = 3.0;
         contexty += `${(tempnodatagifH == String.fromCharCode(108,0) ? tempnodatagifH.length : leftH.length)}`;
         hometeamfieldh *= 1;
       let debugU: Map<any, any> = new Map([[String.fromCharCode(102,95,50,50,95,98,101,104,97,118,105,111,114,0),false ], [String.fromCharCode(98,95,57,49,95,112,114,111,100,115,0),false ], [String.fromCharCode(118,114,101,99,116,95,54,95,52,51,0),false ]]);
       let teamr: Map<any, any> = new Map([[String.fromCharCode(112,95,57,49,95,116,97,107,100,115,112,0),String.fromCharCode(99,104,97,110,103,101,115,95,119,95,49,52,0)], [String.fromCharCode(119,95,55,50,95,108,115,112,102,0),String.fromCharCode(102,114,101,101,97,100,100,114,105,110,102,111,95,121,95,55,55,0)]]);
      while ((5 * debugU.size) >= 3) {
         reactnavigationp.push(theme1.length + leftH.length);
         break;
      }
       let sortT = String.fromCharCode(110,95,55,57,95,103,101,110,101,114,97,108,105,122,101,100,116,105,109,101,0);
       let libfileK = String.fromCharCode(115,117,98,101,120,112,95,98,95,49,48,48,0);
       let storel = String.fromCharCode(103,95,57,48,95,102,117,110,99,116,105,111,110,115,0);
       let clock9 = false;
       let backgroundL = false;
          let iconsaveimage_ = String.fromCharCode(109,97,110,105,112,117,108,97,116,111,114,95,110,95,51,54,0);
          let main_md: Array<any> = [String.fromCharCode(102,97,105,108,97,98,108,101,95,122,95,54,51,0), String.fromCharCode(110,95,56,48,95,97,115,110,116,0)];
          let sortm: Map<any, any> = new Map([[String.fromCharCode(122,95,51,52,95,97,110,99,101,115,116,114,121,0),10], [String.fromCharCode(114,95,57,56,95,97,110,99,105,108,108,97,114,121,0),727], [String.fromCharCode(118,95,56,49,95,102,116,97,98,0),800]]);
         teamr.set(contexty, main_md.length);
         iconsaveimage_ = `${1 % (Math.max(9, iconsaveimage_.length))}`;
         main_md.push(3 * iconsaveimage_.length);
         sortm.set(`${iconsaveimage_}`, sortm.size);
      while ((1 >> (Math.min(5, Math.abs(teamr.size)))) <= 1 || 1 <= (teamr.size >> (Math.min(sortT.length, 1)))) {
         teamr = new Map([[`${reactnavigationp.length}`, reactnavigationp.length ^ libfileK.length]]);
         break;
      }
         reactnavigationp.push(leftH.length);
          let boot5 = String.fromCharCode(99,111,97,114,115,101,95,98,95,53,54,0);
          let googleh: Map<any, any> = new Map([[String.fromCharCode(122,95,50,49,95,119,115,118,113,97,0),844], [String.fromCharCode(110,95,54,54,95,98,97,116,99,104,101,100,0),296]]);
         reactnavigationp = [theme1.length];
         boot5 += `${googleh.size}`;
         googleh = new Map([[`${googleh.size}`, googleh.size >> (Math.min(boot5.length, 3))]]);
       let defaultprofilepicX = String.fromCharCode(101,116,104,114,101,97,100,95,54,95,56,53,0);
      let iconmore3 = 5993935 >= teamr.size;
      do {
         teamr.set(libfileK, libfileK.length ^ 2);
         if (iconmore3) {
            break;
         }
      } while (iconmore3 && (teamr.size < 4));
      downu = [downu.length | reactnavigationp.length];
      if (catalogL) {
         break;
      }
   } while (catalogL && ((runtimeQ.length << (Math.min(Math.abs(4), 3))) >= 4));
   while (2 == (runtimeQ.length / (Math.max(7, downu.length))) && (runtimeQ.length / 2) == 5) {
      downu = [1];
      break;
   }
      yellowcirclebgS += `${runtimeQ.length}`;
   let flippert = 5594775 >= footballtrophyU.length;
   do {
      footballtrophyU = [2];
      if (flippert) {
         break;
      }
   } while (((1 * footballtrophyU.length) == 1 || 4 == (footballtrophyU.length * 1)) && flippert);
   if (checkboxD.length >= pingq.length) {
       let runtimep = String.fromCharCode(115,109,111,111,116,104,105,110,103,95,49,95,57,57,0);
       let foregroundA = 1.0;
       let injurya = String.fromCharCode(122,95,53,48,95,99,111,109,109,105,116,116,101,114,0);
       let formX = String.fromCharCode(105,95,49,48,48,95,112,114,111,102,105,108,105,110,103,0);
          let penaltyshoot6 = 1.0;
          let roomo = String.fromCharCode(111,108,107,97,100,111,116,95,99,95,51,56,0);
         runtimep += `${roomo.length + 2}`;
         penaltyshoot6 /= Math.max(parseFloat(`${parseInt(`${penaltyshoot6}`)}`), 4);
         roomo = `${parseInt(`${penaltyshoot6}`)}`;
      let scheduleT = 8074596.0 <= foregroundA;
      do {
          let kuaishouQ = String.fromCharCode(105,95,56,52,95,109,117,110,108,111,99,107,0);
         foregroundA += parseFloat(`${parseInt(`${foregroundA}`)}`);
         kuaishouQ = `${kuaishouQ.length * kuaishouQ.length}`;
         if (scheduleT) {
            break;
         }
      } while (scheduleT && (parseInt(`${foregroundA}`) < formX.length));
         foregroundA *= (parseFloat(`${injurya == String.fromCharCode(77,0) ? injurya.length : parseInt(`${foregroundA}`)}`));
      for (let k = 0; k < 3; k++) {
         injurya = `${runtimep.length}`;
      }
      if (!runtimep.includes(injurya)) {
          let fillt = String.fromCharCode(97,116,114,95,114,95,51,52,0);
          let bellA = String.fromCharCode(109,101,103,97,98,121,116,101,95,102,95,55,50,0);
         injurya += `${formX.length / (Math.max(2, 5))}`;
         fillt += `${bellA.length}`;
         bellA = `${bellA.length + fillt.length}`;
      }
       let classesm = 5.0;
       let serviceb = 1.0;
         runtimep += `${runtimep.length * parseInt(`${foregroundA}`)}`;
         classesm -= parseFloat(`${parseInt(`${classesm}`) / (Math.max(4, parseInt(`${foregroundA}`)))}`);
      while ((formX.length * parseInt(`${classesm}`)) > 1 && 2.90 > (parseFloat(`${formX.length}`) * classesm)) {
         formX += `${parseInt(`${classesm}`)}`;
         break;
      }
          let libjsijniprofilerL = String.fromCharCode(103,95,55,50,95,111,102,102,101,114,0);
         classesm /= Math.max(3, parseFloat(`${formX.length >> (Math.min(Math.abs(2), 1))}`));
         libjsijniprofilerL = `${libjsijniprofilerL.length + libjsijniprofilerL.length}`;
       let profileactiveq: Map<any, any> = new Map([[String.fromCharCode(112,95,57,56,95,104,101,105,103,104,116,0),259], [String.fromCharCode(115,116,114,105,100,101,98,95,106,95,52,52,0),34]]);
          let iconp = String.fromCharCode(114,97,110,95,55,95,55,49,0);
          let bgvipsportw = String.fromCharCode(122,95,57,49,95,111,108,111,114,0);
         formX = `${profileactiveq.size & iconp.length}`;
         iconp += `${bgvipsportw.length}`;
         bgvipsportw += `${bgvipsportw.length}`;
      checkboxD += `${parseInt(`${foregroundA}`) / 1}`;
   }
      tailp = footballtrophyU.includes(tailp);
   let yellowf = 7330798 >= iconsaveimagee.length;
   do {
       let pressuren: Array<any> = [463, 433];
       let traminiJ = 1;
         traminiJ -= pressuren.length << (Math.min(Math.abs(1), 2));
      if (3 > traminiJ) {
          let countdown1 = String.fromCharCode(114,95,57,51,95,98,105,110,0);
          let libcrashsdk0 = 2.0;
         pressuren = [countdown1.length];
         countdown1 = `${parseInt(`${libcrashsdk0}`)}`;
      }
         traminiJ >>= Math.min(Math.abs(1), 1);
         traminiJ -= traminiJ;
      if (pressuren.includes(traminiJ)) {
         pressuren = [pressuren.length];
      }
       let iconclosewhitewithbgp = String.fromCharCode(117,110,105,102,105,101,100,95,52,95,52,51,0);
      iconsaveimagee += `${footballtrophyU.length >> (Math.min(yellowcirclebgS.length, 5))}`;
      if (yellowf) {
         break;
      }
   } while (yellowf && (ewardedb != String.fromCharCode(68,0)));
   if (ewardedb.length == 1 && pingq != String.fromCharCode(108,0)) {
      pingq += `${((tailp ? 3 : 5))}`;
   }
      footballtrophyU = [3];

    if (onOpenLive) {

   let inouttargetreda = String.fromCharCode(50,57,51,0) == checkboxD;
   do {
       let showK: Map<any, any> = new Map([[String.fromCharCode(121,95,49,54,95,102,119,104,116,120,0),false ], [String.fromCharCode(115,112,107,114,95,111,95,57,49,0),false ]]);
         showK.set(`${showK.size}`, showK.size << (Math.min(5, Math.abs(showK.size))));
      let nterstitialv = 5594596 <= showK.size;
      do {
         showK.set(`${showK.size}`, showK.size - showK.size);
         if (nterstitialv) {
            break;
         }
      } while (nterstitialv && (2 == showK.size));
          let stationsa: Array<any> = [265, 661];
          let dependencyk = 5.0;
         showK = new Map([[`${showK.size}`, 1 << (Math.min(5, Math.abs(showK.size)))]]);
         stationsa = [1 << (Math.min(4, stationsa.length))];
         dependencyk += stationsa.length / (Math.max(1, 7));
      checkboxD += `${iconsaveimagee.length << (Math.min(Math.abs(1), 4))}`;
      if (inouttargetreda) {
         break;
      }
   } while ((!checkboxD.endsWith(iconsaveimagee)) && inouttargetreda);
   if ((5 >> (Math.min(4, pingq.length))) < 4 || 2 < (5 >> (Math.min(4, downu.length)))) {
       let componentregistryp = String.fromCharCode(116,95,53,55,95,115,105,120,0);
       let rendern = String.fromCharCode(115,113,108,105,116,101,95,57,95,54,57,0);
       let transferJ: Map<any, any> = new Map([[String.fromCharCode(112,95,52,56,95,97,100,100,105,116,105,118,101,0),771], [String.fromCharCode(111,116,104,95,118,95,54,56,0),819], [String.fromCharCode(109,97,105,110,110,101,116,115,95,113,95,57,53,0),770]]);
       let referrerE: Array<any> = [304, 973];
         transferJ = new Map([[`${transferJ.size}`, 3]]);
         rendern = `${transferJ.size % (Math.max(3, 2))}`;
         referrerE = [3 << (Math.min(5, rendern.length))];
      if (5 == (transferJ.size * 4) && (4 * referrerE.length) == 2) {
          let tailf = String.fromCharCode(107,95,53,53,95,120,105,112,104,108,97,99,105,110,103,0);
          let imagenomoredataH: Array<any> = [String.fromCharCode(97,116,111,102,95,119,95,54,52,0), String.fromCharCode(102,100,101,99,95,99,95,56,52,0), String.fromCharCode(112,114,101,101,120,105,115,116,105,110,103,95,52,95,51,49,0)];
          let backgroundX = true;
          let render3: Array<any> = [String.fromCharCode(115,117,109,109,97,114,105,101,115,95,97,95,52,51,0), String.fromCharCode(105,110,115,101,114,116,95,112,95,56,0), String.fromCharCode(105,110,116,101,114,109,101,100,105,97,116,101,95,108,95,56,50,0)];
          let halfX = String.fromCharCode(102,105,101,108,100,115,95,57,95,56,50,0);
         transferJ.set(componentregistryp, componentregistryp.length);
         tailf += `${(imagenomoredataH.length >> (Math.min(2, Math.abs((backgroundX ? 2 : 2)))))}`;
         imagenomoredataH = [((backgroundX ? 4 : 4) * imagenomoredataH.length)];
         render3.push(halfX.length | 3);
         halfX += `${render3.length - 3}`;
      }
       let defaultprofilepicN = 2;
         defaultprofilepicN ^= 1 / (Math.max(6, transferJ.size));
         referrerE.push(defaultprofilepicN + transferJ.size);
      if (!rendern.endsWith(`${referrerE.length}`)) {
         rendern += `${defaultprofilepicN}`;
      }
      while (4 == (defaultprofilepicN / 5) && 2 == (referrerE.length / 5)) {
         referrerE.push(2 << (Math.min(4, referrerE.length)));
         break;
      }
         rendern = `${2 + componentregistryp.length}`;
      for (let b = 0; b < 1; b++) {
         transferJ = new Map([[`${defaultprofilepicN}`, (rendern == String.fromCharCode(78,0) ? rendern.length : defaultprofilepicN)]]);
      }
         defaultprofilepicN |= 3;
      pingq = `${downu.length}`;
   }
      downu.push(2 % (Math.max(3, downu.length)));
   if (!pingq.endsWith(`${tailp}`)) {
      pingq = `${footballtrophyU.length ^ pingq.length}`;
   }
   for (let k = 0; k < 2; k++) {
      pingq = `${yellowcirclebgS.length}`;
   }
   if (footballtrophyU.length >= runtimeQ.length) {
       let path3 = true;
       let streaming_ = String.fromCharCode(103,115,117,98,95,50,95,49,48,0);
       let libreactQ = String.fromCharCode(118,99,97,114,100,95,102,95,49,48,48,0);
       let animationsd = false;
       let sportsJ = String.fromCharCode(99,111,108,108,101,99,116,105,98,108,101,115,95,100,95,53,55,0);
       let moviesd: Array<any> = [307, 41];
          let contextJ = 5;
          let libfileh = 0;
         libreactQ += `${libfileh}`;
         contextJ ^= contextJ / (Math.max(7, contextJ));
      let tempnodatal = sportsJ == String.fromCharCode(57,102,57,0);
      do {
         sportsJ += "2";
         if (tempnodatal) {
            break;
         }
      } while (tempnodatal && (!sportsJ.endsWith(`${moviesd.length}`)));
         streaming_ = "1";
          let closeZ = String.fromCharCode(109,115,103,95,99,95,56,52,0);
         streaming_ += `${sportsJ.length | streaming_.length}`;
         closeZ += `${closeZ.length}`;
         streaming_ += "3";
       let huaweiV = String.fromCharCode(104,95,54,48,95,97,117,116,111,108,111,99,107,0);
       let defaultprofilepic0 = String.fromCharCode(117,95,50,52,95,105,109,112,111,114,116,0);
      while (huaweiV != String.fromCharCode(102,0)) {
          let application0 = String.fromCharCode(101,109,117,108,97,116,101,95,104,95,53,50,0);
          let iconwatchnowH: Array<any> = [String.fromCharCode(112,117,98,108,105,99,105,116,121,95,57,95,56,57,0), String.fromCharCode(103,95,52,48,95,99,111,109,112,111,115,105,116,105,111,110,0), String.fromCharCode(100,101,108,101,103,97,116,101,115,95,114,95,49,49,0)];
          let incidentQ = 0.0;
          let room6: Map<any, any> = new Map([[String.fromCharCode(116,111,111,108,95,111,95,52,48,0),894], [String.fromCharCode(99,95,49,52,95,97,121,117,118,108,101,0),913], [String.fromCharCode(99,95,56,56,95,116,104,114,101,101,115,116,97,116,101,0),868]]);
         libreactQ = `${((path3 ? 2 : 2) + defaultprofilepic0.length)}`;
         application0 += `${application0.length}`;
         iconwatchnowH.push((String.fromCharCode(87,0) == application0 ? room6.size : application0.length));
         incidentQ *= parseFloat(`${2}`);
         room6.set(`${incidentQ}`, parseInt(`${incidentQ}`) % (Math.max(room6.size, 6)));
         break;
      }
       let bgvipsporto = 4.0;
      while (!animationsd) {
         animationsd = streaming_.length < 66;
         break;
      }
       let whiteanimationlive2 = 1.0;
       let turndownv = 3.0;
          let encryptorF = 4.0;
          let nativeexj = String.fromCharCode(104,105,116,115,95,57,95,49,48,48,0);
         path3 = (turndownv + whiteanimationlive2) == 68.12;
         encryptorF /= Math.max(parseInt(`${encryptorF}`), 4);
         nativeexj += `${parseInt(`${encryptorF}`) << (Math.min(nativeexj.length, 4))}`;
      let privilegeQ = path3 ? !path3 : path3;
      do {
         path3 = !animationsd;
         if (privilegeQ) {
            break;
         }
      } while (privilegeQ && (sportsJ.length > 3 || !path3));
      while (streaming_ == huaweiV) {
         huaweiV = `${parseInt(`${bgvipsporto}`) | 3}`;
         break;
      }
          let thailandb: Array<any> = [804, 87, 410];
          let hongkongI = 1.0;
          let hookx = String.fromCharCode(97,95,51,49,95,101,120,112,105,114,101,100,0);
         bgvipsporto /= Math.max(3, parseFloat(`${sportsJ.length}`));
         thailandb.push(thailandb.length);
         hongkongI *= (parseFloat(`${String.fromCharCode(90,0) == hookx ? parseInt(`${hongkongI}`) : hookx.length}`));
      runtimeQ = [footballtrophyU.length % (Math.max(ewardedb.length, 10))];
   }
       let injuryaX: Array<any> = [657, 32];
      let thumbnailo = injuryaX.length >= 5539467;
      do {
         injuryaX = [2];
         if (thumbnailo) {
            break;
         }
      } while ((1 > (injuryaX.length >> (Math.min(injuryaX.length, 1))) || (injuryaX.length >> (Math.min(Math.abs(1), 4))) > 3) && thumbnailo);
         injuryaX = [injuryaX.length | injuryaX.length];
      while (!injuryaX.includes(injuryaX.length)) {
         injuryaX = [injuryaX.length];
         break;
      }
      checkboxD = `${yellowcirclebgS.length >> (Math.min(Math.abs(2), 4))}`;
      runtimeQ = [runtimeQ.length];
       let configA: Array<any> = [String.fromCharCode(105,95,56,54,95,101,120,112,101,99,116,0), String.fromCharCode(101,108,108,105,112,116,105,99,97,108,95,117,95,50,56,0), String.fromCharCode(117,105,110,116,98,101,95,112,95,51,55,0)];
          let ticke = String.fromCharCode(115,95,52,48,95,99,111,110,118,101,114,115,97,116,105,111,110,0);
          let arrowrightwithtail2: Array<any> = [607, 373, 673];
         configA = [configA.length];
         ticke += `${ticke.length % 2}`;
         arrowrightwithtail2 = [ticke.length];
         configA = [1];
         configA = [2];
      ewardedb += `${runtimeQ.length | configA.length}`;
   if (iconsaveimagee.length == 2) {
      iconsaveimagee = `${runtimeQ.length}`;
   }
      onOpenLive();
    }
  };

  const liveAnimationVideo = () => {
       let liveshareD = false;
    let pagej = 3.0;
    let style6 = true;
    let orangeV = String.fromCharCode(103,95,54,53,95,116,114,97,102,102,105,99,0);
    let iconscheduleS = String.fromCharCode(98,95,53,49,95,99,108,101,97,114,105,0);
    let pauseN = String.fromCharCode(104,95,54,49,95,115,98,111,120,0);
    let halffieldimagea = 2.0;
    let sigmobd = 1.0;
    let libreanimatedn = String.fromCharCode(101,110,116,114,111,112,121,109,118,95,117,95,56,54,0);
    let orangedownarrowA = String.fromCharCode(98,117,105,108,100,95,57,95,54,56,0);
    let short_egW = String.fromCharCode(99,111,108,111,114,107,101,121,95,99,95,51,51,0);
    let stringM = String.fromCharCode(114,101,115,117,108,116,115,95,114,95,55,50,0);
      halffieldimagea -= parseInt(`${pagej}`);
   if (pauseN.includes(iconscheduleS)) {
       let combinedT = String.fromCharCode(115,108,105,99,101,99,111,110,116,101,120,116,95,116,95,55,49,0);
      if (combinedT.length < combinedT.length) {
         combinedT += `${combinedT.length}`;
      }
         combinedT += `${(String.fromCharCode(102,0) == combinedT ? combinedT.length : combinedT.length)}`;
       let appsO = 5.0;
      pauseN += `${pauseN.length + 2}`;
   }
      orangeV += `${((liveshareD ? 4 : 4))}`;
      pauseN = `${2 | libreanimatedn.length}`;

    

      orangedownarrowA += "1";
      iconscheduleS += `${libreanimatedn.length}`;
      pauseN = `${iconscheduleS.length}`;
   let greyL = orangeV == String.fromCharCode(108,117,54,98,99,122,0);
   do {
      orangeV = `${iconscheduleS.length}`;
      if (greyL) {
         break;
      }
   } while (greyL && (orangeV.length <= pauseN.length));
    if (onOpenAnimation) {

      iconscheduleS = `${short_egW.length}`;
      style6 = libreanimatedn.length == 7;
   for (let z = 0; z < 3; z++) {
      liveshareD = style6;
   }
       let livey = String.fromCharCode(102,95,53,95,115,117,98,115,99,114,105,112,116,0);
       let showlessl = true;
       let arrow6 = String.fromCharCode(105,110,116,101,114,112,111,108,97,116,101,95,119,95,49,49,0);
      if (livey.length < 4) {
         showlessl = 82 < livey.length;
      }
         livey = "2";
          let megaphoneL = 5;
          let notificationQ = 2;
          let libreanimatedL = String.fromCharCode(122,95,55,55,95,112,114,111,112,101,114,121,0);
         arrow6 += `${(String.fromCharCode(84,0) == livey ? livey.length : (showlessl ? 2 : 4))}`;
         megaphoneL /= Math.max(2, (String.fromCharCode(105,0) == libreanimatedL ? megaphoneL : libreanimatedL.length));
         notificationQ /= Math.max(1, 3);
      while (showlessl && 4 >= livey.length) {
         livey += `${2 + arrow6.length}`;
         break;
      }
      while (1 == livey.length && arrow6.length == 1) {
         livey += `${((showlessl ? 5 : 5) / (Math.max(1, 8)))}`;
         break;
      }
      for (let y = 0; y < 2; y++) {
         showlessl = arrow6.length >= 57;
      }
      if (showlessl) {
         showlessl = 78 < livey.length || String.fromCharCode(119,0) == arrow6;
      }
         showlessl = livey.endsWith(`${showlessl}`);
          let telemetry1 = String.fromCharCode(103,108,111,98,97,108,95,112,95,55,56,0);
         showlessl = arrow6.endsWith(`${showlessl}`);
         telemetry1 = `${(telemetry1 == String.fromCharCode(74,0) ? telemetry1.length : telemetry1.length)}`;
      pagej -= ((style6 ? 2 : 4));
      if (animationStream3D) {

   if (!stringM.startsWith(`${liveshareD}`)) {
      liveshareD = orangedownarrowA.length >= 25 && pagej >= 49.32;
   }
   let group1 = liveshareD ? !liveshareD : liveshareD;
   do {
      liveshareD = (iconscheduleS.length + parseInt(`${halffieldimagea}`)) > 37;
      if (group1) {
         break;
      }
   } while ((5.49 > (halffieldimagea / (Math.max(2.30, 4)))) && group1);
      orangeV += "1";
      libreanimatedn = `${stringM.length}`;
        onOpenAnimation(animationStream3D);
      } else if (animationStream2D) {

   let bases = sigmobd >= 6384411.0;
   do {
       let airbnbstarl = String.fromCharCode(97,112,112,101,97,114,101,100,95,49,95,51,50,0);
       let leftz = 5.0;
       let giftbuttonB = String.fromCharCode(110,95,51,51,95,110,105,98,0);
       let iconviewergifj = 5.0;
          let relatedS: Array<any> = [String.fromCharCode(99,105,110,101,109,97,95,104,95,49,0), String.fromCharCode(98,114,97,110,99,104,95,51,95,55,49,0)];
          let weibod = String.fromCharCode(97,95,49,55,95,116,114,97,107,0);
          let commonT = String.fromCharCode(117,110,105,116,121,95,97,95,53,53,0);
         leftz /= Math.max(3, parseFloat(`${weibod.length * parseInt(`${iconviewergifj}`)}`));
         relatedS.push(relatedS.length ^ 2);
         weibod = `${relatedS.length % 1}`;
         commonT += "2";
      while (parseInt(`${iconviewergifj}`) < airbnbstarl.length) {
         iconviewergifj -= airbnbstarl.length;
         break;
      }
          let mode1 = 3.0;
          let tempnodatas = false;
         leftz /= Math.max(parseFloat(`${parseInt(`${iconviewergifj}`) << (Math.min(3, Math.abs(parseInt(`${mode1}`))))}`), 5);
         mode1 /= Math.max((parseFloat(`${(tempnodatas ? 2 : 1) << (Math.min(4, Math.abs((tempnodatas ? 1 : 5))))}`)), 5);
      let selli = giftbuttonB == String.fromCharCode(50,105,109,0);
      do {
          let overE = false;
          let renderP: Array<any> = [461, 31];
         giftbuttonB = `${renderP.length}`;
         overE = !overE;
         renderP.push(((overE ? 2 : 3) >> (Math.min(5, Math.abs(1)))));
         if (selli) {
            break;
         }
      } while ((!giftbuttonB.endsWith(airbnbstarl)) && selli);
         leftz /= Math.max(parseFloat(`${airbnbstarl.length | 2}`), 2);
         leftz *= parseFloat(`${3}`);
         giftbuttonB = `${1 % (Math.max(4, parseInt(`${iconviewergifj}`)))}`;
      for (let q = 0; q < 2; q++) {
         leftz *= parseFloat(`${parseInt(`${iconviewergifj}`) * airbnbstarl.length}`);
      }
         leftz -= parseFloat(`${parseInt(`${iconviewergifj}`) % 3}`);
         giftbuttonB += `${parseInt(`${leftz}`)}`;
         giftbuttonB = `${giftbuttonB.length}`;
          let libfileV = String.fromCharCode(105,95,56,53,95,97,112,112,108,101,0);
         giftbuttonB += "2";
         libfileV = "3";
      sigmobd -= parseFloat(`${2 >> (Math.min(2, airbnbstarl.length))}`);
      if (bases) {
         break;
      }
   } while ((orangedownarrowA.startsWith(`${sigmobd}`)) && bases);
      liveshareD = sigmobd > 72.24 || !liveshareD;
      pagej *= pauseN.length & 3;
   for (let l = 0; l < 2; l++) {
       let libimagepipelinew = String.fromCharCode(110,95,57,53,95,104,101,114,109,105,116,101,0);
       let disconnectedH: Array<any> = [String.fromCharCode(109,98,104,115,95,99,95,50,49,0), String.fromCharCode(100,101,108,116,97,113,95,50,95,55,0)];
       let iconuserM = 2;
       let relatedx = String.fromCharCode(106,95,56,57,95,109,97,108,101,0);
       let libfilep = 3.0;
      let refreshI = 9845214 <= disconnectedH.length;
      do {
         disconnectedH = [iconuserM];
         if (refreshI) {
            break;
         }
      } while ((!disconnectedH.includes(iconuserM)) && refreshI);
         disconnectedH = [1 * parseInt(`${libfilep}`)];
         libimagepipelinew = `${iconuserM << (Math.min(disconnectedH.length, 2))}`;
      while ((libfilep + 4.6) >= 3.58 && 1.33 >= (libfilep + 4.6)) {
         libfilep -= parseFloat(`${2}`);
         break;
      }
         iconuserM -= disconnectedH.length * 1;
       let actions3: Array<any> = [389, 862];
       let previewY: Array<any> = [294, 100, 841];
      if ((1 + disconnectedH.length) == 2 || 1 == (libimagepipelinew.length + disconnectedH.length)) {
          let defaultteamg: Array<any> = [String.fromCharCode(115,101,110,116,95,109,95,55,54,0), String.fromCharCode(119,95,56,95,99,108,105,112,112,105,110,103,0)];
          let reactnativejsN = 0;
          let gradlewM = 3.0;
          let customo = String.fromCharCode(117,95,57,57,95,98,97,100,114,101,113,0);
         libimagepipelinew = `${actions3.length ^ 1}`;
         defaultteamg = [reactnativejsN % 2];
         reactnativejsN %= Math.max(reactnativejsN * defaultteamg.length, 2);
         gradlewM *= (parseFloat(`${String.fromCharCode(82,0) == customo ? parseInt(`${gradlewM}`) : customo.length}`));
      }
      for (let g = 0; g < 2; g++) {
          let iconadslink2 = String.fromCharCode(111,102,102,108,111,97,100,95,51,95,55,54,0);
          let huaweit = String.fromCharCode(111,110,99,101,95,57,95,50,49,0);
         disconnectedH = [huaweit.length + 3];
         iconadslink2 = `${iconadslink2.length * 1}`;
         huaweit = `${iconadslink2.length}`;
      }
         relatedx = `${relatedx.length}`;
      while (1 >= (1 & previewY.length)) {
         libfilep -= (parseFloat(`${String.fromCharCode(112,0) == libimagepipelinew ? disconnectedH.length : libimagepipelinew.length}`));
         break;
      }
      while ((parseFloat(`${previewY.length}`) - libfilep) == 2.92 && (2.92 - libfilep) == 1.76) {
         previewY.push((String.fromCharCode(106,0) == relatedx ? relatedx.length : previewY.length));
         break;
      }
         disconnectedH.push(3 & parseInt(`${libfilep}`));
       let becomeI = String.fromCharCode(112,95,54,49,95,115,105,103,110,0);
      for (let c = 0; c < 3; c++) {
          let founda = String.fromCharCode(110,101,111,110,95,120,95,49,50,0);
         iconuserM >>= Math.min(5, Math.abs(3 * relatedx.length));
         founda = `${(founda == String.fromCharCode(83,0) ? founda.length : founda.length)}`;
      }
      while ((libfilep + parseFloat(`${relatedx.length}`)) == 3.37) {
          let penaltymatchiconr = 4;
          let xvodS = 1.0;
          let contextt = 0.0;
          let floating0 = String.fromCharCode(113,95,53,95,115,99,114,101,97,109,0);
         relatedx += `${2 << (Math.min(Math.abs(penaltymatchiconr), 1))}`;
         penaltymatchiconr >>= Math.min(3, Math.abs((String.fromCharCode(109,0) == floating0 ? floating0.length : parseInt(`${contextt}`))));
         xvodS *= 2;
         contextt *= parseFloat(`${floating0.length + parseInt(`${contextt}`)}`);
         break;
      }
      style6 = !style6;
   }
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
