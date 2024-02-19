import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  RefreshControl,
  ScrollView,
} from "react-native";
import ScreenContainer from "../../components/container/yys_matches";
import { RootStackScreenProps } from "@type";
import { useTheme } from "@react-navigation/native";
import { yysIconclosewhiteBaiduads } from "@redux";

import TitleWithBackButtonHeader from "../../components/header/yys_away_predictionloss_header";
import axios from "axios";
import { Keyboard } from "react-native";
import {
  API_DOMAIN,
  API_DOMAIN_TEST,
  API_DOMAIN_LOCAL,
} from "@utility";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";

import InviteStep from "./../../components/invite/yys_iconviewergif";
import InviteCard from "./../../components/invite/yys_referrer";

import InviteHeader from "./../../components/invite/yys_inactive_header";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks";
import { TouchableOpacity } from "@gorhom/bottom-sheet";
import { updateUserAuth } from "@redux";
import yys_giftbutton_footballtrophy from "../../../../Umeng/yys_giftbutton_footballtrophy";
import { yysHomeloading } from "@api";
import { yysIconplaySuggestion } from "@redux";


export default ({ navigation }: RootStackScreenProps<"邀请">) => {
  const { colors, textVariants, icons, spacing } = useTheme();

  const userState = useSelector<yysIconplaySuggestion>('userReducer');

  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useAppDispatch();

  
  useEffect(() => {
    yys_giftbutton_footballtrophy.userCenterVipInviteViewsAnalytics();
  }, []);
  

  const handleRefresh = async () => {
       let megaphoneq = 4;
    let membershipR = String.fromCharCode(101,110,100,105,110,103,95,121,95,52,49,0);
    let actions9 = 1.0;
    let sortB = String.fromCharCode(112,95,56,49,95,97,117,116,104,101,110,116,104,105,99,97,116,101,0);
    let defaultpredictionprofiler = String.fromCharCode(102,95,49,55,95,115,104,111,119,119,97,118,101,115,0);
    let profileinactiver = 0;
    let libswscalet: Map<any, any> = new Map([[String.fromCharCode(104,101,97,100,115,95,51,95,52,54,0),String.fromCharCode(101,118,101,114,121,95,100,95,57,48,0)], [String.fromCharCode(116,95,50,53,95,99,114,101,97,116,101,0),String.fromCharCode(103,95,53,56,95,109,97,112,115,105,122,101,0)], [String.fromCharCode(111,95,57,51,95,121,101,115,116,101,114,100,97,121,0),String.fromCharCode(102,95,52,57,95,102,105,108,101,104,101,97,100,101,114,0)]]);
    let statisticsactiveP = 0;
    let sendx = 4;
    let iconqqm = String.fromCharCode(108,95,54,49,95,115,116,114,99,109,112,0);
    let questiconV: Map<any, any> = new Map([[String.fromCharCode(122,95,50,51,95,105,110,116,108,105,115,116,0),String.fromCharCode(99,111,108,108,97,112,115,101,95,112,95,57,52,0)], [String.fromCharCode(117,95,52,55,95,105,110,116,101,114,115,101,99,116,105,111,110,0),String.fromCharCode(105,95,48,95,105,115,97,99,0)]]);
    let righte = 2.0;
    let goallogoA = String.fromCharCode(114,101,109,111,118,101,95,115,95,51,53,0);
       let indexP: Array<any> = [String.fromCharCode(97,117,103,109,101,110,116,101,100,95,54,95,54,50,0), String.fromCharCode(109,95,56,52,95,97,119,97,105,116,0), String.fromCharCode(102,112,99,95,110,95,53,0)];
       let sigmob3 = false;
       let bang6 = String.fromCharCode(101,120,112,105,114,97,116,105,111,110,95,53,95,50,55,0);
       let usernameB = String.fromCharCode(114,95,50,51,95,114,97,108,102,100,97,116,97,0);
       let yellowanimationliveL = String.fromCharCode(107,95,53,48,95,114,101,110,101,119,97,98,108,101,0);
          let basketballq: Map<any, any> = new Map([[String.fromCharCode(115,112,108,105,99,101,95,100,95,54,53,0),String.fromCharCode(104,101,118,99,100,115,112,95,102,95,52,49,0)], [String.fromCharCode(115,112,101,97,107,95,48,95,51,54,0),String.fromCharCode(113,117,101,117,101,95,112,95,55,52,0)], [String.fromCharCode(110,95,50,52,95,117,114,108,100,101,99,111,100,101,0),String.fromCharCode(98,95,57,55,95,111,112,117,115,0)]]);
          let chatbotphotoX: Map<any, any> = new Map([[String.fromCharCode(121,95,55,95,115,105,109,112,108,101,114,101,97,100,0),932], [String.fromCharCode(118,97,99,97,110,116,95,101,95,57,57,0),129], [String.fromCharCode(121,95,56,54,95,105,110,104,101,114,105,116,0),951]]);
         sigmob3 = (indexP.length | usernameB.length) >= 18;
         basketballq.set(`${chatbotphotoX.size}`, chatbotphotoX.size * basketballq.size);
      for (let k = 0; k < 2; k++) {
         yellowanimationliveL += `${(usernameB == String.fromCharCode(56,0) ? usernameB.length : indexP.length)}`;
      }
      for (let w = 0; w < 1; w++) {
         bang6 = "3";
      }
         bang6 += `${(yellowanimationliveL == String.fromCharCode(117,0) ? indexP.length : yellowanimationliveL.length)}`;
      sendx >>= Math.min(Math.abs(sendx << (Math.min(Math.abs(2), 1))), 1);
       let spech: Map<any, any> = new Map([[String.fromCharCode(97,118,117,116,105,108,95,110,95,50,48,0),String.fromCharCode(112,95,57,50,95,109,101,114,103,101,0)], [String.fromCharCode(112,114,111,99,101,115,115,101,100,95,121,95,55,50,0),String.fromCharCode(115,116,114,104,97,115,104,95,48,95,49,50,0)], [String.fromCharCode(101,95,57,95,118,116,101,115,116,0),String.fromCharCode(114,95,54,49,95,102,117,110,99,115,0)]]);
       let defaultplayerimgs: Array<any> = [506, 437, 786];
       let cnews0: Array<any> = [195, 636, 211];
       let b_hash_ = String.fromCharCode(103,95,57,50,95,110,111,97,108,108,111,99,0);
         defaultplayerimgs = [1 % (Math.max(3, spech.size))];
      if (spech.get(`${cnews0.length}`) == null) {
         cnews0.push(cnews0.length & defaultplayerimgs.length);
      }
      let goallogoG = b_hash_ == String.fromCharCode(108,115,106,104,48,120,50,50,49,0);
      do {
          let mimeh = String.fromCharCode(112,114,101,102,105,120,101,100,95,112,95,53,0);
          let unreadZ: Map<any, any> = new Map([[String.fromCharCode(104,95,54,52,95,113,109,98,108,0),665], [String.fromCharCode(97,100,100,114,101,115,115,95,109,95,55,52,0),906], [String.fromCharCode(105,95,56,51,95,100,101,99,105,109,97,108,0),898]]);
          let mbridgec = String.fromCharCode(102,95,50,55,95,115,115,101,116,0);
          let homeactive0 = 2.0;
         b_hash_ += `${cnews0.length * 3}`;
         mimeh += "1";
         unreadZ.set(`${homeactive0}`, unreadZ.size);
         mbridgec += `${mbridgec.length / (Math.max(mimeh.length, 2))}`;
         homeactive0 -= mimeh.length;
         if (goallogoG) {
            break;
         }
      } while (((cnews0.length >> (Math.min(Math.abs(1), 3))) >= 2) && goallogoG);
         cnews0 = [b_hash_.length];
      for (let c = 0; c < 3; c++) {
          let logouserT = String.fromCharCode(116,114,97,110,115,102,111,114,109,115,95,111,95,49,54,0);
         cnews0 = [spech.size | cnews0.length];
         logouserT += `${logouserT.length * logouserT.length}`;
      }
          let default_z7k = 3.0;
          let inouttargetyellowd = String.fromCharCode(107,95,53,95,115,121,109,98,111,108,115,0);
         cnews0.push(defaultplayerimgs.length);
         default_z7k *= parseInt(`${default_z7k}`);
         inouttargetyellowd = `${(String.fromCharCode(95,0) == inouttargetyellowd ? parseInt(`${default_z7k}`) : inouttargetyellowd.length)}`;
      for (let f = 0; f < 1; f++) {
         b_hash_ += `${defaultplayerimgs.length}`;
      }
       let signinup6: Map<any, any> = new Map([[String.fromCharCode(98,95,49,95,99,111,108,111,114,102,117,108,0),596], [String.fromCharCode(115,116,97,114,116,95,117,95,50,52,0),37]]);
       let leaguex: Map<any, any> = new Map([[String.fromCharCode(102,95,49,54,95,100,111,110,97,116,101,0),804], [String.fromCharCode(118,97,114,105,97,110,116,115,95,109,95,56,50,0),204]]);
      profileinactiver += defaultpredictionprofiler.length % (Math.max(7, sendx));
   if (defaultpredictionprofiler.includes(sortB)) {
       let liveshare3 = 3;
       let lessM = 1.0;
       let pressureu = true;
       let langa = 0;
       let libfbS: Array<any> = [22, 18];
      for (let c = 0; c < 3; c++) {
         liveshare3 <<= Math.min(3, Math.abs((parseInt(`${lessM}`) | (pressureu ? 5 : 3))));
      }
         langa ^= 1 * langa;
          let topicj = 1.0;
          let greyticki = String.fromCharCode(104,121,112,104,101,110,97,116,101,100,95,110,95,57,48,0);
         langa |= 1 ^ parseInt(`${lessM}`);
         topicj *= parseFloat(`${2}`);
         greyticki = `${greyticki.length & 3}`;
      while ((libfbS.length / 1) < 1 || (libfbS.length / 1) < 2) {
         langa |= ((pressureu ? 2 : 2) - langa);
         break;
      }
      for (let u = 0; u < 1; u++) {
         pressureu = !pressureu && libfbS.length <= 33;
      }
         pressureu = langa >= 15;
      if ((langa & libfbS.length) < 1 && 2 < (langa & 1)) {
         langa %= Math.max((langa & (pressureu ? 4 : 3)), 2);
      }
          let termsb = 0.0;
         lessM *= ((pressureu ? 1 : 2) & libfbS.length);
         termsb /= Math.max(2 ^ parseInt(`${termsb}`), 2);
         liveshare3 *= 3 & langa;
      if (pressureu) {
          let loginu: Array<any> = [922, 930];
          let backf = 2.0;
          let episodes6 = String.fromCharCode(115,95,49,51,95,114,101,110,111,114,109,0);
          let statisticsactiveD = 4;
         langa <<= Math.min(Math.abs(statisticsactiveD), 3);
         loginu.push(episodes6.length);
         backf *= episodes6.length;
      }
          let mbsplashU = 5.0;
         langa -= liveshare3;
         mbsplashU += parseInt(`${mbsplashU}`);
      if (!pressureu) {
          let analyticQ = 0.0;
          let description_jy = 4.0;
          let defaultlogoc = String.fromCharCode(110,101,97,114,95,101,95,49,48,0);
         pressureu = 62.20 == lessM && 77 == libfbS.length;
         analyticQ /= Math.max(1, parseFloat(`${parseInt(`${analyticQ}`) >> (Math.min(defaultlogoc.length, 3))}`));
         description_jy *= parseInt(`${analyticQ}`);
         defaultlogoc += `${defaultlogoc.length}`;
      }
      while (libfbS.includes(liveshare3)) {
          let downloadedf = true;
          let defaultplayerimge = true;
          let libffmpegkitN: Map<any, any> = new Map([[String.fromCharCode(114,95,57,54,95,97,99,111,108,111,114,115,0),String.fromCharCode(122,95,53,57,95,100,109,105,120,0)], [String.fromCharCode(100,95,53,52,95,114,101,97,112,0),String.fromCharCode(100,101,108,97,121,97,98,108,101,95,106,95,57,55,0)]]);
         liveshare3 &= langa;
         downloadedf = libffmpegkitN.size > 32;
         defaultplayerimge = !defaultplayerimge;
         libffmpegkitN = new Map([[`${libffmpegkitN.size}`, (1 << (Math.min(3, Math.abs((defaultplayerimge ? 1 : 3)))))]]);
         break;
      }
      if ((4 + libfbS.length) < 5 && 2 < (4 + libfbS.length)) {
          let usera = true;
          let moren = 0.0;
          let mimoi = 0.0;
          let zooml = String.fromCharCode(115,104,97,114,101,100,107,101,121,95,122,95,57,56,0);
         libfbS = [((pressureu ? 2 : 1) >> (Math.min(Math.abs(langa), 3)))];
         usera = mimoi > 51.38 && String.fromCharCode(77,0) == zooml;
         moren -= parseFloat(`${3}`);
         mimoi *= parseFloat(`${parseInt(`${moren}`) * 3}`);
         zooml += `${parseInt(`${mimoi}`) % 2}`;
      }
          let panglez = String.fromCharCode(118,95,52,51,95,99,111,110,110,101,99,116,105,111,110,115,0);
          let issubn: Map<any, any> = new Map([[String.fromCharCode(99,111,109,112,114,101,115,115,111,114,95,109,95,53,57,0),String.fromCharCode(115,97,118,101,95,55,95,51,50,0)], [String.fromCharCode(120,95,54,51,95,102,97,114,0),String.fromCharCode(97,117,103,109,101,110,116,101,100,95,121,95,52,48,0)]]);
         libfbS = [parseInt(`${lessM}`)];
         panglez += `${panglez.length}`;
         issubn = new Map([[`${issubn.size}`, panglez.length]]);
      defaultpredictionprofiler = "3";
   }
   if ((libswscalet.size - 1) > 4) {
       let awayplayerr = 2;
       let libfb6 = 2.0;
         libfb6 += parseFloat(`${parseInt(`${libfb6}`)}`);
      let iconmegaphoneh = libfb6 >= 9078297.0;
      do {
         libfb6 += parseFloat(`${parseInt(`${libfb6}`)}`);
         if (iconmegaphoneh) {
            break;
         }
      } while ((awayplayerr < libfb6) && iconmegaphoneh);
         libfb6 /= Math.max(parseFloat(`${awayplayerr / 3}`), 4);
      if ((5 - awayplayerr) == 5) {
          let linkZ = String.fromCharCode(104,95,49,55,95,116,114,117,101,109,111,116,105,111,110,0);
          let libfbo = 3;
          let combineu = 1.0;
         libfb6 *= parseFloat(`${2 / (Math.max(3, parseInt(`${libfb6}`)))}`);
         linkZ = "1";
         libfbo += 3 - linkZ.length;
         combineu -= parseFloat(`${parseInt(`${combineu}`) / (Math.max(8, libfbo))}`);
      }
      if (libfb6 > awayplayerr) {
         awayplayerr %= Math.max(5, awayplayerr * 2);
      }
       let ycopy_m28 = String.fromCharCode(121,95,50,49,95,109,97,107,101,110,97,110,0);
       let appleq = String.fromCharCode(120,108,97,98,101,108,119,105,100,116,104,95,109,95,57,57,0);
      libswscalet = new Map([[`${libswscalet.size}`, libswscalet.size / (Math.max(sortB.length, 9))]]);
   }
   let modulesu = 5670018 <= profileinactiver;
   do {
      profileinactiver >>= Math.min(Math.abs(megaphoneq), 4);
      if (modulesu) {
         break;
      }
   } while ((5 <= membershipR.length) && modulesu);
   while (sendx == 3) {
      sendx <<= Math.min(membershipR.length, 4);
      break;
   }
       let nterstitialN = 1.0;
         nterstitialN *= parseFloat(`${3 / (Math.max(parseInt(`${nterstitialN}`), 2))}`);
      let scoreb = nterstitialN >= 9137207.0;
      do {
          let promotionv = String.fromCharCode(111,114,100,101,114,116,121,112,101,95,122,95,57,50,0);
          let logoR = true;
         nterstitialN *= (parseFloat(`${promotionv.length >> (Math.min(4, Math.abs((logoR ? 5 : 2))))}`));
         if (scoreb) {
            break;
         }
      } while ((nterstitialN == 3.54) && scoreb);
      let otherm = nterstitialN >= 4908284.0;
      do {
         nterstitialN *= parseFloat(`${parseInt(`${nterstitialN}`)}`);
         if (otherm) {
            break;
         }
      } while (otherm && (4.69 > nterstitialN));
      sortB = `${(String.fromCharCode(114,0) == iconqqm ? iconqqm.length : statisticsactiveP)}`;
      sortB = `${parseInt(`${actions9}`)}`;
      membershipR = `${statisticsactiveP % 2}`;
       let iconeditV = 5.0;
       let ewardedb = 0.0;
       let baseV = String.fromCharCode(100,95,50,95,101,110,104,97,110,99,101,0);
      while (baseV.endsWith(`${ewardedb}`)) {
          let libreactj: Array<any> = [33, 459, 974];
          let bangO = String.fromCharCode(100,105,103,105,116,115,95,118,95,56,57,0);
          let miniF = true;
         baseV = `${parseInt(`${ewardedb}`) >> (Math.min(Math.abs(3), 4))}`;
         libreactj = [bangO.length >> (Math.min(5, libreactj.length))];
         bangO += `${libreactj.length}`;
         miniF = libreactj.length <= 4;
         break;
      }
      let informationG = ewardedb <= 5589416.0;
      do {
         ewardedb += (baseV == String.fromCharCode(114,0) ? parseInt(`${ewardedb}`) : baseV.length);
         if (informationG) {
            break;
         }
      } while (((iconeditV * ewardedb) > 1.81) && informationG);
      while ((iconeditV + 3.61) <= 3.20 && (2 ^ baseV.length) <= 5) {
         baseV += `${parseInt(`${iconeditV}`) | 2}`;
         break;
      }
         ewardedb *= baseV.length | 1;
      while (4 < (3 + parseInt(`${iconeditV}`)) || (4.34 + iconeditV) < 5.7) {
          let sharewhite5 = String.fromCharCode(107,95,50,49,95,100,111,119,110,108,101,102,116,0);
         baseV += `${baseV.length * parseInt(`${iconeditV}`)}`;
         sharewhite5 = `${sharewhite5.length - 3}`;
         break;
      }
         iconeditV *= parseFloat(`${3}`);
         baseV = `${3 ^ parseInt(`${ewardedb}`)}`;
          let libavutile = 3;
         baseV = `${parseInt(`${iconeditV}`)}`;
         libavutile -= 1 + libavutile;
         baseV += `${parseInt(`${iconeditV}`)}`;
      iconqqm += `${1 * sortB.length}`;

    setRefreshing(true);

   while ((1 + profileinactiver) > 4 && 1 > (profileinactiver + libswscalet.size)) {
      profileinactiver &= (iconqqm == String.fromCharCode(98,0) ? iconqqm.length : sendx);
      break;
   }
   let showmoret = defaultpredictionprofiler.length <= 6359903;
   do {
      defaultpredictionprofiler = "1";
      if (showmoret) {
         break;
      }
   } while ((defaultpredictionprofiler.startsWith(`${iconqqm.length}`)) && showmoret);
   if (2 <= (profileinactiver - 2) && 2 <= (profileinactiver - 2)) {
      profileinactiver -= (String.fromCharCode(53,0) == sortB ? sortB.length : sendx);
   }
       let with_q3 = 5;
       let leakchecker3 = 4.0;
       let iconshareF = false;
          let libbufferA = String.fromCharCode(113,95,55,51,95,110,111,110,110,117,108,108,107,101,121,99,104,97,105,110,0);
          let greyarrowupN = 5.0;
         iconshareF = libbufferA.length > 46 || !iconshareF;
         libbufferA += `${parseInt(`${greyarrowupN}`)}`;
      while (with_q3 == 3) {
         leakchecker3 /= Math.max(parseFloat(`${1}`), 3);
         break;
      }
         iconshareF = !iconshareF;
          let notificationj = String.fromCharCode(101,99,109,117,108,116,95,98,95,56,52,0);
          let colorsv: Map<any, any> = new Map([[String.fromCharCode(120,95,51,57,95,100,111,97,108,108,0),String.fromCharCode(109,95,50,50,95,98,114,101,97,107,105,110,103,0)], [String.fromCharCode(119,95,49,54,95,112,111,115,105,116,105,118,101,0),String.fromCharCode(122,95,54,53,95,113,116,97,98,108,101,115,0)]]);
          let arrowselectdownG: Map<any, any> = new Map([[String.fromCharCode(99,111,110,116,114,105,98,95,118,95,56,50,0),301], [String.fromCharCode(100,95,53,48,0),231]]);
         iconshareF = (arrowselectdownG.size & notificationj.length) >= 50;
         notificationj += "3";
         colorsv = new Map([[`${colorsv.size}`, 1 * colorsv.size]]);
         with_q3 |= ((iconshareF ? 3 : 1) & parseInt(`${leakchecker3}`));
      if (2.91 == (leakchecker3 + 1.42)) {
         leakchecker3 /= Math.max(5, (parseFloat(`${(iconshareF ? 1 : 4) ^ parseInt(`${leakchecker3}`)}`)));
      }
      for (let y = 0; y < 2; y++) {
          let arrowselectdownv: Map<any, any> = new Map([[String.fromCharCode(107,112,115,95,104,95,57,49,0),String.fromCharCode(112,114,111,112,111,114,116,105,111,110,97,108,95,116,95,51,53,0)], [String.fromCharCode(112,95,52,49,95,110,111,116,99,104,0),String.fromCharCode(104,95,53,55,95,104,108,105,116,0)], [String.fromCharCode(100,101,99,111,100,101,114,115,95,114,95,50,48,0),String.fromCharCode(102,95,51,48,95,116,119,111,109,0)]]);
          let debug7: Map<any, any> = new Map([[String.fromCharCode(108,97,115,116,109,98,117,102,95,53,95,50,54,0),405], [String.fromCharCode(106,95,50,95,109,105,100,110,105,103,104,116,0),136]]);
          let trophyI: Map<any, any> = new Map([[String.fromCharCode(114,101,99,111,109,112,111,115,101,95,52,95,56,56,0),109], [String.fromCharCode(105,95,53,55,95,102,105,110,100,110,101,97,114,109,118,0),786], [String.fromCharCode(108,95,51,54,95,101,120,116,114,101,109,117,109,0),907]]);
         iconshareF = !iconshareF;
         arrowselectdownv.set(`${arrowselectdownv.size}`, trophyI.size * arrowselectdownv.size);
         debug7 = new Map([[`${arrowselectdownv.size}`, debug7.size]]);
         trophyI = new Map([[`${trophyI.size}`, 3]]);
      }
      if (5.55 >= leakchecker3) {
         leakchecker3 /= Math.max(2, parseFloat(`${3 | parseInt(`${leakchecker3}`)}`));
      }
      if (with_q3 <= 4) {
         iconshareF = 36.28 >= leakchecker3;
      }
      iconqqm = `${parseInt(`${actions9}`)}`;
      sortB += "1";
   let securityA = 7461803 <= statisticsactiveP;
   do {
       let sheetZ = String.fromCharCode(109,118,115,101,116,95,110,95,55,53,0);
       let holderD: Map<any, any> = new Map([[String.fromCharCode(97,99,116,117,97,108,105,122,97,116,105,111,110,95,110,95,54,53,0),309], [String.fromCharCode(120,102,111,114,109,95,108,95,52,52,0),683]]);
       let reactnativeratingsZ = 5.0;
       let bottomg = String.fromCharCode(112,95,52,54,95,109,97,110,97,103,101,0);
       let becomeh = String.fromCharCode(105,95,56,95,102,105,108,116,0);
       let libglogf: Map<any, any> = new Map([[String.fromCharCode(103,95,57,56,95,116,101,120,116,0),325], [String.fromCharCode(105,95,55,57,95,116,101,108,101,112,104,111,116,111,0),320], [String.fromCharCode(111,95,53,56,95,112,97,115,116,101,0),819]]);
         reactnativeratingsZ *= libglogf.size + holderD.size;
      let g_vieww = sheetZ.length <= 5598715;
      do {
         sheetZ += `${parseInt(`${reactnativeratingsZ}`) | 2}`;
         if (g_vieww) {
            break;
         }
      } while (g_vieww && ((reactnativeratingsZ + 1.61) == 3.56));
         sheetZ += `${(String.fromCharCode(49,0) == becomeh ? becomeh.length : bottomg.length)}`;
      for (let f = 0; f < 2; f++) {
         becomeh += `${(String.fromCharCode(78,0) == bottomg ? libglogf.size : bottomg.length)}`;
      }
         sheetZ += "3";
         bottomg += `${holderD.size}`;
          let notificationN = String.fromCharCode(103,95,55,49,95,97,115,115,111,99,105,97,116,101,100,0);
         holderD = new Map([[`${holderD.size}`, holderD.size | sheetZ.length]]);
         notificationN += `${notificationN.length}`;
         reactnativeratingsZ /= Math.max(parseInt(`${reactnativeratingsZ}`), 5);
      while (becomeh.startsWith(`${libglogf.size}`)) {
         becomeh += `${libglogf.size}`;
         break;
      }
      if (5 <= (holderD.size * sheetZ.length)) {
         holderD = new Map([[`${holderD.size}`, 1 | holderD.size]]);
      }
         reactnativeratingsZ /= Math.max(1, 2);
      if (bottomg != becomeh) {
         becomeh = `${(sheetZ == String.fromCharCode(89,0) ? holderD.size : sheetZ.length)}`;
      }
         holderD.set(`${sheetZ}`, libglogf.size + 3);
       let libglogy = String.fromCharCode(99,97,99,97,95,112,95,49,50,0);
      statisticsactiveP &= profileinactiver;
      if (securityA) {
         break;
      }
   } while (securityA && (statisticsactiveP >= libswscalet.size));
   while ((4 | iconqqm.length) >= 3 && 1.70 >= (actions9 + 5.14)) {
      actions9 *= statisticsactiveP;
      break;
   }
      defaultpredictionprofiler = `${1 | statisticsactiveP}`;
   let exampleimaged = iconqqm.length <= 4979544;
   do {
      iconqqm = `${questiconV.size}`;
      if (exampleimaged) {
         break;
      }
   } while ((3 >= iconqqm.length) && exampleimaged);
   let mbbanner7 = righte >= 9107444.0;
   do {
      righte *= parseFloat(`${1 * membershipR.length}`);
      if (mbbanner7) {
         break;
      }
   } while (mbbanner7 && ((5 << (Math.min(2, sortB.length))) == 2 && (sortB.length / (Math.max(5, 10))) == 2));
    await refreshUserState();

   if ((megaphoneq << (Math.min(Math.abs(4), 3))) <= 2) {
       let shrunk1 = true;
       let subina = 3;
       let gmailD: Map<any, any> = new Map([[String.fromCharCode(116,111,107,101,110,115,95,116,95,53,56,0),String.fromCharCode(98,95,49,48,48,95,97,118,99,105,0)], [String.fromCharCode(120,95,50,49,95,100,111,119,110,109,105,120,0),String.fromCharCode(103,95,57,50,95,102,97,99,116,111,114,97,98,108,101,0)], [String.fromCharCode(112,111,115,116,115,99,97,108,101,95,115,95,56,49,0),String.fromCharCode(120,95,50,56,95,116,101,115,116,110,101,116,0)]]);
         subina %= Math.max(4, 3 | subina);
         gmailD = new Map([[`${gmailD.size}`, subina]]);
      while (5 <= (2 ^ subina)) {
         gmailD = new Map([[`${gmailD.size}`, gmailD.size << (Math.min(Math.abs(2), 4))]]);
         break;
      }
          let libavdeviceq = 5;
          let humidity2: Array<any> = [878, 392];
         gmailD.set(`${shrunk1}`, subina);
         libavdeviceq *= humidity2.length & libavdeviceq;
         humidity2.push(2);
      let greenarrowupf = 5154730 >= gmailD.size;
      do {
          let long_kA = 1.0;
          let flagP = 5;
          let dicelogoN = 5.0;
          let floater6 = String.fromCharCode(97,95,57,57,95,105,110,116,101,114,108,101,97,118,101,100,0);
         gmailD.set(`${dicelogoN}`, 2);
         long_kA /= Math.max(parseFloat(`${floater6.length}`), 3);
         flagP /= Math.max(flagP, 5);
         dicelogoN /= Math.max(5, parseFloat(`${2 | parseInt(`${long_kA}`)}`));
         floater6 += `${parseInt(`${long_kA}`) & 1}`;
         if (greenarrowupf) {
            break;
         }
      } while (greenarrowupf && (gmailD.get(`${subina}`) != null));
          let recommendationS = 2;
         shrunk1 = recommendationS > 67;
         shrunk1 = shrunk1 || gmailD.size >= 47;
          let libfbe = 5;
          let tickedy = String.fromCharCode(114,95,57,49,95,109,101,115,97,103,101,115,0);
          let reactnativeratingsh = false;
         subina <<= Math.min(Math.abs(libfbe), 1);
         libfbe %= Math.max(2, 3);
         tickedy = `${(1 * (reactnativeratingsh ? 4 : 1))}`;
          let foregroundH = 0;
         shrunk1 = (subina - gmailD.size) == 75;
         foregroundH -= foregroundH;
      megaphoneq <<= Math.min(2, Math.abs(sendx));
   }
      membershipR += `${statisticsactiveP}`;
      righte *= parseFloat(`${membershipR.length - megaphoneq}`);
      membershipR += `${sortB.length}`;
   while (4 >= (profileinactiver >> (Math.min(Math.abs(1), 2)))) {
      profileinactiver /= Math.max(3, 4);
      break;
   }
       let vietnamM: Array<any> = [509, 94, 493];
       let predictionbannerN: Map<any, any> = new Map([[String.fromCharCode(101,116,97,100,97,116,97,95,110,95,55,48,0),732], [String.fromCharCode(119,95,50,0),45]]);
         vietnamM.push(3 >> (Math.min(1, Math.abs(predictionbannerN.size))));
      while (1 <= (predictionbannerN.size / 1)) {
          let iconuserI = String.fromCharCode(97,97,117,100,105,111,95,100,95,55,0);
          let w_playerD: Array<any> = [171, 607, 64];
          let mappingK = 2.0;
         vietnamM = [vietnamM.length & 1];
         iconuserI = `${(iconuserI == String.fromCharCode(76,0) ? parseInt(`${mappingK}`) : iconuserI.length)}`;
         w_playerD.push(2);
         mappingK += w_playerD.length % (Math.max(1, 2));
         break;
      }
      if ((4 ^ predictionbannerN.size) == 4 || (vietnamM.length ^ 4) == 5) {
         predictionbannerN = new Map([[`${predictionbannerN.size}`, 1 ^ predictionbannerN.size]]);
      }
      if (predictionbannerN.get(`${vietnamM.length}`) != null) {
          let umeng5 = String.fromCharCode(104,95,51,53,95,115,117,98,98,108,111,99,107,0);
          let componentregistryV = 1;
          let subs0 = String.fromCharCode(99,111,112,121,118,95,49,95,49,52,0);
         vietnamM = [(String.fromCharCode(88,0) == umeng5 ? umeng5.length : componentregistryV)];
         componentregistryV &= subs0.length ^ subs0.length;
      }
      let codeF = 6400331 <= predictionbannerN.size;
      do {
         predictionbannerN.set(`${vietnamM.length}`, vietnamM.length);
         if (codeF) {
            break;
         }
      } while (codeF && (Array.from(predictionbannerN.keys()).includes(`${vietnamM.length}`)));
          let mbridgeQ = String.fromCharCode(97,95,53,52,95,99,98,112,104,105,0);
          let memberN = 2.0;
          let backwhiteP = String.fromCharCode(112,117,116,105,110,116,95,55,95,50,50,0);
         predictionbannerN = new Map([[backwhiteP, backwhiteP.length >> (Math.min(Math.abs(3), 4))]]);
         mbridgeQ += `${(mbridgeQ == String.fromCharCode(75,0) ? mbridgeQ.length : parseInt(`${memberN}`))}`;
         memberN *= parseInt(`${memberN}`) % (Math.max(mbridgeQ.length, 1));
      libswscalet.set(sortB, profileinactiver);
   while (megaphoneq <= 5) {
      megaphoneq <<= Math.min(5, Math.abs(questiconV.size));
      break;
   }
      membershipR = `${libswscalet.size}`;
      profileinactiver >>= Math.min(1, Math.abs(profileinactiver));
      sortB += `${goallogoA.length}`;
    setRefreshing(false);
  };

  const refreshUserState = async () => {
       let dialog3 = String.fromCharCode(111,109,109,111,110,95,105,95,51,50,0);
    let ticked7 = 0;
    let checkboxK = String.fromCharCode(113,95,49,53,95,114,101,118,101,114,116,0);
    let searchbara = 3;
    let leakcheckerU = 3.0;
    let kuaishouj = false;
    let phoneshares = 3.0;
    let penaltyshootF = String.fromCharCode(97,95,56,55,95,97,108,112,105,110,101,0);
    let bellg: Array<any> = [318, 67];
    let iconqqf = 3;
    let dicelogoz = 4.0;
    let iconuser1 = 5.0;
    let mbnativeJ: Map<any, any> = new Map([[String.fromCharCode(111,95,55,52,95,112,111,115,116,101,114,0),String.fromCharCode(98,95,55,54,95,98,105,116,109,97,115,107,0)], [String.fromCharCode(109,111,118,101,95,120,95,57,54,0),String.fromCharCode(119,114,111,110,103,95,115,95,57,56,0)]]);
    let othermatchdetailbg6 = true;
    let untick0 = 0.0;
   let iconrefresh2 = 6046264 >= penaltyshootF.length;
   do {
       let zcopy_fE = 0.0;
       let homeplayerO = 5;
       let crossz = 3;
       let promotionO: Map<any, any> = new Map([[String.fromCharCode(117,95,52,50,95,111,112,101,114,97,116,105,110,103,0),551], [String.fromCharCode(113,95,57,57,95,100,114,97,103,103,97,98,108,101,0),642], [String.fromCharCode(115,113,108,108,111,103,95,102,95,50,49,0),935]]);
         homeplayerO <<= Math.min(5, Math.abs(3 | promotionO.size));
       let dcopy_idW = 3;
       let profileframeN = 5;
      let footballtrophyH = 9756668 >= promotionO.size;
      do {
          let arrowrightG: Array<any> = [566, 989, 745];
         promotionO.set(`${profileframeN}`, 2 >> (Math.min(Math.abs(parseInt(`${zcopy_fE}`)), 4)));
         arrowrightG = [arrowrightG.length];
         if (footballtrophyH) {
            break;
         }
      } while ((!Array.from(promotionO.keys()).includes(`${homeplayerO}`)) && footballtrophyH);
      let iconorientation3 = dcopy_idW <= 9585560;
      do {
         dcopy_idW ^= profileframeN;
         if (iconorientation3) {
            break;
         }
      } while ((2 == (homeplayerO << (Math.min(Math.abs(dcopy_idW), 5))) || (2 << (Math.min(2, Math.abs(dcopy_idW)))) == 1) && iconorientation3);
         crossz -= 3 ^ homeplayerO;
         dcopy_idW <<= Math.min(1, Math.abs(2 ^ profileframeN));
       let bellreminder8 = String.fromCharCode(100,105,115,112,108,97,121,105,110,103,95,122,95,51,48,0);
         profileframeN /= Math.max(5, 2 / (Math.max(6, homeplayerO)));
          let basketballhometeam9 = 0;
         dcopy_idW *= 1 & bellreminder8.length;
         basketballhometeam9 *= 3 + basketballhometeam9;
      for (let o = 0; o < 3; o++) {
          let networkx = String.fromCharCode(112,101,111,112,108,101,95,122,95,56,51,0);
          let emoji_ = 1;
          let transferD = 5.0;
          let blackl: Array<any> = [String.fromCharCode(105,95,53,57,95,105,110,118,111,107,101,114,0), String.fromCharCode(98,105,108,97,116,101,114,97,108,95,56,95,51,52,0), String.fromCharCode(99,111,100,101,99,115,95,104,95,50,50,0)];
          let scoreZ = 2.0;
         zcopy_fE *= crossz / (Math.max(1, 2));
         networkx += `${emoji_}`;
         emoji_ *= parseInt(`${transferD}`) >> (Math.min(5, Math.abs(3)));
         transferD *= 1 - networkx.length;
         blackl.push(parseInt(`${scoreZ}`) % 1);
         scoreZ -= parseFloat(`${networkx.length}`);
      }
      for (let u = 0; u < 2; u++) {
         bellreminder8 = `${crossz}`;
      }
      if (1 == (1 + profileframeN)) {
         bellreminder8 += `${2 ^ dcopy_idW}`;
      }
      penaltyshootF += `${1 + parseInt(`${iconuser1}`)}`;
      if (iconrefresh2) {
         break;
      }
   } while (iconrefresh2 && (parseInt(`${dicelogoz}`) == penaltyshootF.length));
   for (let a = 0; a < 3; a++) {
      penaltyshootF = "1";
   }
   while ((searchbara / (Math.max(2, dicelogoz))) == 2.28) {
      dicelogoz -= parseFloat(`${checkboxK.length}`);
      break;
   }
      searchbara += iconqqf;
      phoneshares += parseFloat(`${checkboxK.length ^ ticked7}`);
      checkboxK += `${parseInt(`${iconuser1}`)}`;
   while (2 < (ticked7 + 5)) {
      dialog3 = `${parseInt(`${iconuser1}`)}`;
      break;
   }

    const result = await yysHomeloading.getUserDetails();

   while ((ticked7 | 3) <= 5 && 3 <= (parseInt(`${dicelogoz}`) + ticked7)) {
       let tooltipsB = String.fromCharCode(115,117,98,115,116,114,105,110,103,115,95,49,95,52,57,0);
       let sellmathbackgroundu = true;
       let leaguedetailsbgZ: Array<any> = [886, 397, 304];
       let klevinP = true;
      let mountingd = String.fromCharCode(101,98,55,122,110,109,57,102,122,0) == tooltipsB;
      do {
          let release_iy: Map<any, any> = new Map([[String.fromCharCode(104,97,115,104,107,101,121,95,98,95,50,57,0),321], [String.fromCharCode(108,97,115,116,95,97,95,51,0),0]]);
          let mappingh = 0.0;
          let friendsJ = 1.0;
          let modei = String.fromCharCode(97,110,111,110,121,109,111,117,115,95,49,95,55,50,0);
         tooltipsB = `${(2 | (sellmathbackgroundu ? 1 : 3))}`;
         release_iy = new Map([[`${mappingh}`, 3 ^ parseInt(`${friendsJ}`)]]);
         mappingh /= Math.max(parseFloat(`${release_iy.size / (Math.max(1, 4))}`), 3);
         friendsJ -= parseFloat(`${parseInt(`${friendsJ}`)}`);
         modei = "2";
         if (mountingd) {
            break;
         }
      } while (mountingd && (tooltipsB.length < 1));
      for (let f = 0; f < 1; f++) {
         klevinP = (((klevinP ? 94 : tooltipsB.length) ^ tooltipsB.length) >= 94);
      }
         tooltipsB += `${((sellmathbackgroundu ? 1 : 3) + 1)}`;
       let defaultbasketballbgY = String.fromCharCode(111,95,50,55,95,104,119,109,97,112,0);
       let dialogR = String.fromCharCode(100,117,114,98,105,110,95,101,95,52,54,0);
      while (defaultbasketballbgY.length == tooltipsB.length) {
         defaultbasketballbgY += `${defaultbasketballbgY.length << (Math.min(dialogR.length, 3))}`;
         break;
      }
       let livenodatabgimgR = 4;
       let confirmation8 = 1;
      while (5 >= confirmation8) {
          let fileG = 4;
         tooltipsB = `${leaguedetailsbgZ.length}`;
         fileG ^= 3 % (Math.max(8, fileG));
         break;
      }
      for (let a = 0; a < 2; a++) {
          let tooltipsU = String.fromCharCode(101,120,112,108,111,100,105,110,103,95,48,95,57,49,0);
          let awayplayer6: Map<any, any> = new Map([[String.fromCharCode(108,101,97,118,101,95,120,95,52,0),964], [String.fromCharCode(104,105,103,104,115,95,109,95,54,52,0),821]]);
          let uimanagere = 2.0;
         dialogR += `${confirmation8}`;
         tooltipsU = `${(tooltipsU == String.fromCharCode(68,0) ? tooltipsU.length : awayplayer6.size)}`;
         awayplayer6 = new Map([[`${awayplayer6.size}`, 2]]);
         uimanagere -= awayplayer6.size;
      }
         klevinP = dialogR.startsWith(`${livenodatabgimgR}`);
      let logos = 7049031 >= livenodatabgimgR;
      do {
         livenodatabgimgR -= 3;
         if (logos) {
            break;
         }
      } while (logos && ((5 & livenodatabgimgR) < 2 && 1 < (5 & dialogR.length)));
          let icondefaultthumbnailh = String.fromCharCode(118,105,118,111,95,50,95,52,56,0);
          let orangeclockJ = true;
          let chatroombackgroundd = 5.0;
         klevinP = 74 < (livenodatabgimgR << (Math.min(1, Math.abs(confirmation8))));
         icondefaultthumbnailh = `${icondefaultthumbnailh.length}`;
         orangeclockJ = !orangeclockJ;
         chatroombackgroundd /= Math.max(2, 3);
          let whitevideolivev: Map<any, any> = new Map([[String.fromCharCode(103,95,52,48,95,112,101,114,115,105,115,116,101,110,116,0),String.fromCharCode(114,101,99,101,110,116,95,48,95,53,57,0)], [String.fromCharCode(101,95,52,56,95,114,115,104,105,102,116,0),String.fromCharCode(100,97,115,104,101,115,95,121,95,56,53,0)], [String.fromCharCode(106,95,50,57,95,99,108,111,115,101,99,98,0),String.fromCharCode(105,110,102,108,97,116,101,95,116,95,54,51,0)]]);
          let details7 = String.fromCharCode(97,95,55,53,95,117,110,109,97,115,107,0);
         tooltipsB += `${livenodatabgimgR}`;
         whitevideolivev = new Map([[`${whitevideolivev.size}`, details7.length]]);
         details7 = `${1 - whitevideolivev.size}`;
      dicelogoz /= Math.max(3, (parseFloat(`${tooltipsB == String.fromCharCode(68,0) ? dialog3.length : tooltipsB.length}`)));
      break;
   }
   if (kuaishouj) {
      kuaishouj = leakcheckerU >= 75.68;
   }
   for (let s = 0; s < 1; s++) {
      bellg.push(checkboxK.length % 3);
   }
      leakcheckerU /= Math.max(parseFloat(`${parseInt(`${dicelogoz}`) + 3}`), 3);
      dicelogoz -= parseFloat(`${2}`);
      leakcheckerU *= parseFloat(`${iconqqf - dialog3.length}`);
   let predictionarroww = 7636636 <= ticked7;
   do {
      ticked7 &= dialog3.length;
      if (predictionarroww) {
         break;
      }
   } while (((3 | ticked7) > 2) && predictionarroww);
    if (result == null) {

       let profileinactivee = true;
       let temperature3 = 1.0;
         temperature3 *= parseFloat(`${parseInt(`${temperature3}`) / 1}`);
         temperature3 /= Math.max(5, parseFloat(`${parseInt(`${temperature3}`) % 3}`));
      while (profileinactivee) {
          let debug_ = String.fromCharCode(111,95,51,57,95,114,105,102,102,0);
          let dropdownd = String.fromCharCode(121,95,51,51,95,97,98,115,116,0);
          let rinit_ha: Map<any, any> = new Map([[String.fromCharCode(97,99,99,117,114,97,99,121,95,101,95,50,50,0),String.fromCharCode(114,95,54,49,95,117,110,112,97,99,107,108,111,0)], [String.fromCharCode(107,95,53,57,95,100,111,109,97,105,110,115,0),String.fromCharCode(117,95,50,49,95,103,114,101,97,116,101,114,0)]]);
          let defaultplayerimgn = String.fromCharCode(103,114,101,97,116,101,115,116,95,50,95,56,56,0);
          let default_a_l: Array<any> = [472, 375, 362];
         temperature3 *= parseFloat(`${defaultplayerimgn.length}`);
         debug_ += `${default_a_l.length}`;
         dropdownd += `${rinit_ha.size}`;
         rinit_ha = new Map([[`${rinit_ha.size}`, rinit_ha.size]]);
         defaultplayerimgn = `${dropdownd.length + 1}`;
         default_a_l.push(dropdownd.length);
         break;
      }
      while (4.29 <= temperature3) {
         temperature3 *= (parseFloat(`${parseInt(`${temperature3}`) - (profileinactivee ? 5 : 3)}`));
         break;
      }
         profileinactivee = !profileinactivee;
         profileinactivee = 49.57 >= temperature3;
      checkboxK += `${parseInt(`${leakcheckerU}`)}`;
      phoneshares -= parseFloat(`${1 % (Math.max(3, parseInt(`${iconuser1}`)))}`);
   let long_43B = dicelogoz >= 8380950.0;
   do {
      dicelogoz += parseFloat(`${parseInt(`${dicelogoz}`) / (Math.max(3, searchbara))}`);
      if (long_43B) {
         break;
      }
   } while ((dialog3.length > 4) && long_43B);
       let mbridger = String.fromCharCode(105,110,116,101,114,102,97,99,101,115,95,113,95,49,51,0);
       let trophyG: Map<any, any> = new Map([[String.fromCharCode(120,95,54,55,95,114,103,98,0),false ], [String.fromCharCode(119,105,116,110,101,115,115,95,106,95,52,51,0),true ]]);
         mbridger = `${trophyG.size & 1}`;
      if (1 > (1 - trophyG.size) && (1 - trophyG.size) > 1) {
         trophyG = new Map([[`${trophyG.size}`, trophyG.size]]);
      }
       let ticked3 = String.fromCharCode(110,95,52,53,95,116,111,110,101,109,97,112,0);
       let righti = String.fromCharCode(113,95,55,55,95,97,118,102,105,108,116,101,114,0);
      while (4 >= (1 & trophyG.size) || 1 >= (1 & trophyG.size)) {
          let dragclosea = 5.0;
         righti = `${ticked3.length}`;
         dragclosea += parseInt(`${dragclosea}`) + parseInt(`${dragclosea}`);
         break;
      }
         trophyG = new Map([[`${trophyG.size}`, ticked3.length + 1]]);
       let libfabricjniB = String.fromCharCode(103,95,56,57,95,119,105,110,116,104,114,101,97,100,0);
      dialog3 = `${1 / (Math.max(5, bellg.length))}`;
       let klevinj: Map<any, any> = new Map([[String.fromCharCode(113,115,99,97,108,101,95,108,95,50,52,0),false ], [String.fromCharCode(117,108,116,105,95,107,95,51,49,0),true ]]);
       let forwardF: Array<any> = [383, 818, 85];
         klevinj = new Map([[`${klevinj.size}`, forwardF.length]]);
      for (let a = 0; a < 3; a++) {
         forwardF.push(forwardF.length);
      }
       let shrunki = String.fromCharCode(112,95,51,55,95,118,108,98,117,102,0);
         klevinj = new Map([[`${klevinj.size}`, 1]]);
         klevinj.set(shrunki, shrunki.length);
          let promotionK = String.fromCharCode(112,97,97,100,95,100,95,53,55,0);
         forwardF.push(shrunki.length);
         promotionK = "2";
      checkboxK += `${parseInt(`${leakcheckerU}`) ^ 1}`;
      penaltyshootF = "2";
      iconuser1 *= 1;
      return;
    }

    await dispatch(updateUserAuth(result));

      leakcheckerU *= parseFloat(`${3}`);
      ticked7 >>= Math.min(Math.abs(penaltyshootF.length << (Math.min(3, Math.abs(parseInt(`${phoneshares}`))))), 1);
   let iconplayI = phoneshares >= 5804686.0;
   do {
      phoneshares /= Math.max(4, (parseFloat(`${String.fromCharCode(78,0) == dialog3 ? parseInt(`${dicelogoz}`) : dialog3.length}`)));
      if (iconplayI) {
         break;
      }
   } while (((phoneshares * 4.64) <= 3.7 && kuaishouj) && iconplayI);
   if (2 > iconqqf || (iconqqf % 2) > 3) {
       let calendarQ = String.fromCharCode(109,101,97,115,117,114,101,114,95,109,95,53,55,0);
      for (let z = 0; z < 3; z++) {
          let typingM = String.fromCharCode(99,108,111,115,101,115,95,120,95,55,51,0);
         calendarQ += `${calendarQ.length % (Math.max(typingM.length, 6))}`;
      }
         calendarQ += `${1 + calendarQ.length}`;
         calendarQ += `${calendarQ.length / (Math.max(3, calendarQ.length))}`;
      kuaishouj = calendarQ.endsWith(`${searchbara}`);
   }
   for (let w = 0; w < 2; w++) {
      ticked7 -= ticked7;
   }
      bellg.push(iconqqf);
      dicelogoz /= Math.max(parseFloat(`${checkboxK.length >> (Math.min(4, Math.abs(parseInt(`${leakcheckerU}`))))}`), 1);
    return;
  };

  return (
    <ScreenContainer>
      <TitleWithBackButtonHeader title="邀请好友奖励" />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} tintColor="#FAC33D" />
        }
      >
        {/* <TitleWithBackButtonHeader title="邀请好友奖励" /> */}
        <View style={{ paddingHorizontal: 0 }}>
          { }
          <InviteHeader />
          { }
          <InviteCard userState={userState.user!} />
          { }

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("活动规则");
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                paddingVertical: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  textDecorationLine: "underline",
                  color: "#ffffff",
                }}
              >
                活动规则
              </Text>
            </View>
          </TouchableOpacity>
          { }
        </View>
        <InviteStep />
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({});
