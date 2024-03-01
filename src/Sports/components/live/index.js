import React, {useEffect, useState, useMemo} from 'react';

import {View} from 'react-native';
import styles from './yys_gpay_roboto';
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
import yys_Singapore from './action';
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
       let buildX = 2.0;
    let thumbnailx = [40, 861];
    let f_centerg = true;
    let plusO = [String.fromCharCode(119,95,52,51,95,110,97,118,105,103,97,116,105,111,110,98,97,114,0), String.fromCharCode(98,117,116,116,101,114,102,108,105,101,115,95,98,95,50,52,0), String.fromCharCode(118,95,53,54,95,97,99,99,117,109,117,108,97,116,111,114,0)];
    let package_nw = String.fromCharCode(108,95,53,56,95,104,97,114,101,0);
    let apps8 = 1;
    let libruntimeexecutorM = String.fromCharCode(111,95,52,52,95,102,111,114,105,0);
    let typinga = [String.fromCharCode(110,105,101,108,115,97,100,100,95,51,95,49,52,0), String.fromCharCode(102,95,52,54,95,119,114,105,116,101,99,111,112,121,0)];
    let macauV = new Map([[String.fromCharCode(114,114,111,114,95,100,95,52,54,0),false ], [String.fromCharCode(105,110,116,101,114,105,116,101,109,95,111,95,54,57,0),false ], [String.fromCharCode(116,95,57,57,95,109,99,108,109,115,0),true ]]);
    let temph = String.fromCharCode(121,95,50,95,115,112,101,108,108,0);
   for (let b = 0; b < 3; b++) {
       let settings3 = 0.0;
      while (settings3 <= 2.70) {
          let selectioni = 0;
          let tickc = 3.0;
          let step9 = String.fromCharCode(103,95,55,51,95,116,114,99,0);
         settings3 *= parseFloat(`${step9.length}`);
         selectioni >>= Math.min(Math.abs(1), 1);
         tickc *= parseInt(`${tickc}`);
         step9 += `${parseInt(`${tickc}`) - 3}`;
         break;
      }
         settings3 += parseFloat(`${parseInt(`${settings3}`)}`);
      while ((3.97 / (Math.max(7, settings3))) < 5.84 || 3.54 < (3.97 / (Math.max(7, settings3)))) {
          let e_managerf = [883, 969];
          let otherE = [249, 32, 623];
          let libreactnativeblobz = 1.0;
          let playlistJ = [510, 490, 685];
          let libflipperL = String.fromCharCode(115,99,104,117,110,99,107,95,48,95,56,57,0);
         settings3 -= parseFloat(`${otherE.length | e_managerf.length}`);
         e_managerf.push(parseInt(`${libreactnativeblobz}`) % 3);
         otherE = [parseInt(`${libreactnativeblobz}`) / 1];
         playlistJ.push(parseInt(`${libreactnativeblobz}`));
         libflipperL += "3";
         break;
      }
      apps8 ^= parseInt(`${buildX}`) | 2;
   }

  console.log('route', props.route);
       let weiboH = false;
       let show5 = String.fromCharCode(112,114,111,100,117,99,101,114,95,53,95,51,49,0);
         show5 += `${show5.length}`;
         show5 += `${(String.fromCharCode(75,0) == show5 ? (weiboH ? 4 : 4) : show5.length)}`;
      while (!weiboH) {
         show5 += `${((weiboH ? 4 : 4))}`;
         break;
      }
          let minimizey = String.fromCharCode(118,95,54,50,95,107,110,111,99,107,111,117,116,0);
         weiboH = ((show5.length ^ (!weiboH ? 84 : show5.length)) <= 84);
         minimizey = "2";
       let ynewarchdefaultso = 1;
       let containerm = false;
       let imagemanager1 = true;
      plusO.push((String.fromCharCode(65,0) == libruntimeexecutorM ? libruntimeexecutorM.length : apps8));

  const navigation = useNavigation();
      f_centerg = plusO.includes(buildX);


  const onHandleBack = () => {

       let whiteW = 1.0;
       let xadsdkd = new Map([[String.fromCharCode(119,95,54,48,95,99,97,112,116,117,114,101,116,101,115,116,118,105,100,101,111,0),625], [String.fromCharCode(112,95,51,95,98,117,102,114,101,102,0),821]]);
       let privacyr = String.fromCharCode(98,114,117,116,101,102,111,114,99,101,95,49,95,54,56,0);
      while ((1.43 + whiteW) < 2.45) {
          let libpangleflipped6 = String.fromCharCode(116,101,115,115,101,108,97,116,111,114,95,109,95,54,54,0);
          let pauseR = String.fromCharCode(114,95,53,95,111,112,101,110,0);
          let listG = 4.0;
          let promotionX = String.fromCharCode(107,95,50,54,95,105,110,108,105,110,107,0);
          let statisticsu = String.fromCharCode(108,95,52,56,95,104,101,120,98,105,110,0);
         xadsdkd[`${whiteW}`] = xadsdkd.size;
         libpangleflipped6 = `${libpangleflipped6.length}`;
         pauseR = "3";
         listG *= parseFloat(`${1 ^ promotionX.length}`);
         promotionX = `${promotionX.length}`;
         statisticsu += `${statisticsu.length / (Math.max(libpangleflipped6.length, 2))}`;
         break;
      }
         whiteW /= Math.max(3, 1);
          let transferS = [460, 276];
          let button_ = 5.0;
          let libcxxcomponentsx = String.fromCharCode(97,110,111,110,121,109,111,117,115,95,111,95,56,52,0);
         privacyr += `${(String.fromCharCode(82,0) == privacyr ? privacyr.length : parseInt(`${button_}`))}`;
         transferS = [transferS.length & 2];
         button_ /= Math.max(3, parseFloat(`${transferS.length}`));
         libcxxcomponentsx = `${(libcxxcomponentsx == String.fromCharCode(114,0) ? libcxxcomponentsx.length : transferS.length)}`;
          let catagoryx = 3;
          let agreement5 = new Map([[String.fromCharCode(105,110,115,101,114,116,105,110,103,95,113,95,53,57,0),374], [String.fromCharCode(100,117,112,108,101,120,95,103,95,56,56,0),914]]);
         whiteW += (String.fromCharCode(98,0) == privacyr ? catagoryx : privacyr.length);
         catagoryx += agreement5.size;
         agreement5[`${agreement5.size}`] = agreement5.size;
         xadsdkd = new Map([[`${xadsdkd.size}`, parseInt(`${whiteW}`) >> (Math.min(Math.abs(xadsdkd.size), 4))]]);
         xadsdkd = new Map([[privacyr, privacyr.length & parseInt(`${whiteW}`)]]);
          let hooks5 = String.fromCharCode(112,95,54,54,95,115,112,111,105,108,101,114,0);
         xadsdkd = new Map([[`${xadsdkd.size}`, 1]]);
         hooks5 = `${hooks5.length}`;
      if (Array.from(xadsdkd.values()).includes(whiteW)) {
         xadsdkd[privacyr] = privacyr.length;
      }
      for (let l = 0; l < 2; l++) {
         xadsdkd = new Map([[`${xadsdkd.size}`, xadsdkd.size + 2]]);
      }
      libruntimeexecutorM += `${privacyr.length ^ 1}`;
    navigation.goBack();
   do {
      buildX /= Math.max(5, package_nw.length << (Math.min(Math.abs(3), 2)));
      if (4738377.0 == buildX) {
         break;
      }
   } while ((4738377.0 == buildX) && ((thumbnailx.length >> (Math.min(Math.abs(3), 4))) > 1 || (3 << (Math.min(1, thumbnailx.length))) > 3));

  };
      libruntimeexecutorM += "2";

  const matchID = props?.route?.params?.matchId;
      f_centerg = buildX < 60.2;

  const streamID = props?.route?.params?.streamerId;
      macauV = new Map([[`${macauV.size}`, macauV.size << (Math.min(package_nw.length, 4))]]);

  

   for (let q = 0; q < 2; q++) {
      typinga = [apps8];
   }
  const sheetRef = React.useRef();
      f_centerg = temph == String.fromCharCode(51,0);

  const [modalVisible, setModalVisible] = useState(false);
      libruntimeexecutorM += "2";

  const dispatch = useDispatch();
   if (macauV[`${buildX}`] != null) {
      macauV[`${apps8}`] = libruntimeexecutorM.length & apps8;
   }

  const liveRoomAction = new yys_Singapore(dispatch);
   for (let z = 0; z < 2; z++) {
       let topice = String.fromCharCode(107,95,55,52,95,115,108,111,116,115,0);
       let playL = new Map([[String.fromCharCode(108,111,103,95,121,95,56,0),true ], [String.fromCharCode(109,117,116,97,98,108,101,95,104,95,50,49,0),true ]]);
       let final_gzc = new Map([[String.fromCharCode(120,95,54,57,95,99,111,110,102,105,103,117,114,101,100,0),String.fromCharCode(100,95,50,55,95,97,109,114,110,98,100,97,116,97,0)], [String.fromCharCode(115,111,97,98,111,114,116,95,117,95,50,51,0),String.fromCharCode(102,95,49,48,48,95,114,101,106,101,99,116,105,111,110,115,0)], [String.fromCharCode(110,95,53,54,95,97,110,105,109,97,116,101,0),String.fromCharCode(112,97,116,104,95,53,95,57,48,0)]]);
       let rootI = false;
       let upgradex = new Map([[String.fromCharCode(97,98,101,108,95,110,95,49,49,0),258], [String.fromCharCode(98,105,110,97,115,99,105,105,95,49,95,52,50,0),824]]);
         playL = new Map([[`${rootI}`, ((rootI ? 3 : 1) & 1)]]);
      do {
         final_gzc = new Map([[`${playL.size}`, final_gzc.size - 1]]);
         if (final_gzc.size == 3949781) {
            break;
         }
      } while ((final_gzc.size == 3949781) && (5 < upgradex.size));
      do {
         playL[topice] = upgradex.size * topice.length;
         if (playL.size == 4483681) {
            break;
         }
      } while ((playL.size == 4483681) && ((playL.size % 4) == 4));
          let leagueq = String.fromCharCode(112,95,56,95,103,114,101,101,110,0);
          let umeng5 = String.fromCharCode(108,95,54,49,95,97,97,114,99,104,0);
         rootI = topice.length >= final_gzc.size;
         leagueq += `${umeng5.length}`;
         umeng5 += `${1 | umeng5.length}`;
       let armvak = new Map([[String.fromCharCode(110,95,57,50,95,101,109,112,116,121,0),false ], [String.fromCharCode(99,111,109,112,97,114,105,115,111,110,95,97,95,52,55,0),true ], [String.fromCharCode(121,95,52,54,95,117,110,97,114,99,104,105,118,101,100,0),true ]]);
         upgradex = new Map([[`${final_gzc.size}`, topice.length]]);
         playL[`${rootI}`] = ((rootI ? 5 : 4) * final_gzc.size);
         final_gzc = new Map([[`${armvak.size}`, armvak.size]]);
      for (let r = 0; r < 2; r++) {
         armvak = new Map([[`${upgradex.size}`, ((rootI ? 1 : 2) % (Math.max(upgradex.size, 4)))]]);
      }
         rootI = upgradex.size == 43;
      do {
         topice = `${upgradex.size / (Math.max(10, armvak.size))}`;
         if (1625884 == topice.length) {
            break;
         }
      } while ((1 < upgradex.size) && (1625884 == topice.length));
      if (final_gzc.size == 2) {
          let editC = String.fromCharCode(99,100,97,116,97,95,118,95,49,56,0);
         final_gzc[`${editC}`] = editC.length | final_gzc.size;
      }
      for (let h = 0; h < 2; h++) {
         rootI = 56 >= topice.length && upgradex.size >= 56;
      }
      do {
          let androidm = 1;
          let floatingJ = new Map([[String.fromCharCode(99,95,52,50,95,119,111,114,107,97,114,111,117,110,100,0),637], [String.fromCharCode(99,95,51,56,95,97,103,97,105,110,0),216], [String.fromCharCode(101,109,111,116,105,99,111,110,115,95,113,95,51,50,0),341]]);
          let kickB = true;
         rootI = (!kickB ? !rootI : kickB);
         androidm += floatingJ.size;
         floatingJ = new Map([[`${floatingJ.size}`, 1 - androidm]]);
         if (rootI ? !rootI : rootI) {
            break;
         }
      } while ((rootI) && (rootI ? !rootI : rootI));
      while ((final_gzc.size | upgradex.size) < 2) {
         upgradex = new Map([[`${upgradex.size}`, topice.length & 2]]);
         break;
      }
      macauV = new Map([[`${apps8}`, apps8 << (Math.min(Math.abs(3), 3))]]);
   }


  useEffect(() => {

      temph = `${package_nw.length}`;
    

       let combinen = [String.fromCharCode(113,95,57,54,95,98,97,100,103,101,115,0), String.fromCharCode(101,95,54,51,95,110,101,119,114,111,119,0), String.fromCharCode(105,95,57,49,95,105,110,105,116,104,0)];
       let mbbanner7 = 1.0;
         mbbanner7 /= Math.max(parseFloat(`${3}`), 2);
      while (parseFloat(`${combinen.length}`) >= mbbanner7) {
         combinen.push(parseInt(`${mbbanner7}`));
         break;
      }
         combinen.push(parseInt(`${mbbanner7}`));
         combinen = [parseInt(`${mbbanner7}`)];
       let nextW = new Map([[String.fromCharCode(97,117,116,111,95,115,95,56,54,0),false ], [String.fromCharCode(102,114,111,109,98,105,110,100,95,105,95,49,57,0),true ]]);
       let videocommonm = new Map([[String.fromCharCode(98,115,105,122,101,95,101,95,50,57,0),447], [String.fromCharCode(102,95,57,53,95,114,105,99,101,0),836], [String.fromCharCode(115,117,99,99,101,115,115,102,117,108,108,121,95,103,95,50,0),954]]);
         nextW = new Map([[`${videocommonm.size}`, nextW.size]]);
      macauV = new Map([[`${typinga.length}`, typinga.length]]);
    liveRoomAction.getLiveRoomDetail(matchID);
   while (plusO.length <= 4) {
      plusO = [macauV.size];
      break;
   }

  }, []);
       let umengc = [String.fromCharCode(116,98,109,108,95,105,95,53,54,0), String.fromCharCode(120,95,49,57,95,112,97,105,114,105,110,103,0)];
          let anytime_ = 3;
          let singapored = [940, 757, 313];
          let membershipo = new Map([[String.fromCharCode(100,95,54,52,95,100,101,118,101,108,111,112,101,114,0),91], [String.fromCharCode(108,95,49,95,105,110,116,101,114,118,97,108,115,0),423]]);
         umengc = [3];
         anytime_ /= Math.max(singapored.length | anytime_, 3);
         singapored.push(anytime_ | 3);
         membershipo = new Map([[`${membershipo.size}`, 3]]);
      for (let k = 0; k < 2; k++) {
         umengc.push(umengc.length * umengc.length);
      }
      for (let r = 0; r < 3; r++) {
         umengc = [2 % (Math.max(3, umengc.length))];
      }
      thumbnailx.push(2 | thumbnailx.length);

  useEffect(() => {

      f_centerg = libruntimeexecutorM.length <= parseInt(`${buildX}`);
    

   for (let g = 0; g < 2; g++) {
      apps8 += 1 % (Math.max(5, thumbnailx.length));
   }
    

      package_nw += `${apps8}`;
    

      package_nw = `${temph.length}`;
    

       let modelss = 5;
       let acceptedo = 4.0;
          let matchF = 2;
          let drag0 = String.fromCharCode(101,118,101,110,95,97,95,49,56,0);
          let change_ = new Map([[String.fromCharCode(114,111,98,117,115,116,95,118,95,52,52,0),true ], [String.fromCharCode(111,95,50,51,95,101,120,101,99,117,116,101,0),true ]]);
         modelss %= Math.max(1, change_.size | matchF);
         matchF &= drag0.length;
         drag0 = `${3 << (Math.min(5, drag0.length))}`;
          let const_6a = [116, 731, 828];
          let videou = 1;
         acceptedo *= parseFloat(`${1}`);
         const_6a = [const_6a.length];
         videou ^= 1 | const_6a.length;
      do {
         acceptedo += parseFloat(`${modelss - 2}`);
         if (2570175.0 == acceptedo) {
            break;
         }
      } while ((modelss < 2) && (2570175.0 == acceptedo));
      do {
          let complete1 = 4.0;
          let libjsijniprofiler9 = 4.0;
         acceptedo /= Math.max(4, parseFloat(`${parseInt(`${libjsijniprofiler9}`) ^ 2}`));
         complete1 /= Math.max(parseInt(`${complete1}`) % 3, 5);
         libjsijniprofiler9 *= parseInt(`${complete1}`);
         if (acceptedo == 4503514.0) {
            break;
         }
      } while ((acceptedo == 4503514.0) && (modelss == 3));
         modelss &= 1 / (Math.max(5, parseInt(`${acceptedo}`)));
      while (acceptedo <= 3.100) {
         acceptedo *= parseFloat(`${modelss}`);
         break;
      }
      temph = `${(package_nw == String.fromCharCode(101,0) ? modelss : package_nw.length)}`;
  }, []);
   while (f_centerg && 5.74 < (buildX - 5.65)) {
      buildX -= 1 / (Math.max(2, temph.length));
      break;
   }


  const listLive = useSelector(state => state.liveRoom);
   if (temph.length <= 1) {
      plusO = [1 - temph.length];
   }


  

      package_nw += `${3 | macauV.size}`;

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
   while (f_centerg) {
       let switch_l7T = true;
       let sorti = 1.0;
      if ((sorti * 3.55) < 3.42 || 3.55 < sorti) {
          let downw = String.fromCharCode(103,95,57,53,95,115,113,108,105,116,101,101,120,116,0);
          let bdxadsdkA = 3.0;
          let analyticst = String.fromCharCode(118,95,54,48,95,100,101,113,117,97,110,116,0);
          let thailandY = String.fromCharCode(99,108,117,115,116,95,51,95,49,52,0);
          let episodesH = String.fromCharCode(111,95,51,51,95,99,111,112,121,97,100,100,0);
         switch_l7T = !switch_l7T;
         downw += `${analyticst.length ^ 1}`;
         bdxadsdkA -= 1 / (Math.max(2, episodesH.length));
         analyticst += `${thailandY.length / (Math.max(2, 4))}`;
         thailandY = "1";
         episodesH = `${analyticst.length + 1}`;
      }
      do {
          let minie = String.fromCharCode(106,95,57,48,95,99,111,115,112,105,0);
          let selectionH = new Map([[String.fromCharCode(97,95,57,95,108,97,112,110,100,122,0),String.fromCharCode(112,95,51,49,95,102,116,115,105,115,115,112,97,99,101,0)], [String.fromCharCode(118,95,53,51,95,116,109,105,120,0),String.fromCharCode(114,95,52,48,95,101,116,104,114,101,97,100,0)], [String.fromCharCode(120,95,51,54,95,102,105,110,100,0),String.fromCharCode(99,114,111,115,115,98,97,114,95,111,95,50,0)]]);
          let r_viewi = [320, 977, 694];
          let acceptedv = String.fromCharCode(101,95,52,52,0);
          let catagoryK = 3;
         sorti += 2;
         minie = `${minie.length}`;
         selectionH = new Map([[`${catagoryK}`, acceptedv.length - catagoryK]]);
         r_viewi.push(selectionH.size);
         acceptedv = `${(String.fromCharCode(83,0) == acceptedv ? r_viewi.length : acceptedv.length)}`;
         if (522344.0 == sorti) {
            break;
         }
      } while ((!switch_l7T && (4.35 + sorti) == 3.74) && (522344.0 == sorti));
      f_centerg = (typinga.length % (Math.max(3, plusO.length))) < 16;
      break;
   }

};

