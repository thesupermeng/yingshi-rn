import React, { useCallback, useEffect, useState, memo } from 'react';
import { StyleSheet, View, Text, RefreshControl, FlatList } from 'react-native';
import { useQueryClient } from '@tanstack/react-query';
import ScreenContainer from '../../components/container/yys_matches';
import MainHeader from '../../components/header/yys_config_penaltygoal_header';
import { useFocusEffect, useTheme } from '@react-navigation/native';
import { useInfiniteQuery } from '@tanstack/react-query';
import { yysBellreminder, yysArrowup } from '@type';
import VodPlaylist from '../../components/playlist/yys_watchnowbg_interstitial';
import { BottomTabScreenProps, useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { API_DOMAIN } from '@utility';
import FastImage from "../../components/common/yys_alert_backwhite"
import { useIsFocused } from '@react-navigation/native';
import NoConnection from './../../components/common/yys_librrc_zhengpian';
import NetInfo, { NetInfoState } from '@react-native-community/netinfo';
import { yysDownloadingCombined } from '@redux';
import { useAppSelector } from '@hooks';
import { yysIconclosewhiteBaiduads } from '@redux';
import yys_giftbutton_footballtrophy from '../../../Umeng/yys_giftbutton_footballtrophy';
import { yysSkip } from '@api';

type yysInternetAirbnbstarselected = {
  item: yysArrowup;
  index: number;
};

function Playlist({ navigation }: BottomTabScreenProps<any>) {
  
  const { textVariants, colors, spacing } = useTheme();
  const LIMIT_PER_PAGE = 10;
  // const [results, setResults] = useState<Array<yysArrowup>>([])
  const [totalPage, setTotalPage] = useState(0);

  const isFocused = useIsFocused();
  const [isOffline, setIsOffline] = useState(false);

  const settingsReducer: yysDownloadingCombined = useAppSelector(
    ({ settingsReducer }: yysIconclosewhiteBaiduads) => settingsReducer
  );

  
  useFocusEffect(useCallback(() => {
    yys_giftbutton_footballtrophy.playlistViewsAnalytics();
  }, []));
  

  
  const handleTabPress = () => {
       let reactnavigation2 = 4.0;
    let modityw = String.fromCharCode(115,116,117,102,102,105,110,103,95,97,95,52,48,0);
    let iconwechatr = String.fromCharCode(106,95,57,95,100,105,114,110,97,109,101,0);
    let actionsJ: Array<any> = [784, 9, 31];
    let phonesharem = String.fromCharCode(121,95,51,50,95,115,117,98,116,121,112,101,115,0);
    let mountingg = String.fromCharCode(97,112,112,101,110,100,97,108,108,95,51,95,51,0);
    let footballfiledlayoutf: Array<any> = [350, 919];
    let send0 = 2.0;
    let homeplayerb = String.fromCharCode(120,95,52,56,95,101,114,114,99,111,100,101,0);
    let indicatory = 3;
   let trophyq = 5633352.0 <= send0;
   do {
      send0 /= Math.max(footballfiledlayoutf.length - parseInt(`${send0}`), 5);
      if (trophyq) {
         break;
      }
   } while (trophyq && (4.58 == (1.35 - send0) || (parseInt(`${send0}`) - homeplayerb.length) == 1));
      phonesharem = `${iconwechatr.length % (Math.max(9, actionsJ.length))}`;
      send0 -= mountingg.length;
      iconwechatr += `${phonesharem.length}`;
   let fullc = String.fromCharCode(105,105,98,101,48,110,0) == mountingg;
   do {
       let mbnative9 = String.fromCharCode(121,95,55,56,95,111,112,116,105,109,117,109,0);
       let nbatrophyK: Array<any> = [586, 578];
      if (mbnative9.length < nbatrophyK.length) {
         nbatrophyK.push((mbnative9 == String.fromCharCode(48,0) ? nbatrophyK.length : mbnative9.length));
      }
          let sharewhiteD: Array<any> = [String.fromCharCode(114,95,54,49,0), String.fromCharCode(108,95,54,56,95,111,99,116,101,116,0), String.fromCharCode(99,108,105,112,102,95,104,95,56,48,0)];
         mbnative9 = `${sharewhiteD.length}`;
         mbnative9 = `${3 * mbnative9.length}`;
       let backwhiteI = String.fromCharCode(112,95,52,49,0);
      if ((2 >> (Math.min(2, backwhiteI.length))) > 1) {
         backwhiteI = `${(backwhiteI == String.fromCharCode(54,0) ? nbatrophyK.length : backwhiteI.length)}`;
      }
      while (3 > (nbatrophyK.length + mbnative9.length) && 5 > (3 + nbatrophyK.length)) {
         nbatrophyK = [backwhiteI.length];
         break;
      }
      mountingg = `${modityw.length << (Math.min(Math.abs(1), 2))}`;
      if (fullc) {
         break;
      }
   } while ((mountingg.length == 4) && fullc);
      modityw += `${(String.fromCharCode(50,0) == mountingg ? mountingg.length : iconwechatr.length)}`;
   if (footballfiledlayoutf.length == 4) {
      footballfiledlayoutf.push(iconwechatr.length);
   }
   if ((send0 + 1.12) >= 5.81 || (send0 + 1.12) >= 5.48) {
      reactnavigation2 += 3 - iconwechatr.length;
   }
   while (mountingg.length >= 2 || 2 >= phonesharem.length) {
       let philippinesm = 3.0;
       let neonq = false;
       let short_l3 = 3;
       let ajax9: Map<any, any> = new Map([[String.fromCharCode(111,98,115,101,114,118,101,114,95,52,95,49,53,0),true ], [String.fromCharCode(99,95,49,52,95,110,105,101,108,115,97,100,100,0),false ], [String.fromCharCode(105,95,57,53,95,116,115,97,110,0),false ]]);
      if (philippinesm < 4.12) {
          let libapminsightaL = String.fromCharCode(119,95,51,54,95,115,117,98,112,101,108,0);
          let iconeditK = false;
          let predictionbuttonA = String.fromCharCode(117,110,112,97,99,107,108,111,95,115,95,52,57,0);
          let headerG = true;
          let emojiheartb = 4.0;
         philippinesm += parseFloat(`${parseInt(`${emojiheartb}`)}`);
         libapminsightaL = `${(predictionbuttonA == String.fromCharCode(85,0) ? (headerG ? 4 : 2) : predictionbuttonA.length)}`;
         iconeditK = !headerG;
         emojiheartb += parseFloat(`${libapminsightaL.length}`);
      }
      let disconnectedO = 9559412 <= short_l3;
      do {
         short_l3 <<= Math.min(parseInt(`${Math.abs(((neonq ? 1 : 2) % (Math.max(parseInt(`${philippinesm}`), 2))))}`), 2);
         if (disconnectedO) {
            break;
         }
      } while ((neonq) && disconnectedO);
       let update_zey: Map<any, any> = new Map([[String.fromCharCode(111,95,52,55,95,97,117,116,111,103,101,110,0),795], [String.fromCharCode(104,95,52,57,95,111,118,101,114,97,108,108,0),402], [String.fromCharCode(119,95,55,51,95,112,114,111,112,101,114,116,121,0),907]]);
       let othermatchdetailbgq: Map<any, any> = new Map([[String.fromCharCode(120,95,51,50,95,108,111,99,97,116,101,0),String.fromCharCode(100,95,56,95,120,112,111,115,117,114,101,0)], [String.fromCharCode(114,95,54,49,95,103,97,117,115,115,0),String.fromCharCode(100,117,112,108,105,99,97,116,101,95,57,95,51,53,0)]]);
         ajax9 = new Map([[`${philippinesm}`, ((neonq ? 2 : 4) | parseInt(`${philippinesm}`))]]);
      while (!Array.from(othermatchdetailbgq.values()).includes(update_zey.size)) {
          let shrunkc = true;
          let policyq = true;
          let loadingspinnerS = 0.0;
          let libapminsightaM = String.fromCharCode(116,114,97,105,110,95,50,95,49,50,0);
          let profilet = 1.0;
         othermatchdetailbgq = new Map([[`${neonq}`, parseInt(`${loadingspinnerS}`) & 1]]);
         shrunkc = profilet <= 16.6 && !shrunkc;
         policyq = 33.99 > profilet;
         loadingspinnerS += (parseFloat(`${(shrunkc ? 1 : 3) ^ parseInt(`${profilet}`)}`));
         libapminsightaM = `${((shrunkc ? 5 : 4) % (Math.max(3, (policyq ? 1 : 3))))}`;
         break;
      }
      let unselectedq = neonq ? !neonq : neonq;
      do {
         neonq = short_l3 == ajax9.size;
         if (unselectedq) {
            break;
         }
      } while (unselectedq && (1 == short_l3));
      for (let z = 0; z < 1; z++) {
         short_l3 >>= Math.min(Math.abs(3 ^ ajax9.size), 1);
      }
         neonq = null == update_zey.get(`${neonq}`);
         othermatchdetailbgq = new Map([[`${update_zey.size}`, short_l3]]);
          let penaltymatchiconf = 4;
          let defaultbasketballbgn: Array<any> = [28, 374, 323];
          let sendo = true;
         ajax9 = new Map([[`${defaultbasketballbgn.length}`, defaultbasketballbgn.length * 1]]);
         penaltymatchiconf += penaltymatchiconf + penaltymatchiconf;
         philippinesm /= Math.max(parseFloat(`${3 << (Math.min(4, Math.abs(ajax9.size)))}`), 5);
      if (othermatchdetailbgq.size >= 3) {
          let suggestionq = String.fromCharCode(114,101,102,95,99,95,49,54,0);
          let awayplayerB: Array<any> = [883, 966];
          let downloadedg = String.fromCharCode(100,101,99,101,108,101,114,97,116,101,100,95,121,95,52,0);
         update_zey = new Map([[`${othermatchdetailbgq.size}`, 1]]);
         suggestionq += `${suggestionq.length - 3}`;
         awayplayerB = [suggestionq.length];
         downloadedg += `${suggestionq.length * 1}`;
      }
      phonesharem = `${1 - ajax9.size}`;
      break;
   }
   while (1 <= modityw.length) {
      reactnavigation2 += (phonesharem == String.fromCharCode(121,0) ? phonesharem.length : parseInt(`${reactnavigation2}`));
      break;
   }
       let unimplementedviewZ = String.fromCharCode(112,97,103,105,110,97,116,105,111,110,95,108,95,50,55,0);
       let goal2 = 3.0;
       let adultG = 4.0;
      let gifgoal1 = unimplementedviewZ == String.fromCharCode(99,53,52,0);
      do {
         unimplementedviewZ = `${unimplementedviewZ.length}`;
         if (gifgoal1) {
            break;
         }
      } while (((goal2 + unimplementedviewZ.length) >= 4.100) && gifgoal1);
      for (let n = 0; n < 1; n++) {
         unimplementedviewZ += `${2 - parseInt(`${goal2}`)}`;
      }
          let libbuffers: Array<any> = [617, 432, 324];
          let libfollyn: Map<any, any> = new Map([[String.fromCharCode(115,101,99,111,110,100,115,95,56,95,55,54,0),448], [String.fromCharCode(118,108,111,103,95,116,95,57,56,0),265]]);
          let bootsplashM = false;
         unimplementedviewZ = `${unimplementedviewZ.length}`;
         libbuffers.push(((bootsplashM ? 2 : 3) + libbuffers.length));
         libfollyn.set(`${bootsplashM}`, libfollyn.size | 2);
          let videocommonJ = String.fromCharCode(115,116,105,99,107,121,95,48,95,50,52,0);
         unimplementedviewZ += "1";
         videocommonJ += `${(videocommonJ == String.fromCharCode(108,0) ? videocommonJ.length : videocommonJ.length)}`;
         goal2 *= 1;
         goal2 += 3;
         unimplementedviewZ = "3";
      for (let q = 0; q < 3; q++) {
         unimplementedviewZ += `${parseInt(`${adultG}`) % 1}`;
      }
         goal2 *= 1 ^ unimplementedviewZ.length;
      send0 *= parseInt(`${goal2}`);

    if (isFocused) {

   for (let p = 0; p < 1; p++) {
       let renewc = true;
          let listl = false;
          let middlesoundf = false;
         renewc = (!middlesoundf ? listl : middlesoundf);
         renewc = !renewc;
         renewc = !renewc && renewc;
      reactnavigation2 += iconwechatr.length / 2;
   }
   for (let i = 0; i < 3; i++) {
      phonesharem = `${footballfiledlayoutf.length}`;
   }
       let showmoref: Map<any, any> = new Map([[String.fromCharCode(97,99,107,95,119,95,54,55,0),723], [String.fromCharCode(115,108,111,119,95,57,95,54,0),14], [String.fromCharCode(120,95,51,54,95,121,109,105,110,112,117,116,0),488]]);
       let chartC: Array<any> = [29, 917, 123];
       let toponH: Array<any> = [83, 473];
      while (showmoref.get(`${chartC.length}`) == null) {
         chartC = [showmoref.size ^ 1];
         break;
      }
       let awayiconJ = true;
       let privacyc = false;
         showmoref = new Map([[`${showmoref.size}`, (showmoref.size << (Math.min(3, Math.abs((privacyc ? 2 : 5)))))]]);
      let backiconmaskg = 5553403 >= toponH.length;
      do {
         toponH.push(((privacyc ? 3 : 3) & (awayiconJ ? 5 : 3)));
         if (backiconmaskg) {
            break;
         }
      } while (backiconmaskg && ((toponH.length | 1) == 3 && (showmoref.size | 1) == 1));
         toponH = [chartC.length];
      if (!privacyc) {
         awayiconJ = 66 > showmoref.size;
      }
      let traminif = awayiconJ ? !awayiconJ : awayiconJ;
      do {
          let awayiconn = 3;
          let iconscheduleW = 3.0;
          let greyarrowupP = String.fromCharCode(102,100,99,116,120,95,103,95,53,57,0);
          let tickedv = 5.0;
          let adultC = true;
         awayiconJ = greyarrowupP.startsWith(`${iconscheduleW}`);
         awayiconn >>= Math.min(5, Math.abs(1 / (Math.max(awayiconn, 9))));
         iconscheduleW /= Math.max(1, (parseFloat(`${parseInt(`${tickedv}`) - (adultC ? 2 : 2)}`)));
         greyarrowupP += `${1 - parseInt(`${tickedv}`)}`;
         adultC = !adultC && awayiconn >= 15;
         if (traminif) {
            break;
         }
      } while (((2 - showmoref.size) == 3 || !awayiconJ) && traminif);
          let dropdownz = String.fromCharCode(119,105,116,104,111,117,116,95,111,95,51,0);
         chartC.push(3 >> (Math.min(4, dropdownz.length)));
      if (!awayiconJ) {
         awayiconJ = toponH.includes(awayiconJ);
      }
      actionsJ = [homeplayerb.length >> (Math.min(1, mountingg.length))];
   while (mountingg == phonesharem) {
      phonesharem += "3";
      break;
   }
   for (let n = 0; n < 2; n++) {
      homeplayerb += `${(modityw == String.fromCharCode(48,0) ? actionsJ.length : modityw.length)}`;
   }
   if ((2.57 + send0) <= 3.94) {
       let countdownf = 0.0;
       let iconclosewhiteC = String.fromCharCode(112,111,108,108,105,110,103,95,107,95,57,50,0);
          let minivodJ = String.fromCharCode(114,101,103,105,115,116,101,114,101,100,95,53,95,50,0);
         countdownf *= parseInt(`${countdownf}`) & 1;
         minivodJ = `${minivodJ.length}`;
         iconclosewhiteC = `${parseInt(`${countdownf}`)}`;
      for (let r = 0; r < 3; r++) {
         iconclosewhiteC += `${(iconclosewhiteC == String.fromCharCode(49,0) ? iconclosewhiteC.length : parseInt(`${countdownf}`))}`;
      }
      if (iconclosewhiteC.length == 1) {
         countdownf /= Math.max(1, 3);
      }
          let xvoda = true;
          let chatbotphotoy: Map<any, any> = new Map([[String.fromCharCode(114,95,51,50,0),String.fromCharCode(98,95,54,56,95,112,114,101,100,105,99,116,111,114,0)], [String.fromCharCode(107,95,57,56,95,114,111,117,116,101,115,0),String.fromCharCode(97,100,111,112,116,101,100,95,102,95,51,49,0)], [String.fromCharCode(105,102,97,100,100,114,115,95,109,95,50,54,0),String.fromCharCode(117,95,49,56,95,117,110,98,105,97,115,0)]]);
          let singleQ = 2;
         iconclosewhiteC += `${singleQ}`;
         xvoda = chatbotphotoy.size < 8 || !xvoda;
         chatbotphotoy = new Map([[`${chatbotphotoy.size}`, chatbotphotoy.size]]);
         singleQ ^= (2 - (xvoda ? 5 : 1));
      if (2 <= (5 - iconclosewhiteC.length)) {
          let template_b2 = 2;
          let privacyO = String.fromCharCode(114,101,112,115,116,114,95,110,95,54,53,0);
         iconclosewhiteC += `${privacyO.length}`;
         template_b2 /= Math.max(1, template_b2);
         privacyO += `${template_b2 & template_b2}`;
      }
      modityw += `${parseInt(`${reactnavigation2}`)}`;
   }
      mountingg = `${parseInt(`${send0}`)}`;
   let sellmathbackgroundO = actionsJ.length <= 5020114;
   do {
      actionsJ.push((String.fromCharCode(109,0) == iconwechatr ? parseInt(`${send0}`) : iconwechatr.length));
      if (sellmathbackgroundO) {
         break;
      }
   } while (sellmathbackgroundO && (modityw.length > actionsJ.length));
      modityw = "2";
      reactnavigation2 -= 3 * indicatory;
   for (let s = 0; s < 3; s++) {
      reactnavigation2 /= Math.max(2, 2);
   }
      handleRefresh();
    }
  };

  const checkConnection = useCallback(async () => {
       let tempnodatag = String.fromCharCode(97,97,99,100,101,99,95,52,95,51,54,0);
    let guide7 = 2;
    let libreactperfloggerjnik = 4;
    let javat = 0;
    let bottomo = 3;
    let statsnomoredataO = String.fromCharCode(115,101,97,116,95,49,95,51,54,0);
    let rewardvideon = false;
    let uimanagern = String.fromCharCode(115,116,114,105,100,101,98,95,113,95,54,56,0);
    let downloadingC = String.fromCharCode(116,95,55,55,95,97,117,110,105,110,105,116,0);
    let dragclosen: Map<any, any> = new Map([[String.fromCharCode(100,101,108,101,116,101,95,122,95,55,53,0),String.fromCharCode(102,97,105,108,95,120,95,50,54,0)], [String.fromCharCode(101,111,99,100,95,104,95,52,55,0),String.fromCharCode(102,116,115,121,121,95,111,95,57,49,0)], [String.fromCharCode(110,111,110,110,117,108,108,98,117,102,102,101,114,95,55,95,56,57,0),String.fromCharCode(100,95,52,53,95,110,111,98,111,100,121,0)]]);
    let iconnewchatj = 5.0;
    let showlessF = 0.0;
    let screenp = String.fromCharCode(112,114,111,109,105,115,101,95,98,95,50,56,0);
    let common6 = 4.0;
    let selectT = String.fromCharCode(99,111,99,111,115,100,120,95,113,95,57,56,0);
    let combinedt = 3.0;
   if ((5 + guide7) <= 3 && (javat + guide7) <= 5) {
      javat %= Math.max(2, 1);
   }
      downloadingC = `${dragclosen.size}`;
      rewardvideon = statsnomoredataO.length > 22;
      libreactperfloggerjnik *= downloadingC.length;
   while (statsnomoredataO == tempnodatag) {
       let libjsiR = String.fromCharCode(108,111,111,107,97,115,105,100,101,95,55,95,57,48,0);
       let buildV = 4;
       let sharemodal6 = String.fromCharCode(118,116,97,103,95,110,95,50,57,0);
       let iconchatsendM = 1.0;
       let iconpipshrinkK = 0.0;
       let iconwatchnowL = String.fromCharCode(116,109,109,98,114,95,52,95,53,51,0);
       let statsy = String.fromCharCode(100,111,99,115,105,122,101,95,55,95,53,0);
          let penaltygoaln = 3;
          let refreshborderlessu = String.fromCharCode(121,95,50,50,95,114,101,99,111,103,110,105,122,101,114,0);
          let libavdeviceK = false;
         buildV <<= Math.min(Math.abs((penaltygoaln - (libavdeviceK ? 4 : 2))), 4);
         penaltygoaln |= refreshborderlessu.length - refreshborderlessu.length;
      let libavutilP = 5086199.0 <= iconpipshrinkK;
      do {
         iconpipshrinkK -= parseFloat(`${buildV}`);
         if (libavutilP) {
            break;
         }
      } while (libavutilP && ((iconpipshrinkK * buildV) == 5.74));
      for (let s = 0; s < 1; s++) {
         sharemodal6 += `${3 % (Math.max(3, statsy.length))}`;
      }
         iconchatsendM *= parseFloat(`${iconwatchnowL.length}`);
          let save4 = 2.0;
          let shirth: Array<any> = [756, 928];
          let libsentryI = false;
         sharemodal6 = `${libjsiR.length}`;
         save4 += parseFloat(`${parseInt(`${save4}`) << (Math.min(shirth.length, 5))}`);
         shirth = [shirth.length];
         libsentryI = 30.22 <= save4 && 89 <= shirth.length;
      while ((5 >> (Math.min(1, Math.abs(buildV)))) <= 2) {
         buildV &= parseInt(`${iconchatsendM}`);
         break;
      }
         buildV *= 1;
      if (sharemodal6.length >= 3) {
         libjsiR += `${iconwatchnowL.length}`;
      }
      let sportx = 8942749.0 >= iconpipshrinkK;
      do {
         iconpipshrinkK /= Math.max(parseFloat(`${parseInt(`${iconchatsendM}`) << (Math.min(1, Math.abs(2)))}`), 1);
         if (sportx) {
            break;
         }
      } while ((5.56 >= iconpipshrinkK) && sportx);
      let forwardi = sharemodal6.length <= 7389351;
      do {
          let u_view7 = 1.0;
          let temperatureC = 4.0;
         sharemodal6 += `${parseInt(`${iconchatsendM}`)}`;
         u_view7 += parseInt(`${u_view7}`) << (Math.min(4, Math.abs(parseInt(`${temperatureC}`))));
         temperatureC *= parseFloat(`${parseInt(`${temperatureC}`) & 3}`);
         if (forwardi) {
            break;
         }
      } while (forwardi && (parseInt(`${iconpipshrinkK}`) <= sharemodal6.length));
       let macauJ = 3.0;
       let basketballmatchdetailbgH = String.fromCharCode(115,112,97,116,105,97,108,95,98,95,52,49,0);
       let baseT = String.fromCharCode(109,109,99,111,95,52,95,56,52,0);
      for (let j = 0; j < 1; j++) {
         macauJ += (parseFloat(`${String.fromCharCode(88,0) == sharemodal6 ? sharemodal6.length : parseInt(`${iconpipshrinkK}`)}`));
      }
      if (macauJ == parseFloat(`${baseT.length}`)) {
          let actionsD = 5.0;
         macauJ *= parseFloat(`${2}`);
         actionsD -= parseFloat(`${parseInt(`${actionsD}`)}`);
      }
      tempnodatag = "3";
      break;
   }
       let floaterR: Map<any, any> = new Map([[String.fromCharCode(112,111,115,105,116,105,111,110,95,109,95,55,55,0),true ], [String.fromCharCode(114,111,98,111,108,101,99,116,114,105,99,95,99,95,56,0),false ], [String.fromCharCode(98,95,49,49,95,117,110,105,111,110,0),false ]]);
       let floaterk: Array<any> = [18, 441, 81];
       let reactnavigationc: Array<any> = [794, 418];
      let gradlewr = 9371608 >= floaterk.length;
      do {
         floaterk.push(reactnavigationc.length ^ floaterk.length);
         if (gradlewr) {
            break;
         }
      } while (gradlewr && (!reactnavigationc.includes(floaterk.length)));
      let championL = floaterk.length <= 6480476;
      do {
          let libcrashsdku = String.fromCharCode(109,97,115,107,101,100,95,102,95,53,57,0);
         floaterk.push(reactnavigationc.length * 1);
         libcrashsdku = `${libcrashsdku.length}`;
         if (championL) {
            break;
         }
      } while (((reactnavigationc.length << (Math.min(Math.abs(5), 3))) > 1 && 4 > (5 << (Math.min(2, reactnavigationc.length)))) && championL);
      bottomo += (String.fromCharCode(109,0) == statsnomoredataO ? statsnomoredataO.length : javat);
      floaterR = new Map([[`${floaterR.size}`, floaterR.size]]);
   while ((showlessF - parseFloat(`${uimanagern.length}`)) >= 4.86) {
      uimanagern += `${tempnodatag.length >> (Math.min(Math.abs(3), 5))}`;
      break;
   }
      dragclosen.set(uimanagern, libreactperfloggerjnik - uimanagern.length);
      iconnewchatj /= Math.max(4, parseFloat(`${downloadingC.length}`));

    const state = await NetInfo.fetch();

       let iconplaye = 5.0;
       let configu: Array<any> = [String.fromCharCode(103,95,52,52,95,115,99,101,110,101,99,117,116,0), String.fromCharCode(117,110,99,111,109,112,114,101,115,115,101,100,95,103,95,57,49,0), String.fromCharCode(112,95,48,95,108,111,103,0)];
       let targetc: Array<any> = [String.fromCharCode(115,95,51,54,95,109,111,110,111,0), String.fromCharCode(119,114,105,116,97,98,108,101,95,116,95,51,53,0)];
         configu.push(parseInt(`${iconplaye}`));
         configu = [targetc.length];
          let refreshA: Map<any, any> = new Map([[String.fromCharCode(98,111,114,105,110,103,115,115,108,95,115,95,55,54,0),848], [String.fromCharCode(122,108,105,98,112,114,105,109,101,95,54,95,54,57,0),30], [String.fromCharCode(113,95,55,52,95,99,108,116,111,115,116,114,0),310]]);
          let cornerkickI = String.fromCharCode(107,95,53,50,95,100,97,116,97,98,97,115,101,115,0);
         targetc.push(refreshA.size % 2);
         refreshA.set(cornerkickI, cornerkickI.length >> (Math.min(Math.abs(3), 3)));
         iconplaye -= parseFloat(`${2 * parseInt(`${iconplaye}`)}`);
      let fullscreenminx = configu.length <= 6494792;
      do {
          let j_hashe: Array<any> = [68, 96];
         configu.push(1 << (Math.min(2, targetc.length)));
         j_hashe.push(j_hashe.length);
         if (fullscreenminx) {
            break;
         }
      } while (((configu.length % 3) <= 5 && (configu.length % 3) <= 5) && fullscreenminx);
      for (let j = 0; j < 2; j++) {
         configu.push(3);
      }
       let iconsaveimageQ = 5.0;
       let javaD = 4.0;
      for (let h = 0; h < 3; h++) {
         iconplaye *= parseFloat(`${configu.length << (Math.min(Math.abs(1), 2))}`);
      }
         targetc = [configu.length + parseInt(`${iconplaye}`)];
      iconnewchatj /= Math.max(parseFloat(`${2 * parseInt(`${iconplaye}`)}`), 3);
   if (1 > bottomo) {
       let selectS: Array<any> = [String.fromCharCode(104,95,54,55,95,98,101,105,103,110,101,116,0), String.fromCharCode(117,95,52,51,95,115,99,97,108,105,110,103,0), String.fromCharCode(117,99,104,97,114,95,48,95,53,54,0)];
       let penaltyg: Map<any, any> = new Map([[String.fromCharCode(101,95,56,48,95,98,108,117,114,114,97,98,108,101,0),486], [String.fromCharCode(118,97,114,105,97,110,116,115,95,104,95,52,0),595]]);
       let runtimeI = String.fromCharCode(113,111,115,95,102,95,56,54,0);
       let libfbjniW = String.fromCharCode(105,110,115,101,114,116,105,111,110,95,56,95,52,55,0);
          let whistleorange1 = true;
         runtimeI = `${selectS.length - penaltyg.size}`;
         whistleorange1 = !whistleorange1;
      if (libfbjniW == String.fromCharCode(50,0)) {
          let leakcheckerk = String.fromCharCode(100,101,118,101,108,111,112,101,114,95,121,95,50,54,0);
          let privacyl = false;
          let buttonK = true;
          let iconsharefriendsr = 5.0;
         runtimeI = `${libfbjniW.length}`;
         leakcheckerk = `${((buttonK ? 2 : 4))}`;
         privacyl = !buttonK;
         iconsharefriendsr *= 3 ^ leakcheckerk.length;
      }
       let minimizeU = 3;
         minimizeU ^= 3 + runtimeI.length;
          let bottomm = 3.0;
          let iconwechato: Array<any> = [156, 371];
         libfbjniW += `${libfbjniW.length - 1}`;
         bottomm += parseFloat(`${1}`);
         iconwechato.push(iconwechato.length);
      guide7 %= Math.max(javat & statsnomoredataO.length, 4);
   }
      downloadingC += `${guide7 & downloadingC.length}`;
   if (uimanagern.length <= 4 && statsnomoredataO == String.fromCharCode(80,0)) {
      uimanagern = `${statsnomoredataO.length}`;
   }
       let lineq = false;
       let giftS = String.fromCharCode(97,95,52,49,95,112,112,102,108,97,103,115,0);
      if (lineq) {
         lineq = lineq || giftS.length < 93;
      }
         giftS = `${giftS.length - 3}`;
      let goalT = giftS.length >= 8087868;
      do {
          let goallogo7: Map<any, any> = new Map([[String.fromCharCode(98,95,51,56,95,106,97,99,107,0),855], [String.fromCharCode(102,111,114,109,97,116,116,101,100,95,110,95,53,53,0),27], [String.fromCharCode(102,105,108,108,105,110,95,107,95,54,54,0),731]]);
         giftS = `${(goallogo7.size ^ (lineq ? 3 : 3))}`;
         if (goalT) {
            break;
         }
      } while ((!lineq) && goalT);
      while (lineq || giftS.length == 4) {
         giftS = `${((lineq ? 4 : 4) | giftS.length)}`;
         break;
      }
       let libswresamplet = 2.0;
       let playercommonx = 2.0;
      let nbatrophyk = 5219121.0 >= libswresamplet;
      do {
         libswresamplet += giftS.length;
         if (nbatrophyk) {
            break;
         }
      } while (nbatrophyk && (libswresamplet == 1.90));
      rewardvideon = showlessF <= 29.41;
   for (let h = 0; h < 2; h++) {
      downloadingC = "2";
   }
   let iconcalendar6 = 9856995 <= dragclosen.size;
   do {
      dragclosen = new Map([[`${bottomo}`, screenp.length + 1]]);
      if (iconcalendar6) {
         break;
      }
   } while ((downloadingC.endsWith(`${dragclosen.size}`)) && iconcalendar6);
   let videojsq = guide7 >= 6730988;
   do {
      guide7 += 3;
      if (videojsq) {
         break;
      }
   } while (((guide7 % (Math.max(downloadingC.length, 5))) > 3) && videojsq);
   while (5 > (1 >> (Math.min(5, statsnomoredataO.length))) && (statsnomoredataO.length >> (Math.min(Math.abs(1), 4))) > 4) {
      javat /= Math.max(1, dragclosen.size);
      break;
   }
    const offline = !(state.isConnected && state.isInternetReachable);

   if (5 >= uimanagern.length || 5 >= screenp.length) {
      screenp += `${tempnodatag.length * libreactperfloggerjnik}`;
   }
   let smallbrightnessT = 5936165 >= screenp.length;
   do {
      screenp = `${((rewardvideon ? 1 : 3))}`;
      if (smallbrightnessT) {
         break;
      }
   } while (smallbrightnessT && (screenp.includes(`${iconnewchatj}`)));
   let libruntimeexecutorL = uimanagern == String.fromCharCode(57,122,113,0);
   do {
       let showlessZ = String.fromCharCode(109,95,53,51,95,107,110,111,98,0);
       let halffieldimagey = 2.0;
       let inactiveY = 2;
       let libtobl = 5.0;
          let robotoQ = false;
          let libsentry2 = String.fromCharCode(97,95,49,52,95,111,102,102,115,0);
          let iconpipexpandk = String.fromCharCode(98,105,116,114,101,97,100,101,114,95,97,95,53,54,0);
         showlessZ = `${parseInt(`${halffieldimagey}`) % (Math.max(showlessZ.length, 4))}`;
         robotoQ = libsentry2 == String.fromCharCode(119,0);
         libsentry2 = `${((robotoQ ? 1 : 2))}`;
         iconpipexpandk = `${3 ^ libsentry2.length}`;
      while (2.81 <= (inactiveY * libtobl)) {
         inactiveY *= inactiveY * parseInt(`${halffieldimagey}`);
         break;
      }
         halffieldimagey -= parseFloat(`${2}`);
         libtobl /= Math.max(3, parseInt(`${halffieldimagey}`));
      if (2 <= (inactiveY >> (Math.min(Math.abs(2), 2)))) {
         showlessZ += `${2 - parseInt(`${libtobl}`)}`;
      }
      if (inactiveY < showlessZ.length) {
         showlessZ = `${(String.fromCharCode(106,0) == showlessZ ? parseInt(`${halffieldimagey}`) : showlessZ.length)}`;
      }
      while (4.21 >= (5.27 / (Math.max(8, halffieldimagey))) || 3 >= (inactiveY * 5)) {
         halffieldimagey *= parseFloat(`${2 / (Math.max(parseInt(`${libtobl}`), 1))}`);
         break;
      }
      let libsentryE = halffieldimagey >= 7049031.0;
      do {
          let button8 = String.fromCharCode(108,95,54,49,95,97,118,99,111,100,101,99,114,101,115,0);
          let iconbellU = String.fromCharCode(114,101,109,111,116,101,95,112,95,50,0);
          let circlei: Map<any, any> = new Map([[String.fromCharCode(97,118,101,114,97,103,101,105,105,114,100,95,118,95,50,51,0),270], [String.fromCharCode(105,95,49,51,95,114,109,115,105,112,114,0),41]]);
         halffieldimagey *= parseFloat(`${3}`);
         button8 += `${(String.fromCharCode(74,0) == button8 ? button8.length : iconbellU.length)}`;
         iconbellU += `${(iconbellU == String.fromCharCode(95,0) ? circlei.size : iconbellU.length)}`;
         circlei = new Map([[`${circlei.size}`, iconbellU.length / (Math.max(3, circlei.size))]]);
         if (libsentryE) {
            break;
         }
      } while (libsentryE && (showlessZ.endsWith(`${halffieldimagey}`)));
       let defaultpredictionprofile0: Array<any> = [975, 399];
       let malaysiaB = true;
          let modelsh = 0.0;
          let moonU = String.fromCharCode(114,95,54,54,95,112,111,119,0);
         malaysiaB = libtobl < 6.73;
         modelsh /= Math.max(1 << (Math.min(4, moonU.length)), 3);
         moonU = `${moonU.length & 2}`;
         defaultpredictionprofile0 = [1];
      uimanagern += `${statsnomoredataO.length}`;
      if (libruntimeexecutorL) {
         break;
      }
   } while (libruntimeexecutorL && (iconnewchatj == 2.12));
   for (let v = 0; v < 1; v++) {
       let predictionC = String.fromCharCode(105,115,114,101,97,100,111,110,108,121,95,99,95,57,51,0);
       let nativeexW = String.fromCharCode(101,114,114,108,111,103,95,110,95,57,48,0);
       let friendsL = 2;
       let gmailk = false;
       let libreactnativejni7 = 2;
          let downloadX = String.fromCharCode(117,95,48,95,117,115,116,111,109,0);
          let righto = 5.0;
         gmailk = nativeexW.length >= 86;
         downloadX += `${3 / (Math.max(6, parseInt(`${righto}`)))}`;
         righto -= 2 >> (Math.min(3, downloadX.length));
      let minivod9 = gmailk ? !gmailk : gmailk;
      do {
         gmailk = 10 <= libreactnativejni7;
         if (minivod9) {
            break;
         }
      } while (((friendsL / 4) == 4) && minivod9);
         nativeexW = `${((gmailk ? 2 : 1) & libreactnativejni7)}`;
          let long_dyc = 5.0;
         libreactnativejni7 %= Math.max(friendsL % 1, 1);
         long_dyc += parseFloat(`${parseInt(`${long_dyc}`)}`);
       let countdownt = 0.0;
      while (predictionC.endsWith(`${libreactnativejni7}`)) {
          let iconarrowrightorangen = 1.0;
          let away7 = true;
         predictionC += `${parseInt(`${iconarrowrightorangen}`) * libreactnativejni7}`;
         iconarrowrightorangen += ((away7 ? 3 : 4) | 3);
         break;
      }
      if (libreactnativejni7 == 5) {
         predictionC = `${friendsL}`;
      }
         countdownt *= libreactnativejni7;
      if ((nativeexW.length * 2) >= 2 && 4 >= (friendsL * 2)) {
          let contexth = 5.0;
         nativeexW += `${nativeexW.length >> (Math.min(2, predictionC.length))}`;
         contexth /= Math.max(4, parseFloat(`${2}`));
      }
         libreactnativejni7 |= ((gmailk ? 1 : 3) * friendsL);
      let bellO = 4925577 <= libreactnativejni7;
      do {
         libreactnativejni7 &= 1 + predictionC.length;
         if (bellO) {
            break;
         }
      } while ((3 <= libreactnativejni7) && bellO);
         libreactnativejni7 -= 2 - libreactnativejni7;
      let mintegral5 = 6988276 >= friendsL;
      do {
          let ewardedR: Array<any> = [564, 715, 946];
          let renewL = 0.0;
         friendsL >>= Math.min(4, Math.abs(parseInt(`${renewL}`) >> (Math.min(5, Math.abs(3)))));
         ewardedR.push(ewardedR.length / (Math.max(ewardedR.length, 6)));
         renewL /= Math.max(2, 1);
         if (mintegral5) {
            break;
         }
      } while ((1 < (friendsL ^ predictionC.length) || (1 ^ friendsL) < 4) && mintegral5);
      if (!nativeexW.includes(`${countdownt}`)) {
         countdownt *= nativeexW.length;
      }
      let cornerkickd = 7160237.0 <= countdownt;
      do {
          let videovarB: Map<any, any> = new Map([[String.fromCharCode(103,101,110,104,95,48,95,51,49,0),String.fromCharCode(116,117,110,110,101,108,101,100,95,106,95,51,55,0)], [String.fromCharCode(103,97,116,101,100,95,104,95,51,55,0),String.fromCharCode(99,95,56,51,95,110,101,103,97,116,101,0)], [String.fromCharCode(107,95,56,50,95,122,98,117,102,0),String.fromCharCode(114,105,100,103,101,95,52,95,50,52,0)]]);
          let embedR = String.fromCharCode(120,95,50,49,95,112,114,101,118,101,110,116,101,100,0);
          let awayplayery = false;
          let topic5 = String.fromCharCode(116,103,99,97,108,108,115,95,53,95,51,56,0);
          let change1 = String.fromCharCode(111,95,49,57,95,111,102,102,101,114,0);
         countdownt += videovarB.size << (Math.min(Math.abs(1), 4));
         videovarB.set(embedR, 2 ^ embedR.length);
         awayplayery = String.fromCharCode(106,0) == change1;
         topic5 += `${(change1 == String.fromCharCode(50,0) ? change1.length : (awayplayery ? 2 : 2))}`;
         if (cornerkickd) {
            break;
         }
      } while (cornerkickd && (!gmailk));
      iconnewchatj += (parseFloat(`${screenp == String.fromCharCode(77,0) ? screenp.length : parseInt(`${iconnewchatj}`)}`));
   }
   let controlst = rewardvideon ? !rewardvideon : rewardvideon;
   do {
      rewardvideon = showlessF > 78.79;
      if (controlst) {
         break;
      }
   } while (controlst && (tempnodatag.length >= 4));
   if ((guide7 - parseInt(`${showlessF}`)) >= 3 && 5.32 >= (4.26 - showlessF)) {
       let iconbackwhiteF = false;
       let default_gaL = String.fromCharCode(110,95,55,56,95,112,105,118,111,116,0);
       let gesturesZ = false;
       let libtobg = false;
       let footballfiledlayoutA = String.fromCharCode(104,95,55,49,95,115,119,105,112,101,100,0);
         iconbackwhiteF = !gesturesZ;
       let libfabricjnim = 1.0;
       let nodej = 1.0;
      while (4 > (footballfiledlayoutA.length << (Math.min(Math.abs(1), 2)))) {
         footballfiledlayoutA += `${((iconbackwhiteF ? 1 : 5) % (Math.max(5, parseInt(`${nodej}`))))}`;
         break;
      }
          let hejiQ = 4.0;
          let ccdfbdabcabbbedbc: Map<any, any> = new Map([[String.fromCharCode(108,115,112,112,111,108,121,102,95,110,95,50,56,0),String.fromCharCode(97,112,112,114,111,118,101,95,98,95,54,53,0)], [String.fromCharCode(120,95,50,48,95,105,100,101,110,116,105,116,105,121,0),String.fromCharCode(111,95,57,95,109,97,103,121,0)]]);
          let sportsD = String.fromCharCode(120,95,51,57,95,112,111,111,108,114,101,102,0);
         libtobg = 28.33 > nodej || 86 > footballfiledlayoutA.length;
         hejiQ *= parseFloat(`${sportsD.length ^ parseInt(`${hejiQ}`)}`);
         ccdfbdabcabbbedbc.set(`${sportsD}`, 3);
         nodej /= Math.max(parseInt(`${nodej}`) ^ 2, 1);
      let sharemodal_ = 5974736 <= default_gaL.length;
      do {
         default_gaL += `${parseInt(`${nodej}`) << (Math.min(Math.abs(parseInt(`${libfabricjnim}`)), 2))}`;
         if (sharemodal_) {
            break;
         }
      } while (sharemodal_ && (default_gaL.length < nodej));
      if (gesturesZ) {
          let relatedy = 5.0;
          let screenI = 4;
          let stats9 = false;
         libtobg = nodej < footballfiledlayoutA.length;
         relatedy -= parseFloat(`${parseInt(`${relatedy}`) + screenI}`);
         screenI <<= Math.min(4, Math.abs(((stats9 ? 1 : 3) - screenI)));
         stats9 = screenI == 46;
      }
         iconbackwhiteF = iconbackwhiteF && 72.36 < nodej;
      for (let u = 0; u < 2; u++) {
         default_gaL += `${((iconbackwhiteF ? 2 : 2))}`;
      }
         footballfiledlayoutA += `${footballfiledlayoutA.length + 1}`;
         nodej /= Math.max((footballfiledlayoutA == String.fromCharCode(52,0) ? (libtobg ? 3 : 4) : footballfiledlayoutA.length), 1);
          let shrunkR = String.fromCharCode(97,109,101,120,95,103,95,52,56,0);
         gesturesZ = (37 == ((gesturesZ ? 37 : shrunkR.length) + shrunkR.length));
      let routerv = 4925567.0 <= nodej;
      do {
         nodej += (2 ^ (iconbackwhiteF ? 4 : 2));
         if (routerv) {
            break;
         }
      } while ((gesturesZ) && routerv);
         default_gaL = `${((iconbackwhiteF ? 2 : 5))}`;
          let desc9: Map<any, any> = new Map([[String.fromCharCode(110,95,53,54,95,105,108,98,99,100,97,116,97,0),false ], [String.fromCharCode(99,104,101,99,107,97,115,109,95,51,95,54,51,0),false ], [String.fromCharCode(110,105,100,115,95,111,95,49,0),false ]]);
          let libreactx: Map<any, any> = new Map([[String.fromCharCode(97,95,54,49,95,114,101,102,105,110,101,114,0),String.fromCharCode(112,97,116,116,101,114,110,115,95,111,95,56,0)], [String.fromCharCode(109,95,55,49,95,114,97,110,103,101,0),String.fromCharCode(108,101,103,101,110,100,95,49,95,53,52,0)], [String.fromCharCode(108,95,52,51,95,99,111,115,105,103,110,97,116,111,114,121,0),String.fromCharCode(110,97,118,105,103,97,116,105,111,110,98,97,114,95,120,95,53,51,0)]]);
         libfabricjnim += parseInt(`${nodej}`) ^ 2;
         desc9 = new Map([[`${desc9.size}`, desc9.size + libreactx.size]]);
         libreactx.set(`${desc9.size}`, libreactx.size);
      showlessF *= parseFloat(`${3 / (Math.max(3, parseInt(`${iconnewchatj}`)))}`);
   }
   while (2 == statsnomoredataO.length) {
      dragclosen.set(`${libreactperfloggerjnik}`, libreactperfloggerjnik);
      break;
   }
      uimanagern += `${(screenp == String.fromCharCode(102,0) ? parseInt(`${iconnewchatj}`) : screenp.length)}`;
   let mailS = downloadingC == String.fromCharCode(119,55,56,111,122,55,95,116,0);
   do {
       let darky = 0.0;
       let eyeopenM = false;
       let smallt = true;
       let math2 = String.fromCharCode(99,108,97,117,115,101,115,95,117,95,53,0);
       let predictionwinB: Array<any> = [970, 830];
      let basketballmatchdetailbg7 = 9192918.0 >= darky;
      do {
          let whistleS = 4.0;
          let analyticsR: Array<any> = [674, 173];
          let giflivestreaming5 = String.fromCharCode(100,95,57,48,95,103,114,97,121,0);
          let libffmpegkitQ = String.fromCharCode(99,97,117,115,101,95,97,95,54,54,0);
          let launch2 = 1.0;
         darky *= parseInt(`${launch2}`);
         whistleS /= Math.max(parseFloat(`${parseInt(`${whistleS}`) / (Math.max(2, 10))}`), 4);
         analyticsR.push(1 % (Math.max(4, analyticsR.length)));
         giflivestreaming5 += `${2 >> (Math.min(5, analyticsR.length))}`;
         libffmpegkitQ = `${1 | analyticsR.length}`;
         launch2 *= giflivestreaming5.length;
         if (basketballmatchdetailbg7) {
            break;
         }
      } while (basketballmatchdetailbg7 && ((parseInt(`${darky}`) / (Math.max(predictionwinB.length, 2))) < 4));
      while (math2.length <= predictionwinB.length) {
          let yellowvideoliveS = 1;
          let acceptedU = String.fromCharCode(99,104,97,116,115,95,51,95,55,54,0);
          let placeholderh: Array<any> = [779, 28, 34];
          let with_3G = true;
         predictionwinB.push((parseInt(`${darky}`) - (smallt ? 4 : 1)));
         yellowvideoliveS -= yellowvideoliveS ^ 1;
         acceptedU += "1";
         placeholderh.push(placeholderh.length | 3);
         with_3G = placeholderh.length >= 23 && with_3G;
         break;
      }
      if (darky < 2.69) {
         smallt = (predictionwinB.length * darky) > 59.47;
      }
         predictionwinB = [2 - parseInt(`${darky}`)];
          let crossc = String.fromCharCode(97,108,108,111,99,97,116,111,114,115,95,98,95,52,52,0);
         darky -= ((eyeopenM ? 1 : 3) & parseInt(`${darky}`));
         crossc += `${1 ^ crossc.length}`;
          let saveI = String.fromCharCode(100,105,109,105,110,115,105,111,110,115,95,56,95,57,53,0);
         math2 = `${3 & math2.length}`;
         saveI += "2";
       let wifirouterd = false;
       let transferw = true;
      let anythinkt = 7112958.0 >= darky;
      do {
         darky /= Math.max((2 * (eyeopenM ? 5 : 3)), 3);
         if (anythinkt) {
            break;
         }
      } while (((darky + 2.76) >= 1.44) && anythinkt);
      if (!math2.startsWith(`${wifirouterd}`)) {
         wifirouterd = !smallt;
      }
         wifirouterd = transferw || smallt;
      for (let o = 0; o < 2; o++) {
         predictionwinB = [((smallt ? 4 : 3) | 1)];
      }
         wifirouterd = 63 < predictionwinB.length;
      if (!wifirouterd) {
          let qaagn = String.fromCharCode(115,117,98,112,105,120,101,108,95,52,95,55,57,0);
          let heji8 = String.fromCharCode(97,108,103,111,114,95,101,95,55,54,0);
          let mbjscommonL = 2.0;
          let stylem = true;
         wifirouterd = 35 > math2.length;
         qaagn += `${parseInt(`${mbjscommonL}`) - 2}`;
         heji8 += `${heji8.length}`;
         mbjscommonL -= parseInt(`${mbjscommonL}`) & 1;
         stylem = mbjscommonL == qaagn.length;
      }
      while ((1.82 + darky) <= 4.28 || darky <= 1.82) {
         darky /= Math.max(3, ((smallt ? 1 : 3) >> (Math.min(4, Math.abs((eyeopenM ? 4 : 5))))));
         break;
      }
      for (let q = 0; q < 1; q++) {
          let chart6: Map<any, any> = new Map([[String.fromCharCode(99,111,111,114,100,115,95,101,95,54,49,0),91], [String.fromCharCode(104,97,115,104,116,97,98,108,101,95,100,95,51,56,0),687]]);
         predictionwinB.push((1 & (eyeopenM ? 5 : 4)));
         chart6.set(`${chart6.size}`, 3);
      }
      downloadingC += `${parseInt(`${showlessF}`) >> (Math.min(2, Math.abs(1)))}`;
      if (mailS) {
         break;
      }
   } while (mailS && (!downloadingC.startsWith(`${javat}`)));
    setIsOffline(offline);

   if ((dragclosen.size + 1) >= 4) {
       let assistF = false;
       let modityr = 2.0;
      let resend0 = assistF ? !assistF : assistF;
      do {
         assistF = !assistF && modityr <= 87.33;
         if (resend0) {
            break;
         }
      } while ((assistF) && resend0);
      for (let x = 0; x < 2; x++) {
         modityr += (parseFloat(`${parseInt(`${modityr}`) & (assistF ? 2 : 4)}`));
      }
         modityr -= parseFloat(`${1 % (Math.max(7, parseInt(`${modityr}`)))}`);
       let executoru: Map<any, any> = new Map([[String.fromCharCode(99,104,101,99,107,112,111,105,110,116,115,95,111,95,54,51,0),706], [String.fromCharCode(115,95,53,50,95,109,111,110,111,116,111,110,121,0),143], [String.fromCharCode(117,95,51,52,0),268]]);
      while (modityr == 1.58 || (modityr * 1.58) == 1.59) {
         assistF = null == executoru.get(`${modityr}`);
         break;
      }
      let profileactivea = assistF ? !assistF : assistF;
      do {
         assistF = (parseInt(`${modityr}`) / (Math.max(5, executoru.size))) >= 57;
         if (profileactivea) {
            break;
         }
      } while (profileactivea && (!assistF));
      rewardvideon = 91 <= dragclosen.size;
   }
   for (let o = 0; o < 1; o++) {
      dragclosen.set(screenp, parseInt(`${showlessF}`));
   }
   let targetS = 7270006 >= tempnodatag.length;
   do {
       let placeholderq = 3;
       let cornershootT = 1.0;
         cornershootT += parseFloat(`${parseInt(`${cornershootT}`) >> (Math.min(1, Math.abs(2)))}`);
      if (2 == (placeholderq >> (Math.min(Math.abs(3), 3))) || 5 == (placeholderq ^ 3)) {
          let championU = false;
          let dangerL = true;
          let taiwanV = 0.0;
          let inouttargetyellowN: Array<any> = [811, 542];
         placeholderq /= Math.max(1, parseInt(`${cornershootT}`));
         championU = taiwanV == 93.4;
         dangerL = (11 <= (inouttargetyellowN.length * (!dangerL ? inouttargetyellowN.length : 11)));
         taiwanV /= Math.max(5, inouttargetyellowN.length);
      }
      while (1 <= (2 - placeholderq) || (placeholderq & 2) <= 2) {
          let showmore1 = 5.0;
          let rewindh = 3;
          let savel: Array<any> = [971, 130];
         cornershootT *= parseFloat(`${2 >> (Math.min(Math.abs(parseInt(`${showmore1}`)), 5))}`);
         showmore1 *= 1 + savel.length;
         rewindh |= savel.length & 1;
         break;
      }
      if (3 < placeholderq) {
          let miniU = true;
          let refreshborderlessW = String.fromCharCode(100,95,54,54,95,115,97,109,112,108,101,0);
          let share0 = String.fromCharCode(111,95,52,54,95,112,97,99,107,101,116,115,0);
         placeholderq %= Math.max(2, parseInt(`${cornershootT}`));
         miniU = String.fromCharCode(68,0) == share0;
         refreshborderlessW += `${refreshborderlessW.length - 1}`;
         share0 += `${2 - refreshborderlessW.length}`;
      }
          let whitevideoliveS = 3.0;
          let gifgoalbgD = 5.0;
          let greeny = true;
         cornershootT -= parseFloat(`${1 >> (Math.min(Math.abs(parseInt(`${gifgoalbgD}`)), 4))}`);
         whitevideoliveS *= ((greeny ? 1 : 1) / (Math.max(2, parseInt(`${whitevideoliveS}`))));
         gifgoalbgD *= (parseFloat(`${(greeny ? 5 : 5) & parseInt(`${whitevideoliveS}`)}`));
         cornershootT *= parseFloat(`${placeholderq - parseInt(`${cornershootT}`)}`);
      tempnodatag = `${guide7 % (Math.max(2, parseInt(`${cornershootT}`)))}`;
      if (targetS) {
         break;
      }
   } while (targetS && ((tempnodatag.length << (Math.min(Math.abs(1), 3))) >= 2 && 1 >= (dragclosen.size << (Math.min(tempnodatag.length, 5)))));
   while (downloadingC.length >= 1) {
      uimanagern += `${(3 * (rewardvideon ? 5 : 2))}`;
      break;
   }
      uimanagern = `${libreactperfloggerjnik}`;
   for (let t = 0; t < 1; t++) {
      iconnewchatj *= parseFloat(`${2}`);
   }
       let appsn = String.fromCharCode(105,110,115,105,100,101,95,117,95,55,49,0);
       let inouttargetredh = true;
       let weibos = 5;
          let indexU = 5.0;
         appsn = `${((inouttargetredh ? 2 : 2) ^ 2)}`;
         indexU *= parseFloat(`${parseInt(`${indexU}`)}`);
          let androidS = 5.0;
         inouttargetredh = androidS >= parseFloat(`${appsn.length}`);
      for (let h = 0; h < 1; h++) {
         inouttargetredh = !inouttargetredh;
      }
      let searchbarZ = inouttargetredh ? !inouttargetredh : inouttargetredh;
      do {
         inouttargetredh = (100 == (appsn.length ^ (!inouttargetredh ? 100 : appsn.length)));
         if (searchbarZ) {
            break;
         }
      } while ((inouttargetredh) && searchbarZ);
         inouttargetredh = appsn == String.fromCharCode(49,0);
       let friends9 = String.fromCharCode(102,95,57,55,95,100,105,115,99,117,115,115,105,111,110,0);
         friends9 = `${weibos * 2}`;
      let iconmore_ = inouttargetredh ? !inouttargetredh : inouttargetredh;
      do {
          let serviceY = 0.0;
          let unselectedp: Map<any, any> = new Map([[String.fromCharCode(99,104,97,110,103,101,100,95,106,95,53,53,0),346], [String.fromCharCode(110,111,100,101,115,101,116,95,101,95,50,53,0),795]]);
          let more2: Map<any, any> = new Map([[String.fromCharCode(115,99,114,101,101,110,115,104,97,114,101,95,107,95,52,53,0),String.fromCharCode(115,116,111,112,112,105,110,103,95,107,95,56,48,0)], [String.fromCharCode(105,103,110,111,114,101,100,95,103,95,54,0),String.fromCharCode(110,97,114,114,111,119,95,105,95,49,51,0)]]);
         inouttargetredh = 83 <= weibos && 83 <= unselectedp.size;
         serviceY -= parseFloat(`${more2.size}`);
         unselectedp.set(`${serviceY}`, parseInt(`${serviceY}`) % 2);
         more2.set(`${serviceY}`, 3 << (Math.min(5, Math.abs(more2.size))));
         if (iconmore_) {
            break;
         }
      } while ((!friends9.endsWith(`${inouttargetredh}`)) && iconmore_);
      for (let h = 0; h < 2; h++) {
         friends9 = `${friends9.length}`;
      }
      guide7 <<= Math.min(Math.abs(bottomo), 1);
      javat *= 1 * statsnomoredataO.length;
   for (let u = 0; u < 2; u++) {
       let fileU = String.fromCharCode(107,95,53,56,95,103,117,97,114,97,110,116,101,101,115,0);
       let ajaxe = 2.0;
       let updatesi = String.fromCharCode(99,111,110,118,101,120,95,122,95,54,49,0);
      while (fileU.includes(updatesi)) {
         updatesi += `${parseInt(`${ajaxe}`) ^ 3}`;
         break;
      }
      for (let l = 0; l < 1; l++) {
         updatesi = `${(updatesi == String.fromCharCode(73,0) ? parseInt(`${ajaxe}`) : updatesi.length)}`;
      }
      if (updatesi.endsWith(`${ajaxe}`)) {
         ajaxe += parseFloat(`${fileU.length}`);
      }
       let changeN = 4.0;
       let smallbrightness0 = 0.0;
          let applicationr = 3.0;
         ajaxe -= parseFloat(`${fileU.length | parseInt(`${smallbrightness0}`)}`);
         applicationr += 2 / (Math.max(parseInt(`${applicationr}`), 7));
      if (3.15 >= changeN) {
          let type_59 = String.fromCharCode(101,95,50,50,95,118,101,114,105,102,105,97,98,108,101,0);
          let disconnectedlogox = 0.0;
          let private_guJ = 3.0;
          let activityC = 1;
         smallbrightness0 *= parseInt(`${smallbrightness0}`) >> (Math.min(Math.abs(parseInt(`${ajaxe}`)), 3));
         type_59 = "1";
         disconnectedlogox += parseFloat(`${activityC ^ type_59.length}`);
         private_guJ += parseInt(`${private_guJ}`);
         activityC ^= parseInt(`${private_guJ}`);
      }
          let roboto_ = 4.0;
         ajaxe *= parseFloat(`${1}`);
         roboto_ += parseInt(`${roboto_}`) >> (Math.min(Math.abs(parseInt(`${roboto_}`)), 2));
         ajaxe += parseFloat(`${parseInt(`${ajaxe}`) % (Math.max(fileU.length, 5))}`);
      while (3.35 > ajaxe) {
          let livenodatabgimgf: Map<any, any> = new Map([[String.fromCharCode(119,95,50,52,95,100,101,97,99,116,105,118,97,116,101,0),false ], [String.fromCharCode(109,95,51,49,95,111,115,116,114,101,97,109,119,114,97,112,112,101,114,0),false ], [String.fromCharCode(117,110,99,104,97,110,103,101,100,95,110,95,48,0),true ]]);
          let runtimeschedulerQ = String.fromCharCode(102,95,55,48,95,100,100,99,116,0);
          let crossF = false;
         ajaxe += (parseFloat(`${parseInt(`${smallbrightness0}`) - (crossF ? 1 : 2)}`));
         livenodatabgimgf.set(runtimeschedulerQ, 3 >> (Math.min(3, Math.abs(livenodatabgimgf.size))));
         runtimeschedulerQ = `${livenodatabgimgf.size / 1}`;
         crossF = String.fromCharCode(118,0) == runtimeschedulerQ;
         break;
      }
      bottomo <<= Math.min(Math.abs(1 * parseInt(`${showlessF}`)), 1);
   }
    if (!offline) {

      downloadingC += `${2 - parseInt(`${showlessF}`)}`;
       let footballfieldc: Map<any, any> = new Map([[String.fromCharCode(101,95,49,53,95,103,101,111,99,111,100,101,100,0),526], [String.fromCharCode(103,101,116,119,105,110,116,105,109,101,111,102,100,97,121,95,104,95,49,55,0),125], [String.fromCharCode(116,105,110,116,95,107,95,54,57,0),892]]);
      let j_titleD = footballfieldc.size >= 8344756;
      do {
          let v_titleE = String.fromCharCode(111,116,104,101,114,110,97,109,101,95,107,95,51,52,0);
          let login5 = 2.0;
         footballfieldc = new Map([[v_titleE, v_titleE.length ^ parseInt(`${login5}`)]]);
         if (j_titleD) {
            break;
         }
      } while ((1 >= (footballfieldc.size | 3) || 3 >= (footballfieldc.size | footballfieldc.size)) && j_titleD);
       let dependencyh = 3.0;
       let switch_2z = 1.0;
         footballfieldc.set(`${switch_2z}`, footballfieldc.size + 3);
      dragclosen = new Map([[`${libreactperfloggerjnik}`, 2]]);
   for (let h = 0; h < 2; h++) {
      rewardvideon = screenp.length <= 58;
   }
   for (let a = 0; a < 3; a++) {
      screenp = `${(tempnodatag == String.fromCharCode(102,0) ? tempnodatag.length : screenp.length)}`;
   }
       let frame_mx = true;
       let arrowrightwithtailB = String.fromCharCode(111,95,56,50,95,112,97,114,101,110,116,104,101,115,105,115,0);
          let basketballawayteamE = 5.0;
          let sort5 = String.fromCharCode(102,101,97,116,117,114,101,100,95,100,95,52,57,0);
         arrowrightwithtailB += `${parseInt(`${basketballawayteamE}`) & 3}`;
         basketballawayteamE /= Math.max(2, parseFloat(`${sort5.length}`));
         sort5 = `${(sort5 == String.fromCharCode(115,0) ? sort5.length : sort5.length)}`;
          let nativemoduleb = 2.0;
          let detailJ = 0;
          let settingg: Array<any> = [String.fromCharCode(114,101,97,100,99,98,95,121,95,56,52,0), String.fromCharCode(122,95,50,55,95,114,111,117,110,100,0)];
         arrowrightwithtailB += `${arrowrightwithtailB.length}`;
         nativemoduleb -= parseFloat(`${detailJ | settingg.length}`);
         detailJ <<= Math.min(2, Math.abs(parseInt(`${nativemoduleb}`)));
         settingg.push(detailJ);
      for (let e = 0; e < 3; e++) {
          let combineT = String.fromCharCode(114,95,55,95,109,101,97,115,117,114,101,109,101,110,116,115,0);
         frame_mx = 78 > combineT.length;
      }
         arrowrightwithtailB += `${(String.fromCharCode(72,0) == arrowrightwithtailB ? arrowrightwithtailB.length : (frame_mx ? 5 : 3))}`;
          let predictionactiveV = 3.0;
         frame_mx = arrowrightwithtailB.length < 2;
         predictionactiveV /= Math.max(5, parseFloat(`${parseInt(`${predictionactiveV}`) & 1}`));
         arrowrightwithtailB = `${(String.fromCharCode(55,0) == arrowrightwithtailB ? arrowrightwithtailB.length : (frame_mx ? 5 : 5))}`;
      dragclosen.set(`${guide7}`, 2);
   let manifests = uimanagern == String.fromCharCode(104,113,105,101,53,50,0);
   do {
      uimanagern += `${tempnodatag.length}`;
      if (manifests) {
         break;
      }
   } while ((!uimanagern.startsWith(`${rewardvideon}`)) && manifests);
   let bodanA = 7299118 <= dragclosen.size;
   do {
       let strings6: Array<any> = [170, 298, 994];
       let issubA = 4.0;
       let libjsiK = String.fromCharCode(115,118,97,103,95,115,95,50,54,0);
         issubA += parseInt(`${issubA}`) - strings6.length;
       let auto_9t = 3;
      for (let z = 0; z < 1; z++) {
         auto_9t += strings6.length;
      }
      while (1 > (1 >> (Math.min(4, strings6.length)))) {
         auto_9t <<= Math.min(strings6.length, 3);
         break;
      }
         strings6.push(strings6.length);
         auto_9t *= parseInt(`${issubA}`);
         strings6.push((String.fromCharCode(95,0) == libjsiK ? libjsiK.length : parseInt(`${issubA}`)));
      for (let f = 0; f < 1; f++) {
          let bnewarchdefaultsA = String.fromCharCode(110,97,118,105,95,102,95,55,56,0);
         strings6 = [1 & strings6.length];
         bnewarchdefaultsA += `${bnewarchdefaultsA.length >> (Math.min(Math.abs(1), 5))}`;
      }
      let teamp = issubA <= 8903685.0;
      do {
          let livenodatabgimg7 = 3.0;
          let searchbarm = false;
         issubA -= parseInt(`${livenodatabgimg7}`) * 1;
         livenodatabgimg7 *= ((searchbarm ? 2 : 1) & (searchbarm ? 4 : 1));
         if (teamp) {
            break;
         }
      } while (teamp && (2 == (1 - libjsiK.length)));
      dragclosen = new Map([[`${strings6.length}`, strings6.length | 3]]);
      if (bodanA) {
         break;
      }
   } while (bodanA && (2 < (dragclosen.size - 5) || (5 - tempnodatag.length) < 4));
      libreactperfloggerjnik -= javat;
      showlessF /= Math.max((parseFloat(`${String.fromCharCode(90,0) == selectT ? selectT.length : javat}`)), 3);
      handleRefresh();
    }
  }, []);

  useEffect(() => {
    setIsOffline(settingsReducer.isOffline);
  }, []);

  useFocusEffect(useCallback(() => {
    if (!settingsReducer.isOffline && settingsReducer.isOffline !== isOffline) {
      setIsOffline(settingsReducer.isOffline);
      handleRefresh();
    } else if (settingsReducer.isOffline) {
      return () => {
        setIsOffline(settingsReducer.isOffline);
      }
    }
  }, [settingsReducer.isOffline]));

  
  useEffect(() => {
    const unsubscribe = navigation.addListener('tabPress', handleTabPress);

    
    return () => unsubscribe();
  }, [isFocused]);

  const fetchPlaylist = useCallback((page: number) =>
    yysSkip.getTopic(page)
      .then((json: yysBellreminder) => {
        setTotalPage(Number(json.TotalPageCount));
        return Object.values(json.List);
      }), []);

  const {
    data: playlists,
    isSuccess,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isFetching,
  } = useInfiniteQuery(
    ['vodPlaylist'],
    ({ pageParam = 1 }) => fetchPlaylist(pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        if (lastPage === null) {
          return undefined;
        }
        const nextPage = allPages.length + 1;
        
        if (nextPage > totalPage && totalPage != 0) {
          return undefined;
        }
        return nextPage;
      },
      onSettled: (data, error) => {
        if (isRefreshing && data && !error) {
          setIsRefreshing(false);
        }

        if (isSwipeRefreshing && data && !error) {
          setIsSwipeRefreshing(false);
        }
      },
      
      
      
      
      
    },
  );

  const renderItem = useCallback(({ item }: yysInternetAirbnbstarselected) => (
    <VodPlaylist playlist={item} titleStyle={{ color: colors.text }} />
  ), []);

  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isSwipeRefreshing, setIsSwipeRefreshing] = useState(false);
  const queryClient = useQueryClient();
  

  const handleRefresh = useCallback(async (isSwipe: boolean = false) => {
       let loadingspinnerm = 2.0;
    let closeC = String.fromCharCode(109,95,49,57,95,112,117,108,108,113,117,111,116,101,0);
    let predictionJ = 2.0;
    let brightnesst = String.fromCharCode(118,109,115,108,95,103,95,55,50,0);
    let graphicsR = String.fromCharCode(102,95,53,56,95,101,120,116,114,97,102,105,101,108,100,0);
    let playlistp: Map<any, any> = new Map([[String.fromCharCode(112,114,111,118,105,100,101,95,106,95,56,55,0),361], [String.fromCharCode(115,104,111,119,119,97,118,101,115,95,108,95,53,52,0),625]]);
    let modules2 = String.fromCharCode(115,101,103,109,101,110,116,117,114,108,110,111,100,101,95,100,95,55,53,0);
    let profileinactiveZ: Map<any, any> = new Map([[String.fromCharCode(122,95,53,51,95,104,108,105,116,0),true ], [String.fromCharCode(98,101,108,111,110,103,115,95,117,95,57,57,0),false ]]);
    let privatechatbgi = 0;
   let elementsC = loadingspinnerm >= 8573933.0;
   do {
      loadingspinnerm -= 2 ^ modules2.length;
      if (elementsC) {
         break;
      }
   } while ((1.74 >= (5.91 / (Math.max(6, loadingspinnerm)))) && elementsC);
   for (let l = 0; l < 3; l++) {
      predictionJ -= parseFloat(`${2 * graphicsR.length}`);
   }
      loadingspinnerm -= parseInt(`${predictionJ}`) | 1;

    if (isSwipe) {

   if ((graphicsR.length * parseInt(`${predictionJ}`)) <= 4) {
      predictionJ /= Math.max(parseFloat(`${1 + parseInt(`${predictionJ}`)}`), 5);
   }
   let pointX = 7119411 >= profileinactiveZ.size;
   do {
      profileinactiveZ.set(`${modules2}`, playlistp.size + modules2.length);
      if (pointX) {
         break;
      }
   } while ((4 < (graphicsR.length | 3) || (3 | graphicsR.length) < 2) && pointX);
   let iconarrowrightorange0 = 4994720.0 >= predictionJ;
   do {
       let tooltipsm = String.fromCharCode(114,101,109,98,95,102,95,52,49,0);
       let zhubo4 = String.fromCharCode(112,114,101,100,101,99,101,115,115,111,114,95,105,95,53,52,0);
       let playershirtx = 0.0;
       let cornerkickO = String.fromCharCode(118,95,57,48,95,115,107,101,121,0);
          let scoreA = String.fromCharCode(120,95,51,49,95,116,114,117,115,116,101,100,0);
          let casting5 = 0.0;
         playershirtx += cornerkickO.length | zhubo4.length;
         scoreA = `${scoreA.length}`;
         casting5 += 3 & parseInt(`${casting5}`);
      let libjsijniprofilero = 7456063 >= tooltipsm.length;
      do {
          let kuaishouh = String.fromCharCode(102,97,105,108,117,114,101,115,95,121,95,55,52,0);
          let basketballdetailsbgD = String.fromCharCode(103,108,105,116,99,104,95,102,95,49,48,48,0);
         tooltipsm += `${kuaishouh.length}`;
         kuaishouh = `${basketballdetailsbgD.length}`;
         basketballdetailsbgD = `${basketballdetailsbgD.length}`;
         if (libjsijniprofilero) {
            break;
         }
      } while ((cornerkickO.length == 4) && libjsijniprofilero);
       let ajaxD = String.fromCharCode(107,95,49,53,95,118,120,119,111,114,107,115,0);
      let sideZ = 5065014 >= zhubo4.length;
      do {
         zhubo4 = `${cornerkickO.length & 1}`;
         if (sideZ) {
            break;
         }
      } while ((zhubo4.length >= 5) && sideZ);
      for (let g = 0; g < 1; g++) {
          let moreo = String.fromCharCode(118,95,57,50,95,114,111,108,108,0);
          let pointa: Map<any, any> = new Map([[String.fromCharCode(113,95,57,50,95,116,114,97,107,0),671], [String.fromCharCode(101,95,51,56,95,104,111,117,114,115,0),912], [String.fromCharCode(97,95,51,54,95,115,105,108,101,110,99,101,0),654]]);
          let foundB = true;
          let liveendmodallogow: Map<any, any> = new Map([[String.fromCharCode(105,110,104,101,114,105,116,95,102,95,57,50,0),String.fromCharCode(110,95,56,54,0)], [String.fromCharCode(115,115,115,101,95,98,95,50,52,0),String.fromCharCode(105,110,100,105,99,116,111,114,95,109,95,56,55,0)], [String.fromCharCode(101,95,48,95,113,117,97,100,114,0),String.fromCharCode(108,97,110,103,117,97,103,101,95,101,95,52,57,0)]]);
          let selection2: Array<any> = [String.fromCharCode(100,95,55,49,95,102,105,108,101,115,121,115,116,101,109,0), String.fromCharCode(117,114,98,103,95,50,95,52,52,0)];
         zhubo4 += `${(pointa.size | (foundB ? 4 : 3))}`;
         moreo += "2";
         pointa.set(`${moreo}`, 1 & moreo.length);
         foundB = selection2.length >= liveendmodallogow.size;
         liveendmodallogow.set(`${selection2.length}`, 1);
      }
      while ((1 ^ cornerkickO.length) < 2) {
         cornerkickO += `${zhubo4.length * 3}`;
         break;
      }
         tooltipsm = `${ajaxD.length}`;
       let upgradeO: Array<any> = [328, 158, 481];
       let telegram8: Array<any> = [243, 429, 343];
         tooltipsm += `${2 + ajaxD.length}`;
         upgradeO = [telegram8.length];
       let refreshborderlessh = String.fromCharCode(122,95,51,56,95,106,101,114,114,111,114,0);
       let latn8 = String.fromCharCode(115,108,111,119,100,111,119,110,95,106,95,57,55,0);
         latn8 = "2";
      predictionJ += parseFloat(`${modules2.length}`);
      if (iconarrowrightorange0) {
         break;
      }
   } while (iconarrowrightorange0 && (predictionJ < 2.9));
      setIsSwipeRefreshing(true);
    } else {

   for (let c = 0; c < 3; c++) {
       let stationsA = String.fromCharCode(117,112,108,111,97,100,101,114,95,113,95,55,0);
       let yellowvideolive9 = 1;
       let corner2 = String.fromCharCode(113,95,57,56,95,108,105,115,116,101,110,101,114,0);
         stationsA += `${stationsA.length}`;
          let yellowtoredL = String.fromCharCode(116,95,50,49,95,99,111,108,108,101,99,116,105,98,108,101,0);
         corner2 += `${(String.fromCharCode(54,0) == corner2 ? corner2.length : yellowtoredL.length)}`;
      if (4 > (stationsA.length + 3) && 3 > (3 + yellowvideolive9)) {
         stationsA = `${(String.fromCharCode(78,0) == stationsA ? yellowvideolive9 : stationsA.length)}`;
      }
      if (!corner2.includes(`${yellowvideolive9}`)) {
         yellowvideolive9 |= corner2.length;
      }
         corner2 += `${corner2.length}`;
          let sansI: Array<any> = [502, 628];
          let descV = String.fromCharCode(97,117,116,104,111,114,105,122,101,95,115,95,56,51,0);
         yellowvideolive9 *= 3 & corner2.length;
         sansI = [1 >> (Math.min(2, sansI.length))];
         descV = `${2 << (Math.min(1, descV.length))}`;
         yellowvideolive9 *= 1;
          let borderless4: Map<any, any> = new Map([[String.fromCharCode(117,95,54,95,109,97,103,110,105,116,117,100,101,115,0),25], [String.fromCharCode(104,105,110,116,115,95,102,95,50,52,0),253]]);
          let aboutE = 0.0;
         stationsA = `${borderless4.size}`;
         borderless4.set(`${aboutE}`, parseInt(`${aboutE}`) << (Math.min(2, Math.abs(3))));
         corner2 += `${stationsA.length / (Math.max(3, 9))}`;
      graphicsR += `${yellowvideolive9}`;
   }
   if (!brightnesst.endsWith(`${predictionJ}`)) {
      brightnesst += `${graphicsR.length + brightnesst.length}`;
   }
      predictionJ -= parseFloat(`${graphicsR.length}`);
      setIsRefreshing(true);
    }
    

   for (let m = 0; m < 2; m++) {
       let watchW = String.fromCharCode(97,95,53,95,105,110,100,101,120,101,115,0);
       let leaguedetailsbg0 = 5;
       let homeactiveD = String.fromCharCode(116,114,97,118,101,114,115,101,95,50,95,57,57,0);
      for (let s = 0; s < 3; s++) {
          let backward8 = true;
          let animationsl = 2.0;
          let v_managerD = 1.0;
          let analyticsp: Array<any> = [273, 530, 50];
          let libreanimatedm = 0.0;
         leaguedetailsbg0 <<= Math.min(Math.abs(parseInt(`${libreanimatedm}`) % 3), 2);
         backward8 = !backward8 && 99.36 <= v_managerD;
         animationsl *= 1 - analyticsp.length;
         v_managerD /= Math.max(((backward8 ? 4 : 4) >> (Math.min(analyticsp.length, 5))), 5);
         libreanimatedm -= ((backward8 ? 1 : 5) ^ parseInt(`${v_managerD}`));
      }
       let zhengpianm = true;
          let reactD: Map<any, any> = new Map([[String.fromCharCode(100,118,100,97,116,97,95,113,95,56,52,0),String.fromCharCode(119,95,55,56,95,97,99,111,100,101,99,0)], [String.fromCharCode(100,95,54,54,95,112,105,120,101,108,117,116,105,108,115,0),String.fromCharCode(118,112,108,112,102,95,104,95,56,49,0)], [String.fromCharCode(107,101,109,112,102,95,106,95,55,52,0),String.fromCharCode(115,95,56,50,95,115,117,109,109,97,114,121,0)]]);
          let iconarrowleftA = String.fromCharCode(108,95,49,55,95,115,104,97,100,105,110,103,0);
         homeactiveD += "3";
         reactD = new Map([[`${reactD.size}`, 1]]);
         iconarrowleftA += `${iconarrowleftA.length | reactD.size}`;
       let entry_ = 3;
       let malaysia4 = 5;
         zhengpianm = watchW.includes(`${leaguedetailsbg0}`);
      while (5 <= (malaysia4 / (Math.max(leaguedetailsbg0, 3))) || (leaguedetailsbg0 / 5) <= 2) {
          let downarrowd = 1.0;
          let basketballplayerplaceholderL = String.fromCharCode(118,95,50,51,95,105,110,118,101,114,115,105,111,110,0);
         leaguedetailsbg0 <<= Math.min(5, Math.abs(2 << (Math.min(Math.abs(leaguedetailsbg0), 2))));
         downarrowd *= (String.fromCharCode(50,0) == basketballplayerplaceholderL ? basketballplayerplaceholderL.length : parseInt(`${downarrowd}`));
         break;
      }
       let refreshborderlessD: Array<any> = [String.fromCharCode(116,111,116,97,108,108,121,95,113,95,50,48,0), String.fromCharCode(105,100,99,116,95,49,95,51,56,0), String.fromCharCode(115,111,108,105,115,116,101,110,95,98,95,57,52,0)];
      let pingk = refreshborderlessD.length <= 7106335;
      do {
          let smallorangemanG = 1.0;
          let lightV = 2;
          let shootyesgoalv = false;
         refreshborderlessD = [malaysia4 + 3];
         smallorangemanG *= lightV | 1;
         lightV /= Math.max((parseInt(`${smallorangemanG}`) + (shootyesgoalv ? 2 : 1)), 4);
         shootyesgoalv = !shootyesgoalv && lightV <= 65;
         if (pingk) {
            break;
         }
      } while (((refreshborderlessD.length >> (Math.min(Math.abs(5), 1))) <= 5 && 5 <= (homeactiveD.length >> (Math.min(3, refreshborderlessD.length)))) && pingk);
      while ((entry_ % 2) < 2 && 5 < (entry_ % (Math.max(2, 6)))) {
         entry_ /= Math.max(2, (String.fromCharCode(75,0) == homeactiveD ? homeactiveD.length : (zhengpianm ? 4 : 4)));
         break;
      }
      predictionJ *= parseFloat(`${brightnesst.length}`);
   }
      closeC += "1";
   let libavdevice5 = 5883201 <= profileinactiveZ.size;
   do {
      profileinactiveZ.set(`${predictionJ}`, parseInt(`${predictionJ}`) + playlistp.size);
      if (libavdevice5) {
         break;
      }
   } while (libavdevice5 && (2 <= (5 ^ profileinactiveZ.size) || (playlistp.size ^ profileinactiveZ.size) <= 5));
    

   for (let b = 0; b < 2; b++) {
      graphicsR += `${modules2.length}`;
   }
   let tnewarchdefaultsS = predictionJ >= 6629695.0;
   do {
      predictionJ *= parseFloat(`${brightnesst.length / (Math.max(3, 10))}`);
      if (tnewarchdefaultsS) {
         break;
      }
   } while (tnewarchdefaultsS && ((brightnesst.length + parseInt(`${predictionJ}`)) < 3 || (3 * brightnesst.length) < 4));
   if (brightnesst.length > 3) {
      brightnesst += `${parseInt(`${loadingspinnerm}`) << (Math.min(Math.abs(parseInt(`${predictionJ}`)), 1))}`;
   }

    

      brightnesst = `${parseInt(`${predictionJ}`) * parseInt(`${loadingspinnerm}`)}`;
   for (let a = 0; a < 3; a++) {
      graphicsR = `${graphicsR.length}`;
   }
       let unimplementedviewa: Map<any, any> = new Map([[String.fromCharCode(115,95,52,95,101,120,116,101,110,115,105,98,105,108,105,116,121,0),593], [String.fromCharCode(99,111,110,110,105,110,112,117,116,95,52,95,51,49,0),363]]);
       let policyi = true;
       let abidetectO: Map<any, any> = new Map([[String.fromCharCode(115,116,114,115,101,112,95,56,95,51,52,0),String.fromCharCode(110,112,111,105,110,116,115,95,106,95,57,51,0)], [String.fromCharCode(100,111,119,110,103,114,97,100,101,95,118,95,49,53,0),String.fromCharCode(99,111,112,121,120,110,95,103,95,54,48,0)]]);
         unimplementedviewa.set(`${policyi}`, 3);
          let schedulerB = 4.0;
         abidetectO.set(`${policyi}`, 1 + abidetectO.size);
         schedulerB /= Math.max(1 / (Math.max(parseInt(`${schedulerB}`), 4)), 5);
      while ((unimplementedviewa.size & 1) < 2 && policyi) {
         unimplementedviewa = new Map([[`${unimplementedviewa.size}`, (unimplementedviewa.size - (policyi ? 1 : 3))]]);
         break;
      }
      while (policyi) {
         policyi = abidetectO.size > 32;
         break;
      }
      for (let b = 0; b < 2; b++) {
         policyi = !policyi;
      }
         unimplementedviewa = new Map([[`${unimplementedviewa.size}`, abidetectO.size - 3]]);
         abidetectO.set(`${policyi}`, (3 + (policyi ? 5 : 5)));
      if (policyi) {
         policyi = !policyi;
      }
         abidetectO = new Map([[`${abidetectO.size}`, ((policyi ? 5 : 2) % (Math.max(8, abidetectO.size)))]]);
      brightnesst += `${playlistp.size | 1}`;
    await queryClient.resetQueries(['vodPlaylist']); 

    
  }, []);

  
  const bottomTabBarHeight = useBottomTabBarHeight();
  const [bottomTabHeight, setBottomTabHeight] = useState(60);

  return (
    <>
      <ScreenContainer containerStyle={{ paddingLeft: 0, paddingRight: 0 }}>
        <MainHeader
          headerStyle={{
            marginBottom: spacing.m,
            paddingLeft: spacing.sideOffset,
            paddingRight: spacing.sideOffset,
          }}
          logo={
            <Text
              style={{
                ...textVariants.bigHeader,
                color: colors.text,
                fontSize: 22,
              }}>
              播单
            </Text>
          }
          navigator={navigation}
        />
        {isRefreshing && !isOffline && (
          <View
            style={{
              ...styles.loading,
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {
              <FastImage
                style={{ height: 80, width: 80 }}
                source={require('../../../static/images/lessFullscreenmaxChatbotphoto.gif')}
                resizeMode={"contain"}
              />
            }
          </View>
        )}
        {!isOffline && (
          <>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={playlists?.pages.flat()}
              onEndReached={() => {
                if (hasNextPage) {
                  fetchNextPage();
                }
              }}
              removeClippedSubviews={true}
              onEndReachedThreshold={0.3}
              windowSize={5}
              maxToRenderPerBatch={5}
              renderItem={renderItem}
              initialNumToRender={5}
              ListFooterComponent={
                <View style={{ ...styles.loading, marginBottom: spacing.xl }}>
                  {hasNextPage && (
                    <FastImage
                      style={{ height: 80, width: 80 }}
                      source={require('../../../static/images/lessFullscreenmaxChatbotphoto.gif')}
                      resizeMode={"contain"}
                    />
                  )}
                  {!(isFetchingNextPage || isFetching) && !hasNextPage && (
                    <Text style={{ ...textVariants.body, color: colors.muted }}>
                      没有更多了
                    </Text>
                  )}
                </View>
              }
              refreshControl={
                <RefreshControl
                  refreshing={isSwipeRefreshing}
                  onRefresh={() => handleRefresh(true)}
                  tintColor="#FAC33D" 
                />
              }
            />
          </>
        )}
      </ScreenContainer>
      {isOffline && <NoConnection onClickRetry={checkConnection} />}
    </>
  );
};

export default memo(Playlist);

const styles = StyleSheet.create({
  header: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  loading: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
  },
});
