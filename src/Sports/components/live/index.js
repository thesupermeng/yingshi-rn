import React, {useEffect, useState, useMemo} from 'react';

import {View} from 'react-native';
import styles from './fgl_less_position';
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
import YKBTurn from './action';
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
       let indicatork = [341, 53, 583];
    let upgradeX = String.fromCharCode(113,117,111,116,97,95,99,95,55,54,0);
    let searchbarj = false;
    let loginn = String.fromCharCode(120,95,49,52,95,106,115,111,110,0);
    let megaphoneX = 2.0;
    let thumbnailY = String.fromCharCode(100,105,97,108,105,110,103,95,57,95,54,57,0);
    let membershipp = String.fromCharCode(108,111,99,107,99,104,97,105,110,95,120,95,56,53,0);
    let zhubo9 = [464, 616];
    let pointV = 2;
    let acceptedS = String.fromCharCode(116,114,97,110,115,102,101,114,114,97,98,108,101,95,105,95,57,48,0);
    let zhengpianX = 5.0;
    let agreementh = String.fromCharCode(109,101,109,110,114,95,106,95,49,49,0);
    let logoN = String.fromCharCode(97,110,105,109,97,116,97,98,108,101,95,50,95,53,54,0);
    let controlE = String.fromCharCode(118,95,50,53,95,105,110,116,114,111,0);
   if (upgradeX != membershipp) {
       let nextm = String.fromCharCode(120,95,55,50,95,113,116,114,108,101,0);
         nextm += `${nextm.length}`;
      while (nextm == String.fromCharCode(55,0)) {
         nextm = `${(nextm == String.fromCharCode(74,0) ? nextm.length : nextm.length)}`;
         break;
      }
          let downloaderG = 4.0;
          let notification4 = [128, 78, 390];
         nextm += `${nextm.length}`;
         downloaderG *= parseFloat(`${notification4.length << (Math.min(Math.abs(1), 1))}`);
         notification4.push(parseInt(`${downloaderG}`) / 2);
      membershipp += "3";
   }

  console.log('route', props.route);
      indicatork = [thumbnailY.length];

  const navigation = useNavigation();
   do {
       let fullD = [719, 223];
       let borderlessB = String.fromCharCode(115,101,108,101,99,116,105,118,101,108,121,95,116,95,50,56,0);
       let kicku = true;
      if ((fullD.length % 2) < 3) {
          let trashT = 0.0;
          let resendR = new Map([[String.fromCharCode(110,95,56,52,95,100,111,119,110,115,99,97,108,101,0),286], [String.fromCharCode(99,95,55,53,95,114,101,116,114,105,101,118,105,110,103,0),615]]);
          let usernameX = String.fromCharCode(112,103,109,121,117,118,95,113,95,57,56,0);
          let description_or = 3.0;
         fullD = [1 | fullD.length];
         trashT += parseFloat(`${usernameX.length << (Math.min(Math.abs(3), 4))}`);
         resendR[`${description_or}`] = parseInt(`${description_or}`);
         usernameX = `${parseInt(`${description_or}`)}`;
      }
         borderlessB = `${((kicku ? 1 : 5) / (Math.max(3, 2)))}`;
      if (4 == borderlessB.length) {
         kicku = 59 > fullD.length && borderlessB == String.fromCharCode(81,0);
      }
          let dropdown0 = 1.0;
          let areaC = false;
          let topicD = String.fromCharCode(109,97,99,101,95,109,95,53,56,0);
         borderlessB += `${(parseInt(`${dropdown0}`) >> (Math.min(2, Math.abs((areaC ? 4 : 1)))))}`;
         dropdown0 /= Math.max(4, (parseFloat(`${topicD == String.fromCharCode(78,0) ? topicD.length : topicD.length}`)));
         areaC = topicD.length <= topicD.length;
         borderlessB += `${(borderlessB == String.fromCharCode(73,0) ? borderlessB.length : fullD.length)}`;
      if ((fullD.length >> (Math.min(Math.abs(1), 3))) == 3 || 1 == (fullD.length >> (Math.min(borderlessB.length, 3)))) {
         borderlessB += `${borderlessB.length}`;
      }
      if (!kicku) {
         borderlessB += "1";
      }
         borderlessB += `${(3 << (Math.min(1, Math.abs((kicku ? 1 : 2)))))}`;
         kicku = fullD.length > borderlessB.length;
      megaphoneX *= (String.fromCharCode(90,0) == upgradeX ? zhubo9.length : upgradeX.length);
      if (4329472.0 == megaphoneX) {
         break;
      }
   } while ((4329472.0 == megaphoneX) && (!zhubo9.includes(megaphoneX)));


  const onHandleBack = () => {

      thumbnailY = `${indicatork.length ^ 1}`;
    navigation.goBack();
       let becomeT = new Map([[String.fromCharCode(100,105,99,116,105,111,110,97,114,105,101,115,95,97,95,52,54,0),false ], [String.fromCharCode(106,95,53,50,95,108,97,116,109,0),false ]]);
       let shirtZ = new Map([[String.fromCharCode(112,108,97,121,97,98,108,101,95,122,95,53,57,0),845], [String.fromCharCode(117,95,50,48,95,100,101,102,101,114,114,101,114,0),539]]);
       let paginationy = new Map([[String.fromCharCode(109,95,50,52,95,104,101,120,98,115,0),false ], [String.fromCharCode(114,95,57,55,95,115,116,114,105,110,103,101,110,99,111,100,101,0),false ]]);
          let selectb = 3.0;
         shirtZ = new Map([[`${paginationy.size}`, parseInt(`${selectb}`) + paginationy.size]]);
          let nterstitialI = String.fromCharCode(108,115,112,114,95,50,95,49,48,48,0);
          let plashe = String.fromCharCode(98,97,107,101,95,111,95,51,54,0);
          let streaming2 = [766, 115, 279];
         becomeT = new Map([[`${shirtZ.size}`, 3 + nterstitialI.length]]);
         nterstitialI = `${streaming2.length - 2}`;
         plashe = `${plashe.length - streaming2.length}`;
         becomeT = new Map([[`${paginationy.size}`, 1]]);
      for (let f = 0; f < 1; f++) {
         paginationy[`${becomeT.size}`] = 1 & shirtZ.size;
      }
         shirtZ = new Map([[`${paginationy.size}`, 1 ^ shirtZ.size]]);
         becomeT = new Map([[`${becomeT.size}`, shirtZ.size & becomeT.size]]);
          let expandQ = String.fromCharCode(106,95,50,55,95,115,109,101,97,114,0);
          let modelg = new Map([[String.fromCharCode(104,95,53,48,95,97,110,110,111,116,97,116,101,0),65], [String.fromCharCode(122,95,49,57,95,97,118,114,101,115,97,109,112,108,101,114,101,115,0),346]]);
         paginationy = new Map([[`${becomeT.size}`, 1 - paginationy.size]]);
         expandQ += `${(expandQ == String.fromCharCode(110,0) ? expandQ.length : modelg.size)}`;
         modelg[`${expandQ}`] = expandQ.length;
       let heji7 = true;
       let bootsplashk = true;
         paginationy = new Map([[`${shirtZ.size}`, 2]]);
      pointV /= Math.max(2, 4);

  };
   for (let e = 0; e < 1; e++) {
      zhubo9 = [membershipp.length];
   }

  const matchID = props?.route?.params?.matchId;
   if (4 < (pointV | 4) || (4 | indicatork.length) < 5) {
      pointV <<= Math.min(Math.abs(1), 3);
   }

  const streamID = props?.route?.params?.streamerId;
      zhubo9 = [membershipp.length >> (Math.min(5, zhubo9.length))];

  

   for (let v = 0; v < 3; v++) {
      pointV %= Math.max(5, zhubo9.length * 3);
   }
  const sheetRef = React.useRef();
   if (upgradeX.endsWith(`${zhubo9.length}`)) {
      upgradeX = `${indicatork.length}`;
   }

  const [modalVisible, setModalVisible] = useState(false);
   do {
      thumbnailY += `${membershipp.length % (Math.max(3, 2))}`;
      if (thumbnailY == String.fromCharCode(99,100,110,48,103,51,106,118,95,119,0)) {
         break;
      }
   } while ((loginn.includes(`${thumbnailY.length}`)) && (thumbnailY == String.fromCharCode(99,100,110,48,103,51,106,118,95,119,0)));

  const dispatch = useDispatch();
   while (3 == (zhubo9.length / 3)) {
      upgradeX = `${((searchbarj ? 2 : 4) * parseInt(`${megaphoneX}`))}`;
      break;
   }

  const liveRoomAction = new YKBTurn(dispatch);
      indicatork.push(zhubo9.length * pointV);


  useEffect(() => {

      thumbnailY = `${2 >> (Math.min(5, indicatork.length))}`;
    

      megaphoneX /= Math.max(2, 3 ^ thumbnailY.length);
    liveRoomAction.getLiveRoomDetail(matchID);
   do {
      acceptedS += `${upgradeX.length}`;
      if (String.fromCharCode(95,116,117,112,114,117,109,0) == acceptedS) {
         break;
      }
   } while ((4 == (pointV % 4)) && (String.fromCharCode(95,116,117,112,114,117,109,0) == acceptedS));

  }, []);
   while (5.100 >= (4.19 + zhengpianX) || (4.19 + zhengpianX) >= 5.82) {
      zhengpianX += loginn.length;
      break;
   }

  useEffect(() => {

       let championG = String.fromCharCode(119,105,110,100,111,119,115,95,120,95,49,54,0);
       let downloading_ = 5;
      while (championG.endsWith(`${downloading_}`)) {
          let dangeri = new Map([[String.fromCharCode(99,108,111,117,100,95,107,95,54,48,0),605], [String.fromCharCode(111,98,106,110,105,100,95,104,95,56,56,0),772]]);
          let score8 = [43, 28];
         downloading_ -= score8.length;
         dangeri = new Map([[`${dangeri.size}`, dangeri.size]]);
         score8 = [dangeri.size & 3];
         break;
      }
          let regengw = String.fromCharCode(114,95,53,49,95,115,111,99,107,101,116,115,0);
         downloading_ &= downloading_ - championG.length;
         regengw = `${regengw.length}`;
      while (!championG.endsWith(`${downloading_}`)) {
         championG += `${(championG == String.fromCharCode(100,0) ? downloading_ : championG.length)}`;
         break;
      }
          let schedulew = 0.0;
         downloading_ <<= Math.min(3, Math.abs(downloading_));
         schedulew *= parseFloat(`${3}`);
      while (3 == (2 + downloading_)) {
         downloading_ ^= 2;
         break;
      }
       let macauk = [String.fromCharCode(102,95,52,95,114,105,110,103,98,117,102,102,101,114,0), String.fromCharCode(104,97,109,98,117,114,103,101,114,95,106,95,55,51,0), String.fromCharCode(101,122,111,115,95,98,95,57,51,0)];
       let y_titleZ = [792, 577, 410];
      pointV ^= indicatork.length;
    

      megaphoneX /= Math.max(zhubo9.length, 2);
    

       let twittert = String.fromCharCode(103,95,53,55,95,112,111,105,115,115,111,110,0);
       let iconM = 0;
       let largeC = true;
      do {
          let condensed2 = 2;
          let penaltyp = String.fromCharCode(114,97,114,105,116,121,95,98,95,53,53,0);
          let catagoryT = String.fromCharCode(119,95,57,95,105,110,99,111,114,114,101,99,116,0);
         iconM ^= 1 << (Math.min(2, Math.abs(iconM)));
         condensed2 += condensed2;
         penaltyp = `${catagoryT.length % (Math.max(1, 4))}`;
         catagoryT = `${catagoryT.length}`;
         if (iconM == 4810020) {
            break;
         }
      } while ((iconM == 4810020) && (largeC));
      do {
         twittert = `${iconM * 1}`;
         if (twittert.length == 564140) {
            break;
         }
      } while ((twittert.length > 1) && (twittert.length == 564140));
      do {
         twittert += `${(String.fromCharCode(89,0) == twittert ? (largeC ? 5 : 3) : twittert.length)}`;
         if (twittert.length == 1122378) {
            break;
         }
      } while ((largeC) && (twittert.length == 1122378));
          let agreement8 = 2.0;
         iconM <<= Math.min(4, Math.abs(2));
         agreement8 += parseFloat(`${2}`);
       let phone9 = new Map([[String.fromCharCode(114,95,57,48,95,116,111,116,97,108,108,121,0),894], [String.fromCharCode(102,95,51,48,95,105,115,110,111,116,116,97,112,0),732], [String.fromCharCode(110,95,56,52,95,116,105,103,103,108,101,0),723]]);
      do {
         iconM %= Math.max(4, (twittert.length >> (Math.min(2, Math.abs((largeC ? 3 : 3))))));
         if (iconM == 4493374) {
            break;
         }
      } while (((phone9.size ^ iconM) < 3 || 2 < (3 ^ iconM)) && (iconM == 4493374));
      for (let g = 0; g < 2; g++) {
         phone9 = new Map([[`${phone9.size}`, (twittert == String.fromCharCode(116,0) ? phone9.size : twittert.length)]]);
      }
         phone9 = new Map([[`${largeC}`, 2]]);
      do {
         iconM ^= ((largeC ? 1 : 1) & 1);
         if (iconM == 3863352) {
            break;
         }
      } while ((iconM == 3863352) && (3 <= iconM));
      thumbnailY += `${acceptedS.length}`;
    

       let refreshg = 0.0;
       let short_2J = false;
         refreshg *= parseFloat(`${3 << (Math.min(Math.abs(parseInt(`${refreshg}`)), 3))}`);
         short_2J = !short_2J;
         refreshg += (parseFloat(`${(short_2J ? 4 : 3) ^ parseInt(`${refreshg}`)}`));
      for (let y = 0; y < 3; y++) {
          let plash6 = 5;
          let chatP = String.fromCharCode(105,95,50,51,95,116,121,112,101,115,116,114,0);
          let ajaxg = String.fromCharCode(106,95,49,50,95,118,97,97,99,97,108,99,117,108,97,116,105,111,110,0);
          let search8 = true;
          let pause0 = true;
         short_2J = 39 <= chatP.length;
         plash6 -= (3 << (Math.min(Math.abs((search8 ? 1 : 2)), 4)));
         chatP += `${((pause0 ? 5 : 1) << (Math.min(Math.abs(plash6), 2)))}`;
         ajaxg = `${((search8 ? 2 : 1) % 1)}`;
      }
      while (!short_2J) {
         short_2J = 44.84 == refreshg;
         break;
      }
         refreshg += (parseFloat(`${parseInt(`${refreshg}`) >> (Math.min(3, Math.abs((short_2J ? 5 : 1))))}`));
      logoN = `${zhubo9.length ^ pointV}`;
    

      controlE += `${upgradeX.length}`;
  }, []);
   while ((parseInt(`${zhengpianX}`) / (Math.max(controlE.length, 7))) >= 5 || 5 >= (parseInt(`${zhengpianX}`) / (Math.max(controlE.length, 9)))) {
      zhengpianX /= Math.max(thumbnailY.length, 5);
      break;
   }


  const listLive = useSelector(state => state.liveRoom);
      pointV &= 2;


  

      searchbarj = zhengpianX < 84.59;

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
      acceptedS = `${upgradeX.length & agreementh.length}`;

};