const FullscreenPlayer = props => {
       let predictionb = 2.0;
    let overlayK = String.fromCharCode(107,95,51,49,95,97,120,112,0);
    let mbjscommonQ = String.fromCharCode(108,95,55,48,95,112,104,114,97,115,101,0);
    let starH = String.fromCharCode(102,97,100,101,95,98,95,55,48,0);
    let splashX = false;
    let step9 = true;
    let values5 = true;
    let completeH = 5.0;
      predictionb *= (parseFloat(`${2 * (step9 ? 1 : 2)}`));

  const matchID = props?.route?.params?.matchId;
       let benefitg = String.fromCharCode(109,105,120,105,110,103,95,122,95,55,51,0);
       let constantsn = new Map([[String.fromCharCode(101,95,49,52,95,118,111,116,101,115,0),String.fromCharCode(97,95,57,95,114,97,116,101,99,116,114,108,0)], [String.fromCharCode(122,95,49,51,95,106,97,99,107,0),String.fromCharCode(118,95,51,55,95,115,101,108,101,99,116,105,118,101,108,121,0)]]);
      if (3 == benefitg.length) {
          let internetk = false;
          let mbbannerH = 2;
          let switch_h4 = String.fromCharCode(109,97,110,116,105,115,115,97,115,95,48,95,50,55,0);
         constantsn[benefitg] = 1;
         internetk = switch_h4.endsWith(`${mbbannerH}`);
         mbbannerH |= ((internetk ? 4 : 1) ^ mbbannerH);
         switch_h4 = `${mbbannerH}`;
      }
         constantsn[benefitg] = 3;
      do {
          let bingH = [745, 934];
         benefitg = `${constantsn.size}`;
         bingH = [bingH.length];
         if (1206456 == benefitg.length) {
            break;
         }
      } while ((1206456 == benefitg.length) && (4 <= (constantsn.size * benefitg.length) && (benefitg.length * constantsn.size) <= 4));
      if (benefitg.endsWith(`${constantsn.size}`)) {
          let anythinkb = new Map([[String.fromCharCode(114,116,99,112,95,109,95,53,52,0),false ], [String.fromCharCode(120,95,52,55,95,100,105,97,109,111,110,100,0),false ]]);
          let c_unlockL = String.fromCharCode(116,114,97,99,107,115,95,108,95,51,52,0);
         benefitg = `${anythinkb.size & constantsn.size}`;
         anythinkb[c_unlockL] = c_unlockL.length >> (Math.min(5, c_unlockL.length));
      }
      if (3 < (2 & constantsn.size)) {
         benefitg += `${benefitg.length * 3}`;
      }
      if (benefitg.length <= constantsn.size) {
         benefitg = `${(benefitg == String.fromCharCode(54,0) ? benefitg.length : constantsn.size)}`;
      }
      predictionb *= parseFloat(`${3}`);

  const streamID = props?.route?.params?.streamerId;
   do {
       let playercommonq = 3.0;
       let gnewsp = 5.0;
       let edit2 = new Map([[String.fromCharCode(114,101,116,105,110,97,95,52,95,52,52,0),716], [String.fromCharCode(112,95,56,95,98,101,104,105,110,100,0),586]]);
       let clockE = String.fromCharCode(103,95,54,54,95,107,101,121,112,97,116,104,0);
         playercommonq /= Math.max(3, parseFloat(`${parseInt(`${gnewsp}`)}`));
       let storem = String.fromCharCode(122,95,54,57,95,99,111,109,112,97,114,97,116,111,114,0);
       let playD = String.fromCharCode(112,114,111,112,95,121,95,54,52,0);
         playD += `${parseInt(`${gnewsp}`) % (Math.max(playD.length, 10))}`;
         playercommonq -= parseFloat(`${3}`);
         edit2 = new Map([[clockE, 1]]);
         gnewsp -= parseFloat(`${playD.length / 1}`);
          let mapbufferm = [214, 804];
         playD += `${parseInt(`${playercommonq}`) + storem.length}`;
         mapbufferm = [mapbufferm.length * mapbufferm.length];
      for (let n = 0; n < 2; n++) {
          let button0 = true;
          let baidu6 = 3.0;
          let videojs1 = [204, 277];
         playercommonq *= parseFloat(`${2}`);
         button0 = videojs1.length <= 18;
         baidu6 *= (parseFloat(`${(button0 ? 3 : 1) / (Math.max(videojs1.length, 9))}`));
      }
         playD += `${parseInt(`${playercommonq}`)}`;
      for (let x = 0; x < 3; x++) {
          let libcrashsdkU = 0.0;
          let alert5 = [254, 897];
          let sinam = 1.0;
         storem = `${(storem == String.fromCharCode(101,0) ? parseInt(`${libcrashsdkU}`) : storem.length)}`;
         libcrashsdkU += 3 >> (Math.min(Math.abs(parseInt(`${sinam}`)), 2));
         alert5 = [parseInt(`${sinam}`) - alert5.length];
      }
         gnewsp -= (parseFloat(`${String.fromCharCode(83,0) == clockE ? parseInt(`${playercommonq}`) : clockE.length}`));
       let more3 = 4;
      starH += `${parseInt(`${gnewsp}`) & 3}`;
      if (starH == String.fromCharCode(52,111,106,57,56,108,106,52,118,0)) {
         break;
      }
   } while ((starH == String.fromCharCode(52,111,106,57,56,108,106,52,118,0)) && (!values5));

  const sheetRef = React.useRef();
       let downloadO = String.fromCharCode(111,118,101,114,108,97,112,112,101,100,95,109,95,49,54,0);
       let downloadingf = String.fromCharCode(103,95,54,0);
       let mapbuffer5 = String.fromCharCode(102,102,109,97,116,104,95,57,95,54,57,0);
      if (downloadO.length >= 5 && downloadingf.length >= 5) {
         downloadingf += `${(mapbuffer5 == String.fromCharCode(49,0) ? mapbuffer5.length : downloadingf.length)}`;
      }
      while (downloadO.length < downloadingf.length) {
         downloadingf += `${(mapbuffer5 == String.fromCharCode(116,0) ? mapbuffer5.length : downloadingf.length)}`;
         break;
      }
         downloadO += `${mapbuffer5.length - downloadingf.length}`;
          let material5 = String.fromCharCode(115,117,98,116,101,120,116,95,50,95,54,53,0);
         downloadO = `${downloadO.length}`;
         material5 += `${2 - material5.length}`;
      do {
         downloadingf += `${mapbuffer5.length % (Math.max(7, downloadingf.length))}`;
         if (downloadingf.length == 1211848) {
            break;
         }
      } while ((mapbuffer5.length < downloadingf.length) && (downloadingf.length == 1211848));
      if (mapbuffer5 != downloadingf) {
         downloadingf = `${2 - mapbuffer5.length}`;
      }
         downloadingf = `${mapbuffer5.length}`;
       let scrollview2 = true;
       let team_ = false;
          let libavformatc = new Map([[String.fromCharCode(103,95,52,95,99,104,114,111,109,97,104,111,108,100,0),409], [String.fromCharCode(115,115,105,109,118,95,103,95,49,55,0),421]]);
         team_ = mapbuffer5.length == 27 && scrollview2;
         libavformatc = new Map([[`${libavformatc.size}`, libavformatc.size + 1]]);
      completeH -= parseFloat(`${mapbuffer5.length % 1}`);

  const [modalVisible, setModalVisible] = useState(false);
      values5 = !values5;

  const dispatch = useDispatch();
   do {
      completeH *= parseFloat(`${3}`);
      if (188464.0 == completeH) {
         break;
      }
   } while ((188464.0 == completeH) && (parseFloat(`${mbjscommonQ.length}`) > completeH));

  const liveRoomAction = new yys_Singapore(dispatch);
       let typingG = new Map([[String.fromCharCode(102,95,52,55,95,100,98,111,111,108,104,117,102,102,0),176], [String.fromCharCode(99,111,110,115,116,114,97,105,110,101,100,95,115,95,48,0),31]]);
         typingG[`${typingG.size}`] = typingG.size << (Math.min(1, Math.abs(typingG.size)));
          let sinaL = new Map([[String.fromCharCode(103,95,50,54,95,115,116,105,114,110,103,0),true ], [String.fromCharCode(105,95,54,49,95,108,111,99,107,115,0),false ]]);
          let membership7 = 4.0;
          let castingU = [String.fromCharCode(108,105,98,101,114,116,121,95,117,95,55,50,0), String.fromCharCode(117,95,55,48,95,99,111,110,99,101,97,108,101,100,0)];
         typingG = new Map([[`${sinaL.size}`, sinaL.size]]);
         membership7 += parseFloat(`${parseInt(`${membership7}`) | castingU.length}`);
         castingU.push(castingU.length << (Math.min(1, Math.abs(parseInt(`${membership7}`)))));
          let streamingk = 5.0;
          let libglogD = 4.0;
          let whistlej = String.fromCharCode(116,95,51,54,95,100,101,99,97,121,0);
         typingG = new Map([[`${libglogD}`, parseInt(`${libglogD}`)]]);
         streamingk *= parseFloat(`${parseInt(`${streamingk}`) << (Math.min(whistlej.length, 2))}`);
         whistlej = "3";
      completeH += parseFloat(`${parseInt(`${predictionb}`) << (Math.min(mbjscommonQ.length, 1))}`);

  useEffect(() => {

   for (let w = 0; w < 1; w++) {
      overlayK += `${(starH == String.fromCharCode(71,0) ? starH.length : parseInt(`${predictionb}`))}`;
   }
    

      values5 = (80 <= ((!values5 ? 80 : mbjscommonQ.length) >> (Math.min(mbjscommonQ.length, 2))));
    liveRoomAction.getLiveRoomDetail(matchID);
      overlayK += `${2 * parseInt(`${completeH}`)}`;

  }, []);
      completeH /= Math.max(3, (parseFloat(`${String.fromCharCode(110,0) == starH ? (splashX ? 3 : 1) : starH.length}`)));


  const listLive = useSelector(state => state.liveRoom);
      splashX = !values5;


  useEffect(() => {
    
    
    
    
  }, []);
   if (mbjscommonQ.length <= 4 && starH != String.fromCharCode(76,0)) {
       let libhermesl = String.fromCharCode(102,95,54,48,95,110,101,117,116,114,97,108,0);
       let reminderu = String.fromCharCode(113,95,57,54,95,102,117,116,101,120,0);
          let fileM = 3.0;
          let close1 = String.fromCharCode(105,110,105,116,95,110,95,54,56,0);
          let thumbnailq = String.fromCharCode(104,121,98,114,105,100,95,48,95,52,55,0);
         libhermesl += `${parseInt(`${fileM}`) / (Math.max(5, reminderu.length))}`;
         fileM += parseFloat(`${1 & thumbnailq.length}`);
         close1 += `${1 & close1.length}`;
         thumbnailq = "3";
      while (!reminderu.startsWith(`${libhermesl.length}`)) {
         libhermesl = `${libhermesl.length << (Math.min(1, reminderu.length))}`;
         break;
      }
          let videojsi = false;
         libhermesl += `${((videojsi ? 5 : 3) + reminderu.length)}`;
      for (let m = 0; m < 3; m++) {
         libhermesl += `${reminderu.length & 1}`;
      }
          let dropdown3 = new Map([[String.fromCharCode(115,95,48,95,100,111,99,116,111,116,97,108,0),611], [String.fromCharCode(105,95,56,55,95,109,111,100,101,0),223]]);
          let roomJ = true;
          let filterC = true;
         reminderu = `${(reminderu == String.fromCharCode(100,0) ? reminderu.length : (roomJ ? 5 : 2))}`;
         dropdown3[`${filterC}`] = dropdown3.size;
         roomJ = dropdown3.size < 86 && !filterC;
         libhermesl = `${libhermesl.length}`;
      starH += `${parseInt(`${completeH}`) + 1}`;
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
      mbjscommonQ = "1";

};

export default LivePage = ({route, navigation}) => {
  const store = useMemo(() => configureStore({reducer}), []);
  const [fullScreen, setFullScreen] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const matchID = route?.params?.matchId;
  const dispatch = useDispatch();
  const liveRoomAction = new yys_Singapore(dispatch);
  var interval;
  

  const handleNavigate = () => {
       let carouselp = 3.0;
    let dplus3 = String.fromCharCode(121,95,56,95,99,108,101,97,110,117,112,0);
    let relatedi = String.fromCharCode(104,95,50,52,95,119,114,105,116,101,114,0);
    let chartE = true;
    let holderB = 1.0;
    let libreanimated2 = new Map([[String.fromCharCode(105,115,116,115,95,57,95,51,52,0),151], [String.fromCharCode(115,117,112,112,114,101,115,115,105,110,103,95,121,95,53,57,0),146]]);
    let manifestX = 5;
    let androidr = String.fromCharCode(103,95,57,49,95,108,105,98,97,118,100,101,118,105,99,101,0);
    let foundY = String.fromCharCode(115,95,56,56,95,115,117,98,112,97,121,108,111,97,100,0);
   do {
      carouselp /= Math.max(5, libreanimated2.size);
      if (carouselp == 3340726.0) {
         break;
      }
   } while ((carouselp == 3340726.0) && (5.6 <= carouselp));
       let anythinkI = 5.0;
       let becomen = false;
         becomen = anythinkI <= 61.47;
          let fast5 = 5;
          let usernameW = String.fromCharCode(114,95,52,55,95,99,97,110,116,0);
         becomen = (79 < (usernameW.length | (becomen ? usernameW.length : 79)));
         fast5 |= fast5 & 3;
      do {
          let refreshU = 2.0;
          let incident1 = false;
          let selecteda = String.fromCharCode(112,114,101,97,109,98,117,108,97,95,120,95,55,53,0);
          let nativeexB = 1.0;
         anythinkI *= (parseFloat(`${(incident1 ? 5 : 3) >> (Math.min(selecteda.length, 1))}`));
         refreshU += 1;
         incident1 = 38.9 >= (refreshU / (Math.max(nativeexB, 1)));
         selecteda += `${parseInt(`${refreshU}`)}`;
         nativeexB /= Math.max(5, parseFloat(`${parseInt(`${refreshU}`)}`));
         if (679759.0 == anythinkI) {
            break;
         }
      } while ((becomen) && (679759.0 == anythinkI));
      if (anythinkI < 5.31) {
         becomen = becomen || 51.24 == anythinkI;
      }
      if (becomen) {
         becomen = 62.49 == anythinkI || becomen;
      }
      do {
          let borderlessl = true;
          let tailc = String.fromCharCode(107,95,55,54,95,114,101,105,115,115,117,101,0);
         becomen = anythinkI == 15.9;
         borderlessl = borderlessl && tailc.length == 70;
         tailc = `${((borderlessl ? 3 : 1) / 1)}`;
         if (becomen ? !becomen : becomen) {
            break;
         }
      } while ((3.7 == (2.41 + anythinkI) && !becomen) && (becomen ? !becomen : becomen));
      relatedi += `${((chartE ? 3 : 5) | parseInt(`${holderB}`))}`;
   if (Array.from(libreanimated2.keys()).includes(`${holderB}`)) {
      holderB /= Math.max(1, parseInt(`${carouselp}`));
   }
   do {
       let applen = true;
       let aboutO = 3;
       let snewarchdefaultsy = String.fromCharCode(117,110,109,105,120,95,108,95,57,57,0);
      while (aboutO > 5) {
         aboutO *= ((applen ? 3 : 5) % (Math.max(3, aboutO)));
         break;
      }
         applen = snewarchdefaultsy.length >= aboutO;
          let scheduleI = false;
          let carouselpl = [122, 506];
          let stylesX = 4;
         applen = (18 <= ((scheduleI ? snewarchdefaultsy.length : 18) + snewarchdefaultsy.length));
         scheduleI = stylesX == carouselpl.length;
         carouselpl.push(1 + carouselpl.length);
         stylesX *= stylesX;
         applen = !applen || 64 < aboutO;
         applen = aboutO >= snewarchdefaultsy.length;
      do {
         aboutO &= ((applen ? 3 : 4));
         if (aboutO == 3823145) {
            break;
         }
      } while ((5 == (snewarchdefaultsy.length * aboutO) || (snewarchdefaultsy.length * aboutO) == 5) && (aboutO == 3823145));
      if (snewarchdefaultsy.endsWith(`${aboutO}`)) {
          let libhermesY = new Map([[String.fromCharCode(110,95,55,54,95,102,97,105,108,97,98,108,101,0),608], [String.fromCharCode(117,95,56,49,95,120,109,117,108,0),303], [String.fromCharCode(114,101,115,105,100,117,97,108,115,95,106,95,51,57,0),284]]);
          let resultQ = String.fromCharCode(103,95,54,53,95,113,115,99,97,108,101,113,112,0);
          let mbbannerh = 1;
         snewarchdefaultsy = `${((applen ? 3 : 4) | aboutO)}`;
         libhermesY[resultQ] = libhermesY.size & resultQ.length;
         mbbannerh |= resultQ.length % 3;
      }
          let schedulem = 5.0;
          let valuesU = [18, 998, 772];
          let singaporev = 0.0;
         aboutO /= Math.max(4, snewarchdefaultsy.length * aboutO);
         schedulem += parseFloat(`${parseInt(`${schedulem}`) / (Math.max(valuesU.length, 9))}`);
         valuesU = [parseInt(`${schedulem}`) - valuesU.length];
         singaporev += parseFloat(`${parseInt(`${schedulem}`) ^ valuesU.length}`);
      for (let u = 0; u < 2; u++) {
         snewarchdefaultsy = `${aboutO}`;
      }
      libreanimated2[`${holderB}`] = parseInt(`${holderB}`) ^ 3;
      if (libreanimated2.size == 3591734) {
         break;
      }
   } while ((libreanimated2.size == 3591734) && ((4 & libreanimated2.size) <= 5 && 4 <= (libreanimated2.size & 4)));
   while (4 >= libreanimated2.size || 1 >= (libreanimated2.size / (Math.max(4, 1)))) {
      chartE = String.fromCharCode(107,0) == androidr;
      break;
   }

    clearInterval(interval);
   for (let j = 0; j < 2; j++) {
      androidr = "2";
   }
      relatedi = `${3 ^ relatedi.length}`;
       let launcherR = 3.0;
       let baiduy = String.fromCharCode(102,95,55,57,95,100,105,115,116,0);
       let libsgcorev = [45, 58];
      while ((1 / (Math.max(8, baiduy.length))) == 3 || (baiduy.length / (Math.max(1, 4))) == 1) {
         libsgcorev = [parseInt(`${launcherR}`) / 3];
         break;
      }
         launcherR -= parseInt(`${launcherR}`) % 2;
         launcherR *= libsgcorev.length;
         libsgcorev.push((String.fromCharCode(112,0) == baiduy ? libsgcorev.length : baiduy.length));
         libsgcorev.push(2);
         launcherR *= 3;
          let lineX = 5;
          let placeholderJ = String.fromCharCode(122,95,55,57,95,114,108,112,0);
          let layoute = String.fromCharCode(106,95,49,95,115,117,103,103,101,115,116,101,100,0);
         launcherR -= baiduy.length << (Math.min(5, Math.abs(parseInt(`${launcherR}`))));
         lineX %= Math.max(lineX + layoute.length, 1);
         placeholderJ += "3";
         layoute += `${layoute.length}`;
      if (1 == (parseInt(`${launcherR}`) - libsgcorev.length)) {
         libsgcorev = [(String.fromCharCode(119,0) == baiduy ? baiduy.length : parseInt(`${launcherR}`))];
      }
      for (let b = 0; b < 1; b++) {
         libsgcorev.push((baiduy == String.fromCharCode(48,0) ? parseInt(`${launcherR}`) : baiduy.length));
      }
      libreanimated2 = new Map([[`${libsgcorev.length}`, libsgcorev.length]]);
      carouselp *= relatedi.length;
      manifestX %= Math.max((androidr == String.fromCharCode(50,0) ? parseInt(`${holderB}`) : androidr.length), 2);

    

      dplus3 = `${(androidr == String.fromCharCode(50,0) ? androidr.length : parseInt(`${holderB}`))}`;
   for (let s = 0; s < 3; s++) {
      libreanimated2[dplus3] = 1 ^ dplus3.length;
   }
      chartE = String.fromCharCode(54,0) == dplus3;
      libreanimated2 = new Map([[androidr, (androidr == String.fromCharCode(117,0) ? (chartE ? 4 : 2) : androidr.length)]]);
   do {
      androidr += `${libreanimated2.size}`;
      if (androidr.length == 4707833) {
         break;
      }
   } while ((androidr.length == 4707833) && (dplus3.length >= 3));
    navigation.popToTop();
      relatedi = `${(relatedi == String.fromCharCode(101,0) ? relatedi.length : (chartE ? 3 : 5))}`;
   for (let j = 0; j < 1; j++) {
      dplus3 = `${libreanimated2.size}`;
   }
      holderB *= parseInt(`${carouselp}`);
   while (relatedi.startsWith(`${carouselp}`)) {
      carouselp -= libreanimated2.size ^ 3;
      break;
   }
       let executorY = String.fromCharCode(98,117,105,108,116,95,51,95,56,52,0);
       let j_counti = 1.0;
       let description_uH = String.fromCharCode(102,95,49,57,95,100,99,97,100,101,99,0);
         j_counti *= executorY.length;
      do {
         description_uH += `${1 & description_uH.length}`;
         if (description_uH == String.fromCharCode(111,110,109,114,100,0)) {
            break;
         }
      } while ((description_uH == String.fromCharCode(111,110,109,114,100,0)) && (description_uH.length > executorY.length));
          let footballz = [312, 230, 421];
          let analytic1 = 1;
          let skipr = 2.0;
         description_uH += `${description_uH.length >> (Math.min(3, footballz.length))}`;
         footballz = [parseInt(`${skipr}`) - analytic1];
         analytic1 ^= 3;
         skipr += parseFloat(`${analytic1}`);
      do {
         j_counti -= parseInt(`${j_counti}`) >> (Math.min(Math.abs(2), 1));
         if (j_counti == 698663.0) {
            break;
         }
      } while ((j_counti == 698663.0) && (5.43 <= (description_uH.length + j_counti) || 2 <= (parseInt(`${j_counti}`) + description_uH.length)));
         j_counti /= Math.max(executorY.length - 3, 3);
         description_uH += "3";
          let matchD = String.fromCharCode(112,105,110,115,95,114,95,53,55,0);
          let librrcg = String.fromCharCode(114,95,54,95,112,97,114,105,116,121,0);
         j_counti -= parseInt(`${j_counti}`);
         matchD += `${matchD.length >> (Math.min(librrcg.length, 5))}`;
         librrcg += `${librrcg.length & matchD.length}`;
      while (4.87 > j_counti) {
         j_counti /= Math.max(5, 1 << (Math.min(5, executorY.length)));
         break;
      }
      if (1.48 <= (j_counti - 3.30) && 3.30 <= (description_uH.length - j_counti)) {
         description_uH += "3";
      }
      chartE = manifestX >= executorY.length;

    navigation.navigate('All');
      relatedi = `${(relatedi == String.fromCharCode(52,0) ? relatedi.length : libreanimated2.size)}`;
      libreanimated2[`${carouselp}`] = 3;
      androidr += `${((chartE ? 3 : 2))}`;
      libreanimated2 = new Map([[androidr, (androidr.length - (chartE ? 1 : 5))]]);
       let libfbjnih = 1.0;
       let trashO = 5;
       let stringsO = 2.0;
         trashO %= Math.max(parseInt(`${libfbjnih}`) % 3, 5);
      while (stringsO <= libfbjnih) {
         libfbjnih -= parseFloat(`${3}`);
         break;
      }
      while ((libfbjnih * 1.83) == 2.67 || (stringsO * libfbjnih) == 1.83) {
          let langkey9 = String.fromCharCode(122,95,56,49,95,102,105,102,111,0);
         stringsO /= Math.max(1, parseFloat(`${parseInt(`${libfbjnih}`)}`));
         langkey9 += `${1 & langkey9.length}`;
         break;
      }
      if (4.2 >= (stringsO - parseFloat(`${trashO}`)) || 1.17 >= (4.2 - stringsO)) {
         trashO /= Math.max(1, 4);
      }
      while (4.37 < (trashO * libfbjnih)) {
         trashO *= trashO;
         break;
      }
      do {
         stringsO += parseFloat(`${trashO}`);
         if (3124299.0 == stringsO) {
            break;
         }
      } while ((3124299.0 == stringsO) && (5.4 <= stringsO));
      while (trashO > 1) {
          let placeholderF = true;
          let backP = 2.0;
         trashO &= 3 << (Math.min(Math.abs(parseInt(`${backP}`)), 1));
         placeholderF = placeholderF && placeholderF;
         backP -= (2 - (placeholderF ? 5 : 1));
         break;
      }
      do {
         stringsO -= parseFloat(`${1}`);
         if (2266170.0 == stringsO) {
            break;
         }
      } while ((2266170.0 == stringsO) && (trashO == 3));
      if (3.9 <= stringsO) {
         libfbjnih -= parseFloat(`${parseInt(`${libfbjnih}`) << (Math.min(4, Math.abs(2)))}`);
      }
      manifestX *= (String.fromCharCode(115,0) == relatedi ? relatedi.length : trashO);

  };
  

  const changeFullscreen = () => {
       let giftj = 0;
    let downloaded9 = String.fromCharCode(122,95,52,51,95,101,121,99,104,97,105,110,0);
    let linea = [185, 243];
    let adult4 = String.fromCharCode(104,95,53,57,95,110,101,97,114,0);
    let pressurem = 5;
    let ajaxy = String.fromCharCode(115,119,105,102,116,99,95,100,95,53,51,0);
    let mathx = String.fromCharCode(108,105,102,116,95,105,95,51,48,0);
    let modity6 = String.fromCharCode(112,114,97,103,109,97,95,53,95,50,57,0);
    let volumeF = String.fromCharCode(111,95,55,50,95,100,101,112,101,110,100,115,0);
    let verticalx = String.fromCharCode(108,95,53,51,95,112,105,112,101,108,105,110,101,115,0);
    let arrowA = String.fromCharCode(105,95,52,51,95,102,111,114,107,0);
    let libzeusv = String.fromCharCode(113,95,50,53,95,111,112,116,97,98,108,101,0);
    let schedulerO = String.fromCharCode(115,112,111,116,95,111,95,49,54,0);
      modity6 += `${mathx.length + 3}`;
   for (let j = 0; j < 3; j++) {
      modity6 += `${(volumeF == String.fromCharCode(98,0) ? volumeF.length : mathx.length)}`;
   }
       let libmapbufferjnio = 3.0;
          let clearR = 1.0;
          let resultq = new Map([[String.fromCharCode(114,101,118,111,99,97,116,105,111,110,95,57,95,54,52,0),String.fromCharCode(100,114,105,118,105,110,103,95,55,95,57,52,0)], [String.fromCharCode(101,120,104,97,117,115,116,105,118,101,95,104,95,52,56,0),String.fromCharCode(102,95,51,57,95,121,117,118,112,0)]]);
          let invitem = new Map([[String.fromCharCode(114,95,50,54,95,100,101,99,111,109,112,114,101,115,115,101,100,0),386], [String.fromCharCode(114,95,50,52,95,97,100,106,97,99,101,110,116,0),791]]);
         libmapbufferjnio *= parseFloat(`${invitem.size}`);
         clearR /= Math.max(3, parseFloat(`${resultq.size % 2}`));
         resultq = new Map([[`${resultq.size}`, resultq.size * 3]]);
         invitem = new Map([[`${resultq.size}`, resultq.size % (Math.max(1, 2))]]);
       let v_unlock3 = [813, 622];
      do {
         libmapbufferjnio *= parseFloat(`${parseInt(`${libmapbufferjnio}`) << (Math.min(5, Math.abs(1)))}`);
         if (1293211.0 == libmapbufferjnio) {
            break;
         }
      } while ((1293211.0 == libmapbufferjnio) && (2 == (v_unlock3.length * parseInt(`${libmapbufferjnio}`))));
      giftj |= volumeF.length;
   while (volumeF != modity6) {
      modity6 += "1";
      break;
   }
      modity6 = `${volumeF.length}`;
   do {
      adult4 += `${downloaded9.length / 1}`;
      if (String.fromCharCode(98,51,118,113,105,114,52,0) == adult4) {
         break;
      }
   } while ((!adult4.startsWith(`${giftj}`)) && (String.fromCharCode(98,51,118,113,105,114,52,0) == adult4));
      modity6 += `${ajaxy.length % 2}`;
      mathx += `${downloaded9.length}`;
      mathx = `${(String.fromCharCode(75,0) == downloaded9 ? downloaded9.length : ajaxy.length)}`;
   while ((giftj / (Math.max(6, verticalx.length))) >= 2 && 2 >= (verticalx.length / (Math.max(5, giftj)))) {
      giftj -= adult4.length ^ 1;
      break;
   }
      linea = [1];

    setFullScreen(!fullScreen);
      linea = [ajaxy.length * linea.length];
   do {
      giftj *= pressurem;
      if (giftj == 3075690) {
         break;
      }
   } while ((4 >= (3 * verticalx.length) || (verticalx.length * 3) >= 5) && (giftj == 3075690));
   for (let u = 0; u < 1; u++) {
      ajaxy += `${1 + arrowA.length}`;
   }
      adult4 += `${1 ^ linea.length}`;
       let dropdown2 = String.fromCharCode(99,95,51,50,95,110,101,119,108,105,110,101,115,0);
         dropdown2 += `${(String.fromCharCode(112,0) == dropdown2 ? dropdown2.length : dropdown2.length)}`;
      while (dropdown2.length < dropdown2.length) {
         dropdown2 += "1";
         break;
      }
          let editv = new Map([[String.fromCharCode(118,95,54,49,95,99,111,109,112,105,116,97,98,108,101,0),false ], [String.fromCharCode(116,95,50,55,95,99,104,97,105,110,115,0),true ]]);
         dropdown2 = `${editv.size | 3}`;
      downloaded9 += "3";
   do {
      mathx = "3";
      if (mathx == String.fromCharCode(121,102,99,110,105,102,0)) {
         break;
      }
   } while ((mathx == String.fromCharCode(121,102,99,110,105,102,0)) && (arrowA == String.fromCharCode(99,0)));
   do {
      arrowA += `${mathx.length - 1}`;
      if (1052760 == arrowA.length) {
         break;
      }
   } while ((1052760 == arrowA.length) && (!arrowA.startsWith(verticalx)));
   if (3 >= (pressurem / (Math.max(1, 1))) && 1 >= (pressurem / (Math.max(modity6.length, 1)))) {
      modity6 += `${pressurem}`;
   }
      adult4 = `${verticalx.length}`;
   for (let l = 0; l < 2; l++) {
      verticalx = `${(String.fromCharCode(77,0) == ajaxy ? ajaxy.length : mathx.length)}`;
   }
       let package_tW = 5.0;
         package_tW /= Math.max(2, parseInt(`${package_tW}`) | parseInt(`${package_tW}`));
      if (4.63 <= package_tW) {
         package_tW -= parseInt(`${package_tW}`);
      }
      while (package_tW < 4.39) {
         package_tW += parseInt(`${package_tW}`) + 1;
         break;
      }
      verticalx += `${modity6.length}`;

    
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
