import React, {useEffect, useState, useMemo} from 'react';

import {View} from 'react-native';
import styles from './tt_with_success';
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
import ttBenefitRight from './action';
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
       let privilegeh = 3.0;
    let downloaderm = [421, 98, 197];
    let buttont = false;
    let currenth = [String.fromCharCode(121,95,55,53,95,121,109,111,100,101,0), String.fromCharCode(120,95,52,55,95,102,117,116,117,114,101,0), String.fromCharCode(119,95,54,50,95,112,114,105,111,0)];
    let gesturea = String.fromCharCode(99,101,108,102,95,100,95,54,56,0);
    let source5 = true;
    let roomO = 3;
    let diceF = [896, 400];
    let mored = 4;
    let bodan4 = 4.0;
    let crossY = String.fromCharCode(102,105,110,100,110,101,97,114,109,118,95,101,95,52,0);
    let appleq = new Map([[String.fromCharCode(120,95,51,51,0),true ], [String.fromCharCode(101,95,56,54,95,99,111,101,102,115,0),false ], [String.fromCharCode(112,114,101,101,109,112,116,105,118,101,95,52,95,53,55,0),false ]]);
   for (let d = 0; d < 2; d++) {
      buttont = currenth.length > 73;
   }

  console.log('route', props.route);
      currenth.push(2 / (Math.max(roomO, 5)));

  const navigation = useNavigation();
   if (privilegeh >= downloaderm.length) {
       let inactiver = 5.0;
       let thailandW = 3;
       let with_a3l = String.fromCharCode(117,95,54,51,95,117,110,107,110,111,119,110,115,0);
      while (with_a3l.includes(`${inactiver}`)) {
         inactiver /= Math.max(3, parseFloat(`${parseInt(`${inactiver}`)}`));
         break;
      }
         with_a3l += `${with_a3l.length}`;
      for (let v = 0; v < 1; v++) {
         thailandW -= with_a3l.length;
      }
      if (3 <= (1 - thailandW) || (1 - thailandW) <= 4) {
          let areaR = 1.0;
         thailandW >>= Math.min(4, Math.abs(parseInt(`${inactiver}`)));
         areaR += parseFloat(`${parseInt(`${areaR}`) / (Math.max(parseInt(`${areaR}`), 1))}`);
      }
         with_a3l += `${parseInt(`${inactiver}`)}`;
         with_a3l += `${with_a3l.length}`;
          let flyerI = String.fromCharCode(97,99,99,117,109,95,107,95,54,55,0);
          let toponc = 3;
         thailandW ^= thailandW & flyerI.length;
         flyerI += `${toponc | 1}`;
         toponc &= 2;
      do {
         inactiver += parseFloat(`${1}`);
         if (4153591.0 == inactiver) {
            break;
         }
      } while ((thailandW > 4) && (4153591.0 == inactiver));
      for (let g = 0; g < 3; g++) {
         with_a3l = "3";
      }
      downloaderm.push(diceF.length & roomO);
   }


  const onHandleBack = () => {

   for (let o = 0; o < 1; o++) {
      diceF.push(2);
   }
    navigation.goBack();
   do {
      gesturea += `${((buttont ? 2 : 4) / (Math.max(roomO, 6)))}`;
      if (4222566 == gesturea.length) {
         break;
      }
   } while ((4222566 == gesturea.length) && (gesturea.endsWith(`${source5}`)));

  };
   for (let j = 0; j < 2; j++) {
      buttont = currenth.length > 93;
   }

  const matchID = props?.route?.params?.matchId;
      downloaderm = [1 - parseInt(`${privilegeh}`)];

  const streamID = props?.route?.params?.streamerId;
       let previewu = true;
         previewu = !previewu;
      do {
         previewu = !previewu;
         if (previewu ? !previewu : previewu) {
            break;
         }
      } while ((previewu ? !previewu : previewu) && (!previewu));
       let sortx = new Map([[String.fromCharCode(97,112,112,101,97,114,97,110,99,101,95,105,95,54,53,0),6], [String.fromCharCode(107,95,56,57,0),512], [String.fromCharCode(121,95,56,55,95,104,97,110,100,108,101,115,0),814]]);
       let modelsm = new Map([[String.fromCharCode(119,95,50,49,95,115,98,111,120,0),85], [String.fromCharCode(99,97,115,116,115,95,57,95,54,57,0),679], [String.fromCharCode(97,99,107,100,114,111,112,95,108,95,52,54,0),491]]);
      diceF = [downloaderm.length >> (Math.min(4, Math.abs(mored)))];

  

   if (5.27 >= bodan4) {
      buttont = privilegeh <= 53.36;
   }
  const sheetRef = React.useRef();
      downloaderm = [mored];

  const [modalVisible, setModalVisible] = useState(false);
      gesturea = `${(gesturea == String.fromCharCode(49,0) ? (source5 ? 3 : 4) : gesturea.length)}`;

  const dispatch = useDispatch();
   for (let w = 0; w < 2; w++) {
      gesturea += "2";
   }

  const liveRoomAction = new ttBenefitRight(dispatch);
      source5 = downloaderm.length >= 16 || !source5;


  useEffect(() => {

   while (bodan4 >= parseFloat(`${crossY.length}`)) {
      bodan4 -= parseFloat(`${3 & roomO}`);
      break;
   }
    

   do {
       let results = new Map([[String.fromCharCode(105,95,50,54,95,115,116,97,116,117,115,0),629], [String.fromCharCode(115,95,51,55,95,100,105,109,115,0),324]]);
       let foreground3 = String.fromCharCode(121,95,56,56,95,97,105,109,100,0);
       let plus7 = String.fromCharCode(102,95,52,55,95,100,101,115,99,101,110,100,101,114,0);
       let minimizeV = false;
       let type_q4_ = 4;
      for (let a = 0; a < 1; a++) {
          let modalM = 0.0;
          let baiduJ = String.fromCharCode(98,115,119,97,112,100,115,112,95,98,95,51,52,0);
          let confirmationf = true;
          let accepted1 = 3;
          let reactd = 0.0;
         results = new Map([[`${confirmationf}`, foreground3.length]]);
         modalM *= baiduJ.length >> (Math.min(Math.abs(3), 4));
         baiduJ += `${(baiduJ == String.fromCharCode(84,0) ? parseInt(`${modalM}`) : baiduJ.length)}`;
         accepted1 >>= Math.min(Math.abs(parseInt(`${modalM}`)), 5);
         reactd /= Math.max(parseInt(`${modalM}`), 4);
      }
       let pressurer = String.fromCharCode(114,101,116,114,97,110,115,109,105,116,95,102,95,56,50,0);
       let benefitB = 4;
         foreground3 = `${(1 - (minimizeV ? 4 : 1))}`;
      do {
         pressurer += "2";
         if (pressurer == String.fromCharCode(110,103,114,111,56,112,102,0)) {
            break;
         }
      } while ((pressurer == String.fromCharCode(110,103,114,111,56,112,102,0)) && (plus7 != pressurer));
       let statsc = String.fromCharCode(105,110,105,116,105,97,108,105,122,105,110,103,95,112,95,57,56,0);
       let zhubom = 2;
       let agreement5 = 4;
          let diceS = new Map([[String.fromCharCode(108,105,109,105,116,101,100,95,107,95,52,57,0),String.fromCharCode(112,95,49,50,95,98,105,103,100,105,97,0)], [String.fromCharCode(105,110,118,95,113,95,52,55,0),String.fromCharCode(111,95,54,95,101,100,103,101,0)], [String.fromCharCode(98,95,56,48,95,112,114,105,118,97,116,101,0),String.fromCharCode(108,111,99,97,108,105,122,97,116,105,111,110,95,98,95,52,54,0)]]);
          let connectione = String.fromCharCode(118,95,54,53,95,109,98,117,102,115,0);
          let handleri = [String.fromCharCode(103,109,97,116,99,104,95,99,95,57,54,0), String.fromCharCode(111,112,116,105,111,110,97,108,115,95,106,95,56,50,0), String.fromCharCode(120,95,53,48,95,114,101,99,112,0)];
         minimizeV = (results.size % (Math.max(foreground3.length, 7))) < 12;
         diceS = new Map([[`${diceS.size}`, connectione.length ^ diceS.size]]);
         connectione = `${diceS.size % (Math.max(3, 6))}`;
         handleri = [handleri.length - 3];
         zhubom *= pressurer.length % 2;
          let downloadz = 1.0;
         agreement5 &= (String.fromCharCode(105,0) == pressurer ? parseInt(`${downloadz}`) : pressurer.length);
       let gray9 = String.fromCharCode(105,110,105,116,97,108,95,51,95,49,55,0);
       let mbsplash0 = String.fromCharCode(109,97,105,110,104,101,97,100,101,114,95,99,95,57,57,0);
      if (1 == (mbsplash0.length % (Math.max(8, agreement5))) && (mbsplash0.length % 1) == 3) {
          let targett = 3.0;
          let handlerg = 1;
          let favoritec = 2.0;
         mbsplash0 = `${results.size}`;
         targett *= parseFloat(`${handlerg}`);
         handlerg &= 2;
         favoritec *= parseInt(`${favoritec}`) & 3;
      }
         statsc += `${(String.fromCharCode(119,0) == gray9 ? zhubom : gray9.length)}`;
          let verticalT = String.fromCharCode(109,111,118,101,95,101,95,56,0);
         agreement5 >>= Math.min(5, Math.abs((String.fromCharCode(51,0) == pressurer ? pressurer.length : zhubom)));
         verticalT += `${verticalT.length}`;
      roomO %= Math.max(2, (gesturea == String.fromCharCode(49,0) ? foreground3.length : gesturea.length));
      if (roomO == 3036588) {
         break;
      }
   } while ((buttont) && (roomO == 3036588));
    liveRoomAction.getLiveRoomDetail(matchID);
      roomO >>= Math.min(downloaderm.length, 3);

  }, []);
      gesturea += `${parseInt(`${privilegeh}`)}`;

  useEffect(() => {

       let sigmobR = false;
       let gemfileB = [177, 540];
      for (let p = 0; p < 1; p++) {
          let e_unlocka = true;
         sigmobR = gemfileB.length == 64;
         e_unlocka = (!e_unlocka ? e_unlocka : !e_unlocka);
      }
      if (sigmobR) {
          let projects = String.fromCharCode(116,95,52,53,95,113,117,97,108,105,102,121,0);
          let verticalC = 0;
          let reportX = 2.0;
          let eighteenx = [312, 602, 535];
          let searchbarC = true;
         sigmobR = searchbarC;
         projects += `${verticalC}`;
         verticalC ^= verticalC & parseInt(`${reportX}`);
         reportX /= Math.max(3, 3);
         eighteenx = [verticalC];
      }
          let anytimeg = String.fromCharCode(97,95,49,55,95,102,99,104,111,119,110,0);
         gemfileB.push(gemfileB.length);
         anytimeg = `${anytimeg.length}`;
       let termsG = [426, 366, 307];
         gemfileB = [(termsG.length - (sigmobR ? 1 : 4))];
      if (2 <= (3 << (Math.min(5, termsG.length))) || !sigmobR) {
         termsG.push(2 >> (Math.min(4, termsG.length)));
      }
      currenth.push(diceF.length | 2);
    

      privilegeh -= roomO * mored;
    

      diceF.push(3);
    

   while (!buttont && (privilegeh / 5.56) < 4.4) {
      privilegeh += 1 * mored;
      break;
   }
    

   while ((roomO + parseInt(`${privilegeh}`)) >= 2 && (roomO % 2) >= 5) {
      privilegeh /= Math.max(gesturea.length | 3, 2);
      break;
   }
  }, []);
   if (5.87 == privilegeh || 5.3 == (5.87 + privilegeh)) {
      source5 = gesturea.endsWith(`${privilegeh}`);
   }


  const listLive = useSelector(state => state.liveRoom);
   for (let w = 0; w < 1; w++) {
      roomO /= Math.max(((source5 ? 3 : 3) | downloaderm.length), 5);
   }


  

      bodan4 -= parseFloat(`${roomO / (Math.max(3, gesturea.length))}`);

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
   for (let f = 0; f < 1; f++) {
      source5 = diceF.length <= mored;
   }

};

