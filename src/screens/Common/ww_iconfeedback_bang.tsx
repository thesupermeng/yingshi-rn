import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet, FlatList} from 'react-native';
import ScreenContainer from '../../components/container/ww_collection';
import {RootStackScreenProps} from '@type/ww_tempnodatagif_description';
import {useTheme} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from '@hooks/ww_catagory_neon';
import {wwEighteenShirt} from '@redux/ww_small';

import TitleWithBackButtonHeader from '../../components/header/ww_react_predictionwin_header';
import {wwYellowredcardRelease, wwMbjscommon} from '@redux/reducers/ww_shared';
import {removeVodsFromHistory, playVod} from '@redux/actions/ww_floater';
import VodHistoryCard from '../../components/vod/ww_iconarrowright_point';
import CheckBoxSelected from '@static/images/auto_eMemberSwitch_lx.svg';
import CheckBoxUnselected from '@static/images/twitterNbatrophy.svg';
import {wwControl} from '@type/ww_dycreator_result';
import {Button} from '@rneui/themed';
import ConfirmationModal from '../../components/modal/ww_upgrade';
import VodLiveStationListVertical from '../../components/vod/ww_found';
import EmptyList from '../../components/common/ww_reducer_libreact';
import {ScrollView} from 'react-native-gesture-handler';