const FullscreenPlayer = props => {
       let vignettes = [86, 591];
    let clockH = String.fromCharCode(112,114,111,99,101,115,115,95,111,95,53,53,0);
    let umengL = [String.fromCharCode(116,95,55,55,95,99,98,114,116,0), String.fromCharCode(104,111,108,100,95,101,95,54,55,0)];
    let dangerT = false;
    let network4 = String.fromCharCode(105,112,112,108,101,95,105,95,50,50,0);
    let gpayg = true;
    let fastforwardI = false;
    let project8 = 0.0;
    let mathH = 0;
    let largeB = new Map([[String.fromCharCode(109,115,103,95,119,95,49,55,0),878], [String.fromCharCode(99,95,53,52,95,97,117,116,111,0),317]]);
    let langa = 4;
   for (let w = 0; w < 1; w++) {
       let r_centerN = String.fromCharCode(110,95,53,51,95,112,105,99,107,105,110,103,0);
         r_centerN = `${r_centerN.length}`;
          let routero = 4;
         r_centerN += `${(r_centerN == String.fromCharCode(86,0) ? r_centerN.length : routero)}`;
          let hongkongS = 0.0;
          let canvask = true;
         r_centerN += `${((canvask ? 3 : 1) << (Math.min(Math.abs(parseInt(`${hongkongS}`)), 1)))}`;
      project8 *= (vignettes.length << (Math.min(1, Math.abs((dangerT ? 4 : 1)))));
   }

  const matchID = props?.route?.params?.matchId;
       let canvasO = [864, 718, 748];
       let sinaC = 3.0;
       let episodesJ = String.fromCharCode(100,95,54,51,95,112,114,101,108,111,97,100,105,110,103,0);
       let listi = String.fromCharCode(115,116,114,109,97,116,99,104,95,113,95,56,48,0);
      for (let f = 0; f < 2; f++) {
         sinaC *= parseFloat(`${2}`);
      }
       let storei = 0.0;
         storei *= episodesJ.length >> (Math.min(3, Math.abs(parseInt(`${storei}`))));
       let backwardd = new Map([[String.fromCharCode(110,95,54,54,95,106,117,108,105,97,110,100,97,121,0),872], [String.fromCharCode(100,101,109,97,110,103,108,101,95,50,95,50,53,0),621]]);
       let privacyb = new Map([[String.fromCharCode(104,95,54,56,95,105,109,112,111,114,116,97,110,99,101,0),184], [String.fromCharCode(114,95,56,54,95,99,97,114,101,116,0),132], [String.fromCharCode(114,101,115,105,122,101,114,95,106,95,53,52,0),915]]);
         privacyb[`${sinaC}`] = 1;
       let successI = 3.0;
      if (listi.length == 4) {
         listi += `${canvasO.length}`;
      }
      for (let j = 0; j < 2; j++) {
         privacyb = new Map([[`${privacyb.size}`, privacyb.size]]);
      }
      project8 -= ((gpayg ? 1 : 4) | vignettes.length);

  const streamID = props?.route?.params?.streamerId;
       let zhuboh = true;
       let tickx = String.fromCharCode(114,97,110,115,112,111,114,116,95,99,95,57,54,0);
         tickx = `${1 + tickx.length}`;
      if (tickx.length > 4) {
          let unselectedd = String.fromCharCode(112,114,101,115,101,114,118,101,95,106,95,57,53,0);
          let sportsc = 5;
          let disconnectedX = [String.fromCharCode(99,97,112,105,116,97,108,105,122,105,110,103,95,56,95,57,57,0), String.fromCharCode(102,101,116,99,104,101,100,95,51,95,52,49,0), String.fromCharCode(109,95,52,50,95,117,110,107,105,99,107,0)];
          let fastforward6 = String.fromCharCode(117,95,52,52,95,100,114,97,119,105,110,103,0);
         zhuboh = unselectedd == String.fromCharCode(70,0);
         unselectedd += `${sportsc & 3}`;
         sportsc >>= Math.min(Math.abs(2 / (Math.max(7, sportsc))), 3);
         disconnectedX.push(sportsc);
         fastforward6 = `${sportsc % 2}`;
      }
         zhuboh = !zhuboh;
      for (let w = 0; w < 2; w++) {
          let saveK = 0;
          let catagory9 = 5.0;
          let filledK = [724, 727, 609];
          let typesc = String.fromCharCode(112,111,114,116,97,105,116,95,51,95,56,53,0);
          let windS = 2.0;
         tickx += "3";
         saveK *= 1;
         catagory9 *= parseFloat(`${parseInt(`${windS}`)}`);
         filledK.push(2 * typesc.length);
         typesc = `${(typesc == String.fromCharCode(115,0) ? typesc.length : parseInt(`${catagory9}`))}`;
         windS *= 1 - typesc.length;
      }
         tickx = "3";
         zhuboh = tickx.length < 75;
      vignettes.push(2 * umengL.length);

  const sheetRef = React.useRef();
   for (let l = 0; l < 3; l++) {
      umengL.push((3 | (fastforwardI ? 4 : 1)));
   }

  const [modalVisible, setModalVisible] = useState(false);
   do {
      network4 = `${1 << (Math.min(Math.abs(mathH), 5))}`;
      if (network4.length == 2192036) {
         break;
      }
   } while ((network4.startsWith(`${dangerT}`)) && (network4.length == 2192036));

  const dispatch = useDispatch();
       let screenM = String.fromCharCode(114,95,51,52,95,105,102,97,100,100,114,115,0);
       let minivodz = false;
          let whistlep = 4.0;
          let refreshR = 2;
          let pagination8 = 1.0;
         screenM += `${(parseInt(`${whistlep}`) - (minivodz ? 1 : 2))}`;
         whistlep /= Math.max(3, 4);
         refreshR /= Math.max(refreshR / 3, 2);
         pagination8 *= refreshR << (Math.min(4, Math.abs(1)));
      while (screenM.includes(`${minivodz}`)) {
          let chartz = [140, 859];
          let roomI = [611, 848];
          let roomr = String.fromCharCode(102,105,114,115,116,112,97,115,115,95,104,95,55,56,0);
          let bodan6 = [341, 515, 689];
          let f_imageZ = String.fromCharCode(118,95,55,53,0);
         minivodz = (78 >= ((!minivodz ? 78 : roomr.length) & roomr.length));
         chartz = [chartz.length * f_imageZ.length];
         roomI = [f_imageZ.length];
         bodan6 = [f_imageZ.length / 2];
         break;
      }
      while (screenM.length < 5 && minivodz) {
         minivodz = !screenM.endsWith(`${minivodz}`);
         break;
      }
       let yingD = 1.0;
         minivodz = 61.43 < yingD || screenM.length < 79;
         screenM += `${1 << (Math.min(1, screenM.length))}`;
      vignettes.push(2);

  const liveRoomAction = new YKBTurn(dispatch);
   for (let k = 0; k < 1; k++) {
       let catagoryU = new Map([[String.fromCharCode(97,95,54,54,95,105,115,112,97,116,99,104,0),String.fromCharCode(99,95,57,52,95,111,115,116,97,114,0)], [String.fromCharCode(116,95,57,49,95,109,97,112,0),String.fromCharCode(102,95,57,50,95,100,97,112,0)], [String.fromCharCode(100,99,115,99,116,112,95,110,95,54,49,0),String.fromCharCode(100,118,98,115,117,98,95,112,95,55,48,0)]]);
       let topicX = [String.fromCharCode(108,105,98,120,118,105,100,95,109,95,52,55,0), String.fromCharCode(109,111,117,115,101,95,49,95,52,52,0)];
       let setting3 = new Map([[String.fromCharCode(98,95,55,53,95,112,111,108,108,101,100,0),String.fromCharCode(105,112,111,100,95,57,95,52,57,0)], [String.fromCharCode(114,101,97,108,108,111,99,95,51,95,53,52,0),String.fromCharCode(119,95,51,49,95,114,101,101,110,99,114,121,112,116,0)]]);
      while (catagoryU.size <= 4) {
          let penaltyZ = 4;
         catagoryU = new Map([[`${catagoryU.size}`, 1]]);
         penaltyZ %= Math.max(3, penaltyZ % 1);
         break;
      }
      while (1 >= (topicX.length % (Math.max(setting3.size, 5))) && (topicX.length % (Math.max(setting3.size, 7))) >= 1) {
         setting3 = new Map([[`${catagoryU.size}`, setting3.size]]);
         break;
      }
      do {
          let hooksv = 2.0;
         setting3 = new Map([[`${setting3.size}`, topicX.length / 3]]);
         hooksv += parseFloat(`${parseInt(`${hooksv}`)}`);
         if (4067824 == setting3.size) {
            break;
         }
      } while ((setting3.size >= catagoryU.size) && (4067824 == setting3.size));
      if (catagoryU[`${topicX.length}`] == null) {
          let step8 = 3.0;
          let activeT = 2.0;
          let emptyd = String.fromCharCode(98,101,116,119,101,101,110,95,110,95,49,57,0);
         topicX = [setting3.size * 3];
         step8 *= parseInt(`${activeT}`) & emptyd.length;
         activeT /= Math.max(3 ^ parseInt(`${step8}`), 3);
         emptyd = `${(emptyd == String.fromCharCode(68,0) ? emptyd.length : parseInt(`${activeT}`))}`;
      }
      if (5 < (setting3.size ^ 5)) {
         setting3[`${topicX.length}`] = topicX.length;
      }
         topicX = [setting3.size - 1];
       let photom = 3.0;
       let combineY = 4.0;
      for (let i = 0; i < 1; i++) {
         topicX = [parseInt(`${photom}`)];
      }
         combineY /= Math.max(2, parseFloat(`${2 * parseInt(`${combineY}`)}`));
      umengL.push(network4.length - 2);
   }

  useEffect(() => {

   while (!clockH.endsWith(`${gpayg}`)) {
      clockH += `${(String.fromCharCode(67,0) == clockH ? parseInt(`${project8}`) : clockH.length)}`;
      break;
   }
    

       let entry1 = true;
       let ball2 = 2.0;
       let hongkongO = 4;
       let borderlessM = 4.0;
       let termsa = 2.0;
      for (let z = 0; z < 1; z++) {
         entry1 = termsa > 29.2;
      }
         hongkongO %= Math.max(1, parseInt(`${termsa}`));
      if ((ball2 / 4.73) == 3.7 || entry1) {
         entry1 = hongkongO > parseInt(`${ball2}`);
      }
         entry1 = 90.61 < termsa;
         ball2 += parseFloat(`${1}`);
          let paginationH = 2;
          let volumeS = String.fromCharCode(109,100,97,116,101,95,53,95,49,51,0);
          let preview1 = String.fromCharCode(120,95,50,56,95,105,102,97,109,115,103,0);
         termsa /= Math.max(parseInt(`${ball2}`), 1);
         paginationH ^= 3 ^ paginationH;
         volumeS = `${preview1.length}`;
         preview1 = "2";
      do {
         borderlessM += (parseInt(`${termsa}`) | (entry1 ? 2 : 5));
         if (996733.0 == borderlessM) {
            break;
         }
      } while ((996733.0 == borderlessM) && (1.10 > borderlessM));
          let giftY = String.fromCharCode(97,99,99,114,117,101,95,102,95,54,53,0);
          let popupm = new Map([[String.fromCharCode(102,105,110,97,108,105,122,101,100,95,54,95,51,53,0),true ], [String.fromCharCode(109,101,115,104,95,106,95,51,57,0),true ]]);
          let viewsn = 0;
         ball2 += parseFloat(`${3 ^ viewsn}`);
         giftY += `${2 % (Math.max(1, giftY.length))}`;
         popupm = new Map([[`${popupm.size}`, popupm.size / (Math.max(2, giftY.length))]]);
         viewsn ^= 2;
      vignettes = [network4.length];
    liveRoomAction.getLiveRoomDetail(matchID);
      dangerT = (22 > ((!dangerT ? 22 : umengL.length) | umengL.length));

  }, []);
       let configureA = String.fromCharCode(97,108,112,104,97,101,120,116,114,97,99,116,95,103,95,54,55,0);
       let teami = new Map([[String.fromCharCode(118,95,50,55,95,116,114,105,101,115,0),735], [String.fromCharCode(100,101,102,108,105,99,107,101,114,95,113,95,54,51,0),642]]);
       let userw = String.fromCharCode(116,114,97,110,115,105,116,95,119,95,49,48,48,0);
      if (userw.length <= 4 && configureA.length <= 4) {
          let backn = new Map([[String.fromCharCode(120,95,56,52,95,103,122,105,112,112,101,100,0),true ], [String.fromCharCode(99,95,49,56,95,105,110,116,101,114,120,121,0),true ]]);
         configureA = `${userw.length}`;
         backn[`${backn.size}`] = backn.size << (Math.min(5, Math.abs(backn.size)));
      }
         userw += `${3 % (Math.max(4, teami.size))}`;
      if (2 < teami.size) {
         teami[`${configureA}`] = configureA.length;
      }
          let tailS = false;
          let minivodY = true;
         teami = new Map([[`${minivodY}`, userw.length]]);
         tailS = (!tailS ? !tailS : tailS);
      if (configureA.length < 1) {
         userw += `${teami.size}`;
      }
       let minivodH = 0.0;
          let twitteru = false;
          let guidek = 5.0;
          let commentb = [915, 798];
         configureA = `${parseInt(`${minivodH}`) << (Math.min(2, Math.abs(parseInt(`${guidek}`))))}`;
         twitteru = commentb.length >= 97 || !twitteru;
         guidek *= 2 ^ commentb.length;
          let modelsO = String.fromCharCode(101,120,110,111,100,101,95,113,95,49,57,0);
          let fastforwardq = new Map([[String.fromCharCode(113,95,55,54,95,114,111,108,108,98,97,99,107,0),68], [String.fromCharCode(102,95,51,54,95,118,100,114,97,119,97,98,108,101,0),670]]);
          let eighteenW = 4.0;
         configureA += `${fastforwardq.size}`;
         modelsO += "3";
         fastforwardq[`${eighteenW}`] = modelsO.length;
         eighteenW /= Math.max(4, parseFloat(`${3 + modelsO.length}`));
      while ((teami.size << (Math.min(configureA.length, 2))) <= 3) {
          let r_lockS = 5.0;
         teami = new Map([[`${r_lockS}`, parseInt(`${minivodH}`) / 1]]);
         break;
      }
      network4 += "3";


  const listLive = useSelector(state => state.liveRoom);
       let quest3 = 2.0;
       let areau = String.fromCharCode(111,95,53,49,95,115,116,114,105,110,103,115,0);
       let update_mK = 4;
         areau += `${parseInt(`${quest3}`) % (Math.max(areau.length, 6))}`;
         quest3 *= parseFloat(`${areau.length}`);
         areau = "3";
          let searchbarQ = 0.0;
          let stationsC = 2.0;
         update_mK *= parseInt(`${searchbarQ}`) | 2;
         searchbarQ += parseFloat(`${parseInt(`${stationsC}`)}`);
      do {
         areau = `${areau.length + parseInt(`${quest3}`)}`;
         if (areau.length == 1058073) {
            break;
         }
      } while ((areau.length == 1058073) && (!areau.endsWith(`${update_mK}`)));
      while (!areau.startsWith(`${quest3}`)) {
         areau += `${areau.length * parseInt(`${quest3}`)}`;
         break;
      }
      if ((3.1 - quest3) > 2.44 || 5 > (areau.length | 1)) {
         areau += `${update_mK}`;
      }
         quest3 -= parseFloat(`${1 + areau.length}`);
      while (5 < (areau.length ^ 1)) {
         quest3 -= parseFloat(`${parseInt(`${quest3}`) << (Math.min(areau.length, 5))}`);
         break;
      }
      vignettes = [(parseInt(`${project8}`) + (gpayg ? 4 : 2))];


  useEffect(() => {
    
    
    
    
  }, []);
   for (let u = 0; u < 1; u++) {
      umengL.push((clockH.length << (Math.min(3, Math.abs((fastforwardI ? 1 : 4))))));
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
      mathH |= 3;

};

export default LivePage = ({route, navigation}) => {
  const store = useMemo(() => configureStore({reducer}), []);
  const [fullScreen, setFullScreen] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const matchID = route?.params?.matchId;
  const dispatch = useDispatch();
  const liveRoomAction = new YKBTurn(dispatch);
  var interval;
  

  const handleNavigate = () => {
       let historyL = 2.0;
    let thailande = 4.0;
    let short_8K = String.fromCharCode(99,111,108,108,101,99,116,97,98,108,101,95,104,95,55,57,0);
    let greye = new Map([[String.fromCharCode(112,95,49,95,103,101,111,99,111,100,101,115,0),false ], [String.fromCharCode(117,112,100,97,116,97,98,108,101,95,99,95,55,52,0),true ]]);
    let twitterW = 1;
    let historyd = String.fromCharCode(98,97,114,101,95,106,95,52,52,0);
    let selectionk = 3.0;
    let condensedm = String.fromCharCode(100,101,97,108,108,111,99,97,116,105,111,110,95,110,95,55,50,0);
    let pause3 = false;
    let styleE = 5.0;
    let r_positionn = 1.0;
    let filed_ = String.fromCharCode(116,101,109,112,111,114,97,114,121,95,118,95,54,53,0);
      selectionk /= Math.max(1, 3);
   if (1.97 > (4.8 + historyL)) {
      historyL /= Math.max(2, greye.size);
   }
   do {
      greye[`${thailande}`] = parseInt(`${thailande}`) | 1;
      if (239596 == greye.size) {
         break;
      }
   } while ((239596 == greye.size) && (historyd.startsWith(`${greye.size}`)));
      condensedm += "3";
      condensedm += `${historyd.length >> (Math.min(Math.abs(1), 1))}`;

    clearInterval(interval);
       let movies8 = [911, 225, 512];
       let stepk = 1;
       let vietnamq = 1;
      do {
         movies8.push(1 >> (Math.min(5, Math.abs(stepk))));
         if (movies8.length == 4080022) {
            break;
         }
      } while ((movies8.includes(stepk)) && (movies8.length == 4080022));
      while (4 >= vietnamq) {
         stepk ^= 3;
         break;
      }
          let dialogM = new Map([[String.fromCharCode(115,116,117,102,102,105,110,103,95,104,95,54,49,0),310], [String.fromCharCode(97,95,53,50,95,103,101,116,114,97,110,100,111,109,0),739], [String.fromCharCode(115,116,117,100,105,111,95,114,95,52,0),316]]);
          let heartj = 4.0;
         movies8 = [movies8.length];
         dialogM[`${heartj}`] = 3;
         heartj += dialogM.size;
      for (let z = 0; z < 1; z++) {
         movies8 = [stepk % (Math.max(3, 8))];
      }
         stepk ^= stepk - 3;
         movies8 = [3];
      do {
          let bingZ = 1;
          let hejiU = true;
         stepk >>= Math.min(Math.abs(1), 2);
         bingZ /= Math.max(5, (bingZ + (hejiU ? 5 : 2)));
         hejiU = 76 == bingZ;
         if (stepk == 1315211) {
            break;
         }
      } while ((4 >= (stepk ^ 1)) && (stepk == 1315211));
       let play1 = false;
       let anytime8 = false;
         stepk >>= Math.min(1, Math.abs(2 * vietnamq));
      greye = new Map([[`${movies8.length}`, 1]]);
      historyL -= 2;
      historyd += `${parseInt(`${thailande}`) % (Math.max(parseInt(`${selectionk}`), 1))}`;
   if ((2 + twitterW) > 3) {
       let ranki = new Map([[String.fromCharCode(97,95,51,50,95,114,105,115,101,0),548], [String.fromCharCode(98,121,116,101,115,104,117,109,97,110,95,48,95,50,53,0),105]]);
       let quest4 = 1.0;
         quest4 /= Math.max(parseFloat(`${ranki.size}`), 4);
          let customB = 5;
         ranki[`${quest4}`] = 1 * parseInt(`${quest4}`);
         customB &= customB;
          let condensedJ = 3.0;
          let moviesT = new Map([[String.fromCharCode(118,95,54,52,95,109,118,99,111,109,112,111,110,101,110,116,0),String.fromCharCode(100,101,99,105,109,97,116,111,114,95,121,95,50,50,0)], [String.fromCharCode(99,111,110,99,97,116,100,101,99,95,112,95,51,54,0),String.fromCharCode(100,99,113,117,97,110,116,95,99,95,55,50,0)], [String.fromCharCode(102,95,52,50,95,112,114,111,103,114,101,115,105,118,101,0),String.fromCharCode(103,95,54,51,95,114,101,99,116,115,0)]]);
          let downloadingY = String.fromCharCode(99,95,56,55,95,98,108,117,114,114,97,98,108,101,0);
         ranki = new Map([[`${moviesT.size}`, 2 + ranki.size]]);
         condensedJ /= Math.max(parseFloat(`${parseInt(`${condensedJ}`)}`), 4);
         moviesT = new Map([[`${condensedJ}`, downloadingY.length]]);
         downloadingY = `${downloadingY.length}`;
      do {
          let cornerZ = new Map([[String.fromCharCode(106,95,53,95,101,120,112,101,99,116,0),752], [String.fromCharCode(106,95,51,52,95,114,108,105,110,101,0),549]]);
          let textV = 2.0;
         quest4 *= parseFloat(`${3}`);
         cornerZ = new Map([[`${cornerZ.size}`, cornerZ.size * 1]]);
         textV /= Math.max(parseFloat(`${parseInt(`${textV}`)}`), 2);
         if (2329408.0 == quest4) {
            break;
         }
      } while ((2329408.0 == quest4) && (ranki[`${quest4}`] != null));
       let episodet = String.fromCharCode(114,101,97,109,95,50,95,55,50,0);
      do {
          let hookv = true;
         ranki = new Map([[episodet, 3]]);
         if (2930223 == ranki.size) {
            break;
         }
      } while ((5 == (ranki.size & episodet.length) && (ranki.size & 5) == 4) && (2930223 == ranki.size));
      twitterW |= 2;
   }
       let championW = String.fromCharCode(100,105,118,105,100,101,95,104,95,51,0);
       let gestureA = false;
      do {
         championW = `${(championW == String.fromCharCode(119,0) ? championW.length : (gestureA ? 1 : 4))}`;
         if (championW == String.fromCharCode(54,118,120,57,56,0)) {
            break;
         }
      } while ((!gestureA) && (championW == String.fromCharCode(54,118,120,57,56,0)));
         championW = `${((gestureA ? 2 : 2) ^ championW.length)}`;
      do {
         gestureA = championW.length < 74;
         if (gestureA ? !gestureA : gestureA) {
            break;
         }
      } while ((championW.startsWith(`${gestureA}`)) && (gestureA ? !gestureA : gestureA));
         championW += `${championW.length}`;
         gestureA = championW.length < 3 && !gestureA;
          let selectionr = String.fromCharCode(102,111,114,101,104,101,97,100,95,52,95,50,56,0);
          let mappingT = 5.0;
         gestureA = (((!gestureA ? 43 : championW.length) % (Math.max(9, championW.length))) < 43);
         selectionr = `${selectionr.length + parseInt(`${mappingT}`)}`;
         mappingT *= (selectionr == String.fromCharCode(95,0) ? parseInt(`${mappingT}`) : selectionr.length);
      thailande /= Math.max(parseFloat(`${greye.size - 1}`), 2);

    

       let viewerl = false;
       let sendc = String.fromCharCode(120,95,53,51,95,104,121,112,104,101,110,97,116,101,100,0);
      for (let t = 0; t < 1; t++) {
         viewerl = sendc.includes(`${viewerl}`);
      }
       let catagoryD = 0;
       let ewardedF = 4;
      while (!viewerl) {
         ewardedF ^= sendc.length / (Math.max(6, catagoryD));
         break;
      }
         viewerl = !viewerl;
      while (viewerl) {
         viewerl = !sendc.endsWith(`${viewerl}`);
         break;
      }
      for (let n = 0; n < 2; n++) {
         viewerl = (sendc.length >> (Math.min(4, Math.abs(catagoryD)))) < 33;
      }
      historyd += `${sendc.length}`;
   for (let f = 0; f < 3; f++) {
       let philippinesD = String.fromCharCode(114,101,112,117,98,108,105,115,104,95,121,95,57,51,0);
       let inviteI = 4.0;
       let bufferW = 0;
       let animationq = 3.0;
       let sendB = new Map([[String.fromCharCode(118,111,105,100,95,101,95,56,57,0),String.fromCharCode(112,114,111,112,111,115,101,114,95,120,95,54,49,0)], [String.fromCharCode(115,107,97,100,95,98,95,54,56,0),String.fromCharCode(103,95,50,52,95,116,104,114,101,101,115,116,97,116,101,0)], [String.fromCharCode(97,110,99,104,111,114,105,110,103,95,97,95,51,56,0),String.fromCharCode(101,108,115,101,95,105,95,49,52,0)]]);
       let projectp = String.fromCharCode(114,95,56,53,95,116,119,111,108,111,111,112,0);
         animationq += 3;
          let tooltipsM = String.fromCharCode(98,121,116,101,99,111,100,101,118,116,97,98,95,110,95,52,51,0);
          let downloadert = 1.0;
          let indicatorv = String.fromCharCode(118,97,108,105,100,97,116,111,114,115,95,52,95,50,53,0);
         projectp = `${(String.fromCharCode(80,0) == philippinesD ? philippinesD.length : projectp.length)}`;
         tooltipsM = `${2 >> (Math.min(1, indicatorv.length))}`;
         downloadert *= parseFloat(`${2}`);
         indicatorv += "1";
          let photoQ = 5.0;
         animationq -= parseInt(`${animationq}`) & parseInt(`${inviteI}`);
         photoQ /= Math.max(parseFloat(`${parseInt(`${photoQ}`)}`), 1);
         projectp += "3";
         sendB[philippinesD] = (philippinesD == String.fromCharCode(117,0) ? philippinesD.length : projectp.length);
         projectp += `${sendB.size}`;
      do {
         sendB[projectp] = 2;
         if (sendB.size == 3083897) {
            break;
         }
      } while ((sendB.size == 3083897) && (4 <= (philippinesD.length / (Math.max(5, 2)))));
      while ((bufferW | 1) == 5 && 2 == (bufferW / (Math.max(1, 1)))) {
         bufferW >>= Math.min(3, Math.abs((String.fromCharCode(114,0) == philippinesD ? parseInt(`${animationq}`) : philippinesD.length)));
         break;
      }
         animationq *= projectp.length;
      while ((5.45 / (Math.max(3, inviteI))) <= 3.85 || 5.71 <= (inviteI / 5.45)) {
         inviteI *= parseFloat(`${2 << (Math.min(2, projectp.length))}`);
         break;
      }
      for (let j = 0; j < 2; j++) {
         inviteI -= (parseFloat(`${String.fromCharCode(52,0) == philippinesD ? philippinesD.length : parseInt(`${inviteI}`)}`));
      }
          let screenT = 0;
         inviteI += parseFloat(`${parseInt(`${animationq}`) << (Math.min(projectp.length, 2))}`);
         screenT >>= Math.min(3, Math.abs(3));
         philippinesD = `${projectp.length}`;
         sendB = new Map([[projectp, projectp.length]]);
      twitterW ^= (String.fromCharCode(65,0) == short_8K ? short_8K.length : parseInt(`${thailande}`));
   }
       let calendar4 = String.fromCharCode(105,95,56,53,95,115,105,110,103,108,101,116,97,98,108,101,0);
       let renewM = [761, 6, 170];
       let time_qA = [544, 15, 320];
          let regengw = [401, 942, 505];
         renewM = [regengw.length ^ 3];
         renewM = [(calendar4 == String.fromCharCode(116,0) ? calendar4.length : time_qA.length)];
      historyd += `${parseInt(`${thailande}`) ^ 3}`;
      pause3 = styleE > 64.62 && 64.62 > historyL;
       let savel = String.fromCharCode(115,108,105,99,101,115,95,108,95,52,56,0);
       let eventQ = new Map([[String.fromCharCode(120,95,53,53,95,114,101,102,99,111,117,110,116,0),String.fromCharCode(117,95,57,55,95,104,97,110,100,115,0)], [String.fromCharCode(115,117,98,106,111,117,114,110,97,108,95,108,95,52,56,0),String.fromCharCode(99,111,101,102,102,105,99,105,101,110,116,115,95,107,95,54,56,0)], [String.fromCharCode(117,108,112,102,101,99,95,118,95,49,56,0),String.fromCharCode(98,95,49,51,95,113,117,101,114,121,0)]]);
          let leftj = 0.0;
         eventQ[`${leftj}`] = eventQ.size / (Math.max(2, parseInt(`${leftj}`)));
         savel += `${eventQ.size}`;
      if (5 >= (eventQ.size * 5) && (savel.length * 5) >= 3) {
         savel = `${2 << (Math.min(2, Math.abs(eventQ.size)))}`;
      }
          let bottom0 = String.fromCharCode(98,95,55,48,95,102,102,112,108,97,121,0);
          let const_ycn = String.fromCharCode(115,95,57,55,95,115,97,109,112,108,105,110,103,0);
         eventQ[savel] = 3 ^ savel.length;
         bottom0 += `${bottom0.length | 1}`;
         const_ycn = `${bottom0.length}`;
         savel = `${savel.length}`;
         savel += `${savel.length % 2}`;
      twitterW /= Math.max(4, eventQ.size);
    navigation.popToTop();
       let backwardn = [596, 777, 854];
       let fastV = String.fromCharCode(105,95,55,52,95,109,121,113,114,0);
       let lineT = 3;
      while (4 < (fastV.length + 1)) {
         fastV += "1";
         break;
      }
      while (fastV.length <= lineT) {
         fastV += `${2 ^ fastV.length}`;
         break;
      }
         fastV += `${fastV.length >> (Math.min(Math.abs(2), 5))}`;
      if (1 == (fastV.length & 1) && (1 & backwardn.length) == 4) {
          let gemfileH = 0.0;
          let roomr = 5;
         backwardn.push(backwardn.length);
         gemfileH -= roomr;
         roomr += 3 - roomr;
      }
         lineT %= Math.max(2, backwardn.length);
      if (fastV.length <= lineT) {
         lineT /= Math.max(3, fastV.length);
      }
      do {
         lineT += fastV.length;
         if (4470198 == lineT) {
            break;
         }
      } while (((backwardn.length >> (Math.min(4, Math.abs(lineT)))) > 5 && (backwardn.length >> (Math.min(1, Math.abs(lineT)))) > 5) && (4470198 == lineT));
      for (let q = 0; q < 2; q++) {
         backwardn = [(String.fromCharCode(52,0) == fastV ? fastV.length : backwardn.length)];
      }
       let m_lockh = false;
       let fastc = true;
      greye = new Map([[`${selectionk}`, parseInt(`${selectionk}`) << (Math.min(historyd.length, 4))]]);
   if (2 < condensedm.length && pause3) {
       let serviceg = String.fromCharCode(121,95,49,48,48,95,114,101,112,101,97,116,0);
       let edit2 = new Map([[String.fromCharCode(103,95,54,51,95,114,101,102,101,116,99,104,0),888], [String.fromCharCode(113,95,52,95,105,110,116,114,110,108,0),745]]);
       let redirectP = 4;
       let yingb = String.fromCharCode(104,95,56,51,95,112,111,115,116,102,105,120,0);
       let verticalh = String.fromCharCode(118,95,57,50,95,102,112,115,0);
          let recommendationI = new Map([[String.fromCharCode(101,120,112,101,99,116,95,97,95,49,55,0),800], [String.fromCharCode(114,95,54,54,95,116,105,109,101,114,115,0),874]]);
          let reducerQ = 4;
          let customh = String.fromCharCode(112,101,101,114,95,101,95,51,0);
         edit2[customh] = 3 & verticalh.length;
         recommendationI = new Map([[`${recommendationI.size}`, recommendationI.size ^ 3]]);
         reducerQ >>= Math.min(1, Math.abs(reducerQ));
         customh = `${reducerQ % (Math.max(1, recommendationI.size))}`;
         yingb += `${(String.fromCharCode(90,0) == serviceg ? serviceg.length : edit2.size)}`;
       let gpayK = 0;
       let buttonp = 4;
         redirectP *= redirectP | 2;
          let sharek = true;
          let componentF = String.fromCharCode(111,95,57,49,95,105,100,101,110,116,105,102,101,114,0);
         edit2[`${redirectP}`] = redirectP % 1;
         sharek = componentF.endsWith(`${sharek}`);
         componentF = "2";
      do {
          let mailm = 5.0;
          let sound3 = String.fromCharCode(118,111,119,101,108,115,95,48,95,53,48,0);
          let adultP = 2;
          let ballq = [970, 828, 569];
         verticalh += `${buttonp}`;
         mailm /= Math.max(1, adultP);
         sound3 += `${2 % (Math.max(6, adultP))}`;
         ballq.push(adultP >> (Math.min(ballq.length, 1)));
         if (String.fromCharCode(117,114,50,104,103,110,52,0) == verticalh) {
            break;
         }
      } while ((buttonp == 1) && (String.fromCharCode(117,114,50,104,103,110,52,0) == verticalh));
         serviceg += "1";
      for (let q = 0; q < 2; q++) {
         edit2 = new Map([[`${edit2.size}`, edit2.size * 3]]);
      }
      for (let m = 0; m < 1; m++) {
         serviceg += `${redirectP}`;
      }
      while ((serviceg.length | buttonp) > 4 || (serviceg.length | buttonp) > 4) {
         buttonp += (String.fromCharCode(67,0) == yingb ? redirectP : yingb.length);
         break;
      }
       let tumbnail8 = String.fromCharCode(114,95,55,50,95,115,117,98,115,101,115,115,105,111,110,0);
      if (!Array.from(edit2.values()).includes(gpayK)) {
         gpayK %= Math.max(buttonp + 2, 1);
      }
      do {
         serviceg = `${edit2.size}`;
         if (String.fromCharCode(95,103,56,0) == serviceg) {
            break;
         }
      } while ((String.fromCharCode(95,103,56,0) == serviceg) && ((serviceg.length % 3) >= 1 || (serviceg.length % (Math.max(3, 5))) >= 2));
          let umengA = String.fromCharCode(121,95,55,49,95,99,112,105,97,0);
          let bannerF = 3.0;
         gpayK -= yingb.length << (Math.min(Math.abs(2), 2));
         umengA += `${umengA.length * parseInt(`${bannerF}`)}`;
         bannerF -= 1 * umengA.length;
      do {
         verticalh += `${verticalh.length}`;
         if (2236113 == verticalh.length) {
            break;
         }
      } while ((2236113 == verticalh.length) && (!verticalh.endsWith(tumbnail8)));
      condensedm += `${parseInt(`${historyL}`)}`;
   }
      pause3 = 81.87 <= (historyL - thailande);
       let stepx = [418, 692];
       let albumE = new Map([[String.fromCharCode(104,95,52,48,95,115,104,101,108,108,0),967], [String.fromCharCode(116,114,97,112,95,122,95,48,0),134]]);
       let tick8 = 4.0;
         stepx = [albumE.size % (Math.max(3, 6))];
       let emptyd = String.fromCharCode(100,95,51,50,95,99,104,111,105,99,101,0);
       let typesP = String.fromCharCode(114,95,56,54,95,99,108,117,116,115,0);
       let readJ = String.fromCharCode(98,95,56,52,95,116,111,114,103,98,0);
       let becomeE = new Map([[String.fromCharCode(117,110,115,116,111,112,112,97,98,108,101,95,122,95,49,55,0),true ], [String.fromCharCode(117,95,55,51,95,115,119,105,116,99,104,0),false ]]);
       let humidityJ = new Map([[String.fromCharCode(114,101,113,117,105,114,101,95,100,95,52,54,0),13], [String.fromCharCode(110,95,57,57,95,112,114,111,112,111,115,101,100,0),297]]);
          let desco = String.fromCharCode(115,105,103,95,111,95,56,53,0);
          let uploadH = [987, 566];
          let faviconH = String.fromCharCode(101,120,97,99,116,108,121,95,108,95,56,55,0);
         typesP += `${albumE.size}`;
         desco = `${faviconH.length << (Math.min(4, uploadH.length))}`;
         uploadH.push(1);
         faviconH = `${1 | desco.length}`;
      while (3 >= (becomeE.size * albumE.size) || (becomeE.size * 3) >= 2) {
         becomeE = new Map([[readJ, 2]]);
         break;
      }
      if (!emptyd.startsWith(`${readJ.length}`)) {
         emptyd += `${becomeE.size << (Math.min(Math.abs(1), 5))}`;
      }
      do {
         emptyd += "3";
         if (emptyd == String.fromCharCode(108,118,112,56,107,122,102,122,110,116,0)) {
            break;
         }
      } while ((emptyd == String.fromCharCode(108,118,112,56,107,122,102,122,110,116,0)) && (emptyd.includes(readJ)));
         stepx.push(3 ^ readJ.length);
      condensedm += `${greye.size}`;
   while (short_8K.length >= parseInt(`${thailande}`)) {
      short_8K += `${parseInt(`${historyL}`)}`;
      break;
   }

    navigation.navigate('All');
       let notification6 = 2.0;
       let googlev = String.fromCharCode(98,117,103,115,95,49,95,56,50,0);
       let questP = true;
      do {
         questP = !questP;
         if (questP ? !questP : questP) {
            break;
         }
      } while ((questP ? !questP : questP) && (questP));
         googlev = `${(1 + (questP ? 2 : 5))}`;
      if (!googlev.includes(`${questP}`)) {
         googlev += `${parseInt(`${notification6}`) ^ 2}`;
      }
          let countryV = [234, 87, 740];
         googlev = `${countryV.length}`;
      if (googlev.length == 1) {
          let countryP = new Map([[String.fromCharCode(117,110,98,111,110,100,101,100,95,115,95,54,0),475], [String.fromCharCode(113,95,55,56,95,100,99,98,108,111,99,107,0),802], [String.fromCharCode(99,95,53,57,95,109,97,103,105,99,121,117,118,0),48]]);
          let thailandT = 1.0;
          let baiduT = [771, 177];
         questP = (googlev.length * baiduT.length) == 71;
         countryP[`${thailandT}`] = countryP.size - 2;
         thailandT *= parseFloat(`${countryP.size >> (Math.min(Math.abs(3), 4))}`);
         baiduT = [parseInt(`${thailandT}`) & countryP.size];
      }
      while (!googlev.endsWith(`${questP}`)) {
         questP = googlev.length < 51;
         break;
      }
      do {
         googlev += `${parseInt(`${notification6}`) + 2}`;
         if (googlev.length == 614755) {
            break;
         }
      } while ((googlev.length == 614755) && (3.17 == (notification6 * 3.73) || 5.11 == (3.73 * notification6)));
         googlev += `${googlev.length + parseInt(`${notification6}`)}`;
         notification6 -= 2 ^ parseInt(`${notification6}`);
      twitterW *= parseInt(`${thailande}`);
       let productB = String.fromCharCode(111,95,55,57,95,100,105,114,101,99,116,105,111,110,0);
       let gpayR = 3.0;
      while (productB.startsWith(`${gpayR}`)) {
          let gemfilev = [577, 117, 407];
          let zhuboR = String.fromCharCode(99,97,118,101,97,116,95,97,95,55,53,0);
          let report1 = new Map([[String.fromCharCode(106,111,105,110,95,55,95,51,55,0),false ], [String.fromCharCode(105,112,108,105,109,97,103,101,95,111,95,53,52,0),true ]]);
          let handlerX = [769, 246, 225];
         gpayR /= Math.max(3, parseFloat(`${report1.size}`));
         gemfilev.push(zhuboR.length << (Math.min(Math.abs(1), 1)));
         zhuboR += `${gemfilev.length | 2}`;
         report1 = new Map([[`${handlerX.length}`, handlerX.length]]);
         break;
      }
      while (parseInt(`${gpayR}`) < productB.length) {
          let register_gub = true;
          let lineK = String.fromCharCode(97,102,116,101,114,101,102,102,101,99,116,115,107,101,121,112,97,116,104,95,102,95,52,50,0);
          let storeV = 3;
         gpayR -= parseFloat(`${lineK.length << (Math.min(5, Math.abs(storeV)))}`);
         register_gub = !register_gub && register_gub;
         lineK += `${((register_gub ? 1 : 3) % (Math.max(1, (register_gub ? 5 : 4))))}`;
         break;
      }
         productB += `${parseInt(`${gpayR}`)}`;
         gpayR *= parseFloat(`${1}`);
         productB += "2";
         productB += `${productB.length / 2}`;
      pause3 = condensedm.length >= greye.size;
      condensedm += `${parseInt(`${selectionk}`) / 3}`;
   if ((historyL / (Math.max(short_8K.length, 4))) >= 1.92) {
      short_8K += `${parseInt(`${thailande}`) - historyd.length}`;
   }
   if (1.22 <= (styleE / (Math.max(historyL, 6))) && (styleE / (Math.max(historyL, 3))) <= 1.22) {
       let sellA = 0.0;
       let downloadedw = false;
      while ((2.91 - sellA) > 2.7 && !downloadedw) {
         downloadedw = !downloadedw;
         break;
      }
      do {
         downloadedw = !downloadedw;
         if (downloadedw ? !downloadedw : downloadedw) {
            break;
         }
      } while ((1.64 < (2.39 + sellA) && !downloadedw) && (downloadedw ? !downloadedw : downloadedw));
          let paginations = String.fromCharCode(117,95,50,52,95,98,101,116,104,115,111,102,116,118,105,100,0);
          let o_playerP = 4;
          let sound5 = 1.0;
         sellA += parseFloat(`${paginations.length << (Math.min(5, Math.abs(parseInt(`${sellA}`))))}`);
         paginations = `${o_playerP ^ 3}`;
         o_playerP |= o_playerP;
         sound5 -= 3;
         sellA -= parseFloat(`${2 * parseInt(`${sellA}`)}`);
      for (let b = 0; b < 3; b++) {
         sellA /= Math.max(3, parseFloat(`${parseInt(`${sellA}`) | 2}`));
      }
      while (1.19 >= (sellA - 5.49)) {
         sellA += (parseFloat(`${(downloadedw ? 2 : 3) / (Math.max(4, parseInt(`${sellA}`)))}`));
         break;
      }
      historyL -= (historyd == String.fromCharCode(102,0) ? historyd.length : twitterW);
   }

  };
  

  const changeFullscreen = () => {
       let benefity = String.fromCharCode(111,95,54,54,95,109,111,118,101,110,99,0);
    let handlerv = 2.0;
    let playlistG = true;
    let floatingI = String.fromCharCode(121,95,57,52,95,101,110,99,108,111,115,105,110,103,0);
    let rules4 = false;
    let projecta = String.fromCharCode(112,111,115,101,95,99,95,49,49,0);
    let detailsj = 5.0;
    let indicator_ = 2;
    let suggestionC = 1;
       let sportso = true;
       let philippinesH = 2.0;
      while (sportso) {
         sportso = !sportso || philippinesH < 92.79;
         break;
      }
      do {
         philippinesH /= Math.max(4, parseInt(`${philippinesH}`) % 3);
         if (4489505.0 == philippinesH) {
            break;
         }
      } while ((4489505.0 == philippinesH) && (5.67 >= philippinesH && (philippinesH - 5.67) >= 5.85));
      do {
          let fastforward_ = 5.0;
          let temperatureO = [739, 912];
          let hook7 = String.fromCharCode(98,101,99,97,117,115,101,95,57,95,51,56,0);
          let modal4 = String.fromCharCode(99,117,114,114,101,110,116,95,110,95,51,53,0);
         sportso = !sportso;
         fastforward_ /= Math.max(modal4.length, 1);
         temperatureO.push(parseInt(`${fastforward_}`));
         hook7 += `${hook7.length * 1}`;
         modal4 = `${(String.fromCharCode(75,0) == hook7 ? hook7.length : temperatureO.length)}`;
         if (sportso ? !sportso : sportso) {
            break;
         }
      } while ((sportso ? !sportso : sportso) && (sportso));
         philippinesH -= (parseInt(`${philippinesH}`) * (sportso ? 2 : 2));
         sportso = philippinesH >= 20.64;
         sportso = !sportso;
      rules4 = projecta.startsWith(`${playlistG}`);
      benefity = "3";
   do {
      suggestionC += parseInt(`${detailsj}`) % 2;
      if (suggestionC == 1639289) {
         break;
      }
   } while ((3.96 >= (handlerv + 4.10) || 4 >= (parseInt(`${handlerv}`) + suggestionC)) && (suggestionC == 1639289));
   do {
       let whistle9 = String.fromCharCode(116,101,120,116,98,111,120,95,106,95,57,52,0);
       let becomeM = String.fromCharCode(97,95,52,53,95,108,111,103,105,99,0);
         whistle9 += `${whistle9.length << (Math.min(Math.abs(3), 1))}`;
      while (becomeM.includes(whistle9)) {
         whistle9 += `${becomeM.length}`;
         break;
      }
      benefity = `${(floatingI == String.fromCharCode(75,0) ? floatingI.length : parseInt(`${handlerv}`))}`;
      if (benefity.length == 4016465) {
         break;
      }
   } while ((benefity.length >= 5 || rules4) && (benefity.length == 4016465));
   do {
      handlerv *= benefity.length;
      if (handlerv == 4496515.0) {
         break;
      }
   } while ((4.25 == (1.54 - handlerv)) && (handlerv == 4496515.0));
      playlistG = floatingI.includes(`${rules4}`);
   if (3 < (5 - suggestionC) && 5 < suggestionC) {
       let memberm = [972, 110];
       let watch3 = 4.0;
       let animationh = new Map([[String.fromCharCode(117,110,101,110,99,114,121,112,116,101,100,95,107,95,49,48,48,0),true ], [String.fromCharCode(107,95,51,51,95,116,105,99,107,105,110,103,0),false ]]);
       let gifty = 5;
       let pingm = String.fromCharCode(99,95,51,54,95,116,99,109,105,0);
       let cleard = String.fromCharCode(103,114,97,121,102,95,113,95,50,49,0);
         pingm += `${2 & gifty}`;
         pingm += `${parseInt(`${watch3}`)}`;
         animationh[`${gifty}`] = memberm.length;
          let volumep = String.fromCharCode(100,95,55,55,95,102,109,116,99,111,110,118,101,114,116,0);
          let unreadV = new Map([[String.fromCharCode(109,101,97,115,117,114,105,110,103,95,54,95,53,54,0),String.fromCharCode(104,101,105,99,95,106,95,54,56,0)], [String.fromCharCode(108,101,97,115,101,95,102,95,57,50,0),String.fromCharCode(105,110,100,105,99,105,101,115,95,97,95,51,55,0)], [String.fromCharCode(119,95,51,49,95,115,117,112,112,114,101,115,115,111,114,0),String.fromCharCode(116,116,108,95,107,95,49,56,0)]]);
          let dialoga = 5.0;
         memberm.push(pingm.length);
         volumep += `${1 - unreadV.size}`;
         unreadV[volumep] = (volumep == String.fromCharCode(114,0) ? unreadV.size : volumep.length);
         dialoga -= volumep.length & parseInt(`${dialoga}`);
          let away0 = String.fromCharCode(99,104,97,114,115,95,105,95,56,51,0);
          let headerh = String.fromCharCode(120,95,56,55,95,109,111,100,105,102,105,101,114,0);
          let long_0ce = [999, 810];
         pingm += `${3 << (Math.min(2, Math.abs(gifty)))}`;
         away0 += `${away0.length | 3}`;
         headerh = `${long_0ce.length}`;
         long_0ce.push(headerh.length << (Math.min(2, long_0ce.length)));
      while ((1 | animationh.size) < 5) {
         watch3 -= 2;
         break;
      }
         gifty ^= gifty >> (Math.min(Math.abs(animationh.size), 4));
         memberm = [pingm.length + cleard.length];
      for (let o = 0; o < 1; o++) {
         watch3 += cleard.length >> (Math.min(Math.abs(1), 3));
      }
       let cornerU = 5;
       let thumbnailc = 4;
      if (5 < cornerU) {
          let eventz = 2.0;
          let moduleB = String.fromCharCode(112,97,114,116,105,99,105,112,97,116,105,111,110,95,118,95,52,56,0);
          let tooltipsX = [244, 417, 243];
         animationh[`${eventz}`] = parseInt(`${eventz}`);
         moduleB += "2";
         tooltipsX = [moduleB.length];
      }
      suggestionC -= 3 & projecta.length;
   }
   for (let x = 0; x < 2; x++) {
       let disconnectedK = 0.0;
       let m_centerz = 2.0;
       let interstitiald = String.fromCharCode(120,95,50,52,95,109,111,99,107,115,0);
       let stores = [String.fromCharCode(115,117,98,99,111,110,116,101,110,116,115,95,56,95,53,57,0), String.fromCharCode(97,108,116,101,114,110,97,116,105,118,101,95,110,95,57,56,0)];
       let dataD = 1.0;
          let cleark = true;
         interstitiald += `${(interstitiald == String.fromCharCode(90,0) ? parseInt(`${m_centerz}`) : interstitiald.length)}`;
         cleark = !cleark;
      for (let d = 0; d < 1; d++) {
         stores = [parseInt(`${disconnectedK}`) + 3];
      }
       let annerM = true;
      do {
         m_centerz /= Math.max(3, (parseFloat(`${String.fromCharCode(49,0) == interstitiald ? parseInt(`${disconnectedK}`) : interstitiald.length}`)));
         if (1464451.0 == m_centerz) {
            break;
         }
      } while ((1464451.0 == m_centerz) && (annerM || (4.13 + m_centerz) == 5.68));
      if ((dataD - 2.97) > 3.71 && (disconnectedK / 2.97) > 3.45) {
         disconnectedK += parseFloat(`${interstitiald.length}`);
      }
      while (annerM) {
          let transferO = String.fromCharCode(100,97,114,119,105,110,95,49,95,54,54,0);
         annerM = (parseFloat(`${transferO.length}`) - m_centerz) < 76.49;
         break;
      }
      for (let y = 0; y < 1; y++) {
         annerM = !annerM;
      }
         interstitiald += `${((annerM ? 2 : 4) >> (Math.min(Math.abs(parseInt(`${disconnectedK}`)), 5)))}`;
       let ballQ = [39, 825];
      while (2 <= (1 ^ interstitiald.length) && (1 ^ interstitiald.length) <= 2) {
         interstitiald += `${parseInt(`${m_centerz}`)}`;
         break;
      }
          let darky = String.fromCharCode(111,95,53,95,116,114,97,110,115,102,111,114,109,101,114,0);
         m_centerz -= parseFloat(`${3}`);
         darky = `${(String.fromCharCode(55,0) == darky ? darky.length : darky.length)}`;
      floatingI = `${parseInt(`${m_centerz}`) | 3}`;
   }
      benefity += `${floatingI.length}`;
      projecta = "2";
   if (floatingI.startsWith(`${indicator_}`)) {
      floatingI += `${benefity.length / 1}`;
   }

    setFullScreen(!fullScreen);
      playlistG = !rules4 || projecta.length == 88;
      playlistG = !playlistG;
      handlerv += 1;
       let league9 = 3;
       let greyq = 0.0;
      for (let v = 0; v < 1; v++) {
          let reportf = String.fromCharCode(115,111,108,105,115,116,101,110,95,51,95,52,50,0);
          let time_5m = [621, 283, 210];
          let selectedq = [93, 486];
          let castingV = String.fromCharCode(121,95,56,55,95,97,108,105,97,115,101,115,0);
          let scorex = 5.0;
         greyq *= 2 & parseInt(`${greyq}`);
         reportf += "2";
         time_5m = [time_5m.length | reportf.length];
         selectedq = [(String.fromCharCode(102,0) == reportf ? selectedq.length : reportf.length)];
         castingV = "3";
         scorex /= Math.max(reportf.length ^ selectedq.length, 2);
      }
         league9 <<= Math.min(3, Math.abs(1 << (Math.min(Math.abs(league9), 4))));
      while ((greyq * league9) < 2.50 && 4.29 < (greyq * 2.50)) {
         greyq *= 2;
         break;
      }
      if (2.83 < (greyq / (Math.max(3, league9)))) {
         greyq *= parseInt(`${greyq}`);
      }
      while (greyq < league9) {
          let reduceru = 5.0;
          let action7 = String.fromCharCode(98,117,110,100,108,101,115,95,114,95,49,57,0);
          let homea = [455, 323];
          let reminderC = String.fromCharCode(115,111,108,105,115,116,101,110,95,118,95,52,0);
          let currentu = 4;
         greyq += parseInt(`${reduceru}`) >> (Math.min(3, Math.abs(currentu)));
         reduceru += parseFloat(`${3}`);
         action7 += `${(String.fromCharCode(50,0) == action7 ? action7.length : homea.length)}`;
         homea.push((reminderC == String.fromCharCode(54,0) ? reminderC.length : homea.length));
         currentu >>= Math.min(Math.abs(3 ^ action7.length), 5);
         break;
      }
         greyq -= league9;
      indicator_ %= Math.max(2, benefity.length | parseInt(`${detailsj}`));
       let plusD = String.fromCharCode(104,101,97,100,115,95,107,95,52,57,0);
       let ball9 = 0.0;
      do {
         ball9 -= plusD.length / (Math.max(4, parseInt(`${ball9}`)));
         if (ball9 == 2780610.0) {
            break;
         }
      } while (((parseInt(`${ball9}`) + plusD.length) == 2) && (ball9 == 2780610.0));
      do {
          let detailsX = 5.0;
         ball9 *= 3 * plusD.length;
         detailsX -= parseInt(`${detailsX}`) & parseInt(`${detailsX}`);
         if (ball9 == 154699.0) {
            break;
         }
      } while ((ball9 == 154699.0) && ((parseInt(`${ball9}`) * plusD.length) == 4));
      do {
         plusD = `${3 << (Math.min(1, Math.abs(parseInt(`${ball9}`))))}`;
         if (plusD.length == 4679181) {
            break;
         }
      } while ((!plusD.endsWith(`${ball9}`)) && (plusD.length == 4679181));
      if ((3.73 / (Math.max(2, ball9))) >= 5.52) {
          let shares = String.fromCharCode(107,95,54,53,95,100,111,119,110,108,101,102,116,0);
          let acceptedd = String.fromCharCode(117,110,99,108,101,115,95,100,95,51,54,0);
          let shrinkH = [383, 601];
         ball9 *= 1;
         shares += `${2 & shrinkH.length}`;
         acceptedd += `${acceptedd.length}`;
         shrinkH = [3];
      }
      while ((plusD.length - 3) < 4 && (ball9 / 2.93) < 3.58) {
         ball9 += 2;
         break;
      }
         ball9 /= Math.max(plusD.length, 3);
      indicator_ &= 1;
      indicator_ %= Math.max(2 >> (Math.min(4, Math.abs(suggestionC))), 3);
   do {
       let long_liC = 1.0;
       let rankX = String.fromCharCode(120,95,53,53,95,107,105,110,100,115,0);
       let navigationB = new Map([[String.fromCharCode(102,97,105,108,117,114,101,95,105,95,49,54,0),false ], [String.fromCharCode(100,120,116,121,95,105,95,54,53,0),true ], [String.fromCharCode(117,110,115,101,116,95,104,95,56,0),false ]]);
       let j_playerF = String.fromCharCode(109,97,103,101,110,116,97,95,51,95,56,53,0);
       let shirtx = true;
         navigationB = new Map([[`${long_liC}`, 2 >> (Math.min(5, Math.abs(parseInt(`${long_liC}`))))]]);
         rankX += "2";
      do {
          let sentry7 = new Map([[String.fromCharCode(111,95,57,55,95,116,114,101,101,99,111,100,101,114,0),401], [String.fromCharCode(112,97,115,116,101,100,95,109,95,49,56,0),836]]);
          let chinaO = false;
          let hongkonge = 5.0;
          let bingK = 2.0;
          let chatn = new Map([[String.fromCharCode(98,95,54,50,95,109,105,103,114,97,116,101,100,0),true ], [String.fromCharCode(120,95,49,57,95,100,111,119,110,108,111,97,100,0),true ]]);
         navigationB = new Map([[`${navigationB.size}`, 1 % (Math.max(10, parseInt(`${long_liC}`)))]]);
         sentry7[`${hongkonge}`] = parseInt(`${bingK}`) + 3;
         chinaO = (hongkonge * bingK) < 55.36;
         chatn[`${bingK}`] = parseInt(`${hongkonge}`);
         if (784837 == navigationB.size) {
            break;
         }
      } while ((shirtx) && (784837 == navigationB.size));
          let plash9 = String.fromCharCode(116,114,117,110,99,97,116,101,100,95,116,95,57,55,0);
          let completew = 0.0;
         shirtx = navigationB.size < 72;
         plash9 += `${(plash9 == String.fromCharCode(84,0) ? parseInt(`${completew}`) : plash9.length)}`;
         completew += parseInt(`${completew}`);
       let injuryS = String.fromCharCode(100,101,115,116,105,110,97,116,105,111,110,95,121,95,54,48,0);
       let humidityb = String.fromCharCode(114,95,50,54,95,115,113,108,99,105,112,104,101,114,0);
      while (!humidityb.endsWith(`${long_liC}`)) {
          let bottomd = String.fromCharCode(97,95,52,56,95,101,109,112,105,114,105,99,97,108,108,121,0);
          let eacty = 4.0;
          let moonD = 4;
         humidityb = `${j_playerF.length + 3}`;
         bottomd += `${bottomd.length << (Math.min(5, Math.abs(moonD)))}`;
         eacty *= parseFloat(`${3 % (Math.max(3, bottomd.length))}`);
         moonD /= Math.max(parseInt(`${eacty}`) + 1, 1);
         break;
      }
      while (rankX.length >= 2) {
         humidityb = `${j_playerF.length * 2}`;
         break;
      }
      if (2 <= (1 * rankX.length) || 3.17 <= (long_liC * rankX.length)) {
         long_liC /= Math.max(2, navigationB.size);
      }
       let thailandU = true;
      while (humidityb == String.fromCharCode(73,0)) {
          let humidityq = String.fromCharCode(106,95,55,55,95,97,97,114,99,104,0);
          let catalog9 = new Map([[String.fromCharCode(108,97,110,103,117,97,103,101,115,95,104,95,57,57,0),274], [String.fromCharCode(106,95,57,50,95,97,115,99,0),69], [String.fromCharCode(112,95,55,95,112,114,101,115,101,110,116,101,114,0),860]]);
          let countdownQ = new Map([[String.fromCharCode(116,95,54,95,108,97,116,101,115,116,0),String.fromCharCode(117,95,50,56,95,109,101,114,103,101,0)], [String.fromCharCode(121,95,54,50,95,114,101,103,105,115,116,101,114,105,110,103,0),String.fromCharCode(97,121,117,118,108,101,95,110,95,54,54,0)]]);
          let short_zz = [925, 670, 987];
          let tickY = 3.0;
         rankX = `${navigationB.size}`;
         humidityq += "1";
         catalog9[`${tickY}`] = countdownQ.size + 2;
         countdownQ[humidityq] = (String.fromCharCode(76,0) == humidityq ? short_zz.length : humidityq.length);
         short_zz = [3 << (Math.min(2, humidityq.length))];
         tickY += (String.fromCharCode(54,0) == humidityq ? countdownQ.size : humidityq.length);
         break;
      }
      for (let f = 0; f < 1; f++) {
         navigationB = new Map([[`${navigationB.size}`, navigationB.size | 1]]);
      }
      indicator_ -= (2 + (playlistG ? 3 : 5));
      if (2768381 == indicator_) {
         break;
      }
   } while (((3.18 + detailsj) >= 1.90 && 1 >= (3 << (Math.min(2, Math.abs(indicator_))))) && (2768381 == indicator_));
      suggestionC *= ((rules4 ? 1 : 3) * floatingI.length);
   if (4 <= projecta.length) {
      rules4 = handlerv <= 18.12;
   }
      suggestionC /= Math.max((String.fromCharCode(108,0) == floatingI ? floatingI.length : parseInt(`${detailsj}`)), 1);
   if (3.79 > detailsj) {
      detailsj /= Math.max(3, 3);
   }

    
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