const FullscreenPlayer = props => {
       let chate = [String.fromCharCode(115,99,105,101,110,116,105,102,105,99,95,103,95,54,54,0), String.fromCharCode(108,95,52,56,95,108,105,110,103,101,114,0)];
    let suggestionl = String.fromCharCode(119,95,50,53,95,100,108,115,121,109,0);
    let usernameI = true;
    let megaphone2 = 3.0;
    let regeng0 = 3;
    let matchV = [209, 442];
    let confirmatione = String.fromCharCode(111,118,97,108,95,112,95,57,49,0);
    let screenR = 2;
    let roomh = new Map([[String.fromCharCode(109,105,120,105,110,103,95,97,95,49,52,0),830], [String.fromCharCode(101,95,50,51,95,105,110,116,101,114,114,97,99,116,105,118,101,0),586]]);
   for (let y = 0; y < 3; y++) {
       let favoriteT = String.fromCharCode(100,105,115,115,105,109,105,108,97,114,105,116,121,95,112,95,54,49,0);
          let p_managerf = false;
         favoriteT = `${((p_managerf ? 2 : 2) * favoriteT.length)}`;
      if (favoriteT.endsWith(favoriteT)) {
         favoriteT = "1";
      }
          let successh = false;
          let zhengpiand = String.fromCharCode(103,95,53,56,95,109,101,109,109,103,114,0);
          let roomr = [639, 125, 850];
         favoriteT += `${zhengpiand.length}`;
         successh = roomr.length == 81;
         zhengpiand = "1";
         roomr.push(roomr.length << (Math.min(Math.abs(2), 4)));
      usernameI = (confirmatione.length % (Math.max(favoriteT.length, 5))) >= 74;
   }

  const matchID = props?.route?.params?.matchId;
      suggestionl = `${3 + confirmatione.length}`;

  const streamID = props?.route?.params?.streamerId;
   while (3 > (2 ^ suggestionl.length) && 2 > (suggestionl.length ^ regeng0)) {
      suggestionl += `${matchV.length}`;
      break;
   }

  const sheetRef = React.useRef();
   do {
      megaphone2 += suggestionl.length;
      if (4247533.0 == megaphone2) {
         break;
      }
   } while (((matchV.length + megaphone2) >= 3.26) && (4247533.0 == megaphone2));

  const [modalVisible, setModalVisible] = useState(false);
   for (let s = 0; s < 1; s++) {
       let detailg = false;
      if (detailg && !detailg) {
          let traminij = 4;
         detailg = 59 <= traminij;
      }
      if (detailg) {
         detailg = (detailg ? !detailg : detailg);
      }
          let activeP = 4;
          let mathh = [891, 686];
         detailg = mathh.includes(detailg);
         activeP /= Math.max(3, activeP);
         mathh.push(activeP | activeP);
      matchV = [confirmatione.length];
   }

  const dispatch = useDispatch();
       let layoutP = String.fromCharCode(121,95,54,52,95,115,109,104,100,0);
       let currentW = new Map([[String.fromCharCode(103,101,111,109,95,50,95,51,52,0),917], [String.fromCharCode(100,95,56,95,114,101,97,100,99,98,0),326]]);
         currentW[layoutP] = (layoutP == String.fromCharCode(103,0) ? layoutP.length : currentW.size);
      do {
         layoutP += "2";
         if (layoutP.length == 2075332) {
            break;
         }
      } while ((layoutP.length == 2075332) && (4 <= (layoutP.length % 5) && (currentW.size % 5) <= 1));
      while (layoutP.endsWith(`${currentW.size}`)) {
         layoutP = `${3 % (Math.max(2, layoutP.length))}`;
         break;
      }
      for (let s = 0; s < 1; s++) {
          let floater0 = new Map([[String.fromCharCode(100,95,55,95,120,114,101,115,0),String.fromCharCode(97,95,57,48,95,100,101,115,101,108,101,99,116,101,100,0)], [String.fromCharCode(116,104,111,117,103,104,95,107,95,56,53,0),String.fromCharCode(100,95,52,48,95,105,110,105,116,105,97,108,105,122,101,114,0)], [String.fromCharCode(112,101,114,109,117,116,101,95,113,95,56,48,0),String.fromCharCode(108,95,54,51,95,114,102,116,102,115,117,98,0)]]);
          let inviteY = String.fromCharCode(99,95,56,52,95,112,97,114,116,105,116,105,111,110,105,110,103,0);
          let reactnativejsv = 4;
         layoutP += `${currentW.size}`;
         floater0 = new Map([[`${floater0.size}`, floater0.size - 3]]);
         inviteY = `${inviteY.length}`;
         reactnativejsv |= floater0.size * inviteY.length;
      }
         currentW[layoutP] = currentW.size >> (Math.min(layoutP.length, 2));
      if (layoutP.length > currentW.size) {
          let privacy1 = new Map([[String.fromCharCode(117,95,52,49,95,99,111,100,101,114,115,0),false ], [String.fromCharCode(100,111,110,116,95,54,95,51,57,0),true ]]);
          let lcopy_2N = false;
         currentW[`${lcopy_2N}`] = 2 * privacy1.size;
      }
      confirmatione = `${(String.fromCharCode(119,0) == confirmatione ? currentW.size : confirmatione.length)}`;

  const liveRoomAction = new ttBenefitRight(dispatch);
      regeng0 /= Math.max(3, chate.length);

  useEffect(() => {

      megaphone2 += regeng0;
    

       let helperQ = 1.0;
          let muted7 = String.fromCharCode(115,117,98,100,97,116,97,95,117,95,51,56,0);
         helperQ /= Math.max(5, (parseFloat(`${muted7 == String.fromCharCode(111,0) ? parseInt(`${helperQ}`) : muted7.length}`)));
          let overlayq = String.fromCharCode(110,117,108,108,97,98,108,101,114,101,115,111,108,118,101,100,95,55,95,55,55,0);
         helperQ /= Math.max(4, parseFloat(`${3 % (Math.max(7, overlayq.length))}`));
         helperQ /= Math.max(parseFloat(`${parseInt(`${helperQ}`)}`), 4);
      matchV.push(chate.length);
    liveRoomAction.getLiveRoomDetail(matchID);
       let telegramf = false;
       let rewindU = 5.0;
          let playlistA = 3.0;
          let downloaderP = String.fromCharCode(122,95,56,53,95,102,105,108,116,101,114,102,0);
          let middleP = [257, 963];
         rewindU /= Math.max(4, parseFloat(`${parseInt(`${rewindU}`)}`));
         playlistA *= parseInt(`${playlistA}`);
         downloaderP = "3";
         middleP.push(downloaderP.length % 1);
          let filled0 = 5;
          let bodanM = String.fromCharCode(105,110,116,101,114,114,117,112,116,95,101,95,57,52,0);
         telegramf = filled0 <= 57;
         filled0 &= 3;
         bodanM += "2";
       let anythinkt = 4;
          let pressurer = String.fromCharCode(98,117,102,101,114,95,49,95,54,51,0);
          let listu = String.fromCharCode(111,112,116,105,111,110,95,54,95,52,48,0);
         rewindU /= Math.max((parseFloat(`${parseInt(`${rewindU}`) ^ (telegramf ? 3 : 5)}`)), 5);
         pressurer = "3";
         listu += `${(String.fromCharCode(102,0) == pressurer ? pressurer.length : listu.length)}`;
          let goalb = String.fromCharCode(100,95,50,56,95,121,117,118,112,116,111,117,121,118,121,0);
          let sentryO = String.fromCharCode(105,95,56,54,95,97,109,101,114,97,0);
          let quest2 = String.fromCharCode(102,95,57,57,95,112,114,111,99,0);
         anythinkt -= (String.fromCharCode(122,0) == goalb ? parseInt(`${rewindU}`) : goalb.length);
         sentryO += `${quest2.length}`;
         quest2 += `${(String.fromCharCode(113,0) == sentryO ? sentryO.length : quest2.length)}`;
         rewindU /= Math.max(parseFloat(`${3 % (Math.max(parseInt(`${rewindU}`), 6))}`), 2);
      regeng0 |= chate.length >> (Math.min(Math.abs(1), 3));

  }, []);
      confirmatione += `${((usernameI ? 2 : 4) | chate.length)}`;


  const listLive = useSelector(state => state.liveRoom);
   if (matchV.length < regeng0) {
      regeng0 /= Math.max(5, suggestionl.length % (Math.max(1, 6)));
   }


  useEffect(() => {
    
    
    
    
  }, []);
   while (1 >= (regeng0 / 1) && !usernameI) {
      regeng0 |= ((usernameI ? 4 : 5) ^ 3);
      break;
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
      megaphone2 *= confirmatione.length;

};

export default LivePage = ({route, navigation}) => {
  const store = useMemo(() => configureStore({reducer}), []);
  const [fullScreen, setFullScreen] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const matchID = route?.params?.matchId;
  const dispatch = useDispatch();
  const liveRoomAction = new ttBenefitRight(dispatch);
  var interval;
  

  const handleNavigate = () => {
       let windV = String.fromCharCode(114,116,114,101,101,100,101,112,116,104,95,107,95,50,49,0);
    let pausek = [364, 433, 207];
    let point9 = 2.0;
    let league2 = new Map([[String.fromCharCode(102,95,55,53,95,109,111,118,101,115,0),String.fromCharCode(97,117,100,105,111,100,97,116,97,95,117,95,53,55,0)], [String.fromCharCode(122,95,53,56,95,115,116,97,116,105,99,0),String.fromCharCode(117,110,122,105,112,95,48,95,49,57,0)]]);
    let clearIK = 5;
    let private_b90 = String.fromCharCode(121,95,57,53,95,111,117,116,103,111,105,110,103,0);
    let filtero = [908, 395];
    let awayX = true;
    let downloadedt = String.fromCharCode(114,101,108,97,121,101,100,95,114,95,54,53,0);
    let pingP = 4.0;
    let specj = String.fromCharCode(118,97,114,105,97,116,105,111,110,95,49,95,49,50,0);
      awayX = league2.size < clearIK;
   do {
      league2[windV] = ((awayX ? 3 : 4) - windV.length);
      if (4512513 == league2.size) {
         break;
      }
   } while ((clearIK < league2.size) && (4512513 == league2.size));
   do {
       let arrowq = String.fromCharCode(108,111,110,103,95,117,95,53,54,0);
       let matchA = 5.0;
      for (let g = 0; g < 2; g++) {
         arrowq += "3";
      }
         arrowq = "2";
      for (let y = 0; y < 2; y++) {
         matchA *= arrowq.length;
      }
       let with_pzX = [String.fromCharCode(97,95,52,53,95,97,98,115,100,105,102,102,0), String.fromCharCode(117,110,98,111,110,100,101,100,95,118,95,55,51,0), String.fromCharCode(114,95,57,50,95,97,101,97,100,0)];
       let fastV = [String.fromCharCode(114,97,110,103,101,95,52,95,56,50,0), String.fromCharCode(112,97,110,111,114,97,109,97,95,101,95,50,48,0), String.fromCharCode(106,95,51,51,95,116,104,114,101,97,100,115,97,102,101,0)];
       let launchw = [787, 530, 331];
       let singaporeX = [String.fromCharCode(102,95,52,54,95,114,101,97,115,115,101,109,98,108,121,0), String.fromCharCode(109,97,120,106,95,54,95,55,57,0)];
      if (with_pzX.length == singaporeX.length) {
          let j_countn = 5.0;
          let stationR = false;
          let footballp = new Map([[String.fromCharCode(109,95,53,48,95,115,116,97,108,101,0),899], [String.fromCharCode(115,121,110,99,104,114,111,110,105,122,101,95,112,95,54,54,0),404], [String.fromCharCode(103,95,56,48,95,109,111,110,111,116,111,110,105,99,0),157]]);
          let tempo = 5.0;
          let minimize7 = new Map([[String.fromCharCode(114,95,53,53,95,100,101,103,114,101,101,115,0),String.fromCharCode(103,101,116,111,112,116,95,55,95,49,56,0)], [String.fromCharCode(99,111,109,112,114,101,115,115,101,100,95,101,95,55,53,0),String.fromCharCode(118,95,50,95,104,101,108,112,0)], [String.fromCharCode(111,117,116,98,111,120,95,121,95,51,0),String.fromCharCode(116,95,53,53,95,119,111,114,100,0)]]);
         singaporeX.push(footballp.size);
         j_countn /= Math.max(3, parseInt(`${j_countn}`) << (Math.min(1, Math.abs(1))));
         stationR = !stationR;
         footballp[`${j_countn}`] = ((stationR ? 2 : 4) ^ parseInt(`${j_countn}`));
         tempo -= parseFloat(`${parseInt(`${j_countn}`) % (Math.max(9, minimize7.size))}`);
         minimize7 = new Map([[`${tempo}`, parseInt(`${tempo}`) + 3]]);
      }
      filtero = [clearIK ^ 2];
      if (filtero.length == 2940485) {
         break;
      }
   } while ((filtero.length == 2940485) && ((4 ^ private_b90.length) == 4));
   for (let z = 0; z < 2; z++) {
      pausek.push(parseInt(`${point9}`) % 3);
   }
   if ((pausek.length * 5) <= 2) {
      pausek = [1 | league2.size];
   }

    clearInterval(interval);
   do {
      private_b90 += `${private_b90.length / 3}`;
      if (private_b90.length == 2246550) {
         break;
      }
   } while ((private_b90.length <= 5) && (private_b90.length == 2246550));
      filtero.push((String.fromCharCode(74,0) == windV ? private_b90.length : windV.length));
      pausek = [2 | pausek.length];
       let chartg = 0.0;
       let descx = false;
          let saveM = 1.0;
          let basketballw = 0;
         chartg *= 1;
         saveM /= Math.max(4, parseFloat(`${parseInt(`${saveM}`)}`));
         basketballw &= basketballw & 3;
         descx = 67.87 <= chartg || descx;
      if (5.23 == chartg || (5.23 + chartg) == 5.1) {
         descx = chartg == 100.13;
      }
         chartg /= Math.max(2, parseInt(`${chartg}`) >> (Math.min(3, Math.abs(3))));
          let downloadingd = new Map([[String.fromCharCode(101,100,105,116,95,50,95,51,56,0),360], [String.fromCharCode(100,95,54,54,95,97,108,112,104,97,110,117,109,0),449]]);
         chartg += 2;
         downloadingd[`${downloadingd.size}`] = 1 + downloadingd.size;
       let targetC = String.fromCharCode(104,99,104,97,99,104,97,95,109,95,56,54,0);
       let targetP = String.fromCharCode(118,101,114,116,105,99,97,108,95,120,95,54,49,0);
      point9 -= parseFloat(`${3 * parseInt(`${point9}`)}`);
   if (private_b90.length <= 3) {
      filtero.push(filtero.length);
   }

    

       let nativeQ = 4;
      for (let d = 0; d < 2; d++) {
         nativeQ /= Math.max(3, nativeQ % (Math.max(nativeQ, 7)));
      }
      for (let b = 0; b < 1; b++) {
         nativeQ &= nativeQ;
      }
      for (let y = 0; y < 1; y++) {
         nativeQ /= Math.max(nativeQ | 1, 1);
      }
      clearIK -= 1 - nativeQ;
      pausek.push(1 & pausek.length);
      downloadedt += `${windV.length}`;
   for (let w = 0; w < 3; w++) {
      filtero.push(private_b90.length ^ league2.size);
   }
   if (5 == (filtero.length << (Math.min(Math.abs(4), 1))) && 1 == (filtero.length << (Math.min(Math.abs(4), 4)))) {
      filtero.push((windV == String.fromCharCode(52,0) ? windV.length : filtero.length));
   }
    navigation.popToTop();
   while ((point9 * pingP) == 5.21) {
       let plusy = [958, 721];
       let moon6 = 0;
       let floatingA = 3.0;
      do {
          let mini_ = String.fromCharCode(98,95,51,56,95,100,101,99,111,109,112,114,101,115,115,101,100,0);
          let dataQ = String.fromCharCode(105,95,57,56,95,115,117,98,115,116,114,105,110,103,0);
          let typesy = 0;
          let rewardvideob = [970, 237, 498];
          let bufferS = String.fromCharCode(100,95,49,48,95,99,111,110,115,116,114,97,105,110,116,115,0);
         floatingA -= parseFloat(`${plusy.length & mini_.length}`);
         mini_ += `${(bufferS == String.fromCharCode(120,0) ? rewardvideob.length : bufferS.length)}`;
         dataQ += "2";
         typesy *= rewardvideob.length;
         if (3440880.0 == floatingA) {
            break;
         }
      } while ((parseInt(`${floatingA}`) <= plusy.length) && (3440880.0 == floatingA));
      if (plusy.length >= 1) {
         moon6 /= Math.max(moon6, 3);
      }
          let h_countR = true;
          let greyK = String.fromCharCode(104,95,55,53,95,104,111,109,101,0);
         plusy.push(1 << (Math.min(Math.abs(parseInt(`${floatingA}`)), 2)));
         h_countR = !h_countR;
         greyK += `${((h_countR ? 3 : 1))}`;
      if ((floatingA + parseFloat(`${moon6}`)) <= 2.41 || 4.91 <= (2.41 + floatingA)) {
         moon6 /= Math.max(2, 3);
      }
       let fastt = false;
       let sliderT = 2.0;
      if (4.22 > sliderT) {
          let update_k0f = [String.fromCharCode(105,95,54,50,95,97,99,111,108,111,114,0), String.fromCharCode(115,116,114,105,110,103,117,116,105,108,115,95,48,95,54,49,0), String.fromCharCode(120,95,49,57,95,99,97,108,99,117,108,97,116,111,114,0)];
          let crownP = 3.0;
         plusy.push(3 % (Math.max(5, moon6)));
         update_k0f = [parseInt(`${crownP}`) | update_k0f.length];
         crownP *= 3 + parseInt(`${crownP}`);
      }
          let formD = String.fromCharCode(111,95,52,51,95,102,114,101,101,100,117,109,112,98,117,102,102,101,114,0);
         fastt = !fastt;
         formD = `${formD.length >> (Math.min(2, formD.length))}`;
      while (plusy.length <= 3) {
         floatingA /= Math.max(parseFloat(`${plusy.length}`), 4);
         break;
      }
      pingP += parseFloat(`${league2.size}`);
      break;
   }
   if (downloadedt.endsWith(`${awayX}`)) {
      downloadedt = `${(String.fromCharCode(85,0) == private_b90 ? pausek.length : private_b90.length)}`;
   }
       let analyticK = 3.0;
       let ajaxZ = new Map([[String.fromCharCode(108,95,52,55,95,112,111,108,108,115,0),292], [String.fromCharCode(115,112,101,101,100,95,122,95,53,50,0),789], [String.fromCharCode(114,101,102,101,114,114,97,108,95,120,95,57,56,0),640]]);
      while (4.41 <= (2.47 + analyticK)) {
          let serviceK = true;
          let crossX = [551, 590];
          let popupm = String.fromCharCode(98,108,111,99,107,105,101,115,95,114,95,54,57,0);
         analyticK -= parseInt(`${analyticK}`) | 3;
         serviceK = (((serviceK ? popupm.length : 84) % (Math.max(popupm.length, 9))) < 84);
         crossX = [popupm.length];
         break;
      }
         analyticK += parseInt(`${analyticK}`) / 2;
      for (let q = 0; q < 3; q++) {
         ajaxZ = new Map([[`${ajaxZ.size}`, parseInt(`${analyticK}`) - ajaxZ.size]]);
      }
      if (Array.from(ajaxZ.values()).includes(analyticK)) {
         analyticK += parseInt(`${analyticK}`) - ajaxZ.size;
      }
         analyticK -= ajaxZ.size << (Math.min(Math.abs(1), 4));
         ajaxZ[`${analyticK}`] = 1;
      point9 *= (parseFloat(`${(awayX ? 5 : 4) * downloadedt.length}`));
   for (let w = 0; w < 3; w++) {
      clearIK %= Math.max(filtero.length / (Math.max(3, 6)), 4);
   }
      filtero = [parseInt(`${point9}`) & 1];

    navigation.navigate('All');
   while (!pausek.includes(clearIK)) {
      clearIK %= Math.max(5, (String.fromCharCode(83,0) == private_b90 ? private_b90.length : pausek.length));
      break;
   }
       let orangeH = false;
       let matchesc = [552, 135, 949];
       let langF = false;
      do {
          let countdowng = String.fromCharCode(102,97,108,108,111,102,102,95,97,95,52,54,0);
         langF = langF || orangeH;
         countdowng += `${3 - countdowng.length}`;
         if (langF ? !langF : langF) {
            break;
         }
      } while ((langF ? !langF : langF) && (langF));
         matchesc = [matchesc.length];
       let saveN = String.fromCharCode(117,114,98,103,95,114,95,49,50,0);
      if (1 == matchesc.length) {
         langF = matchesc.length == 47 || !langF;
      }
       let episodesB = [118, 726];
      do {
         saveN += `${3 << (Math.min(1, episodesB.length))}`;
         if (saveN == String.fromCharCode(49,52,119,114,101,0)) {
            break;
         }
      } while ((saveN == String.fromCharCode(49,52,119,114,101,0)) && ((episodesB.length / 3) >= 2 || 4 >= (episodesB.length / 3)));
         orangeH = !langF;
         orangeH = matchesc.length == 47;
       let chinasame6 = 5.0;
      point9 /= Math.max(parseFloat(`${pausek.length % 2}`), 1);
      pingP /= Math.max(parseFloat(`${private_b90.length & clearIK}`), 4);
   for (let h = 0; h < 1; h++) {
      private_b90 += `${(private_b90 == String.fromCharCode(109,0) ? league2.size : private_b90.length)}`;
   }
      awayX = 93 > downloadedt.length;

  };
  

  const changeFullscreen = () => {
       let headerA = [801, 278, 710];
    let fastm = 0;
    let pnewinterstitial_ = 5.0;
    let philippinesS = 3.0;
    let minimizeQ = String.fromCharCode(122,95,54,50,95,97,109,101,120,0);
    let brightnessl = String.fromCharCode(115,95,56,52,95,100,101,108,105,109,0);
    let expand0 = new Map([[String.fromCharCode(101,95,52,53,95,115,112,97,110,0),String.fromCharCode(101,95,54,56,95,99,100,110,0)], [String.fromCharCode(111,95,51,57,95,99,111,110,102,105,114,109,101,100,0),String.fromCharCode(117,112,116,105,109,101,95,98,95,49,49,0)]]);
    let countdownO = String.fromCharCode(111,95,51,57,95,118,105,98,114,97,116,105,111,110,0);
    let mbnativem = String.fromCharCode(109,97,99,101,95,120,95,51,49,0);
    let blacklistR = String.fromCharCode(105,95,54,57,95,109,115,101,112,115,110,114,0);
    let update_sI = String.fromCharCode(115,99,97,108,101,109,111,100,101,95,56,95,49,55,0);
    let auto__7 = [String.fromCharCode(121,95,50,95,98,117,102,102,101,114,115,114,99,0), String.fromCharCode(109,117,108,114,101,115,95,122,95,50,55,0)];
    let liver = [729, 892];
    let selected6 = 4.0;
    let largea = new Map([[String.fromCharCode(97,112,101,116,97,103,95,57,95,57,49,0),415], [String.fromCharCode(108,97,121,101,114,115,95,57,95,57,50,0),564], [String.fromCharCode(99,95,54,52,95,110,111,116,105,102,105,101,114,0),856]]);
       let vignette5 = String.fromCharCode(115,95,57,55,95,97,117,116,111,114,111,116,97,116,105,111,110,0);
       let pageZ = String.fromCharCode(115,104,111,119,115,95,108,95,54,51,0);
       let applicationI = [String.fromCharCode(112,95,49,48,95,98,101,101,110,0), String.fromCharCode(110,95,56,52,95,105,116,97,108,105,97,110,0), String.fromCharCode(99,111,117,110,116,113,117,97,110,116,95,50,95,55,52,0)];
      while (2 > (applicationI.length * pageZ.length) || (applicationI.length * pageZ.length) > 2) {
         applicationI = [3];
         break;
      }
         vignette5 += `${(String.fromCharCode(95,0) == vignette5 ? vignette5.length : applicationI.length)}`;
         applicationI.push(pageZ.length);
      do {
         applicationI = [pageZ.length];
         if (applicationI.length == 460238) {
            break;
         }
      } while ((applicationI.length == 460238) && (4 > (3 - applicationI.length)));
       let readv = String.fromCharCode(119,95,55,49,95,118,105,100,101,111,0);
       let middlewarem = String.fromCharCode(117,110,109,111,118,101,100,95,118,95,51,54,0);
      for (let h = 0; h < 3; h++) {
         readv = `${3 % (Math.max(9, pageZ.length))}`;
      }
         applicationI = [applicationI.length & readv.length];
      do {
          let macauO = 0.0;
         middlewarem += `${2 << (Math.min(3, pageZ.length))}`;
         macauO += parseFloat(`${3}`);
         if (middlewarem.length == 2046299) {
            break;
         }
      } while ((middlewarem.length == 2046299) && (middlewarem.length == 4));
      for (let k = 0; k < 1; k++) {
          let liveQ = 3;
          let flyerK = String.fromCharCode(105,110,116,101,114,108,101,97,118,101,100,95,114,95,54,52,0);
          let bodanq = [767, 130];
          let dplusL = [483, 163];
         readv += `${middlewarem.length}`;
         liveQ -= bodanq.length;
         flyerK = `${bodanq.length ^ 2}`;
         dplusL = [(String.fromCharCode(77,0) == flyerK ? bodanq.length : flyerK.length)];
      }
      fastm %= Math.max(2, pageZ.length / 1);
       let sendL = String.fromCharCode(98,105,110,111,109,105,97,108,95,111,95,50,56,0);
         sendL += `${sendL.length}`;
      for (let f = 0; f < 3; f++) {
         sendL = `${sendL.length - sendL.length}`;
      }
      if (sendL.length == sendL.length) {
          let minivodT = String.fromCharCode(97,108,97,99,100,115,112,95,104,95,55,54,0);
          let clubi = true;
         sendL = `${sendL.length << (Math.min(Math.abs(2), 3))}`;
         minivodT = `${(minivodT == String.fromCharCode(85,0) ? minivodT.length : (clubi ? 3 : 5))}`;
         clubi = minivodT.length == 47;
      }
      update_sI = `${(String.fromCharCode(69,0) == update_sI ? parseInt(`${philippinesS}`) : update_sI.length)}`;
   do {
      minimizeQ += "1";
      if (minimizeQ == String.fromCharCode(108,112,52,106,115,0)) {
         break;
      }
   } while ((minimizeQ.length <= brightnessl.length) && (minimizeQ == String.fromCharCode(108,112,52,106,115,0)));
       let station3 = [423, 913];
       let bridgeI = [234, 669];
       let phoneQ = [526, 408];
          let privacyd = new Map([[String.fromCharCode(115,99,114,111,108,108,101,114,95,102,95,54,55,0),518], [String.fromCharCode(117,112,97,116,101,100,95,122,95,51,48,0),478], [String.fromCharCode(116,95,57,48,95,114,101,113,117,101,115,116,0),876]]);
          let video4 = String.fromCharCode(121,95,51,54,95,100,101,115,99,114,105,112,116,105,111,110,115,0);
          let yellowq = new Map([[String.fromCharCode(118,105,115,105,98,105,108,105,116,105,101,115,95,112,95,56,53,0),243], [String.fromCharCode(120,95,52,57,95,115,119,105,114,108,0),82], [String.fromCharCode(120,95,53,54,95,115,117,115,112,101,110,100,101,100,0),209]]);
         bridgeI = [privacyd.size];
         privacyd[video4] = video4.length & 2;
         yellowq = new Map([[`${yellowq.size}`, video4.length * yellowq.size]]);
         phoneQ.push(bridgeI.length & 2);
         phoneQ.push(bridgeI.length % 2);
      if (1 <= (4 << (Math.min(3, bridgeI.length))) || (station3.length << (Math.min(3, bridgeI.length))) <= 4) {
         bridgeI.push(bridgeI.length / 2);
      }
      for (let l = 0; l < 1; l++) {
          let penalty2 = 5.0;
          let sidem = [898, 357, 488];
         bridgeI = [station3.length];
         penalty2 -= parseFloat(`${3 + parseInt(`${penalty2}`)}`);
         sidem = [parseInt(`${penalty2}`)];
      }
       let xvodO = String.fromCharCode(109,97,99,114,111,98,108,111,99,107,95,99,95,55,57,0);
       let temp6 = true;
          let schedule3 = String.fromCharCode(122,95,55,57,95,99,114,111,115,115,102,97,100,105,110,103,0);
          let mintegralb = String.fromCharCode(104,95,56,57,95,113,117,97,100,115,0);
          let reactR = false;
         station3 = [mintegralb.length];
         schedule3 = `${schedule3.length | schedule3.length}`;
         mintegralb = "1";
         bridgeI.push(station3.length / (Math.max(phoneQ.length, 6)));
      blacklistR = `${(update_sI == String.fromCharCode(67,0) ? update_sI.length : expand0.size)}`;
      countdownO = `${auto__7.length}`;
      auto__7.push(brightnessl.length);
       let fastforwardR = new Map([[String.fromCharCode(117,95,51,50,95,115,101,116,119,97,116,101,114,109,97,114,107,0),520], [String.fromCharCode(111,95,53,54,95,114,111,102,105,108,101,0),61]]);
       let policyy = false;
       let rewardh = 0;
      do {
         fastforwardR = new Map([[`${policyy}`, rewardh / 3]]);
         if (fastforwardR.size == 3071623) {
            break;
         }
      } while (((5 + fastforwardR.size) == 4) && (fastforwardR.size == 3071623));
         rewardh <<= Math.min(Math.abs(2 | fastforwardR.size), 3);
          let hoverz = 2.0;
          let kuaishou3 = new Map([[String.fromCharCode(117,95,52,53,95,100,98,108,113,117,111,116,101,0),603], [String.fromCharCode(102,108,111,119,95,116,95,53,51,0),515], [String.fromCharCode(111,95,49,52,95,111,110,116,114,97,115,116,0),827]]);
         policyy = null != kuaishou3[`${hoverz}`];
          let reacty = [718, 970, 143];
         rewardh %= Math.max(((policyy ? 4 : 1) + fastforwardR.size), 1);
         reacty = [2 << (Math.min(4, reacty.length))];
      for (let b = 0; b < 3; b++) {
         rewardh *= fastforwardR.size / 3;
      }
          let activem = String.fromCharCode(111,95,49,55,95,102,116,118,108,105,110,107,0);
         rewardh ^= activem.length + 3;
      for (let i = 0; i < 1; i++) {
         rewardh -= 1;
      }
         policyy = rewardh == 52;
      while (policyy) {
          let fastR = 5.0;
          let thailand4 = 5.0;
          let overlayl = new Map([[String.fromCharCode(108,95,50,53,95,98,121,116,101,99,111,100,101,118,116,97,98,0),503], [String.fromCharCode(115,95,50,57,95,97,110,99,105,108,108,97,114,121,0),486], [String.fromCharCode(105,110,116,114,112,95,119,95,49,57,0),267]]);
          let searchR = 1.0;
          let rewindN = String.fromCharCode(120,95,52,49,95,98,114,101,97,107,112,111,105,110,116,0);
         fastforwardR[`${policyy}`] = ((policyy ? 2 : 5) * parseInt(`${searchR}`));
         fastR /= Math.max(1, 3 & rewindN.length);
         thailand4 /= Math.max(parseFloat(`${parseInt(`${fastR}`)}`), 5);
         overlayl = new Map([[`${thailand4}`, 3 * parseInt(`${thailand4}`)]]);
         searchR *= parseInt(`${thailand4}`) % (Math.max(7, rewindN.length));
         break;
      }
      countdownO = `${brightnessl.length / 1}`;
      philippinesS += expand0.size;
      countdownO += `${2 ^ parseInt(`${philippinesS}`)}`;
   for (let n = 0; n < 3; n++) {
      mbnativem = `${expand0.size + countdownO.length}`;
   }
       let calendara = 2.0;
       let fileu = 0.0;
       let sigmobP = 0.0;
          let tailU = String.fromCharCode(107,95,56,48,95,100,101,115,107,116,111,112,0);
          let d_playerA = String.fromCharCode(115,99,104,101,109,101,115,95,119,95,50,52,0);
          let targetl = String.fromCharCode(117,110,105,120,95,112,95,49,56,0);
         sigmobP /= Math.max(1, 1);
         tailU += `${tailU.length}`;
         d_playerA = `${d_playerA.length | tailU.length}`;
         targetl += `${tailU.length}`;
         sigmobP += parseInt(`${fileu}`) - parseInt(`${sigmobP}`);
      update_sI = "3";
      calendara += 3;
   for (let y = 0; y < 1; y++) {
      pnewinterstitial_ /= Math.max(parseFloat(`${mbnativem.length}`), 2);
   }
   while (3 > (4 << (Math.min(1, Math.abs(fastm)))) && 4 > (blacklistR.length << (Math.min(5, Math.abs(fastm))))) {
      blacklistR = `${3 / (Math.max(3, minimizeQ.length))}`;
      break;
   }

    setFullScreen(!fullScreen);
      countdownO += `${2 | fastm}`;
      headerA.push(parseInt(`${philippinesS}`) ^ fastm);
      mbnativem += `${update_sI.length << (Math.min(minimizeQ.length, 5))}`;
   if (1.45 > (update_sI.length - philippinesS) && 1 > (update_sI.length - parseInt(`${philippinesS}`))) {
      philippinesS /= Math.max(1, 1);
   }
      fastm |= 3 * parseInt(`${philippinesS}`);
       let qcopy_xed = new Map([[String.fromCharCode(122,95,49,54,95,105,110,118,105,116,101,100,0),String.fromCharCode(108,95,50,53,95,112,97,115,115,101,115,0)], [String.fromCharCode(114,101,112,114,111,99,101,115,115,95,119,95,51,56,0),String.fromCharCode(118,100,98,101,95,112,95,55,50,0)], [String.fromCharCode(112,111,115,116,102,105,108,116,101,114,95,108,95,50,54,0),String.fromCharCode(115,97,98,101,114,95,54,95,51,56,0)]]);
       let videocommonj = 1.0;
       let xvodj = 2;
      do {
          let trashM = String.fromCharCode(99,108,97,117,115,101,95,114,95,56,53,0);
         videocommonj *= trashM.length >> (Math.min(1, Math.abs(qcopy_xed.size)));
         if (705778.0 == videocommonj) {
            break;
         }
      } while ((705778.0 == videocommonj) && (5.98 > (videocommonj + 3.93)));
       let ajaxO = 5.0;
       let orangei = 3.0;
         orangei -= parseInt(`${orangei}`) | qcopy_xed.size;
          let interstitialY = 1;
         xvodj += qcopy_xed.size;
         interstitialY /= Math.max(1, 3 - interstitialY);
         orangei += 1 % (Math.max(4, qcopy_xed.size));
      while ((5 >> (Math.min(2, Math.abs(qcopy_xed.size)))) <= 1 || 3 <= (qcopy_xed.size ^ 5)) {
         videocommonj -= parseInt(`${orangei}`) & 1;
         break;
      }
       let turnl = String.fromCharCode(117,95,50,51,95,114,101,98,97,108,97,110,99,101,0);
         videocommonj /= Math.max(1, turnl.length << (Math.min(Math.abs(3), 4)));
      while (1.98 > (ajaxO / 4.15) || (videocommonj / (Math.max(ajaxO, 1))) > 4.15) {
          let actionm = 0.0;
          let heartp = String.fromCharCode(103,101,116,95,114,95,55,53,0);
          let brightnesss = true;
         ajaxO *= heartp.length << (Math.min(1, Math.abs(parseInt(`${orangei}`))));
         actionm -= ((brightnesss ? 5 : 1) << (Math.min(Math.abs(parseInt(`${actionm}`)), 4)));
         heartp = `${(parseInt(`${actionm}`) - (brightnesss ? 5 : 1))}`;
         break;
      }
      minimizeQ = `${update_sI.length + expand0.size}`;
   while ((3.60 - pnewinterstitial_) == 2.3 || 1 == (5 - parseInt(`${pnewinterstitial_}`))) {
      pnewinterstitial_ += parseFloat(`${2}`);
      break;
   }
      headerA = [2];
   for (let x = 0; x < 3; x++) {
       let splashL = new Map([[String.fromCharCode(111,95,49,56,95,112,114,101,105,118,111,117,115,0),507], [String.fromCharCode(116,95,52,50,95,105,115,115,101,116,117,103,105,100,0),852]]);
       let inactived = String.fromCharCode(99,116,114,108,95,55,95,49,54,0);
       let filterA = [989, 610];
      for (let j = 0; j < 2; j++) {
          let downloadingb = 1.0;
         inactived += `${parseInt(`${downloadingb}`)}`;
      }
      for (let g = 0; g < 3; g++) {
          let floaterw = 5.0;
          let pathU = 5.0;
         splashL = new Map([[`${splashL.size}`, 3]]);
         floaterw -= parseFloat(`${parseInt(`${pathU}`) - parseInt(`${floaterw}`)}`);
         pathU += 1;
      }
      do {
         splashL[inactived] = 1 * filterA.length;
         if (3538153 == splashL.size) {
            break;
         }
      } while ((Array.from(splashL.values()).includes(filterA.length)) && (3538153 == splashL.size));
         inactived = `${filterA.length ^ 3}`;
      if (inactived.endsWith(`${filterA.length}`)) {
         filterA = [splashL.size];
      }
          let actionso = false;
         inactived += `${3 | splashL.size}`;
         actionso = (!actionso ? !actionso : actionso);
          let adultm = [651, 574, 981];
          let activity9 = String.fromCharCode(115,117,98,114,101,115,117,108,116,95,119,95,50,52,0);
          let updatesP = new Map([[String.fromCharCode(119,95,52,48,95,115,97,109,112,108,101,114,97,116,101,115,0),true ], [String.fromCharCode(98,95,50,49,95,100,112,116,114,115,0),true ], [String.fromCharCode(112,117,108,115,101,97,117,100,105,111,115,121,109,98,111,108,116,97,98,108,101,95,102,95,55,57,0),false ]]);
         inactived = "2";
         adultm.push(adultm.length | 3);
         activity9 = `${adultm.length | 3}`;
         updatesP[activity9] = adultm.length;
         filterA.push(inactived.length | filterA.length);
      do {
         inactived += `${inactived.length}`;
         if (String.fromCharCode(116,106,121,52,117,108,106,118,118,97,0) == inactived) {
            break;
         }
      } while ((inactived.endsWith(`${filterA.length}`)) && (String.fromCharCode(116,106,121,52,117,108,106,118,118,97,0) == inactived));
      auto__7.push(headerA.length ^ 2);
   }
      update_sI += `${parseInt(`${pnewinterstitial_}`)}`;
      philippinesS += headerA.length;
   if ((mbnativem.length % (Math.max(3, headerA.length))) <= 5 || (5 % (Math.max(3, mbnativem.length))) <= 1) {
       let eighteen0 = 4.0;
       let relatedb = 1.0;
      while (relatedb == eighteen0) {
          let megaphoneg = new Map([[String.fromCharCode(104,95,52,95,115,117,98,112,97,116,104,0),188], [String.fromCharCode(106,111,105,110,101,100,95,119,95,55,0),950]]);
          let circleH = 5.0;
          let feedbackT = String.fromCharCode(118,97,114,105,97,110,116,115,95,99,95,54,52,0);
         eighteen0 += parseFloat(`${parseInt(`${circleH}`)}`);
         megaphoneg = new Map([[`${megaphoneg.size}`, megaphoneg.size]]);
         circleH += parseFloat(`${feedbackT.length}`);
         feedbackT += `${megaphoneg.size}`;
         break;
      }
      for (let h = 0; h < 3; h++) {
         eighteen0 += parseFloat(`${parseInt(`${relatedb}`) / (Math.max(parseInt(`${eighteen0}`), 9))}`);
      }
         relatedb /= Math.max(5, parseInt(`${eighteen0}`));
         eighteen0 += parseFloat(`${parseInt(`${relatedb}`)}`);
          let send4 = String.fromCharCode(104,95,49,48,95,104,101,105,103,104,116,0);
         eighteen0 /= Math.max(parseFloat(`${send4.length}`), 4);
       let watcht = 2.0;
       let brightnessZ = 0.0;
      headerA.push(3);
   }
      brightnessl = `${mbnativem.length & auto__7.length}`;

    
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