type wwCasting = {
  item: wwYellowredcardRelease;
};
export default ({navigation, route}: RootStackScreenProps<'电视台列表'>) => {
  const {liveStationItemList} = route.params;
  const {colors, textVariants, icons, spacing} = useTheme();
  const dispatch = useAppDispatch();
  const vodReducer: wwMbjscommon = useAppSelector(
    ({vodReducer}: wwEighteenShirt) => vodReducer,
  );
  const history = vodReducer.history;
  const [isEditing, setIsEditing] = useState(false);
  const [removeHistory, setRemoveHistory] = useState<Array<wwControl>>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const toggleOverlay = () => {
       let activeR = 0;
    let static_v8 = 3.0;
    let bodann = 2.0;
    let drage = String.fromCharCode(110,111,110,110,117,108,108,99,111,110,116,101,110,116,115,95,55,95,52,49,0);
    let whistle_ = String.fromCharCode(112,114,111,99,101,115,115,95,102,95,57,56,0);
    let dependencyb = true;
    let previeww: Map<any, any> = new Map([[String.fromCharCode(104,95,57,57,95,114,102,102,116,105,0),String.fromCharCode(115,101,101,110,95,114,95,50,57,0)], [String.fromCharCode(108,95,51,56,95,118,99,101,110,99,0),String.fromCharCode(109,95,51,55,95,112,104,111,116,111,0)], [String.fromCharCode(108,95,51,49,95,115,99,97,108,97,98,108,101,0),String.fromCharCode(118,95,52,54,95,97,99,99,101,110,116,0)]]);
    let awayG = false;
    let switch_gL = true;
    let sourcee: Array<any> = [261, 217];
    let arrowright0 = true;
    let historyE: Array<any> = [428, 721];
    let policy4 = String.fromCharCode(115,99,114,101,101,110,115,95,56,95,54,52,0);
    let infoZ: Array<any> = [String.fromCharCode(108,111,103,103,101,114,115,95,57,95,52,55,0), String.fromCharCode(116,95,49,53,95,116,114,101,101,114,101,97,100,101,114,0), String.fromCharCode(116,98,109,108,95,117,95,48,0)];
   if (whistle_.length <= previeww.size) {
       let resend9 = 0.0;
          let o_lockF = String.fromCharCode(110,95,53,57,95,108,101,110,118,108,99,0);
          let mbbannerv = String.fromCharCode(116,95,56,52,0);
          let componentP = String.fromCharCode(110,97,109,101,95,121,95,52,52,0);
         resend9 += (String.fromCharCode(97,0) == componentP ? mbbannerv.length : componentP.length);
         o_lockF += `${o_lockF.length >> (Math.min(o_lockF.length, 1))}`;
         mbbannerv += `${2 << (Math.min(1, o_lockF.length))}`;
      while ((5.79 - resend9) > 5.26 && 3.1 > (resend9 / 5.79)) {
          let neony = 2.0;
         resend9 -= parseInt(`${resend9}`) ^ 1;
         neony -= parseFloat(`${2}`);
         break;
      }
          let dplusJ = String.fromCharCode(115,105,110,116,95,52,95,50,57,0);
          let popup1 = true;
         resend9 += (parseInt(`${resend9}`) - (popup1 ? 3 : 4));
         dplusJ = `${3 >> (Math.min(4, dplusJ.length))}`;
         popup1 = dplusJ == dplusJ;
      previeww.set(whistle_, 1);
   }
       let nbatrophyE = 5.0;
       let defaultprofilepicQ = String.fromCharCode(121,95,57,54,95,116,104,114,101,101,100,111,115,116,114,0);
       let canvasj = 0.0;
          let iconwechatU = 0;
          let imagesC = String.fromCharCode(106,95,50,55,95,114,101,109,111,118,101,114,0);
          let inouttargetredf = String.fromCharCode(104,95,56,54,95,110,116,112,0);
         defaultprofilepicQ = "1";
         iconwechatU %= Math.max(3, 2);
         imagesC += `${inouttargetredf.length}`;
         inouttargetredf = `${2 ^ inouttargetredf.length}`;
         nbatrophyE += 3;
          let notificationr = 5.0;
          let applicationz = String.fromCharCode(101,95,51,53,95,101,105,103,104,116,0);
         nbatrophyE -= parseInt(`${canvasj}`);
         notificationr -= parseInt(`${notificationr}`);
         applicationz += `${parseInt(`${notificationr}`) ^ 3}`;
      for (let h = 0; h < 2; h++) {
         canvasj -= 1 << (Math.min(1, Math.abs(parseInt(`${canvasj}`))));
      }
         canvasj *= parseInt(`${nbatrophyE}`) % 3;
      let profileI = nbatrophyE <= 6470255.0;
      do {
         nbatrophyE += 3;
         if (profileI) {
            break;
         }
      } while (profileI && (parseInt(`${nbatrophyE}`) >= defaultprofilepicQ.length));
          let filled3: Array<any> = [220, 297];
          let inouttargetredj = String.fromCharCode(99,95,56,56,95,99,111,110,110,101,99,116,111,114,0);
         defaultprofilepicQ += `${parseInt(`${nbatrophyE}`) & 2}`;
         filled3 = [filled3.length - 3];
         inouttargetredj = `${inouttargetredj.length % (Math.max(9, filled3.length))}`;
       let stars = String.fromCharCode(104,95,51,56,95,105,100,99,116,0);
         defaultprofilepicQ += `${parseInt(`${canvasj}`) >> (Math.min(defaultprofilepicQ.length, 4))}`;
      previeww = new Map([[`${nbatrophyE}`, drage.length]]);
       let iconeditQ = String.fromCharCode(102,114,97,109,101,100,95,102,95,52,51,0);
       let plust = 5.0;
       let libturbomodulejsijniD = String.fromCharCode(116,95,53,51,95,115,121,109,98,111,108,0);
          let settingsh: Map<any, any> = new Map([[String.fromCharCode(106,115,105,109,100,95,115,95,57,54,0),true ], [String.fromCharCode(117,110,99,108,105,112,112,101,100,95,106,95,49,53,0),false ], [String.fromCharCode(115,116,97,114,116,109,97,114,107,101,114,95,113,95,57,53,0),true ]]);
          let liveendmodallogoL = String.fromCharCode(108,117,116,100,95,49,95,54,0);
         plust /= Math.max(4, settingsh.size % (Math.max(8, libturbomodulejsijniD.length)));
         settingsh = new Map([[liveendmodallogoL, liveendmodallogoL.length]]);
         libturbomodulejsijniD = `${parseInt(`${plust}`)}`;
       let footballfieldW = 3.0;
          let agreementk = String.fromCharCode(109,95,52,55,95,115,101,103,109,97,112,0);
         plust /= Math.max(1, 1 * parseInt(`${plust}`));
         agreementk = "1";
         plust -= (libturbomodulejsijniD == String.fromCharCode(104,0) ? libturbomodulejsijniD.length : parseInt(`${footballfieldW}`));
      if ((footballfieldW + plust) == 4.60) {
         plust /= Math.max(4, 1 / (Math.max(9, parseInt(`${plust}`))));
      }
      for (let x = 0; x < 2; x++) {
          let directM = String.fromCharCode(102,95,56,53,95,101,120,116,114,97,100,97,116,97,99,111,110,102,105,103,0);
          let singaporeH: Map<any, any> = new Map([[String.fromCharCode(122,95,53,56,95,97,99,111,100,101,99,0),String.fromCharCode(102,95,55,55,95,102,105,110,101,0)], [String.fromCharCode(110,95,53,95,100,101,114,105,118,97,116,105,111,110,0),String.fromCharCode(115,116,105,99,107,101,114,95,107,95,51,54,0)], [String.fromCharCode(101,95,49,53,95,105,109,112,114,101,115,115,105,111,110,0),String.fromCharCode(109,95,51,49,95,115,112,101,99,116,114,97,108,0)]]);
          let arrowrightR = 4;
          let root0: Map<any, any> = new Map([[String.fromCharCode(115,116,105,108,108,95,51,95,56,50,0),368], [String.fromCharCode(115,99,97,108,101,114,95,121,95,52,53,0),961], [String.fromCharCode(106,105,110,99,108,117,100,101,95,99,95,57,48,0),202]]);
          let rncore7 = String.fromCharCode(102,114,97,109,101,114,97,116,101,95,49,95,54,48,0);
         libturbomodulejsijniD += `${(libturbomodulejsijniD == String.fromCharCode(53,0) ? root0.size : libturbomodulejsijniD.length)}`;
         directM += `${singaporeH.size * directM.length}`;
         singaporeH.set(`${arrowrightR}`, arrowrightR + singaporeH.size);
         root0.set(`${directM}`, singaporeH.size);
         rncore7 += `${rncore7.length << (Math.min(5, directM.length))}`;
      }
      if (3 > libturbomodulejsijniD.length && iconeditQ.length > 3) {
         libturbomodulejsijniD = `${libturbomodulejsijniD.length}`;
      }
      for (let q = 0; q < 2; q++) {
          let uimanagert = 1.0;
          let shootx = String.fromCharCode(101,95,56,51,95,99,97,108,99,117,108,97,116,101,0);
          let halfJ = String.fromCharCode(115,119,115,99,97,108,101,114,101,115,95,109,95,55,0);
         libturbomodulejsijniD += `${iconeditQ.length / (Math.max(2, 5))}`;
         uimanagert /= Math.max(3, parseFloat(`${parseInt(`${uimanagert}`) & 2}`));
         shootx = `${(String.fromCharCode(68,0) == shootx ? halfJ.length : shootx.length)}`;
         halfJ = `${shootx.length}`;
      }
      sourcee.push(parseInt(`${bodann}`));
   while (awayG) {
       let rewindM = true;
       let textinputf = String.fromCharCode(101,95,55,52,95,99,111,109,112,97,115,115,0);
       let short_0__: Map<any, any> = new Map([[String.fromCharCode(120,95,53,57,95,99,111,110,100,101,110,115,101,100,0),false ], [String.fromCharCode(97,102,105,114,95,98,95,52,50,0),true ]]);
         rewindM = rewindM || textinputf.length < 77;
          let navigationD = 3.0;
          let module3 = String.fromCharCode(99,111,110,102,105,103,117,114,97,116,105,111,110,115,95,105,95,54,50,0);
          let defaultlogo2 = 0.0;
         short_0__.set(`${defaultlogo2}`, short_0__.size);
         navigationD *= parseFloat(`${3 * parseInt(`${navigationD}`)}`);
         module3 += `${module3.length}`;
         defaultlogo2 /= Math.max(1, parseFloat(`${parseInt(`${navigationD}`)}`));
          let einit_l8Z: Array<any> = [449, 173, 904];
         textinputf = "2";
         einit_l8Z = [3 * einit_l8Z.length];
          let libfbjnit = String.fromCharCode(103,95,57,55,95,97,115,102,99,114,121,112,116,0);
          let dialog5 = String.fromCharCode(113,117,97,110,116,95,106,95,49,55,0);
         textinputf = `${2 | short_0__.size}`;
         libfbjnit = `${(String.fromCharCode(99,0) == dialog5 ? dialog5.length : libfbjnit.length)}`;
         rewindM = textinputf.length == 65;
      if (4 == (short_0__.size + 1) && 4 == (textinputf.length + 1)) {
         textinputf += `${((rewindM ? 1 : 3))}`;
      }
      let binddatasV = rewindM ? !rewindM : rewindM;
      do {
         rewindM = short_0__.size >= 95;
         if (binddatasV) {
            break;
         }
      } while ((!rewindM) && binddatasV);
         rewindM = null != short_0__.get(`${rewindM}`);
      while (2 == (textinputf.length << (Math.min(4, Math.abs(short_0__.size))))) {
         short_0__ = new Map([[textinputf, textinputf.length & 2]]);
         break;
      }
      bodann += (parseFloat(`${(arrowright0 ? 5 : 1)}`));
      break;
   }
   let backz = drage == String.fromCharCode(113,121,100,0);
   do {
      drage = `${drage.length}`;
      if (backz) {
         break;
      }
   } while (backz && (!drage.startsWith(`${awayG}`)));
   let slider1 = static_v8 <= 6023218.0;
   do {
      static_v8 /= Math.max(1, previeww.size & 2);
      if (slider1) {
         break;
      }
   } while ((switch_gL) && slider1);
   if (awayG) {
       let iconplayx = 3.0;
       let inviteQ = String.fromCharCode(112,95,57,55,95,114,101,116,117,114,110,101,100,0);
       let unselectedV = 3.0;
         inviteQ = `${inviteQ.length}`;
         inviteQ += `${parseInt(`${unselectedV}`)}`;
         iconplayx /= Math.max(5, parseInt(`${iconplayx}`) - parseInt(`${unselectedV}`));
          let umeng3 = true;
         iconplayx /= Math.max((parseInt(`${unselectedV}`) | (umeng3 ? 4 : 1)), 4);
      while (parseFloat(`${inviteQ.length}`) >= unselectedV) {
         inviteQ = "3";
         break;
      }
      bodann -= parseFloat(`${parseInt(`${static_v8}`) - 1}`);
   }
      bodann -= parseFloat(`${activeR / 2}`);
      sourcee = [previeww.size];
      sourcee.push(whistle_.length);
   let fastforwardb = sourcee.length <= 7932870;
   do {
      sourcee.push(1);
      if (fastforwardb) {
         break;
      }
   } while (fastforwardb && ((sourcee.length / 2) >= 5 || 1 >= (2 / (Math.max(3, previeww.size)))));
   for (let n = 0; n < 3; n++) {
      static_v8 /= Math.max(2, (whistle_ == String.fromCharCode(90,0) ? parseInt(`${static_v8}`) : whistle_.length));
   }
       let bodanY = 0;
       let moviesX = String.fromCharCode(98,95,49,56,95,115,117,112,111,114,116,101,100,0);
       let episodeB = String.fromCharCode(117,95,55,49,95,98,105,110,107,100,115,112,0);
         episodeB = "1";
       let iconnewsshareW = String.fromCharCode(114,97,110,107,95,114,95,51,53,0);
       let l_unlock0 = String.fromCharCode(115,116,114,101,97,109,105,110,102,111,95,121,95,54,55,0);
      while (episodeB.length > iconnewsshareW.length) {
         iconnewsshareW += `${bodanY}`;
         break;
      }
          let libpangleflippedg = 0;
          let minivodA = String.fromCharCode(107,95,55,50,95,110,105,109,97,116,105,111,110,0);
          let customP = String.fromCharCode(98,101,99,97,109,101,95,112,95,49,55,0);
         episodeB += `${customP.length | 2}`;
         libpangleflippedg >>= Math.min(Math.abs(2 & libpangleflippedg), 1);
         minivodA = "3";
         customP = `${(minivodA == String.fromCharCode(81,0) ? libpangleflippedg : minivodA.length)}`;
          let bnewinterstitial0 = 4.0;
          let anythinkA = 5.0;
         iconnewsshareW += `${3 & parseInt(`${anythinkA}`)}`;
         bnewinterstitial0 -= parseFloat(`${parseInt(`${bnewinterstitial0}`)}`);
         anythinkA /= Math.max(parseFloat(`${parseInt(`${bnewinterstitial0}`) - parseInt(`${bnewinterstitial0}`)}`), 5);
      for (let o = 0; o < 1; o++) {
         episodeB = `${(iconnewsshareW == String.fromCharCode(114,0) ? iconnewsshareW.length : episodeB.length)}`;
      }
      if (episodeB.length < 3) {
          let diceb = String.fromCharCode(105,110,116,114,111,100,117,99,116,105,111,110,95,101,95,54,52,0);
          let libjsiV = String.fromCharCode(116,111,110,101,115,95,111,95,51,52,0);
          let arrowupZ = 5.0;
          let grayr = String.fromCharCode(97,95,50,55,95,111,114,100,101,114,115,0);
         episodeB += `${episodeB.length + libjsiV.length}`;
         diceb = `${3 & grayr.length}`;
         libjsiV = `${diceb.length & grayr.length}`;
         arrowupZ += parseFloat(`${grayr.length + diceb.length}`);
      }
      for (let g = 0; g < 2; g++) {
         iconnewsshareW += `${(String.fromCharCode(65,0) == iconnewsshareW ? iconnewsshareW.length : l_unlock0.length)}`;
      }
         l_unlock0 = `${l_unlock0.length | 3}`;
      switch_gL = drage == String.fromCharCode(121,0);
      bodanY >>= Math.min(1, Math.abs(moviesX.length % (Math.max(10, moviesX.length))));
      sourcee.push(3);
      awayG = whistle_.startsWith(`${dependencyb}`);
      switch_gL = !dependencyb && 4.10 > static_v8;
   for (let j = 0; j < 2; j++) {
       let uploadg = 1.0;
       let eacta = 1;
       let moviesx = String.fromCharCode(117,110,105,110,115,116,97,108,108,95,100,95,57,50,0);
       let vipsporty = 3.0;
      if (2.62 <= (eacta / (Math.max(vipsporty, 1)))) {
         vipsporty += parseFloat(`${parseInt(`${uploadg}`)}`);
      }
      let mode3 = 9389038 <= eacta;
      do {
         eacta ^= moviesx.length;
         if (mode3) {
            break;
         }
      } while (((eacta / 5) <= 3 || 5 <= (parseInt(`${uploadg}`) + eacta)) && mode3);
         eacta |= parseInt(`${uploadg}`) * parseInt(`${vipsporty}`);
         eacta *= parseInt(`${vipsporty}`);
      for (let p = 0; p < 3; p++) {
         moviesx += `${parseInt(`${uploadg}`)}`;
      }
       let data0: Array<any> = [50, 578, 928];
      if (moviesx.endsWith(`${vipsporty}`)) {
         vipsporty -= parseFloat(`${parseInt(`${uploadg}`) + 3}`);
      }
      while ((2 % (Math.max(2, eacta))) >= 4 && 2 >= (eacta % (Math.max(data0.length, 3)))) {
          let baidua: Array<any> = [143, 520, 568];
          let bootu: Map<any, any> = new Map([[String.fromCharCode(118,95,49,52,95,99,111,108,111,99,97,116,101,100,0),String.fromCharCode(119,95,51,57,0)], [String.fromCharCode(107,95,52,95,103,101,116,110,101,116,119,111,114,107,112,97,114,97,109,115,0),String.fromCharCode(116,95,57,48,95,114,111,98,111,108,101,99,116,114,105,99,0)], [String.fromCharCode(109,99,100,101,99,95,113,95,54,0),String.fromCharCode(109,97,106,111,114,95,98,95,52,48,0)]]);
          let mbbannervG = String.fromCharCode(98,95,56,52,95,112,117,98,0);
          let runtimeschedulere = 4;
          let questT = String.fromCharCode(98,95,50,55,95,105,115,111,108,97,116,101,0);
         data0.push(runtimeschedulere / (Math.max(6, data0.length)));
         baidua = [questT.length];
         bootu = new Map([[`${bootu.size}`, 1 << (Math.min(5, Math.abs(bootu.size)))]]);
         mbbannervG = `${bootu.size}`;
         runtimeschedulere *= 3;
         questT += `${questT.length}`;
         break;
      }
          let floating9 = 4.0;
          let schedulerz: Array<any> = [728, 865, 796];
          let singaporek: Map<any, any> = new Map([[String.fromCharCode(121,117,118,103,98,114,112,95,115,95,49,54,0),47], [String.fromCharCode(113,95,52,52,95,114,101,108,102,117,110,99,0),123]]);
         data0 = [2];
         floating9 /= Math.max(1, parseFloat(`${singaporek.size}`));
         schedulerz.push(parseInt(`${floating9}`) >> (Math.min(schedulerz.length, 1)));
         singaporek = new Map([[`${schedulerz.length}`, 1]]);
         vipsporty /= Math.max(parseFloat(`${1}`), 1);
          let dialogX = false;
          let mountingW = String.fromCharCode(112,95,57,49,95,104,121,112,111,116,104,101,115,101,115,0);
          let uploadi = true;
         moviesx = `${mountingW.length}`;
         dialogX = !uploadi || dialogX;
         mountingW = `${((dialogX ? 2 : 4))}`;
         eacta -= 1 % (Math.max(parseInt(`${uploadg}`), 8));
      historyE.push((2 & (switch_gL ? 4 : 5)));
   }
   if (bodann < 3.21) {
       let statisticsY = String.fromCharCode(116,114,97,105,116,95,115,95,56,55,0);
       let bdxadsdkk: Map<any, any> = new Map([[String.fromCharCode(112,105,120,101,108,115,120,95,109,95,52,51,0),String.fromCharCode(105,100,101,110,116,105,102,105,97,98,108,101,95,52,95,54,54,0)], [String.fromCharCode(115,95,51,95,110,101,119,108,105,110,101,115,0),String.fromCharCode(97,108,105,97,115,101,115,95,56,95,51,54,0)]]);
       let ewarded6 = String.fromCharCode(105,109,112,108,105,101,115,95,52,95,56,53,0);
      for (let q = 0; q < 3; q++) {
         ewarded6 = `${bdxadsdkk.size << (Math.min(ewarded6.length, 1))}`;
      }
      for (let e = 0; e < 3; e++) {
         ewarded6 = `${statisticsY.length ^ ewarded6.length}`;
      }
         bdxadsdkk.set(ewarded6, ewarded6.length);
      while (bdxadsdkk.size < statisticsY.length) {
         bdxadsdkk.set(`${ewarded6}`, (ewarded6 == String.fromCharCode(78,0) ? ewarded6.length : bdxadsdkk.size));
         break;
      }
       let interstitialO = 0;
       let livenodatabgimgq = 0;
         bdxadsdkk = new Map([[`${livenodatabgimgq}`, interstitialO / (Math.max(livenodatabgimgq, 3))]]);
       let backwardA: Map<any, any> = new Map([[String.fromCharCode(97,100,100,105,116,105,111,110,97,108,95,108,95,52,56,0),454], [String.fromCharCode(97,99,99,117,114,97,116,101,95,50,95,57,48,0),16]]);
          let header4 = false;
          let profileactivec = String.fromCharCode(103,101,110,101,114,105,99,95,107,95,55,48,0);
          let libyogac: Array<any> = [166, 480];
         ewarded6 += "1";
         header4 = profileactivec.length < 69;
         profileactivec = `${(libyogac.length >> (Math.min(4, Math.abs((header4 ? 5 : 5)))))}`;
         libyogac = [2];
      let libreactnativejniw = backwardA.size >= 7357708;
      do {
         backwardA.set(`${livenodatabgimgq}`, 3 << (Math.min(2, Math.abs(backwardA.size))));
         if (libreactnativejniw) {
            break;
         }
      } while (((backwardA.size % 2) <= 5) && libreactnativejniw);
      dependencyb = String.fromCharCode(88,0) == ewarded6;
   }
   let shirti = arrowright0 ? !arrowright0 : arrowright0;
   do {
      arrowright0 = sourcee.includes(static_v8);
      if (shirti) {
         break;
      }
   } while (shirti && (4 >= sourcee.length && 5 >= (4 & sourcee.length)));
      policy4 += `${(1 + (awayG ? 2 : 3))}`;
      static_v8 /= Math.max(4, sourcee.length);
      drage = `${previeww.size}`;
      activeR += ((awayG ? 2 : 1) ^ whistle_.length);
   for (let m = 0; m < 1; m++) {
       let leaguen = false;
       let textlayoutmanagerA = String.fromCharCode(116,119,111,112,97,115,115,95,116,95,57,53,0);
       let mbjscommonL = String.fromCharCode(100,95,54,57,95,97,105,110,116,0);
      if (leaguen && 3 >= textlayoutmanagerA.length) {
         leaguen = textlayoutmanagerA == String.fromCharCode(103,0);
      }
         textlayoutmanagerA = `${textlayoutmanagerA.length}`;
         textlayoutmanagerA = `${((leaguen ? 5 : 2))}`;
       let downloaderk = String.fromCharCode(115,95,49,55,95,97,118,97,116,97,114,115,0);
      while (downloaderk == mbjscommonL) {
          let colors_: Array<any> = [689, 419];
          let singled = false;
          let footballF = String.fromCharCode(98,95,57,51,95,112,114,111,114,101,115,100,115,112,0);
          let logoC = 1.0;
          let videoy = String.fromCharCode(103,95,52,53,95,114,97,114,105,116,121,0);
         mbjscommonL += `${1 << (Math.min(2, textlayoutmanagerA.length))}`;
         colors_ = [colors_.length - 1];
         singled = 77 >= footballF.length;
         footballF += "1";
         logoC -= parseFloat(`${videoy.length % (Math.max(footballF.length, 6))}`);
         videoy += "3";
         break;
      }
         mbjscommonL += `${mbjscommonL.length % 3}`;
      let starN = leaguen ? !leaguen : leaguen;
      do {
         leaguen = (mbjscommonL.length ^ downloaderk.length) == 89;
         if (starN) {
            break;
         }
      } while ((!leaguen && downloaderk.length > 2) && starN);
       let stringC = true;
         textlayoutmanagerA = `${mbjscommonL.length}`;
      previeww.set(`${bodann}`, parseInt(`${bodann}`));
   }
   while (!arrowright0 || (activeR << (Math.min(Math.abs(1), 3))) <= 2) {
      activeR %= Math.max(previeww.size | drage.length, 5);
      break;
   }
       let catalogM = 5.0;
       let pcopy_v2 = 0;
       let roomD: Map<any, any> = new Map([[String.fromCharCode(111,98,115,101,114,118,105,110,103,95,111,95,52,57,0),886], [String.fromCharCode(117,110,98,108,117,114,95,56,95,55,49,0),598], [String.fromCharCode(101,95,53,52,95,101,118,115,105,103,110,97,108,0),245]]);
      while (Array.from(roomD.keys()).includes(`${catalogM}`)) {
         catalogM -= parseFloat(`${1 << (Math.min(Math.abs(parseInt(`${catalogM}`)), 2))}`);
         break;
      }
      for (let y = 0; y < 1; y++) {
         pcopy_v2 ^= roomD.size >> (Math.min(Math.abs(2), 4));
      }
          let arrowJ: Array<any> = [879, 621];
          let philippinesm = String.fromCharCode(112,95,54,48,95,102,111,99,117,115,97,98,108,101,0);
          let calendar0: Map<any, any> = new Map([[String.fromCharCode(112,116,114,109,97,112,95,106,95,50,52,0),412], [String.fromCharCode(114,95,50,95,109,97,116,114,105,120,102,0),917], [String.fromCharCode(115,95,50,57,95,98,105,116,111,112,115,0),770]]);
         catalogM *= parseFloat(`${3 & roomD.size}`);
         arrowJ.push((philippinesm == String.fromCharCode(100,0) ? calendar0.size : philippinesm.length));
         calendar0.set(philippinesm, arrowJ.length + 2);
         catalogM -= parseFloat(`${pcopy_v2 * 3}`);
         roomD = new Map([[`${roomD.size}`, 1]]);
      while (roomD.size > 5) {
         roomD.set(`${pcopy_v2}`, roomD.size);
         break;
      }
       let xnewsG: Array<any> = [28, 476];
       let floater_ = true;
       let over0 = String.fromCharCode(105,95,56,53,95,116,114,105,101,115,0);
       let whiteanimationlivev = String.fromCharCode(102,102,112,114,111,98,101,95,113,95,53,56,0);
      historyE.push(policy4.length << (Math.min(1, Math.abs(parseInt(`${catalogM}`)))));
   while (sourcee.includes(infoZ.length)) {
       let path8 = String.fromCharCode(101,120,116,101,114,105,111,114,95,55,95,51,0);
       let modalS: Array<any> = [31, 285];
       let livenodatabgimg_ = String.fromCharCode(112,108,97,121,97,98,108,101,95,115,95,52,51,0);
       let photon: Array<any> = [454, 187, 432];
       let crownL = String.fromCharCode(98,108,97,107,101,95,122,95,50,51,0);
      for (let j = 0; j < 1; j++) {
          let libfollyC = true;
          let skipO = String.fromCharCode(104,95,57,48,95,100,105,118,112,111,119,109,0);
          let traminih = String.fromCharCode(98,105,116,95,115,95,57,48,0);
         modalS.push(modalS.length ^ livenodatabgimg_.length);
         libfollyC = !traminih.includes(`${libfollyC}`);
         skipO += `${(skipO.length * (libfollyC ? 2 : 1))}`;
         traminih = `${skipO.length << (Math.min(Math.abs(2), 5))}`;
      }
      let libreanimatedJ = 6237989 >= livenodatabgimg_.length;
      do {
         livenodatabgimg_ += `${modalS.length - path8.length}`;
         if (libreanimatedJ) {
            break;
         }
      } while ((livenodatabgimg_.startsWith(crownL)) && libreanimatedJ);
      if (2 == crownL.length) {
         photon = [livenodatabgimg_.length];
      }
      if ((livenodatabgimg_.length << (Math.min(Math.abs(2), 1))) <= 2 || 2 <= (photon.length << (Math.min(livenodatabgimg_.length, 1)))) {
          let switch_xyf = String.fromCharCode(116,101,109,112,108,97,116,101,95,51,95,49,0);
          let zoomr = 3.0;
          let selectionh: Array<any> = [457, 330, 413];
          let flyer1 = String.fromCharCode(114,101,99,105,112,105,101,110,116,115,95,116,95,50,57,0);
         photon.push((crownL == String.fromCharCode(80,0) ? photon.length : crownL.length));
         switch_xyf = `${flyer1.length}`;
         zoomr -= parseFloat(`${selectionh.length ^ parseInt(`${zoomr}`)}`);
         selectionh = [flyer1.length & 2];
      }
         livenodatabgimg_ += `${crownL.length % (Math.max(2, 3))}`;
         crownL += `${path8.length}`;
         crownL += `${photon.length * 2}`;
       let bottomJ = String.fromCharCode(119,104,101,101,108,95,122,95,52,52,0);
      let reactnavigationF = String.fromCharCode(117,95,119,100,55,115,109,0) == bottomJ;
      do {
         bottomJ = `${livenodatabgimg_.length}`;
         if (reactnavigationF) {
            break;
         }
      } while (reactnavigationF && (3 <= (3 << (Math.min(2, photon.length)))));
       let modalu = String.fromCharCode(107,95,56,57,95,99,97,112,0);
       let questicond = String.fromCharCode(120,95,55,54,95,115,109,97,108,108,0);
      for (let v = 0; v < 2; v++) {
         crownL += `${(path8 == String.fromCharCode(72,0) ? path8.length : modalS.length)}`;
      }
      let flipper9 = String.fromCharCode(97,51,103,107,99,111,107,122,97,0) == path8;
      do {
         path8 = `${livenodatabgimg_.length >> (Math.min(Math.abs(1), 3))}`;
         if (flipper9) {
            break;
         }
      } while ((path8.includes(modalu)) && flipper9);
      let iconeditY = 8352566 <= livenodatabgimg_.length;
      do {
          let fcdaebecbcbafcdfceaaeccfeacdby = String.fromCharCode(110,95,56,48,95,107,115,101,116,0);
          let libsgcoreI = String.fromCharCode(103,95,49,48,95,108,105,98,118,111,114,98,105,115,0);
          let scrollview4 = String.fromCharCode(112,117,116,95,53,95,54,57,0);
         livenodatabgimg_ = `${(String.fromCharCode(77,0) == crownL ? crownL.length : modalu.length)}`;
         fcdaebecbcbafcdfceaaeccfeacdby = `${libsgcoreI.length << (Math.min(Math.abs(1), 5))}`;
         libsgcoreI += `${libsgcoreI.length}`;
         scrollview4 += `${libsgcoreI.length - scrollview4.length}`;
         if (iconeditY) {
            break;
         }
      } while ((questicond != String.fromCharCode(52,0)) && iconeditY);
       let trophyD = 4.0;
          let danger6: Array<any> = [264, 936];
          let libsgcorek = String.fromCharCode(108,95,56,57,0);
         questicond += `${modalu.length}`;
         danger6.push(danger6.length >> (Math.min(libsgcorek.length, 5)));
         libsgcorek = `${libsgcorek.length}`;
      infoZ = [previeww.size];
      break;
   }
      historyE.push(2 ^ sourcee.length);
       let bgvipxvodU = 2;
       let forwardo = String.fromCharCode(100,114,97,103,103,101,100,95,104,95,57,51,0);
      let formZ = bgvipxvodU <= 6730073;
      do {
          let native3 = false;
          let contextW = 2;
         bgvipxvodU &= 2;
         native3 = 86 <= contextW;
         contextW += contextW * 1;
         if (formZ) {
            break;
         }
      } while (formZ && (3 <= bgvipxvodU));
       let leftL = String.fromCharCode(114,95,55,48,95,104,97,98,108,101,0);
       let downloading0 = String.fromCharCode(115,95,49,48,95,97,110,105,109,97,116,101,0);
          let ksady = String.fromCharCode(112,97,99,107,97,103,101,100,95,115,95,56,48,0);
          let materialx = String.fromCharCode(114,101,102,101,114,101,110,101,95,49,95,55,57,0);
         forwardo += `${ksady.length}`;
         ksady += `${(materialx == String.fromCharCode(84,0) ? materialx.length : materialx.length)}`;
          let termsQ: Array<any> = [223, 527];
         forwardo += `${(forwardo == String.fromCharCode(69,0) ? forwardo.length : downloading0.length)}`;
         termsQ.push(termsQ.length & termsQ.length);
       let zoomp: Map<any, any> = new Map([[String.fromCharCode(99,108,105,112,112,105,110,103,110,111,100,101,95,122,95,56,52,0),String.fromCharCode(110,95,49,50,95,100,101,118,101,108,111,112,101,114,0)], [String.fromCharCode(99,95,52,95,115,109,105,108,105,110,103,0),String.fromCharCode(100,95,51,49,95,101,99,116,97,110,103,108,101,0)], [String.fromCharCode(100,118,118,105,100,101,111,95,112,95,49,51,0),String.fromCharCode(114,97,105,115,101,100,95,116,95,56,48,0)]]);
      if (4 == bgvipxvodU) {
         leftL += `${(forwardo == String.fromCharCode(119,0) ? forwardo.length : downloading0.length)}`;
      }
      infoZ = [parseInt(`${static_v8}`) * historyE.length];

    setIsDialogOpen(!isDialogOpen);
  };

  const toggleHistory = (vod: wwControl) => {
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
