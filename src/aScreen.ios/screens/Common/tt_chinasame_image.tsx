import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet, FlatList} from 'react-native';
import ScreenContainer from '../../components/container/tt_backward';
import {RootStackScreenProps} from '@type/tt_temperature';
import {useTheme} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from '@hooks/tt_spec_download';
import {ttOrange} from '@redux/tt_updates_bottom';

import TitleWithBackButtonHeader from '../../components/header/tt_typing_tail_header';
import {ttExpired, ttStreaming} from '@redux/reducers/tt_configure_injury';
import {removeVodsFromHistory, playVod} from '@redux/actions/tt_activity';
import VodHistoryCard from '../../components/vod/tt_country';
import CheckBoxSelected from '@static/images/historyPlayerFloater.svg';
import CheckBoxUnselected from '@static/images/foundWindRecommendation.svg';
import {ttAppsOther} from '@type/tt_line_borderless';
import {Button} from '@rneui/themed';
import ConfirmationModal from '../../components/modal/tt_styles';
import VodLiveStationListVertical from '../../components/vod/tt_flipper';
import EmptyList from '../../components/common/tt_logo_desc';
import {ScrollView} from 'react-native-gesture-handler';

type ttBing = {
  item: ttExpired;
};
export default ({navigation, route}: RootStackScreenProps<'电视台列表'>) => {
  const {liveStationItemList} = route.params;
  const {colors, textVariants, icons, spacing} = useTheme();
  const dispatch = useAppDispatch();
  const vodReducer: ttStreaming = useAppSelector(
    ({vodReducer}: ttOrange) => vodReducer,
  );
  const history = vodReducer.history;
  const [isEditing, setIsEditing] = useState(false);
  const [removeHistory, setRemoveHistory] = useState<Array<ttAppsOther>>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const toggleOverlay = () => {
       let targetu = 0.0;
    let floatingd: Map<any, any> = new Map([[String.fromCharCode(106,95,50,53,95,97,115,111,99,0),false ], [String.fromCharCode(102,111,114,109,97,116,116,101,114,95,108,95,55,53,0),false ]]);
    let updatesQ = 1.0;
    let eighteene = String.fromCharCode(107,95,55,54,95,115,116,114,101,97,109,105,110,102,111,0);
    let catagoryg = 5.0;
    let storeA = String.fromCharCode(118,108,99,115,112,101,99,95,109,95,55,52,0);
    let users = 4.0;
    let minivodw = false;
    let vietnamp = String.fromCharCode(112,116,111,110,95,118,95,53,48,0);
    let gmailD = String.fromCharCode(99,95,55,53,95,105,110,105,116,105,97,108,105,115,101,0);
    let resendl = 4;
      users += floatingd.size % 2;
   let membershipy = catagoryg <= 9284813.0;
   do {
       let playlistI = true;
       let guideq: Array<any> = [798, 157, 55];
      let sharedX = playlistI ? !playlistI : playlistI;
      do {
          let penalty6: Map<any, any> = new Map([[String.fromCharCode(114,101,99,118,95,121,95,54,55,0),364], [String.fromCharCode(109,95,56,95,109,111,109,101,110,116,97,114,121,0),614], [String.fromCharCode(112,97,114,115,101,95,113,95,53,0),118]]);
          let weiboe = 2.0;
          let customk = 5.0;
          let navigationu = 2.0;
         playlistI = !playlistI || guideq.length == 32;
         penalty6 = new Map([[`${penalty6.size}`, penalty6.size]]);
         weiboe -= parseFloat(`${parseInt(`${customk}`) << (Math.min(1, Math.abs(parseInt(`${navigationu}`))))}`);
         customk -= parseInt(`${weiboe}`);
         navigationu += parseFloat(`${1 / (Math.max(7, parseInt(`${navigationu}`)))}`);
         if (sharedX) {
            break;
         }
      } while ((playlistI) && sharedX);
      for (let h = 0; h < 2; h++) {
          let report7 = 0.0;
          let z_lockq = 2.0;
          let reactH = 3.0;
          let actionC: Map<any, any> = new Map([[String.fromCharCode(99,111,111,108,100,111,119,110,115,95,55,95,52,49,0),312], [String.fromCharCode(121,115,108,111,103,95,98,95,57,53,0),625], [String.fromCharCode(109,95,55,56,95,110,97,108,117,0),236]]);
         playlistI = guideq.length > actionC.size;
         report7 /= Math.max(parseInt(`${reactH}`), 4);
         z_lockq /= Math.max(5, parseInt(`${reactH}`) + 2);
         actionC.set(`${z_lockq}`, parseInt(`${z_lockq}`) - parseInt(`${report7}`));
      }
      catagoryg -= parseInt(`${targetu}`);
      if (membershipy) {
         break;
      }
   } while (membershipy && (catagoryg <= vietnamp.length));
       let expandg = 3;
       let suggestionO = 2;
       let logout0 = 0.0;
      let dialogM = suggestionO >= 8741805;
      do {
         suggestionO ^= parseInt(`${logout0}`);
         if (dialogM) {
            break;
         }
      } while (dialogM && (4.28 > (4.36 - logout0) && (parseInt(`${logout0}`) - suggestionO) > 1));
         suggestionO -= parseInt(`${logout0}`);
      let modelsG = 6115212 <= suggestionO;
      do {
          let nativeexs = 2;
          let connectioni: Array<any> = [150, 143];
          let androidd = false;
         suggestionO &= connectioni.length;
         nativeexs &= nativeexs << (Math.min(Math.abs(nativeexs), 5));
         connectioni = [3];
         if (modelsG) {
            break;
         }
      } while (modelsG && (expandg <= 2));
      for (let i = 0; i < 1; i++) {
         logout0 *= parseInt(`${logout0}`);
      }
      let floating7 = 8916610 <= expandg;
      do {
         expandg *= suggestionO;
         if (floating7) {
            break;
         }
      } while (((4 * expandg) <= 5 || 3.39 <= (expandg * logout0)) && floating7);
          let zhuboU = false;
          let sideV: Map<any, any> = new Map([[String.fromCharCode(105,95,49,56,95,112,97,103,101,115,0),String.fromCharCode(116,95,57,50,95,116,115,97,110,0)], [String.fromCharCode(116,115,99,99,100,97,116,97,95,102,95,56,0),String.fromCharCode(115,117,98,115,99,114,105,112,116,95,119,95,54,53,0)]]);
         suggestionO -= expandg;
         zhuboU = zhuboU && sideV.size == 54;
         sideV.set(`${zhuboU}`, ((zhuboU ? 2 : 4) >> (Math.min(Math.abs(sideV.size), 5))));
      let backgroundV = logout0 <= 9477220.0;
      do {
         logout0 /= Math.max(1, parseInt(`${logout0}`) * 2);
         if (backgroundV) {
            break;
         }
      } while ((4.33 == logout0) && backgroundV);
      let combineW = 5674745 >= suggestionO;
      do {
         suggestionO &= expandg;
         if (combineW) {
            break;
         }
      } while ((logout0 <= suggestionO) && combineW);
         expandg /= Math.max(parseInt(`${logout0}`) / 1, 5);
      catagoryg -= parseInt(`${updatesQ}`) / (Math.max(7, parseInt(`${users}`)));
      eighteene = "3";
       let materialc = String.fromCharCode(109,95,51,95,114,101,102,100,117,112,101,0);
          let listk = false;
         materialc = `${((listk ? 3 : 4) + 2)}`;
      while (materialc == materialc) {
          let watchj = 1;
          let basketballr = 1.0;
          let hoverk = 1.0;
          let logout5 = false;
         materialc = `${((logout5 ? 4 : 2) - parseInt(`${basketballr}`))}`;
         watchj ^= watchj;
         basketballr *= parseFloat(`${watchj & 1}`);
         hoverk /= Math.max(watchj, 5);
         logout5 = 68 < watchj;
         break;
      }
      for (let l = 0; l < 2; l++) {
         materialc = `${(materialc == String.fromCharCode(79,0) ? materialc.length : materialc.length)}`;
      }
      storeA = "1";
       let otherK = String.fromCharCode(115,97,105,111,95,114,95,55,55,0);
         otherK = `${otherK.length >> (Math.min(otherK.length, 4))}`;
          let crosse = 5.0;
          let combinedo = 3;
          let rewindj = String.fromCharCode(111,95,53,52,95,114,111,98,111,108,101,99,116,114,105,99,0);
         otherK += "3";
         crosse /= Math.max(parseFloat(`${parseInt(`${crosse}`)}`), 5);
         combinedo |= parseInt(`${crosse}`);
         rewindj = `${combinedo | parseInt(`${crosse}`)}`;
         otherK = `${otherK.length}`;
      targetu /= Math.max(3, 1 + parseInt(`${catagoryg}`));
   let unreadq = vietnamp.length >= 9134200;
   do {
      vietnamp += `${parseInt(`${targetu}`)}`;
      if (unreadq) {
         break;
      }
   } while (unreadq && (vietnamp.length >= parseInt(`${users}`)));
       let flipper5 = 5;
      while (1 > (flipper5 % (Math.max(8, flipper5)))) {
         flipper5 %= Math.max(3, flipper5);
         break;
      }
      for (let d = 0; d < 3; d++) {
          let plusN = String.fromCharCode(115,111,108,118,101,114,95,113,95,53,57,0);
          let roomJ = String.fromCharCode(99,97,108,108,101,100,95,56,95,54,57,0);
          let megaphoneV = 2.0;
          let gpayo = String.fromCharCode(116,101,109,112,110,97,109,101,95,120,95,54,50,0);
         flipper5 -= roomJ.length / 2;
         plusN = `${(plusN == String.fromCharCode(122,0) ? plusN.length : parseInt(`${megaphoneV}`))}`;
         roomJ = `${parseInt(`${megaphoneV}`) % 3}`;
         gpayo = `${(plusN == String.fromCharCode(48,0) ? gpayo.length : plusN.length)}`;
      }
      let fieldX = flipper5 >= 9362006;
      do {
         flipper5 += 2 + flipper5;
         if (fieldX) {
            break;
         }
      } while ((4 == flipper5) && fieldX);
      floatingd.set(`${minivodw}`, gmailD.length * 1);
   let details1 = 8182462.0 <= catagoryg;
   do {
       let handlerz = String.fromCharCode(114,95,52,51,95,115,101,108,101,99,116,105,111,110,0);
       let mbridgeR = String.fromCharCode(103,95,55,56,95,110,101,103,111,116,105,97,116,105,111,110,0);
         mbridgeR += `${(handlerz == String.fromCharCode(80,0) ? mbridgeR.length : handlerz.length)}`;
          let arrow_ = String.fromCharCode(122,95,56,54,95,107,101,121,115,112,101,99,0);
          let files = 2.0;
         handlerz = `${(String.fromCharCode(103,0) == arrow_ ? mbridgeR.length : arrow_.length)}`;
         files += parseFloat(`${2 << (Math.min(Math.abs(parseInt(`${files}`)), 1))}`);
         handlerz += "3";
      if (handlerz.length <= 5) {
          let friendse: Map<any, any> = new Map([[String.fromCharCode(115,116,97,116,105,99,95,104,95,53,48,0),411], [String.fromCharCode(109,95,57,95,101,110,99,114,121,112,116,0),257], [String.fromCharCode(100,117,112,108,105,99,97,116,101,95,106,95,56,54,0),495]]);
          let indicatorL = 1.0;
         handlerz += `${3 + mbridgeR.length}`;
         friendse.set(`${indicatorL}`, 1 << (Math.min(4, Math.abs(parseInt(`${indicatorL}`)))));
      }
      if (mbridgeR != handlerz) {
         handlerz += `${mbridgeR.length + handlerz.length}`;
      }
      if (handlerz.length > 4) {
         handlerz = `${2 * mbridgeR.length}`;
      }
      catagoryg *= mbridgeR.length | storeA.length;
      if (details1) {
         break;
      }
   } while ((2.69 == (users / (Math.max(5, catagoryg))) && 2.69 == (users / (Math.max(catagoryg, 1)))) && details1);
       let suggestionB: Array<any> = [191, 995, 674];
       let penaltyq = 5;
       let scorej: Array<any> = [915, 70, 482];
          let roomV = 2.0;
          let minimizew = String.fromCharCode(105,110,105,116,97,108,95,110,95,52,49,0);
          let selectionV: Array<any> = [String.fromCharCode(102,95,50,50,95,101,115,115,101,110,99,101,0), String.fromCharCode(103,95,55,53,95,97,115,121,110,99,104,114,111,110,111,117,115,0)];
         penaltyq += minimizew.length >> (Math.min(2, Math.abs(penaltyq)));
         roomV += parseInt(`${roomV}`) >> (Math.min(selectionV.length, 2));
         minimizew += `${parseInt(`${roomV}`) * selectionV.length}`;
       let foregrounda = 4.0;
       let commonz = 1.0;
         suggestionB.push(parseInt(`${commonz}`));
      while (4 < (4 >> (Math.min(1, Math.abs(penaltyq)))) || (penaltyq >> (Math.min(scorej.length, 3))) < 4) {
         penaltyq -= 1;
         break;
      }
         foregrounda /= Math.max(2 - suggestionB.length, 1);
      if (3.27 > (3.15 * foregrounda) || 3 > (4 - penaltyq)) {
         foregrounda -= penaltyq;
      }
         suggestionB = [suggestionB.length >> (Math.min(Math.abs(1), 4))];
         penaltyq |= penaltyq;
         foregrounda -= parseInt(`${commonz}`);
      vietnamp = `${(String.fromCharCode(51,0) == gmailD ? gmailD.length : parseInt(`${users}`))}`;
   if (1 < (1 % (Math.max(8, eighteene.length)))) {
      floatingd.set(`${eighteene}`, eighteene.length ^ floatingd.size);
   }
   for (let d = 0; d < 3; d++) {
      minivodw = String.fromCharCode(56,0) == vietnamp;
   }
       let nterstitialK = 2;
       let loginv: Map<any, any> = new Map([[String.fromCharCode(104,105,100,105,110,103,95,108,95,51,50,0),String.fromCharCode(121,98,108,111,99,107,95,104,95,57,53,0)], [String.fromCharCode(105,95,49,57,95,97,105,110,116,105,110,103,0),String.fromCharCode(109,95,57,55,95,118,101,99,116,111,114,115,99,111,112,101,0)]]);
         nterstitialK <<= Math.min(5, Math.abs(loginv.size - nterstitialK));
      if (loginv.get(`${nterstitialK}`) != null) {
         loginv = new Map([[`${loginv.size}`, nterstitialK + 1]]);
      }
      let dropdown9 = 7606060 <= nterstitialK;
      do {
          let lightf = String.fromCharCode(99,111,114,114,101,108,97,116,101,95,53,95,52,54,0);
          let catalogz = String.fromCharCode(116,115,97,110,95,101,95,54,51,0);
          let carouselr = String.fromCharCode(111,112,116,105,111,110,97,108,95,98,95,53,54,0);
         nterstitialK ^= 2;
         lightf += `${carouselr.length}`;
         catalogz = `${1 | catalogz.length}`;
         carouselr += "3";
         if (dropdown9) {
            break;
         }
      } while (dropdown9 && ((3 << (Math.min(3, Math.abs(nterstitialK)))) >= 1 || (loginv.size << (Math.min(1, Math.abs(nterstitialK)))) >= 3));
       let confirmationA = String.fromCharCode(119,95,49,53,95,116,105,109,101,108,105,110,101,0);
      if ((4 * loginv.size) > 3 && 2 > (loginv.size * 4)) {
         loginv.set(`${nterstitialK}`, nterstitialK);
      }
         confirmationA = "2";
      updatesQ /= Math.max(4, (parseFloat(`${vietnamp.length % (Math.max(3, (minivodw ? 2 : 5)))}`)));
      catagoryg /= Math.max((vietnamp == String.fromCharCode(57,0) ? parseInt(`${targetu}`) : vietnamp.length), 1);
      catagoryg -= storeA.length & 2;
      minivodw = String.fromCharCode(79,0) == gmailD;
      users += (2 | (minivodw ? 3 : 3));
   while (1.35 <= (1.75 * updatesQ) && (users * 1.75) <= 5.11) {
       let trash0: Map<any, any> = new Map([[String.fromCharCode(109,95,49,56,95,115,101,114,105,97,108,105,122,97,98,108,101,0),true ], [String.fromCharCode(99,97,115,101,115,95,115,95,57,0),false ]]);
       let typess: Array<any> = [726, 586, 139];
          let applicationE = 3.0;
         typess = [2 - typess.length];
         applicationE /= Math.max(parseFloat(`${parseInt(`${applicationE}`)}`), 5);
         trash0 = new Map([[`${trash0.size}`, trash0.size]]);
      while (typess.length > trash0.size) {
         typess = [1];
         break;
      }
         typess = [typess.length / (Math.max(2, trash0.size))];
         trash0 = new Map([[`${trash0.size}`, typess.length / 2]]);
         trash0.set(`${typess.length}`, trash0.size);
      users += storeA.length / (Math.max(eighteene.length, 1));
      break;
   }
   for (let x = 0; x < 3; x++) {
       let favoriter = String.fromCharCode(109,95,50,57,95,109,111,110,107,101,121,0);
       let checkboxk: Map<any, any> = new Map([[String.fromCharCode(116,97,107,101,95,103,95,55,50,0),242], [String.fromCharCode(122,95,51,57,95,115,119,105,102,116,0),564]]);
       let short_qD = 3;
         favoriter = `${favoriter.length & short_qD}`;
          let alert_ = String.fromCharCode(119,104,101,114,101,95,100,95,49,54,0);
          let const_upD: Array<any> = [66, 397, 657];
          let typesY = 4;
         checkboxk = new Map([[favoriter, 1 >> (Math.min(3, alert_.length))]]);
         alert_ += `${2 >> (Math.min(4, const_upD.length))}`;
         const_upD.push(typesY);
         typesY >>= Math.min(2, Math.abs(typesY));
      let mappingB = 7154220 >= short_qD;
      do {
         short_qD *= (favoriter == String.fromCharCode(108,0) ? favoriter.length : checkboxk.size);
         if (mappingB) {
            break;
         }
      } while (((2 + favoriter.length) >= 3) && mappingB);
      let watchu = favoriter == String.fromCharCode(120,57,57,106,51,50,106,110,0);
      do {
          let backwardv = String.fromCharCode(120,95,50,53,95,103,114,111,119,116,104,0);
         favoriter = `${(backwardv == String.fromCharCode(101,0) ? checkboxk.size : backwardv.length)}`;
         if (watchu) {
            break;
         }
      } while (watchu && (!favoriter.startsWith(`${checkboxk.size}`)));
          let androidZ = 4.0;
          let settingm = true;
         checkboxk.set(`${androidZ}`, parseInt(`${androidZ}`) >> (Math.min(2, Math.abs(1))));
         settingm = (!settingm ? settingm : !settingm);
          let connectionY = String.fromCharCode(98,105,119,101,105,103,104,116,95,114,95,51,49,0);
          let nativeexX: Array<any> = [487, 157];
          let reactu: Array<any> = [795, 499];
         checkboxk.set(connectionY, nativeexX.length - connectionY.length);
         nativeexX = [1];
       let contextr = String.fromCharCode(99,95,56,48,95,99,111,110,116,114,97,105,110,101,100,0);
       let gmailY = String.fromCharCode(99,95,50,50,95,100,109,105,120,0);
      if ((favoriter.length & 5) <= 1 && (favoriter.length & checkboxk.size) <= 5) {
         checkboxk = new Map([[gmailY, (contextr == String.fromCharCode(119,0) ? gmailY.length : contextr.length)]]);
      }
      let action5 = String.fromCharCode(106,107,54,52,114,122,0) == gmailY;
      do {
         gmailY += `${(String.fromCharCode(106,0) == contextr ? short_qD : contextr.length)}`;
         if (action5) {
            break;
         }
      } while ((1 > (gmailY.length - short_qD) && (gmailY.length - 1) > 1) && action5);
      floatingd = new Map([[`${checkboxk.size}`, checkboxk.size]]);
   }
      vietnamp = `${parseInt(`${users}`)}`;
   if (floatingd.size > parseInt(`${targetu}`)) {
       let string6 = 3.0;
       let combinedi: Map<any, any> = new Map([[String.fromCharCode(103,95,57,50,95,99,110,97,109,101,0),136], [String.fromCharCode(100,95,52,51,95,98,108,111,99,107,115,99,97,110,0),260], [String.fromCharCode(99,111,112,121,109,95,109,95,49,55,0),606]]);
       let nativeexN = String.fromCharCode(101,95,52,53,95,115,116,101,112,112,101,100,0);
      if ((combinedi.size & 5) < 4) {
         combinedi.set(`${string6}`, parseInt(`${string6}`) % (Math.max(combinedi.size, 8)));
      }
          let basketballz = 1.0;
          let starV = 4.0;
         nativeexN += "1";
         basketballz /= Math.max(5, parseInt(`${starV}`) / 2);
         starV += parseFloat(`${2 << (Math.min(Math.abs(parseInt(`${starV}`)), 4))}`);
          let groupV: Map<any, any> = new Map([[String.fromCharCode(112,95,56,49,95,100,101,113,117,97,110,116,0),362], [String.fromCharCode(114,101,116,114,97,110,109,105,115,115,105,111,110,95,51,95,52,53,0),229], [String.fromCharCode(109,95,54,95,99,111,109,109,105,116,0),142]]);
          let giftw = String.fromCharCode(115,101,116,114,97,110,103,101,95,56,95,52,55,0);
         combinedi = new Map([[nativeexN, nativeexN.length]]);
         groupV = new Map([[`${groupV.size}`, giftw.length << (Math.min(1, Math.abs(groupV.size)))]]);
         giftw += `${giftw.length}`;
      for (let a = 0; a < 3; a++) {
         string6 /= Math.max(combinedi.size, 4);
      }
          let modalV = true;
         nativeexN += "1";
         modalV = (!modalV ? !modalV : !modalV);
         string6 /= Math.max(1, parseInt(`${string6}`) ^ combinedi.size);
       let resend8 = String.fromCharCode(98,105,116,115,104,105,102,116,95,118,95,49,51,0);
       let viewsj = String.fromCharCode(114,95,55,52,95,115,116,114,101,97,109,105,110,102,111,0);
       let control6 = 2;
      while (5 < (parseInt(`${string6}`) - 2) || 2.93 < (string6 - 3.35)) {
         string6 -= resend8.length | parseInt(`${string6}`);
         break;
      }
      targetu += vietnamp.length + 3;
   }
   while (eighteene.length <= 3) {
       let pingu: Map<any, any> = new Map([[String.fromCharCode(97,95,55,49,95,116,114,105,97,110,103,108,101,115,0),String.fromCharCode(112,97,114,97,109,115,116,114,105,110,103,95,48,95,52,50,0)], [String.fromCharCode(100,101,108,101,116,101,100,95,97,95,55,54,0),String.fromCharCode(101,95,54,54,95,102,119,100,0)]]);
       let taiwanN = String.fromCharCode(114,101,97,115,109,95,55,95,51,54,0);
       let pressureH = String.fromCharCode(105,110,105,116,97,108,95,106,95,51,51,0);
       let mbridgeA = String.fromCharCode(100,95,49,49,95,108,105,115,116,105,110,103,0);
         pingu.set(mbridgeA, pingu.size / (Math.max(3, mbridgeA.length)));
         pressureH += "2";
      if (pressureH != taiwanN) {
          let untickW = 3;
          let modelc: Map<any, any> = new Map([[String.fromCharCode(118,116,101,115,116,95,54,95,51,50,0),279], [String.fromCharCode(117,95,57,50,95,102,114,101,101,100,117,109,112,98,117,102,102,101,114,0),938], [String.fromCharCode(122,95,50,56,95,116,101,108,108,97,114,0),517]]);
          let sortv: Array<any> = [102, 370];
          let dragk: Array<any> = [682, 682];
          let time_rjO = 2;
         taiwanN = `${2 & mbridgeA.length}`;
         untickW /= Math.max(1, 5);
         modelc = new Map([[`${dragk.length}`, time_rjO / 1]]);
         sortv = [1 + sortv.length];
         dragk.push(dragk.length);
         time_rjO &= dragk.length + 3;
      }
      for (let u = 0; u < 2; u++) {
         taiwanN += `${mbridgeA.length ^ pingu.size}`;
      }
      if (!pressureH.endsWith(`${taiwanN.length}`)) {
         taiwanN = `${1 ^ pressureH.length}`;
      }
      while ((pingu.size | 2) < 4 || (2 | pingu.size) < 4) {
         pingu = new Map([[pressureH, (taiwanN == String.fromCharCode(50,0) ? taiwanN.length : pressureH.length)]]);
         break;
      }
      while ((pressureH.length ^ 1) <= 2) {
         pingu.set(pressureH, pressureH.length);
         break;
      }
          let adult0 = 5.0;
          let nterstitial2 = 5;
         pressureH += `${pressureH.length | 2}`;
         adult0 /= Math.max(3, 1);
         nterstitial2 -= 1 * nterstitial2;
      for (let x = 0; x < 2; x++) {
          let downloadY = 3;
          let downloadD = String.fromCharCode(105,110,116,101,114,112,111,108,97,116,101,95,120,95,53,54,0);
          let pauseL = String.fromCharCode(106,95,52,49,95,112,97,114,115,101,114,0);
          let videoi = 2.0;
          let page6: Array<any> = [302, 676, 599];
         pressureH += `${1 | pressureH.length}`;
         downloadY /= Math.max(1, 3);
         downloadD = `${downloadD.length + parseInt(`${videoi}`)}`;
         pauseL = "3";
         videoi *= parseFloat(`${page6.length << (Math.min(5, Math.abs(parseInt(`${videoi}`))))}`);
         page6 = [downloadY / 2];
      }
      for (let k = 0; k < 1; k++) {
          let actionsG = String.fromCharCode(97,102,102,105,110,101,95,100,95,51,0);
         pressureH += `${actionsG.length}`;
      }
      if (!taiwanN.startsWith(`${pressureH.length}`)) {
         pressureH += `${pressureH.length}`;
      }
      for (let a = 0; a < 1; a++) {
         pingu = new Map([[`${pingu.size}`, pingu.size]]);
      }
      minivodw = (catagoryg * targetu) < 10.61;
      break;
   }
      updatesQ -= parseFloat(`${3}`);
      vietnamp = `${parseInt(`${users}`) | 1}`;

    setIsDialogOpen(!isDialogOpen);
  };

  const toggleHistory = (vod: ttAppsOther) => {
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
