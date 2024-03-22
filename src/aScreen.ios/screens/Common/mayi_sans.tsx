import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet, FlatList} from 'react-native';
import ScreenContainer from '../../components/container/mayi_save';
import {RootStackScreenProps} from '@type/mayi_video_binddatas';
import {useTheme} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from '@hooks/mayi_redirect';
import {mayi_Libapminsightb} from '@redux/mayi_live_tumbnail';

import TitleWithBackButtonHeader from '../../components/header/mayi_predictiondefault_header';
import {mayi_FileBrightness, mayi_Middleware} from '@redux/reducers/mayi_temp_holder';
import {removeVodsFromHistory, playVod} from '@redux/actions/mayi_goallogo';
import VodHistoryCard from '../../components/vod/mayi_mbridge_football';
import CheckBoxSelected from '@static/images/encryptDownModity.svg';
import CheckBoxUnselected from '@static/images/notificationfillemptyUntick.svg';
import {mayi_EmptyGradle} from '@type/mayi_green';
import {Button} from '@rneui/themed';
import ConfirmationModal from '../../components/modal/mayi_small_catalog';
import VodLiveStationListVertical from '../../components/vod/mayi_basketballmatchdetailbg';
import EmptyList from '../../components/common/mayi_unread';
import {ScrollView} from 'react-native-gesture-handler';

