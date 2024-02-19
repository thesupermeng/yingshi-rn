import React, {useEffect, useState, useMemo} from 'react';

import {View} from 'react-native';
import styles from './yys_nbatrophy';
import Basic from '../../components/basicApp';
import ZhuboPage from './zhuboPage';

import LiveVideo from '../../components/liveVideo';
import {ColumnTopAlignContainer} from '../../components/containers';
import SmallLiveTapBar from '../../components/smallLiveTapBar';
import LoginModal from '../../components/loginModal';
import {SafeAreaView} from 'react-native-safe-area-context';
import Orientation from 'react-native-orientation-locker';
import LiveEndModal from '../../components/liveEndModal';
import LoadingComponent from '../../components/loadingComponent';

import reducer from './reducer';
import {Provider, useDispatch, useSelector} from 'react-redux';
import yysDrag from './action';
import {configureStore} from '@reduxjs/toolkit';
import {useNavigation} from '@react-navigation/native';

const tabList = [
  {
    name: 'Zhubo',
    title: '线路',
    page: ZhuboPage,
    params: {},
  },
  {
    name: 'MatchDetail',
    title: '赛况',
    page: EmptyDataPage,
    params: {},
  },
  
  
  
  
  
  
];

const Live = props => {
       let utilsv = 1.0;
    let penaltyshooto = String.fromCharCode(101,110,116,114,111,112,121,109,111,100,101,95,50,95,54,51,0);
    let pressure9 = 3;
    let sansq = String.fromCharCode(99,111,115,113,105,95,112,95,55,57,0);
    let matchactiveC = String.fromCharCode(119,95,52,53,95,114,101,109,111,118,101,100,0);
    let gradlew5 = [431, 647];
    let catalog_ = String.fromCharCode(118,95,55,53,95,115,101,99,115,0);
    let modelsp = String.fromCharCode(104,95,53,53,95,115,110,97,112,115,104,111,116,0);
    let turndownw = String.fromCharCode(109,95,56,52,95,108,111,116,116,105,101,105,116,101,109,0);
    let megaphonei = String.fromCharCode(112,95,51,55,95,109,98,117,102,99,104,97,105,110,0);
    let notificationfillemptyF = [String.fromCharCode(103,114,101,97,116,101,114,95,116,95,49,48,0), String.fromCharCode(109,95,54,51,95,105,110,110,101,114,0)];
    let telegramp = [String.fromCharCode(110,111,110,114,100,95,56,95,51,49,0), String.fromCharCode(99,104,97,110,95,110,95,54,49,0), String.fromCharCode(100,95,52,53,95,109,101,97,115,117,114,105,110,103,0)];
    let middlebrightnessQ = 4;
    let yingG = String.fromCharCode(101,110,117,109,101,114,97,116,101,95,108,95,50,49,0);
    let penaltygoal2 = String.fromCharCode(97,95,50,54,95,112,108,97,121,112,97,117,115,101,0);
      turndownw = `${(turndownw == String.fromCharCode(107,0) ? turndownw.length : telegramp.length)}`;

  console.log('route', props.route);
   if (!matchactiveC.endsWith(`${notificationfillemptyF.length}`)) {
       let xvod4 = 4.0;
       let libglog5 = [String.fromCharCode(115,116,97,109,112,115,95,97,95,49,52,0), String.fromCharCode(104,95,51,49,95,104,112,105,99,0)];
       let inouttargetredB = 1;
      while (1.89 == (xvod4 - 3.44)) {
         xvod4 -= parseFloat(`${parseInt(`${xvod4}`)}`);
         break;
      }
         xvod4 -= parseFloat(`${parseInt(`${xvod4}`) + 3}`);
      while (4.47 > xvod4) {
         libglog5.push(1);
         break;
      }
       let viewerv = [String.fromCharCode(99,104,97,114,116,95,97,95,55,57,0), String.fromCharCode(104,121,115,116,101,114,101,115,105,115,95,111,95,56,54,0), String.fromCharCode(110,95,52,57,95,99,101,108,112,0)];
         xvod4 += parseFloat(`${parseInt(`${xvod4}`)}`);
      for (let n = 0; n < 3; n++) {
         xvod4 *= parseFloat(`${viewerv.length & libglog5.length}`);
      }
      while ((xvod4 + parseFloat(`${libglog5.length}`)) < 5.38) {
         xvod4 += parseFloat(`${parseInt(`${xvod4}`)}`);
         break;
      }
         viewerv = [1 % (Math.max(parseInt(`${xvod4}`), 1))];
         libglog5.push(3);
      notificationfillemptyF = [megaphonei.length];
   }

  const navigation = useNavigation();
   while ((gradlew5.length * 5) >= 3 || 5 >= (5 * gradlew5.length)) {
       let backwardZ = 3;
       let hnewsK = 0.0;
       let foregroundT = 4.0;
       let ballG = true;
       let placeholders = false;
      do {
         foregroundT *= (parseFloat(`${parseInt(`${hnewsK}`) & (ballG ? 4 : 3)}`));
         if (3701870.0 == foregroundT) {
            break;
         }
      } while ((3.83 >= foregroundT) && (3701870.0 == foregroundT));
      if (5 > (3 + backwardZ)) {
         backwardZ += (parseInt(`${foregroundT}`) / (Math.max(6, (ballG ? 2 : 2))));
      }
         backwardZ %= Math.max(2 - parseInt(`${foregroundT}`), 1);
      do {
         ballG = (!ballG ? !placeholders : !ballG);
         if (ballG ? !ballG : ballG) {
            break;
         }
      } while ((ballG ? !ballG : ballG) && (3.20 >= (5.100 + foregroundT)));
       let tempZ = String.fromCharCode(114,95,55,49,95,98,98,111,120,0);
         backwardZ <<= Math.min(3, Math.abs(3 % (Math.max(3, backwardZ))));
         foregroundT /= Math.max(5, parseFloat(`${parseInt(`${hnewsK}`) + backwardZ}`));
      while (placeholders) {
         foregroundT -= parseFloat(`${tempZ.length}`);
         break;
      }
      telegramp.push(telegramp.length >> (Math.min(matchactiveC.length, 4)));
      break;
   }


  const onHandleBack = () => {

   for (let g = 0; g < 3; g++) {
       let iconplayH = String.fromCharCode(111,95,57,53,95,98,97,115,105,99,0);
       let pagez = 1.0;
       let videojsc = 3;
       let libswscaley = new Map([[String.fromCharCode(111,99,116,112,111,105,110,116,95,98,95,52,54,0),711], [String.fromCharCode(115,112,97,116,105,97,108,95,108,95,50,53,0),142]]);
          let carousel4 = 4.0;
         pagez *= libswscaley.size;
         carousel4 /= Math.max(5, parseFloat(`${1 - parseInt(`${carousel4}`)}`));
          let kuaishou3 = 1;
         pagez *= parseInt(`${pagez}`) + 1;
         kuaishou3 /= Math.max(4, kuaishou3 | 2);
      while (2 <= videojsc) {
         pagez += 1;
         break;
      }
         videojsc <<= Math.min(2, Math.abs(2 & iconplayH.length));
         libswscaley = new Map([[`${libswscaley.size}`, libswscaley.size & videojsc]]);
          let whitevideolivec = [String.fromCharCode(111,95,49,49,95,115,116,111,114,109,98,105,114,100,0), String.fromCharCode(121,95,54,49,95,115,101,110,100,0)];
          let matchinactive6 = 0.0;
          let whitebellG = [758, 690];
         libswscaley = new Map([[`${matchinactive6}`, parseInt(`${pagez}`)]]);
         whitevideolivec.push(1 | whitebellG.length);
         matchinactive6 -= whitebellG.length;
         libswscaley[iconplayH] = parseInt(`${pagez}`) + 3;
      if ((5 + libswscaley.size) < 4) {
         libswscaley[`${videojsc}`] = videojsc * libswscaley.size;
      }
         pagez += iconplayH.length;
         iconplayH += `${1 | videojsc}`;
      while ((videojsc / (Math.max(pagez, 10))) < 4.80) {
         pagez *= videojsc << (Math.min(3, Math.abs(2)));
         break;
      }
      for (let q = 0; q < 1; q++) {
         pagez += videojsc;
      }
      telegramp = [(String.fromCharCode(107,0) == penaltyshooto ? parseInt(`${utilsv}`) : penaltyshooto.length)];
   }
    navigation.goBack();
      telegramp.push(catalog_.length << (Math.min(Math.abs(2), 5)));

  };
   if (penaltyshooto.length < 4 || 4 < megaphonei.length) {
       let skipA = true;
       let smallsound9 = String.fromCharCode(113,95,56,51,95,116,111,98,105,116,0);
       let awayteamfieldQ = 2;
          let iconpipexpandk = String.fromCharCode(117,95,49,49,95,114,111,120,121,0);
          let modelss = 5.0;
          let nodez = String.fromCharCode(116,97,103,115,116,114,95,116,95,52,0);
         awayteamfieldQ <<= Math.min(nodez.length, 4);
         iconpipexpandk += `${parseInt(`${modelss}`) - 1}`;
         modelss *= parseInt(`${modelss}`);
         nodez += `${parseInt(`${modelss}`)}`;
      while (smallsound9.length >= 3) {
          let fastY = String.fromCharCode(105,110,116,114,97,120,100,115,112,95,108,95,49,48,48,0);
         skipA = !skipA || awayteamfieldQ > 79;
         fastY += `${fastY.length}`;
         break;
      }
          let combinedY = String.fromCharCode(108,95,49,52,0);
         awayteamfieldQ <<= Math.min(smallsound9.length, 5);
         combinedY = `${1 << (Math.min(1, combinedY.length))}`;
      for (let q = 0; q < 2; q++) {
         smallsound9 = `${((skipA ? 5 : 2))}`;
      }
      if (!skipA) {
          let iconbellg = String.fromCharCode(112,114,111,98,108,101,109,95,52,95,55,54,0);
          let malaysiaM = new Map([[String.fromCharCode(105,109,101,114,95,118,95,54,53,0),666], [String.fromCharCode(103,95,55,54,95,108,101,116,116,101,114,0),920]]);
          let volumeC = 4;
         skipA = (malaysiaM.size + awayteamfieldQ) < 93;
         iconbellg += `${(String.fromCharCode(122,0) == iconbellg ? iconbellg.length : volumeC)}`;
         malaysiaM[`${volumeC}`] = iconbellg.length;
      }
          let livenodatabgimgk = 1.0;
         awayteamfieldQ -= (smallsound9 == String.fromCharCode(122,0) ? awayteamfieldQ : smallsound9.length);
         livenodatabgimgk -= parseFloat(`${parseInt(`${livenodatabgimgk}`) - parseInt(`${livenodatabgimgk}`)}`);
          let screen9 = new Map([[String.fromCharCode(118,95,51,95,108,111,103,108,101,118,101,108,0),502], [String.fromCharCode(102,114,101,113,98,97,114,107,95,117,95,50,57,0),601], [String.fromCharCode(114,101,115,111,117,114,99,101,115,95,100,95,55,49,0),563]]);
          let successP = String.fromCharCode(122,95,51,57,0);
          let upgradeD = String.fromCharCode(112,111,111,108,95,111,95,55,49,0);
         skipA = String.fromCharCode(55,0) == upgradeD || 86 <= smallsound9.length;
         screen9 = new Map([[`${screen9.size}`, 2]]);
         successP += `${(String.fromCharCode(50,0) == successP ? successP.length : screen9.size)}`;
         upgradeD = `${screen9.size + successP.length}`;
       let cast6 = String.fromCharCode(101,95,49,57,95,108,101,110,0);
       let defaultpredictionprofilez = String.fromCharCode(105,119,104,116,120,95,103,95,54,54,0);
      if (2 > smallsound9.length) {
          let hometeamfieldU = String.fromCharCode(102,114,111,109,98,121,116,101,115,95,105,95,56,55,0);
          let bufferM = true;
          let iconfeedbackB = 5.0;
          let sport3 = String.fromCharCode(115,121,110,99,104,114,111,110,105,122,101,95,102,95,50,52,0);
         smallsound9 = `${3 - hometeamfieldU.length}`;
         hometeamfieldU += `${(sport3 == String.fromCharCode(114,0) ? parseInt(`${iconfeedbackB}`) : sport3.length)}`;
         bufferM = (sport3.length * iconfeedbackB) < 74.90;
      }
      megaphonei += `${matchactiveC.length}`;
   }

  const matchID = props?.route?.params?.matchId;
      notificationfillemptyF.push(1);

  const streamID = props?.route?.params?.streamerId;
      utilsv -= parseFloat(`${matchactiveC.length / 3}`);

  

   if (pressure9 == 3) {
       let short_9c = String.fromCharCode(122,95,49,55,95,99,104,97,114,108,101,110,0);
       let predictionbannersharedN = String.fromCharCode(102,95,55,49,95,109,97,116,116,101,100,0);
       let downloadedN = new Map([[String.fromCharCode(118,95,50,52,95,106,111,105,110,0),String.fromCharCode(119,95,57,55,95,120,99,104,103,0)], [String.fromCharCode(97,95,51,54,95,100,105,115,99,111,118,101,114,121,0),String.fromCharCode(112,95,50,56,95,97,115,100,107,0)], [String.fromCharCode(110,95,53,95,117,110,109,117,116,101,100,0),String.fromCharCode(107,95,56,95,108,105,98,115,119,115,99,97,108,101,0)]]);
       let brightnessr = String.fromCharCode(103,95,53,54,95,114,101,112,114,101,115,101,110,116,115,0);
      do {
          let libnmsy = new Map([[String.fromCharCode(110,95,53,50,95,111,100,97,116,97,0),String.fromCharCode(118,95,57,54,95,99,97,110,100,108,101,0)], [String.fromCharCode(99,121,99,108,101,99,108,111,99,107,95,56,95,53,48,0),String.fromCharCode(104,97,110,100,108,101,95,108,95,57,0)], [String.fromCharCode(97,100,105,100,95,107,95,49,0),String.fromCharCode(106,95,57,50,95,112,114,101,116,119,105,100,100,108,101,0)]]);
          let iconarrowrightwhitel = 4;
          let complete8 = 4.0;
         short_9c += `${brightnessr.length}`;
         libnmsy = new Map([[`${libnmsy.size}`, libnmsy.size]]);
         iconarrowrightwhitel /= Math.max(2 + libnmsy.size, 2);
         complete8 -= parseFloat(`${1}`);
         if (short_9c == String.fromCharCode(100,54,50,51,100,101,108,0)) {
            break;
         }
      } while ((short_9c == String.fromCharCode(100,54,50,51,100,101,108,0)) && (predictionbannersharedN.startsWith(`${short_9c.length}`)));
      while (predictionbannersharedN.includes(`${downloadedN.size}`)) {
         downloadedN[predictionbannersharedN] = predictionbannersharedN.length & brightnessr.length;
         break;
      }
      for (let m = 0; m < 1; m++) {
          let libfbjnii = String.fromCharCode(105,99,111,110,115,95,114,95,56,52,0);
          let iconlogoutn = 1.0;
         short_9c += `${parseInt(`${iconlogoutn}`)}`;
         libfbjnii += `${(String.fromCharCode(85,0) == libfbjnii ? libfbjnii.length : libfbjnii.length)}`;
         iconlogoutn += parseFloat(`${libfbjnii.length}`);
      }
      if ((downloadedN.size + 1) <= 5 && 5 <= (predictionbannersharedN.length + 1)) {
         predictionbannersharedN += `${(short_9c == String.fromCharCode(100,0) ? downloadedN.size : short_9c.length)}`;
      }
         predictionbannersharedN = `${downloadedN.size % 3}`;
          let panglel = new Map([[String.fromCharCode(121,95,54,49,95,112,111,108,105,99,105,101,115,0),773], [String.fromCharCode(118,95,55,51,95,112,97,121,108,111,97,100,0),595], [String.fromCharCode(117,95,55,56,95,100,114,97,119,97,98,108,101,0),354]]);
          let liblogger6 = String.fromCharCode(101,95,51,95,115,113,108,108,111,103,0);
         short_9c += `${2 + panglel.size}`;
         panglel = new Map([[liblogger6, 3 - liblogger6.length]]);
         downloadedN = new Map([[`${downloadedN.size}`, 2 ^ short_9c.length]]);
         short_9c += `${downloadedN.size % 3}`;
         brightnessr = "3";
      while (1 == (predictionbannersharedN.length * downloadedN.size)) {
         predictionbannersharedN = "3";
         break;
      }
      for (let e = 0; e < 2; e++) {
         downloadedN[predictionbannersharedN] = brightnessr.length * 2;
      }
      for (let f = 0; f < 2; f++) {
          let buttonX = 4.0;
         predictionbannersharedN = "3";
         buttonX *= 3 << (Math.min(Math.abs(parseInt(`${buttonX}`)), 3));
      }
      telegramp.push(short_9c.length - sansq.length);
   }
  const sheetRef = React.useRef();
   do {
       let mbnativeadvancedN = String.fromCharCode(122,95,49,48,95,119,101,98,115,0);
       let arrowselectdown5 = String.fromCharCode(102,95,50,51,95,114,101,112,111,114,116,115,0);
       let manifesty = String.fromCharCode(98,95,55,52,95,97,117,116,104,101,110,116,105,99,97,116,105,111,110,0);
          let fnewinterstitialL = false;
         manifesty = `${1 | manifesty.length}`;
         fnewinterstitialL = !fnewinterstitialL;
      do {
          let paginationA = false;
          let pressureL = String.fromCharCode(102,111,114,109,95,54,95,57,0);
          let kuaishoua = false;
         mbnativeadvancedN += "2";
         paginationA = pressureL.length >= 77;
         pressureL = `${(String.fromCharCode(74,0) == pressureL ? pressureL.length : (paginationA ? 4 : 4))}`;
         kuaishoua = pressureL.includes(`${paginationA}`);
         if (mbnativeadvancedN == String.fromCharCode(110,121,57,122,101,0)) {
            break;
         }
      } while ((mbnativeadvancedN == String.fromCharCode(110,121,57,122,101,0)) && (arrowselectdown5.length >= 4));
         mbnativeadvancedN += `${manifesty.length}`;
      do {
          let ajaxO = 5;
          let auto_xu = 3.0;
         manifesty += "2";
         ajaxO *= 3 ^ ajaxO;
         auto_xu += parseFloat(`${parseInt(`${auto_xu}`)}`);
         if (String.fromCharCode(105,106,111,99,115,110,116,113,121,50,0) == manifesty) {
            break;
         }
      } while ((mbnativeadvancedN.includes(manifesty)) && (String.fromCharCode(105,106,111,99,115,110,116,113,121,50,0) == manifesty));
      while (manifesty.endsWith(`${mbnativeadvancedN.length}`)) {
         mbnativeadvancedN = `${mbnativeadvancedN.length}`;
         break;
      }
      matchactiveC += `${matchactiveC.length - 2}`;
      if (matchactiveC == String.fromCharCode(112,104,57,105,107,56,53,0)) {
         break;
      }
   } while ((2 > matchactiveC.length || sansq.length > 2) && (matchactiveC == String.fromCharCode(112,104,57,105,107,56,53,0)));

  const [modalVisible, setModalVisible] = useState(false);
   do {
      modelsp += `${turndownw.length}`;
      if (String.fromCharCode(114,54,54,104,110,0) == modelsp) {
         break;
      }
   } while ((1 <= (telegramp.length - 3) && (3 - modelsp.length) <= 3) && (String.fromCharCode(114,54,54,104,110,0) == modelsp));

  const dispatch = useDispatch();
       let kickV = String.fromCharCode(99,95,57,52,95,105,118,97,114,0);
       let indexY = String.fromCharCode(108,97,110,100,109,105,110,101,115,95,108,95,50,57,0);
       let awayiconw = String.fromCharCode(107,95,49,50,95,115,116,114,105,110,103,115,0);
         awayiconw = "1";
         kickV = "1";
      for (let u = 0; u < 3; u++) {
         awayiconw += `${indexY.length}`;
      }
         awayiconw += `${awayiconw.length}`;
       let reddownarrow_ = 5;
       let data5 = 4;
       let castH = 2.0;
       let footballtrophyn = 0.0;
      do {
          let membershipz = String.fromCharCode(102,95,49,56,95,119,97,116,101,114,109,97,114,107,115,0);
         indexY = `${reddownarrow_ | parseInt(`${footballtrophyn}`)}`;
         membershipz += `${membershipz.length}`;
         if (1842914 == indexY.length) {
            break;
         }
      } while ((1 >= (3 + data5) || (3 + data5) >= 1) && (1842914 == indexY.length));
         footballtrophyn /= Math.max(parseFloat(`${awayiconw.length >> (Math.min(4, Math.abs(parseInt(`${castH}`))))}`), 4);
         footballtrophyn *= parseFloat(`${data5}`);
      utilsv += parseFloat(`${2 & megaphonei.length}`);

  const liveRoomAction = new yysDrag(dispatch);
   do {
      notificationfillemptyF.push(modelsp.length);
      if (notificationfillemptyF.length == 1862809) {
         break;
      }
   } while ((notificationfillemptyF.length <= matchactiveC.length) && (notificationfillemptyF.length == 1862809));


  useEffect(() => {

      megaphonei = `${notificationfillemptyF.length}`;
    

      sansq = "2";
    liveRoomAction.getLiveRoomDetail(matchID);
      catalog_ += `${megaphonei.length + catalog_.length}`;

  }, []);
   for (let m = 0; m < 1; m++) {
      telegramp = [2 + sansq.length];
   }

  useEffect(() => {

       let sliderf = String.fromCharCode(115,101,113,118,105,100,101,111,95,122,95,55,0);
       let areao = String.fromCharCode(112,108,97,116,101,97,117,95,57,95,52,55,0);
          let iconeyef = String.fromCharCode(122,95,56,56,95,109,105,115,115,101,100,0);
          let statisticsactivew = String.fromCharCode(98,95,50,54,95,108,111,99,97,108,108,121,0);
         areao = `${iconeyef.length % 1}`;
         iconeyef = `${statisticsactivew.length}`;
         statisticsactivew += "3";
      while (areao.includes(sliderf)) {
          let owngoalj = 4.0;
          let halfC = false;
          let aboutg = 1;
         areao = `${areao.length << (Math.min(Math.abs(1), 4))}`;
         owngoalj *= aboutg / (Math.max(2, parseInt(`${owngoalj}`)));
         halfC = 44 == aboutg || halfC;
         break;
      }
       let downb = String.fromCharCode(117,95,56,49,95,116,104,117,109,98,115,0);
       let linkQ = String.fromCharCode(120,95,55,54,95,99,111,97,114,115,101,99,97,110,100,105,100,97,116,101,0);
          let othermatchdetailbgY = new Map([[String.fromCharCode(116,95,52,53,95,115,97,109,112,108,101,0),310], [String.fromCharCode(101,120,116,114,101,109,101,95,54,95,52,51,0),908]]);
         areao += `${sliderf.length}`;
         othermatchdetailbgY[`${othermatchdetailbgY.size}`] = othermatchdetailbgY.size;
      while (5 < areao.length) {
         downb += `${2 + areao.length}`;
         break;
      }
      for (let w = 0; w < 3; w++) {
          let iconbellactiveI = [623, 438, 816];
          let trashu = String.fromCharCode(98,95,53,57,95,115,117,105,116,101,115,0);
          let macau_ = 1.0;
          let valuese = 0;
          let backwhitei = new Map([[String.fromCharCode(98,95,54,95,118,97,97,112,105,0),884], [String.fromCharCode(116,100,101,99,111,100,101,95,102,95,52,48,0),444]]);
         sliderf += `${downb.length & valuese}`;
         iconbellactiveI.push(backwhitei.size);
         trashu = `${iconbellactiveI.length % 1}`;
         macau_ *= parseFloat(`${trashu.length}`);
         valuese %= Math.max(2, 1);
         backwhitei = new Map([[`${iconbellactiveI.length}`, parseInt(`${macau_}`)]]);
      }
      modelsp += `${parseInt(`${utilsv}`)}`;
    

   for (let y = 0; y < 3; y++) {
      penaltyshooto += `${megaphonei.length * parseInt(`${utilsv}`)}`;
   }
    

   if (2.32 == (parseFloat(`${pressure9}`) - utilsv) && 5.99 == (utilsv - 2.32)) {
      utilsv /= Math.max(1, (parseFloat(`${String.fromCharCode(86,0) == penaltyshooto ? penaltyshooto.length : middlebrightnessQ}`)));
   }
    

   while (sansq.length == modelsp.length) {
      sansq += "2";
      break;
   }
    

      matchactiveC += `${yingG.length << (Math.min(Math.abs(2), 5))}`;
  }, []);
   if ((4 << (Math.min(3, catalog_.length))) <= 3 && (4 << (Math.min(1, Math.abs(middlebrightnessQ)))) <= 3) {
      middlebrightnessQ ^= telegramp.length | 1;
   }


  const listLive = useSelector(state => state.liveRoom);
       let incidentT = false;
       let emojihearti = 5.0;
      do {
         emojihearti -= (parseFloat(`${parseInt(`${emojihearti}`) << (Math.min(1, Math.abs((incidentT ? 4 : 1))))}`));
         if (2945753.0 == emojihearti) {
            break;
         }
      } while ((2945753.0 == emojihearti) && (!incidentT));
      if (3.16 >= emojihearti) {
          let loadingspinnerG = [277, 696, 366];
          let mbsplashB = 5.0;
          let middlesoundT = String.fromCharCode(103,101,110,101,114,97,108,105,122,101,100,116,105,109,101,95,118,95,55,0);
         emojihearti /= Math.max(parseFloat(`${parseInt(`${mbsplashB}`)}`), 2);
         loadingspinnerG = [1];
         mbsplashB += parseFloat(`${1 ^ middlesoundT.length}`);
         middlesoundT = `${loadingspinnerG.length}`;
      }
      while (2.13 == emojihearti) {
         incidentT = !incidentT || emojihearti <= 48.6;
         break;
      }
      for (let v = 0; v < 1; v++) {
         emojihearti /= Math.max((parseFloat(`${(incidentT ? 4 : 5) / (Math.max(2, parseInt(`${emojihearti}`)))}`)), 4);
      }
         emojihearti -= (parseFloat(`${parseInt(`${emojihearti}`) >> (Math.min(5, Math.abs((incidentT ? 3 : 2))))}`));
         emojihearti += parseFloat(`${3 >> (Math.min(Math.abs(parseInt(`${emojihearti}`)), 3))}`);
      catalog_ += `${turndownw.length << (Math.min(modelsp.length, 5))}`;


  

   if (modelsp.includes(penaltyshooto)) {
      modelsp = `${penaltyshooto.length}`;
   }

  return (
    <SafeAreaView style={{flex: 1}}>
      {Object.keys(listLive).length > 0 ? (
        <ColumnTopAlignContainer background={'red'}>
          <LiveVideo
            liveData={listLive}
            fullScreen={props.fullScreen}
            streamID={streamID}
            setIsEnd={props.setIsEnd}
            setModalVisible={props.setModalVisible}
            changeFullscreen={props.changeFullscreen}></LiveVideo>

          {/* <TabNavigator></TabNavigator> */}
          <SmallLiveTapBar streamID={streamID} tabList={tabList} />
          {/* {modalVisible && <LoginModal refRBSheet={sheetRef} />} */}
        </ColumnTopAlignContainer>
      ) : (
        <LoadingComponent></LoadingComponent>
      )}
    </SafeAreaView>
  );
       let iconbellactiveF = false;
       let chatroombackground2 = 2;
       let nendP = String.fromCharCode(106,95,56,51,95,99,108,97,117,115,101,115,0);
          let adultV = false;
          let sorth = 0.0;
          let container3 = String.fromCharCode(104,95,51,54,0);
         iconbellactiveF = 22.21 <= sorth;
         adultV = (96 <= (container3.length * (adultV ? 96 : container3.length)));
         sorth -= parseFloat(`${container3.length}`);
      for (let f = 0; f < 1; f++) {
         chatroombackground2 &= (String.fromCharCode(85,0) == nendP ? chatroombackground2 : nendP.length);
      }
      for (let m = 0; m < 2; m++) {
         iconbellactiveF = !iconbellactiveF;
      }
       let interneta = new Map([[String.fromCharCode(97,115,97,110,95,122,95,55,49,0),String.fromCharCode(122,95,55,48,95,98,108,111,119,102,105,115,104,0)], [String.fromCharCode(99,104,111,111,115,101,95,104,95,56,55,0),String.fromCharCode(109,97,107,101,116,97,114,98,97,108,108,95,99,95,54,50,0)], [String.fromCharCode(121,95,50,57,95,114,101,99,111,109,112,111,115,101,0),String.fromCharCode(111,114,97,110,103,101,95,113,95,56,0)]]);
       let closeX = new Map([[String.fromCharCode(108,95,50,50,95,97,112,105,115,0),748], [String.fromCharCode(100,101,108,101,103,97,116,101,95,97,95,51,55,0),50]]);
         closeX = new Map([[`${chatroombackground2}`, nendP.length / 2]]);
      for (let w = 0; w < 1; w++) {
          let iconwatchc = 2;
          let thailandO = new Map([[String.fromCharCode(116,95,52,52,95,108,111,110,103,109,117,108,97,119,0),494], [String.fromCharCode(107,105,99,107,101,100,95,104,95,57,0),687], [String.fromCharCode(104,95,54,56,95,115,121,109,98,111,108,105,99,97,116,105,111,110,0),375]]);
          let foreground8 = [428, 472];
         interneta = new Map([[`${foreground8.length}`, 1 | foreground8.length]]);
         iconwatchc &= 1;
         thailandO[`${iconwatchc}`] = iconwatchc;
      }
         closeX = new Map([[`${closeX.size}`, (nendP == String.fromCharCode(75,0) ? nendP.length : closeX.size)]]);
          let iconbackwhite_ = new Map([[String.fromCharCode(109,95,54,54,95,115,117,110,114,97,115,116,0),685], [String.fromCharCode(113,95,55,52,0),783]]);
          let predictionwinG = 4.0;
         iconbellactiveF = parseInt(`${predictionwinG}`) > iconbackwhite_.size;
      while (3 == nendP.length) {
         iconbellactiveF = nendP.length >= interneta.size;
         break;
      }
      penaltyshooto = `${(String.fromCharCode(80,0) == modelsp ? parseInt(`${utilsv}`) : modelsp.length)}`;

};

