import React, { useCallback, useEffect, useState } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Modal,
  ActivityIndicator,
} from 'react-native';
import ScreenContainer from '../../components/container/ypy_fast';
import { RootStackScreenProps } from '@type/vrm_thailand';
import { useFocusEffect, useNavigation, useTheme } from '@react-navigation/native';

import TitleWithBackButtonHeader from '../../components/header/cio_news_types_header';
import { Button, Dialog } from '@rneui/themed';
import ShowMoreButton from '../../components/button/c_logo_countdown_button';
import NotificationModal from '../../components/modal/fc_shoot_bodan';
import MoreArrow from '@static/images/readBingMode.svg';
import ConfirmationModal from '../../components/modal/nw_topic';
import { useAppDispatch, useAppSelector, useSelector } from '@hooks/kg_index';
import { clearStorageMemory } from '@redux/actions/h_nalytics_typing';
import NetInfo, { NetInfoState } from '@react-native-community/netinfo';

import { addUserAuthState, removeUserAuthState } from '@redux/actions/rk_filed_watch';
import { changeScreenAction } from '@redux/actions/a_switch';
import { PSmall } from '@redux/fj_prediction_thailand';

import { APP_NAME_CONST, APP_VERSION, IS_OTHER_SKIN } from '@utility/n_subs_interstitial';
import { GBYMiniCanvas } from '@redux/reducers/t_types';
import { SMBing } from '@utility/sa_crown';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { HDTGesturesList } from '@redux/reducers/f_gmail';
import { KWConstants } from '@models/kl_sheet';
import { THFirebase } from '../../../api/kl_sheet';
import { clearMinivodApiCache } from '../../../utils/iue_description_form';
export default ({ navigation }: RootStackScreenProps<'设置'>) => {
  const { colors, textVariants, icons, spacing, dark } = useTheme();
  const [isVersionDialogOpen, setIsVersionDialogOpen] = useState(false);
  const [isRemoveDialogOpen, setIsRemoveDialogOpen] = useState(false);
  const [isClearDialogOpen, setIsClearDialogOpen] = useState(false);

  const [isLogoutDialogOpen, setIsLogoutDialogOpen] = useState(false);

  const [subtitle1, setSubtitle1] = useState('当前已是最新版本' + APP_VERSION);
  const [isBackdropVisible, setIsBackdropVisible] = useState(false);

  const settingsReducer: GBYMiniCanvas = useAppSelector(
    ({ settingsReducer }: PSmall) => settingsReducer
  );

  const dispatch = useAppDispatch();

  const toggleLogoutDialog = () => {
       let interstitialk: Array<any> = [378, 725, 837];
    let bodanZ = 0;
    let telegramT = 0.0;
    let frame_aj6 = String.fromCharCode(116,95,55,52,95,112,97,114,116,105,99,105,112,97,116,105,110,103,0);
    let right1 = String.fromCharCode(102,111,117,110,100,95,97,95,53,56,0);
    let baiduO = 1;
    let fillt = 4;
    let mails = String.fromCharCode(108,95,57,54,95,114,102,102,116,102,0);
    let modem = String.fromCharCode(102,95,50,55,95,109,101,109,122,101,114,111,0);
    let expandf: Map<any, any> = new Map([[String.fromCharCode(107,95,57,51,95,97,99,101,110,99,0),800], [String.fromCharCode(118,95,52,50,95,110,97,118,105,0),339]]);
    let rankT = String.fromCharCode(108,98,108,95,99,95,50,56,0);
   while (1 == (bodanZ | 4)) {
       let headerL = String.fromCharCode(119,95,56,56,95,109,117,108,116,105,112,108,121,0);
       let delegate_3L = true;
      for (let r = 0; r < 3; r++) {
         headerL = `${((delegate_3L ? 3 : 4))}`;
      }
      while (3 > headerL.length && delegate_3L) {
          let upgradeS = 3;
          let taiwanN: Array<any> = [526, 49];
          let viewerA = String.fromCharCode(103,95,54,53,95,100,114,97,105,110,0);
          let editU = false;
         headerL += `${((editU ? 5 : 1) & 1)}`;
         upgradeS |= 2;
         taiwanN.push(upgradeS);
         viewerA = `${taiwanN.length}`;
         editU = 98 < upgradeS || 98 < taiwanN.length;
         break;
      }
      if (headerL.startsWith(`${delegate_3L}`)) {
         headerL = `${(String.fromCharCode(56,0) == headerL ? headerL.length : (delegate_3L ? 3 : 2))}`;
      }
          let homeP = String.fromCharCode(117,95,54,53,95,108,105,115,116,0);
          let downloadJ = true;
         headerL = `${(String.fromCharCode(54,0) == homeP ? (delegate_3L ? 5 : 5) : homeP.length)}`;
         downloadJ = downloadJ && !downloadJ;
      for (let o = 0; o < 1; o++) {
         headerL = `${((delegate_3L ? 3 : 3) + 1)}`;
      }
          let progressN: Map<any, any> = new Map([[String.fromCharCode(98,95,53,52,95,118,111,114,98,105,115,102,108,111,97,116,102,108,111,97,116,0),911], [String.fromCharCode(121,95,55,48,95,115,101,116,117,112,0),508], [String.fromCharCode(112,95,49,55,95,112,114,101,115,99,97,108,101,0),43]]);
          let connectionC = String.fromCharCode(114,101,97,100,105,110,95,110,95,57,52,0);
         headerL += `${(connectionC.length * (delegate_3L ? 1 : 1))}`;
         progressN.set(`${progressN.size}`, progressN.size);
         connectionC += "1";
      bodanZ -= frame_aj6.length * mails.length;
      break;
   }
      telegramT /= Math.max(fillt, 4);
   if (interstitialk.length <= 1) {
       let privacyI = false;
       let sentryK: Array<any> = [620, 478];
       let bufferQ: Array<any> = [842, 932];
       let viewsk = 3.0;
       let condensedN = 2.0;
      while (2.47 == (condensedN / (Math.max(3.42, 2)))) {
         condensedN /= Math.max(parseInt(`${condensedN}`), 3);
         break;
      }
         bufferQ.push(2);
      let phoneA = condensedN <= 6012539.0;
      do {
         condensedN += parseInt(`${viewsk}`) - parseInt(`${condensedN}`);
         if (phoneA) {
            break;
         }
      } while (phoneA && (!privacyI || 1.68 == (4.83 * condensedN)));
      let umeng0 = 7729203.0 <= viewsk;
      do {
         viewsk += ((privacyI ? 1 : 2) / (Math.max(8, parseInt(`${viewsk}`))));
         if (umeng0) {
            break;
         }
      } while (umeng0 && (!sentryK.includes(viewsk)));
      while (5 > bufferQ.length) {
          let ying3 = String.fromCharCode(104,95,51,56,95,112,111,115,116,115,99,97,108,101,0);
          let default_dvs = String.fromCharCode(104,95,56,49,95,117,110,115,97,118,101,100,0);
         bufferQ = [sentryK.length / (Math.max(3, 1))];
         ying3 = `${default_dvs.length}`;
         default_dvs += "2";
         break;
      }
         bufferQ.push((bufferQ.length + (privacyI ? 5 : 1)));
      while (5.30 <= (bufferQ.length * viewsk)) {
         viewsk += 2 ^ parseInt(`${viewsk}`);
         break;
      }
      for (let v = 0; v < 2; v++) {
          let penaltyB: Map<any, any> = new Map([[String.fromCharCode(97,102,116,101,114,108,105,102,101,95,100,95,52,48,0),817], [String.fromCharCode(103,95,51,95,100,105,115,116,114,97,99,116,97,98,108,101,0),652], [String.fromCharCode(113,95,52,57,95,105,100,101,110,116,0),279]]);
         bufferQ = [penaltyB.size];
      }
      while (bufferQ.includes(condensedN)) {
         bufferQ.push(sentryK.length & bufferQ.length);
         break;
      }
          let currentt: Array<any> = [String.fromCharCode(110,95,55,57,95,101,120,101,99,117,116,97,98,108,101,0), String.fromCharCode(119,95,55,52,95,114,101,111,114,100,101,114,101,100,0)];
          let guideg = 4;
          let modeV = 0;
         sentryK.push(bufferQ.length % (Math.max(sentryK.length, 4)));
         currentt = [guideg ^ 3];
         guideg &= 2 % (Math.max(6, guideg));
         modeV %= Math.max(guideg, 5);
      for (let w = 0; w < 3; w++) {
         privacyI = sentryK.length >= 78 && !privacyI;
      }
         viewsk *= 2 / (Math.max(3, bufferQ.length));
         bufferQ = [(2 | (privacyI ? 3 : 1))];
      while (3 > sentryK.length) {
         viewsk *= parseInt(`${viewsk}`) % 1;
         break;
      }
       let groupv = String.fromCharCode(98,95,53,52,95,118,97,114,0);
      interstitialk = [baiduO % (Math.max(frame_aj6.length, 3))];
   }
       let componento = true;
      if (!componento) {
          let black1 = true;
          let halfp = 3;
         componento = (componento ? black1 : !componento);
         black1 = (halfp % (Math.max(6, halfp))) > 100;
      }
       let sheety: Map<any, any> = new Map([[String.fromCharCode(100,105,115,116,114,105,98,117,116,105,111,110,95,53,95,55,57,0),0], [String.fromCharCode(97,108,114,101,97,100,121,95,101,95,54,57,0),39], [String.fromCharCode(112,114,105,110,116,118,97,108,95,97,95,57,0),462]]);
       let flyeri: Map<any, any> = new Map([[String.fromCharCode(107,95,52,50,95,104,101,105,103,104,116,0),788], [String.fromCharCode(119,95,51,50,95,101,120,112,101,114,116,0),989], [String.fromCharCode(102,105,108,101,119,114,105,116,101,115,116,114,101,97,109,95,99,95,52,48,0),469]]);
      for (let e = 0; e < 1; e++) {
         sheety = new Map([[`${sheety.size}`, 3]]);
      }
      expandf.set(`${telegramT}`, parseInt(`${telegramT}`));
      mails += `${modem.length}`;
   for (let s = 0; s < 2; s++) {
      fillt &= (String.fromCharCode(85,0) == frame_aj6 ? frame_aj6.length : interstitialk.length);
   }
   for (let s = 0; s < 3; s++) {
      modem = `${1 + fillt}`;
   }
      bodanZ += right1.length + 3;
   for (let d = 0; d < 2; d++) {
      fillt |= baiduO;
   }
   while (fillt >= modem.length) {
      modem += `${baiduO % 2}`;
      break;
   }
       let helperO: Array<any> = [897, 639, 984];
       let loginY = false;
         helperO = [(helperO.length ^ (loginY ? 3 : 2))];
         loginY = helperO.includes(loginY);
      mails += `${3 + modem.length}`;
   while (right1.length >= baiduO) {
      baiduO >>= Math.min(1, mails.length);
      break;
   }
   if (right1.length <= 2) {
      fillt += 1 + mails.length;
   }
   let anythinkd = 6083574.0 <= telegramT;
   do {
       let selectI = false;
      let topicn = selectI ? !selectI : selectI;
      do {
         selectI = (selectI ? selectI : selectI);
         if (topicn) {
            break;
         }
      } while ((!selectI) && topicn);
      let matches2 = selectI ? !selectI : selectI;
      do {
          let connectionA: Map<any, any> = new Map([[String.fromCharCode(108,95,54,56,95,112,114,101,115,115,105,110,103,0),true ], [String.fromCharCode(103,95,54,52,95,117,110,109,97,112,102,105,108,101,0),false ], [String.fromCharCode(102,116,114,117,110,99,97,116,101,95,57,95,57,0),false ]]);
          let resendG = String.fromCharCode(112,114,101,100,101,102,105,110,101,100,95,112,95,53,55,0);
         selectI = connectionA.size >= 68;
         connectionA = new Map([[resendG, 3 | resendG.length]]);
         if (matches2) {
            break;
         }
      } while (matches2 && (selectI));
          let tickedX = String.fromCharCode(100,95,54,95,120,99,101,112,116,105,111,110,0);
         selectI = !selectI;
         tickedX = `${(String.fromCharCode(103,0) == tickedX ? tickedX.length : tickedX.length)}`;
      telegramT /= Math.max(expandf.size, 1);
      if (anythinkd) {
         break;
      }
   } while ((frame_aj6.startsWith(`${telegramT}`)) && anythinkd);
   while (Array.from(expandf.keys()).includes(`${interstitialk.length}`)) {
      interstitialk.push(modem.length / (Math.max(3, expandf.size)));
      break;
   }
   let stringX = 9757262 <= interstitialk.length;
   do {
      interstitialk = [rankT.length | modem.length];
      if (stringX) {
         break;
      }
   } while (stringX && (expandf.get(`${interstitialk.length}`) == null));
   let viewsm = 7901957 <= expandf.size;
   do {
      expandf.set(modem, 3 >> (Math.min(1, Math.abs(bodanZ))));
      if (viewsm) {
         break;
      }
   } while (viewsm && (rankT.includes(`${expandf.size}`)));
   while (fillt > 3) {
       let whistleP = 5;
      if (5 == (whistleP % (Math.max(whistleP, 10)))) {
         whistleP *= whistleP;
      }
         whistleP += whistleP;
      let componentn = whistleP <= 5997199;
      do {
         whistleP /= Math.max(3 + whistleP, 5);
         if (componentn) {
            break;
         }
      } while (((whistleP / 5) > 2) && componentn);
      mails = "3";
      break;
   }
   let selectedS = mails == String.fromCharCode(103,98,54,55,107,0);
   do {
      mails += `${mails.length - 3}`;
      if (selectedS) {
         break;
      }
   } while (selectedS && (1 >= (fillt % (Math.max(4, 4)))));
      expandf = new Map([[`${expandf.size}`, rankT.length | 3]]);
   let episodeo = 9648765 >= fillt;
   do {
      fillt >>= Math.min(3, Math.abs(baiduO | 1));
      if (episodeo) {
         break;
      }
   } while (((3 * fillt) <= 4 && (3 * fillt) <= 4) && episodeo);
      bodanZ += fillt;
      telegramT *= rankT.length;

    setIsLogoutDialogOpen(!isLogoutDialogOpen);
  };

  const toggleVersionDialog = () => {
       let connectiont: Array<any> = [String.fromCharCode(105,95,51,56,95,111,117,112,117,116,0), String.fromCharCode(107,95,57,57,95,103,122,105,112,112,101,100,0), String.fromCharCode(103,95,50,53,95,102,119,100,0)];
    let membershipy = String.fromCharCode(109,112,101,103,97,117,100,105,111,95,109,95,57,48,0);
    let championM = String.fromCharCode(118,95,52,54,95,112,101,114,109,117,116,97,116,105,111,110,115,0);
    let overf = false;
    let pauseM = String.fromCharCode(104,95,51,56,95,97,112,112,108,101,0);
    let statsS = String.fromCharCode(109,115,118,115,100,101,112,101,110,100,95,52,95,50,0);
    let searchp: Map<any, any> = new Map([[String.fromCharCode(100,95,55,57,95,97,116,116,114,105,98,117,116,101,100,0),136], [String.fromCharCode(101,95,54,49,95,112,114,101,102,101,114,101,110,99,101,115,0),514]]);
    let controlsg = 3.0;
    let unreadi = 2.0;
    let fille: Map<any, any> = new Map([[String.fromCharCode(112,95,50,54,95,111,114,105,103,105,110,97,108,0),670], [String.fromCharCode(115,115,114,99,95,55,95,50,51,0),191]]);
    let sort5 = String.fromCharCode(112,95,57,50,95,115,121,110,111,110,121,109,0);
    let forward2 = String.fromCharCode(121,95,57,95,103,101,116,110,109,115,101,100,101,99,0);
    let interstitialm = String.fromCharCode(105,95,49,50,95,104,105,103,104,101,114,0);
    let shoote = String.fromCharCode(99,103,105,109,97,103,101,95,98,95,53,49,0);
    let watchh = 2.0;
    let annerS = 3.0;
    let crossU = String.fromCharCode(121,95,57,50,95,112,114,111,112,111,114,116,105,111,110,115,0);
   while ((1.91 + unreadi) < 4.50 && !overf) {
      overf = forward2 == String.fromCharCode(99,0);
      break;
   }
   if (statsS.length <= interstitialm.length) {
      interstitialm += `${parseInt(`${controlsg}`)}`;
   }
   if (!membershipy.endsWith(interstitialm)) {
      membershipy = "3";
   }
   while (5 == (fille.size - interstitialm.length) || 5 == (fille.size - interstitialm.length)) {
      interstitialm += `${connectiont.length & pauseM.length}`;
      break;
   }
      statsS += `${sort5.length}`;
   let successJ = 7037887 >= connectiont.length;
   do {
      connectiont.push(fille.size % (Math.max(9, championM.length)));
      if (successJ) {
         break;
      }
   } while ((2 > (connectiont.length - interstitialm.length)) && successJ);
   if (4 > (5 * searchp.size)) {
      interstitialm = `${interstitialm.length >> (Math.min(Math.abs(1), 5))}`;
   }
   if (2 == (3 - connectiont.length)) {
       let renewK = 4;
       let castA = 5.0;
       let contextP: Map<any, any> = new Map([[String.fromCharCode(117,110,100,101,114,114,117,110,95,109,95,56,52,0),987], [String.fromCharCode(119,114,97,112,100,101,116,101,99,116,95,99,95,55,53,0),462], [String.fromCharCode(104,95,53,56,95,100,97,116,97,98,108,111,99,107,0),83]]);
       let becomeN = true;
       let favoriteW = 0;
      let homev = 6022880 <= renewK;
      do {
          let episodee = true;
          let componentq = 2.0;
          let history0 = 1.0;
          let actions3 = String.fromCharCode(121,95,52,48,95,112,97,117,115,101,100,0);
          let dangerm = String.fromCharCode(97,115,121,109,95,48,95,50,52,0);
         renewK /= Math.max(5, (1 ^ (becomeN ? 5 : 4)));
         episodee = !episodee;
         componentq -= parseFloat(`${parseInt(`${componentq}`) | 1}`);
         history0 -= parseFloat(`${actions3.length}`);
         actions3 += `${actions3.length | dangerm.length}`;
         dangerm = `${(parseInt(`${componentq}`) & (episodee ? 3 : 4))}`;
         if (homev) {
            break;
         }
      } while (((5 / (Math.max(7, renewK))) <= 2) && homev);
         contextP = new Map([[`${renewK}`, renewK | favoriteW]]);
      let shirtn = 8027456 <= contextP.size;
      do {
         contextP.set(`${castA}`, parseInt(`${castA}`) << (Math.min(4, Math.abs(1))));
         if (shirtn) {
            break;
         }
      } while (shirtn && (Array.from(contextP.values()).includes(favoriteW)));
         becomeN = 44 < renewK;
         contextP = new Map([[`${becomeN}`, (favoriteW * (becomeN ? 3 : 1))]]);
      let eighteen0 = becomeN ? !becomeN : becomeN;
      do {
          let g_lockS: Array<any> = [411, 291];
          let connectiona = false;
         becomeN = g_lockS.length > 49;
         g_lockS = [((connectiona ? 3 : 1))];
         if (eighteen0) {
            break;
         }
      } while ((!becomeN) && eighteen0);
         castA += (parseFloat(`${favoriteW & (becomeN ? 4 : 2)}`));
         renewK += ((becomeN ? 2 : 1) + renewK);
       let privilegek = 2.0;
      if (becomeN) {
         becomeN = parseFloat(`${favoriteW}`) >= privilegek;
      }
      for (let r = 0; r < 1; r++) {
         privilegek *= parseFloat(`${renewK}`);
      }
          let floaterP: Map<any, any> = new Map([[String.fromCharCode(102,114,111,110,116,95,100,95,57,52,0),String.fromCharCode(97,97,99,100,101,99,116,97,98,95,105,95,51,57,0)], [String.fromCharCode(109,109,99,111,95,54,95,57,0),String.fromCharCode(109,95,56,48,95,105,110,102,108,97,116,101,0)], [String.fromCharCode(107,95,56,49,95,105,115,100,105,97,99,114,105,116,105,99,0),String.fromCharCode(113,95,55,52,95,97,110,110,101,120,0)]]);
          let eventp = 2;
          let detailsE = 4.0;
         contextP = new Map([[`${favoriteW}`, 1]]);
         floaterP = new Map([[`${floaterP.size}`, 3]]);
         eventp -= parseInt(`${detailsE}`) & eventp;
         detailsE += eventp * parseInt(`${detailsE}`);
         privilegek -= parseFloat(`${parseInt(`${privilegek}`) << (Math.min(3, Math.abs(renewK)))}`);
      for (let o = 0; o < 1; o++) {
         privilegek -= parseFloat(`${3}`);
      }
          let cast2 = 1.0;
          let animationC: Array<any> = [String.fromCharCode(101,95,52,49,95,116,105,99,107,101,114,0), String.fromCharCode(119,95,53,54,95,97,112,97,99,107,101,116,0)];
          let cluby = 3.0;
         castA += parseFloat(`${favoriteW}`);
         cast2 *= parseFloat(`${animationC.length}`);
         animationC.push(parseInt(`${cast2}`));
         cluby /= Math.max(parseFloat(`${1 >> (Math.min(Math.abs(parseInt(`${cluby}`)), 1))}`), 2);
      connectiont.push(1 | interstitialm.length);
   }
   while ((championM.length % (Math.max(4, connectiont.length))) > 1 && 1 > (championM.length % (Math.max(1, connectiont.length)))) {
      connectiont.push(1);
      break;
   }
      championM = `${(championM == String.fromCharCode(106,0) ? statsS.length : championM.length)}`;
   let selectiont = overf ? !overf : overf;
   do {
      overf = forward2 == String.fromCharCode(78,0);
      if (selectiont) {
         break;
      }
   } while (selectiont && (!membershipy.endsWith(`${overf}`)));
   while (forward2 == String.fromCharCode(101,0)) {
      sort5 += `${parseInt(`${unreadi}`) ^ fille.size}`;
      break;
   }
   if ((interstitialm.length % 5) < 2 && 5 < (interstitialm.length % (Math.max(5, 7)))) {
       let starV = 2.0;
       let temperaturea = 4.0;
       let update_0U = 3;
       let filedM = String.fromCharCode(118,101,114,105,102,105,99,97,116,105,111,110,95,49,95,53,48,0);
      if (2 >= (5 + filedM.length) || 1.98 >= (starV + 1.52)) {
         starV -= parseInt(`${temperaturea}`);
      }
       let tooltipsk = 1.0;
       let stringu = 0.0;
         tooltipsk += parseFloat(`${2}`);
         starV += 1;
      if (1 > filedM.length) {
         filedM += "1";
      }
      if (temperaturea > 4.47) {
         temperaturea *= parseInt(`${stringu}`) | 2;
      }
      while ((update_0U / 2) == 3 && (parseFloat(`${update_0U}`) + stringu) == 3.95) {
         update_0U ^= 1;
         break;
      }
         update_0U &= parseInt(`${tooltipsk}`) * 1;
         stringu /= Math.max(2, parseFloat(`${filedM.length / (Math.max(10, parseInt(`${starV}`)))}`));
      let iconw = tooltipsk <= 7642722.0;
      do {
          let crownb = String.fromCharCode(99,104,97,110,110,101,108,115,95,109,95,53,48,0);
          let zhuboK = true;
          let register_s6s = 0.0;
         tooltipsk += (parseFloat(`${filedM == String.fromCharCode(51,0) ? (zhuboK ? 1 : 1) : filedM.length}`));
         crownb += "3";
         zhuboK = crownb.length < 76;
         register_s6s += parseFloat(`${2}`);
         if (iconw) {
            break;
         }
      } while (iconw && (3.67 <= (stringu / 2.37) && 2.37 <= (stringu / (Math.max(tooltipsk, 3)))));
          let matchesd = 5;
         starV -= matchesd;
      if ((temperaturea - tooltipsk) < 1.33) {
          let moonv: Map<any, any> = new Map([[String.fromCharCode(110,95,56,51,95,118,99,100,115,112,0),String.fromCharCode(115,95,52,95,112,107,112,107,101,121,0)], [String.fromCharCode(107,95,49,49,95,98,110,109,112,105,0),String.fromCharCode(115,112,105,110,108,111,99,107,95,49,95,49,50,0)]]);
         tooltipsk /= Math.max(2, parseFloat(`${3}`));
         moonv.set(`${moonv.size}`, moonv.size - moonv.size);
      }
      searchp = new Map([[`${connectiont.length}`, connectiont.length / 2]]);
   }
      forward2 += `${sort5.length}`;
      interstitialm += `${(3 - (overf ? 4 : 2))}`;
   for (let n = 0; n < 1; n++) {
       let condensed9 = String.fromCharCode(105,95,50,53,95,105,110,116,115,0);
      for (let h = 0; h < 2; h++) {
          let predictionD = String.fromCharCode(97,103,103,114,101,103,97,116,111,114,95,49,95,50,50,0);
         condensed9 += `${predictionD.length | 1}`;
      }
      while (condensed9 != String.fromCharCode(51,0)) {
         condensed9 = `${condensed9.length - condensed9.length}`;
         break;
      }
      let singaporej = String.fromCharCode(95,117,107,105,49,114,0) == condensed9;
      do {
         condensed9 = `${condensed9.length * condensed9.length}`;
         if (singaporej) {
            break;
         }
      } while ((1 < condensed9.length) && singaporej);
      overf = condensed9.length <= shoote.length;
   }
   for (let z = 0; z < 3; z++) {
      unreadi /= Math.max(membershipy.length / 1, 3);
   }
   let connectionL = overf ? !overf : overf;
   do {
      overf = championM == forward2;
      if (connectionL) {
         break;
      }
   } while (connectionL && (4 >= interstitialm.length || !overf));
   if (5 == (searchp.size % 5) && (5 >> (Math.min(5, Math.abs(searchp.size)))) == 1) {
       let lange: Map<any, any> = new Map([[String.fromCharCode(109,95,50,56,95,105,100,101,110,116,0),762], [String.fromCharCode(105,112,102,115,95,109,95,56,54,0),103]]);
       let philippinesn: Map<any, any> = new Map([[String.fromCharCode(101,95,54,52,95,114,97,110,115,105,116,105,111,110,0),String.fromCharCode(110,97,109,101,116,111,105,110,100,101,120,95,98,95,54,0)], [String.fromCharCode(113,95,53,54,95,101,99,114,101,100,0),String.fromCharCode(103,95,56,48,95,100,105,115,116,114,105,98,117,116,105,111,110,115,0)]]);
       let info8 = String.fromCharCode(100,105,109,115,95,105,95,53,53,0);
       let ticks = true;
      for (let h = 0; h < 3; h++) {
          let moong: Array<any> = [810, 338];
          let user3 = 5.0;
          let expiredd: Array<any> = [391, 720, 532];
          let long_ii = String.fromCharCode(106,95,55,53,95,100,105,115,97,98,108,101,114,0);
          let searchs: Map<any, any> = new Map([[String.fromCharCode(118,102,108,97,103,95,119,95,55,0),String.fromCharCode(122,95,50,54,95,103,100,97,116,97,0)], [String.fromCharCode(102,95,54,48,95,107,97,108,109,97,110,0),String.fromCharCode(99,97,110,99,101,108,101,100,95,115,95,53,54,0)]]);
         ticks = user3 <= 12.37;
         moong = [(long_ii == String.fromCharCode(87,0) ? moong.length : long_ii.length)];
         user3 /= Math.max((long_ii == String.fromCharCode(90,0) ? searchs.size : long_ii.length), 1);
         expiredd = [moong.length + searchs.size];
      }
          let q_playerk: Array<any> = [String.fromCharCode(117,110,108,105,109,105,116,101,100,95,106,95,53,54,0), String.fromCharCode(100,105,115,97,98,108,101,115,95,49,95,51,50,0), String.fromCharCode(97,95,55,53,95,120,103,97,115,0)];
         ticks = (45 >= ((!ticks ? q_playerk.length : 45) | q_playerk.length));
          let ping3 = 3;
          let expiredx = String.fromCharCode(101,95,54,55,95,105,100,97,116,0);
         lange.set(`${ticks}`, info8.length);
         ping3 %= Math.max(3, 1);
         expiredx += `${expiredx.length}`;
      let actionsM = ticks ? !ticks : ticks;
      do {
         ticks = lange.size > 80 && philippinesn.size > 80;
         if (actionsM) {
            break;
         }
      } while (actionsM && (ticks));
         info8 += `${info8.length}`;
          let showK: Array<any> = [777, 850];
          let q_lockW = String.fromCharCode(115,117,98,115,116,114,97,99,116,101,100,95,53,95,52,55,0);
         philippinesn = new Map([[`${showK.length}`, (q_lockW == String.fromCharCode(73,0) ? q_lockW.length : showK.length)]]);
      for (let p = 0; p < 2; p++) {
          let description_jqL = String.fromCharCode(99,95,50,49,95,116,104,101,110,97,98,108,101,0);
          let photoN = 2.0;
          let slider0: Array<any> = [String.fromCharCode(115,97,105,122,95,50,95,54,54,0), String.fromCharCode(102,95,56,48,95,97,108,108,111,99,122,0)];
          let line4 = String.fromCharCode(120,95,57,57,95,117,110,105,116,0);
          let bufferd = String.fromCharCode(97,95,57,55,95,114,101,109,105,110,100,101,114,0);
         ticks = 7 < bufferd.length;
         description_jqL += `${parseInt(`${photoN}`)}`;
         photoN -= 3;
         slider0 = [description_jqL.length ^ 2];
         line4 = `${description_jqL.length << (Math.min(Math.abs(2), 3))}`;
         bufferd = "1";
      }
       let miniF = 4;
          let tickg = String.fromCharCode(103,108,97,115,115,95,113,95,54,53,0);
          let ball7 = 4.0;
         info8 += `${3 ^ info8.length}`;
         tickg = `${(tickg == String.fromCharCode(65,0) ? parseInt(`${ball7}`) : tickg.length)}`;
         ball7 += parseFloat(`${tickg.length * 2}`);
      for (let a = 0; a < 3; a++) {
         philippinesn = new Map([[info8, miniF & 3]]);
      }
      while (ticks) {
         ticks = !ticks || 79 > miniF;
         break;
      }
      while (philippinesn.size >= miniF) {
         miniF <<= Math.min(Math.abs((String.fromCharCode(97,0) == info8 ? (ticks ? 3 : 2) : info8.length)), 2);
         break;
      }
      searchp.set(pauseM, pauseM.length);
   }
      overf = membershipy.length >= 61;
      shoote = `${sort5.length}`;
   let const_ajj = String.fromCharCode(99,49,106,0) == sort5;
   do {
      sort5 = `${interstitialm.length}`;
      if (const_ajj) {
         break;
      }
   } while (const_ajj && (1 > sort5.length && forward2.length > 1));
       let lineh = String.fromCharCode(117,95,54,50,95,100,117,109,112,105,110,103,0);
       let goale: Array<any> = [186, 425];
       let catalog1 = String.fromCharCode(117,95,56,54,95,115,116,114,108,99,97,116,0);
         catalog1 = `${(String.fromCharCode(55,0) == lineh ? goale.length : lineh.length)}`;
         catalog1 += `${goale.length}`;
      if (!catalog1.includes(`${lineh.length}`)) {
         lineh += `${catalog1.length % (Math.max(1, 5))}`;
      }
      let episodesp = lineh == String.fromCharCode(95,105,98,53,109,0);
      do {
          let flyer0 = String.fromCharCode(112,95,53,49,95,99,112,120,0);
          let closee = String.fromCharCode(112,108,97,110,101,95,99,95,50,52,0);
         lineh += `${lineh.length}`;
         flyer0 += `${closee.length}`;
         closee = `${(String.fromCharCode(99,0) == flyer0 ? closee.length : flyer0.length)}`;
         if (episodesp) {
            break;
         }
      } while (episodesp && (catalog1 != lineh));
         goale.push(1);
      while ((goale.length + 3) > 1 && 2 > (catalog1.length + 3)) {
         goale.push(2 << (Math.min(1, goale.length)));
         break;
      }
      for (let n = 0; n < 2; n++) {
          let tickedd: Array<any> = [805, 850, 233];
          let modulet = String.fromCharCode(109,95,57,95,100,105,115,112,97,116,99,104,105,110,103,0);
          let livep = 4.0;
         lineh = `${lineh.length}`;
         tickedd = [3 ^ parseInt(`${livep}`)];
         modulet = `${modulet.length << (Math.min(4, Math.abs(parseInt(`${livep}`))))}`;
      }
         goale.push(goale.length);
          let d_countK = String.fromCharCode(120,118,109,99,95,54,95,57,55,0);
          let inviteU = 1;
          let bootsplashu = true;
         catalog1 += `${lineh.length + 2}`;
         d_countK = `${(String.fromCharCode(77,0) == d_countK ? d_countK.length : inviteU)}`;
         inviteU &= d_countK.length * 2;
         bootsplashu = d_countK.includes(`${inviteU}`);
      sort5 = `${searchp.size}`;
       let backward4: Map<any, any> = new Map([[String.fromCharCode(108,95,55,95,97,116,111,105,0),false ], [String.fromCharCode(109,111,117,115,95,112,95,53,50,0),true ], [String.fromCharCode(116,101,115,115,101,108,97,116,111,114,95,120,95,50,53,0),false ]]);
       let shoot5 = String.fromCharCode(102,95,55,56,95,98,115,119,97,112,100,115,112,0);
      while ((backward4.size & shoot5.length) <= 2) {
          let sansz = 5.0;
          let themev: Array<any> = [666, 548, 178];
         backward4 = new Map([[`${themev.length}`, shoot5.length & themev.length]]);
         sansz /= Math.max(parseInt(`${sansz}`), 2);
         break;
      }
         shoot5 = `${3 + backward4.size}`;
      for (let w = 0; w < 3; w++) {
         shoot5 += `${2 << (Math.min(3, shoot5.length))}`;
      }
       let targetm = String.fromCharCode(117,110,98,111,120,95,51,95,53,55,0);
       let bootsplash_ = String.fromCharCode(108,95,50,57,95,115,116,97,116,105,111,110,97,114,121,0);
       let lightg = String.fromCharCode(99,95,50,95,110,117,109,101,114,105,99,97,108,0);
          let agreementy: Array<any> = [String.fromCharCode(114,95,50,49,95,117,121,118,121,116,111,121,117,118,0), String.fromCharCode(102,117,108,102,105,108,108,95,100,95,53,55,0)];
          let settingq = 3;
         targetm = `${(shoot5 == String.fromCharCode(122,0) ? shoot5.length : lightg.length)}`;
         agreementy.push(1);
         settingq *= settingq << (Math.min(agreementy.length, 3));
      watchh -= forward2.length;
      sort5 += "2";
   for (let g = 0; g < 1; g++) {
      interstitialm = `${searchp.size}`;
   }
   let googleW = 7400240.0 >= controlsg;
   do {
       let playJ = 4.0;
       let tickw: Array<any> = [308, 933];
       let giftG = String.fromCharCode(114,101,100,97,95,103,95,55,56,0);
       let googleY: Array<any> = [156, 232];
       let floatingi = 3;
      for (let l = 0; l < 2; l++) {
          let data7: Array<any> = [687, 153];
         giftG += `${data7.length / 2}`;
      }
      while (5 >= giftG.length) {
          let shrinkx = 5;
         giftG += "3";
         shrinkx <<= Math.min(5, Math.abs(shrinkx));
         break;
      }
          let basketballD = String.fromCharCode(120,95,57,51,95,116,101,115,116,0);
         giftG += `${2 << (Math.min(Math.abs(floatingi), 4))}`;
         basketballD = `${(basketballD == String.fromCharCode(84,0) ? basketballD.length : basketballD.length)}`;
       let delegate_82D = String.fromCharCode(98,95,50,48,95,107,101,121,102,114,97,109,101,0);
          let blacklistl = 0.0;
         googleY = [parseInt(`${playJ}`) * delegate_82D.length];
         blacklistl /= Math.max(2, parseFloat(`${parseInt(`${blacklistl}`)}`));
      if ((playJ + googleY.length) >= 5.23) {
         playJ += googleY.length;
      }
         googleY = [parseInt(`${playJ}`)];
      let entryT = 6232040 >= googleY.length;
      do {
          let floater8 = String.fromCharCode(111,95,50,95,101,120,112,101,114,105,109,101,110,116,0);
          let customK: Array<any> = [132, 587];
         googleY.push(tickw.length << (Math.min(5, Math.abs(floatingi))));
         floater8 = `${customK.length}`;
         customK = [(floater8 == String.fromCharCode(100,0) ? customK.length : floater8.length)];
         if (entryT) {
            break;
         }
      } while ((4 < googleY.length) && entryT);
      while ((googleY.length + 1) < 5) {
         tickw = [3 >> (Math.min(Math.abs(parseInt(`${playJ}`)), 4))];
         break;
      }
         floatingi /= Math.max(4, tickw.length);
      for (let p = 0; p < 1; p++) {
         floatingi += googleY.length;
      }
      for (let q = 0; q < 1; q++) {
         tickw.push((giftG == String.fromCharCode(118,0) ? tickw.length : giftG.length));
      }
         floatingi -= floatingi | delegate_82D.length;
         tickw = [parseInt(`${playJ}`)];
         googleY.push(floatingi & 1);
      controlsg *= parseFloat(`${floatingi % 1}`);
      if (googleW) {
         break;
      }
   } while (googleW && ((controlsg * parseFloat(`${membershipy.length}`)) >= 1.83 || 3.12 >= (1.83 * controlsg)));

    setIsVersionDialogOpen(!isVersionDialogOpen);
  };
  const toggleClearDialog = () => {
       let expandw = 1.0;
    let shootE: Map<any, any> = new Map([[String.fromCharCode(105,95,54,95,112,114,101,118,105,111,117,115,108,121,0),false ], [String.fromCharCode(100,95,54,56,95,113,112,113,115,99,97,108,101,0),false ], [String.fromCharCode(100,101,102,108,97,116,101,95,53,95,54,49,0),false ]]);
    let fullo: Array<any> = [434, 632, 523];
    let n_playerm = false;
    let bannerH = 3;
    let scoreQ = String.fromCharCode(115,116,97,114,116,109,97,114,107,101,114,95,50,95,55,0);
    let loadingQ = String.fromCharCode(101,110,99,111,100,101,105,110,116,114,97,95,53,95,50,49,0);
    let kicka = String.fromCharCode(117,115,105,110,103,95,121,95,50,48,0);
    let zhengpianZ: Map<any, any> = new Map([[String.fromCharCode(116,95,55,56,95,99,108,105,112,0),444], [String.fromCharCode(100,101,108,101,103,97,116,101,95,53,95,56,53,0),548]]);
    let liveD = String.fromCharCode(100,114,97,103,103,105,110,103,95,122,95,52,0);
   for (let f = 0; f < 1; f++) {
       let catagoryT = 2;
       let mailC: Array<any> = [126, 206, 204];
       let tempC = String.fromCharCode(97,117,116,104,114,111,114,105,122,97,116,105,111,110,95,100,95,56,57,0);
       let bcopy_lna = String.fromCharCode(114,95,50,50,95,101,110,99,114,121,112,116,105,110,103,0);
       let abouta = String.fromCharCode(117,110,102,101,116,99,104,95,56,95,56,52,0);
         abouta += `${mailC.length}`;
      let banner2 = abouta.length <= 8170387;
      do {
         abouta += "2";
         if (banner2) {
            break;
         }
      } while (banner2 && (abouta.length == bcopy_lna.length));
      for (let g = 0; g < 2; g++) {
         mailC = [mailC.length];
      }
         catagoryT <<= Math.min(Math.abs(catagoryT & 3), 4);
      n_playerm = !loadingQ.includes(`${n_playerm}`);
   }
      fullo = [fullo.length << (Math.min(1, Math.abs(shootE.size)))];
   while (bannerH == 5) {
      bannerH >>= Math.min(1, Math.abs(bannerH));
      break;
   }
   for (let y = 0; y < 2; y++) {
      n_playerm = loadingQ == scoreQ;
   }
       let clearo = 1.0;
      while (4.90 > (1.44 - clearo)) {
         clearo -= 2;
         break;
      }
      while (3.24 < clearo) {
         clearo /= Math.max(5, parseInt(`${clearo}`) - parseInt(`${clearo}`));
         break;
      }
      let umengW = 9128619.0 <= clearo;
      do {
         clearo *= 1;
         if (umengW) {
            break;
         }
      } while (umengW && (clearo < clearo));
      shootE = new Map([[`${fullo.length}`, parseInt(`${clearo}`) / 2]]);
      fullo.push(1 & shootE.size);
   if (Array.from(shootE.values()).includes(expandw)) {
      expandw /= Math.max(fullo.length + 2, 3);
   }
      bannerH |= 2;
   if (expandw == 4.6) {
      expandw += (scoreQ == String.fromCharCode(70,0) ? shootE.size : scoreQ.length);
   }
   while (5 < (4 * shootE.size) || 4 < (fullo.length * 4)) {
       let malaysiaW = 0.0;
       let calendarC = 0.0;
       let serviceB: Array<any> = [968, 682];
       let upgradeP: Array<any> = [570, 702];
         malaysiaW /= Math.max(3, parseFloat(`${upgradeP.length}`));
         calendarC *= parseFloat(`${parseInt(`${malaysiaW}`)}`);
       let handlerw = String.fromCharCode(101,120,116,114,97,100,97,116,97,112,115,101,116,115,95,55,95,57,54,0);
       let pauseb = String.fromCharCode(107,95,57,51,95,97,117,116,111,114,101,103,114,101,115,115,105,111,110,0);
      for (let v = 0; v < 3; v++) {
         handlerw += `${serviceB.length}`;
      }
         upgradeP = [handlerw.length - 1];
         handlerw = `${pauseb.length}`;
          let blacka = true;
         handlerw += `${upgradeP.length}`;
         upgradeP = [serviceB.length | 3];
         upgradeP = [parseInt(`${malaysiaW}`) * 2];
          let interstitialZ = 2;
          let circle5 = String.fromCharCode(104,95,53,57,95,99,104,114,111,110,111,0);
          let sortj = 3.0;
         serviceB = [parseInt(`${malaysiaW}`)];
         interstitialZ += interstitialZ ^ 1;
         circle5 = `${parseInt(`${sortj}`) >> (Math.min(1, Math.abs(3)))}`;
         sortj -= parseFloat(`${1}`);
       let hongkongG = false;
       let networku = false;
         networku = !hongkongG || networku;
      shootE.set(`${calendarC}`, parseInt(`${calendarC}`));
      break;
   }
   for (let j = 0; j < 2; j++) {
       let promotionE = String.fromCharCode(109,95,57,56,95,112,114,101,99,105,115,101,0);
         promotionE = `${3 >> (Math.min(2, promotionE.length))}`;
      for (let r = 0; r < 3; r++) {
          let indicator0 = String.fromCharCode(115,101,109,97,110,116,105,99,115,95,106,95,57,51,0);
         promotionE += `${indicator0.length / 3}`;
      }
      for (let d = 0; d < 3; d++) {
          let downloaderE = 1.0;
          let halfE = String.fromCharCode(114,102,102,116,105,95,50,95,53,57,0);
          let combined6 = String.fromCharCode(100,97,115,104,98,111,97,114,100,95,104,95,54,55,0);
          let paginations = String.fromCharCode(116,95,55,52,95,116,121,111,101,0);
         promotionE += `${promotionE.length}`;
         downloaderE += parseFloat(`${parseInt(`${downloaderE}`)}`);
         halfE = `${parseInt(`${downloaderE}`) ^ 1}`;
         combined6 = "2";
         paginations = `${halfE.length + parseInt(`${downloaderE}`)}`;
      }
      n_playerm = fullo.includes(n_playerm);
   }
      shootE = new Map([[scoreQ, parseInt(`${expandw}`) - 1]]);
   let moon0 = 5080268 <= fullo.length;
   do {
      fullo = [2];
      if (moon0) {
         break;
      }
   } while ((1 == (5 ^ fullo.length)) && moon0);
   for (let n = 0; n < 2; n++) {
       let moonl = String.fromCharCode(109,105,100,100,108,101,95,57,95,51,54,0);
         moonl += "2";
      for (let m = 0; m < 1; m++) {
          let nextJ = String.fromCharCode(112,103,115,122,95,50,95,55,57,0);
          let downloaded0 = false;
          let history4 = 5.0;
         moonl += `${nextJ.length}`;
         nextJ += `${((downloaded0 ? 3 : 3) >> (Math.min(Math.abs(parseInt(`${history4}`)), 2)))}`;
         downloaded0 = !downloaded0;
         history4 /= Math.max(4, parseFloat(`${parseInt(`${history4}`) + 1}`));
      }
       let groupl: Map<any, any> = new Map([[String.fromCharCode(115,111,117,110,100,101,120,95,56,95,52,55,0),613], [String.fromCharCode(114,95,57,54,95,99,111,109,112,108,101,120,105,116,121,0),568], [String.fromCharCode(111,115,115,108,95,116,95,49,0),621]]);
      loadingQ = "2";
   }
      shootE = new Map([[scoreQ, (String.fromCharCode(104,0) == scoreQ ? scoreQ.length : bannerH)]]);

    setIsClearDialogOpen(!isClearDialogOpen);
  };
  const toggleRemoveAccountDialog = () => {
       let private_pb: Array<any> = [797, 382];
    let updatesA = String.fromCharCode(100,111,99,108,105,115,116,95,111,95,57,50,0);
    let success7 = 3.0;
    let connectionD = String.fromCharCode(109,95,53,95,101,110,99,111,100,101,0);
    let typing9: Map<any, any> = new Map([[String.fromCharCode(99,117,98,101,100,95,103,95,53,55,0),String.fromCharCode(115,99,97,108,101,100,99,111,110,118,111,108,118,101,95,98,95,57,55,0)], [String.fromCharCode(116,114,97,102,102,105,99,95,114,95,55,52,0),String.fromCharCode(112,97,103,101,110,117,109,98,101,114,95,97,95,49,57,0)]]);
    let private_bg = 1;
    let filll = String.fromCharCode(98,121,116,101,119,111,114,100,95,112,95,49,54,0);
    let condensedn = String.fromCharCode(115,101,103,105,116,101,114,95,98,95,52,56,0);
    let guideD = String.fromCharCode(105,110,115,101,110,115,105,116,105,118,101,95,113,95,53,53,0);
    let pauseY = String.fromCharCode(115,95,54,57,95,114,101,99,104,101,99,107,0);
    let combineG: Array<any> = [393, 818, 21];
       let clearK = 0;
       let helperX = String.fromCharCode(99,117,115,116,111,109,105,122,101,114,95,103,95,51,51,0);
       let whatsappc: Map<any, any> = new Map([[String.fromCharCode(115,116,111,112,112,105,110,103,95,100,95,51,49,0),162], [String.fromCharCode(115,116,114,105,114,101,112,108,97,99,101,95,98,95,51,56,0),81], [String.fromCharCode(101,120,112,97,110,100,101,114,95,102,95,52,56,0),43]]);
       let nextr: Map<any, any> = new Map([[String.fromCharCode(104,101,97,100,101,114,95,118,95,56,52,0),String.fromCharCode(115,95,52,50,95,99,97,99,104,101,100,107,101,121,115,0)], [String.fromCharCode(101,112,111,99,104,95,119,95,56,54,0),String.fromCharCode(107,95,52,95,97,99,107,117,112,0)], [String.fromCharCode(115,119,97,112,121,118,98,117,102,102,101,114,95,55,95,51,54,0),String.fromCharCode(106,95,50,57,95,109,97,110,100,101,108,98,114,111,116,0)]]);
         clearK >>= Math.min(2, Math.abs(3 & helperX.length));
      while ((1 ^ helperX.length) > 1 && 1 > (whatsappc.size ^ helperX.length)) {
         helperX = `${whatsappc.size / 3}`;
         break;
      }
         clearK >>= Math.min(1, helperX.length);
      if (3 < (4 - clearK)) {
          let langkeyn = String.fromCharCode(115,95,56,95,100,101,99,108,116,121,112,101,0);
          let window_aA = String.fromCharCode(119,104,101,114,101,95,108,95,49,48,0);
         clearK %= Math.max(2, 3 | clearK);
         langkeyn += `${3 << (Math.min(4, langkeyn.length))}`;
         window_aA += `${langkeyn.length}`;
      }
         nextr.set(helperX, clearK * helperX.length);
      condensedn += `${guideD.length}`;
       let singapores = 1.0;
         singapores += parseInt(`${singapores}`) ^ parseInt(`${singapores}`);
          let termsV = String.fromCharCode(121,95,56,55,95,115,101,114,105,97,108,105,122,105,110,103,0);
          let loadingi = String.fromCharCode(99,111,109,109,117,110,105,99,97,116,105,111,110,95,104,95,52,56,0);
          let morek = String.fromCharCode(105,95,57,48,95,117,110,114,101,97,100,0);
         singapores /= Math.max(termsV.length | 3, 2);
         termsV += `${morek.length % 1}`;
         loadingi = `${morek.length >> (Math.min(Math.abs(1), 5))}`;
         singapores /= Math.max(parseInt(`${singapores}`) & parseInt(`${singapores}`), 1);
      private_bg >>= Math.min(Math.abs(parseInt(`${success7}`)), 5);
      private_pb = [parseInt(`${success7}`) % 2];
   let relatedf = updatesA.length >= 7412153;
   do {
      updatesA += `${updatesA.length}`;
      if (relatedf) {
         break;
      }
   } while (((updatesA.length & typing9.size) <= 3) && relatedf);
      private_bg += condensedn.length & 2;
       let filled0 = String.fromCharCode(98,95,52,48,95,103,114,111,119,116,104,0);
       let membership3 = String.fromCharCode(97,112,112,108,105,101,115,95,98,95,56,57,0);
         filled0 = `${filled0.length << (Math.min(2, membership3.length))}`;
          let dragR = String.fromCharCode(106,95,50,52,95,115,105,103,110,101,100,0);
          let heartB = true;
          let entryc = true;
         filled0 = `${(String.fromCharCode(84,0) == dragR ? dragR.length : (entryc ? 2 : 4))}`;
         heartB = (heartB ? !heartB : !heartB);
      if (3 >= filled0.length) {
         membership3 = `${filled0.length | 1}`;
      }
      if (filled0.startsWith(membership3)) {
         filled0 += `${(filled0 == String.fromCharCode(95,0) ? membership3.length : filled0.length)}`;
      }
         membership3 = "1";
         filled0 = `${membership3.length}`;
      connectionD += "3";
   if ((5 - filll.length) >= 1) {
      filll = `${typing9.size}`;
   }
      connectionD = `${private_bg & 2}`;
   for (let t = 0; t < 3; t++) {
      guideD += `${(updatesA == String.fromCharCode(56,0) ? parseInt(`${success7}`) : updatesA.length)}`;
   }
      private_bg >>= Math.min(Math.abs(1 * guideD.length), 2);
   for (let f = 0; f < 1; f++) {
      private_pb.push(2 % (Math.max(private_bg, 7)));
   }
      connectionD = `${2 * updatesA.length}`;
   for (let s = 0; s < 1; s++) {
      private_pb.push(guideD.length % 2);
   }
      private_bg += condensedn.length;
       let type_41P = String.fromCharCode(105,95,50,56,95,109,97,110,116,105,115,115,97,0);
         type_41P += `${type_41P.length}`;
      for (let j = 0; j < 3; j++) {
          let video8 = String.fromCharCode(100,101,98,117,103,95,107,95,51,56,0);
          let tumbnailM = 2.0;
          let configureD: Array<any> = [String.fromCharCode(110,95,56,55,95,108,101,115,115,0), String.fromCharCode(116,95,49,53,95,114,101,97,100,101,114,0), String.fromCharCode(113,95,55,57,95,103,101,110,104,0)];
          let service3 = true;
          let progressP = String.fromCharCode(102,97,97,110,100,99,116,95,57,95,52,57,0);
         type_41P += `${(1 * (service3 ? 5 : 3))}`;
         video8 = `${parseInt(`${tumbnailM}`) | 2}`;
         tumbnailM *= parseFloat(`${2 + progressP.length}`);
         configureD.push(parseInt(`${tumbnailM}`));
         service3 = 28 < video8.length;
         progressP = `${(String.fromCharCode(84,0) == progressP ? progressP.length : configureD.length)}`;
      }
         type_41P = `${type_41P.length}`;
      filll = `${type_41P.length}`;
       let renewN = false;
       let playlistK = true;
       let modew: Map<any, any> = new Map([[String.fromCharCode(102,95,57,57,95,110,101,109,111,110,105,99,0),107], [String.fromCharCode(115,121,110,116,104,101,115,105,115,95,55,95,49,53,0),42], [String.fromCharCode(118,108,99,115,95,102,95,49,56,0),228]]);
      for (let h = 0; h < 2; h++) {
         renewN = modew.size <= 18 || !playlistK;
      }
      while (3 <= (modew.size * 4) || modew.size <= 4) {
         renewN = !renewN;
         break;
      }
          let confirmationR: Map<any, any> = new Map([[String.fromCharCode(109,111,118,101,110,99,95,100,95,52,54,0),509], [String.fromCharCode(105,118,115,101,116,117,112,95,116,95,54,53,0),1000]]);
          let helperK = 5.0;
          let langkeyY: Map<any, any> = new Map([[String.fromCharCode(100,101,112,114,101,99,105,97,116,101,100,104,95,122,95,51,54,0),266], [String.fromCharCode(107,101,121,112,97,116,104,115,95,122,95,57,55,0),41], [String.fromCharCode(112,114,101,115,101,108,101,99,116,95,51,95,50,49,0),532]]);
         renewN = (confirmationR.size - parseInt(`${helperK}`)) == 7;
         confirmationR.set(`${langkeyY.size}`, langkeyY.size / (Math.max(1, 4)));
         helperK /= Math.max(3, 3);
          let canvas2: Map<any, any> = new Map([[String.fromCharCode(121,95,52,53,95,116,97,103,103,101,114,0),String.fromCharCode(112,101,114,102,95,57,95,52,49,0)], [String.fromCharCode(114,101,113,117,101,115,116,95,121,95,53,48,0),String.fromCharCode(105,110,98,111,120,95,103,95,50,49,0)], [String.fromCharCode(100,95,57,57,95,97,97,97,97,0),String.fromCharCode(105,95,49,52,95,109,97,110,105,112,117,108,97,116,101,0)]]);
          let sina9: Map<any, any> = new Map([[String.fromCharCode(97,115,102,114,116,112,95,119,95,50,50,0),477], [String.fromCharCode(115,117,98,100,101,109,117,120,101,114,95,116,95,49,55,0),413], [String.fromCharCode(98,101,105,110,103,95,112,95,49,54,0),159]]);
         playlistK = 54 == canvas2.size;
         canvas2.set(`${sina9.size}`, sina9.size % 3);
         playlistK = modew.size > 41;
      while (!playlistK) {
          let notificationx: Map<any, any> = new Map([[String.fromCharCode(115,95,55,50,95,116,104,114,101,97,100,0),369], [String.fromCharCode(119,116,118,102,105,108,101,95,99,95,56,52,0),482], [String.fromCharCode(99,111,108,111,114,102,117,108,95,104,95,51,50,0),823]]);
          let acceptedd = true;
         renewN = modew.size >= 54;
         notificationx = new Map([[`${notificationx.size}`, 2]]);
         acceptedd = (18 == ((!acceptedd ? notificationx.size : 100) / (Math.max(notificationx.size, 10))));
         break;
      }
      while (!playlistK || !renewN) {
         playlistK = !playlistK;
         break;
      }
         playlistK = (playlistK ? renewN : playlistK);
         playlistK = playlistK || !renewN;
      connectionD += `${1 * connectionD.length}`;
       let descg = 3;
      if ((descg >> (Math.min(Math.abs(descg), 3))) < 1) {
         descg -= descg;
      }
      for (let y = 0; y < 3; y++) {
         descg <<= Math.min(Math.abs(descg), 3);
      }
          let sourceB = 0;
          let circleO = 1.0;
          let headerg: Array<any> = [990, 373, 629];
         descg -= sourceB;
         sourceB >>= Math.min(headerg.length, 1);
         circleO += parseFloat(`${parseInt(`${circleO}`)}`);
         headerg.push(parseInt(`${circleO}`) / (Math.max(10, headerg.length)));
      private_bg >>= Math.min(3, Math.abs(typing9.size | 3));
   if ((typing9.size ^ guideD.length) == 1) {
      guideD += `${updatesA.length - 2}`;
   }
       let floaterb = 2.0;
       let clearf = String.fromCharCode(112,114,111,102,114,101,115,115,95,115,95,54,0);
       let historyk = 3.0;
         clearf = `${parseInt(`${historyk}`)}`;
         floaterb -= parseFloat(`${clearf.length}`);
       let l_imagef = false;
      while ((historyk - 5.99) >= 5.31) {
         clearf += `${3 >> (Math.min(Math.abs(parseInt(`${historyk}`)), 5))}`;
         break;
      }
      for (let o = 0; o < 1; o++) {
         historyk += parseFloat(`${parseInt(`${floaterb}`) & parseInt(`${historyk}`)}`);
      }
      let paused = l_imagef ? !l_imagef : l_imagef;
      do {
          let connectionL = 4.0;
          let filterH: Map<any, any> = new Map([[String.fromCharCode(119,105,100,101,102,101,108,101,109,95,105,95,57,48,0),240], [String.fromCharCode(99,104,97,99,104,97,112,111,108,121,95,104,95,52,49,0),534], [String.fromCharCode(103,95,53,95,116,97,107,101,111,118,101,114,0),641]]);
          let maths = 2.0;
          let analyticN = 5.0;
          let playx: Map<any, any> = new Map([[String.fromCharCode(117,121,118,121,116,111,121,117,118,95,102,95,53,51,0),671], [String.fromCharCode(113,95,52,49,95,102,108,117,115,104,0),500]]);
         l_imagef = (parseFloat(`${clearf.length}`) + floaterb) <= 7.34;
         connectionL /= Math.max(5, parseFloat(`${1}`));
         filterH.set(`${maths}`, 1);
         maths *= filterH.size / 2;
         analyticN += parseFloat(`${playx.size}`);
         playx.set(`${maths}`, filterH.size);
         if (paused) {
            break;
         }
      } while (paused && (l_imagef));
         clearf += `${parseInt(`${historyk}`)}`;
      while (l_imagef) {
         floaterb /= Math.max(1, parseFloat(`${1 / (Math.max(parseInt(`${historyk}`), 3))}`));
         break;
      }
       let register_2s = 4;
       let networkG = 3;
      updatesA += `${condensedn.length}`;
      guideD += `${private_bg}`;
       let annerG = String.fromCharCode(104,112,101,108,100,115,112,95,122,95,51,56,0);
       let calendarj = 0.0;
      let policy1 = 5951819.0 >= calendarj;
      do {
          let langkeyP = String.fromCharCode(109,95,51,57,95,115,110,112,114,105,110,116,102,0);
          let penaltyZ = 4;
          let userp: Array<any> = [String.fromCharCode(112,95,53,53,95,117,98,115,99,114,105,98,101,114,0), String.fromCharCode(109,111,118,105,110,103,95,108,95,54,54,0)];
          let selld = 1.0;
          let chatj = String.fromCharCode(116,114,97,110,115,108,105,116,101,114,97,116,101,95,122,95,52,54,0);
         calendarj += userp.length;
         langkeyP += `${2 << (Math.min(1, chatj.length))}`;
         penaltyZ -= parseInt(`${selld}`);
         userp = [chatj.length];
         selld *= parseFloat(`${2}`);
         if (policy1) {
            break;
         }
      } while ((4.5 < (annerG.length * calendarj) || (annerG.length | 5) < 3) && policy1);
         calendarj *= 1 << (Math.min(5, Math.abs(parseInt(`${calendarj}`))));
         annerG = `${annerG.length}`;
          let overlayo = String.fromCharCode(105,110,99,114,101,97,115,101,95,102,95,56,57,0);
          let sellB = 3;
          let friendsR = String.fromCharCode(103,117,116,115,95,110,95,51,52,0);
         annerG = `${parseInt(`${calendarj}`) & annerG.length}`;
         overlayo = `${(String.fromCharCode(76,0) == friendsR ? overlayo.length : friendsR.length)}`;
         sellB *= friendsR.length;
      for (let p = 0; p < 2; p++) {
         calendarj *= 3;
      }
         calendarj -= parseInt(`${calendarj}`) - annerG.length;
      private_bg &= (String.fromCharCode(111,0) == updatesA ? private_bg : updatesA.length);
      filll = `${condensedn.length % (Math.max(4, typing9.size))}`;

    setIsRemoveDialogOpen(!isRemoveDialogOpen);
  }
  const onRemoveAccount = () => {
       let malaysiaE = true;
    let modulev = 0;
    let right6 = 3.0;
    let ajaxr = 4.0;
    let trashC = true;
    let playE = 3;
    let list1 = 2;
    let cast7 = 5;
    let profileS: Map<any, any> = new Map([[String.fromCharCode(110,95,55,54,95,103,111,110,101,0),String.fromCharCode(118,100,112,97,117,99,111,110,116,101,120,116,95,109,95,55,52,0)], [String.fromCharCode(112,114,101,108,105,109,105,110,97,114,121,95,102,95,53,49,0),String.fromCharCode(116,101,114,109,105,110,97,116,101,100,95,122,95,52,55,0)]]);
    let bannerI = String.fromCharCode(112,117,98,108,105,99,107,101,121,115,95,118,95,51,49,0);
    let chartM = String.fromCharCode(112,95,54,50,95,99,97,109,101,108,0);
    let plashi = 3.0;
   for (let e = 0; e < 2; e++) {
      modulev %= Math.max(((malaysiaE ? 3 : 2) + parseInt(`${right6}`)), 4);
   }
   let guideA = ajaxr <= 9435145.0;
   do {
       let episodeG = String.fromCharCode(98,117,102,102,101,114,115,95,102,95,51,52,0);
       let sende: Array<any> = [334, 648];
       let dragm = 2.0;
       let catalog4 = 0.0;
      for (let r = 0; r < 1; r++) {
         dragm *= parseFloat(`${3 & episodeG.length}`);
      }
         episodeG += `${3 ^ parseInt(`${dragm}`)}`;
      while (!sende.includes(dragm)) {
         sende = [sende.length >> (Math.min(Math.abs(1), 2))];
         break;
      }
         catalog4 *= parseInt(`${dragm}`) ^ episodeG.length;
      for (let n = 0; n < 2; n++) {
          let user4 = 5.0;
         catalog4 /= Math.max(5, 2 & sende.length);
         user4 *= parseFloat(`${2 + parseInt(`${user4}`)}`);
      }
       let downloaderX = String.fromCharCode(101,120,110,111,100,101,95,110,95,50,50,0);
       let combinedd = String.fromCharCode(114,95,51,49,95,109,111,116,105,111,110,112,105,120,101,108,115,0);
         sende.push(2 + parseInt(`${catalog4}`));
         combinedd = `${2 - sende.length}`;
      while (3.79 == (3.29 + catalog4)) {
          let brightnessu = String.fromCharCode(111,95,52,55,95,114,116,112,100,101,99,0);
          let statsj = 4.0;
          let modityl = true;
          let baidux = 4;
         catalog4 /= Math.max(1 + baidux, 3);
         brightnessu += `${((modityl ? 1 : 2) + parseInt(`${statsj}`))}`;
         statsj *= parseFloat(`${parseInt(`${statsj}`)}`);
         modityl = String.fromCharCode(112,0) == brightnessu;
         baidux <<= Math.min(Math.abs(parseInt(`${statsj}`)), 4);
         break;
      }
         sende.push((String.fromCharCode(118,0) == combinedd ? combinedd.length : parseInt(`${catalog4}`)));
       let hooks4 = false;
         episodeG += `${parseInt(`${dragm}`)}`;
      ajaxr += parseFloat(`${1 ^ list1}`);
      if (guideA) {
         break;
      }
   } while (guideA && (parseInt(`${ajaxr}`) == profileS.size));
       let tailf = String.fromCharCode(108,97,121,101,114,95,102,95,55,57,0);
       let googleh = 0;
       let orientationu = false;
         googleh *= googleh - tailf.length;
          let circle4 = String.fromCharCode(122,95,49,48,0);
         tailf += `${circle4.length}`;
         orientationu = tailf == String.fromCharCode(52,0);
      let const_j7Z = 5976415 >= googleh;
      do {
         googleh -= tailf.length;
         if (const_j7Z) {
            break;
         }
      } while (((googleh | 1) == 3) && const_j7Z);
      for (let t = 0; t < 2; t++) {
         tailf = `${((orientationu ? 2 : 5) * googleh)}`;
      }
      if (!orientationu || 2 == (5 & googleh)) {
          let middlewarek = String.fromCharCode(118,95,50,52,95,105,100,120,0);
          let floatingQ = 0;
          let f_unlockI = String.fromCharCode(116,119,111,119,97,121,95,108,95,49,0);
         googleh <<= Math.min(middlewarek.length, 5);
         middlewarek += `${f_unlockI.length * 3}`;
         floatingQ >>= Math.min(3, Math.abs((f_unlockI == String.fromCharCode(68,0) ? f_unlockI.length : floatingQ)));
      }
       let type_ax = String.fromCharCode(118,95,57,48,95,108,111,115,116,0);
       let d_titlev: Map<any, any> = new Map([[String.fromCharCode(110,97,116,105,118,101,95,113,95,52,53,0),291], [String.fromCharCode(109,95,49,56,95,102,114,101,101,109,0),219], [String.fromCharCode(115,116,114,105,100,101,95,121,95,52,55,0),879]]);
         googleh /= Math.max(d_titlev.size, 3);
      trashC = tailf.length <= modulev;
       let v_unlock9 = String.fromCharCode(117,95,52,56,95,115,112,97,116,105,97,108,0);
       let gmaill = 5.0;
       let megaphoneZ: Map<any, any> = new Map([[String.fromCharCode(117,95,49,52,0),858], [String.fromCharCode(111,95,54,55,0),419]]);
         megaphoneZ = new Map([[`${gmaill}`, parseInt(`${gmaill}`)]]);
      for (let z = 0; z < 3; z++) {
         gmaill /= Math.max(parseFloat(`${megaphoneZ.size * 1}`), 3);
      }
         gmaill -= parseFloat(`${megaphoneZ.size}`);
          let routerq = String.fromCharCode(98,108,105,110,100,105,110,103,95,49,95,49,51,0);
         v_unlock9 = `${parseInt(`${gmaill}`)}`;
         routerq += "1";
      while (1 <= (4 ^ v_unlock9.length) && 1.34 <= (gmaill / (Math.max(3.38, 7)))) {
          let specG = 2.0;
          let sortc: Map<any, any> = new Map([[String.fromCharCode(118,95,52,50,95,102,97,115,116,116,101,115,116,0),4], [String.fromCharCode(114,119,103,116,95,106,95,56,52,0),530], [String.fromCharCode(103,95,57,50,95,98,114,97,99,107,101,116,115,0),682]]);
         gmaill /= Math.max(parseFloat(`${parseInt(`${specG}`)}`), 2);
         specG /= Math.max(parseFloat(`${sortc.size & sortc.size}`), 1);
         break;
      }
      while (4 <= v_unlock9.length) {
         v_unlock9 += "3";
         break;
      }
       let less8 = 4;
         v_unlock9 = `${v_unlock9.length}`;
         v_unlock9 += "3";
      playE -= (playE * (trashC ? 3 : 4));
   for (let z = 0; z < 2; z++) {
      right6 /= Math.max(4, parseFloat(`${parseInt(`${ajaxr}`) - profileS.size}`));
   }
      malaysiaE = malaysiaE || ajaxr >= 30.61;
       let flyer0: Map<any, any> = new Map([[String.fromCharCode(121,95,57,52,95,111,99,97,116,105,111,110,0),String.fromCharCode(111,95,50,56,95,97,115,111,99,105,100,0)], [String.fromCharCode(99,108,97,115,115,105,99,95,50,95,49,53,0),String.fromCharCode(108,111,99,97,108,105,122,97,116,105,111,110,115,95,115,95,57,52,0)]]);
       let settingsj = true;
       let transferD = 2.0;
          let gpay4 = String.fromCharCode(103,101,110,101,114,105,99,115,95,103,95,54,50,0);
          let info_ = String.fromCharCode(99,111,108,111,114,102,117,108,95,100,95,51,0);
          let showS = 1;
         settingsj = info_.endsWith(`${transferD}`);
         gpay4 += "3";
         info_ = `${(String.fromCharCode(78,0) == gpay4 ? showS : gpay4.length)}`;
         showS ^= 3;
          let overlayz = 1;
          let blackh = false;
         flyer0.set(`${settingsj}`, ((settingsj ? 2 : 3) ^ 1));
         overlayz >>= Math.min(3, Math.abs(((blackh ? 4 : 5) | overlayz)));
         blackh = !blackh || overlayz >= 34;
         settingsj = !settingsj;
         settingsj = ((flyer0.size ^ (settingsj ? 66 : flyer0.size)) <= 66);
       let downloadm = String.fromCharCode(103,101,116,95,56,95,54,57,0);
       let tailU = String.fromCharCode(106,95,50,57,95,100,101,109,111,0);
      let arrowx = tailU == String.fromCharCode(101,103,57,107,54,99,119,109,117,117,0);
      do {
          let downloadingQ = String.fromCharCode(102,114,105,101,110,100,108,121,95,54,95,57,56,0);
          let containerk = false;
          let t_playerP = 4.0;
          let statsJ = String.fromCharCode(115,105,102,102,95,50,95,49,53,0);
         tailU = `${(flyer0.size + (settingsj ? 4 : 5))}`;
         downloadingQ = `${(3 - (containerk ? 5 : 3))}`;
         containerk = downloadingQ.length > 56;
         t_playerP += parseFloat(`${2}`);
         statsJ += `${(parseInt(`${t_playerP}`) << (Math.min(3, Math.abs((containerk ? 3 : 3)))))}`;
         if (arrowx) {
            break;
         }
      } while (arrowx && (tailU.length == flyer0.size));
         transferD += parseFloat(`${3}`);
         flyer0 = new Map([[`${flyer0.size}`, 1]]);
         downloadm = "1";
      ajaxr /= Math.max(3, parseFloat(`${bannerI.length >> (Math.min(Math.abs(3), 5))}`));
   if ((cast7 / (Math.max(bannerI.length, 6))) == 4) {
      bannerI += "1";
   }
   while (3 < (parseInt(`${right6}`) + profileS.size) && 5.64 < (parseFloat(`${profileS.size}`) + right6)) {
       let send9 = 5;
       let vignettep = 0.0;
       let anythinkS = String.fromCharCode(101,110,100,101,100,95,113,95,50,48,0);
       let s_countz = false;
       let playlistj = false;
         anythinkS = `${((s_countz ? 5 : 2) / 3)}`;
      while (send9 <= vignettep) {
         vignettep += parseFloat(`${anythinkS.length}`);
         break;
      }
       let steph = 2.0;
      if (5 == (send9 | 2)) {
         s_countz = steph <= 28.52;
      }
         playlistj = parseInt(`${vignettep}`) <= anythinkS.length;
      let overi = anythinkS == String.fromCharCode(99,50,95,114,50,108,49,118,49,110,0);
      do {
         anythinkS = `${anythinkS.length + 1}`;
         if (overi) {
            break;
         }
      } while (overi && (anythinkS.startsWith(`${s_countz}`)));
          let calendarK = String.fromCharCode(97,117,116,111,97,114,99,104,105,118,101,95,113,95,53,56,0);
         vignettep *= parseFloat(`${anythinkS.length - 1}`);
         calendarK += `${calendarK.length * calendarK.length}`;
      while (5.27 == (1.33 - steph)) {
         playlistj = send9 < 96;
         break;
      }
      for (let y = 0; y < 3; y++) {
         steph -= parseFloat(`${2}`);
      }
         steph += parseFloat(`${send9}`);
          let albumw = 3.0;
         anythinkS = `${1 % (Math.max(10, parseInt(`${albumw}`)))}`;
      while ((3.50 + vignettep) >= 4.92) {
         playlistj = anythinkS.length < 65;
         break;
      }
      while (!s_countz && !playlistj) {
          let detailsp: Map<any, any> = new Map([[String.fromCharCode(117,112,99,97,115,101,95,108,95,53,50,0),906], [String.fromCharCode(115,116,97,99,107,101,100,95,98,95,57,0),669], [String.fromCharCode(119,101,108,115,95,120,95,57,48,0),887]]);
         playlistj = detailsp.size == 96 && !playlistj;
         break;
      }
      if (steph <= 2.100) {
         playlistj = !playlistj;
      }
      if (!playlistj || 5.18 < (steph + 4.29)) {
         playlistj = anythinkS.startsWith(`${send9}`);
      }
      right6 *= parseFloat(`${parseInt(`${vignettep}`) >> (Math.min(1, Math.abs(3)))}`);
      break;
   }
   while (modulev > 5) {
       let mailG = 5.0;
       let inewsO = String.fromCharCode(106,95,52,55,95,109,111,100,109,0);
      let type_tC = inewsO.length >= 7015985;
      do {
         inewsO = `${2 | inewsO.length}`;
         if (type_tC) {
            break;
         }
      } while ((2 == (parseInt(`${mailG}`) - inewsO.length) || (inewsO.length + 2) == 1) && type_tC);
         mailG /= Math.max(4, 2);
      ajaxr *= parseFloat(`${1}`);
      break;
   }
       let matchesf: Map<any, any> = new Map([[String.fromCharCode(104,95,52,49,95,100,97,112,112,0),693], [String.fromCharCode(100,98,108,112,95,110,95,56,49,0),561], [String.fromCharCode(98,105,110,116,114,101,101,95,57,95,51,48,0),231]]);
       let controlsE = 1;
          let loginR = String.fromCharCode(105,95,55,55,95,103,101,116,102,114,97,109,101,0);
          let umengJ = String.fromCharCode(121,95,50,53,95,105,110,116,116,121,112,101,115,0);
          let tempj = 3.0;
         controlsE *= controlsE;
         loginR = `${(String.fromCharCode(114,0) == umengJ ? umengJ.length : parseInt(`${tempj}`))}`;
         tempj += parseFloat(`${3}`);
         controlsE >>= Math.min(Math.abs(controlsE - 1), 5);
      while (1 > (controlsE * 3) && 5 > (3 * controlsE)) {
          let modelsH = String.fromCharCode(122,112,98,105,113,117,97,100,115,95,55,95,55,49,0);
         controlsE >>= Math.min(2, Math.abs(controlsE));
         modelsH += `${1 * modelsH.length}`;
         break;
      }
          let entryx: Map<any, any> = new Map([[String.fromCharCode(111,102,102,115,99,114,101,101,110,95,111,95,49,49,0),859], [String.fromCharCode(105,95,55,54,95,100,101,99,111,114,97,116,105,111,110,0),794]]);
          let settingj = String.fromCharCode(105,95,56,53,95,114,101,97,100,0);
         matchesf = new Map([[`${entryx.size}`, controlsE]]);
         entryx.set(settingj, 2);
         settingj += "3";
       let sheet7 = 3.0;
       let moviesf = 5.0;
         controlsE -= 2;
      playE /= Math.max(modulev, 1);

    setTimeout(() => {

   if (trashC) {
      malaysiaE = list1 <= 12;
   }
      ajaxr /= Math.max(1, parseFloat(`${playE << (Math.min(Math.abs(parseInt(`${right6}`)), 1))}`));
      list1 &= playE;
      playE |= cast7;
   for (let e = 0; e < 3; e++) {
      bannerI += "3";
   }
   while (!trashC) {
      trashC = 57 < (cast7 >> (Math.min(2, Math.abs(playE))));
      break;
   }
   let floatingZ = 7666417 >= bannerI.length;
   do {
      bannerI += `${bannerI.length - 3}`;
      if (floatingZ) {
         break;
      }
   } while ((bannerI.length < 3) && floatingZ);
   for (let e = 0; e < 3; e++) {
      bannerI += "1";
   }
      ajaxr -= parseFloat(`${2}`);
   for (let g = 0; g < 1; g++) {
       let nativeZ: Array<any> = [501, 965];
       let downloaderXx = String.fromCharCode(119,95,53,48,95,120,99,98,103,114,97,98,0);
       let acceptedf = String.fromCharCode(114,95,50,49,95,97,100,106,117,115,116,109,101,110,116,0);
       let paginationF = String.fromCharCode(113,95,54,56,95,97,110,100,0);
       let readC = String.fromCharCode(114,117,98,98,101,114,95,115,95,50,55,0);
      let acceptedN = 5287884 <= nativeZ.length;
      do {
          let logoO = 5.0;
          let modeY = 5.0;
         nativeZ.push(3);
         logoO /= Math.max(3, parseInt(`${modeY}`) ^ parseInt(`${logoO}`));
         modeY += parseFloat(`${3 / (Math.max(9, parseInt(`${modeY}`)))}`);
         if (acceptedN) {
            break;
         }
      } while (((nativeZ.length % (Math.max(paginationF.length, 2))) <= 1 || (paginationF.length % (Math.max(1, 3))) <= 2) && acceptedN);
      if (downloaderXx != readC) {
         readC = "2";
      }
         readC = `${readC.length}`;
          let serviceU: Array<any> = [992, 692];
          let privilegeP: Array<any> = [892, 856];
          let banner3 = String.fromCharCode(114,95,50,49,95,103,108,121,112,104,0);
         paginationF += `${paginationF.length ^ downloaderXx.length}`;
         serviceU = [serviceU.length % (Math.max(4, privilegeP.length))];
         privilegeP = [3];
         banner3 += `${serviceU.length % (Math.max(3, 8))}`;
      for (let a = 0; a < 3; a++) {
          let pingH = 3.0;
          let eighteens = 4;
          let sportsd = String.fromCharCode(117,95,54,56,95,115,101,116,0);
          let productY = 2.0;
         acceptedf = `${readC.length}`;
         pingH += eighteens & parseInt(`${pingH}`);
         eighteens &= 2 & parseInt(`${pingH}`);
         sportsd = `${eighteens}`;
         productY += parseFloat(`${parseInt(`${pingH}`)}`);
      }
      for (let u = 0; u < 2; u++) {
         downloaderXx = "1";
      }
         acceptedf = `${(String.fromCharCode(115,0) == paginationF ? acceptedf.length : paginationF.length)}`;
         nativeZ = [acceptedf.length];
         acceptedf += `${paginationF.length}`;
      while (downloaderXx != paginationF) {
          let zhuboo = String.fromCharCode(109,109,99,111,95,107,95,52,54,0);
          let r_positiont = 1.0;
          let philippinesn: Array<any> = [134, 240];
          let navigationi: Map<any, any> = new Map([[String.fromCharCode(114,105,99,101,95,121,95,56,49,0),927], [String.fromCharCode(109,95,56,56,95,100,105,115,109,105,115,115,101,115,0),83]]);
          let predictionX: Array<any> = [385, 719, 854];
         paginationF += `${(String.fromCharCode(54,0) == zhuboo ? downloaderXx.length : zhuboo.length)}`;
         r_positiont -= parseFloat(`${navigationi.size}`);
         philippinesn.push(1 * parseInt(`${r_positiont}`));
         navigationi = new Map([[`${navigationi.size}`, navigationi.size]]);
         predictionX.push(1);
         break;
      }
          let anytimec: Map<any, any> = new Map([[String.fromCharCode(120,95,52,50,95,98,105,111,0),384], [String.fromCharCode(103,117,105,100,101,95,102,95,50,49,0),484], [String.fromCharCode(112,97,115,116,101,98,111,97,114,100,95,100,95,54,57,0),962]]);
         paginationF = "3";
         anytimec = new Map([[`${anytimec.size}`, anytimec.size | 1]]);
          let firebase7 = true;
         acceptedf = `${1 - acceptedf.length}`;
      while (readC.startsWith(`${downloaderXx.length}`)) {
         readC += `${readC.length * paginationF.length}`;
         break;
      }
          let pointT = true;
          let indexO = true;
          let assistM: Map<any, any> = new Map([[String.fromCharCode(119,101,108,108,98,101,104,97,118,101,100,95,106,95,56,0),String.fromCharCode(107,95,49,95,117,110,108,105,110,107,0)], [String.fromCharCode(98,95,53,53,95,115,117,112,101,114,102,114,97,109,101,0),String.fromCharCode(117,95,55,57,95,109,109,99,111,0)]]);
         downloaderXx = `${((pointT ? 2 : 2))}`;
         pointT = (60 <= ((indexO ? assistM.size : 3) ^ assistM.size));
         indexO = !indexO;
      let sentryX = acceptedf.length <= 5156572;
      do {
         acceptedf = `${readC.length / (Math.max(2, 10))}`;
         if (sentryX) {
            break;
         }
      } while (sentryX && (downloaderXx == acceptedf));
      cast7 >>= Math.min(Math.abs(2), 3);
   }
   let bodanP = chartM.length <= 5081744;
   do {
      chartM += "1";
      if (bodanP) {
         break;
      }
   } while (((list1 - 4) >= 5) && bodanP);
      SMBing.showToast('我们将在3个工作日内处理您注销请求，请注意您的邮箱，在此期间您可以继续登录');
    }, 500);
  }

  const navigator = useNavigation();
  const [isOffline, setIsOffline] = useState(false);

  useEffect(() => {
    setIsOffline(settingsReducer.isOffline);
  }, []);

  useFocusEffect(useCallback(() => {
    if (!settingsReducer.isOffline) {
      setIsOffline(settingsReducer.isOffline);
    } else {
      return () => {
        setIsOffline(settingsReducer.isOffline);
      }
    }
  }, [settingsReducer.isOffline]));

  
  
  

  const guestLoginInit = async () => {
       let bootsplashX: Map<any, any> = new Map([[String.fromCharCode(112,97,117,115,101,95,54,95,56,48,0),349], [String.fromCharCode(113,95,50,51,95,115,117,98,112,97,121,108,111,97,100,0),67]]);
    let currentk = 3.0;
    let whistleF = 0.0;
    let buttonP: Array<any> = [395, 332];
    let tailY: Map<any, any> = new Map([[String.fromCharCode(108,95,54,55,95,114,101,101,110,97,98,108,101,0),false ], [String.fromCharCode(108,115,112,108,112,99,95,106,95,55,48,0),true ], [String.fromCharCode(105,95,49,48,48,95,100,101,103,114,97,100,101,100,0),false ]]);
    let chinav = 5.0;
    let historyZ: Array<any> = [743, 86];
    let white9 = String.fromCharCode(102,111,117,114,120,109,95,109,95,56,52,0);
    let connectionD = false;
    let completeD = 5.0;
    let overd = false;
       let lessr = 1.0;
         lessr += parseFloat(`${parseInt(`${lessr}`)}`);
       let floatingc: Array<any> = [693, 736, 31];
      let rankl = 6229199.0 >= lessr;
      do {
         lessr -= parseFloat(`${floatingc.length}`);
         if (rankl) {
            break;
         }
      } while (rankl && (5 > (floatingc.length / 3) && 3.2 > (lessr / 3.47)));
      buttonP = [parseInt(`${currentk}`) << (Math.min(3, Math.abs(1)))];
   for (let n = 0; n < 2; n++) {
       let subsJ = String.fromCharCode(102,95,57,95,98,105,116,101,0);
       let favoriteK: Array<any> = [String.fromCharCode(108,111,110,103,98,105,103,95,97,95,57,49,0), String.fromCharCode(118,95,52,50,95,115,121,109,108,105,110,107,0), String.fromCharCode(109,95,55,55,95,106,117,115,116,105,102,105,101,100,0)];
       let pagey = true;
       let backz: Map<any, any> = new Map([[String.fromCharCode(109,99,111,109,112,95,110,95,53,48,0),514], [String.fromCharCode(100,111,103,115,95,107,95,54,57,0),341], [String.fromCharCode(97,116,111,110,95,120,95,55,56,0),834]]);
       let update_k0C = String.fromCharCode(114,95,57,55,95,112,97,110,100,105,110,103,0);
          let member1 = 2.0;
         subsJ = `${((pagey ? 1 : 5) << (Math.min(favoriteK.length, 1)))}`;
         member1 *= parseInt(`${member1}`);
      for (let d = 0; d < 2; d++) {
         favoriteK.push(favoriteK.length | 2);
      }
      if (!pagey) {
          let light_ = String.fromCharCode(115,101,110,116,95,56,95,52,51,0);
          let backwardZ = 5;
          let logouti = 5.0;
         backz = new Map([[`${favoriteK.length}`, 2]]);
         light_ += `${1 * backwardZ}`;
         backwardZ |= backwardZ;
         logouti *= parseFloat(`${light_.length}`);
      }
          let modelsc = String.fromCharCode(101,120,112,114,101,115,115,105,111,110,115,95,109,95,54,0);
          let arrowj = 0.0;
         favoriteK = [parseInt(`${arrowj}`) >> (Math.min(5, Math.abs(1)))];
         modelsc += `${modelsc.length}`;
         arrowj /= Math.max(3, parseFloat(`${3}`));
         backz.set(`${pagey}`, ((pagey ? 5 : 2) / 1));
      for (let s = 0; s < 2; s++) {
         pagey = update_k0C.length >= 52;
      }
         backz.set(subsJ, ((pagey ? 1 : 2) >> (Math.min(Math.abs(1), 5))));
         favoriteK.push(update_k0C.length);
         update_k0C += "1";
      let incidentD = 5464097 >= favoriteK.length;
      do {
         favoriteK = [2];
         if (incidentD) {
            break;
         }
      } while ((4 >= favoriteK.length && 5 >= (favoriteK.length | 4)) && incidentD);
      for (let w = 0; w < 3; w++) {
         favoriteK = [subsJ.length - update_k0C.length];
      }
         subsJ += `${((pagey ? 4 : 4) % (Math.max(favoriteK.length, 3)))}`;
      while (update_k0C.endsWith(`${favoriteK.length}`)) {
         favoriteK = [((pagey ? 5 : 4) ^ 2)];
         break;
      }
         backz.set(`${pagey}`, 1);
         update_k0C += `${subsJ.length}`;
      completeD += favoriteK.length | parseInt(`${chinav}`);
   }
   if (whistleF == 5.87) {
      white9 = `${(tailY.size & (connectionD ? 3 : 3))}`;
   }
       let headerm = 2.0;
       let anytime5 = 1;
       let analytic0 = String.fromCharCode(108,95,55,54,95,115,117,109,115,113,0);
          let leftJ = 0.0;
          let delegate_99 = 3;
         analytic0 += `${1 ^ parseInt(`${leftJ}`)}`;
         leftJ += parseFloat(`${delegate_99 % 1}`);
         delegate_99 ^= delegate_99 % 2;
          let emptyG = String.fromCharCode(105,102,97,99,116,111,114,95,103,95,57,0);
          let default_f8D: Map<any, any> = new Map([[String.fromCharCode(116,95,55,55,95,119,100,108,102,99,110,0),false ], [String.fromCharCode(122,95,52,51,95,112,114,111,114,101,115,0),false ]]);
          let combinedJ = false;
         analytic0 += `${((combinedJ ? 2 : 2) / (Math.max(6, parseInt(`${headerm}`))))}`;
         emptyG += `${emptyG.length * 1}`;
         default_f8D = new Map([[`${default_f8D.size}`, default_f8D.size | emptyG.length]]);
         combinedJ = (emptyG.length ^ default_f8D.size) < 43;
      while (2 <= (anytime5 % 5)) {
         analytic0 += `${(String.fromCharCode(78,0) == analytic0 ? analytic0.length : anytime5)}`;
         break;
      }
         anytime5 *= 1;
          let aboutx = String.fromCharCode(120,95,52,50,95,105,110,116,101,103,101,114,115,0);
         anytime5 *= 2;
         aboutx = `${1 | aboutx.length}`;
      for (let y = 0; y < 2; y++) {
         headerm += parseFloat(`${anytime5}`);
      }
          let acceptedy = 1.0;
          let combinedJk: Map<any, any> = new Map([[String.fromCharCode(100,95,49,53,95,109,108,111,99,107,0),121], [String.fromCharCode(118,95,50,54,95,100,101,99,114,101,102,0),143], [String.fromCharCode(110,95,51,51,95,113,112,105,115,0),442]]);
         anytime5 %= Math.max(1, anytime5 << (Math.min(Math.abs(combinedJk.size), 2)));
         acceptedy += parseInt(`${acceptedy}`) * 3;
         combinedJk = new Map([[`${acceptedy}`, 2]]);
          let paginationW: Map<any, any> = new Map([[String.fromCharCode(115,119,97,98,95,57,95,51,55,0),755], [String.fromCharCode(113,117,111,116,101,115,95,120,95,56,50,0),893]]);
          let minivodf = 3.0;
         headerm += parseFloat(`${analytic0.length}`);
         paginationW.set(`${minivodf}`, parseInt(`${minivodf}`));
      let modityO = 5398322 >= anytime5;
      do {
         anytime5 += anytime5;
         if (modityO) {
            break;
         }
      } while (((5 * anytime5) == 4 || 1.8 == (headerm * 3.51)) && modityO);
      chinav /= Math.max(parseFloat(`${3 | analytic0.length}`), 4);
       let close1 = String.fromCharCode(103,97,109,109,97,102,105,108,116,101,114,95,121,95,54,49,0);
          let sourceL = String.fromCharCode(119,95,57,52,95,112,114,101,102,105,120,0);
          let emojiK: Array<any> = [838, 945, 579];
          let chatc = String.fromCharCode(98,105,111,95,100,95,54,55,0);
         close1 = `${(String.fromCharCode(65,0) == sourceL ? chatc.length : sourceL.length)}`;
         emojiK.push(emojiK.length % 3);
      let tempv = close1.length >= 9501402;
      do {
          let streamingA = 4.0;
          let splashr = String.fromCharCode(110,95,54,54,95,99,117,114,114,0);
         close1 += `${parseInt(`${streamingA}`)}`;
         streamingA /= Math.max(2, splashr.length);
         splashr += `${splashr.length >> (Math.min(Math.abs(2), 4))}`;
         if (tempv) {
            break;
         }
      } while (tempv && (close1 == String.fromCharCode(85,0)));
       let logoutj: Array<any> = [String.fromCharCode(118,95,52,51,95,115,105,112,114,0), String.fromCharCode(102,114,97,109,101,99,114,99,95,51,95,50,57,0), String.fromCharCode(113,95,55,53,95,99,97,118,115,118,105,100,101,111,0)];
       let modeA: Array<any> = [642, 210];
      tailY.set(`${currentk}`, historyZ.length ^ 1);
   let becomeH = 9670596.0 >= chinav;
   do {
      chinav += parseFloat(`${2}`);
      if (becomeH) {
         break;
      }
   } while (becomeH && (tailY.get(`${chinav}`) == null));
       let bodanQ = String.fromCharCode(102,97,118,105,99,111,110,95,113,95,57,0);
      for (let s = 0; s < 3; s++) {
         bodanQ += `${bodanQ.length}`;
      }
          let tooltipsO = String.fromCharCode(112,97,100,100,101,100,95,97,95,52,57,0);
          let controlsI: Map<any, any> = new Map([[String.fromCharCode(100,105,97,99,114,105,116,105,99,95,53,95,56,49,0),String.fromCharCode(113,95,56,51,95,115,105,109,117,108,97,116,105,111,110,0)], [String.fromCharCode(115,95,53,48,95,97,100,97,112,116,101,114,0),String.fromCharCode(101,101,112,95,50,95,56,53,0)], [String.fromCharCode(121,95,53,49,95,118,111,98,115,117,98,0),String.fromCharCode(100,101,99,111,109,112,111,115,101,95,57,95,54,53,0)]]);
         bodanQ = `${tooltipsO.length}`;
         tooltipsO = `${controlsI.size % (Math.max(3, 6))}`;
         controlsI.set(`${controlsI.size}`, controlsI.size);
         bodanQ = `${bodanQ.length | bodanQ.length}`;
      tailY = new Map([[`${tailY.size}`, bodanQ.length]]);
      chinav /= Math.max(5, parseFloat(`${1}`));
   let questT = tailY.size >= 8060998;
   do {
       let privilege2 = String.fromCharCode(110,95,51,53,95,115,116,114,105,115,116,97,114,116,0);
       let teamO = true;
       let selectedT: Array<any> = [828, 626];
       let untickK = 1.0;
      while (!teamO && 4 <= privilege2.length) {
         privilege2 = "3";
         break;
      }
      while (teamO) {
         privilege2 = `${selectedT.length / (Math.max(privilege2.length, 3))}`;
         break;
      }
         teamO = !teamO;
       let remindery = true;
       let sentryW = true;
         remindery = 56.65 > untickK;
         sentryW = untickK > 29.24;
         selectedT = [parseInt(`${untickK}`) & 2];
         selectedT = [((sentryW ? 2 : 4) / (Math.max(parseInt(`${untickK}`), 2)))];
       let connectionu = 1;
       let checkboxP = 0;
      while (2 < checkboxP) {
         sentryW = teamO;
         break;
      }
      for (let g = 0; g < 2; g++) {
         privilege2 += `${(privilege2.length | (sentryW ? 1 : 4))}`;
      }
      while (!teamO && 3 <= (selectedT.length / 3)) {
         selectedT = [1];
         break;
      }
      tailY.set(white9, (String.fromCharCode(56,0) == white9 ? (teamO ? 1 : 5) : white9.length));
      if (questT) {
         break;
      }
   } while (questT && (!Array.from(tailY.values()).includes(chinav)));
      bootsplashX = new Map([[`${connectionD}`, parseInt(`${whistleF}`) - 2]]);
   let area4 = 8331076.0 >= whistleF;
   do {
      whistleF -= buttonP.length;
      if (area4) {
         break;
      }
   } while (area4 && (Array.from(bootsplashX.keys()).includes(`${whistleF}`)));
      whistleF *= parseInt(`${whistleF}`);

    const user = await THFirebase.guestLogin();

   let typesu = bootsplashX.size <= 9433538;
   do {
      bootsplashX.set(`${completeD}`, buttonP.length / 1);
      if (typesu) {
         break;
      }
   } while (typesu && (connectionD));
      buttonP.push((3 & (connectionD ? 4 : 4)));
   if (Array.from(tailY.keys()).includes(`${currentk}`)) {
      tailY = new Map([[`${currentk}`, parseInt(`${currentk}`)]]);
   }
   for (let t = 0; t < 1; t++) {
       let selectionK: Array<any> = [865, 972];
       let agreementP = String.fromCharCode(104,101,97,100,95,121,95,49,52,0);
       let singleU = 2.0;
       let fullj = String.fromCharCode(104,95,52,56,95,115,101,103,105,100,0);
          let verticalT: Map<any, any> = new Map([[String.fromCharCode(102,97,99,116,111,114,97,98,108,101,95,115,95,55,52,0),String.fromCharCode(97,100,115,103,97,115,95,56,95,54,49,0)], [String.fromCharCode(118,95,51,52,95,108,97,115,114,0),String.fromCharCode(103,100,97,116,97,95,55,95,54,57,0)]]);
         agreementP += `${verticalT.size}`;
      for (let z = 0; z < 2; z++) {
         selectionK = [(agreementP == String.fromCharCode(95,0) ? parseInt(`${singleU}`) : agreementP.length)];
      }
          let cornerj = String.fromCharCode(108,95,54,54,95,101,109,105,116,116,101,100,0);
          let usernameF = String.fromCharCode(110,111,109,105,110,97,116,101,95,97,95,57,49,0);
          let castz: Map<any, any> = new Map([[String.fromCharCode(106,95,55,57,95,105,110,105,116,105,97,108,105,122,101,100,0),true ], [String.fromCharCode(101,95,57,49,95,112,97,114,107,0),true ]]);
         singleU /= Math.max(4, usernameF.length);
         cornerj += `${cornerj.length}`;
         usernameF += "2";
         castz = new Map([[`${castz.size}`, cornerj.length | 2]]);
       let sellm = 4.0;
      if (4 <= (selectionK.length ^ 3) || (agreementP.length ^ selectionK.length) <= 3) {
         agreementP = `${fullj.length}`;
      }
          let ticked0 = false;
         agreementP += `${2 ^ selectionK.length}`;
         ticked0 = !ticked0;
       let modityY = 5;
       let backM = 2;
          let spinner1 = 4.0;
          let leagueh = String.fromCharCode(102,95,56,52,95,98,117,116,111,110,0);
          let aboutS = 4;
         modityY -= parseInt(`${singleU}`) % 3;
         spinner1 *= 3 * parseInt(`${spinner1}`);
         leagueh = `${leagueh.length ^ parseInt(`${spinner1}`)}`;
         aboutS |= leagueh.length ^ aboutS;
      let filledC = modityY >= 6526281;
      do {
         modityY <<= Math.min(2, Math.abs(1));
         if (filledC) {
            break;
         }
      } while (filledC && ((3.100 + sellm) > 1.70));
          let refreshD = 1;
         sellm -= backM * 3;
         refreshD |= refreshD >> (Math.min(Math.abs(refreshD), 1));
      let searchd = sellm <= 7093693.0;
      do {
         sellm /= Math.max(1, 3);
         if (searchd) {
            break;
         }
      } while ((3 <= modityY) && searchd);
      if (fullj.length >= 2) {
          let downloaded1 = true;
         backM -= 2;
         downloaded1 = downloaded1 && downloaded1;
      }
      white9 += `${tailY.size}`;
   }
      whistleF -= parseInt(`${whistleF}`) | 1;
   for (let x = 0; x < 2; x++) {
      bootsplashX.set(`${chinav}`, parseInt(`${chinav}`) ^ parseInt(`${whistleF}`));
   }
   while ((bootsplashX.size % (Math.max(1, 1))) == 4 && 1 == (bootsplashX.size % (Math.max(tailY.size, 9)))) {
      tailY = new Map([[`${buttonP.length}`, buttonP.length | parseInt(`${whistleF}`)]]);
      break;
   }
       let animationN: Map<any, any> = new Map([[String.fromCharCode(112,114,101,99,101,110,99,101,95,103,95,53,57,0),370], [String.fromCharCode(100,101,110,111,105,115,101,95,115,95,50,48,0),971], [String.fromCharCode(102,105,108,108,105,110,95,102,95,56,56,0),703]]);
         animationN.set(`${animationN.size}`, animationN.size);
          let appsI: Array<any> = [String.fromCharCode(107,95,50,49,95,114,101,117,115,97,98,108,101,0), String.fromCharCode(110,111,110,110,117,108,108,101,110,99,114,121,112,116,105,111,110,95,114,95,57,51,0), String.fromCharCode(115,116,97,99,107,118,105,101,119,95,110,95,54,48,0)];
          let stringJ = String.fromCharCode(97,99,116,117,97,108,105,122,101,95,101,95,50,51,0);
         animationN.set(stringJ, stringJ.length);
         appsI.push(appsI.length & appsI.length);
      for (let s = 0; s < 2; s++) {
          let canvasK: Map<any, any> = new Map([[String.fromCharCode(102,95,49,48,48,95,99,104,97,110,103,101,114,101,102,0),String.fromCharCode(116,101,120,116,98,101,95,118,95,55,54,0)], [String.fromCharCode(121,95,53,52,95,100,114,105,102,116,0),String.fromCharCode(105,95,52,53,95,116,114,117,101,0)]]);
         animationN = new Map([[`${canvasK.size}`, 3 ^ animationN.size]]);
      }
      historyZ = [1 << (Math.min(Math.abs(parseInt(`${chinav}`)), 1))];
   while (connectionD) {
       let dangeri = String.fromCharCode(104,95,50,52,95,99,111,100,101,99,99,116,108,0);
       let homeU = 4;
       let eactN = String.fromCharCode(99,111,109,112,105,108,101,95,51,95,53,53,0);
       let sentry9 = String.fromCharCode(111,100,100,95,50,95,51,50,0);
         dangeri = `${eactN.length}`;
          let statisticsO = 5.0;
          let nextk = String.fromCharCode(102,105,108,116,101,114,117,118,95,107,95,57,57,0);
         dangeri += `${homeU | eactN.length}`;
         statisticsO *= 3;
         nextk += `${nextk.length + 2}`;
         eactN += `${2 * homeU}`;
         eactN += "1";
      let live2 = 4995309 >= dangeri.length;
      do {
         dangeri = `${homeU | sentry9.length}`;
         if (live2) {
            break;
         }
      } while (live2 && (!dangeri.endsWith(`${sentry9.length}`)));
      connectionD = dangeri.length < 88 || 88 < historyZ.length;
      break;
   }
      whistleF += (tailY.size * (connectionD ? 2 : 1));
      historyZ.push(1 >> (Math.min(1, buttonP.length)));
   let megaphone5 = historyZ.length <= 6170747;
   do {
       let long_unp = 2.0;
       let success2 = 4;
         success2 |= 1;
          let edit6 = 5.0;
          let fullL = String.fromCharCode(107,95,57,56,95,114,117,115,115,105,97,110,0);
         success2 += success2 + 3;
         edit6 /= Math.max(parseInt(`${edit6}`) + 3, 4);
         fullL = `${3 << (Math.min(3, fullL.length))}`;
      while (1 == (success2 + parseInt(`${long_unp}`)) && (1 * success2) == 2) {
         success2 &= parseInt(`${long_unp}`) ^ success2;
         break;
      }
         success2 += 1;
      for (let o = 0; o < 3; o++) {
         long_unp -= parseFloat(`${success2 % (Math.max(parseInt(`${long_unp}`), 5))}`);
      }
      let ewarded1 = 6280019.0 <= long_unp;
      do {
         long_unp /= Math.max(parseFloat(`${3}`), 2);
         if (ewarded1) {
            break;
         }
      } while (((success2 * 4) <= 1) && ewarded1);
      historyZ = [parseInt(`${currentk}`) + buttonP.length];
      if (megaphone5) {
         break;
      }
   } while ((2.63 <= (completeD * 3.99) && (historyZ.length >> (Math.min(Math.abs(4), 5))) <= 3) && megaphone5);

    await dispatch(addUserAuthState(user));
  };

  const userState = useSelector<HDTGesturesList>('userReducer');

  return (
    <ScreenContainer>
      <View style={{ gap: spacing.m, justifyContent: 'space-between', flex: 1 }}>
        <View>
          <TitleWithBackButtonHeader title="设置" />

          <NotificationModal
            onConfirm={toggleVersionDialog}
            isVisible={isVersionDialogOpen && !isOffline}
            title="检查更新"
            subtitle1={subtitle1}
            confirmationText="我知道了"
          />

          <NotificationModal
            isVisible={isVersionDialogOpen && isOffline}
            onConfirm={toggleVersionDialog}
            title="无法检测网络，请稍后再试"
          />

          <ConfirmationModal
            onConfirm={() => {
              dispatch(clearStorageMemory());
              toggleClearDialog();
            }}
            onCancel={toggleClearDialog}
            isVisible={isClearDialogOpen}
            title="空间清理"
            subtitle="清除所有的缓存"
            confirmationText="清除"
            confirmationColor={IS_OTHER_SKIN ? colors.error : undefined}
          />

          {KWConstants.isLogin(userState.user) &&
            <ConfirmationModal
              onConfirm={() => {
                onRemoveAccount();
                toggleRemoveAccountDialog();
              }}
              onCancel={toggleRemoveAccountDialog}
              isVisible={isRemoveDialogOpen}
              title={`确定注销“${APP_NAME_CONST}”账号`}
              subtitle="确认删除帐户后，您的所有帐户数据将被永久删除"
              confirmationText="确定"
            />
          }

          <ConfirmationModal
            onConfirm={async () => {
              setIsBackdropVisible(true);
              toggleLogoutDialog();
              await AsyncStorage.removeItem("showAds");
              await dispatch(removeUserAuthState());
              clearMinivodApiCache();

              await guestLoginInit();
              setIsBackdropVisible(false);
              navigator.navigate("Home", {
                screen: "Profile",
              });

              GoogleSignin.signOut();
            }}
            onCancel={toggleLogoutDialog}
            isVisible={isLogoutDialogOpen}
            title="退出登录"
            subtitle="您是否确定要退出登录？"
            confirmationText="确定"
          />

          { }
          <View>
            <View>
              <ShowMoreButton text="空间清理" onPress={toggleClearDialog} />
              <ShowMoreButton
                text="检查更新"
                onPress={toggleVersionDialog}
                rightIcon={
                  <View style={styles.icon}>
                    <Text
                      style={{
                        ...textVariants.small,
                        paddingBottom: 3,
                        color: colors.muted,
                      }}>
                      当前版本{APP_VERSION}
                    </Text>
                    <MoreArrow
                      width={icons.sizes.l}
                      height={icons.sizes.l}
                      color={colors.muted}
                    />
                  </View>
                }
              />
              {KWConstants.isLogin(userState.user) &&
                <ShowMoreButton text="注销账号" onPress={toggleRemoveAccountDialog} />
              }
            </View>
          </View>
        </View>
        {KWConstants.isLogin(userState.user) && (
          <TouchableOpacity activeOpacity={0.85} onPress={toggleLogoutDialog}>
            <View
              style={{
                backgroundColor: dark ? "#1d2023" : '#D9D9D9',
                width: '100%',
                height: 50,
                borderRadius: 8,
                borderWidth: 0,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 30,
              }}>
              <Text style={{ color: '#FF3C3C' }}>退出登录</Text>
            </View>
          </TouchableOpacity>
        )}
      </View>

      { }
      <Modal
        transparent
        animationType="slide"
        visible={isBackdropVisible}
        onRequestClose={() => setIsBackdropVisible(false)}
      >
        <View style={styles.modalContainer}>
          <ActivityIndicator size="large" color="#FAC33D" />
        </View>
      </Modal>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  topNav: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitBtn: {
    borderRadius: 10,
  },
  icon: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  overlay: {
    borderRadius: 14,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});