type mayi_EventLibnms = {
  item: mayi_FileBrightness;
};
export default ({navigation, route}: RootStackScreenProps<'电视台列表'>) => {
  const {liveStationItemList} = route.params;
  const {colors, textVariants, icons, spacing} = useTheme();
  const dispatch = useAppDispatch();
  const vodReducer: mayi_Middleware = useAppSelector(
    ({vodReducer}: mayi_Libapminsightb) => vodReducer,
  );
  const history = vodReducer.history;
  const [isEditing, setIsEditing] = useState(false);
  const [removeHistory, setRemoveHistory] = useState<Array<mayi_EmptyGradle>>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const toggleOverlay = () => {
       let videoX = String.fromCharCode(122,95,50,55,95,109,116,97,102,0);
    let downarrowj = 3.0;
    let ranky = 1.0;
    let delegate_wyM = false;
    let leftk = String.fromCharCode(110,95,54,52,95,99,114,101,97,116,101,0);
    let attributedstringo = 5.0;
    let videocommont: Array<any> = [String.fromCharCode(115,112,101,101,120,95,111,95,56,49,0), String.fromCharCode(114,95,52,55,95,112,117,98,107,101,121,104,97,115,104,0), String.fromCharCode(117,95,54,53,95,105,110,115,116,97,108,108,97,116,105,111,110,115,0)];
    let combinedA = String.fromCharCode(110,95,52,52,95,100,101,115,104,97,107,101,0);
    let guideV = 1.0;
    let reactnavigationK = 5.0;
    let transfery = String.fromCharCode(99,95,56,51,95,115,112,108,105,116,109,118,115,0);
    let q_imaget = String.fromCharCode(113,112,98,105,116,115,95,118,95,57,0);
   while (!combinedA.includes(`${downarrowj}`)) {
       let submit4 = String.fromCharCode(97,114,98,105,116,114,97,114,121,95,104,95,56,50,0);
       let kickZ = String.fromCharCode(119,95,49,57,95,115,97,109,112,0);
       let annerQ = String.fromCharCode(120,95,55,50,95,116,111,103,103,108,101,0);
       let modityU = false;
       let handlerV = 1.0;
         kickZ += `${parseInt(`${handlerV}`) / 1}`;
      for (let y = 0; y < 2; y++) {
         handlerV -= (String.fromCharCode(114,0) == kickZ ? kickZ.length : annerQ.length);
      }
       let countdownA = 1;
       let runtimep = 0;
      while (annerQ.includes(`${kickZ.length}`)) {
         annerQ = `${kickZ.length}`;
         break;
      }
      for (let i = 0; i < 3; i++) {
         handlerV -= parseInt(`${handlerV}`) >> (Math.min(5, Math.abs(1)));
      }
      if (submit4.length == 1) {
         submit4 += `${runtimep}`;
      }
         countdownA ^= 2;
         modityU = !modityU;
      let plusN = String.fromCharCode(57,119,51,0) == annerQ;
      do {
         annerQ = `${parseInt(`${handlerV}`) >> (Math.min(2, Math.abs(3)))}`;
         if (plusN) {
            break;
         }
      } while (plusN && (2.1 < handlerV));
         countdownA ^= 2;
      while (runtimep > annerQ.length) {
         runtimep /= Math.max(1, ((modityU ? 4 : 4) / (Math.max(10, parseInt(`${handlerV}`)))));
         break;
      }
          let nativemoduled = String.fromCharCode(115,117,98,114,101,115,117,108,116,115,95,122,95,49,0);
          let lessH = String.fromCharCode(103,101,116,112,95,56,95,56,51,0);
          let rocket2 = true;
         runtimep /= Math.max(4, annerQ.length);
         nativemoduled = `${((rocket2 ? 5 : 3) / 1)}`;
         lessH += `${(nativemoduled == String.fromCharCode(69,0) ? nativemoduled.length : lessH.length)}`;
         rocket2 = lessH.length >= 28;
      let zoom8 = modityU ? !modityU : modityU;
      do {
          let greyarrowupd: Map<any, any> = new Map([[String.fromCharCode(105,95,50,54,95,112,108,97,110,101,0),String.fromCharCode(122,95,50,55,95,105,105,110,116,0)], [String.fromCharCode(113,95,54,52,95,97,112,112,101,110,100,97,108,108,0),String.fromCharCode(114,101,103,105,115,116,114,121,95,101,95,52,56,0)]]);
         modityU = 87 < greyarrowupd.size;
         if (zoom8) {
            break;
         }
      } while ((modityU) && zoom8);
      if (3 < runtimep) {
         runtimep -= 2 | parseInt(`${handlerV}`);
      }
         countdownA /= Math.max(runtimep - 1, 1);
      downarrowj /= Math.max(5, 2 / (Math.max(10, submit4.length)));
      break;
   }
       let suggestionu = 0;
       let episodesS = true;
       let nativeo: Map<any, any> = new Map([[String.fromCharCode(105,110,102,101,114,101,100,95,97,95,51,54,0),466], [String.fromCharCode(101,95,52,57,95,99,108,101,97,114,115,0),931], [String.fromCharCode(105,110,115,101,99,95,104,95,55,48,0),660]]);
      while (suggestionu <= 5 || 2 <= (suggestionu >> (Math.min(Math.abs(5), 4)))) {
         episodesS = suggestionu < 51;
         break;
      }
      if (2 <= (3 >> (Math.min(3, Math.abs(suggestionu)))) || !episodesS) {
          let libglogN: Map<any, any> = new Map([[String.fromCharCode(118,95,50,50,95,99,105,114,99,117,108,97,116,105,110,103,0),795], [String.fromCharCode(100,99,116,101,108,101,109,95,50,95,57,56,0),422]]);
          let libreactperfloggerjniU = 3.0;
          let schedule0: Map<any, any> = new Map([[String.fromCharCode(100,120,116,111,114,121,95,101,95,49,48,0),false ], [String.fromCharCode(99,97,115,116,95,121,95,56,57,0),false ], [String.fromCharCode(105,95,57,52,95,119,112,116,104,114,101,97,100,115,0),true ]]);
          let indexD = 3;
          let accepted3 = true;
         episodesS = schedule0.size > 46 || !episodesS;
         libglogN.set(`${indexD}`, 2);
         libreactperfloggerjniU *= parseFloat(`${1}`);
         schedule0 = new Map([[`${libreactperfloggerjniU}`, parseInt(`${libreactperfloggerjniU}`) ^ 1]]);
         indexD -= 1;
         accepted3 = 4.7 >= libreactperfloggerjniU;
      }
          let smallK = String.fromCharCode(97,95,55,50,95,116,104,117,109,98,0);
          let plust: Map<any, any> = new Map([[String.fromCharCode(114,95,49,51,95,110,101,101,100,0),245], [String.fromCharCode(117,110,115,111,108,118,101,100,95,120,95,53,53,0),606]]);
         suggestionu |= suggestionu / 2;
         smallK = `${smallK.length}`;
         plust.set(`${smallK}`, 2 << (Math.min(1, Math.abs(plust.size))));
      if ((nativeo.size + 2) == 2 || nativeo.size == 2) {
          let iconclosewhiteF = String.fromCharCode(112,117,116,98,121,116,101,95,111,95,53,49,0);
          let hoverK = String.fromCharCode(111,99,97,108,105,122,97,116,105,111,110,95,98,95,53,54,0);
          let libloggerK = String.fromCharCode(116,114,116,97,98,108,101,95,107,95,52,57,0);
          let bufferO = String.fromCharCode(97,112,111,115,95,53,95,55,55,0);
          let teamdetailsbgL = String.fromCharCode(109,117,116,117,97,108,95,120,95,55,52,0);
         episodesS = suggestionu < teamdetailsbgL.length;
         iconclosewhiteF += `${libloggerK.length % (Math.max(hoverK.length, 10))}`;
         hoverK = `${libloggerK.length}`;
         bufferO += `${bufferO.length}`;
         teamdetailsbgL += `${iconclosewhiteF.length}`;
      }
          let indexL = String.fromCharCode(110,111,110,122,101,114,111,95,57,95,51,48,0);
          let downloadingC: Array<any> = [288, 390];
         episodesS = (97 <= ((!episodesS ? 97 : nativeo.size) % (Math.max(3, nativeo.size))));
         indexL += `${downloadingC.length | 1}`;
         downloadingC = [downloadingC.length];
         episodesS = 89 <= suggestionu;
         nativeo.set(`${suggestionu}`, 2 | suggestionu);
         nativeo = new Map([[`${nativeo.size}`, 3 >> (Math.min(2, Math.abs(nativeo.size)))]]);
         nativeo.set(`${episodesS}`, suggestionu);
      combinedA += `${3 + videoX.length}`;
      transfery += `${(String.fromCharCode(52,0) == combinedA ? combinedA.length : parseInt(`${guideV}`))}`;
       let penalty0 = false;
       let orangedownarrowI: Array<any> = [382, 9];
      let libjsijniprofilerM = penalty0 ? !penalty0 : penalty0;
      do {
          let selectedR: Map<any, any> = new Map([[String.fromCharCode(108,95,57,56,95,118,97,114,109,97,115,107,0),775], [String.fromCharCode(120,118,97,103,95,53,95,51,51,0),452], [String.fromCharCode(112,117,98,108,105,115,104,95,48,95,53,56,0),273]]);
         penalty0 = orangedownarrowI.includes(penalty0);
         selectedR = new Map([[`${selectedR.size}`, selectedR.size]]);
         if (libjsijniprofilerM) {
            break;
         }
      } while (libjsijniprofilerM && (2 > (orangedownarrowI.length >> (Math.min(Math.abs(1), 3))) || penalty0));
          let reactnativeultimatelistviewg = 4;
          let filedh = false;
         penalty0 = orangedownarrowI.includes(penalty0);
         reactnativeultimatelistviewg |= reactnativeultimatelistviewg;
         filedh = !filedh;
      while (orangedownarrowI.length >= 5) {
         penalty0 = orangedownarrowI.includes(penalty0);
         break;
      }
          let questU = 2.0;
          let reactnativejsV = String.fromCharCode(109,105,112,115,95,49,95,55,50,0);
          let e_titlei = String.fromCharCode(120,95,51,50,95,115,101,97,108,0);
         orangedownarrowI = [parseInt(`${questU}`)];
         questU /= Math.max(1, parseFloat(`${2 - e_titlei.length}`));
         reactnativejsV = `${reactnativejsV.length % (Math.max(2, 8))}`;
         e_titlei = `${3 + reactnativejsV.length}`;
      while (1 >= orangedownarrowI.length) {
         penalty0 = orangedownarrowI.length > 55;
         break;
      }
      while (orangedownarrowI.length == 4 || (4 >> (Math.min(2, orangedownarrowI.length))) == 1) {
          let homeF = 5.0;
          let bufferx = 5;
         penalty0 = bufferx == orangedownarrowI.length;
         homeF += parseFloat(`${3}`);
         bufferx /= Math.max(parseInt(`${homeF}`), 3);
         break;
      }
      reactnavigationK -= parseFloat(`${3 | videoX.length}`);
      combinedA += `${((delegate_wyM ? 2 : 3) / (Math.max(parseInt(`${attributedstringo}`), 10)))}`;
   for (let n = 0; n < 1; n++) {
       let belld = String.fromCharCode(107,95,51,55,95,105,110,116,114,111,0);
       let emptya = String.fromCharCode(111,103,103,101,114,95,120,95,55,51,0);
       let basketballplayerplaceholdery = String.fromCharCode(100,95,49,95,105,110,110,101,114,0);
         emptya += `${emptya.length}`;
       let eabafadfadddbafeddddeeefeaafM: Array<any> = [384, 631];
      if (basketballplayerplaceholdery.length < emptya.length) {
         emptya = `${emptya.length}`;
      }
       let readH = String.fromCharCode(118,105,101,119,95,109,95,51,49,0);
       let combined3 = String.fromCharCode(97,95,53,53,95,99,111,110,116,105,103,117,111,117,115,0);
          let securityg = 4;
          let expiredu = 1.0;
         basketballplayerplaceholdery += `${combined3.length}`;
         securityg -= securityg;
         expiredu -= 3;
         combined3 += "2";
      let downloaderw = 4960502 <= basketballplayerplaceholdery.length;
      do {
          let benefitr = 4;
          let subsi = true;
          let latnb = String.fromCharCode(112,95,52,49,95,112,101,114,109,105,116,116,101,100,0);
          let leaguew = String.fromCharCode(99,95,53,54,95,103,101,116,104,111,115,116,98,121,110,97,109,101,0);
          let reactnativejsVR = String.fromCharCode(103,95,54,54,95,115,116,115,122,0);
         basketballplayerplaceholdery = `${2 % (Math.max(1, benefitr))}`;
         benefitr /= Math.max((leaguew.length | (subsi ? 4 : 5)), 1);
         subsi = latnb.length == 1;
         latnb = `${leaguew.length}`;
         reactnativejsVR += `${reactnativejsVR.length}`;
         if (downloaderw) {
            break;
         }
      } while (downloaderw && (basketballplayerplaceholdery.startsWith(`${eabafadfadddbafeddddeeefeaafM.length}`)));
         readH = `${combined3.length}`;
      let cornerE = 6151990 >= belld.length;
      do {
         belld = `${emptya.length ^ 3}`;
         if (cornerE) {
            break;
         }
      } while ((readH != belld) && cornerE);
      videocommont = [3];
   }
       let championZ = String.fromCharCode(104,95,56,55,95,114,116,112,119,0);
       let brightnessy: Map<any, any> = new Map([[String.fromCharCode(107,95,56,55,95,115,108,105,99,101,100,0),855], [String.fromCharCode(110,95,55,49,95,114,101,99,111,110,110,101,99,116,0),823]]);
       let mbbannerG = String.fromCharCode(99,111,110,115,116,114,117,99,116,95,103,95,50,0);
       let r_lockk = String.fromCharCode(108,95,51,54,95,98,117,116,116,101,114,102,108,121,0);
       let rewind5 = String.fromCharCode(98,95,55,49,95,100,101,110,111,105,115,101,0);
         mbbannerG = `${brightnessy.size / (Math.max(championZ.length, 8))}`;
      for (let m = 0; m < 3; m++) {
         rewind5 += `${(championZ == String.fromCharCode(70,0) ? mbbannerG.length : championZ.length)}`;
      }
         mbbannerG = `${(String.fromCharCode(84,0) == rewind5 ? brightnessy.size : rewind5.length)}`;
         r_lockk += `${championZ.length}`;
          let debugY = true;
         r_lockk += `${brightnessy.size - 3}`;
         debugY = (!debugY ? debugY : debugY);
      if (r_lockk.length <= mbbannerG.length) {
         mbbannerG = `${championZ.length ^ r_lockk.length}`;
      }
          let phoneA = true;
          let transferf = String.fromCharCode(97,100,100,114,101,115,115,95,121,95,50,57,0);
          let telemetrye = true;
         mbbannerG = `${1 ^ brightnessy.size}`;
         phoneA = !transferf.includes(`${telemetrye}`);
         transferf += `${((telemetrye ? 1 : 2))}`;
      for (let d = 0; d < 1; d++) {
          let leftL: Array<any> = [632, 90, 906];
          let related1 = String.fromCharCode(111,95,51,95,104,119,102,114,97,109,101,0);
         brightnessy = new Map([[`${leftL.length}`, leftL.length / (Math.max(3, 6))]]);
         related1 += `${1 + related1.length}`;
      }
      leftk = "1";
      ranky -= parseFloat(`${parseInt(`${attributedstringo}`)}`);
   if (1.88 < (downarrowj * attributedstringo) && 1.56 < (1.88 * downarrowj)) {
      attributedstringo += (parseFloat(`${parseInt(`${reactnavigationK}`) >> (Math.min(4, Math.abs((delegate_wyM ? 5 : 2))))}`));
   }
       let defaultfootballbg4: Array<any> = [358, 428, 515];
       let y_managerk = String.fromCharCode(113,115,99,97,108,101,113,112,95,51,95,51,57,0);
       let dropdown5 = true;
          let pressureX: Array<any> = [16, 581];
          let greytickX: Map<any, any> = new Map([[String.fromCharCode(101,95,56,51,95,111,116,111,105,0),false ], [String.fromCharCode(116,95,52,55,95,116,99,112,0),false ], [String.fromCharCode(104,119,100,101,118,105,99,101,95,111,95,49,54,0),false ]]);
         y_managerk = `${(String.fromCharCode(78,0) == y_managerk ? y_managerk.length : greytickX.size)}`;
         pressureX.push(2 | pressureX.length);
         greytickX = new Map([[`${pressureX.length}`, 2]]);
         y_managerk += "2";
      if (dropdown5) {
         defaultfootballbg4 = [3 ^ y_managerk.length];
      }
      for (let g = 0; g < 3; g++) {
         defaultfootballbg4.push(defaultfootballbg4.length / (Math.max(2, 1)));
      }
       let refreshp = String.fromCharCode(100,117,112,115,95,100,95,51,55,0);
       let middlev = String.fromCharCode(108,95,49,52,95,110,111,116,101,115,0);
         dropdown5 = defaultfootballbg4.length > 2;
      if (!dropdown5 || 3 == refreshp.length) {
         dropdown5 = 82 >= defaultfootballbg4.length;
      }
      for (let f = 0; f < 2; f++) {
         refreshp = `${refreshp.length}`;
      }
      while (2 <= middlev.length) {
         middlev = `${middlev.length & 1}`;
         break;
      }
      attributedstringo /= Math.max(4, parseFloat(`${3}`));
       let libreact5 = String.fromCharCode(101,95,54,54,95,98,101,105,103,110,101,116,0);
       let gemfileW = String.fromCharCode(101,114,115,105,111,110,95,55,95,50,50,0);
       let mbbannerI = 2.0;
      for (let i = 0; i < 1; i++) {
          let libfabricjniB: Array<any> = [561, 644, 616];
          let toponp = 1.0;
         mbbannerI /= Math.max(3 / (Math.max(6, parseInt(`${mbbannerI}`))), 5);
         libfabricjniB.push(3 ^ parseInt(`${toponp}`));
         toponp += parseFloat(`${parseInt(`${toponp}`)}`);
      }
         mbbannerI += gemfileW.length ^ libreact5.length;
         libreact5 += `${parseInt(`${mbbannerI}`) * 1}`;
         gemfileW = `${3 | gemfileW.length}`;
         mbbannerI += 3 + gemfileW.length;
         mbbannerI += 3;
      let becomew = mbbannerI <= 5080776.0;
      do {
         mbbannerI /= Math.max(3, 1);
         if (becomew) {
            break;
         }
      } while ((2 > (libreact5.length >> (Math.min(Math.abs(2), 2))) && (libreact5.length - mbbannerI) > 4.2) && becomew);
      let shirtL = mbbannerI <= 5361397.0;
      do {
         mbbannerI /= Math.max(parseInt(`${mbbannerI}`) | 2, 1);
         if (shirtL) {
            break;
         }
      } while ((gemfileW.length == parseInt(`${mbbannerI}`)) && shirtL);
      let h_positionh = mbbannerI >= 5082785.0;
      do {
         mbbannerI -= (libreact5 == String.fromCharCode(56,0) ? parseInt(`${mbbannerI}`) : libreact5.length);
         if (h_positionh) {
            break;
         }
      } while (h_positionh && (4 <= (parseInt(`${mbbannerI}`) / (Math.max(libreact5.length, 3))) && (parseInt(`${mbbannerI}`) / (Math.max(libreact5.length, 2))) <= 4));
      leftk += `${leftk.length & 2}`;
   let moduleV = delegate_wyM ? !delegate_wyM : delegate_wyM;
   do {
      delegate_wyM = videocommont.includes(downarrowj);
      if (moduleV) {
         break;
      }
   } while (moduleV && (leftk.startsWith(`${delegate_wyM}`)));
   while (!delegate_wyM) {
      ranky /= Math.max((parseFloat(`${(delegate_wyM ? 3 : 5) % (Math.max(parseInt(`${guideV}`), 3))}`)), 5);
      break;
   }
   let owngoalz = reactnavigationK <= 7501811.0;
   do {
      reactnavigationK -= parseFloat(`${videocommont.length}`);
      if (owngoalz) {
         break;
      }
   } while (owngoalz && ((5 * guideV) >= 4.82));
      transfery += `${3 * parseInt(`${guideV}`)}`;
   for (let k = 0; k < 2; k++) {
      videocommont = [parseInt(`${downarrowj}`)];
   }
       let canvasY = String.fromCharCode(120,95,50,52,95,116,97,98,0);
       let member1 = String.fromCharCode(121,95,57,54,95,99,117,98,101,100,0);
       let iconarrowleftJ = String.fromCharCode(113,95,49,57,95,108,111,119,112,97,115,115,0);
      let refreshborderlessW = member1.length >= 9082517;
      do {
         member1 = `${member1.length}`;
         if (refreshborderlessW) {
            break;
         }
      } while ((member1.length <= iconarrowleftJ.length) && refreshborderlessW);
         member1 = `${(String.fromCharCode(66,0) == member1 ? member1.length : canvasY.length)}`;
         member1 = `${(String.fromCharCode(66,0) == canvasY ? canvasY.length : member1.length)}`;
         member1 += `${canvasY.length}`;
      let plashS = 7902916 <= iconarrowleftJ.length;
      do {
          let backgroundC = String.fromCharCode(103,100,115,112,95,52,95,55,54,0);
          let reactnativeultimatelistview8 = String.fromCharCode(116,95,52,56,95,102,98,100,101,118,0);
          let r_playerH = false;
          let phonesharep = 4.0;
         iconarrowleftJ = `${member1.length}`;
         backgroundC += `${((r_playerH ? 4 : 2) & parseInt(`${phonesharep}`))}`;
         reactnativeultimatelistview8 += `${(parseInt(`${phonesharep}`) - (r_playerH ? 5 : 3))}`;
         if (plashS) {
            break;
         }
      } while (plashS && (!member1.endsWith(`${iconarrowleftJ.length}`)));
      let cedbadcebfbfbfbcfecbcL = canvasY.length <= 7706066;
      do {
          let skipa = 5;
          let yingN = 3;
         canvasY += "3";
         skipa <<= Math.min(Math.abs(skipa ^ yingN), 2);
         yingN <<= Math.min(Math.abs(skipa), 3);
         if (cedbadcebfbfbfbcfecbcL) {
            break;
         }
      } while (cedbadcebfbfbfbcfecbcL && (member1 != String.fromCharCode(105,0) && canvasY == String.fromCharCode(80,0)));
      while (iconarrowleftJ.includes(member1)) {
          let placeholder8 = String.fromCharCode(99,95,57,57,95,100,101,115,99,114,105,112,116,105,111,110,115,0);
         member1 = `${member1.length}`;
         placeholder8 += `${placeholder8.length + 3}`;
         break;
      }
       let reportF: Map<any, any> = new Map([[String.fromCharCode(118,95,52,95,105,110,100,101,112,101,110,100,101,110,116,0),String.fromCharCode(98,95,55,56,95,111,115,99,105,108,108,111,115,99,111,112,101,0)], [String.fromCharCode(100,101,102,105,110,105,116,105,111,110,115,95,113,95,56,50,0),String.fromCharCode(109,95,55,54,95,116,104,117,110,107,0)]]);
          let libswresampleJ = true;
          let iconstarc: Array<any> = [847, 579];
          let smallc = 3;
         member1 += `${smallc}`;
         libswresampleJ = (((!libswresampleJ ? 99 : iconstarc.length) / (Math.max(9, iconstarc.length))) == 99);
         smallc >>= Math.min(parseInt(`${Math.abs(((libswresampleJ ? 1 : 5) << (Math.min(iconstarc.length, 1))))}`), 3);
      attributedstringo -= parseFloat(`${q_imaget.length}`);
   let holderz = videoX.length >= 5093236;
   do {
      videoX += `${combinedA.length}`;
      if (holderz) {
         break;
      }
   } while (holderz && (!videoX.includes(`${videocommont.length}`)));
       let tramini6: Array<any> = [411, 414, 485];
         tramini6.push(tramini6.length | 1);
         tramini6.push(tramini6.length);
         tramini6 = [tramini6.length];
      leftk += `${parseInt(`${reactnavigationK}`)}`;
      combinedA += "1";
   let libglog6 = videoX.length <= 8603451;
   do {
      videoX = `${combinedA.length >> (Math.min(5, Math.abs(parseInt(`${downarrowj}`))))}`;
      if (libglog6) {
         break;
      }
   } while (libglog6 && ((videoX.length ^ videocommont.length) <= 4 && (videocommont.length ^ 4) <= 1));
      attributedstringo += parseFloat(`${parseInt(`${guideV}`)}`);
   for (let i = 0; i < 3; i++) {
       let unselectedy = String.fromCharCode(121,95,57,95,110,111,116,99,104,101,100,0);
      for (let o = 0; o < 1; o++) {
         unselectedy += `${(String.fromCharCode(118,0) == unselectedy ? unselectedy.length : unselectedy.length)}`;
      }
         unselectedy = `${2 % (Math.max(2, unselectedy.length))}`;
      let defaultlogoF = unselectedy.length >= 6989254;
      do {
          let apple7 = true;
          let filedW = false;
          let backwhiteC = true;
          let whistlee = 4;
          let main_zL = String.fromCharCode(116,114,97,110,115,105,116,95,113,95,50,57,0);
         unselectedy = `${unselectedy.length}`;
         apple7 = whistlee <= 59;
         filedW = (main_zL.length & whistlee) < 25;
         backwhiteC = apple7 && main_zL.length > 49;
         if (defaultlogoF) {
            break;
         }
      } while (defaultlogoF && (4 == unselectedy.length));
      downarrowj /= Math.max((leftk.length ^ (delegate_wyM ? 3 : 2)), 4);
   }
       let skip2 = String.fromCharCode(105,115,116,114,101,97,109,119,114,97,112,112,101,114,95,119,95,52,52,0);
      let overO = skip2.length <= 8867463;
      do {
          let homeY = String.fromCharCode(99,95,52,52,95,99,104,97,110,103,101,114,101,102,0);
          let libbuffero: Map<any, any> = new Map([[String.fromCharCode(99,111,111,114,100,95,117,95,49,56,0),String.fromCharCode(116,95,51,49,95,100,101,115,99,114,105,112,116,105,111,110,115,0)], [String.fromCharCode(118,95,51,57,95,111,115,116,114,101,97,109,119,114,97,112,112,101,114,0),String.fromCharCode(109,95,49,57,95,112,111,108,121,109,101,115,104,0)], [String.fromCharCode(117,116,99,116,105,109,101,95,52,95,51,57,0),String.fromCharCode(122,95,50,95,112,99,97,99,104,101,0)]]);
         skip2 = `${libbuffero.size ^ homeY.length}`;
         if (overO) {
            break;
         }
      } while ((skip2.length < skip2.length) && overO);
         skip2 += `${(String.fromCharCode(120,0) == skip2 ? skip2.length : skip2.length)}`;
      while (skip2.startsWith(skip2)) {
         skip2 = `${(skip2 == String.fromCharCode(75,0) ? skip2.length : skip2.length)}`;
         break;
      }
      attributedstringo /= Math.max(parseFloat(`${3 / (Math.max(9, parseInt(`${guideV}`)))}`), 3);
   while ((combinedA.length - 4) == 4) {
      combinedA = `${parseInt(`${reactnavigationK}`)}`;
      break;
   }
   for (let w = 0; w < 2; w++) {
       let show8 = 4;
       let subinP = String.fromCharCode(115,116,97,116,101,109,101,110,116,115,95,53,95,56,50,0);
       let frame_opD: Array<any> = [908, 180, 827];
       let casting5 = String.fromCharCode(119,111,114,107,95,49,95,54,50,0);
       let colorsI = false;
      let sortD = 6722281 >= show8;
      do {
         show8 -= (String.fromCharCode(57,0) == subinP ? subinP.length : casting5.length);
         if (sortD) {
            break;
         }
      } while ((4 <= show8) && sortD);
          let fillI = 5.0;
          let code3 = 4.0;
         casting5 += `${parseInt(`${fillI}`)}`;
         fillI -= parseFloat(`${parseInt(`${code3}`) * parseInt(`${code3}`)}`);
      while (!colorsI || 3 > casting5.length) {
         casting5 += "3";
         break;
      }
      for (let v = 0; v < 3; v++) {
         casting5 += `${show8 << (Math.min(Math.abs(1), 2))}`;
      }
      let reddownarrow1 = 7656792 >= frame_opD.length;
      do {
          let bgvipxvod7 = 0;
          let libhermesF = 1.0;
          let pathi: Array<any> = [String.fromCharCode(99,95,52,95,100,101,115,99,101,110,116,0), String.fromCharCode(97,108,98,117,109,95,114,95,57,51,0)];
          let actionr = 0;
          let memberb: Array<any> = [String.fromCharCode(120,95,52,54,95,118,112,105,116,120,102,109,0), String.fromCharCode(106,95,49,54,95,118,115,97,100,0), String.fromCharCode(105,95,57,56,95,108,105,103,104,116,101,110,105,110,103,0)];
         frame_opD = [subinP.length];
         bgvipxvod7 ^= parseInt(`${libhermesF}`) - 2;
         libhermesF -= parseFloat(`${memberb.length % 2}`);
         pathi = [actionr];
         memberb = [bgvipxvod7];
         if (reddownarrow1) {
            break;
         }
      } while ((!colorsI) && reddownarrow1);
      for (let g = 0; g < 3; g++) {
          let downloaderx = String.fromCharCode(111,110,102,105,103,117,114,97,116,105,111,110,95,51,95,51,0);
          let dropdownL: Map<any, any> = new Map([[String.fromCharCode(105,110,100,105,99,101,115,95,56,95,50,56,0),574], [String.fromCharCode(100,113,99,111,101,102,102,95,119,95,50,48,0),750], [String.fromCharCode(99,97,112,116,117,114,101,100,95,97,95,54,0),927]]);
          let penaltymatchiconX = String.fromCharCode(110,95,54,51,95,102,114,111,122,101,110,0);
         frame_opD.push(1 % (Math.max(10, show8)));
         downloaderx = `${penaltymatchiconX.length << (Math.min(1, Math.abs(dropdownL.size)))}`;
         dropdownL = new Map([[`${dropdownL.size}`, dropdownL.size | downloaderx.length]]);
         penaltymatchiconX += "1";
      }
      if (colorsI) {
          let basketballmatchdetailbgj: Array<any> = [819, 428];
          let recommendationM = String.fromCharCode(99,111,110,118,101,110,105,101,110,99,101,95,109,95,52,52,0);
          let bingn = String.fromCharCode(108,111,111,112,115,95,103,95,52,57,0);
          let expiredK = String.fromCharCode(103,95,50,52,95,99,104,105,108,100,0);
          let hejiX = false;
         show8 |= expiredK.length;
         basketballmatchdetailbgj = [((hejiX ? 5 : 5) / (Math.max(bingn.length, 8)))];
         recommendationM = `${recommendationM.length}`;
         bingn = "2";
         expiredK += `${2 ^ bingn.length}`;
         hejiX = 98 < basketballmatchdetailbgj.length;
      }
      for (let z = 0; z < 3; z++) {
         casting5 = `${show8 % (Math.max(5, casting5.length))}`;
      }
       let scheduler3 = 4.0;
       let buffere = String.fromCharCode(109,95,54,52,95,102,111,114,101,103,114,111,117,110,100,0);
       let giftbuttonZ = String.fromCharCode(106,95,49,95,118,116,114,107,0);
         giftbuttonZ = "3";
         subinP = "2";
      for (let s = 0; s < 2; s++) {
         frame_opD = [buffere.length];
      }
         giftbuttonZ += `${buffere.length}`;
         giftbuttonZ += `${show8}`;
      videoX = `${((delegate_wyM ? 5 : 4) + parseInt(`${reactnavigationK}`))}`;
   }
   let const_9i = leftk.length <= 7061498;
   do {
      leftk = `${videocommont.length ^ 1}`;
      if (const_9i) {
         break;
      }
   } while (const_9i && ((parseFloat(`${leftk.length}`) * attributedstringo) < 4.29 && (parseInt(`${attributedstringo}`) * leftk.length) < 3));

    setIsDialogOpen(!isDialogOpen);
  };

  const toggleHistory = (vod: mayi_EmptyGradle) => {
    const filtered = removeHistory.filter(x => x.vod_id !== vod.vod_id);
    if (filtered.length === removeHistory.length) {
      setRemoveHistory([vod, ...removeHistory]);
    } else {
      setRemoveHistory(filtered);
    }
  };
  return (
    <ScreenContainer>
      <TitleWithBackButtonHeader
        title="电视台"
        headerStyle={{marginBottom: spacing.m}}
      />
      <ScrollView style={{marginBottom: spacing.xl}}>
        {liveStationItemList != undefined && liveStationItemList.length > 0 && (
          <View
            style={{
              ...styles.descriptionContainer,
              gap: spacing.m,
              alignItems: 'center',
            }}>
            <VodLiveStationListVertical
              itemList={liveStationItemList}
              itemsPerRow={2}
              numOfRows={100}
            />
          </View>
        )}
        {/* {
                    history && history.length === 0 &&
                    <EmptyList description='暂无播放历史' />
                } */}
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  descriptionContainer: {
    flex: 1,
  },
});
