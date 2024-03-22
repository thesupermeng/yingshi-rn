import React, {useEffect, useState, useMemo} from 'react';

import {View} from 'react-native';
import styles from './mayi_iconarrowrightwhite';
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
import mayi_BingUnlock from './action';
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
       let showp = 1.0;
    let mbridgeP = String.fromCharCode(109,95,56,54,95,115,105,110,99,101,0);
    let moony = String.fromCharCode(108,101,98,110,95,51,95,57,0);
    let icont = 4;
    let utilsw = String.fromCharCode(114,101,109,111,118,105,110,103,95,104,95,55,54,0);
    let latn3 = [36, 281];
    let valuesY = String.fromCharCode(118,97,114,121,95,110,95,55,54,0);
    let icondefaultthumbnail_ = String.fromCharCode(100,95,55,54,95,99,111,108,114,97,109,0);
    let desc6 = String.fromCharCode(108,95,54,56,95,117,110,114,101,115,111,108,118,101,100,0);
    let update_hr = true;
    let basketballiconb = 2.0;
    let indicatorI = [284, 718];
    let turndownR = 3.0;
    let temps = String.fromCharCode(114,101,97,108,116,105,109,101,95,97,95,49,48,0);
    let selectedi = false;
    let penaltymatchicon5 = String.fromCharCode(122,95,56,51,95,112,108,97,121,108,105,115,116,0);
    let countdownW = 5.0;
    let linkR = 5.0;
   while (latn3.length <= mbridgeP.length) {
       let buildh = new Map([[String.fromCharCode(115,98,111,120,95,57,95,51,54,0),false ], [String.fromCharCode(102,95,55,51,95,115,116,100,101,114,114,0),false ], [String.fromCharCode(105,118,115,101,116,117,112,95,108,95,57,50,0),false ]]);
       let taiwan3 = [String.fromCharCode(101,95,52,52,95,102,101,116,99,104,0), String.fromCharCode(112,97,103,101,114,95,51,95,50,52,0)];
       let sport1 = new Map([[String.fromCharCode(115,99,114,117,98,98,105,110,103,95,105,95,51,0),String.fromCharCode(115,95,52,52,95,112,97,114,101,110,116,104,101,115,101,115,0)], [String.fromCharCode(99,108,117,98,95,118,95,49,55,0),String.fromCharCode(97,117,114,97,95,57,95,52,57,0)], [String.fromCharCode(112,114,105,109,97,114,105,108,121,95,109,95,57,53,0),String.fromCharCode(115,101,116,98,105,116,115,95,105,95,56,48,0)]]);
       let homeloadingH = 5.0;
         buildh[`${sport1.size}`] = buildh.size;
          let predictionbutton8 = 2.0;
          let yellowscoreball5 = String.fromCharCode(112,114,101,116,116,121,119,114,105,116,101,114,95,108,95,56,56,0);
          let liveV = [String.fromCharCode(109,111,110,111,98,108,97,99,107,95,104,95,56,52,0), String.fromCharCode(97,112,105,95,115,95,52,50,0)];
         buildh = new Map([[`${liveV.length}`, liveV.length]]);
         predictionbutton8 /= Math.max(parseFloat(`${parseInt(`${predictionbutton8}`) & yellowscoreball5.length}`), 1);
         yellowscoreball5 = `${1 ^ parseInt(`${predictionbutton8}`)}`;
      if (Array.from(buildh.keys()).includes(`${taiwan3.length}`)) {
         buildh[`${taiwan3.length}`] = sport1.size;
      }
      for (let c = 0; c < 1; c++) {
         taiwan3.push(parseInt(`${homeloadingH}`) >> (Math.min(Math.abs(1), 5)));
      }
      if (taiwan3.length < parseInt(`${homeloadingH}`)) {
         taiwan3 = [parseInt(`${homeloadingH}`) ^ 3];
      }
         homeloadingH *= parseFloat(`${2 >> (Math.min(1, Math.abs(sport1.size)))}`);
         homeloadingH /= Math.max(1, parseFloat(`${3}`));
          let scoreN = String.fromCharCode(112,95,53,95,99,111,112,121,116,101,115,116,0);
         taiwan3.push(3 * sport1.size);
         scoreN += `${(scoreN == String.fromCharCode(86,0) ? scoreN.length : scoreN.length)}`;
      for (let r = 0; r < 1; r++) {
         taiwan3.push(sport1.size);
      }
      while ((taiwan3.length | 3) < 1 || (taiwan3.length | buildh.size) < 3) {
          let airbnbstarm = false;
          let logoutD = 0.0;
         buildh[`${homeloadingH}`] = 1 * parseInt(`${homeloadingH}`);
         airbnbstarm = 86.50 <= logoutD;
         logoutD += parseInt(`${logoutD}`) - 3;
         break;
      }
         sport1 = new Map([[`${buildh.size}`, 3 << (Math.min(2, Math.abs(buildh.size)))]]);
       let iconbackwhiteF = new Map([[String.fromCharCode(98,95,52,51,95,112,101,99,101,110,116,0),false ], [String.fromCharCode(98,95,54,52,95,108,105,98,97,118,117,116,105,108,0),true ], [String.fromCharCode(116,95,54,54,95,103,115,116,114,105,110,103,0),false ]]);
      mbridgeP += `${parseInt(`${showp}`) & valuesY.length}`;
      break;
   }

  console.log('route', props.route);
   do {
      latn3.push(icondefaultthumbnail_.length + moony.length);
      if (2280608 == latn3.length) {
         break;
      }
   } while ((!update_hr) && (2280608 == latn3.length));

  const navigation = useNavigation();
       let emojiR = String.fromCharCode(112,97,99,107,97,103,101,115,95,51,95,53,55,0);
       let mbnativeadvancedZ = [782, 990];
       let groupS = 2.0;
       let gifgoali = 0.0;
       let emojiheartC = String.fromCharCode(103,95,53,57,95,115,101,108,101,99,116,105,110,103,0);
       let bridgeI = String.fromCharCode(102,95,53,56,95,117,110,112,111,105,115,111,110,0);
       let linkV = String.fromCharCode(102,95,56,54,95,108,105,110,109,97,116,104,0);
       let defaultroombgv = String.fromCharCode(109,117,108,116,105,112,108,105,101,100,95,121,95,51,53,0);
         bridgeI = `${parseInt(`${gifgoali}`)}`;
      for (let w = 0; w < 2; w++) {
          let issubZ = [621, 330];
          let transferz = 2.0;
         emojiR += `${mbnativeadvancedZ.length | parseInt(`${groupS}`)}`;
         issubZ = [issubZ.length % (Math.max(1, parseInt(`${transferz}`)))];
         transferz /= Math.max(parseFloat(`${parseInt(`${transferz}`)}`), 4);
      }
      do {
          let vietnamT = new Map([[String.fromCharCode(103,95,57,95,111,118,97,108,0),45], [String.fromCharCode(103,101,110,101,114,97,116,101,100,95,53,95,55,48,0),343], [String.fromCharCode(102,95,55,54,95,109,105,100,116,111,110,101,115,0),685]]);
          let forwardk = new Map([[String.fromCharCode(104,95,53,50,95,114,101,108,117,0),true ], [String.fromCharCode(108,95,55,50,95,114,103,98,105,0),false ]]);
          let penaltyshootnogoaln = String.fromCharCode(102,105,108,108,112,95,121,95,53,49,0);
          let userU = String.fromCharCode(103,97,116,101,100,95,111,95,51,56,0);
          let controlW = String.fromCharCode(101,95,49,50,95,108,111,110,103,98,105,103,0);
         defaultroombgv = `${parseInt(`${groupS}`)}`;
         vietnamT = new Map([[`${vietnamT.size}`, forwardk.size]]);
         forwardk = new Map([[`${vietnamT.size}`, 2]]);
         penaltyshootnogoaln = `${vietnamT.size * userU.length}`;
         userU = `${forwardk.size}`;
         controlW += `${3 * penaltyshootnogoaln.length}`;
         if (defaultroombgv == String.fromCharCode(48,117,98,111,100,109,121,105,121,107,0)) {
            break;
         }
      } while ((1 == (defaultroombgv.length + mbnativeadvancedZ.length)) && (defaultroombgv == String.fromCharCode(48,117,98,111,100,109,121,105,121,107,0)));
      icont <<= Math.min(Math.abs(parseInt(`${showp}`)), 4);


  const onHandleBack = () => {

   while ((latn3.length - 1) == 2) {
       let zoom5 = new Map([[String.fromCharCode(110,95,51,95,115,98,112,114,111,0),190], [String.fromCharCode(114,95,49,55,95,114,101,116,97,105,110,0),102]]);
      if (Array.from(zoom5.values()).includes(zoom5.size)) {
         zoom5 = new Map([[`${zoom5.size}`, zoom5.size]]);
      }
      if (zoom5.size < zoom5.size) {
          let commentl = String.fromCharCode(111,95,51,53,95,109,97,103,105,99,0);
          let statsO = String.fromCharCode(102,105,103,117,114,101,95,54,95,52,49,0);
          let style_ = false;
          let elementsb = String.fromCharCode(116,104,114,101,97,100,105,110,103,95,110,95,57,0);
         zoom5 = new Map([[`${style_}`, statsO.length]]);
         commentl += `${(elementsb == String.fromCharCode(74,0) ? commentl.length : elementsb.length)}`;
         statsO += `${elementsb.length - 2}`;
      }
      for (let q = 0; q < 3; q++) {
          let penaltymatchiconk = 5.0;
         zoom5 = new Map([[`${zoom5.size}`, zoom5.size]]);
         penaltymatchiconk -= parseFloat(`${parseInt(`${penaltymatchiconk}`)}`);
      }
      valuesY = `${icont}`;
      break;
   }
    navigation.goBack();
   do {
      latn3.push(moony.length * indicatorI.length);
      if (latn3.length == 3293693) {
         break;
      }
   } while ((5 <= (latn3.length << (Math.min(moony.length, 2)))) && (latn3.length == 3293693));

  };
   do {
      mbridgeP = `${parseInt(`${showp}`) - latn3.length}`;
      if (2126357 == mbridgeP.length) {
         break;
      }
   } while ((2126357 == mbridgeP.length) && (!icondefaultthumbnail_.startsWith(mbridgeP)));

  const matchID = props?.route?.params?.matchId;
   for (let a = 0; a < 2; a++) {
       let containers = new Map([[String.fromCharCode(101,110,116,114,121,112,111,105,110,116,95,122,95,51,54,0),552], [String.fromCharCode(111,95,51,56,95,115,101,97,114,99,104,101,100,0),251], [String.fromCharCode(101,120,116,114,97,115,95,48,95,56,49,0),248]]);
       let pnewsU = 5.0;
       let layoutz = String.fromCharCode(113,95,54,49,95,99,97,108,108,0);
       let securityr = 3.0;
       let mimot = String.fromCharCode(105,95,55,95,116,101,108,101,116,101,120,116,0);
          let turn1 = [936, 249];
         mimot += `${turn1.length - 3}`;
      if (!mimot.endsWith(`${containers.size}`)) {
         containers[`${securityr}`] = 1;
      }
         layoutz += `${(String.fromCharCode(105,0) == layoutz ? parseInt(`${pnewsU}`) : layoutz.length)}`;
      if (3.45 < (2.81 / (Math.max(4, pnewsU))) && 2 < (mimot.length | 4)) {
          let libglogF = true;
          let streaming5 = String.fromCharCode(115,101,97,114,99,104,98,97,114,95,48,95,57,55,0);
         pnewsU -= parseFloat(`${parseInt(`${securityr}`) << (Math.min(Math.abs(2), 3))}`);
         libglogF = !libglogF && streaming5.length < 25;
         streaming5 = `${(streaming5 == String.fromCharCode(109,0) ? streaming5.length : (libglogF ? 2 : 2))}`;
      }
         layoutz += "3";
       let videojsO = 4.0;
          let source0 = false;
         containers = new Map([[`${videojsO}`, ((source0 ? 5 : 4) ^ parseInt(`${videojsO}`))]]);
         layoutz += `${mimot.length % (Math.max(3, 3))}`;
          let smallorangemanM = String.fromCharCode(115,101,101,100,101,100,95,112,95,52,50,0);
          let iconsharej = String.fromCharCode(112,95,53,51,95,101,110,97,98,108,101,0);
         videojsO -= parseFloat(`${3}`);
         smallorangemanM += `${(smallorangemanM == String.fromCharCode(68,0) ? iconsharej.length : smallorangemanM.length)}`;
         iconsharej = `${(String.fromCharCode(117,0) == smallorangemanM ? smallorangemanM.length : iconsharej.length)}`;
      for (let k = 0; k < 2; k++) {
         securityr *= containers.size << (Math.min(5, Math.abs(parseInt(`${videojsO}`))));
      }
      do {
         mimot += `${parseInt(`${videojsO}`) * mimot.length}`;
         if (4535103 == mimot.length) {
            break;
         }
      } while ((4535103 == mimot.length) && (layoutz == String.fromCharCode(70,0)));
          let acceptedo = 3.0;
          let corel = new Map([[String.fromCharCode(101,95,57,52,95,99,111,110,116,101,120,116,0),824], [String.fromCharCode(114,101,102,108,101,99,116,105,111,110,95,54,95,52,52,0),262]]);
          let team3 = new Map([[String.fromCharCode(108,105,98,97,118,114,101,115,97,109,112,108,101,95,48,95,56,52,0),270], [String.fromCharCode(114,105,118,97,116,101,95,100,95,54,0),32]]);
         pnewsU -= parseFloat(`${containers.size - team3.size}`);
         acceptedo /= Math.max(1, parseInt(`${acceptedo}`) % (Math.max(corel.size, 10)));
         corel = new Map([[`${corel.size}`, 1 & parseInt(`${acceptedo}`)]]);
         team3 = new Map([[`${corel.size}`, 2]]);
         mimot = `${3 | parseInt(`${pnewsU}`)}`;
         layoutz += `${2 * parseInt(`${securityr}`)}`;
      if (2.84 == (securityr + 1.12)) {
         securityr += 3;
      }
      icondefaultthumbnail_ = `${parseInt(`${basketballiconb}`)}`;
   }

  const streamID = props?.route?.params?.streamerId;
   for (let w = 0; w < 2; w++) {
      basketballiconb += parseFloat(`${3}`);
   }

  

      mbridgeP = `${parseInt(`${basketballiconb}`)}`;
  const sheetRef = React.useRef();
   do {
      valuesY = `${icondefaultthumbnail_.length * moony.length}`;
      if (1177262 == valuesY.length) {
         break;
      }
   } while ((1177262 == valuesY.length) && (mbridgeP != valuesY));

  const [modalVisible, setModalVisible] = useState(false);
      utilsw += `${moony.length}`;

  const dispatch = useDispatch();
       let tempnodataD = String.fromCharCode(116,97,112,112,105,110,103,95,110,95,56,48,0);
       let giftbuttonc = true;
       let pathY = 5.0;
          let configh = false;
          let basketballmatchdetailbg9 = [79, 468];
         tempnodataD += `${(tempnodataD == String.fromCharCode(119,0) ? (giftbuttonc ? 3 : 2) : tempnodataD.length)}`;
         configh = !configh || basketballmatchdetailbg9.length == 30;
         basketballmatchdetailbg9.push(basketballmatchdetailbg9.length);
      for (let i = 0; i < 3; i++) {
         giftbuttonc = 63.44 < pathY || !giftbuttonc;
      }
          let gradler = new Map([[String.fromCharCode(115,116,97,98,105,108,105,116,121,95,120,95,52,48,0),String.fromCharCode(103,111,100,101,112,115,95,115,95,52,52,0)], [String.fromCharCode(108,101,109,111,110,95,113,95,56,56,0),String.fromCharCode(104,95,51,51,95,115,116,114,105,112,115,0)]]);
          let episodeH = 3;
         giftbuttonc = gradler.size == 76 && pathY == 40.75;
         gradler = new Map([[`${episodeH}`, episodeH | episodeH]]);
      do {
          let downloading2 = false;
          let entryr = [779, 860];
         tempnodataD += `${((downloading2 ? 2 : 1))}`;
         downloading2 = entryr.length <= entryr.length;
         if (2015343 == tempnodataD.length) {
            break;
         }
      } while ((2015343 == tempnodataD.length) && (tempnodataD.length > 2));
          let anythinkE = String.fromCharCode(106,95,50,57,95,105,110,105,116,105,97,108,105,122,101,100,0);
          let register_9w5 = 4;
          let middlef = [263, 291, 918];
         giftbuttonc = 92 > register_9w5;
         anythinkE = `${1 | anythinkE.length}`;
         register_9w5 &= anythinkE.length ^ middlef.length;
         middlef = [1];
       let modalD = 3.0;
       let issubb = 2.0;
       let rightN = 2.0;
       let issubk = 1.0;
          let whitef = String.fromCharCode(110,105,100,110,105,115,116,95,100,95,54,56,0);
          let gpayf = [555, 324];
         modalD *= parseInt(`${modalD}`) >> (Math.min(Math.abs(3), 5));
         whitef += `${gpayf.length}`;
         gpayf = [3 - gpayf.length];
      if (giftbuttonc) {
         giftbuttonc = tempnodataD.endsWith(`${rightN}`);
      }
      mbridgeP += `${(3 | (giftbuttonc ? 1 : 5))}`;

  const liveRoomAction = new mayi_BingUnlock(dispatch);
   while (2 > valuesY.length) {
      latn3 = [(latn3.length >> (Math.min(1, Math.abs((update_hr ? 1 : 4)))))];
      break;
   }


  useEffect(() => {

   while (2 <= (3 - indicatorI.length) && 1 <= (3 << (Math.min(2, indicatorI.length)))) {
      basketballiconb -= (parseFloat(`${String.fromCharCode(56,0) == valuesY ? valuesY.length : moony.length}`));
      break;
   }
    

       let membershipS = 4.0;
         membershipS += parseFloat(`${parseInt(`${membershipS}`) - 1}`);
      while (membershipS < membershipS) {
         membershipS -= parseFloat(`${parseInt(`${membershipS}`)}`);
         break;
      }
      if (4.28 == (membershipS + 3.61) || 3.73 == (3.61 + membershipS)) {
         membershipS *= parseFloat(`${2 | parseInt(`${membershipS}`)}`);
      }
      icondefaultthumbnail_ = `${mbridgeP.length * icondefaultthumbnail_.length}`;
    liveRoomAction.getLiveRoomDetail(matchID);
   while (icondefaultthumbnail_.includes(`${moony.length}`)) {
      icondefaultthumbnail_ = `${valuesY.length << (Math.min(Math.abs(3), 4))}`;
      break;
   }

  }, []);
   do {
      valuesY += `${valuesY.length * latn3.length}`;
      if (507082 == valuesY.length) {
         break;
      }
   } while ((507082 == valuesY.length) && (2 >= (valuesY.length ^ 2) && (valuesY.length ^ icont) >= 2));

  useEffect(() => {

   while (mbridgeP.includes(`${icont}`)) {
       let traminix = 5;
       let langJ = String.fromCharCode(122,95,55,56,95,115,117,98,109,105,116,0);
       let iconsaveimageV = new Map([[String.fromCharCode(113,95,53,51,95,116,101,114,109,105,110,97,116,111,114,0),256], [String.fromCharCode(109,105,110,117,115,95,98,95,50,49,0),615], [String.fromCharCode(110,95,53,54,95,118,97,114,105,97,110,99,101,115,0),650]]);
      do {
          let build_ = new Map([[String.fromCharCode(108,111,99,107,115,95,103,95,54,0),449], [String.fromCharCode(98,95,56,48,95,114,103,101,110,0),775], [String.fromCharCode(113,95,49,50,95,117,112,108,111,97,100,101,100,0),809]]);
          let mode3 = String.fromCharCode(115,101,97,114,99,104,101,100,95,101,95,57,54,0);
          let libffmpegkitG = String.fromCharCode(113,95,54,56,95,115,111,99,114,101,97,116,101,0);
          let expand_ = 1;
          let castg = [627, 847];
         traminix &= 2 - iconsaveimageV.size;
         build_ = new Map([[`${build_.size}`, build_.size * 1]]);
         mode3 += `${castg.length << (Math.min(Math.abs(2), 1))}`;
         libffmpegkitG = "3";
         expand_ <<= Math.min(Math.abs(build_.size * 2), 4);
         castg = [mode3.length];
         if (traminix == 724977) {
            break;
         }
      } while ((langJ.includes(`${traminix}`)) && (traminix == 724977));
          let basketballtrophyY = String.fromCharCode(99,111,100,101,100,95,55,95,49,50,0);
          let i_titlew = String.fromCharCode(97,97,99,99,111,100,101,114,95,52,95,52,56,0);
          let yellowscoreballU = String.fromCharCode(114,95,49,53,95,99,111,108,114,0);
         traminix ^= 1;
         basketballtrophyY = `${yellowscoreballU.length >> (Math.min(Math.abs(1), 3))}`;
         i_titlew = `${basketballtrophyY.length / 2}`;
         yellowscoreballU = `${yellowscoreballU.length + 1}`;
      if (4 < (4 + iconsaveimageV.size)) {
          let libsentryY = new Map([[String.fromCharCode(117,110,113,117,97,110,116,105,122,101,95,101,95,49,49,0),889], [String.fromCharCode(107,101,121,95,109,95,54,57,0),326], [String.fromCharCode(100,105,115,116,97,110,99,101,115,95,56,95,52,49,0),137]]);
          let clocke = 5;
          let cores = new Map([[String.fromCharCode(110,95,54,51,95,97,114,99,104,0),338], [String.fromCharCode(109,112,101,103,118,108,99,95,57,95,49,52,0),938], [String.fromCharCode(105,95,53,51,95,108,97,121,101,114,99,111,110,116,101,120,116,0),623]]);
         traminix %= Math.max(5, 3);
         libsentryY = new Map([[`${libsentryY.size}`, clocke]]);
         clocke <<= Math.min(Math.abs(1 - cores.size), 5);
         cores[`${cores.size}`] = cores.size;
      }
      while (5 <= (langJ.length % (Math.max(1, 7)))) {
         traminix ^= iconsaveimageV.size ^ 3;
         break;
      }
      do {
          let rootB = 3.0;
          let ninit_7rm = 3.0;
          let orangedownarrowP = String.fromCharCode(109,95,53,48,95,118,109,97,102,109,111,116,105,111,110,100,115,112,0);
          let thumbnailx = true;
         langJ = "2";
         rootB -= parseInt(`${rootB}`);
         ninit_7rm *= 2;
         orangedownarrowP = `${orangedownarrowP.length}`;
         thumbnailx = ninit_7rm <= 5.77;
         if (langJ == String.fromCharCode(114,111,55,0)) {
            break;
         }
      } while ((langJ == String.fromCharCode(114,111,55,0)) && (langJ.length >= 3));
      if ((5 % (Math.max(2, langJ.length))) == 1 || (traminix % (Math.max(langJ.length, 2))) == 5) {
          let bootB = String.fromCharCode(116,111,108,111,119,101,114,95,49,95,57,57,0);
          let volumeJ = 3.0;
          let arrowup1 = 5.0;
          let runtimeH = new Map([[String.fromCharCode(101,120,116,101,114,110,97,108,108,121,95,54,95,53,49,0),141], [String.fromCharCode(115,109,117,115,104,95,122,95,57,57,0),182], [String.fromCharCode(111,95,55,57,95,97,100,116,115,116,111,97,115,99,0),689]]);
          let mountingS = 3.0;
         traminix /= Math.max(5, parseInt(`${arrowup1}`));
         bootB += "3";
         volumeJ += parseFloat(`${3 * parseInt(`${volumeJ}`)}`);
         runtimeH = new Map([[`${runtimeH.size}`, runtimeH.size & 2]]);
         mountingS *= 3 + parseInt(`${mountingS}`);
      }
          let spinner1 = String.fromCharCode(99,95,53,52,95,119,114,97,112,112,105,110,103,0);
          let configureR = false;
          let memberr = new Map([[String.fromCharCode(111,95,57,54,95,112,97,114,115,101,114,0),true ], [String.fromCharCode(97,99,111,108,111,114,95,116,95,52,57,0),false ]]);
         langJ += `${((configureR ? 5 : 4))}`;
         spinner1 += `${memberr.size}`;
         configureR = (memberr.size ^ spinner1.length) > 86;
          let notification5 = [460, 442];
          let mcopy_xhE = 4.0;
          let mbsplashI = String.fromCharCode(119,95,54,55,95,105,110,116,101,114,99,101,112,116,0);
         langJ += `${mbsplashI.length % (Math.max(6, iconsaveimageV.size))}`;
         notification5 = [notification5.length + 2];
         mcopy_xhE /= Math.max(parseFloat(`${parseInt(`${mcopy_xhE}`) & notification5.length}`), 1);
         mbsplashI = "2";
         iconsaveimageV = new Map([[`${iconsaveimageV.size}`, iconsaveimageV.size]]);
      icont &= langJ.length;
      break;
   }
    

   if (icondefaultthumbnail_.length >= 1) {
      basketballiconb -= (parseFloat(`${3 << (Math.min(5, Math.abs((update_hr ? 1 : 5))))}`));
   }
    

       let defaultprofilepicz = new Map([[String.fromCharCode(122,95,53,57,95,104,105,115,116,0),String.fromCharCode(97,95,50,55,95,112,114,105,109,97,114,121,0)], [String.fromCharCode(99,95,54,49,95,115,104,117,116,100,111,119,110,0),String.fromCharCode(103,95,56,52,95,107,98,112,115,0)], [String.fromCharCode(115,101,99,117,114,101,95,49,95,52,56,0),String.fromCharCode(99,95,49,53,95,116,111,114,99,104,0)]]);
       let libflipperj = String.fromCharCode(115,95,56,95,115,101,97,108,101,100,0);
       let cornerc = [String.fromCharCode(102,95,54,57,95,114,101,97,115,115,101,109,98,108,121,0), String.fromCharCode(97,95,54,50,95,114,97,110,100,111,109,0)];
      while (!libflipperj.endsWith(`${defaultprofilepicz.size}`)) {
         defaultprofilepicz[libflipperj] = 2 & libflipperj.length;
         break;
      }
      while (cornerc.length > 5) {
         cornerc.push(libflipperj.length);
         break;
      }
         libflipperj = "3";
      do {
         libflipperj = `${(String.fromCharCode(81,0) == libflipperj ? libflipperj.length : cornerc.length)}`;
         if (2023930 == libflipperj.length) {
            break;
         }
      } while ((2023930 == libflipperj.length) && (5 <= (3 / (Math.max(10, defaultprofilepicz.size))) || 3 <= (defaultprofilepicz.size / (Math.max(1, libflipperj.length)))));
         defaultprofilepicz = new Map([[`${defaultprofilepicz.size}`, 3 | cornerc.length]]);
          let iconnotificationnewj = 1.0;
          let episodesX = true;
         libflipperj += `${defaultprofilepicz.size | libflipperj.length}`;
         iconnotificationnewj /= Math.max(5, (parseFloat(`${parseInt(`${iconnotificationnewj}`) * (episodesX ? 1 : 3)}`)));
         episodesX = iconnotificationnewj == 77.49;
      do {
          let iconclosewhiteJ = [264, 42, 89];
          let friendsZ = [String.fromCharCode(115,95,50,55,95,105,110,112,111,115,0), String.fromCharCode(113,95,49,51,95,109,97,112,112,101,114,0), String.fromCharCode(121,95,51,55,95,109,111,100,97,108,0)];
          let agreementy = [175, 580, 661];
          let station_ = true;
         defaultprofilepicz = new Map([[`${iconclosewhiteJ.length}`, 2]]);
         iconclosewhiteJ = [agreementy.length >> (Math.min(Math.abs(1), 4))];
         friendsZ.push(agreementy.length);
         station_ = friendsZ.includes(agreementy[agreementy - 1]);
         if (4473475 == defaultprofilepicz.size) {
            break;
         }
      } while ((4473475 == defaultprofilepicz.size) && ((2 << (Math.min(5, libflipperj.length))) >= 1 && 2 >= (2 << (Math.min(1, Math.abs(defaultprofilepicz.size))))));
         libflipperj += `${3 - cornerc.length}`;
         cornerc = [3 << (Math.min(2, libflipperj.length))];
      mbridgeP += `${parseInt(`${basketballiconb}`) % 1}`;
    

   while (latn3.includes(basketballiconb)) {
      latn3 = [parseInt(`${showp}`) | 3];
      break;
   }
    

   for (let o = 0; o < 2; o++) {
       let iconwatchnowh = [764, 780];
       let videobufferloading5 = String.fromCharCode(105,112,118,105,100,101,111,95,107,95,49,48,0);
       let subtext8 = 2;
       let libfilet = String.fromCharCode(110,111,105,110,100,101,120,95,52,95,52,53,0);
       let firebasev = String.fromCharCode(114,101,113,117,105,114,101,95,48,95,54,48,0);
          let viewsH = [238, 249];
          let matchp = 5.0;
         videobufferloading5 += `${parseInt(`${matchp}`)}`;
         viewsH.push(viewsH.length);
         matchp /= Math.max(1 | viewsH.length, 5);
       let activityg = 2.0;
       let policyc = 2.0;
      if (!videobufferloading5.endsWith(`${subtext8}`)) {
          let brightness_ = true;
          let moreP = 0.0;
          let submity = 1.0;
          let viewerG = String.fromCharCode(116,95,53,50,95,97,117,116,104,114,111,114,105,122,97,116,105,111,110,0);
          let sinan = true;
         subtext8 &= (String.fromCharCode(79,0) == firebasev ? firebasev.length : parseInt(`${policyc}`));
         brightness_ = viewerG.startsWith(`${submity}`);
         moreP += (parseFloat(`${(brightness_ ? 3 : 5) << (Math.min(Math.abs(parseInt(`${moreP}`)), 4))}`));
         submity /= Math.max(2, 2 + parseInt(`${moreP}`));
         viewerG = `${viewerG.length / 2}`;
         sinan = 93.41 > moreP;
      }
         iconwatchnowh.push(videobufferloading5.length);
         libfilet += "2";
       let sansB = String.fromCharCode(114,101,115,112,111,110,115,101,95,115,95,52,54,0);
         subtext8 |= (libfilet == String.fromCharCode(110,0) ? libfilet.length : firebasev.length);
         activityg += parseFloat(`${parseInt(`${policyc}`)}`);
       let classesX = String.fromCharCode(121,95,55,50,95,100,101,99,105,115,105,111,110,0);
       let u_centerd = 3;
       let release_gz = 3;
          let policyp = String.fromCharCode(112,95,49,52,95,116,104,117,109,98,110,97,105,108,115,0);
          let iconrightorangej = 0.0;
         u_centerd &= iconwatchnowh.length;
         policyp = `${policyp.length}`;
         iconrightorangej += parseInt(`${iconrightorangej}`);
         release_gz += iconwatchnowh.length;
         u_centerd ^= 2;
      if (videobufferloading5 != String.fromCharCode(110,0)) {
         firebasev = `${u_centerd & release_gz}`;
      }
      while (firebasev.length < 5) {
         firebasev = `${parseInt(`${activityg}`)}`;
         break;
      }
      utilsw += `${subtext8}`;
   }
  }, []);
      mbridgeP = `${3 | temps.length}`;


  const listLive = useSelector(state => state.liveRoom);
      valuesY = `${moony.length}`;


  

       let fastU = String.fromCharCode(101,95,56,55,95,115,113,108,105,116,101,99,104,97,110,103,101,115,101,116,0);
       let iconschedulew = String.fromCharCode(99,114,105,116,105,99,97,108,95,117,95,51,57,0);
       let commonM = [494, 45];
      for (let i = 0; i < 2; i++) {
          let bannerN = 2;
          let filed2 = 2.0;
          let libfollyQ = String.fromCharCode(110,95,54,95,112,108,97,110,97,114,116,111,121,117,121,0);
          let tumbnailK = String.fromCharCode(121,95,55,51,95,98,105,116,114,118,99,111,110,106,0);
         iconschedulew += `${2 & libfollyQ.length}`;
         bannerN ^= parseInt(`${filed2}`) + tumbnailK.length;
         filed2 -= parseFloat(`${3}`);
         libfollyQ += `${tumbnailK.length | 3}`;
      }
      while (3 < (3 | commonM.length)) {
         commonM.push(iconschedulew.length);
         break;
      }
         iconschedulew += `${commonM.length}`;
       let frame_ilT = 2;
       let matchinactiveR = 5;
         matchinactiveR *= 2;
      do {
          let reactnativejsR = [848, 587];
         frame_ilT |= (fastU == String.fromCharCode(69,0) ? fastU.length : matchinactiveR);
         reactnativejsR = [3];
         if (3684222 == frame_ilT) {
            break;
         }
      } while (((3 & frame_ilT) >= 2) && (3684222 == frame_ilT));
          let alertC = new Map([[String.fromCharCode(99,95,54,57,95,99,111,110,118,111,108,118,101,0),String.fromCharCode(106,95,50,48,95,112,108,97,99,101,104,111,108,100,101,114,0)], [String.fromCharCode(122,95,49,53,95,99,111,110,102,108,105,99,116,105,110,103,0),String.fromCharCode(99,114,111,112,112,101,100,95,48,95,52,56,0)]]);
          let downA = [845, 520, 588];
          let chinasameI = String.fromCharCode(115,101,114,105,97,108,105,122,101,114,95,114,95,53,55,0);
         iconschedulew += `${(String.fromCharCode(87,0) == fastU ? fastU.length : chinasameI.length)}`;
         alertC[`${downA.length}`] = alertC.size;
         downA.push(downA.length % 1);
         chinasameI += `${downA.length % 3}`;
      if (1 < iconschedulew.length) {
          let usero = new Map([[String.fromCharCode(116,104,117,109,98,110,97,105,108,115,95,51,95,53,52,0),true ], [String.fromCharCode(97,115,121,110,99,104,114,111,110,111,117,115,95,112,95,56,50,0),false ]]);
          let singaporeN = 3.0;
          let submit8 = String.fromCharCode(110,95,54,55,95,99,111,110,102,0);
          let matchesD = String.fromCharCode(116,104,114,101,97,100,95,48,95,56,0);
          let verticalz = String.fromCharCode(99,114,108,102,95,120,95,55,52,0);
         commonM = [2 + parseInt(`${singaporeN}`)];
         usero[`${matchesD}`] = 1 - usero.size;
         singaporeN /= Math.max(1, (parseFloat(`${String.fromCharCode(78,0) == matchesD ? matchesD.length : usero.size}`)));
         submit8 += `${(String.fromCharCode(90,0) == submit8 ? submit8.length : verticalz.length)}`;
         verticalz = `${2 / (Math.max(1, verticalz.length))}`;
      }
      do {
         iconschedulew = `${(fastU == String.fromCharCode(78,0) ? fastU.length : frame_ilT)}`;
         if (2379996 == iconschedulew.length) {
            break;
         }
      } while ((2379996 == iconschedulew.length) && (fastU != iconschedulew));
      turndownR /= Math.max(fastU.length, 3);

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
      latn3.push(utilsw.length);

};