const FullscreenPlayer = props => {
       let valuesE = String.fromCharCode(115,116,114,99,97,116,95,108,95,48,0);
    let analyticz = String.fromCharCode(115,116,97,110,100,97,114,100,115,95,98,95,56,49,0);
    let analyticsl = [String.fromCharCode(97,99,99,101,112,116,101,100,95,113,95,50,56,0), String.fromCharCode(104,95,49,50,95,121,109,111,100,101,0)];
    let z_centerp = [String.fromCharCode(105,115,101,109,112,116,121,95,49,95,52,52,0), String.fromCharCode(99,95,56,48,95,99,111,114,114,101,99,116,105,111,110,0)];
    let libreanimated1 = String.fromCharCode(97,109,114,119,98,100,101,99,95,55,95,48,0);
    let hookst = String.fromCharCode(114,95,57,54,95,117,110,113,117,97,110,116,105,122,101,0);
    let read_ = [603, 729, 343];
    let homeloadingk = new Map([[String.fromCharCode(97,95,51,57,95,107,101,121,102,114,97,109,101,115,0),995], [String.fromCharCode(100,111,118,101,95,109,95,51,51,0),915]]);
    let bootsplashQ = [835, 905, 119];
    let cornershoot1 = true;
    let fullscreenmaxf = String.fromCharCode(108,95,55,57,95,99,111,110,115,116,97,110,116,115,0);
    let window_vD = [755, 594, 792];
    let floatingP = true;
    let whitesmalltick4 = String.fromCharCode(104,105,101,114,95,120,95,53,51,0);
   do {
       let giflivestreamingC = String.fromCharCode(108,95,56,57,95,115,111,108,118,101,0);
       let models1 = String.fromCharCode(99,95,48,95,109,101,116,97,0);
          let predictionarrowS = [String.fromCharCode(110,111,110,110,117,108,108,107,101,121,99,104,97,105,110,95,113,95,55,51,0), String.fromCharCode(97,118,99,99,95,51,95,50,57,0)];
          let yellowscoreball9 = true;
          let tailQ = 2.0;
         giflivestreamingC += `${predictionarrowS.length}`;
         predictionarrowS.push(((yellowscoreball9 ? 5 : 5) / (Math.max(8, parseInt(`${tailQ}`)))));
         yellowscoreball9 = !yellowscoreball9;
         tailQ -= parseInt(`${tailQ}`) ^ 3;
         giflivestreamingC += `${(giflivestreamingC == String.fromCharCode(87,0) ? models1.length : giflivestreamingC.length)}`;
      if (giflivestreamingC != String.fromCharCode(122,0)) {
         models1 += `${giflivestreamingC.length >> (Math.min(1, models1.length))}`;
      }
      while (models1.length <= giflivestreamingC.length) {
         giflivestreamingC += `${models1.length & giflivestreamingC.length}`;
         break;
      }
          let basketball6 = true;
          let recommendationb = 0;
         models1 += `${models1.length}`;
         basketball6 = 98 == recommendationb;
         recommendationb <<= Math.min(Math.abs(2), 2);
      while (models1.includes(`${giflivestreamingC.length}`)) {
         models1 += "3";
         break;
      }
      bootsplashQ.push(giflivestreamingC.length);
      if (1712176 == bootsplashQ.length) {
         break;
      }
   } while ((1712176 == bootsplashQ.length) && (1 <= bootsplashQ.length));
   while ((libreanimated1.length >> (Math.min(2, Math.abs(homeloadingk.size)))) == 5 && (homeloadingk.size >> (Math.min(libreanimated1.length, 5))) == 5) {
      libreanimated1 = `${(libreanimated1 == String.fromCharCode(98,0) ? read_.length : libreanimated1.length)}`;
      break;
   }

  const matchID = props?.route?.params?.matchId;
   if (1 >= valuesE.length) {
      valuesE += `${hookst.length | analyticsl.length}`;
   }
      hookst += `${((cornershoot1 ? 1 : 4) % 3)}`;

  const streamID = props?.route?.params?.streamerId;
      analyticsl.push(2);
      libreanimated1 += `${libreanimated1.length / 3}`;

  const sheetRef = React.useRef();
   do {
      analyticz += "1";
      if (2331673 == analyticz.length) {
         break;
      }
   } while ((2331673 == analyticz.length) && (fullscreenmaxf == analyticz));
   for (let q = 0; q < 3; q++) {
      libreanimated1 += "2";
   }

  const [modalVisible, setModalVisible] = useState(false);
       let predictionwinU = 1.0;
       let backicon0 = new Map([[String.fromCharCode(100,95,50,52,95,112,114,105,118,97,116,101,0),76], [String.fromCharCode(104,97,115,104,102,114,101,101,100,101,115,116,114,111,121,95,48,95,52,48,0),36], [String.fromCharCode(122,95,56,95,115,116,117,102,102,105,110,103,0),512]]);
       let borderlessI = String.fromCharCode(120,95,53,57,95,116,105,109,101,115,116,97,109,112,101,100,0);
       let cancelS = 0;
          let holder0 = 1.0;
         backicon0 = new Map([[`${backicon0.size}`, 3 / (Math.max(2, borderlessI.length))]]);
         holder0 *= 1;
          let productr = 3;
          let textF = new Map([[String.fromCharCode(99,95,51,55,95,99,111,108,108,101,99,116,111,114,0),String.fromCharCode(105,115,115,117,101,115,95,117,95,53,51,0)], [String.fromCharCode(97,114,103,98,95,98,95,54,0),String.fromCharCode(116,114,97,110,115,112,97,114,101,110,116,95,99,95,53,53,0)]]);
          let comment8 = String.fromCharCode(103,95,56,50,95,109,101,103,97,98,121,116,101,0);
         borderlessI = `${cancelS + textF.size}`;
         productr |= productr;
         textF = new Map([[comment8, productr]]);
         comment8 = `${productr >> (Math.min(comment8.length, 5))}`;
      if ((backicon0.size + predictionwinU) == 2.75 && (predictionwinU + backicon0.size) == 2.75) {
         predictionwinU -= borderlessI.length ^ cancelS;
      }
      for (let v = 0; v < 1; v++) {
         borderlessI += `${borderlessI.length}`;
      }
      if ((1 + borderlessI.length) > 1) {
         cancelS &= parseInt(`${predictionwinU}`);
      }
      if (2.44 <= (predictionwinU / (Math.max(2.30, 2))) && (borderlessI.length * 4) <= 5) {
         predictionwinU *= borderlessI.length;
      }
       let redirect1 = new Map([[String.fromCharCode(97,112,112,114,111,120,95,111,95,53,54,0),String.fromCharCode(99,117,108,102,114,101,113,95,117,95,52,55,0)], [String.fromCharCode(120,112,116,97,98,108,101,95,55,95,51,51,0),String.fromCharCode(102,119,104,116,95,101,95,56,48,0)]]);
       let dependenciesW = new Map([[String.fromCharCode(117,110,113,117,97,110,116,105,122,101,95,98,95,57,57,0),753], [String.fromCharCode(118,95,56,50,95,108,111,103,111,0),454]]);
      for (let l = 0; l < 2; l++) {
         cancelS <<= Math.min(3, Math.abs(cancelS / (Math.max(dependenciesW.size, 4))));
      }
      homeloadingk = new Map([[analyticz, fullscreenmaxf.length - 2]]);
   do {
       let libjsinspector_ = true;
       let apple6 = false;
       let storec = String.fromCharCode(99,95,53,50,95,114,101,116,114,105,101,118,105,110,103,0);
      do {
          let neonW = [645, 687];
          let countdownA = new Map([[String.fromCharCode(119,95,55,55,95,115,97,109,112,108,101,115,0),391], [String.fromCharCode(97,116,116,114,105,98,117,116,101,100,95,111,95,50,53,0),392], [String.fromCharCode(115,116,114,105,100,101,95,52,95,57,51,0),988]]);
          let const_nL = false;
         apple6 = neonW.length == 54;
         neonW = [countdownA.size + 2];
         countdownA = new Map([[`${countdownA.size}`, 2 >> (Math.min(3, Math.abs(countdownA.size)))]]);
         if (apple6 ? !apple6 : apple6) {
            break;
         }
      } while ((apple6 ? !apple6 : apple6) && (apple6 && !libjsinspector_));
         libjsinspector_ = !apple6 && libjsinspector_;
         apple6 = !libjsinspector_;
       let china9 = new Map([[String.fromCharCode(102,108,111,111,114,115,95,98,95,56,56,0),692], [String.fromCharCode(113,95,53,53,95,104,101,108,100,0),811]]);
          let robotoI = 2.0;
          let recommendationT = String.fromCharCode(114,95,56,95,119,101,97,107,0);
         apple6 = 35 > storec.length && robotoI > 24.59;
         robotoI /= Math.max(1, parseFloat(`${recommendationT.length}`));
         recommendationT = `${recommendationT.length}`;
      do {
         apple6 = (china9.size >> (Math.min(storec.length, 4))) < 40;
         if (apple6 ? !apple6 : apple6) {
            break;
         }
      } while ((apple6 ? !apple6 : apple6) && (apple6));
      for (let o = 0; o < 1; o++) {
         storec += `${((libjsinspector_ ? 2 : 2))}`;
      }
       let livenodatabgimgI = String.fromCharCode(97,99,111,110,102,105,103,95,107,95,51,55,0);
       let sourcem = String.fromCharCode(101,116,97,100,97,116,97,95,113,95,51,56,0);
         apple6 = (!libjsinspector_ ? apple6 : libjsinspector_);
      z_centerp = [z_centerp.length & 2];
      if (z_centerp.length == 3418013) {
         break;
      }
   } while ((3 < homeloadingk.size) && (z_centerp.length == 3418013));

  const dispatch = useDispatch();
   while (analyticz.length >= z_centerp.length) {
       let smallorangemans = 1;
       let about9 = 1;
         smallorangemans -= about9 >> (Math.min(Math.abs(1), 1));
         smallorangemans %= Math.max(about9, 4);
      do {
         about9 *= about9 % (Math.max(smallorangemans, 10));
         if (4213460 == about9) {
            break;
         }
      } while ((4213460 == about9) && (about9 < 1));
         about9 ^= about9 >> (Math.min(5, Math.abs(smallorangemans)));
      for (let v = 0; v < 3; v++) {
         about9 -= smallorangemans / (Math.max(8, about9));
      }
      for (let d = 0; d < 2; d++) {
         about9 -= smallorangemans;
      }
      analyticz = `${2 % (Math.max(9, smallorangemans))}`;
      break;
   }
   if (3 <= bootsplashQ.length) {
       let analytici = 5.0;
       let whatsappq = [377, 510, 867];
       let mbbidu = String.fromCharCode(121,95,51,48,95,105,100,99,116,120,0);
      while (3 == (mbbidu.length >> (Math.min(Math.abs(1), 1))) || 2 == (whatsappq.length >> (Math.min(Math.abs(1), 1)))) {
          let awayplayerd = 2;
          let filedo = 0;
         mbbidu += `${3 << (Math.min(5, Math.abs(filedo)))}`;
         awayplayerd /= Math.max(4, awayplayerd);
         filedo <<= Math.min(5, Math.abs(awayplayerd));
         break;
      }
         whatsappq.push(whatsappq.length + mbbidu.length);
      do {
          let bangW = String.fromCharCode(116,97,107,101,111,117,116,95,107,95,56,0);
          let arrowrightwithtailY = String.fromCharCode(115,97,116,100,95,121,95,53,51,0);
          let downloadZ = [String.fromCharCode(115,117,98,118,97,108,117,101,95,118,95,49,0), String.fromCharCode(100,106,112,101,103,95,103,95,52,56,0)];
          let whitebella = String.fromCharCode(101,120,112,101,99,116,101,100,95,115,95,53,54,0);
         whatsappq.push(parseInt(`${analytici}`) % (Math.max(3, 6)));
         bangW = `${downloadZ.length / (Math.max(whitebella.length, 10))}`;
         arrowrightwithtailY += "3";
         downloadZ = [arrowrightwithtailY.length];
         whitebella = `${whitebella.length << (Math.min(Math.abs(3), 4))}`;
         if (whatsappq.length == 2950838) {
            break;
         }
      } while ((whatsappq.length == 2950838) && (4 <= mbbidu.length));
      while ((mbbidu.length + 4) < 2 && 2 < (4 + mbbidu.length)) {
          let questg = String.fromCharCode(108,105,98,114,97,114,105,101,115,95,114,95,49,53,0);
         mbbidu = `${1 - questg.length}`;
         break;
      }
         mbbidu = `${whatsappq.length + 1}`;
         whatsappq = [mbbidu.length / 2];
      do {
          let twitter1 = String.fromCharCode(99,95,53,48,95,110,101,119,108,105,110,101,0);
         mbbidu = `${mbbidu.length + 3}`;
         twitter1 += `${(String.fromCharCode(74,0) == twitter1 ? twitter1.length : twitter1.length)}`;
         if (mbbidu == String.fromCharCode(120,115,54,115,57,53,55,0)) {
            break;
         }
      } while (((parseInt(`${analytici}`) * mbbidu.length) < 4) && (mbbidu == String.fromCharCode(120,115,54,115,57,53,55,0)));
      for (let d = 0; d < 3; d++) {
         whatsappq.push((mbbidu == String.fromCharCode(55,0) ? whatsappq.length : mbbidu.length));
      }
      while (1.13 == (analytici + 2.15) && 2.15 == (analytici + mbbidu.length)) {
         analytici /= Math.max(parseInt(`${analytici}`), 5);
         break;
      }
      hookst += "1";
   }

  const liveRoomAction = new yysDrag(dispatch);
   do {
       let configurep = 2;
       let containero = new Map([[String.fromCharCode(105,110,116,114,97,120,98,108,111,99,107,95,120,95,56,55,0),88], [String.fromCharCode(117,95,54,95,98,108,117,101,0),656], [String.fromCharCode(109,101,116,97,95,107,95,51,0),82]]);
       let imageactionlive2 = [674, 213];
       let kuaishous = new Map([[String.fromCharCode(113,95,55,52,95,108,122,109,97,0),String.fromCharCode(99,111,108,111,114,109,97,116,114,105,120,95,103,95,56,57,0)], [String.fromCharCode(117,97,100,100,95,97,95,56,49,0),String.fromCharCode(115,117,99,104,95,53,95,56,50,0)]]);
       let core2 = [889, 30, 101];
      while (containero.size >= 1) {
          let condensedy = 4;
          let videobufferloadingY = new Map([[String.fromCharCode(116,105,99,107,105,110,103,95,113,95,53,48,0),13], [String.fromCharCode(105,115,116,115,95,110,95,54,50,0),840]]);
          let homeplayerB = true;
          let redscoreball0 = String.fromCharCode(118,95,57,51,95,112,111,107,101,114,0);
         containero = new Map([[`${core2.length}`, redscoreball0.length]]);
         condensedy %= Math.max(3 - videobufferloadingY.size, 2);
         videobufferloadingY = new Map([[`${videobufferloadingY.size}`, videobufferloadingY.size]]);
         homeplayerB = videobufferloadingY.size <= 66;
         redscoreball0 += `${(videobufferloadingY.size - (homeplayerB ? 2 : 2))}`;
         break;
      }
         core2.push(imageactionlive2.length >> (Math.min(Math.abs(1), 3)));
       let trashE = String.fromCharCode(101,95,51,49,95,117,116,105,108,115,0);
      if (Array.from(containero.keys()).includes(`${imageactionlive2.length}`)) {
         imageactionlive2 = [configurep << (Math.min(Math.abs(2), 4))];
      }
          let merger2 = String.fromCharCode(105,95,52,49,95,101,120,112,110,97,100,101,100,0);
         containero = new Map([[`${containero.size}`, kuaishous.size]]);
         merger2 = `${(merger2 == String.fromCharCode(57,0) ? merger2.length : merger2.length)}`;
          let loginS = 0.0;
          let renewS = 3;
          let sans5 = 4.0;
         trashE += "2";
         loginS -= parseInt(`${sans5}`);
         renewS %= Math.max(1, 2);
         containero = new Map([[`${kuaishous.size}`, imageactionlive2.length >> (Math.min(2, Math.abs(kuaishous.size)))]]);
       let googleh = String.fromCharCode(109,95,55,49,95,111,100,109,108,0);
       let predictionO = String.fromCharCode(111,95,49,48,95,100,105,114,97,99,116,97,98,0);
          let submit8 = 0.0;
          let greenarrowupQ = new Map([[String.fromCharCode(100,95,52,54,95,99,114,101,97,116,105,110,103,0),232], [String.fromCharCode(109,95,53,53,95,100,101,116,101,114,109,105,110,105,115,116,105,99,0),944], [String.fromCharCode(105,95,56,95,108,105,115,116,105,110,103,115,0),363]]);
         kuaishous = new Map([[`${containero.size}`, (String.fromCharCode(114,0) == googleh ? containero.size : googleh.length)]]);
         submit8 /= Math.max(parseFloat(`${greenarrowupQ.size}`), 2);
         greenarrowupQ[`${submit8}`] = parseInt(`${submit8}`);
      for (let j = 0; j < 1; j++) {
         imageactionlive2.push(configurep);
      }
         predictionO += `${trashE.length ^ 3}`;
         predictionO = `${predictionO.length << (Math.min(Math.abs(3), 5))}`;
      do {
          let window_5bl = String.fromCharCode(117,95,51,49,95,115,116,114,99,97,116,0);
          let zhengpianz = String.fromCharCode(115,101,109,105,95,119,95,49,48,48,0);
          let whistleorange2 = [745, 932, 860];
         predictionO += `${kuaishous.size}`;
         window_5bl = `${zhengpianz.length - 3}`;
         zhengpianz += `${zhengpianz.length}`;
         whistleorange2.push(zhengpianz.length + whistleorange2.length);
         if (String.fromCharCode(109,57,104,110,119,0) == predictionO) {
            break;
         }
      } while ((String.fromCharCode(109,57,104,110,119,0) == predictionO) && ((predictionO.length ^ core2.length) > 2 || (core2.length ^ predictionO.length) > 2));
      do {
         core2 = [3];
         if (core2.length == 903057) {
            break;
         }
      } while ((core2.length == 903057) && (Array.from(containero.values()).includes(core2.length)));
      do {
         kuaishous[predictionO] = 1;
         if (kuaishous.size == 1805133) {
            break;
         }
      } while ((!Array.from(kuaishous.keys()).includes(`${imageactionlive2.length}`)) && (kuaishous.size == 1805133));
      analyticz += `${libreanimated1.length}`;
      if (analyticz.length == 4115873) {
         break;
      }
   } while ((analyticz.length == 4115873) && (analyticz.includes(`${analyticsl.length}`)));
      fullscreenmaxf += `${analyticsl.length}`;

  useEffect(() => {

   while ((analyticsl.length & fullscreenmaxf.length) >= 2) {
      analyticsl = [((cornershoot1 ? 1 : 5))];
      break;
   }
       let navigation7 = 2.0;
       let matchH = new Map([[String.fromCharCode(101,95,51,50,95,110,111,114,109,97,108,105,122,97,116,105,111,110,0),685], [String.fromCharCode(98,111,100,101,114,95,111,95,57,49,0),844], [String.fromCharCode(111,95,57,50,95,97,110,105,109,97,116,101,100,0),679]]);
         navigation7 *= parseFloat(`${2}`);
         matchH[`${navigation7}`] = matchH.size;
         navigation7 /= Math.max(parseFloat(`${1}`), 4);
      if (!Array.from(matchH.values()).includes(navigation7)) {
         matchH = new Map([[`${matchH.size}`, 2]]);
      }
      while (5 == matchH.size) {
         navigation7 -= parseFloat(`${parseInt(`${navigation7}`)}`);
         break;
      }
          let notificationY = String.fromCharCode(110,111,111,112,95,115,95,57,52,0);
         matchH = new Map([[notificationY, parseInt(`${navigation7}`) & notificationY.length]]);
      homeloadingk[analyticz] = homeloadingk.size;
    

      analyticz = "3";
      cornershoot1 = (read_.length & valuesE.length) < 78;
    liveRoomAction.getLiveRoomDetail(matchID);
   for (let s = 0; s < 2; s++) {
       let long_nne = new Map([[String.fromCharCode(100,111,119,110,103,114,97,100,101,95,55,95,57,56,0),999], [String.fromCharCode(107,95,56,56,95,114,101,118,101,114,115,101,0),565]]);
       let orangedownarrowX = 5.0;
         long_nne[`${orangedownarrowX}`] = 3 % (Math.max(6, long_nne.size));
          let notificationK = [18, 774];
          let themem = String.fromCharCode(107,95,57,54,95,117,110,98,105,110,100,0);
         long_nne = new Map([[`${notificationK.length}`, 3]]);
         notificationK.push(2 >> (Math.min(4, themem.length)));
         themem = `${2 >> (Math.min(3, themem.length))}`;
      if (long_nne.size < parseInt(`${orangedownarrowX}`)) {
          let w_positioni = String.fromCharCode(99,95,57,48,95,100,117,114,103,101,114,0);
         long_nne = new Map([[`${orangedownarrowX}`, (String.fromCharCode(101,0) == w_positioni ? parseInt(`${orangedownarrowX}`) : w_positioni.length)]]);
      }
          let configureA = 4.0;
          let mbjscommonM = 3.0;
         long_nne[`${orangedownarrowX}`] = parseInt(`${orangedownarrowX}`) & parseInt(`${configureA}`);
         configureA += parseInt(`${mbjscommonM}`) << (Math.min(2, Math.abs(parseInt(`${mbjscommonM}`))));
      while ((parseInt(`${orangedownarrowX}`) / (Math.max(2, long_nne.size))) == 3 || (orangedownarrowX / 5.2) == 4.20) {
         long_nne[`${orangedownarrowX}`] = 2;
         break;
      }
          let baiduadsC = false;
          let inouttargetyellowW = new Map([[String.fromCharCode(105,95,50,56,95,97,108,105,97,115,0),719], [String.fromCharCode(115,117,98,115,116,97,116,101,95,112,95,55,57,0),464], [String.fromCharCode(112,97,103,101,115,95,97,95,54,49,0),100]]);
         orangedownarrowX *= parseFloat(`${long_nne.size}`);
         baiduadsC = !baiduadsC;
         inouttargetyellowW = new Map([[`${inouttargetyellowW.size}`, 2 ^ inouttargetyellowW.size]]);
      homeloadingk[fullscreenmaxf] = 2;
   }
   for (let o = 0; o < 3; o++) {
      homeloadingk[valuesE] = (String.fromCharCode(111,0) == valuesE ? read_.length : valuesE.length);
   }

  }, []);
       let greenarrowupe = [480, 691, 630];
      for (let i = 0; i < 1; i++) {
         greenarrowupe.push(2 % (Math.max(3, greenarrowupe.length)));
      }
         greenarrowupe.push(3 & greenarrowupe.length);
         greenarrowupe.push(greenarrowupe.length);
      libreanimated1 = `${hookst.length}`;
   while (5 >= (window_vD.length % 3)) {
       let delegate_opX = [String.fromCharCode(113,95,52,95,104,97,108,116,0), String.fromCharCode(114,95,51,53,95,109,101,109,98,101,114,115,104,105,112,0), String.fromCharCode(116,95,52,50,95,113,115,118,118,112,112,0)];
       let buttonZ = 2.0;
       let layoutx = String.fromCharCode(103,95,54,49,95,108,105,103,104,116,110,101,115,115,0);
      for (let a = 0; a < 3; a++) {
         buttonZ /= Math.max(2, parseInt(`${buttonZ}`) | delegate_opX.length);
      }
      if (5.77 > (buttonZ / 1.36) || (buttonZ / 1.36) > 3.28) {
          let spece = String.fromCharCode(118,95,51,53,95,104,97,108,100,99,108,117,116,0);
          let policy0 = String.fromCharCode(113,101,120,112,95,113,95,52,52,0);
          let dependencyt = 5.0;
         buttonZ *= (policy0 == String.fromCharCode(77,0) ? policy0.length : spece.length);
         spece += `${parseInt(`${dependencyt}`) ^ 2}`;
      }
       let homem = 4;
       let watchnowbgr = 4;
         buttonZ += (String.fromCharCode(72,0) == layoutx ? layoutx.length : homem);
          let awayteamfieldu = [724, 807, 670];
         homem %= Math.max(watchnowbgr * homem, 4);
         awayteamfieldu = [2];
      for (let q = 0; q < 3; q++) {
         homem &= delegate_opX.length;
      }
         delegate_opX.push(homem + 1);
      do {
         layoutx += "1";
         if (layoutx.length == 1471710) {
            break;
         }
      } while ((1.98 > (2.14 - buttonZ)) && (layoutx.length == 1471710));
          let anythinkV = 0.0;
          let footballfieldw = new Map([[String.fromCharCode(122,95,55,49,95,115,105,103,110,105,102,105,99,97,110,100,0),158], [String.fromCharCode(104,121,98,114,105,100,95,54,95,53,54,0),206], [String.fromCharCode(103,95,50,54,95,104,119,97,99,99,101,108,115,0),389]]);
          let redirectE = 3.0;
         homem += footballfieldw.size - layoutx.length;
         anythinkV /= Math.max(3, parseInt(`${redirectE}`));
         footballfieldw = new Map([[`${redirectE}`, parseInt(`${anythinkV}`) | 3]]);
      window_vD = [analyticsl.length << (Math.min(3, Math.abs(parseInt(`${buttonZ}`))))];
      break;
   }


  const listLive = useSelector(state => state.liveRoom);
      hookst += `${analyticz.length}`;
       let arrowj = [249, 814, 468];
      if ((arrowj.length / 5) == 2) {
         arrowj.push(arrowj.length);
      }
      if (!arrowj.includes(arrowj.length)) {
         arrowj = [arrowj.length];
      }
      for (let x = 0; x < 2; x++) {
         arrowj = [arrowj.length];
      }
      libreanimated1 += `${(libreanimated1 == String.fromCharCode(80,0) ? libreanimated1.length : arrowj.length)}`;


  useEffect(() => {
    
    
    
    
  }, []);
      analyticz = `${fullscreenmaxf.length}`;
   if (2 < (homeloadingk.size + 3)) {
      homeloadingk = new Map([[`${analyticsl.length}`, libreanimated1.length - analyticsl.length]]);
   }


  return (
    <View style={{flex: 1, display: 'flex', backgroundColor: 'black'}}>
      {Object.keys(listLive).length > 0 && (
        <LiveVideo
          liveData={listLive}
          fullScreen={props.fullScreen}
          streamID={streamID}
          setIsEnd={props.setIsEnd}
          setModalVisible={props.setModalVisible}
          changeFullscreen={props.changeFullscreen}></LiveVideo>
      )}
    </View>
  );
      hookst += `${libreanimated1.length % 2}`;
   for (let k = 0; k < 2; k++) {
      homeloadingk = new Map([[`${homeloadingk.size}`, analyticsl.length | homeloadingk.size]]);
   }

};

export default LivePage = ({route, navigation}) => {
  const store = useMemo(() => configureStore({reducer}), []);
  const [fullScreen, setFullScreen] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const matchID = route?.params?.matchId;
  const dispatch = useDispatch();
  const liveRoomAction = new yysDrag(dispatch);
  var interval;
  

  const handleNavigate = () => {
       let dycreatorr = String.fromCharCode(105,110,116,101,114,97,99,116,105,118,101,108,121,95,56,95,50,50,0);
    let whitesmalltickT = String.fromCharCode(102,105,108,116,95,115,95,57,54,0);
    let reducert = true;
    let libfbjnix = String.fromCharCode(114,95,57,57,95,116,111,107,101,110,116,120,0);
    let optionsv = false;
    let utils4 = true;
    let awayteamfieldZ = new Map([[String.fromCharCode(119,95,55,52,95,101,110,116,101,114,0),786], [String.fromCharCode(115,111,117,110,95,119,95,51,56,0),651], [String.fromCharCode(119,95,56,52,95,99,111,100,101,0),712]]);
    let defaultplayerimgQ = 0.0;
    let gradlem = 1.0;
    let analyticsG = String.fromCharCode(116,95,54,48,95,99,97,110,99,101,108,101,100,0);
    let mappingk = [710, 280, 894];
   do {
      awayteamfieldZ = new Map([[`${reducert}`, (whitesmalltickT.length % (Math.max(4, (reducert ? 5 : 2))))]]);
      if (awayteamfieldZ.size == 4873234) {
         break;
      }
   } while ((2 < (whitesmalltickT.length * 1) && (whitesmalltickT.length * 1) < 5) && (awayteamfieldZ.size == 4873234));
      utils4 = (!utils4 ? !optionsv : utils4);
      libfbjnix = "1";
      dycreatorr += `${(whitesmalltickT == String.fromCharCode(97,0) ? whitesmalltickT.length : (reducert ? 1 : 2))}`;
   do {
      whitesmalltickT = `${(String.fromCharCode(117,0) == libfbjnix ? (optionsv ? 5 : 2) : libfbjnix.length)}`;
      if (String.fromCharCode(53,48,104,95,118,0) == whitesmalltickT) {
         break;
      }
   } while ((dycreatorr == String.fromCharCode(89,0)) && (String.fromCharCode(53,48,104,95,118,0) == whitesmalltickT));

    clearInterval(interval);
      utils4 = !reducert;
   while ((1.72 * defaultplayerimgQ) <= 2.58 || 1.72 <= defaultplayerimgQ) {
      utils4 = awayteamfieldZ.size == 81 && dycreatorr.length == 81;
      break;
   }
   if (4 == libfbjnix.length) {
      libfbjnix += `${parseInt(`${defaultplayerimgQ}`) * 2}`;
   }
      dycreatorr += `${libfbjnix.length}`;
      whitesmalltickT += `${parseInt(`${defaultplayerimgQ}`) & 2}`;

    

   while (reducert) {
      whitesmalltickT = `${1 ^ parseInt(`${defaultplayerimgQ}`)}`;
      break;
   }
   if (!utils4) {
      utils4 = (whitesmalltickT.length >> (Math.min(libfbjnix.length, 1))) < 26;
   }
   while (Array.from(awayteamfieldZ.values()).includes(defaultplayerimgQ)) {
      awayteamfieldZ = new Map([[libfbjnix, libfbjnix.length]]);
      break;
   }
       let predictiondefaultq = [877, 147, 115];
      if (5 < (1 + predictiondefaultq.length) || (predictiondefaultq.length + predictiondefaultq.length) < 1) {
          let main_lj = [516, 572, 467];
          let hooksa = 4.0;
          let yellowL = 3;
          let z_position2 = String.fromCharCode(112,95,53,51,95,99,111,109,112,97,114,97,98,108,101,0);
          let arrowrightwithtaill = String.fromCharCode(118,97,108,105,100,97,116,101,100,95,120,95,56,49,0);
         predictiondefaultq = [main_lj.length];
         main_lj = [arrowrightwithtaill.length >> (Math.min(4, Math.abs(parseInt(`${hooksa}`))))];
         hooksa += arrowrightwithtaill.length;
         yellowL >>= Math.min(Math.abs(3), 4);
         z_position2 = `${(z_position2 == String.fromCharCode(102,0) ? z_position2.length : parseInt(`${hooksa}`))}`;
      }
          let predictionwina = 1.0;
         predictiondefaultq.push(parseInt(`${predictionwina}`));
         predictiondefaultq.push(predictiondefaultq.length % 1);
      dycreatorr = `${1 - parseInt(`${defaultplayerimgQ}`)}`;
      optionsv = libfbjnix.length <= whitesmalltickT.length;
    navigation.popToTop();
   do {
      utils4 = defaultplayerimgQ == 42.59 && optionsv;
      if (utils4 ? !utils4 : utils4) {
         break;
      }
   } while ((libfbjnix.length == 5) && (utils4 ? !utils4 : utils4));
      whitesmalltickT = `${libfbjnix.length}`;
      reducert = awayteamfieldZ.size >= 21 || reducert;
   for (let v = 0; v < 3; v++) {
      defaultplayerimgQ /= Math.max((libfbjnix == String.fromCharCode(98,0) ? libfbjnix.length : (reducert ? 5 : 2)), 3);
   }
       let downZ = String.fromCharCode(115,116,97,116,115,95,108,95,56,51,0);
      while (downZ.length > downZ.length) {
         downZ += `${downZ.length}`;
         break;
      }
         downZ += `${downZ.length}`;
      if (downZ != downZ) {
         downZ += `${2 >> (Math.min(3, downZ.length))}`;
      }
      utils4 = !utils4;

    navigation.navigate('All');
       let styleZ = [String.fromCharCode(102,114,101,101,122,101,95,57,95,54,0), String.fromCharCode(116,95,53,95,115,109,105,108,105,101,115,0)];
       let context4 = [663, 945];
       let detailso = new Map([[String.fromCharCode(97,95,51,95,110,111,109,105,110,97,116,101,0),353], [String.fromCharCode(117,95,50,95,102,105,108,101,114,101,97,100,115,116,114,101,97,109,0),730]]);
      for (let w = 0; w < 1; w++) {
          let historyX = String.fromCharCode(115,101,118,101,114,105,116,121,95,110,95,57,54,0);
          let placementY = [524, 857, 964];
          let stationS = String.fromCharCode(114,101,97,108,116,101,120,116,95,107,95,52,57,0);
          let shootyesgoall = new Map([[String.fromCharCode(115,95,48,95,100,97,116,97,0),String.fromCharCode(112,95,53,52,95,100,101,115,116,0)], [String.fromCharCode(99,111,110,118,101,114,116,101,114,95,104,95,55,0),String.fromCharCode(116,95,57,54,95,120,117,116,105,108,0)], [String.fromCharCode(118,95,51,57,95,118,97,108,105,100,97,116,97,98,108,101,0),String.fromCharCode(105,95,53,54,95,115,122,97,98,111,0)]]);
         detailso[`${detailso.size}`] = 3;
         historyX = `${shootyesgoall.size}`;
         placementY = [3];
         stationS += `${shootyesgoall.size}`;
      }
         styleZ = [detailso.size % (Math.max(1, 2))];
          let issubg = 5.0;
         detailso = new Map([[`${detailso.size}`, styleZ.length]]);
         issubg -= parseFloat(`${parseInt(`${issubg}`) * parseInt(`${issubg}`)}`);
      while (1 > (2 - detailso.size) && (detailso.size - 2) > 4) {
          let a_centerM = 2;
          let gmailo = false;
          let elementst = 4;
          let leakcheckerB = [715, 976, 261];
          let liveshareO = [String.fromCharCode(103,95,53,55,95,112,114,105,109,97,108,105,116,121,0), String.fromCharCode(97,95,54,54,95,114,101,109,111,118,101,100,0), String.fromCharCode(101,95,53,56,95,114,101,100,105,114,101,99,116,0)];
         context4 = [1 - elementst];
         a_centerM *= leakcheckerB.length & liveshareO.length;
         gmailo = a_centerM > leakcheckerB.length;
         elementst += liveshareO.length;
         break;
      }
         styleZ.push(detailso.size | 1);
      utils4 = !utils4;
      gradlem *= (parseFloat(`${(reducert ? 1 : 4) & libfbjnix.length}`));
   do {
      defaultplayerimgQ *= 1 >> (Math.min(1, Math.abs(awayteamfieldZ.size)));
      if (defaultplayerimgQ == 4556658.0) {
         break;
      }
   } while ((defaultplayerimgQ == 4556658.0) && (defaultplayerimgQ >= 2.58 || (2.58 + defaultplayerimgQ) >= 2.88));
   for (let j = 0; j < 1; j++) {
      optionsv = mappingk.length > dycreatorr.length;
   }
      libfbjnix += `${parseInt(`${gradlem}`) % (Math.max(awayteamfieldZ.size, 9))}`;

  };
  

  const changeFullscreen = () => {
       let subbasketballplayerj = true;
    let backwhitey = 0;
    let libavfilterb = 1;
    let typingloadingg = 0;
    let libswscaleC = 3;
    let iconnotificationnewa = String.fromCharCode(110,95,56,49,95,115,97,118,101,112,111,105,110,116,115,0);
    let yellowredcardp = 5.0;
    let greyZ = [416, 329, 811];
    let filterF = 1.0;
    let actions8 = 0;
    let notificationfillemptyI = 2;
    let logo7 = 3;
    let showi = true;
    let clockC = 3.0;
    let iconmegaphoneq = true;
    let matchinactiveU = 1.0;
    let dicelogok = 3.0;
    let ewardedD = String.fromCharCode(108,111,111,107,95,54,95,57,55,0);
   do {
       let defaultbasketballbgE = String.fromCharCode(112,117,98,108,105,115,104,101,114,95,110,95,54,53,0);
       let huaweiM = String.fromCharCode(112,101,114,109,105,115,115,105,111,110,95,50,95,55,55,0);
       let zoom1 = true;
          let shareblackf = String.fromCharCode(118,101,114,116,101,120,95,112,95,51,48,0);
         huaweiM = `${defaultbasketballbgE.length - 1}`;
         shareblackf = `${shareblackf.length}`;
          let clearb = String.fromCharCode(121,95,53,52,95,100,111,117,103,108,97,115,0);
          let gesturesj = [26, 792, 416];
         zoom1 = gesturesj.length >= 39 && zoom1;
         clearb = `${clearb.length >> (Math.min(Math.abs(3), 1))}`;
         gesturesj.push(clearb.length);
          let activeC = true;
          let predictionbannerX = 5;
         huaweiM = `${huaweiM.length}`;
         activeC = 99 < predictionbannerX && activeC;
         predictionbannerX *= ((activeC ? 5 : 1) | predictionbannerX);
          let upgradeU = new Map([[String.fromCharCode(97,117,116,111,109,97,116,105,99,95,112,95,54,57,0),String.fromCharCode(114,95,56,57,95,116,97,114,103,97,0)], [String.fromCharCode(115,121,109,111,100,100,95,121,95,52,56,0),String.fromCharCode(104,95,52,52,95,116,117,112,108,101,0)]]);
         defaultbasketballbgE = `${huaweiM.length}`;
         upgradeU = new Map([[`${upgradeU.size}`, 2]]);
          let description_tM = 4.0;
         huaweiM = `${defaultbasketballbgE.length ^ 1}`;
         description_tM /= Math.max(parseFloat(`${parseInt(`${description_tM}`)}`), 2);
       let libreactX = new Map([[String.fromCharCode(109,97,105,110,95,53,95,56,50,0),260], [String.fromCharCode(120,115,117,98,95,48,95,56,55,0),735]]);
       let release__V = new Map([[String.fromCharCode(104,95,51,48,95,97,116,111,109,105,99,97,108,108,121,0),724], [String.fromCharCode(114,103,98,114,103,98,95,99,95,55,48,0),789], [String.fromCharCode(105,95,51,54,95,114,101,108,111,97,100,0),145]]);
         zoom1 = defaultbasketballbgE.startsWith(`${zoom1}`);
         defaultbasketballbgE += "2";
      while (defaultbasketballbgE.endsWith(`${libreactX.size}`)) {
          let libreactperfloggerjni9 = new Map([[String.fromCharCode(103,95,56,57,95,109,98,108,111,99,107,0),true ], [String.fromCharCode(116,95,57,51,95,110,111,116,103,101,116,0),true ], [String.fromCharCode(105,95,55,54,95,112,111,115,116,0),true ]]);
          let header8 = String.fromCharCode(117,110,112,111,105,115,111,110,95,109,95,49,53,0);
          let giftbutton2 = 5.0;
          let friendsa = new Map([[String.fromCharCode(112,111,108,105,99,101,95,110,95,56,51,0),74], [String.fromCharCode(99,121,99,108,105,99,114,101,102,114,101,115,104,95,104,95,52,50,0),683], [String.fromCharCode(113,95,55,54,95,115,121,109,98,111,108,105,99,97,116,101,0),187]]);
         defaultbasketballbgE += `${1 & huaweiM.length}`;
         libreactperfloggerjni9[header8] = friendsa.size;
         header8 += "1";
         giftbutton2 += parseInt(`${giftbutton2}`) % (Math.max(header8.length, 2));
         friendsa = new Map([[`${friendsa.size}`, 1]]);
         break;
      }
      actions8 <<= Math.min(Math.abs(notificationfillemptyI), 3);
      if (actions8 == 1850434) {
         break;
      }
   } while ((!iconnotificationnewa.includes(`${actions8}`)) && (actions8 == 1850434));
   for (let g = 0; g < 1; g++) {
      yellowredcardp += parseFloat(`${logo7 << (Math.min(Math.abs(parseInt(`${filterF}`)), 2))}`);
   }
       let regengq = String.fromCharCode(119,95,51,56,95,102,114,97,99,116,105,111,110,0);
       let iconbackwhiteq = new Map([[String.fromCharCode(99,95,54,95,112,99,109,117,0),false ], [String.fromCharCode(101,95,57,55,95,115,111,99,107,101,116,0),false ]]);
       let loadingspinnerr = false;
      do {
         iconbackwhiteq[`${loadingspinnerr}`] = iconbackwhiteq.size + 1;
         if (4014473 == iconbackwhiteq.size) {
            break;
         }
      } while ((4014473 == iconbackwhiteq.size) && (loadingspinnerr));
      do {
          let material5 = true;
          let control8 = String.fromCharCode(105,110,108,101,110,95,100,95,54,49,0);
          let field3 = String.fromCharCode(104,101,120,105,110,116,95,49,95,54,48,0);
          let z_playerq = true;
          let annerS = 2.0;
         regengq += `${(String.fromCharCode(80,0) == field3 ? field3.length : (material5 ? 1 : 2))}`;
         material5 = annerS > 44.35 || z_playerq;
         control8 += `${(parseInt(`${annerS}`) ^ (z_playerq ? 3 : 5))}`;
         if (regengq.length == 1767268) {
            break;
         }
      } while ((regengq.length == 1767268) && (3 < regengq.length && !loadingspinnerr));
          let promotionv = 3.0;
          let libbufferg = String.fromCharCode(101,112,105,115,111,100,101,95,97,95,54,49,0);
         iconbackwhiteq = new Map([[`${iconbackwhiteq.size}`, iconbackwhiteq.size]]);
         promotionv /= Math.max((libbufferg == String.fromCharCode(54,0) ? parseInt(`${promotionv}`) : libbufferg.length), 5);
          let penaltyC = [434, 996];
          let modalx = true;
         iconbackwhiteq[regengq] = regengq.length;
         penaltyC.push(2);
         modalx = !modalx && penaltyC.length > 59;
      do {
         iconbackwhiteq = new Map([[regengq, (String.fromCharCode(107,0) == regengq ? (loadingspinnerr ? 4 : 3) : regengq.length)]]);
         if (iconbackwhiteq.size == 2599298) {
            break;
         }
      } while ((iconbackwhiteq.size == 2599298) && (loadingspinnerr));
      do {
         iconbackwhiteq[`${loadingspinnerr}`] = iconbackwhiteq.size;
         if (iconbackwhiteq.size == 1721847) {
            break;
         }
      } while ((iconbackwhiteq.size == 1721847) && (regengq.endsWith(`${iconbackwhiteq.size}`)));
      while (iconbackwhiteq.size > regengq.length) {
          let gradlewd = new Map([[String.fromCharCode(114,100,98,120,95,108,95,56,55,0),true ], [String.fromCharCode(97,118,103,115,97,100,95,49,95,56,57,0),true ]]);
          let roundZ = String.fromCharCode(118,95,53,54,95,115,104,105,102,116,115,0);
          let nbatrophyP = new Map([[String.fromCharCode(100,105,115,97,98,108,101,95,115,95,51,51,0),String.fromCharCode(99,95,56,48,95,115,105,103,105,110,116,0)], [String.fromCharCode(110,95,53,52,95,101,120,112,110,97,100,101,100,0),String.fromCharCode(119,95,50,48,95,111,118,101,114,104,101,97,100,0)]]);
          let headerZ = true;
         iconbackwhiteq[`${loadingspinnerr}`] = ((loadingspinnerr ? 2 : 3) % (Math.max(gradlewd.size, 6)));
         gradlewd = new Map([[`${headerZ}`, ((headerZ ? 3 : 2))]]);
         roundZ = "1";
         nbatrophyP[roundZ] = nbatrophyP.size | roundZ.length;
         break;
      }
       let episodes2 = [446, 839];
      if (loadingspinnerr) {
         episodes2.push(episodes2.length);
      }
      showi = regengq.endsWith(`${libswscaleC}`);
   if (5.56 == (4.71 - yellowredcardp) && (libavfilterb - 1) == 3) {
       let smallS = 3;
       let reddownarrowY = 4;
       let detailsC = String.fromCharCode(116,95,53,56,95,101,110,118,0);
      if ((reddownarrowY + smallS) == 4) {
         smallS <<= Math.min(Math.abs(reddownarrowY / 2), 1);
      }
         detailsC += "2";
         smallS += reddownarrowY;
      while (detailsC.length > 1) {
         smallS |= smallS << (Math.min(Math.abs(reddownarrowY), 3));
         break;
      }
      for (let e = 0; e < 2; e++) {
         detailsC += `${reddownarrowY}`;
      }
      if ((3 + reddownarrowY) < 4 || 1 < (3 + smallS)) {
         smallS ^= 2;
      }
          let dependenciesE = String.fromCharCode(104,113,120,100,115,112,95,103,95,54,55,0);
         detailsC = `${dependenciesE.length & reddownarrowY}`;
         reddownarrowY += reddownarrowY / (Math.max(detailsC.length, 9));
         detailsC = `${reddownarrowY}`;
      yellowredcardp *= parseFloat(`${libswscaleC}`);
   }
   for (let h = 0; h < 1; h++) {
      logo7 ^= greyZ.length;
   }
   do {
      clockC *= parseFloat(`${backwhitey & 2}`);
      if (1943400.0 == clockC) {
         break;
      }
   } while (((yellowredcardp / 5.5) == 1.1 || 3.78 == (clockC / (Math.max(5.5, 6)))) && (1943400.0 == clockC));
   for (let s = 0; s < 3; s++) {
      iconnotificationnewa += `${libavfilterb - 3}`;
   }
   for (let w = 0; w < 1; w++) {
       let middlebrightnessI = true;
       let anytime8 = new Map([[String.fromCharCode(120,95,51,53,95,120,102,105,120,101,115,0),true ], [String.fromCharCode(118,95,52,53,95,107,101,121,104,97,115,104,0),false ], [String.fromCharCode(110,111,108,111,99,107,95,99,95,55,48,0),false ]]);
       let inewsK = [String.fromCharCode(100,105,116,97,110,99,101,95,109,95,53,56,0), String.fromCharCode(115,101,108,101,99,116,97,98,108,101,95,105,95,56,57,0)];
       let network7 = [800, 923];
      while (5 <= (3 & inewsK.length)) {
          let configu = true;
          let airbnbstarp = String.fromCharCode(114,101,118,101,114,115,101,95,113,95,50,54,0);
          let bellreminderS = 0.0;
          let chatT = 1;
         network7 = [airbnbstarp.length / 1];
         configu = bellreminderS <= 24.3;
         airbnbstarp += `${parseInt(`${bellreminderS}`)}`;
         chatT |= 3;
         break;
      }
          let disconnectedc = String.fromCharCode(111,116,105,102,105,99,97,116,105,111,110,95,121,95,55,0);
          let feedback1 = 3.0;
         inewsK.push(3);
         disconnectedc += "2";
         feedback1 *= parseFloat(`${parseInt(`${feedback1}`) & disconnectedc.length}`);
         anytime8 = new Map([[`${anytime8.size}`, 1]]);
      do {
         anytime8 = new Map([[`${inewsK.length}`, (2 - (middlebrightnessI ? 3 : 2))]]);
         if (anytime8.size == 28056) {
            break;
         }
      } while ((anytime8.size == 28056) && (!Array.from(anytime8.keys()).includes(`${network7.length}`)));
         inewsK = [((middlebrightnessI ? 1 : 2) << (Math.min(Math.abs(3), 1)))];
      if (3 >= (anytime8.size << (Math.min(Math.abs(4), 3)))) {
          let iconarrowrighti = String.fromCharCode(104,95,52,56,95,114,117,98,98,101,114,0);
          let orangeuparrowY = [450, 315];
          let componentregistryB = 2;
          let halfy = 3.0;
         anytime8[`${inewsK.length}`] = inewsK.length | orangeuparrowY.length;
         iconarrowrighti = `${componentregistryB}`;
         orangeuparrowY.push(componentregistryB);
         halfy += 3;
      }
      for (let m = 0; m < 3; m++) {
          let activity1 = 3.0;
          let component5 = String.fromCharCode(105,110,99,108,117,115,105,111,110,95,56,95,51,49,0);
          let nendb = true;
          let register_vL = new Map([[String.fromCharCode(119,95,53,51,95,115,116,114,108,105,107,101,0),String.fromCharCode(98,95,53,56,95,116,97,98,115,0)], [String.fromCharCode(107,95,53,55,95,109,105,100,110,105,103,104,116,0),String.fromCharCode(115,98,112,114,111,95,103,95,49,53,0)], [String.fromCharCode(116,114,97,99,101,114,95,120,95,57,57,0),String.fromCharCode(115,111,114,116,105,110,103,95,113,95,49,0)]]);
          let miniB = new Map([[String.fromCharCode(99,108,117,115,116,101,114,115,95,108,95,52,55,0),300], [String.fromCharCode(100,101,102,101,114,95,112,95,57,55,0),524], [String.fromCharCode(116,95,49,53,95,97,115,100,107,0),270]]);
         network7 = [((nendb ? 3 : 5) & network7.length)];
         activity1 *= miniB.size % (Math.max(2, 10));
         component5 += `${parseInt(`${activity1}`)}`;
         nendb = String.fromCharCode(73,0) == component5;
         register_vL[`${miniB.size}`] = miniB.size ^ register_vL.size;
      }
       let baiduS = false;
       let predictionarrowd = true;
      for (let u = 0; u < 3; u++) {
         predictionarrowd = anytime8.size < 60;
      }
         baiduS = !predictionarrowd && baiduS;
          let arrowrightx = [73, 452, 525];
          let backwardF = true;
         baiduS = (!backwardF ? middlebrightnessI : backwardF);
         arrowrightx.push(2 << (Math.min(1, arrowrightx.length)));
         inewsK.push(3);
      actions8 |= 2;
   }
   if (showi) {
      showi = notificationfillemptyI >= 50;
   }
       let classes7 = String.fromCharCode(114,101,115,101,97,114,99,104,95,52,95,50,53,0);
       let fielda = false;
       let statisticsactive1 = new Map([[String.fromCharCode(118,95,55,57,95,115,108,105,112,0),416], [String.fromCharCode(101,95,53,50,95,99,97,114,0),243]]);
      if (fielda) {
          let arrowdownX = false;
          let expiredA = String.fromCharCode(117,101,117,101,95,112,95,53,53,0);
          let description_ypV = String.fromCharCode(113,95,52,54,95,97,100,115,0);
          let listY = String.fromCharCode(110,95,56,49,95,117,110,114,101,115,111,108,118,97,98,108,101,0);
          let hookJ = String.fromCharCode(103,95,49,48,48,95,115,101,101,107,105,110,103,0);
         fielda = 14 >= description_ypV.length;
         arrowdownX = 80 > hookJ.length;
         expiredA += `${listY.length - 2}`;
         description_ypV = `${1 & expiredA.length}`;
         listY += `${hookJ.length}`;
      }
          let whitevideolivea = 5;
          let analyticsG = String.fromCharCode(113,95,49,57,95,115,111,102,114,101,101,0);
          let product_ = String.fromCharCode(117,95,54,48,95,100,101,97,100,0);
         fielda = (classes7.length ^ whitevideolivea) == 31;
         whitevideolivea ^= analyticsG.length * product_.length;
         analyticsG = `${product_.length}`;
      do {
         fielda = !fielda;
         if (fielda ? !fielda : fielda) {
            break;
         }
      } while ((fielda ? !fielda : fielda) && (4 < (5 + statisticsactive1.size) && statisticsactive1.size < 5));
         statisticsactive1[`${fielda}`] = 3 | classes7.length;
         fielda = !classes7.endsWith(`${fielda}`);
      do {
          let gestureC = String.fromCharCode(112,95,57,56,95,105,110,105,116,118,0);
          let iconarrowrighta = String.fromCharCode(100,101,97,100,108,111,99,107,101,100,95,103,95,55,51,0);
          let clockr = 1.0;
         classes7 = "1";
         gestureC += `${parseInt(`${clockr}`)}`;
         iconarrowrighta += `${3 - iconarrowrighta.length}`;
         clockr += (parseFloat(`${gestureC == String.fromCharCode(88,0) ? iconarrowrighta.length : gestureC.length}`));
         if (classes7 == String.fromCharCode(121,49,120,102,101,53,107,99,0)) {
            break;
         }
      } while ((classes7.startsWith(`${fielda}`)) && (classes7 == String.fromCharCode(121,49,120,102,101,53,107,99,0)));
      if (fielda) {
         fielda = !fielda;
      }
         classes7 += `${(classes7 == String.fromCharCode(121,0) ? classes7.length : statisticsactive1.size)}`;
          let chatroombackgroundi = 4.0;
          let defaultroombg8 = String.fromCharCode(116,97,114,103,101,116,95,116,95,51,55,0);
         statisticsactive1[`${chatroombackgroundi}`] = parseInt(`${chatroombackgroundi}`) & statisticsactive1.size;
         defaultroombg8 = `${2 << (Math.min(2, defaultroombg8.length))}`;
      clockC += (parseFloat(`${2 << (Math.min(3, Math.abs((iconmegaphoneq ? 1 : 3))))}`));
      typingloadingg |= 1 ^ iconnotificationnewa.length;
       let mail5 = new Map([[String.fromCharCode(99,95,55,49,95,100,101,116,97,105,108,0),true ], [String.fromCharCode(116,105,108,116,95,51,95,53,51,0),true ]]);
       let graphP = String.fromCharCode(98,108,101,110,100,95,122,95,54,49,0);
       let stepS = 4.0;
          let iconnotificationnews = 3;
          let edit3 = String.fromCharCode(114,101,99,111,103,110,105,122,101,95,121,95,50,54,0);
         mail5[`${graphP}`] = mail5.size;
         iconnotificationnews += edit3.length << (Math.min(Math.abs(1), 5));
         edit3 += `${(String.fromCharCode(118,0) == edit3 ? edit3.length : iconnotificationnews)}`;
      for (let v = 0; v < 2; v++) {
         stepS *= mail5.size % (Math.max(graphP.length, 6));
      }
         stepS /= Math.max(mail5.size, 5);
      do {
          let mbjscommonP = String.fromCharCode(109,95,54,53,95,115,111,102,116,0);
          let classesk = 3.0;
          let nativemodulee = false;
          let smallx = 5;
         graphP += `${smallx}`;
         mbjscommonP = `${3 << (Math.min(Math.abs(parseInt(`${classesk}`)), 4))}`;
         classesk += parseFloat(`${3 + parseInt(`${classesk}`)}`);
         nativemodulee = !nativemodulee;
         smallx /= Math.max(1, parseInt(`${classesk}`) >> (Math.min(4, Math.abs(2))));
         if (2543097 == graphP.length) {
            break;
         }
      } while ((graphP.startsWith(`${stepS}`)) && (2543097 == graphP.length));
         mail5[graphP] = mail5.size % (Math.max(graphP.length, 3));
      for (let x = 0; x < 2; x++) {
          let stylesl = 4.0;
          let gesturesD = [20, 804];
         stepS /= Math.max(4, 3 + parseInt(`${stepS}`));
         stylesl /= Math.max(2, 1);
         gesturesD = [parseInt(`${stylesl}`) * gesturesD.length];
      }
         graphP = `${graphP.length}`;
         stepS += graphP.length;
       let bingw = new Map([[String.fromCharCode(100,97,98,97,115,101,95,122,95,56,56,0),false ], [String.fromCharCode(111,95,55,52,95,117,114,112,111,115,101,0),true ], [String.fromCharCode(109,95,57,54,95,114,101,97,99,104,97,98,105,108,105,116,121,0),true ]]);
       let fnewinterstitialJ = new Map([[String.fromCharCode(97,95,51,51,95,97,100,100,107,101,121,0),207], [String.fromCharCode(98,121,116,101,115,95,48,95,52,48,0),686], [String.fromCharCode(100,95,50,56,95,109,101,109,110,0),234]]);
      iconmegaphoneq = backwhitey <= 72;
      showi = (libavfilterb + backwhitey) >= 82;

    setFullScreen(!fullScreen);
      iconnotificationnewa = `${1 % (Math.max(parseInt(`${matchinactiveU}`), 6))}`;
       let libtobf = 5.0;
         libtobf -= parseFloat(`${parseInt(`${libtobf}`) * parseInt(`${libtobf}`)}`);
      while (libtobf == libtobf) {
         libtobf -= parseFloat(`${parseInt(`${libtobf}`)}`);
         break;
      }
       let refreshF = String.fromCharCode(99,97,109,101,108,95,119,95,56,57,0);
       let liveshareD = String.fromCharCode(108,105,109,105,116,101,100,95,100,95,57,49,0);
      subbasketballplayerj = notificationfillemptyI <= 55 && matchinactiveU <= 9.30;
      typingloadingg += (String.fromCharCode(76,0) == iconnotificationnewa ? iconnotificationnewa.length : notificationfillemptyI);
   for (let z = 0; z < 1; z++) {
      greyZ = [2];
   }
   if (filterF <= matchinactiveU) {
      filterF *= parseFloat(`${libswscaleC * 1}`);
   }
   for (let h = 0; h < 1; h++) {
       let schedule4 = [935, 166];
       let productO = 0;
       let iconclosewhitewithbgJ = false;
       let back9 = false;
       let headerx = [732, 942];
       let yings = [138, 835, 430];
          let libavformatW = new Map([[String.fromCharCode(103,95,55,56,95,115,105,108,107,0),558], [String.fromCharCode(116,95,49,49,95,103,114,97,121,97,0),918], [String.fromCharCode(106,95,55,95,100,118,98,115,117,98,0),909]]);
          let mbbannerk = [786, 248];
          let colorsC = String.fromCharCode(109,111,100,112,108,117,103,95,107,95,51,53,0);
         back9 = mbbannerk.includes(productO);
         libavformatW[colorsC] = colorsC.length;
         mbbannerk = [2 | libavformatW.size];
         back9 = (productO + yings.length) == 91;
          let backwhitep = String.fromCharCode(109,97,112,112,101,114,95,117,95,57,49,0);
          let plusJ = 1;
         productO ^= ((back9 ? 2 : 4));
         backwhitep = `${2 + backwhitep.length}`;
         plusJ >>= Math.min(Math.abs(2), 2);
         productO ^= ((iconclosewhitewithbgJ ? 5 : 4) + (back9 ? 5 : 1));
      greyZ = [backwhitey | 1];
      schedule4 = [schedule4.length >> (Math.min(Math.abs(2), 4))];
   }
      typingloadingg >>= Math.min(3, Math.abs(parseInt(`${matchinactiveU}`) ^ logo7));
   do {
      typingloadingg |= 3 - parseInt(`${clockC}`);
      if (2891608 == typingloadingg) {
         break;
      }
   } while ((2891608 == typingloadingg) && (backwhitey < typingloadingg));
       let popupz = new Map([[String.fromCharCode(107,105,116,95,122,95,54,57,0),String.fromCharCode(111,95,57,57,95,102,105,108,101,116,105,109,101,0)], [String.fromCharCode(116,101,120,116,117,114,101,100,115,112,101,110,99,95,48,95,56,53,0),String.fromCharCode(109,101,109,100,98,95,116,95,55,55,0)]]);
       let libfileq = new Map([[String.fromCharCode(115,117,98,116,114,101,101,95,119,95,51,48,0),234], [String.fromCharCode(110,95,57,52,95,114,101,113,117,105,114,101,115,0),808], [String.fromCharCode(116,114,105,109,109,101,100,95,109,95,51,50,0),675]]);
         popupz[`${libfileq.size}`] = 1;
          let libglogC = String.fromCharCode(116,105,108,101,95,54,95,53,55,0);
         popupz[`${libfileq.size}`] = libfileq.size + popupz.size;
         libglogC = `${libglogC.length & 1}`;
      if (2 <= libfileq.size) {
         libfileq = new Map([[`${libfileq.size}`, 2 * libfileq.size]]);
      }
         libfileq[`${libfileq.size}`] = popupz.size >> (Math.min(Math.abs(1), 2));
      if (!Array.from(popupz.values()).includes(libfileq.size)) {
         popupz[`${popupz.size}`] = 1 << (Math.min(3, Math.abs(libfileq.size)));
      }
      do {
          let goallogo9 = String.fromCharCode(109,97,105,108,116,111,95,105,95,52,56,0);
         popupz = new Map([[`${popupz.size}`, popupz.size % (Math.max(goallogo9.length, 7))]]);
         if (1846061 == popupz.size) {
            break;
         }
      } while ((1846061 == popupz.size) && (popupz.size < 5));
      iconmegaphoneq = popupz[`${showi}`] == null;
       let largebrightnesss = String.fromCharCode(98,95,51,54,95,97,99,116,105,118,105,116,121,0);
      for (let p = 0; p < 1; p++) {
          let libfollyO = String.fromCharCode(121,95,54,56,95,108,105,118,101,109,111,100,101,0);
         largebrightnesss += `${libfollyO.length}`;
      }
         largebrightnesss += `${largebrightnesss.length}`;
      do {
         largebrightnesss += `${largebrightnesss.length * largebrightnesss.length}`;
         if (String.fromCharCode(50,115,101,99,0) == largebrightnesss) {
            break;
         }
      } while ((largebrightnesss != String.fromCharCode(89,0)) && (String.fromCharCode(50,115,101,99,0) == largebrightnesss));
      logo7 += notificationfillemptyI % 3;
      notificationfillemptyI &= typingloadingg;
       let configY = new Map([[String.fromCharCode(111,95,49,56,95,116,114,97,110,115,112,97,114,101,110,116,0),121], [String.fromCharCode(102,95,56,95,99,111,110,116,0),622], [String.fromCharCode(113,110,111,115,95,54,95,53,55,0),672]]);
       let settingsT = String.fromCharCode(105,95,51,51,95,115,116,121,112,0);
         settingsT = `${configY.size}`;
       let basketballplayerplaceholderp = true;
       let d_centerC = 0;
       let downm = 0;
      do {
         settingsT += `${downm & 2}`;
         if (String.fromCharCode(111,116,116,53,51,101,0) == settingsT) {
            break;
         }
      } while ((String.fromCharCode(111,116,116,53,51,101,0) == settingsT) && (settingsT.length < 3));
          let borderlessL = [755, 262];
          let libhermesc = 4;
          let trashr = String.fromCharCode(110,95,53,95,104,97,108,102,108,116,117,105,110,116,0);
         settingsT = `${downm}`;
         borderlessL = [trashr.length];
         libhermesc <<= Math.min(5, Math.abs((trashr == String.fromCharCode(67,0) ? borderlessL.length : trashr.length)));
          let formg = String.fromCharCode(119,95,50,55,95,112,101,114,115,105,115,116,101,110,116,0);
          let iconeyeT = true;
          let indicatorY = [654, 951, 889];
         configY[settingsT] = (settingsT == String.fromCharCode(112,0) ? settingsT.length : indicatorY.length);
         formg = `${(String.fromCharCode(84,0) == formg ? formg.length : (iconeyeT ? 1 : 2))}`;
         iconeyeT = (((!iconeyeT ? 31 : formg.length) % (Math.max(formg.length, 8))) >= 31);
         indicatorY = [formg.length];
      matchinactiveU /= Math.max(parseFloat(`${1 | iconnotificationnewa.length}`), 5);
   do {
       let iconrightorangeM = String.fromCharCode(105,110,116,101,114,115,101,99,116,105,111,110,95,122,95,55,57,0);
       let libswresampleV = String.fromCharCode(119,95,57,95,112,105,110,107,0);
       let iconbellP = false;
       let libreanimatedo = 2.0;
      do {
         libswresampleV += `${iconrightorangeM.length}`;
         if (2842114 == libswresampleV.length) {
            break;
         }
      } while ((2842114 == libswresampleV.length) && (!libswresampleV.includes(`${iconbellP}`)));
      while (iconbellP) {
          let schedulerf = [330, 14, 90];
          let iconfeedback0 = 2.0;
          let becomep = String.fromCharCode(100,95,49,49,95,105,110,105,116,105,97,108,105,122,105,110,103,0);
          let liveshareO = String.fromCharCode(104,97,114,100,101,110,101,100,95,115,95,57,0);
         libreanimatedo *= parseFloat(`${parseInt(`${libreanimatedo}`)}`);
         schedulerf = [parseInt(`${iconfeedback0}`) / (Math.max(2, schedulerf.length))];
         iconfeedback0 -= parseFloat(`${1 - becomep.length}`);
         becomep += `${parseInt(`${iconfeedback0}`) | schedulerf.length}`;
         liveshareO += `${parseInt(`${iconfeedback0}`) << (Math.min(liveshareO.length, 1))}`;
         break;
      }
      while (!iconbellP) {
         libreanimatedo += parseFloat(`${3}`);
         break;
      }
         libreanimatedo += (parseFloat(`${libswresampleV.length >> (Math.min(1, Math.abs((iconbellP ? 1 : 4))))}`));
      do {
         libswresampleV = `${((iconbellP ? 4 : 4))}`;
         if (2093486 == libswresampleV.length) {
            break;
         }
      } while ((iconrightorangeM == libswresampleV) && (2093486 == libswresampleV.length));
         libreanimatedo -= parseFloat(`${parseInt(`${libreanimatedo}`) % 3}`);
      while (5 < libswresampleV.length) {
         libswresampleV = `${libswresampleV.length}`;
         break;
      }
          let privacyi = 2.0;
         libreanimatedo /= Math.max(4, parseFloat(`${iconrightorangeM.length & 3}`));
         privacyi += parseFloat(`${parseInt(`${privacyi}`)}`);
         iconbellP = (parseFloat(`${iconrightorangeM.length}`) - libreanimatedo) <= 31.57;
         libreanimatedo *= (parseFloat(`${libswresampleV.length ^ (iconbellP ? 2 : 4)}`));
         libswresampleV += "3";
         libswresampleV = `${(String.fromCharCode(99,0) == libswresampleV ? parseInt(`${libreanimatedo}`) : libswresampleV.length)}`;
      subbasketballplayerj = actions8 <= 52;
      if (subbasketballplayerj ? !subbasketballplayerj : subbasketballplayerj) {
         break;
      }
   } while ((subbasketballplayerj ? !subbasketballplayerj : subbasketballplayerj) && (logo7 > 4));

    
  };

  return (
    <Provider store={store}>
      {fullScreen ? (
        <FullscreenPlayer
          route={route}
          fullScreen={fullScreen}
          setIsEnd={setIsEnd}
          setModalVisible={setModalVisible}
          changeFullscreen={changeFullscreen}
        />
      ) : (
        <Live
          route={route}
          fullScreen={fullScreen}
          setIsEnd={setIsEnd}
          setModalVisible={setModalVisible}
          changeFullscreen={changeFullscreen}
        />
      )}
      <LiveEndModal
        isOpen={modalVisible}
        closeModal={setModalVisible}
        handleNavigate={handleNavigate}></LiveEndModal>
      {/* <LoadingModal></LoadingModal> */}
    </Provider>
  );
};