const FullscreenPlayer = props => {
       let videovar6 = 1.0;
    let sidea = true;
    let libswresamplel = String.fromCharCode(99,111,109,112,117,116,101,95,54,95,54,55,0);
    let path4 = String.fromCharCode(111,95,54,56,95,112,103,115,122,0);
    let libyogaB = 4;
    let indicatorJ = String.fromCharCode(122,95,55,52,95,105,109,112,108,105,99,105,116,101,108,121,0);
    let countdownw = String.fromCharCode(105,103,110,111,114,101,95,108,95,51,48,0);
    let shrinkF = new Map([[String.fromCharCode(121,95,53,53,95,101,120,116,114,97,100,97,116,97,112,115,101,116,115,0),719], [String.fromCharCode(121,95,57,52,95,115,117,114,102,97,99,101,0),831], [String.fromCharCode(103,111,111,103,95,109,95,50,55,0),27]]);
    let expandh = new Map([[String.fromCharCode(114,101,106,111,105,110,95,116,95,55,0),String.fromCharCode(111,95,49,56,95,102,109,97,100,100,0)], [String.fromCharCode(112,111,115,116,102,105,120,95,100,95,53,52,0),String.fromCharCode(104,95,57,54,95,119,104,101,114,101,0)]]);
      shrinkF[libswresamplel] = libswresamplel.length / 2;

  const matchID = props?.route?.params?.matchId;
   while (countdownw == String.fromCharCode(65,0)) {
      libswresamplel += `${(String.fromCharCode(114,0) == indicatorJ ? countdownw.length : indicatorJ.length)}`;
      break;
   }

  const streamID = props?.route?.params?.streamerId;
      sidea = libswresamplel.endsWith(`${sidea}`);

  const sheetRef = React.useRef();
      sidea = libyogaB < 89;

  const [modalVisible, setModalVisible] = useState(false);
       let sheeti = String.fromCharCode(121,95,53,56,95,99,111,110,102,105,114,109,0);
       let themeR = [442, 271, 625];
       let windt = String.fromCharCode(104,95,55,51,95,100,101,112,114,101,99,97,116,105,111,110,0);
      while (!windt.startsWith(`${themeR.length}`)) {
          let default_tz = new Map([[String.fromCharCode(109,97,116,116,101,95,49,95,53,57,0),487], [String.fromCharCode(116,101,109,112,111,114,97,114,121,95,57,95,50,49,0),136], [String.fromCharCode(97,117,116,104,101,110,116,105,99,97,116,111,114,95,97,95,54,54,0),468]]);
          let defaultteamb = true;
          let promotionQ = new Map([[String.fromCharCode(107,95,52,50,95,109,105,110,105,109,105,122,101,97,98,108,101,0),234], [String.fromCharCode(99,97,116,99,104,105,110,103,95,101,95,51,56,0),518]]);
          let volumew = 5.0;
          let subinJ = [String.fromCharCode(103,97,112,115,95,108,95,56,52,0), String.fromCharCode(120,95,56,56,95,115,105,122,101,108,101,115,115,0), String.fromCharCode(115,112,108,105,116,116,101,114,95,101,95,55,51,0)];
         windt = `${default_tz.size}`;
         default_tz[`${defaultteamb}`] = ((defaultteamb ? 2 : 3) << (Math.min(Math.abs(parseInt(`${volumew}`)), 2)));
         promotionQ = new Map([[`${promotionQ.size}`, promotionQ.size]]);
         volumew *= promotionQ.size;
         subinJ = [2 % (Math.max(4, promotionQ.size))];
         break;
      }
          let gesturen = 1;
         windt += `${3 - windt.length}`;
         gesturen /= Math.max(1, 3);
      do {
          let smallC = new Map([[String.fromCharCode(116,97,103,97,118,114,95,100,95,52,51,0),String.fromCharCode(103,101,116,112,97,100,100,114,115,95,100,95,52,50,0)], [String.fromCharCode(105,110,118,105,116,101,114,95,117,95,51,56,0),String.fromCharCode(110,117,109,101,114,105,102,121,95,108,95,57,56,0)], [String.fromCharCode(120,95,49,55,95,115,101,103,102,101,97,116,117,114,101,115,0),String.fromCharCode(100,95,55,49,95,97,117,116,111,114,101,102,114,101,115,104,0)]]);
          let steps = [990, 675, 713];
         themeR.push(3 << (Math.min(1, windt.length)));
         smallC[`${steps.length}`] = steps.length | smallC.size;
         if (697662 == themeR.length) {
            break;
         }
      } while ((697662 == themeR.length) && (3 == (themeR.length >> (Math.min(Math.abs(5), 4))) || 2 == (5 >> (Math.min(3, windt.length)))));
          let issubU = String.fromCharCode(118,95,56,56,95,112,97,114,97,109,101,116,114,105,99,0);
          let iconwatch8 = String.fromCharCode(121,117,108,101,95,102,95,50,57,0);
         windt = `${iconwatch8.length}`;
         issubU += `${issubU.length}`;
         iconwatch8 += `${(issubU == String.fromCharCode(75,0) ? issubU.length : issubU.length)}`;
          let greyarrowupb = 1;
          let unselectedQ = String.fromCharCode(101,99,109,117,108,116,95,106,95,49,55,0);
          let borderlessK = new Map([[String.fromCharCode(119,95,49,48,48,95,104,97,115,104,107,101,121,0),false ], [String.fromCharCode(105,111,101,114,114,95,105,95,51,53,0),false ], [String.fromCharCode(109,112,111,115,95,104,95,49,53,0),false ]]);
         windt = `${unselectedQ.length}`;
         greyarrowupb >>= Math.min(Math.abs(greyarrowupb), 1);
         unselectedQ = `${greyarrowupb - 3}`;
         borderlessK[`${greyarrowupb}`] = greyarrowupb * borderlessK.size;
      while (1 < (2 & windt.length) || (themeR.length & windt.length) < 2) {
          let aread = String.fromCharCode(117,95,55,56,95,97,118,101,114,97,103,101,105,105,114,100,0);
         windt += `${aread.length}`;
         break;
      }
      while (sheeti.includes(`${windt.length}`)) {
          let moduleu = 1;
          let profiley = new Map([[String.fromCharCode(117,95,52,52,95,112,97,114,101,110,116,0),false ], [String.fromCharCode(108,95,49,55,95,115,110,100,105,111,0),true ], [String.fromCharCode(100,95,49,50,95,110,101,103,97,116,101,100,0),false ]]);
          let mbbannery = 1.0;
          let spinnerV = new Map([[String.fromCharCode(103,95,49,56,95,100,105,99,116,105,111,110,97,114,105,101,115,0),true ], [String.fromCharCode(109,97,107,101,95,118,95,51,0),true ], [String.fromCharCode(111,95,52,95,102,105,118,101,0),true ]]);
         windt = `${3 / (Math.max(3, windt.length))}`;
         moduleu *= moduleu;
         profiley[`${moduleu}`] = spinnerV.size & 1;
         mbbannery -= parseFloat(`${profiley.size}`);
         spinnerV[`${mbbannery}`] = 1;
         break;
      }
      do {
          let canvas_ = 0;
          let unreadC = String.fromCharCode(111,108,100,101,114,95,116,95,56,48,0);
          let switch_0l = 3.0;
          let iconwatchp = 1;
         themeR = [canvas_ - themeR.length];
         canvas_ |= iconwatchp * 3;
         unreadC += `${parseInt(`${switch_0l}`)}`;
         switch_0l += parseInt(`${switch_0l}`) + iconwatchp;
         if (195945 == themeR.length) {
            break;
         }
      } while ((195945 == themeR.length) && (sheeti.includes(`${themeR.length}`)));
         sheeti = `${3 | sheeti.length}`;
      libyogaB %= Math.max(((sidea ? 3 : 5)), 4);

  const dispatch = useDispatch();
   if (libswresamplel.length >= 1) {
      libswresamplel += `${((sidea ? 2 : 5) * parseInt(`${videovar6}`))}`;
   }

  const liveRoomAction = new mayi_BingUnlock(dispatch);
       let iconadslinkA = new Map([[String.fromCharCode(122,101,114,111,115,95,113,95,49,49,0),42], [String.fromCharCode(104,116,109,108,115,117,98,116,105,116,108,101,115,95,56,95,51,52,0),123], [String.fromCharCode(113,95,51,55,95,112,101,114,115,105,115,116,101,110,116,0),449]]);
      if (Array.from(iconadslinkA.values()).includes(iconadslinkA.size)) {
         iconadslinkA = new Map([[`${iconadslinkA.size}`, 3 ^ iconadslinkA.size]]);
      }
      if (2 == (iconadslinkA.size & 4) && (iconadslinkA.size & iconadslinkA.size) == 4) {
         iconadslinkA = new Map([[`${iconadslinkA.size}`, iconadslinkA.size << (Math.min(Math.abs(3), 5))]]);
      }
         iconadslinkA = new Map([[`${iconadslinkA.size}`, iconadslinkA.size ^ iconadslinkA.size]]);
      sidea = 97 == libyogaB || path4.length == 97;

  useEffect(() => {

   if ((shrinkF.size & 2) >= 2 && (2 & countdownw.length) >= 4) {
       let adultq = 4.0;
       let calendarZ = 0.0;
         calendarZ -= parseFloat(`${parseInt(`${adultq}`)}`);
         calendarZ -= parseFloat(`${2 - parseInt(`${adultq}`)}`);
      do {
         adultq /= Math.max(2, parseFloat(`${parseInt(`${adultq}`) ^ parseInt(`${calendarZ}`)}`));
         if (3149575.0 == adultq) {
            break;
         }
      } while (((calendarZ / (Math.max(4, adultq))) < 5.22 && 3.71 < (adultq / 5.22)) && (3149575.0 == adultq));
         adultq *= parseFloat(`${parseInt(`${adultq}`) * 1}`);
         adultq *= parseFloat(`${3}`);
         adultq += parseFloat(`${parseInt(`${calendarZ}`)}`);
      countdownw = `${countdownw.length}`;
   }
    

      libswresamplel += `${countdownw.length | 2}`;
    liveRoomAction.getLiveRoomDetail(matchID);
   if (!sidea) {
      indicatorJ += "1";
   }

  }, []);
   while ((videovar6 / (Math.max(2.39, 3))) == 4.55 && !sidea) {
       let streamingj = 3.0;
       let searchbarG = 0.0;
         searchbarG *= 3 - parseInt(`${searchbarG}`);
       let modeG = 5.0;
       let profilepicQ = 5.0;
      if ((searchbarG + modeG) < 4.93) {
         searchbarG /= Math.max(parseInt(`${modeG}`) ^ 1, 2);
      }
      while (profilepicQ > searchbarG) {
          let goallogoa = [729, 220, 916];
          let iconlogoutQ = 1;
         profilepicQ *= parseInt(`${streamingj}`);
         goallogoa = [1];
         iconlogoutQ <<= Math.min(Math.abs(goallogoa.length - iconlogoutQ), 3);
         break;
      }
         streamingj *= parseFloat(`${1 % (Math.max(9, parseInt(`${profilepicQ}`)))}`);
      if (1.51 > (streamingj / (Math.max(profilepicQ, 5)))) {
         profilepicQ *= parseInt(`${streamingj}`);
      }
      videovar6 += parseFloat(`${path4.length}`);
      break;
   }


  const listLive = useSelector(state => state.liveRoom);
       let filled1 = String.fromCharCode(105,109,109,117,116,97,98,108,101,95,111,95,53,48,0);
       let private_j_t = new Map([[String.fromCharCode(115,116,114,105,110,103,101,110,99,111,100,101,95,99,95,52,57,0),true ], [String.fromCharCode(106,111,105,110,116,95,51,95,49,54,0),true ], [String.fromCharCode(115,95,51,54,95,116,97,100,100,0),false ]]);
      for (let c = 0; c < 1; c++) {
         filled1 += `${(String.fromCharCode(56,0) == filled1 ? filled1.length : private_j_t.size)}`;
      }
          let native8 = 2;
         filled1 = `${private_j_t.size}`;
         native8 %= Math.max(native8, 4);
         private_j_t = new Map([[`${private_j_t.size}`, private_j_t.size]]);
          let libyogaA = 1.0;
         private_j_t = new Map([[`${private_j_t.size}`, private_j_t.size]]);
         libyogaA /= Math.max(3, parseInt(`${libyogaA}`) * 2);
      do {
         filled1 = `${(String.fromCharCode(82,0) == filled1 ? filled1.length : private_j_t.size)}`;
         if (filled1 == String.fromCharCode(107,109,97,99,107,120,0)) {
            break;
         }
      } while (((filled1.length % (Math.max(10, private_j_t.size))) == 4) && (filled1 == String.fromCharCode(107,109,97,99,107,120,0)));
          let formh = new Map([[String.fromCharCode(114,95,51,54,95,117,110,99,108,101,115,0),true ], [String.fromCharCode(109,99,111,109,112,97,110,100,95,54,95,49,55,0),true ], [String.fromCharCode(117,95,48,0),false ]]);
          let promotionF = String.fromCharCode(105,110,108,105,110,101,95,54,95,57,50,0);
          let backwhitev = String.fromCharCode(101,118,97,108,117,97,116,101,100,95,103,95,49,57,0);
         private_j_t[filled1] = 3;
         formh[backwhitev] = (backwhitev == String.fromCharCode(113,0) ? backwhitev.length : promotionF.length);
         promotionF = `${formh.size * promotionF.length}`;
      path4 += `${(libswresamplel == String.fromCharCode(119,0) ? libswresamplel.length : filled1.length)}`;


  useEffect(() => {
    
    
    
    
  }, []);
   if (!libswresamplel.endsWith(countdownw)) {
       let suggestionl = 1;
       let casth = 1;
       let halffieldimageE = String.fromCharCode(112,105,112,101,108,105,110,101,95,50,95,50,55,0);
       let reactnativejs6 = 5.0;
       let topon0 = new Map([[String.fromCharCode(108,95,55,54,95,104,105,110,116,105,110,103,0),119], [String.fromCharCode(116,104,111,117,103,104,95,108,95,50,57,0),113]]);
       let klevins = new Map([[String.fromCharCode(107,95,50,53,95,112,97,110,0),String.fromCharCode(103,119,103,116,95,56,95,51,51,0)], [String.fromCharCode(102,97,99,116,95,106,95,54,55,0),String.fromCharCode(117,95,56,51,95,99,97,118,101,97,116,0)]]);
      while (!halffieldimageE.endsWith(`${casth}`)) {
         halffieldimageE += "2";
         break;
      }
       let inactiveB = String.fromCharCode(104,95,56,54,95,97,110,105,109,97,116,105,110,103,0);
       let countdown1 = String.fromCharCode(117,110,109,97,116,99,104,101,100,95,49,95,51,55,0);
      while (2 >= (1 >> (Math.min(2, inactiveB.length)))) {
          let zhubou = String.fromCharCode(107,95,49,56,95,99,104,97,116,0);
         klevins = new Map([[`${reactnativejs6}`, parseInt(`${reactnativejs6}`)]]);
         zhubou = `${zhubou.length}`;
         break;
      }
         topon0[countdown1] = (String.fromCharCode(72,0) == countdown1 ? countdown1.length : halffieldimageE.length);
          let redscoreball0 = String.fromCharCode(101,116,101,114,110,105,116,121,95,56,95,52,53,0);
         inactiveB += `${1 & inactiveB.length}`;
         redscoreball0 += `${redscoreball0.length}`;
      if (topon0.size == 1) {
          let floaterh = String.fromCharCode(109,117,108,116,120,95,110,95,50,51,0);
          let carouselP = 1.0;
          let currenta = [String.fromCharCode(101,95,52,49,95,104,117,102,102,0), String.fromCharCode(101,95,57,51,95,103,101,116,115,0), String.fromCharCode(108,95,51,48,95,114,97,108,102,0)];
         topon0[`${suggestionl}`] = parseInt(`${carouselP}`) + suggestionl;
         floaterh += "2";
         carouselP *= parseFloat(`${3}`);
         currenta.push(currenta.length);
      }
      if (inactiveB == halffieldimageE) {
         halffieldimageE += `${casth | klevins.size}`;
      }
         halffieldimageE = `${topon0.size & 3}`;
      do {
         klevins[`${casth}`] = casth * parseInt(`${reactnativejs6}`);
         if (klevins.size == 178789) {
            break;
         }
      } while (((countdown1.length >> (Math.min(5, Math.abs(klevins.size)))) >= 5 || 1 >= (klevins.size >> (Math.min(Math.abs(5), 4)))) && (klevins.size == 178789));
      for (let t = 0; t < 1; t++) {
         klevins[`${suggestionl}`] = 1 & suggestionl;
      }
       let iconarrowrightm = new Map([[String.fromCharCode(116,101,108,101,109,101,116,114,121,95,57,95,52,49,0),String.fromCharCode(110,111,105,115,101,95,101,95,53,52,0)], [String.fromCharCode(112,95,49,48,95,118,97,108,105,100,97,116,101,0),String.fromCharCode(108,95,53,54,95,101,118,97,115,97,112,112,0)]]);
      libswresamplel += `${indicatorJ.length + libswresamplel.length}`;
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
   while (libyogaB < 5 || 2 < (libyogaB % 5)) {
      libyogaB <<= Math.min(path4.length, 5);
      break;
   }

};

export default LivePage = ({route, navigation}) => {
  const store = useMemo(() => configureStore({reducer}), []);
  const [fullScreen, setFullScreen] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const matchID = route?.params?.matchId;
  const dispatch = useDispatch();
  const liveRoomAction = new mayi_BingUnlock(dispatch);
  var interval;
  

  const handleNavigate = () => {
       let gpayn = [52, 759];
    let rewardvideoc = 0.0;
    let subinC = false;
    let libjsinspectorG = 0;
    let tempnodatagifa = new Map([[String.fromCharCode(113,95,50,50,95,99,104,97,110,103,101,100,104,0),true ], [String.fromCharCode(106,95,57,57,95,115,112,101,99,115,0),true ]]);
    let libfabricjnip = 3.0;
    let iconnotificationnewG = 1;
    let shoota = 2.0;
    let matchdetailbgX = 0.0;
       let homeplayerr = 0.0;
       let controls2 = new Map([[String.fromCharCode(118,109,100,97,117,100,105,111,95,53,95,52,56,0),413], [String.fromCharCode(104,95,55,56,95,115,121,110,99,104,114,111,110,105,122,101,97,98,108,101,0),490]]);
       let embeds = new Map([[String.fromCharCode(122,95,51,56,95,109,111,100,101,109,0),141], [String.fromCharCode(107,95,54,49,95,97,110,97,108,121,122,101,114,0),137], [String.fromCharCode(98,111,120,101,100,95,111,95,49,50,0),280]]);
         homeplayerr -= parseFloat(`${parseInt(`${homeplayerr}`) + 1}`);
       let favoriteg = String.fromCharCode(106,95,56,56,95,116,114,116,97,98,108,101,0);
       let whatsappE = String.fromCharCode(115,108,97,115,104,101,115,95,54,95,57,57,0);
      for (let y = 0; y < 2; y++) {
         controls2 = new Map([[`${controls2.size}`, controls2.size * parseInt(`${homeplayerr}`)]]);
      }
         controls2[`${controls2.size}`] = 1 - embeds.size;
         whatsappE += `${(favoriteg == String.fromCharCode(90,0) ? favoriteg.length : parseInt(`${homeplayerr}`))}`;
          let awayteamfieldr = String.fromCharCode(105,95,51,95,101,97,103,97,105,110,0);
          let statsnomoredatay = 2.0;
         embeds[`${homeplayerr}`] = parseInt(`${homeplayerr}`) << (Math.min(Math.abs(2), 5));
         awayteamfieldr += `${(awayteamfieldr == String.fromCharCode(52,0) ? awayteamfieldr.length : parseInt(`${statsnomoredatay}`))}`;
         statsnomoredatay /= Math.max(parseInt(`${statsnomoredatay}`) | awayteamfieldr.length, 2);
          let hongkongq = String.fromCharCode(112,114,105,110,99,105,112,97,108,95,104,95,49,48,48,0);
          let ballz = 2.0;
         homeplayerr -= parseFloat(`${favoriteg.length - 2}`);
         hongkongq += `${3 | parseInt(`${ballz}`)}`;
         ballz *= parseFloat(`${parseInt(`${ballz}`)}`);
      do {
         controls2 = new Map([[whatsappE, favoriteg.length]]);
         if (controls2.size == 4859615) {
            break;
         }
      } while ((controls2.size == 4859615) && (4 > favoriteg.length));
         controls2[`${homeplayerr}`] = embeds.size;
      iconnotificationnewG %= Math.max(4, 2 >> (Math.min(2, Math.abs(embeds.size))));
   do {
       let shrinkd = false;
       let placementK = String.fromCharCode(115,111,97,108,108,111,99,95,119,95,53,54,0);
       let minimizeE = 3.0;
       let basketballiconS = String.fromCharCode(106,95,54,57,95,114,103,98,97,121,99,111,99,103,0);
      for (let a = 0; a < 1; a++) {
         basketballiconS += `${3 - basketballiconS.length}`;
      }
      while (basketballiconS.length <= placementK.length) {
         placementK += `${1 + parseInt(`${minimizeE}`)}`;
         break;
      }
      if ((placementK.length + parseInt(`${minimizeE}`)) < 4 || (placementK.length + parseInt(`${minimizeE}`)) < 4) {
         minimizeE -= (parseFloat(`${(shrinkd ? 1 : 4) >> (Math.min(Math.abs(3), 3))}`));
      }
          let libavutilw = [391, 566];
          let turndownB = 5.0;
         basketballiconS += "1";
         libavutilw.push(libavutilw.length | 1);
         turndownB += parseInt(`${turndownB}`) << (Math.min(4, Math.abs(1)));
       let description_3a = String.fromCharCode(112,95,48,95,116,104,101,105,114,0);
       let imagenetworkerrP = String.fromCharCode(105,115,110,111,110,122,101,114,111,95,56,95,51,52,0);
      while (placementK.length == 2) {
         placementK += "1";
         break;
      }
       let kuaishout = false;
       let loadingG = true;
          let flipperv = 2.0;
          let bgvipsportM = String.fromCharCode(120,95,57,95,115,109,111,111,116,104,101,110,0);
          let internetL = 3;
         basketballiconS = `${description_3a.length}`;
         flipperv /= Math.max((bgvipsportM == String.fromCharCode(117,0) ? bgvipsportM.length : parseInt(`${flipperv}`)), 2);
         internetL <<= Math.min(Math.abs(parseInt(`${flipperv}`) << (Math.min(4, Math.abs(internetL)))), 1);
      do {
         description_3a += `${2 - parseInt(`${minimizeE}`)}`;
         if (description_3a == String.fromCharCode(98,102,97,49,108,53,108,0)) {
            break;
         }
      } while ((!description_3a.endsWith(imagenetworkerrP)) && (description_3a == String.fromCharCode(98,102,97,49,108,53,108,0)));
         loadingG = minimizeE >= parseFloat(`${basketballiconS.length}`);
          let greenB = 2.0;
          let chart0 = String.fromCharCode(97,95,51,50,95,99,111,110,100,0);
         minimizeE *= parseFloat(`${placementK.length + 3}`);
         greenB -= parseInt(`${greenB}`);
         chart0 = "1";
          let logoutb = String.fromCharCode(111,95,53,56,95,109,97,114,103,105,110,0);
          let reactnavigationc = String.fromCharCode(104,95,53,54,95,99,110,97,109,101,0);
         minimizeE += parseFloat(`${1 * reactnavigationc.length}`);
         logoutb += `${logoutb.length}`;
         reactnavigationc = "3";
      rewardvideoc += (parseFloat(`${placementK.length - (shrinkd ? 1 : 5)}`));
      if (4264144.0 == rewardvideoc) {
         break;
      }
   } while ((4264144.0 == rewardvideoc) && ((5.73 - rewardvideoc) >= 4.13 || 1.55 >= (libfabricjnip - 5.73)));
   if ((gpayn.length * parseInt(`${shoota}`)) <= 5 || (gpayn.length * parseInt(`${shoota}`)) <= 5) {
      shoota /= Math.max(3, ((subinC ? 4 : 5) | parseInt(`${libfabricjnip}`)));
   }
   do {
      iconnotificationnewG /= Math.max(parseInt(`${libfabricjnip}`), 2);
      if (iconnotificationnewG == 1521976) {
         break;
      }
   } while ((2 == (3 + iconnotificationnewG) || 2 == (iconnotificationnewG % 3)) && (iconnotificationnewG == 1521976));
   if (3.82 > (iconnotificationnewG * libfabricjnip)) {
      libfabricjnip /= Math.max(parseFloat(`${parseInt(`${shoota}`)}`), 5);
   }

    clearInterval(interval);
   if (libjsinspectorG > 1) {
      gpayn.push(libjsinspectorG);
   }
      rewardvideoc *= parseFloat(`${tempnodatagifa.size}`);
   do {
      tempnodatagifa = new Map([[`${libfabricjnip}`, libjsinspectorG]]);
      if (tempnodatagifa.size == 617321) {
         break;
      }
   } while ((2.94 > (libfabricjnip - 1.38) && (libfabricjnip - 1.38) > 2.53) && (tempnodatagifa.size == 617321));
   for (let u = 0; u < 1; u++) {
      subinC = libjsinspectorG >= 100;
   }
   if ((gpayn.length ^ 1) <= 1) {
       let register_tx = String.fromCharCode(101,118,101,114,95,105,95,53,48,0);
       let mapping1 = String.fromCharCode(99,111,110,116,114,97,115,116,95,113,95,50,50,0);
       let yellowcirclebgi = 2.0;
       let embedd = String.fromCharCode(99,111,108,108,95,48,95,53,53,0);
      if (mapping1.length <= 1) {
         mapping1 += `${(register_tx == String.fromCharCode(79,0) ? register_tx.length : parseInt(`${yellowcirclebgi}`))}`;
      }
      while ((1 >> (Math.min(3, register_tx.length))) == 5 || 2 == (1 | register_tx.length)) {
          let commente = [637, 143];
          let modityn = [String.fromCharCode(101,97,103,101,114,95,54,95,49,56,0), String.fromCharCode(110,111,110,100,99,95,120,95,55,57,0), String.fromCharCode(107,95,55,52,95,114,101,99,97,108,99,117,108,97,116,101,0)];
         register_tx += `${parseInt(`${yellowcirclebgi}`) % (Math.max(embedd.length, 5))}`;
         commente.push(commente.length);
         modityn = [2 & modityn.length];
         break;
      }
      for (let i = 0; i < 3; i++) {
         mapping1 += `${register_tx.length}`;
      }
         yellowcirclebgi += parseFloat(`${parseInt(`${yellowcirclebgi}`)}`);
         embedd = `${embedd.length - parseInt(`${yellowcirclebgi}`)}`;
      while (register_tx != embedd) {
         embedd = "2";
         break;
      }
       let latnj = String.fromCharCode(103,117,101,115,115,95,52,95,54,55,0);
       let reactnavigationJ = String.fromCharCode(112,101,114,115,105,115,116,95,112,95,49,56,0);
         latnj = "1";
         mapping1 = `${reactnavigationJ.length | latnj.length}`;
      do {
         yellowcirclebgi /= Math.max(parseFloat(`${2 / (Math.max(9, latnj.length))}`), 5);
         if (yellowcirclebgi == 4476833.0) {
            break;
         }
      } while ((3.61 >= (yellowcirclebgi / 4.44)) && (yellowcirclebgi == 4476833.0));
      do {
         embedd += `${reactnavigationJ.length}`;
         if (embedd == String.fromCharCode(122,121,48,100,0)) {
            break;
         }
      } while ((mapping1 != embedd) && (embedd == String.fromCharCode(122,121,48,100,0)));
          let blacka = String.fromCharCode(103,95,49,52,95,100,120,118,97,0);
          let componentregistryS = [String.fromCharCode(101,95,54,51,95,115,107,105,112,115,0), String.fromCharCode(105,108,108,117,109,105,110,97,116,105,111,110,95,108,95,55,50,0), String.fromCharCode(102,105,114,115,116,95,112,95,53,55,0)];
         mapping1 = `${mapping1.length}`;
         blacka = `${3 & blacka.length}`;
         componentregistryS = [3 >> (Math.min(5, componentregistryS.length))];
      rewardvideoc += parseFloat(`${parseInt(`${yellowcirclebgi}`) % 1}`);
   }

    

   if ((shoota / 5.25) > 5.82) {
      shoota /= Math.max(4, parseInt(`${matchdetailbgX}`) + 3);
   }
      rewardvideoc /= Math.max((parseFloat(`${(subinC ? 5 : 2) / (Math.max(parseInt(`${matchdetailbgX}`), 5))}`)), 4);
      libjsinspectorG /= Math.max(1 + iconnotificationnewG, 5);
   if (libfabricjnip < 2.72) {
      tempnodatagifa[`${subinC}`] = parseInt(`${libfabricjnip}`) * 3;
   }
       let actionsF = new Map([[String.fromCharCode(100,95,55,55,95,112,114,101,97,109,98,117,108,97,0),347], [String.fromCharCode(112,95,53,51,95,109,111,100,117,108,101,109,97,112,0),930]]);
      if (actionsF[`${actionsF.size}`] != null) {
         actionsF[`${actionsF.size}`] = 1 + actionsF.size;
      }
      for (let j = 0; j < 3; j++) {
         actionsF = new Map([[`${actionsF.size}`, actionsF.size ^ actionsF.size]]);
      }
       let shirts = new Map([[String.fromCharCode(103,101,110,101,114,97,108,95,106,95,51,48,0),String.fromCharCode(99,95,54,95,109,97,110,97,103,101,97,98,108,101,0)], [String.fromCharCode(98,95,51,57,95,98,105,116,114,118,99,111,110,106,0),String.fromCharCode(101,95,51,57,95,99,111,115,0)], [String.fromCharCode(106,95,50,95,100,101,99,114,101,97,115,101,0),String.fromCharCode(97,110,115,119,101,114,115,95,101,95,54,52,0)]]);
      libfabricjnip *= parseFloat(`${tempnodatagifa.size}`);
    navigation.popToTop();
   for (let q = 0; q < 1; q++) {
       let containerW = new Map([[String.fromCharCode(112,95,57,54,95,101,109,97,105,108,0),String.fromCharCode(114,95,52,57,95,99,102,116,102,115,117,98,0)], [String.fromCharCode(103,95,54,49,95,102,117,110,110,121,0),String.fromCharCode(122,95,52,51,95,97,108,97,99,0)], [String.fromCharCode(97,102,102,101,99,116,95,111,95,50,57,0),String.fromCharCode(97,108,108,111,99,97,116,105,111,110,95,102,95,50,54,0)]]);
      for (let f = 0; f < 1; f++) {
         containerW[`${containerW.size}`] = containerW.size >> (Math.min(Math.abs(containerW.size), 3));
      }
      if (3 <= (containerW.size / (Math.max(containerW.size, 9))) || 3 <= (3 / (Math.max(8, containerW.size)))) {
         containerW[`${containerW.size}`] = containerW.size;
      }
      for (let j = 0; j < 3; j++) {
         containerW[`${containerW.size}`] = containerW.size ^ containerW.size;
      }
      libfabricjnip *= parseFloat(`${tempnodatagifa.size + libjsinspectorG}`);
   }
   do {
      iconnotificationnewG /= Math.max(parseInt(`${libfabricjnip}`), 3);
      if (3180159 == iconnotificationnewG) {
         break;
      }
   } while (((gpayn.length + iconnotificationnewG) >= 5 || (iconnotificationnewG + 5) >= 4) && (3180159 == iconnotificationnewG));
   do {
      iconnotificationnewG <<= Math.min(4, Math.abs(parseInt(`${libfabricjnip}`) & 1));
      if (iconnotificationnewG == 888611) {
         break;
      }
   } while ((iconnotificationnewG == 888611) && (!Array.from(tempnodatagifa.keys()).includes(`${iconnotificationnewG}`)));
      libjsinspectorG &= parseInt(`${libfabricjnip}`);
       let modelsg = [492, 644];
       let sentryV = true;
       let style3 = true;
      do {
         modelsg.push(((style3 ? 2 : 1)));
         if (modelsg.length == 4188352) {
            break;
         }
      } while ((!sentryV) && (modelsg.length == 4188352));
      do {
          let component8 = [204, 662, 998];
          let selectR = new Map([[String.fromCharCode(101,122,111,115,95,101,95,56,49,0),302], [String.fromCharCode(110,95,56,52,95,105,111,118,101,99,105,110,0),762]]);
         sentryV = !style3;
         component8.push(component8.length);
         selectR = new Map([[`${selectR.size}`, component8.length + 3]]);
         if (sentryV ? !sentryV : sentryV) {
            break;
         }
      } while ((sentryV) && (sentryV ? !sentryV : sentryV));
      gpayn = [modelsg.length + 2];

    navigation.navigate('All');
      subinC = 72 < gpayn.length || rewardvideoc < 28.50;
      rewardvideoc += parseFloat(`${parseInt(`${libfabricjnip}`)}`);
   for (let z = 0; z < 1; z++) {
      libjsinspectorG &= parseInt(`${matchdetailbgX}`);
   }
       let cornerkick1 = String.fromCharCode(116,95,55,57,95,112,101,114,109,105,115,115,105,111,110,115,0);
          let rewardvideof = 0.0;
          let weatherz = new Map([[String.fromCharCode(105,100,99,116,95,121,95,49,54,0),422], [String.fromCharCode(116,95,56,55,95,116,105,109,101,102,105,108,116,101,114,0),388]]);
         cornerkick1 += `${cornerkick1.length % 1}`;
         rewardvideof += parseFloat(`${weatherz.size}`);
         weatherz[`${rewardvideof}`] = 1;
         cornerkick1 += `${cornerkick1.length}`;
         cornerkick1 = `${cornerkick1.length}`;
      rewardvideoc *= parseFloat(`${parseInt(`${libfabricjnip}`) % (Math.max(parseInt(`${matchdetailbgX}`), 5))}`);
   if (tempnodatagifa[`${libfabricjnip}`] == null) {
      libfabricjnip /= Math.max(3, parseFloat(`${gpayn.length}`));
   }

  };
  

  const changeFullscreen = () => {
       let imagenetworkerrA = new Map([[String.fromCharCode(116,95,55,52,95,109,111,118,101,0),705], [String.fromCharCode(116,120,116,111,98,106,95,57,95,49,55,0),306], [String.fromCharCode(100,95,57,49,95,99,111,111,107,100,97,116,97,0),595]]);
    let infoc = 0.0;
    let smallorangemanp = String.fromCharCode(116,95,57,50,95,112,97,114,97,109,99,104,97,110,103,101,0);
    let otherW = String.fromCharCode(98,95,54,52,95,99,116,120,112,0);
    let statisticsinactivet = String.fromCharCode(102,114,97,109,101,104,97,115,104,95,100,95,51,55,0);
    let searchf = String.fromCharCode(111,109,112,111,115,101,95,117,95,57,55,0);
    let gifgoalbgo = new Map([[String.fromCharCode(100,101,105,110,116,101,114,108,97,99,101,95,106,95,51,0),String.fromCharCode(105,95,52,57,95,101,120,116,114,97,0)], [String.fromCharCode(114,101,97,100,113,95,55,95,56,52,0),String.fromCharCode(117,95,51,53,95,102,105,110,97,108,108,121,0)], [String.fromCharCode(114,115,104,105,102,116,95,57,95,52,50,0),String.fromCharCode(107,95,49,48,48,95,99,114,108,105,115,115,117,101,114,0)]]);
    let sinax = String.fromCharCode(101,108,101,109,95,52,95,53,48,0);
    let selectedB = 0.0;
    let hometeamfieldt = String.fromCharCode(116,95,55,52,0);
    let iconpointscoreX = [12, 186, 461];
    let defaultteamu = true;
    let transferC = 4.0;
    let carouselg = true;
    let grayw = new Map([[String.fromCharCode(108,95,49,54,95,114,101,115,116,114,97,105,110,0),168], [String.fromCharCode(111,95,55,54,95,115,111,105,115,99,111,110,110,101,99,116,105,110,103,0),463]]);
    let spinner4 = String.fromCharCode(113,95,54,50,95,112,116,105,111,110,115,0);
    let checkboxL = 1.0;
    let settingr = String.fromCharCode(107,108,97,115,115,95,55,95,51,50,0);
       let iconorientation9 = true;
          let armvan = String.fromCharCode(114,97,109,112,117,112,95,119,95,50,57,0);
         iconorientation9 = armvan.length < 48 || iconorientation9;
         iconorientation9 = !iconorientation9 && iconorientation9;
      if (!iconorientation9) {
         iconorientation9 = !iconorientation9;
      }
      searchf = `${otherW.length}`;
   if (!defaultteamu) {
       let penaltyshootnogoalx = 0;
       let stylest = 1.0;
       let halffieldimage7 = String.fromCharCode(107,95,49,49,0);
         stylest += (String.fromCharCode(78,0) == halffieldimage7 ? parseInt(`${stylest}`) : halffieldimage7.length);
         stylest /= Math.max(halffieldimage7.length, 4);
      while (2 < penaltyshootnogoalx) {
          let greyarrowupK = [998, 615];
          let yellowcirclebgC = 1.0;
          let calendarR = 4.0;
          let sansL = new Map([[String.fromCharCode(117,115,101,100,95,104,95,52,57,0),149], [String.fromCharCode(112,117,116,99,95,116,95,57,0),440], [String.fromCharCode(98,115,111,108,117,116,101,95,100,95,54,54,0),236]]);
          let logouserj = false;
         halffieldimage7 = `${2 - parseInt(`${stylest}`)}`;
         greyarrowupK = [2 ^ sansL.size];
         yellowcirclebgC /= Math.max(1, 3);
         calendarR *= (parseFloat(`${greyarrowupK.length - (logouserj ? 4 : 3)}`));
         sansL = new Map([[`${greyarrowupK.length}`, 3]]);
         logouserj = greyarrowupK.length == 35;
         break;
      }
         halffieldimage7 = `${penaltyshootnogoalx & halffieldimage7.length}`;
         stylest /= Math.max(5, halffieldimage7.length);
      while ((penaltyshootnogoalx + stylest) >= 2.87) {
         stylest /= Math.max(parseInt(`${stylest}`) >> (Math.min(halffieldimage7.length, 2)), 4);
         break;
      }
      for (let d = 0; d < 3; d++) {
         stylest -= halffieldimage7.length >> (Math.min(Math.abs(2), 4));
      }
      while (!halffieldimage7.endsWith(`${penaltyshootnogoalx}`)) {
         halffieldimage7 += "2";
         break;
      }
         halffieldimage7 += `${parseInt(`${stylest}`) / (Math.max(halffieldimage7.length, 1))}`;
      defaultteamu = (selectedB + infoc) >= 4.16;
   }
   do {
       let dangerH = 4;
       let classesF = [678, 580, 533];
      do {
         classesF.push(dangerH % 3);
         if (classesF.length == 4291827) {
            break;
         }
      } while (((dangerH >> (Math.min(classesF.length, 1))) < 4 || (4 >> (Math.min(5, classesF.length))) < 5) && (classesF.length == 4291827));
          let minivodb = String.fromCharCode(102,95,57,52,95,98,97,115,101,117,114,108,0);
         dangerH <<= Math.min(Math.abs(minivodb.length * 2), 1);
      for (let h = 0; h < 3; h++) {
         dangerH |= dangerH;
      }
      for (let n = 0; n < 2; n++) {
          let c_centerk = 1.0;
          let bgvipxvodL = String.fromCharCode(104,95,53,55,95,104,111,116,105,122,111,110,116,108,0);
         dangerH -= bgvipxvodL.length & 2;
         c_centerk *= parseFloat(`${parseInt(`${c_centerk}`) | parseInt(`${c_centerk}`)}`);
         bgvipxvodL = "1";
      }
      for (let r = 0; r < 3; r++) {
          let elementsl = 5.0;
         classesF.push(dangerH | 2);
         elementsl *= parseFloat(`${parseInt(`${elementsl}`)}`);
      }
      while (1 == (3 ^ dangerH) && (classesF.length ^ dangerH) == 3) {
         dangerH *= dangerH;
         break;
      }
      imagenetworkerrA = new Map([[hometeamfieldt, hometeamfieldt.length * dangerH]]);
      if (imagenetworkerrA.size == 2458285) {
         break;
      }
   } while ((5 == (imagenetworkerrA.size << (Math.min(Math.abs(4), 4)))) && (imagenetworkerrA.size == 2458285));
   while (!defaultteamu) {
      defaultteamu = !defaultteamu || iconpointscoreX.length < 66;
      break;
   }
   for (let u = 0; u < 3; u++) {
      searchf = `${smallorangemanp.length % 2}`;
   }
   while (imagenetworkerrA.size <= 3) {
      imagenetworkerrA[searchf] = 2;
      break;
   }
   do {
      statisticsinactivet += `${((defaultteamu ? 2 : 4) / (Math.max(3, parseInt(`${transferC}`))))}`;
      if (4634928 == statisticsinactivet.length) {
         break;
      }
   } while ((4634928 == statisticsinactivet.length) && (!statisticsinactivet.includes(`${infoc}`)));
   if (sinax == otherW) {
      otherW += `${(sinax == String.fromCharCode(83,0) ? sinax.length : smallorangemanp.length)}`;
   }
   if (5 == iconpointscoreX.length || 5 == (5 & iconpointscoreX.length)) {
       let halffieldimagel = String.fromCharCode(98,101,122,101,108,95,50,95,53,55,0);
       let paginationY = 1.0;
       let libswscaleQ = String.fromCharCode(98,101,103,105,110,115,95,98,95,51,57,0);
       let codegen1 = new Map([[String.fromCharCode(110,101,119,101,114,95,116,95,52,52,0),10], [String.fromCharCode(105,95,57,54,95,112,111,116,105,115,105,111,110,0),836]]);
         codegen1[`${paginationY}`] = parseInt(`${paginationY}`) & 2;
      if (codegen1.size == 1) {
          let containery = 0.0;
          let libimagepipelineW = String.fromCharCode(116,111,109,99,114,121,112,116,95,52,95,52,54,0);
          let shoot6 = 1.0;
          let emojiheartJ = String.fromCharCode(105,110,116,101,114,112,111,108,97,116,97,98,108,101,95,122,95,57,50,0);
         codegen1[`${containery}`] = parseInt(`${containery}`) / (Math.max(emojiheartJ.length, 10));
         libimagepipelineW = `${(libimagepipelineW == String.fromCharCode(76,0) ? libimagepipelineW.length : parseInt(`${shoot6}`))}`;
         shoot6 *= parseFloat(`${libimagepipelineW.length}`);
         emojiheartJ = `${parseInt(`${shoot6}`) | libimagepipelineW.length}`;
      }
         paginationY /= Math.max(parseInt(`${paginationY}`) / (Math.max(halffieldimagel.length, 5)), 3);
       let faviconv = 1.0;
       let mutedM = 4.0;
       let phoneshareT = 2.0;
       let cornerkicka = 3.0;
          let iconnewsshareA = false;
         codegen1 = new Map([[`${iconnewsshareA}`, ((iconnewsshareA ? 4 : 3) + parseInt(`${paginationY}`))]]);
         mutedM /= Math.max(3, parseInt(`${mutedM}`));
          let trashO = 1.0;
          let iconviewergifI = false;
         paginationY += 1 >> (Math.min(4, Math.abs(codegen1.size)));
         trashO -= 2 * parseInt(`${trashO}`);
         iconviewergifI = 91.77 <= trashO;
       let windc = 5.0;
       let annerX = 5.0;
       let awayicons = 1.0;
      do {
         windc -= 1;
         if (windc == 873218.0) {
            break;
         }
      } while (((mutedM / (Math.max(windc, 7))) >= 5.32 && (mutedM / 5.32) >= 1.3) && (windc == 873218.0));
          let layout7 = String.fromCharCode(103,111,100,101,112,115,95,113,95,49,52,0);
          let dycreator7 = String.fromCharCode(117,95,49,49,95,116,97,103,115,116,114,0);
         awayicons /= Math.max(parseFloat(`${halffieldimagel.length}`), 5);
         layout7 = `${(layout7 == String.fromCharCode(69,0) ? layout7.length : dycreator7.length)}`;
         dycreator7 += `${dycreator7.length}`;
      carouselg = smallorangemanp.includes(`${infoc}`);
   }
   do {
      otherW = `${(searchf == String.fromCharCode(104,0) ? searchf.length : imagenetworkerrA.size)}`;
      if (String.fromCharCode(107,103,50,55,115,0) == otherW) {
         break;
      }
   } while ((defaultteamu) && (String.fromCharCode(107,103,50,55,115,0) == otherW));
      statisticsinactivet += `${sinax.length | iconpointscoreX.length}`;
       let iconarrowrightwhiteg = 4.0;
       let encryptA = String.fromCharCode(99,108,105,112,112,105,110,103,110,111,100,101,95,114,95,50,53,0);
       let phoneshareg = String.fromCharCode(116,95,53,52,95,100,101,108,105,109,105,116,101,114,0);
          let predictionwinS = 3;
         phoneshareg = `${phoneshareg.length}`;
         predictionwinS += predictionwinS;
         encryptA += `${encryptA.length - parseInt(`${iconarrowrightwhiteg}`)}`;
      otherW = "1";
   for (let u = 0; u < 2; u++) {
      smallorangemanp = `${parseInt(`${selectedB}`)}`;
   }

    setFullScreen(!fullScreen);
      iconpointscoreX.push(grayw.size);
      hometeamfieldt = `${(smallorangemanp.length * (defaultteamu ? 1 : 5))}`;
      searchf += `${grayw.size}`;
   while (iconpointscoreX.length < 5) {
      transferC /= Math.max(hometeamfieldt.length, 4);
      break;
   }
      imagenetworkerrA[`${defaultteamu}`] = 3;
   for (let x = 0; x < 2; x++) {
      sinax += `${statisticsinactivet.length >> (Math.min(Math.abs(2), 2))}`;
   }
   if (gifgoalbgo[`${grayw.size}`] != null) {
       let qaagK = String.fromCharCode(97,117,116,104,111,114,95,104,95,52,51,0);
       let executorK = String.fromCharCode(102,117,122,122,101,114,95,52,95,49,52,0);
       let notificationq = String.fromCharCode(102,101,101,95,50,95,55,48,0);
       let with_5h = String.fromCharCode(98,95,49,53,95,121,95,53,55,0);
       let chinao = 4.0;
          let form9 = String.fromCharCode(110,95,55,56,95,99,97,114,100,97,110,111,0);
          let backiconl = String.fromCharCode(119,105,112,101,95,53,95,49,53,0);
          let libglogi = 4;
         with_5h += `${(String.fromCharCode(99,0) == with_5h ? form9.length : with_5h.length)}`;
         form9 = `${backiconl.length}`;
         backiconl = "1";
         libglogi ^= libglogi / 2;
      do {
         executorK = `${with_5h.length}`;
         if (3254863 == executorK.length) {
            break;
         }
      } while ((!executorK.endsWith(`${qaagK.length}`)) && (3254863 == executorK.length));
         with_5h = `${qaagK.length}`;
      do {
         executorK = `${(String.fromCharCode(55,0) == with_5h ? with_5h.length : parseInt(`${chinao}`))}`;
         if (executorK == String.fromCharCode(117,117,54,102,0)) {
            break;
         }
      } while ((qaagK.length > 4) && (executorK == String.fromCharCode(117,117,54,102,0)));
         qaagK += "1";
          let found6 = String.fromCharCode(104,95,57,51,95,99,114,108,100,112,0);
          let eabafadfadddbafeddddeeefeaafE = false;
          let redscoreballG = [473, 754, 365];
         notificationq = `${(found6 == String.fromCharCode(75,0) ? found6.length : (eabafadfadddbafeddddeeefeaafE ? 4 : 2))}`;
         eabafadfadddbafeddddeeefeaafE = redscoreballG.includes(redscoreballG[redscoreballG - 1]);
         qaagK = `${notificationq.length}`;
      for (let a = 0; a < 2; a++) {
         notificationq += `${parseInt(`${chinao}`) / (Math.max(notificationq.length, 2))}`;
      }
          let baidu_ = 5.0;
         notificationq += `${notificationq.length}`;
         baidu_ *= 3;
       let cricketC = new Map([[String.fromCharCode(103,95,51,95,102,117,108,108,121,0),587], [String.fromCharCode(98,105,116,112,97,99,107,101,100,95,119,95,53,0),262]]);
      if (notificationq != String.fromCharCode(69,0)) {
         with_5h += "2";
      }
         notificationq = `${parseInt(`${chinao}`)}`;
      if ((4 | notificationq.length) >= 3 && (parseFloat(`${notificationq.length}`) / (Math.max(5, chinao))) >= 3.96) {
          let collectionJ = String.fromCharCode(97,99,99,95,108,95,53,0);
          let iconnewsshareY = 3;
         notificationq += `${parseInt(`${chinao}`) & 2}`;
         collectionJ += `${collectionJ.length}`;
         iconnewsshareY -= 1;
      }
      if ((cricketC.size & qaagK.length) < 5 && 1 < (5 & cricketC.size)) {
         qaagK += `${with_5h.length / 3}`;
      }
      while (4 >= (2 / (Math.max(6, with_5h.length)))) {
         cricketC = new Map([[with_5h, 3 % (Math.max(8, with_5h.length))]]);
         break;
      }
      gifgoalbgo[`${defaultteamu}`] = 2;
   }
       let defaultprofilepic8 = [452, 582, 105];
       let stringf = new Map([[String.fromCharCode(97,95,54,50,95,103,108,111,98,0),String.fromCharCode(101,108,97,115,116,105,99,95,106,95,51,54,0)], [String.fromCharCode(117,95,56,57,95,110,97,118,105,103,97,116,101,100,0),String.fromCharCode(104,95,53,57,95,102,111,114,0)], [String.fromCharCode(103,105,116,104,117,98,95,108,95,50,53,0),String.fromCharCode(105,110,100,101,102,105,110,105,116,101,95,120,95,55,56,0)]]);
       let traminiM = 0;
      do {
         stringf = new Map([[`${defaultprofilepic8.length}`, defaultprofilepic8.length]]);
         if (3532842 == stringf.size) {
            break;
         }
      } while ((!Array.from(stringf.keys()).includes(`${defaultprofilepic8.length}`)) && (3532842 == stringf.size));
       let playg = String.fromCharCode(105,95,55,50,95,101,114,118,101,114,0);
          let predictionbanner8 = String.fromCharCode(105,95,57,51,95,115,104,97,114,112,101,110,105,110,103,0);
          let configE = 5;
         stringf = new Map([[predictionbanner8, predictionbanner8.length & traminiM]]);
         configE &= configE;
      for (let m = 0; m < 2; m++) {
         stringf[`${traminiM}`] = 1 - stringf.size;
      }
         traminiM &= 1 % (Math.max(9, traminiM));
      if ((3 - traminiM) > 3 || 5 > (3 - traminiM)) {
          let libswscaleY = 0.0;
          let eactR = 4.0;
          let tempb = String.fromCharCode(105,110,118,97,108,105,100,97,116,101,100,95,109,95,49,52,0);
         traminiM ^= defaultprofilepic8.length;
         libswscaleY += parseFloat(`${parseInt(`${eactR}`) * tempb.length}`);
         eactR -= parseFloat(`${2}`);
         tempb = `${1 ^ parseInt(`${libswscaleY}`)}`;
      }
      do {
         defaultprofilepic8.push(stringf.size);
         if (4352942 == defaultprofilepic8.length) {
            break;
         }
      } while ((4352942 == defaultprofilepic8.length) && (2 <= defaultprofilepic8.length));
      do {
         playg = `${playg.length & 2}`;
         if (playg.length == 4418537) {
            break;
         }
      } while ((!playg.includes(`${traminiM}`)) && (playg.length == 4418537));
      do {
          let connections = String.fromCharCode(115,105,109,105,108,97,114,95,100,95,53,54,0);
          let china7 = 0.0;
         playg = `${playg.length - connections.length}`;
         connections += `${3 % (Math.max(10, parseInt(`${china7}`)))}`;
         china7 -= parseInt(`${china7}`);
         if (playg.length == 3528105) {
            break;
         }
      } while ((playg.length == 3528105) && (1 == (playg.length >> (Math.min(Math.abs(3), 5))) || (playg.length >> (Math.min(3, defaultprofilepic8.length))) == 3));
      sinax += `${grayw.size}`;
   do {
      grayw[`${smallorangemanp}`] = 3;
      if (grayw.size == 452985) {
         break;
      }
   } while ((4 >= (grayw.size << (Math.min(searchf.length, 5))) && 5 >= (searchf.length << (Math.min(Math.abs(4), 1)))) && (grayw.size == 452985));
   for (let c = 0; c < 1; c++) {
       let tnewarchdefaultsG = 4.0;
       let interneti = String.fromCharCode(119,109,118,100,97,116,97,95,106,95,50,0);
       let favoriteq = 1.0;
       let thumbnailD = new Map([[String.fromCharCode(106,95,52,56,95,105,100,102,118,0),45], [String.fromCharCode(110,95,53,51,95,101,114,114,109,115,103,0),888]]);
       let description_guk = String.fromCharCode(119,101,101,107,100,97,121,115,95,52,95,52,49,0);
      while (description_guk.length < 1) {
          let iconwatch2 = 3.0;
          let philippiness = 1.0;
          let libavdevice9 = String.fromCharCode(98,108,111,99,107,105,110,103,95,107,95,49,50,0);
         favoriteq *= 2 + libavdevice9.length;
         iconwatch2 -= parseFloat(`${parseInt(`${philippiness}`)}`);
         philippiness -= parseInt(`${philippiness}`) * 2;
         libavdevice9 += `${3 & parseInt(`${philippiness}`)}`;
         break;
      }
       let foundT = true;
          let skipr = [21, 821, 274];
          let airbnbstara = String.fromCharCode(109,95,57,53,95,108,111,99,97,116,105,111,110,0);
          let userW = String.fromCharCode(122,95,54,48,95,110,111,98,111,100,121,0);
         thumbnailD[description_guk] = airbnbstara.length % (Math.max(10, description_guk.length));
         skipr.push(userW.length - 3);
         airbnbstara = `${skipr.length}`;
         userW += `${userW.length | 2}`;
         description_guk += `${((foundT ? 2 : 3) / (Math.max(parseInt(`${tnewarchdefaultsG}`), 9)))}`;
         description_guk = `${2 << (Math.min(1, Math.abs(parseInt(`${favoriteq}`))))}`;
         foundT = 52 > thumbnailD.size;
      do {
         foundT = favoriteq >= 98.15;
         if (foundT ? !foundT : foundT) {
            break;
         }
      } while ((foundT) && (foundT ? !foundT : foundT));
      do {
          let plashd = true;
          let iconadslinkH = 0.0;
          let assistE = 4.0;
         tnewarchdefaultsG *= parseFloat(`${parseInt(`${iconadslinkH}`) * 3}`);
         plashd = !plashd;
         iconadslinkH -= ((plashd ? 4 : 5) & parseInt(`${assistE}`));
         assistE -= parseFloat(`${parseInt(`${assistE}`) - 3}`);
         if (2339308.0 == tnewarchdefaultsG) {
            break;
         }
      } while ((3 < (description_guk.length << (Math.min(Math.abs(3), 5))) && 2.62 < (parseFloat(`${description_guk.length}`) + tnewarchdefaultsG)) && (2339308.0 == tnewarchdefaultsG));
         foundT = !foundT;
         tnewarchdefaultsG /= Math.max(1, parseFloat(`${3 ^ thumbnailD.size}`));
       let matchdetailbg_ = 2;
       let e_viewP = 0;
      while ((description_guk.length / 1) < 4 && 2 < (1 - description_guk.length)) {
         description_guk += `${description_guk.length}`;
         break;
      }
         foundT = description_guk.includes(`${matchdetailbg_}`);
      if (thumbnailD.size >= 1) {
         thumbnailD = new Map([[description_guk, (String.fromCharCode(112,0) == interneti ? description_guk.length : interneti.length)]]);
      }
      for (let c = 0; c < 3; c++) {
          let rewardvideoy = String.fromCharCode(121,95,49,57,95,99,105,112,104,101,114,98,121,110,97,109,101,0);
          let applicationK = String.fromCharCode(97,110,97,110,100,97,110,95,104,95,56,56,0);
          let inouttargetredq = 1;
         favoriteq *= e_viewP;
         rewardvideoy = `${applicationK.length / (Math.max(rewardvideoy.length, 3))}`;
         applicationK = "1";
         inouttargetredq %= Math.max(rewardvideoy.length, 3);
      }
      grayw = new Map([[`${selectedB}`, parseInt(`${selectedB}`)]]);
   }
   for (let l = 0; l < 2; l++) {
      grayw = new Map([[sinax, (sinax.length / (Math.max(5, (defaultteamu ? 5 : 2))))]]);
   }
       let reactnativeultimatelistviewI = 0.0;
       let with_dq = 2.0;
      while (2.92 < (3 / (Math.max(5, with_dq)))) {
         reactnativeultimatelistviewI /= Math.max(parseFloat(`${parseInt(`${with_dq}`) % 3}`), 5);
         break;
      }
          let componentregistry3 = 5.0;
          let targeta = String.fromCharCode(112,111,111,108,114,101,102,95,122,95,49,53,0);
         with_dq /= Math.max(2, parseFloat(`${2 | parseInt(`${componentregistry3}`)}`));
         componentregistry3 -= targeta.length;
         targeta += `${3 << (Math.min(5, targeta.length))}`;
         reactnativeultimatelistviewI /= Math.max(2, parseFloat(`${parseInt(`${with_dq}`)}`));
      for (let i = 0; i < 2; i++) {
         reactnativeultimatelistviewI += parseFloat(`${3 | parseInt(`${with_dq}`)}`);
      }
      do {
         with_dq /= Math.max(3, parseFloat(`${1 & parseInt(`${reactnativeultimatelistviewI}`)}`));
         if (259012.0 == with_dq) {
            break;
         }
      } while ((reactnativeultimatelistviewI < 1.88) && (259012.0 == with_dq));
      while ((with_dq / 2.91) > 3.47 || (reactnativeultimatelistviewI * with_dq) > 2.91) {
          let shrink_ = String.fromCharCode(99,111,110,100,95,105,95,56,48,0);
          let userd = String.fromCharCode(109,105,115,99,95,111,95,55,56,0);
         with_dq *= parseFloat(`${parseInt(`${reactnativeultimatelistviewI}`)}`);
         shrink_ += `${shrink_.length / (Math.max(3, 6))}`;
         userd = `${userd.length}`;
         break;
      }
      hometeamfieldt = "1";
       let backk = [String.fromCharCode(114,116,99,115,116,97,116,115,95,99,95,50,53,0), String.fromCharCode(102,95,52,56,95,110,101,119,115,108,101,116,116,101,114,0)];
       let chatx = 0.0;
      do {
         chatx *= parseFloat(`${1}`);
         if (4275859.0 == chatx) {
            break;
         }
      } while ((chatx <= 1.54) && (4275859.0 == chatx));
       let arrowH = 3;
       let roota = 5;
      infoc *= parseFloat(`${2 | imagenetworkerrA.size}`);
      backk.push(backk.length);

    
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
